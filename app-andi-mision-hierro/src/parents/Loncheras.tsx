import { useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Icono from '../components/Icono';
import { Boton, Encabezado, Interruptor, Paso, Tarjeta, Vacio, aviso } from '../components/ui';
import { Cascada, Item } from '../components/movimiento';
import SelectorNino from './SelectorNino';
import { actualizar, desmarcarLoncheraDelPlan, ninoActivo, registrarLoncheraDelPlan, useEstado } from '../lib/estado';
import { fechaCorta, hoyISO, lunesDe, semanaDe } from '../lib/fechas';
import { ErrorApi, obtenerConfig } from '../lib/api';
import { enlaceWhatsApp, mensajePedido } from '../lib/whatsapp';
import { GUSTOS, RESTRICCIONES, cambiarDia, planRecetario } from '../data/loncheras';
import { armarPlan, borrarAccesoPlan, desbloquearPlan, diasConAndiBite, estadoAcceso, guardarAccesoPlan, guardarUltimoPlan, hierroSemana, leerUltimoPlan, semanaAPlanificar, type EstadoAcceso, type UltimoPlan } from '../lib/plan';
import type { Nino } from '../lib/tipos';
import '../styles/plan.css';

const NUMERO_POR_DEFECTO = '51941371376';

/**
 * Plan de loncheras de la semana (función premium): cada pack escaneado desbloquea 14 días el plan armado con IA.
 * Tres estados: bloqueado (no escaneó), vigente (formulario y plan) y vencido (pasaron los 14 días).
 * Si el Worker no tiene la clave de IA (503), se usa el recetario propio de AndiBite.
 */
export default function Loncheras() {
  const nino = useEstado(ninoActivo);
  const [q, setQ] = useSearchParams();
  const [acceso, setAcceso] = useState(() => estadoAcceso());
  const [respaldo, setRespaldo] = useState(false);
  const [whatsapp, setWhatsapp] = useState(NUMERO_POR_DEFECTO);
  const ir = useNavigate();
  useEffect(() => { obtenerConfig().then(c => setWhatsapp(c.whatsapp)); }, []);

  // /loncheras?codigo=AB-XXXX-XXXX (por ejemplo, el código demo): desbloquea el plan sin pasar por el escáner.
  useEffect(() => {
    const c = q.get('codigo'); if (!c) return;
    desbloquearPlan(c).then(a => { setAcceso(estadoAcceso()); if (!a) aviso('No pudimos validar ese código'); });
    setQ({}, { replace: true });
  }, [q, setQ]);

  if (!nino) return (
    <div className="pantalla"><Encabezado titulo="Loncheras" />
      <Vacio icono="lonchera" titulo="Crea el perfil de tu hijo" texto="Armamos las loncheras según su edad.">
        <Boton onClick={() => ir('/bienvenida?volver=/loncheras')}>Crear perfil</Boton></Vacio></div>
  );

  if (respaldo) return <Recetario nino={nino} whatsapp={whatsapp} />;
  if (acceso.estado !== 'vigente') return <Bloqueado estado={acceso.estado} whatsapp={whatsapp} nino={nino} />;
  return (
    <PlanConAndi nino={nino} codigo={acceso.acceso!.codigo} quedan={acceso.quedan} whatsapp={whatsapp}
      alNoDisponible={() => setRespaldo(true)} alCambiarAcceso={() => setAcceso(estadoAcceso())} />
  );
}

/** Bloqueado o vencido: una sola acción, escanear el pack. */
function Bloqueado({ estado, whatsapp, nino }: { estado: EstadoAcceso; whatsapp: string; nino: Nino }) {
  const ir = useNavigate();
  const vencido = estado === 'vencido';
  return (
    <Cascada className="pantalla loncheras">
      <Encabezado titulo="Loncheras de la semana" />
      <Item><SelectorNino /></Item>
      <Item as="section" className="tarjeta plan-bloqueado">
        <div className="plan-bloqueado-icono" aria-hidden="true"><Icono n={vencido ? 'reloj' : 'candado'} tam={30} /></div>
        <p className="kicker">Plan con IA · 14 días por pack</p>
        <h2>{vencido ? 'Tu plan se renueva con tu próximo pack' : 'Escanea tu pack y desbloquea el plan de la semana'}</h2>
        <p className="nota">
          {vencido
            ? `Pasaron los 14 días de tu último pack. Escanea el QR de uno nuevo y Andi vuelve a armar las loncheras de ${nino.apodo}.`
            : `Con el QR de tu envase, Andi arma 5 loncheras con hierro para ${nino.apodo}: receta, fruta con vitamina C y lista de compras.`}
        </p>
        <Boton ancho icono="qr" onClick={() => ir('/escanear')}>Escanear mi pack</Boton>
        <a className="enlace" href={enlaceWhatsApp(whatsapp, mensajePedido({ pack6: 1 }, { motivo: `Es para desbloquear el plan de loncheras de ${nino.apodo}.` }))} target="_blank" rel="noopener noreferrer">
          <Icono n="whatsapp" tam={18} /> Pedir por WhatsApp
        </a>
      </Item>
    </Cascada>
  );
}

/** Vigente: formulario mínimo y plan por días armado con IA. */
function PlanConAndi({ nino, codigo, quedan, whatsapp, alNoDisponible, alCambiarAcceso }: {
  nino: Nino; codigo: string; quedan: number; whatsapp: string; alNoDisponible: () => void; alCambiarAcceso: () => void;
}) {
  const semana = semanaAPlanificar();
  const [ultimo, setUltimo] = useState<UltimoPlan | null>(() => { const u = leerUltimoPlan(); return u && u.ninoId === nino.id ? u : null; });
  const [editar, setEditar] = useState(false);
  const [edad, setEdad] = useState(Math.min(13, Math.max(2, nino.edad || 6)));
  const [evitar, setEvitar] = useState<string[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => { const u = leerUltimoPlan(); setUltimo(u && u.ninoId === nino.id ? u : null); setEditar(false); }, [nino.id]);

  const vigente = ultimo && !editar ? ultimo : null;
  const alternar = (v: string) => setEvitar(l => (l.includes(v) ? l.filter(x => x !== v) : [...l, v]));

  const armar = async () => {
    setCargando(true); setError(null);
    const yaProbo = ultimo && ultimo.plan.semana !== semana ? ultimo.plan.dias.map(d => d.principal.nombre) : undefined;
    try {
      const r = await armarPlan({ codigo, nino: { apodo: nino.apodo, edadAnios: edad, evitar: evitar.map(id => RESTRICCIONES.find(x => x.id === id)?.nombre || id), yaProbo }, semana }, nino.id);
      setUltimo(r); setEditar(false); alCambiarAcceso();
    } catch (e) {
      const err = e instanceof ErrorApi ? e : new ErrorApi('error', 0);
      if (err.codigo === 'plan_no_disponible') { alNoDisponible(); return; }
      if (err.codigo === 'plan_vencido' || err.codigo === 'codigo_sin_escanear') { guardarAccesoPlan({ codigo, planHasta: new Date().toISOString() }); alCambiarAcceso(); return; }
      if (err.codigo === 'codigo_no_encontrado' || err.codigo === 'codigo_invalido') { borrarAccesoPlan(); alCambiarAcceso(); return; }
      if (err.codigo === 'sin_conexion' && ultimo) { setEditar(false); aviso('Sin conexión: te mostramos tu último plan'); return; }
      setError(err.codigo === 'sin_conexion' ? 'No hay conexión. Cuando vuelva, intenta otra vez.'
        : err.codigo === 'plan_ocupado' || err.codigo === 'demasiadas_peticiones' ? 'Andi está ocupada. Espera un minuto e intenta otra vez.'
          : 'No pudimos armar el plan. Intenta otra vez en un momento.');
    } finally { setCargando(false); }
  };

  const marcarComprado = (item: string) => {
    if (!ultimo) return;
    const l = ultimo.comprado || [];
    const u = { ...ultimo, comprado: l.includes(item) ? l.filter(x => x !== item) : [...l, item] };
    setUltimo(u); guardarUltimoPlan(u);
  };

  const compartir = async () => {
    if (!vigente) return;
    const p = vigente.plan;
    const t = `Loncheras de ${nino.apodo} (semana del ${fechaCorta(p.semana)}):\n` + p.dias.map(d => `- ${d.dia}: ${d.principal.nombre} + ${d.fruta} + ${d.bebida}${d.conAndiBite ? ' + AndiBite' : ''} (${d.hierroMg} mg)`).join('\n')
      + `\n\nCompras: ${p.listaCompras.map(g => `${g.grupo}: ${g.items.join(', ')}`).join('. ')}`;
    try { if (navigator.share) await navigator.share({ title: 'Loncheras de la semana', text: t }); else { await navigator.clipboard.writeText(t); aviso('Copiado'); } } catch { /* cancelado */ }
  };

  const renueva = <p className="plan-renueva"><Icono n="reloj" tam={16} /> Se renueva con tu próximo pack · {quedan === 1 ? 'queda 1 día' : `quedan ${quedan} días`}</p>;

  if (cargando) return (
    <div className="pantalla loncheras">
      <Encabezado titulo="Loncheras de la semana" />
      <Tarjeta className="plan-cargando">
        <div className="cargando" aria-label="Armando el plan"><i /><i /><i /></div>
        <h2>Andi está armando la semana de {nino.apodo}</h2>
        <p className="nota">Busca recetas con hierro y frutas con vitamina C, y te arma la lista de compras. Toma menos de un minuto.</p>
      </Tarjeta>
    </div>
  );

  if (!vigente) return (
    <Cascada className="pantalla loncheras">
      <Encabezado titulo="Loncheras de la semana" />
      <Item><SelectorNino /></Item>
      <Item as="section" className="tarjeta armar">
        <p className="kicker">Plan con IA · semana del {fechaCorta(semana)}</p>
        <h2>Armemos la semana de {nino.apodo}</h2>
        <p className="nota">Cada día: un plato con hierro, una fruta con vitamina C y una bebida sin azúcar. Nada frito ni con octógonos.</p>
        <div className="campo"><span>Edad</span><Paso valor={edad} alCambiar={setEdad} min={2} max={13} etiqueta="años" /></div>
        <div className="campo"><span>Evitar (alergias o lo que no come)</span><div className="chips">{RESTRICCIONES.map(r => <button key={r.id} className={`chip ${evitar.includes(r.id) ? 'chip-activo chip-evitar' : ''}`} onClick={() => alternar(r.id)} aria-pressed={evitar.includes(r.id)}>{r.nombre}</button>)}</div></div>
        {error && <p className="error-texto" role="alert">{error}</p>}
        <Boton ancho icono="lonchera" onClick={armar}>Armar mi semana con Andi</Boton>
        {ultimo && <button type="button" className="enlace" onClick={() => setEditar(false)}>Ver mi último plan</button>}
        {renueva}
      </Item>
    </Cascada>
  );

  const p = vigente.plan;
  const conPack = diasConAndiBite(p);
  return (
    <Cascada className="pantalla loncheras">
      <Encabezado titulo="Loncheras de la semana" accion={<button className="btn-icono" onClick={compartir} aria-label="Compartir"><Icono n="compartir" /></button>} />
      <Item><SelectorNino /></Item>
      <Item className="plan-resumen">
        <p className="kicker">Semana del {fechaCorta(p.semana)} · {hierroSemana(p)} mg de hierro en 5 loncheras</p>
        {renueva}
      </Item>
      <Item className="dias-lonchera">
        {p.dias.map(d => (
          <Tarjeta key={d.dia} className={`dia-lonchera plan-dia ${d.conAndiBite ? 'con-pack' : ''}`}>
            <div className="dia-cabeza"><strong>{d.dia}</strong><span className="mg">{d.hierroMg} mg</span></div>
            <h3>{d.principal.nombre}</h3>
            <p className="acompana"><span>{d.fruta}</span><span>·</span><span>{d.bebida}</span>{d.conAndiBite && <span className="plan-andi">+ AndiBite</span>}</p>
            <details>
              <summary>Cómo prepararla</summary>
              <p className="plan-ingredientes">{d.principal.ingredientes.join(' · ')}</p>
              <ol className="plan-pasos">{d.principal.preparacion.map((paso, i) => <li key={i}>{paso}</li>)}</ol>
            </details>
            <p className="plan-truco"><Icono n="info" tam={16} /> <span>{d.truco}</span></p>
          </Tarjeta>
        ))}
      </Item>
      {conPack > 0 && (
        <Item as="section" className="tarjeta pack-semana">
          <p className="kicker kicker-dorado">Tu pack para la semana</p>
          <h2>{conPack} {conPack === 1 ? 'día' : 'días'} con AndiBite</h2>
          <p>Un brownie por lonchera como complemento. El pack de 6 por WhatsApp cuesta S/26.90.</p>
          <a className="boton boton-whatsapp" href={enlaceWhatsApp(whatsapp, mensajePedido({ pack6: 1 }, { codigo, motivo: `Es para las loncheras de la semana de ${nino.apodo}.` }))} target="_blank" rel="noopener noreferrer"><Icono n="whatsapp" tam={20} /><span>Pedir el pack por WhatsApp</span></a>
        </Item>
      )}
      <Item as="section" className="tarjeta compras plan-compras">
        <h2>Lista de compras</h2>
        {p.listaCompras.map(g => (
          <div key={g.grupo} className="plan-grupo">
            <h3>{g.grupo}</h3>
            <ul>{g.items.map(it => {
              const ok = vigente.comprado?.includes(it);
              return <li key={it}><label className={ok ? 'tachado' : ''}><input type="checkbox" checked={!!ok} onChange={() => marcarComprado(it)} />{it}</label></li>;
            })}</ul>
          </div>
        ))}
      </Item>
      <Item><p className="nota centro">{p.nota}</p></Item>
      <Item><Boton tipo="secundario" ancho icono="lonchera" onClick={() => setEditar(true)}>Armar otra semana</Boton></Item>
    </Cascada>
  );
}

/** Respaldo cuando el Worker no tiene la clave de IA: el recetario propio de AndiBite (corre en el teléfono). */
function Recetario({ nino, whatsapp }: { nino: Nino; whatsapp: string }) {
  const plan = useEstado(e => e.loncheras);
  const despensa = useEstado(e => e.despensa);
  const [gustos, setGustos] = useState<string[]>([]);
  const [evitar, setEvitar] = useState<string[]>([]);
  const [conAndi, setConAndi] = useState(true);
  const [editar, setEditar] = useState(false);

  const vigente = plan && plan.ninoId === nino.id && plan.semana === lunesDe(hoyISO()) && !editar ? plan : null;
  const alternar = (lista: string[], v: string, set: (l: string[]) => void) => set(lista.includes(v) ? lista.filter(x => x !== v) : [...lista, v]);

  const armar = () => {
    const r = planRecetario({ evitar, incluirAndiBite: conAndi });
    actualizar(e => { e.loncheras = { semana: lunesDe(hoyISO()), ninoId: nino.id, comprado: [], fuente: 'recetario', ...r }; });
    setEditar(false);
  };

  // Marcar que la llevó registra el hierro de esa lonchera en el día (la misma fuente que "El hierro de hoy").
  const marcarHecho = (i: number) => {
    if (!vigente) return;
    const fecha = semanaDe(vigente.semana)[i];
    if (vigente.dias[i].hecho) desmarcarLoncheraDelPlan(nino.id, fecha);
    else registrarLoncheraDelPlan(nino.id, fecha);
  };

  const compartir = async () => {
    if (!vigente) return;
    const t = `Loncheras de ${nino.apodo}:\n` + vigente.dias.map(d => `- ${d.dia}: ${d.principal} + ${d.fruta} + ${d.bebida}`).join('\n') + `\n\nCompras: ${vigente.compras.join(', ')}`;
    try { if (navigator.share) await navigator.share({ title: 'Loncheras de la semana', text: t }); else { await navigator.clipboard.writeText(t); aviso('Copiado'); } } catch { /* cancelado */ }
  };

  const conPack = vigente?.dias.filter(d => d.andibite).length || 0;
  const quedan = despensa.reduce((a, d) => a + d.restantes, 0);

  return (
    <Cascada className="pantalla loncheras">
      <Encabezado titulo="Loncheras de la semana" accion={vigente ? <button className="btn-icono" onClick={compartir} aria-label="Compartir"><Icono n="compartir" /></button> : undefined} />
      <Item><SelectorNino /></Item>
      {!vigente ? (
        <Item as="section" className="tarjeta armar">
          <p className="kicker">Recetario AndiBite</p>
          <h2>Armemos la semana de {nino.apodo}</h2>
          <p className="nota">Cada día: un plato con hierro, una fruta con vitamina C y una bebida sin azúcar. Nada frito ni con octógonos.</p>
          <div className="campo"><span>Le gusta</span><div className="chips">{GUSTOS.map(g => <button key={g} className={`chip ${gustos.includes(g) ? 'chip-activo' : ''}`} onClick={() => alternar(gustos, g, setGustos)} aria-pressed={gustos.includes(g)}>{g}</button>)}</div></div>
          <div className="campo"><span>Evitar (alergias o lo que no come)</span><div className="chips">{RESTRICCIONES.map(r => <button key={r.id} className={`chip ${evitar.includes(r.id) ? 'chip-activo chip-evitar' : ''}`} onClick={() => alternar(evitar, r.id, setEvitar)} aria-pressed={evitar.includes(r.id)}>{r.nombre}</button>)}</div></div>
          <Interruptor activo={conAndi} alCambiar={setConAndi} etiqueta="Incluir AndiBite" detalle="Como complemento, 2 días como máximo" />
          <Boton ancho icono="lonchera" onClick={armar}>Armar mi semana</Boton>
        </Item>
      ) : (
        <>
          <Item className="dias-lonchera">
            {vigente.dias.map((d, i) => (
              <Tarjeta key={d.dia} className={`dia-lonchera ${d.hecho ? 'hecho' : ''} ${d.andibite ? 'con-pack' : ''}`}>
                <div className="dia-cabeza"><strong>{d.dia}</strong><span className="mg">{d.hierroMg} mg</span></div>
                <h3>{d.principal}</h3>
                <p className="acompana">{d.fruta} · {d.bebida}</p>
                <p className="fuente">Hierro de: {d.fuenteHierro}</p>
                <details><summary>Cómo prepararla</summary><p>{d.preparacion}</p></details>
                <div className="dia-acciones">
                  <button className={`chip ${d.hecho ? 'chip-activo' : ''}`} onClick={() => marcarHecho(i)} aria-pressed={!!d.hecho}><Icono n="check" tam={16} /> {d.hecho ? 'La llevó' : 'Marcar que la llevó'}</button>
                  <button className="chip" onClick={() => actualizar(e => { e.loncheras!.dias[i] = cambiarDia(e.loncheras!.dias, i, evitar); })}>Cambiar</button>
                </div>
              </Tarjeta>
            ))}
          </Item>
          {conPack > 0 && (
            <Item as="section" className="tarjeta pack-semana">
              <p className="kicker kicker-dorado">Tu pack para la semana</p>
              <h2>{conPack} días con AndiBite</h2>
              <p>{quedan >= conPack ? `Tienes ${quedan} brownies en tu despensa: te alcanza.` : 'Te faltan brownies para esta semana. El pack de 6 por WhatsApp cuesta S/26.90.'}</p>
              {quedan >= conPack
                ? <Link to="/despensa" className="boton boton-crema"><Icono n="bolsa" tam={20} /><span>Ver mi despensa</span></Link>
                : <a className="boton boton-whatsapp" href={enlaceWhatsApp(whatsapp, mensajePedido({ pack6: 1 }, { motivo: `Es para las loncheras de la semana de ${nino.apodo}.` }))} target="_blank" rel="noopener noreferrer"><Icono n="whatsapp" tam={20} /><span>Pedir el pack por WhatsApp</span></a>}
            </Item>
          )}
          <Item as="section" className="tarjeta compras">
            <h2>Lista de compras</h2>
            <ul>{vigente.compras.map(c => {
              const ok = vigente.comprado?.includes(c);
              return <li key={c}><label className={ok ? 'tachado' : ''}><input type="checkbox" checked={!!ok} onChange={() => actualizar(e => { const l = e.loncheras!.comprado ||= []; e.loncheras!.comprado = l.includes(c) ? l.filter(x => x !== c) : [...l, c]; })} />{c}</label></li>;
            })}</ul>
          </Item>
          <Item><p className="nota centro">Plan del recetario de AndiBite. El hierro de cada lonchera es aproximado (CENAN).</p></Item>
          <Item><Boton tipo="secundario" ancho icono="lonchera" onClick={() => setEditar(true)}>Armar otra semana</Boton></Item>
        </>
      )}
    </Cascada>
  );
}
