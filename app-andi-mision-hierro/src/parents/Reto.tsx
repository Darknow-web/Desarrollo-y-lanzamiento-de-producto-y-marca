// Reto lonchera vacía: la acción de cada día de colegio. Marcar suma una estrella al niño.
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Andi from '../components/Andi';
import Icono from '../components/Icono';
import { Encabezado, aviso } from '../components/ui';
import { Cascada, Item } from '../components/movimiento';
import SelectorNino from './SelectorNino';
import { marcarVacia, ninoActivo, useEstado, useProgreso, useRacha, type RachaSemana } from '../lib/estado';
import { deISO, diaCorto, hoyISO, nombreDia, sumarDias } from '../lib/fechas';
import { resumenSemana } from '../lib/hierro';
import type { Nino } from '../lib/tipos';

/** Sábado o domingo: no hay lonchera, se muestra el resumen de la semana. */
export const esFinDeSemana = (f = hoyISO()) => { const d = deISO(f).getDay(); return d === 0 || d === 6; };

const COLORES = ['#BA4036', '#E3A33B', '#7C8A3A', '#D9B48F', '#4A2018', '#FBF3E8'];

/** Confeti liviano con motion: 26 papelitos que salen del centro y caen. */
function Confeti() {
  const piezas = useMemo(() => Array.from({ length: 26 }, (_, i) => ({
    id: i, color: COLORES[i % COLORES.length], x: (Math.random() - 0.5) * 320, y: 90 + Math.random() * 200,
    giro: 360 + Math.random() * 540, dur: 1.1 + Math.random() * 0.7, retraso: Math.random() * 0.18, ancho: 7 + Math.random() * 6, alto: 9 + Math.random() * 8,
  })), []);
  return (
    <div className="confeti" aria-hidden="true">
      {piezas.map(p => (
        <motion.i key={p.id} style={{ background: p.color, width: p.ancho, height: p.alto }}
          initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.6 }}
          animate={{ x: p.x, y: p.y, opacity: 0, rotate: p.giro, scale: 1 }}
          transition={{ duration: p.dur, delay: p.retraso, ease: [0.2, 0.8, 0.3, 1] }} />
      ))}
    </div>
  );
}

/** Pantalla de celebración al marcar: Andi feliz, confeti y la estrella ganada. */
function Celebracion({ nino, racha, alCerrar }: { nino: Nino; racha: number; alCerrar: () => void }) {
  const reducir = useReducedMotion();
  useEffect(() => { const t = window.setTimeout(alCerrar, 4200); return () => clearTimeout(t); }, [alCerrar]);
  return (
    <motion.div className="celebra-fondo" role="dialog" aria-label="Lonchera vacía" onClick={alCerrar}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      <motion.div className="celebra" onClick={e => e.stopPropagation()}
        initial={{ scale: 0.85, y: 30, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 16, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}>
        {!reducir && <Confeti />}
        <motion.div animate={reducir ? {} : { y: [0, -10, 0], rotate: [0, -3, 3, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
          <Andi animo="wow" tam={132} />
        </motion.div>
        <h2>¡Volvió vacía!</h2>
        <p className="celebra-estrella"><Icono n="estrella" tam={22} /> +1 estrella para {nino.apodo}</p>
        <p className="celebra-racha">{racha >= 2 ? `${racha} días seguidos esta semana` : 'Andi ya lo anotó en su mapa'}</p>
        <button className="boton boton-primario boton-ancho" onClick={alCerrar}>Listo</button>
      </motion.div>
    </motion.div>
  );
}

/** Los cinco días de colegio como puntitos; opcionalmente se pueden tocar. */
export function PuntosSemana({ semana, alTocar }: { semana: RachaSemana; alTocar?: (fecha: string, valor: boolean) => void }) {
  return (
    <div className="puntos-semana" role={alTocar ? 'group' : undefined} aria-label="Días de la semana">
      {semana.dias.map(d => {
        const clase = `punto-dia ${d.vacia ? 'vacia' : ''} ${d.hoy ? 'hoy' : ''} ${!d.pasado ? 'futuro' : ''}`;
        const etiqueta = `${nombreDia(d.fecha)}: ${d.vacia ? 'volvió vacía' : d.pasado ? 'sin marcar' : 'todavía no'}`;
        return alTocar ? (
          <button key={d.fecha} type="button" className={clase} disabled={!d.pasado} aria-pressed={d.vacia} aria-label={etiqueta} onClick={() => alTocar(d.fecha, !d.vacia)}>
            <i>{d.vacia ? <Icono n="check" tam={16} grosor={3} /> : null}</i><span>{diaCorto(d.fecha)[0]}</span>
          </button>
        ) : (
          <span key={d.fecha} className={clase} title={etiqueta}><i>{d.vacia ? <Icono n="check" tam={16} grosor={3} /> : null}</i><span>{diaCorto(d.fecha)[0]}</span></span>
        );
      })}
    </div>
  );
}

const textoRacha = (s: RachaSemana, hoyVacia: boolean) => {
  if (s.racha >= 2) return `${s.racha} días seguidos esta semana`;
  if (hoyVacia) return 'Primer día de la racha';
  if (s.vacias > 0) return `${s.vacias} ${s.vacias === 1 ? 'día' : 'días'} vacía esta semana`;
  return 'Hoy empieza la racha';
};

/** Hero del inicio: un botón grande para marcar la lonchera de hoy. En fin de semana, el resumen. */
export function RetoHero({ nino }: { nino: Nino }) {
  const hoy = hoyISO();
  const semana = useRacha(nino.id, hoy);
  const [celebrando, setCelebrando] = useState(false);
  if (esFinDeSemana(hoy)) return <ResumenSemana nino={nino} />;

  const hoyVacia = semana.dias.find(d => d.hoy)?.vacia ?? false;
  const marcar = () => { if (marcarVacia(nino.id, hoy, true)) setCelebrando(true); };
  const deshacer = () => { marcarVacia(nino.id, hoy, false); aviso('Listo, sin marcar'); };

  return (
    <section className={`reto-hero ${hoyVacia ? 'reto-hecho' : ''}`} aria-labelledby="reto-titulo">
      <div className="reto-cabeza">
        <p className="kicker">Reto lonchera vacía</p>
        <Link to="/reto" className="reto-ver">Ver la semana <Icono n="derecha" tam={16} /></Link>
      </div>
      <h2 id="reto-titulo" className="reto-titulo">{hoyVacia ? `Hoy la de ${nino.apodo} volvió vacía` : '¿Volvió vacía hoy?'}</h2>
      <PuntosSemana semana={semana} />
      <p className="reto-racha"><Icono n="rayo" tam={16} /> {textoRacha(semana, hoyVacia)}</p>
      {hoyVacia ? (
        <div className="reto-acciones">
          <span className="boton boton-hecho boton-ancho" aria-live="polite"><Icono n="check" tam={20} grosor={3} /><span>Marcada por hoy</span></span>
          <button type="button" className="enlace" onClick={deshacer}>Me equivoqué</button>
        </div>
      ) : (
        <motion.button type="button" className="boton boton-primario boton-ancho boton-reto" onClick={marcar} whileTap={{ scale: 0.97 }}>
          <Icono n="lonchera" tam={22} /><span>Sí, volvió vacía</span>
        </motion.button>
      )}
      <AnimatePresence>{celebrando && <Celebracion nino={nino} racha={semana.racha} alCerrar={() => setCelebrando(false)} />}</AnimatePresence>
    </section>
  );
}

/** "La semana de {apodo}": días vacía, semáforo de hierro y el paso siguiente, armar las loncheras. */
export function ResumenSemana({ nino, fecha = hoyISO(), pasada }: { nino: Nino; fecha?: string; pasada?: boolean }) {
  const semana = useRacha(nino.id, fecha);
  const registros = useEstado(e => e.registros);
  const hierro = resumenSemana(registros, nino.id, fecha);
  const frase = semana.vacias >= 4 ? 'Semana redonda, se comió casi todo.' : semana.vacias >= 2 ? 'Buena semana, va agarrando el ritmo.' : semana.vacias === 1 ? 'Un día vacía: el lunes se vuelve a intentar.' : 'Esta semana no se marcó ninguna.';
  return (
    <section className="reto-hero resumen-semana" aria-labelledby="resumen-titulo">
      <p className="kicker">Reto lonchera vacía</p>
      <h2 id="resumen-titulo" className="reto-titulo">{pasada ? `La semana pasada de ${nino.apodo}` : `La semana de ${nino.apodo}`}</h2>
      <p className="resumen-cifra"><strong>{semana.vacias}</strong><span>de 5 loncheras volvieron vacías</span></p>
      <PuntosSemana semana={semana} />
      <p className="reto-racha">{frase}</p>
      <Link to="/hierro" className={`resumen-semaforo semaforo-${hierro.color}`}>
        <span className="semaforo-luces" aria-hidden="true"><i /><i /><i /></span>
        <span><strong>Semáforo de hierro:</strong> {hierro.diasConHierro} de 7 días con una fuente de hierro</span>
        <Icono n="derecha" tam={18} />
      </Link>
      {!pasada && <Link to="/loncheras" className="boton boton-primario boton-ancho boton-reto"><Icono n="lonchera" tam={22} /><span>Armar la lonchera de la próxima semana</span></Link>}
    </section>
  );
}

/** Pantalla /reto: la semana completa, por si un día se olvidó marcar. */
export default function Reto() {
  const nino = useEstado(ninoActivo);
  const ninos = useEstado(e => e.ninos.length);
  const hoy = hoyISO();
  const semana = useRacha(nino?.id || '', hoy);
  const progreso = useProgreso(nino?.id || '');
  const [celebrando, setCelebrando] = useState(false);

  if (!nino) return (
    <div className="pantalla"><Encabezado titulo="Reto lonchera vacía" atras="/" />
      <div className="vacio"><Andi tam={110} animo="piensa" /><h3>Primero crea el perfil de tu hijo</h3><p>Así Andi guarda sus estrellas y su racha.</p>
        <Link to="/bienvenida?volver=/reto" className="boton boton-primario">Crear perfil</Link></div></div>
  );

  const tocar = (fecha: string, valor: boolean) => {
    const gano = marcarVacia(nino.id, fecha, valor);
    if (gano && fecha === hoy) setCelebrando(true);
    else aviso(gano ? `+1 estrella para ${nino.apodo}` : 'Listo, sin marcar');
  };
  const semanaPasada = sumarDias(hoy, -7);

  return (
    <Cascada className="pantalla reto">
      <Encabezado titulo="Reto lonchera vacía" atras="/" />
      {ninos > 1 && <Item><SelectorNino /></Item>}
      <Item><p className="lead">Cada día de colegio, toca el día si la lonchera de {nino.apodo} volvió vacía.</p></Item>
      <Item as="section" className="tarjeta reto-semana">
        <div className="reto-cabeza"><h2>Esta semana</h2><span className="reto-estrellas"><Icono n="estrella" tam={18} /> {progreso.estrellas}</span></div>
        <PuntosSemana semana={semana} alTocar={tocar} />
        <p className="reto-racha"><Icono n="rayo" tam={16} /> {textoRacha(semana, semana.dias.find(d => d.hoy)?.vacia ?? false)}</p>
      </Item>
      <Item>{esFinDeSemana(hoy) ? <ResumenSemana nino={nino} /> : <ResumenSemana nino={nino} fecha={semanaPasada} pasada />}</Item>
      <AnimatePresence>{celebrando && <Celebracion nino={nino} racha={semana.racha} alCerrar={() => setCelebrando(false)} />}</AnimatePresence>
    </Cascada>
  );
}
