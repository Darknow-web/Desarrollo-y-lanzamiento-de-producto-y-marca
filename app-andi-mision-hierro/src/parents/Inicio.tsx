import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Andi from '../components/Andi';
import Icono from '../components/Icono';
import { Tarjeta } from '../components/ui';
import SelectorNino from './SelectorNino';
import { ninoActivo, useEstado } from '../lib/estado';
import { diasEntre, hoyISO, nombreDia, relativa, sumarDias, diaCorto } from '../lib/fechas';
import { diasHastaAcabar, resumenSemana } from '../lib/hierro';
import { consultarPuntos } from '../lib/api';
import type { Punto } from '../lib/tipos';

const SALUDO = () => { const h = new Date().getHours(); return h < 12 ? 'Buenos días' : h < 19 ? 'Buenas tardes' : 'Buenas noches'; };

export default function Inicio() {
  const nino = useEstado(ninoActivo);
  const registros = useEstado(e => e.registros);
  const despensa = useEstado(e => e.despensa);
  const hemo = useEstado(e => (nino ? e.hemoglobina[nino.id] : undefined));
  const plan = useEstado(e => e.loncheras);
  const [punto, setPunto] = useState<Punto | null>(null);
  useEffect(() => { consultarPuntos().then(p => setPunto(p[0] || null)).catch(() => {}); }, []);

  const hoy = hoyISO();
  const semana = nino ? resumenSemana(registros, nino.id, hoy) : null;
  const restantes = despensa.reduce((a, d) => a + d.restantes, 0);
  const porSemana = despensa.filter(d => d.restantes > 0).reduce((a, d) => Math.max(a, d.porSemana), 0) || 5;
  const dias = diasHastaAcabar(restantes, porSemana);
  const diaLonchera = plan && plan.ninoId === nino?.id ? plan.dias.find(d => d.dia.toLowerCase().startsWith(nombreDia(hoy).slice(0, 3))) : undefined;

  return (
    <div className="pantalla inicio">
      <header className="inicio-cabeza">
        <div>
          <p className="saludo">{SALUDO()}</p>
          <h1>{nino ? `La semana de ${nino.apodo}` : 'Bienvenido a AndiBite'}</h1>
        </div>
        <Andi tam={64} className="andi-mini" />
      </header>
      <SelectorNino />

      <Link to="/escanear" className="tarjeta tarjeta-escanear">
        <span className="tarjeta-escanear-icono"><Icono n="qr" tam={30} /></span>
        <span><strong>Escanea tu envase</strong><small>Mira el hierro medido en laboratorio de tu lote</small></span>
        <Icono n="derecha" />
      </Link>

      {semana && (
        <Link to="/hierro" className={`tarjeta semaforo-resumen semaforo-${semana.color}`}>
          <div className="semaforo-luz" aria-hidden="true"><i /><i /><i /></div>
          <div className="semaforo-texto">
            <small>Semáforo de hierro</small>
            <strong>{semana.diasConHierro} de 7 días</strong>
            <span>{semana.color === 'verde' ? '¡Muy buena semana!' : semana.color === 'ambar' ? 'Vas bien, suma uno o dos días más' : 'Aún hay tiempo: suma una fuente de hierro hoy'}</span>
          </div>
          <div className="semana-mini" aria-hidden="true">
            {semana.dias.map(d => <span key={d.fecha} className={`${d.conHierro ? 'lleno' : ''} ${d.fecha === hoy ? 'hoy' : ''}`}>{diaCorto(d.fecha)[0]}</span>)}
          </div>
        </Link>
      )}

      <div className="rejilla-2">
        <Link to="/despensa" className={`tarjeta mini ${restantes > 0 && dias <= 2 ? 'alerta' : ''}`}>
          <Icono n="bolsa" />
          <strong>{restantes > 0 ? `${restantes} brownies` : 'Despensa'}</strong>
          <small>{restantes > 0 ? (dias <= 0 ? 'Se acabó hoy' : `Se acaba ${relativa(sumarDias(hoy, dias))}`) : 'Agrega tu pack'}</small>
        </Link>
        <Link to="/hemoglobina" className={`tarjeta mini ${hemo?.proxima && diasEntre(hoy, hemo.proxima) <= 7 && diasEntre(hoy, hemo.proxima) >= 0 ? 'alerta' : ''}`}>
          <Icono n="calendario" />
          <strong>Hemoglobina</strong>
          <small>{hemo?.proxima ? `Control ${relativa(hemo.proxima)}` : 'Anota el próximo control'}</small>
        </Link>
      </div>

      <Link to="/loncheras" className="tarjeta lonchera-hoy">
        <div className="lonchera-hoy-cabeza"><Icono n="lonchera" /><small>{diaLonchera ? `Lonchera del ${nombreDia(hoy)}` : 'Loncheras de la semana'}</small></div>
        {diaLonchera ? (
          <>
            <strong>{diaLonchera.principal}</strong>
            <span>{diaLonchera.fruta} · {diaLonchera.bebida} · ~{diaLonchera.hierroMg} mg de hierro</span>
          </>
        ) : <strong>Arma 5 loncheras con hierro en un minuto</strong>}
      </Link>

      <Link to="/ninos" className="tarjeta tarjeta-ninos">
        <Andi tam={86} piezas={['chullo']} />
        <div><strong>Misión Hierro</strong><span>El modo para que tu hijo aprenda jugando. Sin compras ni publicidad.</span></div>
        <Icono n="derecha" />
      </Link>

      {punto && (
        <Link to="/donde" className="tarjeta punto-proximo">
          <Icono n="mapa" />
          <div><small>Encuéntranos</small><strong>{punto.nombre}</strong><span>{punto.lugar} · {punto.distrito} · {relativa(punto.desde)}</span></div>
        </Link>
      )}
      <Tarjeta className="nota-legal"><p>AndiBite aporta hierro; no reemplaza una alimentación variada ni las indicaciones de tu pediatra.</p></Tarjeta>
    </div>
  );
}
