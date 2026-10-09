# 05. Plan comercial y financiero de AndiBite 2.0

**9-oct-2026: el equipo eliminó por ahora la suscripción; el pack de 12 se vende por pedido.**

Versión 1, 3 de octubre de 2026. Documento de consultoría de mercados y finanzas para el Grupo 2 (Diana Ayoso, Carlos Inga, Angie Blas, Patricia Cárdenas y Adela Robles). Integra los documentos 00 a 04 de esta carpeta y los convierte en un plan de empresa: qué se lanza, cómo se opera, cuánto cuesta, a qué precio se vende, cuánto se espera vender, cuánta plata hace falta y en qué momento se recupera.

**Nota del 9 de octubre de 2026: precios confirmados.** El equipo confirmó los precios finales y la fuente de las cifras de precios, ventas, equilibrio y resultado es el Excel `04-reformulacion/Costeo-presentaciones-AndiBite.xlsx` (hojas Resumen, Supuestos, Proyeccion, Costeo y Mensual; se regenera con `build_costeo.py`). Este documento se alineó con ese Excel. Precios con IGV: venta directa, unidad S/4.00, pack de 6 S/24.90 y pack de 12 S/46.90; ferias, S/5.00, S/26.00 y S/48.00; colegios, S/3.00 para AndiBite (el alumno paga S/4.00); tienda naturista, S/17.34 por pack de 6 para AndiBite (anaquel S/28.90, con 40 % para la tienda). El pack de 6 recomendado es la opción B (bolsitas individuales). Lo marcado como "versión anterior" (precios de S/27.00 y S/49.00, costo de la opción A, equilibrio de 3,500 u/mes) se conserva solo como comparación. Los soles de los escenarios pesimista y optimista, el flujo de caja (sección 8.2) y el estado de resultados completo (sección 8.3) todavía no se recalculan con los precios confirmados.

**Convenciones.** [HIPÓTESIS] = supuesto del equipo con su lógica explícita. [POR CONFIRMAR] = dato que no se pudo verificar en una fuente primaria y que se debe cotizar. Todas las cifras están en soles. Los precios al público incluyen IGV; los márgenes, costos y flujos se calculan **sin IGV**, porque el IGV que se cobra y el que se paga se compensan como crédito fiscal. El modelo de cálculo (recetas, costos por volumen, ventas, flujo) se hizo en una sola hoja para que todas las cifras de este documento cuadren entre sí.

**Limitación de búsqueda.** En esta sesión se agotó el cupo de búsquedas web. Se consultaron directamente las páginas de Culqi, Izipay, La Purita, Fika, Plaza Vea, Wong y modelo.pe. Las páginas de Mercado Pago, Mercado Libre, Rappi, PedidosYa, Yape Empresas y ProInnóvate bloquearon la consulta (HTTP 403, 404 o 418). Esos datos van marcados [POR CONFIRMAR].

---

## 0. Resumen ejecutivo

1. **Decisión central:** lanzar desde el primer día la **versión sin octógono**: cada brownie de 20 g endulzado con eritritol, plátano maduro y solo 15 g de panela por lote tiene entre 4.6 y 7.1 g de azúcar total por 100 g (el octógono se activa con 10 g). La versión con panela queda como plan B ya validado.
2. **Sabores de lanzamiento:** Choco Clásico con chispas sin azúcar, Choco-Plátano-Canela con cañihua y Choco-Lúcuma. El SKU principal es el pack de 6 x 20 g; se suman el pack de 12 "Semana completa" y la caja degustación de 3 sabores.
3. **Costo de producción puesto en almacén**, con maquila y sangrecita en polvo, en la opción A (etiqueta en cada brownie; versión anterior): S/2.52 por unidad a 1,000 u/mes, S/1.91 a 3,000 y S/1.32 a 8,000. Por pack de 6: S/15.15, S/11.48 y S/7.95. Con la opción B recomendada (bolsitas individuales, sin etiqueta por brownie) a 3,000 u/mes: S/9.90 por pack de 6 (S/1.65 por unidad); la unidad suelta cuesta S/1.69 y el pack de 12, S/18.66 (S/1.56 por unidad).
4. **Costo total unitario en venta directa** (con delivery, pasarela, marketing, administración, depreciación y renta): S/5.86, S/3.84 y S/2.74 (versión anterior: opción A y pasarela calculada sobre S/4.50). Por debajo de 3,000 u/mes el negocio no se sostiene a ningún precio razonable.
5. **Precios confirmados (9-oct-2026):** en venta directa, pack de 6 a **S/24.90** (S/4.15 por unidad), pack de 12 a S/46.90 (S/3.91 por unidad) y unidad a S/4.00 (caja degustación de 3 a S/12.00); en ferias, unidad S/5.00, pack de 6 S/26.00 y pack de 12 S/48.00; quiosco escolar a S/4.00 la unidad (AndiBite le vende al concesionario a S/3.00); tienda naturista con anaquel de S/28.90 por pack de 6, de los cuales AndiBite cobra S/17.34. Versión anterior: S/27.00, S/49.00 y S/31.90.
6. **Margen bruto en venta directa** (precio sin IGV menos costo de producción, opción B): 50.0 % en la unidad, 53.1 % en el pack de 6 y 53.1 % en el pack de 12. Después de los costos de canal, la contribución promedio es de S/0.86 por unidad. Versión anterior, a S/4.50: margen neto de −S/0.03 (−1 %) a 3,000 u/mes y S/1.07 (28 %) a 8,000 u/mes.
7. **Ventas del año 1** (marzo 2027 a febrero 2028, año escolar 2027 más las vacaciones de verano): escenario base de **76,335 unidades y S/302,900.36 con IGV** (S/256,695.22 sin IGV), en línea con el SOM de 75,600 unidades del documento 04. Escenario pesimista: 33,249 u. Optimista: 154,687 u. Los soles de esos dos escenarios están por recalcular con los precios confirmados (versión anterior: S/139,987.53 y S/642,863.64; en el base, S/319,869.33).
8. **Mezcla de canales en el escenario base:** 79 % venta directa por WhatsApp e Instagram, 9.5 % quioscos escolares, 7.4 % ferias y eventos y 4.1 % tiendas naturistas. El supermercado queda para el año 2.
9. **Inversión inicial: S/34,484.24**, que incluye desarrollo, laboratorio, marca, equipos, empaque y stock inicial, marketing de lanzamiento, capital de trabajo de 2 meses e imprevistos. Se financia con S/25,000 de los socios (S/5,000 cada uno) y un préstamo de S/10,000; un concurso de ProInnóvate queda como mejora posible, no como base.
10. **Punto de equilibrio:** 3,308 unidades al mes (551 packs de 6 equivalentes; 3,144 unidades con la opción C), equivalentes a unos S/13,127 con IGV al mes, con costos fijos de S/2,856.67 al mes. En el escenario base se alcanza en abril de 2027 (marzo cierra en −S/420). Versión anterior, a S/27.00: 3,500 u/mes (583 packs); el mes de equilibrio de los escenarios optimista y pesimista (abril y setiembre de 2027 en la versión anterior) está por recalcular.
11. **Resultado operativo del año 1 en el escenario base:** **S/31,637.96 (12.3 % de las ventas sin IGV)** con la opción B y S/35,083.20 (13.7 %) con la opción C, antes de intereses (S/1,721), gastos preoperativos (S/13,846) e impuesto a la renta. Sale de una contribución de S/65,917.99 menos costos fijos de S/34,280.04. Ojo: los socios no cobran sueldo. Versión anterior: utilidad neta de S/37,152.32 (13.7 %).
12. **Payback:** por recalcular con los precios confirmados. Con el resultado operativo acumulado del Excel (S/31,638 a febrero de 2028) todavía faltan unos S/2,846 para cubrir la inversión de S/34,484.24, de modo que, con este cálculo aproximado, se recupera después del año 1 (versión anterior: 9 meses de operación, noviembre de 2027). En el escenario pesimista de la versión anterior no había recuperación en el año 1 y la caja tocaba −S/10,731.60; hace falta un plan de contingencia.
13. **Sensibilidad:** si la maquila sale a S/0.60 en todos los volúmenes y el polvo de sangrecita se paga al precio público de Malli (S/417 por kg), la utilidad antes de impuestos del escenario base cae en unos S/22,300 (cifra de la versión anterior, por recalcular), pero sigue siendo positiva.
14. **Régimen tributario:** S.A.C. en el Régimen MYPE Tributario (IGV de 18 %, pago a cuenta de 1 % y renta de 10 % sobre las primeras 15 UIT de utilidad) con facturación electrónica desde el primer día.
15. **Lo que hay que confirmar antes de firmar:** tarifa y lote mínimo de la maquila, precio del polvo de sangrecita a granel, aceptación infantil de la versión con eritritol y el plazo real del registro sanitario.

---

## 1. Correcciones explícitas a los documentos 01 a 04

| Documento | Qué decía | Qué se corrige aquí y por qué |
|---|---|---|
| 02, sección 3 | Costeaba una receta de unos 1,150 g de masa como si rindiera 24 unidades y suponía polvo de sangrecita a S/120 por kg | Se costean las recetas del documento 01 (560 a 660 g de masa para 24 unidades de 20 g), que son las que irán a la maquila, con los precios del documento 02. Para el polvo de sangrecita se usa S/417 por kg (precio público de Malli) a 1,000 u/mes, S/300 a 3,000 y S/200 a 8,000 [HIPÓTESIS de descuento por volumen]. S/120 por kg no tiene cotización y era demasiado optimista |
| 01, sección 4 | "Todas las variantes superan el octógono"; quedaba abierto si el azúcar del plátano cuenta | Vale para la versión con azúcar o panela. Se agrega la versión sin octógono (sección 2.3). Siguiendo al documento 03, el azúcar del plátano **sí cuenta**, porque el parámetro es azúcar total |
| 01, recetas | Endulzaban con azúcar rubia | La versión de comparación usa panela, como piden el brief y el documento 02 |
| 04, sección 1.11 | SOM del año 1 entre octubre de 2026 y setiembre de 2027, a S/4.00 por unidad | Sin registro sanitario no se puede vender (documento 03), y el RS llega en el mes 5. El año comercial 1 pasa a **marzo 2027 - febrero 2028**. El volumen se mantiene (76,335 frente a 75,600 unidades), pero el precio directo sube a S/4.15 por unidad en el pack de 6 (S/24.90; en la versión anterior de este documento, S/4.50) porque la versión sin octógono y el delivery lo exigen |
| 03-entregables/04 (plan de marketing anterior) | Ventas desde octubre de 2026 | Se elimina toda venta antes del RS. Hasta febrero de 2027 solo hay degustaciones sin venta y lista de espera |
| Nombre | El documento 04 y el plan anterior dicen "AndyBites"; el brief y los documentos 01 a 03 dicen "AndiBite" | Se usa AndiBite hasta que salga la búsqueda fonética de INDECOPI |

---

## 2. Decisiones de diseño del negocio

### 2.1 Sabores de lanzamiento (3)

| Sabor | Por qué entra | Evidencia |
|---|---|---|
| **Choco Clásico** con chispas sin azúcar | Es la puerta de entrada y el que mejor camufla la sangrecita | El chocolate es el sabor número 1 en niños de 6 a 12 años y 7 de cada 10 prefieren el de leche (documento 01, fuentes 12 y 22). En el focus 1 las madres eligieron el brownie porque "es chocolate" |
| **Choco-Plátano-Canela** con cañihua | Es el concepto original validado en las semanas 1 a 4. El plátano permite bajar el azúcar y la cañihua cuenta la historia andina | Es la receta con menos azúcar (documento 01) y la base natural de la versión sin octógono |
| **Choco-Lúcuma** | Le da identidad peruana y premium para Lima Top y Lima Moderna | La lúcuma es de los sabores de helado más vendidos del país. El riesgo medio de que se note la sangrecita se controla con 30 a 32 g de cocoa |

**Por qué tres sabores y no más.** El dolor que el documento 04 encontró es el de los jueves: "ya no sé qué mandar". Con tres sabores, el pack de 6 da dos rotaciones completas en una semana escolar de cinco días, y eso basta para que la lonchera se sienta variada. Un cuarto sabor desde el inicio tiene tres costos: subiría el número de análisis de laboratorio (cada sabor puede necesitar su propio registro si DIGESA no los acepta como grupo, documento 03), haría más cara la corrida mínima de la maquila y repartiría la demanda de un lote pequeño en más referencias, con más riesgo de vencimiento. Además, los tres comparten la misma base técnica (cocoa, polvo de sangrecita, huevo y aceite), así que la planta los produce en la misma línea cambiando solo el sabor final. Eso abarata el cambio de formato y ayuda a pedir el registro como grupo.

Quedan fuera del lanzamiento el maní y la pecana, porque son alérgenos mayores y muchos colegios los restringen. Choco-Naranja y Choco-Fresa quedan como ediciones de temporada en el año 2.

### 2.2 Formatos

| Formato | Contenido | Para quién y para qué | Precio directo con IGV |
|---|---|---|---|
| **Pack de 6 x 20 g (SKU principal)** | 2 unidades de cada sabor en bolsita individual (flow pack) sin etiqueta, dentro de un doypack kraft con zipper y etiquetas (opción B) | Claudia: una semana de lonchera con variedad y una recompra cada 2 semanas (documento 04) | S/24.90 (S/4.15 por unidad) |
| **Pack de 12 "Semana completa"** | 4 de cada sabor | Familias con 2 hijos (Claudia tiene a Matías y Luciana) o compra quincenal. Es el pack para la compra quincenal, que se vende por pedido (sin suscripción ni compromiso), con delivery gratis desde 2 packs y recordatorio de recompra opcional por WhatsApp | S/46.90 (S/3.91 por unidad, 5.8 % menos) |
| **Caja degustación de 3 sabores** | 1 unidad de cada sabor | Primera compra, ferias, regalos de cumpleaños y muestra para el pediatra. Trae un cupón de S/3.00 para el primer pack de 6 | S/12.00 (S/4.00 por unidad) |

**Lógica de la arquitectura de precios.** El pack de 6 es el producto que se compra cada dos semanas y fija la percepción de precio (S/4.15 por unidad). El pack de 12 premia la planificación, que es el rasgo central del público objetivo: es 5.8 % más barato por unidad y concentra pedidos, que es lo que más reduce el costo de delivery (con 12 unidades por pedido, el delivery cae de S/0.95 a S/0.79 por unidad). La caja degustación no busca margen: es la herramienta para que el niño pruebe delante de la madre, que es la condición de compra que identificó el focus 1. Por eso se vende a S/4.00 por unidad (S/12.00 la caja), un precio cercano al del pack de 6 (S/4.15) para no devaluar la marca, y lleva el cupón que empuja a la segunda compra.

Solo la unidad que se vende suelta (quioscos y ferias) lleva etiqueta individual de rotulado completo. En el pack de 6 de la opción B, recomendada, los brownies van en bolsitas sin etiqueta y el rotulado va en el doypack; la opción A (etiqueta en cada brownie) es la versión anterior.

### 2.3 Estrategia frente al octógono "Alto en azúcar"

**Propuesta de versión sin octógono (V-SO).** Se baja el azúcar total por debajo de 10 g por 100 g (con un margen de 3 g para la tolerancia del laboratorio). Se usan tres palancas: más plátano maduro, solo 15 g de panela por lote para conservar la nota acaramelada y un endulzante de volumen (eritritol con fruto del monje, del tipo Lakanto Classic). Es lo que hace Fika con su brownie de quinua, que se endulza con alulosa y se vende "sin octógonos" a S/14.00 por 70 g ([Fika](https://www.fika.pe/products/brownie-55g), consultado el 03-oct-2026).

**Fórmulas V-SO por lote de 24 unidades (g)**, con sangrecita en polvo según la receta 5 del documento 01 (22 g de polvo y 98 g de agua):

| Ingrediente | V-SO Choco Clásico | V-SO Plátano-Canela-Cañihua | V-SO Lúcuma |
|---|---|---|---|
| Sangrecita en polvo + agua | 22 + 98 | 22 + 98 | 22 + 98 |
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

Supuestos de azúcar: plátano con 12.2 g por 100 g (USDA, citado en el documento 01), panela con 90 % y lúcuma en polvo con 30 % [HIPÓTESIS del documento 01]. El eritritol no se cuenta como azúcar. Se valida con análisis de laboratorio en la fase 0.

**¿Por qué eritritol antes que alulosa?** Para el Codex, "azúcares" son todos los monosacáridos y disacáridos presentes en el alimento ([CXG 2-1985](https://www.fao.org/input/download/standards/34/CXG_002s_2015.pdf)). La alulosa es un monosacárido, así que un laboratorio o DIGESA podría contarla como azúcar total. Estados Unidos la excluye expresamente ([FDA, guía sobre alulosa](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-declaration-allulose-and-calories-allulose-nutrition-and-supplement-facts-labels)), pero Perú no tiene esa regla [POR CONFIRMAR con DIGESA y con el laboratorio]. El eritritol es un poliol (SIN 968) y no es azúcar. Dos cautelas sobre el eritritol. Primero, la EFSA fijó en 2023 una ingesta diaria admisible de 0.5 g por kg de peso al día [POR CONFIRMAR enlace: [EFSA](https://www.efsa.europa.eu/en/efsajournal/pub/8430)]: un niño de 18 kg puede consumir 9 g y un brownie trae entre 2 y 3 g, así que se recomienda **1 unidad al día**. Segundo, hay un estudio que asocia el eritritol en sangre con eventos cardiovasculares en adultos de riesgo ([Witkowski et al., Nature Medicine 2023](https://www.nature.com/articles/s41591-023-02223-9)). Es un riesgo de reputación que se maneja con transparencia en la etiqueta y con esa dosis baja. Si en la fase 0 se confirma que la alulosa no cuenta como azúcar, puede reemplazar hasta un 30 % del eritritol para mejorar el dorado y la humedad.

**Precios de los endulzantes (03-oct-2026):** alulosa Lakanto de 454 g a S/53.10 en Plaza Vea (S/116.96 por kg; [Plaza Vea](https://www.plazavea.com.pe/endulzante-alulosa-lakanto-classic-natural-doypack-454g-20634058/p)); Lakanto Classic de 800 g (ingredientes: "extracto de fruto del monje + eritritol") a S/94.90 en Wong (S/118.63 por kg; [Wong](https://www.wong.pe/endulzante-classic-lakanto-doypack-800-g-2/p)). A granel, con un importador, se supone S/60 por kg a 3,000 u/mes y S/30 por kg a 8,000 [HIPÓTESIS, cotizar].

**Comparación de las dos versiones**

| Criterio | V-P: con panela | V-SO: sin octógono (eritritol, plátano y 15 g de panela) |
|---|---|---|
| Azúcar total | 14.7 a 21.4 g por 100 g: **lleva octógono** | 4.6 a 7.1 g por 100 g: **sin octógono** [validar en laboratorio] |
| Insumos por unidad, sin IGV (1,000 / 3,000 / 8,000 u/mes) | S/0.63 / 0.50 / 0.39 | S/0.86 / 0.61 / 0.43 |
| Costo de producción por unidad | S/2.28 / 1.80 / 1.28 | S/2.52 / 1.91 / 1.32 (+S/0.25 / +0.11 / +0.05) |
| Sobrecosto en el año 1, escenario base | — | S/5,173.18 (1.9 % de las ventas netas) |
| Riesgo de sabor | Bajo: la panela es familiar y carameliza | Medio: el eritritol deja una sensación fría y dora menos. Se compensa con plátano, canela, horno a 170 °C y los 15 g de panela |
| Quioscos escolares | **No puede entrar** (RM 195-2019-MINSA, documento 03) | Puede entrar |
| Mensaje de marca | "Endulzado con panela", pero el octógono contradice la promesa de lonchera saludable | "Cero octógonos, hierro de verdad": calza con el 70 % que teme al "Alto en azúcar" (Ipsos, documento 04) |
| Costo de cambiar después | Nuevo análisis y nuevo RS o modificación (S/550 a 1,400, documento 03), reimpresión de etiquetas (unos S/720) y nueva prueba sensorial, con 2 a 3 meses perdidos en colegios | Ninguno |

**Por qué lanzar sin octógono cambia la economía del negocio, no solo la etiqueta.** La V-P le saldría al año unos S/5,173.18 más barata, pero perdería tres cosas que valen más. Primero, el canal colegio: en el escenario base representa 7,245 unidades y S/21,735.00 con IGV, y además es el canal que hace visible la marca ante padres de un mismo salón. Segundo, la conversión en venta directa: el 83 % de los consumidores dice que los octógonos cambian su compra y el 70 % teme justamente el "Alto en azúcar" (Ipsos 2025, documento 04). Un producto para padres que leen etiquetas no puede pedirles que ignoren la advertencia más temida. Tercero, la coherencia del relato de marca: "hierro de verdad, sabor a brownie" pierde fuerza si al lado del logo hay un octógono negro. El riesgo real de la V-SO no es el costo, sino el sabor, y eso se resuelve con la prueba sensorial de la fase 0, antes de invertir en la planta.

**Recomendación: lanzar primero la V-SO** en los tres sabores. Cuesta solo S/0.11 por unidad a 3,000 u/mes (3 % del precio neto), abre el canal colegio, sostiene el mensaje central del documento 04 y evita pagar dos veces el registro. Para que no sea un salto al vacío, la decisión pasa por un **filtro al cierre de la fase 0**: la V-SO debe lograr al menos 75 % de respuestas en las caritas 4 y 5, quedar a 0.5 puntos o menos de la V-P en la prueba a ciegas y medir menos de 8 g de azúcar por 100 g en el análisis preliminar. Si no pasa, se lanza la V-P solo en venta directa y ferias, y la V-SO entra en el mes 6 para colegios.

---

## 3. Modelo operativo por fases

**Roles fijos.** Diana Ayoso: producto, I+D y prueba sensorial. Patricia Cárdenas: operaciones (planta, compras, inventario, calidad y logística). Adela Robles: regulación, legal y relación con el contador. Angie Blas: marca, contenido y pauta. Carlos Inga: comercial (WhatsApp, colegios, naturistas) y modelo financiero.

| Fase | Actividades | Responsables | Costo | Entregables |
|---|---|---|---|---|
| **Fase 0: pruebas caseras y validación sin venta** (meses 1 y 2, oct-nov 2026) | 3 rondas de las fórmulas V-P y V-SO, con prueba de umbral de sangrecita (80, 120 y 160 g de equivalente). Prueba sensorial con al menos 20 niños por sabor (escala de caritas) y prueba triangular con los padres. Focus 2 con precio preguntado después de probar, más una encuesta a 30 padres con Van Westendorp (documento 04). Análisis preliminar de azúcares y hierro de las 2 mejores fórmulas. Cotización a MAKING, Unión, INDDA y Organic Andean Bites. Cotización del polvo de sangrecita (Malli, Allpa Manta, Nutri H, camales con SENASA). Constitución de la S.A.C. en un CDE de PRODUCE, RUC en el RMT, REMYPE y búsqueda fonética en INDECOPI | Diana (pruebas), Carlos (focus y encuesta), Patricia (cotizaciones), Adela (empresa), Angie (empaque MVP del focus) | **S/2,215.81**: insumos de 3 lotes de prueba S/942.81 (3 × S/314.27, documento 02); endulzantes S/148.00; análisis preliminar S/750.00 (2 × S/375); prueba sensorial S/150.00; carnés de sanidad S/75.00; notaría del CDE S/150.00 | Fórmula congelada v3; informe sensorial; decisión sobre el octógono; precio validado; S.A.C. con RUC; 2 plantas preseleccionadas |
| **Fase 1: desarrollo con la planta, laboratorio, RS y marca** (meses 3 a 5, dic 2026-feb 2027) | Firmar confidencialidad y contrato de maquila (la S.A.C. como titular del RS y la planta como fabricante). Escalamiento y lote piloto. Análisis para el RS, perfil nutricional con hierro y estudio de vida útil acelerado. Etiqueta (declarar "fuente de hierro" solo si el laboratorio mide al menos 2.1 mg por 100 g). RS por VUCE. Marca en clase 30. Identidad, fotos, web y catálogo de WhatsApp Business. Lista de espera (sin cobro ni entrega). Acuerdos de degustación con 3 colegios y 3 naturistas. Compra de equipos y empaque, y primer lote en febrero | Patricia (planta y lote), Adela (RS, etiqueta y marca), Angie (identidad y lanzamiento), Carlos (colegios, naturistas y lista de espera), Diana (escalamiento de la receta) | **S/8,426.20**: marca S/401.20; revisión legal S/400.00; desarrollo en planta S/1,750.00 [POR CONFIRMAR]; análisis para el RS S/1,800.00 (3 × S/600); perfil nutricional y hierro S/1,125.00 (3 × S/375); vida útil S/1,050.00; etiqueta S/650.00; identidad S/800.00; fotos S/300.00; web y dominio S/150.00; tasa del RS S/0. **Más:** equipos S/2,338.00, empaque inicial S/3,030.00, stock inicial S/4,135.30 y marketing de lanzamiento S/3,204.00 | Contrato firmado; informes de laboratorio; RS; etiqueta aprobada; solicitud de marca; 3,040 unidades en almacén; lista de espera de al menos 300 familias [HIPÓTESIS] |
| **Fase 2: venta formal** (desde el mes 5, feb 2027; el año comercial 1 va de mar-27 a feb-28) | Lanzamiento con la vuelta al colegio. WhatsApp Business con rutas de delivery los martes y viernes por zona. Pack de 12 por pedido, con recordatorio de recompra por WhatsApp (suscripción descartada por ahora, 9-oct-2026). Ferias, cumpleaños y kermeses. Quiosco y escuela de padres en colegios. Naturistas a consignación o con factura. Producción mensual con control de calidad por lote. GS1 desde el mes 6. Evaluación de Flora & Fauna en el mes 9. Cierre de números todos los domingos | Carlos (ventas), Angie (contenido y pauta), Patricia (producción y despacho), Adela (contabilidad y SUNAT), Diana (calidad y nuevos sabores) | Costos fijos de S/2,856.67 al mes en promedio (administración S/700, asistente S/800, marketing S/1,291.67 y depreciación S/65) más los costos variables de la sección 4 | 700 hogares activos a diciembre de 2027; 5 colegios; 8 naturistas; equilibrio desde abril de 2027; reporte trimestral |

**Lo que no se puede hacer antes del RS** (documento 03): vender producto envasado con marca, entregar muestras a niños como promoción (Ley 30021) o declarar hierro en la etiqueta sin análisis. Por eso la fase 0 trabaja con degustaciones voluntarias, con consentimiento de los padres y para investigación, y la fase 1 construye demanda con una lista de espera sin cobro. El cuello de botella no es DIGESA (que hoy no cobra la tasa y resuelve en 10 a 20 días), sino el desarrollo con la planta y el estudio de vida útil. Por eso las muestras para el laboratorio tienen que salir de la planta en diciembre de 2026, a más tardar.

El brief define la fase 2 como los meses 5 a 12 (febrero a setiembre de 2027). Aquí se extiende hasta febrero de 2028 para cubrir un año escolar completo: así lo pide la estimación de ventas y así se ve la caída de enero y febrero.

---

## 4. Estructura de costos por unidad y por pack de 6 (maquila, versión V-SO)

### 4.1 Supuestos de cada línea

| Línea | Valor y fuente |
|---|---|
| Insumos | Fórmulas V-SO de la sección 2.3, con precios del documento 02 (Makro y mayoristas) y de los endulzantes (Plaza Vea y Wong), divididos entre 1.18 para quitar el IGV. Promedio de los 3 sabores |
| Maquila | S/0.60 / 0.50 / 0.40 por unidad, dentro del rango de S/0.40 a 0.60 del documento 03 (UDEP: S/0.83 por empaque de 40 g en 2023) [POR CONFIRMAR] |
| Empaque individual | Flow pack: S/0.12 / 0.09 / 0.06 [HIPÓTESIS sobre el documento 02] |
| Etiqueta individual 5x5 | S/0.25 por unidad (Imprenta Peruana, 1,000 unidades, sin IGV, documento 02); S/0.10 con film impreso a 8,000 u/mes [HIPÓTESIS] |
| Doypack | 16x22 cm a S/0.625 con IGV por 1,000 unidades (documento 02); S/0.55 a 8,000 u/mes |
| Etiquetas del doypack | Frente y reverso, 7x7 cm, a S/0.36 cada una (1,000 unidades, documento 02) |
| Control de calidad por lote | S/250 por análisis microbiológico de liberación de lote; 1 lote al mes, y 2 a 8,000 u/mes [HIPÓTESIS] |
| Transporte planta-almacén | S/80 por viaje; 1, 2 y 4 viajes al mes [HIPÓTESIS] |
| Almacenamiento | S/0.05 / 0.04 / 0.03 por unidad, pactado con la planta o con un operador logístico, para no necesitar licencia por almacén propio (documento 03) [HIPÓTESIS] |
| Merma | 5 % de insumos, maquila y empaque [HIPÓTESIS] |
| Delivery al cliente | Referencia real en Lima Top y Lima Moderna: La Purita cobra S/9.50 + IGV por envío ([La Purita](https://www.lapurita.com/pages/costo-de-delivery), 03-oct-2026); Fika y La Purita ofrecen envío gratis desde S/150. Política de AndiBite: delivery gratis desde 2 packs, y S/6.00 en pedidos de 1 pack. Con un pedido promedio de 10 unidades, el costo neto queda en **S/0.80 por unidad** [HIPÓTESIS sobre ese dato real] |
| Pasarela de pagos | Culqi: tarjetas nacionales 3.44 % + US$0.20 en línea; Yape 3.44 %; Plin y otras billeteras 3.99 %; PagoEfectivo 3.99 % con mínimo de S/3.50; comisiones inafectas al IGV ([Culqi](https://culqi.com/precios/)). Izipay: link de pago gratis, comisión desde 1.99 % para clientes nuevos y POS desde S/108 ([Izipay](https://www.izipay.pe/)). Mercado Pago [POR CONFIRMAR, página bloqueada]. Con un 15 % de transferencias sin costo, la mezcla da **3 %** del precio con IGV |
| Comisiones de canal | Quiosco: 25 % para el concesionario [HIPÓTESIS]. Naturista: 40 % (rango de 35 a 50 % del documento 03). Supermercado: 35 % más 5 % de aportes y merma (el brief da 30 a 40 %). Marketplace: 28 % [POR CONFIRMAR, Rappi y Mercado Libre no publican su tarifa] |
| Marketing fijo | S/800 / 1,300 / 2,000 al mes. La pauta se basa en el plan anterior (S/10 a 20 por día en ventanas de campaña); el CPM de Meta en Lima queda [POR CONFIRMAR] |
| Administración y personal | S/700 al mes (contador S/250 según el rango de S/150 a 400 del documento 03; software S/60; web S/30; teléfono S/60; movilidad S/150; GS1 prorrateado S/85; banco y otros S/65) más un asistente de pedidos y despacho a medio tiempo de S/800 [HIPÓTESIS] |
| Depreciación | Equipos por S/2,338.00 a 36 meses: S/65 al mes |
| Impuestos | IGV de 18 %; RMT con pago a cuenta de 1 % de los ingresos netos y renta de 10 % hasta 15 UIT de utilidad (S/82,500) y 29.5 % sobre el exceso ([modelo.pe](https://modelo.pe/blog/regimen-mype-tributario-rmt-2026-tasas-limites/); UIT de S/5,500 en el documento 03). Se recomienda el RMT porque paga sobre la utilidad y emite factura, a diferencia del NRUS (documento 03) |

### 4.2 Costo por unidad y por pack de 6

| Concepto (S/ por unidad, sin IGV) | 1,000 u/mes | 3,000 u/mes | 8,000 u/mes |
|---|---|---|---|
| Insumos (3 sabores, sangrecita en polvo) | 0.864 | 0.605 | 0.431 |
| Maquila [POR CONFIRMAR] | 0.600 | 0.500 | 0.400 |
| Empaque individual (flow pack) | 0.120 | 0.090 | 0.060 |
| Etiqueta individual | 0.250 | 0.250 | 0.100 |
| Doypack (1/6 por unidad) | 0.088 | 0.088 | 0.078 |
| Etiquetas del doypack (1/6) | 0.120 | 0.120 | 0.067 |
| Control de calidad por lote | 0.250 | 0.083 | 0.062 |
| Transporte planta-almacén | 0.080 | 0.053 | 0.040 |
| Almacenamiento | 0.050 | 0.040 | 0.030 |
| Merma 5 % | 0.102 | 0.083 | 0.057 |
| **Costo de producción puesto en almacén** | **2.52** | **1.91** | **1.32** |
| Delivery al cliente (neto) | 0.80 | 0.80 | 0.80 |
| Pasarela de pagos (3 % de S/4.50) | 0.14 | 0.14 | 0.14 |
| Marketing fijo | 0.80 | 0.43 | 0.25 |
| Administración y personal de apoyo | 1.50 | 0.50 | 0.19 |
| Depreciación | 0.07 | 0.02 | 0.01 |
| Renta RMT, pago a cuenta de 1 % | 0.04 | 0.04 | 0.04 |
| **Costo total por unidad (canal directo)** | **5.86** | **3.84** | **2.74** |
| **Costo de producción por pack de 6** | **15.15** | **11.48** | **7.95** |
| **Costo total por pack de 6 (canal directo)** | **35.18** | **23.05** | **16.46** |

Con la V-P (panela), el costo de producción sería de S/2.28, S/1.80 y S/1.28 por unidad (S/13.65, S/10.79 y S/7.66 por pack).

**Nota del 9 de octubre de 2026.** La tabla anterior es de la versión anterior: usa la opción A (etiqueta en cada brownie) y calcula la pasarela sobre S/4.50. Con las presentaciones y precios confirmados, el Excel (hoja Costeo) da, a 3,000 u/mes y sin IGV: unidad suelta S/1.69; pack de 6 opción B S/9.90 (S/1.65 por unidad); pack de 6 opción C (brownies sueltos con papel manteca) S/9.39 (S/1.57 por unidad); pack de 12 S/18.66 (S/1.56 por unidad). Margen bruto en venta directa: 50.0 %, 53.1 %, 55.5 % y 53.1 %, respectivamente.

### 4.3 Margen neto por unidad a los tres precios candidatos, por canal

El margen neto descuenta el costo de producción, los costos variables del canal, la renta de 1 % y los costos fijos prorrateados según el volumen. El porcentaje se calcula sobre el precio sin IGV. *Versión anterior: precios candidatos de S/3.50, S/4.50 y S/5.50 por unidad y costo de la opción A. Los precios confirmados están en la sección 5 y su resultado, en la sección 8.*

| Canal | Precio al público con IGV (unidad / pack de 6) | AndiBite recibe sin IGV por unidad | 1,000 u/mes | 3,000 u/mes | 8,000 u/mes |
|---|---|---|---|---|---|
| Directo (WhatsApp e IG) | 3.50 / 21.00 | 2.97 | −2.86 (−96 %) | −0.84 (−28 %) | 0.26 (9 %) |
| Directo (WhatsApp e IG) | **4.50 / 27.00** | 3.81 | −2.05 (−54 %) | −0.03 (−1 %) | **1.07 (28 %)** |
| Directo (WhatsApp e IG) | 5.50 / 33.00 | 4.66 | −1.24 (−27 %) | 0.78 (17 %) | 1.88 (40 %) |
| Ferias y eventos (stand de S/200 por evento, unos S/1.00 por unidad) | 3.50 / 21.00 | 2.97 | −3.04 | −1.02 | 0.08 (3 %) |
| Ferias y eventos | 4.50 / 27.00 | 3.81 | −2.23 | −0.21 | 0.89 (23 %) |
| Ferias y eventos | 5.50 / 33.00 | 4.66 | −1.41 | 0.61 (13 %) | 1.71 (37 %) |
| Colegio (quiosco, 25 %) | 3.50 / 21.00 | 2.22 | −2.84 | −0.82 | 0.28 (10 %) |
| Colegio (quiosco, 25 %) | 4.50 / 27.00 | 2.86 | −2.21 | −0.19 | 0.91 (24 %) |
| Colegio (quiosco, 25 %) | 5.50 / 33.00 | 3.50 | −1.58 | 0.44 (10 %) | 1.54 (33 %) |
| Tienda naturista (40 %) | 3.50 / 21.00 | 1.78 | −3.38 | −1.36 | −0.26 (−9 %) |
| Tienda naturista (40 %) | 4.50 / 27.00 | 2.29 | −2.89 | −0.87 | 0.23 (6 %) |
| Tienda naturista (40 %) | 5.50 / 33.00 | 2.80 | −2.41 | −0.38 | 0.71 (15 %) |
| Supermercado (35 % + 5 %) | 3.50 / 21.00 | 1.78 | −3.28 | −1.26 | −0.16 (−5 %) |
| Supermercado (35 % + 5 %) | 4.50 / 27.00 | 2.29 | −2.77 | −0.75 | 0.34 (9 %) |
| Supermercado (35 % + 5 %) | 5.50 / 33.00 | 2.80 | −2.27 | −0.25 | 0.85 (18 %) |
| Marketplace (28 %) [POR CONFIRMAR] | 4.50 / 27.00 | 2.75 | −2.31 | −0.28 | 0.81 (21 %) |

**Cómo se arma el margen en cada canal.** En venta directa, AndiBite cobra el precio completo, pero paga el delivery, la pasarela y la pauta que trae al cliente. En los canales con intermediario no hay delivery a la casa ni pasarela, pero se entrega entre el 25 y el 40 % del precio. La diferencia de fondo es que en venta directa el costo de canal es casi fijo por pedido (unos S/9.50), así que mejora con pedidos más grandes, mientras que en los otros canales es un porcentaje del precio que no baja con el volumen. Por eso conviene empujar el pack de 12 y la recompra por WhatsApp, y por eso el supermercado necesita un precio en góndola más alto que el directo.

**Lectura.** (1) A 1,000 u/mes ningún precio cubre los costos fijos y la maquila. Esa escala solo sirve como marcha blanca, o directamente no conviene operarla. (2) S/3.50 por unidad (la referencia de la profesora para la marcha blanca) solo deja margen a partir de 8,000 u/mes y en venta directa, así que **no sirve como precio de lista**. (3) A S/4.50 (versión anterior), la venta directa era rentable a partir de unas 3,500 u/mes; con los precios confirmados, el equilibrio es de 3,308 u/mes (sección 8.1). (4) Los canales con intermediario (naturista y supermercado) solo son rentables con precios en góndola de S/5.30 a 5.50 por unidad y volúmenes de 8,000 u/mes o más. Por eso el supermercado queda para el año 2.

---

## 5. Precio recomendado por canal

| Canal | Formato y precio al público (con IGV) | Precio que recibe AndiBite (con IGV) | Margen del canal | Lógica |
|---|---|---|---|---|
| **Venta directa (WhatsApp e Instagram)** | Pack de 6: **S/24.90** (S/4.15 por unidad); pack de 12: S/46.90 (S/3.91 por unidad); unidad o caja degustación de 3: S/4.00 por unidad (S/12.00); delivery gratis desde 2 packs | Igual | 0 % (AndiBite asume el delivery y el 3 % de la pasarela) | Calza con la disposición a pagar de Claudia (S/24 a 28 por pack, de S/4 a 5 por unidad, documento 04). El pack de 12 a S/3.91 por unidad atiende a Rodrigo (S/3 a 4). Precios confirmados por el equipo el 9-oct-2026 |
| **Ferias y eventos** | Unidad S/5.00; pack de 6 S/26.00; pack de 12 S/48.00 | Igual | 0 %; stand, movilidad y carnés por unos S/1.00 por unidad | En feria se cobra algo más que por WhatsApp porque el stand cuesta cerca de S/1 por brownie. La caja degustación (S/12.00 en venta directa) es la herramienta de prueba. El precio de evento compite con la mesa dulce, no con el queque |
| **Colegios (quiosco)** | Unidad **S/4.00** | S/3.00 | 25 % para el concesionario [HIPÓTESIS, negociar entre 25 y 30 %] | El ancla es el queque de la puerta del colegio (S/2.50 a 3, documento 04). Pagar S/1.00 a 1.50 más se justifica por el hierro y por no tener octógono. Solo entra la V-SO |
| **Tiendas naturistas** | Pack de 6 en anaquel **S/28.90** (S/4.82 por unidad) | S/17.34 por pack | 40 % | El canal necesita entre 35 y 50 % (documento 03). AndiBite cobra S/17.34 con IGV por pack (S/14.69 sin IGV, S/2.45 por unidad) y deja una contribución de S/3.75 por pack (S/0.63 por unidad, opción B) antes de costos fijos. Es un canal de vitrina, no de volumen |
| **Supermercados** (año 2; en el escenario optimista, Flora & Fauna o Vivanda desde noviembre de 2027) | Pack de 6 **S/32.90** (S/5.48 por unidad) [versión anterior; sin redefinir con los precios confirmados] | S/19.74 por pack | 35 % + 5 % | Exige RS, GS1, factura, homologación y crédito de 30 a 60 días (documento 03). Solo es viable con 8,000 u/mes o más |

**Por qué un mismo producto tiene precios distintos según el canal.** Por regla, el precio al público en tiendas de terceros debe ser igual o mayor que el directo, para que la tienda no compita con la marca ni la marca canibalice a la tienda. En el quiosco se vende la unidad suelta a S/4.00, por debajo del pack directo (S/4.15 por unidad), porque es el único canal con ancla de precio de impulso (el queque de la puerta, a S/2.50-3) y porque ahí la compra la hace el niño con su propina, no el adulto. En la tienda naturista el pack sube a S/28.90 en el anaquel para cubrir el 40 % del canal sin destruir la contribución de AndiBite (el supermercado, con S/32.90 en la versión anterior, queda para el año 2). La diferencia de S/4.00 por pack frente al directo (S/24.90) es, además, un incentivo para que la familia recurrente migre al canal directo y al pack de 12, que son los de mayor margen.

**Benchmark por 20 g** (documento 02, precios del 03-oct-2026): Nutri H S/3.20 (galleta con hemoglobina bovina, el competidor más cercano); Siete Dragones S/3.01; Fika S/4.00; Mamalama S/4.10; Bimbo Nutra Bien S/1.67. El pack de 6 a S/24.90 equivale a S/4.15 por brownie de 20 g, a la par de Fika (S/4.00) y Mamalama (S/4.10), que se venden en góndola (S/0.15 y S/0.05 más). Esa diferencia mínima se justifica por el hierro hemínico, el producto sin octógono y la entrega en casa. Frente a Nutri H, el premio es de 30 %: hay que comunicar el formato de brownie húmedo y la aceptación infantil probada. **Disposición a pagar del segmento:** el pack quincenal de S/24.90 suma S/49.80 al mes, es decir el 2.8 % del gasto en alimentos de un hogar B (S/1,795) y el 2.2 % de uno A (S/2,214) (APEIM 2025, documento 04). Este precio se confirma o se ajusta con el Van Westendorp de la fase 0. Si la mediana de "caro, pero lo compraría" queda por debajo de S/4.00 por unidad, se baja el precio del pack de 6 en el Excel (hoja Supuestos, celda C39) y se recalcula el equilibrio, que hoy es de 3,308 u/mes. (Versión anterior: con el pack a S/24.00 el equilibrio subía de 3,500 a unas 4,660 u/mes.)

---

## 6. Ventas del año 1 (marzo 2027 a febrero 2028)

### 6.1 Supuestos por canal

Calendario: en los colegios privados de Lima, las clases empiezan a inicios de marzo, hay unas 2 semanas de vacaciones a fines de julio y el año termina a mediados de diciembre; enero y febrero son vacaciones [HIPÓTESIS, calendario 2027 de Minedu POR CONFIRMAR]. Factor estacional de la venta directa: 1.00 en meses de clase; 0.80 en julio; 0.85 en agosto, porque el Día del Niño compensa en parte; 0.70 en diciembre; 0.35 en enero y 0.45 en febrero, por la preventa escolar.

| Canal | Supuesto (base) | Pesimista | Optimista |
|---|---|---|---|
| **Directo** | Hogares activos: de 180 en marzo a 700 en diciembre, que es el SOM base del documento 04. Cada hogar compra 1 pack de 6 cada 2 semanas (12 unidades al mes, unos S/48.75). Pedido promedio de 10 unidades (S/40.63) | De 90 a 300 hogares (el SOM conservador del documento 04) | De 300 a 1,400 hogares (el SOM optimista) |
| **Ferias y eventos** | 3 a 6 eventos al mes con 120 unidades cada uno (unas 40 compras de 3 unidades). Picos en diciembre y agosto | 2 a 4 eventos de 90 unidades | 4 a 8 eventos de 150 unidades |
| **Colegios** | Desde abril, de 1 a 5 colegios. 300 unidades por colegio al mes (15 al día en 20 días, menos del 2 % de un colegio de unos 800 alumnos). Sin venta en enero ni febrero | De 1 a 2 colegios de 250 unidades | De 2 a 8 colegios de 350 unidades |
| **Naturistas** | Desde mayo, de 2 a 8 puntos con 60 unidades (10 packs) al mes cada uno. En el verano se vende 30 % menos | De 1 a 4 puntos de 45 unidades | De 2 a 12 puntos de 70 unidades |
| **Supermercados** | 0 en el año 1 | 0 | 4 tiendas Flora & Fauna o Vivanda desde noviembre de 2027, con 200 unidades al mes cada una |

**Cómo se reconcilia con el SOM del documento 04.** El documento 04 calculó 700 hogares núcleo que compran 18 packs al año, es decir 75,600 unidades. Aquí se llega a 76,335 unidades por otra vía: la venta directa llega a esos 700 hogares recién en diciembre (porque los clientes se suman mes a mes y no existen todos desde marzo), y la diferencia la cubren canales que el SOM no contaba (colegios, ferias y naturistas, con 16,017 unidades). En otras palabras, el volumen del SOM se mantiene, pero ya no depende solo de la recompra de los hogares: un 21 % viene de canales que además generan clientes nuevos para la venta directa. El escenario pesimista equivale al SOM conservador del documento 04 (300 hogares) y el optimista al SOM optimista (1,400 hogares).

Precio realizado por unidad con IGV (Excel, hoja Proyeccion): S/4.0625 en venta directa (60 % de las unidades en pack de 6 a S/24.90, 30 % en pack de 12 a S/46.90 y 10 % en unidad o caja degustación a S/4.00); S/4.80 en ferias (70 % en unidad a S/5.00 y 30 % en pack de 6 a S/26.00); S/3.00 en colegios; S/2.89 en naturistas (S/17.34 por pack de 6). El supermercado solo existe en el escenario optimista y conserva el precio de la versión anterior (S/3.29).

### 6.2 Escenario base, mes a mes

| Canal (unidades) | Mar-27 | Abr-27 | May-27 | Jun-27 | Jul-27 | Ago-27 | Set-27 | Oct-27 | Nov-27 | Dic-27 | Ene-28 | Feb-28 | Total |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Directo WhatsApp/IG | 2,160 | 3,360 | 4,320 | 5,160 | 4,608 | 5,406 | 6,960 | 7,560 | 8,160 | 5,880 | 2,856 | 3,888 | 60,318 |
| Ferias y eventos | 480 | 360 | 480 | 360 | 480 | 600 | 360 | 360 | 480 | 720 | 480 | 480 | 5,640 |
| Colegios (quioscos) | 0 | 300 | 300 | 600 | 480 | 765 | 1,200 | 1,200 | 1,500 | 900 | 0 | 0 | 7,245 |
| Tiendas naturistas | 0 | 0 | 120 | 180 | 240 | 300 | 360 | 360 | 420 | 480 | 336 | 336 | 3,132 |
| Supermercados | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **Total unidades** | **2,640** | **4,020** | **5,220** | **6,300** | **5,808** | **7,071** | **8,880** | **9,480** | **10,560** | **7,980** | **3,672** | **4,704** | **76,335** |
| Ventas con IGV (S/) | 11,079 | 16,278 | 21,101 | 25,011 | 23,158 | 28,004 | 34,643 | 37,081 | 41,168 | 31,431 | 14,878 | 19,070 | **302,900.36** |
| Ventas netas sin IGV (S/) | 9,389 | 13,795 | 17,882 | 21,196 | 19,625 | 23,732 | 29,359 | 31,424 | 34,888 | 26,636 | 12,608 | 16,161 | **256,695.22** |

### 6.3 Escenarios pesimista y optimista, mes a mes (unidades y soles con IGV)

Las unidades no cambian. Los soles de estos dos escenarios son de la versión anterior (precios de S/27.00 y S/49.00) y faltan recalcular con los precios confirmados.

| Escenario | Mar | Abr | May | Jun | Jul | Ago | Set | Oct | Nov | Dic | Ene | Feb | Total |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Pesimista: directo | 1,080 | 1,560 | 1,920 | 2,280 | 2,016 | 2,346 | 3,000 | 3,240 | 3,480 | 2,520 | 1,218 | 1,620 | 26,280 |
| Pesimista: ferias, colegios y naturistas | 270 | 180 | 565 | 520 | 560 | 617 | 815 | 860 | 950 | 840 | 396 | 396 | 6,969 |
| **Pesimista: unidades** | 1,350 | 1,740 | 2,485 | 2,800 | 2,576 | 2,963 | 3,815 | 4,100 | 4,430 | 3,360 | 1,614 | 2,016 | **33,249** |
| Pesimista: S/ con IGV (versión anterior) | 5,886 | 7,599 | 10,455 | 11,786 | 10,868 | 12,491 | 15,830 | 17,023 | 18,460 | 14,047 | 6,892 | 8,650 | **139,987.53** |
| Optimista: directo | 3,600 | 6,000 | 8,400 | 10,200 | 9,120 | 10,710 | 13,800 | 15,000 | 16,200 | 11,760 | 5,796 | 7,830 | 118,416 |
| Optimista: ferias, colegios, naturistas y supermercados | 900 | 1,440 | 2,230 | 2,570 | 2,860 | 3,615 | 3,900 | 4,320 | 5,340 | 4,520 | 2,288 | 2,288 | 36,271 |
| **Optimista: unidades** | 4,500 | 7,440 | 10,630 | 12,770 | 11,980 | 14,325 | 17,700 | 19,320 | 21,540 | 16,280 | 8,084 | 10,118 | **154,687** |
| Optimista: S/ con IGV (versión anterior) | 19,620 | 31,377 | 44,663 | 53,390 | 49,756 | 59,381 | 73,183 | 79,706 | 88,457 | 66,962 | 33,735 | 42,634 | **642,863.64** |

**Total anual por canal (unidades / S/ con IGV)**

| Canal | Pesimista (S/ versión anterior) | Base (precios confirmados) | Optimista (S/ versión anterior) |
|---|---|---|---|
| Directo | 26,280 / 114,975.00 | 60,318 / 245,041.88 | 118,416 / 518,070.00 |
| Ferias y eventos | 2,970 / 12,771.00 | 5,640 / 27,072.00 | 10,650 / 45,795.00 |
| Colegios | 2,712 / 8,136.00 | 7,245 / 21,735.00 | 16,065 / 48,195.00 |
| Naturistas | 1,287 / 4,105.53 | 3,132 / 9,051.48 | 6,356 / 20,275.64 |
| Supermercados | 0 / 0.00 | 0 / 0.00 | 3,200 / 10,528.00 |
| **Total** | **33,249 / 139,987.53** | **76,335 / 302,900.36** | **154,687 / 642,863.64** |

### 6.4 Por qué medio se vende cada unidad (escenario base) [HIPÓTESIS de mezcla]

| Canal | Medio de pedido | Unidades | Medio de pago | Medio de entrega |
|---|---|---|---|---|
| Directo (60,318) | WhatsApp Business: clientes recurrentes y referidos de la "mamá embajadora" por salón (45 %) | 27,142 | Yape o Plin 70 %, transferencia 15 %, tarjeta por link de Culqi o Izipay 15 % | Motorizado o courier en rutas de martes y viernes por zona (85 %); recojo en un punto acordado (15 %) |
| | Instagram y pauta de Meta con clic a WhatsApp (25 %) | 15,080 | Ídem | Ídem |
| | Pack de 12 por pedido, con recordatorio de recompra por WhatsApp (20 %) | 12,064 | Ídem | Rutas de martes y viernes; delivery gratis desde 2 packs |
| | Landing web con link de pago (10 %) | 6,032 | Tarjeta o Yape | Courier |
| Ferias (5,640) | Stand en cumpleaños y mesas dulces (40 %), kermeses y ferias de colegio (35 %) y bioferias (25 %) | 2,256 / 1,974 / 1,410 | Yape con QR, POS (Izipay P2 Lite SE) y efectivo | Entrega en mano |
| Colegios (7,245) | Pedido B2B del concesionario por WhatsApp o correo; venta al alumno en el quiosco | 7,245 | Factura electrónica; transferencia a 15 o 30 días | Ruta semanal al colegio |
| Naturistas (3,132) | Pedido B2B; venta en anaquel | 3,132 | Factura; 30 días o consignación | Reposición quincenal |

---

## 7. Inversión inicial y financiamiento

| Rubro | Detalle | S/ |
|---|---|---|
| Fase 0 | Pruebas caseras, endulzantes, análisis preliminar, prueba sensorial, carnés y constitución de la S.A.C. (sección 3) | 2,215.81 |
| Desarrollo de producto, registro y marca (fase 1) | Planta, laboratorio, vida útil, etiqueta, marca en INDECOPI, identidad, fotos y web (sección 3). Tasa del RS S/0 (documento 03) | 8,426.20 |
| Equipos mínimos | Balanza S/60; selladora de impulso S/150; 4 moldes S/120; termómetros S/80; 3 coolers S/240; estantería S/350; impresora térmica de lotes S/450; kit de feria (toldo, mesa y banner) S/780; POS S/108 | 2,338.00 |
| Empaque inicial | Mínimos de compra: 5,000 flow packs S/450; 5,000 etiquetas individuales más troquel S/1,330; 1,000 doypacks S/530; 2,000 etiquetas de doypack S/720 | 3,030.00 |
| Stock inicial | 3,040 unidades para marzo (ventas más muestras): insumos, maquila, control de calidad, transporte y merma | 4,135.30 |
| Marketing de lanzamiento (febrero de 2027) | 600 muestras de degustación S/1,146; 40 packs para influencers S/458; pauta de expectativa S/600; POP S/400; feria de vuelta al colegio S/300; video con niños (con consentimiento) S/300 | 3,204.00 |
| Capital de trabajo de 2 meses | 2 × (administración S/700 + asistente S/800 + marketing S/1,292) + costos de canal de marzo (S/2,543), redondeado | 8,000.00 |
| Imprevistos 10 % | Sobre todo lo anterior | 3,134.93 |
| **Inversión total** | | **34,484.24** |

| Fuente | Monto (S/) | Condición |
|---|---|---|
| Aporte de los 5 socios | 25,000.00 (S/5,000 cada uno, 72.5 %) | Capital de la S.A.C. Si se constituye por un CDE con capital de hasta 1 UIT (S/5,500), se registra ese capital y el resto se aporta como cuenta por pagar a socios [POR CONFIRMAR con el notario] |
| Préstamo | 10,000.00 | 12 cuotas de S/976.79 con una TEA de 35 % [POR CONFIRMAR; comparar tasas de microempresa en la SBS]; intereses de S/1,721.42 en el año 1. Alternativa: préstamo familiar sin intereses |
| Concurso de ProInnóvate (Startup Perú, línea de emprendimientos innovadores) | Hasta unos S/50,000 no reembolsables en convocatorias anteriores, con aporte de contrapartida del equipo [POR CONFIRMAR: el monto y las bases 2026 no se pudieron verificar porque gob.pe/proinnovate bloqueó la consulta] | **No se cuenta en el plan base**: el concurso tarda de 4 a 6 meses y es competitivo. Si se gana, se prepaga el préstamo y se financia el año 2 (GS1, film impreso y supermercado) |
| Preventa de febrero | No se usa | El documento 03 permite una lista de espera sin entregar producto; por prudencia, tampoco se cobra antes del RS |

**Lógica del financiamiento.** El aporte de los socios cubre todo lo que es riesgo puro (pruebas, laboratorio, marca y desarrollo con la planta, unos S/10,642), porque ningún banco lo financiaría antes de que exista el producto. El préstamo financia lo que se convierte en activo o en caja (stock, empaque y capital de trabajo) y se paga con el flujo de los primeros meses de venta. En el escenario base, la cuota de S/976.79 representa menos del 10 % de las cobranzas a partir de mayo de 2027. La regla para los 5 socios es aportar lo mismo y tener la misma participación (20 % cada uno), y dejar escrito en el estatuto de la S.A.C. cómo se suman aportes adicionales si se activa el plan de contingencia.

El total financiado es de S/35,000; quedan S/515.76 adicionales en caja.

---

## 8. Punto de equilibrio, flujo de caja, resultado y payback

### 8.1 Punto de equilibrio

Costos fijos mensuales en el escenario base: administración S/700 + asistente S/800 + marketing promedio S/1,291.67 + depreciación S/65 = **S/2,856.67**. La contribución promedio por unidad (Excel, hoja Proyeccion), con la mezcla de canales y presentaciones del escenario base, es de **S/0.86 con la opción B** y S/0.91 con la opción C (precio neto promedio de S/3.36 sin IGV, menos costos de producción y de canal). Versión anterior: S/0.82 por unidad y equilibrio de 3,500 u/mes.

| Escenario | Costos fijos al mes (S/) | Punto de equilibrio (u/mes) | En soles netos / con IGV | Primer mes con utilidad | Meses con pérdida |
|---|---|---|---|---|---|
| Pesimista (versión anterior) | 2,727.50 | 3,390 | 12,095.63 / 14,272.84 | Setiembre 2027 | 9 de 12 (solo setiembre a noviembre dan utilidad) |
| **Base** | **2,856.67** | **3,308** (551 packs de 6, unos 276 hogares) | **11,124 / 13,127** | **Abril 2027** | Solo marzo (−S/420), por la campaña de lanzamiento |
| Optimista (versión anterior) | 3,779.58 | 4,220 | 14,862.62 / 17,537.90 | Abril 2027 | Solo marzo |

**Resultado operativo mensual con los precios confirmados** (Excel, hoja Mensual; escenario base, pack de 6 opción B; S/ sin IGV salvo la primera fila; antes de intereses e impuesto a la renta)

| Concepto | Mar-27 | Abr-27 | May-27 | Jun-27 | Jul-27 | Ago-27 | Set-27 | Oct-27 | Nov-27 | Dic-27 | Ene-28 | Feb-28 | Año 1 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ventas con IGV | 11,079 | 16,278 | 21,101 | 25,011 | 23,158 | 28,004 | 34,643 | 37,081 | 41,168 | 31,431 | 14,878 | 19,070 | 302,900 |
| Ventas sin IGV | 9,389 | 13,795 | 17,882 | 21,196 | 19,625 | 23,732 | 29,359 | 31,424 | 34,888 | 26,636 | 12,608 | 16,161 | 256,695 |
| Contribución | 2,437 | 3,543 | 4,589 | 5,422 | 5,042 | 6,117 | 7,519 | 8,035 | 8,951 | 6,880 | 3,246 | 4,135 | 65,918 |
| Costos fijos | 2,857 | 2,857 | 2,857 | 2,857 | 2,857 | 2,857 | 2,857 | 2,857 | 2,857 | 2,857 | 2,857 | 2,857 | 34,280 |
| **Resultado operativo** | **−420** | **686** | **1,732** | **2,566** | **2,186** | **3,261** | **4,662** | **5,179** | **6,094** | **4,023** | **390** | **1,278** | **31,638** |
| Resultado acumulado | −420 | 267 | 1,999 | 4,565 | 6,750 | 10,011 | 14,673 | 19,852 | 25,947 | 29,970 | 30,360 | 31,638 | 31,638 |

Con la opción C (brownies sueltos) el resultado del año es de S/35,083 y el equilibrio, de 3,144 u/mes.

### 8.2 Flujo de caja mensual del año 1 (escenario base, S/ sin IGV) — versión anterior, precios de S/27.00 y S/49.00

Este flujo todavía no se recalcula con los precios confirmados; la caja mínima y el capital de trabajo de S/8,000 deben revisarse con el flujo nuevo. Los resultados mensuales con los precios confirmados están al final de la sección 8.1.

La producción se paga un mes antes, porque es el lote del mes siguiente. Colegios y naturistas se cobran a 30 días.

| Concepto | Mar-27 | Abr-27 | May-27 | Jun-27 | Jul-27 | Ago-27 | Set-27 | Oct-27 | Nov-27 | Dic-27 | Ene-28 | Feb-28 | Año 1 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Cobranzas | 9,758 | 13,769 | 18,529 | 21,530 | 20,846 | 24,099 | 29,873 | 33,366 | 36,027 | 29,374 | 15,924 | 17,073 | 270,167 |
| Producción (lote del mes siguiente) | −7,403 | −8,776 | −9,722 | −9,325 | −10,229 | −11,872 | −12,603 | −13,901 | −10,762 | −6,942 | −8,227 | −6,025 | −115,787 |
| Delivery, pasarela, ferias y logística | −2,543 | −3,573 | −4,633 | −5,345 | −4,962 | −5,898 | −7,161 | −7,720 | −8,474 | −6,543 | −3,286 | −4,247 | −64,385 |
| Marketing | −2,500 | −1,200 | −1,200 | −1,000 | −1,000 | −1,800 | −1,000 | −1,000 | −1,000 | −1,500 | −800 | −1,500 | −15,500 |
| Administración | −700 | −700 | −700 | −700 | −700 | −700 | −700 | −700 | −700 | −700 | −700 | −700 | −8,400 |
| Asistente a medio tiempo | −800 | −800 | −800 | −800 | −800 | −800 | −800 | −800 | −800 | −800 | −800 | −800 | −9,600 |
| Renta RMT (1 %) | −98 | −145 | −189 | −225 | −207 | −250 | −311 | −334 | −370 | −280 | −132 | −171 | −2,711 |
| **Flujo operativo** | **−4,287** | **−1,425** | **1,285** | **4,136** | **2,947** | **2,780** | **7,297** | **8,911** | **13,923** | **12,608** | **1,978** | **3,630** | **53,785** |
| Cuota del préstamo | −977 | −977 | −977 | −977 | −977 | −977 | −977 | −977 | −977 | −977 | −977 | −977 | −11,721 |
| **Flujo después de deuda** | **−5,263** | **−2,401** | **308** | **3,159** | **1,971** | **1,803** | **6,321** | **7,934** | **12,946** | **11,632** | **1,002** | **2,653** | **42,063** |
| **Caja acumulada** (inicial S/11,651: capital de trabajo, imprevistos y sobrante) | 6,387 | 3,986 | 4,294 | 7,454 | 9,424 | 11,227 | 17,547 | 25,482 | 38,428 | 50,059 | 51,061 | 53,714 | |

**Lectura del flujo.** Los dos primeros meses son negativos por tres razones: la campaña de marzo (S/2,500 de pauta más 400 muestras), la producción que se paga un mes antes y el cobro a 30 días de colegios y naturistas. La caja mínima del escenario base es de S/3,986 en abril, apenas por encima de un mes de costos fijos: por eso el capital de trabajo de S/8,000 no es opcional. Desde mayo, el negocio se financia solo, y entre setiembre y diciembre se genera cerca del 80 % del flujo operativo del año. Enero y febrero son la prueba de resistencia: las ventas caen a menos de la mitad, pero el flujo sigue positivo porque la producción se ajusta a la baja con un mes de anticipación.

El flujo de febrero de 2028 ya incluye la compra del stock de marzo de 2028, que queda como inventario.

**Resumen de los otros escenarios (S/, versión anterior)**

| Escenario | Flujo operativo mensual (mar a feb) | Caja mínima | Caja final |
|---|---|---|---|
| Pesimista | −4,374; −3,192; −2,392; −462; −1,300; −2,481; −463; 508; 2,918; 2,561; −1,694; −1,367 | **−10,731.60 (febrero de 2028)**; la caja se vuelve negativa en mayo de 2027 | −10,731.60 |
| Optimista | −2,936; 786; 7,665; 13,746; 9,717; 10,042; 17,386; 19,695; 30,847; 28,842; 9,904; 14,290 | 6,088.79 (abril de 2027) | 158,453.78 |

### 8.3 Resultado del año 1

**Con los precios confirmados (Excel, escenario base):** ventas sin IGV de S/256,695.22; contribución de S/65,917.99 (opción B) menos costos fijos de S/34,280.04, es decir un **resultado operativo de S/31,637.96 (12.3 %)**; con la opción C, S/35,083.20 (13.7 %). No incluye los intereses del préstamo (S/1,721), los gastos preoperativos (S/13,846) ni el impuesto a la renta, que todavía no se recalculan. La tabla siguiente es de la versión anterior (precios de S/27.00 y S/49.00).

| Concepto (S/ sin IGV) | Pesimista | Base | Optimista |
|---|---|---|---|
| Ventas netas | 118,633.50 | 271,075.70 | 544,799.69 |
| Costo de producción vendido | −64,274.36 | −112,301.74 | −198,752.01 |
| Costos de canal (delivery, pasarela, ferias y logística) | −28,531.10 | −64,384.60 | −126,746.21 |
| Marketing (incluye muestras) | −18,124.30 | −18,761.57 | −22,168.10 |
| Administración | −8,400.00 | −8,400.00 | −8,400.00 |
| Personal de apoyo | −9,600.00 | −9,600.00 | −16,800.00 |
| Depreciación | −780.00 | −780.00 | −780.00 |
| **Utilidad operativa** | **−11,076.27** | **56,847.79** | **171,153.38** |
| Intereses | −1,721.42 | −1,721.42 | −1,721.42 |
| Gastos preoperativos (fase 0, fase 1 y lanzamiento) | −13,846.01 | −13,846.01 | −13,846.01 |
| Utilidad antes del impuesto a la renta | −26,643.70 | 41,280.36 | 155,585.95 |
| Impuesto a la renta RMT (10 % hasta 15 UIT; 29.5 % sobre el exceso) | 0.00 | −4,128.04 | −29,810.35 |
| **Utilidad neta** | **−26,643.70** | **37,152.32** | **125,775.59** |
| **Margen neto** | **−22.5 %** | **13.7 %** | **23.1 %** |
| **Payback de la inversión** (flujo operativo acumulado frente a la inversión) | No se recupera en el año 1 (más de 24 meses) [HIPÓTESIS] | **9 meses de operación (noviembre de 2027)**, 14 meses desde el inicio del proyecto | 6 meses (agosto de 2027) |

**Advertencias** (cifras de la versión anterior, por recalcular). (1) La utilidad del escenario base supone que los socios no cobran sueldo: si cada uno recibiera S/500 al mes, la utilidad neta bajaría a unos S/10,000. (2) La sensibilidad a lo que falta cotizar es alta: con la maquila a S/0.60 en todos los volúmenes (−S/13,113.93) y el polvo de sangrecita a S/417 por kg (−S/9,188.03), la utilidad antes de impuestos baja a unos S/19,000. (3) **Plan de contingencia para el escenario pesimista:** si a mayo de 2027 hay menos de 200 hogares activos, se suspende el asistente (S/800 al mes), la pauta se reduce a la mitad, cada socio aporta S/2,500 adicionales (S/12,500) y se replantea el precio o el formato antes de seguir.

---

## 9. Riesgos, mitigaciones y KPIs

### 9.1 Diez riesgos

| # | Riesgo | Impacto | Mitigación |
|---|---|---|---|
| 1 | El RS llega después de febrero de 2027 y se pierde la vuelta al colegio | Alto: marzo es el mes de captación | Mandar las muestras al laboratorio en diciembre; usar un gestor (S/236 por producto, documento 03) si hay observaciones; tener lista la campaña de abril |
| 2 | Ninguna planta acepta lotes de 3,000 a 5,000 unidades o la maquila supera S/0.60 | Alto: con 1,000 u/mes no hay negocio | Cotizar 4 plantas; usar INDDA para las "primeras maquilas"; negociar corridas bimestrales, siempre dentro de la vida útil |
| 3 | Escasez o precio alto del polvo de sangrecita | Medio-alto: es el insumo crítico | Homologar 2 proveedores (Malli y Allpa Manta) y cotizar polvo de pollo con un camal registrado en SENASA; la AndiBite S.A.C. compra el insumo y se lo entrega a la planta |
| 4 | Los niños rechazan la V-SO (sensación fría del eritritol, poco dulzor) | Alto | Filtro de la fase 0 con la V-P como respaldo; mezcla con alulosa si DIGESA confirma que no cuenta como azúcar; más plátano y canela |
| 5 | El laboratorio cuenta la alulosa como azúcar u observa el claim de hierro | Medio | Basar la fórmula en eritritol; declarar "fuente de hierro" solo con análisis; nunca decir "previene la anemia" (D. Leg. 1044, documento 03) |
| 6 | Baja recompra (el niño lo prueba y no lo vuelve a pedir) | Alto: el 79 % de las ventas es recompra directa | Medir la recompra a 60 días desde abril; rotar un sabor de temporada; activar el recordatorio de recompra por WhatsApp; si la recompra baja de 25 % en junio, frenar la pauta |
| 7 | Falta de tiempo de 5 estudiantes en temporada de exámenes | Medio | Asistente a medio tiempo, rutas fijas de delivery, plantillas de WhatsApp Business y producción tercerizada |
| 8 | Caja negativa en el escenario pesimista | Alto | Plan de contingencia (sección 8.3); nada de crédito a canales mientras no haya 2 meses de caja |
| 9 | Incidente de inocuidad (moho, vida útil menor a la declarada) | Muy alto para una marca infantil | Estudio de vida útil, control de calidad por lote, contramuestras, rotación FIFO y vencimiento corto (60 días) al inicio |
| 10 | Dependencia del canal directo y de la estacionalidad (enero y febrero caen 55 a 65 %) | Medio | Que ningún canal pase del 80 % en el año 1 y del 60 % en el año 2; cumpleaños y vacaciones útiles en el verano; supermercado en el año 2 |

### 9.2 KPIs del año 1

**Gobierno de los indicadores.** Carlos Inga consolida los KPIs todos los domingos en la hoja de pedidos (el mismo Google Sheets del plan de marketing anterior) y el equipo los revisa en 30 minutos. Hay tres semáforos que obligan a decidir sin esperar el cierre del trimestre: la recompra a 60 días por debajo de 25 %, la caja por debajo de un mes de costos fijos y el costo de producción por encima de S/2.10 en dos lotes seguidos. Cualquiera de los tres activa una reunión extraordinaria y, si corresponde, el plan de contingencia de la sección 8.3.

| KPI | Meta (base) | Frecuencia |
|---|---|---|
| Unidades vendidas al mes | Al menos 3,308 desde abril (equilibrio); 8,000 o más de setiembre a noviembre | Semanal |
| Hogares activos (compraron en los últimos 30 días) | 360 en mayo; 700 en diciembre | Mensual |
| Recompra a 60 días | Al menos 35 % | Mensual |
| Pedido promedio | Al menos 10 unidades (S/40.63) | Semanal |
| Costo de adquisición por cliente (pauta, muestras y POP entre clientes nuevos) | S/15 o menos | Mensual |
| Costo de producción puesto en almacén | S/1.65 o menos por unidad en el pack de 6 (opción B) a 3,000 u (versión anterior, opción A: S/1.91 a 3,000 u y S/1.35 a 8,000 u) | Por lote |
| Margen de contribución por unidad | S/0.86 o más | Mensual |
| Merma y vencidos | 5 % o menos; vencidos 2 % o menos | Por lote |
| Colegios y naturistas activos | 5 colegios en noviembre; 8 naturistas en diciembre | Mensual |
| Aceptación sensorial | Al menos 75 % de caritas 4 y 5 en cada lote nuevo | Trimestral |
| Caja | Al menos 1 mes de costos fijos (S/2,857) en todo momento | Semanal |
| Entregas a tiempo y reclamos | Al menos 95 % a tiempo; menos de 1 % de reclamos en el libro | Mensual |

---

## Fuentes

Documentos del equipo (base de todas las cifras no marcadas): `00-BRIEF-reformulacion.md`, `01-producto-sabores-y-recetas.md`, `02-insumos-proveedores-y-costeo.md`, `03-maquila-regulacion-y-permisos.md`, `04-publico-objetivo-y-buyer-persona-con-datos.md` y `03-entregables/04-plan-marketing-y-ventas-12-meses.md`.

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
13. Del documento 03: RM 195-2019-MINSA (quioscos), Comunicado 05-2026-DIGESA (RS sin costo), tarifas de INDECOPI 2026, UIT de S/5,500 y tesis de la UDEP sobre maquila (S/0.83 por empaque). Del documento 02: precios de insumos, empaque y competidores. Del documento 04: APEIM, CPI, Ipsos, Kantar y el SOM.
