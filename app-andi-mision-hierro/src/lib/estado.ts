// Estado de la app guardado solo en este teléfono (localStorage). Nada de esto viaja al servidor.
import { useMemo, useSyncExternalStore } from 'react';
import type { Estado, ProgresoNino } from './tipos';

const CLAVE = 'andi.mision-hierro.v1';
const inicial = (): Estado => ({
  version: 1, ninos: [], registros: [], despensa: [], hemoglobina: {}, progreso: {},
  ajustes: { tiempoJuegoMin: 15, voz: true, avisos: false }, codigosVistos: [],
});

function cargar(): Estado {
  try {
    const raw = localStorage.getItem(CLAVE);
    if (!raw) return inicial();
    const e = JSON.parse(raw);
    return { ...inicial(), ...e, ajustes: { ...inicial().ajustes, ...(e.ajustes || {}) } };
  } catch { return inicial(); }
}

let estado: Estado = cargar();
const oyentes = new Set<() => void>();

export function obtener(): Estado { return estado; }
export function actualizar(fn: (e: Estado) => Estado | void) {
  const copia = structuredClone(estado);
  estado = (fn(copia) as Estado) || copia;
  try { localStorage.setItem(CLAVE, JSON.stringify(estado)); } catch { /* sin espacio o modo privado */ }
  oyentes.forEach(o => o());
}
export function borrarTodo() {
  try { localStorage.removeItem(CLAVE); sessionStorage.clear(); } catch { /* ignorar */ }
  estado = inicial(); oyentes.forEach(o => o());
}
export function useEstado<T>(sel: (e: Estado) => T): T {
  return useSyncExternalStore(cb => { oyentes.add(cb); return () => oyentes.delete(cb); }, () => sel(estado));
}
window.addEventListener('storage', ev => { if (ev.key === CLAVE) { estado = cargar(); oyentes.forEach(o => o()); } });

export const nuevoId = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

export function progresoDe(e: Estado, ninoId: string): ProgresoNino {
  const base: ProgresoNino = { estrellas: 0, jugados: {}, habitos: {}, premiados: {} };
  return { ...base, ...((e.progreso[ninoId] || {}) as Partial<ProgresoNino>) };
}
/** Progreso del niño, estable entre renders (solo cambia cuando cambia su registro). */
export function useProgreso(ninoId: string): ProgresoNino {
  const crudo = useEstado(e => e.progreso[ninoId]);
  return useMemo(() => progresoDe({ progreso: { [ninoId]: crudo } } as unknown as Estado, ninoId), [crudo, ninoId]);
}
export function ninoActivo(e: Estado) {
  return e.ninos.find(n => n.id === e.ninoActivo) || e.ninos[0];
}
