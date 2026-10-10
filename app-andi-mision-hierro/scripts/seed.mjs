// Genera data/seed.json con lotes, códigos y puntos de demostración.
import { writeFileSync } from 'node:fs';
import { generar } from '../server/codigo.js';

const base = {
  laboratorio: 'Laboratorio acreditado por INACAL',
  origenSangrecita: 'Sangrecita de res en polvo liofilizada, de proveedor con registro sanitario. La planta solo la hidrata.',
  registroSanitario: 'En trámite',
  planta: 'Planta maquiladora con HACCP (Lima)',
  alergenos: ['Gluten (avena)', 'Huevo'],
  octogonos: [],
  demo: true,
};
const lotes = {
  'L2610-CH': { ...base, id: 'L2610-CH', sabor: 'Chispa', fechaProduccion: '2026-10-05', fechaVencimiento: '2027-01-05', hierroMgPorUnidad: 1.9, hierroHemoMgPorUnidad: 1.3, azucarGPorUnidad: 1.3, informe: 'DEMO-001', fechaInforme: '2026-10-08', ingredientes: 'Avena, cocoa, sangrecita de res en polvo, huevo, plátano, aceite de girasol, eritritol, panela, chispas de chocolate, vainilla, polvo de hornear, sal.' },
  'L2610-AN': { ...base, id: 'L2610-AN', sabor: 'Andi', fechaProduccion: '2026-10-05', fechaVencimiento: '2027-01-05', hierroMgPorUnidad: 2.1, hierroHemoMgPorUnidad: 1.3, azucarGPorUnidad: 1.1, informe: 'DEMO-002', fechaInforme: '2026-10-08', ingredientes: 'Avena, harina de cañihua, cocoa, sangrecita de res en polvo, huevo, plátano, aceite de girasol, eritritol, panela, canela, vainilla, polvo de hornear, sal.' },
  'L2610-LU': { ...base, id: 'L2610-LU', sabor: 'Lúcu', fechaProduccion: '2026-10-05', fechaVencimiento: '2027-01-05', hierroMgPorUnidad: 1.8, hierroHemoMgPorUnidad: 1.3, azucarGPorUnidad: 1.2, informe: 'DEMO-003', fechaInforme: '2026-10-08', ingredientes: 'Avena, cocoa, lúcuma en polvo, sangrecita de res en polvo, huevo, plátano, aceite de girasol, eritritol, panela, vainilla, polvo de hornear, sal.' },
};
const codigos = {};
const crear = (loteId, presentacion, unidades, n) => {
  for (let i = 0; i < n; i++) { const code = generar(); codigos[code] = { code, loteId, presentacion, unidades, creado: '2026-10-08T12:00:00.000Z', escaneos: 0 }; }
};
crear('L2610-CH', 'pack6', 6, 3); crear('L2610-AN', 'pack6', 6, 3); crear('L2610-LU', 'pack12', 12, 2); crear('L2610-CH', 'unidad', 1, 2);
const puntos = [
  { id: 'p1', nombre: 'Feria navideña de prueba', lugar: 'Por confirmar', distrito: 'San Borja', desde: '2026-12-12', hasta: '2026-12-13', horario: '11:00 a 20:00', estado: 'por confirmar' },
  { id: 'p2', nombre: 'Feria navideña de prueba', lugar: 'Por confirmar', distrito: 'Surco', desde: '2026-12-19', hasta: '2026-12-20', horario: '11:00 a 20:00', estado: 'por confirmar' },
  { id: 'p3', nombre: 'Stand AndiBite', lugar: 'Jockey Plaza, programa para emprendedores', distrito: 'Surco', desde: '2027-01-09', hasta: '2027-01-31', horario: 'Sábados y domingos, 11:00 a 20:00', estado: 'por confirmar' },
];
writeFileSync(new URL('../data/seed.json', import.meta.url), JSON.stringify({ lotes, codigos, puntos }, null, 1));
console.log('Códigos de demostración:'); for (const c of Object.values(codigos)) console.log(c.code, c.loteId, c.presentacion);
