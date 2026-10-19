# Observaciones de Carlos (19-oct-2026) y estado

Estado: **ABIERTO. OCTAVA VERIFICACIÓN DEL DIRECTOR, 19-oct-2026, 22:50** (commits `f5b96bc` y `380dd8a`: videos de la marca, 44 pantallas + 4 anexos; capturas regeneradas a las 22:42; andibite.cingacordova.workers.dev descargado a las 22:44, igual a index.html salvo las etiquetas del build (index-qmko6LnL.js, index-CJqkde7v.css); app sin cambios desde `8d9f6d5`). Resultado: **28 CUMPLIDOS y 3 NO CUMPLIDOS (24, 25 y 29)**; de las 5 transversales cumplen 3 (T1, papá y mamá, cifras) y fallan 2 (hilo; frases espejo).
Séptima verificación (commit `19d3f81`): 27 y 4 (23, 25, 26 y 29). Sexta (commit `397656a`): 31 y 0. Quinta (commit `0ef5cf9`): 28 y 3.
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
   **[NO CUMPLIDO]** Captura escritorio-36: el marco vertical de la convocatoria (`.media-conv`, style.css:1429, alto `min(38u, 66vh)`) empieza justo debajo de la segunda línea del título y corta el trazo inferior del «¿» de «¿Cuál es tu truco?» (index.html:767); además baja casi hasta la barra de navegación. Es el mismo defecto que Carlos pidió corregir en el stand (punto 19). · Falta: separar el bloque `.marca` del título (margen superior) o bajar el alto de `.media-conv` para que el título quede entero, y regenerar escritorio-36.

25. Agente creativo de campaña desarrolló la campaña.
   **[NO CUMPLIDO]** Cumplen CAMPANA:222 ("400,000 vistas"), HECHOS_v7.md:23 ("vistas"), :177 (S/4,050 + S/1,000), :205 ("100 familias en WhatsApp"), la viñeta "Videos de la marca" (HECHOS_v7.md:25), CAMPANA sección 12, punto 8 (:228) y PROMPTS V4 (:122-138) y cierre de V0 (:140). Pero la decisión "el testimonio lo graba la familia ganadora del concurso (pantalla 39 y CAMPANA)" no llegó a CAMPANA: la sección 6 dice todavía "Cómo se hace: grabado con celular en enero, con una familia embajadora" (CAMPANA:94), contra index.html:835 y HECHOS_v7.md:25 (el commit 380dd8a solo cambió index.html). La sección 7 del stand (CAMPANA:105-108) conserva los tres pasos viejos que la pantalla 41 ya no usa. · Falta: CAMPANA:94 con el mismo texto que la pantalla 39 (ver hilo, c) y CAMPANA:105-108 con los pasos de index.html:868-870.

26. Agente redactor aplicó la revisión de redacción a todo.
   **[CUMPLIDO]** index.html:639 "Cada truco que nos cuentas suma: queremos 300 al 31 de enero." sin eco y lleva a la meta de la 31 (:649). El eco nuevo entre 36 y 40 va en las transversales.

27. Director verificó todos los puntos.
   **[CUMPLIDO]** Ocho verificaciones con evidencia por punto; esta sobre 380dd8a.

28. Logo AndiBite pequeño en todas las pantallas.
   **[CUMPLIDO, con excepción aceptada]** Visible en 30, 36, 39, 40 y 41 (capturas) y en los anexos. Portada y cierre con logo grande.

29. Ciclo de revisión (/loop) hasta cumplir todo.
   **[NO CUMPLIDO]** La octava reabre 24 y 25 y dos transversales. · Falta: corregir 24, 25, hilo y frases espejo, regenerar capturas y pasar la novena verificación.

30. App: control de hierro del día mejorado (ver 6).
   **[CUMPLIDO]** Sin cambios.

31. Juegos con niveles y duración, tres juegos de colegio por edad.
   **[CUMPLIDO]** Sin cambios.

## Revisión transversal

- **T1 · Canvas, pantalla 14.** **[CUMPLIDO]** Captura escritorio-14, 9 cajas sin cortes.
- **Coherencia del hilo.** **[NO CUMPLIDO]** Resueltos los tres fallos de la séptima en lo que se pidió: 29 → 30 sin eco (:639); 30 → 41 con pasos propios del stand (:868-870). Quedan tres:
  (a) 36 ↔ 40 se contradicen. La 36 dice «Primero hablamos nosotros» y pone la voz de la marca desde el 1 de noviembre (:767, :774); la 40 dice «Antes que nosotros, hablan los que ya tienen un truco» y «Primero lo cuentan ellos.» (:848-849), y sus influencers van antes del 10 de enero y sus embajadores en 2027 (:851-853), es decir, después de la marca. · Falta: quitar "Primero" y "Antes que nosotros" de una de las dos. Lo más simple: 40 con antetítulo "Los que ya tienen un truco lo pasan de casa en casa" y título "Y después lo cuentan ellos." (o el que decida Carlos), y lo mismo en CAMPANA sección 8 (:122-123), CAMPANA:228 y HECHOS_v7.md:23.
  (b) 30 → 40: la tarjeta del concurso sigue repitiendo la 30. :854 termina "…un mes de lonchera para cada adulto ganador y su truco en el mural de Jockey Plaza." = :626 "Los 3 trucos más votados abren el mural de Jockey Plaza…" (y la 36, :776, ya presenta a los ganadores en Jockey Plaza). · Falta: borrar "y su truco en el mural de Jockey Plaza" de :854, como se pidió en la séptima.
  (c) 39 ↔ 30 ↔ 36: hay tres ganadores (:626 "Los 3 trucos más votados", :776 "presentamos a los tres ganadores", CAMPANA 8b), pero la 39 habla de uno: "el truco ganador del concurso" (:830) y "con la familia que ganó el concurso" (:835). · Falta: ":830 testimonio de una familia real: uno de los trucos ganadores del concurso" y ":835 Grabado con celular el 2 de enero en Jockey Plaza, con una de las tres familias ganadoras. Sin costo de producción."; el mismo texto en CAMPANA:94 (punto 25).
- **Papá y mamá.** **[CUMPLIDO]** Ver punto 9.
- **Palabras prohibidas y frases espejo.** **[NO CUMPLIDO]** Grep en index.html, src/ de la presentación y de la app, CAMPANA, PROMPTS y el HTML publicado: sin "supuesto" (solo dentro de "presupuesto"), "estimado", "[POR CONFIRMAR]", "EXPOINNOVA", "sorteo", "rifa", "Nosotros sí" ni el slogan viejo "Hierro medido. Sabor a brownie." (style.css:451 "MEDIDO, NO PROMETIDO" es un comentario de CSS, no se ve). Falla por el par en eco «Primero hablamos nosotros» / «Primero lo cuentan ellos.» (:767 y :849, cuatro pantallas de distancia, misma estructura "Primero + nosotros/ellos"), que CAMPANA:210 prohíbe. Se resuelve con el cambio del hilo (a).
- **Cifras (30 ↔ 31 ↔ 32 ↔ 33 ↔ 34 ↔ 36 ↔ 37-39 ↔ 40 ↔ anexos ↔ CAMPANA ↔ HECHOS).** **[CUMPLIDO]** Sin cambios en las cifras: 12 partidas = 24,544 (:695-708); 4,050 + 1,000 = 5,050 = 1,605 + 1,605 + 1,840 (:795, :816, :837); 613 = 195 + 195 + 223 (:651, :996); etapas = 24,544; brownies 3,700 + 20,320 + 28,311 = 52,331; S/600 = 360 + 240 (:697, :774, :854; HECHOS_v7.md:22). Corregidos los cuatro de la séptima: HECHOS_v7.md:177 (4,050 + 1,000), :205 (100 familias), :23 y CAMPANA:222 (vistas), anexo 2 :993 (S/8.23 = 5,050 ÷ 613; buscamos S/5; alerta si pasa de S/8.23 dos meses seguidos). Video maestro: 16 s y 30 de noviembre en :564, :721, :775, Gantt :747 y HECHOS_v7.md:25.

## Observaciones sin estado (octava verificación)

- Celular: la 30 oculta el marco del mural (celular-30) y la 36 oculta el video maestro (style.css:1439, celular-36). En proyector no afecta.
- El gancho del testimonio («carne de dinosaurio», :831) está escrito antes de saber qué truco gana; CAMPANA:99 ya dice que el guion es referencia y que se usa el truco real. Si preguntan, esa es la respuesta.
- HECHOS_v7.md:22 dice que el concurso va "en la pantalla 33 (tarjeta S/600)"; hoy es la 40. HECHOS_v7.md:23 (orden del capítulo) no nombra la pantalla de videos de marca, aunque la viñeta de :25 sí la ubica. CAMPANA:14 (hilo de títulos) sigue con el orden anterior al reordenamiento.
- HECHOS_v7.md:208 (Expandir) dice "unos 2,300 contactos" y la presentación "unas 2,300 familias en WhatsApp" (:734, :971); no cambia la cifra.
- La 32 dice "En la calle · 74 %: Stands…", pero el alquiler de los stands no está en los S/24,544 (ya anotado en la séptima).

## Cierre de la sexta ronda (19-oct-2026, 22:00)

Los 31 puntos y las 4 transversales cumplían en el commit 397656a. La séptima (19d3f81) reabrió 23, 25, 26 y 29 por el capítulo reordenado; la octava (380dd8a) cierra 23 y 26 y reabre 24 y 25 por la pantalla 36 de videos de marca y el testimonio.
