import { useEffect, useState } from 'react';
import Icono from '../components/Icono';
import { Boton, Encabezado, Hoja, Paso, Tarjeta, Vacio, aviso, soles } from '../components/ui';
import { actualizar, ninoActivo, nuevoId, useEstado } from '../lib/estado';
import { fechaLarga, hoyISO, relativa, sumarDias } from '../lib/fechas';
import { diasHastaAcabar } from '../lib/hierro';
import { obtenerConfig } from '../lib/api';
import { descargarRecordatorio } from '../lib/ics';
import { COLOR_SABOR, NOMBRE_PRESENTACION, PRECIOS } from '../data/precios';
import { ANDIBITE_ID, HIERRO_ANDIBITE_REF } from '../data/alimentos';
import type { Presentacion, Sabor } from '../lib/tipos';

export default function Despensa() {
  const despensa = useEstado(e => e.despensa);
  const nino = useEstado(ninoActivo);
  const [whatsapp, setWhatsapp] = useState('51900000000');
  const [hoja, setHoja] = useState(false);
  const [pedido, setPedido] = useState({ pack6: 1, pack12: 0, degustacion: 0 });
  useEffect(() => { obtenerConfig().then(c => setWhatsapp(c.whatsapp)); }, []);

  const activos = despensa.filter(d => d.restantes > 0);
  const restantes = activos.reduce((a, d) => a + d.restantes, 0);
  const porSemana = activos.reduce((a, d) => Math.max(a, d.porSemana), 0) || 5;
  const dias = diasHastaAcabar(restantes, porSemana);
  const fin = sumarDias(hoyISO(), dias);
  const total = pedido.pack6 * PRECIOS.pack6.precio + pedido.pack12 * PRECIOS.pack12.precio + pedido.degustacion * PRECIOS.degustacion.precio;

  const mensaje = () => {
    const partes = [pedido.pack6 && `${pedido.pack6} pack de 6`, pedido.pack12 && `${pedido.pack12} pack de 12`, pedido.degustacion && `${pedido.degustacion} caja degustación`].filter(Boolean).join(', ');
    const ultimo = despensa.find(d => d.codigo)?.codigo;
    return `Hola AndiBite, quiero pedir: ${partes} (total ${soles(total)}).${ultimo ? ` Mi último envase: ${ultimo}.` : ''}`;
  };
  const comio = (id: string) => actualizar(e => {
    const d = e.despensa.find(x => x.id === id); if (!d || d.restantes <= 0) return;
    d.restantes -= 1;
    if (nino) e.registros.push({ id: nuevoId(), ninoId: nino.id, fecha: hoyISO(), alimentoId: ANDIBITE_ID, nombre: `AndiBite ${d.sabor}`, mg: HIERRO_ANDIBITE_REF, hemo: true, conVitC: false, loteId: d.loteId });
  });

  return (
    <div className="pantalla despensa">
      <Encabezado titulo="Mi despensa" atras="/" accion={<button className="btn-icono" onClick={() => setHoja(true)} aria-label="Agregar pack"><Icono n="sumar" /></button>} />
      {despensa.length === 0 ? (
        <Vacio icono="bolsa" titulo="Tu despensa está vacía" texto="Escanea el código de tu pack o agrégalo a mano. Te avisamos antes de que se acabe.">
          <Boton onClick={() => setHoja(true)} icono="sumar">Agregar pack</Boton>
        </Vacio>
      ) : (
        <>
          <Tarjeta className={`despensa-resumen ${dias <= 2 ? 'alerta' : ''}`}>
            <div className="despensa-num"><strong>{restantes}</strong><span>brownies</span></div>
            <div>
              <p>{restantes === 0 ? 'Se acabó tu pack.' : dias <= 2 ? `¡Se te está acabando! Alcanza hasta ${relativa(fin)}.` : `Te alcanza hasta ${relativa(fin)} (${fechaLarga(fin)}).`}</p>
              {restantes > 0 && <button className="enlace" onClick={() => descargarRecordatorio({ titulo: 'Pedir AndiBite', fecha: sumarDias(fin, -2), descripcion: 'Tu pack se acaba en 2 días. Pídelo por WhatsApp desde la app.' })}><Icono n="calendario" tam={16} /> Recordármelo en el calendario</button>}
            </div>
          </Tarjeta>
          <section className="lista">
            {despensa.map(d => (
              <Tarjeta key={d.id} className={`item-despensa ${d.restantes === 0 ? 'vacio-item' : ''}`}>
                <span className="item-color" style={{ background: COLOR_SABOR[d.sabor] }} />
                <div className="item-info">
                  <strong>{NOMBRE_PRESENTACION[d.presentacion]} · {d.sabor}</strong>
                  <div className="progreso"><i style={{ width: `${(d.restantes / d.unidades) * 100}%` }} /></div>
                  <small>{d.restantes} de {d.unidades} · desde {relativa(d.desde)}</small>
                </div>
                <div className="item-acciones">
                  <Boton tipo="suave" onClick={() => comio(d.id)} deshabilitado={d.restantes === 0}>Comió 1</Boton>
                  <button className="btn-icono" aria-label="Quitar" onClick={() => actualizar(e => { e.despensa = e.despensa.filter(x => x.id !== d.id); })}><Icono n="basura" tam={18} /></button>
                </div>
                <div className="item-ritmo"><span>Come a la semana</span><Paso valor={d.porSemana} min={1} max={14} etiqueta="brownies por semana" alCambiar={v => actualizar(e => { e.despensa.find(x => x.id === d.id)!.porSemana = v; })} /></div>
              </Tarjeta>
            ))}
          </section>
        </>
      )}

      <Tarjeta className="pedido">
        <h2>Pedir por WhatsApp</h2>
        <p className="nota">Delivery gratis desde 2 packs. Precios con IGV.</p>
        {(['pack6', 'pack12', 'degustacion'] as const).map(k => (
          <div key={k} className="pedido-fila">
            <span><strong>{PRECIOS[k].nombre}</strong><small>{soles(PRECIOS[k].precio)}</small></span>
            <Paso valor={pedido[k]} min={0} max={10} etiqueta={PRECIOS[k].nombre} alCambiar={v => setPedido({ ...pedido, [k]: v })} />
          </div>
        ))}
        <div className="pedido-total"><span>Total</span><strong>{soles(total)}</strong></div>
        <a className={`boton boton-whatsapp boton-ancho ${total === 0 ? 'deshabilitado' : ''}`} aria-disabled={total === 0}
          href={total === 0 ? undefined : `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje())}`} target="_blank" rel="noopener noreferrer">
          <Icono n="whatsapp" tam={20} /><span>Pedir por WhatsApp</span></a>
      </Tarjeta>
      <Agregar abierta={hoja} alCerrar={() => setHoja(false)} />
    </div>
  );
}

function Agregar({ abierta, alCerrar }: { abierta: boolean; alCerrar: () => void }) {
  const [pres, setPres] = useState<Presentacion>('pack6');
  const [sabor, setSabor] = useState<Sabor | 'Surtido'>('Surtido');
  const unidades = { unidad: 1, pack6: 6, pack12: 12 }[pres];
  return (
    <Hoja abierta={abierta} alCerrar={alCerrar} titulo="Agregar a mi despensa">
      <p className="nota">Si tienes el envase, mejor escanéalo: así ves el hierro de tu lote.</p>
      <div className="campo"><span>Presentación</span><div className="chips">{(['pack6', 'pack12', 'unidad'] as const).map(p => <button key={p} className={`chip ${p === pres ? 'chip-activo' : ''}`} onClick={() => setPres(p)}>{NOMBRE_PRESENTACION[p]}</button>)}</div></div>
      <div className="campo"><span>Sabor</span><div className="chips">{(['Surtido', 'Chispa', 'Andi', 'Lúcu'] as const).map(s => <button key={s} className={`chip ${s === sabor ? 'chip-activo' : ''}`} onClick={() => setSabor(s)}>{s}</button>)}</div></div>
      <Boton ancho onClick={() => { actualizar(e => { e.despensa.unshift({ id: nuevoId(), presentacion: pres, sabor, unidades, restantes: unidades, porSemana: 5, desde: hoyISO() }); }); aviso('Agregado'); alCerrar(); }}>Agregar</Boton>
    </Hoja>
  );
}
