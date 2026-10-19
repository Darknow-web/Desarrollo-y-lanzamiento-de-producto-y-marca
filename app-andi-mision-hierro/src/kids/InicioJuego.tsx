import type { ReactNode } from 'react';
import Andi from '../components/Andi';
import { mejorDe, ninoSesion, useLook, useNiveles } from './progreso';

interface Props {
  juego: string;
  titulo: string;
  nivel: number;
  max: number;
  /** Cómo mostrar la mejor marca (por ejemplo, «12 puntos»). */
  marca?: (mejor: number) => string;
  pista?: ReactNode;
  alJugar: () => void;
}

/** Pantalla de inicio común a todos los juegos: Andi, el nivel actual y la mejor marca. */
export default function InicioJuego({ juego, titulo, nivel, max, marca, pista, alJugar }: Props) {
  const id = ninoSesion();
  const { look } = useLook(id);
  useNiveles(id);
  const mejor = mejorDe(juego, id);
  return (
    <div className="juego juego-inicio">
      <Andi tam={150} look={look} className="andi-flota" />
      <h1>{titulo}</h1>
      <div className="nivel-chip" aria-label={`Nivel ${nivel} de ${max}`}>
        <span className="nivel-chip-n">Nivel {nivel}</span>
        <span className="nivel-chip-barra" aria-hidden="true"><i style={{ width: `${((nivel - 1) / Math.max(1, max - 1)) * 100}%` }} /></span>
        <span className="nivel-chip-max">de {max}</span>
      </div>
      {pista && <p className="juego-pista">{pista}</p>}
      {mejor !== undefined && marca && <p className="juego-mejor">🏅 Mejor marca: {marca(mejor)}</p>}
      <button className="boton-nino grande" onClick={alJugar}>{nivel >= max ? '¡Jugar!' : `¡Jugar nivel ${nivel}!`}</button>
    </div>
  );
}
