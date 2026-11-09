// Íconos de línea propios (24 x 24), dibujados con el color del texto.
const PATHS: Record<string, string> = {
  qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/>',
  flask: '<path d="M9 3h6M10 3v6.5L4.6 18.4A1.8 1.8 0 0 0 6.2 21h11.6a1.8 1.8 0 0 0 1.6-2.6L14 9.5V3"/><path d="M7.2 15h9.6"/>',
  store: '<path d="M4 9.5L5.5 4h13L20 9.5"/><path d="M4 9.5a2.7 2.7 0 0 0 5.3 0 2.7 2.7 0 0 0 5.4 0 2.7 2.7 0 0 0 5.3 0"/><path d="M5.5 12v8.5h13V12M10 20.5v-5h4v5"/>',
  star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9l-5.3 2.8 1.1-5.9-4.3-4.1 5.9-.8z"/>',
  heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.2c3 .2 5.5 2.4 5.5 5.8"/>',
  hand: '<path d="M2.5 12.5l4-4 4 1.5 3-2.5 4 1 4 4"/><path d="M6.5 8.5l6.5 7a1.6 1.6 0 0 0 2.3-2.2"/><path d="M11 17.5a1.5 1.5 0 0 0 2.2-2"/><path d="M8.5 16.5a1.5 1.5 0 0 0 2.2-2M2.5 12.5l4 4.5"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.8 1.8M16.7 16.7l1.8 1.8M5.5 18.5l1.8-1.8M16.7 7.3l1.8-1.8"/>',
  key: '<circle cx="8" cy="14" r="4.5"/><path d="M11.3 10.8L20 2.5M16.5 6l2.5 2.5M14 8.5l2 2"/>',
  calc: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M8 6.5h8v3H8zM8.5 13.5h.01M12 13.5h.01M15.5 13.5h.01M8.5 17.5h.01M12 17.5h.01M15.5 17.5h.01"/>',
  coins: '<ellipse cx="9" cy="7" rx="6" ry="2.8"/><path d="M3 7v4c0 1.5 2.7 2.8 6 2.8s6-1.3 6-2.8V7"/><path d="M9 13.8v3.4c0 1.5 2.7 2.8 6 2.8s6-1.3 6-2.8v-4c0-1.5-2.7-2.8-6-2.8"/>',
  school: '<path d="M2.5 9L12 4l9.5 5L12 14z"/><path d="M6.5 11.2v4.6c1.6 1.6 3.5 2.4 5.5 2.4s3.9-.8 5.5-2.4v-4.6M21.5 9v5"/>',
  leaf: '<path d="M5 19c0-8 5-13.5 15-14-.3 9.8-5.8 15-14 15"/><path d="M5 19c3-4 6-6.5 10-8.5"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l5.5-3.5z"/>',
};

export function iconSvg(name: string): string {
  const body = PATHS[name] ?? PATHS.star;
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${body}</svg>`;
}

export function injectIcons(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-icon]').forEach((el) => {
    el.innerHTML = iconSvg(el.dataset.icon ?? '');
  });
}
