// Llamadas al Worker. Lo último que se trajo se guarda para verlo sin conexión.
// Si no hay red, los envases de muestra se abren con los datos de data/seed.json incluidos en la app.
import type { Lote, Punto } from './tipos';
import semilla from '../../data/seed.json';

export class ErrorApi extends Error { constructor(public codigo: string, public estado: number) { super(codigo); } }

async function pedir<T>(url: string, init?: RequestInit, cache?: string, respaldo?: () => T | null): Promise<T> {
  try {
    const r = await fetch(url, init);
    const datos = await r.json().catch(() => ({}));
    if (!r.ok) {
      if (r.status >= 500 && respaldo?.()) return respaldo()!;
      throw new ErrorApi(datos.error || 'error', r.status);
    }
    if (cache) try { localStorage.setItem(cache, JSON.stringify(datos)); } catch { /* sin espacio */ }
    return datos as T;
  } catch (e) {
    if (e instanceof ErrorApi) throw e;
    if (cache) { try { const c = localStorage.getItem(cache); if (c) return JSON.parse(c) as T; } catch { /* ignorar */ } }
    const r = respaldo?.(); if (r) return r;
    throw new ErrorApi('sin_conexion', 0);
  }
}

type Semilla = { lotes: Record<string, Lote>; codigos: Record<string, { code: string; loteId: string; presentacion: Presentacion; unidades: number }>; puntos: Punto[] };
const SEMILLA = semilla as unknown as Semilla;
type Presentacion = 'unidad' | 'pack6' | 'pack12';

export interface Config { whatsapp: string; publicUrl: string }
let config: Promise<Config> | null = null;
export const obtenerConfig = () => (config ??= pedir<Config>('/api/config', undefined, 'andi.cache.config')
  .catch(() => ({ whatsapp: '51941371376', publicUrl: '' })));

export interface RespuestaCodigo {
  codigo: { code: string; presentacion: Presentacion; unidades: number }; lote: Lote;
  /** Primer escaneo del envase y hasta cuándo vale el plan de loncheras con IA (14 días). */
  escaneadoEl?: string; planHasta?: string;
}
const muestraCodigo = (code: string): RespuestaCodigo | null => {
  const c = SEMILLA.codigos[code]; const l = c && SEMILLA.lotes[c.loteId];
  return c && l ? { codigo: { code: c.code, presentacion: c.presentacion, unidades: c.unidades }, lote: l } : null;
};
// Si la misma consulta ya está en vuelo (el escáner y la pantalla del lote la piden casi a la vez), se comparte: así el Worker cuenta un solo escaneo.
const enVuelo = new Map<string, Promise<RespuestaCodigo>>();
export const consultarCodigo = (code: string) => {
  const previa = enVuelo.get(code); if (previa) return previa;
  const p = pedir<RespuestaCodigo>(`/api/codigos/${encodeURIComponent(code)}`, undefined, `andi.cache.c.${code}`, () => muestraCodigo(code))
    .finally(() => { if (enVuelo.get(code) === p) enVuelo.delete(code); });
  enVuelo.set(code, p);
  return p;
};
export const consultarLote = (id: string) => pedir<Lote>(`/api/lotes/${encodeURIComponent(id)}`, undefined, `andi.cache.l.${id}`, () => SEMILLA.lotes[id] || null);
export const consultarPuntos = () => pedir<Punto[]>('/api/puntos', undefined, 'andi.cache.puntos', () => SEMILLA.puntos);

// ---------- Plan de loncheras con IA (premium) ----------
export interface DiaPlanIA {
  dia: string; principal: { nombre: string; ingredientes: string[]; preparacion: string[] };
  fruta: string; bebida: string; conAndiBite: boolean; hierroMg: number; truco: string;
}
export interface PlanIA { semana: string; nino: string; dias: DiaPlanIA[]; listaCompras: { grupo: string; items: string[] }[]; nota: string }
export interface RespuestaPlan { plan: PlanIA; vigenteHasta: string; enCache: boolean }
/**
 * POST /api/plan. Errores (ErrorApi.codigo): codigo_no_encontrado (404), plan_vencido / codigo_sin_escanear (403),
 * plan_no_disponible / plan_ocupado (503: sin clave de IA, la app usa su recetario), sin_conexion (0).
 */
export const pedirPlan = (cuerpo: { codigo: string; nino: { apodo: string; edadAnios: number; evitar: string[]; yaProbo?: string[] }; semana: string }) =>
  pedir<RespuestaPlan>('/api/plan', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(cuerpo) });
