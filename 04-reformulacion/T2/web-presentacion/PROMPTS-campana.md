# Prompts de la campaña «Vuelve vacía» para la presentación web

Campaña del T2_13 (idea central: «Su prueba: la lonchera vacía. La tuya: el informe de su lote.») y piezas del T2_14 (anuncio A para Claudia, anuncio B para Rodrigo y testimonial). Los prompts van en inglés porque Nano Banana y Google Flow responden mejor así.

## Dónde va cada archivo

| Marco en la web | Pantalla | Formato | Archivo que hay que guardar |
|---|---|---|---|
| IMAGEN campaña 1 · Anuncio A (Claudia, Lima Top) | 26 | 9:16, 1080 x 1920 | `public/img/campana/campana_1.jpg` |
| IMAGEN campaña 2 · Anuncio B (Rodrigo, Lima Moderna) | 26 | 9:16, 1080 x 1920 | `public/img/campana/campana_2.jpg` |
| IMAGEN campaña 3 · Testimonial | 26 | 9:16, 1080 x 1920 | `public/img/campana/campana_3.jpg` |
| IMAGEN campaña 4 · Portada de la campaña | 25 (y póster del video en la 27) | 16:9, 1920 x 1080 | `public/img/campana/campana_4.jpg` |
| VIDEO campaña · clip de Google Flow | 27 | 16:9, 8 a 10 s, sin audio obligatorio | `public/vid/campana.mp4` |

No hay que tocar el código: si el archivo existe, la web lo muestra; si no, queda el degradado con la etiqueta. Después de guardar los archivos, corre `npm run build` y `npm run deploy`.

Reglas de peso: cada imagen en JPG de 300 KB o menos (por ejemplo, `ffmpeg -i entrada.png -vf scale=1080:1920 -q:v 5 public/img/campana/campana_1.jpg`, o Squoosh; la portada a 1920 x 1080). El video en MP4 H.264 de 4 MB o menos, sin audio: `ffmpeg -i flow.mp4 -an -vf scale=1600:-2 -c:v libx264 -crf 26 -preset slow -movflags +faststart public/vid/campana.mp4`.

## Reglas del manual de marca que respetan todos los prompts

- Paleta: cacao y café oscuro (4A2018), kraft (E8CDB3), crema (FBF3E8), con acentos de rojo ladrillo (BA4036) y dorado (E3A33B). Luz natural cálida de mañana, sombras suaves. Nada de fondos fríos ni de clínica.
- Lima real: departamentos de San Borja (A) y San Miguel (B), cocinas reales con madera clara, mayólica crema y ventana. Familias limeñas de NSE A y B, sin estereotipos andinos ni escenas de «programa social».
- Le hablamos al adulto (Ley 30021, art. 8): los protagonistas son padres y madres. Ningún niño como protagonista; a lo sumo una mochila escolar o una silueta de espaldas fuera de foco.
- Sin texto dentro de la imagen: los textos, el logo y el octógono (si corresponde) se ponen después, en la web o en Canva, porque la IA los deforma.
- El empaque es la bolsa kraft real de AndiBite: se adjunta como referencia `public/img/empaque_mockup.jpg` (o `empaque_frente.jpg`). Si el modelo no puede copiarla tal cual, que quede una bolsa kraft lisa, sin etiqueta, y la etiqueta real se monta después.
- Producto real: ningún brownie generado por IA en primer plano. El símbolo de la campaña es la lonchera vacía, no el brownie.
- Nada de pastillas, jarabes, batas, sangre, banderas, personajes ni platos de hígado como «lo malo» en primer plano.
- Zonas libres para el texto de la web: en las piezas 9:16, la mitad inferior queda tranquila y más oscura (ahí va el texto superpuesto); en la portada 16:9, el tercio izquierdo y la franja de abajo.

## 1. Anuncio A · Claudia, Lima Top · 9:16

Adjuntar como referencia: `empaque_mockup.jpg`.

```
Vertical 9:16 lifestyle photograph, 1080x1920. Early morning in a bright, tasteful apartment kitchen in San Borja, Lima, Peru: light oak countertop, cream ceramic tiles, soft daylight from a window on the left, a few green plants. A Peruvian mother in her late thirties, dressed for the office in a cream silk blouse, stands at the counter in the upper half of the frame, calmly reading the back of a matte kraft paper stand-up pouch while holding her smartphone in the other hand; the phone screen glows softly but is out of focus, no readable content. In front of her, an open reusable lunchbox in warm terracotta and cream sits completely empty and clean, only a few cocoa crumbs, as the visual symbol of success. Use the attached product photo as the exact reference for the kraft pouch; if the label cannot be reproduced faithfully, show a plain unbranded kraft pouch instead. Mood: serene, precise, confident, like a pediatrician would speak. Color palette: cocoa brown, kraft, cream, touches of brick red and warm gold. Composition: subject and lunchbox in the top 55 percent; the bottom 45 percent is a calm, slightly darker area of countertop and soft shadow, free for text overlay. Shot on a full-frame camera, 35mm lens, f/2.8, natural color grading, realistic skin texture, shallow depth of field. No text, no letters, no logos, no watermark, no children, no medicine, no clinical setting.
```

## 2. Anuncio B · Rodrigo, Lima Moderna · 9:16

Adjuntar como referencia: `empaque_mockup.jpg`.

```
Vertical 9:16 documentary-style photograph, 1080x1920. Thursday, 6:05 a.m., in a compact, warm apartment kitchen in San Miguel, Lima, Peru: blue-hour light through the window mixing with a warm pendant lamp, light wood shelves, a coffee mug steaming. A Peruvian father around forty, in a casual button-down shirt with rolled sleeves, closes a school lunchbox with one hand while holding his phone in the other, a relaxed half smile, the morning already solved. On the counter: two open lunchboxes, one already packed and one empty and clean, and a plain matte kraft paper box of snacks with the lid open (use the attached kraft pouch as material and color reference; no readable label). A school backpack hangs on a chair in the background, out of focus. Mood: practical, direct, complicit, "one less morning to negotiate". Palette: cocoa brown, kraft, cream, a hint of brick red and soft gold. Composition: father and lunchboxes in the top 55 percent; bottom 45 percent calm and darker (counter edge and soft shadow) for text overlay. 35mm lens, f/2.8, natural light, true-to-life skin tones, slight film grain. No text, no letters, no logos, no watermark, no children on camera, no price tags.
```

## 3. Testimonial · padre o madre real · 9:16

Adjuntar como referencia: `empaque_mockup.jpg`.

```
Vertical 9:16 authentic smartphone-style photograph, 1080x1920, as if taken by a parent for a real customer testimonial. 1:30 p.m., afternoon light on a light wood dining table in a Lima family apartment. Close-up of an adult's hands opening a reusable school lunchbox: it has come back completely empty, just a napkin and a few cocoa crumbs. Next to it, a matte kraft paper stand-up pouch lies on the table (use the attached product photo as reference; if the label cannot be reproduced exactly, keep it plain kraft without a label), and the strap of a child's school backpack enters the frame from the edge, no child visible. Gentle relief in the gesture. Palette: kraft, cream, cocoa brown, warm gold sunlight. Composition: hands and lunchbox in the upper-middle area; lower 45 percent is softly blurred tabletop for text overlay. Slightly handheld feel, natural window light, realistic textures, shallow depth of field. No text, no letters, no logos, no watermark, no faces of children, no food that looks artificial.
```

## 4. Portada de la campaña · 16:9

Adjuntar como referencia: `empaque_mockup.jpg`.

```
Wide 16:9 hero photograph, 1920x1080, for the launch campaign "the lunchbox that comes back empty". A clean, open reusable school lunchbox, completely empty with a few cocoa crumbs, placed on the right third of a light oak table in a real Lima apartment, next to a matte kraft paper stand-up pouch standing upright (use the attached product photo as exact reference; if the label cannot be reproduced faithfully, use a plain unbranded kraft pouch). Warm late-morning side light from the right, long soft shadows toward the left. The left 55 percent of the frame falls off into a deep cocoa-brown shadow (close to #4A2018) with subtle texture, calm and empty, reserved for a headline; the bottom strip is also calm and dark. Palette: cocoa, kraft, cream, warm gold highlights, a tiny accent of brick red on the lunchbox latch. Editorial still-life style, 50mm lens, f/4, realistic materials, premium but warm, not luxurious. No text, no letters, no logos, no watermark, no people, no children, no medicine.
```

## 5. Video corto para Google Flow (Veo) · 8 a 10 s · 16:9 · regla 5-3-2

Estructura: gancho (0 a 3 s, atención), cuerpo (3 a 7 s, interés y deseo: la prueba del lote) y llamado a la acción (7 a 10 s: la lonchera vuelve vacía y queda espacio para «Pídelo por WhatsApp», que se agrega en la edición). Es uno de los 5 ganchos y 3 cuerpos del T2_14; con las mismas tomas se arman las otras variantes. Subir como «ingredientes» la foto del empaque (`empaque_mockup.jpg`) y, si ya existe, la imagen 4 como primer cuadro.

```
Cinematic photographic video, 16:9, 10 seconds, three shots, natural warm light, real Lima apartment, no on-screen text.

Shot 1 (0-3 s, hook): 1:30 p.m. on a light oak kitchen table. An adult parent's hand unzips a school backpack and opens a reusable terracotta-and-cream lunchbox: the food came back untouched (spinach patties and vegetables, neatly packed, clearly not eaten). Close-up, slight handheld feel, a quiet sigh in the gesture.

Shot 2 (3-7 s, body): early morning in the same kitchen. The parent's hand holds a smartphone over a matte kraft paper stand-up pouch (match the attached product reference; if the label cannot be reproduced exactly, keep the pouch plain kraft) and scans the small QR area on the back; the phone screen lights up with a warm brick-red card and soft abstract shapes, no readable text, reflecting on the parent's calm face, adult only. Smooth slow dolly-in.

Shot 3 (7-10 s, call to action): 1:30 p.m. again, same table, same hand opens the lunchbox: now it is completely empty, just a napkin and cocoa crumbs. The parent smiles with relief, softly out of focus in the background. Slow push-in, then a final 1.5-second still hold with calm cocoa-brown negative space on the left third for the slogan and the "message us on WhatsApp" button added later in editing.

Style: realistic photography, 35mm lens look, shallow depth of field, gentle film grain, color palette of cocoa brown (#4A2018), kraft (#E8CDB3), cream (#FBF3E8), warm gold light (#E3A33B) and small brick-red accents (#BA4036). Audio: soft ambient kitchen sounds only, no voiceover, no music with lyrics.
Avoid: children as protagonists or children's faces (at most a backpack or a child's silhouette leaving the frame, out of focus), any text, letters, subtitles or logos generated in the image, cartoon or animated style, pills, syrups, medical or clinical settings, blood, liver dishes in close-up, flags, mascots, fast cuts.
```

## Después de generar: revisión crítica antes de usar

- El empaque debe ser la bolsa kraft real. Si la IA inventó letras o un logo distinto, se borra la etiqueta y se monta la real.
- Ningún niño protagonista ni cara de menor; si aparece, se regenera (Ley 30021 y Ley 29733).
- La lonchera vacía tiene que leerse en un segundo; si parece llena o confusa, se regenera.
- Sin texto dentro de la imagen; el texto lo pone la web.
- Para pauta real, el anuncio cierra con «Hierro medido. Sabor a brownie.», el botón «Enviar mensaje» y el octógono solo si el análisis lo exigiera (hoy: 0 octógonos).
