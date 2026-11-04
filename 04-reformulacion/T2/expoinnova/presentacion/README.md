# AndiBite · presentación para el jurado (Expoinnova)

Presentación web de 6 pantallas (Vite + TypeScript + Reveal.js + GSAP + qrcode), con la marca AndiBite.

| # | Pantalla | Qué pasa al avanzar |
|---|---|---|
| 1 | Portada | Logo con Andi y slogan; luego los contadores 1 de cada 4 y 1 de cada 6 |
| 2 | Business Model Canvas | Franja con foto → ODS 2 (meta 2.2) y los 9 bloques; cada bloque se agranda al tocarlo |
| 3 | Prototipo | Empaque, 20 g · 1.9 mg · 0 octógonos, origen; luego la app con el QR real; luego el diferencial |
| 4 | Costos | Cascada S/1.67 + 0.43 + 0.98 + 0.63 = S/3.71 frente a S/3.96, cifras clave; luego «Cómo vendemos» |
| 5 | Plan de Responsabilidad Social | «Hierro que se comparte»: 4 compromisos |
| 6 | Elevator pitch | Video de YouTube listo con un clic; luego el cierre con logo, slogan y QR |

## URL

- Cloudflare Workers (worker `andibite-expo`): **https://andibite-expo.cingacordova.workers.dev** (publicada el 4-nov-2026; ver «Publicar»).

## Teclas

| Tecla | Acción |
|---|---|
| → · espacio · PageDown · clic en la pantalla | Avanzar (primero abre la pantalla, luego cada bloque) |
| ← · clic en el borde izquierdo | Volver |
| 1 a 9 | En el Canvas: agranda ese bloque (1 segmento … 9 costos) |
| Esc | Cierra el bloque agrandado o el menú |
| F | Pantalla completa |
| M | Menú de las 6 pantallas |
| Inicio / Fin | Primera / última pantalla |

En el video: clic en el botón rojo para reproducir. Si no hay internet, «Sin internet: video de la campaña» pone el video maestro local; «Abrir en YouTube» abre el pitch en otra pestaña.

## Correr en local

```bash
cd 04-reformulacion/T2/expoinnova/presentacion
npm install
npm run dev          # http://localhost:5173 con recarga en vivo
npm run build        # tsc + vite → dist/
npm run preview      # sirve dist/ en http://localhost:4173
```

`dist/` también se puede abrir desde cualquier servidor estático (las rutas son relativas).

## Publicarla en Google AI Studio

La presentación ya tiene URL pública propia (arriba). AI Studio es el canal que pide la feria; hay dos caminos (doc oficial: https://ai.google.dev/gemini-api/docs/aistudio-build-mode y https://aistudio.google.com/learn/sync-your-ai-studio-apps-with-github).

**Camino 1 · importar desde GitHub (recomendado si el importador acepta la carpeta):**
1. Entra a https://aistudio.google.com con la cuenta de Google y abre **Build**.
2. En la caja del prompt, botón **+** → **Import from GitHub**. Autoriza la cuenta de GitHub y elige el repositorio `darknow-web/desarrollo-y-lanzamiento-de-producto-y-marca`, rama `claude/andybites-repositioning-advisor-avbbi2`.
3. AI Studio convierte el proyecto a su runtime y abre la vista previa. Si pregunta por la carpeta de la app, indica `04-reformulacion/T2/expoinnova/presentacion`. Revisa que `index.html` y `src/` no hayan cambiado.
4. En **Settings → GitHub** deja la sincronización activa: los cambios que se hagan en AI Studio vuelven al repo y al revés.

**Camino 2 · subir la carpeta (si el importador exige la app en la raíz del repo):**
1. Arma un zip solo con esta carpeta, sin `node_modules`, `dist`, `capturas` ni `.wrangler` (desde la raíz del repo: `cd 04-reformulacion/T2/expoinnova && zip -r presentacion-ai-studio.zip presentacion -x "presentacion/node_modules/*" "presentacion/dist/*" "presentacion/capturas/*" "presentacion/.wrangler/*"`).
2. En **Build**, botón **+** → **Upload** (o arrastra el zip). AI Studio instala las dependencias y corre `npm run dev`.

**Después, en los dos casos:**
- **Share** (arriba a la derecha) → enlace para el jurado. Quien lo abre puede ver el código y hacer un fork; la clave API del dueño no se ve, pero las llamadas a Gemini (esta presentación no hace ninguna) se cobran a tu cuota.
- **Deploy** → Cloud Run si quieren una URL pública fuera de AI Studio (pide un proyecto de Google Cloud; el nivel Starter es gratuito pero limitado).
- Para cambios de texto se edita `index.html`; la vista previa se actualiza sola.

## Pantalla de espera (para la laptop mientras no llega el jurado)

`public/espera.html` es una página aparte que corre sola en loop: 10 escenas de 7 segundos con las frases clave de AndiBite (logo y slogan, la pregunta de la lonchera, 1 de cada 4 y 1 de cada 6, el producto, el video de campaña, «Hecho con lo nuestro», la app con QR, Andi y Killa, «Aquí sí vemos tu truco» y el cierre con «2 de enero · Jockey Plaza»).

- URL: **https://andibite-expo.cingacordova.workers.dev/espera.html**
- Tecla **F** o clic en «Pantalla completa» → pantalla completa; **Esc** sale. ← y → cambian de escena a mano. El cursor y el botón se esconden solos.
- Para pasar a la presentación: Esc y abrir la URL principal en otra pestaña (dejarla cargada desde antes).
- Las fuentes van en `public/fonts/` y las fotos en `public/img/`, así que también funciona sin internet si se abrió una vez (o desde `npm run preview`). El video se ve en Chrome y Edge.
- Respaldo en PDF de las 6 pantallas: `node scripts/pdf.mjs http://localhost:4173/ "../AndiBite - Presentacion Expoinnova (respaldo).pdf"` con `npm run preview` corriendo.

## Capturas de verificación

Con `npm run preview` corriendo: `node scripts/capturas.mjs http://localhost:4173/` (usa Playwright de `/opt/node-tools/node_modules` si no está en el proyecto). Deja en `capturas/` cada pantalla en vista inicial (`-a-inicial`) y con todos los fragmentos (`-b-completa`) en 1920×1080, 1366×768 y 390×844 (en celular, además `-scroll` con la pantalla completa), y el zoom del Canvas (`-02-c-zoom`). Informa textos cortados, desbordes y errores de consola.

## Publicar en Cloudflare

Igual que la web del T2: el Worker (`worker/index.ts`) entrega los archivos de `dist/` guardados en el KV `EXPO_ACTIVOS` (`wrangler.jsonc`: worker `andibite-expo`, cuenta `c0dbf17cab3142a5bd3f0af8a450f54b`, KV `5928f1c7ef2c466d9cef7e9613b32280`). La subida directa de assets estáticos (`"assets"`) no funciona desde la sesión en la nube (responde 401), por eso se usa KV.

```bash
npm run deploy      # build + subir dist/ al KV + wrangler deploy
# o paso a paso:
npm run build
npm run subir-activos
npx wrangler deploy
```

Desde la sesión en la nube de Claude el token lo inyecta el entorno (`CLOUDFLARE_API_TOKEN=dummy CLOUDFLARE_ACCOUNT_ID=c0dbf17cab3142a5bd3f0af8a450f54b`); desde una laptop, `npx wrangler login` antes. El iframe de YouTube está permitido en la política de seguridad del Worker (`frame-src`).

## Cambiar el QR o el video

- QR: `VITE_APP_URL=https://... npm run build` (por defecto https://andi-app.cingacordova.workers.dev).
- Video: `YT_ID` en `src/main.ts` y el enlace «Abrir en YouTube» en `index.html`.
