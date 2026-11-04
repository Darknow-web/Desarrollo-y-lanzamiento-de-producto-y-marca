import { useEffect, useState, useSyncExternalStore } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { CSSProperties } from 'react';
import AndiNino from '../components/AndiNino';
import Killa from '../components/Killa';
import Icono from '../components/Icono';
import { EPISODIOS, type Episodio } from '../data/historietas';
import { IMAGENES_HISTORIETAS } from '../data/historietas-imagenes';
import { LOOKS } from '../data/ninos';
import { useProgreso } from '../lib/estado';
import { callar, hablar, sonido } from '../lib/voz';
import Celebracion from './Celebracion';
import { completarJuego, guardarLook, lookDe, nivelTotal, ninoSesion, sumarEstrellas, useLook, useNiveles } from './progreso';

/* ---------- Progreso de lectura (localStorage, clave andi.historietas.<ninoId>) ---------- */
interface Lectura { abiertos: string[]; leidos: string[] }
const CLAVE = (id: string) => `andi.historietas.${id}`;
const BASE: Lectura = { abiertos: ['e1'], leidos: [] };
const oyentes = new Set<() => void>();
const cache = new Map<string, Lectura>();
export function lecturaDe(ninoId: string): Lectura {
  const c = cache.get(ninoId); if (c) return c;
  let v = BASE;
  try { const raw = localStorage.getItem(CLAVE(ninoId)); if (raw) v = { ...BASE, ...JSON.parse(raw) }; } catch { /* sin almacenamiento */ }
  cache.set(ninoId, v);
  return v;
}
function guardarLectura(ninoId: string, cambios: Partial<Lectura>) {
  const v = { ...lecturaDe(ninoId), ...cambios };
  cache.set(ninoId, v);
  try { localStorage.setItem(CLAVE(ninoId), JSON.stringify(v)); } catch { /* sin almacenamiento */ }
  oyentes.forEach(o => o());
}
export const useLectura = (ninoId: string) => useSyncExternalStore(cb => { oyentes.add(cb); return () => oyentes.delete(cb); }, () => lecturaDe(ninoId));

const SUAVE = [0.22, 0.8, 0.24, 1] as const;
const imagenDe = (ep: Episodio, i: number) => { const f = IMAGENES_HISTORIETAS.find(n => n === `${ep.id}-${i + 1}.png` || n === `${ep.id}-${i + 1}.jpg`); return f ? `/img/historietas/${f}` : undefined; };

/** Las historias de Andi: lector de historietas. Se abren con estrellas ganadas jugando o con niveles, nunca con dinero. */
export default function Historietas() {
  const id = ninoSesion();
  const p = useProgreso(id);
  const lectura = useLectura(id);
  const { look } = useLook(id);
  useNiveles(id);
  const total = nivelTotal(id);
  const [abierto, setAbierto] = useState<Episodio | null>(null);
  const [vineta, setVineta] = useState(0);
  const [fin, setFin] = useState<{ ganadas: number; regalo?: string } | null>(null);
  const [sacude, setSacude] = useState<string | null>(null);

  useEffect(() => { if (!abierto) hablar('Estas son mis historias. Elige una y te la leo.'); return () => callar(); }, [abierto]);
  useEffect(() => { if (abierto) hablar(abierto.vinetas[vineta].texto); }, [abierto, vineta]);

  const leer = (ep: Episodio) => { setAbierto(ep); setVineta(0); setFin(null); sonido.toque(); };

  const tocar = (ep: Episodio) => {
    if (lectura.abiertos.includes(ep.id)) { leer(ep); return; }
    const anterior = EPISODIOS[ep.n - 2];
    if (anterior && !lectura.leidos.includes(anterior.id)) {
      sonido.suave(); setSacude(ep.id); setTimeout(() => setSacude(null), 450);
      hablar(`Primero lee la historia ${anterior.n}.`); return;
    }
    if (total >= ep.nivel) { guardarLectura(id, { abiertos: [...lectura.abiertos, ep.id] }); sonido.premio(); leer(ep); return; }
    if (p.estrellas >= ep.estrellas) {
      sumarEstrellas(id, -ep.estrellas);
      guardarLectura(id, { abiertos: [...lectura.abiertos, ep.id] }); sonido.premio(); leer(ep); return;
    }
    const faltan = ep.estrellas - p.estrellas;
    sonido.suave(); setSacude(ep.id); setTimeout(() => setSacude(null), 450);
    hablar(`Te faltan ${faltan} estrella${faltan === 1 ? '' : 's'}, o llega al nivel total ${ep.nivel}.`);
  };

  const terminar = () => {
    if (!abierto) return;
    const primera = !lectura.leidos.includes(abierto.id);
    if (primera) guardarLectura(id, { leidos: [...lectura.leidos, abierto.id] });
    const r = completarJuego('historietas');
    let regalo: string | undefined;
    const l = lookDe(id);
    if (!l.comprados.includes(abierto.regalo)) { guardarLook(id, { comprados: [...l.comprados, abierto.regalo] }); regalo = LOOKS.find(k => k.id === abierto.regalo)?.nombre; }
    setFin({ ganadas: r.ganadas, regalo });
  };

  if (abierto && fin) {
    return <Celebracion titulo={abierto.frase} ganadas={fin.ganadas} detalle={fin.regalo ? `Killa ganó un traje nuevo: ${fin.regalo}` : `Historia ${abierto.n} terminada`}
      alSeguir={() => { setAbierto(null); setFin(null); }} alRepetir={() => leer(abierto)} />;
  }

  if (abierto) {
    const v = abierto.vinetas[vineta];
    const img = imagenDe(abierto, vineta);
    const ultima = vineta === abierto.vinetas.length - 1;
    return (
      <div className="juego juego-historietas lector" style={{ '--c': abierto.color } as CSSProperties}>
        <div className="lector-cabeza">
          <button className="enlace-nino" onClick={() => { setAbierto(null); sonido.toque(); }}><Icono n="atras" tam={18} /> Historias</button>
          <span className="lector-paso">{vineta + 1} de {abierto.vinetas.length}</span>
        </div>
        <h1 className="lector-titulo">{abierto.titulo}</h1>
        <AnimatePresence mode="wait">
          <motion.figure key={vineta} className={`vineta ${img ? 'con-imagen' : ''}`} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: .28, ease: SUAVE }}>
            {img ? <img src={img} alt={v.escena} draggable={false} /> : (
              <div className="vineta-boceto" aria-label={v.escena}>
                <div className="vineta-personajes"><AndiNino tam={96} animo={vineta === abierto.vinetas.length - 1 ? 'wow' : 'feliz'} /><Killa tam={74} look={look} /></div>
                <p className="vineta-escena">{v.escena}</p>
              </div>
            )}
            <figcaption className="vineta-texto">{v.texto}</figcaption>
          </motion.figure>
        </AnimatePresence>
        <div className="lector-botones">
          <button className="boton-nino secundario" onClick={() => { setVineta(n => Math.max(0, n - 1)); sonido.toque(); }} disabled={vineta === 0} aria-label="Viñeta anterior"><Icono n="atras" tam={22} /></button>
          <button className="boton-nino secundario" onClick={() => hablar(v.texto)}><Icono n="parlante" tam={22} /> Léemelo</button>
          {ultima
            ? <button className="boton-nino" onClick={terminar}>¡Fin!</button>
            : <button className="boton-nino" onClick={() => { setVineta(n => n + 1); sonido.toque(); }} aria-label="Siguiente viñeta"><Icono n="derecha" tam={22} /></button>}
        </div>
      </div>
    );
  }

  return (
    <div className="juego juego-historietas">
      <div className="andi-habla" onClick={() => hablar('Estas son mis historias. Elige una y te la leo.')}>
        <AndiNino tam={90} className="andi-flota" />
        <p className="burbuja">Son mis viajes por el Perú con Killa. ¿Cuál leemos?</p>
      </div>
      <div className="episodios">
        {EPISODIOS.map((ep, i) => {
          const abiertoYa = lectura.abiertos.includes(ep.id); const leido = lectura.leidos.includes(ep.id);
          const regalo = total >= ep.nivel; const alcanza = abiertoYa || regalo || p.estrellas >= ep.estrellas;
          const estado = leido ? '✓ Leída' : abiertoYa ? 'Leer' : regalo ? '🎁 Abrir' : `⭐ ${ep.estrellas}`;
          return (
            <motion.button key={ep.id} className={`episodio ${leido ? 'leida' : ''} ${alcanza ? 'alcanza' : 'falta'} ${sacude === ep.id ? 'sacude' : ''}`} style={{ '--c': ep.color } as CSSProperties}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .3, delay: .06 + i * .06, ease: SUAVE }} onClick={() => tocar(ep)}
              aria-label={`Historia ${ep.n}: ${ep.titulo}. ${estado}`}>
              <span className="episodio-emoji" aria-hidden="true">{ep.emoji}</span>
              <span className="episodio-texto"><strong>Historia {ep.n}</strong><span>{ep.titulo}</span><small>{ep.lugar} · {ep.ingrediente}</small></span>
              <span className="episodio-estado">{!abiertoYa && !alcanza && <Icono n="candado" tam={14} />}{estado}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
