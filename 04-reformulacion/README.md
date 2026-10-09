# AndiBite 2.0 — Estudio de reformulación (octubre 2026)

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

## Cifras clave (escenario base; precios confirmados el 9-oct-2026, fuente: Excel de costeo y documento 05)
- Precios con IGV, venta directa: unidad S/4.00; pack de 6 S/24.90 (S/4.15 por brownie, opción B con bolsitas); pack de 12 S/46.90 (S/3.91 por brownie, 5.8 % menos); caja degustación de 3, S/12.00. Ferias: unidad S/5.00, pack de 6 S/26.00, pack de 12 S/48.00. Quiosco: el alumno paga S/4.00 y AndiBite recibe S/3.00. Tienda naturista: anaquel S/28.90 y AndiBite cobra S/17.34.
- Benchmark por 20 g: AndiBite S/4.15 frente a Nutri H S/3.20 (premio de unos 30 %), Fika S/4.00 y Mamalama S/4.10 (1 a 4 % más).
- Costo de producción a 3,000 u/mes: S/1.65 por brownie (pack de 6 en bolsitas, S/9.90); unidad suelta S/1.69; pack de 12 S/1.56 por unidad. Versión anterior (opción A): S/1.91 a 3,000 u/mes.
- Costos fijos: S/2,857 al mes. Punto de equilibrio: 3,308 unidades al mes (551 packs de 6); abril de 2027 es el primer mes con utilidad y marzo cierra en -S/420. Versión anterior: 3,500 u/mes (583 packs).
- Ventas año 1 (marzo 2027 a febrero 2028): 76,335 unidades y S/302,900 con IGV. Resultado operativo: S/31,638 (12.3 % de las ventas sin IGV), antes de intereses, gastos preoperativos e impuesto a la renta. Versión anterior: S/319,869 con IGV y utilidad neta de S/37,152.
- Inversión inicial: S/34,484 (S/25,000 de los socios + préstamo de S/10,000), sin cambios. Payback por recalcular: con el resultado acumulado del año 1 faltan unos S/2,846, así que se recupera poco después del año 1 (versión anterior: 9 meses). Los escenarios pesimista y optimista en soles también están por recalcular.
- Decisión de producto: lanzar la versión sin octógono (azúcar por debajo de 10 g/100 g con eritritol y plátano), validarla con niños antes.

## Pendientes críticos antes de ejecutar
1. Cotizar maquila (MAKING, Panificadora Unión, INDDA-UNALM) y el polvo de sangrecita a granel.
2. Prueba sensorial con niños de la versión sin octógono y de los 3 sabores.
3. Nombre decidido: AndiBite. Falta la búsqueda fonética en INDECOPI (clase 30) antes de imprimir empaques definitivos.
4. Completar en el documento 07 los resultados reales del focus 2.
