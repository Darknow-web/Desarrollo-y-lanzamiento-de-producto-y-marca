import { describe, expect, it } from 'vitest';
import { codigoDesdeQR, codigoValido, mascaraCodigo, normalizarCodigo } from '../src/lib/codigo';
import { generar, esValido } from '../worker/codigo';
import { armarRegistro, diasHastaAcabar, hierroDelDia, hierroDelLote, referenciaDiaria, resumenSemana } from '../src/lib/hierro';
import { ALIMENTOS_RAPIDOS, ANDIBITE_ID, HIERRO_ANDIBITE_REF } from '../src/data/alimentos';
import { planRecetario, RECETAS } from '../src/data/loncheras';
import { semanaDe, lunesDe, sumarDias } from '../src/lib/fechas';
import seed from '../data/seed.json';
import { enlaceCompartir, textoHoy, textoSemana } from '../src/lib/compartir';

describe('códigos únicos', () => {
  it('el servidor y la app validan igual', () => {
    for (let i = 0; i < 300; i++) {
      const c = generar();
      expect(codigoValido(c)).toBe(true);
      expect(esValido(c)).toBe(true);
    }
  });
  it('detecta un carácter cambiado', () => {
    const c = generar();
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
  it('todos los códigos de data/seed.json son válidos (salvo el demo, que no lleva dígito de control)', () => {
    for (const c of Object.keys(seed.codigos)) if (c !== 'AB-DEMO-2027') expect(codigoValido(c)).toBe(true);
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

describe('el hierro de hoy', () => {
  const hoy = '2026-10-07';
  const ninos = [{ id: 'n', apodo: 'Mati', edad: 6, avatar: '🦙' }, { id: 'g', apodo: 'Gabo', edad: 10, avatar: '🐻' }];
  it('suma los registros del día frente a la referencia de la edad', () => {
    const registros = [
      { id: '1', ninoId: 'n', fecha: hoy, alimentoId: ANDIBITE_ID, nombre: 'AndiBite', mg: 1.9, hemo: true, conVitC: false },
      { id: '2', ninoId: 'n', fecha: hoy, alimentoId: 'lentejas', nombre: 'Lentejas', mg: 2.6, hemo: false, conVitC: true },
      { id: '3', ninoId: 'n', fecha: '2026-10-06', alimentoId: 'sangrecita', nombre: 'Sangrecita', mg: 8.9, hemo: true, conVitC: true },
      { id: '4', ninoId: 'g', fecha: hoy, alimentoId: 'sangrecita', nombre: 'Sangrecita', mg: 8.9, hemo: true, conVitC: true },
    ];
    const h = hierroDelDia({ registros, ninos }, 'n', hoy);
    expect(h).toEqual({ mg: 4.5, referencia: 10, porcentaje: 45, faltan: 5.5 });
    expect(hierroDelDia({ registros, ninos }, 'n', '2026-10-08')).toEqual({ mg: 0, referencia: 10, porcentaje: 0, faltan: 10 });
    const g = hierroDelDia({ registros, ninos }, 'g', hoy);
    expect(g.referencia).toBe(8); expect(g.porcentaje).toBe(100); expect(g.faltan).toBe(0);
  });
  it('arma el registro desde data/alimentos.ts (AndiBite con el hierro del lote si se conoce)', () => {
    const r = armarRegistro('n', hoy, 'sangrecita', { conVitC: true });
    expect(r).toMatchObject({ ninoId: 'n', fecha: hoy, nombre: 'Sangrecita', mg: 8.9, hemo: true, conVitC: true });
    expect(armarRegistro('n', hoy, 'no-existe')).toBeNull();
    const a = armarRegistro('n', hoy, ANDIBITE_ID, { mg: 2.1, loteId: 'L2610-CH', despensaId: 'd1' });
    expect(a).toMatchObject({ nombre: 'AndiBite', mg: 2.1, hemo: true, conVitC: false, loteId: 'L2610-CH', despensaId: 'd1' });
    expect(armarRegistro('n', hoy, ANDIBITE_ID)!.mg).toBe(HIERRO_ANDIBITE_REF);
  });
  it('el hierro del lote sale de los lotes publicados o de la referencia', () => {
    expect(hierroDelLote('L2610-CH')).toBe(1.9);
    expect(hierroDelLote('no-existe')).toBe(HIERRO_ANDIBITE_REF);
    expect(hierroDelLote()).toBe(HIERRO_ANDIBITE_REF);
  });
  it('la hoja rápida tiene 8 alimentos con hierro', () => {
    expect(ALIMENTOS_RAPIDOS).toHaveLength(8);
    for (const a of ALIMENTOS_RAPIDOS) expect(a.mg).toBeGreaterThan(0);
  });
});

describe('datos publicados', () => {
  it('los lotes no tienen marcas de demostración ni textos pendientes', () => {
    const texto = JSON.stringify({ lotes: seed.lotes, puntos: seed.puntos }); // (el código AB-DEMO-2027 es el demo del jurado)
    expect(texto).not.toMatch(/DEMO|demo|por confirmar|en trámite/i);
    for (const l of Object.values(seed.lotes)) {
      expect(l.hierroMgPorUnidad).toBe(1.9); expect(l.hierroHemoMgPorUnidad).toBe(1.3); expect(l.azucarGPorUnidad).toBe(1.3);
      expect(l.octogonos).toHaveLength(0); expect(l.informe).toMatch(/^INF-2026-10-\d{2}$/); expect(l.fechaInforme).toBe('2026-10-08');
    }
  });
  it('los puntos de venta son los tres stands del plan 2027', () => {
    expect(seed.puntos.map(p => [p.lugar, p.distrito, p.desde])).toEqual([
      ['Jockey Plaza', 'Surco', '2027-01-02'],
      ['Real Plaza Salaverry', 'Jesús María', '2027-02-01'],
      ['La Molina', 'La Molina', '2027-08-01'],
    ]);
    for (const p of seed.puntos) { expect(p.id).toMatch(/^p\d$/); expect(p.nombre).toBe('Stand AndiBite'); expect(p.lugar).not.toMatch(/\s[uo]\s/); }
  });
});

describe('compartir con el otro padre', () => {
  it('arma el texto del día y de la semana', () => {
    expect(textoHoy('Mateo', { mg: 6.5, referencia: 10, porcentaje: 65 }, ['AndiBite', 'Lentejas', 'Mandarina'], true))
      .toBe('Hoy Mateo lleva 6.5 de 10 mg de hierro (65 %). Comió: AndiBite, Lentejas y Mandarina. Lonchera: volvió vacía. Enviado desde Andi.');
    expect(textoHoy('Mateo', { mg: 0, referencia: 10, porcentaje: 0 }, [], false)).toContain('Comió: nada registrado todavía. Lonchera: sin marcar.');
    expect(textoSemana('Mateo', { diasConHierro: 4, mgSemana: 31.2, vacias: 3 })).toBe('Semana de Mateo: 4 de 5 días con hierro, 31.2 mg en total. Loncheras vacías: 3. Enviado desde Andi.');
    expect(enlaceCompartir('hola a todos')).toBe('https://wa.me/?text=hola%20a%20todos');
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
