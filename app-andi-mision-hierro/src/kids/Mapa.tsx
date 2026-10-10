import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import Andi from '../components/Andi';
import { useProgreso } from '../lib/estado';
import { hablar } from '../lib/voz';
import { PARADAS, PIEZAS, piezasDe } from '../data/ninos';
import { ninoSesion } from './progreso';

const POS = [{ x: 22, y: 72 }, { x: 70, y: 58 }, { x: 28, y: 38 }, { x: 72, y: 20 }];

export default function Mapa() {
  const p = useProgreso(ninoSesion());
  const piezas = piezasDe(p.estrellas);
  const siguiente = PIEZAS.find(x => p.estrellas < x.estrellas);
  return (
    <div className="mapa">
      <div className="mapa-andi" onClick={() => hablar(siguiente ? `Con ${siguiente.estrellas - p.estrellas} estrellas más me pongo ${siguiente.nombre.toLowerCase()}.` : '¡Tengo todo mi traje de explorador! Gracias.')}>
        <Andi tam={118} piezas={piezas} className="andi-flota" />
        <div className="burbuja">{siguiente ? <>Juega y gana estrellas. ¡Con {siguiente.estrellas - p.estrellas} más me pongo {siguiente.nombre.toLowerCase()}!</> : <>¡Ya tengo todo mi traje de explorador!</>}</div>
      </div>
      <div className="mapa-terreno">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="mapa-fondo" aria-hidden="true">
          <defs><linearGradient id="cielo" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7FD3F7" /><stop offset="1" stopColor="#CFF0FF" /></linearGradient></defs>
          <rect width="100" height="100" fill="url(#cielo)" />
          <path d="M0 40 L18 14 L30 30 L46 6 L62 28 L78 10 L100 36 V100 H0Z" fill="#9C7BE0" opacity=".55" />
          <path d="M40 8 L46 6 L52 12 Z M74 13 L78 10 L82 14 Z" fill="#fff" />
          <path d="M0 52 Q25 40 50 50 T100 46 V100 H0Z" fill="#6CCB8A" />
          <ellipse cx="72" cy="62" rx="20" ry="6" fill="#3BA7E0" opacity=".9" />
          <path d="M0 78 Q30 68 60 80 T100 76 V100 H0Z" fill="#2FA36B" />
          <path d="M22 72 C34 62 60 70 70 58 S36 44 28 38 S60 28 72 20" fill="none" stroke="#fff" strokeWidth="1.4" strokeDasharray="2.2 2.2" strokeLinecap="round" />
        </svg>
        {PARADAS.map((s, i) => {
          const hecho = (p.jugados[s.id] || 0) > 0;
          return (
            <Link key={s.id} to={`/ninos/${s.id}`} className={`parada ${hecho ? 'hecha' : ''}`} style={{ left: `${POS[i].x}%`, top: `${POS[i].y}%`, '--c': s.color } as CSSProperties}
              onClick={() => hablar(s.juego)} aria-label={`${s.juego}, en ${s.lugar}`}>
              <span className="parada-emoji" aria-hidden="true">{s.emoji}</span>
              <span className="parada-nombre">{s.juego}<small>{s.lugar}</small></span>
              {hecho && <span className="parada-check" aria-hidden="true">⭐</span>}
            </Link>
          );
        })}
      </div>
      <div className="traje">
        {PIEZAS.map(x => <div key={x.id} className={`traje-pieza ${p.estrellas >= x.estrellas ? 'tiene' : ''}`}><span>{p.estrellas >= x.estrellas ? '✓' : `⭐${x.estrellas}`}</span>{x.nombre}</div>)}
      </div>
    </div>
  );
}
