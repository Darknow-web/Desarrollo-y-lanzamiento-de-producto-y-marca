// AndiBite — Trabajos de campo 5 a 8 (pptxgenjs, deck estructurado)
const pptxgen = require('pptxgenjs');
const React = require('react');
const RDS = require('react-dom/server');
const sharp = require('sharp');
const fa = require('react-icons/fa');
const { applyTheme } = require('./apply_theme.js');
const OUT = process.argv[2] || 'T2_Plantilla-AndiBite.pptx';



const THEME = {
  name: 'AndiBite',
  headFontFace: 'Calibri',
  bodyFontFace: 'Calibri',
  colors: {
    dk1: '3B1A14', lt1: 'FFFFFF', dk2: '4A2018', lt2: 'FBF3E8',
    accent1: 'BA4036', accent2: '6B3A2A', accent3: 'E3A33B', accent4: '7C8A3A',
    accent5: 'D9B48F', accent6: '8A1C2B', hlink: 'BA4036', folHlink: '8A1C2B',
  },
};
const H = THEME.colors; // hex, solo para opciones que piden hex

const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE'; // 13.333 x 7.5
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.author = 'Grupo 2';
pres.title = 'AndiBite — T2 Plan de marketing';
const C = pres.SchemeColor;

// ---------- íconos ----------
async function icon(name, hex, size = 96) {
  const Comp = fa[name];
  if (!Comp) throw new Error('icono no existe: ' + name);
  let svg = RDS.renderToStaticMarkup(React.createElement(Comp, { color: '#' + hex, size }));
  if (!svg.includes('xmlns')) svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  const buf = await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
  return 'image/png;base64,' + buf.toString('base64');
}

// ---------- layouts ----------
const FOOT = 'AndiBite · Grupo 2 · T2 Plan de marketing';
pres.defineSlideMaster({
  title: 'PORTADA',
  background: { color: H.dk2 },
  objects: [
    { placeholder: { options: { name: 'title', type: 'title', align: 'left', x: 0.8, y: 3.55, w: 7.4, h: 0.85, fontSize: 40, bold: true, color: C.background2, margin: 0, valign: 'top' }, text: '' } },
    { placeholder: { options: { name: 'body', type: 'body', x: 0.8, y: 4.45, w: 7.4, h: 0.8, fontSize: 18, color: C.accent5, margin: 0, valign: 'top' }, text: '' } },
  ],
});
pres.defineSlideMaster({
  title: 'CIERRE',
  background: { color: H.dk2 },
  objects: [
    { placeholder: { options: { name: 'title', type: 'title', align: 'left', x: 0.8, y: 1.35, w: 7.4, h: 1.6, fontSize: 48, bold: true, color: C.background2, margin: 0, valign: 'top' }, text: '' } },
  ],
});
pres.defineSlideMaster({
  title: 'SECCION',
  background: { color: H.dk2 },
  objects: [
    { placeholder: { options: { name: 'title', type: 'title', align: 'left', x: 0.8, y: 2.75, w: 7.6, h: 1.55, fontSize: 44, bold: true, color: C.background2, margin: 0, valign: 'bottom' }, text: '' } },
    { placeholder: { options: { name: 'body', type: 'body', x: 0.8, y: 4.45, w: 7.6, h: 1.3, fontSize: 18, color: C.accent5, margin: 0, valign: 'top' }, text: '' } },
    { image: { path: 'img/logo_light.png', x: 0.8, y: 6.55, w: 1.45, h: 0.5 } },
  ],
});
pres.defineSlideMaster({
  title: 'CONTENIDO',
  background: { color: H.lt2 },
  objects: [
    { placeholder: { options: { name: 'kicker', type: 'body', x: 0.6, y: 0.3, w: 10, h: 0.32, fontSize: 12, bold: true, color: C.accent1, charSpacing: 2, margin: 0, valign: 'top' }, text: '' } },
    { placeholder: { options: { name: 'title', type: 'title', align: 'left', x: 0.6, y: 0.62, w: 12.13, h: 0.8, fontSize: 34, bold: true, color: C.text2, margin: 0, valign: 'top' }, text: '' } },
    { text: { text: FOOT, options: { x: 0.6, y: 7.06, w: 8, h: 0.28, fontSize: 10, color: C.accent2, margin: 0 } } },
    { image: { path: 'img/logo_color.png', x: 11.45, y: 6.99, w: 0.95, h: 0.325 } },
  ],
  slideNumber: { x: 12.5, y: 7.04, w: 0.5, h: 0.28, fontSize: 10, color: H.accent2 },
});

// ---------- helpers ----------
const sh = () => ({ type: 'outer', color: '7A4A30', opacity: 0.14, blur: 8, offset: 2, angle: 90 });
function card(s, x, y, w, h, o = {}) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: o.r ?? 0.12, fill: { color: o.fill ?? C.background1 }, line: { color: o.fill ?? C.background1, width: 0 }, shadow: o.noShadow ? undefined : sh(), objectName: o.name });
}
const nb = (t) => typeof t === 'string' ? t.replace(/ %/g, '\u00a0%') : t.map(r => Object.assign({}, r, { text: nb(r.text) }));
function T(s, text, o) { s.addText(nb(text), Object.assign({ isTextBox: true, margin: 0, valign: 'top', fontSize: 14, color: C.text1 }, o)); }
async function iconCircle(s, name, x, y, d, fillScheme, iconHex) {
  s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fillScheme }, line: { color: fillScheme, width: 0 } });
  const p = d * 0.22;
  s.addImage({ data: await icon(name, iconHex), x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p });
}
async function imgSlot(s, n, x, y, w, h, label, dark = false) {
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.15, fill: { color: dark ? C.accent2 : 'F0E2CF' }, line: { color: dark ? C.accent5 : C.accent5, width: 1.5, dashType: 'dash' }, objectName: 'IMAGEN_' + n });
  const d = 0.8;
  s.addImage({ data: await icon('FaCamera', dark ? H.accent5 : H.accent2), x: x + w / 2 - d / 2, y: y + h / 2 - 1.0, w: d, h: d });
  T(s, [
    { text: 'IMAGEN ' + n, options: { bold: true, fontSize: 16, breakLine: true } },
    { text: label, options: { fontSize: 13, breakLine: true } },
    { text: 'Prompt en las notas del orador', options: { fontSize: 11, italic: true } },
  ], { x: x + 0.2, y: y + h / 2 + 0.0, w: w - 0.4, h: 1.2, align: 'center', color: dark ? C.background2 : C.accent2 });
}
function content(sec, kicker, title) {
  const s = pres.addSlide({ masterName: 'CONTENIDO', sectionTitle: sec });
  s.addText(kicker, { placeholder: 'kicker' });
  s.addText(title, { placeholder: 'title' });
  return s;
}
async function section(sec, num, title, sub, iconName) {
  pres.addSection({ title: sec });
  const s = pres.addSlide({ masterName: 'SECCION', sectionTitle: sec });
  T(s, num, { x: 0.8, y: 0.85, w: 4, h: 1.9, fontSize: 120, bold: true, color: C.accent1, fontFace: undefined });
  s.addText(title, { placeholder: 'title' });
  s.addText(sub, { placeholder: 'body' });
  s.addShape(pres.shapes.OVAL, { x: 8.75, y: 1.55, w: 4.2, h: 4.2, fill: { color: C.accent2 }, line: { color: C.accent2, width: 0 } });
  s.addImage({ data: await icon(iconName, H.accent5), x: 9.85, y: 2.65, w: 2.0, h: 2.0 });
  return s;
}
const chartText = () => ({
  catAxisLabelColor: H.accent2, valAxisLabelColor: H.accent2, catAxisLabelFontSize: 12, valAxisLabelFontSize: 11,
  catAxisLabelFontFace: '+mn-lt', valAxisLabelFontFace: '+mn-lt', dataLabelFontFace: '+mn-lt', legendFontFace: '+mn-lt', titleFontFace: '+mn-lt',
  dataLabelColor: H.dk1, dataLabelFontSize: 12, legendFontSize: 12, legendColor: H.accent2,
  showTitle: true, titleColor: H.dk2, titleFontSize: 15, titleBold: true,
  valGridLine: { color: 'E8D8C4', size: 0.75 }, catGridLine: { style: 'none' },
  catAxisLineShow: false, valAxisLineShow: false,
});

// =============== T2 · SUSTENTACIÓN (se concatena después de tema.js) ===============
// Uso (desde fuente/ppt):
//   python3 -I prep_img.py        (reduce las imágenes a img/deck/)
//   cat tema.js t2_sustentacion_slides.js > t2_sustentacion.js && node t2_sustentacion.js ../../T2_Sustentacion-AndiBite.pptx
//   python3 ../dedup_media.py ../../T2_Sustentacion-AndiBite.pptx
//   python3 -I add_anim.py ../../T2_Sustentacion-AndiBite.pptx /tmp/x.pptx && mv /tmp/x.pptx ../../T2_Sustentacion-AndiBite.pptx
//
// Fotos pendientes: guarda la foto en img/deck/entrantes/imagen_N.jpg, corre prep_img.py y escribe aquí la ruta
// (por ejemplo 1: 'img/deck/imagen_1.jpg'). Si el valor es null, se dibuja el espacio reservado "IMAGEN N".
// La lista con tamaños y prompts está en IMAGENES-pendientes.md.
const IMG = {
  1: 'img/deck/imagen_1.jpg', // diap. 2  · manos armando la lonchera de la mañana (generada)
  2: 'img/deck/imagen_2.jpg', // diap. 7  · lonchera kraft con el mini brownie (foto real o generada)
  3: null, // diap. 14 · captura del focus 1 virtual (foto real, evidencia)
  4: 'img/deck/imagen_4.jpg', // diap. 16 · lonchera que vuelve intacta, a sangre completa (generada)
};

pres.title = 'AndiBite · Sustentación T2';
const K = {
  cafe: '4A2018', tx: '3B1A14', rojo: 'BA4036', dor: 'E3A33B', oli: '7C8A3A', arena: 'D9B48F', vino: '8A1C2B',
  cm: '6B3A2A', cr: 'FBF3E8', bl: 'FFFFFF', kraft: 'E8CDB3', suave: 'F0E2CF', osc2: '5E2C22', lin: 'E3D2BE',
};
const X0 = 0.6, FW = 12.13, SW = 13.333, SH = 7.5;

// Íconos livianos (paleta), misma firma que en tema.js
async function icon(name, hex, size = 96) {
  const Comp = fa[name];
  if (!Comp) throw new Error('icono no existe: ' + name);
  let svg = RDS.renderToStaticMarkup(React.createElement(Comp, { color: '#' + hex, size }));
  if (!svg.includes('xmlns')) svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  const buf = await sharp(Buffer.from(svg)).resize(size, size).png({ compressionLevel: 9, palette: true }).toBuffer();
  return 'image/png;base64,' + buf.toString('base64');
}

// ---------- masters propios ----------
pres.defineSlideMaster({ title: 'CLARO', background: { color: K.cr }, slideNumber: { x: 12.45, y: 7.05, w: 0.6, h: 0.3, fontSize: 11, color: K.cm, align: 'right' } });
pres.defineSlideMaster({ title: 'OSCURO', background: { color: K.cafe }, slideNumber: { x: 12.45, y: 7.05, w: 0.6, h: 0.3, fontSize: 11, color: K.arena, align: 'right' } });
pres.defineSlideMaster({ title: 'LIMPIO', background: { color: K.cafe } }); // portada, separadores y cierre
pres.defineSlideMaster({ title: 'FOTO', background: { color: K.cafe } });   // foto a sangre completa

// ---------- helpers ----------
const SECS = new Set();
function slide(master, sec) {
  if (!SECS.has(sec)) { pres.addSection({ title: sec }); SECS.add(sec); }
  return pres.addSlide({ masterName: master, sectionTitle: sec });
}
function kicker(s, t, o = {}) { T(s, t.toUpperCase(), { x: o.x ?? X0, y: o.y ?? 0.32, w: o.w ?? 11, h: 0.3, fontSize: 14, bold: true, color: o.dark ? K.dor : K.rojo, charSpacing: 2 }); }
function title(s, t, o = {}) { T(s, t, { x: o.x ?? X0, y: o.y ?? 0.66, w: o.w ?? FW, h: o.h ?? 1.35, fontSize: o.size ?? 40, bold: true, color: o.dark ? K.cr : K.cafe }); }
function src(s, t, o = {}) { T(s, 'Fuente: ' + t, { x: o.x ?? X0, y: o.y ?? 6.62, w: o.w ?? 11.7, h: o.h ?? 0.38, fontSize: 11, color: o.dark ? K.arena : K.cm, valign: 'bottom' }); }
function note(s, who, secs, txt) { s.addNotes('Presenta: ' + who + ' (unos ' + secs + ' segundos).\n' + txt); }
// caja de texto con forma (un solo objeto: sirve para animar con un clic)
function box(s, runs, o) {
  s.addText(nb(runs), Object.assign({
    shape: pres.shapes.ROUNDED_RECTANGLE, rectRadius: 0.12, fill: { color: K.bl }, line: { color: o.fill?.color ?? K.bl, width: 0 },
    margin: 12, valign: 'middle', color: K.tx, fontFace: 'Calibri',
  }, o));
}
async function pic(s, path, x, y, w, h, o = {}) { // imagen contenida en la caja, sin deformar
  const m = await sharp(path).metadata(); const r = m.width / m.height;
  let W = w, Hh = w / r; if (Hh > h) { Hh = h; W = h * r; }
  const ax = o.align === 'left' ? x : o.align === 'right' ? x + w - W : x + (w - W) / 2;
  const ay = o.valign === 'top' ? y : o.valign === 'bottom' ? y + h - Hh : y + (h - Hh) / 2;
  s.addImage({ path, x: ax, y: ay, w: W, h: Hh, rotate: o.rotate, objectName: o.name });
  return { x: ax, y: ay, w: W, h: Hh };
}
async function coverData(path, w, h) { // recorta la foto pendiente al tamaño del espacio (JPG de 1200 px máx., calidad 75)
  const pw = Math.min(1200, Math.round(w * 110)), ph = Math.round(pw * h / w);
  const b = await sharp(path).resize(pw, ph, { fit: 'cover', position: 'attention' }).jpeg({ quality: 75 }).toBuffer();
  return 'image/jpeg;base64,' + b.toString('base64');
}
async function slot(s, n, x, y, w, h, label, o = {}) {
  if (IMG[n]) { s.addImage({ data: await coverData(IMG[n], w, h), x, y, w, h, objectName: 'foto_' + n }); return true; }
  const dark = !!o.dark;
  s.addShape(o.square ? pres.shapes.RECTANGLE : pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.15, fill: { color: dark ? K.osc2 : K.suave }, line: { color: K.arena, width: 1.5, dashType: 'dash' }, objectName: 'IMAGEN_' + n });
  const lb = o.lb || { x, y, w, h }; const d = 0.7;
  s.addImage({ data: await icon('FaCamera', dark ? K.arena : K.cm), x: lb.x + lb.w / 2 - d / 2, y: lb.y + lb.h / 2 - 0.95, w: d, h: d });
  T(s, [
    { text: 'IMAGEN ' + n, options: { bold: true, fontSize: 20, breakLine: true } },
    { text: label, options: { fontSize: 14 } },
  ], { x: lb.x + 0.25, y: lb.y + lb.h / 2 - 0.1, w: lb.w - 0.5, h: 1.1, align: 'center', color: dark ? K.cr : K.cm });
  return false;
}
async function iconC(s, name, x, y, d, fill, ink) {
  s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fill }, line: { color: fill, width: 0 } });
  const p = d * 0.24; s.addImage({ data: await icon(name, ink), x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p });
}
const arrowR = (s, x, y, w, color) => s.addShape(pres.shapes.LINE, { x, y, w, h: 0, line: { color, width: 2.25, endArrowType: 'triangle' } });
async function divider(sec, num, ttl, sub, iconName, who, txt) {
  const s = slide('LIMPIO', sec);
  T(s, num, { x: 0.8, y: 0.75, w: 4, h: 1.9, fontSize: 120, bold: true, color: K.dor });
  T(s, ttl, { x: 0.8, y: 2.8, w: 7.7, h: 1.6, fontSize: 44, bold: true, color: K.cr, valign: 'bottom' });
  T(s, sub, { x: 0.8, y: 4.55, w: 7.7, h: 1.0, fontSize: 24, color: K.arena });
  s.addShape(pres.shapes.OVAL, { x: 8.85, y: 1.55, w: 4.0, h: 4.0, fill: { color: K.cm }, line: { color: K.cm, width: 0 } });
  s.addImage({ data: await icon(iconName, K.arena), x: 9.9, y: 2.6, w: 1.9, h: 1.9 });
  s.addImage({ path: 'img/logo_light.png', x: 0.8, y: 6.55, w: 1.45, h: 0.495 });
  note(s, who, 5, txt);
  return s;
}
// tabla simple para anexos
function table(s, header, rows, o) {
  const head = header.map(h => ({ text: nb(h), options: { bold: true, color: K.cr, fill: { color: K.cafe }, fontSize: o.headSize ?? o.fontSize } }));
  const body = rows.map((r, i) => r.map((c, j) => {
    const cell = typeof c === 'object' ? c : { text: c };
    return { text: nb(cell.text), options: Object.assign({ fontSize: o.fontSize, color: K.tx, fill: { color: i % 2 ? K.cr : K.bl } }, (o.colOpt && o.colOpt[j]) || {}, cell.options || {}) };
  }));
  s.addTable([head, ...body], { x: o.x ?? X0, y: o.y ?? 1.9, w: o.w ?? FW, colW: o.colW, rowH: o.rowH ?? 0.45, border: { type: 'solid', pt: 0.75, color: K.lin }, valign: 'middle', margin: 0.07, autoPage: false, fontFace: 'Calibri' });
}

(async () => {
  let s;

  // ======================= APERTURA =======================
  // 1 · Portada
  s = slide('LIMPIO', 'Apertura');
  s.addImage({ path: 'img/logo_light.png', x: 0.8, y: 0.85, w: 5.2, h: 1.775 });
  T(s, 'Hierro medido. Sabor a brownie.', { x: 0.8, y: 2.95, w: 7.6, h: 1.45, fontSize: 40, bold: true, color: K.cr });
  T(s, 'Mini brownie de 20 g con sangrecita y el hierro medido por lote.', { x: 0.8, y: 4.45, w: 7.4, h: 0.95, fontSize: 24, color: K.arena });
  T(s, 'SUSTENTACIÓN T2 · PROYECTO EXPOINNOVA', { x: 0.8, y: 5.6, w: 7.6, h: 0.32, fontSize: 14, bold: true, color: K.dor, charSpacing: 2 });
  T(s, 'Grupo 2 · Diana Ayoso · Carlos Inga · Angie Blas · Patricia Cárdenas · Adela Robles', { x: 0.8, y: 5.98, w: 7.8, h: 0.32, fontSize: 14, color: K.cr });
  T(s, 'Desarrollo y lanzamiento de nuevos productos · Prof. Paola Zevallos · Octubre de 2026', { x: 0.8, y: 6.34, w: 7.8, h: 0.3, fontSize: 12, color: K.arena });
  await pic(s, 'img/deck/empaque_frente.jpg', 8.75, 0.55, 4.2, 6.2, { rotate: 4 });
  note(s, 'Diana', 25, 'Buenos días, profesora Paola Zevallos y jurado. Somos el Grupo 2 y presentamos AndiBite, un mini brownie de 20 gramos con sangrecita de res y el hierro medido en cada lote. Vamos en el orden de la rúbrica: Canvas, transformación digital, investigación cualitativa y la primera etapa del plan de marketing. Cada uno de los cinco sustenta una parte.');

  // 2 · Gancho
  s = slide('OSCURO', 'Apertura');
  kicker(s, 'El problema', { dark: true, y: 0.6 });
  T(s, '24 %', { x: X0, y: 0.95, w: 6.6, h: 2.0, fontSize: 120, bold: true, color: K.dor });
  T(s, 'de los niños de 6 a 35 meses de Lima tiene anemia.', { x: X0, y: 3.0, w: 6.4, h: 1.1, fontSize: 28, color: K.cr });
  T(s, 'Y lo que tiene hierro vuelve intacto en la lonchera.', { x: X0, y: 4.45, w: 6.4, h: 1.2, fontSize: 30, bold: true, color: K.arena, objectName: 'anim_frase' });
  src(s, 'INEI, ENDES 2024, criterio OMS 2024, Lima Metropolitana (presentado ante la MCLCP, agosto de 2025). La lonchera que vuelve: 10 entrevistas a profundidad, semanas 1 a 4.', { dark: true, w: 6.5, h: 0.6, y: 6.4 });
  await slot(s, 1, 7.4, 0, SW - 7.4, SH, 'Manos armando la lonchera de la mañana (generada)', { dark: true, square: true });
  note(s, 'Diana', 30, 'Uno de cada cuatro niños de 6 a 35 meses de Lima tiene anemia, según la ENDES 2024. Nuestro público tiene hijos de 4 a 11 años, así que este dato muestra el contexto, no a nuestros clientes. [Clic] En las entrevistas apareció el problema que sí sienten los padres: lo que tiene hierro regresa intacto en la lonchera.');

  // 3 · De dónde venimos
  s = slide('CLARO', 'Apertura');
  kicker(s, 'De dónde venimos');
  title(s, 'Corregimos el rumbo con evidencia');
  s.addShape(pres.shapes.LINE, { x: 1.0, y: 3.2, w: 11.3, h: 0, line: { color: K.arena, width: 3 } });
  {
    const N = [
      ['SEMANAS 1 A 4', 'AndyBites', 'mamás de Lima Norte, NSE C/B', K.cm],
      ['FOCUS 1 Y DEGUSTACIÓN', 'Gana el brownie', 'el sabor convence; el precio, no', K.cm],
      ['T1 · OCTUBRE 2026', 'AndiBite', 'padres NSE A y B', K.rojo],
      ['HOY · T2', 'Plan de marketing', 'con el modelo v7', K.rojo],
    ];
    N.forEach((n, i) => {
      const cx = 1.9 + i * 3.1;
      T(s, n[0], { x: cx - 1.5, y: 2.35, w: 3.0, h: 0.5, fontSize: 14, bold: true, color: K.rojo, align: 'center', charSpacing: 1, valign: 'bottom' });
      const d = i === 3 ? 0.56 : 0.46;
      s.addShape(pres.shapes.OVAL, { x: cx - d / 2, y: 3.2 - d / 2, w: d, h: d, fill: { color: n[3] }, line: { color: K.cr, width: 3 } });
      T(s, [{ text: n[1], options: { bold: true, breakLine: true, color: K.cafe } }, { text: n[2], options: { color: K.tx } }],
        { x: cx - 1.5, y: 3.65, w: 3.0, h: 1.5, fontSize: 24, align: 'center', objectName: i ? 'anim_hito' + i : 'hito0' });
    });
  }
  T(s, 'El cambio de público no fue de gusto: lo pidió la evidencia.', { x: X0, y: 5.55, w: FW, h: 0.55, fontSize: 24, italic: true, color: K.cm, align: 'center' });
  src(s, '01-contexto (semanas 1 a 4 y focus 1); láminas de la degustación (Canva del grupo); T1, documento 07; HECHOS_v7.');
  note(s, 'Carlos', 40, 'Empezamos como AndyBites, con 10 entrevistas a mamás de Lima Norte. [Clic] En el focus 1 ganó el brownie, y en la degustación el sabor convenció, pero el precio que se podía cobrar no alcanzaba para el negocio. [Clic] Por eso en el T1 pasamos a AndiBite y a padres A y B. [Clic] Hoy presentamos el plan de marketing con las cifras del modelo v7. El proyecto se corrigió con evidencia, no por intuición.');

  // ======================= 1 · CANVAS =======================
  await divider('1 · Canvas', '01', 'Modelo de negocio Canvas', '9 bloques que se sostienen entre sí', 'FaThLarge', 'Diana', 'Primera parte: el modelo de negocio en el Canvas.');

  // 5 · Canvas
  s = slide('CLARO', '1 · Canvas');
  kicker(s, 'Business Model Canvas · 9 bloques');
  title(s, 'Nueve bloques, una sola promesa', { h: 0.75 });
  {
    const y0 = 1.5, gw = 0.1, cw = (FW - 4 * gw) / 5, th = 3.6, hh = (th - gw) / 2, by = y0 + th + gw, bh = 1.55;
    const cx = (i) => X0 + i * (cw + gw);
    const blk = (x, y, w, h, lab, txt, hot) => box(s, [
      { text: lab, options: { fontSize: 12, bold: true, color: hot ? K.dor : K.rojo, charSpacing: 1, breakLine: true } },
      ...(Array.isArray(txt) ? txt : [{ text: txt, options: { fontSize: 20, color: hot ? K.cr : K.tx } }]),
    ], { x, y, w, h, rectRadius: 0.08, valign: 'top', margin: 9, fill: { color: hot ? K.cafe : K.bl }, paraSpaceAfter: 4 });
    blk(cx(0), y0, cw, th, '8 · SOCIOS CLAVE', 'Maquila, laboratorio, proveedor de sangrecita y malls');
    blk(cx(1), y0, cw, hh, '7 · ACTIVIDADES', 'Medir y publicar el hierro; vender en stand');
    blk(cx(1), y0 + hh + gw, cw, hh, '6 · RECURSOS', 'Receta que esconde la sangrecita; app y marca');
    blk(cx(2), y0, cw, th, '2 · PROPUESTA DE VALOR', [
      { text: 'Hierro medido. Sabor a brownie.', options: { fontSize: 26, bold: true, color: K.cr, breakLine: true, paraSpaceAfter: 10 } },
      { text: 'El snack de lonchera que tu hijo sí se come', options: { fontSize: 20, color: K.arena } },
    ], true);
    blk(cx(3), y0, cw, hh, '4 · RELACIÓN', 'Degustación cara a cara; aviso de recompra');
    blk(cx(3), y0 + hh + gw, cw, hh, '3 · CANALES', 'Stands 43 %, WhatsApp 18 %, colegios 17.5 %');
    blk(cx(4), y0, cw, th, '1 · SEGMENTOS', 'Padres A y B que leen etiquetas: 46,000 hogares núcleo');
    blk(X0, by, (FW - gw) / 2, bh, '9 · ESTRUCTURA DE COSTOS', 'S/1.64 por brownie, sin planta propia · marketing S/24,544 en 15 meses');
    blk(X0 + (FW + gw) / 2, by, (FW - gw) / 2, bh, '5 · FUENTES DE INGRESO', 'Pack de 6: S/27.90 en stand y S/26.90 por WhatsApp · año 1: S/244,728');
  }
  src(s, 'T2_01 (Canvas del T1 con cifras del modelo v7) y HECHOS_v7. Ventas con IGV.', { y: 6.72, h: 0.3 });
  note(s, 'Diana', 50, 'Este es el Canvas completo. Al centro, la propuesta: hierro medido con sabor a brownie. A la derecha, para quién y cómo llegamos: padres A y B que leen etiquetas, stands donde el niño prueba y WhatsApp para volver. A la izquierda, cómo lo hacemos sin planta propia: maquila, laboratorio y proveedor de sangrecita. Abajo, los números: S/1.64 de costo por brownie y S/244,728 de ventas en el año 1.');

  // 6 · Coherencia
  s = slide('OSCURO', '1 · Canvas');
  kicker(s, 'Coherencia del Canvas', { dark: true });
  title(s, 'La cadena cierra: del cliente al costo', { dark: true, h: 0.75 });
  {
    const N = [
      ['CLIENTE', '46,000', 'hogares A/B núcleo'],
      ['PROPUESTA', 'Medido', 'hierro por lote, visible en la app'],
      ['CANAL', '43 %', 'en stands, donde el niño prueba'],
      ['INGRESO', 'S/4.48', 'por brownie; 35 % vuelve por WhatsApp'],
      ['COSTO', '58 a 66 %', 'de margen bruto en el stand'],
    ];
    const w = 2.2, g = 0.2825;
    N.forEach((n, i) => {
      const x = X0 + i * (w + g);
      s.addShape(pres.shapes.RECTANGLE, { x, y: 1.95, w, h: 0.06, fill: { color: K.dor }, line: { color: K.dor, width: 0 } });
      T(s, n[0], { x, y: 2.15, w, h: 0.32, fontSize: 14, bold: true, color: K.dor, charSpacing: 1 });
      T(s, n[1], { x, y: 2.5, w: w + 0.1, h: 0.85, fontSize: i === 4 ? 36 : 40, bold: true, color: K.cr });
      T(s, n[2], { x, y: 3.45, w, h: 1.7, fontSize: 24, color: K.arena });
      if (i < 4) s.addShape(pres.shapes.CHEVRON, { x: x + w + 0.05, y: 1.84, w: 0.18, h: 0.28, fill: { color: K.dor }, line: { color: K.dor, width: 0 } });
    });
  }
  box(s, 'Todo con S/24,544 de marketing en 15 meses: S/0.44 por brownie.', { x: X0, y: 5.45, w: FW, h: 0.8, fill: { color: K.cm }, color: K.cr, fontSize: 24, bold: true, align: 'center', rectRadius: 0.4 });
  src(s, 'HECHOS_v7 y Excel v7: S/4.48 = pack de 6 por WhatsApp (S/26.90 ÷ 6); costo S/1.64 por brownie; margen bruto en stand; T2_17 (presupuesto de marketing, oct-2026 a dic-2027).', { dark: true });
  note(s, 'Diana', 40, 'Los bloques encajan. El cliente A y B lee etiquetas, por eso la propuesta es el hierro medido. El canal es el stand, porque sin la prueba del niño no hay compra. El ingreso sale de S/4.48 por brownie y de que el 35 % vuelva por WhatsApp. Y el costo lo permite: 58 a 66 % de margen bruto en el stand, con un marketing de S/0.44 por brownie.');

  // 7 · Propuesta de valor
  s = slide('CLARO', '1 · Canvas');
  kicker(s, 'Propuesta de valor', { y: 0.6 });
  T(s, '“Él ve un brownie. Tú ves el hierro medido de su lote.”', { x: X0, y: 0.95, w: 7.2, h: 2.2, fontSize: 40, bold: true, color: K.cafe });
  {
    const D = [['FaFlask', 'Hierro medido por lote y publicado en la app'], ['FaCookieBite', 'Un formato que el niño ya pide'], ['FaStore', 'Se prueba en el stand antes de comprar']];
    for (let i = 0; i < D.length; i++) {
      const y = 3.45 + i * 1.0;
      await iconC(s, D[i][0], X0, y, 0.75, K.rojo, K.cr);
      T(s, D[i][1], { x: 1.6, y, w: 6.2, h: 0.75, fontSize: 24, color: K.tx, valign: 'middle' });
    }
  }
  src(s, 'T2_10 (diferenciación) y documento 10 (mensaje al padre A). El hierro por brownie (unos 1.9 mg) está [POR CONFIRMAR en laboratorio].', { w: 7.2, h: 0.5 });
  await slot(s, 2, 8.2, 0, SW - 8.2, SH, 'Lonchera kraft con el mini brownie (foto real o generada)', { square: true });
  note(s, 'Diana', 35, 'La propuesta cabe en una línea: él ve un brownie y tú ves el hierro medido de su lote. Nos diferencian tres cosas: medimos y publicamos el hierro de cada lote, usamos un formato que el niño ya pide y se prueba antes de comprar. Ojo: el valor de 1.9 mg es un cálculo y lo confirmará el laboratorio.');

  // ======================= 2 · DIGITAL =======================
  await divider('2 · Digital', '02', 'Transformación digital', 'La app hace visible lo que medimos', 'FaMobileAlt', 'Carlos', 'Segunda parte: cómo la tecnología mejora y diferencia el producto.');

  // 9 · Medido, no prometido
  s = slide('OSCURO', '2 · Digital');
  kicker(s, 'Innovación', { dark: true });
  T(s, 'Medido, no prometido', { x: X0, y: 0.66, w: 8.4, h: 0.85, fontSize: 44, bold: true, color: K.cr });
  T(s, 'El QR de cada envase abre el análisis de su lote.', { x: X0, y: 1.55, w: 8.4, h: 0.55, fontSize: 26, color: K.arena });
  {
    const S3 = [['FaQrcode', 'QR único en cada envase'], ['FaFlask', 'Análisis de laboratorio'], ['FaMobileAlt', 'Resultado en la app']];
    for (let i = 0; i < 3; i++) {
      const cx = 1.6 + i * 2.95;
      await iconC(s, S3[i][0], cx - 0.7, 2.75, 1.4, K.cm, K.arena);
      T(s, S3[i][1], { x: cx - 1.3, y: 4.3, w: 2.6, h: 0.9, fontSize: 24, bold: true, color: K.cr, align: 'center' });
      if (i < 2) arrowR(s, cx + 0.85, 3.45, 1.25, K.dor);
    }
  }
  T(s, 'Cada lote de enero a junio; cada 2 meses desde julio.', { x: X0, y: 5.5, w: 8.4, h: 0.5, fontSize: 24, color: K.arena });
  await pic(s, 'img/deck/app_15-inicio_oscuro.jpg', 9.3, 0.45, 3.4, 6.45);
  src(s, 'HECHOS_v7 (frecuencia del análisis; S/0.04 por código impreso); T2_10; prototipo app-andi-mision-hierro/ (pantalla de inicio, datos DEMO).', { dark: true, w: 8.4, h: 0.5 });
  note(s, 'Carlos', 35, 'Nuestro territorio es "Medido, no prometido". Cada envase trae un QR único. El laboratorio analiza el lote y el resultado aparece en la app: cada lote de enero a junio y cada 2 meses desde julio. El padre no tiene que creernos: lo ve.');

  // 10 · App: 4 pantallas
  s = slide('CLARO', '2 · Digital');
  kicker(s, 'Prototipo funcional · app Andi, Misión Hierro');
  title(s, 'La app ya funciona: cuatro pantallas reales', { h: 0.75 });
  {
    const P = [['app_05-lote', 'Hierro del lote'], ['app_08-semaforo', 'Semáforo semanal'], ['app_10-loncheras-plan', 'Loncheras con IA'], ['app_21-ninos-mapa', 'Misión Hierro']];
    const cw = FW / 4;
    for (let i = 0; i < 4; i++) {
      const x = X0 + i * cw;
      await pic(s, 'img/deck/' + P[i][0] + '.jpg', x, 1.5, cw, 4.45);
      T(s, P[i][1], { x, y: 6.0, w: cw, h: 0.5, fontSize: 24, bold: true, color: K.cafe, align: 'center' });
    }
  }
  src(s, 'Capturas del prototipo app-andi-mision-hierro/ con lotes DEMO: el 1.9 mg de la pantalla es un cálculo [POR CONFIRMAR en laboratorio]. Modo niños sin compras ni publicidad (Ley 30021, art. 8); datos solo en el teléfono (Ley 29733).', { y: 6.55, h: 0.45 });
  note(s, 'Carlos', 45, 'Esto no es una maqueta: es el prototipo que funciona. Primera pantalla: el hierro del lote. Segunda: el semáforo de hierro de la semana. Tercera: el plan de loncheras con IA de Gemini. Cuarta: Misión Hierro, el modo niños con 4 juegos, que abre el padre con candado y no tiene compras ni publicidad, por la Ley 30021. Si hay tiempo, lo mostramos en vivo desde un celular.');

  // 11 · Valor que genera
  s = slide('CLARO', '2 · Digital');
  kicker(s, 'Valor que genera la tecnología');
  title(s, 'La tecnología crea valor en tres frentes', { h: 0.75 });
  {
    const R = [
      ['AL PADRE', 'Ve el hierro de su lote y recompra en 1 clic', K.bl, K.rojo, K.cafe],
      ['AL NEGOCIO', '35 % de recompra · datos de cada escaneo · S/0.04 por código', K.cafe, K.dor, K.cr],
      ['FRENTE A LA COMPETENCIA', 'Ningún competidor revisado publica su análisis por lote', K.bl, K.rojo, K.cafe],
    ];
    R.forEach((r, i) => box(s, [
      { text: r[0], options: { fontSize: 14, bold: true, color: r[3], charSpacing: 2, breakLine: true } },
      { text: r[1], options: { fontSize: 30, bold: true, color: r[4] } },
    ], { x: X0, y: 1.65 + i * 1.6, w: FW, h: 1.4, fill: { color: r[2] }, margin: 18, objectName: 'anim_valor' + (i + 1) }));
  }
  src(s, 'HECHOS_v7 (recompra = 35 % de lo vendido en físico; S/0.04 por código); T2_10, matriz de 7 competidores (tiendas oficiales, 19-oct-2026); T2_14.');
  note(s, 'Carlos', 40, '[Clic] Al padre le da confianza, porque ve el dato, y le ahorra tiempo: la app avisa cuando se acaba el pack y pide por WhatsApp en un clic. [Clic] Al negocio le da la recompra, que es el 35 % de lo vendido en físico, y datos de cada escaneo, por solo S/0.04 por código. [Clic] Y nos diferencia: de los 7 competidores que revisamos, ninguno publica su análisis por lote.');

  // 12 · Ecosistema
  s = slide('OSCURO', '2 · Digital');
  kicker(s, 'Ecosistema digital', { dark: true });
  title(s, 'Todo lleva al stand y al WhatsApp', { dark: true, h: 0.75 });
  {
    const N = [['FaBullhorn', 'Meta Ads', 'VIDEO PARA ADULTOS'], ['FaWhatsapp', 'WhatsApp', 'PRIMER CONTACTO'], ['FaStore', 'Stand', 'PRUEBA Y COMPRA'], ['FaQrcode', 'QR del envase', 'ABRE SU LOTE'], ['FaMobileAlt', 'App Andi', 'AVISA LA RECOMPRA']];
    const d = 1.15;
    for (let i = 0; i < N.length; i++) {
      const cx = 1.6 + i * 2.53;
      await iconC(s, N[i][0], cx - d / 2, 1.85, d, i === 2 ? K.rojo : K.cm, i === 2 ? K.cr : K.arena);
      T(s, N[i][1], { x: cx - 1.2, y: 3.08, w: 2.4, h: 0.48, fontSize: 24, bold: true, color: K.cr, align: 'center' });
      T(s, N[i][2], { x: cx - 1.2, y: 3.55, w: 2.4, h: 0.32, fontSize: 13, bold: true, color: K.dor, align: 'center', charSpacing: 1 });
      if (i < 4) arrowR(s, cx + d / 2 + 0.12, 2.425, 2.53 - d - 0.24, K.dor);
    }
    const xa = 1.6 + 2.53, xb = 1.6 + 4 * 2.53, yb = 4.45;
    s.addShape(pres.shapes.LINE, { x: xb, y: 4.0, w: 0, h: yb - 4.0, line: { color: K.dor, width: 2.25 } });
    s.addShape(pres.shapes.LINE, { x: xa, y: yb, w: xb - xa, h: 0, line: { color: K.dor, width: 2.25 } });
    s.addShape(pres.shapes.LINE, { x: xa, y: 4.0, w: 0, h: yb - 4.0, line: { color: K.dor, width: 2.25, beginArrowType: 'triangle' } });
    T(s, 'Recompra en 1 clic: 35 % de lo vendido en físico', { x: xa, y: 4.55, w: xb - xa, h: 0.45, fontSize: 24, bold: true, color: K.dor, align: 'center' });
  }
  T(s, '30 %', { x: X0, y: 5.05, w: 3.0, h: 1.35, fontSize: 80, bold: true, color: K.cr });
  T(s, 'de los envases escaneados: meta de 2027', { x: 3.15, y: 5.4, w: 6.5, h: 0.8, fontSize: 24, color: K.arena, valign: 'middle' });
  src(s, 'T2_14, secciones 1 y 2 (mapa y recorrido del cliente); HECHOS_v7 (meta de escaneo y recompra). Pauta en Meta: S/5,050 en 2027, 50/50 entre A y B.', { dark: true });
  note(s, 'Carlos', 40, 'El ecosistema tiene una regla: todo lleva al stand para la primera compra y al WhatsApp para la recompra. El anuncio en Meta lleva al WhatsApp; de ahí, al stand, donde el niño prueba y el padre compra. El QR abre el lote en la app, y la app avisa cuando se acaba el pack: así vuelve el 35 %. La meta es que se escanee el 30 % de los envases en 2027.');

  // ======================= 3 · INVESTIGACIÓN =======================
  await divider('3 · Investigación', '03', 'Investigación cualitativa', 'Lo que escuchamos y probamos con las familias', 'FaComments', 'Angie', 'Tercera parte: la investigación cualitativa del prototipo.');

  // 14 · Qué hicimos
  s = slide('CLARO', '3 · Investigación');
  kicker(s, 'Evidencia del trabajo de campo');
  title(s, 'Escuchamos y probamos antes de decidir', { h: 0.75 });
  {
    const N = [['10', 'entrevistas a profundidad'], ['6', 'participantes en el focus 1'], ['4', 'madres probaron el prototipo'], ['1', 'store check en La Molina']];
    N.forEach((n, i) => {
      const x = X0 + (i % 2) * 2.85, y = 1.6 + Math.floor(i / 2) * 2.5;
      T(s, n[0], { x, y, w: 2.7, h: 1.25, fontSize: 80, bold: true, color: K.rojo });
      T(s, n[1], { x, y: y + 1.25, w: 2.7, h: 1.05, fontSize: 24, color: K.tx });
    });
    // Sin captura del focus 1: las dos entrevistas van apiladas, con su pie al lado.
    await pic(s, 'img/deck/entrevista_1.jpg', 6.4, 1.6, 3.75, 2.3, { align: 'left', valign: 'top' });
    T(s, [{ text: 'Entrevista en casa', options: { bold: true, breakLine: true } }, { text: 'de la familia, con la mamá y la hija presentes', options: {} }], { x: 10.35, y: 1.6, w: 2.4, h: 2.3, fontSize: 16, color: K.cm, valign: 'middle' });
    await pic(s, 'img/deck/entrevista_2.jpg', 6.4, 4.05, 3.75, 2.3, { align: 'left', valign: 'top' });
    T(s, [{ text: 'Entrevista en oficina', options: { bold: true, breakLine: true } }, { text: '10 entrevistas en las semanas 1 a 4; videos en YouTube y en el Drive', options: {} }], { x: 10.35, y: 4.05, w: 2.4, h: 2.3, fontSize: 16, color: K.cm, valign: 'middle' });
  }
  src(s, '01-contexto/03 y 04 (entrevistas y focus 1 virtual con mamás de Lima Norte, NSE C/B); láminas de la degustación (Canva del grupo); 03-entregables/07 (store check). Videos de 2 entrevistas en YouTube y en el Drive [enlace POR CONFIRMAR].', { y: 6.55, h: 0.45 });
  note(s, 'Angie', 35, 'Hicimos cuatro cosas: 10 entrevistas a profundidad, un focus group virtual con 6 participantes, una degustación del prototipo con 4 madres y un store check en La Molina con precios en línea. Aquí están las capturas de dos entrevistas; los videos están en YouTube y en el Drive.');

  // 15 · Citas
  s = slide('OSCURO', '3 · Investigación');
  kicker(s, 'Lo que nos dijeron', { dark: true });
  title(s, 'Las mamás ya buscan cómo esconder el hierro', { dark: true, h: 0.75 });
  T(s, '“', { x: 0.35, y: 1.25, w: 1.4, h: 1.9, fontSize: 160, bold: true, color: K.dor });
  {
    const Q = [
      ['“Mamá, eso olía feo y mis amigos me dijeron que parecía carbón.”', 'Mateo, 7 años, sobre unos nuggets de sangrecita (lo cuenta Lucero, su mamá; entrevista)'],
      ['“Deberían haber más productos así.”', 'Adriana, focus 1, sobre una barrita de sangrecita que su hijo aceptó'],
      ['Eligió el brownie para “engañar” a su hija con algo que le gusta.', 'Rubelis, focus 1, al explicar su voto'],
    ];
    Q.forEach((q, i) => T(s, [
      { text: q[0], options: { fontSize: 28, italic: true, bold: true, color: K.cr, breakLine: true } },
      { text: q[1], options: { fontSize: 14, color: K.arena } },
    ], { x: 1.6, y: 1.75 + i * 1.6, w: 11.1, h: 1.45, valign: 'middle', objectName: 'anim_cita' + (i + 1), paraSpaceBefore: 0, paraSpaceAfter: 4 }));
  }
  src(s, '01-contexto/03 (entrevista a Lucero Carrera, Los Olivos) y 04 (focus 1, transcripción focus.docx).', { dark: true });
  note(s, 'Angie', 40, 'Tres frases reales. [Clic] Mateo le dijo a su mamá que los nuggets de sangrecita olían feo y parecían carbón: el rechazo es sensorial y también social. [Clic] Adriana, en el focus, pidió más productos como la barrita de sangrecita que su hijo sí aceptó. [Clic] Y Rubelis eligió el brownie para "engañar" a su hija con algo que le gusta. Ojo: esa palabra es de ella; la marca nunca dice "engañar".');

  // 16 · Hallazgo 1 (foto a sangre completa)
  s = slide('FOTO', '3 · Investigación');
  {
    const hay = await slot(s, 4, 0, 0, SW, SH, 'Lonchera que vuelve intacta (generada, a sangre completa)', { dark: true, square: true, lb: { x: 7.9, y: 0, w: 5.4, h: SH } });
    if (hay) s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 7.8, h: SH, fill: { color: K.cafe, transparency: 25 }, line: { color: K.cafe, width: 0 } });
  }
  kicker(s, 'Hallazgo 1', { dark: true, y: 1.55 });
  T(s, 'Lo saludable vuelve intacto', { x: X0, y: 1.95, w: 7.0, h: 1.65, fontSize: 44, bold: true, color: K.cr });
  T(s, 'La barrera no es saber: es el olor, el color y la textura.', { x: X0, y: 3.75, w: 6.8, h: 1.3, fontSize: 26, color: K.cr });
  src(s, '10 entrevistas a profundidad (semanas 1 a 4): nuggets de sangrecita, puré de espinaca con sangrecita y galletas «sin azúcar» que «parecían cartón». Nadie dijo «anemia».', { dark: true, w: 7.0, h: 0.6, y: 6.3 });
  note(s, 'Angie', 30, 'Primer hallazgo: lo saludable vuelve intacto. Las mamás saben que la sangrecita y el hígado tienen hierro; el problema es el olor, el color y la textura. Y algo importante para la comunicación: nadie usó la palabra "anemia". Hablan de hierro y de energía.');

  // 17 · Hallazgo 2
  s = slide('CLARO', '3 · Investigación');
  kicker(s, 'Hallazgo 2');
  title(s, 'La sangrecita se acepta escondida en algo dulce', { h: 0.75 });
  {
    const pw = (FW - 0.24) / 2;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: X0, y: 1.75, w: pw, h: 4.7, rectRadius: 0.15, fill: { color: 'EEDFCC' }, line: { color: 'EEDFCC', width: 0 } });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: X0 + pw + 0.24, y: 1.75, w: pw, h: 4.7, rectRadius: 0.15, fill: { color: K.cafe }, line: { color: K.cafe, width: 0 } });
    await iconC(s, 'FaTimes', X0 + 0.4, 2.1, 0.95, K.rojo, K.cr);
    T(s, 'Visible: no', { x: X0 + 1.55, y: 2.1, w: pw - 1.8, h: 0.95, fontSize: 36, bold: true, color: K.cafe, valign: 'middle' });
    T(s, 'Nuggets y puré con sangrecita terminaron en la basura.', { x: X0 + 0.4, y: 3.35, w: pw - 0.8, h: 1.25, fontSize: 24, color: K.tx });
    T(s, '“Era un ingrediente recomendado, pero no le gustó.” Rubi', { x: X0 + 0.4, y: 4.75, w: pw - 0.8, h: 1.3, fontSize: 24, italic: true, color: K.cm });
    const x2 = X0 + pw + 0.24;
    await iconC(s, 'FaCheck', x2 + 0.4, 2.1, 0.95, K.oli, K.cr);
    T(s, 'Escondida: sí', { x: x2 + 1.55, y: 2.1, w: pw - 1.8, h: 0.95, fontSize: 36, bold: true, color: K.cr, valign: 'middle' });
    T(s, 'Una barrita de sangrecita «le gustó a la primera» al hijo de Adriana.', { x: x2 + 0.4, y: 3.35, w: pw - 0.8, h: 1.25, fontSize: 24, color: K.cr });
    T(s, '“Para ella eso es chocolate.” Lourdes', { x: x2 + 0.4, y: 4.75, w: pw - 0.8, h: 1.3, fontSize: 24, italic: true, color: K.arena });
  }
  src(s, '01-contexto/03 (entrevistas a Rubi Arcos y Lourdes) y 04 (focus 1: Adriana, resumen de la transcripción).');
  note(s, 'Angie', 35, 'Segundo hallazgo: cuando la sangrecita se ve, el niño la rechaza; cuando va escondida en algo dulce, la acepta. La barrita de sangrecita le gustó al hijo de Adriana a la primera, y Lourdes nos dijo que, para su hija, una barrita saludable "es chocolate". Por eso el brownie de cacao es el formato correcto.');

  // 18 · Hallazgo 3: degustación
  s = slide('CLARO', '3 · Investigación');
  kicker(s, 'Hallazgo 3 · degustación del prototipo');
  title(s, 'Degustación con 4 madres: no se nota la sangrecita', { h: 0.75 });
  {
    const w = 2.7, h = 3.6, g = 0.25, x0 = X0 + (FW - (4 * w + 3 * g)) / 2;
    for (let i = 0; i < 4; i++) await pic(s, 'img/deck/degustacion_' + (i + 1) + '.jpg', x0 + i * (w + g), 1.65, w, h, { valign: 'top' });
  }
  T(s, 'Sabe a postre de chocolate, sin olor ni sabor a sangrecita.', { x: X0, y: 5.5, w: FW, h: 0.6, fontSize: 28, bold: true, color: K.cafe, align: 'center' });
  src(s, 'Lámina «Desarrollo de la moderación» (Canva del grupo): «no se percibe el sabor ni el olor a la sangrecita». Fotos: las 4 madres con el empaque impreso (bolsa kraft).', { y: 6.5, h: 0.5 });
  note(s, 'Patricia', 35, 'Tercer hallazgo, ya con el prototipo real y el empaque impreso: las 4 madres probaron los mini brownies y destacaron que no se percibe ni el sabor ni el olor de la sangrecita; se siente como un postre de chocolate. Aquí están las 4 madres con la bolsa kraft.');

  // 19 · Hallazgo 4: precio (hipótesis en validación; el S/10 de la degustación solo va en las notas)
  s = slide('OSCURO', '3 · Investigación');
  kicker(s, 'Hallazgo 4 · precio', { dark: true });
  title(s, 'El sabor pasó la prueba; el precio se valida en A y B', { dark: true });
  T(s, 'S/26 a 28', { x: X0, y: 2.05, w: 7.2, h: 1.5, fontSize: 96, bold: true, color: K.dor });
  T(s, 'precio objetivo del pack de 6 en A y B', { x: X0, y: 3.55, w: 7.4, h: 0.95, fontSize: 28, color: K.cr });
  box(s, 'HIPÓTESIS EN VALIDACIÓN', { x: 8.3, y: 2.25, w: 4.43, h: 0.6, fill: { color: K.dor }, color: K.cafe, fontSize: 16, bold: true, align: 'center', charSpacing: 2, rectRadius: 0.3, margin: 4 });
  T(s, [{ text: 'Encuesta a 30 padres', options: { bold: true, breakLine: true, color: K.cr } }, { text: 'método Van Westendorp, después de probar', options: { color: K.arena } }], { x: 8.3, y: 3.05, w: 4.43, h: 1.4, fontSize: 24 });
  box(s, 'Meta: que la mediana de «caro, pero lo compraría» llegue a S/4.48 por brownie.', { x: X0, y: 4.9, w: FW, h: 1.05, fill: { color: K.cm }, color: K.cr, fontSize: 24, bold: true, align: 'center', objectName: 'anim_meta' });
  src(s, 'Precios del plan con IGV: pack de 6 a S/26.90 por WhatsApp y S/27.90 en el stand (HECHOS_v7). Encuesta y métrica: documento 07, sección 2.7 [POR CONFIRMAR: aún no se aplica]. Nada de esto está validado todavía.', { dark: true, y: 6.4, h: 0.6 });
  note(s, 'Patricia', 40, 'En la degustación el sabor pasó la prueba. El precio es otra historia: el precio objetivo para padres A y B es de S/26 a S/28 por el pack de 6, y es una hipótesis que estamos validando. [Clic] Lo mediremos con una encuesta a 30 padres, con el método Van Westendorp y después de que prueben: la meta es una mediana de S/4.48 por brownie o más.\nSi preguntan: en la degustación las madres dijeron S/10 por la bolsa de 6; ese precio no cubre el costo de S/1.64 por brownie y es una de las razones del cambio al segmento A/B, donde el precio se valida con la encuesta.');

  // 20 · Valorado y por mejorar
  s = slide('CLARO', '3 · Investigación');
  kicker(s, 'Características');
  title(s, 'Lo que más valoraron y lo que debemos mejorar', { h: 0.75 });
  {
    const cw = (FW - 0.4) / 2, x2 = X0 + cw + 0.4;
    s.addShape(pres.shapes.RECTANGLE, { x: X0, y: 1.8, w: cw, h: 0.08, fill: { color: K.oli }, line: { color: K.oli, width: 0 } });
    s.addShape(pres.shapes.RECTANGLE, { x: x2, y: 1.8, w: cw, h: 0.08, fill: { color: K.rojo }, line: { color: K.rojo, width: 0 } });
    const col = (x, head, hc, items, mark, name) => T(s, [
      { text: head, options: { fontSize: 16, bold: true, color: hc, charSpacing: 2, breakLine: true, paraSpaceAfter: 10 } },
      ...items.map((t, i) => ({ text: t, options: { fontSize: 28, color: K.tx, bullet: { code: mark, indent: 28 }, breakLine: i < items.length - 1, paraSpaceAfter: 22 } })),
    ], { x, y: 2.05, w: cw, h: 4.2, objectName: name });
    col(X0, 'LO MÁS VALORADO', K.oli, ['Que el niño lo pida', 'No se nota la sangrecita', 'Sabor a chocolate', 'Porción lista para la mochila'], '2713', 'anim_valorado');
    col(x2, 'POR MEJORAR', K.rojo, ['Validar el precio en A y B', 'Probarlo con niños, no solo adultos', 'Medir el hierro en laboratorio', 'Hablar de hierro, no de anemia'], '2192', 'anim_mejorar');
  }
  src(s, 'Entrevistas y focus 1 (01-contexto/03 y 04); degustación (láminas del Canva del grupo); T1, sección 2.6; HECHOS_v7 («sin la prueba del niño no hay compra»).');
  note(s, 'Patricia', 35, '[Clic] Lo más valorado: que el niño lo pida, que no se note la sangrecita, el sabor a chocolate y una porción lista para la mochila. [Clic] Lo que debemos mejorar: validar el precio en el segmento A y B; probarlo con niños y no solo con adultos; medir el hierro en laboratorio; y hablar de hierro, no de anemia, porque nadie usa esa palabra.');

  // 21 · Aceptación inicial
  s = slide('CLARO', '3 · Investigación');
  kicker(s, 'Aceptación inicial');
  title(s, 'El brownie empató y lo elegimos por viabilidad', { h: 0.75 });
  T(s, '2 de 5', { x: X0, y: 1.95, w: 4.8, h: 1.35, fontSize: 88, bold: true, color: K.rojo });
  T(s, 'votos: empate con la trufa', { x: X0, y: 3.25, w: 5.2, h: 0.5, fontSize: 24, color: K.tx });
  {
    const B = [['Brownie', 2, K.rojo], ['Trufa', 2, K.cm], ['Wafer', 1, K.arena]];
    B.forEach((b, i) => {
      const y = 3.95 + i * 0.55;
      T(s, b[0], { x: X0, y, w: 1.4, h: 0.45, fontSize: 20, bold: true, color: K.cafe, valign: 'middle' });
      s.addShape(pres.shapes.RECTANGLE, { x: 2.05, y: y + 0.07, w: b[1] * 1.3, h: 0.32, fill: { color: b[2] }, line: { color: b[2], width: 0 } });
      T(s, String(b[1]), { x: 2.15 + b[1] * 1.3, y, w: 0.5, h: 0.45, fontSize: 20, bold: true, color: K.cafe, valign: 'middle' });
    });
  }
  T(s, 'POR QUÉ EL BROWNIE', { x: 6.4, y: 2.0, w: 6.3, h: 0.35, fontSize: 16, bold: true, color: K.rojo, charSpacing: 2 });
  ['Se hace con horno, moldes y balanza', 'El chocolate esconde la sangrecita', 'Su precio cabía en lo declarado'].forEach((t, i) => box(s, [
    { text: String(i + 1) + '   ', options: { fontSize: 26, bold: true, color: K.rojo } }, { text: t, options: { fontSize: 24, color: K.tx } },
  ], { x: 6.4, y: 2.45 + i * 0.98, w: 6.33, h: 0.82, objectName: 'anim_razon' + (i + 1), margin: 14 }));
  box(s, 'Sigue: degustación completa, prueba con 20 niños y encuesta a 30 padres.', { x: X0, y: 5.75, w: FW, h: 0.72, fill: { color: K.cafe }, color: K.cr, fontSize: 24, bold: true, align: 'center', rectRadius: 0.36 });
  src(s, '01-contexto/04 (focus 1 virtual, sin degustación: 6 participantes, votaron 5) y 01 (por qué ganó el brownie; S/2.50 a 5 por porción en las entrevistas); T1, sección 2.6 (meta: 75 % en caritas 4 y 5).', { y: 6.55, h: 0.45 });
  note(s, 'Patricia', 40, 'La aceptación inicial, con honestidad: en el focus 1 el brownie sacó 2 de 5 votos, empatado con la trufa. [Clic] Lo elegimos porque se puede replicar con horno, moldes y balanza; [clic] porque el chocolate esconde la sangrecita; [clic] y porque su precio cabía en lo que declararon en las entrevistas. Lo que sigue: completar la degustación, la prueba con 20 niños por sabor y la encuesta a 30 padres para validar el precio.');

  // ======================= 4 · MARKETING =======================
  await divider('4 · Marketing', '04', 'Plan de marketing: etapa 1', 'Mercado, propuesta, posicionamiento y tamaño', 'FaBullseye', 'Carlos', 'Cuarta parte: la primera etapa del plan de marketing.');

  // 23 · Mercado objetivo
  s = slide('CLARO', '4 · Marketing');
  kicker(s, 'Mercado objetivo · A y B con esfuerzo parejo');
  title(s, 'Le hablamos a dos padres: Claudia y Rodrigo', { h: 0.75 });
  {
    const F = [
      ['C', 'Claudia Mendoza', 'Segmento A · la Guardiana del Hierro', [['EDAD Y DISTRITO', '38 años · San Borja (Lima Top)'], ['OCUPACIÓN', 'Abogada · 2 hijos de 7 y 4'], ['HOGAR', 'S/13,500 al mes'], ['COMPRA EN', 'Wong, Flora & Fauna e Instagram'], ['PAGARÍA', 'S/24 a 30 por el pack de 6']], '“Todo lo que le hace bien, mi hijo lo escupe.”'],
      ['R', 'Rodrigo Salazar', 'Segmento B · el Resolutivo', [['EDAD Y DISTRITO', '40 años · San Miguel (Lima Moderna)'], ['OCUPACIÓN', 'Jefe de logística · 2 hijos de 9 y 6'], ['HOGAR', 'Unos S/8,500 al mes'], ['COMPRA EN', 'Plaza Vea, apps y WhatsApp'], ['PAGARÍA', 'S/18 a 24 por 6; mira el precio por brownie']], '“No me vendas salud, véndeme una mañana menos.”'],
    ];
    const w = (FW - 0.3) / 2, y = 1.6, h = 4.95;
    F.forEach((f, k) => {
      const x = X0 + k * (w + 0.3);
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.15, fill: { color: K.kraft }, line: { color: K.kraft, width: 0 } });
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 1.1, rectRadius: 0.15, fill: { color: K.vino }, line: { color: K.vino, width: 0 } });
      s.addShape(pres.shapes.RECTANGLE, { x, y: y + 0.6, w, h: 0.5, fill: { color: K.vino }, line: { color: K.vino, width: 0 } });
      s.addShape(pres.shapes.OVAL, { x: x + 0.25, y: y + 0.2, w: 0.72, h: 0.72, fill: { color: K.cr }, line: { color: K.cr, width: 0 } });
      T(s, f[0], { x: x + 0.25, y: y + 0.2, w: 0.72, h: 0.72, fontSize: 28, bold: true, color: K.vino, align: 'center', valign: 'middle' });
      T(s, [{ text: f[1], options: { fontSize: 26, bold: true, color: K.cr, breakLine: true } }, { text: f[2], options: { fontSize: 15, italic: true, color: K.dor } }], { x: x + 1.15, y: y + 0.13, w: w - 1.3, h: 0.9, valign: 'middle' });
      f[3].forEach((r, i) => {
        const ry = y + 1.25 + i * 0.56;
        T(s, r[0], { x: x + 0.3, y: ry, w: 1.75, h: 0.5, fontSize: 12, bold: true, color: K.vino, valign: 'middle', charSpacing: 1 });
        T(s, r[1], { x: x + 2.05, y: ry, w: w - 2.25, h: 0.5, fontSize: 17, color: K.tx, valign: 'middle' });
        s.addShape(pres.shapes.LINE, { x: x + 0.3, y: ry + 0.53, w: w - 0.6, h: 0, line: { color: 'CDB698', width: 0.75 } });
      });
      T(s, f[4], { x: x + 0.3, y: y + 4.12, w: w - 0.6, h: 0.72, fontSize: 20, italic: true, bold: true, color: K.cafe, align: 'center', valign: 'middle' });
    });
  }
  src(s, 'HECHOS_v7 y T2_09. Padres de 32 a 45 años, NSE A y B, con hijos de 4 a 11 en colegio privado; 7 de cada 10 hogares A/B son B (APEIM 2025). Fichas representativas: las frases no son textuales.', { y: 6.6, h: 0.42 });
  note(s, 'Adela', 40, 'El mercado objetivo son padres de 32 a 45 años, NSE A y B, con hijos de 4 a 11 en colegio privado. Les hablamos con el mismo esfuerzo a dos personas. Claudia, del segmento A, lee etiquetas y quiere evidencia. Rodrigo, del segmento B, quiere resolver la mañana y mira el precio por brownie. Como 7 de cada 10 hogares A/B son B, Rodrigo pesa tanto como Claudia.');

  // 24 · Posicionamiento
  s = slide('CLARO', '4 · Marketing');
  kicker(s, 'Propuesta de valor y posicionamiento preliminar');
  title(s, 'Casi solos en «premium con prueba»', { h: 0.75 });
  {
    const mx0 = 1.45, mw = 6.6, my0 = 1.7, mh = 4.3;
    const MX = (v) => mx0 + (v - 1.25) / 3.75 * mw, MY = (v) => my0 + mh - (v - 0.5) / 5 * mh;
    s.addShape(pres.shapes.RECTANGLE, { x: mx0, y: my0, w: mw, h: mh, fill: { color: K.bl }, line: { color: K.arena, width: 0.75 } });
    s.addShape(pres.shapes.LINE, { x: MX(3), y: my0, w: 0, h: mh, line: { color: K.arena, width: 1.25, dashType: 'dash' } });
    s.addShape(pres.shapes.LINE, { x: mx0, y: MY(3), w: mw, h: 0, line: { color: K.arena, width: 1.25, dashType: 'dash' } });
    [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].forEach(v => T(s, 'S/' + v.toFixed(2), { x: MX(v) - 0.4, y: my0 + mh + 0.04, w: 0.8, h: 0.24, fontSize: 11, align: 'center', color: K.cm }));
    [1, 2, 3, 4, 5].forEach(v => T(s, String(v), { x: mx0 - 0.32, y: MY(v) - 0.12, w: 0.22, h: 0.24, fontSize: 11, align: 'right', color: K.cm }));
    T(s, 'Precio por 20 g (S/ con IGV)', { x: mx0, y: my0 + mh + 0.3, w: mw, h: 0.28, fontSize: 13, bold: true, align: 'center', color: K.cafe });
    T(s, 'Evidencia que el padre puede verificar (1 a 5)', { x: 0.95 - mh / 2, y: my0 + mh / 2 - 0.14, w: mh, h: 0.28, fontSize: 13, bold: true, align: 'center', color: K.cafe, rotate: 270 });
    const q = (t, x, y, al) => T(s, t, { x, y, w: 3.0, h: 0.26, fontSize: 12, bold: true, color: K.cm, align: al, charSpacing: 1 });
    q('PRECIO BAJO CON PRUEBA: VACÍO', mx0 + 0.1, my0 + 0.08, 'left'); q('PREMIUM CON PRUEBA', mx0 + mw - 3.1, my0 + 0.08, 'right');
    q('MASIVO', mx0 + 0.1, my0 + mh - 0.34, 'left'); q('PREMIUM SIN PRUEBA', mx0 + mw - 3.1, my0 + mh - 0.34, 'right');
    const bar = (a, b, y) => s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: MX(a), y: MY(y) - 0.06, w: MX(b) - MX(a), h: 0.12, rectRadius: 0.06, fill: { color: 'EBD9C6' }, line: { color: 'EBD9C6', width: 0 } });
    const dot = (x, y, d, fill, line, dash) => s.addShape(pres.shapes.OVAL, { x: MX(x) - d / 2, y: MY(y) - d / 2, w: d, h: d, fill: { color: fill || K.bl }, line: { color: line, width: fill ? 0.5 : 2, dashType: dash ? 'dash' : 'solid' } });
    const lb = (t, x, y, dx, dy, o = {}) => T(s, t, Object.assign({ x: MX(x) + dx, y: MY(y) + dy, w: 1.9, h: 0.26, fontSize: 13, color: K.tx }, o));
    bar(4.16, 4.65, 4); bar(3.50, 4.17, 2);
    s.addShape(pres.shapes.LINE, { x: MX(4.48), y: MY(5) + 0.16, w: 0, h: MY(4) - MY(5) - 0.32, line: { color: K.rojo, width: 1.5, dashType: 'dash' } });
    dot(4.48, 5, 0.3, null, K.rojo); dot(4.48, 4, 0.32, K.rojo, K.rojo);
    dot(3.20, 4, 0.22, K.cafe, K.cafe); dot(4.00, 3, 0.22, K.cafe, K.cafe); dot(4.10, 2, 0.22, K.cafe, K.cafe); dot(1.67, 2, 0.22, K.cafe, K.cafe);
    dot(3.83, 2, 0.22, null, K.cafe, true); dot(2.11, 3, 0.22, null, K.cafe, true);
    dot(3.01, 2, 0.16, 'A08C80', 'A08C80'); dot(1.68, 1, 0.16, 'A08C80', 'A08C80');
    lb('Meta: con el informe del laboratorio', 4.48, 5, -3.05, -0.13, { w: 2.85, align: 'right', bold: true, color: K.rojo });
    lb('AndiBite hoy', 4.48, 4, -1.6, 0.2, { w: 1.5, align: 'right', bold: true, color: K.rojo, fontSize: 14 });
    lb('Nutri H', 3.20, 4, -1.05, -0.13, { w: 0.9, align: 'right' });
    lb('Fika', 4.00, 3, -0.8, -0.32, { w: 0.65, align: 'right' });
    lb('La Purita*', 2.11, 3, 0.16, -0.13);
    lb('Forticao*', 3.83, 2, -1.25, -0.36, { w: 1.1, align: 'right' });
    lb('Mamalama', 4.10, 2, -0.4, 0.15, { w: 1.2 });
    lb('Bimbo Nutra Bien', 1.67, 2, 0.16, -0.13);
    lb('Siete Dragones', 3.01, 2, -1.85, 0.06, { w: 1.7, align: 'right', color: K.cm });
    lb('Little Bites', 1.68, 1, 0.16, -0.13, { color: K.cm });
  }
  T(s, 'SLOGAN', { x: 8.75, y: 1.75, w: 4.0, h: 0.32, fontSize: 14, bold: true, color: K.rojo, charSpacing: 2 });
  T(s, 'Hierro medido. Sabor a brownie.', { x: 8.75, y: 2.1, w: 4.0, h: 1.5, fontSize: 34, bold: true, color: K.cafe });
  T(s, 'Territorio: «Medido, no prometido».', { x: 8.75, y: 3.75, w: 4.0, h: 0.95, fontSize: 24, color: K.cm });
  T(s, 'Riesgo: estamos entre los más caros por 20 g.', { x: 8.75, y: 4.85, w: 4.0, h: 0.95, fontSize: 24, bold: true, color: K.rojo });
  src(s, 'Precios por 20 g de T2_02 (tiendas oficiales, 19-oct-2026); escala de evidencia de T2_10, sección 6. * Peso supuesto [POR CONFIRMAR]. En gris, marcas de referencia. Hoy AndiBite está en 4; sube a 5 con el primer informe del laboratorio.', { y: 6.55, h: 0.45 });
  note(s, 'Carlos', 45, 'El posicionamiento: para padres A y B que quieren que su hijo coma hierro sin pelear, AndiBite es el mini brownie que el niño sí se come, porque cada lote se analiza y se ve en la app. En el mapa, el eje horizontal es el precio por 20 gramos y el vertical, la evidencia que el padre puede verificar. Estamos casi solos arriba a la derecha, con Nutri H en el borde. El riesgo es el precio, y por eso el informe del laboratorio es la base del posicionamiento.');

  // 25 · Embudo
  s = slide('OSCURO', '4 · Marketing');
  kicker(s, 'Estimación inicial del mercado', { dark: true });
  title(s, 'Para el año 1 basta el 1.4 % del núcleo', { dark: true, h: 0.75 });
  {
    const L = [
      ['932,000 hogares', 'Mercado total · S/130.9 millones al año', 8.0, '7A4434', K.cr, K.arena],
      ['168,000 hogares A/B', 'Al que apuntamos: toda Lima · S/62.8 millones', 6.7, K.cm, K.cr, K.arena],
      ['46,000 hogares núcleo', 'Lima Top y Moderna · S/17.3 millones', 5.4, K.rojo, K.cr, 'F6DCD3'],
      ['S/244,728', 'Año 1 · 52,331 brownies', 4.1, K.dor, K.cafe, K.cafe],
    ];
    const cx = X0 + 4.0;
    L.forEach((l, i) => box(s, [
      { text: l[0], options: { fontSize: 28, bold: true, color: l[4], breakLine: true } },
      { text: l[1], options: { fontSize: 16, color: l[5] } },
    ], { x: cx - l[2] / 2, y: 1.7 + i * 1.12, w: l[2], h: 1.0, fill: { color: l[3] }, align: 'center', margin: 4, rectRadius: 0.1, objectName: i ? 'anim_nivel' + i : 'nivel0' }));
  }
  T(s, 'SUPUESTOS', { x: 9.0, y: 1.75, w: 3.73, h: 0.32, fontSize: 14, bold: true, color: K.dor, charSpacing: 2 });
  T(s, [
    { text: 'S/4.48 por brownie', options: { breakLine: true } },
    { text: '35 % vuelve por WhatsApp', options: { breakLine: true } },
    { text: '180 días × 40 % de loncheras', options: { breakLine: true } },
    { text: 'Meta: 1.4 % del núcleo' },
  ], { x: 9.0, y: 2.15, w: 3.73, h: 3.9, fontSize: 24, color: K.cr, paraSpaceAfter: 14 });
  src(s, 'T2_05, sección 2 (documento 04: APEIM 2025, Kantar 2025) y Excel v7. Ocasiones = niños de 4 a 11 × 180 días de clase × 40 % de loncheras con horneado o barrita; valor a S/4.00 por unidad (S/1.50 en el total). Con −5 % por el Censo 2025, la meta es el 1.5 % [HIPÓTESIS].', { dark: true, y: 6.35, h: 0.65 });
  note(s, 'Adela', 45, 'El mercado va de lo grande a lo que podemos vender. Hay 932,000 hogares con loncheras con snack en Lima. [Clic] De ellos, 168,000 son A/B con niños de 4 a 11. [Clic] Nuestro núcleo son 46,000 hogares de Lima Top y Lima Moderna, que valen S/17.3 millones al año. [Clic] La meta del año 1, S/244,728 con 52,331 brownies, es solo el 1.4 % del núcleo. Los supuestos: S/4.48 por brownie, 35 % de recompra y 180 días de clase con 40 % de loncheras con snack.');

  // 26 · Precio y canales
  s = slide('CLARO', '4 · Marketing');
  kicker(s, 'Precio y canales');
  title(s, 'Precio claro por brownie y venta cara a cara', { h: 0.75 });
  {
    const P = [['S/4.65', 'pack de 6 en el stand (S/27.90)'], ['S/4.48', 'pack de 6 por WhatsApp (S/26.90)'], ['S/4.16', 'pack de 12 por WhatsApp (S/49.90)']];
    P.forEach((p, i) => {
      const y = 1.8 + i * 1.45;
      T(s, p[0], { x: X0, y, w: 2.55, h: 1.0, fontSize: 48, bold: true, color: K.rojo, valign: 'middle' });
      T(s, p[1], { x: 3.2, y, w: 2.9, h: 1.0, fontSize: 24, color: K.tx, valign: 'middle' });
    });
    T(s, 'BROWNIES DEL AÑO 1 POR CANAL', { x: 6.75, y: 1.8, w: 5.98, h: 0.32, fontSize: 14, bold: true, color: K.rojo, charSpacing: 2 });
    const C = [['Stands', 43], ['WhatsApp', 18], ['Colegios', 17.5], ['Ferias y eventos', 14], ['Naturistas', 7]];
    C.forEach((c, i) => {
      const y = 2.3 + i * 0.78, bw = c[1] / 43 * 2.75;
      T(s, c[0], { x: 6.75, y, w: 2.05, h: 0.6, fontSize: 20, bold: true, color: K.cafe, valign: 'middle' });
      s.addShape(pres.shapes.RECTANGLE, { x: 8.85, y: y + 0.12, w: bw, h: 0.36, fill: { color: i === 0 ? K.rojo : K.cm }, line: { color: i === 0 ? K.rojo : K.cm, width: 0 } });
      T(s, String(c[1]).replace('.', '.') + ' %', { x: 8.95 + bw, y, w: 1.1, h: 0.6, fontSize: 20, bold: true, color: K.cafe, valign: 'middle' });
    });
  }
  src(s, 'HECHOS_v7 (precios con IGV, que no se cambian; brownies por canal del Excel v7). Competencia por 20 g: Fika S/4.00, Mamalama S/4.10, Nutri H S/3.20 (T2_02). Sin suscripción: WhatsApp es solo para recompra.', { y: 6.55, h: 0.45 });
  note(s, 'Adela', 35, 'El precio se comunica por brownie: S/4.65 en el pack de 6 del stand, S/4.48 por WhatsApp y S/4.16 en el pack de 12, que es el que le mostramos primero a Rodrigo. La venta es cara a cara: el 43 % sale de los stands, el 18 % es recompra por WhatsApp, y luego colegios, ferias y naturistas.');

  // 27 · Próximos 90 días
  s = slide('OSCURO', '4 · Marketing');
  kicker(s, 'Próximos 90 días', { dark: true });
  title(s, 'Tres hitos hasta abrir el primer stand', { dark: true, h: 0.75 });
  s.addShape(pres.shapes.LINE, { x: 1.0, y: 2.35, w: 11.3, h: 0, line: { color: K.cm, width: 3 } });
  {
    const H3 = [
      ['NOVIEMBRE 2026', 'Laboratorio y degustación', 'Hierro y octógono medidos; resultados completos'],
      ['DICIEMBRE 2026', 'Prelanzamiento', '100 contactos en espera y pauta de S/600'],
      ['2 Y 3 DE ENERO 2027', 'Abre Jockey Plaza', 'Punto 1 con vendedores capacitados'],
    ];
    const w = 3.85, g = 0.29;
    H3.forEach((h, i) => {
      const x = X0 + i * (w + g);
      s.addShape(pres.shapes.OVAL, { x: x + 0.1, y: 2.12, w: 0.46, h: 0.46, fill: { color: K.dor }, line: { color: K.cafe, width: 3 } });
      T(s, [
        { text: h[0], options: { fontSize: 15, bold: true, color: K.dor, charSpacing: 1, breakLine: true, paraSpaceAfter: 8 } },
        { text: h[1], options: { fontSize: 30, bold: true, color: K.cr, breakLine: true, paraSpaceAfter: 8 } },
        { text: h[2], options: { fontSize: 24, color: K.arena } },
      ], { x: x + 0.1, y: 2.85, w: w - 0.2, h: 3.2, objectName: 'anim_paso' + (i + 1) });
    });
  }
  src(s, 'T2_21, sección 4.2 (Gantt #18); HECHOS_v7 (prelanzamiento de S/1,758: oct-dic 2026). Fecha del primer informe del laboratorio y apertura del 2-3 de enero [POR CONFIRMAR con el laboratorio y el mall].', { dark: true });
  note(s, 'Adela', 35, '[Clic] En noviembre: el primer análisis de hierro y octógono, y los resultados completos de la degustación. [Clic] En diciembre, el prelanzamiento: 100 contactos en lista de espera, 40 packs para influencers y S/600 de pauta de expectativa. [Clic] Y el 2 y 3 de enero abrimos el punto 1 en el Jockey Plaza. Las fechas del laboratorio y del mall están por confirmar.');

  // 28 · Cierre
  s = slide('LIMPIO', 'Cierre');
  s.addImage({ path: 'img/logo_light.png', x: 0.8, y: 0.8, w: 3.5, h: 1.195 });
  T(s, [{ text: 'Hierro medido.', options: { breakLine: true } }, { text: 'Sabor a brownie.' }], { x: 0.8, y: 2.3, w: 7.7, h: 1.9, fontSize: 48, bold: true, color: K.cr });
  T(s, 'Su prueba: la lonchera vacía. La tuya: el informe de su lote.', { x: 0.8, y: 4.35, w: 7.4, h: 1.0, fontSize: 26, color: K.arena });
  T(s, 'Gracias · Grupo 2 · Diana, Carlos, Angie, Patricia y Adela', { x: 0.8, y: 5.95, w: 7.7, h: 0.4, fontSize: 18, color: K.cr });
  await pic(s, 'img/deck/empaque_frente.jpg', 8.75, 0.55, 4.2, 6.2, { rotate: -3 });
  note(s, 'Diana', 25, 'En la lonchera de cada día, el niño da su prueba y el padre tiene la suya: el informe de su lote. Hierro medido. Sabor a brownie. Muchas gracias; quedamos atentos a sus preguntas. (Los anexos con presupuesto, KPI, ROI y FODA cruzado están después de esta diapositiva.)');

  // ======================= ANEXOS =======================
  s = slide('CLARO', 'Anexos');
  kicker(s, 'Anexo 1 · Presupuesto de marketing');
  title(s, 'S/24,544 de octubre de 2026 a diciembre de 2027', { h: 0.75 });
  table(s, ['Tipo de medio', 'S/', '%'], [
    ['Publicidad (pauta en Meta, expectativa y video)', '5,950', '24 %'], ['Ventas personales (vendedores en ferias y eventos)', '4,140', '17 %'],
    ['Promociones (muestras, degustación, POP, embajadoras)', '7,596', '31 %'], ['Relaciones públicas (influencers, ferias y eventos)', '6,858', '28 %'],
    [{ text: 'Total', options: { bold: true } }, { text: '24,544', options: { bold: true } }, { text: '100 %', options: { bold: true } }],
  ], { x: X0, y: 1.75, w: 6.3, colW: [4.4, 1.0, 0.9], rowH: 0.6, fontSize: 15, colOpt: { 1: { align: 'right' }, 2: { align: 'right' } } });
  table(s, ['Fase', 'Meses', 'S/', 'Meta'], [
    ['Prelanzamiento', 'Oct–dic 2026', '1,758', '100 contactos en espera'], ['Lanzamiento', 'Ene–feb 2027', '5,796', '3,700 brownies'],
    ['Crecer', 'Mar–jul 2027', '9,770', '20,320 brownies; 3 colegios'], ['Expandir', 'Ago–dic 2027', '7,220', '28,311 brownies; unos 2,300 contactos'],
  ], { x: 7.15, y: 1.75, w: 5.58, colW: [1.45, 1.25, 0.75, 2.13], rowH: 0.72, fontSize: 14, colOpt: { 2: { align: 'right' } } });
  box(s, 'S/900 al mes (S/700 de pauta, degustación y material + S/200 de embajadoras) · BTL 74 % y digital 26 %, sin ATL · S/0.44 por brownie en 2027', { x: X0, y: 5.6, w: FW, h: 0.8, fill: { color: K.cafe }, color: K.cr, fontSize: 16, align: 'center' });
  src(s, 'T2_17, secciones 1.1 a 1.5; Presupuesto-marketing-AndiBite.xlsx; HECHOS_v7.');
  note(s, 'Adela (anexo, solo si preguntan)', 30, 'El plan cuesta S/24,544 en 15 meses. Mantiene los S/900 al mes y suma el lanzamiento, las 2 ferias pagadas y los 40 eventos. El 74 % es BTL, porque la venta es cara a cara.');

  s = slide('CLARO', 'Anexos');
  kicker(s, 'Anexo 2 · Control de KPI');
  title(s, 'KPI principales y qué hacemos si no se cumplen', { h: 0.75 });
  table(s, ['KPI', 'Meta 2027', 'Frecuencia', 'Si no se cumple'], [
    ['Brownies por día en cada punto', '80 a 90; mínimo 65', 'Cada fin de semana', 'Más degustación o cambiar de punto'],
    ['Ventas con IGV', 'S/244,728 en el año', 'Mensual', 'Bajo 88 % del Excel: plan de −20 %'],
    ['Recompra por WhatsApp', '35 % de lo físico', 'Mensual', 'Reforzar el aviso de la app antes que la pauta'],
    ['Contactos con permiso', 'Unos 2,300 en diciembre', 'Semanal', 'QR de WhatsApp en el cartel y la bolsa'],
    ['Envases escaneados', '30 % en el año', 'Mensual', 'El vendedor escanea con el padre'],
    ['Familias por embajadoras', '230 en el año', 'Mensual', 'Más salones o cambiar el premio (al padre)'],
    ['Colegios con quiosco', '5 (2 A y 3 B)', 'Mensual', 'Sin «sin octógono» no hay quiosco'],
    ['Costo por contacto en Meta', 'S/5 o menos [META PROPUESTA]', 'Mensual', 'Más de S/8 por 2 meses: cambiar anuncio'],
  ], { y: 1.6, colW: [3.1, 3.0, 2.0, 4.03], rowH: 0.52, fontSize: 14, colOpt: { 0: { bold: true, color: K.cafe } } });
  src(s, 'T2_19, tabla de KPI (17 indicadores; aquí los 8 principales); HECHOS_v7.');
  note(s, 'Adela (anexo, solo si preguntan)', 30, 'Cada domingo revisamos estos KPI con semáforo. Los más importantes son los brownies por día en cada punto, con un mínimo de 65, y la recompra del 35 %.');

  s = slide('CLARO', 'Anexos');
  kicker(s, 'Anexo 3 · Retorno');
  title(s, 'ROI del negocio de 42 % y ROI de marketing de 74 %', { h: 0.75 });
  table(s, ['Indicador', 'Valor', 'Cómo se calcula'], [
    ['ROI del negocio, año 1', '41.5 % (42 %)', 'Utilidad neta S/10,379 ÷ aporte de los socios S/25,000'],
    ['ROI de marketing (75 % atribuido)', '74 %', '(S/56,824 × 75 % − S/24,544) ÷ S/24,544; piso 16 %, techo 132 %'],
    ['Atribución mínima para no perder', '43 %', 'S/24,544 ÷ S/56,824 de contribución después de stands'],
    ['Resultado operativo, año 1', 'S/13,423 (6.5 %)', 'Excel v7; todos los meses ganan desde marzo'],
    ['Inversión inicial', 'S/40,876', 'Socios S/25,000 + préstamo S/16,000; se recupera en el mes 23'],
    ['Año 2 (2028)', 'S/322,329', '70,452 brownies; utilidad neta de S/28,447'],
  ], { y: 1.6, colW: [3.6, 2.2, 6.33], rowH: 0.68, fontSize: 15, colOpt: { 0: { bold: true, color: K.cafe }, 1: { bold: true, color: K.rojo } } });
  src(s, 'T2_17, sección 3 (ROI con el prompt 4 de la clase); HECHOS_v7 y Excel v7. El ROI de marketing es un estimado que depende de la atribución.');
  note(s, 'Carlos (anexo, solo si preguntan)', 30, 'Usamos dos ROI con su nombre. El del negocio es 41.5 %: la utilidad neta sobre el aporte de los socios. El de marketing es 74 % si el marketing explica 3 de cada 4 soles de la contribución; se paga solo si explica al menos el 43 %.');

  s = slide('CLARO', 'Anexos');
  kicker(s, 'Anexo 4 · FODA cruzado');
  title(s, 'Cuatro estrategias que ya están en el plan', { h: 0.75 });
  {
    const Q = [
      ['FO · EXPLOTAR', 'Quioscos de colegios con la versión sin octógono (meta: 5). Recompra por WhatsApp con el aviso de la app.', K.oli],
      ['DO · SUPERAR', 'Degustación: el niño prueba y el padre decide. Mamás embajadoras: 230 familias nuevas.', K.dor],
      ['FA · PROTEGER', 'Diferenciarse con el dato del lote, sin decir «combate la anemia». Costo de S/1.64 con maquila.', K.cm],
      ['DA · MITIGAR', 'Validar en puntos propios antes de la góndola (año 2). Línea de crédito solo si la caja baja de S/1,000.', K.rojo],
    ];
    const w = (FW - 0.25) / 2, h = 2.25;
    Q.forEach((q, i) => {
      const x = X0 + (i % 2) * (w + 0.25), y = 1.6 + Math.floor(i / 2) * (h + 0.2);
      s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.1, h, fill: { color: q[2] }, line: { color: q[2], width: 0 } });
      box(s, [{ text: q[0], options: { fontSize: 14, bold: true, color: K.rojo, charSpacing: 2, breakLine: true } }, { text: q[1], options: { fontSize: 20, color: K.tx } }],
        { x: x + 0.1, y, w: w - 0.1, h, shape: pres.shapes.RECTANGLE, valign: 'top', margin: 14, paraSpaceAfter: 6 });
    });
  }
  src(s, 'T2_04, sección 2 (FODA cruzado corregido); HECHOS_v7.');
  note(s, 'Diana (anexo, solo si preguntan)', 30, 'El FODA cruzado da cuatro tipos de estrategia, y todas ya tienen una acción en el plan: colegios y recompra para explotar; degustación y embajadoras para superar; el dato del lote para proteger; y validar en puntos propios con un control de caja para mitigar.');

  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log('ok', OUT);
})().catch(e => { console.error(e); process.exit(1); });
