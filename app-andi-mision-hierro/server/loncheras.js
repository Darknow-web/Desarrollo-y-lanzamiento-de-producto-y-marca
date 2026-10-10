// Plan de loncheras con la API de Gemini. La clave vive solo en el servidor.
import { GoogleGenAI, Type } from '@google/genai';

const SISTEMA = `Eres una nutricionista pediátrica peruana que arma loncheras escolares para Lima.
Reglas:
- Cada lonchera tiene un alimento principal, una fruta y una bebida (de preferencia agua o refresco sin azúcar añadida).
- Incluye al menos una fuente de hierro por día y combínala con un alimento rico en vitamina C (mandarina, naranja, fresa, kiwi, aguaymanto, camu camu, tomate, pimiento).
- Prioriza el hierro hemínico (sangrecita, hígado, bazo, carnes, pescado) al menos 3 días; usa menestras, quinua, cañihua o espinaca los demás.
- Nada frito, nada con octógono, nada que necesite calentarse ni cadena de frío larga (la lonchera va en mochila de 7 a 13 h).
- Porciones adecuadas a la edad indicada. Recetas simples que un padre arma en 10 minutos.
- No hagas afirmaciones médicas: no digas que algo previene o cura la anemia.
- Si se permite AndiBite, úsalo como máximo 2 días y como complemento, nunca como única fuente de hierro.
- Escribe en español de Perú, frases cortas.
- hierroMg es una estimación aproximada del hierro de la lonchera en miligramos (número con un decimal).`;

const ESQUEMA = {
  type: Type.OBJECT,
  properties: {
    dias: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          dia: { type: Type.STRING },
          principal: { type: Type.STRING },
          fruta: { type: Type.STRING },
          bebida: { type: Type.STRING },
          hierroMg: { type: Type.NUMBER },
          fuenteHierro: { type: Type.STRING },
          preparacion: { type: Type.STRING },
        },
        required: ['dia', 'principal', 'fruta', 'bebida', 'hierroMg', 'fuenteHierro', 'preparacion'],
      },
    },
    compras: { type: Type.ARRAY, items: { type: Type.STRING } },
    consejo: { type: Type.STRING },
  },
  required: ['dias', 'compras', 'consejo'],
};

let cliente = null;
export const iaDisponible = () => Boolean(process.env.GEMINI_API_KEY);

export async function planConIA({ edad, gustos = [], evitar = [], incluirAndiBite = true }) {
  cliente ??= new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const pedido = `Arma 5 loncheras (lunes a viernes) para un niño o niña de ${edad} años.
Le gusta: ${gustos.join(', ') || 'sin preferencias'}.
Evitar (alergias o rechazos): ${evitar.join(', ') || 'nada'}.
${incluirAndiBite ? 'Se puede incluir AndiBite (mini brownie de 20 g con sangrecita, unos 1.9 mg de hierro) como máximo 2 días.' : 'No incluyas AndiBite.'}
Devuelve también la lista de compras de la semana y un consejo corto.`;
  const r = await cliente.models.generateContent({
    model: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
    contents: pedido,
    config: { systemInstruction: SISTEMA, responseMimeType: 'application/json', responseSchema: ESQUEMA, temperature: 0.8 },
  });
  const plan = JSON.parse(r.text);
  if (!Array.isArray(plan.dias) || plan.dias.length === 0) throw new Error('respuesta_vacia');
  plan.dias = plan.dias.slice(0, 5).map(d => ({ ...d, hierroMg: Math.round(Number(d.hierroMg) * 10) / 10 || 0 }));
  return plan;
}
