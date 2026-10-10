import { useMemo, useRef, useState, type CSSProperties } from 'react';
import Andi from '../components/Andi';
import Icono from '../components/Icono';

/** Candado para adultos: mantener presionado 2 segundos y resolver una suma. */
export default function Puerta({ titulo, alPasar, alCancelar }: { titulo: string; alPasar: () => void; alCancelar?: () => void }) {
  const [fase, setFase] = useState<'mantener' | 'suma'>('mantener');
  const [progreso, setProgreso] = useState(0);
  const [error, setError] = useState(false);
  const timer = useRef<number | null>(null);
  const suma = useMemo(() => {
    const a = 3 + Math.floor(Math.random() * 7), b = 3 + Math.floor(Math.random() * 7), r = a + b;
    const ops = [...new Set([r, r + 1 + Math.floor(Math.random() * 3), r - 1 - Math.floor(Math.random() * 3)])].sort(() => Math.random() - 0.5);
    return { a, b, r, ops };
  }, []);

  const empezar = () => {
    const t0 = Date.now();
    timer.current = window.setInterval(() => {
      const p = Math.min(1, (Date.now() - t0) / 2000); setProgreso(p);
      if (p >= 1) { soltar(); setFase('suma'); }
    }, 30);
  };
  const soltar = () => { if (timer.current) clearInterval(timer.current); timer.current = null; setProgreso(p => (p >= 1 ? p : 0)); };

  return (
    <div className="puerta">
      <div className="puerta-caja">
        <Andi tam={110} animo="piensa" />
        <h1>{titulo}</h1>
        {fase === 'mantener' ? (
          <>
            <p>Papá o mamá: mantén presionado el botón.</p>
            <button className="puerta-boton" onPointerDown={empezar} onPointerUp={soltar} onPointerLeave={soltar} onContextMenu={e => e.preventDefault()}
              style={{ '--p': progreso } as CSSProperties} aria-label="Mantener presionado 2 segundos">
              <Icono n="candado" tam={30} />
            </button>
          </>
        ) : (
          <>
            <p>¿Cuánto es {suma.a} + {suma.b}?</p>
            <div className="puerta-ops">{suma.ops.map(o => <button key={o} onClick={() => (o === suma.r ? alPasar() : (setError(true), setFase('mantener'), setProgreso(0)))}>{o}</button>)}</div>
          </>
        )}
        {error && fase === 'mantener' && <p className="puerta-error">Esa no era. Intenta otra vez.</p>}
        {alCancelar && <button className="enlace" onClick={alCancelar}>Volver</button>}
      </div>
    </div>
  );
}
