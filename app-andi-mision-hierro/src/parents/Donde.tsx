import { useEffect, useState } from 'react';
import Icono from '../components/Icono';
import { Encabezado, Tarjeta, Vacio } from '../components/ui';
import { consultarPuntos } from '../lib/api';
import { fechaLarga } from '../lib/fechas';
import type { Punto } from '../lib/tipos';

function rango(desde: string, hasta?: string) {
  if (!hasta || hasta === desde) return fechaLarga(desde);
  const [d1, m1, a1] = fechaLarga(desde).split(' de '); const [d2, m2, a2] = fechaLarga(hasta).split(' de ');
  if (a1 === a2 && m1 === m2) return `Del ${d1} al ${d2} de ${m2}`;
  if (a1 === a2) return `Del ${d1} de ${m1} al ${d2} de ${m2}`;
  return `Del ${fechaLarga(desde)} al ${fechaLarga(hasta)}`;
}

export default function Donde() {
  const [puntos, setPuntos] = useState<Punto[] | null>(null);
  useEffect(() => { consultarPuntos().then(setPuntos).catch(() => setPuntos([])); }, []);
  return (
    <div className="pantalla">
      <Encabezado titulo="Dónde estamos" atras="/" />
      <p className="lead">En el stand tu hijo prueba antes de comprar. Ven a saludarnos.</p>
      {puntos === null ? <div className="cargando"><i /><i /><i /></div> : puntos.length === 0 ? (
        <Vacio icono="mapa" titulo="Pronto anunciamos nuevos puntos" texto="Mientras tanto, pide por WhatsApp desde tu despensa." />
      ) : puntos.map(p => (
        <Tarjeta key={p.id} className="punto">
          <div className="punto-fecha"><strong>{fechaLarga(p.desde).split(' de ')[0]}</strong><span>{fechaLarga(p.desde).split(' de ')[1].slice(0, 3)}</span></div>
          <div className="punto-info">
            <h2>{p.nombre}</h2>
            <p>{p.lugar} · {p.distrito}</p>
            <small>{rango(p.desde, p.hasta)}{p.horario ? ` · ${p.horario}` : ''}</small>
            {p.estado && <span className="etiqueta">{p.estado}</span>}
            <a className="enlace" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${p.lugar} ${p.distrito} Lima`)}`} target="_blank" rel="noopener noreferrer"><Icono n="mapa" tam={16} /> Cómo llegar</a>
          </div>
        </Tarjeta>
      ))}
    </div>
  );
}
