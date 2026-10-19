// Worker "andi-app": API de la app "Andi, Misión Hierro" (Hono + Workers KV).
// La app web (carpeta dist/) la sirve Workers Static Assets; este código solo atiende /api/*.
import { Hono, type Context, type Next } from 'hono';
import { Datos, UNIDADES, hoyLima, type Codigo, type KV, type Lote, type Presentacion, type Punto } from './datos';
import { esValido, generar, normalizar } from './codigo';
import { servirActivo, type KVActivos } from './activos';

export interface Env {
  ANDI_KV: KV;
  ANDI_ASSETS: KVActivos;
  WHATSAPP_NUMBER?: string;
  PUBLIC_URL?: string;
  ADMIN_TOKEN?: string;
}
type Ctx = Context<{ Bindings: Env; Variables: { datos: Datos } }>;

const SABORES = ['Chispa', 'Andi', 'Lúcu'];
const CAMPOS_LOTE: (keyof Lote)[] = ['id', 'sabor', 'fechaProduccion', 'fechaVencimiento', 'hierroMgPorUnidad', 'hierroHemoMgPorUnidad', 'azucarGPorUnidad', 'pesoUnidadG',
  'octogonos', 'laboratorio', 'informe', 'fechaInforme', 'origenSangrecita', 'registroSanitario', 'planta', 'alergenos', 'ingredientes'];

/** Lo que ve el cliente de un lote (sin datos internos). */
export const lotePublico = (l: Lote) => ({
  id: l.id, sabor: l.sabor, fechaProduccion: l.fechaProduccion, fechaVencimiento: l.fechaVencimiento,
  hierroMgPorUnidad: l.hierroMgPorUnidad, hierroHemoMgPorUnidad: l.hierroHemoMgPorUnidad, azucarGPorUnidad: l.azucarGPorUnidad,
  pesoUnidadG: l.pesoUnidadG || 20, octogonos: l.octogonos || [], laboratorio: l.laboratorio, informe: l.informe, fechaInforme: l.fechaInforme,
  origenSangrecita: l.origenSangrecita, planta: l.planta, alergenos: l.alergenos || [], ingredientes: l.ingredientes,
});

// Límite simple de peticiones por IP (en memoria de cada instancia del Worker).
const ventanas = new Map<string, number[]>();
const limitar = (max: number, ms = 60_000) => async (c: Ctx, next: Next) => {
  const ip = c.req.header('cf-connecting-ip') || 'local';
  const k = `${c.req.path.split('/')[2]}:${ip}`; const t = Date.now();
  const v = (ventanas.get(k) || []).filter(x => t - x < ms); v.push(t); ventanas.set(k, v);
  if (ventanas.size > 5000) ventanas.clear();
  if (v.length > max) return c.json({ error: 'demasiadas_peticiones' }, 429);
  await next();
};

/** Comparación en tiempo constante (no revela cuántos caracteres coinciden). */
function iguales(a: string, b: string) {
  if (!a || !b || a.length !== b.length) return false;
  let r = 0; for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}

const app = new Hono<{ Bindings: Env; Variables: { datos: Datos } }>();

app.use('/api/*', async (c, next) => {
  const datos = new Datos(c.env.ANDI_KV);
  await datos.asegurarSemilla();
  c.set('datos', datos);
  await next();
  c.header('X-Content-Type-Options', 'nosniff');
  c.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  c.header('Cache-Control', 'no-store');
});

app.get('/api/salud', c => c.json({ ok: true }));
app.get('/api/config', c => c.json({
  whatsapp: (c.env.WHATSAPP_NUMBER || '51941371376').replace(/\D/g, ''),
  publicUrl: c.env.PUBLIC_URL || '',
}));

const verCodigo = async (c: Ctx) => {
  const code = normalizar(c.req.param('code'));
  if (!code || !esValido(code)) return c.json({ error: 'codigo_invalido' }, 400);
  const datos = c.get('datos');
  const cod = await datos.getCodigo(code);
  if (!cod) return c.json({ error: 'codigo_no_encontrado' }, 404);
  const lote = await datos.getLote(cod.loteId);
  if (!lote) return c.json({ error: 'lote_no_encontrado' }, 404);
  const contar = datos.registrarEscaneo(code).catch(e => console.error('escaneo', e));
  try { c.executionCtx.waitUntil(contar); } catch { await contar; }
  return c.json({ codigo: { code: cod.code, presentacion: cod.presentacion, unidades: cod.unidades }, lote: lotePublico(lote) });
};
app.get('/api/codigos/:code', limitar(60), verCodigo);
app.get('/api/c/:code', limitar(60), verCodigo);

app.get('/api/lotes/:id', async c => {
  const l = await c.get('datos').getLote(c.req.param('id'));
  if (!l) return c.json({ error: 'lote_no_encontrado' }, 404);
  return c.json(lotePublico(l));
});

app.get('/api/puntos', async c => {
  const hoy = hoyLima();
  const lista = (await c.get('datos').getPuntos()).filter(p => (p.hasta || p.desde) >= hoy).sort((a, b) => a.desde.localeCompare(b.desde));
  return c.json(lista);
});

// ---------- Administración (equipo AndiBite) ----------
app.use('/api/admin/*', async (c, next) => {
  const t = (c.req.header('authorization') || '').replace(/^Bearer\s+/i, '');
  if (!iguales(t, c.env.ADMIN_TOKEN || '')) return c.json({ error: 'no_autorizado' }, 401);
  await next();
});

app.post('/api/admin/seed', async c => c.json({ ok: true, ...(await c.get('datos').sembrar()) }));

app.get('/api/admin/resumen', async c => {
  const datos = c.get('datos');
  const [lotes, codigos] = await Promise.all([datos.listLotes(), datos.listCodigos()]);
  const filas = await Promise.all(lotes.map(async l => {
    const cs = codigos.filter(x => x.loteId === l.id);
    return { ...l, escaneosPorDia: await datos.escaneosDe(l.id), codigosGenerados: cs.length, codigosEscaneados: cs.filter(x => x.escaneos > 0).length, escaneosTotales: cs.reduce((a, x) => a + (x.escaneos || 0), 0) };
  }));
  return c.json(filas.sort((a, b) => b.fechaProduccion.localeCompare(a.fechaProduccion)));
});

app.post('/api/admin/lotes', async c => {
  const b = await c.req.json<Record<string, unknown>>().catch(() => ({} as Record<string, unknown>));
  const lote: Record<string, unknown> = {};
  for (const k of CAMPOS_LOTE) if (b[k] !== undefined) lote[k] = b[k];
  if (!/^[A-Z0-9-]{3,24}$/.test(String(lote.id || ''))) return c.json({ error: 'id_invalido' }, 400);
  if (!SABORES.includes(String(lote.sabor))) return c.json({ error: 'sabor_invalido' }, 400);
  for (const k of ['hierroMgPorUnidad', 'hierroHemoMgPorUnidad', 'azucarGPorUnidad', 'pesoUnidadG']) if (lote[k] !== undefined) lote[k] = Number(lote[k]);
  return c.json(await c.get('datos').saveLote(lote as unknown as Lote));
});

app.post('/api/admin/codigos', async c => {
  const { loteId, presentacion, cantidad } = await c.req.json<{ loteId?: string; presentacion?: Presentacion; cantidad?: number }>().catch(() => ({} as Record<string, never>));
  const datos = c.get('datos');
  if (!loteId || !(await datos.getLote(loteId))) return c.json({ error: 'lote_no_encontrado' }, 404);
  if (!presentacion || !UNIDADES[presentacion]) return c.json({ error: 'presentacion_invalida' }, 400);
  // KV admite unas 1,000 operaciones por petición: se generan hasta 500 códigos por vez.
  const n = Math.min(500, Math.max(1, Number(cantidad) || 0));
  const vistos = new Set<string>(); const nuevos: Codigo[] = [];
  while (nuevos.length < n) {
    const code = generar(); if (vistos.has(code)) continue; vistos.add(code);
    nuevos.push({ code, loteId, presentacion, unidades: UNIDADES[presentacion], creado: new Date().toISOString(), escaneos: 0 });
  }
  await datos.saveCodigos(nuevos);
  return c.json(nuevos);
});

app.get('/api/admin/codigos', async c => c.json(await c.get('datos').listCodigos(c.req.query('loteId') || '')));
app.get('/api/admin/puntos', async c => c.json(await c.get('datos').getPuntos()));
app.put('/api/admin/puntos', async c => {
  const lista = await c.req.json<Punto[]>().catch(() => null);
  if (!Array.isArray(lista) || lista.some(p => !p.nombre || !p.desde)) return c.json({ error: 'lista_invalida' }, 400);
  return c.json(await c.get('datos').savePuntos(lista.slice(0, 100)));
});

app.all('/api/*', c => c.json({ error: 'no_existe' }, 404));

// Cualquier otra ruta es la app web: se sirve desde KV, en modo SPA.
app.get('*', c => servirActivo(c.env.ANDI_ASSETS, new URL(c.req.url).pathname));

app.onError((err, c) => { console.error(err); return c.json({ error: 'error_interno' }, 500); });

export default app;
