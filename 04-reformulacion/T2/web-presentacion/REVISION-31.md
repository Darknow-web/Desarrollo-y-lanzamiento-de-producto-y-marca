# Observaciones de Carlos (19-oct-2026) y estado

Estado: **ABIERTO. SÉPTIMA VERIFICACIÓN DEL DIRECTOR, 19-oct-2026, 22:40** (commits `e7b0086` y `19d3f81`: capítulo de campaña reordenado, 43 pantallas + 4 anexos; capturas regeneradas, celular 01, 02, 05, 26, 28, 30, 31, 33 y 34; andibite.cingacordova.workers.dev descargado a las 22:25, igual a index.html salvo las etiquetas del build (index-LmbILwZQ.js, index-CZLrwqa7.css); app sin cambios desde `8d9f6d5`, bundle publicado index-BN0oG-Jj.js). Resultado: **27 CUMPLIDOS y 4 NO CUMPLIDOS (23, 25, 26 y 29)**; de las 5 transversales cumplen 2 (T1 y papá y mamá) y fallan 3 (hilo, palabras y frases espejo, cifras).
Sexta verificación (commit `397656a`): 31 y 0. Quinta (commit `0ef5cf9`): 28 y 3 (21, 25 y 29).
Cuarta verificación (commit `8d9f6d5`): 31 y 0. Tercera (commit `58efd7d`): 29 y 2 (26 y 29), más el hilo.
Segunda verificación (commit `331f3a6`): 25 y 6. Primera (commit `c7adaf2`): 21 y 10.
Formato: `N. [CUMPLIDO|NO CUMPLIDO] evidencia · qué falta`. "Casi" cuenta como NO CUMPLIDO. Numeración de pantallas nueva: 27 portada de campaña … 43 cierre; anexos 44 a 47 (index.html:930, :959, :983 y :1001).

1. Entre la 4 y la 5 aparece AndiBite: el divisor dice "Nuestra respuesta: AndiBite" y la 5 explica brevemente qué es.
   **[CUMPLIDO]** index.html:102-131 sin cambios. Capturas escritorio-04 y 05 regeneradas. Hilo general de las 43 capturas: problema (1-3), AndiBite (4-5), investigación (6-13), producto (14-16), app (17-21), mercado (22-26), campaña (27-41), pruébenla (42) y cierre (43). Los fallos de hilo dentro de la campaña van en la transversal.

2. Pantalla 6: sin repeticiones con la 5; nada contradictorio; fechas por semanas (S1–S4 entrevistas, S5 focus, S6 degustación, S7 cambio a A y B, hoy T2).
   **[CUMPLIDO]** index.html:141-145 sin cambios. Captura escritorio-06.

3. Pantalla 10: cada hallazgo muestra qué decisión tomamos con él; título coherente.
   **[CUMPLIDO]** index.html:201-206. Captura escritorio-10.

4. Pantalla 12: "no necesita refrigeración" (no "frío").
   **[CUMPLIDO]** index.html:237. Captura escritorio-12.

5. Pantalla 13: la razón "horno, moldes y balanza" explica que lo hace la maquila sin invertir en maquinaria.
   **[CUMPLIDO]** index.html:271. Captura escritorio-13.

6. Propuesta de valor y app: control del hierro del día (mg frente a lo que necesita por edad), suma del brownie, de la lonchera y de otras comidas, y resumen para el padre o la madre que no está en casa. App minimalista.
   **[CUMPLIDO]** App sin cambios desde 8d9f6d5 (bundle publicado index-BN0oG-Jj.js, el mismo de la sexta). app-capturas5/10-hoy: "1.9 de 10 mg", "Volvió vacía", "Otra comida con hierro", "Enviar a papá o mamá". Evidencia de la cuarta y sexta sigue válida (Reto.tsx:137, src/lib/compartir.ts:17, tests/logica.test.ts:120).

7. Pantalla 15 con impacto visual: foto, título grande, poco texto, animación.
   **[CUMPLIDO]** index.html:336-354. Captura escritorio-15.

8. Pantalla 19: capturas con marco y sombra.
   **[CUMPLIDO]** index.html:403-412. Captura escritorio-19.

9. Toda la presentación y la app hablan a papá y mamá, no solo a la mamá.
   **[CUMPLIDO]** Textos nuevos: 27 "un papá o una mamá inventa un truco" (:569), 34 "los trucos de mamá y los trucos de papá" (:728), 39 "papá y mamá publican su truco… el adulto gana" (:834), anexo 2 "con papá o mamá" (:970-971). "La mamá" solo en la cita de Vanessa (:584). App sin "la mamá" suelta (grep en src/).

10. Pantalla 21: una sola cifra de recompra explicada; el 30 % de escaneos no aparece ahí.
   **[CUMPLIDO]** index.html:452 sin cambios. La 31 repite el mismo 35 % (:652), no otra cifra.

11. Buyer persona dinámico: marco de video por persona, menos texto, sin "lo escupe", interacción.
   **[CUMPLIDO]** index.html:468-497. Captura escritorio-23.

12. Pantalla 24: ejes y cuadrantes con lenguaje profesional; sin la línea de riesgo.
   **[CUMPLIDO]** src/mapa.ts:1, :7 y :31-34 sin cambios. Captura escritorio-24.

13. Pantalla 25: sin "cómo lo calculamos"; hogares en una línea; menos texto.
   **[CUMPLIDO]** index.html:516-530. Captura escritorio-25.

14. Stands consistentes: Jockey Plaza enero, Salaverry febrero, La Molina agosto.
   **[CUMPLIDO]** index.html:555, :621-635 (30: "En el stand · desde el 2 de enero"), :648 (mural de Jockey Plaza al 31 de enero), :725, :731, :795 y :861. App: `GET https://andi-app.cingacordova.workers.dev/api/puntos` (22:30) devuelve p1 Jockey Plaza 2027-01-02, p2 Real Plaza Salaverry 2027-02-01 y p3 La Molina 2027-08-01.

15. Campaña potente y emocional ("Lo que nadie ve"), con propósito; sin "su prueba… la tuya…".
   **[CUMPLIDO]** index.html:562-888 (pantallas 27 a 41). Grep sin "su prueba" ni "la tuya" (solo en la lista de frases que se evitan, CAMPANA:210).

16. "Contactos en espera" explicado o eliminado.
   **[CUMPLIDO]** En la presentación, eliminado (grep sin resultados; el anexo 1 dice "100 familias en WhatsApp", :948). Queda en HECHOS_v7.md:204: ver transversal de cifras.

17. Concepto de campaña no genérico; conecta emocionalmente.
   **[CUMPLIDO]** Insight (:576-588), manifiesto (:591-613) y dinámica «Cuéntanos tu truco. Funcione o no, cuenta.» (:616-640). Capturas escritorio-27 a 30.

18. Pantalla 5-3-2 eliminada.
   **[CUMPLIDO]** Grep sin resultados en index.html.

19. Pantalla del stand: la imagen no tapa el título; lo que era "recomendación" es parte de la campaña.
   **[CUMPLIDO]** Stand es ahora la 40 (:840-869); captura escritorio-40: el marco va debajo del título. "Primero lo cuentan ellos" es la 39 (:826-837), antes del stand (captura escritorio-39).

20. Pantalla de etapas: qué hacemos en cada etapa, con detalle.
   **[CUMPLIDO]** Ahora la 34 (:713-736), tres viñetas y meta por etapa; S/1,758 + 5,796 + 9,770 + 7,220 = 24,544. Captura escritorio-34. Observación: en celular (celular-34) style.css:1404 oculta la 2.ª y 3.ª viñeta, así que en el teléfono la etapa pierde el concurso y las metas; ver observaciones.

21. Pantalla de gasto con cifras y título coherente; títulos encadenados en el capítulo.
   **[CUMPLIDO]** 32 "S/24,544 en quince meses para que toda Lima cuente su truco." (:661) y 33 "En qué se va cada sol de la campaña." (:690). Por tipo de medio 7,596 + 6,858 + 5,950 + 4,140 = 24,544; Publicidad 5,950 = 4,050 + 1,000 + 600 + 300; Digital 26 % = 5,950 + 458 = 6,408; Calle 74 % = 18,136. Las 12 partidas de la 33 (:694-705) suman 24,544. Captura escritorio-32 y 33. Títulos: 27 → 28 → 29 → 30 → 31 → 32 → 33 → 34 → 35 → 39 → 40 → 41 encadenan con "truco"; la 31 "Cinco metas con fecha." es la redacción decidida por Carlos (HECHOS_v7.md:23).

22. Sin textos pequeños sueltos que no transmiten nada.
   **[CUMPLIDO]** Pantallas nuevas 30-33 sin pies sueltos (capturas escritorio-30 a 33). Solo el .src permitido de la pantalla 3 (:97).

23. Imágenes en lugares estratégicos en la mayoría de pantallas.
   **[NO CUMPLIDO]** Con 43 pantallas, solo 21 tienen foto, captura o marco de imagen o video: 1, 3, 5, 8, 11, 12, 15, 16, 18, 19, 20, 23, 25, 27, 29, 36, 37, 38, 40, 41 y 43 (grep de `<img`/`data-media` por sección). 21 de 43 es el 49 %, no la mayoría (antes 21 de 40). Las cuatro pantallas nuevas (30 a 33) son solo texto, íconos o tablas. · Falta: imagen o marco de imagen en al menos una pantalla más (22 de 43). Lo más natural: en la 30 (La dinámica, :616-640) un marco `data-media` del mural con trucos o del video de 10 s, o en la 39 (:826-837) un marco de los posts de influencers.

24. Agente de diseño revisó las capturas de las dos apps.
   **[CUMPLIDO]** .claude/agents/t2-disenador.md; su pasada sobre el capítulo está en style.css:1408-1421 ("Diseñador: capítulo de campaña"). Observación: no detectó que la cuenta de imágenes bajó del 50 % (punto 23).

25. Agente creativo de campaña desarrolló la campaña.
   **[NO CUMPLIDO]** CAMPANA sección 12 (:213-228) tiene el orden nuevo, las 12 partidas y los S/4,050 + S/1,000; CAMPANA:169 y :206 cuadran. Pero CAMPANA:222 dice "400,000 personas ven los videos en 2027" y cita el documento 17 (CPM S/12.69), que calcula **impresiones** (md/T2_17_Presupuesto.md:127: 5,050 ÷ 12.691 × 1,000 = 397,920), no personas; la pantalla 31 dice "vistas" (:650). · Falta: en CAMPANA:222 cambiar "400,000 personas ven los videos en 2027" por "400,000 vistas de los videos en 2027".

26. Agente redactor aplicó la revisión de redacción a todo.
   **[NO CUMPLIDO]** La app y los alt siguen como en la sexta. Pero la 30 cierra con "Nadie aplaude esos trucos. Nosotros sí." (index.html:638, captura escritorio-30 y celular-30): es una frase de dos partes en eco, que CAMPANA:210 y t2-redactor.md ("Frases espejo… X. Y. repetido como eco") prohíben, y repite casi palabra por palabra la línea del manifiesto de la pantalla anterior (:605 "Nadie aplaude esos trucos, porque nadie los ve." y :606 "Este diciembre sí los aplaudimos."). · Falta: reemplazar index.html:638 por una línea que lleve a la 31 sin eco, por ejemplo "Cada truco que nos cuentas suma: queremos 300 al 31 de enero."

27. Director verificó todos los puntos.
   **[CUMPLIDO]** Siete verificaciones con evidencia por punto: c7adaf2, 331f3a6, 58efd7d, 8d9f6d5, 0ef5cf9, 397656a y 19d3f81 (esta).

28. Logo AndiBite pequeño en todas las pantallas.
   **[CUMPLIDO, con excepción aceptada]** Visible en las pantallas nuevas 30 a 35 y 39 (capturas) y en los 4 anexos (escritorio-44 a 47). Portada (1) y cierre (43) con el logo grande (escritorio-01 y 43), excepción ya aceptada.

29. Ciclo de revisión (/loop) hasta cumplir todo.
   **[NO CUMPLIDO]** Ronda 7 (esta) reabre 23, 25 y 26 y tres transversales. · Falta: aplicar las correcciones de los puntos 23, 25 y 26 y de las transversales, regenerar capturas y pasar la octava verificación.

30. App: control de hierro del día mejorado (ver 6).
   **[CUMPLIDO]** Sin cambios; app-capturas5/06, 08, 09 y 10.

31. Juegos con niveles y duración, tres juegos de colegio por edad.
   **[CUMPLIDO]** Sin cambios; src/data/ninos.ts:61, src/kids/colegio.ts, src/data/juegos-colegio.ts; app-capturas5/16 a 23.

## Revisión transversal

- **T1 · Canvas, pantalla 14.** **[CUMPLIDO]** Captura escritorio-14 regenerada, 9 cajas sin cortes.
- **Coherencia del hilo.** **[NO CUMPLIDO]** El orden 27 → 43 es el decidido (HECHOS_v7.md:23) y cada bloque sigue al anterior, pero con la pantalla 30 nueva quedan tres repeticiones:
  (a) 29 → 30: "Nadie aplaude esos trucos…" se dice en :605 y otra vez en :638 (ver punto 26).
  (b) 30 → 40: el stand repite los mismos tres pasos. :633 "Tu hijo prueba el mini brownie contigo al lado" = :849 "Tu hijo prueba el mini brownie contigo al lado."; :634 "Te llevas tu pack… tu truco se queda en el mural" ≈ :850 (capturas escritorio-30 y 40). · Falta: quitar la lista `<ol class="pasos">` de la 40 (:847-851) o cambiarla por lo que solo pasa en el stand (permiso firmado para el video, post-it sin nombre del niño, QR de WhatsApp en la bolsa).
  (c) 30 → 39: la tarjeta del concurso (:834) repite :626 ("Los 3 trucos más votados abren el mural de Jockey Plaza y … gana un mes de lonchera"). · Falta: dejar en :834 solo lo que la 30 no dice: "Del 1 de noviembre al 20 de diciembre. S/360 de pauta y S/240 en premios: un mes de lonchera para cada adulto ganador."
- **Papá y mamá.** **[CUMPLIDO]** Ver punto 9. Concurso y embajadores con premio para el adulto (:626, :833, :834).
- **Palabras prohibidas y frases espejo.** **[NO CUMPLIDO]** Grep en index.html, src/ de la presentación y de la app, CAMPANA, PROMPTS y el HTML publicado: sin "SMART" en pantalla (solo en CAMPANA:219, "sin decir «SMART»"), "sorteo", "rifa", "supuesto" (solo dentro de "presupuesto", :930-932), "estimado", "[POR CONFIRMAR]", "EXPOINNOVA" ni el slogan viejo; "azar" solo dentro de "disfrazarlo" (:586) y en la nota legal (CAMPANA:137). Falla por la frase espejo de index.html:638 (ver punto 26).
- **Cifras (31 ↔ 32 ↔ 33 ↔ 34 ↔ 35 ↔ 36-38 ↔ anexos ↔ CAMPANA ↔ HECHOS).** **[NO CUMPLIDO]** Cuadran en la presentación: 12 partidas = 24,544 (:694-705); 4,050 + 1,000 = 5,050 = 1,605 + 1,605 + 1,840 (:775, :796, :817); 613 = 195 + 195 + 223 (:650, :776, :797, :818, :976); etapas = 24,544 y brownies 3,700 + 20,320 + 28,311 = 52,331 (:717-733, :948-951); Gantt "Anuncios en Meta y YouTube" de enero a diciembre (:750); anexo 1 24 / 17 / 31 / 28 % (:938-941); anexo 3: 42,618 − 24,544 = 18,074 → 74 %, 24,544 ÷ 56,824 = 43 %, 10,379 ÷ 25,000 = 42 % (:990-992). Fallan cuatro cosas:
  (a) HECHOS_v7.md:176 sigue diciendo "Pauta en Meta por mes… (S/5,050 en el año)", contra la decisión de HECHOS_v7.md:24. · Falta: "Pauta por mes, enero a diciembre: … (S/5,050 en el año: S/4,050 en Instagram y Facebook y S/1,000 en YouTube)".
  (b) HECHOS_v7.md:204, fase Prelanzamiento, "100 contactos en espera". · Falta: "100 familias en WhatsApp" (como el anexo 1, :948).
  (c) HECHOS_v7.md:23 dice "400,000 personas ven los videos" y la pantalla 31 dice "vistas"; son impresiones (documento 17, :127). · Falta: "400,000 vistas de los videos" en HECHOS_v7.md:23 (y CAMPANA:222, punto 25).
  (d) Anexo 2, index.html:973: "Costo por contacto en Meta · S/5 o menos · Más de S/8 por 2 meses: cambiar anuncio". Con la misma tabla, S/5,050 ÷ 613 conversaciones = S/8.24 (documento 17, :131: S/8.23), o sea que el plan arranca por encima de la alerta, y "en Meta" ya no incluye YouTube. · Falta: renombrar a "Costo por conversación desde anuncios (Meta y YouTube)" y mostrar la base del plan, por ejemplo "S/8.23 en el plan (S/5,050 ÷ 613); buscamos S/5", con el umbral de alerta que decida Carlos (el documento 17, :269, propone pasar S/150 al mes a degustación si a fin de febrero sigue sobre S/8).

## Observaciones sin estado (séptima verificación)

- Celular: style.css:1404 oculta la 2.ª y 3.ª viñeta de cada etapa (celular-34) y en la 32 y la 33 se ocultan las descripciones por medio y la columna "Cuándo" (celular-33). En proyector no afecta; si la profesora abre el enlace en el teléfono, la 34 pierde el concurso y las metas. La 35 (Gantt) y la 39 siguen fuera de las capturas de celular (scripts/capturas.mjs:63).
- La 32 dice "En la calle · 74 %: Stands, ferias…", pero el alquiler de los stands (S/600 al mes por punto) no está en los S/24,544; si preguntan, "stands" aquí es la degustación y el material del stand.
- La 33 pone los S/600 del concurso en "Noviembre y diciembre de 2026" y HECHOS_v7.md:183 los pone en diciembre; no cambia ningún total (ya anotado en la quinta).
- La 39 ("Primero lo cuentan ellos", Nov-Ene) va después de los anuncios de 2027 (36-38); es el orden decidido (HECHOS_v7.md:23) y el título se lee como "primero en el tiempo", no en la presentación.

## Cierre de la sexta ronda (19-oct-2026, 22:00)

Los 31 puntos y las 4 transversales cumplían en el commit 397656a. La séptima verificación (arriba, commit 19d3f81) reabre 23, 25, 26 y 29 por el capítulo de campaña reordenado.
