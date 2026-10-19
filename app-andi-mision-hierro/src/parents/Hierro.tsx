import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icono from '../components/Icono';
import { Boton, Encabezado, Hoja, Interruptor, Tarjeta, Vacio, aviso } from '../components/ui';
import SelectorNino from './SelectorNino';
import { Cascada, Contador, Item } from '../components/movimiento';
import { actualizar, ninoActivo, nuevoId, useEstado } from '../lib/estado';
import { diaCorto, hoyISO, nombreDia, semanaDe, sumarDias, fechaCorta } from '../lib/fechas';
import { referenciaDiaria, resumenSemana } from '../lib/hierro';
import { ALIMENTOS, ANDIBITE_ID, CONSEJOS, HIERRO_ANDIBITE_REF } from '../data/alimentos';

export default function Hierro() {
  const nino = useEstado(ninoActivo);
  const registros = useEstado(e => e.registros);
  const [semanaRef, setSemanaRef] = useState(hoyISO());
  const [diaSel, setDiaSel] = useState(hoyISO());
  const [hoja, setHoja] = useState(false);
  const ir = useNavigate();
  const consejo = useMemo(() => CONSEJOS[new Date().getDate() % CONSEJOS.length], []);

  if (!nino) return (
    <div className="pantalla"><Encabezado titulo="Semáforo de hierro" />
      <Vacio icono="gota" titulo="Crea el perfil de tu hijo" texto="Así llevamos su semáforo de hierro de la semana.">
        <Boton onClick={() => ir('/bienvenida?volver=/hierro')}>Crear perfil</Boton>
      </Vacio></div>
  );

  const r = resumenSemana(registros, nino.id, semanaRef);
  const ref = referenciaDiaria(nino.edad);
  const max = Math.max(ref, ...r.dias.map(d => d.mg)) * 1.1;
  const delDia = registros.filter(x => x.ninoId === nino.id && x.fecha === diaSel);
  const hoy = hoyISO();
  const esActual = semanaDe(hoy)[0] === semanaDe(semanaRef)[0];

  return (
    <Cascada className="pantalla hierro">
      <Encabezado titulo="Semáforo de hierro" />
      <Item><SelectorNino /></Item>
      <Item as="section" className={`semaforo-hero semaforo-${r.color}`}>
        <span className="semaforo-luces grande" aria-hidden="true"><i /><i /><i /></span>
        <p className="semaforo-cifra"><Contador valor={r.diasConHierro} decimales={0} duracion={0.7} /> <span>de 7 días con hierro</span></p>
        <p className="semaforo-mensaje">{r.color === 'verde' ? `${nino.apodo} comió una fuente de hierro casi todos los días. Sigan así.` : r.color === 'ambar' ? 'Vas bien. La meta es 5 días o más con una fuente de hierro.' : 'Suma una fuente de hierro hoy: sangrecita, hígado, menestras o un AndiBite.'}</p>
        <p className="semaforo-mg">{r.mgSemana} mg registrados esta semana</p>
      </Item>

      <Item className="semana-nav">
        <button className="btn-icono" onClick={() => setSemanaRef(sumarDias(semanaRef, -7))} aria-label="Semana anterior"><Icono n="atras" /></button>
        <span>{esActual ? 'Esta semana' : `Semana del ${fechaCorta(semanaDe(semanaRef)[0])}`}</span>
        <button className="btn-icono" disabled={esActual} onClick={() => setSemanaRef(sumarDias(semanaRef, 7))} aria-label="Semana siguiente"><Icono n="derecha" /></button>
      </Item>
      <Item as="section" className="tarjeta grafico-semana">
        <div className="barras" role="list">
          <div className="linea-ref" style={{ bottom: `calc(40px + ${(ref / max).toFixed(3)} * (100% - 78px))` }}><span>{ref} mg al día en toda su alimentación</span></div>
          {r.dias.map(d => (
            <button key={d.fecha} role="listitem" className={`barra-dia ${d.fecha === diaSel ? 'sel' : ''} ${d.fecha > hoy ? 'futuro' : ''}`}
              onClick={() => setDiaSel(d.fecha)} aria-label={`${nombreDia(d.fecha)}: ${d.mg} mg`} disabled={d.fecha > hoy}>
              <span className="barra-valor">{d.mg > 0 ? d.mg : ''}</span>
              <span className="barra-columna"><i style={{ height: `${(d.mg / max) * 100}%` }} className={d.hemo ? 'hemo' : ''} /></span>
              <span className="barra-dia-nombre">{diaCorto(d.fecha)}</span>
              <span className={`barra-vitc ${d.conVitC ? 'si' : ''}`} aria-hidden="true" />
            </button>
          ))}
        </div>
        <p className="leyenda"><span><i className="hemo" /> Hierro hemo</span><span><i /> Otras fuentes</span><span><i className="vitc" /> Con vitamina C</span></p>
      </Item>

      <Item as="section" className="lista">
        <div className="lista-cabeza"><h2>{diaSel === hoy ? 'Hoy' : nombreDia(diaSel)[0].toUpperCase() + nombreDia(diaSel).slice(1)}</h2>
          <Boton icono="sumar" tipo="suave" onClick={() => setHoja(true)}>Registrar</Boton></div>
        {delDia.length === 0 ? <p className="nota">Aún no registras fuentes de hierro este día.</p> : delDia.map(x => (
          <div key={x.id} className="fila">
            <span className="fila-emoji" aria-hidden="true">{x.alimentoId === ANDIBITE_ID ? '🍫' : ALIMENTOS.find(a => a.id === x.alimentoId)?.emoji || '🍽️'}</span>
            <span><strong>{x.nombre}</strong><small>{x.mg} mg{x.hemo ? ' · hemínico' : ''}{x.conVitC ? ' · con vitamina C' : ''}</small></span>
            <button className="btn-icono" aria-label={`Borrar ${x.nombre}`} onClick={() => actualizar(e => { e.registros = e.registros.filter(y => y.id !== x.id); })}><Icono n="basura" tam={18} /></button>
          </div>
        ))}
      </Item>
      <Item><Tarjeta className="consejo"><Icono n="info" /><p>{consejo}</p></Tarjeta></Item>
      <Item><p className="nota">El semáforo es orientativo: cuenta los días con una fuente de hierro, no reemplaza al pediatra. Los mg son aproximados (Tablas Peruanas de Composición de Alimentos, CENAN).</p></Item>
      <Registrar abierta={hoja} alCerrar={() => setHoja(false)} ninoId={nino.id} apodo={nino.apodo} fecha={diaSel} />
    </Cascada>
  );
}

function Registrar({ abierta, alCerrar, ninoId, apodo, fecha }: { abierta: boolean; alCerrar: () => void; ninoId: string; apodo: string; fecha: string }) {
  const [sel, setSel] = useState<string | null>(null);
  const [vitC, setVitC] = useState(true);
  const opciones = [{ id: ANDIBITE_ID, nombre: 'AndiBite', porcion: '1 brownie de 20 g', mg: HIERRO_ANDIBITE_REF, hemo: true, emoji: '🍫' }, ...ALIMENTOS];
  const guardar = () => {
    const a = opciones.find(o => o.id === sel); if (!a) return;
    actualizar(e => {
      e.registros.push({ id: nuevoId(), ninoId, fecha, alimentoId: a.id, nombre: a.nombre, mg: a.mg, hemo: a.hemo, conVitC: vitC });
      if (a.id === ANDIBITE_ID) { const d = e.despensa.find(x => x.restantes > 0); if (d) d.restantes -= 1; }
    });
    aviso(`+${a.mg} mg para ${apodo}`); setSel(null); alCerrar();
  };
  return (
    <Hoja abierta={abierta} alCerrar={alCerrar} titulo={`¿Qué comió ${apodo}?`}>
      <div className="alimentos">
        {opciones.map(o => (
          <button key={o.id} className={`alimento ${sel === o.id ? 'sel' : ''}`} onClick={() => setSel(o.id)} aria-pressed={sel === o.id}>
            <span aria-hidden="true">{o.emoji}</span><strong>{o.nombre}</strong><small>{o.porcion}</small><em>{o.mg} mg</em>
          </button>
        ))}
      </div>
      <Interruptor activo={vitC} alCambiar={setVitC} etiqueta="Lo acompañó con fruta o verdura con vitamina C" detalle="Mandarina, naranja, fresa, limón, tomate…" />
      <Boton ancho deshabilitado={!sel} onClick={guardar}>Guardar</Boton>
    </Hoja>
  );
}
