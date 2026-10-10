# 09. App "Andi, Misión Hierro": la innovación tecnológica de AndiBite

**10-oct-2026, modelo v6: sangrecita de res en polvo, unidad a S/6.00 y app incluida en la inversión y los costos.**

Versión 1, 10 de octubre de 2026. Responde al pedido de la profesora: el producto debe traer **algo tecnológico, novedoso y que aporte valor**. El equipo eligió una **app propia que viene con el producto**: cada envase trae un código que la abre. Las cifras salen de `Costeo-presentaciones-AndiBite.xlsx` (modelo v6).

---

## 1. La idea en 5 líneas

1. **Qué es:** una app web instalable (PWA) que se abre escaneando el QR del envase, sin descargar nada de una tienda de apps. Tiene **dos modos**: uno para padres y otro para niños.
2. **Para los padres** resuelve las tres objeciones de Claudia ("¿cuántos mg tiene?", "¿tiene registro?", "los jueves no sé qué mandar"): muestra el **hierro medido del lote** que compraron, lleva un **semáforo de hierro de la semana**, arma el **plan de loncheras** y avisa cuando el pack se está acabando.
3. **Para los niños** es **"Misión Hierro"**: Andi, una llamita exploradora con chullo, recorre los Andes con mini juegos que enseñan a comer hierro con vitamina C, a conocer superalimentos andinos y a formar hábitos. Lee en voz alta para los que aún no leen.
4. **Cumple la Ley 30021 por diseño:** en el modo niño no hay compras, ni publicidad, ni premios por comprar o comer el brownie. El progreso se gana jugando y aprendiendo.
5. **Cuesta S/6,000 de inversión y S/250 al mes**, más S/0.04 por código impreso y S/375 por el análisis de hierro de cada lote. Todo está en el Excel v6. A cambio, sostiene el precio de S/6.00, empuja la recompra por WhatsApp y nos da datos de qué se vende en cada punto.

---

## 2. Por qué una app y no otra tecnología

| Opción evaluada | Por qué no basta sola |
|---|---|
| QR que lleva a una página con la ficha | Informa una vez y se olvida. No crea hábito ni recompra |
| Chatbot en WhatsApp | Sirve para pedir, pero no muestra avance ni tiene modo niño |
| Realidad aumentada con Andi | Llamativa, pero los filtros de Instagram (Meta Spark) cerraron en 2025 y no resuelve ningún dolor del padre |
| Polvo de hígado o polvo propio | Son mejoras del insumo, no una tecnología que el cliente use. Se descartaron por costo, vitamina A y riesgo sanitario (documento 02) |
| **App con dos modos (elegida)** | **Junta las tres cosas que valoran los padres (dato verificable, ayuda diaria y recompra fácil) y le da al niño una razón educativa para querer la marca, sin publicidad dirigida a él** |

---

## 3. Para quién

| | Padre o madre (quien compra) | Niño o niña de 4 a 10 años (quien come) |
|---|---|---|
| Arquetipo | Claudia (38, San Borja) y Rodrigo (42, La Molina), documento 04 | Matías (7), Luciana (4), Joaquín (9), Emilia (6) |
| Lo que le duele | No sabe cuánto hierro come su hijo; teme el azúcar; se queda sin ideas de lonchera; se olvida de reponer | Le aburre "comer sano"; rechaza lo que se ve "de remedio" |
| Lo que le da la app | Dato medido, semáforo semanal, loncheras listas, recordatorios y pedido en un clic | Juegos cortos, voz, colores, un personaje amigo y logros por aprender |
| Tono | Claro, sereno, con datos: "como habla el pediatra" | Alegre, simple, con frases de 5 palabras o menos |

---

## 4. Modo padres: funciones

| # | Función | Qué hace | Dolor que resuelve | Dato que nos deja |
|---|---|---|---|---|
| 1 | **Mi lote** | El padre escanea el código del envase y ve el hierro medido en laboratorio para ese lote, la fecha de producción y vencimiento, el origen de la sangrecita (res, liofilizada, proveedor con registro sanitario), el registro sanitario, los alérgenos y el azúcar | "¿Cuántos mg tiene? ¿Tiene registro?" (42 % desconfía de lo envasado) | Qué lote, qué presentación y en qué punto se compró |
| 2 | **Semáforo de hierro** | Registra lo que comió el niño en la semana: AndiBite y otros alimentos con hierro (sangrecita, hígado, bazo, lentejas, quinua, espinaca). Muestra el avance frente a una referencia por edad (7 mg al día de 1 a 3 años, 10 mg de 4 a 8 años y 8 mg de 9 a 13 años) y recuerda sumar vitamina C | "No sé si está comiendo suficiente hierro" | Frecuencia real de consumo |
| 3 | **Plan de loncheras** | 5 loncheras de la semana con ideas ricas en hierro y lista de compras. Con la IA de Gemini cuando hay conexión; si no, usa el recetario propio | "Los jueves ya no sé qué mandar" | Preferencias de sabor |
| 4 | **Control de hemoglobina** | El padre anota la fecha que le indicó el pediatra y la app le recuerda unos días antes. Puede anotar el resultado para ver su evolución | "Que el próximo control salga mejor" | Ninguno: el dato de salud queda solo en el teléfono |
| 5 | **Recompra en un clic** | Calcula cuándo se acaba el pack según cuántos come el niño a la semana y avisa. El botón abre WhatsApp con el pedido ya escrito | "Me olvido de reponer" | Intención de recompra (alimenta el 35 % de recompra del plan) |
| 6 | **Dónde estamos** | Stands y ferias de la semana, con dirección y horario | "¿Dónde los encuentro?" | Qué punto atrae más |
| 7 | **Ajustes y privacidad** | Perfil del niño (solo apodo y edad), consentimiento, candado del modo niño, tiempo de juego, borrar datos | Confianza | Consentimiento registrado (Ley 29733) |

---

## 5. Modo niños: "Misión Hierro"

Lo abre el padre con un candado simple (por ejemplo, "mantén presionado 3 segundos" más una suma). Cada sesión dura lo que el padre fije (10, 15 o 20 minutos).

| Juego | Cómo se juega | Qué aprende |
|---|---|---|
| **Arma tu plato fuerte** | Arrastra alimentos al plato. Si junta uno con hierro y uno con vitamina C, el plato "se enciende" | El hierro se absorbe mejor con vitamina C |
| **Memoria andina** | Voltea cartas y encuentra pares de superalimentos (cañihua, quinua, sangrecita, lenteja, camu camu, aguaymanto…) | Conoce alimentos andinos y amazónicos |
| **¿Verdad o mito?** | Andi dice una frase y el niño elige verdad o mito ("La espinaca tiene más hierro que la sangrecita": mito) | Separa mitos de datos |
| **Ruta de hábitos** | Marca hábitos del día con su papá o mamá: tomar agua, lavarse las manos, dormir temprano, comer fruta | Hábitos saludables |

**Mapa de la misión:** cuatro paradas (Cusco, Titicaca, Arequipa y la Amazonía). Cada juego completado ilumina una parada y Andi gana una pieza de su traje de explorador. **Nada se desbloquea comprando ni escaneando el brownie.**

---

## 6. Diseño: dos lenguajes visuales

| | Modo padres | Modo niños |
|---|---|---|
| Sensación | Limpia, confiable, de pediatría moderna | Aventura, juego, cariño |
| Colores | Crema, cacao y verde salvia, con el rojo hierro solo para los datos clave | Cielo andino, sol, verde montaña y morado quinua, todos saturados y alegres |
| Letra | Sans serif clara, cifras grandes y textos cortos | Redondeada y grande, con frases de 5 palabras o menos y voz |
| Elementos | Tarjetas, semáforo, gráficos simples y botones de una acción | Ilustración de Andi, botones enormes, animaciones suaves y sonidos |
| Accesibilidad | Contraste AA, letra que se agranda y funciona sin conexión | Táctil de 56 px o más, sin necesidad de leer, sin anuncios ni enlaces externos |

---

## 7. Cómo encaja en el recorrido del cliente

```
Compra en el stand ──> Escanea el QR del envase ──> Ve el hierro de su lote (confianza)
        │                                                 │
        │                                   Activa el semáforo y las loncheras (uso semanal)
        │                                                 │
        └──── Recompra por WhatsApp <── Aviso "se acaba tu pack" <── El niño juega Misión Hierro (vínculo)
```

En el stand, el vendedor muestra la app en una tablet: "Escanea y mira el hierro de este lote". Es el argumento que justifica pagar S/6.00 por la unidad y S/27.90 por el pack de 6.

---

## 8. Lo que cuidamos por ley

| Norma | Qué exige | Cómo lo cumple la app |
|---|---|---|
| **Ley 30021, art. 8** (publicidad dirigida a menores de 16) | No premios ni regalos para fomentar la compra; no personajes que los niños admiren recomendando el producto; no explotar su ingenuidad | El modo niño no muestra el producto, ni precios, ni botones de compra. Andi enseña a comer hierro en general y nunca dice "come AndiBite". Los logros salen de jugar, no de comprar |
| **Ley 29733** (datos personales) | Consentimiento, finalidad clara y derecho a borrar | Del niño solo pedimos apodo y edad. Los datos de salud quedan en el teléfono. El padre acepta un consentimiento y puede borrar todo con un botón |
| **Rotulado y declaraciones** | No atribuir propiedades de curar o prevenir enfermedades | Decimos "aporta hierro" y "hierro medido por lote", nunca "previene la anemia". El semáforo es orientativo y no reemplaza al pediatra |
| **Octógono** | Mostrar la advertencia | La ficha del lote muestra el octógono vigente y el azúcar por porción |

---

## 9. Tecnología y despliegue

- **Tipo de app:** aplicación web progresiva (PWA) instalable en Android y iPhone desde el navegador. Funciona sin conexión para lo básico. No paga comisiones de tiendas de apps.
- **Construcción:** React con TypeScript (Vite) en el frente. Un servidor ligero en Node.js atiende los lotes, los códigos y el plan de loncheras con IA. Los datos van en Firestore de Google o, en la versión inicial, en un archivo del servidor.
- **IA:** el plan de loncheras usa la API de Gemini cuando se configura la clave en el servidor (nunca en el teléfono). Sin clave, usa el recetario propio.
- **Despliegue:** un contenedor en **Google Cloud Run** (escala a cero cuando nadie la usa, así que el costo base es casi nulo). También se puede abrir y publicar desde **Google AI Studio**.
- **Códigos únicos:** se generan por lote (por ejemplo, `AB-2701-7K3Q`) y se imprimen como QR con dato variable en la etiqueta. Cada código queda asociado a su lote y su presentación.

---

## 10. Costos (ya en el Excel v6)

| Concepto | Monto | Dónde está en el Excel |
|---|---|---|
| Diseño, desarrollo, pruebas y publicación de la app (desarrollador freelance) | S/6,000, una vez | Inversion, línea "Web, dominio y app" (S/6,150 con la web) |
| Servidor (Cloud Run), base de datos (Firestore), envío de recordatorios, IA del plan de loncheras y mantenimiento mensual | S/250 al mes (S/3,000 al año) | Supuestos B68, Administración (S/1,010 al mes) |
| Código único impreso con dato variable | S/0.04 por etiqueta | Supuestos B10 (etiqueta individual S/0.29) y B20 y B22 (etiquetas del doypack S/0.76) |
| Análisis de hierro de cada lote, para publicar el dato real | S/375 por lote mensual | Supuestos B12 (control de calidad S/0.142 por brownie) |
| Códigos de las primeras 3,000 etiquetas | S/120 | Inversion, empaque inicial (S/3,150) |

**Desglose de los S/6,000:** diseño de pantallas e ilustración de Andi S/1,500; desarrollo del modo padres y del servidor S/2,500; desarrollo del modo niños (4 juegos y voz) S/1,500; pruebas con 10 familias, ajustes y publicación S/500.

**Efecto en el resultado:** la app, los códigos y el análisis por lote restan unos S/7,500 al resultado operativo del año 1: S/3,000 de servidor y mantenimiento, unos S/1,400 de códigos y unos S/3,100 de análisis de hierro. A eso se suman los S/6,000 de la inversión, que se financian con el préstamo. Con los precios nuevos, el año 1 cierra con un resultado operativo de **S/14,853** y una utilidad neta de **S/10,675.68**. La inversión se recupera en el **mes 24**. Si el análisis de hierro se hace cada 2 lotes, el resultado sube a S/17,102 (mes 22).

---

## 11. Dónde aparece en el Canvas y en el mapa de valor

| Bloque | Qué aporta la app |
|---|---|
| Propuesta de valor | "Hierro medido y verificable": el padre ve el dato de su lote |
| Relaciones con el cliente | Asistencia automatizada (recordatorios y loncheras) y comunidad de padres |
| Canales | Canal digital de recompra que lleva a WhatsApp |
| Recursos clave | La app y la base de datos de compras: un recurso digital difícil de copiar |
| Actividades clave | Mantener la app y publicar el análisis de cada lote |
| Socios clave | Laboratorio de análisis, desarrollador de la app y Google Cloud |
| Estructura de costos | S/6,000 de inversión y S/250 al mes, más los códigos y el análisis por lote |
| Mapa de valor | **Aliviador:** "sé cuánto hierro tiene". **Creador de alegría:** "mi hijo juega y aprende a comer hierro" |

---

## 12. Cómo sabremos si funciona (indicadores)

| Indicador | Meta del año 1 |
|---|---|
| Envases cuyo código se escanea | 30 % o más |
| Padres que usan la app al menos una vez por semana | 40 % de los registrados |
| Recompra que llega desde el aviso de la app | La mitad de la recompra por WhatsApp |
| Calificación de los padres (encuesta dentro de la app) | 4.5 de 5 o más |
| Sesiones del modo niño dentro del tiempo fijado por el padre | 100 % (el límite se aplica solo) |

---

## 13. Riesgos y cómo los manejamos

| Riesgo | Cómo lo manejamos |
|---|---|
| Que la usen pocos padres | El vendedor la muestra en el stand y el QR está en el frente del envase. La primera pantalla da el dato del lote en 2 segundos |
| Que el modo niño se lea como publicidad infantil | Se diseñó sin producto, sin compras y sin premios por comprar. Lo revisamos con el abogado del contrato de maquila |
| Que el análisis de hierro de un lote salga bajo | Se publica igual (transparencia) y se ajusta la dosis en el siguiente lote |
| Costos de IA | El plan de loncheras se genera una vez por semana y por familia y se guarda. Sin clave, funciona el recetario |
| Que el desarrollador se vaya | El código queda en el repositorio del equipo, con instrucciones de despliegue |

---

## 14. Calendario

| Mes | Qué pasa |
|---|---|
| Octubre de 2026 | Prototipo funcional terminado (sección 15) |
| Noviembre de 2026 | Prueba con 10 familias del focus y ajustes |
| Diciembre de 2026 | Versión final, primeros lotes con código y análisis de hierro |
| Enero de 2027 (mes 1) | Lanzamiento junto con el primer stand |
| Junio de 2027 | Primera revisión: indicadores y nuevas recetas de lonchera |
| Año 2 | Fase 2: realidad aumentada de Andi en la web, si los indicadores lo justifican |

---

## 15. Prototipo funcional

La app ya existe como prototipo casi terminado, lista para publicarse. El código está en `../app-andi-mision-hierro/`, con su guía de instalación y despliegue en el `README.md` de esa carpeta.

| Qué tiene | Detalle |
|---|---|
| Modo padres | Bienvenida con consentimiento, perfiles por hijo, lote por QR o código, semáforo de hierro, plan de loncheras (Gemini o recetario), despensa con aviso y pedido por WhatsApp, control de hemoglobina, puntos de venta, ajustes y borrado de datos |
| Modo niños | Candado para padres, tiempo de juego, mapa con 4 paradas, los 4 juegos con voz, estrellas y traje de Andi |
| Panel del equipo (`/admin`) | Publicar el análisis de cada lote, generar códigos e imprimir la hoja de QR o bajar el CSV para la imprenta, ver escaneos por lote y editar los puntos de venta |
| Tecnología | App web instalable que funciona sin conexión; servidor Node.js; datos en Firestore; contenedor para Google Cloud Run |
| Pruebas | 11 pruebas automáticas de la lógica (códigos, semáforo y loncheras) y un recorrido automático por todas las pantallas |

**Códigos de demostración** (lotes marcados DEMO):

| Código | Lote |
|---|---|
| AB-2ANS-GYZ4 | Chispa, pack de 6 |
| AB-2J7E-4DDY | Andi, pack de 6 |
| AB-MF83-HSNE | Lúcu, pack de 12 |

Capturas en `../app-andi-mision-hierro/capturas/`. También están en la diapositiva 30 de la TC5-8 y en la 12 de la T1.

**Antes de lanzar:**
- Cargar los informes reales del laboratorio.
- Poner el número de WhatsApp y el registro sanitario.
- Definir el dominio que irá dentro de cada QR.
- Revisar los textos legales con el abogado.
