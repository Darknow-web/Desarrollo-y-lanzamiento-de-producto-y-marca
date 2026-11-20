"""Escribe «AndiBite - Modelo financiero.xlsx» con fórmulas a la vista (punto de equilibrio, ROI, acumulado)."""
import pathlib
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from modelo import plan, ALTAS27, ALTAS28, EXTRA27, EXTRA28, VENTA_IGV
D = pathlib.Path(__file__).resolve().parent
r = plan(ALTAS27, ALTAS28, EXTRA27, EXTRA28, (30, 36, 42))
wb = Workbook()
CAFE = "4A2018"; CREMA = "FBF3E8"; LAD = "BA4036"
H = Font(bold=True, color="FFFFFF"); HF = PatternFill("solid", fgColor=CAFE)
T = Font(bold=True, size=14, color=CAFE); B = Font(bold=True)
thin = Border(bottom=Side(style="thin", color="E8D5BD"))
NUM = '#,##0;[Red]-#,##0'; DEC = '#,##0.00'; PCT = '0%'
def head(ws, row, cols):
    for i, c in enumerate(cols, 1):
        x = ws.cell(row=row, column=i, value=c); x.font = H; x.fill = HF; x.alignment = Alignment(wrap_text=True, vertical="center")
    ws.row_dimensions[row].height = 32

# --- 5 años ---
ws = wb.active; ws.title = "5 años"
ws["A1"] = "AndiBite · Proyección a 5 años (soles)"; ws["A1"].font = T
ws["A2"] = "Ventas con IGV; costos sin IGV. Resultado = contribución − costos fijos − intereses."
head(ws, 4, ["Año", "Colegios", "Brownies", "Ventas con IGV", "Ventas sin IGV", "Contribución", "Costos fijos", "Intereses", "Resultado", "Acumulado", "Contribución por brownie", "Punto de equilibrio (brownies al mes)", "Marketing", "ROI del marketing (75 % atribuido)", "ROAS"])
for i, y in enumerate(range(2027, 2032)):
    a = r["anios"][y]; row = 5 + i
    vals = [y, a["colegios"], round(a["brownies"]), round(a["venta_igv"]), round(a["venta_sin"]), round(a["contrib"]), round(a["fijos"]), a["intereses"]]
    for j, v in enumerate(vals, 1): ws.cell(row=row, column=j, value=v)
    ws.cell(row=row, column=9, value=f"=F{row}-G{row}-H{row}")
    ws.cell(row=row, column=10, value=f"=I{row}" if i == 0 else f"=J{row-1}+I{row}")
    ws.cell(row=row, column=11, value=f"=F{row}/C{row}")
    ws.cell(row=row, column=12, value=f"=G{row}/12/K{row}")
    ws.cell(row=row, column=13, value=round(a["marketing"]))
    ws.cell(row=row, column=14, value=f"=(0.75*F{row}-M{row})/M{row}")
    ws.cell(row=row, column=15, value=f"=E{row}/M{row}")
    for c, f in zip(range(2, 16), [None, NUM, NUM, NUM, NUM, NUM, NUM, NUM, NUM, DEC, NUM, NUM, PCT, '0.0']):
        if f: ws.cell(row=row, column=c).number_format = f
ws["A11"] = "Inversión total (S/)"; ws["B11"] = 100000; ws["B11"].number_format = NUM
ws["A12"] = "ROI a 5 años (utilidad acumulada 2027-2031 ÷ inversión)"; ws["B12"] = "=J9/B11"; ws["B12"].number_format = PCT; ws["B12"].font = Font(bold=True, color=LAD)
ws["A13"] = "Recuperación de la inversión"; ws["B13"] = '=IF(J5>=0,2027,IF(J6>=0,2028,IF(J7>=0,2029,IF(J8>=0,2030,IF(J9>=0,2031,"después de 2031")))))'
for c, w in zip("ABCDEFGHIJKLMNO", [34, 9, 11, 13, 13, 13, 13, 10, 12, 12, 13, 16, 11, 15, 8]): ws.column_dimensions[c].width = w

# --- Mes a mes ---
ws = wb.create_sheet("Mes a mes 2027-2028")
ws["A1"] = "AndiBite · Mes a mes 2027-2028 (soles)"; ws["A1"].font = T
ws["A2"] = "Punto de equilibrio del mes = costos fijos del mes ÷ contribución por brownie del mes."
head(ws, 4, ["Año", "Mes", "Brownies del canal colegios", "Brownies de kermés, stand y mall", "Brownies", "Ventas con IGV", "Contribución", "Costos fijos", "Resultado", "Caja al cierre", "Punto de equilibrio del mes (brownies)", "¿Sobre el equilibrio?"])
for i, m in enumerate(r["meses"]):
    row = 5 + i
    vals = [m["anio"], m["mes"], m["colegios_br"], m["otros_br"]]
    for j, v in enumerate(vals, 1): ws.cell(row=row, column=j, value=v)
    ws.cell(row=row, column=5, value=f"=C{row}+D{row}")
    ws.cell(row=row, column=6, value=round(m["venta_igv"]))
    ws.cell(row=row, column=7, value=round(m["contrib"]))
    ws.cell(row=row, column=8, value=round(m["fijos"]))
    ws.cell(row=row, column=9, value=f"=G{row}-H{row}")
    ws.cell(row=row, column=10, value=round(m["caja"]))
    ws.cell(row=row, column=11, value=f'=IF(E{row}=0,"",H{row}/(G{row}/E{row}))')
    ws.cell(row=row, column=12, value=f'=IF(I{row}>0,"Sí","No")')
    for c in (3, 4, 5, 6, 7, 8, 9, 10, 11): ws.cell(row=row, column=c).number_format = NUM
ws["A30"] = "En 2028 el resultado anual resta además S/3,934 de intereses del préstamo (están en las cuotas de la caja)."
for c, w in zip("ABCDEFGHIJKL", [7, 6, 14, 16, 11, 13, 13, 12, 12, 12, 18, 13]): ws.column_dimensions[c].width = w

# --- Punto de equilibrio ---
ws = wb.create_sheet("Punto de equilibrio")
ws["A1"] = "AndiBite · Punto de equilibrio mensual"; ws["A1"].font = T
head(ws, 3, ["Concepto", "2027", "2028", "Cómo se calcula"])
rows = [("Costos fijos del año (S/)", round(r["anios"][2027]["fijos"]), round(r["anios"][2028]["fijos"]), "Personal, marketing, administración y app, laboratorio y transporte, tasas, módulo y depreciación"),
        ("Costos fijos al mes (S/)", "=B4/12", "=C4/12", "Fijos del año ÷ 12"),
        ("Contribución por brownie (S/)", round(r["anios"][2027]["contrib_br"], 3), round(r["anios"][2028]["contrib_br"], 3), "Venta sin IGV − producir − entrega, Yape y renta (promedio de canales)"),
        ("Punto de equilibrio (brownies al mes)", "=B5/B6", "=C5/C6", "Fijos al mes ÷ contribución por brownie"),
        ("En bolsas de 6 al mes", "=B7/6", "=C7/6", ""),
        ("Venta media por brownie con IGV (S/)", round(VENTA_IGV[2027], 3), round(VENTA_IGV[2028], 3), "Mezcla de bolsa a S/22 y unidad a S/5"),
        ("Punto de equilibrio en ventas con IGV (S/ al mes)", "=B7*B9", "=C7*C9", "Brownies de equilibrio × venta media"),
        ("Colegios al cierre del año", 14, 24, ""),
        ("Brownies por colegio y día para el equilibrio", "=B7/B11/19", "=C7/C11/19", "Con 19 días de clase al mes")]
for i, (a, b, c, d) in enumerate(rows):
    row = 4 + i
    for j, v in enumerate((a, b, c, d), 1): ws.cell(row=row, column=j, value=v)
    for col in (2, 3): ws.cell(row=row, column=col).number_format = DEC if i in (2, 5, 8) else NUM
for c, w in zip("ABCD", [46, 14, 14, 70]): ws.column_dimensions[c].width = w

# --- Supuestos ---
ws = wb.create_sheet("Supuestos")
ws["A1"] = "Supuestos del plan de crecimiento"; ws["A1"].font = T
sup = ["Precio: bolsa de 6 a S/22 y unidad a S/5 en los 5 años (lo que validaron las mamás de nivel B).",
       "Venta por colegio: la misma del plan (unos 25 brownies por día de clase en un colegio maduro, 430 al mes en 2027 y 470 en 2028). Un colegio nuevo arranca con 133, 200, 283 y 333 brownies en sus primeros 4 meses.",
       "Colegios: 8 en marzo de 2027 (el del focus, uno por socio y 2 de la coordinadora), 1 más cada mes hasta 14 en septiembre; 24 en agosto de 2028; 30, 36 y 42 en 2029, 2030 y 2031.",
       "Kermeses, stand de feria, pop-up y módulo del mall: los mismos del plan.",
       "Costos fijos: los del plan mes a mes, más S/6,000 en 2027 (coordinadora a tiempo completo desde junio y apertura de colegios) y S/20,784 en 2028 (asistente de reparto desde marzo y promotores).",
       "Costo de producir: S/2.07 en 2027, S/1.63 en 2028 y S/1.46 desde 2029 (contrato de maquila por volumen y compra de insumos por saco).",
       "2029-2031: 1 asistente de reparto desde 17 colegios y 2 desde 33; marketing 8 % de la venta sin IGV; laboratorio, transporte, tasas y promotores crecen con el volumen.",
       "Financiamiento: S/100,000 (socios S/50,000 en dic. 2026, segundo aporte S/35,000 en may. 2027 y préstamo de caja municipal S/15,000 en ene. 2028, TEA 40 %).",
       "ROI del marketing: 75 % de la contribución atribuida al marketing, el mismo método del T2. ROAS: ventas sin IGV ÷ marketing."]
for i, s in enumerate(sup): ws.cell(row=3 + i, column=1, value="• " + s).alignment = Alignment(wrap_text=True)
ws.column_dimensions["A"].width = 120
wb.save(D.parent / "AndiBite - Modelo financiero.xlsx")
print("xlsx listo")
