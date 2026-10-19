// Plan semanal de loncheras con IA (función premium): se desbloquea 14 días con cada pack escaneado.
// POST /api/plan  { codigo, nino: { apodo, edadAnios, evitar[], yaProbo?[] }, semana: 'YYYY-MM-DD' (lunes) }
// Respuesta       { plan, vigenteHasta, enCache }
// El plan lo genera Claude (SDK oficial) con salida JSON validada por esquema y se guarda 30 días en KV:
//   plan:<codigo>:<semana>:<hash corto del niño>
// La clave ANTHROPIC_API_KEY es un secreto del Worker; sin ella, el endpoint responde 503 y la app usa su recetario.
import Anthropic from '@anthropic-ai/sdk';
import type { Context } from 'hono';
import { normalizar } from './codigo';
import type { Codigo, Datos, KV } from './datos';

export const DIAS_PLAN = 14;
export const DIAS_CACHE_PLAN = 30;
/** Código de demostración para el jurado: siempre vigente y no se consume. */
export const CODIGO_DEMO = 'AB-DEMO-2027';
export const MODELO = 'claude-opus-5-5';

export interface EnvPlan { ANDI_KV: KV; ANTHROPIC_API_KEY?: string }
type Ctx = Context<{ Bindings: EnvPlan; Variables: { datos: Datos } }>;

export interface NinoPlan { apodo: string; edadAnios: number; evitar: string[]; yaProbo?: string[] }
export interface DiaPlan {
  dia: string; principal: { nombre: string; ingredientes: string[]; preparacion: string[] };
  fruta: string; bebida: string; conAndiBite: boolean; hierroMg: number; truco: string;
}
export interface PlanSemanal { semana: string; nino: string; dias: DiaPlan[]; listaCompras: { grupo: string; items: string[] }[]; nota: string }

/** ¿Es el código demo? Se compara normalizado porque AB-DEMO-2027 no lleva dígito de control. */
export const esDemo = (code: unknown) => normalizar(code) === normalizar(CODIGO_DEMO);

export const planHastaDesde = (escaneadoEl: string) => new Date(new Date(escaneadoEl).getTime() + DIAS_PLAN * 86_400_000).toISOString();

/** Fecha del primer escaneo y hasta cuándo vale el plan. El demo vale siempre 14 días desde hoy. */
export function vigencia(cod: Codigo, ahora = new Date()): { escaneadoEl: string; planHasta: string } {
  if (esDemo(cod.code)) return { escaneadoEl: ahora.toISOString(), planHasta: planHastaDesde(ahora.toISOString()) };
  const escaneadoEl = cod.escaneadoEl || cod.primerEscaneo || ahora.toISOString();
  return { escaneadoEl, planHasta: planHastaDesde(escaneadoEl) };
}

const ESQUEMA_PLAN = {
  type: 'object', additionalProperties: false,
  required: ['semana', 'nino', 'dias', 'listaCompras', 'nota'],
  properties: {
    semana: { type: 'string', description: 'Lunes de la semana, YYYY-MM-DD' },
    nino: { type: 'string', description: 'Apodo del niño' },
    dias: {
      type: 'array', minItems: 5, maxItems: 5,
      items: {
        type: 'object', additionalProperties: false,
        required: ['dia', 'principal', 'fruta', 'bebida', 'conAndiBite', 'hierroMg', 'truco'],
        properties: {
          dia: { type: 'string', enum: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'] },
          principal: {
            type: 'object', additionalProperties: false, required: ['nombre', 'ingredientes', 'preparacion'],
            properties: {
              nombre: { type: 'string' },
              ingredientes: { type: 'array', items: { type: 'string' } },
              preparacion: { type: 'array', items: { type: 'string' }, description: 'Pasos cortos, en orden' },
            },
          },
          fruta: { type: 'string', description: 'Fruta con vitamina C' },
          bebida: { type: 'string', description: 'Bebida sin azúcar' },
          conAndiBite: { type: 'boolean' },
          hierroMg: { type: 'number', description: 'Hierro aproximado de toda la lonchera, en mg (tablas CENAN)' },
          truco: { type: 'string', description: 'Truco de absorción del día' },
        },
      },
    },
    listaCompras: {
      type: 'array',
      items: {
        type: 'object', additionalProperties: false, required: ['grupo', 'items'],
        properties: { grupo: { type: 'string' }, items: { type: 'array', items: { type: 'string' } } },
      },
    },
    nota: { type: 'string', description: 'Nota breve y cálida para la mamá o el papá' },
  },
} as const;

export const SISTEMA = `Eres una nutricionista infantil peruana que arma loncheras escolares para familias de Lima. Hablas en español peruano, con tono cálido, simple y concreto, sin tecnicismos.

Tu tarea: proponer el plan de loncheras de lunes a viernes para un niño o niña según su edad, alergias y rechazos, con alimentos que se consiguen en mercados y bodegas de Lima y a precio razonable.

Reglas de cada día:
- Un principal con hierro: de fuente hemo (sangrecita, hígado, bazo, bofe, pescado, carne, pollo) o no hemo (lentejas, frejoles, quinua, cañihua, kiwicha, espinaca) siempre acompañada de un potenciador (vitamina C o una porción pequeña de carne).
- Una fruta con vitamina C (mandarina, naranja, fresas, kiwi, aguaymanto, camu camu, mango, piña, granadilla, tumbo, papaya).
- Una bebida sin azúcar añadida (agua, refresco de fruta sin azúcar, emoliente o infusión suave; nunca jugos de caja ni gaseosa).
- Nada frito, nada ultraprocesado ni con octógonos. Recetas que aguanten hasta el recreo sin refrigeración.
- Dos o tres días de la semana incluye AndiBite como complemento (mini brownie de 20 g con sangrecita, 1.9 mg de hierro por unidad, sin octógonos): una unidad por lonchera, nunca como reemplazo del principal. Márcalo con conAndiBite = true y súmalo al hierro del día.
- Recetas paso a paso, cortas (3 a 5 pasos), que una familia prepare en la noche o el domingo.
- Estima el hierro total de la lonchera en mg usando como referencia las Tablas Peruanas de Composición de Alimentos del CENAN (por ejemplo: sangrecita de pollo ~29.5 mg/100 g, hígado de pollo ~8.5 mg/100 g, bazo de res ~28.7 mg/100 g, lentejas cocidas ~2.5 mg/100 g, quinua cocida ~1.5 mg/100 g, espinaca cocida ~2.7 mg/100 g). Sé realista con las porciones de un niño.
- En "truco", da un consejo práctico del día: cómo sumar vitamina C, por qué no mezclar la lonchera con leche, té ni café (bajan la absorción del hierro), cómo esconder la sangrecita, cómo conservar la lonchera, etc.
- Respeta estrictamente lo que el niño debe evitar (alergias o rechazos) y evita repetir lo que ya probó si te lo indican; varía las preparaciones durante la semana.
- La lista de compras va agrupada (por ejemplo: Carnes y vísceras, Menestras y cereales, Frutas y verduras, Panadería, Otros) con cantidades aproximadas para la semana.
- La nota final es breve, cálida y recuerda que esto es orientación general: no diagnostica ni reemplaza al pediatra ni a la nutricionista del centro de salud. Si la familia sospecha anemia, que acuda al establecimiento de salud por el tamizaje de hemoglobina.

Responde solo con el JSON pedido, en español.`;

const sinAcentos = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '');
const limpiarTexto = (v: unknown, max = 40) => String(v ?? '').replace(/[\n\r\t<>]/g, ' ').trim().slice(0, max);
const limpiarLista = (v: unknown, max = 12) => (Array.isArray(v) ? v.map(x => limpiarTexto(x, 30)).filter(Boolean).slice(0, max) : []);

/** Hash corto (8 hex) del perfil del niño, para la clave de caché. */
export async function hashNino(n: NinoPlan): Promise<string> {
  const base = JSON.stringify({ e: n.edadAnios, v: [...n.evitar].map(x => sinAcentos(x).toLowerCase()).sort(), p: [...(n.yaProbo || [])].map(x => sinAcentos(x).toLowerCase()).sort() });
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(base));
  return [...new Uint8Array(buf)].slice(0, 4).map(b => b.toString(16).padStart(2, '0')).join('');
}

const esLunes = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s + 'T00:00:00Z')) && new Date(s + 'T00:00:00Z').getUTCDay() === 1;

export const clavePlan = (codigo: string, semana: string, hash: string) => `plan:${codigo}:${semana}:${hash}`;

/** Comprueba que el plan devuelto por el modelo tenga la forma que espera la app. */
export function esPlanValido(p: unknown): p is PlanSemanal {
  if (!p || typeof p !== 'object') return false;
  const o = p as Record<string, unknown>;
  if (typeof o.semana !== 'string' || typeof o.nino !== 'string' || typeof o.nota !== 'string') return false;
  if (!Array.isArray(o.dias) || o.dias.length !== 5 || !Array.isArray(o.listaCompras)) return false;
  return o.dias.every(d => d && typeof d === 'object' && typeof (d as DiaPlan).dia === 'string'
    && typeof (d as DiaPlan).principal?.nombre === 'string' && Array.isArray((d as DiaPlan).principal.preparacion)
    && typeof (d as DiaPlan).fruta === 'string' && typeof (d as DiaPlan).bebida === 'string'
    && typeof (d as DiaPlan).hierroMg === 'number' && typeof (d as DiaPlan).truco === 'string');
}

/** Pide el plan a Claude con salida JSON validada por esquema. */
export async function generarPlan(apiKey: string, nino: NinoPlan, semana: string): Promise<PlanSemanal> {
  const client = new Anthropic({ apiKey });
  const pedido = [
    `Arma el plan de loncheras de la semana del lunes ${semana}.`,
    `Niño/a: ${nino.apodo}, ${nino.edadAnios} años.`,
    `Debe evitar: ${nino.evitar.length ? nino.evitar.join(', ') : 'nada en particular'}.`,
    nino.yaProbo?.length ? `Ya probó estas semanas (no repetir): ${nino.yaProbo.join(', ')}.` : '',
    'Devuelve el JSON del plan con los 5 días.',
  ].filter(Boolean).join('\n');

  const respuesta = await client.beta.messages.create({
    model: MODELO,
    max_tokens: 16000,
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    system: [{ type: 'text', text: SISTEMA, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: pedido }],
    output_config: { format: { type: 'json_schema', schema: ESQUEMA_PLAN as unknown as Record<string, unknown> } },
  });

  if (respuesta.stop_reason === 'refusal') throw new ErrorPlan('plan_rechazado', 502);
  if (respuesta.stop_reason === 'max_tokens') throw new ErrorPlan('plan_incompleto', 502);
  const texto = respuesta.content.filter(b => b.type === 'text').map(b => b.text).join('');
  let plan: unknown;
  try { plan = JSON.parse(texto); } catch { throw new ErrorPlan('plan_invalido', 502); }
  if (!esPlanValido(plan)) throw new ErrorPlan('plan_invalido', 502);
  return { ...plan, semana, nino: nino.apodo };
}

export class ErrorPlan extends Error { constructor(public codigo: string, public estado: 400 | 403 | 404 | 502 | 503) { super(codigo); } }

/** Manejador de POST /api/plan. */
export async function crearPlan(c: Ctx) {
  const b = await c.req.json<Record<string, unknown>>().catch(() => ({} as Record<string, unknown>));
  const demo = esDemo(b.codigo);
  const code = demo ? CODIGO_DEMO : normalizar(b.codigo);
  if (!code) return c.json({ error: 'codigo_invalido' }, 400);

  const datos = c.get('datos');
  const cod = await datos.getCodigo(code);
  if (!cod) return c.json({ error: 'codigo_no_encontrado' }, 404);
  const ahora = new Date();
  const { planHasta } = vigencia(cod, ahora);
  if (!demo && (!cod.escaneadoEl && !cod.primerEscaneo)) return c.json({ error: 'codigo_sin_escanear' }, 403);
  if (ahora.toISOString() >= planHasta) return c.json({ error: 'plan_vencido', vigenteHasta: planHasta }, 403);

  const nb = (b.nino || {}) as Record<string, unknown>;
  const edad = Number(nb.edadAnios);
  if (!Number.isInteger(edad) || edad < 2 || edad > 15) return c.json({ error: 'nino_invalido' }, 400);
  const nino: NinoPlan = { apodo: limpiarTexto(nb.apodo, 24) || 'tu hijo', edadAnios: edad, evitar: limpiarLista(nb.evitar), yaProbo: limpiarLista(nb.yaProbo, 20) };
  const semana = String(b.semana || '');
  if (!esLunes(semana)) return c.json({ error: 'semana_invalida' }, 400);

  const clave = clavePlan(code, semana, await hashNino(nino));
  const guardado = (await c.env.ANDI_KV.get(clave, 'json')) as PlanSemanal | null;
  if (guardado && esPlanValido(guardado)) return c.json({ plan: guardado, vigenteHasta: planHasta, enCache: true });

  const apiKey = c.env.ANTHROPIC_API_KEY;
  if (!apiKey) return c.json({ error: 'plan_no_disponible' }, 503);

  try {
    const plan = await generarPlan(apiKey, nino, semana);
    await c.env.ANDI_KV.put(clave, JSON.stringify(plan), { expirationTtl: DIAS_CACHE_PLAN * 86_400 });
    return c.json({ plan, vigenteHasta: planHasta, enCache: false });
  } catch (e) {
    if (e instanceof ErrorPlan) return c.json({ error: e.codigo }, e.estado);
    if (e instanceof Anthropic.AuthenticationError) { console.error('plan: clave inválida'); return c.json({ error: 'plan_no_disponible' }, 503); }
    if (e instanceof Anthropic.RateLimitError) return c.json({ error: 'plan_ocupado' }, 503);
    if (e instanceof Anthropic.APIError) { console.error('plan', e.status, e.message); return c.json({ error: 'plan_no_disponible' }, 503); }
    throw e;
  }
}
