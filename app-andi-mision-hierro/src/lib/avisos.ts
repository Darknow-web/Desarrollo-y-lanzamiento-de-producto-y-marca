// Avisos locales: se revisan al abrir la app (no hay servidor de notificaciones ni datos personales fuera del teléfono).
import { obtener } from './estado';
import { diasEntre, hoyISO } from './fechas';
import { diasHastaAcabar } from './hierro';

export async function revisarAvisos() {
  const e = obtener();
  if (!e.ajustes.avisos || !('Notification' in window) || Notification.permission !== 'granted') return;
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
  const reg = await navigator.serviceWorker?.getRegistration();
  for (const m of msgs) {
    if (reg) reg.showNotification('AndiBite', { body: m, icon: '/icons/icon-192.png', badge: '/icons/icon-192.png' });
    else new Notification('AndiBite', { body: m });
  }
}
