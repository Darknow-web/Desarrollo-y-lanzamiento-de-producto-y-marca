import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Andi from '../components/Andi';
import Celebracion from './Celebracion';
import { HABITOS } from '../data/ninos';
import { actualizar, progresoDe, useProgreso } from '../lib/estado';
import { diaCorto, hoyISO, semanaDe } from '../lib/fechas';
import { hablar, sonido } from '../lib/voz';
import { completarJuego, ninoSesion } from './progreso';

const META = 4;

export default function Habitos() {
  const ir = useNavigate();
  const id = ninoSesion(); const hoy = hoyISO();
  const p = useProgreso(id);
  const marcados = p.habitos[hoy] || [];
  const [fin, setFin] = useState<ReturnType<typeof completarJuego> | null>(null);
  useEffect(() => { hablar('¡Ruta de hábitos! Con papá o mamá, marca lo que hiciste hoy.'); }, []);

  const tocar = (hid: string, nombre: string) => {
    const ya = marcados.includes(hid);
    actualizar(e => { const q = progresoDe(e, id); const l = q.habitos[hoy] || []; q.habitos[hoy] = ya ? l.filter(x => x !== hid) : [...l, hid]; e.progreso[id] = q; });
    if (!ya) {
      sonido.bien(); hablar(`¡${nombre}!`);
      if (marcados.length + 1 === META && p.premiados.habitos !== hoy) setTimeout(() => setFin(completarJuego('habitos')), 700);
    } else sonido.toque();
  };
  if (fin) return <Celebracion titulo="¡Qué buenos hábitos!" estrella={fin.estrella} piezaNueva={fin.piezaNueva} alSeguir={() => ir('/ninos')} alRepetir={() => setFin(null)} />;

  return (
    <div className="juego juego-habitos">
      <div className="andi-habla"><Andi tam={86} animo={marcados.length >= META ? 'wow' : 'feliz'} />
        <p className="burbuja">{marcados.length >= META ? '¡Lo lograste hoy! Puedes seguir sumando.' : `Marca ${META - marcados.length} hábito${META - marcados.length === 1 ? '' : 's'} más para ganar una estrella.`}</p></div>
      <div className="habitos">
        {HABITOS.map(h => (
          <button key={h.id} className={`habito ${marcados.includes(h.id) ? 'marcado' : ''}`} onClick={() => tocar(h.id, h.nombre)} aria-pressed={marcados.includes(h.id)}>
            <span aria-hidden="true">{h.emoji}</span>{h.nombre}
          </button>
        ))}
      </div>
      <div className="semana-habitos" aria-label="Tu semana">
        {semanaDe(hoy).map(f => {
          const n = (p.habitos[f] || []).length;
          return <div key={f} className={`${f === hoy ? 'hoy' : ''} ${n >= META ? 'lleno' : ''}`}><span>{diaCorto(f)}</span><b>{n >= META ? '⭐' : n || '·'}</b></div>;
        })}
      </div>
    </div>
  );
}
