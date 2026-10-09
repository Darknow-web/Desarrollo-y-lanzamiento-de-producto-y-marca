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
CH=['Stands y carritos (malls y supermercados)','Ferias y eventos','Recompra por WhatsApp e Instagram (delivery)','Colegios (quiosco)','Tiendas naturistas']
NC=len(CH)
section(S,30,'4. Costo variable de canal por unidad (sin IGV; el alquiler, el personal y las ferias van en la sección 7)',4); header(S,31,['Canal','Logística por unidad (S/)','¿Paga pasarela? (1 = sí, 0 = no)','Nota'])
for i,(lg,pas,nota) in enumerate([(0.27,1,'Degustación: 1 brownie regalado por cada 10 vendidos (S/0.17) + movilidad y bolsas (S/0.10) [HIPÓTESIS]'),
                                  (0.27,1,'Igual que el stand; el costo de la feria va aparte (sección 7)'),
                                  (0.80,1,'Delivery: S/9.50 por pedido de unas 10 unidades; gratis desde 2 packs (documento 05)'),
                                  (0.10,0,'[HIPÓTESIS] Ruta semanal al colegio; cobro por factura'),
                                  (0.15,0,'[HIPÓTESIS] Reposición quincenal; cobro por factura')]):
    r=32+i; cell(S,f'A{r}',CH[i]); cell(S,f'B{r}',lg,BLUE,'0.00'); cell(S,f'C{r}',pas,BLUE,'0'); cell(S,f'D{r}',nota)
section(S,38,'5. Precio que cobra AndiBite por presentación y canal (S/ con IGV, confirmados el 9-oct-2026)',5); header(S,39,['Canal','Unidad individual','Pack de 6','Pack de 12','Nota'])
for i,(u,p6,p12,nota) in enumerate([(5.00,26.00,48.00,'Precio de lista en físico: el stand cuesta alquiler y personal, por eso es algo mayor que por WhatsApp'),
                                    (5.00,26.00,48.00,'Mismo precio que en el stand'),
                                    (4.00,24.90,46.90,'S/4.15 por brownie en el pack de 6, a la par de Fika (S/4.00) y Mamalama (S/4.10) por 20 g. Unidad = caja degustación de 3 (S/12.00)'),
                                    (3.00,0,0,'El alumno paga S/4.00; el concesionario se queda 25 %'),
                                    (0,17.34,0,'AndiBite cobra S/17.34 a la tienda; con 40 % para la tienda, el anaquel queda en S/28.90')]):
    r=40+i; cell(S,f'A{r}',CH[i])
    for col,v in zip('BCD',(u,p6,p12)): cell(S,f'{col}{r}',v,BLUE,SOL)
    cell(S,f'E{r}',nota)
section(S,46,'6. Mezcla de presentaciones por canal (% de las unidades que vende cada canal)',5); header(S,47,['Canal','Unidad individual','Pack de 6','Pack de 12','Suma (debe ser 100 %)'])
for i,mix in enumerate([(0.60,0.35,0.05),(0.70,0.30,0.00),(0.10,0.60,0.30),(1.00,0.00,0.00),(0.00,1.00,0.00)]):
    r=48+i; cell(S,f'A{r}',CH[i])
    for col,v in zip('BCD',mix): cell(S,f'{col}{r}',v,BLUE,PCT,YEL)
    cell(S,f'E{r}',f'=SUM(B{r}:D{r})',BLACK,PCT)
cell(S,'A53','Stand: 6 de cada 10 brownies se venden sueltos para probar en el momento. WhatsApp: 60/30/10 del documento 05. Resto: [HIPÓTESIS] según cómo compra cada canal.',BLACK)
section(S,55,'7. Stands, carritos y ferias',4); header(S,56,['Concepto','Valor','Unidad','Fuente o nota'])
for r,lab,v,u,src,fill,fmt in [
 (57,'Alquiler del espacio por punto de venta al mes (fines de semana)',500,'S/ al mes','[POR CONFIRMAR] Gestión (15-sep-2023): módulo de 2 x 2 m de S/500 a US$2,500. Pedir cotización a cada mall o cadena (documento 08)',YEL,SOL),
 (58,'Pago a impulsadora por día de stand',90,'S/ por día','Computrabajo: S/50 a 90 por día de fin de semana (documento 08)',None,SOL),
 (59,'Puntos de venta que atienden los socios (sin pago)',1,'puntos','[HIPÓTESIS] Los 5 socios cubren un punto los fines de semana; los demás llevan impulsadora',YEL,'0'),
 (60,'Costo por feria pagada (2 a 3 días)',1825,'S/ por feria','La Feria de Barranco S/1,650 a 2,000; Bazar CCL S/2,500 + IGV (documento 08)',None,SOL),
 (61,'Brownies vendidos por feria pagada',700,'unidades','[HIPÓTESIS] Una mype vende unos S/3,000 por feria de PRODUCE (unos 625 brownies)',YEL,NUM),
 (62,'Brownies por evento sin costo (kermés, cumpleaños, feria gratuita)',150,'unidades','[HIPÓTESIS]',YEL,NUM),
 (63,'Lo vendido en físico que vuelve a comprarse por WhatsApp el mes siguiente',0.35,'% de las unidades','[HIPÓTESIS] Recompra con recordatorio por WhatsApp; sin suscripción',YEL,PCT),
 (64,'Pedidos por WhatsApp del primer mes (lista de espera)',150,'unidades','[HIPÓTESIS]',None,NUM)]:
    cell(S,f'A{r}',lab); cell(S,f'B{r}',v,BLUE,fmt,fill); cell(S,f'C{r}',u); cell(S,f'D{r}',src)
section(S,66,'8. Costos fijos mensuales (S/ sin IGV)',4); header(S,67,['Concepto','S/ al mes','','Fuente o nota'])
for i,(lab,v,src) in enumerate([('Administración: contador, software, web, teléfono, movilidad, banco',700,'Documento 05, sección 4.1'),
                                ('Asistente de pedidos y despacho',0,'Los socios atienden WhatsApp y el despacho; las impulsadoras cubren los stands adicionales (Supuestos B58). Versión anterior: S/800'),
                                ('Marketing: pauta, degustaciones y material de stand (promedio del año)',900,'[HIPÓTESIS] Menos pauta digital que en la versión anterior (S/1,291.67): la captación se hace en el stand'),
                                ('Depreciación de equipos y carritos (36 meses)','=Inversion!B37/36','Hoja Inversion')]):
    r=68+i; cell(S,f'A{r}',lab); cell(S,f'B{r}',v,GREEN if isinstance(v,str) else BLUE,SOL); cell(S,f'D{r}',src)
cell(S,'A72','Total costos fijos al mes',bold=True); cell(S,'B72','=SUM(B68:B71)',BLACK,SOL,TOT,bold=True)
section(S,74,'9. Mezcla de sabores (para planear compras y producción)',4); header(S,75,['Sabor','% de las unidades','','Nota'])
for i,(lab,v) in enumerate([('Chispa (choco clásico con chispas)',0.40),('Andi (choco, plátano, canela y cañihua)',0.35),('Lúcu (choco y lúcuma)',0.25)]):
    r=76+i; cell(S,f'A{r}',lab); cell(S,f'B{r}',v,BLUE,PCT); cell(S,f'D{r}','[HIPÓTESIS] Ajustar con el focus 2' if i==0 else '')
cell(S,'A79','Suma',bold=True); cell(S,'B79','=SUM(B76:B78)',BLACK,PCT)
for col,w in zip('ABCDE',(66,16,20,90,40)): S.column_dimensions[col].width=w

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
for top,title,prow in [(18,'Venta en stand o carrito (precio de lista en físico)',40),(24,'Recompra por WhatsApp e Instagram',42)]:
    cell(C,f'A{top}',title,bold=True)
    for i,t in enumerate(['Precio con IGV','Precio sin IGV','Margen bruto por presentación (precio sin IGV menos costo de producción)','Margen bruto %']): cell(C,f'A{top+1+i}',t)
    for col,sc in zip('BCDE','BCCD'):
        cell(C,f'{col}{top+1}',f'=Supuestos!{sc}{prow}',GREEN,SOL)
        cell(C,f'{col}{top+2}',f'={col}{top+1}/(1+Supuestos!$B$26)',BLACK,SOL)
        cell(C,f'{col}{top+3}',f'={col}{top+2}-{col}15',BLACK,SOL)
        cell(C,f'{col}{top+4}',f'=IF({col}{top+2}=0,0,{col}{top+3}/{col}{top+2})',BLACK,PCT)
cell(C,'A30','El margen bruto no incluye alquiler del stand, personal, delivery, pasarela, comisiones ni costos fijos: eso se calcula en las hojas Proyeccion y Mensual.')
C.column_dimensions['A'].width=62
for col in 'BCDE': C.column_dimensions[col].width=24
C.row_dimensions[4].height=42

# ---------------- Inversion ----------------
I=wb.create_sheet('Inversion')
cell(I,'A1','Inversión inicial: todo lo necesario para vender desde el primer día',TITLE)
cell(I,'A2','Los documentos y permisos se pagan aquí, una sola vez. La proyección (hoja Mensual) supone que ya están listos al empezar las ventas en noviembre de 2026.')
header(I,4,['Concepto','S/ (sin IGV)','Fuente o nota'])
INV=[('1. Documentos y permisos para vender',None,None,True),
 ('Constitución de AndiBite S.A.C. en un CDE de PRODUCE (notaría)',150,'Documento 05'),
 ('RUC, Régimen MYPE Tributario, REMYPE y libro de reclamaciones virtual',0,'SUNAT, PRODUCE e INDECOPI: sin costo'),
 ('Registro de marca en INDECOPI, clase 30 (tasa MYPE)',401.20,'Documento 03'),
 ('Revisión legal del contrato de maquila (la S.A.C. es titular del registro sanitario)',400,'Documento 05'),
 ('Análisis para el registro sanitario (3 sabores × S/600)',1800,'Documento 05'),
 ('Perfil nutricional y hierro (3 × S/375)',1125,'Documento 05'),
 ('Estudio de vida útil acelerado',1050,'Documento 05'),
 ('Diseño y validación de la etiqueta (rotulado y Ley 30021)',650,'Documento 05'),
 ('Registro sanitario DIGESA (tasa)',0,'TUPA 2026: sin costo (Comunicado 05-2026-DIGESA)'),
 ('Carnés de sanidad (5 socios)',75,'Andina: S/9 a 20 por persona'),
 ('Póliza de responsabilidad civil para stands (1 año)',600,'[HIPÓTESIS] Cotizar con una aseguradora; algunos malls la piden'),
 ('Subtotal documentos y permisos','=SUM(B6:B16)',None,'sub'),
 ('2. Desarrollo del producto',None,None,True),
 ('Pruebas caseras: insumos de 3 lotes',942.81,'Documento 02'),
 ('Endulzantes para la versión sin octógono',148,'Documento 05'),
 ('Análisis preliminar de azúcar y hierro (2 × S/375)',750,'Documento 05'),
 ('Prueba sensorial con niños',150,'Documento 05'),
 ('Desarrollo y lote piloto en la planta',1750,'[POR CONFIRMAR] Documento 05'),
 ('Subtotal desarrollo','=SUM(B19:B23)',None,'sub'),
 ('3. Marca y puntos de venta',None,None,True),
 ('Identidad de marca',800,'Documento 05'),
 ('Fotos de producto',300,'Documento 05'),
 ('Web y dominio',150,'Documento 05'),
 ('Subtotal marca','=SUM(B26:B28)',None,'sub'),
 ('4. Arranque de la operación',None,None,True),
 ('Empaque inicial (mínimos de compra)',3030,'Documento 05'),
 ('Stock inicial para noviembre y diciembre',4135.30,'Documento 05'),
 ('Marketing de lanzamiento (degustaciones, influencers, POP)',3204,'Documento 05'),
 ('Capital de trabajo (2 meses)',8000,'Documento 05'),
 ('Subtotal arranque','=SUM(B31:B34)',None,'sub'),
 ('5. Activos que se deprecian',None,None,True),
 ('Equipos mínimos y 2 carritos de exhibición con gráfica','=B38+B39',None,'sub'),
 ('Equipos mínimos (balanza, selladora, coolers, kit de feria, POS)',2338,'Documento 05'),
 ('2 carritos de exhibición con vitrina y gráfica (2 × S/2,500)',5000,'[POR CONFIRMAR] Melamina a medida S/1,150 a 1,350 por metro lineal (documento 08)'),
]
for i,row in enumerate(INV):
    r=5+i; t,v,src=row[0],row[1],row[2]; kind=row[3] if len(row)>3 else None
    if kind is True: section(I,r,t,3); continue
    cell(I,f'A{r}',t,bold=kind=='sub'); 
    if v is not None: cell(I,f'B{r}',v,BLACK if isinstance(v,str) else BLUE,SOL,TOT if kind=='sub' else (YEL if src and ('POR CONFIRMAR' in src or 'HIPÓTESIS' in src) else None),bold=kind=='sub')
    if src: cell(I,f'C{r}',src)
cell(I,'A41','Imprevistos (10 % de todo lo anterior)'); cell(I,'B41','=0.1*(B17+B24+B29+B35+B37)',BLACK,SOL)
cell(I,'A42','INVERSIÓN TOTAL',bold=True); cell(I,'B42','=B17+B24+B29+B35+B37+B41',BLACK,SOL,TOT,bold=True)
section(I,44,'Financiamiento',3); header(I,45,['Fuente','S/','Nota'])
cell(I,'A46','Aporte de los 5 socios'); cell(I,'B46',25000,BLUE,SOL); cell(I,'C46','S/5,000 cada uno (documento 05)')
cell(I,'A47','Préstamo'); cell(I,'B47','=MAX(0,CEILING(B42-B46,500))',BLACK,SOL); cell(I,'C47','Lo que falta, redondeado a S/500')
cell(I,'A48','Tasa efectiva anual del préstamo'); cell(I,'B48',0.35,BLUE,PCT,YEL); cell(I,'C48','[POR CONFIRMAR] Comparar tasas de microempresa en la SBS')
cell(I,'A49','Número de cuotas mensuales'); cell(I,'B49',24,BLUE,'0'); cell(I,'C49','24 cuotas: con 12, la cuota (unos S/1,560) se come la caja de los primeros meses')
cell(I,'A50','Cuota mensual'); cell(I,'B50','=PMT((1+B48)^(1/12)-1,B49,-B47)',BLACK,SOL)
cell(I,'A51','Intereses totales del préstamo'); cell(I,'B51','=B50*B49-B47',BLACK,SOL)
cell(I,'A52','Caja que sobra después de financiar la inversión'); cell(I,'B52','=B46+B47-B42',BLACK,SOL)
I.column_dimensions['A'].width=72; I.column_dimensions['B'].width=16; I.column_dimensions['C'].width=80

# ---------------- Mensual ----------------
M=wb.create_sheet('Mensual')
MONTHS=['Nov-26','Dic-26','Ene-27','Feb-27','Mar-27','Abr-27','May-27','Jun-27','Jul-27','Ago-27','Set-27','Oct-27']
ACT=[('Puntos de venta con stand o carrito (fines de semana)',[1,2,1,2,2,2,2,2,2,3,3,3],'0'),
     ('Días de atención por punto en el mes',[9,12,9,9,9,9,9,9,10,9,9,9],'0'),
     ('Brownies vendidos por día en cada punto',[50,90,50,80,100,80,85,80,85,85,90,90],'0'),
     ('Ferias pagadas en el mes (Navidad y campaña escolar)',[0,2,0,1,0,0,0,0,0,0,0,0],'0'),
     ('Eventos sin costo (kermeses, cumpleaños, ferias gratuitas)',[3,2,1,2,4,4,5,4,3,4,4,4],'0'),
     ('Unidades a colegios (quiosco; año escolar de marzo a diciembre)',[0,0,0,0,300,600,765,900,600,1200,1200,1500],NUM),
     ('Unidades a tiendas naturistas',[120,180,180,240,300,300,360,360,360,420,420,480],NUM)]
cell(M,'A1','Proyección mensual del año 1 (noviembre 2026 a octubre 2027), escenario base',TITLE)
cell(M,'A2','Supone que los documentos y permisos ya están listos (su costo está en la hoja Inversion). La venta física es el canal principal; WhatsApp queda para la recompra. Cambie los datos azules para probar otro escenario.')
header(M,4,['Actividad comercial del mes (datos)']+MONTHS+['Total año'])
for i,(t,vals,fmt) in enumerate(ACT):
    r=5+i; cell(M,f'A{r}',t)
    for j,v in enumerate(vals): cell(M,f'{L(2+j)}{r}',v,BLUE,fmt)
    cell(M,f'N{r}',f'=SUM(B{r}:M{r})',BLACK,NUM)
header(M,13,['Unidades vendidas por canal']+MONTHS+['Total año'])
for i in range(NC): cell(M,f'A{14+i}',CH[i])
for j in range(12):
    c=L(2+j); p=L(1+j)
    cell(M,f'{c}14',f'={c}5*{c}6*{c}7',BLACK,NUM)
    cell(M,f'{c}15',f'={c}8*Supuestos!$B$61+{c}9*Supuestos!$B$62',BLACK,NUM)
    cell(M,f'{c}16','=Supuestos!$B$64' if j==0 else f'=ROUND(Supuestos!$B$63*({p}14+{p}15),0)',GREEN,NUM)
    cell(M,f'{c}17',f'={c}10',BLACK,NUM)
    cell(M,f'{c}18',f'={c}11',BLACK,NUM)
for r in range(14,19): cell(M,f'N{r}',f'=SUM(B{r}:M{r})',BLACK,NUM)
cell(M,'A19','Total unidades',bold=True)
for j in range(13): c=L(2+j); cell(M,f'{c}19',f'=SUM({c}14:{c}18)',BLACK,NUM,TOT,bold=True)
section(M,21,'Producción que hay que pedir a la planta',14)
for k,t in enumerate(['Unidades individuales sueltas','Unidades que van en packs de 6','Unidades que van en packs de 12','Packs de 6 a armar','Packs de 12 a armar']): cell(M,f'A{22+k}',t)
for j in range(12):
    c=L(2+j)
    cell(M,f'{c}22',f'=SUMPRODUCT({c}$14:{c}$18,Supuestos!$B$48:$B$52)',GREEN,NUM)
    cell(M,f'{c}23',f'=SUMPRODUCT({c}$14:{c}$18,Supuestos!$C$48:$C$52)',GREEN,NUM)
    cell(M,f'{c}24',f'=SUMPRODUCT({c}$14:{c}$18,Supuestos!$D$48:$D$52)',GREEN,NUM)
    cell(M,f'{c}25',f'={c}23/Costeo!$C$5',BLACK,NUM)
    cell(M,f'{c}26',f'={c}24/Costeo!$E$5',BLACK,NUM)
for r in range(22,27): cell(M,f'N{r}',f'=SUM(B{r}:M{r})',BLACK,NUM)
section(M,28,'Resultado mensual (S/ sin IGV, salvo la primera fila)',14)
labs={29:'Ventas con IGV',30:'Ventas sin IGV',31:'Contribución con pack de 6 opción B',32:'Contribución con pack de 6 opción C',33:'Alquiler de espacios para stands y carritos',34:'Impulsadoras (puntos que no atienden los socios)',35:'Ferias pagadas',36:'Costos fijos del mes',37:'Resultado operativo — opción B',38:'Resultado operativo — opción C',39:'Resultado acumulado — opción B',40:'Resultado acumulado — opción C'}
for r,t in labs.items(): cell(M,f'A{r}',t,bold=r in (37,38))
for j in range(12):
    c=L(2+j); p=L(1+j)
    cell(M,f'{c}29',f'=SUMPRODUCT({c}$14:{c}$18,Proyeccion!$H$25:$H$29)',GREEN,SOL0)
    cell(M,f'{c}30',f'={c}29/(1+Supuestos!$B$26)',BLACK,SOL0)
    cell(M,f'{c}31',f'=SUMPRODUCT({c}$14:{c}$18,Proyeccion!$F$25:$F$29)',GREEN,SOL0)
    cell(M,f'{c}32',f'=SUMPRODUCT({c}$14:{c}$18,Proyeccion!$G$25:$G$29)',GREEN,SOL0)
    cell(M,f'{c}33',f'={c}5*Supuestos!$B$57',GREEN,SOL0)
    cell(M,f'{c}34',f'=MAX(0,{c}5-Supuestos!$B$59)*{c}6*Supuestos!$B$58',GREEN,SOL0)
    cell(M,f'{c}35',f'={c}8*Supuestos!$B$60',GREEN,SOL0)
    cell(M,f'{c}36','=Supuestos!$B$72',GREEN,SOL0)
    cell(M,f'{c}37',f'={c}31-{c}33-{c}34-{c}35-{c}36',BLACK,SOL0,TOT,bold=True)
    cell(M,f'{c}38',f'={c}32-{c}33-{c}34-{c}35-{c}36',BLACK,SOL0,TOT,bold=True)
    cell(M,f'{c}39',f'={c}37' if j==0 else f'={p}39+{c}37',BLACK,SOL0)
    cell(M,f'{c}40',f'={c}38' if j==0 else f'={p}40+{c}38',BLACK,SOL0)
cell(M,'A41','Cuota del préstamo'); cell(M,'A43','Caja al cierre del mes (capital de trabajo y lo que sobra de la inversión, más el resultado, más la depreciación, menos la cuota)',bold=True)
cell(M,'A42','Depreciación (no sale de caja)')
for j in range(12):
    c=L(2+j); p=L(1+j)
    cell(M,f'{c}41',f'=IF({j+1}<=Inversion!$B$49,Inversion!$B$50,0)',GREEN,SOL0)
    cell(M,f'{c}42','=Supuestos!$B$71',GREEN,SOL0)
    prev='Inversion!$B$34+Inversion!$B$52' if j==0 else f'{p}43'
    cell(M,f'{c}43',f'={prev}+{c}37+{c}42-{c}41',BLACK,SOL0,TOT,bold=True)
cell(M,'N41','=SUM(B41:M41)',BLACK,SOL0); cell(M,'N42','=SUM(B42:M42)',BLACK,SOL0)
for r in range(29,39): cell(M,f'N{r}',f'=SUM(B{r}:M{r})',BLACK,SOL0,TOT if r in (37,38) else None,bold=r in (37,38))
cell(M,'A45','La contribución multiplica las unidades de cada canal por la contribución por unidad de ese canal (hoja Proyeccion, tabla 2). Después se restan el alquiler de stands, las impulsadoras, las ferias pagadas y los costos fijos. No incluye intereses del préstamo ni el impuesto a la renta anual.')
M.column_dimensions['A'].width=58
for j in range(13): M.column_dimensions[L(2+j)].width=11
M.column_dimensions['N'].width=13
M.row_dimensions[4].height=30; M.row_dimensions[13].height=30

# ---------------- Proyeccion ----------------
P=wb.create_sheet('Proyeccion',2)
cell(P,'A1','Proyección anual por canal y presentación (año 1, noviembre 2026 a octubre 2027)',TITLE)
cell(P,'A2','Paso a paso: unidades del canal (hoja Mensual) × mezcla de presentaciones (Supuestos) = unidades por presentación; ÷ tamaño = envases vendidos; × precio = ingreso; menos costo de producción y costo variable de canal = contribución.')
header(P,4,['Canal','Presentación','Unidades por envase','Unidades del canal en el año','% de la mezcla','Unidades vendidas','Envases vendidos','Precio cobrado con IGV por envase','Ingreso con IGV','Ingreso sin IGV','Costo de producción por envase — opción B','Costo de producción por envase — opción C','Costo variable de canal por envase','Contribución por envase — opción B','Contribución por envase — opción C','Contribución total — opción B','Contribución total — opción C','Margen de contribución % — B','Margen de contribución % — C'])
PRES=[('Unidad individual','B','B','B','B'),('Pack de 6','C','C','D','C'),('Pack de 12','D','E','E','E')]
r=5; LAST=4+NC*3
for i in range(NC):
    for name,scol,cb,cc,csz in PRES:
        cell(P,f'A{r}',CH[i]); cell(P,f'B{r}',name)
        cell(P,f'C{r}',f'=Costeo!{csz}5',GREEN,'0')
        cell(P,f'D{r}',f'=Mensual!$N${14+i}',GREEN,NUM)
        cell(P,f'E{r}',f'=Supuestos!{scol}{48+i}',GREEN,PCT)
        cell(P,f'F{r}',f'=D{r}*E{r}',BLACK,NUM)
        cell(P,f'G{r}',f'=IF(C{r}=0,0,F{r}/C{r})',BLACK,NUM)
        cell(P,f'H{r}',f'=Supuestos!{scol}{40+i}',GREEN,SOL)
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
cell(P,'A20','Total',bold=True)
for col in 'FIJPQ': cell(P,f'{col}20',f'=SUM({col}5:{col}{LAST})',BLACK,NUM if col=='F' else SOL0,TOT,bold=True)
section(P,23,'2. Contribución por canal (la usa la hoja Mensual)',8)
header(P,24,['Canal','Unidades','Contribución — opción B','Contribución — opción C','Ingreso con IGV','Contribución por unidad — B','Contribución por unidad — C','Ingreso con IGV por unidad'])
for i in range(NC):
    rr=25+i; cell(P,f'A{rr}',CH[i])
    cell(P,f'B{rr}',f'=SUMIF($A$5:$A${LAST},A{rr},$F$5:$F${LAST})',BLACK,NUM)
    cell(P,f'C{rr}',f'=SUMIF($A$5:$A${LAST},A{rr},$P$5:$P${LAST})',BLACK,SOL0)
    cell(P,f'D{rr}',f'=SUMIF($A$5:$A${LAST},A{rr},$Q$5:$Q${LAST})',BLACK,SOL0)
    cell(P,f'E{rr}',f'=SUMIF($A$5:$A${LAST},A{rr},$I$5:$I${LAST})',BLACK,SOL0)
    cell(P,f'F{rr}',f'=IF(B{rr}=0,0,C{rr}/B{rr})',BLACK,SOL)
    cell(P,f'G{rr}',f'=IF(B{rr}=0,0,D{rr}/B{rr})',BLACK,SOL)
    cell(P,f'H{rr}',f'=IF(B{rr}=0,0,E{rr}/B{rr})',BLACK,SOL)
cell(P,'A30','Total',bold=True)
for col in 'BCDE': cell(P,f'{col}30',f'=SUM({col}25:{col}29)',BLACK,NUM if col=='B' else SOL0,TOT,bold=True)
for col,(a,b) in {'F':('C','B'),'G':('D','B'),'H':('E','B')}.items(): cell(P,f'{col}30',f'=IF({b}30=0,0,{a}30/{b}30)',BLACK,SOL,TOT,bold=True)
section(P,32,'3. Resumen por presentación',8)
header(P,33,['Presentación','Unidades','Envases vendidos','Ingreso con IGV','Contribución — opción B','Contribución — opción C','% de las unidades',''])
for i,(name,*_) in enumerate(PRES):
    rr=34+i; cell(P,f'A{rr}',name)
    cell(P,f'B{rr}',f'=SUMIF($B$5:$B${LAST},A{rr},$F$5:$F${LAST})',BLACK,NUM)
    cell(P,f'C{rr}',f'=SUMIF($B$5:$B${LAST},A{rr},$G$5:$G${LAST})',BLACK,NUM)
    cell(P,f'D{rr}',f'=SUMIF($B$5:$B${LAST},A{rr},$I$5:$I${LAST})',BLACK,SOL0)
    cell(P,f'E{rr}',f'=SUMIF($B$5:$B${LAST},A{rr},$P$5:$P${LAST})',BLACK,SOL0)
    cell(P,f'F{rr}',f'=SUMIF($B$5:$B${LAST},A{rr},$Q$5:$Q${LAST})',BLACK,SOL0)
    cell(P,f'G{rr}',f'=IF($F$20=0,0,B{rr}/$F$20)',BLACK,PCT)
section(P,38,'4. Unidades por sabor en el año (para compras de insumos)',8)
header(P,39,['Sabor','% de las unidades','Unidades en el año','','','','',''])
for i in range(3):
    rr=40+i; cell(P,f'A{rr}',f'=Supuestos!A{76+i}',GREEN); cell(P,f'B{rr}',f'=Supuestos!B{76+i}',GREEN,PCT); cell(P,f'C{rr}',f'=$F$20*B{rr}',BLACK,NUM)
P.column_dimensions['A'].width=40; P.column_dimensions['B'].width=18
for j in range(3,20): P.column_dimensions[L(j)].width=15
P.row_dimensions[4].height=58; P.row_dimensions[24].height=42; P.row_dimensions[33].height=30
P.freeze_panes='C5'

# ---------------- Resumen ----------------
R=wb.create_sheet('Resumen',0)
cell(R,'A1','AndiBite — Resumen del año 1 (noviembre 2026 a octubre 2027), escenario base con venta física',TITLE)
cell(R,'A2','Todo se calcula desde las hojas Supuestos, Inversion, Costeo, Proyeccion y Mensual. Cambie las celdas azules de Supuestos o Mensual.')
header(R,4,['Presentación','Costo de producción por envase','Costo por unidad','Precio en stand (con IGV)','Margen bruto % en stand','Precio por WhatsApp (con IGV)','Margen bruto % por WhatsApp'])
for i,(name,col) in enumerate([('Unidad individual','B'),('Pack de 6 — opción B (con bolsitas)','C'),('Pack de 6 — opción C (sueltos)','D'),('Pack de 12','E')]):
    rr=5+i; cell(R,f'A{rr}',name)
    cell(R,f'B{rr}',f'=Costeo!{col}15',GREEN,SOL); cell(R,f'C{rr}',f'=Costeo!{col}16',GREEN,SOL)
    cell(R,f'D{rr}',f'=Costeo!{col}19',GREEN,SOL); cell(R,f'E{rr}',f'=Costeo!{col}22',GREEN,PCT)
    cell(R,f'F{rr}',f'=Costeo!{col}25',GREEN,SOL); cell(R,f'G{rr}',f'=Costeo!{col}28',GREEN,PCT)
header(R,11,['Año 1','Opción B (bolsitas)','Opción C (sueltos)','',''])
items=[('Unidades vendidas','=Proyeccion!F20','=Proyeccion!F20',NUM),
       ('Ventas con IGV','=Proyeccion!I20','=Proyeccion!I20',SOL0),
       ('Ventas sin IGV','=Proyeccion!J20','=Proyeccion!J20',SOL0),
       ('Contribución (ventas sin IGV menos producción y costos variables de canal)','=Proyeccion!P20','=Proyeccion!Q20',SOL0),
       ('Stands, carritos y ferias del año (alquiler, impulsadoras y ferias pagadas)','=Mensual!N33+Mensual!N34+Mensual!N35','=Mensual!N33+Mensual!N34+Mensual!N35',SOL0),
       ('Costos fijos del año','=Supuestos!B72*12','=Supuestos!B72*12',SOL0),
       ('Resultado operativo del año (antes de intereses y renta anual)','=B15-B16-B17','=C15-C16-C17',SOL0),
       ('Margen operativo sobre ventas sin IGV','=IF(B14=0,0,B18/B14)','=IF(C14=0,0,C18/C14)',PCT),
       ('Contribución por unidad después de stands y ferias','=IF(B12=0,0,(B15-B16)/B12)','=IF(C12=0,0,(C15-C16)/C12)',SOL),
       ('Punto de equilibrio (unidades al mes)','=IF(B20<=0,"No alcanza",Supuestos!$B$72/B20)','=IF(C20<=0,"No alcanza",Supuestos!$B$72/C20)',NUM),
       ('Punto de equilibrio en packs de 6 equivalentes al mes','=IF(ISNUMBER(B21),B21/6,"No alcanza")','=IF(ISNUMBER(C21),C21/6,"No alcanza")',NUM),
       ('Inversión inicial (incluye todos los documentos y permisos)','=Inversion!B42','=Inversion!B42',SOL0),
       ('Resultado del año 1 menos la inversión (negativo = falta recuperar)','=B18-B23','=C18-C23',SOL0),
       ('Caja más baja del año, con la cuota del préstamo (opción B)','=MIN(Mensual!B43:M43)','=MIN(Mensual!B43:M43)',SOL0)]
for i,(t,fb,fc,fmt) in enumerate(items):
    rr=12+i; bb=rr in (18,21); cell(R,f'A{rr}',t,bold=bb); cell(R,f'B{rr}',fb,GREEN if '!' in fb else BLACK,fmt,TOT if bb else None,bold=bb); cell(R,f'C{rr}',fc,GREEN if '!' in fc else BLACK,fmt,TOT if bb else None,bold=bb)
cell(R,'A27','Notas',bold=True)
notes=['La proyección supone que los documentos (S.A.C., marca, registro sanitario, análisis, etiqueta, carnés y póliza) ya están listos en noviembre de 2026. Su costo está en la hoja Inversion.',
       'La venta física (stands, carritos y ferias) es el canal principal; WhatsApp queda para la recompra, sin suscripción.',
       'La maquila (S/0.50 por unidad), el polvo de sangrecita y el alquiler de los stands (S/500 por punto al mes) no están cotizados. Cambiarlos en Supuestos apenas lleguen las cotizaciones.',
       'El resultado no incluye sueldos de los socios, intereses del préstamo (hoja Inversion) ni el impuesto a la renta anual.']
for i,t in enumerate(notes): cell(R,f'A{28+i}',f'{i+1}. {t}')
R.column_dimensions['A'].width=70
for col in 'BCDEFG': R.column_dimensions[col].width=20
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
'  Inversion: la inversión inicial, con todos los documentos y permisos para vender, y su financiamiento.',
'  Costeo: costo de producción de cada presentación, línea por línea.',
'  Proyeccion: el año 1 desglosado por canal y presentación.',
'  Mensual: actividad comercial de cada mes (stands, ferias, colegios y naturistas), unidades por canal, producción a pedir a la planta y resultado mensual.',
'',
'Cómo se proyecta cuando un producto tiene varias presentaciones (método de mezcla de ventas):',
'  1. Se proyectan las unidades de brownie por canal (cuántos brownies se comen, no cuántas bolsas). En el stand: puntos × días × brownies por día; en ferias: ferias × brownies por feria; WhatsApp: lo que vuelve a comprarse de lo vendido en físico.',
'  2. En cada canal se define la mezcla: qué % de esas unidades sale como unidad suelta, pack de 6 o pack de 12. Cada canal compra distinto: en el stand 6 de cada 10 se venden sueltos para probar; por WhatsApp se compran packs.',
'  3. Unidades × mezcla ÷ tamaño del envase = envases vendidos de cada presentación.',
'  4. Envases × precio de esa presentación en ese canal = ingreso. Envases × costo de esa presentación = costo de producción.',
'  5. Se resta el costo variable del canal (delivery, pasarela, degustación) y se suman las contribuciones. A esa suma se le restan el alquiler de los stands, las impulsadoras, las ferias pagadas y los costos fijos: eso es el resultado.',
'  La ventaja: si cambia la mezcla (por ejemplo, más packs de 12), el ingreso y el margen se recalculan solos sin rehacer la proyección.',
'',
'Ejemplos para probar: en Mensual, cambie los brownies por día en cada punto (fila 7); en Supuestos, cambie el alquiler por punto (B57) o la maquila (B7) y mire el resultado en Resumen.']
for i,t in enumerate(lines): cell(G,f'A{3+i}',t,bold=t.endswith(':'),wrap=True)
G.column_dimensions['A'].width=110
for ws in wb.worksheets:
    ws.page_setup.orientation='landscape'; ws.page_setup.fitToWidth=1; ws.page_setup.fitToHeight=0
    ws.sheet_properties.pageSetUpPr.fitToPage=True
wb.save(OUT); print('saved',OUT)
