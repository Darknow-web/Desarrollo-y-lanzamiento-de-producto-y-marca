// Tarjetas para el celular (100 × 178 mm, una por página). Uso: node fuente/build-tarjetas.mjs
import pw from '/opt/node-tools/node_modules/playwright/index.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const F = path.dirname(fileURLToPath(import.meta.url));
const b = await pw.chromium.launch();
const page = await b.newPage();
await page.goto('file://' + path.join(F, 'tarjetas.html'));
await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(400);
await page.pdf({ path: path.join(F, '..', 'AndiBite - Tarjetas para el celular.pdf'), width: '100mm', height: '178mm', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
await b.close();
console.log('pdf tarjetas');
