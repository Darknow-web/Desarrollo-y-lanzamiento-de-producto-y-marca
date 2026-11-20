// Convierte guion.html y stand.html en PDF A4. Uso: node FINAL/docs/pdf.mjs
import pw from '/opt/node-tools/node_modules/playwright/index.js';
import path from 'node:path'; import { fileURLToPath, pathToFileURL } from 'node:url';
const D = path.dirname(fileURLToPath(import.meta.url));
const jobs = [['guion.html', '../AndiBite - Guion de la feria (5 personas).pdf', 'Guion de la feria'], ['stand.html', '../AndiBite - Stand y tareas para la feria.pdf', 'Stand y tareas']];
const b = await pw.chromium.launch();
for (const [src, out, name] of jobs) {
  const p = await b.newPage();
  await p.goto(pathToFileURL(path.join(D, src)).href); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(500);
  await p.pdf({ path: path.join(D, out), format: 'A4', printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `<div style="width:100%;font:700 7.5pt sans-serif;color:#9a7a6a;padding:0 14mm;display:flex;justify-content:space-between"><span>AndiBite · ${name}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>` });
  console.log('pdf', out);
}
await b.close();
