# Las historias de Andi · guiones y prompts para ilustrar las viñetas

Cinco historietas de seis viñetas para el modo niños de la app. **Andi es el niño del envase** (7 años, chullo rojo con grecas, trenzas, chompa roja) y **Killa es su llamita**. Los textos que se leen ya están en la app (`src/data/historietas.ts`): este documento sirve para generar los 30 dibujos en Nano Banana (Gemini) y activarlos.

Reglas que no se negocian (Ley 30021, modo niños): en las viñetas **nunca** aparece el producto, la marca, el logo, un empaque ni un precio. Solo Andi, Killa, personas del campo, lugares del Perú y comida de verdad. Nada de texto dentro de la imagen: el texto lo pone la app.

## 1. Hoja de personaje (pégala al inicio de TODOS los prompts)

```text
CHARACTER SHEET — "Andi", a 7-year-old Andean boy, the mascot of a Peruvian children's app, and "Killa", his baby llama.
Style: flat vector children's book illustration, soft rounded shapes, gentle soft shading, warm palette, clean edges, no outlines or very thin warm-brown outlines, no texture, no text, no logos, no packaging, no watermark.
ANDI: round face, light-tan skin, rosy round cheeks, big happy closed-curve eyes (or large dark round eyes when surprised), small nose, big smile. Black hair with straight bangs and two braids with small brick-red ties. Red chullo hat #BA4036 with a golden #E3A33B zigzag/triangle band, a darker wine #8A1C2B stripe, ear flaps and small olive-green #7C8A3A tassels, a golden pompom on top. Red knitted sweater #BA4036 with golden trim at the waist. Short and sturdy, about 3.5 heads tall.
KILLA: small plump cream-beige llama #FBF3E8 with slightly darker beige shading, very large round head, huge glossy dark-brown eyes with white highlights, pink round cheeks, small fluffy tuft of wool on the head, two long leaf-shaped ears with pink inner ears, tiny legs with dark-brown hooves, happy smile. About as tall as Andi's shoulder.
Palette: cream #FBF3E8, cocoa brown #4A2018, brick red #BA4036, golden #E3A33B, olive green #7C8A3A, kraft #D9B48F, sky blue #BFDDF2.
Format: portrait 4:5 (1024x1280), full scene with background, characters clearly visible, generous margins, nothing important near the edges.
```

**Imagen base primero.** Genera una sola imagen con la hoja de personaje y este texto: `Andi and Killa standing side by side, facing the camera, smiling, on a plain cream background #FBF3E8, full body, centered.` Guárdala como `referencia.png` y **adjúntala en todos los prompts siguientes** con la línea: `Use the attached image as the exact character reference for Andi and Killa. Keep the same characters, proportions, colors and style. Only draw the scene described below.`

## 2. Las viñetas (archivo → prompt)

Cada prompt va después de la hoja de personaje y de la línea de referencia. Guarda cada imagen con el nombre indicado.

### Historia 1 · La abuela y el secreto de la puna (Puno, sangrecita)

| Archivo | Prompt |
|---|---|
| `e1-1.png` | Andi and Killa walking across the high Andean puna; rolling green and ochre hills, a huge blue sky, a small adobe house far away. Wide, calm, morning light. |
| `e1-2.png` | Inside an adobe kitchen with a clay stove. Grandmother (round, kind, braids, wide hat, colorful shawl) offers Andi a bowl of dark stew; Andi crosses his arms and wrinkles his nose; Killa peeks from the doorway. |
| `e1-3.png` | Grandmother points through the window: outside, Killa runs happily across the grass. Andi looks doubtful, hands on his hips. |
| `e1-4.png` | Grandmother mixes a dark cocoa batter in a clay bowl, smiling with a secret; Andi spies from behind the table, on tiptoe, only his eyes and chullo visible. |
| `e1-5.png` | Andi bites a small round cocoa cake with wide amazed eyes; grandmother smiles with one finger on her lips; Killa claps her front hooves. Warm kitchen light. |
| `e1-6.png` | Andi and Killa on the top of a hill, arms raised in triumph, orange sunset over the puna, long soft shadows. |

### Historia 2 · El valle de la lúcuma (Huaral, Lima)

| Archivo | Prompt |
|---|---|
| `e2-1.png` | A green coastal valley with small farms and fruit trees under a strong sun; Andi fans himself with his hand and Killa sticks out her tongue from the heat. |
| `e2-2.png` | A farmer with a straw hat and a friendly smile stands beside a lúcuma tree heavy with round green fruits; Andi looks up with curiosity. |
| `e2-3.png` | Close-up: Andi holds a lúcuma cut in half showing bright orange pulp; his eyes are wide with wonder; Killa sniffs it. |
| `e2-4.png` | A gust of wind: leaves flying, lúcumas scattered on the ground; the farmer holds his head with both hands, worried. |
| `e2-5.png` | Andi carries an armful of lúcumas; Killa wears two colorful woven saddlebags full of fruit; the orchard looks tidy again. |
| `e2-6.png` | The three sit under the tree eating lúcuma ice cream in cones; Killa has an ice-cream mustache; golden afternoon light. |

### Historia 3 · Las terrazas de cañihua (Puno)

| Archivo | Prompt |
|---|---|
| `e3-1.png` | Stepped Andean terraces covered with cañihua plants in red, yellow and purple; deep blue Lake Titicaca in the background; Andi and Killa look from a path. |
| `e3-2.png` | Aunt Rosa (middle-aged, colorful woven shawl, bowler-style hat) holds a bunch of cañihua; in her open palm, tiny grains; Andi leans in to look. |
| `e3-3.png` | Andi crouches among the small plants, straining to pick the tiny seeds; Killa sniffs the colorful flowers beside him. |
| `e3-4.png` | Killa puffs her cheeks and blows gently; a shower of tiny seeds falls onto a colorful woven blanket spread on the ground; Andi laughs. |
| `e3-5.png` | A clay pot over a small fire with grains toasting; soft wisps of smoke; Andi smells it with closed eyes and a happy smile. |
| `e3-6.png` | Aunt Rosa closes Andi's small backpack; behind them the hill and the lake; Killa wears a cañihua flower on one ear. |

### Historia 4 · El cacao de la selva (San Martín)

| Archivo | Prompt |
|---|---|
| `e4-1.png` | Dense green jungle with a brown river; red and blue macaws in the trees; Andi and Killa ride in a wooden canoe, amazed. |
| `e4-2.png` | Doña Lili (jungle farmer, warm smile, headscarf) opens a yellow cacao pod showing shiny white beans; Andi peeks inside. |
| `e4-3.png` | Andi with a scrunched face and tongue out after biting a raw cacao bean; Killa does the same, a bean popping out of her mouth. Funny, no sadness. |
| `e4-4.png` | Cacao beans drying on blankets under the sun; Andi moves them with a wooden rake; Doña Lili supervises kindly. |
| `e4-5.png` | A toasting pot with warm aromatic smoke; curious little monkeys peeking through the leaves; Killa sniffs with closed eyes. |
| `e4-6.png` | Andi and Killa with cups of hot chocolate by the river at a pink sunset; peaceful and cozy. |

### Historia 5 · El plátano del norte (Piura)

| Archivo | Prompt |
|---|---|
| `e5-1.png` | A banana plantation with giant leaves, bright sun, light-blue sky; Andi and Killa rest in the shade of a leaf. |
| `e5-2.png` | Andi jumps with stretched arms under a tall bunch of bananas that is out of reach; Killa watches thoughtfully. |
| `e5-3.png` | Andi stands on Killa's back and grabs the banana bunch; both with triumphant faces. |
| `e5-4.png` | Two hands of bananas side by side, one green and one yellow with brown speckles; Andi compares them, finger on chin. |
| `e5-5.png` | A small-town square in Piura with colorful houses; kids playing ball with Andi; Killa as the goalkeeper. |
| `e5-6.png` | Andi's open backpack showing five little treasures: a small jar, a lúcuma, a handful of grains, a cacao pod and a banana; behind, a map of Peru painted on a wall; Andi and Killa proud. No text on the map. |

## 3. Recortar, pesar y activar

1. Pon las 30 imágenes en una carpeta nueva, por ejemplo `entrada-historietas/`, con los nombres de las tablas.
2. Redúcelas a 800 × 1000 px y a 150 KB o menos (JPG o PNG). Con ImageMagick: `magick e1-1.png -resize 800x1000 -quality 82 public/img/historietas/e1-1.png`. Si no lo tienes, cualquier compresor en línea sirve; lo importante es el nombre y el peso.
3. Copia los archivos a `public/img/historietas/`.
4. Edita `src/data/historietas-imagenes.ts` y lista los que existen:

   ```ts
   export const IMAGENES_HISTORIETAS: string[] = ['e1-1.png', 'e1-2.png', 'e1-3.png', 'e1-4.png', 'e1-5.png', 'e1-6.png'];
   ```

   Mientras falte una imagen, la app muestra la escena escrita con Andi y Killa, así que puedes activar historia por historia.
5. `npm run deploy`.

## 4. Andi ilustrado en el resto de la app

En `PROMPTS-andi.md` están los prompts de las cuatro expresiones de Andi (`feliz`, `wow`, `piensa`, `duerme`) y de Killa con sus trajes. Son los dibujos que reemplazan a los SVG en el mapa, los juegos y las celebraciones.
