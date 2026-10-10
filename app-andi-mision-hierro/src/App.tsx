import { lazy, Suspense, useEffect, type ReactNode } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './parents/Layout';
import Inicio from './parents/Inicio';
import Bienvenida from './parents/Bienvenida';
import Lote from './parents/Lote';
import Escanear from './parents/Escanear';
import Hierro from './parents/Hierro';
import Loncheras from './parents/Loncheras';
import Despensa from './parents/Despensa';
import Hemoglobina from './parents/Hemoglobina';
import Donde from './parents/Donde';
import Mas, { Privacidad } from './parents/Mas';
import KidsLayout from './kids/KidsLayout';
import Mapa from './kids/Mapa';
import Plato from './kids/Plato';
import Memoria from './kids/Memoria';
import Mito from './kids/Mito';
import Habitos from './kids/Habitos';
import { Avisos } from './components/ui';
import { useEstado } from './lib/estado';
import { revisarAvisos } from './lib/avisos';

const Admin = lazy(() => import('./admin/Admin'));

function AlCambiarRuta() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Primero({ children }: { children: ReactNode }) {
  const listo = useEstado(e => Boolean(e.consentimiento) || e.ninos.length > 0);
  const visto = sessionStorage.getItem('andi.bienvenida') === '1';
  if (!listo && !visto) return <Navigate to="/bienvenida" replace />;
  return <>{children}</>;
}

export default function App() {
  useEffect(() => { revisarAvisos(); const f = () => document.visibilityState === 'visible' && revisarAvisos(); document.addEventListener('visibilitychange', f); return () => document.removeEventListener('visibilitychange', f); }, []);
  return (
    <BrowserRouter>
      <AlCambiarRuta />
      <Routes>
        <Route path="/bienvenida" element={<Bienvenida />} />
        <Route path="/ninos" element={<KidsLayout />}>
          <Route index element={<Mapa />} />
          <Route path="plato" element={<Plato />} />
          <Route path="memoria" element={<Memoria />} />
          <Route path="mito" element={<Mito />} />
          <Route path="habitos" element={<Habitos />} />
        </Route>
        <Route path="/admin" element={<Suspense fallback={null}><Admin /></Suspense>} />
        <Route element={<Layout />}>
          <Route index element={<Primero><Inicio /></Primero>} />
          <Route path="c/:code" element={<Lote />} />
          <Route path="lote/:id" element={<Lote />} />
          <Route path="escanear" element={<Escanear />} />
          <Route path="hierro" element={<Hierro />} />
          <Route path="loncheras" element={<Loncheras />} />
          <Route path="despensa" element={<Despensa />} />
          <Route path="hemoglobina" element={<Hemoglobina />} />
          <Route path="donde" element={<Donde />} />
          <Route path="mas" element={<Mas />} />
          <Route path="privacidad" element={<Privacidad />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Avisos />
    </BrowserRouter>
  );
}
