// Avisos locales: se revisan al abrir la app (no hay servidor de notificaciones ni datos personales fuera del teléfono).
import { obtener, vaciaEl } from './estado';
import { deISO, diasEntre, hoyISO } from './fechas';
import { diasHastaAcabar } from './hierro';

const HORA_LONCHERA = 17; // 5 p. m.: la hora en que la lonchera ya volvió del colegio

const puedeAvisar = () => {
  const e = obtener();
  return e.ajustes.avisos && 'Notification' in window && Notification.permission === 'granted';
};
async function mostrar(cuerpo: string) {
  const reg = await navigator.serviceWorker?.getRegistration();
  if (reg) reg.showNotification('AndiBite', { body: cuerpo, icon: '/icons/icon-192.png', badge: '/icons/icon-192.png' });
  else new Notification('AndiBite', { body: cuerpo });
}

/** "¿Volvió vacía hoy?": a las 5 p. m. de un día de colegio, si aún no marcaron la lonchera de hoy. Una vez por día. */
export async function avisoLoncheraDeHoy(ahora = new Date()) {
  if (!puedeAvisar()) return;
  const e = obtener();
  const dia = ahora.getDay(); if (dia === 0 || dia === 6) return;
  if (ahora.getHours() < HORA_LONCHERA || ahora.getHours() >= 22) return;
  const hoy = hoyISO(); const clave = 'andi.avisos.lonchera.' + hoy;
  if (localStorage.getItem(clave)) return;
  const pendientes = e.ninos.filter(n => !vaciaEl(e, n.id, hoy));
  if (!pendientes.length) return;
  localStorage.setItem(clave, '1');
  await mostrar(pendientes.length === 1 ? `¿Volvió vacía hoy la lonchera de ${pendientes[0].apodo}? Márcalo y el hierro del día se suma solo.` : '¿Volvió vacía hoy? Márcalo y el hierro del día se suma solo.');
}

let temporizador = 0;
/** Deja programado el aviso de las 5 p. m. mientras la app esté abierta (y lo lanza si ya es la hora). */
export function programarAvisoLonchera() {
  window.clearTimeout(temporizador);
  if (!puedeAvisar()) return;
  const ahora = new Date();
  const alas5 = deISO(hoyISO()); alas5.setHours(HORA_LONCHERA, 0, 0, 0);
  const falta = alas5.getTime() - ahora.getTime();
  if (falta <= 0) { avisoLoncheraDeHoy(ahora); return; }
  temporizador = window.setTimeout(() => avisoLoncheraDeHoy(), Math.min(falta, 2_147_000_000));
}

export async function revisarAvisos() {
  programarAvisoLonchera();
  const e = obtener();
  if (!puedeAvisar()) return;
  const hoy = hoyISO(); const clave = 'andi.avisos.' + hoy;
  if (localStorage.getItem(clave)) return;
  const msgs: string[] = [];
  const activos = e.despensa.filter(d => d.restantes > 0);
  const restantes = activos.reduce((a, d) => a + d.restantes, 0);
  if (e.despensa.length && diasHastaAcabar(restantes, activos.reduce((a, d) => Math.max(a, d.porSemana), 0) || 5) <= 2) msgs.push('Tu pack de AndiBite se está acabando. Pídelo por WhatsApp desde la app.');
  for (const n of e.ninos) {
    const p = e.hemoglobina[n.id]?.proxima;
    if (p) { const d = diasEntre(hoy, p); if (d >= 0 && d <= 3) msgs.push(`El control de hemoglobina de ${n.apodo} es ${d === 0 ? 'hoy' : `en ${d} día${d > 1 ? 's' : ''}`}.`); }
  }
  if (!msgs.length) return;
  localStorage.setItem(clave, '1');
  for (const m of msgs) await mostrar(m);
}
