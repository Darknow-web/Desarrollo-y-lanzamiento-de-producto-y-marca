# Observaciones de Carlos (19-oct-2026) y estado

Estado: **CERRADO. CUARTA VERIFICACIÓN DEL DIRECTOR, 19-oct-2026, 21:05** (commit `8d9f6d5`; capturas `capturas/escritorio-18` y `19` regeneradas en ese commit; capturas de la app `scratchpad/app-capturas5/*.png` de las 20:56–20:58; sitios andibite.cingacordova.workers.dev y andi-app.cingacordova.workers.dev revisados con curl (bundle index-BN0oG-Jj.js e index-WZZZvqJp.css); 32 tests pasan). Resultado: **31 CUMPLIDOS y 0 NO CUMPLIDOS**; las 4 transversales cumplidas.
Tercera verificación (commit `58efd7d`): 29 cumplidos y 2 no cumplidos (26 y 29), más el hilo.
Segunda verificación (commit `331f3a6`): 25 cumplidos y 6 no cumplidos. Primera (commit `c7adaf2`): 21 y 10.
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
   **[CUMPLIDO]** "Enviar a papá o mamá" en Inicio y en /hoy (src/parents/Inicio.tsx; Reto.tsx; app-capturas4/06-inicio y 10-hoy) y "Enviar la semana" en ResumenSemana (Reto.tsx:137 y :158). El mensaje ya usa los mismos días que la pantalla: Reto.tsx:137 pasa `hierro.diasConHierro`, src/lib/compartir.ts:17 dice "de 7 días con hierro" y tests/logica.test.ts:120 lo comprueba. En el sitio publicado (bundle index-CSA3rmli.js) la pantalla de fin de semana muestra "5 de 7 días con hierro, 9.5 mg" y el mensaje enviado dice "Semana de Teo: 5 de 7 días con hierro, 9.5 mg en total. Loncheras vacías: 2." (scratchpad/v3/out/51-enviar-la-semana.png). Observación menor: los puntitos de la semana solo muestran L a V, así que un registro del sábado suma al "5 de 7" pero no tiene puntito.

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
   **[CUMPLIDO]** src/mapa.ts:1 y :7 ("sabor de suplemento o sabor de postre"; "0 = sabor de suplemento, 1 = sabor de postre"); los cuatro cuadrantes en el mismo orden, "SABOR DE … , CON/SIN HIERRO" (mapa.ts:31-34, también en el bundle publicado); aria-label de index.html:505 "el único con sabor de postre y con hierro". Título "Sabor o hierro: hasta hoy había que elegir." (:503). Captura escritorio-24.

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
   **[CUMPLIDO]** index.html:757 "por cada brownie vendido en 2027" (S/22,786 ÷ 52,331 = S/0.44, como HECHOS_v7.md:169 y el Anexo 1, :879). Título "S/24,544 para que toda Lima cuente su truco." (:753) y cuatro rubros con barras proporcionales que suman S/24,544 (:762-765: 100, 90, 78 y 54 % de S/7,596). Publicado. Captura escritorio-36.

22. Sin textos pequeños sueltos que no transmiten nada.
   **[CUMPLIDO]** Pantalla 23 sin el pie de 12 px (index.html:468-497; captura escritorio-23). Pantalla 36 sin S/24,544 repetido (captura escritorio-36). Solo queda el .src permitido de la pantalla 3 (:97).

23. Imágenes en lugares estratégicos en la mayoría de pantallas, no solo números y texto.
   **[CUMPLIDO]** 21 de 40 pantallas tienen foto, captura o marco de imagen o video: 1, 3, 5, 8, 11, 12, 15, 16, 18, 19, 20, 23, 25, 27, 29, 30, 31, 32, 34, 38 y 40. Nuevas: 12 (index.html:232), 16 (empaque_mockup.jpg, :362), 20 (app_mapa.jpg, :422) y 38 (marco "FOTO del equipo", :801). Capturas escritorio-12, 16, 20 y 38. Observación: la foto de la 12 (degustacion_3.jpg) es la misma que sale en la tira de la 11; si hay otra foto de la degustación, conviene cambiarla.

24. Agente de diseño revisó las capturas de las dos apps.
   **[CUMPLIDO]** .claude/agents/t2-disenador.md. Observación: dejó pasar la 4.ª captura de la pantalla 19 (ver hilo).

25. Agente creativo de campaña desarrolló la campaña.
   **[CUMPLIDO]** .claude/agents/t2-creativo.md, CAMPANA-lo-que-nadie-ve.md y PROMPTS-campana.md. El documento ya no coincide con index.html en dos frases (ver el 26).

26. Agente redactor aplicó la revisión de redacción a todo.
   **[CUMPLIDO]** (a) app src/parents/Bienvenida.tsx:129 "Acepto que la app guarde el hierro de cada día, la despensa y los recordatorios en este teléfono (Ley 29733)…". (b) src/parents/Mas.tsx:97 "el hierro de cada día y las loncheras vacías, sus estrellas…". Los dos textos están en el bundle publicado (index-BN0oG-Jj.js) y "el reto" no aparece en él (0 coincidencias) ni en texto visible de src/ (solo en un comentario de src/kids/progreso.ts:9). (c) index.html:398 alt "Pantalla de inicio con el hierro de hoy" (app_reto.jpg, ahora solo en la 18). (d) index.html:409 alt "Pantalla del hierro del día y de la semana". index.html:408 alt "Pantalla para sumar otra comida con hierro". Los alt publicados son idénticos a los de index.html. Ronda 2 ya cerrada: CAMPANA:37, :48 y :50 iguales a index.html; Canvas :308. Observación menor, sin estado: el título "Semáforo de hierro" sigue en la app (src/parents/Hierro.tsx:23 y :38; Reto.tsx:155); no lo pidió ningún punto, pero si se quiere un solo nombre, sería "El hierro de la semana".

27. Director verificó todos los puntos.
   **[CUMPLIDO]** Cuatro verificaciones con evidencia por punto: commits c7adaf2, 331f3a6, 58efd7d y 8d9f6d5 (esta).

28. Logo AndiBite pequeño en todas las pantallas.
   **[CUMPLIDO, con excepción aceptada]** Está en 38 de 40 pantallas principales y en los 4 anexos (index.html:17). En la portada (1) y el cierre (40) el logo pequeño se oculta (style.css:1273) porque el logo grande ocupa el centro de la pantalla (index.html:60 y :841; capturas escritorio-01 y 40, celular-01). Poner los dos sería repetir la marca. Se acepta la excepción.

29. Ciclo de revisión (/loop) hasta cumplir todo.
   **[CUMPLIDO]** Ronda 1: 10 pendientes; ronda 2: 6 y 2 transversales; ronda 3: 2 y 1 transversal; ronda 4 (esta, commit 8d9f6d5): 0. Lista en cero, se cierra.

30. App: control de hierro del día mejorado (ver 6).
   **[CUMPLIDO]** Anillo de mg frente a la referencia por edad, "Volvió vacía" y "Otra comida", /hoy con pestaña Inicio activa, envío del día y de la semana con las mismas cifras de la pantalla (app-capturas4/06, 08, 09 y 10; scratchpad/v3/out/50 y 51). Ver el 6.

31. Juegos con niveles y duración (30 a 60 min de contenido), tres juegos de colegio por edad.
   **[CUMPLIDO]** src/data/ninos.ts:61, src/kids/colegio.ts y src/data/juegos-colegio.ts; capturas app-capturas4/16 a 23 (mapa centrado con los 7 juegos y su nivel, cada juego jugando, Viste a Andi con 6 trajes bloqueados por estrellas o nivel).

## Revisión transversal

- **T1 · Canvas, pantalla 14.** **[CUMPLIDO]** Captura escritorio-14: las 9 cajas muestran todos sus puntos, sin cortes, en letra legible (style.css:1302, de 11 a 18 px).
- **Coherencia del hilo.** **[CUMPLIDO]** La 18 muestra Inicio con el botón "Otra comida" (app_reto.jpg, index.html:398; captura escritorio-18) y la 19 abre con lo que pasa al tocarlo: la hoja "¿Qué comió Teo?", pie "Sumar otra comida" (public/img/app_comida.jpg, 600 × 1298, index.html:408; captura escritorio-19). Siguen "El día y la semana", "Plan de loncheras" y "Pedido por WhatsApp": cuatro pantallas distintas, ninguna repite la 18. app_comida.jpg tiene el mismo md5 en el sitio publicado (72fd6fb6…). Ronda 2 ya cerrada: app_pedido.jpg con pack, total S/26.90 y mensaje.
- **Papá y mamá.** **[CUMPLIDO]** Presentación y app (punto 9; escritorio-33 "Papás y mamás embajadores"). HECHOS_v7.md:16 "Todo papá y toda mamá en Lima saben…" y :106 "Papás y mamás embajadores… El premio es para el papá o la mamá"; t2-redactor.md:6 y :12 "un papá o una mamá de Lima". HECHOS_v7.md:16 ya dice "cuando intentan dárselo".
- **Palabras prohibidas.** **[CUMPLIDO]** Grep en index.html, src/ de la presentación, src/ y worker/ de la app, CAMPANA y PROMPTS: no aparecen "supuesto" (solo dentro de "presupuesto"), "estimado", "[POR CONFIRMAR]", "EXPOINNOVA" ni "Hierro medido. Sabor a brownie."; "su prueba… la tuya" solo en la lista de frases que se evitan (CAMPANA:198). Sin frases espejo: CAMPANA:48 ya dice "Nadie aplaude esos trucos, porque nadie los ve.". La línea vieja de CAMPANA:201 ("HECHOS_v7 por actualizar…") ya se borró. Ronda 4: grep en index.html publicado, src/ y bundle de la app, sin resultados nuevos.

## Cambios del diseñador en esta ronda (no reabren ningún punto)

- Encabezado de la app opaco: src/styles/padres.css:20 (`background: var(--crema)` y línea inferior), publicado en index-WZZZvqJp.css; captura app-capturas5/42-plan-recetario (las tarjetas ya no se ven a través del título).
- Pistas de los juegos en pastillas: src/styles/ninos.css:91 y :232 (`.pista-tramo` con fondo crema y bordes redondos), publicado; capturas app-capturas5/17-atrapa y 21-sumas. Textos legibles, nada cortado.

## Cierre (19-oct-2026, 21:05)

1. Cuatro rondas de verificación (c7adaf2, 331f3a6, 58efd7d, 8d9f6d5): de 10 pendientes a 0; los 31 puntos y las 4 transversales cumplen.
2. La presentación sigue un hilo sin saltos: problema, AndiBite, investigación, producto, app (18 → 19 sin pantallas repetidas), mercado y campaña "Lo que nadie ve".
3. Presentación y app hablan a papá y mamá; sin "supuesto", "estimado", "[POR CONFIRMAR]", "EXPOINNOVA", el slogan viejo ni frases espejo.
4. La app publicada muestra el hierro de cada día, envía el día y la semana con las mismas cifras de la pantalla y tiene 7 juegos con niveles; 32 tests pasan.
5. Queda una observación menor sin estado (nombre "Semáforo de hierro" en la app); no bloquea la entrega a Carlos.
