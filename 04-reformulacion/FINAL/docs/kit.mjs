// Cartel A3 y hojas A4 del stand a PDF. Uso: node FINAL/docs/kit.mjs
import pw from '/opt/node-tools/node_modules/playwright/index.js';
import path from 'node:path'; import { fileURLToPath, pathToFileURL } from 'node:url';
const D = path.dirname(fileURLToPath(import.meta.url));
const b = await pw.chromium.launch();
for (const [src, out, fmt] of [['kit_cartel.html', '../AndiBite - Stand - Cartel A3.pdf', 'A3'], ['kit_a4.html', '../AndiBite - Stand - Kit para imprimir (A4).pdf', 'A4']]) {
  const p = await b.newPage();
  await p.goto(pathToFileURL(path.join(D, src)).href); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(600);
  await p.pdf({ path: path.join(D, out), format: fmt, printBackground: true, preferCSSPageSize: true });
  console.log('pdf', out);
}
await b.close();
