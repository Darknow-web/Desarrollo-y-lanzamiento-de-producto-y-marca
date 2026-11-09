// AndiBite · T3 Investigación de mercados cualitativa.
// Motor propio de pantallas (sin Reveal): cada pantalla puede tener pasos internos
// (pestañas, selección o filas que se revelan). → avanza un paso; al terminar, pasa de pantalla.
import { gsap } from 'gsap';

import '@fontsource/plus-jakarta-sans/700.css';
import '@fontsource/plus-jakarta-sans/800.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/600.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import './style.css';

import { injectIcons } from './icons';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));
const pad = (n: number) => String(n).padStart(2, '0');

injectIcons();

// ---------------------------------------------------------------------
// Animaciones (GSAP): todo termina antes de 1 s
// ---------------------------------------------------------------------
$$('[data-count]').forEach((el) => { el.dataset.final = el.textContent ?? ''; });

function fmt(v: number, dec: number): string {
  const [i, d] = v.toFixed(dec).split('.');
  const int = i.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return d ? `${int}.${d}` : int;
}
const CLEAR = 'opacity,visibility,transform';
let live: gsap.core.Timeline[] = [];

function shown(el: Element, root: Element): boolean {
  for (let p: Element | null = el; p && p !== root.parentElement; p = p.parentElement) {
    if ((p as HTMLElement).hidden) return false;
  }
  return true;
}

function animate(root: HTMLElement, delay = 0): void {
  if (reduced) return;
  const inside = (sel: string) => $$(sel, root).filter((e) => shown(e, root));
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay });
  const ins = inside('.in');
  if (ins.length) {
    tl.fromTo(ins, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.4, stagger: Math.min(0.05, 0.3 / ins.length), clearProps: CLEAR }, 0);
  }
  inside('[data-count]').forEach((el) => {
    const target = parseFloat(el.dataset.count ?? '0');
    const from = parseFloat(el.dataset.from ?? '0');
    const dec = parseInt(el.dataset.dec ?? '0', 10);
    const finalTxt = el.dataset.final ?? fmt(target, dec);
    const o = { v: from };
    el.textContent = fmt(from, dec);
    tl.to(o, {
      v: target, duration: 0.7, ease: 'power2.out',
      onUpdate: () => { el.textContent = fmt(target < from ? Math.ceil(o.v) : o.v, dec); },
      onComplete: () => { el.textContent = finalTxt; },
    }, 0.1);
  });
  const bars = inside('.mx i, .vb-bar i, .split i');
  if (bars.length) {
    tl.fromTo(bars, { scaleX: 0, transformOrigin: '0% 50%' }, { scaleX: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out', clearProps: 'transform' }, 0.1);
  }
  live.push(tl);
}
function finishAll(): void { live.forEach((t) => t.progress(1).kill()); live = []; }

// ---------------------------------------------------------------------
// Controladores de pasos por pantalla
// ---------------------------------------------------------------------
type Kind = 'none' | 'select' | 'reveal';
interface Ctrl {
  kind: Kind;
  count: number;           // pasos totales (para los puntos)
  pos(): number;           // paso actual (0 a count-1)
  next(): boolean;         // true si avanzó dentro de la pantalla
  prev(): boolean;
  reset(): void;
  all(): void;             // revela todo (capturas)
  label(): string;         // texto del botón «Siguiente»
  remaining(): number;     // avances internos que faltan (modo recorrido)
}

const NONE: Ctrl = { kind: 'none', count: 0, pos: () => 0, next: () => false, prev: () => false, reset: () => {}, all: () => {}, label: () => 'Siguiente', remaining: () => 0 };

/** Pestañas o selección: un elemento activo a la vez. */
function selector(sec: HTMLElement, btnSel: string, panelSel: string, word: string, onShow?: (i: number) => void): Ctrl {
  const btns = $$<HTMLButtonElement>(btnSel, sec);
  const panels = $$(panelSel, sec);
  let cur = 0;
  const set = (i: number, anim: boolean, cb = true) => {
    cur = i;
    btns.forEach((b, k) => { b.classList.toggle('on', k === i); b.setAttribute('aria-selected', String(k === i)); b.tabIndex = k === i ? 0 : -1; });
    panels.forEach((p, k) => { p.hidden = k !== i; });
    if (anim) animate(panels[i]);
    const sc = $('.frame', sec); if (sc && window.innerWidth < 760 && anim) {
      const top = (btns[i].closest('[role="tablist"]') as HTMLElement).offsetTop - 8;
      if (sc.scrollTop > top) sc.scrollTop = top;
    }
    const list = btns[i].parentElement as HTMLElement;
    if (list.scrollWidth > list.clientWidth) list.scrollLeft = Math.max(0, btns[i].offsetLeft - list.offsetLeft - 16);
    if (cb) onShow?.(i);
    refreshNav();
  };
  btns.forEach((b, k) => b.addEventListener('click', () => { if (k !== cur) set(k, true); }));
  btns.forEach((b, k) => b.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' && b.classList.contains('il')) { e.preventDefault(); set(Math.min(k + 1, btns.length - 1), true); btns[cur].focus(); }
    if (e.key === 'ArrowUp' && b.classList.contains('il')) { e.preventDefault(); set(Math.max(k - 1, 0), true); btns[cur].focus(); }
  }));
  set(0, false, false);
  return {
    kind: 'select', count: btns.length, pos: () => cur,
    next: () => { if (cur < btns.length - 1) { set(cur + 1, true); return true; } return false; },
    prev: () => { if (cur > 0) { set(cur - 1, true); return true; } return false; },
    reset: () => set(0, false),
    all: () => {},
    label: () => (cur < btns.length - 1 ? `${word}: ${btns[cur + 1].textContent?.replace(/^\d+/, '').trim().slice(0, 22)}` : 'Siguiente'),
    remaining: () => btns.length - 1 - cur,
  };
}

/** Filas que se revelan una a una (tablas antes → después). */
function rows(sec: HTMLElement): Ctrl {
  const rs = $$('.row', sec);
  let n = 1;
  const set = (k: number, anim: boolean) => {
    const before = n;
    n = Math.max(1, Math.min(rs.length, k));
    rs.forEach((r, i) => r.classList.toggle('vis', i < n));
    if (anim && !reduced && n > before) {
      const added = rs.slice(before, n);
      live.push(gsap.timeline().fromTo(added, { autoAlpha: 0, x: -24 }, { autoAlpha: 1, x: 0, duration: 0.45, stagger: 0.06, ease: 'power3.out', clearProps: CLEAR }));
      const sc = $('.frame', sec); const last = added[added.length - 1];
      if (sc && last) { const r = last.getBoundingClientRect(); const f = sc.getBoundingClientRect(); if (r.bottom > f.bottom - 70) sc.scrollTo({ top: sc.scrollTop + r.bottom - f.bottom + 90, behavior: reduced ? 'auto' : 'smooth' }); }
    }
    $$('[data-all-rows]', sec).forEach((b) => { (b as HTMLButtonElement).disabled = n >= rs.length; });
    refreshNav();
  };
  $$('[data-all-rows]', sec).forEach((b) => b.addEventListener('click', () => set(rs.length, true)));
  rs.forEach((r, i) => r.addEventListener('click', () => { if (i === n - 1 && n < rs.length) set(n + 1, true); }));
  set(1, false);
  return {
    kind: 'reveal', count: rs.length, pos: () => n - 1,
    next: () => { if (n < rs.length) { set(n + 1, true); return true; } return false; },
    prev: () => { if (n > 1) { set(n - 1, false); return true; } return false; },
    reset: () => { n = 1; set(1, false); },
    all: () => set(rs.length, false),
    label: () => (n < rs.length ? 'Siguiente fila' : 'Siguiente'),
    remaining: () => rs.length - n,
  };
}

/** Hallazgos: 8 tarjetas que se abren (varias pueden quedar abiertas). */
function cards(sec: HTMLElement): Ctrl {
  const cs = $$<HTMLButtonElement>('.hc', sec);
  const allBtn = $('#h-all', sec) as HTMLButtonElement;
  const isOpen = (c: HTMLElement) => c.getAttribute('aria-expanded') === 'true';
  const open = (c: HTMLElement, v: boolean, anim: boolean) => {
    c.setAttribute('aria-expanded', String(v));
    if (v && anim && !reduced) live.push(gsap.timeline().fromTo($('.hc-e', c), { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out', clearProps: CLEAR }));
  };
  const sync = () => {
    const all = cs.every(isOpen);
    allBtn.textContent = all ? 'Cerrar todas' : 'Abrir todas';
    refreshNav();
  };
  cs.forEach((c) => c.addEventListener('click', () => { open(c, !isOpen(c), true); sync(); }));
  allBtn.addEventListener('click', () => { const all = cs.every(isOpen); cs.forEach((c) => open(c, !all, !all)); sync(); });
  const firstClosed = () => cs.find((c) => !isOpen(c));
  return {
    kind: 'reveal', count: cs.length, pos: () => cs.filter(isOpen).length - 1,
    next: () => { const c = firstClosed(); if (!c) return false; open(c, true, true); c.focus({ preventScroll: true }); scrollIntoFrame(sec, c); sync(); return true; },
    prev: () => false,
    reset: () => { cs.forEach((c) => open(c, false, false)); sync(); },
    all: () => { cs.forEach((c) => open(c, true, false)); sync(); },
    label: () => { const c = firstClosed(); return c ? `Abrir ${$('.hc-n', c)?.textContent}` : 'Siguiente'; },
    remaining: () => cs.filter((c) => !isOpen(c)).length,
    // utilidad para los enlaces de Propuestas
    ...{ openId: (id: string) => { const c = $(`#${id}`, sec); if (c) { open(c, true, true); c.classList.add('flash'); setTimeout(() => c.classList.remove('flash'), 1400); scrollIntoFrame(sec, c); sync(); } } },
  } as Ctrl;
}

function scrollIntoFrame(sec: HTMLElement, el: HTMLElement): void {
  const sc = $('.frame', sec); if (!sc) return;
  const r = el.getBoundingClientRect(); const f = sc.getBoundingClientRect();
  if (r.bottom > f.bottom - 60 || r.top < f.top) sc.scrollTo({ top: sc.scrollTop + r.top - f.top - 80, behavior: reduced ? 'auto' : 'smooth' });
}

// ---------------------------------------------------------------------
// Pantallas
// ---------------------------------------------------------------------
const screens = $$<HTMLElement>('.deck > .s');
let cur = -1;
const numEl = $('#num') as HTMLElement;
const stepsEl = $('#steps') as HTMLElement;
const nextLabel = $('#next-label') as HTMLElement;
const btnPrev = $('#btn-prev') as HTMLButtonElement;
const btnNext = $('#btn-next') as HTMLButtonElement;
const ctrls: Ctrl[] = screens.map((sec) => {
  if (sec.id === 's-embudo') return selector(sec, '.fs', '.fd', 'Paso');
  if (sec.id === 's-insights') return selector(sec, '.il', '.ip', 'Insight');
  if (sec.id === 's-hallazgos') return cards(sec);
  if (sec.hasAttribute('data-rows')) return rows(sec);
  if (sec.hasAttribute('data-tabs')) return selector(sec, '.tab', '.panel', 'Ver', sec.id === 's-campana' ? onCampTab : undefined);
  return NONE;
});


function refreshNav(): void {
  if (cur < 0) return;
  const c = ctrls[cur];
  if (c.count > 1) {
    const p = c.pos();
    stepsEl.innerHTML = Array.from({ length: c.count }, (_, i) => `<i class="${c.kind === 'reveal' ? (i <= p ? 'on' : '') : (i === p ? 'on' : '')}"></i>`).join('');
    stepsEl.hidden = false;
  } else { stepsEl.innerHTML = ''; stepsEl.hidden = true; }
  nextLabel.textContent = cur === screens.length - 1 && c.remaining() === 0 ? 'Fin' : c.label();
  btnPrev.disabled = cur === 0 && c.pos() <= 0;
  btnNext.disabled = cur === screens.length - 1 && c.remaining() === 0;
}

function go(i: number, opts: { fromHash?: boolean } = {}): void {
  i = Math.max(0, Math.min(screens.length - 1, i));
  if (i === cur) return;
  closeLb();
  finishAll();
  const prevSec = screens[cur];
  if (prevSec) {
    prevSec.classList.remove('on', 'open');
    prevSec.querySelectorAll('video').forEach((v) => v.pause());
  }
  cur = i;
  const sec = screens[i];
  ctrls[i].reset();
  const frame = $('.frame', sec); if (frame) { frame.scrollTop = 0; frame.scrollLeft = 0; }
  sec.classList.add('on');
  const hasBand = !!$('.band', sec);
  if (reduced) {
    sec.classList.add('open');
  } else {
    sec.classList.remove('open');
    void sec.offsetWidth;
    if (hasBand) {
      setTimeout(() => { if (cur === i) sec.classList.add('open'); }, 90);
      animate($('.body', sec) as HTMLElement, 0.42);
    } else {
      sec.classList.add('open');
      animate($('.frame', sec) as HTMLElement, 0.05);
    }
    $$('.kb', sec).forEach((img) => live.push(gsap.timeline().fromTo(img, { scale: 1.06 }, { scale: 1, duration: 1.2, ease: 'power2.out' })));
  }
  // Interfaz
  numEl.textContent = `${pad(i + 1)} / ${pad(screens.length)}`;
  const blk = sec.dataset.block;
  $$('.blk').forEach((b) => { const on = b.dataset.block === blk; b.classList.toggle('current', on); if (on) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); });
  ($('.blk.current') as HTMLElement | null)?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  document.title = `${pad(i + 1)} · ${sec.dataset.title ?? 'AndiBite'} · AndiBite T3`;
  if (!opts.fromHash) history.replaceState(null, '', `#${i + 1}`);
  refreshNav();
  if (tourOn) scheduleTour();
}

function next(): void { if (!ctrls[cur].next()) go(cur + 1); }
function prev(): void { if (!ctrls[cur].prev()) go(cur - 1); }
function firstOfBlock(b: string | number): number { return screens.findIndex((s) => s.dataset.block === String(b)); }

btnPrev.addEventListener('click', prev);
btnNext.addEventListener('click', next);
$$('[data-go]').forEach((b) => b.addEventListener('click', () => go(Number(b.dataset.go) - 1)));
$$('.blk, .ix').forEach((b) => b.addEventListener('click', () => go(firstOfBlock(b.dataset.block ?? '1'))));

// Enlaces de Propuestas a Hallazgos e Insights
const iHall = screens.findIndex((s) => s.id === 's-hallazgos');
const iIns = screens.findIndex((s) => s.id === 's-insights');
$$('.hl').forEach((b) => b.addEventListener('click', () => {
  if (b.dataset.h) {
    go(iHall);
    setTimeout(() => (ctrls[iHall] as Ctrl & { openId: (id: string) => void }).openId(`h${b.dataset.h}`), reduced ? 0 : 700);
  } else if (b.dataset.i) {
    go(iIns);
    const k = Number(b.dataset.i) - 1;
    for (let j = 0; j < k; j++) ctrls[iIns].next();
  }
}));

// ---------------------------------------------------------------------
// Teclado, toque y hash
// ---------------------------------------------------------------------
function toggleFullscreen(): void {
  const d = document as Document & { webkitFullscreenElement?: Element; webkitExitFullscreen?: () => void };
  const el = document.documentElement as HTMLElement & { webkitRequestFullscreen?: () => void };
  if (document.fullscreenElement || d.webkitFullscreenElement) (document.exitFullscreen?.bind(document) ?? d.webkitExitFullscreen)?.();
  else (el.requestFullscreen?.bind(el) ?? el.webkitRequestFullscreen)?.();
}

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const t = e.target as HTMLElement;
  if (t.closest('input, textarea, select')) return;
  if (lbOpen()) {
    if (e.key === 'Escape') closeLb();
    else if (e.key === 'ArrowRight') lbStep(1);
    else if (e.key === 'ArrowLeft') lbStep(-1);
    e.preventDefault();
    return;
  }
  const onBtn = !!t.closest('button, a, video');
  switch (e.key) {
    case 'ArrowRight': case 'PageDown': e.preventDefault(); next(); break;
    case 'ArrowLeft': case 'PageUp': e.preventDefault(); prev(); break;
    case ' ': if (onBtn) return; e.preventDefault(); if (e.shiftKey) prev(); else next(); break;
    case 'Home': e.preventDefault(); go(0); break;
    case 'End': e.preventDefault(); go(screens.length - 1); break;
    case 'f': case 'F': toggleFullscreen(); break;
    case 'r': case 'R': toggleTour(); break;
    case 'i': case 'I': go(1); break;
    default:
      if (/^[1-7]$/.test(e.key)) go(firstOfBlock(e.key));
  }
});

let tx = 0, ty = 0, tOk = false;
const deckEl = $('#deck') as HTMLElement;
deckEl.addEventListener('touchstart', (e) => {
  const t = e.touches[0]; tx = t.clientX; ty = t.clientY;
  tOk = !(e.target as HTMLElement).closest('.car, .rv, .thumbs, .tabs, .ins-list, .blocks');
}, { passive: true });
deckEl.addEventListener('touchend', (e) => {
  if (!tOk) return;
  const t = e.changedTouches[0]; const dx = t.clientX - tx; const dy = t.clientY - ty;
  if (Math.abs(dx) > 70 && Math.abs(dy) < 45) { if (dx < 0) next(); else prev(); }
}, { passive: true });

window.addEventListener('hashchange', () => { const n = parseInt(location.hash.slice(1), 10); if (n) go(n - 1, { fromHash: true }); });

// ---------------------------------------------------------------------
// Visor de fotos (lightbox)
// ---------------------------------------------------------------------
const lb = $('#lb') as HTMLElement;
const lbImg = $('#lb-img') as HTMLImageElement;
const lbCap = $('#lb-cap') as HTMLElement;
let lbList: { src: string; cap: string }[] = [];
let lbIdx = 0;
let lbReturn: HTMLElement | null = null;
const lbOpen = () => lb.classList.contains('open');

function showLb(): void {
  const it = lbList[lbIdx];
  lbImg.src = it.src; lbImg.alt = it.cap; lbCap.textContent = `${it.cap} · ${lbIdx + 1} de ${lbList.length}`;
  lb.classList.toggle('single', lbList.length < 2);
  if (!reduced) gsap.fromTo(lbImg, { autoAlpha: 0, scale: 0.96 }, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'power2.out' });
}
function openLb(list: { src: string; cap: string }[], idx: number, from: HTMLElement): void {
  lbList = list; lbIdx = idx; lbReturn = from;
  lb.classList.add('open'); lb.setAttribute('aria-hidden', 'false');
  showLb();
  ($('#lb-x') as HTMLElement).focus();
}
function closeLb(): void {
  if (!lbOpen()) return;
  lb.classList.remove('open'); lb.setAttribute('aria-hidden', 'true');
  lbReturn?.focus({ preventScroll: true });
}
function lbStep(d: number): void { lbIdx = (lbIdx + d + lbList.length) % lbList.length; showLb(); }
$('#lb-x')?.addEventListener('click', closeLb);
$('#lb-prev')?.addEventListener('click', (e) => { e.stopPropagation(); lbStep(-1); });
$('#lb-next')?.addEventListener('click', (e) => { e.stopPropagation(); lbStep(1); });
lb.addEventListener('click', (e) => { if (e.target === lb || (e.target as HTMLElement).classList.contains('lb-fig')) closeLb(); });

$$('[data-lb]').forEach((b) => b.addEventListener('click', () => {
  const group = $$(`[data-lb="${b.dataset.lb}"]`);
  const list = group.map((g) => { const im = $('img', g) as HTMLImageElement; return { src: im.getAttribute('src') ?? '', cap: im.alt }; });
  openLb(list, group.indexOf(b), b);
}));

// ---------------------------------------------------------------------
// Campaña: carrusel de 10 piezas y visor de reels
// ---------------------------------------------------------------------
const PIEZAS = [
  'Anuncio para Meta Ads · el producto',
  'Post 1:1 · «¡Pequeños brownies, grandes aventuras!»',
  'Stories 9:16 · preguntas a papá y mamá',
  'Post 1:1 · «¿Ya conoces AndiBite?»',
  'Carrusel de 4 láminas · la app Andi',
  'Post 1:1 · los 3 sabores',
  'Anuncio para Meta Ads · «Cada familia tiene su propio truco»',
  'Story 9:16 · «Cada familia tiene su propio truco»',
  'Story 9:16 · «¡Una nueva sorpresa para su lonchera!»',
  'Story 9:16 · «¡Haz espacio para AndiBite en su lonchera!»',
];
const piezaSrc = (i: number) => `./img/campana/pieza-${pad(i + 1)}.jpg`;
const carImg = $('#car-img') as HTMLImageElement;
const thumbs = $('#thumbs') as HTMLElement;
let car = 0;
thumbs.innerHTML = PIEZAS.map((c, i) => `<button type="button" class="th" aria-label="Pieza ${i + 1}: ${c}"><img src="${piezaSrc(i)}" alt="" loading="lazy" /></button>`).join('');
const ths = $$<HTMLButtonElement>('.th', thumbs);
function setCar(i: number, anim = true): void {
  car = (i + PIEZAS.length) % PIEZAS.length;
  carImg.src = piezaSrc(car); carImg.alt = `Pieza ${car + 1}: ${PIEZAS[car]}`;
  ($('#car-n') as HTMLElement).textContent = pad(car + 1);
  ($('#car-cap') as HTMLElement).textContent = PIEZAS[car];
  ths.forEach((t, k) => { t.classList.toggle('on', k === car); t.setAttribute('aria-current', String(k === car)); });
  if (anim && !reduced) gsap.fromTo(carImg, { autoAlpha: 0, x: 16 }, { autoAlpha: 1, x: 0, duration: 0.3, ease: 'power2.out', clearProps: CLEAR });
}
ths.forEach((t, k) => t.addEventListener('click', () => setCar(k)));
$('.car-prev')?.addEventListener('click', () => setCar(car - 1));
$('.car-next')?.addEventListener('click', () => setCar(car + 1));
$('.car-view')?.addEventListener('click', (e) => openLb(PIEZAS.map((c, i) => ({ src: piezaSrc(i), cap: `Pieza ${i + 1}: ${c}` })), car, e.currentTarget as HTMLElement));
let cx = 0;
$('.car-main')?.addEventListener('touchstart', (e) => { cx = (e as TouchEvent).touches[0].clientX; }, { passive: true });
$('.car-main')?.addEventListener('touchend', (e) => { const dx = (e as TouchEvent).changedTouches[0].clientX - cx; if (Math.abs(dx) > 50) setCar(car + (dx < 0 ? 1 : -1)); }, { passive: true });
setCar(0, false);

const rv = $('#rv-video') as HTMLVideoElement;
const rvPlay = $('#rv-play') as HTMLButtonElement;
const rvSnd = $('#rv-snd') as HTMLButtonElement;
const rvBox = $('.rv') as HTMLElement;
const syncRv = () => { rvBox.classList.toggle('playing', !rv.paused && !rv.ended); rvPlay.setAttribute('aria-label', rv.paused ? 'Reproducir el reel' : 'Pausar el reel'); };
rv.addEventListener('play', syncRv); rv.addEventListener('pause', syncRv); rv.addEventListener('ended', syncRv);
const togglePlay = () => { if (rv.paused || rv.ended) void rv.play().catch(() => {}); else rv.pause(); };
rvPlay.addEventListener('click', togglePlay);
rv.addEventListener('click', togglePlay);
rvSnd.addEventListener('click', () => {
  rv.muted = !rv.muted;
  rvSnd.setAttribute('aria-pressed', String(!rv.muted));
  rvSnd.setAttribute('aria-label', rv.muted ? 'Activar el sonido' : 'Silenciar');
  rvBox.classList.toggle('sound', !rv.muted);
});
function setReel(n: number, play: boolean): void {
  $$('.rl-i').forEach((b) => b.classList.toggle('on', b.dataset.reel === String(n)));
  rv.pause();
  rv.poster = `./img/reels/reel-${n}.jpg`;
  rv.src = `./vid/reel-${n}.mp4`;
  if (play) void rv.play().catch(() => {});
  syncRv();
}
$$('.rl-i').forEach((b) => b.addEventListener('click', () => setReel(Number(b.dataset.reel), true)));
function onCampTab(i: number): void {
  if (i !== 2) rv.pause();
  else if (tourOn) { rv.muted = true; void rv.play().catch(() => {}); }
}

// ---------------------------------------------------------------------
// Modo recorrido: avanza solo cada 40 s y se detiene al tocar cualquier cosa
// ---------------------------------------------------------------------
const SLOT = 40_000;
let tourOn = false;
let timers: number[] = [];
let tourTween: gsap.core.Tween | null = null;
const btnTour = $('#btn-tour') as HTMLButtonElement;
const tourFill = $('#tour-fill') as HTMLElement;

function clearTour(): void { timers.forEach((t) => clearTimeout(t)); timers = []; tourTween?.kill(); tourTween = null; }
function scheduleTour(): void {
  clearTour();
  const here = cur;
  const dwell = Number(screens[cur].dataset.dwell ?? 1) * SLOT;
  const n = ctrls[cur].remaining();
  for (let k = 1; k <= n; k++) timers.push(window.setTimeout(() => { if (tourOn && cur === here) ctrls[cur].next(); }, (dwell * k) / (n + 1)));
  timers.push(window.setTimeout(() => {
    if (!tourOn || cur !== here) return;
    if (cur < screens.length - 1) go(cur + 1); else stopTour();
  }, dwell));
  tourTween = gsap.fromTo(tourFill, { scaleX: 0 }, { scaleX: 1, duration: dwell / 1000, ease: 'none' });
}
function startTour(): void {
  if (tourOn) return;
  tourOn = true;
  document.body.classList.add('touring');
  btnTour.setAttribute('aria-pressed', 'true');
  ($('span', btnTour) as HTMLElement).textContent = 'Detener recorrido';
  if (cur === 0) go(1); else scheduleTour();
}
function stopTour(): void {
  if (!tourOn) return;
  tourOn = false;
  clearTour();
  gsap.set(tourFill, { scaleX: 0 });
  document.body.classList.remove('touring');
  btnTour.setAttribute('aria-pressed', 'false');
  ($('span', btnTour) as HTMLElement).textContent = 'Modo recorrido';
}
function toggleTour(): void { if (tourOn) stopTour(); else startTour(); }
btnTour.addEventListener('click', toggleTour);
$$('[data-tour]').forEach((b) => b.addEventListener('click', startTour));
// Cualquier toque o tecla lo detiene (salvo los botones que lo controlan)
const stopper = (e: Event) => {
  if (!tourOn) return;
  const t = e.target as HTMLElement;
  if (t.closest?.('#btn-tour, [data-tour]')) return;
  if (e instanceof KeyboardEvent && (e.key === 'r' || e.key === 'R')) return;
  stopTour();
};
document.addEventListener('pointerdown', stopper, true);
document.addEventListener('keydown', stopper, true);
document.addEventListener('wheel', stopper, { capture: true, passive: true });

// ---------------------------------------------------------------------
// Inicio
// ---------------------------------------------------------------------
const start = parseInt(location.hash.slice(1), 10);
go(start ? start - 1 : 0, { fromHash: true });
document.documentElement.classList.add('is-ready');

// Acceso para las capturas automáticas
(window as unknown as { t3: unknown }).t3 = {
  go: (i: number) => go(i),
  total: screens.length,
  cur: () => cur,
  kind: (i: number) => ctrls[i].kind,
  next: () => ctrls[cur].next(),
  all: () => ctrls[cur].all(),
  finish: finishAll,
};
