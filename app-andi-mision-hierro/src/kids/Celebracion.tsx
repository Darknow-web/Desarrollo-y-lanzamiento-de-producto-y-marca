import { useEffect } from 'react';
import { motion } from 'motion/react';
import Andi from '../components/Andi';
import { hablar, sonido } from '../lib/voz';
import { ninoSesion, useLook } from './progreso';

interface Props { titulo: string; ganadas: number; detalle?: string; alSeguir: () => void; alRepetir: () => void }

/** Pantalla final de cada juego: Andi celebra y se muestran las estrellas ganadas. */
export default function Celebracion({ titulo, ganadas, detalle, alSeguir, alRepetir }: Props) {
  const { look } = useLook(ninoSesion());
  useEffect(() => {
    sonido.premio();
    hablar(`${titulo} ${ganadas === 1 ? '¡Ganaste una estrella!' : ganadas > 1 ? `¡Ganaste ${ganadas} estrellas!` : 'Ya ganaste tu estrella de hoy. ¡Sigue practicando!'}`);
  }, [titulo, ganadas]);
  return (
    <div className="celebracion" role="dialog" aria-label={titulo}>
      <motion.div initial={{ scale: .6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
        <Andi tam={170} animo="wow" look={look} className="andi-flota" />
      </motion.div>
      <h1>{titulo}</h1>
      {detalle && <p className="celebracion-detalle">{detalle}</p>}
      <motion.p className={`celebracion-estrella ${ganadas ? '' : 'sin'}`} initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .25 }}>
        {ganadas > 0 ? `${'⭐'.repeat(Math.min(ganadas, 3))} +${ganadas}` : 'Ya tienes tu estrella de hoy'}
      </motion.p>
      <div className="celebracion-botones">
        <button className="boton-nino" onClick={alSeguir}>Volver al mapa</button>
        <button className="boton-nino secundario" onClick={alRepetir}>Jugar otra vez</button>
      </div>
    </div>
  );
}
