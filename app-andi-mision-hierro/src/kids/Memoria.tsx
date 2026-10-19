import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Andi from '../components/Andi';
import Celebracion from './Celebracion';
import InicioJuego from './InicioJuego';
import { CARTAS, NIVELES_MAX } from '../data/ninos';
import { hablar, sonido } from '../lib/voz';
import { nivelDe, ninoSesion, superarNivel, useLook } from './progreso';

interface Ficha { k: number; id: string; emoji: string; nombre: string; dato: string }
const mezclar = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5);
const MAX = NIVELES_MAX.memoria;
/** Parejas por nivel (1–5). */
export const PAREJAS_NIVEL = [4, 6, 8, 10, 12];
const parejasDe = (nivel: number) => PAREJAS_NIVEL[Math.min(PAREJAS_NIVEL.length, Math.max(1, nivel)) - 1];

function repartir(pares: number): Ficha[] {
  const elegidas = mezclar(CARTAS).slice(0, pares);
  return mezclar([...elegidas, ...elegidas]).map((c, k) => ({ ...c, k }));
}

export default function Memoria() {
  const ir = useNavigate();
  const { look } = useLook(ninoSesion());
  const [nivel, setNivel] = useState(() => nivelDe('memoria'));
  const pares = parejasDe(nivel);
  const [fase, setFase] = useState<'inicio' | 'jugando'>('inicio');
  const [fichas, setFichas] = useState<Ficha[]>([]);
  const [abiertas, setAbiertas] = useState<number[]>([]);
  const [hechas, setHechas] = useState<string[]>([]);
  const [intentos, setIntentos] = useState(0);
  const [dato, setDato] = useState('Encuentra las parejas de comidas.');
  const [fin, setFin] = useState<{ ganadas: number; intentos: number; siguiente?: number } | null>(null);

  const empezar = () => {
    setFichas(repartir(pares)); setHechas([]); setAbiertas([]); setIntentos(0); setDato('Encuentra las parejas de comidas.'); setFase('jugando');
    hablar(`¡Memoria! Nivel ${nivel}: ${pares} parejas.`);
  };
  useEffect(() => { if (fase === 'inicio') hablar(`Memoria, nivel ${nivel}. Encuentra ${parejasDe(nivel)} parejas.`); }, [fase, nivel]);

  const tocar = (f: Ficha) => {
    if (abiertas.length === 2 || abiertas.includes(f.k) || hechas.includes(f.id)) return;
    sonido.toque();
    const ab = [...abiertas, f.k]; setAbiertas(ab);
    if (ab.length === 2) {
      const n = intentos + 1; setIntentos(n);
      const [a, b] = ab.map(k => fichas.find(x => x.k === k)!);
      if (a.id === b.id) {
        setTimeout(() => {
          const h = [...hechas, a.id]; setHechas(h); setAbiertas([]); sonido.bien(); setDato(a.dato); hablar(a.dato);
          if (h.length === pares) setTimeout(() => {
            const r = superarNivel('memoria', nivel, { max: MAX, marca: n, mejorEs: 'menor' });
            setFin({ ganadas: r.ganadas, intentos: n, siguiente: nivel < MAX ? nivel + 1 : undefined });
          }, 900);
        }, 350);
      } else setTimeout(() => setAbiertas([]), 900);
    }
  };

  if (fin) return <Celebracion titulo="¡Qué buena memoria!" ganadas={fin.ganadas} detalle={`${pares} parejas en ${fin.intentos} intentos`} nivel={nivel} siguiente={fin.siguiente}
    alSeguir={() => ir('/ninos')} alRepetir={() => { setFin(null); setFase('inicio'); }}
    alSiguiente={() => { setFin(null); setNivel(n => Math.min(MAX, n + 1)); setFase('inicio'); }} />;

  if (fase === 'inicio') return (
    <InicioJuego juego="memoria" titulo="Memoria" nivel={nivel} max={MAX} marca={m => `${m} intentos`} alJugar={empezar}
      pista={<span className="pista-tramo">🃏 {pares} parejas</span>} />
  );

  return (
    <div className="juego juego-memoria">
      <div className="andi-habla" onClick={() => hablar(dato)}><Andi tam={80} look={look} animo={hechas.length ? 'wow' : 'feliz'} /><p className="burbuja">{dato}</p></div>
      <div className={`tablero ${pares >= 10 ? 'tablero-grande' : ''}`}>
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
      <p className="juego-pie">Nivel {nivel} · {hechas.length} de {pares} parejas · {intentos} intentos</p>
    </div>
  );
}
