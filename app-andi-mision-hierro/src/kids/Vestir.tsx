import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Andi from '../components/Andi';
import { FONDOS, LOOKS, type Look } from '../data/ninos';
import { useProgreso } from '../lib/estado';
import { hablar, sonido } from '../lib/voz';
import { comprarLook, guardarLook, ninoSesion, useLook } from './progreso';

/** Viste a Andi: tienda que solo acepta estrellas ganadas jugando (nunca dinero ni publicidad). */
export default function Vestir() {
  const id = ninoSesion();
  const p = useProgreso(id);
  const l = useLook(id);
  const [sacude, setSacude] = useState<string | null>(null);
  const [estreno, setEstreno] = useState(0);
  useEffect(() => { hablar('¡Vísteme! Cada look cuesta estrellas que ganas jugando.'); }, []);

  const tocar = (look: Look, costo: number) => {
    const tenia = l.comprados.includes(look);
    if (l.look === look) { guardarLook(id, { look: undefined }); sonido.toque(); return; }
    if (comprarLook(id, look, costo)) {
      if (tenia) { sonido.toque(); } else { sonido.premio(); setEstreno(e => e + 1); hablar('¡Me queda genial! Gracias.'); }
      return;
    }
    const faltan = costo - p.estrellas;
    sonido.suave(); setSacude(look); setTimeout(() => setSacude(null), 450);
    hablar(`Me faltan ${faltan} estrella${faltan === 1 ? '' : 's'}. ¡Juega para ganarlas!`);
  };

  return (
    <div className="juego juego-vestir">
      <motion.div key={estreno} className={`vestir-escena fondo-${l.fondo}`} initial={{ scale: estreno ? .9 : 1 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260, damping: 16 }}>
        <Andi tam={200} look={l.look} animo={estreno ? 'wow' : 'feliz'} className="andi-flota" />
        <span className="mapa-estrellas" aria-label={`${p.estrellas} estrellas`}>⭐ {p.estrellas}</span>
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
          const tiene = l.comprados.includes(k.id); const puesto = l.look === k.id; const alcanza = p.estrellas >= k.estrellas;
          return (
            <button key={k.id} className={`look ${puesto ? 'puesto' : ''} ${tiene ? 'tiene' : alcanza ? 'alcanza' : 'falta'} ${sacude === k.id ? 'sacude' : ''}`} onClick={() => tocar(k.id, k.estrellas)}
              aria-pressed={puesto} aria-label={`${k.nombre}: ${puesto ? 'puesto' : tiene ? 'ponerse' : `cuesta ${k.estrellas} estrellas`}`}>
              <Andi tam={64} look={k.id} titulo="" />
              <span className="look-nombre">{k.nombre}</span>
              <span className="look-precio">{puesto ? '✓ Puesto' : tiene ? 'Ponerme' : `⭐ ${k.estrellas}`}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
