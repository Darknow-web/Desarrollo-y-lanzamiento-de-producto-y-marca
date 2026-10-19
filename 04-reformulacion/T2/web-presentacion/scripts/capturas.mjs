// Capturas de todas las pantallas con Playwright (Chromium).
// Uso: con el sitio corriendo (npx wrangler dev --local --port 8788 o npx vite preview --port 8788)
//   node scripts/capturas.mjs [url-base]
// Deja los PNG en capturas/: escritorio 1920 x 1080 (todas) y celular 390 x 844 (algunas).
import { chromium } from 'playwright';
import { existsSync, mkdirSync, readdirSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..', 'capturas');
const base = (process.argv[2] || process.env.BASE_URL || 'http://localhost:8788/').replace(/#.*$/, '');
const exe = ['/opt/pw-browsers/chromium/chrome-linux/chrome', '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'].find((p) => existsSync(p));
const WAIT = Number(process.env.WAIT || 3400); // espera a que terminen las animaciones de entrada

mkdirSync(out, { recursive: true });
for (const f of readdirSync(out)) if (f.endsWith('.png')) unlinkSync(join(out, f));

const browser = await chromium.launch({ executablePath: exe, args: ['--disable-gpu'] });

async function shoot(viewport, prefix, pick) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1, reducedMotion: 'no-preference', isMobile: viewport.width < 600, hasTouch: viewport.width < 600 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error' && !/404|Failed to load resource/.test(m.text())) errors.push(m.text()); });
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.deck && window.deck.isReady());
  await page.evaluate(() => document.fonts.ready);
  const total = await page.evaluate(() => window.deck.getTotalSlides());
  const idxs = pick ? pick(total) : [...Array(total).keys()];
  const report = [];
  for (const i of idxs) {
    // Muestra la pantalla con todos sus fragmentos visibles
    await page.evaluate((h) => window.deck.slide(h, 0, 99), i);
    await page.waitForTimeout(WAIT);
    const info = await page.evaluate(() => {
      const s = window.deck.getCurrentSlide();
      const f = s.querySelector('.frame');
      const over = f ? f.scrollHeight - f.clientHeight : 0;
      const hidden = [...s.querySelectorAll('.in, .pop, .cb, .fragment, [data-count]')]
        .filter((el) => { const cs = getComputedStyle(el); return cs.visibility === 'hidden' || Number(cs.opacity) < 0.95; }).length;
      return { id: s.id || s.dataset.title, title: s.dataset.title, over, hidden };
    });
    const name = `${prefix}-${String(i + 1).padStart(2, '0')}.png`;
    await page.screenshot({ path: join(out, name) });
    report.push({ name, ...info });
    // En celular, además, la pantalla completa (el contenido se desplaza hacia abajo)
    if (viewport.width < 600 && info.over > 2) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height + info.over + 8 });
      await page.waitForTimeout(400);
      await page.screenshot({ path: join(out, name.replace('.png', '-completa.png')) });
      await page.setViewportSize(viewport);
      await page.waitForTimeout(200);
    }
  }
  await ctx.close();
  return { report, errors };
}

const desk = await shoot({ width: 1920, height: 1080 }, 'escritorio');
const lap = await shoot({ width: 1366, height: 768 }, 'laptop', () => [0, 4, 21, 25]);
const mob = await shoot({ width: 390, height: 844 }, 'celular', () => [0, 1, 4, 25, 27, 29, 30, 32, 33]);
await browser.close();

for (const [k, r] of Object.entries({ escritorio: desk, laptop: lap, celular: mob })) {
  console.log(`\n== ${k} ==`);
  for (const x of r.report) console.log(`${x.name}  ${x.title}${x.over > 2 ? `  [DESBORDA ${x.over}px]` : ''}${x.hidden ? `  [${x.hidden} ocultos]` : ''}`);
  if (r.errors.length) console.log('Errores:', r.errors);
}
