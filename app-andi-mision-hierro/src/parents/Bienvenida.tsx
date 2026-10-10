import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Andi from '../components/Andi';
import Icono from '../components/Icono';
import { Boton, Paso } from '../components/ui';
import { actualizar, nuevoId, useEstado } from '../lib/estado';
import { hoyISO } from '../lib/fechas';

export const AVATARES = ['🦙', '🐻', '🦊', '🐸', '🐼', '🐯', '🐨', '🦁'];

export default function Bienvenida() {
  const consentido = useEstado(e => Boolean(e.consentimiento));
  const [paso, setPaso] = useState(consentido ? 2 : 0);
  const [acepto, setAcepto] = useState(false);
  const [avisos, setAvisos] = useState(true);
  const [apodo, setApodo] = useState('');
  const [edad, setEdad] = useState(6);
  const [avatar, setAvatar] = useState(AVATARES[0]);
  const ir = useNavigate();
  const [q] = useSearchParams();
  const volver = q.get('volver') || '/';
  useEffect(() => { sessionStorage.setItem('andi.bienvenida', '1'); }, []);

  const terminar = () => {
    actualizar(e => {
      e.consentimiento ??= { fecha: hoyISO(), avisos };
      const n = { id: nuevoId(), apodo: apodo.trim().slice(0, 20), edad, avatar };
      e.ninos.push(n); e.ninoActivo = n.id;
    });
    ir(volver, { replace: true });
  };

  return (
    <div className="bienvenida">
      <div className="puntos-paso" aria-hidden="true">{[0, 1, 2].map(i => <i key={i} className={i === paso ? 'on' : ''} />)}</div>
      {paso === 0 && (
        <section className="bienvenida-paso">
          <Andi tam={170} className="andi-salta" />
          <h1>Hola, somos AndiBite</h1>
          <p className="lead">Esta app viene con tu brownie. Te ayuda a saber cuánto hierro come tu hijo, sin peleas en la mesa.</p>
          <ul className="ventajas">
            <li><span><Icono n="matraz" /></span><div><strong>Hierro medido de tu lote</strong><small>Escanea el envase y mira el resultado del laboratorio.</small></div></li>
            <li><span><Icono n="gota" /></span><div><strong>Semáforo de hierro</strong><small>Cuántos días de la semana comió una fuente de hierro.</small></div></li>
            <li><span><Icono n="lonchera" /></span><div><strong>Loncheras de la semana</strong><small>Ideas con hierro y su lista de compras.</small></div></li>
            <li><span><Icono n="ninos" /></span><div><strong>Misión Hierro para tu hijo</strong><small>Juegos para aprender a comer hierro. Sin compras ni publicidad.</small></div></li>
          </ul>
          <Boton ancho onClick={() => setPaso(1)}>Empezar</Boton>
        </section>
      )}
      {paso === 1 && (
        <section className="bienvenida-paso">
          <div className="icono-grande"><Icono n="escudo" tam={40} /></div>
          <h1>Tus datos se quedan contigo</h1>
          <p className="lead">Lo que registres (apodo y edad de tu hijo, comidas y controles) se guarda <strong>solo en este teléfono</strong>. A nuestro servidor solo llega el código del envase que escaneas, sin datos tuyos.</p>
          <label className="casilla"><input type="checkbox" checked={acepto} onChange={e => setAcepto(e.target.checked)} />
            <span>Acepto que la app guarde estos datos en mi teléfono para mostrarme el semáforo, las loncheras y los recordatorios (Ley 29733).</span></label>
          <label className="casilla"><input type="checkbox" checked={avisos} onChange={e => setAvisos(e.target.checked)} />
            <span>Quiero ver avisos cuando se esté acabando mi pack o se acerque el control de hemoglobina.</span></label>
          <p className="nota">Puedes borrar todo cuando quieras desde Más &gt; Privacidad.</p>
          <Boton ancho deshabilitado={!acepto} onClick={() => setPaso(2)}>Continuar</Boton>
          <button className="enlace" onClick={() => ir(volver)}>Ahora no</button>
        </section>
      )}
      {paso === 2 && (
        <form className="bienvenida-paso" onSubmit={e => { e.preventDefault(); if (apodo.trim()) terminar(); }}>
          <div className="avatar-grande" aria-hidden="true">{avatar}</div>
          <h1>¿Para quién es la lonchera?</h1>
          <label className="campo"><span>Apodo (no hace falta el nombre real)</span>
            <input value={apodo} onChange={e => setApodo(e.target.value)} placeholder="Ej.: Mati" maxLength={20} autoFocus /></label>
          <div className="campo"><span>Edad</span><Paso valor={edad} alCambiar={setEdad} min={2} max={13} etiqueta="años" /></div>
          <div className="campo"><span>Elige su personaje</span>
            <div className="avatares">{AVATARES.map(a => <button type="button" key={a} className={a === avatar ? 'activo' : ''} onClick={() => setAvatar(a)} aria-label={`Personaje ${a}`}>{a}</button>)}</div>
          </div>
          <Boton ancho submit deshabilitado={!apodo.trim()}>Listo</Boton>
        </form>
      )}
    </div>
  );
}
