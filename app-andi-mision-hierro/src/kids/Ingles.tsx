import { useEffect, useMemo, useState } from 'react';
import Andi from '../components/Andi';
import Celebracion from './Celebracion';
import InicioJuego from './InicioJuego';
import { generarElegir, generarEmparejar, generarEscribir, NOMBRE_TRAMO, type ParIngles, type RondaElegir, type RondaEmparejar, type RondaEscribir } from '../data/juegos-colegio';
import { hablar, hablarEn } from '../lib/voz';
import { ninoSesion, useLook } from './progreso';
import { useColegio } from './colegio';

type Ronda = RondaElegir | RondaEmparejar | RondaEscribir;

/** Inglés de lonchera: elegir la palabra (4–6), emparejar pares (7–9), escribirla con teclado de letras (10–11). */
export default function Ingles() {
  const { look } = useLook(ninoSesion());
  const c = useColegio('ingles');
  const ronda: Ronda = useMemo(() => {
    const r = c.tramo === 'a' ? generarElegir(c.nivel, c.usadas.current) : c.tramo === 'b' ? generarEmparejar(c.nivel) : generarEscribir(c.nivel, c.usadas.current);
    if (r.tipo !== 'emparejar') c.usadas.current = [...c.usadas.current, r.par.en];
    return r;
  }, [c.tramo, c.nivel, c.ronda, c.semilla]); // eslint-disable-line react-hooks/exhaustive-deps
  const [marcada, setMarcada] = useState<string | null>(null);
  const [mal, setMal] = useState<string | null>(null);
  const [izq, setIzq] = useState<string | null>(null);          // par elegido a la izquierda (emparejar)
  const [hechos, setHechos] = useState<string[]>([]);
  const [escrito, setEscrito] = useState<number[]>([]);          // teclas usadas, en orden (escribir)
  const [hecho, setHecho] = useState(false);

  useEffect(() => { if (c.fase === 'inicio') hablar(`Inglés de lonchera, nivel ${c.nivel}. Ocho rondas. ¿Listo?`); }, [c.fase, c.nivel]);
  useEffect(() => {
    if (c.fase !== 'jugando') return;
    setMarcada(null); setMal(null); setIzq(null); setHechos([]); setEscrito([]); setHecho(false);
    if (ronda.tipo === 'elegir') { hablar(`¿Cómo se dice ${ronda.par.es} en inglés?`); }
    else if (ronda.tipo === 'emparejar') hablar('Une cada palabra con su pareja en inglés.');
    else hablar(`Escribe ${ronda.par.es} en inglés.`);
  }, [ronda, c.fase]);

  const fallar = (id: string, mensaje: string) => { setMal(id); c.error(); hablar(mensaje); setTimeout(() => setMal(null), 500); };
  const celebrarPalabra = (par: ParIngles) => { hablarEn(par.en); setTimeout(() => hablarEn(par.en), 1100); };

  const elegir = (en: string) => {
    if (ronda.tipo !== 'elegir' || marcada !== null) return;
    if (en === ronda.par.en) { setMarcada(en); setHecho(true); celebrarPalabra(ronda.par); c.acierto(); }
    else fallar(en, 'Casi. Escucha otra vez.');
  };
  const tocarPar = (lado: 'izq' | 'der', par: ParIngles) => {
    if (ronda.tipo !== 'emparejar' || hechos.includes(par.en) || hecho) return;
    if (lado === 'izq') { setIzq(par.en); hablar(par.es); return; }
    if (!izq) { hablarEn(par.en); return; }
    if (izq === par.en) {
      const h = [...hechos, par.en]; setHechos(h); setIzq(null); hablarEn(par.en);
      if (h.length === ronda.pares.length) { setHecho(true); c.acierto(); }
    } else { fallar(par.en, 'Esa no es su pareja.'); setIzq(null); }
  };
  const teclear = (k: number) => {
    if (ronda.tipo !== 'escribir' || hecho || escrito.includes(k)) return;
    const e = [...escrito, k]; setEscrito(e);
    if (e.length === ronda.par.en.length) {
      const texto = e.map(i => ronda.teclas[i].letra).join('');
      if (texto === ronda.par.en) { setHecho(true); celebrarPalabra(ronda.par); c.acierto(); }
      else { fallar('escrito', 'Casi. Mira las letras otra vez.'); setTimeout(() => setEscrito([]), 500); }
    }
  };

  if (c.fase === 'fin' && c.fin) return (
    <Celebracion titulo="Great job! ¡Muy bien!" ganadas={c.fin.ganadas} detalle={`${c.fin.aciertos} de ${c.RONDAS} a la primera`} nivel={c.nivel} siguiente={c.fin.siguiente}
      alSeguir={c.alMapa} alRepetir={c.repetir} alSiguiente={c.siguiente} />
  );
  if (c.fase === 'inicio') return (
    <InicioJuego juego="ingles" titulo="Inglés de lonchera" nivel={c.nivel} max={c.NIVELES} marca={m => `${m} de ${c.RONDAS} a la primera`} alJugar={c.empezar}
      pista={<>🍎 apple &nbsp;·&nbsp; {c.tramo === 'a' ? 'Toca la palabra' : c.tramo === 'b' ? 'Une las parejas' : 'Escribe la palabra'} &nbsp;·&nbsp; {NOMBRE_TRAMO[c.tramo]}</>} />
  );

  const animo = mal !== null ? 'piensa' : hecho ? 'wow' : 'feliz';
  return (
    <div className="juego juego-colegio">
      <div className="juego-cabeza">
        <span className="ronda">Nivel {c.nivel}</span>
        <span className="ronda">Ronda {c.ronda + 1} de {c.RONDAS}</span>
      </div>

      {ronda.tipo === 'elegir' && (
        <>
          <div className="palabra-emoji" aria-hidden="true">{ronda.par.emoji}</div>
          <p className="palabra-es">{ronda.par.es}</p>
          <Andi tam={70} look={look} animo={animo} />
          <div className="respuestas texto">
            {ronda.opciones.map(o => <button key={o} className={`respuesta ${marcada === o ? 'bien' : ''} ${mal === o ? 'mal sacude' : ''}`} onClick={() => elegir(o)} lang="en">{o}</button>)}
          </div>
          <button className="enlace-nino" onClick={() => hablarEn(marcada ?? ronda.opciones.join('. '))}>🔊 Escuchar</button>
        </>
      )}

      {ronda.tipo === 'emparejar' && (
        <>
          <div className="andi-habla" onClick={() => hablar('Toca una palabra en español y luego su pareja en inglés.')}>
            <Andi tam={70} look={look} animo={animo} />
            <p className="burbuja">Toca una palabra y luego su pareja en inglés.</p>
          </div>
          <div className="parejas">
            <div className="parejas-col">
              {ronda.izquierda.map(p => (
                <button key={p.en} className={`respuesta pareja ${izq === p.en ? 'elegida' : ''} ${hechos.includes(p.en) ? 'bien' : ''}`} disabled={hechos.includes(p.en)} onClick={() => tocarPar('izq', p)} aria-pressed={izq === p.en}>
                  <span aria-hidden="true">{p.emoji}</span>{p.es}
                </button>
              ))}
            </div>
            <div className="parejas-col">
              {ronda.derecha.map(p => (
                <button key={p.en} className={`respuesta pareja ${hechos.includes(p.en) ? 'bien' : ''} ${mal === p.en ? 'mal sacude' : ''}`} disabled={hechos.includes(p.en)} onClick={() => tocarPar('der', p)} lang="en">{p.en}</button>
              ))}
            </div>
          </div>
        </>
      )}

      {ronda.tipo === 'escribir' && (
        <>
          <div className="palabra-emoji" aria-hidden="true">{ronda.par.emoji}</div>
          <p className="palabra-es">{ronda.par.es}{ronda.pista && <small> · empieza con «{ronda.pista}»</small>}</p>
          <div className={`letras ${mal === 'escrito' ? 'sacude' : ''}`} aria-label="Palabra escrita" lang="en">
            {ronda.par.en.split('').map((_, i) => { const k = escrito[i]; return <span key={i} className={`letra ${k !== undefined ? (hecho ? 'bien' : 'puesta') : 'hueco'}`}>{k !== undefined ? ronda.teclas[k].letra : ''}</span>; })}
          </div>
          <Andi tam={64} look={look} animo={animo} />
          <div className="teclado" role="group" aria-label="Teclado de letras">
            {ronda.teclas.map(t => <button key={t.k} className={`tecla ${escrito.includes(t.k) ? 'usada' : ''}`} disabled={escrito.includes(t.k) || hecho} onClick={() => teclear(t.k)} aria-label={`Letra ${t.letra}`}>{t.letra}</button>)}
            <button className="tecla borrar" disabled={!escrito.length || hecho} onClick={() => setEscrito(e => e.slice(0, -1))} aria-label="Borrar">⌫</button>
          </div>
          <button className="enlace-nino" onClick={() => hablarEn(ronda.par.en)}>🔊 Escuchar</button>
        </>
      )}
    </div>
  );
}
