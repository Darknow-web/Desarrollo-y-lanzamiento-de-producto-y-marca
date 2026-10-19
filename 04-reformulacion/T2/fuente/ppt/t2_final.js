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


// =============== T2 #22 · PRESENTACIÓN FINAL (se concatena después de tema.js) ===============
// Uso: cat tema.js t2_final_slides.js > t2_final.js && node t2_final.js ../../T2_22_Plan-de-marketing-AndiBite.pptx

const X0 = 0.6, FW = 12.13;
// Íconos livianos: reemplaza a icon() de tema.js (misma firma, size 96 por defecto) para que el .pptx pese poco.
async function icon(name, hex, size = 96) {
  const Comp = fa[name];
  if (!Comp) throw new Error('icono no existe: ' + name);
  let svg = RDS.renderToStaticMarkup(React.createElement(Comp, { color: '#' + hex, size }));
  if (!svg.includes('xmlns')) svg = svg.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"');
  const buf = await sharp(Buffer.from(svg)).resize(size, size).png({ compressionLevel: 9, palette: true }).toBuffer();
  return 'image/png;base64,' + buf.toString('base64');
}
const PM = require(require('path').join(__dirname, '../../../TC5-8/fuente/plan_mkt.json'));

// ---------- helpers propios del deck final ----------
function src(s, t) {
  T(s, 'Fuente: ' + t, { x: 0.6, y: 6.62, w: 10.7, h: 0.36, fontSize: 10, color: C.accent2, valign: 'bottom' });
}
function note(s, who, txt) { s.addNotes('Presenta: ' + who + '.\n' + txt); }
const FILL_A = 'FBF3E8', FILL_B = 'FFFFFF';
function hd(t, o = {}) { return { text: nb(t), options: Object.assign({ bold: true, color: C.background1, fill: { color: C.text2 }, fontSize: 12 }, o) }; }
function cl(t, i, o = {}) { return { text: nb(t), options: Object.assign({ fontSize: 12, fill: { color: i % 2 ? FILL_B : FILL_A } }, o) }; }
function table(s, header, rows, opt) {
  const body = rows.map((r, i) => r.map((t, j) => {
    if (t && typeof t === 'object' && !Array.isArray(t)) return { text: nb(t.text), options: Object.assign({ fontSize: opt.fontSize || 12, fill: { color: i % 2 ? FILL_B : FILL_A } }, (opt.colOpt && opt.colOpt[j]) || {}, t.options || {}) };
    return cl(t, i, Object.assign({ fontSize: opt.fontSize || 12 }, (opt.colOpt && opt.colOpt[j]) || {}));
  }));
  const head = header.map((h) => (typeof h === 'string' ? hd(h, { fontSize: opt.headSize || opt.fontSize || 12 }) : h));
  s.addTable([head, ...body], {
    x: opt.x ?? X0, y: opt.y ?? 1.65, w: opt.w ?? FW, colW: opt.colW, rowH: opt.rowH ?? 0.45,
    border: { type: 'solid', pt: 0.75, color: 'E8D8C4' }, color: C.text1, valign: 'middle', margin: opt.margin ?? 0.07, autoPage: false,
  });
}
function franja(s, text, y = 6.02) {
  card(s, X0, y, FW, 0.55, { fill: C.text2, r: 0.27 });
  T(s, text, { x: 0.9, y, w: 11.6, h: 0.55, valign: 'middle', fontSize: 14, italic: true, color: C.background2 });
}
function bullets(items, size = 16) {
  return items.map((t, i) => ({ text: t, options: Object.assign({ bullet: { indent: 18 }, fontSize: size }, i < items.length - 1 ? { breakLine: true } : {}) }));
}
// tarjeta de dato grande (oscura por defecto)
function stat(s, x, y, w, h, label, big, sub, o = {}) {
  const dark = o.dark !== false;
  card(s, x, y, w, h, { fill: dark ? C.text2 : C.background1 });
  T(s, [
    { text: label, options: { fontSize: o.labelSize || 12, bold: true, color: dark ? C.accent3 : C.accent1, charSpacing: 1, breakLine: true } },
    { text: big, options: { fontSize: o.bigSize || 44, bold: true, color: dark ? C.background1 : C.text2, breakLine: true } },
    { text: sub, options: { fontSize: o.subSize || 13, color: dark ? C.accent5 : C.text1 } },
  ], { x: x + 0.3, y: y + 0.2, w: w - 0.6, h: h - 0.4, valign: o.valign || 'middle', paraSpaceAfter: 4 });
}
// tarjeta con etiqueta y texto
function labelCard(s, x, y, w, h, label, text, o = {}) {
  card(s, x, y, w, h, { fill: o.fill ?? C.background1 });
  if (o.band) s.addShape(pres.shapes.RECTANGLE, { x, y: y + 0.12, w: 0.09, h: h - 0.24, fill: { color: o.band }, line: { color: o.band, width: 0 } });
  T(s, [
    { text: label, options: { fontSize: o.labelSize || 12, bold: true, color: o.labelColor || C.accent1, charSpacing: 1, breakLine: true } },
    ...(Array.isArray(text) ? text : [{ text, options: { fontSize: o.size || 14, color: o.color || C.text1 } }]),
  ], { x: x + (o.band ? 0.32 : 0.25), y: y + 0.14, w: w - (o.band ? 0.5 : 0.45), h: h - 0.26, valign: o.valign || 'top', paraSpaceAfter: o.psa ?? 3 });
}

(async () => {
  let s;

  // ================= PORTADA Y AGENDA =================
  pres.addSection({ title: 'Portada' });
  s = pres.addSlide({ masterName: 'PORTADA', sectionTitle: 'Portada' });
  s.addImage({ path: 'img/logo_light.png', x: 0.8, y: 1.1, w: 5.6, h: 1.92 });
  s.addText('Plan de marketing', { placeholder: 'title' });
  s.addText('y lanzamiento · T2 · Unidad 3 · Oct-2026 a dic-2027', { placeholder: 'body' });
  T(s, 'Grupo 2 · Diana Ayoso · Carlos Inga · Angie Blas · Patricia Cárdenas · Adela Robles', { x: 0.8, y: 5.75, w: 7.6, h: 0.35, fontSize: 14, color: C.background2 });
  T(s, 'Desarrollo y lanzamiento de nuevos productos · Prof. Paola Cevallos · Octubre de 2026', { x: 0.8, y: 6.15, w: 7.6, h: 0.35, fontSize: 12, color: C.accent5 });
  s.addImage({ path: 'img/B1_frente_s.jpg', x: 8.75, y: 0.6, w: 4.4, h: 6.12, rotate: 4 });
  note(s, 'Diana (#21)', 'Buenos días. Somos el Grupo 2 y les presentamos el plan de marketing y lanzamiento de AndiBite, de octubre de 2026 a diciembre de 2027. AndiBite es un mini brownie con sangrecita de res y el hierro medido en cada lote. Carlos unió todo en esta plantilla (#22) y cada socio presenta su parte.');

  s = content('Portada', 'AGENDA · 22 PUNTOS EN 8 BLOQUES', 'El recorrido del plan');
  const AG = [
    ['01', 'Análisis situacional', '#1 Canvas · #3 PESTEL · #2 Benchmark · #4 FODA', 'Diana y Angie'],
    ['02', 'Mercado', '#5 Datos del mercado · #6 Demanda 2027 · #7 SMART', 'Ade'],
    ['03', 'Cliente', '#8 Qué le importa · #9 Segmentación y buyer persona', 'Paty'],
    ['04', 'Estrategia de marca', '#10 Posicionamiento · #11 Slogan · #12 Manual', 'Paty y Carlos'],
    ['05', 'Comunicación', '#13 Campaña · #14 Digital y Meta Ads · #15 Calendario', 'Carlos'],
    ['06', 'Mezcla y ejecución', '#16 7P · #17 Presupuesto · #18 Gantt · #19 KPI', 'Angie y Ade'],
    ['07', 'Caso', '#20 NutriSmart', 'Diana'],
    ['08', 'Resumen y cierre', '#21 Resumen ejecutivo y cierre', 'Diana'],
  ];
  AG.forEach((a, i) => {
    const w = 2.88, h = 2.37, x = X0 + (i % 4) * (w + 0.2), y = 1.65 + Math.floor(i / 4) * (h + 0.2);
    const hot = i === 0;
    card(s, x, y, w, h, { fill: hot ? C.accent1 : C.background1 });
    T(s, [
      { text: a[0], options: { fontSize: 30, bold: true, color: hot ? C.background1 : C.accent1, breakLine: true } },
      { text: a[1], options: { fontSize: 17, bold: true, color: hot ? C.background1 : C.text2, breakLine: true } },
      { text: a[2], options: { fontSize: 12, color: hot ? C.background1 : C.text1, breakLine: true } },
      { text: a[3], options: { fontSize: 11, italic: true, color: hot ? C.background2 : C.accent2 } },
    ], { x: x + 0.25, y: y + 0.18, w: w - 0.5, h: h - 0.3, paraSpaceAfter: 4 });
  });
  note(s, 'Diana (#21)', 'Seguimos la estructura de la clase: análisis situacional, objetivos, segmentación y posicionamiento, tácticas, presupuesto y control. Son 8 bloques con los 22 puntos del T2. Al lado de cada bloque está quién lo presenta.');

  // ================= 01 ANÁLISIS SITUACIONAL =================
  s = await section('Análisis situacional', '01', 'Análisis situacional', 'Canvas · PESTEL · Benchmark · FODA y FODA cruzado', 'FaSearch');
  note(s, 'Diana (#1, #2 y #4) y Angie (#3)', 'Empezamos por el mapa: el Canvas del T1, el entorno con el PESTEL, la competencia y el FODA, que la clase llama la brújula estratégica.');

  // #1 Canvas
  s = content('Análisis situacional', '#1 RECAP DEL CANVAS T1 · MODELO V7', 'El Canvas: de dónde sale todo el plan');
  const CV = [
    ['SEGMENTOS', 'Padres A y B de 32 a 45 años con hijos de 4 a 11. Núcleo: 46,000 hogares.'],
    ['PROPUESTA DE VALOR', 'El snack de lonchera con hierro que el niño sí se come. Hierro medido por lote.'],
    ['CANALES', 'Stands 43 %, recompra por WhatsApp 18 %, ferias y eventos 14 %, colegios y naturistas 25 %.'],
    ['RELACIÓN', 'Degustación cara a cara, aviso de recompra en la app y mamás embajadoras.'],
    ['INGRESOS', 'Pack de 6 a S/27.90 en stand. Año 1: S/244,728 de ventas y S/10,379 de utilidad.'],
    ['RECURSOS CLAVE', 'Receta que esconde la sangrecita, marca, registro sanitario, app y equipo pagado.'],
    ['ACTIVIDADES', 'Maquila sin planta propia, medir y publicar el hierro, vender en stands y recomprar.'],
    ['SOCIOS', 'Planta de maquila, laboratorio, proveedor de sangrecita, malls y pediatras.'],
    ['COSTOS', 'S/1.64 por brownie (pack de 6). Equilibrio: 2,100 a 4,400 brownies al mes.'],
  ];
  CV.forEach((c, i) => {
    const w = 3.91, h = 1.55, x = X0 + (i % 3) * (w + 0.2), y = 1.6 + Math.floor(i / 3) * (h + 0.1);
    labelCard(s, x, y, w, h, (i + 1) + '. ' + c[0], c[1], { size: 13.5, fill: i === 1 ? C.accent1 : C.background1, labelColor: i === 1 ? C.background2 : C.accent1, color: i === 1 ? C.background1 : C.text1 });
  });
  src(s, 'T2_01 Recap del Canvas (diapositiva 22 de la TC5-8); HECHOS_v7 y Excel v7 (Costeo-presentaciones-AndiBite.xlsx), 19-oct-2026.');
  note(s, 'Diana (#1)', 'Este es el Canvas con las cifras del modelo v7. La propuesta de valor es el centro: un snack con hierro que el niño sí se come, con el hierro medido por lote. Lo que cambió desde el T1: ahora vendemos a padres A y B, en venta física, con sangrecita en polvo y una app.');

  // #1 ODS
  s = content('Análisis situacional', '#1 ODS · ALINEACIÓN DEL PLAN', 'Contribuimos al ODS 2, meta 2.2');
  card(s, X0, 1.7, 7.6, 4.85);
  T(s, bullets([
    'ODS 2 Hambre cero, meta 2.2: poner fin a todas las formas de malnutrición. Es el principal.',
    'ODS 3 Salud y bienestar: meta de menos azúcar y recordatorio de hemoglobina en la app.',
    'ODS 8 Trabajo decente: empresa formal; todo el personal cobra.',
    'Decimos que AndiBite "contribuye". Nunca que "previene la anemia".',
  ], 17), { x: 0.95, y: 2.0, w: 7.0, h: 4.3, paraSpaceAfter: 14, color: C.text1 });
  stat(s, 8.45, 1.7, 4.28, 4.85, 'ANEMIA EN LIMA', '24.0 %', 'de los niños de 6 a 35 meses de Lima Metropolitana (ENDES 2024, criterio OMS 2024). Escolares de 5 a 11 atendidos por el MINSA: 22.5 %.', { bigSize: 58, subSize: 14 });
  src(s, 'ONU, ODS 2 meta 2.2; INEI, ENDES 2024 (acta MCLCP Lima, ago-2025); INS-CENAN, SIEN-HIS 2024; T2_01.');
  note(s, 'Diana (#1)', 'El plan se alinea al ODS 2, meta 2.2, que busca poner fin a la malnutrición. En Lima, uno de cada cuatro niños menores de 3 años tiene anemia. Ojo: el indicador oficial 2.2.3 mide a mujeres de 15 a 49 años, por eso decimos que contribuimos a la meta, no que movemos el indicador.');

  // #3 PESTEL
  s = content('Análisis situacional', '#3 PESTEL · LIMA METROPOLITANA 2026', 'Seis oportunidades y seis amenazas');
  const O = (t) => ({ text: 'Oportunidad: ', options: { bold: true, color: C.accent4, fontSize: 12.5 } });
  const A = (t) => ({ text: 'Amenaza: ', options: { bold: true, color: C.accent1, fontSize: 12.5 } });
  const tx = (t, br = true) => ({ text: t, options: Object.assign({ fontSize: 12.5, color: C.text1 }, br ? { breakLine: true } : {}) });
  const PE = [
    ['P', 'POLÍTICO', [O(), tx('plan contra la anemia 2024-2030 (D.S. 002-2024-SA).'), O(), tx('quioscos escolares sin octógonos (RM 195-2019), si el lote sale sin octógono.', false)]],
    ['E', 'ECONÓMICO', [A(), tx('inflación de Lima de 4.28 % acumulada de enero a setiembre de 2026.'), A(), tx('cacao volátil: US$5,645 por tonelada (16-oct-2026).', false)]],
    ['S', 'SOCIAL', [O(), tx('anemia en la agenda: 34.9 % en niños de 6 a 35 meses del Perú (2025).'), O(), tx('la sangrecita se acepta escondida en algo dulce (focus 1).', false)]],
    ['T', 'TECNOLÓGICO', [O(), tx('82.7 % de hogares de Lima con internet (I trim. 2026).'), O(), tx('recompra por WhatsApp y QR en el envase.', false)]],
    ['A', 'AMBIENTAL', [A(), tx('Niño costero anunciado para 2026-2027 [POR CONFIRMAR].'), A(), tx('Ley 30884 de plásticos: se cumple, riesgo bajo.', false)]],
    ['L', 'LEGAL', [A(), tx('octógono: la meta "sin octógono" se confirma en laboratorio.'), A(), tx('Ley 30021, art. 8: no se le habla al niño (controlable).', false)]],
  ];
  for (let i = 0; i < 6; i++) {
    const w = 3.91, h = 2.37, x = X0 + (i % 3) * (w + 0.2), y = 1.6 + Math.floor(i / 3) * (h + 0.12);
    card(s, x, y, w, h);
    s.addShape(pres.shapes.OVAL, { x: x + 0.22, y: y + 0.2, w: 0.55, h: 0.55, fill: { color: C.text2 }, line: { color: C.text2, width: 0 } });
    T(s, PE[i][0], { x: x + 0.22, y: y + 0.2, w: 0.55, h: 0.55, fontSize: 20, bold: true, color: C.background1, align: 'center', valign: 'middle' });
    T(s, PE[i][1], { x: x + 0.9, y: y + 0.2, w: w - 1.1, h: 0.55, fontSize: 14, bold: true, color: C.text2, valign: 'middle', charSpacing: 1 });
    T(s, PE[i][2], { x: x + 0.25, y: y + 0.88, w: w - 0.45, h: h - 1.0, paraSpaceAfter: 3 });
  }
  src(s, 'PESTEL de Angie (Drive), revisado en T2_00 secc. 3; INEI (El Peruano, 1-oct-2026; ENAHO, 26-jun-2026; ENDES 2025); Trading Economics; ENFEN vía Panamericana.');
  note(s, 'Angie (#3)', 'El PESTEL revisa 19 variables del entorno. Las que pasan al FODA son seis oportunidades, como el plan contra la anemia y el internet en casa, y seis amenazas, como la inflación, el cacao y los octógonos. Cada dato ya tiene su fuente oficial y su fecha.');

  // #2 Benchmark
  s = content('Análisis situacional', '#2 BENCHMARK · PRECIOS DEL 19-OCT-2026', 'Somos el único que publicará el hierro por lote');
  table(s, ['Marca', 'Producto', 'Por 20 g', 'Hierro', 'Octógonos', 'Para la lonchera'], [
    [{ text: 'AndiBite', options: { bold: true, color: C.accent1 } }, 'Mini brownie de 20 g con sangrecita', 'S/4.16 a S/4.65', 'Hemo, medido por lote', 'Meta: ninguno*', 'Sí: sin frío, 3 sabores'],
    ['Nutri H', 'Galleta con hemoglobina bovina', 'S/3.20', 'Hemo, 16.5 mg sin porción', 'Por confirmar*', 'Sí'],
    ['Forticao', 'Chocolate con hierro, farmacia', 'S/3.50 a S/4.17*', 'Hemo, sin mg publicados', 'Por confirmar*', 'No es su foco'],
    ['Fika', 'Brownie libre de azúcar, 70 g', 'S/4.00', 'No declara', 'No se ven*', 'No: para adultos'],
    ['La Purita', 'Brownies veganos x 8, congelados', 'S/2.11*', '5 % del valor diario', 'No se ven*', 'Poco: va congelado'],
    ['Mamalama', 'Barra de cereales andinos', 'S/4.10', 'No declara', 'No se ven*', 'Parcial'],
    ['Bimbo Nutra Bien', 'Mini brownie masivo', 'S/1.67', 'No declara', '1: "Alto en azúcar"', 'Sí'],
  ], { y: 1.6, rowH: 0.5, fontSize: 12, colW: [1.75, 2.85, 1.55, 2.2, 1.7, 2.08] });
  franja(s, 'Ganamos en prueba y formato; perdemos en precio (somos de los más caros) y en distribución.', 5.75);
  src(s, 'Tiendas oficiales, Wong y Plaza Vea, 19-oct-2026 (T2_02). * Por confirmar en el empaque o en el laboratorio; Forticao y La Purita sin peso publicado.');
  note(s, 'Diana (#2)', 'Comparamos seis marcas con las que el padre nos va a comparar en la lonchera. Nutri H y Forticao también tienen hierro hemo, pero ninguno publica su análisis por lote. Somos de los más caros por 20 gramos, por eso al padre B le mostramos primero el pack de 12. La IA de la primera versión inventó precios y miligramos: los corregimos con las tiendas.');

  // #4 FODA
  s = content('Análisis situacional', '#4 FODA · LA BRÚJULA ESTRATÉGICA', 'Dónde estamos: el FODA');
  const FD = [
    ['FORTALEZAS (internas)', C.accent4, ['Receta que esconde la sangrecita', 'Hierro hemo medido por lote, publicado en la app', 'Maquila: S/1.64 por brownie y margen de 58 a 66 %']],
    ['DEBILIDADES (internas)', C.accent3, ['Marketing chico: S/24,544 en 15 meses', 'Prejuicio hacia la sangrecita', 'Dependencia de los stands: 43 % de los brownies']],
    ['OPORTUNIDADES (externas)', C.accent2, ['Núcleo de 46,000 hogares A/B (S/17.3 millones)', 'Quioscos que solo aceptan productos sin octógonos', '82.7 % de los hogares de Lima con internet']],
    ['AMENAZAS (externas)', C.accent1, ['Bimbo a S/1.67 por 20 g en todo supermercado', 'Nutri H y Forticao, también con hierro hemo', 'Crédito caro (TEA de 35 %) y cacao volátil']],
  ];
  FD.forEach((f, i) => {
    const w = 5.97, h = 2.38, x = X0 + (i % 2) * (w + 0.19), y = 1.6 + Math.floor(i / 2) * (h + 0.14);
    labelCard(s, x, y, w, h, f[0], bullets(f[2], 17), { band: f[1], labelColor: C.text2, labelSize: 13, psa: 9 });
  });
  src(s, 'T2_04 (FODA de Diana con AI Studio, corregido con HECHOS_v7 y Excel v7); INEI, 26-jun-2026; Plaza Vea, 19-oct-2026; APEIM 2025.');
  note(s, 'Diana (#4)', 'Las fortalezas y debilidades dependen de nosotros; las oportunidades y amenazas vienen del entorno y del PESTEL. La fortaleza que más pesa es el hierro medido por lote. La debilidad más seria es depender de los stands con un marketing chico.');

  // #4 FODA cruzado
  s = content('Análisis situacional', '#4 FODA CRUZADO · 15 ESTRATEGIAS, DOS POR CUADRANTE', 'Del FODA a la acción');
  const FX = [
    ['FO · EXPLOTAR', C.accent4, ['FO1 Quioscos con producto sin octógono, cuando lo confirme el laboratorio', 'FO3 Recompra por WhatsApp con el aviso de la app']],
    ['DO · SUPERAR', C.accent3, ['DO1 "El niño prueba y el padre decide" en stands y ferias', 'DO2 Mamás embajadoras por salón con S/200 al mes']],
    ['FA · PROTEGER', C.accent2, ['FA1 Frente a Fika y La Purita, el dato del lote', 'FA3 Ganar a la galleta funcional por formato y sabor, sin nombrarla']],
    ['DA · MITIGAR', C.accent1, ['DA1 Validar en puntos propios antes de ir a góndola (año 2)', 'DA2 Cuidar la caja en vacaciones; línea de crédito solo si baja de S/1,000']],
  ];
  FX.forEach((f, i) => {
    const w = 5.97, h = 2.38, x = X0 + (i % 2) * (w + 0.19), y = 1.6 + Math.floor(i / 2) * (h + 0.14);
    labelCard(s, x, y, w, h, f[0], bullets(f[2], 16.5), { band: f[1], labelColor: C.text2, labelSize: 13, psa: 10 });
  });
  src(s, 'T2_04, sección 2 (FODA cruzado de Diana, transcrito de AI Studio y corregido); las 15 estrategias usan acciones ya decididas del plan.');
  note(s, 'Diana (#4)', 'El FODA cruzado convierte el diagnóstico en acciones. Aquí van dos estrategias por cuadrante; las 15 están en el documento. Ninguna cambia el presupuesto: todas usan lo que ya está en el plan.');

  // ================= 02 MERCADO =================
  s = await section('Mercado', '02', 'Mercado', 'Datos del mercado · Demanda 2027 · Objetivos SMART', 'FaChartLine');
  note(s, 'Ade (#5, #6 y #7)', 'Ahora los números: cuánto mide el mercado, cuánto pensamos vender en 2027 y los tres objetivos SMART.');

  // #5 Embudo
  s = content('Mercado', '#5 DATOS DEL MERCADO · EMBUDO', 'Una meta del 1.4 % del núcleo');
  const EB = [
    ['Mercado total', '932,000 hogares de Lima con lonchera envasada', 'S/130.9 millones', 8.0],
    ['Mercado al que apuntamos', '168,000 hogares A/B de toda Lima', 'S/62.8 millones', 6.8],
    ['Núcleo', '46,000 hogares A/B con niños de 4 a 11 en Lima Top y Moderna', 'S/17.3 millones', 5.6],
    ['Meta del año 1', '52,331 brownies en 2027', 'S/244,728', 4.4],
  ];
  EB.forEach((e, i) => {
    const y = 1.7 + i * 1.2, w = e[3], x = X0 + (8.0 - w) / 2;
    card(s, x, y, w, 1.05, { fill: i === 3 ? C.accent1 : (i === 2 ? C.text2 : C.background1) });
    const light = i >= 2;
    T(s, [
      { text: e[0] + ' · ' + e[2], options: { fontSize: 16, bold: true, color: light ? C.background1 : C.text2, breakLine: true } },
      { text: e[1], options: { fontSize: 12.5, color: light ? C.background2 : C.text1 } },
    ], { x: x + 0.2, y: y + 0.1, w: w - 0.4, h: 0.85, align: 'center', valign: 'middle' });
  });
  stat(s, 8.85, 1.7, 3.88, 4.75, 'META ÷ NÚCLEO', '1.4 %', 'S/244,728 ÷ S/17.3 millones. Con el ajuste del Censo 2025 (−5 %) sería 1.5 %. Es una meta baja y posible.', { bigSize: 60, subSize: 14 });
  src(s, 'APEIM, NSE 2025; documento 04, sección 1.11 (embudo, con hipótesis de 40 % de loncheras con horneado); Excel v7; T2_05.');
  note(s, 'Ade (#5)', 'Vamos de lo grande a lo que podemos vender. El núcleo son 46,000 hogares A y B con niños de 4 a 11 años en Lima Top y Lima Moderna, que gastan unos 17 millones al año. Nuestra meta del año 1 es solo el 1.4 % de ese núcleo.');

  // #5 Datos clave
  s = content('Mercado', '#5 DATOS DEL MERCADO · INGRESO Y CONFIANZA', 'Padres que pueden pagar y piden pruebas');
  const DK = [
    ['HOGAR A', 'S/14,584', 'de ingreso al mes; gasta S/1,078 en educación'],
    ['HOGAR B', 'S/7,787', 'de ingreso al mes; gasta S/566 en educación'],
    ['OCTÓGONOS', '83 %', 'dice que los octógonos cambian su compra'],
    ['DESCONFIANZA', '42 %', 'desconfía de que un envasado sea saludable'],
  ];
  DK.forEach((d, i) => {
    const w = 2.88, x = X0 + i * (w + 0.2);
    stat(s, x, 1.7, w, 3.9, d[0], d[1], d[2], { dark: i >= 2, bigSize: 36, subSize: 14 });
  });
  franja(s, 'En Lima Top, 7 de cada 10 hogares A/B son B: por eso el esfuerzo es parejo para A y B.', 5.85);
  src(s, 'APEIM, Niveles Socioeconómicos 2025 (set-2025); Ipsos Perú, 21-feb-2025; Kantar, 15-may-2025 (T2_05).');
  note(s, 'Ade (#5)', 'El hogar A gana unos 14,600 soles al mes y el B unos 7,800. Los dos invierten en educación y salud, y de ahí sale AndiBite. Además, 83 % cambia su compra por los octógonos y 42 % desconfía de lo envasado: la promesa sola no alcanza, hay que mostrar la prueba.');

  // #6 Demanda 2027
  s = content('Mercado', '#6 PROYECCIÓN DE DEMANDA 2027', '52,331 brownies en 2027, mes a mes');
  const MES = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'];
  s.addChart(pres.charts.BAR, [
    { name: 'Stands y carritos', labels: MES, values: [450, 1440, 1800, 1440, 1530, 1440, 1700, 2295, 2430, 2430, 2430, 3240] },
    { name: 'Ferias y eventos', labels: MES, values: [150, 1000, 600, 1300, 750, 600, 450, 600, 600, 600, 450, 300] },
    { name: 'Recompra WhatsApp', labels: MES, values: [150, 210, 854, 840, 959, 798, 714, 753, 1013, 1061, 1061, 1008] },
    { name: 'Colegios', labels: MES, values: [0, 0, 300, 600, 765, 900, 600, 1200, 1200, 1500, 1500, 600] },
    { name: 'Naturistas', labels: MES, values: [120, 180, 180, 240, 300, 300, 360, 360, 360, 420, 420, 480] },
  ], Object.assign(chartText(), { x: 0.4, y: 1.55, w: 8.3, h: 5.05, barDir: 'col', barGrouping: 'stacked', title: 'Brownies por mes y por canal, 2027', chartColors: [H.accent1, H.accent3, H.accent2, H.accent4, H.accent5], showLegend: true, legendPos: 'b', valAxisLabelFormatCode: '#,##0', barGapWidthPct: 45 }));
  card(s, 8.85, 1.7, 3.88, 4.75);
  T(s, [
    { text: 'LECTURA', options: { fontSize: 12, bold: true, color: C.accent1, charSpacing: 1, breakLine: true } },
    { text: '870 en enero y más de 5,200 al mes desde agosto.', options: { fontSize: 15, bullet: { indent: 16 }, breakLine: true } },
    { text: 'Por fase: 3,700 (ene-feb), 20,320 (mar-jul) y 28,311 (ago-dic).', options: { fontSize: 15, bullet: { indent: 16 }, breakLine: true } },
    { text: 'Stands 43 %, recompra 18 %, colegios 17.5 %.', options: { fontSize: 15, bullet: { indent: 16 }, breakLine: true } },
    { text: 'S/244,728 con IGV; desde marzo todos los meses ganan.', options: { fontSize: 15, bullet: { indent: 16 } } },
  ], { x: 9.1, y: 1.95, w: 3.4, h: 4.3, paraSpaceAfter: 9 });
  src(s, 'Excel v7, hoja Mensual, filas 14 a 19 y 29 (T2_06). Método de abajo hacia arriba: puntos × días × brownies por día, más ferias, eventos, recompra, colegios y naturistas.');
  note(s, 'Ade (#6)', 'La proyección se armó de abajo hacia arriba: cuántos brownies vende un punto por día, por los días y los puntos abiertos, más ferias, eventos, colegios y naturistas. Enero arranca con 870 porque es vacaciones y hay un solo punto. Desde agosto, con el tercer punto y cinco colegios, pasamos los 5,200 al mes.');

  // #6 Escenarios
  s = content('Mercado', '#6 ESCENARIOS · STANDS ±20 %', 'Aun con 20 % menos, el año 1 no pierde');
  const ES = [
    ['STANDS −20 %', 'S/608', 'de resultado operativo. La caja baja a −S/2,188 en agosto y la cubre la línea de crédito de S/3,000.', false],
    ['PLAN BASE', 'S/13,423', 'de resultado operativo (6.5 %) y S/10,379 de utilidad neta en 2027.', true],
    ['STANDS +20 %', 'S/26,237', 'de resultado operativo: casi el doble del plan base.', false],
  ];
  ES.forEach((e, i) => {
    const w = 3.91, x = X0 + i * (w + 0.2);
    stat(s, x, 1.7, w, 3.95, e[0], e[1], e[2], { dark: e[3], bigSize: 42, subSize: 14.5 });
  });
  franja(s, '2028, con 3 puntos todo el año: 70,452 brownies y S/322,329 (+32 %), sin abrir un 4.º punto.', 5.9);
  src(s, 'Excel v7: hoja Resumen (nota 5), hoja Inversion (celda C53) y hoja Anio2; T2_06, secciones 5 y 6.');
  note(s, 'Ade (#6)', 'Probamos qué pasa si los stands venden 20 % menos o 20 % más. Con 20 % menos todavía ganamos, aunque poco, y la línea de crédito cubre la caja de agosto. Por eso el KPI más importante es cuántos brownies vende cada punto por día: el mínimo es 65.');

  // #7 SMART
  s = content('Mercado', '#7 TRES OBJETIVOS SMART · 2027', 'Tres objetivos, todos medibles');
  const SM = [
    ['1. VENTAS', '52,331', 'brownies y S/244,728 con IGV del 1 de enero al 31 de diciembre de 2027.', 'KPI: brownies por día por punto (mínimo 65).'],
    ['2. RECOMPRA', '35 %', 'de lo vendido en físico vuelve por WhatsApp; unos 2,300 contactos y 30 % de envases escaneados.', 'KPI: recompra mensual; alerta bajo 20 %.'],
    ['3. CAPTACIÓN', '230', 'familias nuevas por embajadoras y 5 colegios con quiosco (2 A y 3 B) a octubre.', 'KPI: códigos usados; colegios con pedido.'],
  ];
  for (let i = 0; i < 3; i++) {
    const w = 3.91, x = X0 + i * (w + 0.2), y = 1.7, h = 4.85, hot = i === 0;
    card(s, x, y, w, h, { fill: hot ? C.accent1 : C.background1 });
    T(s, [
      { text: SM[i][0], options: { fontSize: 13, bold: true, color: hot ? C.background2 : C.accent1, charSpacing: 1, breakLine: true } },
      { text: SM[i][1], options: { fontSize: 50, bold: true, color: hot ? C.background1 : C.text2, breakLine: true } },
      { text: SM[i][2], options: { fontSize: 17, color: hot ? C.background1 : C.text1, breakLine: true } },
      { text: SM[i][3], options: { fontSize: 14, italic: true, color: hot ? C.background2 : C.accent2 } },
    ], { x: x + 0.3, y: y + 0.3, w: w - 0.6, h: h - 0.6, paraSpaceAfter: 16, valign: 'middle' });
  }
  src(s, 'T2_07; documento 10 (10-plan-de-marketing-2027.md), sección 2; Excel v7. Contactos y escaneos son metas propuestas del documento 10 y del 09.');
  note(s, 'Ade (#7)', 'Como somos una marca nueva, no medimos participación de mercado: medimos ventas, recompra y captación. Cada objetivo tiene número, fecha y un KPI que se mira cada domingo. El tercero depende de que el laboratorio confirme que no lleva octógono, porque sin eso no entramos a los colegios.');

  // ================= 03 CLIENTE =================
  s = await section('Cliente', '03', 'Cliente', 'Qué le importa al cliente · Segmentación · Buyer persona', 'FaUsers');
  note(s, 'Paty (#8 y #9)', 'Pasamos al cliente: qué le importa, qué tribus forman nuestro público y quiénes son Claudia y Rodrigo.');

  // #8
  s = content('Cliente', '#8 QUÉ LE IMPORTA AL CLIENTE · PROMPT 1 DE LA CLASE', 'Lo nutritivo vuelve intacto en la lonchera');
  table(s, ['Patrón', 'Necesidad no resuelta', 'Oportunidad', 'Evidencia real'], [
    ['Lo que tiene hierro regresa sin comer', 'Darle hierro sin pelear', 'Hierro dentro de un brownie; el niño prueba en el stand', '"Parecía carbón" (hijo de Lucero, nuggets de sangrecita)'],
    ['La sangrecita se acepta escondida en algo dulce', 'Hierro en formato dulce y listo', 'Probar primero y contar después: "Sí, tiene sangrecita. No, no se nota."', 'Focus 1: la barrita gustó "a la primera" (Adriana)'],
    ['Desconfía de lo "saludable" envasado', 'Una prueba que pueda verificar', 'Hierro medido por lote y publicado en la app', '42 % desconfía (Kantar, 15-may-2025)'],
    ['Mañanas sin tiempo', 'Lonchera resuelta para la semana', 'Pack de 12 "Semana completa" y aviso de recompra', '"Quiero practicidad pura" (Lucero)'],
  ], { y: 1.6, rowH: 0.82, fontSize: 12.5, colW: [2.75, 2.5, 3.6, 3.28], colOpt: { 0: { bold: true, color: C.text2 }, 3: { italic: true, color: C.accent2 } } });
  franja(s, 'Nadie dijo "anemia": se habla de hierro y energía. La IA se revisó contra 10 entrevistas y el focus 1.', 5.85);
  src(s, '10 entrevistas y focus 1 con mamás de Lima Norte (NSE C/B); Kantar, 15-may-2025; T2_08 (prompt 1 de la sesión 09, completado y revisado).');
  note(s, 'Paty (#8)', 'Usamos el prompt 1 de la clase y revisamos el resultado con nuestras entrevistas. El patrón más fuerte: lo nutritivo vuelve intacto, y sin la prueba del niño no hay compra. A la IA le quitamos frases como "previene la anemia" y la idea de vender por suscripción.');

  // #9 Tribus
  s = content('Cliente', '#9 SEGMENTACIÓN · TRIBUS, NO SOLO DEMOGRAFÍA', 'Tres tribus deciden la compra');
  const TR = [
    ['FaShieldAlt', 'La Guardiana del Hierro', '30 %', 'Madre o padre A que investiga antes de comprar. La mueve ver el dato, no la promesa.'],
    ['FaClock', 'El Resolutivo', '45 %', 'Padre o madre B que organiza la semana con poco tiempo. Lo mueve una mañana menos.'],
    ['FaUserMd', 'El Consejero', '25 %', 'Quiosco, nutricionista o pediatra. Recomienda con el informe del laboratorio, sin pauta.'],
  ];
  for (let i = 0; i < 3; i++) {
    const w = 3.91, x = X0 + i * (w + 0.2), y = 1.65, h = 4.15, hot = i === 1;
    card(s, x, y, w, h, { fill: hot ? C.accent1 : C.background1 });
    await iconCircle(s, TR[i][0], x + 0.3, y + 0.3, 0.8, hot ? C.background1 : C.accent1, hot ? H.accent1 : 'FFFFFF');
    T(s, TR[i][2], { x: x + 1.3, y: y + 0.25, w: w - 1.5, h: 0.9, fontSize: 44, bold: true, color: hot ? C.background1 : C.text2, align: 'right', valign: 'middle' });
    T(s, TR[i][1], { x: x + 0.3, y: y + 1.35, w: w - 0.6, h: 0.5, fontSize: 19, bold: true, color: hot ? C.background1 : C.text2 });
    T(s, TR[i][3], { x: x + 0.3, y: y + 1.95, w: w - 0.6, h: 1.9, fontSize: 15, color: hot ? C.background1 : C.text1 });
  }
  franja(s, 'Variables: zona (Lima Top y Moderna), ingreso, estilo de vida, cómo compra y qué tecnología usa.', 5.95);
  src(s, 'HECHOS_v7 (arquetipos del modelo v7, peso en el volumen del año 1); APEIM, NSE 2025; T2_09.');
  note(s, 'Paty (#9)', 'La clase pide tribus, no solo demografía. La Guardiana busca pruebas, el Resolutivo busca tiempo y el Consejero recomienda. Al Consejero no se le llega con pauta, sino con muestras y el informe del laboratorio.');

  // #9 Claudia y Rodrigo
  const PERS = [
    ['CLAUDIA MENDOZA', 'La Guardiana del Hierro · Segmento A', ['38 años · San Borja · abogada', '2 hijos (7 y 4) · hogar de S/13,500 al mes'], '"Todo lo que le hace bien, mi hijo lo escupe."', [
      ['QUIERE', 'Que su hijo coma hierro sin pelear y cero octógonos en la lonchera.'],
      ['LE FRENA', 'Desconfía de lo envasado: "¿Cuántos mg de hierro tiene?"'],
      ['BUSCA Y COMPRA', 'Pediatra, nutricionistas en Instagram, Wong y Flora & Fauna. Pagaría S/24 a 30 por el pack.'],
      ['LE DECIMOS', '"Él ve un brownie. Tú ves el hierro medido de su lote." Degustación en Jockey Plaza y en el punto 3.'],
    ], 'Buyer persona A: Claudia busca la prueba'],
    ['RODRIGO SALAZAR', 'El Resolutivo · Segmento B', ['40 años · San Miguel · jefe de logística', '2 hijos (9 y 6) · hogar de unos S/8,500'], '"No me vendas salud, véndeme una mañana menos."', [
      ['QUIERE', 'La lonchera resuelta el domingo, que aguante la mochila sin frío.'],
      ['LE FRENA', 'El precio: pagaría S/18 a 24 por 6 y el pack de 6 por WhatsApp cuesta S/26.90.'],
      ['BUSCA Y COMPRA', 'Chat del salón, Plaza Vea, apps y WhatsApp. Mira el precio por brownie.'],
      ['LE DECIMOS', '"Una mañana menos: la lonchera de la semana, a S/4.16 por brownie." Primero, el pack de 12.'],
    ], 'Buyer persona B: Rodrigo busca tiempo'],
  ];
  for (let p = 0; p < 2; p++) {
    const P = PERS[p];
    s = content('Cliente', '#9 BUYER PERSONA · PROMPT 2 DE LA CLASE', P[5]);
    card(s, X0, 1.65, 4.3, 4.9, { fill: C.text2 });
    await iconCircle(s, p === 0 ? 'FaShieldAlt' : 'FaClock', X0 + 0.35, 1.95, 0.85, C.accent1, 'FFFFFF');
    T(s, [
      { text: P[0], options: { fontSize: 22, bold: true, color: C.background1, breakLine: true } },
      { text: P[1], options: { fontSize: 13, bold: true, color: C.accent3, breakLine: true } },
      { text: P[2][0], options: { fontSize: 13.5, color: C.accent5, breakLine: true } },
      { text: P[2][1], options: { fontSize: 13.5, color: C.accent5 } },
    ], { x: X0 + 0.35, y: 3.0, w: 3.7, h: 1.6, paraSpaceAfter: 3 });
    T(s, P[3], { x: X0 + 0.35, y: 4.7, w: 3.7, h: 1.6, fontSize: 19, italic: true, bold: true, color: C.background2 });
    P[4].forEach((r, i) => {
      labelCard(s, 5.1, 1.65 + i * 1.25, 7.63, 1.13, r[0], r[1], { size: 15, band: i === 3 ? C.accent1 : C.accent5 });
    });
    src(s, 'HECHOS_v7 (perfil de los buyer persona); APEIM, NSE 2025; T2_09 (prompt 2 de la sesión 09, completado y revisado). Frases representativas, no textuales.');
    note(s, 'Paty (#9)', p === 0
      ? 'Claudia es la madre del segmento A: lee etiquetas y le pregunta al pediatra antes de creerle a un empaque. Lo que la convence es el informe del lote, que ve con el QR. El pack de 6 en el stand, a S/27.90, está dentro de lo que pagaría.'
      : 'Rodrigo es el padre del segmento B, que pesa 45 % del volumen. No quiere un discurso de salud: quiere resolver la semana. Hay una brecha de precio con el pack de 6, por eso le mostramos primero el pack de 12, a S/4.16 por brownie; el focus 2 debe confirmar si eso la cierra.');
  }

  // ================= 04 ESTRATEGIA DE MARCA =================
  s = await section('Estrategia de marca', '04', 'Estrategia de marca', 'Posicionamiento · Slogan · Manual de marca', 'FaBullseye');
  note(s, 'Paty (#10 y #11) y Carlos (#12)', 'Ahora la marca: cómo queremos que nos recuerden, el slogan y el manual.');

  // #10 Posicionamiento
  s = content('Estrategia de marca', '#10 POSICIONAMIENTO · PROMPT 3 DE LA CLASE', '"El brownie con el hierro medido"');
  card(s, X0, 1.7, 7.6, 4.85);
  T(s, [
    { text: 'FRASE DE POSICIONAMIENTO', options: { fontSize: 12, bold: true, color: C.accent1, charSpacing: 1, breakLine: true } },
    { text: 'Para ', options: { fontSize: 19 } }, { text: 'padres y madres A y B con hijos de 4 a 11 años', options: { fontSize: 19, bold: true } },
    { text: ', que buscan que su hijo ', options: { fontSize: 19 } }, { text: 'coma hierro sin pelear', options: { fontSize: 19, bold: true } },
    { text: ', AndiBite ofrece ', options: { fontSize: 19 } }, { text: 'un mini brownie que el niño sí se come', options: { fontSize: 19, bold: true } },
    { text: ', porque ', options: { fontSize: 19 } }, { text: 'cada lote se analiza en laboratorio y se ve en la app.', options: { fontSize: 19, bold: true, color: C.accent1 } },
  ], { x: 0.95, y: 2.0, w: 7.0, h: 4.3, valign: 'middle', paraSpaceAfter: 10, color: C.text1 });
  stat(s, 8.45, 1.7, 4.28, 4.85, 'TERRITORIO DE MARCA', 'Medido, no prometido.', 'La tranquilidad de lo comprobado. No es miedo a la anemia ni "superalimento".', { bigSize: 34, subSize: 15 });
  src(s, 'T2_10 (prompt 3 de la sesión 09, completado y revisado); documento 10, sección 3.2.');
  note(s, 'Paty (#10)', 'Con el prompt 3 de la clase armamos la frase de posicionamiento con la fórmula para, que busca, ofrece y porque. La razón para creer es el laboratorio: cada lote se analiza y el padre ve el resultado. El territorio es "Medido, no prometido".');

  // #10 Mapa perceptual
  s = content('Estrategia de marca', '#10 MAPA PERCEPTUAL · PRECIO Y EVIDENCIA', 'Casi solos en "premium con prueba"');
  {
    // Mapa perceptual nativo (formas), con los datos de T2_10, sección 6.
    card(s, X0, 1.6, 7.05, 4.95);
    const mx0 = 1.5, mw = 5.9, my0 = 1.8, mh = 3.75;
    const MX = (v) => mx0 + (v - 1.25) / 3.75 * mw, MY = (v) => my0 + mh - (v - 0.5) / 5 * mh;
    s.addShape(pres.shapes.RECTANGLE, { x: mx0, y: my0, w: mw, h: mh, fill: { color: 'FFFFFF' }, line: { color: H.accent5, width: 0.75 } });
    s.addShape(pres.shapes.LINE, { x: MX(3), y: my0, w: 0, h: mh, line: { color: H.accent5, width: 1.25, dashType: 'dash' } });
    s.addShape(pres.shapes.LINE, { x: mx0, y: MY(3), w: mw, h: 0, line: { color: H.accent5, width: 1.25, dashType: 'dash' } });
    [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5].forEach(v => T(s, 'S/' + v.toFixed(2), { x: MX(v) - 0.4, y: my0 + mh + 0.04, w: 0.8, h: 0.22, fontSize: 10, align: 'center', color: C.accent2 }));
    [1, 2, 3, 4, 5].forEach(v => T(s, String(v), { x: mx0 - 0.32, y: MY(v) - 0.11, w: 0.22, h: 0.22, fontSize: 10, align: 'right', color: C.accent2 }));
    T(s, 'Precio por 20 g (S/ con IGV)', { x: mx0, y: my0 + mh + 0.28, w: mw, h: 0.26, fontSize: 11, bold: true, align: 'center', color: C.text2 });
    T(s, 'Evidencia verificable (1 a 5)', { x: 0.88 - mh / 2, y: my0 + mh / 2 - 0.13, w: mh, h: 0.26, fontSize: 11, bold: true, align: 'center', color: C.text2, rotate: 270 });
    const q = (t, x, y, al) => T(s, t, { x, y, w: 2.6, h: 0.22, fontSize: 10, bold: true, color: C.accent2, align: al });
    q('Precio bajo con prueba: vacío', mx0 + 0.08, my0 + 0.06, 'left'); q('Premium con prueba', mx0 + mw - 2.68, my0 + 0.06, 'right');
    q('Masivo', mx0 + 0.08, my0 + mh - 0.28, 'left'); q('Premium sin prueba', mx0 + mw - 2.68, my0 + mh - 0.28, 'right');
    const bar = (a, b, y) => s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: MX(a), y: MY(y) - 0.05, w: MX(b) - MX(a), h: 0.1, rectRadius: 0.05, fill: { color: 'EBD9C6' }, line: { color: 'EBD9C6', width: 0 } });
    const dot = (x, y, d, fill, line, dash) => s.addShape(pres.shapes.OVAL, { x: MX(x) - d / 2, y: MY(y) - d / 2, w: d, h: d, fill: fill ? { color: fill } : { color: 'FFFFFF' }, line: { color: line, width: fill ? 0.5 : 2, dashType: dash ? 'dash' : 'solid' } });
    const lb = (t, x, y, dx, dy, o = {}) => T(s, t, Object.assign({ x: MX(x) + dx, y: MY(y) + dy, w: 1.9, h: 0.24, fontSize: 11, color: C.text1 }, o));
    bar(4.16, 4.65, 4); bar(3.50, 4.17, 2);
    s.addShape(pres.shapes.LINE, { x: MX(4.48), y: MY(5) + 0.14, w: 0, h: MY(4) - MY(5) - 0.28, line: { color: H.accent1, width: 1.5, dashType: 'dash' } });
    dot(4.48, 5, 0.26, null, H.accent1); dot(4.48, 4, 0.28, H.accent1, H.accent1);
    dot(3.20, 4, 0.2, H.dk2, H.dk2); dot(4.00, 3, 0.2, H.dk2, H.dk2); dot(4.10, 2, 0.2, H.dk2, H.dk2); dot(1.67, 2, 0.2, H.dk2, H.dk2);
    dot(3.83, 2, 0.2, null, H.dk2, true); dot(2.11, 3, 0.2, null, H.dk2, true);
    dot(3.01, 2, 0.15, 'A08C80', 'A08C80'); dot(1.68, 1, 0.15, 'A08C80', 'A08C80');
    lb('Meta: con informe del laboratorio', 4.48, 5, -2.75, -0.12, { w: 2.55, align: 'right', bold: true, color: C.accent1, fontSize: 11 });
    lb('AndiBite hoy · S/4.16 a S/4.65', 4.48, 4, -1.25, 0.16, { w: 2.0, align: 'center', bold: true, color: C.accent1, fontSize: 11 });
    lb('Nutri H', 3.20, 4, 0.14, -0.3);
    lb('Fika', 4.00, 3, -0.75, -0.3, { w: 0.65, align: 'right' });
    lb('La Purita*', 2.11, 3, 0.14, -0.3);
    lb('Forticao (x 40 a x 12)*', 3.83, 2, -0.95, -0.36, { w: 1.9, align: 'center' });
    lb('Mamalama', 4.10, 2, -0.2, 0.14, { w: 1.2 });
    lb('Bimbo Nutra Bien', 1.67, 2, 0.14, -0.3);
    lb('Siete Dragones (ref.)', 3.01, 2, -2.0, 0.08, { w: 1.9, align: 'right', color: C.accent2 });
    lb('Little Bites (ref.)', 1.68, 1, 0.14, -0.12, { color: C.accent2 });
  }
  card(s, 7.85, 1.6, 4.88, 4.9);
  T(s, [
    { text: 'LECTURA', options: { fontSize: 12, bold: true, color: C.accent1, charSpacing: 1, breakLine: true } },
    { text: 'Ejes: precio por 20 g y evidencia que el padre puede verificar (1 a 5).', options: { fontSize: 14.5, bullet: { indent: 16 }, breakLine: true } },
    { text: 'Hoy estamos en 4: solo hay un cálculo. Con el primer informe del laboratorio subimos a 5.', options: { fontSize: 14.5, bullet: { indent: 16 }, breakLine: true } },
    { text: 'El riesgo es el precio: estamos entre los más caros por 20 g.', options: { fontSize: 14.5, bullet: { indent: 16 }, breakLine: true } },
    { text: 'El informe del laboratorio es la base del posicionamiento.', options: { fontSize: 14.5, bullet: { indent: 16 }, bold: true } },
  ], { x: 8.1, y: 1.85, w: 4.4, h: 4.45, paraSpaceAfter: 9 });
  src(s, 'Precios de T2_02 (tiendas oficiales, 19-oct-2026); escala de evidencia de T2_10. * Peso supuesto [POR CONFIRMAR]; en gris, marcas de referencia.');
  note(s, 'Paty (#10)', 'El eje horizontal es el precio por 20 gramos y el vertical, la evidencia que el padre puede verificar. Nutri H está cerca, pero nadie publica su análisis por lote. Si no publicamos el informe del laboratorio, nos quedamos al lado de Nutri H, pero más caros.');

  // #11 Slogan
  s = content('Estrategia de marca', '#11 SLOGAN · EVALUADO CONTRA 2 OPCIONES', 'Por qué gana el slogan');
  card(s, X0, 1.7, 6.0, 4.85, { fill: C.text2 });
  T(s, [
    { text: 'SLOGAN', options: { fontSize: 12, bold: true, color: C.accent3, charSpacing: 2, breakLine: true } },
    { text: 'Hierro medido. Sabor a brownie.', options: { fontSize: 38, bold: true, color: C.background1, breakLine: true } },
    { text: '28 de 30 puntos', options: { fontSize: 20, bold: true, color: C.accent3, breakLine: true } },
    { text: 'La razón (hierro medido) y el placer (sabor a brownie), en 5 palabras.', options: { fontSize: 15, color: C.accent5 } },
  ], { x: 0.95, y: 2.0, w: 5.3, h: 4.3, valign: 'middle', paraSpaceAfter: 10 });
  table(s, ['Opción', 'Puntaje'], [
    [{ text: '"Hierro medido. Sabor a brownie."', options: { bold: true, color: C.accent1 } }, { text: '28', options: { bold: true, align: 'center' } }],
    ['"Medido, no prometido."', { text: '22', options: { align: 'center' } }],
    ['"Lo que ya le gusta, con lo que le hace falta."', { text: '18', options: { align: 'center' } }],
  ], { x: 6.85, y: 1.7, w: 5.88, rowH: 0.55, fontSize: 13.5, colW: [4.6, 1.28] });
  labelCard(s, 6.85, 4.1, 5.88, 2.45, 'CUIDADO LEGAL', bullets([
    'Criterios: corto, recordable, legal, diferenciador, sirve a A y B, dice qué es.',
    '"Medido" solo se usa con el informe del laboratorio del lote.',
    'Nunca con "previene" o "combate la anemia".',
  ], 13.5), { psa: 5 });
  src(s, 'T2_11 (puntaje del 1 al 5 en 6 criterios; frases del documento 06); D. Leg. 1044; Codex CXG 23.');
  note(s, 'Paty (#11)', 'Comparamos el slogan con otras dos frases de marca y ganó con 28 de 30. Es corto, tiene ritmo y dice algo que solo nosotros hacemos: medir el hierro. Tiene una condición: el informe del laboratorio debe existir desde el primer lote que se vende.');

  // #11 Palabras, imágenes, emociones
  s = content('Estrategia de marca', '#11 CÓMO QUEREMOS QUE NOS RECUERDEN', 'Palabras, imágenes y emociones');
  table(s, ['', 'Segmento A · Claudia', 'Segmento B · Rodrigo'], [
    [{ text: 'Palabras', options: { bold: true, color: C.text2 } }, 'Medido, lote, laboratorio, hierro, transparente', 'Resuelto, semana completa, listo, aviso, precio claro'],
    [{ text: 'Imágenes', options: { bold: true, color: C.text2 } }, 'Un dedo escanea el QR y aparece el informe del lote', 'La caja de 12 abierta el domingo, con la semana armada'],
    [{ text: 'Emociones', options: { bold: true, color: C.text2 } }, 'Tranquilidad, confianza, control', 'Alivio, practicidad, complicidad'],
    [{ text: 'Nunca', options: { bold: true, color: C.accent1 } }, 'Miedo o culpa ("tu hijo puede tener anemia")', 'Tono infantil, "superalimento", un niño que pide a cámara'],
  ], { y: 1.6, rowH: 0.78, fontSize: 14, colW: [1.8, 5.17, 5.16] });
  franja(s, 'Lo común: la palabra "medido", la lonchera que vuelve vacía y el alivio.', 5.9);
  src(s, 'T2_11, sección 3; Ley 30021, art. 8 (los niños pueden salir comiendo, pero no recomiendan el producto).');
  note(s, 'Paty (#11)', 'Para cada segmento definimos qué palabras, imágenes y emociones debe dejar la marca. A Claudia le habla el dato; a Rodrigo, la semana resuelta. Lo que los une es la lonchera que vuelve vacía y la sensación de alivio.');

  // #12 Manual
  s = content('Estrategia de marca', '#12 MANUAL DE MARCA · ESENCIA, COLOR Y LETRA', 'Una nutricionista amiga que además es mamá');
  card(s, X0, 1.65, 5.2, 4.9);
  T(s, [
    { text: 'PERSONALIDAD', options: { fontSize: 12, bold: true, color: C.accent1, charSpacing: 1, breakLine: true } },
    { text: 'Precisa, serena, cómplice y con humor seco. Nunca alarmista ni infantil.', options: { fontSize: 15, breakLine: true } },
    { text: 'PROMESA', options: { fontSize: 12, bold: true, color: C.accent1, charSpacing: 1, breakLine: true } },
    { text: 'Tu hijo ve un brownie que le gusta. Tú ves el hierro medido de su lote.', options: { fontSize: 15, breakLine: true } },
    { text: 'LETRA', options: { fontSize: 12, bold: true, color: C.accent1, charSpacing: 1, breakLine: true } },
    { text: 'Calibri en la presentación y los documentos; Fredoka One y Nunito en el empaque.', options: { fontSize: 15 } },
  ], { x: 0.9, y: 1.9, w: 4.6, h: 4.45, paraSpaceAfter: 6 });
  const PAL = [['4A2018', 'Café oscuro', 'Títulos y fondos'], ['BA4036', 'Rojo ladrillo', 'El dato clave'], ['E3A33B', 'Dorado', 'Detalles sobre café'], ['7C8A3A', 'Verde oliva', 'Íconos, cañihua'], ['D9B48F', 'Arena', 'Subtítulos y líneas'], ['8A1C2B', 'Vino', 'Segundo acento'], ['6B3A2A', 'Café medio', 'Textos secundarios'], ['3B1A14', 'Texto', 'Texto corrido'], ['FBF3E8', 'Crema', 'Fondo']];
  PAL.forEach((p, i) => {
    const w = 2.25, h = 1.5, x = 6.05 + (i % 3) * (w + 0.09), y = 1.65 + Math.floor(i / 3) * (h + 0.2);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h: 0.78, rectRadius: 0.08, fill: { color: p[0] }, line: { color: 'E8D8C4', width: 0.75 } });
    T(s, [
      { text: p[1] + ' · ' + p[0], options: { fontSize: 11.5, bold: true, color: C.text2, breakLine: true } },
      { text: p[2], options: { fontSize: 11, color: C.accent2 } },
    ], { x, y: y + 0.84, w, h: 0.6 });
  });
  src(s, 'T2_12 (manual de marca); documento 06 (tono; donde decía Hemi, dice AndiBite); colores del tema de la TC5-8 y de HECHOS_v7.');
  note(s, 'Carlos (#12)', 'El manual ordena la marca que ya teníamos: el logo, los colores, la letra y el tono. AndiBite habla como una nutricionista amiga que además es mamá. El rojo ladrillo se guarda para lo que el padre debe ver primero: el dato, el precio o el llamado a escanear.');

  // #12 Tono
  s = content('Estrategia de marca', '#12 TONO DE VOZ · REGLAS QUE CUIDAN LA MARCA', 'Lo que sí decimos y lo que no');
  table(s, ['Sí decimos', 'No decimos', 'Por qué'], [
    ['"Hierro medido en laboratorio"', '"Previene" o "combate la anemia"', 'Publicidad engañosa (D. Leg. 1044)'],
    ['"Meta: 0 octógonos. Te contamos cómo vamos."', '"Sin octógonos" antes del análisis', 'Sería falso hasta tener el resultado'],
    ['"Mini brownie de cacao con sangrecita de res"', '"Superalimento", "100 % saludable"', 'Promesa sin cifra para el 42 % que desconfía'],
    ['"Pídelo por WhatsApp" (al padre)', '"¡Niños, pídanle a su mamá!"', 'Ley 30021, art. 8: menores de 16 años'],
    ['"Él ve un brownie"', '"Engáñalo", "no se va a dar cuenta"', 'Daña la confianza del padre'],
  ], { y: 1.6, rowH: 0.68, fontSize: 14, colW: [4.4, 3.95, 3.78], colOpt: { 0: { color: C.accent4, bold: true }, 1: { color: C.accent1 } } });
  franja(s, 'Cada pieza pasa un checklist legal de 18 preguntas: diseña Angie, revisa Adela, Carlos confirma precios.', 5.9);
  src(s, 'T2_12, secciones 5.3 y 11; Ley 30021, art. 8; D. Leg. 1044; Kantar, 15-may-2025.');
  note(s, 'Carlos (#12)', 'El tono tiene reglas claras. Hablamos de hierro medido, no de enfermedad, porque "previene la anemia" se puede sancionar como publicidad engañosa. Y siempre le hablamos al adulto, nunca al niño.');

  // ================= 05 COMUNICACIÓN =================
  s = await section('Comunicación', '05', 'Comunicación', 'Campaña "Vuelve vacía" · Ecosistema digital y Meta Ads · Calendario', 'FaBullhorn');
  note(s, 'Carlos (#13, #14 y #15)', 'Ahora la estrategia se vuelve campaña: la idea, el camino digital y el calendario de contenido.');

  // #13 Big idea
  s = content('Comunicación', '#13 CONCEPTO DE CAMPAÑA · BIG IDEA', 'Campaña "Vuelve vacía"');
  card(s, X0, 1.65, FW, 2.35, { fill: C.text2 });
  T(s, [
    { text: 'IDEA CENTRAL', options: { fontSize: 12, bold: true, color: C.accent3, charSpacing: 2, breakLine: true } },
    { text: 'Su prueba: la lonchera vacía. La tuya: el informe de su lote.', options: { fontSize: 32, bold: true, color: C.background1 } },
  ], { x: 1.0, y: 1.85, w: 11.3, h: 1.95, valign: 'middle', paraSpaceAfter: 6 });
  labelCard(s, X0, 4.2, 5.97, 2.3, 'A CLAUDIA (A) LE DICE', 'Por fin algo con hierro que no regresa. Y lo puede comprobar: escanea el QR y ve el informe de su lote.', { size: 16, band: C.accent1 });
  labelCard(s, 6.76, 4.2, 5.97, 2.3, 'A RODRIGO (B) LE DICE', 'Nada que botar, nada que renegociar. Una semana de loncheras resuelta el domingo.', { size: 16, band: C.accent3 });
  src(s, 'T2_13 (insight de las entrevistas y del focus 1, punto #8); cierre de todas las piezas: "Hierro medido. Sabor a brownie."');
  note(s, 'Carlos (#13)', 'La campaña se llama "Vuelve vacía". Nace del insight real: lo nutritivo regresa intacto. La lonchera vacía es la prueba del niño y el informe del lote es la prueba del padre. Es legal por diseño: no habla de anemia y no necesita ninguna cifra para funcionar.');

  // #13 Storytelling
  s = content('Comunicación', '#13 STORYTELLING · EL HÉROE ES EL PADRE', 'El plan en 3 pasos');
  const ST = [
    ['FaChild', '1. Pruébalo', 'Tu hijo prueba en el stand, delante de ti. Tú decides si prueba.'],
    ['FaQrcode', '2. Escanea', 'El QR del envase abre el informe de su lote en la app.'],
    ['FaWhatsapp', '3. Pide la semana', 'Pack de 12 por WhatsApp; te avisamos antes de que se acabe.'],
  ];
  for (let i = 0; i < 3; i++) {
    const w = 3.91, x = X0 + i * (w + 0.2), y = 1.65, h = 3.95, hot = i === 1;
    card(s, x, y, w, h, { fill: hot ? C.accent1 : C.background1 });
    await iconCircle(s, ST[i][0], x + 0.3, y + 0.3, 0.9, hot ? C.background1 : C.accent1, hot ? H.accent1 : 'FFFFFF');
    T(s, ST[i][1], { x: x + 0.3, y: y + 1.45, w: w - 0.6, h: 0.6, fontSize: 24, bold: true, color: hot ? C.background1 : C.text2 });
    T(s, ST[i][2], { x: x + 0.3, y: y + 2.15, w: w - 0.6, h: 1.6, fontSize: 17, color: hot ? C.background1 : C.text1 });
  }
  franja(s, 'Sin informe del laboratorio en enero: "El snack de lonchera que tu hijo sí se come" (plan B).', 5.85);
  src(s, 'T2_13, secciones 2.1 a 2.4 (estructura del héroe y el guía) y 4.3 (plan B).');
  note(s, 'Carlos (#13)', 'En la historia el héroe es el padre, no la marca; AndiBite es el guía con un plan de tres pasos. Si en enero todavía no hay informe del laboratorio, no decimos "medido": usamos la frase de apoyo hasta tenerlo.');

  // #13 Mezcla 74/26
  s = content('Comunicación', '#13 MEZCLA DE MEDIOS · ESTRATEGIA TTL', '74 % cara a cara, 26 % digital, sin ATL');
  s.addChart(pres.charts.DOUGHNUT, [{ name: 'Mezcla', labels: ['BTL S/18,136', 'Digital S/6,408'], values: [18136, 6408] }], Object.assign(chartText(), {
    x: 0.4, y: 1.55, w: 6.2, h: 5.0, holeSize: 58, chartColors: [H.accent1, H.accent3], showPercent: true, showValue: false, showLegend: true, legendPos: 'b', legendFontSize: 14,
    dataLabelColor: 'FFFFFF', dataLabelFontSize: 18, dataLabelFontBold: true, title: 'Marketing de oct-2026 a dic-2027 (S/24,544)', showLabel: false,
  }));
  const MM = [
    ['PAGADOS', 'Pauta en Meta, influencers, ferias y material POP. Dan alcance y llevan al stand o al WhatsApp.'],
    ['PROPIOS', 'Envase con QR, app, WhatsApp Business, Instagram y el stand. Dan la segunda prueba y la recompra.'],
    ['GANADOS', 'Mamás embajadoras, pediatras, nutricionistas y chats del salón. Dan la confianza de "otro padre lo usa".'],
  ];
  MM.forEach((m, i) => labelCard(s, 6.85, 1.65 + i * 1.65, 5.88, 1.5, m[0], m[1], { size: 14, band: [C.accent1, C.accent2, C.accent4][i] }));
  src(s, 'Presupuesto-marketing-AndiBite.xlsx; HECHOS_v7; T2_13, sección 3.4 (BTL: muestras, degustación, POP, embajadoras, ferias y eventos).');
  note(s, 'Carlos (#13)', 'Tres de cada cuatro soles van a lo cara a cara: degustación, ferias, eventos, material y embajadoras. Lo digital es el 26 %. No usamos televisión ni radio: no caben en el presupuesto y al padre A y B lo encontramos en el mall, el colegio y el chat del salón.');

  // #14 Recorrido
  s = content('Comunicación', '#14 ECOSISTEMA DIGITAL · DEL ANUNCIO A LA RECOMPRA', 'Todo lleva al stand y al WhatsApp');
  const RC = [
    ['FaEye', 'Ve el anuncio', 'Video de 15 a 20 s en Meta', 'CTR 1 % o más'],
    ['FaWhatsapp', 'Escribe', 'Botón "Enviar mensaje" a WhatsApp', 'Costo por conversación'],
    ['FaStore', 'Prueba', 'El hijo prueba en el stand y el padre compra', 'Brownies por día'],
    ['FaQrcode', 'Escanea', '"Mi lote": hierro y registro sanitario', '30 % de envases'],
    ['FaMobileAlt', 'Usa la app', 'Plan de loncheras y semáforo de hierro', '40 % de uso semanal'],
    ['FaRedo', 'Recompra', 'La app avisa y pide en 1 clic', '35 % de lo físico'],
    ['FaShareAlt', 'Recomienda', 'Código de embajadora en el salón', '230 familias'],
  ];
  for (let i = 0; i < 7; i++) {
    const w = 1.6, gap = 0.155, x = X0 + i * (w + gap), y = 1.7, h = 3.95, hot = i === 2 || i === 5;
    card(s, x, y, w, h, { fill: hot ? C.accent1 : C.background1 });
    await iconCircle(s, RC[i][0], x + (w - 0.7) / 2, y + 0.25, 0.7, hot ? C.background1 : C.accent1, hot ? H.accent1 : 'FFFFFF');
    T(s, (i + 1) + '. ' + RC[i][1], { x: x + 0.1, y: y + 1.1, w: w - 0.2, h: 0.55, fontSize: 14, bold: true, align: 'center', color: hot ? C.background1 : C.text2 });
    T(s, RC[i][2], { x: x + 0.12, y: y + 1.7, w: w - 0.24, h: 1.35, fontSize: 12.5, align: 'center', color: hot ? C.background1 : C.text1 });
    T(s, RC[i][3], { x: x + 0.1, y: y + 3.1, w: w - 0.2, h: 0.7, fontSize: 11.5, italic: true, bold: true, align: 'center', valign: 'middle', color: hot ? C.background2 : C.accent2 });
    if (i < 6) T(s, '›', { x: x + w - 0.02, y: y + 1.65, w: gap + 0.04, h: 0.5, fontSize: 20, bold: true, color: C.accent1, align: 'center', valign: 'middle' });
  }
  franja(s, 'El QR del envase une los dos mundos: primera compra en el stand y recompra por WhatsApp.', 5.9);
  src(s, 'T2_14, secciones 1 y 2; documento 09 (app "Andi, Misión Hierro"); metas de HECHOS_v7 y del documento 10.');
  note(s, 'Carlos (#14)', 'Este es el camino del cliente. El anuncio lleva al WhatsApp o al stand; ahí el niño prueba y el padre compra. Después el QR abre la app, que avisa cuando el pack se acaba, y la recompra sale en un clic. El paso de la recompra es la clave del negocio.');

  // #14 5-3-2
  s = content('Comunicación', '#14 META ADS EN VIDEO · 5-3-2 AIDA Y TESTIMONIOS', '5 × 3 × 2 = 30 versiones por anuncio');
  const R532 = [
    ['5', 'GANCHOS', 'Atención · 0 a 3 s', 'La lonchera que vuelve llena o vacía, el jueves a las 6 a. m., el QR del lote.'],
    ['3', 'CUERPOS', 'Interés y deseo · 3 a 16 s', 'Qué es y por qué creer. Al menos un cuerpo es el testimonio de un padre real.'],
    ['2', 'CTA', 'Acción · 16 a 20 s', 'Ir al stand este fin de semana o pedir por WhatsApp, con el mismo botón.'],
  ];
  for (let i = 0; i < 3; i++) {
    const w = 3.91, x = X0 + i * (w + 0.2), y = 1.65, h = 4.0, hot = i === 0;
    card(s, x, y, w, h, { fill: hot ? C.accent1 : C.background1 });
    T(s, R532[i][0], { x: x + 0.3, y: y + 0.2, w: 1.4, h: 1.3, fontSize: 80, bold: true, color: hot ? C.background1 : C.accent1, valign: 'middle' });
    T(s, [
      { text: R532[i][1], options: { fontSize: 20, bold: true, color: hot ? C.background1 : C.text2, breakLine: true } },
      { text: R532[i][2], options: { fontSize: 13, italic: true, color: hot ? C.background2 : C.accent2 } },
    ], { x: x + 1.6, y: y + 0.35, w: w - 1.8, h: 1.1, valign: 'middle' });
    T(s, R532[i][3], { x: x + 0.3, y: y + 1.75, w: w - 0.6, h: 2.0, fontSize: 16, color: hot ? C.background1 : C.text1 });
  }
  franja(s, 'Se prueba en 3 rondas (ganchos, cuerpos, CTA) con la pauta de cada mes: S/5,050 en 2027, 50/50 A y B.', 5.9);
  src(s, 'Regla 5-3-2 según apuntes de Carlos de la sesión 09 (la explicación escrita aún no está en el Drive) [POR CONFIRMAR]; T2_14, secciones 3 y 4.');
  note(s, 'Carlos (#14)', 'La regla de la clase: cada anuncio se prepara con 5 ganchos, 3 cuerpos y 2 llamadas a la acción, es decir 30 versiones. Como la pauta es chica, no las lanzamos todas a la vez: probamos por rondas y nos quedamos con la mejor. Son 3 anuncios: uno para Claudia, uno para Rodrigo y un testimonial.');

  // #15 Calendario
  s = content('Comunicación', '#15 CALENDARIO DE CONTENIDO · OCT-2026 A DIC-2027', 'Ninguna fecha clave sin piezas');
  table(s, ['Mes', 'Fecha clave', 'Contenido principal', 'Pauta S/', 'Meta del mes'], [
    ['Oct-26', 'Perfiles listos el 31-oct', '"Abre el laboratorio", en futuro', '0', '20 contactos en espera'],
    ['Nov-26', 'Video "Vuelve vacía" (S/300)', '"La lonchera del jueves"', '0', '50 contactos en espera'],
    ['Dic-26', '40 influencers y expectativa', '"En enero abrimos en Jockey Plaza"', '600', '100 contactos; 500 seguidores'],
    ['Ene-27', 'Apertura de Jockey Plaza', '"Ya abrimos" y "Escanea tu lote"', '450', '870 brownies'],
    ['Feb-27', 'Campaña escolar y punto 2', '"La lonchera de marzo"', '450', '2,830 brownies'],
    ['Abr-27', 'Día del Niño Peruano (11-abr)', 'Feria para padres', '400', '50 contactos en la feria'],
    ['May y jun', 'Día de la Madre y del Padre', 'Caja de 3; "Papá, una mañana menos"', '450 y 450', '4,304 y 4,038 brownies'],
    ['Ago-27', 'Punto 3 y Día del Niño (15-ago)', '"Ya estamos en el punto 3"', '350', '5,208 brownies'],
    ['Oct-27', 'Día Mundial de la Alimentación (16-oct)', '"Abre el laboratorio": todos los lotes', '400', '5 colegios'],
    ['Dic-27', 'Navidad', 'Cajas por pedido', '500', '2,338 contactos; 4,000 seguidores'],
  ], { y: 1.55, rowH: 0.47, fontSize: 12, colW: [1.25, 3.15, 3.6, 1.2, 2.93], colOpt: { 0: { bold: true, color: C.text2 }, 3: { align: 'center' } } });
  src(s, 'T2_15 (calendario mes a mes); documento 10, sección 6.4 (metas de contactos y seguidores, metas propuestas); Excel v7 (brownies).');
  note(s, 'Carlos (#15)', 'El calendario asegura que ninguna fecha clave nos encuentre sin piezas. Cada mes tiene su tema, su pauta y su meta. La mitad de las publicaciones habla en el tono de Claudia y la otra mitad en el de Rodrigo, y el contenido orgánico no tiene costo extra.');

  // ================= 06 MEZCLA Y EJECUCIÓN =================
  s = await section('Mezcla y ejecución', '06', 'Mezcla y ejecución', '7P · Presupuesto · Gantt · Control de KPI', 'FaCogs');
  note(s, 'Angie (#16 a #18) y Ade (#19)', 'Ahora las tácticas, cuánto cuesta, cuándo se hace y cómo lo controlamos.');

  // #16 7P
  s = content('Mezcla y ejecución', '#16 LAS 7P · LA CAJA DE HERRAMIENTAS', 'Las 7P en una tabla');
  table(s, ['P', 'Qué decidimos', 'Dato clave'], [
    ['Producto', 'Mini brownie de 20 g con sangrecita; 3 sabores; 4 presentaciones; QR y app', 'Hierro medido por lote (1.9 mg [POR CONFIRMAR])'],
    ['Precio', 'Pack de 6: S/27.90 en stand, S/26.90 por WhatsApp; sin suscripción', 'S/4.16 a S/4.48 por brownie; +1 % a +12 % sobre Fika y Mamalama'],
    ['Plaza', 'Venta física: 3 puntos, Plaza Vea, 5 colegios, 8 naturistas', 'A y B con esfuerzo parejo'],
    ['Promoción', 'Degustación, 2 ferias, 40 eventos, embajadoras, Meta y 40 influencers', 'BTL 74 % y digital 26 %, sin ATL'],
    ['Personas', 'Vendedores a S/90 por día, coordinadora a S/709 al mes, embajadoras', '100 % capacitados antes de abrir'],
    ['Procesos', 'Degustación, compra, QR, app, contacto, aviso y recompra', '30 % escaneado; 35 % de recompra'],
    ['Evidencia física', 'Empaque con QR, informe del lote, registro sanitario, stand', 'Informe de laboratorio publicado por lote'],
  ], { y: 1.55, rowH: 0.6, fontSize: 13, colW: [1.9, 6.0, 4.23], colOpt: { 0: { bold: true, color: C.accent1 } } });
  src(s, 'T2_16 (preguntas guía de las 7P de la sesión 09); HECHOS_v7; documento 10.');
  note(s, 'Angie (#16)', 'La clase nos da una pregunta por cada P. Lo más importante: la plaza es la venta física y la promoción es sobre todo cara a cara. Las personas también son marketing: los vendedores se capacitan antes de abrir para saber qué se dice y qué no.');

  // #17 Presupuesto por canal
  s = content('Mezcla y ejecución', '#17 PRESUPUESTO · INVERSIÓN POR CANAL', 'S/24,544 en 15 meses, con S/900 al mes');
  table(s, ['BTL (cara a cara)', 'S/'], [
    ['Vendedores en ferias y eventos', '4,140'], ['Ferias pagadas (stand)', '3,600'], ['Aporte a 40 eventos sin costo', '2,800'], ['Mamás embajadoras (premio al padre)', '2,400'],
    ['Material de stand y POP', '2,300'], ['Degustaciones extra', '1,750'], ['600 muestras de lanzamiento', '1,146'],
    [{ text: 'Total BTL · 74 %', options: { bold: true, color: C.accent1 } }, { text: '18,136', options: { bold: true, color: C.accent1 } }],
  ], { x: X0, y: 1.6, w: 6.0, rowH: 0.47, fontSize: 13, colW: [4.7, 1.3], colOpt: { 1: { align: 'right' } } });
  table(s, ['Digital', 'S/'], [
    ['Pauta en Meta 2027 (50/50 A y B)', '5,050'], ['Pauta de expectativa (dic-2026)', '600'], ['Influencers (40 packs)', '458'], ['Video de lanzamiento', '300'],
    [{ text: 'Total digital · 26 %', options: { bold: true, color: C.accent1 } }, { text: '6,408', options: { bold: true, color: C.accent1 } }],
  ], { x: 6.73, y: 1.6, w: 6.0, rowH: 0.47, fontSize: 13, colW: [4.7, 1.3], colOpt: { 1: { align: 'right' } } });
  stat(s, 6.73, 4.6, 6.0, 1.95, 'TOTAL DEL PLAN · OCT-2026 A DIC-2027', 'S/24,544', 'S/900 al mes (S/10,800) + lanzamiento S/3,204 + ferias S/4,140 + eventos S/6,400.', { bigSize: 32, subSize: 13, valign: 'middle' });
  src(s, 'Presupuesto-marketing-AndiBite.xlsx (hoja que marca "Cuadra"); HECHOS_v7; T2_17, sección 1. Sin ATL (S/0).');
  note(s, 'Angie (#17)', 'El presupuesto total es S/24,544 en 15 meses, unos 44 céntimos por brownie en 2027. Los S/900 al mes no cambian: S/700 de pauta, degustación y material y S/200 de embajadoras. El total suma también el lanzamiento, las dos ferias y los 40 eventos, que ya estaban en otras líneas del Excel.');

  // #17 Presupuesto por categoría y fase
  s = content('Mezcla y ejecución', '#17 PRESUPUESTO · POR TIPO DE MEDIO Y POR FASE', 'Promociones y RR. PP. llevan el 59 %');
  s.addChart(pres.charts.BAR, [{ name: 'S/', labels: ['Ventas personales (17 %)', 'Publicidad (24 %)', 'Relaciones públicas (28 %)', 'Promociones (31 %)'], values: [4140, 5950, 6858, 7596] }], Object.assign(chartText(), {
    x: 0.4, y: 1.55, w: 7.9, h: 5.0, barDir: 'bar', title: 'Inversión por tipo de medio (S/)', chartColors: [H.accent1], showValue: true, dataLabelPosition: 'outEnd', dataLabelFormatCode: '"S/"#,##0', valAxisHidden: true, valGridLine: { style: 'none' }, showLegend: false, valAxisMaxVal: 9000, catAxisLabelFontSize: 13, barGapWidthPct: 45,
  }));
  card(s, 8.5, 1.65, 4.23, 4.9);
  T(s, 'POR FASE', { x: 8.8, y: 1.85, w: 3.7, h: 0.3, fontSize: 12, bold: true, color: C.accent1, charSpacing: 1 });
  const FS = [['Prelanzamiento', 'Oct-dic 2026', '1,758'], ['Lanzamiento', 'Ene-feb 2027', '5,796'], ['Crecer', 'Mar-jul 2027', '9,770'], ['Expandir', 'Ago-dic 2027', '7,220']];
  FS.forEach((f, i) => {
    const y = 2.3 + i * 1.03;
    T(s, [{ text: f[0], options: { fontSize: 15, bold: true, color: C.text2, breakLine: true } }, { text: f[1], options: { fontSize: 12, color: C.accent2 } }], { x: 8.8, y, w: 2.2, h: 0.85, valign: 'middle' });
    T(s, 'S/' + f[2], { x: 10.9, y, w: 1.6, h: 0.85, fontSize: 20, bold: true, color: C.accent1, align: 'right', valign: 'middle' });
  });
  src(s, 'Presupuesto-marketing-AndiBite.xlsx (mezcla de promoción y serie mensual); T2_17, secciones 1.1 y 1.4; T2_18, sección 3.');
  note(s, 'Angie (#17)', 'Por tipo de medio, lo que más pesa son las promociones, como muestras, degustación y embajadoras, y las relaciones públicas, como ferias, eventos e influencers. Por fase, la inversión más grande es la de crecer, de marzo a julio, cuando entran los colegios y la feria del Día del Niño.');

  // #17 CPA y ROAS (prompt 4) — se arma al final, con T2_17 releído
  s = content('Mezcla y ejecución', '#17 CPA Y ROAS · PROMPT 4 DE LA CLASE', 'La pauta trae contactos; la recompra paga');
  table(s, ['Métrica estimada', 'Valor calculado', 'Interpretación'], [
    ['Impresiones de la pauta 2027', '397,920', 'S/5,050 a adultos de 30 a 45 en Lima Top y Moderna'],
    ['Clics y CTR', '4,090 · 1.03 %', 'CTR en la zona normal de Meta [POR CONFIRMAR]'],
    ['Contactos de WhatsApp', '613 (409 a 1,022)', 'Contactos extra: la meta de 2,300 no depende de la pauta'],
    ['CPA por contacto', 'S/8.23', 'Línea base con promedios; la meta es S/5 o menos'],
    ['CPA por cliente', 'S/41.16', 'Cuesta unas 4 veces lo que deja un pedido (S/10.45)'],
    ['ROAS del primer pedido', '0.72', 'Normal en marca nueva: el valor está en la recompra'],
  ], { y: 1.55, rowH: 0.6, fontSize: 13, colW: [3.4, 2.6, 6.13], colOpt: { 0: { bold: true, color: C.text2 }, 1: { bold: true, color: C.accent1, align: 'center' } } });
  franja(s, 'Supuestos: CPM US$3.70 y CPC US$0.36 (Perú), S/3.43 por dólar, 15 % de los clics escribe y 1 de cada 5 compra.', 5.95);
  src(s, 'AdAmigo, 18-oct-2026 (CPM y CPC de Perú); BCRP, 15-oct-2026 (tipo de cambio); Excel v7; T2_17, sección 2 (prompt 4, revisado).');
  note(s, 'Angie (#17)', 'Usamos el prompt 4 de la clase con datos de Meta para Perú. La pauta de S/5,050 traería unos 613 contactos a S/8.23 cada uno. Con el primer pedido solo vuelven 72 céntimos por sol: la pauta no se paga sola, se paga con la recompra. Le corregimos a la IA el ROAS con IGV y los benchmarks de Estados Unidos.');

  // #17 ROI de marketing y sensibilidad — se arma al final, con T2_17 releído
  s = content('Mezcla y ejecución', '#17 ROI DE MARKETING · SENSIBILIDAD', 'ROI de marketing de 74 %');
  stat(s, X0, 1.65, 4.3, 4.9, 'ROI DE MARKETING', '74 %', 'Si el marketing explica el 75 % de la contribución: (S/42,618 − S/24,544) ÷ S/24,544.', { bigSize: 66, subSize: 14.5 });
  table(s, ['Atribución al marketing', 'ROI'], [
    ['100 % (techo)', '132 %'], [{ text: '75 % (cifra principal)', options: { bold: true, color: C.accent1 } }, { text: '74 %', options: { bold: true, color: C.accent1 } }], ['50 %', '16 %'], ['43 % (equilibrio)', '0 %'],
  ], { x: 5.1, y: 1.65, w: 7.63, rowH: 0.5, fontSize: 14, colW: [5.4, 2.23], colOpt: { 1: { align: 'center' } } });
  labelCard(s, 5.1, 4.35, 7.63, 2.2, 'ROI DEL NEGOCIO (OTRO INDICADOR)', 'Utilidad neta ÷ aporte de los socios: S/10,379 ÷ S/25,000 = 41.5 % en 2027. La inversión de S/40,876 se recupera en el mes 23.', { size: 15, band: C.accent2 });
  src(s, 'Excel v7, hojas Resumen y Proyeccion (contribución después de stands S/56,824); Presupuesto-marketing-AndiBite.xlsx; T2_17, sección 3.');
  note(s, 'Angie (#17)', 'El ROI de marketing compara lo que deja la venta con lo que cuesta el marketing. Como parte de la venta ocurriría igual, la cifra principal es el escenario en que el marketing explica el 75 %: 74 %. El techo es 132 % y el piso 16 %; el marketing se paga si explica al menos el 43 %. Si los stands vendieran 20 % menos, el 74 % bajaría a unos 34 %.');

  // #17 Sensibilidad al costo por contacto (sección nueva de T2_17)
  s = content('Mezcla y ejecución', '#17 SENSIBILIDAD AL COSTO POR CONTACTO Y VIABILIDAD', 'Con S/8.23 por contacto, el plan sigue rentable');
  table(s, ['Indicador (2027)', 'CPA S/5 (meta)', 'CPA S/8.23 (base)', 'CPA S/10 (malo)'], [
    ['Contactos que trae la pauta', '1,010', { text: '613', options: { bold: true } }, '505'],
    ['Utilidad neta del año 1*', 'S/14,619', { text: 'S/12,955', options: { bold: true } }, 'S/12,499'],
    ['ROI de marketing, 75 % atribuido*', '88 %', { text: '82 %', options: { bold: true } }, '81 %'],
    ['Mes en que la pauta se paga sola', 'Mes 13 (ene-28)', { text: 'Mes 18 (jun-28)', options: { bold: true } }, 'Mes 20 (ago-28)'],
  ], { y: 1.6, w: 8.15, rowH: 0.66, fontSize: 14, colW: [3.17, 1.66, 1.66, 1.66], colOpt: { 0: { bold: true, color: C.text2 }, 1: { align: 'center' }, 2: { align: 'center', color: C.accent1 }, 3: { align: 'center' } } });
  T(s, '* Estimado: suma lo que deja la pauta. El Excel v7 no le cuenta ventas a la pauta, así que su utilidad (S/10,379), su ROI de marketing (74 %) y el recupero en el mes 23 no cambian con el CPA.', { x: X0, y: 5.05, w: 8.15, h: 0.75, fontSize: 13, italic: true, color: C.accent2 });
  stat(s, 9.0, 1.6, 3.73, 4.2, 'LÍMITE DE VIABILIDAD', 'S/9.70', 'por contacto: sobre ese costo, la pauta no se paga ni a diciembre de 2028 (con 75 % de atribución).', { bigSize: 44, subSize: 14 });
  franja(s, 'Plan B [PROPUESTA]: si a fin de febrero el CPA sigue sobre S/8, S/150 al mes de pauta pasan a degustación.', 5.95);
  src(s, 'T2_17, "Sensibilidad al costo por contacto y viabilidad" [ESTIMADO; supone que 1 de cada 15 contactos pide al mes]; Excel v7 (Mensual, Supuestos, Anio2).');
  note(s, 'Angie (#17)', 'La pregunta fue cuánto mueve el costo por contacto. Las cifras del Excel no cambian, porque el Excel ya paga la pauta sin contarle ventas. Lo que cambia es una ganancia extra: con S/8.23 la pauta suma unos S/2,576 de utilidad en 2027, y se paga sola en junio de 2028. El límite está en unos S/9.70 por contacto; si en febrero seguimos sobre S/8, pasamos S/150 al mes de pauta a degustación, sin cambiar el total.');

  // #18 Gantt
  s = content('Mezcla y ejecución', '#18 DIAGRAMA DE GANTT · 15 MESES', 'Qué hacemos cada mes');
  {
    // Gantt nativo: mismo código y datos que la TC5-8 (build.js, sección 26b; plan_mkt.json), ajustado al espacio del T2.
    const GM = ['Oct', 'Nov', 'Dic', 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'];
    const gx = 4.1, gw = 12.73 - gx, cwm = gw / 15, gy0 = 1.5;
    const gfases = [[0, 2, 'PRELANZAMIENTO 2026', C.accent2], [3, 4, 'LANZAMIENTO', C.accent1], [5, 9, 'CRECER', C.accent4], [10, 14, 'EXPANDIR', C.text2]];
    gfases.forEach(f => {
      s.addShape(pres.shapes.RECTANGLE, { x: gx + f[0] * cwm + 0.02, y: gy0, w: (f[1] - f[0] + 1) * cwm - 0.04, h: 0.28, fill: { color: f[3] }, line: { color: f[3], width: 0 } });
      T(s, f[2], { x: gx + f[0] * cwm, y: gy0, w: (f[1] - f[0] + 1) * cwm, h: 0.28, fontSize: 9, bold: true, align: 'center', valign: 'middle', color: C.background1, charSpacing: 0.5 });
    });
    GM.forEach((m, i) => T(s, m, { x: gx + i * cwm, y: gy0 + 0.31, w: cwm, h: 0.22, fontSize: 10, bold: true, align: 'center', color: i < 3 ? C.accent2 : C.text2 }));
    const gcol = { Preparar: C.accent2, Lanzar: C.accent1, Fidelizar: C.accent4, Crecer: C.accent3 };
    const rh = 0.29, ry0 = gy0 + 0.56, nr = PM.gantt.length;
    for (let i = 0; i < 15; i++) if (i % 2 === 1) s.addShape(pres.shapes.RECTANGLE, { x: gx + i * cwm, y: ry0, w: cwm, h: nr * rh, fill: { color: 'F4E6D3' }, line: { color: 'F4E6D3', width: 0 } });
    s.addShape(pres.shapes.LINE, { x: gx + 3 * cwm, y: gy0 + 0.28, w: 0, h: nr * rh + 0.3, line: { color: H.accent1, width: 1.25, dashType: 'dash' } });
    let lastG = '';
    PM.gantt.forEach((r, i) => {
      const y = ry0 + i * rh, col = gcol[r.grupo];
      if (r.grupo !== lastG) { T(s, r.grupo.toUpperCase(), { x: 0.6, y: y + 0.02, w: 0.95, h: rh - 0.04, fontSize: 9, bold: true, color: col === C.accent3 ? C.accent2 : col, valign: 'middle', charSpacing: 0.5 }); lastG = r.grupo; }
      s.addShape(pres.shapes.RECTANGLE, { x: 1.55, y: y + 0.07, w: 0.07, h: rh - 0.14, fill: { color: col }, line: { color: col, width: 0 } });
      T(s, r.actividad, { x: 1.68, y, w: gx - 1.72, h: rh, fontSize: 9, valign: 'middle', color: C.text1 });
      r.segmentos.forEach(sg => {
        const x0 = gx + sg[0] * cwm + 0.03, w = (sg[1] - sg[0] + 1) * cwm - 0.06;
        s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x0, y: y + 0.04, w, h: rh - 0.08, rectRadius: 0.08, fill: { color: col }, line: { color: col, width: 0 } });
        if (sg[2]) T(s, sg[2], { x: x0 - 0.05, y: y + 0.04, w: w + 0.1, h: rh - 0.08, fontSize: (sg[1] === sg[0]) ? 7.5 : 8.5, bold: true, align: 'center', valign: 'middle', color: r.grupo === 'Crecer' ? C.text2 : C.background1 });
      });
    });
    const yg = ry0 + nr * rh + 0.07;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: yg, w: 12.13, h: 0.4, rectRadius: 0.08, fill: { color: C.text2 }, line: { color: C.text2, width: 0 } });
    T(s, [{ text: 'Inversión del mes (S/)  ', options: { bold: true } }, { text: 'total 24,544', options: { fontSize: 10, color: C.accent3 } }], { x: 0.8, y: yg, w: gx - 0.85, h: 0.4, fontSize: 11, valign: 'middle', color: C.background1 });
    PM.presupuesto_mensual.forEach((g, i) => T(s, g ? g.toLocaleString('en-US') : '–', { x: gx + i * cwm, y: yg, w: cwm, h: 0.4, fontSize: 10, bold: true, align: 'center', valign: 'middle', color: (i === 4 || i === 6) ? C.accent3 : C.background1 }));
    const ym = yg + 0.45;
    card(s, 0.6, ym, 12.13, 0.46, { r: 0.08, noShadow: true });
    T(s, 'Meta del mes (brownies)', { x: 0.8, y: ym, w: gx - 0.85, h: 0.46, fontSize: 11, bold: true, valign: 'middle', color: C.text2 });
    const metaB = ['20 en espera', '50 en espera', '100 en espera', 870, 2830, 3734, 4420, 4304, 4038, 3824, 5208, 5603, 6011, 5861, 5628];
    metaB.forEach((m, i) => T(s, typeof m === 'number' ? m.toLocaleString('en-US') : m, { x: gx + i * cwm, y: ym, w: cwm, h: 0.46, fontSize: typeof m === 'number' ? 10 : 8, bold: typeof m === 'number', align: 'center', valign: 'middle', color: typeof m === 'number' ? C.accent1 : C.accent2 }));
  }
  src(s, 'T2_18 y TC5-8 (plan_mkt.json, 12 actividades); Excel v7 (metas); Presupuesto-marketing-AndiBite.xlsx (inversión). Fechas de malls y ferias [POR CONFIRMAR].');
  note(s, 'Angie (#18)', 'El Gantt muestra las 12 actividades en 15 meses, con la inversión y la meta de cada mes; la línea roja marca el lanzamiento en enero. Los hitos son Jockey Plaza en enero, el punto 2 y la feria escolar en febrero, la feria del 11 de abril, el Día de la Madre y del Padre, y el punto 3 con el Día del Niño en agosto. Las fechas que dependen de un contrato con el mall o la feria siguen por confirmar.');

  // #19 KPI y semáforo
  s = content('Mezcla y ejecución', '#19 CONTROL DE KPI · TABLERO DE CADA DOMINGO', 'El semáforo de los domingos');
  const V = (t) => hd(t, { fill: { color: C.accent4 }, align: 'center' });
  const Am = (t) => hd(t, { fill: { color: C.accent3 }, color: C.text2, align: 'center' });
  const R = (t) => hd(t, { fill: { color: C.accent1 }, align: 'center' });
  table(s, ['KPI', 'Meta', V('Verde'), Am('Amarillo'), R('Rojo'), 'Quién'], [
    ['Brownies por día por punto', '80 a 90', 'Meta o más', '65 a la meta', 'Menos de 65', 'Carlos'],
    ['Ventas acumuladas frente al Excel', '100 %', '100 % o más', '88 a 100 %', 'Menos de 88 %', 'Carlos'],
    ['Recompra por WhatsApp', '35 % del físico', '35 %', '20 a 35 %', 'Menos de 20 %', 'Coordinadora'],
    ['Familias por embajadoras', '5 por semana', '5 o más', '3 a 4', 'Menos de 3', 'Coordinadora'],
    ['Envases escaneados', '30 % en el año', 'Meta o más', 'Hasta 5 puntos menos', 'Más de 5 puntos menos', 'Angie'],
    ['Costo por contacto en Meta', 'S/5', 'S/5 o menos', 'S/5 a S/8', 'Más de S/8', 'Angie'],
    ['Caja del mes', 'S/2,545 o más', 'S/2,545 o más', 'S/1,000 a 2,545', 'Menos de S/1,000', 'Adela'],
  ], { y: 1.55, rowH: 0.52, fontSize: 12.5, colW: [3.05, 1.75, 1.75, 1.95, 2.05, 1.58], colOpt: { 0: { bold: true, color: C.text2 }, 2: { align: 'center' }, 3: { align: 'center' }, 4: { align: 'center' } } });
  franja(s, 'Cada domingo, 30 minutos: cada rojo termina con una acción, un responsable y una fecha.', 5.95);
  src(s, 'T2_19 (17 KPI y tablero de 12 filas; semáforo propuesto); documento 10, sección 8; Excel v7 (caja mínima S/2,545 en febrero).');
  note(s, 'Ade (#19)', 'Controlar es comparar cada semana lo que pasó con lo que dijimos. Cada domingo revisamos este tablero en 30 minutos con el semáforo. Si algo está en rojo, sale con una acción, un responsable y una fecha. El KPI más importante es el de brownies por día: el mínimo para no perder es 65.');

  // ================= 07 CASO =================
  s = await section('Caso', '07', 'Caso', 'Resumen del caso NutriSmart', 'FaBookOpen');
  note(s, 'Diana (#20)', 'El caso NutriSmart de la clase todavía no está en el Drive. Dejamos el espacio listo.');

  s = content('Caso', '#20 RESUMEN DEL CASO NUTRISMART', '[PENDIENTE: caso NutriSmart]');
  for (let i = 0; i < 3; i++) {
    const w = 3.91, x = X0 + i * (w + 0.2), y = 1.7, h = 4.15;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.15, fill: { color: 'F0E2CF' }, line: { color: C.accent5, width: 1.5, dashType: 'dash' }, objectName: 'APRENDIZAJE_' + (i + 1) });
    T(s, [
      { text: 'APRENDIZAJE ' + (i + 1), options: { fontSize: 14, bold: true, color: C.accent1, charSpacing: 1, breakLine: true } },
      { text: '[POR CONFIRMAR]', options: { fontSize: 18, bold: true, color: C.text2, breakLine: true } },
      { text: 'Qué hizo NutriSmart', options: { fontSize: 14, color: C.accent2, bullet: { indent: 16 }, breakLine: true } },
      { text: 'Qué aplicamos en AndiBite', options: { fontSize: 14, color: C.accent2, bullet: { indent: 16 } } },
    ], { x: x + 0.3, y: y + 0.3, w: w - 0.6, h: h - 0.6, paraSpaceAfter: 10 });
  }
  franja(s, 'Pendiente: el caso NutriSmart no está en el Drive (la clase lo marca como faltante).', 6.0);
  note(s, 'Diana (#20)', 'PENDIENTE. Cuando el caso NutriSmart esté en el Drive, Diana completa aquí 3 aprendizajes: qué hizo NutriSmart y qué aplicamos en AndiBite. Hoy no inventamos nada sobre el caso.');

  // ================= RESUMEN Y CIERRE =================
  pres.addSection({ title: 'Resumen y cierre' });
  // Resumen ejecutivo — se arma al final, con T2_21 releído
  s = content('Resumen y cierre', '#21 RESUMEN EJECUTIVO', 'El plan en una diapositiva');
  const RE = [
    ['PROBLEMA', '24.0 %', 'de los niños de 6 a 35 meses de Lima tiene anemia, y lo que tiene hierro vuelve en la lonchera.'],
    ['PRODUCTO', '20 g', 'mini brownie con sangrecita de res, 3 sabores, hierro medido por lote y app con QR.'],
    ['PÚBLICO', '46,000', 'hogares A/B en el núcleo. Claudia (A) y Rodrigo (B), con esfuerzo parejo.'],
    ['CAMPAÑA', 'S/24,544', 'en 15 meses: "Vuelve vacía", 74 % BTL y 26 % digital, sin ATL.'],
    ['METAS 2027', '52,331', 'brownies y S/244,728 con IGV; 35 % de recompra y 5 colegios.'],
    ['RETORNO', '74 %', 'de ROI de marketing, cifra principal (75 % de atribución). ROI del negocio: 41.5 %. Recupero en el mes 23.'],
  ];
  RE.forEach((r, i) => {
    const w = 3.91, h = 2.4, x = X0 + (i % 3) * (w + 0.2), y = 1.6 + Math.floor(i / 3) * (h + 0.12);
    stat(s, x, y, w, h, r[0], r[1], r[2], { dark: i === 5, bigSize: 34, subSize: 15, valign: 'middle' });
  });
  src(s, 'T2_21; HECHOS_v7; Excel v7; Presupuesto-marketing-AndiBite.xlsx; INEI, ENDES 2024; T2_17, sección 3.');
  note(s, 'Diana (#21)', 'En resumen: un problema real, un producto que el niño sí se come y un público que pide pruebas. Con S/24,544 en 15 meses buscamos vender 52,331 brownies en 2027, solo el 1.4 % del núcleo. El ROI de marketing es 74 % en su cifra principal y el costo por contacto de la pauta no cambia esa cifra.');

  // Conclusiones y riesgos
  s = content('Resumen y cierre', '#21 CIERRE · CONCLUSIONES Y RIESGOS', 'El laboratorio es la base del plan');
  card(s, X0, 1.65, 5.2, 4.9, { fill: C.text2 });
  T(s, [
    { text: '3 CONCLUSIONES', options: { fontSize: 12, bold: true, color: C.accent3, charSpacing: 1, breakLine: true } },
    { text: 'Una sola línea: insight, posicionamiento, campaña y KPI.', options: { fontSize: 19, color: C.background1, bullet: { indent: 16 }, breakLine: true } },
    { text: 'Sin informe del lote no hay "hierro medido" ni colegios (17.5 % del año 1).', options: { fontSize: 19, color: C.background1, bullet: { indent: 16 }, breakLine: true } },
    { text: 'La venta física manda; el marketing es chico y medible.', options: { fontSize: 19, color: C.background1, bullet: { indent: 16 } } },
  ], { x: 0.9, y: 1.9, w: 4.6, h: 4.45, paraSpaceAfter: 22 });
  table(s, ['Riesgo', 'Plan B'], [
    ['El laboratorio no confirma "sin octógono"', 'El mensaje es el hierro medido; esos brownies van a eventos y naturistas'],
    ['Los stands venden 20 % menos', 'Línea de crédito de S/3,000 solo si la caja baja de S/1,000'],
    ['La pauta cuesta más de S/8 por contacto', 'Rondas 5-3-2; si sigue, S/150 al mes a degustación [PROPUESTA]'],
    ['Rechazo al saber que tiene sangrecita', 'Primero se prueba y después se cuenta'],
  ], { x: 6.05, y: 1.65, w: 6.68, rowH: 1.0, fontSize: 13.5, colW: [2.9, 3.78], colOpt: { 0: { bold: true, color: C.text2 } } });
  src(s, 'T2_21, secciones 4.1 y 4.3; documento 10 (riesgos); T2_06; T2_19.');
  note(s, 'Diana (#21)', 'Tres conclusiones: el plan es una sola línea, el laboratorio es la base y la venta física manda. Cada riesgo grande ya tiene su plan B. Lo primero que hay que cerrar es el informe del laboratorio del primer lote.');

  // Cierre
  s = pres.addSlide({ masterName: 'CIERRE', sectionTitle: 'Resumen y cierre' });
  T(s, 'SLOGAN', { x: 0.8, y: 0.9, w: 7.4, h: 0.35, fontSize: 13, bold: true, color: C.accent3, charSpacing: 2 });
  s.addText('Hierro medido. Sabor a brownie.', { placeholder: 'title' });
  T(s, 'Su prueba: la lonchera vacía. La tuya: el informe de su lote.', { x: 0.8, y: 3.4, w: 7.4, h: 1.0, fontSize: 24, bold: true, color: C.accent5 });
  T(s, 'Gracias · Grupo 2 · AndiBite', { x: 0.8, y: 5.6, w: 7.4, h: 0.4, fontSize: 16, color: C.background2 });
  s.addImage({ path: 'img/B1_frente_s.jpg', x: 8.75, y: 0.6, w: 4.4, h: 6.12, rotate: -3 });
  note(s, 'Diana (#21)', 'En la lonchera de cada día, el niño da su prueba y el padre tiene la suya. Hierro medido. Sabor a brownie. Muchas gracias; quedamos atentos a sus preguntas.');

  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log('ok', OUT);
})().catch(e => { console.error(e); process.exit(1); });
