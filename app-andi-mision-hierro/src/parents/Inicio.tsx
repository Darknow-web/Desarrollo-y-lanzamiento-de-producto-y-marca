// Inicio de papá y mamá: "El hierro de hoy", un control diario y minimalista del hierro que lleva el niño.
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import Andi from '../components/Andi';
import Icono from '../components/Icono';
import { aviso } from '../components/ui';
import { Cascada, Item } from '../components/movimiento';
import SelectorNino from './SelectorNino';
import { Celebracion, HojaComida, PuntosSemana, ResumenSemana, esFinDeSemana } from './Reto';
import { desmarcarLoncheraDelPlan, marcarVacia, mgDeLoncheraVacia, ninoActivo, obtener, registrarLoncheraDelPlan, useEstado, useHierroDelDia, useLoncheraDelPlan, useProgreso, useRacha } from '../lib/estado';
import { hoyISO, relativa, sumarDias } from '../lib/fechas';
import { diasHastaAcabar } from '../lib/hierro';
import type { Nino } from '../lib/tipos';

export const SLOGAN = 'Dulce para ellos. Tranquilidad para ti.';
const SALUDO = () => { const h = new Date().getHours(); return h < 12 ? 'Buenos días' : h < 19 ? 'Buenas tardes' : 'Buenas noches'; };

function Marca() {
  return (
    <header className="marca-cabeza">
      <img src="/marca/logo-andibite.png" alt="AndiBite" width={150} height={51} />
      <Link to="/mas" className="btn-icono" aria-label="Más opciones y ajustes"><Icono n="ajustes" /></Link>
    </header>
  );
}

/** Sin hijo registrado: el hero invita a crearlo; el control del hierro empieza ahí. */
function HeroSinNino() {
  return (
    <section className="reto-hero reto-invita">
      <Andi tam={96} className="andi-flota" />
      <p className="kicker">El hierro de hoy</p>
      <h2 className="reto-titulo">Cada tarde, en un toque, sabes cuánto hierro lleva tu hijo</h2>
      <Link to="/bienvenida?volver=/" className="boton boton-primario boton-ancho boton-reto"><Icono n="sumar" tam={22} /><span>Crear el perfil de mi hijo</span></Link>
    </section>
  );
}

const RADIO = 54;
const LARGO = 2 * Math.PI * RADIO;

/** Anillo del hierro de hoy: el porcentaje grande en el centro y los mg frente a la referencia. */
function Anillo({ mg, referencia, porcentaje }: { mg: number; referencia: number; porcentaje: number }) {
  const reducir = useReducedMotion();
  const completo = porcentaje >= 100;
  const avance = Math.min(1, porcentaje / 100);
  return (
    <div className={`anillo ${completo ? 'anillo-completo' : ''}`} role="img" aria-label={`${porcentaje} % del hierro de hoy: ${mg} de ${referencia} mg`}>
      <svg viewBox="0 0 128 128" width="156" height="156" aria-hidden="true">
        <circle cx="64" cy="64" r={RADIO} className="anillo-pista" />
        <motion.circle cx="64" cy="64" r={RADIO} className="anillo-avance" strokeDasharray={LARGO}
          initial={reducir ? false : { strokeDashoffset: LARGO }}
          animate={{ strokeDashoffset: LARGO * (1 - avance) }}
          transition={{ duration: reducir ? 0 : 1, ease: [0.22, 0.8, 0.24, 1], delay: 0.15 }} />
      </svg>
      <div className="anillo-centro">
        <strong>{porcentaje}<small>%</small></strong>
        <span>{mg} de {referencia} mg</span>
      </div>
    </div>
  );
}

/** Hero del inicio: el anillo del hierro de hoy y las tres acciones. En fin de semana, la semana entera. */
function HeroHoy({ nino }: { nino: Nino }) {
  const hoy = hoyISO();
  const semana = useRacha(nino.id, hoy);
  const hierro = useHierroDelDia(nino.id, hoy);
  const vacia = useEstado(e => Boolean(e.reto[nino.id]?.[hoy]));
  const lonchera = useLoncheraDelPlan(nino.id, hoy);
  const [celebrando, setCelebrando] = useState<number | undefined>();
  const [hoja, setHoja] = useState(false);
  if (esFinDeSemana(hoy)) return <ResumenSemana nino={nino} />;

  const completo = hierro.porcentaje >= 100;
  const alternarVacia = () => {
    if (vacia) { marcarVacia(nino.id, hoy, false); aviso('Listo, sin marcar'); return; }
    marcarVacia(nino.id, hoy, true);
    setCelebrando(mgDeLoncheraVacia(obtener(), nino.id, hoy) ?? 0);
  };
  const alternarPlan = () => {
    if (!lonchera) return;
    if (lonchera.dia.hecho) { desmarcarLoncheraDelPlan(nino.id, hoy); aviso('Listo, sin marcar'); return; }
    const mg = registrarLoncheraDelPlan(nino.id, hoy);
    if (mg !== null) aviso(`+${mg} mg de la lonchera del plan`);
  };

  return (
    <section className={`reto-hero hero-hoy ${completo ? 'reto-hecho' : ''}`} aria-labelledby="hoy-titulo">
      <div className="reto-cabeza">
        <p className="kicker">El hierro de hoy</p>
        <Link to="/hoy" className="reto-ver">Ver el día <Icono n="derecha" tam={16} /></Link>
      </div>
      <Anillo mg={hierro.mg} referencia={hierro.referencia} porcentaje={hierro.porcentaje} />
      <h2 id="hoy-titulo" className="hoy-titulo" aria-live="polite">{completo ? 'Hoy ya llegó a lo que necesita' : `Le faltan ${hierro.faltan} mg para hoy`}</h2>
      <div className="acciones-hoy" role="group" aria-label="Sumar hierro a hoy">
        <motion.button type="button" className={`accion-hoy ${vacia ? 'hecha' : 'principal'}`} onClick={alternarVacia} aria-pressed={vacia} whileTap={{ scale: 0.96 }}>
          <Icono n={vacia ? 'check' : 'lonchera'} tam={22} grosor={vacia ? 3 : 2} /><span>{vacia ? 'Volvió vacía' : 'Volvió vacía hoy'}</span>
        </motion.button>
        <motion.button type="button" className={`accion-hoy ${lonchera?.dia.hecho ? 'hecha' : ''}`} onClick={alternarPlan} disabled={!lonchera} aria-pressed={!!lonchera?.dia.hecho} whileTap={{ scale: 0.96 }}>
          <Icono n={lonchera?.dia.hecho ? 'check' : 'sumar'} tam={22} grosor={lonchera?.dia.hecho ? 3 : 2} /><span>Lonchera del plan</span>
        </motion.button>
        <motion.button type="button" className="accion-hoy" onClick={() => setHoja(true)} whileTap={{ scale: 0.96 }}>
          <Icono n="sumar" tam={22} /><span>Otra comida</span>
        </motion.button>
      </div>
      <PuntosSemana semana={semana} />
      <HojaComida abierta={hoja} alCerrar={() => setHoja(false)} nino={nino} fecha={hoy} />
      <AnimatePresence>{celebrando !== undefined && <Celebracion nino={nino} racha={semana.racha} mg={celebrando || undefined} alCerrar={() => setCelebrando(undefined)} />}</AnimatePresence>
    </section>
  );
}

export default function Inicio() {
  const nino = useEstado(ninoActivo);
  const ninos = useEstado(e => e.ninos.length);
  const despensa = useEstado(e => e.despensa);
  const planVigente = useLoncheraDelPlan(nino?.id || '', hoyISO())?.plan ?? null;
  const progreso = useProgreso(nino?.id || '');

  const hoy = hoyISO();
  const activos = despensa.filter(d => d.restantes > 0);
  const restantes = activos.reduce((a, d) => a + d.restantes, 0);
  const porSemana = activos.reduce((a, d) => Math.max(a, d.porSemana), 0) || 5;
  const dias = diasHastaAcabar(restantes, porSemana);
  const seAcaba = despensa.length > 0 && (restantes === 0 || dias <= 2);
  const hechas = planVigente ? planVigente.dias.filter(d => d.hecho).length : 0;

  return (
    <Cascada className="pantalla inicio">
      <Item><Marca /></Item>
      <Item className="inicio-saludo">
        <div>
          <p className="kicker">{SLOGAN}</p>
          <h1 className="titulo-pantalla">{SALUDO()}{nino ? `, familia de ${nino.apodo}` : ''}</h1>
        </div>
        <Andi tam={64} className="andi-mini" />
      </Item>
      {ninos > 1 && <Item><SelectorNino /></Item>}

      <Item>{nino ? <HeroHoy nino={nino} /> : <HeroSinNino />}</Item>

      <Item as="section" className="rutas" aria-label="Secciones">
        <Link to="/loncheras" className="tarjeta ruta">
          <span className="ruta-icono"><Icono n="lonchera" /></span>
          <span className="ruta-texto"><strong>Loncheras de la semana</strong><small>{planVigente ? `${hechas} de 5 listas` : 'Arma 5 loncheras con hierro en un minuto'}</small></span>
          <Icono n="derecha" tam={18} />
        </Link>
        <Link to="/despensa" className={`tarjeta ruta ${seAcaba ? 'ruta-alerta' : ''}`}>
          <span className="ruta-icono"><Icono n={seAcaba ? 'campana' : 'bolsa'} /></span>
          <span className="ruta-texto"><strong>Mi despensa y pedido</strong><small>{despensa.length === 0 ? 'Escanea o agrega tu pack' : restantes === 0 ? 'Se acabó el pack: pídelo por WhatsApp' : seAcaba ? `Quedan ${restantes}: ya toca pedir` : `Quedan ${restantes} brownies, hasta ${relativa(sumarDias(hoy, dias))}`}</small></span>
          <Icono n="derecha" tam={18} />
        </Link>
        <Link to="/ninos" className="tarjeta ruta ruta-ninos">
          <span className="ruta-icono"><Andi tam={40} /></span>
          <span className="ruta-texto"><strong>Misión Hierro para tu hijo</strong><small>{nino ? `Juegos con Andi · ${progreso.estrellas} ${progreso.estrellas === 1 ? 'estrella' : 'estrellas'}` : 'Juegos con Andi sobre comidas con hierro'}</small></span>
          <Icono n="candado" tam={18} />
        </Link>
      </Item>
    </Cascada>
  );
}
