import { useEffect, type CSSProperties } from 'react';
import Andi from '../components/Andi';
import { hablar, sonido } from '../lib/voz';
import { obtener, progresoDe } from '../lib/estado';
import { piezasDe } from '../data/ninos';
import { ninoSesion } from './progreso';

export default function Celebracion({ titulo, estrella, piezaNueva, alSeguir, alRepetir }: { titulo: string; estrella: boolean; piezaNueva?: string; alSeguir: () => void; alRepetir: () => void }) {
  const piezas = piezasDe(progresoDe(obtener(), ninoSesion()).estrellas);
  useEffect(() => {
    sonido.premio();
    hablar(`${titulo} ${estrella ? '¡Ganaste una estrella!' : ''} ${piezaNueva ? `¡Me pusiste ${piezaNueva.toLowerCase()} nuevo!` : ''}`);
  }, [titulo, estrella, piezaNueva]);
  return (
    <div className="celebracion" role="dialog" aria-label={titulo}>
      <div className="confeti" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ '--i': i } as CSSProperties} />)}</div>
      <Andi tam={170} animo="wow" piezas={piezas} className="andi-salta" />
      <h1>{titulo}</h1>
      {estrella && <p className="celebracion-estrella">⭐ +1 estrella</p>}
      {piezaNueva && <p className="celebracion-pieza">¡Andi estrena {piezaNueva.toLowerCase()}!</p>}
      <div className="celebracion-botones">
        <button className="boton-nino" onClick={alSeguir}>Volver al mapa</button>
        <button className="boton-nino secundario" onClick={alRepetir}>Jugar otra vez</button>
      </div>
    </div>
  );
}
