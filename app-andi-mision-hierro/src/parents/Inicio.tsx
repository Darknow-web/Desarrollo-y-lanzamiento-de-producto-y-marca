import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Andi from '../components/Andi';
import Icono from '../components/Icono';
import { Cascada, Item } from '../components/movimiento';
import SelectorNino from './SelectorNino';
import { ZonaEscaneo } from './Escanear';
import { ninoActivo, useEstado } from '../lib/estado';
import { diasEntre, hoyISO, nombreDia, relativa, sumarDias, diaCorto, fechaLarga } from '../lib/fechas';
import { diasHastaAcabar, resumenSemana } from '../lib/hierro';
import { consultarPuntos, type RespuestaCodigo } from '../lib/api';
import type { Punto } from '../lib/tipos';

const SALUDO = () => { const h = new Date().getHours(); return h < 12 ? 'Buenos días' : h < 19 ? 'Buenas tardes' : 'Buenas noches'; };

function Marca() {
  return (
    <header className="marca-cabeza">
      <img src="/marca/logo-andibite.png" alt="AndiBite" width={150} height={51} />
      <Link to="/mas" className="btn-icono" aria-label="Más opciones y ajustes"><Icono n="ajustes" /></Link>
    </header>
  );
}

/** Primera visita (sin escanear): una sola tarea, escanear el envase. */
function Nuevo() {
  return (
    <Cascada className="pantalla inicio inicio-nuevo">
      <Item><Marca /></Item>
      <Item className="hero-escaneo">
        <div className="hero-andi"><Andi tam={78} className="andi-flota" /><span className="burbuja-padre">Hola, soy Andi.</span></div>
        <p className="kicker">Hierro medido. Sabor a brownie.</p>
        <h1 className="titulo-grande">Escanea el QR de tu envase</h1>
        <p className="lead">Mira el hierro que midió el laboratorio en tu lote. No necesitas registrarte.</p>
      </Item>
      <Item><ZonaEscaneo /></Item>
      <Item className="lo-que-hay">
        <p className="kicker kicker-suave">Y además</p>
        <ul>
          <li><Icono n="gota" /><span>Semáforo de hierro de la semana</span></li>
          <li><Icono n="lonchera" /><span>Loncheras con hierro y su lista de compras</span></li>
          <li><Icono n="bolsa" /><span>Aviso de recompra y pedido por WhatsApp</span></li>
        </ul>
      </Item>
      <Item><p className="nota-legal">AndiBite aporta hierro; no reemplaza una alimentación variada ni las indicaciones de tu pediatra.</p></Item>
    </Cascada>
  );
}

export default function Inicio() {
  const nino = useEstado(ninoActivo);
  const registros = useEstado(e => e.registros);
  const despensa = useEstado(e => e.despensa);
  const vistos = useEstado(e => e.codigosVistos);
  const ninos = useEstado(e => e.ninos.length);
  const hemo = useEstado(e => (nino ? e.hemoglobina[nino.id] : undefined));
  const plan = useEstado(e => e.loncheras);
  const [punto, setPunto] = useState<Punto | null>(null);
  useEffect(() => { consultarPuntos().then(p => setPunto(p[0] || null)).catch(() => {}); }, []);
  const ultimo = useMemo(() => {
    const v = vistos[0]; if (!v) return null;
    try { const r = JSON.parse(localStorage.getItem(`andi.cache.c.${v.code}`) || 'null') as RespuestaCodigo | null; return { code: v.code, lote: r?.lote }; } catch { return { code: v.code, lote: undefined }; }
  }, [vistos]);

  if (!vistos.length && !ninos && !despensa.length) return <Nuevo />;

  const hoy = hoyISO();
  const semana = nino ? resumenSemana(registros, nino.id, hoy) : null;
  const restantes = despensa.reduce((a, d) => a + d.restantes, 0);
  const porSemana = despensa.filter(d => d.restantes > 0).reduce((a, d) => Math.max(a, d.porSemana), 0) || 5;
  const dias = diasHastaAcabar(restantes, porSemana);
  const diaLonchera = plan && plan.ninoId === nino?.id ? plan.dias.find(d => d.dia.toLowerCase().startsWith(nombreDia(hoy).slice(0, 3))) : undefined;

  return (
    <Cascada className="pantalla inicio">
      <Item><Marca /></Item>
      <Item className="inicio-saludo">
        <div>
          <p className="saludo">{SALUDO()}</p>
          <h1 className="titulo-pantalla">{nino ? `La semana de ${nino.apodo}` : 'Tu semana con AndiBite'}</h1>
        </div>
        <Andi tam={60} className="andi-mini" />
      </Item>
      {ninos > 0 && <Item><SelectorNino /></Item>}

      {ultimo && (
        <Item>
          <Link to={`/c/${ultimo.code}`} className="tarjeta tarjeta-lote">
            <span className="kicker kicker-claro">Tu último lote{ultimo.lote ? ` · ${ultimo.lote.sabor}` : ''}</span>
            <span className="tarjeta-lote-num">{ultimo.lote ? <>{ultimo.lote.hierroMgPorUnidad.toFixed(1)}<small> mg de hierro por brownie</small></> : ultimo.code}</span>
            <span className="tarjeta-lote-pie">Ver ficha e informe <Icono n="derecha" tam={18} /></span>
          </Link>
        </Item>
      )}

      {semana && (
        <Item>
          <Link to="/hierro" className={`tarjeta semaforo-resumen semaforo-${semana.color}`}>
            <div className="semaforo-cabeza">
              <span className="semaforo-luces" aria-hidden="true"><i /><i /><i /></span>
              <small>Semáforo de hierro</small>
            </div>
            <strong className="semaforo-cifra">{semana.diasConHierro} <span>de 7 días</span></strong>
            <span className="semaforo-texto">{semana.color === 'verde' ? 'Muy buena semana.' : semana.color === 'ambar' ? 'Vas bien: suma uno o dos días más.' : 'Suma una fuente de hierro hoy.'}</span>
            <div className="semana-mini" aria-hidden="true">
              {semana.dias.map(d => <span key={d.fecha} className={`${d.conHierro ? 'lleno' : ''} ${d.fecha === hoy ? 'hoy' : ''}`}>{diaCorto(d.fecha)[0]}</span>)}
            </div>
          </Link>
        </Item>
      )}

      <Item className="rejilla-2">
        <Link to="/despensa" className={`tarjeta mini ${restantes > 0 && dias <= 2 ? 'alerta' : ''}`}>
          <Icono n="bolsa" />
          <strong>{restantes > 0 ? `${restantes} brownies` : 'Despensa'}</strong>
          <small>{restantes > 0 ? (dias <= 0 ? 'Se acabó hoy' : `Alcanza hasta ${relativa(sumarDias(hoy, dias))}`) : 'Agrega tu pack'}</small>
        </Link>
        <Link to="/hemoglobina" className={`tarjeta mini ${hemo?.proxima && diasEntre(hoy, hemo.proxima) <= 7 && diasEntre(hoy, hemo.proxima) >= 0 ? 'alerta' : ''}`}>
          <Icono n="calendario" />
          <strong>Hemoglobina</strong>
          <small>{hemo?.proxima ? `Control ${relativa(hemo.proxima)}` : 'Anota el próximo control'}</small>
        </Link>
      </Item>

      <Item>
        <Link to="/loncheras" className="tarjeta lonchera-hoy">
          <span className="kicker">{diaLonchera ? `Lonchera del ${nombreDia(hoy)}` : 'Loncheras de la semana'}</span>
          {diaLonchera ? (
            <><strong>{diaLonchera.principal}</strong><span>{diaLonchera.fruta} · {diaLonchera.bebida} · unos {diaLonchera.hierroMg} mg de hierro</span></>
          ) : <strong>Arma 5 loncheras con hierro en un minuto</strong>}
        </Link>
      </Item>

      <Item>
        <Link to="/ninos" className="tarjeta tarjeta-ninos">
          <Andi tam={78} piezas={['chullo']} />
          <div><strong>Misión Hierro</strong><span>Juegos para que tu hijo aprenda a comer hierro. Sin compras ni publicidad.</span></div>
          <Icono n="derecha" />
        </Link>
      </Item>

      {punto && (
        <Item>
          <Link to="/donde" className="tarjeta punto-proximo">
            <span className="punto-icono"><Icono n="mapa" /></span>
            <div><small>Próximamente · {fechaLarga(punto.desde)}</small><strong>{punto.nombre}</strong><span>{punto.lugar}</span></div>
          </Link>
        </Item>
      )}
      <Item><p className="nota-legal">AndiBite aporta hierro; no reemplaza una alimentación variada ni las indicaciones de tu pediatra.</p></Item>
    </Cascada>
  );
}
