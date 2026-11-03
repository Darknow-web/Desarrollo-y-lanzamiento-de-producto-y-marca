// Genera las piezas de marca (PNG transparente y sobre crema) a partir de piezas.html.
// Uso: node assets/marca/fuente/build.mjs   (desde la raíz del repo)
import pw from '/opt/node-tools/node_modules/playwright/index.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const F = path.dirname(fileURLToPath(import.meta.url)); const R = path.resolve(F, '..');
const b = await pw.chromium.launch();
const page = await b.newPage({ viewport: { width: 2400, height: 2400 }, deviceScaleFactor: 1 });
await page.goto('file://' + path.join(F, 'piezas.html'));
await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(600);
for (const [id, nombre] of [['logo-andi', 'logo-con-andi'], ['frase', 'frase-slogan']]) {
  const el = page.locator('#' + id);
  await el.screenshot({ path: path.join(R, `${nombre}.png`), omitBackground: true });
  await page.evaluate(() => document.body.classList.add('crema'));
  await el.screenshot({ path: path.join(R, `${nombre}-crema.png`), omitBackground: false });
  await page.evaluate(() => document.body.classList.remove('crema'));
  console.log('pieza', nombre);
}
await b.close();
