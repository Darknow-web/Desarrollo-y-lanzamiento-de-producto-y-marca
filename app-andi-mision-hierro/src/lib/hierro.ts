import { semanaDe } from './fechas';
import type { Registro } from './tipos';

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
