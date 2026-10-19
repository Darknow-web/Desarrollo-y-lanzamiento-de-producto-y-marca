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
import '@fontsource/nunito/800-italic.css';
import './style.css';

import { injectIcons, iconSvg } from './icons';
import { buildMapa } from './mapa';

// URL de la app para el QR. Se fija al compilar: VITE_APP_URL=https://... npm run build
const APP_URL: string = (import.meta.env.VITE_APP_URL || 'https://andi-app.cingacordova.workers.dev').trim();

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));

// ---------------------------------------------------------------------
// Contenido generado: íconos, mapa, QR y marcos de imagen o video
// ---------------------------------------------------------------------
injectIcons();
const mapaEl = $('#mapa');
if (mapaEl) buildMapa(mapaEl);

async function buildQr(): Promise<void> {
  const box = $('#qr');
  const label = $('#qr-url');
  if (label) label.textContent = APP_URL.replace(/^https?:\/\//, '').replace(/\/$/, '');
  if (!box) return;
  try {
    box.innerHTML = await QRCode.toString(APP_URL, {
      type: 'svg',
      margin: 1,
      errorCorrectionLevel: 'M',
      color: { dark: '#3B1A14', light: '#FFFFFF' },
    });
  } catch {
    box.textContent = APP_URL;
  }
}
void buildQr();

// Marcos reservados para las imágenes y el video de la campaña.
// Si el archivo existe en public/, se muestra; si no, queda el degradado con su etiqueta.
function setupMedia(): void {
  $$('.media').forEach((m) => {
    const label = m.dataset.label ?? 'IMAGEN';
    const note = m.dataset.note ?? '';
    const isVideo = !!m.dataset.video;
    const ph = document.createElement('div');
    ph.className = 'ph';
    ph.innerHTML = `${iconSvg(isVideo ? 'play' : 'camera')}<b>${label}</b><span>${note}</span>`;
    m.appendChild(ph);

    if (isVideo) {
      const v = document.createElement('video');
      v.muted = true;
      v.loop = true;
      v.playsInline = true;
      v.preload = 'metadata';
      v.setAttribute('aria-label', 'Video corto de la campaña Vuelve vacía');
      v.addEventListener('loadeddata', () => m.classList.add('has-media'), { once: true });
      v.addEventListener('error', () => v.remove(), { once: true });
      v.src = m.dataset.video ?? '';
      m.prepend(v);
      return;
    }
    const src = m.dataset.media;
    if (!src) return;
    const img = new Image();
    img.alt = `${label} · ${note}`;
    img.decoding = 'async';
    img.loading = 'lazy';
    img.addEventListener('load', () => { if (img.naturalWidth > 0) m.classList.add('has-media'); }, { once: true });
    img.addEventListener('error', () => img.remove(), { once: true });
    img.src = src;
    m.prepend(img);
  });
}
setupMedia();

// ---------------------------------------------------------------------
// Pantallas: principales y anexos
// ---------------------------------------------------------------------
const slidesAll = $$<HTMLElement>('.reveal .slides > section');
const mainSlides = slidesAll.filter((s) => !s.dataset.annex);
const annexSlides = slidesAll.filter((s) => !!s.dataset.annex);
const firstAnnex = slidesAll.indexOf(annexSlides[0]);
const pad = (n: number) => String(n).padStart(2, '0');

// Valor final de cada contador, tal como está escrito en el HTML
$$<HTMLElement>('[data-count]').forEach((el) => { el.dataset.final = el.textContent ?? ''; });

// ---------------------------------------------------------------------
// Reveal.js
// ---------------------------------------------------------------------
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
  help: true,
  transition: reduced ? 'none' : 'fade',
  transitionSpeed: 'default',
  backgroundTransition: reduced ? 'none' : 'fade',
  autoAnimate: !reduced,
  autoAnimateDuration: 0.9,
  autoAnimateEasing: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  viewDistance: 3,
  preloadIframes: false,
  autoPlayMedia: false,
  navigationMode: 'linear',
  touch: true,
  keyboard: {
    65: () => toggleAnnex(), // A
    77: () => toggleMenu(), // M
    70: () => toggleFullscreen(), // F
    27: () => closeMenu(), // Esc
  },
} as unknown as Reveal.Options);

// ---------------------------------------------------------------------
// Animaciones con GSAP
// ---------------------------------------------------------------------
type Running = { tl: gsap.core.Timeline; loops: gsap.core.Animation[] };
const running = new WeakMap<HTMLElement, Running>();

function fmt(v: number, dec: number): string {
  const [i, d] = v.toFixed(dec).split('.');
  const int = i.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return d ? `${int}.${d}` : int;
}

function prepDraw(path: SVGGeometryElement): number {
  let len = 0;
  try { len = path.getTotalLength(); } catch { len = 0; }
  if (!len || !isFinite(len)) len = 1200;
  return Math.ceil(len) + 2;
}

const CLEAR = 'opacity,visibility,transform,filter,clipPath';

function enter(sec: HTMLElement): void {
  leave(sec);
  if (reduced) return;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  const loops: gsap.core.Animation[] = [];

  // 1 · Textos y bloques: suben con un desenfoque corto
  const ins = $$('.in, .cb', sec).filter((el) => !el.closest('.fragment'));
  if (ins.length) {
    tl.fromTo(ins,
      { autoAlpha: 0, y: 26, filter: 'blur(8px)' },
      { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: sec.id === 's-canvas' ? 0.07 : 0.085, clearProps: CLEAR },
      0.12);
  }

  // 2 · Puntos, íconos y nodos que aparecen
  const pops = $$('.pop', sec);
  if (pops.length) {
    tl.fromTo(pops,
      { autoAlpha: 0, scale: 0.4, transformOrigin: '50% 50%' },
      { autoAlpha: 1, scale: 1, duration: 0.7, ease: 'back.out(1.8)', stagger: 0.14, clearProps: CLEAR },
      0.35);
  }

  // 3 · Líneas que se trazan (stroke-dashoffset)
  $$<SVGGeometryElement>('svg .draw', sec).forEach((p, i) => {
    const len = prepDraw(p);
    tl.fromTo(p,
      { strokeDasharray: len, strokeDashoffset: len },
      { strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut', clearProps: 'strokeDasharray,strokeDashoffset' },
      0.2 + i * 0.35);
  });

  // 4 · Contadores
  $$<HTMLElement>('[data-count]', sec).forEach((el) => {
    const target = parseFloat(el.dataset.count ?? '0');
    const dec = parseInt(el.dataset.dec ?? '0', 10);
    const finalTxt = el.dataset.final ?? fmt(target, dec);
    const o = { v: 0 };
    el.textContent = fmt(0, dec);
    tl.to(o, {
      v: target,
      duration: target > 1000 ? 1.8 : 1.4,
      ease: 'power2.out',
      onUpdate: () => { el.textContent = fmt(o.v, dec); },
      onComplete: () => { el.textContent = finalTxt; },
    }, 0.35);
  });

  // 5 · Barras que crecen y niveles del embudo
  const bars = $$('.bar', sec);
  if (bars.length) {
    tl.fromTo(bars, { scaleX: 0, transformOrigin: '0% 50%' },
      { scaleX: 1, duration: 1.1, stagger: 0.1, ease: 'power3.out', clearProps: CLEAR }, 0.5);
  }
  const grows = $$('.grow', sec);
  if (grows.length) {
    tl.fromTo(grows, { clipPath: 'inset(0% 50% 0% 50% round 12px)', autoAlpha: 0 },
      { clipPath: 'inset(0% 0% 0% 0% round 12px)', autoAlpha: 1, duration: 0.9, stagger: 0.28, ease: 'power3.inOut', clearProps: CLEAR }, 0.3);
  }

  // 6 · Fotos: tira de la degustación y zoom lento
  const strip = $$('.strip-ph', sec);
  if (strip.length) {
    tl.fromTo(strip, { autoAlpha: 0, y: 70 }, { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.14, ease: 'power3.out', clearProps: CLEAR }, 0.3);
  }
  $$('.kenburns', sec).forEach((img) => {
    tl.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 6, ease: 'power1.out' }, 0);
  });
  $$('.float', sec).forEach((el) => {
    loops.push(gsap.to(el, { y: -14, duration: 3.2, ease: 'sine.inOut', yoyo: true, repeat: -1 }));
  });

  // 7 · Recorridos animados (dato que viaja por el flujo)
  const stepsDot = $('.steps-dot', sec);
  if (stepsDot) {
    const a = gsap.timeline({ repeat: -1, delay: 1.6, repeatDelay: 0.6 });
    a.set(stepsDot, { left: '16.66%', autoAlpha: 0 })
      .to(stepsDot, { autoAlpha: 1, duration: 0.3 })
      .to(stepsDot, { left: '50%', duration: 1.1, ease: 'power1.inOut' })
      .to(stepsDot, { left: '83.33%', duration: 1.1, ease: 'power1.inOut' }, '+=0.25')
      .to(stepsDot, { autoAlpha: 0, duration: 0.3 });
    loops.push(a);
  }
  const ecoDot = $<SVGCircleElement>('.eco-dot', sec);
  const ecoDot2 = $<SVGCircleElement>('.eco-dot2', sec);
  if (ecoDot && ecoDot2) {
    const a = gsap.timeline({ repeat: -1, delay: 2.4, repeatDelay: 0.4 });
    a.set(ecoDot, { attr: { cx: 100, cy: 37.5 }, autoAlpha: 0 })
      .to(ecoDot, { autoAlpha: 1, duration: 0.25 })
      .to(ecoDot, { attr: { cx: 900 }, duration: 3.2, ease: 'none' })
      .to(ecoDot, { autoAlpha: 0, duration: 0.25 })
      .set(ecoDot2, { attr: { cx: 900, cy: 158 }, autoAlpha: 0 })
      .to(ecoDot2, { autoAlpha: 1, duration: 0.2 })
      .to(ecoDot2, { attr: { cy: 268 }, duration: 0.5, ease: 'none' })
      .to(ecoDot2, { attr: { cx: 300 }, duration: 1.5, ease: 'none' })
      .to(ecoDot2, { attr: { cy: 160 }, duration: 0.5, ease: 'none' })
      .to(ecoDot2, { autoAlpha: 0, duration: 0.2 });
    loops.push(a);
  }

  running.set(sec, { tl, loops });
}

function leave(sec: HTMLElement): void {
  const r = running.get(sec);
  if (!r) return;
  r.loops.forEach((l) => l.kill());
  r.tl.progress(1).kill(); // deja todo en su estado final y visible
  $$('.float', sec).forEach((el) => gsap.set(el, { clearProps: 'transform' }));
  $$('.steps-dot', sec).forEach((el) => gsap.set(el, { clearProps: 'opacity,visibility,left' }));
  $$('.eco-dot, .eco-dot2', sec).forEach((el) => gsap.set(el, { clearProps: 'opacity,visibility' }));
  running.delete(sec);
}

function playMedia(sec: HTMLElement, on: boolean): void {
  $$<HTMLVideoElement>('video', sec).forEach((v) => {
    if (on) v.play().catch(() => undefined);
    else v.pause();
  });
}

// ---------------------------------------------------------------------
// Interfaz: progreso, número, tema, menú, anexos y pantalla completa
// ---------------------------------------------------------------------
const uiNum = $('#ui-num') as HTMLElement;
const uiSec = $('#ui-sec') as HTMLElement;
const uiBar = $('.ui-progress span') as HTMLElement;
const menu = $('#menu') as HTMLElement;
const btnMenu = $('#btn-menu') as HTMLButtonElement;
let lastMain = 0;

function updateUi(sec: HTMLElement): void {
  const idx = slidesAll.indexOf(sec);
  const dark = sec.dataset.theme !== 'light';
  document.body.classList.toggle('theme-dark', dark);
  document.body.classList.toggle('theme-light', !dark);
  uiSec.textContent = sec.dataset.sec ?? '';
  if (sec.dataset.annex) {
    uiNum.textContent = `Anexo ${sec.dataset.annex} / ${annexSlides.length}`;
    uiBar.style.width = '100%';
  } else {
    const i = mainSlides.indexOf(sec);
    lastMain = idx;
    uiNum.textContent = `${pad(i + 1)} / ${pad(mainSlides.length)}`;
    uiBar.style.width = `${(i / Math.max(1, mainSlides.length - 1)) * 100}%`;
  }
  $$('.menu-item').forEach((b) => b.classList.toggle('current', Number(b.dataset.idx) === idx));
}

function buildMenu(): void {
  const list = $('#menu-list') as HTMLElement;
  const groups = new Map<string, HTMLElement>();
  slidesAll.forEach((s, idx) => {
    const name = s.dataset.sec ?? '';
    let g = groups.get(name);
    if (!g) {
      g = document.createElement('div');
      g.className = 'menu-group';
      g.innerHTML = `<h3>${name}</h3>`;
      list.appendChild(g);
      groups.set(name, g);
    }
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'menu-item';
    b.dataset.idx = String(idx);
    const n = s.dataset.annex ? `A${s.dataset.annex}` : pad(mainSlides.indexOf(s) + 1);
    b.innerHTML = `<span>${n}</span>${s.dataset.title ?? ''}`;
    b.addEventListener('click', () => { closeMenu(); deck.slide(idx); });
    g.appendChild(b);
  });
}

function openMenu(): void {
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
function toggleAnnex(): void {
  closeMenu();
  const cur = deck.getCurrentSlide() as HTMLElement;
  if (cur?.dataset.annex) deck.slide(lastMain);
  else deck.slide(firstAnnex);
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
$('#btn-menu')?.addEventListener('click', toggleMenu);
$('#btn-close')?.addEventListener('click', closeMenu);
$('#btn-fs')?.addEventListener('click', toggleFullscreen);
$('#btn-annex')?.addEventListener('click', toggleAnnex);
$('#btn-prev')?.addEventListener('click', () => deck.prev());
$('#btn-next')?.addEventListener('click', () => deck.next());
menu.addEventListener('click', (e) => { if (e.target === menu) closeMenu(); });
document.addEventListener('keydown', (e) => {
  if (menu.classList.contains('open') && e.key === 'Escape') closeMenu();
}, true);

// Clic en la pantalla: avanza (en el borde izquierdo, retrocede)
document.querySelector('.reveal')?.addEventListener('click', (e) => {
  const ev = e as MouseEvent;
  const t = ev.target as HTMLElement;
  if (t.closest('a, button, input, video, .ui, .menu, .qr-card')) return;
  if (window.getSelection()?.toString()) return;
  if (ev.clientX < window.innerWidth * 0.18) deck.prev(); else deck.next();
});

// Paralaje suave de fotos con el mouse
const pxCache = new WeakMap<HTMLElement, { x: (v: number) => void; y: (v: number) => void }>();
if (!reduced && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', (e) => {
    const sec = deck.getCurrentSlide() as HTMLElement | undefined;
    if (!sec) return;
    const nx = e.clientX / window.innerWidth - 0.5;
    const ny = e.clientY / window.innerHeight - 0.5;
    $$('[data-parallax]', sec).forEach((el) => {
      let q = pxCache.get(el);
      if (!q) {
        q = { x: gsap.quickTo(el, 'x', { duration: 1.2, ease: 'power3.out' }), y: gsap.quickTo(el, 'y', { duration: 1.2, ease: 'power3.out' }) };
        pxCache.set(el, q);
      }
      const amt = parseFloat(el.dataset.parallax ?? '10');
      q.x(-nx * amt);
      q.y(-ny * amt);
    });
  }, { passive: true });
}

// ---------------------------------------------------------------------
// Eventos de Reveal
// ---------------------------------------------------------------------
deck.on('ready', (ev: Event) => {
  const sec = (ev as unknown as { currentSlide: HTMLElement }).currentSlide;
  updateUi(sec);
  enter(sec);
  playMedia(sec, true);
  document.documentElement.classList.add('is-ready');
});
deck.on('slidechanged', (ev: Event) => {
  const e = ev as unknown as { currentSlide: HTMLElement; previousSlide?: HTMLElement };
  if (e.previousSlide) { leave(e.previousSlide); playMedia(e.previousSlide, false); }
  updateUi(e.currentSlide);
  enter(e.currentSlide);
  playMedia(e.currentSlide, true);
});

void deck.initialize();

// Acceso para las capturas automáticas y para depurar desde la consola
(window as unknown as { deck: typeof deck }).deck = deck;
