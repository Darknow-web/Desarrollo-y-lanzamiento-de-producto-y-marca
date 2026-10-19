// Estado de la app guardado solo en este teléfono (localStorage). Nada de esto viaja al servidor.
import { useMemo, useSyncExternalStore } from 'react';
import type { Estado, ProgresoNino } from './tipos';
import { hoyISO, semanaDe } from './fechas';

const CLAVE = 'andi.mision-hierro.v1';
const inicial = (): Estado => ({
  version: 1, ninos: [], registros: [], despensa: [], hemoglobina: {}, progreso: {}, reto: {},
  ajustes: { tiempoJuegoMin: 15, voz: true, avisos: false }, codigosVistos: [],
});

function cargar(): Estado {
  try {
    const raw = localStorage.getItem(CLAVE);
    if (!raw) return inicial();
    const e = JSON.parse(raw);
    const base = inicial();
    const estado: Estado = { ...base, ...e, ajustes: { ...base.ajustes, ...(e.ajustes || {}) }, reto: { ...(e.reto || {}) } };
    // Quien ya usaba la app (tiene hijos o dio consentimiento) no vuelve a ver la bienvenida.
    if (estado.bienvenidaVista === undefined && (estado.ninos.length > 0 || estado.consentimiento)) estado.bienvenidaVista = true;
    return estado;
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

/* ---------- Reto lonchera vacía ---------- */

/** Días de colegio (lunes a viernes) de la semana de la fecha dada. */
export const diasColegio = (fecha: string) => semanaDe(fecha).slice(0, 5);

/** ¿La lonchera de ese día volvió vacía? */
export const vaciaEl = (e: Estado, ninoId: string, fecha: string) => Boolean(e.reto[ninoId]?.[fecha]);

/**
 * Marca (o desmarca) la lonchera vacía de un día. Al marcar por primera vez suma una estrella
 * al progreso del niño; al desmarcar la devuelve. Devuelve true si ganó una estrella.
 */
export function marcarVacia(ninoId: string, fecha: string, valor: boolean): boolean {
  const antes = vaciaEl(estado, ninoId, fecha);
  if (antes === valor) return false;
  actualizar(e => {
    const dias = (e.reto[ninoId] ||= {});
    if (valor) dias[fecha] = true; else delete dias[fecha];
    const p = progresoDe(e, ninoId);
    p.estrellas = Math.max(0, p.estrellas + (valor ? 1 : -1));
    e.progreso[ninoId] = p;
  });
  return valor;
}

export interface RachaSemana {
  /** Lunes a viernes de la semana, con si volvió vacía y si ya pasó (o es hoy). */
  dias: { fecha: string; vacia: boolean; pasado: boolean; hoy: boolean }[];
  /** Cuántos días de la semana volvió vacía. */
  vacias: number;
  /** Días seguidos (hasta hoy o el último día de colegio) en que volvió vacía. */
  racha: number;
}

/** Resumen del reto en la semana de `fecha` (por defecto, hoy). */
export function rachaSemana(e: Estado, ninoId: string, fecha = hoyISO()): RachaSemana {
  const hoy = hoyISO();
  const dias = diasColegio(fecha).map(f => ({ fecha: f, vacia: vaciaEl(e, ninoId, f), pasado: f <= hoy, hoy: f === hoy }));
  const vacias = dias.filter(d => d.vacia).length;
  let racha = 0;
  for (const d of [...dias].reverse()) {
    if (!d.pasado) continue;
    if (d.vacia) racha += 1;
    else if (!d.hoy) break; // hoy aún puede marcarse; un día pasado sin marcar corta la racha
  }
  return { dias, vacias, racha };
}
/** Racha de la semana del niño, estable entre renders (solo cambia cuando cambia su reto). */
export function useRacha(ninoId: string, fecha = hoyISO()): RachaSemana {
  const crudo = useEstado(e => e.reto[ninoId]);
  return useMemo(() => rachaSemana({ reto: { [ninoId]: crudo || {} } } as unknown as Estado, ninoId, fecha), [crudo, ninoId, fecha]);
}
