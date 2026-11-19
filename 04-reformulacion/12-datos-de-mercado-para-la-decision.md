# Datos de mercado para la decisión: ¿C y B con precio bajo, o A y B con precio ajustado?

Fecha de la búsqueda: 17 de noviembre de 2026. Este documento reúne datos con fuente; **no decide**. Lo que no se encontró está en la sección «No encontrado». Lo que calculé yo (no viene de la fuente) lo marco «cálculo propio».

**Cómo leer la confianza.** Alta = leí la fuente primaria y la cifra está tal cual. Media = fuente primaria leída solo en parte, prensa que cita a la fuente, o cifra de una población cercana. Baja = dato antiguo, estimación de blog o foro, lectura visual de un gráfico, o dato que se contradice con otro.

**Cómo se obtuvieron los precios de supermercado (tema 2).** El 17-nov-2026 consulté el catálogo público en línea (API VTEX) de Plaza Vea, Wong y Metro. Son precios de góndola web de ese día; pueden cambiar por promoción o distrito. El peso total sale del campo «Contenido neto» o del nombre del producto; donde el catálogo traía un peso dudoso (multiplicado por el número de unidades), usé el peso del nombre y lo digo. Tottus, Mifarma, Inkafarma y Mercado Libre bloquean la consulta automática: no hay datos de ellos.

**Referencia propia de AndiBite para comparar (HECHOS_v7):** pack de 6 (120 g) a S/27.90 = **S/23.25 por 100 g** = S/4.65 por brownie de 20 g. Las mamás de Lima Norte dijeron S/10 por el pack de 6 = **S/8.33 por 100 g** = S/1.67 por brownie (cálculo propio). Costo de producir S/1.64 por brownie (S/9.84 el pack).

---

## 1. Tamaño de cada mercado

### 1.1 Hogares de Lima Metropolitana por nivel (APEIM 2025)

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Hogares de Lima Metropolitana | 3,362,157 (+2.0 % frente a 2024) | Lima Metropolitana | APEIM, Niveles Socioeconómicos 2025, lámina 7 | 2025 (base ENAHO 2024) | https://apeim.com.pe/wp-content/uploads/2025/12/Sintesis-Niveles-socioeconomicos-2025.pdf | Alta |
| Distribución por nivel | A 2.6 % (A1 0.3, A2 2.3); B 18.4 % (B1 4.9, B2 13.5); C 45.5 % (C1 26.7, C2 18.8); D 26.9 %; E 6.6 % | Hogares de Lima Metropolitana | APEIM 2025, lámina 14 | 2025 | mismo | Alta |
| Hogares por nivel (cantidad) | A ≈ 87,400; B ≈ 618,600; A+B ≈ 706,000; C1 ≈ 897,700; C2 ≈ 632,100; C ≈ 1,529,800 | Lima Metropolitana | Cálculo propio: porcentaje APEIM × 3,362,157 | 2025 | mismo | Media (APEIM no publica la cantidad por nivel; es multiplicación mía) |
| Gasto de los hogares que se queda libre | A 47 %; B 35 %; C 24 %; D 21 %; E 17 % (el resto se gasta) | Lima Metropolitana | APEIM 2025, lámina 10 | 2025 | mismo | Alta |
| Peso de los alimentos en el gasto | Gráfico: C ≈ 45 %, B ≈ 36 %, A ≈ 28 % del gasto (lectura visual) | Lima Metropolitana | APEIM 2025, lámina 12 | 2025 | mismo | Baja (lectura de gráfico sin cifras) |
| Comparación Lima frente a Perú | Lima: A+B = 21.0 %; Perú: A+B = 10.4 % | Hogares | APEIM 2025, láminas 14 y 17 | 2025 | mismo | Alta |

Nota: el HECHOS_v7 cita ingresos APEIM 2025 (A S/14,584; B S/7,787; C S/4,180). **No pude verificarlos** en la síntesis pública 2025 (el ingreso va en gráficos sin cifras); ya lo había señalado PERFIL-AB-fuentes.md. Abajo uso la tabla 2023, que sí trae las cifras.

### 1.2 Ingreso y gasto por nivel, incluidos C1 y C2 (APEIM 2023, última tabla con cifras públicas)

| Dato (S/ por hogar al mes) | A | B | C | C1 | C2 | Fuente, año, URL | Confianza |
|---|---|---|---|---|---|---|---|
| Ingreso familiar | 13,008 | 6,754 | 3,737 | 4,004 | 3,269 | APEIM Informe 2023-2024, lámina 18 (ENAHO 2022). https://apeim.com.pe/wp-content/uploads/2024/01/APEIM-Informe-de-Niveles-Socioeconomicos-2023-2024-Version-WEB.pdf | Alta (leída de la imagen) pero de 2023 |
| Gasto familiar | 7,683 | 4,675 | 2,884 | 3,066 | 2,567 | ídem | Alta |
| Alimentos dentro del hogar | 1,840 | 1,601 | 1,238 | 1,273 | 1,178 | ídem | Alta |
| Alimentos fuera del hogar (restaurantes y hoteles) | 226 | 117 | 68 | 76 | 53 | ídem | Alta |
| Educación | 855 | 442 | 174 | 209 | 114 | ídem (promedio de todo el hogar, incluye hogares sin hijos en colegio privado) | Alta (no es pensión) |

Lectura rápida (cálculo propio): el hogar B gasta en alimentos dentro de casa 1.3 veces lo que gasta el C (1,601 frente a 1,238); en alimentos fuera de casa, 1.7 veces. El C1 es más parecido al B de abajo que al C2.

### 1.3 Lima Norte: tamaño y nivel

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Hogares de Lima Norte (Ancón, Carabayllo, Comas, Independencia, Los Olivos, Puente Piedra, San Martín de Porres, Santa Rosa) | 809 mil; la zona más poblada; 26 % de los 11.7 millones de limeños; 36 % son parejas con hijos | Hogares de la zona Lima Norte (todos los niveles) | Ipsos, «Las 6 caras de Lima Metropolitana 2025» (ENAHO 2023) | 2025 | https://www.ipsos.com/sites/default/files/ct/publication/documents/2025-09/Perfiles%20Zonales%202025_V3.pdf | Media (zona Ipsos; no es la misma suma que la de APEIM) |
| Ingreso y gasto del hogar de Lima Norte | Ingreso S/4,069 y gasto S/2,936 al mes (promedio de todos los niveles). En Lima Oeste: ingreso S/8,258 | Hogares de la zona | Ipsos, ídem | 2025 | mismo | Media |
| Hogares con pareja e hijos en Lima Norte | ≈ 291,000 (cálculo propio: 36 % × 809 mil) | Incluye hijos de cualquier edad | Cálculo propio sobre Ipsos | 2025 | mismo | Baja |
| Nivel de los hogares por zona APEIM | Zona 1 (Puente Piedra, Comas, Carabayllo): A 0.0 %, B 11.4 %, C 49.8 %, D 29.3 %, E 9.4 % (n=362, error 5.2 %). Zona 2 (Independencia, Los Olivos, San Martín de Porres): A 1.0 %, B 20.9 %, C 58.7 %, D 18.4 %, E 1.1 % (n=428, error 4.7 %) | Hogares | APEIM Informe 2023-2024, lámina 17 | 2023 | PDF APEIM 2023-2024 | Alta (muestra chica por zona) |
| Hogares de los 8 distritos de Lima Norte | ≈ 724,000 (27.6 % de los 2.62 millones de hogares de Lima Metropolitana de esa fuente); población ≈ 2.9 millones. Distritos: San Martín de Porres 197 mil hogares, Comas 148 mil, Los Olivos 100 mil, Puente Piedra 95.5 mil, Carabayllo 94 mil, Independencia 60 mil, Ancón 19 mil, Santa Rosa 9.5 mil | Hogares | CPI Research, Población y hogares según distritos, cuadro 9 (suma mía) | 2025 (estimación sobre Censo 2017) | https://cpi.pe/wp-content/uploads/2025/11/CPI-Market-Report-Proyecciones-Poblacionales-2025.pdf | Media (estimación privada; su total de hogares de Lima, 2.62 millones, no coincide con los 3.36 millones de APEIM) |
| Hogares B y C en Lima Norte | B ≈ 113,000; C ≈ 378,000; A ≈ 3,600 | Zonas 1 y 2 de APEIM | Cálculo propio: % APEIM 2023 por zona × hogares CPI 2025 | 2023 y 2025 | los dos PDF | Baja (mezcla dos fuentes con bases distintas; sirve solo como orden de magnitud) |

Dato de comparación: los hogares A+B de Lima Metropolitana son ≈ 706,000 (APEIM 2025). Los hogares B de Lima Norte son ≈ 113,000 (cálculo propio, baja confianza). Es decir, Lima Norte aporta B, pero lo grande de Lima Norte es C.

### 1.4 Niños de 4 a 11 años y matrícula

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Niños de 6 a 12 años | 1,044.0 mil (9.2 % de la población); niños de 0 a 5: 947.3 mil | Lima Metropolitana y Callao | CPI Research, cuadro 10 | 2025 (estimación sobre Censo 2017) | CPI Market Report 2025 | Media |
| Niños de 6 a 12 años por nivel | A/B 152.6 mil; C 438.5 mil; D 253.6 mil; E 56.0 mil (suman 900.7 mil, no los 1,044 mil del cuadro anterior) | Lima Metropolitana y Callao, 2024 | CPI Research, cuadro 12 | 2024 | mismo | Baja (las dos tablas del mismo informe no cuadran; usar solo la proporción: A/B ≈ 17 %, C ≈ 49 %) |
| Matrícula de educación básica regular | 46.5 % en colegios privados y 53.5 % en públicos (2022); en 2019 era 48.7 % privada. Inicial 399,637 (cifra interna también aparece como 339,637) y primaria 941,244 alumnos en 2022 | Lima Metropolitana | DREL, citada por Educación al Futuro | 2022 | https://educacionalfuturo.com/articulos/cae-cobertura-en-educacion-inicial-como-parte-del-retroceso-de-colegios-privados/ | Media (fuente secundaria; el artículo se contradice en una cifra) |
| Participación privada de la matrícula | 936,132 de 1,913,047 alumnos = 49 % privada (frente a 25 % nacional) | Lima Metropolitana | Identicole (Minedu) | año no claro | https://identicole.minedu.gob.pe/escuela-privada-informal.pdf | Baja (el año no está claro) |
| Colegios privados en Lima Norte | Los Olivos 783 colegios activos, 591 privados (75 %); portal comercial: San Martín de Porres 78 %, Comas 69 % privados (de colegios, no de alumnos) | Distritos | comoes.pe (padrón ESCALE) y miguiadecolegios.org | 2026 | https://comoes.pe/lima/los-olivos/colegios/ | Baja (portales comerciales, cuentan colegios y no alumnos) |

No hay un conteo oficial de niños de 4 a 11 años en Lima ni en Lima Norte. El proxy usable es 6 a 12 años (CPI) y la matrícula de primaria (941,244 en 2022).

---

## 2. Precios reales de lo que compite en la lonchera (consulta del 17-nov-2026)

Precio por unidad = precio del paquete dividido entre el número de unidades; por 100 g = precio ÷ peso total × 100. «Peso del nombre» = el peso total sale del nombre del producto porque el campo del catálogo venía dudoso.

### 2.1 Galletas, queques y brownies de consumo masivo

| Producto | Precio (S/) | Unidades y peso | S/ por unidad | S/ por 100 g | Tienda | URL | Confianza |
|---|---|---|---|---|---|---|---|
| Galleta Casino (sabores) | 4.80 | 6 × 43 g = 258 g | 0.80 | 1.86 | Plaza Vea | https://www.plazavea.com.pe/galleta-casino-sabor-chocolate-empaque-43g-paquete-6un/p | Alta |
| Galleta Casino sixpack | 4.60 a 5.00 | 6 × 43 g | 0.77 a 0.83 | 1.78 a 1.94 (cálculo propio) | Metro y Wong | https://www.metro.pe/ (búsqueda «sixpack galleta casino») | Alta |
| Galletas Field Vainilla | 5.50 | 6 (222 g) | 0.92 | 2.48 | Plaza Vea | https://www.plazavea.com.pe/galleta-vainilla-field-paquete-6un/p | Alta |
| Galletas Field Vainilla bolsa | 3.00 | 136 g | n. a. | 2.21 | Plaza Vea | https://www.plazavea.com.pe/galletas-field-vainilla-bolsa-136g-20632411/p | Alta |
| Galletas Costa Gran Cereal (cacao o clásica) | 5.00 | 6 × 36 g (peso del nombre del sixpack de Wong y Metro) | 0.83 | 2.31 | Plaza Vea | https://www.plazavea.com.pe/galletas-de-cacao-costa-gran-cereal-paquete-6un/p | Media (el peso por paquete sale de otro listado) |
| Galletas Oreo (sabores) | 5.20 | 6 × 36 g | 0.87 | 2.41 | Plaza Vea | https://www.plazavea.com.pe/galletas-oreo-original-paquete-6un/p | Media (ídem) |
| Costa Chips Fiesta (con chips de chocolate) | 4.00 | 6 × 34 g = 204 g | 0.67 | 1.96 | Plaza Vea | https://www.plazavea.com.pe/galletas-costa-con-chips-de-chocolate-bolsa-34g-paquete-6un/p | Alta |
| Galletas Integrales Costa con salvado | 2.90 | 250 g | n. a. | 1.16 | Plaza Vea | https://www.plazavea.com.pe/galletas-integrales-costa-con-salvado-de-trigo-paquete-250g/p | Alta |
| Galletas +Nutri Co (quinua) | 14.90 | 6 u, 180 g | 2.48 | 8.28 | Plaza Vea | https://www.plazavea.com.pe/galletas-de-quinua-nutrishake-arandanos-paquete-6un/p | Alta |
| Brownie Bimbo Little Bites | 10.90 | caja de 130 g | n. d. | 8.38 | Plaza Vea y Metro | https://www.plazavea.com.pe/brownie-bimbo-little-bites-caja-130g/p | Alta |
| Mini brownie Bimbo Nutra Bien | 15.00 (Plaza Vea, 3-oct-2026, doc 02) | 6 u, 180 g | 2.50 | 8.33 | Plaza Vea | doc 02 (ya cotizado) | Media (precio de hace 6 semanas; en Wong el Brownie Chip Nutra Bien de 4 u cuesta S/16.90) |
| Keke Nito Bimbo | 2.00 | 60 g | 2.00 | 3.33 | Plaza Vea | https://www.plazavea.com.pe/keke-nito-bimbo-max-bolsa-60g/p | Alta |
| Kekito Bell's / PYC | 2.90 / 3.50 | 80 g / 95 g | 2.90 / 3.50 | 3.63 / 3.68 | Plaza Vea | https://www.plazavea.com.pe/kekito-pyc-vainilla-bolsa-90g/p | Alta |
| Pastelito Pingüino Marinela | 3.50 | 80 g | 3.50 | 4.38 | Plaza Vea | https://www.plazavea.com.pe/pastelito-pinguino-marinela-bolsa-80g/p | Alta |
| Keke casero Bimbo | 10.90 | 340 g | n. a. | 3.21 | Plaza Vea | https://www.plazavea.com.pe/keke-casero-marmoleado-bimbo-bolsa-340g/p | Alta |

### 2.2 Barras de cereal y snacks «saludables» para niños

| Producto | Precio (S/) | Unidades y peso | S/ por unidad | S/ por 100 g | Tienda | URL | Confianza |
|---|---|---|---|---|---|---|---|
| Nature Valley Crunchy (miel y avena) | 19.90 | caja de 253 g (≈ 6 barras) | ≈ 3.3 (cálculo propio) | 7.87 | Plaza Vea | https://www.plazavea.com.pe/cereal-en-barra-natura-valley-crunchy-miel-y-avena-caja-253g/p | Media (no verifiqué el número de barras) |
| Nature Valley Protein | 22.90 | caja de 5 barras | 4.58 | n. d. (peso no verificado) | Plaza Vea y Wong | https://www.plazavea.com.pe/barra-de-cereal-natura-valley-protein-sabor-a-mani-almendra-y-chocolate-caja-5un-20391958/p | Alta (precio) |
| Barra de cereal Costa Cereal Bar | 11.00 | 12 barras | 0.92 | n. d. | Plaza Vea | https://www.plazavea.com.pe/barra-de-cereal-costa-cereal-bar-almendra-y-mani-paquete-12un/p | Alta (precio) |
| Barra energética Mamalama (5 barras de 20 g, 100 g) | 19.90 (chocolate con maní: 16.90, 112 g) | 5 u | 3.98 (3.38) | 19.90 (15.09) | Plaza Vea | https://www.plazavea.com.pe/barra-energetica-mamalama-chocolate-bitter-caja-5-un/p | Alta |
| Mamalama «Lonchera Display» | 11.90 | display de 100 g | n. d. | 11.90 | Plaza Vea | https://www.plazavea.com.pe/multipack-mamalama-lonchera-display-100g-20571399/p | Media |
| Barra Siete Dragones (nibs de cacao y cañihua) | 18.80 | 5 × 25 g = 125 g | 3.76 | 15.04 | Plaza Vea | https://www.plazavea.com.pe/barra-nibs-de-cacao-y-canihua-siete-dragones-caja-5un/p | Alta |
| Galletas Nutrisnack Gerber (para bebés y niños pequeños) | 18.30 | sobre de 42 g | 18.30 | 43.57 | Plaza Vea | https://www.plazavea.com.pe/galletas-nutrisnack-gerber-platano-y-fresa-sobre-42g/p | Alta |
| Fika, brownie bajo en azúcar (doc 02) | 14.00 | 70 g | 14.00 | 20.00 | fika.pe | https://www.fika.pe/products/brownie-55g | Media (3-oct-2026; en Wong, las granolas Fika de 200 g cuestan S/31.90, S/15.95 por 100 g) |
| Nutri H galleta con hemoglobina (doc 02) | 48.00 | caja de 30 u, unos 300 g | 1.60 | 16.00 | nutrih.pe | https://nutrih.pe/producto/nutri-h-clasica-x-30/ | Media (3-oct-2026; el sitio hoy está tras una verificación de Cloudflare y no lo pude releer) |

**Comparación con AndiBite (cálculo propio, por 100 g):** AndiBite en el stand S/23.25; mamás de Lima Norte S/8.33. Galleta masiva (Casino, Field, Costa, Oreo) S/1.9 a 2.5, o sea 9 a 12 veces menos que AndiBite al precio de stand. Keke y pastelito industrial S/3.2 a 4.4. Bimbo Little Bites S/8.38 y Nutra Bien S/8.33: **el S/10 por 6 que dijeron las mamás equivale al precio por 100 g de Bimbo Little Bites y de Nutra Bien (S/8.33)**. Nutri H S/16.0, Siete Dragones S/15.0, Mamalama S/19.9, Fika S/20.0: AndiBite a S/23.25 queda por encima de todos.

**Precio de la unidad de lonchera:** la galleta masiva cuesta S/0.67 a 0.92 por paquete individual de 34 a 43 g. El snack «saludable» cuesta S/3.4 a 4.6 por barra. AndiBite: S/4.65 por brownie de 20 g.

### 2.3 Lo que una familia C paga por el snack de la lonchera

**No encontrado** ningún estudio de Kantar, Ipsos, CCR ni prensa con el gasto por snack de lonchera o por propina escolar (ver sección «No encontrado»). Referencias laterales:

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Ticket promedio de consumo masivo por visita | S/23 (hogares de todo el Perú) | Hogares peruanos | Worldpanel by Numerator vía Perú Retail | 2.º trimestre 2025 | https://www.peru-retail.com/worldpanel-by-numerator-consumo-masivo-en-hogares-peruanos-crece-5-1-en-valor-en-el-q2-2025/ | Media |
| Ticket por visita en Mass, Tambo y OXXO | Mass S/17.1; Tambo S/12.4 (50 % del gasto en indulgencia); OXXO S/15.0 (55 % en indulgencia) | Hogares peruanos | Worldpanel by Numerator vía Gestión | 2.º trimestre 2026 | https://gestion.pe/economia/empresas/mass-dollarcity-tambo-oxxo-3d-vega-el-nuevo-mapa-de-compras-de-los-peruanos-noticia/ | Media |
| Gasto de alimentos fuera del hogar del hogar C | S/68 al mes en total (restaurantes y hoteles); C1 S/76, C2 S/53 | Hogares C de Lima | APEIM 2023 | 2023 | PDF APEIM 2023-2024, lámina 18 | Alta (es un techo: incluye todo lo que se come fuera) |
| Alimentos que lleva la lonchera en Lima | Fruta y verdura 65 %; agua 53 %; jugos o refrescos naturales 36 %. Los artículos de Kantar no traen cifras de snacks, galletas ni precio | Hogares con hijos en edad escolar, Lima | Kantar | 13-mar-2025 | https://www.kantar.com/latin-america/inspiracion/consumo-masivo/2025/tendencias-en-lonchera-escolar-en-peru | Alta |
| Barras de cereal en la lonchera | 27 % de los hogares (nacional; sándwich de pollo 42 %) | Hogares peruanos | Kantar (ya en PERFIL-AB-fuentes) | 2022 | https://www.kantar.com/latin-america/inspiracion/consumidor/2022-pe-loncheras-escolares | Media |

---

## 3. Productos con hierro o sangrecita para niños y precio del hierro

| Dato | Valor | Producto o población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Nutri H, galleta con hemoglobina bovina: precio hoy | S/48 la caja de 30 (S/1.60 la galleta, S/16 por 100 g) | Nutri H clásica | nutrih.pe (consulta del 3-oct-2026, en doc 02) | 2026 | https://nutrih.pe/producto/nutri-h-clasica-x-30/ | Media |
| Nutri H: precio en 2020 | Caja de 30 a S/38 (el paquete a S/3). Evolución: +26 % en 6 años | Nutri H | La República (cita de una usuaria de Twitter) | mar-2020 | https://larepublica.pe/sociedad/2020/03/04/galletas-contra-la-anemia-donde-comprar-precio-y-donde-venden-las-nutri-hierro-en-lima-julio-garay-atmp | Baja (el precio viene de un tuit) |
| Nutri H: hierro declarado | 16.5 mg de hierro por 30 g de producto (la nota no aclara si 30 g es una galleta o la porción) | Nutri H | La República | mar-2020 | mismo | Baja |
| Nutri H: dónde se vende | En todos los Inkafarma y Mifarma del país; también en su web y por WhatsApp. En 2022 Garay mencionó Boticas Perú, OXO, Thika Thani, Organa y las tiendas virtuales de Ripley y Plaza Vea. En 2019, el plan era llegar a bodegas y quioscos escolares | Nutri H | El Comercio (26-ago-2022); Expreso (2019) citado por buscador | 2019-2022 | https://elcomercio.pe/vamos/peru/quien-es-julio-garay-y-como-lucha-contra-la-anemia-con-su-negocio-de-galletas-chocolate-y-paneton-nutri-h-galleta-con-sangresita-rmmn-emcc-noticia/ | Media |
| Otras galletas fortificadas con sangrecita en supermercado | **No encontrado** (Plaza Vea, Wong y Metro no devuelven Nutri H, Mamalama ni Fika con hierro; ninguna barra ni galleta con sangrecita en góndola) | n. a. | Consulta de catálogos 17-nov-2026 | 2026 | n. a. | Media (solo cubre estas tres cadenas) |
| Galleta Nutrisnack Gerber | S/18.30 el sobre de 42 g (no se verificó que lleve hierro) | Niños pequeños | Plaza Vea | 17-nov-2026 | enlace en 2.2 | Alta (precio) |
| Gomitas de hierro para niños (Sottcor Labs) | S/44.90 por 150 gomitas; pack de 2 S/79.90 | Niños | Plaza Vea | 17-nov-2026 | https://www.plazavea.com.pe/gomitas-hierro-para-ninos-sottcor-labs-150-unidades-101993498/p | Alta (precio; los mg de hierro por gomita no se verificaron) |
| Gomitas Hierro Kids TMX Wellness | S/45.00 por 70 gomitas | Niños | Plaza Vea | 17-nov-2026 | https://www.plazavea.com.pe/hierro-kids-tmx-wellness---gomitas-hierro-niños-70-gomitas-maracuya-102378206/p | Alta (precio) |
| Jarabe Labkids con hierro, miel de abeja y zinc | S/34.90 por 340 mL | Niños | Plaza Vea | 17-nov-2026 | https://www.plazavea.com.pe/jarabe-labkids-hierro-miel-de-abeja-zinc-y-multivitaminico-niños-sabor-a-fresax-340ml--nuevo-102167287/p | Alta (precio) |
| Hierro polimaltosado en gotas (Maltofer, 50 mg de hierro por mL, 30 mL) | S/63.00 | Niños | Rappi, tienda Mifarma Market (no la web de Mifarma) | sin fecha | https://www.rappi.com.pe/tiendas/45316-mifarma-market/salud-nutricional | Baja (agregador de delivery, sin fecha) |
| Feranin Forte, hierro en gotas (50 mg/mL, 20 mL) | S/34.90 (S/1.75 por mL) | Niños | Rappi, Mifarma | sin fecha | https://www.rappi.com.pe/tiendas/36517-mifarma-home/salud-nutricional | Baja |
| Sulfato ferroso | Tabletas de 300 mg: S/11.00 por 100 (Mifarma vía Rappi). Jarabe de 75 mg (15 mg de hierro) por 5 mL, 180 mL: 3.67 en una lista de precios de DIGEMID de marzo 2026 (la moneda no aparece escrita) | Niños y adultos | Rappi; DIGEMID | 2026 | https://www.digemid.minsa.gob.pe/Archivos/MedicamentosFarmacia/JesusMaria-03.pdf (no pude abrir el PDF; dato leído en un extracto) | Baja |
| Un mes de suplemento de hierro (referencia) | Con Maltofer: ≈ S/50 al mes para un niño de 20 kg, a 2 mg de hierro por kg al día (0.8 mL al día, 24 mL al mes; cálculo propio). La dosis de 2 mg/kg es la preventiva del MINSA según mi memoria; **no la verifiqué en esta sesión** | Niño de 20 kg | Cálculo propio sobre el precio de Rappi | n. a. | n. a. | Baja |
| Costo del hierro por miligramo, comparación | Maltofer: S/0.042 por mg de hierro (S/63 ÷ 1,500 mg). Nutri H: S/0.29 por mg (S/48 ÷ 165 mg, si es 16.5 mg por 30 g). AndiBite: S/2.45 por mg al precio de stand (S/27.90 ÷ 11.4 mg) y S/0.88 por mg a S/10 | Referencia | Cálculo propio | n. a. | n. a. | Baja (mezcla de fuentes y tipos de hierro; el hierro de sangrecita es hemo y el del jarabe no) |
| Suplemento de hierro que recibe el niño del quintil superior | 35.0 % (últimos 7 días); nacional 33.8 % | Niños de 6 a 35 meses | INEI ENDES 2024, cuadro 19 (ya en PERFIL-AB-fuentes) | 2024 | https://proyectos.inei.gob.pe/endes/2024/ppr2/indicadores_de_resultados_de_los_programas_presupuestales_endes_2024.pdf | Alta |

---

## 4. Canales del nivel C frente a A y B

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Parte del gasto de consumo masivo por canal | Bodegas 37 %; mercados de abasto 29 %; canal moderno (supermercados, discounters, conveniencia y similares) 24 % | Hogares peruanos, todos los niveles (n = 5,000 hogares) | Worldpanel by Numerator, «Consumer Insights Q2 2026 Canales», vía Gestión (24-sep-2026) | 1.er semestre 2026 | https://gestion.pe/economia/empresas/mass-dollarcity-tambo-oxxo-3d-vega-el-nuevo-mapa-de-compras-de-los-peruanos-noticia/ | Media (prensa que cita al estudio; sin corte por nivel) |
| Lo mismo, un año antes | Bodegas 36 %; mercados 29 %; supermercados 13 % (1.er trimestre 2025) | Hogares peruanos | Kantar vía una publicación de LinkedIn | 2025 | https://pe.linkedin.com/in/jose-antonio-merino | Baja |
| Penetración de supermercados y discounters | Supermercados de 62 % de los hogares (2.º trim. 2024) a 77 % (2.º trim. 2026); discounters de 42 % a 70 %. Mass: 79 % de los hogares, 15 visitas al año | Hogares peruanos | Worldpanel by Numerator vía Gestión | 2026 | mismo | Media |
| Cuánto gasta cada nivel en consumo masivo | NSE A/B 15.8 %; C 38.8 %; D 30 %; E 15.4 % del gasto total; Lima y Callao 46.4 % | Hogares peruanos | Worldpanel by Numerator vía Perú Retail | 2.º trim. 2025 | https://www.peru-retail.com/worldpanel-by-numerator-consumo-masivo-en-hogares-peruanos-crece-5-1-en-valor-en-el-q2-2025/ | Media |
| Compra online por nivel | E-commerce en consumo masivo: 36 % de los hogares; NSE A/B 59 % (al menos una compra); ticket A/B S/51.6 con 5 compras al año | Hogares peruanos | Worldpanel by Numerator | año móvil a junio 2025 | mismo | Media |
| Peso del canal tradicional | «Más de 80 %» del gasto de consumo masivo (bodegas, mercados y minimercados; otra medición que la de arriba); cada hogar visita 7 tiendas; en bodega y mercado compra de 4 a 9 categorías por visita | Hogares peruanos | Kantar, 1-oct-2025 | 2025 | https://www.kantar.com/latin-america/inspiracion/consumidor/2024-wp-conoce-el-comportamiento-de-compra-real-de-los-hogares-peruanos-en-el-canal-tradicional | Media (las dos cifras, 80 % y 66 %, usan definiciones distintas) |
| Motivos para preferir el canal tradicional | Cercanía 56 %; precios accesibles 49 %; productos frescos 41 % | Hogares peruanos | Kantar vía Andina (19-jun-2025) | 2025 | https://andina.pe/agencia/noticia-el-canal-tradicional-sigue-dominando-consumo-masivo-el-peru-1034208.aspx | Media |
| Canal por nivel en Lima | A y B compran más en supermercado; los niveles bajos, más en bodega. Gasto de Lima en alimentos: ≈ 57 % mercados, 18 % bodegas, 20 % supermercados | Amas de casa de Lima | Ipsos MKT Data 2012 (ya en PERFIL-AB-fuentes) | 2010-2012 | https://www.ipsos.com/sites/default/files/2017-02/MKT_Data_Amas_de_Casa_2012.pdf | Baja (muy antiguo) |
| Margen de la bodega | Snacks 25 a 35 % sobre el precio de compra al mayorista; abarrotes 15 a 20 %; bebidas 20 a 25 %. Un foro dice que en galletas la bodega gana de 8 a 10 céntimos por paquete | Bodegas del Perú | finanzasperu.pe y forosperu.net (blogs y foros) | 2026 | https://finanzasperu.pe/plan-negocio-bodega-peru ; https://www.forosperu.net/temas/como-son-las-ganancias-en-una-bodega.1204407/ | Baja (no es un estudio; nadie cita cómo lo midió) |
| Margen del distribuidor y del supermercado | **No encontrado** | n. a. | n. a. | n. a. | n. a. | n. a. |
| Entrada a supermercado: documentos | RUC activo con giro; ficha SUNAT y constancia de no adeudo; registro sanitario DIGESA para alimentos; certificados de calidad (BPM, HACCP) según categoría; código de barras EAN/UPC por cada producto. Cada cadena tiene sus reglas | Proveedores de supermercado | EvangCorp, guía para vender en Tottus y Plaza Vea | 2026 | https://evangcorp.com/insights/como-vender-en-supermercados-peru-tottus-plaza-vea-guia | Baja (guía de una consultora; no es la norma de cada cadena) |
| Entrada a supermercado: pago | Los supermercados pagan a 60 y 120 días (testimonio de un proveedor) | Proveedores | nuevaspymes.blogspot.com | 2010 | https://nuevaspymes.blogspot.com/2010/04/como-venderle-los-supermercados-wong.html | Baja (dato de hace 16 años) |
| Entrada a supermercado: formato | Una marca de snacks andinos desarrolla un six pack porque «el supermercado no se interesa por productos pequeños» en unidad; ya envió muestras a una cadena y espera ingresar en 2026 | Inka Prime | Gestión (8-ago-2026) | 2026 | https://gestion.pe/economia/empresas/inka-prime-alista-su-salto-a-supermercados-y-ya-mira-a-chile-para-exportar-sus-snacks-noticia/ | Media |

### 4.1 Quioscos escolares y Ley 30021

| Dato | Valor | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|
| A quién aplica | Art. 6.1: las instituciones de educación básica regular **pública y privada**, en todos sus niveles y en todo el territorio, promueven kioscos y comedores escolares saludables. Art. 6.2: los kioscos y comedores brindan **exclusivamente** alimentos y bebidas saludables según el listado del MINSA | Ley 30021, texto publicado en El Peruano el 17-may-2013 | 2013 | https://faolex.fao.org/docs/pdf/per123883.pdf | Alta |
| Reglamento | D. S. 017-2017-SA (publicado el 17-jun-2017; vigencia prevista para abril de 2018) | Gestión y LP Derecho, vía buscador | 2017 | https://lpderecho.pe/reglamento-ley-30021-ley-promocion-alimentacion-saludable/ (la página dio error 403; dato leído en un extracto) | Media |
| Qué se puede vender | Lineamientos del MINSA (marzo 2019; se cita la RM 195-2019-MINSA): no se permiten alimentos procesados con altos niveles de azúcar, grasa o sodio ni con grasas trans; los alimentos se preparan en el colegio; sin conservantes, saborizantes, colorantes o edulcorantes. Una ordenanza municipal de 2024 repite «sin octógonos» | Andina (5-mar-2019); anexo de la Ordenanza Municipal 039-2024 | 2019 y 2024 | https://andina.pe/ingles/noticia-minsa-estos-alimentos-podran-venderse-quioscos-escolares-vea-lista-744322.aspx | Media |
| Verificación actual | El Ministerio de Educación pidió en 2025 incluir en las licitaciones de quioscos los criterios de la RM 033-2020-MINSA (ficha de monitoreo). La RM 161-2015 quedó sin efecto | Oficio múltiple MINEDU 00012-2025; El Peruano | 2025 | https://cdn.www.gob.pe/uploads/document/file/7520608/6394730-oficio_multiple-00012-2025-minedu-vmgi-drelm-ugel05-dir-asgese-orientaciones-para-kioscos-0050441.pdf | Media |
| Mensaje del MINSA sobre la lonchera | «La lonchera no debe incluir productos con octógonos o ultraprocesados»; recomienda comida casera y agua | MINSA vía Andina (4-mar-2026) | 2026 | https://andina.pe/agencia/noticia-minsa-lonchera-no-debe-incluir-productos-octogonos-o-ultraprocesados-1065472.aspx | Alta |
| Una galleta sin octógono puede tener nutrientes críticos altos | Estudio de la Revista Peruana de Medicina Experimental: muchas galletas de Lima no llevan octógono pese a tener nutrientes críticos altos, por el tamaño del empaque individual | RPMESP (leído en un extracto) | 2023 | https://scielosp.org/pdf/rpmesp/2023.v40n3/369-371/es | Media |
| Publicidad dirigida a menores de 16 años | Art. 8: no puede usar personajes reales o ficticios conocidos o admirados por los niños para inducir al consumo, ni regalos o premios para fomentar la compra, ni sugerir que el producto reemplaza comidas principales (en alimentos con exceso de azúcar, sodio, grasas saturadas o trans, art. 8.a) | Ley 30021 | 2013 | https://faolex.fao.org/docs/pdf/per123883.pdf | Alta (texto de la ley; no revisé el reglamento para saber a qué productos exactamente se aplican) |

La lista exacta de alimentos permitidos del MINSA y si un brownie con sangrecita calificaría: **no encontrado** (ver abajo).

---

## 5. Costos: dónde se puede bajar

Base: `02-insumos-proveedores-y-costeo.md` y `HECHOS_v7.md` (sangrecita a S/300 por kg a granel; maquila S/0.45 por brownie; costo de producción S/1.64 por brownie). Solo anoto lo que es distinto o cambia algo.

| Dato | Valor | Insumo | Fuente | Fecha | URL | Confianza |
|---|---|---|---|---|---|---|
| Hemoglobina bovina en polvo o sangre de res deshidratada, a granel, de proveedor peruano o importada | **No encontrado.** Lo ya cotizado en doc 02 sigue siendo lo único: S/417 por kg (Malli, cordero), S/500 a 667 por kg (Allpa Manta, res); el plan usa S/300 por kg a granel (HECHOS) | Sangrecita en polvo | doc 02 | 3-oct-2026 | https://allpamantaperu.pe/products/sangrecita-de-res-en-polvo-1 | Media |
| Hemoglobina bovina importada | Solo hallé precios de reactivo de laboratorio: US$405 a 445 por kg (Genesee Scientific, Alpha Biosciences) y US$1,720 por kg (Sigma-Aldrich H2625). **No sirven**: no son de grado alimentario | Reactivo | geneseesci.com; sigmaaldrich.com | 17-nov-2026 | https://www.geneseesci.com/product/hemoglobin-powder | Baja (no comparable) |
| Cuánto pesa la sangrecita en el costo | 0.92 g por brownie × S/300 por kg = S/0.28 por brownie (17 % de S/1.64). A S/417 por kg serían S/0.38; a S/667 por kg, S/0.61 (cálculo propio con las cifras del plan) | Sangrecita | Cálculo propio | n. a. | n. a. | Media (depende de los S/300 por kg, que no tiene cotización en este repositorio) |
| Maquila | **No encontrado** ninguna tarifa publicada de INDDA-UNALM ni de otra planta de panificación de Lima. La UNALM tiene resoluciones sobre buenas prácticas del INDDA y del laboratorio de panificación pero sin tarifas. El plan usa S/0.45 por brownie (27 % de S/1.64) y S/0.40 desde 5,000 al mes | Maquila | Búsqueda; HECHOS | 2026 | https://www.lamolina.edu.pe/Rectorado/secgeneral/Resoluciones_2022/RR_2022_0636%20Directiva.pdf | Baja |
| Empaque: flow pack frente a doypack, por millar | **No encontrado** precio de flow pack en Lima. Referencias de Imprenta Peruana (Lince): doypack «stand-up» a S/0.45 por unidad desde 3,000 unidades (S/450 el millar), caja plegable a S/0.85 desde 1,000 (2026). Un fabricante venezolano pone mínimo de 3,000 unidades sin imprimir y US$3,000 impreso. Doc 02 usa S/0.06 por bolsita de flow pack (HIPÓTESIS) y S/0.55 a 0.68 por doypack | Empaque | imprentaperuana.com; minibagca.com | 2026 | https://imprentaperuana.com/empaques-para-alimentos-lima-produccion/ | Baja |
| Cacao | Cocoa Aro 5 kg S/183.90 = S/36.78 por kg (igual a doc 02). Nada más barato hallado | Cacao | Makro | 17-nov-2026 | https://makro.plazavea.com.pe/cocoa-aro-5kg/p | Alta |
| Harina de trigo | Nicolini sin preparar, saco de 50 kg: S/126.90 = S/2.54 por kg; Il Molino 5 kg S/35.00 = S/7.00 por kg. No está en doc 02 (la receta usa avena y cañihua) | Harina | Makro | 17-nov-2026 | https://www.makro.plazavea.com.pe/harina-de-trigo-seleccion-especial-nicolini-saco-50kg/p | Alta |
| Azúcar | Cartavio saco de 50 kg S/180.00 = S/3.60 por kg; Paramonga 25 kg S/96.00 = S/3.84 por kg; Aro blanca 5 kg S/23.30 = S/4.66 por kg. Doc 02: rubia Aro 5 kg a S/3.56 por kg. **Nada más barato** | Azúcar | Makro | 17-nov-2026 | https://www.makro.plazavea.com.pe/azucar-blanca-cartavio-saco-50kg/p | Alta |
| Mantequilla | Gloria pote 390 g S/16.40 = S/42.05 por kg; Bazo Velarde 180 g S/12.40 = S/68.89 por kg. Doc 02 usa aceite (S/6 a 9 por litro), que es mucho más barato | Grasa | Makro | 17-nov-2026 | https://www.makro.plazavea.com.pe/mantequilla-gloria-pote-390g/p | Alta |
| Cañihua | Sin cambio frente a doc 02 (Agrosur 10 kg a S/18 por kg sigue siendo lo más bajo) | Cañihua | doc 02 | 3-oct-2026 | https://www.agrosurperu.com/product-page/harina-de-ca%C3%B1ihua-1 | Media |

Lectura (sin decidir): en los insumos de la tabla no hay ahorro nuevo; lo que pesa (sangrecita, maquila y empaque) es justo lo que no tiene cotización publicada. Para el escenario S/10 por 6: S/10 con IGV = S/8.47 sin IGV = S/1.41 por brownie (cálculo propio), por debajo del costo de producir S/1.64.

---

## 6. Compra pública como canal

| Dato | Valor | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|
| Estado del programa | Qali Warma y Wasi Mikuna dejaron de ser el programa vigente tras denuncias de corrupción; el MIDIS abrió un nuevo Programa de Alimentación Escolar (PAE) con **licitación pública nacional 2026** | Infobae (2-dic-2025), La República (18-dic-2025) | 2025-2026 | https://www.infobae.com/peru/2025/12/02/midis-lanza-convocatoria-para-su-nuevo-programa-de-alimentacion-escolar-2026-tras-escandalo-de-qali-warma-y-las-empresas-con-antecedentes/ | Media (prensa; no leí las bases oficiales) |
| Presupuesto | S/2,577 millones en 2026 para más de 4.2 millones de escolares = unos S/613 por escolar al año (cálculo propio) | La República (18-dic-2025) | 2025 | https://larepublica.pe/politica/2025/12/18/contratistas-del-midis-alertan-estan-repitiendo-los-fracasados-programas-qali-warma-y-wasi-mikuna-hnews-530010 | Media |
| Requisitos de proveedor | Estar inscrito en el Registro Nacional de Proveedores (RNP); no haber causado afectaciones a la salud; según una web de trámites, además RUC, autorización sanitaria DIGESA, experiencia certificada, capacidad financiera y logística | Infobae; tramitesperu.com | 2025-2026 | https://tramitesperu.com/midis/qali-warma/ | Baja (la lista de trámites no cita una norma) |
| ¿Compran productos con hierro? | El producto fortificado estrella era el **arroz fortificado** (hierro, zinc y vitamina E); la Contraloría observó que las especificaciones técnicas de los alimentos **no incluyen el contenido de hierro** y que no es obligatorio declararlo en el certificado de calidad | Andina; RPP (Contraloría) | 2022-2024 | https://andina.pe/ingles/noticia-arroz-fortificado-es-producto-estrella-piura-y-entregan-raciones-para-334000-escolares-985770.aspx | Media |
| Reglas de las raciones (modalidad anterior) | Ración = bebida más alimento sólido de consumo inmediato; el valor de cada ítem tiene un tope («valor referencial») fijado por el programa | Qali Warma (2024) | 2024 | https://www.gob.pe/institucion/wasimikuna/noticias/978139-qali-warma-aprueba-bases-integradas-del-segundo-proceso-de-compras-2024-para-atender-a-mas-de-un-millon-de-escolares | Media |
| Precio por ración | **No encontrado** para ninguna galleta fortificada con hierro | n. a. | n. a. | n. a. | n. a. |
| Límites de composición de la galleta del programa | Humedad máx. 12 %, grasa máx. 19 %, cenizas máx. 3 %, proteína mín. 7.3 % (de una tesis que cita las especificaciones técnicas) | Tesis UAP | s. f. | https://repositorio.uap.edu.pe/handle/20.500.12990/3527 | Baja |

---

## 7. Casos peruanos

| Caso | Qué hizo | Precio, formato y canal | Cómo le fue | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|---|
| **Nutri H** (galleta con sangrecita, Ayacucho) | Nació de la tesis de Julio Garay (anemia propia a los 6 años); unos 300 intentos de receta; piloto de 45 días con el MINSA, con subida de 3 puntos de hemoglobina | 2020: S/3 el paquete y S/38 la caja de 30; 79 puntos de venta en 22 regiones (10 de ellos en Lima). 2022: en todos los Inkafarma y Mifarma, más su web. 2026: S/48 la caja de 30 | Sigue vendiendo seis años después; no hay cifras de ventas. Sube precio 26 % entre 2020 y 2026. No hay evidencia en estas fuentes de que haya empezado en A y B ni de que haya bajado | La República (2020); El Comercio (2022); nutrih.pe (3-oct-2026) | 2020-2026 | links en tema 3 | Media |
| **Inka Prime** (snack andino) | Empezó en tiendas naturistas (más de 100 tiendas: La Sanahoria, Organa, Madre Natura) y colegios en provincia; ahora va a supermercados | Formato familiar de 165 g con zipper y de 30 g para lonchera; para el supermercado arma un **six pack** para la campaña escolar porque la cadena no se interesa por el producto pequeño suelto | «A puertas de ingresar» a una de las dos cadenas grandes en 2026; six pack recién en 2027. No dice precio | Gestión, 8-ago-2026 | 2026 | https://gestion.pe/economia/empresas/inka-prime-alista-su-salto-a-supermercados-y-ya-mira-a-chile-para-exportar-sus-snacks-noticia/ | Media |
| **Qfoods** (snacks de quinua) | Marca de nicho que vende sobre todo en canal moderno y corporativo | Canal tradicional (bodegas y mercados) = **5 a 10 % de las ventas**; moderno ≈ 35 %; corporativo 35 a 40 %; maquila 20 %. Gerente general: «para crecer en el canal tradicional necesitamos ofrecer productos aún más baratos»; prepara un snack de arroz de «precio accesible» | Ventas de triple dígito en la pandemia, luego doble dígito; subió precios 5 % tras caer 10 % su rentabilidad | Gestión, 27-abr-2023 | 2023 | https://gestion.pe/economia/empresas/snacks-de-quinua-snacks-saludables-qfoods-alista-snacks-mas-economicos-para-crecer-en-canal-tradicional-noticia/ | Media |
| **Sanúa** (antes Arte Sano; hamburguesas veganas y helados) | Comenzó en 2014 en un taller de casa, con pedidos por redes y tiendas naturistas; en 2016 entró a retail | Hoy el retail (Supermercados Peruanos y otras cadenas) es su canal principal | Ventas de unos S/100,000 al mes (2025) | Forbes Perú, 30-may-2025 | 2025 | https://forbes.pe/negocios/2025-05-30/esta-emprendedora-peruana-transformo-su-diagnostico-en-una-idea-de-negocio-que-hoy-factura-cien-mil-soles-al-mes/ | Media (no es snack de lonchera) |
| **Mamalama y Siete Dragones** (barras para niños) | Hoy están en góndola de Plaza Vea y Wong | Mamalama S/19.90 la caja de 5 barras de 20 g, más un «Lonchera Display» a S/11.90; Siete Dragones S/18.80 la caja de 5 de 25 g | Mamalama nació en Emprende UP (Universidad del Pacífico) y ganó el concurso de Expoalimentaria 2018. De Siete Dragones **no encontré historia ni ventas** | Catálogo Plaza Vea 17-nov-2026; Perú Retail (2018) | 2018 y 2026 | https://www.peru-retail.com/?p=105628 | Baja (la historia es de 2018 y no dice canal ni ventas) |
| Marcas que empezaron en A y B y bajaron a C (o al revés) | **No encontrado** ningún caso documentado de snack nutritivo peruano que cambiara de nivel con datos de precio y resultado | n. a. | n. a. | n. a. | n. a. | n. a. | n. a. |

Dato lateral de producto: Nutri H declara 16.5 mg de hierro por porción de 30 g (La República 2020, baja confianza); AndiBite declara 1.9 mg por brownie de 20 g, o 9.5 mg por 100 g frente a 55 mg por 100 g de Nutri H (cálculo propio, si los 30 g fueran la porción y no el empaque).

---

## No encontrado

1. Tarifas publicadas de maquila o copacking de panificación en Lima (INDDA-UNALM u otras plantas): no hay tarifario público; habría que pedir cotización (el directorio de 2023 del INDDA trae cursosindda@lamolina.edu.pe).
2. Precio por kg de hemoglobina bovina o sangre de res deshidratada de grado alimentario, a granel, peruana o importada. Solo hay precios de frasco de tienda y de reactivo de laboratorio (que no sirven).
3. Precio de empaque flow pack por millar en Lima (solo hay referencias de doypack y de fabricantes de otros países).
4. Margen del distribuidor y del supermercado (en %); margen de la bodega solo con fuentes de blog y foro (baja confianza).
5. Requisitos oficiales de ingreso a Wong, Plaza Vea o Tottus (solo una guía de consultora) y los plazos de pago actuales.
6. Compra por nivel y por canal (bodega, mercado, supermercado) con cifras para A, B, C1 y C2. Los estudios de Worldpanel/Kantar por nivel son de pago; lo público es nacional y de todos los niveles.
7. Gasto de una familia C en el snack de la lonchera o en la propina escolar (Kantar, Ipsos, CCR o prensa).
8. Precio de snacks y galletas en bodegas (ninguna referencia publicada); precios de Tottus.
9. Hogares APEIM 2025 en cantidad por nivel y por zona (solo se publican porcentajes para Lima); ingreso APEIM 2025 con cifra exacta; zonas APEIM 2025 (las cifras de zonas son de 2023).
10. Niños de 4 a 11 años en Lima y en Lima Norte (ni Censo 2025 ni INEI); matrícula por distrito y por sector de gestión de 2024; el sitio ESCALE de Minedu está tras una verificación de seguridad y no pude abrirlo.
11. Lista oficial vigente de alimentos permitidos en quioscos escolares del MINSA (RM 195-2019) y si un brownie con sangrecita califica. Tampoco leí el texto del reglamento D. S. 017-2017-SA (la página dio 403).
12. Precio por ración de alimentos fortificados con hierro en el nuevo programa de alimentación escolar, y sus bases técnicas 2026.
13. Precio vigente de un mes de sulfato ferroso o de hierro polimaltosado en las webs de Mifarma, Inkafarma y Boticas (solo hay precios de Rappi sin fecha y un extracto de DIGEMID); no verifiqué la dosis preventiva del MINSA.
14. Presencia de Nutri H, Mamalama con hierro o cualquier producto con sangrecita en Wong, Plaza Vea o Metro: no aparecen en el catálogo del 17-nov-2026. Nutri H en bodegas: el plan de 2019 lo menciona; no encontré confirmación.
15. Casos de marcas que hayan bajado de A/B a C (o subido) con datos; historia, canal y ventas de Siete Dragones y de Sangrecita Factory.
16. El 42 % de Kantar y el 22.5 % de MINSA del HECHOS_v7 (ya señalados en PERFIL-AB-fuentes) siguen sin verificar.

---

## Lo que estos datos dicen de cada camino

Esta página **no decide**. Junta lo que apoya y lo que complica cada camino con las cifras de arriba.

### Camino 1: bajar el precio e ir a C y B (Lima Norte; bodega y mercado)

**Datos que lo favorecen**
- **Mercado grande.** C es 45.5 % de los hogares de Lima Metropolitana (≈ 1.53 millones) y A+B es 21 % (≈ 706,000) (APEIM 2025). Lima Norte tiene 809 mil hogares (Ipsos 2025), 36 % de ellos pareja con hijos, y entre los 8 distritos suman ≈ 724,000 hogares y 2.9 millones de personas (CPI). En niños de 6 a 12 años de Lima y Callao, C pesa ≈ 49 % frente a ≈ 17 % de A/B (CPI, baja confianza).
- **Dónde está el gasto de consumo masivo.** C concentra 38.8 % del gasto frente a 15.8 % de A/B (Worldpanel, Q2 2025, nacional). Bodegas 37 % y mercados 29 % del gasto frente a 24 % del canal moderno (Q2 2026).
- **Evidencia de las mamás de Lima Norte.** Dijeron S/10 por el pack de 6; no notaron la sangrecita. A S/10 el precio por 100 g (S/8.33) coincide con el de Bimbo Little Bites (S/8.38) y Nutra Bien (S/8.33), o sea hay un producto de brownie industrial en ese nivel.
- **Un caso peruano ligado a este camino.** Qfoods dice que para crecer en bodega hay que ofrecer «productos aún más baratos».
- **La lonchera es del mismo uso en C.** Nada en los datos dice que la lonchera sea distinta; los hogares C también llevan fruta (más peso en estratos medios y bajos, según Kantar).

**Datos que lo complican**
- **Poca plata libre y poco gasto fuera de casa.** C1 gana S/4,004 y C2 S/3,269 (2023); el hogar C gasta en alimentos fuera de casa S/68 al mes en total, y 24 % de su ingreso queda libre (frente a 35 % en B y 47 % en A). El ingreso medio de Lima Norte es S/4,069 contra S/8,258 en Lima Oeste (Ipsos).
- **Piso de precio de la competencia en C.** La galleta masiva cuesta S/1.9 a 2.5 por 100 g (S/0.67 a 0.92 el paquete individual). Aun a S/10 el pack, AndiBite es S/8.33 por 100 g, 3 a 4 veces el precio de la galleta masiva.
- **Costo.** A S/10 con IGV quedan S/8.47 sin IGV, S/1.41 por brownie, por debajo del costo de producir S/1.64 y antes del margen de bodega y distribuidor. La bodega gana, según fuentes débiles, 25 a 35 % en snacks sobre su precio de compra; no hay dato del distribuidor.
- **El canal de bodega no tiene datos de snacks de este tipo.** Qfoods vende solo 5 a 10 % por canal tradicional; Nutri H, el caso más cercano, está en farmacias, no con evidencia en bodega. Falta evidencia de un snack con sangrecita en bodega.
- **Mercado privado menor en C.** El 46.5 % de la matrícula de Lima es privada (2022); en Los Olivos, San Martín de Porres y Comas los portales comerciales cuentan 69 a 78 % de colegios privados (de colegios, no de alumnos). No hay cifra de pensión por zona ni de matrícula privada por distrito. El quiosco, si se usa, se rige por Ley 30021.
- **Mensaje.** Aun «sin octógonos», el MINSA recomienda que la lonchera no lleve ultraprocesados (4-mar-2026). El mensaje de hierro con 1.9 mg por brownie queda en 9.5 mg por 100 g, frente a 0.042 S/ por mg de un suplemento de farmacia, que cuesta unas 20 veces menos por mg de hierro que AndiBite incluso a S/10.

### Camino 2: bajar el precio y quedarse en A y B (Lima Top y Moderna), cambiando mensaje y campaña

**Datos que lo favorecen**
- **Gasto y holgura.** A gasta S/1,840 en alimentos dentro de casa y S/226 fuera; B S/1,601 y S/117. B tiene 35 % de ingreso libre y A 47 % (APEIM). Lima Oeste (que incluye las zonas 6 y 7) tiene ingreso medio S/8,258.
- **Hay precedentes de precios premium en góndola.** Nutri H S/16 por 100 g, Siete Dragones S/15, Mamalama S/19.9, Fika S/20, Gerber Nutrisnack S/43.6. Hay productos de «snack saludable» a precios que no son masivos y siguen en Wong y Plaza Vea.
- **Comprar online es más común en A/B** (59 % ha comprado en e-commerce de consumo masivo; ticket S/51.6) y los supermercados llegan a 77 % de los hogares.
- **Evidencia en el segmento.** La anemia en el quintil superior es 22.8 % en menores de 3 años (ENDES 2024), y solo 35 % recibe suplemento de hierro (últimos 7 días).
- **El ajuste de precio es a favor de B2.** B2 es 13.5 % de los hogares (≈ 454,000 de los ≈ 618,600 B). Un precio entre S/15 y S/20 por pack de 6 no tiene dato directo de aceptación en estas fuentes; la comparación es Nutri H (S/16 por 100 g, o S/19.2 por 120 g) y Nutra Bien (S/10 por 120 g).

**Datos que lo complican**
- **Mercado más chico.** A+B ≈ 706,000 hogares frente a ≈ 1.53 millones de C. Los niños de 6 a 12 de A/B son ≈ 17 % del total (CPI, baja confianza).
- **El precio de lista actual ya es el más alto de la góndola.** S/23.25 por 100 g contra S/15 a 20 de los demás snacks «saludables» y S/43.6 solo en Gerber para bebé. Un ajuste hacia S/18 a 20 por pack de 6 lo acerca a Nutri H, pero no hay datos de cuánto compraría el segmento.
- **Un snack con mensaje de hierro compite con el suplemento.** El hierro de farmacia cuesta S/0.042 por mg (Maltofer, precio de Rappi); AndiBite, S/0.88 a 2.45 por mg. Un padre A/B que ya da suplemento (35 %) tiene esa referencia.
- **Cambiar el mensaje no cambia la regulación.** Ley 30021 art. 8: la publicidad a menores de 16 años no puede usar personajes admirados por los niños, regalos o premios para fomentar la compra (en alimentos con exceso de azúcar, sodio o grasas). El plan usa a Andi y Killa y concursos; esto aplica a cualquier segmento, pero A/B ven más redes (donde el plan pone la pauta).
- **Supermercado como canal de A/B tiene requisitos.** Documentos de proveedor, código EAN, pago a 60–120 días (dato de 2010, baja confianza) y presentación en six pack (caso Inka Prime). No hay datos del margen del supermercado.
- **Evidencia de focus limitada.** El S/10 salió de mamás de Lima Norte (C/B); no hay en estas fuentes un estudio de disposición a pagar de A/B; la encuesta de 30 padres del doc 07 queda como la validación pendiente.

### Datos que valen para los dos caminos

- Precio de lista, costos y margen: S/1.64 de producción por brownie; S/0.45 de maquila (27 %); sangrecita ≈ S/0.28 (17 %) con el precio del plan de S/300 por kg, sin cotización publicada; no hay ahorro en cacao, azúcar, harina ni mantequilla.
- Ley 30021 art. 6: el quiosco escolar (público y privado) solo vende alimentos saludables según el listado del MINSA; no está confirmado que el brownie califique.
- La compra pública (nuevo PAE 2026) es por licitación nacional y sin precio de ración publicado para galletas con hierro; la especificación técnica del programa no exige declarar hierro.
- Nutri H, el producto más cercano, vende en farmacia y web, a S/16 por 100 g, con 16.5 mg de hierro declarados por 30 g (baja confianza).

## Brownies de referencia (precio por gramo)

Consulta del 17-nov-2026. Los precios son los de la ficha pública de cada tienda (la API de catálogo de plazavea.com.pe, metro.pe y wong.pe, que es la misma que alimenta la página), con IGV incluido. Precio por 100 g = precio ÷ gramaje × 100. «n.e.» = no encontrado en la ficha. Agotado = la ficha lo mostraba sin stock (precio de lista, no de compra). Los precios de Metro, Wong y Plaza Vea pueden variar por dirección o promoción.

### Brownies «normales» (con gramaje verificado)

| Producto | Canal | Gramaje | Unidades | Precio (S/) | Por unidad (S/) | Por 100 g (S/) | Octógonos | URL | Fecha | Confianza |
|---|---|---|---|---|---|---|---|---|---|---|
| Brownies Gustozzi Princesa 50g | Metro | 50 g | 1 (la ficha dice «contiene 50 gramos») | 10.30 | 10.30 | 20.60 | Alto en azúcar | https://www.metro.pe/brownies-gustozzi-princesa-50g-1003702/p | 17-nov-2026 | Media: el precio parece alto frente a la web de la marca (ver nota) |
| Brownie Bell's Fudge bolsa 40g | Plaza Vea | 40 g | 1 | 2.20 | 2.20 | 5.50 | Alto en azúcar | https://www.plazavea.com.pe/brownie-bells-fudge-bolsa-40g/p | 17-nov-2026 | Alta |
| Brownie Chip Nutra Bien 4un (Bimbo) | Wong | 248 g | 4 (≈62 g c/u) | 16.90 | 4.23 | 6.81 | Alto en azúcar | https://www.wong.pe/brownie-chip-nutra-bien-4un-1017236/p | 17-nov-2026 | Alta |
| Bites de Brownies D'Abuelas 180g | Wong | 180 g | n.e. | 13.90 | n.e. | 7.72 | Azúcar y grasas saturadas | https://www.wong.pe/bites-de-brownies-deabuelas-180g-1042951/p | 17-nov-2026 | Alta |
| Brownie de Chocolate Ana Avellana 135g | Plaza Vea | 135 g | 1 (frasco) | 10.50 | 10.50 | 7.78 | n.e. | https://www.plazavea.com.pe/brownie-de-chocolate-ana-avellana-envase-135g-20571203/p | 17-nov-2026 | Media: agotado |
| Brownie Decorado Giardino envase 80g | Plaza Vea | 80 g | 1 | 6.90 | 6.90 | 8.63 | Azúcar y grasas saturadas | https://www.plazavea.com.pe/brownie-decorado-envase-80g/p | 17-nov-2026 | Media: agotado |
| Brownie con Maní Tostado Tana 320g | Wong | 320 g | n.e. | 28.90 | n.e. | 9.03 | n.e. | https://www.wong.pe/brownie-con-mani-tostado-tana-320g-989714/p | 17-nov-2026 | Alta (queda 1 unidad) |

### Brownies sin gramaje en la ficha (no se puede calcular por 100 g)

| Producto | Canal | Gramaje | Unidades | Precio (S/) | Por unidad (S/) | Por 100 g | Octógonos | URL | Fecha |
|---|---|---|---|---|---|---|---|---|---|
| Brownie Tradicional / con Fudge / Tipo Trufa Delisha | Metro y Wong | n.e. | 1 | 5.50 | 5.50 | n.e. | Alto en azúcar | https://www.metro.pe/brownie-tradicional-delisha-x-unid-193769-2/p | 17-nov-2026 |
| Brownie Clásico Giardino (Sublime, Triángulo, Princesa) | Metro / Wong | n.e. | 1 | 7.90 Metro; 8.90 Wong | igual | n.e. | Azúcar y grasas saturadas | https://www.metro.pe/brownie-triangulo-nestle/p | 17-nov-2026 |
| Brownie Clásico con Lentejitas Giardino | Metro / Wong | n.e. | 1 | 8.50 | 8.50 | n.e. | Azúcar y grasas saturadas | https://www.wong.pe/brownie-clasico-con-lentejitas-giardino-789975-2/p | 17-nov-2026 |
| Brownies Denky bandeja 9 unid | Metro / Wong | n.e. | 9 | 15.50 | 1.72 | n.e. | Azúcar y grasas saturadas | https://www.metro.pe/brownies-x-9-un-denky/p | 17-nov-2026 |
| Brownie con Pecana D'Abuelas 5un | Wong | n.e. | 5 | 15.90 | 3.18 | n.e. | Azúcar y grasas saturadas | https://www.wong.pe/brownie-con-pecana-d-abuelas-5un-377296/p | 17-nov-2026 |
| Brownies Surtidos Giardino 4un | Metro / Wong | n.e. | 4 | 21.90 Metro; 22.90 Wong | 5.48 / 5.73 | n.e. | Azúcar y grasas saturadas | https://www.metro.pe/brownies-variados-nestle-four-pack-789979/p | 17-nov-2026 |
| Brownie con Fudge La Florencia bandeja 4un | Plaza Vea | n.e. | 4 | 12.90 | 3.23 | n.e. | Alto en azúcar y grasas saturadas | https://www.plazavea.com.pe/brownie-con-fudge-la-florencia-x-4-unid/p | 17-nov-2026 |
| Brownie Sonrisa La Florencia (Don Paulino) 1un | Plaza Vea | n.e. | 1 | 17.90 | 17.90 | n.e. | n.e. | https://www.plazavea.com.pe/brownie-sonrisa-la-florencia-don-paulino-bandeja-1un-pv/p | 17-nov-2026 |
| Brownie Decorado Defani bandeja 6un | Plaza Vea | n.e. | 6 | 22.90 | 3.82 | n.e. | n.e. | https://www.plazavea.com.pe/brownie-decorado-bandeja-6un/p | 17-nov-2026 |
| Torta Brownie Petit | Plaza Vea | n.e. | 1 | 29.90 | 29.90 | n.e. | Alto en azúcar y grasas saturadas | https://www.plazavea.com.pe/torta-brownie-petit/p | 17-nov-2026 |
| Gustozzi (web de la marca): brownie clásico (fudge, mármol, café) x6 | gustozzi.pe | n.e. | 6 | 11.00 (lista 12.00) | 1.83 | n.e. | n.e. | https://www.gustozzi.pe/categorias/brownies-confiteria | 17-nov-2026 |
| Gustozzi (web): brownie choco fudge, cookie&cream, red velvet, edición limitada x6 | gustozzi.pe | n.e. | 6 | 13.80 (lista 15.00) | 2.30 | n.e. | n.e. | https://www.gustozzi.pe/categorias/brownies-confiteria | 17-nov-2026 |
| Gustozzi (web): Brownie Nestlé (Princesa, Sublime, Triángulo) x6 | gustozzi.pe | n.e. | 6 | 16.56 (lista 18.00) | 2.76 | n.e. | n.e. | https://www.gustozzi.pe/categorias/brownies-confiteria | 17-nov-2026 |

### «Mini brownie» o «brownie bites» (formato AndiBite)

| Producto | Canal | Gramaje | Unidades | Precio (S/) | Por unidad (S/) | Por 100 g (S/) | Octógonos | URL | Fecha | Confianza |
|---|---|---|---|---|---|---|---|---|---|---|
| Mini Brownie Nutra Bien (Bimbo) 180 g, paquete 6un | Plaza Vea | 180 g | 6 (30 g c/u) | 15.00 | 2.50 | 8.33 | n.e. | https://www.plazavea.com.pe/mini-brownie-nutra-bien-bimbo-180g-paquete-6un/p | 17-nov-2026 | Media: agotado |
| Brownie Bimbo Little Bites caja 130g (también Blueberry y Chispas de Chocolate) | Plaza Vea; Metro y Wong (edición Bob Esponja) | 130 g | n.e. | 10.90 | n.e. | 8.38 | Azúcar y grasas saturadas (Metro/Wong); n.e. en Plaza Vea | https://www.plazavea.com.pe/brownie-bimbo-little-bites-caja-130g/p | 17-nov-2026 | Alta |
| Bites de Brownies D'Abuelas 180g | Wong | 180 g | n.e. | 13.90 | n.e. | 7.72 | Azúcar y grasas saturadas | https://www.wong.pe/bites-de-brownies-deabuelas-180g-1042951/p | 17-nov-2026 | Alta |
| Mini Brownie Clásico Giardino 60un | Metro / Wong | n.e. | 60 | 42.50 Metro; 44.50 Wong | 0.71 / 0.74 | n.e. | Alto en azúcar | https://www.metro.pe/mini-brownie-clasico-giardino-60un/p | 17-nov-2026 | Alta en precio; sin gramaje |
| Mini Brownies La Florencia caja 50un | Plaza Vea | n.e. | 50 | 25.90 | 0.52 | n.e. | n.e. | https://www.plazavea.com.pe/mini-brownies-la-florencia-bandeja-50un/p | 17-nov-2026 | Media: agotado; sin gramaje |
| Mini-brownies bañados en chocolate belga, La Bodeguita Belga, caja de 6 cubitos | Catálogo MINEDU (2021) | n.e. | 6 | 18.00 | 3.00 | n.e. | n.e. | https://conexion.minedu.gob.pe/wp-content/uploads/2021/12/CAT%C3%81LOGO-LA-BODEGUITA-BELGA.pdf | dic-2021 | Baja: dato de 2021 |

### Canales no encontrados

- **Tambo (tambo.pe, 78 productos del catálogo cargado):** ningún brownie ni Gustozzi; solo un pack de helados con «Chocobrownie». El catálogo depende de la tienda y la dirección, así que no prueba que no exista en góndola.
- **Plaza Vea y Wong:** búsqueda «gustozzi» sin resultados.
- **Rappi, PedidosYa, Oxxo, Listo, Tottus y Vivanda:** no encontrado. Tottus y Vivanda no respondieron a la consulta de catálogo (Vivanda devolvió HTML, no datos). Sin consulta no hay cifra.
- **Octógonos en Gustozzi/Tambo:** no hay foto verificada de Tambo; el único dato es el campo «Octógonos: azúcar» de la ficha de Metro.

### Cuenta (solo los 7 brownies «normales» con gramaje verificado)

- **Rango del precio por 100 g:** S/5.50 (Bell's) a S/20.60 (Gustozzi Princesa en Metro). **Mediana: S/7.78** (orden: 5.50; 6.81; 7.72; 7.78; 8.63; 9.03; 20.60). Si se dejan fuera los dos agotados (Ana Avellana y Giardino decorado), la mediana es S/7.72; sin el Gustozzi de Metro, S/7.75. Los mini/bites (8.33; 8.38; 7.72) tienen mediana S/8.33, igual al S/10 por 120 g de AndiBite.
- **Mini brownie de 20 g a esa mediana:** S/1.56 con IGV; S/1.32 sin IGV (÷ 1.18).
- **Pack de 6 (120 g) a esa mediana:** S/9.34 con IGV; S/7.91 sin IGV (÷ 1.18).

Notas: el Gustozzi de Metro (S/10.30 por 50 g, S/20.60 por 100 g) contrasta con la web de la marca, donde el brownie cuesta S/1.83 a 2.76 la unidad, sin gramaje publicado; no se puede saber si Metro vende 1 unidad o un pack. La web de gustozzi.pe muestra pie de página de 2021 y stock de miles de unidades; trátese como precio de lista de baja a media confianza. No hay dato de Gustozzi en Tambo.

---

## Lima Norte: MegaPlaza, ferias de emprendedores, colegios y quioscos

Consulta del 17-nov-2026. Regla: lo que no está publicado figura como «no encontrado»; no se estimó nada salvo donde dice «cálculo propio». Varias páginas dieron error al abrirlas (403/404/418/500: gob.pe de San Martín de Porres, findglocal, mercadonegro, americaretail, sanagustin.edu.pe, El Peruano sin el anexo); en esos casos el dato viene del extracto del buscador y se marca como Baja o Media.

### A. Espacios para emprendedores en centros comerciales y municipios

| Dato | Valor | A qué se refiere | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| «La Standería del Emprendedor» | Feria del 23 al 29 de agosto, 10 a. m. a 10 p. m., en el boulevard del mall; 8 emprendedores del distrito; ropa y artículos del hogar. Organiza MegaPlaza Independencia (Parque Arauco) con la Municipalidad de Independencia. Costo, requisitos, frecuencia y cómo postular: no publicados | MegaPlaza Independencia | Business Empresarial | 2021 | https://www.businessempresarial.com.pe/megaplaza-independencia-la-standeria-del-emprendedor-llega-esta-vez-de-la-mano-de-la-municipalidad-de-independencia/ | Media (nota de prensa; datos de hace 5 años) |
| «Encuentro de Emprendedores de Lima Norte» (III edición) | Gratis, 20 de junio, inscripción online en megaplus.com.pe, cupos limitados; charlas, paneles, networking y sorteos. No menciona stands ni ventas | MegaPlaza Independencia; organiza el mall | PressPeru | jun-2025 | https://pressperu.com/2025/06/17/iii-encuentro-de-emprendedores-megaplaza-independencia-consolida-su-compromiso-con-los-negocios-locales/ | Alta para el evento; no es un espacio de venta |
| Encuentro de Emprendedores de Lima Norte, 2026 | «Más de 700 personas» en mayo de 2026, con charlas y asesorías (según el extracto del buscador; no pude abrir la nota) | MegaPlaza | AmericaMalls & Retail | may-2026 | https://americaretail-malls.com/paises/peru/megaplaza-impulsa-emprendimientos-con-exitoso-encuentro-empresarial/ | Baja (extracto) |
| Convocatoria «Emprende Retail» | Parque Arauco ofrecía un módulo en Larcomar o en MegaPlaza Independencia a dos ganadores. Bases, costo y fecha: no leídas (página dio 403 y la fecha del buscador no es fiable) | Parque Arauco, incluye MegaPlaza Independencia | Mercado Negro | s. f. | https://www.mercadonegro.pe/retail/parque-arauco-inicia-convocatoria-para-emprende-retail/ | Baja |
| Feria Calle Uno (productora privada) | Dice operar en Minka, MegaPlaza, Cenco y Mall Aventura; invita a emprendedores a escribirles para exponer y vender. Precio: no publicado | Productora privada de ferias en malls | Ficha en findglocal (no se pudo abrir; dato del extracto) | 2026 | https://www.findglocal.com/PE/Independencia/1531265347093747/Feria-Calle-Uno-SAC | Baja |
| Cuánto cuesta participar por día, fin de semana o mes en MegaPlaza | **No encontrado** | MegaPlaza Independencia | n. a. | n. a. | n. a. | n. a. |
| Mall Aventura (Santa Anita; no Lima Norte) | «Feria Somos Emprendedores», en la plaza de ampliación del primer nivel. Sin costo ni requisitos en la nota | Otra zona; solo de referencia del formato | Revista Economía | s. f. | https://www.revistaeconomia.com/mall-aventura-santa-anita-inaugura-feria-somos-emprendedores-espacio-de-venta-para-micro-y-pequenos-empresarios/ | Baja |
| Real Plaza Puruchuco (Ate; no Lima Norte) | «La Placita del Emprendimiento»: 42 emprendedores en 2021; los postulantes se evalúan y se asignan por categoría. Sin tarifa | Otra zona; referencia del formato | Perú Retail (extracto) | 2021 | https://www.peru-retail.com/?p=159013 | Baja |
| Feria de emprendedores municipal, San Martín de Porres | «Feria emprendedores» el 17-abr-2026, 9:00 a 17:00, Palacio Municipal (Av. Alfredo Mendiola 169). Sin costo, RUC ni forma de inscripción publicados; parece aviso de un solo evento | Municipalidad de SMP | gob.pe (extracto; la página dio 403) | 2026 | https://www.gob.pe/institucion/munisanmartindeporres/campa%C3%B1as/142442-feria-emprendedores | Baja |
| «Feria de Invierno de Emprendedores» (SMP) | Aviso del 8-jul-2026 de una feria desde un jueves; contenido no leído | Probable SMP | Realidad SM | jul-2026 | https://realidadsm.com/2026/07/08/feria-invierno-emprendedores/ | Baja (solo título) |
| Plaza Norte: feria o programa para emprendedores | **No encontrado** (solo una feria navideña de 98 stands en 2014, sin tarifas) | Plaza Norte | n. a. | 2014 | n. a. | n. a. |
| Ferias municipales de Los Olivos, Independencia y Comas | **No encontrado** | Municipalidades | n. a. | n. a. | n. a. | n. a. |

### B. Tarifas de módulos o islas (referencias para comparar con Jockey Plaza)

| Dato | Valor | A qué se refiere | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Rango de módulos en centros comerciales | Desde S/500 hasta US$2,500 (≈ S/9,250), según tiempo de alquiler, tipo de mall y ubicación (Carlos Neuhaus, ACCEP) | Centros comerciales del Perú; sin distinguir mall ni periodo | Gestión, 15-sep-2023 | 2023 | https://gestion.pe/economia/mercados/alquiler-de-modulos-en-centros-comerciales-va-en-aumento-precios-y-espacio-ferias-retail-percy-vigil-jose-antonio-contreras-carlos-neuhaus-mega-plaza-open-plaza-accep-asociacion-de-centros-comerciales-y-de-entretenimiento-del-peru-noticia/ | Media (prensa, 3 años) |
| Precio por m² | S/250 en un mall pequeño de provincia; S/3,000 en un mall de gran circulación de Lima (Percy Vigil, exgerente general de Mega Plaza). Periodo no indicado | Referencia general | Gestión, ídem | 2023 | ídem | Media |
| Ferias en el mall | Fines de semana o periodos cortos; Vigil: «se paga una renta muy baja por un día». Monto: no publicado | Ferias temporales | Gestión, ídem | 2023 | ídem | Media |
| Módulo de 4 m² | ≈ US$250 al mes (referencia; «puede variar»); renta fija US$150 a 400 por m²; renta variable 8.5 % a 10 % de las ventas; mantenimiento y publicidad 10 % de la renta fija cada uno; garantía de 1 a 3 rentas | Referencia general de un especialista citado en TikTok | Líbero, 2-dic-2022 | 2022 | https://libero.pe/ocio/curiosidades/2022/12/02/cuanto-cuesta-poner-modulo-en-centro-comercial-mega-plaza-plaza-norte-mall-sur-presupuesto-alquiler-tienda-puesto-local-en-c-c-pe-peru-91347 | Baja (el artículo no da tarifa por mall) |
| Tarifa específica de Jockey Plaza, MegaPlaza, Plaza Norte o Real Plaza | **No encontrado.** Jockey solo aparece en el pie de foto de Gestión | Cada mall | n. a. | n. a. | n. a. | n. a. |

Cálculo propio sobre lo anterior: US$250 al mes por 4 m² no se puede pasar a soles sin fijar un tipo de cambio, y no lo fijé. Las cifras de arriba sirven para ver el orden de magnitud (cientos de soles por una feria de pocos días a miles al mes por un módulo fijo), no para presupuestar.

### C. Lima Norte, niveles B y C1

Ya están en las secciones 1.1 a 1.3 de este archivo; aquí el resumen con su fuente.

| Dato | Valor | A qué se refiere | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Hogares B y C1 en Lima Metropolitana | B 18.4 % (≈ 618,600); C1 26.7 % (≈ 897,700) | Lima Metropolitana | APEIM 2025 (conteo es cálculo propio) | 2025 | https://apeim.com.pe/wp-content/uploads/2025/12/Sintesis-Niveles-socioeconomicos-2025.pdf | Alta el %; Media el conteo |
| Hogares B y C en Lima Norte | B ≈ 113,000; C ≈ 378,000 (cálculo propio). **C1 de Lima Norte por separado: no encontrado**; APEIM publica solo B y C por zona | Zonas 1 y 2 de APEIM | APEIM 2023-2024 y CPI 2025 | 2023 y 2025 | ver sección 1.3 | Baja (mezcla de dos fuentes) |
| Estructura por zona | Zona 1 (Puente Piedra, Comas, Carabayllo): B 11.4 %, C 49.8 %. Zona 2 (Independencia, Los Olivos, SMP): B 20.9 %, C 58.7 % | Hogares | APEIM 2023-2024, lámina 17 | 2023 | https://apeim.com.pe/wp-content/uploads/2024/01/APEIM-Informe-de-Niveles-Socioeconomicos-2023-2024-Version-WEB.pdf | Alta (muestra chica) |
| Ingreso mensual del hogar | B S/6,754; C1 S/4,004 (C S/3,737) | Lima Metropolitana, no Lima Norte | APEIM 2023-2024, lámina 18 | 2023 | mismo | Alta, pero de 2023 |
| Ingreso medio del hogar de Lima Norte (todos los niveles) | S/4,069 al mes | Zona Ipsos Lima Norte | Ipsos, Perfiles Zonales 2025 | 2025 | https://www.ipsos.com/sites/default/files/ct/publication/documents/2025-09/Perfiles%20Zonales%202025_V3.pdf | Media |
| Colegios privados en Los Olivos | 591 de 783 colegios activos (75 %); SMP 78 % y Comas 69 % privados (portales comerciales) | Colegios de todos los niveles, no solo inicial y primaria | comoes.pe (padrón ESCALE) y miguiadecolegios.org | 2026 | https://comoes.pe/lima/los-olivos/colegios/ | Baja |
| Matrícula privada de inicial y primaria por distrito (Los Olivos, Independencia, Comas, SMP) | **No encontrado.** ESCALE la tiene pero no pude consultar el filtro por distrito | n. a. | ESCALE-Minedu | n. a. | https://escale.minedu.gob.pe | n. a. |
| Colegios privados considerados irregulares por el Minedu, en estos distritos | Independencia 17; Los Olivos 12; SMP 41; Comas 7 (según el extracto del buscador; mayor concentración en SMP). No es el total de colegios privados | Colegios sin autorización | Andina (nota de cierre de 264 colegios; año no identificado) | s. f. | https://andina.pe/ingles/noticia-atencion-conoce-donde-se-ubican-los-264-colegios-que-minedu-cerrara-a-partir-hoy-780828.aspx | Baja |
| Pensión de colegios privados de Los Olivos | Ranking de colegios: S/720 a 810 al mes (La Cámara, 2025, extracto). Colegio Martín Adán: hasta S/550 (Infobae, 2024). Rango de colegios accesibles de Lima: S/300 a 700 (guía micole, 2026) | Pocos colegios, no un promedio del distrito | La Cámara; Infobae; micole | 2024-2026 | https://www.infobae.com/peru/2024/02/04/los-mejores-y-mas-exclusivos-colegios-del-peru-pensiones-de-mas-de-s1700-y-cuotas-de-ingreso-superiores-a-los-3-mil-dolares/ ; https://www.micole.net/blog/?p=8811 | Baja |

### D. Quioscos escolares: qué dice la norma

| Dato | Valor (texto citado) | A qué se refiere | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Ley 30021, art. 6.2 | Los kioscos y comedores brindan «exclusivamente» alimentos y bebidas saludables según el listado del MINSA | Colegios públicos y privados de básica regular | Ley 30021 | 2013 | https://faolex.fao.org/docs/pdf/per123883.pdf | Alta |
| Reglamento (D. S. 017-2017-SA), art. 9 | «Los quioscos, comedores y cafeterías escolares saludables brindan exclusivamente alimentos y bebidas saludables de acuerdo a los lineamientos que para tal fin establece el Ministerio de Salud.» Deroga la RM 908-2012 (lista de alimentos saludables) | Colegios públicos y privados | Texto del reglamento, leído del PDF | 2017 | https://www.fger.org/wp-content/uploads/2025/07/2_decreto_supre_017_de_alimentacion.pdf | Alta |
| Reglamento, numeral 3.8 (definiciones) | «Los quioscos escolares brindan exclusivamente alimentos y bebidas saludables en el marco de las normas vigentes del Ministerio de Salud.» | Colegios públicos y privados | Texto del reglamento, leído del PDF | 2017 | https://www.fger.org/wp-content/uploads/2025/07/2_decreto_supre_017_de_alimentacion.pdf | Alta |
| RM 195-2019/MINSA (aprobación) | Aprueba el documento técnico de lineamientos para instituciones educativas públicas y privadas y deja sin efecto la RM 161-2015/MINSA | Colegios públicos y privados | El Peruano (solo la RM; el anexo no se cargó) | 2019 | https://busquedas.elperuano.pe/dispositivo/NL/1746072-1 | Alta para la RM; el anexo no se leyó aquí |
| RM 195-2019/MINSA, anexo de alimentos permitidos | Citas: «NO deben tener altos contenidos de azúcar, grasas saturadas, sodio y/o contener grasa trans (Sin Octógonos)»; alimentos o bebidas «no deben tener aditivos como conservantes, saborizantes, colorantes, acidulantes, edulcorantes entre otros»; galletas: «de soda u otra sin cremas y coberturas»; queques: «sin cobertura, ni relleno de cremas»; barras de cereal; leche en envase individual «sin saborizantes artificiales, edulcorantes ni colorantes artificiales» | Quioscos escolares | Educación en Red, que reproduce el anexo | 2019 | https://noticia.educacionenred.pe/2019/03/lista-alimentos-que-podran-venderse-quioscos-escolares-segun-rm-195-2019-minsa-170369.html | Media (transcripción de prensa especializada; no cotejé con el PDF oficial) |
| Verificación vigente | RM 033-2020/MINSA (criterios de evaluación de quioscos); el Minedu pidió usarla en 2025 | Quioscos | Oficio múltiple MINEDU 00012-2025 | 2025 | ver sección 4.1 | Media |

**Conclusión sobre el eritritol (lectura mía, no texto de la norma):** la norma no nombra el eritritol ni ningún edulcorante en concreto. Lo que sí dice, con las citas de arriba, es que el quiosco vende solo lo que está en la lista del MINSA, que los alimentos de la lista no llevan edulcorantes entre sus aditivos y que no pueden tener octógonos. Un mini brownie envasado con eritritol sin octógono: (1) no aparece en la lista (el más parecido es «queque sin cobertura ni relleno de cremas»), y (2) lleva un edulcorante, que la lista excluye. Por tanto, **con los datos encontrados, no se podría vender en un quiosco escolar**. Lo que no verifiqué es si el MINSA tiene una definición legal de «edulcorante» que excluya los polioles ni si algún colegio privado tiene una excepción. Antes de decidirlo, hay que pedir confirmación escrita a la DIRESA/DIGESA o a la UGEL.

**Margen o comisión del quiosco escolar:**

| Dato | Valor | A qué se refiere | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Cuánto cobra un quiosco escolar de Lima | **No encontrado.** El esquema que aparece (colegio San Agustín, bases de 2023) es una cuota mensual fija de concesión, con IGV, que cubre el alquiler más luz y agua; el monto no pude leerlo (la página dio 404) | Concesión de quiosco en un colegio privado | Bases del colegio, vía buscador | 2023 | https://sanagustin.edu.pe/wp-content/uploads/2023/05/CONCESION-DEL-SERVICIO-DE-QUIOSCO-2023.pdf | Baja |
| Comisión de un mall (no escolar) | 8 % a 8.5 % de la venta con un mínimo por m², se cobra el mayor | Local en mall; solo de contraste | Perú Retail | s. f. | https://www.peru-retail.com/que-tener-cuenta-abrir-local-mall/ | Baja |

### No encontrado

- Tarifa por día, fin de semana o mes de un espacio de emprendedores en MegaPlaza Independencia, y sus requisitos (RUC, registro sanitario, medidas) y cómo postular a un espacio de venta. Solo hay evidencia de un encuentro gratuito sin stands (2025) y de una feria con 8 emprendedores (2021).
- Frecuencia de las ferias de emprendedores de MegaPlaza.
- Todo lo de Plaza Norte; Mall Aventura y Real Plaza en Lima Norte (lo hallado es de Santa Anita y Ate).
- Ferias de emprendedores municipales de Los Olivos, Independencia y Comas; requisitos y costo de la de San Martín de Porres.
- Tarifas por mall (MegaPlaza, Plaza Norte, Jockey Plaza) y por periodo; solo hay rangos generales de prensa de 2022-2023.
- Hogares C1 de Lima Norte (APEIM no lo separa por zona) y APEIM 2025 por zona.
- Número de colegios privados y matrícula de inicial y primaria por distrito (ESCALE no se pudo consultar) y un promedio de pensión por distrito.
- Texto oficial completo del anexo de la RM 195-2019/MINSA y definición de «edulcorante» en la norma.
- Margen o cuota que cobra un quiosco escolar en Lima.


## Norma de quioscos: texto oficial, octógonos y tiendas de conveniencia

Fecha de consulta: 18 de noviembre de 2026. Esta sección cierra el vacío de la sección D: antes solo había una transcripción de prensa del anexo; ahora se leyó el documento oficial.

**Cómo se obtuvo el texto oficial.** El PDF oficial de la RM 195-2019/MINSA se abrió y descargó de gob.pe: https://cdn.www.gob.pe/uploads/document/file/296301/RM_N__195-2019-MINSA.PDF (29 páginas, firmado por MINSA, Lima, 28 de febrero de 2019). Es un escaneo sin capa de texto; lo leí página por página a ojo y copié las citas abajo. Las páginas se citan por la **numeración impresa del documento técnico** (la página 1 del PDF es la resolución; el PDF tiene 2 páginas más que la numeración impresa). Confianza de las citas: **alta** (texto oficial leído; puede haber algún error de transcripción mío de una palabra).

### E.1 RM 195-2019/MINSA: citas textuales

| Punto | Cita textual | Ubicación | Confianza |
|---|---|---|---|
| (a) ¿Aplica a colegios privados? Sí | Título: «Lineamientos para la Promoción y Protección de la Alimentación Saludable en las Instituciones Educativas **Públicas y Privadas** de la Educación Básica». Finalidad: «Promover y proteger la alimentación saludable para niños, niñas y adolescentes de las instituciones educativas públicas y privadas de educación básica con enfoque intercultural a nivel nacional.» Objetivo específico: «Establecer lineamientos para generar prácticas de alimentación saludable, en los quioscos, cafeterías y comedores de las instituciones educativas públicas y privadas de la educación básica.» Matiz: el ámbito (numeral 3) dice que se aplica «en el ámbito de competencia de las Direcciones de Redes Integradas de Salud de Lima Metropolitana, Direcciones Regionales de Salud, Gerencias Regionales de Salud o las que hagan sus veces en el ámbito regional» | Numerales 1, 2.2 y 3, p. 5 | Alta |
| (b) Aditivos y edulcorantes | «Los alimentos y bebidas NO deben tener altos contenidos de azúcar, grasas saturadas, sodio y/o contener grasa trans (Sin Octógonos), de acuerdo a la Ley N° 30021 ..., su Reglamento aprobado por DS N° 017-2017-SA y el Manual de Advertencias Publicitarias aprobado con DS N° 012-2018-SA y normas conexas.» Y: «Los alimentos, bebidas naturales o embotelladas no deben tener aditivos como conservantes, saborizantes, colorantes, acidulantes, edulcorantes entre otros.» Además, en lácteos: leche «sin saborizantes artificiales, edulcorantes ni colorantes artificiales»; yogur «sin saborizantes y colorantes artificiales, aditivos ni edulcorantes». Definición de «alimentos mínimamente procesados»: «no contienen ningún tipo de agregados tales como aditivos, saborizantes, edulcorantes e ingredientes de naturaleza sintética.» La norma **no nombra el eritritol** ni define «edulcorante» | Anexo 1, «Consideraciones generales», p. 16; lácteos, pp. 17-18; Anexo 3, def. 2, p. 22 | Alta |
| (c) Lista más parecida a un brownie | Anexo 1, sección «1. Cereales y derivados»: «Galletas de soda u otra sin cremas y coberturas.» «Barras de cereal.» «**Queques sin cobertura, ni relleno de cremas.**» Condiciones: ser «Sin Octógonos»; sin aditivos (incluye edulcorantes) según las consideraciones generales; las «preparaciones sencillas» se hacen en el propio quiosco. La lista dice «Pan francés, ... y otros panes regionales de **preparación diaria (no industriales)**». Otros ítems de la sección piden «sin adición de azúcar, sal, colorantes, aditivos». No dice nada sobre chocolate o cacao en queques. Ojo: la lista **no dice** si el queque debe ser de preparación diaria ni si puede venir envasado | Anexo 1, p. 16 | Alta |
| (c-bis) Riesgo de clasificación de un brownie envasado | El Anexo 3 define como **alimentos ultra procesados**: «Snacks (bocaditos) dulces o salados envasados», «Galletas (Dulces, saladas y rellenas)», «**Bizcochos y mezclas para bizcochos y barras de cereales**»; y entre los **alimentos procesados**: «Quesos; panes y **productos horneados (en general)**». (Contradicción interna: «Barras de cereal» está en la lista permitida y «barras de cereales» entre los ultraprocesados.) Un brownie envasado industrial podría leerse como ultraprocesado | Anexo 3, defs. 3 y 4, p. 23 | Alta para el texto; la lectura es mía |
| (d) ¿Un procesado envasado sin octógonos que no esté en la lista puede venderse? **El texto no lo dice con claridad.** A favor de «solo la lista»: «Los alimentos y bebidas ... y preparaciones culinarias ... deben ser o estar preparados con alimentos naturales o mínimamente procesados, de acuerdo al listado de alimentos y bebidas recomendadas en los quioscos, cafeterías y comedores escolares. (Anexos N° 1 y 2).» y, en la Ley 30021 art. 6.2, «exclusivamente alimentos y bebidas saludables conforme a ... un listado». A favor de que existan envasados: la ficha de la RM 033-2020 (ver E.2) tiene un ítem aparte para «alimentos y bebidas industrializadas ... (sin octógonos)». Las máquinas expendedoras «deben estar sujetas a los criterios establecidos en los Anexos N° 1 y 2» | Numeral 5.2.1 y 5.2.4, p. 8 | Alta para el texto; **ambigua** para la pregunta |
| (e) Quién fiscaliza | Nivel nacional: MINSA (DGIESP) «es responsable de la supervisión de su cumplimiento». Regional: las Direcciones/Gerencias Regionales de Salud y Redes, «en coordinación con las Direcciones Regionales de Educación, son las responsables de difundir, implementar y supervisar». Local: «Los directores de las Redes, Microredes de Salud y establecimientos de salud, en coordinación con los directores de las Unidades de Gestión Educativa Local, los directores de las Instituciones de la Educación Básica y las autoridades del Gobierno Local, son los responsables de la implementación, monitoreo, vigilancia y fiscalización» | Numerales 8.1, 8.2, 8.3, pp. 14-15 | Alta |
| (e) Sanción | **La RM 195-2019 no fija ninguna sanción ni multa** (revisé las 29 páginas). Lo más cercano es la Ley 30021 art. 11 (ver E.3) | Todo el documento | Alta (ausencia) |

### E.2 Norma posterior: RM 033-2020/MINSA (complementa; no reemplaza)

Fuente oficial: copia anexada al Oficio Múltiple 00012-2025-MINEDU/VMGI-DRELM-UGEL05/DIR-ASGESE (UGEL 05, 20-ene-2025), PDF en gob.pe: https://cdn.www.gob.pe/uploads/document/file/7520608/6394730-oficio_multiple-00012-2025-minedu-vmgi-drelm-ugel05-dir-asgese-orientaciones-para-kioscos-0050441.pdf (escaneo, leído a ojo). Confianza: alta para la existencia y el texto citado.

- Resolución del 30-ene-2020, art. 1: «Aprobar el Documento Técnico: Criterios de evaluación a quioscos, cafeterías y comedores escolares en instituciones de educación básica regular públicas y privadas para una alimentación saludable».
- Ficha del quiosco, sección C «Del cumplimiento con la Ley de Alimentación Saludable» (p. 13 del documento técnico; hoja 18 del PDF): ítem 15 «Se expende solo alimentos saludables (ANEXO N°1- RM 195-2019-MINSA)»; ítem 16 «Los alimentos y bebidas industrializadas que se expenden no presenta altos contenidos de azúcar, grasas saturadas, sodio y/o contener grasas trans (sin octógonos)»; ítem 17 sobre Registro Sanitario y fecha de vencimiento vigente; ítem 20 «No hay presencia de mensajes publicitarios ... que promuevan el consumo de alimentos ultraprocesados». Nota al pie: «SI SE IDENTIFICA A UN ALIMENTO QUE NO ES CONSIDERADO SALUDABLE EN EL QUIOSCO, SEGÚN EL ANEXO N° 1, SE COLOCARÁ "0" INDICANDO QUE NO CUMPLE.»
- Resultado (p. 8): 75 % al 100 % = SALUDABLE; 51 % al 74 % = EN PROCESO; menos de 50 % o riesgo = NO SALUDABLE. Evaluaciones y monitoreos 2 veces al año (marzo-abril y octubre-noviembre) con el establecimiento de salud, la IE, la APAFA y el gobierno local.
- Vigencia: el Oficio de la UGEL 05 (enero 2025) sigue citando juntas la RM 195-2019 y la RM 033-2020 y pide a **colegios públicos y privados** cumplirlas y poner la ficha en las bases de licitación del quiosco. Eso muestra que la RM 195-2019 seguía vigente a 2025.
- **Norma que la modifique o reemplace (2020-2026): no encontré ninguna.** Búsquedas en El Peruano, gob.pe y prensa no mostraron una RM posterior sobre el listado. Lo que sí hallé: el DS 007-2026-MINEDU (modifica el reglamento de la Ley 28628, APAFA), que dice que los quioscos venden alimentos saludables en el marco de la Ley 30021 (fuente secundaria vía lpderecho.pe; no leí el texto oficial; solo cubre colegios públicos). Confianza en «no existe reemplazo»: **media** (ausencia de evidencia, no prueba).

### E.3 Fiscalización y sanción (Ley y Reglamento)

Fuentes: Ley 30021 (Congreso, https://www2.congreso.gob.pe/sicr/cendocbib/con4_uibd.nsf/A40123F0A0544D8605257E6700743FD5/$FILE/30021.pdf) y DS 017-2017-SA (https://www.fger.org/wp-content/uploads/2025/07/2_decreto_supre_017_de_alimentacion.pdf, copia no oficial del texto original 2017; el DS 015-2019-SA lo modificó y no verifiqué qué artículos). Leídos del PDF.

- Ley 30021, art. 6.2: «Los kioscos y los comedores escolares brindan exclusivamente alimentos y bebidas saludables conforme a los estándares que establece el Ministerio de Salud, a través de un listado de alimentos adecuados para cada edad».
- Ley 30021, art. 11, párrafo 2: «La autoridad encargada de fiscalizar ... ambientes escolares libres de alimentos no saludables ... es el Ministerio de Educación, los gobiernos regionales y las Unidades de Gestión Educativa Local (UGEL) en sus respectivas jurisdicciones.» Las sanciones por **publicidad** (octógonos, art. 8 y 10) las impone el INDECOPI (art. 16 del Reglamento, vía D. Leg. 1044).
- DS 017-2017-SA, disp. complementaria final séptima: MINEDU con MINSA dictan normas de fiscalización de las IE «Públicas y Privadas». Octava: quejas y denuncias al portal de DIGESA.
- **Sanción por vender un alimento no permitido en el quiosco: no encontré un monto ni una escala.** En la práctica la consecuencia documentada es la calificación NO SALUDABLE de la ficha y el requisito en las bases de licitación (el colegio puede rescindir la concesión; inferencia mía). Confianza: baja para la consecuencia, alta para quién fiscaliza.

### E.4 Manual de Advertencias Publicitarias (DS 012-2018-SA): umbrales vigentes

Se tiene el cuadro del artículo 4 del Reglamento (DS 017-2017-SA), leído en el PDF, y el Manual (DS 012-2018-SA, El Peruano 16-jun-2018: https://busquedas.elperuano.pe/normaslegales/aprueban-manual-de-advertencias-publicitarias-en-el-marco-de-decreto-supremo-n-012-2018-sa-1660606-1/) reproduce el mismo cuadro con «Fase 2: 39 meses» (en vigencia desde el 17-sep-2021, cálculo de plazo que coincide con un memo de estudio jurídico). Un producto lleva octógono si es **«mayor o igual»** a:

| Nutriente (alimentos sólidos, por 100 g) | Fase 1 (6 meses; 2019) | **Fase 2 (39 meses; vigente desde sep-2021)** |
|---|---|---|
| Azúcar total | ≥ 22.5 g | **≥ 10 g** |
| Grasas saturadas | ≥ 6 g | **≥ 4 g** |
| Sodio | ≥ 800 mg | **≥ 400 mg** |
| Grasas trans | «Según la Normatividad Vigente» (el Manual remite al DS 033-2016-SA) | **Sin umbral numérico en el cuadro.** Fuentes secundarias citan 2 g de ácidos grasos trans por 100 g de materia grasa como límite de comercialización, y la leyenda «Contiene grasas trans» |

Notas: el cuadro habla de «alimentos sólidos»; el reglamento dice «por 100 g», y el Manual aplica el parámetro al producto tal como se vende. «Azúcar total» incluye los azúcares agregados y los naturales de la fruta, leche, etc. (misma definición del Anexo 3 de la RM 195-2019, p. 24); el eritritol no es azúcar total en esa definición, pero no hallé un texto que lo trate. El mismo artículo permite actualizar los parámetros de la fase 2 con 12 meses de aviso; **no encontré** una actualización publicada. Confianza: alta para azúcar, grasas saturadas y sodio; **baja** para grasas trans (texto oficial de DS 033-2016-SA no leído).

**Cuánta azúcar puede llevar un brownie sin octógono:** menos de 10 g de azúcar total por 100 g de producto (un brownie de 40 g: menos de 4 g de azúcar total), menos de 4 g de grasa saturada por 100 g (menos de 1.6 g en 40 g) y menos de 400 mg de sodio por 100 g. El cacao, la mantequilla y el huevo ya consumen grasa saturada y es lo que más probablemente haga fallar un brownie.

### E.5 Queques o snacks horneados en quioscos escolares de Lima

- **Marcas que declaren cumplir la norma, con precio por unidad y edulcorante: no encontré ninguna.** Hice tres búsquedas; no hay catálogos ni listas públicas de proveedores de queques para quioscos escolares en Lima.
- Dato de contexto: estudio de campo de marzo-mayo de 2023 en 45 colegios de Lima Metropolitana (30 públicos, 15 privados), 57 quioscos y cafeterías: **55 de 57 (96.5 %) vendían productos de panadería** (galletas, queques, tortas) y **44 de esos 55 (80 %) tenían al menos un producto con octógono**. Fuente: PMC, «Supply and advertising of food and beverages with front-of-package warning labeling in schools of Metropolitan Lima 2023», https://pmc.ncbi.nlm.nih.gov/articles/PMC13245979/ (leí los primeros 100,000 caracteres; el desglose público/privado no está en el texto). Confianza: alta para los números; sirve para ver que la norma se incumple mucho, no para marcas.
- **Cuánto cobra o qué margen pide un quiosco o concesionario a sus proveedores: no encontrado.** Solo hay cuotas fijas de concesión: las bases del colegio San Agustín (2023) piden «el monto mensual a pagar ... como derecho de concesión incluyendo el I.G.V.» (monto no leído); bases del colegio La Merced (2019) con base mínima de S/ 3,500 por concesión (cifra del resumen del buscador; no pude leer el PDF escaneado; incluye comedor y quiosco). Es el pago del concesionario al colegio, no un margen sobre el proveedor. Confianza: baja.

### E.6 Tiendas de conveniencia (Tambo, Oxxo, Listo)

**No encontré** ninguna fuente publicada con requisitos de proveedor, margen sobre precio, cuota de ingreso o de listado, plazos de pago ni exigencia de distribuidor para Tambo (Lindcorp), Oxxo Perú o Listo (Primax). Se hicieron cuatro búsquedas.
- Único dato citable de Perú: el gerente general de Oxxo Perú dijo que «el 99% de nuestros proveedores son nacionales» (entrevista en La Cámara de Comercio de Lima, https://lacamara.pe/oxxo-peru-gerente-general-destaca-el-papel-de-sus-tiendas-insignia-y-refuerza-atencion-de-24-horas-en-distritos-de-lima-entrevista/; no leí la nota completa; resumen del buscador, confianza media).
- Referencia de México (no aplica sin verificar): el programa MiPymes de OXXO México pide registro fiscal, marca registrada y código de barras GS1, y revisa la propuesta en unos 15 días hábiles (Emprendedor.com, https://emprendedor.com/como-ser-proveedor-de-oxxo-requisitos-y-pasos-para-ingresar-tus-productos/; GS1 México). Confianza: baja para Perú.
- Cadena de supermercados: Tottus ofrecería pagos a menos de 30 días a pymes (https://www.peru-retail.com/peru-tottus-apoyara-a-pymes-peruanas/); es supermercado, no conveniencia.

### No encontrado (de esta sección)

- Texto oficial de la RM 195-2019 **en formato de texto** (en gob.pe solo existe el escaneo; no hay versión con texto copiable); el PDF de El Peruano y SPIJ no se abrió.
- Una norma 2020-2026 que modifique o reemplace la RM 195-2019 (no hay evidencia; no es prueba de que no exista).
- Cualquier sanción o multa por vender en el quiosco un alimento fuera de la lista.
- Una definición legal de «edulcorante» o un pronunciamiento del MINSA sobre el eritritol u otros polioles en quioscos.
- Si un alimento envasado sin octógonos y fuera de la lista puede venderse: el texto oficial es ambiguo (ítems 15 y 16 de la ficha); falta una consulta escrita a DIRIS/DIGESA o UGEL.
- Texto oficial del DS 033-2016-SA y umbral numérico de grasas trans en el Manual; si el DS 015-2019-SA cambió el art. 4 del Reglamento.
- Marcas, endulzante y precio por unidad de queques, brownies o snacks horneados de quioscos escolares de Lima que declaren cumplir la norma.
- Cuánto cobra o qué margen exige un quiosco o concesionario a sus proveedores en Lima (solo hay cuotas de concesión sin monto leído).
- Requisitos, márgenes, cuota de ingreso, plazos de pago y exigencia de distribuidor de Tambo, Oxxo Perú y Listo.

### Conclusión

1. **¿Entra al quiosco un brownie con eritritol?** Con el texto oficial, **probablemente no**: la lista permite solo «queques sin cobertura, ni relleno de cremas», y las «Consideraciones generales» excluyen «edulcorantes» entre los aditivos; además un brownie industrial envasado cae cerca de las definiciones de «bizcochos» y «productos horneados» del Anexo 3.
2. **¿Qué tendría que cumplir una receta?** Sin octógonos (por 100 g: azúcar total menos de 10 g, grasa saturada menos de 4 g, sodio menos de 400 mg, sin grasa trans industrial), sin cobertura ni relleno, sin aditivos ni edulcorantes en la lista de ingredientes (endulzar solo con fruta, por ejemplo, y revisar el azúcar total), con registro sanitario y fecha de vencimiento vigentes, y con el visto bueno por escrito de la DIRIS/DIGESA o la UGEL del colegio.
3. **¿Qué tan seguro es?** Confianza **media-alta** en el texto y los umbrales (leídos del original), **media** en que no exista una norma posterior, y **baja** sobre el eritritol (la norma no lo nombra) y sobre mercado, márgenes y tiendas de conveniencia (sin datos publicados).


## Postres de quiosco y brownies artesanales y saludables

Consulta del 18-nov-2026. Los precios de supermercado salen de la API de catálogo de plazavea.com.pe y wong.pe (la misma que alimenta la página), con IGV incluido; los de tiendas propias, de sus webs (Shopify o WooCommerce) o de las fichas de Rappi. Precio por 100 g = precio ÷ gramaje × 100. «n.e.» = no encontrado en la ficha. «Cálculo propio» = hecho aquí con datos de la ficha, no publicado por la marca. «Octógonos» en supermercados es el campo de la ficha (tipodeoctogono u Octogonos); si la ficha no tiene el campo, figura «sin campo» (no prueba que no lo lleve). No se estimó ningún dato que no esté publicado.

### 1. Queques y horneados envasados que circulan en quioscos (ficha de supermercado)

Nota previa: no hay lista pública de lo que se vende en los quioscos de colegios privados de Lima. Esta tabla es de lo que compite en el mismo tipo de producto, no de lo que se confirmó en un quiosco. Karinto en las tres cadenas solo tiene maní y chifles (sin queques). Vida Sana, Renacer, Kiwicha pop e Inka Crops: no encontrados en las búsquedas de catálogo.

| Producto | Canal | Gramaje | Precio (S/) | Por 100 g (S/) | Endulzante / azúcar declarada | Octógonos | URL | Fecha | Confianza |
|---|---|---|---|---|---|---|---|---|---|
| Keke Casero Marmoleado Bimbo | Plaza Vea | 340 g | 10.90 | 3.21 | Azúcar es el primer ingrediente; 14 g de azúcares por porción de 56.6 g = 24.7 g por 100 g (cálculo propio) | Azúcar y grasas saturadas (ficha de Wong) | https://www.plazavea.com.pe/keke-casero-marmoleado-bimbo-bolsa-340g-20571324/p | 18-nov-2026 | Alta |
| Keke Nito Bimbo Max | Plaza Vea | 60 g | 2.00 | 3.33 | Ingredientes n.e. | Alto en azúcar, alto en grasas saturadas | https://www.plazavea.com.pe/keke-nito-bimbo-max-bolsa-60g/p | 18-nov-2026 | Alta (precio y octógonos); n.e. endulzante |
| Keke de Naranja Bell's | Plaza Vea | 380 g | 7.50 | 1.97 | Azúcar por porción 8 g en 9 porciones de ≈42 g = ≈19 g por 100 g (cálculo propio); ingredientes n.e. | Alto en azúcar, alto en grasas saturadas | https://www.plazavea.com.pe/keke-de-naranja-bells-bolsa-380g/p | 18-nov-2026 | Alta |
| Bizcocho Costa Pokeke (relleno de manjar) x6 | Plaza Vea | 198 g (≈33 g c/u) | 4.00 | 2.02 | n.e. | Alto en azúcar, alto en grasas saturadas | https://www.plazavea.com.pe/bizcocho-costa-pokeke-paquete-6un/p | 18-nov-2026 | Alta |
| Kekito PYC Vainilla | Plaza Vea | 90 g en el título; 95 g en «contenido neto» | 3.50 | 3.68 (con 95 g) | n.e. | Alto en azúcar, alto en grasas saturadas | https://www.plazavea.com.pe/kekito-pyc-vainilla-bolsa-90g/p | 18-nov-2026 | Media (dos gramajes en la ficha) |
| Galletas Field Vainilla | Plaza Vea | 136 g | 3.00 | 2.21 | Azúcar y jarabe de azúcar invertido; 8 g de azúcares por porción (porción n.e.) | Alto en azúcar, alto en grasas saturadas | https://www.plazavea.com.pe/galletas-field-vainilla-bolsa-136g-20632411/p | 18-nov-2026 | Alta |
| Galletas integrales con kiwicha Unión | Wong | 195 g | 6.50 (Plaza Vea: 5.70) | 3.33 (Plaza Vea: 2.92) | n.e. | Azúcar | https://www.wong.pe/galletas-integrales-con-kiwicha-uni-n-195g-57233006/p | 18-nov-2026 | Alta |
| Galletas integrales Costa con salvado x6 | Plaza Vea | 222 g | 5.50 | 2.48 | n.e. | Alto en sodio (no lleva octógono de azúcar) | https://www.plazavea.com.pe/galletas-integrales-costa-con-salvado-de-trigo-paquete-6un/p | 18-nov-2026 | Alta |
| Keke de chocolate Mr. Brownies | Plaza Vea | 200 g | 13.50 | 6.75 | n.e. | Sin campo | https://www.plazavea.com.pe/keke-de-chocolate-mr--brownies-bolsa-200g-20571664/p | 18-nov-2026 | Media |
| Keke vegano de zanahoria Yöy | Wong | 275 g | 19.90 | 7.24 | n.e. | Azúcar y grasas saturadas | https://www.wong.pe/keke-vegano-de-zanahoria-y-y-275g-1013442/p | 18-nov-2026 | Alta |
| Keke de manzana y canela «No Sugar» Coco-Sugar | Wong | 472 g | 39.50 | 8.37 | «No Sugar» en el nombre; endulzante n.e. en la ficha | **Azúcar** (lleva octógono pese al nombre) | https://www.wong.pe/keke-de-manzana-canela-no-sugar-472g-1025814/p | 18-nov-2026 | Media |
| Galletas con quinua +Nutri Co x6 | Plaza Vea | 180 g | 14.90 | 8.28 | Ingredientes n.e. | Sin campo | https://www.plazavea.com.pe/galletas-con-quinua-y-manzana-nutri-co-caja-6un/p | 18-nov-2026 | Media |
| Galletas Santiveri Cacao «0% azúcar» | Plaza Vea | 200 g | 19.10 | 9.55 | «0% azúcar»; endulzante n.e. | Sin campo | https://www.plazavea.com.pe/galletas-santiveri-cacao-bolsa-200g/p | 18-nov-2026 | Media |
| Muffin La Casa Marimiel (arándanos, coco, chocolate, plátano) | Plaza Vea | 60 g | 6.90 | 11.50 | **Glucósidos de esteviol (stevia, SIN 960)**; harina de trigo integral y de quinua; 2 g de azúcares por porción (porción n.e.) | Sin campo | https://www.plazavea.com.pe/muffin-la-casa-marimiel-sabor-a-chocolate-vaso-60g/p | 18-nov-2026 | Alta (ingredientes); media (octógonos) |
| Mini Brownie Nutra Bien (Bimbo) x6 | Plaza Vea | 180 g | 15.00 (agotado) | 8.33 | Azúcar primer ingrediente; 10 g de azúcares por porción (porción n.e.) | Sin campo | https://www.plazavea.com.pe/mini-brownie-nutra-bien-bimbo-180g-paquete-6un/p | 18-nov-2026 | Media (agotado) |

Lectura: todos los queques y bizcochos industriales de la lista se endulzan con azúcar y llevan octógono de azúcar o de grasas saturadas. Las dos excepciones con edulcorante no calórico son el muffin de Marimiel (stevia) y las galletas «0% azúcar» de Santiveri (endulzante no declarado en la ficha).

### 2. Qué se vende y cómo, por colegio u operador

| Dato | Valor | Fuente | URL | Fecha | Confianza |
|---|---|---|---|---|---|
| Innova Schools Perú: quién opera sus quioscos o cafeterías, carta, precios, gramaje | **No encontrado.** La web peruana (innovaschools.edu.pe, revisada el 18-nov-2026, sitemap actualizado el 17-nov-2026) no menciona kiosco, cafetería, concesionario ni lonchera; tampoco su Reglamento Interno 2022 en los fragmentos accesibles | innovaschools.edu.pe | https://www.innovaschools.edu.pe/ | 18-nov-2026 | Alta para la ausencia en la web; no prueba que no exista el servicio |
| Innova Schools Colombia: «Innova Eats», «Servicio de alimentación by Innova Schools», con tienda escolar («Alternativas ricas y saludables para todos los gustos»), pago por la app PayGo | Es la web de Colombia, no de Perú; sin carta, sin precios de tienda, sin queques ni edulcorantes. No se puede extrapolar a Lima | innovaschools.edu.co | https://www.innovaschools.edu.co/innova-eats-1 | 18-nov-2026 | Alta para lo dicho; no aplica a Perú |
| Markham, Newton, San Silvestre, Pamer, Trilce, Saco Oliveros, Santa María: carta de quiosco | **No encontrado** (búsquedas web sin resultado) | n. a. | n. a. | 18-nov-2026 | n. a. |
| Sodexo, Aramark, APC, Liderman Alimentos: carta escolar | **No encontrado.** Solo hay notas corporativas de Sodexo Perú sin colegios | n. a. | n. a. | 18-nov-2026 | n. a. |
| Lima Café 28 (concesionaria de alimentos para colegios, entre ellos Nordic en Villa y St. George's): menú mensual con precio de referencia de S/15.75 por menú | Es menú de almuerzo, sin postres con gramaje ni endulzante | Lima Café 28 (extracto del buscador; no abrí la página) | https://limacafe28.com/ | s. f. | Baja |
| Colegio no identificado (dominio ssccaqp.edu.pe, probablemente de Arequipa): propuesta de «Bon Appetit», menú S/13.00 con entrada, fondo, postre y refresco | No es Lima ni quiosco; solo muestra que el postre se vende dentro de un menú | Propuesta en ssccaqp.edu.pe | https://www.ssccaqp.edu.pe/wp-content/uploads/2024/03/Propuesta-Comedor-Cafeteria-Bon-Appetit.pdf | 2024 | Baja (ciudad y colegio sin confirmar: ver nota) |
| PUCP, tesis de prefactibilidad de una concesionaria de quioscos saludables para colegios de Lima Metropolitana: «no existe alguna concesionaria de quiosco que expenda productos a base de alimentos saludables» (cita del extracto) | Sin precios ni carta; fecha de la tesis n.e. | Extracto del buscador (la página bloqueó la descarga) | https://tesis.pucp.edu.pe/bitstreams/1cdecaab-1ca2-4d7d-a487-872769c90269/download | n.e. | Baja |
| Colegio San Agustín (privado, Lima), bases de concesión del quiosco 2023: modalidad de concesión sin relación laboral; el servicio debe ofrecer alimentación libre de octógonos, de elaboración propia y saludable; cuota mensual de concesión con IGV (monto no leído) | Extracto del buscador; el PDF dio 404 | https://sanagustin.edu.pe/wp-content/uploads/2023/05/CONCESION-DEL-SERVICIO-DE-QUIOSCO-2023.pdf | may-2023 | Baja |
| Colegio La Merced (Lima), bases 2019: el concesionario tiene «exclusividad» de expendio de desayunos, menús y cualquier alimento elaborado en el colegio; precios en una «lista de venta» (la lista no está en el texto) | Extracto del buscador; el PDF no cargó | https://colegiolamerced.pe/wp-content/uploads/2019/02/BASES-PARA-LICITACI%C3%93N-DE-COMEDOR-Y-KIOSKO-ESCOLAR-1.pdf | 2019 | Baja |
| Qué se exige al proveedor del quiosco, en la práctica | La ficha de evaluación RM 033-2020/MINSA (ver E.2) exige: ítem 15 solo alimentos del Anexo 1 de la RM 195-2019; ítem 16 industrializados sin octógonos; ítem 17 registro sanitario y fecha de vencimiento vigentes. La UGEL 05 (Oficio Múltiple 00012-2025) pide a colegios públicos y privados incluir la ficha en las bases de licitación del quiosco. Ficha técnica o lista de proveedores del colegio: **no encontrado** | RM 033-2020/MINSA; UGEL 05 | https://cdn.www.gob.pe/uploads/document/file/7520608/6394730-oficio_multiple-00012-2025-minedu-vmgi-drelm-ugel05-dir-asgese-orientaciones-para-kioscos-0050441.pdf | 2020 y ene-2025 | Alta (texto leído en la sección E.2) |
| UGEL 06, Oficio Múltiple 00024-2026: plan de monitoreo de quioscos, comedores y cafeterías, con la venta de productos con octógonos como falta; dirigido a colegios públicos de su jurisdicción (según el extracto) | Monitoreo, sin resultados publicados | UGEL 06 | https://ofimult.ugel06.gob.pe/archivos/oficio-multiple-no-00024-2026-mineduvmgi-drelm-ugel06dirasgese-1771941935.pdf | 2026 | Baja (no pude leer el PDF) |

Nota sobre la fila de Bon Appetit: el documento no dice la ciudad; el dominio ssccaqp.edu.pe corresponde a un colegio de Arequipa. No usar como dato de Lima.

### 3. Cumplimiento de la norma en quioscos de colegios de Lima (estudios)

| Estudio | Cifra | Fuente y URL | Fecha | Confianza |
|---|---|---|---|---|
| Oferta y publicidad de alimentos en 45 colegios de Lima Metropolitana (30 públicos, 15 privados; 57 quioscos y cafeterías) | 96.5 % de los quioscos vendía productos de panadería (galletas, queques, tortas); 80 % de esos (44 de 55) tenía al menos un producto con octógono (≈77 % de los 57 quioscos, cálculo mío); 89.5 % de todos los quioscos tenía al menos un producto con octógono; 96.5 % vendía procesados o ultraprocesados; 57.9 % tenía publicidad de ultraprocesados. Los autores concluyen que se incumple la norma que prohíbe vender alimentos con octógonos dentro y fuera de los colegios. El artículo no separa resultados por colegio público o privado | Meza-Hernández M, Yabiku-Soto K, Diez-Canseco F. Rev Peru Med Exp Salud Publica 2026;43(1):41-50. https://pmc.ncbi.nlm.nih.gov/articles/PMC13245979/ | Trabajo de campo mar-may 2023; publicado mar-2026 | Alta |
| Mismo estudio, vendedores ambulantes (n = 148, 41 colegios) | 77.7 % vendía ultraprocesados; 48.6 % al menos un producto con octógono; panadería fue la categoría más frecuente (50.7 %) | Ídem | 2023 | Alta |
| Estudio exploratorio de 15 colegios de 10 distritos de Lima (9 públicos, 6 privados) | 100 % de los colegios ofrecía ultraprocesados; 73.3 % (11 de 15) vendía al menos un producto con octógono; **galletas y bizcochos en 15 de 15 colegios (9 públicos, 6 privados)** y con octógono en 6 de 15 (3 públicos y 3 privados); 60 % tenía publicidad. «los colegios evaluados no cumplían la regulación vigente». Las diferencias entre públicos y privados fueron pequeñas | Saavedra-Garcia L et al. Rev Peru Med Exp Salud Publica 2020;37(4):726-32. http://www.scielo.org.pe/scielo.php?script=sci_arttext&pid=S1726-46342020000400726 | Campo nov-dic 2019 | Alta |
| Indecopi, Defensoría, MINSA: medición del cumplimiento por colegio privado | **No encontrado.** Indecopi sancionó a colegios privados por cobros y matrícula (637 colegios, ene-2024 a nov-2025), no por venta de alimentos | Andina / Caretas (extractos) | 2025 | Baja |

### 4. Productos que se anuncian como «sin octógonos» o con endulzante natural

| Producto | Canal | Gramaje | Precio (S/) | Por 100 g (S/) | Endulzante | Octógonos | URL | Fecha | Confianza |
|---|---|---|---|---|---|---|---|---|---|
| Keke de Plátano La Purita (vegano, congelado) | lapurita.com | 770 g | 19.17 (lista 25.56) | 2.49 | Panela orgánica y plátano | No declara «sin octógonos»; azúcar por 100 g: n.e. | https://www.lapurita.com/ (producto «Keke de Plátano, 770g»; la URL directa dio 404) | 18-nov-2026 | Alta para precio y endulzante |
| Keke de Chocolate Oscuro La Purita | lapurita.com | 770 g (peso de envío 799 g) | 19.17 | 2.49 | Panela orgánica, plátano | Ídem | https://www.lapurita.com/ | 18-nov-2026 | Alta |
| Galletas de avena La Purita (frasco 130 g) | lapurita.com | 130 g | 17.03 | 13.10 | Panela orgánica | Ídem | https://www.lapurita.com/ | 18-nov-2026 | Alta |
| Muffin La Casa Marimiel (4 sabores) | Plaza Vea | 60 g | 6.90 | 11.50 | Stevia (SIN 960); harinas integral y de quinua | Sin campo | ver tabla 1 | 18-nov-2026 | Alta |

La Purita (frejoles, panela, cacao) y la norma: la RM 195-2019 pide alimentos sin aditivos «edulcorantes»; la panela y la fruta no son edulcorantes en el sentido de aditivo, pero la panela es azúcar y cuenta como azúcar total (umbral de octógono: 10 g por 100 g). Ningún producto de esta tabla declara azúcar total por 100 g.

### 5. Brownies artesanales de pastelería y cafetería (Lima)

Ninguna de las pastelerías consultadas publica el gramaje del brownie individual; por eso el precio por 100 g es «no encontrado» en todas.

| Producto | Canal | Tamaño publicado | Precio (S/) | Por 100 g | Endulzante | Octógonos | URL | Fecha | Confianza |
|---|---|---|---|---|---|---|---|---|---|
| Brownie, La Mora | lamorapasteleria.com | n.e. | 10.50 (en oferta) | n.e. | n.e. | n.e. | https://lamorapasteleria.com/products/brownie | 18-nov-2026 | Alta el precio |
| Brownie Bites x9 / x27, La Mora (también con frambuesa x9: 16.00) | lamorapasteleria.com | n.e. | 13.00 / 30.00 (1.44 / 1.11 por pieza, cálculo propio) | n.e. | n.e. | n.e. | https://lamorapasteleria.com/products/brownies-9-unid | 18-nov-2026 | Alta el precio |
| Brownie clásico / expreso, Ale Cendra (Miraflores) | Rappi | n.e. | 11.25 / 12.50 | n.e. | n.e. | n.e. | https://www.rappi.com.pe/restaurantes/79346-ale-cendra-pasteleria-clasica | 18-nov-2026 | Media (precio de Rappi) |
| Brownies Hey Brownie (Cercado), 6 sabores | Rappi | 7 x 7 cm | 15.00 c/u | n.e. | n.e. | n.e. | https://www.rappi.com.pe/restaurantes/18898-hey-brownie | 18-nov-2026 | Media |
| Brownie clásico, Ferrero, Oreo, etc., The Chocolate Brownie (Higuereta) | Rappi | n.e. | 9.50 c/u (precio con descuento en la página) | n.e. | n.e. | n.e. | https://www.rappi.com.pe/tiendas/71843-thechocolatebrownie-mt-enc | 18-nov-2026 | Media |
| Caja de 6 brownies tradicionales, Sienna Bakery (La Botánika) | la-botanika.com | 6 x 6 cm c/u | 55.00 (9.17 c/u, cálculo propio) | n.e. | n.e. | n.e. | https://la-botanika.com/products/brownies-sienna-bakery | 18-nov-2026 | Alta el precio |
| Pomo Brownie Bites (18 mini brownies de chocolate bitter), Dolce Capriccio | dolcecapriccio.pe | n.e. | 25.00 (1.39 por pieza, cálculo propio) | n.e. | n.e. | n.e. | https://dolcecapriccio.pe/producto/pomo-brownie-bites/ | 18-nov-2026 | Alta el precio |
| Brownie (bandeja), CheesecakeToGo | cheesecaketogo.pe | n.e. | 61.90 a 84.90 (molde mediano o grande) | n.e. | n.e. | n.e. | https://cheesecaketogo.pe/producto/brownie/ | 18-nov-2026 | Alta; no es unidad |
| Brownies de Rosa Pastel (clásico / Nutella) | Perú21 (nota) | n.e. | 15.90 / 17.90 | n.e. | n.e. | n.e. | https://peru21.pe/colab21/una-cafeteria-enfocada-en-la-nutricion-femenina/ | fecha n.e. | Baja (nota sin fecha, no usada en la mediana) |

Referencia con gramaje (de la sección «Brownies de referencia», supermercado, no pastelería): Ana Avellana 135 g a S/10.50 = S/7.78 por 100 g; Tana con maní 320 g a S/28.90 = S/9.03; D'Abuelas bites 180 g a S/13.90 = S/7.72. La mediana de los 7 brownies con gramaje de esa sección es S/7.78 por 100 g.

Qué distingue a uno artesano de uno envasado, según las fichas: los brownies envasados (Bimbo Nutra Bien) declaran azúcar como primer ingrediente, aceite vegetal, glucosa, humectantes, conservantes (SIN 202 y SIN 282), emulsionantes y saborizantes artificiales, y llevan etiqueta de conservación a temperatura ambiente. Las pastelerías consultadas (La Mora, Ale Cendra, Hey Brownie, Sienna) no publican ingredientes, vida útil ni conservación en la ficha; Dolce Capriccio (Pomo Brownie Bites) remite a una «cartilla de alérgenos» (PDF no leído). Solo Fika publica ingredientes de un brownie (ver sección 6). Vida útil: no encontrada en ninguna ficha de pastelería.

### 6. Brownies saludables, por unidad o en caja (Perú)

| Producto | Canal | Gramaje | Unidades | Precio (S/) | Por unidad (S/) | Por 100 g (S/) | Endulzante | Octógonos | URL | Fecha | Confianza |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Brownies Sin Azúcar «No + Sellos» (Molinos del Mundo), sin gluten | Wong | 200 g | 5 | 19.90 | 3.98 (≈40 g c/u, cálculo propio) | 9.95 | n.e. («sin azúcar añadida») | «No + Sellos» en el nombre | https://www.wong.pe/brownies-sin-az-car-no-sellos-5un-1075175/p | 18-nov-2026 | Alta precio y gramaje; baja en endulzante |
| Brownie de Fika, sin azúcar | fika.pe | 70 g en el título; 55 g en la URL y en el peso de envío | 1 | 14.00 | 14.00 | 20.00 (con 70 g); 25.45 (con 55 g) | **Alulosa**; chocolate con pasta y manteca de cacao, ghee, harina de quinua, huevos, sal de Maras, vainilla | **«Sin octógonos»** (declarado en la ficha) | https://www.fika.pe/products/brownie-55g | 18-nov-2026 | Alta ingredientes y precio; media gramaje |
| Double Chocolate Dream, Protein Brownie, Justines | Lima Orgánica | 64 g | 1 | 12.00 | 12.00 | 18.75 | n.e. | n.e. | https://www.limaorganica.pe/tienda/double-chocolate-dream-protein-brownie-64-g-justines/ | 18-nov-2026 | Alta precio; sin ingredientes |
| Brownies saludables y veganos, Arilú | Lima Orgánica | n.e. | 6 | 80.00 | 13.33 | n.e. | Panela; chocolate orgánico 67 %; harina de garbanzo y de almendras | n.e. | https://www.limaorganica.pe/tienda/brownies-saludables-y-veganos-arilu/ | 18-nov-2026 | Alta |
| Brownies Keto (low carb), Arilú | Lima Orgánica | n.e. | 6 | 90.00 | 15.00 | n.e. | **Lakanto** (la ficha solo dice «Lakanto»; por lo general es fruto del monje con eritritol, no verificado aquí) y chocolate al 99 % con stevia | n.e. | https://www.limaorganica.pe/tienda/brownies-keto-low-carb-arilu/ | 18-nov-2026 | Alta |
| Brownies (pack de 8), La Purita; vegano, congelado, solo Lima | lapurita.com | n.e. | 8 | 12.04 (lista 16.05) | 1.51 | n.e. | **Panela** (frejoles, cacao, girasol, linaza) | No declara «sin octógonos» | https://www.lapurita.com/products/brownies-x-8-unds | 18-nov-2026 | Alta precio |
| Protein Brownie MyProtein x12 («hasta 75 % menos azúcar») | Plaza Vea | n.e. | 12 | 139.00 (1 en stock) | 11.58 | n.e. | n.e. | n.e. | https://www.plazavea.com.pe/protein-brownie-chocolate-12-und-myprotein-101483794/p | 18-nov-2026 | Media |
| Brownies sin azúcar y sin gluten, Vitalife (Sumer Labs); no disponible | sumerlabs.com | n.e. | 4 | 28.00 | 7.00 | n.e. | No dice (almendra, avena, cacao 80 %) | Sin mención | https://sumerlabs.com/catalogo/vitalife-raquelmarquina79g/producto/brownies-saludables-smr-1d03f1db87f04e704faa5cbae2d65e249b9cdb81 | n.e. | Baja (sin fecha, agotado) |
| Brownie de lima y limón, Sixpack Postres | Wix | 5.5 x 5.5 cm | 5 | 25.00 | 5.00 | n.e. | **Stevia** (harina de coco, claras) | n.e. | https://sixpackpostres.wixsite.com/sixpackpostres/product-page/brownie-de-lima-limon | n.e. | Baja (sin fecha) |

Contexto de endulzantes: Dyfferent (barra de cereal «Chocolate Brownie», 175 a 210 g) usa «Dyfferent sweets» con eritritol, alulosa y fruto del monje (ficha Plaza Vea).

No encontrados con datos: Armónica, Sanísimo, La Nevera Fit, Vida Fit, Punto Orgánico, Flora y Fauna, Quinoa Brownie, The Protein Bakery, Fitness Bakery, Dulce Fit, Mamalama (solo tiene barras de quinua en Wong, no brownies). Wasi Organics: la búsqueda «brownie» en su web no dio resultados. Los dominios que probé no abrieron o no existen.

### No encontrado

- Carta, precios, gramaje, endulzante y operador (concesionario) de los quioscos o cafeterías de Innova Schools Perú; tampoco para Markham, Newton, San Silvestre, Pamer, Trilce, Saco Oliveros y Santa María, ni para Sodexo, Aramark, APC o Liderman Alimentos como operadores de colegios en Lima.
- Una lista pública de queques, brownies o postres que se vendan de verdad en quioscos de colegios privados de Lima, con marca y precio.
- Qué ficha técnica o requisitos exige un colegio o concesionario a su proveedor de postres más allá de lo ya citado (RM 033-2020, registro sanitario, sin octógonos).
- Una medición de Indecopi, MINSA o Defensoría sobre cumplimiento en colegios privados; el desglose público y privado del estudio de 2023.
- Gramaje del brownie individual de La Mora, Ale Cendra, Hey Brownie, Dolce Capriccio, The Chocolate Brownie y Sienna Bakery; por tanto, precio por 100 g de brownie de pastelería.
- Precio de brownie en San Antonio (el sitio sanantonio.com.pe es una agroexportadora, no la pastelería), María Almenara (la web no lista brownies), Don Mamino, Pastelería Lima, Starbucks, Juan Valdez, Tostaduría Bisetti, Maga y Buenavista; PedidosYa dio 403 y no se pudo ver.
- Vida útil y conservación del brownie de cada pastelería; ingredientes de Justines, de No + Sellos (solo se sabe: sin azúcar añadida, sin gluten, bizcocho con cacao) y de La Mora.
- Azúcar total por 100 g de cualquier brownie o queque saludable publicado en Perú (solo hay azúcares por porción con porción desconocida).
- Queques de Vida Sana, Renacer, Kiwicha pop e Inka Crops en las tres cadenas consultadas.

### Cierre

1. **Con qué se endulzan los queques que de verdad están en los quioscos y si cumplen la norma:** no hay lista pública de lo que se vende en quioscos privados de Lima; los estudios de 2019 y 2023 muestran que galletas, queques y bizcochos están en casi todos los quioscos (15 de 15 colegios en 2019; 96.5 % de 57 quioscos en 2023) y que el 40 % de los colegios en 2019 y ≈77 % de los quioscos en 2023 vendían panadería con octógono. Los queques industriales equivalentes (Bimbo, Bell's, Costa, PYC, Field) se endulzan con azúcar y llevan octógono de azúcar o grasas saturadas; incumplen la norma. Solo hay opciones con stevia (muffin Marimiel) o panela (La Purita) fuera del canal escolar.
2. **Innova Schools:** no encontrado. Su web peruana no menciona quiosco, cafetería ni operador; solo hay un servicio «Innova Eats» en la web de Colombia, que no aplica a Lima.
3. **Brownies artesanales:** por unidad, rango S/9.17 a S/15.00 y mediana S/10.88 (6 precios: Sienna, The Chocolate Brownie, La Mora, Ale Cendra x2, Hey Brownie; con Rosa Pastel, sin fecha, la mediana sube a S/11.25). Por 100 g: no encontrado, porque ninguna pastelería publica gramaje; la referencia de supermercado con gramaje es mediana S/7.78 (rango S/5.50 a S/20.60). El «S/10 por 200 g» de Carlos no tiene respaldo publicado; el único brownie de 200 g con precio es el «No + Sellos» de Wong, a S/19.90.
4. **Brownies saludables:** por unidad, rango S/1.51 a S/15.00 y mediana S/12.00 (7 productos con fecha de hoy: La Purita 1.51, No + Sellos 3.98, MyProtein 11.58, Justines 12.00, Arilú 13.33, Fika 14.00, Keto 15.00); con Vitalife y Sixpack, sin fecha, la mediana es S/11.58. Por 100 g solo hay 3 datos: S/9.95 (No + Sellos), S/18.75 (Justines) y S/20.00 (Fika, con 70 g; S/25.45 con 55 g); mediana S/18.75.
5. **Un brownie de 35 g (con IGV):** saludable a la mediana de S/18.75 por 100 g = S/6.56 (S/5.56 sin IGV; entre S/3.48 y S/7.00 con el rango de 9.95 a 20.00). Artesanal: no se puede calcular a la mediana porque no hay S/ por 100 g publicado; como referencia, a la mediana de supermercado de S/7.78 por 100 g saldría S/2.72, y la mediana de S/10.88 por unidad de pastelería no tiene gramaje que permita compararla.

## Stands en centros comerciales y carritos junto a supermercados

Consulta del 19-nov-2026. No repite lo ya citado arriba (módulos de S/500 a US$2,500 de Gestión 2023 y la nota de Líbero de 2-dic-2022 sobre un módulo de 4 m²; MegaPlaza sin tarifa). Donde dice «no encontrado», no hay dato público leído; no se estimó nada.

### A. Stands, islas y módulos en centros comerciales

| Lugar o dato | Valor | A qué se refiere | Fuente | URL | Fecha | Confianza |
|---|---|---|---|---|---|---|
| Lima, mall de gran circulación | «Unos S/3,000 por m²» (Percy Vigil, exgerente de Mega Plaza). El texto no dice si es por mes | Estimación de un experto para módulos en Lima | Gestión | https://gestion.pe/economia/mercados/alquiler-de-modulos-en-centros-comerciales-va-en-aumento-precios-y-espacio-ferias-retail-percy-vigil-jose-antonio-contreras-carlos-neuhaus-mega-plaza-open-plaza-accep-asociacion-de-centros-comerciales-y-de-entretenimiento-del-peru-noticia/ | 15-sep-2023 | Baja-media (opinión de un exejecutivo; no dice el periodo; con 4 m² daría más que el tope de S/9,250 del propio artículo) |
| Mall pequeño de provincia | ≈ S/250 por m² (Vigil) | Referencia, no es Lima | Gestión (misma nota) | ídem | 15-sep-2023 | Baja |
| Tamaño y plazo | Clásico 2x2 m (4 m²); también ≤ 1 m² y carretillas en ferias; plazo desde un día hasta varios años | Formato de módulo | Gestión (misma nota) | ídem | 15-sep-2023 | Media |
| Ferias cortas (fin de semana) | Rentas «bajas»; sin monto | Sirven para medir el mercado | Gestión (misma nota) | ídem | 15-sep-2023 | Media; sin cifra |
| Quién lo administra y qué revisa | El mall revisa experiencia y concepto de negocio y a veces rechaza; en Open Plaza a veces el mall pone el módulo y otras lo paga el locatario, que necesita licencia municipal. Cosméticos, accesorios y tecnología se colocan más fácil que ropa | Open Plaza y malls en general | Gestión (misma nota) | ídem | 15-sep-2023 | Media |
| Open Plaza | ≈ 300 módulos en el país (antes de la pandemia, 40 a 50); programa «Open Emerge» para emprendedores desde 2021. Bases, costo y cómo postular: no leídos | Open Plaza | Gestión (misma nota) | ídem | 15-sep-2023 | Media; sin condiciones |
| Zonas con más interés en Lima | San Martín de Porres, Surco y San Miguel | Demanda de módulos | Gestión (misma nota) | ídem | 15-sep-2023 | Media |
| Plaza San Miguel | 130,000 m² arrendables; vacancia cercana al 2%; el CEO dice que no hay más disponibilidad | Difícil conseguir espacio fijo | Perú Retail (resultado de búsqueda; no abrí la nota) | https://www.peru-retail.com/plaza-san-miguel-anuncia-renovada-oferta-gastronomica-y-de-entretenimiento/ | s. f. | Baja (extracto) |
| Real Plaza, «La Placita del Emprendimiento» | Feria en Centro Cívico, Puruchuco y Cusco (42 emprendedores; meta de más de 100); se postula y se califica por categoría; info en realplaza.pe/laplacita/. Costo y requisitos: no publicados | Real Plaza Puruchuco (y Centro Cívico) | Perú Retail | https://www.peru-retail.com/emprendedores-ofrecen-sus-productos-en-los-malls-del-real-plaza/ | 19-abr-2021 | Media para el hecho; datos de hace 5 años |
| Real Plaza Salaverry | 40 módulos para emprendedores que rotan entre malls (Primavera, Guardia Civil, Centro Cívico). Costo: no publicado | Real Plaza | Perú Retail (resultado de búsqueda; no abrí la nota) | https://www.peru-retail.com/?p=159013 | s. f. | Baja |
| Plaza Norte, Mall Aventura, Mall del Sur: ejemplo de renta | US$30 por m² de renta fija; renta variable 3% a 8% de ventas; fondo de promoción 10% de la renta fija; gastos comunes ≈ US$10 por m²; garantía 2 a 3 rentas. El artículo cita esos malls solo como ejemplos y dice que los montos varían según el mall y la negociación | Tienda de 50 m², no módulo; cifra de un tiktoker | Líbero | https://libero.pe/ocio/curiosidades/2022/11/27/cuanto-cuesta-alquilar-espacio-en-centro-comercial-como-mall-sur-plaza-norte-megaplaza-centro-civicio-alquiler-puesto-espacio-metros-cuadrados-renta-pe-peru-90578 | 27-nov-2022 | Baja; contradice los US$150-400 por m² de la otra nota de Líbero |
| Caso de isla en Jockey Plaza | Isla de ≈ 20 m², «grab and go» (marca de postres de Alessandra Penny). No publica renta, inversión ni ventas | Jockey Plaza | Gestión | https://gestion.pe/economia/empresas/alessandra-penny-y-la-expansion-de-su-marca-tras-el-boom-de-los-cuchareables-noticia/ | 10-ene-2026 | Alta para el hecho; sin cifras de costo |
| Requisitos (RUC, registro sanitario, póliza, garantía, medidas) por mall | Solo se lee: licencia municipal si el locatario instala su módulo, y garantía de 2 a 3 rentas (ejemplo de un tiktoker). Nada oficial de los malls | General | Gestión; Líbero | (arriba) | 2022-2023 | Baja |

### B. Carritos e islas junto a supermercados, impulso y degustación

| Lugar o dato | Valor | A qué se refiere | Fuente | URL | Fecha | Confianza |
|---|---|---|---|---|---|---|
| Sueldo de una impulsadora o degustadora en supermercado | Ofertas de S/80 a S/90 por día (algunas con S/200 de comisión); piden experiencia de 3 meses y a veces carné de manipulador | Lo que paga un empleador a la persona, no lo que cobra el supermercado | Computrabajo Perú (avisos) | https://pe.computrabajo.com/ofertas-de-trabajo/oferta-de-trabajo-de-impulsadora-degustadora-fines-de-semana-s-90-por-dia-autoservicios-o-supermercados-lima-con-o-sin-experiencia-en-lima-68ED4198A6551BF661373E686DCF3405 | s. f. (avisos vigentes en la búsqueda del 19-nov-2026) | Media para el sueldo; no responde el costo de una degustación |
| Condiciones a proveedores | Una nota de Perú Retail habla de «rebate» (comisión sobre compras netas, negociada) y cobro por publicidad en volantes. Nada específico de degustación | Cadenas en general | Perú Retail (extracto) | https://www.peru-retail.com/tag/proveedores/ | s. f. | Baja |
| Tottus y pymes | Pago a menos de 30 días a proveedores pyme calificados; no detalla registro | Tottus | Perú Retail (extracto) | https://www.peru-retail.com/peru-tottus-apoyara-a-pymes-peruanas/ | 2021 | Baja |
| Surco, comercio ambulatorio | Ordenanza 707-MSS: autorización temporal solo para helados, emoliente, bebidas tradicionales y canillitas; persona natural; vigencia 1 año; personal e intransferible; ubicación y giro fijos; evaluación previa con silencio negativo; renovar 30 días antes. No se lee tasa. **No incluye snacks envasados** | Vía pública en Surco | Gestión | https://gestion.pe/peru/municipalidad-de-surco-regula-el-comercio-ambulatorio-en-el-distrito-que-se-dispone-noticia/ | 19-ago-2024 | Alta para el texto de la nota |
| Los Olivos, comercio ambulatorio | Ordenanza 404-CDLO (4-dic-2014): alcance a ambulantes con al menos 4 años en el distrito, empadronados. Giros, tasa y zonas prohibidas: no leídos (texto truncado) | Vía pública en Los Olivos | vLex | https://vlex.com.pe/vid/ordenanza-n-404-cdlo-549741458 | 18-dic-2014 | Media; norma vieja, puede estar modificada |
| San Miguel | Ordenanza 282-MDSM (25-mar-2015) regula el comercio de personas naturales en espacios públicos autorizados; requisitos, giros y tasa detrás de pago | Vía pública en San Miguel | vLex | https://vlex.com.pe/vid/ordenanza-n-282-mdsm-568146134 | 23-abr-2015 | Baja para requisitos |
| San Juan de Lurigancho | Los derechos de trámite se ratificaron por Acuerdo de Concejo 491 (28-nov-2023), Ordenanza 444-MDSJL; no se leyó la línea de comercio ambulatorio | SJL | vLex | https://vlex.com.pe/vid/acuerdo-n-491-ratifican-980993391 | 28-nov-2023 | Baja |

### C. Costo de un carrito, módulo o vitrina

| Lugar o dato | Valor | A qué se refiere | Fuente | URL | Fecha | Confianza |
|---|---|---|---|---|---|---|
| Vitrina mostrador Cairo, 1 cajón (TU MESITA) | S/889.90 (antes S/1,430) | Vitrina pequeña de venta online; sin medidas en la ficha | Falabella Perú | https://www.falabella.com.pe/falabella-pe/shop/vitrina-mostrador | 19-nov-2026 | Media (precio de lista; no es mueble de feria) |
| Mueble mostrador aparador de melamina (Pelikano) | S/2,999 (la búsqueda indicó S/2,899 con descuento) | Mostrador de melamina de tienda | Falabella Perú | ídem | 19-nov-2026 | Media |
| Carrito o isla fabricado a medida en Lima (1-2 m²) | No encontrado | n. a. | n. a. | n. a. | n. a. | n. a. |

### D. Ritmo de venta

| Lugar o dato | Valor | A qué se refiere | Fuente | URL | Fecha | Confianza |
|---|---|---|---|---|---|---|
| Unidades por día de un stand o carrito de snacks en un mall de Lima | No encontrado | n. a. | n. a. | n. a. | n. a. | n. a. |
| María Almenara (venta directa) | S/500 a 600 diarios vendiendo brownies, alfajores y dulces en bicicleta a empresas; no es un mall | Referencia indirecta de venta diaria de postres | Perú Retail (resultado de búsqueda; no abrí la nota) | https://www.peru-retail.com/peru-maria-almenara-abrio-las-puertas-de-su-segunda-pasteleria/ | s. f. | Baja |

### No encontrado

- Tarifa por día, fin de semana o mes de módulos o ferias en Plaza San Miguel, Real Plaza Salaverry, Plaza Norte, MegaPlaza, Mall Aventura, Real Plaza Puruchuco, Open Plaza, Mall del Sur, Plaza Lima Sur y Jockey Plaza.
- Bases, costo y fecha de convocatorias vigentes (Open Emerge, La Placita, Emprende Retail) y un canal de postulación actual por mall.
- Requisitos formales de cada mall (RUC, registro sanitario, póliza, garantía, medidas) para un módulo de alimentos.
- Espacios para carritos en la entrada o galería de Plaza Vea, Tottus, Metro, Wong y Makro, y su costo.
- Costo por día de una degustación para el proveedor y requisitos de registro como proveedor en esas cadenas.
- Tasa y requisitos de comercio en vía pública en Los Olivos, San Miguel, Independencia y SJL; y si se permite vender alimentos envasados (en Surco, por el texto de la nota, no).
- Precio de fabricar o comprar un carrito, exhibidor rodante o isla de 1 a 2 m² en Lima.
- Unidades vendidas por día en un stand o carrito de snacks o postres en un mall de Lima.

### Cierre

1. **Costo mensual de un stand en un mall de zona B:** no encontrado por mall. Solo hay el rango general de prensa de S/500 a US$2,500 (Gestión, 2023) y la opinión de unos S/3,000 por m² en un mall de gran circulación, sin periodo. No sirve para presupuestar; hay que pedir cotización.
2. **Carrito o isla junto a supermercado:** no hay opción documentada. En vía pública, Surco solo autoriza helados, emoliente y bebidas, no snacks envasados; la tasa no se encontró. Lo único con costo leído es la degustación con persona propia, de S/80 a S/90 por día de sueldo, que no incluye lo que cobre la cadena.
3. **Carrito propio:** no encontrado para uno a medida; la referencia más cercana es una vitrina de tienda de S/889.90 a S/2,999 (Falabella, 19-nov-2026), sin garantía de que sirva para un mall.
4. **Ritmo de venta:** no encontrado; solo se sabe que una isla de postres de 20 m² en Jockey Plaza tuvo «impacto inmediato» sin cifras.
