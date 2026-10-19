// Mapa perceptual (T2_10, sección 6): precio por 20 g frente a la evidencia
// que el padre puede verificar (1 a 5). Se dibuja en SVG y se anima en main.ts.
type Brand = { n: string; x: number; y: number; ref?: boolean; dx: number; dy: number; anchor?: 'start' | 'end' | 'middle' };

const W = 1000, H = 700;
const X0 = 96, X1 = 980, Y0 = 16, Y1 = 600;
const PX = (v: number) => X0 + ((v - 1.25) / 3.75) * (X1 - X0);
const PY = (e: number) => Y1 - ((e - 0.5) / 5) * (Y1 - Y0);

const BRANDS: Brand[] = [
  { n: 'Nutri H', x: 3.2, y: 4, dx: -18, dy: 8, anchor: 'end' },
  { n: 'Fika', x: 4.0, y: 3, dx: -18, dy: -14, anchor: 'end' },
  { n: 'Mamalama', x: 4.1, y: 2, dx: 0, dy: 40, anchor: 'middle' },
  { n: 'Bimbo Nutra Bien', x: 1.67, y: 2, dx: 18, dy: 8, anchor: 'start' },
  { n: 'Siete Dragones', x: 3.01, y: 2, dx: -18, dy: 8, anchor: 'end', ref: true },
  { n: 'Little Bites', x: 1.68, y: 1, dx: 18, dy: 8, anchor: 'start', ref: true },
];

export function buildMapa(el: HTMLElement): void {
  const t: string[] = [];
  t.push(`<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">`);
  t.push(`<rect x="${X0}" y="${Y0}" width="${X1 - X0}" height="${Y1 - Y0}" rx="10" fill="#FFFFFF"/>`);
  t.push(`<rect class="draw m-axis" x="${X0}" y="${Y0}" width="${X1 - X0}" height="${Y1 - Y0}" rx="10"/>`);
  // Líneas de cuadrantes: S/3.00 y evidencia 3
  t.push(`<line class="m-q" x1="${PX(3)}" y1="${Y0}" x2="${PX(3)}" y2="${Y1}"/>`);
  t.push(`<line class="m-q" x1="${X0}" y1="${PY(3)}" x2="${X1}" y2="${PY(3)}"/>`);
  // Ticks
  [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].forEach((v) => t.push(`<text class="m-tick" x="${PX(v)}" y="${Y1 + 30}" text-anchor="middle">S/${v.toFixed(2)}</text>`));
  [1, 2, 3, 4, 5].forEach((v) => t.push(`<text class="m-tick" x="${X0 - 16}" y="${PY(v) + 7}" text-anchor="end">${v}</text>`));
  t.push(`<text class="m-axt" x="${(X0 + X1) / 2}" y="${Y1 + 70}" text-anchor="middle">Precio por 20 g (S/ con IGV)</text>`);
  t.push(`<text class="m-axt" transform="translate(22 ${(Y0 + Y1) / 2}) rotate(-90)" text-anchor="middle">Evidencia que el padre puede verificar (1 a 5)</text>`);
  // Cuadrantes
  t.push(`<text class="m-ql" x="${X0 + 18}" y="${Y0 + 34}">PRECIO BAJO CON PRUEBA: VACÍO</text>`);
  t.push(`<text class="m-ql hot" x="${X1 - 18}" y="${Y0 + 34}" text-anchor="end">PREMIUM CON PRUEBA</text>`);
  t.push(`<text class="m-ql" x="${X0 + 18}" y="${Y1 - 18}">MASIVO</text>`);
  t.push(`<text class="m-ql" x="${X1 - 18}" y="${Y1 - 18}" text-anchor="end">PREMIUM SIN PRUEBA</text>`);
  // Competidores
  BRANDS.forEach((b) => {
    const cx = PX(b.x), cy = PY(b.y);
    t.push(`<g class="pop m-pt"><circle class="m-dot${b.ref ? ' ref' : ''}" cx="${cx}" cy="${cy}" r="${b.ref ? 9 : 12}"/>`
      + `<text class="m-lbl${b.ref ? ' ref' : ''}" x="${cx + b.dx}" y="${cy + b.dy}" text-anchor="${b.anchor ?? 'start'}">${b.n}</text></g>`);
  });
  // AndiBite: rango S/4.16 a S/4.65 y punto en S/4.48, evidencia 5
  const ax = PX(4.48), ay = PY(5);
  t.push(`<g class="pop m-pt m-andi">`
    + `<rect class="m-range" x="${PX(4.16)}" y="${ay - 9}" width="${PX(4.65) - PX(4.16)}" height="18" rx="9"/>`
    + `<circle class="m-pulse" cx="${ax}" cy="${ay}" r="16"/>`
    + `<circle class="m-me" cx="${ax}" cy="${ay}" r="17"/>`
    + `<text class="m-me-lbl" x="${ax - 34}" y="${ay + 62}" text-anchor="end">AndiBite</text>`
    + `</g>`);
  t.push(`</svg>`);
  el.innerHTML = t.join('');
}
