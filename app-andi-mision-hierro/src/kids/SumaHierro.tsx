import { useEffect, useMemo, useState } from 'react';
import Andi from '../components/Andi';
import Celebracion from './Celebracion';
import InicioJuego from './InicioJuego';
import { generarSuma, NOMBRE_TRAMO } from '../data/juegos-colegio';
import { hablar } from '../lib/voz';
import { ninoSesion, useLook } from './progreso';
import { useColegio } from './colegio';

/** Suma de hierro: contar, sumar, restar, multiplicar y dividir con alimentos como fichas. */
export default function SumaHierro() {
  const { look } = useLook(ninoSesion());
  const c = useColegio('sumas');
  const pregunta = useMemo(() => generarSuma(c.tramo, c.nivel, c.ronda), [c.tramo, c.nivel, c.ronda, c.semilla]); // eslint-disable-line react-hooks/exhaustive-deps
  const [marcada, setMarcada] = useState<number | null>(null);
  const [mal, setMal] = useState<number | null>(null);

  useEffect(() => { if (c.fase === 'inicio') hablar(`Suma de hierro, nivel ${c.nivel}. Ocho preguntas. ¿Empezamos?`); }, [c.fase, c.nivel]);
  useEffect(() => { if (c.fase === 'jugando') { setMarcada(null); setMal(null); hablar(pregunta.enunciado); } }, [pregunta, c.fase]);

  const responder = (n: number) => {
    if (marcada !== null) return;
    if (n === pregunta.respuesta) { setMarcada(n); hablar(`¡${n}! Muy bien.`); c.acierto(); }
    else { setMal(n); c.error(); hablar(pregunta.op === 'contar' ? 'Casi. Cuenta otra vez.' : 'Casi. Inténtalo otra vez.'); setTimeout(() => setMal(null), 500); }
  };

  if (c.fase === 'fin' && c.fin) return (
    <Celebracion titulo="¡Matemáticas de hierro!" ganadas={c.fin.ganadas} detalle={`${c.fin.aciertos} de ${c.RONDAS} a la primera`} nivel={c.nivel} siguiente={c.fin.siguiente}
      alSeguir={c.alMapa} alRepetir={c.repetir} alSiguiente={c.siguiente} />
  );
  if (c.fase === 'inicio') return (
    <InicioJuego juego="sumas" titulo="Suma de hierro" nivel={c.nivel} max={c.NIVELES} marca={m => `${m} de ${c.RONDAS} a la primera`} alJugar={c.empezar}
      pista={<><span className="pista-tramo">🫘 + 🫘 = ?</span><span className="pista-tramo">{NOMBRE_TRAMO[c.tramo]}</span></>} />
  );

  const { ficha, grupos } = pregunta;
  return (
    <div className="juego juego-colegio">
      <div className="juego-cabeza">
        <span className="ronda">Nivel {c.nivel}</span>
        <span className="ronda">Pregunta {c.ronda + 1} de {c.RONDAS}</span>
      </div>
      <div className="andi-habla" onClick={() => hablar(pregunta.enunciado)}>
        <Andi tam={76} look={look} animo={mal !== null ? 'piensa' : marcada !== null ? 'wow' : 'feliz'} />
        <p className="burbuja">{pregunta.enunciado}</p>
      </div>
      {!pregunta.titulo.startsWith('¿') && <div className="suma-titulo" aria-hidden="true">{pregunta.titulo}</div>}
      {grupos && (
        <div className="fichas" aria-hidden="true">
          {grupos.map((n, g) => (
            <div key={g} className={`fichas-grupo ${pregunta.op === '-' && g === 1 ? 'tachado' : ''}`}>
              {g > 0 && <span className="fichas-op">{pregunta.op === '-' ? '−' : '+'}</span>}
              <span className="fichas-set">{Array.from({ length: n }, (_, i) => <i key={i}>{ficha.emoji}</i>)}</span>
            </div>
          ))}
        </div>
      )}
      <div className="respuestas">
        {pregunta.opciones.map(o => (
          <button key={o} className={`respuesta ${marcada === o ? 'bien' : ''} ${mal === o ? 'mal sacude' : ''}`} onClick={() => responder(o)} aria-label={`Responder ${o}`}>{o}</button>
        ))}
      </div>
    </div>
  );
}
