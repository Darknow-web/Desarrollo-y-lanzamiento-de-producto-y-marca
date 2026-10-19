import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Icono from '../components/Icono';
import { Encabezado, Tarjeta, aviso } from '../components/ui';
import { Cascada, Item } from '../components/movimiento';
import { consultarLote } from '../lib/api';
import { fechaLarga } from '../lib/fechas';
import { porCien } from './Lote';
import type { Lote } from '../lib/tipos';

/** Vista del informe de laboratorio del lote, con los mismos datos que publica la ficha. */
export default function Informe() {
  const { id = '' } = useParams();
  const [lote, setLote] = useState<Lote | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => { consultarLote(id).then(setLote).catch(() => setError(true)); }, [id]);

  if (error) return <div className="pantalla"><Encabezado titulo="Informe" atras={-1} /><Tarjeta className="error-tarjeta"><Icono n="info" tam={28} /><p>No encontramos el informe de este lote.</p></Tarjeta></div>;
  if (!lote) return <div className="pantalla"><Encabezado titulo="Informe" atras={-1} /><div className="cargando"><i /><i /><i /></div></div>;

  const peso = lote.pesoUnidadG || 20;
  const filas: [string, string, string][] = [
    ['Hierro total', `${lote.hierroMgPorUnidad.toFixed(1)} mg`, `${porCien(lote.hierroMgPorUnidad, peso)} mg`],
    ['Hierro hemo', `${(lote.hierroHemoMgPorUnidad ?? 0).toFixed(1)} mg`, `${porCien(lote.hierroHemoMgPorUnidad ?? 0, peso)} mg`],
    ['Azúcares', `${(lote.azucarGPorUnidad ?? 0).toFixed(1)} g`, `${porCien(lote.azucarGPorUnidad ?? 0, peso)} g`],
  ];
  const compartir = async () => {
    const t = `Informe ${lote.informe} · AndiBite ${lote.sabor}, lote ${lote.id}: ${lote.hierroMgPorUnidad.toFixed(1)} mg de hierro por brownie (${lote.laboratorio}).`;
    try { if (navigator.share) await navigator.share({ title: `Informe ${lote.informe}`, text: t, url: location.href }); else { await navigator.clipboard.writeText(`${t} ${location.href}`); aviso('Enlace copiado'); } } catch { /* cancelado */ }
  };

  return (
    <Cascada className="pantalla informe">
      <Encabezado titulo="Informe del laboratorio" atras={-1} accion={<button className="btn-icono" onClick={compartir} aria-label="Compartir"><Icono n="compartir" /></button>} />
      <Item as="section" className="tarjeta documento">
        <div className="documento-cabeza">
          <div><p className="kicker">Lo que dice el laboratorio</p><h1>{lote.informe}</h1></div>
          <span className="sello" aria-hidden="true"><Icono n="matraz" tam={26} /></span>
        </div>
        <dl className="documento-datos">
          <div><dt>Laboratorio</dt><dd>{lote.laboratorio}</dd></div>
          {lote.fechaInforme && <div><dt>Fecha del informe</dt><dd>{fechaLarga(lote.fechaInforme)}</dd></div>}
          <div><dt>Producto</dt><dd>AndiBite {lote.sabor}, mini brownie de {peso} g</dd></div>
          <div><dt>Lote</dt><dd>{lote.id} · producido el {fechaLarga(lote.fechaProduccion)}</dd></div>
        </dl>
        <table className="documento-tabla">
          <caption className="solo-lector">Resultados del análisis</caption>
          <thead><tr><th scope="col">Resultado</th><th scope="col">Por brownie ({peso} g)</th><th scope="col">Por 100 g</th></tr></thead>
          <tbody>{filas.map(f => <tr key={f[0]}><th scope="row">{f[0]}</th><td>{f[1]}</td><td>{f[2]}</td></tr>)}</tbody>
        </table>
        <div className="documento-octogonos">
          <strong>{lote.octogonos.length}</strong>
          <span>{lote.octogonos.length === 0 ? 'octógonos de advertencia: el lote no lleva ninguno.' : `octógonos: ${lote.octogonos.join(', ')}.`}</span>
        </div>
      </Item>
      <Item><p className="nota centro">Resumen digital del informe del laboratorio para el lote {lote.id}. Cada lote se analiza y se publica aquí.</p></Item>
    </Cascada>
  );
}
