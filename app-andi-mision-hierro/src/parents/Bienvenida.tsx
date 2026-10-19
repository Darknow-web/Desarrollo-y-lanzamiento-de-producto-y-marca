import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Andi from '../components/Andi';
import { Boton, Paso } from '../components/ui';
import { Cascada, Item } from '../components/movimiento';
import { actualizar, nuevoId, useEstado } from '../lib/estado';
import { hoyISO } from '../lib/fechas';

export const AVATARES = ['🦙', '🐻', '🦊', '🐸', '🐼', '🐯', '🐨', '🦁'];

/** Consentimiento corto (Ley 29733) y perfil del hijo en una sola pantalla. Se pide solo al guardar algo. */
export default function Bienvenida() {
  const consentido = useEstado(e => Boolean(e.consentimiento));
  const [acepto, setAcepto] = useState(consentido);
  const [apodo, setApodo] = useState('');
  const [edad, setEdad] = useState(6);
  const [avatar, setAvatar] = useState(AVATARES[0]);
  const ir = useNavigate();
  const [q] = useSearchParams();
  const volver = q.get('volver') || '/';

  const terminar = () => {
    actualizar(e => {
      e.consentimiento ??= { fecha: hoyISO(), avisos: true };
      if (apodo.trim()) { const n = { id: nuevoId(), apodo: apodo.trim().slice(0, 20), edad, avatar }; e.ninos.push(n); e.ninoActivo = n.id; }
    });
    ir(volver, { replace: true });
  };

  return (
    <div className="bienvenida">
      <Cascada className="bienvenida-paso">
        <Item><Andi tam={96} className="andi-flota" /></Item>
        <Item><h1 className="titulo-pantalla">{consentido ? 'Agrega a tu hijo o hija' : 'Antes de guardar'}</h1></Item>
        <Item><p className="lead">Lo que registres se guarda <strong>solo en este teléfono</strong>. A nuestro servidor solo llega el código del envase, sin datos tuyos.</p></Item>
        <Item className="bienvenida-form">
          <form onSubmit={e => { e.preventDefault(); if (acepto) terminar(); }}>
            {!consentido && (
              <label className="casilla"><input type="checkbox" checked={acepto} onChange={e => setAcepto(e.target.checked)} />
                <span>Acepto que la app guarde mi despensa, el semáforo y los recordatorios en este teléfono (Ley 29733). Puedo borrarlo todo cuando quiera.</span></label>
            )}
            <label className="campo"><span>Apodo de tu hijo o hija (opcional)</span>
              <input value={apodo} onChange={e => setApodo(e.target.value)} placeholder="Ej.: Mati" maxLength={20} /></label>
            <div className="bienvenida-fila">
              <div className="campo"><span>Edad</span><Paso valor={edad} alCambiar={setEdad} min={2} max={13} etiqueta="años" /></div>
              <div className="campo"><span>Personaje</span>
                <div className="avatares">{AVATARES.slice(0, 4).map(a => <button type="button" key={a} className={a === avatar ? 'activo' : ''} onClick={() => setAvatar(a)} aria-label={`Personaje ${a}`} aria-pressed={a === avatar}>{a}</button>)}</div>
              </div>
            </div>
            <Boton ancho submit deshabilitado={!acepto || (consentido && !apodo.trim())}>Guardar y seguir</Boton>
            <button type="button" className="enlace enlace-ancho" onClick={() => ir(volver.replace(/[?&]agregar=1/, ''), { replace: true })}>Ahora no</button>
          </form>
        </Item>
      </Cascada>
    </div>
  );
}
