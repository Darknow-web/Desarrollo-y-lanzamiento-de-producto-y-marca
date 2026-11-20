"""Kit de impresión del stand (cartel A3 y hojas A4). Uso: python3.13 FINAL/docs/build_kit.py && node FINAL/docs/kit.mjs"""
import pathlib
D = pathlib.Path(__file__).resolve().parent
FONTS = """
@font-face{font-family:J;src:url(../web/fonts/plus-jakarta-sans-latin-800-normal.woff2);font-weight:800}
@font-face{font-family:N;src:url(../web/fonts/nunito-latin-400-normal.woff2);font-weight:400}
@font-face{font-family:N;src:url(../web/fonts/nunito-latin-800-normal.woff2);font-weight:800}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:N,sans-serif;color:#3B1A14;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.j{font-family:J,sans-serif;font-weight:800}
"""
QR = """<script src="../web/vendor/qrcode.js"></script><script src="../web/config.js"></script>
<script>
document.querySelectorAll('[data-qr]').forEach(function(b){var u=(window.ANDI_LINKS||{})[b.dataset.qr];
 if(!u){b.innerHTML='<div style="display:grid;place-items:center;height:100%;font:800 9pt J;color:#7A5A4C;text-align:center">QR<br>pronto</div>';return;}
 var q=qrcode(0,'M');q.addData(u);q.make();b.innerHTML=q.createSvgTag({cellSize:4,margin:0,scalable:true});});
</script>"""

# ---------- Cartel A3 ----------
cartel = f"""<!doctype html><html lang="es"><head><meta charset="utf-8"><style>{FONTS}
@page{{size:A3;margin:0}}
.p{{width:297mm;height:420mm;background:#FBF3E8;position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center;padding:20mm 18mm 0}}
.logo{{height:34mm}}
h1{{font:800 92pt/0.95 J;color:#BA4036;letter-spacing:-.04em;margin-top:12mm;text-align:center}}
.sub{{font:800 26pt/1.25 J;color:#4A2018;text-align:center;margin-top:8mm}}
.bag{{height:150mm;margin-top:10mm;border-radius:6mm;box-shadow:0 8mm 14mm -8mm rgba(74,32,24,.5)}}
.rev{{position:absolute;left:0;right:0;bottom:0;height:88mm;background:#2E120C;color:#FBF3E8;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 16mm}}
.rev b{{font:800 40pt/1.05 J;color:#E3A33B}}
.rev p{{font-size:20pt;margin-top:5mm}}
.rev small{{font:800 15pt J;color:#D9B48F;margin-top:6mm;display:block}}
.qr{{position:absolute;right:14mm;top:14mm;width:38mm;text-align:center;font:800 9pt J;color:#4A2018}}
.qr div{{width:38mm;height:38mm;background:#fff;padding:2mm;border-radius:2mm}}
</style></head><body>
<div class="p"><img class="logo" src="../web/img/logo-andi.png"><h1>¿Lo<br>notarías?</h1>
<p class="sub">Pruébalo a ciegas.<br>Es un brownie de chocolate.</p>
<img class="bag" src="../web/img/bolsa.png">
<div class="qr"><div data-qr="instagram"></div>@andibite.pe</div>
<div class="rev"><b>Lleva sangrecita.</b><p>No la escondemos: simplemente no se nota.</p><small>Dulce para ellos. Tranquilidad para ti.</small></div>
</div>{QR}</body></html>"""
(D / "kit_cartel.html").write_text(cartel, encoding="utf-8")

# ---------- Hojas A4 ----------
COLS = ["#4A2018", "#BA4036", "#E3A33B", "#7C8A3A", "#8A1C2B"]
letras = list("¿LA") + ["♥"] + list("NOTASTE?")
flags = ""
for i in range(0, len(letras), 2):
    par = letras[i:i + 2]
    tri = ""
    for k, l in enumerate(par):
        c = COLS[(i + k) % len(COLS)]
        ink = "#2E120C" if c == "#E3A33B" else "#FBF3E8"
        tri += f'<div class="flag"><svg viewBox="0 0 180 230"><path d="M0 0H180L90 230Z" fill="{c}"/><line x1="0" y1="14" x2="180" y2="14" stroke="{ink}" stroke-opacity=".35" stroke-dasharray="5 5"/></svg><span style="color:{ink}">{l}</span></div>'
    flags += f'<section class="a4 flags">{tri}</section>'

card_front = """<div class="card f"><img src="../web/img/logo-andibite.svg"><p class="j t">Lleva sangrecita.</p><p class="s">No la escondemos: simplemente no se nota.</p>
<ul><li>Brownie de chocolate de 30 g</li><li><b>1.9 mg de hierro</b> en cada brownie. Comprobado en laboratorio.</li><li>Sin octógonos</li><li>Uno por día, en su bolsita</li></ul>
<p class="j pr">Bolsa de 6: S/22 · Suelto: S/5</p></div>"""
card_back = """<div class="card b"><p class="j t2">Síguenos</p><div class="qrs"><div><div class="q" data-qr="instagram"></div><span>Instagram</span></div><div><div class="q" data-qr="tiktok"></div><span>TikTok</span></div></div>
<p class="j h">@andibite.pe</p><p class="s2">Cuenta privada: manda tu solicitud y te aceptamos hoy.</p></div>"""

kit = f"""<!doctype html><html lang="es"><head><meta charset="utf-8"><style>{FONTS}
@page{{size:A4;margin:0}}
.a4{{width:210mm;height:297mm;position:relative;overflow:hidden;page-break-after:always}}
.flags{{display:flex;flex-direction:column;align-items:center;justify-content:space-around;padding:8mm 0}}
.flag{{position:relative;width:150mm;height:135mm}}
.flag svg{{width:100%;height:100%}}
.flag span{{position:absolute;left:0;right:0;top:18mm;text-align:center;font:800 150pt/1 J}}
.cards{{display:grid;grid-template-columns:repeat(2,105mm);grid-template-rows:repeat(4,74.25mm)}}
.card{{border:.2mm dashed #bbb;padding:5mm 6mm;display:flex;flex-direction:column;background:#FBF3E8}}
.card img{{height:9mm;width:auto;align-self:flex-start}}
.card .t{{font-size:17pt;color:#BA4036;margin-top:2.5mm}}
.card .s{{font-size:8.5pt;color:#7A5A4C}}
.card ul{{list-style:none;margin-top:2mm;font-size:8.6pt;line-height:1.35}}
.card li::before{{content:"• ";color:#BA4036;font-weight:800}}
.card .pr{{margin-top:auto;font-size:11pt;color:#4A2018}}
.card.b{{background:#2E120C;color:#FBF3E8;align-items:center;text-align:center}}
.card .t2{{font-size:15pt;color:#E3A33B}}
.qrs{{display:flex;gap:8mm;margin-top:2mm}}
.qrs .q{{width:30mm;height:30mm;background:#fff;padding:1.5mm;border-radius:1.5mm}}
.qrs span{{font:800 8pt J;display:block;margin-top:1mm}}
.card .h{{font-size:12pt;margin-top:1.5mm}}
.card .s2{{font-size:7.5pt;color:#D9B48F}}
.tent{{display:flex;flex-direction:column}}
.tent .half{{height:148.5mm;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:12mm 16mm}}
.tent .top{{transform:rotate(180deg);border-bottom:.3mm dashed #bbb}}
.tent h2{{font:800 30pt/1.1 J;color:#4A2018}}
.tent p{{font-size:15pt;line-height:1.4;margin-top:4mm}}
.tent .price b{{display:block;font:800 54pt/1 J;color:#BA4036}}
.count{{background:#FBF3E8;padding:16mm 16mm;display:flex;flex-direction:column}}
.count img{{height:16mm;width:auto;align-self:flex-start}}
.count h2{{font:800 30pt/1.1 J;color:#4A2018;margin-top:8mm}}
.count .box{{flex:1;margin-top:8mm;border:1.2mm solid #4A2018;border-radius:5mm;padding:8mm;display:flex;flex-direction:column;gap:8mm;background:#fff}}
.count .row{{flex:1;display:flex;flex-direction:column}}
.count .row b{{font:800 34pt J;color:#BA4036}}
.count .row:last-child b{{color:#7C8A3A}}
.count .row i{{flex:1;border-bottom:.6mm dashed #D9B48F}}
.count p{{font-size:12pt;color:#7A5A4C;margin-top:5mm}}
.sheet{{padding:14mm}}
.sheet img{{height:11mm}}
.sheet h2{{font:800 18pt J;color:#4A2018;margin:5mm 0 2mm}}
.sheet p{{font-size:10pt;margin-bottom:3mm}}
table{{width:100%;border-collapse:collapse;font-size:9.5pt}}
th{{background:#4A2018;color:#FBF3E8;font:800 8.5pt J;text-align:left;padding:2mm}}
td{{border-bottom:.3mm solid #D9B48F;height:8.6mm;padding:0 2mm}}
</style></head><body>
{flags}
<section class="a4 cards">{card_front * 8}</section>
<section class="a4 cards">{card_back * 8}</section>
<section class="a4 tent"><div class="half top"><h2>Antes de probar</h2><p>Lleva gluten, huevo, leche, soya y cacao. Lleva un ingrediente de origen animal que te contamos después de probar. Si prefieres saberlo antes, pregúntanos.</p></div>
<div class="half"><h2>Antes de probar</h2><p>Lleva gluten, huevo, leche, soya y cacao. Lleva un ingrediente de origen animal que te contamos después de probar. Si prefieres saberlo antes, pregúntanos.</p></div></section>
<section class="a4 tent"><div class="half top price"><b>S/22</b><h2>la bolsa de 6</h2><p>Suelto: S/5 · Pedido del salón por WhatsApp</p></div>
<div class="half price"><b>S/22</b><h2>la bolsa de 6</h2><p>Suelto: S/5 · Pedido del salón por WhatsApp</p></div></section>
<section class="a4 count"><img src="../web/img/logo-andi.png"><h2>Hoy, en este stand</h2>
<div class="box"><div class="row"><b>Probaron</b><i></i></div><div class="row"><b>La notaron</b><i></i></div></div>
<p>Prueba a ciegas, responde y súmate a la pizarra.</p></section>
<section class="a4 sheet"><img src="../web/img/logo-andibite.svg"><h2>Prueba a ciegas · conteo</h2><p>Feria UPN · 23 de noviembre de 2026. «La notó» si antes de la revelación dice sangrecita, sangre, hígado, carne, menudencia o «sabe a fierro».</p>
<table><tr><th style="width:10mm">N.º</th><th style="width:26mm">¿La notó?</th><th>¿Qué dijo?</th><th style="width:24mm">¿Permiso?</th></tr>{''.join(f'<tr><td>{n}</td><td>Sí · No</td><td></td><td>Sí · No</td></tr>' for n in range(1, 26))}</table></section>
<section class="a4 sheet"><img src="../web/img/logo-andibite.svg"><h2>Permiso para grabar</h2><p>Autorizo a AndiBite (proyecto del Grupo 2, UPN Los Olivos) a grabar mi reacción en la prueba a ciegas del 23 de noviembre de 2026 y a publicarla en sus cuentas privadas de Instagram, TikTok y Facebook. Puedo pedir que se borre cuando quiera escribiendo a @andibite.pe (Ley 29733).</p>
<table><tr><th style="width:10mm">N.º</th><th>Nombre</th><th style="width:60mm">Firma</th></tr>{''.join(f'<tr><td>{n}</td><td></td><td></td></tr>' for n in range(1, 26))}</table></section>
{QR}</body></html>"""
(D / "kit_a4.html").write_text(kit, encoding="utf-8")
print("kit html listo")
