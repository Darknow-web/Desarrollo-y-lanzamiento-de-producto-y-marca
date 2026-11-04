// Capturas de las 6 pantallas con Playwright (Chromium): vista inicial y con todos los fragmentos.
// Uso: npx vite preview --port 4173  y luego  node scripts/capturas.mjs http://localhost:4173/
// Deja los PNG en capturas/: escritorio 1920 x 1080 y celular 390 x 844.
import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readdirSync, unlinkSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
let pw;
try { pw = require('playwright'); } catch { pw = require('/opt/node-tools/node_modules/playwright'); }
const { chromium } = pw;

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..', 'capturas');
const base = (process.argv[2] || 'http://localhost:4173/').replace(/#.*$/, '');
const exe = ['/opt/pw-browsers/chromium/chrome-linux/chrome', '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'].find((p) => existsSync(p));
const WAIT = Number(process.env.WAIT || 1800);

mkdirSync(out, { recursive: true });
for (const f of readdirSync(out)) if (f.endsWith('.png')) unlinkSync(join(out, f));

const browser = await chromium.launch({ executablePath: exe, args: ['--disable-gpu'] });

async function shoot(viewport, prefix) {
  const mobile = viewport.width < 600;
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1, isMobile: mobile, hasTouch: mobile });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`${m.type()}: ${m.text()}`); });
  page.on('requestfailed', (r) => errors.push(`requestfailed: ${r.url()}`));
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.deck && window.deck.isReady());
  await page.evaluate(() => document.fonts.ready);
  const total = await page.evaluate(() => window.deck.getTotalSlides());
  const report = [];
  for (let i = 0; i < total; i++) {
    for (const [tag, f] of [['a-inicial', -1], ['b-completa', 99]]) {
      await page.evaluate(([h, fr]) => window.deck.slide(h, 0, fr), [i, f]);
      await page.waitForTimeout(WAIT);
      const info = await page.evaluate((vw) => {
        const s = window.deck.getCurrentSlide();
        const f = s.querySelector('.body') || s.querySelector('.frame');
        const visible = (el) => { const cs = getComputedStyle(el); return cs.visibility !== 'hidden' && cs.display !== 'none' && Number(cs.opacity) > 0.05; };
        const over = f && visible(f) ? f.scrollHeight - f.clientHeight : 0;
        const clipped = [...s.querySelectorAll('.cb, .kpi, .rc, .cp, .mx b, .fi, .band h2, .stat, .cierre, .qr-card')]
          .filter((el) => visible(el) && (el.scrollHeight - el.clientHeight > 2 || el.scrollWidth - el.clientWidth > 2))
          .map((el) => (el.className || el.tagName).toString().split(' ').slice(0, 2).join('.') + ` (${el.scrollWidth - el.clientWidth}x${el.scrollHeight - el.clientHeight})`);
        const wide = [...s.querySelectorAll('*')].filter((el) => { const r = el.getBoundingClientRect(); return visible(el) && !el.closest('.cover') && r.width > 0 && (r.right > vw + 1 || r.left < -1); })
          .slice(0, 5).map((el) => (el.className || el.tagName).toString().split(' ')[0]);
        return { title: s.dataset.title, open: s.classList.contains('open'), over, clipped, wide };
      }, viewport.width);
      const name = `${prefix}-${String(i + 1).padStart(2, '0')}-${tag}.png`;
      await page.screenshot({ path: join(out, name) });
      report.push({ name, ...info });
      if (mobile && info.over > 2) {
        await page.evaluate(() => { const s = window.deck.getCurrentSlide(); const f = s.querySelector('.body') || s.querySelector('.frame'); f.style.overflow = 'visible'; });
        await page.setViewportSize({ width: viewport.width, height: viewport.height + info.over + 4 });
        await page.waitForTimeout(500);
        await page.screenshot({ path: join(out, name.replace('.png', '-scroll.png')) });
        await page.evaluate(() => { const s = window.deck.getCurrentSlide(); const f = s.querySelector('.body') || s.querySelector('.frame'); f.style.overflow = ''; });
        await page.setViewportSize(viewport);
        await page.waitForTimeout(200);
      }
    }
  }
  // Zoom del Canvas: bloque 4 (propuesta) abierto
  await page.evaluate(() => window.deck.slide(1, 0, 99));
  await page.waitForTimeout(800);
  await page.keyboard.press('4');
  await page.waitForTimeout(900);
  await page.screenshot({ path: join(out, `${prefix}-02-c-zoom.png`) });
  await page.keyboard.press('Escape');
  await page.waitForTimeout(600);
  const zoomClosed = await page.evaluate(() => !document.querySelector('#zoom').classList.contains('open'));
  report.push({ name: `${prefix}-02-c-zoom.png`, title: 'zoom', open: true, over: 0, clipped: zoomClosed ? [] : ['zoom no cerró'], wide: [] });
  await ctx.close();
  return { report, errors };
}

const desk = await shoot({ width: 1920, height: 1080 }, 'escritorio');
const lap = await shoot({ width: 1366, height: 768 }, 'laptop');
const mob = await shoot({ width: 390, height: 844 }, 'celular');
await browser.close();

for (const [k, r] of Object.entries({ escritorio: desk, laptop: lap, celular: mob })) {
  console.log(`\n== ${k} ==`);
  for (const x of r.report) console.log(`${x.name}  ${x.open ? 'abierta' : 'cerrada'}${x.over > 2 ? `  [desplaza ${x.over}px]` : ''}${x.clipped.length ? `  [CORTADO: ${x.clipped.join(', ')}]` : ''}${x.wide.length ? `  [ANCHO: ${x.wide.join(', ')}]` : ''}`);
  console.log(r.errors.length ? `Errores: ${JSON.stringify(r.errors)}` : 'Sin errores de consola');
}
