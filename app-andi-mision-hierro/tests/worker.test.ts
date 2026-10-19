import { describe, expect, it } from 'vitest';
import app, { type Env } from '../worker/index';
import type { KV } from '../worker/datos';

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
const entorno = (): Env => ({ ANDI_KV: kvMemoria(), ADMIN_TOKEN: 'clave-de-prueba', WHATSAPP_NUMBER: '51 987 654 321', PUBLIC_URL: 'https://andi.example' });
const pedir = (env: Env, ruta: string, init?: RequestInit) => app.request(ruta, init, env);

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
    expect(resumen.find(l => l.id === 'L2610-CH')?.codigosGenerados).toBe(5);
    const nuevos = await (await pedir(env, '/api/admin/codigos', { method: 'POST', headers: auth, body: JSON.stringify({ loteId: 'L2610-LU', presentacion: 'pack12', cantidad: 5 }) })).json() as { code: string }[];
    expect(nuevos).toHaveLength(5);
    const r = await pedir(env, `/api/c/${nuevos[0].code}`);
    expect(r.status).toBe(200);
    const sembrar = await pedir(env, '/api/admin/seed', { method: 'POST', headers: auth });
    expect(await sembrar.json()).toMatchObject({ ok: true, lotes: 3, codigos: 10 });
  });
});
