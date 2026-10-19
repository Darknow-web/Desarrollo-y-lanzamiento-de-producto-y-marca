import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Andi from '../components/Andi';
import { useProgreso } from '../lib/estado';
import { hoyISO } from '../lib/fechas';
import { hablar } from '../lib/voz';
import { PARADAS } from '../data/ninos';
import { ninoSesion, useLook } from './progreso';

const SUAVE = [0.22, 0.8, 0.24, 1] as const;

/** Mapa de la misión: Andi con su look arriba y un botón grande por juego. */
export default function Mapa() {
  const id = ninoSesion();
  const p = useProgreso(id);
  const { look, fondo } = useLook(id);
  const hoy = hoyISO();
  return (
    <div className="mapa">
      <motion.div className={`mapa-andi fondo-${fondo}`} initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .35, ease: SUAVE }}
        onClick={() => hablar(p.estrellas ? `Tienes ${p.estrellas} estrella${p.estrellas === 1 ? '' : 's'}. ¿Jugamos?` : '¡Juega y gana estrellas para vestirme!')}>
        <Andi tam={150} look={look} className="andi-flota" />
        <span className="mapa-estrellas" aria-label={`${p.estrellas} estrellas`}>⭐ {p.estrellas}</span>
      </motion.div>
      <div className="mapa-juegos">
        {PARADAS.map((s, i) => {
          const hecho = p.premiados[s.id] === hoy;
          return (
            <motion.div key={s.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .32, delay: .08 + i * .07, ease: SUAVE }}>
              <Link to={`/ninos/${s.id}`} className={`parada ${hecho ? 'hecha' : ''}`} style={{ '--c': s.color } as CSSProperties} onClick={() => hablar(s.juego)}>
                <span className="parada-emoji" aria-hidden="true">{s.emoji}</span>
                <span className="parada-nombre">{s.juego}</span>
                {hecho && <span className="parada-check" aria-label="Estrella de hoy ganada">⭐</span>}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
