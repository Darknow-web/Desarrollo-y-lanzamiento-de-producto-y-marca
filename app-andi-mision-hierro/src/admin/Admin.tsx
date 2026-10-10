// Panel del equipo AndiBite: publicar el análisis de cada lote, generar e imprimir códigos y editar puntos de venta.
import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { obtenerConfig } from '../lib/api';
import type { Lote, Punto } from '../lib/tipos';

type LoteAdmin = Lote & { codigosGenerados: number; codigosEscaneados: number; escaneosTotales: number; escaneosPorDia?: Record<string, number> };
interface Codigo { code: string; loteId: string; presentacion: string; escaneos: number; creado: string }

const LOTE_VACIO: Partial<Lote> = { id: '', sabor: 'Chispa', fechaProduccion: '', fechaVencimiento: '', hierroMgPorUnidad: 0, hierroHemoMgPorUnidad: 0, azucarGPorUnidad: 0,
  octogonos: [], laboratorio: 'Laboratorio acreditado por INACAL', informe: '', fechaInforme: '', origenSangrecita: 'Sangrecita de res en polvo liofilizada, de proveedor con registro sanitario. La planta solo la hidrata.',
  registroSanitario: '', planta: 'Planta maquiladora con HACCP (Lima)', alergenos: ['Gluten (avena)', 'Huevo'], ingredientes: '', demo: false };

export default function Admin() {
  const [token, setToken] = useState(() => sessionStorage.getItem('andi.admin') || '');
  const [entrada, setEntrada] = useState('');
  const [tab, setTab] = useState<'lotes' | 'codigos' | 'puntos'>('lotes');
  const [lotes, setLotes] = useState<LoteAdmin[]>([]);
  const [error, setError] = useState('');

  const api = async <T,>(url: string, init: RequestInit = {}): Promise<T> => {
    const r = await fetch(url, { ...init, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, ...(init.headers || {}) } });
    const d = await r.json().catch(() => ({}));
    if (r.status === 401) { sessionStorage.removeItem('andi.admin'); setToken(''); throw new Error('Clave incorrecta'); }
    if (!r.ok) throw new Error(d.error || 'Error');
    return d as T;
  };
  const cargar = () => api<LoteAdmin[]>('/api/admin/resumen').then(setLotes).catch(e => setError(e.message));
  useEffect(() => { if (token) cargar(); /* eslint-disable-next-line */ }, [token]);

  if (!token) return (
    <div className="admin admin-login">
      <form onSubmit={e => { e.preventDefault(); sessionStorage.setItem('andi.admin', entrada); setToken(entrada); }}>
        <h1>Panel AndiBite</h1><p>Solo para el equipo. Ingresa la clave de administración (ADMIN_TOKEN).</p>
        <input type="password" value={entrada} onChange={e => setEntrada(e.target.value)} autoFocus />
        <button type="submit" disabled={!entrada}>Entrar</button>
        {error && <p className="admin-error">{error}</p>}
      </form>
    </div>
  );

  return (
    <div className="admin">
      <header className="admin-cabeza no-imprimir">
        <h1>Panel AndiBite</h1>
        <nav>{(['lotes', 'codigos', 'puntos'] as const).map(t => <button key={t} className={tab === t ? 'activo' : ''} onClick={() => setTab(t)}>{{ lotes: 'Lotes', codigos: 'Códigos QR', puntos: 'Puntos de venta' }[t]}</button>)}</nav>
        <button className="admin-salir" onClick={() => { sessionStorage.removeItem('andi.admin'); setToken(''); }}>Salir</button>
      </header>
      {error && <p className="admin-error no-imprimir" onClick={() => setError('')}>{error}</p>}
      {tab === 'lotes' && <Lotes lotes={lotes} api={api} recargar={cargar} setError={setError} />}
      {tab === 'codigos' && <Codigos lotes={lotes} api={api} setError={setError} recargar={cargar} />}
      {tab === 'puntos' && <Puntos api={api} setError={setError} />}
    </div>
  );
}

type Api = <T>(url: string, init?: RequestInit) => Promise<T>;

function Lotes({ lotes, api, recargar, setError }: { lotes: LoteAdmin[]; api: Api; recargar: () => void; setError: (s: string) => void }) {
  const [form, setForm] = useState<Partial<Lote> | null>(null);
  const campo = (k: keyof Lote, etiqueta: string, tipo = 'text', paso?: string) => (
    <label><span>{etiqueta}</span><input type={tipo} step={paso} value={String(form?.[k] ?? '')} onChange={e => setForm({ ...form!, [k]: tipo === 'number' ? Number(e.target.value) : e.target.value })} /></label>
  );
  const guardar = async () => {
    try {
      await api('/api/admin/lotes', { method: 'POST', body: JSON.stringify({ ...form, octogonos: (form!.octogonos || []).filter(Boolean), alergenos: (form!.alergenos || []).filter(Boolean) }) });
      setForm(null); recargar();
    } catch (e) { setError((e as Error).message); }
  };
  return (
    <section className="admin-seccion">
      <div className="admin-barra"><h2>Lotes y análisis de laboratorio</h2><button onClick={() => setForm({ ...LOTE_VACIO })}>+ Nuevo lote</button></div>
      <table className="admin-tabla">
        <thead><tr><th>Lote</th><th>Sabor</th><th>Producción</th><th>Hierro (mg/u)</th><th>Códigos</th><th>Escaneados</th><th>Escaneos</th><th /></tr></thead>
        <tbody>{lotes.map(l => (
          <tr key={l.id}><td>{l.id}{l.demo && <em> demo</em>}</td><td>{l.sabor}</td><td>{l.fechaProduccion}</td><td>{l.hierroMgPorUnidad}</td><td>{l.codigosGenerados}</td>
            <td>{l.codigosGenerados ? `${Math.round((l.codigosEscaneados / l.codigosGenerados) * 100)} %` : '—'}</td><td>{l.escaneosTotales}</td>
            <td><button onClick={() => setForm({ ...l })}>Editar</button></td></tr>
        ))}</tbody>
      </table>
      <p className="admin-nota">Meta del año 1: 30 % de envases escaneados. El hierro que se publica es el del informe del laboratorio de cada lote.</p>
      {form && (
        <div className="admin-form">
          <h3>{lotes.some(l => l.id === form.id) ? `Editar ${form.id}` : 'Nuevo lote'}</h3>
          <div className="admin-rejilla">
            {campo('id', 'Código de lote (ej.: L2701-CH)')}
            <label><span>Sabor</span><select value={form.sabor} onChange={e => setForm({ ...form, sabor: e.target.value as Lote['sabor'] })}>{['Chispa', 'Andi', 'Lúcu'].map(s => <option key={s}>{s}</option>)}</select></label>
            {campo('fechaProduccion', 'Fecha de producción', 'date')}{campo('fechaVencimiento', 'Vencimiento', 'date')}
            {campo('hierroMgPorUnidad', 'Hierro total (mg por brownie)', 'number', '0.1')}{campo('hierroHemoMgPorUnidad', 'Hierro hemínico (mg por brownie)', 'number', '0.1')}
            {campo('azucarGPorUnidad', 'Azúcar (g por brownie)', 'number', '0.1')}
            {campo('laboratorio', 'Laboratorio')}{campo('informe', 'N.° de informe')}{campo('fechaInforme', 'Fecha del informe', 'date')}
            {campo('registroSanitario', 'Registro sanitario')}{campo('planta', 'Planta')}
            <label className="ancho"><span>Origen de la sangrecita</span><input value={form.origenSangrecita || ''} onChange={e => setForm({ ...form, origenSangrecita: e.target.value })} /></label>
            <label className="ancho"><span>Octógonos (separados por coma; vacío = ninguno)</span><input value={(form.octogonos || []).join(', ')} onChange={e => setForm({ ...form, octogonos: e.target.value.split(',').map(s => s.trim()) })} /></label>
            <label className="ancho"><span>Alérgenos (separados por coma)</span><input value={(form.alergenos || []).join(', ')} onChange={e => setForm({ ...form, alergenos: e.target.value.split(',').map(s => s.trim()) })} /></label>
            <label className="ancho"><span>Ingredientes</span><textarea value={form.ingredientes || ''} onChange={e => setForm({ ...form, ingredientes: e.target.value })} /></label>
            <label className="check"><input type="checkbox" checked={!!form.demo} onChange={e => setForm({ ...form, demo: e.target.checked })} /> Lote de demostración</label>
          </div>
          <div className="admin-acciones"><button onClick={guardar}>Guardar lote</button><button className="sec" onClick={() => setForm(null)}>Cancelar</button></div>
        </div>
      )}
    </section>
  );
}

function Codigos({ lotes, api, setError, recargar }: { lotes: LoteAdmin[]; api: Api; setError: (s: string) => void; recargar: () => void }) {
  const [loteId, setLoteId] = useState('');
  const [pres, setPres] = useState('pack6');
  const [cantidad, setCantidad] = useState(30);
  const [codigos, setCodigos] = useState<Codigo[]>([]);
  const [qrs, setQrs] = useState<Record<string, string>>({});
  const [base, setBase] = useState(location.origin);
  useEffect(() => { obtenerConfig().then(c => c.publicUrl && setBase(c.publicUrl.replace(/\/$/, ''))); }, []);
  useEffect(() => { if (!loteId && lotes[0]) setLoteId(lotes[0].id); }, [lotes, loteId]);
  useEffect(() => { if (loteId) api<Codigo[]>(`/api/admin/codigos?loteId=${encodeURIComponent(loteId)}`).then(setCodigos).catch(e => setError(e.message)); /* eslint-disable-next-line */ }, [loteId]);
  const visibles = codigos.filter(c => c.presentacion === pres);
  useEffect(() => {
    let vivo = true;
    Promise.all(visibles.map(async c => [c.code, await QRCode.toString(`${base}/c/${c.code}`, { type: 'svg', margin: 0, errorCorrectionLevel: 'M' })] as const))
      .then(l => vivo && setQrs(Object.fromEntries(l)));
    return () => { vivo = false; };
  }, [visibles.map(c => c.code).join(), base]); // eslint-disable-line react-hooks/exhaustive-deps

  const generar = async () => {
    try { const n = await api<Codigo[]>('/api/admin/codigos', { method: 'POST', body: JSON.stringify({ loteId, presentacion: pres, cantidad }) }); setCodigos([...codigos, ...n]); recargar(); }
    catch (e) { setError((e as Error).message); }
  };
  const csv = () => {
    const t = 'codigo,lote,presentacion,url,escaneos\n' + visibles.map(c => `${c.code},${c.loteId},${c.presentacion},${base}/c/${c.code},${c.escaneos || 0}`).join('\n');
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([t], { type: 'text/csv' })); a.download = `codigos-${loteId}-${pres}.csv`; a.click();
  };
  const lote = lotes.find(l => l.id === loteId);
  return (
    <section className="admin-seccion">
      <div className="admin-barra no-imprimir">
        <h2>Códigos únicos para las etiquetas</h2>
        <label>Lote <select value={loteId} onChange={e => setLoteId(e.target.value)}>{lotes.map(l => <option key={l.id}>{l.id}</option>)}</select></label>
        <label>Presentación <select value={pres} onChange={e => setPres(e.target.value)}><option value="unidad">Unidad</option><option value="pack6">Pack de 6</option><option value="pack12">Pack de 12</option></select></label>
        <label>Cantidad <input type="number" min={1} max={5000} value={cantidad} onChange={e => setCantidad(Number(e.target.value))} /></label>
        <button onClick={generar} disabled={!loteId}>Generar</button>
        <button className="sec" onClick={() => window.print()} disabled={!visibles.length}>Imprimir hoja</button>
        <button className="sec" onClick={csv} disabled={!visibles.length}>Descargar CSV</button>
      </div>
      <p className="admin-nota no-imprimir">{visibles.length} códigos de {lote?.id} ({pres}). Cada QR abre {base}/c/CÓDIGO. Para imprenta con dato variable, entrega el CSV.</p>
      <div className="hoja-qr">
        {visibles.map(c => (
          <div key={c.code} className="etiqueta-qr">
            <div className="etiqueta-qr-img" dangerouslySetInnerHTML={{ __html: qrs[c.code] || '' }} />
            <strong>{c.code}</strong><small>Escanea y mira el hierro de tu lote</small>
          </div>
        ))}
      </div>
    </section>
  );
}

function Puntos({ api, setError }: { api: Api; setError: (s: string) => void }) {
  const [lista, setLista] = useState<Punto[]>([]);
  useEffect(() => { api<Punto[]>('/api/admin/puntos').then(setLista).catch(e => setError(e.message)); /* eslint-disable-next-line */ }, []);
  const cambiar = (i: number, k: keyof Punto, v: string) => setLista(lista.map((p, j) => (j === i ? { ...p, [k]: v } : p)));
  const guardar = () => api<Punto[]>('/api/admin/puntos', { method: 'PUT', body: JSON.stringify(lista) }).then(setLista).then(() => setError('Puntos guardados')).catch(e => setError(e.message));
  const cols: [keyof Punto, string, string][] = [['nombre', 'Nombre', 'text'], ['lugar', 'Lugar', 'text'], ['distrito', 'Distrito', 'text'], ['desde', 'Desde', 'date'], ['hasta', 'Hasta', 'date'], ['horario', 'Horario', 'text'], ['estado', 'Estado', 'text']];
  return (
    <section className="admin-seccion">
      <div className="admin-barra"><h2>Stands y ferias</h2>
        <button onClick={() => setLista([...lista, { id: Math.random().toString(36).slice(2, 8), nombre: 'Stand AndiBite', lugar: '', distrito: '', desde: new Date().toISOString().slice(0, 10) }])}>+ Agregar</button>
        <button onClick={guardar}>Guardar</button></div>
      <table className="admin-tabla editable">
        <thead><tr>{cols.map(c => <th key={c[0]}>{c[1]}</th>)}<th /></tr></thead>
        <tbody>{lista.map((p, i) => (
          <tr key={p.id}>{cols.map(([k, , t]) => <td key={k}><input type={t} value={String(p[k] ?? '')} onChange={e => cambiar(i, k, e.target.value)} /></td>)}
            <td><button className="sec" onClick={() => setLista(lista.filter((_, j) => j !== i))}>Quitar</button></td></tr>
        ))}</tbody>
      </table>
    </section>
  );
}
