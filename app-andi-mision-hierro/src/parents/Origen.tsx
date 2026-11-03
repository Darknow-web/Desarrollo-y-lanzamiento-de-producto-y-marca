import type { CSSProperties } from 'react';
import { useSearchParams } from 'react-router-dom';
import Icono from '../components/Icono';
import { Encabezado } from '../components/ui';
import { Cascada, Item } from '../components/movimiento';
import { ORIGENES, SILUETA_PERU, proyectar } from '../data/origen';
import { COLOR_SABOR } from '../data/precios';
import type { Sabor } from '../lib/tipos';
import { NOTA_LEGAL } from './Mas';

const SABORES: Sabor[] = ['Chispa', 'Andi', 'Lúcu'];

/** Hecho con lo nuestro: de qué parte del Perú viene cada ingrediente del brownie. */
export default function Origen() {
  const [params] = useSearchParams();
  const sabor = params.get('sabor') as Sabor | null;
  const lista = ORIGENES.filter(o => !sabor || o.sabores === 'todos' || o.sabores.includes(sabor));
  const puntos = ORIGENES.filter(o => o.lon !== undefined && o.lat !== undefined);
  const silueta = SILUETA_PERU.map(([lon, lat]) => { const p = proyectar(lon, lat); return `${p.x.toFixed(1)},${p.y.toFixed(1)}`; }).join(' ');

  return (
    <Cascada className="pantalla origen">
      <Encabezado titulo="Hecho con lo nuestro" atras={-1} />
      <Item as="section" className="origen-intro">
        <p className="kicker kicker-dorado">De dónde viene tu brownie</p>
        <h1>Hierro de aquí</h1>
        <p>Casi todo lo que lleva AndiBite se cultiva o se produce en el Perú. Este es el mapa de cada ingrediente{sabor ? ` del sabor ${sabor}` : ''}.</p>
      </Item>

      <Item className="tarjeta origen-mapa"><figure>
        <svg viewBox="0 0 240 340" role="img" aria-label="Mapa del Perú con el origen de los ingredientes">
          <polygon points={silueta} fill="#F5E8D6" stroke="#D9B48F" strokeWidth="2" strokeLinejoin="round" />
          {puntos.map(o => {
            const p = proyectar(o.lon!, o.lat!);
            return (
              <g key={o.id} transform={`translate(${p.x} ${p.y})`}>
                <circle r="11" fill={o.color} opacity=".22" /><circle r="6" fill={o.color} stroke="#fff" strokeWidth="2" />
                <text x={o.id === 'sangrecita' ? 10 : o.id === 'lucuma' || o.id === 'canihua' ? -10 : 10} y={o.id === 'sangrecita' ? 16 : 4} textAnchor={o.id === 'lucuma' || o.id === 'canihua' ? 'end' : 'start'} fontSize="11" fontWeight="700" fill="#4A2018">{o.emoji} {o.nombre.split(' ')[0]}</text>
              </g>
            );
          })}
        </svg>
        <figcaption>Cinco ingredientes peruanos y uno importado, la canela.</figcaption></figure>
      </Item>

      <Item as="section" className="origen-lista">
        {lista.map(o => (
          <article key={o.id} className="tarjeta origen-item" style={{ '--c': o.color } as CSSProperties}>
            <span className="origen-emoji" aria-hidden="true">{o.emoji}</span>
            <div>
              <h2>{o.nombre} <span className="origen-region">{o.region}</span></h2>
              <p className="origen-lugar">{o.lugar}</p>
              <p>{o.dato}</p>
              <p className="origen-pie">
                <small>Fuente: {o.fuente}</small>
                <span className="chips">{(o.sabores === 'todos' ? SABORES : o.sabores).map(s => <i key={s} style={{ background: COLOR_SABOR[s] }}>{s}</i>)}</span>
              </p>
              {o.historia && <p className="origen-historia"><Icono n="ninos" tam={16} /> Tu hijo lo descubre en Misión Hierro, historia {o.historia}.</p>}
            </div>
          </article>
        ))}
      </Item>

      <Item><p className="nota centro">El personaje del envase es Andi, un niño de los Andes; en las historias de la app viaja por estos lugares con Killa, su llamita.</p><p className="nota-legal">{NOTA_LEGAL}</p></Item>
    </Cascada>
  );
}
