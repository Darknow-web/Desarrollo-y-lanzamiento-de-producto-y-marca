"""Arma los PDF del guion y del stand a partir de los .md de FINAL/.
Uso: python3.13 FINAL/docs/build_docs.py   (luego node FINAL/docs/pdf.mjs)
"""
import re, html, pathlib

D = pathlib.Path(__file__).resolve().parent
F = D.parent
COL = {1: "#BA4036", 2: "#7C8A3A", 3: "#E3A33B", 4: "#8A1C2B", 5: "#4A2018"}
INK = {1: "#fff", 2: "#fff", 3: "#2E120C", 4: "#fff", 5: "#fff"}

CSS = """
@font-face{font-family:Jakarta;src:url(../web/fonts/plus-jakarta-sans-latin-800-normal.woff2);font-weight:800}
@font-face{font-family:Jakarta;src:url(../web/fonts/plus-jakarta-sans-latin-600-normal.woff2);font-weight:600}
@font-face{font-family:Nunito;src:url(../web/fonts/nunito-latin-400-normal.woff2);font-weight:400}
@font-face{font-family:Nunito;src:url(../web/fonts/nunito-latin-700-normal.woff2);font-weight:700}
@font-face{font-family:Nunito;src:url(../web/fonts/nunito-latin-800-normal.woff2);font-weight:800}
@page{size:A4;margin:13mm 14mm 15mm}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Nunito,sans-serif;color:#3B1A14;background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.page{position:relative;page-break-after:always;break-after:page}
.page:last-child{page-break-after:auto;break-after:auto}
h1,h2,h3,h4{font-family:Jakarta,sans-serif;font-weight:800;color:#4A2018;letter-spacing:-.01em}
.k{font:800 8pt/1.2 Jakarta,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#7A5A4C}
p{font-size:11pt;line-height:1.5}
b,strong{font-weight:800}
.foot{display:none;position:absolute;left:15mm;right:15mm;bottom:8mm;display:flex;justify-content:space-between;font:800 7.5pt/1 Jakarta,sans-serif;color:#9a7a6a}
/* portada */
.cover{background:#2E120C;color:#FBF3E8;padding:14mm 12mm;border-radius:6mm;height:268mm;overflow:hidden}
.cover .logo{height:24mm;width:auto}
.cover h1{color:#FBF3E8;font-size:34pt;line-height:1.05;margin-top:12mm}
.cover h1 em{font-style:normal;color:#E3A33B}
.cover .sub{color:#E9D6C3;font-size:12.5pt;margin-top:4mm}
.cover .k{color:#D9B48F}
.tbar{display:flex;height:9mm;border-radius:3mm;overflow:hidden;margin:10mm 0 3mm;gap:1mm}
.tbar div{display:flex;align-items:center;justify-content:center;font:800 8pt Jakarta;color:#fff}
.who{display:grid;grid-template-columns:repeat(5,1fr);gap:3mm;margin-top:8mm}
.who .c{background:rgba(255,253,249,.07);border:1px solid rgba(255,253,249,.14);border-radius:4mm;padding:5mm 4mm;border-top:3mm solid}
.who .n{font:800 22pt/1 Jakarta;color:#FBF3E8}
.who b{display:block;font:800 11.5pt/1.2 Jakarta;color:#FBF3E8;margin-top:3mm}
.who span{display:block;font-size:9pt;line-height:1.35;color:#E2CDB8;margin-top:2mm}
.who i{display:block;font:800 9pt Jakarta;font-style:normal;color:#E3A33B;margin-top:3mm}
.hilo{margin-top:12mm;background:rgba(255,253,249,.07);border-radius:4mm;padding:6mm 7mm}
.hilo p{color:#E9D6C3;font-size:10.5pt}
.hilo .arr{display:flex;align-items:center;gap:2.5mm;flex-wrap:wrap;margin-top:3mm;font:800 10pt Jakarta;color:#FBF3E8}
.hilo .arr em{font-style:normal;color:#E3A33B}
.tips{display:grid;grid-template-columns:1fr 1fr;gap:3mm 8mm;margin-top:8mm}
.tips p{font-size:9.5pt;color:#E2CDB8;line-height:1.4}
.tips p b{color:#FBF3E8}
/* parte */
.band{border-radius:5mm;padding:7mm 8mm;display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:6mm}
.band .pn{font:800 9pt/1 Jakarta;letter-spacing:.14em;text-transform:uppercase;opacity:.85}
.band h2{color:inherit;font-size:24pt;line-height:1.05;margin-top:2mm}
.band .th{font:800 12pt/1.2 Jakarta;margin-top:1.5mm;opacity:.95}
.band .tm{text-align:right;font:800 9pt/1.4 Jakarta;opacity:.9}
.band .tm b{display:block;font-size:22pt;line-height:1}
.sl{display:grid;grid-template-columns:52mm 1fr;gap:5mm;padding:4mm 0;border-bottom:1px solid #E8D5BD;break-inside:avoid}
.sl img{width:52mm;border-radius:2.2mm;box-shadow:0 1.5mm 4mm -2mm rgba(74,32,24,.5);display:block}
.sl .num{font:800 7.5pt Jakarta;color:#7A5A4C;margin-top:1.6mm;letter-spacing:.06em}
.sl h3{font-size:12.5pt;margin-bottom:1.6mm}
.sl p{font-size:11pt;line-height:1.48;margin-bottom:1.4mm}
.act{margin-top:2mm;background:#F4E6D3;border-radius:2.5mm;padding:2.4mm 3.4mm;font-size:9.3pt;line-height:1.4;color:#5a3a2c}
.act b{font:800 8pt Jakarta;letter-spacing:.08em;text-transform:uppercase;color:#BA4036;margin-right:1.5mm}
.pase{margin-top:5mm;border-radius:4mm;padding:4.5mm 6mm;display:flex;gap:4mm;align-items:center;break-inside:avoid}
.pase .k{color:inherit;opacity:.85}
.pase p{font:800 12.5pt/1.35 Jakarta}
.ph{background:#FFF7E8;border-left:1.2mm solid #E3A33B;padding:.2mm 1.6mm;border-radius:1mm;font-weight:800}
/* documento del stand */
.doc h1{font-size:24pt;line-height:1.1}
.doc h2{font-size:15pt;margin:7mm 0 3mm;display:flex;align-items:center;gap:3mm}
.doc h2 span{display:inline-grid;place-items:center;width:8mm;height:8mm;border-radius:50%;background:#BA4036;color:#fff;font-size:10pt;flex:none}
.doc h3{font-size:12.5pt;margin:0 0 2mm}
.doc p{font-size:10.3pt;margin:1.5mm 0}
table{width:100%;border-collapse:separate;border-spacing:0;font-size:9pt;line-height:1.38;margin:2mm 0 3mm;background:#FFFDF9;border:1px solid #E8D5BD;border-radius:3mm;overflow:hidden}
th{background:#4A2018;color:#FBF3E8;font:800 8pt Jakarta;letter-spacing:.06em;text-transform:uppercase;text-align:left;padding:2.2mm 2.6mm}
td{padding:2mm 2.6mm;border-top:1px solid #F0E2CF;vertical-align:top}
tr{break-inside:avoid}
td:first-child{font-weight:700;color:#4A2018}
tr.day td{background:#F4E6D3;font:800 9pt Jakarta;color:#BA4036;letter-spacing:.04em;text-transform:uppercase}
td.ck{width:8mm;text-align:center;font-size:12pt;color:#BA4036}
.persons{display:grid;grid-template-columns:1fr 1fr;gap:4mm}
.pc{background:#FFFDF9;border:1px solid #E8D5BD;border-radius:4mm;padding:4mm 5mm;border-top:2.4mm solid;break-inside:avoid}
.pc .tag{font:800 8pt Jakarta;letter-spacing:.06em;text-transform:uppercase;color:#7A5A4C;margin-bottom:2mm}
.pc ul{list-style:none}
.pc li{font-size:8.9pt;line-height:1.35;padding:1mm 0 1mm 6mm;position:relative;border-top:1px dashed #EADBC6}
.pc li:first-child{border-top:none}
.pc li::before{content:"";position:absolute;left:0;top:1.6mm;width:3mm;height:3mm;border:1.4px solid #BA4036;border-radius:.8mm}
.pc li.buy{color:#5a3a2c}
.pc li.buy::before{border-color:#E3A33B;background:#FFF4DE}
.legend{display:flex;gap:6mm;font-size:8.5pt;color:#7A5A4C;margin:1mm 0 3mm}
.legend i{display:inline-block;width:3mm;height:3mm;border:1.4px solid #BA4036;border-radius:.8mm;margin-right:1.5mm;vertical-align:-.4mm}
.legend i.b{border-color:#E3A33B;background:#FFF4DE}
.rules{display:grid;grid-template-columns:1fr 1fr;gap:3mm}
.rules div{background:#FFFDF9;border:1px solid #E8D5BD;border-left:2mm solid #BA4036;border-radius:2.5mm;padding:3mm 4mm;font-size:9.3pt;line-height:1.4;break-inside:avoid}
.idea{background:#2E120C;color:#FBF3E8;border-radius:5mm;padding:6mm 7mm;margin:3mm 0 4mm}
.idea p{color:#EAD7C4;font-size:10.3pt;margin:1.2mm 0}
.idea b{color:#E3A33B}
.flow{display:flex;gap:2mm;align-items:stretch;margin:4mm 0 2mm}
.flow div{flex:1;background:#FFFDF9;border:1px solid #E8D5BD;border-radius:3mm;padding:3mm 2.5mm;text-align:center;font:800 8.5pt/1.25 Jakarta;color:#4A2018}
.flow div span{display:block;width:7mm;height:7mm;border-radius:50%;background:#BA4036;color:#fff;margin:0 auto 1.8mm;display:grid;place-items:center;font-size:9pt}
.foot{display:none!important}
.cover h1{font-size:27pt;margin-top:5mm}.cover .sub{font-size:11.5pt}.who .c{padding:3.5mm 3mm}.who b{font-size:10.5pt}.hilo{margin-top:5mm;padding:4mm 6mm}.tips{margin-top:5mm;gap:2.5mm 6mm}.tips p{font-size:9pt}.tbar{margin:5mm 0 2mm}
.cover .logo{height:18mm}.cover h1{margin-top:7mm}.tbar{margin:7mm 0 2mm}.who{margin-top:5mm}.hilo{margin-top:7mm}.tips{margin-top:6mm}
.sl p{font-size:10.3pt;line-height:1.4;margin-bottom:1mm}.sl{padding:2.8mm 0;grid-template-columns:48mm 1fr}.sl img{width:48mm}.band{margin-bottom:4mm}
table{font-size:8.6pt}td{padding:1.6mm 2.4mm}
"""


def inline(t):
    t = html.escape(t, quote=False)
    t = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", t)
    t = re.sub(r"\[(N|M)\]", r'<span class="ph">[\1]</span>', t)
    return t


def head(title):
    return f'<!doctype html><html lang="es"><head><meta charset="utf-8"><title>{title}</title><style>{CSS}</style></head><body>'


# ---------------- GUION ----------------
def guion():
    md = (F / "GUION-5-personas.md").read_text(encoding="utf-8")
    parts = re.split(r"^## ", md, flags=re.M)
    reparto = [l for l in parts[1].splitlines() if l.startswith("| ") and re.match(r"\| \d", l)]
    rows = []
    for l in reparto:
        c = [x.strip() for x in l.strip("|").split("|")]
        rows.append(c)  # parte, quién, tema, láminas, tiempo
    total = sum(int(r[4].split(":")[0]) * 60 + int(r[4].split(":")[1]) for r in rows)

    out = [head("AndiBite · Guion de la feria")]
    # portada
    tb = "".join(f'<div style="flex:{int(r[4].split(":")[0])*60+int(r[4].split(":")[1])};background:{COL[int(r[0])]};color:{INK[int(r[0])]}">{r[1].split(" ")[0] if "Patty" not in r[1] and "Ade" not in r[1] else ("Patty" if "Patty" in r[1] else "Ade")} · {r[4]}</div>' for r in rows)
    cards = ""
    for r in rows:
        p = int(r[0])
        nm = r[1].replace("Patricia (Patty)", "Patty").replace("Adela (Ade)", "Ade")
        cards += f'<div class="c" style="border-top-color:{COL[p]}"><span class="n">{p}</span><b>{html.escape(nm)}</b><span>{html.escape(r[2])}</span><i>Láminas {r[3].replace(" a ", "–")} · {r[4]}</i></div>'
    out.append(f'''<section class="page cover">
<img class="logo" src="../web/img/logo-andi.png" alt="AndiBite">
<p class="k" style="margin-top:10mm">Feria del lunes 23 de noviembre de 2026 · Grupo 2 · UPN Los Olivos</p>
<h1>El guion de la presentación, <em>en cinco voces</em></h1>
<p class="sub">Una sola historia contada por cinco personas. Cada una tiene un bloque seguido, por temas completos: nadie entra a mitad de un tema. Duración total: {total//60}:{total%60:02d} minutos.</p>
<div class="tbar">{tb}</div>
<div class="who">{cards}</div>
<div class="hilo"><p class="k">El hilo de la historia</p>
<div class="arr"><span>La lonchera vuelve llena</span><em>→</em><span>8 mamás prueban y nadie la nota</span><em>→</em><span>Un brownie para Rodrigo</span><em>→</em><span>Llega donde está la lonchera</span><em>→</em><span>«¿La notaste?»</span><em>→</em><span>Los números cierran</span><em>→</em><span>Una pelea menos</span></div></div>
<div class="tips">
<p><b>Antes de exponer.</b> La profesora y el salón ya probaron a ciegas en el stand. La solapa del cartel sigue cerrada.</p>
<p><b>[N] y [M].</b> Son las cifras reales del contador en ese momento. Patty se las pasa a Carlos 10 minutos antes.</p>
<p><b>No se lee la lámina.</b> El guion dice lo que la pantalla no dice. Las cifras ya están en la lámina.</p>
<p><b>El pase.</b> Cada parte termina nombrando a la siguiente persona. Quien recibe dice «Gracias» y sigue.</p>
<p><b>Sin proyector.</b> La laptop va en la mesa, inclinada hacia la profesora y con el brillo al máximo. Quien expone pasa sus láminas con la flecha →.</p>
<p><b>Ensayo.</b> Dos pasadas el domingo con cronómetro. Meta: 10 a 11 minutos.</p>
</div>
</section>''')

    # partes
    for idx, blk in enumerate(parts[2:7], start=1):
        lines = blk.splitlines()
        title = lines[0]  # Parte 1 · Diana Ayoso · El problema que escuchamos
        _, who, theme = [x.strip() for x in title.split("·", 2)]
        who = who.replace("Patricia (Patty)", "Patty").replace("Adela (Ade)", "Ade")
        tline = next((l for l in lines if l.startswith("Tiempo:")), "")
        tm = re.search(r"Tiempo: ([\d:]+)", tline).group(1)
        sl_rng = rows[idx - 1][3]
        body = "\n".join(lines[1:])
        slides = re.split(r"^### ", body, flags=re.M)[1:]
        html_sl = ""
        pase = ""
        for s in slides:
            sl = s.splitlines()
            m = re.match(r"Lámina (\d+) · (.+)", sl[0])
            n, st = int(m.group(1)), m.group(2)
            paras, acts = [], []
            for l in sl[1:]:
                l = l.strip()
                if not l:
                    continue
                if l.startswith("> Acción:"):
                    acts.append(l[len("> Acción:"):].strip())
                elif l.startswith("**Pase:**") or l.startswith("**Cierre:**"):
                    pase = l
                else:
                    paras.append(l)
            ptxt = "".join(f"<p>{inline(p)}</p>" for p in paras)
            atxt = "".join(f'<div class="act"><b>Acción</b>{inline(a)}</div>' for a in acts)
            html_sl += f'<div class="sl"><div><img src="miniaturas/{n:02d}.jpg"><p class="num">LÁMINA {n}</p></div><div><h3>{html.escape(st)}</h3>{ptxt}{atxt}</div></div>'
        nxt = idx + 1
        if pase:
            lab = "Pase a la siguiente" if pase.startswith("**Pase") else "Cierre"
            txt = re.sub(r"^\*\*(Pase|Cierre):\*\*\s*", "", pase)
            pc = COL[nxt] if nxt <= 5 else COL[5]
            ink = INK[nxt] if nxt <= 5 else "#fff"
            html_sl += f'<div class="pase" style="background:{pc};color:{ink}"><div><p class="k">{lab}</p><p>{inline(txt)}</p></div></div>'
        out.append(f'''<section class="page">
<div class="band" style="background:{COL[idx]};color:{INK[idx]}"><div><p class="pn">Parte {idx} de 5</p><h2>{html.escape(who)}</h2><p class="th">{html.escape(theme)}</p></div><div class="tm"><b>{tm}</b>minutos<br>láminas {sl_rng.replace(" a ", "–")}</div></div>
{html_sl}
<div class="foot"><span>AndiBite · Guion de la feria</span><span>Parte {idx} · {html.escape(who)}</span></div>
</section>''')

    # si sobra o falta tiempo
    extra = parts[7]
    items = [l[2:] for l in extra.splitlines() if l.startswith("- ")]
    lis = "".join(f'<div style="border-left-color:{COL[i+1]}">{inline(t)}</div>' for i, t in enumerate(items))
    out.append(f'''<section class="page doc"><p class="k">Para el ensayo</p><h1>Si sobra o falta tiempo</h1>
<p style="margin-top:3mm">Cada parte dura cerca de 2 minutos. Si alguien se pasa, la siguiente persona recorta; nunca se quitan [N], [M] ni la invitación al QR.</p>
<div class="rules" style="grid-template-columns:1fr;margin-top:5mm">{lis}</div>
<h2 style="margin-top:9mm"><span>?</span>Cómo leer este guion</h2>
<div class="rules"><div>El texto normal es lo que se dice en voz alta. Está escrito para decirse con naturalidad, no para leerse.</div><div>Las cajas de color crema son acciones: qué se muestra o qué se hace con el producto.</div><div>La caja de color al final de cada parte es el pase: la frase exacta que entrega la palabra.</div><div>La miniatura muestra la lámina que está en pantalla mientras se habla.</div></div>
<div class="foot"><span>AndiBite · Guion de la feria</span><span>Ensayo</span></div></section>''')
    out.append("</body></html>")
    (D / "guion.html").write_text("\n".join(out), encoding="utf-8")


# ---------------- STAND Y TAREAS ----------------
def table(lines, tasks=False):
    rows = [[c.strip() for c in l.strip().strip("|").split("|")] for l in lines]
    hdr, body = rows[0], rows[2:]
    h = "<table><tr>" + "".join(f"<th>{inline(c)}</th>" for c in hdr) + "</tr>"
    for r in body:
        if tasks and r[0].startswith("**") and all(not c for c in r[1:]):
            h += f'<tr class="day"><td colspan="{len(hdr)}">{r[0].strip("*")}</td></tr>'
            continue
        h += "<tr>" + "".join(
            (f'<td class="ck">☐</td>' if c == "☐" else f"<td>{inline(c)}</td>") for c in r) + "</tr>"
    return h + "</table>"


def stand():
    md = (F / "STAND-y-TAREAS.md").read_text(encoding="utf-8")
    secs = re.split(r"^## ", md, flags=re.M)
    pages = []
    PC = {"Diana": 1, "Patty": 2, "Ade": 3, "Angie": 4, "Carlos": 5}
    for s in secs[1:]:
        lines = s.splitlines()
        title = lines[0]
        num, name = title.split(". ", 1)
        body = lines[1:]
        h = ""
        i = 0
        if num == "1":
            # idea en simple
            ps = []
            while i < len(body) and not body[i].startswith("|"):
                if body[i].strip():
                    ps.append(body[i].strip())
                i += 1
            h += '<div class="idea"><p class="k" style="color:#D9B48F">La idea</p>' + "".join(f"<p>{inline(p)}</p>" for p in ps) + "</div>"
            h += '<div class="flow">' + "".join(f"<div><span>{k+1}</span>{t}</div>" for k, t in enumerate(["Prueba a ciegas", "¿Notaste algo?", "Revelación: lleva sangrecita", "Se suma al contador", "Su truco al mural", "QR: síguenos"])) + "</div>"
        if num == "3":
            intro = []
            while i < len(body) and not body[i].startswith("### "):
                if body[i].strip():
                    intro.append(body[i].strip())
                i += 1
            h += "".join(f"<p>{inline(p)}</p>" for p in intro)
            h += '<div class="legend"><span><i></i>Lleva</span><span><i class="b"></i>Compra (guardar boleta)</span></div><div class="persons">'
            rest = "\n".join(body[i:])
            tail = ""
            for blk in re.split(r"^### ", rest, flags=re.M)[1:]:
                bl = blk.splitlines()
                who = bl[0].strip()
                desc = next((l for l in bl[1:] if l.strip() and not l.startswith("- ")), "")
                items = [l[6:] for l in bl if l.startswith("- [ ] ")]
                after = [l for l in bl if l.startswith("**Total")]
                if after:
                    tail = after[0]
                lis = "".join(f'<li class="{"buy" if it.startswith("Compra:") else ""}">{inline(it.replace("Compra: ", ""))}</li>' for it in items)
                c = COL[PC.get(who, 5)]
                h += f'<div class="pc" style="border-top-color:{c}"><h3>{html.escape(who)}</h3><p class="tag">{inline(desc)}</p><ul>{lis}</ul></div>'
            h += "</div>"
            if tail:
                h = h.replace('<div class="legend">', f'<p>{inline(tail)}</p><div class="legend">', 1)
            pages.append((num, name, h))
            continue
        if num == "6":
            items = [l[2:] for l in body if l.startswith("- ")]
            h += '<div class="rules">' + "".join(f"<div>{inline(t)}</div>" for t in items) + "</div>"
            pages.append((num, name, h))
            continue
        while i < len(body):
            l = body[i]
            if l.startswith("|"):
                tb = []
                while i < len(body) and body[i].startswith("|"):
                    tb.append(body[i]); i += 1
                h += table(tb, tasks=(num == "4"))
                continue
            if l.strip():
                h += f"<p>{inline(l.strip())}</p>"
            i += 1
        pages.append((num, name, h))

    out = [head("AndiBite · El stand y las tareas")]
    first = True
    for num, name, h in pages:
        top = ""
        if first:
            top = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4mm"><div><p class="k">Feria del lunes 23 de noviembre de 2026 · Grupo 2</p><h1>El stand de AndiBite y lo que falta hacer</h1></div><img src="../web/img/logo-andi.png" style="height:20mm"></div>'
            first = False
        out.append(f'<section class="page doc">{top}<h2><span>{num}</span>{html.escape(name)}</h2>{h}<div class="foot"><span>AndiBite · El stand y las tareas</span><span>{html.escape(name)}</span></div></section>')
    out.append("</body></html>")
    (D / "stand.html").write_text("\n".join(out), encoding="utf-8")


guion()
stand()
print("html listo")
