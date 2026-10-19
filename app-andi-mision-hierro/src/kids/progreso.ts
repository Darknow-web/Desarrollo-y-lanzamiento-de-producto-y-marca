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

/* ---------- Niveles por juego (en localStorage, clave andi.niveles.<ninoId>) ---------- */
export interface NivelJuego { nivel: number; mejor?: number; superados: number[] }
export type Niveles = Record<string, NivelJuego>;
const CLAVE_NIVELES = (ninoId: string) => `andi.niveles.${ninoId}`;
const oyentesNiveles = new Set<() => void>();
const cacheNiveles = new Map<string, Niveles>();

export function nivelesDe(ninoId: string = ninoSesion()): Niveles {
  const c = cacheNiveles.get(ninoId); if (c) return c;
  let v: Niveles = {};
  try { const raw = localStorage.getItem(CLAVE_NIVELES(ninoId)); if (raw) v = JSON.parse(raw) || {}; } catch { /* sin almacenamiento */ }
  cacheNiveles.set(ninoId, v);
  return v;
}
function guardarNiveles(ninoId: string, v: Niveles) {
  cacheNiveles.set(ninoId, v);
  try { localStorage.setItem(CLAVE_NIVELES(ninoId), JSON.stringify(v)); } catch { /* sin almacenamiento */ }
  oyentesNiveles.forEach(o => o());
}
const entrada = (ninoId: string, juego: string): NivelJuego => {
  const e = nivelesDe(ninoId)[juego];
  return e ? { nivel: e.nivel || 1, mejor: e.mejor, superados: e.superados || [] } : { nivel: 1, superados: [] };
};

/** Nivel actual (desde 1) de un juego para el niño de la sesión. */
export const nivelDe = (juego: string, ninoId: string = ninoSesion()) => entrada(ninoId, juego).nivel;
/** Mejor marca guardada del juego (puntos, intentos, segundos…), si existe. */
export const mejorDe = (juego: string, ninoId: string = ninoSesion()) => entrada(ninoId, juego).mejor;
/** Suma de niveles avanzados en todos los juegos (desbloquea looks en Viste a Andi). */
export const nivelTotal = (ninoId: string = ninoSesion()) => Object.values(nivelesDe(ninoId)).reduce((s, j) => s + (j.nivel - 1), 0);

/** Sube un nivel al juego (hasta `max`). */
export function subirNivel(juego: string, max = 99, ninoId: string = ninoSesion()) {
  const e = entrada(ninoId, juego);
  guardarNiveles(ninoId, { ...nivelesDe(ninoId), [juego]: { ...e, nivel: Math.min(max, e.nivel + 1) } });
}

/**
 * Registra un nivel superado. La primera vez que se supera cada nivel da 1 estrella y sube al siguiente;
 * repetir un nivel ya superado no da estrellas (así no se juega en bucle solo por premios), pero sí guarda la mejor marca.
 * `mejorEs`: 'mayor' (puntos) o 'menor' (intentos, segundos).
 */
export function superarNivel(juego: string, nivel: number, opciones: { max: number; marca?: number; mejorEs?: 'mayor' | 'menor' } ): { ganadas: number; nivelNuevo: number; total: number; mejor?: number } {
  const id = ninoSesion();
  const e = entrada(id, juego);
  const primera = !e.superados.includes(nivel);
  const ganadas = primera ? 1 : 0;
  let mejor = e.mejor;
  if (opciones.marca !== undefined) {
    const mejorEs = opciones.mejorEs || 'mayor';
    if (mejor === undefined || (mejorEs === 'mayor' ? opciones.marca > mejor : opciones.marca < mejor)) mejor = opciones.marca;
  }
  const nivelNuevo = nivel >= e.nivel ? Math.min(opciones.max, nivel + 1) : e.nivel;
  guardarNiveles(id, { ...nivelesDe(id), [juego]: { nivel: nivelNuevo, mejor, superados: primera ? [...e.superados, nivel] : e.superados } });
  actualizar(est => {
    const p = progresoDe(est, id);
    p.jugados[juego] = (p.jugados[juego] || 0) + 1;
    if (ganadas) { p.estrellas += ganadas; p.premiados[juego] = hoyISO(); }
    est.progreso[id] = p;
  });
  return { ganadas, nivelNuevo, total: progresoDe(obtener(), id).estrellas, mejor };
}

/** Solo guarda la marca de un intento no superado (por ejemplo, puntos en Atrapa). */
export function registrarIntento(juego: string, marca?: number, mejorEs: 'mayor' | 'menor' = 'mayor') {
  const id = ninoSesion(); const e = entrada(id, juego);
  actualizar(est => { const p = progresoDe(est, id); p.jugados[juego] = (p.jugados[juego] || 0) + 1; est.progreso[id] = p; });
  if (marca === undefined) return;
  if (e.mejor === undefined || (mejorEs === 'mayor' ? marca > e.mejor : marca < e.mejor)) guardarNiveles(id, { ...nivelesDe(id), [juego]: { ...e, mejor: marca } });
}

export function useNiveles(ninoId: string): Niveles {
  return useSyncExternalStore(cb => { oyentesNiveles.add(cb); return () => oyentesNiveles.delete(cb); }, () => nivelesDe(ninoId));
}

/** Edad del niño de la sesión (6 si es invitado). */
export const edadSesion = () => obtener().ninos.find(n => n.id === ninoSesion())?.edad ?? 6;
