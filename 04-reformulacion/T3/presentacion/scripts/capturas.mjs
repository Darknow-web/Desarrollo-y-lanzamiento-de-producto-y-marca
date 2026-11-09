// Capturas de las 14 pantallas con Playwright (Chromium): estado inicial, cada pestaña o selección,
// y todo revelado (filas y tarjetas). Escritorio 1920 x 1080 y celular 390 x 844.
// Uso: npm run build && npm run preview   (en otra terminal)   node scripts/capturas.mjs http://localhost:4174/
// Deja los PNG en capturas/ y un resumen en capturas/informe.json.
import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readdirSync, unlinkSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
let pw;
try { pw = require('playwright'); } catch { pw = require('/opt/node-tools/node_modules/playwright'); }
const { chromium } = pw;

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, '..', 'capturas');
const base = (process.argv[2] || 'http://localhost:4174/').replace(/#.*$/, '');
const only = process.env.ONLY ? process.env.ONLY.split(',') : null; // p. ej. ONLY=desk
const exe = ['/opt/pw-browsers/chromium/chrome-linux/chrome', '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'].find((p) => existsSync(p));

mkdirSync(out, { recursive: true });
for (const f of readdirSync(out)) if (f.endsWith('.png') && (!only || only.some((o) => f.startsWith(o)))) unlinkSync(join(out, f));

const browser = await chromium.launch({ executablePath: exe, args: ['--disable-gpu', '--autoplay-policy=no-user-gesture-required'] });

const CHECK = '.hc, .pp, .kpi, .fc, .td, .ix, .il, .fs, .tab, .blk, .band h2, .rl-i, .cn, .fases li, .dsn > div, .dec, .stands li, .flow li, .guide li, .row, .nav-b, .price, .votes';

async function shoot(viewport, prefix) {
  const mobile = viewport.width < 600;
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: 1, isMobile: mobile, hasTouch: mobile });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`${m.type()}: ${m.text()}`); });
  page.on('requestfailed', (r) => { if (!/\.mp4/.test(r.url())) errors.push(`requestfailed: ${r.url()}`); });
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.t3);
  await page.evaluate(() => document.fonts.ready);
  const total = await page.evaluate(() => window.t3.total);
  const report = [];

  const inspect = () => page.evaluate(([vw, sel]) => {
    const s = document.querySelectorAll('.deck > .s')[window.t3.cur()];
    const f = s.querySelector('.frame');
    const vis = (el) => { const cs = getComputedStyle(el); return cs.visibility !== 'hidden' && cs.display !== 'none' && el.offsetParent !== null; };
    const over = f ? f.scrollHeight - f.clientHeight : 0;
    const clipped = [...document.querySelectorAll(sel)].filter((el) => (s.contains(el) || el.closest('.top, .nav')) && vis(el))
      .filter((el) => el.scrollHeight - el.clientHeight > 2 || el.scrollWidth - el.clientWidth > 2)
      .map((el) => `${(el.className || el.tagName).toString().split(' ')[0]}:${(el.textContent || '').trim().slice(0, 24)} (${el.scrollWidth - el.clientWidth}x${el.scrollHeight - el.clientHeight})`);
    const wide = [...s.querySelectorAll('*')].filter((el) => { if (!vis(el) || el.closest('.cover, .tabs, .ins-list, .thumbs')) return false; const r = el.getBoundingClientRect(); return r.width > 0 && (r.right > vw + 1 || r.left < -1); })
      .slice(0, 6).map((el) => (el.className || el.tagName).toString().split(' ')[0]);
    const docWide = document.documentElement.scrollWidth > vw + 1;
    return { id: s.id, over, clipped, wide, docWide };
  }, [viewport.width, CHECK]);

  async function snap(name) {
    await page.evaluate(() => window.t3.finish());
    await page.waitForTimeout(250);
    const info = await inspect();
    await page.screenshot({ path: join(out, name) });
    report.push({ name, ...info });
    if (mobile && info.over > 2) {
      const h = await page.evaluate(() => { const s = document.querySelectorAll('.deck > .s')[window.t3.cur()]; return s.querySelector('.frame').scrollHeight; });
      await page.evaluate(() => { const s = document.querySelectorAll('.deck > .s')[window.t3.cur()]; s.querySelector('.frame').style.overflow = 'visible'; });
      await page.setViewportSize({ width: viewport.width, height: Math.min(h + 60, 9000) });
      await page.waitForTimeout(350);
      await page.screenshot({ path: join(out, name.replace('.png', '-largo.png')) });
      await page.evaluate(() => { const s = document.querySelectorAll('.deck > .s')[window.t3.cur()]; s.querySelector('.frame').style.overflow = ''; });
      await page.setViewportSize(viewport);
      await page.waitForTimeout(200);
    }
  }

  for (let i = 0; i < total; i++) {
    await page.evaluate((h) => window.t3.go(h), i);
    await page.waitForTimeout(1300);
    const nn = String(i + 1).padStart(2, '0');
    await snap(`${prefix}-${nn}-a-inicial.png`);
    const kind = await page.evaluate((h) => window.t3.kind(h), i);
    if (kind === 'select') {
      let k = 2;
      while (await page.evaluate(() => window.t3.next())) {
        await page.waitForTimeout(800);
        await snap(`${prefix}-${nn}-b-paso${k++}.png`);
      }
    } else if (kind === 'reveal') {
      await page.evaluate(() => window.t3.all());
      await page.waitForTimeout(500);
      await snap(`${prefix}-${nn}-b-completa.png`);
    }
  }
  // Visor de fotos: evidencia del focus 2
  await page.evaluate(() => { window.t3.go(6); });
  await page.waitForTimeout(900);
  await page.evaluate(() => { for (let k = 0; k < 3; k++) window.t3.next(); });
  await page.waitForTimeout(700);
  await page.click('#s-fg2 .ph >> nth=0');
  await page.waitForTimeout(700);
  await page.screenshot({ path: join(out, `${prefix}-07-c-visor.png`) });
  await page.keyboard.press('Escape');
  // Modo recorrido: arranca y se detiene al tocar
  await page.evaluate(() => window.t3.go(2));
  await page.waitForTimeout(600);
  await page.keyboard.press('r');
  await page.waitForTimeout(1500);
  const touring = await page.evaluate(() => document.body.classList.contains('touring'));
  await page.screenshot({ path: join(out, `${prefix}-03-c-recorrido.png`) });
  await page.mouse.click(viewport.width / 2, viewport.height / 2);
  await page.waitForTimeout(300);
  const stopped = await page.evaluate(() => !document.body.classList.contains('touring'));
  report.push({ name: 'recorrido', id: 'tour', over: 0, clipped: touring && stopped ? [] : [`recorrido: arrancó=${touring} se detuvo=${stopped}`], wide: [], docWide: false });
  await ctx.close();
  return { report, errors };
}

const all = {};
for (const [vp, prefix] of [[{ width: 1920, height: 1080 }, 'desk'], [{ width: 390, height: 844 }, 'movil']]) {
  if (only && !only.includes(prefix)) continue;
  const r = await shoot(vp, prefix);
  all[prefix] = r;
  const bad = r.report.filter((x) => (prefix === 'desk' && x.over > 2) || x.clipped.length || x.wide.length || x.docWide);
  console.log(`\n== ${prefix}: ${r.report.length} capturas, ${bad.length} con avisos, ${r.errors.length} errores de consola`);
  bad.forEach((x) => console.log(' ', x.name, prefix === 'desk' && x.over > 2 ? `desborde vertical ${x.over}px` : '', x.clipped.length ? `cortado: ${x.clipped.join(' | ')}` : '', x.wide.length ? `ancho: ${x.wide.join(',')}` : '', x.docWide ? 'scroll horizontal' : ''));
  r.errors.forEach((e) => console.log('  ERROR', e));
}
writeFileSync(join(out, 'informe.json'), JSON.stringify(all, null, 2));
await browser.close();
