// Fechas locales en formato YYYY-MM-DD (sin zonas horarias raras).
export const aISO = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
export const deISO = (s: string) => { const [y, m, d] = s.split('-').map(Number); return new Date(y, m - 1, d); };
export const hoyISO = () => aISO(new Date());
export const sumarDias = (s: string, n: number) => { const d = deISO(s); d.setDate(d.getDate() + n); return aISO(d); };
export const diasEntre = (a: string, b: string) => Math.round((deISO(b).getTime() - deISO(a).getTime()) / 86_400_000);

/** Lunes de la semana de la fecha dada. */
export function lunesDe(s: string): string {
  const d = deISO(s); const dia = (d.getDay() + 6) % 7; d.setDate(d.getDate() - dia); return aISO(d);
}
export const semanaDe = (s: string) => Array.from({ length: 7 }, (_, i) => sumarDias(lunesDe(s), i));

const DIAS = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const DIAS_CORTOS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
const MESES = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'setiembre', 'octubre', 'noviembre', 'diciembre'];
export const nombreDia = (s: string) => DIAS[deISO(s).getDay()];
export const diaCorto = (s: string) => DIAS_CORTOS[deISO(s).getDay()];
export const fechaLarga = (s: string) => { const d = deISO(s); return `${d.getDate()} de ${MESES[d.getMonth()]} de ${d.getFullYear()}`; };
export const fechaCorta = (s: string) => { const d = deISO(s); return `${d.getDate()} ${MESES[d.getMonth()].slice(0, 3)}.`; };

export function relativa(s: string): string {
  const n = diasEntre(hoyISO(), s);
  if (n === 0) return 'hoy';
  if (n === 1) return 'mañana';
  if (n === -1) return 'ayer';
  if (n > 1 && n < 7) return `el ${nombreDia(s)}`;
  if (n < 0) return `hace ${-n} días`;
  return `el ${fechaCorta(s)}`;
}
