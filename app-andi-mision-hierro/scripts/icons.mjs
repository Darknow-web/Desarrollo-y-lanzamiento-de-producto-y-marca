// Genera los PNG de la app a partir de public/icons/favicon.svg (requiere Playwright con Chromium).
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

// Usa Playwright instalado en el proyecto o el global (NODE_PATH).
const { chromium } = createRequire(import.meta.url)('playwright');

const svg = readFileSync(new URL('../public/icons/favicon.svg', import.meta.url), 'utf8');
const salidas = [['icon-192.png', 192, false], ['icon-512.png', 512, false], ['apple-touch-icon.png', 180, true], ['icon-maskable-512.png', 512, true]];
const b = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
const p = await b.newPage();
for (const [nombre, tam, lleno] of salidas) {
  await p.setViewportSize({ width: tam, height: tam });
  const fondo = lleno ? '#5A2E22' : 'transparent';
  const interno = lleno ? svg.replace('rx="116"', 'rx="0"').replace('<g transform="translate(256 286) scale(2.05)', '<g transform="translate(256 290) scale(1.6)') : svg;
  await p.setContent(`<html><body style="margin:0;background:${fondo}">${interno.replace('<svg ', `<svg width="${tam}" height="${tam}" `)}</body></html>`);
  await p.screenshot({ path: new URL(`../public/icons/${nombre}`, import.meta.url).pathname, omitBackground: !lleno });
}
await b.close();
console.log('íconos listos');
