import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icono, { type NombreIcono } from '../components/Icono';
import { Boton, Encabezado, Hoja, Interruptor, Paso, Tarjeta, aviso } from '../components/ui';
import { actualizar, borrarTodo, obtener, useEstado } from '../lib/estado';
import { AVATARES } from './Bienvenida';
import { SLOGAN } from './Inicio';
import type { Nino } from '../lib/tipos';

export const NOTA_LEGAL = 'AndiBite aporta hierro; no reemplaza una alimentación variada ni las indicaciones de tu pediatra.';

export default function Mas() {
  const ninos = useEstado(e => e.ninos);
  const ajustes = useEstado(e => e.ajustes);
  const ultimo = useEstado(e => e.codigosVistos[0]?.code);
  const [editando, setEditando] = useState<Nino | null>(null);
  const ir = useNavigate();
  const aj = (f: (a: typeof ajustes) => void) => actualizar(e => { f(e.ajustes); });

  const enlaces: { a: string; n: NombreIcono; t: string; d: string }[] = [
    { a: '/escanear', n: 'qr', t: 'Escanear un pack', d: 'Lee el QR del envase y súmalo a tu despensa' },
    { a: ultimo ? `/c/${ultimo}` : '/escanear', n: 'matraz', t: 'Ficha del producto y laboratorio', d: ultimo ? 'Tu último lote y lo que dice el laboratorio' : 'Escanea un pack para ver su lote' },
    { a: '/hemoglobina', n: 'calendario', t: 'Control de hemoglobina', d: 'Próximo control y resultados' },
    { a: '/donde', n: 'mapa', t: 'Dónde comprar', d: 'Nuestros stands en Lima' },
  ];

  return (
    <div className="pantalla mas">
      <Encabezado titulo="Más" atras="/" />
      <Tarjeta>
        <h2>Familia</h2>
        {ninos.map(n => (
          <button key={n.id} className="fila fila-boton" onClick={() => setEditando(n)}>
            <span className="fila-emoji" aria-hidden="true">{n.avatar}</span><span><strong>{n.apodo}</strong><small>{n.edad} años</small></span><Icono n="editar" tam={18} />
          </button>
        ))}
        <Boton tipo="suave" icono="sumar" onClick={() => ir('/bienvenida?volver=/mas')}>Agregar hijo o hija</Boton>
      </Tarjeta>
      <nav className="tarjeta enlaces" aria-label="Opciones">
        {enlaces.map(e => <Link key={e.t} to={e.a} className="fila"><Icono n={e.n} /><span><strong>{e.t}</strong><small>{e.d}</small></span><Icono n="derecha" /></Link>)}
        <div className="fila"><Icono n="corazon" /><span><strong>Mamás que recomiendan</strong><small>Pregunta en el stand por tu código de embajadora; el premio es para ti.</small></span></div>
        <Link to="/privacidad" className="fila"><Icono n="escudo" /><span><strong>Privacidad y borrar datos</strong><small>Qué guardamos y cómo borrarlo</small></span><Icono n="derecha" /></Link>
      </nav>
      <Tarjeta>
        <h2>Ajustes</h2>
        <div className="campo campo-fila"><span><strong>Tiempo de juego por sesión</strong><small>Al terminar, Andi se despide</small></span>
          <div className="chips">{[10, 15, 20].map(m => <button key={m} className={`chip ${ajustes.tiempoJuegoMin === m ? 'chip-activo' : ''}`} onClick={() => aj(a => { a.tiempoJuegoMin = m; })}>{m} min</button>)}</div></div>
        <Interruptor activo={ajustes.voz} alCambiar={v => aj(a => { a.voz = v; })} etiqueta="Voz de Andi" detalle="Lee en voz alta en el modo niños" />
        <Interruptor activo={ajustes.avisos} alCambiar={async v => {
          if (v && 'Notification' in window && Notification.permission !== 'granted') {
            const p = await Notification.requestPermission(); if (p !== 'granted') { aviso('Permiso de avisos no concedido'); return; }
          }
          aj(a => { a.avisos = v; });
        }} etiqueta="Avisos" detalle="Cuando se acaba el pack o se acerca un control" />
      </Tarjeta>
      <Tarjeta className="acerca">
        <h2>Acerca de</h2>
        <p><strong>Andi</strong> es la app de AndiBite, el mini brownie de 20 g con sangrecita para niños de 4 a 11 años. Versión 2.0.</p>
        <p className="nota">{SLOGAN} · Lima, Perú.</p>
      </Tarjeta>
      <p className="nota-legal">{NOTA_LEGAL}</p>
      <EditarNino nino={editando} alCerrar={() => setEditando(null)} />
    </div>
  );
}

function EditarNino({ nino, alCerrar }: { nino: Nino | null; alCerrar: () => void }) {
  const [form, setForm] = useState<Nino | null>(null);
  if (nino && (!form || form.id !== nino.id)) setForm(nino);
  if (!nino || !form) return null;
  return (
    <Hoja abierta alCerrar={alCerrar} titulo={`Editar a ${nino.apodo}`}>
      <label className="campo"><span>Apodo</span><input value={form.apodo} maxLength={20} onChange={e => setForm({ ...form, apodo: e.target.value })} /></label>
      <div className="campo"><span>Edad</span><Paso valor={form.edad} min={2} max={13} etiqueta="años" alCambiar={v => setForm({ ...form, edad: v })} /></div>
      <div className="campo"><span>Personaje</span><div className="avatares">{AVATARES.map(a => <button key={a} type="button" className={a === form.avatar ? 'activo' : ''} onClick={() => setForm({ ...form, avatar: a })}>{a}</button>)}</div></div>
      <Boton ancho deshabilitado={!form.apodo.trim()} onClick={() => { actualizar(e => { const i = e.ninos.findIndex(x => x.id === form.id); e.ninos[i] = { ...form, apodo: form.apodo.trim() }; }); alCerrar(); }}>Guardar</Boton>
      <Boton ancho tipo="peligro" icono="basura" onClick={() => {
        if (!confirm(`¿Borrar a ${nino.apodo} y todos sus registros?`)) return;
        actualizar(e => { e.ninos = e.ninos.filter(x => x.id !== nino.id); e.registros = e.registros.filter(r => r.ninoId !== nino.id); delete e.hemoglobina[nino.id]; delete e.progreso[nino.id]; delete e.reto[nino.id]; if (e.ninoActivo === nino.id) e.ninoActivo = e.ninos[0]?.id; });
        alCerrar();
      }}>Borrar perfil</Boton>
    </Hoja>
  );
}

export function Privacidad() {
  const ir = useNavigate();
  const exportar = () => {
    const url = URL.createObjectURL(new Blob([JSON.stringify(obtener(), null, 2)], { type: 'application/json' }));
    const a = document.createElement('a'); a.href = url; a.download = 'mis-datos-andibite.json'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 2000);
  };
  return (
    <div className="pantalla privacidad">
      <Encabezado titulo="Privacidad y datos" atras="/mas" />
      <Tarjeta>
        <h2>Lo que se queda en tu teléfono</h2>
        <p>El apodo y la edad de tus hijos, el reto de la lonchera, sus estrellas, tus loncheras, tu despensa y los controles de hemoglobina. No tenemos cuentas ni contraseñas: nada de esto llega a nuestro servidor.</p>
        <h2>Lo que llega a nuestro servidor</h2>
        <p>Solo el código del envase que escaneas, para mostrarte su lote y contar cuántas veces se escanea cada lote.</p>
        <h2>Modo niños</h2>
        <p>Misión Hierro no muestra productos, precios ni publicidad, no tiene compras y no premia comprar ni comer el brownie (Ley 30021). Las estrellas se ganan jugando y con la lonchera vacía.</p>
        <h2>Tus derechos</h2>
        <p>Puedes descargar o borrar tus datos cuando quieras (Ley 29733, de Protección de Datos Personales). Para consultas, escríbenos por WhatsApp desde Mi despensa.</p>
      </Tarjeta>
      <Boton ancho tipo="secundario" icono="descarga" onClick={exportar}>Descargar mis datos</Boton>
      <Boton ancho tipo="peligro" icono="basura" onClick={() => { if (confirm('¿Borrar todos los datos de la app en este teléfono?')) { borrarTodo(); ir('/', { replace: true }); } }}>Borrar todos mis datos</Boton>
    </div>
  );
}
