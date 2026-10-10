import { describe, expect, it } from 'vitest';
import { codigoDesdeQR, codigoValido, mascaraCodigo, normalizarCodigo } from '../src/lib/codigo';
// @ts-expect-error módulo JS del servidor
import { generar, esValido } from '../server/codigo.js';
import { diasHastaAcabar, referenciaDiaria, resumenSemana } from '../src/lib/hierro';
import { planRecetario, RECETAS } from '../src/data/loncheras';
import { semanaDe, lunesDe, sumarDias } from '../src/lib/fechas';
import seed from '../data/seed.json';

describe('códigos únicos', () => {
  it('el servidor y la app validan igual', () => {
    for (let i = 0; i < 300; i++) {
      const c = generar() as string;
      expect(codigoValido(c)).toBe(true);
      expect(esValido(c)).toBe(true);
    }
  });
  it('detecta un carácter cambiado', () => {
    const c = generar() as string;
    const malo = c.slice(0, -1) + (c.endsWith('0') ? '1' : '0');
    expect(codigoValido(malo)).toBe(false);
  });
  it('tolera minúsculas, espacios y letras confundibles', () => {
    expect(normalizarCodigo('ab 2ans gyz4')).toBe('AB-2ANS-GYZ4');
    expect(normalizarCodigo('AB-2ANS-GYZ')).toBeNull();
    expect(mascaraCodigo('ab2ansg')).toBe('AB-2ANS-G');
  });
  it('lee el código desde la URL del QR', () => {
    expect(codigoDesdeQR('https://andi.example/c/AB-2ANS-GYZ4')).toBe('AB-2ANS-GYZ4');
    expect(codigoDesdeQR('hola')).toBeNull();
  });
  it('todos los códigos de demostración son válidos', () => {
    for (const c of Object.keys(seed.codigos)) expect(codigoValido(c)).toBe(true);
  });
});

describe('semáforo de hierro', () => {
  const hoy = '2026-10-07';
  const reg = (fecha: string) => ({ id: fecha, ninoId: 'n', fecha, alimentoId: 'sangrecita', nombre: 'Sangrecita', mg: 8.9, hemo: true, conVitC: true });
  it('cuenta los días con una fuente de hierro', () => {
    const dias = semanaDe(hoy);
    expect(resumenSemana([], 'n', hoy).color).toBe('rojo');
    expect(resumenSemana(dias.slice(0, 3).map(reg), 'n', hoy).color).toBe('ambar');
    const r = resumenSemana(dias.slice(0, 5).map(reg), 'n', hoy);
    expect(r.color).toBe('verde'); expect(r.diasConHierro).toBe(5); expect(r.mgSemana).toBe(44.5);
  });
  it('la semana empieza el lunes', () => {
    expect(lunesDe('2026-10-11')).toBe('2026-10-05');
    expect(sumarDias('2026-12-31', 1)).toBe('2027-01-01');
  });
  it('referencias por edad', () => {
    expect(referenciaDiaria(3)).toBe(7); expect(referenciaDiaria(6)).toBe(10); expect(referenciaDiaria(11)).toBe(8);
  });
  it('estima cuándo se acaba el pack', () => {
    expect(diasHastaAcabar(6, 5)).toBe(8);
    expect(diasHastaAcabar(0, 5)).toBe(0);
  });
});

describe('recetario de loncheras', () => {
  it('arma 5 días con al menos 3 de hierro hemínico y fruta con vitamina C', () => {
    for (let i = 0; i < 50; i++) {
      const p = planRecetario({ evitar: [], incluirAndiBite: true });
      expect(p.dias).toHaveLength(5);
      const hemo = p.dias.filter(d => RECETAS.find(r => r.principal === d.principal)?.hemo).length;
      expect(hemo).toBeGreaterThanOrEqual(3);
      expect(p.dias.filter(d => d.andibite).length).toBeLessThanOrEqual(2);
      expect(new Set(p.dias.map(d => d.principal)).size).toBe(5);
    }
  });
  it('respeta las restricciones', () => {
    const p = planRecetario({ evitar: ['huevo', 'gluten'], incluirAndiBite: false });
    for (const d of p.dias) expect(RECETAS.find(r => r.principal === d.principal)!.contiene).not.toContain('huevo');
    expect(p.dias.some(d => d.andibite)).toBe(false);
  });
});
