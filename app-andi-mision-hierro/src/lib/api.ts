// Llamadas al servidor. Lo último que se trajo se guarda para poder verlo sin conexión.
import type { Lote, Punto } from './tipos';

export class ErrorApi extends Error { constructor(public codigo: string, public estado: number) { super(codigo); } }

async function pedir<T>(url: string, init?: RequestInit, cache?: string): Promise<T> {
  try {
    const r = await fetch(url, init);
    const datos = await r.json().catch(() => ({}));
    if (!r.ok) throw new ErrorApi(datos.error || 'error', r.status);
    if (cache) try { localStorage.setItem(cache, JSON.stringify(datos)); } catch { /* ignorar */ }
    return datos as T;
  } catch (e) {
    if (e instanceof ErrorApi) throw e;
    if (cache) { const c = localStorage.getItem(cache); if (c) return JSON.parse(c) as T; }
    throw new ErrorApi('sin_conexion', 0);
  }
}

export interface Config { whatsapp: string; ia: boolean; publicUrl: string }
let config: Promise<Config> | null = null;
export const obtenerConfig = () => (config ??= pedir<Config>('/api/config', undefined, 'andi.cache.config')
  .catch(() => ({ whatsapp: '51900000000', ia: false, publicUrl: '' })));

export interface RespuestaCodigo { codigo: { code: string; presentacion: 'unidad' | 'pack6' | 'pack12'; unidades: number }; lote: Lote }
export const consultarCodigo = (code: string) => pedir<RespuestaCodigo>(`/api/codigos/${encodeURIComponent(code)}`, undefined, `andi.cache.c.${code}`);
export const consultarLote = (id: string) => pedir<Lote>(`/api/lotes/${encodeURIComponent(id)}`, undefined, `andi.cache.l.${id}`);
export const consultarPuntos = () => pedir<Punto[]>('/api/puntos', undefined, 'andi.cache.puntos');

export interface PlanIA { dias: { dia: string; principal: string; fruta: string; bebida: string; hierroMg: number; fuenteHierro: string; preparacion: string }[]; compras: string[]; consejo: string }
export const pedirPlanIA = (cuerpo: { edad: number; gustos: string[]; evitar: string[]; incluirAndiBite: boolean }) =>
  pedir<PlanIA>('/api/loncheras', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(cuerpo) });
