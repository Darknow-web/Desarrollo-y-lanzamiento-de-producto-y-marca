// Alimentos con hierro para el semáforo. Valores aproximados por porción infantil,
// calculados con las Tablas Peruanas de Composición de Alimentos (CENAN-INS, 2017) y USDA.
export interface Alimento { id: string; nombre: string; porcion: string; mg: number; hemo: boolean; emoji: string }

export const ALIMENTOS: Alimento[] = [
  { id: 'sangrecita', nombre: 'Sangrecita', porcion: '2 cucharadas (30 g)', mg: 8.9, hemo: true, emoji: '🍲' },
  { id: 'bazo', nombre: 'Bazo de res', porcion: '2 cucharadas (30 g)', mg: 8.6, hemo: true, emoji: '🥘' },
  { id: 'higado', nombre: 'Hígado de pollo', porcion: '2 cucharadas (30 g)', mg: 2.6, hemo: true, emoji: '🍳' },
  { id: 'res', nombre: 'Carne de res', porcion: '1 trozo chico (50 g)', mg: 1.3, hemo: true, emoji: '🥩' },
  { id: 'pescado', nombre: 'Pescado (bonito, jurel)', porcion: '1 trozo chico (50 g)', mg: 0.8, hemo: true, emoji: '🐟' },
  { id: 'pollo', nombre: 'Pollo', porcion: '1 presa chica (50 g)', mg: 0.5, hemo: true, emoji: '🍗' },
  { id: 'lentejas', nombre: 'Lentejas', porcion: '½ taza cocidas (80 g)', mg: 2.6, hemo: false, emoji: '🫘' },
  { id: 'frejoles', nombre: 'Frejoles o pallares', porcion: '½ taza cocidos (80 g)', mg: 1.8, hemo: false, emoji: '🫘' },
  { id: 'espinaca', nombre: 'Espinaca', porcion: '½ taza cocida (80 g)', mg: 2.9, hemo: false, emoji: '🥬' },
  { id: 'quinua', nombre: 'Quinua', porcion: '½ taza cocida (90 g)', mg: 1.3, hemo: false, emoji: '🌾' },
  { id: 'canihua', nombre: 'Cañihua', porcion: '2 cucharadas de harina (20 g)', mg: 2.4, hemo: false, emoji: '🌾' },
  { id: 'huevo', nombre: 'Huevo', porcion: '1 unidad', mg: 0.9, hemo: false, emoji: '🥚' },
];

export const ANDIBITE_ID = 'andibite';
export const HIERRO_ANDIBITE_REF = 1.9; // mg por unidad cuando no se conoce el lote

export const FRUTAS_VITC = ['Mandarina', 'Naranja en gajos', 'Fresas', 'Kiwi', 'Aguaymanto', 'Mango en cubos', 'Piña en trozos', 'Granadilla'];

export const CONSEJOS = [
  'Acompaña el hierro con una fruta con vitamina C: se aprovecha mejor.',
  'Evita el té, el café o la leche junto a la comida con hierro: hacen que se aproveche menos.',
  'El hierro de la sangrecita, el bazo, el hígado y las carnes es el que mejor se absorbe.',
  'Las menestras y la quinua también suman hierro; combínalas con limón o tomate.',
];
