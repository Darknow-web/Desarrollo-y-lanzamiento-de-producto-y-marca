import { actualizar, obtener, progresoDe } from '../lib/estado';
import { hoyISO } from '../lib/fechas';
import { PIEZAS, piezasDe } from '../data/ninos';

export const INVITADO = 'invitado';
export const ninoSesion = () => { try { return JSON.parse(sessionStorage.getItem('andi.sesion') || '{}').ninoId || INVITADO; } catch { return INVITADO; } };

/** Suma una estrella por juego completado, una vez al día por juego. Devuelve la pieza nueva, si la hay. */
export function completarJuego(juego: string): { estrella: boolean; piezaNueva?: string } {
  const id = ninoSesion(); const hoy = hoyISO();
  const antes = progresoDe(obtener(), id);
  const estrella = antes.premiados[juego] !== hoy;
  actualizar(e => {
    const p = progresoDe(e, id);
    p.jugados[juego] = (p.jugados[juego] || 0) + 1;
    if (estrella) { p.estrellas += 1; p.premiados[juego] = hoy; }
    e.progreso[id] = p;
  });
  if (!estrella) return { estrella };
  const nuevas = piezasDe(antes.estrellas + 1).filter(p => !piezasDe(antes.estrellas).includes(p));
  return { estrella, piezaNueva: nuevas.length ? PIEZAS.find(p => p.id === nuevas[0])!.nombre : undefined };
}
