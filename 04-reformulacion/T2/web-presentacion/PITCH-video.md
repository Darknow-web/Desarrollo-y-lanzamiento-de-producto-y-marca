# Elevator pitch en video · 60 segundos · Carlos habla por el equipo

No es un comercial. Es Carlos, de frente, con un minuto para contarle a un jurado qué hicimos y qué pedimos. Sale él solo, pero habla en nombre de los cinco. El video se arma con tres cosas: su guion, su voz en ElevenLabs y su avatar generado en ElevenLabs con HeyGen Avatar IV. Encima del video no va ningún texto: ni rótulos, ni cifras, ni subtítulos. Todo lo dice él.

Reglas de habla: las de `TONO-de-voz.md` (segunda persona, frases cortas y largas, palabras de casa, cifras como se dicen, una imperfección, pausas, el giro más bajo, la marca al final, nunca tono de locutor).

## 1. El guion · 60 s · unas 170 palabras

| Tiempo | Qué pasa | Lo que dice Carlos |
|---|---|---|
| 0:00 a 0:08 | Carlos a cámara | «Soy Carlos, y vengo de parte de un equipo de cinco. Una mamá nos dijo en su cocina: "Ella no sabe que es hígado".» |
| 0:08 a 0:16 | Carlos; inserto 1 (la cocina y la lonchera) en 0:11 | «Lo oímos veinticinco veces. La lonchera vuelve llena, y cada casa inventa su truco. Zanahoria en la torta. Lo que sea.» |
| 0:16 a 0:32 | Carlos; inserto 2 (la bolsa kraft) en 0:20; inserto 3 (la app, el anillo del hierro) en 0:27 | «Hicimos un truco que ya no necesita cuento. Se llama AndiBite. Un mini brownie de veinte gramos con sangrecita adentro… y no se nota. Casi dos miligramos de hierro, sin octógonos. Y una app donde papá y mamá ven el hierro de cada día.» |
| 0:32 a 0:41 | Carlos | «Es para familias de Lima Top y Moderna, con hijos de cuatro a once, que ya compran lo sano. Solo les faltaba que el niño se lo comiera.» |
| 0:41 a 0:50 | Carlos; inserto 4 (foto de la degustación) en 0:43 | «Ocho mamás lo probaron y ninguna notó la sangrecita. Y preguntamos a treinta papás y mamás cuánto pagarían por el pack de seis: veintisiete con noventa está dentro.» |
| 0:50 a 0:58 | Carlos; inserto 5 (el stand con el mural) en 0:53 | «Abrimos el dos de enero en Jockey Plaza. Vengan, pruébenlo con sus hijos… y me cuentan si se lo darían.» |
| 0:58 a 1:00 | Carlos | «AndiBite. Dulce para ellos. Tranquilidad para ti.» |
| 1:00 a 1:02 | Pantalla final (logo y slogan) | silencio o música muy baja |

Dirección para Carlos (o para la voz clonada): los primeros ocho segundos con calma, como quien cuenta algo que le pasó; «y no se nota» con una media sonrisa; «Lo que sea» es la única imperfección, dicha como si se encogiera de hombros; «y me cuentan si se lo darían» más lento, mirando a cámara; el slogan sin vender, casi en voz baja.

## 2. La voz · ElevenLabs · un solo archivo

**Qué voz.** Lo mejor es la de Carlos. Instant Voice Clone: graba con el celular, en un cuarto sin eco, de uno a dos minutos leyendo cualquier texto en tono normal (sirve este mismo guion dos veces). Sube el audio, nómbralo «Carlos», y listo. Si no quiere clonarla: una voz masculina latinoamericana de unos 28 a 32 años, cercana, no de locutor; escuchar la muestra con la primera frase del guion antes de elegir.

**Texto para pegar · Eleven v3 (opción principal).** Stability en Natural, Similarity 75. Una sola generación.

```
[warmly] Soy Carlos, y vengo de parte de un equipo de cinco. [short pause] Una mamá nos dijo en su cocina: "Ella no sabe que es hígado". [pause]
Lo oímos veinticinco veces. La lonchera vuelve llena... y cada casa inventa su truco. [short pause] Zanahoria en la torta. [soft laugh] Lo que sea. [pause]
Hicimos un truco que ya no necesita cuento. Se llama AndiBite. Un mini brownie de veinte gramos con sangrecita adentro... [short pause] y no se nota. Casi dos miligramos de hierro, sin octógonos. [short pause] Y una app donde papá y mamá ven el hierro de cada día. [pause]
Es para familias de Lima Top y Moderna, con hijos de cuatro a once, que ya compran lo sano. [short pause] Solo les faltaba que el niño se lo comiera. [pause]
Ocho mamás lo probaron y ninguna notó la sangrecita. [short pause] Y preguntamos a treinta papás y mamás cuánto pagarían por el pack de seis... [short pause] veintisiete con noventa está dentro. [pause]
Abrimos el dos de enero en Jockey Plaza. [short pause] Vengan, pruébenlo con sus hijos... [pause] y me cuentan si se lo darían. [long pause]
[softly] AndiBite. [short pause] Dulce para ellos. [short pause] Tranquilidad para ti.
```

**Texto para pegar · Multilingual v2 (respaldo).** Stability 50, Similarity 75, Style 10, Speed 1.0.

```
Soy Carlos, y vengo de parte de un equipo de cinco. <break time="0.4s" /> Una mamá nos dijo en su cocina: "Ella no sabe que es hígado". <break time="0.7s" />
Lo oímos veinticinco veces. La lonchera vuelve llena... y cada casa inventa su truco. <break time="0.4s" /> Zanahoria en la torta. Lo que sea. <break time="0.7s" />
Hicimos un truco que ya no necesita cuento. Se llama AndiBite. Un mini brownie de veinte gramos con sangrecita adentro... <break time="0.4s" /> y no se nota. Casi dos miligramos de hierro, sin octógonos. <break time="0.4s" /> Y una app donde papá y mamá ven el hierro de cada día. <break time="0.7s" />
Es para familias de Lima Top y Moderna, con hijos de cuatro a once, que ya compran lo sano. <break time="0.4s" /> Solo les faltaba que el niño se lo comiera. <break time="0.7s" />
Ocho mamás lo probaron y ninguna notó la sangrecita. <break time="0.4s" /> Y preguntamos a treinta papás y mamás cuánto pagarían por el pack de seis... <break time="0.4s" /> veintisiete con noventa está dentro. <break time="0.7s" />
Abrimos el dos de enero en Jockey Plaza. <break time="0.4s" /> Vengan, pruébenlo con sus hijos... <break time="0.6s" /> y me cuentan si se lo darían. <break time="1.0s" />
AndiBite. <break time="0.4s" /> Dulce para ellos. <break time="0.4s" /> Tranquilidad para ti.
```

Tres tomas; quédate con la que suene más a conversación, no con la más perfecta. Debe durar entre 57 y 62 s (si no, Speed entre 0.95 y 1.03). Exporta `pitch_voz.mp3`, 44.1 kHz. Si «AndiBite» no suena como lo dicen ustedes, escríbelo como suena solo en este texto («AndiBáit»).

## 3. El avatar · ElevenLabs con HeyGen Avatar IV

**La foto.** Una sola, de Carlos, de frente, con hombros y algo de pecho visibles, mirando a cámara con la boca cerrada y expresión neutra o media sonrisa, luz de ventana de un lado, sin lentes oscuros ni gorra, 1080 px o más. Si se puede, tomada en la cocina del equipo con la lonchera terracota y la bolsa kraft sobre la mesa, al fondo y fuera de foco: así el fondo ya es de la marca y no hay que poner nada encima.

**Pasos.**
1. En ElevenLabs, abre la función de avatares (AI Video / Avatars) y crea un avatar nuevo a partir de la foto.
2. Elige formato 16:9 y la mayor resolución del plan (1080p si está).
3. En la voz, elige **"usar mi propio audio"** y sube `pitch_voz.mp3`. Así los labios siguen exactamente la toma que elegiste y el texto no se vuelve a interpretar. (Si la función solo acepta texto, pega el guion v3 de arriba y elige la voz «Carlos».)
4. Genera y descarga como `pitch_avatar.mp4`.
5. Revisa tres cosas: que los labios cierren en las pausas, que las manos no hagan nada raro y que parpadee. Si un tramo se ve extraño, ese tramo se tapa con un inserto en el montaje; no hace falta regenerar.

**Límite de duración.** Confirma en tu plan cuánto dura como máximo un video con Avatar IV. Si el tope es de 30 s, parte `pitch_voz.mp3` en dos (0:00 a 0:32, en la pausa después de "el hierro de cada día", y 0:32 al final), genera dos videos con la misma foto y únelos en CapCut; el inserto 3 cae justo en el corte y lo disimula.

## 4. Los cinco insertos (material que ya existe)

Son los únicos cortes del video. Duran 3 s cada uno, van sobre la voz sin tocarla y sin ningún texto encima.

| # | Segundo | Qué se ve | Archivo |
|---|---|---|---|
| 1 | 0:11 | La cocina con la lonchera sobre la mesa | `campana_4.jpg` (último cuadro del video maestro) en `public/img/campana/`; o 3 s del propio `campana_maestro.mp4` |
| 2 | 0:20 | La bolsa kraft | `empaque_mockup.jpg` o `empaque_frente.jpg` en `public/img/` |
| 3 | 0:27 | La app, el anillo de «El hierro de hoy» | `app_reto.jpg` en `public/img/` |
| 4 | 0:43 | Las mamás probando el prototipo | `degustacion_1.jpg` a `degustacion_4.jpg` en `public/img/` |
| 5 | 0:53 | El stand con el mural en Jockey Plaza | `stand.jpg` en `public/img/campana/` |

Si una imagen es fija, ponle un movimiento lento (zoom del 100 al 105 %) para que respire. Pantalla final: `cierre.jpg` (la pantalla de cierre que ya está en `public/img/campana/`, 16:9, con logo y slogan), 2 s. Es la única pieza con texto y aparece cuando Carlos ya terminó.

## 5. Montaje en CapCut · 4 pasos

1. Proyecto 16:9 (1920 × 1080). Importa `pitch_avatar.mp4`: ya trae la voz, no la separes.
2. Pon los cinco insertos en una pista encima, en los segundos de la tabla, 3 s cada uno, con el zoom lento. La voz sigue debajo sin cortes.
3. Al final, `cierre.jpg` durante 2 s con un fundido de medio segundo. Música: opcional, muy baja (piano o guitarra sin letra), al 10 % y solo si no pelea con la voz.
4. Exporta `pitch_60s.mp4` a 1080p, 30 fps. Para redes, duplica el proyecto en 9:16 con el recorte centrado en el rostro y exporta `pitch_60s_vertical.mp4`.

Sin subtítulos, sin rótulos, sin cifras en pantalla. Si alguien del jurado necesita leer, el texto está en la presentación.

**Si el jurado pregunta por el precio:** los S/27.90 del pack de 6 se apoyan en la encuesta a 30 papás y mamás (documento 07, 2.7) y en el rango de S/24 a 30 del segmento A, no en la degustación (ahí las mamás hablaron de S/10, que no cubre el costo; nunca se presenta como precio del plan).

## Qué hay que hacer, en orden

1. [ ] Grabar 1 a 2 minutos de voz con el celular y clonarla en ElevenLabs (o elegir una voz).
2. [ ] Generar `pitch_voz.mp3` con el texto v3 (tres tomas, 57 a 62 s).
3. [ ] Tomar la foto de Carlos en la cocina del equipo.
4. [ ] Generar `pitch_avatar.mp4` en ElevenLabs con la foto y el audio.
5. [ ] Montar en CapCut con los cinco insertos y la pantalla final; exportar 16:9 y 9:16.
