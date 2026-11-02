# Elevator pitch en video · 60 segundos

El «discurso de un minuto» de AndiBite (HECHOS_v7, decisiones del 19-oct-2026) contado como historia: empieza en una cocina a las 6:40 y termina en el slogan. Se hace con tres herramientas: Google Flow (Veo 3) para las imágenes, ElevenLabs para la voz y CapCut para unir. Nadie habla a cámara y no hay avatar.

**Archivos finales:** `pitch_60s.mp4` (16:9, 1920 × 1080, para la sustentación y YouTube) y `pitch_60s_vertical.mp4` (9:16, 1080 × 1920, para Instagram, Facebook y WhatsApp).

## La decisión: narración con ElevenLabs

- Con una sola pista de ElevenLabs grabada de un tirón, la voz y el tono son los mismos durante los 60 segundos. Si una frase sale mal, se regenera el audio y el video no se toca.
- Si la voz la pone Flow, cada clip de 8 segundos inventa su propia voz y su propio movimiento de labios en español: son ocho clips con ocho voces que no calzan, y cada error obliga a regenerar el clip.
- Por eso los clips de Veo van «sin diálogo, solo ambiente»: las personas miran, hacen y sonríen, y la voz cuenta la historia por encima.

## La idea

Cada papá y cada mamá tiene un truco para que su hijo coma bien, y nadie lo ve. AndiBite es el truco que ya no necesita cuento.

## 1. Guion de voz · 151 palabras · 60 s

Voz **Marca**: una mamá limeña de unos 35 que ya pasó por esto y te lo cuenta sin drama. Cálida, segura, con una sonrisa que se oye; nunca locutora. Es la misma voz del video maestro y de la convocatoria.

| Tiempo | Clip | Voz |
|---|---|---|
| 0:00 a 0:07 | 1 | «Son las seis y cuarenta. Un papá ralla zanahoria dentro de la torta… y mira al pasillo, por si acaso.» |
| 0:07 a 0:14 | 2 | «En el depa de al lado, una mamá jura que es sopa de dinosaurio. Y funciona. Bueno… una vez.» |
| 0:14 a 0:21 | 3 | «Tú también tienes el tuyo. Y nadie aplaude esos trucos… porque nadie los ve.» |
| 0:21 a 0:28 | 4 | «Por eso hicimos uno que ya no necesita cuento. Se llama AndiBite: un mini brownie que tu hijo te vuelve a pedir.» |
| 0:28 a 0:36 | 5 | «Adentro va sangrecita… y no se nota. Casi dos miligramos de hierro en cada brownie. Hierro, sin pelear cada mañana.» |
| 0:36 a 0:43 | 6 | «Y en la app Andi ves lo que nadie ve: cuánto hierro llevó hoy, estés donde estés.» |
| 0:43 a 0:50 | 7 | «Antes de venderlo, hicimos veinticinco entrevistas. Ocho mamás lo probaron… y ninguna notó la sangrecita.» |
| 0:50 a 0:56 | 8 | «Pruébalo en el stand de Jockey Plaza desde el 2 de enero, o pídelo por WhatsApp.» |
| 0:56 a 1:00 | cierre | «AndiBite. Dulce para ellos. Tranquilidad para ti.» |

La única imperfección es «Bueno… una vez». La marca se dice dos veces: cuando aparece el brownie y al cerrar. Las cifras exactas (1.9 mg, 25 entrevistas, 8 mamás) van escritas en pantalla (sección 3).

### Texto para pegar en ElevenLabs · Eleven v3 (opción principal)

Una sola generación. Los números van en palabras para que la voz los diga como se dicen.

```
[warmly] Son las seis y cuarenta. Un papá ralla zanahoria dentro de la torta... y mira al pasillo, por si acaso. [pause]
En el depa de al lado, una mamá jura que es sopa de dinosaurio. Y funciona. [short pause] Bueno... una vez. [pause]
Tú TAMBIÉN tienes el tuyo. [pause] Y nadie aplaude esos trucos... [long pause] [softly] porque nadie los ve.
[long pause] Por eso hicimos uno que ya no necesita cuento. [warmly] Se llama AndiBite: un mini brownie que tu hijo te vuelve a pedir. [pause]
Adentro va sangrecita... y no se nota. [short pause] Casi dos miligramos de hierro en cada brownie. Hierro, sin pelear cada mañana. [pause]
Y en la app Andi ves lo que nadie ve: cuánto hierro llevó hoy, estés donde estés. [pause]
Antes de venderlo, hicimos veinticinco entrevistas. [short pause] Ocho mamás lo probaron... y ninguna notó la sangrecita. [pause]
[warmly] Pruébalo en el stand de Jockey Plaza desde el dos de enero, o pídelo por WhatsApp. [long pause]
[softly] AndiBite. [short pause] Dulce para ellos. [short pause] Tranquilidad para ti.
```

### Texto para pegar en ElevenLabs · Multilingual v2 (respaldo)

Mismas palabras; las emociones no se etiquetan, salen de la puntuación y de la dirección.

```
Son las seis y cuarenta. Un papá ralla zanahoria dentro de la torta... y mira al pasillo, por si acaso. <break time="0.6s" />
En el depa de al lado, una mamá jura que es sopa de dinosaurio. Y funciona. <break time="0.4s" /> Bueno... una vez. <break time="0.8s" />
Tú también tienes el tuyo. <break time="0.5s" /> Y nadie aplaude esos trucos... <break time="0.8s" /> porque nadie los ve. <break time="1.0s" />
Por eso hicimos uno que ya no necesita cuento. Se llama AndiBite: un mini brownie que tu hijo te vuelve a pedir. <break time="0.6s" />
Adentro va sangrecita... y no se nota. <break time="0.4s" /> Casi dos miligramos de hierro en cada brownie. Hierro, sin pelear cada mañana. <break time="0.6s" />
Y en la app Andi ves lo que nadie ve: cuánto hierro llevó hoy, estés donde estés. <break time="0.6s" />
Antes de venderlo, hicimos veinticinco entrevistas. <break time="0.4s" /> Ocho mamás lo probaron... y ninguna notó la sangrecita. <break time="0.6s" />
Pruébalo en el stand de Jockey Plaza desde el dos de enero, o pídelo por WhatsApp. <break time="1.0s" />
AndiBite. <break time="0.4s" /> Dulce para ellos. <break time="0.4s" /> Tranquilidad para ti.
```

### Ajustes de voz

- **Eleven v3:** Stability en Natural (si la voz se descontrola, Robust; si suena plana, Creative), Similarity 75. Pega el texto completo de una vez.
- **Multilingual v2:** Stability 50, Similarity 75, Style 10, Speed 1.0, Speaker boost activado.
- Genera 3 tomas y quédate con la más natural, no con la más perfecta. Exporta en MP3, 44.1 kHz, con el nombre `pitch_voz.mp3`.
- Duración: entre 57 y 61 s está bien, porque el cierre absorbe la diferencia. Si pasa de 61 s, sube Speed a 1.03. Si baja de 57 s, ponlo en 0.95.
- Si «AndiBite» o «WhatsApp» no suenan como los dicen ustedes, cámbialos solo en el texto de ElevenLabs por como suenan («AndiBáit», «wasap»).

### Dirección

- Los primeros 14 segundos, como quien cuenta algo del vecino: con una sonrisa que se oye. «Bueno… una vez» sale casi riéndose, sin exagerar.
- «Porque nadie los ve» va más lento y más bajo, casi como un secreto. No se sube la voz.
- Desde «Por eso hicimos uno» vuelve la calidez, segura y sin apuro. Las cifras, claras y tranquilas, como quien le cuenta a una amiga; nada de tono de venta.
- La invitación al stand, cercana, como quien te pasa el dato.
- El slogan, despacio y más bajo, con una pausa corta entre «ellos» y «Tranquilidad».
- Prueba final: léelo en voz alta con cronómetro. Si una palabra se traba, se cambia.

## 2. Clips de Veo · 8 clips de 8 s

En Flow: modelo Veo 3 en Quality para la versión final, formato 16:9, 8 segundos y 2 variantes por prompt. Cada prompt ya trae al final «no dialogue, ambient sound only».

Referencias (son las de `PROMPTS-campana.md`): F1 `fotogramas/f1_final_maestro.png` (la cocina y la lonchera vacía), F2 `fotogramas/f2_claudia.png` (la mamá), F3 `fotogramas/f3_rodrigo.png` (el papá), S1 `public/img/campana/stand.jpg` (el stand con el mural) y la bolsa `public/img/empaque_mockup.jpg`. La mamá es siempre la persona de F2 y el papá, la de F3, para que se vea como una sola familia.

Guarda los clips como `pitch_01.mp4` … `pitch_08.mp4`.

### Clip 1 · 0:00 a 0:07 · el truco de la zanahoria
Modo «Ingredients to video» · referencias F1 y F3 · se usan los primeros 7 s.

```
Cinematic realistic video, 16:9, 8 seconds. 6:40 a.m. in the same real Lima apartment kitchen as the reference image: light oak counter, cream tiles, a small plant, soft early light from the window mixed with a warm pendant lamp. The same man as the reference image (Peruvian father around forty, casual shirt with rolled sleeves) stands at the counter in front of a bowl of chocolate cake batter. 0-4 s: close-up of his hands grating a carrot straight into the batter. 4-8 s: medium shot; he glances over his shoulder toward the hallway, as if keeping a secret, then quickly stirs the carrot in and allows himself a small proud smile. On the counter, slightly out of focus: the open reusable terracotta lunchbox with a cream lid and a brick-red latch. Slow handheld camera, 35mm look, shallow depth of field, soft film grain, palette of cocoa brown, kraft, cream and warm gold with a brick-red accent. Adults only: no children, no child's face or hands. No on-screen text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient kitchen sound only.
```

### Clip 2 · 0:07 a 0:14 · la sopa de dinosaurio
Modo «Ingredients to video» · referencias F1 y F2 · se usan los primeros 7 s.

```
Cinematic realistic video, 16:9, 8 seconds. Lunchtime in the same real Lima apartment kitchen as the reference image (light oak table, cream tiles, warm window light). The same woman as the reference image (Peruvian mother in her late thirties) sets a bowl of soup with dinosaur-shaped pasta on the table in front of an empty chair. 0-4 s: she walks a small generic plastic toy dinosaur (not from any film) along the rim of the bowl, making it pretend to eat, with a playful, theatrical face. 4-8 s: the bowl is pushed slowly back into frame from off-camera, still almost full, with no hands visible; she looks at it, raises her eyebrows and lets out a soft, tender laugh, not defeated. The terracotta lunchbox with the brick-red latch rests at the edge of the table. Slow camera, 35mm look, shallow depth of field, soft film grain, palette of cocoa brown, kraft, cream and warm gold. Adults only: no children, no child's face or hands. No on-screen text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient sound only.
```

### Clip 3 · 0:14 a 0:21 · lo que nadie ve
Modo «Ingredients to video» · referencias F1 y F3 · se usan los primeros 7 s.

```
Cinematic realistic video, 16:9, 8 seconds. Night, around 9 p.m., the same real Lima apartment kitchen as the reference image, only a warm lamp on, the rest of the home quiet and dark. The same man as the reference image stands alone at the sink. 0-4 s: he opens the terracotta lunchbox with the brick-red latch: the sandwich and a mandarin came back untouched; he takes the mandarin out and puts it back in the fruit bowl. 4-8 s: he washes the lunchbox slowly, dries it with a cloth and leaves it open on the counter for tomorrow; he smiles to himself, tired but tender; nobody else is there. Very slow push-in, one long quiet take, 35mm look, shallow depth of field, soft film grain, low warm light, palette of cocoa brown, kraft, cream and warm gold. Adults only: no children. No on-screen text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient sound only, running water and a soft clock tick.
```

### Clip 4 · 0:21 a 0:28 · el truco que ya no necesita cuento
Modo «Ingredients to video» · referencias F2, `empaque_mockup.jpg` y F1 · se usan los primeros 7 s.

```
Cinematic realistic video, 16:9, 8 seconds. Early morning in the same real Lima apartment kitchen as the reference image, warm side light. The same woman as the reference image, dressed for work. 0-3 s: she takes one small sealed matte kraft pouch out of the kraft stand-up bag from the product reference (keep the bag plain kraft if its label cannot be reproduced exactly). 3-6 s: she drops the pouch into the open terracotta lunchbox next to a mandarin and closes the brick-red latch with one easy click. 6-8 s: she slides the lunchbox into a school backpack hanging on a chair and walks out of frame, calm, no trick, no story, a light smile. Smooth slow dolly, 35mm look, shallow depth of field, soft film grain, palette of cocoa brown, kraft, cream and warm gold. Adults only: no children. No close-up of any brownie. No on-screen text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient sound only.
```

### Clip 5 · 0:28 a 0:36 · la lonchera vuelve vacía
Modo «Frames to video» · F1 como **último cuadro** · se usan los 8 s.

```
Cinematic realistic video, 16:9, 8 seconds, ending exactly on the reference image as the final frame. 1:30 p.m. in the same real Lima apartment kitchen, warm afternoon light on the light oak table. 0-3 s: an adult hand sets the closed terracotta lunchbox with the brick-red latch on the table and opens the cream lid. 3-6 s: inside it is completely empty, only a folded cloth napkin and a few cocoa crumbs; the matte kraft pouch stands upright beside it; the hand rests gently on the open lid, a quiet gesture of relief. 6-8 s: slow push-in that settles on the final frame and holds still, with calm cocoa-brown space on the left third. 35mm look, shallow depth of field, soft film grain, palette of cocoa brown, kraft, cream and warm gold. Adults only: no children. No on-screen text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient sound only.
```

### Clip 6 · 0:36 a 0:43 · la app, desde el trabajo
Modo «Ingredients to video» · referencia F3 · se usan los primeros 7 s.

```
Cinematic realistic video, 16:9, 8 seconds. Midday in a bright logistics warehouse office in Lima: shelves and boxes out of focus, warm daylight. The same man as the reference image, holding a clipboard. 0-3 s: his phone vibrates on the desk and he picks it up. 3-6 s: over-the-shoulder shot of the screen: a simple app with a soft red progress ring on a cream background slowly filling up, no readable numbers or words. 6-8 s: back on his face; he exhales, gives a small relieved smile, puts the phone in his pocket and goes back to work. Documentary handheld feel, 35mm look, shallow depth of field, soft film grain, palette of cocoa brown, kraft, cream and warm gold with a brick-red accent. Adults only: no children. No readable text on the screen, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient office sound only.
```

### Clip 7 · 0:43 a 0:50 · escuchamos y lo probaron
Modo «Ingredients to video» · referencias `empaque_mockup.jpg` y F1 · se usan los primeros 7 s.

```
Cinematic realistic video, 16:9, 8 seconds. Afternoon in a warm Lima living room with light wood furniture. 0-4 s: on a coffee table, an open notebook with handwritten notes that are blurred and unreadable, a smartphone recording audio with its screen softly glowing, two cups of coffee; an adult's hand turns a page while another adult, out of focus, talks with her hands. 4-8 s: a wooden tray with small sealed matte kraft pouches (from the product reference, plain kraft if the label cannot be reproduced) is placed on the table; several adult women's hands take one pouch each and open them; their faces stay out of frame or out of focus, warm and relaxed. Slow camera, 35mm look, shallow depth of field, soft film grain, palette of cocoa brown, kraft, cream and warm gold. Adults only: no children. No close-up of any brownie. No readable text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient sound only.
```

### Clip 8 · 0:50 a 0:56 · el stand
Modo «Ingredients to video» · referencias S1 y `empaque_mockup.jpg` · se usan los primeros 6 s.

```
Cinematic realistic video, 16:9, 8 seconds. The same small warm brand stand as the reference image, inside a bright Lima shopping mall: light oak counter, cream back panel, a large kraft-paper mural covered with blank sticky notes. 0-3 s: an adult father sticks one more blank cream note on the mural and steps back, smiling. 3-6 s: at the counter, an adult mother tastes from a small tasting cup handed to her by a saleswoman in a cream apron and a cocoa-brown cap, and laughs with surprise. 6-8 s: the father picks up a small sealed matte kraft pouch from the wooden tray and, with his other hand, types a quick message on his phone (screen glow, no readable content). Warm daylight from a skylight, gentle camera move, 35mm look, shallow depth of field, palette of cocoa brown, kraft, cream, brick red and warm gold. Adults only: no children, no child's face or hands. All sticky notes and panels blank. No readable text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient mall sound only.
```

## 3. Texto en pantalla

Solo cifras y el cierre. Los subtítulos automáticos van abajo y estos textos, arriba.

| Tiempo | Texto |
|---|---|
| 0:00 a 0:03 | 6:40 a. m. |
| 0:30 a 0:36 | 1.9 mg de hierro en cada brownie · 20 g · sin octógonos |
| 0:44 a 0:50 | 25 entrevistas · 8 mamás lo probaron |
| 0:56 a 1:00 | Pantalla final (sección 4) |

## 4. Pantalla final (Nano Banana) · `cierre_16x9.png`

Adjunta `empaque_mockup.jpg`, `logo_light.png` y F1, y pega lo siguiente. Es la misma imagen E1 del video maestro: se genera una sola vez.

```
Wide 16:9 end card for a video, 1920x1080, photorealistic with clean graphic typography. Use the attached images as references: the kraft pouch, the AndiBite logo and the kitchen. Scene: the same warm Lima kitchen, light oak table, soft late-morning side light, shallow depth of field. Right half of the frame: the matte kraft stand-up pouch from the reference (keep its label exactly as in the reference; if it cannot be reproduced faithfully, keep it plain kraft) standing next to the closed terracotta lunchbox with a cream lid and a brick-red latch, and a smartphone lying face up showing a simple app screen with a soft red progress ring on a cream background (no readable numbers). Left half: calm, darker cocoa-brown negative space for text. Typography in Spanish, rendered exactly as written, with accents and no spelling mistakes, in a rounded bold sans-serif, all on the left half: a large headline in cream white (#FBF3E8), in two lines: "Dulce para ellos." / "Tranquilidad para ti." Below it, two rounded pill buttons side by side: a solid brick-red pill (#BA4036) with cream text "Pruébalo en el stand" and an outlined cream pill with cream text "Pídelo por WhatsApp". Below the buttons, one small cream line: "Jockey Plaza · desde el 2 de enero". Bottom left: the AndiBite logo from the reference, small, and next to it "#LoQueNadieVe" in warm gold (#E3A33B). No other text, no children, no watermark, no octagon warning labels, no extra logos.
```

Revisa letra por letra, sobre todo las tildes de «Pruébalo» y «Pídelo». Si una palabra sale mal, pide: «replace the word X with Y». Para la versión vertical se usa la pantalla de los anuncios (E2, en `PRODUCCION-videos.md`), que dice lo mismo en 9:16.

## 5. Montaje en CapCut · 6 pasos

1. Crea un proyecto en 16:9 e importa `pitch_voz.mp3`, una música suave sin letra (piano o guitarra, de la biblioteca de CapCut; la misma de los cinco videos de campaña), los 8 clips y `cierre_16x9.png`.
2. Pon una sola pista de voz desde 0:00 y una sola pista de música debajo, al 15 % de volumen, con fundido de salida en los 2 últimos segundos. Silencia los clips; si su ambiente suma y no trae voces, déjalos al 10 %.
3. Pon los 8 clips en orden y la imagen de cierre al final.
4. Corta cada clip donde empieza la frase siguiente: 0:07, 0:14, 0:21, 0:28, 0:36, 0:43, 0:50 y 0:56. Ajusta medio segundo mirando la onda de la voz. Si sobra clip, recórtalo; nunca aceleres la voz.
5. Ve a Texto > Subtítulos automáticos (español) y revisa «AndiBite», «1.9 mg» y «WhatsApp». Agrega los tres textos de la sección 3 arriba, para que no choquen con los subtítulos.
6. Exporta en 1080p y 30 fps como `pitch_60s.mp4`. Después cambia el formato a 9:16, reencuadra cada clip (con Encuadre automático o arrastrando para centrar a la persona), cambia el cierre por `cierre_anuncios_9x16.png`, sube los textos y exporta `pitch_60s_vertical.mp4`.

Antes de exportar, comprueba tres cosas: que no salga ningún niño, que la IA no haya inventado letras y que el video dure 60 segundos. Si falla alguna, se regenera ese clip.

## Qué hay que generar para el pitch

- 1 pista de voz (`pitch_voz.mp3`).
- 8 clips de Veo (`pitch_01.mp4` a `pitch_08.mp4`).
- 1 imagen nueva (`cierre_16x9.png`, que también usa el maestro) más la pantalla de los anuncios para la versión vertical.
- 1 música, la misma de toda la campaña.
