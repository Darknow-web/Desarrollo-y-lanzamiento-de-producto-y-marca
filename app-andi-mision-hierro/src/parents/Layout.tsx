import { NavLink, Outlet } from 'react-router-dom';
import Icono, { type NombreIcono } from '../components/Icono';

const TABS: { a: string; n: NombreIcono; t: string }[] = [
  { a: '/', n: 'inicio', t: 'Inicio' },
  { a: '/hierro', n: 'gota', t: 'Hierro' },
  { a: '/escanear', n: 'qr', t: 'Escanear' },
  { a: '/loncheras', n: 'lonchera', t: 'Loncheras' },
  { a: '/mas', n: 'mas', t: 'Más' },
];

export default function Layout() {
  return (
    <div className="padres">
      <main className="contenido"><Outlet /></main>
      <nav className="barra" aria-label="Secciones">
        {TABS.map(t => (
          <NavLink key={t.a} to={t.a} end={t.a === '/'} className={({ isActive }) => `barra-item ${t.a === '/escanear' ? 'barra-central' : ''} ${isActive ? 'activo' : ''}`}>
            <span className="barra-icono"><Icono n={t.n} tam={t.a === '/escanear' ? 26 : 22} /></span>
            <span className="barra-texto">{t.t}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
