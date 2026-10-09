# 05. Plan comercial y financiero de AndiBite 2.0

**9-oct-2026, modelo v5: año 1 de enero a diciembre de 2027, personal operativo pagado, sangrecita fresca y maquila de S/0.45.**

**9-oct-2026: el equipo eliminó por ahora la suscripción; el pack de 12 se vende por pedido.**

**9-oct-2026: documentos considerados listos (costo en la inversión inicial) y venta física como canal principal.**

Versión 1, 3 de octubre de 2026. Documento de consultoría de mercados y finanzas para el Grupo 2 (Diana Ayoso, Carlos Inga, Angie Blas, Patricia Cárdenas y Adela Robles). Integra los documentos 00 a 04 de esta carpeta y los convierte en un plan de empresa: qué se lanza, cómo se opera, cuánto cuesta, a qué precio se vende, cuánto se espera vender, cuánta plata hace falta y en qué momento se recupera.

**Nota del 9 de octubre de 2026: modelo financiero v5.** El equipo confirmó los precios finales y tomó estas decisiones: (A) los documentos y permisos (S.A.C., RUC, marca, registro sanitario, análisis, etiqueta, carnés y póliza) se tratan como ya obtenidos, con su costo de S/6,251.20 dentro de la inversión inicial, y no frenan ninguna venta; (B) la venta física (stands, carritos, ferias y eventos) es el canal principal y WhatsApp queda para la recompra; (C) todo el trabajo operativo es pagado: un(a) vendedor(a) de stand a S/90 por día en todos los puntos de venta y un(a) coordinador(a) comercial y de operaciones en planilla, medio tiempo, a S/709 al mes; los socios son los dueños y el directorio: supervisan y reciben utilidades, no hacen trabajo operativo gratis; (D) el insumo es sangrecita fresca de pollo, que la planta cuece y licúa con los huevos, con S/0.40 de insumos por brownie, y la maquila cuesta S/0.45 por brownie; (E) se fabrica un solo carrito y los demás puntos usan el kit de feria o el módulo del mall. Las ventas empiezan en **enero de 2027** y el año 1 va de **enero a diciembre de 2027** (mes 1 = enero de 2027). La fuente de las cifras de precios, ventas, inversión, equilibrio, resultado y caja es el Excel `04-reformulacion/Costeo-presentaciones-AndiBite.xlsx` (hojas Resumen, Supuestos, Inversion, Costeo, Proyeccion y Mensual; se regenera con `build_costeo.py`). Este documento se alineó con ese Excel. Precios con IGV: stands, carritos y ferias, unidad S/5.50, pack de 6 S/26.00 y pack de 12 S/48.00; recompra por WhatsApp, S/4.00, S/24.90 y S/46.90; colegios, S/3.00 para AndiBite (el alumno paga S/4.00); tienda naturista, S/17.34 por pack de 6 para AndiBite (anaquel S/28.90, con 40 % para la tienda). El pack de 6 recomendado es la opción B (bolsitas individuales). Lo marcado como "versión anterior" (modelo v3: año de noviembre de 2026 a octubre de 2027, 47,223 unidades, S/198,747.70 con IGV, unidad a S/5.00, sangrecita en polvo con S/0.605 de insumos y maquila de S/0.50, impulsadoras y asistente sin pago de los socios, inversión de S/40,644.24, equilibrio de 2,215 u/mes y resultado operativo de S/16,816.14) se conserva solo como comparación. El Excel calcula solo el escenario base.

**Convenciones.** [HIPÓTESIS] = supuesto del equipo con su lógica explícita. [POR CONFIRMAR] = dato que no se pudo verificar en una fuente primaria y que se debe cotizar. Los costos que sostienen el plan (espacio del stand, stand en feria, tarifa de maquila y sangrecita fresca) se presentan como costos del plan con su fuente de referencia, no como supuestos. Todas las cifras están en soles. Los precios al público incluyen IGV; los márgenes, costos y flujos se calculan **sin IGV**, porque el IGV que se cobra y el que se paga se compensan como crédito fiscal. El modelo de cálculo (recetas, costos por presentación, ventas, flujo) se hizo en una sola hoja para que todas las cifras de este documento cuadren entre sí.

**Limitación de búsqueda.** En esta sesión se agotó el cupo de búsquedas web. Se consultaron directamente las páginas de Culqi, Izipay, La Purita, Fika, Plaza Vea, Wong y modelo.pe. Las páginas de Mercado Pago, Mercado Libre, Rappi, PedidosYa, Yape Empresas y ProInnóvate bloquearon la consulta (HTTP 403, 404 o 418). Esos datos van marcados [POR CONFIRMAR].

---

## 0. Resumen ejecutivo

1. **Decisión central:** lanzar desde el primer día la **versión sin octógono**: cada brownie de 20 g endulzado con eritritol, plátano maduro y solo 15 g de panela por lote tiene entre 4.6 y 7.1 g de azúcar total por 100 g (el octógono se activa con 10 g). La versión con panela queda como plan B ya validado.
2. **Sabores y presentaciones de lanzamiento:** Choco Clásico con chispas sin azúcar, Choco-Plátano-Canela con cañihua y Choco-Lúcuma. Se vende en unidad (para probar en el stand), pack de 6 x 20 g, pack de 12 "Semana completa" por pedido y caja degustación de 3 sabores. De las 52,786 unidades del año 1, el 55.6 % se vende suelta, el 37.1 % en pack de 6 y el 7.4 % en pack de 12 (Excel, hoja Proyeccion).
3. **Costo de producción puesto en almacén**, con maquila a S/0.45 por brownie y sangrecita fresca de pollo (S/0.40 de insumos por brownie): con la opción B recomendada (bolsitas individuales, sin etiqueta por brownie) S/8.29 por pack de 6 (S/1.38 por brownie); la unidad suelta cuesta S/1.43 y el pack de 12, S/15.45 (S/1.29 por brownie). La opción C (brownies sueltos con papel manteca) baja el pack de 6 a S/7.79 (S/1.30). Versión anterior (modelo v3, sangrecita en polvo, insumos de S/0.605 y maquila de S/0.50): S/9.90 por pack de 6 (S/1.65 por brownie).
4. **Contribución por unidad.** Antes de pagar el espacio, los vendedores y las ferias, cada brownie deja S/1.83 en promedio: S/2.39 en stands y carritos, S/2.48 en ferias y eventos, S/1.13 en la recompra por WhatsApp, S/0.99 en colegios y S/0.89 en tiendas naturistas. Después de repartir los S/45,870 de espacio, vendedores de stand y ferias entre las 52,786 unidades, queda **S/0.97 por unidad**. Versión anterior (modelo v3): S/1.43 antes y S/0.81 después.
5. **Precios (con IGV, confirmados el 9-oct-2026):** en stands, carritos y ferias, unidad a **S/5.50**, pack de 6 a **S/26.00** (S/4.33 por unidad) y pack de 12 a S/48.00 (S/4.00 por unidad). En la recompra por WhatsApp e Instagram, unidad a S/4.00 (caja degustación de 3 a S/12.00), pack de 6 a **S/24.90** (S/4.15 por unidad) y pack de 12 a S/46.90 (S/3.91 por unidad), con delivery gratis desde 2 packs. Quiosco escolar a S/4.00 la unidad al alumno (AndiBite le vende al concesionario a S/3.00). Tienda naturista con anaquel de S/28.90 por pack de 6, de los cuales AndiBite cobra S/17.34. Versión anterior: unidad a S/5.00 en el stand.
6. **Margen bruto** (precio sin IGV menos costo de producción, opción B): en el stand, 69 % en la unidad, 62 % en el pack de 6 y 62 % en el pack de 12 (el pack de 6 se vende a S/22.03 sin IGV); por WhatsApp, 58 %, 61 % y 61 %.
7. **Ventas del año 1** (enero a diciembre de 2027, escenario base): **52,786 unidades y S/230,740.38 con IGV** (S/195,542.70 sin IGV), el 70 % del SOM de 75,600 unidades del documento 04. Van de 870 unidades en enero a 7,028 en diciembre, con un promedio de 4,399 al mes y un ingreso promedio de S/4.37 por brownie. Versión anterior (modelo v3, noviembre de 2026 a octubre de 2027): 47,223 u y S/198,747.70.
8. **Mezcla de canales en el escenario base (unidades):** 42.9 % stands y carritos en malls y supermercados (22,625), 15.3 % ferias y eventos (8,100), 17.4 % recompra por WhatsApp e Instagram (9,176), 17.4 % colegios (9,165) y 7.0 % tiendas naturistas (3,720). La venta física en puntos propios y eventos (stands, carritos y ferias) es el 58.2 % de las unidades y el 67.3 % de las ventas con IGV; el canal al consumidor (B2C) es el 75.6 % de las unidades y el B2B (colegios y naturistas), el 24.4 %. El supermercado en góndola queda para el año 2.
9. **Inversión inicial: S/37,894.24**: documentos y permisos S/6,251.20; desarrollo S/3,740.81; marca S/1,250; arranque (empaque, stock de enero y febrero, marketing de lanzamiento y capital de trabajo de 2 meses) S/18,369.30; equipos y 1 carrito S/4,838; imprevistos S/3,444.93. Se financia con S/25,000 de los socios (S/5,000 cada uno) y un préstamo de S/13,000 a 24 cuotas de S/729.47 (TEA de 35 %); un concurso de ProInnóvate queda como mejora posible, no como base. Versión anterior: S/40,644.24, con préstamo de S/16,000.
10. **Punto de equilibrio:** 2,592 unidades al mes (432 packs de 6 equivalentes), con costos fijos de S/2,503.39 al mes (administración S/760, coordinador comercial y de operaciones en planilla S/709, marketing S/900 y depreciación S/134.39) y con el espacio, los vendedores de stand y las ferias ya repartidos en la contribución (S/0.97 por unidad). El año promedia 4,399 unidades al mes, 70 % más que el equilibrio. El resultado mensual es negativo en enero (−S/2,191) y en febrero (−S/807) y positivo en los otros 10 meses; el resultado acumulado es positivo desde abril de 2027. Versión anterior: 2,215 u/mes (369 packs).
11. **Resultado operativo del año 1:** **S/20,937.62 (10.7 % de las ventas sin IGV)** con la opción B y S/22,581.87 (11.5 %) con la opción C, ya con el personal operativo pagado. Sale de una contribución de S/96,848.29 menos S/45,870 de stands, carritos y ferias (espacio S/16,800, vendedores de stand S/23,670 y ferias pagadas S/5,400) y menos costos fijos de S/30,040.67. Los gastos de documentos, desarrollo y marca no se restan aparte: forman parte de la inversión inicial. Los socios son dueños y directorio: no figuran como trabajadores y reciben utilidades. Puente a la **utilidad neta de S/17,704.18**: resultado operativo S/20,937.62, más S/1,955.43 de pagos a cuenta que ya estaban restados en el costo de canal, menos S/3,221.74 de intereses del préstamo en el año 1, igual a S/19,671.31 antes de impuestos; menos S/1,967.13 de impuesto a la renta del Régimen MYPE Tributario (10 %).
12. **Payback y caja:** la inversión no se recupera en el año 1: entre el resultado operativo del año (S/20,937.62) y la inversión (S/37,894.24) faltan **S/16,956.62** (opción C: S/15,312.37). Con el año 2 al ritmo de octubre a diciembre de 2027, la inversión se recupera en el **mes 18 (junio de 2028)**; con la opción C, en el mes 17. La caja más baja es de S/3,917.38 en febrero de 2027, con la cuota del préstamo incluida, y la caja al cierre del año 1 es de S/21,902.39.
13. **Sensibilidad** (resultado operativo del año 1 y mes de recuperación; base: S/20,938 y mes 18): ventas −20 %, S/8,612 y mes 29; ventas +20 %, S/33,262 y mes 13; espacio a S/1,000 por punto al mes, S/9,738 y mes 26; maquila a S/0.55, S/15,395 y mes 21; unidad a S/5.00 en el stand, S/13,153 y mes 23 (tabla en la sección 8.3).
14. **Régimen tributario:** S.A.C. en el Régimen MYPE Tributario (IGV de 18 %, pago a cuenta de 1 % y renta de 10 % sobre las primeras 15 UIT de utilidad) con facturación electrónica desde el primer día. El coordinador está en planilla como microempresa (REMYPE).
15. **Lo que se formaliza antes de firmar:** contrato de maquila (tarifa de S/0.45 por brownie y lote mínimo), proveedor de sangrecita fresca (Redondos en Makro, con un segundo proveedor homologado), contratos de espacio de S/600 por punto al mes, aceptación infantil de la versión con eritritol, el rendimiento real por día de cada punto y la póliza de responsabilidad civil.

---

## 1. Correcciones explícitas a los documentos 01 a 04

| Documento | Qué decía | Qué se corrige aquí y por qué |
|---|---|---|
| 02, sección 3 | Costeaba una receta de unos 1,150 g de masa como si rindiera 24 unidades y suponía polvo de sangrecita a S/120 por kg | Se costean las recetas del documento 01 (560 a 660 g de masa para 24 unidades de 20 g), que son las que irán a la maquila, con los precios del documento 02. Para la sangrecita se usa la fresca de pollo (Redondos, S/11.29 por kg en Makro; 175 g crudos por lote de 24), que la planta cuece y licúa con los huevos como en la receta del documento 01: S/0.40 de insumos por brownie. El polvo de sangrecita (S/417 por kg en Malli) queda solo como alternativa si la planta no puede cocer la sangrecita fresca |
| 01, sección 4 | "Todas las variantes superan el octógono"; quedaba abierto si el azúcar del plátano cuenta | Vale para la versión con azúcar o panela. Se agrega la versión sin octógono (sección 2.3). Siguiendo al documento 03, el azúcar del plátano **sí cuenta**, porque el parámetro es azúcar total |
| 01, recetas | Endulzaban con azúcar rubia | La versión de comparación usa panela, como piden el brief y el documento 02 |
| 04, sección 1.11 | SOM del año 1 entre octubre de 2026 y setiembre de 2027, a S/4.00 por unidad | El año 1 va de **enero a diciembre de 2027**, con la venta física como canal principal. El modelo vende 52,786 unidades, el 70 % del SOM de 75,600, y el precio sube a S/5.50 la unidad y S/26.00 el pack de 6 en el stand (S/24.90 por WhatsApp), porque la versión sin octógono, el espacio del stand y el vendedor pagado lo exigen. Los documentos se tratan como ya obtenidos (su costo está en la inversión) y no retrasan la venta |
| 03-entregables/04 (plan de marketing anterior) | Ventas desde octubre de 2026 | Las ventas empiezan en **enero de 2027**, en stands, carritos y ferias, con los documentos considerados listos. WhatsApp pasa a ser el canal de recompra: el contacto se capta en el punto de venta y se le recuerda la recompra |
| Nombre | El documento 04 y el plan anterior dicen "AndyBites"; el brief y los documentos 01 a 03 dicen "AndiBite" | Se usa AndiBite hasta que salga la búsqueda fonética de INDECOPI |

---

## 2. Decisiones de diseño del negocio

### 2.1 Sabores de lanzamiento (3)

| Sabor | Por qué entra | Evidencia |
|---|---|---|
| **Choco Clásico** con chispas sin azúcar | Es la puerta de entrada y el que mejor camufla la sangrecita | El chocolate es el sabor número 1 en niños de 6 a 12 años y 7 de cada 10 prefieren el de leche (documento 01, fuentes 12 y 22). En el focus 1 las madres eligieron el brownie porque "es chocolate" |
| **Choco-Plátano-Canela** con cañihua | Es el concepto original validado en las semanas 1 a 4. El plátano permite bajar el azúcar y la cañihua cuenta la historia andina | Es la receta con menos azúcar (documento 01) y la base natural de la versión sin octógono |
| **Choco-Lúcuma** | Le da identidad peruana y premium para Lima Top y Lima Moderna | La lúcuma es de los sabores de helado más vendidos del país. El riesgo medio de que se note la sangrecita se controla con 30 a 32 g de cocoa |

**Por qué tres sabores y no más.** El dolor que el documento 04 encontró es el de los jueves: "ya no sé qué mandar". Con tres sabores, el pack de 6 da dos rotaciones completas en una semana escolar de cinco días, y eso basta para que la lonchera se sienta variada. Un cuarto sabor desde el inicio tiene tres costos: subiría el número de análisis de laboratorio (cada sabor puede necesitar su propio registro si DIGESA no los acepta como grupo, documento 03), haría más cara la corrida mínima de la maquila y repartiría la demanda de un lote pequeño en más referencias, con más riesgo de vencimiento. Además, los tres comparten la misma base técnica (cocoa, sangrecita cocida, huevo y aceite), así que la planta los produce en la misma línea cambiando solo el sabor final. Eso abarata el cambio de formato y ayuda a pedir el registro como grupo.

Quedan fuera del lanzamiento el maní y la pecana, porque son alérgenos mayores y muchos colegios los restringen. Choco-Naranja y Choco-Fresa quedan como ediciones de temporada en el año 2.

### 2.2 Formatos

| Formato | Contenido | Para quién y para qué | Precio por WhatsApp con IGV |
|---|---|---|---|
| **Pack de 6 x 20 g (SKU principal)** | 2 unidades de cada sabor en bolsita individual (flow pack) sin etiqueta, dentro de un doypack kraft con zipper y etiquetas (opción B) | Claudia: una semana de lonchera con variedad y una recompra cada 2 semanas (documento 04) | S/24.90 (S/4.15 por unidad) |
| **Pack de 12 "Semana completa"** | 4 de cada sabor | Familias con 2 hijos (Claudia tiene a Matías y Luciana) o compra quincenal. Es el pack para la compra quincenal, que se vende por pedido (sin suscripción ni compromiso), con delivery gratis desde 2 packs y recordatorio de recompra opcional por WhatsApp | S/46.90 (S/3.91 por unidad, 5.8 % menos) |
| **Caja degustación de 3 sabores** | 1 unidad de cada sabor | Primera compra, ferias, regalos de cumpleaños y muestra para el pediatra. Trae un cupón de S/3.00 para el primer pack de 6 | S/12.00 (S/4.00 por unidad) |

**Lógica de la arquitectura de precios.** El pack de 6 es el producto que se compra cada dos semanas y fija la percepción de precio (S/4.15 por unidad). El pack de 12 premia la planificación, que es el rasgo central del público objetivo: es 5.8 % más barato por unidad y concentra pedidos, que es lo que más reduce el costo de delivery (con 12 unidades por pedido, el delivery cae de S/0.95 a S/0.79 por unidad). La caja degustación no busca margen: es la herramienta para que el niño pruebe delante de la madre, que es la condición de compra que identificó el focus 1. Por eso se vende a S/4.00 por unidad (S/12.00 la caja), un precio cercano al del pack de 6 (S/4.15) para no devaluar la marca, y lleva el cupón que empuja a la segunda compra. En el stand, donde el precio de lista es S/5.50 la unidad, S/26.00 el pack de 6 y S/48.00 el pack de 12, 6 de cada 10 brownies se venden sueltos para probar en el momento, 35 % en pack de 6 y 5 % en pack de 12 (Excel, hoja Supuestos, sección 6).

Solo la unidad que se vende suelta (stands, ferias y quioscos) lleva etiqueta individual de rotulado completo. En el pack de 6 de la opción B, recomendada, los brownies van en bolsitas sin etiqueta y el rotulado va en el doypack; la opción A (etiqueta en cada brownie) es la versión anterior.

### 2.3 Estrategia frente al octógono "Alto en azúcar"

**Propuesta de versión sin octógono (V-SO).** Se baja el azúcar total por debajo de 10 g por 100 g (con un margen de 3 g para la tolerancia del laboratorio). Se usan tres palancas: más plátano maduro, solo 15 g de panela por lote para conservar la nota acaramelada y un endulzante de volumen (eritritol con fruto del monje, del tipo Lakanto Classic). Es lo que hace Fika con su brownie de quinua, que se endulza con alulosa y se vende "sin octógonos" a S/14.00 por 70 g ([Fika](https://www.fika.pe/products/brownie-55g), consultado el 03-oct-2026).

**Fórmulas V-SO por lote de 24 unidades (g)**, con 120 g de sangrecita cocida por lote (175 g de sangrecita fresca de pollo cruda, que la planta cuece y licúa con los huevos, como en la receta del documento 01):

| Ingrediente | V-SO Choco Clásico | V-SO Plátano-Canela-Cañihua | V-SO Lúcuma |
|---|---|---|---|
| Sangrecita fresca de pollo, cocida y licuada con los huevos | 120 | 120 | 120 |
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
| Insumos por unidad, sin IGV | Unos S/0.11 menos que la V-SO (diferencial de la versión anterior, con polvo, a 3,000 u/mes; no recalculado con sangrecita fresca) | S/0.40 (sangrecita fresca, modelo v5) |
| Costo de producción por unidad | Unos S/0.11 menos (diferencial de la versión anterior) | S/1.38 en el pack de 6 de la opción B (S/8.29 el pack) |
| Sobrecosto en el año 1, escenario base | — | Unos S/0.11 por unidad (diferencial de la versión anterior, a 3,000 u/mes); no se recalculó con las 52,786 unidades del modelo v5 |
| Riesgo de sabor | Bajo: la panela es familiar y carameliza | Medio: el eritritol deja una sensación fría y dora menos. Se compensa con plátano, canela, horno a 170 °C y los 15 g de panela |
| Quioscos escolares | **No puede entrar** (RM 195-2019-MINSA, documento 03) | Puede entrar |
| Mensaje de marca | "Endulzado con panela", pero el octógono contradice la promesa de lonchera saludable | "Cero octógonos, hierro de verdad": calza con el 70 % que teme al "Alto en azúcar" (Ipsos, documento 04) |
| Costo de cambiar después | Nuevo análisis y nuevo RS o modificación (S/550 a 1,400, documento 03), reimpresión de etiquetas (unos S/720) y nueva prueba sensorial, con 2 a 3 meses perdidos en colegios | Ninguno |

**Por qué lanzar sin octógono cambia la economía del negocio, no solo la etiqueta.** La V-P saldría unos S/0.11 por unidad más barata (diferencial de la versión anterior, a 3,000 u/mes), pero perdería tres cosas que valen más. Primero, el canal colegio: en el escenario base representa 9,165 unidades y S/27,495.00 con IGV, y además es el canal que hace visible la marca ante padres de un mismo salón. Segundo, la conversión en venta directa: el 83 % de los consumidores dice que los octógonos cambian su compra y el 70 % teme justamente el "Alto en azúcar" (Ipsos 2025, documento 04). Un producto para padres que leen etiquetas no puede pedirles que ignoren la advertencia más temida. Tercero, la coherencia del relato de marca: "hierro de verdad, sabor a brownie" pierde fuerza si al lado del logo hay un octógono negro. El riesgo real de la V-SO no es el costo, sino el sabor, y eso se resuelve con la prueba sensorial de la fase 0, antes de invertir en la planta.

**Recomendación: lanzar primero la V-SO** en los tres sabores. Cuesta solo S/0.11 por unidad a 3,000 u/mes (3 % del precio neto; diferencial de la versión anterior), abre el canal colegio, sostiene el mensaje central del documento 04 y evita pagar dos veces el registro. Para que no sea un salto al vacío, la decisión pasa por un **filtro al cierre de la fase 0**: la V-SO debe lograr al menos 75 % de respuestas en las caritas 4 y 5, quedar a 0.5 puntos o menos de la V-P en la prueba a ciegas y medir menos de 8 g de azúcar por 100 g en el análisis preliminar. Si no pasa, se lanza la V-P solo en stands, ferias y venta por WhatsApp, y la V-SO entra después para colegios.

---

## 3. Modelo operativo por fases

**Roles fijos.** Diana Ayoso: producto, I+D y prueba sensorial. Patricia Cárdenas: operaciones (planta, compras, inventario, calidad y logística). Adela Robles: regulación, legal y relación con el contador. Angie Blas: marca, contenido y pauta. Carlos Inga: comercial (puntos de venta, WhatsApp, colegios, naturistas) y modelo financiero. Los cinco socios son los dueños y el directorio de la S.A.C.: supervisan su área y reciben utilidades. El trabajo operativo (atender los stands, los pedidos y el despacho) lo hace personal pagado: vendedores de stand a S/90 por día y un(a) coordinador(a) comercial y de operaciones en planilla (medio tiempo, S/709 al mes).

**Supuesto de trabajo (9-oct-2026).** Los documentos y permisos se tratan como ya obtenidos al empezar a vender, en enero de 2027. Su costo, S/6,251.20, está en la inversión inicial (sección 7) y no condiciona el calendario de ventas. Las fases 0 y 1 son de preparación (octubre a diciembre de 2026): lo que cuestan está dentro de esa inversión. La fase 2, la venta, es la que genera el resultado del año 1.

| Fase | Actividades | Responsables | Costo | Entregables |
|---|---|---|---|---|
| **Fase 0: preparación del producto** | 3 rondas de las fórmulas V-P y V-SO, con prueba de umbral de sangrecita (80, 120 y 160 g de equivalente). Prueba sensorial con al menos 20 niños por sabor (escala de caritas) y prueba triangular con los padres. Focus 2 con precio preguntado después de probar, más una encuesta a 30 padres con Van Westendorp (documento 04). Análisis preliminar de azúcares y hierro de las 2 mejores fórmulas. Cotización a MAKING, Unión, INDDA y Organic Andean Bites. Compra de la sangrecita fresca de pollo (Redondos en Makro, camales con SENASA); el polvo (Malli, Allpa Manta, Nutri H) queda como alternativa. Escalamiento y lote piloto en la planta | Diana (pruebas y escalamiento), Carlos (focus y encuesta), Patricia (cotizaciones y planta) | **S/3,740.81** (hoja Inversion, "desarrollo"): insumos de 3 lotes de prueba S/942.81 (3 × S/314.27, documento 02); endulzantes S/148.00; análisis preliminar S/750.00 (2 × S/375); prueba sensorial S/150.00; desarrollo y lote piloto en la planta S/1,750.00 [POR CONFIRMAR] | Fórmula congelada v3; informe sensorial; decisión sobre el octógono; precio validado; 2 plantas preseleccionadas |
| **Fase 1: preparación de documentos, marca, puntos de venta y arranque** | Contrato de maquila con confidencialidad (la S.A.C. como titular del RS y la planta como fabricante, a S/0.45 por brownie). Documentos y permisos, considerados listos al abrir ventas: S.A.C. en un CDE de PRODUCE, RUC en el RMT, REMYPE y libro de reclamaciones, marca en clase 30, análisis para el RS, perfil nutricional con hierro, vida útil, etiqueta (declarar "fuente de hierro" solo si el laboratorio mide al menos 2.1 mg por 100 g), RS por VUCE, carnés de sanidad y póliza de responsabilidad civil para stands. Identidad, fotos, web y catálogo de WhatsApp Business. Pedir espacio y cotización a malls, cadenas de supermercados y organizadores de ferias (documento 08). Fabricar 1 carrito con vitrina y gráfica. Compra de equipos y empaque, y primer lote para enero y febrero. Contratar al coordinador(a) en planilla y armar la bolsa de vendedores de stand | Adela (documentos, contrato, planilla y espacios), Patricia (planta, carrito y lote), Angie (identidad y lanzamiento), Carlos (espacios y primeros puntos) | **Documentos y permisos S/6,251.20** (S.A.C. S/150; RUC, REMYPE y libro de reclamaciones S/0; marca S/401.20; revisión legal S/400; análisis para el RS S/1,800; perfil nutricional y hierro S/1,125; vida útil S/1,050; etiqueta S/650; tasa del RS S/0; carnés S/75; póliza S/600). **Marca S/1,250**. **Equipos y 1 carrito S/4,838**. **Arranque S/18,369.30**: empaque S/3,030, stock inicial S/4,135.30, marketing de lanzamiento S/3,204 y capital de trabajo S/8,000 | Contrato firmado; documentos y permisos listos; etiqueta aprobada; 1 carrito; coordinador(a) contratado(a); stock para enero y febrero (3,700 unidades vendidas en el modelo); espacios cotizados |
| **Fase 2: venta desde enero de 2027** (año 1: enero a diciembre de 2027) | **Stands y carritos en malls y supermercados**, fines de semana: 1 punto en enero, 2 puntos de febrero a julio y 3 puntos de agosto a diciembre. Todos los puntos llevan un(a) vendedor(a) pagado(a) (S/90 por día de atención); los socios supervisan y rotan por los puntos, sin reemplazar a los vendedores. Degustación en el punto y QR a WhatsApp. **Ferias y eventos:** 1 feria de campaña escolar en febrero y 2 ferias navideñas en diciembre, pagadas (S/1,800 cada una); el resto son eventos sin costo (kermeses, cumpleaños y ferias gratuitas: 40 en el año). **Recompra por WhatsApp e Instagram:** recordatorio al cliente del stand, rutas de delivery los martes y viernes por zona, pack de 12 por pedido (sin suscripción), atendida por el coordinador(a). **Colegios (quiosco)** desde marzo de 2027 y **tiendas naturistas** a consignación o con factura. Producción mensual con control de calidad por lote. GS1 desde el mes 6. Evaluación de góndola (Flora & Fauna o Vivanda) en el mes 9. Cierre de números todos los domingos, con los brownies vendidos por día en cada punto | Carlos (puntos, ventas y colegios), Angie (contenido, pauta y material de stand), Patricia (producción y despacho), Adela (contabilidad, SUNAT, planilla y trámite de espacios), Diana (calidad y nuevos sabores) | Costos fijos de S/2,503.39 al mes (administración S/760, coordinador S/709, marketing S/900 y depreciación S/134.39), más espacio de S/600 por punto al mes (S/16,800 en el año), vendedores de stand (S/23,670 en el año), 3 ferias pagadas (S/5,400) y los costos variables de la sección 4 | 52,786 unidades vendidas en el año; 3 puntos de venta desde agosto; unos 5 colegios y 8 naturistas a fines de 2027 [HIPÓTESIS: 300 u por colegio y 60 u por punto al mes]; resultado acumulado positivo desde abril de 2027; reporte trimestral |

**Calendario del año 1.** Enero se vende con un solo punto (vacaciones); febrero suma el segundo punto y la feria de campaña escolar; marzo incorpora los quioscos con el año escolar; de agosto a diciembre se llega a 3 puntos y diciembre cierra con dos ferias navideñas. El resultado es negativo en enero y febrero y positivo en el resto de los meses (sección 8.2).

---

## 4. Estructura de costos por unidad y por pack de 6 (maquila, versión V-SO)

### 4.1 Costos de cada línea

| Línea | Valor y fuente |
|---|---|
| Insumos | **S/0.40 por brownie** (promedio de los 3 sabores), con las fórmulas V-SO de la sección 2.3 y sangrecita fresca de pollo: 175 g crudos por lote de 24 (Redondos, S/11.29 por kg en Makro), que la planta cuece y licúa con los huevos como en la receta del documento 01. El resto de los insumos, con precios del documento 02 (Makro y mayoristas) y de los endulzantes (Plaza Vea y Wong), divididos entre 1.18 para quitar el IGV. Versión anterior, con sangrecita en polvo: S/0.605 a 3,000 u/mes |
| Maquila | **S/0.45 por brownie de 20 g**: tarifa de referencia de S/20.75 por kg de snack horneado con elaboración y empaque (Organic Andean Bites, documento 03; tesis de la UDEP: S/0.83 por empaque de 40 g en 2023), actualizada a 2027. La planta cuece la sangrecita, mezcla, hornea, corta, pesa y sella la bolsita. Versión anterior: S/0.50 |
| Empaque individual | Flow pack sin imprimir: S/0.09 por unidad [HIPÓTESIS sobre el documento 02] |
| Etiqueta individual 5x5 | S/0.25 por unidad, solo en la unidad que se vende suelta (Imprenta Peruana, 1,000 unidades, sin IGV, documento 02). El pack de 6 de la opción B no lleva etiqueta por brownie |
| Doypack | 16x22 cm a S/0.625 con IGV por 1,000 unidades, es decir S/0.53 sin IGV por envase de 6 (documento 02); el de 12 cuesta S/0.70 [HIPÓTESIS, talla mayor] |
| Etiquetas del doypack | Frente y reverso, 7x7 cm, a S/0.36 cada una (1,000 unidades, documento 02): S/0.72 por envase |
| Control de calidad por lote | S/250 por análisis microbiológico de liberación de lote; 1 lote al mes: S/0.083 por unidad a 3,000 u/mes [HIPÓTESIS] |
| Transporte planta-almacén | S/80 por viaje; 2 viajes al mes: S/0.053 por unidad [HIPÓTESIS] |
| Almacenamiento | S/0.04 por unidad, pactado con la planta o con un operador logístico, para no necesitar licencia por almacén propio (documento 03) [HIPÓTESIS] |
| Merma | 5 % de insumos, maquila y empaque [HIPÓTESIS] |
| Delivery al cliente | Referencia real en Lima Top y Lima Moderna: La Purita cobra S/9.50 + IGV por envío ([La Purita](https://www.lapurita.com/pages/costo-de-delivery), 03-oct-2026); Fika y La Purita ofrecen envío gratis desde S/150. Política de AndiBite: delivery gratis desde 2 packs, y S/6.00 en pedidos de 1 pack. Con un pedido promedio de 10 unidades, el costo neto queda en **S/0.80 por unidad** [HIPÓTESIS sobre ese dato real] |
| Pasarela de pagos | Culqi: tarjetas nacionales 3.44 % + US$0.20 en línea; Yape 3.44 %; Plin y otras billeteras 3.99 %; PagoEfectivo 3.99 % con mínimo de S/3.50; comisiones inafectas al IGV ([Culqi](https://culqi.com/precios/)). Izipay: link de pago gratis, comisión desde 1.99 % para clientes nuevos y POS desde S/108 ([Izipay](https://www.izipay.pe/)). Mercado Pago [POR CONFIRMAR, página bloqueada]. Con un 15 % de transferencias sin costo, la mezcla da **3 %** del precio con IGV |
| Comisiones de canal | Quiosco: 25 % para el concesionario [HIPÓTESIS]. Naturista: 40 % (rango de 35 a 50 % del documento 03). Supermercado: 35 % más 5 % de aportes y merma (el brief da 30 a 40 %). Marketplace: 28 % [POR CONFIRMAR, Rappi y Mercado Libre no publican su tarifa] |
| Marketing fijo | **S/900 al mes** en promedio del año (pauta, degustaciones y material de stand), porque la captación se hace en el stand [HIPÓTESIS]. La pauta se basa en el plan anterior (S/10 a 20 por día en ventanas de campaña); el CPM de Meta en Lima queda [POR CONFIRMAR] |
| Administración | **S/760 al mes**: contador S/250 (rango de S/150 a 400 del documento 03), software S/60, web S/30, teléfono S/60, movilidad S/150, GS1 prorrateado S/85, banco y otros S/65, más S/60 de carnés de sanidad, uniformes y reposición del material de stand |
| Coordinador(a) comercial y de operaciones | **S/709 al mes**, en planilla, medio tiempo de 4 horas: media remuneración mínima de 2027 (S/1,300 según el DS 015-2026-TR, es decir S/650) más 9 % de EsSalud; microempresa en el REMYPE. Atiende WhatsApp, pedidos y despacho, y lleva el stock a los stands: S/8,508 al año |
| Vendedores de stand | **S/90 por día de atención**, en todos los puntos de venta (Computrabajo: S/50 a 90 por día de fin de semana, documento 08): S/23,670 al año. Los socios no atienden stands sin pago |
| Depreciación | Equipos mínimos por S/2,338.00 y 1 carrito por S/2,500.00, es decir S/4,838.00 a 36 meses: S/134.39 al mes |
| Impuestos | IGV de 18 %; RMT con pago a cuenta de 1 % de los ingresos netos y renta de 10 % hasta 15 UIT de utilidad (S/82,500) y 29.5 % sobre el exceso ([modelo.pe](https://modelo.pe/blog/regimen-mype-tributario-rmt-2026-tasas-limites/); UIT de S/5,500 en el documento 03). Se recomienda el RMT porque paga sobre la utilidad y emite factura, a diferencia del NRUS (documento 03) |

### 4.2 Costo de producción por presentación

El Excel (hoja Costeo) calcula el costo de cada presentación sin IGV, con el control de calidad, el transporte y el almacén prorrateados a 3,000 u/mes.

| Concepto (S/ sin IGV por presentación) | Unidad suelta | Pack de 6, opción B (bolsitas) | Pack de 6, opción C (sueltos) | Pack de 12 |
|---|---|---|---|---|
| Insumos (sangrecita fresca, S/0.40 por brownie) | 0.40 | 2.40 | 2.40 | 4.80 |
| Maquila (S/0.45 por brownie) | 0.45 | 2.70 | 2.70 | 5.40 |
| Bolsita individual (flow pack) | 0.09 | 0.54 | 0 | 1.08 |
| Etiqueta individual | 0.25 | 0 | 0 | 0 |
| Papel manteca separador | 0 | 0 | 0.06 | 0 |
| Doypack | 0 | 0.53 | 0.53 | 0.70 |
| Etiquetas del doypack | 0 | 0.72 | 0.72 | 0.72 |
| Merma 5 % | 0.06 | 0.34 | 0.32 | 0.64 |
| Control de calidad, transporte y almacén | 0.18 | 1.06 | 1.06 | 2.11 |
| **Costo de producción por presentación** | **1.43** | **8.29** | **7.79** | **15.45** |
| **Costo de producción por brownie** | **1.43** | **1.38** | **1.30** | **1.29** |
| Precio en stand sin IGV (S/5.50, S/26.00 y S/48.00 con IGV) | 4.66 | 22.03 | 22.03 | 40.68 |
| Margen bruto en stand | 69 % | 62 % | 65 % | 62 % |
| Precio por WhatsApp sin IGV (S/4.00, S/24.90 y S/46.90 con IGV) | 3.39 | 21.10 | 21.10 | 39.75 |
| Margen bruto por WhatsApp | 58 % | 61 % | 63 % | 61 % |

El margen bruto no incluye el espacio del stand, el personal, el delivery, la pasarela, las comisiones ni los costos fijos: esos se calculan en las secciones 4.3, 4.4 y 8. Con la V-P (panela), el costo de producción sería algo menor (diferencial de la versión anterior: S/0.11 por unidad a 3,000 u/mes).

**Versión anterior (modelo v3).** Con sangrecita en polvo (insumos de S/0.605), maquila de S/0.50 y a 3,000 u/mes, el pack de 6 de la opción B costaba S/9.90 (S/1.65 por brownie), la unidad suelta S/1.69, el pack de 12 S/18.66 (S/1.56 por unidad) y el pack de 6 de la opción C S/9.39. El costo con la opción A (etiqueta en cada brownie) fue de S/2.52, S/1.91 y S/1.32 por unidad a 1,000, 3,000 y 8,000 u/mes; el modelo v5 trabaja con el volumen de 3,000 u/mes.

### 4.3 Contribución por brownie y por canal

La contribución es el precio sin IGV menos el costo de producción y los costos variables del canal (degustación y movilidad, delivery, pasarela, renta de 1 %), antes del espacio, los vendedores, las ferias y los costos fijos. Se calcula con la mezcla de presentaciones de cada canal (sección 6.1).

| Canal | Ingreso promedio con IGV por brownie | Costo variable de canal (sin IGV) | Contribución por brownie |
|---|---|---|---|
| Stands y carritos (malls y supermercados) | S/5.02 | S/0.27 + pasarela de 3 % | **S/2.39** |
| Ferias y eventos | S/5.15 | S/0.27 + pasarela de 3 % | **S/2.48** |
| Recompra por WhatsApp e Instagram | S/4.06 | Delivery S/0.80 + pasarela de 3 % | **S/1.13** |
| Colegios (quiosco, AndiBite recibe S/3.00) | S/3.00 | Ruta semanal S/0.10 | **S/0.99** |
| Tiendas naturistas (AndiBite cobra S/17.34 por pack) | S/2.89 | Reposición S/0.15 | **S/0.89** |
| **Promedio** | **S/4.37** | | **S/1.83** |

**Cómo se arma el margen en cada canal.** En venta directa, AndiBite cobra el precio completo, pero paga el delivery, la pasarela y la pauta que trae al cliente. En los canales con intermediario no hay delivery a la casa ni pasarela, pero se entrega entre el 25 y el 40 % del precio. La diferencia de fondo es que en venta directa el costo de canal es casi fijo por pedido (unos S/9.50), así que mejora con pedidos más grandes, mientras que en los otros canales es un porcentaje del precio que no baja con el volumen. Por eso conviene empujar el pack de 12 y la recompra por WhatsApp, y por eso el supermercado necesita un precio en góndola más alto que el directo.

**Lectura.** (1) El stand y la feria dejan más del doble por brownie que la recompra, el colegio o la tienda naturista, porque cobran el precio de lista de físico (S/5.50 la unidad), pero deben pagar el espacio, el vendedor y las ferias (sección 4.4). (2) Un punto de fin de semana con 9 días de atención cuesta S/1,410 al mes (S/600 de espacio y S/810 de vendedor) y se paga con unos 590 brownies al mes, es decir unos 66 por día de atención, a S/2.39 de contribución; la meta es de 80 o más por día. (3) Colegios y tiendas naturistas aportan menos de S/1.00 por brownie: sirven para dar volumen, mostrar la marca ante los padres de un mismo salón y repartir los costos fijos, no como fuente principal de ganancia. (4) Los canales con intermediario solo mejoran con precios en góndola de S/5.30 a 5.50 por unidad y volúmenes altos; por eso el supermercado queda para el año 2.

### 4.4 Costos del canal físico (modelo v5)

| Concepto | Valor | Fuente de referencia |
|---|---|---|
| Espacio por punto de venta (carrito o stand de fin de semana en mall o supermercado) | **S/600 al mes por punto** | Módulo de 2 x 2 m en malls desde S/500 al mes (Gestión, 15-sep-2023); la entrada de un supermercado de Lima Top cuesta algo más (documento 08). Ningún mall ni cadena publica tarifa; se formaliza por contrato |
| Vendedor(a) de stand | **S/90 por día de atención**, en todos los puntos | Computrabajo: S/50 a 90 por día de fin de semana (documento 08). Los socios supervisan y no cubren puntos sin pago |
| Stand en feria de emprendimiento (2 a 3 días) | **S/1,800 por feria**; 3 ferias pagadas al año (S/5,400) | La Feria de Barranco S/1,650 a 2,000; Bazar Navideño CCL S/2,500 + IGV (S/2,950); Navi Fest (documento 08). Cada feria vende 700 unidades [HIPÓTESIS: una mype vende unos S/3,000 por feria de PRODUCE] |
| Evento sin costo (kermés, cumpleaños, feria gratuita) | 150 unidades por evento [HIPÓTESIS] | Documento 08 |
| Costo variable por unidad en stand y feria | S/0.27, más pasarela de 3 % | Degustación (1 brownie regalado por cada 10 vendidos, S/0.17) más movilidad y bolsas (S/0.10) [HIPÓTESIS] |
| Contribución antes de espacio y personal | S/2.39 por brownie en stands y carritos; S/2.48 en ferias y eventos | Excel, hoja Proyeccion |

En el año 1 el espacio suma S/16,800 (28 meses-punto por S/600), los vendedores de stand S/23,670 (263 días-punto por S/90) y las ferias pagadas S/5,400: **S/45,870 en total, S/0.87 por unidad vendida**. Un punto con vendedor durante 9 días cuesta S/1,410 al mes y se paga con unos 590 brownies (66 por día de atención). Cada feria pagada (700 brownies a S/2.48 de contribución, unos S/1,740) casi cubre su costo de S/1,800, y además deja contactos que vuelven por WhatsApp. El modelo supone unos 85 brownies por día y por punto en promedio, de 50 en enero a 100 en marzo.

---

## 5. Precio recomendado por canal

| Canal | Formato y precio al público (con IGV) | Precio que recibe AndiBite (con IGV) | Margen del canal | Lógica |
|---|---|---|---|---|
| **Stands, carritos y ferias (venta física, canal principal)** | Unidad **S/5.50**; pack de 6 **S/26.00** (S/4.33 por unidad); pack de 12 S/48.00 (S/4.00 por unidad) | Igual | 0 %; espacio, vendedores y ferias pagadas se pagan aparte (sección 4.4) | Precio de lista en físico: el stand cuesta espacio y vendedor, por eso es mayor que por WhatsApp. La unidad suelta (60 % de lo que se vende en el stand) deja que el niño pruebe delante de la madre y es la que más margen deja (69 % de margen bruto); el pack de 6 (S/4.33 por brownie) y el de 12 son para llevarse. La caja degustación (S/12.00) queda para regalos y pedidos |
| **Recompra por WhatsApp e Instagram (delivery)** | Pack de 6: **S/24.90** (S/4.15 por unidad); pack de 12: S/46.90 (S/3.91 por unidad); unidad o caja degustación de 3: S/4.00 por unidad (S/12.00); delivery gratis desde 2 packs | Igual | 0 % (AndiBite asume el delivery y el 3 % de la pasarela) | Calza con la disposición a pagar de Claudia (S/24 a 28 por pack, de S/4 a 5 por unidad, documento 04). El pack de 12 a S/3.91 por unidad atiende a Rodrigo (S/3 a 4). Es más barato que el stand para premiar la recompra de quien ya probó |
| **Colegios (quiosco)** | Unidad **S/4.00** | S/3.00 | 25 % para el concesionario [HIPÓTESIS, negociar entre 25 y 30 %] | El ancla es el queque de la puerta del colegio (S/2.50 a 3, documento 04). Pagar S/1.00 a 1.50 más se justifica por el hierro y por no tener octógono. Solo entra la V-SO |
| **Tiendas naturistas** | Pack de 6 en anaquel **S/28.90** (S/4.82 por unidad) | S/17.34 por pack | 40 % | El canal necesita entre 35 y 50 % (documento 03). AndiBite cobra S/17.34 con IGV por pack (S/14.69 sin IGV, S/2.45 por unidad) y deja una contribución de S/5.36 por pack (S/0.89 por unidad, opción B) antes de costos fijos. Es un canal de vitrina, no de volumen |
| **Supermercados en góndola** (año 2) | Pack de 6 **S/32.90** (S/5.48 por unidad) [versión anterior; sin redefinir con los precios confirmados] | S/19.74 por pack | 35 % + 5 % | Exige GS1, factura, homologación y crédito de 30 a 60 días (documento 03). Solo es viable con 8,000 u/mes o más. En el año 1 se vende dentro del supermercado con carrito propio, en el canal de stands |

**Por qué un mismo producto tiene precios distintos según el canal.** En el stand y en la feria el precio es mayor que por WhatsApp (S/5.50 frente a S/4.00 la unidad, S/26.00 frente a S/24.90 el pack de 6 y S/48.00 frente a S/46.90 el de 12), porque el punto paga espacio y vendedor, y a cambio quien recompra por WhatsApp ahorra. Por regla, el precio al público en tiendas de terceros debe ser igual o mayor que el directo, para que la tienda no compita con la marca ni la marca canibalice a la tienda. En el quiosco se vende la unidad suelta a S/4.00, por debajo del precio del stand, porque es el único canal con ancla de precio de impulso (el queque de la puerta, a S/2.50-3) y porque ahí la compra la hace el niño con su propina, no el adulto. En la tienda naturista el pack sube a S/28.90 en el anaquel para cubrir el 40 % del canal sin destruir la contribución de AndiBite. La diferencia de S/4.00 por pack frente a WhatsApp (S/24.90) es, además, un incentivo para que la familia recurrente migre a la recompra por WhatsApp y al pack de 12.

**Benchmark por 20 g** (documento 02, precios del 03-oct-2026): Nutri H S/3.20 (galleta con hemoglobina bovina, el competidor más cercano); Siete Dragones S/3.01; Fika S/4.00; Mamalama S/4.10; Bimbo Nutra Bien S/1.67. El pack de 6 por WhatsApp a S/24.90 equivale a S/4.15 por brownie, a la par de Fika (S/4.00) y Mamalama (S/4.10), que se venden en góndola (S/0.15 y S/0.05 más). En el stand, el pack de 6 a S/26.00 (S/4.33 por brownie) queda 6 % a 8 % sobre ellos y la unidad a S/5.50, 34 % a 38 % sobre ellos; es el precio de probar en el momento y se debe validar con el Van Westendorp. La diferencia se justifica por el hierro hemínico, el producto sin octógono y la atención en el punto. Frente a Nutri H, el premio es de 30 % por WhatsApp: hay que comunicar el formato de brownie húmedo y la aceptación infantil probada. **Disposición a pagar del segmento:** el pack quincenal de S/24.90 suma S/49.80 al mes, es decir el 2.8 % del gasto en alimentos de un hogar B (S/1,795) y el 2.2 % de uno A (S/2,214) (APEIM 2025, documento 04). Estos precios se confirman o se ajustan con el Van Westendorp de la fase 0. Si la mediana de "caro, pero lo compraría" queda por debajo de S/4.00 por unidad, se bajan los precios del pack de 6 en el Excel (hoja Supuestos, celdas C40 a C42) y se recalcula el equilibrio, que hoy es de 2,592 u/mes. Con la unidad a S/5.00 en el stand en lugar de S/5.50, el resultado del año 1 baja a S/13,153 (sección 8.3).

---

## 6. Ventas del año 1 (enero a diciembre de 2027)

### 6.1 Supuestos por canal (escenario base)

Calendario: las ventas físicas empiezan en enero de 2027 (mes 1). En los colegios privados de Lima las clases empiezan a inicios de marzo y el año termina a mediados de diciembre [HIPÓTESIS, calendario 2027 de Minedu POR CONFIRMAR]; por eso el quiosco se suma desde marzo de 2027 y baja en diciembre. Enero se vende con un solo punto de venta por las vacaciones.

| Canal | Supuesto (base) |
|---|---|
| **Stands y carritos (malls y supermercados)** | Fines de semana, todos con vendedor(a) pagado(a). Puntos de venta: 1 en enero, 2 de febrero a julio, 3 de agosto a diciembre (28 meses-punto). Días de atención por punto: 9 al mes (10 en julio y 12 en diciembre; 263 días-punto en el año). Brownies por día y por punto: de 50 en enero a 100 en marzo (unos 85 en promedio; la meta es 80 o más). Es el 42.9 % de las unidades |
| **Ferias y eventos** | 3 ferias pagadas (1 de campaña escolar en febrero y 2 navideñas en diciembre) con 700 unidades cada una, y 40 eventos sin costo (kermeses, cumpleaños y ferias gratuitas) con 150 unidades cada uno: 1 en enero, 2 en febrero, 4 en marzo y abril, 5 en mayo, 4 en junio, 3 en julio, 4 en agosto y setiembre, 4 en octubre, 3 en noviembre y 2 en diciembre [HIPÓTESIS] |
| **Recompra por WhatsApp e Instagram (delivery)** | El 35 % de las unidades vendidas en stands, carritos y ferias el mes anterior vuelve a comprar por WhatsApp, con recordatorio y sin suscripción [HIPÓTESIS]. En enero, 150 pedidos de contactos captados en las degustaciones previas [HIPÓTESIS] |
| **Colegios (quiosco)** | Desde marzo de 2027, de 300 unidades en marzo a 1,500 en octubre y noviembre (unos 5 colegios de 300 u al mes) y 600 en diciembre [HIPÓTESIS]. Sin venta de enero a febrero |
| **Naturistas** | De 120 unidades en enero a 480 en diciembre (unos 8 puntos de 60 u al mes) [HIPÓTESIS]. Pack de 6 por consignación o con factura |
| **Supermercados en góndola** | 0 en el año 1; en el supermercado se vende con carrito propio dentro del canal de stands |

**Cómo se reconcilia con el SOM del documento 04.** El documento 04 calculó 700 hogares núcleo que compran 18 packs al año, es decir 75,600 unidades. El año 1 del modelo vende 52,786 unidades (70 % del SOM), y ya no depende de que cada hogar se registre y recompre cada dos semanas, sino de cuántos brownies se venden por día en cada punto: la venta física es el 58.2 % de las unidades y la recompra por WhatsApp (35 % de lo vendido en físico el mes anterior) es el 17.4 %.

Presentaciones por canal (Excel, hoja Supuestos, sección 6): en stands, 60 % unidad, 35 % pack de 6 y 5 % pack de 12; en ferias, 70 % unidad y 30 % pack de 6; en WhatsApp, 10 % unidad o caja degustación, 60 % pack de 6 y 30 % pack de 12; en colegios, 100 % unidad; en naturistas, 100 % pack de 6. Ingreso promedio por unidad con IGV (hoja Proyeccion): S/5.02 en stands, S/5.15 en ferias, S/4.06 por WhatsApp, S/3.00 en colegios y S/2.89 en naturistas (S/4.37 en promedio).

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
| **Ventas con IGV (S/)** | 3,986 | 13,747 | 17,010 | 16,220 | 17,601 | 17,123 | 16,587 | 22,303 | 24,036 | 25,305 | 24,532 | 32,291 | 230,740.38 |
| Ventas sin IGV (S/) | 3,378 | 11,650 | 14,415 | 13,746 | 14,916 | 14,511 | 14,057 | 18,901 | 20,370 | 21,445 | 20,790 | 27,365 | 195,542.70 |

### 6.3 Resultado de las ventas por canal y por presentación (año 1, opción B)

| Canal | Unidades | % de las unidades | Ventas con IGV (S/) | % de las ventas | Contribución (S/) | Contribución por unidad (S/) |
|---|---|---|---|---|---|---|
| Stands y carritos (malls y supermercados) | 22,625 | 42.9 % | 113,502.08 | 49.2 % | 53,963.42 | 2.39 |
| Ferias y eventos | 8,100 | 15.3 % | 41,715.00 | 18.1 % | 20,119.49 | 2.48 |
| Recompra por WhatsApp e Instagram | 9,176 | 17.4 % | 37,277.50 | 16.2 % | 10,357.12 | 1.13 |
| Colegios (quiosco) | 9,165 | 17.4 % | 27,495.00 | 11.9 % | 9,086.63 | 0.99 |
| Tiendas naturistas | 3,720 | 7.0 % | 10,750.80 | 4.7 % | 3,321.63 | 0.89 |
| **Total** | **52,786** | **100 %** | **230,740.38** | **100 %** | **96,848.29** | **1.83** |

| Presentación | Unidades | Envases vendidos | Ventas con IGV (S/) | % de las unidades | % de las ventas |
|---|---|---|---|---|---|
| Unidad individual | 29,328 | 29,328 | 137,012.90 | 55.6 % | 59.4 % |
| Pack de 6 | 19,574 | 3,262 | 78,443.62 | 37.1 % | 34.0 % |
| Pack de 12 | 3,884 | 324 | 15,283.86 | 7.4 % | 6.6 % |

**Escenarios.** El Excel calcula solo el escenario base; para probar otro escenario se cambian las celdas azules de las hojas Supuestos y Mensual (puntos de venta, días, brownies por día, eventos y espacio). Las sensibilidades principales están en la sección 8.3.

### 6.4 Por qué medio se vende cada unidad (escenario base) [HIPÓTESIS de mezcla]

| Canal | Medio de pedido | Unidades | Medio de pago | Medio de entrega |
|---|---|---|---|---|
| Stands y carritos | Compra en el punto después de probar (60 % unidad, 35 % pack de 6, 5 % pack de 12); QR a WhatsApp para el recordatorio | 22,625 | Yape o Plin con QR, POS (Izipay P2 Lite SE) y efectivo | Entrega en mano |
| Ferias y eventos | 3 ferias pagadas (2,100 u) y 40 eventos sin costo, entre kermeses de colegio, cumpleaños y ferias gratuitas (6,000 u) | 8,100 | Ídem | Entrega en mano |
| Recompra por WhatsApp e Instagram | WhatsApp Business con recordatorio al cliente del punto (35 % de lo vendido en físico el mes anterior) más 150 pedidos del primer mes; Instagram con clic a WhatsApp; pack de 12 por pedido | 9,176 | Yape o Plin, transferencia o tarjeta por link de Culqi o Izipay | Motorizado o courier en rutas de martes y viernes por zona; recojo en un punto acordado; delivery gratis desde 2 packs |
| Colegios | Pedido B2B del concesionario por WhatsApp o correo; venta al alumno en el quiosco | 9,165 | Factura electrónica; transferencia a 15 o 30 días | Ruta semanal al colegio |
| Naturistas | Pedido B2B; venta en anaquel | 3,720 | Factura; 30 días o consignación | Reposición quincenal |

---

## 7. Inversión inicial y financiamiento

Todo lo que hace falta para vender desde el primer día está aquí, una sola vez (hoja Inversion del Excel). Los documentos y permisos se tratan como ya obtenidos al abrir las ventas en enero de 2027; su costo es parte de la inversión, no una condición del calendario.

| Rubro | Detalle | S/ |
|---|---|---|
| Documentos y permisos | S.A.C. en un CDE de PRODUCE (notaría) S/150; RUC, Régimen MYPE Tributario, REMYPE y libro de reclamaciones virtual S/0; marca en INDECOPI, clase 30, S/401.20; revisión legal del contrato de maquila S/400; análisis para el registro sanitario S/1,800 (3 × S/600); perfil nutricional y hierro S/1,125 (3 × S/375); estudio de vida útil S/1,050; diseño y validación de la etiqueta S/650; tasa del RS S/0 (documento 03); carnés de sanidad de los 5 socios S/75; póliza de responsabilidad civil para stands S/600 | 6,251.20 |
| Desarrollo del producto | Pruebas caseras (insumos de 3 lotes) S/942.81; endulzantes S/148; análisis preliminar de azúcar y hierro S/750; prueba sensorial con niños S/150; desarrollo y lote piloto en la planta S/1,750 [POR CONFIRMAR] (sección 3) | 3,740.81 |
| Marca | Identidad S/800; fotos de producto S/300; web y dominio S/150 | 1,250.00 |
| Equipos mínimos y 1 carrito | Equipos S/2,338: balanza S/60; selladora de impulso S/150; 4 moldes S/120; termómetros S/80; 3 coolers S/240; estantería S/350; impresora térmica de lotes S/450; kit de feria (toldo, mesa y banner) S/780; POS S/108. Más 1 carrito de exhibición con vitrina y gráfica, S/2,500 [POR CONFIRMAR; melamina a medida de S/1,150 a 1,350 por metro lineal, documento 08]; los demás puntos usan el kit de feria o el módulo del mall | 4,838.00 |
| Empaque inicial | Mínimos de compra: 5,000 flow packs S/450; 5,000 etiquetas individuales más troquel S/1,330; 1,000 doypacks S/530; 2,000 etiquetas de doypack S/720 | 3,030.00 |
| Stock inicial | Para enero y febrero: insumos, maquila, control de calidad, transporte y merma | 4,135.30 |
| Marketing de lanzamiento (enero de 2027) | 600 muestras de degustación S/1,146; 40 packs para influencers S/458; pauta de expectativa S/600; POP S/400; material para ferias y kermeses S/300; video con niños (con consentimiento) S/300 | 3,204.00 |
| Capital de trabajo de 2 meses | Colchón de caja para los primeros meses de venta; con la cuota del préstamo, la caja mínima del año 1 es de S/3,917.38 (sección 8.2) | 8,000.00 |
| Imprevistos 10 % | Sobre todo lo anterior | 3,444.93 |
| **Inversión total** | | **37,894.24** |

| Fuente | Monto (S/) | Condición |
|---|---|---|
| Aporte de los 5 socios | 25,000.00 (S/5,000 cada uno, 66.0 % de la inversión) | Capital de la S.A.C. Si se constituye por un CDE con capital de hasta 1 UIT (S/5,500), se registra ese capital y el resto se aporta como cuenta por pagar a socios [POR CONFIRMAR con el notario] |
| Préstamo | 13,000.00 | 24 cuotas de S/729.47 con una TEA de 35 % [POR CONFIRMAR; comparar tasas de microempresa en la SBS]; intereses totales de S/4,507.31; pagos del año 1 de S/8,753.66 (S/5,531.92 de capital y S/3,221.74 de intereses; 4.5 % de las ventas sin IGV). Se eligen 24 cuotas porque con 12 la cuota (unos S/1,270) se come la caja de los primeros meses. Alternativa: préstamo familiar sin intereses |
| Concurso de ProInnóvate (Startup Perú, línea de emprendimientos innovadores) | Hasta unos S/50,000 no reembolsables en convocatorias anteriores, con aporte de contrapartida del equipo [POR CONFIRMAR: el monto y las bases 2026 no se pudieron verificar porque gob.pe/proinnovate bloqueó la consulta] | **No se cuenta en el plan base**: el concurso tarda de 4 a 6 meses y es competitivo. Si se gana, se prepaga el préstamo y se financia el año 2 (GS1, film impreso y supermercado) |

**Lógica del financiamiento.** Los S/11,242.01 de documentos, desarrollo y marca son riesgo puro (ningún banco los financiaría antes de que exista el producto) y los cubre el aporte de los socios. El préstamo ayuda a pagar lo que se convierte en activo o en caja: el carrito y los equipos (S/4,838), el stock, el empaque y el capital de trabajo. Los pagos del préstamo en el año 1 equivalen al 4.5 % de las ventas sin IGV. La regla para los 5 socios es aportar lo mismo y tener la misma participación (20 % cada uno), y dejar escrito en el estatuto de la S.A.C. cómo se suman aportes adicionales si se activa el plan de contingencia.

El total financiado es de S/38,000; quedan S/105.76 adicionales en caja, que sumados al capital de trabajo dan la caja inicial de S/8,105.76 con la que parte la hoja Mensual.

---

## 8. Punto de equilibrio, resultado, flujo de caja y payback

### 8.1 Punto de equilibrio

Costos fijos mensuales: administración S/760 + coordinador(a) comercial y de operaciones en planilla S/709 + marketing S/900 + depreciación de equipos y carrito S/134.39 = **S/2,503.39**. Además, el espacio, los vendedores de stand y las ferias pagadas (S/45,870 al año, S/0.87 por unidad) se descuentan de la contribución: de los S/1.83 que deja cada unidad antes de esos costos, quedan **S/0.97** (Excel, hoja Resumen).

| Concepto | Opción B (bolsitas) | Opción C (sueltos) |
|---|---|---|
| Contribución por unidad después de stands y ferias | S/0.97 | S/1.00 |
| Costos fijos al mes | S/2,503.39 | S/2,503.39 |
| **Punto de equilibrio (unidades al mes)** | **2,592** | 2,511 |
| En packs de 6 equivalentes al mes | 432 | 419 |
| En soles con IGV al mes (a S/4.37 por unidad en promedio) | unos S/11,300 | unos S/11,000 |

El año promedia 4,399 unidades al mes, es decir 70 % más que el equilibrio. El equilibrio es un promedio del año: los meses con un solo punto de venta (enero) o con la feria de campaña escolar y el segundo punto recién abierto (febrero) quedan en negativo aunque el año supere esa cifra. Versión anterior: 2,215 u/mes (369 packs), con costos fijos de S/1,803.83 al mes.

### 8.2 Resultado operativo y caja mensual del año 1 (escenario base, opción B; S/ sin IGV salvo la primera fila; meses redondeados al sol y totales con centavos; antes de intereses e impuesto a la renta)

| Concepto | Ene-27 | Feb-27 | Mar-27 | Abr-27 | May-27 | Jun-27 | Jul-27 | Ago-27 | Set-27 | Oct-27 | Nov-27 | Dic-27 | Total año |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Ventas con IGV | 3,986 | 13,747 | 17,010 | 16,220 | 17,601 | 17,123 | 16,587 | 22,303 | 24,036 | 25,305 | 24,532 | 32,291 | 230,740.38 |
| Ventas sin IGV | 3,378 | 11,650 | 14,415 | 13,746 | 14,916 | 14,511 | 14,057 | 18,901 | 20,370 | 21,445 | 20,790 | 27,365 | 195,542.70 |
| Contribución (opción B) | 1,722 | 6,316 | 7,206 | 6,682 | 7,344 | 6,986 | 6,895 | 9,325 | 9,941 | 10,346 | 9,973 | 14,112 | 96,848.29 |
| Espacio para stands y carrito | −600 | −1,200 | −1,200 | −1,200 | −1,200 | −1,200 | −1,200 | −1,800 | −1,800 | −1,800 | −1,800 | −1,800 | −16,800 |
| Vendedores de stand | −810 | −1,620 | −1,620 | −1,620 | −1,620 | −1,620 | −1,800 | −2,430 | −2,430 | −2,430 | −2,430 | −3,240 | −23,670 |
| Ferias pagadas | 0 | −1,800 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | −3,600 | −5,400 |
| Costos fijos | −2,503 | −2,503 | −2,503 | −2,503 | −2,503 | −2,503 | −2,503 | −2,503 | −2,503 | −2,503 | −2,503 | −2,503 | −30,040.67 |
| **Resultado operativo (opción B)** | **−2,191** | **−807** | **1,882** | **1,359** | **2,021** | **1,662** | **1,391** | **2,592** | **3,207** | **3,613** | **3,240** | **2,968** | **20,937.62** |
| Resultado acumulado | −2,191 | −2,998 | −1,116 | 243 | 2,264 | 3,926 | 5,318 | 7,909 | 11,117 | 14,729 | 17,969 | 20,938 | 20,937.62 |
| Cuota del préstamo (24 cuotas) | −729 | −729 | −729 | −729 | −729 | −729 | −729 | −729 | −729 | −729 | −729 | −729 | −8,753.66 |
| **Caja al cierre del mes** | **5,320** | **3,917** | **5,205** | **5,968** | **7,394** | **8,462** | **9,258** | **11,255** | **13,867** | **16,884** | **19,529** | **21,902** | **21,902.39** |

La caja parte de S/8,105.76 (capital de trabajo de S/8,000 más lo que sobra de la inversión) y cada mes suma el resultado y la depreciación (que no sale de caja) y resta la cuota del préstamo, que incluye capital e intereses. Es una caja simplificada [HIPÓTESIS]: no modela el desfase de cobranzas a colegios y naturistas (30 días), el pago anticipado de la producción del mes siguiente ni el pago del impuesto a la renta anual (S/1,967.13, que se paga después del cierre del año); esos desfases se deben revisar con el contador cuando haya ventas reales.

**Lectura.** (1) Enero cierra en −S/2,191: hay un solo punto de venta con su vendedor, 870 unidades y un evento sin costo, y la inversión en marketing de lanzamiento ya está pagada. (2) Febrero cierra en −S/807: abre el segundo punto, que suma espacio y vendedor, y se paga la feria de campaña escolar (S/1,800). (3) El resultado acumulado es negativo hasta marzo (−S/1,116) y positivo desde abril de 2027 (S/243). De marzo a diciembre el resultado mensual está entre S/1,359 y S/3,613. (4) Diciembre vende 7,028 unidades (S/32,291 con IGV) y deja S/2,968 aun con las dos ferias navideñas (S/3,600) y tres puntos de 12 días con vendedor (S/3,240). (5) La caja baja a S/3,917.38 en febrero de 2027, su mínimo (1.6 veces los costos fijos de un mes), y cierra el año en S/21,902.39; el capital de trabajo de S/8,000 es lo que sostiene enero y febrero.

### 8.3 Resultado del año 1, utilidad neta, payback y sensibilidad

| Concepto (S/ sin IGV) | Opción B (bolsitas) | Opción C (sueltos) |
|---|---|---|
| Ventas sin IGV | 195,542.70 | 195,542.70 |
| Producción y costos variables de canal | −98,694.41 | −97,050.17 |
| **Contribución** | **96,848.29** | **98,492.53** |
| Espacio para stands y carrito | −16,800.00 | −16,800.00 |
| Vendedores de stand | −23,670.00 | −23,670.00 |
| Ferias pagadas | −5,400.00 | −5,400.00 |
| Administración | −9,120.00 | −9,120.00 |
| Coordinador(a) comercial y de operaciones (planilla) | −8,508.00 | −8,508.00 |
| Marketing | −10,800.00 | −10,800.00 |
| Depreciación | −1,612.67 | −1,612.67 |
| **Resultado operativo** | **20,937.62** | **22,581.87** |
| **Margen operativo** | **10.7 %** | **11.5 %** |
| Inversión inicial | −37,894.24 | −37,894.24 |
| **Resultado del año 1 menos la inversión** | **−16,956.62** | **−15,312.37** |

**De resultado operativo a utilidad neta (año 1, opción B).**

| Concepto | S/ |
|---|---|
| Resultado operativo | 20,937.62 |
| Más: pagos a cuenta de renta (1 % de las ventas sin IGV) ya restados en el costo de canal | +1,955.43 |
| Menos: intereses del préstamo en el año 1 | −3,221.74 |
| **Utilidad antes de impuestos** | **19,671.31** |
| Menos: impuesto a la renta del Régimen MYPE Tributario (10 % hasta 15 UIT de utilidad) | −1,967.13 |
| **Utilidad neta del año 1** | **17,704.18** |

El resultado operativo ya incluye a todo el personal que opera el negocio (vendedores de stand y coordinador en planilla). Los socios son dueños y directorio: no cobran un sueldo operativo y reciben las utilidades que decida distribuir la S.A.C. Los gastos de documentos, desarrollo y marca no se descuentan aparte: son parte de la inversión.

**Payback.** La inversión **no se recupera en el año 1**: faltan S/16,956.62 (opción B). Con el año 2 al ritmo de octubre a diciembre de 2027 (unos S/3,274 al mes), se recupera en el **mes 18 (junio de 2028)**; con la opción C, en el mes 17 [el Excel proyecta el año 2 con ese ritmo y sin estacionalidad de enero y febrero].

**Sensibilidad** (Excel; cada fila cambia un solo dato del escenario base):

| Escenario | Resultado operativo del año 1 | Mes de recuperación de la inversión |
|---|---|---|
| Base | S/20,938 | 18 (junio de 2028) |
| Ventas −20 % | S/8,612 | 29 |
| Ventas +20 % | S/33,262 | 13 |
| Espacio a S/1,000 por punto al mes | S/9,738 | 26 |
| Maquila a S/0.55 por brownie | S/15,395 | 21 |
| Unidad a S/5.00 en el stand y la feria | S/13,153 | 23 |

**Advertencias.** (1) Todo el personal operativo (vendedores de stand y coordinador) está pagado dentro del resultado; los socios, como dueños y directorio, se remuneran con las utilidades y no con un sueldo operativo. (2) La utilidad neta de S/17,704.18 se calcula después de intereses y renta, pero antes de devolver capital del préstamo (S/5,531.92 en el año 1). (3) **Plan de contingencia:** si el promedio de brownies por día y por punto cae por debajo de 66 durante dos meses seguidos [HIPÓTESIS; es lo que hace falta para pagar el espacio y el vendedor de un punto de 9 días], se cierran los puntos que no cubren sus S/1,410 al mes, se cancelan las ferias pagadas que falten, se sigue con los mejores puntos, los colegios y los eventos sin costo, y, si la caja baja de un mes de costos fijos (S/2,503), cada socio aporta S/2,500 adicionales (S/12,500) y se replantea el precio o el formato antes de seguir.

---

## 9. Riesgos, mitigaciones y KPIs

### 9.1 Diez riesgos

| # | Riesgo | Impacto | Mitigación |
|---|---|---|---|
| 1 | El espacio del stand o del carrito cuesta más que los S/600 por punto al mes del plan (ningún mall ni cadena publica tarifa) o el mall no da el espacio | Alto: son S/16,800 al año; a S/1,000 por punto, el resultado baja a S/9,738 y la recuperación pasa al mes 26 | Pedir cotización escrita a 5 malls, a InRetail y a Cencosud (plantilla del documento 08); empezar por programas de emprendedores, gratuitos o simbólicos, y pop-ups de fin de semana; cambiar el valor en la hoja Supuestos (B57) apenas lleguen las cotizaciones |
| 2 | Cada punto vende menos de 80 brownies por día (el modelo usa unos 85 en promedio, de 50 a 100) | Alto: con ventas 20 % menores el resultado del año baja a S/8,612 y la recuperación pasa al mes 29 | Degustación en el punto, elegir pasillos de alto tráfico, medir ventas por día y por hora, mover o cerrar puntos que no rindan; sumar eventos sin costo y colegios; enero ya supone un solo punto |
| 3 | Rotación o mala atención de los vendedores de stand (S/90 por día) y falta de tiempo de los socios para supervisar, en temporada de exámenes | Medio-alto | Bolsa de 3 o 4 vendedores con carné de sanidad y guion de venta, turnos de supervisión rotativos de los socios, coordinador(a) en planilla que lleva el stock y los pedidos, plantillas de WhatsApp Business y producción tercerizada |
| 4 | Ninguna planta acepta lotes de 3,000 a 5,000 unidades o la maquila supera los S/0.45 por brownie | Alto: a S/0.55 el resultado baja a S/15,395 (unos S/5,500 al año por cada S/0.10 de más) y la recuperación pasa al mes 21 | Cotizar 4 plantas; usar INDDA para las "primeras maquilas"; negociar corridas bimestrales, siempre dentro de la vida útil |
| 5 | Escasez, precio alto o problema de inocuidad de la sangrecita fresca de pollo (Redondos, S/11.29 por kg en Makro) | Medio-alto: es el insumo crítico | Homologar 2 proveedores y cotizar con un camal registrado en SENASA; cadena de frío y cocción en la planta con control por lote; alternativa de polvo de sangrecita (Malli y Allpa Manta) si la planta no puede cocerla; la AndiBite S.A.C. compra el insumo y se lo entrega a la planta |
| 6 | Los niños rechazan la V-SO (sensación fría del eritritol, poco dulzor) | Alto | Filtro de la fase 0 con la V-P como respaldo; mezcla con alulosa si DIGESA confirma que no cuenta como azúcar; más plátano y canela. El stand permite medirlo en vivo con la degustación |
| 7 | El laboratorio cuenta la alulosa como azúcar u observa el claim de hierro | Medio | Basar la fórmula en eritritol; declarar "fuente de hierro" solo con análisis; nunca decir "previene la anemia" (D. Leg. 1044, documento 03) |
| 8 | La recompra por WhatsApp es menor al 35 % de lo vendido en físico el mes anterior | Medio: son 9,176 unidades (17.4 %) y S/10,357 de contribución | Captar el WhatsApp de cada cliente del stand con QR y cupón; recordatorio a los 12 días; rotar un sabor de temporada; si baja de 20 % en dos meses, reforzar el contacto en el punto antes de gastar en pauta |
| 9 | Caja ajustada: la mínima es S/3,917.38 en febrero de 2027 y la caja es simplificada (sin desfase de cobranzas) | Alto si se combina con los riesgos 1 y 2 | Plan de contingencia (sección 8.3); nada de crédito a canales mientras no haya 2 meses de caja; revisar la caja con el contador cuando haya ventas reales |
| 10 | Incidente de inocuidad (moho, vida útil menor a la declarada, mala manipulación en el stand) | Muy alto para una marca infantil | Estudio de vida útil, control de calidad por lote, contramuestras, rotación FIFO, vencimiento corto (60 días) al inicio, carné de sanidad vigente y cadena de manipulación en el stand |

### 9.2 KPIs del año 1

**Gobierno de los indicadores.** Carlos Inga consolida los KPIs todos los domingos en la hoja de pedidos (el mismo Google Sheets del plan de marketing anterior) y el equipo los revisa en 30 minutos. Hay tres semáforos que obligan a decidir sin esperar el cierre del trimestre: menos de 66 brownies por día y por punto durante dos fines de semana seguidos [HIPÓTESIS], la caja por debajo de un mes de costos fijos y el costo de producción por encima de S/1.60 por brownie en dos lotes seguidos. Cualquiera de los tres activa una reunión extraordinaria y, si corresponde, el plan de contingencia de la sección 8.3.

| KPI | Meta (base) | Frecuencia |
|---|---|---|
| Brownies por día y por punto de venta | 80 o más (el modelo usa unos 85 en promedio: de 50 en enero a 100 en marzo) | Cada fin de semana |
| Unidades vendidas al mes | Al menos 2,592 (equilibrio); promedio de 4,399 en el año; de 5,208 a 7,028 de agosto a diciembre | Semanal |
| Recompra por WhatsApp | 35 % de las unidades vendidas en físico el mes anterior | Mensual |
| Puntos de venta activos | 1 en enero; 2 de febrero a julio; 3 de agosto a diciembre | Mensual |
| Brownies por evento | 700 o más en feria pagada; 150 o más en evento sin costo | Por evento |
| Espacio por punto | S/600 o menos al mes | Por contrato |
| Costo de producción puesto en almacén | S/1.38 o menos por brownie en el pack de 6 (opción B; S/8.29 el pack) | Por lote |
| Contribución por unidad | S/1.83 o más antes de stands y ferias; S/0.97 o más después | Mensual |
| Resultado operativo mensual | Positivo todos los meses desde marzo de 2027 (el modelo da entre S/1,359 y S/3,613) | Mensual |
| Utilidad neta del año | S/17,704 (después de intereses y renta) | Trimestral |
| Merma y vencidos | 5 % o menos; vencidos 2 % o menos | Por lote |
| Colegios y naturistas activos | Unos 5 colegios y 8 naturistas a fines de 2027 [HIPÓTESIS] | Mensual |
| Aceptación sensorial | Al menos 75 % de caritas 4 y 5 en cada lote nuevo | Trimestral |
| Caja | Al menos 1 mes de costos fijos (S/2,503) en todo momento; el modelo prevé un mínimo de S/3,917 en febrero de 2027 | Semanal |
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
