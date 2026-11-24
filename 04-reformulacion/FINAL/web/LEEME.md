# AndiBite · Presentación animada de la feria

**En línea:** https://andibite-feria.cingacordova.workers.dev (se puede abrir una lámina directa con `#n`, por ejemplo `…/#47` abre «Síguenos»).

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

El contador se guarda en el navegador: no se borra al cambiar de lámina ni al recargar. Se ve en la lámina 30 y en la 47.

## Las 47 láminas, en 5 partes

1. **Parte 1** (1-7): portada, propósito y visión, la lonchera vuelve llena, cómo investigamos, nadie la notó, el valor se duplicó y el live del focus.
2. **Parte 2** (8-13): público, Rodrigo, producto, dos sabores, marca y app.
3. **Parte 3** (14-21): de la estrategia al trabajo diario, FODA, FODA cruzado, estructura, Ansoff, BCG, contexto y El Niño, estrategia por cada P.
4. **Parte 4** (22-34): precio, canales, distribución selectiva, centro comercial, «¿La notaste?», tres actos, cuatro etapas, contador, creadores, redes, KPIs y CAC/LTV/NPS.
5. **Parte 5** (35-47): presupuesto de marketing, demanda por canal, ventas enero-diciembre, más colegios, punto de equilibrio, ROI, inversión y trámites, financiamiento, ciclo de vida, diversificación, responsabilidad social, cierre y «Síguenos» (se queda en pantalla en el stand).

## Cambiar los links de los QR

Abre `config.js` y reemplaza los links de Instagram y TikTok. Si un link queda vacío, la tarjeta dice «QR pronto».

## Para quien edita

`fuente.html` es la fuente; `node build.mjs <carpeta-capturas> [pdf]` arma `index.html` (inserta el mapa de `peru.json`), toma capturas y exporta el PDF. Publicar: desde `despliegue/`, `node subir.mjs && npx wrangler deploy`.
