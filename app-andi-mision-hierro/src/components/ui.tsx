import { useEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Icono, { type NombreIcono } from './Icono';

export function Encabezado({ titulo, atras, accion }: { titulo: string; atras?: string; accion?: ReactNode }) {
  return (
    <header className="encabezado">
      {atras ? <Link to={atras} className="btn-icono" aria-label="Volver"><Icono n="atras" /></Link> : <span className="btn-icono-vacio" />}
      <h1>{titulo}</h1>
      {accion || <span className="btn-icono-vacio" />}
    </header>
  );
}

export function Tarjeta({ children, className = '', onClick, as = 'section' }: { children: ReactNode; className?: string; onClick?: () => void; as?: 'section' | 'button' | 'div' }) {
  const Tag = as as 'section';
  return <Tag className={`tarjeta ${className}`} onClick={onClick} {...(as === 'button' ? { type: 'button' } : {})}>{children}</Tag>;
}

export function Boton({ children, onClick, tipo = 'primario', icono, deshabilitado, ancho, className = '', submit }: {
  children: ReactNode; onClick?: () => void; tipo?: 'primario' | 'secundario' | 'suave' | 'peligro' | 'whatsapp';
  icono?: NombreIcono; deshabilitado?: boolean; ancho?: boolean; className?: string; submit?: boolean;
}) {
  return (
    <button type={submit ? 'submit' : 'button'} className={`boton boton-${tipo} ${ancho ? 'boton-ancho' : ''} ${className}`} onClick={onClick} disabled={deshabilitado}>
      {icono && <Icono n={icono} tam={20} />}<span>{children}</span>
    </button>
  );
}

export function Hoja({ abierta, alCerrar, titulo, children }: { abierta: boolean; alCerrar: () => void; titulo: string; children: ReactNode }) {
  useEffect(() => {
    if (!abierta) return;
    const tecla = (e: KeyboardEvent) => e.key === 'Escape' && alCerrar();
    document.addEventListener('keydown', tecla); document.body.classList.add('sin-scroll');
    return () => { document.removeEventListener('keydown', tecla); document.body.classList.remove('sin-scroll'); };
  }, [abierta, alCerrar]);
  if (!abierta) return null;
  return (
    <div className="hoja-fondo" onClick={alCerrar}>
      <div className="hoja" role="dialog" aria-modal="true" aria-label={titulo} onClick={e => e.stopPropagation()}>
        <div className="hoja-asa" />
        <div className="hoja-cabeza"><h2>{titulo}</h2><button className="btn-icono" onClick={alCerrar} aria-label="Cerrar"><Icono n="x" /></button></div>
        <div className="hoja-cuerpo">{children}</div>
      </div>
    </div>
  );
}

let avisar: (t: string) => void = () => {};
export const aviso = (t: string) => avisar(t);
export function Avisos() {
  const [texto, setTexto] = useState<string | null>(null);
  useEffect(() => {
    let timer: number;
    avisar = (t) => { setTexto(t); clearTimeout(timer); timer = window.setTimeout(() => setTexto(null), 2600); };
    return () => clearTimeout(timer);
  }, []);
  return <div className={`aviso ${texto ? 'visible' : ''}`} role="status" aria-live="polite">{texto}</div>;
}

export function Paso({ valor, alCambiar, min = 0, max = 99, etiqueta }: { valor: number; alCambiar: (n: number) => void; min?: number; max?: number; etiqueta: string }) {
  return (
    <div className="paso" role="group" aria-label={etiqueta}>
      <button type="button" onClick={() => alCambiar(Math.max(min, valor - 1))} aria-label={`Menos ${etiqueta}`} disabled={valor <= min}><Icono n="restar" /></button>
      <output>{valor}</output>
      <button type="button" onClick={() => alCambiar(Math.min(max, valor + 1))} aria-label={`Más ${etiqueta}`} disabled={valor >= max}><Icono n="sumar" /></button>
    </div>
  );
}

export function Interruptor({ activo, alCambiar, etiqueta, detalle }: { activo: boolean; alCambiar: (v: boolean) => void; etiqueta: string; detalle?: string }) {
  return (
    <label className="interruptor">
      <span><strong>{etiqueta}</strong>{detalle && <small>{detalle}</small>}</span>
      <input type="checkbox" role="switch" checked={activo} onChange={e => alCambiar(e.target.checked)} />
      <i aria-hidden="true" />
    </label>
  );
}

export function Vacio({ icono, titulo, texto, children }: { icono: NombreIcono; titulo: string; texto: string; children?: ReactNode }) {
  return (
    <div className="vacio">
      <div className="vacio-icono"><Icono n={icono} tam={30} /></div>
      <h3>{titulo}</h3><p>{texto}</p>{children}
    </div>
  );
}

export const soles = (n: number) => `S/${n.toFixed(2)}`;
