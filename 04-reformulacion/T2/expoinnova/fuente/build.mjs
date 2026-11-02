// Genera los entregables de Expoinnova: banner (PNG y PDF), informe (PDF) e informe (Word).
// Uso: node fuente/build.mjs            (desde T2/expoinnova)
//      node fuente/build.mjs banner     (solo el banner)
import pw from '/opt/node-tools/node_modules/playwright/index.js';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const F = path.dirname(fileURLToPath(import.meta.url));      // fuente/
const R = path.resolve(F, '..');                               // expoinnova/
const MD = path.join(R, 'md', 'Informe-Expoinnova-AndiBite.md');
const only = process.argv[2];
// Enlace del video en YouTube: se escribe en fuente/video_url.txt (una sola línea).
const VIDEO_URL = (fs.existsSync(path.join(F, 'video_url.txt')) ? fs.readFileSync(path.join(F, 'video_url.txt'), 'utf8').trim() : '') || 'https://youtube.com/ (enlace pendiente)';
const OUT_INFORME = 'AndiBite - Informe del proyecto';
const OUT_BANNER = 'AndiBite - Banner Canvas';

const browser = await pw.chromium.launch();

// 1) Banner: PNG 1920x1080 y PDF A3 apaisado.
{
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 }, deviceScaleFactor: 1 });
  await page.goto('file://' + path.join(F, 'banner.html'));
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(R, OUT_BANNER + '.png'), fullPage: false });
  await page.pdf({ path: path.join(R, OUT_BANNER + '.pdf'), width: '1920px', height: '1080px', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await page.close();
  console.log('banner listo');
}

if (only !== 'banner') {
  // 2) Informe PDF: portada propia + cuerpo convertido con pandoc.
  const mdRaw = fs.readFileSync(MD, 'utf8').replace(/\{\{VIDEO_URL\}\}/g, VIDEO_URL);
  fs.writeFileSync(path.join(F, '_informe.md'), mdRaw);
  const md = mdRaw.split('\n');
  const title = md[0].replace(/^#\s*/, '').trim();
  const body = md.slice(2).join('\n'); // sin el título ni la línea "Responsable"
  fs.writeFileSync(path.join(F, '_body.md'), body);
  execSync(`pandoc "${path.join(F, '_body.md')}" -f markdown+pipe_tables --shift-heading-level-by=-1 --wrap=none -t html5 -o "${path.join(F, '_body.html')}"`);
  let bodyHtml = fs.readFileSync(path.join(F, '_body.html'), 'utf8').replace(/src="\.\.\//g, 'src="' + R + '/');
  // La sección del banner sale del flujo: se imprime aparte, apaisada, y se une después.
  const mB = bodyHtml.match(/<h1 id="el-modelo-de-negocio-en-un-vistazo">[\s\S]*?(<p>En las páginas siguientes[^<]*<\/p>)/);
  const bannerSection = mB ? mB[0] : '';
  bodyHtml = bodyHtml.replace(bannerSection, '');
  const cover = fs.readFileSync(path.join(F, 'portada.html'), 'utf8').replace(/\{\{VIDEO_URL\}\}/g, VIDEO_URL);
  const css = fs.readFileSync(path.join(F, 'informe.css'), 'utf8');
  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${title}</title><style>${css}</style></head><body>${cover}<main>${bodyHtml}</main></body></html>`;
  fs.writeFileSync(path.join(F, '_informe.html'), html);
  const page = await browser.newPage();
  await page.goto('file://' + path.join(F, '_informe.html'));
  await page.waitForTimeout(400);
  await page.pdf({ path: path.join(F, '_main.pdf'), format: 'A4', printBackground: true, margin: { top: '20mm', right: '18mm', bottom: '18mm', left: '18mm' } });
  // Página apaisada del banner.
  const bannerHtml = `<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${css}</style></head><body><main class="banner-page">${bannerSection.replace('<p>En las páginas siguientes', '<p class="nota">En las páginas siguientes')}</main></body></html>`;
  fs.writeFileSync(path.join(F, '_banner_page.html'), bannerHtml);
  await page.goto('file://' + path.join(F, '_banner_page.html'));
  await page.waitForTimeout(300);
  await page.pdf({ path: path.join(F, '_banner_page.pdf'), format: 'A4', landscape: true, printBackground: true, margin: { top: '14mm', right: '14mm', bottom: '16mm', left: '14mm' } });
  await page.close();
  // Unión y numeración (PyMuPDF).
  execSync(`python3 "${path.join(F, 'unir.py')}" "${path.join(F, '_main.pdf')}" "${path.join(F, '_banner_page.pdf')}" "${path.join(R, OUT_INFORME + '.pdf')}"`, { stdio: 'inherit' });
  console.log('informe PDF listo');

  // 3) Word con el conversor del T2.
  execSync(`PIE="AndiBite · Expoinnova 2026-2 · Grupo 2" NODE_PATH=$(npm root -g) node "${path.join(R, '..', 'fuente', 'md2docx.js')}" "${path.join(F, '_informe.md')}" "${path.join(R, OUT_INFORME + '.docx')}" "${path.join(R, '..', 'fuente', 'logo_small.png')}"`, { stdio: 'inherit' });
  console.log('informe Word listo');
}

await browser.close();
