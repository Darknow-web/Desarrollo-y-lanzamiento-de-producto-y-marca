// Pedido de recompra por WhatsApp: arma el enlace wa.me con el mensaje ya escrito.
import { PRECIOS, type ClavePedido } from '../data/precios';

export const soles = (n: number) => `S/${n.toFixed(2)}`;
export type Pedido = Partial<Record<ClavePedido, number>>;

export const totalPedido = (p: Pedido) =>
  (Object.keys(PRECIOS) as ClavePedido[]).reduce((a, k) => a + (p[k] || 0) * PRECIOS[k].precio, 0);

export function mensajePedido(p: Pedido, extra?: { codigo?: string; sabor?: string; motivo?: string }) {
  const partes = (Object.keys(PRECIOS) as ClavePedido[]).filter(k => p[k]).map(k => `${p[k]} ${PRECIOS[k].nombre.toLowerCase()} (${soles(PRECIOS[k].precio)})`);
  const lista = partes.length > 1 ? partes.slice(0, -1).join(', ') + ' y ' + partes.at(-1) : partes[0] || '';
  return [
    `Hola AndiBite, quiero pedir ${lista}${extra?.sabor ? `, sabor ${extra.sabor}` : ''}. Total: ${soles(totalPedido(p))}.`,
    extra?.motivo,
    extra?.codigo ? `Mi último envase: ${extra.codigo}.` : '',
    '¿Qué día me lo pueden entregar?',
  ].filter(Boolean).join(' ');
}

export const enlaceWhatsApp = (numero: string, mensaje: string) =>
  `https://wa.me/${numero.replace(/\D/g, '')}?text=${encodeURIComponent(mensaje)}`;
