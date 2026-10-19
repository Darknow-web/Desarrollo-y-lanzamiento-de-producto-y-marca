import { useCallback, useEffect, useRef, useState, type KeyboardEvent as KE, type PointerEvent as PE } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Andi, { type Animo } from '../components/Andi';
import Celebracion from './Celebracion';
import { CAEN, type Cae } from '../data/ninos';
import { hablar, sonido } from '../lib/voz';
import { completarJuego, ninoSesion, useLook } from './progreso';

const DURACION = 45;      // segundos
const VIDAS = 3;
const UMBRAL = 20;        // puntos para la segunda estrella
const ANCHO_LONCHERA = 110; // px

interface Objeto { k: number; cae: Cae; x: number; y: number }   // x: 0..1 del ancho; y: px desde arriba
interface Flotante { k: number; x: number; y: number; texto: string; bueno: boolean; hasta: number }
interface Vista { objetos: Objeto[]; flotantes: Flotante[]; andiX: number; puntos: number; vidas: number; restante: number; animo: Animo; golpe: number }

const elegir = () => {
  const trampa = Math.random() < 0.3;
  const lista = CAEN.filter(c => (c.tipo === 'trampa') === trampa);
  return lista[Math.floor(Math.random() * lista.length)];
};

/** Atrapa el hierro: Andi se mueve abajo con su lonchera y atrapa los alimentos con hierro. */
export default function Atrapa() {
  const ir = useNavigate();
  const { look } = useLook(ninoSesion());
  const [fase, setFase] = useState<'inicio' | 'jugando' | 'fin'>('inicio');
  const [vista, setVista] = useState<Vista>({ objetos: [], flotantes: [], andiX: .5, puntos: 0, vidas: VIDAS, restante: DURACION, animo: 'feliz', golpe: 0 });
  const [fin, setFin] = useState<{ ganadas: number; puntos: number } | null>(null);
  const area = useRef<HTMLDivElement>(null);
  const juego = useRef({ ...vista, teclas: { izq: false, der: false }, ultimoSpawn: 0, k: 0, t0: 0, ultimoSeg: DURACION, animoHasta: 0, vivo: false });
  const raf = useRef(0);

  const terminar = useCallback((puntos: number) => {
    juego.current.vivo = false; cancelAnimationFrame(raf.current);
    const r = completarJuego('atrapa', puntos >= UMBRAL ? 1 : 0);
    setFin({ ganadas: r.ganadas, puntos }); setFase('fin');
  }, []);

  const empezar = () => {
    const j = juego.current;
    Object.assign(j, { objetos: [], flotantes: [], andiX: .5, puntos: 0, vidas: VIDAS, restante: DURACION, animo: 'feliz' as Animo, golpe: 0, ultimoSpawn: 0, k: 0, t0: performance.now(), ultimoSeg: DURACION, animoHasta: 0, vivo: true });
    setFase('jugando'); sonido.bien(); hablar('¡Atrapa el hierro! Esquiva la gaseosa y los caramelos.');
    let previo = performance.now();
    const paso = (ahora: number) => {
      if (!j.vivo) return;
      const el = area.current; if (!el) { raf.current = requestAnimationFrame(paso); return; }
      const dt = Math.min(0.05, (ahora - previo) / 1000); previo = ahora;
      const { width: w, height: h } = el.getBoundingClientRect();
      const transcurrido = (ahora - j.t0) / 1000;
      const restante = Math.max(0, DURACION - transcurrido);
      const ritmo = 1 + Math.min(1.5, transcurrido / DURACION * 1.5);      // la velocidad sube con el tiempo
      // teclado
      if (j.teclas.izq) j.andiX = Math.max(0.08, j.andiX - 1.1 * dt);
      if (j.teclas.der) j.andiX = Math.min(0.92, j.andiX + 1.1 * dt);
      // caen nuevos
      if (ahora - j.ultimoSpawn > 1150 / ritmo) { j.ultimoSpawn = ahora; j.objetos.push({ k: j.k++, cae: elegir(), x: 0.1 + Math.random() * 0.8, y: -40 }); }
      // mover y chocar
      const vel = h * 0.26 * ritmo;
      const zonaY1 = h - 108, zonaY2 = h - 44, mitad = ANCHO_LONCHERA / 2 + 10;
      const vivos: Objeto[] = [];
      for (const o of j.objetos) {
        o.y += vel * dt;
        const dx = Math.abs(o.x * w - j.andiX * w);
        if (o.y > zonaY1 && o.y < zonaY2 && dx < mitad) {
          if (o.cae.tipo === 'hierro') {
            j.puntos += o.cae.puntos; sonido.atrapa(); j.animo = 'wow'; j.animoHasta = ahora + 500;
            j.flotantes.push({ k: j.k++, x: o.x, y: o.y, texto: `+${o.cae.puntos}`, bueno: true, hasta: ahora + 800 });
          } else {
            j.vidas -= 1; sonido.mal(); j.animo = 'piensa'; j.animoHasta = ahora + 700; j.golpe = ahora;
            j.flotantes.push({ k: j.k++, x: o.x, y: o.y, texto: '¡Uy!', bueno: false, hasta: ahora + 800 });
          }
          continue;
        }
        if (o.y < h + 40) vivos.push(o);
      }
      j.objetos = vivos;
      j.flotantes = j.flotantes.filter(f => f.hasta > ahora);
      if (ahora > j.animoHasta) j.animo = 'feliz';
      const seg = Math.ceil(restante);
      if (seg !== j.ultimoSeg) { j.ultimoSeg = seg; if (seg <= 5 && seg > 0) sonido.tic(); }
      j.restante = restante;
      setVista({ objetos: [...j.objetos], flotantes: [...j.flotantes], andiX: j.andiX, puntos: j.puntos, vidas: j.vidas, restante, animo: j.animo, golpe: j.golpe });
      if (restante <= 0 || j.vidas <= 0) { terminar(j.puntos); return; }
      raf.current = requestAnimationFrame(paso);
    };
    raf.current = requestAnimationFrame(paso);
    setTimeout(() => area.current?.focus(), 50);
  };

  useEffect(() => () => { juego.current.vivo = false; cancelAnimationFrame(raf.current); }, []);
  useEffect(() => { if (fase === 'inicio') hablar('Atrapa las comidas con hierro en la lonchera. ¿Empezamos?'); }, [fase]);

  const mover = (e: PE<HTMLDivElement>) => {
    const el = area.current; if (!el || !juego.current.vivo) return;
    const r = el.getBoundingClientRect();
    juego.current.andiX = Math.min(0.92, Math.max(0.08, (e.clientX - r.left) / r.width));
  };
  const tecla = (e: KE<HTMLDivElement>, abajo: boolean) => {
    if (e.key === 'ArrowLeft' || e.key === 'a') { juego.current.teclas.izq = abajo; e.preventDefault(); }
    if (e.key === 'ArrowRight' || e.key === 'd') { juego.current.teclas.der = abajo; e.preventDefault(); }
  };

  if (fase === 'fin' && fin) return (
    <Celebracion titulo={fin.puntos >= UMBRAL ? '¡Lonchera llena de hierro!' : '¡Buena atrapada!'} ganadas={fin.ganadas} detalle={`${fin.puntos} punto${fin.puntos === 1 ? '' : 's'}`}
      alSeguir={() => ir('/ninos')} alRepetir={() => { setFin(null); setFase('inicio'); }} />
  );

  if (fase === 'inicio') return (
    <div className="juego juego-inicio">
      <Andi tam={150} look={look} className="andi-flota" />
      <h1>Atrapa el hierro</h1>
      <p className="juego-pista"><span>🫘 🍲 🥬 🥣 🥚 🍗</span> sí &nbsp;·&nbsp; <span>🥤 🍬</span> no</p>
      <button className="boton-nino grande" onClick={empezar}>¡Jugar!</button>
    </div>
  );

  const golpeado = vista.golpe && performance.now() - vista.golpe < 400;
  return (
    <div className="juego juego-atrapa">
      <div className="juego-cabeza">
        <span className="ronda">⏱ {Math.ceil(vista.restante)}</span>
        <span className="ronda">🧺 {vista.puntos}</span>
        <span className="ronda vidas" aria-label={`${vista.vidas} vidas`}>{'❤️'.repeat(vista.vidas)}{'🤍'.repeat(VIDAS - vista.vidas)}</span>
      </div>
      <div ref={area} className={`atrapa-area ${golpeado ? 'golpe' : ''}`} onPointerMove={mover} onPointerDown={mover} tabIndex={0}
        onKeyDown={e => tecla(e, true)} onKeyUp={e => tecla(e, false)} aria-label="Zona de juego: mueve a Andi con el dedo o las flechas">
        {vista.objetos.map(o => (
          <span key={o.k} className={`cae ${o.cae.tipo}`} style={{ left: `${o.x * 100}%`, top: o.y }} aria-hidden="true">{o.cae.emoji}</span>
        ))}
        {vista.flotantes.map(f => (
          <motion.span key={f.k} className={`flotante ${f.bueno ? 'bueno' : 'malo'}`} style={{ left: `${f.x * 100}%`, top: f.y }}
            initial={{ opacity: 1, y: 0, scale: .8 }} animate={{ opacity: 0, y: -50, scale: 1.2 }} transition={{ duration: .7 }} aria-hidden="true">{f.texto}</motion.span>
        ))}
        <div className="atrapa-andi" style={{ left: `${vista.andiX * 100}%` }}>
          <Andi tam={92} look={look} animo={vista.animo} />
          <div className="atrapa-lonchera" style={{ width: ANCHO_LONCHERA }} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
