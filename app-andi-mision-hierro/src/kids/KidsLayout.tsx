import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Andi from '../components/Andi';
import Icono from '../components/Icono';
import Puerta from './Puerta';
import { obtener, progresoDe, useEstado } from '../lib/estado';
import { callar, hablar } from '../lib/voz';
import { INVITADO, ninoSesion } from './progreso';

interface Sesion { ninoId: string; inicio: number; limite: number }
const leer = (): Sesion | null => { try { return JSON.parse(sessionStorage.getItem('andi.sesion') || 'null'); } catch { return null; } };

export default function KidsLayout() {
  const [sesion, setSesion] = useState<Sesion | null>(leer);
  const [eligiendo, setEligiendo] = useState(false);
  const [saliendo, setSaliendo] = useState(false);
  const [ahora, setAhora] = useState(Date.now());
  const ninos = useEstado(e => e.ninos);
  const estrellas = useEstado(e => progresoDe(e, sesion?.ninoId || INVITADO).estrellas);
  const ir = useNavigate();

  useEffect(() => { document.body.classList.add('modo-ninos'); return () => { document.body.classList.remove('modo-ninos'); callar(); }; }, []);
  useEffect(() => { const t = setInterval(() => setAhora(Date.now()), 1000); return () => clearInterval(t); }, []);

  const iniciar = (ninoId: string) => {
    const s = { ninoId, inicio: Date.now(), limite: obtener().ajustes.tiempoJuegoMin * 60_000 };
    sessionStorage.setItem('andi.sesion', JSON.stringify(s)); setSesion(s); setEligiendo(false);
    const n = obtener().ninos.find(x => x.id === ninoId);
    hablar(`¡Hola${n ? ' ' + n.apodo : ''}! Soy Andi. ¿Vamos de misión?`);
  };
  const terminar = () => { sessionStorage.removeItem('andi.sesion'); callar(); ir('/', { replace: true }); };

  if (!sesion) {
    if (eligiendo) return (
      <div className="ninos-elegir">
        <Andi tam={130} />
        <h1>¿Quién juega?</h1>
        <div className="ninos-lista">
          {ninos.map(n => <button key={n.id} onClick={() => iniciar(n.id)}><span>{n.avatar}</span>{n.apodo}</button>)}
        </div>
      </div>
    );
    return <Puerta titulo="Misión Hierro" alCancelar={() => ir('/')} alPasar={() => (ninos.length > 1 ? setEligiendo(true) : iniciar(ninos[0]?.id || INVITADO))} />;
  }
  if (saliendo) return <Puerta titulo="¿Salir de Misión Hierro?" alPasar={terminar} alCancelar={() => setSaliendo(false)} />;

  const restante = Math.max(0, sesion.limite - (ahora - sesion.inicio));
  if (restante === 0) return (
    <div className="ninos-descanso">
      <Andi tam={190} animo="duerme" piezas={[]} />
      <h1>¡Hora de descansar!</h1>
      <p>Jugamos un montón. Ahora a moverse, tomar agua y comer rico.</p>
      <button className="boton-nino" onClick={() => setSaliendo(true)}>Llamar a papá o mamá</button>
    </div>
  );
  const pct = restante / sesion.limite;
  const nino = ninos.find(n => n.id === ninoSesion());

  return (
    <div className="ninos">
      <header className="ninos-barra">
        <button className="ninos-salir" onClick={() => setSaliendo(true)} aria-label="Salir"><Icono n="candado" tam={22} /></button>
        <Link to="/ninos" className="ninos-titulo">{nino ? <><span aria-hidden="true">{nino.avatar}</span> {nino.apodo}</> : 'Misión Hierro'}</Link>
        <div className="ninos-estado">
          <span className="ninos-estrellas" aria-label={`${estrellas} estrellas`}>⭐ {estrellas}</span>
          <span className="ninos-reloj" style={{ background: `conic-gradient(#fff ${pct * 360}deg, rgba(255,255,255,.25) 0)` }} aria-label={`Quedan ${Math.ceil(restante / 60000)} minutos`}><i /></span>
        </div>
      </header>
      <main className="ninos-contenido"><Outlet /></main>
    </div>
  );
}
