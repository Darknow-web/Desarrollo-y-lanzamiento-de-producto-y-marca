// Compartir el hierro del día o de la semana con el otro padre: los datos viven solo en este teléfono,
// así que la forma honesta de "verlo desde el trabajo" es enviarle un mensaje corto.
import type { HierroDia } from './hierro';

const FIRMA = 'Enviado desde Andi.';

const lista = (nombres: string[]) => (nombres.length > 1 ? `${nombres.slice(0, -1).join(', ')} y ${nombres.at(-1)}` : nombres[0] || '');

/** "Hoy {apodo} lleva {mg} de {referencia} mg de hierro ({porcentaje} %). Comió: {lista}. Lonchera: volvió vacía / sin marcar." */
export function textoHoy(apodo: string, hierro: Pick<HierroDia, 'mg' | 'referencia' | 'porcentaje'>, comidas: string[], vacia: boolean) {
  const comio = comidas.length ? lista(comidas) : 'nada registrado todavía';
  return `Hoy ${apodo} lleva ${hierro.mg} de ${hierro.referencia} mg de hierro (${hierro.porcentaje} %). Comió: ${comio}. Lonchera: ${vacia ? 'volvió vacía' : 'sin marcar'}. ${FIRMA}`;
}

/** "Semana de {apodo}: {diasConHierro} de 7 días con hierro, {mgSemana} mg en total. Loncheras vacías: N." */
export function textoSemana(apodo: string, semana: { diasConHierro: number; mgSemana: number; vacias: number }) {
  return `Semana de ${apodo}: ${semana.diasConHierro} de 7 días con hierro, ${semana.mgSemana} mg en total. Loncheras vacías: ${semana.vacias}. ${FIRMA}`;
}

/** Enlace de WhatsApp sin número: el padre elige a quién se lo manda. */
export const enlaceCompartir = (texto: string) => `https://wa.me/?text=${encodeURIComponent(texto)}`;

/** Abre la hoja nativa de compartir si existe; si no, WhatsApp en una pestaña nueva. */
export async function compartirTexto(titulo: string, texto: string) {
  try {
    if (typeof navigator !== 'undefined' && navigator.share) { await navigator.share({ title: titulo, text: texto }); return; }
  } catch { return; /* cancelado */ }
  window.open(enlaceCompartir(texto), '_blank', 'noopener');
}
