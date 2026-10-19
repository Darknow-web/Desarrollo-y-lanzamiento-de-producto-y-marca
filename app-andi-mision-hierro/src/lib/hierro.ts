import { semanaDe } from './fechas';
import type { Estado, Lote, Registro } from './tipos';
import { ANDIBITE_ID, HIERRO_ANDIBITE_REF, alimentoPorId } from '../data/alimentos';
import semilla from '../../data/seed.json';

/** Ingesta diaria recomendada de hierro (IOM/NAM, RDA), en mg. Referencia de toda la alimentación. */
export function referenciaDiaria(edad: number): number {
  if (edad <= 3) return 7;
  if (edad <= 8) return 10;
  return 8;
}

/** Referencia de hemoglobina de la OMS (2024), a nivel del mar, en g/dL: debajo de este valor se habla de anemia. */
export function umbralHemoglobina(edad: number): number {
  if (edad < 2) return 10.5;
  if (edad < 5) return 11.0;
  if (edad < 12) return 11.5;
  return 12.0;
}

const redondear = (n: number) => Math.round(n * 10) / 10;

/** Registros de un niño en un día. */
export const registrosDelDia = (registros: Registro[], ninoId: string, fecha: string) => registros.filter(r => r.ninoId === ninoId && r.fecha === fecha);

export interface HierroDia {
  /** mg de hierro registrados ese día (suma de todas las comidas). */
  mg: number;
  /** Referencia diaria del niño según su edad, en mg. */
  referencia: number;
  /** Avance frente a la referencia, 0 a 100 (se detiene en 100). */
  porcentaje: number;
  /** mg que faltan para llegar a la referencia (0 si ya llegó). */
  faltan: number;
}

/** El hierro de un día del niño, con la única fuente: los registros. */
export function hierroDelDia(e: Pick<Estado, 'registros' | 'ninos'>, ninoId: string, fecha: string): HierroDia {
  const nino = e.ninos.find(n => n.id === ninoId);
  const referencia = referenciaDiaria(nino?.edad ?? 6);
  const mg = redondear(registrosDelDia(e.registros, ninoId, fecha).reduce((a, r) => a + r.mg, 0));
  return { mg, referencia, porcentaje: Math.min(100, Math.round((mg / referencia) * 100)), faltan: Math.max(0, redondear(referencia - mg)) };
}

type Semilla = { lotes: Record<string, Pick<Lote, 'hierroMgPorUnidad'>> };
/**
 * Hierro por brownie del lote (mg): primero lo que la app ya trajo del Worker (caché local),
 * después los lotes de muestra incluidos en la app y, si no se conoce, la referencia de 1.9 mg.
 */
export function hierroDelLote(loteId?: string, codigo?: string): number {
  if (loteId) {
    try {
      const l = typeof localStorage !== 'undefined' ? localStorage.getItem(`andi.cache.l.${loteId}`) : null;
      if (l) { const mg = (JSON.parse(l) as Lote).hierroMgPorUnidad; if (mg > 0) return mg; }
    } catch { /* caché dañada */ }
  }
  if (codigo) {
    try {
      const c = typeof localStorage !== 'undefined' ? localStorage.getItem(`andi.cache.c.${codigo}`) : null;
      if (c) { const mg = (JSON.parse(c) as { lote?: Lote }).lote?.hierroMgPorUnidad; if (mg && mg > 0) return mg; }
    } catch { /* caché dañada */ }
  }
  const s = (semilla as unknown as Semilla).lotes[loteId || ''];
  return s?.hierroMgPorUnidad || HIERRO_ANDIBITE_REF;
}

/** Arma un registro (sin id) a partir del alimento de `data/alimentos.ts`. Devuelve null si el alimento no existe. */
export function armarRegistro(ninoId: string, fecha: string, alimentoId: string, opciones: { mg?: number; conVitC?: boolean; loteId?: string; despensaId?: string; nombre?: string } = {}): Omit<Registro, 'id'> | null {
  const a = alimentoPorId(alimentoId); if (!a) return null;
  const r: Omit<Registro, 'id'> = { ninoId, fecha, alimentoId, nombre: opciones.nombre || a.nombre, mg: redondear(opciones.mg ?? a.mg), hemo: a.hemo, conVitC: opciones.conVitC ?? false };
  if (opciones.loteId) r.loteId = opciones.loteId;
  if (opciones.despensaId) r.despensaId = opciones.despensaId;
  return r;
}

export const esAndiBite = (r: Pick<Registro, 'alimentoId'>) => r.alimentoId === ANDIBITE_ID;

export type Semaforo = 'verde' | 'ambar' | 'rojo';
export interface ResumenSemana {
  dias: { fecha: string; mg: number; conHierro: boolean; conVitC: boolean; hemo: boolean }[];
  diasConHierro: number;
  mgSemana: number;
  color: Semaforo;
}

export function resumenSemana(registros: Registro[], ninoId: string, fecha: string): ResumenSemana {
  const dias = semanaDe(fecha).map(f => {
    const rs = registros.filter(r => r.ninoId === ninoId && r.fecha === f);
    return {
      fecha: f,
      mg: Math.round(rs.reduce((a, r) => a + r.mg, 0) * 10) / 10,
      conHierro: rs.length > 0,
      conVitC: rs.some(r => r.conVitC),
      hemo: rs.some(r => r.hemo),
    };
  });
  const diasConHierro = dias.filter(d => d.conHierro).length;
  const color: Semaforo = diasConHierro >= 5 ? 'verde' : diasConHierro >= 3 ? 'ambar' : 'rojo';
  return { dias, diasConHierro, mgSemana: Math.round(dias.reduce((a, d) => a + d.mg, 0) * 10) / 10, color };
}

/** Días que faltan para que se acabe el pack, según cuántos come a la semana. */
export function diasHastaAcabar(restantes: number, porSemana: number): number {
  if (restantes <= 0) return 0;
  if (porSemana <= 0) return Infinity;
  return Math.floor((restantes / porSemana) * 7);
}
