// Estado de la app guardado solo en este teléfono (localStorage). Nada de esto viaja al servidor.
import { useMemo, useSyncExternalStore } from 'react';
import type { Estado, ProgresoNino, Registro } from './tipos';
import { hoyISO, lunesDe, semanaDe } from './fechas';
import { armarRegistro, hierroDelDia, hierroDelLote, referenciaDiaria, registrosDelDia, type HierroDia } from './hierro';
import { ANDIBITE_ID } from '../data/alimentos';

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

/* ---------- El hierro de hoy: registros de comidas ---------- */

/** El hierro del día del niño (mg, referencia, porcentaje y lo que falta), estable entre renders. */
export function useHierroDelDia(ninoId: string, fecha = hoyISO()): HierroDia {
  const registros = useEstado(e => e.registros);
  const ninos = useEstado(e => e.ninos);
  return useMemo(() => hierroDelDia({ registros, ninos }, ninoId, fecha), [registros, ninos, ninoId, fecha]);
}
/** Los registros de un día del niño, estables entre renders. */
export function useRegistrosDelDia(ninoId: string, fecha = hoyISO()): Registro[] {
  const registros = useEstado(e => e.registros);
  return useMemo(() => registrosDelDia(registros, ninoId, fecha), [registros, ninoId, fecha]);
}

/** Pack de la despensa del que se descuenta el próximo brownie (el primero con unidades). */
const packAbierto = (e: Estado) => e.despensa.find(d => d.restantes > 0);

/**
 * Registra una comida con hierro del niño en una fecha (los mg salen de `data/alimentos.ts`).
 * Para AndiBite, el hierro es el del lote del pack de la despensa (si se conoce) y descuenta 1 unidad si hay.
 * Devuelve el registro creado, o null si el alimento no existe.
 */
export function registrarComida(ninoId: string, fecha: string, alimentoId: string, opciones: { conVitC?: boolean; id?: string } = {}): Registro | null {
  let creado: Registro | null = null;
  actualizar(e => {
    let extra: { mg?: number; loteId?: string; despensaId?: string; nombre?: string } = {};
    if (alimentoId === ANDIBITE_ID) {
      const pack = packAbierto(e);
      if (pack) { pack.restantes -= 1; extra = { mg: hierroDelLote(pack.loteId, pack.codigo), loteId: pack.loteId, despensaId: pack.id, nombre: pack.sabor === 'Surtido' ? 'AndiBite' : `AndiBite ${pack.sabor}` }; }
    }
    const base = armarRegistro(ninoId, fecha, alimentoId, { ...extra, conVitC: opciones.conVitC });
    if (!base) return;
    creado = { id: opciones.id || nuevoId(), ...base };
    e.registros.push(creado);
  });
  return creado;
}

/** Quita un registro; si había descontado un brownie de la despensa, lo devuelve. */
export function quitarRegistro(id: string) {
  actualizar(e => {
    const r = e.registros.find(x => x.id === id); if (!r) return;
    if (r.despensaId) { const d = e.despensa.find(x => x.id === r.despensaId); if (d) d.restantes = Math.min(d.unidades, d.restantes + 1); }
    e.registros = e.registros.filter(x => x.id !== id);
  });
}

/* ---------- Lonchera vacía (la acción de cada tarde) ---------- */

/** Días de colegio (lunes a viernes) de la semana de la fecha dada. */
export const diasColegio = (fecha: string) => semanaDe(fecha).slice(0, 5);

/** ¿La lonchera de ese día volvió vacía? */
export const vaciaEl = (e: Estado, ninoId: string, fecha: string) => Boolean(e.reto[ninoId]?.[fecha]);

const idVacia = (ninoId: string, fecha: string) => `vacia-${ninoId}-${fecha}`;
/** mg del AndiBite que registró `marcarVacia` ese día (undefined si ese día ya tenía uno o no está marcado). */
export const mgDeLoncheraVacia = (e: Estado, ninoId: string, fecha: string) => e.registros.find(r => r.id === idVacia(ninoId, fecha))?.mg;

/**
 * Marca (o desmarca) la lonchera vacía de un día. Al marcar por primera vez suma una estrella al
 * progreso del niño y registra un AndiBite ese día (si no había ya uno), descontando 1 brownie de la
 * despensa si hay; al desmarcar devuelve la estrella y revierte ese registro. Devuelve true si ganó una estrella.
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
  const yaHay = registrosDelDia(estado.registros, ninoId, fecha).some(r => r.alimentoId === ANDIBITE_ID);
  if (valor && !yaHay) registrarComida(ninoId, fecha, ANDIBITE_ID, { id: idVacia(ninoId, fecha) });
  if (!valor && estado.registros.some(r => r.id === idVacia(ninoId, fecha))) quitarRegistro(idVacia(ninoId, fecha));
  return valor;
}

/** El plan de loncheras vigente para el niño en la semana de `fecha` (si lo hay). */
export function planDe(e: Estado, ninoId: string, fecha = hoyISO()) {
  const p = e.loncheras;
  return p && p.ninoId === ninoId && p.semana === lunesDe(fecha) ? p : null;
}
/** La lonchera del plan vigente para ese día (lunes a viernes), con su índice. */
export function loncheraDelPlan(e: Estado, ninoId: string, fecha = hoyISO()) {
  const p = planDe(e, ninoId, fecha); if (!p) return null;
  const i = semanaDe(p.semana).indexOf(fecha);
  return i >= 0 && i < p.dias.length ? { plan: p, dia: p.dias[i], indice: i } : null;
}
const prefijoLonchera = (semana: string, i: number) => `lon-${semana}-${i}-`;

/**
 * Registra el hierro de la lonchera del plan vigente ese día (marca `hecho` y suma `hierroMg`).
 * Devuelve los mg registrados, o null si no hay plan para ese día o ya estaba marcada.
 */
export function registrarLoncheraDelPlan(ninoId: string, fecha = hoyISO()): number | null {
  const l = loncheraDelPlan(estado, ninoId, fecha);
  if (!l || l.dia.hecho) return null;
  const { dia, indice, plan } = l;
  actualizar(e => {
    e.loncheras!.dias[indice].hecho = true;
    e.registros.push({ id: prefijoLonchera(plan.semana, indice) + nuevoId(), ninoId, fecha, alimentoId: 'lonchera', nombre: `Lonchera: ${dia.principal}`, mg: dia.hierroMg, hemo: /sangrecita|hígado|bazo|res|pescado|carne|pollo|andibite/i.test(dia.fuenteHierro), conVitC: true });
  });
  return dia.hierroMg;
}
/** Deshace `registrarLoncheraDelPlan` para ese día: desmarca `hecho` y quita su registro. */
export function desmarcarLoncheraDelPlan(ninoId: string, fecha = hoyISO()) {
  const l = loncheraDelPlan(estado, ninoId, fecha);
  if (!l || !l.dia.hecho) return;
  actualizar(e => {
    e.loncheras!.dias[l.indice].hecho = false;
    e.registros = e.registros.filter(r => !r.id.startsWith(prefijoLonchera(l.plan.semana, l.indice)));
  });
}

export interface DiaSemana {
  fecha: string; mg: number; referencia: number;
  /** Algo con hierro registrado ese día. */
  conHierro: boolean;
  /** Llegó a la referencia diaria. */
  completo: boolean;
  vacia: boolean; pasado: boolean; hoy: boolean;
}
export interface RachaSemana {
  /** Lunes a viernes de la semana, con el hierro del día, si volvió vacía y si ya pasó (o es hoy). */
  dias: DiaSemana[];
  /** Cuántos días de la semana volvió vacía. */
  vacias: number;
  /** Días seguidos (hasta hoy o el último día de colegio) en que volvió vacía. */
  racha: number;
}

/** Resumen de los días de colegio en la semana de `fecha` (por defecto, hoy). */
export function rachaSemana(e: Pick<Estado, 'reto' | 'registros' | 'ninos'>, ninoId: string, fecha = hoyISO()): RachaSemana {
  const hoy = hoyISO();
  const referencia = referenciaDiaria(e.ninos.find(n => n.id === ninoId)?.edad ?? 6);
  const dias = diasColegio(fecha).map(f => {
    const mg = hierroDelDia(e, ninoId, f).mg;
    return { fecha: f, mg, referencia, conHierro: mg > 0, completo: mg >= referencia, vacia: Boolean(e.reto[ninoId]?.[f]), pasado: f <= hoy, hoy: f === hoy };
  });
  const vacias = dias.filter(d => d.vacia).length;
  let racha = 0;
  for (const d of [...dias].reverse()) {
    if (!d.pasado) continue;
    if (d.vacia) racha += 1;
    else if (!d.hoy) break; // hoy aún puede marcarse; un día pasado sin marcar corta la racha
  }
  return { dias, vacias, racha };
}
/** Semana del niño, estable entre renders (solo cambia cuando cambian sus registros o su lonchera vacía). */
export function useRacha(ninoId: string, fecha = hoyISO()): RachaSemana {
  const reto = useEstado(e => e.reto[ninoId]);
  const registros = useEstado(e => e.registros);
  const ninos = useEstado(e => e.ninos);
  return useMemo(() => rachaSemana({ reto: { [ninoId]: reto || {} }, registros, ninos }, ninoId, fecha), [reto, registros, ninos, ninoId, fecha]);
}
