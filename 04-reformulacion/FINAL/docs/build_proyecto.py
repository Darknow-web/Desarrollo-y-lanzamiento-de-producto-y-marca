"""Arma «AndiBite - El proyecto explicado.pdf»: el proyecto completo para la profesora.
Uso: python3.13 FINAL/docs/build_proyecto.py   (luego node FINAL/docs/proyecto.mjs)
"""
import pathlib

D = pathlib.Path(__file__).resolve().parent

CSS = """
@font-face{font-family:Jakarta;src:url(../web/fonts/plus-jakarta-sans-latin-800-normal.woff2);font-weight:800}
@font-face{font-family:Jakarta;src:url(../web/fonts/plus-jakarta-sans-latin-600-normal.woff2);font-weight:600}
@font-face{font-family:Nunito;src:url(../web/fonts/nunito-latin-400-normal.woff2);font-weight:400}
@font-face{font-family:Nunito;src:url(../web/fonts/nunito-latin-700-normal.woff2);font-weight:700}
@font-face{font-family:Nunito;src:url(../web/fonts/nunito-latin-800-normal.woff2);font-weight:800}
@page{size:A4;margin:14mm 15mm 16mm}
@page:first{margin:0}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Nunito,sans-serif;color:#3B1A14;-webkit-print-color-adjust:exact;print-color-adjust:exact;font-size:10.5pt;line-height:1.5}
h1,h2,h3{font-family:Jakarta,sans-serif;font-weight:800;color:#4A2018;letter-spacing:-.01em}
b{font-weight:800}
em{font-style:normal;color:#BA4036}
.cover{height:297mm;background:#2E120C;color:#FBF3E8;padding:22mm 20mm;display:flex;flex-direction:column;break-after:page;position:relative;overflow:hidden}
.cover:after{content:"";position:absolute;right:-40mm;bottom:-40mm;width:150mm;height:150mm;border-radius:50%;background:radial-gradient(circle,#BA403655,transparent 70%)}
.cover img.logo{height:26mm;width:auto;align-self:flex-start}
.cover .k{color:#E3A33B;margin-top:22mm}
.cover h1{color:#FBF3E8;font-size:38pt;line-height:1.04;margin-top:5mm}
.cover h1 em{color:#E3A33B}
.cover .sub{font-size:12.5pt;color:#E9D6C3;margin-top:6mm;max-width:100mm}
.cover .bolsa{position:absolute;right:14mm;bottom:38mm;width:72mm;z-index:1;filter:drop-shadow(0 6mm 8mm #0008)}
.cover .meta{margin-top:auto;display:grid;grid-template-columns:1fr 1fr;gap:4mm 10mm;font-size:9.5pt;color:#E2CDB8;position:relative;z-index:2;max-width:110mm}
.cover .meta b{display:block;color:#FBF3E8;font:800 9pt Jakarta;letter-spacing:.1em;text-transform:uppercase;margin-bottom:1mm}
.k{font:800 8pt/1.2 Jakarta,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#BA4036}
section{break-before:page}
section.cont{break-before:auto;margin-top:9mm}
.sh{display:flex;align-items:center;gap:4mm;margin-bottom:5mm;padding-bottom:3mm;border-bottom:.6mm solid #E9D6C3}
.sh .n{flex:none;width:12mm;height:12mm;border-radius:3mm;display:grid;place-items:center;font:800 15pt Jakarta;color:#fff}
.sh h2{font-size:19pt;line-height:1.1}
.sh p{font:800 8pt Jakarta;letter-spacing:.12em;text-transform:uppercase;color:#9a7a6a}
h3{font-size:12.5pt;margin:5mm 0 2mm;color:#4A2018;break-after:avoid;page-break-after:avoid}
.sh{break-after:avoid}
p{margin-bottom:2.5mm}
.lead{font-size:12pt;line-height:1.5;color:#4A2018}
ul{margin:0 0 3mm 5mm}li{margin-bottom:1mm}
.grid2{display:grid;grid-template-columns:1fr 1fr;gap:4mm}
.grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:4mm}
.grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:3mm}
.card{background:#FBF3E8;border-radius:3.5mm;padding:4mm 4.5mm;break-inside:avoid}
.card .k{display:block;margin-bottom:1.5mm}
.card h4{font:800 11.5pt/1.25 Jakarta;color:#4A2018;margin-bottom:1mm}
.card p{font-size:9.6pt;line-height:1.45;margin:0}
.dark{background:#4A2018;color:#FBF3E8}.dark h4,.dark p{color:#FBF3E8}.dark .k{color:#E3A33B}
.c1{background:#7C8A3A}.c2{background:#BA4036}.c3{background:#E3A33B}.c4{background:#7A4A35}.c5{background:#8A1C2B}
.c1,.c2,.c4,.c5{color:#fff}.c1 h4,.c2 h4,.c4 h4,.c5 h4,.c1 p,.c2 p,.c4 p,.c5 p,.c1 li,.c2 li,.c4 li,.c5 li{color:#fff}
.c1 .k,.c2 .k,.c4 .k,.c5 .k{color:#FFE7B8}.c3 .k{color:#5A2A14}
.stat{background:#FBF3E8;border-radius:3.5mm;padding:4mm;break-inside:avoid;border-top:1.4mm solid #BA4036}
.stat b{display:block;font:800 19pt/1.05 Jakarta;color:#BA4036}
.stat span{display:block;font-size:8.8pt;line-height:1.35;margin-top:1.5mm}
table{width:100%;border-collapse:collapse;margin:2mm 0 4mm;font-size:9.4pt;break-inside:avoid}
th{background:#4A2018;color:#FBF3E8;font:800 8pt Jakarta;letter-spacing:.06em;text-transform:uppercase;text-align:left;padding:2.2mm 2.5mm}
td{padding:2mm 2.5mm;border-bottom:.3mm solid #EADCCB;vertical-align:top}
tr:nth-child(even) td{background:#FDF8F1}
td.r,th.r{text-align:right;font-variant-numeric:tabular-nums}
tr.tot td{font-weight:800;background:#F3E4D0!important;color:#4A2018}
figure{margin:3mm 0 4mm;break-inside:avoid}
figure img{width:100%;border-radius:3mm;display:block;box-shadow:0 1mm 3mm #4A201822}
figcaption{font-size:8.5pt;color:#7A5A4C;margin-top:1.5mm}
.quote{border-left:1.4mm solid #E3A33B;background:#FBF3E8;padding:3.5mm 5mm;border-radius:0 3mm 3mm 0;font:800 11.5pt/1.4 Jakarta;color:#4A2018;margin:3mm 0 4mm;break-inside:avoid}
.funnel div{display:flex;justify-content:space-between;align-items:center;margin:0 auto 1.4mm;padding:2.4mm 5mm;border-radius:2.5mm;color:#fff;font-size:9.6pt}
.funnel b{font:800 12pt Jakarta}
.steps{counter-reset:s;display:grid;gap:2mm}
.steps div{counter-increment:s;display:grid;grid-template-columns:8mm 1fr;gap:3mm;align-items:start;font-size:9.8pt}
.steps div:before{content:counter(s);width:7mm;height:7mm;border-radius:50%;background:#BA4036;color:#fff;font:800 9pt Jakarta;display:grid;place-items:center}
.toc{display:grid;grid-template-columns:1fr 1fr;gap:1.5mm 8mm;margin-top:4mm}
.toc div{display:flex;gap:3mm;font:600 10pt Jakarta;color:#4A2018;padding:1.6mm 0;border-bottom:.3mm dashed #E0CDB8}
.toc span{color:#BA4036;font-weight:800;width:7mm}
.note{font-size:8.5pt;color:#7A5A4C}
.avoid{break-inside:avoid}
"""

SEC_COL = ["#BA4036", "#7C8A3A", "#E3A33B", "#8A1C2B", "#7A4A35", "#4A2018"]


def sec(n, title, kicker, body, cont=False):
    col = SEC_COL[(n - 1) % len(SEC_COL)]
    return f'''<section class="{'cont' if cont else ''}"><div class="sh"><div class="n" style="background:{col}">{n}</div><div><p>{kicker}</p><h2>{title}</h2></div></div>{body}</section>'''


def table(head, rows, right=(), total=False):
    th = "".join(f'<th class="{"r" if i in right else ""}">{h}</th>' for i, h in enumerate(head))
    tr = ""
    for j, r in enumerate(rows):
        cls = ' class="tot"' if total and j == len(rows) - 1 else ""
        tr += f"<tr{cls}>" + "".join(f'<td class="{"r" if i in right else ""}">{c}</td>' for i, c in enumerate(r)) + "</tr>"
    return f"<table><thead><tr>{th}</tr></thead><tbody>{tr}</tbody></table>"


def fig(n, cap):
    return f'<figure><img src="laminas/{n:02d}.jpg"><figcaption>{cap}</figcaption></figure>'


def card(k, h, p, cls=""):
    return f'<div class="card {cls}"><span class="k">{k}</span><h4>{h}</h4><p>{p}</p></div>'


def stat(b, s, col="#BA4036"):
    return f'<div class="stat" style="border-top-color:{col}"><b style="color:{col}">{b}</b><span>{s}</span></div>'


out = [f"<!doctype html><html lang='es'><head><meta charset='utf-8'><title>AndiBite · El proyecto explicado</title><style>{CSS}</style></head><body>"]

# ---------- portada ----------
out.append('''<div class="cover"><img class="logo" src="../web/img/logo-andi.png">
<p class="k">Desarrollo y Lanzamiento de Nuevos Productos · UPN Los Olivos</p>
<h1>AndiBite:<br>el proyecto <em>explicado</em></h1>
<p class="sub">El snack saludable que ayuda al desarrollo de tu hijo, sin que sea una pelea: un brownie de chocolate sin octógonos, con ingredientes andinos y 1.9 mg de hierro comprobado en laboratorio, para la lonchera de las familias de nivel B de Lima. De la investigación al plan de negocio, la campaña y los números.</p>
<img class="bolsa" src="../web/img/bolsa.png">
<div class="meta"><div><b>Curso</b>Desarrollo y Lanzamiento de Nuevos Productos</div><div><b>Docente</b>Prof. Paola Zevallos</div>
<div><b>Grupo 2</b>Diana Ayoso, Patricia Cárdenas, Adela Robles, Angie Blas y Carlos Inga</div><div><b>Presentación</b>andibite-feria.cingacordova.workers.dev<br>@andibite.pe en Instagram y TikTok</div></div></div>''')

# ---------- 0 resumen ----------
toc = ["Nuestra cultura", "El problema y la investigación", "Público y mercado", "Producto, marca y app",
       "Plan de negocio: de lo estratégico a lo operativo", "Marketing mix: un objetivo SMART por cada P",
       "Canales y distribución", "La campaña de lanzamiento", "KPIs y métricas para escalar",
       "Demanda y ventas", "Rentabilidad: equilibrio, ROI y financiamiento", "Inversión y trámites para formalizar",
       "Después del lanzamiento", "Responsabilidad social"]
out.append('<section style="break-before:auto"><p class="k">En una página</p><h2 style="font-size:22pt;margin:2mm 0 4mm">El proyecto <em>en una página</em></h2>'
           '<p class="lead">Papá y mamá quieren que su hijo coma bien para crecer, pero lo que le hace bien no se lo come: la lonchera vuelve llena. '
           'AndiBite es el snack saludable que ayuda al desarrollo del niño sin que sea una pelea: un brownie que el niño sí se come. Lleva sangrecita, pero no se nota: en nuestro focus, ninguna de las ocho mamás la notó. '
           'Crecemos por colegios, con prueba en persona y pedido semanal del salón, y lo contamos con una campaña de una sola pregunta: <b>«Lleva sangrecita. ¿La notaste?»</b></p>'
           '<div class="grid4" style="margin-top:4mm">'
           + stat("S/22", "la bolsa de 6 (S/3.67 cada brownie); S/5 la unidad")
           + stat("8 → 42", "colegios de 2027 a 2031; 250 familias en 2027 y 780 en 2031", "#7C8A3A")
           + stat("Abr 2028", "primer mes con ganancia; punto de equilibrio de 8,050 brownies al mes", "#E3A33B")
           + stat("58 %", "ROI a 5 años sobre S/100,000; la inversión se recupera en 2030", "#8A1C2B")
           + '</div><div class="grid4" style="margin-top:3mm">'
           + stat("S/170,715", "ventas con IGV en 2027; S/634,073 en 2031", "#7A4A35")
           + stat("S/15,040", "marketing de 2027: 10 % de la venta del primer año", "#BA4036")
           + stat("9.7×", "LTV ÷ CAC: S/592 que deja una familia frente a S/60 que cuesta traerla", "#7C8A3A")
           + stat("S/25,432", "inversión inicial; S/8,321 en documentos y permisos", "#E3A33B")
           + '</div><h3 style="margin-top:7mm">Contenido</h3><div class="toc">'
           + "".join(f"<div><span>{i}</span>{t}</div>" for i, t in enumerate(toc, 1)) + "</div></section>")

# ---------- 1 quiénes somos ----------
out.append(sec(1, "Nuestra cultura", "Propósito, misión, visión y valores", '''
<p>La cultura de AndiBite se formuló siguiendo a Collins y Porras (propósito que no cambia y una visión ambiciosa) y a Lencioni (valores que ya se viven y guían decisiones). El detalle y los ejemplos de otras empresas están en el documento 23.</p>
<div class="quote">Propósito: que alimentar bien a un hijo sea sencillo, y no una pelea.</div>
<div class="grid2">''' + card("Misión", "Creamos snacks saludables y ricos, con ingredientes andinos, para que papá y mamá alisten la lonchera sin complicaciones y sus hijos coman con gusto lo que les ayuda a crecer.", "Qué hacemos, para quién y cómo.")
 + card("Visión", "Ser la marca peruana de snacks saludables que las familias del Perú eligen para la lonchera de sus hijos, porque a ellos les encanta y los ayuda a crecer.", "Una aspiración sin fecha. La meta medible al 2031 es otra: 780 familias en 42 colegios.", "dark") + '''</div>
<h3>Nuestros valores</h3>
<div class="steps"><div><span><b>Transparencia.</b> Decimos qué lleva, aunque sea sangrecita, y solo afirmamos lo comprobado: 1.9 mg de hierro en laboratorio; nunca «previene la anemia».</span></div>
<div><span><b>Escucha.</b> Primero preguntamos y hacemos probar a papá y mamá; después decidimos (25 entrevistas, dos focus y un precio que pusieron las mamás).</span></div>
<div><span><b>Cuidado de la infancia.</b> Lo que hacemos tiene que hacerle bien al niño (0 octógonos) y la publicidad le habla al adulto (Ley 30021).</span></div>
<div><span><b>Orgullo por lo nuestro.</b> Sangrecita de Lima, cacao de San Martín, plátano de Piura y cañihua de Puno, con su origen a la vista.</span></div></div>
<h3>Nombre y promesa</h3>
<p><b>AndiBite</b> une «Andi», por los Andes, y «Bite», la mordida: de los Andes a la lonchera. El slogan es <b>«Dulce para ellos. Tranquilidad para ti.»</b>: el niño disfruta el sabor y papá y mamá ganan una mañana sin pelea.</p>
<div class="quote">El eje de la empresa: un snack saludable que ayuda al desarrollo de tu hijo, sin que sea una pelea. El hierro comprobado, los 0 octógonos y los ingredientes andinos son la prueba de que es saludable; el sabor es lo que evita la pelea.</div>'''))

# ---------- 2 problema e investigación ----------
out.append(sec(2, "El problema y la investigación", "Lo que escuchamos", '''
<p class="lead">Papá y mamá quieren que su hijo coma bien para crecer. El problema es que <b>lo que le hace bien al niño, no se lo come</b>. Cada casa tiene su truco (nuggets de sangrecita, hígado escondido en la sopa) y casi todos fallan por lo mismo: el sabor.</p>
<h3>Cómo investigamos</h3>
''' + table(["Etapa", "Qué hicimos", "Qué encontramos"], [
    ["Entrevistas", "25 entrevistas a profundidad a papás y mamás (agosto y septiembre de 2026)", "La barrera es el olor, el color y la textura de la sangrecita, no el ingrediente. Dentro de un dulce, se acepta."],
    ["Focus 1", "Virtual, 13 de septiembre de 2026, 8 padres", "Eligieron el formato: ganó el mini brownie, con 15 votos frente a 10 de las trufas."],
    ["Focus 2", "Presencial, 20 de septiembre de 2026, en un colegio, 8 mamás de nivel B, con el prototipo y su empaque", "Ninguna notó la sangrecita, ni en el sabor ni en el olor. El precio lo pusieron ellas."],
]) + '''
<h3>El valor sube al conocerlo</h3>
<p>Primero probaron y después preguntamos el precio. Solo por el sabor, pagarían <b>S/10</b> por la bolsa de 6. Al saber que no tiene octógonos y trae app, <b>S/19 a S/20</b>. Al saber que es uno por día, en su bolsita: <b>S/20 a S/24</b>. Es el mismo brownie: lo que creció fue la tranquilidad.</p>
''' + fig(5, "Lámina 5 de la presentación: ninguna de las 8 mamás notó la sangrecita.") + '''
<p class="note">La presentación incluye una lámina para el video del focus («El focus, tal como pasó»), que se completa con la grabación del live.</p>'''))

# ---------- 3 público ----------
fun = [("Hogares en el Perú", "9.6 millones", "100%", "#4A2018"), ("Hogares en Lima Metropolitana", "3,362,157", "90%", "#7A4A35"),
       ("Hogares de nivel B en Lima (18.4 %)", "618,637", "78%", "#8A1C2B"), ("Nivel B1: nuestro foco", "164,746", "66%", "#BA4036"),
       ("B1 con hijos de 4 a 11 años", "39,000", "54%", "#E3A33B"), ("Familias que compran cada semana", "250 → 780", "42%", "#7C8A3A")]
out.append(sec(3, "Público y mercado", "A quién le hablamos", '''
<p class="lead">Papá y mamá de nivel B de Lima, con foco en el B1: de 30 a 45 años, con hijos de 4 a 11 en colegio privado. Trabajan los dos y miran el precio por unidad.</p>
<div class="funnel" style="margin:4mm 0">''' + "".join(f'<div style="width:{w};background:{c}"><span>{t}</span><b>{n}</b></div>' for t, n, w, c in fun) + '''</div>
<p class="note">Hogares: APEIM 2025. Los 39,000 hogares B1 con hijos se estiman con la proporción de hogares con niños de 4 a 11 años.</p>
<div class="grid2" style="margin-top:4mm">''' + card("Participación de mercado", "0.6 % en 2027 → 2 % en 2031", "250 familias que compran cada semana el primer año y unas 780 en 2031. Una meta chica y alcanzable.", "c1")
 + card("Buyer persona", "Rodrigo Salazar, 40 años, San Miguel", "Trabaja él y trabaja su esposa; tiene cinco minutos para la lonchera. «No me vendas salud, véndeme una mañana menos.» Lo convence una sola cosa: que su hijo lo pruebe.", "dark") + '''</div>
<p style="margin-top:4mm"><b>¿Por qué el nivel B?</b> Es el público que probó el brownie y le puso precio. Valora lo práctico y lo que el niño sí se come.</p>'''))

# ---------- 4 producto ----------
out.append(sec(4, "Producto, marca y app", "Qué creamos", '''
<div class="grid3">''' + stat("30 g", "cada brownie en su bolsita, uno por día") + stat("1.9 mg", "de hierro en cada brownie. Comprobado en laboratorio.", "#8A1C2B") + stat("0", "octógonos: endulzado con eritritol, plátano y poca panela", "#7C8A3A") + '''</div>
''' + fig(10, "Lámina 10: el producto y sus cuatro ingredientes peruanos.") + '''
<h3>Salimos con un solo sabor: Andi</h3>
<p>Lanzamos el 6 de marzo de 2027 con el sabor Andi (chocolate, plátano, canela y cañihua) para concentrar todo en que funcione. Los sabores siguientes ya tienen su empaque:</p>
''' + fig(11, "Lámina 11: Andi en el lanzamiento; Chispa en 2028 y lúcuma en 2029.") + '''
<h3>Marca</h3>
<p>Andi es el niño del empaque y Killa, su llamita. Viven en la bolsa y en la app, nunca en los anuncios: los anuncios le hablan a papá y mamá, como pide la Ley 30021. Colores de marca: café, ladrillo, vino, dorado, oliva y crema; letras Plus Jakarta Sans y Nunito.</p>
<h3>App Andi</h3>
<p>El QR de la bolsa abre la app. Papá o mamá ve lo que llevó hoy en la lonchera, con su hierro, las loncheras de la semana y vuelve a pedir en un clic por WhatsApp. Los juegos del niño se abren con la clave de papá o mamá y no tienen compras.</p>
<h3>Producción</h3>
<p>Produce la planta maquiladora del INDDA de la UNALM: hornea, pesa y sella. Producir un brownie cuesta S/1.84 en bolsa en 2027 y baja a S/1.50 en 2028 por volumen.</p>'''))

# ---------- 5 plan de negocio ----------
out.append(sec(5, "Plan de negocio: de lo estratégico a lo operativo", "Estrategia", '''
<p>Todo este documento es el plan de negocio, ordenado en tres pisos: <b>estratégico</b> (hacia dónde vamos: FODA, estructura, Ansoff, BCG y contexto), <b>táctico</b> (cómo competimos: 7P con objetivos SMART, precio, canales, campaña y KPIs) y <b>operativo</b> (cuánto vendemos y cuánto deja: demanda, ventas, equilibrio, ROI, inversión y financiamiento). La meta que lo ordena: 780 familias en 42 colegios al 2031, empezando con 250 familias en 14 colegios en 2027.</p>
<h3>FODA</h3>
<div class="grid2">''' + card("Internas · positivas", "Fortalezas", "F1 Receta que el niño acepta: la sangrecita no se nota · F2 Snack nutritivo comprobado: hierro en laboratorio y 0 octógonos · F3 Producción con un aliado experto, la planta del INDDA-UNALM · F4 App propia que facilita la lonchera y la recompra", "c1")
 + card("Externas · positivas", "Oportunidades", "O1 El 83 % mira los octógonos al comprar · O2 Los snacks saludables crecen cerca de 6 % al año · O3 Papá y mamá trabajan y tienen poco tiempo para la lonchera · O4 Confían más en otros padres (28 %) que en influencers (7 %)", "c3")
 + card("Internas · negativas", "Debilidades", "D1 Marca nueva, que nadie conoce todavía · D2 Capital limitado: el primer año se pierde · D3 Volumen chico: el costo por brownie es alto al inicio · D4 Un solo sabor al lanzar y un solo maquilador", "c2")
 + card("Externas · negativas", "Amenazas", "A1 Fenómeno El Niño costero: lluvias en el norte dañan el plátano · A2 Cacao caro y con precio cambiante · A3 Marcas grandes con snacks «saludables» en el supermercado · A4 Rechazo a la sangrecita y desconfianza de lo envasado", "c4") + '''</div>
<h3>FODA cruzado: un punto con otro</h3>
''' + table(["Cruce", "Por qué", "Estrategia"], [
    ["<b>F1 + O1</b> (FO)", "La sangrecita no se nota + papá y mamá miran los octógonos", "Prueba a ciegas en la puerta del colegio, con «0 octógonos» al frente."],
    ["<b>F2 + A4</b> (FA)", "Nutrición comprobada + desconfianza de lo envasado", "Contador en vivo y el informe de laboratorio en la app: la prueba la pone papá."],
    ["<b>D1 + O4</b> (DO)", "Marca nueva + confían en otros padres", "Entramos por los padres: delegada del salón, reunión de padres y 10 papás y mamás creadores."],
    ["<b>D4 + A1</b> (DA)", "Un solo sabor y un maquilador + El Niño daña el plátano", "Contrato anual de maquila, plátano de Piura y San Martín, y Chispa listo como respaldo."],
]) + '''
<h3>Estructura estratégica</h3>
<p><b>Estrategia genérica de Porter: enfoque con diferenciación.</b> Un público preciso (papá y mamá B1 con hijos en colegio privado) y una diferencia que se prueba: no se nota, hierro comprobado, 0 octógonos.</p>
''' + table(["Puesto", "Quién y desde cuándo"], [
    ["Directorio", "Socios · una reunión al mes"],
    ["Gerente general y comercial", "Socio a tiempo completo · desde marzo de 2027"],
    ["Coordinadora de ventas y operaciones", "Pedidos, planta, entregas y colegios"],
    ["Contador y community manager", "Externos · desde diciembre de 2026 y febrero de 2027"],
    ["Promotores por día", "Degustación y venta · S/90 por día"],
    ["Asistente de reparto", "Desde 2028, con más de 16 colegios"],
    ["Planta maquiladora INDDA-UNALM", "Aliado: hornea, pesa y sella"],
]) + '''
<h3>Matriz de Ansoff: la clave de crecimiento</h3>
''' + fig(18, "Lámina 18: cada paso se abre solo si el anterior cumple su indicador.") + table(["Estrategia", "Producto · mercado", "Qué y cuándo"], [
    ["<b>Penetración de mercado</b> (hoy)", "Actual · actual", "2027-2031: de 8 a 42 colegios; embajadores y recompra semanal. Participación de 0.6 % a 2 %."],
    ["<b>Desarrollo de mercado</b>", "Actual · nuevo", "2029-2031: módulo fijo en el mall y colegios de Lima Este y Sur."],
    ["<b>Desarrollo de producto</b>", "Nuevo · actual", "2028: sabor Chispa; 2029: lúcuma de temporada. Se pagan con la caja de la bolsa de 6."],
    ["<b>Diversificación</b>", "Nuevo · nuevo", "2030: prueba de una barra para secundaria (12 a 16 años); 2031: venta, solo si el núcleo gana."],
]) + '''
<h3>Matriz BCG: hoy y en 2031</h3>
''' + table(["Cuadrante", "Producto"], [
    ["<b>Interrogante</b> (hoy)", "2027: Andi en bolsa de 6 y la unidad a S/5. Luego, Chispa (2028), lúcuma (2029) y la barra para secundaria (2031)."],
    ["<b>Estrella</b>", "2028: la bolsa de 6, con 24 colegios."],
    ["<b>Vaca</b>", "2030-2031: la bolsa de 6, con costo de S/1.46. Su caja paga lo nuevo."],
    ["<b>Perro</b>", "Lo que no repite, sale. La unidad suelta queda chica a propósito: empuja la bolsa."],
]) + '''<p class="note">La app Andi no se mide como producto: sostiene la recompra de las bolsas.</p>
<h3>Contexto del mercado y Fenómeno El Niño costero</h3>
<p>El mercado acompaña: los snacks saludables crecen cerca del 6 % al año y el 83 % dice que los octógonos influyen en lo que compra. El riesgo es el clima. <b>El Fenómeno El Niño costero</b> ocurre cuando el mar frente al norte del Perú se calienta más de lo normal y trae lluvias fuertes a Piura y Tumbes, que inundan cultivos como el plátano. El ENFEN (13 de noviembre de 2026) lo anunció hasta febrero de 2027, y el sabor Andi lleva plátano; se espera 11 % menos banano exportado en 2027, y el cacao ronda US$5,400 por tonelada (octubre de 2026). Cacao y plátano pesan unos S/0.13 por brownie: el riesgo no es el costo, es quedarnos sin insumo.</p>
<div class="grid3">''' + card("Acción 1", "Cacao en stock", "Comprar en febrero lo de 3 meses.") + card("Acción 2", "Plátano de dos orígenes", "Piura y San Martín.") + card("Acción 3", "Chispa de respaldo", "Si falta plátano, adelantamos Chispa, que no lleva plátano. El precio no se toca en 2027.") + "</div>"))

# ---------- 6 7P ----------
out.append(sec(6, "Marketing mix: un objetivo SMART por cada P", "7P", "<p>Cada objetivo es específico, medible, alcanzable, relevante y con fecha (SMART). Todos son de 2027.</p>" + table(["P", "Objetivo SMART · 2027", "Cómo lo logramos"], [
    ["<b>Producto</b>", "Lanzar Andi el 6 de marzo con registro sanitario y 0 octógonos, y que el 35 % de las familias de marzo vuelva a pedir al 30 de abril.", "Brownie de 30 g en su bolsita; 1.9 mg de hierro comprobado."],
    ["<b>Precio</b>", "Mantener la bolsa de 6 a S/22 todo el año y dejar S/1.03 por brownie en bolsa.", "Precio por valor: S/3.67 cada uno; suelto, S/5. Las mamás dijeron S/20 a S/24 por la bolsa; un brownie de pastelería cuesta S/10.88 en promedio."],
    ["<b>Plaza</b>", "Pasar de 8 colegios el 6 de marzo a 14 el 30 de septiembre, con 19 brownies por colegio y día.", "Selectiva: colegio (pedido del salón y quiosco donde lo permitan), kermés, stand y mall por temporadas."],
    ["<b>Promoción</b>", "Llegar a 250 familias que compran cada semana al 31 de diciembre, con S/15,040 y S/8.23 o menos por contacto.", "«Lleva sangrecita. ¿La notaste?», solo para adultos."],
    ["<b>Personas</b>", "Tener al 100 % del equipo con carné de sanidad y capacitado antes del 1 de marzo.", "Gerente, coordinadora, promotores, delegadas y embajadores."],
    ["<b>Procesos</b>", "Entregar el 100 % de los pedidos del salón cada lunes de clases y responder en menos de 2 horas.", "Prueba, pedido del salón, Yape, entrega el lunes y recompra."],
    ["<b>Evidencia física</b>", "Publicar el contador cada lunes de marzo a junio y llegar a 125,000 visualizaciones.", "Bolsa con «No la escondemos» y registro sanitario."],
]) + '''
<h3>Costo y ganancia por presentación</h3>
''' + table(["Presentación", "Precio", "Costo de producir", "Ganancia bruta", "Contribución"], [
    ["Bolsa de 6 (por brownie)", "S/3.67", "S/1.84", "40.7 %", "33 % (S/1.03 en 2027; S/1.37 en 2028)"],
    ["Unidad suelta", "S/5.00", "S/1.67", "60.7 %", "55 %"],
], right=(1, 2, 3)) + '<p class="note">Detalle en el Excel «AndiBite - Costos y ganancia por presentacion.xlsx» (precio sin IGV, costo de producir, gastos fijos y ganancia por canal).</p>'))

# ---------- 7 canales ----------
out.append(sec(7, "Canales y distribución", "Plaza", '''
<p class="lead">Vendemos donde ya está la lonchera. Todo empieza probando, en persona; el WhatsApp solo junta el pedido de la semana y avisa cuándo volver a pedir.</p>
''' + table(["Canal", "Cómo funciona", "Desde"], [
    ["<b>1 · Venta en el colegio</b>", "Degustación en la puerta; la delegada junta el pedido del salón, cada familia paga por Yape y entregamos en mano el lunes.", "8 colegios en marzo de 2027, 14 en septiembre y 24 en 2028"],
    ["<b>1b · Quiosco del colegio</b>", "Donde el colegio y su quiosco aceptan productos sin octógonos con edulcorante: el niño compra su unidad en el recreo. El quiosco compra a S/3.50 y vende a S/5; va en la misma entrega del lunes y deja unos S/1.06 por unidad.", "Desde marzo de 2027, colegio por colegio"],
    ["<b>2 · Kermeses y reuniones de padres</b>", "La familia prueba junta; se vende sobre todo el brownie suelto.", "Marzo de 2027"],
    ["<b>3 · Stand de fin de semana</b>", "Feria municipal del Campo de Marte, Jesús María, sábados y domingos: degustación y venta.", "Marzo de 2027; todo el año si vende 100 al día"],
    ["<b>4 · Centro comercial</b>", "Real Plaza Salaverry (zona con 51.7 % de hogares B): pop-up de lanzamiento y módulo en la vuelta al colegio.", "Marzo de 2027 y febrero de 2028"],
]) + '''
<h3>Estrategia de distribución selectiva</h3>
<p>Pocos puntos, elegidos porque ahí se prueba y se vuelve a comprar: el 79 % de los brownies de 2027 sale del colegio. <b>No</b> vamos a bodegas ni supermercados: ahí nadie prueba. Dentro del colegio, además del pedido del salón, entramos al quiosco cuando el colegio lo permite, para que el mismo niño pueda comprar por unidad. Esa venta no está en la proyección: es adicional.</p>
<h3>¿Por qué te debo comprar? Las cinco razones del cliente</h3>
<div class="steps"><div><span><b>Mi hijo se lo come:</b> ninguna mamá notó la sangrecita.</span></div><div><span><b>Ayuda a su desarrollo:</b> 1.9 mg de hierro comprobado.</span></div><div><span><b>Sin octógonos:</b> eritritol, plátano y poca panela.</span></div><div><span><b>Me resuelve la mañana:</b> uno por día, a S/3.67.</span></div><div><span><b>Llega el lunes al colegio</b> y vuelvo a pedir en un clic.</span></div></div>
<h3>El centro comercial, paso a paso</h3>
''' + table(["Paso", "Qué", "Condición"], [
    ["6 al 14 de marzo de 2027", "Pop-up «Laboratorio ¿La notaste?», con cabinas de prueba a ciegas y el contador en vivo", "1,350 pruebas · S/2,600 dentro del marketing"],
    ["15 de febrero al 15 de marzo de 2028", "Módulo temporal en la vuelta al colegio", "Meta: 100 brownies por día"],
    ["Desde 2029", "Módulo fijo de 4 m² (unos S/8,800 al mes con personal)", "Se abre si el temporal vende 170 brownies al día"],
]) + '<p>El mall no es el canal principal: un módulo fijo necesita unos 140 compradores al día para no perder, y lo realista son unos 70. Por eso entra en la temporada en que se arma la lonchera.</p>'))

# ---------- 8 campaña ----------
out.append(sec(8, "La campaña de lanzamiento", "Promoción", '''
<div class="quote">«Lleva sangrecita. ¿La notaste?» · «No la escondemos. Simplemente no se nota.» · #LoQueNadieVe</div>
<p>Papá y mamá ya no le creen a otro «saludable»: le creen a su propia boca. Por eso primero prueban y después se enteran. La historia se cuenta en tres actos (mil trucos, un brownie que ocho mamás probaron sin notar nada, una pelea menos) y en cuatro etapas:</p>
''' + fig(29, "Lámina 29: la campaña en cuatro etapas, de noviembre de 2026 a junio de 2027.") + '''
<div class="grid2">''' + card("La idea que hace hablar", "Contador en vivo «Probaron · La notaron»", "Cada lunes publicamos la cifra real, también la de quienes sí la notaron. En casa, «Pásale la prueba»: quien compró le da un brownie al tío que todo lo nota y graba su cara.", "dark")
 + card("Personas reales, no famosos", "10 papás y mamás creadores", "De 3,000 a 30,000 seguidores. El 28 % confía en amigos y familia; en influencers grandes, apenas el 7 %.", "c1") + '''</div>
<p style="margin-top:3mm">Redes: <b>@andibite.pe</b> en Instagram y TikTok, y WhatsApp Business para los pedidos.</p>
<h3>Presupuesto de marketing 2027: S/15,040</h3>
''' + table(["Partida", "S/"], [
    ["Manejo de redes y videos de reacción", "5,500"], ["Anuncios en Meta y TikTok (mayores de 18)", "2,950"],
    ["Pop-up «Laboratorio ¿La notaste?»", "2,600"], ["Embajadores y muestras en colegios", "1,920"],
    ["Creadores y prueba en la calle", "1,500"], ["Kit del stand, volantes, prensa y premios", "570"], ["Total (10 % de la venta del primer año)", "15,040"],
], right=(1,), total=True) + '<p>En 2028 baja al 6 % (S/18,503), porque ya hay recompra.</p>'))

# ---------- 9 KPIs ----------
out.append(sec(9, "KPIs y métricas para escalar", "Control", table(["Tipo", "KPI", "Meta", "Fecha de corte"], [
    ["Comercial", "Bolsas pedidas por los salones", "133", "31 de marzo de 2027"],
    ["Comercial", "Familias de marzo que vuelven a pedir", "35 %", "30 de abril de 2027"],
    ["Comercial", "Brownies por colegio y día (si se cumple, se abre el siguiente colegio)", "19 o más", "15 de junio de 2027"],
    ["Comunicación", "Costo por contacto de WhatsApp que traen los anuncios", "S/8.23 o menos", "Cada mes"],
    ["Comunicación", "Visualizaciones y videos de reacción; respuesta en menos de 2 horas", "125,000 y 30 videos", "Enero a junio de 2027"],
    ["Financiero", "Resultado del mes; caja mínima", "Positivo; nunca bajo S/7,000", "Desde abril de 2028"],
]) + '''<p>Si un KPI no se cumple, hay una acción escrita: por ejemplo, si repite menos del 30 %, no se gasta en anuncios nuevos y se vuelve a las muestras.</p>
<h3>Métricas para escalar: CAC, LTV y NPS</h3>
<div class="grid4">''' + stat("S/60", "CAC: S/15,040 de marketing ÷ 250 familias que compran cada semana (2027)") + stat("S/592", "LTV: S/8.22 por bolsa × 36 bolsas al año × 2 años", "#7C8A3A") + stat("9.7×", "LTV ÷ CAC. Prudente 5.9; en el peor caso, 3", "#7A4A35") + stat("40 → 50", "NPS meta en 2027 y desde 2028: «Del 0 al 10, ¿recomendarías AndiBite?»", "#E3A33B") + '''</div>
<div class="quote" style="margin-top:4mm">Regla para escalar: abrimos más colegios solo si LTV ÷ CAC es 3 o más, con 6 meses de datos reales.</div>'''))

# ---------- 10 demanda y ventas ----------
out.append(sec(10, "Demanda y ventas", "Proyección", '''<h3 style="margin-top:0">Proyección de la demanda por canal (brownies al año)</h3>''' + table(["Canal", "2027", "2028", "2029", "2030", "2031"], [
    ["Pedido del salón (colegios)", "35,285", "83,126", "103,908", "124,689", "145,471"],
    ["Kermeses y reuniones de padres", "4,950", "6,600", "8,250", "9,900", "11,550"],
    ["Recompra por WhatsApp", "1,628", "3,310", "4,137", "4,965", "5,792"],
    ["Stand de fin de semana y mall", "2,520", "3,000", "3,750", "4,500", "5,250"],
    ["Total de brownies", "44,383", "96,036", "120,045", "144,054", "168,063"],
], right=(1, 2, 3, 4, 5), total=True) + table(["Ventas con IGV por canal (S/)", "2027", "%", "2028", "2029", "2030", "2031", "%"], [
    ["Colegio (pedido del salón)", "135,720", "79.5", "313,621", "392,028", "470,431", "548,837", "86.6"],
    ["Kermeses y reuniones de padres", "19,040", "11.2", "24,901", "31,126", "37,351", "43,576", "6.9"],
    ["Recompra por WhatsApp", "6,262", "3.7", "12,488", "15,608", "18,732", "21,852", "3.4"],
    ["Stand de fin de semana y mall", "9,693", "5.7", "11,318", "14,148", "16,978", "19,808", "3.1"],
    ["Total", "170,715", "100", "362,328", "452,910", "543,492", "634,073", "100"]], right=(1, 2, 3, 4, 5, 6, 7), total=True) + '''
<p>El colegio es entre el 80 % y el 87 % de la venta. Colegios al cierre de cada año: 14, 24, 30, 36 y 42.</p>
<h3>Proyección de ventas de 2027, de enero a diciembre</h3>
''' + table(["Mes", "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"], [
    ["Brownies", "0", "0", "2,734", "2,741", "4,005", "4,392", "3,162", "5,510", "5,826", "6,254", "6,339", "3,420"],
    ["Ventas S/", "0", "0", "10,516", "10,543", "15,405", "16,893", "12,162", "21,194", "22,409", "24,055", "24,382", "13,155"],
], right=tuple(range(1, 13))) + '''
<p>Enero y febrero no se vende: son el registro sanitario, el lote piloto y los contratos (con una preventa de 133 bolsas en febrero). Julio y diciembre bajan por las vacaciones. El mejor mes es noviembre, con 14 colegios.</p>
''' + fig(37, "Lámina 37: brownies vendidos cada mes de 2027, por canal.")))

# ---------- 11 rentabilidad ----------
out.append(sec(11, "Rentabilidad: equilibrio, ROI y financiamiento", "Números", '''
<p class="lead">La empresa se vuelve rentable <b>entrando a más colegios</b>, no vendiendo más en cada uno: cada colegio vende unos 25 brownies por día de clase.</p>
''' + table(["Indicador", "2027", "2028"], [
    ["Colegios al cierre", "14", "24"], ["Brownies", "44,383", "96,036"], ["Ventas con IGV", "S/170,715", "S/362,328"],
    ["Lo que deja cada brownie (promedio)", "S/1.07", "S/1.41"], ["Costos fijos al mes", "S/7,212", "S/11,325"],
    ["Marketing", "S/15,040 (10 %)", "S/18,503 (6 %)"], ["Resultado del año", "−S/38,889", "−S/4,678"],
], right=(1, 2)) + '''
<h3>Punto de equilibrio mensual</h3>
<p>Gastos fijos del mes ÷ lo que deja cada brownie = mínimo de brownies al mes.</p>
<div class="grid2">''' + card("2027", "S/7,212 ÷ S/1.07 = 6,720 brownies al mes", "1,120 bolsas · unos S/25,800 en ventas al mes.") + card("2028", "S/11,325 ÷ S/1.41 = 8,050 brownies al mes", "1,340 bolsas · S/30,400 en ventas · 18 brownies por colegio y día con 24 colegios. Se supera en abril de 2028.", "dark") + '''</div>
''' + fig(39, "Lámina 39: brownies vendidos cada mes frente al mínimo para no perder.") + '''
<h3>ROI</h3>
<div class="grid3">''' + stat("58 %", "ROI del negocio a 5 años: S/58,150 de ganancia sumada 2027-2031 ÷ S/100,000. Se recupera en 2030.", "#8A1C2B") + stat("138 %", "ROI del marketing 2027: cada S/1 trae S/2.38 de margen (75 % del mérito al marketing). ROAS 9.6.", "#BA4036") + stat("174 %", "ROI si en 2029 la bolsa pasa a S/24, dentro del rango que dijeron las mamás (sensibilidad).", "#7C8A3A") + '''</div>
<p style="margin-top:3mm">Resultado por año: −S/38,889 (2027), −S/4,678 (2028), +S/20,331 (2029), +S/28,611 (2030) y +S/52,775 (2031).</p>
<h3>Financiamiento: S/100,000</h3>
<div class="grid2"><div>''' + table(["Fuente", "S/", "Cuándo"], [
    ["Aporte de los cinco socios", "50,000", "Dic. 2026"], ["Segundo aporte o inversionista", "35,000", "May. 2027"],
    ["Préstamo de caja municipal (TEA 40 %)", "15,000", "Ene. 2028"]], right=(1,)) + '</div><div>' + table(["En qué se usa", "S/"], [
    ["Reserva de caja a fines de 2028", "27,044"], ["Inversión inicial", "25,432"], ["Resto de la pérdida de 2027", "22,903"],
    ["Marketing 2027", "15,040"], ["Cuotas del préstamo 2028", "9,581"]], right=(1,)) + '''</div></div>
<p>La caja nunca baja de S/7,948 (abril de 2027, antes del segundo aporte). Postulamos a StartUp Perú: si se gana, reemplaza al segundo aporte y al préstamo.</p>'''))

# ---------- 12 inversión ----------
out.append(sec(12, "Inversión y trámites para formalizar", "Cumplimiento regulatorio", '''
<p>La inversión inicial es de <b>S/25,432</b>. Incluye todos los documentos y permisos para operar formalmente:</p>
''' + table(["Trámite", "Entidad", "S/"], [
    ["Constitución de la S.A.C.", "SUNARP y notaría", "650"], ["RUC y REMYPE", "SUNAT y Ministerio de Trabajo", "0"],
    ["Legalización de libros", "Notaría", "150"], ["Marca, clase 30", "INDECOPI", "401"],
    ["Registro sanitario (tasa)", "DIGESA", "0"], ["Análisis para el registro", "Laboratorio acreditado", "1,200"],
    ["Perfil nutricional y hierro", "Laboratorio acreditado", "1,600"], ["Vida útil (2 sabores)", "Laboratorio acreditado", "2,400"],
    ["Etiqueta y revisión", "Norma de rotulado y octógonos", "650"], ["Contrato de maquila", "Abogado", "400"],
    ["Libro de reclamaciones", "INDECOPI", "150"], ["Carnés de sanidad y póliza", "Municipalidad y aseguradora", "720"],
    ["Total documentos y permisos", "", "8,321"],
], right=(2,), total=True) + table(["Inversión inicial", "S/"], [
    ["Documentos y permisos", "8,321"], ["Arranque", "6,920"], ["Desarrollo", "3,591"], ["Equipos", "2,838"],
    ["Marca y app", "2,250"], ["Imprevistos", "1,512"], ["Total", "25,432"]], right=(1,), total=True) + '''
<p class="note">No aplican licencia de funcionamiento ni certificado de Defensa Civil: produce la planta maquiladora, que ya cuenta con los suyos. El régimen laboral es REMYPE, con EsSalud.</p>'''))

# ---------- 13 después ----------
out.append(sec(13, "Después del lanzamiento", "Ciclo de vida y diversificación", fig(43, "Lámina 43: acciones según el ciclo de vida.") + table(["Etapa", "Acción", "Qué hacemos"], [
    ["<b>Introducción</b> · nov 2026 a jun 2027", "Que prueben", "Concurso, revelación el 8 de febrero, lanzamiento del 6 al 14 de marzo. KPI: 133 bolsas y 35 % que repite."],
    ["<b>Crecimiento</b> · jul 2027 a 2029", "Más colegios", "14 colegios en septiembre y 24 en 2028; módulo de vuelta al colegio; contrato anual de maquila."],
    ["<b>Madurez</b> · 2030 a 2031", "Rentabilidad", "36 y 42 colegios; embajadores; marketing de 8 % de la venta. Inversión recuperada en 2030."],
    ["<b>Evitar el declive</b> · desde 2029", "Renovarse", "Sabor de temporada, nuevas zonas de Lima y prueba a ciegas cada marzo."],
]) + '''
<h3>Productos nuevos, la misma misión</h3>
<p>Todo producto nuevo cumple tres cosas, igual que el brownie: <b>1)</b> que alistar la lonchera sea sencillo (listo, uno por día, en su bolsita); <b>2)</b> que al hijo le guste (pasa la prueba a ciegas antes de salir); y <b>3)</b> que ayude a su desarrollo (sin octógonos y con hierro comprobado).</p>
<p><b>Diversificación:</b> una <b>barra AndiBite para secundaria, de 12 a 16 años</b>, de cacao, avena y cañihua con sangrecita. El niño crece y la marca crece con él; va en el mismo pedido del salón, sin abrir un canal nuevo.</p>
<div class="grid3">''' + card("2029", "Sabor lúcuma", "Desarrollo de producto: que la lonchera no aburra.") + card("2030", "Prueba de la barra", "Con 50 familias de secundaria.") + card("2031", "Venta", "Si los chicos la vuelven a pedir.", "dark") + '''</div>
<p style="margin-top:3mm"><b>Condición:</b> 2030 con ganancia, 36 colegios y 35 % de familias que repiten. Se paga con utilidad, nunca con préstamo. <b>Lo que no haremos:</b> snacks salados; la sangrecita solo se acepta en lo dulce.</p>'''))

# ---------- 14 RSE ----------
out.append(sec(14, "Responsabilidad social: «Loncheras que ayudan a crecer»", "ODS 2 · meta 2.2", '''
<p class="lead">En el Perú, 1 de cada 6 niños de 5 a 11 años tiene anemia (INS-CENAN 2025). Alineados al ODS 2 (poner fin a todas las formas de malnutrición), damos talleres para papá y mamá en colegios públicos de Lima Norte: cómo armar una lonchera saludable, con hierro de mercado, por unos S/3.</p>
<div class="grid3">''' + card("2027 · piloto", "1 taller", "50 familias, dentro del presupuesto de muestras en colegios.", "c1") + card("Desde 2029 · primer año con ganancia", "1 % de la venta", "Unos S/3,800 al año: 10 talleres y 500 familias, dentro del 8 % de marketing.", "c4") + card("Cómo se mide", "7 de cada 10", "familias arman 2 loncheras saludables con hierro por semana, a los 30 días.", "c3") + '''</div>
<p style="margin-top:4mm">El plan no cambia las cifras del negocio: el piloto sale del presupuesto de muestras y, desde 2029, el 1 % entra dentro del marketing.</p>
<div style="margin-top:12mm;background:#2E120C;color:#FBF3E8;border-radius:5mm;padding:9mm 10mm" class="avoid">
<p class="k" style="color:#E3A33B">Cierre</p>
<h2 style="color:#FBF3E8;font-size:22pt;margin:2mm 0 3mm">No hace milagros. Es <em style="color:#E3A33B">una pelea menos</em> cada mañana.</h2>
<p style="color:#E9D6C3">AndiBite: dulce para ellos, tranquilidad para ti.</p>
<p style="color:#E9D6C3;margin-top:4mm;font-size:9.5pt">Presentación animada: andibite-feria.cingacordova.workers.dev · Instagram y TikTok: @andibite.pe · Archivos de apoyo: «AndiBite - Plan de lanzamiento.pdf», «AndiBite - Modelo financiero.xlsx» y «AndiBite - Costos y ganancia por presentacion.xlsx».</p></div>'''))

out.append("</body></html>")
(D / "proyecto.html").write_text("\n".join(out), encoding="utf-8")
print("html listo")
