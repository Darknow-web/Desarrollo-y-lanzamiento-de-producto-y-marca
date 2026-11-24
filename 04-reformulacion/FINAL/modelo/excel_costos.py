"""Excel de costos para explicar a la profesora: costo, precio y ganancia por presentación y por canal.
Uso: python3.13 FINAL/modelo/excel_costos.py  → FINAL/AndiBite - Costos y ganancia por presentacion.xlsx
Cifras: documento 18 (secciones 2, 3 y 4.1), documento 20 y el modelo financiero (gastos fijos y volúmenes de 2027 y 2028).
"""
import pathlib
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side

D = pathlib.Path(__file__).resolve().parent
CAFE, CREMA, LAD, OLI, DOR, ARENA = "7A4A35", "FBF3E8", "BA4036", "7C8A3A", "E3A33B", "F4E6D3"
H = Font(bold=True, color="FFFFFF"); HF = PatternFill("solid", fgColor=CAFE)
SUB = PatternFill("solid", fgColor=ARENA); TOT = PatternFill("solid", fgColor="EADBC6")
T = Font(bold=True, size=15, color="4A2018"); B = Font(bold=True, color="4A2018")
NOTE = Font(italic=True, size=9, color="7A5A4C")
thin = Border(bottom=Side(style="thin", color="E8D5BD"))
S2 = '"S/ "#,##0.00;[Red]"-S/ "#,##0.00'; S0 = '"S/ "#,##0;[Red]"-S/ "#,##0'; PCT = '0.0%;[Red]-0.0%'; N0 = '#,##0'

wb = Workbook()


def header(ws, row, cols, widths=None):
    for i, c in enumerate(cols, 1):
        x = ws.cell(row=row, column=i, value=c)
        x.font = H; x.fill = HF; x.alignment = Alignment(wrap_text=True, vertical="center", horizontal="center")
    ws.row_dimensions[row].height = 44
    if widths:
        for i, w in enumerate(widths):
            ws.column_dimensions[chr(65 + i)].width = w


def put(ws, row, vals, fmts=None, bold=False, fill=None):
    for i, v in enumerate(vals, 1):
        c = ws.cell(row=row, column=i, value=v)
        if fmts and i - 1 < len(fmts) and fmts[i - 1]:
            c.number_format = fmts[i - 1]
        if bold: c.font = B
        if fill: c.fill = fill
        c.border = thin
        c.alignment = Alignment(vertical="center", wrap_text=(i == 1))


# ---------------- 1. Costo de producir ----------------
ws = wb.active; ws.title = "1. Costo de producir"
ws["A1"] = "AndiBite · Cuánto cuesta producir un brownie de 30 g"; ws["A1"].font = T
ws["A2"] = "Soles sin IGV. «Hoy» es el costo del año 1 (2027); «2028» es el costo meta con contrato de maquila y compras por volumen."
header(ws, 4, ["Partida", "Hoy (2027)", "2028 (costo meta)", "Qué incluye"], [34, 16, 18, 70])
rows = [("Insumos", 0.77, 0.67, "Sangrecita de res en polvo, cacao, plátano, cañihua, avena, huevo, eritritol y panela"),
        ("Maquila (planta INDDA-UNALM)", 0.675, 0.435, "Hornear, pesar y sellar la bolsita; S/22.50 por kg hoy y S/15 por kg con contrato"),
        ("Bolsita individual", 0.09, 0.07, "Una por brownie"),
        ("Bolsa kraft de 6 y etiqueta (por brownie)", 0.177, 0.17, "S/0.70 la bolsa y S/0.36 la etiqueta, entre 6"),
        ("Merma (5 %) y almacén", 0.13, 0.155, "Brownies que no se venden y guardado")]
for i, (a, b, c, d) in enumerate(rows):
    put(ws, 5 + i, [a, b, c, d], [None, S2, S2, None])
put(ws, 10, ["Costo de producir un brownie en bolsa", "=SUM(B5:B9)", "=SUM(C5:C9)", "Sin laboratorio ni transporte, que van en gastos fijos"], [None, S2, S2, None], bold=True, fill=TOT)
put(ws, 11, ["Costo de producir un brownie suelto", "=B10-B8", "=C10-C8", "No lleva la bolsa kraft de 6"], [None, S2, S2, None], bold=True, fill=TOT)
ws["A13"] = "Fuente: plan final como empresa real (documento 18, sección 2). El costo meta de 2028 se reparte entre partidas como referencia; el total (S/1.50) es el del plan."; ws["A13"].font = NOTE

# ---------------- 2. Por presentación ----------------
ws = wb.create_sheet("2. Por presentación")
ws["A1"] = "AndiBite · Precio, costo y ganancia por presentación"; ws["A1"].font = T
ws["A2"] = "Precio al público con IGV. La ganancia se calcula sobre la venta sin IGV (el IGV no es ingreso de la empresa). Costos de 2027."
header(ws, 4, ["Presentación", "Precio al público (con IGV)", "IGV (18 %)", "Venta neta (sin IGV)", "Costo de producir", "Ganancia bruta", "Ganancia bruta %", "Entrega, Yape y renta", "Lo que queda (contribución)", "Contribución %", "Gastos fijos que paga (2027)", "Ganancia neta", "Ganancia neta %"],
       [30, 13, 11, 13, 13, 13, 12, 13, 14, 12, 14, 13, 12])
# Bolsa de 6
put(ws, 5, ["Bolsa de 6 brownies", 22, "=B5-B5/1.18", "=B5/1.18", "=6*'1. Costo de producir'!B10", "=D5-E5", "=F5/D5", "=6*0.24", "=F5-H5", "=I5/D5", "=6*'3. Gastos fijos'!B15", "=I5-K5", "=L5/D5"],
    [None, S2, S2, S2, S2, S2, PCT, S2, S2, PCT, S2, S2, PCT])
put(ws, 6, ["Cada brownie dentro de la bolsa", "=B5/6", "=C5/6", "=D5/6", "='1. Costo de producir'!B10", "=D6-E6", "=F6/D6", 0.24, "=F6-H6", "=I6/D6", "='3. Gastos fijos'!B15", "=I6-K6", "=L6/D6"],
    [None, S2, S2, S2, S2, S2, PCT, S2, S2, PCT, S2, S2, PCT])
put(ws, 7, ["Brownie suelto", 5, "=B7-B7/1.18", "=B7/1.18", "='1. Costo de producir'!B11", "=D7-E7", "=F7/D7", 0.24, "=F7-H7", "=I7/D7", "='3. Gastos fijos'!B15", "=I7-K7", "=L7/D7"],
    [None, S2, S2, S2, S2, S2, PCT, S2, S2, PCT, S2, S2, PCT])
ws["A9"] = "Con el costo meta de 2028 y los gastos fijos de 2028 repartidos en más brownies:"; ws["A9"].font = B
header(ws, 10, ["Presentación", "Precio al público (con IGV)", "IGV (18 %)", "Venta neta (sin IGV)", "Costo de producir", "Ganancia bruta", "Ganancia bruta %", "Entrega, Yape y renta", "Lo que queda (contribución)", "Contribución %", "Gastos fijos que paga (2028)", "Ganancia neta", "Ganancia neta %"])
put(ws, 11, ["Bolsa de 6 brownies", 22, "=B11-B11/1.18", "=B11/1.18", "=6*'1. Costo de producir'!C10", "=D11-E11", "=F11/D11", "=6*0.24", "=F11-H11", "=I11/D11", "=6*'3. Gastos fijos'!C15", "=I11-K11", "=L11/D11"],
    [None, S2, S2, S2, S2, S2, PCT, S2, S2, PCT, S2, S2, PCT])
put(ws, 12, ["Brownie suelto", 5, "=B12-B12/1.18", "=B12/1.18", "='1. Costo de producir'!C11", "=D12-E12", "=F12/D12", 0.24, "=F12-H12", "=I12/D12", "='3. Gastos fijos'!C15", "=I12-K12", "=L12/D12"],
    [None, S2, S2, S2, S2, S2, PCT, S2, S2, PCT, S2, S2, PCT])
ws["A14"] = "Cómo leerlo: la ganancia bruta es lo que queda después de producir; la contribución, después de entregar y cobrar; la ganancia neta, después de pagar también la parte de los gastos fijos (sueldos, marketing, oficina) que le toca a cada brownie."; ws["A14"].font = NOTE
ws["A15"] = "En 2027 la ganancia neta es negativa porque el equipo y el marketing se pagan antes de tener el volumen; desde abril de 2028 la empresa gana cada mes de clases (modelo financiero)."; ws["A15"].font = NOTE

# ---------------- 3. Gastos fijos ----------------
ws = wb.create_sheet("3. Gastos fijos")
ws["A1"] = "AndiBite · Gastos fijos de la empresa"; ws["A1"].font = T
ws["A2"] = "Soles sin IGV. Son los gastos que se pagan aunque no se venda: se reparten entre todos los brownies del año."
header(ws, 4, ["Gasto fijo", "2027", "2028", "Qué incluye"], [40, 14, 14, 70])
fx = [("Personal", 42813, 86255, "Gerente, coordinadora de ventas, promotores por día y, desde 2028, asistente de reparto; con EsSalud"),
      ("Marketing", 15040, 18503, "Campaña «¿La notaste?»: redes, anuncios, pop-up, creadores, muestras"),
      ("Administración y app", 11700, 13200, "Contador, oficina, sistema y la app Andi"),
      ("Laboratorio y transporte", 7850, 9420, "Hierro y microbiológico de cada lote, y traslado desde la planta"),
      ("Tasas de feria y aportes a kermeses", 4470, 3080, "Feria municipal (S/60 por día) y aportes a las APAFA"),
      ("Apertura de colegios", 3720, 0, "Muestras y promotores al abrir cada colegio"),
      ("Módulo de vuelta al colegio", 0, 4500, "Real Plaza Salaverry, del 15 de febrero al 15 de marzo de 2028"),
      ("Depreciación de equipos", 946, 946, "Balanza, selladora, coolers, POS y kit de stand")]
for i, (a, b, c, d) in enumerate(fx):
    put(ws, 5 + i, [a, b, c, d], [None, S0, S0, None])
put(ws, 13, ["Total de gastos fijos", "=SUM(B5:B12)", "=SUM(C5:C12)", ""], [None, S0, S0], bold=True, fill=TOT)
put(ws, 14, ["Brownies vendidos en el año", 44383, 96036, "Modelo financiero: 14 colegios en 2027 y 24 en 2028"], [None, N0, N0, None])
put(ws, 15, ["Gasto fijo que le toca a cada brownie", "=B13/B14", "=C13/C14", "Total de gastos fijos ÷ brownies del año"], [None, S2, S2, None], bold=True, fill=TOT)
put(ws, 16, ["Gastos fijos al mes", "=B13/12", "=C13/12", ""], [None, S0, S0, None])
put(ws, 17, ["Punto de equilibrio (brownies al mes)", "=B16/1.074", "=C16/1.407", "Gastos fijos del mes ÷ lo que deja cada brownie en promedio (S/1.07 y S/1.41)"], [None, N0, N0, None], bold=True)

# ---------------- 4. Por canal ----------------
ws = wb.create_sheet("4. Por canal")
ws["A1"] = "AndiBite · Ganancia según dónde se vende (2027)"; ws["A1"].font = T
ws["A2"] = "Por brownie vendido, en soles sin IGV. Lo que queda = venta neta − producir − costos variables del canal (entrega, degustación, aporte). Después se resta lo que cuesta tener ese canal (renta o tasa) y la parte de los gastos fijos de la empresa."
header(ws, 4, ["Canal", "Cómo se vende", "Venta neta por brownie", "Lo que queda por brownie (contribución)", "Contribución %", "Costo propio del canal por brownie", "Ganancia del canal por brownie", "Gastos fijos de la empresa por brownie", "Ganancia neta por brownie", "Para qué sirve el canal"],
       [26, 34, 13, 15, 12, 15, 14, 15, 13, 46])
ch = [("Colegio (pedido del salón)", "Bolsa de 6 a S/22; entrega en mano el lunes", "=22/6/1.18", 1.03, 0, "Venta y recompra semanal: es el motor"),
      ("Quiosco del colegio (donde lo permitan)", "El quiosco compra la unidad a S/3.50 y la vende a S/5; va en la misma entrega del lunes", "=3.5/1.18", "=C{r}-'1. Costo de producir'!B11-0.24", 0, "Que el niño compre su unidad en el recreo. Solo en colegios cuyo quiosco acepta productos sin octógonos con edulcorante. No está en la proyección base: es venta adicional"),
      ("Kermeses y reuniones de padres", "6 de cada 10 compran suelto a S/5", "=(0.6*5+0.4*22/6)/1.18", 1.46, 0, "Prueba en familia; deja S/50 netos por kermés"),
      ("Stand de fin de semana (feria municipal)", "Mezcla de sueltos y bolsas; 3 regalados por cada 10 vendidos", "=(0.6*5+0.4*22/6)/1.18", 1.00, "=60/50", "Familias nuevas prueban; atendido por socios solo se paga la tasa de S/60 por día (50 brownies)"),
      ("Centro comercial (módulo temporal)", "Mezcla de sueltos y bolsas; 1 regalado por cada 10", "=(0.6*5+0.4*22/6)/1.18", 1.42, "=10440/3000", "Vuelta al colegio: S/10,440 por 30 días con 2 promotores y 100 brownies al día")]
for i, (a, b, vn, c, own, use) in enumerate(ch):
    r = 5 + i
    c = c.format(r=r) if isinstance(c, str) else c
    put(ws, r, [a, b, vn, c, f"=D{r}/C{r}", own, f"=D{r}-F{r}", "='3. Gastos fijos'!B15", f"=G{r}-H{r}", use], [None, None, S2, S2, PCT, S2, S2, S2, S2, None])
ws["A11"] = "Lectura: el colegio deja S/1.03 por brownie sin costo propio de canal, por eso es el canal principal. El quiosco deja casi lo mismo por unidad (unos S/1.06) y no tiene costo propio, porque va en la misma entrega. El stand y el centro comercial cuestan más de lo que dejan por brownie: se usan para que familias nuevas prueben (marketing), no como canal principal. Con el volumen de 2028 el gasto fijo por brownie baja a S/1.42 y el colegio deja S/1.37: queda casi en cero; desde 2029, con el costo objetivo de S/1.46 y más colegios, cada brownie deja ganancia."; ws["A11"].font = NOTE
ws["A12"] = "Fuentes: documento 18 (secciones 3 y 4.1), documento 20 (viabilidad del mall) y modelo financiero."; ws["A12"].font = NOTE

for w in wb.worksheets:
    w.sheet_view.showGridLines = False
    w.freeze_panes = "B5"
wb.save(D.parent / "AndiBite - Costos y ganancia por presentacion.xlsx")
print("xlsx listo")
