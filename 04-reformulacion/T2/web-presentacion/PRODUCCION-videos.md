# Producción de los videos de la campaña · versión 2

Son cinco videos para redes y YouTube, del concurso de noviembre a los anuncios de 2027. Todos se arman igual: (1) una pista de voz en ElevenLabs, (2) clips de Veo sin diálogo, (3) muy poco texto en pantalla, (4) una pantalla de cierre de Nano Banana, (5) el montaje en CapCut y (6) el nombre del archivo. Al final está la orden de trabajo para hacerlo todo en una sesión. El pitch de 60 segundos está en `PITCH-video.md` y usa las mismas voces, referencias y pantallas de cierre.

**Qué cambia frente a la versión 1:**
- Los guiones se reescribieron: cada uno tiene una sola emoción y cabe en su tiempo.
- Cada video tiene una sola pista de voz en lugar de bloques sueltos.
- Los anuncios duran 8 s con el cierre adentro.
- Los videos de buyer persona ya no se hacen, porque las fichas llevan foto.

| # | Video | Formato | Dónde y cuándo | Pauta y meta | Archivo |
|---|---|---|---|---|---|
| 1 | Video maestro «Lo que nadie ve» | 16:9 · 16 s | YouTube, Instagram y Facebook desde el 30 de noviembre de 2026; en 2027 sigue en YouTube | Producción S/300; en 2027 entra en los S/1,000 de YouTube | `campana_maestro.mp4` |
| 2 | Convocatoria del concurso #LoQueNadieVe | 9:16 · 15 s | Instagram, Facebook y YouTube Shorts, del 1 de noviembre al 20 de diciembre de 2026 | S/360 de pauta de expectativa | `convocatoria.mp4` |
| 3 | Anuncio para Claudia | 9:16 · 8 s | Instagram, Facebook y YouTube Shorts; en enero alrededor de Jockey Plaza; desde febrero, en Lima Top todo 2027 | S/1,605 · 195 conversaciones de WhatsApp | `anuncio_a.mp4` |
| 4 | Anuncio para Rodrigo | 9:16 · 8 s | Instagram, Facebook y YouTube Shorts; en enero alrededor de Jockey Plaza; desde febrero, en Lima Moderna y cerca de Salaverry todo 2027 | S/1,605 · 195 conversaciones de WhatsApp | `anuncio_b.mp4` |
| 5 | Testimonio de una familia ganadora | 9:16 · 8 s | Instagram, Facebook y YouTube Shorts desde febrero de 2027, en Lima Top y Lima Moderna; se graba el 2 de enero en Jockey Plaza | S/1,840 · 223 conversaciones de WhatsApp | `testimonial.mp4` |

---

## Antes de empezar (vale para los cinco y para la voz del pitch)

### Reglas
- Solo hablan y salen adultos. El niño nunca sale en cámara ni habla (Ley 30021). Siempre se habla de papá y mamá.
- Nunca se dice «combate» ni «previene la anemia»: hablamos de hierro.
- En la pauta pagada se dice «superhéroe», nunca «Hulk».
- El concurso es por votos: ganan los tres trucos con más «me gusta». No es sorteo.
- El hashtag se escribe #LoQueNadieVe y se dice «Lo que nadie ve».
- No se genera un brownie en primer plano: el símbolo es la lonchera vacía y la bolsa kraft.

### Referencias (las de `PROMPTS-campana.md`, sección 1)

| Código | Qué es | Archivo |
|---|---|---|
| F1 | La cocina y la lonchera vacía, 16:9 | `fotogramas/f1_final_maestro.png` |
| F2 | La mamá (Claudia) con el jugo verde, 9:16 | `fotogramas/f2_claudia.png` |
| F3 | El papá (Rodrigo) con las llaves, 9:16 | `fotogramas/f3_rodrigo.png` |
| F4 | La pareja del testimonio en la mesa, 9:16 | `fotogramas/f4_testimonial.png` |
| S1 | El stand con el mural | `public/img/campana/stand.jpg` |
| Bolsa | La bolsa kraft de AndiBite | `public/img/empaque_mockup.jpg` |
| Logo | Logo claro, para fondo oscuro | `public/img/logo_light.png` |

Si te falta alguno de los F, genéralo con su prompt de `PROMPTS-campana.md` antes de empezar.

### ElevenLabs
- Modelo principal: **Eleven v3** (etiquetas de emoción entre corchetes, Stability en Natural). Respaldo: **Multilingual v2** con `<break time="…" />`. Cada video trae los dos textos. Cómo escribir y dirigir la voz: `TONO-de-voz.md`.
- Hay que tener guardadas cuatro voces en español latinoamericano (no de España):
  - **Marca:** mujer de unos 35, cálida y segura.
  - **Claudia:** mujer de 38, íntima y con humor.
  - **Rodrigo:** hombre de 40, rápido y cómplice.
  - **Papá del testimonio:** hombre de unos 38, cálido, que se ríe fácil.
- Ajustes en v2: Stability 50, Similarity 75, Style 10 a 15, Speed 1.0 y Speaker boost activado. Si suena a locutor, baja Style a 5.
- Una sola generación por video: pega el bloque completo, genera 3 tomas y elige una. Los números ya van escritos en palabras.
- Exporta en MP3 a 44.1 kHz. Mide la duración: puede variar medio segundo arriba o abajo.

### Flow (Veo 3)
- Clips de 8 s con 2 variantes por prompt. Usa Quality para la versión final.
- Todos los prompts terminan en «no dialogue, ambient sound only».
- Si sale un niño, un personaje conocido, letras inventadas o un brownie en primer plano, se regenera.

### Pantallas de cierre (Nano Banana): tres imágenes para todo

Se adjuntan siempre `empaque_mockup.jpg` y `logo_light.png`. Revisa cada palabra y las tildes; si una sale mal, pide: «replace the word X with Y».

**E1 · `cierre_16x9.png` (video maestro).** Si ya tienes la pantalla de cierre que está en la presentación (`public/img/campana/cierre.jpg`), úsala y no generes esta. Adjunta también F1.

```
Wide 16:9 end card for a video, 1920x1080, photorealistic with clean graphic typography. Use the attached images as references: the kraft pouch, the AndiBite logo and the kitchen. Scene: the same warm Lima kitchen, light oak table, soft late-morning side light, shallow depth of field. Right half of the frame: the matte kraft stand-up pouch from the reference (keep its label exactly as in the reference; if it cannot be reproduced faithfully, keep it plain kraft) standing next to the closed terracotta lunchbox with a cream lid and a brick-red latch, and a smartphone lying face up showing a simple app screen with a soft red progress ring on a cream background (no readable numbers). Left half: calm, darker cocoa-brown negative space for text. Typography in Spanish, rendered exactly as written, with accents and no spelling mistakes, in a rounded bold sans-serif, all on the left half: a large headline in cream white (#FBF3E8), in two lines: "Dulce para ellos." / "Tranquilidad para ti." Below it, two rounded pill buttons side by side: a solid brick-red pill (#BA4036) with cream text "Pruébalo en el stand" and an outlined cream pill with cream text "Pídelo por WhatsApp". Below the buttons, one small cream line: "Jockey Plaza · desde el 2 de enero". Bottom left: the AndiBite logo from the reference, small, and next to it "#LoQueNadieVe" in warm gold (#E3A33B). No other text, no children, no watermark, no octagon warning labels, no extra logos.
```

**E2 · `cierre_anuncios_9x16.png` (los tres anuncios).** Adjunta también F1.

```
Vertical 9:16 end card for a social video ad, 1080x1920, photorealistic with clean graphic typography. Use the attached images as references: the kraft pouch, the AndiBite logo and the kitchen. Scene: the same warm Lima kitchen, light oak table, soft morning side light, shallow depth of field. Lower half of the frame: the matte kraft stand-up pouch from the reference (keep its label exactly as in the reference; if it cannot be reproduced faithfully, keep it plain kraft) standing next to the closed terracotta lunchbox with a cream lid and a brick-red latch, and a smartphone lying face up showing a simple app screen with a soft red progress ring on a cream background (no readable numbers). Upper half: calm, darker cocoa-brown background so the text reads well. Typography in Spanish, rendered exactly as written, with accents and no spelling mistakes, in a rounded bold sans-serif: at the top, one small line in warm gold (#E3A33B): "El truco que ya no necesita cuento." Below it, a large headline in cream white (#FBF3E8), in two lines: "Dulce para ellos." / "Tranquilidad para ti." Below the headline, two rounded pill buttons stacked with a small gap: a solid brick-red pill (#BA4036) with cream text "Pruébalo en el stand" and an outlined cream pill with cream text "Pídelo por WhatsApp". Under the buttons, one small cream line: "Con hierro de verdad · 1.9 mg en cada brownie". At the very bottom, centered and small: the AndiBite logo from the reference and, under it, "#LoQueNadieVe" in warm gold. No other text, no children, no watermark, no octagon warning labels, no extra logos.
```

**E3 · `cierre_convocatoria_9x16.png` (convocatoria).** Adjunta también S1.

```
Vertical 9:16 end card for a social video, 1080x1920, photorealistic with clean graphic typography. Use the attached images as references: the stand mural, the kraft pouch and the AndiBite logo. Scene: close-up of a kraft-paper mural covered with blank sticky notes in cream, soft gold, pale terracotta and kraft tones; an adult hand presses one cream note in the center; warm daylight; the whole image slightly darkened so the text reads well. All sticky notes stay blank. Typography in Spanish, rendered exactly as written, with accents and no spelling mistakes, in a rounded bold sans-serif: top third, a large headline in cream white (#FBF3E8), in two lines: "Este diciembre" / "sí los aplaudimos." Below it, a solid warm-gold pill (#E3A33B) with cocoa-brown text "#LoQueNadieVe", and under it a cream line: "Etiqueta a @andibite.pe". Then one smaller cream line: "Sin tu hijo en cámara · hasta el 20 de diciembre". Lower third: two small rounded pills side by side, a solid brick-red pill (#BA4036) with cream text "Pruébalo en el stand" and an outlined cream pill with cream text "Pídelo por WhatsApp", and under them a small cream line: "Jockey Plaza · desde el 2 de enero". Bottom: the AndiBite logo from the reference, centered and small. No other text, no children, no watermark, no extra logos.
```

### Montaje base en CapCut (los cinco)
1. Crea el proyecto en el formato del video e importa la voz, la música (la misma en los cinco y en el pitch), los clips y la pantalla de cierre.
2. Pon la voz desde 0:00 en una sola pista y la música debajo al 15 %, con fundido al final. Silencia los clips.
3. Pon los clips en orden, córtalos en los tiempos de la tabla de voz y deja el cierre al final. Nunca aceleres la voz.
4. Activa los subtítulos automáticos en español y corrige «AndiBite», «#LoQueNadieVe» (la voz dice «Lo que nadie ve»), «WhatsApp» y «S/4.16».
5. Agrega el texto en pantalla de la sección 3 de cada video, arriba, para que no choque con los subtítulos.
6. Exporta en 1080p, 30 fps y H.264, con el nombre de la sección 6, en la carpeta `redes/`.

La web usa versiones limpias, sin voz ni texto, de `public/vid/campana_maestro.mp4` y `public/vid/anuncio_a.mp4`. No las reemplaces con estos archivos, que son para redes.

---

## Video 1 · Video maestro «Lo que nadie ve» · 16:9 · 16 s

**Dónde va:** YouTube, Instagram y Facebook desde el 30 de noviembre de 2026. En 2027 corre en YouTube dentro de los S/1,000 de YouTube. La producción cuesta S/300. Presenta la idea y abre el concurso: termina con «Cuéntanos el tuyo. #LoQueNadieVe».

### 1. Voz (voz Marca) · 40 palabras

| Tiempo | Voz | Imagen |
|---|---|---|
| 0:00 a 0:03 | «Rallaste zanahoria dentro de la torta.» | Clip A, la zanahoria |
| 0:03 a 0:07 | «Por el hígado, inventaste un cuento… con final feliz y todo.» | Clip A, el cuento de la noche |
| 0:07 a 0:10 | «Nadie aplaude esos trucos… porque nadie los ve.» | El papá se queda solo y entra el clip B |
| 0:10 a 0:13 | «Por eso hicimos uno que ya no necesita cuento.» | Clip B, la bolsa a la lonchera |
| 0:13 a 0:16 | «Dulce para ellos. Tranquilidad para ti.» | Lonchera vacía y cierre E1 desde 0:14 |

Texto para pegar · **Eleven v3** (opción principal):

```
[warmly] Rallaste zanahoria dentro de la torta. [short pause] Por el hígado, inventaste un cuento... [soft laugh] con final feliz y todo. [pause] Nadie aplaude esos trucos... [long pause] [softly] porque nadie los ve. [pause] Por eso hicimos uno que ya no necesita cuento. [pause] [warmly] Dulce para ellos. Tranquilidad para ti.
```

Texto para pegar · **Multilingual v2** (respaldo):

```
Rallaste zanahoria dentro de la torta. <break time="0.4s" /> Por el hígado, inventaste un cuento... con final feliz y todo. <break time="0.6s" /> Nadie aplaude esos trucos... <break time="0.8s" /> porque nadie los ve. <break time="0.6s" /> Por eso hicimos uno que ya no necesita cuento. <break time="0.6s" /> Dulce para ellos. Tranquilidad para ti.
```

Dirección: como quien le habla a alguien que conoce, con una sonrisa en los dos trucos. La imperfección es «con final feliz y todo», dicho casi riéndose. «Porque nadie los ve» va más lento y más bajo, como un secreto. El slogan, despacio. Si no entra en 16 s, ajusta Speed entre 0.95 y 1.03.

### 2. Clips de Veo: dos

**Clip A · 0:00 a 0:08 · los dos trucos.** Modo «Ingredients to video» · referencias F1, F2 y F3 · se usan los 8 s.

```
Cinematic realistic video, 16:9, 8 seconds, in the same real Lima apartment kitchen as the reference image (light oak, cream tiles, warm window light, a small plant). Two tender, slightly funny home tricks, adults only. Shot 1 (0-3 s): 6:40 a.m., close-up; the hands of the woman from the reference grate a carrot straight into chocolate cake batter and quickly stir it in while she glances over her shoulder. Shot 2 (3-8 s): night, a warm lamp; the man from the reference sits at the light oak table with a small plate of homemade breaded bites and tells a story with big, animated hand gestures to someone off-camera; at the end he sits back alone, the plate still half full, and smiles tiredly to himself. Soft match cut between the shots, slow camera moves, 35mm look, shallow depth of field, soft film grain, palette of cocoa brown, kraft, cream and warm gold. Adults only: no children, no child's face or hands. No raw meat. No on-screen text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient sound only.
```

**Clip B · 0:08 a 0:14 · el truco que ya no necesita cuento.** Modo «Frames to video» · F1 como último cuadro · se usan los primeros 6 s. Si ya tienes el clip B del video publicado, sirve tal cual.

```
Cinematic realistic video, 16:9, 8 seconds, same kitchen, same terracotta lunchbox and same kraft pouch as the reference image, ending exactly on the reference image as the final frame. 0-3 s: early morning, warm side light; an adult hand takes one small sealed kraft pouch and drops it into the open terracotta lunchbox next to a mandarin, closes the brick-red latch and slides the lunchbox into a school backpack, no story, no effort, a calm smile. 3-6 s: 1:30 p.m., warm afternoon light; the same hand opens the terracotta lunchbox on the light oak table: completely empty, only a folded napkin and a few cocoa crumbs; the kraft pouch is set upright beside it. 6-8 s: slow push-in that settles on the final frame and holds still, with calm cocoa-brown space on the left third. Smooth slow dolly, 35mm look, soft film grain, palette of cocoa brown, kraft, cream and warm gold. Adults only: no children. No on-screen text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient sound only.
```

### 3. Texto en pantalla
- 0:14 a 0:16: «Cuéntanos el tuyo.», en dorado y pequeño, sobre el titular del cierre E1.
- Fuera de eso, solo subtítulos.

### 4. Cierre
E1 `cierre_16x9.png`, de 0:14 a 0:16.

### 5. Montaje
1. Proyecto 16:9 con el montaje base.
2. Corta en 0:08 (fin del clip A) y en 0:14 (clip B recortado a sus primeros 6 s).
3. Pon E1 de 0:14 a 0:16 con el texto «Cuéntanos el tuyo.».

### 6. Archivo final
`redes/campana_maestro.mp4` (1920 × 1080).

---

## Video 2 · Convocatoria del concurso #LoQueNadieVe · 9:16 · 15 s

**Dónde va:** Instagram, Facebook y YouTube Shorts, del 1 de noviembre al 20 de diciembre de 2026, con los S/360 de pauta de expectativa (los otros S/240 de los S/600 son los premios). Es el primero que se produce, porque el concurso ya empezó.

### 1. Voz (voz Marca) · 45 palabras

| Tiempo | Voz | Imagen |
|---|---|---|
| 0:00 a 0:04 | «¿Zanahoria en la torta? ¿Sopa de dinosaurio? A ver… ¿cuál es tu truco?» | Clip A, los trucos |
| 0:04 a 0:07 | «Nadie los aplaude. Este diciembre, nosotros sí.» | Clip A, papá y mamá aplauden |
| 0:07 a 0:10 | «Cuéntanoslo con el hashtag… Lo que nadie ve.» | Clip B, el mural |
| 0:10 a 0:15 | «Los tres más votados abren nuestro mural en Jockey Plaza… y se llevan un mes de lonchera.» | Clip B y cierre E3 desde 0:12 |

Texto para pegar · **Eleven v3** (opción principal):

```
[warmly] ¿Zanahoria en la torta? ¿Sopa de dinosaurio? [short pause] A ver... ¿cuál es tu truco? [pause] Nadie los aplaude. [short pause] Este diciembre, nosotros SÍ. [pause] Cuéntanoslo con el hashtag... Lo que nadie ve. [short pause] [warmly] Los tres más votados abren nuestro mural en Jockey Plaza... y se llevan un mes de lonchera.
```

Texto para pegar · **Multilingual v2** (respaldo):

```
¿Zanahoria en la torta? ¿Sopa de dinosaurio? <break time="0.4s" /> A ver... ¿cuál es tu truco? <break time="0.5s" /> Nadie los aplaude. <break time="0.4s" /> Este diciembre, nosotros sí. <break time="0.5s" /> Cuéntanoslo con el hashtag... Lo que nadie ve. <break time="0.4s" /> Los tres más votados abren nuestro mural en Jockey Plaza... y se llevan un mes de lonchera.
```

Dirección: una amiga que te invita, no un anuncio de premios. Las dos primeras preguntas, rápidas y con sonrisa; la imperfección es «A ver…», y «¿cuál es tu truco?» va más lenta y directa. «Nosotros sí» suena a aplauso cariñoso, sin gritar. El mural y la lonchera se cuentan bajito y cómplice, como un dato que le pasas a una amiga, no como un premio gordo. Si pasa de 15 s, usa Speed 1.03.

### 2. Clips de Veo: dos

**Clip A · 0:00 a 0:07 · los trucos y el aplauso.** Modo «Ingredients to video» · referencias F1, F2 y F3 · se usan los primeros 7 s.

```
Vertical 9:16 realistic video, 8 seconds, warm and playful, in the same real Lima apartment kitchen as the reference image (light oak, cream tiles, warm morning light). Four quick moments, adults only. 0-1.5 s: a woman's hands grate a carrot into chocolate cake batter. 1.5-3 s: a man's hand walks a small generic toy dinosaur along the rim of a bowl of soup with dinosaur-shaped pasta. 3-4.5 s: a woman's hand raises a glass of green juice with a tiny paper superhero mask taped to it (generic, not any known character). 4.5-8 s: the man and the woman from the references stand side by side behind the counter, framed from the chest down, and applaud warmly toward the camera; the terracotta lunchbox with the brick-red latch sits on the counter in front of them. The top 30 percent of every frame stays calm for a headline. Quick soft cuts, handheld but steady, palette of cocoa brown, kraft, cream, brick red and warm gold. Adults only: no children, no child's face or hands. No on-screen text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient sound only.
```

**Clip B · 0:07 a 0:12 · el mural se llena.** Modo «Ingredients to video» · referencia S1 · se usan los primeros 5 s.

```
Vertical 9:16 realistic video, 8 seconds, warm daylight. Slow push-in on the kraft-paper mural from the reference image, covered with blank sticky notes in cream, soft gold, pale terracotta and kraft tones. 0-4 s: an adult hand sticks one more cream note in the center. 4-8 s: a second adult hand adds another note next to it, then a third; the camera settles, the center of the frame slightly out of focus and calm for a text card. Celebratory and warm. All notes stay blank. Adults only: no children. No on-screen text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient sound only.
```

### 3. Texto en pantalla
- 0:00 a 0:04: «¿Cuál es tu truco?», arriba y grande.
- 0:10 a 0:12: «Los 3 más votados: un mes de lonchera».

### 4. Cierre
E3 `cierre_convocatoria_9x16.png`, de 0:12 a 0:15.

### 5. Montaje
1. Proyecto 9:16 con el montaje base.
2. Corta en 0:07 (clip A) y en 0:12 (clip B).
3. Pon E3 de 0:12 a 0:15.

### 6. Archivo final
`redes/convocatoria.mp4` (1080 × 1920).

---

## Video 3 · Anuncio para Claudia · 9:16 · 8 s

**Dónde va:** Instagram, Facebook y YouTube Shorts. En enero, alrededor de Jockey Plaza; desde febrero, en Lima Top todo 2027. S/1,605 de pauta y la meta de 195 conversaciones de WhatsApp.

### 1. Voz (voz Claudia) · 23 palabras

| Tiempo | Voz | Imagen |
|---|---|---|
| 0:00 a 0:03 | «Confieso: el jugo verde nunca le dio superpoderes.» | Ella, el vaso y la mascarita |
| 0:03 a 0:05 | «El vaso volvía… lleno.» | Se lo toma ella |
| 0:05 a 0:08 | «Ahora su hierro va en un brownie. Y me lo pide.» | La bolsa a la lonchera y cierre E2 desde 0:06 |

Texto para pegar · **Eleven v3** (opción principal):

```
[softly] Confieso: [short pause] el jugo verde nunca le dio superpoderes. [sighs] El vaso volvía... lleno. [pause] Ahora su hierro va en un brownie. [short pause] [warmly] Y me lo PIDE.
```

Texto para pegar · **Multilingual v2** (respaldo):

```
Confieso: <break time="0.4s" /> el jugo verde nunca le dio superpoderes. <break time="0.4s" /> El vaso volvía... lleno. <break time="0.5s" /> Ahora su hierro va en un brownie. <break time="0.4s" /> Y me lo pide.
```

Dirección: Claudia habla en primera persona, íntima, un poco cansada y con humor seco, como quien se confiesa con una amiga. La imperfección es «El vaso volvía… lleno», con un suspiro antes de la última palabra. «Y me lo pide» lleva sorpresa y alivio, sin subir la voz.

### 2. Clip de Veo: uno
Modo «Frames to video» · F2 como primer cuadro · se usan los primeros 6 s.

```
Vertical 9:16 realistic video, 8 seconds, starting exactly on the reference image as the first frame: same woman, same kitchen, same terracotta lunchbox and same kraft pouch. Soft morning light, slight handheld feel. 0-2.5 s: she looks at the glass of green juice with the tiny paper superhero mask, gives a small resigned laugh and peels off the mask. 2.5-4 s: she drinks the juice herself in one go, with a playful wince. 4-8 s: she takes one small sealed kraft pouch from the stand-up kraft bag, drops it into the open terracotta lunchbox next to a mandarin and closes the brick-red latch with a calm, confident click; slow push-in on the closed lunchbox and the bag. The bottom half of the frame stays calm and darker. 35mm look, shallow depth of field, soft film grain, palette of cocoa brown, kraft, cream and warm gold. Adults only: no children. She never speaks to camera. No close-up of any brownie. No on-screen text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient sound only.
```

### 3. Texto en pantalla
Solo subtítulos. La cifra de hierro y los dos llamados van en el cierre.

### 4. Cierre
E2 `cierre_anuncios_9x16.png`, de 0:06 a 0:08.

### 5. Montaje
1. Proyecto 9:16 con el montaje base.
2. Usa el clip de 0:00 a 0:06 y pon E2 de 0:06 a 0:08.

### 6. Archivo final
`redes/anuncio_a.mp4` (1080 × 1920).

---

## Video 4 · Anuncio para Rodrigo · 9:16 · 8 s

**Dónde va:** Instagram, Facebook y YouTube Shorts. En enero, alrededor de Jockey Plaza; desde febrero, en Lima Moderna y cerca de Salaverry todo 2027. S/1,605 de pauta y la meta de 195 conversaciones de WhatsApp.

### 1. Voz (voz Rodrigo) · 24 palabras

| Tiempo | Voz | Imagen |
|---|---|---|
| 0:00 a 0:03 | «Mi truco: el que se lo acaba primero elige la música del carro.» | 6:05 a. m., las llaves |
| 0:03 a 0:05 | «¿La menestra? Ni así.» | La menestra intacta |
| 0:05 a 0:08 | «Ahora, un brownie con hierro. Sin carrera.» | La bolsa a la lonchera y cierre E2 desde 0:06 |

Texto para pegar · **Eleven v3** (opción principal):

```
[excited] Mi truco: el que se lo acaba primero elige la música del carro. [short pause] ¿La menestra? [soft laugh] Ni así. [pause] Ahora, brownie con hierro. [short pause] [softly] Sin carrera.
```

Texto para pegar · **Multilingual v2** (respaldo):

```
Mi truco: el que se lo acaba primero elige la música del carro. <break time="0.4s" /> ¿La menestra? Ni así. <break time="0.5s" /> Ahora, brownie con hierro. <break time="0.4s" /> Sin carrera.
```

Dirección: Rodrigo habla en primera persona, rápido y cómplice, como quien lo cuenta en el semáforo. La imperfección es la risita de derrota antes de «Ni así, pues». «Sin carrera» es el remate: más lento y más bajo.

### 2. Clip de Veo: uno
Modo «Frames to video» · F3 como primer cuadro · se usan los primeros 6 s.

```
Vertical 9:16 realistic video, 8 seconds, starting exactly on the reference image as the first frame: same man, same kitchen, same terracotta lunchbox and same open kraft box of twelve pouches. 6:05 a.m., blue-hour window light and a warm pendant lamp. 0-3 s: he jingles the car keys toward someone off-camera like starting a race, with a playful grin. 3-4.5 s: he glances at a small container of untouched beans on the counter and shrugs with a tender, defeated smile. 4.5-8 s: without hesitating, he takes one small sealed pouch from the kraft box, drops it into the open terracotta lunchbox and closes the brick-red latch with one hand, then grabs the two school backpacks from the chair. The bottom half of the frame stays calm for text. Documentary handheld feel, 35mm look, soft film grain, palette of cocoa brown, kraft, cream and warm gold. Adults only: no children on camera. He never speaks to camera. No price tags. No on-screen text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient sound only.
```

### 3. Texto en pantalla
- 0:03 a 0:06: «Pack de 12 por WhatsApp: S/4.16 cada uno».

### 4. Cierre
E2 `cierre_anuncios_9x16.png`, de 0:06 a 0:08 (la misma imagen del anuncio de Claudia).

### 5. Montaje
1. Proyecto 9:16 con el montaje base.
2. Usa el clip de 0:00 a 0:06, agrega el texto del precio y pon E2 de 0:06 a 0:08.

### 6. Archivo final
`redes/anuncio_b.mp4` (1080 × 1920).

---

## Video 5 · Testimonio de una familia ganadora · 9:16 · 8 s

**Dónde va:** Instagram, Facebook y YouTube Shorts desde febrero de 2027, en Lima Top y Lima Moderna. S/1,840 de pauta y la meta de 223 conversaciones de WhatsApp.

**Importante:** en la pauta va el video real de una de las tres familias ganadoras, grabado con celular el 2 de enero en Jockey Plaza, con su voz, su truco y su permiso firmado. La versión con Veo y ElevenLabs de abajo es solo la referencia para la presentación y nunca se publica como testimonio.

### 1. Voz (voz Papá del testimonio, solo para la referencia) · 22 palabras

| Tiempo | Voz | Imagen |
|---|---|---|
| 0:00 a 0:04 | «Mi truco era… era decirle que el hígado era carne de dinosaurio.» | Él lo confiesa y ella se ríe |
| 0:04 a 0:08 | «Ahora le mando su AndiBite… y no le cuento nada.» | La lonchera vacía, la bolsa y el cierre E2 desde 0:06 |

Texto para pegar · **Eleven v3** (opción principal):

```
Mi truco era... [soft laugh] era decirle que el hígado era carne de dinosaurio. [pause] [warmly] Ahora le mando su AndiBite... [short pause] y no le cuento nada.
```

Texto para pegar · **Multilingual v2** (respaldo):

```
Mi truco era... era decirle que el hígado era carne de dinosaurio. <break time="0.6s" /> Ahora le mando su AndiBite... <break time="0.4s" /> y no le cuento nada.
```

Dirección: un papá contando algo que le pasó, no un locutor. Se ríe al recordar el truco y por eso se traba en «era… era»: esa es la imperfección. La segunda frase, tranquila y con una sonrisa cómplice. En v2 la risa no se etiqueta: si la toma sale seria, usa v3 o sube Style a 15.

### 2. Clip de Veo: uno (referencia)
Modo «Frames to video» · F4 como primer cuadro · se usan los primeros 6 s.

```
Vertical 9:16 authentic smartphone-style video, 8 seconds, starting exactly on the reference image as the first frame: same couple, same table, same terracotta lunchbox and same kraft pouch. Phone propped on the table, slight wobble, natural afternoon window light. 0-4 s: the father, turned mostly toward the mother, gestures as if confessing an old trick; she bursts out laughing and covers her face for a second; no close-up of his mouth. 4-6 s: she opens the terracotta lunchbox and tilts it toward the camera: completely empty, only a folded napkin and a few cocoa crumbs. 6-8 s: he lifts the matte kraft pouch and they smile at each other. The lower half of the frame stays calm. Realistic skin and textures, shallow depth of field, palette of kraft, cream, cocoa and warm gold. A child's backpack on an empty chair at the edge, no children. No on-screen text, no letters, no logos, no subtitles. No dialogue, no voices, no music: ambient sound only.
```

### 2b. El video real (2 de enero, en Jockey Plaza)
- Celular en vertical, sobre el trípode del stand. Papá y mamá frente al mural; el niño no sale.
- Se les pide una sola cosa: «Cuéntennos su truco y qué hacen ahora». Que lo digan con sus palabras; si su truco es otro, se usa el suyo.
- Se graban 3 tomas y se elige la mejor. Se monta igual que la referencia: el video de 0:00 a 0:06 y E2 de 0:06 a 0:08. Solo en la versión real va el texto «Familia ganadora de #LoQueNadieVe».

### 3. Texto en pantalla
Solo subtítulos.

### 4. Cierre
E2 `cierre_anuncios_9x16.png`, de 0:06 a 0:08.

### 5. Montaje
1. Proyecto 9:16 con el montaje base.
2. Usa el clip de 0:00 a 0:06 y pon E2 de 0:06 a 0:08.

### 6. Archivo final
`redes/testimonial.mp4` (1080 × 1920). La referencia de la presentación se guarda como `redes/testimonial_referencia.mp4`.

---

## Historias de diciembre (sin video nuevo)
Se vuelven a publicar los trucos que llegan, con el texto «Este diciembre sí los aplaudimos» y el pedido de votos. El 2 de enero, la historia de los ganadores puede llevar una voz corta (voz Marca): «Estos son los tres trucos que más aplaudieron. Desde hoy, están en nuestro mural de Jockey Plaza.»

---

## Orden de trabajo (todo en una sesión)

**Lo que hay que generar:**

| Herramienta | Cantidad | Qué |
|---|---|---|
| Nano Banana | 3 imágenes | E1 `cierre_16x9.png`, E2 `cierre_anuncios_9x16.png`, E3 `cierre_convocatoria_9x16.png` (y los F1 a F4 solo si te faltan) |
| ElevenLabs | 5 voces guardadas (la de Carlos, para el pitch), 6 pistas | `pitch_voz.mp3`, `maestro_voz.mp3`, `convocatoria_voz.mp3`, `anuncio_a_voz.mp3`, `anuncio_b_voz.mp3`, `testimonial_voz.mp3` |
| Flow (Veo 3) | 7 clips (6 si reusas el clip B del maestro) | maestro 2 (`maestro_a`, `maestro_b`); convocatoria 2 (`conv_a`, `conv_b`); `anuncio_a_clip`, `anuncio_b_clip`, `testimonial_clip` |
| CapCut | 1 música, 6 proyectos, 7 archivos | Pitch en 16:9 y 9:16 más los cinco videos de campaña |
| ElevenLabs (avatares, HeyGen Avatar IV) | 1 video de 60 s o 3 clips cortos (12 s en total) | Carlos a cámara en tres tramos (equipo, «nuestra respuesta», slogan); el resto del pitch es el video maestro y fotos reales; ver `PITCH-video.md`, secciones 3 y 4 |

**Checklist en orden:**
1. [ ] Junta las referencias en una carpeta: F1, F2, F3, F4, S1, `empaque_mockup.jpg` y `logo_light.png`.
2. [ ] Nano Banana: genera E1, E2 y E3, y revisa cada palabra con sus tildes.
3. [ ] ElevenLabs: deja guardadas las cinco voces (Marca, Claudia, Rodrigo, Papá del testimonio y Carlos, clonada de su propia voz).
4. [ ] ElevenLabs: genera las 6 pistas, tres tomas cada una, en este orden: convocatoria, maestro, anuncio A, anuncio B, testimonio y pitch. Mide cada una con cronómetro.
5. [ ] Flow: genera los 7 clips con 2 variantes cada uno. El pitch no lleva clips nuevos de Veo: usa el video maestro, fotos que ya existen y el avatar de Carlos en tres tramos (`PITCH-video.md`, secciones 3 y 4). Elige la mejor y descárgala con su nombre.
6. [ ] Revisa cada clip: ¿sale un niño, un personaje conocido, letras inventadas o un brownie en primer plano? Si pasa, se regenera.
7. [ ] CapCut: elige una sola música sin letra para todo.
8. [ ] CapCut: monta la convocatoria primero (el concurso empezó el 1 de noviembre), después el maestro (sale el 30 de noviembre), el pitch y los tres anuncios (salen en enero).
9. [ ] Exporta los 7 archivos a `redes/`: `convocatoria.mp4`, `campana_maestro.mp4`, `anuncio_a.mp4`, `anuncio_b.mp4`, `testimonial_referencia.mp4`, `pitch_60s.mp4` y `pitch_60s_vertical.mp4`.
10. [ ] Queda para el 2 de enero: grabar el testimonio real en Jockey Plaza y exportarlo como `testimonial.mp4`.
