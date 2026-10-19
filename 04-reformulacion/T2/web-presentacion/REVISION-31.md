# Observaciones de Carlos (19-oct-2026) y estado

Estado: **SEGUNDA VERIFICACIÓN DEL DIRECTOR, 19-oct-2026** (revisión del commit `331f3a6`; capturas `capturas/escritorio-01` a `44` y `celular-*` de las 20:23–20:26; capturas de la app `scratchpad/app-capturas3/*.png` de las 20:26–20:31; sitios publicados andibite.cingacordova.workers.dev y andi-app.cingacordova.workers.dev, revisados con curl). Resultado: **25 CUMPLIDOS y 6 NO CUMPLIDOS** (6, 12, 21, 26, 29 y 30), más 2 pendientes transversales.
Primera verificación (commit `c7adaf2`): 21 cumplidos y 10 no cumplidos.
Formato: `N. [CUMPLIDO|NO CUMPLIDO] evidencia · qué falta`. "Casi" cuenta como NO CUMPLIDO.

1. Entre la 4 y la 5 aparece AndiBite: el divisor dice "Nuestra respuesta: AndiBite" y la 5 explica brevemente qué es.
   **[CUMPLIDO]** index.html:106 y :113-131. Capturas escritorio-04 y 05.

2. Pantalla 6: sin repeticiones con la 5; nada contradictorio; fechas por semanas (S1–S4 entrevistas, S5 focus, S6 degustación, S7 cambio a A y B, hoy T2).
   **[CUMPLIDO]** index.html:141-145. Captura escritorio-06.

3. Pantalla 10: cada hallazgo muestra qué decisión tomamos con él; título coherente.
   **[CUMPLIDO]** index.html:201-206. Captura escritorio-10.

4. Pantalla 12: "no necesita refrigeración" (no "frío").
   **[CUMPLIDO]** index.html:237. Captura escritorio-12.

5. Pantalla 13: la razón "horno, moldes y balanza" explica que lo hace la maquila sin invertir en maquinaria.
   **[CUMPLIDO]** index.html:271. Captura escritorio-13.

6. Propuesta de valor y app: el valor de la app es el control del hierro del día (mg frente a lo que necesita por edad), suma del brownie, de la lonchera y de otras comidas, y el resumen para el padre o la madre que no está en casa. App minimalista.
   **[NO CUMPLIDO]** Cumple casi todo: "Enviar a papá o mamá" en Inicio (src/parents/Inicio.tsx:77 y :111; app-capturas3/06-inicio y public/img/app_reto.jpg) y en /hoy (Reto.tsx:193 y :225; captura 10-hoy), "Enviar la semana" en ResumenSemana (Reto.tsx:137 y :158), con navigator.share o wa.me (src/lib/compartir.ts); está en el sitio publicado (el bundle index-6JoC3SJf.js contiene los dos textos). **Falta:** el mensaje de la semana no coincide con lo que se ve en la pantalla. La tarjeta dice "{hierro.diasConHierro} de 7 días con hierro" (Reto.tsx:146), pero el mensaje cuenta solo los días de colegio y dice "de 5 días" (Reto.tsx:137 usa `semana.dias`, que son 5 días, y compartir.ts:17 tiene el "de 5" fijo), mientras suma los mg de los 7 días. Papá ve "6 de 7" y mamá recibe "5 de 5". Corrección: en Reto.tsx:137, `diasConHierro: hierro.diasConHierro`; en compartir.ts:15 y :17, "de 7 días con hierro"; en tests/logica.test.ts:120, el texto esperado. Falta también una captura de "Enviar la semana" (ResumenSemana en fin de semana).

7. Pantalla 15 con impacto visual: foto, título grande, poco texto, animación.
   **[CUMPLIDO]** index.html:336-354. Captura escritorio-15.

8. Pantalla 19: capturas con marco y sombra.
   **[CUMPLIDO]** index.html:407-412 y captura escritorio-19 (marco blanco redondeado con sombra). El contenido de la 4.ª captura se reporta en la transversal de hilo.

9. Toda la presentación y la app hablan a papá y mamá, no solo a la mamá.
   **[CUMPLIDO]** Presentación: index.html:95, 289, 301, 305, 310, 345, 366, 394, 423, 569 y 685 ("papá y mamá", "papás y mamás"); las "mamás" que quedan son datos (las 8 de la degustación, :172 y :215) o citas (:582-584). App: ninguna "la mamá" suelta (grep en src/). HECHOS_v7.md:14, :15 y :17 y t2-redactor.md:6 ya dicen "papá y mamá". Lo que queda en HECHOS se reporta en la transversal.

10. Pantalla 21: una sola cifra de recompra explicada; el 30 % de escaneos no aparece ahí.
   **[CUMPLIDO]** index.html:452: un solo "35 %" con su explicación ("de lo que se vende en stands, ferias y colegios se vuelve a pedir por WhatsApp"); el bucle va sin cifra (:450) y la 20 dice "Más recompra" sin número (:425). Capturas escritorio-20 y 21.

11. Buyer persona dinámico: marco de video por persona, menos texto, sin "lo escupe", interacción.
   **[CUMPLIDO]** index.html:473-494 ("lo deja", botón "Su mañana"). Captura escritorio-23.

12. Pantalla 24: ejes y cuadrantes con lenguaje profesional (sin "sabe a gusto", sin "sabe a remedio"); sin la línea de riesgo.
   **[NO CUMPLIDO]** Lo visible está bien: título "Sabor o hierro: hasta hoy había que elegir." (index.html:503) y cuadrantes por sabor (src/mapa.ts:31-34); captura escritorio-24. **Falta** lo que se pidió en la ronda anterior: (a) src/mapa.ts:1 sigue diciendo "sabe a remedio o sabe a gusto" y :7 "0 = remedio, 1 = gusto"; deben decir "sabor de suplemento o sabor de postre" y "0 = suplemento, 1 = postre". (b) El aria-label de index.html:505 todavía dice "el único en el cuadrante rico y con hierro"; debe decir "el único con sabor de postre y con hierro". (c) Para que los cuatro cuadrantes digan lo mismo en el mismo orden, mapa.ts:31 debe decir "SABOR DE SUPLEMENTO, CON HIERRO" (hoy dice "CON HIERRO, SABOR DE SUPLEMENTO").

13. Pantalla 25: sin "cómo lo calculamos"; hogares explicados en una línea; menos texto en general.
   **[CUMPLIDO]** index.html:516-530. Captura escritorio-25.

14. Stands consistentes en toda la presentación: Jockey Plaza enero, Salaverry febrero, La Molina agosto.
   **[CUMPLIDO]** Presentación: index.html:555, 626, 647, 686, 713, 734, 736 y 742. App: data/seed.json y scripts/seed.mjs con p1 Jockey Plaza desde 2027-01-02, p2 Real Plaza Salaverry (Jesús María) y p3 La Molina desde 2027-08-01; `GET https://andi-app.cingacordova.workers.dev/api/puntos` devuelve esos tres.

15. Campaña potente y emocional ("Lo que nadie ve"), con propósito; sin "su prueba… la tuya…".
   **[CUMPLIDO]** index.html:561-845 (pantallas 27 a 38). Grep sin "su prueba" ni "la tuya".

16. "Contactos en espera" explicado o eliminado.
   **[CUMPLIDO]** Eliminado (grep sin resultados).

17. Concepto de campaña no genérico; conecta emocionalmente con el público.
   **[CUMPLIDO]** Insight de los trucos con citas reales (index.html:582-586), manifiesto (:600-608), #LoQueNadieVe y mural. Capturas escritorio-27 a 29.

18. Pantalla 5-3-2 eliminada.
   **[CUMPLIDO]** Grep sin resultados.

19. Pantalla del stand: la imagen no tapa el título; lo que antes era "recomendación" es parte de la campaña.
   **[CUMPLIDO]** Captura escritorio-34: el marco de imagen va debajo del título. "Primero lo cuentan ellos" (index.html:678-689) es la pantalla 33 y va antes del stand (34), como pide el plan (influencers y expectativa en diciembre). Captura escritorio-33.

20. Pantalla de etapas: qué hacemos en cada etapa, con detalle.
   **[CUMPLIDO]** index.html:724-747. Captura escritorio-35.

21. Pantalla de gasto con cifras y título coherente con el hilo de la campaña; títulos encadenados en todo el capítulo.
   **[NO CUMPLIDO]** Título (index.html:753) y rubros (:762-765) bien; ya no se repite S/24,544. **Falta:** la cifra grande está mal explicada. "S/0.44 por cada brownie vendido, de octubre de 2026 a diciembre de 2027" (:756-757) no cuadra: S/24,544 ÷ 52,331 brownies da S/0.47. El S/0.44 de HECHOS_v7.md:169 y del Anexo 1 (:879) es solo el gasto de 2027 (S/22,786 ÷ 52,331 = S/0.435). Corrección en :757: "por cada brownie vendido en 2027". La otra opción es dejar el periodo y poner "S/0.47". Captura escritorio-36.

22. Sin textos pequeños sueltos que no transmiten nada.
   **[CUMPLIDO]** Pantalla 23 sin el pie de 12 px (index.html:468-497; captura escritorio-23). Pantalla 36 sin S/24,544 repetido (captura escritorio-36). Solo queda el .src permitido de la pantalla 3 (:97).

23. Imágenes en lugares estratégicos en la mayoría de pantallas, no solo números y texto.
   **[CUMPLIDO]** 21 de 40 pantallas tienen foto, captura o marco de imagen o video: 1, 3, 5, 8, 11, 12, 15, 16, 18, 19, 20, 23, 25, 27, 29, 30, 31, 32, 34, 38 y 40. Nuevas: 12 (index.html:232), 16 (empaque_mockup.jpg, :362), 20 (app_mapa.jpg, :422) y 38 (marco "FOTO del equipo", :801). Capturas escritorio-12, 16, 20 y 38. Observación: la foto de la 12 (degustacion_3.jpg) es la misma que sale en la tira de la 11; si hay otra foto de la degustación, conviene cambiarla.

24. Agente de diseño revisó las capturas de las dos apps.
   **[CUMPLIDO]** .claude/agents/t2-disenador.md. Observación: dejó pasar la 4.ª captura de la pantalla 19 (ver hilo).

25. Agente creativo de campaña desarrolló la campaña.
   **[CUMPLIDO]** .claude/agents/t2-creativo.md, CAMPANA-lo-que-nadie-ve.md y PROMPTS-campana.md. El documento ya no coincide con index.html en dos frases (ver el 26).

26. Agente redactor aplicó la revisión de redacción a todo.
   **[NO CUMPLIDO]** Corregido en la presentación: "que tu hijo te vuelve a pedir" (index.html:606), pantalla 39 (:820), "Ocho mamás" en la 8 y la 11 (:172 y :215) y "Nadie aplaude esos trucos, porque nadie los ve." (:605). **Falta:** (a) CAMPANA-lo-que-nadie-ve.md:50 sigue con "un mini brownie que te vuelve a pedir": debe decir "que tu hijo te vuelve a pedir". (b) CAMPANA:48 sigue con la frase eco "Nadie aplaude esos trucos. Nadie los ve.": debe decir "Nadie aplaude esos trucos, porque nadie los ve.". (c) CAMPANA:37 dice "…cada casa tiene su truco, y nadie lo aplaude.", lo mismo que la 29: hay que quitar ", y nadie lo aplaude" para que diga igual que index.html:586. (d) En el Canvas, index.html:308 dice "La app: reto diario, loncheras y aviso de recompra", que es la app vieja; debe decir "La app: el hierro de cada día, loncheras y aviso de recompra".

27. Director verificó todos los puntos.
   **[CUMPLIDO]** Primera verificación (commit c7adaf2) y esta segunda (commit 331f3a6), con evidencia por punto.

28. Logo AndiBite pequeño en todas las pantallas.
   **[CUMPLIDO, con excepción aceptada]** Está en 38 de 40 pantallas principales y en los 4 anexos (index.html:17). En la portada (1) y el cierre (40) el logo pequeño se oculta (style.css:1273) porque el logo grande ocupa el centro de la pantalla (index.html:60 y :841; capturas escritorio-01 y 40, celular-01). Poner los dos sería repetir la marca. Se acepta la excepción.

29. Ciclo de revisión (/loop) hasta cumplir todo.
   **[NO CUMPLIDO]** En curso: ronda 1 (10 pendientes) y ronda 2 (esta, 6 pendientes y 2 transversales). Se cierra cuando la lista de pendientes quede en cero.

30. App: control de hierro del día mejorado (ver 6).
   **[NO CUMPLIDO]** Anillo de mg frente a la referencia por edad, tres formas de sumar, /hoy y envío del día bien (capturas 06, 08, 09 y 10). Falta lo mismo que en el 6: el mensaje "Enviar la semana" dice "de 5 días" y la pantalla "de 7 días".

31. Juegos con niveles y duración (30 a 60 min de contenido), tres juegos de colegio por edad.
   **[CUMPLIDO]** Sin cambios desde la ronda 1: src/data/ninos.ts:61, src/kids/colegio.ts y src/data/juegos-colegio.ts; capturas app-capturas3/16 a 23 (mapa y 7 juegos jugando).

## Revisión transversal

- **T1 · Canvas, pantalla 14.** **[CUMPLIDO]** Captura escritorio-14: las 9 cajas muestran todos sus puntos, sin cortes, en letra legible (style.css:1302, de 11 a 18 px).
- **Coherencia del hilo.** **[NO CUMPLIDO]** Resuelto: 33 "Primero lo cuentan ellos" antes del 34 "En el stand"; la 39 describe la app actual; 20 y 21 sin el 35 % repetido; un solo "nadie aplaude" en la presentación. **Falta:** la 4.ª captura de la pantalla 19, "Pedido por WhatsApp" (public/img/app_pedido.jpg y app-capturas3/43-despensa-pack.png), ya muestra la despensa con el pack, pero el botón "Pedir por WhatsApp" queda tapado por la barra de navegación: solo se lee "RECOMPRA". Corrección: capturar la despensa desplazada hasta que se vea completo el botón de WhatsApp (o recortar la barra inferior) y reemplazar app_pedido.jpg. Además, escritorio-18 y 19 (20:24) son anteriores a las imágenes nuevas app_reto.jpg (20:28) y app_pedido.jpg (20:32): siguen mostrando la despensa vacía y el inicio sin "Enviar a papá o mamá". El sitio publicado sí tiene las imágenes nuevas (mismo md5), pero hay que volver a sacar escritorio-18 y 19 y celular para que la evidencia esté al día.
- **Papá y mamá.** **[NO CUMPLIDO, fuera de la presentación]** Presentación y app cumplen (punto 9). En HECHOS_v7.md, dentro de las decisiones vigentes, quedan dos cosas: (a) :16, el discurso de un minuto que se dice en la sustentación, empieza "Toda mamá en Lima sabe… Y toda mamá sabe…"; debe decir "Todo papá y toda mamá en Lima saben que su hijo necesita hierro. Y saben lo que pasa cuando intentan dárselo…". (b) :106 dice "Mamás embajadoras… El premio es para el padre"; debe decir "Papás y mamás embajadores… El premio es para el papá o la mamá" (así está en index.html:685). Menor: t2-redactor.md:12, "para una mamá de Lima" debe decir "para un papá o una mamá de Lima".
- **Palabras prohibidas.** **[CUMPLIDO]** Grep en index.html, src/, la app (src, data, worker), CAMPANA y PROMPTS: no aparecen "supuesto", "estimado", "[POR CONFIRMAR]", "EXPOINNOVA" ni "Hierro medido. Sabor a brownie."; "siempre" ya no acompaña a los 1.9 mg (solo queda en comentarios de código y en el prompt interno de worker/plan.ts:85, que nadie ve en pantalla). Sin frases espejo en la presentación; la única que queda está en CAMPANA:48 (punto 26b).

## Pendientes ordenados por importancia (ronda 2)

1. Puntos 6 y 30: que el mensaje "Enviar la semana" use los mismos días que la pantalla (Reto.tsx:137, compartir.ts:15 y :17, test :120).
2. Punto 21: corregir la línea del S/0.44 en la pantalla 36 (index.html:757: "por cada brownie vendido en 2027").
3. Hilo: nueva captura app_pedido.jpg con el botón de WhatsApp visible y volver a sacar escritorio-18, 19 y celular.
4. Punto 26: CAMPANA:37, :48 y :50; Canvas index.html:308 ("reto diario").
5. Punto 12: comentario de mapa.ts:1 y :7, aria-label de index.html:505 y orden del cuadrante en mapa.ts:31.
6. Papá y mamá: HECHOS_v7.md:16 y :106; t2-redactor.md:12.
7. Punto 29: tercera ronda con estos pendientes.
