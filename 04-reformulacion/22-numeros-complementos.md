# 22. Números para la presentación final: demanda, ventas mes a mes, equilibrio, KPI, CAC y LTV, y trámites

Para: Grupo 2 · AndiBite · 24 de noviembre de 2026 · Complemento del plan final (documento 18) y del modelo (`FINAL/modelo/modelo.json`, clave «crecimiento»).

No cambia ninguna cifra oficial. Todo lo nuevo sale de una fórmula escrita al lado. Lo que no tiene fuente va como [SUPUESTO]. Soles con IGV, salvo que diga lo contrario.

**Cifras oficiales que se respetan:** 44,383 brownies y S/170,715 en 2027; 96,036 y S/362,328 en 2028; equilibrio de 6,720 y 8,050 brownies al mes; inversión inicial S/25,432; imprevistos S/2,312.

## 1. Demanda por canal, 2027 a 2031

**Cómo se arma.** 2027 y 2028 usan la tabla de canales del documento 18 (sección 4). Esa tabla ya suma los totales del modelo (35,285 + 4,950 + 1,628 + 1,800 + 720 = 44,383; 83,126 + 6,600 + 3,310 + 3,000 = 96,036), así que el factor de escala es 1.000 y no se mueve ningún dato. 2029 a 2031 repiten la mezcla de 2028 y toman los totales del modelo. Fórmula: brownies del canal = total del año del modelo × participación del canal en 2028. Soles del canal = brownies del canal × venta media por brownie del modelo (S/3.846 en 2027; S/3.773 desde 2028, con la bolsa de 6 a S/22 y la unidad a S/5).

### 1.1 Brownies por canal

| Canal | 2027 | 2028 | 2029 | 2030 | 2031 |
|---|---:|---:|---:|---:|---:|
| Pedido del salón (colegios) | 35,285 | 83,126 | 103,908 | 124,689 | 145,471 |
| Kermeses y reuniones de padres | 4,950 | 6,600 | 8,250 | 9,900 | 11,550 |
| Recompra por WhatsApp (fuera del colegio y verano) | 1,628 | 3,310 | 4,137 | 4,965 | 5,792 |
| Stand de fin de semana (Campo de Marte) | 1,800 | 0 | 0 | 0 | 0 |
| Pop-up Real Plaza Salaverry | 720 | 0 | 0 | 0 | 0 |
| Módulo de vuelta al colegio (Salaverry) | 0 | 3,000 | 3,750 | 4,500 | 5,250 |
| **Total (igual al modelo)** | **44,383** | **96,036** | **120,045** | **144,054** | **168,063** |
| Participación del pedido del salón | 79.5 % | 86.6 % | 86.6 % | 86.6 % | 86.6 % |

### 1.2 Ventas con IGV por canal (S/)

| Canal | 2027 | 2028 | 2029 | 2030 | 2031 |
|---|---:|---:|---:|---:|---:|
| Pedido del salón (colegios) | 135,720 | 313,621 | 392,028 | 470,431 | 548,837 |
| Kermeses y reuniones de padres | 19,040 | 24,901 | 31,126 | 37,351 | 43,576 |
| Recompra por WhatsApp (fuera del colegio y verano) | 6,262 | 12,488 | 15,608 | 18,732 | 21,852 |
| Stand de fin de semana (Campo de Marte) | 6,924 | 0 | 0 | 0 | 0 |
| Pop-up Real Plaza Salaverry | 2,769 | 0 | 0 | 0 | 0 |
| Módulo de vuelta al colegio (Salaverry) | 0 | 11,318 | 14,148 | 16,978 | 19,808 |
| **Total (igual al modelo)** | **170,715** | **362,328** | **452,910** | **543,492** | **634,073** |

Notas para la lámina:

- 2029 a 2031 repiten la mezcla de 2028, que incluye el módulo temporal y las kermeses. Es una regla de cálculo, no una promesa de que el módulo se repita cada año (la decisión se toma el 15 de marzo de 2028, sección 9 del documento 18).
- El modelo reparte lo de 2028 un poco distinto por dentro (86,453 al pedido del salón y 9,583 a los otros canales) y suma lo mismo. Aquí manda la tabla de canales del documento 18.
- En kermeses y stand la venta real por brownie es distinta (se vende suelto a S/5 y se regalan muestras). Se usa la venta media del modelo para que los soles sumen exacto.

## 2. Ventas mes a mes: 2027 y 2028

**Cómo se arma.** El total de cada mes es el del modelo (brownies y ventas con IGV), sin cambios. Los otros canales se ubican en su calendario real y el pedido del salón es lo que falta para llegar al total del mes del modelo (pedido del salón = total del mes − kermeses − recompra − stand − pop-up − módulo). Así los canales suman, a la vez, el total de cada mes y el total anual de la tabla 1.

Calendario usado:

- **Pop-up:** 720 brownies del 6 al 14 de marzo de 2027 (9 días, 80 por día). Todo en marzo.
- **Stand de fin de semana:** 1,800 brownies en los sábados y domingos del 6 de marzo al 30 de junio de 2027. Son 34 días (8 en marzo, 8 en abril, 10 en mayo y 8 en junio), unos 53 por día. Se reparte según los días de cada mes (1,800 × días del mes ÷ 34).
- **Kermeses y reuniones de padres:** solo en meses de clases: marzo a junio y agosto a noviembre (8 meses), en partes iguales (4,950 ÷ 8 en 2027; 6,600 ÷ 8 en 2028). Julio, diciembre, enero y febrero no llevan [SUPUESTO: julio y diciembre son vacaciones o medio mes, como en el modelo].
- **Recompra por WhatsApp:** desde abril de 2027. Cada mes pesa lo que vendió el mes anterior en el modelo (las familias que ya compraron vuelven). Fórmula: recompra del mes = total anual × ventas del mes anterior ÷ suma de esas ventas. En 2028 enero (605) y febrero (400) salen directo del modelo, que ya los trae como verano sin colegios; el resto de marzo a diciembre sigue la misma fórmula (2,305 brownies).
- **Módulo de vuelta al colegio:** del 15 de febrero al 15 de marzo de 2028, 100 por día: 15 días de febrero (2028 es bisiesto) y 15 de marzo = 1,500 + 1,500.

### 2.1 Año 2027: brownies por canal

| Mes | Pedido del salón | Kermeses | Recompra WhatsApp | Stand fin de semana | Pop-up Salaverry | **Total** |
|---|---:|---:|---:|---:|---:|---:|
| Ene-27 | 0 | 0 | 0 | 0 | 0 | **0** |
| Feb-27 | 0 | 0 | 0 | 0 | 0 | **0** |
| Mar-27 | 971 | 619 | 0 | 424 | 720 | **2,734** |
| Abr-27 | 1,589 | 619 | 109 | 424 | 0 | **2,741** |
| May-27 | 2,748 | 619 | 109 | 529 | 0 | **4,005** |
| Jun-27 | 3,191 | 619 | 159 | 423 | 0 | **4,392** |
| Jul-27 | 2,988 | 0 | 174 | 0 | 0 | **3,162** |
| Ago-27 | 4,765 | 619 | 126 | 0 | 0 | **5,510** |
| Sep-27 | 4,988 | 619 | 219 | 0 | 0 | **5,826** |
| Oct-27 | 5,405 | 618 | 231 | 0 | 0 | **6,254** |
| Nov-27 | 5,472 | 618 | 249 | 0 | 0 | **6,339** |
| Dic-27 | 3,168 | 0 | 252 | 0 | 0 | **3,420** |
| **Año** | **35,285** | **4,950** | **1,628** | **1,800** | **720** | **44,383** |

### 2.2 Año 2027: ventas con IGV por canal (S/)

| Mes | Pedido del salón | Kermeses | Recompra WhatsApp | Stand fin de semana | Pop-up Salaverry | **Total** |
|---|---:|---:|---:|---:|---:|---:|
| Ene-27 | 0 | 0 | 0 | 0 | 0 | **0** |
| Feb-27 | 0 | 0 | 0 | 0 | 0 | **0** |
| Mar-27 | 3,735 | 2,381 | 0 | 1,631 | 2,769 | **10,516** |
| Abr-27 | 6,112 | 2,381 | 419 | 1,631 | 0 | **10,543** |
| May-27 | 10,570 | 2,381 | 419 | 2,035 | 0 | **15,405** |
| Jun-27 | 12,274 | 2,381 | 611 | 1,627 | 0 | **16,893** |
| Jul-27 | 11,493 | 0 | 669 | 0 | 0 | **12,162** |
| Ago-27 | 18,328 | 2,381 | 485 | 0 | 0 | **21,194** |
| Sep-27 | 19,186 | 2,381 | 842 | 0 | 0 | **22,409** |
| Oct-27 | 20,790 | 2,377 | 888 | 0 | 0 | **24,055** |
| Nov-27 | 21,047 | 2,377 | 958 | 0 | 0 | **24,382** |
| Dic-27 | 12,186 | 0 | 969 | 0 | 0 | **13,155** |
| **Año** | **135,721** | **19,040** | **6,260** | **6,924** | **2,769** | **170,714** |

### 2.3 Año 2028: brownies por canal

| Mes | Pedido del salón | Kermeses | Recompra WhatsApp | Módulo vuelta al colegio | **Total** |
|---|---:|---:|---:|---:|---:|
| Ene-28 | 0 | 0 | 605 | 0 | **605** |
| Feb-28 | 0 | 0 | 400 | 1,500 | **1,900** |
| Mar-28 | 5,088 | 825 | 49 | 1,500 | **7,462** |
| Abr-28 | 6,628 | 825 | 193 | 0 | **7,646** |
| May-28 | 8,338 | 825 | 197 | 0 | **9,360** |
| Jun-28 | 8,584 | 825 | 241 | 0 | **9,650** |
| Jul-28 | 5,924 | 0 | 249 | 0 | **6,173** |
| Ago-28 | 10,272 | 825 | 159 | 0 | **11,256** |
| Sep-28 | 10,582 | 825 | 290 | 0 | **11,697** |
| Oct-28 | 11,045 | 825 | 302 | 0 | **12,172** |
| Nov-28 | 10,938 | 825 | 314 | 0 | **12,077** |
| Dic-28 | 5,727 | 0 | 311 | 0 | **6,038** |
| **Año** | **83,126** | **6,600** | **3,310** | **3,000** | **96,036** |

### 2.4 Año 2028: ventas con IGV por canal (S/)

| Mes | Pedido del salón | Kermeses | Recompra WhatsApp | Módulo vuelta al colegio | **Total** |
|---|---:|---:|---:|---:|---:|
| Ene-28 | 0 | 0 | 2,283 | 0 | **2,283** |
| Feb-28 | 0 | 0 | 1,509 | 5,659 | **7,168** |
| Mar-28 | 19,196 | 3,113 | 185 | 5,659 | **28,153** |
| Abr-28 | 25,006 | 3,113 | 728 | 0 | **28,847** |
| May-28 | 31,458 | 3,113 | 743 | 0 | **35,314** |
| Jun-28 | 32,386 | 3,113 | 909 | 0 | **36,408** |
| Jul-28 | 22,350 | 0 | 940 | 0 | **23,290** |
| Ago-28 | 38,754 | 3,113 | 600 | 0 | **42,467** |
| Sep-28 | 39,924 | 3,113 | 1,094 | 0 | **44,131** |
| Oct-28 | 41,671 | 3,113 | 1,139 | 0 | **45,923** |
| Nov-28 | 41,267 | 3,113 | 1,185 | 0 | **45,565** |
| Dic-28 | 21,607 | 0 | 1,173 | 0 | **22,780** |
| **Año** | **313,619** | **24,904** | **12,488** | **11,318** | **362,329** |

Los totales mensuales son los del modelo y del documento 18 (sección 8). La suma de los 12 meses en soles da S/170,714 (2027) y S/362,329 (2028): S/1 de diferencia frente a S/170,715 y S/362,328 del año, solo por redondear cada mes a soles enteros. Por la misma razón, un canal puede diferir en S/1 a S/3 entre la tabla 1 y estas tablas. En la lámina se muestran las cifras anuales oficiales.

Cómo leerlo: en marzo de 2027 el pop-up y el stand pesan más de cuatro de cada diez brownies, y desde agosto casi todo es el pedido del salón. En 2028, enero y febrero viven de la recompra y del módulo, y desde abril el pedido del salón es más de ocho de cada diez brownies.

## 3. Punto de equilibrio

### 3.1 Resumen (del modelo)

| Año | Costos fijos al mes | Lo que deja cada brownie | Equilibrio en brownies al mes | En bolsas de 6 | Venta con IGV que pide | Brownies del mes de más venta | Primer mes con ganancia |
|---|---:|---:|---:|---:|---:|---:|---|
| 2027 | S/7,212 | S/1.07 | **6,720** | 1,120 | unos S/25,800 | 6,339 (nov.) | Ninguno: pierde S/38,889 |
| 2028 | S/11,325 | S/1.41 | **8,050** | 1,340 | unos S/30,400 | 12,172 (oct.) | Abril de 2028 (mes 16) |

Fórmula: equilibrio al mes = costos fijos del mes ÷ lo que deja cada brownie. 2027: 86,539 ÷ 12 ÷ 1.0736 = 6,717 ≈ 6,720. 2028: 135,904 ÷ 12 ÷ 1.4074 = 8,047 ≈ 8,050. En 2028 son 18 brownies por colegio y día con 24 colegios (8,050 ÷ 24 colegios ÷ 19 días de clase al mes = 17.7) [SUPUESTO: 19 días de clase por mes]. Con 14 colegios en 2027 haría falta 25 por colegio y día (6,720 ÷ 14 ÷ 19 = 25.3): por eso 2027 pierde mientras los colegios nuevos maduran.

### 3.2 Equilibrio por canal

Cada canal se mide contra su propio costo directo (promotor, tasa, renta o aporte). Los costos fijos de la empresa (gerente, coordinadora, administración) se cubren con la suma de todos, como muestra 3.1.

| Canal | Costo directo | Lo que deja cada brownie (hoy / costo meta) | Equilibrio (hoy / costo meta) | Lo que vende el plan | Lectura |
|---|---|---|---|---|---|
| Pedido del salón | Sin renta ni vendedor; apertura de colegios S/3,720 y muestras S/920 en 2027 | S/1.03 / S/1.37 | Cada brownie ya deja plata; con 14 colegios pide 25 por colegio y día, con 24 colegios pide 18 | 25 por colegio y día en colegio maduro | Es el canal que paga a la empresa |
| Kermés o reunión de padres | S/169 por evento (aporte S/70 + promotor S/99) | S/1.46 / S/1.80 | **116 brownies por evento** (169 ÷ 1.46) | 150 por evento | Gana S/50 por evento; es el único formato presencial que gana solo |
| Recompra por WhatsApp | Sin costo directo (entrega ya está en el costo de canal) | S/1.03 / S/1.37 | No tiene: deja plata desde el primer brownie | 1,628 en 2027; 3,310 en 2028 | La más barata de conseguir: la familia ya compró |
| Stand de fin de semana (marzo a junio de 2027) | S/159 por día (tasa S/60 + promotor S/99) | S/1.00 / unos S/1.44 | **159 por día** hoy (159 ÷ 1.00); 110 con costo meta (documento 20) | 53 por día (1,800 ÷ 34 días) | Pierde: es lanzamiento y degustación. Sigue después de junio solo si vende 100 por día y lo atienden socios (solo la tasa de S/60 pide unos 60 por día) |
| Pop-up de 9 días (marzo de 2027) | S/4,382 (espacio S/2,000 [SUPUESTO] + montaje S/600 + 2 promotores S/1,782) | S/1.00 / unos S/1.44 | **487 por día** hoy (4,382 ÷ 9 ÷ 1.00; el documento 20 redondea a 490); 339 con costo meta | 80 por día (720 en 9 días) | No se busca: se paga como marketing (−S/3,662) |
| Módulo temporal de vuelta al colegio (15 feb a 15 mar de 2028) | S/10,440 (renta S/4,500 [SUPUESTO] + 2 promotores S/5,940) | S/1.42 / S/1.79 | **245 por día** hoy; **194 por día** con costo meta (10,440 ÷ 1.79 ÷ 30) | 100 por día (3,000 en 30 días) | Pierde S/5,073; 170 por día abre la puerta al módulo fijo |
| Módulo fijo de 4 m² (solo desde 2029, con condiciones) | S/8,847 al mes | S/1.42 / S/1.79 | **208 por día** hoy; 165 con costo meta; 140 con costo objetivo | Realista: unos 70 compradores, 105 brownies [SUPUESTO] | No se paga en 2027 ni 2028 |

Fuente de costos y equilibrios: documento 18 (secciones 3 y 4.1) y documento 20 (sección 1.3). La contribución del stand y del pop-up es S/1.00 hoy porque se regalan 3 de cada 10 en degustación.

## 4. KPI con objetivos reales

Metas del plan final (cortes de la sección 9 del documento 18) y de redes (documentos 17 y 19 del T2, ajustados a la pauta de S/2,950 del documento 18). Los cortes que dicen «si no se cumple» se miran en el tablero del domingo.

### 4.1 KPI comerciales

| KPI | Meta | Cuándo y cada cuánto | Fuente del dato |
|---|---|---|---|
| Bolsas pedidas por los salones | 133 | Corte 31-mar-2027; semanal | Hoja de pedidos del salón y WhatsApp Business |
| Familias de marzo que repiten | 35 % | Corte 30-abr-2027; mensual | Hoja de pedidos por familia |
| Brownies por colegio y día | 19 o más (corte); 24 en junio; 25 en colegio maduro | Corte 15-jun-2027; semanal | Reporte del promotor y de la delegada |
| Colegios abiertos | 8 en mar-2027, 14 en sep-2027, 24 en ago-2028, 30 / 36 / 42 en 2029 a 2031 | Mensual | Acuerdos con colegios |
| Brownies y ventas del mes | Los del modelo: 2,734 y S/10,516 en marzo de 2027; 6,339 y S/24,382 en noviembre; 12,172 y S/45,923 en octubre de 2028 | Cierre mensual | Hoja de pedidos frente al modelo |
| Familias que compran cada semana | 250 al cierre de 2027 (0.6 % de unos 39,000 B1); unas 780 en 2031 (2 %) | Mensual | Hoja de pedidos |
| Stand de fin de semana | 100 o más brownies por día y costo por contacto de S/8.23 o menos | Corte 30-jun-2027 | Reporte del promotor y Meta |
| Kermés | 150 brownies por evento (equilibrio 116) | Por evento | Reporte del promotor |
| Costo del brownie en bolsa | Cotización firmada que lleve el costo a S/1.77 | Corte 31-dic-2027 | Cotizaciones de planta y proveedores |
| Tarifa de la planta (INDDA, 30 g) | S/22.50 por kg o menos | Corte 4-dic-2026 | Carta de tarifa del INDDA |
| Módulo temporal | 100 brownies por día (170 para pensar en el fijo) | Corte 15-mar-2028 | Cierre diario del módulo |
| Resultado del mes | Positivo desde abril de 2028 | Corte 30-abr-2028; mensual | Excel / modelo financiero |
| Caja a fin de mes | S/7,000 o más (alerta bajo S/3,000) | Cada fin de mes | Banco y modelo (caja más baja prevista: S/7,948 en abril de 2027) |
| Segundo aporte de socios | S/35,000 firmado | Corte 31-may-2027 | Contrato de aporte |

### 4.2 KPI de comunicación

| KPI | Meta | Cuándo y cada cuánto | Fuente del dato |
|---|---|---|---|
| Costo por contacto de WhatsApp (pauta) | S/8.23 o menos (aspiración del T2: S/5) | Mensual | Administrador de anuncios de Meta (T2 #17) |
| Contactos de WhatsApp por pauta en 2027 | 358 (2,950 ÷ 8.23) [cálculo] | Mensual, acumulado | Meta y WhatsApp Business |
| Visualizaciones de los videos | 125,000 de enero a junio de 2027 | Mensual | Instagram y TikTok (estadísticas propias) |
| Videos de reacción publicados | 30 de enero a junio de 2027, con respuesta en menos de 2 horas | Semanal | Calendario de contenido y bandeja de mensajes |
| Seguidores de Instagram | 500 en diciembre de 2026; 4,000 en diciembre de 2027 [META PROPUESTA del T2 #07 y #19, la menos respaldada] | Mensual | Estadísticas de Instagram |
| Pop-up «Laboratorio ¿La notaste?» | 1,350 pruebas, 135 contactos y 3 notas de prensa (6 al 14 de marzo de 2027) | Al cerrar el pop-up | Conteo en el stand y recortes de prensa |
| Muestras que se vuelven compra | 1 de cada 4 que prueban compra | Mensual | Reporte en la puerta del colegio |
| Creadores (papás y mamás de 3,000 a 30,000 seguidores) | 10 contactos por creador, con su palabra clave | Mensual, en marzo, junio y agosto | Mensajes con la palabra clave |
| Familias nuevas por papás y mamás embajadores | 100 en el año, unas 10 al mes de marzo a diciembre (S/1,000 ÷ S/10 por premio) [SUPUESTO: S/10 por premio, del T2 #07] | Mensual | Códigos usados |
| Piezas con visto bueno legal | 100 %; ningún niño protagoniza un anuncio (Ley 30021) | Por pieza | Revisión antes de publicar |

## 5. Métricas para escalar: CAC, LTV, LTV/CAC y NPS

**Qué es cada una, en una línea:**

- **CAC** (costo de conseguir una familia) = marketing del año ÷ familias nuevas del año.
- **LTV** (lo que deja una familia en toda su vida de cliente) = contribución por bolsa × bolsas al año × años de permanencia. Es contribución, no utilidad: no paga los costos fijos.
- **LTV/CAC** = LTV ÷ CAC. Dice cuántos soles de contribución vuelven por cada sol gastado en conseguir la familia. Para escalar se pide 3 o más.
- **Recuperación del CAC** = CAC ÷ contribución por bolsa. Dice cuántas bolsas tarda la familia en devolver lo que costó traerla.
- **NPS** (índice de recomendación) = % de promotores (notas 9 y 10) − % de detractores (notas 0 a 6).

### 5.1 CAC

| Dato | 2027 | 2028 | Fuente o fórmula |
|---|---:|---:|---|
| Marketing del año | S/15,040 | S/18,503 | Documento 18, sección 6 |
| Familias que compran cada semana al cierre | 250 | 429 | 2027: meta del CONTEXTO. 2028: 250 × 24 ÷ 14 colegios [SUPUESTO: crece con los colegios] |
| Familias nuevas del año | 250 | 304 | 2027: todas son nuevas. 2028: (429 − 250) de crecimiento + 125 que reemplazan a las que se van (250 ÷ 2 años de permanencia) [SUPUESTO] |
| **CAC de marketing** | **S/60** | **S/61** | 15,040 ÷ 250 = 60.16; 18,503 ÷ 304 = 60.95 |
| CAC completo (con apertura de colegios S/3,720) | S/75 | n/a | (15,040 + 3,720) ÷ 250 = 75.04. En 2028 no hay apertura en el estado de resultados |

Es un CAC prudente: cuenta solo a las familias que compran cada semana. Los que compran una vez en la kermés o el stand cuestan marketing pero no están en el divisor.

### 5.2 LTV y LTV/CAC

| Dato | Base | Prudente | Estrés | Fuente o fórmula |
|---|---:|---:|---:|---|
| Contribución por brownie en bolsa | S/1.37 | S/1.03 | S/1.03 | Documento 18, sección 3 (2028 con costo meta; 2027 hoy) |
| Contribución por bolsa de 6 | S/8.22 | S/6.18 | S/6.18 | 6 × contribución por brownie |
| Bolsas por año | 36 | 36 | 36 | [SUPUESTO] 1 bolsa por semana en unas 36 semanas de clases (el modelo cuenta unos 9 meses de clases) |
| Años de permanencia | 2 | 2 | 1 | [SUPUESTO] hijos de 4 a 11 años en el mismo colegio; sin dato medido |
| **LTV** | **S/592** | **S/445** | **S/222** | contribución por bolsa × 36 × años |
| CAC usado | S/61 | S/75 | S/75 | Base: CAC de marketing 2028. Prudente y estrés: CAC completo 2027 |
| **LTV/CAC** | **9.7** | **5.9** | **3.0** | LTV ÷ CAC |
| Recuperación del CAC | 7 bolsas | 12 bolsas | 12 bolsas | CAC ÷ contribución por bolsa (unas 12 semanas en el prudente) |

Cómo leerlo. Hasta el caso de estrés (una familia que se queda un solo año, con la contribución más baja y el CAC más alto) queda cerca de 3. El número que decide es la permanencia: solo 35 % de las familias de marzo repite en abril (corte del 30 de abril), y si baja de 30 % no se gasta en pauta nueva. Por eso se mide la permanencia real desde el primer mes y se corrige el LTV con ese dato. Regla para escalar [PROPUESTA]: abrir más colegios solo si LTV/CAC es 3 o más con el dato real de 6 meses.

### 5.3 NPS

| Dato | Detalle |
|---|---|
| Meta | 40 en 2027 y 50 desde 2028 [SUPUESTO: no hay dato propio; las 8 mamás del focus 2 aún no responden esta pregunta] |
| Pregunta | «Del 0 al 10, ¿qué tan probable es que recomiendes AndiBite a otra mamá o papá?» y una línea abierta: «¿por qué?» |
| A quién | Familias con 3 pedidos o más, 4 semanas después de su primer pedido |
| Cómo | Un mensaje por WhatsApp Business o la app, con permiso de la familia (Ley 29733); no se pregunta al niño |
| Cuándo | Cada mes; se publica en el tablero del domingo cuando hay 50 respuestas o más [SUPUESTO] |
| Fórmula | NPS = % de notas 9 y 10 − % de notas 0 a 6. Ejemplo: de 50 respuestas, 30 promotores y 5 detractores: 60 % − 10 % = 50 |
| Responsable | La coordinadora de ventas |

## 6. Presupuesto de cumplimiento regulatorio para establecer la empresa

**Revisión de la inversión inicial.** El documento 18 (sección 7) pone S/7,521 en «Documentos y permisos»: S.A.C. S/150, marca en INDECOPI S/401, contrato de maquila S/400, análisis para el registro sanitario S/1,200, perfil nutricional y hierro S/1,600, vida útil S/2,400, etiqueta S/650, carnés S/120 y póliza S/600 (suma S/7,521, dentro de la inversión de S/25,432).

### 6.1 Trámite por trámite

| Trámite | Entidad | Costo (S/) | Está en los S/7,521 | Fuente o [SUPUESTO] |
|---|---|---:|---|---|
| Reserva de nombre y constitución de la S.A.C. (minuta, notaría, inscripción) | SUNARP y notaría | 150 en el plan; 650 si es por la vía tradicional | Parcial: los S/150 no alcanzan | Documento 03, sección 4.1: vía tradicional S/400 a S/900 (SUNARP S/46 a 59, reserva S/24.60 a 26.40, notaría S/200 a 500, abogado S/150 a 300). El punto medio S/650 es [SUPUESTO]. La vía por un Centro de Desarrollo Empresarial (S/0 en tasas) pide capital de hasta 1 UIT (S/5,500); con S/50,000 de capital no aplica [POR CONFIRMAR] |
| RUC | SUNAT | 0 | Sí (sin costo) | Documento 03, sección 4.1. Con el RUC sale la clave SOL y el sistema gratuito de facturación SEE-SOL (documento 03, sección 4.2) |
| Inscripción en el REMYPE | Ministerio de Trabajo (REMYPE) | 0 | Sí (sin costo) | Documento 03, sección 4.1: «inscripción gratuita». Va antes de INDECOPI porque da el descuento |
| Legalización de libros: libro de actas, matrícula de acciones y registro contable | Notaría | 150 | No | [SUPUESTO]: 3 libros × S/50. La contabilidad la lleva el contador externo (S/450 al mes, ya en administración) |
| Marca en INDECOPI, clase 30, con descuento MYPE | INDECOPI | 401 | Sí | Documento 03, sección 4.4: S/401.20 con REMYPE vigente. Búsqueda fonética gratuita antes. No se pide la clase 35 (S/533) |
| Registro sanitario del brownie (2 sabores) | DIGESA (MINSA), por VUCE | 0 de tasa | Sí | Comunicado 05-2026-DIGESA/MINSA, sin costo (documento 03, resumen 2). Gestor opcional S/236 por producto: no se usa |
| Análisis para el registro sanitario (físico-químico y microbiológico) | Laboratorio acreditado por INACAL | 1,200 | Sí | Documento 18, sección 7: S/600 por sabor; rango S/300 a S/900 por producto (documento 03, sección 2.4) |
| Perfil nutricional y hierro | Laboratorio acreditado | 1,600 | Sí | Documento 18: S/800 por sabor. [SUPUESTO]: falta tarifa escrita |
| Octógonos | MINSA (Manual de Advertencias, D. S. 012-2018-SA) | 0 | Sí | No hay trámite: el brownie tiene 0 octógonos (4.6 a 7.1 g de azúcar por 100 g; el octógono sale desde 10 g). Lo confirma el perfil nutricional de arriba |
| Estudio de vida útil | Laboratorio acreditado | 2,400 | Sí | Documento 18: S/1,200 por sabor. [SUPUESTO]: falta tarifa escrita |
| Rotulado: etiqueta y revisión regulatoria | Diseño propio; revisión de la norma | 650 | Sí | Documento 18; rango S/300 a S/1,000 (documento 03, etapa B) |
| Revisión del contrato de maquila | Abogado | 400 | Sí | Documento 18; rango S/0 a S/800 (documento 03, etapa B) |
| Carnés de sanidad (6: gerente, coordinadora y 4 promotores) | Municipalidad | 120 | Sí | Documento 18: 6 × S/20; rango S/9 a S/20 (documento 03, sección 4.3) |
| Póliza de responsabilidad civil de producto | Aseguradora | 600 | Sí | Documento 18 [SUPUESTO]: falta cotización (documento 03: «cotizar con aseguradoras») |
| Autorizaciones municipales para ferias (stand del Campo de Marte, Jesús María) | Municipalidad del distrito | 0 de trámite; la tasa de S/60 por día de stand va en los gastos de operación (S/4,470 de tasas y aportes en 2027) | Sí, como gasto de operación | Documento 18, secciones 4 y 8; documento 03, sección 4.3 («autorización municipal temporal»). Los requisitos exactos por distrito están [POR CONFIRMAR]. El pop-up y el módulo se autorizan por contrato con el mall; las kermeses, con el colegio |
| Libro de reclamaciones virtual (se vende por WhatsApp) | INDECOPI (Código del Consumidor, Ley 29571) | 150 | No | Documento 03, sección 4.5 y etapa C: S/0 a S/300. El punto medio S/150 es [SUPUESTO] |
| **Lo que no aplica** | | | | |
| Licencia de funcionamiento | Municipalidad | No aplica | — | La produce la planta maquiladora; la empresa no tiene establecimiento abierto al público; el domicilio fiscal puede ser una vivienda (documento 03, sección 4.3, TUO Ley 28976). Cambia si algún día se guarda inventario en un almacén propio o se instala un stand fijo |
| Defensa Civil (inspección técnica de seguridad) | Municipalidad | No aplica | — | Se exige al establecimiento; si no hay local, no hay inspección. [SUPUESTO por la misma razón; no está en el documento 03] |
| Registro sanitario del establecimiento, HACCP y PGH | DIGESA | No aplica | — | Es de la planta, no de la marca (documento 03, sección 2.2). Se pide que la línea del INDDA esté validada |
| Afiliación a GS1 (código de barras) | GS1 Perú | No aplica en 2027 | — | Solo la piden los supermercados (documento 03, sección 4.5); S/600 a S/1,500 si algún día se entra |

### 6.2 Qué falta y cómo se cubre con los imprevistos

| Lo que falta | S/ | Cómo sale la cifra |
|---|---:|---|
| Constitución de la S.A.C. por vía tradicional (diferencia) | 500 | 650 − 150 ya presupuestados |
| Legalización de libros | 150 | 3 libros × S/50 [SUPUESTO] |
| Libro de reclamaciones virtual | 150 | Punto medio de S/0 a S/300 [SUPUESTO] |
| **Total a cubrir** | **800** | 500 + 150 + 150 |

| Imprevistos | S/ |
|---|---:|
| Imprevistos del documento 18 (10 % de S/23,120) | 2,312 |
| Se usan en trámites que faltaban | −800 |
| **Imprevistos que quedan** | **1,512** |

La inversión inicial sigue en **S/25,432**: lo que falta sale de la partida de imprevistos, no se suma. «Documentos y permisos» pasa de S/7,521 a S/8,321 y los imprevistos de S/2,312 a S/1,512 (6.5 % del resto de la inversión). Los S/1,512 que quedan cubren el riesgo más probable que dejan los [SUPUESTO]: si la póliza, la vida útil o el perfil nutricional salen S/500 a S/1,000 más caros que lo previsto. Si el costo real de la S.A.C. por un Centro de Desarrollo Empresarial resulta S/0 en tasas, los imprevistos quedan en S/2,012.

## Fuentes

- `04-reformulacion/FINAL/CONTEXTO-PARA-CHATGPT.md`, secciones 2 y 3 (cifras oficiales, 250 familias, metas).
- `04-reformulacion/FINAL/modelo/modelo.json` (clave «crecimiento») y `modelo.py`: meses, años 2027 a 2031, contribución, equilibrio, caja.
- `04-reformulacion/18-plan-final-empresa-real.md`, secciones 2, 3, 4, 5, 6, 7, 8 y 9 (canales, costos, inversión y cortes de control).
- `04-reformulacion/20-viabilidad-mall-como-canal-principal.md`, sección 1.3 (equilibrio por formato; kermés S/169 por evento).
- `04-reformulacion/03-maquila-regulacion-y-permisos.md`, secciones 2, 3, 4 y 5 (costos y trámites; enlaces a SUNARP, El Peruano, INDECOPI, DIGESA y SNI en ese documento).
- `04-reformulacion/T2/md/T2_19_Control-de-KPI.md`, `T2_07_Objetivos-SMART.md` y `T2_17_Presupuesto.md` (metas de redes, costo por contacto S/8.23, S/10 por premio de embajador).
