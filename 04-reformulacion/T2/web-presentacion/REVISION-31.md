# Observaciones de Carlos (19-oct-2026) y estado

Estado: **ABIERTO. UNDÉCIMA VERIFICACIÓN DEL DIRECTOR, 19-oct-2026, 23:20** (commits `f2c9317`, GUIONES-voz.md nuevo, y `6e4ada4`: style.css:1446 `.media-conv { height: 36vh; width: auto; aspect-ratio: 9 / 16; }` en celular, CAMPANA:3 y :128, sección «13.»; capturas regeneradas a las 23:04-23:05; andibite.cingacordova.workers.dev descargado a las 23:18, igual a dist/index.html salvo las etiquetas del build (index-DosRA6Px.js, index-CwBSeViG.css, que trae `.media-conv{height:36vh;width:auto;aspect-ratio:9 / 16}`); app y HECHOS_v7.md sin cambios desde `df557e1`). Resultado: **30 CUMPLIDOS y 1 NO CUMPLIDO (29)**; 24 y 25 cierran, pero GUIONES-voz.md no coincide con la presentación y usa «sorteo»: fallan dos transversales (Guiones de voz y Palabras prohibidas). No se cierra.
Décima verificación (commit `e3edd84`): 28 y 3 (24, 25 y 29); transversales cumplían.
Novena verificación (commit `df557e1`): 27 y 4 (24, 25, 26 y 29). Octava verificación (commits `f5b96bc` y `380dd8a`): 28 y 3 (24, 25 y 29). Séptima verificación (commit `19d3f81`): 27 y 4 (23, 25, 26 y 29). Sexta (commit `397656a`): 31 y 0. Quinta (commit `0ef5cf9`): 28 y 3.
Cuarta (commit `8d9f6d5`): 31 y 0. Tercera (commit `58efd7d`): 29 y 2. Segunda (commit `331f3a6`): 25 y 6. Primera (commit `c7adaf2`): 21 y 10.
Formato: `N. [CUMPLIDO|NO CUMPLIDO] evidencia · qué falta`. "Casi" cuenta como NO CUMPLIDO. Numeración de pantallas: 27 portada de campaña … 36 videos de marca, 37-39 anuncios, 40 y otros lo cuentan por nosotros, 41 stand, 42 equipo, 43 QR, 44 cierre; anexos 45 a 48 (index.html:950, :979, :1003 y :1021).

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
   **[CUMPLIDO]** style.css:1446 (última regla del archivo, dentro de `@media (orientation: portrait), (max-width: 700px)`) fija `height: 36vh; width: auto; aspect-ratio: 9 / 16`; gana a `.media-v { width: min(100%, 300px) }` de :1106 porque va después y con la misma especificidad. Captura celular-36 (390 × 844, 23:05): el marco «VIDEO convocatoria · 9:16 · 15 s» mide unos 170 × 304 px, vertical, centrado bajo el título y sin tocar las tarjetas. Escritorio-36 (23:04) sin cambios: el «¿» del título queda por encima del marco. El CSS publicado trae la misma regla.

25. Agente creativo de campaña desarrolló la campaña.
   **[CUMPLIDO]** CAMPANA:128 abre con «**Concurso #LoQueNadieVe (S/600).**» y la cifra S/360 + S/240 sale una sola vez en el punto; CAMPANA:3 dice «Textos para las 18 pantallas del capítulo 05», igual al hilo de :14 (18 títulos); la segunda sección «## 12.» pasó a «## 13. Orden del capítulo en la presentación» (:214), y ya no hay dos secciones con el mismo número. GUIONES-voz.md (nuevo) se revisa aparte, en la transversal «Guiones de voz».

26. Agente redactor aplicó la revisión de redacción a todo.
   **[CUMPLIDO]** La 39 ya no repite la frase: el antetítulo es «Los materiales · testimonio de una familia real» (index.html:830) y «una de las tres familias ganadoras del concurso» queda solo en «Cómo se hace» (:835). Se ve en escritorio-39 (22:56) y en el HTML publicado (una sola vez cada una). Desaparece también el doble «de una de». CAMPANA:94 coincide con :835.

27. Director verificó todos los puntos.
   **[CUMPLIDO]** Once verificaciones con evidencia por punto; esta sobre 6e4ada4 y f2c9317, con capturas, código, CAMPANA, PROMPTS, GUIONES, HECHOS y el sitio publicado.

28. Logo AndiBite pequeño en todas las pantallas.
   **[CUMPLIDO, con excepción aceptada]** Visible en 30, 36, 39, 40 y 41 (capturas de e3edd84), en celular-36 y en los anexos. Portada y cierre con logo grande.

29. Ciclo de revisión (/loop) hasta cumplir todo.
   **[NO CUMPLIDO]** Cierran 24 y 25, pero el material nuevo GUIONES-voz.md no pasa la revisión (transversales «Guiones de voz» y «Palabras prohibidas»). · Falta: las siete correcciones de la transversal «Guiones de voz» y pasar la duodécima verificación.

30. App: control de hierro del día mejorado (ver 6).
   **[CUMPLIDO]** Sin cambios.

31. Juegos con niveles y duración, tres juegos de colegio por edad.
   **[CUMPLIDO]** Sin cambios.

## Revisión transversal

- **T1 · Canvas, pantalla 14.** **[CUMPLIDO]** Captura escritorio-14, 9 cajas sin cortes.
- **Coherencia del hilo.** **[CUMPLIDO]** En la presentación, el orden 27 → 44 se lee seguido: lo que nadie ve → todos tienen un truco → hicimos el nuestro → dinámica → metas → gasto → partidas → etapas → Gantt → hablamos nosotros (36) → anuncios (37-39) → otros lo cuentan (40) → stand (41) → equipo → QR → cierre (data-title y h2 de index.html:562-945; escritorio-36, 39 y 40).
  En el documento de campaña: CAMPANA:123 ya no dice «Antes que nosotros…» y no contradice CAMPANA:228; CAMPANA:14 nombra las 18 pantallas en el mismo orden que la presentación (diez títulos iguales al h2, 37 y 38 iguales al data-title).
  La tarjeta del concurso termina igual en la 40 (:854) y en CAMPANA:128, y no repite el mural de la 30 ni la presentación de ganadores de la 36. Tres ganadores en 30 (:626), 36 (:776), 39 (:835), 40 (:854), CAMPANA:94 y :128 y HECHOS_v7.md:25.
  En index.html no queda «Antes que nosotros» ni «Primero lo cuentan ellos», tampoco en el comentario de :845 (ahora «40 · Y OTROS LO CUENTAN POR NOSOTROS»).
  Los detalles que no rompen la lectura van en las observaciones.
- **Guiones de voz (GUIONES-voz.md, f2c9317).** **[NO CUMPLIDO]** Cumplen: voz siempre adulta; «superhéroe» y «superpoderes» en la pauta (V0 :19, V1 :38, V4 :29), «Hulk», «combate» y «previene» solo en la regla de :5; V0 cierra con la firma y el cartón «Cuéntanos el tuyo. #LoQueNadieVe» (igual a index.html:775); V4 con «¿Cuál es tu truco?», tres más votados, mes de lonchera y «Este diciembre sí los aplaudimos» (igual a :774 y PROMPTS:138); V3 el 2 de enero en Jockey Plaza con una familia ganadora (igual a :835); duraciones 16, 15 y 8 s iguales a los data-note. No coinciden con la presentación: (1) GUIONES:48, V2, «el que termina primero» y la 38 dice «el que se lo acaba primero elige la música del carro» (index.html:810, CAMPANA:73, PROMPTS:108). (2) GUIONES:40, V1, «Ahora su hierro va en un mini brownie que me pide» y la 37 dice «va escondido en» (index.html:790); sin «escondido» se pierde el truco. (3) GUIONES:59, V3, «Ahora no le cuento nada: la lonchera vuelve vacía.»: la voz del testimonio nunca nombra el brownie; la 39 dice «le mando su brownie y la lonchera vuelve vacía» (index.html:832). (4) GUIONES:68-70, P1: «Siete y diez» y la 23 dice «6:40 a. m.» (index.html:480); y las tomas «La lonchera vuelve con todo» y «Mira el celular, suspira» no son las del video que se genera (PROMPTS P1: cocina y etiqueta, oficina con el celular y sonrisa, lonchera vacía y sonrisa), así que la voz «mi hijo lo deja» cae sobre una lonchera vacía. (5) GUIONES:76-78, P2: las tomas «Mira el precio por brownie en el celular» y «Sale por la puerta» no son las de PROMPTS P2 (café, lonchera y llaves; mensaje en el almacén; recibe la caja de 12); «No me vendas salud. Véndeme una mañana menos.» va con coma en la 23 (index.html:490). (6) GUIONES:21 y :23, V0: la tabla pone voz sobre el cartón (13 a 16 s) y la dirección dice «El cartón final va en silencio, solo con la música»; además las líneas de :19 no son las del manifiesto (index.html:601-603: «dentro de la torta», «Le pusiste nombre de dinosaurio a la sopa»). (7) GUIONES:30, V4: «abren nuestro mural» sin «en Jockey Plaza», que sí trae el texto en pantalla (PROMPTS:138). · Falta: (1) «Mi truco: el que se lo acaba primero elige la música del carro.»; (2) «Ahora su hierro va escondido en un mini brownie que me pide.»; (3) «Ahora no le cuento nada: le mando su brownie y la lonchera vuelve vacía.»; (4) P1 con las tomas de PROMPTS y la hora de la 23: 0 a 3 «Seis y cuarenta. Leo la etiqueta de todo.», 3 a 5 (oficina, celular) «Todo lo que le hace bien, mi hijo lo deja.», 5 a 8 (lonchera vacía) «Hoy volvió vacía.» (o cambiar index.html:480 a 7:10 y dejar «Siete y diez»); (5) P2 con las tomas de PROMPTS: 0 a 3 «Seis y cinco. Café, dos loncheras, llaves.», 3 a 5 (almacén, mensaje) «No me vendas salud, véndeme una mañana menos.», 5 a 8 (caja de 12) «La semana entera, en un pack de 12.»; (6) V0 :19 «Rallaste zanahoria dentro de la torta. Le pusiste nombre de dinosaurio a la sopa. Y el jugo verde fue de superhéroe toda una semana.» y en :23 cambiar «El cartón final va en silencio, solo con la música.» por «La firma se dice sobre el cartón; después, solo música.»; (7) V4 :30 «Los tres más votados abren nuestro mural en Jockey Plaza y ganan un mes de lonchera.»
- **Papá y mamá.** **[CUMPLIDO]** Ver punto 9.
- **Palabras prohibidas y frases espejo.** **[NO CUMPLIDO]** GUIONES-voz.md:32 usa «sorteo» en la dirección de V4 («El segundo bloque es una invitación, no un anuncio de sorteo»); no es la lista de reglas de :5 y es la palabra que el concurso evita (CAMPANA, legal). · Falta: GUIONES:32 «El segundo bloque es una invitación a participar: tono de amiga que te convence.». El resto cumple: grep en index.html, src/*.ts y src/*.css de la presentación, src/ de la app, CAMPANA, PROMPTS, GUIONES y el HTML publicado: sin "supuesto" (solo dentro de "presupuesto"; en HECHOS_v7.md solo en las reglas, :4, :27 y :270), "estimado", "[POR CONFIRMAR]" (solo en HECHOS_v7.md, notas internas :44, :78, :271), "EXPOINNOVA", "sorteo" (salvo GUIONES:32), "rifa", "Nosotros sí", "su prueba", "la tuya" (solo en la lista de CAMPANA:210) ni el slogan viejo "Hierro medido. Sabor a brownie." (solo en HECHOS como antecedente). El par en eco «Primero hablamos nosotros» / «Primero lo cuentan ellos.» desapareció: la 40 es «Y otros lo cuentan por nosotros.», con otra estructura; es continuación de la 36, no espejo.
- **Cifras (30 ↔ 31 ↔ 32 ↔ 33 ↔ 34 ↔ 36 ↔ 37-39 ↔ 40 ↔ anexos ↔ CAMPANA ↔ HECHOS).** **[CUMPLIDO]** e3edd84 no cambia cifras: la tarjeta de la 40 sigue con S/600 = S/360 + S/240 (:854) y CAMPANA:128 trae las mismas (repetidas, ver punto 25). Siguen: 12 partidas = 24,544 (:695-708); 4,050 + 1,000 = 5,050 = 1,605 + 1,605 + 1,840 (:795, :816, :837); 613 = 195 + 195 + 223 (:651, :996); etapas = 24,544; brownies 3,700 + 20,320 + 28,311 = 52,331; S/600 = 360 + 240 (:697, :774, :854; HECHOS_v7.md:22). Corregidos los cuatro de la séptima: HECHOS_v7.md:177 (4,050 + 1,000), :205 (100 familias), :23 y CAMPANA:222 (vistas), anexo 2 :993 (S/8.23 = 5,050 ÷ 613; buscamos S/5; alerta si pasa de S/8.23 dos meses seguidos). Video maestro: 16 s y 30 de noviembre en :564, :721, :775, Gantt :747 y HECHOS_v7.md:25.

## Observaciones sin estado (undécima verificación)

- GUIONES: los bloques de 2 s quedan apretados a Speed 1.0 (V1 :40, 11 palabras; V2 :50, 9 palabras): al grabar, medir con cronómetro como pide GUIONES:13 y, si no entra, recortar la voz y dejar el resto en pantalla. La convocatoria V4 no dice «sin tu hijo en cámara»; la historia «Así participas» (CAMPANA:138) sí. PROMPTS F2 y P1 usan 7:10 y la 23 dice 6:40 (viene de antes).
- CAMPANA:14 y CAMPANA:86 llaman a la 39 «Y una familia real cuenta el suyo»; en la presentación su data-title (el que sale en el menú, main.ts:328) es «Una familia real» (index.html:825). Para la 43, CAMPANA:14 dice «Pruébenla» y la pantalla «Pruébenla ahora» (:910 y :914). Para la 44 el hilo usa la línea de abajo («Lo que haces cada mañana, por fin se ve.», :939), no el h2. Viene de antes (c7adaf2) y se aceptó en la sexta; si se toca CAMPANA:3, conviene igualarlo.
- CAMPANA: las secciones 1 a 12 siguen el orden antiguo; el orden vigente está en la sección 13 (:214-228) y en el hilo (:14). Los antetítulos de CAMPANA:59, :73 y :87 son cortos («Anuncio para Claudia · Lima Top», «Testimonial · «Mi truco era…»») y en pantalla dicen «Los materiales · …» (:788, :809, :830).
- Celular: la 30 oculta el marco del mural (celular-30) y la 36 oculta el video maestro (style.css:1439, celular-36). En proyector no afecta.
- El gancho del testimonio («carne de dinosaurio», :831) está escrito antes de saber qué truco gana; CAMPANA:99 ya dice que el guion es referencia y que se usa el truco real. Si preguntan, esa es la respuesta.
- HECHOS_v7.md:22 dice que el concurso va "en la pantalla 33 (tarjeta S/600)"; hoy es la 40. HECHOS_v7.md:23 (orden del capítulo) no nombra la pantalla de videos de marca, aunque la viñeta de :25 sí la ubica.
- HECHOS_v7.md:208 (Expandir) dice "unos 2,300 contactos" y la presentación "unas 2,300 familias en WhatsApp" (:734, :971); no cambia la cifra.
- La 32 dice "En la calle · 74 %: Stands…", pero el alquiler de los stands no está en los S/24,544 (ya anotado en la séptima).

## Cierre de la sexta ronda (19-oct-2026, 22:00)

Los 31 puntos y las 4 transversales cumplían en el commit 397656a. La séptima (19d3f81) reabrió 23, 25, 26 y 29 por el capítulo reordenado; la octava (380dd8a) cierra 23 y 26 y reabre 24 y 25 por la pantalla 36 de videos de marca y el testimonio; la novena (df557e1) cierra las frases espejo y reabre 26 por la repetición de la 39; la décima (e3edd84) cierra 26 y el hilo y deja abiertos 24 (marco cuadrado en celular-36) y 25 (CAMPANA:3 y :128). La undécima (6e4ada4 y f2c9317) cierra 24 y 25 y deja abierto 29 por GUIONES-voz.md (siete textos que no coinciden con la presentación y «sorteo» en :32).
