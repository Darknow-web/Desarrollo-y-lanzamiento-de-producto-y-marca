import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';
import { gsap } from 'gsap';
import QRCode from 'qrcode';

import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import './style.css';

import { injectIcons } from './icons';

// URL de la app para el QR. Se puede cambiar al compilar: VITE_APP_URL=https://... npm run build
const APP_URL: string = (import.meta.env.VITE_APP_URL || 'https://andi-app.cingacordova.workers.dev').trim();
const YT_ID = 'PaqVYijWhk4';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));
const pad = (n: number) => String(n).padStart(2, '0');

// ---------------------------------------------------------------------
// Contenido generado: íconos, QR, pictogramas de niños y meses
// ---------------------------------------------------------------------
injectIcons();

async function buildQr(sel: string): Promise<void> {
  const box = $(sel);
  if (!box) return;
  try {
    box.innerHTML = await QRCode.toString(APP_URL, {
      type: 'svg', margin: 1, errorCorrectionLevel: 'M',
      color: { dark: '#3B1A14', light: '#FFFFFF' },
    });
  } catch {
    box.textContent = APP_URL;
  }
}
void buildQr('#qr-app');
void buildQr('#qr-cierre');

const KID = '<svg viewBox="0 0 24 32" aria-hidden="true"><circle cx="12" cy="6.5" r="5"/><path d="M3 31v-9.5C3 15.6 7 12.5 12 12.5s9 3.1 9 9V31z"/></svg>';
$$('[data-kids]').forEach((el) => {
  const n = Number(el.dataset.kids ?? 0);
  el.innerHTML = Array.from({ length: n }, (_, i) => `<span class="kid${i === 0 ? ' on' : ''}">${KID}</span>`).join('');
});
$$('[data-months]').forEach((el) => {
  const n = Number(el.dataset.months ?? 24);
  const mark = Number(el.dataset.mark ?? n);
  el.innerHTML = Array.from({ length: n }, (_, i) => `<i class="${i + 1 < mark ? 'm' : i + 1 === mark ? 'm hit' : ''}"></i>`).join('');
});

// Valor final de cada contador, tal como está escrito en el HTML
$$('[data-count]').forEach((el) => { el.dataset.final = el.textContent ?? ''; });

// ---------------------------------------------------------------------
// Reveal.js
// ---------------------------------------------------------------------
const slidesAll = $$<HTMLElement>('.reveal .slides > section');

const digitKeys: Record<number, () => void> = {};
for (let d = 1; d <= 9; d++) {
  digitKeys[48 + d] = () => openBlockByNumber(d);
  digitKeys[96 + d] = () => openBlockByNumber(d);
}

const deck = new Reveal($('.reveal') as HTMLElement, {
  embedded: true,
  disableLayout: true,
  center: false,
  hash: true,
  respondToHashChanges: true,
  controls: false,
  progress: false,
  slideNumber: false,
  overview: false,
  help: false,
  transition: reduced ? 'none' : 'fade',
  transitionSpeed: 'fast',
  backgroundTransition: 'none',
  viewDistance: 2,
  preloadIframes: false,
  autoPlayMedia: false,
  navigationMode: 'linear',
  touch: true,
  keyboard: {
    77: () => toggleMenu(), // M
    70: () => toggleFullscreen(), // F
    27: () => { if (!closeZoom()) closeMenu(); }, // Esc
    ...digitKeys,
  },
} as unknown as Reveal.Options);

// ---------------------------------------------------------------------
// Animaciones con GSAP (cortas: todo termina antes de 1.2 s)
// ---------------------------------------------------------------------
const running = new WeakMap<HTMLElement, gsap.core.Timeline[]>();

function fmt(v: number, dec: number): string {
  const [i, d] = v.toFixed(dec).split('.');
  const int = i.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return d ? `${int}.${d}` : int;
}

const CLEAR = 'opacity,visibility,transform,filter';

/** Anima lo que hay dentro de `root`, sin entrar en fragmentos que aún no se muestran. */
function animate(sec: HTMLElement, root: HTMLElement, delay = 0): void {
  if (reduced) return;
  const own = (el: Element) => {
    const f = el.closest('.fragment');
    return !f || f === root || f.classList.contains('visible');
  };
  const inside = (sel: string) => $$(sel, root).filter(own);
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay });

  const ins = inside('.in');
  if (ins.length) {
    tl.fromTo(ins, { autoAlpha: 0, y: 22 }, { autoAlpha: 1, y: 0, duration: 0.5, stagger: Math.min(0.06, 0.45 / ins.length), clearProps: CLEAR }, 0);
  }
  const kids = inside('.kid');
  if (kids.length) {
    tl.fromTo(kids, { autoAlpha: 0, scale: 0.3, transformOrigin: '50% 100%' }, { autoAlpha: 1, scale: 1, duration: 0.35, ease: 'back.out(2)', stagger: 0.05, clearProps: CLEAR }, 0.2);
  }
  inside('[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count ?? '0');
    const from = parseFloat(el.dataset.from ?? '0');
    const dec = parseInt(el.dataset.dec ?? '0', 10);
    const finalTxt = el.dataset.final ?? fmt(target, dec);
    const o = { v: from };
    el.textContent = fmt(from, dec);
    tl.to(o, {
      v: target, duration: 0.85, ease: 'power2.out',
      onUpdate: () => { el.textContent = fmt(target < from ? Math.ceil(o.v) : o.v, dec); },
      onComplete: () => { el.textContent = finalTxt; },
    }, 0.2);
  });
  const barsY = inside('.bar-y');
  if (barsY.length) {
    tl.fromTo(barsY, { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, duration: 0.5, stagger: 0.09, ease: 'power2.out', clearProps: 'transform' }, 0.15);
  }
  const mx = inside('.mx, .split i');
  if (mx.length) {
    tl.fromTo(mx, { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, duration: 0.5, stagger: 0.07, ease: 'power2.out', clearProps: 'transform' }, 0.15);
  }
  const months = inside('.months i');
  if (months.length) {
    tl.fromTo(months, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.15, stagger: 0.025, clearProps: CLEAR }, 0.25);
  }
  const list = running.get(sec) ?? [];
  list.push(tl);
  running.set(sec, list);
}

function kenburns(sec: HTMLElement): void {
  if (reduced) return;
  $$('.kenburns', sec).forEach((img) => {
    const t = gsap.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 6, ease: 'power1.out' });
    const list = running.get(sec) ?? [];
    list.push(t as unknown as gsap.core.Timeline);
    running.set(sec, list);
  });
}

function finish(sec: HTMLElement): void {
  (running.get(sec) ?? []).forEach((t) => t.progress(1).kill());
  running.delete(sec);
}

// ---------------------------------------------------------------------
// Apertura: la franja con el título sube y aparece el contenido
// ---------------------------------------------------------------------
function syncOpen(sec: HTMLElement, animateNow: boolean): void {
  const trig = $('.fragment.trigger', sec);
  const open = !!trig && trig.classList.contains('visible');
  const was = sec.classList.contains('open');
  sec.classList.toggle('open', open);
  if (open && !was && animateNow) animate(sec, $('.body', sec) ?? $('.stats', sec) ?? sec, 0.25);
  document.body.classList.toggle('is-open', open);
}

// ---------------------------------------------------------------------
// Interfaz: progreso, número, tema, menú y pantalla completa
// ---------------------------------------------------------------------
const uiNum = $('#ui-num') as HTMLElement;
const uiBar = $('.ui-progress span') as HTMLElement;
const menu = $('#menu') as HTMLElement;
const btnMenu = $('#btn-menu') as HTMLButtonElement;

function updateUi(sec: HTMLElement): void {
  const i = slidesAll.indexOf(sec);
  const dark = sec.dataset.theme === 'dark';
  document.body.classList.toggle('theme-dark', dark);
  document.body.classList.toggle('theme-light', !dark);
  uiNum.textContent = `${pad(i + 1)} / ${pad(slidesAll.length)}`;
  uiBar.style.width = `${((i + 1) / slidesAll.length) * 100}%`;
  $$('.menu-item').forEach((b) => b.classList.toggle('current', Number(b.dataset.idx) === i));
}

function buildMenu(): void {
  const list = $('#menu-list') as HTMLElement;
  slidesAll.forEach((s, idx) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'menu-item';
    b.dataset.idx = String(idx);
    b.innerHTML = `<span>${pad(idx + 1)}</span>${s.dataset.title ?? ''}`;
    b.addEventListener('click', () => { closeMenu(); deck.slide(idx); });
    list.appendChild(b);
  });
}
function openMenu(): void {
  closeZoom();
  menu.classList.add('open');
  menu.setAttribute('aria-hidden', 'false');
  btnMenu.setAttribute('aria-expanded', 'true');
  ($('.menu-item.current', menu) as HTMLElement | null)?.focus();
}
function closeMenu(): void {
  if (!menu.classList.contains('open')) return;
  menu.classList.remove('open');
  menu.setAttribute('aria-hidden', 'true');
  btnMenu.setAttribute('aria-expanded', 'false');
}
function toggleMenu(): void {
  if (menu.classList.contains('open')) closeMenu(); else openMenu();
}
function toggleFullscreen(): void {
  const d = document as Document & { webkitFullscreenElement?: Element; webkitExitFullscreen?: () => void };
  const el = document.documentElement as HTMLElement & { webkitRequestFullscreen?: () => void };
  if (document.fullscreenElement || d.webkitFullscreenElement) {
    (document.exitFullscreen?.bind(document) ?? d.webkitExitFullscreen)?.();
  } else {
    (el.requestFullscreen?.bind(el) ?? el.webkitRequestFullscreen)?.();
  }
}

buildMenu();
btnMenu.addEventListener('click', toggleMenu);
$('#btn-close')?.addEventListener('click', closeMenu);
$('#btn-fs')?.addEventListener('click', toggleFullscreen);
$('#btn-prev')?.addEventListener('click', () => deck.prev());
$('#btn-next')?.addEventListener('click', () => deck.next());
menu.addEventListener('click', (e) => { if (e.target === menu) closeMenu(); });

// ---------------------------------------------------------------------
// Canvas: cada bloque se agranda al tocarlo (FLIP con GSAP)
// ---------------------------------------------------------------------
const zoom = $('#zoom') as HTMLElement;
const zoomCard = $('#zoom-card') as HTMLElement;
let zoomFrom: HTMLElement | null = null;

function flipFrom(card: HTMLElement, from: DOMRect): gsap.core.Tween | null {
  if (reduced) return null;
  const to = card.getBoundingClientRect();
  return gsap.from(card, {
    x: from.left - to.left, y: from.top - to.top,
    scaleX: from.width / to.width, scaleY: from.height / to.height,
    transformOrigin: '0 0', duration: 0.5, ease: 'power3.inOut', clearProps: 'transform',
  });
}

function openBlock(b: HTMLElement): void {
  const sec = deck.getCurrentSlide() as HTMLElement;
  if (sec?.id !== 's-canvas') return;
  if (!sec.classList.contains('open')) deck.nextFragment();
  if (zoomFrom === b) { closeZoom(); return; }
  gsap.killTweensOf(zoomCard);
  zoomCard.className = `zoom-card ${Array.from(b.classList).filter((c) => c.startsWith('cb-')).join(' ')}`;
  zoomCard.innerHTML = `<span class="zoom-n">${b.dataset.n}</span>${b.innerHTML}<span class="zoom-x">Esc o clic para cerrar</span>`;
  zoomFrom?.classList.remove('active');
  zoomFrom = b;
  b.classList.add('active');
  zoom.classList.add('open');
  zoom.setAttribute('aria-hidden', 'false');
  if (!reduced) gsap.fromTo(zoom, { backgroundColor: 'rgba(46,19,14,0)' }, { backgroundColor: 'rgba(46,19,14,.55)', duration: 0.4 });
  flipFrom(zoomCard, b.getBoundingClientRect());
}

function closeZoom(): boolean {
  if (!zoom.classList.contains('open')) return false;
  const b = zoomFrom;
  zoomFrom = null;
  b?.classList.remove('active');
  const done = () => {
    zoom.classList.remove('open');
    zoom.setAttribute('aria-hidden', 'true');
    zoomCard.innerHTML = '';
    gsap.set([zoom, zoomCard], { clearProps: 'all' });
  };
  if (reduced || !b) { done(); return true; }
  const from = zoomCard.getBoundingClientRect();
  const to = b.getBoundingClientRect();
  gsap.to(zoom, { backgroundColor: 'rgba(46,19,14,0)', duration: 0.35 });
  gsap.to(zoomCard, {
    x: to.left - from.left, y: to.top - from.top,
    scaleX: to.width / from.width, scaleY: to.height / from.height,
    transformOrigin: '0 0', duration: 0.4, ease: 'power3.inOut', onComplete: done,
  });
  return true;
}

function openBlockByNumber(n: number): void {
  const b = $(`#s-canvas .cb[data-n="${n}"]`);
  if (b) openBlock(b);
}

$$('#s-canvas .cb').forEach((b) => b.addEventListener('click', (e) => { e.stopPropagation(); openBlock(b); }));
zoom.addEventListener('click', () => closeZoom());

// Con un bloque abierto, las flechas o el espacio primero lo cierran
document.addEventListener('keydown', (e) => {
  if (menu.classList.contains('open') && e.key === 'Escape') { closeMenu(); return; }
  if (zoom.classList.contains('open') && ['ArrowRight', 'ArrowLeft', ' ', 'PageDown', 'PageUp', 'Enter'].includes(e.key)) {
    e.preventDefault();
    e.stopImmediatePropagation();
    closeZoom();
  }
}, true);

// ---------------------------------------------------------------------
// Video del pitch: listo con un clic (YouTube) y respaldo local
// ---------------------------------------------------------------------
const yt = $('#yt') as HTMLButtonElement | null;
yt?.addEventListener('click', (e) => {
  e.stopPropagation();
  const f = document.createElement('iframe');
  f.src = `https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  f.title = 'AndiBite · elevator pitch';
  f.allow = 'autoplay; encrypted-media; fullscreen; picture-in-picture';
  f.allowFullscreen = true;
  f.className = 'yt-frame';
  yt.replaceWith(f);
});
$('#btn-local')?.addEventListener('click', (e) => {
  e.stopPropagation();
  const box = $('.vid', $('#s-pitch') as HTMLElement);
  const cur = box?.querySelector('.yt, .yt-frame, video');
  if (!box || !cur) return;
  const v = document.createElement('video');
  v.src = './vid/campana_maestro.mp4';
  v.controls = true;
  v.autoplay = true;
  v.playsInline = true;
  v.className = 'yt-frame';
  cur.replaceWith(v);
});

// Clic en la pantalla: avanza (en el borde izquierdo, retrocede)
document.querySelector('.reveal')?.addEventListener('click', (e) => {
  const ev = e as MouseEvent;
  const t = ev.target as HTMLElement;
  if (t.closest('a, button, input, video, iframe, .ui, .menu, .qr, .cb')) return;
  if (window.getSelection()?.toString()) return;
  if (ev.clientX < window.innerWidth * 0.15) deck.prev(); else deck.next();
});

// ---------------------------------------------------------------------
// Eventos de Reveal
// ---------------------------------------------------------------------
type FragEv = { fragment: HTMLElement; fragments: HTMLElement[] };

deck.on('ready', (ev: Event) => {
  const sec = (ev as unknown as { currentSlide: HTMLElement }).currentSlide;
  updateUi(sec);
  kenburns(sec);
  syncOpen(sec, true);
  if (sec.id === 's-portada' && !sec.classList.contains('open')) animate(sec, $('.brand', sec) as HTMLElement, 0.1);
  document.documentElement.classList.add('is-ready');
});
deck.on('slidechanged', (ev: Event) => {
  const e = ev as unknown as { currentSlide: HTMLElement; previousSlide?: HTMLElement };
  closeZoom();
  if (e.previousSlide) finish(e.previousSlide);
  e.previousSlide?.querySelectorAll('video').forEach((v) => v.pause());
  updateUi(e.currentSlide);
  kenburns(e.currentSlide);
  e.currentSlide.classList.remove('open');
  syncOpen(e.currentSlide, true);
  if (e.currentSlide.id === 's-portada' && !e.currentSlide.classList.contains('open')) animate(e.currentSlide, $('.brand', e.currentSlide) as HTMLElement, 0.1);
});
deck.on('fragmentshown', (ev: Event) => {
  const e = ev as unknown as FragEv;
  const sec = deck.getCurrentSlide() as HTMLElement;
  e.fragments.forEach((f) => {
    if (f.classList.contains('trigger')) syncOpen(sec, true);
    else animate(sec, f, 0.1);
  });
});
deck.on('fragmenthidden', () => {
  closeZoom();
  syncOpen(deck.getCurrentSlide() as HTMLElement, false);
});

void deck.initialize();

// Acceso para las capturas automáticas y para depurar desde la consola
(window as unknown as { deck: typeof deck }).deck = deck;
