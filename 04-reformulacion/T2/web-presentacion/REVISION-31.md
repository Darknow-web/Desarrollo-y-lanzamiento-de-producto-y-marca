# Observaciones de Carlos (19-oct-2026) y estado

Estado: **ABIERTO. NOVENA VERIFICACIÓN DEL DIRECTOR, 19-oct-2026, 22:55** (commit `df557e1`: marco de la 36, testimonio de las tres familias ganadoras, pantalla 40 "Y otros lo cuentan por nosotros.", CAMPANA y HECHOS; capturas regeneradas a las 22:49-22:50; andibite.cingacordova.workers.dev descargado a las 22:52, igual a dist/index.html salvo las etiquetas del build (index-CEmEMpn5.js, index-MCa4Gz7M.css, con las reglas nuevas de style.css:1443-1444); app sin cambios desde `8d9f6d5`). Resultado: **27 CUMPLIDOS y 4 NO CUMPLIDOS (24, 25, 26 y 29)**; de las 5 transversales cumplen 4 (T1, papá y mamá, palabras y frases espejo, cifras) y falla 1 (hilo). No se cierra.
Octava verificación (commits `f5b96bc` y `380dd8a`): 28 y 3 (24, 25 y 29). Séptima verificación (commit `19d3f81`): 27 y 4 (23, 25, 26 y 29). Sexta (commit `397656a`): 31 y 0. Quinta (commit `0ef5cf9`): 28 y 3.
Cuarta (commit `8d9f6d5`): 31 y 0. Tercera (commit `58efd7d`): 29 y 2. Segunda (commit `331f3a6`): 25 y 6. Primera (commit `c7adaf2`): 21 y 10.
Formato: `N. [CUMPLIDO|NO CUMPLIDO] evidencia · qué falta`. "Casi" cuenta como NO CUMPLIDO. Numeración de pantallas: 27 portada de campaña … 36 videos de marca, 37-39 anuncios, 40 primero lo cuentan ellos, 41 stand, 42 equipo, 43 QR, 44 cierre; anexos 45 a 48 (index.html:950, :979, :1003 y :1021).

1. Entre la 4 y la 5 aparece AndiBite: el divisor dice "Nuestra respuesta: AndiBite" y la 5 explica brevemente qué es.
   **[CUMPLIDO]** index.html:102-131 sin cambios. Capturas escritorio-04 y 05.

2. Pantalla 6: sin repeticiones con la 5; nada contradictorio; fechas por semanas.
   **[CUMPLIDO]** index.html:141-145 sin cambios. Captura escritorio-06.

3. Pantalla 10: cada hallazgo muestra qué decisión tomamos con él; título coherente.
   **[CUMPLIDO]** index.html:201-206. Captura escritorio-10.

4. Pantalla 12: "no necesita refrigeración" (no "frío").
   **[CUMPLIDO]** index.html:237. Captura escritorio-12.

5. Pantalla 13: la razón "horno, moldes y balanza" explica que lo hace la maquila sin invertir en maquinaria.
   **[CUMPLIDO]** index.html:271. Captura escritorio-13.

6. Propuesta de valor y app: control del hierro del día, suma de brownie, lonchera y otras comidas, resumen para el padre o la madre que no está en casa. App minimalista.
   **[CUMPLIDO]** App sin cambios desde 8d9f6d5; evidencia de la cuarta y sexta sigue válida (Reto.tsx:137, src/lib/compartir.ts:17, tests/logica.test.ts:120; app-capturas5/10-hoy).

7. Pantalla 15 con impacto visual.
   **[CUMPLIDO]** index.html:336-354. Captura escritorio-15.

8. Pantalla 19: capturas con marco y sombra.
   **[CUMPLIDO]** index.html:403-412. Captura escritorio-19.

9. Toda la presentación y la app hablan a papá y mamá, no solo a la mamá.
   **[CUMPLIDO]** Textos nuevos: "cada adulto ganador" (:854), "Papás y mamás embajadores" (:853), V3 y V4 de PROMPTS con adultos y sin niños. "Mamá" suelta solo en hechos (8 mamás de la degustación, :172 y :212-232) y en citas (:582-584). App sin "la mamá" suelta.

10. Pantalla 21: una sola cifra de recompra explicada.
   **[CUMPLIDO]** index.html:452; la 31 repite el mismo 35 % (:653).

11. Buyer persona dinámico.
   **[CUMPLIDO]** index.html:468-497. Captura escritorio-23.

12. Pantalla 24: ejes y cuadrantes profesionales; sin la línea de riesgo.
   **[CUMPLIDO]** src/mapa.ts sin cambios. Captura escritorio-24.

13. Pantalla 25: sin "cómo lo calculamos"; hogares en una línea.
   **[CUMPLIDO]** index.html:516-530. Captura escritorio-25.

14. Stands consistentes: Jockey Plaza enero, Salaverry febrero, La Molina agosto.
   **[CUMPLIDO]** index.html:630, :724-732, :776 ("El 2 de enero, en Jockey Plaza"), :835, :881.

15. Campaña potente y emocional, sin "su prueba… la tuya…".
   **[CUMPLIDO]** index.html:562-907. Grep sin "su prueba" ni "la tuya" (solo en la lista de frases que se evitan, CAMPANA:210).

16. "Contactos en espera" explicado o eliminado.
   **[CUMPLIDO]** Sin resultados en index.html; HECHOS_v7.md:205 ahora dice "100 familias en WhatsApp".

17. Concepto de campaña no genérico; conecta emocionalmente.
   **[CUMPLIDO]** Insight (:576-588), manifiesto (:591-613), dinámica (:616-641). Capturas escritorio-27 a 30.

18. Pantalla 5-3-2 eliminada.
   **[CUMPLIDO]** Grep sin resultados.

19. Pantalla del stand: la imagen no tapa el título; "recomendación" pasa a ser parte de la campaña.
   **[CUMPLIDO]** Stand es la 41 (:860-889); captura escritorio-41: el marco va debajo del título y los pasos son propios del stand (mural y trípode, mesa de degustación, caja y QR, :868-870).

20. Pantalla de etapas con detalle.
   **[CUMPLIDO]** La 34 (:714-737), S/1,758 + 5,796 + 9,770 + 7,220 = 24,544. Captura escritorio-34.

21. Pantalla de gasto con cifras y título coherente; títulos encadenados.
   **[CUMPLIDO]** 32 (:662) y 33 (:691) sin cambios; 12 partidas = 24,544 (:695-708); 7,596 + 6,858 + 5,950 + 4,140 = 24,544.

22. Sin textos pequeños sueltos.
   **[CUMPLIDO]** Pantallas 30 y 36 sin pies sueltos (escritorio-30 y 36).

23. Imágenes en lugares estratégicos en la mayoría de pantallas.
   **[CUMPLIDO]** 23 de 44 pantallas con foto, captura o marco (52 %): 1, 3, 5, 8, 11, 12, 15, 16, 18, 19, 20, 23, 25, 27, 29, 30, 36, 37, 38, 39, 41, 42 y 44. Nuevos: marco del mural en la 30 (:638, escritorio-30) y dos marcos de video en la 36 (:770-771, escritorio-36). La colisión del marco de la 36 con el título va en el punto 24.

24. Agente de diseño revisó las capturas de las dos apps.
   **[NO CUMPLIDO]** Escritorio resuelto: en escritorio-36 el «¿» de «¿Cuál es tu truco?» (index.html:767) termina unos 14 px antes del marco (y 338 frente a y 352) y el marco acaba en y 978, lejos de la barra (y 1038). Pero la regla nueva `.media-conv { height: min(calc(33 * var(--u)), 58vh); }` (style.css:1443) va después del bloque `@media (orientation: portrait), (max-width: 700px)` (:1435-1441) y anula su `height: 36vh` (:1438): en celular-36 el marco de la convocatoria pasó de unos 300 px de alto (captura de df557e1~1) a unos 128 px, una franja horizontal de 300 × 128 rotulada «9:16 · 15 s». El arreglo afectó otra vista. · Falta: dejar la regla de :1443 sin efecto en vertical (moverla antes de :1435 o repetir `.media-conv { height: 36vh; }` dentro de un `@media (orientation: portrait), (max-width: 700px)` después de :1444) y regenerar celular-36.

25. Agente creativo de campaña desarrolló la campaña.
   **[NO CUMPLIDO]** Cumplen ahora CAMPANA:94 (igual a index.html:835), CAMPANA:105-108 (los tres pasos de index.html:868-870), el título de CAMPANA sección 8 (:120 y :122), CAMPANA:228 y HECHOS_v7.md:23 y :25. Pero la sección 8 de CAMPANA, que el propio documento llama "textos finales" (:1), no quedó igual a la pantalla 40: la línea sigue siendo «Antes que nosotros, hablan los que ya tienen un truco.» (CAMPANA:123), que contradice «Primero hablamos nosotros» (CAMPANA:228 e index.html:767) y no es el antetítulo de la pantalla (index.html:848); y el punto 4 (CAMPANA:128) mantiene «los 3 más votados abren el mural de Jockey Plaza y ganan un mes de lonchera», el texto que se quitó de la tarjeta (index.html:854). · Falta: CAMPANA:123 «Los materiales · quienes lo pasan de boca en boca» (o el antetítulo que quede en :848) y CAMPANA:128 con el cierre de index.html:854 («un mes de lonchera para cada uno de los tres adultos ganadores»).

26. Agente redactor aplicó la revisión de redacción a todo.
   **[NO CUMPLIDO]** El cambio de la 39 repite la misma frase dos veces en la misma pantalla: el antetítulo dice «testimonio de una de las tres familias ganadoras del concurso» (index.html:830) y «Cómo se hace», a unos centímetros, «con una de las tres familias ganadoras del concurso» (:835); se ve en escritorio-39. Es la clase de repetición que Carlos pidió quitar (puntos 2 y 26); la octava proponía textos distintos para cada lugar. Además «testimonio de una de las…» encadena dos «de una de». · Falta: dejar la frase completa en un solo lugar; por ejemplo :830 «Los materiales · testimonio de una familia ganadora del concurso» y :835 tal como está (o al revés), y regenerar escritorio-39.

27. Director verificó todos los puntos.
   **[CUMPLIDO]** Nueve verificaciones con evidencia por punto; esta sobre df557e1, con capturas, código, CAMPANA, HECHOS y el sitio publicado.

28. Logo AndiBite pequeño en todas las pantallas.
   **[CUMPLIDO, con excepción aceptada]** Visible en 30, 36, 39, 40 y 41 (capturas de df557e1), en celular-36 y en los anexos. Portada y cierre con logo grande.

29. Ciclo de revisión (/loop) hasta cumplir todo.
   **[NO CUMPLIDO]** La novena cierra las frases espejo y el título de la 40, pero quedan 24 (celular-36), 25 (CAMPANA:123 y :128), 26 (repetición en la 39) y el hilo en CAMPANA. · Falta: esas cuatro correcciones, regenerar celular-36 y escritorio-39 y pasar la décima verificación.

30. App: control de hierro del día mejorado (ver 6).
   **[CUMPLIDO]** Sin cambios.

31. Juegos con niveles y duración, tres juegos de colegio por edad.
   **[CUMPLIDO]** Sin cambios.

## Revisión transversal

- **T1 · Canvas, pantalla 14.** **[CUMPLIDO]** Captura escritorio-14, 9 cajas sin cortes.
- **Coherencia del hilo.** **[NO CUMPLIDO]** En la presentación, los tres fallos de la octava están resueltos:
  (a) 36 → 40 ya no se contradicen: la 36 es «Primero hablamos nosotros: «¿Cuál es tu truco?»» (:767) y la 40 «Y otros lo cuentan por nosotros.» con antetítulo «Los materiales · quienes lo pasan de boca en boca» (:848-849, escritorio-40); en index.html no queda «Antes que nosotros» ni «Primero lo cuentan ellos» en texto visible (solo el comentario HTML de :845). Se leen en orden: hablamos nosotros (36) → anuncios (37-39) → otros lo cuentan (40) → stand (41).
  (b) La tarjeta del concurso termina «un mes de lonchera para cada uno de los tres adultos ganadores.» (:854) y ya no repite el mural de la 30 (:626) ni la presentación de la 36 (:776).
  (c) Tres ganadores en todas partes: 30 (:626), 36 (:776), 39 (:830 y :835), 40 (:854), CAMPANA:94 y HECHOS_v7.md:25.
  Falla en el documento de campaña: CAMPANA:123 conserva «Antes que nosotros, hablan los que ya tienen un truco.», que contradice «Primero hablamos nosotros» (CAMPANA:228), y la octava pidió corregir CAMPANA sección 8 (:122-123), no solo el título. · Falta: CAMPANA:123 (ver punto 25).
- **Papá y mamá.** **[CUMPLIDO]** Ver punto 9.
- **Palabras prohibidas y frases espejo.** **[CUMPLIDO]** Grep en index.html, src/*.ts y src/*.css de la presentación, src/ de la app, CAMPANA, PROMPTS y el HTML publicado: sin "supuesto" (solo dentro de "presupuesto"; en HECHOS_v7.md solo en las reglas, :4, :27 y :270), "estimado", "[POR CONFIRMAR]" (solo en HECHOS_v7.md, notas internas :44, :78, :271), "EXPOINNOVA", "sorteo", "rifa", "Nosotros sí", "su prueba", "la tuya" (solo en la lista de CAMPANA:210) ni el slogan viejo "Hierro medido. Sabor a brownie." (solo en HECHOS como antecedente). El par en eco «Primero hablamos nosotros» / «Primero lo cuentan ellos.» desapareció: la 40 es «Y otros lo cuentan por nosotros.», con otra estructura; es continuación de la 36, no espejo.
- **Cifras (30 ↔ 31 ↔ 32 ↔ 33 ↔ 34 ↔ 36 ↔ 37-39 ↔ 40 ↔ anexos ↔ CAMPANA ↔ HECHOS).** **[CUMPLIDO]** df557e1 no cambia cifras (la tarjeta de la 40 sigue con S/600 = S/360 + S/240, :854). Siguen: 12 partidas = 24,544 (:695-708); 4,050 + 1,000 = 5,050 = 1,605 + 1,605 + 1,840 (:795, :816, :837); 613 = 195 + 195 + 223 (:651, :996); etapas = 24,544; brownies 3,700 + 20,320 + 28,311 = 52,331; S/600 = 360 + 240 (:697, :774, :854; HECHOS_v7.md:22). Corregidos los cuatro de la séptima: HECHOS_v7.md:177 (4,050 + 1,000), :205 (100 familias), :23 y CAMPANA:222 (vistas), anexo 2 :993 (S/8.23 = 5,050 ÷ 613; buscamos S/5; alerta si pasa de S/8.23 dos meses seguidos). Video maestro: 16 s y 30 de noviembre en :564, :721, :775, Gantt :747 y HECHOS_v7.md:25.

## Observaciones sin estado (novena verificación)

- CAMPANA:14 (hilo de títulos) se editó en df557e1 pero sigue con el orden anterior al reordenamiento: pone el stand antes de «Y otros lo cuentan por nosotros» y no nombra «Primero hablamos nosotros» ni las pantallas 30 a 35; la presentación va 36 → 37 → 38 → 39 → 40 → 41 (data-title).
- El comentario HTML de index.html:845 dice todavía «40 · PRIMERO LO CUENTAN ELLOS»; no se ve en pantalla.
- Celular: la 30 oculta el marco del mural (celular-30) y la 36 oculta el video maestro (style.css:1439, celular-36). En proyector no afecta.
- El gancho del testimonio («carne de dinosaurio», :831) está escrito antes de saber qué truco gana; CAMPANA:99 ya dice que el guion es referencia y que se usa el truco real. Si preguntan, esa es la respuesta.
- HECHOS_v7.md:22 dice que el concurso va "en la pantalla 33 (tarjeta S/600)"; hoy es la 40. HECHOS_v7.md:23 (orden del capítulo) no nombra la pantalla de videos de marca, aunque la viñeta de :25 sí la ubica.
- HECHOS_v7.md:208 (Expandir) dice "unos 2,300 contactos" y la presentación "unas 2,300 familias en WhatsApp" (:734, :971); no cambia la cifra.
- La 32 dice "En la calle · 74 %: Stands…", pero el alquiler de los stands no está en los S/24,544 (ya anotado en la séptima).

## Cierre de la sexta ronda (19-oct-2026, 22:00)

Los 31 puntos y las 4 transversales cumplían en el commit 397656a. La séptima (19d3f81) reabrió 23, 25, 26 y 29 por el capítulo reordenado; la octava (380dd8a) cierra 23 y 26 y reabre 24 y 25 por la pantalla 36 de videos de marca y el testimonio; la novena (df557e1) cierra las frases espejo y reabre 26 por la repetición de la 39.
