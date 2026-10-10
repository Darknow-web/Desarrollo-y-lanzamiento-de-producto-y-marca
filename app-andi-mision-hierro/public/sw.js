// Service worker de Andi, Misión Hierro: la app abre sin conexión y guarda el último lote visto.
const VERSION = 'andi-v1';
const NUCLEO = ['/', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/favicon.svg'];

self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(NUCLEO)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

const redPrimero = async (req, clave) => {
  const c = await caches.open(VERSION);
  try { const r = await fetch(req); if (r.ok) c.put(clave || req, r.clone()); return r; }
  catch { const g = await c.match(clave || req); if (g) return g; throw new Error('sin conexión'); }
};
const cachePrimero = async req => {
  const c = await caches.open(VERSION); const g = await c.match(req); if (g) return g;
  const r = await fetch(req); if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r;
};

self.addEventListener('fetch', e => {
  const { request: req } = e; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    if (url.pathname.startsWith('/api/admin')) return;
    if (req.mode === 'navigate') { e.respondWith(redPrimero(req, '/')); return; }
    if (url.pathname.startsWith('/assets/') || url.pathname.startsWith('/icons/')) { e.respondWith(cachePrimero(req)); return; }
    if (url.pathname.startsWith('/api/lotes/') || url.pathname === '/api/puntos' || url.pathname === '/api/config') { e.respondWith(redPrimero(req)); return; }
  }
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window' }).then(ws => (ws[0] ? ws[0].focus() : self.clients.openWindow('/'))));
});
