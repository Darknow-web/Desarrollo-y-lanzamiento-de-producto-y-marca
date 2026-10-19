// Plan de loncheras con IA (premium): tipos, acceso de 14 días por pack escaneado y último plan guardado en el teléfono.
// localStorage:
//   andi.plan.acceso  { codigo, planHasta }  acceso que dio el último pack escaneado (lo escribe desbloquearPlan/guardarAccesoPlan)
//   andi.plan.ultimo  RespuestaPlan + ninoId   último plan recibido, para verlo sin conexión
import { consultarCodigo, pedirPlan, type DiaPlanIA, type PlanIA, type RespuestaPlan } from './api';
import { diasEntre, hoyISO, lunesDe, sumarDias } from './fechas';

export const CLAVE_ACCESO = 'andi.plan.acceso';
export const CLAVE_ULTIMO = 'andi.plan.ultimo';
export const DIAS_PLAN = 14;
/** Código de demostración (siempre vigente). */
export const CODIGO_DEMO = 'AB-DEMO-2027';

export interface AccesoPlan { codigo: string; planHasta: string }
export type DiaPlan = DiaPlanIA;
export type PlanSemanal = PlanIA;
export interface PedidoPlan { codigo: string; nino: { apodo: string; edadAnios: number; evitar: string[]; yaProbo?: string[] }; semana: string }
export type EstadoAcceso = 'bloqueado' | 'vigente' | 'vencido';

const leerJSON = <T>(clave: string): T | null => { try { return JSON.parse(localStorage.getItem(clave) || 'null') as T | null; } catch { return null; } };
const escribirJSON = (clave: string, v: unknown) => { try { localStorage.setItem(clave, JSON.stringify(v)); } catch { /* sin espacio o modo privado */ } };

export const guardarAccesoPlan = (a: AccesoPlan) => escribirJSON(CLAVE_ACCESO, { codigo: a.codigo, planHasta: a.planHasta });
export const leerAccesoPlan = (): AccesoPlan | null => {
  const a = leerJSON<AccesoPlan>(CLAVE_ACCESO);
  return a && typeof a.codigo === 'string' && typeof a.planHasta === 'string' ? a : null;
};
export const borrarAccesoPlan = () => { try { localStorage.removeItem(CLAVE_ACCESO); } catch { /* ignorar */ } };

/** Tras un escaneo exitoso: consulta el código y guarda hasta cuándo vale el plan. No lanza errores. */
export async function desbloquearPlan(codigo: string): Promise<AccesoPlan | null> {
  try {
    const r = await consultarCodigo(codigo);
    if (!r.planHasta) return null;
    const previo = leerAccesoPlan();
    // Si ya había un acceso más largo (otro pack reciente), se conserva.
    const acceso = previo && previo.planHasta > r.planHasta ? previo : { codigo: r.codigo.code, planHasta: r.planHasta };
    guardarAccesoPlan(acceso);
    return acceso;
  } catch { return null; }
}

/** Estado del acceso y días que quedan (0 si venció o no hay acceso). */
export function estadoAcceso(acceso = leerAccesoPlan(), ahora = new Date()): { estado: EstadoAcceso; quedan: number; acceso: AccesoPlan | null } {
  if (!acceso) return { estado: 'bloqueado', quedan: 0, acceso: null };
  const ms = new Date(acceso.planHasta).getTime() - ahora.getTime();
  if (Number.isNaN(ms) || ms <= 0) return { estado: 'vencido', quedan: 0, acceso };
  return { estado: 'vigente', quedan: Math.max(1, Math.ceil(ms / 86_400_000)), acceso };
}

/** Lunes que se planifica: la semana en curso, o la siguiente si ya es fin de semana. */
export function semanaAPlanificar(hoy = hoyISO()): string {
  const dia = new Date(hoy + 'T12:00:00').getDay();
  return dia === 0 || dia === 6 ? sumarDias(lunesDe(hoy), 7) : lunesDe(hoy);
}

export interface UltimoPlan extends RespuestaPlan { ninoId: string; recibido: string; comprado?: string[] }
export const guardarUltimoPlan = (p: UltimoPlan) => escribirJSON(CLAVE_ULTIMO, p);
export const leerUltimoPlan = (): UltimoPlan | null => {
  const p = leerJSON<UltimoPlan>(CLAVE_ULTIMO);
  return p && p.plan && Array.isArray(p.plan.dias) ? p : null;
};

/** Pide el plan al Worker y lo guarda para verlo sin conexión. */
export async function armarPlan(pedido: PedidoPlan, ninoId: string): Promise<UltimoPlan> {
  const r = await pedirPlan(pedido);
  const u: UltimoPlan = { ...r, ninoId, recibido: hoyISO() };
  guardarUltimoPlan(u);
  if (r.vigenteHasta) guardarAccesoPlan({ codigo: pedido.codigo, planHasta: r.vigenteHasta });
  return u;
}

export const hierroSemana = (p: PlanSemanal) => Math.round(p.dias.reduce((a, d) => a + (d.hierroMg || 0), 0) * 10) / 10;
export const diasConAndiBite = (p: PlanSemanal) => p.dias.filter(d => d.conAndiBite).length;
/** Días que faltan hasta `fecha` (YYYY-MM-DD o ISO). */
export const diasHasta = (fecha: string) => diasEntre(hoyISO(), fecha.slice(0, 10));
