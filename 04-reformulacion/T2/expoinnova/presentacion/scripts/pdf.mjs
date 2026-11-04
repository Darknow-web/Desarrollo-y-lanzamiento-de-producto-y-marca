// PDF de respaldo de la presentación: cada pantalla con todos sus fragmentos, 1920×1080.
// Uso: npx vite preview --port 4173 &  node scripts/pdf.mjs http://localhost:4173/ "../AndiBite - Presentacion Expoinnova (respaldo).pdf"
import pw from '/opt/node-tools/node_modules/playwright/index.js';
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const base = process.argv[2] || 'http://localhost:4173/';
const out = path.resolve(process.argv[3] || 'presentacion-respaldo.pdf');
const tmp = fs.mkdtempSync('/tmp/expo-pdf-');
const b = await pw.chromium.launch();
const page = await b.newPage({ viewport: { width: 1920, height: 1080 } });
await page.emulateMedia({ media: 'screen' });
const partes = [];
for (let i = 0; i < 6; i++) {
  await page.goto(`${base}#/${i}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  // portada de la sección
  const f0 = path.join(tmp, `p${i + 1}a.pdf`);
  await page.pdf({ path: f0, width: '1920px', height: '1080px', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 }, pageRanges: '1' });
  partes.push(f0);
  // avanzar todos los fragmentos de esta pantalla sin pasar a la siguiente
  for (let k = 0; k < 8; k++) {
    const quedan = await page.evaluate(() => !!document.querySelector('section.present .fragment:not(.visible)'));
    if (!quedan) break;
    await page.keyboard.press('ArrowRight'); await page.waitForTimeout(450);
    const h = await page.evaluate(() => location.hash); if (h !== `#/${i}`) break;
  }
  await page.waitForTimeout(1800);
  const f = path.join(tmp, `p${i + 1}b.pdf`);
  await page.pdf({ path: f, width: '1920px', height: '1080px', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 }, pageRanges: '1' });
  partes.push(f);
  console.log('pantalla', i + 1);
}
await b.close();
execSync(`python3 -W ignore -c "import fitz,sys; d=fitz.open(); [d.insert_pdf(fitz.open(p)) for p in sys.argv[2:]]; d.save(sys.argv[1])" "${out}" ${partes.map(p => `"${p}"`).join(' ')}`);
fs.rmSync(tmp, { recursive: true, force: true });
console.log('pdf', out);
