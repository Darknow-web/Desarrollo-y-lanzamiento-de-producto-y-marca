"""Modelo financiero de AndiBite: plan de crecimiento por colegios (2027-2031).

Parte de la economía unitaria y de los costos fijos mes a mes del documento 18 (plan final como
empresa real) y cambia una sola palanca: el número de colegios. No sube la venta por colegio
(25 brownies por día de clase en un colegio maduro, la misma del documento 18) ni el precio (S/22).

Uso: python3.13 FINAL/modelo/modelo.py   → escribe modelo.json y AndiBite - Modelo financiero.xlsx
"""
import json, pathlib

D = pathlib.Path(__file__).resolve().parent
MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

# ---------- Documento 18: tabla mes a mes (plan de 6 → 10 → 16 colegios) ----------
D18 = {
    2027: dict(br=[0, 0, 2470, 2208, 3108, 3112, 2108, 3690, 4158, 4898, 4990, 2498],
               res=[-1134, -1544, -10048, -5030, -4804, -4174, -3488, -3785, -2711, -1911, -1665, -4072],
               caja=[23513, 24948, 12079, 7127, 37402, 33307, 29898, 26192, 23560, 21728, 20142, 16148]),
    2028: dict(br=[605, 1900, 5848, 5807, 7380, 7470, 4870, 8444, 8477, 8786, 8591, 4158],
               res=[-5651, -8554, -5193, -273, 1258, 1578, -1319, 2446, 1904, 2030, 2032, -2687],
               caja=[21077, 11731, 5745, 9180, 9646, 10432, 8321, 9975, 11087, 12325, 13565, 10086]),
}
COLEGIO_D18_2027 = [0, 0, 800, 1200, 1700, 2000, 1500, 2932, 3498, 4140, 4330, 2040]  # canal colegios (Excel, fila 10)
CAJA_INICIAL = 24568          # aporte de S/50,000 menos la inversión inicial de S/25,432
VENTA_IGV = {2027: 127847 / 33238, 2028: 272912 / 72336}   # venta media por brownie, con IGV
VENTA_SIN = {2027: 108345 / 33238, 2028: 231281 / 72336}
CONTRIB_BOLSA = {2027: 1.03, 2028: 1.37}                    # documento 18, sección 3
CONTRIB_TOTAL = {2027: 36173, 2028: 102691}
INTERESES_2028 = 3934

# Rampa de un colegio nuevo (brownies al mes) y colegio maduro: misma curva del canal colegios del doc. 18
RAMPA = [133, 200, 283, 333]
MADURO = {2027: 430, 2028: 470}
FACTOR = [0, 0, 1, 1, 1, 1, 0.6, 1, 1, 1, 1, 0.5]   # verano sin clases; julio y diciembre a medias


def canal_colegios(altas, maduro, edades=None):
    edades = list(edades or [])
    out = []
    for m in range(12):
        edades += [0] * altas.get(m + 1, 0)
        if FACTOR[m] == 0:
            out.append(0)
            continue
        v = sum(RAMPA[a] if a < len(RAMPA) else maduro for a in edades)
        edades = [a + 1 for a in edades]
        out.append(round(v * FACTOR[m]))
    return out, edades


def plan(altas27, altas28, extra27, extra28, colegios_29_31, precio_29=22):
    r = {}
    # 1) Canal colegios del plan del doc. 18 (para separar los otros canales de 2028)
    base27, ed = canal_colegios({3: 6, 8: 4}, MADURO[2027])
    base28, _ = canal_colegios({3: 6}, MADURO[2028], [max(a, 4) for a in ed])
    otros = {2027: [b - c for b, c in zip(D18[2027]["br"], COLEGIO_D18_2027)],
             2028: [max(0, b - c) for b, c in zip(D18[2028]["br"], base28)]}
    col_d18 = {2027: COLEGIO_D18_2027, 2028: [b - o for b, o in zip(D18[2028]["br"], otros[2028])]}
    # contribución por brownie de los otros canales (kermés, stand, pop-up, módulo), despejada del doc. 18
    c_otros = {y: (CONTRIB_TOTAL[y] - sum(col_d18[y]) * CONTRIB_BOLSA[y]) / sum(otros[y]) for y in (2027, 2028)}
    # costos fijos de cada mes del doc. 18 = contribución del mes − resultado del mes
    fijos = {}
    for y in (2027, 2028):
        fijos[y] = [col_d18[y][m] * CONTRIB_BOLSA[y] + otros[y][m] * c_otros[y] - D18[y]["res"][m] for m in range(12)]
    # 2) Plan de crecimiento
    col27, ed = canal_colegios(altas27, MADURO[2027])
    col28, _ = canal_colegios(altas28, MADURO[2028], [max(a, 4) for a in ed])
    extra = {2027: extra27, 2028: extra28}
    caja = CAJA_INICIAL
    prev_caja_d18 = CAJA_INICIAL
    meses = []
    for y, col in ((2027, col27), (2028, col28)):
        for m in range(12):
            br = col[m] + otros[y][m]
            contrib = col[m] * CONTRIB_BOLSA[y] + otros[y][m] * c_otros[y]
            fijo = fijos[y][m] + extra[y][m]
            res = contrib - fijo
            ajuste = D18[y]["caja"][m] - prev_caja_d18 - D18[y]["res"][m]   # aportes, préstamo, cuotas, preventa, depreciación
            prev_caja_d18 = D18[y]["caja"][m]
            caja += res + ajuste
            meses.append(dict(anio=y, mes=MESES[m], colegios_br=col[m], otros_br=otros[y][m], brownies=br,
                              venta_igv=br * VENTA_IGV[y], venta_sin=br * VENTA_SIN[y], contrib=contrib,
                              fijos=fijo, resultado=res, caja=caja,
                              equilibrio=fijo / (contrib / br) if br else None))
    anios = {}
    for y in (2027, 2028):
        ms = [x for x in meses if x["anio"] == y]
        fij = sum(x["fijos"] for x in ms)
        con = sum(x["contrib"] for x in ms)
        br = sum(x["brownies"] for x in ms)
        res = con - fij - (INTERESES_2028 if y == 2028 else 0)
        anios[y] = dict(brownies=br, venta_igv=sum(x["venta_igv"] for x in ms), venta_sin=sum(x["venta_sin"] for x in ms),
                        contrib=con, fijos=fij, intereses=INTERESES_2028 if y == 2028 else 0, resultado=res,
                        equilibrio_mes=fij / 12 / (con / br), contrib_br=con / br,
                        colegios=sum(altas27.values()) + (sum(altas28.values()) if y == 2028 else 0))
    # 3) 2029-2031: misma venta por colegio que en 2028, costo objetivo de S/1.46 (+S/0.17 por brownie)
    por_colegio = anios[2028]["brownies"] / anios[2028]["colegios"]
    c28 = anios[2028]["contrib_br"]
    for y, ncol in zip((2029, 2030, 2031), colegios_29_31):
        br = ncol * por_colegio
        p = VENTA_SIN[2028] * precio_29 / 22
        venta_sin = br * p
        c = c28 + 0.17 + (p - VENTA_SIN[2028])
        asistentes = (1 if ncol > 16 else 0) + (1 if ncol > 32 else 0)
        personal = 34200 + 27360 + 17784 * asistentes + 10296 * br / 72336     # gerente, coordinadora, reparto, promotores
        mkt = 0.08 * venta_sin
        otros_f = 13800 + 9420 * br / 72336 + 3080 * br / 72336 + 4500 + 946   # administración y app, laboratorio y transporte, tasas, módulo, depreciación
        fij = personal + mkt + otros_f
        inter = 1900 if y == 2029 else 0
        anios[y] = dict(brownies=br, venta_igv=venta_sin * 1.18, venta_sin=venta_sin, contrib=br * c, fijos=fij,
                        intereses=inter, resultado=br * c - fij - inter, equilibrio_mes=fij / 12 / c, contrib_br=c,
                        colegios=ncol, marketing=mkt)
    anios[2027]["marketing"] = 15040
    anios[2028]["marketing"] = 18503
    acum = 0
    for y in sorted(anios):
        acum += anios[y]["resultado"]
        anios[y]["acumulado"] = acum
    r["meses"] = meses
    r["anios"] = anios
    inv = 100000
    r["roi_5"] = acum / inv
    r["recupera"] = next((y for y in sorted(anios) if anios[y]["acumulado"] >= 0), None)
    r["caja_min"] = min((x["caja"], x["anio"], x["mes"]) for x in meses)
    r["equilibrio_desde"] = next(((x["anio"], x["mes"]) for x in meses if x["resultado"] > 0 and x["anio"] == 2028 and x["mes"] not in ("Ene", "Feb")), None)
    for y in (2027, 2028):
        a = anios[y]
        a["roi_mkt"] = (0.75 * a["contrib"] - a["marketing"]) / a["marketing"]
        a["roas"] = a["venta_sin"] / a["marketing"]
    return r


ALTAS27 = {3: 8, 4: 1, 5: 1, 6: 1, 8: 2, 9: 1}       # 8 colegios en marzo y 14 en septiembre de 2027
ALTAS28 = {3: 4, 4: 2, 5: 2, 8: 2}                  # 24 colegios en agosto de 2028
EXTRA27 = [0] * 5 + [6000 / 7] * 7                   # coordinadora a tiempo completo desde junio y apertura de colegios
EXTRA28 = [0, 0] + [20784 / 10] * 10                 # asistente de reparto desde marzo de 2028 y promotores


if __name__ == "__main__":
    r = plan(ALTAS27, ALTAS28, EXTRA27, EXTRA28, (30, 36, 42))
    actual = plan({3: 6, 8: 4}, {3: 6}, [0] * 12, [0] * 12, (20, 24, 28))
    out = dict(crecimiento=r, plan_d18=actual)
    (D / "modelo.json").write_text(json.dumps(out, ensure_ascii=False, indent=1, default=float))
    for nombre, x in (("PLAN DOC 18 (control)", actual), ("CRECIMIENTO", r)):
        print("==", nombre)
        for y, a in x["anios"].items():
            print(y, f"col {a['colegios']:>3}  br {a['brownies']:>9,.0f}  venta c/IGV {a['venta_igv']:>10,.0f}  contrib/br {a['contrib_br']:.3f}  fijos {a['fijos']:>9,.0f}  res {a['resultado']:>9,.0f}  acum {a['acumulado']:>9,.0f}  PE/mes {a['equilibrio_mes']:>6,.0f}")
        print("ROI 5 años", f"{x['roi_5']:.0%}", "recupera", x["recupera"], "caja mín", [round(x['caja_min'][0])] + list(x['caja_min'][1:]), "equilibrio desde", x["equilibrio_desde"])
        for y in (2027, 2028):
            print(y, "ROI mkt", f"{x['anios'][y]['roi_mkt']:.0%}", "ROAS", round(x['anios'][y]['roas'], 1))
    print("meses crecimiento:", [(m['anio'] % 100, m['mes'], m['brownies'], round(m['resultado']), round(m['caja'])) for m in r["meses"]])
