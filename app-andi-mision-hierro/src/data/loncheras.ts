// Recetario propio de loncheras (se usa cuando no hay IA o sin conexión).
import { FRUTAS_VITC, HIERRO_ANDIBITE_REF } from './alimentos';
import type { DiaLonchera } from '../lib/tipos';

export interface Receta {
  id: string; principal: string; hierroMg: number; fuente: string; hemo: boolean;
  contiene: string[]; ingredientes: string[]; preparacion: string;
}

export const RECETAS: Receta[] = [
  { id: 'pan-sangrecita', principal: 'Pan integral con sangrecita al ajo', hierroMg: 9.5, fuente: 'Sangrecita', hemo: true, contiene: ['gluten'],
    ingredientes: ['Sangrecita (30 g)', 'Pan integral', 'Ajo', 'Cebolla china'], preparacion: 'Saltea la sangrecita con ajo y cebolla china; deja enfriar y rellena el pan.' },
  { id: 'tortilla-sangrecita', principal: 'Tortilla de sangrecita y espinaca', hierroMg: 8.0, fuente: 'Sangrecita', hemo: true, contiene: ['huevo'],
    ingredientes: ['Sangrecita (25 g)', 'Huevos', 'Espinaca', 'Cebolla'], preparacion: 'Bate el huevo con la sangrecita y la espinaca picada; cocina a fuego bajo y corta en triángulos.' },
  { id: 'muffin-sangrecita', principal: 'Muffin salado de sangrecita y zanahoria', hierroMg: 6.2, fuente: 'Sangrecita', hemo: true, contiene: ['gluten', 'huevo', 'lacteos'],
    ingredientes: ['Sangrecita (20 g)', 'Harina', 'Huevo', 'Zanahoria rallada', 'Queso fresco'], preparacion: 'Mezcla todo, hornea 20 minutos a 180 °C. Se prepara el domingo para 3 días.' },
  { id: 'albondigas-bazo', principal: 'Albóndigas de res y bazo', hierroMg: 3.9, fuente: 'Bazo y carne de res', hemo: true, contiene: ['huevo'],
    ingredientes: ['Carne molida (40 g)', 'Bazo de res (10 g)', 'Huevo', 'Avena'], preparacion: 'Licúa el bazo, mezcla con la carne, forma bolitas y hornéalas.' },
  { id: 'pate-higado', principal: 'Paté de hígado de pollo en pan', hierroMg: 2.9, fuente: 'Hígado de pollo', hemo: true, contiene: ['gluten'],
    ingredientes: ['Hígado de pollo (25 g)', 'Pan', 'Cebolla', 'Zanahoria'], preparacion: 'Cocina el hígado con cebolla y zanahoria, licúa y unta en el pan.' },
  { id: 'sanguche-higado', principal: 'Sánguche de hígado encebollado suave', hierroMg: 3.4, fuente: 'Hígado de pollo', hemo: true, contiene: ['gluten'],
    ingredientes: ['Hígado de pollo (30 g)', 'Pan', 'Cebolla', 'Tomate'], preparacion: 'Cocina el hígado en tiras con cebolla; arma el pan con rodajas de tomate.' },
  { id: 'wrap-carne', principal: 'Mini wrap de carne y verduras', hierroMg: 1.9, fuente: 'Carne de res', hemo: true, contiene: ['gluten'],
    ingredientes: ['Carne de res (50 g)', 'Tortilla de trigo', 'Lechuga', 'Tomate', 'Pimiento'], preparacion: 'Saltea la carne en tiras con pimiento; enrolla con lechuga y tomate.' },
  { id: 'tortitas-pescado', principal: 'Tortitas de pescado y quinua', hierroMg: 1.8, fuente: 'Pescado y quinua', hemo: true, contiene: ['pescado', 'huevo'],
    ingredientes: ['Pescado (50 g)', 'Quinua cocida', 'Huevo', 'Perejil'], preparacion: 'Mezcla el pescado desmenuzado con la quinua y el huevo; dora al horno.' },
  { id: 'ensalada-lentejas', principal: 'Ensalada de lentejas con huevo y tomate', hierroMg: 3.5, fuente: 'Lentejas', hemo: false, contiene: ['huevo'],
    ingredientes: ['Lentejas cocidas', 'Huevo duro', 'Tomate', 'Limón'], preparacion: 'Mezcla las lentejas con tomate picado y limón; agrega el huevo en cuartos.' },
  { id: 'hummus-lentejas', principal: 'Hummus de lentejas con pan pita y zanahoria', hierroMg: 2.6, fuente: 'Lentejas', hemo: false, contiene: ['gluten'],
    ingredientes: ['Lentejas cocidas', 'Limón', 'Pan pita', 'Zanahoria'], preparacion: 'Licúa las lentejas con limón y un chorrito de aceite; acompaña con palitos de zanahoria.' },
  { id: 'burrito-frejol', principal: 'Burrito suave de frejoles y queso', hierroMg: 2.4, fuente: 'Frejoles', hemo: false, contiene: ['gluten', 'lacteos'],
    ingredientes: ['Frejoles cocidos', 'Tortilla de trigo', 'Queso fresco', 'Tomate'], preparacion: 'Machaca los frejoles, unta la tortilla, agrega queso y tomate y enrolla.' },
  { id: 'panqueques-espinaca', principal: 'Panqueques de avena y espinaca', hierroMg: 2.7, fuente: 'Espinaca y avena', hemo: false, contiene: ['huevo'],
    ingredientes: ['Avena', 'Espinaca', 'Huevo', 'Plátano'], preparacion: 'Licúa todo y cocina panqueques chicos en sartén antiadherente.' },
  { id: 'galletas-canihua', principal: 'Galletas caseras de cañihua y plátano', hierroMg: 2.5, fuente: 'Cañihua', hemo: false, contiene: ['huevo'],
    ingredientes: ['Harina de cañihua (20 g)', 'Avena', 'Plátano maduro', 'Huevo'], preparacion: 'Mezcla, forma galletas y hornea 15 minutos a 180 °C.' },
  { id: 'quinua-pollo', principal: 'Bolitas de quinua con pollo', hierroMg: 1.8, fuente: 'Quinua y pollo', hemo: false, contiene: ['huevo', 'lacteos'],
    ingredientes: ['Quinua cocida', 'Pollo deshilachado', 'Huevo', 'Queso fresco'], preparacion: 'Mezcla, forma bolitas y hornea hasta dorar.' },
];

export const BEBIDAS = ['Agua', 'Agua', 'Agua de manzana sin azúcar', 'Refresco de camu camu sin azúcar', 'Agua'];
export const GUSTOS = ['Pan', 'Huevo', 'Pollo', 'Pescado', 'Menestras', 'Quinua', 'Dulce', 'Salado'];
export const RESTRICCIONES = [
  { id: 'huevo', nombre: 'Huevo' }, { id: 'gluten', nombre: 'Gluten' }, { id: 'lacteos', nombre: 'Lácteos' }, { id: 'pescado', nombre: 'Pescado' },
];
const DIAS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

function barajar<T>(lista: T[], azar: () => number): T[] {
  const a = [...lista];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(azar() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

/** Arma 5 loncheras: al menos 3 con hierro hemínico, cada una con fruta con vitamina C. */
export function planRecetario(opts: { evitar: string[]; incluirAndiBite: boolean; azar?: () => number }): { dias: DiaLonchera[]; compras: string[] } {
  const azar = opts.azar || Math.random;
  const ok = RECETAS.filter(r => !r.contiene.some(c => opts.evitar.includes(c)));
  const hemo = barajar(ok.filter(r => r.hemo), azar); const otras = barajar(ok.filter(r => !r.hemo), azar);
  const elegidas = [...hemo.slice(0, 3), ...otras.slice(0, 2)];
  while (elegidas.length < 5 && ok.length) elegidas.push(ok[elegidas.length % ok.length]);
  const orden = barajar(elegidas, azar);
  const frutas = barajar(FRUTAS_VITC, azar);
  const conAndi = opts.incluirAndiBite ? new Set(barajar([0, 1, 2, 3, 4], azar).slice(0, 2)) : new Set<number>();
  const dias = orden.map((r, i) => ({
    dia: DIAS[i], principal: r.principal, fruta: frutas[i % frutas.length], bebida: BEBIDAS[i],
    hierroMg: Math.round((r.hierroMg + (conAndi.has(i) ? HIERRO_ANDIBITE_REF : 0)) * 10) / 10,
    fuenteHierro: r.fuente + (conAndi.has(i) ? ' + AndiBite' : ''), preparacion: r.preparacion, andibite: conAndi.has(i),
  }));
  const compras = [...new Set(orden.flatMap(r => r.ingredientes).concat(dias.map(d => d.fruta)))];
  if (conAndi.size) compras.push('AndiBite (pack de 6)');
  return { dias, compras };
}

export function cambiarDia(dias: DiaLonchera[], i: number, evitar: string[], azar = Math.random): DiaLonchera {
  const usadas = new Set(dias.map(d => d.principal));
  const ok = RECETAS.filter(r => !r.contiene.some(c => evitar.includes(c)) && !usadas.has(r.principal));
  const r = ok[Math.floor(azar() * ok.length)] || RECETAS[0];
  const d = dias[i];
  return { ...d, principal: r.principal, preparacion: r.preparacion, fuenteHierro: r.fuente + (d.andibite ? ' + AndiBite' : ''),
    hierroMg: Math.round((r.hierroMg + (d.andibite ? HIERRO_ANDIBITE_REF : 0)) * 10) / 10, hecho: false };
}
