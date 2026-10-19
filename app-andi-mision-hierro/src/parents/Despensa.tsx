import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icono from '../components/Icono';
import { Boton, Encabezado, Hoja, Paso, Tarjeta, aviso } from '../components/ui';
import { Cascada, Contador, Item } from '../components/movimiento';
import { actualizar, ninoActivo, nuevoId, obtener, registrarComida, useEstado } from '../lib/estado';
import { fechaLarga, hoyISO, nombreDia, relativa, sumarDias } from '../lib/fechas';
import { diasHastaAcabar } from '../lib/hierro';
import { obtenerConfig } from '../lib/api';
import { descargarRecordatorio } from '../lib/ics';
import { enlaceWhatsApp, mensajePedido, soles, totalPedido, type Pedido } from '../lib/whatsapp';
import { COLOR_SABOR, NOMBRE_PRESENTACION, PRECIOS, type ClavePedido } from '../data/precios';
import { ANDIBITE_ID } from '../data/alimentos';
import type { Presentacion, Sabor } from '../lib/tipos';

const pedidoInicial = (p?: Presentacion): Pedido => (p === 'pack12' ? { pack12: 1 } : { pack6: 1 });

export default function Despensa() {
  const despensa = useEstado(e => e.despensa);
  const nino = useEstado(ninoActivo);
  const [whatsapp, setWhatsapp] = useState('51941371376');
  const [hoja, setHoja] = useState(false);
  const [pedido, setPedido] = useState<Pedido>(() => pedidoInicial(obtener().despensa[0]?.presentacion));
  useEffect(() => { obtenerConfig().then(c => setWhatsapp(c.whatsapp)); }, []);

  const activos = despensa.filter(d => d.restantes > 0);
  const restantes = activos.reduce((a, d) => a + d.restantes, 0);
  const porSemana = activos.reduce((a, d) => Math.max(a, d.porSemana), 0) || 5;
  const dias = diasHastaAcabar(restantes, porSemana);
  const fin = sumarDias(hoyISO(), dias);
  const avisoDia = sumarDias(fin, -2);
  const pronto = restantes === 0 || dias <= 2;
  const total = totalPedido(pedido);
  const ultimo = despensa.find(d => d.codigo);
  const mensaje = mensajePedido(pedido, { codigo: ultimo?.codigo, sabor: ultimo && ultimo.sabor !== 'Surtido' ? ultimo.sabor : undefined });

  // Comió 1: si hay hijo, se registra como hierro de hoy (y se descuenta del primer pack abierto); si no, solo se descuenta.
  const comio = (id: string) => {
    const d = obtener().despensa.find(x => x.id === id); if (!d || d.restantes <= 0) return;
    if (nino) { const r = registrarComida(nino.id, hoyISO(), ANDIBITE_ID); if (r) aviso(`+${r.mg} mg para ${nino.apodo}`); }
    else actualizar(e => { const x = e.despensa.find(y => y.id === id); if (x) x.restantes -= 1; });
  };

  return (
    <Cascada className="pantalla despensa">
      <Encabezado titulo="Mi despensa" accion={despensa.length > 0 ? <button className="btn-icono" onClick={() => setHoja(true)} aria-label="Agregar pack"><Icono n="sumar" /></button> : undefined} />

      {despensa.length === 0 ? (
        <Item className="vacio">
          <div className="vacio-icono"><Icono n="bolsa" tam={30} /></div>
          <h3>Tu despensa está vacía</h3>
          <p>Escanea el QR de tu pack y toca "Agregar a mi despensa". Te avisamos antes de que se acabe.</p>
          <Link to="/escanear" className="boton boton-primario"><Icono n="qr" tam={20} /><span>Escanear mi pack</span></Link>
          <button className="enlace" onClick={() => setHoja(true)}>Agregarlo a mano</button>
        </Item>
      ) : (
        <>
          <Item as="section" className="despensa-hero">
            <p className="kicker">En tu despensa</p>
            <p className="despensa-cifra"><Contador valor={restantes} decimales={0} duracion={0.8} className="despensa-numero" /><span>brownies</span></p>
            <p className="despensa-texto">{restantes === 0 ? 'Se acabó tu pack.' : `Al ritmo de ${porSemana} por semana, te alcanzan hasta el ${nombreDia(fin)} ${fechaLarga(fin).replace(/ de \d{4}$/, '')}.`}</p>
          </Item>

          <Item as="section" className={`tarjeta recompra ${pronto ? 'recompra-ya' : ''}`}>
            <span className="recompra-icono"><Icono n={pronto ? 'campana' : 'calendario'} /></span>
            <div>
              <strong>{pronto ? 'Ya toca pedir' : `Te avisamos ${relativa(avisoDia)}`}</strong>
              <p>{pronto ? 'Pídelo hoy y te llega en la próxima entrega.' : `Dos días antes de que se acabe (${fechaLarga(avisoDia)}).`}</p>
              {!pronto && <button className="enlace" onClick={() => descargarRecordatorio({ titulo: 'Pedir AndiBite', fecha: avisoDia, descripcion: 'Tu pack se acaba en 2 días. Pídelo por WhatsApp desde la app.' })}>Agregar a mi calendario</button>}
            </div>
          </Item>

          <Item><Link to="/escanear" className="boton boton-secundario boton-ancho"><Icono n="qr" tam={20} /><span>Escanear un pack nuevo</span></Link></Item>

          <Item as="section" className="lista">
            {despensa.map(d => (
              <Tarjeta key={d.id} className={`item-despensa ${d.restantes === 0 ? 'vacio-item' : ''}`}>
                <div className="item-fila">
                  <span className="item-color" style={{ background: COLOR_SABOR[d.sabor] }} aria-hidden="true" />
                  <div className="item-info">
                    <strong>{NOMBRE_PRESENTACION[d.presentacion]} · {d.sabor}</strong>
                    <div className="progreso" aria-hidden="true"><i style={{ width: `${(d.restantes / d.unidades) * 100}%` }} /></div>
                    <small>Quedan {d.restantes} de {d.unidades} · desde {relativa(d.desde)}</small>
                    {d.codigo && <Link to={`/c/${d.codigo}`} className="enlace enlace-ficha"><Icono n="matraz" tam={16} /> Ficha del lote y laboratorio</Link>}
                  </div>
                  <Boton tipo="suave" onClick={() => comio(d.id)} deshabilitado={d.restantes === 0}>Comió 1</Boton>
                </div>
                <div className="item-ritmo">
                  <span>Brownies a la semana</span>
                  <Paso valor={d.porSemana} min={1} max={14} etiqueta="brownies por semana" alCambiar={v => actualizar(e => { e.despensa.find(x => x.id === d.id)!.porSemana = v; })} />
                  <button className="btn-icono" aria-label="Quitar de la despensa" onClick={() => actualizar(e => { e.despensa = e.despensa.filter(x => x.id !== d.id); })}><Icono n="basura" tam={18} /></button>
                </div>
              </Tarjeta>
            ))}
          </Item>
        </>
      )}

      {despensa.length > 0 && <Item as="section" className="tarjeta pedido" >
        <div><p className="kicker">Recompra</p><h2>Pedir por WhatsApp</h2></div>
        <p className="nota">Precios con IGV. Entregas 2 días por semana o recojo en el stand.</p>
        {(Object.keys(PRECIOS) as ClavePedido[]).map(k => (
          <div key={k} className="pedido-fila">
            <span><strong>{PRECIOS[k].nombre}</strong><small>{soles(PRECIOS[k].precio)} · {soles(PRECIOS[k].precio / PRECIOS[k].unidades)} por brownie</small></span>
            <Paso valor={pedido[k] || 0} min={0} max={10} etiqueta={PRECIOS[k].nombre} alCambiar={v => setPedido({ ...pedido, [k]: v })} />
          </div>
        ))}
        <div className="pedido-total"><span>Total</span><strong>{soles(total)}</strong></div>
        <a className={`boton boton-whatsapp boton-ancho ${total === 0 ? 'deshabilitado' : ''}`} aria-disabled={total === 0}
          href={total === 0 ? undefined : enlaceWhatsApp(whatsapp, mensaje)} target="_blank" rel="noopener noreferrer">
          <Icono n="whatsapp" tam={22} /><span>Pedir por WhatsApp</span></a>
        {total > 0 && <p className="pedido-mensaje"><span>Mensaje que se envía:</span> {mensaje}</p>}
      </Item>}
      <Agregar abierta={hoja} alCerrar={() => setHoja(false)} />
    </Cascada>
  );
}

function Agregar({ abierta, alCerrar }: { abierta: boolean; alCerrar: () => void }) {
  const [pres, setPres] = useState<Presentacion>('pack6');
  const [sabor, setSabor] = useState<Sabor | 'Surtido'>('Surtido');
  const unidades = { unidad: 1, pack6: 6, pack12: 12 }[pres];
  const ir = useNavigate();
  return (
    <Hoja abierta={abierta} alCerrar={alCerrar} titulo="Agregar a mi despensa">
      <Link to="/escanear" className="boton boton-secundario boton-ancho" onClick={alCerrar}><Icono n="qr" tam={20} /><span>Escanear el envase</span></Link>
      <p className="nota centro">O agrégalo a mano:</p>
      <div className="campo"><span>Presentación</span><div className="chips">{(['pack6', 'pack12', 'unidad'] as const).map(p => <button key={p} className={`chip ${p === pres ? 'chip-activo' : ''}`} onClick={() => setPres(p)}>{NOMBRE_PRESENTACION[p]}</button>)}</div></div>
      <div className="campo"><span>Sabor</span><div className="chips">{(['Surtido', 'Chispa', 'Andi', 'Lúcu'] as const).map(s => <button key={s} className={`chip ${s === sabor ? 'chip-activo' : ''}`} onClick={() => setSabor(s)}>{s}</button>)}</div></div>
      <Boton ancho onClick={() => {
        if (!obtener().consentimiento) { alCerrar(); ir('/bienvenida?volver=/despensa'); return; }
        actualizar(e => { e.despensa.unshift({ id: nuevoId(), presentacion: pres, sabor, unidades, restantes: unidades, porSemana: 5, desde: hoyISO() }); });
        aviso('Agregado a tu despensa'); alCerrar();
      }}>Agregar</Boton>
    </Hoja>
  );
}
