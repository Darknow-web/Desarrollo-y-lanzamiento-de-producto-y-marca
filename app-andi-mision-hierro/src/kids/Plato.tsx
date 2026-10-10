import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Andi from '../components/Andi';
import Icono from '../components/Icono';
import Celebracion from './Celebracion';
import { COMIDAS_PLATO, type Comida } from '../data/ninos';
import { hablar, sonido } from '../lib/voz';
import { obtener } from '../lib/estado';
import { completarJuego, ninoSesion } from './progreso';

const RONDAS = 5;
const mezclar = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5);

function nuevaRonda(chico: boolean): Comida[] {
  const de = (t: Comida['tipo']) => mezclar(COMIDAS_PLATO.filter(c => c.tipo === t));
  return mezclar(chico ? [...de('hierro').slice(0, 1), ...de('vitc').slice(0, 1), ...de('dulce').slice(0, 2)]
    : [...de('hierro').slice(0, 2), ...de('vitc').slice(0, 2), ...de('dulce').slice(0, 2)]);
}

export default function Plato() {
  const ir = useNavigate();
  const chico = (obtener().ninos.find(n => n.id === ninoSesion())?.edad ?? 6) <= 5;
  const [ronda, setRonda] = useState(1);
  const [opciones, setOpciones] = useState(() => nuevaRonda(chico));
  const [plato, setPlato] = useState<Comida[]>([]);
  const [animo, setAnimo] = useState<'feliz' | 'wow' | 'piensa'>('feliz');
  const [mensaje, setMensaje] = useState('Elige una comida con hierro y una con vitamina C.');
  const [sacude, setSacude] = useState<string | null>(null);
  const [fin, setFin] = useState<ReturnType<typeof completarJuego> | null>(null);
  const listo = plato.some(c => c.tipo === 'hierro') && plato.some(c => c.tipo === 'vitc');

  const decir = useCallback((t: string) => { setMensaje(t); hablar(t); }, []);
  useEffect(() => { decir('¡Arma un plato fuerte! Elige una comida con hierro y una con vitamina C.'); }, [decir]);

  const elegir = (c: Comida) => {
    if (listo) return;
    if (c.tipo === 'dulce') { sonido.suave(); setSacude(c.id); setAnimo('piensa'); decir(`${c.nombre}: eso no da fuerza. ¡Prueba otra comida!`); setTimeout(() => setSacude(null), 500); return; }
    sonido.toque();
    const nuevo = [...plato.filter(x => x.tipo !== c.tipo), c];
    setPlato(nuevo);
    if (nuevo.some(x => x.tipo === 'hierro') && nuevo.some(x => x.tipo === 'vitc')) {
      setAnimo('wow'); sonido.bien();
      const h = nuevo.find(x => x.tipo === 'hierro')!, v = nuevo.find(x => x.tipo === 'vitc')!;
      decir(`¡Plato fuerte! ${h.nombre} con ${v.nombre.toLowerCase()}: la vitamina C ayuda al hierro.`);
    } else { setAnimo('feliz'); decir(c.tipo === 'hierro' ? `¡${c.nombre} tiene hierro! Ahora una con vitamina C.` : `¡${c.nombre} tiene vitamina C! Ahora una con hierro.`); }
  };
  const siguiente = () => {
    if (ronda >= RONDAS) { setFin(completarJuego('plato')); return; }
    setRonda(ronda + 1); setPlato([]); setOpciones(nuevaRonda(chico)); setAnimo('feliz');
    decir('¡Otro plato! Hierro y vitamina C.');
  };
  const reiniciar = () => { setFin(null); setRonda(1); setPlato([]); setOpciones(nuevaRonda(chico)); };

  if (fin) return <Celebracion titulo="¡Eres chef de platos fuertes!" estrella={fin.estrella} piezaNueva={fin.piezaNueva} alSeguir={() => ir('/ninos')} alRepetir={reiniciar} />;

  return (
    <div className="juego juego-plato">
      <div className="juego-cabeza"><span className="ronda">Plato {ronda} de {RONDAS}</span></div>
      <div className="andi-habla" onClick={() => hablar(mensaje)}>
        <Andi tam={92} animo={animo} />
        <p className="burbuja">{mensaje} <Icono n="parlante" tam={16} /></p>
      </div>
      <div className={`plato ${listo ? 'fuerte' : ''}`} aria-label="Tu plato">
        {plato.length === 0 && <span className="plato-vacio">Tu plato</span>}
        {plato.map(c => <button key={c.id} className="en-plato" onClick={() => setPlato(plato.filter(x => x.id !== c.id))} aria-label={`Quitar ${c.nombre}`}>{c.emoji}</button>)}
        <div className="plato-etiquetas"><span className={plato.some(c => c.tipo === 'hierro') ? 'ok' : ''}>Hierro</span><span className={plato.some(c => c.tipo === 'vitc') ? 'ok' : ''}>Vitamina C</span></div>
      </div>
      {listo ? <button className="boton-nino grande" onClick={siguiente}>{ronda >= RONDAS ? '¡Terminar!' : 'Siguiente plato'}</button> : (
        <div className="comidas">
          {opciones.map(c => (
            <button key={c.id} className={`comida ${plato.some(x => x.id === c.id) ? 'elegida' : ''} ${sacude === c.id ? 'sacude' : ''}`} onClick={() => elegir(c)}>
              <span aria-hidden="true">{c.emoji}</span>{c.nombre}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
