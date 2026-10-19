import { useEffect, useMemo, useState } from 'react';
import Andi from '../components/Andi';
import Celebracion from './Celebracion';
import InicioJuego from './InicioJuego';
import { generarFrase, generarLetra, generarSilabas, NOMBRE_TRAMO, type RondaPalabra } from '../data/juegos-colegio';
import { hablar } from '../lib/voz';
import { ninoSesion, useLook } from './progreso';
import { useColegio } from './colegio';

/** Palabras de la lonchera: letra que falta (4–6), ordenar sílabas (7–9), completar frases y adivinanzas (10–11). */
export default function Palabras() {
  const { look } = useLook(ninoSesion());
  const c = useColegio('palabras');
  const ronda: RondaPalabra = useMemo(() => {
    const r = c.tramo === 'a' ? generarLetra(c.nivel, c.usadas.current) : c.tramo === 'b' ? generarSilabas(c.nivel, c.usadas.current) : generarFrase(c.nivel, c.ronda, c.usadas.current);
    c.usadas.current = [...c.usadas.current, r.palabra.palabra];
    return r;
  }, [c.tramo, c.nivel, c.ronda, c.semilla]); // eslint-disable-line react-hooks/exhaustive-deps
  const [marcada, setMarcada] = useState<string | null>(null);
  const [mal, setMal] = useState<string | null>(null);
  const [puestas, setPuestas] = useState<number[]>([]);     // sílabas elegidas (índices k)
  const [hecho, setHecho] = useState(false);

  useEffect(() => { if (c.fase === 'inicio') hablar(`Palabras de la lonchera, nivel ${c.nivel}. Ocho palabras. ¿Empezamos?`); }, [c.fase, c.nivel]);
  useEffect(() => {
    if (c.fase !== 'jugando') return;
    setMarcada(null); setMal(null); setPuestas([]); setHecho(false);
    if (ronda.tipo === 'letra') hablar(`${bonito(ronda.palabra.palabra)}. ¿Qué letra falta?`);
    else if (ronda.tipo === 'silabas') hablar(`Ordena las sílabas de ${bonito(ronda.palabra.palabra)}.`);
    else hablar(ronda.tipo === 'frase' ? ronda.texto.replace('___', 'blanco') : `Adivina: ${ronda.texto}`);
  }, [ronda, c.fase]);

  const fallar = (id: string, mensaje: string) => { setMal(id); c.error(); hablar(mensaje); setTimeout(() => setMal(null), 500); };
  const elegir = (opcion: string, respuesta: string) => {
    if (marcada !== null) return;
    if (opcion === respuesta) { setMarcada(opcion); setHecho(true); hablar(`¡${bonito(ronda.palabra.palabra)}! Muy bien.`); c.acierto(); }
    else fallar(opcion, 'Casi. Mira otra vez.');
  };
  const tocarSilaba = (k: number, texto: string) => {
    if (ronda.tipo !== 'silabas' || hecho || puestas.includes(k)) return;
    if (ronda.orden[puestas.length] !== texto) { fallar(String(k), 'Esa no va ahí.'); return; }
    const p = [...puestas, k]; setPuestas(p);
    if (p.length === ronda.orden.length) { setHecho(true); hablar(`¡${bonito(ronda.palabra.palabra)}! Muy bien.`); c.acierto(); }
  };

  if (c.fase === 'fin' && c.fin) return (
    <Celebracion titulo="¡Palabras de campeón!" ganadas={c.fin.ganadas} detalle={`${c.fin.aciertos} de ${c.RONDAS} a la primera`} nivel={c.nivel} siguiente={c.fin.siguiente}
      alSeguir={c.alMapa} alRepetir={c.repetir} alSiguiente={c.siguiente} />
  );
  if (c.fase === 'inicio') return (
    <InicioJuego juego="palabras" titulo="Palabras de la lonchera" nivel={c.nivel} max={c.NIVELES} marca={m => `${m} de ${c.RONDAS} a la primera`} alJugar={c.empezar}
      pista={<>🔤 {c.tramo === 'a' ? 'La letra que falta' : c.tramo === 'b' ? 'Ordena las sílabas' : 'Completa y adivina'} &nbsp;·&nbsp; {NOMBRE_TRAMO[c.tramo]}</>} />
  );

  const animo = mal !== null ? 'piensa' : hecho ? 'wow' : 'feliz';
  return (
    <div className="juego juego-colegio">
      <div className="juego-cabeza">
        <span className="ronda">Nivel {c.nivel}</span>
        <span className="ronda">Palabra {c.ronda + 1} de {c.RONDAS}</span>
      </div>

      {ronda.tipo === 'letra' && (
        <>
          <div className="andi-habla" onClick={() => hablar(`${bonito(ronda.palabra.palabra)}. ¿Qué letra falta?`)}>
            <Andi tam={70} look={look} animo={animo} />
            <p className="burbuja">¿Qué letra falta?</p>
          </div>
          <div className="palabra-emoji" aria-hidden="true">{ronda.palabra.emoji}</div>
          <div className="letras" aria-label={`Palabra ${ronda.mostrada.replace('_', 'con una letra que falta')}`}>
            {ronda.mostrada.split('').map((l, i) => <span key={i} className={`letra ${i === ronda.indice ? (marcada ? 'bien' : 'hueco') : ''}`}>{i === ronda.indice ? (marcada ?? '') : l}</span>)}
          </div>
          <div className="respuestas">
            {ronda.opciones.map(o => <button key={o} className={`respuesta ${marcada === o ? 'bien' : ''} ${mal === o ? 'mal sacude' : ''}`} onClick={() => elegir(o, ronda.respuesta)} aria-label={`Letra ${o}`}>{o}</button>)}
          </div>
        </>
      )}

      {ronda.tipo === 'silabas' && (
        <>
          <div className="andi-habla" onClick={() => hablar(`Ordena las sílabas de ${bonito(ronda.palabra.palabra)}.`)}>
            <Andi tam={70} look={look} animo={animo} />
            <p className="burbuja">Ordena las sílabas.</p>
          </div>
          <div className="palabra-emoji" aria-hidden="true">{ronda.palabra.emoji}</div>
          <div className="letras" aria-label="Sílabas puestas">
            {ronda.orden.map((_, i) => { const k = puestas[i]; const f = ronda.fichas.find(x => x.k === k); return <span key={i} className={`letra silaba ${f ? 'bien' : 'hueco'}`}>{f?.texto ?? ''}</span>; })}
          </div>
          <div className="silabas">
            {ronda.fichas.map(f => (
              <button key={f.k} className={`respuesta silaba-boton ${puestas.includes(f.k) ? 'puesta' : ''} ${mal === String(f.k) ? 'mal sacude' : ''}`} disabled={puestas.includes(f.k) || hecho} onClick={() => tocarSilaba(f.k, f.texto)} aria-label={`Sílaba ${f.texto}`}>{f.texto}</button>
            ))}
          </div>
          {puestas.length > 0 && !hecho && <button className="enlace-nino" onClick={() => setPuestas(p => p.slice(0, -1))}>Borrar la última</button>}
        </>
      )}

      {(ronda.tipo === 'frase' || ronda.tipo === 'adivinanza') && (
        <>
          <div className="andi-habla" onClick={() => hablar(ronda.texto)}>
            <Andi tam={76} look={look} animo={animo} />
            <p className="burbuja">{ronda.tipo === 'adivinanza' ? `Adivina: ${ronda.texto}` : ronda.texto.replace('___', marcada ? marcada.toLowerCase() : '_____')}</p>
          </div>
          <div className="palabra-emoji chica" aria-hidden="true">{marcada ? ronda.palabra.emoji : '❓'}</div>
          <div className="respuestas texto">
            {ronda.opciones.map(o => <button key={o} className={`respuesta ${marcada === o ? 'bien' : ''} ${mal === o ? 'mal sacude' : ''}`} onClick={() => elegir(o, ronda.respuesta)}>{o}</button>)}
          </div>
        </>
      )}
    </div>
  );
}

const bonito = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();
