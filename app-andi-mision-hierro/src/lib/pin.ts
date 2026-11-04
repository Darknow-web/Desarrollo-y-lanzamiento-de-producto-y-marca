// PIN de papá o mamá para entrar y salir de Misión Hierro. Se guarda en el teléfono (Ley 29733), nunca en texto plano.
const CLAVE = 'andi.pin';
const INTENTOS = 'andi.pin.intentos';

async function huella(pin: string): Promise<string> {
  const datos = new TextEncoder().encode('andi:' + pin);
  const h = await crypto.subtle.digest('SHA-256', datos);
  return Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export const pinValido = (pin: string) => /^\d{4}$/.test(pin);
export const hayPin = () => { try { return !!localStorage.getItem(CLAVE); } catch { return false; } };

export async function guardarPin(pin: string): Promise<void> {
  localStorage.setItem(CLAVE, await huella(pin));
  localStorage.removeItem(INTENTOS);
}

export function borrarPin(): void { localStorage.removeItem(CLAVE); localStorage.removeItem(INTENTOS); }

/** Devuelve true si el PIN coincide. Tras 3 errores seguidos, bloquea 60 segundos. */
export async function verificarPin(pin: string): Promise<boolean> {
  const ok = localStorage.getItem(CLAVE) === (await huella(pin));
  if (ok) localStorage.removeItem(INTENTOS);
  else {
    const n = fallos() + 1;
    localStorage.setItem(INTENTOS, JSON.stringify({ n, hasta: n >= 3 ? Date.now() + 60_000 : 0 }));
  }
  return ok;
}

function leerIntentos(): { n: number; hasta: number } { try { return JSON.parse(localStorage.getItem(INTENTOS) || '{"n":0,"hasta":0}'); } catch { return { n: 0, hasta: 0 }; } }
export const fallos = () => leerIntentos().n;
/** Segundos que faltan para poder intentar otra vez (0 si no hay bloqueo). */
export function bloqueadoSeg(): number { const { hasta } = leerIntentos(); return hasta > Date.now() ? Math.ceil((hasta - Date.now()) / 1000) : 0; }

/** Reto para adultos si se olvidó el PIN: una multiplicación de dos cifras, se escribe el resultado. */
export function retoAdulto(): { texto: string; respuesta: number } {
  const a = 12 + Math.floor(Math.random() * 8), b = 3 + Math.floor(Math.random() * 6);
  return { texto: `${a} × ${b}`, respuesta: a * b };
}
