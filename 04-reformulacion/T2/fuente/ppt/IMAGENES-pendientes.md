# Imágenes pendientes de la sustentación T2 (T2_Sustentacion-AndiBite.pptx)

Cómo se reemplaza un espacio reservado "IMAGEN n":

1. Guarda la foto en `fuente/ppt/img/deck/entrantes/imagen_n.jpg` (también sirve .png o .webp).
2. Desde `fuente/ppt`, corre `python3 -I prep_img.py`: la deja en `img/deck/imagen_n.jpg` (1200 px de ancho como máximo, calidad 75).
3. En `t2_sustentacion_slides.js`, cambia `n: null` por `n: 'img/deck/imagen_n.jpg'` en el objeto `IMG` (arriba del archivo).
4. Vuelve a armar el PPT con los comandos del encabezado del script (armar, `dedup_media.py` y `add_anim.py`). El script recorta la foto al tamaño exacto del espacio.

Ya no hacen falta (se usan fotos reales de `T2/img/evidencia/`): las 2 capturas de entrevistas (diapositiva 14) y las fotos de la degustación con el empaque impreso (diapositiva 18, 4 madres).

| N.º | Diapositiva | Qué va | Tamaño recomendado | Tipo |
|---|---|---|---|---|
| 1 | 2 · "24 %" (mitad derecha, a sangre) | Manos de un padre o una madre armando la lonchera en la mañana | 1200 × 1520 px, vertical | Generada |
| 2 | 7 · Propuesta de valor (franja derecha, a sangre) | Lonchera kraft abierta con un mini brownie, fruta y agua | 1200 × 1755 px, vertical | Foto real del brownie (preferible) o generada |
| 3 | 14 · Qué hicimos (abajo a la derecha) | Captura de pantalla del focus 1 virtual (videollamada con los participantes) | 1200 × 465 px, horizontal muy ancha | Foto real (evidencia). Recortar a la franja central; tapar o difuminar caras si alguien no dio permiso |
| 4 | 16 · Hallazgo 1, foto a sangre completa | Lonchera que vuelve intacta del colegio | 1920 × 1080 px (se reduce a 1200 × 675) | Generada. Dejar la mitad izquierda oscura y limpia: ahí va el texto |

## Prompts para Nano Banana (en inglés)

Reglas comunes: foto realista, luz natural cálida de mañana, paleta de cacao, kraft y crema, cocina limeña real de clase media alta, sin texto ni logos dentro de la imagen, sin niños como personaje principal, sin bandera, sin estereotipos andinos de souvenir, sin pastillas ni ambiente de clínica.

**IMAGEN 1 · lonchera de la mañana (vertical 4:5)**

```
Photorealistic close-up, vertical 4:5. Early morning in a modern Lima apartment kitchen, soft warm window light from the left. An adult's hands (parent, sleeves of a casual work shirt) packing a child's reusable lunchbox on a light wooden counter: a small kraft paper pouch, a peeled mandarin, a small water bottle. Background softly blurred, cream walls, a cup of coffee and a phone on the counter suggest a rushed weekday. Color palette: cocoa brown, kraft, cream, a touch of warm terracotta red. Shallow depth of field, 50 mm lens, natural skin tones. No text, no logos, no faces, no children visible.
```

**IMAGEN 2 · lonchera con el mini brownie (vertical, franja alta)**

Si hay foto real del brownie del prototipo, usar la real (el manual pide producto real en las fotos de venta). Si no, este prompt sirve solo para la presentación interna:

```
Photorealistic overhead shot, tall vertical format (about 2:3). An open kraft-colored lunchbox on a cream linen napkin over a light oak table. Inside: one small square fudgy chocolate brownie (about 4 cm), dark cocoa color with a slightly crackled top, next to mandarin segments and a small glass water bottle. A parent's hand gently closing the lid at the top edge of the frame. Warm morning light, soft shadows, cocoa brown, kraft and cream palette with a small accent of brick red. Clean, honest, everyday Lima home. No text, no labels, no logos, no children.
```

**IMAGEN 4 · lonchera que vuelve intacta (16:9, a sangre completa)**

```
Photorealistic wide 16:9 photo, late afternoon. A child's open lunchbox resting on a kitchen counter after school, the food untouched: a green spinach pancake, steamed broccoli florets and a sliced apple already browning. A small school backpack slumped beside it. The left half of the frame is darker and uncluttered (deep cocoa-brown wall in soft shadow) to leave room for text; the lunchbox sits in the right third, lit by warm side light. Palette: cocoa brown, cream, kraft, muted green. Quiet, slightly melancholic mood, not dramatic. No people, no text, no logos.
```
