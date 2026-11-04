import { useEffect, useMemo, useState } from 'react';
import AndiNino from '../components/AndiNino';
import Icono from '../components/Icono';
import { bloqueadoSeg, guardarPin, hayPin, pinValido, retoAdulto, verificarPin } from '../lib/pin';

type Fase = 'crear' | 'confirmar' | 'pin' | 'reto' | 'nuevo' | 'nuevo-confirmar';

/**
 * Candado para adultos: PIN de 4 dígitos que papá o mamá crea la primera vez.
 * Entrar y salir de Misión Hierro piden el PIN. Tres errores seguidos bloquean un minuto.
 * «Olvidé mi PIN» pide resolver una multiplicación de dos cifras (escrita, no elegida) y deja crear uno nuevo.
 */
export default function Puerta({ titulo, alPasar, alCancelar }: { titulo: string; alPasar: () => void; alCancelar?: () => void }) {
  const [fase, setFase] = useState<Fase>(() => (hayPin() ? 'pin' : 'crear'));
  const [digitos, setDigitos] = useState('');
  const [primero, setPrimero] = useState('');
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [espera, setEspera] = useState(bloqueadoSeg());
  const [respuesta, setRespuesta] = useState('');
  const reto = useMemo(retoAdulto, [fase === 'reto']);

  useEffect(() => { if (!espera) return; const t = setInterval(() => setEspera(bloqueadoSeg()), 1000); return () => clearInterval(t); }, [espera]);

  const textos: Record<Fase, { titulo: string; ayuda: string }> = {
    crear: { titulo: 'Crea tu PIN', ayuda: 'Papá o mamá: elige 4 números. Te los pediremos para entrar y salir de Misión Hierro. No se los digas a tu hijo.' },
    confirmar: { titulo: 'Repite tu PIN', ayuda: 'Escríbelo otra vez para confirmarlo.' },
    pin: { titulo, ayuda: 'Papá o mamá: escribe tu PIN de 4 números.' },
    reto: { titulo: '¿Olvidaste tu PIN?', ayuda: `Para crear uno nuevo, resuelve: ${reto.texto}` },
    nuevo: { titulo: 'Nuevo PIN', ayuda: 'Elige 4 números nuevos.' },
    'nuevo-confirmar': { titulo: 'Repite el nuevo PIN', ayuda: 'Escríbelo otra vez.' },
  };

  const completar = async (pin: string) => {
    if (fase === 'crear' || fase === 'nuevo') { setPrimero(pin); setDigitos(''); setFase(fase === 'crear' ? 'confirmar' : 'nuevo-confirmar'); return; }
    if (fase === 'confirmar' || fase === 'nuevo-confirmar') {
      if (pin !== primero) { setMensaje('No coinciden. Empecemos de nuevo.'); setDigitos(''); setPrimero(''); setFase(fase === 'confirmar' ? 'crear' : 'nuevo'); return; }
      await guardarPin(pin); setMensaje(null); alPasar(); return;
    }
    if (fase === 'pin') {
      const ok = await verificarPin(pin);
      if (ok) { alPasar(); return; }
      setDigitos('');
      const seg = bloqueadoSeg();
      setEspera(seg);
      setMensaje(seg ? 'Tres intentos seguidos. Espera un minuto.' : 'Ese no es el PIN.');
    }
  };

  const teclear = (d: string) => {
    if (espera) return;
    const nuevo = (digitos + d).slice(0, 4);
    setDigitos(nuevo); setMensaje(null);
    if (nuevo.length === 4 && pinValido(nuevo)) void completar(nuevo);
  };
  const borrar = () => setDigitos(d => d.slice(0, -1));

  const enviarReto = () => {
    if (Number(respuesta) === reto.respuesta) { setRespuesta(''); setMensaje(null); setDigitos(''); setFase('nuevo'); }
    else { setMensaje('No es correcto. Inténtalo otra vez.'); setRespuesta(''); }
  };

  const t = textos[fase];
  return (
    <div className="puerta">
      <div className="puerta-caja">
        <AndiNino tam={100} animo="piensa" />
        <h1>{t.titulo}</h1>
        <p>{t.ayuda}</p>
        {fase === 'reto' ? (
          <form className="puerta-reto" onSubmit={e => { e.preventDefault(); enviarReto(); }}>
            <input inputMode="numeric" pattern="[0-9]*" value={respuesta} onChange={e => setRespuesta(e.target.value.replace(/\D/g, '').slice(0, 4))} aria-label="Respuesta" autoFocus />
            <button type="submit" className="boton-nino">Comprobar</button>
          </form>
        ) : (
          <>
            <div className="puerta-puntos" aria-label={`${digitos.length} de 4 números`}>{[0, 1, 2, 3].map(i => <i key={i} className={i < digitos.length ? 'lleno' : ''} />)}</div>
            <div className="puerta-teclado">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(d => <button key={d} type="button" onClick={() => teclear(d)} disabled={!!espera}>{d}</button>)}
              <button type="button" className="puerta-tecla-suave" onClick={borrar} aria-label="Borrar"><Icono n="atras" tam={22} /></button>
              <button type="button" onClick={() => teclear('0')} disabled={!!espera}>0</button>
              <span />
            </div>
          </>
        )}
        {espera > 0 && <p className="puerta-error">Bloqueado {espera} s.</p>}
        {mensaje && !espera && <p className="puerta-error">{mensaje}</p>}
        <div className="puerta-enlaces">
          {fase === 'pin' && <button className="enlace" onClick={() => { setMensaje(null); setDigitos(''); setFase('reto'); }}>Olvidé mi PIN</button>}
          {alCancelar && <button className="enlace" onClick={alCancelar}>Volver</button>}
        </div>
      </div>
    </div>
  );
}
