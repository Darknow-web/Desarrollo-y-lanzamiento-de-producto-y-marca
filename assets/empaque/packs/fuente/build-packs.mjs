// Genera los stickers de los packs (PNG a 300 dpi, PDF a medida real y hojas A4 con marcas de corte).
// Uso: node assets/empaque/packs/fuente/build-packs.mjs   (desde la raíz del repo)
import pw from '/opt/node-tools/node_modules/playwright/index.js';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const F = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(F, '..');
const MM = 96 / 25.4; // px CSS por mm
const DPI = 300;
const piezas = [
  { id: 'g-frente', nombre: 'Pack 12 - frente', w: 110, h: 165 },
  { id: 'g-reverso', nombre: 'Pack 12 - reverso', w: 110, h: 165 },
  { id: 'p-frente', nombre: 'Pack 6 - frente', w: 90, h: 135 },
  { id: 'p-reverso', nombre: 'Pack 6 - reverso', w: 90, h: 135 },
];

const b = await pw.chromium.launch();
const page = await b.newPage({ viewport: { width: 1200, height: 1600 }, deviceScaleFactor: DPI / 96 });
await page.goto('file://' + path.join(F, 'packs.html'));
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(800);

// 1) PNG de cada pieza a 300 dpi.
for (const p of piezas) {
  await page.locator('#' + p.id).screenshot({ path: path.join(OUT, `${p.nombre}.png`) });
  console.log('png', p.nombre);
}
// Vista de conjunto (las cuatro piezas).
await page.setViewportSize({ width: Math.round(470 * MM), height: Math.round(200 * MM) });
await page.evaluate(() => { document.body.style.flexWrap = 'nowrap'; });
await page.screenshot({ path: path.join(OUT, 'vista-conjunto.png'), fullPage: true, scale: 'css' });

// 2) PDF a medida real de cada pieza (una pieza por archivo, luego se unen).
for (const p of piezas) {
  await page.evaluate(id => {
    document.body.style.cssText = 'margin:0;padding:0;background:#fff;display:block';
    document.querySelectorAll('.st').forEach(e => { e.style.display = e.id === id ? 'block' : 'none'; });
  }, p.id);
  await page.pdf({ path: path.join(F, `_${p.id}.pdf`), width: `${p.w}mm`, height: `${p.h}mm`, printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 }, pageRanges: '1' });
}
await b.close();
execSync(`python3 "${path.join(F, 'hojas.py')}" "${OUT}" "${F}"`, { stdio: 'inherit' });
for (const p of piezas) fs.rmSync(path.join(F, `_${p.id}.pdf`), { force: true });
console.log('listo');
