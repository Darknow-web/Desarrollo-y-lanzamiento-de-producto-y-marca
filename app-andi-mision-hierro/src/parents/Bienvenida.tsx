import { useRef, useState, type ReactNode } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Andi from '../components/Andi';
import Icono from '../components/Icono';
import { Boton, Paso } from '../components/ui';
import { Cascada, Item } from '../components/movimiento';
import { actualizar, nuevoId, useEstado } from '../lib/estado';
import { hoyISO } from '../lib/fechas';

export const AVATARES = ['🦙', '🐻', '🦊', '🐸', '🐼', '🐯', '🐨', '🦁'];

/* Dibujos de la bienvenida: trazos simples con la paleta de la marca. */
function DibujoLonchera() {
  return (
    <svg viewBox="0 0 200 160" width="200" height="160" role="img" aria-label="Lonchera vacía con un visto: el hierro del día se suma solo">
      <ellipse cx="100" cy="146" rx="70" ry="7" fill="#4A2018" opacity=".08" />
      <path d="M72 50 q0 -22 28 -22 q28 0 28 22" fill="none" stroke="#4A2018" strokeWidth="7" strokeLinecap="round" />
      <rect x="30" y="48" width="140" height="92" rx="20" fill="#BA4036" />
      <rect x="30" y="48" width="140" height="30" rx="16" fill="#9C3229" />
      <rect x="44" y="84" width="112" height="44" rx="12" fill="#FBF3E8" />
      <circle cx="100" cy="106" r="20" fill="#7C8A3A" />
      <path d="M90 106 l7 7 l14 -15" fill="none" stroke="#FFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="160" cy="36" r="5" fill="#E3A33B" /><circle cx="42" cy="30" r="4" fill="#E3A33B" /><circle cx="178" cy="70" r="3.5" fill="#D9B48F" />
    </svg>
  );
}
function DibujoAndi() {
  return (
    <div className="dibujo-andi">
      <Andi tam={128} animo="wow" className="andi-flota" />
      {[[-62, -8, 22], [60, -20, 18], [-44, 60, 14], [66, 48, 16]].map(([x, y, t], i) => (
        <motion.span key={i} className="estrella-dibujo" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
          animate={{ scale: [0.85, 1.1, 0.85], rotate: [0, 12, 0] }} transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}>
          <Icono n="estrella" tam={t} />
        </motion.span>
      ))}
    </div>
  );
}
function DibujoPack() {
  return (
    <svg viewBox="0 0 200 160" width="200" height="160" role="img" aria-label="Pack de AndiBite y un mensaje de WhatsApp">
      <ellipse cx="96" cy="148" rx="64" ry="7" fill="#4A2018" opacity=".08" />
      <rect x="36" y="56" width="96" height="84" rx="16" fill="#D9B48F" />
      <rect x="36" y="56" width="96" height="26" rx="12" fill="#4A2018" />
      <rect x="52" y="96" width="64" height="26" rx="8" fill="#4A2018" />
      <rect x="58" y="102" width="52" height="4" rx="2" fill="#E3A33B" /><rect x="58" y="112" width="34" height="4" rx="2" fill="#FBF3E8" />
      <path d="M118 22 h58 a14 14 0 0 1 14 14 v30 a14 14 0 0 1 -14 14 h-36 l-16 14 v-14 h-6 a14 14 0 0 1 -14 -14 v-30 a14 14 0 0 1 14 -14z" fill="#1A8F4A" />
      <circle cx="140" cy="50" r="5" fill="#FFF" /><circle cx="156" cy="50" r="5" fill="#FFF" /><circle cx="172" cy="50" r="5" fill="#FFF" />
    </svg>
  );
}

const PANTALLAS: { frase: string; dibujo: ReactNode }[] = [
  { frase: 'Cada tarde, marca si la lonchera volvió vacía: el hierro del día se suma solo', dibujo: <DibujoLonchera /> },
  { frase: 'Tu hijo juega con Andi y gana estrellas', dibujo: <DibujoAndi /> },
  { frase: 'Pide tu pack por WhatsApp cuando se acabe', dibujo: <DibujoPack /> },
];

/** Tres pantallas deslizables la primera vez; después, el perfil del hijo con el consentimiento (Ley 29733). */
export default function Bienvenida() {
  const vista = useEstado(e => Boolean(e.bienvenidaVista));
  const consentido = useEstado(e => Boolean(e.consentimiento));
  const [fase, setFase] = useState<'pantallas' | 'perfil'>(vista ? 'perfil' : 'pantallas');
  const [indice, setIndice] = useState(0);
  const pista = useRef<HTMLDivElement>(null);
  const [acepto, setAcepto] = useState(consentido);
  const [apodo, setApodo] = useState('');
  const [edad, setEdad] = useState(6);
  const [avatar, setAvatar] = useState(AVATARES[0]);
  const ir = useNavigate();
  const [q] = useSearchParams();
  const volver = q.get('volver') || '/';

  const irA = (i: number) => { const p = pista.current; if (!p) return; p.scrollTo({ left: i * p.clientWidth, behavior: 'smooth' }); setIndice(i); };
  const alDeslizar = () => { const p = pista.current; if (!p) return; const i = Math.round(p.scrollLeft / p.clientWidth); if (i !== indice) setIndice(i); };
  const ultima = indice === PANTALLAS.length - 1;

  const terminar = (guardar: boolean) => {
    actualizar(e => {
      e.bienvenidaVista = true;
      if (!guardar) return;
      e.consentimiento ??= { fecha: hoyISO(), avisos: true };
      if (apodo.trim()) { const n = { id: nuevoId(), apodo: apodo.trim().slice(0, 20), edad, avatar }; e.ninos.push(n); e.ninoActivo = n.id; }
    });
    ir(volver.replace(/[?&]agregar=1/, ''), { replace: true });
  };

  return (
    <div className="bienvenida">
      <AnimatePresence mode="wait" initial={false}>
        {fase === 'pantallas' ? (
          <motion.div key="pantallas" className="bienvenida-pantallas" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.25 }}>
            <button type="button" className="enlace bienvenida-saltar" onClick={() => setFase('perfil')}>Saltar</button>
            <div className="pista" ref={pista} onScroll={alDeslizar}>
              {PANTALLAS.map((p, i) => (
                <section key={i} className="pantalla-bienvenida" aria-label={`${i + 1} de ${PANTALLAS.length}`} aria-hidden={i !== indice}>
                  <div className="dibujo">{p.dibujo}</div>
                  <h1 className="titulo-grande">{p.frase}</h1>
                </section>
              ))}
            </div>
            <div className="bienvenida-pie">
              <div className="puntos" role="tablist" aria-label="Pantallas">
                {PANTALLAS.map((_, i) => <button key={i} type="button" role="tab" aria-selected={i === indice} aria-label={`Pantalla ${i + 1}`} className={i === indice ? 'activo' : ''} onClick={() => irA(i)} />)}
              </div>
              <Boton ancho onClick={() => (ultima ? setFase('perfil') : irA(indice + 1))}>{ultima ? 'Empezar' : 'Siguiente'}</Boton>
            </div>
          </motion.div>
        ) : (
          <motion.div key="perfil" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.28 }}>
            <Cascada className="bienvenida-paso">
              <Item><Andi tam={96} className="andi-flota" /></Item>
              <Item><h1 className="titulo-pantalla">{consentido ? 'Agrega a tu hijo o hija' : '¿Quién va al colegio?'}</h1></Item>
              <Item><p className="lead">Lo que registres se queda <strong>solo en este teléfono</strong>. Nosotros recibimos el código del envase y, si usas el plan de loncheras, el apodo, la edad y lo que tu hijo debe evitar.</p></Item>
              <Item className="bienvenida-form">
                <form onSubmit={e => { e.preventDefault(); if (acepto) terminar(true); }}>
                  <label className="campo"><span>Apodo de tu hijo o hija</span>
                    <input value={apodo} onChange={e => setApodo(e.target.value)} placeholder="Ej.: Mati" maxLength={20} /></label>
                  <div className="bienvenida-fila">
                    <div className="campo"><span>Edad</span><Paso valor={edad} alCambiar={setEdad} min={2} max={13} etiqueta="años" /></div>
                    <div className="campo"><span>Personaje</span>
                      <div className="avatares">{AVATARES.slice(0, 4).map(a => <button type="button" key={a} className={a === avatar ? 'activo' : ''} onClick={() => setAvatar(a)} aria-label={`Personaje ${a}`} aria-pressed={a === avatar}>{a}</button>)}</div>
                    </div>
                  </div>
                  {!consentido && (
                    <label className="casilla"><input type="checkbox" checked={acepto} onChange={e => setAcepto(e.target.checked)} />
                      <span>Acepto que la app guarde el hierro de cada día, la despensa y los recordatorios en este teléfono (Ley 29733). Puedo borrarlo todo cuando quiera.</span></label>
                  )}
                  <Boton ancho submit deshabilitado={!acepto || (consentido && !apodo.trim())}>Guardar y seguir</Boton>
                  <button type="button" className="enlace enlace-ancho" onClick={() => terminar(false)}>Ahora no</button>
                </form>
              </Item>
            </Cascada>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
