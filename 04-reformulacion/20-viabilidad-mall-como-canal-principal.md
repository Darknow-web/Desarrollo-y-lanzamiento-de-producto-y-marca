# 20. ¿Es viable AndiBite si el canal principal es el centro comercial?

Para: Carlos Inga y el Grupo 2 · 20 de noviembre de 2026 · Para la feria del lunes 23 de noviembre. Nota interna: no se presenta tal cual.

Pregunta: «¿Es viable la empresa si el punto principal de venta son los stands en centros comerciales? La profesora nos recalcó que el producto se vendería mejor presencial que por WhatsApp».

Peso de la evidencia, de mayor a menor: costos del Excel (copia del documento 18); lo que dijeron personas reales (focus 2: 8 mamás de nivel B pagarían S/20 a S/24 por la bolsa de 6); tarifas de módulos de prensa y de los videos que envió Carlos (documento 12, confianza media o baja); supuestos marcados [SUPUESTO]. No hay ningún dato medido de cuánto vende al día un stand de postres en un mall de Lima (documento 12: «no encontrado»). La simulación con perfiles sintéticos no se usa.

Cálculos: `FINAL/modelo/escenario_mall.py` (importa `modelo.py` sin cambiarlo). Se corre con `python3 FINAL/modelo/escenario_mall.py`.

## Resumen

**Respuesta corta: como canal principal, no. Como lugar para que la gente pruebe en temporadas, sí, y ya está en el plan.**

- **La profesora tiene razón en lo de fondo:** este producto se vende probando. Pero «presencial» no tiene que ser «centro comercial». En el plan, la primera compra ya es en persona (degustación en la puerta del colegio, reunión de padres, kermés, feria, pop-up) y la entrega es en mano en la puerta del colegio. El WhatsApp solo junta el pedido de la semana.
- **Un módulo fijo de 4 m² cuesta S/8,847 al mes.** Para no perder necesita 208 brownies al día (139 compradores) con el costo de hoy y 165 (110 compradores) con el costo meta. Lo realista para un snack de lonchera es unos 105 brownies al día (70 compradores) [SUPUESTO con tres referencias]. **Cada módulo pierde unos S/4,400 al mes hoy y S/3,200 con el costo meta.**
- **Si el vendedor logra que la mitad se lleve la bolsa de S/22**, cada comprador deja más (S/4.68 en vez de S/2.69 con el costo meta) y el módulo se paga solo con unos 63 compradores al día. Pero apenas se paga a sí mismo: no deja nada para el gerente, la coordinadora, el marketing ni la oficina.
- **Para que una empresa sin colegios no pierda**, cada módulo tendría que vender unos 310 brownies al día con la mitad de compradores llevando la bolsa (unos 90 compradores y S/1,200 al día), en 4 o 5 módulos a la vez.

| Escenario (S/ de 2027 a 2031) | Resultado 2027 | Resultado 2031 | Acumulado 5 años | ROI 5 años | Recupera | Caja más baja | Dinero que faltaría además de los S/100,000 |
|---|---|---|---|---|---|---|---|
| **Plan base: colegios (8 → 42), presencial por temporadas** | −38,889 | +52,775 | **+58,150** | **58 %** | **2030** | **+7,948 (abr-27)** | **0** |
| A1. Mall principal: 1 módulo en 2027, 3 en 2028, 4 en 2029, 5 en 2030-31, sin colegios, venta realista | −116,654 | −324,123 | −1,275,354 | no hay | nunca | negativa desde mar-27 | 1,262,229 |
| A2. Igual que A1, pero la mitad de compradores lleva la bolsa | −94,211 | −119,208 | −593,153 | no hay | nunca | negativa desde mar-27 | 580,029 |
| A3. Igual, muy optimista: 90 compradores al día y 6 de cada 10 con bolsa | −72,971 | +87,661 | +95,037 | 95 % (52 % sobre los S/183,000 que pide) | 2030 | −76,039 (feb-29) | 83,039 |
| B1. Plan base + los mismos módulos fijos desde 2027, venta realista | −91,693 | −177,258 | −780,321 | no hay | nunca | negativa desde mar-27 | 751,105 |
| B2. Plan base + módulos, la mitad lleva la bolsa | −73,494 | +27,658 | −102,365 | no hay | nunca | negativa desde mar-27 | 124,612 |

**Recomendación:** se queda el plan base y sus cifras. Lo que cambia es cómo se cuenta: la venta presencial es el motor (probar en la puerta del colegio, en la reunión de padres, en la kermés, en la feria y en el centro comercial en la vuelta al colegio) y el WhatsApp sirve solo para volver a pedir. En la presentación cambian dos textos de la lámina 13 y una frase de la 14; no cambia ninguna cifra.

**Qué decirle a la profesora si pregunta «¿por qué no venden principalmente en el mall?»:**

1. «Estamos de acuerdo en que se vende mejor en persona: por eso cada familia nos conoce probando, en la puerta del colegio, en la reunión de padres, en la kermés y en el Real Plaza Salaverry, y le entregamos en mano en la puerta del colegio; el WhatsApp solo junta el pedido de la semana».
2. «Hicimos la cuenta del mall: un módulo cuesta ocho mil ochocientos soles al mes y necesita unos ciento cuarenta compradores al día para no perder, y lo realista para un snack de lonchera son unos setenta; con el mall como canal principal, la empresa pierde todos los años».
3. «Por eso el mall entra en la vuelta al colegio, que es cuando se arma la lonchera, y el módulo fijo solo se abre en 2029 si el temporal demuestra que la gente se lleva la bolsa de seis».

## 1. La cuenta de un punto de venta presencial

### 1.1 Lo que deja cada brownie vendido en el mall

Mezcla del plan: de cada 10 brownies, 6 se venden sueltos a S/5 y 4 en bolsa de 6 a S/22 (Excel, Supuestos fila 48). En soles por brownie, sin IGV:

| Partida | Hoy | Costo meta (2028) | Fuente |
|---|---|---|---|
| Precio promedio con IGV | 4.47 | 4.47 | 0.6 × 5 + 0.4 × 3.67 |
| Precio sin IGV | 3.79 | 3.79 | IGV 18 % |
| Producir (sin laboratorio ni transporte, que van en fijos) | −1.88 | −1.54 | Excel, Costeo: unidad S/1.91 y bolsa S/1.84; meta S/0.34 menos (doc. 18, sección 3) |
| Yape, Plin o tarjeta (3 % del precio con IGV) | −0.13 | −0.13 | Excel, Supuestos B27 |
| Renta a cuenta (1 % de la venta sin IGV) | −0.04 | −0.04 | Excel, Supuestos B28 |
| Degustación: 1 regalado por cada 10 vendidos | −0.21 | −0.18 | Doc. 18, 4.1 |
| Movilidad y bolsas | −0.10 | −0.10 | Excel, Supuestos B32 |
| **Lo que deja cada brownie** | **1.42** | **1.79** | Igual que el doc. 18; desde 2029, con costo objetivo, S/1.98 |

**Ojo con la degustación.** Si 1 de cada 4 que prueban compra (la meta del plan, sin medir) y cada prueba es un cuadradito de 1/8 de brownie, por cada 10 vendidos se regalan unos 3, no 1. Entonces cada brownie deja S/0.99 hoy y S/1.44 con el costo meta (el doc. 18 ya usa S/1.00 para el stand de feria). Con eso el módulo fijo pide 297 brownies al día, no 208. Las cuentas de abajo usan 1 por cada 10, que es lo más favorable para el mall.

La renta variable del mall (8.5 % de la venta) solo se paga si supera a la renta fija: haría falta vender más de S/52,800 al mes con IGV por módulo. Ningún escenario llega.

### 1.2 Lo que paga cada comprador: si se empuja la bolsa, cambia todo

| Cómo compran (de cada 10 compradores) | Brownies por comprador | Paga cada comprador | Deja por brownie: hoy / meta | Deja por comprador: hoy / meta | Compradores al día para pagar el módulo: hoy / meta |
|---|---|---|---|---|---|
| Mezcla del plan (6 de cada 10 brownies sueltos) | 1.5 | S/6.70 | 1.42 / 1.79 | 2.13 / 2.69 | 139 / 110 |
| 6 compran 1 suelto y 4 la bolsa | 3.0 | S/11.80 | 1.02 / 1.39 | 3.06 / 4.18 | 96 / 70 |
| La mitad lleva la bolsa | 3.5 | S/13.50 | 0.96 / 1.34 | 3.37 / 4.68 | 87 / 63 |
| 6 de cada 10 llevan la bolsa | 4.0 | S/15.20 | 0.92 / 1.30 | 3.69 / 5.18 | 80 / 57 |

La bolsa deja menos por brownie (S/3.67 frente a S/5), pero mucho más por comprador. **En el mall, la cifra que manda es cuántos compradores se llevan la bolsa, no cuántos brownies se venden.** Hoy no hay ningún dato de eso: es lo que tiene que medir el pop-up de marzo de 2027.

### 1.3 Cada formato, con su venta realista

| Formato | Costo | Brownies al día para no perder: hoy / meta | Venta realista al día | Resultado al mes: hoy / meta | De dónde sale el costo |
|---|---|---|---|---|---|
| Módulo fijo de 4 m², todos los días de 10 a. m. a 10 p. m. | S/8,847 al mes (renta y cargos S/4,560; 2 vendedores y descansos S/3,756; llave y mueble en 36 meses S/381; servicios S/150). Entrada S/21,300 | 208 / 165 | 105 [SUPUESTO] | −4,379 / −3,201 | Doc. 18, 4.1; videos de Carlos (doc. 12) |
| Módulo temporal de 30 días (vuelta al colegio) | S/10,440 (renta S/4,500 [SUPUESTO], 2 promotores S/5,940) | 245 / 194 | 100 (plan) | −6,185 / −5,063 | Doc. 18, 4.1 |
| Pop-up de 9 días (lanzamiento) | S/4,382 | 490 / 339 (con 3 regalados por 10) | 80 (plan: 720 en 9 días) | −3,666 / −3,348 | Doc. 18; se paga como marketing |
| Isla o carrito de fin de semana, 2 promotores (9 días al mes) | S/357 por día: espacio S/150 [SUPUESTO], promotores S/198, carrito S/2,999 en 36 meses | 252 / 199 | 120 [SUPUESTO] | −1,681 / −1,277 | Espacio: entre S/150 (temporal del doc. 18) y S/190 a S/217 por día (organizadores privados, S/5,700 a S/6,500 por 30 días, doc. 12). Carrito: mostrador de Falabella, 19-nov-2026 |
| Isla de fin de semana, 1 promotor 8 h en hora punta | S/258 por día | 182 / 144 | 90 [SUPUESTO] | −1,173 / −870 | Igual |
| Stand de feria municipal (Campo de Marte) | S/159 por día: tasa S/60 y promotor S/99 | 160 / 110 (con 3 regalados por 10) | 50 (doc. 14) | −983 / −785 (9 días) | TUSNE de San Miguel (doc. 12); está en el plan de marzo a junio de 2027 como lanzamiento |
| Kermés o reunión de padres | S/169 por evento: aporte S/70 y promotor S/99 | 116 | 150 (Excel B63) | +50 / +101 por evento | Doc. 18; es el único formato presencial que gana solo |
| Carrito en la entrada de un supermercado | No hay tarifa pública (doc. 12: «no encontrado») | 396 (si la cadena se queda 20 % y quedan S/0.25 por brownie, doc. 14) | — | No se puede costear | Hay que ser proveedor de la cadena; en la vereda, Surco no autoriza snacks envasados |

### 1.4 De dónde sale la «venta realista» de 105 brownies al día en un módulo

No hay un dato medido para Lima (doc. 12, sección D). Se usan tres referencias, y las tres caen cerca:

| Referencia | Qué dice | Lo que sería para AndiBite | Confianza |
|---|---|---|---|
| Caso de un módulo de cookies (TikTok @tipsdeclau, doc. 12) | 45 compradores al día para no perder y 65 al día estable desde el mes 6, con 5,000 personas que pasan y 1.3 % que compra | 65 a 70 compradores; con 1.5 brownies cada uno, unos 100 brownies | Media: es un caso armado, no un contrato real, y la cookie es antojo, no lonchera |
| María Almenara (Perú Retail, doc. 12) | S/500 a S/600 al día vendiendo brownies y dulces en bicicleta a empresas | Con S/6.70 por comprador, unos 75 a 90 compradores; unos 110 a 135 brownies | Baja: no es un mall |
| Embudo de degustación [SUPUESTO] | Un promotor ofrece unas 35 pruebas por hora en las 8 horas de más gente (unas 280 al día); compra 1 de cada 4 (meta del plan, sin medir) | 70 compradores; 105 brownies | Baja: el 1 de 4 no se ha medido |

Por eso se usan 70 compradores al día (S/469 de venta con IGV) como caso realista. Para pagar el módulo con la mezcla del plan hacen falta 139 compradores hoy: el doble.

### 1.5 Lo que sí funciona en persona

La kermés gana (+S/50 por evento) porque no paga alquiler y vende en un rato lo que un stand vende en un día. La puerta del colegio y la reunión de padres cuestan solo las muestras (S/920 en 2027) y la apertura (S/3,720), y después el colegio compra cada semana sin alquiler ni vendedor fijo: cada brownie del pedido del salón deja S/1.03 hoy y S/1.37 con el costo meta. El mall cobra por estar abierto 360 días; el colegio junta a las familias gratis cada mañana.

## 2. La empresa con el mall como canal principal

### 2.1 Supuestos

| Supuesto | Valor | Fuente |
|---|---|---|
| Módulos abiertos | 1 en marzo de 2027; 3 en marzo de 2028; 4 en 2029; 5 en 2030 y 2031 (Real Plaza Salaverry y otros malls de zona B) | Pedido del encargo |
| Costo y entrada de cada módulo | S/8,847 al mes; S/21,300 al entrar (garantía S/7,600, llave S/5,700, mueble S/8,000); llave y mueble se descuentan en 36 meses | Doc. 18, 4.1 |
| Venta por módulo | A1: 70 compradores al día con la mezcla del plan (105 brownies). A2: 70 con la mitad llevando la bolsa (245). A3: 90 con 6 de cada 10 llevando la bolsa (360) | [SUPUESTO], sección 1.4 |
| Arranque de cada módulo | 60 %, 70 %, 80 % y 90 % en los primeros 4 meses; 100 % desde el mes 5 | [SUPUESTO], como el caso de TikTok |
| Temporada | Enero, julio y diciembre al 85 %; febrero y marzo al 115 % (vuelta al colegio) | [SUPUESTO] |
| Lo que deja cada brownie | Costo de hoy en 2027, meta en 2028 y objetivo desde 2029, igual que el plan base | Doc. 18 y `modelo.py` |
| Equipo y oficina | Gerente y coordinadora como en el plan base; marketing S/15,040 (2027), S/18,503 (2028) y 8 % de la venta desde 2029; administración; laboratorio y transporte que crecen con el volumen (S/0.13 por brownie); un asistente de reparto desde 4 módulos | Doc. 18 y `modelo.py`. Sin promotores de kermés, tasas de feria ni apertura de colegios |
| Dinero | Los mismos S/100,000: S/50,000 de socios (la inversión inicial deja S/24,568 en caja), S/35,000 en mayo de 2027 y S/15,000 de caja municipal en enero de 2028 al 40 % anual | Doc. 18, sección 7 |
| Escenarios B | El plan base completo (colegios, kermeses, feria, pop-up y módulo temporal) más los mismos módulos fijos; los módulos suman su venta, su costo, su entrada, laboratorio y 8 % de marketing desde 2029 | `escenario_mall.py` |

### 2.2 Resultados por año (S/)

| Año | Plan base | A1 mall realista | A2 mall, mitad con bolsa | A3 mall muy optimista | B1 base + módulos | B2 base + módulos con bolsa |
|---|---|---|---|---|---|---|
| Brownies 2031 | 168,063 | 186,638 | 435,488 | 639,900 | 354,700 | 603,550 |
| Ventas con IGV 2031 | 634,073 | 833,648 | 1,679,738 | 2,431,620 | 1,467,721 | 2,313,811 |
| 2027 | −38,889 | −116,654 | −94,211 | −72,971 | −91,693 | −73,494 |
| 2028 | −4,678 | −220,778 | −113,617 | −4,531 | −133,697 | −26,536 |
| 2029 | +20,331 | −284,059 | −130,710 | +24,101 | −170,660 | −17,311 |
| 2030 | +28,611 | −329,740 | −135,407 | +60,777 | −207,014 | −12,682 |
| 2031 | +52,775 | −324,123 | −119,208 | +87,661 | −177,258 | +27,658 |
| **Acumulado** | **+58,150** | **−1,275,354** | **−593,153** | **+95,037** | **−780,321** | **−102,365** |

Con un solo módulo los cinco años y sin colegios, la empresa pierde unos S/123,000 al año (−S/633,898 en cinco años): el módulo deja S/74,000 de contribución al año y cuesta S/106,000, y el equipo y la oficina cuestan otros S/95,000.

**Por qué pierde aunque venda más brownies que el plan base.** El colegio no paga alquiler ni vendedor fijo: lo que deja cada brownie va casi entero a pagar al equipo. El módulo se come primero S/8,847 al mes; con 70 compradores al día no llega a pagarse, y aunque se pague, no sobra para el gerente, la coordinadora y el marketing.

**Lo que tendría que vender cada módulo para que una empresa sin colegios no pierda:**

| Año y módulos | Con la mezcla del plan | Con la mitad de compradores llevando la bolsa |
|---|---|---|
| 2028, 3 módulos | 226 brownies al día (151 compradores) | 312 brownies (89 compradores, unos S/1,200 al día) |
| 2029, 4 módulos | 233 (155 compradores) | 318 (91 compradores) |
| 2031, 5 módulos | 225 (150 compradores) | 306 (87 compradores) |

**El único caso con ganancia (A3)** pide 90 compradores al día en cada uno de los 5 módulos, con 6 de cada 10 llevando la bolsa de S/22: unos S/1,370 de venta al día por módulo, parecido a lo que vende el caso armado de cookies de TikTok en su mejor momento (65 compradores de S/22, S/1,430 al día). Además necesita S/83,000 más de financiamiento, porque cada módulo nuevo pide S/21,300 al entrar. Sobre lo que de verdad habría que poner (S/183,000), el ROI es de 52 %, menos que el 58 % del plan base, con mucho más riesgo.

**Caja.** En todos los escenarios con módulo fijo desde marzo de 2027, la caja se vuelve negativa ese mismo mes: la entrada de S/21,300 se come casi todo lo que queda del primer aporte (S/24,568) antes de que llegue el segundo, en mayo.

## 3. Decisiones

### Decisión 1. El canal principal sigue siendo el colegio; el mall no pasa a ser el canal principal

- **Qué se decide:** se mantiene el plan base (8 colegios en marzo de 2027, 14 en septiembre, 24 en 2028 y 30, 36 y 42 hasta 2031) y la entrada al mall por pasos: pop-up en marzo de 2027, módulo temporal de vuelta al colegio en 2028 y módulo fijo solo desde 2029 con condiciones.
- **Qué cambia frente a hoy:** nada en las cifras. Se agrega la cuenta de este documento como respaldo.
- **Por qué:** un módulo fijo pide 208 brownies al día (139 compradores) y lo realista son unos 105 (70 compradores); todos los escenarios con el mall como canal principal pierden, salvo uno que pide el doble de compradores y S/83,000 más. Peso: costos del Excel (alto); tarifas del mall de prensa y videos (medio y bajo); venta diaria [SUPUESTO] con tres referencias que coinciden.
- **Qué mueve en los números:** nada. ROI de 58 %, recuperación en 2030 y caja mínima de S/7,948 se mantienen. Pasar al mall como canal principal dejaría entre S/593,000 (si la mitad lleva la bolsa) y S/1.28 millones (caso realista) de pérdida acumulada a 2031.
- **Riesgo:** que el mall venda mucho más de lo supuesto y estemos dejando pasar el canal. Se cubre midiendo en el pop-up y en el módulo temporal, que ya están en el plan.
- **Cómo y cuándo se comprueba:** pop-up del 6 al 14 de marzo de 2027 (compradores por día y cuántos se llevan la bolsa) y módulo temporal del 15 de febrero al 15 de marzo de 2028.
- **Con qué resultado nos retractamos:** si el módulo temporal de 2028 hace 90 o más compradores al día con la mitad o más llevando la bolsa (unos S/1,200 al día con IGV), el mall pasa a ser un segundo motor y se abre el primer módulo fijo en 2029, sin esperar las otras condiciones.

### Decisión 2. Lo presencial es el motor de la primera compra; el WhatsApp solo sirve para volver a pedir

- **Qué se decide:** el canal 1 se presenta como «Venta en el colegio»: la familia prueba en la puerta o en la reunión de padres, la delegada junta el pedido del salón y lo entregamos en mano el lunes en la puerta. El WhatsApp es la libreta del pedido y el recordatorio de recompra, no el lugar donde se vende.
- **Qué cambia frente a hoy:** el texto de la lámina 13 dice «WhatsApp une todo» y «Todo termina en el WhatsApp». Eso es lo que hizo pensar a la profesora que vendemos por chat.
- **Por qué:** coincide con lo que hace el plan (muestras en la puerta del colegio, 1 de cada 4 que prueban compra, kermeses, feria y pop-up) y con lo que dijeron las mamás del focus 2: al probarlo, nadie notó la sangrecita y el precio subió de S/10 a S/20-24 por la bolsa. Se vende probando.
- **Qué mueve en los números:** nada; es la misma operación contada como es.
- **Riesgo:** ninguno en los números. Que suene a cambio de última hora: se evita porque solo se reemplazan palabras, no cifras.
- **Cómo y cuándo se comprueba:** en el ensayo del domingo 22 de noviembre, alguien del grupo hace la pregunta de la profesora y Ade o Carlos responde con las tres frases del resumen.
- **Con qué resultado nos retractamos:** si el grupo no aprueba el cambio de texto antes del domingo 22 a las 6 p. m., la presentación se queda como está y las tres frases se usan solo si preguntan.

### Decisión 3 (condicionada). La condición para el módulo fijo se mide en compradores y bolsas, no solo en brownies

- **Qué se decide:** se propone que la condición del módulo fijo en 2029 (hoy: «170 brownies por día en el temporal») se exprese también en compradores y en bolsas: 90 compradores al día con la mitad llevando la bolsa, o S/850 al día de venta con IGV como mínimo para que el módulo se pague solo con el costo meta.
- **Qué cambia frente a hoy:** 170 brownies al día con la mezcla del plan son 113 compradores; con la mitad llevando la bolsa, 170 brownies son solo 49 compradores y el módulo no se paga (pide 220 brownies con esa mezcla).
- **Por qué:** sección 1.2: con la bolsa, cada brownie deja menos pero cada comprador deja casi el doble.
- **Qué mueve en los números:** nada hasta 2029.
- **Riesgo:** ninguno nuevo; hace más exigente una condición que ya existía.
- **Cómo y cuándo se comprueba:** cuaderno de caja del pop-up (marzo de 2027) y del módulo temporal (2028), con compradores, bolsas y sueltos por hora.
- **Con qué resultado nos retractamos:** si el equipo prefiere no tocar el doc. 18 antes de la feria, esto se aplica después del 23 de noviembre.

## 4. Lo que se mantiene y por qué

- **Precio** (S/22 la bolsa y S/5 la unidad): sale de lo que dijeron las mamás; en el mall no cambia nada.
- **Crecimiento por colegios y venta por colegio de 25 brownies al día:** es el canal que no paga alquiler.
- **Pop-up de marzo de 2027 y módulo temporal de 2028 en Real Plaza Salaverry:** son la parte presencial en el mall y la prueba barata de si el mall puede ser algo más. Cuestan S/4,382 y S/10,440, frente a S/21,300 de entrada más S/8,847 al mes del fijo.
- **Stand de feria municipal de marzo a junio de 2027:** sigue como lanzamiento, con su corte en junio.
- **Financiamiento de S/100,000, ROI de 58 % y recuperación en 2030.**

## 5. Plan de pruebas de los próximos 30 días

| Fecha | Prueba | Quién | Qué se anota | Para qué |
|---|---|---|---|---|
| Dom 22-nov | Ensayo con la pregunta de la profesora | Todo el grupo | Que las tres frases se digan en menos de 40 segundos | Feria del 23 |
| Lun 23-nov | En la degustación de la feria, preguntar al final: «Si lo compraras hoy, ¿uno suelto a S/5 o la bolsa de 6 a S/22?» (tarjeta o palito en un frasco) | Angie y Ade | Votos por suelto y por bolsa | Primera señal, débil, de la mezcla; no es una venta |
| Sáb 5-dic y mié 9-dic | Contar gente frente a la zona de módulos de Real Plaza Salaverry, 1 hora a las 12 m. y 1 hora a las 6 p. m. | Carlos y un socio | Personas por hora que pasan; compras por hora en un módulo de postres o cookies cercano | Afluencia y ritmo real de un módulo parecido (hoy no hay dato) |
| Hasta vie 11-dic | Pedir por correo a Real Plaza (área de módulos para emprendedores) la tarifa de un pop-up de 9 días, un módulo de 30 días en febrero y un módulo fijo de 4 m², con requisitos | Carlos | Tarifas escritas | Cambia el «S/4,500 [SUPUESTO]» por un dato |
| Hasta vie 18-dic | Conversar con 3 operadores de módulos de postres o cookies en malls de Lima | Patty y Diana | Compradores al día entre semana y fin de semana; qué parte compra para llevar | Contrastar el supuesto de 70 compradores al día |

Ninguna de estas pruebas reemplaza al pop-up de marzo de 2027: es la primera venta real en un mall.

## 6. Impacto en los números

Si se aprueban las tres decisiones, **no cambia ninguna cifra oficial**: 44,383 brownies y −S/38,889 en 2027; 96,036 y −S/4,678 en 2028; +S/58,150 acumulados a 2031; ROI de 58 %; recuperación en 2030; caja mínima de S/7,948 en abril de 2027; S/100,000 de financiamiento.

Si en cambio el grupo eligiera el mall como canal principal, habría que rehacer las láminas 13, 14 y 22 a 26, el modelo y el Excel, y las cifras serían las de la tabla 2.2: pérdida en los cinco años en el caso realista y entre S/83,000 y S/1.26 millones más de financiamiento.

## 7. Qué cambiaría en la presentación y en los entregables si el grupo aprueba

| Entregable | Qué cambia | Qué no cambia |
|---|---|---|
| `FINAL/web/index.html`, lámina 13 | Centro: «WhatsApp une todo» → «Todo empieza probando» con «Quien prueba en persona deja su número; el WhatsApp solo sirve para volver a pedir». Tarjeta 1: «Pedido del salón» → «Venta en el colegio: prueba en la puerta, pedido del salón y entrega en mano el lunes» | Título «Vendemos donde está la lonchera», las cifras de colegios y las tarjetas 2 a 4 |
| `FINAL/web/index.html`, lámina 14 | Nada en pantalla (opcional: una línea pequeña «Módulo fijo: S/8,847 al mes; se abre cuando la cuenta da») | Todo lo demás |
| `FINAL/GUION-5-personas.md` y su PDF, lámina 13 (Ade) | «Todo termina en el WhatsApp…» → «Todo empieza probando en persona. El WhatsApp solo sirve para volver a pedir». «El canal más fuerte es el pedido del salón» → «El canal más fuerte es el colegio: la familia prueba en la puerta, la delegada junta el pedido del salón y el lunes entregamos en mano en la puerta». Mismo tiempo de lectura | Lámina 12 y cifras |
| `FINAL/GUION-5-personas.md`, lámina 14 | Antes de «Cada paso se gana con el anterior», una frase: «No es nuestro canal principal: un módulo fijo necesita unos ciento cuarenta compradores al día para pagarse, y el colegio nos junta a las familias cada mañana sin alquiler» | Pop-up, temporal y fijo desde 2029 |
| `FINAL/AndiBite - Plan de lanzamiento.pdf` | Volver a exportar tras el cambio de la lámina 13 | — |
| `18-plan-final-empresa-real.md` | Sección 4: nombre del canal 1. Sección 4.1: un párrafo con la cuenta de la empresa con el mall como canal principal (tabla 2.2 resumida) y la condición de la decisión 3. Banco de preguntas: nueva pregunta «¿Por qué no venden principalmente en el mall?» con las tres frases | Todas las cifras |
| `FINAL/CONTEXTO-PARA-CHATGPT.md` | Fila «Canales»: «Venta en el colegio (prueba en la puerta, pedido del salón, entrega en mano)»; WhatsApp como recompra | Sección 3 de cifras |
| `FINAL/STAND-y-TAREAS.md` | Agregar las tres frases a la lista de respuestas de quien atiende el stand | — |
| `FINAL/modelo/modelo.py`, Excel del modelo | Nada | — |

## 8. Datos que hay que pedir al investigador

1. Tarifa escrita de Real Plaza Salaverry para un pop-up de 9 días, un módulo de 30 días en febrero y un módulo fijo de 4 m², con garantía, llave, porcentaje y requisitos para alimentos envasados.
2. Afluencia de Real Plaza Salaverry (visitas al mes y por día de semana), con fuente.
3. Ventas por día (compradores y soles) de módulos de postres, cookies o snacks en malls de Lima, de entrevistas a operadores o notas de prensa con cifras.
4. Costo de fabricar un carrito o isla de 1 a 2 m² aprobado por un mall.
5. Condiciones para hacer degustación y venta con impulsadora en Plaza Vea, Tottus o Wong siendo proveedor nuevo: margen de la cadena, cobro por espacio y plazos de pago.
6. Tasa de autorización temporal para vender alimentos envasados en la puerta de un colegio privado en Jesús María, San Miguel y Los Olivos.

## Fuentes

- Excel `Costeo-presentaciones-AndiBite.xlsx` (copia recalculada del documento 18): hojas Supuestos y Costeo.
- Documento 18, secciones 2, 3, 4, 4.1, 5, 7 y 8; `FINAL/modelo/modelo.py`; documento 14, sección 10.
- Documento 12: módulos de mall (Gestión, 15-sep-2023; Líbero, 2-dic-2022), stands y carritos, María Almenara (Perú Retail), videos de Carlos del 19-nov-2026 (caso de cookies de TikTok @tipsdeclau, organizadores privados y TUSNE de San Miguel), mostrador de Falabella (19-nov-2026).
- Cálculos: `FINAL/modelo/escenario_mall.py` (resultados en `FINAL/modelo/escenario_mall.json`).
