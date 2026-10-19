# Prompts de la campaña «Vuelve vacía» para la presentación web

Campaña del T2_13 y piezas del T2_14, con el enfoque del 19-oct: línea de campaña «Su prueba: la lonchera vacía. La tuya: verlo en la app.» y cierre «Dulce para ellos. Tranquilidad para ti.». Los anuncios para redes son **videos**; el material del stand (BTL) son **imágenes**. Los prompts van en inglés porque Nano Banana y Google Flow responden mejor así.

## Qué hay que generar y dónde va cada archivo

| Pieza | Herramienta | Pantalla | Formato | Archivo que hay que guardar |
|---|---|---|---|---|
| Fotograma base 1 (lonchera llena, tarde) | Nano Banana | sirve de primer cuadro para Flow | 16:9, 1920 x 1080 | `fotogramas/f1_llena.png` (no va a la web) |
| Fotograma base 2 (mamá en la cocina, mañana) | Nano Banana | primer cuadro para Flow | 9:16, 1080 x 1920 | `fotogramas/f2_claudia.png` |
| Fotograma base 3 (papá a las 6 a. m.) | Nano Banana | primer cuadro para Flow | 9:16, 1080 x 1920 | `fotogramas/f3_rodrigo.png` |
| Fotograma base 4 (manos abren la lonchera vacía) | Nano Banana | primer cuadro para Flow | 9:16, 1080 x 1920 | `fotogramas/f4_testimonial.png` |
| VIDEO maestro | Google Flow (Veo 3.1) | 27, portada de la campaña | 16:9, 16 s | `public/vid/campana_maestro.mp4` |
| VIDEO anuncio A (Claudia) | Google Flow | 29 | 9:16, 8 s | `public/vid/anuncio_a.mp4` |
| VIDEO anuncio B (Rodrigo) | Google Flow | 30 | 9:16, 8 s | `public/vid/anuncio_b.mp4` |
| VIDEO testimonial | Google Flow | 31 | 9:16, 8 s | `public/vid/testimonial.mp4` |
| Pósters de cada video (primer cuadro exportado) | del propio video | 27, 29, 30, 31 | JPG | `public/img/campana/campana_4.jpg` (maestro), `campana_1.jpg` (A), `campana_2.jpg` (B), `campana_3.jpg` (testimonial) |
| IMAGEN stand | Nano Banana | 33 | 16:9, 1920 x 1080 | `public/img/campana/stand.jpg` |
| IMAGEN hablador de precios | Nano Banana | 33 (reserva) | 4:5, 1080 x 1350 | `public/img/campana/hablador.jpg` |

No hay que tocar el código: si el archivo existe, la web lo muestra; si no, queda el degradado con la etiqueta. Después de guardar los archivos, en `web-presentacion/` corre `npm run build && npm run deploy`.

**Peso:** cada imagen en JPG de 300 KB o menos: `ffmpeg -i entrada.png -vf scale=1920:-2 -q:v 5 public/img/campana/stand.jpg`. Cada video en MP4 H.264 de 4 MB o menos, sin audio: `ffmpeg -i flow.mp4 -an -vf scale=1080:-2 -c:v libx264 -crf 27 -preset slow -movflags +faststart public/vid/anuncio_a.mp4` (para el maestro 16:9 usa `scale=1600:-2`). El póster: `ffmpeg -i public/vid/anuncio_a.mp4 -frames:v 1 -q:v 4 public/img/campana/campana_1.jpg`.

## Regla de oro: las cuatro piezas son una misma familia

Todas las piezas comparten el mismo mundo, para que se vean como una sola campaña:

- **La misma cocina:** departamento limeño real, mesa y repisas de madera clara (roble), mayólica crema, una ventana con luz natural, una planta. Nada de cocinas de revista ni de clínica.
- **La misma lonchera:** reutilizable, terracota con tapa crema, con cierre rojo ladrillo. Es el símbolo de la campaña. Siempre aparece.
- **La misma bolsa:** la bolsa kraft mate de AndiBite (adjuntar `public/img/empaque_mockup.jpg` como referencia). Si la IA no copia la etiqueta, que quede kraft liso y la etiqueta real se monta después.
- **Paleta del manual de marca:** cacao #4A2018, kraft #E8CDB3, crema #FBF3E8, acentos de rojo ladrillo #BA4036 y dorado #E3A33B. Luz cálida de mañana o de tarde, sombras suaves, grano de película leve.
- **Adultos como protagonistas** (Ley 30021, art. 8): mamás y papás de 32 a 45 años, limeños, NSE A y B. Ningún niño como protagonista ni rostros de menores; a lo sumo una mochila o una silueta de espaldas fuera de foco.
- **Sin texto, logos ni octógonos dentro de la imagen o el video:** los textos y el logo los pone la web o Canva. La IA deforma las letras.
- **Sin brownie generado en primer plano:** el brownie real se fotografía aparte. El símbolo es la lonchera vacía, no el brownie.
- **Nada de pastillas, jarabes, batas, sangre, banderas ni platos de hígado.**
- **Zonas libres para el texto:** en 9:16, la mitad inferior más tranquila y oscura; en 16:9, el tercio izquierdo y la franja de abajo.

Flujo recomendado: 1) genera el fotograma base en Nano Banana; 2) revísalo con la lista de abajo; 3) en Google Flow crea el video con ese fotograma como primer cuadro («Frames to video») y el prompt de movimiento; 4) exporta el primer cuadro del video como póster.

## 1. Fotogramas base (Nano Banana)

Adjuntar siempre `empaque_mockup.jpg`. Después del primero, adjunta también el fotograma anterior como referencia de la cocina y la lonchera, y escribe al inicio: *"Same kitchen, same terracotta lunchbox and same kraft pouch as the attached reference image."*

### F1 · Lonchera llena, 1:30 p. m. (16:9, arranque del video maestro)

```
Wide 16:9 photograph, 1920x1080. 1:30 p.m. in a real Lima apartment kitchen: light oak table, cream ceramic tiles, soft daylight from a window on the left, a small plant. On the table, an open school backpack and a reusable terracotta lunchbox with a cream lid and a brick-red latch, just opened: the food came back untouched (a small spinach patty and sliced vegetables, neatly packed, clearly not eaten). An adult parent's hand rests on the lid, a quiet, tired gesture; adult only, no child. A matte kraft paper stand-up pouch stands further back, out of focus (use the attached product photo as reference; if the label cannot be reproduced faithfully, keep it plain kraft). Editorial documentary style, 35mm lens, f/2.8, shallow depth of field, slight film grain. Palette: cocoa brown, kraft, cream, warm gold light, a small brick-red accent on the latch. The left third of the frame and the bottom strip stay calm and darker for a headline. No text, no letters, no logos, no watermark, no children, no medicine.
```

### F2 · Claudia, mañana en San Borja (9:16, anuncio A)

```
Vertical 9:16 lifestyle photograph, 1080x1920. Same kitchen, same terracotta lunchbox and same kraft pouch as the attached reference image. Early morning, bright and tidy apartment kitchen in San Borja, Lima: light oak countertop, cream tiles, soft window light from the left. A Peruvian mother in her late thirties, dressed for the office in a cream silk blouse, stands at the counter in the upper half of the frame, calmly packing the open terracotta lunchbox; her smartphone lies next to it, screen softly glowing, no readable content. A matte kraft stand-up pouch of AndiBite stands beside the lunchbox (match the attached product reference). Mood: serene, precise, confident. Composition: subject and lunchbox in the top 55 percent; the bottom 45 percent is a calm, darker countertop with soft shadow, free for text overlay. Full-frame camera look, 35mm, f/2.8, natural color grading, realistic skin texture. No text, no letters, no logos, no watermark, no children, no medicine, no clinical setting.
```

### F3 · Rodrigo, jueves 6:05 a. m. en San Miguel (9:16, anuncio B)

```
Vertical 9:16 documentary-style photograph, 1080x1920. Same terracotta lunchbox and same kraft pouch as the attached reference image, in a compact, warm apartment kitchen in San Miguel, Lima: blue-hour light through the window mixed with a warm pendant lamp, light wood shelves, a steaming coffee mug. A Peruvian father around forty, casual button-down shirt with rolled sleeves, closes the terracotta lunchbox with one hand while holding his phone in the other, a relaxed half smile, the morning already solved. On the counter: an open matte kraft box with six small sealed pouches (plain kraft, no readable label). A school backpack hangs on a chair in the background, out of focus. Mood: practical, direct, complicit. Composition: father and lunchbox in the top 55 percent; bottom 45 percent calm and darker for text overlay. 35mm, f/2.8, natural light, true-to-life skin tones, slight film grain. No text, no letters, no logos, no watermark, no children on camera, no price tags.
```

### F4 · Manos abren la lonchera vacía, 1:30 p. m. (9:16, testimonial)

```
Vertical 9:16 authentic smartphone-style photograph, 1080x1920, as if taken by a parent for a real customer testimonial. Same kitchen, same terracotta lunchbox and same kraft pouch as the attached reference image. 1:30 p.m., afternoon light on the light oak dining table. Close-up of an adult's hands opening the terracotta lunchbox: it has come back completely empty, just a folded napkin and a few cocoa crumbs. Next to it, the matte kraft stand-up pouch lies on the table, and the strap of a child's school backpack enters the frame from the edge, no child visible. Gentle relief in the gesture. Composition: hands and lunchbox in the upper-middle area; the lower 45 percent is softly blurred tabletop for text overlay. Slightly handheld feel, natural window light, realistic textures, shallow depth of field. No text, no letters, no logos, no watermark, no faces, no food that looks artificial.
```

## 2. Videos (Google Flow, Veo 3.1)

En Flow: «Frames to video», sube el fotograma base como primer cuadro, pega el prompt y genera 8 segundos. Para el maestro, genera 8 s y luego usa «Extend» con el prompt de la segunda parte para llegar a 16 s. Sin audio obligatorio; si Flow genera sonido, que sea ambiente de cocina, sin voz ni música con letra. Genera 2 o 3 variantes y quédate con la que mejor lea «la lonchera volvió vacía» en un segundo.

### V0 · Video maestro, 16:9, 16 s (portada de la campaña, pantalla 27)

Primer cuadro: F1.

```
Cinematic realistic video, 16:9, natural warm light, real Lima apartment kitchen, no on-screen text, no logos. Shot 1 (0-4 s): starting from the first frame, the parent's hand slowly closes the terracotta lunchbox full of untouched food; a quiet sigh in the gesture, slight handheld feel, shallow depth of field. Shot 2 (4-8 s): early next morning in the same kitchen, warm side light; the same hand places two small sealed kraft pouches inside the open lunchbox next to a mandarin, closes the brick-red latch, slides the lunchbox into a school backpack. Smooth slow dolly-in, 35mm lens look, film grain, palette of cocoa brown, kraft, cream and warm gold. Adults only, no children, no text, no letters.
```

Extensión (8 a 16 s):

```
Continue in the same kitchen, 1:30 p.m., warm afternoon light. The same adult hand unzips the backpack, takes out the terracotta lunchbox and opens it: it is completely empty, only a folded napkin and a few cocoa crumbs. The parent smiles with relief, softly out of focus in the background. Slow push-in on the empty lunchbox, then a final 2-second still hold with calm cocoa-brown negative space on the left third of the frame for a headline added later. No text, no letters, no logos, no children, no fast cuts.
```

### V1 · Anuncio A, Claudia, 9:16, 8 s (pantalla 29)

Primer cuadro: F2. Gancho «Otra vez volvió llena.» (0 a 3 s) → cuerpo «Él ve un brownie. Tú ves la lonchera vacía.» (3 a 7 s) → llamado (7 a 8 s, texto que pone la web).

```
Vertical 9:16 realistic video, 8 seconds, same kitchen and lunchbox as the first frame, no on-screen text. 0-3 s: the mother glances at the open lunchbox, slides one small sealed kraft pouch in next to a mandarin and closes the brick-red latch with a calm, confident gesture; soft morning light, slight handheld feel. 3-7 s: match cut to 1:30 p.m., same table, her hands open the same lunchbox: completely empty, just a napkin and cocoa crumbs; she looks up with a small relieved smile, out of focus. 7-8 s: slow push-in and hold on the empty lunchbox; the bottom half of the frame stays calm and darker for text. 35mm look, shallow depth of field, film grain, palette cocoa, kraft, cream, warm gold. Adults only, no children, no letters, no logos.
```

### V2 · Anuncio B, Rodrigo, 9:16, 8 s (pantalla 30)

Primer cuadro: F3. Gancho «Jueves. Seis de la mañana. ¿Qué le mando?» → cuerpo «Una mañana menos: la lonchera de la semana» → llamado.

```
Vertical 9:16 realistic video, 8 seconds, same kitchen and lunchbox as the first frame, no on-screen text. 0-3 s: 6:05 a.m., blue-hour window light and a warm pendant lamp; the father, phone in hand, opens the kraft box of six small sealed pouches on the counter and drops one into the open terracotta lunchbox without hesitating, then closes the latch with one hand: the morning solved. 3-7 s: he checks his phone with a relaxed half smile (screen glows softly, no readable content), grabs the school backpack from the chair and slides the lunchbox in; a quick, practical rhythm, no fast cuts. 7-8 s: hold on the closed backpack by the door, warm light; bottom half of the frame calm for text. Documentary handheld feel, 35mm, film grain, palette cocoa, kraft, cream, warm gold. Adults only, no children on camera, no letters, no logos, no price tags.
```

### V3 · Testimonial, 9:16, 8 s (pantalla 31)

Primer cuadro: F4. Gancho «Primera vez que vuelve así.» → cuerpo «Es un brownie con sangrecita. Él solo ve un brownie.» → llamado.

```
Vertical 9:16 authentic smartphone-style video, 8 seconds, handheld, as if a parent filmed it for a real testimonial, no on-screen text. 0-4 s: afternoon light on the light oak table; adult hands open the terracotta lunchbox: completely empty, only a folded napkin and a few cocoa crumbs; the hand tilts the lunchbox slightly toward the camera to show it is empty. 4-7 s: the hand picks up the matte kraft pouch lying next to it and turns it gently, the label out of focus; a child's backpack strap at the edge of the frame, no child visible. 7-8 s: hold on the empty lunchbox and the pouch together; the lower half of the frame stays calm for text. Natural window light, realistic textures, slight shake, shallow depth of field, palette kraft, cream, cocoa, warm gold. No faces, no children, no letters, no logos.
```

## 3. Material del stand (Nano Banana)

### S1 · El stand en el mall con el cartel (16:9, pantalla 33)

```
Wide 16:9 photorealistic image, 1920x1080, of a small premium brand stand inside a bright shopping mall in Lima, Peru (Jockey Plaza style: polished floor, glass storefronts out of focus, warm daylight from a skylight). The stand is a compact wooden counter (light oak) with a cream back panel and a kraft-brown header; on the back panel hangs a large blank cream poster with three empty text lines suggested only by soft shading (the real text is added later), and a small brick-red accent stripe. On the counter: a wooden tray with small sealed matte kraft pouches (use the attached product photo as reference; plain kraft if the label cannot be reproduced), a terracotta reusable lunchbox open and empty, a tablet on a stand, and a small cream price card (blank). A saleswoman in a cream apron and a cacao-brown cap smiles while offering a tasting cup to an adult mother; a child's hand reaches toward the tray from below the frame, no child's face visible. Palette: cocoa brown, kraft, cream, brick red, warm gold. Clean, minimal, warm, premium but friendly. No readable text, no letters, no logos, no watermark, no children's faces.
```

### S2 · Hablador de precios sobre el mostrador (4:5, reserva)

```
Vertical 4:5 product photograph, 1080x1350. On the light oak counter of the same stand, a small cream tent card (price holder) made of thick kraft-cream cardboard stands next to three small sealed matte kraft pouches and a terracotta lunchbox lid; the card is blank, with a soft brick-red stripe at the top and a small gold dot, and the text area is empty for later editing. Warm daylight from the left, soft shadows, shallow depth of field, premium but warm. Palette: cocoa brown, kraft, cream, brick red, warm gold. No readable text, no letters, no logos, no watermark, no people.
```

## 4. Revisión crítica antes de usar

- ¿La lonchera vacía se entiende en un segundo? Si parece llena o confusa, se regenera.
- ¿Es la misma lonchera terracota y la misma cocina en todas las piezas? Si no, se vuelve a generar con el fotograma anterior como referencia.
- ¿Hay algún niño protagonista o cara de menor? Se regenera (Ley 30021 y Ley 29733).
- ¿La IA inventó letras, un logo o un octógono? Se borra y el texto real lo pone la web.
- ¿El empaque es la bolsa kraft real o kraft liso? Cualquier otra cosa se descarta.
- Para la pauta real, cada anuncio cierra con «Dulce para ellos. Tranquilidad para ti.» y los dos botones: «Pruébalo en el stand» y «Enviar mensaje» a WhatsApp.
