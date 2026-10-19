// Datos de la app en Workers KV: lotes, códigos de envase y puntos de venta.
// Claves:
//   lote:<id>            ficha y análisis de laboratorio del lote (JSON)
//   codigo:<AB-XXXX-XXXX> código del envase (JSON; la metadata repite lote, presentación y escaneos para listar rápido)
//   escaneos:<loteId>    escaneos por día del lote (JSON { "2026-10-19": 3 })
//   config:puntos        stands y ferias (JSON)
//   config:semilla       marca que indica que ya se cargó data/seed.json
// Si KV está vacío, la primera petición carga data/seed.json.
import semilla from '../data/seed.json';

/** Lo que usa la app de KV (es compatible con el KVNamespace de Cloudflare). */
export interface KV {
  get(key: string, type: 'json'): Promise<unknown>;
  get(key: string): Promise<string | null>;
  put(key: string, value: string, options?: { metadata?: unknown }): Promise<void>;
  list(options?: { prefix?: string; cursor?: string; limit?: number }): Promise<{
    keys: { name: string; metadata?: unknown }[]; list_complete: boolean; cursor?: string;
  }>;
}

export type Sabor = 'Chispa' | 'Andi' | 'Lúcu';
export type Presentacion = 'unidad' | 'pack6' | 'pack12';
export interface Lote {
  id: string; sabor: Sabor; fechaProduccion: string; fechaVencimiento: string;
  hierroMgPorUnidad: number; hierroHemoMgPorUnidad?: number; azucarGPorUnidad?: number; pesoUnidadG?: number;
  octogonos?: string[]; laboratorio?: string; informe?: string; fechaInforme?: string; origenSangrecita?: string;
  registroSanitario?: string; planta?: string; alergenos?: string[]; ingredientes?: string;
}
export interface Codigo { code: string; loteId: string; presentacion: Presentacion; unidades: number; creado: string; escaneos: number; primerEscaneo?: string; ultimoEscaneo?: string }
export interface Punto { id: string; nombre: string; lugar: string; distrito: string; desde: string; hasta?: string; horario?: string }
interface Semilla { version: number; lotes: Record<string, Lote>; codigos: Record<string, Codigo>; puntos: Punto[] }

export const SEMILLA = semilla as unknown as Semilla;
export const UNIDADES: Record<Presentacion, number> = { unidad: 1, pack6: 6, pack12: 12 };

const K = {
  lote: (id: string) => `lote:${id}`,
  codigo: (c: string) => `codigo:${c}`,
  escaneos: (id: string) => `escaneos:${id}`,
  puntos: 'config:puntos',
  semilla: 'config:semilla',
};

/** Fecha de hoy en Lima (UTC-5), formato AAAA-MM-DD. */
export const hoyLima = () => new Date(Date.now() - 5 * 3_600_000).toISOString().slice(0, 10);

const metaCodigo = (c: Codigo) => ({ loteId: c.loteId, presentacion: c.presentacion, escaneos: c.escaneos || 0, creado: c.creado });

export class Datos {
  private static sembrado = new WeakSet<object>();
  constructor(private kv: KV) {}

  /** Carga data/seed.json si KV todavía no tiene datos (una vez por instancia del Worker). */
  async asegurarSemilla() {
    if (Datos.sembrado.has(this.kv)) return;
    if (!(await this.kv.get(K.semilla))) await this.sembrar();
    Datos.sembrado.add(this.kv);
  }

  /** Escribe los datos de data/seed.json en KV (sobrescribe esos lotes, códigos y puntos). */
  async sembrar() {
    for (const l of Object.values(SEMILLA.lotes)) await this.kv.put(K.lote(l.id), JSON.stringify(l));
    for (const c of Object.values(SEMILLA.codigos)) await this.kv.put(K.codigo(c.code), JSON.stringify(c), { metadata: metaCodigo(c) });
    await this.kv.put(K.puntos, JSON.stringify(SEMILLA.puntos));
    await this.kv.put(K.semilla, JSON.stringify({ version: SEMILLA.version, fecha: new Date().toISOString() }));
    return { lotes: Object.keys(SEMILLA.lotes).length, codigos: Object.keys(SEMILLA.codigos).length, puntos: SEMILLA.puntos.length };
  }

  // KV es de consistencia eventual: justo después de sembrar, si una clave aún no aparece, se usa la semilla.
  async getLote(id: string): Promise<Lote | null> {
    return ((await this.kv.get(K.lote(id), 'json')) as Lote | null) || SEMILLA.lotes[id] || null;
  }
  async saveLote(lote: Lote): Promise<Lote> {
    const previo = await this.getLote(lote.id);
    const nuevo = { ...(previo || {}), ...lote };
    await this.kv.put(K.lote(lote.id), JSON.stringify(nuevo));
    return nuevo;
  }
  async listLotes(): Promise<Lote[]> {
    const ids = new Set(Object.keys(SEMILLA.lotes));
    for (const k of await this.listar('lote:')) ids.add(k.name.slice(5));
    const lotes = await Promise.all([...ids].map(id => this.getLote(id)));
    return lotes.filter((l): l is Lote => Boolean(l));
  }
  async escaneosDe(loteId: string): Promise<Record<string, number>> {
    return ((await this.kv.get(K.escaneos(loteId), 'json')) as Record<string, number> | null) || {};
  }

  async getCodigo(code: string): Promise<Codigo | null> {
    return ((await this.kv.get(K.codigo(code), 'json')) as Codigo | null) || SEMILLA.codigos[code] || null;
  }
  async saveCodigos(lista: Codigo[]) {
    for (const c of lista) await this.kv.put(K.codigo(c.code), JSON.stringify(c), { metadata: metaCodigo(c) });
  }
  async listCodigos(loteId?: string): Promise<Omit<Codigo, 'unidades'>[]> {
    const lista = (await this.listar('codigo:')).map(k => {
      const m = (k.metadata || {}) as Partial<Codigo>;
      return { code: k.name.slice(7), loteId: m.loteId || '', presentacion: (m.presentacion || 'pack6') as Presentacion, escaneos: m.escaneos || 0, creado: m.creado || '' };
    });
    return lista.filter(c => !loteId || c.loteId === loteId);
  }
  async registrarEscaneo(code: string) {
    const c = await this.getCodigo(code); if (!c) return;
    const ahora = new Date().toISOString();
    const nuevo: Codigo = { ...c, escaneos: (c.escaneos || 0) + 1, primerEscaneo: c.primerEscaneo || ahora, ultimoEscaneo: ahora };
    await this.kv.put(K.codigo(code), JSON.stringify(nuevo), { metadata: metaCodigo(nuevo) });
    const dias = await this.escaneosDe(c.loteId); const hoy = hoyLima();
    dias[hoy] = (dias[hoy] || 0) + 1;
    await this.kv.put(K.escaneos(c.loteId), JSON.stringify(dias));
  }

  async getPuntos(): Promise<Punto[]> {
    return ((await this.kv.get(K.puntos, 'json')) as Punto[] | null) || SEMILLA.puntos;
  }
  async savePuntos(lista: Punto[]) { await this.kv.put(K.puntos, JSON.stringify(lista)); return lista; }

  private async listar(prefix: string) {
    const todas: { name: string; metadata?: unknown }[] = []; let cursor: string | undefined;
    do {
      const r = await this.kv.list({ prefix, cursor });
      todas.push(...r.keys); cursor = r.list_complete ? undefined : r.cursor;
    } while (cursor);
    return todas;
  }
}
