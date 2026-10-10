// Códigos únicos de envase: AB-XXXX-XXXX (7 caracteres aleatorios + 1 de control).
// Alfabeto Crockford base32: sin I, L, O ni U para evitar confusiones al tipear.
import { randomInt } from 'node:crypto';

export const ALFABETO = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
const PREFIJO = 'AB';

export function digitoControl(cuerpo) {
  let suma = 0;
  for (let i = 0; i < cuerpo.length; i++) suma += ALFABETO.indexOf(cuerpo[i]) * (i + 3);
  return ALFABETO[suma % 32];
}

export function normalizar(entrada) {
  const limpio = String(entrada || '').toUpperCase().replace(/[^0-9A-Z]/g, '')
    .replace(/O/g, '0').replace(/[IL]/g, '1').replace(/U/g, 'V');
  const sinPrefijo = limpio.startsWith(PREFIJO) ? limpio.slice(2) : limpio;
  if (sinPrefijo.length !== 8) return null;
  return `${PREFIJO}-${sinPrefijo.slice(0, 4)}-${sinPrefijo.slice(4)}`;
}

export function esValido(codigo) {
  const n = normalizar(codigo);
  if (!n) return false;
  const cuerpo = n.slice(3).replace('-', '');
  return digitoControl(cuerpo.slice(0, 7)) === cuerpo[7];
}

export function generar() {
  let cuerpo = '';
  for (let i = 0; i < 7; i++) cuerpo += ALFABETO[randomInt(32)];
  const total = cuerpo + digitoControl(cuerpo);
  return `${PREFIJO}-${total.slice(0, 4)}-${total.slice(4)}`;
}
