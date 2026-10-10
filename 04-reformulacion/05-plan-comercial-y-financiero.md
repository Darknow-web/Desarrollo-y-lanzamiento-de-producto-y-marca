# 05. Plan comercial y financiero de AndiBite 2.0

**10-oct-2026, modelo v6: año 1 de enero a diciembre de 2027, personal operativo pagado, sangrecita de res en polvo liofilizada, maquila de S/0.45, precios nuevos y app "Andi, Misión Hierro".**

**9-oct-2026: el equipo eliminó por ahora la suscripción; el pack de 12 se vende por pedido.**

**9-oct-2026: documentos considerados listos (costo en la inversión inicial) y venta física como canal principal.**

Versión 6, 10 de octubre de 2026 (primera versión: 3 de octubre de 2026). Documento de consultoría de mercados y finanzas para el Grupo 2 (Diana Ayoso, Carlos Inga, Angie Blas, Patricia Cárdenas y Adela Robles). Integra los documentos 00 a 04 y 09 de esta carpeta y los convierte en un plan de empresa: qué se lanza, cómo se opera, cuánto cuesta, a qué precio se vende, cuánto se espera vender, cuánta plata hace falta y en qué momento se recupera.

**Nota del 10 de octubre de 2026: modelo financiero v6.** Sobre el modelo v5 del 9 de octubre, el equipo tomó tres decisiones nuevas: (1) el insumo pasa a ser **sangrecita de res en polvo liofilizada**, comprada lista a granel (bolsas de 1 a 5 kg) a S/300 por kg a un proveedor con registro sanitario, con la receta 5 del documento 01 (22 g de polvo y 98 g de agua por lote de 24): S/0.605 de insumos por brownie; la planta solo hidrata el polvo y ya no manipula sangre cruda; (2) **precios nuevos**, que se sostienen con el hierro medido en cada lote y con la app; (3) **la app "Andi, Misión Hierro"** (app web instalable que se abre con el QR del envase, documento 09), con S/6,000 de inversión, S/250 al mes de servidor y mantenimiento, un código único impreso en cada etiqueta y el análisis de hierro de cada lote, que se publica en la app. Siguen vigentes las decisiones del modelo v5: (A) los documentos y permisos (S.A.C., RUC, marca, registro sanitario, análisis, etiqueta, carnés y póliza) se tratan como ya obtenidos, con su costo de S/6,251.20 dentro de la inversión inicial, y no frenan ninguna venta; (B) la venta física (stands, carritos, ferias y eventos) es el canal principal y WhatsApp queda para la recompra; (C) todo el trabajo operativo es pagado: un(a) vendedor(a) de stand a S/90 por día en todos los puntos de venta y un(a) coordinador(a) comercial y de operaciones en planilla, medio tiempo, a S/709 al mes; los socios son los dueños y el directorio: supervisan y reciben utilidades, no hacen trabajo operativo gratis; (D) la maquila cuesta S/0.45 por brownie; (E) se fabrica un solo carrito y los demás puntos usan el kit de feria o el módulo del mall. Las ventas empiezan en **enero de 2027** y el año 1 va de **enero a diciembre de 2027** (mes 1 = enero de 2027). La fuente de las cifras de precios, ventas, inversión, equilibrio, resultado y caja es el Excel `04-reformulacion/Costeo-presentaciones-AndiBite.xlsx` (hojas Resumen, Supuestos, Inversion, Costeo, Proyeccion y Mensual; se regenera con `build_costeo.py`). Este documento se alineó con ese Excel. Precios con IGV: stands, carritos y ferias, unidad S/6.00, pack de 6 S/27.90 y pack de 12 S/51.90; recompra por WhatsApp, S/4.00 (caja degustación de 3 a S/12.00), S/26.90 y S/49.90; colegios, S/3.00 para AndiBite (el alumno paga S/4.00); tienda naturista, S/17.34 por pack de 6 para AndiBite (anaquel S/28.90, con 40 % para la tienda). El pack de 6 recomendado es la opción B (bolsitas individuales). Lo marcado como "versión anterior (modelo v5)" (sangrecita fresca de pollo con S/0.40 de insumos, unidad a S/5.50 en el stand, S/230,740.38 de ventas con IGV, inversión de S/37,894.24 y resultado operativo de S/20,937.62) se conserva solo como comparación. El Excel calcula solo el escenario base.

**Convenciones.** [HIPÓTESIS] = supuesto del equipo con su lógica explícita. [POR CONFIRMAR] = dato que no se pudo verificar en una fuente primaria y que se debe cotizar. Los costos que sostienen el plan (espacio del stand, stand en feria, tarifa de maquila, sangrecita en polvo, análisis de hierro por lote y app) se presentan como costos del plan con su fuente de referencia, no como supuestos. Todas las cifras están en soles. Los precios al público incluyen IGV; los márgenes, costos y flujos se calculan **sin IGV**, porque el IGV que se cobra y el que se paga se compensan como crédito fiscal. El modelo de cálculo (recetas, costos por presentación, ventas, flujo) se hizo en una sola hoja para que todas las cifras de este documento cuadren entre sí.

**Limitación de búsqueda.** En esta sesión se agotó el cupo de búsquedas web. Se consultaron directamente las páginas de Culqi, Izipay, La Purita, Fika, Plaza Vea, Wong y modelo.pe. Las páginas de Mercado Pago, Mercado Libre, Rappi, PedidosYa, Yape Empresas y ProInnóvate bloquearon la consulta (HTTP 403, 404 o 418). Esos datos van marcados [POR CONFIRMAR].

---

## 0. Resumen ejecutivo

1. **Decisión central:** lanzar desde el primer día la **versión sin octógono**: cada brownie de 20 g endulzado con eritritol, plátano maduro y solo 15 g de panela por lote tiene entre 4.6 y 7.1 g de azúcar total por 100 g (el octógono se activa con 10 g). La versión con panela queda como plan B ya validado.
2. **Sabores y presentaciones de lanzamiento:** Choco Clásico con chispas sin azúcar, Choco-Plátano-Canela con cañihua y Choco-Lúcuma. Se vende en unidad (para probar en el stand), pack de 6 x 20 g, pack de 12 "Semana completa" por pedido y caja degustación de 3 sabores. De las 52,786 unidades del año 1, el 55.6 % se vende suelta, el 37.1 % en pack de 6 y el 7.4 % en pack de 12 (Excel, hoja Proyeccion).
3. **Costo de producción puesto en almacén**, con maquila a S/0.45 por brownie y sangrecita de res en polvo liofilizada (S/0.605 de insumos por brownie), código único de la app en cada etiqueta y análisis de hierro de cada lote: con la opción B recomendada (bolsitas individuales, sin etiqueta por brownie) S/9.98 por pack de 6 (S/1.66 por brownie); la unidad suelta cuesta S/1.74 y el pack de 12, S/18.78 (S/1.56 por brownie). La opción C (brownies sueltos con papel manteca) baja el pack de 6 a S/9.47 (S/1.58). El polvo se compra listo y no se fabrica, y el polvo de hígado de pollo se descartó (sección 4.1). Versión anterior (modelo v5, sangrecita fresca de pollo con S/0.40 de insumos): S/8.29 por pack de 6.
4. **Contribución por unidad.** Antes de pagar el espacio, los vendedores y las ferias, cada brownie deja S/1.78 en promedio: S/2.43 en stands y carritos, S/2.54 en ferias y eventos, S/1.07 en la recompra por WhatsApp, S/0.68 en colegios y S/0.61 en tiendas naturistas. Después de repartir los S/45,870 de espacio, vendedores de stand y ferias entre las 52,786 unidades, queda **S/0.91 por unidad**. Versión anterior (modelo v5): S/1.83 antes y S/0.97 después.
5. **Precios (con IGV, decididos el 10-oct-2026):** en stands, carritos y ferias, unidad a **S/6.00**, pack de 6 a **S/27.90** (S/4.65 por unidad) y pack de 12 a S/51.90 (S/4.33 por unidad). En la recompra por WhatsApp e Instagram, unidad a S/4.00 (caja degustación de 3 a S/12.00), pack de 6 a **S/26.90** (S/4.48 por unidad) y pack de 12 a S/49.90 (S/4.16 por unidad), con delivery gratis desde 2 packs. Quiosco escolar a S/4.00 la unidad al alumno (AndiBite le vende al concesionario a S/3.00). Tienda naturista con anaquel de S/28.90 por pack de 6, de los cuales AndiBite cobra S/17.34. El precio se sostiene con el hierro medido en cada lote y con la app "Andi, Misión Hierro" (sección 4.5 y documento 09). Versión anterior (modelo v5): unidad a S/5.50 en el stand.
6. **Margen bruto** (precio sin IGV menos costo de producción, opción B): en el stand, 66 % en la unidad, 58 % en el pack de 6 y 57 % en el pack de 12 (el pack de 6 se vende a S/23.64 sin IGV); por WhatsApp, 49 %, 56 % y 56 %.
7. **Ventas del año 1** (enero a diciembre de 2027, escenario base): **52,786 unidades y S/246,531.04 con IGV** (S/208,924.61 sin IGV), el 70 % del SOM de 75,600 unidades del documento 04. Van de 870 unidades en enero a 7,028 en diciembre, con un promedio de 4,399 al mes y un ingreso promedio de S/4.67 por brownie. Versión anterior (modelo v5): las mismas unidades y S/230,740.38 con IGV.
8. **Mezcla de canales en el escenario base (unidades):** 42.9 % stands y carritos en malls y supermercados (22,625), 15.3 % ferias y eventos (8,100), 17.4 % recompra por WhatsApp e Instagram (9,176), 17.4 % colegios (9,165) y 7.0 % tiendas naturistas (3,720). La venta física en puntos propios y eventos (stands, carritos y ferias) es el 58.2 % de las unidades y el 68.3 % de las ventas con IGV; el canal al consumidor (B2C) es el 75.6 % de las unidades y el B2B (colegios y naturistas), el 24.4 %. El supermercado en góndola queda para el año 2.
9. **Inversión inicial: S/45,358.18**: documentos y permisos S/6,251.20; desarrollo S/3,740.81; marca y app S/7,250 (con S/6,000 de la app); arranque (empaque, stock de enero y febrero, marketing de lanzamiento y capital de trabajo de 2 meses) S/19,154.70; equipos y 1 carrito S/4,838; imprevistos S/4,123.47. Se financia con S/25,000 de los socios (S/5,000 cada uno) y un préstamo de **S/20,500** a 24 cuotas de **S/1,150.32** (TEA de 35 %); un concurso de ProInnóvate queda como mejora posible, no como base. Versión anterior (modelo v5): S/37,894.24, con préstamo de S/13,000.
10. **Punto de equilibrio:** 3,035 unidades al mes (506 packs de 6 equivalentes), con costos fijos de S/2,753.39 al mes (administración S/1,010 con S/250 de la app, coordinador comercial y de operaciones en planilla S/709, marketing S/900 y depreciación S/134.39) y con el espacio, los vendedores de stand y las ferias ya repartidos en la contribución (S/0.91 por unidad). El año promedia 4,399 unidades al mes, 45 % más que el equilibrio. El resultado mensual es negativo en enero (−S/2,456) y en febrero (−S/1,004) y positivo en los otros 10 meses; el resultado acumulado es positivo desde mayo de 2027. Versión anterior (modelo v5): 2,592 u/mes.
11. **Resultado operativo del año 1:** **S/14,853.06 (7.1 % de las ventas sin IGV)** con la opción B y S/16,497.31 (7.9 %) con la opción C, ya con el personal operativo pagado. Sale de una contribución de S/93,763.73 menos S/45,870 de stands, carritos y ferias (espacio S/16,800, vendedores de stand S/23,670 y ferias pagadas S/5,400) y menos costos fijos de S/33,040.67. Los gastos de documentos, desarrollo, marca y desarrollo de la app no se restan aparte: forman parte de la inversión inicial. Los socios son dueños y directorio: no figuran como trabajadores y reciben utilidades. Puente a la **utilidad neta de S/10,675.68**: resultado operativo S/14,853.06, más S/2,089.25 de pagos a cuenta que ya estaban restados en el costo de canal, menos S/5,080.44 de intereses del préstamo en el año 1, igual a S/11,861.87 antes de impuestos; menos S/1,186.19 de impuesto a la renta del Régimen MYPE Tributario (10 %).
12. **Payback y caja:** la inversión no se recupera en el año 1: entre el resultado operativo del año (S/14,853.06) y la inversión (S/45,358.18) faltan **S/30,505.12** (opción C: S/28,860.87). Con el año 2 al ritmo de octubre a diciembre de 2027 (unos S/2,623 al mes), la inversión se recupera en el **mes 24 (diciembre de 2028)**; con la opción C, en el mes 23. La caja más baja es de S/2,649.79 en febrero de 2027, con la cuota del préstamo incluida, y la caja al cierre del año 1 es de S/10,803.71.
13. **Sensibilidad** (resultado operativo del año 1 y mes de recuperación; base: S/14,853 y mes 24): ventas −20 %, S/2,414 y mes 51, con la caja en −S/2,163 (haría falta una línea de crédito o un aporte extra de los socios); ventas +20 %, S/27,291 y mes 17; espacio a S/1,000 por punto al mes, S/3,653 y mes 42; maquila a S/0.55, S/9,311 y mes 31; polvo a S/417 por kg (precio de sobre en tienda), S/9,421 y mes 31; unidad de vuelta a S/5.50 en el stand (precio de la versión anterior), S/7,069 y mes 35; análisis de hierro cada 2 lotes, S/17,102 y mes 22 (tabla en la sección 8.3).
14. **Régimen tributario:** S.A.C. en el Régimen MYPE Tributario (IGV de 18 %, pago a cuenta de 1 % y renta de 10 % sobre las primeras 15 UIT de utilidad) con facturación electrónica desde el primer día. El coordinador está en planilla como microempresa (REMYPE).
15. **Lo que se formaliza antes de firmar:** contrato de maquila (tarifa de S/0.45 por brownie y lote mínimo), proveedor de sangrecita de res en polvo con registro sanitario (a granel a S/300 por kg, con un segundo proveedor homologado), laboratorio para el análisis de hierro de cada lote (S/375), contrato con el desarrollador de la app, contratos de espacio de S/600 por punto al mes, aceptación infantil de la versión con eritritol, el rendimiento real por día de cada punto, la póliza de responsabilidad civil y una línea de crédito de capital de trabajo o el compromiso de aporte extra de los socios para el caso de ventas menores.

---

## 1. Correcciones explícitas a los documentos 01 a 04

| Documento | Qué decía | Qué se corrige aquí y por qué |
|---|---|---|
| 02, sección 3 | Costeaba una receta de unos 1,150 g de masa como si rindiera 24 unidades y suponía polvo de sangrecita a S/120 por kg | Se costean las recetas del documento 01 (560 a 660 g de masa para 24 unidades de 20 g), que son las que irán a la maquila, con los precios del documento 02. Para la sangrecita se usa la de res en polvo liofilizada, comprada lista a granel (bolsas de 1 a 5 kg) a S/300 por kg a un proveedor con registro sanitario (en sobre de tienda cuesta S/417 a 667 por kg), con la receta 5 del documento 01: 22 g de polvo más 98 g de agua por lote de 24 (0.92 g de polvo por brownie). Insumos: S/0.605 por brownie |
| 01, recetas 1 a 4 | Usaban 120 g de sangrecita de pollo cocida | Para la maquila se usa la receta 5 (sangrecita en polvo), que el propio documento 01 recomienda para maquila porque trae análisis, lote y vencimiento. La planta solo hidrata el polvo: no cuece ni manipula sangre cruda |
| 01, sección 4 | "Todas las variantes superan el octógono"; quedaba abierto si el azúcar del plátano cuenta | Vale para la versión con azúcar o panela. Se agrega la versión sin octógono (sección 2.3). Siguiendo al documento 03, el azúcar del plátano **sí cuenta**, porque el parámetro es azúcar total |
| 01, recetas | Endulzaban con azúcar rubia | La versión de comparación usa panela, como piden el brief y el documento 02 |
| 04, sección 1.11 | SOM del año 1 entre octubre de 2026 y setiembre de 2027, a S/4.00 por unidad | El año 1 va de **enero a diciembre de 2027**, con la venta física como canal principal. El modelo vende 52,786 unidades, el 70 % del SOM de 75,600, y el precio sube a S/6.00 la unidad y S/27.90 el pack de 6 en el stand (S/26.90 por WhatsApp), porque la versión sin octógono, el espacio del stand, el vendedor pagado, el hierro medido en cada lote y la app lo exigen. Los documentos se tratan como ya obtenidos (su costo está en la inversión) y no retrasan la venta |
| 03-entregables/04 (plan de marketing anterior) | Ventas desde octubre de 2026 | Las ventas empiezan en **enero de 2027**, en stands, carritos y ferias, con los documentos considerados listos. WhatsApp pasa a ser el canal de recompra: el contacto se capta en el punto de venta y se le recuerda la recompra, también desde la app |
| Nombre | El documento 04 y el plan anterior dicen "AndyBites"; el brief y los documentos 01 a 03 dicen "AndiBite" | Se usa AndiBite hasta que salga la búsqueda fonética de INDECOPI |

---

## 2. Decisiones de diseño del negocio

### 2.1 Sabores de lanzamiento (3)

| Sabor | Por qué entra | Evidencia |
|---|---|---|
| **Choco Clásico** con chispas sin azúcar | Es la puerta de entrada y el que mejor camufla la sangrecita | El chocolate es el sabor número 1 en niños de 6 a 12 años y 7 de cada 10 prefieren el de leche (documento 01, fuentes 12 y 22). En el focus 1 las madres eligieron el brownie porque "es chocolate" |
| **Choco-Plátano-Canela** con cañihua | Es el concepto original validado en las semanas 1 a 4. El plátano permite bajar el azúcar y la cañihua cuenta la historia andina | Es la receta con menos azúcar (documento 01) y la base natural de la versión sin octógono |
| **Choco-Lúcuma** | Le da identidad peruana y premium para Lima Top y Lima Moderna | La lúcuma es de los sabores de helado más vendidos del país. El riesgo medio de que se note la sangrecita se controla con 30 a 32 g de cocoa |

**Por qué tres sabores y no más.** El dolor que el documento 04 encontró es el de los jueves: "ya no sé qué mandar". Con tres sabores, el pack de 6 da dos rotaciones completas en una semana escolar de cinco días, y eso basta para que la lonchera se sienta variada. Un cuarto sabor desde el inicio tiene tres costos: subiría el número de análisis de laboratorio (cada sabor puede necesitar su propio registro si DIGESA no los acepta como grupo, documento 03), haría más cara la corrida mínima de la maquila y repartiría la demanda de un lote pequeño en más referencias, con más riesgo de vencimiento. Además, los tres comparten la misma base técnica (cocoa, sangrecita en polvo hidratada, huevo y aceite), así que la planta los produce en la misma línea cambiando solo el sabor final. Eso abarata el cambio de formato y ayuda a pedir el registro como grupo.

Quedan fuera del lanzamiento el maní y la pecana, porque son alérgenos mayores y muchos colegios los restringen. Choco-Naranja y Choco-Fresa quedan como ediciones de temporada en el año 2.

### 2.2 Formatos

| Formato | Contenido | Para quién y para qué | Precio por WhatsApp con IGV |
|---|---|---|---|
| **Pack de 6 x 20 g (SKU principal)** | 2 unidades de cada sabor en bolsita individual (flow pack) sin etiqueta, dentro de un doypack kraft con zipper y etiquetas con el código único de la app (opción B) | Claudia: una semana de lonchera con variedad y una recompra cada 2 semanas (documento 04) | S/26.90 (S/4.48 por unidad) |
| **Pack de 12 "Semana completa"** | 4 de cada sabor | Familias con 2 hijos (Claudia tiene a Matías y Luciana) o compra quincenal. Es el pack para la compra quincenal, que se vende por pedido (sin suscripción ni compromiso), con delivery gratis desde 2 packs y recordatorio de recompra opcional por WhatsApp o desde la app | S/49.90 (S/4.16 por unidad, 7.2 % menos) |
| **Caja degustación de 3 sabores** | 1 unidad de cada sabor | Primera compra, ferias, regalos de cumpleaños y muestra para el pediatra. Trae un cupón de S/3.00 para el primer pack de 6 | S/12.00 (S/4.00 por unidad) |

**Lógica de la arquitectura de precios.** El pack de 6 es el producto que se compra cada dos semanas y fija la percepción de precio (S/4.48 por unidad). El pack de 12 premia la planificación, que es el rasgo central del público objetivo: es 7.2 % más barato por unidad y concentra pedidos, que es lo que más reduce el costo de delivery (con 12 unidades por pedido, el delivery cae de S/0.95 a S/0.79 por unidad). La caja degustación no busca margen: es la herramienta para que el niño pruebe delante de la madre, que es la condición de compra que identificó el focus 1. Por eso se vende a S/4.00 por unidad (S/12.00 la caja), algo por debajo del pack de 6 (S/4.48), y lleva el cupón que empuja a la segunda compra. En el stand, donde el precio de lista es S/6.00 la unidad, S/27.90 el pack de 6 y S/51.90 el pack de 12, 6 de cada 10 brownies se venden sueltos para probar en el momento, 35 % en pack de 6 y 5 % en pack de 12 (Excel, hoja Supuestos, sección 6).

Solo la unidad que se vende suelta (stands, ferias y quioscos) lleva etiqueta individual de rotulado completo, con su código único de la app. En el pack de 6 de la opción B, recomendada, los brownies van en bolsitas sin etiqueta y el rotulado y el código van en el doypack; la opción A (etiqueta en cada brownie) es la versión anterior.

### 2.3 Estrategia frente al octógono "Alto en azúcar"

**Propuesta de versión sin octógono (V-SO).** Se baja el azúcar total por debajo de 10 g por 100 g (con un margen de 3 g para la tolerancia del laboratorio). Se usan tres palancas: más plátano maduro, solo 15 g de panela por lote para conservar la nota acaramelada y un endulzante de volumen (eritritol con fruto del monje, del tipo Lakanto Classic). Es lo que hace Fika con su brownie de quinua, que se endulza con alulosa y se vende "sin octógonos" a S/14.00 por 70 g ([Fika](https://www.fika.pe/products/brownie-55g), consultado el 03-oct-2026).

**Fórmulas V-SO por lote de 24 unidades (g)**, con 120 g de sangrecita hidratada por lote (22 g de sangrecita de res en polvo liofilizada más 98 g de agua, que la planta hidrata y licúa con los huevos, como en la receta 5 del documento 01):

| Ingrediente | V-SO Choco Clásico | V-SO Plátano-Canela-Cañihua | V-SO Lúcuma |
|---|---|---|---|
| Sangrecita de res en polvo hidratada (22 g de polvo + 98 g de agua), licuada con los huevos | 120 | 120 | 120 |
| Plátano de seda maduro | 70 | 160 | 60 |
| Huevos (2) | 100 | 100 | 100 |
| Panela | 15 | 15 | 15 |
| Eritritol con fruto del monje | 70 | 50 | 60 |
| Aceite vegetal | 65 | 55 | 65 |
| Cocoa | 45 | 45 | 32 |
| Harina de trigo / harina de cañihua | 60 / — | — / 50 | 60 / — |
| Harina de avena | 30 | 50 | 30 |
| Lúcuma en polvo / chips sin azúcar | — / 25 | — / — | 50 / — |
| Canela, vainilla, sal, polvo de hornear | 1 / 6 / 1.5 / 2 | 1.5 / 6 / 1.5 / 3 | 0 / 6 / 1.5 / 2 |
| **Azúcar total estimado por 100 g** (horneado con 12 % de pérdida) | **4.6 g** (1.02 g por unidad) | **6.2 g** (1.50 g) | **7.1 g** (1.57 g) |
| Equivalente con panela (documento 01 con panela) | 21.4 g | 14.7 g | 18.8 g |

Supuestos de azúcar: plátano con 12.2 g por 100 g (USDA, citado en el documento 01), panela con 90 % y lúcuma en polvo con 30 % [HIPÓTESIS del documento 01]. El eritritol no se cuenta como azúcar. Se valida con análisis de laboratorio en la preparación (fase 0).

**¿Por qué eritritol antes que alulosa?** Para el Codex, "azúcares" son todos los monosacáridos y disacáridos presentes en el alimento ([CXG 2-1985](https://www.fao.org/input/download/standards/34/CXG_002s_2015.pdf)). La alulosa es un monosacárido, así que un laboratorio o DIGESA podría contarla como azúcar total. Estados Unidos la excluye expresamente ([FDA, guía sobre alulosa](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-declaration-allulose-and-calories-allulose-nutrition-and-supplement-facts-labels)), pero Perú no tiene esa regla [POR CONFIRMAR con DIGESA y con el laboratorio]. El eritritol es un poliol (SIN 968) y no es azúcar. Dos cautelas sobre el eritritol. Primero, la EFSA fijó en 2023 una ingesta diaria admisible de 0.5 g por kg de peso al día [POR CONFIRMAR enlace: [EFSA](https://www.efsa.europa.eu/en/efsajournal/pub/8430)]: un niño de 18 kg puede consumir 9 g y un brownie trae entre 2 y 3 g, así que se recomienda **1 unidad al día**. Segundo, hay un estudio que asocia el eritritol en sangre con eventos cardiovasculares en adultos de riesgo ([Witkowski et al., Nature Medicine 2023](https://www.nature.com/articles/s41591-023-02223-9)). Es un riesgo de reputación que se maneja con transparencia en la etiqueta y con esa dosis baja. Si en la fase 0 se confirma que la alulosa no cuenta como azúcar, puede reemplazar hasta un 30 % del eritritol para mejorar el dorado y la humedad.

**Precios de los endulzantes (03-oct-2026):** alulosa Lakanto de 454 g a S/53.10 en Plaza Vea (S/116.96 por kg; [Plaza Vea](https://www.plazavea.com.pe/endulzante-alulosa-lakanto-classic-natural-doypack-454g-20634058/p)); Lakanto Classic de 800 g (ingredientes: "extracto de fruto del monje + eritritol") a S/94.90 en Wong (S/118.63 por kg; [Wong](https://www.wong.pe/endulzante-classic-lakanto-doypack-800-g-2/p)). A granel, con un importador, se supone S/60 por kg a 3,000 u/mes y S/30 por kg a 8,000 [HIPÓTESIS, cotizar].

**Comparación de las dos versiones**

| Criterio | V-P: con panela | V-SO: sin octógono (eritritol, plátano y 15 g de panela) |
|---|---|---|
| Azúcar total | 14.7 a 21.4 g por 100 g: **lleva octógono** | 4.6 a 7.1 g por 100 g: **sin octógono** [validar en laboratorio] |
| Insumos por unidad, sin IGV | Unos S/0.11 menos que la V-SO (diferencial calculado con sangrecita en polvo a 3,000 u/mes) | S/0.605 (sangrecita de res en polvo, modelo v6) |
| Costo de producción por unidad | Unos S/0.11 menos | S/1.66 en el pack de 6 de la opción B (S/9.98 el pack) |
| Sobrecosto en el año 1, escenario base | — | Unos S/0.11 por unidad (a 3,000 u/mes), unos S/5,800 en el año con las 52,786 unidades |
| Riesgo de sabor | Bajo: la panela es familiar y carameliza | Medio: el eritritol deja una sensación fría y dora menos. Se compensa con plátano, canela, horno a 170 °C y los 15 g de panela |
| Quioscos escolares | **No puede entrar** (RM 195-2019-MINSA, documento 03) | Puede entrar |
| Mensaje de marca | "Endulzado con panela", pero el octógono contradice la promesa de lonchera saludable | "Cero octógonos, hierro de verdad": calza con el 70 % que teme al "Alto en azúcar" (Ipsos, documento 04) |
| Costo de cambiar después | Nuevo análisis y nuevo RS o modificación (S/550 a 1,400, documento 03), reimpresión de etiquetas (unos S/720) y nueva prueba sensorial, con 2 a 3 meses perdidos en colegios | Ninguno |

**Por qué lanzar sin octógono cambia la economía del negocio, no solo la etiqueta.** La V-P saldría unos S/0.11 por unidad más barata (a 3,000 u/mes), pero perdería tres cosas que valen más. Primero, el canal colegio: en el escenario base representa 9,165 unidades y S/27,495.00 con IGV, y además es el canal que hace visible la marca ante padres de un mismo salón. Segundo, la conversión en venta directa: el 83 % de los consumidores dice que los octógonos cambian su compra y el 70 % teme justamente el "Alto en azúcar" (Ipsos 2025, documento 04). Un producto para padres que leen etiquetas no puede pedirles que ignoren la advertencia más temida. Tercero, la coherencia del relato de marca: "hierro de verdad, sabor a brownie" pierde fuerza si al lado del logo hay un octógono negro. El riesgo real de la V-SO no es el costo, sino el sabor, y eso se resuelve con la prueba sensorial de la fase 0, antes de invertir en la planta.

**Recomendación: lanzar primero la V-SO** en los tres sabores. Cuesta solo S/0.11 por unidad a 3,000 u/mes (3 % del precio neto), abre el canal colegio, sostiene el mensaje central del documento 04 y evita pagar dos veces el registro. Para que no sea un salto al vacío, la decisión pasa por un **filtro al cierre de la fase 0**: la V-SO debe lograr al menos 75 % de respuestas en las caritas 4 y 5, quedar a 0.5 puntos o menos de la V-P en la prueba a ciegas y medir menos de 8 g de azúcar por 100 g en el análisis preliminar. Si no pasa, se lanza la V-P solo en stands, ferias y venta por WhatsApp, y la V-SO entra después para colegios.

---

## 3. Modelo operativo por fases

**Roles fijos.** Diana Ayoso: producto, I+D y prueba sensorial. Patricia Cárdenas: operaciones (planta, compras, inventario, calidad y logística). Adela Robles: regulación, legal y relación con el contador. Angie Blas: marca, contenido y pauta. Carlos Inga: comercial (puntos de venta, WhatsApp, colegios, naturistas) y modelo financiero. Los cinco socios son los dueños y el directorio de la S.A.C.: supervisan su área y reciben utilidades. El trabajo operativo (atender los stands, los pedidos y el despacho) lo hace personal pagado: vendedores de stand a S/90 por día y un(a) coordinador(a) comercial y de operaciones en planilla (medio tiempo, S/709 al mes).

**Supuesto de trabajo (9-oct-2026).** Los documentos y permisos se tratan como ya obtenidos al empezar a vender, en enero de 2027. Su costo, S/6,251.20, está en la inversión inicial (sección 7) y no condiciona el calendario de ventas. Las fases 0 y 1 son de preparación (octubre a diciembre de 2026): lo que cuestan está dentro de esa inversión. La fase 2, la venta, es la que genera el resultado del año 1.

| Fase | Actividades | Responsables | Costo | Entregables |
|---|---|---|---|---|
| **Fase 0: preparación del producto** | 3 rondas de las fórmulas V-P y V-SO, con prueba de umbral de sangrecita (80, 120 y 160 g de equivalente). Prueba sensorial con al menos 20 niños por sabor (escala de caritas) y prueba triangular con los padres. Focus 2 con precio preguntado después de probar, más una encuesta a 30 padres con Van Westendorp (documento 04). Análisis preliminar de azúcares y hierro de las 2 mejores fórmulas. Cotización a MAKING, Unión, INDDA y Organic Andean Bites. Compra de la sangrecita de res en polvo liofilizada a granel (bolsas de 1 a 5 kg, a S/300 por kg) a un proveedor con registro sanitario (del tipo Allpa Manta), con ficha técnica y un segundo proveedor homologado. Escalamiento y lote piloto en la planta | Diana (pruebas y escalamiento), Carlos (focus y encuesta), Patricia (cotizaciones y planta) | **S/3,740.81** (hoja Inversion, "desarrollo"): insumos de 3 lotes de prueba S/942.81 (3 × S/314.27, documento 02); endulzantes S/148.00; análisis preliminar S/750.00 (2 × S/375); prueba sensorial S/150.00; desarrollo y lote piloto en la planta S/1,750.00 [POR CONFIRMAR] | Fórmula congelada v3; informe sensorial; decisión sobre el octógono; precio validado; 2 plantas preseleccionadas |
| **Fase 1: preparación de documentos, marca, app, puntos de venta y arranque** | Contrato de maquila con confidencialidad (la S.A.C. como titular del RS y la planta como fabricante, a S/0.45 por brownie). Documentos y permisos, considerados listos al abrir ventas: S.A.C. en un CDE de PRODUCE, RUC en el RMT, REMYPE y libro de reclamaciones, marca en clase 30, análisis para el RS, perfil nutricional con hierro, vida útil, etiqueta (declarar "fuente de hierro" solo si el laboratorio mide al menos 2.1 mg por 100 g), RS por VUCE, carnés de sanidad y póliza de responsabilidad civil para stands. Identidad, fotos, web y catálogo de WhatsApp Business. Diseño, desarrollo, pruebas y publicación de la app "Andi, Misión Hierro" con un desarrollador freelance, y código único impreso en las etiquetas (documento 09). Pedir espacio y cotización a malls, cadenas de supermercados y organizadores de ferias (documento 08). Fabricar 1 carrito con vitrina y gráfica. Compra de equipos y empaque, y primer lote para enero y febrero. Contratar al coordinador(a) en planilla y armar la bolsa de vendedores de stand | Adela (documentos, contrato, planilla y espacios), Patricia (planta, carrito y lote), Angie (identidad y lanzamiento), Carlos (espacios y primeros puntos) | **Documentos y permisos S/6,251.20** (S.A.C. S/150; RUC, REMYPE y libro de reclamaciones S/0; marca S/401.20; revisión legal S/400; análisis para el RS S/1,800; perfil nutricional y hierro S/1,125; vida útil S/1,050; etiqueta S/650; tasa del RS S/0; carnés S/75; póliza S/600). **Marca y app S/7,250** (identidad S/800, fotos S/300, web, dominio y app S/6,150). **Equipos y 1 carrito S/4,838**. **Arranque S/19,154.70**: empaque S/3,150, stock inicial S/4,800.70, marketing de lanzamiento S/3,204 y capital de trabajo S/8,000 | Contrato firmado; documentos y permisos listos; etiqueta aprobada con su código; app publicada; 1 carrito; coordinador(a) contratado(a); stock para enero y febrero (3,700 unidades vendidas en el modelo); espacios cotizados |
| **Fase 2: venta desde enero de 2027** (año 1: enero a diciembre de 2027) | **Stands y carritos en malls y supermercados**, fines de semana: 1 punto en enero, 2 puntos de febrero a julio y 3 puntos de agosto a diciembre. Todos los puntos llevan un(a) vendedor(a) pagado(a) (S/90 por día de atención); los socios supervisan y rotan por los puntos, sin reemplazar a los vendedores. Degustación en el punto y QR a WhatsApp y a la app. **Ferias y eventos:** 1 feria de campaña escolar en febrero y 2 ferias navideñas en diciembre, pagadas (S/1,800 cada una); el resto son eventos sin costo (kermeses, cumpleaños y ferias gratuitas: 40 en el año). **Recompra por WhatsApp e Instagram:** recordatorio al cliente del stand y botón de recompra de la app, rutas de delivery los martes y viernes por zona, pack de 12 por pedido (sin suscripción), atendida por el coordinador(a). **Colegios (quiosco)** desde marzo de 2027 y **tiendas naturistas** a consignación o con factura. Producción mensual con análisis microbiológico y de hierro de cada lote (el hierro medido se publica en la app). GS1 desde el mes 6. Evaluación de góndola (Flora & Fauna o Vivanda) en el mes 9. Cierre de números todos los domingos, con los brownies vendidos por día en cada punto | Carlos (puntos, ventas y colegios), Angie (contenido, pauta y material de stand), Patricia (producción y despacho), Adela (contabilidad, SUNAT, planilla y trámite de espacios), Diana (calidad, hierro por lote y nuevos sabores) | Costos fijos de S/2,753.39 al mes (administración S/1,010 con S/250 de la app, coordinador S/709, marketing S/900 y depreciación S/134.39), más espacio de S/600 por punto al mes (S/16,800 en el año), vendedores de stand (S/23,670 en el año), 3 ferias pagadas (S/5,400) y los costos variables de la sección 4 | 52,786 unidades vendidas en el año; 3 puntos de venta desde agosto; unos 5 colegios y 8 naturistas a fines de 2027 [HIPÓTESIS: 300 u por colegio y 60 u por punto al mes]; resultado acumulado positivo desde mayo de 2027; reporte trimestral |

**Calendario del año 1.** Enero se vende con un solo punto (vacaciones); febrero suma el segundo punto y la feria de campaña escolar; marzo incorpora los quioscos con el año escolar; de agosto a diciembre se llega a 3 puntos y diciembre cierra con dos ferias navideñas. El resultado es negativo en enero y febrero y positivo en el resto de los meses (sección 8.2).

---

## 4. Estructura de costos por unidad y por pack de 6 (maquila, versión V-SO)

### 4.1 Costos de cada línea

| Línea | Valor y fuente |
|---|---|
| Insumos | **S/0.605 por brownie** (promedio de los 3 sabores), con las fórmulas V-SO de la sección 2.3 y sangrecita de res en polvo liofilizada: 22 g de polvo más 98 g de agua por lote de 24 (0.92 g de polvo por brownie; receta 5 del documento 01). El polvo se compra listo a granel, en bolsas de 1 a 5 kg, a S/300 por kg, a un proveedor con registro sanitario (del tipo Allpa Manta, de res); en sobre de tienda cuesta S/417 a 667 por kg (Malli y Allpa Manta, documento 02). Hacen falta unos 51 kg al año. El resto de los insumos, con precios del documento 02 (Makro y mayoristas) y de los endulzantes (Plaza Vea y Wong), divididos entre 1.18 para quitar el IGV. Versión anterior (modelo v5), con sangrecita fresca de pollo: S/0.40 |
| Maquila | **S/0.45 por brownie de 20 g**: tarifa de referencia de S/20.75 por kg de snack horneado con elaboración y empaque (Organic Andean Bites, documento 03; tesis de la UDEP: S/0.83 por empaque de 40 g en 2023), actualizada a 2027. La planta hidrata la sangrecita en polvo, mezcla, hornea, corta, pesa y sella la bolsita. No manipula sangre cruda: hay menos riesgo sanitario (Salmonella y control HACCP), la dosis de hierro es estable, no hay olor y el producto dura más |
| Empaque individual | Flow pack sin imprimir: S/0.09 por unidad [HIPÓTESIS sobre el documento 02] |
| Etiqueta individual 5x5 | **S/0.29 por unidad**, solo en la unidad que se vende suelta: S/0.25 de la etiqueta (Imprenta Peruana, 1,000 unidades, sin IGV, documento 02) más S/0.04 del código único de la app, impreso con dato variable. El pack de 6 de la opción B no lleva etiqueta por brownie |
| Doypack | 16x22 cm a S/0.625 con IGV por 1,000 unidades, es decir S/0.53 sin IGV por envase de 6 (documento 02); el de 12 cuesta S/0.70 [HIPÓTESIS, talla mayor] |
| Etiquetas del doypack | Frente y reverso, 7x7 cm, a S/0.36 cada una (1,000 unidades, documento 02), más S/0.04 del código único de la app: **S/0.76 por envase** |
| Control de calidad por lote | **S/625 por lote mensual**: análisis microbiológico de liberación de lote S/250 más análisis de hierro S/375, cuyo resultado se publica en la app como el "hierro medido" de ese lote. Con 4,400 unidades al mes en promedio del año 1: **S/0.142 por unidad** |
| Transporte planta-almacén | S/80 por viaje; 2 viajes al mes: S/0.053 por unidad [HIPÓTESIS] |
| Almacenamiento | S/0.04 por unidad, pactado con la planta o con un operador logístico, para no necesitar licencia por almacén propio (documento 03) [HIPÓTESIS] |
| Merma | 5 % de insumos, maquila y empaque [HIPÓTESIS] |
| Delivery al cliente | Referencia real en Lima Top y Lima Moderna: La Purita cobra S/9.50 + IGV por envío ([La Purita](https://www.lapurita.com/pages/costo-de-delivery), 03-oct-2026); Fika y La Purita ofrecen envío gratis desde S/150. Política de AndiBite: delivery gratis desde 2 packs, y S/6.00 en pedidos de 1 pack. Con un pedido promedio de 10 unidades, el costo neto queda en **S/0.80 por unidad** [HIPÓTESIS sobre ese dato real] |
| Pasarela de pagos | Culqi: tarjetas nacionales 3.44 % + US$0.20 en línea; Yape 3.44 %; Plin y otras billeteras 3.99 %; PagoEfectivo 3.99 % con mínimo de S/3.50; comisiones inafectas al IGV ([Culqi](https://culqi.com/precios/)). Izipay: link de pago gratis, comisión desde 1.99 % para clientes nuevos y POS desde S/108 ([Izipay](https://www.izipay.pe/)). Mercado Pago [POR CONFIRMAR, página bloqueada]. Con un 15 % de transferencias sin costo, la mezcla da **3 %** del precio con IGV |
| Comisiones de canal | Quiosco: 25 % para el concesionario [HIPÓTESIS]. Naturista: 40 % (rango de 35 a 50 % del documento 03). Supermercado: 35 % más 5 % de aportes y merma (el brief da 30 a 40 %). Marketplace: 28 % [POR CONFIRMAR, Rappi y Mercado Libre no publican su tarifa] |
| Marketing fijo | **S/900 al mes** en promedio del año (pauta, degustaciones y material de stand), porque la captación se hace en el stand [HIPÓTESIS]. La pauta se basa en el plan anterior (S/10 a 20 por día en ventanas de campaña); el CPM de Meta en Lima queda [POR CONFIRMAR] |
| Administración | **S/1,010 al mes**: contador S/250 (rango de S/150 a 400 del documento 03), software S/60, web S/30, teléfono S/60, movilidad S/150, GS1 prorrateado S/85, banco y otros S/65, S/60 de carnés de sanidad, uniformes y reposición del material de stand, y **S/250 de la app** (servidor y base de datos en Cloud Run y Firestore de Google, envío de recordatorios y mantenimiento de un desarrollador) |
| App "Andi, Misión Hierro" | S/6,000 de diseño, desarrollo, pruebas y publicación en la inversión inicial; S/250 al mes dentro de administración; S/0.04 por código impreso en cada etiqueta; y el análisis de hierro de cada lote dentro del control de calidad (sección 4.5 y documento 09) |
| Coordinador(a) comercial y de operaciones | **S/709 al mes**, en planilla, medio tiempo de 4 horas: media remuneración mínima de 2027 (S/1,300 según el DS 015-2026-TR, es decir S/650) más 9 % de EsSalud; microempresa en el REMYPE. Atiende WhatsApp, pedidos y despacho, y lleva el stock a los stands: S/8,508 al año |
| Vendedores de stand | **S/90 por día de atención**, en todos los puntos de venta (Computrabajo: S/50 a 90 por día de fin de semana, documento 08): S/23,670 al año. Los socios no atienden stands sin pago |
| Depreciación | Equipos mínimos por S/2,338.00 y 1 carrito por S/2,500.00, es decir S/4,838.00 a 36 meses: S/134.39 al mes. El desarrollo de la app (S/6,000) va en la inversión inicial junto con la marca y no se deprecia en el modelo |
| Impuestos | IGV de 18 %; RMT con pago a cuenta de 1 % de los ingresos netos y renta de 10 % hasta 15 UIT de utilidad (S/82,500) y 29.5 % sobre el exceso ([modelo.pe](https://modelo.pe/blog/regimen-mype-tributario-rmt-2026-tasas-limites/); UIT de S/5,500 en el documento 03). Se recomienda el RMT porque paga sobre la utilidad y emite factura, a diferencia del NRUS (documento 03) |

**Por qué se compra el polvo y no se fabrica.** Hacer nuestro propio polvo de sangrecita costaría igual o más: unos S/15,000 a 20,000 al año, más S/10,000 a 15,000 de liofilizadora y permisos de planta, y con más riesgo sanitario, porque habría que recibir y procesar sangre cruda. Comprarlo listo a un proveedor con registro sanitario (unos 51 kg al año a S/300 por kg, unos S/15,300) deja ese riesgo fuera de la planta, da una dosis de hierro estable y un insumo sin olor y con más vida útil.

**Por qué no se usa polvo de hígado de pollo.** Tiene unas 3 veces menos hierro que la sangrecita (unos 9 frente a 29.5 mg por 100 g, documento 01) y parte de ese hierro no es hemínico, así que harían falta unos 4 g de polvo por brownie. Con esa dosis, cada brownie traería unos 480 µg de vitamina A, cuando el máximo para un niño es de 600 µg al día de 1 a 3 años y de 900 µg de 4 a 8 años: con dos brownies, o con otros alimentos del día, se pasaría del límite. Además tiene un sabor fuerte y no hay proveedor de grado alimentario en Perú.

### 4.2 Costo de producción por presentación

El Excel (hoja Costeo) calcula el costo de cada presentación sin IGV, con el control de calidad prorrateado entre 4,400 u/mes (promedio del año 1) y el transporte entre 3,000 u/mes.

| Concepto (S/ sin IGV por presentación) | Unidad suelta | Pack de 6, opción B (bolsitas) | Pack de 6, opción C (sueltos) | Pack de 12 |
|---|---|---|---|---|
| Insumos (sangrecita de res en polvo, S/0.605 por brownie) | 0.605 | 3.63 | 3.63 | 7.26 |
| Maquila (S/0.45 por brownie) | 0.45 | 2.70 | 2.70 | 5.40 |
| Bolsita individual (flow pack) | 0.09 | 0.54 | 0 | 1.08 |
| Etiqueta individual con código único de la app | 0.29 | 0 | 0 | 0 |
| Papel manteca separador | 0 | 0 | 0.06 | 0 |
| Doypack | 0 | 0.53 | 0.53 | 0.70 |
| Etiquetas del doypack con código único de la app | 0 | 0.76 | 0.76 | 0.76 |
| Merma 5 % | 0.07 | 0.41 | 0.38 | 0.76 |
| Control de calidad (microbiológico y hierro por lote), transporte y almacén | 0.235 | 1.41 | 1.41 | 2.82 |
| **Costo de producción por presentación** | **1.74** | **9.98** | **9.47** | **18.78** |
| **Costo de producción por brownie** | **1.74** | **1.66** | **1.58** | **1.56** |
| Precio en stand sin IGV (S/6.00, S/27.90 y S/51.90 con IGV) | 5.08 | 23.64 | 23.64 | 43.98 |
| Margen bruto en stand | 66 % | 58 % | 60 % | 57 % |
| Precio por WhatsApp sin IGV (S/4.00, S/26.90 y S/49.90 con IGV) | 3.39 | 22.80 | 22.80 | 42.29 |
| Margen bruto por WhatsApp | 49 % | 56 % | 58 % | 56 % |

El margen bruto no incluye el espacio del stand, el personal, el delivery, la pasarela, las comisiones ni los costos fijos: esos se calculan en las secciones 4.3, 4.4 y 8. Con la V-P (panela), el costo de producción sería algo menor (diferencial calculado con sangrecita en polvo: S/0.11 por unidad a 3,000 u/mes).

**Versión anterior (modelo v5).** Con sangrecita fresca de pollo (S/0.40 de insumos), etiquetas sin código y control de calidad solo microbiológico, el pack de 6 de la opción B costaba S/8.29 (S/1.38 por brownie), la unidad suelta S/1.43 y el pack de 12 S/15.45. La diferencia de S/1.69 por pack de 6 sale de S/1.23 de insumos, S/0.35 del análisis de hierro por lote, S/0.04 del código de la app y S/0.07 de merma. La opción A (etiqueta en cada brownie) se descartó en una versión anterior (modelo v3) por su costo.

### 4.3 Contribución por brownie y por canal

La contribución es el precio sin IGV menos el costo de producción y los costos variables del canal (degustación y movilidad, delivery, pasarela, renta de 1 %), antes del espacio, los vendedores, las ferias y los costos fijos. Se calcula con la mezcla de presentaciones de cada canal (sección 6.1).

| Canal | Ingreso promedio con IGV por brownie | Costo variable de canal (sin IGV) | Contribución por brownie |
|---|---|---|---|
| Stands y carritos (malls y supermercados) | S/5.44 | S/0.27 + pasarela de 3 % | **S/2.43** |
| Ferias y eventos | S/5.59 | S/0.27 + pasarela de 3 % | **S/2.54** |
| Recompra por WhatsApp e Instagram | S/4.34 | Delivery S/0.80 + pasarela de 3 % | **S/1.07** |
| Colegios (quiosco, AndiBite recibe S/3.00) | S/3.00 | Ruta semanal S/0.10 | **S/0.68** |
| Tiendas naturistas (AndiBite cobra S/17.34 por pack) | S/2.89 | Reposición S/0.15 | **S/0.61** |
| **Promedio** | **S/4.67** | | **S/1.78** |

**Cómo se arma el margen en cada canal.** En venta directa, AndiBite cobra el precio completo, pero paga el delivery, la pasarela y la pauta que trae al cliente. En los canales con intermediario no hay delivery a la casa ni pasarela, pero se entrega entre el 25 y el 40 % del precio. La diferencia de fondo es que en venta directa el costo de canal es casi fijo por pedido (unos S/9.50), así que mejora con pedidos más grandes, mientras que en los otros canales es un porcentaje del precio que no baja con el volumen. Por eso conviene empujar el pack de 12 y la recompra por WhatsApp, y por eso el supermercado necesita un precio en góndola más alto que el directo.

**Lectura.** (1) El stand y la feria dejan más del doble por brownie que la recompra, el colegio o la tienda naturista, porque cobran el precio de lista de físico (S/6.00 la unidad), pero deben pagar el espacio, el vendedor y las ferias (sección 4.4). (2) Un punto de fin de semana con 9 días de atención cuesta S/1,410 al mes (S/600 de espacio y S/810 de vendedor) y se paga con unos 580 brownies al mes, es decir unos 65 por día de atención, a S/2.43 de contribución; la meta es de 80 o más por día. (3) Colegios y tiendas naturistas aportan menos de S/0.70 por brownie, porque su precio no subió y el costo de producción sí: sirven para dar volumen, mostrar la marca ante los padres de un mismo salón y repartir los costos fijos, no como fuente principal de ganancia. (4) Los canales con intermediario solo mejoran con precios en góndola de S/5.30 a 5.50 por unidad y volúmenes altos; por eso el supermercado queda para el año 2.

### 4.4 Costos del canal físico (modelo v6)

| Concepto | Valor | Fuente de referencia |
|---|---|---|
| Espacio por punto de venta (carrito o stand de fin de semana en mall o supermercado) | **S/600 al mes por punto** | Módulo de 2 x 2 m en malls desde S/500 al mes (Gestión, 15-sep-2023); la entrada de un supermercado de Lima Top cuesta algo más (documento 08). Ningún mall ni cadena publica tarifa; se formaliza por contrato |
| Vendedor(a) de stand | **S/90 por día de atención**, en todos los puntos | Computrabajo: S/50 a 90 por día de fin de semana (documento 08). Los socios supervisan y no cubren puntos sin pago |
| Stand en feria de emprendimiento (2 a 3 días) | **S/1,800 por feria**; 3 ferias pagadas al año (S/5,400) | La Feria de Barranco S/1,650 a 2,000; Bazar Navideño CCL S/2,500 + IGV (S/2,950); Navi Fest (documento 08). Cada feria vende 700 unidades [HIPÓTESIS: una mype vende unos S/3,000 por feria de PRODUCE] |
| Evento sin costo (kermés, cumpleaños, feria gratuita) | 150 unidades por evento [HIPÓTESIS] | Documento 08 |
| Costo variable por unidad en stand y feria | S/0.27, más pasarela de 3 % | Degustación (1 brownie regalado por cada 10 vendidos, S/0.17) más movilidad y bolsas (S/0.10) [HIPÓTESIS] |
| Contribución antes de espacio y personal | S/2.43 por brownie en stands y carritos; S/2.54 en ferias y eventos | Excel, hoja Proyeccion |

En el año 1 el espacio suma S/16,800 (28 meses-punto por S/600), los vendedores de stand S/23,670 (263 días-punto por S/90) y las ferias pagadas S/5,400: **S/45,870 en total, S/0.87 por unidad vendida**. Un punto con vendedor durante 9 días cuesta S/1,410 al mes y se paga con unos 580 brownies (65 por día de atención). Cada feria pagada (700 brownies a S/2.54 de contribución, unos S/1,780) casi cubre su costo de S/1,800, y además deja contactos que vuelven por WhatsApp y por la app. El modelo supone unos 85 brownies por día y por punto en promedio, de 50 en enero a 100 en marzo.

### 4.5 La app "Andi, Misión Hierro": costos y papel en la recompra

La app es la innovación tecnológica de AndiBite y se explica completa en el documento 09 (`09-app-andi-mision-hierro.md`). Es una app web instalable (PWA) que se abre con el QR del envase, sin descargar nada de una tienda. En el **modo padres** muestra "Mi lote" (el hierro medido en laboratorio de ese lote, fechas, origen de la sangrecita, registro sanitario y alérgenos), un semáforo de hierro semanal, el plan de loncheras con lista de compras, el recordatorio del control de hemoglobina que indique el pediatra, la recompra en un clic por WhatsApp con el aviso "se te está acabando el pack" y los stands y ferias del fin de semana. El **modo niños** ("Misión Hierro", con la llamita Andi) es educativo: no tiene compras, ni publicidad, ni premios por comprar o comer el producto (Ley 30021, art. 8), y solo pide el apodo y la edad del niño con consentimiento del padre (Ley 29733).

| Costo de la app | Monto | Dónde está en el plan |
|---|---|---|
| Diseño, desarrollo, pruebas y publicación (desarrollador freelance) | S/6,000, una vez | Inversión inicial, línea "Web, dominio y app" (S/6,150) |
| Servidor y base de datos (Cloud Run y Firestore de Google), recordatorios y mantenimiento | S/250 al mes (S/3,000 al año) | Administración (S/1,010 al mes) |
| Código único impreso con dato variable | S/0.04 por etiqueta (etiqueta individual S/0.29; etiquetas del doypack S/0.76); S/120 en el empaque inicial | Costo de producción y empaque inicial |
| Análisis de hierro de cada lote mensual, para publicar el "hierro medido" | S/375 por lote; con el microbiológico de S/250, S/625 por lote (S/0.142 por brownie) | Control de calidad, dentro del costo de producción |

En el año 1, la app y el hierro medido cuestan unos S/8,800 de operación (S/3,000 de servidor y mantenimiento, unos S/1,300 de códigos y S/4,500 de análisis de hierro), además de los S/6,000 de la inversión. **Papel en la recompra.** El plan supone que el 35 % de lo vendido en físico vuelve a comprarse por WhatsApp el mes siguiente; la app es la herramienta que sostiene esa cifra, con el botón de recompra en un clic, el aviso de que el pack se está acabando y el recordatorio semanal. El modelo no le suma ventas extra a la app: la usa para sostener el precio (el padre ve el hierro medido de su lote) y la recompra, y para saber qué se vende en cada punto de venta (relación con el cliente, TC6).

---

## 5. Precio recomendado por canal

| Canal | Formato y precio al público (con IGV) | Precio que recibe AndiBite (con IGV) | Margen del canal | Lógica |
|---|---|---|---|---|
| **Stands, carritos y ferias (venta física, canal principal)** | Unidad **S/6.00**; pack de 6 **S/27.90** (S/4.65 por unidad); pack de 12 S/51.90 (S/4.33 por unidad) | Igual | 0 %; espacio, vendedores y ferias pagadas se pagan aparte (sección 4.4) | Precio de lista en físico: el stand cuesta espacio y vendedor, por eso es mayor que por WhatsApp. La unidad suelta (60 % de lo que se vende en el stand) deja que el niño pruebe delante de la madre y es la que más margen deja (66 % de margen bruto); el pack de 6 (S/4.65 por brownie) y el de 12 son para llevarse. El precio incluye el hierro medido en cada lote y la app. La caja degustación (S/12.00) queda para regalos y pedidos |
| **Recompra por WhatsApp e Instagram (delivery)** | Pack de 6: **S/26.90** (S/4.48 por unidad); pack de 12: S/49.90 (S/4.16 por unidad); unidad o caja degustación de 3: S/4.00 por unidad (S/12.00); delivery gratis desde 2 packs | Igual | 0 % (AndiBite asume el delivery y el 3 % de la pasarela) | Calza con la disposición a pagar de Claudia (S/24 a 28 por pack, de S/4 a 5 por unidad, documento 04). El pack de 12 a S/4.16 por unidad es lo más cerca que se llega a lo que dice Rodrigo (S/3 a 4). Es más barato que el stand para premiar la recompra de quien ya probó, y la app la facilita |
| **Colegios (quiosco)** | Unidad **S/4.00** | S/3.00 | 25 % para el concesionario [HIPÓTESIS, negociar entre 25 y 30 %] | El ancla es el queque de la puerta del colegio (S/2.50 a 3, documento 04). Pagar S/1.00 a 1.50 más se justifica por el hierro y por no tener octógono. Solo entra la V-SO |
| **Tiendas naturistas** | Pack de 6 en anaquel **S/28.90** (S/4.82 por unidad) | S/17.34 por pack | 40 % | El canal necesita entre 35 y 50 % (documento 03). AndiBite cobra S/17.34 con IGV por pack (S/14.69 sin IGV, S/2.45 por unidad) y deja una contribución de S/3.67 por pack (S/0.61 por unidad, opción B) antes de costos fijos. Es un canal de vitrina, no de volumen |
| **Supermercados en góndola** (año 2) | Pack de 6 **S/32.90** (S/5.48 por unidad) [versión anterior; sin redefinir con los precios del modelo v6] | S/19.74 por pack | 35 % + 5 % | Exige GS1, factura, homologación y crédito de 30 a 60 días (documento 03). Solo es viable con 8,000 u/mes o más. En el año 1 se vende dentro del supermercado con carrito propio, en el canal de stands |

**Por qué un mismo producto tiene precios distintos según el canal.** En el stand y en la feria el precio es mayor que por WhatsApp (S/6.00 frente a S/4.00 la unidad, S/27.90 frente a S/26.90 el pack de 6 y S/51.90 frente a S/49.90 el de 12), porque el punto paga espacio y vendedor, y a cambio quien recompra por WhatsApp ahorra. Por regla, el precio al público en tiendas de terceros debe ser igual o mayor que el directo, para que la tienda no compita con la marca ni la marca canibalice a la tienda. En el quiosco se vende la unidad suelta a S/4.00, por debajo del precio del stand, porque es el único canal con ancla de precio de impulso (el queque de la puerta, a S/2.50-3) y porque ahí la compra la hace el niño con su propina, no el adulto. En la tienda naturista el pack sube a S/28.90 en el anaquel para cubrir el 40 % del canal sin destruir la contribución de AndiBite. La diferencia de S/2.00 por pack frente a WhatsApp (S/26.90) es, además, un incentivo para que la familia recurrente migre a la recompra por WhatsApp y al pack de 12.

**Benchmark por 20 g** (documento 02, precios del 03-oct-2026): Nutri H S/3.20 (galleta con hemoglobina bovina, el competidor más cercano); Siete Dragones S/3.01; Fika S/4.00; Mamalama S/4.10; Bimbo Nutra Bien S/1.67. El pack de 6 por WhatsApp a S/26.90 equivale a S/4.48 por brownie, S/0.48 más que Fika (S/4.00) y S/0.38 más que Mamalama (S/4.10), que se venden en góndola, pero no miden su hierro ni traen app. En el stand, el pack de 6 a S/27.90 (S/4.65 por brownie) queda 13 % a 16 % sobre ellos y la unidad a S/6.00, 46 % a 50 % sobre ellos; es el precio de probar en el momento y se debe validar con el Van Westendorp. La diferencia se justifica por el hierro hemínico medido en cada lote, el producto sin octógono, la app y la atención en el punto. Frente a Nutri H, el premio es de 40 % por WhatsApp: hay que comunicar el formato de brownie húmedo, el hierro medido y la aceptación infantil probada. **Disposición a pagar del segmento:** el pack quincenal de S/26.90 suma S/53.80 al mes, es decir el 3.0 % del gasto en alimentos de un hogar B (S/1,795) y el 2.4 % de uno A (S/2,214) (APEIM 2025, documento 04). Estos precios se confirman o se ajustan con el Van Westendorp de la fase 0. Si la mediana de "caro, pero lo compraría" queda por debajo de S/4.00 por unidad, se bajan los precios del pack de 6 en el Excel (hoja Supuestos, celdas C40 a C42) y se recalcula el equilibrio, que hoy es de 3,035 u/mes. Con la unidad de vuelta a S/5.50 en el stand (precio de la versión anterior) en lugar de S/6.00, el resultado del año 1 baja a S/7,069 (sección 8.3).

---

## 6. Ventas del año 1 (enero a diciembre de 2027)

### 6.1 Supuestos por canal (escenario base)

Calendario: las ventas físicas empiezan en enero de 2027 (mes 1). En los colegios privados de Lima las clases empiezan a inicios de marzo y el año termina a mediados de diciembre [HIPÓTESIS, calendario 2027 de Minedu POR CONFIRMAR]; por eso el quiosco se suma desde marzo de 2027 y baja en diciembre. Enero se vende con un solo punto de venta por las vacaciones.

| Canal | Supuesto (base) |
|---|---|
| **Stands y carritos (malls y supermercados)** | Fines de semana, todos con vendedor(a) pagado(a). Puntos de venta: 1 en enero, 2 de febrero a julio, 3 de agosto a diciembre (28 meses-punto). Días de atención por punto: 9 al mes (10 en julio y 12 en diciembre; 263 días-punto en el año). Brownies por día y por punto: de 50 en enero a 100 en marzo (unos 85 en promedio; la meta es 80 o más). Es el 42.9 % de las unidades |
| **Ferias y eventos** | 3 ferias pagadas (1 de campaña escolar en febrero y 2 navideñas en diciembre) con 700 unidades cada una, y 40 eventos sin costo (kermeses, cumpleaños y ferias gratuitas) con 150 unidades cada uno: 1 en enero, 2 en febrero, 4 en marzo y abril, 5 en mayo, 4 en junio, 3 en julio, 4 en agosto y setiembre, 4 en octubre, 3 en noviembre y 2 en diciembre [HIPÓTESIS] |
| **Recompra por WhatsApp e Instagram (delivery)** | El 35 % de las unidades vendidas en stands, carritos y ferias el mes anterior vuelve a comprar por WhatsApp, con recordatorio, el botón de recompra de la app y sin suscripción [HIPÓTESIS]. En enero, 150 pedidos de contactos captados en las degustaciones previas [HIPÓTESIS] |
| **Colegios (quiosco)** | Desde marzo de 2027, de 300 unidades en marzo a 1,500 en octubre y noviembre (unos 5 colegios de 300 u al mes) y 600 en diciembre [HIPÓTESIS]. Sin venta de enero a febrero |
| **Naturistas** | De 120 unidades en enero a 480 en diciembre (unos 8 puntos de 60 u al mes) [HIPÓTESIS]. Pack de 6 por consignación o con factura |
| **Supermercados en góndola** | 0 en el año 1; en el supermercado se vende con carrito propio dentro del canal de stands |

**Cómo se reconcilia con el SOM del documento 04.** El documento 04 calculó 700 hogares núcleo que compran 18 packs al año, es decir 75,600 unidades. El año 1 del modelo vende 52,786 unidades (70 % del SOM), y ya no depende de que cada hogar se registre y recompre cada dos semanas, sino de cuántos brownies se venden por día en cada punto: la venta física es el 58.2 % de las unidades y la recompra por WhatsApp (35 % de lo vendido en físico el mes anterior) es el 17.4 %.

Presentaciones por canal (Excel, hoja Supuestos, sección 6): en stands, 60 % unidad, 35 % pack de 6 y 5 % pack de 12; en ferias, 70 % unidad y 30 % pack de 6; en WhatsApp, 10 % unidad o caja degustación, 60 % pack de 6 y 30 % pack de 12; en colegios, 100 % unidad; en naturistas, 100 % pack de 6. Ingreso promedio por unidad con IGV (hoja Proyeccion): S/5.44 en stands, S/5.59 en ferias, S/4.34 por WhatsApp, S/3.00 en colegios y S/2.89 en naturistas (S/4.67 en promedio).

### 6.2 Escenario base, mes a mes

| Concepto | Ene-27 | Feb-27 | Mar-27 | Abr-27 | May-27 | Jun-27 | Jul-27 | Ago-27 | Set-27 | Oct-27 | Nov-27 | Dic-27 | Total año |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Puntos de venta con stand o carrito | 1 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 3 | 3 | 3 | 3 | 28 meses-punto |
| Días de atención por punto | 9 | 9 | 9 | 9 | 9 | 9 | 10 | 9 | 9 | 9 | 9 | 12 | 112 |
| Brownies por día y por punto | 50 | 80 | 100 | 80 | 85 | 80 | 85 | 85 | 90 | 90 | 90 | 90 | unos 85 (promedio) |
| Stands y carritos (malls y supermercados) | 450 | 1,440 | 1,800 | 1,440 | 1,530 | 1,440 | 1,700 | 2,295 | 2,430 | 2,430 | 2,430 | 3,240 | 22,625 |
| Ferias y eventos | 150 | 1,000 | 600 | 600 | 750 | 600 | 450 | 600 | 600 | 600 | 450 | 1,700 | 8,100 |
| Recompra por WhatsApp e Instagram | 150 | 210 | 854 | 840 | 714 | 798 | 714 | 753 | 1,013 | 1,061 | 1,061 | 1,008 | 9,176 |
| Colegios (quiosco) | 0 | 0 | 300 | 600 | 765 | 900 | 600 | 1,200 | 1,200 | 1,500 | 1,500 | 600 | 9,165 |
| Tiendas naturistas | 120 | 180 | 180 | 240 | 300 | 300 | 360 | 360 | 360 | 420 | 420 | 480 | 3,720 |
| **Total unidades** | **870** | **2,830** | **3,734** | **3,720** | **4,059** | **4,038** | **3,824** | **5,208** | **5,603** | **6,011** | **5,861** | **7,028** | **52,786** |
| **Ventas con IGV (S/)** | 4,286 | 14,865 | 18,280 | 17,333 | 18,784 | 18,224 | 17,710 | 23,757 | 25,620 | 26,901 | 26,062 | 34,709 | 246,531.04 |
| Ventas sin IGV (S/) | 3,633 | 12,598 | 15,492 | 14,689 | 15,919 | 15,444 | 15,008 | 20,133 | 21,712 | 22,798 | 22,086 | 29,414 | 208,924.61 |

### 6.3 Resultado de las ventas por canal y por presentación (año 1, opción B)

| Canal | Unidades | % de las unidades | Ventas con IGV (S/) | % de las ventas | Contribución (S/) | Contribución por unidad (S/) |
|---|---|---|---|---|---|---|
| Stands y carritos (malls y supermercados) | 22,625 | 42.9 % | 123,164.84 | 50.0 % | 54,945.98 | 2.43 |
| Ferias y eventos | 8,100 | 15.3 % | 45,319.50 | 18.4 % | 20,558.89 | 2.54 |
| Recompra por WhatsApp e Instagram | 9,176 | 17.4 % | 39,800.90 | 16.1 % | 9,795.28 | 1.07 |
| Colegios (quiosco) | 9,165 | 17.4 % | 27,495.00 | 11.2 % | 6,188.20 | 0.68 |
| Tiendas naturistas | 3,720 | 7.0 % | 10,750.80 | 4.4 % | 2,275.38 | 0.61 |
| **Total** | **52,786** | **100 %** | **246,531.04** | **100 %** | **93,763.73** | **1.78** |

| Presentación | Unidades | Envases vendidos | Ventas con IGV (S/) | % de las unidades | % de las ventas |
|---|---|---|---|---|---|
| Unidad individual | 29,328 | 29,328 | 146,635.40 | 55.6 % | 59.5 % |
| Pack de 6 | 19,574 | 3,262 | 83,555.93 | 37.1 % | 33.9 % |
| Pack de 12 | 3,884 | 324 | 16,339.72 | 7.4 % | 6.6 % |

**Escenarios.** El Excel calcula solo el escenario base; para probar otro escenario se cambian las celdas azules de las hojas Supuestos y Mensual (puntos de venta, días, brownies por día, eventos y espacio). Las sensibilidades principales están en la sección 8.3.

### 6.4 Por qué medio se vende cada unidad (escenario base) [HIPÓTESIS de mezcla]

| Canal | Medio de pedido | Unidades | Medio de pago | Medio de entrega |
|---|---|---|---|---|
| Stands y carritos | Compra en el punto después de probar (60 % unidad, 35 % pack de 6, 5 % pack de 12); QR a WhatsApp y a la app para el recordatorio | 22,625 | Yape o Plin con QR, POS (Izipay P2 Lite SE) y efectivo | Entrega en mano |
| Ferias y eventos | 3 ferias pagadas (2,100 u) y 40 eventos sin costo, entre kermeses de colegio, cumpleaños y ferias gratuitas (6,000 u) | 8,100 | Ídem | Entrega en mano |
| Recompra por WhatsApp e Instagram | WhatsApp Business con recordatorio al cliente del punto y botón de recompra en un clic desde la app (35 % de lo vendido en físico el mes anterior) más 150 pedidos del primer mes; Instagram con clic a WhatsApp; pack de 12 por pedido | 9,176 | Yape o Plin, transferencia o tarjeta por link de Culqi o Izipay | Motorizado o courier en rutas de martes y viernes por zona; recojo en un punto acordado; delivery gratis desde 2 packs |
| Colegios | Pedido B2B del concesionario por WhatsApp o correo; venta al alumno en el quiosco | 9,165 | Factura electrónica; transferencia a 15 o 30 días | Ruta semanal al colegio |
| Naturistas | Pedido B2B; venta en anaquel | 3,720 | Factura; 30 días o consignación | Reposición quincenal |

---

## 7. Inversión inicial y financiamiento

Todo lo que hace falta para vender desde el primer día está aquí, una sola vez (hoja Inversion del Excel). Los documentos y permisos se tratan como ya obtenidos al abrir las ventas en enero de 2027; su costo es parte de la inversión, no una condición del calendario.

| Rubro | Detalle | S/ |
|---|---|---|
| Documentos y permisos | S.A.C. en un CDE de PRODUCE (notaría) S/150; RUC, Régimen MYPE Tributario, REMYPE y libro de reclamaciones virtual S/0; marca en INDECOPI, clase 30, S/401.20; revisión legal del contrato de maquila S/400; análisis para el registro sanitario S/1,800 (3 × S/600); perfil nutricional y hierro S/1,125 (3 × S/375); estudio de vida útil S/1,050; diseño y validación de la etiqueta S/650; tasa del RS S/0 (documento 03); carnés de sanidad de los 5 socios S/75; póliza de responsabilidad civil para stands S/600 | 6,251.20 |
| Desarrollo del producto | Pruebas caseras (insumos de 3 lotes) S/942.81; endulzantes S/148; análisis preliminar de azúcar y hierro S/750; prueba sensorial con niños S/150; desarrollo y lote piloto en la planta S/1,750 [POR CONFIRMAR] (sección 3) | 3,740.81 |
| Marca y app | Identidad S/800; fotos de producto S/300; web, dominio y app "Andi, Misión Hierro" S/6,150 (web y dominio S/150; app S/6,000: diseño, desarrollo, pruebas y publicación con un desarrollador freelance, documento 09) | 7,250.00 |
| Equipos mínimos y 1 carrito | Equipos S/2,338: balanza S/60; selladora de impulso S/150; 4 moldes S/120; termómetros S/80; 3 coolers S/240; estantería S/350; impresora térmica de lotes S/450; kit de feria (toldo, mesa y banner) S/780; POS S/108. Más 1 carrito de exhibición con vitrina y gráfica, S/2,500 [POR CONFIRMAR; melamina a medida de S/1,150 a 1,350 por metro lineal, documento 08]; los demás puntos usan el kit de feria o el módulo del mall | 4,838.00 |
| Empaque inicial | Mínimos de compra: 5,000 flow packs S/450; 5,000 etiquetas individuales más troquel S/1,330; 1,000 doypacks S/530; 2,000 etiquetas de doypack S/720; código único de la app en las primeras 3,000 etiquetas S/120 | 3,150.00 |
| Stock inicial | Para enero y febrero: insumos con sangrecita en polvo, maquila, control de calidad con hierro por lote, transporte y merma | 4,800.70 |
| Marketing de lanzamiento (enero de 2027) | 600 muestras de degustación S/1,146; 40 packs para influencers S/458; pauta de expectativa S/600; POP S/400; material para ferias y kermeses S/300; video con niños (con consentimiento) S/300 | 3,204.00 |
| Capital de trabajo de 2 meses | Colchón de caja para los primeros meses de venta; con la cuota del préstamo, la caja mínima del año 1 es de S/2,649.79 (sección 8.2) | 8,000.00 |
| Imprevistos 10 % | Sobre todo lo anterior | 4,123.47 |
| **Inversión total** | | **45,358.18** |

| Fuente | Monto (S/) | Condición |
|---|---|---|
| Aporte de los 5 socios | 25,000.00 (S/5,000 cada uno, 55.1 % de la inversión) | Capital de la S.A.C. Si se constituye por un CDE con capital de hasta 1 UIT (S/5,500), se registra ese capital y el resto se aporta como cuenta por pagar a socios [POR CONFIRMAR con el notario] |
| Préstamo | 20,500.00 | 24 cuotas de S/1,150.32 con una TEA de 35 % [POR CONFIRMAR; comparar tasas de microempresa en la SBS]; intereses totales de S/7,107.69; pagos del año 1 de S/13,803.84 (S/8,723.40 de capital y S/5,080.44 de intereses; 6.6 % de las ventas sin IGV). Se eligen 24 cuotas porque con 12 la cuota (unos S/2,000) se come la caja de los primeros meses. Alternativa: préstamo familiar sin intereses |
| Concurso de ProInnóvate (Startup Perú, línea de emprendimientos innovadores) | Hasta unos S/50,000 no reembolsables en convocatorias anteriores, con aporte de contrapartida del equipo [POR CONFIRMAR: el monto y las bases 2026 no se pudieron verificar porque gob.pe/proinnovate bloqueó la consulta] | **No se cuenta en el plan base**: el concurso tarda de 4 a 6 meses y es competitivo. Si se gana, se prepaga el préstamo y se financia el año 2 (GS1, film impreso y supermercado). La app es un buen argumento de innovación para postular |

**Lógica del financiamiento.** Los S/17,242.01 de documentos, desarrollo, marca y app son riesgo puro (ningún banco los financiaría antes de que exista el producto) y los cubre el aporte de los socios. El préstamo ayuda a pagar lo que se convierte en activo o en caja: el carrito y los equipos (S/4,838), el stock, el empaque y el capital de trabajo. Los pagos del préstamo en el año 1 equivalen al 6.6 % de las ventas sin IGV. La regla para los 5 socios es aportar lo mismo y tener la misma participación (20 % cada uno), y dejar escrito en el estatuto de la S.A.C. cómo se suman aportes adicionales si se activa el plan de contingencia.

El total financiado es de S/45,500; quedan S/141.82 adicionales en caja, que sumados al capital de trabajo dan la caja inicial de S/8,141.82 con la que parte la hoja Mensual.

---

## 8. Punto de equilibrio, resultado, flujo de caja y payback

### 8.1 Punto de equilibrio

Costos fijos mensuales: administración S/1,010 (con S/250 de la app) + coordinador(a) comercial y de operaciones en planilla S/709 + marketing S/900 + depreciación de equipos y carrito S/134.39 = **S/2,753.39**. Además, el espacio, los vendedores de stand y las ferias pagadas (S/45,870 al año, S/0.87 por unidad) se descuentan de la contribución: de los S/1.78 que deja cada unidad antes de esos costos, quedan **S/0.91** (Excel, hoja Resumen).

| Concepto | Opción B (bolsitas) | Opción C (sueltos) |
|---|---|---|
| Contribución por unidad después de stands y ferias | S/0.91 | S/0.94 |
| Costos fijos al mes | S/2,753.39 | S/2,753.39 |
| **Punto de equilibrio (unidades al mes)** | **3,035** | 2,934 |
| En packs de 6 equivalentes al mes | 506 | 489 |
| En soles con IGV al mes (a S/4.67 por unidad en promedio) | unos S/14,200 | unos S/13,700 |

El año promedia 4,399 unidades al mes, es decir 45 % más que el equilibrio. El equilibrio es un promedio del año: los meses con un solo punto de venta (enero) o con la feria de campaña escolar y el segundo punto recién abierto (febrero) quedan en negativo aunque el año supere esa cifra. Versión anterior (modelo v5): 2,592 u/mes, con costos fijos de S/2,503.39 al mes.

### 8.2 Resultado operativo y caja mensual del año 1 (escenario base, opción B; S/ sin IGV salvo la primera fila; meses redondeados al sol y totales con centavos; antes de intereses e impuesto a la renta)

| Concepto | Ene-27 | Feb-27 | Mar-27 | Abr-27 | May-27 | Jun-27 | Jul-27 | Ago-27 | Set-27 | Oct-27 | Nov-27 | Dic-27 | Total año |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ventas con IGV | 4,286 | 14,865 | 18,280 | 17,333 | 18,784 | 18,224 | 17,710 | 23,757 | 25,620 | 26,901 | 26,062 | 34,709 | 246,531.04 |
| Ventas sin IGV | 3,633 | 12,598 | 15,492 | 14,689 | 15,919 | 15,444 | 15,008 | 20,133 | 21,712 | 22,798 | 22,086 | 29,414 | 208,924.61 |
| Contribución (opción B) | 1,707 | 6,370 | 7,119 | 6,469 | 7,081 | 6,663 | 6,658 | 8,931 | 9,536 | 9,827 | 9,446 | 13,958 | 93,763.73 |
| Espacio para stands y carrito | −600 | −1,200 | −1,200 | −1,200 | −1,200 | −1,200 | −1,200 | −1,800 | −1,800 | −1,800 | −1,800 | −1,800 | −16,800 |
| Vendedores de stand | −810 | −1,620 | −1,620 | −1,620 | −1,620 | −1,620 | −1,800 | −2,430 | −2,430 | −2,430 | −2,430 | −3,240 | −23,670 |
| Ferias pagadas | 0 | −1,800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | −3,600 | −5,400 |
| Costos fijos | −2,753 | −2,753 | −2,753 | −2,753 | −2,753 | −2,753 | −2,753 | −2,753 | −2,753 | −2,753 | −2,753 | −2,753 | −33,040.67 |
| **Resultado operativo (opción B)** | **−2,456** | **−1,004** | **1,545** | **895** | **1,508** | **1,090** | **905** | **1,947** | **2,553** | **2,843** | **2,462** | **2,565** | **14,853.06** |
| Resultado acumulado | −2,456 | −3,460 | −1,915 | −1,020 | 488 | 1,578 | 2,483 | 4,430 | 6,983 | 9,826 | 12,288 | 14,853 | 14,853.06 |
| Cuota del préstamo (24 cuotas) | −1,150 | −1,150 | −1,150 | −1,150 | −1,150 | −1,150 | −1,150 | −1,150 | −1,150 | −1,150 | −1,150 | −1,150 | −13,803.84 |
| **Caja al cierre del mes** | **4,670** | **2,650** | **3,179** | **3,058** | **3,550** | **3,624** | **3,513** | **4,444** | **5,981** | **7,808** | **9,255** | **10,804** | **10,803.71** |

La caja parte de S/8,141.82 (capital de trabajo de S/8,000 más lo que sobra de la inversión) y cada mes suma el resultado y la depreciación (que no sale de caja) y resta la cuota del préstamo, que incluye capital e intereses. Es una caja simplificada [HIPÓTESIS]: no modela el desfase de cobranzas a colegios y naturistas (30 días), el pago anticipado de la producción del mes siguiente ni el pago del impuesto a la renta anual (S/1,186.19, que se paga después del cierre del año); esos desfases se deben revisar con el contador cuando haya ventas reales.

**Lectura.** (1) Enero cierra en −S/2,456: hay un solo punto de venta con su vendedor, 870 unidades y un evento sin costo, y la inversión en marketing de lanzamiento ya está pagada. (2) Febrero cierra en −S/1,004: abre el segundo punto, que suma espacio y vendedor, y se paga la feria de campaña escolar (S/1,800). (3) El resultado acumulado es negativo hasta abril (−S/1,020) y positivo desde mayo de 2027 (S/488). De marzo a diciembre el resultado mensual está entre S/895 y S/2,843. (4) Diciembre vende 7,028 unidades (S/34,709 con IGV) y deja S/2,565 aun con las dos ferias navideñas (S/3,600) y tres puntos de 12 días con vendedor (S/3,240). (5) La caja baja a S/2,649.79 en febrero de 2027, su mínimo (algo menos de un mes de costos fijos, que son S/2,753), y cierra el año en S/10,803.71; el capital de trabajo de S/8,000 es lo que sostiene enero y febrero. La cuota del préstamo, más alta que en la versión anterior, hace que la caja suba despacio de marzo a julio.

### 8.3 Resultado del año 1, utilidad neta, payback y sensibilidad

| Concepto (S/ sin IGV) | Opción B (bolsitas) | Opción C (sueltos) |
|---|---|---|
| Ventas sin IGV | 208,924.61 | 208,924.61 |
| Producción y costos variables de canal | −115,160.88 | −113,516.64 |
| **Contribución** | **93,763.73** | **95,407.98** |
| Espacio para stands y carrito | −16,800.00 | −16,800.00 |
| Vendedores de stand | −23,670.00 | −23,670.00 |
| Ferias pagadas | −5,400.00 | −5,400.00 |
| Administración (con la app) | −12,120.00 | −12,120.00 |
| Coordinador(a) comercial y de operaciones (planilla) | −8,508.00 | −8,508.00 |
| Marketing | −10,800.00 | −10,800.00 |
| Depreciación | −1,612.67 | −1,612.67 |
| **Resultado operativo** | **14,853.06** | **16,497.31** |
| **Margen operativo** | **7.1 %** | **7.9 %** |
| Inversión inicial | −45,358.18 | −45,358.18 |
| **Resultado del año 1 menos la inversión** | **−30,505.12** | **−28,860.87** |

**De resultado operativo a utilidad neta (año 1, opción B).**

| Concepto | S/ |
|---|---|
| Resultado operativo | 14,853.06 |
| Más: pagos a cuenta de renta (1 % de las ventas sin IGV) ya restados en el costo de canal | +2,089.25 |
| Menos: intereses del préstamo en el año 1 | −5,080.44 |
| **Utilidad antes de impuestos** | **11,861.87** |
| Menos: impuesto a la renta del Régimen MYPE Tributario (10 % hasta 15 UIT de utilidad) | −1,186.19 |
| **Utilidad neta del año 1** | **10,675.68** |

El resultado operativo ya incluye a todo el personal que opera el negocio (vendedores de stand y coordinador en planilla). Los socios son dueños y directorio: no cobran un sueldo operativo y reciben las utilidades que decida distribuir la S.A.C. Los gastos de documentos, desarrollo, marca y desarrollo de la app no se descuentan aparte: son parte de la inversión.

**Payback.** La inversión **no se recupera en el año 1**: faltan S/30,505.12 (opción B). Con el año 2 al ritmo de octubre a diciembre de 2027 (unos S/2,623 al mes), se recupera en el **mes 24 (diciembre de 2028)**; con la opción C, en el mes 23 [el Excel proyecta el año 2 con ese ritmo y sin estacionalidad de enero y febrero].

**Sensibilidad** (Excel; cada fila cambia un solo dato del escenario base):

| Escenario | Resultado operativo del año 1 | Mes de recuperación de la inversión |
|---|---|---|
| Base | S/14,853 | 24 (diciembre de 2028) |
| Ventas −20 % | S/2,414 | 51 (la caja baja a −S/2,163) |
| Ventas +20 % | S/27,291 | 17 |
| Espacio a S/1,000 por punto al mes | S/3,653 | 42 |
| Maquila a S/0.55 por brownie | S/9,311 | 31 |
| Sangrecita en polvo a S/417 por kg (precio de sobre en tienda) | S/9,421 | 31 |
| Unidad de vuelta a S/5.50 en el stand y la feria (precio de la versión anterior) | S/7,069 | 35 |
| Análisis de hierro cada 2 lotes en vez de cada lote | S/17,102 | 22 |

**Lectura de la sensibilidad.** El plan depende sobre todo del volumen y del costo del espacio. Con ventas 20 % menores, el año casi no deja resultado (S/2,414), la recuperación se va al mes 51 y **la caja se vuelve negativa (−S/2,163)**: el capital de trabajo de S/8,000 no alcanza para cubrir la cuota del préstamo. En ese caso haría falta una línea de crédito de capital de trabajo o un aporte extra de los socios (el plan de contingencia prevé S/2,500 por socio, S/12,500 en total), y conviene dejarlo acordado antes de abrir. Comprar el polvo en sobre de tienda o pagar más maquila le quita unos S/5,500 al año, por eso se negocian contratos a granel y por volumen. Medir el hierro cada 2 lotes mejoraría el resultado (S/17,102), pero se mantiene el análisis de cada lote porque el "hierro medido" que el padre ve en la app es la base del precio.

**Advertencias.** (1) Todo el personal operativo (vendedores de stand y coordinador) está pagado dentro del resultado; los socios, como dueños y directorio, se remuneran con las utilidades y no con un sueldo operativo. (2) La utilidad neta de S/10,675.68 se calcula después de intereses y renta, pero antes de devolver capital del préstamo (S/8,723.40 en el año 1). (3) **Plan de contingencia:** si el promedio de brownies por día y por punto cae por debajo de 65 durante dos meses seguidos [HIPÓTESIS; es lo que hace falta para pagar el espacio y el vendedor de un punto de 9 días], se cierran los puntos que no cubren sus S/1,410 al mes, se cancelan las ferias pagadas que falten, se sigue con los mejores puntos, los colegios y los eventos sin costo, y, si la caja baja de lo previsto en el modelo o, desde marzo de 2027, de un mes de costos fijos (S/2,753), se usa la línea de crédito o cada socio aporta S/2,500 adicionales (S/12,500) y se replantea el precio o el formato antes de seguir.

---

## 9. Riesgos, mitigaciones y KPIs

### 9.1 Diez riesgos

| # | Riesgo | Impacto | Mitigación |
|---|---|---|---|
| 1 | El espacio del stand o del carrito cuesta más que los S/600 por punto al mes del plan (ningún mall ni cadena publica tarifa) o el mall no da el espacio | Alto: son S/16,800 al año; a S/1,000 por punto, el resultado baja a S/3,653 y la recuperación pasa al mes 42 | Pedir cotización escrita a 5 malls, a InRetail y a Cencosud (plantilla del documento 08); empezar por programas de emprendedores, gratuitos o simbólicos, y pop-ups de fin de semana; cambiar el valor en la hoja Supuestos (B57) apenas lleguen las cotizaciones |
| 2 | Cada punto vende menos de 80 brownies por día (el modelo usa unos 85 en promedio, de 50 a 100) | Muy alto: con ventas 20 % menores el resultado del año baja a S/2,414, la recuperación pasa al mes 51 y la caja llega a −S/2,163 | Degustación en el punto, elegir pasillos de alto tráfico, medir ventas por día y por hora, mover o cerrar puntos que no rindan; sumar eventos sin costo y colegios; enero ya supone un solo punto; dejar acordada antes de abrir una línea de crédito o el aporte extra de los socios |
| 3 | Rotación o mala atención de los vendedores de stand (S/90 por día) y falta de tiempo de los socios para supervisar, en temporada de exámenes | Medio-alto | Bolsa de 3 o 4 vendedores con carné de sanidad y guion de venta, turnos de supervisión rotativos de los socios, coordinador(a) en planilla que lleva el stock y los pedidos, plantillas de WhatsApp Business y producción tercerizada |
| 4 | Ninguna planta acepta lotes de 3,000 a 5,000 unidades o la maquila supera los S/0.45 por brownie | Alto: a S/0.55 el resultado baja a S/9,311 (unos S/5,500 al año por cada S/0.10 de más) y la recuperación pasa al mes 31 | Cotizar 4 plantas; usar INDDA para las "primeras maquilas"; negociar corridas bimestrales, siempre dentro de la vida útil |
| 5 | Escasez, alza de precio o falla de calidad de la sangrecita de res en polvo (S/300 por kg a granel, de un proveedor con registro sanitario) | Medio-alto: es el insumo crítico; a S/417 por kg (precio de sobre en tienda) el resultado baja a S/9,421 y la recuperación pasa al mes 31 | Homologar 2 proveedores con registro sanitario y pedir ficha técnica y certificado por lote; comprar a granel con 2 a 3 meses de stock (el polvo dura más); medir el hierro de cada lote; la AndiBite S.A.C. compra el insumo y se lo entrega a la planta, que solo lo hidrata |
| 6 | Los niños rechazan la V-SO (sensación fría del eritritol, poco dulzor) | Alto | Filtro de la fase 0 con la V-P como respaldo; mezcla con alulosa si DIGESA confirma que no cuenta como azúcar; más plátano y canela. El stand permite medirlo en vivo con la degustación |
| 7 | El laboratorio cuenta la alulosa como azúcar u observa el claim de hierro | Medio | Basar la fórmula en eritritol; declarar "fuente de hierro" solo con análisis; publicar en la app solo el hierro medido por el laboratorio; nunca decir "previene la anemia" (D. Leg. 1044, documento 03); en la app, Andi no recomienda el brownie ni hay premios por comprar (Ley 30021, art. 8; documento 09) |
| 8 | La recompra por WhatsApp es menor al 35 % de lo vendido en físico el mes anterior | Medio: son 9,176 unidades (17.4 %) y S/9,795 de contribución | Captar el WhatsApp de cada cliente del stand con QR y cupón; que el padre escanee el código del envase y use la app (botón de recompra en un clic y aviso de "se te está acabando el pack"); recordatorio a los 12 días; rotar un sabor de temporada; si baja de 20 % en dos meses, reforzar el contacto en el punto antes de gastar en pauta |
| 9 | Caja ajustada: la mínima es S/2,649.79 en febrero de 2027 y la caja es simplificada (sin desfase de cobranzas) | Alto si se combina con los riesgos 1 y 2: con ventas 20 % menores la caja llega a −S/2,163 | Plan de contingencia (sección 8.3); línea de crédito o aporte extra de los socios acordados antes de abrir; nada de crédito a canales mientras no haya 2 meses de caja; revisar la caja con el contador cuando haya ventas reales |
| 10 | Incidente de inocuidad (moho, vida útil menor a la declarada, mala manipulación en el stand) | Muy alto para una marca infantil | La planta no manipula sangre cruda (solo hidrata polvo con registro sanitario); estudio de vida útil, análisis microbiológico de cada lote, contramuestras, rotación FIFO, vencimiento corto (60 días) al inicio, carné de sanidad vigente y cadena de manipulación en el stand |

### 9.2 KPIs del año 1

**Gobierno de los indicadores.** Carlos Inga consolida los KPIs todos los domingos en la hoja de pedidos (el mismo Google Sheets del plan de marketing anterior) y el equipo los revisa en 30 minutos. Hay tres semáforos que obligan a decidir sin esperar el cierre del trimestre: menos de 65 brownies por día y por punto durante dos fines de semana seguidos [HIPÓTESIS], la caja por debajo de lo previsto en el modelo (o, desde marzo de 2027, por debajo de un mes de costos fijos) y el costo de producción por encima de S/1.90 por brownie en dos lotes seguidos. Cualquiera de los tres activa una reunión extraordinaria y, si corresponde, el plan de contingencia de la sección 8.3.

| KPI | Meta (base) | Frecuencia |
|---|---|---|
| Brownies por día y por punto de venta | 80 o más (el modelo usa unos 85 en promedio: de 50 en enero a 100 en marzo) | Cada fin de semana |
| Unidades vendidas al mes | Al menos 3,035 (equilibrio); promedio de 4,399 en el año; de 5,208 a 7,028 de agosto a diciembre | Semanal |
| Recompra por WhatsApp | 35 % de las unidades vendidas en físico el mes anterior | Mensual |
| Puntos de venta activos | 1 en enero; 2 de febrero a julio; 3 de agosto a diciembre | Mensual |
| Brownies por evento | 700 o más en feria pagada; 150 o más en evento sin costo | Por evento |
| Espacio por punto | S/600 o menos al mes | Por contrato |
| Costo de producción puesto en almacén | S/1.66 o menos por brownie en el pack de 6 (opción B; S/9.98 el pack) | Por lote |
| Hierro medido publicado en la app | El análisis de hierro de cada lote publicado en "Mi lote" (100 % de los lotes) | Por lote |
| Contribución por unidad | S/1.78 o más antes de stands y ferias; S/0.91 o más después | Mensual |
| Resultado operativo mensual | Positivo todos los meses desde marzo de 2027 (el modelo da entre S/895 y S/2,843) | Mensual |
| Utilidad neta del año | S/10,676 (después de intereses y renta) | Trimestral |
| Merma y vencidos | 5 % o menos; vencidos 2 % o menos | Por lote |
| Colegios y naturistas activos | Unos 5 colegios y 8 naturistas a fines de 2027 [HIPÓTESIS] | Mensual |
| Aceptación sensorial | Al menos 75 % de caritas 4 y 5 en cada lote nuevo | Trimestral |
| Caja | La prevista en el modelo (mínimo de S/2,650 en febrero de 2027) y, desde marzo, al menos 1 mes de costos fijos (S/2,753) | Semanal |
| Entregas a tiempo y reclamos | Al menos 95 % a tiempo; menos de 1 % de reclamos en el libro | Mensual |

---

## Fuentes

Documentos del equipo (base de todas las cifras no marcadas): `00-BRIEF-reformulacion.md`, `01-producto-sabores-y-recetas.md` (receta 5, sangrecita en polvo; hierro de la sangrecita y del hígado de pollo), `02-insumos-proveedores-y-costeo.md`, `03-maquila-regulacion-y-permisos.md`, `04-publico-objetivo-y-buyer-persona-con-datos.md`, `08-venta-fisica-stands-y-ferias.md`, `09-app-andi-mision-hierro.md` (app y sus costos), `Costeo-presentaciones-AndiBite.xlsx` (modelo v6) y `03-entregables/04-plan-marketing-y-ventas-12-meses.md`.

Fuentes externas consultadas el 03-oct-2026:
1. Culqi, tarifas: https://culqi.com/precios/
2. Izipay, productos y comisiones: https://www.izipay.pe/
3. La Purita, costo de delivery por distrito: https://www.lapurita.com/pages/costo-de-delivery y política de envíos: https://www.lapurita.com/policies/shipping-policy
4. Fika, brownie de 70 g con alulosa "sin octógonos": https://www.fika.pe/products/brownie-55g ; envíos: https://www.fika.pe/policies/shipping-policy
5. Plaza Vea, alulosa Lakanto 454 g: https://www.plazavea.com.pe/endulzante-alulosa-lakanto-classic-natural-doypack-454g-20634058/p
6. Wong, Lakanto Classic 800 g (eritritol y fruto del monje): https://www.wong.pe/endulzante-classic-lakanto-doypack-800-g-2/p ; Lakanto con alulosa 454 g: https://www.wong.pe/endulzante-de-fruto-del-monje-con-alulosa-lakanto-classic-454g-1043560/p
7. modelo.pe, Régimen MYPE Tributario 2026 (IGV de 18 %, pago a cuenta de 1 %, renta de 10 % y 29.5 %): https://modelo.pe/blog/regimen-mype-tributario-rmt-2026-tasas-limites/
8. Codex CXG 2-1985, definición de azúcares: https://www.fao.org/input/download/standards/34/CXG_002s_2015.pdf
9. FDA, declaración de la alulosa en el etiquetado: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-declaration-allulose-and-calories-allulose-nutrition-and-supplement-facts-labels
10. EFSA, re-evaluación del eritritol (E 968), 2023 [POR CONFIRMAR enlace]: https://www.efsa.europa.eu/en/efsajournal/pub/8430
11. Witkowski M. et al., "The artificial sweetener erythritol and cardiovascular event risk", *Nature Medicine* 2023: https://www.nature.com/articles/s41591-023-02223-9
12. ProInnóvate (consulta bloqueada, HTTP 418): https://www.gob.pe/proinnovate
13. Del documento 03: RM 195-2019-MINSA (quioscos), Comunicado 05-2026-DIGESA (RS sin costo), tarifas de INDECOPI 2026, UIT de S/5,500 y tesis de la UDEP sobre maquila (S/0.83 por empaque). Del documento 02: precios de insumos, empaque, sangrecita en polvo (Malli y Allpa Manta) y competidores. Del documento 04: APEIM, CPI, Ipsos, Kantar y el SOM.
