import { Navigate, NavLink, useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Icono, { type NombreIcono } from '../components/Icono';
import { transicionPantalla } from '../components/movimiento';
import { useEstado } from '../lib/estado';

const TABS: { a: string; n: NombreIcono; t: string }[] = [
  { a: '/', n: 'inicio', t: 'Inicio' },
  { a: '/loncheras', n: 'lonchera', t: 'Loncheras' },
  { a: '/despensa', n: 'bolsa', t: 'Despensa' },
  { a: '/mas', n: 'mas', t: 'Más' },
];

export default function Layout() {
  const { pathname, search } = useLocation();
  const outlet = useOutlet();
  const bienvenidaVista = useEstado(e => Boolean(e.bienvenidaVista));
  // La bienvenida se muestra solo la primera vez; después se vuelve a la pantalla que se quería abrir.
  if (!bienvenidaVista) return <Navigate to={`/bienvenida?volver=${encodeURIComponent(pathname + search)}`} replace />;
  return (
    <div className="padres">
      <main className="contenido">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={pathname} {...transicionPantalla}>{outlet}</motion.div>
        </AnimatePresence>
      </main>
      <nav className="barra" aria-label="Secciones">
        {TABS.map(t => (
          <NavLink key={t.a} to={t.a} end={t.a === '/'} className={({ isActive }) => `barra-item ${isActive ? 'activo' : ''}`}>
            <span className="barra-icono"><Icono n={t.n} tam={22} /></span>
            <span className="barra-texto">{t.t}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
