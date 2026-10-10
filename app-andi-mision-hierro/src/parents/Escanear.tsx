import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Icono from '../components/Icono';
import { Boton, Encabezado, Tarjeta } from '../components/ui';
import { codigoDesdeQR, codigoValido, mascaraCodigo } from '../lib/codigo';
import { useEstado } from '../lib/estado';
import { fechaCorta } from '../lib/fechas';

interface Detector { detect(src: CanvasImageSource): Promise<{ rawValue: string }[]> }
declare global { interface Window { BarcodeDetector?: new (o: { formats: string[] }) => Detector } }

export const CODIGO_DEMO = 'AB-2ANS-GYZ4';

export default function Escanear() {
  const ir = useNavigate();
  const video = useRef<HTMLVideoElement>(null);
  const [camara, setCamara] = useState<'apagada' | 'activa' | 'error'>('apagada');
  const [texto, setTexto] = useState('AB-');
  const vistos = useEstado(e => e.codigosVistos);
  const soporta = typeof window !== 'undefined' && 'BarcodeDetector' in window && !!navigator.mediaDevices;

  useEffect(() => {
    if (camara !== 'activa') return;
    let corriendo = true; let stream: MediaStream | null = null;
    (async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
        if (!video.current) return;
        video.current.srcObject = stream; await video.current.play();
        const det = new window.BarcodeDetector!({ formats: ['qr_code'] });
        const buscar = async () => {
          if (!corriendo || !video.current) return;
          try {
            const r = await det.detect(video.current);
            const c = r.map(x => codigoDesdeQR(x.rawValue)).find(Boolean);
            if (c) { corriendo = false; navigator.vibrate?.(60); ir(`/c/${c}`); return; }
          } catch { /* cuadro sin datos */ }
          requestAnimationFrame(buscar);
        };
        buscar();
      } catch { setCamara('error'); }
    })();
    return () => { corriendo = false; stream?.getTracks().forEach(t => t.stop()); };
  }, [camara, ir]);

  const valido = codigoValido(texto);
  const completo = texto.replace(/-/g, '').length === 10;

  return (
    <div className="pantalla escanear">
      <Encabezado titulo="Escanea tu envase" atras="/" />
      {camara === 'activa' ? (
        <div className="visor">
          <video ref={video} playsInline muted aria-label="Cámara" />
          <div className="visor-marco" aria-hidden="true"><i /><i /><i /><i /></div>
          <p>Apunta al código QR del envase</p>
          <Boton tipo="suave" onClick={() => setCamara('apagada')}>Cerrar cámara</Boton>
        </div>
      ) : (
        <Tarjeta className="escanear-intro">
          <div className="qr-ilustracion" aria-hidden="true"><Icono n="qr" tam={64} grosor={1.6} /></div>
          {soporta ? (
            <><p>El código está en la etiqueta de cada envase.</p><Boton icono="camara" ancho onClick={() => setCamara('activa')}>Abrir cámara</Boton></>
          ) : (
            <p><strong>Abre la cámara de tu celular</strong> y apunta al QR del envase: se abrirá tu lote aquí mismo. O escribe el código abajo.</p>
          )}
          {camara === 'error' && <p className="error-texto">No pudimos abrir la cámara. Revisa el permiso o escribe el código.</p>}
        </Tarjeta>
      )}

      <form className="tarjeta codigo-manual" onSubmit={e => { e.preventDefault(); if (valido) ir(`/c/${texto}`); }}>
        <label htmlFor="codigo"><strong>Escribe el código</strong><small>Está debajo del QR: AB-XXXX-XXXX</small></label>
        <input id="codigo" value={texto} inputMode="text" autoCapitalize="characters" autoComplete="off" spellCheck={false}
          onChange={e => setTexto(mascaraCodigo(e.target.value))} aria-invalid={completo && !valido} className={completo ? (valido ? 'ok' : 'mal') : ''} />
        {completo && !valido && <p className="error-texto">Ese código no existe. Revisa cada letra.</p>}
        <Boton submit deshabilitado={!valido} ancho>Ver mi lote</Boton>
        <button type="button" className="enlace" onClick={() => ir(`/c/${CODIGO_DEMO}`)}>Probar con un código de demostración</button>
      </form>

      {vistos.length > 0 && (
        <section className="lista">
          <h2>Tus envases</h2>
          {vistos.slice(0, 6).map(v => (
            <Link key={v.code} to={`/c/${v.code}`} className="fila"><Icono n="qr" /><span><strong>{v.code}</strong><small>Lote {v.loteId} · {fechaCorta(v.fecha)}</small></span><Icono n="derecha" /></Link>
          ))}
        </section>
      )}
    </div>
  );
}
