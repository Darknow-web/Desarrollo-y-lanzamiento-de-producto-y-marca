import { useEffect, useState } from 'react';
import Icono from '../components/Icono';
import { Encabezado, Tarjeta, Vacio } from '../components/ui';
import { Cascada, Item } from '../components/movimiento';
import { consultarPuntos } from '../lib/api';
import { fechaLarga, hoyISO } from '../lib/fechas';
import type { Punto } from '../lib/tipos';

const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'set', 'oct', 'nov', 'dic'];

function rango(desde: string, hasta?: string) {
  if (!hasta || hasta === desde) return `Desde el ${fechaLarga(desde)}`;
  return `Del ${fechaLarga(desde)} al ${fechaLarga(hasta)}`;
}

export default function Donde() {
  const [puntos, setPuntos] = useState<Punto[] | null>(null);
  useEffect(() => { consultarPuntos().then(setPuntos).catch(() => setPuntos([])); }, []);
  const hoy = hoyISO();
  return (
    <Cascada className="pantalla donde">
      <Encabezado titulo="Dónde comprar" atras="/mas" />
      <Item><p className="lead">En el stand tu hijo prueba antes de comprar. Estos son los próximos puntos en Lima.</p></Item>
      {puntos === null ? <div className="cargando"><i /><i /><i /></div> : puntos.length === 0 ? (
        <Vacio icono="mapa" titulo="Pronto anunciamos nuevos puntos" texto="Mientras tanto, pide por WhatsApp desde tu despensa." />
      ) : puntos.map(p => {
        const [a, m, d] = p.desde.split('-').map(Number);
        const abierto = p.desde <= hoy && (!p.hasta || p.hasta >= hoy);
        const unico = !/\su\s|\so\s/.test(p.lugar);
        return (
          <Item key={p.id}>
            <Tarjeta className="punto">
              <div className="punto-fecha" aria-hidden="true"><strong>{d}</strong><span>{MESES[m - 1]}</span><small>{a}</small></div>
              <div className="punto-info">
                <span className={`etiqueta ${abierto ? 'etiqueta-abierto' : ''}`}>{abierto ? 'Abierto' : 'Próximamente'}</span>
                <h2>{p.nombre}</h2>
                <p>{p.lugar}{p.distrito !== p.lugar ? ` · ${p.distrito}` : ''}</p>
                <small>{rango(p.desde, p.hasta)}{p.horario ? ` · ${p.horario}` : ''}</small>
                {unico && <a className="enlace" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${p.lugar} ${p.distrito} Lima`)}`} target="_blank" rel="noopener noreferrer"><Icono n="mapa" tam={18} /> Cómo llegar</a>}
              </div>
            </Tarjeta>
          </Item>
        );
      })}
    </Cascada>
  );
}
