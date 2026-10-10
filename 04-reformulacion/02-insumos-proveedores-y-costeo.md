# AndiBite 2.0: insumos, proveedores, empaque y costeo unitario (Lima, 3 de octubre de 2026)

Documento de análisis de costos para la línea de mini brownies de 20 g con base de sangrecita, cacao, avena, cañihua y plátano. Complementa el brief `00-BRIEF-reformulacion.md`.

## 0. Cómo leer este documento

- **Fecha de captura:** los precios de Plaza Vea, Makro, Wong y Metro se obtuvieron el 03-oct-2026 consultando el catálogo público de cada tienda (API de catálogo de la tienda online). Son precios de góndola online; pueden variar por promoción, distrito o stock.
- **Tipo de cambio:** solo se usó para un dato en dólares (cañihua, Tridge): S/ 3.45 por US$ [HIPÓTESIS]. Las fuentes consultadas indican un dólar por debajo de S/ 3.45 a inicios de octubre de 2026 y no se pudo confirmar la cotización SBS del día.
- **Limitación importante:** Mercado Libre Perú bloqueó la consulta automática (HTTP 403). Los precios de ese canal que aparecen abajo vienen solo de extractos de búsqueda y están marcados [POR CONFIRMAR]. Mercado Central, Mesa Redonda y Flora & Fauna no tienen precio público verificable en línea; también quedan [POR CONFIRMAR] y requieren cotización presencial o por WhatsApp.
- **Etiquetas:** [POR CONFIRMAR] = dato no verificado. [HIPÓTESIS] = estimación del analista.

## 0.1 Decisión del 10-oct-2026 (modelo v6): sangrecita de res en polvo, comprada lista

Este documento costea varios escenarios con precios de octubre. La decisión final del equipo para la maquila es:

| Tema | Decisión | Por qué |
|---|---|---|
| **Insumo** | **Sangrecita de res en polvo liofilizada**, receta 5 del documento 01: 22 g de polvo + 98 g de agua por lote de 24 (0.92 g por brownie; unos 51 kg al año) | La planta solo hidrata el polvo: no recibe ni cuece sangre cruda (menos riesgo de *Salmonella* y un HACCP más simple). Dosis de hierro estable, sin olor y más vida útil |
| **Proveedor y precio** | Proveedor con registro sanitario (tipo Allpa Manta, de res), a granel en bolsas de 1 a 5 kg a **S/300 por kg**. En sobre de tienda cuesta S/417 por kg (Malli, cordero) a S/667 por kg (Allpa Manta) | El sobre de 60 g lleva envase y margen de tienda; la bolsa a granel no |
| **Costo** | **S/0.605 de insumos por brownie** (antes S/0.40 con sangrecita fresca de pollo). Detalle en el documento 05 y en el Excel | |
| **¿Fabricar nuestro propio polvo?** | **No.** Costaría igual o más: unos 250 kg de sangrecita al año (S/2,900), una liofilizadora de S/8,000 a 15,000, luz (S/1,500 al año), análisis microbiológico de cada lote de polvo (S/4,800 al año), una persona que la opere (S/3,000 a 4,000) y un local con permiso sanitario: en total S/15,000 a 20,000 al año, más la inversión | Más plata al inicio y el riesgo de fabricar un insumo de origen animal. La planta pediría el mismo certificado que ya trae un proveedor registrado |
| **¿Polvo de hígado de pollo?** | **No.** | El hígado tiene unas 3 veces menos hierro que la sangrecita (8.56 frente a 29.5 mg por 100 g, CENAN), y una parte no es hemo; harían falta unos 4 g de polvo por brownie, con unos 480 µg de vitamina A (el máximo seguro es 600 µg al día de 1 a 3 años y 900 µg de 4 a 8 años); sabor fuerte y sin proveedor de grado alimentario en Perú |

Los precios de sangrecita fresca de la tabla 1 quedan como referencia para las pruebas caseras (recetas 1 a 4 del documento 01).

## 1. Tabla de insumos

### 1.1 Sangrecita (insumo crítico)

| Insumo | Presentación | Precio (S/) | S/ por kg | Dónde comprar | Fecha | Fuente |
|---|---|---|---|---|---|---|
| Sangrecita sin condimentos (cocida, refrigerada), Redondos | 500 g | 6.50 | 13.00 | Wong y Metro (online, delivery Lima) | 03-oct-2026 | [Wong](https://www.wong.pe/sangrecita-sin-condimentos-redondos-bolsa-500-g/p) |
| Ídem | 500 g | 6.10 | 12.20 | Tottus (online) | 03-oct-2026 | [Tottus](https://www.tottus.com.pe/tottus-pe/articulo/113787349/sangrecita-sin-condimentos-redondos/113787350) |
| Sangrecita criolla (condimentada), Redondos | 500 g | 5.50 | 11.00 | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/sangrecita-criolla-redondos-empaque-500g-127200/p) |
| Sangrecita criolla Redondos | 1 kg | 11.29 | 11.29 | Makro | 03-oct-2026 | [Makro](https://www.makro.plazavea.com.pe/sangrecita-criolla-redondos-empaque-1kg-20211018/p) |
| Sangrecita criolla Cuisine & Co | 500 g | 6.40 | 12.80 | Wong, Metro | 03-oct-2026 | [Metro](https://www.metro.pe/sangrecita-criolla-cuisine-co-500g-1017694/p) |
| Sangre de pollo refrigerada, compra institucional (referencia) | por kg | 8.55 | 8.55 | Contrato de la Municipalidad de Lima para ollas comunes | jul-2025 | [Salud con Lupa](https://saludconlupa.com/noticias/municipalidad-de-lima-pago-5-millones-a-consorcio-sin-experiencia-para-repartir-sangre-de-pollo-refrigerada/) |
| Sangrecita fresca, venta por 1/4 kg | 250 g | 2.00 | 8.00 | Biocampo (tienda online; el resumen automático la describe como "pork blood", origen [POR CONFIRMAR]) | sin fecha | [Biocampo](https://www.biocampo.pe/product-page/sangrecita) |
| Sangrecita precocida, venta en porciones de 100 g | por kg | 32.00 | 32.00 | Sangrecita Factory (delivery propio; WhatsApp 912 342 068) | sin fecha en el artículo | [El Comercio](https://elcomercio.pe/provecho/tendencias/sangrecita-factory-la-marca-que-combate-la-anemia-con-divertidas-creaciones-noticia/) |
| Sangrecita fresca en mercado de abastos (Lima) | por kg | [POR CONFIRMAR] | [POR CONFIRMAR] | No se halló precio público; rango de referencia entre S/ 8 y S/ 13 por kg según las filas anteriores [HIPÓTESIS] | n. d. | n. d. |

**Sangrecita deshidratada o liofilizada en polvo (retail y suplemento):**

| Insumo | Presentación | Precio (S/) | S/ por kg | Dónde comprar | Fecha | Fuente |
|---|---|---|---|---|---|---|
| Sangrecita liofilizada Malli (sangre de cordero cocida y liofilizada) | frasco 60 g | 25.00 | 416.67 | malli.pe y distribuidores autorizados; tel. +51 993 721 991 | 03-oct-2026 | [Malli](https://www.malli.pe/product/sangrecita-liofilizada-60gr/) |
| Sangrecita en polvo (hemoglobina bovina), Allpa Manta | 30 g | 20.00 | 666.67 | allpamantaperu.pe, envío por WhatsApp +51 973 920 245 | 03-oct-2026 | [Allpa Manta](https://allpamantaperu.pe/products/sangrecita-de-res-en-polvo-1) |
| Ídem | 100 g | 50.00 | 500.00 | Ídem | 03-oct-2026 | Ídem |
| Sangrecita en polvo de pollo, grado alimentario, a granel | por kg | [POR CONFIRMAR] | [POR CONFIRMAR] | No se encontró oferta pública; cotizar con camales avícolas con registro SENASA y deshidratadores. No se verificaron Nutrisa, Inkanat ni Agroindustrias | n. d. | n. d. |
| Harina de sangre de uso en alimento animal (no apta para consumo humano) | n. d. | n. d. | n. d. | Existe como insumo para balanceados; no sirve para este producto | n. d. | [Engormix](https://www.engormix.com/avicultura/articulos/harina-de-sangre-t29408.htm) |

**Hallazgo clave:** el polvo de sangrecita de venta pública cuesta entre S/ 417 y S/ 667 por kg y es de cordero o res, no de pollo. Para el precio de maquila hay que cotizar polvo de grado alimentario a granel; esa cotización es el mayor riesgo de costo de la línea. Una referencia directa de mercado es Nutri H (Ayacucho), que ya usa hemoglobina bovina deshidratada en galletas (ver sección 4).

### 1.2 Resto de insumos

| Insumo | Presentación | Precio (S/) | S/ por kg, L o unidad | Dónde comprar | Fecha | Fuente |
|---|---|---|---|---|---|---|
| Cacao en polvo La Casa Marimiel | 200 g | 19.20 | 96.00/kg | Plaza Vea, Metro; Wong a 19.50 | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/cacao-en-polvo-la-casa-marimiel-doypack-200g/p) |
| Cacao en polvo Amaru Superfoods | 180 g | 19.90 | 110.56/kg | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/cacao-en-polvo-amaru-superfoods-bolsa-180g/p) |
| Cacao en polvo Inkaforest | 150 g | 18.50 | 123.33/kg | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/cacao-en-polvo-inkaforest-doypack-150g-20570132/p) |
| Cacao en polvo D'Onofrio | 150 g | 19.90 | 132.67/kg | Metro (Wong 20.50) | 03-oct-2026 | [Metro](https://www.metro.pe/cacao-en-polvo-donofrio-150g/p) |
| Cacao criollo en polvo orgánico Ecoandino | 200 g | 22.90 | 114.50/kg | Metro | 03-oct-2026 | [Metro](https://www.metro.pe/cacao-criollo-en-polvo-ecoandino-organico-200g/p) |
| Polvo de cacao orgánico Kuyay | 250 g | 35.90 | 143.60/kg | Wong | 03-oct-2026 | [Wong](https://www.wong.pe/polvo-de-cacao-org-nico-kuyay-250g-814542/p) |
| Cocoa Winter's | 360 g | 33.00 | 91.67/kg | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/cocoa-winters-doypack-360g-viv/p) |
| Cocoa Winter's | 900 g | 58.90 | 65.44/kg | Makro | 03-oct-2026 | [Makro](https://makro.plazavea.com.pe/cocoa-winters-bolsa-900g/p) |
| Cocoa repostera Cordillera | 1 kg | 52.90 | 52.90/kg | Makro | 03-oct-2026 | [Makro](https://makro.plazavea.com.pe/cocoa-repostera-cordillera-doypack-1kg/p) |
| Cocoa repostera Negusa | 1.1 kg | 62.30 | 56.64/kg | Makro | 03-oct-2026 | [Makro](https://makro.plazavea.com.pe/cocoa-repostera-negusa-doypack-1-1kg/p) |
| Cocoa Aro | 1 kg / 5 kg | 46.90 / 183.90 | 46.90 / 36.78 por kg | Makro | 03-oct-2026 | [Makro](https://makro.plazavea.com.pe/cocoa-aro-5kg/p) |
| Cacao en polvo a granel (Mercado Central, Cacao Suyo, Orquídea) | n. d. | [POR CONFIRMAR] | [POR CONFIRMAR] | No hay precio público. Orquídea solo figura como barra de chocolate (90 g a S/ 20.40) | n. d. | n. d. |
| Avena en hojuelas Amaru | 900 g | 9.80 | 10.89/kg | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/avena-en-hojuelas-amaru-bolsa-900g/p) |
| Avena precocida Aro | 5 kg / 10 kg | 28.79 / 54.09 | 5.76 / 5.41 por kg | Makro | 03-oct-2026 | [Makro](https://www.makro.plazavea.com.pe/avena-precocida-aro-bolsa-5kg-mk/p) |
| Avena Santa Catalina | 10 kg | 47.20 (oferta; normal 56.90) | 4.72 (5.69 normal) | Makro | 03-oct-2026 | [Makro](https://www.makro.plazavea.com.pe/avena-santa-catalina-bolsa-10kg-20212859/p) |
| Harina de avena integral La Casa Marimiel | 300 g | 12.90 | 43.00/kg | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/harina-de-avena-integral-la-casa-marimiel-doypack-300g/p) |
| Harina de cañihua Marimiel | 200 g | 14.50 | 72.50/kg | Wong (vendedor WongIO) | 03-oct-2026 | [Wong](https://www.wong.pe/harina-de-canihua-bolsa-200-g-2/p) |
| Harina de cañihua tostada (Cusco) | 200 g a 1 kg | 7.60 a 38.00 | 38.00/kg | El Granero de Lima, Jr. Soledad 241, Lince | 03-oct-2026 | [El Granero](https://elgranerodelima.pe/producto/harina-de-canihua-tostada/) |
| Harina de cañihua | caja 10 kg | 180.00 | 18.00/kg | Agrosur Perú, Av. La Cultura 808, Pabellón A 103; sin mínimo en Lima | 03-oct-2026 | [Agrosur](https://www.agrosurperu.com/product-page/harina-de-ca%C3%B1ihua-1) |
| Harina de cañihua | 1 kg | 26.00 | 26.00/kg | Reino del Valle (precio solo en extracto de búsqueda) | 03-oct-2026 | [Reino del Valle](https://reinodelvalle.pe/p/harina-de-canihua-x-1kg) [POR CONFIRMAR] |
| Harina de cañihua | 100 g a 5 kg | 4.27 a 108.45 | cerca de 21.7/kg en 5 kg, inferido del rango | Campo Grande Perú (Ate, venta mayorista) | 03-oct-2026 | [Campo Grande](https://campograndeperu.com/producto/harina-de-canihua/) [POR CONFIRMAR] |
| Cañihua en grano, precio de transacción Perú (referencia mayorista) | por kg | US$ 3.95 | cerca de S/ 13.6/kg [HIPÓTESIS, TC 3.45] | Tridge | abr-2026 | [Tridge](https://www.tridge.com/market-overview/canihua-seed) |
| Plátano de seda | por kg | 3.24 | 3.24/kg | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/platano-de-seda-x-k-g-1/p) |
| Plátano de seda | por kg | 3.40 | 3.40/kg | Makro | 03-oct-2026 | [Makro](https://makro.plazavea.com.pe/platano-de-seda-1/p) |
| Huevos pardos Bell's | bandeja 30 | 15.90 | 0.53/u | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/huevos-pardos-bells-bandeja-30un-20353008/p) |
| Huevos pardos La Calera | bandeja 15 | 9.90 | 0.66/u | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/huevos-pardos-la-calera-bandeja-15un-20416571/p) |
| Huevo rosado Aro | bandeja 180 | 70.80 | 0.39/u | Makro | 03-oct-2026 | [Makro](https://www.makro.plazavea.com.pe/huevo-rosado-aro-bandeja-180un/p) |
| Aceite vegetal Bell's | 900 ml | 5.50 | 6.11/L | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/aceite-vegetal-bells-botella-900ml-959308/p) |
| Aceite vegetal Cocinero | 900 ml | 8.10 | 9.00/L | Plaza Vea (Makro a 8.80) | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/aceite-vegetal-cocinero-botella-900ml-20281567/p) |
| Aceite vegetal Cocinero | galón 5 L | 47.40 | 9.48/L | Makro | 03-oct-2026 | [Makro](https://www.makro.plazavea.com.pe/aceite-vegetal-cocinero-galon-5l-965616/p) |
| Aceite vegetal Beltrán | balde 18 L | 139.00 | 7.72/L | Makro | 03-oct-2026 | [Makro](https://www.makro.plazavea.com.pe/aceite-vegetal-beltran-balde-18l-20426519/p) |
| Panela granulada orgánica Bell's | 1 kg / 500 g | 14.90 / 7.90 | 14.90 / 15.80 por kg | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/panela-granulada-organica-bells-doypack-1kg/p) |
| Panela orgánica Onza | 1 kg | 15.99 | 15.99/kg | Plaza Vea, Makro | 03-oct-2026 | [Makro](https://makro.plazavea.com.pe/api/catalog_system/pub/products/search/panela?_from=0&_to=20) |
| Azúcar rubia Aro (alternativa más barata) | 5 kg | 17.79 | 3.56/kg | Makro | 03-oct-2026 | [Makro](https://www.makro.plazavea.com.pe/azucar-rubia-aro-bolsa-5kg/p) |
| Polvo de hornear Universal | caja 100 g | 6.70 | 67.00/kg | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/polvo-de-hornear-universal-caja-100-gramos/p) |
| Polvo de hornear Fleischmann | bolsa 1 kg | 16.40 | 16.40/kg | Makro | 03-oct-2026 | [Makro](https://www.makro.plazavea.com.pe/polvo-de-hornear-fleischmann-bolsa-1kg/p) |
| Esencia de vainilla Universal | frasco 100 ml | 2.30 | 23.00/L | Plaza Vea, Makro | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/esencia-de-vainilla-universal-frasco-100ml/p) |
| Esencia de vainilla Umsha | botella 1 L | 9.00 | 9.00/L | Makro | 03-oct-2026 | [Makro](https://www.makro.plazavea.com.pe/esencia-de-vainilla-umsha-botella-1l/p) |
| Canela molida Bell's | sobre 15 g | 1.90 | 126.67/kg | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/canela-molida-bells-sobre-15g/p) |
| Canela en polvo Badia | pote 453.6 g | 42.50 | 93.70/kg | Makro | 03-oct-2026 | [Makro](https://makro.plazavea.com.pe/canela-en-polvo-badia-pote-453-6g/p) |
| Chips sabor chocolate Winter's | 200 g | 10.90 | 54.50/kg | Wong | 03-oct-2026 | [Wong](https://www.wong.pe/chips-sabor-chocolate-winter-200g-2/p) |
| Chips de chocolate Cordillera | doypack 1 kg | 42.30 | 42.30/kg | Makro | 03-oct-2026 | [Makro](https://makro.plazavea.com.pe/api/catalog_system/pub/products/search/cobertura%20chocolate?_from=0&_to=15) |
| Lúcuma en polvo orgánica Ecoandino | 200 g | 28.00 | 140.00/kg | Plaza Vea | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/lucuma-en-polvo-organica-ecoandino-doypack-200g-20568945/p) |
| Maní tostado Villa Natura | 200 g / 500 g | 7.90 / 15.70 | 39.50 / 31.40 por kg | Plaza Vea / Makro | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/mani-tostado-villa-natura-taper-200g/p) |

Notas: (a) Flora & Fauna (Miraflores y Surco) vende cañihua y cacao, pero su tienda online no se pudo consultar [POR CONFIRMAR]. (b) Los precios de Makro corresponden a empaque mayorista de supermercado; no se verificó si exigen carné o monto mínimo. (c) Los "cocoa" repostero (Aro, Cordillera, Negusa, Winter's) pueden ser cacao alcalinizado o con aditivos; revisar etiqueta antes de adoptarlo como "cacao peruano" en la marca [POR CONFIRMAR].

## 2. Empaque y etiqueta

### 2.1 Bolsas doypack kraft con zipper y bolsitas individuales

Las 11x15 cm y 14x21 cm no aparecen con precio público exacto en tiendas peruanas verificables. Se listan las tallas más cercanas con precio real. **Capacidad:** según EnvaPack, un doypack 10x15 con ventana carga unos 50 g y uno 13x21 unos 150 g. Un pack de 6 brownies de 20 g (120 g) necesita 13x21 o 14x21; la 11x15 solo sirve para una mini porción de 2 a 3 unidades.

| Ítem | Medida | Cantidad | Precio (S/) | Por unidad (S/) | Proveedor y ubicación | Fecha | Fuente |
|---|---|---|---|---|---|---|---|
| Doypack kraft verde con ventana, trilaminado, zipper (agotado en la web al consultar) | 16x22 cm | 50 / 100 / 500 / 1,000 | 65 / 80 / 340 / 625 | 1.30 / 0.80 / 0.68 / 0.625 | Bolsitas Filtrantes Perú (envío gratis sobre S/ 299) | 03-oct-2026 | [bolsitasfiltrantes.pe](https://bolsitasfiltrantes.pe/products/bolsa-kraft-verce-con-ventana-trilaminado-con-zipper-abre-facil) |
| Ídem | 18x25 cm | 50 / 100 / 500 / 1,000 | 75 / 90 / 385 / 715 | 1.50 / 0.90 / 0.77 / 0.715 | Ídem | 03-oct-2026 | Ídem |
| Doypack kraft trilaminado, zipper | 16x24 cm | desde 100 | desde 1.17 por unidad | 1.17 | The Pack (Lima; tel. +51 980 291 927); personalizado desde 500; envío gratis en Lima sobre S/ 599 | 03-oct-2026 | [thepack.pe](https://thepack.pe/producto/doypack-kraft/) |
| Sobre trilaminado kraft con ventana y zipper (medida no indicada) | n. d. | 50 / 100 | 90 a 130 / 120 a 198 | 1.80 a 2.60 / 1.20 a 1.98 | La Semillita Peruana (marketplace Falabella) | 03-oct-2026 | [Falabella](https://www.falabella.com.pe/falabella-pe/seller/LA%20SEMILLITA%20PERUANA) |
| Doypack kraft con ventana, 10x15 (50 g) y 13x21 (150 g) | 10x15 y 13x21 | cotizar | [POR CONFIRMAR] | [POR CONFIRMAR] | EnvaPack Perú (entrega gratis en Lima Metropolitana; ventas@envapack-peru.com) | 03-oct-2026 | [envapack-peru.com](https://envapack-peru.com/producto/bolsas-doypack-kraft/) |
| Doypack kraft con ventana y zipper 10x15 o 11x15 (50 g) | 10x15 | 50 | cerca de 25 | cerca de 0.50 | Vendedores de Mercado Libre Perú (extracto de búsqueda) | n. d. | [Mercado Libre](https://articulo.mercadolibre.com.pe/MPE-442822345-bolsa-doy-pack-kraft-con-ventana-y-zipper-50gr-x-50u-envio-_JM) [POR CONFIRMAR] |
| Bolsa transparente con cinta adhesiva, para empaque individual (medida no indicada) | n. d. | 100 | 19 a 30 | 0.19 a 0.30 | La Semillita Peruana | 03-oct-2026 | [Falabella](https://www.falabella.com.pe/falabella-pe/seller/LA%20SEMILLITA%20PERUANA) |
| Bolsa de cierre hermético 6x9 cm (muy pequeña para un brownie) | 6x9 cm | 100 | 24.99 a 26.99 | 0.25 a 0.27 | Importando Perú (Falabella) | 03-oct-2026 | [Falabella](https://www.falabella.com.pe/falabella-pe/search?Ntt=bolsa+celofan+100+unidades) |
| Doypack en Mesa Redonda y Mercado Central (por ciento) | 11x15 y 14x21 | 100 | [POR CONFIRMAR] | [POR CONFIRMAR] | Sin precio público; requiere visita o WhatsApp | n. d. | n. d. |

Pedido personalizado (impreso) de doypack: The Pack indica producción flexible desde 500 unidades en personalización y desde 20,000 unidades en estructuras a medida [HIPÓTESIS: para 10,000 u/mes conviene stock genérico más etiqueta, no bolsa impresa].

### 2.2 Etiquetas y stickers

| Ítem | Cantidad | Precio | Por unidad (S/) | Proveedor | Fecha | Fuente |
|---|---|---|---|---|---|---|
| Sticker 5x5 cm papel couché | 100 / 500 / 1,000 | 0.65 / 0.32 / 0.25 por u | 0.65 / 0.32 / 0.25 | Imprenta Peruana (Jagasher EIRL, planta en Breña; WhatsApp +51 987 927 188) | 2026 | [imprentaperuana.com](https://imprentaperuana.com/precio-stickers-personalizados-lima/) |
| Sticker 7x7 cm papel couché | 100 / 500 / 1,000 | 0.95 / 0.48 / 0.36 por u | 0.95 / 0.48 / 0.36 | Ídem | 2026 | Ídem |
| Sticker 10x10 cm vinil mate | 100 / 500 / 1,000 | 1.40 / 0.75 / 0.55 por u | 1.40 / 0.75 / 0.55 | Ídem | 2026 | Ídem |
| Troquel a medida | por matriz | 35 a 80 | n. a. | Ídem; laminado +0.05 a 0.15 por u; flete S/ 20; precios sin IGV; desde 5,000 u hay descuento | 2026 | Ídem |
| Sticker 5x5 cm | 100 / 1,000 | 49 / 190 | 0.49 / 0.19 | Gigantografías Wilson (Lima) | n. d. | [gigantografiaswilson.com](https://www.gigantografiaswilson.com/blog/cuanto-cuesta-la-impresion-de-stickers-adhesivos/) |
| Sticker 3x3 a 10x10 cm, 500 o 1,000 u | n. d. | cotizar | n. d. | Etigraf (WhatsApp +51 986 659 301) | n. d. | [etigraf.pe](https://etigraf.pe/products/stickers-personalizados) [POR CONFIRMAR] |
| Papel adhesivo A4 mate, para etiquetas caseras | 50 hojas | 36 a 40.90 | 0.72 a 0.82 por hoja | Marketplace Falabella (PV Imports, Breadhard) | 03-oct-2026 | [Falabella](https://www.falabella.com.pe/falabella-pe/search?Ntt=papel+adhesivo+A4+50+hojas) |
| Precio por A3 o por millar en vinil | n. d. | [POR CONFIRMAR] | [POR CONFIRMAR] | No se halló tarifa pública por A3; pedir cotización a Imprenta Peruana y Etigraf | n. d. | n. d. |

### 2.3 Cajas y bolsas de envío

| Ítem | Medida | Cantidad | Precio (S/) | Por unidad (S/) | Proveedor | Fecha | Fuente |
|---|---|---|---|---|---|---|---|
| Caja e-commerce microcorrugado (oferta; cantidad exacta 50 o 100 por confirmar) | varias | 50 o 100 | 190 (antes 265); impresión 1 tinta +50 | 1.90 a 3.80 | Empake Perú (WhatsApp 946 076 637) | 03-oct-2026 | [empakeperu.com](https://empakeperu.com/products/cajas-de-ecommerce) [POR CONFIRMAR] |
| Caja corrugada 25x20x10 | 25x20x10 | 50 | 175 a 222 | 3.50 a 4.45 | Vendedores de Mercado Libre Perú (extracto de búsqueda) | n. d. | [Mercado Libre](https://listado.mercadolibre.com.pe/cajas-de-carton-corrugado) [POR CONFIRMAR] |
| Bolsa kraft sin asa 19.5x10.5x6 cm (alternativa para entrega) | 19.5x10.5x6 | 1,000 | 336 | 0.34 | Terrapack Perú, Miraflores | 03-oct-2026 | [terrapackperu.pe](https://terrapackperu.pe/collections/bolsas) |
| Bolsa e-commerce plástica | 26.5x33 cm | desde 100 | desde 0.93 por u | 0.93 | The Pack | 03-oct-2026 | [thepack.pe](https://thepack.pe/) |

## 3. Costeo unitario

### 3.1 Receta base y un hallazgo sobre el rendimiento

Receta de referencia del encargo, por lote: 150 g sangrecita cocida, 120 g cacao, 200 g avena molida, 80 g harina de cañihua, 2 plátanos maduros (240 g de pulpa), 3 huevos, 80 ml aceite, 120 g panela, 8 g polvo de hornear, 5 ml vainilla. No se encontró una receta mejor en las fuentes revisadas, así que se mantuvo.

**Hallazgo:** la masa cruda suma unos 1,150 g. Con una pérdida de horneado de 12 a 15 % [HIPÓTESIS], quedan unos 970 g, o sea unos 46 a 48 brownies de 20 g, no 24. Por pedido del encargo se costea sobre 24 unidades (escenario conservador). Todo costo de insumos baja casi a la mitad si el rendimiento real se valida en prueba de cocina (ver 3.4). Esto debe verificarse pesando el lote horneado.

Para el plátano se compra 387 g por lote (pulpa 240 g con un rendimiento de pulpa de 62 % [HIPÓTESIS]). La sangrecita se asume cocida sin condimentos; confirmar en la etiqueta del producto Redondos que viene cocida y lista para usar [POR CONFIRMAR].

### 3.2 Costo de insumos por lote de 24 unidades (tres escenarios)

| Insumo | Cantidad por lote | A: caseros 24 u (retail online) | B: 500 u/semana (Makro y mayorista) | C: 10,000 u/mes (granel) |
|---|---|---|---|---|
| Sangrecita | 150 g | 1.95 (S/ 13.00/kg, Wong) | 1.83 (S/ 12.20/kg, Tottus) | 4.20 (polvo, 35 g a S/ 120/kg [HIPÓTESIS]) |
| Cacao | 120 g | 11.52 (Marimiel, 96/kg) | 6.35 (Cordillera repostera, 52.90/kg) | 4.41 (Aro 5 kg, 36.78/kg) |
| Avena | 200 g | 2.18 (Amaru 900 g) | 1.15 (Aro 5 kg) | 1.08 (Aro 10 kg) |
| Harina de cañihua | 80 g | 5.80 (Marimiel, 72.50/kg) | 1.44 (Agrosur 10 kg, 18/kg) | 1.44 (Agrosur 10 kg) |
| Plátano | 387 g | 1.25 (3.24/kg) | 1.32 (3.40/kg) | 0.97 (S/ 2.50/kg [HIPÓTESIS]) |
| Huevos | 3 | 1.59 (Bell's 30 u) | 1.18 (Aro 180 u) | 1.18 (Aro 180 u) |
| Aceite | 80 ml | 0.72 (Cocinero 900 ml) | 0.76 (Cocinero 5 L) | 0.62 (Beltrán 18 L) |
| Panela | 120 g | 1.79 (Bell's 1 kg) | 1.79 (Bell's 1 kg) | 1.44 (S/ 12/kg [HIPÓTESIS]) |
| Polvo de hornear | 8 g | 0.54 | 0.13 (Fleischmann 1 kg) | 0.13 |
| Vainilla | 5 ml | 0.12 | 0.04 (Umsha 1 L) | 0.04 |
| **Total por lote (S/)** | | **27.46** | **15.99** | **15.53** |
| **Insumos por unidad de 20 g (24 u por lote)** | | **1.14** | **0.67** | **0.65** |

Nota sobre la sangrecita en el escenario C: S/ 120/kg de polvo de pollo grado alimentario es [HIPÓTESIS] sin cotización; 35 g de polvo equivalen aproximadamente a 150 g de sangrecita cocida (sólidos cercanos a 20 % en sangre fresca según Engormix) [HIPÓTESIS]. Si se comprara polvo al precio público de Malli (S/ 417/kg), la sangrecita costaría S/ 14.58 por lote y sumaría unos S/ 0.53 por unidad respecto a la cocida de B (antes de merma); a precio Allpa Manta (S/ 500/kg, S/ 17.50 por lote) sumaría unos S/ 0.65.

### 3.3 Costo completo por unidad y por pack de 6

Supuestos: energía del horno por lote de 24 u (A: S/ 1.00 con gas GLP o electricidad, por unos 0.25 kg GLP a S/ 4/kg [HIPÓTESIS, balón de 10 kg entre S/ 35 y S/ 67 según distrito] o 1.2 kWh a S/ 0.74/kWh [POR CONFIRMAR, tarifa BT5B 2026]; B: S/ 0.03 por u; C: S/ 0.02 por u [HIPÓTESIS]). Merma de 8 % aplicada a insumos y energía. El empaque se añade después. Una bolsita individual por brownie y un doypack con una etiqueta por cada pack de 6.

| Concepto (S/ por unidad de 20 g) | A: caseros 24 u | B: 500 u/semana | C: 10,000 u/mes |
|---|---|---|---|
| Insumos | 1.144 | 0.666 | 0.647 |
| Energía de horno | 0.040 | 0.030 | 0.020 |
| Merma 8 % (sobre insumos y energía) | 0.095 | 0.056 | 0.053 |
| **Subtotal producción** | **1.279** | **0.752** | **0.720** |
| Bolsita individual | 0.250 (100 u a S/ 25, La Semillita) | 0.150 [HIPÓTESIS] | 0.060 (flow pack [HIPÓTESIS]) |
| Doypack (por pack de 6, entre 6) | 0.133 (S/ 0.80, 100 u de 16x22) | 0.113 (S/ 0.68, 500 u) | 0.092 (S/ 0.55 [HIPÓTESIS], 1,000 u a S/ 0.625 como referencia) |
| Etiqueta (por pack de 6, entre 6) | 0.020 (S/ 0.12, A4 casera [HIPÓTESIS]) | 0.060 (S/ 0.36, sticker 7x7, 1,000 u) | 0.033 (S/ 0.20 [HIPÓTESIS], descuento por volumen) |
| **Empaque total** | **0.403** | **0.323** | **0.185** |
| **Costo de producción y empaque por unidad de 20 g** | **1.68** | **1.08** | **0.91** |
| **Costo por pack de 6 (120 g)** | **10.09** | **6.45** | **5.43** |

Lo que **no** incluye: mano de obra, tarifa de maquila, caja de envío (S/ 1.90 a 4.45 por pedido; ver 2.3), delivery, comisiones, marketing, registro sanitario ni margen. El costo de maquila del escenario C se analiza en otro documento del equipo.

### 3.4 Sensibilidades (por unidad de 20 g, antes de empaque)

| Variante | A | B | C |
|---|---|---|---|
| Base (24 u por lote) | 1.28 | 0.75 | 0.72 |
| Rendimiento validado de 46 u por lote [HIPÓTESIS] | 0.67 | 0.41 | 0.39 |
| Sangrecita como polvo comercial a S/ 417/kg, con 24 u por lote (en lugar de cocida o del polvo supuesto) | 1.85 | 1.33 | 1.19 |

### 3.5 Variantes de sabor (extra por lote de 24 u, retail)

| Variante | Adición por lote | Costo extra por lote (S/) | Por unidad (S/) |
|---|---|---|---|
| Chips de chocolate | 60 g Winter's (54.50/kg) | 3.27 | 0.14 |
| Canela | 2 g Bell's sobre (126.67/kg) | 0.25 | 0.01 |
| Lúcuma | 40 g Ecoandino (140/kg) | 5.60 | 0.23 |
| Maní picado | 50 g Villa Natura (39.50/kg) | 1.98 | 0.08 |

## 4. Comparación con competidores (precio de venta al público)

Precio por 20 g = precio del paquete dividido entre el peso total, por 20.

| Marca y producto | Gramaje | Precio (S/) | Tienda | Precio por 20 g (S/) | Fecha | Link |
|---|---|---|---|---|---|---|
| **Nutri H, galleta clásica con hemoglobina bovina** (el competidor más cercano) | 30 u de unos 10 g = 300 g | 48.00 | nutrih.pe (Ayacucho, envío nacional) | 3.20 | 03-oct-2026 | [nutrih.pe](https://nutrih.pe/producto/nutri-h-clasica-x-30/) |
| Nutri H, caja de 30 (precio de 2020, para ver la evolución) | 300 g | 38.00 | puntos de venta en Lima (SJM, SMP, Cercado, Surquillo, Santa Anita, SJL) | 2.53 | mar-2020 | [La República](https://larepublica.pe/sociedad/2020/03/04/galletas-contra-la-anemia-donde-comprar-precio-y-donde-venden-las-nutri-hierro-en-lima-julio-garay-atmp) |
| Mamalama, barra energética chocolate bitter y maca | 5 u, 100 g | 20.50 | Wong | 4.10 | 03-oct-2026 | [Wong](https://www.wong.pe/barra-energetica-chocolate-bitter-y-maca-mamalama-caja-5-unid/p) |
| Siete Dragones, barra nibs de cacao y cañihua | 5 u de 25 g = 125 g | 18.80 | Plaza Vea (Wong 20.90) | 3.01 | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/barra-nibs-de-cacao-y-canihua-siete-dragones-caja-5un/p) |
| Fika, brownie bajo en azúcar con harina de quinua | 70 g | 14.00 | fika.pe (delivery Lima 24 h) | 4.00 | 03-oct-2026 | [Fika](https://www.fika.pe/products/brownie-55g) |
| La Purita, fudge brownie vegano de maní y chocolate (extracto de búsqueda) | 80 g | 8.99 | lapurita.com (Lima) | 2.25 | n. d. | [La Purita](https://www.lapurita.com/products/fudge-brownie-mani-y-chocolate-80g-sin-gluten-congelado) [POR CONFIRMAR] |
| Vitalife, brownie saludable sin azúcar | gramaje [POR CONFIRMAR] | 8.00 por unidad; caja de 4 a 28.00 | Sumer Labs | n. d. | n. d. | [Sumer Labs](https://sumerlabs.com/catalogo/vitalife-raquelmarquina79g/producto/brownies-saludables-smr-1d03f1db87f04e704faa5cbae2d65e249b9cdb81) [POR CONFIRMAR] |
| Sangrecita Factory, postres y galletas con sangrecita | gramaje [POR CONFIRMAR] | desde 8.00 | delivery propio (Instagram @sangrecita_factory) | n. d. | sin fecha | [El Comercio](https://elcomercio.pe/provecho/tendencias/sangrecita-factory-la-marca-que-combate-la-anemia-con-divertidas-creaciones-noticia/) |
| Bimbo Little Bites, brownie | 130 g | 10.90 | Plaza Vea, Makro | 1.68 | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/brownie-bimbo-little-bites-chispas-de-chocolate-caja-130g/p) |
| Bimbo Nutra Bien, mini brownie | 6 u, 180 g | 15.00 | Plaza Vea | 1.67 | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/mini-brownie-nutra-bien-bimbo-180g-paquete-6un/p) |
| +Nutri Co, galletas con quinua | 6 u, 180 g | 14.90 | Plaza Vea | 1.66 | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/galletas-de-quinua-nutrishake-arandanos-paquete-6un/p) |
| Palicho, barra de chocolate con quinua y kiwicha | 6 u, 144 g | 8.00 | Plaza Vea | 1.11 | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/barra-de-chocolate-de-quinua-y-kiwicha-palicho-paquete-6un/p) |
| Bell's, brownie fudge | 40 g | 2.20 | Plaza Vea | 1.10 | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/brownie-bells-fudge-bolsa-40g/p) |
| La Florencia, mini brownies | 50 u, gramaje [POR CONFIRMAR] | 25.90 | Plaza Vea | n. d. (0.52 por unidad) | 03-oct-2026 | [Plaza Vea](https://www.plazavea.com.pe/mini-brownies-la-florencia-bandeja-50un/p) |

**Lectura de precios:**
- El segmento con mensaje funcional (hierro, sangrecita) y el premium artesanal se ubican entre S/ 3.0 y S/ 4.1 por 20 g. El segmento masivo industrial baja a S/ 1.1 a 1.7.
- Nutri H es el referente directo: sangrecita (hemoglobina bovina), formato de galleta, S/ 3.20 por 20 g. Sube 26 % entre 2020 y 2026 en la caja de 30.
- Para que AndiBite se mueva en el rango premium-funcional, un precio de lista entre S/ 3.00 y S/ 4.00 por unidad de 20 g implica S/ 18 a S/ 24 por pack de 6 [HIPÓTESIS]. Frente a un costo de producción y empaque de S/ 5.43 a S/ 10.09 por pack, deja margen bruto antes de maquila, canal y marketing.
- El problema de precio con NSE C de Lima Norte, hallado en las entrevistas, se mantiene si se vende en ese rango. El precio de masivos (S/ 1.1 a 1.7 por 20 g) solo sería alcanzable en el escenario C con costos de empaque controlados.

## 5. Lista de compra para un lote de prueba de 72 unidades

Se compran insumos para 3 lotes de 24 unidades (receta de referencia), repartidos en tres sabores: base cacao con chips, canela con plátano, y lúcuma con maní. Compra minorista en supermercados online (Plaza Vea, Wong, Tottus), con envío en Lima.

### 5.1 Insumos base (3 lotes)

| Insumo | Necesidad (3 lotes) | Presentación a comprar | Precio (S/) | Tienda |
|---|---|---|---|---|
| Sangrecita sin condimentos | 450 g | 1 bolsa de 500 g | 6.50 | Wong |
| Cacao en polvo | 360 g | 2 de 200 g (Marimiel) | 38.40 | Plaza Vea |
| Avena en hojuelas (moler) | 600 g | 1 de 900 g (Amaru) | 9.80 | Plaza Vea |
| Harina de cañihua | 240 g | 2 de 200 g (Marimiel) | 29.00 | Wong |
| Plátano de seda | 1.16 kg | 1.2 kg | 3.90 | Plaza Vea |
| Huevos | 9 u | 1 bandeja de 15 (La Calera) | 9.90 | Plaza Vea |
| Aceite vegetal | 240 ml | 1 botella de 900 ml (Bell's) | 5.50 | Plaza Vea |
| Panela | 360 g | 1 de 500 g (Bell's) | 7.90 | Plaza Vea |
| Polvo de hornear | 24 g | 1 bolsa de 25 g (Bell's) | 1.80 | Plaza Vea |
| Esencia de vainilla | 15 ml | 1 frasco de 100 ml | 2.30 | Plaza Vea |
| **Subtotal base** | | | **115.00** | |

### 5.2 Sabores y empaque

| Ítem | Cantidad | Precio (S/) | Fuente |
|---|---|---|---|
| Chips Winter's | 1 de 200 g | 10.90 | Wong |
| Canela Bell's | 1 sobre de 15 g | 1.90 | Plaza Vea |
| Lúcuma Ecoandino | 1 de 200 g | 28.00 | Plaza Vea |
| Maní Villa Natura | 1 táper de 200 g | 7.90 | Plaza Vea |
| **Subtotal sabores** | | **48.70** | |
| Doypack kraft con ventana 16x22 | 50 u (se usan 12) | 65.00 | bolsitasfiltrantes.pe (verificar stock) |
| Bolsa transparente con cinta adhesiva, individual | 100 u (se usan 72) | 25.00 | La Semillita Peruana, punto medio del rango S/ 19 a 30 |
| Papel adhesivo A4 mate | 25 u (se usa 1 hoja) | 19.00 | Marketplace Falabella (PV Imports) |
| Tinta de impresión para etiquetas | estimado | 10.00 [HIPÓTESIS] | n. a. |
| Energía de horno (3 lotes) | 3 tandas | 3.00 [HIPÓTESIS] | n. a. |
| **Subtotal empaque y energía** | | **122.00** | |

### 5.3 Total del lote de prueba

| Concepto | S/ |
|---|---|
| Insumos base | 115.00 |
| Sabores | 48.70 |
| Empaque y energía | 122.00 |
| **Total de compra (efectivo a desembolsar)** | **285.70** |
| Imprevistos 10 % [HIPÓTESIS] | 28.57 |
| **Total con imprevistos** | **314.27** |

El desembolso por unidad (S/ 3.97) es mayor que el costo de consumo por unidad (S/ 1.68 en el escenario A) porque se compran presentaciones mayores que lo usado. El sobrante (50 doypacks menos 12, 100 bolsitas menos 72, restos de cacao, cañihua y lúcuma) queda para el siguiente lote. Si el rendimiento real resulta de unas 46 unidades por lote, bastan 1.6 lotes (unas 2 tandas) para 72 unidades y se baja la compra de insumos a cerca de la mitad.

## 6. Riesgos y pendientes para cotizar

1. **Polvo de sangrecita de grado alimentario a granel:** sin precio público. Pedir cotización a camales avícolas con registro SENASA, a Nutri H (Ayacucho, hemoglobina bovina) y a Malli y Allpa Manta en volumen. Fuente más influyente en el costo del escenario C.
2. **Mercado Central y Mesa Redonda:** cacao a granel, doypack por ciento y bolsitas. Hacer visita o llamada con una lista de tallas (11x15, 14x21).
3. **Mercado Libre Perú:** repetir la consulta a mano; el acceso automático falló.
4. **Cacao con identidad "peruano":** confirmar origen en etiqueta de cocoa repostero y evaluar Cacao Suyo, Orquídea o Ecoandino a granel.
5. **Rendimiento de la receta:** pesar el lote horneado; cambia el costo unitario hasta en 48 %.
6. **Electricidad:** confirmar tarifa BT5B vigente con el recibo real o Osinergmin.

## 7. Fuentes

Catálogos de tienda consultados el 03-oct-2026:
- Plaza Vea: https://www.plazavea.com.pe (cacao, avena, aceite, panela, azúcar, polvo de hornear, vainilla, canela, chips, lúcuma, maní, plátano, huevos, brownies, galletas y barras)
- Makro: https://makro.plazavea.com.pe y https://www.makro.plazavea.com.pe (cocoa, avena, aceite, azúcar, polvo de hornear, vainilla, canela, chips, plátano, huevos, sangrecita)
- Wong: https://www.wong.pe (cacao, cañihua, sangrecita, chips, barras, mini brownies)
- Metro: https://www.metro.pe (cacao, sangrecita, barras con cañihua)
- Tottus: https://www.tottus.com.pe/tottus-pe/articulo/113787349/sangrecita-sin-condimentos-redondos/113787350

Sangrecita y polvo de sangre:
- https://saludconlupa.com/noticias/municipalidad-de-lima-pago-5-millones-a-consorcio-sin-experiencia-para-repartir-sangre-de-pollo-refrigerada/
- https://www.biocampo.pe/product-page/sangrecita
- https://elcomercio.pe/provecho/tendencias/sangrecita-factory-la-marca-que-combate-la-anemia-con-divertidas-creaciones-noticia/
- https://www.malli.pe/product/sangrecita-liofilizada-60gr/
- https://allpamantaperu.pe/products/sangrecita-de-res-en-polvo-1
- https://www.engormix.com/avicultura/articulos/harina-de-sangre-t29408.htm
- https://repositorio.pucp.edu.pe/index/handle/123456789/178744 (estudio sobre Rojarina, harina con proteína de sangre de pollo; sin precios)

Cañihua:
- https://elgranerodelima.pe/producto/harina-de-canihua-tostada/
- https://www.agrosurperu.com/product-page/harina-de-ca%C3%B1ihua-1
- https://campograndeperu.com/producto/harina-de-canihua/
- https://reinodelvalle.pe/p/harina-de-canihua-x-1kg
- https://www.tridge.com/market-overview/canihua-seed

Empaque, etiquetas y cajas:
- https://bolsitasfiltrantes.pe/products/bolsa-kraft-verce-con-ventana-trilaminado-con-zipper-abre-facil
- https://thepack.pe/producto/doypack-kraft/ y https://thepack.pe/
- https://envapack-peru.com/producto/bolsas-doypack-kraft/
- https://www.falabella.com.pe/falabella-pe/seller/LA%20SEMILLITA%20PERUANA
- https://www.falabella.com.pe/falabella-pe/search?Ntt=bolsa+celofan+100+unidades
- https://www.falabella.com.pe/falabella-pe/search?Ntt=papel+adhesivo+A4+50+hojas
- https://imprentaperuana.com/precio-stickers-personalizados-lima/
- https://imprentaperuana.com/imprenta-stickers-y-etiquetas-lima/
- https://www.gigantografiaswilson.com/blog/cuanto-cuesta-la-impresion-de-stickers-adhesivos/
- https://etigraf.pe/products/stickers-personalizados
- https://empakeperu.com/products/cajas-de-ecommerce
- https://terrapackperu.pe/collections/bolsas
- https://listado.mercadolibre.com.pe/cajas-de-carton-corrugado (solo extracto de búsqueda)

Competidores:
- https://nutrih.pe/ y https://nutrih.pe/producto/nutri-h-clasica-x-30/
- https://larepublica.pe/sociedad/2020/03/04/galletas-contra-la-anemia-donde-comprar-precio-y-donde-venden-las-nutri-hierro-en-lima-julio-garay-atmp
- https://www.fika.pe/products/brownie-55g
- https://www.lapurita.com/products/brownies-x-8-unds
- https://sumerlabs.com/catalogo/vitalife-raquelmarquina79g/producto/brownies-saludables-smr-1d03f1db87f04e704faa5cbae2d65e249b9cdb81

Energía y tipo de cambio:
- https://hacecuentas.com/pe/calculadora-recibo-luz-peru-osinergmin (tarifa BT5B 2026, [POR CONFIRMAR])
- https://www.americatv.com.pe/noticias/util-e-interesante/cuanto-esta-balon-gas-10kg-y-como-encontrarlo-bajo-precio-n446842 (rango de balón de gas por distrito)
- https://perugestiona.pe/deudas-finanzas/tipo-cambio-peru/ (contexto del tipo de cambio 2026)
