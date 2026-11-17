# Base de evidencia para 380 perfiles sintéticos NSE A/B de Lima (AndiBite)

Fecha de la búsqueda: 17 de noviembre de 2026. Regla de trabajo: lo que no se encontró se dice «no encontrado»; los pesos que no vienen de un dato se marcan «supuesto».
Confianza: **alta** = leí la fuente primaria y la cifra está tal cual; **media** = fuente primaria leída solo en parte, o prensa que cita a la fuente, o cifra de otra población cercana; **baja** = lectura visual de un gráfico, fuente comercial sin metodología o dato antiguo.

## 0. Verificación de lo que ya teníamos (HECHOS_v7)

| Dato del HECHOS_v7 | Resultado | Fuente y URL |
|---|---|---|
| Lima Metropolitana APEIM 2025: A 2.6 %, B 18.4 % (A1 0.3, A2 2.3, B1 4.9, B2 13.5); 3,362,157 hogares | Confirmado. Útil: en Lima A+B = 21.0 %; A es 12 % de A+B, B1 23 %, B2 64 % | APEIM, Síntesis NSE 2025, láminas 14: https://apeim.com.pe/wp-content/uploads/2025/12/Sintesis-Niveles-socioeconomicos-2025.pdf |
| Zona 7: 20.2 % A y 51.4 % B; zona 6: 11.8 % A y 51.7 % B (APEIM 2025) | **No verificable en público.** La síntesis 2025 no trae la tabla por zonas (probablemente está en el dashboard con login). Lo que sí está publicado (APEIM 2023, base ENAHO 2022): zona 7 = 28.7 % A y 47.2 % B (n=299, error 5.7 %); zona 6 = 14.6 % A y 56.9 % B (n=198, error 7.0 %). La caída de A en zona 7 (28.7 a 20.2) es grande para una muestra tan chica: citar con cuidado | APEIM Informe 2023-2024, lámina 17: https://apeim.com.pe/wp-content/uploads/2024/01/APEIM-Informe-de-Niveles-Socioeconomicos-2023-2024-Version-WEB.pdf |
| Ingreso del hogar A S/14,584, B S/7,787 (APEIM 2025) | **No verificable en público** (en la síntesis 2025 el ingreso está en gráficos sin cifras). Referencia publicada: 2023 (ENAHO 2022) A S/13,008, B S/6,754, gasto A S/7,683, B S/4,675 | APEIM 2023-2024, lámina 18 (mismo PDF) |
| Anemia 6-35 meses Lima Metropolitana 24.0 % (ENDES 2024) | Confirmado (IC 95 %: 20.8 a 27.2; n=724 sin ponderar; criterio OMS 2024 / RM 251-2024-MINSA). Con el criterio anterior (RM 363-2022) el valor es 32.9 % | INEI ENDES 2024, Cuadro 6B y cap. 9: https://proyectos.inei.gob.pe/endes/2024/ppr2/indicadores_de_resultados_de_los_programas_presupuestales_endes_2024.pdf y https://proyectos.inei.gob.pe/endes/2024/departamentales/Endes15/pdf/Cap09.pdf |
| Anemia quintil superior 22.8 % (menores de 3 años) | Confirmado, pero es **nacional** (quintil superior de bienestar de todo el Perú, no Lima ni NSE A/B): IC 95 % 19.3 a 26.2; n=823; criterio OMS 2024. Con criterio anterior: 31.1 % | Mismo PDF, Cuadros 6 y 6B |
| INS-CENAN SIEN-HIS 2025, 15.5 % en niños de 5 a 11 | **No pude verificar el 15.5 %.** El INS (vía El Peruano, 19-02-2026) dice «uno de cada cinco» (~20 %) en enero-septiembre 2025, sobre 1,081,300 niños de 5 a 11; Lima Este entre las zonas más altas. El PDF de la infografía del INS dio error 503 | https://elperuano.pe/noticia/289556-minsa-advierte-que-la-anemia-y-el-exceso-de-peso-afectan-a-miles-de-escolares-en-el-pais |
| «83 % cambia su compra por los octógonos (Ipsos 2025)» | Confirmado como suma de 33 % impacto medio + 28 % grande + 22 % bajo = 83 %; 17 % dice que no impacta. Base: Ipsos, nacional (no se publica la base ni el corte por NSE); publicado 21-02-2025. Es «algún impacto», no «cambia toda su compra» | https://www.ipsos.com/es-pe/83-considera-que-los-octogonos-tienen-impacto-en-sus-compras |
| «42 % desconfía de lo envasado (Kantar 2025)» | No lo busqué por separado; no verificado | n. d. |
| «Escolares atendidos por MINSA 22.5 %» | No encontrado | n. d. |
| Nombres «Lima Top» (zona 7) y «Lima Moderna» (zona 6) | Los distritos coinciden con las zonas 6 y 7 de APEIM 2023, pero esos dos nombres no aparecen en el PDF de APEIM; en Ipsos «Lima Moderna» es una etiqueta antigua (2013). Citar como «zona 6 / zona 7 de APEIM» | ver tema 2 |

## 1. Composición del hogar A y B en Lima

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Distribución de hogares por estrato | A1 0.3 %, A2 2.3 %, B1 4.9 %, B2 13.5 % (A 2.6 %, B 18.4 %) | Hogares de Lima Metropolitana | APEIM | 2025 (ENAHO 2024) | https://apeim.com.pe/wp-content/uploads/2025/12/Sintesis-Niveles-socioeconomicos-2025.pdf | Alta |
| Miembros por hogar | A 3.1; B 3.7 | Hogares de Lima Metropolitana | Ipsos Perú con ENAHO 2019 y fórmula APEIM 2020 | 2020 (dato 2019) | https://www.ipsos.com/sites/default/files/ct/publication/documents/2021-01/nse_2020_v2.pdf | Media (dato antiguo, no separa B1 y B2) |
| Tenencia de computadora | A 96 %; B 89 % | Hogares de Lima Metropolitana | Ipsos / ENAHO 2019 | 2020 | mismo | Media |
| Fecundidad (TGF) | 1.22 hijos por mujer (promedio de los 3 años previos) | Mujeres de 15 a 49, Lima Metropolitana | INEI ENDES 2024 | 2024 | https://proyectos.inei.gob.pe/endes/2024/departamentales/Endes15/pdf/Lima_Metropolitana.pdf | Alta (todas las mujeres, no solo A/B ni solo madres) |
| Años de estudio de las mujeres | Mediana 13.2 años en el quintil superior de riqueza (10.2 en el inferior) | Mujeres de 15 a 49, Lima Metropolitana | INEI ENDES 2024 | 2024 | mismo | Alta |
| Edad mediana a la primera unión | 24.2 años | Mujeres de 25 a 49, Lima Metropolitana (no por NSE) | INEI ENDES 2024 | 2024 | mismo | Alta |
| Madres en la PEA | 67.9 % | Madres de todo el Perú (no Lima, no A/B) | INEI citado por Andina | citado como 2024 | https://andina.pe/agencia/noticia-inei-conoce-cuantas-madres-hay-el-peru-que-laboran-y-cuantos-hijos-tienen-892063.aspx | Baja (la nota podría ser de otro año; revisar) |
| Hogar Lima Oeste (12 distritos: Barranco, Jesús María, La Molina, Lince, Magdalena, Miraflores, Pueblo Libre, San Borja, San Isidro, San Miguel, Surco, Surquillo) | Ingreso mensual promedio S/8,258; bancarización 93 %; conectividad 98 %; 52 % de trabajadores dependientes | Hogares de la zona (todos los NSE) | Ipsos Perfiles Zonales | 2025 (ENAHO 2023) | https://www.ipsos.com/sites/default/files/ct/publication/documents/2025-09/Perfiles%20Zonales%202025_V3.pdf | Media (zona Ipsos, no coincide exacto con zonas 6+7 de APEIM) |

Diferencias A / B1 / B2: solo hay diferencias publicadas entre A y B (tamaño del hogar, ingreso, gasto). **No encontré** educación y ocupación del jefe de hogar ni de la madre por A, B1 y B2 (la fórmula APEIM usa la educación del jefe, pero la tabla no es pública), ni % de madres que trabajan fuera por NSE, ni presencia de trabajadora del hogar o de abuelos por NSE, ni edad de los padres con hijos en primaria.

## 2. Distritos de las zonas 6 y 7 de APEIM

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Zona 6 | Jesús María, Lince, Pueblo Libre, Magdalena, San Miguel | Zonas APEIM | APEIM Informe 2023-2024, lámina 17 | 2023 | https://apeim.com.pe/wp-content/uploads/2024/01/APEIM-Informe-de-Niveles-Socioeconomicos-2023-2024-Version-WEB.pdf | Alta |
| Zona 7 | Miraflores, San Isidro, San Borja, Surco, La Molina | Zonas APEIM | mismo | 2023 | mismo | Alta |
| Zona 6, NSE por hogar | A 14.6 %, B 56.9 %, C 21.9 %, D 4.7 %, E 1.9 % (n=198, error 7.0 %) | Hogares de la zona | mismo | 2023 | mismo | Alta (muestra chica) |
| Zona 7, NSE por hogar | A 28.7 %, B 47.2 %, C 21.4 %, D 2.8 %, E 0.0 % (n=299, error 5.7 %) | Hogares de la zona | mismo | 2023 | mismo | Alta (muestra chica) |
| Otras zonas con B relevante | Zona 4 (Cercado, Rímac, Breña, La Victoria) B 21.6 %; zona 5 (Ate, Chaclacayo, Lurigancho, Santa Anita, San Luis, El Agustino) B 21.6 %; zona 8 (Surquillo, Barranco, Chorrillos, San Juan de Miraflores) B 23.6 %; zona 2 (Independencia, Los Olivos, San Martín de Porras) B 20.9 % | Hogares de la zona | mismo | 2023 | mismo | Alta |

**No encontrado:** reparto de hogares A y B **por distrito** (ni APEIM ni Ipsos lo publican abierto), número de hogares por zona 6 y 7, y las cifras APEIM 2025 por zona.

## 3. Gasto, ingreso y pensiones

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Ingreso familiar mensual | A S/13,008; B S/6,754 (C S/3,737) | Hogares Lima Metropolitana | APEIM | 2023 (ENAHO 2022) | PDF APEIM 2023-2024, lámina 18 | Alta |
| Gasto familiar mensual | A S/7,683; B S/4,675 | ídem | APEIM | 2023 | ídem | Alta |
| Alimentos dentro del hogar | A S/1,840; B S/1,601 al mes | ídem | APEIM | 2023 | ídem | Alta |
| Alimentos fuera del hogar | A S/226; B S/117 al mes | ídem | APEIM | 2023 | ídem | Alta |
| Educación | A S/855; B S/442 al mes por hogar (promedio de todo el hogar, incluye hogares sin hijos en colegio privado) | ídem | APEIM | 2023 | ídem | Alta (no es pensión) |
| Parte del ingreso que se gasta | A 53 % (47 % libre); B 65 % (35 % libre) | Hogares Lima Metropolitana | APEIM | 2025 | síntesis 2025, lámina 10 | Alta |
| Peso de alimentos en el gasto | A 24 %; B 34 % (2023). En 2025, lectura del gráfico: A ~29 %, B ~36 %; educación A ~14 %, B ~11 % | Lima Metropolitana | APEIM | 2023 / 2025 | ambos PDF | Alta (2023) / Baja (2025, lectura visual) |
| Pensión mensual por segmento de colegio | Económico S/300-500; medio S/700-1,200 (Surco, La Molina, Los Olivos); alto S/1,500-2,500 (Miraflores, San Isidro, San Borja); premium S/3,000-5,000. Promedio Lima S/900 | Colegios privados de Lima (muestra y método no declarados) | cuantomecuesta.com (cita Minedu, Indecopi) | abril 2026 | https://cuantomecuesta.com/pe/colegio-privado/ | Baja (la página se contradice: calculadora S/2,000 y S/4,000) |
| Pensiones de colegios top (casos) | San Silvestre (Miraflores) S/3,403-3,959; Peruano Británico (Surco) S/2,300-3,421; Markham S/2,950 según otra fuente comercial | Colegios nombrados | El Tiempo, nota de ago. 2025 | 2025 | https://eltiempo.pe/espectaculos/samahara-lobaton-pide-30-mil-soles-para-matricula-de-su-hija-cuales-son-los-colegios-mas-caros-de-lima-ru/ | Baja a media (prensa, no estudio) |
| Alza de pensiones | Colegios de Lima Metropolitana planeaban subir hasta 6.5 % en 2024 (encuesta GEF); el rubro educación empujó la inflación de marzo de 2025 | Colegios de Lima | La República / El Tiempo | 2024-2025 | https://larepublica.pe/economia/2024/04/01/pensiones-en-colegios-privados-subieron-mas-de-6-en-marzo-61805 | Media |
| Reglas | Los colegios privados solo pueden cobrar cuota de ingreso, matrícula y pensión | Todos | Indecopi vía La República | ene. 2025 | https://larepublica.pe/economia/2025/01/23/indecopi-responde-si-los-colegios-particulares-pueden-subir-las-pensiones-de-los-alumnos-por-el-inicio-de-clases-este-2025-en-peru-atmp-321540 | Media |

**No encontrado:** pensión promedio por distrito o por NSE con método publicado (Minedu-ESCALE no da pensiones), y porcentaje de matrícula primaria privada en Lima Metropolitana 2024 (las cifras halladas, 50 % y 75 %, eran de años y niveles distintos y se contradicen).

## 4. Quién decide y quién compra; dónde; frecuencia; precio

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Definición de «ama de casa» | Persona de 15 años o más que toma las decisiones cotidianas de compra del hogar (hombre o mujer) | Definición APEIM | APEIM | 2024 | PDF APEIM 2023-2024, lámina 4 | Alta |
| Canal por NSE | NSE A y B compran más en supermercados; los NSE bajos más en bodega; gasto de Lima en alimentos: ~57 % mercados, 18 % bodegas, 20 % supermercados (todos los NSE) | Amas de casa de Lima | Ipsos MKT Data Amas de Casa | 2010-2012 | https://www.ipsos.com/sites/default/files/2017-02/MKT_Data_Amas_de_Casa_2012.pdf | Baja (muy antiguo) |
| Promociones | A más de la mitad de las amas de casa le atrae más el 2x1 que los sorteos (solo 10 %) | Amas de casa (Perú urbano) | Ipsos | s. f. | https://www.ipsos.com/es-pe/node/425271 | Baja (año no confirmado) |
| Compra online | Expectativa para 2026: 80 % de compradores online NSE A/B dice que comprará más (63 % NSE C, 60 % NSE D); supermercados, farmacias y restaurantes tienen la mayor incidencia de compra | Internautas 18 a 70, NSE ABCD, nacional urbano, compradores online (n=800) | IAB Perú, Cyber Wow 2025 | 2025 (informe mar. 2026) | https://iabperu.com/wp-content/uploads/2026/03/Informe-Final-Expectativas-hacia-las-compras-Online-y-Cyber-Wow-2025.pdf | Media (leído de gráficos) |
| Lima en el e-commerce | ~70 % del volumen de ventas online; entregas fuera de Lima subieron (Lima 90 % en 2019, ~67 % en 2025) | Perú | CAPECE vía prensa | 2025-2026 | https://kom.pe/ecommerce-peru-2026-estadisticas/ | Baja a media (fuente secundaria) |

**No encontrado:** quién decide y quién compra el alimento del niño (mamá, papá, empleada) en NSE A/B de Lima; frecuencia de compra; peso de apps de delivery (Rappi, PedidosYa), tiendas saludables o bodega en A/B; sensibilidad al precio y uso de marcas propias por NSE. Los estudios Ipsos «Perfil del ama de casa» recientes y Kantar Worldpanel por NSE son de pago.

## 5. Lonchera escolar

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Frutas y verduras en la lonchera | 65 % de los hogares de Lima (nacional 6 de cada 10) | Hogares con hijos en edad escolar, Lima | Kantar | 2025 (13-03-2025) | https://www.kantar.com/latin-america/inspiracion/consumo-masivo/2025/tendencias-en-lonchera-escolar-en-peru | Alta (sin n ni NSE) |
| Agua | 53 % en Lima; 49 % nacional | ídem | Kantar | 2025 | mismo | Alta |
| Jugos o refrescos naturales | 36 % en Lima | ídem | Kantar | 2025 | mismo | Alta |
| Alimentos favoritos (nacional) | Sándwich de pollo 42 %; sándwich de queso o jamón 31 %; barras de cereal 27 % | Hogares peruanos | Kantar | 2022 | https://www.kantar.com/latin-america/inspiracion/consumidor/2022-pe-loncheras-escolares | Media (dato 2022) |
| Frutas y verduras, edición 2024 | 64 % «principal alimento»; 5 de cada 10 envían agua; en NSE E, 8 de cada 10 priorizan fruta | Hogares peruanos | Kantar | 2024 | https://www.kantar.com/latin-america/inspiracion/consumidor/loncheras-escolares-se-vuelven-mas-saludables-en-peru-en-2024 | Alta (el titular dice «6 de cada 10» y el texto 64 %) |
| Lonchera saludable según estudios académicos | Solo 5 % de escolares de primaria con lonchera saludable (criterio estricto); conocimiento de las madres: bajo 2.3 %, regular 50.4 %, alto 47.4 % | Estudios pequeños en colegios públicos o un colegio de Lima | Tesis y revista Nutr. Clín. Diet. Hosp. | 2024 | https://revista.nutricion.org/index.php/ncdh/article/download/560/418/5136 | Baja (muestras chicas, no A/B) |
| Meta nutricional | La lonchera debe aportar 10 a 15 % de las necesidades diarias de energía (CENAN) | Escolares | INS-CENAN vía estudio 2024 | 2024 | https://www.renc.es/imagenes/auxiliar/files/RENC-D-24-0042._Final.pdf | Media |
| Madres sin lonchera | Una quinta parte de las amas de casa con hijos escolares no manda lonchera | 589 amas de casa de Lima | Ipsos Apoyo | 2011 | https://www.ipsos.com/sites/default/files/2017-02/MKT_Data_Amas_de_casa_2011.pdf | Baja (muy antiguo) |

**No encontrado:** quién prepara la lonchera, tiempo de preparación, qué envasado compran, uso del quiosco y gasto en A/B de Lima; preocupaciones (azúcar, ultraprocesados, «no come») con cifras; ningún estudio de loncheras en Lima con corte por NSE A/B (los de Kantar no lo publican y los académicos son de colegios públicos o muestras chicas).

## 6. Etiquetas y alimentación saludable

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Impacto de octógonos en compras | Medio 33 % (dejó de comprar algunos), grande 28 % (casi todos), bajo 22 %, ninguno 17 % | Nacional (base y NSE no publicados) | Ipsos Perú | feb. 2025 | https://www.ipsos.com/es-pe/83-considera-que-los-octogonos-tienen-impacto-en-sus-compras | Media (la nota tiene cifras que no suman en otras preguntas) |
| Sello que más preocupa | Alto en azúcar 70 %; grasas saturadas 58 %; sodio 31 % (respuesta múltiple) | ídem | Ipsos | 2025 | mismo | Media |
| Conciencia del colorante rojo 3 | Lima 73 % sabe; interior 66 % | ídem | Ipsos | 2025 | mismo | Media |
| Antes de la ley | 84 % de limeños reduciría compras tras ver octógonos; 63 % no conocía el alcance (C 62 %, D 72 %; sin dato A/B) | Consumidores de Lima | Axer Consultores vía Perú Retail | 2019 | https://www.peru-retail.com/ley-octagonos-limenos-habitos-compra/ | Baja (antiguo, sin n) |

**No encontrado:** lectura de etiquetas por NSE, confianza en lo «saludable» envasado (el 42 % de Kantar no se pudo ubicar), moda de proteína o sin azúcar con cifras de Lima A/B.

## 7. Anemia y hierro

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Anemia por quintil (criterio OMS 2024) | Inferior 47.5 %; 2.º 37.2 %; medio 29.7 %; 4.º 24.5 %; superior 22.8 % (IC 19.3-26.2) | Niños de 6 a 35 meses, Perú | INEI ENDES 2024, Cuadro 6B | 2024 | https://proyectos.inei.gob.pe/endes/2024/ppr2/indicadores_de_resultados_de_los_programas_presupuestales_endes_2024.pdf | Alta |
| Por edad | 6-8 m 51.8 %; 9-11 m 51.8 %; 12-17 m 36.0 %; 18-23 m 25.4 %; 24-35 m 31.6 % | Niños de 6 a 35 meses, Perú | ENDES 2024, Cuadro 6.1B | 2024 | mismo | Alta |
| Por educación de la madre | Superior 27.7 %; secundaria 38.7 %; sin nivel o primaria 43.2 % | ídem | ENDES 2024, Cuadro 6B | 2024 | mismo | Alta |
| Lima Metropolitana | 24.0 % (2023: 27.0 %; 2022: 23.6 %) | ídem | ENDES 2024 | 2024 | mismo | Alta |
| Suplemento de hierro en últimos 7 días | Quintil superior 35.0 % (IC 30.7-39.3); total nacional 33.8 %; madres con educación superior 35.8 % | Niños de 6 a 35 meses, Perú | ENDES 2024, Cuadro 19 | 2024 | mismo | Alta |
| CRED completo para la edad | Quintil superior 16.3 % (nacional 28.9 %) | Menores de 36 meses | ENDES 2024, Cuadro 17 | 2024 | mismo | Media (mide el calendario del MINSA, el segmento A/B va al pediatra privado, por eso es bajo) |
| Anemia 5 a 11 años | «Uno de cada cinco» (~20 %), ene.-sep. 2025; 1,081,300 evaluados | Niños de 5 a 11, SIEN-HIS (establecimientos MINSA, no representativo de colegios privados) | INS vía El Peruano | 2026 | https://elperuano.pe/noticia/289556-minsa-advierte-que-la-anemia-y-el-exceso-de-peso-afectan-a-miles-de-escolares-en-el-pais | Media |

**No encontrado:** prevalencia de anemia en niños de 4 a 11 años de colegio privado o de NSE A/B de Lima (ENDES solo mide hasta 59 meses; SIEN-HIS es de la red MINSA); percepción de riesgo («¿es problema de otros?»); frecuencia de control pediátrico en privado; quién recomienda productos (pediatra, nutricionista, otras mamás, redes) con cifras.

## 8. Sangrecita y hierro hemo

**No encontrado** ningún dato de consumo, aceptación o rechazo de sangrecita por NSE, ni ENDES ni ENAHO la miden por separado. Hallazgos laterales:

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Barrera del sabor en suplementos | El sabor, el color y el olor del hierro en polvo aparecen como barrera en entrevistas con madres | Madres de menores de 3 años en Lima, Tacna, Loreto y Puno (cualitativo) | Anales de la Facultad de Medicina / RPMESP | 2014-2016 | https://scielosp.org/pdf/rpmesp/2016.v33n3/507-512/es | Media (no es sangrecita ni NSE alto) |
| Gomitas de hierro hemo | Estudio en Ate (Lima) con niños de 6 a 8 años: adherencia total y subida de hemoglobina | Escolares, piloto | Tesis | s. f. | https://repositorio.upch.edu.pe/bitstreams/54895a8a-ed49-4fe7-b465-e0ee6d1e656b/download | Baja |
| Precio de gomitas de hierro para niños | S/45 por 70 gomitas (Luc Nutrition, en oferta) | Falabella Perú | Falabella | 2026 (consulta) | https://www.falabella.com.pe/falabella-pe/shop/hierro-vitamina | Baja (no es hierro hemo confirmado) |

**No encontrado:** productos comerciales con sangrecita u hierro hemo para niños en Wong, Plaza Vea o farmacias, con precio. Queda por revisar a mano los catálogos online.

## 9. Medios y redes

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Uso de redes | 100 % de los internautas usa redes; 5.4 plataformas en promedio; WhatsApp 98 %, Facebook 95 % | Peruanos de 15 a 70, Perú urbano, NSE A-E, conectados a diario | Ipsos Perú vía Gestión | 2023 | https://gestion.pe/economia/empresas/ipsos-peru-internet-redes-sociales-facebook-tik-tok-whatsapp-redes-sociales-facebook-ya-no-es-el-favorito-y-uso-se-centra-al-amanecer-noticia/ | Media (prensa; sin corte A/B) |
| Mensajería | WhatsApp 98.6 %; Messenger 45.1 %; TikTok DM 27.9 %; Instagram DM 20.5 % | Usuarios peruanos, nacional | OSIPTEL, Erestel 2025 | 2025 | https://www.expreso.com.pe/actualidad/whatsapp-y-yape-lideran-el-uso-digital-en-peru-segun-erestel-2025-noticia/1291271/ | Media |
| Redes del comprador online | Los compradores online usan más TikTok, Instagram y YouTube (publicidad); el comprador es de NSE medio, 30 a 45 años | Compradores online, nacional urbano | IAB Perú | 2025 | PDF IAB (arriba) | Media |
| Influencers | Más del 59 % de los influencers peruanos son mujeres, muchas madres; 65 % de madres dice dudar de su crianza tras ver contenido en redes (estudio de Intimina, no peruano) | Perú / madres (muestra no confirmada) | Influencity e Intimina vía Correo | 2025 | https://diariocorreo.pe/salud/el-65-de-madres-duda-de-sus-metodos-de-crianza-tras-ver-contenidos-en-redes-sociales-noticia/ | Baja |

**No encontrado:** uso de Instagram, TikTok y Facebook por NSE A/B de 30 a 45 años en Lima; grupos de WhatsApp del colegio como canal de recomendación; compra por WhatsApp o redes en A/B; nombres y alcance de influencers de crianza de Lima.

## 10. Estilos de vida (Arellano)

| Dato | Valor | Población | Fuente | Año | URL | Confianza |
|---|---|---|---|---|---|---|
| Distribución nacional | Modernas 27 %; Formalistas 21 %; Progresistas 20 %; Conservadoras 15 %; Sofisticados 9 %; Austeros 9 % (suma 101 %) | Peruanos, nacional | Arellano Consultoría vía Perú Retail | 2022 | https://www.peru-retail.com/arellano-los-estilos-de-vida-de-los-peruanos-son-estables-y-se-mantienen-ante-una-crisis/ | Media |
| Preferencias de ocio | Sofisticados prefieren centros comerciales (65 %); Modernas, centros comerciales (49 %) y parques (48 %); Formalistas, visitar amigos (52 %); en Lima 52 % va a centros comerciales | Peruanos | ENCP 2024 vía Perú Retail | 2024 | https://www.peru-retail.com/dinamicas-y-tendencias-actuales-en-entretenimiento-y-gastronomia-en-el-peru/ | Media |

**No encontrado:** peso de cada estilo dentro de NSE A/B de Lima. Los pesos de la sección de abajo son supuestos.

## No encontrado (resumen)

1. Cifras APEIM 2025 por zona (6 y 7) y por distrito; hogares por zona; ingreso 2025 por NSE con cifra exacta (revisar el dashboard con login).
2. Educación y ocupación del jefe de hogar y de la madre, por A, B1 y B2; % de madres que trabajan fuera; trabajadora del hogar y abuelos por NSE; edad de padres con hijos en primaria; número de hijos por NSE.
3. Pensión promedio con método publicado por distrito o NSE; matrícula privada en primaria de Lima.
4. Quién decide y compra; canales, frecuencia, sensibilidad al precio, marcas propias, para A/B con hijos.
5. Quién prepara la lonchera, tiempo, gasto, uso del quiosco; estudio de loncheras de Lima A/B.
6. Lectura de etiquetas y confianza en lo envasado por NSE; el 42 % de Kantar; el 15.5 % de SIEN-HIS; el 22.5 % del MINSA.
7. Anemia en 4 a 11 años de colegio privado; percepción de riesgo; control pediátrico; quién recomienda.
8. Sangrecita: consumo y rechazo por NSE; productos comerciales con hierro hemo y precio.
9. Redes por NSE A/B de 30 a 45; WhatsApp del colegio; influencers de crianza.
10. Estilos de vida Arellano dentro de A/B de Lima.

Fuentes de pago o cerradas que habría que pedir: Ipsos «Perfil del ama de casa» y «Perfiles socioeconómicos» actuales, Kantar Worldpanel por NSE, APEIM dashboard, Arellano ENCP por NSE.

## Distribuciones para muestrear 380 perfiles

Convención: «dato» = el peso sale de una cifra citada arriba (aunque sea de otra población, y se dice cuál); «supuesto» = razonado sin dato directo. Los recuentos son sobre 380 y están redondeados para sumar 380.

**1. NSE del hogar** (n = 380)
| Categoría | Peso | Recuento | Tipo y razón |
|---|---|---|---|
| A (A1+A2) | 24 % | 91 | Supuesto anclado en dato: en Lima A es 12 % de A+B (APEIM 2025), pero el público vive en zonas 6/7 y paga colegio privado, así que se sobrerrepresenta; en zona 7 el A es 28 % y en zona 6 19-20 % de A+B (2023/HECHOS) |
| B1 | 28 % | 106 | Supuesto: en Lima B1 es 23 % de A+B; se sube por colegio privado y zona |
| B2 | 48 % | 183 | Supuesto: en Lima B2 es 64 % de A+B; se baja porque B2 paga menos colegio privado en zonas 6/7. Si el equipo quiere «esfuerzo parejo A y B», mover a 30 / 30 / 40 |

**2. Quién responde**
| Categoría | Peso | Tipo y razón |
|---|---|---|
| Mamá | 65 % | Supuesto: APEIM define «ama de casa» como quien decide compras, no da sexo; no hay dato A/B |
| Papá | 28 % | Supuesto: el HECHOS tiene un buyer persona papá (Rodrigo) que compra |
| Otro cuidador (abuela, tía, pareja del mismo sexo, tutor) | 7 % | Supuesto |

**3. Edad del padre o madre que responde**
| Categoría | Peso | Tipo y razón |
|---|---|---|
| 30-34 | 20 % | Supuesto: edad mediana a la primera unión de 24.2 años en Lima (dato, todas las mujeres) y mayor educación en A/B sugieren maternidad más tardía |
| 35-39 | 40 % | Supuesto |
| 40-45 | 40 % | Supuesto (rango pedido por el equipo: 30 a 45) |

**4. Distrito (ubicación del hogar)**
| Categoría | Peso | Tipo y razón |
|---|---|---|
| Zona 7: Surco 22 %, La Molina 12 %, San Borja 11 %, Miraflores 6 %, San Isidro 4 % (total 55 %) | 55 % | Supuesto: los distritos son dato (APEIM 2023); el reparto interno no existe publicado, se pondera por tamaño aproximado del distrito y por la presencia de colegios privados |
| Zona 6: San Miguel 10 %, Jesús María 6 %, Pueblo Libre 5 %, Lince 3 %, Magdalena 3 % (total 27 %) | 27 % | Supuesto |
| Fuera de 6 y 7 (Surquillo, Barranco, Chorrillos, Callao-Bellavista, Los Olivos, Ate-Santa Anita, Cercado) | 18 % | Supuesto: dato de que zonas 2, 4, 5, 8 tienen 21-24 % de B (APEIM 2023), útil para B2 |
| Regla de cruce con NSE | A: 80 % zona 7, 15 % zona 6, 5 % otras; B1: 55 / 30 / 15; B2: 40 / 28 / 32 | Supuesto anclado en dato: A es 28.7 % del hogar en zona 7 y 14.6 % en zona 6 (2023) |

**5. Situación laboral de la madre (o de quien responde, si es mamá)**
| Categoría | Peso | Tipo y razón |
|---|---|---|
| Trabaja fuera de casa tiempo completo (dependiente) | 45 % | Supuesto: en Lima Oeste 52 % son trabajadores dependientes (Ipsos 2025, todos los NSE) |
| Trabajo híbrido o remoto | 17 % | Supuesto |
| Independiente o emprendedora | 20 % | Supuesto |
| No trabaja remunerado | 18 % | Supuesto: el 67.9 % de madres en la PEA (baja confianza, nacional) deja ~32 % fuera; en A/B se asume menos |
Si responde el papá: 75 % trabajo dependiente, 20 % independiente, 5 % otro (supuesto).

**6. Número de hijos en el hogar**
| Categoría | Peso | Tipo y razón |
|---|---|---|
| 1 hijo | 28 % | Supuesto: TGF de 1.22 en Lima (dato) es de todas las mujeres de 15 a 49; entre madres con hijo de 4 a 11 el promedio es mayor |
| 2 hijos | 55 % | Supuesto |
| 3 o más | 17 % | Supuesto |
Tamaño del hogar de referencia: A 3.1 y B 3.7 personas (dato Ipsos 2020, ya incluye hogares sin niños).

**7. Edad del hijo focal (4 a 11)**
| Categoría | Peso | Tipo y razón |
|---|---|---|
| 4-5 años | 25 % | Supuesto: reparto uniforme por año de edad (2 de 8 años) |
| 6-8 años | 37.5 % (143) | Supuesto: 3 de 8 años |
| 9-11 años | 37.5 % (142) | Supuesto: 3 de 8 años |

**8. Colegio y pensión mensual (colegio privado en todos)**
| Categoría | Peso | Tipo y razón |
|---|---|---|
| Hasta S/700 | 10 % | Supuesto: rango «económico» S/300-500 y «medio» desde S/700 (cuantomecuesta, baja confianza) |
| S/700-1,200 | 32 % | Supuesto: rango «medio» de esa fuente |
| S/1,200-2,000 | 26 % | Supuesto |
| S/2,000-3,000 | 20 % | Supuesto: casos nombrados de S/2,300-3,959 (prensa 2025) |
| Más de S/3,000 | 12 % | Supuesto |
Cruce: A concentra los dos tramos altos (60 %); B2 concentra los dos bajos (65 %); B1 al medio (supuesto). Control: el gasto en educación de todo el hogar es S/855 en A y S/442 en B (dato APEIM 2023), pero esos promedios incluyen hogares sin colegio privado, por eso no sirven para fijar el tramo.

**9. Canal de compra principal de alimentos y snacks del niño**
| Categoría | Peso | Tipo y razón |
|---|---|---|
| Supermercado presencial (Wong, Vivanda, Plaza Vea, Metro) | 38 % | Supuesto: Ipsos (2010-12) dice que A/B compran más en supermercados; dato antiguo |
| Supermercado o app de delivery (web de supermercado, Rappi, PedidosYa) | 22 % | Supuesto: 80 % de NSE A/B espera comprar más online en 2026 (IAB 2025) y supermercados lideran la incidencia online |
| Mercado o bodega | 15 % | Supuesto |
| Tienda saludable o naturista | 12 % | Supuesto |
| Instagram, WhatsApp o tienda de marca directa | 8 % | Supuesto |
| Quiosco o cafetería del colegio | 5 % | Supuesto |
Segunda pregunta: «quién decide qué snack va a la lonchera»: mamá 60 %, el niño 20 %, papá 8 %, empleada o abuela 7 %, nutricionista o pediatra 5 % (supuesto; no hay dato).

**10. Apoyo en el hogar**
| Categoría | A | B1 | B2 | Tipo y razón |
|---|---|---|---|---|
| Trabajadora del hogar (cama adentro o afuera) | 60 % | 40 % | 20 % | Supuesto: no hay dato por NSE; el patrón (más en hogares de mayor ingreso) viene de estudios cualitativos |
| Abuelos que cuidan con regularidad | 35 % | 35 % | 40 % | Supuesto |

**11. Actitud ante productos nuevos**
| Categoría | Peso | Tipo y razón |
|---|---|---|
| Curioso: prueba primero | 20 % | Supuesto |
| Cauto: espera la reseña de otras mamás o del pediatra | 45 % | Supuesto |
| Escéptico: desconfía de lo «saludable» envasado | 25 % | Supuesto: el 42 % de Kantar (sin verificar) apunta a desconfianza |
| Resistente: solo marcas conocidas | 10 % | Supuesto |

**12. Cuánto piensa en el hierro**
| Categoría | Peso | Tipo y razón |
|---|---|---|
| Alto: lo controla (análisis, suplemento o consulta) | 20 % | Supuesto anclado: 35 % de los niños del quintil superior recibió suplemento en los últimos 7 días (dato, 6-35 meses) y 22.8 % tuvo anemia |
| Medio: lo conoce, no actúa | 40 % | Supuesto |
| Bajo: no lo ve como problema propio | 40 % | Supuesto: no hay estudio de percepción; la anemia del quintil superior (22.8 %) contradice esa idea |
Subvariable: hijo con antecedente de anemia o hierro bajo = 20 % (supuesto; el dato del quintil superior es 22.8 % a 6-35 meses y ~20 % en 5 a 11 años del SIEN-HIS, ambos fuentes públicas).

**13. Qué tan quisquilloso es el hijo con la comida**
| Categoría | Peso | Tipo y razón |
|---|---|---|
| Muy quisquilloso | 30 % | Supuesto: la frase del buyer persona «todo lo que le hace bien, mi hijo lo escupe» y el hallazgo de las entrevistas |
| Algo | 45 % | Supuesto |
| Poco | 25 % | Supuesto |

**14. Medio donde descubre productos de alimentación infantil**
| Categoría | Peso | Tipo y razón |
|---|---|---|
| Instagram | 30 % | Supuesto: WhatsApp (98 %) y Facebook (95 %) son casi universales (dato Ipsos 2023) pero eso mide uso, no descubrimiento |
| Recomendación directa (pediatra, nutricionista, otras mamás) | 25 % | Supuesto |
| Grupos de WhatsApp del colegio | 15 % | Supuesto: no hay dato |
| TikTok | 15 % | Supuesto: IAB 2025 dice que compradores online usan más TikTok e Instagram |
| Facebook | 5 % | Supuesto |
| Góndola o supermercado | 10 % | Supuesto |
Todos los perfiles usan WhatsApp a diario (dato, 98 %).

**15. Estilo de vida (Arellano)**
| Categoría | Peso | Tipo y razón |
|---|---|---|
| Sofisticado | 22 % | Supuesto: nacional 9 % (2022), pero se concentran en NSE A/B |
| Moderna (madre trabajadora, aspiracional) | 30 % | Supuesto: es el mayor estilo nacional (27 %) |
| Progresista | 25 % | Supuesto: nacional 20 % |
| Formalista | 18 % | Supuesto: nacional 21 % |
| Conservadora | 5 % | Supuesto: nacional 15 %, rara en A/B |
| Austero | 0 % | Supuesto: nacional 9 %, de NSE bajo |
Cruce sugerido: A = más Sofisticado y Moderna; B2 = más Progresista y Formalista.

**16. Lonchera (variables para el prompt de cada perfil)**
| Variable | Categorías y pesos | Tipo y razón |
|---|---|---|
| Quién la prepara | Mamá 52 %, trabajadora del hogar 18 %, papá 10 %, abuela 7 %, el niño elige y la mamá arma 13 % | Supuesto: no hay dato |
| Contenido (puede marcar varias) | Fruta o verdura 65 %; agua 53 %; jugo o refresco natural 36 %; sándwich 40 %; barra o snack envasado 35 % | Dato para los tres primeros (Kantar 2025, hogares de Lima); supuesto para el resto (sándwich y barras: Kantar 2022 nacional 42 % y 27 %) |
| Usa quiosco o cafetería del colegio | 40 % (para dinero extra o antojo) | Supuesto |
| Gasto semanal en snacks envasados para lonchera | Hasta S/15 25 %; S/15-30 40 %; más de S/30 35 % | Supuesto |
| Preocupación principal | Azúcar 40 %; ultraprocesados u octógonos 25 %; que no coma 25 %; tiempo de preparación 10 % | Supuesto: el sello que más preocupa es «alto en azúcar» (70 %, Ipsos 2025 nacional) |
| Efecto del octógono | Dejó de comprar algunos productos con octógono 33 %; casi todos 28 %; pocos 22 %; ninguno 17 % | Dato: Ipsos 2025 (impacto medio, grande, bajo, ninguno); la población es nacional, no A/B (en A/B probablemente es mayor, pero no hay corte) |
| Precio y promociones | Mira el precio por unidad 45 %; paga más si le convence el beneficio 35 %; indiferente 20 % | Supuesto: el HECHOS pone un pack de S/27.90 y el persona B mira el precio por brownie |

Control de coherencia antes de generar los perfiles: ningún perfil con NSE A y pensión menor de S/700; ningún perfil de B2 con pensión mayor de S/3,000 y trabajadora del hogar cama adentro a la vez; si responde el papá, la columna de situación laboral cambia como se indica.
