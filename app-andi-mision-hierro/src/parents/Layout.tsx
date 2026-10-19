import { NavLink, useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Icono, { type NombreIcono } from '../components/Icono';
import { transicionPantalla } from '../components/movimiento';

const TABS: { a: string; n: NombreIcono; t: string }[] = [
  { a: '/', n: 'inicio', t: 'Inicio' },
  { a: '/hierro', n: 'gota', t: 'Semáforo' },
  { a: '/escanear', n: 'qr', t: 'Escanear' },
  { a: '/loncheras', n: 'lonchera', t: 'Loncheras' },
  { a: '/despensa', n: 'bolsa', t: 'Despensa' },
];

export default function Layout() {
  const { pathname } = useLocation();
  const outlet = useOutlet();
  return (
    <div className="padres">
      <main className="contenido">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={pathname} {...transicionPantalla}>{outlet}</motion.div>
        </AnimatePresence>
      </main>
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
