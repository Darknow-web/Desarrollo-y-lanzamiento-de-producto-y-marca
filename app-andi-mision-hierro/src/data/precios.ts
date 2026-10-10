// Precios de recompra por WhatsApp (con IGV), modelo v6 del 10-oct-2026.
export const PRECIOS = {
  degustacion: { nombre: 'Caja degustación de 3', precio: 12.0, unidades: 3 },
  pack6: { nombre: 'Pack de 6', precio: 26.9, unidades: 6 },
  pack12: { nombre: 'Pack de 12 "Semana completa"', precio: 49.9, unidades: 12 },
};
export const NOMBRE_PRESENTACION = { unidad: 'Unidad', pack6: 'Pack de 6', pack12: 'Pack de 12' } as const;
export const COLOR_SABOR: Record<string, string> = { Chispa: '#D7392B', Andi: '#E9B730', 'Lúcu': '#B9733A', Surtido: '#6B3A2A' };
export const DESCRIPCION_SABOR: Record<string, string> = {
  Chispa: 'Choco clásico con chispas', Andi: 'Choco, plátano, canela y cañihua', 'Lúcu': 'Choco y lúcuma', Surtido: 'Los tres sabores',
};
