export const meta = {
  name: 'focus-sinteticos-andibite',
  description: 'Focus groups simulados: 380 perfiles de papás y mamás A y B de Lima, moderados por un investigador (dos rondas por grupo)',
  phases: [
    { title: 'Ronda 1', detail: 'hábitos y dolores, sin mostrar el producto', model: 'haiku' },
    { title: 'Moderación', detail: 'el investigador resume el grupo y repregunta', model: 'sonnet' },
    { title: 'Ronda 2', detail: 'producto, marca, frases y precio', model: 'haiku' },
    { title: 'Informe de grupo', detail: 'el investigador cierra cada grupo', model: 'sonnet' },
  ],
}

// ---------- azar con semilla (reproducible; Math.random no está permitido) ----------
function mulberry(seed) { let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296 } }
const R = mulberry(20261117)
const pick = (pairs) => { const tot = pairs.reduce((s, p) => s + p[1], 0); let x = R() * tot; for (const [v, w] of pairs) { x -= w; if (x <= 0) return v } return pairs[pairs.length - 1][0] }
const one = (arr) => arr[Math.floor(R() * arr.length)]
const between = (a, b) => a + Math.floor(R() * (b - a + 1))

// ---------- distribuciones (PERFIL-AB-fuentes.md; casi todas son supuestos razonados) ----------
const N_NSE = { A: 91, B1: 106, B2: 183 }
const ZONA = { A: [['7', 80], ['6', 15], ['otras', 5]], B1: [['7', 55], ['6', 30], ['otras', 15]], B2: [['7', 40], ['6', 28], ['otras', 32]] }
const DIST = {
  '7': [['Santiago de Surco', 22], ['La Molina', 12], ['San Borja', 11], ['Miraflores', 6], ['San Isidro', 4]],
  '6': [['San Miguel', 10], ['Jesús María', 6], ['Pueblo Libre', 5], ['Lince', 3], ['Magdalena del Mar', 3]],
  'otras': [['Surquillo', 3], ['Barranco', 2], ['Chorrillos', 3], ['Bellavista (Callao)', 2], ['Los Olivos', 3], ['Ate', 2], ['Cercado de Lima', 2]],
}
const PENSION = {
  A: [['S/700 a S/1,200', 10], ['S/1,200 a S/2,000', 30], ['S/2,000 a S/3,000', 35], ['más de S/3,000', 25]],
  B1: [['hasta S/700', 3], ['S/700 a S/1,200', 30], ['S/1,200 a S/2,000', 42], ['S/2,000 a S/3,000', 20], ['más de S/3,000', 5]],
  B2: [['hasta S/700', 20], ['S/700 a S/1,200', 45], ['S/1,200 a S/2,000', 27], ['S/2,000 a S/3,000', 8]],
}
const INGRESO = { A: 'más de S/13,000 al mes', B1: 'entre S/8,000 y S/12,000 al mes', B2: 'entre S/5,000 y S/8,000 al mes' }
const ESTILO = {
  A: [['sofisticado: le gusta lo moderno, cuida su imagen y prueba marcas nuevas', 40], ['moderno: trabaja, busca realizarse y le importa el reconocimiento', 32], ['progresista: práctico, busca rendimiento por su plata', 13], ['formal: ordenado, prefiere lo conocido y seguro', 13], ['conservador: tradicional, la familia primero, compra lo de siempre', 2]],
  B1: [['sofisticado: le gusta lo moderno, cuida su imagen y prueba marcas nuevas', 22], ['moderno: trabaja, busca realizarse y le importa el reconocimiento', 32], ['progresista: práctico, busca rendimiento por su plata', 24], ['formal: ordenado, prefiere lo conocido y seguro', 18], ['conservador: tradicional, la familia primero, compra lo de siempre', 4]],
  B2: [['sofisticado: le gusta lo moderno, cuida su imagen y prueba marcas nuevas', 12], ['moderno: trabaja, busca realizarse y le importa el reconocimiento', 28], ['progresista: práctico, busca rendimiento por su plata', 32], ['formal: ordenado, prefiere lo conocido y seguro', 21], ['conservador: tradicional, la familia primero, compra lo de siempre', 7]],
}
const PRECIO_ACT = {
  A: [['paga más si el beneficio lo convence', 50], ['mira el precio por unidad y compara', 28], ['casi no mira el precio en snacks', 22]],
  B1: [['paga más si el beneficio lo convence', 38], ['mira el precio por unidad y compara', 42], ['casi no mira el precio en snacks', 20]],
  B2: [['paga más si el beneficio lo convence', 25], ['mira el precio por unidad y compara', 57], ['casi no mira el precio en snacks', 18]],
}
const OCUP = {
  A: { f: ['abogada en un estudio', 'gerente de marketing', 'médica pediatra no, dermatóloga', 'arquitecta con oficina propia', 'directora de finanzas', 'empresaria (importaciones)', 'consultora de recursos humanos', 'ingeniera industrial, gerente de operaciones', 'odontóloga con consultorio', 'gerente comercial en banca'], m: ['gerente general de una mediana empresa', 'abogado corporativo', 'médico traumatólogo', 'ingeniero civil, socio de constructora', 'gerente de tecnología', 'empresario (agroexportación)', 'director comercial', 'economista en un fondo de inversión'] },
  B1: { f: ['jefa de recursos humanos', 'contadora en una empresa minera', 'docente universitaria', 'ingeniera de sistemas', 'enfermera jefe en clínica', 'administradora de una clínica', 'psicóloga organizacional', 'jefa de compras', 'analista senior de riesgos', 'nutricionista no; comunicadora en agencia'], m: ['jefe de logística', 'ingeniero de sistemas', 'contador', 'jefe de ventas', 'administrador de empresas en banca', 'ingeniero mecánico', 'docente universitario', 'analista senior de planeamiento'] },
  B2: { f: ['profesora de primaria', 'asistente administrativa', 'ejecutiva de ventas de seguros', 'emprendedora con tienda online de ropa', 'contadora independiente', 'técnica de laboratorio', 'empleada pública (municipalidad)', 'psicóloga en un colegio', 'supervisora de call center', 'diseñadora gráfica freelance'], m: ['supervisor de operaciones', 'técnico en sistemas', 'vendedor de autos', 'empleado público (ministerio)', 'administrador de un restaurante', 'taxista por aplicativo con auto propio', 'contador independiente', 'jefe de almacén'] },
}
const N_F = ['Claudia', 'Mariana', 'Andrea', 'Paola', 'Carla', 'Lucía', 'Fiorella', 'Gabriela', 'Vanessa', 'Karina', 'Rocío', 'Patricia', 'Daniela', 'Milagros', 'Ximena', 'Valeria', 'Natalia', 'Silvia', 'Lorena', 'Giuliana', 'Carolina', 'Jimena', 'Úrsula', 'Katia', 'Melissa', 'Verónica', 'Mónica', 'Alejandra', 'Pamela', 'Rosario', 'Stephanie', 'Erika', 'Diana', 'Cecilia', 'Romina', 'Tatiana', 'Sandra', 'Maricarmen', 'Brenda', 'Antonella']
const N_M = ['Rodrigo', 'Javier', 'Diego', 'Luis', 'Carlos', 'Renzo', 'Miguel', 'José Luis', 'Fernando', 'Álvaro', 'Gonzalo', 'Martín', 'César', 'Eduardo', 'Christian', 'Jorge', 'Raúl', 'Sebastián', 'Óscar', 'Paolo', 'Ricardo', 'Hugo', 'Giancarlo', 'Marco', 'Daniel', 'Víctor', 'Juan Carlos', 'Enrique', 'Bruno', 'Aldo']
const N_AB = ['Rosa', 'Carmen', 'Elena', 'Gladys', 'Teresa', 'Norma', 'Luz', 'Betty', 'Julia', 'Marta']
const APE = ['Mendoza', 'Salazar', 'Ramírez', 'Torres', 'Vargas', 'Castillo', 'Rojas', 'Paredes', 'Chávez', 'Gutiérrez', 'Núñez', 'Delgado', 'Vega', 'Campos', 'Benavides', 'Aguirre', 'Zegarra', 'Cárdenas', 'Villanueva', 'Montoya', 'Espinoza', 'Herrera', 'Quiroz', 'Palacios', 'Arana', 'Bustamante', 'Carrasco', 'Flores', 'Guevara', 'Huamán', 'Luna', 'Morales', 'Ortiz', 'Ponce', 'Reyes', 'Sánchez', 'Tello', 'Ugarte', 'Valdivia', 'Zúñiga']
const H_M = ['Mateo', 'Thiago', 'Santiago', 'Liam', 'Sebastián', 'Joaquín', 'Benjamín', 'Gael', 'Lucas', 'Nicolás', 'Adrián', 'Emilio', 'Rafael', 'Ian', 'Salvador']
const H_F = ['Valentina', 'Camila', 'Luciana', 'Mía', 'Isabella', 'Emma', 'Catalina', 'Micaela', 'Alessia', 'Renata', 'Zoe', 'Ariana', 'Victoria', 'Julieta', 'Antonia']
const CARACTER = ['directa y práctica, va al grano', 'conversadora, cuenta anécdotas', 'reservada, responde corto', 'analítica, pide datos y compara', 'desconfiada de la publicidad, irónica', 'entusiasta, le gusta probar cosas', 'cansada y apurada, con poco tiempo para todo', 'cuidadosa y algo ansiosa con la salud del hijo']

function persona(nse, i) {
  const rol = pick([['mamá', 65], ['papá', 28], ['abuela', 4], ['tía', 3]])
  const fem = rol !== 'papá'
  const edad = rol === 'abuela' ? between(58, 68) : rol === 'tía' ? between(28, 40) : pick([[between(30, 34), 20], [between(35, 39), 40], [between(40, 45), 40]])
  const zona = pick(ZONA[nse])
  const banda = pick([['4-5', 25], ['6-8', 37.5], ['9-11', 37.5]])
  const edadHijo = banda === '4-5' ? between(4, 5) : banda === '6-8' ? between(6, 8) : between(9, 11)
  const nina = R() < 0.5
  const nHijos = pick([[1, 28], [2, 55], [3, 17]])
  const empleada = R() < ({ A: 0.6, B1: 0.4, B2: 0.2 })[nse]
  const abuelos = rol === 'abuela' ? true : R() < ({ A: 0.35, B1: 0.35, B2: 0.4 })[nse]
  const trabajo = rol === 'abuela' ? 'jubilada' : rol === 'papá' ? pick([['trabaja tiempo completo fuera de casa', 75], ['es independiente', 20], ['está entre trabajos', 5]]) : pick([['trabaja tiempo completo fuera de casa', 45], ['trabaja en modalidad híbrida o remota', 17], ['es independiente o emprendedora', 20], ['no tiene trabajo remunerado, se dedica a la casa', 18]])
  const sinTrabajo = trabajo.startsWith('no tiene') || trabajo === 'jubilada' || trabajo.startsWith('está entre')
  const ocup = sinTrabajo ? '' : one(OCUP[nse][fem ? 'f' : 'm']).replace(/^.* no[;,] /, '')
  const prepara = rol === 'papá'
    ? pick([['él mismo', 35], ['su esposa', empleada ? 30 : 50], ['la trabajadora del hogar', empleada ? 30 : 0], ['la abuela', abuelos ? 8 : 0], ['el niño elige y él arma', 7]])
    : rol === 'abuela' ? pick([['ella misma', 70], ['la mamá del niño la deja lista la noche anterior', 30]])
      : pick([['ella misma', empleada ? 42 : 62], ['la trabajadora del hogar, con sus indicaciones', empleada ? 33 : 0], ['su esposo', 9], ['la abuela', abuelos ? 7 : 0], ['el niño elige y ella arma', 14]])
  const canal = pick([['supermercado presencial (Wong, Vivanda, Plaza Vea o Metro)', 38], ['web o app de supermercado y delivery (Rappi, PedidosYa)', 22], ['mercado o bodega del barrio', nse === 'A' ? 6 : 17], ['tienda saludable o naturista', nse === 'A' ? 18 : 10], ['Instagram, WhatsApp o directo a marcas pequeñas', 8], ['el quiosco o la cafetería del colegio', 5]])
  const hierroBajo = R() < 0.2
  return {
    id: 'P' + String(i + 1).padStart(3, '0'), nse, rol, fem,
    nombre: (rol === 'abuela' ? one(N_AB) : fem ? one(N_F) : one(N_M)) + ' ' + one(APE),
    edad, distrito: pick(DIST[zona]), zona, trabajo, ocup,
    ingreso: INGRESO[nse], pension: pick(PENSION[nse]),
    nHijos, hijo: nina ? one(H_F) : one(H_M), nina, edadHijo, banda,
    empleada, abuelos, prepara, canal,
    quienDecide: pick([['la mamá', 60], ['el niño, porque si no le gusta no lo come', 20], ['el papá', 8], ['la trabajadora del hogar o la abuela', 7], ['lo que recomendó la nutricionista o el pediatra', 5]]),
    contenido: [R() < 0.65 ? 'fruta o verdura' : null, R() < 0.53 ? 'agua' : null, R() < 0.36 ? 'jugo o refresco natural' : null, R() < 0.40 ? 'sándwich' : null, R() < 0.35 ? 'una barra o snack envasado' : null].filter(Boolean),
    quiosco: R() < 0.4,
    gastoSnacks: pick([['hasta S/15 a la semana', 25], ['entre S/15 y S/30 a la semana', 40], ['más de S/30 a la semana', 35]]),
    octogono: pick([['dejó de comprar algunos productos con octógonos', 33], ['dejó de comprar casi todos los productos con octógonos', 28], ['dejó de comprar pocos productos por los octógonos', 22], ['los octógonos no cambiaron lo que compra', 17]]),
    quisquilloso: pick([['muy quisquilloso con la comida: rechaza texturas, colores y casi todo lo nuevo', 30], ['algo quisquilloso: come lo conocido y negocia lo nuevo', 45], ['poco quisquilloso: come casi de todo', 25]]),
    nuevos: pick([['curioso: si algo le llama la atención lo prueba primero', 20], ['cauto: espera la opinión de otras mamás, del pediatra o reseñas antes de comprar', 45], ['escéptico: desconfía de lo «saludable» envasado y de las promesas', 25], ['resistente: compra las marcas que ya conoce y casi nunca cambia', 10]]),
    precioAct: pick(PRECIO_ACT[nse]),
    descubre: pick([['Instagram', 30], ['recomendación directa del pediatra, nutricionista u otras mamás', 25], ['los grupos de WhatsApp del colegio', 15], ['TikTok', 15], ['Facebook', 5], ['lo que ve en la góndola del supermercado', 10]]),
    estilo: pick(ESTILO[nse]),
    hierroBajo,
    control: pick([['lleva al niño al pediatra una vez al año', 45], ['lo lleva al pediatra solo cuando se enferma', 35], ['tiene control cada seis meses y a veces nutricionista', 20]]),
    sangrecita: pick([['en su casa se come sangrecita de vez en cuando', 20], ['la comía de chico(a) pero ya no la prepara', 30], ['nunca la ha cocinado y le da algo de rechazo', 35], ['no la come por decisión propia (sabor, textura o dieta)', 15]]),
    caracter: one(CARACTER),
  }
}

// 380 perfiles; grupos homogéneos por NSE y edad del hijo
const todos = []
let k = 0
for (const nse of ['A', 'B1', 'B2']) for (let j = 0; j < N_NSE[nse]; j++) todos.push(persona(nse, k++))
const grupos = []
for (const nse of ['A', 'B1', 'B2']) {
  const ps = todos.filter((p) => p.nse === nse).sort((a, b) => a.edadHijo - b.edadHijo)
  const n = Math.round(ps.length / 10)
  for (let g = 0; g < n; g++) grupos.push({ nse, ps: ps.slice(Math.floor(g * ps.length / n), Math.floor((g + 1) * ps.length / n)) })
}
grupos.forEach((g, i) => { g.id = 'G' + String(i + 1).padStart(2, '0'); g.edades = g.ps[0].edadHijo + ' a ' + g.ps[g.ps.length - 1].edadHijo })

// ---------- textos ----------
const ficha = (p) => `Eres ${p.nombre}, ${p.rol} de ${p.hijo} (${p.edadHijo} años). Tienes ${p.edad} años y vives en ${p.distrito}, Lima.
- Hogar: nivel socioeconómico ${p.nse === 'A' ? 'A' : 'B'} (ingreso familiar ${p.ingreso}); ${p.nHijos === 1 ? 'hijo único' : p.nHijos + ' hijos en casa'}; colegio privado con pensión de ${p.pension}.
- Trabajo: ${p.trabajo}${p.ocup ? ' (' + p.ocup + ')' : ''}.
- Apoyo en casa: ${p.empleada ? 'hay trabajadora del hogar' : 'no hay trabajadora del hogar'}; ${p.abuelos ? 'los abuelos ayudan con frecuencia' : 'los abuelos casi no ayudan en el día a día'}.
- Lonchera: la prepara ${p.prepara}. Suele llevar: ${p.contenido.length ? p.contenido.join(', ') : 'algo rápido, lo que haya'}. ${p.quiosco ? 'A veces el niño lleva plata para el quiosco.' : 'No usa el quiosco del colegio.'} Lo que va de snack lo decide ${p.quienDecide}.
- Compras: sobre todo en ${p.canal}. En snacks envasados para la lonchera gasta ${p.gastoSnacks}. Con el precio: ${p.precioAct}. Con los octógonos: ${p.octogono}.
- ${p.hijo} es ${p.quisquilloso.replace('quisquilloso', p.nina ? 'quisquillosa' : 'quisquilloso')}.
- Salud: ${p.control}. ${p.hierroBajo ? 'Alguna vez le dijeron que ' + p.hijo + ' tenía el hierro o la hemoglobina baja y le dieron suplemento un tiempo.' : 'Nunca le han dicho que ' + p.hijo + ' tenga el hierro bajo.'}
- Sangrecita: ${p.sangrecita}.
- Ante productos nuevos eres ${p.nuevos}. Te enteras de productos para niños sobre todo por ${p.descubre}.
- Forma de ser: ${p.estilo}. Al hablar eres ${p.caracter}.`

const REGLAS = `Cómo responder:
- Eres esa persona, no un asistente. Habla en primera persona, como hablas en Lima, sin tecnicismos ni lenguaje de publicidad.
- No eres experta en nutrición. Puedes no saber, dudar o contradecirte. Lo que respondes sale de tu vida: tu tiempo, tu plata, tu hijo.
- No tienes que quedar bien con nadie ni ser amable con ninguna marca. Si algo te da igual, te parece caro o no lo comprarías, dilo tal cual. No inventes entusiasmo.
- Cuenta lo que haces de verdad, no lo que «debería» hacerse.
- Respuestas cortas: 1 a 3 oraciones por pregunta.
- No uses herramientas, no busques archivos ni información: responde directamente con tu respuesta final.`

const PREOCUP = ['que no coma lo que le mando', 'el azúcar', 'los ultraprocesados y los octógonos', 'la falta de tiempo en la mañana', 'que se aburre de lo mismo', 'que le falte hierro o tenga anemia', 'que le falten proteínas', 'su peso o su talla', 'alergias o intolerancias', 'el precio de lo saludable', 'que quiera lo que llevan sus amigos', 'su energía y concentración en clase']
const R1_SCHEMA = { type: 'object', properties: {
  manana: { type: 'string', description: 'Cómo es una mañana de colegio en tu casa y cómo se arma la lonchera' },
  lonchera: { type: 'string', description: 'Qué va en la lonchera en una semana normal; marcas de lo envasado y cuánto pagas' },
  preferiria_no_mandar: { type: 'string', description: 'Qué mandas que preferirías no mandar y por qué lo mandas igual' },
  vuelve_sin_comer: { type: 'string', description: 'Qué vuelve sin comer' },
  cambiaria: { type: 'string', description: 'La única cosa que cambiarías de la lonchera o de cómo come tu hijo' },
  preocupa_de_verdad: { type: 'string', description: 'Qué te preocupa de verdad de su alimentación o salud' },
  no_preocupa: { type: 'string', description: 'Qué no te preocupa aunque todos digan que debería' },
  ultimo_snack_saludable: { type: 'string', description: 'El último snack «saludable» para niños que compraste: cuál, dónde, cuánto, y qué pasó' },
  top3: { type: 'array', items: { type: 'string', enum: PREOCUP }, minItems: 3, maxItems: 3, description: 'Tus tres preocupaciones, de mayor a menor' },
  hierro_ultima_vez: { type: 'string', enum: ['nunca', 'hace más de un año', 'en el último año', 'en el último mes', 'esta semana'] },
  hierro_contexto: { type: 'string', description: 'En qué situación pensaste en el hierro de tu hijo esa última vez (o por qué nunca)' },
  cita: { type: 'string', description: 'La frase que más te representa de todo lo que dijiste, tal como la dirías en voz alta' },
}, required: ['manana', 'lonchera', 'preferiria_no_mandar', 'vuelve_sin_comer', 'cambiaria', 'preocupa_de_verdad', 'no_preocupa', 'ultimo_snack_saludable', 'top3', 'hierro_ultima_vez', 'hierro_contexto', 'cita'] }

const r1Prompt = (p) => `${ficha(p)}

Estás en un focus group con otros papás y mamás con hijos en colegio privado. Es noviembre de 2026. La moderadora todavía no ha mostrado ningún producto: solo quiere conocer tu día a día.

${REGLAS}

Preguntas de la moderadora:
1. Cuéntame cómo es una mañana de colegio en tu casa y cómo se arma la lonchera.
2. ¿Qué va en la lonchera de ${p.hijo} en una semana normal? Si hay cosas envasadas, dime la marca y más o menos cuánto pagas.
3. ¿Qué mandas que preferirías no mandar? ¿Por qué lo mandas igual?
4. ¿Qué vuelve sin comer?
5. Si pudieras cambiar una sola cosa de la lonchera o de cómo come ${p.hijo}, ¿cuál sería?
6. De la alimentación y la salud de ${p.hijo}: ¿qué te preocupa de verdad? ¿Y qué no te preocupa, aunque todos digan que debería?
7. ¿Cuál fue el último snack «saludable» para niños que compraste? ¿Dónde, cuánto costó y qué pasó?
8. De esta lista, elige tus tres preocupaciones, de mayor a menor: ${PREOCUP.join('; ')}.
9. ¿Cuándo fue la última vez que pensaste en el hierro de ${p.hijo}? ¿En qué situación?`

const INVESTIGADORA = `Eres Lucía Herrera Maldonado, investigadora cualitativa con 18 años moderando focus groups de consumo masivo y alimentación infantil en Lima, sobre todo con familias de nivel A y B. Tu oficio: no opinas ni vendes; buscas la tensión entre lo que la gente dice y lo que hace; desconfías de la respuesta socialmente correcta; repreguntas por la conducta concreta («¿qué hiciste la última vez?»); distingues un dolor real (se repite, cuesta plata o tiempo, genera emoción) de una preocupación declarada. Escribes claro, en español de Perú, sin jerga. No uses herramientas ni leas archivos: trabaja solo con lo que tienes aquí.`

const corta = (p) => `${p.id} ${p.nombre.split(' ')[0]} (${p.rol}, ${p.edad}, ${p.distrito}, NSE ${p.nse}, ${p.hijo} de ${p.edadHijo}; ${p.nuevos.split(':')[0]}; hijo ${p.quisquilloso.split(':')[0]})`

const MOD_SCHEMA = { type: 'object', properties: {
  resumen: { type: 'string', description: 'Lo que salió en la primera parte, en 90 a 130 palabras, para leerlo al grupo: sin juicios, con las diferencias entre participantes' },
  frases: { type: 'array', maxItems: 6, items: { type: 'object', properties: { quien: { type: 'string' }, frase: { type: 'string' } }, required: ['quien', 'frase'] }, description: 'Hasta 6 frases textuales de participantes que marcaron la conversación (incluye posturas opuestas)' },
  repreguntas: { type: 'array', minItems: 2, maxItems: 2, items: { type: 'string' }, description: 'Dos repreguntas para todo el grupo que busquen la conducta real detrás de lo dicho. No menciones ningún producto ni marca nueva.' },
}, required: ['resumen', 'frases', 'repreguntas'] }

const modPrompt = (g, r1) => `${INVESTIGADORA}

Acabas de terminar la primera parte (hábitos y dolores, sin mostrar producto) del grupo ${g.id}: ${g.ps.length} participantes de nivel ${g.nse}, con hijos de ${g.edades} años.

Participantes y lo que dijeron:
${g.ps.map((p, i) => r1[i] ? `### ${corta(p)}\n- Mañana: ${r1[i].manana}\n- Lonchera: ${r1[i].lonchera}\n- Preferiría no mandar: ${r1[i].preferiria_no_mandar}\n- Vuelve sin comer: ${r1[i].vuelve_sin_comer}\n- Cambiaría: ${r1[i].cambiaria}\n- Le preocupa: ${r1[i].preocupa_de_verdad}\n- No le preocupa: ${r1[i].no_preocupa}\n- Último snack saludable: ${r1[i].ultimo_snack_saludable}\n- Hierro: ${r1[i].hierro_ultima_vez}. ${r1[i].hierro_contexto}\n- Frase: «${r1[i].cita}»` : `### ${corta(p)}\n(no respondió)`).join('\n')}

Prepara lo que dirás antes de la segunda parte: un resumen para leerle al grupo, las frases que marcaron la conversación y dos repreguntas.`

const CONCEPTO = `LÁMINA 1 · EL PRODUCTO
AndiBite · mini brownie para la lonchera.
- Un brownie pequeño de chocolate, de 20 g, en bolsita individual. No necesita refrigeración.
- Cada brownie aporta 1.9 mg de hierro, medido en laboratorio en cada lote (el resultado se ve escaneando el código QR del envase).
- Sin octógonos.
- Tres sabores: Chispa (chocolate con chispas), Andi (chocolate, plátano, canela y cañihua) y Lúcu (chocolate y lúcuma).
- Se vende suelto, en pack de 6 y en pack de 12.
No lo has probado. El fabricante dice que sabe a un brownie de chocolate normal.

LÁMINA 2 · DE DÓNDE SALE EL HIERRO
El hierro viene de sangrecita de res deshidratada, en polvo, mezclada en la masa. El fabricante afirma que no se nota ni en el sabor ni en el olor. Lleva también cañihua y cacao peruanos.

LÁMINA 3 · LA MARCA Y EL EMPAQUE
Se llama AndiBite. El empaque es una bolsa que se para sola, de color kraft (papel marrón claro), con la ilustración de un niño andino de unos 7 años, Andi, con chullo rojo y trenzas, sonriendo mientras muerde un brownie, con montañas de fondo. Arriba, en letra a mano: «Lo bueno también puede ser delicioso». Debajo del nombre: «Mini Brownie Nutritivo» y una cinta que dice «Sangrecita + Cañihua + Cacao». Abajo, tres íconos: «Fuente de hierro», «Buena fuente de proteína», «Con ingredientes andinos». Atrás: «De nuestra tierra, a su lonchera», «Orgullo peruano» y el código QR.

LÁMINA 4 · CINCO FRASES
A. «Dulce para ellos. Tranquilidad para ti.»
B. «Hierro sin pelear cada mañana.»
C. «El único dulce de la lonchera al que le dices que sí sin culpa.»
D. «Todos tienen un truco. AndiBite es el truco que ya no necesita cuento.»
E. «Lo bueno también puede ser delicioso.»

LÁMINA 5 · LA APP Y DÓNDE SE COMPRA
El código QR abre una app gratuita: cuánto hierro lleva tu hijo hoy, un plan de loncheras para la semana, volver a pedir por WhatsApp y juegos cortos para el niño (con clave de papá o mamá).
Se compraría en stands con degustación en centros comerciales (Jockey Plaza, Real Plaza Salaverry), por WhatsApp con delivery, en algunos colegios y en tiendas naturistas.

LÁMINA 6 · EL PRECIO (lo último)
Para el pack de 6 brownies (120 g en total) la moderadora no te dice el precio: te pregunta cuánto pagarías tú.`

const P15 = { type: 'integer', minimum: 1, maximum: 5 }
const R2_SCHEMA = { type: 'object', properties: {
  coincide_con: { type: 'string', description: 'De lo que se dijo en tu grupo: con qué coincides y con qué no' },
  repreguntas: { type: 'string', description: 'Tu respuesta a las dos repreguntas de la moderadora' },
  primera_reaccion: { type: 'string', description: 'Lo primero que pensaste al ver solo la lámina 1, antes de saber de dónde sale el hierro' },
  gusta: { type: 'string', description: 'Qué te gusta de la lámina 1, si algo' },
  dudas: { type: 'string', description: 'Qué no te convence o qué dudas tienes del producto' },
  credibilidad_hierro: { ...P15, description: 'Qué tanto le crees a lo del hierro medido (1 nada, 5 totalmente)' },
  sangrecita: { type: 'string', enum: ['me da más confianza', 'me da igual', 'me genera duda pero lo probaría', 'me genera rechazo'] },
  sangrecita_porque: { type: 'string' },
  decirle_al_hijo: { type: 'string', enum: ['sí', 'no', 'depende'], description: '¿Le dirías a tu hijo que lleva sangrecita?' },
  nombre_asocia: { type: 'string', description: 'A qué te suena el nombre AndiBite' },
  nombre_agrado: { ...P15 },
  empaque_opinion: { type: 'string', description: 'Qué te transmite el empaque descrito; qué cambiarías' },
  empaque_agrado: { ...P15 },
  frase_mas: { type: 'string', enum: ['A', 'B', 'C', 'D', 'E'] },
  frase_menos: { type: 'string', enum: ['A', 'B', 'C', 'D', 'E'] },
  frase_porque: { type: 'string' },
  app: { type: 'string', enum: ['la usaría seguido', 'la abriría una vez por curiosidad', 'no me interesa'] },
  canal: { type: 'string', description: 'Dónde lo comprarías tú, si lo compraras' },
  precio_muy_barato: { type: 'number', description: 'Precio (S/) del pack de 6 tan bajo que dudarías de la calidad' },
  precio_buena_compra: { type: 'number', description: 'Precio (S/) del pack de 6 que te parecería una buena compra' },
  precio_caro: { type: 'number', description: 'Precio (S/) del pack de 6 que ya te parece caro pero lo pensarías' },
  precio_demasiado: { type: 'number', description: 'Precio (S/) del pack de 6 tan alto que ni lo consideras' },
  intencion: { ...P15, description: 'Si estuviera al precio que tú llamas «buena compra»: qué tan probable es que lo compres (1 seguro que no, 5 seguro que sí)' },
  formato: { type: 'string', enum: ['unidad suelta para probar', 'pack de 6', 'pack de 12', 'ninguno'] },
  reemplaza: { type: 'string', description: 'Qué dejarías de mandar en la lonchera si entra esto (o «nada»)' },
  condicion: { type: 'string', description: 'Qué tendría que pasar para que lo compres, o para que lo vuelvas a comprar' },
  cita: { type: 'string', description: 'La frase que más te representa de esta segunda parte, tal como la dirías' },
}, required: ['coincide_con', 'repreguntas', 'primera_reaccion', 'gusta', 'dudas', 'credibilidad_hierro', 'sangrecita', 'sangrecita_porque', 'decirle_al_hijo', 'nombre_asocia', 'nombre_agrado', 'empaque_opinion', 'empaque_agrado', 'frase_mas', 'frase_menos', 'frase_porque', 'app', 'canal', 'precio_muy_barato', 'precio_buena_compra', 'precio_caro', 'precio_demasiado', 'intencion', 'formato', 'reemplaza', 'condicion', 'cita'] }

const r2Prompt = (p, r1, mod) => `${ficha(p)}

Sigues en el focus group (es noviembre de 2026). Esto dijiste tú en la primera parte:
- Lonchera: ${r1.lonchera}
- Preferirías no mandar: ${r1.preferiria_no_mandar}
- Vuelve sin comer: ${r1.vuelve_sin_comer}
- Te preocupa: ${r1.preocupa_de_verdad}
- Hierro: ${r1.hierro_ultima_vez}. ${r1.hierro_contexto}

La moderadora resume lo que dijo el grupo:
${mod.resumen}
Frases de otros participantes:
${mod.frases.map((f) => `- ${f.quien}: «${f.frase}»`).join('\n')}

Repreguntas de la moderadora para todos:
1. ${mod.repreguntas[0]}
2. ${mod.repreguntas[1]}

Ahora la moderadora muestra unas láminas, una por una:

${CONCEPTO}

${REGLAS}
- Mantén coherencia con lo que dijiste en la primera parte y con quién eres: una persona escéptica sigue escéptica; a quien el precio le importa, le importa.
- Los precios que des deben ser los tuyos, pensando en lo que hoy pagas por snacks para la lonchera y en que son 6 brownies de 20 g. Los cuatro precios deben ir de menor a mayor. Nadie te ha dicho cuánto cuesta.

Responde: con qué coincides de tu grupo, las dos repreguntas, y tu reacción a cada lámina.`

const GRUPO_SCHEMA = { type: 'object', properties: {
  dolores: { type: 'array', maxItems: 5, items: { type: 'object', properties: { dolor: { type: 'string' }, cuantos: { type: 'integer', description: 'Cuántos participantes lo tienen de verdad' }, intensidad: { ...P15 }, evidencia: { type: 'string', description: 'Conducta concreta que lo demuestra' }, cita: { type: 'string', description: 'Frase textual con el nombre de quien la dijo' } }, required: ['dolor', 'cuantos', 'intensidad', 'evidencia', 'cita'] }, description: 'Dolores reales del grupo, del más fuerte al más débil' },
  necesidades: { type: 'array', maxItems: 4, items: { type: 'string' }, description: 'Necesidades no resueltas, dichas como «necesito…»' },
  lugar_del_hierro: { type: 'string', description: 'Qué lugar ocupa el hierro en este grupo: quién piensa en él, cuándo y por qué; quién no' },
  reaccion_producto: { type: 'string', description: 'Cómo reaccionó el grupo al producto: qué atrajo, qué frenó, y si cambió con la sangrecita' },
  barreras: { type: 'array', maxItems: 4, items: { type: 'string' } },
  marca: { type: 'string', description: 'Nombre, personaje y empaque: qué funcionó y qué no' },
  frase_y_porque: { type: 'string', description: 'Qué frase conectó más, cuál menos, y la razón de fondo' },
  precio: { type: 'string', description: 'Qué dijo el grupo del precio y con qué lo compara' },
  quien_compra: { type: 'string', description: 'El perfil del que sí compraría y el del que no, dentro de este grupo' },
  sorpresa: { type: 'string', description: 'Lo que no esperabas' },
  verbatims: { type: 'array', maxItems: 5, items: { type: 'string' }, description: 'Frases textuales con nombre, las más reveladoras' },
}, required: ['dolores', 'necesidades', 'lugar_del_hierro', 'reaccion_producto', 'barreras', 'marca', 'frase_y_porque', 'precio', 'quien_compra', 'sorpresa', 'verbatims'] }

const grupoPrompt = (g, r1, mod, r2) => `${INVESTIGADORA}

Terminaste el grupo ${g.id}: ${g.ps.length} participantes de nivel ${g.nse}, con hijos de ${g.edades} años. Escribe tu informe del grupo. Recuerda que en un focus la gente tiende a ser amable con lo que se le muestra: pesa más la conducta que cuentan que el agrado que declaran.

PRIMERA PARTE (sin producto)
${g.ps.map((p, i) => r1[i] ? `### ${corta(p)}\nPreferiría no mandar: ${r1[i].preferiria_no_mandar} | Vuelve: ${r1[i].vuelve_sin_comer} | Cambiaría: ${r1[i].cambiaria} | Le preocupa: ${r1[i].preocupa_de_verdad} | No le preocupa: ${r1[i].no_preocupa} | Top 3: ${r1[i].top3.join(', ')} | Hierro: ${r1[i].hierro_ultima_vez} (${r1[i].hierro_contexto}) | «${r1[i].cita}»` : '').join('\n')}

Tus repreguntas: 1) ${mod.repreguntas[0]} 2) ${mod.repreguntas[1]}

SEGUNDA PARTE (producto, marca, frases, precio)
${g.ps.map((p, i) => r2[i] ? `### ${p.id} ${p.nombre.split(' ')[0]}\nRepreguntas: ${r2[i].repreguntas} | Coincide: ${r2[i].coincide_con} | Primera reacción: ${r2[i].primera_reaccion} | Gusta: ${r2[i].gusta} | Dudas: ${r2[i].dudas} | Cree en el hierro: ${r2[i].credibilidad_hierro}/5 | Sangrecita: ${r2[i].sangrecita} (${r2[i].sangrecita_porque}); decirle al hijo: ${r2[i].decirle_al_hijo} | Nombre ${r2[i].nombre_agrado}/5: ${r2[i].nombre_asocia} | Empaque ${r2[i].empaque_agrado}/5: ${r2[i].empaque_opinion} | Frase que más: ${r2[i].frase_mas}; que menos: ${r2[i].frase_menos} (${r2[i].frase_porque}) | App: ${r2[i].app} | Compraría en: ${r2[i].canal} | Precios S/: ${r2[i].precio_muy_barato} / ${r2[i].precio_buena_compra} / ${r2[i].precio_caro} / ${r2[i].precio_demasiado}; intención a su precio de buena compra: ${r2[i].intencion}/5 | Formato: ${r2[i].formato} | Reemplaza: ${r2[i].reemplaza} | Condición: ${r2[i].condicion} | «${r2[i].cita}»` : '').join('\n')}`

// ---------- ejecución ----------
const desde = (args && args.desde) || 0
const hasta = (args && args.hasta) || grupos.length
const tanda = grupos.slice(desde, hasta)
log(`${todos.length} perfiles en ${grupos.length} grupos; esta tanda: grupos ${desde + 1} a ${hasta} (${tanda.reduce((s, g) => s + g.ps.length, 0)} perfiles)`)

const out = await pipeline(
  tanda,
  async (g) => ({ r1: await parallel(g.ps.map((p) => () => agent(r1Prompt(p), { label: `${g.id} ${p.id} ronda 1`, phase: 'Ronda 1', schema: R1_SCHEMA, model: 'haiku', effort: 'low' }))) }),
  async (s, g) => {
    if (s.r1.filter(Boolean).length < 4) throw new Error('grupo sin respuestas')
    const mod = await agent(modPrompt(g, s.r1), { label: `${g.id} moderación`, phase: 'Moderación', schema: MOD_SCHEMA, model: 'sonnet', effort: 'low' })
    if (!mod) throw new Error('sin moderación')
    return { ...s, mod }
  },
  async (s, g) => ({ ...s, r2: await parallel(g.ps.map((p, i) => () => s.r1[i] ? agent(r2Prompt(p, s.r1[i], s.mod), { label: `${g.id} ${p.id} ronda 2`, phase: 'Ronda 2', schema: R2_SCHEMA, model: 'haiku', effort: 'low' }) : Promise.resolve(null))) }),
  async (s, g) => ({ ...s, informe: await agent(grupoPrompt(g, s.r1, s.mod, s.r2), { label: `${g.id} informe`, phase: 'Informe de grupo', schema: GRUPO_SCHEMA, model: 'sonnet', effort: 'medium' }) }),
)

const resumen = tanda.map((g, i) => ({ grupo: g.id, nse: g.nse, edades: g.edades, n: g.ps.length, r1: out[i] ? out[i].r1.filter(Boolean).length : 0, r2: out[i] && out[i].r2 ? out[i].r2.filter(Boolean).length : 0, informe: !!(out[i] && out[i].informe) }))
if (args && args.completo) return { resumen, datos: tanda.map((g, i) => ({ grupo: g.id, nse: g.nse, edades: g.edades, personas: g.ps, ...(out[i] || {}) })) }
return { resumen }
