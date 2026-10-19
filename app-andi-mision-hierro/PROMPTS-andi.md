# Andi: hoja de personaje y prompts para Nano Banana (Gemini image)

Andi es la llamita exploradora de **Andi, Misión Hierro** (AndiBite). Hoy la app la dibuja en SVG
(`src/components/Andi.tsx`). Con estos prompts puedes generar versiones ilustradas en Nano Banana, recortarlas
y activarlas en la app sin tocar código de los juegos.

## 1. Descripción fija del personaje (pégala en TODOS los prompts)

```text
CHARACTER SHEET — "Andi", a baby llama explorer mascot for a Peruvian children's app (ages 4–11).
Style: flat vector illustration, soft rounded shapes, kids-app mascot style, clean edges, subtle soft shading, no outlines or very thin warm-brown outlines, no texture, no text, no watermark.
Body: short, plump and round body; very large round head (about half of the total height); tiny rounded legs with small dark-brown hooves; small fluffy tuft of wool on top of the head; two long leaf-shaped ears with soft pink inside.
Face: huge glossy dark-brown eyes with a big white highlight and a smaller one, soft pink round cheeks, small cream muzzle with two tiny nostrils, a small happy smile.
Colors (brand palette): wool cream-beige #FBF3E8 with slightly darker beige #EEDAC0 shading, cocoa brown #4A2018 for hooves/eyes/outlines, brick red #BA4036, golden #E3A33B, olive green #7C8A3A, kraft #D9B48F. No other saturated colors.
Framing: full body, facing the camera, standing, centered, feet near the bottom, whole character visible with margin, square 1024x1024.
Background: FLAT SOLID PURE GREEN #00FF00 (chroma key), no gradient, no shadow on the ground, no props on the floor.
```

## 2. Imagen base (genera esta primero)

```text
[pega la descripción fija]
Expression: happy, relaxed smile, eyes looking at the camera. No clothes or accessories.
```

Guarda la imagen como `base-feliz.png`. **En cada prompt siguiente adjunta esta imagen base como referencia**
y escribe al inicio: `Use the attached image as the exact character reference. Keep the same character, proportions, colors, style, framing and green background. Only change what is described below.`

## 3. Expresiones (4, con la base adjunta)

| Archivo | Prompt (después de la línea de referencia) |
| --- | --- |
| `base-feliz.png` | (es la imagen base) |
| `base-wow.png` | `Expression: amazed and delighted, eyes extra big and sparkling, mouth open in a small round "wow", cheeks pinker. Same pose.` |
| `base-piensa.png` | `Expression: thinking, eyes looking up to the side, one eyebrow slightly raised, small wavy mouth. Same pose.` |
| `base-duerme.png` | `Expression: sleeping peacefully, eyes closed as two gentle curved lines, tiny relaxed smile, two small cocoa-brown "z" letters floating above the head (no other text). Same pose.` |

## 4. Looks (6, con la base adjunta, expresión feliz)

| Archivo | Prompt (después de la línea de referencia) |
| --- | --- |
| `look-explorador.png` | `Outfit: kraft-beige #D9B48F safari explorer hat with a wide brim and a cocoa-brown band, plus a small brick-red #BA4036 neckerchief knotted at the neck. Happy expression.` |
| `look-chef.png` | `Outfit: tall white puffy chef toque on the head and a brick-red #BA4036 neckerchief. Happy expression.` |
| `look-astronauta.png` | `Outfit: round transparent light-blue space helmet bubble around the whole head with a white rim, a light-gray collar ring at the neck and a small brick-red round badge on the chest. Happy expression.` |
| `look-deportista.png` | `Outfit: brick-red #BA4036 sport headband with a thin white stripe across the forehead, and an olive-green #7C8A3A sport jersey with a white horizontal stripe on the body. Happy expression.` |
| `look-pijama.png` | `Outfit: soft light-blue #A9C9E8 nightcap drooping to one side with a white pompom and a white band, and light-blue polka dots on the body like pajamas. Happy expression.` |
| `look-fiesta.png` | `Outfit: golden #E3A33B cone party hat with brick-red diagonal stripes and a red pompom on top, a small brick-red bow tie, and a few tiny confetti dots (red, olive, gold) floating around. Happy, excited expression.` |

Opcional: looks con expresión (`<look>-<animo>.png`, por ejemplo `chef-wow.png`): adjunta la imagen del look
y pide solo el cambio de expresión con el texto de la tabla 3.

## 5. Recortar y optimizar

1. Pon todas las imágenes generadas (PNG o JPG, con el fondo verde) en una carpeta nueva, por ejemplo `entrada/`.
   Nómbralas como en las tablas (`base-feliz.png`, `look-chef.png`...); el script pasa el nombre a minúsculas y cambia
   espacios por guiones.
2. Instala Pillow si no lo tienes: `pip install pillow`.
3. Corre desde la carpeta de la app:

   ```bash
   python3 -I scripts/recortar-andi.py entrada/ public/img/andi/
   ```

   El script quita el verde (con tolerancia y bordes suavizados, sin halo), recorta al contenido, centra el
   personaje en un lienzo de proporción 240:260 (la misma del SVG) y guarda cada PNG en 120 KB o menos.
   Al final imprime la línea lista para pegar en `src/data/andi-imagenes.ts`.

## 6. Activar las imágenes en la app

Edita `src/data/andi-imagenes.ts` y lista los archivos que existen en `public/img/andi/`:

```ts
export const IMAGENES_ANDI: string[] = [
  'base-feliz.png', 'base-wow.png', 'base-piensa.png', 'base-duerme.png',
  'look-explorador.png', 'look-chef.png', 'look-astronauta.png', 'look-deportista.png', 'look-pijama.png', 'look-fiesta.png',
];
```

`<Andi look="chef" animo="wow" />` busca en este orden: `chef-wow.png` → `look-chef.png` → `base-wow.png` →
`base-feliz.png`. Si no encuentra ninguna, dibuja el SVG. Mientras la lista esté vacía, todo sigue en SVG.

Luego `npm run build` y despliega como siempre (`npm run deploy` sube `public/` junto con la app).

## Reglas

- Nunca pongas texto, logos ni productos en las imágenes de Andi (modo niños, Ley 30021).
- Mantén el mismo encuadre en todas: cuerpo completo, de frente, centrado, 1024x1024, fondo verde liso.
- Si una imagen sale con sombra en el piso o fondo degradado, vuelve a generarla: el recorte no quedará limpio.
