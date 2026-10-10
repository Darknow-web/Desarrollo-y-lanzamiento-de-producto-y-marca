# 01 — Producto: sabores y recetas de la línea AndyBites con sangrecita

> AndiBite 2.0, reformulación del 3 de octubre de 2026. Documento técnico para el Grupo 2 (Desarrollo y lanzamiento de nuevos productos). Lo escribe el consultor de tecnología de alimentos y pastelería. Las cifras de composición vienen de las *Tablas Peruanas de Composición de Alimentos* (CENAN/INS, 10.ª ed., 2017). Las demás fuentes están numeradas al final. Los supuestos van marcados como **[HIPÓTESIS]** y los datos no verificados como **[POR CONFIRMAR]**.

> **Actualización del 10-oct-2026 (modelo v6).** Para la producción por maquila se usa la **receta 5, con sangrecita de res en polvo liofilizada**: 22 g de polvo más 98 g de agua por lote de 24 (unos 0,92 g de polvo por brownie). El polvo se compra listo, a granel (bolsas de 1 a 5 kg) a S/300 por kg, a un proveedor con registro sanitario (tipo Allpa Manta). La planta solo lo hidrata: no recibe ni cuece sangre cruda, la dosis de hierro es estable de lote a lote, no tiene olor y dura más. Las recetas 1 a 4 con sangrecita cocida quedan como recetas de prueba en casa. Se descartaron fabricar nuestro propio polvo (más caro y con más riesgo sanitario) y el polvo de hígado de pollo (unas 3 veces menos hierro que la sangrecita y exceso de vitamina A para niños). Detalle de costos en los documentos 02 y 05.

## Resumen ejecutivo

- **Por 100 g, la sangrecita de pollo cocida tiene 29,5 mg de hierro, 16 g de proteína y 69 kcal** (CENAN, código F29) [1]. Eso es 3,4 veces el hierro del hígado de pollo (8,56 mg). Casi todo ese hierro es hemínico, la forma que el cuerpo absorbe mejor.
- **Dosis recomendada: 120 g de sangrecita cocida y licuada por lote de 24 mini brownies**, es decir, alrededor del 20 % de la masa. Así cada unidad horneada de 20 g aporta ~1,3 mg de hierro de la sangrecita y **~1,9 mg de hierro total**. Es aproximadamente el 19 % de la ingesta recomendada para niños de 4 a 8 años (10 mg/día) y el 24 % para los de 9 a 13 años (8 mg/día) [10].
- **Camuflaje:** el cacao es el que mejor tapa el sabor (oscurece el color y cubre la nota metálica). Le siguen la canela, la vainilla, el plátano maduro y los cítricos. Ninguna variante debería bajar de 30 g de cocoa por lote.
- **Sabores de lanzamiento:** (1) Choco Clásico con chispas, (2) Choco-Plátano-Canela con cañihua (la receta original) y (3) Choco-Lúcuma. **Ediciones de temporada:** (4) Choco-Naranja y (5) Choco-Fresa. No se recomienda maní ni pecana para lonchera por el riesgo de alérgenos.
- **Regulación:** todas las variantes superan el umbral de azúcar del octógono (≥ 10 g/100 g en sólidos) [14]. Ningún mensaje de salud puede salir sin análisis de laboratorio.

---

## 1. Base técnica: la sangrecita en productos dulces

### 1.1 Qué es la sangrecita
Es la sangre de pollo del beneficio, que se vende cruda y coagulada en mercados (congelada en algunos supermercados). Se escurre y se cocina hasta que queda firme y de color marrón oscuro [17][18]. MINSA y CENAN la promueven contra la anemia junto con el bazo y el hígado [3][13].

### 1.2 Composición (CENAN/INS 2017, por 100 g de parte comestible)

| Alimento (código TPCA) | Energía (kcal) | Agua (g) | Proteína (g) | Grasa (g) | Hierro (mg) |
|---|---|---|---|---|---|
| Pollo, sangre **cocida** (F29) | 69 | 82,0 | 16,0 | 0,1 | **29,50** |
| Pollo, sangre cruda (F30) | 65 | 83,0 | 15,0 | 0,1 | 27,30 |
| Carnero, sangre cocida (F65) | 122 | 74,4 | 20,4 | 4,5 | 59,20 |
| Res, sangre cocida (F98) | 137 | 73,5 | 19,5 | 6,6 | 61,40 |
| Res, bazo (F33) | 92 | 78,1 | 18,9 | 1,2 | 28,70 |
| Pollo, hígado (F28) | 125 | 73,6 | 18,0 | 3,9 | 8,56 |
| Cocoa (L6) | 404 | 8,7 | 19,0 | 17,1 | 10,50 |
| Harina de cañihua (A80) | 327 | 10,2 | 15,2 | 8,3 | 15,20 |

Fuente: [1]. Lo importante es que la sangrecita cocida es **82 % agua**, así que en la masa trae hierro y también mucha humedad. Por eso la receta no lleva leche: el agua de la sangrecita cumple ese papel.

**Absorción:** en una persona sin déficit se absorbe cerca del 15 % del hierro hemínico, y hasta el 35 % cuando hay deficiencia. El hierro no hemínico de los vegetales (cacao, cañihua) se absorbe mucho menos y se ve más afectado por inhibidores [7][9]. Los polifenoles del cacao y los taninos frenan la absorción del hierro no hemínico [7]. Esto refuerza la decisión de basar el aporte en la sangrecita y no solo en la cañihua o el cacao.

### 1.3 Formas de uso en repostería

| Formato | Hierro aprox. | Ventajas | Desventajas | Uso en AndyBites |
|---|---|---|---|---|
| **Cocida y licuada** (casera) | 29,5 mg/100 g [1] | Barata, fácil de conseguir, sin equipos | Perecible, aporta agua, el olor depende de la frescura, la calidad microbiológica del mercado varía | Lotes caseros y prueba sensorial |
| **Deshidratada y molida** | 68,3 mg/100 g en una tesis de la UNMSM con sangre de pollo [6]. En teoría ~160 mg/100 g sobre materia seca, calculado con [1] **[HIPÓTESIS]** | Estable, se dosifica en gramos | Si se seca con calor fuerte, el sabor a "tostado/hígado" se nota más **[HIPÓTESIS]** | Alternativa para maquila |
| **Liofilizada/micronizada** (comercial) | Una marca peruana declara 233 mg de hierro (140 mg hemínico); la página dice "por 60 g", pero eso no cuadra con 95 g de proteína, así que probablemente es por 100 g **[POR CONFIRMAR]**. Es sangre de carnero, S/25 por 60 g [8]. Los centros de salud del MINSA también usan sangrecita deshidratada [16] | Polvo fino, casi sin olor, vida útil larga | Cara, el contenido de hierro varía entre proveedores y hay que pedir ficha técnica y certificado microbiológico | Concepto original y escalamiento |

Un dato técnico útil: **la sangre cruda coagula como el huevo**. El Nordic Food Lab (Universidad de Copenhague) usa 65 g de sangre en lugar de 1 huevo en bizcochos y merengues [19]. La sangrecita **ya cocida no liga**, porque su proteína ya coaguló. En la masa funciona como un puré húmedo y proteico, así que el brownie sigue necesitando huevo. No se recomienda usar sangre cruda de mercado por inocuidad.

### 1.4 Cómo neutralizar el sabor y el olor

| Técnica | Qué hace | Cómo aplicarla |
|---|---|---|
| **Cacao/cocoa** (30-45 g por lote) | El color oscuro esconde el gris-marrón de la sangre y las notas tostadas y amargas tapan la metálica | Usar cocoa alcalinizada (es más suave y oscura). En lúcuma y naranja no bajar de 30 g |
| **Lavar y cocinar con aromáticos** | Quita restos de suero y el olor "a crudo". Las recetas MINSA/CENAN usan clavo de olor [3] y otros cocinan con hierbabuena [17] | Lavar 2 veces, hervir 10-12 min con 2 clavos o una rama de hierbabuena y **botar el agua** |
| **Canela y vainilla** | Dejan un aroma que el niño reconoce como "postre" | 1-3 g de canela y 4-6 g de esencia por lote |
| **Plátano maduro** | Da dulzor y aroma frutal, se puede bajar el azúcar añadida | Plátano de seda con cáscara pintada de negro, 130-160 g |
| **Cítricos/ácido** | Dan frescura y "despiertan" el sabor | Ralladura de naranja (solo la parte de color) más 30 ml de jugo |
| **Grasa neutra fresca** | El hierro hemo acelera la rancidez. Un aceite viejo empeora el sabor con los días **[HIPÓTESIS técnica]** | Aceite de girasol de botella recién abierta. Evitar reutilizar |
| **Licuado fino** | Si quedan grumos se nota la textura ("parecía carbón", como dijeron en las entrevistas) | Licuar la sangrecita **con los huevos** hasta que no quede ningún punto |

### 1.5 Proporciones en recetas peruanas e investigaciones

| Fuente | Producto | Sangrecita | Proporción / resultado |
|---|---|---|---|
| Clínica Hematológica del Perú (video) [2] | Brownie con pecanas | 100 g cocida y licuada en agua tibia, con ½ taza de margarina, 1 taza de azúcar, 2 huevos, ½ taza de harina y 125 g de pecanas. 180 °C, 25-30 min | ~14 % de la masa |
| MINSA/INS-CENAN, recetario 2011 (difundido por Helvetas 2022) [3] | Mousse de sangrecita | ½ taza cocida, 60 g de harina de algarrobo, azúcar rubia y vainilla | El algarrobo hace de "cacao" |
| Ídem [3] | Pudín "súper hierro" | 90 g, cocida con clavo, galleta de vainilla y jugo de 1 naranja | Usa cítrico y especia para camuflar |
| PMA/WFP, *Recetas del Perú para combatir la anemia*, tomo 2 [4] | Galletas Hari Hari | ¼ taza en trozos, 100 g de harina, 225 g de mantequilla, avena y linaza | 0,7 mg de hierro por porción declarados (es poco) |
| Tineo et al., UNICA, 2023 [5] | Brownies de sangrecita en un nido de Ica | Receta "según parámetros MINSA" | 3 veces por semana durante 7 semanas, sin rechazo, Hb +1,9 a 2,3 g/dl. **Solo n = 4 y sin grupo control** |
| Alvarado, UNMSM, 2021 [6] | Barra de cereales | 10 % de sangre de pollo deshidratada | Preferida frente a 5 % y 8 %. 10,3 mg de Fe/100 g. Vida útil de 38-42 días |
| UNAP (Iquitos) [20] | Galletas con sangre bovina en polvo | 3, 7 y 10 % sobre la harina | 36,1 y 43,8 mg de Fe/100 g (7 y 10 %) |
| Municipalidad del Santa y Red de Salud Pacífico Norte (Chimbote) [15] | Queque y mousse de sangrecita | Sesiones para madres | Muestra que el formato dulce ya se usa en campañas públicas |

**Conclusión técnica:** en dulces caseros se usa entre 14 y 25 % de sangrecita cocida sobre la masa total, y en polvo entre 7 y 10 % sobre la harina. Se propone **20 % de sangrecita cocida (120 g por lote) como base** y probar 80 g y 160 g en la prueba sensorial (sección 5).

---

## 2. Sabores para niños de 4 a 11 años

### 2.1 Lo que dice la evidencia
- **Biología:** los niños prefieren más dulzor que los adultos y son más sensibles a lo amargo hasta la adolescencia media [11]. Por eso: **cacao sí, chocolate al 70 % no**, y chips semiamargos o de leche.
- **Chocolate de leche:** 7 de cada 10 niños lo eligen como su favorito en barras (Comax, 2020) [12]. En Lima, niños de 6 a 10 años prefirieron chocolates con cobertura de leche [21].
- **Ranking clásico:** en niños de 6 a 12 años, en helado el chocolate va 1.º, la vainilla 2.ª y la fresa comparte el 3.er lugar [22]. En caramelos lideran fresa y frutos rojos [12].
- **Perú:** la lúcuma es uno de los sabores de helado más vendidos del país [23][24], así que para el niño limeño es un sabor familiar.
- **Lonchera (Kantar 2024):** fruta 64 %, cereales o barras 22 %, galletas 20 % [25]. El 77 % de los niños limeños de 7 a 12 años gasta su propina en dulces [26].
- **Exposición:** el gusto por los snacks es moderadamente estable entre los 5 y 11 años, y lo que al inicio no gusta mejora cuando se repite [27]. Conviene lanzar con sabores conocidos y rotar después.
- **Focus 1:** las mamás eligieron el brownie porque "es chocolate" y les permite "engañar" al niño.

### 2.2 Las seis variantes evaluadas

| # | Variante | Por qué gustaría | Cómo se logra (por lote de 24) | Riesgo de que se note la sangrecita | Alérgenos | Dificultad | Costo relativo |
|---|---|---|---|---|---|---|---|
| 1 | **Choco Clásico con chispas** | Es el sabor nº 1. Las chispas en la superficie se ven y llaman la atención | 45 g de cocoa, 30 g de chips semiamargos encima y 1 g de canela "invisible" | **Bajo** | Gluten, huevo, leche y soya (chips) | Baja | Bajo-medio |
| 2 | **Choco-Plátano-Canela** (original con cañihua) | Sabe a queque de plátano que los niños ya conocen. Más húmedo y con menos azúcar añadida | 130 g de plátano de seda maduro, 1,5 g de canela, 45 g de cocoa, 50 g de cañihua y 50 g de avena | **Bajo** | Huevo y avena (gluten por contaminación cruzada) | Media (el plátano cambia la humedad) | Medio |
| 3 | **Choco-Lúcuma** | El sabor peruano "de helado", acaramelado. Diferencia a la marca ante el NSE A/B | 50 g de harina de lúcuma y 30 g de cocoa | **Medio** (hay menos cacao) | Gluten y huevo | Baja | Medio-alto |
| 4 | **Choco-Naranja** | Combinación de "chocolate de fiesta". El aroma enmascara bien | Ralladura de 2 naranjas (8 g), 30 ml de jugo, 45 g de cocoa y 30 g de chips | **Bajo** | Gluten, huevo, leche y soya | Baja | Bajo |
| 5 | **Choco-Maní / Pecana** | Les gusta mucho a los mayores de 8 años (combinación chocolate-maní) | 40 g de maní tostado sin sal picado o 40 g de pecanas, como en la receta de la Clínica Hematológica [2] | **Bajo** | **Maní o frutos de cáscara: alérgeno mayor.** Muchos colegios lo restringen **[POR CONFIRMAR con colegios objetivo]** | Baja | Bajo (maní) / alto (pecana) |
| 6 | **Choco-Fresa o Aguaymanto** | La fresa es el sabor frutal nº 1 en niños. El aguaymanto le da el toque peruano | 20 g de fresa liofilizada en polvo o 40 g de aguaymanto deshidratado picado. La fruta fresca no conviene porque suelta agua | **Medio** (el ácido y el color rosa dejan ver más la masa) | Gluten y huevo | Media | Alto (liofilizado) / medio-alto |

Nota sobre el aguaymanto: algunos niños aceptan bien lo ácido (Liem) [28], pero los de 4 a 6 años suelen ser más sensibles **[HIPÓTESIS]**. Hay que probarlo por grupo de edad.

### 2.3 Ranking recomendado

**Lanzamiento (3 sabores, rotación semanal de lonchera):**
1. **Choco Clásico con chispas.** Es el sabor más querido, el que mejor camufla y el más simple de producir. Sirve de "puerta de entrada".
2. **Choco-Plátano-Canela con cañihua.** Es el concepto validado en las semanas 1 a 4 y el que menos azúcar tiene (≈ 15,6 g/100 g frente a ≈ 24 g). Además cuenta la historia andina (cañihua) que valora el padre planificado.
3. **Choco-Lúcuma.** Le da identidad peruana y premium para Lima Moderna y es diferente de lo que hay en góndola. Su riesgo medio de que se note la sangrecita se controla con 30 g de cocoa.

**Temporada (2 ediciones limitadas):**
4. **Choco-Naranja** para la temporada fría de colegio. Es barata y camufla muy bien **[HIPÓTESIS de calendario]**.
5. **Choco-Fresa** para fechas como el Día del Niño, Navidad o vacaciones útiles. Atrae a los más chicos, pero es cara y se recomienda solo como edición limitada.

El maní o la pecana pueden ofrecerse como "edición familia" para el fin de semana, nunca para lonchera escolar.

---

## 3. Recetas replicables en casa (lote de 24 mini brownies de 20 g)

### 3.1 Utensilios
Balanza digital de cocina (resolución 1 g), licuadora, 2 bowls, batidor de mano, espátula de silicona, tamiz, **molde de silicona para mini muffins de 24 cavidades** (~30 ml cada una) u otro de 20 × 20 cm, horno doméstico con termómetro de horno, termómetro de punzón, rejilla, guantes, cofia y bolsas o cajas de empaque.

### 3.2 Cómo preparar la sangrecita de forma segura (para todas las recetas)
1. **Compra:** en un puesto formal del mercado que la tenga **refrigerada** o en hielo, el mismo día de la producción. Debe ser rojo oscuro brillante y no tener olor agrio. También existe congelada en supermercados [17]. Hay que llevarla en un cooler o bolsa térmica: menos de 30 min a temperatura ambiente **[HIPÓTESIS de buena práctica]**. En los mercados peruanos el pollo crudo tiene alta presencia de *Salmonella* [29], así que la sangrecita cruda se trata como un alimento de alto riesgo.
2. **Cantidad:** comprar 170-180 g de sangrecita cruda por lote. Al escurrir y cocer se pierde peso **[HIPÓTESIS: rendimiento de ~70 %, hay que pesarlo]**. Se necesitan **120 g ya cocidos**.
3. **Lavar** dos veces con agua fría potable y escurrir en colador [18]. Usar una tabla y utensilios exclusivos para lo crudo [30].
4. **Cocer:** hervir en 1 litro de agua con 2 clavos de olor o una rama de hierbabuena, **10-12 min** a fuego medio, hasta que esté firme y marrón por dentro, sin centro rojo [3][17]. La meta es **≥ 74 °C en el centro**, medidos con termómetro [30]. Botar el agua de cocción.
5. **Enfriar** extendida en un plato, máximo 20 min. Después se licua (paso 1 de cada receta) o se refrigera a ≤ 5 °C y se usa **dentro de las 24 h** **[HIPÓTESIS conservadora]**. También se puede congelar en porciones de 120 g, hasta 1 mes.
6. **Nunca** se mezcla sangrecita cruda con la masa.

### 3.3 Proceso común (para todas)
Precalentar el horno a **180 °C** durante 15 min. Engrasar el molde con aceite o poner pirotines. Se pesan todos los ingredientes antes de empezar (*mise en place*).

---

### Receta 1 — Choco Clásico con chispas (BASE)

| Ingrediente | g | Función |
|---|---|---|
| Sangrecita cocida | 120 | Hierro hemínico, humedad y proteína |
| Huevos (2 medianos, sin cáscara) | 100 | Estructura, emulsión y ligado |
| Azúcar rubia | 110 | Dulzor, humedad, costra brillante |
| Aceite de girasol | 70 | Textura húmeda y suave (*fudgy*) |
| Cocoa en polvo sin azúcar | 45 | Sabor y color, camufla la sangrecita |
| Harina de trigo sin preparar | 70 | Estructura |
| Avena en hojuelas licuada (harina de avena) | 30 | Fibra, textura y mensaje "avena" |
| Canela molida | 1 | Aroma de fondo |
| Esencia de vainilla | 6 | Aroma |
| Sal | 1,5 | Realza el chocolate |
| Polvo de hornear | 2 | Un poco de esponjosidad |
| Chips de chocolate semiamargo | 30 | Atractivo visual y sabor |
| **Total de masa** | **585,5** | Sangrecita = 20,5 % |

**Pasos**
1. Licuar la sangrecita con los huevos, la vainilla y el aceite durante **60-90 s**, hasta que no quede ningún punto (0:00-0:05).
2. Pasar el licuado a un bowl, agregar el azúcar y batir a mano 1 min (0:05-0:07).
3. Tamizar encima la harina, la harina de avena, la cocoa, la canela, la sal y el polvo de hornear, e integrar con espátula **sin batir de más**, solo hasta que no se vea harina (0:07-0:10).
4. **Dosificar 22 g de masa por cavidad** pesando en la balanza (tolerancia ± 0,5 g). Poner 1-2 g de chips encima de cada una (0:10-0:20). Con la masa sobrante (~50 g) salen 2 unidades testigo para control.
5. Hornear a **180 °C durante 13-15 min**, en la rejilla del medio (0:20-0:35). Están listos cuando el palillo sale con migas húmedas pero sin masa líquida y el centro marca **≥ 85 °C** **[HIPÓTESIS de punto de cocción, hay que validarlo]**.
6. Dejar 10 min en el molde y luego desmoldar sobre la rejilla. **Enfriar por completo, 45-60 min**, antes de empacar. Si se empaca tibio, el vapor se condensa y favorece el moho.
7. **Control de peso:** pesar cada unidad horneada. La meta es **20 g ± 1 g**. Si el promedio da 19 g, la siguiente vez se dosifica 22,5 g. Si da 21 g, se dosifica 21,5 g. Hay que anotarlo en la ficha de lote.

### Receta 2 — Original AndiBite: cañihua, cacao, plátano y canela

| Ingrediente | g | Rol |
|---|---|---|
| Sangrecita cocida | 120 | Hierro hemínico (ingrediente funcional) |
| Plátano de seda muy maduro, pelado | 130 | Endulzante natural, humedad, aroma que camufla y reemplaza parte del azúcar y la grasa |
| Huevos | 100 | Estructura |
| Azúcar rubia | 70 | Dulzor (36 % menos que la R1) |
| Aceite de girasol | 55 | Suavidad |
| Cocoa | 45 | Sabor, color y camuflaje |
| Harina de cañihua | 50 | Grano andino: 15,2 mg Fe/100 g [1] (no hemínico), proteína, sabor a nuez tostada y el *storytelling* |
| Harina de avena | 50 | Estructura sin trigo (puede salir sin gluten si la avena es certificada) |
| Canela | 1,5 | Aroma que combina con plátano |
| Vainilla / sal / polvo de hornear | 6 / 1,5 / 3 | Aroma, realce, leve volumen (lleva más polvo porque no hay trigo) |
| **Total** | **632** | Sangrecita = 19 % |

**Pasos:** licuar la sangrecita con el plátano, los huevos, el aceite y la vainilla (90 s). Agregar el azúcar y luego los secos tamizados. **Reposar la masa 10 min** para que la cañihua y la avena se hidraten. Dosificar **22,7 g por cavidad** (sobran unas 3 unidades testigo). Hornear **180 °C durante 14-16 min**, ya que el plátano aporta más agua. Enfriar y pesar como en la R1. El sabor de la cañihua es terroso; si en la prueba se nota, se baja a 35 g y se suben 15 g de avena.

### Receta 3 — Choco-Lúcuma

| Ingrediente | g |
|---|---|
| Sangrecita cocida | 120 |
| Huevos | 100 |
| Azúcar rubia | 85 |
| Aceite de girasol | 70 |
| **Harina de lúcuma** | **50** |
| Cocoa | 30 |
| Harina de trigo | 70 |
| Harina de avena | 30 |
| Vainilla / sal / polvo de hornear | 6 / 1,5 / 2 |
| **Total** | **564,5** (sangrecita 21 %) |

**Pasos:** iguales a la R1, pero la harina de lúcuma se tamiza junto con la cocoa. Dosificar 22 g y hornear **175 °C durante 13-15 min**: la lúcuma tiene mucho azúcar y se dora rápido **[HIPÓTESIS]**. Opcionalmente, un hilo de manjar de lúcuma encima, aunque sube el azúcar y acorta la vida útil.

### Receta 4 — Choco-Naranja (temporada)
Es la R1 con estos cambios: aceite 65 g, **ralladura de 2 naranjas (8 g, solo la parte naranja)**, **30 ml de jugo de naranja** colado y licuado con la sangrecita, vainilla 4 g y chips 30 g. Masa total de 615,5 g, dosificar 22,5 g y hornear a 180 °C durante 14-15 min. El horneado destruye buena parte de la vitamina C del jugo **[HIPÓTESIS]**. Si se busca el efecto de la vitamina C sobre la absorción del hierro, se recomienda acompañar con una fruta cítrica en la lonchera, y esa recomendación no puede presentarse como propiedad del brownie.

### Receta 5 — Versión con sangrecita en polvo (deshidratada o liofilizada): la que se usa en la maquila
Es la R1 reemplazando los **120 g de sangrecita cocida** de una de estas dos formas:

| Criterio de equivalencia | Cálculo | Cantidad |
|---|---|---|
| **Por sólidos** (misma textura) | 120 g × 18 % de materia seca = 21,6 g de sólidos → con ~10 % de humedad del polvo | **24 g de polvo + 96 ml de agua** licuados con los huevos |
| **Por hierro** (mismo aporte) | gramos de polvo = 35,4 mg ÷ (mg de Fe por g de polvo, según la ficha técnica) | Con 68 mg/100 g [6] → 52 g (demasiado, se notaría el sabor). Con ~160 mg/100 g → 22 g. Con 233 mg/100 g [8] → 15 g + 105 ml de agua |

Regla práctica: **se manda la ficha técnica del proveedor**. Si su hierro está entre 150 y 240 mg/100 g, se usan 15-24 g de polvo por lote y se completa el agua hasta 120 g de "sangrecita equivalente". El polvo se hidrata 5 min en el agua tibia antes de licuar. Esta es la versión adecuada para **maquila**, porque trae análisis, lote y vencimiento, y no depende de cocer sangrecita de mercado.

### 3.4 Enfriado, empaque y vida útil

| Paso | Indicación |
|---|---|
| Empaque primario | Bolsita individual de polipropileno biorientado (BOPP) o celofán termosellable, cerrada con selladora de impulso. Va al pack de 6 en una caja de cartulina |
| Rotulado de lote | Fecha de producción, lote, sabor, peso de 20 g y "consumir preferentemente antes de" |
| **Temperatura ambiente** (≤ 25 °C, sellado) | **3 días** como máximo, y 2 días en verano limeño. La R2 con plátano tiene más agua y es más sensible **[HIPÓTESIS, consistente con 3-5 días para brownies caseros en hermético [31]]** |
| **Refrigerado** (≤ 5 °C) | **7 días**. Se templa 20 min antes de comer para que recupere la textura [31] |
| Congelado (−18 °C) | 1-2 meses, y se descongela dentro de la bolsa **[HIPÓTESIS]** |
| "Prueba de mochila" | 6 h en lonchera sin frío: es viable. Hay que hacer la prueba (sección 5) |

Para ofrecer más días en maquila hay que **medir la actividad de agua (aw)** y hacer un estudio de vida útil en laboratorio. El moho crece desde una aw de ~0,60 [32], y una barra seca con sangre deshidratada alcanzó 38-42 días [6].

---

## 4. Aporte nutricional estimado por unidad de 20 g

Es un cálculo propio con las TPCA [1]. El azúcar del plátano y de los chips viene de USDA [33][34]. Para el huevo y el aceite se usaron valores estándar. El hierro y la energía se conservan en el horneado. Se asume una **pérdida de agua del 10-12 %**.

| Receta | kcal | Proteína (g) | Grasa (g) | Azúcares (g) | Fe de la sangrecita (mg) | **Fe total (mg)** | Azúcar por 100 g |
|---|---|---|---|---|---|---|---|
| R1 Choco Clásico (base) | **74** | 2,0 | 3,8 | **4,8** | 1,34 | **1,94** | 23,8 g |
| R2 Original cañihua-plátano | 58 | 2,0 | 2,9 | 3,1 | 1,27 | 1,97 | 15,6 g |
| R3 Choco-Lúcuma | 72 | 2,0 | 3,5 | 3,9 **[HIPÓTESIS: lúcuma 30 g azúcar/100 g]** | 1,39 | 1,97 | 19,5 g |
| R4 Choco-Naranja | 70 | 1,9 | 3,5 | 4,7 | 1,29 | 1,85 | 23,3 g |

**Cobertura de la ingesta recomendada de hierro (receta base R1, 1,94 mg):**

| Referencia | 4-8 años | 9-13 años |
|---|---|---|
| RDA IOM/NASEM: 10 mg (4-8) y 8 mg (9-13) [10] | **19 %** | **24 %** |
| FAO/OMS 2004, dieta con 10 % de biodisponibilidad: 6 mg (4-6 años) y 9 mg (7-9 años) [9] | **32 %** (4-6 a.) | **22 %** (7-9 a.) |

**Lectura correcta:** MINSA y la literatura indican que un niño necesita absorber cerca de **1 mg de hierro al día** (ingesta de 8-10 mg con ~10 % de biodisponibilidad) [13]. Si se aplica una absorción de 15-35 % al hierro de la sangrecita (1,34 mg) [7], una unidad aportaría **~0,2-0,5 mg de hierro absorbido** **[HIPÓTESIS]**. Es una contribución relevante, pero **no sustituye la suplementación ni el tratamiento** que indique el pediatra.

**Precauciones regulatorias y de comunicación:**
- Son **estimaciones de cálculo**. La etiqueta y cualquier mensaje como "fuente de hierro", "alto en hierro" o "ayuda a la concentración" requieren un **análisis de laboratorio acreditado** del producto terminado (hierro, proximal, azúcares) y revisar el marco de DIGESA. Además, la publicidad dirigida a niños está regulada por la Ley 30021 **[POR CONFIRMAR con el documento regulatorio del equipo]**.
- Con ~15-24 g de azúcar total por 100 g, **todas las variantes superan el parámetro de "Alto en azúcar"** (≥ 10 g/100 g en sólidos, vigente desde el 17/09/2021) [14]. La grasa saturada calculada de la R1 (≈ 3,9 g/100 g) está cerca del límite de 4 g/100 g, así que **no conviene pasar de 30 g de chips ni usar mantequilla**. Falta confirmar con un especialista regulatorio si el azúcar del plátano cuenta **[POR CONFIRMAR]**.
- No se debe decir "cura la anemia". El estudio de Ica [5] tiene 4 niños y no tiene grupo control, así que no sirve como evidencia de eficacia. Mantener el mensaje validado: **hierro, energía y lonchera rica**.

---

## 5. Pruebas que debe hacer el equipo

### 5.1 Prueba sensorial casera con niños (escala de caritas)
**Ética:** consentimiento escrito del padre o la madre y asentimiento verbal del niño. Preguntar por **alergias** antes de dar a probar. Porción de ½ unidad (10 g), voluntaria y sin insistir.

**Escala:** caritas de 5 puntos (1 = "no me gustó nada" … 5 = "me encantó") para niños de 6 a 11 años, y de **3 caritas** para los de 4 y 5, que manejan mejor menos opciones [35][36].

**Diseño:**
| Elemento | Indicación |
|---|---|
| Muestra | Mínimo 20 niños por sabor (10 de 4-7 años y 10 de 8-11), por ejemplo hijos de conocidos o niños en un cumpleaños, con permiso de los padres |
| Muestras | Máximo 3 por sesión, codificadas con 3 dígitos y en orden rotado. Agua entre muestra y muestra |
| Control | Un brownie **sin sangrecita** de la misma receta, como referencia "ciega" |
| Qué medir | (1) Agrado general con caritas, (2) "¿Te lo llevarías en tu lonchera?" sí/no, (3) qué dejó en el plato (pesar el resto), (4) comentario espontáneo: anotar literal si dice "sabe raro", "sabe a hígado", "huele feo", (5) en los padres: agrado, olor, si detectaron la sangrecita (triangular) y precio para el pack de 6 **después** de probar, como pidió la profesora |
| Criterio de éxito | **≥ 75 % de respuestas en las caritas 4-5** (o "feliz" en la de 3), ≥ 70 % "sí lo llevaría" y diferencia ≤ 0,5 puntos frente al control sin sangrecita **[HIPÓTESIS de umbral, de uso común en pruebas de aceptabilidad]** |

**Prueba de umbral (la más importante):** se hace con la R1 en tres niveles de sangrecita, **80 g, 120 g y 160 g por lote** (13 %, 20 % y 26 %), más el control. Los padres hacen una **prueba triangular**: se les dan 3 muestras, 2 iguales, y deben decir cuál es distinta. Si más de la mitad identifica la de 160 g, ese es el techo.

### 5.2 Pruebas técnicas
1. **Peso:** pesar las 24 unidades de cada lote. Meta 20 ± 1 g, con desviación estándar < 0,7 g.
2. **Prueba de mochila:** 6 unidades empacadas pasan 6 h en lonchera a temperatura ambiente. Se evalúa si se aplastaron, si sudaron dentro de la bolsa y si cambió la textura.
3. **Vida útil casera:** se dejan unidades a temperatura ambiente y en refrigeración. Se revisan en los días 1, 2, 3, 5 y 7 (olor, moho visible, dureza y sabor rancio o metálico), con foto diaria. Las que estén dudosas se descartan sin probar.
4. **Costo por lote:** registrar el precio real de cada insumo y la merma de la sangrecita (va al documento de costos).

### 5.3 Cómo iterar
| Si pasa esto | Ajuste |
|---|---|
| Notan "sabor raro" o metálico | Bajar la sangrecita en 20 g, subir la cocoa en 5 g, cocerla con clavo y revisar la frescura del aceite |
| Les parece seca | +10 g de aceite o +20 g de plátano, y 1 min menos de horno |
| Les parece poco dulce (niños de 4 a 7) | +10 g de azúcar o más chips, y anotar el efecto en el octógono |
| No les gusta la lúcuma o la cañihua | Cambiar el 30 % de esa harina por avena |
| Unidades fuera de peso | Revisar la dosificación y el horno con termómetro |

Cada iteración se registra en una **ficha de lote** (fecha, receta en versión v1, v2…, pesos, tiempos, resultados de caritas y decisión). Después de 2 o 3 rondas se congela la fórmula que se envía a la maquila.

---

## Fuentes
1. CENAN/INS-MINSA. *Tablas Peruanas de Composición de Alimentos*, 10.ª ed., 2017 (códigos F29, F30, F65, F98, F33, F28, L6, A80, A7, A63, C71, C36, J4, K2, L20, D16, D37). https://repositorio.ins.gob.pe/bitstream/handle/20.500.14196/1034/tablas-peruanas-QR.pdf
2. Clínica Hematológica del Perú. "Brownies de sangrecita" (video con receta). https://www.facebook.com/clinicahematologicadelperu/videos/143899247561311/
3. Helvetas Perú (2022), *Recetario prevención anemia*, con recetas de MINSA/INS-CENAN (2011) *Recetario nutritivo, económico y saludable*. https://www.helvetas.org/Publications-PDFs/Latin-America/Peru/RECETARIO_PREVENCION_ANEMIA.pdf
4. PMA/WFP. *Recetas del Perú para combatir la anemia*, tomo 2. https://cdn.wfp.org/wfp.org/publications/Recetas.pdf
5. Tineo Cayo M. et al. "Efectividad del consumo de brownies de sangrecita y el nivel de hemoglobina en niños de una I.E. inicial pública, Ica". *Rev. Enferm. Vanguard.* 2023;11(2):49-55. https://revistas.unica.edu.pe/index.php/vanguardia/article/download/532/813/1785
6. Alvarado Chávez G. *Elaboración de una barra nutritiva enriquecida con sangre de pollo deshidratada*. UNMSM, 2021. https://alicia.concytec.gob.pe/vufind/Record/UNMS_627c4ac1839a6c9aa2cedccf72666cf7/Details
7. Quirónsalud. "Tipos de hierro y absorción". https://www.quironsalud.com/es/comunicacion/actualidad/hierro-absorcion ; GPnotebook, "Factores que afectan a la absorción del hierro". https://gpnotebook.com/es/pages/nutriologia/factores-que-afectan-a-la-absorcion-del-hierro
8. Malli. "Sangrecita liofilizada 60 g" (ficha web, consultada el 03/10/2026). https://www.malli.pe/product/sangrecita-liofilizada-60gr/
9. FAO/OMS (2004). *Vitamin and mineral requirements in human nutrition*, tabla de ingesta recomendada de hierro. https://www.fao.org/4/y2809e/y2809e0o.htm
10. Institute of Medicine (2001). *Dietary Reference Intakes for … Iron …*. NCBI Bookshelf. https://ncbi.nlm.nih.gov/books/NBK222309
11. Mennella J., Bobowski N. "The sweetness and bitterness of childhood: insights from basic research on taste preferences". *Physiol Behav*, 2015. https://pmc.ncbi.nlm.nih.gov/articles/PMC4654709/
12. Food Dive (2020). "Children are sweet on classic candy flavors, Comax finds". https://www.fooddive.com/news/children-are-sweet-on-classic-candy-flavors-comax-finds/584984
13. MINSA. NTS N.° 213-MINSA/DGIESP-2024 (RM 251-2024/MINSA), prevención y control de la anemia. https://www.diresapuno.gob.pe/wp-content/uploads/2025/06/NTS-N°-213-MINSA-DGIESP-2024.pdf ; Andina, "Minsa orienta a padres…". https://andina.pe/ingles/noticia-minsa-orienta-a-padres-sobre-alimentacion-saludable-para-vencer-anemia-video-719761.aspx
14. PRC&P Abogados (15/09/2021). Client Memo: parámetros técnicos de la segunda fase de octógonos (DS 017-2017-SA, DS 012-2018-SA). https://prcp-r2-prd.postedin.com/Client-Memo-El-17-de-setiembre-de-2021-entran-en-vigencia-los-parametros-tecnicos-de-la-segunda-fase-de-la-aplicacion-de-octogonos.pdf
15. Andina. "Con arroz chaufa, mousse y queque con sangrecita combaten la anemia en Chimbote" (campaña municipal "Tu amor es de hierro"). https://andina.pe/ingles/noticia-con-arroz-chaufa-mouse-y-queque-sangrecita-combaten-anemia-chimbote-video-776085.aspx
16. Carrasco K., Condori G. *Contenido nutricional del sulfato ferroso y la sangrecita deshidratada…* U. Wiener, 2024. https://repositorio.uwiener.edu.pe/items/214db488-a66a-47e4-8ba6-ed975bbe1261
17. AARP en Español. "Sangrecita de pollo, comida peruana". https://www.aarp.org/espanol/cocina/recetas/info-2016/sangrecita-pollo-comida-peruana.html
18. Perú21. "Aprende a preparar un nutritivo guiso de sangrecita de pollo". https://peru21.pe/gastronomia/aprende-preparar-nutritivo-guiso-sangrecita-pollo-noticia/
19. Organic Authority / Nordic Food Lab. "Not your average egg substitute: blood". https://www.organicauthority.com/buzz-news/not-your-average-egg-substitute-blood
20. UNAP. *Sangre bovina en polvo para fortificación de galletas*. https://repositorio.unapiquitos.edu.pe/handle/20.500.12737/4935
21. López L., Dávila L. "Evaluación sensorial de chocolates en niños". *Industrial Data* (UNMSM), 2001. https://alicia.concytec.gob.pe/vufind/Record/1810-9993_2d295b9c950459ea698bb3c240921d9c
22. White Hutchinson Leisure & Learning Group (2008). Preferencias de sabor de los tweens. https://whitehutchinson.com/printer-friendly/news/lenews/2008/february/article105.shtml
23. Saveur. "Sweet Break: Lucuma Ice Cream". https://www.saveur.com/article/Travels/Peru-OVNI-Ice-Cream
24. Infomercado. "Artika: el top 5 de los sabores preferidos". https://infomercado.pe/artika-el-top-5-de-los-sabores-preferidos-por-los-consumidores-ms/
25. Cámara de Comercio de Lima (07/03/2024), con datos de Kantar Worldpanel "Loncheras 2024". https://lacamara.pe/lonchera-escolar-que-alimentos-son-los-favoritos-por-los-padres-de-familia/
26. Ipsos Perú. *Perfil del niño* (MKT Data, 2013). https://www.ipsos.com/sites/default/files/2017-02/MKT_DATA_nino_2013.pdf
27. Rollins B., Loken E., Birch L. "Stability and change in snack food likes and dislikes from 5 to 11 years". *Appetite*, 2010. https://pure.psu.edu/en/publications/stability-and-change-in-snack-food-likes-and-dislikes-from-5-to-1/
28. Liem D. *Sweet and sour taste preferences of children*. https://core.ac.uk/works/5848812
29. Revista de la Facultad de Medicina Humana (URP): *Salmonella* en pollo de mercados peruanos. https://revistas.urp.edu.pe/index.php/RFMH/article/download/6552/11649/36915
30. CDC. "El pollo y la intoxicación alimentaria" (74 °C, contaminación cruzada). https://www.cdc.gov/food-safety/es/foods/el-pollo-y-la-intoxicacion-alimentaria.html
31. Chowhound. "The best way to store brownies". https://www.chowhound.com/1658259/how-to-store-brownies/
32. Patente AU2013375315A1, "Shelf-stable brownie product" (aw y vida útil). https://patents.google.com/patent/AU2013375315A1/en
33. USDA FoodData Central: "Bananas, raw" (12,2 g de azúcares/100 g). https://files.givewell.org/files/DWDA%202009/Interventions/Salt_Substitution/US_Department_of_Agriculture_FoodData_Central_Nutrition_information_for_raw_banana_accessed_December_18_2020.pdf
34. USDA SR, "Candies, semisweet chocolate" (479 kcal; 54,5 g de azúcares; 3,13 mg de Fe/100 g), vía ReciPal. https://recipal.com/ingredients/5834-nutrition-facts-calories-protein-carbs-fat-candies-semisweet-chocolate
35. "Validation of a sensory analysis test with preschool children". *Revista de Ciências Médicas* (PUC-Campinas). https://seer.sis.puc-campinas.edu.br/cienciasmedicas/article/view/1299
36. Wikipedia. "Hedonic scale" (escalas faciales infantiles). https://en.wikipedia.org/wiki/Hedonic_scale
