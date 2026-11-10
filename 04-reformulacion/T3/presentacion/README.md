# AndiBite · T3 Investigación de mercados cualitativa

Presentación web interactiva (Vite + TypeScript + GSAP) del T3 del Grupo 2, UPN Los Olivos: avance del plan de marketing, los dos focus groups y lo que cambiamos por lo que aprendimos. Contenido: `../CONTENIDO-T3.md` (cifras de `../../T2/HECHOS_v7.md`).

## URL

**https://andibite-t3.cingacordova.workers.dev** (Cloudflare Workers, worker `andibite-t3`, archivos en el KV `T3_ACTIVOS`).

Se puede enlazar una pantalla directa con `#n`, por ejemplo `…/#8` abre los hallazgos.

## Las 14 pantallas

| # | Pantalla | Interacción |
|---|---|---|
| 1 | Portada | Empezar · Modo recorrido |
| 2 | Índice | Los 7 puntos de la rúbrica como botones |
| 3 | El plan en una página (bloque 1) | Pestañas Quién · Qué · Cómo · Cuánto, contadores |
| 4 | Campaña «Lo que nadie ve» (bloque 1) | Pestañas: la idea · carrusel de 10 piezas (flechas, miniaturas, agrandar) · 4 reels 9:16 (play, sin sonido al inicio, botón Sonido) · fases y medición |
| 5 | Cómo investigamos (bloque 2) | Embudo de 3 pasos clicables |
| 6 | Focus group 1 · Test de concepto (bloque 2) | Pestañas Ficha · Guía · Resultados · Evidencia (fotos que se agrandan) |
| 7 | Focus group 2 · Producto y marca (bloque 2) | Igual que el 6 |
| 8 | Principales hallazgos (bloque 3) | 8 tarjetas que se abren con la cita y la fuente; «Abrir todas» |
| 9 | Insights del consumidor (bloque 4) | 5 paneles: dicen → sienten → necesitan → lo que decidimos |
| 10 | Oportunidades de mejora (bloque 5) | Tabla «qué encontramos → qué ajustamos», fila por fila |
| 11 | Propuestas estratégicas (bloque 6) | 6 decisiones; las etiquetas H1…H8 e Insight n llevan a su hallazgo o insight |
| 12 | Conclusiones (bloque 7) | Tabla «antes → después», fila por fila, y el cierre |
| 13 | Lo que falta validar (bloque 7) | 4 pruebas antes del 2 de enero |
| 14 | Gracias | Volver al índice |

La barra superior siempre muestra el índice, los 7 bloques (el actual resaltado), el botón de modo recorrido y el número de pantalla.

## Teclas

| Tecla | Acción |
|---|---|
| → · espacio · PageDown | Siguiente paso (pestaña, paso del embudo, fila o tarjeta); al terminar, siguiente pantalla |
| ← · PageUp · Shift + espacio | Paso o pantalla anterior |
| 1 a 7 | Ir al bloque de la rúbrica |
| I | Índice |
| Inicio / Fin | Primera / última pantalla |
| R | Modo recorrido (encender / apagar) |
| F | Pantalla completa |
| Esc | Cerrar la foto agrandada |

En el celular: deslizar a la izquierda o derecha cambia de paso; el contenido largo se desplaza hacia abajo.

## Modo recorrido

Botón «Modo recorrido» (arriba a la derecha, o en la portada) o tecla R. Avanza solo cada 40 segundos; las pantallas con pestañas, filas o tarjetas reparten sus pasos dentro de su tiempo (plan, campaña, focus groups, hallazgos e insights tienen 80 s). En total son 20 tramos de 40 s: unos 13 minutos. Una línea dorada bajo la barra superior marca el tiempo que queda. Se detiene al tocar cualquier cosa (clic, toque, tecla o rueda del ratón).

## Correr en local

```bash
cd 04-reformulacion/T3/presentacion
npm install
npm run dev          # http://localhost:5173
npm run build        # tsc (página y worker) + vite → dist/
npm run preview      # sirve dist/ en http://localhost:4174
```

## Capturas

`capturas/` tiene las 14 pantallas a 1920 × 1080 (`desk-…`) y 390 × 844 (`movil-…`): estado inicial (`a-inicial`), cada pestaña o selección (`b-pasoN`), todo revelado (`b-completa`), el visor de fotos (`07-c-visor`) y el modo recorrido (`03-c-recorrido`). En celular, `-largo` es la pantalla completa desplazada. `capturas/informe.json` guarda la revisión automática (texto cortado, desbordes, errores de consola).

```bash
npm run preview            # en otra terminal
npm run capturas           # o: node scripts/capturas.mjs https://andibite-t3.cingacordova.workers.dev/
```

## Publicar en Cloudflare

```bash
CLOUDFLARE_API_TOKEN=… CLOUDFLARE_ACCOUNT_ID=c0dbf17cab3142a5bd3f0af8a450f54b npm run deploy
```

`deploy` compila, sube `dist/` al KV `T3_ACTIVOS` (`scripts/subir-activos.mjs`) y publica el worker (`worker/index.ts`, que sirve los archivos con respuestas por rangos para que los reels se reproduzcan en iPhone).

## Subirla a Google AI Studio

1. Arma un zip de esta carpeta sin `node_modules`, `dist`, `capturas` ni `.wrangler`. Desde `04-reformulacion/T3`:
   ```bash
   zip -r presentacion-t3.zip presentacion -x "presentacion/node_modules/*" "presentacion/dist/*" "presentacion/capturas/*" "presentacion/.wrangler/*"
   ```
2. Entra a https://aistudio.google.com, abre **Build** y en la caja del prompt usa **+ → Upload** (o arrastra el zip). AI Studio instala las dependencias y abre la vista previa con `npm run dev`.
3. Otra opción: **+ → Import from GitHub**, elige el repositorio y la rama, e indica la carpeta `04-reformulacion/T3/presentacion` si la pide.
4. **Share** da el enlace para la profesora. La presentación no llama a Gemini, así que no gasta cuota.
