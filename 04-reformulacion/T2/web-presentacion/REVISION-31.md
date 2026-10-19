# Observaciones de Carlos (19-oct-2026) y estado

Estado: **VERIFICADO POR EL DIRECTOR el 19-oct-2026** (revisión del commit `c7adaf2`; capturas `capturas/escritorio-01` a `44` y `celular-*` de las 20:02–20:04, y capturas de la app `app-capturas/*.png`). Resultado: **21 CUMPLIDOS y 10 NO CUMPLIDOS**, más 1 defecto transversal que bloquea.
Formato: `N. [CUMPLIDO|NO CUMPLIDO] evidencia · qué falta`. "Casi" cuenta como NO CUMPLIDO.

1. Entre la 4 y la 5 aparece AndiBite: el divisor dice "Nuestra respuesta: AndiBite" y la 5 explica brevemente qué es.
   **[CUMPLIDO]** index.html:106 (divisor "Nuestra respuesta: AndiBite") y :112-131 (pantalla 5: una frase y 5 chips). Capturas escritorio-04 y 05.

2. Pantalla 6: sin repeticiones con la 5; nada contradictorio ("el sabor convence y el precio no alcanza" fuera); fechas por semanas (S1–S4 entrevistas, S5 focus, S6 degustación, S7 cambio a A y B, hoy T2).
   **[CUMPLIDO]** index.html:136-152: Semanas 1 a 4 / Semana 5 / Semana 6 / Semana 7 · T1 / Hoy · T2; la frase vieja no está. Captura escritorio-06.

3. Pantalla 10: cada hallazgo muestra qué decisión tomamos con él; título coherente.
   **[CUMPLIDO]** index.html:198-208: título "Cada cosa que nos dijeron cambió una decisión." y un "Por eso…" en cada hallazgo. Captura escritorio-10.

4. Pantalla 12: "no necesita refrigeración" (no "frío").
   **[CUMPLIDO]** index.html:236. Captura escritorio-12.

5. Pantalla 13: la razón "horno, moldes y balanza" explica que lo hace la maquila sin invertir en maquinaria.
   **[CUMPLIDO]** index.html:270. Captura escritorio-13.

6. Propuesta de valor y app: el valor de la app es el control del hierro del día (mg frente a lo que necesita por edad), suma del brownie, de la lonchera y de otras comidas, y el resumen para el padre o la madre que no está en casa. App minimalista.
   **[NO CUMPLIDO]** Cumple: pantallas 15, 16 y 18 (index.html:333-399); app con anillo de mg frente a la referencia por edad (src/lib/hierro.ts:7-11 y :38-43; src/parents/Inicio.tsx:66-118), brownie al marcar "Volvió vacía", "Lonchera del plan" y "Otra comida" (capturas 06, 08, 09, 10). **Falta:** el resumen para el padre o la madre que no está en casa. Los datos viven solo en el teléfono (Ley 29733) y ni Inicio ni /hoy ni el resumen semanal (src/parents/Reto.tsx:129-160) tienen un botón para enviarlo: `navigator.share` solo existe en Loncheras, Lote e Informe. Aun así, la presentación lo promete: "Una app que les muestra el hierro de cada día, estén o no en casa" (index.html:348), "Papá y mamá ven el día y la semana desde donde estén" (:392) y "Ven el hierro del día desde el trabajo" (:420). Corrección: botón "Enviar el día a papá o mamá" en el anillo de Inicio y en /hoy, y "Enviar la semana" en ResumenSemana (texto por WhatsApp con `navigator.share` o `wa.me`: apodo, mg de hoy frente a la referencia, qué comió y días con hierro de la semana); capturarlo y usar esa captura en la pantalla 18 o 19.

7. Pantalla 15 con impacto visual: foto, título grande, poco texto, animación.
   **[CUMPLIDO]** index.html:333-353: foto a sangre con efecto Ken Burns, título pv-title, una línea, 3 puntos que entran uno por uno y la firma. Captura escritorio-15.

8. Pantalla 19: capturas con marco y sombra.
   **[CUMPLIDO]** index.html:401-412 y captura escritorio-19 (marco blanco redondeado con sombra). Observación de hilo: la 4.ª captura dice "Pedido por WhatsApp" y muestra la despensa vacía, sin el botón de WhatsApp (ver transversales).

9. Toda la presentación y la app hablan a papá y mamá, no solo a la mamá.
   **[CUMPLIDO]** Presentación: index.html:95, 300, 304, 344, 364, 392, 420 y 567 ("papá y mamá", "papás y mamás", "un papá o una mamá"); las "mamás" que quedan son datos (participantes en :172) o citas (:190 y :580-582). App: grep sin "la mamá" suelta (Puerta.tsx:33, KidsLayout.tsx:54, Hierro.tsx:24 y :43, Mas.tsx:41). Fuera de alcance, pero hay que corregirlo: HECHOS_v7.md:14 (propuesta de valor: "le muestra a la mamá") y .claude/agents/t2-redactor.md todavía dicen "la mamá".

10. Pantalla 21: una sola cifra de recompra explicada; el 30 % de escaneos no aparece ahí.
   **[NO CUMPLIDO]** El 30 % ya no está, pero la pantalla tiene **dos** cifras de recompra que además miden cosas distintas: "De cada 3 familias que compran en el stand, 1 vuelve a pedir por WhatsApp" (index.html:447, familias, unos 33 %) y "35 % de recompra: la app avisa cuando el pack se acaba" (:449, en HECHOS es el 35 % de lo vendido en físico). La pantalla 20 repite el "35 %" (:422). Corrección: dejar solo "35 %" con una línea que lo explique ("de lo que se vende en stands, ferias y colegios se vuelve a pedir por WhatsApp; la app avisa cuando el pack se acaba"); el texto del bucle va sin cifra ("y vuelven a pedir por WhatsApp") y en la pantalla 20 se usa otro dato de la marca o "recompra" sin número.

11. Buyer persona dinámico: marco de video por persona, menos texto, sin "lo escupe", interacción.
   **[CUMPLIDO]** index.html:466-492: marco 9:16 por persona (data-video claudia/rodrigo), frase "lo deja" (:476), botón "Su mañana" que despliega texto (src/main.ts:378-386). Captura escritorio-23. El pie diminuto de esta pantalla se reporta en el 22.

12. Pantalla 24: ejes y cuadrantes con lenguaje profesional (sin "sabe a gusto", sin "sabe a remedio"); sin la línea de riesgo.
   **[NO CUMPLIDO]** Los ejes están bien ("Sabor de suplemento / Sabor de postre", "Sin hierro / Con hierro": src/mapa.ts:27-30) y la línea de riesgo ya no está. **Falta:** dos cuadrantes siguen en lenguaje coloquial, "RICO Y CON HIERRO" y "RICO, PERO SIN HIERRO" (src/mapa.ts:32 y :34), y el de abajo a la izquierda dice solo "SIN HIERRO" (:33), sin el criterio de sabor. Corrección: "SABOR DE POSTRE, CON HIERRO", "SABOR DE POSTRE, SIN HIERRO" y "SABOR DE SUPLEMENTO, SIN HIERRO"; título "Sabor o hierro: hasta hoy había que elegir." (index.html:501). También hay que limpiar el comentario de src/mapa.ts:1 ("sabe a remedio o sabe a gusto").

13. Pantalla 25: sin "cómo lo calculamos"; hogares explicados en una línea; menos texto en general.
   **[CUMPLIDO]** index.html:515-530: cuatro niveles con una línea cada uno y la foto del pack. Captura escritorio-25.

14. Stands consistentes en toda la presentación: Jockey Plaza enero, Salaverry febrero, La Molina agosto.
   **[NO CUMPLIDO]** La presentación es consistente (index.html:553, 624, 645, 697, 716, 732, 734 y 740; Gantt :780). **Falta:** la app que se abre con el QR de la pantalla 39 muestra otros datos en "Dónde comprar": `app-andi-mision-hierro/data/seed.json:162-178` dice "Jockey Plaza" desde 2027-01-09 (la presentación dice 2 y 3 de enero), "Real Plaza Salaverry u Open Plaza Angamos" y "La Rambla San Borja" (no La Molina). Corrección: p1 desde "2027-01-02"; p2 "Real Plaza Salaverry", Jesús María; p3 "La Molina", desde "2027-08-01". Después hay que volver a cargar la semilla en KV (worker/datos.ts:8-10 la carga una sola vez).

15. Campaña potente y emocional ("Lo que nadie ve"), con propósito; sin "su prueba… la tuya…".
   **[CUMPLIDO]** index.html:559-845 (pantallas 27 a 38) y CAMPANA-lo-que-nadie-ve.md: insight con citas reales (:578-584), manifiesto (:598-607) y cierre "Lo que haces cada mañana, por fin se ve." (:840). Grep sin "su prueba" ni "la tuya" en index.html, CAMPANA y PROMPTS.

16. "Contactos en espera" explicado o eliminado.
   **[CUMPLIDO]** Eliminado (grep sin resultados). En el Anexo 2 aparece "Contactos con permiso" (index.html:890) sin explicación; conviene decir "familias que aceptaron recibir WhatsApp".

17. Concepto de campaña no genérico; conecta emocionalmente con el público.
   **[CUMPLIDO]** El concepto sale del insight de los trucos (citas de Lourdes, Mateo y Vanessa), tiene un mecanismo propio (#LoQueNadieVe y el mural del stand) y un hilo de títulos encadenado (CAMPANA-lo-que-nadie-ve.md:15-16). Capturas escritorio-27 a 29.

18. Pantalla 5-3-2 eliminada.
   **[CUMPLIDO]** No hay ninguna pantalla 5-3-2 (grep sin resultados; lista de pantallas 01-40).

19. Pantalla del stand: la imagen no tapa el título; lo que antes era "recomendación" es parte de la campaña.
   **[CUMPLIDO]** Captura escritorio-33: el marco de imagen está debajo del título. La pantalla 34 "Primero lo cuentan ellos" (index.html:708-720) ya es parte de la campaña, con #LoQueNadieVe. El orden se observa en las transversales.

20. Pantalla de etapas: qué hacemos en cada etapa, con detalle.
   **[CUMPLIDO]** index.html:723-746: cuatro etapas con monto, 3 acciones con fecha y meta cada una. Captura escritorio-35.

21. Pantalla de gasto con cifras y título coherente con el hilo de la campaña; títulos encadenados en todo el capítulo.
   **[CUMPLIDO]** index.html:751 ("S/24,544 para que toda Lima cuente su truco.") y cuatro rubros con monto y en qué se gasta (:760-765). Títulos encadenados en las pantallas 27-38. La cifra repetida se reporta en el 22.

22. Sin textos pequeños sueltos que no transmiten nada.
   **[NO CUMPLIDO]** Pantalla 23: pie de 12 px "Padres de 32 a 45 años, NSE A y B… 7 de cada 10 hogares A/B son B." (index.html:493, clase .src, style.css:38 y :114-122), pegado al borde inferior (captura escritorio-23). Pantalla 36: la cifra S/24,544 sale dos veces seguidas, en el título (:751) y en el número grande (:754). Corrección: quitar el pie de la 23 o pasarlo a una línea de tamaño normal bajo el título; en la 36, el número grande debe mostrar otra cifra (por ejemplo "S/0.44 por brownie vendido") o el título se queda sin el monto. El .src de la pantalla 3 sí está permitido (fuente de la anemia).

23. Imágenes en lugares estratégicos en la mayoría de pantallas, no solo números y texto.
   **[NO CUMPLIDO]** Solo 17 de 40 pantallas tienen foto, captura o un marco previsto de imagen o video: 1, 3, 5, 8, 11, 15, 18, 19, 23, 25, 27, 29, 30, 31, 32, 33 y 40. Además se repiten fotos: imagen_4.jpg en la 3 y la 29, y empaque_frente.jpg en la 1, la 25 y la 40. Quedan solo con texto, números o íconos la 2, 9, 10, 12, 14, 16, 20, 28, 34, 35, 36 y 38. Hay material sin usar en public/img: empaque_mockup.jpg, app_05-lote.jpg, app_21-ninos-mapa.jpg y las capturas nuevas de juegos. Corrección (mínimo 4 pantallas para llegar a la mayoría): 16 → empaque_mockup.jpg; 20 → captura del mapa de juegos (16-mapa.png); 12 → una foto de la degustación; 38 → fotos del equipo o marco "IMAGEN equipo"; y, si se puede, 34 → marco "IMAGEN influencer con su truco".

24. Agente de diseño revisó las capturas de las dos apps.
   **[CUMPLIDO]** .claude/agents/t2-disenador.md existe (19:19). El commit c7adaf2 registra 35 ajustes en la presentación y 27 en la app, y las capturas son posteriores (20:02-20:04). Observación: la revisión dejó pasar el texto cortado del Canvas (ver transversal T1).

25. Agente creativo de campaña desarrolló la campaña.
   **[CUMPLIDO]** .claude/agents/t2-creativo.md existe (19:19); CAMPANA-lo-que-nadie-ve.md (201 líneas) y PROMPTS-campana.md (162 líneas). Los textos de index.html:559-845 coinciden con el documento.

26. Agente redactor aplicó la revisión de redacción a todo.
   **[NO CUMPLIDO]** El agente existe (.claude/agents/t2-redactor.md) y el commit c7adaf2 registra sus cambios, pero todavía quedan errores de redacción visibles. (a) index.html:604 y CAMPANA-lo-que-nadie-ve.md:50: "un mini brownie que te vuelve a pedir" (se lee como si el brownie pidiera); debe decir "que tu hijo te vuelve a pedir". (b) index.html:817, pantalla 39: "Modo padres: el reto, el semáforo semanal y el plan de loncheras con IA" describe la app vieja; debe decir "el hierro de hoy, la semana de tu hijo y el plan de loncheras con IA". (c) Pantalla 8 "8 mamás probaron el prototipo" (:172) frente a pantalla 11 "Ocho familias lo probaron" (:215): hay que unificar.

27. Director verificó todos los puntos.
   **[CUMPLIDO]** Esta verificación (19-oct-2026), con evidencia por punto.

28. Logo AndiBite pequeño en todas las pantallas.
   **[NO CUMPLIDO]** Está en 38 de 40 pantallas principales y en los 4 anexos (index.html:16-17, capturas). En la portada (1) y el cierre (40) el logo pequeño está oculto a propósito (style.css:1273 `body.is-hero .ui-brand { visibility: hidden; }`), porque esas pantallas llevan el logo grande. Corrección: quitar esa regla, o que Carlos acepte la excepción de forma explícita.

29. Ciclo de revisión (/loop) hasta cumplir todo.
   **[NO CUMPLIDO]** Pendiente: el ciclo se arma después de este informe con los 10 puntos abiertos y la transversal T1.

30. App: control de hierro del día mejorado (ver 6).
   **[NO CUMPLIDO]** El control del día está bien (anillo mg/referencia por edad, tres formas de sumar, /hoy con el detalle y resumen semanal; capturas 06-10). Falta lo mismo que en el 6: no se puede enviar el resumen del día o de la semana al padre o la madre que no está en casa.

31. Juegos con niveles y duración (30 a 60 min de contenido), tres juegos de colegio por edad.
   **[CUMPLIDO]** Niveles en src/data/ninos.ts:61 (Atrapa 10, Lonchera exprés 10, Memoria 5; Suma de hierro, Palabras de la lonchera e Inglés de lonchera 20 cada uno, con 8 rondas por nivel: src/kids/colegio.ts y src/data/juegos-colegio.ts:7-10). Hay tres tramos de edad (4-6, 7-9 y 10-11) y el contenido se genera según el tramo. Duración estimada en una primera pasada: Atrapa 10 × 45 s, unos 8 min; Lonchera exprés unos 6 min; Memoria (40 parejas) unos 4 min; los tres juegos de colegio, 480 rondas de 5-7 s, de 40 a 55 min. En total, alrededor de una hora sin contar repeticiones. Capturas 16-23 de la app.

## Revisión transversal

- **T1 (bloquea) · Texto cortado en el Canvas, pantalla 14.** Captura escritorio-14: en "Actividades clave" se corta la 4.ª línea ("Contenido, pauta en Meta y la app"), en "Relación con el cliente" la 4.ª ("…con su código") y en "Propuesta de valor" el 3.er punto ("…y un juego para el niño"). Causa: style.css:1244 subió `.canvas-pts .cb li` a 20 px y :1003 tiene `overflow: hidden`. Corrección: volver a 17-18 px o quitar un punto de cada caja de la fila superior, y verificar con una captura nueva.
- **Coherencia del hilo.** (a) La pantalla 34 "Primero lo cuentan ellos" va después del stand (33), pero en el plan los influencers y la expectativa van antes del 10 de enero y en diciembre: hay que moverla entre la 32 y la 33. (b) Pantalla 19: la 4.ª captura dice "Pedido por WhatsApp" y muestra la despensa vacía; debe mostrar la despensa con un pack y el botón de WhatsApp. (c) Pantalla 39: describe la app vieja (punto 26b). (d) Las pantallas 20 y 21 repiten el 35 % (punto 10). (e) La 28 ("nadie lo aplaude") y la 29 ("Nadie aplaude esos trucos") repiten la idea seguida; basta con una.
- **Papá y mamá.** Cumple en la presentación y en la app (punto 9). Pendiente fuera del alcance: HECHOS_v7.md:14 y t2-redactor.md.
- **Palabras prohibidas.** Grep en index.html, src/, la app, CAMPANA y PROMPTS: no aparecen "supuesto", "estimado", "[POR CONFIRMAR]", "EXPOINNOVA" ni "Hierro medido. Sabor a brownie.". La única fuente visible es la de la anemia (:97). Frases espejo: no hay del tipo "Él ve… Tú ves…". "Nadie aplaude esos trucos. Nadie los ve." (:603) es un eco de dos partes, justo lo que CAMPANA:198 pide evitar; conviene "Nadie aplaude esos trucos porque nadie los ve.". Riesgo de contenido: "1.9 mg de hierro en cada brownie, siempre" (:303 y :361) afirma algo que HECHOS:40 todavía tiene pendiente de laboratorio; conviene quitar "siempre".

## Pendientes ordenados por importancia

1. T1: texto cortado en el Canvas (pantalla 14).
2. Puntos 6 y 30: enviar el resumen del día y de la semana al padre o la madre que no está en casa (la presentación ya lo promete en las pantallas 15, 18 y 20).
3. Punto 10: una sola cifra de recompra en la pantalla 21 (y sin repetirla en la 20).
4. Punto 14: stands de la app (seed.json) iguales a los de la presentación.
5. Punto 23: imagen en al menos 4 pantallas más (16, 20, 12, 38).
6. Punto 26: "que tu hijo te vuelve a pedir", el texto de la pantalla 39 y "8 mamás" frente a "Ocho familias".
7. Punto 12: cuadrantes sin "rico".
8. Punto 22: pie diminuto de la pantalla 23 y S/24,544 repetido en la 36.
9. Hilo: mover la pantalla 34 antes de la 33; captura de WhatsApp en la 19.
10. Punto 28: logo pequeño en la portada y el cierre (o excepción aceptada por Carlos).
11. Punto 29: armar el ciclo de revisión con estos pendientes.
