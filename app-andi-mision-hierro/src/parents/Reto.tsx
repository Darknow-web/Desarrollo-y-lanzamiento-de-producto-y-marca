// El hierro de hoy: el detalle del día (cada comida con sus mg), los puntitos de la semana y el resumen semanal.
// Marcar la lonchera vacía suma una estrella al niño y registra el AndiBite del día.
import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Andi from '../components/Andi';
import Icono from '../components/Icono';
import { Boton, Encabezado, Hoja, Interruptor, aviso } from '../components/ui';
import { Cascada, Item } from '../components/movimiento';
import SelectorNino from './SelectorNino';
import { desmarcarLoncheraDelPlan, marcarVacia, mgDeLoncheraVacia, ninoActivo, obtener, quitarRegistro, registrarComida, registrarLoncheraDelPlan, useEstado, useHierroDelDia, useLoncheraDelPlan, useProgreso, useRacha, useRegistrosDelDia, type RachaSemana } from '../lib/estado';
import { deISO, diaCorto, fechaCorta, hoyISO, nombreDia } from '../lib/fechas';
import { esAndiBite, resumenSemana } from '../lib/hierro';
import { ALIMENTOS, ALIMENTOS_RAPIDOS, ANDIBITE, alimentoPorId, type Alimento } from '../data/alimentos';
import type { Nino } from '../lib/tipos';
import { compartirTexto, textoHoy, textoSemana } from '../lib/compartir';

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

/** Pantalla de celebración al marcar la lonchera vacía: Andi feliz, confeti, la estrella y el hierro que sumó. */
export function Celebracion({ nino, racha, mg, alCerrar }: { nino: Nino; racha: number; mg?: number; alCerrar: () => void }) {
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
        <p className="celebra-sub">Esto es lo que nadie ve.</p>
        <p className="celebra-estrella"><Icono n="estrella" tam={22} /> +1 estrella para {nino.apodo}</p>
        {mg ? <p className="celebra-mg"><Icono n="gota" tam={16} /> +{mg} mg de hierro sumados a hoy</p> : null}
        <p className="celebra-racha">{racha >= 2 ? `${racha} días seguidos esta semana` : 'Ya puede usarla en Misión Hierro'}</p>
        <button className="boton boton-primario boton-ancho" onClick={alCerrar}>Listo</button>
      </motion.div>
    </motion.div>
  );
}

const estadoDia = (d: RachaSemana['dias'][number]) => (d.completo ? 'completo' : d.conHierro ? 'algo' : d.vacia ? 'vacia' : 'nada');
const etiquetaDia = (d: RachaSemana['dias'][number]) => {
  const estado = d.completo ? `llegó a los ${d.referencia} mg` : d.conHierro ? `${d.mg} de ${d.referencia} mg` : d.pasado ? 'sin hierro registrado' : 'todavía no';
  return `${nombreDia(d.fecha)}: ${estado}${d.vacia ? ', lonchera vacía' : ''}`;
};

/** Los cinco días de colegio como puntitos con el hierro de cada día; opcionalmente se pueden tocar para elegir uno. */
export function PuntosSemana({ semana, seleccion, alTocar }: { semana: RachaSemana; seleccion?: string; alTocar?: (fecha: string) => void }) {
  return (
    <div className="puntos-semana" role={alTocar ? 'group' : undefined} aria-label="Días de la semana">
      {semana.dias.map(d => {
        const clase = `punto-dia punto-${estadoDia(d)} ${d.hoy ? 'hoy' : ''} ${!d.pasado ? 'futuro' : ''} ${seleccion === d.fecha ? 'sel' : ''}`;
        const icono = d.completo ? <Icono n="check" tam={16} grosor={3} /> : d.conHierro ? <b>{d.mg < 10 ? d.mg : Math.round(d.mg)}</b> : null;
        return alTocar ? (
          <button key={d.fecha} type="button" className={clase} disabled={!d.pasado} aria-pressed={seleccion === d.fecha} aria-label={etiquetaDia(d)} onClick={() => alTocar(d.fecha)}>
            <i>{icono}</i><span>{diaCorto(d.fecha)[0]}</span>
          </button>
        ) : (
          <span key={d.fecha} className={clase} title={etiquetaDia(d)}><i>{icono}</i><span>{diaCorto(d.fecha)[0]}</span></span>
        );
      })}
    </div>
  );
}

/**
 * Hoja "+ Otra comida": un toque registra el alimento (los mg salen de `data/alimentos.ts`).
 * Con `todos`, muestra AndiBite y los 12 alimentos con su porción (la usa el semáforo).
 */
export function HojaComida({ abierta, alCerrar, nino, fecha, todos }: { abierta: boolean; alCerrar: () => void; nino: Nino; fecha: string; todos?: boolean }) {
  const [vitC, setVitC] = useState(true);
  const opciones: Alimento[] = todos ? [ANDIBITE, ...ALIMENTOS] : ALIMENTOS_RAPIDOS;
  const elegir = (a: Alimento) => {
    const r = registrarComida(nino.id, fecha, a.id, { conVitC: vitC });
    if (r) aviso(`+${r.mg} mg para ${nino.apodo}`);
    alCerrar();
  };
  return (
    <Hoja abierta={abierta} alCerrar={alCerrar} titulo={`¿Qué comió ${nino.apodo}?`}>
      <div className={`alimentos ${todos ? '' : 'alimentos-rapidos'}`}>
        {opciones.map(o => (
          <button key={o.id} type="button" className="alimento" onClick={() => elegir(o)}>
            <span aria-hidden="true">{o.emoji}</span><strong>{o.nombre}</strong>{todos && <small>{o.porcion}</small>}<em>{o.mg} mg</em>
          </button>
        ))}
      </div>
      <Interruptor activo={vitC} alCambiar={setVitC} etiqueta="Con fruta o verdura con vitamina C" detalle="Mandarina, naranja, fresa, limón, tomate…" />
      {!todos && <Link to="/hierro" className="enlace enlace-ancho" onClick={alCerrar}>Ver todos los alimentos con hierro</Link>}
    </Hoja>
  );
}

/** Una comida registrada: emoji, nombre, mg y borrar. */
function FilaRegistro({ r, alBorrar }: { r: { id: string; alimentoId: string; nombre: string; mg: number; hemo: boolean; conVitC: boolean }; alBorrar: () => void }) {
  return (
    <div className="fila">
      <span className="fila-emoji" aria-hidden="true">{esAndiBite(r) ? '🍫' : r.alimentoId === 'lonchera' ? '🧺' : alimentoPorId(r.alimentoId)?.emoji || '🍽️'}</span>
      <span><strong>{r.nombre}</strong><small>{r.mg} mg{r.hemo ? ' · hierro hemo' : ''}{r.conVitC ? ' · con vitamina C' : ''}</small></span>
      <button type="button" className="btn-icono" aria-label={`Borrar ${r.nombre}`} onClick={alBorrar}><Icono n="basura" tam={18} /></button>
    </div>
  );
}

/** "La semana de {apodo}": días con hierro, mg de la semana frente a la referencia × 7, semáforo y el paso siguiente. */
export function ResumenSemana({ nino, fecha = hoyISO(), pasada, enHoy }: { nino: Nino; fecha?: string; pasada?: boolean; enHoy?: boolean }) {
  const semana = useRacha(nino.id, fecha);
  const registros = useEstado(e => e.registros);
  const hierro = resumenSemana(registros, nino.id, fecha);
  const referencia = semana.dias[0]?.referencia ?? 10;
  const meta = referencia * 7;
  const avance = Math.min(100, Math.round((hierro.mgSemana / meta) * 100));
  const enviar = () => compartirTexto(`La semana de ${nino.apodo}`, textoSemana(nino.apodo, { diasConHierro: semana.dias.filter(d => d.conHierro).length, mgSemana: hierro.mgSemana, vacias: semana.vacias }));
  const frase = hierro.color === 'verde' ? 'Semana redonda: casi todos los días con hierro.' : hierro.color === 'ambar' ? 'Buena semana. La meta es 5 días o más con hierro.' : hierro.diasConHierro > 0 ? 'Pocos días con hierro. El lunes seguimos.' : 'Esta semana no registraron hierro.';
  return (
    <section className="reto-hero resumen-semana" aria-labelledby="resumen-titulo">
      <div className="reto-cabeza">
        <p className="kicker">El hierro de la semana</p>
        {!pasada && !enHoy && <Link to="/hoy" className="reto-ver">Ver el día <Icono n="derecha" tam={16} /></Link>}
      </div>
      <h2 id="resumen-titulo" className="reto-titulo">{pasada ? `Lo que nadie vio la semana pasada` : `Lo que nadie vio esta semana`}</h2>
      <p className="resumen-cifra"><strong>{hierro.diasConHierro}</strong><span>de 7 días con hierro</span></p>
      <div className="aporte" aria-label={`${hierro.mgSemana} de ${meta} mg en la semana`}>
        <div className="aporte-barra"><i style={{ width: `${avance}%` }} /></div>
        <p><strong>{hierro.mgSemana} mg</strong> de los {meta} mg de la semana</p>
      </div>
      {!enHoy && <PuntosSemana semana={semana} />}
      <p className="reto-racha">{frase}</p>
      <Link to="/hierro" className={`resumen-semaforo semaforo-${hierro.color}`}>
        <span className="semaforo-luces" aria-hidden="true"><i /><i /><i /></span>
        <span><strong>Semáforo de hierro</strong> · {semana.vacias} {semana.vacias === 1 ? 'lonchera vacía' : 'loncheras vacías'}</span>
        <Icono n="derecha" tam={18} />
      </Link>
      <button type="button" className="enlace enlace-compartir" onClick={enviar}><Icono n="compartir" tam={18} /> Enviar la semana</button>
      {!pasada && !enHoy && <Link to="/loncheras" className="boton boton-primario boton-ancho boton-reto"><Icono n="lonchera" tam={22} /><span>Armar las loncheras de la próxima semana</span></Link>}
    </section>
  );
}

const tituloDia = (f: string, hoy: string) => (f === hoy ? 'Hoy' : `${nombreDia(f)[0].toUpperCase()}${nombreDia(f).slice(1)} ${fechaCorta(f)}`);

/** Pantalla /hoy: el detalle del día (cada comida con sus mg), los puntitos de la semana y el resumen semanal. */
export default function Hoy() {
  const nino = useEstado(ninoActivo);
  const ninos = useEstado(e => e.ninos.length);
  const hoy = hoyISO();
  const [dia, setDia] = useState(hoy);
  const semana = useRacha(nino?.id || '', hoy);
  const hierro = useHierroDelDia(nino?.id || '', dia);
  const registros = useRegistrosDelDia(nino?.id || '', dia);
  const progreso = useProgreso(nino?.id || '');
  const lonchera = useLoncheraDelPlan(nino?.id || '', dia);
  const vacia = useEstado(e => Boolean(nino && e.reto[nino.id]?.[dia]));
  const [celebrando, setCelebrando] = useState<number | undefined>();
  const [hoja, setHoja] = useState(false);

  if (!nino) return (
    <div className="pantalla"><Encabezado titulo="El hierro de hoy" atras="/" />
      <div className="vacio"><Andi tam={110} animo="piensa" /><h3>Primero crea el perfil de tu hijo</h3><p>Así Andi lleva su hierro de cada día y sus estrellas.</p>
        <Link to="/bienvenida?volver=/hoy" className="boton boton-primario">Crear perfil</Link></div></div>
  );

  const alternarVacia = () => {
    if (vacia) { marcarVacia(nino.id, dia, false); aviso('Listo, sin marcar'); return; }
    marcarVacia(nino.id, dia, true);
    const mg = mgDeLoncheraVacia(obtener(), nino.id, dia); // la celebración muestra el AndiBite recién sumado
    if (dia === hoy) setCelebrando(mg ?? 0); else aviso(`+1 estrella para ${nino.apodo}`);
  };
  const enviar = () => compartirTexto(`El hierro de ${nino.apodo}`, textoHoy(nino.apodo, hierro, registros.map(r => r.nombre), vacia));
  const alternarPlan = () => {
    if (!lonchera) return;
    if (lonchera.dia.hecho) { desmarcarLoncheraDelPlan(nino.id, dia); aviso('Listo, sin marcar'); return; }
    const mg = registrarLoncheraDelPlan(nino.id, dia);
    if (mg !== null) aviso(`+${mg} mg de la lonchera del plan`);
  };

  return (
    <Cascada className="pantalla reto">
      <Encabezado titulo="El hierro de hoy" atras="/" />
      {ninos > 1 && <Item><SelectorNino /></Item>}
      <Item as="section" className="tarjeta reto-semana">
        <div className="reto-cabeza"><h2>Esta semana</h2><span className="reto-estrellas"><Icono n="estrella" tam={18} /> {progreso.estrellas}</span></div>
        <PuntosSemana semana={semana} seleccion={dia} alTocar={setDia} />
        <p className="reto-racha"><Icono n="rayo" tam={16} /> {semana.racha >= 2 ? `${semana.racha} días seguidos con la lonchera vacía` : `${semana.vacias} de 5 loncheras volvieron vacías`}</p>
      </Item>

      <Item as="section" className={`tarjeta dia-detalle ${hierro.porcentaje >= 100 ? 'dia-completo' : ''}`} aria-labelledby="dia-titulo">
        <div className="reto-cabeza">
          <h2 id="dia-titulo">{tituloDia(dia, hoy)}</h2>
          <span className="dia-mg"><strong>{hierro.mg}</strong> de {hierro.referencia} mg</span>
        </div>
        <p className="reto-racha">{hierro.porcentaje >= 100 ? 'Ya llegó a lo que necesita.' : `Le faltan ${hierro.faltan} mg para el día.`}</p>
        <div className="dia-lista">
          {registros.length === 0 ? <p className="nota">Nada registrado este día todavía.</p> : registros.map(r => <FilaRegistro key={r.id} r={r} alBorrar={() => { quitarRegistro(r.id); aviso('Borrado'); }} />)}
        </div>
        <div className="dia-acciones">
          <button type="button" className={`chip ${vacia ? 'chip-activo' : ''}`} onClick={alternarVacia} aria-pressed={vacia}><Icono n="lonchera" tam={16} /> {vacia ? 'Volvió vacía' : 'Marcar: volvió vacía'}</button>
          {lonchera && <button type="button" className={`chip ${lonchera.dia.hecho ? 'chip-activo' : ''}`} onClick={alternarPlan} aria-pressed={!!lonchera.dia.hecho}><Icono n="check" tam={16} /> {lonchera.dia.hecho ? 'Lonchera del plan' : `Lonchera del plan · ${lonchera.dia.hierroMg} mg`}</button>}
        </div>
        <Boton ancho tipo="secundario" icono="sumar" onClick={() => setHoja(true)}>Otra comida con hierro</Boton>
        <Boton ancho tipo="secundario" icono="compartir" onClick={enviar}>Enviar a papá o mamá</Boton>
      </Item>

      <Item><ResumenSemana nino={nino} enHoy /></Item>
      <HojaComida abierta={hoja} alCerrar={() => setHoja(false)} nino={nino} fecha={dia} />
      <AnimatePresence>{celebrando !== undefined && <Celebracion nino={nino} racha={semana.racha} mg={celebrando || undefined} alCerrar={() => setCelebrando(undefined)} />}</AnimatePresence>
    </Cascada>
  );
}
