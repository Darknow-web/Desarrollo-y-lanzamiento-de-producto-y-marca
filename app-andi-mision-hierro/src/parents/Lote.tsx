import { useEffect, useState, type CSSProperties } from 'react';
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Icono from '../components/Icono';
import { Boton, Encabezado, Tarjeta, aviso } from '../components/ui';
import { Cascada, Contador, Item } from '../components/movimiento';
import { consultarCodigo, consultarLote, ErrorApi, type RespuestaCodigo } from '../lib/api';
import { actualizar, ninoActivo, nuevoId, obtener, useEstado } from '../lib/estado';
import { fechaLarga, hoyISO } from '../lib/fechas';
import { referenciaDiaria } from '../lib/hierro';
import { codigoValido, normalizarCodigo } from '../lib/codigo';
import { COLOR_SABOR, DESCRIPCION_SABOR, NOMBRE_PRESENTACION } from '../data/precios';
import type { Lote as TLote } from '../lib/tipos';

const MENSAJES: Record<string, string> = {
  codigo_invalido: 'Ese código no es válido. Revisa que esté bien escrito (AB-XXXX-XXXX).',
  codigo_no_encontrado: 'No encontramos ese código. ¿Lo escribiste bien?',
  lote_no_encontrado: 'No encontramos el lote de este código.',
  sin_conexion: 'No hay conexión. Cuando vuelva, intenta otra vez.',
};

export const porCien = (valor: number, peso = 20) => Math.round((valor * 100) / peso * 10) / 10;

export default function Lote() {
  const { code, id } = useParams();
  const [q] = useSearchParams();
  const { pathname } = useLocation();
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
        actualizar(e => { e.codigosVistos = [{ code: r.codigo.code, loteId: r.lote.id, fecha: hoyISO() }, ...e.codigosVistos.filter(c => c.code !== r.codigo.code)].slice(0, 30); });
      }).catch((e: ErrorApi) => setError(e.codigo));
    } else if (id) {
      consultarLote(id).then(lote => setDatos({ lote })).catch((e: ErrorApi) => setError(e.codigo));
    }
  }, [code, id]);

  const codigo = datos?.codigo;
  const enDespensa = Boolean(codigo && despensa.some(d => d.codigo === codigo.code));

  const agregar = () => {
    if (!datos || !codigo) return;
    if (!obtener().consentimiento) { ir(`/bienvenida?volver=${encodeURIComponent(`${pathname}?agregar=1`)}`); return; }
    if (!obtener().despensa.some(d => d.codigo === codigo.code)) {
      actualizar(s => { s.despensa.unshift({ id: nuevoId(), presentacion: codigo.presentacion, sabor: datos.lote.sabor, unidades: codigo.unidades, restantes: codigo.unidades, porSemana: 5, desde: hoyISO(), codigo: codigo.code, loteId: datos.lote.id }); });
    }
    aviso(`${NOMBRE_PRESENTACION[codigo.presentacion]} agregado a tu despensa`);
    ir('/despensa');
  };
  // Al volver del consentimiento con ?agregar=1, se agrega solo.
  useEffect(() => { if (datos && codigo && q.get('agregar') === '1' && obtener().consentimiento) agregar(); /* eslint-disable-next-line */ }, [datos]);

  if (error) return (
    <div className="pantalla">
      <Encabezado titulo="Tu lote" atras="/escanear" />
      <Tarjeta className="error-tarjeta"><Icono n="info" tam={28} /><p>{MENSAJES[error] || 'Algo salió mal. Intenta otra vez.'}</p>
        <Boton tipo="secundario" icono="qr" onClick={() => ir('/escanear')}>Escanear otra vez</Boton></Tarjeta>
    </div>
  );
  if (!datos) return <div className="pantalla"><Encabezado titulo="Tu lote" atras="/" /><div className="cargando" aria-label="Cargando"><i /><i /><i /></div></div>;

  const { lote } = datos;
  const peso = lote.pesoUnidadG || 20;
  const ref = nino ? referenciaDiaria(nino.edad) : 10;
  const pct = Math.round((lote.hierroMgPorUnidad / ref) * 100);
  const octogonos = lote.octogonos.length;

  const compartir = async () => {
    const texto = `AndiBite ${lote.sabor}, lote ${lote.id}: ${lote.hierroMgPorUnidad.toFixed(1)} mg de hierro por brownie, medido en laboratorio.`;
    try { if (navigator.share) await navigator.share({ title: 'Mi lote AndiBite', text: texto, url: location.href }); else { await navigator.clipboard.writeText(`${texto} ${location.href}`); aviso('Enlace copiado'); } } catch { /* cancelado */ }
  };

  return (
    <Cascada className="pantalla lote">
      <Encabezado titulo="Tu lote" atras="/" accion={<button className="btn-icono" onClick={compartir} aria-label="Compartir"><Icono n="compartir" /></button>} />

      <Item as="section" className="lote-hero">
        <p className="kicker lote-kicker"><i style={{ background: COLOR_SABOR[lote.sabor] } as CSSProperties} aria-hidden="true" />Lote {lote.id} · {lote.sabor}</p>
        <h1 className="lote-titulo">Hierro medido en este lote</h1>
        <p className="lote-cifra">
          <Contador valor={lote.hierroMgPorUnidad} className="lote-numero" />
          <span className="lote-unidad"><strong>mg</strong><span>por brownie de {peso} g</span></span>
        </p>
        <div className="aporte" aria-label={`Aporta el ${pct} % del hierro diario`}>
          <div className="aporte-barra"><i style={{ width: `${Math.min(100, pct)}%` }} /></div>
          <p>{nino ? <>Para {nino.apodo} ({nino.edad} años) es el <strong>{pct} %</strong> del hierro que necesita en el día ({ref} mg en toda su alimentación).</>
            : <>Es el <strong>{pct} %</strong> del hierro que necesita al día un niño de 4 a 8 años ({ref} mg en toda su alimentación).</>}</p>
        </div>
      </Item>

      <Item className="lote-datos">
        <div className="dato"><strong>{(lote.hierroHemoMgPorUnidad ?? 0).toFixed(1)}<small> mg</small></strong><span>hierro hemo, el que mejor se absorbe</span></div>
        <div className="dato"><strong>{(lote.azucarGPorUnidad ?? 0).toFixed(1)}<small> g</small></strong><span>de azúcar; unos {porCien(lote.azucarGPorUnidad ?? 0, peso)} g en 100 g</span></div>
        <div className={`dato ${octogonos === 0 ? 'dato-positivo' : ''}`}><strong>{octogonos}</strong><span>{octogonos === 0 ? 'octógonos' : lote.octogonos.join(', ')}</span></div>
      </Item>

      <Item as="section" className="tarjeta lote-lab">
        <p className="kicker kicker-dorado">Medido, no prometido</p>
        <h2>{lote.laboratorio}</h2>
        <p>Informe {lote.informe}{lote.fechaInforme ? ` del ${fechaLarga(lote.fechaInforme)}` : ''}</p>
        <Link to={`/informe/${encodeURIComponent(lote.id)}`} className="boton boton-crema"><Icono n="documento" tam={20} /><span>Ver el informe</span></Link>
      </Item>

      {codigo && (
        <Item className="lote-accion">
          {enDespensa
            ? <Link to="/despensa" className="boton boton-secundario boton-ancho"><Icono n="bolsa" tam={20} /><span>Ya está en tu despensa</span></Link>
            : <Boton icono="bolsa" onClick={agregar} ancho>Agregar a mi despensa</Boton>}
          <p className="nota centro">{NOMBRE_PRESENTACION[codigo.presentacion]} · te avisamos antes de que se acabe.</p>
        </Item>
      )}

      <Item as="section" className="tarjeta ficha">
        <h2>Ficha del producto</h2>
        <dl>
          <div><dt>Sabor</dt><dd>{lote.sabor}: {DESCRIPCION_SABOR[lote.sabor].toLowerCase()}</dd></div>
          {codigo && <div><dt>Envase</dt><dd>{NOMBRE_PRESENTACION[codigo.presentacion]} · {codigo.code}</dd></div>}
          <div><dt>Producción</dt><dd>{fechaLarga(lote.fechaProduccion)}</dd></div>
          <div><dt>Vence</dt><dd>{fechaLarga(lote.fechaVencimiento)}</dd></div>
          {lote.alergenos.length > 0 && <div><dt>Alérgenos</dt><dd>Contiene {lote.alergenos.join(' y ').toLowerCase()}</dd></div>}
          {lote.origenSangrecita && <div><dt>Sangrecita</dt><dd>{lote.origenSangrecita}</dd></div>}
          {lote.planta && <div><dt>Elaborado en</dt><dd>{lote.planta}</dd></div>}
          {lote.ingredientes && <div className="ficha-ancha"><dt>Ingredientes</dt><dd>{lote.ingredientes}</dd></div>}
        </dl>
      </Item>
      <Item><p className="nota-legal">AndiBite aporta hierro; no reemplaza una alimentación variada ni las indicaciones de tu pediatra.</p></Item>
    </Cascada>
  );
}
