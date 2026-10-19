// Convierte un .md simple (#, ##, ###, párrafos, listas, tablas, **negrita**, `código`) en un .docx con la marca AndiBite.
// Uso: node md2docx.js entrada.md salida.docx [logo.png]
const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, ShadingType, BorderStyle, AlignmentType, LevelFormat, Footer, PageNumber, ImageRun } = require('docx');
const [, , IN, OUT, LOGO] = process.argv;
const md = fs.readFileSync(IN, 'utf8').replace(/\r/g, '').split('\n');
const BROWN = '4A2018', RED = 'BA4036', CREAM = 'F7ECDA', TEXT = '3B1A14', MID = '6B3A2A', FONT = 'Calibri';
const W = 9360; // ancho útil: carta con márgenes de 1"
function runs(text, base = {}) {
  const out = []; const re = /(\*\*[^*]+\*\*|`[^`]+`)/g; let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    const t = m[0];
    if (t.startsWith('**')) out.push(new TextRun({ text: t.slice(2, -2), ...base, bold: true }));
    else out.push(new TextRun({ text: t.slice(1, -1), font: 'Consolas', size: 19, color: BROWN }));
    last = m.index + t.length;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), ...base }));
  return out;
}
const children = [], numDefs = [];
const border = { style: BorderStyle.SINGLE, size: 4, color: 'D9C3A8' };
const borders = { top: border, bottom: border, left: border, right: border };
let title = 'AndiBite', i = 0, n = 0, afterTitle = false;
while (i < md.length) {
  const l = md[i];
  if (l.startsWith('# ')) {
    title = l.slice(2).trim();
    children.push(new Paragraph({ heading: HeadingLevel.TITLE, spacing: { after: 80 }, children: [new TextRun({ text: title, bold: true, size: 40, color: BROWN, font: FONT })] }));
    afterTitle = true; i++; continue;
  }
  if (afterTitle && /^Responsable:/i.test(l.trim())) {
    children.push(new Paragraph({ spacing: { after: 120 }, border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: RED, space: 6 } }, children: [new TextRun({ text: l.trim(), italics: true, size: 20, color: MID })] }));
    afterTitle = false; i++; continue;
  }
  if (l.trim() !== '') afterTitle = false;
  if (l.startsWith('## ')) { children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, children: runs(l.slice(3)) })); i++; continue; }
  if (l.startsWith('### ')) { children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, children: runs(l.slice(4)) })); i++; continue; }
  if (l.startsWith('#### ')) { children.push(new Paragraph({ spacing: { before: 140, after: 60 }, children: runs(l.slice(5), { bold: true, color: MID }) })); i++; continue; }
  if (/^-{3,}\s*$/.test(l)) { children.push(new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: RED, space: 1 } }, spacing: { after: 160 }, children: [] })); i++; continue; }
  if (l.trim().startsWith('|')) {
    const rows = [];
    while (i < md.length && md[i].trim().startsWith('|')) { const r = md[i].trim(); if (!/^\|[\s:|-]+\|?$/.test(r)) rows.push(r.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim())); i++; }
    const nc = Math.max(...rows.map(r => r.length));
    rows.forEach(r => { while (r.length < nc) r.push(''); });
    const len = new Array(nc).fill(0); rows.forEach(r => r.forEach((c, j) => { len[j] = Math.max(len[j], Math.min(c.replace(/\*\*/g, '').length, 60)); }));
    const minW = nc > 8 ? 500 : 1100;
    const tot = len.reduce((a, b) => a + b, 0) || 1; let cw = len.map(x => Math.max(minW, Math.round(W * x / tot)));
    const s = cw.reduce((a, b) => a + b, 0); cw = cw.map(x => Math.round(x * W / s)); cw[nc - 1] += W - cw.reduce((a, b) => a + b, 0);
    const fs_ = nc > 8 ? 15 : 19;
    children.push(new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: cw, rows: rows.map((r, ri) => new TableRow({ tableHeader: ri === 0, children: r.map((c, j) => new TableCell({ borders, width: { size: cw[j], type: WidthType.DXA }, shading: { type: ShadingType.CLEAR, color: 'auto', fill: ri === 0 ? BROWN : (ri % 2 ? 'FFFFFF' : CREAM) }, margins: { top: 50, bottom: 50, left: 80, right: 80 }, children: [new Paragraph({ children: runs(c, ri === 0 ? { bold: true, color: 'FFFFFF', size: fs_ } : { size: fs_ }) })] })) })) }));
    children.push(new Paragraph({ spacing: { after: 80 }, children: [] }));
    continue;
  }
  if (/^\s*\d+\.\s/.test(l)) {
    const ref = 'num' + (n++); numDefs.push(ref);
    while (i < md.length && /^\s*\d+\.\s/.test(md[i])) { children.push(new Paragraph({ numbering: { reference: ref, level: 0 }, spacing: { after: 60 }, children: runs(md[i].replace(/^\s*\d+\.\s/, '')) })); i++; }
    continue;
  }
  if (/^\s*[-*]\s/.test(l)) {
    while (i < md.length && /^\s*[-*]\s/.test(md[i])) { const lvl = md[i].match(/^\s*/)[0].length >= 2 ? 1 : 0; children.push(new Paragraph({ numbering: { reference: 'bullets', level: lvl }, spacing: { after: 60 }, children: runs(md[i].replace(/^\s*[-*]\s/, '')) })); i++; }
    continue;
  }
  if (l.trim() === '') { i++; continue; }
  children.push(new Paragraph({ spacing: { after: 120 }, children: runs(l.trim()) })); i++;
}
const config = [{ reference: 'bullets', levels: [0, 1].map(lv => ({ level: lv, format: LevelFormat.BULLET, text: lv ? '–' : '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720 + lv * 360, hanging: 360 } } } })) },
  ...numDefs.map(r => ({ reference: r, levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] }))];
if (LOGO && fs.existsSync(LOGO)) children.unshift(new Paragraph({ spacing: { before: 0, after: 160, line: 240, lineRule: 'auto' }, children: [new ImageRun({ type: 'png', data: fs.readFileSync(LOGO), transformation: { width: 150, height: 51 } })] }));
const doc = new Document({
  creator: 'Grupo 2', title,
  styles: {
    default: { document: { run: { font: FONT, size: 22, color: TEXT }, paragraph: { spacing: { line: 276 } } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 28, bold: true, color: RED, font: FONT }, paragraph: { spacing: { before: 300, after: 120 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: BROWN, font: FONT }, paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1 } },
    ],
  },
  numbering: { config },
  sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1300, right: 1440, bottom: 1300, left: 1440 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: 'AndiBite · Grupo 2 · T2 Plan de marketing · ', size: 16, color: MID }), new TextRun({ children: [PageNumber.CURRENT], size: 16, color: MID })] })] }) },
    children }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync(OUT, b); console.log('ok', OUT, b.length); });
