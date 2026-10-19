# Prompts de la campaña «Lo que nadie ve» para la presentación web

Campaña decidida con Carlos el 19-oct-2026 (textos finales en `CAMPANA-lo-que-nadie-ve.md`). Idea: cada papá y cada mamá de Lima inventa trucos para que su hijo coma lo que le hace bien (la zanahoria rallada en la torta, la sopa «de dinosaurios», el jugo verde «de superhéroe», el cuento para el hígado) y nadie ve ese esfuerzo. AndiBite es el truco que ya no necesita cuento. Firma: «AndiBite. El truco que ya no necesita cuento.» Cierre: «Dulce para ellos. Tranquilidad para ti.»

Los anuncios para redes y los buyer persona son **videos**; el material del stand (BTL) son **imágenes**. Los prompts van en inglés porque Nano Banana y Google Flow responden mejor así.

## Qué hay que generar y dónde va cada archivo

| Pieza | Herramienta | Pantalla | Formato | Archivo que hay que guardar |
|---|---|---|---|---|
| Fotograma base F1 (último cuadro del maestro: lonchera vacía y bolsa kraft) | Nano Banana | cuadro final para Flow | 16:9, 1920 x 1080 | `fotogramas/f1_final_maestro.png` (no va a la web) |
| Fotograma base F2 (Claudia y el jugo verde, mañana) | Nano Banana | primer cuadro para Flow | 9:16, 1080 x 1920 | `fotogramas/f2_claudia.png` |
| Fotograma base F3 (Rodrigo a las 6 a. m., llaves del carro) | Nano Banana | primer cuadro para Flow | 9:16, 1080 x 1920 | `fotogramas/f3_rodrigo.png` |
| Fotograma base F4 (familia real en la mesa, celular) | Nano Banana | primer cuadro para Flow | 9:16, 1080 x 1920 | `fotogramas/f4_testimonial.png` |
| VIDEO maestro «Lo que nadie ve» | Google Flow (Veo 3.1) | Campaña 1, portada del capítulo | 16:9, 16 s | `public/vid/campana_maestro.mp4` |
| VIDEO anuncio para Claudia | Google Flow | Campaña 4 | 9:16, 8 s | `public/vid/anuncio_a.mp4` |
| VIDEO anuncio para Rodrigo | Google Flow | Campaña 5 | 9:16, 8 s | `public/vid/anuncio_b.mp4` |
| VIDEO testimonial «Mi truco era…» | Google Flow | Campaña 6 | 9:16, 8 s | `public/vid/testimonial.mp4` |
| VIDEO buyer persona Claudia, «un día en su vida» | Google Flow | Buyer persona (`s-personas`) | 9:16, 8 s | `public/vid/claudia.mp4` |
| VIDEO buyer persona Rodrigo, «un día en su vida» | Google Flow | Buyer persona (`s-personas`) | 9:16, 8 s | `public/vid/rodrigo.mp4` |
| Pósters de cada video | del propio video | las mismas | JPG | `public/img/campana/campana_4.jpg` (maestro, **último** cuadro), `campana_1.jpg` (Claudia), `campana_2.jpg` (Rodrigo), `campana_3.jpg` (testimonial), `claudia.jpg` y `rodrigo.jpg` (buyer persona, primer cuadro) |
| IMAGEN stand con el mural «Lo que nadie ve» | Nano Banana | Campaña 7 | 16:9, 1920 x 1080 | `public/img/campana/stand.jpg` |
| IMAGEN hablador de precios | Nano Banana | Campaña 7 (reserva) | 4:5, 1080 x 1350 | `public/img/campana/hablador.jpg` |

No hay que tocar el código: si el archivo existe, la web lo muestra; si no, queda el degradado con la etiqueta. Después de guardar los archivos, en `web-presentacion/` corre `npm run build && npm run deploy`.

**Peso:** cada imagen en JPG de 300 KB o menos: `ffmpeg -i entrada.png -vf scale=1920:-2 -q:v 5 public/img/campana/stand.jpg`. Cada video en MP4 H.264 de 4 MB o menos, sin audio: `ffmpeg -i flow.mp4 -an -vf scale=1080:-2 -c:v libx264 -crf 27 -preset slow -movflags +faststart public/vid/anuncio_a.mp4` (para el maestro 16:9 usa `scale=1600:-2`). El póster de los videos verticales: `ffmpeg -i public/vid/anuncio_a.mp4 -frames:v 1 -q:v 4 public/img/campana/campana_1.jpg`. El póster del maestro sale del **último** cuadro, porque es donde entra el título: `ffmpeg -sseof -0.1 -i public/vid/campana_maestro.mp4 -frames:v 1 -q:v 4 public/img/campana/campana_4.jpg`.

**Unir las dos partes del maestro** (si se generan por separado): crea `lista.txt` con las líneas `file 'maestro_1.mp4'` y `file 'maestro_2.mp4'` y corre `ffmpeg -f concat -safe 0 -i lista.txt -an -vf scale=1600:-2 -c:v libx264 -crf 27 -preset slow -movflags +faststart public/vid/campana_maestro.mp4`.

## Regla de oro: todas las piezas son una misma familia

Todas las piezas comparten el mismo mundo, para que se vean como una sola campaña:

- **La misma cocina:** departamento limeño real, mesa y repisas de madera clara (roble), mayólica crema, una ventana con luz natural, una planta. Nada de cocinas de revista ni de clínica. En el stand, la misma madera clara.
- **La misma lonchera:** reutilizable, terracota con tapa crema, con cierre rojo ladrillo. Es el símbolo de la campaña. Aparece en todas las piezas.
- **La misma bolsa:** la bolsa kraft mate de AndiBite (adjuntar `public/img/empaque_mockup.jpg` como referencia). Si la IA no copia la etiqueta, que quede kraft liso y la etiqueta real se monta después.
- **Paleta del manual de marca:** cacao #4A2018, kraft #E8CDB3, crema #FBF3E8, acentos de rojo ladrillo #BA4036 y dorado #E3A33B. Luz cálida de mañana o de tarde, sombras suaves, grano de película leve.
- **Los trucos se ven caseros y con cariño, nunca ridículos:** zanahoria rallada cayendo en la masa de una torta de chocolate, sopa con fideos en forma de dinosaurio y un dinosaurio de juguete en el borde del plato, un vaso de jugo verde con una mascarita de papel de superhéroe genérico (ningún personaje reconocible), un plato de bolitas apanadas caseras para «el cuento del hígado». Humor con ternura: el adulto sonríe, no se burla.
- **Adultos como protagonistas** (Ley 30021, art. 8): papás y mamás de 32 a 45 años, limeños, NSE A y B. **Ningún niño en los videos.** El niño está «fuera de cuadro»: el adulto le habla a alguien que no se ve, o se ve una mochila. En la imagen del stand se permite a lo sumo una mano de niño en el borde, sin cara.
- **Sin texto, logos ni octógonos dentro de la imagen o el video:** los textos y el logo los pone la web o Canva. La IA deforma las letras. Los post-its del mural van **en blanco**.
- **Sin brownie generado en primer plano:** el brownie real se fotografía aparte. Los símbolos son la lonchera vacía y la bolsa kraft.
- **Nada de pastillas, jarabes, batas, sangre, carne cruda, banderas ni personajes de marcas** (sin Hulk, sin dinosaurios de películas).
- **Zonas libres para el texto:** en 9:16, la mitad inferior más tranquila y oscura; en 16:9, el tercio izquierdo y la franja de abajo.

Flujo recomendado: 1) genera el fotograma base en Nano Banana; 2) revísalo con la lista del final; 3) en Google Flow crea el video con ese fotograma como primer cuadro («Frames to video») o como último cuadro (solo en el maestro), o usa «Ingredients to video» con las referencias indicadas; 4) exporta el póster con los comandos de arriba.

## 1. Fotogramas base (Nano Banana)

Adjuntar siempre `empaque_mockup.jpg`. Después del primero, adjunta también el fotograma anterior como referencia de la cocina y la lonchera, y escribe al inicio: *"Same kitchen, same terracotta lunchbox and same kraft pouch as the attached reference image."*

### F1 · Último cuadro del maestro: la lonchera vacía y la bolsa kraft (16:9)

```
Wide 16:9 photograph, 1920x1080. 1:30 p.m. in a real Lima apartment kitchen: light oak table, cream ceramic tiles, soft warm daylight from a window on the right, a small plant. On the right two thirds of the frame: a reusable terracotta lunchbox with a cream lid and a brick-red latch, open and completely empty, only a folded cloth napkin and a few cocoa crumbs; standing next to it, a matte kraft paper stand-up pouch (use the attached product photo as reference; if the label cannot be reproduced faithfully, keep it plain kraft). In the soft background, out of focus, the traces of a week of home tricks: a mixing bowl with grated carrot, a small toy dinosaur, an empty glass with a green rim. An adult's hand rests gently on the open lid, a quiet gesture of relief; adult only, no child. Editorial documentary style, 35mm lens, f/2.8, shallow depth of field, slight film grain. Palette: cocoa brown, kraft, cream, warm gold light, a small brick-red accent on the latch. The left third of the frame is calm, darker, cocoa-toned negative space for a headline, and the bottom strip stays quiet. No text, no letters, no logos, no watermark, no children, no medicine.
```

### F2 · Claudia, 7:10 a. m. en San Borja, el jugo verde (9:16)

```
Vertical 9:16 lifestyle photograph, 1080x1920. Same kitchen, same terracotta lunchbox and same kraft pouch as the attached reference image. Early morning in a bright, tidy apartment kitchen in San Borja, Lima: light oak countertop, cream tiles, soft window light from the left. A Peruvian mother in her late thirties, a lawyer dressed for the office in a cream silk blouse, stands at the counter in the upper half of the frame holding a glass of green juice with a tiny green paper superhero mask taped to it (generic, not any known character); she looks at it with a wry, tender half smile, as if admitting the trick never worked. Next to her: the open terracotta lunchbox and a matte kraft stand-up pouch (match the attached product reference), and her smartphone face down. Mood: precise, warm, self-aware humor. Composition: subject, glass and lunchbox in the top 55 percent; the bottom 45 percent is a calm, darker countertop with soft shadow, free for text overlay. Full-frame camera look, 35mm, f/2.8, natural color grading, realistic skin texture. No text, no letters, no logos, no watermark, no children, no medicine, no clinical setting.
```

### F3 · Rodrigo, 6:05 a. m. en San Miguel, las llaves del carro (9:16)

```
Vertical 9:16 documentary-style photograph, 1080x1920. Same terracotta lunchbox and same kraft pouch as the attached reference image, in a compact, warm apartment kitchen in San Miguel, Lima: blue-hour light through the window mixed with a warm pendant lamp, light wood shelves, a steaming coffee mug, two plates with half-eaten toast. A Peruvian father around forty, casual button-down shirt with rolled sleeves, holds up a set of car keys and jingles them with a playful grin toward someone off-camera, like starting a race; with the other hand he holds the open terracotta lunchbox. On the counter: an open matte kraft box with twelve small sealed pouches (plain kraft, no readable label). Two school backpacks hang on a chair in the background, out of focus. Mood: rushed but tender, practical, complicit. Composition: father and lunchbox in the top 55 percent; bottom 45 percent calm and darker for text overlay. 35mm, f/2.8, natural light, true-to-life skin tones, slight film grain. No text, no letters, no logos, no watermark, no children on camera, no price tags.
```

### F4 · Testimonial: una familia real en la mesa (9:16)

```
Vertical 9:16 authentic smartphone-style photograph, 1080x1920, as if the phone were propped on the table to record a real family testimonial. Same kitchen, same terracotta lunchbox and same kraft pouch as the attached reference image. 1:30 p.m., warm afternoon light on the light oak dining table. A Peruvian mother and father in their late thirties sit side by side, facing the camera, laughing mid-sentence as if confessing an old trick; casual home clothes. In front of them: the terracotta lunchbox, closed, and the matte kraft stand-up pouch lying on the table; a child's school backpack hangs on an empty chair at the edge of the frame, no child visible. Composition: the couple and the lunchbox in the upper 55 percent; the lower 45 percent is softly blurred tabletop for text overlay. Slightly handheld feel, natural window light, realistic skin and textures, shallow depth of field. No text, no letters, no logos, no watermark, no children, no food that looks artificial.
```

## 2. Videos de la campaña (Google Flow, Veo 3.1)

En Flow genera 8 segundos por clip. Sin audio obligatorio; si Flow genera sonido, que sea ambiente de cocina, sin voz ni música con letra (de todas formas se quita con `-an`). Genera 2 o 3 variantes y quédate con la que mejor lea, en un segundo, «un truco casero» o «la lonchera volvió vacía».

### V0 · Video maestro «Lo que nadie ve», 16:9, 16 s (Campaña 1)

Dos partes de 8 s. La parte 1 es la secuencia de trucos; la parte 2 es el truco que ya no necesita cuento y termina en F1. Se unen con el comando de concat de arriba.

**Parte 1 (0 a 8 s), los trucos.** «Ingredients to video» con F1 (cocina y lonchera) y `empaque_mockup.jpg` como referencias:

```
Cinematic realistic video, 16:9, 8 seconds, the same real Lima apartment kitchen as the reference image (light oak, cream tiles, warm window light), no on-screen text, no logos. A gentle montage of four 2-second shots of parents' home tricks, each one tender and a little funny, adults only, the child always off-camera. Shot 1 (0-2 s): close-up, a mother's hands grate a carrot straight into chocolate cake batter and quickly stir it in, glancing over her shoulder. Shot 2 (2-4 s): a father's hand places a small toy dinosaur on the rim of a bowl of soup with dinosaur-shaped pasta and slides it across the table toward an empty chair. Shot 3 (4-6 s): a mother tapes a tiny green paper superhero mask onto a glass of green juice (generic, no known character) and raises it proudly. Shot 4 (6-8 s): night, warm lamp; a father at the dinner table tells a story with big animated hand gestures to someone off-camera, a small plate of homemade breaded bites in front of him. Soft match cuts, slow camera moves, 35mm look, shallow depth of field, film grain, palette of cocoa brown, kraft, cream and warm gold. No children visible, no text, no letters, no logos, no raw meat.
```

**Parte 2 (8 a 16 s), el truco que ya no necesita cuento.** «Frames to video» con F1 como **último cuadro**:

```
Cinematic realistic video, 16:9, 8 seconds, same kitchen, same terracotta lunchbox and same kraft pouch, no on-screen text, no logos. 0-3 s: early morning, warm side light; an adult hand takes one small sealed kraft pouch and drops it into the open terracotta lunchbox next to a mandarin, closes the brick-red latch and slides the lunchbox into a school backpack, no story, no effort, a calm smile. 3-6 s: 1:30 p.m., warm afternoon light; the same hand opens the terracotta lunchbox on the light oak table: completely empty, only a folded napkin and a few cocoa crumbs; the kraft pouch is set upright beside it. 6-8 s: slow push-in that settles exactly on the final frame and holds still, with calm cocoa-brown negative space on the left third for a headline added later. Smooth slow dolly, 35mm look, film grain, palette cocoa, kraft, cream, warm gold. Adults only, no children, no text, no letters, no fast cuts.
```

Si la parte 1 sale confusa con cuatro tomas, plan B: genera cada truco como un clip de 8 s por separado (mismo prompt de su toma), corta 2 s de cada uno y únelos con concat antes de la parte 2.

### V1 · Anuncio para Claudia, 9:16, 8 s (Campaña 4)

Primer cuadro: F2. Gancho «Confieso: el jugo verde nunca le dio superpoderes.» (0 a 3 s) → historia «Leí etiquetas, licué espinaca y le inventé un superhéroe. El vaso volvía lleno.» (3 a 6 s) → cierre con producto y app (6 a 8 s). Los textos los pone la web.

```
Vertical 9:16 realistic video, 8 seconds, same kitchen, same terracotta lunchbox and same kraft pouch as the first frame, no on-screen text. 0-3 s: the mother looks at the glass of green juice with the tiny paper superhero mask, gives a small resigned laugh, peels off the mask and drinks the juice herself; soft morning light, slight handheld feel. 3-6 s: she takes one small sealed kraft pouch from the stand-up kraft bag, drops it into the open terracotta lunchbox next to a mandarin and closes the brick-red latch with a calm, confident gesture. 6-8 s: she turns her smartphone over and glances at the softly glowing screen (no readable content) with a quiet, satisfied smile; slow push-in and hold on the closed lunchbox and the kraft pouch; the bottom half of the frame stays calm and darker for text. 35mm look, shallow depth of field, film grain, palette cocoa, kraft, cream, warm gold. Adults only, no children, no letters, no logos.
```

### V2 · Anuncio para Rodrigo, 9:16, 8 s (Campaña 5)

Primer cuadro: F3. Gancho «Seis de la mañana. Mi truco: el que se lo acaba primero elige la música del carro.» → historia «Con el pan funcionaba. Con la menestra de la lonchera, ni con su canción favorita.» → cierre «un mini brownie con hierro que se come sin carrera; pack de 12 por WhatsApp, a S/4.16 cada uno».

```
Vertical 9:16 realistic video, 8 seconds, same kitchen, same terracotta lunchbox and same kraft pouch as the first frame, no on-screen text. 0-3 s: 6:05 a.m., blue-hour window light and a warm pendant lamp; the father jingles the car keys toward someone off-camera like starting a race, then glances at a small container of untouched beans on the counter and shrugs with a tender, defeated smile. 3-6 s: without hesitating he takes one small sealed pouch from the open kraft box of twelve, drops it into the open terracotta lunchbox and closes the latch with one hand: the morning solved. 6-8 s: he grabs the two school backpacks from the chair and the keys, walks toward the door; hold on the closed lunchbox on the counter in warm light; bottom half of the frame calm for text. Documentary handheld feel, 35mm, film grain, palette cocoa, kraft, cream, warm gold. Adults only, no children on camera, no letters, no logos, no price tags.
```

### V3 · Testimonial «Mi truco era…», 9:16, 8 s (Campaña 6)

Primer cuadro: F4. Gancho «Mi truco era decirle que el hígado era carne de dinosaurio.» → historia «Ahora no le cuento nada: le mando su brownie y la lonchera vuelve vacía.» → cierre «Lo que antes no veía, su hierro de cada día, ahora lo veo en la app.» En la pauta real la familia dice su propio truco; este video es la versión de referencia para la presentación.

```
Vertical 9:16 authentic smartphone-style video, 8 seconds, phone propped on the table, slight handheld wobble, as if a real family recorded their own testimonial, no on-screen text. 0-3 s: the mother and father sit side by side at the light oak table and laugh while she talks to the camera, confessing an old trick; he covers his face for a second, amused. 3-6 s: she opens the terracotta lunchbox and tilts it toward the camera: completely empty, only a folded napkin and a few cocoa crumbs; he nods. 6-8 s: the father lifts the matte kraft pouch next to his smartphone, the screen softly glowing with no readable content, and both smile at each other; hold, the lower half of the frame calm for text. Natural afternoon window light, realistic skin and textures, shallow depth of field, palette kraft, cream, cocoa, warm gold. A child's backpack on an empty chair at the edge, no children, no letters, no logos.
```

## 3. Videos de buyer persona (Google Flow, Veo 3.1)

Para la pantalla de Claudia y Rodrigo (`s-personas`). «Un día en su vida» en 8 s, tres momentos. Usa «Ingredients to video» con el fotograma de la persona (F2 o F3, para que sea la misma cara y la misma ropa) y `empaque_mockup.jpg`. El póster es el primer cuadro.

### P1 · Claudia, un día en su vida, 9:16, 8 s → `public/vid/claudia.mp4`

```
Vertical 9:16 realistic video, 8 seconds, the same woman as the reference image (Peruvian mother in her late thirties, lawyer, cream silk blouse), no on-screen text, no logos. 0-3 s: 7:10 a.m. in her bright San Borja kitchen with light oak and cream tiles; she reads the back of a matte kraft pouch carefully, eyebrows slightly raised, like checking a contract, then nods and places it in the open terracotta lunchbox. 3-5 s: late morning in a calm, modern law office with warm light and bookshelves out of focus; between documents she turns her phone over and glances at the softly glowing screen (no readable content) with a small reassured smile. 5-8 s: early evening back in the same kitchen; she opens the terracotta lunchbox: completely empty, a few cocoa crumbs; she exhales and smiles. Smooth match cuts, 35mm look, shallow depth of field, film grain, palette cocoa, kraft, cream, warm gold. The bottom 40 percent of the frame stays calm for text. Adults only, no children, no letters, no logos.
```

### P2 · Rodrigo, un día en su vida, 9:16, 8 s → `public/vid/rodrigo.mp4`

```
Vertical 9:16 realistic video, 8 seconds, the same man as the reference image (Peruvian father around forty, casual button-down shirt with rolled sleeves), no on-screen text, no logos. 0-3 s: 6:05 a.m., blue-hour light in his compact San Miguel kitchen; coffee in one hand, he drops a small sealed kraft pouch into the terracotta lunchbox, closes it and grabs the car keys in one smooth move. 3-5 s: midday at a logistics warehouse office, shelves and boxes out of focus; holding a clipboard, he types a quick message on his phone (screen glow, no readable content) and puts it away with a satisfied nod. 5-8 s: early evening at his apartment door, warm light; he receives a matte kraft box from a delivery bag held by an adult courier's hand, opens it to show twelve small sealed pouches and stores it on a light wood shelf, a relaxed smile. Documentary handheld feel, 35mm, film grain, palette cocoa, kraft, cream, warm gold. The bottom 40 percent of the frame stays calm for text. Adults only, no children, no letters, no logos, no price tags.
```

## 4. Material del stand (Nano Banana)

### S1 · El stand con el mural «Lo que nadie ve» (16:9, Campaña 7)

```
Wide 16:9 photorealistic image, 1920x1080, of a small, warm brand stand inside a bright shopping mall in Lima, Peru (Jockey Plaza style: polished floor, glass storefronts out of focus, warm daylight from a skylight). The stand is a compact light oak counter with a cream back panel and a kraft-brown header band left blank. Beside the counter, a large kraft-paper mural wall covered with dozens of blank sticky notes in cream, soft gold, pale terracotta and kraft tones, arranged loosely like a crowd of shared stories; a small pen holder and a pad of blank sticky notes on a ledge. Next to the mural, a smartphone on a small tripod with a little ring light, ready to record short videos. On the counter: a wooden tray with small sealed matte kraft pouches (use the attached product photo as reference; plain kraft if the label cannot be reproduced), a terracotta reusable lunchbox open and empty, and a small blank cream price card. People: an adult father sticking a blank note onto the mural with a smile; an adult mother laughing as she talks to the phone on the tripod; a saleswoman in a cream apron and a cacao-brown cap offering a tasting cup to a parent; a child's hand reaches toward the tray from the lower edge, no child's face visible. Composition: the stand and mural fill the lower and right part; the top 25 percent is calm mall ceiling and skylight so a title can sit above it. Palette: cocoa brown, kraft, cream, brick red, warm gold. Clean, warm, friendly, premium. All sticky notes and panels are blank. No readable text, no letters, no logos, no watermark, no children's faces.
```

### S2 · Hablador de precios sobre el mostrador (4:5, reserva)

```
Vertical 4:5 product photograph, 1080x1350. On the light oak counter of the same stand, a small cream tent card (price holder) made of thick kraft-cream cardboard stands next to three small sealed matte kraft pouches, a terracotta lunchbox lid, a pad of blank cream sticky notes and a pen; the card is blank, with a soft brick-red stripe at the top and a small gold dot, and the text area is empty for later editing. Out of focus in the background, a corner of the kraft mural covered with blank sticky notes. Warm daylight from the left, soft shadows, shallow depth of field, premium but warm. Palette: cocoa brown, kraft, cream, brick red, warm gold. No readable text, no letters, no logos, no watermark, no people.
```

## 5. Revisión crítica antes de usar

- ¿Cada truco se entiende en un segundo y se ve con cariño (zanahoria en la torta, sopa de dinosaurios, jugo verde con mascarita, el cuento con las bolitas apanadas)? Si parece burla o es confuso, se regenera.
- ¿La lonchera vacía se entiende en un segundo? Si parece llena o confusa, se regenera.
- ¿Es la misma lonchera terracota, la misma cocina y la misma bolsa kraft en todas las piezas? Si no, se vuelve a generar con el fotograma anterior como referencia.
- ¿Aparece algún niño en un video, o una cara de menor en cualquier pieza? Se regenera (Ley 30021 y Ley 29733).
- ¿La IA dibujó un personaje reconocible (Hulk, un dinosaurio de película) o un logo? Se regenera.
- ¿La IA inventó letras en los post-its, el cartel o el envase? Se borra y el texto real lo pone la web.
- ¿Hay carne cruda, sangre, pastillas o jarabes? Se descarta.
- ¿El empaque es la bolsa kraft real o kraft liso? Cualquier otra cosa se descarta.
- Para la pauta real, cada anuncio cierra con «AndiBite. El truco que ya no necesita cuento.», «Dulce para ellos. Tranquilidad para ti.» y los dos botones: «Pruébalo en el stand» y «Pídelo por WhatsApp». En la pauta pagada se dice «superhéroe», no «Hulk».
