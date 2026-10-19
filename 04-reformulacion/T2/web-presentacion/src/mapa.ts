// Mapa de posicionamiento (T2_10 y benchmark T2_02): sabor de suplemento o sabor de postre,
// frente a con hierro o sin hierro. Ubicación cualitativa según el benchmark. Se dibuja en SVG.
type Brand = { n: string; x: number; y: number; ref?: boolean; dx: number; dy: number; anchor?: 'start' | 'end' | 'middle' };

const W = 1000, H = 700;
const X0 = 70, X1 = 980, Y0 = 16, Y1 = 610;
const PX = (v: number) => X0 + v * (X1 - X0); // 0 = sabor de suplemento, 1 = sabor de postre
const PY = (v: number) => Y1 - v * (Y1 - Y0); // 0 = sin hierro, 1 = con hierro

const BRANDS: Brand[] = [
  { n: 'Nutri H', x: 0.18, y: 0.82, dx: 20, dy: 8, anchor: 'start' },
  { n: 'Forticao', x: 0.3, y: 0.66, dx: 20, dy: 8, anchor: 'start' },
  { n: 'Fika', x: 0.84, y: 0.4, dx: 20, dy: 8, anchor: 'start' },
  { n: 'Mamalama', x: 0.6, y: 0.32, dx: 0, dy: -24, anchor: 'middle' },
  { n: 'Siete Dragones', x: 0.52, y: 0.14, dx: 18, dy: 8, anchor: 'start', ref: true },
  { n: 'Bimbo Nutra Bien', x: 0.74, y: 0.12, dx: 0, dy: -24, anchor: 'middle', ref: true },
  { n: 'La Purita', x: 0.93, y: 0.22, dx: 0, dy: -24, anchor: 'middle', ref: true },
];

export function buildMapa(el: HTMLElement): void {
  const t: string[] = [];
  t.push(`<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">`);
  t.push(`<rect x="${X0}" y="${Y0}" width="${X1 - X0}" height="${Y1 - Y0}" rx="10" fill="#FFFFFF"/>`);
  t.push(`<rect class="draw m-axis" x="${X0}" y="${Y0}" width="${X1 - X0}" height="${Y1 - Y0}" rx="10"/>`);
  t.push(`<line class="m-q" x1="${PX(0.5)}" y1="${Y0}" x2="${PX(0.5)}" y2="${Y1}"/>`);
  t.push(`<line class="m-q" x1="${X0}" y1="${PY(0.5)}" x2="${X1}" y2="${PY(0.5)}"/>`);
  t.push(`<text class="m-axt" x="${X0}" y="${Y1 + 40}" text-anchor="start">Sabor de suplemento</text>`);
  t.push(`<text class="m-axt" x="${X1}" y="${Y1 + 40}" text-anchor="end">Sabor de postre</text>`);
  t.push(`<text class="m-axt" transform="translate(26 ${Y1 - 10}) rotate(-90)" text-anchor="start">Sin hierro</text>`);
  t.push(`<text class="m-axt" transform="translate(26 ${Y0 + 10}) rotate(-90)" text-anchor="end">Con hierro</text>`);
  t.push(`<text class="m-ql" x="${X0 + 18}" y="${Y0 + 34}">SABOR DE SUPLEMENTO, CON HIERRO</text>`);
  t.push(`<text class="m-ql hot" x="${X1 - 18}" y="${Y0 + 34}" text-anchor="end">SABOR DE POSTRE, CON HIERRO</text>`);
  t.push(`<text class="m-ql" x="${X0 + 18}" y="${Y1 - 18}">SABOR DE SUPLEMENTO, SIN HIERRO</text>`);
  t.push(`<text class="m-ql" x="${X1 - 18}" y="${Y1 - 18}" text-anchor="end">SABOR DE POSTRE, SIN HIERRO</text>`);
  BRANDS.forEach((b) => {
    const cx = PX(b.x), cy = PY(b.y);
    t.push(`<g class="pop m-pt"><circle class="m-dot${b.ref ? ' ref' : ''}" cx="${cx}" cy="${cy}" r="${b.ref ? 9 : 12}"/>`
      + `<text class="m-lbl${b.ref ? ' ref' : ''}" x="${cx + b.dx}" y="${cy + b.dy}" text-anchor="${b.anchor ?? 'start'}">${b.n}</text></g>`);
  });
  const ax = PX(0.8), ay = PY(0.84);
  t.push(`<g class="pop m-pt m-andi">`
    + `<circle class="m-pulse" cx="${ax}" cy="${ay}" r="16"/>`
    + `<circle class="m-me" cx="${ax}" cy="${ay}" r="17"/>`
    + `<text class="m-me-lbl" x="${ax}" y="${ay + 58}" text-anchor="middle">AndiBite</text>`
    + `</g>`);
  t.push(`</svg>`);
  el.innerHTML = t.join('');
}
