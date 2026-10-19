import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import Layout from './parents/Layout';
import Inicio from './parents/Inicio';
import Hoy from './parents/Reto';
import Bienvenida from './parents/Bienvenida';
import Lote from './parents/Lote';
import Informe from './parents/Informe';
import Escanear from './parents/Escanear';
import Hierro from './parents/Hierro';
import Loncheras from './parents/Loncheras';
import Despensa from './parents/Despensa';
import Hemoglobina from './parents/Hemoglobina';
import Donde from './parents/Donde';
import Mas, { Privacidad } from './parents/Mas';
import KidsLayout from './kids/KidsLayout';
import Mapa from './kids/Mapa';
import Atrapa from './kids/Atrapa';
import LoncheraExpres from './kids/LoncheraExpres';
import Memoria from './kids/Memoria';
import Vestir from './kids/Vestir';
import SumaHierro from './kids/SumaHierro';
import Palabras from './kids/Palabras';
import Ingles from './kids/Ingles';
import { Avisos } from './components/ui';
import { revisarAvisos } from './lib/avisos';

const Admin = lazy(() => import('./admin/Admin'));

function AlCambiarRuta() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    revisarAvisos();
    const f = () => document.visibilityState === 'visible' && revisarAvisos();
    document.addEventListener('visibilitychange', f);
    return () => document.removeEventListener('visibilitychange', f);
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AlCambiarRuta />
        <Routes>
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/ninos" element={<KidsLayout />}>
            <Route index element={<Mapa />} />
            <Route path="atrapa" element={<Atrapa />} />
            <Route path="lonchera" element={<LoncheraExpres />} />
            <Route path="memoria" element={<Memoria />} />
            <Route path="vestir" element={<Vestir />} />
            <Route path="sumas" element={<SumaHierro />} />
            <Route path="palabras" element={<Palabras />} />
            <Route path="ingles" element={<Ingles />} />
          </Route>
          <Route path="/admin" element={<Suspense fallback={null}><Admin /></Suspense>} />
          <Route element={<Layout />}>
            <Route index element={<Inicio />} />
            <Route path="hoy" element={<Hoy />} />
            <Route path="reto" element={<Navigate to="/hoy" replace />} />
            <Route path="c/:code" element={<Lote />} />
            <Route path="lote/:id" element={<Lote />} />
            <Route path="informe/:id" element={<Informe />} />
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
    </MotionConfig>
  );
}
