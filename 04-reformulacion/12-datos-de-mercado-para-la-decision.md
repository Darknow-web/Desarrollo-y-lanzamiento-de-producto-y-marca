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
