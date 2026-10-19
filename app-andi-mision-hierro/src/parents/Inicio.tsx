import { Link } from 'react-router-dom';
import Andi from '../components/Andi';
import Icono from '../components/Icono';
import { Cascada, Item } from '../components/movimiento';
import SelectorNino from './SelectorNino';
import { RetoHero } from './Reto';
import { ninoActivo, useEstado, useProgreso } from '../lib/estado';
import { hoyISO, lunesDe, relativa, sumarDias } from '../lib/fechas';
import { diasHastaAcabar } from '../lib/hierro';

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

/** Sin hijo registrado: el hero invita a crearlo; el reto empieza ahí. */
function HeroSinNino() {
  return (
    <section className="reto-hero reto-invita">
      <Andi tam={96} className="andi-flota" />
      <p className="kicker">Reto lonchera vacía</p>
      <h2 className="reto-titulo">Cada día que la lonchera vuelve vacía, tu hijo gana una estrella</h2>
      <Link to="/bienvenida?volver=/" className="boton boton-primario boton-ancho boton-reto"><Icono n="sumar" tam={22} /><span>Crear el perfil de mi hijo</span></Link>
    </section>
  );
}

export default function Inicio() {
  const nino = useEstado(ninoActivo);
  const ninos = useEstado(e => e.ninos.length);
  const despensa = useEstado(e => e.despensa);
  const plan = useEstado(e => e.loncheras);
  const progreso = useProgreso(nino?.id || '');

  const hoy = hoyISO();
  const activos = despensa.filter(d => d.restantes > 0);
  const restantes = activos.reduce((a, d) => a + d.restantes, 0);
  const porSemana = activos.reduce((a, d) => Math.max(a, d.porSemana), 0) || 5;
  const dias = diasHastaAcabar(restantes, porSemana);
  const seAcaba = despensa.length > 0 && (restantes === 0 || dias <= 2);
  const planVigente = plan && nino && plan.ninoId === nino.id && plan.semana === lunesDe(hoy) ? plan : null;
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

      <Item>{nino ? <RetoHero nino={nino} /> : <HeroSinNino />}</Item>

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
