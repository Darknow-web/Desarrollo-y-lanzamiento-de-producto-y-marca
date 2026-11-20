// Arma index.html (inserta el mapa), toma capturas de cada lámina y exporta el PDF.
// Uso: node build.mjs <carpeta-capturas> [pdf-salida]
import fs from 'fs'; import path from 'path'; import { fileURLToPath, pathToFileURL } from 'url';
import pw from '/opt/node-tools/node_modules/playwright/index.js'; const { chromium } = pw;
const dir = path.dirname(fileURLToPath(import.meta.url));
const peru = JSON.parse(fs.readFileSync(path.join(dir, 'peru.json'), 'utf8')).d;
fs.writeFileSync(path.join(dir, 'index.html'), fs.readFileSync(path.join(dir, 'fuente.html'), 'utf8').replaceAll('%%PERU%%', peru));
const out = process.argv[2]; const pdf = process.argv[3];
if (!out) process.exit(0);
fs.mkdirSync(out, { recursive: true });
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
const url = pathToFileURL(path.join(dir, 'index.html')).href;
await p.goto(url + '#1'); await p.waitForTimeout(800);
const n = await p.evaluate(() => document.querySelectorAll('.slide').length);
for (let i = 1; i <= n; i++) {
  await p.goto(url + '#' + i); await p.waitForTimeout(3600);
  await p.screenshot({ path: path.join(out, String(i).padStart(2, '0') + '.png') });
}
// desbordes: elementos que salen del escenario
if (pdf) {
  const q = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  await q.goto(url + '?print'); await q.waitForTimeout(1500);
  const over = await q.evaluate(() => [...document.querySelectorAll('.slide')].map((s, i) => {
    const r = s.getBoundingClientRect(); let bad = [];
    s.querySelectorAll('h1,h2,h3,p,.card,.hb,.chart,.qrs,.stairs,.acts,.gantt,.flow,.hub .ch,.kpis,.wrap').forEach(e => { const k = e.getBoundingClientRect(); if (k.bottom > r.bottom - 60 + 1 || k.right > r.right + 1) bad.push((e.className || e.tagName) + ':' + Math.round(k.bottom - r.top)); });
    return bad.length ? (i + 1) + ' → ' + bad.slice(0, 4).join(', ') : null; }).filter(Boolean));
  console.log(over.length ? 'Posibles desbordes:\n' + over.join('\n') : 'Ninguna lámina se desborda');
  await q.pdf({ path: pdf, width: '1920px', height: '1080px', printBackground: true, preferCSSPageSize: false, pageRanges: '' });
}
console.log(errs.length ? 'Errores: ' + [...new Set(errs)].join(' | ') : 'Sin errores de consola');
await b.close();
