// Sirve la app web (carpeta dist/) desde Workers KV, en modo SPA.
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
  'Permissions-Policy': 'camera=(self), microphone=(), geolocation=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data: blob:; connect-src 'self'; media-src 'self' blob:; worker-src 'self'; manifest-src 'self'; frame-ancestors 'none'; base-uri 'self'",
};

export async function servirActivo(kv: KVActivos, pathname: string): Promise<Response> {
  let ruta = decodeURIComponent(pathname).replace(/^\/+/, '');
  if (ruta === '' || ruta.endsWith('/')) ruta += 'index.html';
  const ext = ruta.includes('.') ? ruta.split('.').pop()!.toLowerCase() : '';
  let cuerpo = await kv.get(ruta, 'arrayBuffer');
  let tipo = TIPOS[ext];
  let estado = 200;
  if (!cuerpo) {
    if (ext && ext !== 'html') return new Response('No encontrado', { status: 404, headers: SEGURIDAD });
    // Ruta de la SPA (/c/CODIGO, /semaforo, etc.): se entrega index.html.
    cuerpo = await kv.get('index.html', 'arrayBuffer');
    tipo = TIPOS.html;
    if (!cuerpo) { estado = 503; return new Response('La app todavía no se ha publicado.', { status: estado, headers: SEGURIDAD }); }
  }
  const inmutable = ruta.startsWith('assets/');
  return new Response(cuerpo, {
    status: estado,
    headers: {
      ...SEGURIDAD,
      'Content-Type': tipo || 'application/octet-stream',
      'Cache-Control': inmutable ? 'public, max-age=31536000, immutable' : ruta === 'sw.js' ? 'no-cache' : 'public, max-age=300',
    },
  });
}
