// AndiBite — Trabajos de campo 5 a 8 (pptxgenjs, deck estructurado)
const pptxgen = require('pptxgenjs');
const React = require('react');
const RDS = require('react-dom/server');
const sharp = require('sharp');
const fa = require('react-icons/fa');
const { applyTheme } = require('./apply_theme.js');
const OUT = process.argv[2] || 'T2_Plantilla-AndiBite.pptx';



const THEME = {
  name: 'AndiBite',
  headFontFace: 'Calibri',
  bodyFontFace: 'Calibri',
  colors: {
    dk1: '3B1A14', lt1: 'FFFFFF', dk2: '4A2018', lt2: 'FBF3E8',
    accent1: 'BA4036', accent2: '6B3A2A', accent3: 'E3A33B', accent4: '7C8A3A',
    accent5: 'D9B48F', accent6: '8A1C2B', hlink: 'BA4036', folHlink: '8A1C2B',
  },
};
const H = THEME.colors; // hex, solo para opciones que piden hex

const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.333 x 7.5
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.author = 'Grupo 2';
pres.title = 'AndiBite — T2 Plan de marketing';
const C = pres.SchemeColor;

// ---------- íconos ----------
async function icon(name, hex, size = 96) {
  const Comp = fa[name];
  if (!Comp) throw new Error('icono no existe: ' + name);
  let svg = RDS.renderToStaticMarkup(React.createElement(Comp, { color: '#' + hex, size }));
  if (!svg.includes('xmlns')) svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  const buf = await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
  return 'image/png;base64,' + buf.toString('base64');
}

// ---------- layouts ----------
const FOOT = 'AndiBite · Grupo 2 · T2 Plan de marketing';
pres.defineSlideMaster({
  title: 'PORTADA',
  background: { color: H.dk2 },
  objects: [
    { placeholder: { options: { name: 'title', type: 'title', align: 'left', x: 0.8, y: 3.55, w: 7.4, h: 0.85, fontSize: 40, bold: true, color: C.background2, margin: 0, valign: 'top' }, text: '' } },
    { placeholder: { options: { name: 'body', type: 'body', x: 0.8, y: 4.45, w: 7.4, h: 0.8, fontSize: 18, color: C.accent5, margin: 0, valign: 'top' }, text: '' } },
  ],
});
pres.defineSlideMaster({
  title: 'CIERRE',
  background: { color: H.dk2 },
  objects: [
    { placeholder: { options: { name: 'title', type: 'title', align: 'left', x: 0.8, y: 1.35, w: 7.4, h: 1.6, fontSize: 48, bold: true, color: C.background2, margin: 0, valign: 'top' }, text: '' } },
  ],
});
pres.defineSlideMaster({
  title: 'SECCION',
  background: { color: H.dk2 },
  objects: [
    { placeholder: { options: { name: 'title', type: 'title', align: 'left', x: 0.8, y: 2.75, w: 7.6, h: 1.55, fontSize: 44, bold: true, color: C.background2, margin: 0, valign: 'bottom' }, text: '' } },
    { placeholder: { options: { name: 'body', type: 'body', x: 0.8, y: 4.45, w: 7.6, h: 1.3, fontSize: 18, color: C.accent5, margin: 0, valign: 'top' }, text: '' } },
    { image: { path: 'img/logo_light.png', x: 0.8, y: 6.55, w: 1.45, h: 0.5 } },
  ],
});
pres.defineSlideMaster({
  title: 'CONTENIDO',
  background: { color: H.lt2 },
  objects: [
    { placeholder: { options: { name: 'kicker', type: 'body', x: 0.6, y: 0.3, w: 10, h: 0.32, fontSize: 12, bold: true, color: C.accent1, charSpacing: 2, margin: 0, valign: 'top' }, text: '' } },
    { placeholder: { options: { name: 'title', type: 'title', align: 'left', x: 0.6, y: 0.62, w: 12.13, h: 0.8, fontSize: 34, bold: true, color: C.text2, margin: 0, valign: 'top' }, text: '' } },
    { text: { text: FOOT, options: { x: 0.6, y: 7.06, w: 8, h: 0.28, fontSize: 10, color: C.accent2, margin: 0 } } },
    { image: { path: 'img/logo_color.png', x: 11.45, y: 6.99, w: 0.95, h: 0.325 } },
  ],
  slideNumber: { x: 12.5, y: 7.04, w: 0.5, h: 0.28, fontSize: 10, color: H.accent2 },
});

// ---------- helpers ----------
const sh = () => ({ type: 'outer', color: '7A4A30', opacity: 0.14, blur: 8, offset: 2, angle: 90 });
function card(s, x, y, w, h, o = {}) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: o.r ?? 0.12, fill: { color: o.fill ?? C.background1 }, line: { color: o.fill ?? C.background1, width: 0 }, shadow: o.noShadow ? undefined : sh(), objectName: o.name });
}
const nb = (t) => typeof t === 'string' ? t.replace(/ %/g, '\u00a0%') : t.map(r => Object.assign({}, r, { text: nb(r.text) }));
function T(s, text, o) { s.addText(nb(text), Object.assign({ isTextBox: true, margin: 0, valign: 'top', fontSize: 14, color: C.text1 }, o)); }
async function iconCircle(s, name, x, y, d, fillScheme, iconHex) {
  s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fillScheme }, line: { color: fillScheme, width: 0 } });
  const p = d * 0.22;
  s.addImage({ data: await icon(name, iconHex), x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p });
}
async function imgSlot(s, n, x, y, w, h, label, dark = false) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.15, fill: { color: dark ? C.accent2 : 'F0E2CF' }, line: { color: dark ? C.accent5 : C.accent5, width: 1.5, dashType: 'dash' }, objectName: 'IMAGEN_' + n });
  const d = 0.8;
  s.addImage({ data: await icon('FaCamera', dark ? H.accent5 : H.accent2), x: x + w / 2 - d / 2, y: y + h / 2 - 1.0, w: d, h: d });
  T(s, [
    { text: 'IMAGEN ' + n, options: { bold: true, fontSize: 16, breakLine: true } },
    { text: label, options: { fontSize: 13, breakLine: true } },
    { text: 'Prompt en las notas del orador', options: { fontSize: 11, italic: true } },
  ], { x: x + 0.2, y: y + h / 2 + 0.0, w: w - 0.4, h: 1.2, align: 'center', color: dark ? C.background2 : C.accent2 });
}
function content(sec, kicker, title) {
  const s = pres.addSlide({ masterName: 'CONTENIDO', sectionTitle: sec });
  s.addText(kicker, { placeholder: 'kicker' });
  s.addText(title, { placeholder: 'title' });
  return s;
}
async function section(sec, num, title, sub, iconName) {
  pres.addSection({ title: sec });
  const s = pres.addSlide({ masterName: 'SECCION', sectionTitle: sec });
  T(s, num, { x: 0.8, y: 0.85, w: 4, h: 1.9, fontSize: 120, bold: true, color: C.accent1, fontFace: undefined });
  s.addText(title, { placeholder: 'title' });
  s.addText(sub, { placeholder: 'body' });
  s.addShape(pres.shapes.OVAL, { x: 8.75, y: 1.55, w: 4.2, h: 4.2, fill: { color: C.accent2 }, line: { color: C.accent2, width: 0 } });
  s.addImage({ data: await icon(iconName, H.accent5), x: 9.85, y: 2.65, w: 2.0, h: 2.0 });
  return s;
}
const chartText = () => ({
  catAxisLabelColor: H.accent2, valAxisLabelColor: H.accent2, catAxisLabelFontSize: 12, valAxisLabelFontSize: 11,
  catAxisLabelFontFace: '+mn-lt', valAxisLabelFontFace: '+mn-lt', dataLabelFontFace: '+mn-lt', legendFontFace: '+mn-lt', titleFontFace: '+mn-lt',
  dataLabelColor: H.dk1, dataLabelFontSize: 12, legendFontSize: 12, legendColor: H.accent2,
  showTitle: true, titleColor: H.dk2, titleFontSize: 15, titleBold: true,
  valGridLine: { color: 'E8D8C4', size: 0.75 }, catGridLine: { style: 'none' },
  catAxisLineShow: false, valAxisLineShow: false,
});


// =============== PLANTILLA T2 ===============
(async () => {
  pres.addSection({ title: 'Portada' });
  let s = pres.addSlide({ masterName: 'PORTADA', sectionTitle: 'Portada' });
  s.addImage({ path: 'img/logo_light.png', x: 0.8, y: 1.1, w: 5.6, h: 1.92 });
  s.addText('Plan de marketing', { placeholder: 'title' });
  s.addText('y lanzamiento · T2 · [subtítulo del tema]', { placeholder: 'body' });
  T(s, 'Grupo 2 · Diana Ayoso · Carlos Inga · Angie Blas · Patricia Cárdenas · Adela Robles', { x: 0.8, y: 5.75, w: 7.6, h: 0.35, fontSize: 14, color: C.background2 });
  T(s, 'Desarrollo y lanzamiento de nuevos productos · Prof. Paola Cevallos · Octubre de 2026', { x: 0.8, y: 6.15, w: 7.6, h: 0.35, fontSize: 12, color: C.accent5 });
  s.addImage({ path: 'img/B1_frente_s.jpg', x: 8.75, y: 0.6, w: 4.4, h: 6.12, rotate: 4 });
  s.addNotes('PLANTILLA · Portada. Cambiar el subtítulo. No mover el logo ni el empaque.');

  s = await section('Análisis situacional', '01', 'Análisis situacional', 'PESTEL · Qué le importa al cliente · Benchmark · FODA', 'FaSearch');
  s.addNotes('PLANTILLA · Separador de sección. Cambiar número, título, subtítulo e ícono (react-icons/fa).');

  // contenido con viñetas
  s = content('Análisis situacional', 'KICKER EN MAYÚSCULAS · TEMA', 'Título de la diapositiva: una idea, máximo 50 caracteres');
  card(s, 0.6, 1.7, 7.6, 4.95);
  T(s, [
    { text: 'Primera idea clave en una frase corta', options: { bullet: true, breakLine: true } },
    { text: 'Segunda idea con un dato y su fuente (INEI 2026)', options: { bullet: true, breakLine: true } },
    { text: 'Tercera idea: qué significa para AndiBite', options: { bullet: true } },
  ], { x: 0.95, y: 2.0, w: 7.0, h: 4.3, fontSize: 18, paraSpaceAfter: 12, color: C.text1 });
  card(s, 8.45, 1.7, 4.28, 4.95, { fill: C.text2 });
  T(s, [{ text: 'DATO CLAVE', options: { fontSize: 12, bold: true, color: C.accent3, charSpacing: 1, breakLine: true } }, { text: '00 %', options: { fontSize: 54, bold: true, color: C.background1, breakLine: true } }, { text: 'qué mide el dato · Fuente, año', options: { fontSize: 14, color: C.accent5 } }], { x: 8.75, y: 2.0, w: 3.7, h: 4.3, valign: 'middle' });
  s.addNotes('PLANTILLA · Contenido con viñetas y dato clave. Máximo 3 viñetas de una línea; todo dato con fuente.');

  // tres tarjetas
  s = content('Análisis situacional', 'KICKER · TEMA', 'Tres ideas en tres tarjetas');
  for (let i = 0; i < 3; i++) {
    const w = 3.9, x = 0.6 + i * (w + 0.215), y = 1.75, h = 4.9;
    card(s, x, y, w, h, { fill: i === 1 ? C.accent1 : C.background1 });
    await iconCircle(s, ['FaUsers', 'FaGift', 'FaChartLine'][i], x + 0.3, y + 0.3, 0.8, i === 1 ? C.background1 : C.accent1, i === 1 ? H.accent1 : 'FFFFFF');
    T(s, 'Título de la tarjeta', { x: x + 0.3, y: y + 1.3, w: w - 0.6, h: 0.5, fontSize: 20, bold: true, color: i === 1 ? C.background1 : C.text2 });
    T(s, 'Texto breve de dos o tres líneas que explica la idea con palabras simples.', { x: x + 0.3, y: y + 1.9, w: w - 0.6, h: 2.0, fontSize: 15, color: i === 1 ? C.background1 : C.text1 });
  }
  s.addNotes('PLANTILLA · Tres tarjetas. La del centro va resaltada en rojo ladrillo.');

  // tabla
  s = content('Análisis situacional', 'KICKER · TEMA', 'Tabla con encabezado café');
  const hd = (t) => ({ text: t, options: { bold: true, color: C.background1, fill: { color: C.text2 }, fontSize: 13 } });
  const rw = (a, i) => a.map(t => ({ text: t, options: { fontSize: 13, fill: { color: i % 2 ? 'FFFFFF' : 'FBF3E8' } } }));
  s.addTable([[hd('Columna 1'), hd('Columna 2'), hd('Columna 3'), hd('Columna 4')], ...[0, 1, 2, 3, 4].map(i => rw(['Dato', 'Dato', 'Dato', 'Dato'], i))], { x: 0.6, y: 1.75, w: 12.13, rowH: 0.55, border: { type: 'solid', pt: 0.75, color: 'E8D8C4' }, color: C.text1, valign: 'middle', margin: 0.08 });
  card(s, 0.6, 6.32, 12.13, 0.55, { fill: C.text2, r: 0.27 });
  T(s, 'Franja de conclusión: la idea que el jurado debe recordar.', { x: 0.9, y: 6.32, w: 11.6, h: 0.55, valign: 'middle', fontSize: 14, italic: true, color: C.background2 });
  s.addNotes('PLANTILLA · Tabla. Encabezado café 4A2018, filas alternas crema FBF3E8, franja de conclusión abajo.');

  // gráfico
  s = content('Análisis situacional', 'KICKER · TEMA', 'Gráfico con su lectura');
  s.addChart(pres.charts.BAR, [{ name: 'Serie', labels: ['A', 'B', 'C', 'D'], values: [4, 7, 5, 6] }], Object.assign(chartText(), { x: 0.4, y: 1.6, w: 8.2, h: 5.1, barDir: 'col', title: 'Título del gráfico (unidad)', chartColors: [H.accent1], showValue: true, dataLabelPosition: 'outEnd', valAxisHidden: true, valGridLine: { style: 'none' }, showLegend: false }));
  card(s, 8.85, 1.7, 3.88, 4.95);
  T(s, [{ text: 'LECTURA', options: { fontSize: 12, bold: true, color: C.accent1, charSpacing: 1, breakLine: true } }, { text: 'Qué muestra el gráfico y qué decisión tomamos.', options: { fontSize: 16, color: C.text1 } }], { x: 9.1, y: 2.0, w: 3.4, h: 4.3 });
  s.addNotes('PLANTILLA · Gráfico nativo (clic derecho > Editar datos) con caja de lectura.');

  pres.addSection({ title: 'Cierre' });
  s = pres.addSlide({ masterName: 'CIERRE', sectionTitle: 'Cierre' });
  T(s, 'SLOGAN', { x: 0.8, y: 0.9, w: 7.4, h: 0.35, fontSize: 13, bold: true, color: C.accent3, charSpacing: 2 });
  s.addText('Hierro medido. Sabor a brownie.', { placeholder: 'title' });
  T(s, 'Frase de cierre o llamado a la acción', { x: 0.8, y: 3.4, w: 7.4, h: 0.5, fontSize: 24, bold: true, color: C.accent5 });
  s.addImage({ path: 'img/B1_frente_s.jpg', x: 8.75, y: 0.6, w: 4.4, h: 6.12, rotate: -3 });
  s.addNotes('PLANTILLA · Cierre con el slogan.');

  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log('ok', OUT);
})().catch(e => { console.error(e); process.exit(1); });
