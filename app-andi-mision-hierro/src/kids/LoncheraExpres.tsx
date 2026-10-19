import { useEffect, useRef, useState, type PointerEvent as PE } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Andi, { type Animo } from '../components/Andi';
import Celebracion from './Celebracion';
import InicioJuego from './InicioJuego';
import { NIVELES_MAX, OPCIONES_LONCHERA, type Opcion } from '../data/ninos';
import { hablar, sonido } from '../lib/voz';
import { nivelDe, ninoSesion, registrarIntento, superarNivel, useLook } from './progreso';

const RONDAS = 3;
const MAX = NIVELES_MAX.lonchera;
const TIPOS: Opcion['tipo'][] = ['principal', 'fruta', 'bebida'];
const ETIQUETA: Record<Opcion['tipo'], { nombre: string; emoji: string }> = {
  principal: { nombre: 'Con hierro', emoji: '🍱' }, fruta: { nombre: 'Fruta', emoji: '🍊' }, bebida: { nombre: 'Sin azúcar', emoji: '💧' },
};
const mezclar = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5);

/** Parámetros por nivel (1–10): menos segundos por lonchera y, desde el 5, dos trampas por tipo. */
export function nivelLonchera(n: number) {
  const base = Math.max(7, 20 - (n - 1) * 1.4);
  return {
    trampas: n >= 5 ? 2 : 1,
    tiempos: [base, Math.max(6, base - 2), Math.max(5, base - 4)].map(t => Math.round(t)),   // cada ronda baja un poco
  };
}

/** Por cada tipo, una buena y `trampas` malas. */
function opcionesDeRonda(trampas: number): Opcion[] {
  return mezclar(TIPOS.flatMap(t => [
    ...mezclar(OPCIONES_LONCHERA.filter(o => o.tipo === t && o.bien)).slice(0, 1),
    ...mezclar(OPCIONES_LONCHERA.filter(o => o.tipo === t && !o.bien)).slice(0, trampas),
  ]));
}

interface Arrastre { id: string; x0: number; y0: number; dx: number; dy: number }

/** Lonchera exprés: suena el timbre y hay pocos segundos para arrastrar 3 cosas correctas a la lonchera. */
export default function LoncheraExpres() {
  const ir = useNavigate();
  const { look } = useLook(ninoSesion());
  const [nivel, setNivel] = useState(() => nivelDe('lonchera'));
  const cfg = nivelLonchera(nivel);
  const [fase, setFase] = useState<'inicio' | 'ronda' | 'pausa' | 'fin'>('inicio');
  const [ronda, setRonda] = useState(0);
  const [opciones, setOpciones] = useState<Opcion[]>([]);
  const [puestos, setPuestos] = useState<Partial<Record<Opcion['tipo'], Opcion>>>({});
  const [restante, setRestante] = useState(cfg.tiempos[0]);
  const [ganadas, setGanadas] = useState(0);
  const [sobra, setSobra] = useState(0);        // segundos que sobraron en total (mejor marca)
  const [animo, setAnimo] = useState<Animo>('feliz');
  const [sacude, setSacude] = useState<string | null>(null);
  const [arrastre, setArrastre] = useState<Arrastre | null>(null);
  const [fin, setFin] = useState<{ ganadas: number; superado: boolean; siguiente?: number } | null>(null);
  const lonchera = useRef<HTMLDivElement>(null);
  const listo = TIPOS.every(t => puestos[t]);

  useEffect(() => { if (fase === 'inicio') hablar(`Lonchera exprés, nivel ${nivel}. Cuando suene el timbre, pon en la lonchera algo con hierro, una fruta y una bebida sin azúcar.`); }, [fase, nivel]);

  const empezarRonda = (r: number) => {
    setRonda(r); setOpciones(opcionesDeRonda(cfg.trampas)); setPuestos({}); setRestante(cfg.tiempos[r]); setAnimo('feliz'); setFase('ronda');
    sonido.timbre(); hablar(r === 0 ? '¡Sonó el timbre! Rápido, arma la lonchera.' : '¡Otra vez el timbre! Más rápido.');
  };

  // Cuenta regresiva de la ronda
  useEffect(() => {
    if (fase !== 'ronda') return;
    const t0 = performance.now(); const total = cfg.tiempos[ronda];
    let ultimo = total;
    const t = setInterval(() => {
      const q = Math.max(0, total - (performance.now() - t0) / 1000);
      setRestante(q);
      const seg = Math.ceil(q);
      if (seg !== ultimo) { ultimo = seg; if (seg <= 3 && seg > 0) sonido.tic(); }
      if (q <= 0) { clearInterval(t); sonido.mal(); setAnimo('piensa'); hablar('¡Se acabó el tiempo!'); setFase('pausa'); }
    }, 100);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase, ronda]);

  // Ronda ganada
  useEffect(() => {
    if (fase !== 'ronda' || !listo) return;
    setFase('pausa'); setAnimo('wow'); sonido.bien(); hablar('¡Lonchera lista!');
    setGanadas(g => g + 1); setSobra(s => s + Math.round(restante));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase, listo]);

  // Pasar a la siguiente ronda o terminar
  useEffect(() => {
    if (fase !== 'pausa') return;
    const t = setTimeout(() => {
      if (ronda + 1 < RONDAS) empezarRonda(ronda + 1);
      else {
        const superado = ganadas === RONDAS;
        if (superado) { const r = superarNivel('lonchera', nivel, { max: MAX, marca: sobra }); setFin({ ganadas: r.ganadas, superado, siguiente: nivel < MAX ? nivel + 1 : undefined }); }
        else { registrarIntento('lonchera'); setFin({ ganadas: 0, superado }); }
        setFase('fin');
      }
    }, 1300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fase]);

  const soltar = (o: Opcion) => {
    if (fase !== 'ronda') return;
    if (!o.bien) {
      sonido.mal(); setAnimo('piensa'); setSacude(o.id); setTimeout(() => setSacude(null), 450);
      hablar(o.tipo === 'bebida' ? 'Eso tiene mucha azúcar.' : o.tipo === 'fruta' ? 'Eso no es fruta.' : 'Eso no tiene hierro.');
      return;
    }
    if (puestos[o.tipo]) { sonido.toque(); return; }
    sonido.atrapa(); setAnimo('feliz');
    setPuestos(p => ({ ...p, [o.tipo]: o }));
  };

  const bajar = (e: PE<HTMLButtonElement>, o: Opcion) => {
    if (fase !== 'ronda') return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setArrastre({ id: o.id, x0: e.clientX, y0: e.clientY, dx: 0, dy: 0 });
  };
  const moverse = (e: PE<HTMLButtonElement>) => {
    if (!arrastre) return;
    setArrastre({ ...arrastre, dx: e.clientX - arrastre.x0, dy: e.clientY - arrastre.y0 });
  };
  const subir = (e: PE<HTMLButtonElement>, o: Opcion) => {
    if (!arrastre) return;
    const r = lonchera.current?.getBoundingClientRect();
    const dentro = !!r && e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    const toque = Math.hypot(arrastre.dx, arrastre.dy) < 8;
    setArrastre(null);
    if (dentro || toque) soltar(o);
  };

  const reiniciar = () => { setFin(null); setGanadas(0); setSobra(0); setFase('inicio'); };

  if (fase === 'fin' && fin) return (
    <Celebracion titulo={fin.superado ? '¡Loncheras perfectas!' : '¡Bien jugado!'} ganadas={fin.ganadas} detalle={`${ganadas} de ${RONDAS} loncheras a tiempo`}
      nivel={nivel} superado={fin.superado} siguiente={fin.siguiente}
      alSeguir={() => ir('/ninos')} alRepetir={reiniciar} alSiguiente={() => { reiniciar(); setNivel(n => Math.min(MAX, n + 1)); }} />
  );

  if (fase === 'inicio') return (
    <InicioJuego juego="lonchera" titulo="Lonchera exprés" nivel={nivel} max={MAX} marca={m => `${m} s de sobra`} alJugar={() => { setGanadas(0); setSobra(0); empezarRonda(0); }}
      pista={<><span className="pista-tramo">🍱 hierro</span> &nbsp;·&nbsp; <span className="pista-tramo">🍊 fruta</span> &nbsp;·&nbsp; <span className="pista-tramo">💧 sin azúcar</span> &nbsp;·&nbsp; <span className="pista-tramo">⏱ {cfg.tiempos[0]} s</span></>} />
  );

  const pct = Math.max(0, restante / cfg.tiempos[ronda]);
  return (
    <div className="juego juego-lonchera">
      <div className="juego-cabeza">
        <span className="ronda">Nivel {nivel}</span>
        <span className="ronda">Lonchera {ronda + 1} de {RONDAS}</span>
        <span className={`ronda ${restante <= 3 ? 'urgente' : ''}`}>⏱ {Math.ceil(restante)}</span>
      </div>
      <div className="tiempo-barra" aria-hidden="true"><i style={{ width: `${pct * 100}%` }} className={pct < .25 ? 'poco' : ''} /></div>
      <div className="lonchera-escena">
        <Andi tam={84} look={look} animo={animo} />
        <div ref={lonchera} className={`lonchera-caja ${arrastre ? 'abierta' : ''} ${listo ? 'lista' : ''}`} aria-label="Lonchera">
          {TIPOS.map(t => (
            <div key={t} className={`lonchera-sitio ${puestos[t] ? 'lleno' : ''}`}>
              <AnimatePresence>
                {puestos[t] ? (
                  <motion.span key={puestos[t].id} initial={{ scale: .4 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 16 }} aria-label={puestos[t].nombre}>{puestos[t].emoji}</motion.span>
                ) : <span className="lonchera-pista" aria-hidden="true">{ETIQUETA[t].emoji}</span>}
              </AnimatePresence>
              <small>{ETIQUETA[t].nombre}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="opciones">
        {opciones.map(o => {
          const puesto = Object.values(puestos).some(p => p?.id === o.id);
          const arr = arrastre?.id === o.id ? arrastre : null;
          return (
            <button key={o.id} className={`opcion ${puesto ? 'puesta' : ''} ${arr ? 'arrastrando' : ''} ${sacude === o.id ? 'sacude' : ''}`} disabled={puesto}
              style={arr ? { transform: `translate(${arr.dx}px, ${arr.dy}px) scale(1.12)` } : undefined}
              onPointerDown={e => bajar(e, o)} onPointerMove={moverse} onPointerUp={e => subir(e, o)} onPointerCancel={() => setArrastre(null)}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); soltar(o); } }} aria-label={`${o.nombre}: poner en la lonchera`}>
              <span aria-hidden="true">{o.emoji}</span>{o.nombre}
            </button>
          );
        })}
      </div>
    </div>
  );
}
