# Andi y Killa: hojas de personaje y prompts para Nano Banana (Gemini image)

**Andi es el niño del envase de AndiBite** (7 años, chullo rojo con grecas, trenzas, chompa roja). Es quien habla en
Misión Hierro y el protagonista de «Las historias de Andi». **Killa es su llamita**: la que se viste en «Viste a Killa» y
acompaña a Andi en los juegos. Hoy la app dibuja a los dos en SVG (`src/components/AndiNino.tsx` y `src/components/Killa.tsx`).
Con estos prompts puedes generar versiones ilustradas, recortarlas y activarlas sin tocar el código de los juegos.

> **Estado al 4-nov-2026:** ya están activas `andi/feliz.png`, `wow.png`, `piensa.png`, `duerme.png` y `saluda.png` (Andi con los brazos abiertos, para las bienvenidas), y `killa/base-feliz.png`, `base-wow.png`, `base-duerme.png` y `look-explorador.png`. Faltan `base-piensa.png` y los otros 10 looks de Killa (B4) y las 30 viñetas de `HISTORIETAS-andi.md`. Mientras falte un look, «Viste a Killa» lo dibuja en SVG.

## A. Andi (el niño)

### A1. Descripción fija (pégala en todos los prompts de Andi)

```text
CHARACTER SHEET — "Andi", a 7-year-old Andean boy, mascot of a Peruvian children's app (ages 4–11), drawn in the same style as the product packaging illustration.
Style: flat vector children's illustration, soft rounded shapes, gentle soft shading, clean edges, no outlines or very thin warm-brown outlines, no texture, no text, no watermark.
Face and hair: round face, light-tan skin, rosy round cheeks, big happy closed-curve eyes, small nose, big open smile. Black hair with straight bangs and two braids with small brick-red ties.
Clothes: red chullo hat #BA4036 with a golden #E3A33B zigzag/triangle band and a darker wine #8A1C2B stripe, ear flaps with small olive-green #7C8A3A tassels and a golden pompom on top; red knitted sweater #BA4036 with golden trim at the waist.
Proportions: short and sturdy, about 3.5 heads tall, big head.
Framing: full body, facing the camera, standing, centered, feet near the bottom, whole character visible with margin, square 1024x1024.
Background: FLAT SOLID PURE GREEN #00FF00 (chroma key), no gradient, no shadow on the ground, no props.
```

### A2. Las cuatro expresiones

| Archivo | Prompt (después de la descripción fija; adjunta `feliz.png` como referencia en las otras tres) |
| --- | --- |
| `feliz.png` | `Expression: happy, eyes closed in two joyful curves, big smile. Arms relaxed at the sides.` |
| `wow.png` | `Expression: amazed and delighted, eyes wide open and round, mouth open in a small round "wow", cheeks pinker. Same pose.` |
| `piensa.png` | `Expression: thinking, eyes open looking up to the side, one eyebrow slightly raised, small wavy mouth, one hand on the chin. Same framing.` |
| `duerme.png` | `Expression: sleeping peacefully, eyes closed as two gentle curved lines, tiny relaxed smile, two small cocoa-brown "z" letters floating above the head (no other text). Same pose.` |

Recorta con `python3 -I scripts/recortar-andi.py entrada-andi/ public/img/andi/` y activa en `src/data/andi-imagenes.ts`:

```ts
export const IMAGENES_ANDI: string[] = ['feliz.png', 'wow.png', 'piensa.png', 'duerme.png'];
```

Las viñetas de las historietas (Andi y Killa en escenas del Perú) están en `HISTORIETAS-andi.md`.

## B. Killa (la llamita)

### B1. Descripción fija (pégala en todos los prompts de Killa)

```text
CHARACTER SHEET — "Killa", a baby llama, the pet and companion of Andi, for a Peruvian children's app (ages 4–11).
Style: flat vector illustration, soft rounded shapes, kids-app mascot style, clean edges, subtle soft shading, no outlines or very thin warm-brown outlines, no texture, no text, no watermark.
Body: short, plump and round body; very large round head (about half of the total height); tiny rounded legs with small dark-brown hooves; small fluffy tuft of wool on top of the head; two long leaf-shaped ears with soft pink inside.
Face: huge glossy dark-brown eyes with a big white highlight and a smaller one, soft pink round cheeks, small cream muzzle with two tiny nostrils, a small happy smile.
Colors (brand palette): wool cream-beige #FBF3E8 with slightly darker beige #EEDAC0 shading, cocoa brown #4A2018 for hooves/eyes/outlines, brick red #BA4036, golden #E3A33B, olive green #7C8A3A, kraft #D9B48F. No other saturated colors.
Framing: full body, facing the camera, standing, centered, feet near the bottom, whole character visible with margin, square 1024x1024.
Background: FLAT SOLID PURE GREEN #00FF00 (chroma key), no gradient, no shadow on the ground, no props on the floor.
```

### B2. Imagen base (genera esta primero)

```text
[pega la descripción fija]
Expression: happy, relaxed smile, eyes looking at the camera. No clothes or accessories.
```

Guarda la imagen como `base-feliz.png`. **En cada prompt siguiente adjunta esta imagen base como referencia**
y escribe al inicio: `Use the attached image as the exact character reference. Keep the same character, proportions, colors, style, framing and green background. Only change what is described below.`

### B3. Expresiones (4, con la base adjunta)

| Archivo | Prompt (después de la línea de referencia) |
| --- | --- |
| `base-feliz.png` | (es la imagen base) |
| `base-wow.png` | `Expression: amazed and delighted, eyes extra big and sparkling, mouth open in a small round "wow", cheeks pinker. Same pose.` |
| `base-piensa.png` | `Expression: thinking, eyes looking up to the side, one eyebrow slightly raised, small wavy mouth. Same pose.` |
| `base-duerme.png` | `Expression: sleeping peacefully, eyes closed as two gentle curved lines, tiny relaxed smile, two small cocoa-brown "z" letters floating above the head (no other text). Same pose.` |

### B4. Looks (11, con la base adjunta, expresión feliz)

| Archivo | Prompt (después de la línea de referencia) |
| --- | --- |
| `look-explorador.png` | `Outfit: kraft-beige #D9B48F safari explorer hat with a wide brim and a cocoa-brown band, plus a small brick-red #BA4036 neckerchief knotted at the neck. Happy expression.` |
| `look-chef.png` | `Outfit: tall white puffy chef toque on the head and a brick-red #BA4036 neckerchief. Happy expression.` |
| `look-astronauta.png` | `Outfit: round transparent light-blue space helmet bubble around the whole head with a white rim, a light-gray collar ring at the neck and a small brick-red round badge on the chest. Happy expression.` |
| `look-deportista.png` | `Outfit: brick-red #BA4036 sport headband with a thin white stripe across the forehead, and an olive-green #7C8A3A sport jersey with a white horizontal stripe on the body. Happy expression.` |
| `look-pijama.png` | `Outfit: soft light-blue #A9C9E8 nightcap drooping to one side with a white pompom and a white band, and light-blue polka dots on the body like pajamas. Happy expression.` |
| `look-fiesta.png` | `Outfit: golden #E3A33B cone party hat with brick-red diagonal stripes and a red pompom on top, a small brick-red bow tie, and a few tiny confetti dots (red, olive, gold) floating around. Happy, excited expression.` |
| `look-chullo.png` | `Outfit: red #BA4036 Andean chullo hat with a golden #E3A33B zigzag band, a wine #8A1C2B stripe, ear flaps with small olive-green tassels and a golden pompom on top. Happy expression.` |
| `look-chalina.png` | `Outfit: a long olive-green #7C8A3A knitted scarf with golden #E3A33B stripes wrapped around the neck, one end hanging down the chest. Happy expression.` |
| `look-poncho.png` | `Outfit: a traditional Andean poncho over the body, horizontal stripes brick red #BA4036, golden #E3A33B and olive green #7C8A3A, with a small cream geometric pattern, fringe at the bottom edge. Happy expression.` |
| `look-sombrero.png` | `Outfit: a wide-brim natural straw hat (Piura style) with a brick-red #BA4036 ribbon band. Happy expression.` |
| `look-marinera.png` | `Outfit: a white blouse with a flowing brick-red #BA4036 skirt with golden #E3A33B trim like a marinera dancer, a small red bow at the neck and a red flower behind one ear. Happy expression.` |

Opcional: looks con expresión (`<look>-<animo>.png`, por ejemplo `chef-wow.png`): adjunta la imagen del look
y pide solo el cambio de expresión con el texto de la tabla 3.

### B5. Recortar y optimizar

1. Pon todas las imágenes generadas (PNG o JPG, con el fondo verde) en una carpeta nueva, por ejemplo `entrada/`.
   Nómbralas como en las tablas (`base-feliz.png`, `look-chef.png`...); el script pasa el nombre a minúsculas y cambia
   espacios por guiones.
2. Instala Pillow si no lo tienes: `pip install pillow`.
3. Corre desde la carpeta de la app:

   ```bash
   python3 -I scripts/recortar-andi.py entrada-killa/ public/img/killa/
   ```

   El script quita el verde (con tolerancia y bordes suavizados, sin halo), recorta al contenido, centra el
   personaje en un lienzo de proporción 240:260 (la misma del SVG) y guarda cada PNG en 120 KB o menos.
   Al final imprime la línea lista para pegar en `src/data/killa-imagenes.ts`.

### B6. Activar las imágenes en la app

Edita `src/data/killa-imagenes.ts` y lista los archivos que existen en `public/img/killa/`:

```ts
export const IMAGENES_KILLA: string[] = [
  'base-feliz.png', 'base-wow.png', 'base-piensa.png', 'base-duerme.png',
  'look-explorador.png', 'look-chef.png', 'look-astronauta.png', 'look-deportista.png', 'look-pijama.png', 'look-fiesta.png',
  'look-chullo.png', 'look-chalina.png', 'look-poncho.png', 'look-sombrero.png', 'look-marinera.png',
];
```

`<Killa look="chef" animo="wow" />` busca en este orden: `chef-wow.png` → `look-chef.png` → `base-wow.png` →
`base-feliz.png`. Si no encuentra ninguna, dibuja el SVG. Mientras la lista esté vacía, todo sigue en SVG.

Luego `npm run build` y despliega como siempre (`npm run deploy` sube `public/` junto con la app).

## Reglas

- Nunca pongas texto, logos ni productos en las imágenes de Andi ni de Killa (modo niños, Ley 30021).
- Mantén el mismo encuadre en todas: cuerpo completo, de frente, centrado, 1024x1024, fondo verde liso.
- Si una imagen sale con sombra en el piso o fondo degradado, vuelve a generarla: el recorte no quedará limpio.
