import { beforeEach, describe, expect, it, vi } from 'vitest';
import app, { type Env } from '../worker/index';
import type { KV } from '../worker/datos';

// Cliente de Anthropic simulado: devuelve un plan fijo y cuenta las llamadas.
const { crearMensaje, planFalso } = vi.hoisted(() => {
  const dia = (dia: string, conAndiBite: boolean) => ({ dia, principal: { nombre: `Principal de ${dia}`, ingredientes: ['Sangrecita (30 g)', 'Pan integral'], preparacion: ['Saltea', 'Rellena'] }, fruta: 'Mandarina', bebida: 'Agua', conAndiBite, hierroMg: conAndiBite ? 10.4 : 8.5, truco: 'Sin leche ni té en la lonchera.' });
  const planFalso = { semana: '2026-10-19', nino: 'Mati', dias: [dia('Lunes', true), dia('Martes', false), dia('Miércoles', true), dia('Jueves', false), dia('Viernes', false)], listaCompras: [{ grupo: 'Carnes y vísceras', items: ['Sangrecita 150 g'] }], nota: 'Orientación general; consulta al pediatra.' };
  const crearMensaje = vi.fn(async () => ({ stop_reason: 'end_turn', content: [{ type: 'text', text: JSON.stringify(planFalso) }], usage: {} }));
  return { crearMensaje, planFalso };
});
vi.mock('@anthropic-ai/sdk', () => {
  class APIError extends Error { constructor(public status?: number, message = 'api') { super(message); } }
  class AuthenticationError extends APIError {}
  class RateLimitError extends APIError {}
  class Anthropic {
    static APIError = APIError; static AuthenticationError = AuthenticationError; static RateLimitError = RateLimitError;
    beta = { messages: { create: crearMensaje } };
    constructor(public opciones: { apiKey?: string }) {}
  }
  return { default: Anthropic };
});

/** KV en memoria con la misma interfaz que usa el Worker. */
function kvMemoria(): KV & { datos: Map<string, { v: string; m?: unknown }> } {
  const datos = new Map<string, { v: string; m?: unknown }>();
  return {
    datos,
    async get(key: string, type?: 'json') { const x = datos.get(key); if (!x) return null; return type === 'json' ? JSON.parse(x.v) : x.v; },
    async put(key, value, options) { datos.set(key, { v: value, m: options?.metadata }); },
    async list(options) {
      const keys = [...datos.keys()].filter(k => !options?.prefix || k.startsWith(options.prefix)).sort().map(name => ({ name, metadata: datos.get(name)!.m }));
      return { keys, list_complete: true };
    },
  } as KV & { datos: Map<string, { v: string; m?: unknown }> };
}
const entorno = (extra: Partial<Env> = {}): Env => ({ ANDI_KV: kvMemoria(), ANDI_ASSETS: { get: async () => null }, ADMIN_TOKEN: 'clave-de-prueba', WHATSAPP_NUMBER: '51 987 654 321', PUBLIC_URL: 'https://andi.example', ANTHROPIC_API_KEY: 'sk-ant-prueba', ...extra });
const pedir = (env: Env, ruta: string, init?: RequestInit) => app.request(ruta, init, env);
const DIA = 86_400_000;
const nino = { apodo: 'Mati', edadAnios: 7, evitar: ['Pescado'] };
// Cada llamada sale de una IP distinta para no chocar con el límite de 10 por minuto del endpoint.
let ip = 0;
const pedirPlan = (env: Env, cuerpo: unknown) => pedir(env, '/api/plan', { method: 'POST', headers: { 'Content-Type': 'application/json', 'cf-connecting-ip': `10.0.0.${++ip}` }, body: JSON.stringify(cuerpo) });

describe('Worker (API con Hono y KV)', () => {
  it('siembra KV desde data/seed.json en la primera petición', async () => {
    const env = entorno();
    const r = await pedir(env, '/api/salud');
    expect(r.status).toBe(200);
    const kv = env.ANDI_KV as ReturnType<typeof kvMemoria>;
    expect(kv.datos.has('config:semilla')).toBe(true);
    expect(kv.datos.has('lote:L2610-CH')).toBe(true);
    expect(kv.datos.has('codigo:AB-2ANS-GYZ4')).toBe(true);
  });

  it('devuelve el lote del envase de muestra con la forma que usa la app', async () => {
    const env = entorno();
    for (const ruta of ['/api/c/AB-2ANS-GYZ4', '/api/codigos/ab2ansgyz4']) {
      const r = await pedir(env, ruta);
      expect(r.status).toBe(200);
      const d = await r.json() as { codigo: { code: string; presentacion: string; unidades: number }; lote: Record<string, unknown> };
      expect(d.codigo).toEqual({ code: 'AB-2ANS-GYZ4', presentacion: 'pack6', unidades: 6 });
      expect(d.lote).toMatchObject({ id: 'L2610-CH', sabor: 'Chispa', hierroMgPorUnidad: 1.9, hierroHemoMgPorUnidad: 1.3, azucarGPorUnidad: 1.3, octogonos: [], informe: 'INF-2026-10-01', fechaInforme: '2026-10-08', laboratorio: 'Laboratorio acreditado por INACAL' });
      expect(d.lote).not.toHaveProperty('registroSanitario');
      expect(d.lote).not.toHaveProperty('demo');
    }
  });

  it('cuenta los escaneos', async () => {
    const env = entorno();
    await pedir(env, '/api/c/AB-2ANS-GYZ4'); await pedir(env, '/api/c/AB-2ANS-GYZ4');
    const c = await env.ANDI_KV.get('codigo:AB-2ANS-GYZ4', 'json') as { escaneos: number };
    expect(c.escaneos).toBe(2);
  });

  it('distingue código mal escrito de código inexistente', async () => {
    const env = entorno();
    expect((await pedir(env, '/api/c/AB-2ANS-GYZ5')).status).toBe(400);
    expect((await pedir(env, '/api/c/AB-0000-0000')).status).toBe(404);
    expect((await pedir(env, '/api/nada')).status).toBe(404);
  });

  it('entrega la configuración, los puntos y los lotes', async () => {
    const env = entorno();
    expect(await (await pedir(env, '/api/config')).json()).toEqual({ whatsapp: '51987654321', publicUrl: 'https://andi.example' });
    const puntos = await (await pedir(env, '/api/puntos')).json() as { nombre: string; desde: string }[];
    expect(puntos.length).toBeGreaterThan(0);
    expect(JSON.stringify(puntos)).not.toMatch(/confirmar/i);
    expect((await pedir(env, '/api/lotes/L2610-AN')).status).toBe(200);
    expect((await pedir(env, '/api/lotes/NO-EXISTE')).status).toBe(404);
  });

  it('protege el panel con ADMIN_TOKEN y genera códigos válidos', async () => {
    const env = entorno();
    expect((await pedir(env, '/api/admin/resumen')).status).toBe(401);
    expect((await pedir(env, '/api/admin/resumen', { headers: { Authorization: 'Bearer otra' } })).status).toBe(401);
    const auth = { Authorization: 'Bearer clave-de-prueba', 'Content-Type': 'application/json' };
    const resumen = await (await pedir(env, '/api/admin/resumen', { headers: auth })).json() as { id: string; codigosGenerados: number }[];
    expect(resumen.find(l => l.id === 'L2610-CH')?.codigosGenerados).toBe(6);
    const nuevos = await (await pedir(env, '/api/admin/codigos', { method: 'POST', headers: auth, body: JSON.stringify({ loteId: 'L2610-LU', presentacion: 'pack12', cantidad: 5 }) })).json() as { code: string }[];
    expect(nuevos).toHaveLength(5);
    const r = await pedir(env, `/api/c/${nuevos[0].code}`);
    expect(r.status).toBe(200);
    const sembrar = await pedir(env, '/api/admin/seed', { method: 'POST', headers: auth });
    expect(await sembrar.json()).toMatchObject({ ok: true, lotes: 3, codigos: 11 });
  });

  it('al escanear fija escaneadoEl la primera vez y responde planHasta (14 días)', async () => {
    const env = entorno();
    const antes = Date.now();
    const d1 = await (await pedir(env, '/api/c/AB-2ANS-GYZ4')).json() as { escaneadoEl: string; planHasta: string };
    expect(Date.parse(d1.escaneadoEl)).toBeGreaterThanOrEqual(antes);
    expect(Date.parse(d1.planHasta) - Date.parse(d1.escaneadoEl)).toBe(14 * DIA);
    const d2 = await (await pedir(env, '/api/c/AB-2ANS-GYZ4')).json() as { escaneadoEl: string };
    expect(d2.escaneadoEl).toBe(d1.escaneadoEl);
    const c = await env.ANDI_KV.get('codigo:AB-2ANS-GYZ4', 'json') as { escaneos: number; escaneadoEl: string };
    expect(c).toMatchObject({ escaneos: 2, escaneadoEl: d1.escaneadoEl });
  });

  it('el código demo siempre está vigente y no se consume', async () => {
    const env = entorno();
    for (const ruta of ['/api/c/AB-DEMO-2027', '/api/codigos/ab-demo-2027']) {
      const r = await pedir(env, ruta);
      expect(r.status).toBe(200);
      const d = await r.json() as { codigo: { code: string }; planHasta: string };
      expect(d.codigo.code).toBe('AB-DEMO-2027');
      expect(Date.parse(d.planHasta) - Date.now()).toBeGreaterThan(13.9 * DIA);
    }
    const c = await env.ANDI_KV.get('codigo:AB-DEMO-2027', 'json') as { escaneos: number };
    expect(c.escaneos).toBe(0);
  });
});

describe('POST /api/plan (plan de loncheras con IA)', () => {
  beforeEach(() => crearMensaje.mockClear());

  it('código inexistente → 404; cuerpo inválido → 400', async () => {
    const env = entorno();
    expect((await pedirPlan(env, { codigo: 'AB-0000-0000', nino, semana: '2026-10-19' })).status).toBe(404);
    expect((await pedirPlan(env, { codigo: 'AB-DEMO-2027', nino, semana: '2026-10-20' })).status).toBe(400); // no es lunes
    expect((await pedirPlan(env, { codigo: 'AB-DEMO-2027', nino: { ...nino, edadAnios: 40 }, semana: '2026-10-19' })).status).toBe(400);
    expect(crearMensaje).not.toHaveBeenCalled();
  });

  it('pack sin escanear → 403; pack escaneado hace más de 14 días → 403 plan_vencido', async () => {
    const env = entorno();
    await pedir(env, '/api/salud'); // siembra KV
    const r0 = await pedirPlan(env, { codigo: 'AB-2ANS-GYZ4', nino, semana: '2026-10-19' });
    expect(r0.status).toBe(403);
    const c = await env.ANDI_KV.get('codigo:AB-2ANS-GYZ4', 'json') as Record<string, unknown>;
    await env.ANDI_KV.put('codigo:AB-2ANS-GYZ4', JSON.stringify({ ...c, escaneos: 1, escaneadoEl: new Date(Date.now() - 20 * DIA).toISOString() }));
    const r = await pedirPlan(env, { codigo: 'AB-2ANS-GYZ4', nino, semana: '2026-10-19' });
    expect(r.status).toBe(403);
    expect(await r.json()).toMatchObject({ error: 'plan_vencido' });
    expect(crearMensaje).not.toHaveBeenCalled();
  });

  it('pack escaneado hace menos de 14 días → 200 con plan', async () => {
    const env = entorno();
    await pedir(env, '/api/c/AB-2J7E-4DDY');
    const r = await pedirPlan(env, { codigo: 'AB-2J7E-4DDY', nino, semana: '2026-10-19' });
    expect(r.status).toBe(200);
    expect((await r.json() as { enCache: boolean }).enCache).toBe(false);
  });

  it('demo vigente → 200 con plan validado y la segunda llamada sale de la caché', async () => {
    const env = entorno();
    const r1 = await pedirPlan(env, { codigo: 'AB-DEMO-2027', nino, semana: '2026-10-19' });
    expect(r1.status).toBe(200);
    const d1 = await r1.json() as { plan: typeof planFalso; vigenteHasta: string; enCache: boolean };
    expect(d1.enCache).toBe(false);
    expect(d1.plan.dias).toHaveLength(5);
    expect(d1.plan.dias.filter(d => d.conAndiBite)).toHaveLength(2);
    expect(d1.plan).toMatchObject({ semana: '2026-10-19', nino: 'Mati', listaCompras: planFalso.listaCompras });
    expect(Date.parse(d1.vigenteHasta)).toBeGreaterThan(Date.now());
    expect(crearMensaje).toHaveBeenCalledTimes(1);
    const llamada = crearMensaje.mock.calls[0] as unknown as [Record<string, unknown>];
    expect(llamada[0]).toMatchObject({ model: 'claude-opus-5-5', max_tokens: 16000, fallbacks: 'default', betas: ['server-side-fallback-2026-07-01'] });
    expect(llamada[0]).not.toHaveProperty('thinking');
    expect((llamada[0].output_config as { format: { type: string } }).format.type).toBe('json_schema');
    expect(JSON.stringify(llamada[0].messages)).toContain('Pescado');

    const r2 = await pedirPlan(env, { codigo: 'AB-DEMO-2027', nino, semana: '2026-10-19' });
    const d2 = await r2.json() as { plan: typeof planFalso; enCache: boolean };
    expect(d2.enCache).toBe(true);
    expect(d2.plan).toEqual(d1.plan);
    expect(crearMensaje).toHaveBeenCalledTimes(1);
    const kv = env.ANDI_KV as ReturnType<typeof kvMemoria>;
    expect([...kv.datos.keys()].some(k => k.startsWith('plan:AB-DEMO-2027:2026-10-19:'))).toBe(true);

    // Otro niño (otro hash) vuelve a pedirle a la IA.
    await pedirPlan(env, { codigo: 'AB-DEMO-2027', nino: { ...nino, evitar: [] }, semana: '2026-10-19' });
    expect(crearMensaje).toHaveBeenCalledTimes(2);
  });

  it('sin ANTHROPIC_API_KEY → 503 plan_no_disponible', async () => {
    const env = entorno({ ANTHROPIC_API_KEY: undefined });
    const r = await pedirPlan(env, { codigo: 'AB-DEMO-2027', nino, semana: '2026-10-19' });
    expect(r.status).toBe(503);
    expect(await r.json()).toEqual({ error: 'plan_no_disponible' });
    expect(crearMensaje).not.toHaveBeenCalled();
  });

  it('si el modelo responde algo que no es el plan → 502', async () => {
    const env = entorno();
    crearMensaje.mockResolvedValueOnce({ stop_reason: 'end_turn', content: [{ type: 'text', text: '{"hola":1}' }], usage: {} });
    const r = await pedirPlan(env, { codigo: 'AB-DEMO-2027', nino, semana: '2026-10-19' });
    expect(r.status).toBe(502);
    expect(await r.json()).toEqual({ error: 'plan_invalido' });
  });
});
