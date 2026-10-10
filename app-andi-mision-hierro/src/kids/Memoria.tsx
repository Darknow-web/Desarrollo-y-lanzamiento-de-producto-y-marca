import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Andi from '../components/Andi';
import Celebracion from './Celebracion';
import { CARTAS } from '../data/ninos';
import { hablar, sonido } from '../lib/voz';
import { obtener } from '../lib/estado';
import { completarJuego, ninoSesion } from './progreso';

interface Ficha { k: number; id: string; emoji: string; nombre: string; dato: string }
const mezclar = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5);

function repartir(pares: number): Ficha[] {
  const elegidas = mezclar(CARTAS).slice(0, pares);
  return mezclar([...elegidas, ...elegidas]).map((c, k) => ({ ...c, k }));
}

export default function Memoria() {
  const ir = useNavigate();
  const edad = obtener().ninos.find(n => n.id === ninoSesion())?.edad ?? 6;
  const pares = edad <= 5 ? 4 : edad <= 8 ? 6 : 8;
  const [fichas, setFichas] = useState(() => repartir(pares));
  const [abiertas, setAbiertas] = useState<number[]>([]);
  const [hechas, setHechas] = useState<string[]>([]);
  const [dato, setDato] = useState('Encuentra las parejas de comidas.');
  const [fin, setFin] = useState<ReturnType<typeof completarJuego> | null>(null);
  useEffect(() => { hablar('¡Memoria andina! Encuentra las parejas.'); }, []);

  const tocar = (f: Ficha) => {
    if (abiertas.length === 2 || abiertas.includes(f.k) || hechas.includes(f.id)) return;
    sonido.toque();
    const ab = [...abiertas, f.k]; setAbiertas(ab);
    if (ab.length === 2) {
      const [a, b] = ab.map(k => fichas.find(x => x.k === k)!);
      if (a.id === b.id) {
        setTimeout(() => {
          const h = [...hechas, a.id]; setHechas(h); setAbiertas([]); sonido.bien(); setDato(a.dato); hablar(a.dato);
          if (h.length === pares) setTimeout(() => setFin(completarJuego('memoria')), 900);
        }, 350);
      } else setTimeout(() => setAbiertas([]), 900);
    }
  };
  if (fin) return <Celebracion titulo="¡Qué buena memoria!" estrella={fin.estrella} piezaNueva={fin.piezaNueva} alSeguir={() => ir('/ninos')}
    alRepetir={() => { setFin(null); setFichas(repartir(pares)); setHechas([]); setAbiertas([]); }} />;

  return (
    <div className="juego juego-memoria">
      <div className="andi-habla" onClick={() => hablar(dato)}><Andi tam={80} animo={hechas.length ? 'wow' : 'feliz'} /><p className="burbuja">{dato}</p></div>
      <div className={`tablero cols-${pares <= 4 ? 4 : pares <= 6 ? 4 : 4}`}>
        {fichas.map(f => {
          const visible = abiertas.includes(f.k) || hechas.includes(f.id);
          return (
            <button key={f.k} className={`carta ${visible ? 'volteada' : ''} ${hechas.includes(f.id) ? 'hecha' : ''}`} onClick={() => tocar(f)} aria-label={visible ? f.nombre : 'Carta tapada'}>
              <span className="carta-dorso" aria-hidden="true">?</span>
              <span className="carta-cara"><b aria-hidden="true">{f.emoji}</b>{f.nombre}</span>
            </button>
          );
        })}
      </div>
      <p className="juego-pie">{hechas.length} de {pares} parejas</p>
    </div>
  );
}
