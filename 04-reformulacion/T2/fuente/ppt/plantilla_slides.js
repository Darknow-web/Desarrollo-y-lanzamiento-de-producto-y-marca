
// =============== PLANTILLA T2 ===============
(async () => {
  pres.addSection({ title: 'Portada' });
  let s = pres.addSlide({ masterName: 'PORTADA', sectionTitle: 'Portada' });
  s.addImage({ path: 'img/logo_light.png', x: 0.8, y: 1.1, w: 5.6, h: 1.92 });
  s.addText('Plan de marketing', { placeholder: 'title' });
  s.addText('y lanzamiento · T2 · [subtítulo del tema]', { placeholder: 'body' });
  T(s, 'Grupo 2 · Diana Ayoso · Carlos Inga · Angie Blas · Patricia Cárdenas · Adela Robles', { x: 0.8, y: 5.75, w: 7.6, h: 0.35, fontSize: 14, color: C.background2 });
  T(s, 'Desarrollo y lanzamiento de nuevos productos · Prof. Paola Cevallos · Octubre de 2026', { x: 0.8, y: 6.15, w: 7.6, h: 0.35, fontSize: 12, color: C.accent5 });
  s.addImage({ path: 'img/B1_frente_s.jpg', x: 8.75, y: 0.6, w: 4.4, h: 6.12, rotate: 4 });
  s.addNotes('PLANTILLA · Portada. Cambiar el subtítulo. No mover el logo ni el empaque.');

  s = await section('Análisis situacional', '01', 'Análisis situacional', 'PESTEL · Qué le importa al cliente · Benchmark · FODA', 'FaSearch');
  s.addNotes('PLANTILLA · Separador de sección. Cambiar número, título, subtítulo e ícono (react-icons/fa).');

  // contenido con viñetas
  s = content('Análisis situacional', 'KICKER EN MAYÚSCULAS · TEMA', 'Título de la diapositiva: una idea, máximo 50 caracteres');
  card(s, 0.6, 1.7, 7.6, 4.95);
  T(s, [
    { text: 'Primera idea clave en una frase corta', options: { bullet: true, breakLine: true } },
    { text: 'Segunda idea con un dato y su fuente (INEI 2026)', options: { bullet: true, breakLine: true } },
    { text: 'Tercera idea: qué significa para AndiBite', options: { bullet: true } },
  ], { x: 0.95, y: 2.0, w: 7.0, h: 4.3, fontSize: 18, paraSpaceAfter: 12, color: C.text1 });
  card(s, 8.45, 1.7, 4.28, 4.95, { fill: C.text2 });
  T(s, [{ text: 'DATO CLAVE', options: { fontSize: 12, bold: true, color: C.accent3, charSpacing: 1, breakLine: true } }, { text: '00 %', options: { fontSize: 54, bold: true, color: C.background1, breakLine: true } }, { text: 'qué mide el dato · Fuente, año', options: { fontSize: 14, color: C.accent5 } }], { x: 8.75, y: 2.0, w: 3.7, h: 4.3, valign: 'middle' });
  s.addNotes('PLANTILLA · Contenido con viñetas y dato clave. Máximo 3 viñetas de una línea; todo dato con fuente.');

  // tres tarjetas
  s = content('Análisis situacional', 'KICKER · TEMA', 'Tres ideas en tres tarjetas');
  for (let i = 0; i < 3; i++) {
    const w = 3.9, x = 0.6 + i * (w + 0.215), y = 1.75, h = 4.9;
    card(s, x, y, w, h, { fill: i === 1 ? C.accent1 : C.background1 });
    await iconCircle(s, ['FaUsers', 'FaGift', 'FaChartLine'][i], x + 0.3, y + 0.3, 0.8, i === 1 ? C.background1 : C.accent1, i === 1 ? H.accent1 : 'FFFFFF');
    T(s, 'Título de la tarjeta', { x: x + 0.3, y: y + 1.3, w: w - 0.6, h: 0.5, fontSize: 20, bold: true, color: i === 1 ? C.background1 : C.text2 });
    T(s, 'Texto breve de dos o tres líneas que explica la idea con palabras simples.', { x: x + 0.3, y: y + 1.9, w: w - 0.6, h: 2.0, fontSize: 15, color: i === 1 ? C.background1 : C.text1 });
  }
  s.addNotes('PLANTILLA · Tres tarjetas. La del centro va resaltada en rojo ladrillo.');

  // tabla
  s = content('Análisis situacional', 'KICKER · TEMA', 'Tabla con encabezado café');
  const hd = (t) => ({ text: t, options: { bold: true, color: C.background1, fill: { color: C.text2 }, fontSize: 13 } });
  const rw = (a, i) => a.map(t => ({ text: t, options: { fontSize: 13, fill: { color: i % 2 ? 'FFFFFF' : 'FBF3E8' } } }));
  s.addTable([[hd('Columna 1'), hd('Columna 2'), hd('Columna 3'), hd('Columna 4')], ...[0, 1, 2, 3, 4].map(i => rw(['Dato', 'Dato', 'Dato', 'Dato'], i))], { x: 0.6, y: 1.75, w: 12.13, rowH: 0.55, border: { type: 'solid', pt: 0.75, color: 'E8D8C4' }, color: C.text1, valign: 'middle', margin: 0.08 });
  card(s, 0.6, 6.32, 12.13, 0.55, { fill: C.text2, r: 0.27 });
  T(s, 'Franja de conclusión: la idea que el jurado debe recordar.', { x: 0.9, y: 6.32, w: 11.6, h: 0.55, valign: 'middle', fontSize: 14, italic: true, color: C.background2 });
  s.addNotes('PLANTILLA · Tabla. Encabezado café 4A2018, filas alternas crema FBF3E8, franja de conclusión abajo.');

  // gráfico
  s = content('Análisis situacional', 'KICKER · TEMA', 'Gráfico con su lectura');
  s.addChart(pres.charts.BAR, [{ name: 'Serie', labels: ['A', 'B', 'C', 'D'], values: [4, 7, 5, 6] }], Object.assign(chartText(), { x: 0.4, y: 1.6, w: 8.2, h: 5.1, barDir: 'col', title: 'Título del gráfico (unidad)', chartColors: [H.accent1], showValue: true, dataLabelPosition: 'outEnd', valAxisHidden: true, valGridLine: { style: 'none' }, showLegend: false }));
  card(s, 8.85, 1.7, 3.88, 4.95);
  T(s, [{ text: 'LECTURA', options: { fontSize: 12, bold: true, color: C.accent1, charSpacing: 1, breakLine: true } }, { text: 'Qué muestra el gráfico y qué decisión tomamos.', options: { fontSize: 16, color: C.text1 } }], { x: 9.1, y: 2.0, w: 3.4, h: 4.3 });
  s.addNotes('PLANTILLA · Gráfico nativo (clic derecho > Editar datos) con caja de lectura.');

  pres.addSection({ title: 'Cierre' });
  s = pres.addSlide({ masterName: 'CIERRE', sectionTitle: 'Cierre' });
  T(s, 'SLOGAN', { x: 0.8, y: 0.9, w: 7.4, h: 0.35, fontSize: 13, bold: true, color: C.accent3, charSpacing: 2 });
  s.addText('Hierro medido. Sabor a brownie.', { placeholder: 'title' });
  T(s, 'Frase de cierre o llamado a la acción', { x: 0.8, y: 3.4, w: 7.4, h: 0.5, fontSize: 24, bold: true, color: C.accent5 });
  s.addImage({ path: 'img/B1_frente_s.jpg', x: 8.75, y: 0.6, w: 4.4, h: 6.12, rotate: -3 });
  s.addNotes('PLANTILLA · Cierre con el slogan.');

  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log('ok', OUT);
})().catch(e => { console.error(e); process.exit(1); });
