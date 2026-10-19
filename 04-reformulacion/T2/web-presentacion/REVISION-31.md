# Observaciones de Carlos (19-oct-2026) y estado

Estado: **CERRADO. SEXTA VERIFICACIÓN DEL DIRECTOR, 19-oct-2026, 22:00** (commit `397656a`: pantalla 36 y nota legal del concurso; capturas regeneradas a las 21:49, entre ellas escritorio-36 y escritorio-41; andibite.cingacordova.workers.dev descargado a las 21:51, igual a index.html salvo las etiquetas del build (index-DQc8vZ2o.js, index-DP_drBz9.css); app sin cambios en esta ronda). Resultado: **31 CUMPLIDOS y 0 NO CUMPLIDOS**; las 4 transversales cumplen.
Quinta verificación (commit `0ef5cf9`): 28 cumplidos y 3 no cumplidos (21, 25 y 29).
Cuarta verificación (commit `8d9f6d5`): 31 cumplidos y 0 no cumplidos. Tercera (commit `58efd7d`): 29 y 2 (26 y 29), más el hilo.
Segunda verificación (commit `331f3a6`): 25 cumplidos y 6 no cumplidos. Primera (commit `c7adaf2`): 21 y 10.
Formato: `N. [CUMPLIDO|NO CUMPLIDO] evidencia · qué falta`. "Casi" cuenta como NO CUMPLIDO. Desde la línea 607 de index.html los números suben en 1 por la línea nueva del manifiesto.

1. Entre la 4 y la 5 aparece AndiBite: el divisor dice "Nuestra respuesta: AndiBite" y la 5 explica brevemente qué es.
   **[CUMPLIDO]** index.html:106 y :113-131. Capturas escritorio-04 y 05 (regeneradas). Hilo completo revisado en las 40 capturas: problema, AndiBite, investigación, producto, app, mercado y campaña, sin saltos.

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
   **[CUMPLIDO]** Presentación: index.html:555, 648, 714, 737 y 743; la tarjeta del concurso (:687) y la etapa de prelanzamiento (:732) dicen "mural de Jockey Plaza", igual que el stand del 2 de enero. App: data/seed.json y scripts/seed.mjs con p1 Jockey Plaza desde 2027-01-02, p2 Real Plaza Salaverry (Jesús María) y p3 La Molina desde 2027-08-01; `GET https://andi-app.cingacordova.workers.dev/api/puntos` devuelve esos tres.

15. Campaña potente y emocional ("Lo que nadie ve"), con propósito; sin "su prueba… la tuya…".
   **[CUMPLIDO]** index.html:562-846 (pantallas 27 a 38). Grep sin "su prueba" ni "la tuya". El concurso refuerza el propósito: la marca aplaude en público los trucos que nadie ve (index.html:606 y :687).

16. "Contactos en espera" explicado o eliminado.
   **[CUMPLIDO]** Eliminado (grep sin resultados).

17. Concepto de campaña no genérico; conecta emocionalmente con el público.
   **[CUMPLIDO]** Insight de los trucos con citas reales (index.html:582-586), manifiesto (:600-610) con la línea nueva "Este diciembre sí los aplaudimos." (:606, captura escritorio-29), #LoQueNadieVe, concurso y mural. Capturas escritorio-27 a 29 y 33.

18. Pantalla 5-3-2 eliminada.
   **[CUMPLIDO]** Grep sin resultados.

19. Pantalla del stand: la imagen no tapa el título; lo que antes era "recomendación" es parte de la campaña.
   **[CUMPLIDO]** Captura escritorio-34: el marco de imagen va debajo del título. "Primero lo cuentan ellos" (index.html:679-690) es la pantalla 33 y va antes del stand (34); su cuarta tarjeta es ahora "Concurso #LoQueNadieVe" (S/600; 1 nov a 20 dic; los 3 más votados abren el mural; S/360 de pauta y S/240 en premios, :687). Captura escritorio-33 y, a 390 px, scratchpad/v5/cel-33.png: texto completo, sin cortes.

20. Pantalla de etapas: qué hacemos en cada etapa, con detalle.
   **[CUMPLIDO]** index.html:725-748; viñeta del prelanzamiento con el concurso (:732), S/1,758 sin cambio (:730). Captura escritorio-35 y scratchpad/v5/cel-35.png.

21. Pantalla de gasto con cifras y título coherente con el hilo de la campaña; títulos encadenados en todo el capítulo.
   **[CUMPLIDO]** (sexta) index.html:765 "Los anuncios de Claudia, Rodrigo y la familia real, el concurso #LoQueNadieVe y el video maestro", igual en el sitio publicado y en la captura escritorio-36 (21:49); CAMPANA-lo-que-nadie-ve.md:169 dice lo mismo. Ya coincide con la 33 ("Concurso #LoQueNadieVe", :687) y con el Anexo 1 ("Publicidad (anuncios en Meta, concurso y video)", :863). Cifras sin cambio: título "S/24,544 para que toda Lima cuente su truco." (:754), S/0.44, 7,596 / 6,858 / 5,950 / 4,140 y barras 100/90/78/54 % (:763-766). "Expectativa" solo queda como nombre de la pauta ("S/360 de pauta de expectativa", CAMPANA:128; HECHOS_v7.md:183), no como pieza aparte.
22. Sin textos pequeños sueltos que no transmiten nada.
   **[CUMPLIDO]** Pantalla 23 sin el pie de 12 px (index.html:468-497; captura escritorio-23). Pantalla 36 sin S/24,544 repetido (captura escritorio-36). Solo queda el .src permitido de la pantalla 3 (:97).

23. Imágenes en lugares estratégicos en la mayoría de pantallas, no solo números y texto.
   **[CUMPLIDO]** 21 de 40 pantallas tienen foto, captura o marco de imagen o video: 1, 3, 5, 8, 11, 12, 15, 16, 18, 19, 20, 23, 25, 27, 29, 30, 31, 32, 34, 38 y 40. Nuevas: 12 (index.html:232), 16 (empaque_mockup.jpg, :362), 20 (app_mapa.jpg, :422) y 38 (marco "FOTO del equipo", :802). Capturas escritorio-12, 16, 20 y 38. Observación: la foto de la 12 (degustacion_3.jpg) es la misma que sale en la tira de la 11; si hay otra foto de la degustación, conviene cambiarla.

24. Agente de diseño revisó las capturas de las dos apps.
   **[CUMPLIDO]** .claude/agents/t2-disenador.md. Observación: dejó pasar la 4.ª captura de la pantalla 19 (ver hilo).

25. Agente creativo de campaña desarrolló la campaña.
   **[CUMPLIDO]** (sexta) (a) CAMPANA:42 "Manifiesto (9 líneas…)" y el manifiesto tiene 9 líneas (:44-52). (b) CAMPANA:137 "ganan los más votados, sin azar. Adela confirma con la ONAGI (Ministerio del Interior; D. S. 006-2000-IN, reglamento de promociones comerciales) antes del 1 de noviembre si el concurso necesita autorización, y publica las bases."; HECHOS_v7.md:22 dice lo mismo. Ya no afirma que no requiere autorización. Grep en todo el repositorio (sin node_modules ni .git): "MINCETUR" e "ITINCI" solo aparecen en este archivo, en el historial de la revisión. Lo demás del concurso sigue igual que en la quinta: t2-creativo.md:10, CAMPANA 8b (:130-138) y PROMPTS R1 y R2.
26. Agente redactor aplicó la revisión de redacción a todo.
   **[CUMPLIDO]** (a) app src/parents/Bienvenida.tsx:129 "Acepto que la app guarde el hierro de cada día, la despensa y los recordatorios en este teléfono (Ley 29733)…". (b) src/parents/Mas.tsx:97 "el hierro de cada día y las loncheras vacías, sus estrellas…". Los dos textos están en el bundle publicado (index-BN0oG-Jj.js) y "el reto" no aparece en él (0 coincidencias) ni en texto visible de src/ (solo en un comentario de src/kids/progreso.ts:9). (c) index.html:398 alt "Pantalla de inicio con el hierro de hoy" (app_reto.jpg, ahora solo en la 18). (d) index.html:409 alt "Pantalla del hierro del día y de la semana". index.html:408 alt "Pantalla para sumar otra comida con hierro". Los alt publicados son idénticos a los de index.html. Ronda 2 ya cerrada: CAMPANA:37, :48 y :50 iguales a index.html; Canvas :308. Observación menor, sin estado: el título "Semáforo de hierro" sigue en la app (src/parents/Hierro.tsx:23 y :38; Reto.tsx:155); no lo pidió ningún punto, pero si se quiere un solo nombre, sería "El hierro de la semana".

27. Director verificó todos los puntos.
   **[CUMPLIDO]** Seis verificaciones con evidencia por punto: commits c7adaf2, 331f3a6, 58efd7d, 8d9f6d5, 0ef5cf9 y 397656a (esta).
28. Logo AndiBite pequeño en todas las pantallas.
   **[CUMPLIDO, con excepción aceptada]** Está en 38 de 40 pantallas principales y en los 4 anexos (index.html:17). En la portada (1) y el cierre (40) el logo pequeño se oculta (style.css:1273) porque el logo grande ocupa el centro de la pantalla (index.html:60 y :842; capturas escritorio-01 y 40, celular-01). Poner los dos sería repetir la marca. Se acepta la excepción.

29. Ciclo de revisión (/loop) hasta cumplir todo.
   **[CUMPLIDO]** Ronda 1: 10 pendientes; ronda 2: 6; ronda 3: 2; ronda 4: 0; ronda 5 (concurso): 3; ronda 6 (esta): 0. El commit 397656a solo cambia una línea de index.html (:765, sin mover las líneas), dos de CAMPANA, una de HECHOS y las capturas, así que no reabre ningún otro punto.
30. App: control de hierro del día mejorado (ver 6).
   **[CUMPLIDO]** Anillo de mg frente a la referencia por edad, "Volvió vacía" y "Otra comida", /hoy con pestaña Inicio activa, envío del día y de la semana con las mismas cifras de la pantalla (app-capturas4/06, 08, 09 y 10; scratchpad/v3/out/50 y 51). Ver el 6.

31. Juegos con niveles y duración (30 a 60 min de contenido), tres juegos de colegio por edad.
   **[CUMPLIDO]** src/data/ninos.ts:61, src/kids/colegio.ts y src/data/juegos-colegio.ts; capturas app-capturas4/16 a 23 (mapa centrado con los 7 juegos y su nivel, cada juego jugando, Viste a Andi con 6 trajes bloqueados por estrellas o nivel).

## Revisión transversal

- **T1 · Canvas, pantalla 14.** **[CUMPLIDO]** Captura escritorio-14 regenerada: las 9 cajas con todos sus puntos, sin cortes (style.css:1302).
- **Coherencia del hilo.** **[CUMPLIDO]** 18 → 19 sin repetir (escritorio-18 y 19, igual que en la cuarta). Campaña: 29 anuncia "Este diciembre sí los aplaudimos." (:606), 30-32 son los anuncios de 2027, 33 explica el concurso (:687), 34 es el stand donde los 3 trucos ganadores abren el mural el 2 de enero, 35 lo pone en el prelanzamiento (:732), 37 tiene la fila "Influencers y concurso #LoQueNadieVe" de noviembre a enero (:782, `--s:2;--e:4`; enero porque los influencers publican hasta el 10 de enero y los ganadores se anuncian el 2), y HECHOS_v7.md:22 y :183 y CAMPANA 8b dicen lo mismo (1 nov a 20 dic, votos al 31 dic, S/360 + S/240 dentro de los S/600, total S/24,544 y prelanzamiento S/1,758 sin cambio). La 36 ya llama "concurso #LoQueNadieVe" a lo mismo que la 33, la 35, la 37 y el Anexo 1 (sexta verificación). La línea "Nadie aplaude… / Este diciembre sí los aplaudimos." es un eco deliberado y decidido por Carlos (HECHOS_v7.md:22); se acepta.
- **Papá y mamá.** **[CUMPLIDO]** Concurso: "papá y mamá publican su truco… el adulto gana" (index.html:687), "papá o mamá publica" (HECHOS_v7.md:22; CAMPANA:133), premio siempre para el adulto (CAMPANA:134; t2-redactor.md:26). PROMPTS R2 (:165): manos de una mamá en el cuadro A y de un papá en el B. "La mamá" solo en la cita de Vanessa (index.html:584; CAMPANA:35). App sin "la mamá" suelta (grep en src/ y en el bundle publicado).
- **Palabras prohibidas.** **[CUMPLIDO]** Grep en index.html, src/, CAMPANA, PROMPTS, el HTML publicado y el bundle de la app: sin "sorteo", "rifa", "supuesto" (solo dentro de "presupuesto"), "estimado", "[POR CONFIRMAR]", "EXPOINNOVA", "Hierro medido. Sabor a brownie." ni "su prueba… la tuya…" (esta solo en la lista de frases que se evitan, CAMPANA:210). "Azar" aparece solo en la nota legal que explica que no es una promoción por azar (CAMPANA:137; HECHOS_v7.md:22). Sexta: lo mismo en el sitio publicado (21:51); tampoco quedan "MINCETUR" ni "ITINCI".

## Observaciones sin estado (quinta verificación)

- Gantt en celular (scratchpad/v5/cel-37.png, 390 px): las etiquetas de los meses se montan ("OCTNOVDIC", "AGOSEP OC") y la barra de Navidad y la columna Responsable quedan fuera de la pantalla. No es nuevo y ningún punto lo pide, pero conviene dar a la 37 desplazamiento horizontal en celular y añadir 33, 35 y 37 a la lista de capturas de celular de scripts/capturas.mjs:63.
- Los S/240 en premios quedan en "Publicidad" (Anexo 1, :863), mientras que el premio de los embajadores está en "Promociones". Las cifras se dejaron así a propósito (decisión del 19-oct); si la profesora pregunta, un concurso con premio es promoción de ventas.
- HECHOS_v7.md:183 pone los S/600 en diciembre aunque el concurso empieza el 1 de noviembre; no cambia ningún total.

## Cambios del diseñador en la cuarta ronda (no reabren ningún punto)

- Encabezado de la app opaco: src/styles/padres.css:20 (`background: var(--crema)` y línea inferior), publicado en index-WZZZvqJp.css; captura app-capturas5/42-plan-recetario (las tarjetas ya no se ven a través del título).
- Pistas de los juegos en pastillas: src/styles/ninos.css:91 y :232 (`.pista-tramo` con fondo crema y bordes redondos), publicado; capturas app-capturas5/17-atrapa y 21-sumas. Textos legibles, nada cortado.

## Cierre de la cuarta ronda (19-oct-2026, 21:05)

Los 31 puntos y las 4 transversales cumplían en el commit 8d9f6d5. La quinta verificación (arriba) reabre 21, 25 y 29 por el concurso.


## Cierre de la sexta ronda (19-oct-2026, 22:00)

1. Los 31 puntos y las 4 transversales cumplen en el commit 397656a; la revisión queda cerrada.
2. El concurso #LoQueNadieVe (1 nov a 20 dic de 2026) tiene el mismo nombre en las pantallas 33, 35, 36 y 37 (la 29 lo anuncia: "Este diciembre sí los aplaudimos."), en el Anexo 1, en CAMPANA y en HECHOS.
3. Sus cifras no cambian el plan: S/360 de pauta y S/240 en premios dentro de los S/600, total S/24,544 y prelanzamiento S/1,758.
4. Ganan los 3 trucos más votados, sin azar; el premio es para el adulto (abrir el mural de Jockey Plaza el 2 de enero y un mes de lonchera).
5. Pendiente fuera de la revisión: Adela confirma con la ONAGI (D. S. 006-2000-IN) antes del 1 de noviembre si hace falta autorización, y publica las bases.
