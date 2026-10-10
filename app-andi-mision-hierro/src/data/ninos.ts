// Contenido educativo del modo niños. No muestra productos ni precios (Ley 30021, art. 8).
export interface Comida { id: string; nombre: string; emoji: string; tipo: 'hierro' | 'vitc' | 'dulce' }

export const COMIDAS_PLATO: Comida[] = [
  { id: 'sangrecita', nombre: 'Sangrecita', emoji: '🍲', tipo: 'hierro' },
  { id: 'lentejas', nombre: 'Lentejas', emoji: '🫘', tipo: 'hierro' },
  { id: 'huevo', nombre: 'Huevo', emoji: '🥚', tipo: 'hierro' },
  { id: 'carne', nombre: 'Carne', emoji: '🥩', tipo: 'hierro' },
  { id: 'pescado', nombre: 'Pescado', emoji: '🐟', tipo: 'hierro' },
  { id: 'espinaca', nombre: 'Espinaca', emoji: '🥬', tipo: 'hierro' },
  { id: 'quinua', nombre: 'Quinua', emoji: '🌾', tipo: 'hierro' },
  { id: 'naranja', nombre: 'Naranja', emoji: '🍊', tipo: 'vitc' },
  { id: 'fresa', nombre: 'Fresa', emoji: '🍓', tipo: 'vitc' },
  { id: 'kiwi', nombre: 'Kiwi', emoji: '🥝', tipo: 'vitc' },
  { id: 'limon', nombre: 'Limón', emoji: '🍋', tipo: 'vitc' },
  { id: 'tomate', nombre: 'Tomate', emoji: '🍅', tipo: 'vitc' },
  { id: 'pimiento', nombre: 'Pimiento', emoji: '🫑', tipo: 'vitc' },
  { id: 'gaseosa', nombre: 'Gaseosa', emoji: '🥤', tipo: 'dulce' },
  { id: 'caramelo', nombre: 'Caramelos', emoji: '🍬', tipo: 'dulce' },
  { id: 'papitas', nombre: 'Papitas', emoji: '🍟', tipo: 'dulce' },
];

export interface Carta { id: string; nombre: string; emoji: string; dato: string }
export const CARTAS: Carta[] = [
  { id: 'quinua', nombre: 'Quinua', emoji: '🌾', dato: 'La quinua crece en los Andes y te da energía.' },
  { id: 'papa', nombre: 'Papa', emoji: '🥔', dato: 'En el Perú hay miles de tipos de papa.' },
  { id: 'maiz', nombre: 'Maíz', emoji: '🌽', dato: 'Con maíz morado se hace la chicha morada.' },
  { id: 'frejol', nombre: 'Frejol', emoji: '🫘', dato: 'Los frejoles tienen hierro y fibra.' },
  { id: 'pescado', nombre: 'Pescado', emoji: '🐟', dato: 'El mar peruano tiene muchos peces ricos.' },
  { id: 'palta', nombre: 'Palta', emoji: '🥑', dato: 'La palta tiene grasa buena para tu cerebro.' },
  { id: 'naranja', nombre: 'Naranja', emoji: '🍊', dato: 'La naranja tiene vitamina C.' },
  { id: 'platano', nombre: 'Plátano', emoji: '🍌', dato: 'El plátano te da energía para jugar.' },
  { id: 'huevo', nombre: 'Huevo', emoji: '🥚', dato: 'El huevo te ayuda a crecer fuerte.' },
  { id: 'mango', nombre: 'Mango', emoji: '🥭', dato: 'El mango es dulce y tiene vitamina C.' },
  { id: 'fresa', nombre: 'Fresa', emoji: '🍓', dato: 'Las fresas tienen mucha vitamina C.' },
  { id: 'limon', nombre: 'Limón', emoji: '🍋', dato: 'El limón ayuda a aprovechar el hierro.' },
];

export interface Frase { texto: string; verdad: boolean; porque: string }
export const FRASES: Frase[] = [
  { texto: 'La sangrecita tiene mucho hierro.', verdad: true, porque: '¡Sí! Es de las comidas con más hierro.' },
  { texto: 'La espinaca tiene más hierro que la sangrecita.', verdad: false, porque: 'La sangrecita tiene mucho más, y tu cuerpo lo aprovecha mejor.' },
  { texto: 'Comer fruta con la comida ayuda a aprovechar el hierro.', verdad: true, porque: 'La vitamina C de la fruta es la amiga del hierro.' },
  { texto: 'La gaseosa te da fuerza.', verdad: false, porque: 'La gaseosa tiene mucha azúcar. El agua es mejor.' },
  { texto: 'Las lentejas tienen hierro.', verdad: true, porque: '¡Sí! Y con limón o tomate se aprovecha mejor.' },
  { texto: 'Tomar té con la comida ayuda al hierro.', verdad: false, porque: 'El té hace que aproveches menos hierro. Mejor agua.' },
  { texto: 'La quinua y la cañihua son granos de los Andes.', verdad: true, porque: 'Crecen en las alturas, ¡como yo!' },
  { texto: 'Lavarse las manos antes de comer nos cuida.', verdad: true, porque: 'Así se van los microbios.' },
  { texto: 'Dormir poco no importa.', verdad: false, porque: 'Dormir bien te ayuda a crecer y a aprender.' },
  { texto: 'El hierro lleva oxígeno por todo tu cuerpo.', verdad: true, porque: 'Por eso te ayuda a jugar y a pensar.' },
  { texto: 'Solo los adultos necesitan hierro.', verdad: false, porque: '¡Los niños también lo necesitan para crecer!' },
  { texto: 'El camu camu tiene mucha vitamina C.', verdad: true, porque: 'Es una fruta de la Amazonía con muchísima vitamina C.' },
];

export interface Habito { id: string; nombre: string; emoji: string }
export const HABITOS: Habito[] = [
  { id: 'agua', nombre: 'Tomé agua', emoji: '💧' },
  { id: 'manos', nombre: 'Me lavé las manos', emoji: '🧼' },
  { id: 'fruta', nombre: 'Comí fruta', emoji: '🍊' },
  { id: 'plato', nombre: 'Comí mi plato fuerte', emoji: '🍲' },
  { id: 'juego', nombre: 'Me moví y jugué', emoji: '⚽' },
  { id: 'dormir', nombre: 'Dormí temprano', emoji: '😴' },
];

export interface Parada { id: 'plato' | 'memoria' | 'mito' | 'habitos'; lugar: string; juego: string; emoji: string; color: string }
export const PARADAS: Parada[] = [
  { id: 'plato', lugar: 'Cusco', juego: 'Arma tu plato fuerte', emoji: '🍽️', color: '#FF7A59' },
  { id: 'memoria', lugar: 'Lago Titicaca', juego: 'Memoria andina', emoji: '🃏', color: '#3BA7E0' },
  { id: 'mito', lugar: 'Volcán Misti', juego: '¿Verdad o mito?', emoji: '🤔', color: '#8E5BD8' },
  { id: 'habitos', lugar: 'Amazonía', juego: 'Ruta de hábitos', emoji: '🌿', color: '#2FA36B' },
];

/** Piezas del traje de explorador de Andi: se ganan con estrellas, jugando (nunca comprando). */
export const PIEZAS = [
  { id: 'chullo', nombre: 'Chullo', estrellas: 1 },
  { id: 'poncho', nombre: 'Poncho', estrellas: 3 },
  { id: 'mochila', nombre: 'Mochila', estrellas: 5 },
  { id: 'medalla', nombre: 'Medalla de explorador', estrellas: 8 },
] as const;
export type Pieza = typeof PIEZAS[number]['id'];
export const piezasDe = (estrellas: number) => PIEZAS.filter(p => estrellas >= p.estrellas).map(p => p.id) as Pieza[];
