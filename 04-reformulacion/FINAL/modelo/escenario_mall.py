"""Escenario: el centro comercial como canal principal de AndiBite (2027-2031).

Responde a la pregunta del 20-nov-2026: ¿es viable la empresa si el punto principal de venta son
los stands y módulos de centro comercial? No modifica modelo.py: lo importa para el plan base.

Fuentes de cada número (detalle en 04-reformulacion/20-viabilidad-mall-como-canal-principal.md):
- Costos de producir: Excel Costeo-presentaciones (copia del doc. 18): unidad S/2.150 y bolsa S/2.073 por
  brownie con laboratorio y transporte (S/0.236); sin ellos, S/1.914 y S/1.837.
- Pasarela 3 % del precio con IGV y renta 1 % de la venta sin IGV: Excel, hoja Supuestos B27 y B28.
- Degustación y movilidad en mall: 1 brownie regalado por cada 10 vendidos y S/0.10 (doc. 18, 4.1).
- Costo meta 2028: S/0.34 menos por brownie (doc. 18, sección 3). Costo objetivo 2029+: S/0.17 menos (modelo.py).
- Módulo fijo de 4 m²: S/8,847 al mes y S/21,300 de entrada (doc. 18, 4.1; videos del doc. 12).
- Venta por día del módulo, rampa y estacionalidad: [SUPUESTO] (ver el documento 20, sección 2).

Uso: python3 FINAL/modelo/escenario_mall.py   → imprime las tablas y escribe escenario_mall.json
"""
import json, pathlib, sys

D = pathlib.Path(__file__).resolve().parent
sys.dont_write_bytecode = True
sys.path.insert(0, str(D))
import modelo as base  # noqa: E402

# ---------------- 1. Economía de un brownie en el mall ----------------
LAB = 0.236            # laboratorio y transporte por brownie (Excel B12 + B13 del doc. 18)
PROD_BOLSA = {"hoy": 1.837, "meta": 1.837 - 0.34, "objetivo": 1.837 - 0.34 - 0.17}
EXTRA_SUELTO = 0.077   # la unidad suelta cuesta S/0.077 más que el brownie de la bolsa (Excel Costeo B16 − C16, sin lab.)


def contrib(sueltos, nivel="hoy", regalo_x10=1):
    """Lo que deja cada brownie vendido en el mall (S/ sin IGV). `sueltos` = parte de los brownies que se venden a S/5."""
    p_con = sueltos * 5 + (1 - sueltos) * 22 / 6
    p_sin = p_con / 1.18
    prod = PROD_BOLSA[nivel] + sueltos * EXTRA_SUELTO
    return p_sin - prod - 0.03 * p_con - 0.01 * p_sin - regalo_x10 / 10 * (prod + LAB) - 0.10


def mezcla(bolsa_compradores):
    """De cada 10 compradores, cuántos llevan la bolsa de 6. Devuelve (brownies por ticket, ticket S/, parte suelta)."""
    s, b = 10 - bolsa_compradores, bolsa_compradores
    br = s + 6 * b
    return br / 10, (5 * s + 22 * b) / 10, s / br


MEZCLAS = {
    "Mezcla del plan (6 de cada 10 brownies sueltos)": None,       # 1.5 brownies por ticket
    "6 de cada 10 compradores llevan 1 suelto; 4, la bolsa": 4,
    "Mitad de compradores con bolsa": 5,
    "6 de cada 10 compradores con bolsa": 6,
}


def fila_mezcla(bolsa):
    if bolsa is None:
        s = 0.6
        br_t = 1 / (0.6 + 0.4 / 6)                       # 10 brownies = 6 tickets sueltos + 0.67 bolsas
        tk = 10 / (6 + 4 / 6) * (0.6 * 5 + 0.4 * 22 / 6)
        return br_t, tk, s
    return mezcla(bolsa)


MODULO = dict(renta=4560, personal=3756, amort=381, servicios=150)   # S/8,847 al mes (doc. 18, 4.1)
COSTO_MODULO = sum(MODULO.values())
ENTRADA = 21300            # garantía S/7,600 (se recupera) + llave S/5,700 + mueble S/8,000
RENTA_FIJA = 3800          # S/4,560 = renta fija + 10 % mantenimiento + 10 % publicidad
VAR = 0.085                # renta variable: se paga la mayor (fija o 8.5 % de la venta sin IGV)

FORMATOS = [
    # nombre, costo por día de apertura, días al mes, fuente del costo
    ("Módulo fijo 4 m² (todos los días, 10 a. m. a 10 p. m.)", COSTO_MODULO / 30, 30),
    ("Módulo temporal de 30 días (vuelta al colegio)", 10440 / 30, 30),
    ("Pop-up de 9 días (lanzamiento)", 4382 / 9, 9),
    ("Isla o carrito de fin de semana, 2 promotores [SUPUESTO S/150 por día]", 150 + 198 + 2999 / 36 / 9, 9),
    ("Isla de fin de semana, 1 promotor 8 h en hora punta [SUPUESTO]", 150 + 99 + 2999 / 36 / 9, 9),
    ("Stand de feria municipal (S/60 tasa + S/99 promotor)", 60 + 99, 9),
    ("Kermés (S/70 de aporte + S/99 promotor)", 70 + 99, 1),
]


def equilibrio_formatos():
    out = []
    for nom, dia, dias in FORMATOS:
        out.append(dict(formato=nom, costo_dia=dia, costo_mes=dia * dias,
                        eq_hoy=dia / contrib(0.6, "hoy"), eq_meta=dia / contrib(0.6, "meta"),
                        eq_obj=dia / contrib(0.6, "objetivo"), eq_hoy_3x10=dia / contrib(0.6, "hoy", 3)))
    return out


# ---------------- 2. La empresa con el mall como canal principal ----------------
EST = [0.85, 1.15, 1.15, 1, 1, 1, 0.85, 1, 1, 1, 1, 0.85]   # [SUPUESTO] verano, vuelta al colegio, julio y diciembre
RAMPA = [0.6, 0.7, 0.8, 0.9]                               # [SUPUESTO] estable desde el mes 5 (el caso de TikTok, mes 6)
NIVEL = {2027: "hoy", 2028: "meta", 2029: "objetivo", 2030: "objetivo", 2031: "objetivo"}
APERTURAS = {(2027, 3): 1, (2028, 3): 2, (2029, 3): 1, (2030, 3): 1}   # 1, 3, 4, 5 y 5 módulos


def prestamo(monto=15000, tea=0.40, n=24):
    r = (1 + tea) ** (1 / 12) - 1
    cuota = monto * r / (1 - (1 + r) ** -n)
    saldo, sched = monto, []
    for _ in range(n):
        i = saldo * r
        saldo -= cuota - i
        sched.append((cuota, i))
    return sched


LAB_BR = 9420 / 72336     # laboratorio y transporte crecen con el volumen: S/0.13 por brownie (modelo.py, 2029+)


def fijos_centrales(y, m, modulos, br_anio, venta_sin_anio):
    """Costos fijos de la empresa sin colegios (S/ al mes). Doc. 18 sin promotores, tasas de feria ni apertura de colegios."""
    if y == 2027:
        if m == 0:
            return 1134
        if m == 1:
            return 1544
        anual = 14820 + 17100 + 15040 + 11700 + max(7850, LAB_BR * br_anio) + 946   # gerente, coordinadora, marketing, admin., laboratorio, deprec.
        return (anual - 1134 - 1544) / 10
    asistente = 17784 if modulos >= 4 else 0                   # [SUPUESTO] asistente de reparto desde 4 módulos
    if y == 2028:
        return (27816 + 27360 + 18503 + 13200 + max(9420, LAB_BR * br_anio) + 946 + asistente) / 12
    lab = max(7850, 9420 * br_anio / 72336)
    return (34200 + 27360 + asistente + 0.08 * venta_sin_anio + 13800 + lab + 946) / 12


def escenario(tickets_dia, bolsa, con_colegios=False, aperturas=APERTURAS, aportes=None):
    br_t, tk, s = fila_mezcla(bolsa)
    br_dia = tickets_dia * br_t
    if aportes is None:   # con colegios, los aportes y el préstamo ya están en la caja del plan base
        aportes = {} if con_colegios else {(2027, 4): 35000, (2028, 0): 15000}
    sched = prestamo()
    b = base.plan(base.ALTAS27, base.ALTAS28, base.EXTRA27, base.EXTRA28, (30, 36, 42)) if con_colegios else None
    edades, caja, meses, k_pres = [], base.CAJA_INICIAL, [], 0
    # primera pasada para conocer brownies y venta del año (marketing y laboratorio de 2029+)
    anios = {}
    for pasada in (0, 1):
        edades, caja, meses, k_pres = [], base.CAJA_INICIAL, [], 0
        for y in range(2027, 2032):
            for m in range(12):
                nuevos = aperturas.get((y, m + 1), 0)
                salida = ENTRADA * aperturas.get((y, m + 2), 0) if m < 11 else ENTRADA * aperturas.get((y + 1, 1), 0)
                edades += [0] * nuevos
                br = sum(br_dia * 30 * EST[m] * (RAMPA[a] if a < len(RAMPA) else 1) for a in edades)
                c = contrib(s, NIVEL[y])
                p_sin = (s * 5 + (1 - s) * 22 / 6) / 1.18
                venta_sin = br * p_sin
                var_extra = sum(max(0, VAR * venta_sin / len(edades) - RENTA_FIJA) for _ in edades) if edades else 0
                amort = sum(MODULO["amort"] for a in edades if a < 36)
                costo_mod = len(edades) * (COSTO_MODULO - MODULO["amort"]) + amort + var_extra
                ya = anios.get(y, {})
                if con_colegios:   # el plan base ya paga al equipo; se suman laboratorio por volumen y, desde 2029, 8 % de marketing
                    fijos = LAB_BR * br + (0.08 * venta_sin if y >= 2029 else 0)
                else:
                    fijos = fijos_centrales(y, m, len(edades), ya.get("br_mod", 0), ya.get("venta_sin_mod", 0))
                interes, cuota = 0, 0
                if (y, m) >= (2028, 1) and k_pres < 24 and aportes.get((2028, 0)):
                    cuota, interes = sched[k_pres]
                    k_pres += 1
                res = br * c - costo_mod - fijos - interes
                no_caja = amort + (0 if con_colegios else (946 / 12 if (y, m) >= (2027, 2) else 0))
                caja += res + interes - cuota + no_caja - salida + aportes.get((y, m), 0)
                meses.append(dict(anio=y, mes=base.MESES[m], modulos=len(edades), br=br, contrib=br * c,
                                  costo_mod=costo_mod, fijos=fijos, interes=interes, res=res, caja=caja,
                                  venta_igv=venta_sin * 1.18, venta_sin=venta_sin, salida=salida))
                edades = [a + 1 for a in edades]
        anios = {}
        for y in range(2027, 2032):
            ms = [x for x in meses if x["anio"] == y]
            anios[y] = dict(br_mod=sum(x["br"] for x in ms), venta_sin_mod=sum(x["venta_sin"] for x in ms),
                            venta_igv_mod=sum(x["venta_igv"] for x in ms), contrib_mod=sum(x["contrib"] for x in ms),
                            costo_mod=sum(x["costo_mod"] for x in ms), fijos=sum(x["fijos"] for x in ms),
                            interes=sum(x["interes"] for x in ms), res=sum(x["res"] for x in ms),
                            modulos=ms[-1]["modulos"])
    # con colegios: se suma el plan base (su resultado y su caja) al resultado incremental de los módulos
    if con_colegios:
        caja_extra = 0
        mb = {(x["anio"], x["mes"]): x for x in b["meses"]}
        for x in meses:
            caja_extra += x["res"] + MODULO["amort"] * x["modulos"] - x["salida"]
            if x["anio"] <= 2028:
                x["caja"] = mb[(x["anio"], x["mes"])]["caja"] + caja_extra
            x["res_mod"] = x["res"]
        for y in range(2027, 2032):
            a, ab = anios[y], b["anios"][y]
            a["res_mod"] = a["res"]
            a["res"] = a["res"] + ab["resultado"]
            a["br"] = a["br_mod"] + ab["brownies"]
            a["venta_igv"] = a["venta_igv_mod"] + ab["venta_igv"]
        # 2029-2031: caja anual = caja de dic-2028 + resultados + no caja − entradas (sin préstamo nuevo)
        caja_y = [x for x in meses if (x["anio"], x["mes"]) == (2028, "Dic")][0]["caja"]
        for y in (2029, 2030, 2031):
            ms = [x for x in meses if x["anio"] == y]
            caja_y += anios[y]["res"] + 946 + sum(MODULO["amort"] * x["modulos"] for x in ms) - sum(x["salida"] for x in ms) \
                + {2029: 1900 - 871 * 12, 2030: -871, 2031: 0}[y]   # cuotas del préstamo del plan base (feb-28 a ene-30)
            for x in ms:
                x["caja"] = None
            ms[-1]["caja"] = caja_y
    else:
        for y in anios:
            anios[y]["br"] = anios[y]["br_mod"]
            anios[y]["venta_igv"] = anios[y]["venta_igv_mod"]
    acum = 0
    for y in sorted(anios):
        acum += anios[y]["res"]
        anios[y]["acum"] = acum
    cajas = [(x["caja"], x["anio"], x["mes"]) for x in meses if x["caja"] is not None]
    cmin = min(cajas)
    return dict(br_dia=br_dia, ticket=tk, br_ticket=br_t, sueltos=s, anios=anios, meses=meses,
                roi=acum / 100000, acum=acum, recupera=next((y for y in sorted(anios) if anios[y]["acum"] >= 0), None),
                caja_min=cmin, falta=max(0, 7000 - cmin[0]))


def equilibrio_empresa_por_modulo(y=2029, modulos=4, bolsa=None):
    """Brownies por día que cada módulo tendría que vender para que la empresa sin colegios no pierda."""
    br_t, tk, s = fila_mezcla(bolsa)
    c = contrib(s, NIVEL[y])
    p_sin = (s * 5 + (1 - s) * 22 / 6) / 1.18
    # fijos centrales dependen de la venta (marketing 8 %): se resuelve por iteración
    br_dia = 150
    for _ in range(50):
        br = br_dia * 30 * 12 * modulos
        fij = fijos_centrales(y, 5, modulos, br, br * p_sin) * 12
        br_dia = (fij + modulos * COSTO_MODULO * 12) / (modulos * 30 * 12 * c)
    return br_dia


if __name__ == "__main__":
    print("== Contribución por brownie y ticket según mezcla")
    for nom, bolsa in MEZCLAS.items():
        br_t, tk, s = fila_mezcla(bolsa)
        ch, cm, co = contrib(s, "hoy"), contrib(s, "meta"), contrib(s, "objetivo")
        print(f"{nom:<58} br/ticket {br_t:.2f} ticket S/{tk:5.2f} sueltos {s:.0%}  contrib hoy {ch:.2f} meta {cm:.2f} obj {co:.2f}"
              f"  por ticket hoy {ch*br_t:.2f} meta {cm*br_t:.2f}  módulo eq. tickets/día hoy {COSTO_MODULO/30/(ch*br_t):.0f} meta {COSTO_MODULO/30/(cm*br_t):.0f}"
              f"  br/día hoy {COSTO_MODULO/30/ch:.0f} meta {COSTO_MODULO/30/cm:.0f}")
    print("contrib con 3 regalados por 10: hoy", round(contrib(0.6, "hoy", 3), 2), "meta", round(contrib(0.6, "meta", 3), 2))
    print("\n== Equilibrio por formato (mezcla del plan)")
    for f in equilibrio_formatos():
        print(f"{f['formato']:<75} S/{f['costo_dia']:6.0f}/día S/{f['costo_mes']:7,.0f}/mes  eq hoy {f['eq_hoy']:4.0f}  meta {f['eq_meta']:4.0f}  obj {f['eq_obj']:4.0f}  hoy 3x10 {f['eq_hoy_3x10']:4.0f}")
    print("venta del módulo para pagar el 8.5 %:", round(RENTA_FIJA / VAR * 1.18), "S/ con IGV al mes")
    res = {}
    print("\n== Resultado al mes de un punto de venta con su venta realista [SUPUESTO] (mezcla del plan)")
    for nom, dia, dias, br, c_hoy, c_meta in (
            ("Módulo fijo", COSTO_MODULO / 30, 30, 105, contrib(0.6), contrib(0.6, "meta")),
            ("Módulo temporal 30 días", 348, 30, 100, contrib(0.6), contrib(0.6, "meta")),
            ("Pop-up 9 días (3 regalados por 10)", 4382 / 9, 9, 80, contrib(0.6, "hoy", 3), contrib(0.6, "meta", 3)),
            ("Isla fin de semana, 2 promotores", 357, 9, 120, contrib(0.6), contrib(0.6, "meta")),
            ("Isla fin de semana, 1 promotor", 258, 9, 90, contrib(0.6), contrib(0.6, "meta")),
            ("Feria municipal (3 regalados por 10)", 159, 9, 50, contrib(0.6, "hoy", 3), contrib(0.6, "meta", 3)),
            ("Kermés (1 evento)", 169, 1, 150, 1.46, 1.80)):
        print(f"{nom:<40} venta {br}/día  hoy {br*dias*c_hoy - dia*dias:>8,.0f}  meta {br*dias*c_meta - dia*dias:>8,.0f}")
    casos = [("A0 Mall principal, sin colegios, un solo módulo los 5 años (70 tickets, mezcla del plan)", 70, None, False, {(2027, 3): 1}),
             ("A1 Mall principal, sin colegios, realista (70 tickets, mezcla del plan)", 70, None, False, APERTURAS),
             ("A2 Mall principal, sin colegios, bolsa empujada (70 tickets, mitad con bolsa)", 70, 5, False, APERTURAS),
             ("A3 Mall principal, sin colegios, muy optimista (90 tickets, 6 de 10 con bolsa)", 90, 6, False, APERTURAS),
             ("B1 Colegios + módulos fijos desde 2027 (70 tickets, mezcla del plan)", 70, None, True, APERTURAS),
             ("B2 Colegios + módulos fijos desde 2027 (70 tickets, mitad con bolsa)", 70, 5, True, APERTURAS)]
    for nom, t, bolsa, col, ap in casos:
        r = escenario(t, bolsa, col, ap)
        res[nom] = r
        print("\n==", nom, f"| {r['br_dia']:.0f} br/día por módulo, ticket S/{r['ticket']:.2f}")
        for y, a in r["anios"].items():
            print(y, f"mód {a['modulos']}  br {a['br']:>9,.0f}  venta c/IGV {a['venta_igv']:>10,.0f}  contrib mód {a['contrib_mod']:>9,.0f}  costo mód {a['costo_mod']:>9,.0f}"
                     f"  fijos {a['fijos']:>9,.0f}  int {a['interes']:>6,.0f}  res {a['res']:>9,.0f}  acum {a['acum']:>9,.0f}")
        neg = next(((x["anio"], x["mes"]) for x in r["meses"] if x["caja"] is not None and x["caja"] < 0), None)
        print("primer mes con caja negativa:", neg)
        print(f"ROI 5 años {r['roi']:.0%}  recupera {r['recupera']}  caja mín {r['caja_min'][0]:,.0f} ({r['caja_min'][2]}-{r['caja_min'][1]})  falta para no bajar de S/7,000: {r['falta']:,.0f}")
    print("\n== Lo que cada módulo tendría que vender por día para que la empresa sin colegios no pierda")
    for y, mods in ((2028, 3), (2029, 4), (2031, 5)):
        for bolsa in (None, 5):
            print(y, mods, "módulos", "mezcla" if bolsa is None else "mitad bolsa", round(equilibrio_empresa_por_modulo(y, mods, bolsa)))
    out = {k: dict(br_dia=v["br_dia"], ticket=v["ticket"], roi=v["roi"], acum=v["acum"], recupera=v["recupera"],
                   caja_min=v["caja_min"], falta=v["falta"], anios=v["anios"]) for k, v in res.items()}
    (D / "escenario_mall.json").write_text(json.dumps(out, ensure_ascii=False, indent=1, default=float))
