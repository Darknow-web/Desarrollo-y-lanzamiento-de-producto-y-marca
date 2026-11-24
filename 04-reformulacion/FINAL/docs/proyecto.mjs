// Convierte proyecto.html en «AndiBite - El proyecto explicado.pdf». Uso: node FINAL/docs/proyecto.mjs
import pw from '/opt/node-tools/node_modules/playwright/index.js';
import path from 'node:path'; import { fileURLToPath, pathToFileURL } from 'node:url';
const D = path.dirname(fileURLToPath(import.meta.url));
const b = await pw.chromium.launch(); const p = await b.newPage();
await p.goto(pathToFileURL(path.join(D, 'proyecto.html')).href); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
await p.pdf({ path: path.join(D, '../AndiBite - El proyecto explicado.pdf'), format: 'A4', printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true,
  headerTemplate: '<span></span>',
  footerTemplate: '<div style="width:100%;font:700 7.5pt sans-serif;color:#9a7a6a;padding:0 15mm;display:flex;justify-content:space-between"><span>AndiBite · El proyecto explicado</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>' });
await b.close(); console.log('pdf listo');
