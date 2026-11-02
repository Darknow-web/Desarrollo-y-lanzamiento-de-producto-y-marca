# T2 · #17b Plantilla de costeo y estrategia de precios
Responsable: Carlos Inga · Grupo 2 · AndiBite

**Qué contiene.** (1) La tabla de lo que se llenó en la plantilla de la profesora. (2) El cuadre con el Excel v7: costo unitario y punto de equilibrio. (3) La estrategia de precios elegida, con su justificación en el formato de la plantilla. El archivo es `04-reformulacion/T2/Plantilla_Costeo_Estrategia_Precios_AndiBite.xlsx`. La plantilla original no se tocó.

**Cómo se lee.** El periodo es un mes promedio de 2027 (año 1). La unidad es un brownie de 20 g. Todos los montos van sin IGV (impuesto general a las ventas, 18 %), salvo que se diga lo contrario. Las cifras salen del Excel v7 (`Costeo-presentaciones-AndiBite.xlsx`), de `Presupuesto-marketing-AndiBite.xlsx` y de HECHOS_v7, sin cambios.

---

## 1. Qué se llenó

### Datos generales

| Celda | Dato |
|---|---|
| Negocio | AndiBite |
| Producto | Mini brownie de 20 g con hierro (sangrecita liofilizada) |
| Integrantes | Diana Ayoso, Patricia Cárdenas, Adela Robles, Angie Blas, Carlos Inga (Grupo 2) |
| Periodo | Mes promedio de 2027 (año 1) |

### Costos fijos del mes (total S/2,738)

| Concepto | S/ al mes | Qué incluye |
|---|---|---|
| Alquiler | 0 | El espacio de los stands va como costo variable por unidad (S/0.9748), no como alquiler fijo |
| Sueldos administrativos | 709 | Coordinadora comercial y de operaciones, medio tiempo, en planilla |
| Internet y teléfono | 995 | Administración: contador, facturación, web, teléfono, movilidad, GS1 (códigos de barras), banco, uniformes y app |
| Depreciación de equipos | 134 | Equipos y carrito, 36 meses |
| Licencias y seguros | 0 | Los permisos van en la inversión inicial |
| Otros costos fijos | 900 | Marketing: S/700 de pauta, degustaciones y material, más S/200 de embajadores |
| **Total (B13)** | **2,738** | Fórmula `=SUM(B7:B12)` |

El Excel v7 tiene S/2,738.39 al mes (S/32,861 al año). La plantilla usa los montos redondeados a soles enteros.

### Costos variables por unidad (total S/3.0787)

| Concepto | S/ por brownie | Qué incluye |
|---|---|---|
| Materia prima e insumos | 0.6050 | Insumos con sangrecita liofilizada a S/300 por kg |
| Envase y empaque | 0.3339 | Bolsita, doypack o caja y etiquetas. Es el promedio real del año 1 |
| Mano de obra variable | 0.4500 | Maquila. La planta solo hidrata |
| Comisión por venta | 0.4296 | Costo variable de canal: delivery, pasarela, degustación y comisiones de quiosco y naturista |
| Transporte por unidad | 0.2854 | Control de calidad, transporte y almacén (0.2137) más merma (0.0717) |
| Otros costos variables | 0.9748 | Stands, vendedores, ferias y eventos: S/51,010 al año ÷ 52,331 unidades |
| **Total (B23)** | **3.0787** | Fórmula `=SUM(B17:B22)` |

**Por qué el envase es 0.3339.** El costo de producción promedio del año 1 es S/1.6743 por brownie (Resumen B54). Si se resta lo que ya está en otras filas, queda el envase:

`Envase = 1.6743 − insumos 0.605 − maquila 0.45 − transporte y merma 0.2854 = 0.3339`

El pack de 6 por sí solo da 0.305 (bolsita 0.09 + doypack 0.088 + etiquetas 0.127). La unidad suelta lleva etiqueta propia y sube el promedio. Con 0.305 el costo variable quedaría en 3.05 y no cuadraría con el Excel.

### Volumen, margen y precio

| Celda | Dato | Fórmula o fuente |
|---|---|---|
| B26 Unidades del mes (Q) | 4,361 | 52,331 unidades del año ÷ 12 |
| B33 Margen deseado | 30 % | Referencia de la plantilla |
| B35 Precio elegido | S/3.9632 (se ve S/3.96 sin IGV; S/4.68 con IGV) | Precio promedio ponderado de todas las presentaciones y canales (Resumen B59) |
| B42 Competidor 1 | S/3.20 | Nutri H, galleta con hemoglobina bovina, el más cercano |
| B43 Competidor 2 | S/4.00 | Fika |

**Precios de lista con IGV** (están escritos en la celda C35):

| Presentación | Stand | WhatsApp |
|---|---|---|
| Unidad | S/6.00 | No se vende suelta por WhatsApp |
| Pack de 6 | S/27.90 (S/4.65 c/u) | S/26.90 |
| Pack de 12 | S/51.90 (S/4.33 c/u) | S/49.90 |
| Caja de 3 sabores | S/16.50 | S/12.00 |

El precio promedio ponderado (S/3.96 sin IGV) es menor que el de lista porque pesan los packs, el quiosco y la recompra por WhatsApp. Es el precio con el que se hizo todo el plan.

---

## 2. Resultados de la plantilla y cuadre con el Excel v7

Valores recalculados con LibreOffice (`soffice --headless --convert-to xlsx`).

| Celda | Qué es | Fórmula | Valor |
|---|---|---|---|
| B13 | Costos fijos (CF) | `=SUM(B7:B12)` | S/2,738.00 |
| B23 | Costo variable unitario (CVu) | `=SUM(B17:B22)` | S/3.0787 |
| B28 | Costos variables totales | `=B23*B26` = 3.0787 × 4,361 | S/13,426.21 |
| B29 | Costo total (CT) | `=B27+B28` = 2,738 + 13,426.21 | S/16,164.21 |
| B30 | Costo unitario (CU) | `=B29/B26` = 16,164.21 ÷ 4,361 | S/3.7065 |
| B31 | Punto de equilibrio | `=IFERROR(B27/(B35-B23),0)` = 2,738 ÷ (3.9632 − 3.0787) | 3,095.5 unidades al mes |
| B34 | Precio sugerido sin IGV | `=B30/(1-B33)` = 3.7065 ÷ 0.70 | S/5.2951 (S/5.30) |
| D34 | Precio sugerido con IGV | `=B34*1.18` | S/6.25 |
| B35 | Precio elegido | dato | S/3.9632 |
| B36 | Ganancia unitaria | `=B35-B30` = 3.9632 − 3.7065 | S/0.2567 |
| B37 | Margen real sobre el precio | `=B36/B35` = 0.2567 ÷ 3.9632 | 6.48 % |
| B38 | Ventas del mes | `=B35*B26` = 3.9632 × 4,361 | S/17,283.52 |
| B39 | Ganancia total del mes | `=B38-B29` = 17,283.52 − 16,164.21 | S/1,119.30 |
| B44 | Promedio de competidores | `=AVERAGEIF(B42:B43,">0")` | S/3.60 |

### Cuadre con el Excel v7

| Cifra | Plantilla | Excel v7 | Diferencia |
|---|---|---|---|
| Costo unitario (CU) | S/3.7065 | S/3.7067 (Resumen B58) | 0.0002, por redondear los costos fijos a S/2,738 |
| Costo de producción por unidad | 1.6743 (insumos 0.605 + envase 0.3339 + maquila 0.45 + transporte y merma 0.2854) | S/1.6743 (B54) | 0 |
| Costo de canal por unidad | S/0.4296 | S/0.4296 (B55) | 0 |
| Stands y ferias por unidad | S/0.9748 | S/0.9748 (B56) | 0 |
| Costos fijos por unidad | 2,738 ÷ 4,361 = S/0.6278 | S/0.6279 (B57) | 0.0001 |
| Punto de equilibrio | 3,095.5 unidades al mes | 3,096.2 (Resumen B21) | menos de 1 unidad |
| Precio promedio sin IGV | S/3.9632 | S/3.9632 (B59) | 0 |
| Margen operativo | 6.48 % | 6.47 % (B19) | 0.01 puntos |
| Ganancia del año | S/1,119.30 × 12 = S/13,432 | S/13,423 (B18) | S/9, por redondeo |

Cómo se comprueba el punto de equilibrio: el Excel lo calcula con la contribución por unidad después de stands, ferias y eventos (S/0.8844, Resumen B20). En la plantilla es lo mismo: 3.9632 − 3.0787 = S/0.8845 por brownie. Con costos fijos de S/2,738 al mes, 2,738 ÷ 0.8845 = 3,095.5. El año 1 de 52,331 unidades se vende en promedio a 4,361 al mes, por encima del equilibrio, pero enero y febrero quedan abajo (3,700 brownies en los dos meses).

### Un cambio a la fórmula de la plantilla

La plantilla original traía en B31 `=B27/(B34-B23)`, que usa el precio sugerido (S/5.30). Con ese precio el equilibrio sale en 1,235 unidades, lo que no es lo que pasa en el negocio, porque AndiBite no cobra S/5.30. Se cambió a `=IFERROR(B27/(B35-B23),0)`, que usa el precio elegido por el equipo. La nota está en C31: "Punto de equilibrio con el precio elegido (unidades al mes)". Es el único cambio de fórmula. El resto sigue como la profesora lo dejó.

### Cómo leer el margen

- El precio sugerido por la plantilla (S/5.30 sin IGV) es lo que haría falta cobrar para ganar 30 % del precio, repartiendo todos los costos entre 4,361 unidades.
- El equipo cobra S/3.96, y el margen real sobre el precio queda en 6.5 %. Es el margen operativo del plan, después de todos los costos: producción, canal, stands y fijos.
- El margen bruto sobre producción es 58 %: (3.96 − 1.67) ÷ 3.96 = 0.578. Es el margen antes de stands, canal y fijos. Los dos números son correctos; miden cosas distintas.
- Por qué no se sube el precio a S/5.30: el padre del segmento A pagaría S/24 a 30 por el pack de 6 (S/4.00 a 5.00 por brownie) y el del B, S/18 a 24. Un precio promedio de S/5.30 sin IGV (S/6.25 con IGV) pasa la disposición a pagar de ambos.

---

## 3. Análisis y estrategia de precios (formato de la plantilla)

### Precios de la competencia (por 20 g)

| Competidor | Precio | Nota |
|---|---|---|
| Competidor 1: Nutri H | S/3.20 | Galleta con hemoglobina bovina, el más cercano |
| Competidor 2: Fika | S/4.00 | |
| **Promedio (B44)** | **S/3.60** | |

Los precios son los del documento 05 (línea 256), tomados el 3 de octubre de 2026.

### ¿El precio elegido está por debajo, igual o por encima del promedio?

**Por encima.**

- El pack de 6 en el stand (S/4.65 con IGV por brownie) queda 29 % arriba: 4.65 ÷ 3.60 − 1 = 0.29.
- El precio promedio con IGV (S/4.68) queda 30 % arriba: 4.68 ÷ 3.60 − 1 = 0.30.
- Sin IGV (S/3.96) queda 10 % arriba. Se comparan los precios con IGV porque los de la competencia son precios de góndola.

### Estrategia seleccionada

**Precio basado en el valor percibido**, apoyado en **precio por paquetes** (pack de 6 y de 12) y en **precio promocional** solo en el lanzamiento.

- **Valor percibido** es la estrategia principal: el precio se fija por lo que el cliente recibe, no por lo que cuesta ni por lo que cobran los demás.
- **Paquetes:** el pack de 6 y el de 12 salen más baratos por brownie que la unidad suelta (S/4.65 y S/4.33 frente a S/6.00), y todavía más baratos por WhatsApp (S/4.48 y S/4.16). Así la unidad suelta deja que el niño pruebe en el stand y los packs premian a quien se lleva más.
- **Promocional:** solo en el lanzamiento. Degustación gratis en el stand a cambio de contar el truco, muestras y el concurso #LoQueNadieVe. Después del lanzamiento no hay descuentos.

### Justificación de la estrategia

1. El padre o la madre de los segmentos A y B no compra el brownie más barato. Compra que su hijo sí se lo coma.
2. Por eso el precio se apoya en el hierro hemo medido en cada lote, en que no lleva octógonos y en la app Andi, que muestra el hierro de cada día.
3. Nutri H es más barato (S/3.20 por 20 g), pero sabe a galleta fortificada. El brownie húmedo, que no sabe a sangrecita, es lo que se paga de más.
4. Estamos 29 % sobre el promedio de competidores (S/4.65 frente a S/3.60) y por debajo de lo que Claudia dijo que pagaría (S/24 a 30 por el pack de 6, es decir S/4.00 a 5.00 por brownie).
5. Los paquetes bajan el precio por unidad y la promoción se limita al lanzamiento, para no acostumbrar al cliente a esperar descuentos.

### ¿Qué valor diferencial justifica el precio?

- Sangrecita que no se nota en el sabor.
- 1.9 mg de hierro por brownie, medido en cada lote.
- App Andi que muestra el hierro de hoy.
- Pack de la semana ("Semana completa", pack de 12).
- Sin octógonos.
- La promesa de marca: "Hierro sin pelear cada mañana".

### Riesgos y acciones para mejorar la rentabilidad

| Riesgo | Por qué importa | Acción |
|---|---|---|
| Punto de equilibrio exigente | Hay que vender 3,096 brownies al mes; enero y febrero quedan en pérdida (3,700 brownies entre los dos) | Recompra por WhatsApp (meta de 35 %), pack de 12, colegios y naturistas desde marzo |
| Dependencia de 3 stands | Los stands son el canal principal: 42.9 % de las unidades | Sumar colegios y naturistas desde marzo y la recompra por WhatsApp |
| Costo de la maquila | Pesa S/0.45 por brownie, 15 % del costo variable | Pedir el precio de S/0.40 al pasar los 5,000 brownies al mes |
| Caja baja en los primeros meses | Si las ventas por punto bajan | Línea de crédito de S/3,000 como respaldo (Resumen, nota 5) |

---

## Fuentes

Todas las cifras salen de documentos del proyecto, sin cambios.

- `04-reformulacion/Costeo-presentaciones-AndiBite.xlsx`, versión del 27-oct-2026 (hojas Resumen, Costeo e Inversion, y la sección 8 de costos fijos).
- `04-reformulacion/T2/HECHOS_v7.md`, decisiones del 19-oct y del 27-oct de 2026.
- `04-reformulacion/05-plan-comercial-y-financiero.md`, sección 5, benchmark por 20 g (línea 256).
- `Presupuesto-marketing-AndiBite.xlsx`.
- `04-reformulacion/T2/Plantilla_Costeo_Estrategia_Precios_AndiBite.xlsx`, el archivo que se llenó.
