// Genera los PDF del guion de exposición y del dosier de preparación (pandoc → HTML → Playwright).
// Uso: node fuente/build-guion.mjs   (desde 04-reformulacion/T2/expoinnova)
import pw from '/opt/node-tools/node_modules/playwright/index.js';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const F = path.dirname(fileURLToPath(import.meta.url));
const R = path.resolve(F, '..');
const LOGO = path.resolve(R, '..', '..', '..', 'assets', 'marca', 'logo-andibite.svg');
const css = fs.readFileSync(path.join(F, 'informe.css'), 'utf8') + `
  main > h1 { page-break-before: always; }
  main > h1:first-of-type, main > h1.sigue { page-break-before: auto; }
  blockquote { font-size: 10.8pt; line-height: 1.45; font-style: normal; }
  blockquote em { color: var(--ladrillo); font-style: italic; }
  table { page-break-inside: auto; } tr { page-break-inside: avoid; }
  td:nth-child(4) { min-width: 60mm; }
  .cab { display: flex; align-items: center; gap: 6mm; border-bottom: 1.5pt solid var(--ladrillo); padding-bottom: 3mm; margin-bottom: 5mm; }
  .cab img { height: 14mm; }
  .cab h1 { border: 0; margin: 0; padding: 0; font-size: 19pt; }
  .cab p { margin: 1mm 0 0; font-size: 9.5pt; color: var(--medio); }
  ul.task-list { list-style: none; padding-left: 0; }
  ul.task-list li { padding-left: 7mm; position: relative; }
  ul.task-list li::before { content: ''; position: absolute; left: 0; top: 1.2mm; width: 3.4mm; height: 3.4mm; border: 0.8pt solid var(--cafe); border-radius: 0.8mm; }
  ul.task-list input { display: none; }
  h2 + h3 { margin-top: 2mm; }
  h2#carlos, h2#patty, h2#ade { page-break-before: always; }
`;

const docs = [
  { md: 'GUION-exposicion.md', out: 'AndiBite - Guion de exposicion.pdf', t: 'Guion de exposición · stand', sub: 'Para Carlos y Ade · Expoinnova 2026-2 · 6 pantallas, 6 minutos hablados, 1 de video, 3 de preguntas' },
  { md: 'DOSIER-exposicion.md', out: 'AndiBite - Dosier de preparacion.pdf', t: 'Dosier de preparación para el stand', sub: 'Lo que hay detrás de cada pantalla: cifras completas, fuentes y respuestas de fondo · Expoinnova 2026-2' },
];

const browser = await pw.chromium.launch();
for (const d of docs) {
  const md = fs.readFileSync(path.join(R, d.md), 'utf8').split('\n');
  const title = d.t;
  fs.writeFileSync(path.join(F, '_g_body.md'), md.slice(1).join('\n'));
  execSync(`pandoc "${path.join(F, '_g_body.md')}" -f markdown+pipe_tables+task_lists --shift-heading-level-by=-1 --wrap=none -t html5 -o "${path.join(F, '_g_body.html')}"`);
  const body = fs.readFileSync(path.join(F, '_g_body.html'), 'utf8');
  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${title}</title><style>${css}</style></head><body>
  <div class="cab"><img src="file://${LOGO}" alt="AndiBite" /><div><h1>${title}</h1><p>${d.sub}</p></div></div>
  <main>${body}</main></body></html>`;
  fs.writeFileSync(path.join(F, '_g.html'), html);
  const page = await browser.newPage();
  await page.goto('file://' + path.join(F, '_g.html'));
  await page.waitForTimeout(400);
  await page.pdf({
    path: path.join(R, d.out), format: 'A4', printBackground: true,
    margin: { top: '16mm', right: '16mm', bottom: '16mm', left: '16mm' },
    displayHeaderFooter: true, headerTemplate: '<span></span>',
    footerTemplate: `<div style="width:100%;font-family:Carlito,Calibri,Arial,sans-serif;font-size:8pt;color:#6B3A2A;padding:0 16mm;display:flex;justify-content:space-between"><span>AndiBite · ${title}</span><span>Página <span class="pageNumber"></span> de <span class="totalPages"></span></span></div>`,
  });
  await page.close();
  console.log('pdf', d.out);
}
await browser.close();
for (const f of ['_g_body.md', '_g_body.html', '_g.html']) fs.rmSync(path.join(F, f), { force: true });
