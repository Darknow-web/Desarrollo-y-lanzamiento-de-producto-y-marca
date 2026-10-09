// AndiBite — Trabajos de campo 5 a 8 (pptxgenjs, deck estructurado)
const pptxgen = require('pptxgenjs');
const React = require('react');
const RDS = require('react-dom/server');
const sharp = require('sharp');
const fa = require('react-icons/fa');
const { applyTheme } = require('/root/.claude/skills/synced/e7063657-960e-49c9-b517-23d330438093_cf5848ca-1efc-4397-9a99-7d57339830f9/pptx/scripts/apply_theme.js');
const OUT = process.argv[2] || 'TC5-8.pptx';
const PROMPTS = require('./prompts.json');
const pn = (n, ar) => '\n\nIMAGEN ' + n + ' — prompt para Nano Banana (proporción ' + ar + '):\n' + PROMPTS[n];

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
pres.title = 'AndiBite — Trabajos de campo 5 a 8';
const C = pres.SchemeColor;

// ---------- íconos ----------
async function icon(name, hex, size = 256) {
  const Comp = fa[name];
  if (!Comp) throw new Error('icono no existe: ' + name);
  let svg = RDS.renderToStaticMarkup(React.createElement(Comp, { color: '#' + hex, size }));
  if (!svg.includes('xmlns')) svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  const buf = await sharp(Buffer.from(svg)).resize(size, size).png().toBuffer();
  return 'image/png;base64,' + buf.toString('base64');
}

// ---------- layouts ----------
const FOOT = 'AndiBite · Grupo 2 · Desarrollo y lanzamiento de nuevos productos';
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

(async () => {
  const MESES3 = ['Nov', 'Dic', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct'];
  // =============== 1. PORTADA ===============
  pres.addSection({ title: 'Portada' });
  let s = pres.addSlide({ masterName: 'PORTADA', sectionTitle: 'Portada' });
  s.addImage({ path: 'img/logo_light.png', x: 0.8, y: 1.1, w: 5.6, h: 1.92 });
  s.addText('Trabajos de campo 5 a 8', { placeholder: 'title' });
  s.addText('Cliente, canal, relación, ingresos, Canvas y propuesta de valor', { placeholder: 'body' });
  T(s, 'Grupo 2 · Diana Ayoso · Carlos Inga · Angie Blas · Patricia Cárdenas · Adela Robles', { x: 0.8, y: 5.75, w: 7.6, h: 0.35, fontSize: 14, color: C.background2 });
  T(s, 'Desarrollo y lanzamiento de nuevos productos · Prof. Paola Cevallos · Octubre de 2026', { x: 0.8, y: 6.15, w: 7.6, h: 0.35, fontSize: 12, color: C.accent5 });
  s.addImage({ path: '/home/user/Desarrollo-y-lanzamiento-de-producto-y-marca/assets/empaque/B1_frente.png', x: 8.75, y: 0.6, w: 4.4, h: 6.12, rotate: 4, shadow: { type: 'outer', color: '000000', opacity: 0.35, blur: 12, offset: 4, angle: 90 } });
  s.addNotes('Presentamos los trabajos de campo 5 a 8 de AndiBite, el mini brownie de 20 g con sangrecita. Todo sale de la misma base: el público reformulado (padres conscientes y planificados, NSE A/B), el costeo con maquila y los precios confirmados por el equipo el 9 de octubre de 2026 (pack de 6 a S/24.90).');

  // =============== 2. RUTA ===============
  s = content('Portada', 'RUTA DEL TRABAJO', 'Cuatro trabajos, un solo modelo de negocio');
  const ruta = [
    ['05', 'FaUsers', 'Cliente y canal', 'Arquetipos, buyer persona, tipos de mercado y canal'],
    ['06', 'FaHandshake', 'Relación e ingresos', 'Cómo captamos y retenemos, y de dónde viene el dinero'],
    ['07', 'FaThLarge', 'Modelo Canvas', 'Socios, recursos, actividades, costos y los 9 bloques'],
    ['08', 'FaGift', 'Propuesta de valor', 'Mapa de valor frente al perfil del cliente'],
  ];
  for (let i = 0; i < 4; i++) {
    const x = 0.6 + i * (2.81 + 0.3), y = 1.75, w = 2.81, h = 3.85;
    card(s, x, y, w, h);
    T(s, ruta[i][0], { x: x + 0.3, y: y + 0.3, w: 1.4, h: 0.8, fontSize: 40, bold: true, color: C.accent1 });
    await iconCircle(s, ruta[i][1], x + w - 1.05, y + 0.3, 0.75, C.text2, H.accent5);
    T(s, ruta[i][2], { x: x + 0.3, y: y + 1.35, w: w - 0.6, h: 0.45, fontSize: 19, bold: true, color: C.text2 });
    T(s, ruta[i][3], { x: x + 0.3, y: y + 1.9, w: w - 0.6, h: 1.6, fontSize: 15, color: C.accent2 });
  }
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 5.95, w: 12.13, h: 0.75, rectRadius: 0.37, fill: { color: C.text2 }, line: { color: C.text2, width: 0 } });
  T(s, [
    { text: 'El producto: ', options: { bold: true, color: C.accent3 } },
    { text: 'mini brownie de 20 g con sangrecita · 3 sabores · se vende en stands, carritos y ferias, y se recompra por WhatsApp' },
  ], { x: 0.95, y: 5.95, w: 11.5, h: 0.75, valign: 'middle', fontSize: 16, color: C.background2 });
  s.addNotes('Los cuatro trabajos se conectan: el cliente (TC5) define cómo nos relacionamos y cobramos (TC6); eso arma el Canvas con socios, recursos, actividades y costos (TC7); y todo se resume en el mapa de propuesta de valor (TC8).');

  // =============== 3. SECCIÓN TC5 ===============
  s = await section('TC5 · Cliente, mercado y canal', '05', 'Cliente, mercado y canal', 'Tipos de mercado · Tamaño del nicho · Arquetipos · Buyer persona · Canal y puntos de venta', 'FaUsers');
  s.addNotes('Trabajo de campo 5: arquetipo de cliente, buyer persona, tipos de mercado y selección del canal de distribución.');
  const S5 = 'TC5 · Cliente, mercado y canal';

  // =============== 4. TIPOS DE MERCADO ===============
  s = content(S5, 'TRABAJO DE CAMPO 5 · TIPOS DE MERCADO', 'Elegimos un nicho, con dos segmentos dentro');
  const mk = [
    ['FaGlobeAmericas', 'Masivo', 'Un producto para todos', 'NO APLICA', 'El precio premium no llega a todos', false],
    ['FaBullseye', 'Nicho', 'Clientes muy específicos', 'ELEGIDO', 'Padres A/B con hijos de 4 a 11 en Lima Top y Moderna', true],
    ['FaLayerGroup', 'Segmentado', 'Mismo núcleo, necesidades distintas', 'ELEGIDO', 'Claudia busca salud; Rodrigo busca tiempo', true],
    ['FaSitemap', 'Diversificado', 'Segmentos sin relación entre sí', 'NO APLICA', 'Un solo producto y un solo público', false],
    ['FaProjectDiagram', 'Multilateral', 'Dos grupos que se necesitan', 'NO APLICA', 'No conectamos dos lados de un mercado', false],
  ];
  for (let i = 0; i < 5; i++) {
    const [ic, name, def, tag, app, on] = mk[i];
    const w = 2.226, x = 0.6 + i * (w + 0.25), y = 1.7, h = 3.7;
    card(s, x, y, w, h, { fill: on ? C.accent1 : C.background1 });
    await iconCircle(s, ic, x + 0.25, y + 0.25, 0.7, on ? C.background1 : C.background2, on ? H.accent1 : H.accent2);
    T(s, name, { x: x + 0.25, y: y + 1.08, w: w - 0.4, h: 0.42, fontSize: 18, bold: true, color: on ? C.background1 : C.text2 });
    T(s, def, { x: x + 0.25, y: y + 1.5, w: w - 0.4, h: 0.6, fontSize: 12, color: on ? C.background2 : C.accent2 });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 0.25, y: y + 2.15, w: 1.3, h: 0.32, rectRadius: 0.16, fill: { color: on ? C.background1 : C.background2 }, line: { color: on ? C.background1 : C.background2, width: 0 } });
    T(s, tag, { x: x + 0.25, y: y + 2.15, w: 1.3, h: 0.32, fontSize: 10, bold: true, align: 'center', valign: 'middle', color: on ? C.accent1 : C.accent2, charSpacing: 1 });
    T(s, app, { x: x + 0.25, y: y + 2.6, w: w - 0.4, h: 1.0, fontSize: 14, color: on ? C.background1 : C.text1 });
  }
  T(s, 'Por tipo de comprador (unidades del año 1)', { x: 0.6, y: 5.62, w: 6, h: 0.32, fontSize: 14, bold: true, color: C.text2 });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 6.0, w: 9.31, h: 0.62, rectRadius: 0.1, fill: { color: C.text2 }, line: { color: C.text2, width: 0 } });
  T(s, 'Mercado de consumo (B2C): familias en stands, ferias y WhatsApp · 77.2 %', { x: 0.85, y: 6.0, w: 8.9, h: 0.62, valign: 'middle', fontSize: 15, bold: true, color: C.background1 });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 9.96, y: 6.0, w: 2.77, h: 0.62, rectRadius: 0.1, fill: { color: C.accent3 }, line: { color: C.accent3, width: 0 } });
  T(s, 'B2B 22.8 %', { x: 9.96, y: 6.0, w: 2.77, h: 0.62, valign: 'middle', align: 'center', fontSize: 14, bold: true, color: C.text1 });
  s.addNotes('Tipos de mercado según el bloque de segmentos del Canvas (Osterwalder y Pigneur): masivo, nicho, segmentado, diversificado y multilateral. AndiBite es un NICHO (padres A/B con hijos de 4 a 11 años en Lima Top y Lima Moderna) y dentro de él SEGMENTA dos necesidades: salud verificable (Claudia) y ahorro de tiempo (Rodrigo). Por tipo de comprador, el 77.2 % de las unidades va a consumidor final (B2C: stands, carritos, ferias y WhatsApp) y el 22.8 % a negocios (B2B: concesionarios de quioscos escolares y tiendas naturistas). Fuente de unidades: Costeo-presentaciones-AndiBite.xlsx, hoja Mensual.');

  // =============== 5. TAM SAM SOM ===============
  s = content(S5, 'TRABAJO DE CAMPO 5 · TAMAÑO DEL MERCADO', 'Un nicho chico, pero con billetera');
  const fun = [
    [6.6, C.accent5, C.text1, 'TAM · S/130.9 millones', '932 mil hogares · todas las loncheras de Lima'],
    [5.4, C.accent2, C.background1, 'SAM · S/62.8 millones', '168 mil hogares A/B con niños de 4 a 11'],
    [4.2, C.accent1, C.background1, 'Núcleo · S/17.3 millones', '46 mil hogares en Lima Top y Moderna'],
    [3.0, C.text2, C.background1, 'SOM año 1 · S/0.20 M', '47,223 brownies · 2 a 3 puntos'],
  ];
  for (let i = 0; i < 4; i++) {
    const [w, f, tc, a, b] = fun[i];
    const x = 3.95 - w / 2, y = 1.7 + i * 1.18;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 1.0, rectRadius: 0.12, fill: { color: f }, line: { color: f, width: 0 } });
    T(s, [{ text: a, options: { bold: true, fontSize: 18, breakLine: true } }, { text: b, options: { fontSize: 12 } }], { x: x + 0.15, y, w: w - 0.3, h: 1.0, align: 'center', valign: 'middle', color: tc });
  }
  const stats = [
    ['53.1 %', 'de los nacimientos de Lima son de madres de 30 años o más', 'INEI 2022'],
    ['83 %', 'cambia su compra por los octógonos; 70 % teme el "Alto en azúcar"', 'Ipsos 2025'],
    ['S/1,709', 'gasta al mes un hogar A en educación y salud', 'APEIM 2025'],
  ];
  for (let i = 0; i < 3; i++) {
    const x = 7.75, y = 1.7 + i * 1.62, w = 4.98, h = 1.42;
    card(s, x, y, w, h);
    T(s, stats[i][0], { x: x + 0.25, y, w: 1.95, h, valign: 'middle', fontSize: 32, bold: true, color: C.accent1 });
    T(s, [{ text: stats[i][1], options: { breakLine: true } }, { text: stats[i][2], options: { fontSize: 11, color: C.accent2, italic: true } }], { x: x + 2.25, y: y + 0.15, w: w - 2.45, h: h - 0.3, valign: 'middle', fontSize: 14 });
  }
  s.addNotes('Embudo del documento 04 (APEIM 2025, CPI 2026, INEI, Kantar). TAM: todas las loncheras con horneado o snack envasado de niños de 4 a 11 años en Lima y Callao (S/130.9 millones). SAM: niños de NSE A/B en toda Lima a precio premium (S/62.8 millones). Núcleo: NSE A/B de las zonas 6 y 7 de APEIM (S/17.3 millones). SOM del año 1 (noviembre 2026 a octubre 2027): 47,223 brownies y S/198,748 con IGV, vendidos sobre todo en stands, carritos y ferias; es apenas el 1.1 % del núcleo. Ajuste de -5 % por el Censo 2025 aplicado en el documento 04.');

  // =============== 6. ARQUETIPOS ===============
  s = content(S5, 'TRABAJO DE CAMPO 5 · ARQUETIPOS DE CLIENTE', 'Tres arquetipos ordenan a quién le vendemos');
  const arq = [
    ['FaShieldAlt', C.accent1, 'Guardiana del Hierro', 'Mide la salud de su hijo', 'Hierro verificable y cero octógonos', 'Lo "saludable" que no tiene pruebas', 'Hierro medido, sabor a brownie', '30 %', 'Buyer persona: Claudia'],
    ['FaClock', C.accent2, 'El Resolutivo', 'Mamá o papá contra el reloj', 'Resolver la lonchera en un minuto', 'Que regrese intacta o aplastada', 'Una mañana menos', '45 %', 'Buyer persona: Rodrigo'],
    ['FaSchool', C.accent4, 'El Prescriptor (B2B)', 'Quiosco, nutricionista, pediatra', 'Cumplir la lonchera saludable', 'Productos sin registro o sin stock', 'Cumple la norma y los niños lo piden', '25 %', 'Valida la marca'],
  ];
  for (let i = 0; i < 3; i++) {
    const a = arq[i];
    const x = 0.6 + i * (3.85 + 0.29), y = 1.7, w = 3.85, h = 5.0;
    card(s, x, y, w, h);
    await iconCircle(s, a[0], x + 0.3, y + 0.3, 0.8, a[1], 'FFFFFF');
    T(s, a[2], { x: x + 1.25, y: y + 0.3, w: w - 1.45, h: 0.45, fontSize: 19, bold: true, color: C.text2 });
    T(s, a[3], { x: x + 1.25, y: y + 0.78, w: w - 1.45, h: 0.35, fontSize: 12, color: C.accent2 });
    const rows = [['LO MUEVE', a[4]], ['LE TEME', a[5]], ['MENSAJE', '"' + a[6] + '"']];
    rows.forEach((r, k) => {
      T(s, r[0], { x: x + 0.3, y: y + 1.45 + k * 0.92, w: w - 0.6, h: 0.28, fontSize: 11, bold: true, color: C.accent1, charSpacing: 1 });
      T(s, r[1], { x: x + 0.3, y: y + 1.72 + k * 0.92, w: w - 0.6, h: 0.6, fontSize: 15, italic: k === 2, color: C.text1 });
    });
    T(s, [{ text: a[7], options: { fontSize: 30, bold: true, color: a[1], breakLine: true } }, { text: 'del volumen (hipótesis)', options: { fontSize: 11, color: C.accent2 } }], { x: x + 0.3, y: y + 4.12, w: 1.7, h: 0.8 });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 1.95, y: y + 4.3, w: 1.6, h: 0.42, rectRadius: 0.21, fill: { color: C.background2 }, line: { color: C.accent5, width: 1 } });
    T(s, a[8], { x: x + 1.95, y: y + 4.3, w: 1.6, h: 0.42, fontSize: 11, bold: true, align: 'center', valign: 'middle', color: C.text2 });
  }
  s.addNotes('El arquetipo es el patrón de compra de un grupo; la buyer persona es la ficha de una persona que lo representa. Guardiana del Hierro: compra por salud verificable (la representa Claudia). El Resolutivo: compra tiempo y practicidad (lo representa Rodrigo). El Prescriptor: quiosco, nutricionista o pediatra que valida la marca ante los otros dos. Los porcentajes de volumen son hipótesis del equipo (documento 03-entregables/01).');

  // =============== 7-8. BUYER PERSONAS ===============
  const personas = [
    { side: 'L', img: 1, name: 'Claudia Mendoza', tag: 'La mamá que lee etiquetas', imgLabel: 'Retrato de Claudia (38, San Borja)',
      chips: [['EDAD Y DISTRITO', '38 años · San Borja'], ['OCUPACIÓN', 'Abogada corporativa'], ['FAMILIA', '2 hijos (7 y 4)'], ['INGRESO FAMILIAR', 'S/13,500 al mes'], ['SE INFORMA', 'Pediatra e Instagram'], ['PAGARÍA', 'S/24 a 30 el pack']],
      pain: ['Hemoglobina baja en el control', 'Lo nutritivo regresa intacto'], want: ['Hierro en mg y cero octógonos', 'Que su hijo lo pida solo'],
      quote: '"Todo lo que le hace bien, mi hijo lo escupe."' },
    { side: 'R', img: 2, name: 'Rodrigo Salazar', tag: 'El papá que resuelve la mañana', imgLabel: 'Retrato de Rodrigo (42, La Molina)',
      chips: [['EDAD Y DISTRITO', '42 años · La Molina'], ['OCUPACIÓN', 'Gerente de operaciones'], ['FAMILIA', '2 hijos (9 y 6)'], ['INGRESO FAMILIAR', 'S/18,000 al mes'], ['COMPRA', 'Apps, IG y TikTok'], ['PAGARÍA', 'S/18 a 24 por 6 u']],
      pain: ['Jueves y viernes sin ideas', 'Snacks aplastados en la mochila'], want: ['Que resuelva toda la semana', 'Recordatorio para recomprar'],
      quote: '"No me vendas salud, véndeme una mañana menos."' },
  ];
  for (const p of personas) {
    s = content(S5, 'TRABAJO DE CAMPO 5 · BUYER PERSONA ' + (p.img === 1 ? 'PRINCIPAL' : 'SECUNDARIO'), p.name);
    const ix = p.side === 'L' ? 0.6 : 9.03, cx = p.side === 'L' ? 4.6 : 0.6, cw = 8.13;
    await imgSlot(s, p.img, ix, 1.6, 3.7, 5.1, p.imgLabel);
    T(s, p.tag, { x: cx, y: 1.6, w: cw, h: 0.45, fontSize: 22, italic: true, bold: true, color: C.accent1 });
    p.chips.forEach((c, k) => {
      const col = k % 3, row = Math.floor(k / 3);
      const w = 2.55, x = cx + col * (w + 0.24), y = 2.25 + row * 1.0;
      card(s, x, y, w, 0.85, { r: 0.1 });
      T(s, c[0], { x: x + 0.18, y: y + 0.12, w: w - 0.3, h: 0.25, fontSize: 10, bold: true, color: C.accent1, charSpacing: 1 });
      T(s, c[1], { x: x + 0.18, y: y + 0.38, w: w - 0.3, h: 0.38, fontSize: 15, bold: true, color: C.text2 });
    });
    const boxes = [['FaFrown', 'Su dolor', p.pain, C.accent6], ['FaSmile', 'Lo que busca', p.want, C.accent4]];
    for (let k = 0; k < 2; k++) {
      const w = 3.95, x = cx + k * (w + 0.23), y = 4.35;
      card(s, x, y, w, 1.45);
      await iconCircle(s, boxes[k][0], x + 0.2, y + 0.2, 0.5, boxes[k][3], 'FFFFFF');
      T(s, boxes[k][1], { x: x + 0.85, y: y + 0.22, w: w - 1.0, h: 0.45, valign: 'middle', fontSize: 16, bold: true, color: C.text2 });
      T(s, boxes[k][2].map((t, j) => ({ text: t, options: { bullet: true, breakLine: j < boxes[k][2].length - 1 } })), { x: x + 0.25, y: y + 0.78, w: w - 0.4, h: 0.6, fontSize: 14, paraSpaceAfter: 2 });
    }
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: cx, y: 6.0, w: cw, h: 0.7, rectRadius: 0.35, fill: { color: C.text2 }, line: { color: C.text2, width: 0 } });
    T(s, p.quote, { x: cx + 0.3, y: 6.0, w: cw - 0.6, h: 0.7, valign: 'middle', fontSize: 18, italic: true, bold: true, color: C.background2 });
    s.addNotes(p.img === 1
      ? 'Claudia Mendoza Ríos, 38 años, San Borja (zona 7 de APEIM, 71.6 % de hogares A/B). Abogada corporativa, casada con Diego, hijos Matías (7) y Luciana (4); fue madre a los 31 y 34, como el 53.1 % de las madres de Lima que tienen hijos después de los 30. Ingreso familiar S/13,500 (hipótesis entre los promedios B y A de APEIM 2025). Objeciones: ¿no sabe a sangrecita?, ¿cuántos mg de hierro?, ¿tiene registro sanitario? Cómo le vendemos: degustación con el niño delante, hierro en mg y registro sanitario visibles.' + pn(1, '3:4')
      : 'Rodrigo Salazar, 42 años, La Molina. Gerente de operaciones; su esposa viaja por trabajo y él arma las loncheras. Ingreso familiar S/18,000 (hipótesis, A2). No busca salud, busca resolver: un pack que dure la semana, que aguante la mochila y que pueda pedir por WhatsApp con recordatorio. El pack de 12 a S/46.90 equivale a S/23.45 por cada 6, dentro de lo que pagaría (S/18 a 24).' + pn(2, '3:4'));
  }

  // =============== 9. CANAL: 5 FASES ===============
  s = content(S5, 'TRABAJO DE CAMPO 5 · CANAL DE DISTRIBUCIÓN', 'El niño prueba en el stand y el padre compra ahí');
  const fases = [
    ['FaMapMarkerAlt', '1 · Información', 'Stand en mall o súper, Instagram y chat del salón'],
    ['FaSmile', '2 · Evaluación', 'Degustación gratis: el niño prueba delante del padre'],
    ['FaStore', '3 · Compra', 'En el stand: unidad a S/5 o pack a S/26, con Yape, Plin o tarjeta'],
    ['FaShoppingBag', '4 · Entrega', 'En el momento; por WhatsApp, delivery gratis desde 2 packs'],
    ['FaWhatsapp', '5 · Posventa', 'Recordatorio de recompra por WhatsApp y QR del lote'],
  ];
  for (let i = 0; i < 5; i++) {
    const w = 2.27, x = 0.6 + i * (w + 0.2), y = 1.75;
    if (i < 4) s.addShape(pres.shapes.LINE, { x: x + 1.15, y: y + 0.5, w: w + 0.2 - 1.15, h: 0, line: { color: C.accent5, width: 2, dashType: 'dash', endArrowType: 'triangle' } });
    await iconCircle(s, fases[i][0], x, y, 1.0, i === 2 ? C.accent1 : C.text2, i === 2 ? 'FFFFFF' : H.accent5);
    T(s, fases[i][1], { x, y: y + 1.2, w, h: 0.4, fontSize: 17, bold: true, color: C.text2 });
    T(s, fases[i][2], { x, y: y + 1.65, w: w - 0.1, h: 1.2, fontSize: 14, color: C.text1 });
  }
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 4.3, w: 7.6, h: 1.65, rectRadius: 0.12, fill: { color: C.text2 }, line: { color: C.text2, width: 0 } });
  T(s, [{ text: 'Canal propio y físico', options: { fontSize: 20, bold: true, color: C.accent3, breakLine: true } }, { text: 'Stands, carritos y ferias: 58.6 % de las unidades. Es donde el niño prueba y el padre decide.', options: { fontSize: 15, color: C.background1 } }], { x: 0.95, y: 4.45, w: 7.0, h: 1.4, valign: 'middle' });
  card(s, 8.45, 4.3, 4.28, 1.65);
  T(s, [{ text: 'Recompra y socios', options: { fontSize: 20, bold: true, color: C.text2, breakLine: true } }, { text: 'WhatsApp 18.6 %; quioscos y naturistas 22.8 %, con comisión de 25 a 40 %', options: { fontSize: 15, color: C.text1 } }], { x: 8.7, y: 4.45, w: 3.85, h: 1.4, valign: 'middle' });
  s.addNotes('Las cinco fases del canal según Osterwalder. Por indicación de la profesora, la venta física es el mejor escenario: el focus 1 mostró que sin prueba del niño no hay compra, y en el stand el niño prueba delante del padre. La compra se cierra en el stand (fase en rojo) y la recompra llega por WhatsApp con un recordatorio, sin suscripción. Unidades del año 1 (Excel, hoja Mensual): stands y carritos 19,565; ferias 8,100; WhatsApp 8,773; colegios 7,065; naturistas 3,720.');

  // =============== 10. SELECCIÓN DE CANAL ===============
  s = content(S5, 'TRABAJO DE CAMPO 5 · SELECCIÓN DEL CANAL', 'Elegimos la venta física en stands y carritos');
  s.addChart(pres.charts.DOUGHNUT, [{ name: 'Unidades', labels: ['Stands y carritos', 'WhatsApp (recompra)', 'Ferias y eventos', 'Quioscos escolares', 'Tiendas naturistas'], values: [19565, 8773, 8100, 7065, 3720] }],
    Object.assign(chartText(), { x: 0.4, y: 1.6, w: 5.3, h: 5.1, title: 'Unidades del año 1 por canal', holeSize: 55, chartColors: [H.accent1, H.accent2, H.accent3, H.accent4, H.accent5], showPercent: true, showValue: false, showLegend: true, legendPos: 'b', dataLabelColor: 'FFFFFF', dataLabelFontSize: 13, dataLabelFontBold: true }));
  const hdr = (t) => ({ text: t, options: { bold: true, color: C.background1, fill: { color: C.text2 }, align: 'center', fontSize: 12 } });
  const rowsT = [
    ['Stands y carritos', 5, 5, 3, 5, 5], ['Ferias y eventos', 5, 4, 3, 4, 5], ['WhatsApp (recompra)', 3, 5, 5, 3, 1], ['Quioscos escolares', 3, 3, 4, 4, 3], ['Tiendas naturistas', 2, 2, 4, 3, 2], ['Góndola de súper (año 2)', 1, 1, 1, 4, 1],
  ];
  const tbl = [[{ text: 'Canal', options: { bold: true, color: C.background1, fill: { color: C.text2 }, fontSize: 12 } }, hdr('Margen'), hdr('Control'), hdr('Entrada'), hdr('Alcance'), hdr('Prueba'), hdr('Total')]];
  rowsT.forEach((r, i) => {
    const tot = r.slice(1).reduce((a, b) => a + b, 0);
    const f = { color: i === 0 ? 'F6DCD5' : 'FFFFFF' };
    tbl.push([{ text: r[0], options: { bold: i === 0, fill: f, fontSize: 13 } }, ...r.slice(1).map(v => ({ text: String(v), options: { align: 'center', fill: f, fontSize: 14 } })), { text: String(tot), options: { align: 'center', bold: true, fill: f, color: i === 0 ? C.accent1 : C.text1, fontSize: 15 } }]);
  });
  s.addTable(tbl, { x: 6.0, y: 1.7, w: 6.73, colW: [2.23, 0.75, 0.75, 0.75, 0.75, 0.75, 0.75], rowH: 0.45, border: { type: 'solid', pt: 0.75, color: 'E8D8C4' }, color: C.text1, valign: 'middle', margin: 0.05 });
  T(s, 'Puntaje del equipo, de 1 a 5. Prueba = el niño prueba delante del padre.', { x: 6.0, y: 4.92, w: 6.73, h: 0.3, fontSize: 11, italic: true, color: C.accent2 });
  card(s, 6.0, 5.3, 6.73, 1.4, { fill: C.accent1 });
  T(s, [{ text: '23 de 25 puntos', options: { fontSize: 20, bold: true, breakLine: true } }, { text: 'Stands para que el niño pruebe y el padre compre; ferias en Navidad y campaña escolar; WhatsApp para volver a comprar.', options: { fontSize: 14 } }], { x: 6.3, y: 5.38, w: 6.2, h: 1.25, valign: 'middle', color: C.background1 });
  s.addNotes('Criterios: margen por brownie (contribución por unidad del Excel antes de alquiler y personal: stand S/1.87, feria S/1.93, WhatsApp S/0.86, quiosco S/0.72, naturista S/0.63), control del mensaje, costo de entrada, alcance del segmento y prueba del niño, que según el focus 1 es la condición para comprar. La góndola del supermercado se queda con 20 a 40 % y paga a 30-90 días: entra en el año 2.');

  // =============== 10b. PUNTOS DE VENTA ===============
  s = content(S5, 'TRABAJO DE CAMPO 5 · PUNTOS DE VENTA', 'Vendemos donde está la familia: malls, súper y ferias');
  const ptos = [
    ['FaStore', 'Malls de Lima Top', 'Jockey Plaza, Larcomar y La Rambla: programas para emprendedores'],
    ['FaShoppingCart', 'Supermercados', 'Carrito en la entrada de Wong o Vivanda, los fines de semana'],
    ['FaGift', 'Ferias de temporada', 'Navidad (Bazar CCL, Navi Fest) y campaña escolar'],
    ['FaSchool', 'Colegios y comunidad', 'Kermeses, cumpleaños y quioscos sin octógono'],
  ];
  for (let i = 0; i < 4; i++) {
    const x = 0.6, y = 1.7 + i * 1.25, w = 4.9, h = 1.1;
    card(s, x, y, w, h);
    await iconCircle(s, ptos[i][0], x + 0.2, y + 0.2, 0.7, i < 2 ? C.accent1 : C.text2, i < 2 ? 'FFFFFF' : H.accent5);
    T(s, [{ text: ptos[i][1], options: { bold: true, fontSize: 16, color: C.text2, breakLine: true } }, { text: ptos[i][2], options: { fontSize: 13, color: C.accent2 } }], { x: x + 1.1, y, w: w - 1.25, h, valign: 'middle' });
  }
  s.addChart(pres.charts.BAR, [
    { name: 'Stands y carritos', labels: MESES3, values: [450, 2160, 450, 1440, 1800, 1440, 1530, 1440, 1700, 2295, 2430, 2430] },
    { name: 'Ferias y eventos', labels: MESES3, values: [450, 1700, 150, 1000, 600, 600, 750, 600, 450, 600, 600, 600] },
    { name: 'WhatsApp', labels: MESES3, values: [150, 315, 1351, 210, 854, 840, 714, 798, 714, 753, 1013, 1061] },
    { name: 'Colegios y naturistas', labels: MESES3, values: [120, 180, 180, 240, 600, 900, 1125, 1260, 960, 1620, 1620, 1980] },
  ], Object.assign(chartText(), { x: 5.7, y: 1.6, w: 7.2, h: 5.1, barDir: 'col', barGrouping: 'stacked', title: 'Brownies vendidos al mes por canal (nov-2026 a oct-2027)', chartColors: [H.accent1, H.accent3, H.accent2, H.accent4], showValue: false, showLegend: true, legendPos: 'b', valAxisLabelFormatCode: '#,##0', barGapWidthPct: 40 }));
  s.addNotes('Puntos de venta (documento 08): programas para emprendedores de Jockey Plaza, Larcomar (El Mercadito del Emprendedor) y La Rambla San Borja; carrito en la entrada de Wong o Vivanda; ferias navideñas (Bazar CCL, Navi Fest) y de campaña escolar; kermeses y cumpleaños. Plan: 1 punto en noviembre, 2 de diciembre a julio y 3 desde agosto de 2027, solo fines de semana. Un punto lo atienden los socios; los demás, una impulsadora (S/90 por día). Alquiler supuesto: S/500 por punto al mes [POR CONFIRMAR].');

  // =============== 11. SECCIÓN TC6 ===============
  s = await section('TC6 · Relación e ingresos', '06', 'Relación con el cliente e ingresos', 'Tipos de relación · Captar, fidelizar y crecer · Fuentes de ingreso · Ventas del año 1', 'FaHandshake');
  s.addNotes('Trabajo de campo 6: relaciones con el cliente y los diferentes tipos de ingresos.');
  const S6 = 'TC6 · Relación e ingresos';

  // =============== 12. TIPOS DE RELACIÓN ===============
  s = content(S6, 'TRABAJO DE CAMPO 6 · RELACIÓN CON EL CLIENTE', 'Cara a cara en el stand, automática al recomprar');
  const rel = [
    ['FaComments', 'Asistencia personal', 'FUERTE', 'En el stand: degustación y consejo de sabores; luego por WhatsApp'],
    ['FaUserTie', 'Asistencia exclusiva', 'APOYO', 'Un socio a cargo de cada colegio y de cada naturista'],
    ['FaMobileAlt', 'Autoservicio', 'APOYO', 'Catálogo de WhatsApp y link de pago, sin esperar respuesta'],
    ['FaCalendarCheck', 'Servicio automático', 'FUERTE', 'Recordatorio de recompra por WhatsApp a los 12 días'],
    ['FaUsers', 'Comunidades', 'FUERTE', 'Mamá embajadora por salón y comunidad en Instagram'],
    ['FaLightbulb', 'Creación colectiva', 'APOYO', 'Los niños votan el sabor del mes en el stand'],
  ];
  for (let i = 0; i < 6; i++) {
    const col = i % 3, row = Math.floor(i / 3);
    const w = 3.9, h = 2.4, x = 0.6 + col * (w + 0.215), y = 1.7 + row * (h + 0.22);
    const strong = rel[i][2] === 'FUERTE';
    card(s, x, y, w, h);
    await iconCircle(s, rel[i][0], x + 0.3, y + 0.3, 0.75, strong ? C.accent1 : C.accent5, strong ? 'FFFFFF' : H.dk2);
    T(s, rel[i][1], { x: x + 1.2, y: y + 0.3, w: w - 1.35, h: 0.42, fontSize: 17, bold: true, color: C.text2 });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 1.2, y: y + 0.76, w: 0.95, h: 0.28, rectRadius: 0.14, fill: { color: strong ? C.accent1 : C.background2 }, line: { color: strong ? C.accent1 : C.accent5, width: 0.75 } });
    T(s, rel[i][2], { x: x + 1.2, y: y + 0.76, w: 0.95, h: 0.28, fontSize: 10, bold: true, align: 'center', valign: 'middle', color: strong ? C.background1 : C.accent2 });
    T(s, rel[i][3], { x: x + 0.3, y: y + 1.3, w: w - 0.6, h: 0.95, fontSize: 15, color: C.text1 });
  }
  s.addNotes('Los seis tipos de relación de Osterwalder y cómo los usa AndiBite. Las tres fuertes (asistencia personal por WhatsApp, recordatorio automático de recompra y comunidad de mamás embajadoras) sostienen la recompra; las de apoyo crecen con el volumen. Con los colegios y naturistas la relación es exclusiva: un socio responde por cada cuenta.');

  // =============== 13. CAPTAR, FIDELIZAR, CRECER ===============
  s = content(S6, 'TRABAJO DE CAMPO 6 · CICLO DE RELACIÓN', 'Captar, fidelizar y crecer con cada familia');
  const ciclo = [
    ['1 · CAPTAR', 'Que lo prueben', 'Degustación gratis en el stand y caja de 3 a S/12 para llevar', '80', 'brownies por día en cada punto de venta'],
    ['2 · FIDELIZAR', 'Que vuelvan', 'Recordatorio de recompra por WhatsApp y cambio de sabores en cada pedido', '35 %', 'de lo vendido en físico vuelve por WhatsApp'],
    ['3 · CRECER', 'Que nos recomienden', 'Mamá embajadora por salón y nuevos puntos de venta', '3', 'puntos de venta desde agosto de 2027'],
  ];
  for (let i = 0; i < 3; i++) {
    const w = 2.95, x = 0.6 + i * (w + 0.35), y = 1.7, h = 5.0;
    card(s, x, y, w, h);
    T(s, ciclo[i][0], { x: x + 0.3, y: y + 0.3, w: w - 0.6, h: 0.3, fontSize: 12, bold: true, color: C.accent1, charSpacing: 1 });
    T(s, ciclo[i][1], { x: x + 0.3, y: y + 0.65, w: w - 0.6, h: 0.8, fontSize: 21, bold: true, color: C.text2 });
    T(s, ciclo[i][2], { x: x + 0.3, y: y + 1.5, w: w - 0.6, h: 1.5, fontSize: 15, color: C.text1 });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 0.2, y: y + 3.2, w: w - 0.4, h: 1.6, rectRadius: 0.1, fill: { color: C.background2 }, line: { color: C.background2, width: 0 } });
    T(s, [{ text: ciclo[i][3], options: { fontSize: 34, bold: true, color: C.accent1, breakLine: true } }, { text: ciclo[i][4], options: { fontSize: 13, color: C.accent2 } }], { x: x + 0.4, y: y + 3.3, w: w - 0.8, h: 1.4, valign: 'middle' });
    if (i < 2) { await iconCircle(s, 'FaArrowRight', x + w - 0.05, y + 2.2, 0.45, C.accent3, H.dk2); }
  }
  await imgSlot(s, 3, 10.45, 1.7, 2.28, 5.0, 'Lonchera con AndiBite y fruta');
  s.addNotes('Captar: en el stand el niño prueba gratis delante del padre, que compra ahí mismo; la caja de 3 sabores (S/12) se lleva para la semana. Fidelizar: recordatorio por WhatsApp cuando el pack está por acabarse (unos 12 días después de la compra), sin suscripción ni compromiso. Crecer: mamá embajadora por salón y paso al pack de 12. Metas del modelo: 80 brownies por día en cada punto, 35 % de lo vendido en físico vuelve por WhatsApp y 3 puntos de venta desde agosto de 2027.' + pn(3, '9:16 · adjuntar la foto del empaque'));

  // =============== 14. TIPOS DE INGRESO ===============
  s = content(S6, 'TRABAJO DE CAMPO 6 · FUENTES DE INGRESO', 'Cuatro fuentes de ingreso, una sola línea de producto');
  const ing = [
    ['FaStore', 'Venta en stands y carritos', 'Unidades y packs en malls y supermercados', '46.4 %'],
    ['FaBirthdayCake', 'Ferias y eventos', 'Navidad, campaña escolar, kermeses y cumpleaños', '19.6 %'],
    ['FaWhatsapp', 'Recompra por WhatsApp', 'Packs de 6 y de 12 con delivery', '17.9 %'],
    ['FaSchool', 'Venta mayorista (B2B)', 'Quioscos escolares y tiendas naturistas, con factura', '16.1 %'],
  ];
  for (let i = 0; i < 4; i++) {
    const x = 0.6, y = 1.7 + i * 1.23, w = 6.3, h = 1.08;
    card(s, x, y, w, h);
    await iconCircle(s, ing[i][0], x + 0.2, y + 0.19, 0.7, i === 0 ? C.accent1 : C.text2, i === 0 ? 'FFFFFF' : H.accent5);
    T(s, [{ text: ing[i][1], options: { bold: true, fontSize: 16, color: C.text2, breakLine: true } }, { text: ing[i][2], options: { fontSize: 13, color: C.accent2 } }], { x: x + 1.1, y, w: 3.85, h, valign: 'middle' });
    T(s, [{ text: ing[i][3], options: { bold: true, fontSize: 24, color: C.accent1, breakLine: true } }, { text: 'de los ingresos', options: { fontSize: 10, color: C.accent2 } }], { x: x + 5.0, y, w: 1.2, h, valign: 'middle', align: 'right' });
  }
  const ph = (t) => ({ text: t, options: { bold: true, color: C.background1, fill: { color: C.text2 }, align: 'center', fontSize: 13 } });
  const prow = (c, a, b, d, hl) => [{ text: c, options: { bold: true, fontSize: 14, fill: { color: hl ? 'F6DCD5' : 'FFFFFF' } } }, ...[a, b, d].map(v => ({ text: v, options: { align: 'center', fontSize: 14, fill: { color: hl ? 'F6DCD5' : 'FFFFFF' }, bold: hl } }))];
  s.addTable([
    [{ text: 'Precio con IGV', options: { bold: true, color: C.background1, fill: { color: C.text2 }, fontSize: 13 } }, ph('Unidad'), ph('Pack de 6'), ph('Pack de 12')],
    prow('Stand y ferias', 'S/5.00', 'S/26.00', 'S/48.00', true),
    prow('WhatsApp', 'S/4.00', 'S/24.90', 'S/46.90'),
    prow('Quiosco escolar', 'S/4.00*', '–', '–'),
    prow('Tienda naturista', '–', 'S/28.90*', '–'),
  ], { x: 7.2, y: 1.7, w: 5.53, colW: [1.93, 1.1, 1.25, 1.25], rowH: 0.55, border: { type: 'solid', pt: 0.75, color: 'E8D8C4' }, color: C.text1, valign: 'middle', margin: 0.06 });
  card(s, 7.2, 4.75, 5.53, 1.95, { fill: C.background2, noShadow: true });
  T(s, [
    { text: 'Precio fijo por lista', options: { bold: true, fontSize: 15, color: C.text2, breakLine: true } },
    { text: 'En el stand se cobra algo más porque hay alquiler y personal. El pack de 12 premia la compra grande.', options: { fontSize: 14, breakLine: true } },
    { text: '* Precio al público. AndiBite recibe S/3.00 en el quiosco y S/17.34 en la naturista.', options: { fontSize: 11, italic: true, color: C.accent2 } },
  ], { x: 7.45, y: 4.85, w: 5.05, h: 1.75, valign: 'middle', paraSpaceAfter: 4 });
  s.addNotes('Tipos de ingreso (Osterwalder): venta de activos en stands y carritos, en ferias y eventos, y por WhatsApp; y venta mayorista B2B. Porcentajes sobre las ventas con IGV del año 1 (S/198,748), hoja Proyeccion del Excel. Mecanismo de precio: fijo por lista, con descuento por volumen. Precios confirmados por el equipo el 9 de octubre de 2026.');

  // =============== 15. INGRESOS EN NÚMEROS ===============
  s = content(S6, 'TRABAJO DE CAMPO 6 · VENTAS DEL AÑO 1', 'S/198,700 en el primer año de ventas');
  s.addChart(pres.charts.DOUGHNUT, [{ name: 'Ingreso', labels: ['Unidad', 'Pack de 6', 'Pack de 12'], values: [111749, 72799, 14199] }],
    Object.assign(chartText(), { x: 0.4, y: 1.6, w: 4.4, h: 4.45, title: 'Ingresos por presentación', holeSize: 55, chartColors: [H.accent1, H.accent2, H.accent3], showPercent: true, showValue: false, showLegend: true, legendPos: 'b', dataLabelColor: 'FFFFFF', dataLabelFontSize: 13, dataLabelFontBold: true }));
  const meses = MESES3;
  s.addChart(pres.charts.BAR, [{ name: 'Ventas con IGV', labels: meses, values: [5239, 20148, 8851, 13139, 16606, 15752, 17053, 16654, 15919, 21578, 23271, 24539] }],
    Object.assign(chartText(), { x: 5.0, y: 1.6, w: 7.9, h: 4.45, barDir: 'col', title: 'Ventas mensuales con IGV (noviembre 2026 a octubre 2027)', chartColors: [H.accent2], showValue: true, dataLabelPosition: 'outEnd', dataLabelFormatCode: '0.0,"k"', valAxisLabelFormatCode: '#,##0', showLegend: false, barGapWidthPct: 45, dataLabelFontSize: 11 }));
  const strip = [['47,223', 'brownies vendidos'], ['3,044 + 301', 'packs de 6 y de 12'], ['S/4.21', 'de ingreso promedio por brownie']];
  strip.forEach((t, i) => {
    const w = 3.9, x = 0.6 + i * (w + 0.215);
    card(s, x, 6.12, w, 0.72, { r: 0.1 });
    T(s, [{ text: t[0] + '  ', options: { bold: true, fontSize: 20, color: C.accent1 } }, { text: t[1], options: { fontSize: 13, color: C.accent2 } }], { x: x + 0.25, y: 6.12, w: w - 0.4, h: 0.72, valign: 'middle' });
  });
  s.addNotes('Datos del Excel (hojas Proyeccion y Mensual). En el stand 6 de cada 10 brownies se venden sueltos, por eso la unidad trae el 56 % de los ingresos. Diciembre sube por las ferias navideñas; enero baja por vacaciones; desde marzo suben los colegios y en agosto se abre el tercer punto de venta.');

  // =============== 16. SECCIÓN TC7 ===============
  s = await section('TC7 · Canvas', '07', 'Socios, recursos, actividades y costos', 'Socios clave · Recursos y actividades · Estructura de costos · Punto de equilibrio · Modelo Canvas', 'FaThLarge');
  s.addNotes('Trabajo de campo 7: asociaciones, recursos, actividades y costos; presentación del modelo Canvas.');
  const S7 = 'TC7 · Canvas';

  // =============== 17. SOCIOS CLAVE ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · SOCIOS CLAVE', 'Socios que nos dejan crecer sin planta propia');
  s.addShape(pres.shapes.OVAL, { x: 5.42, y: 2.95, w: 2.5, h: 2.5, fill: { color: C.text2 }, line: { color: C.accent5, width: 3 } });
  s.addImage({ path: 'img/logo_light.png', x: 5.77, y: 3.62, w: 1.8, h: 0.62 });
  T(s, 'AndiBite S.A.C.', { x: 5.42, y: 4.4, w: 2.5, h: 0.35, fontSize: 13, bold: true, align: 'center', color: C.accent5 });
  const soc = [
    ['FaIndustry', 'Planta maquiladora', 'MAKING, Panificadora Unión, INDDA', 'Economía de escala'],
    ['FaFlask', 'Laboratorio INACAL', 'SAT Perú y La Molina Calidad Total', 'Reduce el riesgo'],
    ['FaBoxOpen', 'Proveedores y servicios', 'Sangrecita con SENASA, empaques y pasarela', 'Recursos clave'],
    ['FaStore', 'Malls y supermercados', 'Jockey, Larcomar, La Rambla, Wong y Vivanda', 'Puntos de venta'],
    ['FaCalendarCheck', 'Ferias, colegios y naturistas', 'Organizadores, concesionarios y tiendas', 'Llegada al cliente'],
    ['FaUserMd', 'Prescriptores', 'Nutricionista colegiada y 20 pediatras', 'Confianza'],
  ];
  for (let i = 0; i < 6; i++) {
    const left = i < 3, k = i % 3;
    const w = 4.3, h = 1.45, x = left ? 0.6 : 8.43, y = 1.7 + k * 1.68;
    const cy = y + h / 2;
    s.addShape(pres.shapes.LINE, left ? { x: x + w, y: cy, w: 5.42 + 1.25 - (x + w) - 0.9, h: 4.2 - cy, line: { color: C.accent5, width: 1.5, dashType: 'dash' } }
      : { x: 6.67 + 0.9, y: Math.min(cy, 4.2), w: x - 7.57, h: Math.abs(4.2 - cy), flipV: cy < 4.2, line: { color: C.accent5, width: 1.5, dashType: 'dash' } });
    card(s, x, y, w, h);
    await iconCircle(s, soc[i][0], x + 0.2, y + 0.25, 0.65, C.accent1, 'FFFFFF');
    T(s, soc[i][1], { x: x + 1.05, y: y + 0.18, w: w - 1.2, h: 0.38, fontSize: 16, bold: true, color: C.text2 });
    T(s, soc[i][2], { x: x + 1.05, y: y + 0.56, w: w - 1.2, h: 0.4, fontSize: 13, color: C.text1 });
    T(s, soc[i][3], { x: x + 1.05, y: y + 1.0, w: w - 1.2, h: 0.3, fontSize: 11, bold: true, italic: true, color: C.accent4 });
  }
  s.addNotes('Socios clave del documento 07. La planta maquiladora (con HACCP o PGH) produce y empaca, así que no necesitamos planta propia ni su certificación; la S.A.C. es titular del registro sanitario y la planta, fabricante. Motivos de alianza según Osterwalder: optimización y economía de escala (maquila), reducción de riesgo (laboratorio), adquisición de recursos (proveedores). Tarifa de maquila supuesta S/0.50 por unidad [POR CONFIRMAR con MAKING y Panificadora Unión].');

  // =============== 18. RECURSOS Y ACTIVIDADES ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · RECURSOS Y ACTIVIDADES CLAVE', 'Lo que tenemos y lo que hacemos cada semana');
  T(s, 'Recursos clave', { x: 0.6, y: 1.65, w: 5.9, h: 0.4, fontSize: 20, bold: true, color: C.text2 });
  const rec = [
    ['FaBox', 'Físicos', '2 carritos de exhibición, equipos y stock (S/7,338 en activos)'],
    ['FaBrain', 'Intelectuales', 'Fórmula de 3 sabores, marca y registro sanitario'],
    ['FaUsers', 'Humanos', '5 socios que atienden un punto e impulsadoras para el resto'],
    ['FaCoins', 'Financieros', 'S/40,644 de inversión: socios y préstamo'],
  ];
  for (let i = 0; i < 4; i++) {
    const col = i % 2, row = Math.floor(i / 2), w = 2.9, h = 2.12, x = 0.6 + col * (w + 0.2), y = 2.2 + row * (h + 0.22);
    card(s, x, y, w, h);
    await iconCircle(s, rec[i][0], x + 0.25, y + 0.25, 0.65, C.accent2, H.accent5);
    T(s, rec[i][1], { x: x + 1.05, y: y + 0.25, w: w - 1.2, h: 0.65, valign: 'middle', fontSize: 17, bold: true, color: C.text2 });
    T(s, rec[i][2], { x: x + 0.25, y: y + 1.05, w: w - 0.45, h: 0.95, fontSize: 14, color: C.text1 });
  }
  T(s, 'Actividades clave', { x: 6.83, y: 1.65, w: 5.9, h: 0.4, fontSize: 20, bold: true, color: C.text2 });
  const act = [
    ['I+D y prueba con niños', '3 rondas de fórmula, 20 niños por sabor'],
    ['Maquila y calidad por lote', 'Lote piloto y análisis microbiológico de S/250'],
    ['Calidad y documentos al día', 'Registro sanitario, rotulado y carnés vigentes'],
    ['Venta en stands y ferias', 'Puntos de fin de semana, degustación y cobro digital'],
    ['Recompra y comunidad', 'WhatsApp, "La revelación" y mamás embajadoras'],
  ];
  act.forEach((a, i) => {
    const x = 6.83, y = 2.2 + i * 0.9, w = 5.9, h = 0.78;
    card(s, x, y, w, h, { r: 0.1 });
    s.addShape(pres.shapes.OVAL, { x: x + 0.18, y: y + 0.14, w: 0.5, h: 0.5, fill: { color: C.accent1 }, line: { color: C.accent1, width: 0 } });
    T(s, String(i + 1), { x: x + 0.18, y: y + 0.14, w: 0.5, h: 0.5, align: 'center', valign: 'middle', fontSize: 16, bold: true, color: C.background1 });
    T(s, [{ text: a[0], options: { bold: true, fontSize: 15, color: C.text2, breakLine: true } }, { text: a[1], options: { fontSize: 12, color: C.accent2 } }], { x: x + 0.85, y, w: w - 1.0, h, valign: 'middle' });
  });
  s.addNotes('Recursos clave en los cuatro tipos de Osterwalder: físicos, intelectuales, humanos y financieros. La inversión inicial de S/40,644 está en la hoja Inversion del Excel: S/25,000 de los socios y un préstamo de S/16,000 en 24 cuotas. Actividades clave: producción a través de la maquila, solución de problemas (I+D, regulación) y la red de venta directa.');

  // =============== 19. COSTO DEL PACK ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · ESTRUCTURA DE COSTOS', 'El pack de 6 cuesta S/9.90 y en el stand deja S/9.51');
  s.addChart(pres.charts.BAR, [{ name: 'S/ por pack', labels: ['Merma', 'Calidad, transporte y almacén', 'Empaque y etiquetas', 'Maquila', 'Insumos'], values: [0.42, 1.06, 1.79, 3.00, 3.63] }],
    Object.assign(chartText(), { x: 0.4, y: 1.6, w: 6.3, h: 5.1, barDir: 'bar', title: 'Costo de producción del pack de 6 (S/ sin IGV)', chartColors: [H.accent2], showValue: true, dataLabelPosition: 'outEnd', dataLabelFormatCode: '"S/"0.00', valAxisHidden: true, valGridLine: { style: 'none' }, showLegend: false, barGapWidthPct: 40, dataLabelFontSize: 13 }));
  s.addChart(pres.charts.BAR, [
    { name: 'Producción', labels: ['Pack de 6 en stand'], values: [9.90] },
    { name: 'Degustación, pasarela y renta', labels: ['Pack de 6 en stand'], values: [2.62] },
    { name: 'Contribución', labels: ['Pack de 6 en stand'], values: [9.51] },
  ], Object.assign(chartText(), { x: 6.9, y: 1.6, w: 3.3, h: 5.1, barDir: 'col', barGrouping: 'stacked', title: 'A dónde va el precio', chartColors: [H.accent2, H.accent5, H.accent1], showValue: true, dataLabelPosition: 'ctr', dataLabelFormatCode: '"S/"0.00', dataLabelColor: 'FFFFFF', dataLabelFontBold: true, valAxisHidden: true, valGridLine: { style: 'none' }, showLegend: true, legendPos: 'b', legendFontSize: 11, barGapWidthPct: 30 }));
  const cst = [['55 %', 'margen bruto del pack en el stand'], ['S/1.65', 'cuesta producir cada brownie'], ['0', 'plantas propias: pagamos por unidad hecha']];
  cst.forEach((c, i) => {
    const x = 10.4, y = 1.7 + i * 1.7, w = 2.33, h = 1.5;
    card(s, x, y, w, h);
    T(s, [{ text: c[0], options: { bold: true, fontSize: 28, color: C.accent1, breakLine: true } }, { text: c[1], options: { fontSize: 12, color: C.text1 } }], { x: x + 0.2, y: y + 0.1, w: w - 0.35, h: h - 0.2, valign: 'middle' });
  });
  s.addNotes('Hoja Costeo del Excel, opción B (cada brownie en bolsita, dentro del doypack). Precio en stand S/26.00 con IGV = S/22.03 sin IGV. Producción S/9.90; degustación (1 brownie por cada 10 vendidos), movilidad, pasarela de 3 % y renta de 1 %: S/2.62; contribución S/9.51 por pack, antes del alquiler del espacio y de la impulsadora. La maquila (S/0.50 por brownie) y el polvo de sangrecita están por confirmar: son el 40 % del costo.');

  // =============== 19b. DOCUMENTOS E INVERSIÓN ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · INVERSIÓN INICIAL', 'Todos los documentos para vender, pagados desde el inicio');
  const docs = [['Constitución de la S.A.C. (notaría del CDE)', 'S/150'], ['RUC, REMYPE y libro de reclamaciones', 'S/0'], ['Marca en INDECOPI, clase 30', 'S/401'], ['Revisión legal del contrato de maquila', 'S/400'], ['Análisis para el registro sanitario (3 sabores)', 'S/1,800'], ['Perfil nutricional y hierro', 'S/1,125'], ['Estudio de vida útil', 'S/1,050'], ['Etiqueta (rotulado y Ley 30021)', 'S/650'], ['Registro sanitario DIGESA (tasa)', 'S/0'], ['Carnés de sanidad y póliza para stands', 'S/675']];
  const dh = (t, al) => ({ text: t, options: { bold: true, color: C.background1, fill: { color: C.text2 }, fontSize: 13, align: al } });
  s.addTable([[dh('Documento o permiso', 'left'), dh('Costo', 'right')], ...docs.map(d => [{ text: d[0], options: { fontSize: 13, fill: { color: 'FFFFFF' } } }, { text: d[1], options: { fontSize: 13, align: 'right', fill: { color: 'FFFFFF' } } }]),
    [{ text: 'Total documentos y permisos', options: { bold: true, fontSize: 14, fill: { color: 'F6DCD5' } } }, { text: 'S/6,251', options: { bold: true, fontSize: 14, align: 'right', color: C.accent1, fill: { color: 'F6DCD5' } } }]],
    { x: 0.6, y: 1.65, w: 6.4, colW: [5.2, 1.2], rowH: 0.4, border: { type: 'solid', pt: 0.75, color: 'E8D8C4' }, color: C.text1, valign: 'middle', margin: 0.06 });
  s.addChart(pres.charts.DOUGHNUT, [{ name: 'Inversión', labels: ['Arranque', 'Equipos y 2 carritos', 'Documentos y permisos', 'Desarrollo del producto', 'Imprevistos', 'Marca'], values: [18369, 7338, 6251, 3741, 3695, 1250] }],
    Object.assign(chartText(), { x: 7.2, y: 1.55, w: 5.7, h: 4.05, title: 'Inversión inicial: S/40,644', holeSize: 50, chartColors: [H.accent2, H.accent3, H.accent1, H.accent4, H.accent5, H.accent6], showPercent: true, showValue: false, showLegend: true, legendPos: 'b', legendFontSize: 10, dataLabelColor: 'FFFFFF', dataLabelFontSize: 11, dataLabelFontBold: true }));
  card(s, 7.4, 5.7, 5.33, 1.0, { fill: C.text2 });
  T(s, [{ text: 'Socios S/25,000 · préstamo S/16,000', options: { bold: true, fontSize: 16, color: C.accent3, breakLine: true } }, { text: '24 cuotas de S/898 (TEA 35 %, por confirmar)', options: { fontSize: 13, color: C.background1 } }], { x: 7.65, y: 5.7, w: 4.9, h: 1.0, valign: 'middle' });
  s.addNotes('Hoja Inversion del Excel. Los documentos se consideran listos desde el primer día de ventas (noviembre de 2026): su costo se paga una sola vez dentro de la inversión inicial y no limita la proyección. La póliza (S/600) es una hipótesis; la tasa del registro sanitario es S/0 con el TUPA 2026. El arranque incluye empaque (S/3,030), stock de noviembre y diciembre (S/4,135), marketing de lanzamiento (S/3,204) y capital de trabajo (S/8,000).');

  // =============== 20. FIJOS Y EQUILIBRIO ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · PUNTO DE EQUILIBRIO', 'Con 2,215 brownies al mes cubrimos todos los costos');
  s.addChart(pres.charts.DOUGHNUT, [{ name: 'Costos', labels: ['Alquiler de stands', 'Impulsadoras', 'Marketing', 'Administración', 'Ferias pagadas', 'Depreciación'], values: [1042, 908, 900, 700, 456, 204] }],
    Object.assign(chartText(), { x: 0.4, y: 1.6, w: 4.8, h: 5.1, title: 'Costos de operar al mes (promedio): S/4,209', holeSize: 55, chartColors: [H.accent1, H.accent6, H.accent2, H.accent3, H.accent5, H.accent4], showValue: true, showPercent: false, dataLabelFormatCode: '"S/"#,##0', showLegend: true, legendPos: 'b', dataLabelColor: 'FFFFFF', dataLabelFontSize: 11, dataLabelFontBold: true }));
  const und = [1170, 4355, 2131, 2890, 3854, 3780, 4119, 4098, 3824, 5268, 5663, 6071];
  s.addChart([
    { type: pres.charts.BAR, data: [{ name: 'Brownies vendidos', labels: meses, values: und }], options: { chartColors: [H.accent2], barGapWidthPct: 45 } },
    { type: pres.charts.LINE, data: [{ name: 'Punto de equilibrio (2,215)', labels: meses, values: und.map(() => 2215) }], options: { chartColors: [H.accent1], lineSize: 3, lineDataSymbol: 'none' } },
  ], Object.assign(chartText(), { x: 5.4, y: 1.6, w: 7.5, h: 5.1, title: 'Brownies al mes frente al punto de equilibrio', showLegend: true, legendPos: 'b', valAxisLabelFormatCode: '#,##0' }));
  s.addNotes('Costos fijos (hoja Supuestos): administración S/700, marketing S/900 y depreciación de equipos y carritos S/204; el asistente pasa a S/0 porque los socios atienden pedidos. Stands y ferias del año (hoja Mensual): alquiler S/12,500, impulsadoras S/10,890 y 3 ferias pagadas S/5,475. Cada brownie deja S/0.81 después de stands y ferias; el equilibrio es de 2,215 brownies al mes (369 packs de 6 equivalentes). Noviembre (un solo punto) y enero quedan debajo.');

  // =============== 21. RESULTADO ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · RESULTADO DEL AÑO 1', 'Solo noviembre y febrero cierran en rojo');
  s.addChart(pres.charts.BAR, [{ name: 'Resultado operativo', labels: MESES3, values: [-386, 185, 105, -475, 2060, 1590, 2098, 1809, 1627, 2318, 2795, 3091] }],
    Object.assign(chartText(), { x: 0.4, y: 1.6, w: 8.5, h: 4.95, barDir: 'col', title: 'Resultado operativo mensual (S/)', chartColors: [H.accent4], invertedColors: [H.accent1], showValue: true, dataLabelPosition: 'outEnd', dataLabelFormatCode: '#,##0', valAxisLabelFormatCode: '#,##0', showLegend: false, barGapWidthPct: 40, dataLabelFontSize: 11 }));
  T(s, 'Antes de sueldos de los socios, intereses e impuesto a la renta. La caja nunca baja de S/5,009, ya con la cuota del préstamo.', { x: 0.6, y: 6.58, w: 8.3, h: 0.3, fontSize: 11, italic: true, color: C.accent2 });
  const kpi = [['S/198,748', 'ventas con IGV'], ['S/16,816', 'resultado operativo (10.0 %)'], ['369 packs', 'de 6 al mes para no perder'], ['S/40,644', 'de inversión, con todos los documentos']];
  kpi.forEach((k, i) => {
    const x = 9.1, y = 1.7 + i * 1.27, w = 3.63, h = 1.1;
    card(s, x, y, w, h, { fill: i === 1 ? C.accent1 : C.background1 });
    T(s, [{ text: k[0], options: { bold: true, fontSize: 24, color: i === 1 ? C.background1 : C.accent1, breakLine: true } }, { text: k[1], options: { fontSize: 13, color: i === 1 ? C.background1 : C.accent2 } }], { x: x + 0.25, y, w: w - 0.4, h, valign: 'middle' });
  });
  s.addNotes('Resultado operativo mensual de la opción B (hoja Mensual del Excel). Noviembre pierde S/386 (un solo punto) y febrero S/475 (feria pagada de campaña escolar); desde marzo, con colegios y dos puntos, todos los meses ganan. Total del año: S/16,816, margen de 10 % sobre las ventas sin IGV. La inversión de S/40,644 no se recupera dentro del año 1: falta S/23,828. La caja cierra el año en S/16,844.');

  // =============== 22. CANVAS ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · MODELO CANVAS', 'El modelo de negocio de AndiBite en una página');
  const cw5 = (12.13 - 4 * 0.08) / 5, top = 1.55, th = 3.8, half = (th - 0.08) / 2;
  const colX = (i) => 0.6 + i * (cw5 + 0.08);
  const blocks = [
    ['FaHandshake', 'Socios clave', colX(0), top, cw5, th, ['Planta maquiladora con HACCP', 'Malls, Wong y Vivanda', 'Laboratorio INACAL', 'Sangrecita con SENASA', 'Ferias, colegios y naturistas']],
    ['FaCogs', 'Actividades clave', colX(1), top, cw5, half, ['I+D y prueba con niños', 'Maquila y calidad por lote', 'Venta en stands y ferias', 'Recompra por WhatsApp']],
    ['FaKey', 'Recursos clave', colX(1), top + half + 0.08, cw5, half, ['Fórmula de 3 sabores', 'Marca y registro sanitario', '2 carritos y 5 socios', 'S/40,644 de inversión']],
    ['FaGift', 'Propuesta de valor', colX(2), top, cw5, th, ['Mini brownie de 20 g con sangrecita', 'Hierro medido por lote', 'Sin octógono', '3 sabores en un pack', 'Se prueba en el stand']],
    ['FaHeart', 'Relación con clientes', colX(3), top, cw5, half, ['Degustación en el stand', 'Asistencia por WhatsApp', 'Recordatorio de recompra', 'Mamá embajadora']],
    ['FaTruck', 'Canales', colX(3), top + half + 0.08, cw5, half, ['Stands y carritos 41 %', 'WhatsApp 19 %', 'Ferias 17 %', 'Colegios y naturistas 23 %']],
    ['FaUsers', 'Segmentos', colX(4), top, cw5, th, ['Padres A/B de 32 a 45 años', 'Hijos de 4 a 11 en colegio privado', '46,000 hogares en Lima Top y Moderna', 'B2B: quioscos y naturistas']],
    ['FaCalculator', 'Estructura de costos', colX(0), top + th + 0.08, cw5 * 2.5 + 0.08 * 2, 1.42, ['Producción S/1.65 por brownie · fijos S/1,804 al mes', 'Stands y ferias S/28,865 al año · equilibrio 2,215 brownies al mes']],
    ['FaCoins', 'Fuentes de ingreso', colX(0) + cw5 * 2.5 + 0.08 * 3, top + th + 0.08, 12.13 - (cw5 * 2.5 + 0.08 * 3), 1.42, ['Stand: unidad S/5.00 · pack de 6 S/26.00 · WhatsApp S/24.90', 'Año 1: S/198,748 con IGV · resultado S/16,816']],
  ];
  for (const b of blocks) {
    const [ic, name, x, y, w, h, items] = b;
    const vp = name === 'Propuesta de valor';
    card(s, x, y, w, h, { r: 0.08, fill: vp ? C.accent1 : C.background1 });
    s.addImage({ data: await icon(ic, vp ? 'FFFFFF' : H.accent1), x: x + 0.12, y: y + 0.12, w: 0.28, h: 0.28 });
    T(s, name.toUpperCase(), { x: x + 0.48, y: y + 0.1, w: w - 0.55, h: 0.32, valign: 'middle', fontSize: 11, bold: true, color: vp ? C.background1 : C.text2, charSpacing: 1 });
    T(s, items.map((t, j) => ({ text: t, options: { bullet: { indent: 10 }, breakLine: j < items.length - 1 } })), { x: x + 0.12, y: y + 0.5, w: w - 0.22, h: h - 0.58, fontSize: 13, paraSpaceAfter: 4, color: vp ? C.background1 : C.text1 });
  }
  T(s, '"Hierro medido. Sabor a brownie."', { x: colX(2) + 0.12, y: top + th - 0.65, w: cw5 - 0.24, h: 0.55, fontSize: 13, bold: true, italic: true, color: C.accent3 });
  s.addNotes('Modelo Canvas con los nueve bloques de Osterwalder y Pigneur, actualizado con la venta física como canal principal, los documentos dentro de la inversión inicial y el costeo con maquila. El detalle de cada bloque está en las diapositivas anteriores y en el documento 04-reformulacion/07.');

  // =============== 23. SECCIÓN TC8 ===============
  s = await section('TC8 · Propuesta de valor', '08', 'Mapa de propuesta de valor', 'Perfil del cliente · Mapa de valor · Encaje dolor-aliviador · Frente a la competencia', 'FaGift');
  s.addNotes('Trabajo de campo 8: mapa de propuesta de valor (Value Proposition Canvas).');
  const S8 = 'TC8 · Propuesta de valor';

  // =============== 24. VPC ===============
  s = content(S8, 'TRABAJO DE CAMPO 8 · MAPA DE PROPUESTA DE VALOR', 'Lo que ofrecemos encaja con lo que vive el cliente');
  const sq = { x: 0.7, y: 1.6, d: 4.9 };
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: sq.x, y: sq.y, w: sq.d, h: sq.d, rectRadius: 0.1, fill: { color: C.background1 }, line: { color: C.accent2, width: 2 }, shadow: sh() });
  s.addShape(pres.shapes.LINE, { x: sq.x + sq.d / 2, y: sq.y, w: 0, h: sq.d, line: { color: C.accent2, width: 1.5 } });
  s.addShape(pres.shapes.LINE, { x: sq.x + sq.d / 2, y: sq.y + sq.d / 2, w: sq.d / 2, h: 0, line: { color: C.accent2, width: 1.5 } });
  const sect = (x, y, w, h, ttl, items, iconName, hex) => [x, y, w, h, ttl, items, iconName, hex];
  const vm = [
    sect(sq.x + 0.15, sq.y + 0.2, 2.2, 4.5, 'Productos y servicios', ['Pack de 6 (S/26 en stand)', 'Pack de 12 "Semana completa"', 'Caja degustación de 3', 'Stand con degustación gratis'], 'FaBoxOpen', H.accent2),
    sect(sq.x + sq.d / 2 + 0.15, sq.y + 0.2, 2.2, 2.2, 'Creadores de alegrías', ['El niño pide su sabor', 'Hierro en mg y QR del lote', 'Origen andino peruano'], 'FaStar', H.accent4),
    sect(sq.x + sq.d / 2 + 0.15, sq.y + sq.d / 2 + 0.2, 2.2, 2.2, 'Aliviadores de dolor', ['Cacao que esconde la sangrecita', 'Menos de 10 g de azúcar', 'Porción sellada, sin frío'], 'FaFirstAid', H.accent1),
  ];
  const ci = { x: 7.85, y: 1.6, d: 4.9 }, cxm = ci.x + ci.d / 2, cym = ci.y + ci.d / 2;
  s.addShape(pres.shapes.OVAL, { x: ci.x, y: ci.y, w: ci.d, h: ci.d, fill: { color: C.background1 }, line: { color: C.accent1, width: 2 }, shadow: sh() });
  s.addShape(pres.shapes.LINE, { x: cxm, y: ci.y, w: 0, h: ci.d, line: { color: C.accent1, width: 1.5 } });
  s.addShape(pres.shapes.LINE, { x: ci.x, y: cym, w: ci.d / 2, h: 0, line: { color: C.accent1, width: 1.5 } });
  const cp = [
    sect(ci.x + 0.55, ci.y + 0.55, 1.85, 1.8, 'Alegrías', ['Que el niño lo pida', 'Ver el dato, no la promesa', 'Que no pese en el bolsillo'], 'FaSmile', H.accent4),
    sect(ci.x + 0.55, cym + 0.12, 1.85, 1.8, 'Dolores', ['Lo sano regresa intacto', 'Octógonos y desconfianza', 'Se acaba la variedad'], 'FaFrown', H.accent1),
    sect(cxm + 0.15, ci.y + 0.95, 2.0, 3.2, 'Trabajos del cliente', ['Darle hierro sin pelear', 'Lonchera variada en minutos', 'Cumplir la lonchera del colegio', 'Sentirse buen padre o madre'], 'FaClipboardCheck', H.accent2),
  ];
  for (const z of [...vm, ...cp]) {
    const [x, y, w, h, ttl, items, ic, hex] = z;
    s.addImage({ data: await icon(ic, hex), x, y, w: 0.3, h: 0.3 });
    T(s, ttl, { x: x + 0.38, y: y - 0.02, w: w - 0.38, h: 0.36, valign: 'middle', fontSize: 12, bold: true, color: C.text2 });
    T(s, items.map((t, j) => ({ text: t, options: { bullet: { indent: 10 }, breakLine: j < items.length - 1 } })), { x, y: y + 0.42, w, h: h - 0.42, fontSize: 12, paraSpaceAfter: 4 });
  }
  s.addShape(pres.shapes.LEFT_RIGHT_ARROW, { x: 5.85, y: 3.72, w: 1.75, h: 0.66, fill: { color: C.accent3 }, line: { color: C.accent3, width: 0 } });
  T(s, 'Encaje', { x: 5.85, y: 3.72, w: 1.75, h: 0.66, align: 'center', valign: 'middle', fontSize: 14, bold: true, color: C.text1 });
  T(s, 'MAPA DE VALOR · ANDIBITE', { x: sq.x, y: 6.62, w: sq.d, h: 0.3, fontSize: 11, bold: true, align: 'center', color: C.accent2, charSpacing: 1 });
  T(s, 'PERFIL DEL CLIENTE · CLAUDIA Y RODRIGO', { x: ci.x, y: 6.62, w: ci.d, h: 0.3, fontSize: 11, bold: true, align: 'center', color: C.accent1, charSpacing: 1 });
  s.addNotes('Value Proposition Canvas de Osterwalder. A la derecha, el perfil del cliente: trabajos, dolores y alegrías, con evidencia de las 10 entrevistas, el focus 1 y datos secundarios (Ipsos 2025, Kantar 2025, ENDES). A la izquierda, el mapa de valor: productos y servicios, aliviadores de dolor y creadores de alegrías. El encaje se detalla en la siguiente diapositiva.');

  // =============== 25. ENCAJE ===============
  s = content(S8, 'TRABAJO DE CAMPO 8 · ENCAJE', 'Cada dolor tiene su aliviador');
  T(s, 'DOLOR DEL CLIENTE', { x: 0.6, y: 1.6, w: 4, h: 0.3, fontSize: 12, bold: true, color: C.accent6, charSpacing: 1 });
  T(s, 'ALIVIADOR ANDIBITE', { x: 6.8, y: 1.6, w: 4, h: 0.3, fontSize: 12, bold: true, color: C.text2, charSpacing: 1 });
  T(s, 'EVIDENCIA', { x: 10.95, y: 1.6, w: 1.78, h: 0.3, fontSize: 12, bold: true, color: C.accent2, charSpacing: 1 });
  const fit = [
    ['Lo saludable regresa intacto', 'Cacao y canela esconden la sangrecita', 'Entrevistas y focus 1'],
    ['El octógono contradice lo saludable', 'Sin octógono: menos de 10 g de azúcar', '83 % · Ipsos 2025'],
    ['No confío en lo envasado', 'Hierro en mg y QR al laboratorio', '42 % · Kantar 2025'],
    ['El jueves ya no sé qué mandar', 'Tres sabores en el mismo pack', 'Entrevistas'],
    ['La mochila malogra la comida', 'Porción sellada que no necesita frío', 'Entrevistas'],
  ];
  for (let i = 0; i < 5; i++) {
    const y = 2.0 + i * 0.93, h = 0.78;
    card(s, 0.6, y, 5.0, h, { r: 0.39 });
    await iconCircle(s, 'FaFrown', 0.72, y + 0.14, 0.5, C.accent6, 'FFFFFF');
    T(s, fit[i][0], { x: 1.35, y, w: 4.15, h, valign: 'middle', fontSize: 15, color: C.text1 });
    s.addShape(pres.shapes.RIGHT_ARROW, { x: 5.78, y: y + 0.2, w: 0.85, h: 0.38, fill: { color: C.accent3 }, line: { color: C.accent3, width: 0 } });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.8, y, w: 4.0, h, rectRadius: 0.39, fill: { color: C.text2 }, line: { color: C.text2, width: 0 } });
    await iconCircle(s, 'FaCheck', 6.92, y + 0.14, 0.5, C.accent4, 'FFFFFF');
    T(s, fit[i][1], { x: 7.55, y, w: 3.2, h, valign: 'middle', fontSize: 15, bold: true, color: C.background1 });
    T(s, fit[i][2], { x: 10.95, y, w: 1.78, h, valign: 'middle', fontSize: 12, italic: true, color: C.accent2 });
  }
  s.addNotes('Encaje problema-solución. Evidencias: rechazo de la sangrecita visible en las entrevistas ("olía feo", "parecía carbón"); 83 % cambia su compra por los octógonos (Ipsos Perú, 21/02/2025); 42 % desconfía de que un envasado sea saludable (Kantar, 2025); "el jueves ya no sé qué mandar" y la mochila que malogra la comida (entrevistas). El "sin octógono" solo se imprime cuando el laboratorio lo confirme.');

  // =============== 26. COMPETENCIA ===============
  s = content(S8, 'TRABAJO DE CAMPO 8 · FRENTE A LA COMPETENCIA', 'Precio de Fika, con hierro medido y entrega en casa');
  const comp = ['Bimbo Nutra Bien', 'Siete Dragones', 'Nutri H', 'AndiBite pack de 12', 'Fika', 'Mamalama', 'AndiBite pack de 6'];
  const vals = [1.67, 3.01, 3.20, 3.91, 4.00, 4.10, 4.15];
  const isAB = comp.map(c => c.startsWith('AndiBite'));
  s.addChart(pres.charts.BAR, [
    { name: 'Competencia', labels: comp, values: vals.map((v, i) => isAB[i] ? 0 : v) },
    { name: 'AndiBite', labels: comp, values: vals.map((v, i) => isAB[i] ? v : 0) },
  ], Object.assign(chartText(), { x: 0.4, y: 1.6, w: 7.0, h: 5.1, barDir: 'bar', barGrouping: 'stacked', title: 'Precio por 20 g (S/)', chartColors: [H.accent5, H.accent1], showValue: true, dataLabelPosition: 'inEnd', dataLabelFormatCode: '"S/"0.00;;;', dataLabelColor: H.dk1, dataLabelFontBold: true, valAxisHidden: true, valGridLine: { style: 'none' }, showLegend: false, barGapWidthPct: 35 }));
  const ck = (v) => ({ text: v, options: { align: 'center', fontSize: 16, bold: v === '✓', color: v === '✓' ? C.accent4 : C.accent2 } });
  const ab = (v) => ({ text: v, options: { align: 'center', fontSize: 16, bold: true, color: C.accent1, fill: { color: 'F6DCD5' } } });
  const th2 = (t, hl) => ({ text: t, options: { bold: true, fontSize: 11, align: 'center', color: C.background1, fill: { color: hl ? C.accent1 : C.text2 } } });
  const at = [['Hierro declarado', '✓', '✓', '–', '–'], ['Sin octógono', '✓*', '?', '✓', '?'], ['Varios sabores en un pack', '✓', '?', '–', '–'], ['Entrega a domicilio', '✓', '✓', '✓', '–'], ['Formato de postre', '✓', '–', '✓', '–']];
  s.addTable([[{ text: 'Atributo', options: { bold: true, fontSize: 12, color: C.background1, fill: { color: C.text2 } } }, th2('AndiBite', true), th2('Nutri H'), th2('Fika'), th2('Mamalama')],
    ...at.map(r => [{ text: r[0], options: { fontSize: 13, fill: { color: 'FFFFFF' } } }, ab(r[1]), ...r.slice(2).map(v => Object.assign(ck(v), { options: Object.assign(ck(v).options, { fill: { color: 'FFFFFF' } }) }))]),
  ], { x: 7.7, y: 1.75, w: 5.03, colW: [1.53, 0.875, 0.875, 0.875, 0.875], rowH: 0.52, border: { type: 'solid', pt: 0.75, color: 'E8D8C4' }, color: C.text1, valign: 'middle', margin: 0.05 });
  T(s, '* Se confirma en laboratorio. ? = por completar en el store check.', { x: 7.7, y: 4.95, w: 5.03, h: 0.3, fontSize: 11, italic: true, color: C.accent2 });
  card(s, 7.7, 5.35, 5.03, 1.35, { fill: C.text2 });
  T(s, [{ text: 'S/4.15 por brownie', options: { bold: true, fontSize: 20, color: C.accent3, breakLine: true } }, { text: 'Por WhatsApp; S/4.33 en el stand. Hasta 8 % más que Fika, con hierro medido y en tres sabores.', options: { fontSize: 14, color: C.background1 } }], { x: 7.95, y: 5.4, w: 4.6, h: 1.25, valign: 'middle' });
  s.addNotes('Precios por 20 g consultados el 3 de octubre de 2026 (documento 02): Nutri H S/3.20, Fika S/4.00, Mamalama S/4.10, Siete Dragones S/3.01, Bimbo Nutra Bien S/1.67. AndiBite: pack de 6 a S/24.90 (S/4.15 por brownie) y pack de 12 a S/46.90 (S/3.91). Completar con los datos del store check de La Molina.');

  // =============== 27. CIERRE ===============
  pres.addSection({ title: 'Cierre' });
  s = pres.addSlide({ masterName: 'CIERRE', sectionTitle: 'Cierre' });
  T(s, 'PROPUESTA DE VALOR EN UNA FRASE', { x: 0.8, y: 0.9, w: 7.4, h: 0.35, fontSize: 13, bold: true, color: C.accent3, charSpacing: 2 });
  s.addText('Hierro medido. Sabor a brownie.', { placeholder: 'title' });
  T(s, 'El snack de lonchera que tu hijo sí se come', { x: 0.8, y: 3.1, w: 7.4, h: 0.5, fontSize: 24, bold: true, color: C.accent5 });
  T(s, 'Para padres planificados que leen etiquetas: mini brownie de 20 g con sangrecita, sin octógono y en tres sabores que el niño sí pide.', { x: 0.8, y: 3.8, w: 7.4, h: 1.0, fontSize: 17, color: C.background2 });
  T(s, 'PRÓXIMOS PASOS', { x: 0.8, y: 5.55, w: 7.4, h: 0.3, fontSize: 12, bold: true, color: C.accent3, charSpacing: 2 });
  ['Cargar el focus 2', 'Cotizar stands y maquila', 'Elegir los 2 primeros puntos'].forEach((t, i) => {
    const x = 0.8 + i * 2.55;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 5.95, w: 2.45, h: 0.55, rectRadius: 0.27, fill: { color: C.accent2 }, line: { color: C.accent5, width: 1 } });
    T(s, t, { x, y: 5.95, w: 2.45, h: 0.55, align: 'center', valign: 'middle', fontSize: 13, bold: true, color: C.background2 });
  });
  await imgSlot(s, 4, 8.75, 0.75, 3.95, 6.0, 'Niño abriendo su lonchera con AndiBite', true);
  s.addNotes('Cierre con la propuesta de valor en una frase y los tres pasos siguientes: cargar los resultados del focus 2, cotizar los stands (Jockey, Larcomar, La Rambla, Wong, Vivanda) y la maquila, y elegir los dos primeros puntos de venta para diciembre.' + pn(4, '2:3 · adjuntar la foto del empaque'));

  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log('ok', OUT);
})().catch(e => { console.error(e); process.exit(1); });
