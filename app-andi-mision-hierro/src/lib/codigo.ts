// Mismo algoritmo que server/codigo.js: AB-XXXX-XXXX con dígito de control.
const ALFABETO = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';

function digitoControl(cuerpo: string): string {
  let suma = 0;
  for (let i = 0; i < cuerpo.length; i++) suma += ALFABETO.indexOf(cuerpo[i]) * (i + 3);
  return ALFABETO[suma % 32];
}

export function normalizarCodigo(entrada: string): string | null {
  const limpio = String(entrada || '').toUpperCase().replace(/[^0-9A-Z]/g, '')
    .replace(/O/g, '0').replace(/[IL]/g, '1').replace(/U/g, 'V');
  const sinPrefijo = limpio.startsWith('AB') ? limpio.slice(2) : limpio;
  if (sinPrefijo.length !== 8) return null;
  return `AB-${sinPrefijo.slice(0, 4)}-${sinPrefijo.slice(4)}`;
}

export function codigoValido(codigo: string): boolean {
  const n = normalizarCodigo(codigo);
  if (!n) return false;
  const cuerpo = n.slice(3).replace('-', '');
  return digitoControl(cuerpo.slice(0, 7)) === cuerpo[7];
}

/** Extrae el código de un QR: puede venir como URL (…/c/AB-XXXX-XXXX) o como texto. */
export function codigoDesdeQR(texto: string): string | null {
  const m = texto.match(/\/c\/([A-Za-z0-9-]+)/);
  const n = normalizarCodigo(m ? m[1] : texto);
  return n && codigoValido(n) ? n : null;
}

/** Formatea lo que el usuario va tipeando: AB-XXXX-XXXX. */
export function mascaraCodigo(entrada: string): string {
  let s = entrada.toUpperCase().replace(/[^0-9A-Z]/g, '');
  if (s.startsWith('AB')) s = s.slice(2);
  s = s.slice(0, 8);
  return 'AB-' + s.slice(0, 4) + (s.length > 4 ? '-' + s.slice(4) : '');
}
