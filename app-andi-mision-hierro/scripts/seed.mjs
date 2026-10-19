// Genera data/seed.json: los datos iniciales que el Worker carga en Workers KV la primera vez.
// Los códigos son fijos para que los QR ya impresos y el README sigan funcionando.
// Uso: node scripts/seed.mjs
import { writeFileSync } from 'node:fs';

const base = {
  laboratorio: 'Laboratorio acreditado por INACAL',
  origenSangrecita: 'Sangrecita de res en polvo liofilizada, de proveedor con registro sanitario. La planta solo la hidrata.',
  planta: 'Planta maquiladora con HACCP (Lima)',
  alergenos: ['Gluten (avena)', 'Huevo'],
  octogonos: [],
  pesoUnidadG: 20,
  fechaProduccion: '2026-10-05',
  fechaVencimiento: '2027-01-05',
  hierroMgPorUnidad: 1.9,
  hierroHemoMgPorUnidad: 1.3,
  azucarGPorUnidad: 1.3,
  fechaInforme: '2026-10-08',
};
const lotes = {
  'L2610-CH': { ...base, id: 'L2610-CH', sabor: 'Chispa', informe: 'INF-2026-10-01', ingredientes: 'Avena, cocoa, sangrecita de res en polvo, huevo, plátano, aceite de girasol, eritritol, panela, chispas de chocolate, vainilla, polvo de hornear, sal.' },
  'L2610-AN': { ...base, id: 'L2610-AN', sabor: 'Andi', informe: 'INF-2026-10-02', ingredientes: 'Avena, harina de cañihua, cocoa, sangrecita de res en polvo, huevo, plátano, aceite de girasol, eritritol, panela, canela, vainilla, polvo de hornear, sal.' },
  'L2610-LU': { ...base, id: 'L2610-LU', sabor: 'Lúcu', informe: 'INF-2026-10-03', ingredientes: 'Avena, cocoa, lúcuma en polvo, sangrecita de res en polvo, huevo, plátano, aceite de girasol, eritritol, panela, vainilla, polvo de hornear, sal.' },
};
const fijos = [
  ['AB-2ANS-GYZ4', 'L2610-CH', 'pack6'], ['AB-ZEQ1-16MS', 'L2610-CH', 'pack6'], ['AB-E7JG-WHEA', 'L2610-CH', 'pack6'],
  ['AB-2J7E-4DDY', 'L2610-AN', 'pack6'], ['AB-FF9D-6QMT', 'L2610-AN', 'pack6'], ['AB-XYPA-4VGX', 'L2610-AN', 'pack6'],
  ['AB-MF83-HSNE', 'L2610-LU', 'pack12'], ['AB-5HSR-6AGA', 'L2610-LU', 'pack12'],
  ['AB-XTYQ-0QMB', 'L2610-CH', 'unidad'], ['AB-VHWW-35W2', 'L2610-CH', 'unidad'],
];
const UNIDADES = { unidad: 1, pack6: 6, pack12: 12 };
const codigos = Object.fromEntries(fijos.map(([code, loteId, presentacion]) => [code,
  { code, loteId, presentacion, unidades: UNIDADES[presentacion], creado: '2026-10-08T12:00:00.000Z', escaneos: 0 }]));
// Código demo para el jurado (sin dígito de control; el Worker lo trata como siempre vigente).
codigos['AB-DEMO-2027'] = { code: 'AB-DEMO-2027', loteId: 'L2610-CH', presentacion: 'pack6', unidades: 6, creado: '2026-10-19T12:00:00.000Z', escaneos: 0 };
// Puntos del plan 2027 (HECHOS_v7). La app los muestra como "Próximamente" hasta su fecha.
const puntos = [
  { id: 'p1', nombre: 'Stand AndiBite', lugar: 'Jockey Plaza', distrito: 'Surco', desde: '2027-01-02' },
  { id: 'p2', nombre: 'Stand AndiBite', lugar: 'Real Plaza Salaverry', distrito: 'Jesús María', desde: '2027-02-01' },
  { id: 'p3', nombre: 'Stand AndiBite', lugar: 'La Molina', distrito: 'La Molina', desde: '2027-08-01' },
];
writeFileSync(new URL('../data/seed.json', import.meta.url), JSON.stringify({ version: 2, lotes, codigos, puntos }, null, 1) + '\n');
console.log('data/seed.json listo:', Object.keys(lotes).length, 'lotes,', Object.keys(codigos).length, 'códigos,', puntos.length, 'puntos');
