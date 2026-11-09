// Sirve la presentación del T3 (carpeta dist/) desde Workers KV, con respaldo a index.html.
// Los archivos se suben con `npm run subir-activos` (scripts/subir-activos.mjs): la clave es la ruta sin la barra inicial.

export interface KVActivos {
  get(key: string, type: 'arrayBuffer'): Promise<ArrayBuffer | null>;
}

const TIPOS: Record<string, string> = {
  html: 'text/html; charset=utf-8', js: 'text/javascript; charset=utf-8', css: 'text/css; charset=utf-8',
  json: 'application/json; charset=utf-8', webmanifest: 'application/manifest+json', svg: 'image/svg+xml',
  png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', ico: 'image/x-icon',
  woff2: 'font/woff2', woff: 'font/woff', txt: 'text/plain; charset=utf-8', mp3: 'audio/mpeg', mp4: 'video/mp4',
};

const SEGURIDAD = {
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), fullscreen=(self)',
  // Todo está autoalojado (letras, imágenes, video y QR en SVG). Los estilos en línea los usan Reveal.js y GSAP.
  'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data: blob:; connect-src 'self'; media-src 'self' blob:; frame-src 'none'; object-src 'none'; frame-ancestors 'self'; base-uri 'self'; form-action 'none'",
};

export async function servirActivo(kv: KVActivos, pathname: string, range?: string | null): Promise<Response> {
  let ruta = decodeURIComponent(pathname).replace(/^\/+/, '');
  if (ruta === '' || ruta.endsWith('/')) ruta += 'index.html';
  const ext = ruta.includes('.') ? ruta.split('.').pop()!.toLowerCase() : '';
  let cuerpo = await kv.get(ruta, 'arrayBuffer');
  let tipo = TIPOS[ext];
  let estado = 200;
  if (!cuerpo) {
    if (ext && ext !== 'html') return new Response('No encontrado', { status: 404, headers: SEGURIDAD });
    // Cualquier ruta sin extensión entrega la presentación (index.html).
    cuerpo = await kv.get('index.html', 'arrayBuffer');
    tipo = TIPOS.html;
    if (!cuerpo) { estado = 503; return new Response('La presentación todavía no se ha publicado.', { status: estado, headers: SEGURIDAD }); }
  }
  const inmutable = ruta.startsWith('assets/');
  // Video: responde a pedidos por rangos (Safari en iPhone no reproduce sin esto).
  const m = range && estado === 200 ? /^bytes=(\d*)-(\d*)$/.exec(range) : null;
  if (m && (m[1] || m[2])) {
    const total = cuerpo.byteLength;
    const ini = m[1] ? Number(m[1]) : Math.max(0, total - Number(m[2]));
    const fin = m[1] && m[2] ? Math.min(Number(m[2]), total - 1) : total - 1;
    if (ini >= total || ini > fin) return new Response(null, { status: 416, headers: { ...SEGURIDAD, 'Content-Range': `bytes */${total}` } });
    return new Response(cuerpo.slice(ini, fin + 1), {
      status: 206,
      headers: { ...SEGURIDAD, 'Content-Type': tipo || 'application/octet-stream', 'Content-Range': `bytes ${ini}-${fin}/${total}`, 'Accept-Ranges': 'bytes', 'Cache-Control': 'public, max-age=300' },
    });
  }
  return new Response(cuerpo, {
    status: estado,
    headers: {
      ...SEGURIDAD,
      'Content-Type': tipo || 'application/octet-stream',
      'Accept-Ranges': 'bytes',
      'Cache-Control': inmutable ? 'public, max-age=31536000, immutable' : 'public, max-age=300',
    },
  });
}
