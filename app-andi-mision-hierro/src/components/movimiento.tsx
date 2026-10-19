// Movimiento sobrio con la librería motion: entradas en cascada y contador animado.
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { animate, motion, useReducedMotion, type Variants } from 'motion/react';

const SUAVE = [0.22, 0.8, 0.24, 1] as const;
const contenedor: Variants = { oculto: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } } };
const elemento: Variants = { oculto: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: SUAVE } } };

/** Contenedor de pantalla: sus <Item> aparecen uno tras otro. */
export function Cascada({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={contenedor} initial="oculto" animate="visible">{children}</motion.div>;
}
export function Item({ children, className = '', as = 'div' }: { children: ReactNode; className?: string; as?: 'div' | 'section' }) {
  const C = as === 'section' ? motion.section : motion.div;
  return <C className={className} variants={elemento}>{children}</C>;
}

/** Cifra que sube desde 0 hasta el valor (por ejemplo, el hierro del lote). */
export function Contador({ valor, decimales = 1, duracion = 1.1, className = '' }: { valor: number; decimales?: number; duracion?: number; className?: string }) {
  const reducir = useReducedMotion();
  const [v, setV] = useState(reducir ? valor : 0);
  const previo = useRef(0);
  useEffect(() => {
    if (reducir) { setV(valor); return; }
    const c = animate(previo.current, valor, { duration: duracion, ease: SUAVE, delay: 0.15, onUpdate: x => setV(x) });
    previo.current = valor;
    return () => c.stop();
  }, [valor, duracion, reducir]);
  return <span className={className} aria-label={valor.toFixed(decimales)}>{v.toFixed(decimales)}</span>;
}

export const transicionPantalla = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.28, ease: SUAVE } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.14, ease: 'easeIn' as const } },
};
