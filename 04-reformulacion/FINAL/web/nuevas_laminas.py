"""Inserta en fuente.html las láminas del plan de negocio (sin borrar las existentes).
Contenido: documentos 21 (estrategia) y 22 (números). Uso: python3.13 nuevas_laminas.py"""
import pathlib
P = pathlib.Path(__file__).resolve().parent / "fuente.html"
s = P.read_text(encoding="utf-8")
assert "s-ident" not in s, "ya insertadas"

def li(items, d0=0.5, step=0.12):
    return "".join(f"<li>{t}</li>" for t in items)

IDENT = """<!-- 1b · Identidad -->
<section class="slide s-ident" data-part="1">
  <p class="kick a fade"><i></i>Quiénes somos</p>
  <h2 class="a up" style="--d:.1s">Por qué existimos y <em>hacia dónde vamos</em></h2>
  <div class="ident">
    <div class="col">
      <div class="card a left" style="--d:.4s"><p class="k">Propósito</p><h3>Que darle hierro a un hijo deje de ser una pelea.</h3></div>
      <div class="card a left" style="--d:.6s"><p class="k">Misión</p><p style="font:800 30px/1.25 var(--ft);color:var(--cafe)">Un brownie rico, sin octógonos y con hierro comprobado para la lonchera.</p></div>
      <div class="card a left" style="--d:.8s;background:#7A4A35;border-color:#7A4A35"><p class="k" style="color:var(--arena)">Visión 2031</p><p style="font:800 30px/1.25 var(--ft);color:#FFD27A">La lonchera con hierro de 780 familias en 42 colegios de Lima.</p></div>
    </div>
    <div class="card a right" style="--d:.7s">
      <p class="k">Cinco valores que no negociamos</p>
      <div class="feat" style="margin-top:18px;gap:18px">
        <div><i>1</i><p><b>Probar antes que prometer.</b> Primero se prueba; después contamos qué lleva.</p></div>
        <div><i>2</i><p><b>Decimos lo comprobado.</b> 1.9 mg de hierro, comprobado en laboratorio.</p></div>
        <div><i>3</i><p><b>Le hablamos a papá y mamá.</b> Ningún niño en anuncios.</p></div>
        <div><i>4</i><p><b>Hecho con lo nuestro.</b> Cuatro ingredientes peruanos.</p></div>
        <div><i>5</i><p><b>Trabajo formal.</b> Todos cobran, con EsSalud y carné de sanidad.</p></div>
      </div>
    </div>
  </div>
</section>

"""

LIVE = """<!-- 5b · Live del focus -->
<section class="slide s-live" data-part="1">
  <p class="kick a fade"><i></i>Investigación</p>
  <h2 class="a up" style="--d:.1s">El focus, <em>tal como pasó</em></h2>
  <div class="row" style="flex:1;gap:40px;margin-top:0">
    <div class="vid a zoom" style="--d:.3s;flex:1.6"><img src="img/deg2.jpg" alt="" /><span class="live">● FOCUS EN VIVO</span><div class="play pulse"></div>
      <div class="cap">Aquí va el video del focus.<span>Ocho mamás probaron. Ninguna la notó.</span></div></div>
    <div class="col" style="flex:1;justify-content:center;gap:20px">
      <div class="mini a right" style="--d:.6s"><div><b>20 de septiembre de 2026</b><span>En un colegio, con 8 mamás de nivel B.</span></div></div>
      <div class="mini a right" style="--d:.8s"><div><b>Probaron primero</b><span>Preguntamos después, sin decir qué llevaba.</span></div></div>
      <div class="mini a right" style="--d:1s"><div><b>Ninguna notó la sangrecita</b><span>Ni en el sabor ni en el olor.</span></div></div>
      <div class="mini a right" style="--d:1.2s"><div><b>El precio lo pusieron ellas</b><span>S/10 solo por sabor; S/20 a S/24 al conocerlo.</span></div></div>
    </div>
  </div>
</section>

"""

CHAIN = """<!-- 11b · Del plan estratégico al operativo -->
<section class="slide s-chain" data-part="3">
  <p class="kick a fade"><i></i>Plan de negocio</p>
  <h2 class="a up" style="--d:.1s">De la estrategia <em>al trabajo de cada lunes</em></h2>
  <div class="chain">
    <div class="lk a up" style="--d:.3s"><span class="st">1 · Visión</span><b>Al 2031</b><span>La lonchera con hierro de 780 familias en 42 colegios.</span></div>
    <div class="lk a up" style="--d:.5s"><span class="st">2 · Objetivo 2027</span><b>250 familias</b><span>Que compran cada semana, en 14 colegios a diciembre.</span></div>
    <div class="lk a up" style="--d:.7s"><span class="st">3 · Estrategia</span><b>Crecer por colegios</b><span>Probar en persona y volver a pedir cada semana.</span></div>
    <div class="lk a up" style="--d:.9s"><span class="st">4 · Plan de acción</span><b>Uno por mes</b><span>8 colegios el 6 de marzo; uno más por mes hasta 14.</span></div>
    <div class="lk a up" style="--d:1.1s"><span class="st">5 · KPI</span><b>19 al día</b><span>Brownies por colegio y día al 15 de junio; 35 % repite en abril.</span></div>
  </div>
  <p class="note a up" style="--d:1.5s;margin-top:26px">Si en junio cada colegio vende 19 brownies al día, <em>abrimos el siguiente.</em></p>
</section>

"""

FODA = """<!-- 11c · FODA -->
<section class="slide s-foda" data-part="3">
  <p class="kick a fade"><i></i>Plan de negocio</p>
  <h2 class="a up" style="--d:.1s">Dónde estamos: <em>nuestro FODA</em></h2>
  <div class="quad">
    <div class="qc c1 a zoom" style="--d:.3s"><span class="tag">Internas · positivas</span><h3>Fortalezas</h3><ul><li>Ninguna de las 8 mamás notó la sangrecita</li><li>1.9 mg de hierro comprobado y 0 octógonos</li><li>Precio que pusieron ellas: S/22</li><li>Maquila en el INDDA-UNALM y app Andi</li></ul></div>
    <div class="qc c3 a zoom" style="--d:.45s"><span class="tag">Externas · positivas</span><h3>Oportunidades</h3><ul><li>Unos 39,000 hogares B1 con hijos de 4 a 11</li><li>83 % dice que los octógonos influyen al comprar</li><li>Snacks saludables crecen cerca de 6 % al año</li><li>Papá y mamá confían en otros padres</li></ul></div>
    <div class="qc c2 a zoom" style="--d:.6s"><span class="tag">Internas · negativas</span><h3>Debilidades</h3><ul><li>El primer año pierde: gana desde abril de 2028</li><li>Marca nueva, con S/15,040 de marketing</li><li>Cada colegio tiene que abrirnos la puerta</li><li>Lote chico: producir cuesta S/2.07 en 2027</li></ul></div>
    <div class="qc c4 a zoom" style="--d:.75s"><span class="tag">Externas · negativas</span><h3>Amenazas</h3><ul><li>Niño costero hasta febrero de 2027: plátano de Piura</li><li>Cacao caro y cambiante</li><li>Brownies sin sellos en el supermercado</li><li>Desconfianza de lo envasado «saludable»</li></ul></div>
  </div>
</section>

<!-- 11d · FODA cruzado -->
<section class="slide s-fodax" data-part="3">
  <p class="kick a fade"><i></i>Plan de negocio</p>
  <h2 class="a up" style="--d:.1s">Qué hacemos <em>con nuestro FODA</em></h2>
  <table class="tbl a up" style="--d:.3s;font-size:25px">
    <tr><th style="width:300px">Cruce</th><th>Estrategia</th></tr>
    <tr><td>FO · fortalezas y oportunidades</td><td>«¿La notaste?»: prueba a ciegas en la puerta del colegio, con «sin octógonos» al frente.</td></tr>
    <tr><td>FA · fortalezas y amenazas</td><td>Contador en vivo «Probaron · La notaron»: la prueba la pone papá, no la marca.</td></tr>
    <tr><td>DO · debilidades y oportunidades</td><td>Entrar al colegio por los padres: delegada del salón, reunión de padres y embajadores.</td></tr>
    <tr><td>DA · debilidades y amenazas</td><td>Contrato anual de maquila, cacao en stock y plátano de dos regiones.</td></tr>
  </table>
  <p class="note a up" style="--d:.9s;margin-top:28px">La campaña no pide que nos crean: <em>pide que prueben.</em></p>
</section>

"""

ESTR = """<!-- 11e · Estructura estratégica -->
<section class="slide s-org" data-part="3">
  <p class="kick a fade"><i></i>Plan de negocio</p>
  <h2 class="a up" style="--d:.1s">Estructura: <em>un equipo chico y formal</em></h2>
  <div class="row" style="gap:16px;margin-top:22px">
    <span class="pill r a pop" style="--d:.3s">Porter: enfoque con diferenciación</span>
    <span class="pill a pop" style="--d:.4s">Enfoque: papá y mamá B1 con hijos en colegio privado</span>
    <span class="pill a pop" style="--d:.5s">Diferencia: no se nota, hierro comprobado, 0 octógonos</span>
  </div>
  <div class="org">
    <div class="lvl a down" style="--d:.6s"><div class="box top"><b>Directorio</b><span>Cuatro socios · una reunión al mes</span></div></div>
    <div class="lvl a down" style="--d:.8s"><div class="box"><b>Gerente general y comercial</b><span>Socio a tiempo completo · desde marzo de 2027</span></div><div class="box ext"><b>Contador y community manager</b><span>Externos · desde dic. 2026 y feb. 2027</span></div></div>
    <div class="lvl a down" style="--d:1s"><div class="box"><b>Coordinadora de ventas y operaciones</b><span>Pedidos, planta, entregas y colegios</span></div><div class="box ext"><b>Planta maquiladora INDDA-UNALM</b><span>Aliado: hornea, pesa y sella</span></div></div>
    <div class="lvl a down" style="--d:1.2s"><div class="box"><b>Promotores por día</b><span>Degustación y venta · S/90 por día</span></div><div class="box"><b>Asistente de reparto</b><span>Desde 2028, con más de 16 colegios</span></div></div>
  </div>
</section>

"""

ANSOFF = """<!-- 11f · Ansoff -->
<section class="slide s-ansoff" data-part="3">
  <p class="kick a fade"><i></i>Clave de crecimiento</p>
  <h2 class="a up" style="--d:.1s">Matriz de Ansoff: <em>crecer donde ya ganamos</em></h2>
  <div class="row" style="flex:1;gap:36px;margin-top:0">
    <div class="col" style="flex:1.6">
      <div class="axis a fade" style="--d:.3s"><span>Mercado actual: familias de nuestros colegios</span><span>Mercado nuevo</span></div>
      <div class="quad" style="margin-top:10px">
        <div class="qc c2 now a zoom" style="--d:.4s"><span class="badge">Hoy</span><span class="tag">Producto actual</span><h3>Penetración de mercado</h3><ul><li>2027-2031: de 8 a 42 colegios</li><li>Embajadores y recompra semanal</li></ul></div>
        <div class="qc c3 a zoom" style="--d:.55s"><span class="tag">Producto actual</span><h3>Desarrollo de mercado</h3><ul><li>2029-2031: módulo fijo en el mall</li><li>Colegios de Lima Este y Sur</li></ul></div>
        <div class="qc c1 a zoom" style="--d:.7s"><span class="tag">Producto nuevo</span><h3>Desarrollo de producto</h3><ul><li>2029: sabor de temporada con lúcuma</li><li>Se paga con la caja de la bolsa de 6</li></ul></div>
        <div class="qc c4 a zoom" style="--d:.85s"><span class="tag">Producto nuevo</span><h3>Diversificación</h3><ul><li>2030: prueba de una barra con hierro para papá y mamá</li><li>2031: venta, solo si el núcleo gana</li></ul></div>
      </div>
    </div>
    <div class="col" style="flex:1;justify-content:center">
      <div class="card a right" style="--d:1s"><p class="k">Participación de mercado</p><p style="font:800 64px/1 var(--ft);color:var(--ladrillo);margin:10px 0">0.6 % → 2 %</p><p class="muted" style="font-size:23px">De los 39,000 hogares B1 con hijos: 250 familias en 2027 y unas 780 en 2031.</p></div>
      <div class="card a right" style="--d:1.2s"><p class="k">Cómo lo desarrollamos</p><p style="font-size:24px;margin-top:6px">Cada paso se abre solo si el anterior cumple su indicador.</p></div>
    </div>
  </div>
</section>

"""

BCG = """<!-- 11g · BCG -->
<section class="slide s-bcg" data-part="3">
  <p class="kick a fade"><i></i>Portafolio</p>
  <h2 class="a up" style="--d:.1s">Matriz BCG: <em>hoy y en 2031</em></h2>
  <div class="axis a fade" style="--d:.3s"><span>↑ Crecimiento del mercado alto</span><span>Participación: alta ← → baja</span></div>
  <div class="quad" style="margin-top:10px">
    <div class="qc c3 a zoom" style="--d:.4s"><span class="tag">Alta participación · alto crecimiento</span><h3>★ Estrella</h3><ul><li>2028: bolsas de 6 Chispa y Andi, con 24 colegios</li></ul></div>
    <div class="qc c2 now a zoom" style="--d:.55s"><span class="badge">Hoy</span><span class="tag">Baja participación · alto crecimiento</span><h3>? Interrogante</h3><ul><li>2027: Chispa, Andi y la unidad a S/5</li><li>Luego: lúcuma (2029) y barra para papá y mamá (2031)</li></ul></div>
    <div class="qc c1 a zoom" style="--d:.7s"><span class="tag">Alta participación · bajo crecimiento</span><h3>$ Vaca</h3><ul><li>2030-2031: la bolsa de 6, con costo de S/1.46</li><li>Su caja paga lo nuevo</li></ul></div>
    <div class="qc light a zoom" style="--d:.85s"><span class="tag">Baja participación · bajo crecimiento</span><h3>Perro</h3><ul><li>Lo que no repite, sale</li><li>La unidad suelta queda chica a propósito: empuja la bolsa</li></ul></div>
  </div>
  <p class="muted a fade" style="--d:1.1s;font-size:21px;margin-top:12px">La app Andi no se mide como producto: sostiene la recompra de las bolsas.</p>
</section>

"""

NINO = """<!-- 11h · Contexto y El Niño -->
<section class="slide s-nino" data-part="3">
  <p class="kick a fade"><i></i>Contexto del mercado</p>
  <h2 class="a up" style="--d:.1s">El mercado crece, <em>y El Niño es el riesgo</em></h2>
  <div class="risk">
    <div class="col">
      <div class="mini a left" style="--d:.3s"><div><b>Snacks saludables: cerca de 6 % al año</b><span>Y el 83 % dice que los octógonos influyen en lo que compra.</span></div></div>
      <div class="mini a left" style="--d:.5s"><div><b>Niño costero hasta febrero de 2027</b><span>ENFEN, 13 de noviembre de 2026: lluvias fuertes en el norte.</span></div></div>
      <div class="mini a left" style="--d:.7s"><div><b>Plátano de Piura</b><span>Se espera 11 % menos banano exportado en 2027.</span></div></div>
      <div class="mini a left" style="--d:.9s"><div><b>Cacao caro</b><span>Cerca de US$5,400 por tonelada en octubre de 2026.</span></div></div>
    </div>
    <div class="col">
      <div class="card a right" style="--d:.6s;background:#7A4A35;border-color:#7A4A35"><p class="k" style="color:var(--arena)">Cuánto pesa</p><p style="font:800 34px/1.25 var(--ft);color:#fff;margin-top:8px">Cacao y plátano son unos S/0.13 por brownie. El riesgo es quedarnos sin insumo.</p></div>
      <div class="feat" style="margin-top:8px;gap:16px">
        <div class="a right" style="--d:.9s"><i>1</i><p><b>Cacao en stock:</b> comprar en febrero lo de 3 meses.</p></div>
        <div class="a right" style="--d:1.1s"><i>2</i><p><b>Plátano de dos orígenes:</b> Piura y San Martín.</p></div>
        <div class="a right" style="--d:1.3s"><i>3</i><p><b>Chispa de respaldo:</b> si falta plátano, más Chispa.</p></div>
      </div>
      <p class="note a up" style="--d:1.6s;font-size:26px;margin-top:14px">El precio no se toca en 2027.</p>
    </div>
  </div>
</section>

"""

SIETEP = """<!-- 11i · 7P -->
<section class="slide s-7p" data-part="3">
  <p class="kick a fade"><i></i>Marketing mix</p>
  <h2 class="a up" style="--d:.1s">Una estrategia <em>para cada P</em></h2>
  <table class="tbl a up" style="--d:.3s;font-size:23px">
    <tr><th style="width:260px">P</th><th>Estrategia</th></tr>
    <tr><td>Producto</td><td>Brownie de 30 g en su bolsita; Chispa y Andi; 1.9 mg de hierro comprobado.</td></tr>
    <tr><td>Precio</td><td>Por valor percibido: bolsa de 6 a S/22 (S/3.67 cada uno) y unidad a S/5.</td></tr>
    <tr><td>Plaza</td><td>Selectiva: colegio, kermés, stand de fin de semana y mall por temporadas.</td></tr>
    <tr><td>Promoción</td><td>«Lleva sangrecita. ¿La notaste?»: S/15,040 en 2027; anuncios solo para adultos.</td></tr>
    <tr><td>Personas</td><td>Gerente, coordinadora y promotores con carné; delegadas y embajadores.</td></tr>
    <tr><td>Procesos</td><td>Prueba, pedido del salón, Yape, entrega el lunes en la puerta y recompra.</td></tr>
    <tr><td>Evidencia física</td><td>Bolsa con «No la escondemos», registro sanitario y el contador en vivo.</td></tr>
  </table>
</section>

"""

DISTR = """<!-- 13b · Distribución selectiva -->
<section class="slide s-dist" data-part="4">
  <p class="kick a fade"><i></i>Canales</p>
  <h2 class="a up" style="--d:.1s">Distribución selectiva: <em>¿por qué nos compran?</em></h2>
  <div class="row" style="flex:1;gap:44px;margin-top:30px">
    <div class="col" style="flex:1">
      <div class="card a left" style="--d:.3s;background:#7A4A35;border-color:#7A4A35"><p class="k" style="color:var(--arena)">Selectiva</p><h3 style="color:#fff">Pocos puntos, elegidos porque ahí se prueba y se vuelve a comprar</h3></div>
      <div class="mini a left" style="--d:.6s"><div><b>Sí: colegio, kermés, stand y mall por temporadas</b><span>79 % de los brownies de 2027 salen del colegio.</span></div></div>
      <div class="mini a left" style="--d:.8s"><div><b>No: bodegas ni quioscos</b><span>Ahí nadie prueba, y el quiosco no acepta edulcorantes.</span></div></div>
    </div>
    <div class="col" style="flex:1.1">
      <p class="k a fade" style="--d:.5s">Las razones del cliente</p>
      <div class="pase"><div class="steps">
        <div class="a right" style="--d:.7s"><i>1</i><b>Mi hijo se lo come:</b>&nbsp;ninguna mamá notó la sangrecita.</div>
        <div class="a right" style="--d:.85s"><i>2</i><b>Suma hierro:</b>&nbsp;1.9 mg, comprobado en laboratorio.</div>
        <div class="a right" style="--d:1s"><i>3</i><b>Sin octógonos:</b>&nbsp;eritritol, plátano y poca panela.</div>
        <div class="a right" style="--d:1.15s"><i>4</i><b>Me resuelve la mañana:</b>&nbsp;uno por día, a S/3.67.</div>
        <div class="a right" style="--d:1.3s"><i>5</i><b>Llega el lunes al colegio</b>&nbsp;y vuelvo a pedir en un clic.</div>
      </div></div>
    </div>
  </div>
</section>

"""

KPI = """<!-- 21b · KPIs -->
<section class="slide s-kpi" data-part="4">
  <p class="kick a fade"><i></i>Control</p>
  <h2 class="a up" style="--d:.1s">KPIs claros, <em>con fecha de corte</em></h2>
  <div class="kgrid">
    <div class="kc a up" style="--d:.3s"><p class="k">Comercial · 31 de marzo de 2027</p><b>133</b><span>bolsas pedidas por los salones en el primer mes.</span></div>
    <div class="kc a up" style="--d:.4s"><p class="k">Comercial · 30 de abril de 2027</p><b>35 %</b><span>de las familias de marzo vuelve a pedir.</span></div>
    <div class="kc hl a up" style="--d:.5s"><p class="k">Comercial · 15 de junio de 2027</p><b>19 o más</b><span>brownies por colegio y día. Si se cumple, se abre el siguiente colegio.</span></div>
    <div class="kc a up" style="--d:.6s"><p class="k">Comunicación · cada mes</p><b>S/8.23</b><span>o menos por contacto de WhatsApp que traen los anuncios.</span></div>
    <div class="kc a up" style="--d:.7s"><p class="k">Comunicación · enero a junio</p><b>125,000</b><span>visualizaciones y 30 videos de reacción, con respuesta en menos de 2 horas.</span></div>
    <div class="kc a up" style="--d:.8s"><p class="k">Financiero · desde abril de 2028</p><b>+ cada mes</b><span>resultado positivo; la caja nunca baja de S/7,000.</span></div>
  </div>
  <p class="muted a fade" style="--d:1.1s;font-size:21px;margin-top:14px">Si un KPI no se cumple, hay una acción escrita: por ejemplo, si repite menos de 30 %, no se gasta en anuncios nuevos y se vuelve a las muestras.</p>
</section>

<!-- 21c · Métricas para escalar -->
<section class="slide s-cac" data-part="4">
  <p class="kick a fade"><i></i>Métricas para escalar</p>
  <h2 class="a up" style="--d:.1s">Cuánto cuesta una familia <em>y cuánto deja</em></h2>
  <div class="kgrid" style="grid-template-columns:repeat(3,1fr)">
    <div class="kc a up" style="--d:.3s"><p class="k">CAC · costo de conseguir una familia</p><b>S/60</b><span>S/15,040 de marketing ÷ 250 familias que compran cada semana (2027).</span></div>
    <div class="kc a up" style="--d:.45s"><p class="k">LTV · lo que deja en su vida de cliente</p><b>S/592</b><span>S/8.22 por bolsa × 36 bolsas al año × 2 años con nosotros.</span></div>
    <div class="kc hl a up" style="--d:.6s"><p class="k">LTV ÷ CAC</p><b>9.7 veces</b><span>Cada sol para traer una familia vuelve casi diez veces. En el peor caso, 3.</span></div>
  </div>
  <div class="row" style="gap:22px;margin-top:22px">
    <div class="card a up" style="--d:.8s;flex:1;padding:24px 28px"><p class="k">NPS · cuánto nos recomiendan</p><p style="font:800 30px/1.25 var(--ft);color:var(--cafe);margin-top:6px">Meta: 40 en 2027 y 50 desde 2028</p><p class="muted" style="font-size:21px">«Del 0 al 10, ¿recomendarías AndiBite a otra mamá o papá?» Promotores (9-10) menos detractores (0-6).</p></div>
    <div class="card a up" style="--d:1s;flex:1;padding:24px 28px;background:#7A4A35;border-color:#7A4A35"><p class="k" style="color:var(--arena)">Regla para escalar</p><p style="font:800 30px/1.25 var(--ft);color:#FFD27A;margin-top:6px">Abrimos más colegios solo si LTV ÷ CAC es 3 o más con 6 meses de datos reales.</p></div>
  </div>
</section>

"""

DEMANDA = """<!-- 22b · Demanda por canal -->
<section class="slide s-dem" data-part="5">
  <p class="kick a fade"><i></i>Números</p>
  <h2 class="a up" style="--d:.1s">Proyección de la demanda <em>por canal</em></h2>
  <div class="wrap" style="display:grid;grid-template-columns:1.5fr 1fr;gap:50px;flex:1;margin-top:24px">
    <div class="chart a fade" style="--d:.3s"><p class="k" style="margin-bottom:10px">Brownies al año por canal, 2027-2031</p><svg id="chart-dem" viewBox="0 0 1040 560"></svg></div>
    <div class="col" style="justify-content:center">
      <div class="leg" style="flex-direction:column;align-items:flex-start;gap:14px;font-size:24px"><span><i style="background:#BA4036"></i>Colegio (pedido del salón)</span><span><i style="background:#E3A33B"></i>Kermeses y reuniones de padres</span><span><i style="background:#7C8A3A"></i>Recompra por WhatsApp</span><span><i style="background:#9E3A44"></i>Stand de fin de semana y mall</span></div>
      <div class="card a up" style="--d:1.2s;padding:24px 28px"><p class="k">Ventas con IGV</p><p style="font:800 40px/1.2 var(--ft);color:var(--cafe);margin-top:6px">S/170,715 en 2027<br />S/634,073 en 2031</p><p class="muted" style="font-size:21px">El colegio es 80 % a 87 % de la venta.</p></div>
    </div>
  </div>
</section>

<!-- 22c · Ventas de enero a diciembre -->
<section class="slide s-mes" data-part="5">
  <p class="kick a fade"><i></i>Números</p>
  <h2 class="a up" style="--d:.1s">Ventas de 2027, <em>de enero a diciembre</em></h2>
  <div class="wrap" style="display:grid;grid-template-columns:1.6fr 1fr;gap:46px;flex:1;margin-top:24px">
    <div class="chart a fade" style="--d:.3s"><p class="k" style="margin-bottom:10px">Brownies vendidos cada mes, por canal</p><svg id="chart-mes" viewBox="0 0 1040 560"></svg></div>
    <div class="col" style="justify-content:center;gap:18px">
      <div class="kc a right" style="--d:.6s"><p class="k">Enero y febrero</p><b style="font-size:40px">0</b><span>Registro sanitario, lote piloto y contratos: aún no se vende.</span></div>
      <div class="kc a right" style="--d:.8s"><p class="k">Marzo · lanzamiento</p><b style="font-size:40px">2,734</b><span>brownies y S/10,516: colegios, pop-up, stand y kermeses.</span></div>
      <div class="kc hl a right" style="--d:1s"><p class="k">Noviembre · mejor mes</p><b style="font-size:40px">6,339</b><span>brownies y S/24,382, con 14 colegios.</span></div>
      <p class="muted a fade" style="--d:1.2s;font-size:20px">Julio y diciembre bajan por las vacaciones.</p>
    </div>
  </div>
</section>

"""

INV = """<!-- 25b · Inversión y trámites -->
<section class="slide s-inv" data-part="5">
  <p class="kick a fade"><i></i>Números</p>
  <h2 class="a up" style="--d:.1s">Inversión para formalizar <em>la empresa</em></h2>
  <div class="row" style="flex:1;gap:40px;margin-top:6px">
    <table class="tbl a up" style="--d:.3s;flex:1.35;font-size:19px;margin-top:16px">
      <tr><th>Trámite</th><th>Entidad</th><th style="text-align:right">S/</th></tr>
      <tr><td>Constitución de la S.A.C.</td><td>SUNARP y notaría</td><td class="n">650</td></tr>
      <tr><td>RUC y REMYPE</td><td>SUNAT y Min. de Trabajo</td><td class="n">0</td></tr>
      <tr><td>Legalización de libros</td><td>Notaría</td><td class="n">150</td></tr>
      <tr><td>Marca, clase 30</td><td>INDECOPI</td><td class="n">401</td></tr>
      <tr><td>Registro sanitario (tasa)</td><td>DIGESA</td><td class="n">0</td></tr>
      <tr><td>Análisis para el registro</td><td>Laboratorio acreditado</td><td class="n">1,200</td></tr>
      <tr><td>Perfil nutricional y hierro</td><td>Laboratorio acreditado</td><td class="n">1,600</td></tr>
      <tr><td>Vida útil (2 sabores)</td><td>Laboratorio acreditado</td><td class="n">2,400</td></tr>
      <tr><td>Etiqueta y revisión</td><td>Norma de rotulado</td><td class="n">650</td></tr>
      <tr><td>Contrato de maquila</td><td>Abogado</td><td class="n">400</td></tr>
      <tr><td>Libro de reclamaciones</td><td>INDECOPI</td><td class="n">150</td></tr>
      <tr><td>Carnés de sanidad y póliza</td><td>Municipalidad y aseguradora</td><td class="n">720</td></tr>
      <tr class="tot"><td>Documentos y permisos</td><td></td><td class="n">8,321</td></tr>
    </table>
    <div class="col" style="flex:1;justify-content:center">
      <p class="k a fade" style="--d:.5s">Inversión inicial · S/25,432</p>
      <div class="hb" style="--lab:250px;--h:46px;gap:12px">
        <div class="r"><span class="l a fade" style="--d:.6s">Documentos y permisos</span><div class="t"><div class="b cf a gx" style="--w:70%;--d:.7s"></div><span class="v a fade" style="--d:1.4s">8,321</span></div></div>
        <div class="r"><span class="l a fade" style="--d:.7s">Arranque</span><div class="t"><div class="b cf a gx" style="--w:58.2%;--d:.8s"></div><span class="v a fade" style="--d:1.5s">6,920</span></div></div>
        <div class="r"><span class="l a fade" style="--d:.8s">Desarrollo</span><div class="t"><div class="b cf a gx" style="--w:30.2%;--d:.9s"></div><span class="v a fade" style="--d:1.6s">3,591</span></div></div>
        <div class="r"><span class="l a fade" style="--d:.9s">Equipos</span><div class="t"><div class="b cf a gx" style="--w:23.9%;--d:1s"></div><span class="v a fade" style="--d:1.7s">2,838</span></div></div>
        <div class="r"><span class="l a fade" style="--d:1s">Marca y app</span><div class="t"><div class="b cf a gx" style="--w:18.9%;--d:1.1s"></div><span class="v a fade" style="--d:1.8s">2,250</span></div></div>
        <div class="r"><span class="l a fade" style="--d:1.1s">Imprevistos</span><div class="t"><div class="b cf a gx" style="--w:12.7%;--d:1.2s"></div><span class="v a fade" style="--d:1.9s">1,512</span></div></div>
      </div>
      <p class="muted a fade" style="--d:2s;font-size:20px;margin-top:16px">No aplican licencia de funcionamiento ni Defensa Civil: produce la planta maquiladora.</p>
    </div>
  </div>
</section>

"""

POST = """<!-- 26b · Ciclo de vida -->
<section class="slide s-lc" data-part="5">
  <p class="kick a fade"><i></i>Después del lanzamiento</p>
  <h2 class="a up" style="--d:.1s">Acciones según <em>el ciclo de vida</em></h2>
  <div class="lc">
    <svg viewBox="0 0 1680 300">
      <line x1="40" y1="270" x2="1660" y2="270" stroke="#D9B48F" stroke-width="3"/>
      <path class="draw" style="--d:.3s" pathLength="1" d="M40 262 C 260 258, 360 230, 470 190 S 760 70, 900 52 S 1180 40, 1300 50 S 1560 80, 1660 92" fill="none" stroke="#BA4036" stroke-width="7" stroke-linecap="round"/>
      <path class="draw" style="--d:1.4s" pathLength="1" d="M1300 50 C 1420 40, 1540 28, 1660 22" fill="none" stroke="#7C8A3A" stroke-width="5" stroke-dasharray="1" stroke-linecap="round"/>
      <g class="a fade" style="--d:1.8s"><text x="1500" y="18" font-family="Jakarta" font-weight="800" font-size="20" fill="#7C8A3A">Relanzar en vez de caer</text></g>
      <g font-family="Jakarta" font-weight="800" font-size="19" fill="#7A5A4C"><text x="60" y="296">Nov 2026</text><text x="470" y="296">Jul 2027</text><text x="900" y="296">2030</text><text x="1300" y="296">Desde 2029</text></g>
    </svg>
    <div class="stages">
      <div class="a up" style="--d:.6s"><span class="d">Introducción · nov 2026 a jun 2027</span><b>Que prueben</b><span>Concurso, revelación el 8 de febrero, lanzamiento del 6 al 14 de marzo. KPI: 133 bolsas y 35 % que repite.</span></div>
      <div class="a up" style="--d:.8s"><span class="d">Crecimiento · jul 2027 a 2029</span><b>Más colegios</b><span>14 colegios en septiembre y 24 en 2028; módulo de vuelta al colegio; contrato anual de maquila.</span></div>
      <div class="a up" style="--d:1s"><span class="d">Madurez · 2030 a 2031</span><b>Rentabilidad</b><span>36 y 42 colegios; embajadores; marketing de 8 % de la venta. Inversión recuperada en 2030.</span></div>
      <div class="a up" style="--d:1.2s"><span class="d">Evitar el declive · desde 2029</span><b>Renovarse</b><span>Sabor de temporada, nuevas zonas de Lima y prueba a ciegas cada marzo.</span></div>
    </div>
  </div>
</section>

<!-- 26c · Diversificación -->
<section class="slide s-div" data-part="5">
  <p class="kick a fade"><i></i>Después del lanzamiento</p>
  <h2 class="a up" style="--d:.1s">Diversificar, <em>solo si el núcleo funciona</em></h2>
  <div class="row" style="flex:1;gap:40px;margin-top:30px">
    <div class="col" style="flex:1.1">
      <div class="card a left" style="--d:.3s"><p class="k">Qué</p><h3>Una barra de cacao y cañihua con sangrecita, para papá y mamá</h3><p class="muted">La familia ya confía en la marca. Se suma al pedido del salón: no abre un canal nuevo.</p></div>
      <div class="card a left" style="--d:.5s"><p class="k">Qué no haremos</p><p style="font-size:25px">Snacks salados: la sangrecita solo se acepta en lo dulce.</p></div>
    </div>
    <div class="col" style="flex:1">
      <div class="pase"><div class="steps">
        <div class="a right" style="--d:.6s"><i>1</i><b>2029:</b>&nbsp;sabor de temporada con lúcuma.</div>
        <div class="a right" style="--d:.8s"><i>2</i><b>2030:</b>&nbsp;prueba de la barra con 50 familias.</div>
        <div class="a right" style="--d:1s"><i>3</i><b>2031:</b>&nbsp;venta, si las familias repiten.</div>
      </div></div>
      <div class="card a up" style="--d:1.2s;background:#7A4A35;border-color:#7A4A35"><p class="k" style="color:var(--arena)">Condición</p><p style="font:800 28px/1.3 var(--ft);color:#FFD27A;margin-top:6px">2030 con ganancia, 36 colegios y 35 % de familias que repiten. Se paga con utilidad, nunca con préstamo.</p></div>
    </div>
  </div>
</section>

<!-- 26d · Responsabilidad social -->
<section class="slide s-rse" data-part="5">
  <p class="kick a fade"><i></i>Responsabilidad social · ODS 2</p>
  <h2 class="a up" style="--d:.1s">Hierro <em>que se comparte</em></h2>
  <div class="row" style="flex:1;gap:40px;margin-top:28px">
    <div class="col" style="flex:1">
      <div class="card a left" style="--d:.3s;background:var(--oliva);border-color:var(--oliva)"><p class="k" style="color:#EEF2DC">ODS 2 · meta 2.2</p><h3 style="color:#fff">Poner fin a todas las formas de malnutrición</h3><p style="color:#EEF2DC;font-size:23px">En el Perú, 1 de cada 6 niños de 5 a 11 años tiene anemia (INS-CENAN 2025).</p></div>
      <div class="card a left" style="--d:.5s"><p class="k">La campaña</p><p style="font-size:25px">Talleres para papá y mamá en colegios públicos de Lima Norte: armar una lonchera con hierro de mercado por unos S/3.</p></div>
    </div>
    <div class="col" style="flex:1">
      <div class="kc a right" style="--d:.6s"><p class="k">2027 · piloto</p><b style="font-size:42px">1 taller</b><span>50 familias, dentro del presupuesto de muestras en colegios.</span></div>
      <div class="kc hl a right" style="--d:.8s"><p class="k">Desde 2029 · el primer año con ganancia</p><b style="font-size:42px">1 % de la venta</b><span>Unos S/3,800 al año: 10 talleres y 500 familias, dentro del 8 % de marketing.</span></div>
      <div class="kc a right" style="--d:1s"><p class="k">Cómo se mide</p><b style="font-size:42px">7 de cada 10</b><span>familias arman 2 loncheras con hierro por semana, a los 30 días.</span></div>
    </div>
  </div>
</section>

"""

def ins(before, block):
    global s
    assert before in s, before
    s = s.replace(before, block + before, 1)

ins("<!-- 2 · Problema -->", IDENT)
ins("<!-- 6 · Público -->", LIVE)
ins("<!-- 12 · Precio -->", CHAIN + FODA + ESTR + ANSOFF + BCG + NINO + SIETEP)
ins("<!-- 14 · Centro comercial -->", DISTR)
ins("<!-- 22 · Marketing -->", KPI)
ins("<!-- 23 · Dos años -->", DEMANDA)
ins("<!-- 26 · Financiamiento -->", INV)
ins("<!-- 27 · Cierre -->", POST)
P.write_text(s, encoding="utf-8")
print(s.count('<section class="slide'))
