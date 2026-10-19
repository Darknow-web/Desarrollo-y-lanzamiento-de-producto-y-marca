import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icono from '../components/Icono';
import { Boton, Encabezado, Interruptor, Tarjeta, Vacio, aviso } from '../components/ui';
import { Cascada, Item } from '../components/movimiento';
import SelectorNino from './SelectorNino';
import { actualizar, ninoActivo, nuevoId, useEstado } from '../lib/estado';
import { hoyISO, lunesDe, semanaDe } from '../lib/fechas';
import { obtenerConfig } from '../lib/api';
import { enlaceWhatsApp, mensajePedido } from '../lib/whatsapp';
import { GUSTOS, RESTRICCIONES, cambiarDia, planRecetario } from '../data/loncheras';

/** Plan de loncheras con el recetario propio de AndiBite (una función pura que corre en el teléfono). */
export default function Loncheras() {
  const nino = useEstado(ninoActivo);
  const plan = useEstado(e => e.loncheras);
  const despensa = useEstado(e => e.despensa);
  const [gustos, setGustos] = useState<string[]>([]);
  const [evitar, setEvitar] = useState<string[]>([]);
  const [conAndi, setConAndi] = useState(true);
  const [editar, setEditar] = useState(false);
  const [whatsapp, setWhatsapp] = useState('51900000000');
  const ir = useNavigate();
  useEffect(() => { obtenerConfig().then(c => setWhatsapp(c.whatsapp)); }, []);

  if (!nino) return (
    <div className="pantalla"><Encabezado titulo="Loncheras" />
      <Vacio icono="lonchera" titulo="Crea el perfil de tu hijo" texto="Armamos las loncheras según su edad.">
        <Boton onClick={() => ir('/bienvenida?volver=/loncheras')}>Crear perfil</Boton></Vacio></div>
  );

  const vigente = plan && plan.ninoId === nino.id && plan.semana === lunesDe(hoyISO()) && !editar ? plan : null;
  const alternar = (lista: string[], v: string, set: (l: string[]) => void) => set(lista.includes(v) ? lista.filter(x => x !== v) : [...lista, v]);

  const armar = () => {
    const r = planRecetario({ evitar, incluirAndiBite: conAndi });
    actualizar(e => { e.loncheras = { semana: lunesDe(hoyISO()), ninoId: nino.id, comprado: [], fuente: 'recetario', ...r }; });
    setEditar(false);
  };

  const marcarHecho = (i: number) => actualizar(e => {
    const d = e.loncheras!.dias[i]; d.hecho = !d.hecho;
    const fecha = semanaDe(e.loncheras!.semana)[i];
    if (d.hecho) e.registros.push({ id: `lon-${e.loncheras!.semana}-${i}-${nuevoId()}`, ninoId: e.loncheras!.ninoId, fecha, alimentoId: 'lonchera', nombre: `Lonchera: ${d.principal}`, mg: d.hierroMg, hemo: /sangrecita|hígado|bazo|res|pescado|carne|pollo|andibite/i.test(d.fuenteHierro), conVitC: true });
    else e.registros = e.registros.filter(r => !r.id.startsWith(`lon-${e.loncheras!.semana}-${i}-`));
  });

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
          <p className="nota">Cada día: un principal con hierro, una fruta con vitamina C y una bebida sin azúcar. Nada frito ni con octógono.</p>
          <div className="campo"><span>Le gusta</span><div className="chips">{GUSTOS.map(g => <button key={g} className={`chip ${gustos.includes(g) ? 'chip-activo' : ''}`} onClick={() => alternar(gustos, g, setGustos)} aria-pressed={gustos.includes(g)}>{g}</button>)}</div></div>
          <div className="campo"><span>Evitar (alergias o rechazos)</span><div className="chips">{RESTRICCIONES.map(r => <button key={r.id} className={`chip ${evitar.includes(r.id) ? 'chip-activo chip-evitar' : ''}`} onClick={() => alternar(evitar, r.id, setEvitar)} aria-pressed={evitar.includes(r.id)}>{r.nombre}</button>)}</div></div>
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
                <p className="acompana"><span>{d.fruta}</span><span aria-hidden="true">·</span><span>{d.bebida}</span></p>
                <p className="fuente">Hierro de: {d.fuenteHierro}</p>
                <details><summary>Cómo prepararla</summary><p>{d.preparacion}</p></details>
                <div className="dia-acciones">
                  <button className={`chip ${d.hecho ? 'chip-activo' : ''}`} onClick={() => marcarHecho(i)} aria-pressed={!!d.hecho}><Icono n="check" tam={16} /> {d.hecho ? 'La llevó' : 'Marcar: la llevó'}</button>
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
