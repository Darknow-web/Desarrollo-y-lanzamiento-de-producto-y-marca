"""Focus groups simulados de AndiBite: junta las tandas y saca las tablas.

Uso: python3 analizar.py salida1.json salida2.json ...   (los JSON que devuelve cada tanda)
Escribe datos/personas.json, datos/respuestas.json, datos/informes-grupo.json y RESULTADOS-cuantitativos.md
"""
import json, os, re, statistics, sys
from collections import Counter, defaultdict

AQUI = os.path.dirname(os.path.abspath(__file__))
grupos = []
for ruta in sys.argv[1:]:
    d = json.load(open(ruta, encoding='utf-8'))
    grupos += (d.get('result') or d)['datos']
grupos.sort(key=lambda g: g['grupo'])

filas = []          # una fila por participante con sus dos rondas
for g in grupos:
    r1s, r2s = g.get('r1') or [], g.get('r2') or []
    for i, p in enumerate(g['personas']):
        r1 = r1s[i] if i < len(r1s) else None
        r2 = r2s[i] if i < len(r2s) else None
        filas.append({'grupo': g['grupo'], 'p': p, 'r1': r1, 'r2': r2})

os.makedirs(os.path.join(AQUI, 'datos'), exist_ok=True)
def guardar(nombre, obj):
    json.dump(obj, open(os.path.join(AQUI, 'datos', nombre), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
guardar('personas.json', [dict(f['p'], grupo=f['grupo']) for f in filas])
guardar('respuestas.json', [{'id': f['p']['id'], 'grupo': f['grupo'], 'ronda1': f['r1'], 'ronda2': f['r2']} for f in filas])
guardar('informes-grupo.json', [{'grupo': g['grupo'], 'nse': g['nse'], 'edades_hijos': g['edades'], 'n': len(g['personas']), 'moderacion': g.get('mod'), 'informe': g.get('informe')} for g in grupos])

ok1 = [f for f in filas if f['r1']]
ok2 = [f for f in filas if f['r1'] and f['r2']]
SEG = [('Todos', lambda f: True), ('Nivel A', lambda f: f['p']['nse'] == 'A'), ('Nivel B1', lambda f: f['p']['nse'] == 'B1'), ('Nivel B2', lambda f: f['p']['nse'] == 'B2')]

def pct(n, d): return f'{100 * n / d:.0f} %' if d else '–'
def tabla(titulo, base, clave, orden=None, nota=''):
    """Distribución de una respuesta cerrada, por nivel."""
    out = [f'### {titulo}', '']
    if nota: out += [nota, '']
    vals = orden or [v for v, _ in Counter(clave(f) for f in base).most_common()]
    out.append('| Respuesta | ' + ' | '.join(f'{n} (n={sum(1 for f in base if s(f))})' for n, s in SEG) + ' |')
    out.append('|---|' + '---:|' * len(SEG))
    for v in vals:
        out.append(f'| {v} | ' + ' | '.join(pct(sum(1 for f in base if s(f) and clave(f) == v), sum(1 for f in base if s(f))) for _, s in SEG) + ' |')
    return out + ['']
def media(titulo, base, clave):
    return f'| {titulo} | ' + ' | '.join((f'{statistics.mean(clave(f) for f in base if s(f)):.1f}' if any(s(f) for f in base) else '–') for _, s in SEG) + ' |'
def top2(titulo, base, clave):
    return f'| {titulo} | ' + ' | '.join(pct(sum(1 for f in base if s(f) and clave(f) >= 4), sum(1 for f in base if s(f))) for _, s in SEG) + ' |'

L = ['# Focus groups simulados · resultados en números', '',
     '> **Simulación.** Estas cifras salen de perfiles sintéticos interpretados por un modelo de IA, no de personas. Sirven para ordenar hipótesis y preparar la investigación real; no son evidencia de mercado ni se pueden citar como resultado de focus groups.', '',
     f'Perfiles: {len(filas)} en {len(grupos)} grupos. Respondieron la primera ronda {len(ok1)} y las dos rondas {len(ok2)}.', '',
     '| Nivel | Perfiles | Mamás | Papás | Otros cuidadores |', '|---|---:|---:|---:|---:|']
for n, s in SEG:
    b = [f for f in filas if s(f)]
    L.append(f"| {n} | {len(b)} | {sum(1 for f in b if f['p']['rol'] == 'mamá')} | {sum(1 for f in b if f['p']['rol'] == 'papá')} | {sum(1 for f in b if f['p']['rol'] not in ('mamá', 'papá'))} |")
L += ['', '## Primera ronda · hábitos y dolores (sin mostrar el producto)', '']

# Preocupaciones
L += ['### Preocupación número uno', '', '| Preocupación | ' + ' | '.join(n for n, _ in SEG) + ' | En su top 3 (todos) |', '|---|' + '---:|' * (len(SEG) + 1)]
c1 = Counter(f['r1']['top3'][0] for f in ok1)
c3 = Counter(x for f in ok1 for x in set(f['r1']['top3']))
for v, _ in c3.most_common():
    L.append(f'| {v} | ' + ' | '.join(pct(sum(1 for f in ok1 if s(f) and f['r1']['top3'][0] == v), sum(1 for f in ok1 if s(f))) for _, s in SEG) + f' | {pct(c3[v], len(ok1))} |')
L.append('')

# Hierro
ABIERTAS = ['manana', 'lonchera', 'preferiria_no_mandar', 'vuelve_sin_comer', 'cambiaria', 'preocupa_de_verdad', 'no_preocupa', 'ultimo_snack_saludable', 'cita']
RX = re.compile(r'hierro|anemia|hemoglobina', re.I)
def espontaneo(f): return any(RX.search(f['r1'].get(k) or '') for k in ABIERTAS)
def preocupa_hierro(f): return bool(RX.search(f['r1'].get('preocupa_de_verdad') or ''))
L += ['### El lugar del hierro', '', '| Indicador | ' + ' | '.join(n for n, _ in SEG) + ' |', '|---|' + '---:|' * len(SEG)]
for t, fn in [('Nombra el hierro o la anemia sin que se le pregunte', espontaneo), ('Lo nombra como algo que le preocupa de verdad', preocupa_hierro),
              ('Lo pone en su top 3 de preocupaciones', lambda f: 'que le falte hierro o tenga anemia' in f['r1']['top3']),
              ('Lo pone como preocupación número uno', lambda f: f['r1']['top3'][0] == 'que le falte hierro o tenga anemia')]:
    L.append(f'| {t} | ' + ' | '.join(pct(sum(1 for f in ok1 if s(f) and fn(f)), sum(1 for f in ok1 if s(f))) for _, s in SEG) + ' |')
L.append('')
L += tabla('¿Cuándo fue la última vez que pensó en el hierro de su hijo?', ok1, lambda f: f['r1']['hierro_ultima_vez'], ['nunca', 'hace más de un año', 'en el último año', 'en el último mes', 'esta semana'])
con = [f for f in ok1 if f['p']['hierroBajo']]; sin = [f for f in ok1 if not f['p']['hierroBajo']]
L += ['Según el antecedente del hijo (dato asignado al perfil: a 1 de cada 5 le dijeron alguna vez que tenía el hierro bajo):', '',
      '| | Con antecedente (n=%d) | Sin antecedente (n=%d) |' % (len(con), len(sin)), '|---|---:|---:|',
      '| Hierro en su top 3 | %s | %s |' % (pct(sum(1 for f in con if 'que le falte hierro o tenga anemia' in f['r1']['top3']), len(con)), pct(sum(1 for f in sin if 'que le falte hierro o tenga anemia' in f['r1']['top3']), len(sin))),
      '| Nunca pensó en el hierro | %s | %s |' % (pct(sum(1 for f in con if f['r1']['hierro_ultima_vez'] == 'nunca'), len(con)), pct(sum(1 for f in sin if f['r1']['hierro_ultima_vez'] == 'nunca'), len(sin))), '']

# Ronda 2
L += ['## Segunda ronda · producto, marca, frases y precio', '']
L += ['### Notas de 1 a 5', '', '| Indicador | ' + ' | '.join(n for n, _ in SEG) + ' |', '|---|' + '---:|' * len(SEG),
      media('Le cree a lo del hierro medido (promedio)', ok2, lambda f: f['r2']['credibilidad_hierro']),
      top2('Le cree (4 o 5)', ok2, lambda f: f['r2']['credibilidad_hierro']),
      media('Agrado del nombre AndiBite (promedio)', ok2, lambda f: f['r2']['nombre_agrado']),
      top2('Nombre: 4 o 5', ok2, lambda f: f['r2']['nombre_agrado']),
      media('Agrado del empaque (promedio)', ok2, lambda f: f['r2']['empaque_agrado']),
      top2('Empaque: 4 o 5', ok2, lambda f: f['r2']['empaque_agrado'])]
if ok2 and 'intencion' in ok2[0]['r2']:
    L += [media('Intención de compra a su propio precio de «buena compra» (promedio)', [f for f in ok2 if 'intencion' in f['r2']], lambda f: f['r2']['intencion']),
          top2('Intención 4 o 5 a su propio precio', [f for f in ok2 if 'intencion' in f['r2']], lambda f: f['r2']['intencion'])]
L.append('')
L += tabla('Al saber que el hierro viene de sangrecita', ok2, lambda f: f['r2']['sangrecita'], ['me da más confianza', 'me da igual', 'me genera duda pero lo probaría', 'me genera rechazo'])
L += tabla('¿Le diría al hijo que lleva sangrecita?', ok2, lambda f: f['r2']['decirle_al_hijo'], ['sí', 'depende', 'no'])
FR = {'A': 'A · «Dulce para ellos. Tranquilidad para ti.»', 'B': 'B · «Hierro sin pelear cada mañana.»', 'C': 'C · «El único dulce de la lonchera al que le dices que sí sin culpa.»', 'D': 'D · «Todos tienen un truco. AndiBite es el truco que ya no necesita cuento.»', 'E': 'E · «Lo bueno también puede ser delicioso.»'}
L += tabla('La frase que más les llega', ok2, lambda f: FR[f['r2']['frase_mas']], list(FR.values()))
L += tabla('La frase que menos les llega', ok2, lambda f: FR[f['r2']['frase_menos']], list(FR.values()))
L += tabla('La app', ok2, lambda f: f['r2']['app'], ['la usaría seguido', 'la abriría una vez por curiosidad', 'no me interesa'])
L += tabla('Formato con el que empezaría', ok2, lambda f: f['r2']['formato'], ['unidad suelta para probar', 'pack de 6', 'pack de 12', 'ninguno'])

# Precio
def med(base, k): return statistics.median(f['r2'][k] for f in base) if base else 0
L += ['### Precio del pack de 6 (nadie les dijo el precio; cada uno dio los suyos)', '', '| Mediana en soles | ' + ' | '.join(n for n, _ in SEG) + ' |', '|---|' + '---:|' * len(SEG)]
for t, k in [('Tan barato que dudaría', 'precio_muy_barato'), ('Buena compra', 'precio_buena_compra'), ('Caro, pero lo pensaría', 'precio_caro'), ('Tan caro que ni lo considera', 'precio_demasiado')]:
    L.append(f'| {t} | ' + ' | '.join(f'{med([f for f in ok2 if s(f)], k):.0f}' for _, s in SEG) + ' |')
L += ['', '| Frente al precio real de S/27.90 | ' + ' | '.join(n for n, _ in SEG) + ' |', '|---|' + '---:|' * len(SEG)]
for t, fn in [('Les parece buena compra (su «buena compra» es S/27.90 o más)', lambda r: r['precio_buena_compra'] >= 27.9),
              ('Caro pero lo pensarían (entre su «buena compra» y su «caro»)', lambda r: r['precio_buena_compra'] < 27.9 <= r['precio_caro']),
              ('Entre «caro» y «demasiado caro»', lambda r: r['precio_caro'] < 27.9 < r['precio_demasiado']),
              ('Fuera de consideración (su «demasiado caro» es S/27.90 o menos)', lambda r: r['precio_demasiado'] <= 27.9)]:
    L.append(f'| {t} | ' + ' | '.join(pct(sum(1 for f in ok2 if s(f) and fn(f['r2'])), sum(1 for f in ok2 if s(f))) for _, s in SEG) + ' |')
L += ['', 'Qué parte lo consideraría a cada precio (su «demasiado caro» está por encima):', '', '| Precio del pack de 6 | ' + ' | '.join(n for n, _ in SEG) + ' |', '|---|' + '---:|' * len(SEG)]
for precio in (14.9, 17.9, 19.9, 22.9, 24.9, 27.9, 29.9, 34.9):
    L.append(f'| S/{precio:.2f} | ' + ' | '.join(pct(sum(1 for f in ok2 if s(f) and f['r2']['precio_demasiado'] > precio and f['r2']['precio_muy_barato'] < precio), sum(1 for f in ok2 if s(f))) for _, s in SEG) + ' |')
L.append('')

# Cruces por tipo de perfil
def cruce(titulo, clave, cats):
    out = [f'### {titulo}', '', '| Perfil | n | Hierro en top 3 | Sangrecita: rechazo | Empaque 4-5 | Intención 4-5 | S/27.90 dentro de su rango |', '|---|---:|---:|---:|---:|---:|---:|']
    for c in cats:
        b = [f for f in ok2 if clave(f) == c]
        if not b: continue
        out.append(f"| {c} | {len(b)} | {pct(sum(1 for f in b if 'que le falte hierro o tenga anemia' in f['r1']['top3']), len(b))} | {pct(sum(1 for f in b if f['r2']['sangrecita'] == 'me genera rechazo'), len(b))} | {pct(sum(1 for f in b if f['r2']['empaque_agrado'] >= 4), len(b))} | {pct(sum(1 for f in b if f['r2'].get('intencion', 0) >= 4), len(b))} | {pct(sum(1 for f in b if f['r2']['precio_caro'] >= 27.9), len(b))} |")
    return out + ['']
L += ['## Cruces por tipo de perfil', '']
L += cruce('Por quién responde', lambda f: f['p']['rol'], ['mamá', 'papá', 'abuela', 'tía'])
L += cruce('Por actitud ante productos nuevos', lambda f: f['p']['nuevos'].split(':')[0], ['curioso', 'cauto', 'escéptico', 'resistente'])
L += cruce('Por qué tan quisquilloso es el hijo', lambda f: f['p']['quisquilloso'].split(':')[0].replace(' con la comida', ''), ['muy quisquilloso', 'algo quisquilloso', 'poco quisquilloso'])
L += cruce('Por antecedente de hierro bajo en el hijo', lambda f: 'con antecedente' if f['p']['hierroBajo'] else 'sin antecedente', ['con antecedente', 'sin antecedente'])
L += cruce('Por edad del hijo', lambda f: f['p']['banda'] + ' años', ['4-5 años', '6-8 años', '9-11 años'])
L += cruce('Por relación con la sangrecita en casa', lambda f: f['p']['sangrecita'], sorted({f['p']['sangrecita'] for f in ok2}))

open(os.path.join(AQUI, 'RESULTADOS-cuantitativos.md'), 'w', encoding='utf-8').write('\n'.join(L) + '\n')
print(f'{len(filas)} perfiles, {len(grupos)} grupos; ronda 1: {len(ok1)}; dos rondas: {len(ok2)}; informes: {sum(1 for g in grupos if g.get("informe"))}')
