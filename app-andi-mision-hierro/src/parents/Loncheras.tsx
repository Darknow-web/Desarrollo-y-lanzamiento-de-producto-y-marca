import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icono from '../components/Icono';
import { Boton, Encabezado, Interruptor, Tarjeta, Vacio, aviso } from '../components/ui';
import SelectorNino from './SelectorNino';
import { actualizar, ninoActivo, nuevoId, useEstado } from '../lib/estado';
import { hoyISO, lunesDe, semanaDe } from '../lib/fechas';
import { obtenerConfig, pedirPlanIA } from '../lib/api';
import { GUSTOS, RESTRICCIONES, cambiarDia, planRecetario } from '../data/loncheras';

export default function Loncheras() {
  const nino = useEstado(ninoActivo);
  const plan = useEstado(e => e.loncheras);
  const [ia, setIa] = useState(false);
  const [usarIa, setUsarIa] = useState(true);
  const [gustos, setGustos] = useState<string[]>([]);
  const [evitar, setEvitar] = useState<string[]>([]);
  const [conAndi, setConAndi] = useState(true);
  const [cargando, setCargando] = useState(false);
  const [editar, setEditar] = useState(false);
  const ir = useNavigate();
  useEffect(() => { obtenerConfig().then(c => setIa(c.ia)); }, []);

  if (!nino) return (
    <div className="pantalla"><Encabezado titulo="Loncheras" />
      <Vacio icono="lonchera" titulo="Crea el perfil de tu hijo" texto="Armamos las loncheras según su edad.">
        <Boton onClick={() => ir('/bienvenida?volver=/loncheras')}>Crear perfil</Boton></Vacio></div>
  );

  const vigente = plan && plan.ninoId === nino.id && plan.semana === lunesDe(hoyISO()) && !editar ? plan : null;
  const alternar = (lista: string[], v: string, set: (l: string[]) => void) => set(lista.includes(v) ? lista.filter(x => x !== v) : [...lista, v]);

  const armar = async () => {
    setCargando(true);
    const base = { semana: lunesDe(hoyISO()), ninoId: nino.id, comprado: [] as string[] };
    if (ia && usarIa) {
      try {
        const r = await pedirPlanIA({ edad: nino.edad, gustos, evitar: evitar.map(id => RESTRICCIONES.find(x => x.id === id)!.nombre), incluirAndiBite: conAndi });
        actualizar(e => { e.loncheras = { ...base, fuente: 'ia', dias: r.dias.map(d => ({ ...d, andibite: /andibite/i.test(d.principal + d.fuenteHierro) })), compras: r.compras, consejo: r.consejo }; });
        setCargando(false); setEditar(false); return;
      } catch { aviso('La IA no respondió: usamos nuestro recetario'); }
    }
    const r = planRecetario({ evitar, incluirAndiBite: conAndi });
    actualizar(e => { e.loncheras = { ...base, fuente: 'recetario', ...r }; });
    setCargando(false); setEditar(false);
  };

  const marcarHecho = (i: number) => actualizar(e => {
    const d = e.loncheras!.dias[i]; d.hecho = !d.hecho;
    const fecha = semanaDe(e.loncheras!.semana)[i];
    if (d.hecho) e.registros.push({ id: `lon-${e.loncheras!.semana}-${i}-${nuevoId()}`, ninoId: e.loncheras!.ninoId, fecha, alimentoId: 'lonchera', nombre: `Lonchera: ${d.principal}`, mg: d.hierroMg, hemo: /sangrecita|hígado|bazo|res|pescado|carne|pollo|andibite/i.test(d.fuenteHierro), conVitC: true });
    else e.registros = e.registros.filter(r => !r.id.startsWith(`lon-${e.loncheras!.semana}-${i}-`));
  });

  const compartir = async () => {
    if (!vigente) return;
    const t = `Loncheras de ${nino.apodo}:\n` + vigente.dias.map(d => `• ${d.dia}: ${d.principal} + ${d.fruta} + ${d.bebida}`).join('\n') + `\n\nCompras: ${vigente.compras.join(', ')}`;
    try { if (navigator.share) await navigator.share({ title: 'Loncheras de la semana', text: t }); else { await navigator.clipboard.writeText(t); aviso('Copiado'); } } catch { /* cancelado */ }
  };

  return (
    <div className="pantalla loncheras">
      <Encabezado titulo="Loncheras de la semana" accion={vigente ? <button className="btn-icono" onClick={compartir} aria-label="Compartir"><Icono n="compartir" /></button> : undefined} />
      <SelectorNino />
      {!vigente ? (
        <Tarjeta className="armar">
          <h2>Armemos la semana de {nino.apodo}</h2>
          <p className="nota">Cada día: un principal con hierro, una fruta con vitamina C y una bebida. Nada frito ni con octógono.</p>
          <div className="campo"><span>Le gusta</span><div className="chips">{GUSTOS.map(g => <button key={g} className={`chip ${gustos.includes(g) ? 'chip-activo' : ''}`} onClick={() => alternar(gustos, g, setGustos)}>{g}</button>)}</div></div>
          <div className="campo"><span>Evitar (alergias o rechazos)</span><div className="chips">{RESTRICCIONES.map(r => <button key={r.id} className={`chip ${evitar.includes(r.id) ? 'chip-activo chip-evitar' : ''}`} onClick={() => alternar(evitar, r.id, setEvitar)}>{r.nombre}</button>)}</div></div>
          <Interruptor activo={conAndi} alCambiar={setConAndi} etiqueta="Incluir AndiBite" detalle="Como complemento, 2 días como máximo" />
          {ia && <Interruptor activo={usarIa} alCambiar={setUsarIa} etiqueta="Ideas nuevas con IA" detalle="Gemini arma un plan distinto cada semana" />}
          <Boton ancho icono="rayo" onClick={armar} deshabilitado={cargando}>{cargando ? 'Armando…' : 'Armar mi semana'}</Boton>
        </Tarjeta>
      ) : (
        <>
          <div className="dias-lonchera">
            {vigente.dias.map((d, i) => (
              <Tarjeta key={d.dia} className={`dia-lonchera ${d.hecho ? 'hecho' : ''}`}>
                <div className="dia-cabeza"><strong>{d.dia}</strong><span className="mg">~{d.hierroMg} mg</span></div>
                <h3>{d.principal}</h3>
                <p className="acompana"><span>🍊 {d.fruta}</span><span>💧 {d.bebida}</span></p>
                <p className="fuente">Hierro de: {d.fuenteHierro}</p>
                <details><summary>Cómo prepararla</summary><p>{d.preparacion}</p></details>
                <div className="dia-acciones">
                  <button className={`chip ${d.hecho ? 'chip-activo' : ''}`} onClick={() => marcarHecho(i)}><Icono n="check" tam={16} /> {d.hecho ? 'Hecha' : 'La llevó'}</button>
                  {vigente.fuente === 'recetario' && <button className="chip" onClick={() => actualizar(e => { e.loncheras!.dias[i] = cambiarDia(e.loncheras!.dias, i, evitar); })}>Cambiar</button>}
                </div>
              </Tarjeta>
            ))}
          </div>
          <Tarjeta className="compras">
            <h2>Lista de compras</h2>
            <ul>{vigente.compras.map(c => {
              const ok = vigente.comprado?.includes(c);
              return <li key={c}><label className={ok ? 'tachado' : ''}><input type="checkbox" checked={!!ok} onChange={() => actualizar(e => { const l = e.loncheras!.comprado ||= []; e.loncheras!.comprado = l.includes(c) ? l.filter(x => x !== c) : [...l, c]; })} />{c}</label></li>;
            })}</ul>
          </Tarjeta>
          {vigente.consejo && <Tarjeta className="consejo"><Icono n="info" /><p>{vigente.consejo}</p></Tarjeta>}
          <p className="nota">{vigente.fuente === 'ia' ? 'Plan armado con IA (Gemini) y reglas de nuestra nutricionista.' : 'Plan de nuestro recetario.'} Hierro aproximado por lonchera.</p>
          <Boton tipo="secundario" ancho icono="rayo" onClick={() => setEditar(true)}>Armar otra semana</Boton>
        </>
      )}
    </div>
  );
}
