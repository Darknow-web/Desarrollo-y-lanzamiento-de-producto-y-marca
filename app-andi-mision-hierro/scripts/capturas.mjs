// Recorre la app y guarda capturas de cada pantalla (para revisar el diseño y para las presentaciones).
// Uso: BASE=http://localhost:8080 ADMIN_TOKEN=... SALIDA=./capturas node scripts/capturas.mjs
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
const { chromium } = createRequire(import.meta.url)('playwright');

const BASE = process.env.BASE || 'http://localhost:8080';
const SALIDA = process.env.SALIDA || 'capturas';
mkdirSync(SALIDA, { recursive: true });
const b = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, locale: 'es-PE', timezoneId: 'America/Lima', hasTouch: true, isMobile: true });
const p = await ctx.newPage();
const errores = [];
p.on('pageerror', e => errores.push(e.message));
p.on('console', m => m.type() === 'error' && errores.push(m.text()));
const foto = async (n, completa = false) => { await p.waitForTimeout(450); await p.screenshot({ path: `${SALIDA}/${n}.png`, fullPage: completa }); console.log('📸', n); };
const ir = async (u) => { await p.goto(BASE + u, { waitUntil: 'networkidle' }); };

await ir('/');
await foto('01-bienvenida');
await p.getByRole('button', { name: 'Empezar' }).click(); await foto('02-privacidad');
await p.locator('.casilla').first().click();
await p.getByRole('button', { name: 'Continuar' }).click();
await p.getByPlaceholder('Ej.: Mati').fill('Mati');
await p.getByRole('button', { name: 'Más años' }).click();
await foto('03-perfil');
await p.getByRole('button', { name: 'Listo' }).click();
await foto('04-inicio-vacio');

await ir('/c/AB-2ANS-GYZ4'); await foto('05-lote', true);
await p.getByRole('button', { name: 'Lo comió hoy' }).click();
await p.getByRole('button', { name: 'Agregar a mi despensa' }).click();
await ir('/escanear'); await p.locator('#codigo').fill('AB2JZ7E4DDY'); await foto('06-escanear');

await ir('/hierro');
await p.getByRole('button', { name: 'Registrar' }).click(); await p.locator('.alimento').nth(1).click(); await foto('07-registrar');
await p.getByRole('button', { name: 'Guardar' }).click();
await foto('08-semaforo', true);

await ir('/loncheras'); await foto('09-loncheras-armar');
await p.getByRole('button', { name: 'Armar mi semana' }).click(); await p.waitForSelector('.dia-lonchera');
await foto('10-loncheras-plan', true);
await ir('/despensa'); await foto('11-despensa', true);
await ir('/hemoglobina');
await p.locator('input[type=date]').first().fill('2026-10-20');
await p.getByPlaceholder('11.8').fill('11.2'); await p.getByRole('button', { name: 'Guardar' }).click();
await foto('12-hemoglobina', true);
await ir('/donde'); await foto('13-donde');
await ir('/mas'); await foto('14-mas', true);
await ir('/'); await foto('15-inicio', true);

await ir('/ninos'); await foto('20-ninos-puerta');
await p.evaluate(() => sessionStorage.setItem('andi.sesion', JSON.stringify({ ninoId: JSON.parse(localStorage.getItem('andi.mision-hierro.v1')).ninos[0].id, inicio: Date.now(), limite: 900000 })));
await ir('/ninos'); await foto('21-ninos-mapa');
await ir('/ninos/plato'); await foto('22-plato');
const hierro = p.locator('.comida').filter({ hasText: /Sangrecita|Lentejas|Huevo|Carne|Pescado|Espinaca|Quinua/ }).first();
const vitc = p.locator('.comida').filter({ hasText: /Naranja|Fresa|Kiwi|Limón|Tomate|Pimiento/ }).first();
await hierro.click(); await vitc.click(); await foto('23-plato-fuerte');
await ir('/ninos/memoria'); await p.locator('.carta').nth(0).click(); await p.locator('.carta').nth(1).click(); await foto('24-memoria');
await ir('/ninos/mito'); await foto('25-mito'); await p.locator('.mito-v').click(); await foto('26-mito-respuesta');
await ir('/ninos/habitos');
for (let i = 0; i < 3; i++) await p.locator('.habito').nth(i).click();
await foto('27-habitos');
await p.locator('.habito').nth(3).click(); await p.waitForTimeout(900); await foto('28-celebracion');

const escritorio = await b.newContext({ viewport: { width: 1280, height: 800 }, locale: 'es-PE' });
const pa = await escritorio.newPage();
await pa.goto(BASE + '/admin', { waitUntil: 'networkidle' }); await pa.locator('input[type=password]').fill(process.env.ADMIN_TOKEN || 'demo'); await pa.getByRole('button', { name: 'Entrar' }).click();
await pa.waitForSelector('.admin-tabla'); await pa.screenshot({ path: `${SALIDA}/30-admin-lotes.png` }); console.log('📸 30-admin-lotes');
await pa.getByRole('button', { name: 'Códigos QR' }).click(); await pa.waitForTimeout(1200); await pa.screenshot({ path: `${SALIDA}/31-admin-codigos.png` }); console.log('📸 31-admin-codigos');
console.log(errores.length ? 'ERRORES:\n' + errores.join('\n') : 'sin errores de consola');
await b.close();
