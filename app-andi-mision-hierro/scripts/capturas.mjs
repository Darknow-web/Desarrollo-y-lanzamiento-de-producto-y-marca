// Recorre la experiencia del cliente y guarda capturas de cada pantalla (celular de 390 px y escritorio).
// Uso: npm run build && npm run preview   (en otra terminal)
//      BASE=http://localhost:8787 ADMIN_TOKEN=demo node scripts/capturas.mjs
// Variables opcionales: SALIDA (carpeta, por defecto capturas), CHROMIUM (ruta del navegador).
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
const { chromium } = createRequire(import.meta.url)('playwright');

const BASE = process.env.BASE || 'http://localhost:8787';
const SALIDA = process.env.SALIDA || 'capturas';
mkdirSync(SALIDA, { recursive: true });
const b = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, locale: 'es-PE', timezoneId: 'America/Lima', hasTouch: true, isMobile: true, serviceWorkers: 'block' });
const p = await ctx.newPage();
const errores = [];
p.on('pageerror', e => errores.push(e.message));
p.on('console', m => m.type() === 'error' && errores.push(m.text()));
const foto = async (n, completa = false, espera = 700) => { await p.waitForTimeout(espera); await p.screenshot({ path: `${SALIDA}/${n}.png`, fullPage: completa }); console.log('captura', n); };
const ir = async (u) => { await p.goto(BASE + u, { waitUntil: 'networkidle' }); };
const anchoPagina = async (n) => { const w = await p.evaluate(() => document.documentElement.scrollWidth); if (w > 390) errores.push(`${n}: la página se desborda a ${w}px`); };

// 1. Llega sin escanear
await ir('/'); await foto('01-inicio'); await anchoPagina('inicio');
await p.getByRole('button', { name: 'Probar con un envase de muestra' }).click();
await p.waitForURL('**/c/AB-2ANS-GYZ4');
// 2. Lote
await foto('02-lote', false, 1600); await foto('03-lote-completo', true, 100); await anchoPagina('lote');
await p.getByRole('link', { name: 'Ver el informe' }).click(); await p.waitForURL('**/informe/**');
await foto('04-informe', true); await anchoPagina('informe');
await p.getByRole('button', { name: 'Volver' }).click(); await p.waitForURL('**/c/AB-2ANS-GYZ4');
// 3. Agregar a la despensa (pide el consentimiento corto)
await p.getByRole('button', { name: 'Agregar a mi despensa' }).click(); await p.waitForURL('**/bienvenida**');
await foto('05-bienvenida');
await p.locator('.casilla input').check();
await p.getByPlaceholder('Ej.: Mati').fill('Mati');
await p.getByRole('button', { name: 'Más años' }).click();
await p.getByRole('button', { name: 'Guardar y seguir' }).click();
await p.waitForURL('**/despensa'); await foto('06-despensa', true, 1200); await anchoPagina('despensa');
const wa = await p.locator('a.boton-whatsapp').getAttribute('href');
console.log('WhatsApp:', decodeURIComponent(wa || ''));
await p.getByRole('button', { name: 'Comió 1' }).first().click();
// 4. Semáforo
await ir('/hierro');
await p.getByRole('button', { name: 'Registrar' }).click(); await p.locator('.alimento').nth(1).click(); await foto('07-registrar');
await p.getByRole('button', { name: 'Guardar' }).click();
await foto('08-semaforo', true, 1200); await anchoPagina('semaforo');
// 5. Loncheras
await ir('/loncheras'); await foto('09-loncheras-armar');
await p.getByRole('button', { name: 'Armar mi semana' }).click(); await p.waitForSelector('.dia-lonchera');
await foto('10-loncheras-plan', true, 1200); await anchoPagina('loncheras');
// 6. Hemoglobina, dónde, más e inicio con datos
await ir('/hemoglobina');
await p.locator('input[type=date]').first().fill('2026-11-20');
await p.getByPlaceholder('11.8').fill('11.2'); await p.getByRole('button', { name: 'Guardar' }).click();
await foto('11-hemoglobina', true);
await ir('/donde'); await foto('12-donde', true);
await ir('/mas'); await foto('13-mas', true);
await ir('/escanear'); await foto('14-escanear');
await ir('/'); await foto('15-inicio-con-datos', true, 1000); await anchoPagina('inicio con datos');

// 7. Modo niños
await ir('/ninos'); await foto('20-ninos-candado');
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

// 8. Escritorio
const escritorio = await b.newContext({ viewport: { width: 1280, height: 800 }, locale: 'es-PE', timezoneId: 'America/Lima', serviceWorkers: 'block' });
const pe = await escritorio.newPage();
pe.on('pageerror', e => errores.push('escritorio: ' + e.message));
await pe.goto(BASE + '/', { waitUntil: 'networkidle' }); await pe.waitForTimeout(800); await pe.screenshot({ path: `${SALIDA}/40-escritorio-inicio.png` }); console.log('captura 40-escritorio-inicio');
await pe.goto(BASE + '/c/AB-2ANS-GYZ4', { waitUntil: 'networkidle' }); await pe.waitForTimeout(1600); await pe.screenshot({ path: `${SALIDA}/41-escritorio-lote.png` }); console.log('captura 41-escritorio-lote');
await pe.goto(BASE + '/admin', { waitUntil: 'networkidle' }); await pe.locator('input[type=password]').fill(process.env.ADMIN_TOKEN || 'demo'); await pe.getByRole('button', { name: 'Entrar' }).click();
await pe.waitForSelector('.admin-tabla'); await pe.screenshot({ path: `${SALIDA}/50-admin-lotes.png` }); console.log('captura 50-admin-lotes');
await pe.getByRole('button', { name: 'Códigos QR' }).click(); await pe.waitForTimeout(1200); await pe.screenshot({ path: `${SALIDA}/51-admin-codigos.png` }); console.log('captura 51-admin-codigos');
console.log(errores.length ? 'ERRORES:\n' + errores.join('\n') : 'sin errores de consola');
await b.close();
