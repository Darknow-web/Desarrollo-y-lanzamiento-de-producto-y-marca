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
  const MESES3 = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'];
  // =============== 1. PORTADA ===============
  pres.addSection({ title: 'Portada' });
  let s = pres.addSlide({ masterName: 'PORTADA', sectionTitle: 'Portada' });
  s.addImage({ path: 'img/logo_light.png', x: 0.8, y: 1.1, w: 5.6, h: 1.92 });
  s.addText('Trabajos de campo 5 a 8', { placeholder: 'title' });
  s.addText('Cliente, canal, relación, ingresos, Canvas y propuesta de valor', { placeholder: 'body' });
  T(s, 'Grupo 2 · Diana Ayoso · Carlos Inga · Angie Blas · Patricia Cárdenas · Adela Robles', { x: 0.8, y: 5.75, w: 7.6, h: 0.35, fontSize: 14, color: C.background2 });
  T(s, 'Desarrollo y lanzamiento de nuevos productos · Prof. Paola Cevallos · Octubre de 2026', { x: 0.8, y: 6.15, w: 7.6, h: 0.35, fontSize: 12, color: C.accent5 });
  s.addImage({ path: '/home/user/Desarrollo-y-lanzamiento-de-producto-y-marca/assets/empaque/B1_frente.png', x: 8.75, y: 0.6, w: 4.4, h: 6.12, rotate: 4, shadow: { type: 'outer', color: '000000', opacity: 0.35, blur: 12, offset: 4, angle: 90 } });
  s.addNotes('Presentamos los trabajos de campo 5 a 8 de AndiBite, el mini brownie de 20 g con sangrecita. Todo sale de la misma base: el público reformulado (padres conscientes y planificados, NSE A/B), el costeo con maquila y los precios confirmados por el equipo el 10 de octubre de 2026 (unidad a S/6.00, caja de 3 sabores a S/16.50 y pack de 6 a S/27.90 en el stand), con el modelo financiero v7. La innovación tecnológica es la app Andi, Misión Hierro, que viene con cada envase.');

  // =============== 2. RUTA ===============
  s = content('Portada', 'RUTA DEL TRABAJO', 'Cuatro trabajos, un solo negocio: AndiBite');
  const ruta = [
    ['05', 'FaUsers', 'Cliente y canal', 'Arquetipos, buyer persona, tipos de mercado y canal'],
    ['06', 'FaHandshake', 'Relación e ingresos', 'Cómo captamos y retenemos, y de dónde viene el dinero'],
    ['07', 'FaThLarge', 'Modelo Canvas', 'Socios, recursos, costos, resultados de los años 1 y 2, y el Canvas'],
    ['08', 'FaGift', 'Propuesta de valor', 'Mapa de valor, app Andi, competencia y plan de marketing'],
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
    { text: 'mini brownie de 20 g con sangrecita · 3 sabores · app Andi en cada envase · se vende en stands y ferias, y se recompra por WhatsApp' },
  ], { x: 0.95, y: 5.95, w: 11.5, h: 0.75, valign: 'middle', fontSize: 16, color: C.background2 });
  s.addNotes('Los cuatro trabajos se conectan: el cliente (TC5) define cómo nos relacionamos y cobramos (TC6); eso arma el Canvas con socios, recursos, actividades y costos (TC7); y todo se resume en el mapa de propuesta de valor (TC8).');

  // =============== 3. SECCIÓN TC5 ===============
  s = await section('TC5 · Cliente, mercado y canal', '05', 'Cliente, mercado y canal', 'Arquetipo · Buyer persona · Tipos de mercado · Tamaño del nicho · Canales y puntos de venta', 'FaUsers');
  s.addNotes('Trabajo de campo 5: arquetipo de cliente, buyer persona, tipos de mercado y selección del canal de distribución.');
  const S5 = 'TC5 · Cliente, mercado y canal';

  // =============== 3b. PÚBLICO VS ARQUETIPO ===============
  s = content(S5, 'TRABAJO DE CAMPO 5 · ARQUETIPO DE CLIENTE', 'El público nos orienta; el arquetipo nos conecta');
  card(s, 0.6, 1.75, 5.6, 4.9);
  await iconCircle(s, 'FaUsers', 0.9, 2.05, 0.9, C.accent5, H.dk2);
  T(s, 'PÚBLICO OBJETIVO', { x: 2.0, y: 2.1, w: 4, h: 0.35, fontSize: 13, bold: true, color: C.accent2, charSpacing: 1 });
  T(s, 'Un grupo', { x: 2.0, y: 2.45, w: 4, h: 0.45, fontSize: 22, bold: true, color: C.text2 });
  T(s, [
    { text: 'Padres de 32 a 45 años', options: { bullet: true, breakLine: true } },
    { text: 'NSE A y B: 7 de cada 10 hogares son B', options: { bullet: true, breakLine: true } },
    { text: 'Viven en Lima Top y Lima Moderna', options: { bullet: true, breakLine: true } },
    { text: 'Hijos de 4 a 11 en colegio privado', options: { bullet: true, breakLine: true } },
    { text: '46,000 hogares núcleo', options: { bullet: true } },
  ], { x: 0.95, y: 3.15, w: 5.0, h: 2.6, fontSize: 16, paraSpaceAfter: 6, color: C.text1 });
  s.addShape(pres.shapes.RIGHT_ARROW, { x: 6.33, y: 3.9, w: 0.75, h: 0.6, fill: { color: C.accent3 }, line: { color: C.accent3, width: 0 } });
  card(s, 7.2, 1.75, 5.53, 4.9, { fill: C.text2 });
  await iconCircle(s, 'FaUserCircle', 7.5, 2.05, 0.9, C.accent1, 'FFFFFF');
  T(s, 'ARQUETIPO', { x: 8.6, y: 2.1, w: 4, h: 0.35, fontSize: 13, bold: true, color: C.accent3, charSpacing: 1 });
  T(s, 'Una persona', { x: 8.6, y: 2.45, w: 4, h: 0.45, fontSize: 22, bold: true, color: C.background1 });
  const r3 = [['NOMBRE', 'Claudia, 38, abogada en San Borja'], ['DOLOR', 'Su hijo escupe lo nutritivo'], ['HÁBITO', 'Arma 2 loncheras a las 6 a. m.'], ['COMPRA EN', 'Wong, Flora & Fauna e Instagram']];
  r3.forEach((r, i) => {
    T(s, r[0], { x: 7.55, y: 3.2 + i * 0.82, w: 4.9, h: 0.28, fontSize: 11, bold: true, color: C.accent5, charSpacing: 1 });
    T(s, r[1], { x: 7.55, y: 3.47 + i * 0.82, w: 4.9, h: 0.4, fontSize: 16, bold: true, color: C.background1 });
  });
  s.addNotes('Sesión 05: el público objetivo orienta (un rango de edad, NSE y distrito) y el arquetipo conecta (una persona con nombre, dolor y hábito). Regla de 3 de la clase: nombre, dolor y hábito. Le vendemos a Claudia y a Rodrigo, no a "madres de 32 a 45". Atendemos a los dos segmentos con el mismo esfuerzo: en Lima Top (zona 7 de APEIM) el 51.4 % de los hogares es B y el 20.2 % es A, y en Lima Moderna (zona 6) 51.7 % B y 11.8 % A; o sea, unos 7 de cada 10 hogares A/B de esas zonas son B. Datos: APEIM 2025, CPI 2026 y documento 04.');

  // =============== 6. ARQUETIPOS ===============
  s = content(S5, 'TRABAJO DE CAMPO 5 · ARQUETIPOS DE CLIENTE', 'Tres clientes tipo: quién es, qué le duele y dónde compra');
  const arq = [
    ['FaShieldAlt', C.accent1, 'Guardiana del Hierro', 'Mamá de 35 a 42, profesional', 'Lee etiquetas; pregunta al pediatra', 'Su hijo rechaza lo nutritivo', 'Pruebas: hierro en mg', 'Wong, Flora & Fauna, Instagram', '30 %', 'Buyer persona: Claudia'],
    ['FaClock', C.accent2, 'El Resolutivo', 'Papá o mamá de 36 a 45, mando medio', 'Compra por app y en el súper', 'Mañanas contra el reloj', 'Que valga lo que cuesta', 'Plaza Vea, Tottus y WhatsApp', '45 %', 'Buyer persona: Rodrigo'],
    ['FaSchool', C.accent4, 'El Consejero', 'Quiosco, nutricionista, pediatra', 'Elige qué entra al colegio', 'Productos con octógono', 'Norma y registro sanitario', 'Directo al productor', '25 %', 'Nos recomienda'],
  ];
  for (let i = 0; i < 3; i++) {
    const a = arq[i];
    const x = 0.6 + i * (3.85 + 0.29), y = 1.7, w = 3.85, h = 5.0;
    card(s, x, y, w, h);
    await iconCircle(s, a[0], x + 0.3, y + 0.3, 0.8, a[1], 'FFFFFF');
    T(s, a[2], { x: x + 1.25, y: y + 0.3, w: w - 1.45, h: 0.45, fontSize: 19, bold: true, color: C.text2 });
    T(s, a[3], { x: x + 1.25, y: y + 0.78, w: w - 1.45, h: 0.35, fontSize: 12, color: C.accent2 });
    const rows = [['HÁBITO', a[4]], ['DOLOR', a[5]], ['VALORA', a[6]], ['COMPRA EN', a[7]]];
    rows.forEach((r, k) => {
      T(s, r[0], { x: x + 0.3, y: y + 1.4 + k * 0.7, w: w - 0.6, h: 0.26, fontSize: 11, bold: true, color: C.accent1, charSpacing: 1 });
      T(s, r[1], { x: x + 0.3, y: y + 1.65 + k * 0.7, w: w - 0.6, h: 0.38, fontSize: 15, color: C.text1 });
    });
    T(s, [{ text: a[8], options: { fontSize: 30, bold: true, color: a[1], breakLine: true } }, { text: 'del volumen', options: { fontSize: 11, color: C.accent2 } }], { x: x + 0.3, y: y + 4.18, w: 1.7, h: 0.75 });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 1.95, y: y + 4.3, w: 1.6, h: 0.42, rectRadius: 0.21, fill: { color: C.background2 }, line: { color: C.accent5, width: 1 } });
    T(s, a[9], { x: x + 1.95, y: y + 4.3, w: 1.6, h: 0.42, fontSize: 11, bold: true, align: 'center', valign: 'middle', color: C.text2 });
  }
  s.addNotes('Partes esenciales de un arquetipo según la sesión 05: nombre, edad y ocupación; hábitos, frustraciones y valores; canales y comportamiento de compra. Guardiana del Hierro (la representa Claudia, segmento A), El Resolutivo (Rodrigo, segmento B) y El Consejero (quiosco, nutricionista o pediatra: en marketing se le llama prescriptor), que recomienda la marca a los otros dos. Los porcentajes son el peso esperado de cada arquetipo en el volumen.');

  // =============== 7-8. BUYER PERSONAS ===============
  const personas = [
    { side: 'L', img: 1, name: 'Claudia Mendoza', tag: 'La mamá que lee etiquetas', imgLabel: 'Retrato de Claudia (38, San Borja)',
      chips: [['EDAD Y DISTRITO', '38 años · San Borja'], ['OCUPACIÓN', 'Abogada corporativa'], ['FAMILIA', '2 hijos (7 y 4)'], ['INGRESO FAMILIAR', 'S/13,500 al mes'], ['SE INFORMA', 'Pediatra e Instagram'], ['PAGARÍA', 'S/24 a 30 el pack']],
      pain: ['Hemoglobina baja en el control', 'Lo nutritivo regresa intacto'], want: ['Hierro en mg y cero octógonos', 'Que su hijo lo pida solo'],
      quote: '"Todo lo que le hace bien, mi hijo lo escupe."' },
    { side: 'R', img: 2, name: 'Rodrigo Salazar', tag: 'El papá que resuelve la mañana', imgLabel: 'Retrato de Rodrigo (40, San Miguel)',
      chips: [['EDAD Y DISTRITO', '40 años · San Miguel'], ['OCUPACIÓN', 'Jefe de logística'], ['FAMILIA', '2 hijos (9 y 6)'], ['INGRESO FAMILIAR', 'S/8,500 al mes'], ['COMPRA', 'Plaza Vea y WhatsApp'], ['PAGARÍA', 'S/18 a 24 por 6 u']],
      pain: ['Jueves y viernes sin ideas', 'Que no le rinda el dinero'], want: ['Que resuelva toda la semana', 'Precio claro por brownie'],
      quote: '"No me vendas salud, véndeme una mañana menos."' },
  ];
  for (const p of personas) {
    s = content(S5, 'TRABAJO DE CAMPO 5 · BUYER PERSONA · SEGMENTO ' + (p.img === 1 ? 'A' : 'B'), p.name);
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
      : 'Rodrigo Salazar, 40 años, San Miguel (zona 6 de APEIM, Lima Moderna: 51.7 % de los hogares es B). Representa al segmento B, que son 7 de cada 10 hogares A/B de Lima Top y Moderna. Jefe de logística en una empresa de consumo masivo; su esposa es analista contable y los dos trabajan. Ingreso familiar S/8,500 al mes (hipótesis dentro del NSE B: el promedio B de APEIM 2025 es S/7,787 y el A, S/14,584). Sus hijos de 9 y 6 van a un colegio privado de pensión media (en Lima, de S/400 a 900 al mes por hijo según cuantomecuesta.com, abril de 2026). Él arma las loncheras de la mañana. No busca salud, busca resolver: un pack que dure la semana, que aguante la mochila y que pueda pedir por WhatsApp con recordatorio. Compra en Plaza Vea y Tottus, por apps y por WhatsApp; se entera por el chat del salón. Mira el precio por brownie: el pack de 6 a S/4.48 por WhatsApp está dentro de lo que pagaría (S/18 a 24 por 6, o S/3 a 4 por unidad), y el pack de 12 a S/49.90 (S/24.95 por cada 6) queda en el borde; lo justifican el hierro medido, la app que le arma las loncheras y el aviso antes de que se acabe el pack. Dónde lo encontramos: Real Plaza Salaverry y Open Plaza Angamos, el carrito en Plaza Vea y las kermeses de su colegio.' + pn(2, '3:4'));
  }

  // =============== 4. TIPOS DE MERCADO ===============
  s = content(S5, 'TRABAJO DE CAMPO 5 · TIPOS DE MERCADO', 'Vendemos a familias (mercado de consumo), en un nicho A/B');
  const mk = [
    ['FaShoppingBasket', 'Consumo', 'Personas que compran para su familia', 'ELEGIDO', 'Padres A/B que compran la lonchera', 1],
    ['FaIndustry', 'Industrial', 'Empresas que compran para producir', 'NO APLICA', 'No vendemos insumos a otras empresas', 0],
    ['FaConciergeBell', 'Servicios', 'Compras de algo que no se toca', 'NO APLICA', 'Vendemos un producto, no un servicio', 0],
    ['FaLandmark', 'Gobierno', 'El Estado como cliente', 'AÑO 3', 'Programas contra la anemia, con licitación', 2],
    ['FaGlobeAmericas', 'Global', 'Clientes fuera del país', 'AÑO 3', 'Peruanos en Chile y EE. UU.', 2],
  ];
  for (let i = 0; i < 5; i++) {
    const [ic, name, def, tag, app, st] = mk[i];
    const on = st === 1;
    const w = 2.226, x = 0.6 + i * (w + 0.25), y = 1.7, h = 3.7;
    card(s, x, y, w, h, { fill: on ? C.accent1 : C.background1 });
    await iconCircle(s, ic, x + 0.25, y + 0.25, 0.7, on ? C.background1 : C.background2, on ? H.accent1 : H.accent2);
    T(s, name, { x: x + 0.25, y: y + 1.08, w: w - 0.4, h: 0.42, fontSize: 18, bold: true, color: on ? C.background1 : C.text2 });
    T(s, def, { x: x + 0.25, y: y + 1.5, w: w - 0.4, h: 0.6, fontSize: 12, color: on ? C.background2 : C.accent2 });
    const tf = on ? C.background1 : (st === 2 ? C.accent3 : C.background2);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + 0.25, y: y + 2.15, w: 1.3, h: 0.32, rectRadius: 0.16, fill: { color: tf }, line: { color: tf, width: 0 } });
    T(s, tag, { x: x + 0.25, y: y + 2.15, w: 1.3, h: 0.32, fontSize: 10, bold: true, align: 'center', valign: 'middle', color: on ? C.accent1 : C.text2, charSpacing: 1 });
    T(s, app, { x: x + 0.25, y: y + 2.6, w: w - 0.4, h: 1.0, fontSize: 14, color: on ? C.background1 : C.text1 });
  }
  T(s, 'Dentro del mercado de consumo', { x: 0.6, y: 5.62, w: 6, h: 0.32, fontSize: 14, bold: true, color: C.text2 });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 6.0, w: 12.13, h: 0.62, rectRadius: 0.1, fill: { color: C.text2 }, line: { color: C.text2, width: 0 } });
  T(s, 'Nicho: 46,000 hogares A/B con hijos de 4 a 11 · dos segmentos: salud (Claudia) y tiempo (Rodrigo)', { x: 0.85, y: 6.0, w: 11.7, h: 0.62, valign: 'middle', fontSize: 15, bold: true, color: C.background1 });
  s.addNotes('Tipos de mercado de la sesión 05: consumo, industrial, servicios, gobierno y global. AndiBite vende en el MERCADO DE CONSUMO: personas que compran para su familia y buscan conveniencia y confianza. Industrial y servicios no aplican. Gobierno (programas contra la anemia) y global (peruanos en el exterior) quedan como opción para el año 3, cuando haya volumen y registro de exportación. Dentro del consumo atacamos un nicho (NSE A/B de Lima Top y Moderna) con dos segmentos: salud verificable y ahorro de tiempo.');

  // =============== 5. TAM SAM SOM ===============
  s = content(S5, 'TRABAJO DE CAMPO 5 · TAMAÑO DEL MERCADO', 'Un nicho chico que sí invierte en la salud de sus hijos');
  const fun = [
    [6.6, C.accent5, C.text1, 'Mercado total · S/130.9 millones', '932 mil hogares · todas las loncheras de Lima'],
    [5.4, C.accent2, C.background1, 'Mercado al que apuntamos · S/62.8 M', '168 mil hogares A/B con niños de 4 a 11'],
    [4.2, C.accent1, C.background1, 'Núcleo · S/17.3 millones', '46 mil hogares en Lima Top y Moderna'],
    [3.0, C.text2, C.background1, 'Meta del año 1 · S/0.24 M', '52,331 brownies · 1 a 3 puntos'],
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
  s.addNotes('Embudo del documento 04 (APEIM 2025, CPI 2026, INEI, Kantar). En la diapositiva usamos palabras simples para las siglas: mercado total = TAM, mercado al que apuntamos = SAM y meta del año 1 = SOM. TAM: todas las loncheras con horneado o snack envasado de niños de 4 a 11 años en Lima y Callao (S/130.9 millones). SAM: niños de NSE A/B en toda Lima a precio premium (S/62.8 millones). Núcleo: NSE A/B de las zonas 6 y 7 de APEIM (S/17.3 millones). SOM del año 1 (enero a diciembre de 2027): 52,331 brownies y S/244,728 con IGV, vendidos sobre todo en stands, carritos y ferias; es apenas el 1.4 % del núcleo. Ajuste de -5 % por el Censo 2025 aplicado en el documento 04.');

  // =============== 9. CANAL: 5 FASES ===============
  s = content(S5, 'TRABAJO DE CAMPO 5 · CANAL DE DISTRIBUCIÓN', 'El niño prueba en el stand y el padre compra ahí mismo');
  const fases = [
    ['FaMapMarkerAlt', '1 · Información', 'Stand en mall o súper, Instagram y chat del salón'],
    ['FaSmile', '2 · Evaluación', 'Degustación gratis: el niño prueba delante del padre'],
    ['FaStore', '3 · Compra', 'Unidad S/6, caja de 3 S/16.50 o pack S/27.90, con Yape o tarjeta'],
    ['FaShoppingBag', '4 · Entrega', 'En el momento; por WhatsApp, entrega 2 días por semana o recojo en el stand'],
    ['FaWhatsapp', '5 · Posventa', 'App Andi: hierro del lote y aviso de recompra'],
  ];
  for (let i = 0; i < 5; i++) {
    const w = 2.27, x = 0.6 + i * (w + 0.2), y = 1.75;
    if (i < 4) s.addShape(pres.shapes.LINE, { x: x + 1.15, y: y + 0.5, w: w + 0.2 - 1.15, h: 0, line: { color: C.accent5, width: 2, dashType: 'dash', endArrowType: 'triangle' } });
    await iconCircle(s, fases[i][0], x, y, 1.0, i === 2 ? C.accent1 : C.text2, i === 2 ? 'FFFFFF' : H.accent5);
    T(s, fases[i][1], { x, y: y + 1.2, w, h: 0.4, fontSize: 17, bold: true, color: C.text2 });
    T(s, fases[i][2], { x, y: y + 1.65, w: w - 0.1, h: 1.2, fontSize: 14, color: C.text1 });
  }
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 4.3, w: 7.6, h: 1.65, rectRadius: 0.12, fill: { color: C.text2 }, line: { color: C.text2, width: 0 } });
  T(s, [{ text: 'Canal directo · 75.4 %', options: { fontSize: 20, bold: true, color: C.accent3, breakLine: true } }, { text: 'Stands, carrito, ferias y WhatsApp: más esfuerzo, más control. El niño prueba y el padre decide.', options: { fontSize: 15, color: C.background1 } }], { x: 0.95, y: 4.45, w: 7.0, h: 1.4, valign: 'middle' });
  card(s, 8.45, 4.3, 4.28, 1.65);
  T(s, [{ text: 'Canal indirecto · 24.6 %', options: { fontSize: 20, bold: true, color: C.text2, breakLine: true } }, { text: 'Quioscos escolares y tiendas naturistas, que se quedan del 20 al 36 % del precio', options: { fontSize: 15, color: C.text1 } }], { x: 8.7, y: 4.45, w: 3.85, h: 1.4, valign: 'middle' });
  s.addNotes('Las cinco fases del canal según Osterwalder. Por indicación de la profesora, la venta física es el mejor escenario: el focus 1 mostró que sin prueba del niño no hay compra, y en el stand el niño prueba delante del padre. La compra se cierra en el stand (fase en rojo). En la posventa, el padre escanea el QR del envase, ve en la app el hierro medido de su lote y recibe el aviso de recompra, que abre WhatsApp con el pedido listo, sin suscripción. Canal directo (sesión 05: sin intermediarios, más esfuerzo y más control) frente a canal indirecto (minoristas que venden por nosotros). Unidades del año 1 (Excel v7, hoja Mensual): stands y carritos 22,625; WhatsApp 9,421; colegios 9,165; ferias y eventos 7,400; naturistas 3,720. Por WhatsApp las entregas se agrupan 2 días por semana por zona, o el padre recoge en el stand: así el delivery baja de S/0.80 a S/0.50 por brownie.');

  // =============== 10. SELECCIÓN DE CANAL ===============
  s = content(S5, 'TRABAJO DE CAMPO 5 · SELECCIÓN DEL CANAL', 'Elegimos vender cara a cara: stands y carritos');
  s.addChart(pres.charts.DOUGHNUT, [{ name: 'Unidades', labels: ['Stands y carritos', 'WhatsApp (recompra)', 'Ferias y eventos', 'Quioscos escolares', 'Tiendas naturistas'], values: [22625, 9421, 7400, 9165, 3720] }],
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
  T(s, [{ text: '23 de 25 puntos', options: { fontSize: 20, bold: true, breakLine: true } }, { text: 'Stands para que el niño pruebe y el padre compre; ferias en la campaña escolar y el Día del Niño; WhatsApp para volver a comprar.', options: { fontSize: 14 } }], { x: 6.3, y: 5.38, w: 6.2, h: 1.25, valign: 'middle', color: C.background1 });
  s.addNotes('Criterios: margen por brownie (lo que deja cada brownie antes del espacio y el personal, Excel v7: stand S/2.41, feria S/2.52, WhatsApp S/1.39, quiosco S/0.86, naturista S/0.80), control del mensaje, costo de entrada, alcance del segmento y prueba del niño, que según el focus 1 es la condición para comprar. La góndola del supermercado se queda con 20 a 40 % y paga a 30-90 días: entra en el año 2.');

  // =============== 10b. PUNTOS DE VENTA ===============
  s = content(S5, 'TRABAJO DE CAMPO 5 · PUNTOS DE VENTA', 'Vamos donde está la familia: malls, súper, ferias y colegios');
  const ptos = [
    ['FaStore', 'Malls para A y para B', 'Jockey y La Rambla (A y B) · Real Plaza Salaverry y Open Plaza Angamos (B)'],
    ['FaShoppingCart', 'Supermercados', 'Carrito en Wong o Vivanda (A) y en Plaza Vea (B), los fines de semana'],
    ['FaGift', 'Ferias de temporada', 'Campaña escolar (febrero) y Día del Niño (abril)'],
    ['FaSchool', 'Colegios de los dos segmentos', 'Quioscos y kermeses en colegios de pensión alta (A) y en cadenas como Innova Schools (B)'],
  ];
  for (let i = 0; i < 4; i++) {
    const x = 0.6, y = 1.7 + i * 1.25, w = 4.9, h = 1.1;
    card(s, x, y, w, h);
    await iconCircle(s, ptos[i][0], x + 0.2, y + 0.2, 0.7, i < 2 ? C.accent1 : C.text2, i < 2 ? 'FFFFFF' : H.accent5);
    T(s, [{ text: ptos[i][1], options: { bold: true, fontSize: 16, color: C.text2, breakLine: true } }, { text: ptos[i][2], options: { fontSize: 13, color: C.accent2 } }], { x: x + 1.1, y, w: w - 1.25, h, valign: 'middle' });
  }
  s.addChart(pres.charts.BAR, [
    { name: 'Stands y carritos', labels: MESES3, values: [450, 1440, 1800, 1440, 1530, 1440, 1700, 2295, 2430, 2430, 2430, 3240] },
    { name: 'Ferias y eventos', labels: MESES3, values: [150, 1000, 600, 1300, 750, 600, 450, 600, 600, 600, 450, 300] },
    { name: 'WhatsApp', labels: MESES3, values: [150, 210, 854, 840, 959, 798, 714, 753, 1013, 1061, 1061, 1008] },
    { name: 'Colegios y naturistas', labels: MESES3, values: [120, 180, 480, 840, 1065, 1200, 960, 1560, 1560, 1920, 1920, 1080] },
  ], Object.assign(chartText(), { x: 5.7, y: 1.6, w: 7.2, h: 5.1, barDir: 'col', barGrouping: 'stacked', title: 'Brownies vendidos al mes por canal (enero a diciembre de 2027)', chartColors: [H.accent1, H.accent3, H.accent2, H.accent4], showValue: false, showLegend: true, legendPos: 'b', valAxisLabelFormatCode: '#,##0', barGapWidthPct: 40 }));
  s.addNotes('Puntos de venta (documento 08), repartidos para llegar con el mismo esfuerzo al padre A y al padre B. Malls: Jockey Plaza y La Rambla San Borja (Lima Top, A y B); Real Plaza Salaverry (Jesús María, Lima Moderna), con la Placita del Emprendimiento del programa Perú Pasión de Intercorp, y Open Plaza Angamos (Surquillo), con el programa Open Emerge de espacios para emprendedores (público B); Larcomar queda como alternativa. Carrito en Wong o Vivanda (A) y en Plaza Vea (B). Orden de apertura: 1.er punto en enero en Jockey (A y B), 2.º punto en febrero en Real Plaza Salaverry u Open Plaza Angamos (B) y 3.er punto en agosto en La Rambla o en el carrito de Wong o Vivanda (A). Colegios: quioscos y kermeses en colegios de pensión alta de Lima Top (A) y en cadenas de pensión media como Innova Schools (39 sedes en Lima, B); un solo acuerdo con una cadena abre varias sedes. El quiosco solo puede vender productos sin octógonos (lineamientos de alimentación saludable del MINSA y la RVM 076-2019-MINEDU), por eso el brownie sin octógono es la llave de entrada; el quiosco lo opera un concesionario elegido por el colegio. 2 ferias pagadas, de campaña escolar (febrero) y del Día del Niño Peruano (segundo domingo de abril); kermeses, cumpleaños y ferias saludables o municipales, que no cobran stand. Las ferias navideñas se sacaron del plan: con unos 700 brownies, una feria de S/1,800 pierde dinero si no deja clientes que vuelvan. Plan: 1 punto en enero, 2 de febrero a julio y 3 de agosto a diciembre de 2027, solo fines de semana. Cada punto y cada evento lo atiende un(a) vendedor(a) pagado(a) a S/90 por día; el espacio cuesta S/600 por punto al mes y el stand en feria, S/1,800 más 3 días de vendedor(a).');

  // =============== 11. SECCIÓN TC6 ===============
  s = await section('TC6 · Relación e ingresos', '06', 'Relación con el cliente e ingresos', 'Tipos de relación · Captar, fidelizar y crecer · Fuentes de ingreso · Ventas del año 1', 'FaHandshake');
  s.addNotes('Trabajo de campo 6: relaciones con el cliente y los diferentes tipos de ingresos.');
  const S6 = 'TC6 · Relación e ingresos';

  // =============== 12. TIPOS DE RELACIÓN ===============
  s = content(S6, 'TRABAJO DE CAMPO 6 · RELACIÓN CON EL CLIENTE', 'Cara a cara en el stand, automática al recomprar');
  const rel = [
    ['FaComments', 'Asistencia personal', 'FUERTE', 'En el stand el niño prueba y el padre compra, con el consejo de la vendedora'],
    ['FaUserTie', 'Asistencia exclusiva', 'APOYO', 'La coordinadora atiende a cada colegio y a cada naturista'],
    ['FaMobileAlt', 'Autoservicio', 'FUERTE', 'App Andi: hierro del lote, loncheras y pedido en un clic'],
    ['FaCalendarCheck', 'Servicio automático', 'FUERTE', 'La app avisa cuando el pack se está acabando'],
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
  s.addNotes('Los seis tipos de relación de Osterwalder y cómo los usa AndiBite. Las fuertes (asistencia personal en el stand, autoservicio y servicio automático con la app Andi, Misión Hierro, y comunidad de mamás embajadoras) sostienen la recompra; las de apoyo crecen con el volumen. La app calcula cuándo se acaba el pack según cuántos come el niño a la semana y avisa al padre (documento 09). Con los colegios y naturistas la relación es exclusiva: la coordinadora (en planilla) responde por cada cuenta. En el stand la compra se cierra ahí mismo; WhatsApp es para volver a comprar.');

  // =============== 13. CAPTAR, FIDELIZAR, CRECER ===============
  s = content(S6, 'TRABAJO DE CAMPO 6 · CICLO DE RELACIÓN', 'Cómo una familia nos prueba, vuelve y nos recomienda');
  const ciclo = [
    ['1 · CAPTAR', 'Que lo prueben', 'Degustación gratis en el stand; el padre se lleva la unidad, la caja de 3 sabores o el pack', '80', 'brownies por día en cada punto de venta'],
    ['2 · FIDELIZAR', 'Que vuelvan', 'La app Andi avisa la recompra, arma loncheras y mide el hierro de la semana', '35 %', 'de lo vendido en físico vuelve por WhatsApp'],
    ['3 · CRECER', 'Que nos recomienden', 'Mamá embajadora por salón: recomienda en el chat del colegio con su código', '3', 'puntos de venta desde agosto de 2027'],
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
  s.addNotes('Captar: en el stand el niño prueba gratis delante del padre, que compra ahí mismo: la unidad (S/6.00), la caja de 3 sabores (S/16.50, sin cupón) o el pack de 6 (S/27.90). Fidelizar: la app Andi, Misión Hierro avisa cuando el pack está por acabarse y abre WhatsApp con el pedido listo, sin suscripción; además da el semáforo de hierro y el plan de loncheras de la semana. Crecer: una mamá embajadora por salón recomienda AndiBite en el chat del colegio con su código; por cada familia nueva que llega con su código recibe un pack de regalo o un descuento (S/200 al mes dentro del marketing). El premio es para el padre, nunca para el niño (Ley 30021). Luego se pasa al pack de 12. Metas del modelo: 80 brownies por día en cada punto, 35 % de lo vendido en físico vuelve por WhatsApp y 3 puntos de venta desde agosto de 2027.' + pn(3, '9:16 · adjuntar la foto del empaque'));

  // =============== 14. TIPOS DE INGRESO ===============
  s = content(S6, 'TRABAJO DE CAMPO 6 · FUENTES DE INGRESO', 'De dónde viene el dinero: cuatro fuentes, un solo producto');
  const ing = [
    ['FaStore', 'Venta en stands y carritos', 'Unidades, cajas de 3 y packs en malls y súper', '49.8 %'],
    ['FaBirthdayCake', 'Ferias y eventos', 'Campaña escolar, Día del Niño, kermeses y cumpleaños', '16.8 %'],
    ['FaWhatsapp', 'Recompra por WhatsApp', 'Packs de 6 y de 12 con entrega o recojo', '16.7 %'],
    ['FaSchool', 'Venta a colegios y tiendas', 'Quioscos escolares y tiendas naturistas, con factura', '16.7 %'],
  ];
  for (let i = 0; i < 4; i++) {
    const x = 0.6, y = 1.7 + i * 1.23, w = 6.3, h = 1.08;
    card(s, x, y, w, h);
    await iconCircle(s, ing[i][0], x + 0.2, y + 0.19, 0.7, i === 0 ? C.accent1 : C.text2, i === 0 ? 'FFFFFF' : H.accent5);
    T(s, [{ text: ing[i][1], options: { bold: true, fontSize: 16, color: C.text2, breakLine: true } }, { text: ing[i][2], options: { fontSize: 13, color: C.accent2 } }], { x: x + 1.1, y, w: 3.85, h, valign: 'middle' });
    T(s, [{ text: ing[i][3], options: { bold: true, fontSize: 24, color: C.accent1, breakLine: true } }, { text: 'de los ingresos', options: { fontSize: 10, color: C.accent2 } }], { x: x + 5.0, y, w: 1.2, h, valign: 'middle', align: 'right' });
  }
  const ph = (t) => ({ text: t, options: { bold: true, color: C.background1, fill: { color: C.text2 }, align: 'center', fontSize: 12 } });
  const prow = (c, a, b, d, e, hl) => [{ text: c, options: { bold: true, fontSize: 13, fill: { color: hl ? 'F6DCD5' : 'FFFFFF' } } }, ...[a, b, d, e].map(v => ({ text: v, options: { align: 'center', fontSize: 13, fill: { color: hl ? 'F6DCD5' : 'FFFFFF' }, bold: hl } }))];
  s.addTable([
    [{ text: 'Precio con IGV', options: { bold: true, color: C.background1, fill: { color: C.text2 }, fontSize: 12 } }, ph('Unidad'), ph('Caja de 3'), ph('Pack de 6'), ph('Pack de 12')],
    prow('Stand y ferias', 'S/6.00', 'S/16.50', 'S/27.90', 'S/51.90', true),
    prow('WhatsApp', '–', 'S/12.00', 'S/26.90', 'S/49.90'),
    prow('Quiosco escolar', 'S/4.00*', '–', '–', '–'),
    prow('Tienda naturista', '–', '–', 'S/28.90*', '–'),
  ], { x: 7.2, y: 1.7, w: 5.53, colW: [1.53, 0.95, 1.0, 1.05, 1.0], rowH: 0.55, border: { type: 'solid', pt: 0.75, color: 'E8D8C4' }, color: C.text1, valign: 'middle', margin: 0.06 });
  card(s, 7.2, 4.75, 5.53, 1.95, { fill: C.background2, noShadow: true });
  T(s, [
    { text: 'Precio fijo por lista', options: { bold: true, fontSize: 15, color: C.text2, breakLine: true } },
    { text: 'Incluye el hierro medido por lote y la app. En el stand se cobra algo más por el alquiler y el personal.', options: { fontSize: 14, breakLine: true } },
    { text: '* Precio al público. AndiBite recibe S/3.20 en el quiosco y S/18.50 en la naturista.', options: { fontSize: 11, italic: true, color: C.accent2 } },
  ], { x: 7.45, y: 4.85, w: 5.05, h: 1.75, valign: 'middle', paraSpaceAfter: 4 });
  s.addNotes('Tipos de ingreso (Osterwalder): venta de activos en stands y carritos, en ferias y eventos, y por WhatsApp; y venta a colegios y tiendas (en inglés, B2B). Porcentajes sobre las ventas con IGV del año 1 (S/244,728, enero a diciembre de 2027), hoja Proyeccion del Excel v7. Mecanismo de precio: fijo por lista, con descuento por volumen. La caja de 3 sabores se vende en el stand a S/16.50 (S/5.50 por brownie) y por WhatsApp a S/12.00; por WhatsApp ya no se vende la unidad suelta. Al quiosco le vendemos a S/3.20 (el concesionario se queda 20 % de los S/4.00 que paga el alumno) y a la tienda naturista a S/18.50 (la tienda gana S/10.40 por pack, 36 %). Los precios al público no cambian.');

  // =============== 15. INGRESOS EN NÚMEROS ===============
  s = content(S6, 'TRABAJO DE CAMPO 6 · VENTAS DEL AÑO 1', 'S/244,700 en ventas el primer año');
  s.addChart(pres.charts.DOUGHNUT, [{ name: 'Ingreso', labels: ['Unidad', 'Pack de 6', 'Caja de 3', 'Pack de 12'], values: [123843, 83958, 20282, 16645] }],
    Object.assign(chartText(), { x: 0.4, y: 1.6, w: 4.4, h: 4.45, title: 'Ingresos por presentación', holeSize: 55, chartColors: [H.accent1, H.accent2, H.accent3, H.accent4], showPercent: true, showValue: false, showLegend: true, legendPos: 'b', dataLabelColor: 'FFFFFF', dataLabelFontSize: 13, dataLabelFontBold: true }));
  const meses = MESES3;
  s.addChart(pres.charts.BAR, [{ name: 'Ventas con IGV', labels: meses, values: [4280, 14778, 18255, 21279, 19944, 18360, 17792, 23922, 25778, 27131, 26299, 26911] }],
    Object.assign(chartText(), { x: 5.0, y: 1.6, w: 7.9, h: 4.45, barDir: 'col', title: 'Ventas mensuales con IGV (enero a diciembre de 2027)', chartColors: [H.accent2], showValue: true, dataLabelPosition: 'outEnd', dataLabelFormatCode: '0.0,"k"', valAxisLabelFormatCode: '#,##0', showLegend: false, barGapWidthPct: 45, dataLabelFontSize: 11 }));
  const strip = [['52,331', 'brownies vendidos'], ['3,252 + 1,315', 'packs de 6 y cajas de 3'], ['S/4.68', 'de ingreso promedio por brownie']];
  strip.forEach((t, i) => {
    const w = 3.9, x = 0.6 + i * (w + 0.215);
    card(s, x, 6.12, w, 0.72, { r: 0.1 });
    T(s, [{ text: t[0] + '  ', options: { bold: true, fontSize: 20, color: C.accent1 } }, { text: t[1], options: { fontSize: 13, color: C.accent2 } }], { x: x + 0.25, y: 6.12, w: w - 0.4, h: 0.72, valign: 'middle' });
  });
  s.addNotes('Datos del Excel (hojas Proyeccion y Mensual). En el stand 5 de cada 10 brownies se venden sueltos a S/6.00 y 1 de cada 10 sale en la caja de 3 sabores, por eso la unidad trae el 51 % de los ingresos. Además se venden 330 packs de 12. Enero es el mes de arranque (un punto y vacaciones); en febrero entra la feria de campaña escolar, en marzo los colegios, en abril la feria del Día del Niño, en agosto el tercer punto y diciembre tiene 12 días de venta en los 3 puntos, sin ferias pagadas.');

  // =============== 16. SECCIÓN TC7 ===============
  s = await section('TC7 · Canvas', '07', 'Socios, recursos, actividades y costos', 'Socios y recursos · Actividades y costos · Punto de equilibrio · Resultados de los años 1 y 2 · Canvas', 'FaThLarge');
  s.addNotes('Trabajo de campo 7: asociaciones, recursos, actividades y costos; presentación del modelo Canvas.');
  const S7 = 'TC7 · Canvas';

  // =============== 17. SOCIOS CLAVE ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · SOCIOS CLAVE', 'Seis aliados que hacen lo que nosotros no podemos');
  s.addShape(pres.shapes.OVAL, { x: 5.42, y: 2.95, w: 2.5, h: 2.5, fill: { color: C.text2 }, line: { color: C.accent5, width: 3 } });
  s.addImage({ path: 'img/logo_light.png', x: 5.77, y: 3.62, w: 1.8, h: 0.62 });
  T(s, 'AndiBite S.A.C.', { x: 5.42, y: 4.4, w: 2.5, h: 0.35, fontSize: 13, bold: true, align: 'center', color: C.accent5 });
  const soc = [
    ['FaIndustry', 'Planta que fabrica por nosotros', 'MAKING, Panificadora Unión, INDDA', [0, 1, 1]],
    ['FaFlask', 'Laboratorio acreditado', 'SAT Perú y La Molina Calidad Total', [1, 1, 1]],
    ['FaDrumstickBite', 'Proveedores', 'Sangrecita en polvo con RS, Makro, empaques', [0, 1, 1]],
    ['FaStore', 'Dónde vendemos', 'Malls y súper para A y B, ferias, quioscos y naturistas', [1, 1, 1]],
    ['FaMobileAlt', 'Tecnología', 'Desarrollador de la app y Google Cloud', [0, 1, 1]],
    ['FaUserMd', 'Quienes nos recomiendan', 'Pediatras y nutricionista', [1, 1, 0]],
  ];
  const cc = ['Conecta', 'Convierte', 'Complementa'];
  for (let i = 0; i < 6; i++) {
    const left = i < 3, k = i % 3;
    const w = 4.3, h = 1.45, x = left ? 0.6 : 8.43, y = 1.7 + k * 1.68;
    const cy = y + h / 2;
    s.addShape(pres.shapes.LINE, left ? { x: x + w, y: cy, w: 5.42 + 1.25 - (x + w) - 0.9, h: 4.2 - cy, line: { color: C.accent5, width: 1.5, dashType: 'dash' } }
      : { x: 6.67 + 0.9, y: Math.min(cy, 4.2), w: x - 7.57, h: Math.abs(4.2 - cy), flipV: cy < 4.2, line: { color: C.accent5, width: 1.5, dashType: 'dash' } });
    card(s, x, y, w, h);
    await iconCircle(s, soc[i][0], x + 0.2, y + 0.25, 0.65, C.accent1, 'FFFFFF');
    T(s, soc[i][1], { x: x + 1.05, y: y + 0.15, w: w - 1.2, h: 0.36, fontSize: 16, bold: true, color: C.text2 });
    T(s, soc[i][2], { x: x + 1.05, y: y + 0.5, w: w - 1.2, h: 0.36, fontSize: 12, color: C.text1 });
    soc[i][3].forEach((v, j) => {
      const bx = x + 1.05 + j * 1.06;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: bx, y: y + 0.97, w: 1.0, h: 0.3, rectRadius: 0.15, fill: { color: v ? C.accent4 : C.background2 }, line: { color: v ? C.accent4 : C.accent5, width: 0.75 } });
      T(s, (v ? '✓ ' : '– ') + cc[j], { x: bx, y: y + 0.97, w: 1.0, h: 0.3, fontSize: 9, bold: true, align: 'center', valign: 'middle', color: v ? C.background1 : C.accent2 });
    });
  }
  T(s, [{ text: 'Conecta: ', options: { bold: true } }, { text: 'nos acerca al cliente · ' }, { text: 'Convierte: ', options: { bold: true } }, { text: 'hace posible la venta · ' }, { text: 'Complementa: ', options: { bold: true } }, { text: 'pone lo que no tenemos · RS = registro sanitario · S.A.C. = tipo de empresa' }],
    { x: 0.6, y: 6.62, w: 12.13, h: 0.3, fontSize: 10.5, color: C.accent2, align: 'center' });
  s.addNotes('Regla de las 3 C (sesión 07): una alianza es clave si cumple 2 o más: conecta con tu cliente (nos acerca a él), convierte valor en acción (hace posible la venta) y complementa lo que no tienes (pone lo que nos falta). Todos los socios cumplen al menos 2. La planta y los proveedores no conectan con el cliente, pero convierten (producen) y complementan (planta con certificación sanitaria HACCP que no tenemos). Los puntos de venta (malls, supermercados, ferias, quioscos y naturistas) cumplen las 3: tienen el público, permiten vender sin local propio y ponen el espacio. El laboratorio está acreditado por INACAL (el instituto que certifica laboratorios). El proveedor de sangrecita de res en polvo liofilizada tiene registro sanitario, así que la planta no manipula sangre cruda. El desarrollador de la app y Google Cloud (servidor y la IA del plan de loncheras) convierten y complementan lo digital; los pediatras y la nutricionista conectan con los padres y convierten porque su recomendación da confianza.');

  // =============== 18. RECURSOS ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · RECURSOS CLAVE', 'Seis recursos sin los que AndiBite no funciona');
  const rec = [
    ['FaBrain', 'Intangible', 'Fórmula de 3 sabores con sangrecita', [1, 1, 1]],
    ['FaCertificate', 'Intangible', 'Marca AndiBite y registro sanitario', [1, 1, 1]],
    ['FaUsers', 'Humano', 'Vendedores de stand, coordinador y 5 socios', [1, 1, 0]],
    ['FaStore', 'Físico', 'Carrito, kit de feria y stock en la planta', [1, 0, 0]],
    ['FaMobileAlt', 'Digital', 'App Andi, Misión Hierro y base de clientes', [1, 1, 1]],
    ['FaCoins', 'Financiero', 'S/40,876 de inversión: socios y préstamo', [1, 0, 0]],
  ];
  const tq = ['Si falta, no funciona', 'Nos diferencia', 'Difícil de copiar'];
  T(s, 'Test rápido de la sesión 07', { x: 7.95, y: 1.55, w: 4.78, h: 0.3, fontSize: 12, bold: true, color: C.accent2 });
  tq.forEach((t, j) => T(s, t, { x: 7.95 + j * 1.6, y: 1.85, w: 1.55, h: 0.45, fontSize: 11, bold: true, align: 'center', color: C.text2 }));
  for (let i = 0; i < rec.length; i++) {
    const r = rec[i];
    const y = 2.35 + i * 0.73, h = 0.63;
    card(s, 0.6, y, 12.13, h, { r: 0.1 });
    await iconCircle(s, r[0], 0.75, y + 0.08, 0.47, i < 2 ? C.accent1 : C.text2, i < 2 ? 'FFFFFF' : H.accent5);
    T(s, r[1].toUpperCase(), { x: 1.4, y, w: 1.6, h, valign: 'middle', fontSize: 11, bold: true, color: C.accent1, charSpacing: 1 });
    T(s, r[2], { x: 3.0, y, w: 4.85, h, valign: 'middle', fontSize: 15, color: C.text1 });
    r[3].forEach((v, j) => {
      const cx = 7.95 + j * 1.6 + 0.55;
      s.addShape(pres.shapes.OVAL, { x: cx, y: y + 0.13, w: 0.38, h: 0.38, fill: { color: v ? C.accent4 : C.background2 }, line: { color: v ? C.accent4 : C.accent5, width: 0.75 } });
      T(s, v ? '✓' : '–', { x: cx, y: y + 0.13, w: 0.38, h: 0.38, fontSize: 13, bold: true, align: 'center', valign: 'middle', color: v ? C.background1 : C.accent2 });
    });
  }
  s.addNotes('Test de la sesión 07: un recurso es clave si respondes sí a 2 de 3 preguntas: si falta, ¿la idea no funciona?, ¿te diferencia?, ¿es difícil de copiar? La fórmula, la marca con registro sanitario y la app Andi, Misión Hierro con su base de clientes pasan las 3: la app junta el hierro medido de cada lote con los hábitos de compra de cada familia, algo que un competidor no copia rápido. Tipos: físicos, digitales, humanos, financieros e intangibles. La inversión inicial de S/40,876 está en la hoja Inversion del Excel v7: S/25,000 de los socios y un préstamo de S/16,000 en 24 cuotas, más una línea de crédito de respaldo de S/3,000.');

  // =============== 18b. ACTIVIDADES Y COSTOS ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · ACTIVIDADES CLAVE', 'Lo que hacemos cada mes y cuánto nos cuesta');
  const act = [
    ['FaIndustry', 'Producir con la planta', 'Producción', 'S/1.64 por brownie: fabricar S/1.06 + empaque S/0.30 + merma y traslado S/0.16 + calidad S/0.12', 'Variable'],
    ['FaClipboardCheck', 'Calidad y hierro medido', 'Producción', 'S/625 por la producción de cada mes: son los S/0.12 de la fila de arriba', 'Ya incluido arriba'],
    ['FaStore', 'Vender en stands y carrito', 'Atender al cliente', 'S/600 por punto al mes + S/90 por día de vendedor(a)', 'Crece con cada punto'],
    ['FaGift', 'Ferias y eventos', 'Atender al cliente', 'Feria S/1,800 + S/270 de vendedor(a) · evento S/160', 'Por evento'],
    ['FaWhatsapp', 'Recompra y entregas', 'Mantener canales', 'S/0.50 por brownie (entregas agrupadas por zona)', 'Variable'],
    ['FaInstagram', 'Contenido y mamás embajadoras', 'Mantener canales', 'S/700 de pauta + S/200 de embajadoras al mes', 'Fijo'],
    ['FaMobileAlt', 'Mantener la app Andi', 'Mantener canales', 'S/250 al mes + S/0.04 por código impreso', 'Fijo y variable'],
    ['FaUserTie', 'Administrar el negocio', 'Gestión', 'S/745 de administración + S/709 de la coordinadora al mes', 'Fijo'],
  ];
  const ah = (t) => ({ text: t, options: { bold: true, color: C.background1, fill: { color: C.text2 }, fontSize: 13 } });
  s.addTable([[ah('Actividad clave'), ah('Para qué'), ah('Lo que cuesta'), ah('Tipo de costo')],
    ...act.map((a, i) => [{ text: a[1], options: { bold: true, fontSize: 13, fill: { color: 'FFFFFF' } } }, { text: a[2], options: { fontSize: 12, color: C.accent1, bold: true, fill: { color: 'FFFFFF' } } }, { text: a[3], options: { fontSize: 13, fill: { color: 'FFFFFF' } } }, { text: a[4], options: { fontSize: 12, fill: { color: i % 2 ? 'FFFFFF' : 'FBF3E8' }, color: C.accent2 } }])],
    { x: 1.4, y: 1.62, w: 11.33, colW: [2.95, 1.75, 4.75, 1.88], rowH: [0.46, 0.64, 0.64, 0.48, 0.48, 0.48, 0.48, 0.48, 0.48], border: { type: 'solid', pt: 0.75, color: 'E8D8C4' }, color: C.text1, valign: 'middle', margin: 0.07 });
  const arh = [0.46, 0.64, 0.64, 0.48, 0.48, 0.48, 0.48, 0.48, 0.48];
  for (let i = 0, yy = 1.62 + arh[0]; i < act.length; yy += arh[i + 1], i++) await iconCircle(s, act[i][0], 0.76, yy + arh[i + 1] / 2 - 0.2, 0.4, C.accent1, 'FFFFFF');
  card(s, 0.6, 6.32, 12.13, 0.55, { fill: C.text2, r: 0.27 });
  T(s, '"Si una actividad parece gratis, estás ignorando un recurso oculto": por eso los stands, los eventos y los pedidos tienen personal pagado.', { x: 0.9, y: 6.32, w: 11.6, h: 0.55, valign: 'middle', fontSize: 14, italic: true, color: C.background2 });
  s.addNotes('Sesión 08: toda actividad genera un costo. Tipos de actividad de Osterwalder, en palabras simples: producción, atender al cliente (en el libro, "resolución de problemas"), mantener canales (en el libro, "plataforma") y gestión. Producir cuesta S/1.64 por brownie en el pack de 6, todo incluido: fabricar S/1.06 (S/0.605 de insumos con sangrecita de res en polvo a S/300 por kg, y S/0.45 que nos cobra la planta) más S/0.30 de empaque (bolsita, doypack y etiquetas con el código de la app), S/0.16 de merma, transporte y almacén, y S/0.12 de calidad. Esos S/0.12 son el análisis de cada mes, que se muestra en la segunda fila solo para explicar de dónde salen: no se suman dos veces. La calidad cuesta S/625 por la producción de cada mes (microbiológico S/250 y hierro S/375, que se publica en la app); el hierro se mide todos los meses hasta junio y cada 2 meses desde julio, cuando la receta ya es estable: en promedio S/0.12 por brownie. Vender en stands: S/600 por punto al mes y S/90 por día de vendedor(a). Ferias pagadas: S/1,800 de stand más 3 días de vendedor(a) (S/270); cada evento sin costo, S/90 de vendedor(a) y S/70 de aporte al organizador. Recompra: S/0.50 por brownie con entregas agrupadas 2 días por semana por zona y recojo en el stand. Contenido: S/700 de pauta y material, y S/200 para premiar a las mamás embajadoras. App: S/250 al mes de servidor y mantenimiento, más S/0.04 por código impreso. Administración: S/745 (contador, facturación, web, teléfono, movilidad, GS1, banco y uniformes) y la coordinadora en planilla, S/709. El carné de sanidad es requisito al contratar, así que no lo paga la empresa.');

  // =============== 19. COSTO POR PRESENTACIÓN ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · ESTRUCTURA DE COSTOS', 'Cuánto cuesta y cuánto nos queda de cada presentación');
  const presL = ['Unidad S/6.00', 'Caja de 3 S/16.50', 'Pack de 6 S/27.90', 'Pack de 12 S/51.90'];
  s.addChart(pres.charts.BAR, [
    { name: 'Producir', labels: presL, values: [1.72, 1.68, 1.64, 1.54] },
    { name: 'Vender (degustación, pago con tarjeta y renta)', labels: presL, values: [0.50, 0.48, 0.45, 0.44] },
    { name: 'Nos queda', labels: presL, values: [2.86, 2.50, 1.85, 1.69] },
  ], Object.assign(chartText(), { x: 0.4, y: 1.55, w: 6.7, h: 5.2, barDir: 'col', barGrouping: 'stacked', title: 'De cada brownie vendido en el stand (S/ sin IGV)', chartColors: [H.accent2, H.accent5, H.accent1], showValue: true, dataLabelPosition: 'ctr', dataLabelFormatCode: '"S/"0.00', dataLabelColor: 'FFFFFF', dataLabelFontBold: true, dataLabelFontSize: 12, valAxisHidden: true, valGridLine: { style: 'none' }, showLegend: true, legendPos: 'b', legendFontSize: 11, barGapWidthPct: 45 }));
  const cst = [['S/1.54 a 1.72', 'cuesta producir un brownie, sin planta propia'], ['58 a 66 %', 'margen bruto en el stand'], ['S/1.69 a 2.86', 'nos queda por brownie antes de pagar el stand']];
  cst.forEach((c, i) => {
    const x = 7.3, y = 1.6 + i * 1.12, w = 2.55, h = 0.98;
    card(s, x, y, w, h);
    T(s, [{ text: c[0], options: { bold: true, fontSize: 19, color: C.accent1, breakLine: true } }, { text: c[1], options: { fontSize: 11, color: C.text1 } }], { x: x + 0.18, y, w: w - 0.3, h, valign: 'middle' });
  });
  // cascada: del precio a la ganancia final por brownie (promedio del año 1)
  card(s, 10.05, 1.6, 2.68, 5.15, { fill: C.text2 });
  T(s, 'DE S/4.68 A LA GANANCIA', { x: 10.25, y: 1.72, w: 2.4, h: 0.3, fontSize: 11, bold: true, color: C.accent3, charSpacing: 1 });
  T(s, 'Promedio por brownie, año 1', { x: 10.25, y: 2.0, w: 2.4, h: 0.28, fontSize: 10, color: C.accent5 });
  const cas = [['Precio con IGV', 4.68, 0], ['IGV', -0.71, 1], ['Producir y vender', -2.10, 1], ['Stands, ferias y eventos', -0.98, 1], ['Gastos fijos', -0.63, 1], ['Intereses e impuesto', -0.06, 1], ['Ganancia final', 0.20, 2]];
  const sc = 1.68 / 4.68; let acc = 0;
  cas.forEach((c, i) => {
    const y = 2.42 + i * 0.6;
    T(s, c[0], { x: 10.25, y, w: 2.4, h: 0.24, fontSize: 10, color: C.background2, bold: c[2] !== 1 });
    let x0, w;
    if (c[2] === 0) { x0 = 0; w = c[1]; acc = c[1]; }
    else if (c[2] === 1) { acc += c[1]; x0 = acc; w = -c[1]; }
    else { x0 = 0; w = c[1]; }
    const fillc = c[2] === 0 ? C.accent5 : (c[2] === 2 ? C.accent3 : C.accent1);
    s.addShape(pres.shapes.RECTANGLE, { x: 10.25 + x0 * sc, y: y + 0.26, w: Math.max(0.03, w * sc), h: 0.22, fill: { color: fillc }, line: { color: fillc, width: 0 } });
    T(s, (c[1] < 0 ? '−S/' : 'S/') + Math.abs(c[1]).toFixed(2), { x: 11.98, y: y + 0.24, w: 0.66, h: 0.26, fontSize: 10.5, bold: true, align: 'right', valign: 'middle', color: c[2] === 2 ? C.accent3 : C.background1 });
  });
  card(s, 7.3, 4.98, 2.55, 1.77, { fill: C.accent1 });
  T(s, [{ text: 'S/0.20 → S/0.40', options: { bold: true, fontSize: 19, color: C.background1, breakLine: true } }, { text: 'ganancia final por brownie en el año 1 y en el año 2, con 3 puntos todo el año', options: { fontSize: 11, color: C.background1 } }], { x: 7.48, y: 4.98, w: 2.25, h: 1.77, valign: 'middle' });
  s.addNotes('Hoja Costeo del Excel v7, por brownie y sin IGV (el IGV es del Estado, no nuestro). Producir: S/1.72 la unidad suelta (lleva su etiqueta con el código de la app), S/1.68 en la caja de 3, S/1.64 en el pack de 6 (opción B, cada brownie en su bolsita) y S/1.54 en el pack de 12. Vender: un brownie de degustación por cada 10 vendidos, movilidad, el 3 % del pago con Yape o tarjeta y el 1 % de pago a cuenta de renta. Lo que queda (S/2.86 la unidad, S/2.50 la caja de 3, S/1.85 el pack de 6 y S/1.69 el pack de 12) paga el espacio, al vendedor y los gastos fijos. Margen bruto en el stand: unidad 66 %, caja de 3 64 %, pack de 6 58 % y pack de 12 58 %. Cascada del año 1 (promedio de todos los canales): de S/4.68 que paga el cliente, S/0.71 es IGV, S/2.10 producir y vender, S/0.98 stands, ferias y eventos, S/0.63 gastos fijos y S/0.06 intereses e impuesto: quedan S/0.20 de ganancia final por brownie (utilidad neta de S/10,379 / 52,331 brownies). En el año 2 los gastos fijos se reparten entre más brownies y la ganancia final sube a S/0.40 (S/28,447 / 70,452). Nota: no hay planta propia, se paga por brownie hecho.');

  // =============== 19b. DOCUMENTOS E INVERSIÓN ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · INVERSIÓN INICIAL', 'Lo que necesitamos para empezar: S/40,876, con todos los permisos');
  const docs = [['Crear la empresa (S.A.C.) ante notario', 'S/150'], ['RUC, registro de microempresa y libro de reclamaciones', 'S/0'], ['Marca registrada en INDECOPI (alimentos)', 'S/401'], ['Revisión legal del contrato con la planta', 'S/400'], ['Análisis para el registro sanitario (3 sabores)', 'S/1,800'], ['Perfil nutricional y hierro', 'S/1,125'], ['Estudio de cuánto dura el producto', 'S/1,050'], ['Etiqueta (rotulado y Ley 30021)', 'S/650'], ['Registro sanitario de DIGESA (tasa)', 'S/0'], ['Seguro para los stands (1 año)', 'S/600']];
  const dh = (t, al) => ({ text: t, options: { bold: true, color: C.background1, fill: { color: C.text2 }, fontSize: 13, align: al } });
  s.addTable([[dh('Documento o permiso', 'left'), dh('Costo', 'right')], ...docs.map(d => [{ text: d[0], options: { fontSize: 13, fill: { color: 'FFFFFF' } } }, { text: d[1], options: { fontSize: 13, align: 'right', fill: { color: 'FFFFFF' } } }]),
    [{ text: 'Total documentos y permisos', options: { bold: true, fontSize: 14, fill: { color: 'F6DCD5' } } }, { text: 'S/6,176', options: { bold: true, fontSize: 14, align: 'right', color: C.accent1, fill: { color: 'F6DCD5' } } }]],
    { x: 0.6, y: 1.65, w: 6.4, colW: [5.2, 1.2], rowH: 0.4, border: { type: 'solid', pt: 0.75, color: 'E8D8C4' }, color: C.text1, valign: 'middle', margin: 0.06 });
  s.addChart(pres.charts.DOUGHNUT, [{ name: 'Inversión', labels: ['Arranque', 'Equipos y 1 carrito', 'Documentos y permisos', 'Desarrollo del producto', 'Imprevistos', 'Marca y app'], values: [19155, 4838, 6176, 3741, 3716, 3250] }],
    Object.assign(chartText(), { x: 7.2, y: 1.55, w: 5.7, h: 4.05, title: 'Inversión inicial: S/40,876', holeSize: 50, chartColors: [H.accent2, H.accent3, H.accent1, H.accent4, H.accent5, H.accent6], showPercent: true, showValue: false, showLegend: true, legendPos: 'b', legendFontSize: 10, dataLabelColor: 'FFFFFF', dataLabelFontSize: 11, dataLabelFontBold: true }));
  card(s, 7.4, 5.7, 5.33, 1.0, { fill: C.text2 });
  T(s, [{ text: 'Socios S/25,000 · préstamo S/16,000', options: { bold: true, fontSize: 16, color: C.accent3, breakLine: true } }, { text: '24 cuotas de S/898 (interés de 35 % al año) · línea de crédito de respaldo S/3,000', options: { fontSize: 12, color: C.background1 } }], { x: 7.65, y: 5.7, w: 4.9, h: 1.0, valign: 'middle' });
  s.addNotes('Hoja Inversion del Excel v7. Los documentos se consideran listos desde el primer día de ventas (enero de 2027, mes 1): su costo se paga una sola vez dentro de la inversión inicial y no limita la proyección. Siglas en palabras simples: S.A.C. es el tipo de empresa (sociedad anónima cerrada), que se crea en un Centro de Desarrollo Empresarial (CDE) de PRODUCE con notario; REMYPE es el registro de micro y pequeña empresa; la marca se registra en la clase 30 de INDECOPI, la de alimentos como pasteles y galletas; el seguro (póliza de responsabilidad civil) lo piden algunos malls y cuesta S/600 al año; la tasa del registro sanitario es S/0 con el TUPA 2026. El carné de sanidad ya no lo paga la empresa: es requisito para contratar a vendedores y coordinadora (ahorro de S/75; hay que verificar que el carné de su distrito valga en cada mall). El arranque incluye empaque (S/3,150, con los códigos de la app), stock de enero y febrero (S/4,801), marketing de lanzamiento (S/3,204) y capital de trabajo (S/8,000). Marca y app suman S/3,250: identidad S/800, fotos S/300, web y dominio S/150 y S/2,000 para terminar y publicar la app Andi, Misión Hierro, porque el prototipo ya funciona (documento 09). Financiamiento: S/25,000 de los 5 socios y un préstamo de S/16,000 a 24 cuotas de S/898 (tasa efectiva anual, TEA, de 35 %). Además se abre una línea de crédito de S/3,000 que solo se usa si las ventas bajan.');

  // =============== 20. FIJOS Y EQUILIBRIO ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · PUNTO DE EQUILIBRIO', 'Cuántos brownies hay que vender cada mes para no perder');
  s.addChart(pres.charts.DOUGHNUT, [{ name: 'Costos', labels: ['Vendedores de stand', 'Espacio de stands', 'Administración y app', 'Marketing y embajadoras', 'Ferias y eventos', 'Coordinadora', 'Depreciación'], values: [1973, 1400, 995, 900, 878, 709, 134] }],
    Object.assign(chartText(), { x: 0.4, y: 1.55, w: 4.8, h: 4.75, title: 'Lo que cuesta operar al mes, sin contar la fabricación: S/6,989', titleFontSize: 13, holeSize: 50, chartColors: [H.accent1, H.accent6, H.accent3, H.accent2, H.accent4, H.accent5, 'B9A089'], showValue: true, showPercent: false, dataLabelFormatCode: '"S/"#,##0', showLegend: true, legendPos: 'b', legendFontSize: 10, dataLabelColor: 'FFFFFF', dataLabelFontSize: 10, dataLabelFontBold: true }));
  const und = [870, 2830, 3734, 4420, 4304, 4038, 3824, 5208, 5603, 6011, 5861, 5628];
  const beq = [2119, 3495, 3106, 4232, 3499, 3516, 3378, 4204, 4215, 4360, 4318, 4188];
  s.addChart([
    { type: pres.charts.BAR, data: [{ name: 'Brownies vendidos', labels: MESES3, values: und }], options: { chartColors: [H.accent2], barGapWidthPct: 45 } },
    { type: pres.charts.LINE, data: [{ name: 'Brownies que necesitamos para no perder', labels: MESES3, values: beq }], options: { chartColors: [H.accent1], lineSize: 3, lineDataSymbol: 'circle', lineDataSymbolSize: 6 } },
  ], Object.assign(chartText(), { x: 5.4, y: 1.55, w: 7.5, h: 4.75, title: 'Brownies al mes frente a los que necesitamos (2027)', showLegend: true, legendPos: 'b', valAxisLabelFormatCode: '#,##0' }));
  const pts = [['1 punto', '≈ 2,100 al mes', 'enero'], ['2 puntos', '≈ 3,100 a 3,500', 'febrero a julio'], ['3 puntos', '≈ 4,200 a 4,400', 'agosto a diciembre']];
  pts.forEach((p, i) => {
    const w = 3.95, x = 0.6 + i * (w + 0.14);
    card(s, x, 6.38, w, 0.52, { r: 0.1, fill: i === 2 ? C.text2 : C.background1 });
    T(s, [{ text: p[0] + ': ', options: { bold: true, color: i === 2 ? C.accent3 : C.accent1 } }, { text: p[1] + ' ', options: { bold: true } }, { text: '(' + p[2] + ')', options: { fontSize: 11 } }], { x: x + 0.2, y: 6.38, w: w - 0.3, h: 0.52, valign: 'middle', fontSize: 13, color: i === 2 ? C.background1 : C.text1 });
  });
  s.addNotes('Punto de equilibrio: cuántos brownies hay que vender en el mes para que lo que dejan cubra todos los costos de ese mes. Cada punto de venta que se abre sube la valla porque suma espacio (S/600) y vendedor (S/90 por día). Por eso el equilibrio sube en escalones: con 1 punto (enero) hacen falta unos 2,100 brownies; con 2 puntos, de 3,100 a 3,500 (abril llega a 4,232 por la feria del Día del Niño); con 3 puntos, de 4,200 a 4,400. Solo enero y febrero quedan por debajo. Costos de operar al mes, sin contar la fabricación (promedio de 2027, Excel v7): vendedores S/1,973, espacio S/1,400, administración y app S/995 (S/745 + S/250), marketing S/700 y embajadoras S/200, ferias y eventos S/878, coordinadora S/709 y depreciación S/134. El promedio anual que da el Excel es 3,096 brownies al mes (516 packs de 6), pero la línea mes a mes es la que se usa para decidir.');

  // =============== 21. RESULTADO ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · RESULTADO DEL AÑO 1', 'Desde marzo, todos los meses dan ganancia');
  const res1 = [-2539, -1513, 1253, 368, 1463, 920, 820, 1818, 2506, 2880, 2662, 2784];
  s.addChart(pres.charts.BAR, [{ name: 'Resultado operativo', labels: MESES3, values: res1 }],
    Object.assign(chartText(), { x: 0.4, y: 1.55, w: 8.5, h: 4.75, barDir: 'col', title: 'Ganancia o pérdida de cada mes de 2027 (S/, antes de intereses e impuesto)', chartColors: [H.accent4], invertedColors: [H.accent1], showValue: true, dataLabelPosition: 'outEnd', dataLabelFormatCode: '#,##0', valAxisLabelFormatCode: '#,##0', showLegend: false, barGapWidthPct: 40, dataLabelFontSize: 11 }));
  card(s, 0.6, 6.38, 8.3, 0.52, { r: 0.1, fill: C.background2, noShadow: true });
  T(s, [{ text: 'Respaldo: ', options: { bold: true, color: C.accent1 } }, { text: 'la caja más baja es S/2,545 (febrero). Si vendemos 20 % menos, llega a −S/2,188 y la cubre la línea de crédito de S/3,000.' }], { x: 0.8, y: 6.38, w: 8.0, h: 0.52, valign: 'middle', fontSize: 12, color: C.text1 });
  const kpi = [['S/244,728', 'ventas con IGV'], ['S/13,423', 'resultado operativo (6.5 % de las ventas)'], ['S/10,379', 'utilidad neta: 42 % de lo que pusieron los socios'], ['Año 2: S/28,447', 'de utilidad neta, con 3 puntos todo el año']];
  kpi.forEach((k, i) => {
    const x = 9.1, y = 1.6 + i * 1.33, w = 3.63, h = 1.18;
    card(s, x, y, w, h, { fill: i === 2 ? C.accent1 : (i === 3 ? C.text2 : C.background1) });
    T(s, [{ text: k[0], options: { bold: true, fontSize: 22, color: i === 2 ? C.background1 : (i === 3 ? C.accent3 : C.accent1), breakLine: true } }, { text: k[1], options: { fontSize: 12, color: i >= 2 ? C.background1 : C.accent2 } }], { x: x + 0.25, y, w: w - 0.4, h, valign: 'middle' });
  });
  s.addNotes('Resultado operativo mensual de la opción B (hoja Mensual del Excel v7), con vendedores pagados en todos los stands y eventos y coordinadora en planilla. Enero pierde S/2,539 (un solo punto y vacaciones) y febrero S/1,513 (abre el segundo punto y se paga la feria de campaña escolar); desde marzo todos los meses ganan, aunque abril queda justo (S/368) por la feria del Día del Niño. Del resultado operativo (S/13,423) a la utilidad neta: más S/2,074 de pagos a cuenta ya restados, menos S/3,965 de intereses del préstamo y menos S/1,153 de impuesto a la renta (Régimen MYPE Tributario, 10 %): S/10,379. Sobre los S/25,000 de los socios, eso es 42 % en el primer año. La inversión de S/40,876 se recupera en el mes 23 (noviembre de 2028). Riesgos: si las ventas por punto bajan 20 %, el año 1 queda casi en cero (S/608) y la caja baja a −S/2,188: la cubre la línea de crédito de S/3,000. Si suben 20 %, el resultado llega a S/26,237 y se recupera en el mes 17. Si el espacio cuesta S/1,000 por punto, el resultado baja a S/2,223. El año 2 tiene su propia diapositiva.');

  // =============== 21b. AÑO 2 ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · RESULTADO DEL AÑO 2', 'Año 2: con 3 puntos todo el año, la utilidad casi se triplica');
  const res2 = [791, -40, 2779, 2672, 3317, 3023, 2668, 3082, 3023, 3071, 3071, 3001];
  s.addChart(pres.charts.BAR, [
    { name: '2027 (año 1)', labels: MESES3, values: res1 },
    { name: '2028 (año 2)', labels: MESES3, values: res2 },
  ], Object.assign(chartText(), { x: 0.4, y: 1.55, w: 8.5, h: 4.75, barDir: 'col', title: 'Ganancia o pérdida de cada mes (S/, antes de intereses e impuesto)', chartColors: [H.accent5, H.accent1], showValue: false, valAxisLabelFormatCode: '#,##0', showLegend: true, legendPos: 'b', barGapWidthPct: 35 }));
  const sup2 = ['3 puntos todo el año', '80 a 90 brownies por día', 'quioscos todo el año escolar', 'mismos precios y costos'];
  sup2.forEach((t, i) => {
    const w = 1.98, x = 0.6 + i * (w + 0.13);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 6.42, w, h: 0.45, rectRadius: 0.22, fill: { color: C.background1 }, line: { color: C.accent5, width: 1 } });
    T(s, t, { x, y: 6.42, w, h: 0.45, fontSize: 11, bold: true, align: 'center', valign: 'middle', color: C.text2 });
  });
  const k2 = [['S/322,329', 'ventas con IGV (+32 %)'], ['S/30,459', 'resultado operativo (11.2 % de las ventas)'], ['S/28,447', 'utilidad neta: 2.7 veces la del año 1'], ['Mes 23', 'recuperamos los S/40,876 (noviembre de 2028)']];
  k2.forEach((k, i) => {
    const x = 9.1, y = 1.6 + i * 1.33, w = 3.63, h = 1.18;
    card(s, x, y, w, h, { fill: i === 2 ? C.accent1 : C.background1 });
    T(s, [{ text: k[0], options: { bold: true, fontSize: 22, color: i === 2 ? C.background1 : C.accent1, breakLine: true } }, { text: k[1], options: { fontSize: 12, color: i === 2 ? C.background1 : C.accent2 } }], { x: x + 0.25, y, w: w - 0.4, h, valign: 'middle' });
  });
  s.addNotes('Hoja Anio2 del Excel v7 (enero a diciembre de 2028). Supuestos: los 3 puntos de venta abren todo el año con 80 brownies por día en enero y febrero y 90 el resto (el ritmo con el que cerró 2027); los quioscos escolares venden todo el año escolar; las tiendas naturistas pasan de 480 a 660 brownies al mes; se repiten las ferias de campaña escolar y del Día del Niño; los precios, costos y la mezcla de presentaciones son los mismos de 2027. Es un escenario prudente: no cuenta el cuarto punto ni la maquila más barata, que solo se activan si se cumplen sus metas (ver el cierre). Resultado: 70,452 brownies, S/322,329 de ventas con IGV, S/30,459 de resultado operativo y S/28,447 de utilidad neta (los intereses bajan a S/1,582 porque el préstamo termina en diciembre de 2028). La caja cierra 2028 en S/33,684 con el préstamo pagado. Rentabilidad para los socios: 114 % de su aporte en el año 2. Febrero queda casi en cero (−S/40) por la feria de campaña escolar.');

  // =============== 22. CANVAS ===============
  s = content(S7, 'TRABAJO DE CAMPO 7 · MODELO CANVAS', 'El negocio en una página: por qué AndiBite funciona');
  const cw5 = (12.13 - 4 * 0.08) / 5, top = 1.52, th = 3.62, half = (th - 0.08) / 2, bh = 1.22;
  const colX = (i) => 0.6 + i * (cw5 + 0.08);
  const blocks = [
    ['FaHandshake', 'Socios clave', colX(0), top, cw5, th, ['Planta con certificación que fabrica por nosotros', 'Laboratorio que mide el hierro de cada lote', 'Proveedor de sangrecita en polvo con registro sanitario', 'Malls y súper para A y para B', 'Pediatras y nutricionista que nos recomiendan']],
    ['FaCogs', 'Actividades clave', colX(1), top, cw5, half, ['Fabricar sin planta propia', 'Medir y publicar el hierro', 'Vender en stands y ferias', 'Recompra con la app']],
    ['FaKey', 'Recursos clave', colX(1), top + half + 0.08, cw5, half, ['Receta que esconde la sangrecita', 'Marca y registro sanitario', 'App y datos de cada familia', 'Equipo de venta pagado']],
    ['FaGift', 'Propuesta de valor', colX(2), top, cw5, th, ['El snack de lonchera con hierro que el niño sí se come', 'Hierro medido en cada lote, visible en la app', 'Sabor a brownie, sin octógono', 'App para padres y juego para niños', 'Se prueba gratis antes de comprar']],
    ['FaHeart', 'Relación con clientes', colX(3), top, cw5, half, ['Degustación cara a cara', 'La app avisa cuándo recomprar', 'Mamás embajadoras por salón']],
    ['FaTruck', 'Canales', colX(3), top + half + 0.08, cw5, half, ['Stands y carrito 43 %', 'WhatsApp 18 % · ferias 14 %', 'Colegios y naturistas 25 %']],
    ['FaUsers', 'Segmentos', colX(4), top, cw5, th, ['Padres A y B de 32 a 45 que leen etiquetas (7 de cada 10, B)', 'Hijos de 4 a 11 en colegio privado', '46,000 hogares en Lima Top y Moderna', 'Colegios y tiendas naturistas']],
    ['FaCalculator', 'Estructura de costos', colX(0), top + th + 0.08, cw5 * 2.5 + 0.08 * 2, bh, ['Producir S/1.64 por brownie, sin comprar planta', 'Stands, ferias y vendedores S/51,010 al año · fijos S/2,738 al mes', 'Equilibrio: 2,100 a 4,400 brownies al mes, según los puntos abiertos']],
    ['FaCoins', 'Fuentes de ingreso', colX(0) + cw5 * 2.5 + 0.08 * 3, top + th + 0.08, 12.13 - (cw5 * 2.5 + 0.08 * 3), bh, ['Unidad S/6.00 · caja de 3 S/16.50 · pack de 6 S/27.90', 'Año 1: S/244,728 de ventas y S/10,379 de utilidad neta', 'Año 2: S/322,329 de ventas y S/28,447 de utilidad neta']],
  ];
  for (const b of blocks) {
    const [ic, name, x, y, w, h, items] = b;
    const vp = name === 'Propuesta de valor';
    card(s, x, y, w, h, { r: 0.08, fill: vp ? C.accent1 : C.background1 });
    s.addImage({ data: await icon(ic, vp ? 'FFFFFF' : H.accent1), x: x + 0.12, y: y + 0.11, w: 0.26, h: 0.26 });
    T(s, name.toUpperCase(), { x: x + 0.46, y: y + 0.08, w: w - 0.52, h: 0.32, valign: 'middle', fontSize: 11, bold: true, color: vp ? C.background1 : C.text2, charSpacing: 1 });
    T(s, items.map((t, j) => ({ text: t, options: { bullet: { indent: 9 }, breakLine: j < items.length - 1, bold: vp && j === 0 } })), { x: x + 0.1, y: y + 0.44, w: w - 0.18, h: h - 0.5, fontSize: name.startsWith('Estructura') || name.startsWith('Fuentes') ? 11.5 : 12, paraSpaceAfter: 3, color: vp ? C.background1 : C.text1 });
  }
  T(s, '"Hierro medido. Sabor a brownie."', { x: colX(2) + 0.12, y: top + th - 0.62, w: cw5 - 0.24, h: 0.5, fontSize: 13, bold: true, italic: true, color: C.accent3 });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 6.48, w: 12.13, h: 0.46, rectRadius: 0.23, fill: { color: C.text2 }, line: { color: C.text2, width: 0 } });
  T(s, [{ text: 'Para el inversionista:  ', options: { bold: true, color: C.accent3 } }, { text: 'margen bruto de 58 a 66 % · sin planta propia · ganancia desde marzo · inversión recuperada en 23 meses · utilidad ×2.7 en el año 2' }], { x: 0.85, y: 6.48, w: 11.7, h: 0.46, valign: 'middle', fontSize: 13, color: C.background1 });
  s.addNotes('Modelo Canvas con los nueve bloques de Osterwalder y Pigneur, escrito en frases cortas y con las cifras del Excel v7, para que se entienda de un vistazo y muestre por qué el negocio es atractivo. Socios: la planta fabrica por nosotros (no compramos planta), el laboratorio mide el hierro de cada lote, el proveedor vende la sangrecita en polvo con registro sanitario, los malls y supermercados ponen el espacio, y los pediatras y la nutricionista nos recomiendan. Propuesta de valor: el snack de lonchera con hierro que el niño sí se come, con el hierro medido en cada lote y visible en la app, sabor a brownie y sin octógono. Canales (unidades del año 1): stands y carrito 43 %, WhatsApp 18 %, ferias y eventos 14 %, colegios y naturistas 25 %. Costos: S/1.64 por brownie (pack de 6), S/51,010 al año de stands, ferias, eventos y vendedores, S/2,738 al mes de gastos fijos con la app incluida. Ingresos: año 1 S/244,728 y S/10,379 de utilidad neta (42 % del aporte de los socios); año 2 S/322,329 y S/28,447 (114 %). La franja de abajo resume el argumento para un inversionista.');

  // =============== 23. SECCIÓN TC8 ===============
  s = await section('TC8 · Propuesta de valor', '08', 'Mapa de propuesta de valor', 'Perfil del cliente · Mapa de valor · Encaje · App Andi, Misión Hierro · Competencia · Plan de marketing', 'FaGift');
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
    sect(sq.x + 0.15, sq.y + 0.2, 2.2, 4.5, 'Productos y servicios', ['Pack de 6 (S/27.90 en stand)', 'Pack de 12 "Semana completa"', 'Caja de 3 sabores (S/16.50)', 'Stand con degustación gratis', 'App Andi, Misión Hierro'], 'FaBoxOpen', H.accent2),
    sect(sq.x + sq.d / 2 + 0.15, sq.y + 0.2, 2.2, 2.2, 'Creadores de alegrías', ['El niño pide su sabor', 'Hierro del lote en la app', 'Juego educativo de Andi'], 'FaStar', H.accent4),
    sect(sq.x + sq.d / 2 + 0.15, sq.y + sq.d / 2 + 0.2, 2.2, 2.2, 'Aliviadores de dolor', ['Cacao que esconde la sangrecita', 'Loncheras listas en la app', 'Aviso antes de que se acabe'], 'FaFirstAid', H.accent1),
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
  s.addNotes('Value Proposition Canvas de Osterwalder. A la derecha, el perfil del cliente: trabajos, dolores y alegrías, con evidencia de las 10 entrevistas, el focus 1 y datos secundarios (Ipsos 2025, Kantar 2025, ENDES). A la izquierda, el mapa de valor: productos y servicios (incluida la app Andi, Misión Hierro), aliviadores de dolor y creadores de alegrías. El encaje se detalla en la siguiente diapositiva.');

  // =============== 25. ENCAJE ===============
  s = content(S8, 'TRABAJO DE CAMPO 8 · ENCAJE', 'Cada problema del padre tiene una respuesta de AndiBite');
  T(s, 'PROBLEMA DEL PADRE', { x: 0.6, y: 1.6, w: 4, h: 0.3, fontSize: 12, bold: true, color: C.accent6, charSpacing: 1 });
  T(s, 'LO QUE HACE ANDIBITE', { x: 6.8, y: 1.6, w: 4, h: 0.3, fontSize: 12, bold: true, color: C.text2, charSpacing: 1 });
  T(s, 'EVIDENCIA', { x: 10.95, y: 1.6, w: 1.78, h: 0.3, fontSize: 12, bold: true, color: C.accent2, charSpacing: 1 });
  const fit = [
    ['Lo saludable regresa intacto', 'Cacao y canela esconden la sangrecita', 'Entrevistas y focus 1'],
    ['El octógono contradice lo saludable', 'Sin octógono: menos de 10 g de azúcar', '83 % · Ipsos 2025'],
    ['No confío en lo envasado', 'Hierro medido del lote en la app', '42 % · Kantar 2025'],
    ['El jueves ya no sé qué mandar', 'Plan de loncheras en la app', 'Entrevistas'],
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

  // =============== 25b. APP ANDI: QUÉ ES ===============
  s = content(S8, 'TRABAJO DE CAMPO 8 · INNOVACIÓN TECNOLÓGICA', 'App Andi, Misión Hierro: viene con cada envase');
  card(s, 0.6, 1.6, 4.75, 4.45);
  T(s, 'MODO PADRES', { x: 0.9, y: 1.8, w: 4.2, h: 0.3, fontSize: 12, bold: true, color: C.accent1, charSpacing: 1 });
  T(s, 'Datos que dan confianza', { x: 0.9, y: 2.1, w: 4.2, h: 0.42, fontSize: 19, bold: true, color: C.text2 });
  const fp = [['FaQrcode', 'Mi lote: hierro medido'], ['FaTrafficLight', 'Semáforo de hierro semanal'], ['FaUtensils', 'Plan de loncheras con IA'], ['FaHeartbeat', 'Recordatorio de hemoglobina'], ['FaWhatsapp', 'Recompra en un clic']];
  for (let i = 0; i < fp.length; i++) {
    const y = 2.7 + i * 0.66;
    await iconCircle(s, fp[i][0], 0.9, y, 0.5, i === 0 ? C.accent1 : C.text2, i === 0 ? 'FFFFFF' : H.accent5);
    T(s, fp[i][1], { x: 1.55, y, w: 3.7, h: 0.5, valign: 'middle', fontSize: 15, color: C.text1, bold: i === 0 });
  }
  card(s, 5.55, 1.6, 4.4, 4.45, { fill: C.text2 });
  T(s, 'MODO NIÑOS', { x: 5.85, y: 1.8, w: 3.9, h: 0.3, fontSize: 12, bold: true, color: C.accent3, charSpacing: 1 });
  T(s, 'Aprender jugando con Andi', { x: 5.85, y: 2.1, w: 3.9, h: 0.42, fontSize: 19, bold: true, color: C.background1 });
  const fk = [['FaAppleAlt', 'Arma tu plato fuerte'], ['FaClone', 'Memoria andina'], ['FaQuestionCircle', '¿Verdad o mito?'], ['FaRoute', 'Ruta de hábitos'], ['FaLock', 'Lo abre el padre, con tiempo']];
  for (let i = 0; i < fk.length; i++) {
    const y = 2.7 + i * 0.66;
    await iconCircle(s, fk[i][0], 5.85, y, 0.5, i < 4 ? C.accent3 : C.accent5, H.dk2);
    T(s, fk[i][1], { x: 6.5, y, w: 3.35, h: 0.5, valign: 'middle', fontSize: 15, color: C.background1 });
  }
  s.addImage({ path: 'img/app-lote.png', x: 10.33, y: 1.5, w: 2.22, h: 4.48 });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 6.2, w: 12.13, h: 0.6, rectRadius: 0.3, fill: { color: C.accent1 }, line: { color: C.accent1, width: 0 } });
  T(s, [{ text: 'Cumple la Ley 30021: ', options: { bold: true } }, { text: 'en el modo niño no hay compras, ni publicidad, ni premios por comprar.' }], { x: 0.9, y: 6.2, w: 11.6, h: 0.6, valign: 'middle', fontSize: 15, color: C.background1 });
  s.addNotes('La innovación tecnológica que pidió la profesora: una app propia que viene con el producto (documento 09). Es una app web instalable (PWA): el padre escanea el QR del envase y se abre, sin descargar nada. Modo padres: ve el hierro medido en laboratorio de su lote, el semáforo de hierro de la semana frente a una referencia por edad, el plan de loncheras (con IA de Gemini), el recordatorio del control de hemoglobina y la recompra en un clic por WhatsApp. Modo niños: Misión Hierro, con Andi, una llamita exploradora; cuatro juegos que enseñan a combinar hierro con vitamina C, superalimentos andinos, mitos y hábitos, con voz para los que no leen. Lo abre el padre y fija el tiempo de juego. Por la Ley 30021 (art. 8), el modo niño no muestra el producto ni premia la compra; Andi nunca dice "come AndiBite". Solo pedimos apodo y edad del niño (Ley 29733).');

  // =============== 25c. APP ANDI: CÓMO FUNCIONA Y COSTO ===============
  s = content(S8, 'TRABAJO DE CAMPO 8 · INNOVACIÓN TECNOLÓGICA', 'Del stand a la recompra, con la app en el medio');
  const flujo = [['FaStore', 'Compra en el stand'], ['FaQrcode', 'Escanea el QR'], ['FaFlask', 'Ve el hierro de su lote'], ['FaUtensils', 'Usa loncheras y semáforo'], ['FaBell', 'Aviso y recompra']];
  for (let i = 0; i < 5; i++) {
    const w = 2.27, x = 0.6 + i * (w + 0.2), y = 1.65;
    if (i < 4) s.addShape(pres.shapes.LINE, { x: x + 1.15, y: y + 0.5, w: w + 0.2 - 1.15, h: 0, line: { color: C.accent5, width: 2, dashType: 'dash', endArrowType: 'triangle' } });
    await iconCircle(s, flujo[i][0], x, y, 1.0, i === 2 ? C.accent1 : C.text2, i === 2 ? 'FFFFFF' : H.accent5);
    T(s, flujo[i][1], { x, y: y + 1.15, w: w - 0.1, h: 0.7, fontSize: 16, bold: true, color: C.text2 });
  }
  const ac = [['S/2,000', 'para terminar y publicar: el prototipo ya funciona'], ['S/250', 'al mes: servidor, IA y mantenimiento'], ['S/0.04', 'por código único impreso'], ['S/375', 'por análisis de hierro (cada 2 meses desde julio)']];
  ac.forEach((c, i) => {
    const w = 2.86, x = 0.6 + i * (w + 0.23), y = 3.75, h = 1.35;
    card(s, x, y, w, h, { fill: i === 0 ? C.accent1 : C.background1 });
    T(s, [{ text: c[0], options: { bold: true, fontSize: 28, color: i === 0 ? C.background1 : C.accent1, breakLine: true } }, { text: c[1], options: { fontSize: 13, color: i === 0 ? C.background1 : C.accent2 } }], { x: x + 0.25, y, w: w - 0.4, h, valign: 'middle' });
  });
  card(s, 0.6, 5.3, 7.4, 1.45, { fill: C.background2, noShadow: true });
  T(s, [{ text: 'Tecnología', options: { bold: true, fontSize: 15, color: C.text2, breakLine: true } }, { text: 'App web: se abre con el QR, sin descargar nada · servidor en Google Cloud · plan de loncheras con IA de Gemini · funciona sin internet', options: { fontSize: 14 } }], { x: 0.85, y: 5.3, w: 7.0, h: 1.45, valign: 'middle' });
  card(s, 8.2, 5.3, 4.53, 1.45, { fill: C.text2 });
  T(s, [{ text: '30 % de envases escaneados', options: { bold: true, fontSize: 17, color: C.accent3, breakLine: true } }, { text: 'Meta del año 1. La mitad de la recompra llega desde el aviso de la app.', options: { fontSize: 13, color: C.background1 } }], { x: 8.45, y: 5.3, w: 4.1, h: 1.45, valign: 'middle' });
  s.addNotes('Recorrido: el padre compra en el stand, escanea el QR del envase, ve el hierro medido de su lote (el dato que pedían Claudia y el 42 % que desconfía de lo envasado), usa el plan de loncheras y el semáforo durante la semana, y cuando el pack se está acabando la app le avisa y abre WhatsApp con el pedido listo. Costos, ya en el Excel v7: el prototipo funcional ya está hecho (carpeta app-andi-mision-hierro del repositorio), así que la inversión baja de S/6,000 a S/2,000 para conectar el laboratorio real, probar con 10 familias, revisar los textos legales y publicar; S/250 al mes de Cloud Run, Firestore, IA y mantenimiento; S/0.04 por código impreso con dato variable; y S/375 por análisis de hierro, todos los meses hasta junio y cada 2 meses desde julio, cuando la receta ya es estable. Es una app web instalable (en inglés, PWA): se abre desde el QR del envase sin pasar por una tienda de apps.');

  // =============== 26. COMPETENCIA ===============
  s = content(S8, 'TRABAJO DE CAMPO 8 · FRENTE A LA COMPETENCIA', 'Cuesta un poco más que Fika, pero mide su hierro y trae app');
  const comp = ['Bimbo Nutra Bien', 'Siete Dragones', 'Nutri H', 'Fika', 'Mamalama', 'AndiBite pack de 12', 'AndiBite pack de 6'];
  const vals = [1.67, 3.01, 3.20, 4.00, 4.10, 4.16, 4.48];
  const isAB = comp.map(c => c.startsWith('AndiBite'));
  s.addChart(pres.charts.BAR, [
    { name: 'Competencia', labels: comp, values: vals.map((v, i) => isAB[i] ? 0 : v) },
    { name: 'AndiBite', labels: comp, values: vals.map((v, i) => isAB[i] ? v : 0) },
  ], Object.assign(chartText(), { x: 0.4, y: 1.6, w: 7.0, h: 5.1, barDir: 'bar', barGrouping: 'stacked', title: 'Precio por 20 g (S/)', chartColors: [H.accent5, H.accent1], showValue: true, dataLabelPosition: 'inEnd', dataLabelFormatCode: '"S/"0.00;;;', dataLabelColor: H.dk1, dataLabelFontBold: true, valAxisHidden: true, valGridLine: { style: 'none' }, showLegend: false, barGapWidthPct: 35 }));
  const ck = (v) => ({ text: v, options: { align: 'center', fontSize: 16, bold: v === '✓', color: v === '✓' ? C.accent4 : C.accent2 } });
  const ab = (v) => ({ text: v, options: { align: 'center', fontSize: 16, bold: true, color: C.accent1, fill: { color: 'F6DCD5' } } });
  const th2 = (t, hl) => ({ text: t, options: { bold: true, fontSize: 11, align: 'center', color: C.background1, fill: { color: hl ? C.accent1 : C.text2 } } });
  const at = [['Hierro medido', '✓', '–', '–', '–'], ['App propia', '✓', '–', '–', '–'], ['Sin octógono', '✓*', '?', '✓', '?'], ['Varios sabores', '✓', '?', '–', '–'], ['Delivery', '✓', '✓', '✓', '–'], ['Formato postre', '✓', '–', '✓', '–']];
  s.addTable([[{ text: 'Atributo', options: { bold: true, fontSize: 12, color: C.background1, fill: { color: C.text2 } } }, th2('AndiBite', true), th2('Nutri H'), th2('Fika'), th2('Mamalama')],
    ...at.map(r => [{ text: r[0], options: { fontSize: 13, fill: { color: 'FFFFFF' } } }, ab(r[1]), ...r.slice(2).map(v => Object.assign(ck(v), { options: Object.assign(ck(v).options, { fill: { color: 'FFFFFF' } }) }))]),
  ], { x: 7.7, y: 1.75, w: 5.03, colW: [1.53, 0.875, 0.875, 0.875, 0.875], rowH: 0.45, border: { type: 'solid', pt: 0.75, color: 'E8D8C4' }, color: C.text1, valign: 'middle', margin: 0.05 });
  T(s, '* Meta, se confirma en laboratorio. ? = por completar en el store check.', { x: 7.7, y: 4.95, w: 5.03, h: 0.3, fontSize: 11, italic: true, color: C.accent2 });
  card(s, 7.7, 5.35, 5.03, 1.35, { fill: C.text2 });
  T(s, [{ text: 'S/4.48 por brownie', options: { bold: true, fontSize: 20, color: C.accent3, breakLine: true } }, { text: 'Por WhatsApp; S/4.65 en el stand. 12 % más que Fika, con hierro medido por lote y la app Andi.', options: { fontSize: 14, color: C.background1 } }], { x: 7.95, y: 5.4, w: 4.6, h: 1.25, valign: 'middle' });
  s.addNotes('Precios por 20 g consultados el 3 de octubre de 2026 (documento 02): Nutri H S/3.20, Fika S/4.00, Mamalama S/4.10, Siete Dragones S/3.01, Bimbo Nutra Bien S/1.67. AndiBite por WhatsApp: pack de 6 a S/26.90 (S/4.48 por brownie) y pack de 12 a S/49.90 (S/4.16); en el stand, pack de 6 a S/27.90 (S/4.65). Ningún competidor publica el hierro medido de cada lote ni ofrece una app para la familia. Completar con los datos del store check de La Molina.');

  // =============== 26a. PLAN DE MARKETING: FASES Y OBJETIVOS ===============
  const PM = require(require('path').join(__dirname, 'plan_mkt.json'));
  s = content(S8, 'PLAN DE MARKETING · OCTUBRE DE 2026 A DICIEMBRE DE 2027', 'S/24,544 para que nos prueben, compren y vuelvan');
  // mensajes
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 1.55, w: 12.13, h: 0.95, rectRadius: 0.12, fill: { color: C.text2 }, line: { color: C.text2, width: 0 } });
  T(s, [{ text: 'MENSAJE CENTRAL', options: { fontSize: 9.5, bold: true, color: C.accent3, charSpacing: 1, breakLine: true } }, { text: '"' + PM.mensajes.central + '"', options: { fontSize: 18, bold: true, italic: true, color: C.background1 } }], { x: 0.85, y: 1.55, w: 3.6, h: 0.95, valign: 'middle' });
  [['PADRE A · LIMA TOP', PM.mensajes.A], ['PADRE B · LIMA MODERNA', PM.mensajes.B]].forEach((m, i) => {
    const x = 4.6 + i * 4.08;
    T(s, [{ text: m[0], options: { fontSize: 9.5, bold: true, color: C.accent5, charSpacing: 1, breakLine: true } }, { text: m[1], options: { fontSize: 13, color: C.background1 } }], { x, y: 1.55, w: 3.95, h: 0.95, valign: 'middle' });
  });
  // fases
  const fcol = [C.accent2, C.accent1, C.accent4, C.text2];
  PM.fases.forEach((f, i) => {
    const w = 2.92, x = 0.6 + i * (w + 0.15), y = 2.68, h = 2.45;
    card(s, x, y, w, h);
    s.addShape(pres.shapes.RECTANGLE, { x, y, w, h: 0.12, fill: { color: fcol[i] }, line: { color: fcol[i], width: 0 } });
    T(s, (i + 1) + ' · ' + f.nombre.toUpperCase(), { x: x + 0.2, y: y + 0.24, w: w - 0.3, h: 0.28, fontSize: 11, bold: true, color: fcol[i], charSpacing: 1 });
    T(s, f.meses, { x: x + 0.2, y: y + 0.52, w: w - 0.3, h: 0.26, fontSize: 11, color: C.accent2 });
    T(s, f.objetivo, { x: x + 0.2, y: y + 0.82, w: w - 0.3, h: 0.62, fontSize: 13, bold: true, color: C.text2 });
    T(s, [{ text: 'S/' + f.inversion.toLocaleString('en-US'), options: { fontSize: 20, bold: true, color: C.accent1, breakLine: true } }, { text: 'Meta: ' + f.meta_clave, options: { fontSize: 11, color: C.text1 } }], { x: x + 0.2, y: y + 1.5, w: w - 0.3, h: 0.85, valign: 'top' });
  });
  // objetivos
  T(s, 'OBJETIVOS DEL AÑO 2027', { x: 0.6, y: 5.27, w: 6, h: 0.26, fontSize: 10.5, bold: true, color: C.accent1, charSpacing: 1 });
  PM.objetivos.forEach((o, i) => {
    const w = 2.33, x = 0.6 + i * (w + 0.12), y = 5.56, h = 1.32;
    card(s, x, y, w, h, { r: 0.1, fill: i === 0 ? C.accent1 : C.background1 });
    T(s, [{ text: o.titulo, options: { fontSize: 11, bold: true, color: i === 0 ? C.accent5 : C.accent2, breakLine: true } }, { text: o.meta, options: { fontSize: 12.5, bold: true, color: i === 0 ? C.background1 : C.text2 } }], { x: x + 0.15, y, w: w - 0.25, h, valign: 'middle' });
  });
  s.addNotes('Plan de marketing completo en el documento 04-reformulacion/10-plan-de-marketing-2027.md. Mensaje central: "Hierro medido. Sabor a brownie." Al padre A (Claudia, Lima Top) le hablamos del dato: el hierro medido de su lote. Al padre B (Rodrigo, Lima Moderna) le hablamos de resolver la semana a buen precio: el pack de 12 por WhatsApp sale S/4.16 por brownie. Desde febrero la pauta se reparte mitad en Lima Top y mitad en Lima Moderna. Cuatro fases: prelanzamiento (octubre a diciembre de 2026, S/1,758: lista de espera, video, influencers y material de punto de venta); lanzamiento (enero y febrero, S/5,796: apertura en Jockey y punto 2, feria de campaña escolar; 3,700 brownies); crecer (marzo a julio, S/9,770: quioscos, embajadoras, feria del Día del Niño y fechas clave; 20,320 brownies); expandir (agosto a diciembre, S/7,220: punto 3, 5 colegios y Navidad con cajas por pedido; 28,311 brownies). Total S/24,544: S/0.44 de marketing por brownie en 2027. Objetivos: vender lo del Excel v7 (52,331 brownies y S/244,728); recompra igual al 35 % de lo vendido en físico, con unos 2,300 contactos de WhatsApp con permiso; 30 % de envases escaneados; 230 familias nuevas por embajadoras; 5 colegios con quiosco (2 A y 3 B) y 8 tiendas naturistas. Las metas de contactos, escaneos y colegios son metas propuestas, calculadas en la sección 6.3 del documento 10. Indicadores que se revisan cada domingo: brownies por día y punto (80 a 100), recompra, contactos, escaneos, contactos por feria (50 o más) y familias por embajadoras (20 al mes).');

  // =============== 26b. GANTT DEL PLAN DE MARKETING ===============
  s = content(S8, 'PLAN DE MARKETING · CRONOGRAMA', 'Qué hacemos cada mes y qué meta buscamos');
  const GM = ['Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'];
  const gx = 4.1, gw = 12.73 - gx, cwm = gw / 15, gy0 = 1.48;
  const gfases = [[0, 2, 'PRELANZAMIENTO 2026', C.accent2], [3, 4, 'LANZAMIENTO', C.accent1], [5, 9, 'CRECER', C.accent4], [10, 14, 'EXPANDIR', C.text2]];
  gfases.forEach(f => {
    s.addShape(pres.shapes.RECTANGLE, { x: gx + f[0] * cwm + 0.02, y: gy0, w: (f[1] - f[0] + 1) * cwm - 0.04, h: 0.28, fill: { color: f[3] }, line: { color: f[3], width: 0 } });
    T(s, f[2], { x: gx + f[0] * cwm, y: gy0, w: (f[1] - f[0] + 1) * cwm, h: 0.28, fontSize: 9, bold: true, align: 'center', valign: 'middle', color: C.background1, charSpacing: 0.5 });
  });
  GM.forEach((m, i) => T(s, m, { x: gx + i * cwm, y: gy0 + 0.31, w: cwm, h: 0.22, fontSize: 9.5, bold: true, align: 'center', color: i < 3 ? C.accent2 : C.text2 }));
  const gcol = { Preparar: C.accent2, Lanzar: C.accent1, Fidelizar: C.accent4, Crecer: C.accent3 };
  const rh = 0.305, ry0 = gy0 + 0.56, nr = PM.gantt.length;
  for (let i = 0; i < 15; i++) if (i % 2 === 1) s.addShape(pres.shapes.RECTANGLE, { x: gx + i * cwm, y: ry0, w: cwm, h: nr * rh, fill: { color: 'F4E6D3' }, line: { color: 'F4E6D3', width: 0 } });
  s.addShape(pres.shapes.LINE, { x: gx + 3 * cwm, y: gy0 + 0.28, w: 0, h: nr * rh + 0.3, line: { color: C.accent1, width: 1.25, dashType: 'dash' } });
  let lastG = '';
  PM.gantt.forEach((r, i) => {
    const y = ry0 + i * rh, col = gcol[r.grupo];
    if (r.grupo !== lastG) { T(s, r.grupo.toUpperCase(), { x: 0.6, y: y + 0.02, w: 0.95, h: rh - 0.04, fontSize: 8, bold: true, color: col, valign: 'middle', charSpacing: 0.5 }); lastG = r.grupo; }
    s.addShape(pres.shapes.RECTANGLE, { x: 1.55, y: y + 0.08, w: 0.07, h: rh - 0.16, fill: { color: col }, line: { color: col, width: 0 } });
    T(s, r.actividad, { x: 1.68, y, w: gx - 1.72, h: rh, fontSize: 9, valign: 'middle', color: C.text1 });
    r.segmentos.forEach(sg => {
      const x0 = gx + sg[0] * cwm + 0.03, w = (sg[1] - sg[0] + 1) * cwm - 0.06;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x0, y: y + 0.05, w, h: rh - 0.1, rectRadius: 0.08, fill: { color: col }, line: { color: col, width: 0 } });
      if (sg[2]) T(s, sg[2], { x: x0 - 0.05, y: y + 0.05, w: w + 0.1, h: rh - 0.1, fontSize: (sg[1] === sg[0]) ? 7 : 8, bold: true, align: 'center', valign: 'middle', color: r.grupo === 'Crecer' ? C.text2 : C.background1 });
    });
  });
  const yg = ry0 + nr * rh + 0.07;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: yg, w: 12.13, h: 0.42, rectRadius: 0.08, fill: { color: C.text2 }, line: { color: C.text2, width: 0 } });
  T(s, [{ text: 'Inversión del mes (S/)  ', options: { bold: true } }, { text: 'total 24,544', options: { fontSize: 9, color: C.accent3 } }], { x: 0.8, y: yg, w: gx - 0.85, h: 0.42, fontSize: 10.5, valign: 'middle', color: C.background1 });
  PM.presupuesto_mensual.forEach((g, i) => T(s, g ? g.toLocaleString('en-US') : '–', { x: gx + i * cwm, y: yg, w: cwm, h: 0.42, fontSize: 9.5, bold: true, align: 'center', valign: 'middle', color: (i === 4 || i === 6) ? C.accent3 : C.background1 }));
  const ym = yg + 0.46;
  card(s, 0.6, ym, 12.13, 0.5, { r: 0.08, noShadow: true });
  T(s, 'Meta del mes', { x: 0.8, y: ym, w: gx - 0.85, h: 0.5, fontSize: 10.5, bold: true, valign: 'middle', color: C.text2 });
  const metaB = ['20 en espera', '50 en espera', '100 en espera', 870, 2830, 3734, 4420, 4304, 4038, 3824, 5208, 5603, 6011, 5861, 5628];
  metaB.forEach((m, i) => T(s, typeof m === 'number' ? m.toLocaleString('en-US') : m, { x: gx + i * cwm, y: ym, w: cwm, h: 0.5, fontSize: typeof m === 'number' ? 9.5 : 7.5, bold: typeof m === 'number', align: 'center', valign: 'middle', color: typeof m === 'number' ? C.accent1 : C.accent2 }));
  T(s, 'Inversión: pauta S/700 y embajadoras S/200 al mes, ferias (S/1,800 + vendedor/a 3 días), eventos (S/160) y lanzamiento (S/3,204, ya en la inversión). De oct. a dic. de 2026 la meta es de contactos en lista de espera.', { x: 0.6, y: ym + 0.53, w: 12.13, h: 0.26, fontSize: 8.5, italic: true, color: C.accent2 });
  s.addNotes('Cronograma de Gantt solo del plan de marketing (documento 10, sección 6). Preparar: redes, WhatsApp Business y lista de espera (octubre a diciembre de 2026); video de lanzamiento con niños, con consentimiento de los padres (noviembre, S/300); influencers (40 packs: 20 del segmento A y 20 del B) y pauta de expectativa (diciembre y enero). Lanzar: apertura de Jockey en enero, del punto 2 (segmento B) en febrero y del punto 3 (segmento A) en agosto; ferias pagadas de campaña escolar (febrero) y Día del Niño Peruano (11 de abril), con meta de 50 contactos de WhatsApp cada una. Fidelizar: recompra por WhatsApp con el aviso de la app (35 % de lo vendido en físico); mamás embajadoras con código (10 fundadoras en enero y febrero, luego 20 familias al mes); campaña "Escanea tu lote" en los stands (de 15 % a 28 % de envases escaneados en el primer semestre, y otra vez al abrir el punto 3). Crecer: quioscos en colegios A y B (1 a 3 de marzo a julio, 4 a 5 desde agosto); eventos sin costo (1 a 5 al mes); campañas del Día de la Madre (9 de mayo), del Padre (20 de junio) y del Día del Niño de agosto (15 de agosto, fecha comercial de los malls); y Navidad con cajas para regalo y empresas, por pedido. La fila de inversión cuadra con el Excel v7 mes a mes (S/24,544 en total). La meta de brownies es la del Excel v7; en el prelanzamiento la meta es de contactos en lista de espera. Pendiente de confirmar: el calendario escolar 2027 del MINEDU, la lista de feriados 2027 en gob.pe, los organizadores de las 2 ferias, los puntos 2 y 3, y el contacto con Innova Schools.');

  // =============== 26c. REGLAS PARA CRECER ===============
  pres.addSection({ title: 'Cierre' });
  s = content('Cierre', 'CIERRE · CÓMO SEGUIMOS CRECIENDO', 'Crecemos paso a paso: cada inversión se activa con una meta');
  const reglas = [
    ['FaStore', '4.º punto de venta', 'Si los 3 puntos venden 85 o más brownies por día durante 3 meses seguidos'],
    ['FaIndustry', 'Fabricación más barata', 'Al pasar 5,000 brownies al mes, negociar con la planta S/0.40 en vez de S/0.45'],
    ['FaFileSignature', 'Contrato anual de sangrecita', 'Precio fijo por un año al comprar unos 50 kg de polvo al año'],
    ['FaBirthdayCake', 'Cajas para fiestas', 'Para cumpleaños y empresas: por pedido con 2 semanas de anticipación, sin costo fijo'],
    ['FaShoppingCart', 'Góndola en Wong o Vivanda', 'En el año 2, solo si cada punto de venta ya gana dinero por sí solo'],
    ['FaUserTie', 'Pago variable a vendedores', 'S/60 por día + S/0.30 por brownie vendido: gana más quien vende más'],
    ['FaGift', 'Repetir una feria pagada', 'Solo si dejó 50 contactos de WhatsApp y cumplió 3 de los 4 criterios'],
    ['FaShieldAlt', 'Línea de crédito', 'Se usa solo si la caja baja de S/1,000; se devuelve con la venta de los meses fuertes'],
  ];
  for (let i = 0; i < reglas.length; i++) {
    const col = i % 4, row = Math.floor(i / 4);
    const w = 2.92, h = 2.25, x = 0.6 + col * (w + 0.15), y = 1.62 + row * (h + 0.18);
    card(s, x, y, w, h, { fill: i === 0 ? C.accent1 : C.background1 });
    await iconCircle(s, reglas[i][0], x + 0.22, y + 0.22, 0.62, i === 0 ? C.background1 : C.accent1, i === 0 ? H.accent1 : 'FFFFFF');
    T(s, 'META → ACCIÓN', { x: x + 0.98, y: y + 0.3, w: w - 1.1, h: 0.25, fontSize: 9, bold: true, color: i === 0 ? C.accent5 : C.accent2, charSpacing: 1 });
    T(s, reglas[i][1], { x: x + 0.22, y: y + 0.95, w: w - 0.4, h: 0.4, fontSize: 15, bold: true, color: i === 0 ? C.background1 : C.text2 });
    T(s, reglas[i][2], { x: x + 0.22, y: y + 1.38, w: w - 0.4, h: 0.8, fontSize: 12, color: i === 0 ? C.background1 : C.text1 });
  }
  card(s, 0.6, 6.42, 12.13, 0.48, { fill: C.text2, r: 0.24 });
  T(s, [{ text: 'Criterios de una feria pagada: ', options: { bold: true, color: C.accent3 } }, { text: 'padres con hijos de 4 a 11 · buscan comida saludable · temporada escolar · en Lima Top o Moderna' }], { x: 0.85, y: 6.42, w: 11.7, h: 0.48, valign: 'middle', fontSize: 12.5, color: C.background1 });
  s.addNotes('Reglas para crecer sin arriesgar: ninguna de estas mejoras está dentro del plan base; cada una se activa solo cuando se cumple su meta, y así el Excel muestra un escenario prudente. (1) Cuarto punto de venta: si los 3 puntos venden 85 o más brownies por día durante 3 meses. (2) Fabricación más barata: al pasar 5,000 brownies al mes (el año 2 promedia unos 5,900), negociar con la planta S/0.40 por brownie en vez de S/0.45. (3) Contrato anual del polvo de sangrecita (unos 50 kg al año) para fijar el precio. (4) Cajas para cumpleaños y empresas, por pedido. (5) Góndola en Wong o Vivanda en el año 2, solo si cada punto ya gana por sí solo: el supermercado se queda con 20 a 40 % y paga a 30 a 90 días. (6) Pago variable a vendedores: S/60 por día más S/0.30 por brownie (a 90 brownies por día sale casi lo mismo que hoy, S/87, pero premia al que vende más). (7) Una feria pagada solo se repite si dejó al menos 50 contactos de WhatsApp y cumplió 3 de los 4 criterios: padres con hijos de 4 a 11, que buscan comida saludable, en temporada escolar y en Lima Top o Moderna. (8) La línea de crédito de S/3,000 solo se usa si la caja baja de S/1,000.');

  // =============== 27. CIERRE ===============
  s = pres.addSlide({ masterName: 'CIERRE', sectionTitle: 'Cierre' });
  T(s, 'PROPUESTA DE VALOR EN UNA FRASE', { x: 0.8, y: 0.9, w: 7.4, h: 0.35, fontSize: 13, bold: true, color: C.accent3, charSpacing: 2 });
  s.addText('Hierro medido. Sabor a brownie.', { placeholder: 'title' });
  T(s, 'El snack de lonchera que tu hijo sí se come', { x: 0.8, y: 3.1, w: 7.4, h: 0.5, fontSize: 24, bold: true, color: C.accent5 });
  T(s, 'Para padres planificados que leen etiquetas: mini brownie de 20 g con sangrecita, hierro medido por lote y la app Andi, que acompaña a la familia.', { x: 0.8, y: 3.8, w: 7.4, h: 1.0, fontSize: 17, color: C.background2 });
  T(s, 'PRÓXIMOS PASOS', { x: 0.8, y: 5.55, w: 7.4, h: 0.3, fontSize: 12, bold: true, color: C.accent3, charSpacing: 2 });
  ['Cargar el focus 2', 'Cotizar ferias y stands', 'Probar la app con familias'].forEach((t, i) => {
    const x = 0.8 + i * 2.55;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 5.95, w: 2.45, h: 0.55, rectRadius: 0.27, fill: { color: C.accent2 }, line: { color: C.accent5, width: 1 } });
    T(s, t, { x, y: 5.95, w: 2.45, h: 0.55, align: 'center', valign: 'middle', fontSize: 13, bold: true, color: C.background2 });
  });
  await imgSlot(s, 4, 8.75, 0.75, 3.95, 6.0, 'Niño abriendo su lonchera con AndiBite', true);
  s.addNotes('Cierre con la propuesta de valor en una frase y los tres pasos siguientes: cargar los resultados del focus 2; cotizar los stands (Jockey, Larcomar, La Rambla, Wong, Vivanda), la feria del Día del Niño y las ferias saludables, y la sangrecita de res en polvo a granel; y probar el prototipo de la app Andi, Misión Hierro con 10 familias en noviembre de 2026.' + pn(4, '2:3 · adjuntar la foto del empaque'));

  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log('ok', OUT);
})().catch(e => { console.error(e); process.exit(1); });
