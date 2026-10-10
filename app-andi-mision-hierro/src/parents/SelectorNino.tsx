import { Link } from 'react-router-dom';
import { actualizar, ninoActivo, useEstado } from '../lib/estado';

export default function SelectorNino() {
  const ninos = useEstado(e => e.ninos);
  const activo = useEstado(e => ninoActivo(e)?.id);
  if (ninos.length === 0) return <Link to="/bienvenida" className="chip chip-agregar">+ Agregar a tu hijo o hija</Link>;
  return (
    <div className="selector-nino" role="radiogroup" aria-label="Hijo o hija">
      {ninos.map(n => (
        <button key={n.id} role="radio" aria-checked={n.id === activo} className={`chip ${n.id === activo ? 'chip-activo' : ''}`}
          onClick={() => actualizar(e => { e.ninoActivo = n.id; })}>
          <span className="chip-avatar" aria-hidden="true">{n.avatar}</span>{n.apodo} · {n.edad} años
        </button>
      ))}
    </div>
  );
}
