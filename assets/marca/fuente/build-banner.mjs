// Banner frontal de mesa: PDF a tamaño real (156 × 81 cm con sangría) y vista previa PNG.
// Uso: node assets/marca/fuente/build-banner.mjs   (desde la raíz del repo)
import pw from '/opt/node-tools/node_modules/playwright/index.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const F = path.dirname(fileURLToPath(import.meta.url)); const R = path.resolve(F, '..');
const b = await pw.chromium.launch();
const page = await b.newPage({ viewport: { width: 1560, height: 810 }, deviceScaleFactor: 1 });
await page.goto('file://' + path.join(F, 'banner-mesa.html'));
await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(800);
await page.pdf({ path: path.join(R, 'banner-mesa-150x75.pdf'), width: '1560mm', height: '810mm', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 }, pageRanges: '1' });
// vista previa a 1 px por mm × 1.5
await page.setViewportSize({ width: 1560, height: 810 });
await page.emulateMedia({ media: 'screen' });
const hoja = page.locator('.hoja');
await page.evaluate(() => { document.documentElement.style.zoom = String(1 / 3.7795); });
await page.waitForTimeout(300);
await hoja.screenshot({ path: path.join(R, 'banner-mesa-vista.png') });
await b.close(); console.log('banner listo');
