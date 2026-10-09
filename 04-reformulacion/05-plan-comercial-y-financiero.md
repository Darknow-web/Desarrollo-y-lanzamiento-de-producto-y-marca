# 05. Plan comercial y financiero de AndiBite 2.0

**9-oct-2026: el equipo eliminó por ahora la suscripción; el pack de 12 se vende por pedido.**

**9-oct-2026: documentos considerados listos (costo en la inversión inicial) y venta física como canal principal.**

Versión 1, 3 de octubre de 2026. Documento de consultoría de mercados y finanzas para el Grupo 2 (Diana Ayoso, Carlos Inga, Angie Blas, Patricia Cárdenas y Adela Robles). Integra los documentos 00 a 04 de esta carpeta y los convierte en un plan de empresa: qué se lanza, cómo se opera, cuánto cuesta, a qué precio se vende, cuánto se espera vender, cuánta plata hace falta y en qué momento se recupera.

**Nota del 9 de octubre de 2026: modelo financiero v3.** El equipo confirmó los precios finales y tomó dos decisiones: (A) los documentos y permisos (S.A.C., RUC, marca, registro sanitario, análisis, etiqueta, carnés y póliza) se tratan como ya obtenidos, con su costo de S/6,251.20 dentro de la inversión inicial, y no frenan ninguna venta; (B) la venta física (stands, carritos, ferias y eventos) es el canal principal y WhatsApp queda para la recompra. Las ventas empiezan en **noviembre de 2026** y el año 1 va de **noviembre de 2026 a octubre de 2027**. La fuente de las cifras de precios, ventas, inversión, equilibrio, resultado y caja es el Excel `04-reformulacion/Costeo-presentaciones-AndiBite.xlsx` (hojas Resumen, Supuestos, Inversion, Costeo, Proyeccion y Mensual; se regenera con `build_costeo.py`). Este documento se alineó con ese Excel. Precios con IGV: stands, carritos y ferias, unidad S/5.00, pack de 6 S/26.00 y pack de 12 S/48.00; recompra por WhatsApp, S/4.00, S/24.90 y S/46.90; colegios, S/3.00 para AndiBite (el alumno paga S/4.00); tienda naturista, S/17.34 por pack de 6 para AndiBite (anaquel S/28.90, con 40 % para la tienda). El pack de 6 recomendado es la opción B (bolsitas individuales). Lo marcado como "versión anterior" (año comercial de marzo de 2027 a febrero de 2028 con venta directa como canal principal, 76,335 unidades, S/302,900.36 con IGV, inversión de S/34,484.24, equilibrio de 3,308 u/mes, costo de la opción A) se conserva solo como comparación. Los escenarios pesimista y optimista de esa versión ya no aplican: el Excel actual calcula solo el escenario base.

**Convenciones.** [HIPÓTESIS] = supuesto del equipo con su lógica explícita. [POR CONFIRMAR] = dato que no se pudo verificar en una fuente primaria y que se debe cotizar. Todas las cifras están en soles. Los precios al público incluyen IGV; los márgenes, costos y flujos se calculan **sin IGV**, porque el IGV que se cobra y el que se paga se compensan como crédito fiscal. El modelo de cálculo (recetas, costos por volumen, ventas, flujo) se hizo en una sola hoja para que todas las cifras de este documento cuadren entre sí.

**Limitación de búsqueda.** En esta sesión se agotó el cupo de búsquedas web. Se consultaron directamente las páginas de Culqi, Izipay, La Purita, Fika, Plaza Vea, Wong y modelo.pe. Las páginas de Mercado Pago, Mercado Libre, Rappi, PedidosYa, Yape Empresas y ProInnóvate bloquearon la consulta (HTTP 403, 404 o 418). Esos datos van marcados [POR CONFIRMAR].

---

## 0. Resumen ejecutivo

1. **Decisión central:** lanzar desde el primer día la **versión sin octógono**: cada brownie de 20 g endulzado con eritritol, plátano maduro y solo 15 g de panela por lote tiene entre 4.6 y 7.1 g de azúcar total por 100 g (el octógono se activa con 10 g). La versión con panela queda como plan B ya validado.
2. **Sabores y presentaciones de lanzamiento:** Choco Clásico con chispas sin azúcar, Choco-Plátano-Canela con cañihua y Choco-Lúcuma. Se vende en unidad (para probar en el stand), pack de 6 x 20 g, pack de 12 "Semana completa" por pedido y caja degustación de 3 sabores. De las 47,223 unidades del año 1, el 53.7 % se vende suelta, el 38.7 % en pack de 6 y el 7.6 % en pack de 12 (Excel, hoja Proyeccion).
3. **Costo de producción puesto en almacén**, con maquila y sangrecita en polvo, a 3,000 u/mes: con la opción B recomendada (bolsitas individuales, sin etiqueta por brownie) S/9.90 por pack de 6 (S/1.65 por unidad); la unidad suelta cuesta S/1.69 y el pack de 12, S/18.66 (S/1.56 por unidad). La opción C (brownies sueltos con papel manteca) baja el pack de 6 a S/9.39. Versión anterior, opción A (etiqueta en cada brownie): S/2.52 por unidad a 1,000 u/mes, S/1.91 a 3,000 y S/1.32 a 8,000 (S/15.15, S/11.48 y S/7.95 por pack de 6).
4. **Contribución por unidad.** Antes de pagar alquileres, impulsadoras y ferias, cada brownie deja S/1.43 en promedio: S/1.87 en stands y carritos, S/1.93 en ferias y eventos, S/0.86 en la recompra por WhatsApp, S/0.72 en colegios y S/0.63 en tiendas naturistas. Después de repartir los S/28,865 de stands, carritos y ferias entre las 47,223 unidades, queda **S/0.81 por unidad**. Versión anterior (venta directa, opción A): costo total unitario de S/5.86, S/3.84 y S/2.74 a 1,000, 3,000 y 8,000 u/mes.
5. **Precios (con IGV, confirmados el 9-oct-2026):** en stands, carritos y ferias, unidad a **S/5.00**, pack de 6 a **S/26.00** (S/4.33 por unidad) y pack de 12 a S/48.00 (S/4.00 por unidad). En la recompra por WhatsApp e Instagram, unidad a S/4.00 (caja degustación de 3 a S/12.00), pack de 6 a **S/24.90** (S/4.15 por unidad) y pack de 12 a S/46.90 (S/3.91 por unidad), con delivery gratis desde 2 packs. Quiosco escolar a S/4.00 la unidad al alumno (AndiBite le vende al concesionario a S/3.00). Tienda naturista con anaquel de S/28.90 por pack de 6, de los cuales AndiBite cobra S/17.34. Versión anterior: S/27.00, S/49.00 y S/31.90.
6. **Margen bruto** (precio sin IGV menos costo de producción, opción B): en el stand, 60.0 % en la unidad, 55.1 % en el pack de 6 y 54.1 % en el pack de 12; por WhatsApp, 50.0 %, 53.1 % y 53.1 %. Versión anterior, a S/4.50 y opción A: margen neto de −S/0.03 (−1 %) a 3,000 u/mes y S/1.07 (28 %) a 8,000.
7. **Ventas del año 1** (noviembre de 2026 a octubre de 2027, escenario base): **47,223 unidades y S/198,747.70 con IGV** (S/168,430.25 sin IGV), el 62 % del SOM de 75,600 unidades del documento 04. Van de 1,170 unidades en noviembre a 6,071 en octubre, con un promedio de 3,935 al mes. Versión anterior (marzo de 2027 a febrero de 2028): 76,335 u y S/302,900.36. El pesimista y el optimista de esa versión ya no aplican.
8. **Mezcla de canales en el escenario base (unidades):** 41.4 % stands y carritos en malls y supermercados (19,565), 17.2 % ferias y eventos (8,100), 18.6 % recompra por WhatsApp e Instagram (8,773), 15.0 % colegios (7,065) y 7.9 % tiendas naturistas (3,720); la suma difiere en 0.1 por el redondeo. La venta física en puntos propios y eventos (stands, carritos y ferias) es el 58.6 % de las unidades y el 66.0 % de las ventas con IGV. El supermercado en góndola queda para el año 2.
9. **Inversión inicial: S/40,644.24**: documentos y permisos S/6,251.20; desarrollo S/3,740.81; marca S/1,250; arranque (empaque, stock inicial, marketing de lanzamiento y capital de trabajo de 2 meses) S/18,369.30; equipos y 2 carritos S/7,338; imprevistos S/3,694.93. Se financia con S/25,000 de los socios (S/5,000 cada uno) y un préstamo de S/16,000 a 24 cuotas de S/897.81 (TEA de 35 %); un concurso de ProInnóvate queda como mejora posible, no como base. Versión anterior: S/34,484.24, con préstamo de S/10,000 a 12 cuotas.
10. **Punto de equilibrio:** 2,215 unidades al mes (369 packs de 6 equivalentes), con costos fijos de S/1,803.83 al mes (administración S/700, asistente S/0 porque los socios atienden los pedidos, marketing S/900 y depreciación S/203.83) y con el alquiler, las impulsadoras y las ferias ya repartidos en la contribución. El año promedia 3,935 unidades al mes. El resultado mensual es negativo en noviembre (−S/386) y en febrero (−S/475) y positivo en los otros 10 meses; el resultado acumulado es positivo desde marzo de 2027. Versión anterior: 3,308 u/mes (551 packs).
11. **Resultado operativo del año 1:** **S/16,816.14 (10.0 % de las ventas sin IGV)** con la opción B y S/18,350.11 (10.9 %) con la opción C, antes de intereses del préstamo, impuesto a la renta y sueldos de los socios. Sale de una contribución de S/67,327.14 menos S/28,865 de stands, carritos y ferias (alquiler S/12,500, impulsadoras S/10,890 y ferias pagadas S/5,475) y menos costos fijos de S/21,646. Los gastos de documentos, desarrollo y marca ya no se restan aparte: forman parte de la inversión inicial. Ojo: los socios no cobran sueldo.
12. **Payback y caja:** la inversión no se recupera en el año 1: entre el resultado operativo del año (S/16,816.14) y la inversión (S/40,644.24) faltan **S/23,828.10** (opción C: S/22,294.13). La caja más baja es de S/5,008.89 en febrero de 2027, con la cuota del préstamo incluida, y la caja al cierre del año 1 es de S/16,844.17. Versión anterior: payback de 9 meses de operación (noviembre de 2027) en un cálculo que ya no aplica.
13. **Sensibilidad** (cálculos derivados de la lógica del Excel, no son hojas del modelo): si el alquiler de los stands fuera el doble (S/1,000 por punto al mes), el resultado del año bajaría S/12,500, a S/4,316; si cada punto vendiera 20 % menos brownies por día, bajaría a unos S/8,450, y llegaría a cero con 40 % menos (unos 50 brownies por día y por punto en lugar de 84); si la maquila sale a S/0.60 en lugar de S/0.50, perdería unos S/5,000. El efecto del polvo de sangrecita a S/417 por kg está por recalcular.
14. **Régimen tributario:** S.A.C. en el Régimen MYPE Tributario (IGV de 18 %, pago a cuenta de 1 % y renta de 10 % sobre las primeras 15 UIT de utilidad) con facturación electrónica desde el primer día.
15. **Lo que hay que confirmar antes de firmar:** tarifa y lote mínimo de la maquila, precio del polvo de sangrecita a granel, aceptación infantil de la versión con eritritol, **el alquiler de los stands y carritos** (S/500 por punto al mes es un supuesto sin cotizar), el rendimiento real por día de cada punto y el costo de la póliza de responsabilidad civil [HIPÓTESIS].

---

## 1. Correcciones explícitas a los documentos 01 a 04

| Documento | Qué decía | Qué se corrige aquí y por qué |
|---|---|---|
| 02, sección 3 | Costeaba una receta de unos 1,150 g de masa como si rindiera 24 unidades y suponía polvo de sangrecita a S/120 por kg | Se costean las recetas del documento 01 (560 a 660 g de masa para 24 unidades de 20 g), que son las que irán a la maquila, con los precios del documento 02. Para el polvo de sangrecita se usa S/417 por kg (precio público de Malli) a 1,000 u/mes, S/300 a 3,000 y S/200 a 8,000 [HIPÓTESIS de descuento por volumen]. S/120 por kg no tiene cotización y era demasiado optimista |
| 01, sección 4 | "Todas las variantes superan el octógono"; quedaba abierto si el azúcar del plátano cuenta | Vale para la versión con azúcar o panela. Se agrega la versión sin octógono (sección 2.3). Siguiendo al documento 03, el azúcar del plátano **sí cuenta**, porque el parámetro es azúcar total |
| 01, recetas | Endulzaban con azúcar rubia | La versión de comparación usa panela, como piden el brief y el documento 02 |
| 04, sección 1.11 | SOM del año 1 entre octubre de 2026 y setiembre de 2027, a S/4.00 por unidad | El año 1 va de **noviembre de 2026 a octubre de 2027**, con la venta física como canal principal. El modelo vende 47,223 unidades, el 62 % del SOM de 75,600, y el precio sube a S/5.00 la unidad y S/26.00 el pack de 6 en el stand (S/24.90 por WhatsApp), porque la versión sin octógono, el alquiler del stand y la impulsadora lo exigen. Los documentos se tratan como ya obtenidos (su costo está en la inversión) y no retrasan la venta |
| 03-entregables/04 (plan de marketing anterior) | Ventas desde octubre de 2026 | Las ventas empiezan en **noviembre de 2026**, en stands, carritos y ferias, con los documentos considerados listos. WhatsApp pasa a ser el canal de recompra: el contacto se capta en el punto de venta y se le recuerda la recompra |
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

| Formato | Contenido | Para quién y para qué | Precio por WhatsApp con IGV |
|---|---|---|---|
| **Pack de 6 x 20 g (SKU principal)** | 2 unidades de cada sabor en bolsita individual (flow pack) sin etiqueta, dentro de un doypack kraft con zipper y etiquetas (opción B) | Claudia: una semana de lonchera con variedad y una recompra cada 2 semanas (documento 04) | S/24.90 (S/4.15 por unidad) |
| **Pack de 12 "Semana completa"** | 4 de cada sabor | Familias con 2 hijos (Claudia tiene a Matías y Luciana) o compra quincenal. Es el pack para la compra quincenal, que se vende por pedido (sin suscripción ni compromiso), con delivery gratis desde 2 packs y recordatorio de recompra opcional por WhatsApp | S/46.90 (S/3.91 por unidad, 5.8 % menos) |
| **Caja degustación de 3 sabores** | 1 unidad de cada sabor | Primera compra, ferias, regalos de cumpleaños y muestra para el pediatra. Trae un cupón de S/3.00 para el primer pack de 6 | S/12.00 (S/4.00 por unidad) |

**Lógica de la arquitectura de precios.** El pack de 6 es el producto que se compra cada dos semanas y fija la percepción de precio (S/4.15 por unidad). El pack de 12 premia la planificación, que es el rasgo central del público objetivo: es 5.8 % más barato por unidad y concentra pedidos, que es lo que más reduce el costo de delivery (con 12 unidades por pedido, el delivery cae de S/0.95 a S/0.79 por unidad). La caja degustación no busca margen: es la herramienta para que el niño pruebe delante de la madre, que es la condición de compra que identificó el focus 1. Por eso se vende a S/4.00 por unidad (S/12.00 la caja), un precio cercano al del pack de 6 (S/4.15) para no devaluar la marca, y lleva el cupón que empuja a la segunda compra. En el stand, donde el precio de lista es S/5.00 la unidad, S/26.00 el pack de 6 y S/48.00 el pack de 12, 6 de cada 10 brownies se venden sueltos para probar en el momento, 35 % en pack de 6 y 5 % en pack de 12 (Excel, hoja Supuestos, sección 6).

Solo la unidad que se vende suelta (stands, ferias y quioscos) lleva etiqueta individual de rotulado completo. En el pack de 6 de la opción B, recomendada, los brownies van en bolsitas sin etiqueta y el rotulado va en el doypack; la opción A (etiqueta en cada brownie) es la versión anterior.

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

Supuestos de azúcar: plátano con 12.2 g por 100 g (USDA, citado en el documento 01), panela con 90 % y lúcuma en polvo con 30 % [HIPÓTESIS del documento 01]. El eritritol no se cuenta como azúcar. Se valida con análisis de laboratorio en la preparación (fase 0).

**¿Por qué eritritol antes que alulosa?** Para el Codex, "azúcares" son todos los monosacáridos y disacáridos presentes en el alimento ([CXG 2-1985](https://www.fao.org/input/download/standards/34/CXG_002s_2015.pdf)). La alulosa es un monosacárido, así que un laboratorio o DIGESA podría contarla como azúcar total. Estados Unidos la excluye expresamente ([FDA, guía sobre alulosa](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-declaration-allulose-and-calories-allulose-nutrition-and-supplement-facts-labels)), pero Perú no tiene esa regla [POR CONFIRMAR con DIGESA y con el laboratorio]. El eritritol es un poliol (SIN 968) y no es azúcar. Dos cautelas sobre el eritritol. Primero, la EFSA fijó en 2023 una ingesta diaria admisible de 0.5 g por kg de peso al día [POR CONFIRMAR enlace: [EFSA](https://www.efsa.europa.eu/en/efsajournal/pub/8430)]: un niño de 18 kg puede consumir 9 g y un brownie trae entre 2 y 3 g, así que se recomienda **1 unidad al día**. Segundo, hay un estudio que asocia el eritritol en sangre con eventos cardiovasculares en adultos de riesgo ([Witkowski et al., Nature Medicine 2023](https://www.nature.com/articles/s41591-023-02223-9)). Es un riesgo de reputación que se maneja con transparencia en la etiqueta y con esa dosis baja. Si en la fase 0 se confirma que la alulosa no cuenta como azúcar, puede reemplazar hasta un 30 % del eritritol para mejorar el dorado y la humedad.

**Precios de los endulzantes (03-oct-2026):** alulosa Lakanto de 454 g a S/53.10 en Plaza Vea (S/116.96 por kg; [Plaza Vea](https://www.plazavea.com.pe/endulzante-alulosa-lakanto-classic-natural-doypack-454g-20634058/p)); Lakanto Classic de 800 g (ingredientes: "extracto de fruto del monje + eritritol") a S/94.90 en Wong (S/118.63 por kg; [Wong](https://www.wong.pe/endulzante-classic-lakanto-doypack-800-g-2/p)). A granel, con un importador, se supone S/60 por kg a 3,000 u/mes y S/30 por kg a 8,000 [HIPÓTESIS, cotizar].

**Comparación de las dos versiones**

| Criterio | V-P: con panela | V-SO: sin octógono (eritritol, plátano y 15 g de panela) |
|---|---|---|
| Azúcar total | 14.7 a 21.4 g por 100 g: **lleva octógono** | 4.6 a 7.1 g por 100 g: **sin octógono** [validar en laboratorio] |
| Insumos por unidad, sin IGV (1,000 / 3,000 / 8,000 u/mes) | S/0.63 / 0.50 / 0.39 | S/0.86 / 0.61 / 0.43 |
| Costo de producción por unidad | S/2.28 / 1.80 / 1.28 | S/2.52 / 1.91 / 1.32 (+S/0.25 / +0.11 / +0.05) |
| Sobrecosto en el año 1, escenario base | — | S/5,173.18 (1.9 % de las ventas netas; cifra de la versión anterior, con 76,335 u; por recalcular con 47,223 u) |
| Riesgo de sabor | Bajo: la panela es familiar y carameliza | Medio: el eritritol deja una sensación fría y dora menos. Se compensa con plátano, canela, horno a 170 °C y los 15 g de panela |
| Quioscos escolares | **No puede entrar** (RM 195-2019-MINSA, documento 03) | Puede entrar |
| Mensaje de marca | "Endulzado con panela", pero el octógono contradice la promesa de lonchera saludable | "Cero octógonos, hierro de verdad": calza con el 70 % que teme al "Alto en azúcar" (Ipsos, documento 04) |
| Costo de cambiar después | Nuevo análisis y nuevo RS o modificación (S/550 a 1,400, documento 03), reimpresión de etiquetas (unos S/720) y nueva prueba sensorial, con 2 a 3 meses perdidos en colegios | Ninguno |

**Por qué lanzar sin octógono cambia la economía del negocio, no solo la etiqueta.** La V-P le saldría al año unos S/5,173.18 más barata, pero perdería tres cosas que valen más. Primero, el canal colegio: en el escenario base representa 7,065 unidades y S/21,195.00 con IGV, y además es el canal que hace visible la marca ante padres de un mismo salón. Segundo, la conversión en venta directa: el 83 % de los consumidores dice que los octógonos cambian su compra y el 70 % teme justamente el "Alto en azúcar" (Ipsos 2025, documento 04). Un producto para padres que leen etiquetas no puede pedirles que ignoren la advertencia más temida. Tercero, la coherencia del relato de marca: "hierro de verdad, sabor a brownie" pierde fuerza si al lado del logo hay un octógono negro. El riesgo real de la V-SO no es el costo, sino el sabor, y eso se resuelve con la prueba sensorial de la fase 0, antes de invertir en la planta.

**Recomendación: lanzar primero la V-SO** en los tres sabores. Cuesta solo S/0.11 por unidad a 3,000 u/mes (3 % del precio neto), abre el canal colegio, sostiene el mensaje central del documento 04 y evita pagar dos veces el registro. Para que no sea un salto al vacío, la decisión pasa por un **filtro al cierre de la fase 0**: la V-SO debe lograr al menos 75 % de respuestas en las caritas 4 y 5, quedar a 0.5 puntos o menos de la V-P en la prueba a ciegas y medir menos de 8 g de azúcar por 100 g en el análisis preliminar. Si no pasa, se lanza la V-P solo en stands, ferias y venta por WhatsApp, y la V-SO entra después para colegios.

---

## 3. Modelo operativo por fases

**Roles fijos.** Diana Ayoso: producto, I+D y prueba sensorial. Patricia Cárdenas: operaciones (planta, compras, inventario, calidad y logística). Adela Robles: regulación, legal y relación con el contador. Angie Blas: marca, contenido y pauta. Carlos Inga: comercial (puntos de venta, WhatsApp, colegios, naturistas) y modelo financiero.

**Supuesto de trabajo (9-oct-2026).** Los documentos y permisos se tratan como ya obtenidos al empezar a vender, en noviembre de 2026. Su costo, S/6,251.20, está en la inversión inicial (sección 7) y no condiciona el calendario de ventas. Las fases 0 y 1 son de preparación: lo que cuestan está dentro de esa inversión. La fase 2, la venta, es la que genera el resultado del año 1.

| Fase | Actividades | Responsables | Costo | Entregables |
|---|---|---|---|---|
| **Fase 0: preparación del producto** | 3 rondas de las fórmulas V-P y V-SO, con prueba de umbral de sangrecita (80, 120 y 160 g de equivalente). Prueba sensorial con al menos 20 niños por sabor (escala de caritas) y prueba triangular con los padres. Focus 2 con precio preguntado después de probar, más una encuesta a 30 padres con Van Westendorp (documento 04). Análisis preliminar de azúcares y hierro de las 2 mejores fórmulas. Cotización a MAKING, Unión, INDDA y Organic Andean Bites. Cotización del polvo de sangrecita (Malli, Allpa Manta, Nutri H, camales con SENASA). Escalamiento y lote piloto en la planta | Diana (pruebas y escalamiento), Carlos (focus y encuesta), Patricia (cotizaciones y planta) | **S/3,740.81** (hoja Inversion, "desarrollo"): insumos de 3 lotes de prueba S/942.81 (3 × S/314.27, documento 02); endulzantes S/148.00; análisis preliminar S/750.00 (2 × S/375); prueba sensorial S/150.00; desarrollo y lote piloto en la planta S/1,750.00 [POR CONFIRMAR] | Fórmula congelada v3; informe sensorial; decisión sobre el octógono; precio validado; 2 plantas preseleccionadas |
| **Fase 1: preparación de documentos, marca, puntos de venta y arranque** | Contrato de maquila con confidencialidad (la S.A.C. como titular del RS y la planta como fabricante). Documentos y permisos, considerados listos al abrir ventas: S.A.C. en un CDE de PRODUCE, RUC en el RMT, REMYPE y libro de reclamaciones, marca en clase 30, análisis para el RS, perfil nutricional con hierro, vida útil, etiqueta (declarar "fuente de hierro" solo si el laboratorio mide al menos 2.1 mg por 100 g), RS por VUCE, carnés de sanidad y póliza de responsabilidad civil para stands. Identidad, fotos, web y catálogo de WhatsApp Business. Pedir espacio y cotización a malls, cadenas de supermercados y organizadores de ferias (documento 08). Fabricar 2 carritos con vitrina y gráfica. Compra de equipos y empaque, y primer lote para noviembre y diciembre | Adela (documentos, contrato y espacios), Patricia (planta, carritos y lote), Angie (identidad y lanzamiento), Carlos (cotización de espacios y primeros puntos) | **Documentos y permisos S/6,251.20** (S.A.C. S/150; RUC, REMYPE y libro de reclamaciones S/0; marca S/401.20; revisión legal S/400; análisis para el RS S/1,800; perfil nutricional y hierro S/1,125; vida útil S/1,050; etiqueta S/650; tasa del RS S/0; carnés S/75; póliza S/600 [HIPÓTESIS]). **Marca S/1,250**. **Equipos y 2 carritos S/7,338**. **Arranque S/18,369.30**: empaque S/3,030, stock inicial S/4,135.30, marketing de lanzamiento S/3,204 y capital de trabajo S/8,000 | Contrato firmado; documentos y permisos listos; etiqueta aprobada; 2 carritos; stock para noviembre y diciembre (5,525 unidades vendidas en el modelo); espacios cotizados |
| **Fase 2: venta desde noviembre de 2026** (año 1: noviembre de 2026 a octubre de 2027) | **Stands y carritos en malls y supermercados**, fines de semana: 1 punto en noviembre y enero, 2 puntos en diciembre y de febrero a julio, 3 puntos de agosto a octubre. Los socios atienden un punto; los demás llevan impulsadora (S/90 por día). Degustación en el punto y QR a WhatsApp. **Ferias y eventos:** 2 ferias navideñas pagadas en diciembre y 1 de campaña escolar en febrero (S/1,825 cada una); el resto son eventos sin costo (kermeses, cumpleaños y ferias gratuitas: 40 en el año). **Recompra por WhatsApp e Instagram:** recordatorio al cliente del stand, rutas de delivery los martes y viernes por zona, pack de 12 por pedido (sin suscripción). **Colegios (quiosco)** desde marzo de 2027 y **tiendas naturistas** a consignación o con factura. Producción mensual con control de calidad por lote. GS1 desde el mes 6. Evaluación de góndola (Flora & Fauna o Vivanda) en el mes 9. Cierre de números todos los domingos, con los brownies vendidos por día en cada punto | Carlos (puntos, ventas y colegios), Angie (contenido, pauta y material de stand), Patricia (producción y despacho), Adela (contabilidad, SUNAT y trámite de espacios), Diana (calidad y nuevos sabores) | Costos fijos de S/1,803.83 al mes (administración S/700, asistente S/0, marketing S/900 y depreciación S/203.83), más alquiler de S/500 por punto al mes [POR CONFIRMAR], impulsadoras (S/10,890 en el año), 3 ferias pagadas (S/5,475) y los costos variables de la sección 4 | 47,223 unidades vendidas en el año; 3 puntos de venta desde agosto; unos 5 colegios y 8 naturistas a octubre de 2027 [HIPÓTESIS: 300 u por colegio y 60 u por punto al mes]; resultado acumulado positivo desde marzo de 2027; reporte trimestral |

**Calendario del año 1.** Noviembre y diciembre se venden en stands y en las ferias navideñas; enero baja a un solo punto de venta por las vacaciones; febrero suma la campaña escolar; marzo incorpora los quioscos con el año escolar y de agosto a octubre se llega a 3 puntos. El resultado es negativo en noviembre y febrero y positivo en el resto de los meses (sección 8.2).

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
| Marketing fijo | S/800 / 1,300 / 2,000 al mes. La pauta se basa en el plan anterior (S/10 a 20 por día en ventanas de campaña); el CPM de Meta en Lima queda [POR CONFIRMAR]. En el modelo v3, S/900 al mes en promedio del año (pauta, degustaciones y material de stand), porque la captación se hace en el stand [HIPÓTESIS]. |
| Administración y personal | S/700 al mes (contador S/250 según el rango de S/150 a 400 del documento 03; software S/60; web S/30; teléfono S/60; movilidad S/150; GS1 prorrateado S/85; banco y otros S/65). El asistente a medio tiempo de S/800 de la versión anterior se eliminó: los socios atienden los pedidos por WhatsApp y las impulsadoras, a S/90 por día, cubren los puntos adicionales |
| Depreciación | Equipos mínimos por S/2,338.00 y 2 carritos por S/5,000.00, es decir S/7,338.00 a 36 meses: S/203.83 al mes (versión anterior: S/65 al mes) |
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

**Lectura.** (1) A 1,000 u/mes ningún precio cubre los costos fijos y la maquila. Esa escala solo sirve como marcha blanca, o directamente no conviene operarla. (2) S/3.50 por unidad (la referencia de la profesora para la marcha blanca) solo deja margen a partir de 8,000 u/mes y en venta directa, así que **no sirve como precio de lista**. (3) A S/4.50 (versión anterior), la venta directa era rentable a partir de unas 3,500 u/mes; con los precios confirmados, el equilibrio es de 2,215 u/mes (sección 8.1). (4) Los canales con intermediario (naturista y supermercado) solo son rentables con precios en góndola de S/5.30 a 5.50 por unidad y volúmenes de 8,000 u/mes o más. Por eso el supermercado queda para el año 2.

### 4.4 Costos del canal físico (modelo v3)

| Concepto | Valor | Fuente o nota |
|---|---|---|
| Alquiler del espacio por punto de venta, fines de semana | S/500 al mes [POR CONFIRMAR] | Módulo de 2 x 2 m desde S/500 hasta US$2,500 (Gestión, 15-sep-2023; documento 08). Ningún mall ni cadena publica tarifa |
| Impulsadora | S/90 por día de stand, en los puntos que no atienden los socios | Computrabajo: S/50 a 90 por día de fin de semana (documento 08). Los socios cubren 1 punto sin pago [HIPÓTESIS] |
| Feria pagada | S/1,825 por feria, con 700 unidades vendidas por feria [HIPÓTESIS] | La Feria de Barranco, S/1,650 a 2,000 (punto medio); el Bazar de la CCL cuesta S/2,500 + IGV, es decir S/2,950, S/1,125 más |
| Evento sin costo (kermés, cumpleaños, feria gratuita) | 150 unidades por evento [HIPÓTESIS] | Documento 08 |
| Costo variable por unidad en stand y feria | S/0.27, más pasarela de 3 % | Degustación (1 brownie regalado por cada 10 vendidos, S/0.17) más movilidad y bolsas (S/0.10) [HIPÓTESIS] |
| Contribución antes de alquiler y personal | S/1.87 por brownie en stands y carritos; S/1.93 en ferias y eventos | Excel, hoja Proyeccion |

En el año 1 el alquiler suma S/12,500 (25 meses-punto por S/500), las impulsadoras S/10,890 y las ferias pagadas S/5,475: **S/28,865 en total, S/0.61 por unidad vendida**. Un punto con impulsadora durante 9 días (S/500 más S/810 = S/1,310 al mes) se paga con unos 700 brownies al mes (78 por día de atención); un punto que atienden los socios (S/500 al mes) se paga con unos 270 (30 por día). El modelo supone 84 brownies por día y por punto en promedio. Las ferias pagadas no se pagan solas (700 brownies dejan unos S/1,350 de contribución frente a S/1,825 de costo): se justifican por los contactos que vuelven por WhatsApp.

---

## 5. Precio recomendado por canal

| Canal | Formato y precio al público (con IGV) | Precio que recibe AndiBite (con IGV) | Margen del canal | Lógica |
|---|---|---|---|---|
| **Stands, carritos y ferias (venta física, canal principal)** | Unidad **S/5.00**; pack de 6 **S/26.00** (S/4.33 por unidad); pack de 12 S/48.00 (S/4.00 por unidad) | Igual | 0 %; alquiler del punto, impulsadora y ferias pagadas se pagan aparte (sección 4.4) | Precio de lista en físico: el stand cuesta alquiler y personal, por eso es algo mayor que por WhatsApp. La unidad suelta (60 % de lo que se vende en el stand) deja que el niño pruebe delante de la madre; el pack de 6 y el de 12 son para llevarse. La caja degustación (S/12.00) queda para regalos y pedidos |
| **Recompra por WhatsApp e Instagram (delivery)** | Pack de 6: **S/24.90** (S/4.15 por unidad); pack de 12: S/46.90 (S/3.91 por unidad); unidad o caja degustación de 3: S/4.00 por unidad (S/12.00); delivery gratis desde 2 packs | Igual | 0 % (AndiBite asume el delivery y el 3 % de la pasarela) | Calza con la disposición a pagar de Claudia (S/24 a 28 por pack, de S/4 a 5 por unidad, documento 04). El pack de 12 a S/3.91 por unidad atiende a Rodrigo (S/3 a 4). Es más barato que el stand para premiar la recompra de quien ya probó |
| **Colegios (quiosco)** | Unidad **S/4.00** | S/3.00 | 25 % para el concesionario [HIPÓTESIS, negociar entre 25 y 30 %] | El ancla es el queque de la puerta del colegio (S/2.50 a 3, documento 04). Pagar S/1.00 a 1.50 más se justifica por el hierro y por no tener octógono. Solo entra la V-SO |
| **Tiendas naturistas** | Pack de 6 en anaquel **S/28.90** (S/4.82 por unidad) | S/17.34 por pack | 40 % | El canal necesita entre 35 y 50 % (documento 03). AndiBite cobra S/17.34 con IGV por pack (S/14.69 sin IGV, S/2.45 por unidad) y deja una contribución de S/3.75 por pack (S/0.63 por unidad, opción B) antes de costos fijos. Es un canal de vitrina, no de volumen |
| **Supermercados en góndola** (año 2) | Pack de 6 **S/32.90** (S/5.48 por unidad) [versión anterior; sin redefinir con los precios confirmados] | S/19.74 por pack | 35 % + 5 % | Exige GS1, factura, homologación y crédito de 30 a 60 días (documento 03). Solo es viable con 8,000 u/mes o más. En el año 1 se vende dentro del supermercado con carrito propio, en el canal de stands |

**Por qué un mismo producto tiene precios distintos según el canal.** En el stand y en la feria el precio es algo mayor que por WhatsApp (S/5.00 frente a S/4.00 la unidad, S/26.00 frente a S/24.90 el pack de 6 y S/48.00 frente a S/46.90 el de 12), porque el punto paga alquiler e impulsadora, y a cambio quien recompra por WhatsApp ahorra. Por regla, el precio al público en tiendas de terceros debe ser igual o mayor que el directo, para que la tienda no compita con la marca ni la marca canibalice a la tienda. En el quiosco se vende la unidad suelta a S/4.00, por debajo del precio del stand, porque es el único canal con ancla de precio de impulso (el queque de la puerta, a S/2.50-3) y porque ahí la compra la hace el niño con su propina, no el adulto. En la tienda naturista el pack sube a S/28.90 en el anaquel para cubrir el 40 % del canal sin destruir la contribución de AndiBite. La diferencia de S/4.00 por pack frente a WhatsApp (S/24.90) es, además, un incentivo para que la familia recurrente migre a la recompra por WhatsApp y al pack de 12, que son los de mayor margen bruto relativo.

**Benchmark por 20 g** (documento 02, precios del 03-oct-2026): Nutri H S/3.20 (galleta con hemoglobina bovina, el competidor más cercano); Siete Dragones S/3.01; Fika S/4.00; Mamalama S/4.10; Bimbo Nutra Bien S/1.67. El pack de 6 por WhatsApp a S/24.90 equivale a S/4.15 por brownie, a la par de Fika (S/4.00) y Mamalama (S/4.10), que se venden en góndola (S/0.15 y S/0.05 más). En el stand, el pack de 6 a S/26.00 (S/4.33 por brownie) queda 6 % a 8 % sobre ellos y la unidad a S/5.00, 22 % a 25 % sobre ellos; es el precio de probar en el momento y se debe validar con el Van Westendorp. La diferencia se justifica por el hierro hemínico, el producto sin octógono y la atención en el punto. Frente a Nutri H, el premio es de 30 % por WhatsApp: hay que comunicar el formato de brownie húmedo y la aceptación infantil probada. **Disposición a pagar del segmento:** el pack quincenal de S/24.90 suma S/49.80 al mes, es decir el 2.8 % del gasto en alimentos de un hogar B (S/1,795) y el 2.2 % de uno A (S/2,214) (APEIM 2025, documento 04). Estos precios se confirman o se ajustan con el Van Westendorp de la fase 0. Si la mediana de "caro, pero lo compraría" queda por debajo de S/4.00 por unidad, se bajan los precios del pack de 6 en el Excel (hoja Supuestos, celdas C40 a C42) y se recalcula el equilibrio, que hoy es de 2,215 u/mes.

---

## 6. Ventas del año 1 (noviembre de 2026 a octubre de 2027)

### 6.1 Supuestos por canal (escenario base)

Calendario: las ventas físicas empiezan en noviembre de 2026. En los colegios privados de Lima las clases empiezan a inicios de marzo y el año termina a mediados de diciembre [HIPÓTESIS, calendario 2027 de Minedu POR CONFIRMAR]; por eso el quiosco se suma desde marzo de 2027. Enero baja a un solo punto de venta por las vacaciones.

| Canal | Supuesto (base) |
|---|---|
| **Stands y carritos (malls y supermercados)** | Fines de semana. Puntos de venta: 1 en noviembre y enero, 2 en diciembre y de febrero a julio, 3 de agosto a octubre (25 meses-punto). Días de atención por punto: 9 al mes (12 en diciembre y 10 en julio). Brownies por día y por punto: de 50 en los meses de arranque a 100 en marzo (84 en promedio ponderado). Es el 41.4 % de las unidades |
| **Ferias y eventos** | 3 ferias pagadas (2 navideñas en diciembre y 1 de campaña escolar en febrero) con 700 unidades cada una, y 40 eventos sin costo (kermeses, cumpleaños y ferias gratuitas) con 150 unidades cada uno: 3 en noviembre, 2 en diciembre, 1 en enero, 2 en febrero, 4 en marzo y abril, 5 en mayo, 4 en junio, 3 en julio y 4 de agosto a octubre [HIPÓTESIS] |
| **Recompra por WhatsApp e Instagram (delivery)** | El 35 % de las unidades vendidas en stands, carritos y ferias el mes anterior vuelve a comprar por WhatsApp, con recordatorio y sin suscripción [HIPÓTESIS]. En noviembre, 150 pedidos de contactos captados en las degustaciones previas [HIPÓTESIS] |
| **Colegios (quiosco)** | Desde marzo de 2027, de 300 unidades en marzo a 1,500 en octubre (unos 5 colegios de 300 u al mes) [HIPÓTESIS]. Sin venta de noviembre a febrero |
| **Naturistas** | De 120 unidades en noviembre a 480 en octubre (unos 8 puntos de 60 u al mes) [HIPÓTESIS]. Pack de 6 por consignación o con factura |
| **Supermercados en góndola** | 0 en el año 1; en el supermercado se vende con carrito propio dentro del canal de stands |

**Cómo se reconcilia con el SOM del documento 04.** El documento 04 calculó 700 hogares núcleo que compran 18 packs al año, es decir 75,600 unidades. El año 1 del modelo vende 47,223 unidades (62 % del SOM), y ya no depende de que cada hogar se registre y recompre cada dos semanas, sino de cuántos brownies se venden por día en cada punto: la venta física es el 58.6 % de las unidades y la recompra por WhatsApp (35 % de lo vendido en físico el mes anterior) es el 18.6 %.

Presentaciones por canal (Excel, hoja Supuestos, sección 6): en stands, 60 % unidad, 35 % pack de 6 y 5 % pack de 12; en ferias, 70 % unidad y 30 % pack de 6; en WhatsApp, 10 % unidad o caja degustación, 60 % pack de 6 y 30 % pack de 12; en colegios, 100 % unidad; en naturistas, 100 % pack de 6. Precio realizado por unidad con IGV (hoja Proyeccion): S/4.72 en stands, S/4.80 en ferias, S/4.06 por WhatsApp, S/3.00 en colegios y S/2.89 en naturistas (S/4.21 en promedio).

### 6.2 Escenario base, mes a mes

| Concepto | Nov-26 | Dic-26 | Ene-27 | Feb-27 | Mar-27 | Abr-27 | May-27 | Jun-27 | Jul-27 | Ago-27 | Set-27 | Oct-27 | Total año |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Puntos de venta con stand o carrito | 1 | 2 | 1 | 2 | 2 | 2 | 2 | 2 | 2 | 3 | 3 | 3 | 25 |
| Días de atención por punto | 9 | 12 | 9 | 9 | 9 | 9 | 9 | 9 | 10 | 9 | 9 | 9 | 112 |
| Brownies por día y por punto | 50 | 90 | 50 | 80 | 100 | 80 | 85 | 80 | 85 | 85 | 90 | 90 | 84 (promedio) |
| Stands y carritos (malls y supermercados) | 450 | 2,160 | 450 | 1,440 | 1,800 | 1,440 | 1,530 | 1,440 | 1,700 | 2,295 | 2,430 | 2,430 | 19,565 |
| Ferias y eventos | 450 | 1,700 | 150 | 1,000 | 600 | 600 | 750 | 600 | 450 | 600 | 600 | 600 | 8,100 |
| Recompra por WhatsApp e Instagram | 150 | 315 | 1,351 | 210 | 854 | 840 | 714 | 798 | 714 | 753 | 1,013 | 1,061 | 8,773 |
| Colegios (quiosco) | 0 | 0 | 0 | 0 | 300 | 600 | 765 | 900 | 600 | 1,200 | 1,200 | 1,500 | 7,065 |
| Tiendas naturistas | 120 | 180 | 180 | 240 | 300 | 300 | 360 | 360 | 360 | 420 | 420 | 480 | 3,720 |
| **Total unidades** | **1,170** | **4,355** | **2,131** | **2,890** | **3,854** | **3,780** | **4,119** | **4,098** | **3,824** | **5,268** | **5,663** | **6,071** | **47,223** |
| **Ventas con IGV (S/)** | 5,239 | 20,148 | 8,851 | 13,139 | 16,606 | 15,752 | 17,053 | 16,654 | 15,919 | 21,578 | 23,271 | 24,539 | 198,747.70 |
| Ventas sin IGV (S/) | 4,440 | 17,074 | 7,501 | 11,135 | 14,073 | 13,349 | 14,451 | 14,114 | 13,491 | 18,286 | 19,721 | 20,796 | 168,430.25 |

### 6.3 Resultado de las ventas por canal y por presentación (año 1, opción B)

| Canal | Unidades | % de las unidades | Ventas con IGV (S/) | % de las ventas | Contribución (S/) | Contribución por unidad (S/) |
|---|---|---|---|---|---|---|
| Stands y carritos (malls y supermercados) | 19,565 | 41.4 % | 92,281.58 | 46.4 % | 36,678.08 | 1.87 |
| Ferias y eventos | 8,100 | 17.2 % | 38,880.00 | 19.6 % | 15,657.25 | 1.93 |
| Recompra por WhatsApp e Instagram | 8,773 | 18.6 % | 35,640.31 | 17.9 % | 7,553.28 | 0.86 |
| Colegios (quiosco) | 7,065 | 15.0 % | 21,195.00 | 10.7 % | 5,112.93 | 0.72 |
| Tiendas naturistas | 3,720 | 7.9 % | 10,750.80 | 5.4 % | 2,325.60 | 0.63 |
| **Total** | **47,223** | **100 %** | **198,747.70** | **100 %** | **67,327.14** | **1.43** |

| Presentación | Unidades | Envases vendidos | Ventas con IGV (S/) | % de las unidades |
|---|---|---|---|---|
| Unidad individual | 25,351 | 25,351 | 111,749.20 | 53.7 % |
| Pack de 6 | 18,262 | 3,044 | 72,799.15 | 38.7 % |
| Pack de 12 | 3,610 | 301 | 14,199.34 | 7.6 % |

**Escenarios.** La versión anterior tenía un escenario pesimista y uno optimista (mar-2027 a feb-2028, con venta directa como canal principal). El Excel actual calcula solo el escenario base; para probar otro escenario se cambian las celdas azules de las hojas Supuestos y Mensual (puntos de venta, días, brownies por día, eventos y alquiler). Las sensibilidades principales están en la sección 8.3.

### 6.4 Por qué medio se vende cada unidad (escenario base) [HIPÓTESIS de mezcla]

| Canal | Medio de pedido | Unidades | Medio de pago | Medio de entrega |
|---|---|---|---|---|
| Stands y carritos | Compra en el punto después de probar (60 % unidad, 35 % pack de 6, 5 % pack de 12); QR a WhatsApp para el recordatorio | 19,565 | Yape o Plin con QR, POS (Izipay P2 Lite SE) y efectivo | Entrega en mano |
| Ferias y eventos | 3 ferias pagadas (2,100 u) y 40 eventos sin costo, entre kermeses de colegio, cumpleaños y ferias gratuitas (6,000 u) | 8,100 | Ídem | Entrega en mano |
| Recompra por WhatsApp e Instagram | WhatsApp Business con recordatorio al cliente del punto (35 % de lo vendido en físico el mes anterior) más 150 pedidos del primer mes; Instagram con clic a WhatsApp; pack de 12 por pedido | 8,773 | Yape o Plin, transferencia o tarjeta por link de Culqi o Izipay | Motorizado o courier en rutas de martes y viernes por zona; recojo en un punto acordado; delivery gratis desde 2 packs |
| Colegios | Pedido B2B del concesionario por WhatsApp o correo; venta al alumno en el quiosco | 7,065 | Factura electrónica; transferencia a 15 o 30 días | Ruta semanal al colegio |
| Naturistas | Pedido B2B; venta en anaquel | 3,720 | Factura; 30 días o consignación | Reposición quincenal |

---

## 7. Inversión inicial y financiamiento

Todo lo que hace falta para vender desde el primer día está aquí, una sola vez (hoja Inversion del Excel). Los documentos y permisos se tratan como ya obtenidos al abrir las ventas en noviembre de 2026; su costo es parte de la inversión, no una condición del calendario.

| Rubro | Detalle | S/ |
|---|---|---|
| Documentos y permisos | S.A.C. en un CDE de PRODUCE (notaría) S/150; RUC, Régimen MYPE Tributario, REMYPE y libro de reclamaciones virtual S/0; marca en INDECOPI, clase 30, S/401.20; revisión legal del contrato de maquila S/400; análisis para el registro sanitario S/1,800 (3 × S/600); perfil nutricional y hierro S/1,125 (3 × S/375); estudio de vida útil S/1,050; diseño y validación de la etiqueta S/650; tasa del RS S/0 (documento 03); carnés de sanidad de los 5 socios S/75; póliza de responsabilidad civil para stands S/600 [HIPÓTESIS] | 6,251.20 |
| Desarrollo del producto | Pruebas caseras (insumos de 3 lotes) S/942.81; endulzantes S/148; análisis preliminar de azúcar y hierro S/750; prueba sensorial con niños S/150; desarrollo y lote piloto en la planta S/1,750 [POR CONFIRMAR] (sección 3) | 3,740.81 |
| Marca | Identidad S/800; fotos de producto S/300; web y dominio S/150 | 1,250.00 |
| Equipos mínimos y 2 carritos | Equipos S/2,338: balanza S/60; selladora de impulso S/150; 4 moldes S/120; termómetros S/80; 3 coolers S/240; estantería S/350; impresora térmica de lotes S/450; kit de feria (toldo, mesa y banner) S/780; POS S/108. Más 2 carritos de exhibición con vitrina y gráfica, 2 × S/2,500 = S/5,000 [POR CONFIRMAR; melamina a medida de S/1,150 a 1,350 por metro lineal, documento 08] | 7,338.00 |
| Empaque inicial | Mínimos de compra: 5,000 flow packs S/450; 5,000 etiquetas individuales más troquel S/1,330; 1,000 doypacks S/530; 2,000 etiquetas de doypack S/720 | 3,030.00 |
| Stock inicial | Para noviembre y diciembre: insumos, maquila, control de calidad, transporte y merma | 4,135.30 |
| Marketing de lanzamiento (noviembre de 2026) | 600 muestras de degustación S/1,146; 40 packs para influencers S/458; pauta de expectativa S/600; POP S/400; material para ferias y kermeses S/300; video con niños (con consentimiento) S/300 | 3,204.00 |
| Capital de trabajo de 2 meses | Colchón de caja para los primeros meses de venta; con la cuota del préstamo, la caja mínima del año 1 es de S/5,008.89 (sección 8.2) | 8,000.00 |
| Imprevistos 10 % | Sobre todo lo anterior | 3,694.93 |
| **Inversión total** | | **40,644.24** |

| Fuente | Monto (S/) | Condición |
|---|---|---|
| Aporte de los 5 socios | 25,000.00 (S/5,000 cada uno, 61.5 % de la inversión) | Capital de la S.A.C. Si se constituye por un CDE con capital de hasta 1 UIT (S/5,500), se registra ese capital y el resto se aporta como cuenta por pagar a socios [POR CONFIRMAR con el notario] |
| Préstamo | 16,000.00 | 24 cuotas de S/897.81 con una TEA de 35 % [POR CONFIRMAR; comparar tasas de microempresa en la SBS]; intereses totales de S/5,547.46; pagos del año 1 de S/10,773.73 (6.4 % de las ventas sin IGV). Se eligen 24 cuotas porque con 12 la cuota (unos S/1,560) se come la caja de los primeros meses. Alternativa: préstamo familiar sin intereses |
| Concurso de ProInnóvate (Startup Perú, línea de emprendimientos innovadores) | Hasta unos S/50,000 no reembolsables en convocatorias anteriores, con aporte de contrapartida del equipo [POR CONFIRMAR: el monto y las bases 2026 no se pudieron verificar porque gob.pe/proinnovate bloqueó la consulta] | **No se cuenta en el plan base**: el concurso tarda de 4 a 6 meses y es competitivo. Si se gana, se prepaga el préstamo y se financia el año 2 (GS1, film impreso y supermercado) |

**Lógica del financiamiento.** Los S/11,242.01 de documentos, desarrollo y marca son riesgo puro (ningún banco los financiaría antes de que exista el producto) y los cubre el aporte de los socios. El préstamo ayuda a pagar lo que se convierte en activo o en caja: los 2 carritos y los equipos (S/7,338), el stock, el empaque y el capital de trabajo. Los pagos del préstamo en el año 1 equivalen al 6.4 % de las ventas sin IGV. La regla para los 5 socios es aportar lo mismo y tener la misma participación (20 % cada uno), y dejar escrito en el estatuto de la S.A.C. cómo se suman aportes adicionales si se activa el plan de contingencia.

El total financiado es de S/41,000; quedan S/355.76 adicionales en caja, que sumados al capital de trabajo dan la caja inicial de S/8,355.76 con la que parte la hoja Mensual.

---

## 8. Punto de equilibrio, resultado, flujo de caja y payback

### 8.1 Punto de equilibrio

Costos fijos mensuales: administración S/700 + asistente S/0 (los socios atienden los pedidos) + marketing S/900 + depreciación de equipos y carritos S/203.83 = **S/1,803.83**. Además, el alquiler, las impulsadoras y las ferias pagadas (S/28,865 al año, S/0.61 por unidad) se descuentan de la contribución: de los S/1.43 que deja cada unidad antes de esos costos, quedan **S/0.81** (Excel, hoja Resumen).

| Concepto | Opción B (bolsitas) | Opción C (sueltos) |
|---|---|---|
| Contribución por unidad después de stands y ferias | S/0.81 | S/0.85 |
| Costos fijos al mes | S/1,803.83 | S/1,803.83 |
| **Punto de equilibrio (unidades al mes)** | **2,215** | 2,130 |
| En packs de 6 equivalentes al mes | 369 | 355 |
| En soles con IGV al mes (a S/4.21 por unidad en promedio) | unos S/9,300 | unos S/9,000 |

El año promedia 3,935 unidades al mes, es decir 78 % más que el equilibrio. El equilibrio es un promedio del año: los meses con una feria pagada (diciembre y febrero) o con un solo punto de venta (noviembre y enero) pueden quedar cerca de cero o en negativo aunque se supere esa cifra. Versión anterior: 3,308 u/mes (551 packs) con venta directa como canal principal.

### 8.2 Resultado operativo y caja mensual del año 1 (escenario base, opción B; S/ sin IGV salvo la primera fila; meses redondeados al sol y totales con centavos; antes de intereses e impuesto a la renta)

| Concepto | Nov-26 | Dic-26 | Ene-27 | Feb-27 | Mar-27 | Abr-27 | May-27 | Jun-27 | Jul-27 | Ago-27 | Set-27 | Oct-27 | Total año |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ventas con IGV | 5,239 | 20,148 | 8,851 | 13,139 | 16,606 | 15,752 | 17,053 | 16,654 | 15,919 | 21,578 | 23,271 | 24,539 | 198,747.70 |
| Ventas sin IGV | 4,440 | 17,074 | 7,501 | 11,135 | 14,073 | 13,349 | 14,451 | 14,114 | 13,491 | 18,286 | 19,721 | 20,796 | 168,430.25 |
| Contribución (opción B) | 1,918 | 7,719 | 2,409 | 4,963 | 5,674 | 5,204 | 5,711 | 5,423 | 5,331 | 7,241 | 7,718 | 8,014 | 67,327.14 |
| Alquiler de espacios para stands y carritos | −500 | −1,000 | −500 | −1,000 | −1,000 | −1,000 | −1,000 | −1,000 | −1,000 | −1,500 | −1,500 | −1,500 | −12,500 |
| Impulsadoras | 0 | −1,080 | 0 | −810 | −810 | −810 | −810 | −810 | −900 | −1,620 | −1,620 | −1,620 | −10,890 |
| Ferias pagadas | 0 | −3,650 | 0 | −1,825 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | −5,475 |
| Costos fijos | −1,804 | −1,804 | −1,804 | −1,804 | −1,804 | −1,804 | −1,804 | −1,804 | −1,804 | −1,804 | −1,804 | −1,804 | −21,646 |
| **Resultado operativo (opción B)** | **−386** | **185** | **105** | **−475** | **2,060** | **1,590** | **2,098** | **1,809** | **1,627** | **2,318** | **2,795** | **3,091** | **16,816.14** |
| Resultado acumulado | −386 | −201 | −96 | −571 | 1,489 | 3,080 | 5,177 | 6,986 | 8,613 | 10,931 | 13,726 | 16,816 | 16,816.14 |
| Cuota del préstamo (24 cuotas) | −898 | −898 | −898 | −898 | −898 | −898 | −898 | −898 | −898 | −898 | −898 | −898 | −10,773.73 |
| **Caja al cierre del mes** | **7,276** | **6,767** | **6,178** | **5,009** | **6,375** | **7,272** | **8,675** | **9,790** | **10,723** | **12,347** | **14,448** | **16,844** | **16,844.17** |

La caja parte de S/8,355.76 (capital de trabajo de S/8,000 más lo que sobra de la inversión) y cada mes suma el resultado y la depreciación (que no sale de caja) y resta la cuota del préstamo, que incluye capital e intereses. Es una caja simplificada [HIPÓTESIS]: no modela el desfase de cobranzas a colegios y naturistas (30 días) ni el pago anticipado de la producción del mes siguiente; esos desfases se deben revisar con el contador cuando haya ventas reales.

**Lectura.** (1) Noviembre cierra en −S/386: hay un solo punto de venta, 1,170 unidades y los 3 eventos sin costo, y la inversión en marketing de lanzamiento ya está pagada. (2) Diciembre vende 4,355 unidades, pero las dos ferias navideñas pagadas (S/3,650) y la impulsadora del segundo punto (S/1,080) dejan solo S/185. (3) Enero, con un punto y 2,131 unidades (1,351 de recompra por WhatsApp), deja S/105. (4) Febrero cierra en −S/475 por la feria de campaña escolar (S/1,825) y los dos puntos con impulsadora. (5) El resultado acumulado es negativo hasta febrero (−S/571) y positivo desde marzo de 2027 (S/1,489 en marzo). De marzo a octubre el resultado mensual está entre S/1,590 y S/3,091. (6) La caja baja a S/5,008.89 en febrero de 2027, su mínimo, casi tres veces los costos fijos de un mes, y cierra el año en S/16,844.17; el capital de trabajo de S/8,000 es lo que sostiene noviembre y febrero.

### 8.3 Resultado del año 1 y payback

| Concepto (S/ sin IGV) | Opción B (bolsitas) | Opción C (sueltos) |
|---|---|---|
| Ventas sin IGV | 168,430.25 | 168,430.25 |
| Producción y costos variables de canal | −101,103.11 | −99,569.14 |
| **Contribución** | **67,327.14** | **68,861.11** |
| Alquiler de espacios para stands y carritos | −12,500.00 | −12,500.00 |
| Impulsadoras | −10,890.00 | −10,890.00 |
| Ferias pagadas | −5,475.00 | −5,475.00 |
| Administración | −8,400.00 | −8,400.00 |
| Asistente de pedidos | 0.00 | 0.00 |
| Marketing | −10,800.00 | −10,800.00 |
| Depreciación | −2,446.00 | −2,446.00 |
| **Resultado operativo** | **16,816.14** | **18,350.11** |
| **Margen operativo** | **10.0 %** | **10.9 %** |
| Inversión inicial | −40,644.24 | −40,644.24 |
| **Resultado del año 1 menos la inversión** | **−23,828.10** | **−22,294.13** |

El resultado no incluye los intereses del préstamo (S/5,547.46 en total, en 24 cuotas), el impuesto a la renta anual ni sueldos para los socios. Los gastos de documentos, desarrollo y marca ya no se descuentan aparte, como en la versión anterior: son parte de la inversión.

**Payback.** La inversión **no se recupera en el año 1**: faltan S/23,828.10 (opción B). Con el ritmo de octubre de 2027 (S/3,091 al mes) faltarían unos 8 meses más, es decir hacia mediados de 2028 [estimación gruesa; el Excel no proyecta el año 2 ni la estacionalidad de enero y febrero]. Versión anterior: payback de 9 meses de operación (noviembre de 2027), calculado con otro año comercial y otros canales.

**Advertencias.** (1) El resultado supone que los socios no cobran sueldo: si cada uno recibiera S/500 al mes (S/30,000 al año), el resultado operativo sería negativo, de unos −S/13,200. (2) **Sensibilidades** (cálculos derivados de la lógica del Excel, no son hojas del modelo): con el alquiler al doble (S/1,000 por punto al mes) el resultado baja S/12,500, a S/4,316; con 20 % menos brownies por día y por punto, baja a unos S/8,450, y llega a cero con 40 % menos; con la maquila a S/0.60 baja unos S/5,000; con una recompra por WhatsApp de 20 % en lugar de 35 %, baja a unos S/13,600. El efecto del polvo de sangrecita a S/417 por kg está por recalcular. (3) **Plan de contingencia:** si el promedio de brownies por día y por punto cae por debajo de 60 durante dos meses seguidos [HIPÓTESIS; el resultado del año llega a cero con unos 50], se cierran los puntos con impulsadora (S/810 al mes por punto), se cancelan las ferias pagadas que falten, se sigue solo con los puntos que atienden los socios, los colegios y los eventos sin costo, y, si la caja baja de un mes de costos fijos, cada socio aporta S/2,500 adicionales (S/12,500) y se replantea el precio o el formato antes de seguir.

---

## 9. Riesgos, mitigaciones y KPIs

### 9.1 Diez riesgos

| # | Riesgo | Impacto | Mitigación |
|---|---|---|---|
| 1 | El alquiler del stand o del carrito no está cotizado (el modelo supone S/500 por punto al mes y ningún mall ni cadena publica tarifa) o el mall no da el espacio | Alto: son S/12,500 al año; al doble, el resultado baja a S/4,316 | Pedir cotización escrita a 5 malls, a InRetail y a Cencosud (plantilla del documento 08); empezar por programas de emprendedores, gratuitos o simbólicos, y pop-ups de fin de semana; cambiar el valor en la hoja Supuestos (B57) apenas lleguen las cotizaciones |
| 2 | Cada punto vende menos de 80 brownies por día (el modelo supone 84 en promedio, de 50 a 100) | Alto: con 40 % menos el resultado del año llega a cero | Degustación en el punto, elegir pasillos de alto tráfico, medir ventas por día y por hora, mover o cerrar puntos que no rindan; sumar eventos sin costo y colegios; enero y febrero ya suponen menos puntos |
| 3 | Falta de personal y de tiempo: 5 estudiantes atienden un punto los fines de semana y el resto depende de impulsadoras (S/90 por día), en temporada de exámenes | Medio-alto | Turnos rotativos de los socios, bolsa de 3 o 4 impulsadoras con carné de sanidad y guion de venta, plantillas de WhatsApp Business y producción tercerizada |
| 4 | Ninguna planta acepta lotes de 3,000 a 5,000 unidades o la maquila supera S/0.60 | Alto: pierde unos S/5,000 al año por cada S/0.10 de más | Cotizar 4 plantas; usar INDDA para las "primeras maquilas"; negociar corridas bimestrales, siempre dentro de la vida útil |
| 5 | Escasez o precio alto del polvo de sangrecita | Medio-alto: es el insumo crítico | Homologar 2 proveedores (Malli y Allpa Manta) y cotizar polvo de pollo con un camal registrado en SENASA; la AndiBite S.A.C. compra el insumo y se lo entrega a la planta |
| 6 | Los niños rechazan la V-SO (sensación fría del eritritol, poco dulzor) | Alto | Filtro de la fase 0 con la V-P como respaldo; mezcla con alulosa si DIGESA confirma que no cuenta como azúcar; más plátano y canela. El stand permite medirlo en vivo con la degustación |
| 7 | El laboratorio cuenta la alulosa como azúcar u observa el claim de hierro | Medio | Basar la fórmula en eritritol; declarar "fuente de hierro" solo con análisis; nunca decir "previene la anemia" (D. Leg. 1044, documento 03) |
| 8 | La recompra por WhatsApp es menor al 35 % de lo vendido en físico el mes anterior | Medio: son 8,773 unidades (18.6 %) y S/7,553 de contribución | Captar el WhatsApp de cada cliente del stand con QR y cupón; recordatorio a los 12 días; rotar un sabor de temporada; si baja de 20 % en dos meses, reforzar el contacto en el punto antes de gastar en pauta |
| 9 | Caja ajustada: la mínima es S/5,008.89 en febrero de 2027 y la caja es simplificada (sin desfase de cobranzas) | Alto si se combina con los riesgos 1 y 2 | Plan de contingencia (sección 8.3); nada de crédito a canales mientras no haya 2 meses de caja; revisar la caja con el contador cuando haya ventas reales |
| 10 | Incidente de inocuidad (moho, vida útil menor a la declarada, mala manipulación en el stand) | Muy alto para una marca infantil | Estudio de vida útil, control de calidad por lote, contramuestras, rotación FIFO, vencimiento corto (60 días) al inicio, carné de sanidad vigente y cadena de manipulación en el stand |

### 9.2 KPIs del año 1

**Gobierno de los indicadores.** Carlos Inga consolida los KPIs todos los domingos en la hoja de pedidos (el mismo Google Sheets del plan de marketing anterior) y el equipo los revisa en 30 minutos. Hay tres semáforos que obligan a decidir sin esperar el cierre del trimestre: menos de 60 brownies por día y por punto durante dos fines de semana seguidos [HIPÓTESIS], la caja por debajo de un mes de costos fijos y el costo de producción por encima de S/2.10 en dos lotes seguidos. Cualquiera de los tres activa una reunión extraordinaria y, si corresponde, el plan de contingencia de la sección 8.3.

| KPI | Meta (base) | Frecuencia |
|---|---|---|
| Brownies por día y por punto de venta | 80 o más (el modelo supone 84 en promedio: de 50 en los meses de arranque a 100 en marzo) | Cada fin de semana |
| Unidades vendidas al mes | Al menos 2,215 (equilibrio); promedio de 3,935 en el año; de 5,268 a 6,071 de agosto a octubre | Semanal |
| Recompra por WhatsApp | 35 % de las unidades vendidas en físico el mes anterior | Mensual |
| Puntos de venta activos | 1 en noviembre y enero; 2 en diciembre y de febrero a julio; 3 de agosto a octubre | Mensual |
| Brownies por evento | 700 o más en feria pagada; 150 o más en evento sin costo | Por evento |
| Alquiler por punto | S/500 o menos al mes [POR CONFIRMAR] | Por cotización |
| Costo de producción puesto en almacén | S/1.65 o menos por unidad en el pack de 6 (opción B) a 3,000 u (versión anterior, opción A: S/1.91 a 3,000 u y S/1.35 a 8,000 u) | Por lote |
| Contribución por unidad | S/1.43 o más antes de stands y ferias; S/0.81 o más después | Mensual |
| Resultado operativo mensual | Positivo todos los meses desde marzo de 2027 (el modelo da entre S/1,590 y S/3,091) | Mensual |
| Merma y vencidos | 5 % o menos; vencidos 2 % o menos | Por lote |
| Colegios y naturistas activos | Unos 5 colegios y 8 naturistas a octubre de 2027 [HIPÓTESIS] | Mensual |
| Aceptación sensorial | Al menos 75 % de caritas 4 y 5 en cada lote nuevo | Trimestral |
| Caja | Al menos 1 mes de costos fijos (S/1,804) en todo momento; el modelo prevé un mínimo de S/5,009 en febrero de 2027 | Semanal |
| Entregas a tiempo y reclamos | Al menos 95 % a tiempo; menos de 1 % de reclamos en el libro | Mensual |

---

## Fuentes

Documentos del equipo (base de todas las cifras no marcadas): `00-BRIEF-reformulacion.md`, `01-producto-sabores-y-recetas.md`, `02-insumos-proveedores-y-costeo.md`, `03-maquila-regulacion-y-permisos.md`, `04-publico-objetivo-y-buyer-persona-con-datos.md`, `08-venta-fisica-stands-y-ferias.md` y `03-entregables/04-plan-marketing-y-ventas-12-meses.md`.

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
