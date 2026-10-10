import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Andi from '../components/Andi';
import Celebracion from './Celebracion';
import { FRASES } from '../data/ninos';
import { hablar, sonido } from '../lib/voz';
import { completarJuego } from './progreso';
import Icono from '../components/Icono';

const N = 6;
const tomar = () => [...FRASES].sort(() => Math.random() - 0.5).slice(0, N);

export default function Mito() {
  const ir = useNavigate();
  const [frases, setFrases] = useState(tomar);
  const [i, setI] = useState(0);
  const [respuesta, setRespuesta] = useState<boolean | null>(null);
  const [aciertos, setAciertos] = useState(0);
  const [fin, setFin] = useState<ReturnType<typeof completarJuego> | null>(null);
  const f = frases[i];
  useEffect(() => { if (f && respuesta === null) hablar(`¿Verdad o mito? ${f.texto}`); }, [f, respuesta]);

  const responder = (v: boolean) => {
    if (respuesta !== null) return;
    setRespuesta(v);
    const bien = v === f.verdad;
    if (bien) { setAciertos(a => a + 1); sonido.bien(); } else sonido.suave();
    hablar(`${bien ? '¡Muy bien!' : '¡Casi!'} ${f.verdad ? 'Es verdad.' : 'Es un mito.'} ${f.porque}`);
  };
  const seguir = () => { if (i + 1 >= N) { setFin(completarJuego('mito')); return; } setI(i + 1); setRespuesta(null); };

  if (fin) return <Celebracion titulo={aciertos >= 5 ? '¡Eres experto en hierro!' : '¡Aprendiste un montón!'} estrella={fin.estrella} piezaNueva={fin.piezaNueva}
    alSeguir={() => ir('/ninos')} alRepetir={() => { setFin(null); setFrases(tomar()); setI(0); setRespuesta(null); setAciertos(0); }} />;

  const bien = respuesta !== null && respuesta === f.verdad;
  return (
    <div className="juego juego-mito">
      <div className="juego-cabeza"><span className="ronda">Pregunta {i + 1} de {N}</span><span className="ronda">✓ {aciertos}</span></div>
      <Andi tam={110} animo={respuesta === null ? 'piensa' : bien ? 'wow' : 'feliz'} />
      <button className="frase" onClick={() => hablar(f.texto)}>{f.texto} <Icono n="parlante" tam={18} /></button>
      {respuesta === null ? (
        <div className="mito-botones">
          <button className="mito-v" onClick={() => responder(true)}><span aria-hidden="true">👍</span>¡Verdad!</button>
          <button className="mito-m" onClick={() => responder(false)}><span aria-hidden="true">🙅</span>¡Mito!</button>
        </div>
      ) : (
        <div className={`mito-respuesta ${bien ? 'bien' : 'casi'}`}>
          <strong>{bien ? '¡Muy bien!' : '¡Casi!'} {f.verdad ? 'Es verdad.' : 'Es un mito.'}</strong>
          <p>{f.porque}</p>
          <button className="boton-nino" onClick={seguir}>{i + 1 >= N ? '¡Terminar!' : 'Siguiente'}</button>
        </div>
      )}
    </div>
  );
}
