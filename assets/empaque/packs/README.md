# Stickers para los packs (bolsas doypack kraft)

Diseño para las dos bolsas que compró Carlos, con las medidas que tomó en la bolsa real (4-nov-2026).

| Pack | Bolsa | Sticker | Zonas del sticker (de arriba abajo) |
|---|---|---|---|
| Pack de 12 · 240 g | 12 × 18 cm, fuelle de 4 cm (bolsa «100 g») | 11 × 16.5 cm; se pega 1.5 cm por debajo del borde superior, centrado | A: panel frontal 8 cm (logo, nombre, sabor) · B: franja de 4 cm (el pliegue del fuelle; ilustración) · C: base 4.5 cm (franja café con íconos y peso neto) |
| Pack de 6 · 120 g | 10 × 15 cm, fuelle de 4 cm (bolsa «50 g») | 9 × 13.5 cm; se pega 1.5 cm por debajo del borde superior, centrado | A: 5.9 cm · B: 4 cm · C: 3.6 cm |

El texto importante va en la zona A, que se ve completa cuando la bolsa está parada. La zona B lleva la ilustración (aguanta el pliegue). La zona C es la base: lleva la franja de íconos y el paisaje, que pueden curvarse sin perder lectura.

## Archivos
- `AndiBite - Pack 12 - stickers a medida.pdf` y `AndiBite - Pack 6 - stickers a medida.pdf`: frente y reverso al tamaño exacto (para imprenta).
- `AndiBite - Pack 12 - hoja A4 para imprimir.pdf` (2 páginas) y `AndiBite - Pack 6 - hoja A4 para imprimir.pdf` (frente y reverso en una hoja): imprimir al 100 %, sin «ajustar a la página», y recortar por las marcas.
- `Pack 12 - frente.png`, `Pack 12 - reverso.png`, `Pack 6 - frente.png`, `Pack 6 - reverso.png`: a 300 dpi.
- `vista-conjunto.png`: las cuatro piezas juntas.

## Qué dice cada cara
- **Frente:** «Lo bueno también puede ser delicioso», logo, «Mini Brownie Nutritivo», cinta «Cacao + Plátano + Cañihua», «Sabor Andi · con sangrecita y un toque de canela», la ilustración de Andi, los tres íconos y el peso neto (240 g o 120 g). La cantidad de brownies va en la insignia roja.
- **Reverso:** «De nuestra tierra, a su lonchera», el **QR** que abre la app Andi directo en el plan de loncheras con IA (`https://andi-app.cingacordova.workers.dev/loncheras?codigo=AB-DEMO-2027`, 14 días por pack) con el código impreso debajo, qué lleva (ingredientes y origen), la caja «Por brownie (20 g)» (hierro hemo 1.9 mg, azúcar menor a 10 g por 100 g, 0 octógonos), la caja «Lote y cuidado» con espacios para lote y vencimiento, la línea legal (unidades, contenido neto, elaborado por AndiBite en INDDA-UNALM, R.S. en blanco, prototipo de evaluación) y el paisaje con «Orgullo peruano».

El código `AB-DEMO-2027` siempre está vigente en la app (sirve para la feria y las muestras). Para la venta, cada lote lleva su código `AB-XXXX-XXXX` generado desde el panel de la app; se cambia en `fuente/packs.html` y se vuelve a generar el QR con `segno`.

## Regenerar
```bash
node assets/empaque/packs/fuente/build-packs.mjs
```
Usa Playwright (Chromium) y las fuentes Fredoka, Caveat y Nunito de Google Fonts; las ilustraciones salen de `../assets_ilustraciones/` y el logo de `assets/marca/logo-andibite.svg`.
