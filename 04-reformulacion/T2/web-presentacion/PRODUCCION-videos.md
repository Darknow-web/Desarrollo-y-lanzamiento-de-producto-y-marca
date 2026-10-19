# Producción de los videos, uno por uno

Un documento por video, en orden de trabajo: (1) qué pegar en Veo 3 (Google Flow) clip por clip, (2) cómo unir los clips, (3) qué texto va en pantalla, (4) el guion de voz para ElevenLabs de ese mismo video, bloque por bloque, y (5) el nombre del archivo final. Los prompts van en inglés porque así responde mejor Veo; la voz y los textos van en español.

Imágenes de referencia que se usan como «ingredientes» o primer cuadro (están en `PROMPTS-campana.md`, sección 1): F1 (cocina y lonchera vacía, 16:9), F2 (Claudia con el jugo verde, 9:16), F3 (Rodrigo con las llaves, 9:16), F4 (la familia en la mesa, 9:16), S1 (el stand con el mural) y `empaque_mockup.jpg` (la bolsa kraft).

Reglas para todos: en Flow, 8 segundos por clip y «sin diálogo, solo sonido ambiente»; adultos en cámara, el niño nunca; en la pauta pagada se dice «superhéroe», no «Hulk»; nunca «combate» ni «previene la anemia»; el hashtag se pronuncia «Lo que nadie ve». Los clips se unen con el comando de concat de `PROMPTS-campana.md` (línea 29) o directamente en CapCut.

Voces de ElevenLabs (Multilingual v2; Stability 50, Similarity 75, Style 15, Speed 1.0): **Marca** (mujer de unos 35, cálida, segura), **Claudia** (mujer de 38, íntima, con humor), **Rodrigo** (hombre de 40, rápido, cómplice). Cada bloque de voz se genera como archivo aparte.

---

## Video 1 · V0 · Video maestro «Lo que nadie ve» · 16:9 · 16 s

**Dónde va:** YouTube, Instagram y Facebook desde el 30 de noviembre; portada del capítulo de campaña en la presentación. Archivo final: `campana_maestro.mp4` (1920 × 1080).

### 1. Veo 3: dos clips

**Clip A (0 a 8 s), los trucos.** Modo «Ingredients to video», referencias F1 y `empaque_mockup.jpg`:

```
Cinematic realistic video, 16:9, 8 seconds, the same real Lima apartment kitchen as the reference image (light oak, cream tiles, warm window light), no on-screen text, no logos. A gentle montage of four 2-second shots of parents' home tricks, each one tender and a little funny, adults only, the child always off-camera. Shot 1 (0-2 s): close-up, a mother's hands grate a carrot straight into chocolate cake batter and quickly stir it in, glancing over her shoulder. Shot 2 (2-4 s): a father's hand places a small toy dinosaur on the rim of a bowl of soup with dinosaur-shaped pasta and slides it across the table toward an empty chair. Shot 3 (4-6 s): a mother tapes a tiny green paper superhero mask onto a glass of green juice (generic, no known character) and raises it proudly. Shot 4 (6-8 s): night, warm lamp; a father at the dinner table tells a story with big animated hand gestures to someone off-camera, a small plate of homemade breaded bites in front of him. Soft match cuts, slow camera moves, 35mm look, shallow depth of field, film grain, palette of cocoa brown, kraft, cream and warm gold. No children visible, no text, no letters, no logos, no raw meat. No dialogue, ambient kitchen sound only.
```

**Clip B (8 a 16 s), el truco que ya no necesita cuento.** Modo «Frames to video», F1 como último cuadro:

```
Cinematic realistic video, 16:9, 8 seconds, same kitchen, same terracotta lunchbox and same kraft pouch, no on-screen text, no logos. 0-3 s: early morning, warm side light; an adult hand takes one small sealed kraft pouch and drops it into the open terracotta lunchbox next to a mandarin, closes the brick-red latch and slides the lunchbox into a school backpack, no story, no effort, a calm smile. 3-6 s: 1:30 p.m., warm afternoon light; the same hand opens the terracotta lunchbox on the light oak table: completely empty, only a folded napkin and a few cocoa crumbs; the kraft pouch is set upright beside it. 6-8 s: slow push-in that settles exactly on the final frame and holds still, with calm cocoa-brown negative space on the left third for a headline added later. Smooth slow dolly, 35mm look, film grain, palette cocoa, kraft, cream, warm gold. Adults only, no children, no text, no letters, no fast cuts. No dialogue, ambient sound only.
```

Si el clip A sale confuso con cuatro tomas, genera cada truco como clip de 8 s por separado, corta 2 s de cada uno y únelos.

### 2. Unir

Clip A + clip B = 16 s. Los últimos 2 s (14 a 16) son el cartón final sobre el último cuadro congelado: «Cuéntanos el tuyo. #LoQueNadieVe», el logo y «Dulce para ellos. Tranquilidad para ti.».

### 3. Texto en pantalla

| Segundos | Texto |
|---|---|
| 8 a 13 | «Nadie aplaude esos trucos, porque nadie los ve.» |
| 13 a 14 | «AndiBite. El truco que ya no necesita cuento.» |
| 14 a 16 (cartón final) | «Cuéntanos el tuyo. #LoQueNadieVe» · logo · «Dulce para ellos. Tranquilidad para ti.» |

### 4. Voz (voz Marca)

| Segundos | Archivo | Texto para ElevenLabs |
|---|---|---|
| 0 a 8 | `V0-a.mp3` | «Rallaste zanahoria dentro de la torta. Le pusiste nombre de dinosaurio a la sopa. El jugo verde fue de superhéroe toda una semana.» |
| 8 a 14 | `V0-b.mp3` | «Nadie aplaude esos trucos, porque nadie los ve. Por eso hicimos uno que ya no necesita cuento.» |
| 14 a 16 | `V0-c.mp3` | «AndiBite. Dulce para ellos. Tranquilidad para ti.» |

Dirección: pausado, como quien le habla a alguien que conoce; pausa clara después de «nadie los ve». La firma cae sobre el cartón final; después, solo música.

---

## Video 2 · V4 · Convocatoria del concurso · 9:16 · 15 s

**Dónde va:** Instagram, Facebook y YouTube Shorts desde el 1 de noviembre, con los S/360 de pauta de expectativa. Archivo final: `convocatoria.mp4` (1080 × 1920).

### 1. Veo 3: dos clips

**Clip A (0 a 8 s), los trucos.** «Ingredients to video», referencias F1 y F2:

```
Vertical 9:16 video, 8 seconds, warm photorealistic style, handheld but steady. Fast montage of four tiny kitchen moments in Lima homes at 7 a.m., two seconds each: an adult hand grating carrot into cake batter; a soup bowl being pushed toward the camera while an adult hand makes a dinosaur shadow puppet on the wall; a green juice in a glass with a tiny paper superhero mask taped to it; a terracotta lunchbox being closed. No children on screen, no faces of minors, only adult hands. Palette: cocoa brown, kraft, cream, brick red, warm gold. Upbeat, playful, affectionate. The top 30 percent of each frame stays clean for a headline. No readable text, no logos. No dialogue, ambient sound only.
```

**Clip B (8 a 15 s), la invitación.** «Ingredients to video», referencia S1 (el mural):

```
Vertical 9:16 video, 7 seconds, warm photorealistic style. Slow push-in on a kraft-paper mural covered with blank sticky notes in cream, gold and terracotta; an adult hand sticks one more note in the center and the camera settles on it, slightly out of focus, leaving the center of the frame clean for a text card. Warm daylight, calm, celebratory. No readable text, no letters, no logos, no children. No dialogue, ambient sound only.
```

### 2. Unir

Clip A (8 s) + clip B (recortado a 7 s) = 15 s. Cierre sobre el último cuadro: logo y «Este diciembre sí los aplaudimos.»

### 3. Texto en pantalla

| Segundos | Texto |
|---|---|
| 0 a 8 | «¿Cuál es tu truco?» (arriba, grande) |
| 8 a 15 | «Cuéntanoslo con #LoQueNadieVe y etiquétanos. Los 3 más votados abren nuestro mural en Jockey Plaza y ganan un mes de lonchera.» |
| Cierre | logo · «Este diciembre sí los aplaudimos.» · @andibite.pe |

### 4. Voz (voz Marca)

| Segundos | Archivo | Texto para ElevenLabs |
|---|---|---|
| 0 a 8 | `V4-a.mp3` | «¿Zanahoria en la torta? ¿Sopa de dinosaurio? ¿Jugo de superhéroe? Todos tenemos un truco para que coman bien. ¿Cuál es el tuyo?» |
| 8 a 15 | `V4-b.mp3` | «Cuéntanoslo con el hashtag Lo que nadie ve y etiquétanos. Los tres más votados abren nuestro mural en Jockey Plaza y ganan un mes de lonchera.» |

Dirección: las tres preguntas rápidas y con sonrisa; «¿Cuál es el tuyo?» lento y directo. El segundo bloque es una invitación a participar: tono de amiga que te convence.

---

## Video 3 · V1 · Anuncio para Claudia · 9:16 · 8 s

**Dónde va:** Instagram, Facebook y YouTube Shorts; enero alrededor de Jockey Plaza y desde febrero en Lima Top todo 2027. S/1,605 de pauta, meta 195 conversaciones. Archivo final: `anuncio_a.mp4`.

### 1. Veo 3: un clip

Modo «Frames to video», F2 como primer cuadro:

```
Vertical 9:16 realistic video, 8 seconds, same kitchen, same terracotta lunchbox and same kraft pouch as the first frame, no on-screen text. 0-3 s: the mother looks at the glass of green juice with the tiny paper superhero mask, gives a small resigned laugh, peels off the mask and drinks the juice herself; soft morning light, slight handheld feel. 3-6 s: she takes one small sealed kraft pouch from the stand-up kraft bag, drops it into the open terracotta lunchbox next to a mandarin and closes the brick-red latch with a calm, confident gesture. 6-8 s: she turns her smartphone over and glances at the softly glowing screen (no readable content) with a quiet, satisfied smile; slow push-in and hold on the closed lunchbox and the kraft pouch; the bottom half of the frame stays calm and darker for text. 35mm look, shallow depth of field, film grain, palette cocoa, kraft, cream, warm gold. Adults only, no children, no letters, no logos. She does not speak to camera; no dialogue, ambient sound only.
```

### 2. Unir

Un solo clip de 8 s y, pegada al final, la **pantalla de cierre** (imagen fija de 2 a 3 s generada en Nano Banana, abajo). Así no hay que animar texto en CapCut: clip de Veo + imagen + voz.

### 2b. Nano Banana: pantalla de cierre de V1 (9:16)

Sube como referencias `empaque_mockup.jpg` (la bolsa) y el logo de AndiBite, y pega:

```
Vertical 9:16 end card for a social video ad, 1080x1920, photorealistic with clean graphic typography. Scene: the same warm Lima kitchen, light oak table, soft morning side light, shallow depth of field. On the table, centered in the lower half: the matte kraft stand-up pouch from the reference image (keep its label exactly as in the reference) standing next to the closed terracotta lunchbox with the brick-red latch, and a smartphone lying face up showing a simple app screen with a soft red progress ring on a cream background (no readable numbers). Background slightly darkened so text reads well. Typography, in Spanish, rendered exactly and without spelling mistakes, in a rounded bold sans-serif in cream white (#FBF3E8): top third, large headline in two lines: "El truco que ya no" / "necesita cuento." Below it, smaller, one line: "Dulce para ellos. Tranquilidad para ti." Middle of the frame, two rounded pill buttons side by side: a solid brick-red pill (#B33A2B) with cream text "Pruébalo en el stand" and an outlined cream pill with cream text "Pídelo por WhatsApp". Bottom: the AndiBite logo from the reference, centered, small, and under it the hashtag "#LoQueNadieVe" in warm gold (#E3A33B). Palette: cocoa brown, kraft, cream, brick red, warm gold. No other text, no children, no watermark, no octagon warning labels, no extra logos.
```

Revisa que el texto salga sin errores (Nano Banana a veces cambia una letra); si falla, genera de nuevo o corrige esa palabra con la edición por texto («replace the word X with Y»). Esta misma pantalla sirve para V2 y V3 cambiando solo nada: el cierre es igual en los tres anuncios. Para V4 (convocatoria) cambia el titular por "Este diciembre" / "sí los aplaudimos." y los botones por un solo texto: "Cuéntanos tu truco con #LoQueNadieVe y etiquétanos".

### 3. Texto en pantalla

| Segundos | Texto |
|---|---|
| 0 a 3 | «Confieso: el jugo verde nunca le dio superpoderes.» |
| 3 a 6 | «Leí etiquetas, licué espinaca y le inventé un superhéroe. El vaso volvía lleno.» |
| 6 a 8 | «Ahora su hierro va escondido en un mini brownie que me pide, y en la app veo cuánto llevó hoy.» + botones |

### 4. Voz (voz Claudia)

| Segundos | Archivo | Texto para ElevenLabs |
|---|---|---|
| 0 a 3 | `V1-a.mp3` | «Confieso: el jugo verde nunca le dio superpoderes.» |
| 3 a 6 | `V1-b.mp3` | «El vaso volvía lleno.» |
| 6 a 8 | `V1-c.mp3` | «Ahora su hierro va escondido en un mini brownie que me pide.» |

Dirección: confesión con humor, en primera persona; pausa breve después de «Confieso». Lo que no entra en la voz va en el texto de pantalla.

---

## Video 4 · V2 · Anuncio para Rodrigo · 9:16 · 8 s

**Dónde va:** Instagram, Facebook y YouTube Shorts; enero alrededor de Jockey Plaza y desde febrero en Lima Moderna y cerca de Salaverry. S/1,605 de pauta, meta 195 conversaciones. Archivo final: `anuncio_b.mp4`.

### 1. Veo 3: un clip

Modo «Frames to video», F3 como primer cuadro:

```
Vertical 9:16 realistic video, 8 seconds, same kitchen, same terracotta lunchbox and same kraft pouch as the first frame, no on-screen text. 0-3 s: 6:05 a.m., blue-hour window light and a warm pendant lamp; the father jingles the car keys toward someone off-camera like starting a race, then glances at a small container of untouched beans on the counter and shrugs with a tender, defeated smile. 3-6 s: without hesitating he takes one small sealed pouch from the open kraft box of twelve, drops it into the open terracotta lunchbox and closes the latch with one hand: the morning solved. 6-8 s: he grabs the two school backpacks from the chair and the keys, walks toward the door; hold on the closed lunchbox on the counter in warm light; bottom half of the frame calm for text. Documentary handheld feel, 35mm, film grain, palette cocoa, kraft, cream, warm gold. Adults only, no children on camera, no letters, no logos, no price tags. He does not speak to camera; no dialogue, ambient sound only.
```

### 2. Unir

Un solo clip de 8 s más la misma pantalla de cierre de V1 (sección 2b del video 3), 2 a 3 s.

### 3. Texto en pantalla

| Segundos | Texto |
|---|---|
| 0 a 3 | «Mi truco: el que se lo acaba primero elige la música del carro.» |
| 3 a 6 | «Con el pan funcionaba. Con la menestra de la lonchera, ni con su canción favorita.» |
| 6 a 8 | «Un mini brownie con hierro que se come sin carrera: la semana entera en un pack de 12 por WhatsApp.» + botones |

### 4. Voz (voz Rodrigo)

| Segundos | Archivo | Texto para ElevenLabs |
|---|---|---|
| 0 a 3 | `V2-a.mp3` | «Mi truco: el que se lo acaba primero elige la música del carro.» |
| 3 a 6 | `V2-b.mp3` | «Con la menestra, ni con su canción favorita.» |
| 6 a 8 | `V2-c.mp3` | «Ahora lleva un mini brownie con hierro. Sin carrera.» |

Dirección: apurado pero divertido, como contándolo en el semáforo; «Sin carrera» más lento, es el remate.

---

## Video 5 · V3 · Testimonio de una familia real · 9:16 · 8 s

**Dónde va:** Instagram, Facebook y YouTube Shorts desde febrero, en Lima Top y Lima Moderna. S/1,840 de pauta, meta 223 conversaciones. En la campaña real se graba con celular el 2 de enero en Jockey Plaza con una de las tres familias ganadoras y con su propia voz. Esta versión con Veo es la referencia para la presentación. Archivo final: `testimonial.mp4`.

### 1. Veo 3: un clip

Modo «Frames to video», F4 como primer cuadro:

```
Vertical 9:16 authentic smartphone-style video, 8 seconds, phone propped on the table, slight handheld wobble, as if a real family recorded their own testimonial, no on-screen text. 0-3 s: the mother and father sit side by side at the light oak table and laugh while she talks to the camera, confessing an old trick; he covers his face for a second, amused. 3-6 s: she opens the terracotta lunchbox and tilts it toward the camera: completely empty, only a folded napkin and a few cocoa crumbs; he nods. 6-8 s: the father lifts the matte kraft pouch next to his smartphone, the screen softly glowing with no readable content, and both smile at each other; hold, the lower half of the frame calm for text. Natural afternoon window light, realistic skin and textures, shallow depth of field, palette kraft, cream, cocoa, warm gold. A child's backpack on an empty chair at the edge, no children, no letters, no logos. Keep her mouth movements subtle and mostly turned toward him, not a close-up; no dialogue, ambient sound only.
```

### 2. Unir

Un solo clip de 8 s más la misma pantalla de cierre de V1 (sección 2b del video 3), 2 a 3 s.

### 3. Texto en pantalla

| Segundos | Texto |
|---|---|
| 0 a 3 | «Mi truco era decirle que el hígado era carne de dinosaurio.» |
| 3 a 6 | «Ahora no le cuento nada: le mando su brownie y la lonchera vuelve vacía.» |
| 6 a 8 | «Lo que antes no veía, su hierro de cada día, ahora lo veo en la app.» + botones |

### 4. Voz (voz real de la mamá o el papá ganador; para la muestra, una cuarta voz de ElevenLabs distinta de Claudia y Rodrigo)

| Segundos | Archivo | Texto |
|---|---|---|
| 0 a 3 | `V3-a.mp3` | «Mi truco era decirle que el hígado era carne de dinosaurio.» |
| 3 a 6 | `V3-b.mp3` | «Ahora no le cuento nada: le mando su brownie y la lonchera vuelve vacía.» |
| 6 a 8 | `V3-c.mp3` | «Y su hierro de cada día lo veo en la app.» |

Dirección: natural, con risa contenida al inicio; no es un locutor, es una mamá o un papá contando algo que le pasó.

---

## Video 6 · P1 · Claudia, un día en su vida · 9:16 · 8 s (ya no se usa: la ficha de la presentación lleva la foto `img/campana/claudia.jpg`)

**Dónde va:** ficha de Claudia en la pantalla de buyer persona. Archivo final: `claudia.mp4` → `public/vid/claudia.mp4`.

### 1. Veo 3: un clip

Modo «Ingredients to video», referencias F2 y `empaque_mockup.jpg`:

```
Vertical 9:16 realistic video, 8 seconds, the same woman as the reference image (Peruvian mother in her late thirties, lawyer, cream silk blouse), no on-screen text, no logos. 0-3 s: 6:40 a.m. in her bright San Borja kitchen with light oak and cream tiles; she reads the back of a matte kraft pouch carefully, eyebrows slightly raised, like checking a contract, then nods and places it in the open terracotta lunchbox. 3-5 s: late morning in a calm, modern law office with warm light and bookshelves out of focus; between documents she turns her phone over and glances at the softly glowing screen (no readable content) with a small reassured smile. 5-8 s: early evening back in the same kitchen; she opens the terracotta lunchbox: completely empty, a few cocoa crumbs; she exhales and smiles. Smooth match cuts, 35mm look, shallow depth of field, film grain, palette cocoa, kraft, cream, warm gold. The bottom 40 percent of the frame stays calm for text. Adults only, no children, no letters, no logos. No dialogue, ambient sound only.
```

### 2. Unir

Un solo clip de 8 s, sin cierre de marca (es una ficha, no un anuncio).

### 3. Texto en pantalla

Ninguno: la ficha de la presentación ya pone su nombre, edad y la frase.

### 4. Voz (voz Claudia, como pensamiento)

| Segundos | Archivo | Texto para ElevenLabs |
|---|---|---|
| 0 a 3 | `P1-a.mp3` | «Seis y cuarenta. Todo lo que le hace bien, mi hijo lo deja.» |
| 3 a 5 | `P1-b.mp3` | «Desde la oficina, miro el celular.» |
| 5 a 8 | `P1-c.mp3` | «Vacía. Por fin, vacía.» |

---

## Video 7 · P2 · Rodrigo, un día en su vida · 9:16 · 8 s (ya no se usa: la ficha lleva la foto `img/campana/rodrigo.jpg`)

**Dónde va:** ficha de Rodrigo en la pantalla de buyer persona. Archivo final: `rodrigo.mp4` → `public/vid/rodrigo.mp4`.

### 1. Veo 3: un clip

Modo «Ingredients to video», referencias F3 y `empaque_mockup.jpg`:

```
Vertical 9:16 realistic video, 8 seconds, the same man as the reference image (Peruvian father around forty, casual button-down shirt with rolled sleeves), no on-screen text, no logos. 0-3 s: 6:05 a.m., blue-hour light in his compact San Miguel kitchen; coffee in one hand, he drops a small sealed kraft pouch into the terracotta lunchbox, closes it and grabs the car keys in one smooth move. 3-5 s: midday at a logistics warehouse office, shelves and boxes out of focus; holding a clipboard, he types a quick message on his phone (screen glow, no readable content) and puts it away with a satisfied nod. 5-8 s: early evening at his apartment door, warm light; he receives a matte kraft box from a delivery bag held by an adult courier's hand, opens it to show twelve small sealed pouches and stores it on a light wood shelf, a relaxed smile. Documentary handheld feel, 35mm, film grain, palette cocoa, kraft, cream, warm gold. The bottom 40 percent of the frame stays calm for text. Adults only, no children, no letters, no logos, no price tags. No dialogue, ambient sound only.
```

### 2. Unir

Un solo clip de 8 s, sin cierre de marca.

### 3. Texto en pantalla

Ninguno.

### 4. Voz (voz Rodrigo, como pensamiento)

| Segundos | Archivo | Texto para ElevenLabs |
|---|---|---|
| 0 a 3 | `P2-a.mp3` | «Seis y cinco. Café, lonchera, llaves.» |
| 3 a 5 | `P2-b.mp3` | «No me vendas salud, véndeme una mañana menos.» |
| 5 a 8 | `P2-c.mp3` | «Doce brownies. Doce mañanas resueltas.» |

---

## Montaje en CapCut, igual para los siete

1. Proyecto 9:16 (1080 × 1920) para los videos 2 a 7 y 16:9 (1920 × 1080) para el video 1.
2. Importa los clips de Veo (ya sin audio), los MP3 por bloque y una música suave sin letra (piano o guitarra, 70 a 80 bpm) a −18 dB bajo la voz.
3. Coloca cada bloque de voz sobre su rango de segundos. Si la voz es más larga que la toma, recorta la voz; no aceleres el video.
4. Textos en pantalla con la tipografía de la marca, en la zona limpia que dejan los prompts (abajo en los 9:16, a la izquierda en el maestro). Subtítulos automáticos revisados a mano: el hashtag se escribe #LoQueNadieVe.
5. Cierre según cada video; exporta a 1080p, 30 fps, H.264, con el nombre de archivo indicado.
6. Antes de subir: ¿aparece algún niño? ¿algún personaje conocido? ¿letras inventadas por la IA? Si sí, se regenera ese clip.
