// Mecánica común de los juegos de colegio: 8 rondas por nivel, 20 niveles, errores que solo repiten.
import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Juego } from '../data/ninos';
import { NIVELES, RONDAS, tramoDe } from '../data/juegos-colegio';
import { sonido } from '../lib/voz';
import { edadSesion, nivelDe, superarNivel } from './progreso';

export interface Fin { ganadas: number; aciertos: number; siguiente?: number }

export function useColegio(juego: Juego) {
  const ir = useNavigate();
  const tramo = tramoDe(edadSesion());
  const [nivel, setNivel] = useState(() => nivelDe(juego));
  const [fase, setFase] = useState<'inicio' | 'jugando' | 'fin'>('inicio');
  const [ronda, setRonda] = useState(0);
  const [semilla, setSemilla] = useState(0);        // cambia en cada partida para regenerar las rondas
  const [fallo, setFallo] = useState(false);        // hubo error en la ronda actual
  const [fin, setFin] = useState<Fin | null>(null);
  const aciertos = useRef(0);
  const usadas = useRef<string[]>([]);              // palabras ya vistas en este nivel (para no repetir)

  const empezar = useCallback(() => {
    aciertos.current = 0; usadas.current = []; setRonda(0); setFallo(false); setSemilla(s => s + 1); setFase('jugando'); sonido.bien();
  }, []);

  /** Llamar cuando la ronda se resolvió bien. Avanza o termina el nivel. */
  const acierto = useCallback(() => {
    if (!fallo) aciertos.current += 1;
    sonido.bien();
    window.setTimeout(() => {
      if (ronda + 1 >= RONDAS) {
        const r = superarNivel(juego, nivel, { max: NIVELES, marca: aciertos.current });
        setFin({ ganadas: r.ganadas, aciertos: aciertos.current, siguiente: nivel < NIVELES ? nivel + 1 : undefined });
        setFase('fin');
      } else { setRonda(x => x + 1); setFallo(false); }
    }, 750);
  }, [fallo, juego, nivel, ronda]);

  /** Llamar cuando hubo error: no quita vidas, solo marca la ronda. */
  const error = useCallback(() => { setFallo(true); sonido.mal(); }, []);

  const alMapa = useCallback(() => ir('/ninos'), [ir]);
  const repetir = useCallback(() => { setFin(null); setFase('inicio'); }, []);
  const siguiente = useCallback(() => { setFin(null); setNivel(n => Math.min(NIVELES, n + 1)); setFase('inicio'); }, []);

  return { tramo, nivel, fase, ronda, semilla, fallo, fin, usadas, empezar, acierto, error, alMapa, repetir, siguiente, RONDAS, NIVELES };
}
