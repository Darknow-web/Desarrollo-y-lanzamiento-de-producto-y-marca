import { useSyncExternalStore } from 'react';
import { actualizar, obtener, progresoDe } from '../lib/estado';
import { hoyISO } from '../lib/fechas';
import type { Fondo, Look } from '../data/ninos';

export const INVITADO = 'invitado';
export const ninoSesion = () => { try { return JSON.parse(sessionStorage.getItem('andi.sesion') || '{}').ninoId || INVITADO; } catch { return INVITADO; } };

/** Suma estrellas al progreso de un niño (la usan los juegos y el reto diario de los padres). */
export function sumarEstrellas(ninoId: string, n: number) {
  if (!n) return;
  actualizar(e => { const p = progresoDe(e, ninoId); p.estrellas = Math.max(0, p.estrellas + n); e.progreso[ninoId] = p; });
}

/**
 * Registra un juego terminado. La primera vez del día da 1 estrella (más `bono`, si lo hubo);
 * las siguientes veces no dan estrellas (así no se juega en bucle solo por premios).
 */
export function completarJuego(juego: string, bono = 0): { ganadas: number; total: number } {
  const id = ninoSesion(); const hoy = hoyISO();
  const primera = progresoDe(obtener(), id).premiados[juego] !== hoy;
  const ganadas = primera ? 1 + bono : 0;
  actualizar(e => {
    const p = progresoDe(e, id);
    p.jugados[juego] = (p.jugados[juego] || 0) + 1;
    if (primera) { p.estrellas += ganadas; p.premiados[juego] = hoy; }
    e.progreso[id] = p;
  });
  return { ganadas, total: progresoDe(obtener(), id).estrellas };
}

/* ---------- Look y fondo de Andi (en localStorage, aparte del estado de los padres) ---------- */
export interface LookNino { look?: Look; fondo: Fondo; comprados: Look[] }
const CLAVE = (ninoId: string) => `andi.look.${ninoId}`;
const BASE: LookNino = { fondo: 'andes', comprados: [] };
const oyentes = new Set<() => void>();
const cache = new Map<string, LookNino>();

export function lookDe(ninoId: string): LookNino {
  const c = cache.get(ninoId); if (c) return c;
  let v = BASE;
  try { const raw = localStorage.getItem(CLAVE(ninoId)); if (raw) v = { ...BASE, ...JSON.parse(raw) }; } catch { /* sin almacenamiento */ }
  cache.set(ninoId, v);
  return v;
}
export function guardarLook(ninoId: string, cambios: Partial<LookNino>) {
  const v = { ...lookDe(ninoId), ...cambios };
  cache.set(ninoId, v);
  try { localStorage.setItem(CLAVE(ninoId), JSON.stringify(v)); } catch { /* sin almacenamiento */ }
  oyentes.forEach(o => o());
}
export function useLook(ninoId: string): LookNino {
  return useSyncExternalStore(cb => { oyentes.add(cb); return () => oyentes.delete(cb); }, () => lookDe(ninoId));
}

/** Compra un look con estrellas. Devuelve false si no alcanzan. */
export function comprarLook(ninoId: string, look: Look, costo: number): boolean {
  const l = lookDe(ninoId);
  if (l.comprados.includes(look)) { guardarLook(ninoId, { look }); return true; }
  if (progresoDe(obtener(), ninoId).estrellas < costo) return false;
  sumarEstrellas(ninoId, -costo);
  guardarLook(ninoId, { look, comprados: [...l.comprados, look] });
  return true;
}
