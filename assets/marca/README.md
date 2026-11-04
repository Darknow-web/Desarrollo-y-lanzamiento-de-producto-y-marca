# Piezas de marca con Andi

| Archivo | Qué es | Medida |
|---|---|---|
| `logo-con-andi.png` | Logo oficial con Andi asomado encima, en pegatina blanca. Fondo transparente | 1660 × 1340 px |
| `logo-con-andi-crema.png` | Lo mismo sobre fondo crema (FBF3E8) | 1660 × 1340 px |
| `frase-slogan.png` | «Dulce para ellos. Tranquilidad para ti.» en globo con rayitos dorados. Fondo transparente | 1673 × 498 px |
| `frase-slogan-crema.png` | Lo mismo sobre fondo crema | 1673 × 498 px |
| `logo-con-andi.pdf`, `frase-slogan.pdf`, `piezas-marca.pdf` | Las mismas piezas en PDF (fondo blanco, texto en vector; el combinado trae las dos páginas) | — |
| `banner-mesa-150x75.pdf` | Banner frontal de mesa (faldón) para el stand de Expoinnova: 150 × 75 cm más 3 cm de sangría por lado (archivo de 156 × 81 cm). Logo en vector, frase y QR a la app en vector, Andi en imagen | 1560 × 810 mm |
| `banner-mesa-vista.png` | Vista previa del banner | 1560 × 810 px |
| `logo-andibite.svg` | Logo oficial vectorizado (trazado automático en tres colores) para impresiones grandes | vector |
| `andi-envase.png` | Andi recortado (sin fondo), generado en Nano Banana a partir de la ilustración del envase | 1714 × 1450 px |

Colores: café 4A2018, ladrillo BA4036, dorado E3A33B, crema FBF3E8. Tipografía de la frase: Baloo 2 (la de la app).

**Regenerar** (desde la raíz del repo): `node assets/marca/fuente/build.mjs` (piezas) y `node assets/marca/fuente/build-banner.mjs` (banner de mesa; se dibuja en `fuente/banner-mesa.html`). Las piezas se dibujan en `fuente/piezas.html`; el logo oficial es `fuente/logo_color.png` y el recorte `fuente/andi-envase.png`.
