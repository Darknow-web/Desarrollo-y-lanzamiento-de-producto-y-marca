# AndiBite · Presentación animada de la feria

**En línea:** https://andibite-feria.cingacordova.workers.dev (se puede abrir una lámina directa con `#n`, por ejemplo `…/#28` abre «Síguenos»).

**Sin internet:** descomprime `AndiBite - Presentacion animada.zip` y abre `index.html` con Chrome o Edge. Todo va dentro (letras, imágenes y QR).

## Teclas

| Tecla | Qué hace |
|---|---|
| → · Espacio · Enter · clic | Siguiente lámina |
| ← · Retroceso | Lámina anterior |
| F | Pantalla completa |
| P | +1 en «Probaron» |
| N | +1 en «La notaron» |
| Mayús+P · Mayús+N | −1 |
| H | Muestra u oculta esta ayuda en pantalla |
| Ctrl+Alt+0 | Pone el contador en cero |

El contador se guarda en el navegador: no se borra al cambiar de lámina ni al recargar. Se ve en la lámina 19 y en la 28.

## Las 28 láminas, en 5 partes

1. **Diana** (1-5): portada, la lonchera vuelve llena, cómo investigamos, nadie la notó, el valor se duplicó.
2. **Patty** (6-11): público, Rodrigo, producto con el mapa de ingredientes, dos sabores, marca, app.
3. **Ade** (12-14): precio, canales, centro comercial paso a paso.
4. **Angie** (15-21): «¿La notaste?», por qué, tres actos, cuatro etapas, contador y «Pásale la prueba», creadores y prensa, redes.
5. **Carlos** (22-28): marketing, más colegios y resultado mes a mes, punto de equilibrio, ROI, financiamiento, cierre y «Síguenos» (se queda en pantalla en el stand).

## Cambiar los links de los QR

Abre `config.js` y reemplaza los links de Instagram, TikTok y Facebook. Si un link queda vacío, la tarjeta dice «QR pronto».

## Para quien edita

`fuente.html` es la fuente; `node build.mjs <carpeta-capturas> [pdf]` arma `index.html` (inserta el mapa de `peru.json`), toma capturas y exporta el PDF. Publicar: desde `despliegue/`, `node subir.mjs && npx wrangler deploy`.
