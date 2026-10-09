# -*- coding: utf-8 -*-
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.comments import Comment
from openpyxl.utils import get_column_letter as L

OUT='/home/user/Desarrollo-y-lanzamiento-de-producto-y-marca/04-reformulacion/Costeo-presentaciones-AndiBite.xlsx'
wb=Workbook()
F='Arial'
BLUE=Font(name=F,color='0000FF',size=10); BLACK=Font(name=F,color='000000',size=10)
GREEN=Font(name=F,color='008000',size=10); BOLD=Font(name=F,bold=True,size=10)
TITLE=Font(name=F,bold=True,size=14,color='5C301E'); H2=Font(name=F,bold=True,size=11,color='FFFFFF')
HFILL=PatternFill('solid',fgColor='8B1E2B'); SUB=PatternFill('solid',fgColor='E8CDB3'); YEL=PatternFill('solid',fgColor='FFFF00')
TOT=PatternFill('solid',fgColor='F7ECDA')
thin=Side(style='thin',color='BFBFBF'); BOX=Border(top=thin,bottom=thin,left=thin,right=thin)
SOL='"S/ "#,##0.00;("S/ "#,##0.00);-'; SOL0='"S/ "#,##0;("S/ "#,##0);-'
NUM='#,##0;(#,##0);-'; NUM1='#,##0.0;(#,##0.0);-'; PCT='0.0%;(0.0%);-'
WRAP=Alignment(wrap_text=True,vertical='top')

def cell(ws,ref,val,font=BLACK,fmt=None,fill=None,bold=False,wrap=False,comment=None):
    c=ws[ref]; c.value=val; c.font=Font(name=F,size=font.size,color=font.color,bold=bold or font.bold)
    if fmt: c.number_format=fmt
    if fill: c.fill=fill
    if wrap: c.alignment=WRAP
    if comment: c.comment=Comment(comment,'AndiBite')
    return c
def header(ws,row,labels,start=1):
    for i,t in enumerate(labels):
        c=ws.cell(row=row,column=start+i,value=t); c.font=H2; c.fill=HFILL; c.alignment=Alignment(wrap_text=True,vertical='center',horizontal='center'); c.border=BOX
def section(ws,row,text,ncols=5):
    c=ws.cell(row=row,column=1,value=text); c.font=Font(name=F,bold=True,size=11,color='5C301E')
    for i in range(1,ncols+1): ws.cell(row=row,column=i).fill=SUB

# ---------------- Supuestos ----------------
S=wb.active; S.title='Supuestos'
cell(S,'A1','Supuestos del costeo — AndiBite (maquila, escenario de 3,000 unidades al mes)',TITLE)
cell(S,'A2','Celdas azules = datos que pueden cambiar. Amarillo = supuestos clave sin cotizar. Montos en soles. Fuente general: 04-reformulacion/05-plan-comercial-y-financiero.md, sección 4.',BLACK,wrap=False)
section(S,4,'1. Costos de producción por unidad de 20 g (sin IGV)',4); header(S,5,['Concepto','Valor','Unidad','Fuente o nota'])
rows=[
 (6,'Insumos por unidad (promedio de los 3 sabores, sangrecita en polvo)',0.605,'S/ por unidad','Documento 05, tabla 4.2 (precios de Makro, mayoristas, Plaza Vea y Wong sin IGV)',None),
 (7,'Maquila por unidad (la planta mezcla, hornea, corta, pesa y empaca)',0.50,'S/ por unidad','[POR CONFIRMAR] Rango S/0.40-0.60 del documento 03. Cotizar con MAKING y Panificadora Unión',YEL),
 (8,'Descuento de maquila si no se empaca cada unidad (opción C)',0.00,'S/ por unidad','[HIPÓTESIS] Dejar en 0 hasta que la planta lo confirme',YEL),
 (9,'Bolsita individual (flow pack sin imprimir)',0.09,'S/ por unidad','Documento 05, tabla 4.2',None),
 (10,'Etiqueta individual con rotulado completo (solo unidad que se vende suelta)',0.25,'S/ por unidad','Imprenta Peruana, 1,000 unidades sin IGV (documento 02)',None),
 (11,'Papel manteca separador entre brownies (opción C)',0.01,'S/ por unidad','[HIPÓTESIS] Rollo de supermercado prorrateado',None),
 (12,'Control de calidad por lote, prorrateado por unidad',0.083,'S/ por unidad','S/250 por análisis microbiológico al mes / 3,000 unidades (documento 05)',None),
 (13,'Transporte planta-almacén por unidad',0.053,'S/ por unidad','2 viajes de S/80 al mes / 3,000 unidades (documento 05)',None),
 (14,'Almacenamiento por unidad',0.04,'S/ por unidad','Pactado con la planta u operador logístico (documento 05)',None),
 (15,'Merma (sobre insumos, maquila y empaque)',0.05,'%','[HIPÓTESIS] Documento 05',None),
]
for r,lab,v,u,src,fill in rows:
    cell(S,f'A{r}',lab); cell(S,f'B{r}',v,BLUE,PCT if u=='%' else '0.000',fill); cell(S,f'C{r}',u); cell(S,f'D{r}',src,wrap=False)
section(S,17,'2. Empaque del pack (por envase, sin IGV)',4); header(S,18,['Concepto','Valor','Unidad','Fuente o nota'])
for r,lab,v,src,fill in [
 (19,'Doypack kraft para 6 unidades',0.53,'S/0.625 con IGV por 1,000 unidades (documento 02)',None),
 (20,'Etiquetas del doypack de 6 (frente y reverso)',0.72,'2 x S/0.36, 1,000 unidades (documento 02)',None),
 (21,'Doypack kraft para 12 unidades',0.70,'[HIPÓTESIS] Talla mayor; cotizar',YEL),
 (22,'Etiquetas del doypack de 12 (frente y reverso)',0.72,'Mismo sticker que el pack de 6',None)]:
    cell(S,f'A{r}',lab); cell(S,f'B{r}',v,BLUE,'0.00',fill); cell(S,f'C{r}','S/ por envase'); cell(S,f'D{r}',src)
section(S,24,'3. Impuestos y comisiones',4); header(S,25,['Concepto','Valor','Unidad','Fuente o nota'])
for r,lab,v,src in [
 (26,'IGV',0.18,'SUNAT'),
 (27,'Pasarela de pagos (Yape, Plin, tarjeta) sobre el precio con IGV',0.03,'Mezcla Culqi 3.44-3.99 % con 15 % de transferencias sin costo (documento 05)'),
 (28,'Renta RMT, pago a cuenta mensual sobre la venta sin IGV',0.01,'Régimen MYPE Tributario (documento 05)')]:
    cell(S,f'A{r}',lab); cell(S,f'B{r}',v,BLUE,PCT); cell(S,f'C{r}','%'); cell(S,f'D{r}',src)
CH=['Venta directa (WhatsApp e Instagram)','Ferias y eventos','Colegios (quiosco)','Tiendas naturistas']
section(S,30,'4. Costo de canal por unidad (sin IGV)',4); header(S,31,['Canal','Logística por unidad (S/)','¿Paga pasarela? (1 = sí, 0 = no)','Nota'])
for i,(lab,lg,pas,nota) in enumerate([(CH[0],0.80,1,'Delivery: S/9.50 por pedido de unas 10 unidades; gratis desde 2 packs (documento 05)'),
                                      (CH[1],1.00,1,'Stand de S/200 por evento con unas 120 unidades (documento 05)'),
                                      (CH[2],0.10,0,'[HIPÓTESIS] Ruta semanal al colegio; cobro por factura'),
                                      (CH[3],0.15,0,'[HIPÓTESIS] Reposición quincenal; cobro por factura')]):
    r=32+i; cell(S,f'A{r}',lab); cell(S,f'B{r}',lg,BLUE,'0.00'); cell(S,f'C{r}',pas,BLUE,'0'); cell(S,f'D{r}',nota)
section(S,37,'5. Precio que cobra AndiBite por presentación y canal (S/ con IGV)',5); header(S,38,['Canal','Unidad individual','Pack de 6','Pack de 12','Nota'])
for i,(u,p6,p12,nota) in enumerate([(4.00,24.90,46.90,'Precio intermedio recomendado (9-oct-2026). S/4.15 por brownie en el pack de 6, a la par de Fika (S/4.00) y Mamalama (S/4.10) por 20 g. Unidad = caja degustación de 3 (S/12.00)'),
                                    (5.00,26.00,48.00,'Precio intermedio recomendado (9-oct-2026). En feria se cobra algo más que por WhatsApp porque el stand cuesta cerca de S/1 por brownie'),
                                    (3.00,0,0,'El alumno paga S/4.00; el concesionario se queda 25 %'),
                                    (0,17.34,0,'Precio intermedio recomendado (9-oct-2026): AndiBite cobra S/17.34 a la tienda; con 40 % para la tienda, el anaquel queda en S/28.90')]):
    r=39+i; cell(S,f'A{r}',CH[i])
    for col,v in zip('BCD',(u,p6,p12)): cell(S,f'{col}{r}',v,BLUE,SOL,YEL if (i==1 and col=='B') else None)
    cell(S,f'E{r}',nota)
S['B40'].comment=Comment('[HIPÓTESIS] Precio sugerido para la unidad suelta en ferias. El documento 05 usaba S/4.50; aquí se sube a S/5.00 para que el pack de 6 (S/4.50 por unidad) sea la compra más conveniente.','AndiBite')
section(S,44,'6. Mezcla de presentaciones por canal (% de las unidades que vende cada canal)',5); header(S,45,['Canal','Unidad individual','Pack de 6','Pack de 12','Suma (debe ser 100 %)'])
for i,mix in enumerate([(0.10,0.60,0.30),(0.70,0.30,0.00),(1.00,0.00,0.00),(0.00,1.00,0.00)]):
    r=46+i; cell(S,f'A{r}',CH[i])
    for col,v in zip('BCD',mix): cell(S,f'{col}{r}',v,BLUE,PCT,YEL)
    cell(S,f'E{r}',f'=SUM(B{r}:D{r})',BLACK,PCT)
cell(S,'A50','Venta directa: 60/30/10 viene del documento 05 (sección 6.1). Ferias, colegios y naturistas: [HIPÓTESIS] según cómo compra cada canal.',BLACK)
section(S,52,'7. Costos fijos mensuales (S/ sin IGV)',4); header(S,53,['Concepto','S/ al mes','','Fuente o nota'])
for i,(lab,v,src) in enumerate([('Administración: contador, software, web, teléfono, movilidad, GS1, banco',700,'Documento 05, sección 4.1'),
                                ('Asistente de pedidos y despacho (medio tiempo)',800,'[HIPÓTESIS] Si los socios despachan, poner 0'),
                                ('Marketing: pauta y muestras (promedio del año)',1291.67,'Documento 05'),
                                ('Depreciación de equipos (S/2,338 en 36 meses)',65,'Documento 05')]):
    r=54+i; cell(S,f'A{r}',lab); cell(S,f'B{r}',v,BLUE,SOL); cell(S,f'D{r}',src)
cell(S,'A58','Total costos fijos al mes',bold=True); cell(S,'B58','=SUM(B54:B57)',BLACK,SOL,TOT,bold=True)
section(S,60,'8. Mezcla de sabores (para planear compras y producción)',4); header(S,61,['Sabor','% de las unidades','','Nota'])
for i,(lab,v) in enumerate([('Chispa (choco clásico con chispas)',0.40),('Andi (choco, plátano, canela y cañihua)',0.35),('Lúcu (choco y lúcuma)',0.25)]):
    r=62+i; cell(S,f'A{r}',lab); cell(S,f'B{r}',v,BLUE,PCT); cell(S,f'D{r}','[HIPÓTESIS] Ajustar con el focus 2' if i==0 else '')
cell(S,'A65','Suma',bold=True); cell(S,'B65','=SUM(B62:B64)',BLACK,PCT)
for col,w in zip('ABCDE',(62,16,20,70,40)): S.column_dimensions[col].width=w

# ---------------- Costeo ----------------
C=wb.create_sheet('Costeo')
cell(C,'A1','Costo de producción por presentación (sin IGV)',TITLE)
cell(C,'A2','Opción B: cada brownie en bolsita sin etiqueta, dentro del doypack con etiqueta. Opción C: brownies sueltos con papel manteca dentro del doypack. Unidad individual: bolsita con etiqueta completa.')
header(C,4,['Concepto','Unidad individual','Pack de 6 — opción B (con bolsitas)','Pack de 6 — opción C (sueltos)','Pack de 12 (con bolsitas)'])
lab=['Unidades por presentación','Insumos','Maquila','Bolsita individual (flow pack)','Etiqueta individual','Papel manteca separador','Doypack','Etiquetas del doypack','Merma','Control de calidad, transporte y almacén','Costo de producción por presentación','Costo de producción por unidad']
for i,t in enumerate(lab): cell(C,f'A{5+i}',t,bold=(i>=10))
for col,n in zip('BCDE',(1,6,6,12)): cell(C,f'{col}5',n,BLUE,'0')
for col in 'BCDE':
    cell(C,f'{col}6',f'={col}5*Supuestos!$B$6',GREEN,SOL)
    cell(C,f'{col}7',f'={col}5*(Supuestos!$B$7-Supuestos!$B$8)' if col=='D' else f'={col}5*Supuestos!$B$7',GREEN,SOL)
    cell(C,f'{col}8',0 if col=='D' else f'={col}5*Supuestos!$B$9',GREEN if col!='D' else BLACK,SOL)
    cell(C,f'{col}9','=Supuestos!$B$10' if col=='B' else 0,GREEN if col=='B' else BLACK,SOL)
    cell(C,f'{col}10',f'={col}5*Supuestos!$B$11' if col=='D' else 0,GREEN if col=='D' else BLACK,SOL)
    cell(C,f'{col}11',{'B':0,'C':'=Supuestos!$B$19','D':'=Supuestos!$B$19','E':'=Supuestos!$B$21'}[col],GREEN if col!='B' else BLACK,SOL)
    cell(C,f'{col}12',{'B':0,'C':'=Supuestos!$B$20','D':'=Supuestos!$B$20','E':'=Supuestos!$B$22'}[col],GREEN if col!='B' else BLACK,SOL)
    cell(C,f'{col}13',f'=Supuestos!$B$15*SUM({col}6:{col}12)',BLACK,SOL)
    cell(C,f'{col}14',f'={col}5*(Supuestos!$B$12+Supuestos!$B$13+Supuestos!$B$14)',BLACK,SOL)
    cell(C,f'{col}15',f'=SUM({col}6:{col}14)',BLACK,SOL,TOT,bold=True)
    cell(C,f'{col}16',f'=IF({col}5=0,0,{col}15/{col}5)',BLACK,SOL,TOT,bold=True)
cell(C,'A18','Venta directa por WhatsApp e Instagram',bold=True)
for i,t in enumerate(['Precio con IGV','Precio sin IGV','Margen bruto por presentación (precio sin IGV menos costo de producción)','Margen bruto %']): cell(C,f'A{19+i}',t)
for col,sc in zip('BCDE','BCCD'):
    cell(C,f'{col}19',f'=Supuestos!{sc}39',GREEN,SOL)
    cell(C,f'{col}20',f'={col}19/(1+Supuestos!$B$26)',BLACK,SOL)
    cell(C,f'{col}21',f'={col}20-{col}15',BLACK,SOL)
    cell(C,f'{col}22',f'=IF({col}20=0,0,{col}21/{col}20)',BLACK,PCT)
cell(C,'A24','Referencia: con la opción A (bolsita con etiqueta individual en cada brownie), el costo de producción era S/1.91 por unidad (documento 05).')
cell(C,'A25','El margen bruto no incluye delivery, pasarela, comisiones de canal ni costos fijos: eso se calcula en la hoja Proyeccion.')
C.column_dimensions['A'].width=62
for col in 'BCDE': C.column_dimensions[col].width=24
C.row_dimensions[4].height=42

# ---------------- Mensual (inputs de unidades por canal) ----------------
M=wb.create_sheet('Mensual')
MONTHS=['Mar-27','Abr-27','May-27','Jun-27','Jul-27','Ago-27','Set-27','Oct-27','Nov-27','Dic-27','Ene-28','Feb-28']
UNITS=[[2160,3360,4320,5160,4608,5406,6960,7560,8160,5880,2856,3888],
       [480,360,480,360,480,600,360,360,480,720,480,480],
       [0,300,300,600,480,765,1200,1200,1500,900,0,0],
       [0,0,120,180,240,300,360,360,420,480,336,336]]
cell(M,'A1','Proyección mensual del año 1 (marzo 2027 a febrero 2028), escenario base',TITLE)
cell(M,'A2','Las unidades por canal (azul) vienen del documento 05, tabla 6.2. Cámbielas para probar otro escenario; todo lo demás se recalcula.')
header(M,4,['Unidades vendidas por canal']+MONTHS+['Total año'])
for i in range(4):
    r=5+i; cell(M,f'A{r}',CH[i])
    for j,v in enumerate(UNITS[i]): cell(M,f'{L(2+j)}{r}',v,BLUE,NUM)
    cell(M,f'N{r}',f'=SUM(B{r}:M{r})',BLACK,NUM)
cell(M,'A9','Total unidades',bold=True)
for j in range(13): c=L(2+j); cell(M,f'{c}9',f'=SUM({c}5:{c}8)',BLACK,NUM,TOT,bold=True)
section(M,11,'Producción que hay que pedir a la planta',14)
cell(M,'A12','Unidades individuales sueltas'); cell(M,'A13','Unidades que van en packs de 6'); cell(M,'A14','Unidades que van en packs de 12')
cell(M,'A15','Packs de 6 a armar'); cell(M,'A16','Packs de 12 a armar')
for j in range(12):
    c=L(2+j)
    cell(M,f'{c}12',f'=SUMPRODUCT({c}$5:{c}$8,Supuestos!$B$46:$B$49)',GREEN,NUM)
    cell(M,f'{c}13',f'=SUMPRODUCT({c}$5:{c}$8,Supuestos!$C$46:$C$49)',GREEN,NUM)
    cell(M,f'{c}14',f'=SUMPRODUCT({c}$5:{c}$8,Supuestos!$D$46:$D$49)',GREEN,NUM)
    cell(M,f'{c}15',f'={c}13/Costeo!$C$5',BLACK,NUM)
    cell(M,f'{c}16',f'={c}14/Costeo!$E$5',BLACK,NUM)
for r in range(12,17): cell(M,f'N{r}',f'=SUM(B{r}:M{r})',BLACK,NUM)
section(M,18,'Resultado mensual (S/)',14)
labs={19:'Ventas con IGV',20:'Ventas sin IGV',21:'Contribución con pack de 6 opción B',22:'Contribución con pack de 6 opción C',23:'Costos fijos del mes',24:'Resultado operativo — opción B',25:'Resultado operativo — opción C',26:'Resultado acumulado — opción B',27:'Resultado acumulado — opción C'}
for r,t in labs.items(): cell(M,f'A{r}',t,bold=r in (24,25))
for j in range(12):
    c=L(2+j); p=L(1+j)
    cell(M,f'{c}19',f'=SUMPRODUCT({c}$5:{c}$8,Proyeccion!$H$22:$H$25)',GREEN,SOL0)
    cell(M,f'{c}20',f'={c}19/(1+Supuestos!$B$26)',BLACK,SOL0)
    cell(M,f'{c}21',f'=SUMPRODUCT({c}$5:{c}$8,Proyeccion!$F$22:$F$25)',GREEN,SOL0)
    cell(M,f'{c}22',f'=SUMPRODUCT({c}$5:{c}$8,Proyeccion!$G$22:$G$25)',GREEN,SOL0)
    cell(M,f'{c}23','=Supuestos!$B$58',GREEN,SOL0)
    cell(M,f'{c}24',f'={c}21-{c}23',BLACK,SOL0,TOT,bold=True)
    cell(M,f'{c}25',f'={c}22-{c}23',BLACK,SOL0,TOT,bold=True)
    cell(M,f'{c}26',f'={c}24' if j==0 else f'={p}26+{c}24',BLACK,SOL0)
    cell(M,f'{c}27',f'={c}25' if j==0 else f'={p}27+{c}25',BLACK,SOL0)
for r in range(19,26): cell(M,f'N{r}',f'=SUM(B{r}:M{r})',BLACK,SOL0,TOT if r in (24,25) else None,bold=r in (24,25))
cell(M,'A29','La contribución mensual multiplica las unidades de cada canal por la contribución promedio por unidad de ese canal (hoja Proyeccion, tabla 2). No incluye intereses del préstamo ni el impuesto a la renta anual.')
M.column_dimensions['A'].width=44
for j in range(13): M.column_dimensions[L(2+j)].width=11
M.column_dimensions['N'].width=13

# ---------------- Proyeccion ----------------
P=wb.create_sheet('Proyeccion',2)
cell(P,'A1','Proyección anual por canal y presentación (año 1, escenario base)',TITLE)
cell(P,'A2','Paso a paso: unidades del canal (hoja Mensual) × mezcla de presentaciones (Supuestos) = unidades por presentación; ÷ tamaño = envases vendidos; × precio = ingreso; menos costo de producción y de canal = contribución.')
header(P,4,['Canal','Presentación','Unidades por envase','Unidades del canal en el año','% de la mezcla','Unidades vendidas','Envases vendidos','Precio cobrado con IGV por envase','Ingreso con IGV','Ingreso sin IGV','Costo de producción por envase — opción B','Costo de producción por envase — opción C','Costo de canal por envase','Contribución por envase — opción B','Contribución por envase — opción C','Contribución total — opción B','Contribución total — opción C','Margen de contribución % — B','Margen de contribución % — C'])
PRES=[('Unidad individual','B','B','B','B'),('Pack de 6','C','C','D','C'),('Pack de 12','D','E','E','E')]  # name, Supuestos col (price/mix), Costeo col B-option, Costeo col C-option, Costeo size col
r=5
for i in range(4):
    for name,scol,cb,cc,csz in PRES:
        cell(P,f'A{r}',CH[i]); cell(P,f'B{r}',name)
        cell(P,f'C{r}',f'=Costeo!{csz}5',GREEN,'0')
        cell(P,f'D{r}',f'=Mensual!$N${5+i}',GREEN,NUM)
        cell(P,f'E{r}',f'=Supuestos!{scol}{46+i}',GREEN,PCT)
        cell(P,f'F{r}',f'=D{r}*E{r}',BLACK,NUM)
        cell(P,f'G{r}',f'=IF(C{r}=0,0,F{r}/C{r})',BLACK,NUM)
        cell(P,f'H{r}',f'=Supuestos!{scol}{39+i}',GREEN,SOL)
        cell(P,f'I{r}',f'=G{r}*H{r}',BLACK,SOL0)
        cell(P,f'J{r}',f'=I{r}/(1+Supuestos!$B$26)',BLACK,SOL0)
        cell(P,f'K{r}',f'=Costeo!{cb}15',GREEN,SOL)
        cell(P,f'L{r}',f'=Costeo!{cc}15',GREEN,SOL)
        cell(P,f'M{r}',f'=IF(H{r}=0,0,C{r}*Supuestos!$B${32+i}+H{r}*Supuestos!$B$27*Supuestos!$C${32+i}+H{r}/(1+Supuestos!$B$26)*Supuestos!$B$28)',BLACK,SOL)
        cell(P,f'N{r}',f'=IF(H{r}=0,0,H{r}/(1+Supuestos!$B$26)-K{r}-M{r})',BLACK,SOL)
        cell(P,f'O{r}',f'=IF(H{r}=0,0,H{r}/(1+Supuestos!$B$26)-L{r}-M{r})',BLACK,SOL)
        cell(P,f'P{r}',f'=G{r}*N{r}',BLACK,SOL0)
        cell(P,f'Q{r}',f'=G{r}*O{r}',BLACK,SOL0)
        cell(P,f'R{r}',f'=IF(H{r}=0,0,N{r}/(H{r}/(1+Supuestos!$B$26)))',BLACK,PCT)
        cell(P,f'S{r}',f'=IF(H{r}=0,0,O{r}/(H{r}/(1+Supuestos!$B$26)))',BLACK,PCT)
        r+=1
cell(P,'A17','Total',bold=True)
for col in 'FIJPQ': cell(P,f'{col}17',f'=SUM({col}5:{col}16)',BLACK,NUM if col=='F' else SOL0,TOT,bold=True)
section(P,20,'2. Contribución por canal (la usa la hoja Mensual)',8)
header(P,21,['Canal','Unidades','Contribución — opción B','Contribución — opción C','Ingreso con IGV','Contribución por unidad — B','Contribución por unidad — C','Ingreso con IGV por unidad'])
for i in range(4):
    rr=22+i; cell(P,f'A{rr}',CH[i])
    cell(P,f'B{rr}',f'=SUMIF($A$5:$A$16,A{rr},$F$5:$F$16)',BLACK,NUM)
    cell(P,f'C{rr}',f'=SUMIF($A$5:$A$16,A{rr},$P$5:$P$16)',BLACK,SOL0)
    cell(P,f'D{rr}',f'=SUMIF($A$5:$A$16,A{rr},$Q$5:$Q$16)',BLACK,SOL0)
    cell(P,f'E{rr}',f'=SUMIF($A$5:$A$16,A{rr},$I$5:$I$16)',BLACK,SOL0)
    cell(P,f'F{rr}',f'=IF(B{rr}=0,0,C{rr}/B{rr})',BLACK,SOL)
    cell(P,f'G{rr}',f'=IF(B{rr}=0,0,D{rr}/B{rr})',BLACK,SOL)
    cell(P,f'H{rr}',f'=IF(B{rr}=0,0,E{rr}/B{rr})',BLACK,SOL)
cell(P,'A26','Total',bold=True)
for col in 'BCDE': cell(P,f'{col}26',f'=SUM({col}22:{col}25)',BLACK,NUM if col=='B' else SOL0,TOT,bold=True)
for col,(a,b) in {'F':('C','B'),'G':('D','B'),'H':('E','B')}.items(): cell(P,f'{col}26',f'=IF({b}26=0,0,{a}26/{b}26)',BLACK,SOL,TOT,bold=True)
section(P,28,'3. Resumen por presentación',8)
header(P,29,['Presentación','Unidades','Envases vendidos','Ingreso con IGV','Contribución — opción B','Contribución — opción C','% de las unidades',''])
for i,(name,*_) in enumerate(PRES):
    rr=30+i; cell(P,f'A{rr}',name)
    cell(P,f'B{rr}',f'=SUMIF($B$5:$B$16,A{rr},$F$5:$F$16)',BLACK,NUM)
    cell(P,f'C{rr}',f'=SUMIF($B$5:$B$16,A{rr},$G$5:$G$16)',BLACK,NUM)
    cell(P,f'D{rr}',f'=SUMIF($B$5:$B$16,A{rr},$I$5:$I$16)',BLACK,SOL0)
    cell(P,f'E{rr}',f'=SUMIF($B$5:$B$16,A{rr},$P$5:$P$16)',BLACK,SOL0)
    cell(P,f'F{rr}',f'=SUMIF($B$5:$B$16,A{rr},$Q$5:$Q$16)',BLACK,SOL0)
    cell(P,f'G{rr}',f'=IF($F$17=0,0,B{rr}/$F$17)',BLACK,PCT)
section(P,34,'4. Unidades por sabor en el año (para compras de insumos)',8)
header(P,35,['Sabor','% de las unidades','Unidades en el año','','','','',''])
for i in range(3):
    rr=36+i; cell(P,f'A{rr}',f'=Supuestos!A{62+i}',GREEN); cell(P,f'B{rr}',f'=Supuestos!B{62+i}',GREEN,PCT); cell(P,f'C{rr}',f'=$F$17*B{rr}',BLACK,NUM)
P.column_dimensions['A'].width=36; P.column_dimensions['B'].width=18
for j in range(3,20): P.column_dimensions[L(j)].width=15
P.row_dimensions[4].height=58; P.row_dimensions[21].height=42; P.row_dimensions[29].height=30
P.freeze_panes='C5'

# ---------------- Resumen ----------------
R=wb.create_sheet('Resumen',0)
cell(R,'A1','AndiBite — Resumen del costeo por presentación (año 1, escenario base)',TITLE)
cell(R,'A2','Todo se calcula desde las hojas Supuestos, Costeo, Proyeccion y Mensual. Cambie las celdas azules de Supuestos o Mensual.')
header(R,4,['Presentación','Costo de producción por envase','Costo por unidad','Precio en venta directa (con IGV)','Margen bruto % en venta directa'])
for i,(name,col) in enumerate([('Unidad individual','B'),('Pack de 6 — opción B (con bolsitas)','C'),('Pack de 6 — opción C (sueltos)','D'),('Pack de 12','E')]):
    rr=5+i; cell(R,f'A{rr}',name)
    cell(R,f'B{rr}',f'=Costeo!{col}15',GREEN,SOL); cell(R,f'C{rr}',f'=Costeo!{col}16',GREEN,SOL)
    cell(R,f'D{rr}',f'=Costeo!{col}19',GREEN,SOL); cell(R,f'E{rr}',f'=Costeo!{col}22',GREEN,PCT)
header(R,11,['Año 1','Opción B (bolsitas)','Opción C (sueltos)','',''])
items=[('Unidades vendidas','=Proyeccion!F17','=Proyeccion!F17',NUM),
       ('Ventas con IGV','=Proyeccion!I17','=Proyeccion!I17',SOL0),
       ('Ventas sin IGV','=Proyeccion!J17','=Proyeccion!J17',SOL0),
       ('Contribución (ventas sin IGV menos costos variables)','=Proyeccion!P17','=Proyeccion!Q17',SOL0),
       ('Costos fijos del año','=Supuestos!B58*12','=Supuestos!B58*12',SOL0),
       ('Resultado operativo del año (antes de intereses y renta anual)','=B15-B16','=C15-C16',SOL0),
       ('Margen operativo sobre ventas sin IGV','=IF(B14=0,0,B17/B14)','=IF(C14=0,0,C17/C14)',PCT),
       ('Contribución promedio por unidad','=IF(B12=0,0,B15/B12)','=IF(C12=0,0,C15/C12)',SOL),
       ('Punto de equilibrio (unidades al mes)','=IF(B19<=0,"No alcanza",Supuestos!$B$58/B19)','=IF(C19<=0,"No alcanza",Supuestos!$B$58/C19)',NUM),
       ('Punto de equilibrio en packs de 6 equivalentes al mes','=IF(ISNUMBER(B20),B20/6,"No alcanza")','=IF(ISNUMBER(C20),C20/6,"No alcanza")',NUM)]
for i,(t,fb,fc,fmt) in enumerate(items):
    rr=12+i; cell(R,f'A{rr}',t,bold=rr in (17,20)); cell(R,f'B{rr}',fb,GREEN if '!' in fb else BLACK,fmt,TOT if rr in (17,20) else None,bold=rr in (17,20)); cell(R,f'C{rr}',fc,GREEN if '!' in fc else BLACK,fmt,TOT if rr in (17,20) else None,bold=rr in (17,20))
cell(R,'A23','Notas',bold=True)
notes=['La maquila (S/0.50 por unidad) y el polvo de sangrecita no están cotizados: son el 40 % del costo de producción. Cambiarlos en Supuestos apenas lleguen las cotizaciones.',
       'El resultado no incluye sueldos de los socios, intereses del préstamo (S/1,721 en el año) ni el impuesto a la renta anual.',
       'La unidad individual se vende en ferias, quioscos y como caja degustación; no conviene por delivery porque el envío pesa más que el brownie.',
       'Referencia: el documento 05 usaba la opción A (etiqueta en cada brownie), con costo de S/1.91 por unidad y equilibrio de 3,500 unidades al mes.']
for i,t in enumerate(notes): cell(R,f'A{24+i}',f'{i+1}. {t}')
R.column_dimensions['A'].width=60
for col in 'BCDE': R.column_dimensions[col].width=22
R.row_dimensions[4].height=42

# ---------------- Leeme ----------------
G=wb.create_sheet('Leeme',0)
cell(G,'A1','Cómo usar este archivo',TITLE)
lines=['Qué es: el costeo de AndiBite con tres presentaciones (unidad individual, pack de 6 y pack de 12) y dos formas de armar el pack de 6 (opción B con bolsitas y opción C con brownies sueltos). La planta de maquila hornea y empaca; no hay planta propia.',
'',
'Colores:',
'  Texto azul = dato que pueden cambiar (precios, costos, mezcla, unidades por mes).',
'  Fondo amarillo = supuesto clave que todavía no está cotizado o validado.',
'  Texto negro = fórmula. Texto verde = fórmula que trae un dato de otra hoja.',
'',
'Hojas:',
'  Resumen: costo por presentación, resultado del año y punto de equilibrio con las opciones B y C.',
'  Supuestos: todos los datos de entrada con su fuente.',
'  Costeo: costo de producción de cada presentación, línea por línea.',
'  Proyeccion: el año 1 desglosado por canal y presentación.',
'  Mensual: unidades por canal mes a mes, producción a pedir a la planta y resultado mensual.',
'',
'Cómo se proyecta cuando un producto tiene varias presentaciones (método de mezcla de ventas):',
'  1. Se proyectan las unidades de brownie por canal (cuántos brownies se comen, no cuántas bolsas). Vienen del documento 05: hogares × consumo + colegios + ferias + naturistas.',
'  2. En cada canal se define la mezcla: qué % de esas unidades sale como unidad suelta, pack de 6 o pack de 12. Cada canal compra distinto: el quiosco vende sueltas, la mamá por WhatsApp compra packs.',
'  3. Unidades × mezcla ÷ tamaño del envase = envases vendidos de cada presentación.',
'  4. Envases × precio de esa presentación en ese canal = ingreso. Envases × costo de esa presentación = costo de producción.',
'  5. Se resta el costo del canal (delivery, pasarela, comisión) y se suman las contribuciones. Esa suma, menos los costos fijos, es el resultado.',
'  La ventaja: si cambia la mezcla (por ejemplo, más packs de 12), el ingreso y el margen se recalculan solos sin rehacer la proyección.',
'',
'Ejemplo para probar: en Supuestos, cambie la maquila (celda B7) de 0.50 a 0.90 y mire cómo sube el punto de equilibrio en Resumen.']
for i,t in enumerate(lines): cell(G,f'A{3+i}',t,bold=t.endswith(':'),wrap=True)
G.column_dimensions['A'].width=110
for ws in wb.worksheets:
    ws.page_setup.orientation='landscape'; ws.page_setup.fitToWidth=1; ws.page_setup.fitToHeight=0
    ws.sheet_properties.pageSetUpPr.fitToPage=True
wb.save(OUT); print('saved',OUT)
