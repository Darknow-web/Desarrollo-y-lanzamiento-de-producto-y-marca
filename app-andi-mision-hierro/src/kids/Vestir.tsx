import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Andi from '../components/Andi';
import { FONDOS, LOOKS, type Look } from '../data/ninos';
import { useProgreso } from '../lib/estado';
import { hablar, sonido } from '../lib/voz';
import { comprarLook, guardarLook, lookDe, nivelTotal, ninoSesion, useLook, useNiveles } from './progreso';

/** Viste a Andi: tienda que solo acepta estrellas ganadas jugando o niveles superados (nunca dinero ni publicidad). */
export default function Vestir() {
  const id = ninoSesion();
  const p = useProgreso(id);
  const l = useLook(id);
  useNiveles(id);
  const total = nivelTotal(id);
  const [sacude, setSacude] = useState<string | null>(null);
  const [estreno, setEstreno] = useState(0);
  useEffect(() => { hablar('¡Vísteme! Elige un traje con las estrellas que ganaste o con los niveles que superaste.'); }, []);

  const tocar = (look: Look, costo: number, nivelRegalo: number) => {
    const tenia = l.comprados.includes(look);
    if (l.look === look) { guardarLook(id, { look: undefined }); sonido.toque(); return; }
    // Regalo por nivel total: no gasta estrellas.
    if (!tenia && total >= nivelRegalo) {
      guardarLook(id, { look, comprados: [...lookDe(id).comprados, look] });
      sonido.premio(); setEstreno(e => e + 1); hablar('¡Te lo ganaste con tus niveles! Me queda genial.');
      return;
    }
    if (comprarLook(id, look, costo)) {
      if (tenia) { sonido.toque(); } else { sonido.premio(); setEstreno(e => e + 1); hablar('¡Me queda genial! Gracias.'); }
      return;
    }
    const faltan = costo - p.estrellas;
    sonido.suave(); setSacude(look); setTimeout(() => setSacude(null), 450);
    hablar(`Me faltan ${faltan} estrella${faltan === 1 ? '' : 's'}, o llega al nivel total ${nivelRegalo}. ¡Juega para ganarlas!`);
  };

  return (
    <div className="juego juego-vestir">
      <motion.div key={estreno} className={`vestir-escena fondo-${l.fondo}`} initial={{ scale: estreno ? .9 : 1 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 16 }}>
        <Andi tam={200} look={l.look} animo={estreno ? 'wow' : 'feliz'} className="andi-flota" />
        <div className="vestir-marcas">
          <span className="mapa-estrellas" aria-label={`Nivel total ${total}`}>🏅 Nivel total {total}</span>
        </div>
      </motion.div>

      <div className="fondos" role="group" aria-label="Fondo">
        {FONDOS.map(f => (
          <button key={f.id} className={`fondo-boton fondo-${f.id} ${l.fondo === f.id ? 'activo' : ''}`} onClick={() => { guardarLook(id, { fondo: f.id }); sonido.toque(); }} aria-pressed={l.fondo === f.id} aria-label={f.nombre}>
            <span aria-hidden="true">{f.emoji}</span>
          </button>
        ))}
      </div>

      <div className="looks">
        {LOOKS.map(k => {
          const tiene = l.comprados.includes(k.id); const puesto = l.look === k.id;
          const regalo = total >= k.nivel; const alcanza = regalo || p.estrellas >= k.estrellas;
          return (
            <button key={k.id} className={`look ${puesto ? 'puesto' : ''} ${tiene ? 'tiene' : alcanza ? 'alcanza' : 'falta'} ${sacude === k.id ? 'sacude' : ''}`} onClick={() => tocar(k.id, k.estrellas, k.nivel)}
              aria-pressed={puesto} aria-label={`${k.nombre}: ${puesto ? 'puesto' : tiene ? 'ponerse' : regalo ? 'regalo por nivel' : `cuesta ${k.estrellas} estrellas o nivel total ${k.nivel}`}`}>
              <Andi tam={64} look={k.id} titulo="" />
              <span className="look-nombre">{k.nombre}</span>
              <span className="look-precio">{puesto ? '✓ Puesto' : tiene ? 'Ponerme' : regalo ? '🎁 Regalo' : `⭐ ${k.estrellas}`}</span>
              {!tiene && !regalo && <span className="look-nivel">o nivel {k.nivel}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
