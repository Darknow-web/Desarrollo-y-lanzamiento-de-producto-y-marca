import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icono from '../components/Icono';
import { Boton, Encabezado, Tarjeta, Vacio, aviso } from '../components/ui';
import SelectorNino from './SelectorNino';
import { actualizar, ninoActivo, useEstado } from '../lib/estado';
import { fechaCorta, fechaLarga, hoyISO, relativa } from '../lib/fechas';
import { umbralHemoglobina } from '../lib/hierro';
import { descargarRecordatorio } from '../lib/ics';

export default function Hemoglobina() {
  const nino = useEstado(ninoActivo);
  const datos = useEstado(e => (nino ? e.hemoglobina[nino.id] : undefined)) || { resultados: [] };
  const [fecha, setFecha] = useState(hoyISO());
  const [valor, setValor] = useState('');
  const ir = useNavigate();
  if (!nino) return (
    <div className="pantalla"><Encabezado titulo="Hemoglobina" atras="/" />
      <Vacio icono="calendario" titulo="Crea el perfil de tu hijo" texto="Para anotar sus controles y recordarte el próximo."><Boton onClick={() => ir('/bienvenida?volver=/hemoglobina')}>Crear perfil</Boton></Vacio></div>
  );
  const guardar = (f: (h: typeof datos) => void) => actualizar(e => { const h = e.hemoglobina[nino.id] ||= { resultados: [] }; f(h); });
  const umbral = umbralHemoglobina(nino.edad);
  const res = [...datos.resultados].sort((a, b) => a.fecha.localeCompare(b.fecha));
  const vals = res.map(r => r.valor); const min = Math.min(umbral - 1, ...vals); const max = Math.max(umbral + 2, ...vals);
  const y = (v: number) => 110 - ((v - min) / (max - min)) * 100;
  const x = (i: number) => (res.length === 1 ? 150 : 20 + (i * 260) / (res.length - 1));

  return (
    <div className="pantalla hemoglobina">
      <Encabezado titulo="Control de hemoglobina" atras="/" />
      <SelectorNino />
      <Tarjeta>
        <h2>Próximo control</h2>
        {datos.proxima ? <p className="grande"><Icono n="calendario" /> {fechaLarga(datos.proxima)} <small>({relativa(datos.proxima)})</small></p> : <p className="nota">Anota la fecha que te indicó el pediatra y te lo recordamos.</p>}
        <label className="campo"><span>Fecha del control</span><input type="date" value={datos.proxima || ''} min={hoyISO()} onChange={e => guardar(h => { h.proxima = e.target.value || undefined; })} /></label>
        {datos.proxima && <Boton tipo="secundario" icono="calendario" onClick={() => descargarRecordatorio({ titulo: `Control de hemoglobina de ${nino.apodo}`, fecha: datos.proxima!, descripcion: 'Lleva el carné de control. Recordatorio de la app AndiBite.' })}>Agregar a mi calendario</Boton>}
      </Tarjeta>
      <Tarjeta>
        <h2>Resultados</h2>
        {res.length > 0 && (
          <svg viewBox="0 0 300 130" className="grafico-hemo" role="img" aria-label="Evolución de la hemoglobina">
            <line x1="10" x2="290" y1={y(umbral)} y2={y(umbral)} className="umbral" />
            <text x="290" y={y(umbral) + 12} textAnchor="end" className="umbral-txt">referencia OMS {umbral} g/dL</text>
            {res.length > 1 && <polyline points={res.map((r, i) => `${x(i)},${y(r.valor)}`).join(' ')} className="linea" />}
            {res.map((r, i) => <g key={r.fecha + i}><circle cx={x(i)} cy={y(r.valor)} r="5" className="punto" /><text x={x(i)} y={y(r.valor) - 9} textAnchor="middle" className="valor">{r.valor}</text><text x={x(i)} y="126" textAnchor="middle" className="eje">{fechaCorta(r.fecha)}</text></g>)}
          </svg>
        )}
        <form className="fila-form" onSubmit={e => { e.preventDefault(); const v = Number(valor.replace(',', '.')); if (v < 4 || v > 20) { aviso('Revisa el valor (g/dL)'); return; } guardar(h => { h.resultados.push({ fecha, valor: Math.round(v * 10) / 10 }); }); setValor(''); aviso('Resultado guardado'); }}>
          <label className="campo"><span>Fecha</span><input type="date" value={fecha} max={hoyISO()} onChange={e => setFecha(e.target.value)} /></label>
          <label className="campo"><span>Hemoglobina (g/dL)</span><input inputMode="decimal" placeholder="11.8" value={valor} onChange={e => setValor(e.target.value)} /></label>
          <Boton submit tipo="suave" icono="sumar" deshabilitado={!valor}>Guardar</Boton>
        </form>
        {res.slice().reverse().map((r, i) => (
          <div key={r.fecha + i} className="fila"><span><strong>{r.valor} g/dL</strong><small>{fechaLarga(r.fecha)}</small></span>
            <button className="btn-icono" aria-label="Borrar" onClick={() => guardar(h => { h.resultados = h.resultados.filter(x => !(x.fecha === r.fecha && x.valor === r.valor)); })}><Icono n="basura" tam={18} /></button></div>
        ))}
      </Tarjeta>
      <p className="nota">La referencia es de la OMS (2024), a nivel del mar, para la edad de {nino.apodo}. Solo tu pediatra puede interpretar el resultado. Estos datos se guardan únicamente en tu teléfono.</p>
    </div>
  );
}
