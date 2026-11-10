// AndiBite · T3 · presentación en PDF (láminas 16:9). Uso: node pdf/fuente/build.mjs
// Dibuja el gráfico de columnas, numera las láminas y exporta el PDF y una vista previa por lámina.
import pw from '/opt/node-tools/node_modules/playwright/index.js';
import path from 'node:path';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const F = path.dirname(fileURLToPath(import.meta.url));
const salida = path.join(F, '..', '..', 'AndiBite - T3 Investigacion, marca y lanzamiento.pdf');
const vista = process.argv[2]; // carpeta opcional para PNG de revisión

const b = await pw.chromium.launch();
const page = await b.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
await page.goto('file://' + path.join(F, 'presentacion.html'));
await page.evaluate(async () => {
  // Columnas: altura proporcional al valor; solo se rotulan el primer mes y el pico.
  const c = document.querySelector('#cols');
  const v = c.dataset.v.split(',').map(Number);
  const lab = c.dataset.l.split(',').map(Number);
  const max = Math.max(...v);
  v.forEach((n, i) => {
    const d = document.createElement('div');
    d.style.height = (n / max * 86) + '%';
    if (i < 2) d.className = 'pre';
    if (lab.includes(i)) { const s = document.createElement('span'); s.textContent = n.toLocaleString('en-US'); d.appendChild(s); }
    c.appendChild(d);
  });
  // Pie con número de lámina (no en portada ni portadillas).
  const sl = [...document.querySelectorAll('.sl')];
  sl.forEach((s, i) => {
    if (s.classList.contains('cover') || s.classList.contains('sec')) return;
    const f = document.createElement('div');
    f.className = 'foot';
    f.innerHTML = `<span>AndiBite · Grupo 2 · UPN Los Olivos</span><b>${String(i + 1).padStart(2, '0')} / ${sl.length}</b>`;
    s.appendChild(f);
  });
  await document.fonts.ready;
  await Promise.all([...document.images].map((im) => im.decode().catch(() => {})));
});
await page.waitForTimeout(400);

// Revisión: nada debe salirse de su lámina.
const fuera = await page.evaluate(() => [...document.querySelectorAll('.sl')].flatMap((s, i) => {
  const r = s.getBoundingClientRect();
  return [...s.querySelectorAll('.body, .body *, h2, .ficha, .rule')].filter((e) => {
    const q = e.getBoundingClientRect();
    return q.width > 0 && (q.bottom > r.bottom - 60 || q.right > r.right - 60) && !e.closest('.cover, .sec') && e.tagName !== 'IMG' && !e.closest('.ph');
  }).slice(0, 3).map((e) => `lámina ${i + 1}: ${(e.className || e.tagName)} «${(e.textContent || '').trim().slice(0, 30)}»`);
}));
const rotas = await page.evaluate(() => [...document.images].filter((im) => !im.naturalWidth).map((im) => im.getAttribute('src')));
console.log(fuera.length ? 'SE SALE:\n' + fuera.join('\n') : 'ninguna lámina se desborda');
if (rotas.length) console.log('IMÁGENES ROTAS:', rotas);

if (vista) {
  mkdirSync(vista, { recursive: true });
  const n = await page.locator('.sl').count();
  for (let i = 0; i < n; i++) await page.locator('.sl').nth(i).screenshot({ path: path.join(vista, `l-${String(i + 1).padStart(2, '0')}.png`) });
}
await page.pdf({ path: salida, width: '1920px', height: '1080px', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
await b.close();
console.log('pdf:', salida);
