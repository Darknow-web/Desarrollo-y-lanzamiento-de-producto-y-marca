# AndiBite 2.0 — Estudio de reformulación (octubre 2026)

**9-oct-2026, modelo v5: año 1 de enero a diciembre de 2027, personal operativo pagado, sangrecita fresca y maquila de S/0.45.**

Carpeta con el estudio completo para refundar el producto y la marca, hecho como lo haría una consultora de investigación de mercados: cada cifra con fuente y fecha, y lo no verificable marcado como [POR CONFIRMAR] o [HIPÓTESIS].

| # | Documento | Qué responde |
|---|---|---|
| 00 | BRIEF de reformulación | La nueva dirección: sabores, padres conscientes, maquila, empresa real, entregables T1 |
| 01 | Producto, sabores y recetas | Qué sabores gustan a niños, cómo camuflar la sangrecita, 5 recetas replicables en casa con gramos y pasos, hierro por unidad, plan de prueba sensorial |
| 02 | Insumos, proveedores y costeo | Precios reales en Lima con links, costo por unidad en 3 escenarios, empaque, competidores y precio por 20 g, lista de compra del lote de prueba |
| 03 | Maquila, regulación y permisos | Plantas de maquila en Lima, registro sanitario DIGESA con fabricante tercero, octógonos y etiquetado, constitución de empresa, INDECOPI, requisitos de colegios y retail, hoja de ruta y costos regulatorios |
| 04 | Público objetivo y buyer persona con datos | Dimensionamiento con INEI, APEIM, ENDES y Minedu; TAM/SAM/SOM; justificación del segmento "padres conscientes"; buyer personas Claudia y Rodrigo anclados en datos; insights y guía de validación |
| 05 | Plan comercial y financiero | Decisión sobre octógono, fases, estructura de costos completa, precio por canal, ventas año 1 mes a mes por canal, inversión inicial, punto de equilibrio, flujo de caja, riesgos y KPIs |
| 06 | Marca 2.0 e innovación | Diagnóstico de AndiBite, 3 rutas de marca, nombres de sabores, 8 innovaciones, empaque 2.0 y tono de voz |
| 07 | T1: Canvas, propuesta de valor, validación y pitch | Los cuatro entregables de la semana, listos para diapositivas, con guion de exposición y preguntas difíciles |

Presentación: `T1-presentacion-AndiBite-2-0.pptx` (editable, se importa en Canva o se abre en PowerPoint) y `T1-presentacion-AndiBite-2-0.pdf` (solo lectura) en esta misma carpeta.

Costeo por presentación: `Costeo-presentaciones-AndiBite.xlsx` (fórmulas vivas; unidad individual, pack de 6 con opción B y C, pack de 12, proyección mensual y punto de equilibrio). Se regenera con `build_costeo.py`.

## Cifras clave (modelo v5 del 9-oct-2026: año 1 de enero a diciembre de 2027, venta física como canal principal, documentos ya listos y pagados en la inversión, todo el personal operativo pagado; fuente: Excel de costeo y documento 05)
- Precios con IGV. Stand, carrito y ferias: unidad S/5.50, pack de 6 S/26.00, pack de 12 S/48.00. WhatsApp: unidad S/4.00, pack de 6 S/24.90 (S/4.15 por brownie), pack de 12 S/46.90; caja degustación de 3, S/12.00. Quiosco: el alumno paga S/4.00 y AndiBite recibe S/3.00. Tienda naturista: anaquel S/28.90 y AndiBite cobra S/17.34. Sin suscripción.
- Benchmark por 20 g: AndiBite S/4.15 frente a Nutri H S/3.20 (premio de unos 30 %), Fika S/4.00 y Mamalama S/4.10 (1 a 4 % más).
- Costo de producción con sangrecita fresca de pollo (insumos S/0.40) y maquila de S/0.45: S/1.38 por brownie en el pack de 6 en bolsitas (S/8.29); unidad suelta S/1.43; pack de 12 S/1.29 por unidad. Margen bruto en el stand: 69 % en la unidad y 62 % en los packs. Versión anterior (sangrecita en polvo, maquila de S/0.50): S/1.65 por brownie.
- Personal operativo pagado: vendedores de stand a S/90 por día en todos los puntos (S/23,670 al año) y un coordinador en planilla, medio tiempo, S/709 al mes. Los socios son dueños y directorio: supervisan y reciben utilidades. Espacio de S/600 por punto al mes y S/1,800 por feria pagada (febrero y 2 en diciembre).
- Canales del año 1 (unidades): stands y carritos en malls y supermercados 22,625 (42.9 %), WhatsApp 9,176 (17.4 %), colegios 9,165 (17.4 %), ferias y eventos 8,100 (15.3 %), naturistas 3,720 (7.0 %). Puntos de venta: 1 en enero, 2 de febrero a julio y 3 de agosto a diciembre. Costos fijos S/2,503 al mes; espacio, vendedores y ferias S/45,870 al año. Punto de equilibrio: 2,592 unidades al mes (432 packs de 6); solo enero y febrero cierran en rojo.
- Ventas año 1 (enero a diciembre de 2027): 52,786 unidades y S/230,740 con IGV. Resultado operativo: S/20,938 (10.7 % de las ventas sin IGV). Utilidad neta: S/17,704, después de S/3,222 de intereses del préstamo y S/1,967 de impuesto a la renta (más S/1,955 de pagos a cuenta ya restados en el costo de canal). Versión anterior (modelo v3, noviembre de 2026 a octubre de 2027): 47,223 u y S/198,748.
- Inversión inicial: S/37,894, con todos los documentos y permisos para vender (S/6,251) y 1 carrito de exhibición. Socios S/25,000 + préstamo de S/13,000 en 24 cuotas de S/729.47. Caja mínima S/3,917 (febrero de 2027); la inversión se recupera en el mes 18 (junio de 2028).
- Sensibilidad (resultado operativo del año 1 / mes de recuperación): ventas −20 %, S/8,612 / mes 29; ventas +20 %, S/33,262 / mes 13; espacio a S/1,000 por punto, S/9,738 / mes 26; maquila a S/0.55, S/15,395 / mes 21; unidad a S/5.00, S/13,153 / mes 23.
- Decisión de producto: lanzar la versión sin octógono (azúcar por debajo de 10 g/100 g con eritritol y plátano), validarla con niños antes.

## Pendientes críticos antes de ejecutar
1. Formalizar la maquila (MAKING, Panificadora Unión, INDDA-UNALM; tarifa de S/0.45 por brownie y lote mínimo) y el proveedor de sangrecita fresca de pollo.
2. Prueba sensorial con niños de la versión sin octógono y de los 3 sabores.
3. Nombre decidido: AndiBite. Falta la búsqueda fonética en INDECOPI (clase 30) antes de imprimir empaques definitivos.
4. Completar en el documento 07 los resultados reales del focus 2.
