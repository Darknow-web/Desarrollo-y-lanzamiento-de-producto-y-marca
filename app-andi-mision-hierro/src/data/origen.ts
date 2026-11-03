// De dónde viene cada ingrediente del brownie («Hecho con lo nuestro»). Solo origen y datos del campo: nada de propiedades de salud.
// Coordenadas: longitud y latitud reales; el mapa las proyecta.
import type { Sabor } from '../lib/tipos';

export interface Origen {
  id: string;
  nombre: string;
  emoji: string;
  region: string;
  lugar: string;
  dato: string;
  fuente: string;
  sabores: Sabor[] | 'todos';
  /** Episodio de «Las historias de Andi» que lo cuenta (modo niños). */
  historia?: number;
  lon?: number;
  lat?: number;
  color: string;
}

export const ORIGENES: Origen[] = [
  { id: 'sangrecita', nombre: 'Sangrecita de res', emoji: '🥩', region: 'Lima', lugar: 'Camales de Lima, liofilizada en planta', dato: 'Es el ingrediente que da el hierro. La compramos ya en polvo, a un proveedor con registro sanitario; la planta solo la hidrata.', fuente: 'Ficha del lote', sabores: 'todos', historia: 1, lon: -76.95, lat: -12.05, color: '#BA4036' },
  { id: 'cacao', nombre: 'Cacao', emoji: '🍫', region: 'San Martín', lugar: 'Selva de San Martín', dato: 'San Martín es la primera región productora de cacao del Perú, seguida de Junín y Ucayali.', fuente: 'MIDAGRI, 2022', sabores: 'todos', historia: 4, lon: -76.4, lat: -6.5, color: '#6B3A2A' },
  { id: 'lucuma', nombre: 'Lúcuma', emoji: '🍈', region: 'Lima', lugar: 'Valles de Huaral y Cañete', dato: 'Lima produce unas dos de cada tres lúcumas del país: 7,804 de 12,215 toneladas en 2020.', fuente: 'MIDAGRI, 2020', sabores: ['Lúcu'], historia: 2, lon: -77.2, lat: -11.5, color: '#E3A33B' },
  { id: 'canihua', nombre: 'Cañihua', emoji: '🌾', region: 'Puno', lugar: 'Altiplano, a más de 3,800 metros', dato: 'Puno cosecha el 95 % de la cañihua del Perú. Es un grano andino que crece donde casi nada más crece.', fuente: 'MINAGRI, 2018', sabores: ['Andi'], historia: 3, lon: -70.0, lat: -15.8, color: '#7C8A3A' },
  { id: 'platano', nombre: 'Plátano', emoji: '🍌', region: 'Piura', lugar: 'Costa norte y selva', dato: 'Piura, San Martín y Ucayali son las regiones plataneras del Perú. El de Piura se exporta como orgánico.', fuente: 'MIDAGRI', sabores: ['Andi'], historia: 5, lon: -80.6, lat: -5.2, color: '#3E7C8A' },
  { id: 'canela', nombre: 'Canela', emoji: '🌿', region: 'Importada', lugar: 'Sri Lanka e Indonesia', dato: 'La canela no se cultiva en el Perú: es el único ingrediente que viene de fuera. Lo decimos tal cual.', fuente: 'Ficha del lote', sabores: ['Andi'], color: '#8A6A55' },
];

/** Proyección simple de longitud y latitud al cuadro del mapa (viewBox 0 0 240 340). */
export const proyectar = (lon: number, lat: number) => ({ x: (lon + 81.6) * 18, y: (-lat + 0.3) * 18 });

/** Silueta estilizada del Perú (longitud, latitud), de norte a sur por la costa y de regreso por la frontera oriental. */
export const SILUETA_PERU: [number, number][] = [
  [-80.3, -3.4], [-81.0, -4.3], [-81.3, -5.9], [-80.9, -6.9], [-79.9, -7.5], [-78.6, -9.0], [-77.6, -11.0], [-77.1, -12.1], [-76.2, -13.4], [-75.1, -15.4],
  [-73.7, -16.3], [-71.4, -17.5], [-70.4, -18.3], [-69.8, -17.6], [-69.4, -16.4], [-69.0, -15.0], [-68.7, -12.5], [-69.6, -11.0], [-70.6, -9.5], [-72.4, -9.4],
  [-73.0, -8.0], [-73.8, -7.3], [-74.0, -5.5], [-72.7, -5.1], [-69.9, -4.2], [-70.5, -2.5], [-71.8, -2.1], [-73.5, -1.5], [-75.3, -0.1], [-76.6, -2.4],
  [-78.2, -3.4], [-79.5, -4.4],
];
