import { useEffect, useState, type CSSProperties } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Icono from '../components/Icono';
import { Boton, Encabezado, Tarjeta, aviso } from '../components/ui';
import { consultarCodigo, consultarLote, ErrorApi, type RespuestaCodigo } from '../lib/api';
import { actualizar, ninoActivo, nuevoId, obtener, useEstado } from '../lib/estado';
import { fechaLarga, hoyISO } from '../lib/fechas';
import { referenciaDiaria } from '../lib/hierro';
import { codigoValido, normalizarCodigo } from '../lib/codigo';
import { COLOR_SABOR, DESCRIPCION_SABOR, NOMBRE_PRESENTACION } from '../data/precios';
import { ANDIBITE_ID } from '../data/alimentos';
import type { Lote as TLote } from '../lib/tipos';

const MENSAJES: Record<string, string> = {
  codigo_invalido: 'Ese código no es válido. Revisa que esté bien escrito (AB-XXXX-XXXX).',
  codigo_no_encontrado: 'No encontramos ese código. ¿Lo escribiste bien?',
  lote_no_encontrado: 'No encontramos el lote de este código.',
  sin_conexion: 'No hay conexión. Cuando vuelva, intenta otra vez.',
};

export default function Lote() {
  const { code, id } = useParams();
  const ir = useNavigate();
  const [datos, setDatos] = useState<{ lote: TLote; codigo?: RespuestaCodigo['codigo'] } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const nino = useEstado(ninoActivo);
  const despensa = useEstado(e => e.despensa);

  useEffect(() => {
    setDatos(null); setError(null);
    if (code) {
      const n = normalizarCodigo(code);
      if (!n || !codigoValido(n)) { setError('codigo_invalido'); return; }
      consultarCodigo(n).then(r => {
        setDatos(r);
        actualizar(e => { if (!e.codigosVistos.some(c => c.code === r.codigo.code)) e.codigosVistos.unshift({ code: r.codigo.code, loteId: r.lote.id, fecha: hoyISO() }); e.codigosVistos = e.codigosVistos.slice(0, 30); });
      }).catch((e: ErrorApi) => setError(e.codigo));
    } else if (id) {
      consultarLote(id).then(lote => setDatos({ lote })).catch((e: ErrorApi) => setError(e.codigo));
    }
  }, [code, id]);

  if (error) return (
    <div className="pantalla">
      <Encabezado titulo="Tu lote" atras="/escanear" />
      <Tarjeta className="error-tarjeta"><Icono n="info" tam={28} /><p>{MENSAJES[error] || 'Algo salió mal. Intenta otra vez.'}</p>
        <Boton tipo="secundario" icono="qr" onClick={() => ir('/escanear')}>Escanear otra vez</Boton></Tarjeta>
    </div>
  );
  if (!datos) return <div className="pantalla"><Encabezado titulo="Tu lote" atras="/" /><div className="cargando" aria-label="Cargando"><i /><i /><i /></div></div>;

  const { lote, codigo } = datos;
  const color = COLOR_SABOR[lote.sabor];
  const ref = nino ? referenciaDiaria(nino.edad) : 10;
  const pct = Math.round((lote.hierroMgPorUnidad / ref) * 100);
  const enDespensa = codigo && despensa.some(d => d.codigo === codigo.code);

  const registrar = () => {
    const e = obtener();
    if (!e.consentimiento || !nino) { ir(`/bienvenida?volver=${encodeURIComponent(location.pathname)}`); return; }
    actualizar(s => {
      s.registros.push({ id: nuevoId(), ninoId: nino.id, fecha: hoyISO(), alimentoId: ANDIBITE_ID, nombre: `AndiBite ${lote.sabor}`, mg: lote.hierroMgPorUnidad, hemo: true, conVitC: false, loteId: lote.id });
      const d = s.despensa.find(x => x.restantes > 0 && (!codigo || x.codigo === codigo.code)) || s.despensa.find(x => x.restantes > 0);
      if (d) d.restantes -= 1;
    });
    aviso(`Listo: +${lote.hierroMgPorUnidad} mg en el semáforo de ${nino.apodo}`);
  };
  const aDespensa = () => {
    if (!codigo) return;
    if (!obtener().consentimiento) { ir(`/bienvenida?volver=${encodeURIComponent(location.pathname)}`); return; }
    actualizar(s => { s.despensa.unshift({ id: nuevoId(), presentacion: codigo.presentacion, sabor: lote.sabor, unidades: codigo.unidades, restantes: codigo.unidades, porSemana: 5, desde: hoyISO(), codigo: codigo.code, loteId: lote.id }); });
    aviso('Agregado a tu despensa');
  };
  const compartir = async () => {
    const texto = `AndiBite ${lote.sabor}, lote ${lote.id}: ${lote.hierroMgPorUnidad} mg de hierro por brownie, medido en laboratorio.`;
    try { if (navigator.share) await navigator.share({ title: 'Mi lote AndiBite', text: texto, url: location.href }); else { await navigator.clipboard.writeText(`${texto} ${location.href}`); aviso('Copiado'); } } catch { /* cancelado */ }
  };

  return (
    <div className="pantalla lote">
      <Encabezado titulo="Tu lote" atras="/" accion={<button className="btn-icono" onClick={compartir} aria-label="Compartir"><Icono n="compartir" /></button>} />
      <section className="lote-cabeza" style={{ '--sabor': color } as CSSProperties}>
        <div className="lote-sabor"><span>AndiBite</span><strong>{lote.sabor}</strong><small>{DESCRIPCION_SABOR[lote.sabor]}</small></div>
        {lote.demo && <span className="sello-demo" title="Datos de demostración">DEMO</span>}
        <div className="lote-hierro">
          <span className="lote-hierro-num">{lote.hierroMgPorUnidad.toFixed(1)}<small>mg</small></span>
          <span className="lote-hierro-txt">de hierro por brownie<br /><strong>medido en laboratorio</strong></span>
        </div>
        {lote.hierroHemoMgPorUnidad != null && <p className="lote-hemo">{lote.hierroHemoMgPorUnidad.toFixed(1)} mg es hierro hemínico, el que mejor se absorbe.</p>}
      </section>

      <Tarjeta className="lote-aporte">
        <div className="aro" style={{ '--pct': Math.min(100, pct) } as CSSProperties}><span>{pct}%</span></div>
        <p>{nino ? <>Para <strong>{nino.apodo}</strong> ({nino.edad} años), un brownie aporta el <strong>{pct} %</strong> del hierro que necesita en el día ({ref} mg en toda su alimentación).</>
          : <>Un brownie aporta el <strong>{pct} %</strong> del hierro diario de un niño de 4 a 8 años (10 mg en toda su alimentación).</>}</p>
      </Tarjeta>

      <div className="acciones-lote">
        <Boton icono="check" onClick={registrar} ancho>Lo comió hoy</Boton>
        {codigo && codigo.presentacion !== 'unidad' && (enDespensa
          ? <Link to="/despensa" className="boton boton-secundario boton-ancho"><Icono n="bolsa" tam={20} /><span>Ya está en tu despensa</span></Link>
          : <Boton icono="bolsa" tipo="secundario" onClick={aDespensa} ancho>Agregar a mi despensa</Boton>)}
      </div>

      <Tarjeta className="ficha">
        <h2>Ficha del lote</h2>
        <dl>
          <div><dt>Lote</dt><dd>{lote.id}</dd></div>
          {codigo && <div><dt>Envase</dt><dd>{NOMBRE_PRESENTACION[codigo.presentacion]} · {codigo.code}</dd></div>}
          <div><dt>Producción</dt><dd>{fechaLarga(lote.fechaProduccion)}</dd></div>
          <div><dt>Vence</dt><dd>{fechaLarga(lote.fechaVencimiento)}</dd></div>
          {lote.azucarGPorUnidad != null && <div><dt>Azúcar</dt><dd>{lote.azucarGPorUnidad} g por brownie</dd></div>}
          <div><dt>Octógonos</dt><dd>{lote.octogonos.length ? lote.octogonos.join(', ') : 'Ninguno'}</dd></div>
          <div><dt>Análisis</dt><dd>{lote.laboratorio}{lote.informe ? `, informe ${lote.informe}` : ''}{lote.fechaInforme ? ` (${fechaLarga(lote.fechaInforme)})` : ''}</dd></div>
          <div><dt>Sangrecita</dt><dd>{lote.origenSangrecita}</dd></div>
          <div><dt>Registro sanitario</dt><dd>{lote.registroSanitario}</dd></div>
          <div><dt>Elaborado en</dt><dd>{lote.planta}</dd></div>
          {lote.alergenos.length > 0 && <div><dt>Alérgenos</dt><dd>Contiene: {lote.alergenos.join(', ')}</dd></div>}
        </dl>
        {lote.ingredientes && <details><summary>Ingredientes</summary><p>{lote.ingredientes}</p></details>}
      </Tarjeta>
      {lote.demo && <p className="nota">Este lote es de demostración. En cada lote real, estos datos salen del informe del laboratorio.</p>}
      <p className="nota">AndiBite aporta hierro; no reemplaza una alimentación variada ni las indicaciones de tu pediatra.</p>
    </div>
  );
}
