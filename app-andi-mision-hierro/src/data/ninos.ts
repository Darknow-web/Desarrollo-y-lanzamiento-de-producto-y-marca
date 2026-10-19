// Contenido educativo del modo niños. No muestra productos ni precios (Ley 30021, art. 8).

/* ---------- Memoria andina ---------- */
export interface Carta { id: string; nombre: string; emoji: string; dato: string }
export const CARTAS: Carta[] = [
  { id: 'quinua', nombre: 'Quinua', emoji: '🌾', dato: 'La quinua crece en los Andes y te da energía.' },
  { id: 'papa', nombre: 'Papa', emoji: '🥔', dato: 'En el Perú hay miles de tipos de papa.' },
  { id: 'maiz', nombre: 'Maíz', emoji: '🌽', dato: 'Con maíz morado se hace la chicha morada.' },
  { id: 'frejol', nombre: 'Frejol', emoji: '🫘', dato: 'Los frejoles tienen hierro y fibra.' },
  { id: 'pescado', nombre: 'Pescado', emoji: '🐟', dato: 'El pescado tiene hierro y te ayuda a crecer.' },
  { id: 'palta', nombre: 'Palta', emoji: '🥑', dato: 'La palta tiene grasa buena para tu cerebro.' },
  { id: 'naranja', nombre: 'Naranja', emoji: '🍊', dato: 'La naranja tiene vitamina C.' },
  { id: 'platano', nombre: 'Plátano', emoji: '🍌', dato: 'El plátano te da energía para jugar.' },
  { id: 'huevo', nombre: 'Huevo', emoji: '🥚', dato: 'El huevo te ayuda a crecer fuerte.' },
  { id: 'mango', nombre: 'Mango', emoji: '🥭', dato: 'El mango es dulce y tiene vitamina C.' },
  { id: 'fresa', nombre: 'Fresa', emoji: '🍓', dato: 'Las fresas tienen mucha vitamina C.' },
  { id: 'limon', nombre: 'Limón', emoji: '🍋', dato: 'El limón ayuda a aprovechar el hierro.' },
];

/* ---------- Atrapa el hierro ---------- */
export interface Cae { id: string; nombre: string; emoji: string; tipo: 'hierro' | 'trampa'; puntos: number }
export const CAEN: Cae[] = [
  { id: 'lentejas', nombre: 'Lentejas', emoji: '🫘', tipo: 'hierro', puntos: 1 },
  { id: 'sangrecita', nombre: 'Sangrecita', emoji: '🍲', tipo: 'hierro', puntos: 2 },
  { id: 'espinaca', nombre: 'Espinaca', emoji: '🥬', tipo: 'hierro', puntos: 1 },
  { id: 'quinua-plato', nombre: 'Quinua', emoji: '🥣', tipo: 'hierro', puntos: 2 },
  { id: 'huevo', nombre: 'Huevo', emoji: '🥚', tipo: 'hierro', puntos: 1 },
  { id: 'pollo', nombre: 'Pollo', emoji: '🍗', tipo: 'hierro', puntos: 1 },
  { id: 'gaseosa', nombre: 'Gaseosa', emoji: '🥤', tipo: 'trampa', puntos: 0 },
  { id: 'caramelo', nombre: 'Caramelo', emoji: '🍬', tipo: 'trampa', puntos: 0 },
];

/* ---------- Lonchera exprés ---------- */
export interface Opcion { id: string; nombre: string; emoji: string; tipo: 'principal' | 'fruta' | 'bebida'; bien: boolean }
export const OPCIONES_LONCHERA: Opcion[] = [
  { id: 'huevo', nombre: 'Huevo', emoji: '🥚', tipo: 'principal', bien: true },
  { id: 'pan-pollo', nombre: 'Pan con pollo', emoji: '🥪', tipo: 'principal', bien: true },
  { id: 'lentejas', nombre: 'Lentejas', emoji: '🫘', tipo: 'principal', bien: true },
  { id: 'quinua', nombre: 'Quinua', emoji: '🌾', tipo: 'principal', bien: true },
  { id: 'galletas', nombre: 'Galletas', emoji: '🍪', tipo: 'principal', bien: false },
  { id: 'papitas', nombre: 'Papitas', emoji: '🍟', tipo: 'principal', bien: false },
  { id: 'chizitos', nombre: 'Snack de queso', emoji: '🧀', tipo: 'principal', bien: false },
  { id: 'naranja', nombre: 'Naranja', emoji: '🍊', tipo: 'fruta', bien: true },
  { id: 'fresas', nombre: 'Fresas', emoji: '🍓', tipo: 'fruta', bien: true },
  { id: 'mandarina', nombre: 'Mandarina', emoji: '🍊', tipo: 'fruta', bien: true },
  { id: 'kiwi', nombre: 'Kiwi', emoji: '🥝', tipo: 'fruta', bien: true },
  { id: 'caramelo', nombre: 'Caramelo', emoji: '🍬', tipo: 'fruta', bien: false },
  { id: 'chupetin', nombre: 'Chupetín', emoji: '🍭', tipo: 'fruta', bien: false },
  { id: 'donut', nombre: 'Dona', emoji: '🍩', tipo: 'fruta', bien: false },
  { id: 'agua', nombre: 'Agua', emoji: '💧', tipo: 'bebida', bien: true },
  { id: 'limonada', nombre: 'Limonada sin azúcar', emoji: '🍋', tipo: 'bebida', bien: true },
  { id: 'emoliente', nombre: 'Emoliente', emoji: '🍵', tipo: 'bebida', bien: true },
  { id: 'gaseosa', nombre: 'Gaseosa', emoji: '🥤', tipo: 'bebida', bien: false },
  { id: 'jugo-caja', nombre: 'Jugo de caja', emoji: '🧃', tipo: 'bebida', bien: false },
];

/* ---------- Paradas del mapa ---------- */
export type Juego = 'atrapa' | 'lonchera' | 'memoria' | 'vestir' | 'sumas' | 'palabras' | 'ingles';
export interface Parada { id: Juego; juego: string; emoji: string; color: string; niveles: number }
/** Niveles máximos por juego (Memoria: 4, 6, 8, 10 y 12 parejas). */
export const NIVELES_MAX: Record<Juego, number> = { atrapa: 10, lonchera: 10, memoria: 5, vestir: 0, sumas: 20, palabras: 20, ingles: 20 };
export const PARADAS: Parada[] = [
  { id: 'atrapa', juego: 'Atrapa el hierro', emoji: '🧺', color: '#BA4036', niveles: 10 },
  { id: 'lonchera', juego: 'Lonchera exprés', emoji: '⏰', color: '#7C8A3A', niveles: 10 },
  { id: 'memoria', juego: 'Memoria', emoji: '🃏', color: '#E3A33B', niveles: 5 },
  { id: 'vestir', juego: 'Viste a Andi', emoji: '🎩', color: '#6B3A2A', niveles: 0 },
  { id: 'sumas', juego: 'Suma de hierro', emoji: '🔢', color: '#3E7C8A', niveles: 20 },
  { id: 'palabras', juego: 'Palabras de la lonchera', emoji: '🔤', color: '#8A5A3E', niveles: 20 },
  { id: 'ingles', juego: 'Inglés de lonchera', emoji: '🗣️', color: '#5A6B8A', niveles: 20 },
];

/* ---------- Viste a Andi: looks y fondos (se pagan solo con estrellas ganadas jugando) ---------- */
export type Look = 'explorador' | 'chef' | 'astronauta' | 'deportista' | 'pijama' | 'fiesta';
/** `nivel`: niveles totales avanzados (suma de todos los juegos) con los que el look se regala sin gastar estrellas. */
export interface LookInfo { id: Look; nombre: string; emoji: string; estrellas: number; nivel: number }
export const LOOKS: LookInfo[] = [
  { id: 'explorador', nombre: 'Exploradora', emoji: '🧭', estrellas: 2, nivel: 3 },
  { id: 'chef', nombre: 'Chef', emoji: '👨‍🍳', estrellas: 3, nivel: 8 },
  { id: 'astronauta', nombre: 'Astronauta', emoji: '🚀', estrellas: 4, nivel: 15 },
  { id: 'deportista', nombre: 'Deportista', emoji: '⚽', estrellas: 5, nivel: 25 },
  { id: 'pijama', nombre: 'Pijama', emoji: '🌙', estrellas: 6, nivel: 40 },
  { id: 'fiesta', nombre: 'Fiesta', emoji: '🎉', estrellas: 8, nivel: 60 },
];
export type Fondo = 'lima' | 'selva' | 'andes' | 'playa';
export const FONDOS: { id: Fondo; nombre: string; emoji: string }[] = [
  { id: 'lima', nombre: 'Lima', emoji: '🏙️' },
  { id: 'selva', nombre: 'Selva', emoji: '🌴' },
  { id: 'andes', nombre: 'Andes', emoji: '🏔️' },
  { id: 'playa', nombre: 'Playa', emoji: '🏖️' },
];

/** @deprecated El traje por piezas fue reemplazado por los looks. Se conserva vacío por compatibilidad. */
export type Pieza = 'chullo' | 'poncho' | 'mochila' | 'medalla';
export const PIEZAS: { id: Pieza; nombre: string; estrellas: number }[] = [];
export const piezasDe = (_estrellas: number): Pieza[] => [];
