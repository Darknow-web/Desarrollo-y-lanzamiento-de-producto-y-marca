import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Icono from '../components/Icono';
import { Boton, Encabezado } from '../components/ui';
import { Cascada, Item } from '../components/movimiento';
import { codigoDesdeQR, codigoValido, mascaraCodigo } from '../lib/codigo';
import { useEstado } from '../lib/estado';
import { fechaCorta } from '../lib/fechas';
import { desbloquearPlan } from '../lib/plan';

interface Detector { detect(src: CanvasImageSource): Promise<{ rawValue: string }[]> }
declare global { interface Window { BarcodeDetector?: new (o: { formats: string[] }) => Detector } }

/** Envase de muestra para probar la app sin tener un envase a mano. */
export const CODIGO_MUESTRA = 'AB-2ANS-GYZ4';

const camaraDisponible = () => typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia;

/** Lee QR con la cámara: usa el lector del navegador (Android) o jsQR (iPhone y el resto). */
function Visor({ alLeer, alCerrar, alFallar }: { alLeer: (c: string) => void; alCerrar: () => void; alFallar: () => void }) {
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    let vivo = true; let stream: MediaStream | null = null; let timer = 0;
    (async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
        const v = video.current; if (!v || !vivo) return;
        v.srcObject = stream; await v.play();
        let det: Detector | null = null;
        try { if (window.BarcodeDetector) det = new window.BarcodeDetector({ formats: ['qr_code'] }); } catch { det = null; }
        const jsQR = det ? null : (await import('jsqr')).default;
        const lienzo = document.createElement('canvas'); const ctx = lienzo.getContext('2d', { willReadFrequently: true });
        const buscar = async () => {
          if (!vivo || !video.current) return;
          try {
            let textos: string[] = [];
            if (det) textos = (await det.detect(v)).map(x => x.rawValue);
            else if (jsQR && ctx && v.videoWidth) {
              const w = 480; const h = Math.round((v.videoHeight / v.videoWidth) * w);
              lienzo.width = w; lienzo.height = h; ctx.drawImage(v, 0, 0, w, h);
              const r = jsQR(ctx.getImageData(0, 0, w, h).data, w, h, { inversionAttempts: 'dontInvert' });
              if (r) textos = [r.data];
            }
            const c = textos.map(codigoDesdeQR).find(Boolean);
            if (c) { vivo = false; navigator.vibrate?.(60); alLeer(c); return; }
          } catch { /* cuadro sin datos */ }
          timer = window.setTimeout(buscar, det ? 60 : 160);
        };
        buscar();
      } catch { if (vivo) alFallar(); }
    })();
    return () => { vivo = false; clearTimeout(timer); stream?.getTracks().forEach(t => t.stop()); };
  }, [alLeer, alFallar]);
  return (
    <motion.div className="visor" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
      <video ref={video} playsInline muted aria-label="Cámara" />
      <div className="visor-marco" aria-hidden="true"><i /><i /><i /><i /></div>
      <p>Apunta al QR del envase</p>
      <Boton tipo="secundario" onClick={alCerrar}>Cerrar cámara</Boton>
    </motion.div>
  );
}

/** Bloque de escaneo: cámara, envase de muestra y código escrito a mano. */
export function ZonaEscaneo() {
  const ir = useNavigate();
  const [camara, setCamara] = useState<'apagada' | 'activa' | 'error'>('apagada');
  const [texto, setTexto] = useState('AB-');
  const [manual, setManual] = useState(false);
  const soporta = camaraDisponible();
  const valido = codigoValido(texto);
  const completo = texto.replace(/-/g, '').length === 10;
  // Cada pack escaneado desbloquea 14 días el plan de loncheras con IA (se guarda en el teléfono).
  const leer = useRef((c: string) => { desbloquearPlan(c); ir(`/c/${c}`); }).current;
  const fallar = useRef(() => setCamara('error')).current;

  return (
    <div className="zona-escaneo">
      <AnimatePresence mode="wait">
        {camara === 'activa'
          ? <Visor key="visor" alLeer={leer} alFallar={fallar} alCerrar={() => setCamara('apagada')} />
          : (
            <motion.div key="botones" className="escaneo-acciones" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {soporta && <Boton icono="camara" ancho onClick={() => setCamara('activa')}>Abrir la cámara</Boton>}
              <Boton icono="qr" ancho tipo={soporta ? 'secundario' : 'primario'} onClick={() => { desbloquearPlan(CODIGO_MUESTRA); ir(`/c/${CODIGO_MUESTRA}`); }}>Probar con un envase de muestra</Boton>
              {camara === 'error' && <p className="error-texto" role="alert">No pudimos abrir la cámara. Revisa el permiso, o abre la cámara de tu celular y apunta al QR.</p>}
              {!soporta && <p className="nota centro">También puedes abrir la cámara de tu celular y apuntar al QR: tu lote se abre aquí.</p>}
            </motion.div>
          )}
      </AnimatePresence>

      {!manual ? (
        <button type="button" className="enlace" onClick={() => setManual(true)}>Escribir el código del envase</button>
      ) : (
        <motion.form className="tarjeta codigo-manual" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          onSubmit={e => { e.preventDefault(); if (valido) { desbloquearPlan(texto); ir(`/c/${texto}`); } }}>
          <label htmlFor="codigo"><strong>Código del envase</strong><small>Está debajo del QR: AB-XXXX-XXXX</small></label>
          <input id="codigo" value={texto} inputMode="text" autoCapitalize="characters" autoComplete="off" spellCheck={false} autoFocus
            onChange={e => setTexto(mascaraCodigo(e.target.value))} aria-invalid={completo && !valido} className={completo ? (valido ? 'ok' : 'mal') : ''} />
          {completo && !valido && <p className="error-texto">Ese código no existe. Revisa cada letra.</p>}
          <Boton submit deshabilitado={!valido} ancho>Ver mi lote</Boton>
        </motion.form>
      )}
    </div>
  );
}

export default function Escanear() {
  const vistos = useEstado(e => e.codigosVistos);
  return (
    <Cascada className="pantalla escanear">
      <Encabezado titulo="Escanear" atras="/" />
      <Item className="escaneo-cabeza">
        <div className="qr-ilustracion" aria-hidden="true"><Icono n="qr" tam={56} grosor={1.6} /></div>
        <h1 className="titulo-pantalla">Escanea el QR de tu envase</h1>
        <p className="lead">Verás el hierro que midió el laboratorio en tu lote.</p>
      </Item>
      <Item><ZonaEscaneo /></Item>
      {vistos.length > 0 && (
        <Item as="section" className="lista">
          <h2>Tus envases</h2>
          {vistos.slice(0, 6).map(v => (
            <Link key={v.code} to={`/c/${v.code}`} className="fila"><Icono n="qr" /><span><strong>{v.code}</strong><small>Lote {v.loteId} · {fechaCorta(v.fecha)}</small></span><Icono n="derecha" /></Link>
          ))}
        </Item>
      )}
    </Cascada>
  );
}
