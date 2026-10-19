import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Andi from '../components/Andi';
import { useProgreso } from '../lib/estado';
import { hablar } from '../lib/voz';
import { PARADAS } from '../data/ninos';
import { ninoSesion, useLook, useNiveles } from './progreso';

const SUAVE = [0.22, 0.8, 0.24, 1] as const;

/** Mapa de la misión: Andi con su look arriba y una parada por juego con su nivel. */
export default function Mapa() {
  const id = ninoSesion();
  const p = useProgreso(id);
  const { look, fondo, comprados } = useLook(id);
  const niveles = useNiveles(id);
  return (
    <div className="mapa">
      <motion.div className={`mapa-andi fondo-${fondo}`} initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .35, ease: SUAVE }}
        onClick={() => hablar(p.estrellas ? `Tienes ${p.estrellas} estrella${p.estrellas === 1 ? '' : 's'}. ¿Jugamos?` : '¡Juega, sube de nivel y gana estrellas para vestirme!')}>
        <Andi tam={120} look={look} className="andi-flota" />
      </motion.div>
      <div className="mapa-juegos">
        {PARADAS.map((s, i) => {
          const nivel = niveles[s.id]?.nivel ?? 1;
          const completo = s.niveles > 0 && (niveles[s.id]?.superados.length ?? 0) >= s.niveles;
          const etiqueta = s.niveles ? (completo ? '¡Completo!' : `Nivel ${nivel}`) : `${comprados.length} de 6 trajes`;
          return (
            <motion.div key={s.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .32, delay: .08 + i * .06, ease: SUAVE }}>
              <Link to={`/ninos/${s.id}`} className={`parada ${completo ? 'hecha' : ''}`} style={{ '--c': s.color } as CSSProperties} onClick={() => hablar(s.juego)}>
                <span className="parada-emoji" aria-hidden="true">{s.emoji}</span>
                <span className="parada-nombre">{s.juego}</span>
                <span className={`parada-nivel ${completo ? 'completo' : ''}`}>{etiqueta}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
