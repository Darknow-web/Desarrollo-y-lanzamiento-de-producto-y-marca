// Voz de Andi (lectura en voz alta) y sonidos cortos con Web Audio.
import { obtener } from './estado';

let vozElegida: SpeechSynthesisVoice | null = null;
function elegirVoz() {
  const voces = window.speechSynthesis?.getVoices() || [];
  vozElegida = voces.find(v => v.lang === 'es-PE') || voces.find(v => v.lang === 'es-419' || v.lang === 'es-US' || v.lang === 'es-MX')
    || voces.find(v => v.lang.startsWith('es')) || null;
}
if ('speechSynthesis' in window) { elegirVoz(); window.speechSynthesis.onvoiceschanged = elegirVoz; }

export const vozDisponible = () => 'speechSynthesis' in window;

export function hablar(texto: string) {
  if (!vozDisponible() || !obtener().ajustes.voz) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(texto);
  u.lang = vozElegida?.lang || 'es-PE'; if (vozElegida) u.voice = vozElegida;
  u.rate = 0.95; u.pitch = 1.2;
  window.speechSynthesis.speak(u);
}
export const callar = () => { if (vozDisponible()) window.speechSynthesis.cancel(); };

let ctx: AudioContext | null = null;
function tono(frec: number, inicio: number, dur: number, tipo: OscillatorType = 'sine', vol = 0.12) {
  ctx ??= new AudioContext();
  const o = ctx.createOscillator(); const g = ctx.createGain();
  o.type = tipo; o.frequency.value = frec;
  g.gain.setValueAtTime(0, ctx.currentTime + inicio);
  g.gain.linearRampToValueAtTime(vol, ctx.currentTime + inicio + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + inicio + dur);
  o.connect(g).connect(ctx.destination); o.start(ctx.currentTime + inicio); o.stop(ctx.currentTime + inicio + dur + 0.05);
}
export const sonido = {
  toque: () => { try { tono(660, 0, 0.08, 'triangle', 0.08); } catch { /* sin audio */ } },
  bien: () => { try { tono(523, 0, 0.15); tono(659, 0.1, 0.15); tono(784, 0.2, 0.25); } catch { /* sin audio */ } },
  suave: () => { try { tono(330, 0, 0.18, 'triangle', 0.08); } catch { /* sin audio */ } },
  premio: () => { try { [523, 659, 784, 1046].forEach((f, i) => tono(f, i * 0.09, 0.3, 'triangle', 0.1)); } catch { /* sin audio */ } },
};
