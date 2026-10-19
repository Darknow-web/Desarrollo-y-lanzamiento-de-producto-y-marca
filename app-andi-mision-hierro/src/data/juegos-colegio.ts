// Juegos de colegio (Suma de hierro, Palabras de la lonchera, Inglés de lonchera).
// Todo el contenido se genera por reglas según el tramo de edad y el nivel: sin listas enormes.
// Solo alimentos, cocina y colegio: nada de marcas ni productos (Ley 30021).

export type Tramo = 'a' | 'b' | 'c';   // a: 4–6 · b: 7–9 · c: 10–11
export const tramoDe = (edad: number): Tramo => (edad <= 6 ? 'a' : edad <= 9 ? 'b' : 'c');
export const NOMBRE_TRAMO: Record<Tramo, string> = { a: '4 a 6 años', b: '7 a 9 años', c: '10 a 11 años' };
export const RONDAS = 8;
export const NIVELES = 20;

const azar = (n: number) => Math.floor(Math.random() * n);
const entre = (min: number, max: number) => min + azar(max - min + 1);
export const uno = <T,>(a: T[]) => a[azar(a.length)];
export const mezclar = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5);

/* =====================================================================
   SUMA DE HIERRO
   ===================================================================== */
export interface FichaAlimento { emoji: string; uno: string; varios: string }
export const FICHAS: FichaAlimento[] = [
  { emoji: '🫘', uno: 'lenteja', varios: 'lentejas' },
  { emoji: '🥚', uno: 'huevo', varios: 'huevos' },
  { emoji: '🍊', uno: 'mandarina', varios: 'mandarinas' },
  { emoji: '🥔', uno: 'papa', varios: 'papas' },
  { emoji: '🍓', uno: 'fresa', varios: 'fresas' },
  { emoji: '🌽', uno: 'choclo', varios: 'choclos' },
  { emoji: '🥕', uno: 'zanahoria', varios: 'zanahorias' },
  { emoji: '🍌', uno: 'plátano', varios: 'plátanos' },
];
const NOMBRES = ['Teo', 'Lía', 'Mía', 'Kusi', 'Nico', 'Ana', 'Pablo', 'Inti'];
export type Operacion = '+' | '-' | '×' | '÷' | 'contar';

export interface PreguntaSuma {
  /** Texto corto que se muestra grande (por ejemplo «3 + 2»). */
  titulo: string;
  /** Problema de una línea o pregunta; se lee en voz alta. */
  enunciado: string;
  op: Operacion;
  ficha: FichaAlimento;
  /** Fichas visibles: grupos de emojis. En resta, el segundo grupo se muestra tachado. */
  grupos?: number[];
  respuesta: number;
  opciones: number[];
}

/** Tres opciones distintas, sin negativos, con la respuesta incluida. */
function opcionesNumericas(respuesta: number, salto: number): number[] {
  const set = new Set<number>([respuesta]);
  let intentos = 0;
  while (set.size < 3 && intentos++ < 40) {
    const d = (azar(2) ? 1 : -1) * entre(1, salto);
    const v = respuesta + d;
    if (v >= 0) set.add(v);
  }
  while (set.size < 3) set.add(respuesta + set.size + salto);
  return mezclar([...set]);
}

const plural = (n: number, f: FichaAlimento) => `${n} ${n === 1 ? f.uno : f.varios}`;

function problemaLinea(op: '+' | '-' | '×' | '÷', a: number, b: number, f: FichaAlimento): string {
  const q = uno(NOMBRES);
  if (op === '+') return uno([
    `${q} tiene ${plural(a, f)} y le dan ${b} más. ¿Cuántas tiene ahora?`,
    `En la lonchera hay ${plural(a, f)} y mamá pone ${b} más. ¿Cuántas hay?`,
  ]);
  if (op === '-') return uno([
    `${q} tiene ${plural(a, f)} y come ${b}. ¿Cuántas le quedan?`,
    `Había ${plural(a, f)} y ${q} regaló ${b}. ¿Cuántas quedan?`,
  ]);
  if (op === '×') return uno([
    `Cada lonchera tiene ${plural(a, f)}. ¿Cuántas hay en ${b} loncheras?`,
    `${q} arma ${b} platos con ${plural(a, f)} cada uno. ¿Cuántas usa?`,
  ]);
  return uno([
    `${q} reparte ${plural(a, f)} entre ${b} amigos, en partes iguales. ¿Cuántas le toca a cada uno?`,
    `Hay ${plural(a, f)} para ${b} loncheras iguales. ¿Cuántas van en cada una?`,
  ]);
}

/** Genera una pregunta de matemáticas según tramo, nivel (1–20) y ronda (0–7). */
export function generarSuma(tramo: Tramo, nivel: number, ronda: number): PreguntaSuma {
  const f = uno(FICHAS);
  const base = { ficha: f } as const;
  if (tramo === 'a') {
    if (nivel <= 5) {                     // contar fichas
      const n = entre(1, Math.min(10, 2 + nivel));
      return { ...base, op: 'contar', titulo: '¿Cuántas hay?', enunciado: `¿Cuántas ${f.varios} hay?`, grupos: [n], respuesta: n, opciones: opcionesNumericas(n, 2) };
    }
    if (nivel <= 14 || ronda % 2 === 0) { // sumar con fichas visibles hasta 10
      const max = Math.min(10, 4 + Math.floor((nivel - 5) * 0.75));
      const a = entre(1, max - 1), b = entre(1, max - a);
      return { ...base, op: '+', titulo: `${a} + ${b}`, enunciado: `${plural(a, f)} más ${plural(b, f)}. ¿Cuántas hay?`, grupos: [a, b], respuesta: a + b, opciones: opcionesNumericas(a + b, 2) };
    }
    const a = entre(2, 10), b = entre(1, a);  // quitar (resta) con fichas tachadas
    return { ...base, op: '-', titulo: `${a} − ${b}`, enunciado: `Hay ${plural(a, f)} y Andi se come ${b}. ¿Cuántas quedan?`, grupos: [a, b], respuesta: a - b, opciones: opcionesNumericas(a - b, 2) };
  }
  if (tramo === 'b') {
    const max = nivel <= 5 ? 10 + nivel * 2 : nivel <= 10 ? 20 + (nivel - 5) * 6 : nivel <= 15 ? 50 + (nivel - 10) * 10 : 100;
    const resta = nivel > 5 && azar(2) === 0;
    const conProblema = nivel >= 16 && ronda % 2 === 1;
    const salto = max <= 20 ? 2 : max <= 50 ? 5 : 10;
    if (resta) {
      const a = entre(Math.ceil(max / 3), max), b = entre(1, a - 1);
      const r = a - b;
      return { ...base, op: '-', titulo: conProblema ? '¿Cuántas quedan?' : `${a} − ${b}`, enunciado: conProblema ? problemaLinea('-', a, b, f) : `${a} menos ${b}`,
        grupos: a <= 10 ? [a, b] : undefined, respuesta: r, opciones: opcionesNumericas(r, salto) };
    }
    const a = entre(1, max - 1), b = entre(1, max - a);
    return { ...base, op: '+', titulo: conProblema ? '¿Cuántas hay?' : `${a} + ${b}`, enunciado: conProblema ? problemaLinea('+', a, b, f) : `${a} más ${b}`,
      grupos: a + b <= 12 ? [a, b] : undefined, respuesta: a + b, opciones: opcionesNumericas(a + b, salto) };
  }
  // tramo c: multiplicaciones, divisiones y problemas de una línea
  const conProblema = nivel >= 16 || (nivel >= 11 && ronda % 3 === 2);
  const ops: ('×' | '÷' | '+' | '-')[] = nivel <= 10 ? ['×'] : nivel <= 15 ? ['×', '÷'] : ['×', '÷', '+', '-'];
  const op = uno(ops);
  if (op === '×') {
    const tablaMax = nivel <= 5 ? Math.min(10, 2 + nivel) : 10;
    const a = entre(2, tablaMax), b = entre(2, 10);
    return { ...base, op, titulo: conProblema ? '¿Cuántas?' : `${a} × ${b}`, enunciado: conProblema ? problemaLinea('×', a, b, f) : `${a} por ${b}`, respuesta: a * b, opciones: opcionesNumericas(a * b, Math.max(2, a)) };
  }
  if (op === '÷') {
    const b = entre(2, 10), q = entre(2, 10), a = b * q;
    return { ...base, op, titulo: conProblema ? '¿Cuántas a cada uno?' : `${a} ÷ ${b}`, enunciado: conProblema ? problemaLinea('÷', a, b, f) : `${a} entre ${b}`, respuesta: q, opciones: opcionesNumericas(q, 2) };
  }
  if (op === '+') {
    const a = entre(15, 80), b = entre(10, 100 - a > 10 ? 100 - a : 19);
    return { ...base, op, titulo: '¿Cuántas hay?', enunciado: problemaLinea('+', a, b, f), respuesta: a + b, opciones: opcionesNumericas(a + b, 10) };
  }
  const a = entre(20, 100), b = entre(5, a - 1);
  return { ...base, op, titulo: '¿Cuántas quedan?', enunciado: problemaLinea('-', a, b, f), respuesta: a - b, opciones: opcionesNumericas(a - b, 10) };
}

/* =====================================================================
   PALABRAS DE LA LONCHERA
   ===================================================================== */
export interface Palabra { palabra: string; emoji: string; silabas: string[]; frase: string; pista: string }
const P = (palabra: string, emoji: string, silabas: string, frase: string, pista: string): Palabra => ({ palabra, emoji, silabas: silabas.split('-'), frase, pista });
export const PALABRAS: Palabra[] = [
  P('PAN', '🍞', 'PAN', 'Desayuno ___ con huevo.', 'Se hace con harina y se come en el desayuno.'),
  P('AGUA', '💧', 'A-GUA', 'Tomo ___ cuando tengo sed.', 'No tiene sabor y sin ella no se puede vivir.'),
  P('PAPA', '🥔', 'PA-PA', 'En el Perú hay miles de tipos de ___.', 'Crece bajo la tierra y en el Perú hay miles de variedades.'),
  P('SOPA', '🍜', 'SO-PA', 'La ___ está caliente.', 'Se come con cuchara y está calientita.'),
  P('MESA', '🪑', 'ME-SA', 'Almorzamos en la ___.', 'Tiene cuatro patas y no camina.'),
  P('VASO', '🥛', 'VA-SO', 'Lleno el ___ con agua.', 'Allí se sirve el agua para beber.'),
  P('OLLA', '🍲', 'O-LLA', 'Mamá cocina la sopa en la ___.', 'Se pone al fuego para cocinar.'),
  P('HUEVO', '🥚', 'HUE-VO', 'Mamá puso un ___ sancochado en mi lonchera.', 'Lo pone la gallina y tiene cáscara.'),
  P('PALTA', '🥑', 'PAL-TA', 'Me gusta el pan con ___.', 'Verde por fuera, cremosa por dentro y con una pepa grande.'),
  P('FRESA', '🍓', 'FRE-SA', 'La ___ es roja y dulce.', 'Fruta roja con puntitos y hojitas verdes.'),
  P('MANGO', '🥭', 'MAN-GO', 'El ___ es dulce y jugoso.', 'Fruta dulce, naranja por dentro, con una pepa plana.'),
  P('LIMÓN', '🍋', 'LI-MÓN', 'El ___ ayuda a aprovechar el hierro.', 'Es verde o amarillo y muy ácido.'),
  P('LECHE', '🥛', 'LE-CHE', 'Tomo ___ en el desayuno.', 'Es blanca y la da la vaca.'),
  P('QUESO', '🧀', 'QUE-SO', 'El ___ se hace con leche.', 'Se hace con leche y a los ratones les encanta.'),
  P('POLLO', '🍗', 'PO-LLO', 'El ___ tiene hierro.', 'Ave de corral que va con arroz.'),
  P('ARROZ', '🍚', 'A-RROZ', 'Comemos ___ con pollo.', 'Granitos blancos que acompañan casi todo.'),
  P('PLATO', '🍽️', 'PLA-TO', 'Sirvo el almuerzo en el ___.', 'Es redondo y allí se sirve la comida.'),
  P('LÁPIZ', '✏️', 'LÁ-PIZ', 'Dibujo con el ___.', 'Tiene punta, escribe y se borra.'),
  P('LIBRO', '📚', 'LI-BRO', 'Leo un ___ de animales.', 'Tiene muchas páginas y cuenta historias.'),
  P('FRUTA', '🍎', 'FRU-TA', 'Como una ___ cada día.', 'Es dulce, crece en los árboles y es sana.'),
  P('QUINUA', '🌾', 'QUI-NUA', 'La ___ crece en los Andes.', 'Grano pequeño de los Andes que da mucha energía.'),
  P('CHOCLO', '🌽', 'CHO-CLO', 'El ___ es maíz tierno.', 'Maíz tierno, amarillo, con granos grandes.'),
  P('CAMOTE', '🍠', 'CA-MO-TE', 'El ___ es dulce y anaranjado.', 'Crece bajo tierra, es dulce y anaranjado.'),
  P('HIERRO', '💪', 'HIE-RRO', 'El ___ te hace fuerte.', 'Mineral que está en la sangre y te da fuerza.'),
  P('RECREO', '⚽', 'RE-CRE-O', 'En el ___ juego y como mi lonchera.', 'Momento del colegio para jugar y comer.'),
  P('COCINA', '🍳', 'CO-CI-NA', 'En la ___ preparamos el almuerzo.', 'Cuarto de la casa donde se prepara la comida.'),
  P('PESCADO', '🐟', 'PES-CA-DO', 'El ___ tiene hierro y ayuda a crecer.', 'Vive en el mar y nada con aletas.'),
  P('NARANJA', '🍊', 'NA-RAN-JA', 'La ___ tiene vitamina C.', 'Fruta redonda del color de su nombre.'),
  P('PLÁTANO', '🍌', 'PLÁ-TA-NO', 'El ___ da energía para jugar.', 'Fruta amarilla y alargada que se pela.'),
  P('CUCHARA', '🥄', 'CU-CHA-RA', 'Como la sopa con la ___.', 'Sirve para tomar la sopa.'),
  P('TENEDOR', '🍴', 'TE-NE-DOR', 'Pincho la carne con el ___.', 'Tiene dientes pero no muerde.'),
  P('MOCHILA', '🎒', 'MO-CHI-LA', 'Llevo los cuadernos en la ___.', 'Se carga en la espalda con los útiles.'),
  P('COLEGIO', '🏫', 'CO-LE-GIO', 'Voy al ___ por la mañana.', 'Lugar donde aprendes con tus amigos y profesores.'),
  P('LONCHERA', '🧺', 'LON-CHE-RA', 'Guardo mi comida en la ___.', 'Caja donde llevo la comida al colegio.'),
  P('LENTEJAS', '🫘', 'LEN-TE-JAS', 'Las ___ tienen mucho hierro.', 'Pequeñas, redondas y marrones; dan hierro.'),
  P('ESPINACA', '🥬', 'ES-PI-NA-CA', 'La ___ tiene hierro.', 'Hoja verde con hierro que comía un marinero fuerte.'),
  P('CUADERNO', '📒', 'CUA-DER-NO', 'Escribo en mi ___.', 'Tiene hojas para escribir y una pasta.'),
  P('MANDARINA', '🍊', 'MAN-DA-RI-NA', 'Pelé una ___ jugosa en el recreo.', 'Es naranja, pequeña y se pela con los dedos.'),
  P('ZANAHORIA', '🥕', 'ZA-NA-HO-RIA', 'La ___ es buena para los ojos.', 'Naranja, larga y le gusta a los conejos.'),
  P('PROFESORA', '👩‍🏫', 'PRO-FE-SO-RA', 'La ___ nos enseña a leer.', 'Enseña en el salón de clase.'),
  P('SANGRECITA', '🍲', 'SAN-GRE-CI-TA', 'La ___ tiene muchísimo hierro.', 'Plato peruano con muchísimo hierro.'),
];
const VOCALES = ['A', 'E', 'I', 'O', 'U'];
const CONSONANTES = 'BCDFGHJLMNPQRSTVZ'.split('');
const esVocal = (c: string) => 'AEIOUÁÉÍÓÚ'.includes(c);

/** Palabras disponibles por nivel: cortas primero, largas al final. */
function palabrasDeNivel(nivel: number): Palabra[] {
  const maxLetras = nivel <= 7 ? 5 : nivel <= 14 ? 7 : 99;
  const minLetras = nivel <= 7 ? 0 : nivel <= 14 ? 5 : 7;
  const lista = PALABRAS.filter(p => p.palabra.length <= maxLetras && p.palabra.length >= minLetras);
  return lista.length >= 6 ? lista : PALABRAS;
}

export interface RondaLetra { tipo: 'letra'; palabra: Palabra; mostrada: string; indice: number; respuesta: string; opciones: string[] }
export interface RondaSilabas { tipo: 'silabas'; palabra: Palabra; fichas: { k: number; texto: string }[]; orden: string[] }
export interface RondaFrase { tipo: 'frase' | 'adivinanza'; palabra: Palabra; texto: string; opciones: string[]; respuesta: string }
export type RondaPalabra = RondaLetra | RondaSilabas | RondaFrase;

/** 4–6: tocar la letra que falta. Hasta el nivel 10 falta una vocal; después, cualquier letra. */
export function generarLetra(nivel: number, evitar: string[] = []): RondaLetra {
  const palabra = uno(palabrasDeNivel(nivel).filter(p => !evitar.includes(p.palabra))) || uno(PALABRAS);
  const letras = palabra.palabra.split('');
  const candidatos = letras.map((c, i) => i).filter(i => (nivel <= 10 ? esVocal(letras[i]) : true));
  const indice = uno(candidatos.length ? candidatos : letras.map((_, i) => i));
  const respuesta = letras[indice];
  const pool = (esVocal(respuesta) ? VOCALES : CONSONANTES).filter(c => c !== respuesta && c !== respuesta.normalize('NFD')[0]);
  const opciones = mezclar([respuesta, ...mezclar(pool).slice(0, 2)]);
  return { tipo: 'letra', palabra, mostrada: letras.map((c, i) => (i === indice ? '_' : c)).join(''), indice, respuesta, opciones };
}

/** 7–9: ordenar las sílabas. Desde el nivel 11 aparece una sílaba intrusa. */
export function generarSilabas(nivel: number, evitar: string[] = []): RondaSilabas {
  const lista = palabrasDeNivel(nivel).filter(p => p.silabas.length >= 2 && !evitar.includes(p.palabra));
  const palabra = uno(lista.length ? lista : PALABRAS.filter(p => p.silabas.length >= 2));
  const extra = nivel >= 11 ? [uno(uno(PALABRAS.filter(p => p !== palabra)).silabas)] : [];
  const fichas = mezclar([...palabra.silabas, ...extra.filter(s => !palabra.silabas.includes(s))]).map((texto, k) => ({ k, texto }));
  return { tipo: 'silabas', palabra, fichas, orden: palabra.silabas };
}

/** 10–11: completar la frase o resolver una adivinanza, con 3 palabras para elegir. */
export function generarFrase(nivel: number, ronda: number, evitar: string[] = []): RondaFrase {
  const adivinanza = nivel >= 6 && (nivel >= 15 || ronda % 2 === 1);
  const lista = palabrasDeNivel(nivel).filter(p => !evitar.includes(p.palabra));
  const palabra = uno(lista.length ? lista : PALABRAS);
  const otras = mezclar(PALABRAS.filter(p => p.palabra !== palabra.palabra && (nivel < 10 || Math.abs(p.palabra.length - palabra.palabra.length) <= 2))).slice(0, 2);
  const bonito = (s: string) => s.charAt(0) + s.slice(1).toLowerCase();
  return { tipo: adivinanza ? 'adivinanza' : 'frase', palabra, texto: adivinanza ? palabra.pista : palabra.frase, respuesta: bonito(palabra.palabra), opciones: mezclar([palabra, ...otras].map(p => bonito(p.palabra))) };
}

/* =====================================================================
   INGLÉS DE LONCHERA
   ===================================================================== */
export interface ParIngles { es: string; en: string; emoji: string }
const I = (es: string, en: string, emoji: string): ParIngles => ({ es, en, emoji });
export const PARES_INGLES: ParIngles[] = [
  I('huevo', 'egg', '🥚'), I('taza', 'cup', '☕'), I('pan', 'bread', '🍞'), I('leche', 'milk', '🥛'), I('arroz', 'rice', '🍚'),
  I('pescado', 'fish', '🐟'), I('sopa', 'soup', '🍜'), I('jugo', 'juice', '🧃'), I('manzana', 'apple', '🍎'), I('agua', 'water', '💧'),
  I('limón', 'lemon', '🍋'), I('mango', 'mango', '🥭'), I('plato', 'plate', '🍽️'), I('libro', 'book', '📚'), I('cuchara', 'spoon', '🥄'),
  I('tenedor', 'fork', '🍴'), I('maíz', 'corn', '🌽'), I('uvas', 'grapes', '🍇'), I('frejoles', 'beans', '🫘'), I('queso', 'cheese', '🧀'),
  I('plátano', 'banana', '🍌'), I('naranja', 'orange', '🍊'), I('tomate', 'tomato', '🍅'), I('papa', 'potato', '🥔'), I('zanahoria', 'carrot', '🥕'),
  I('pollo', 'chicken', '🍗'), I('botella', 'bottle', '🍶'), I('lápiz', 'pencil', '✏️'), I('colegio', 'school', '🏫'), I('tazón', 'bowl', '🥣'),
  I('palta', 'avocado', '🥑'), I('ensalada', 'salad', '🥗'), I('mochila', 'backpack', '🎒'), I('lonchera', 'lunchbox', '🧺'), I('fresa', 'strawberry', '🍓'),
  I('sandía', 'watermelon', '🍉'), I('profesora', 'teacher', '👩‍🏫'), I('cuchillo', 'knife', '🔪'), I('galleta', 'cookie', '🍪'), I('ventana', 'window', '🪟'),
];
function paresDeNivel(nivel: number): ParIngles[] {
  const max = nivel <= 7 ? 5 : nivel <= 14 ? 7 : 99, min = nivel <= 7 ? 0 : nivel <= 14 ? 4 : 6;
  const lista = PARES_INGLES.filter(p => p.en.length <= max && p.en.length >= min);
  return lista.length >= 8 ? lista : PARES_INGLES;
}

export interface RondaElegir { tipo: 'elegir'; par: ParIngles; opciones: string[] }
export interface RondaEmparejar { tipo: 'emparejar'; pares: ParIngles[]; izquierda: ParIngles[]; derecha: ParIngles[] }
export interface RondaEscribir { tipo: 'escribir'; par: ParIngles; teclas: { k: number; letra: string }[]; pista: string }

/** 4–6: ver el emoji y tocar la palabra en inglés entre 3. */
export function generarElegir(nivel: number, evitar: string[] = []): RondaElegir {
  const lista = paresDeNivel(nivel).filter(p => !evitar.includes(p.en));
  const par = uno(lista.length ? lista : PARES_INGLES);
  const otras = mezclar(PARES_INGLES.filter(p => p.en !== par.en)).slice(0, 2).map(p => p.en);
  return { tipo: 'elegir', par, opciones: mezclar([par.en, ...otras]) };
}

/** 7–9: emparejar 3 pares (hasta el nivel 5) o 4 pares. */
export function generarEmparejar(nivel: number): RondaEmparejar {
  const n = nivel <= 5 ? 3 : 4;
  const pares = mezclar(paresDeNivel(nivel)).slice(0, n);
  return { tipo: 'emparejar', pares, izquierda: mezclar(pares), derecha: mezclar(pares) };
}

/** 10–11: escribir la palabra con un teclado de letras (las de la palabra más algunas intrusas). */
export function generarEscribir(nivel: number, evitar: string[] = []): RondaEscribir {
  const lista = paresDeNivel(nivel).filter(p => !evitar.includes(p.en));
  const par = uno(lista.length ? lista : PARES_INGLES);
  const intrusas = nivel <= 6 ? 2 : nivel <= 13 ? 4 : 6;
  const abc = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(c => !par.en.includes(c));
  const teclas = mezclar([...par.en.split(''), ...mezclar(abc).slice(0, intrusas)]).map((letra, k) => ({ k, letra }));
  return { tipo: 'escribir', par, teclas, pista: nivel <= 10 ? par.en[0] : '' };
}
