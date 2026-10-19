import { useEffect } from 'react';
import { motion } from 'motion/react';
import Andi from '../components/Andi';
import { hablar, sonido } from '../lib/voz';
import { ninoSesion, useLook } from './progreso';

interface Props {
  titulo: string;
  ganadas: number;
  detalle?: string;
  /** Nivel que se acaba de jugar. */
  nivel?: number;
  /** Si el nivel se superó (false: Andi anima a intentarlo otra vez). */
  superado?: boolean;
  /** Nivel al que se puede seguir (si hay). */
  siguiente?: number;
  alSeguir: () => void;
  alRepetir: () => void;
  alSiguiente?: () => void;
}

/** Pantalla final de cada juego: Andi celebra, muestra «Nivel N superado» y las estrellas ganadas. */
export default function Celebracion({ titulo, ganadas, detalle, nivel, superado = true, siguiente, alSeguir, alRepetir, alSiguiente }: Props) {
  const { look } = useLook(ninoSesion());
  useEffect(() => {
    if (superado) sonido.premio(); else sonido.suave();
    const estrella = ganadas === 1 ? '¡Ganaste una estrella!' : ganadas > 1 ? `¡Ganaste ${ganadas} estrellas!` : superado ? 'Este nivel ya te dio su estrella. ¡Sigue avanzando!' : 'Casi. ¡Inténtalo otra vez!';
    hablar(`${titulo} ${superado && nivel ? `Nivel ${nivel} superado.` : ''} ${estrella}`);
  }, [titulo, ganadas, nivel, superado]);
  return (
    <div className="celebracion" role="dialog" aria-label={titulo}>
      <motion.div initial={{ scale: .6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
        <Andi tam={170} animo={superado ? 'wow' : 'piensa'} look={look} className="andi-flota" />
      </motion.div>
      {nivel !== undefined && <span className={`celebracion-nivel ${superado ? '' : 'sin'}`}>{superado ? `Nivel ${nivel} superado` : `Nivel ${nivel}`}</span>}
      <h1>{titulo}</h1>
      {detalle && <p className="celebracion-detalle">{detalle}</p>}
      <motion.p className={`celebracion-estrella ${ganadas ? '' : 'sin'}`} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .25 }}>
        {ganadas > 0 ? `${'⭐'.repeat(Math.min(ganadas, 3))} +${ganadas}` : superado ? 'Ya tienes la estrella de este nivel' : 'Casi lo logras'}
      </motion.p>
      <div className="celebracion-botones">
        {superado && siguiente && alSiguiente
          ? <button className="boton-nino" onClick={alSiguiente}>Seguir al nivel {siguiente}</button>
          : <button className="boton-nino" onClick={alRepetir}>{superado ? 'Jugar otra vez' : 'Intentar otra vez'}</button>}
        <button className="boton-nino secundario" onClick={alSeguir}>Volver al mapa</button>
        {superado && siguiente && alSiguiente && <button className="enlace-nino" onClick={alRepetir}>Repetir este nivel</button>}
      </div>
    </div>
  );
}
