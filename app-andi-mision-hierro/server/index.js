// Servidor de la app "Andi, Misión Hierro": API + archivos de la app web.
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import { timingSafeEqual } from 'node:crypto';
import { crearStore } from './store.js';
import { normalizar, esValido, generar } from './codigo.js';
import { iaDisponible, planConIA } from './loncheras.js';

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = Number(process.env.PORT || 8080);
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || '';
const PRODUCCION = process.env.NODE_ENV === 'production';

const store = await crearStore({
  tipo: process.env.STORE || 'file',
  dataDir: process.env.DATA_DIR || path.join(raiz, 'data', 'runtime'),
  seedPath: path.join(raiz, 'data', 'seed.json'),
});
if (process.env.STORE === 'firestore' && (await store.listLotes()).length === 0) {
  const { readFile } = await import('node:fs/promises');
  const seed = JSON.parse(await readFile(path.join(raiz, 'data', 'seed.json'), 'utf8'));
  for (const l of Object.values(seed.lotes)) await store.saveLote(l);
  await store.saveCodigos(Object.values(seed.codigos));
  await store.savePuntos(seed.puntos);
}

const app = express();
app.disable('x-powered-by');
app.set('trust proxy', true);
app.use(express.json({ limit: '200kb' }));

app.use((req, res, next) => {
  res.set({
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(self), microphone=(), geolocation=()',
    'Content-Security-Policy': [
      "default-src 'self'", "script-src 'self'", "style-src 'self' 'unsafe-inline'",
      "font-src 'self'", "img-src 'self' data: blob:", "connect-src 'self'",
      "media-src 'self' blob:", "worker-src 'self'", "manifest-src 'self'", "frame-ancestors 'none'", "base-uri 'self'",
    ].join('; '),
  });
  next();
});

// Límite simple de peticiones por IP y ruta.
const ventanas = new Map();
const limitar = (max, ms = 60_000) => (req, res, next) => {
  const k = `${req.path.split('/')[2]}:${req.ip}`; const t = Date.now();
  const v = (ventanas.get(k) || []).filter(x => t - x < ms); v.push(t); ventanas.set(k, v);
  if (v.length > max) return res.status(429).json({ error: 'demasiadas_peticiones' });
  next();
};
setInterval(() => { const t = Date.now(); for (const [k, v] of ventanas) if (!v.some(x => t - x < 120_000)) ventanas.delete(k); }, 120_000).unref();

const lotePublico = (l) => l && ({
  id: l.id, sabor: l.sabor, fechaProduccion: l.fechaProduccion, fechaVencimiento: l.fechaVencimiento,
  hierroMgPorUnidad: l.hierroMgPorUnidad, hierroHemoMgPorUnidad: l.hierroHemoMgPorUnidad, azucarGPorUnidad: l.azucarGPorUnidad,
  octogonos: l.octogonos || [], laboratorio: l.laboratorio, informe: l.informe, fechaInforme: l.fechaInforme,
  origenSangrecita: l.origenSangrecita, registroSanitario: l.registroSanitario, planta: l.planta,
  alergenos: l.alergenos || [], ingredientes: l.ingredientes, demo: Boolean(l.demo),
});

app.get('/api/salud', (req, res) => res.json({ ok: true }));
app.get('/api/config', (req, res) => res.json({
  whatsapp: process.env.WHATSAPP_NUMBER || '51900000000',
  ia: iaDisponible(),
  publicUrl: process.env.PUBLIC_URL || '',
}));

app.get('/api/codigos/:code', limitar(60), async (req, res) => {
  const code = normalizar(req.params.code);
  if (!code || !esValido(code)) return res.status(400).json({ error: 'codigo_invalido' });
  const c = await store.getCodigo(code);
  if (!c) return res.status(404).json({ error: 'codigo_no_encontrado' });
  const lote = await store.getLote(c.loteId);
  if (!lote) return res.status(404).json({ error: 'lote_no_encontrado' });
  store.registrarEscaneo(code).catch(e => console.error('escaneo', e));
  res.json({ codigo: { code: c.code, presentacion: c.presentacion, unidades: c.unidades }, lote: lotePublico(lote) });
});

app.get('/api/lotes/:id', async (req, res) => {
  const l = await store.getLote(req.params.id);
  if (!l) return res.status(404).json({ error: 'lote_no_encontrado' });
  res.json(lotePublico(l));
});

app.get('/api/puntos', async (req, res) => {
  const hoy = new Date().toISOString().slice(0, 10);
  const lista = (await store.getPuntos()).filter(p => (p.hasta || p.desde) >= hoy).sort((a, b) => a.desde.localeCompare(b.desde));
  res.json(lista);
});

app.post('/api/loncheras', limitar(6), async (req, res) => {
  if (!iaDisponible()) return res.status(503).json({ error: 'ia_no_configurada' });
  const b = req.body || {};
  const edad = Math.min(13, Math.max(2, Number(b.edad) || 6));
  const lista = (x) => (Array.isArray(x) ? x : []).map(s => String(s).slice(0, 40)).slice(0, 8);
  try {
    res.json({ fuente: 'ia', ...(await planConIA({ edad, gustos: lista(b.gustos), evitar: lista(b.evitar), incluirAndiBite: b.incluirAndiBite !== false })) });
  } catch (e) {
    console.error('loncheras', e?.message);
    res.status(502).json({ error: 'ia_fallo' });
  }
});

// ---------- Administración (equipo AndiBite) ----------
const admin = (req, res, next) => {
  const t = String(req.get('authorization') || '').replace(/^Bearer\s+/i, '');
  const ok = ADMIN_TOKEN && t.length === ADMIN_TOKEN.length && timingSafeEqual(Buffer.from(t), Buffer.from(ADMIN_TOKEN));
  if (!ok) return res.status(401).json({ error: 'no_autorizado' });
  next();
};

app.get('/api/admin/resumen', admin, async (req, res) => {
  const lotes = await store.listLotes(); const codigos = await store.listCodigos();
  res.json(lotes.map(l => {
    const cs = codigos.filter(c => c.loteId === l.id);
    return { ...l, codigosGenerados: cs.length, codigosEscaneados: cs.filter(c => c.escaneos > 0).length, escaneosTotales: cs.reduce((a, c) => a + (c.escaneos || 0), 0) };
  }).sort((a, b) => b.fechaProduccion.localeCompare(a.fechaProduccion)));
});

const CAMPOS_LOTE = ['id', 'sabor', 'fechaProduccion', 'fechaVencimiento', 'hierroMgPorUnidad', 'hierroHemoMgPorUnidad', 'azucarGPorUnidad', 'octogonos', 'laboratorio', 'informe', 'fechaInforme', 'origenSangrecita', 'registroSanitario', 'planta', 'alergenos', 'ingredientes', 'demo'];
app.post('/api/admin/lotes', admin, async (req, res) => {
  const b = req.body || {}; const lote = {};
  for (const k of CAMPOS_LOTE) if (b[k] !== undefined) lote[k] = b[k];
  if (!/^[A-Z0-9-]{3,24}$/.test(lote.id || '')) return res.status(400).json({ error: 'id_invalido' });
  if (!['Chispa', 'Andi', 'Lúcu'].includes(lote.sabor)) return res.status(400).json({ error: 'sabor_invalido' });
  for (const k of ['hierroMgPorUnidad', 'hierroHemoMgPorUnidad', 'azucarGPorUnidad']) if (lote[k] !== undefined) lote[k] = Number(lote[k]);
  res.json(await store.saveLote(lote));
});

app.post('/api/admin/codigos', admin, async (req, res) => {
  const { loteId, presentacion, cantidad } = req.body || {};
  if (!(await store.getLote(loteId))) return res.status(404).json({ error: 'lote_no_encontrado' });
  const UNIDADES = { unidad: 1, pack6: 6, pack12: 12 };
  if (!UNIDADES[presentacion]) return res.status(400).json({ error: 'presentacion_invalida' });
  const n = Math.min(5000, Math.max(1, Number(cantidad) || 0));
  const nuevos = []; const vistos = new Set();
  while (nuevos.length < n) {
    const code = generar();
    if (vistos.has(code) || await store.getCodigo(code)) continue;
    vistos.add(code);
    nuevos.push({ code, loteId, presentacion, unidades: UNIDADES[presentacion], creado: new Date().toISOString(), escaneos: 0 });
  }
  await store.saveCodigos(nuevos);
  res.json(nuevos);
});

app.get('/api/admin/codigos', admin, async (req, res) => res.json(await store.listCodigos(String(req.query.loteId || ''))));
app.get('/api/admin/puntos', admin, async (req, res) => res.json(await store.getPuntos()));
app.put('/api/admin/puntos', admin, async (req, res) => {
  const lista = Array.isArray(req.body) ? req.body : null;
  if (!lista || lista.some(p => !p.nombre || !p.desde)) return res.status(400).json({ error: 'lista_invalida' });
  res.json(await store.savePuntos(lista.slice(0, 100)));
});

app.use('/api', (req, res) => res.status(404).json({ error: 'no_existe' }));

// ---------- App web ----------
const dist = path.join(raiz, 'dist');
if (existsSync(dist)) {
  app.use(express.static(dist, {
    index: false,
    setHeaders: (res, f) => {
      if (f.includes(`${path.sep}assets${path.sep}`)) res.set('Cache-Control', 'public, max-age=31536000, immutable');
      else res.set('Cache-Control', 'no-cache');
    },
  }));
  app.get(/^\/(?!api\/).*/, (req, res) => { res.set('Cache-Control', 'no-cache'); res.sendFile(path.join(dist, 'index.html')); });
} else if (PRODUCCION) {
  console.warn('No existe dist/: ejecuta "npm run build" antes de "npm start".');
}

app.use((err, req, res, _next) => { console.error(err); res.status(500).json({ error: 'error_interno' }); });

app.listen(PORT, () => console.log(`Andi, Misión Hierro escuchando en http://localhost:${PORT}`));
