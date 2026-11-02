# Expoinnova 2026-2 · entregables de AndiBite

Carrera Administración y Marketing (categoría 3, ADN UPN) → metodología **Model Business Canvas**.

| Archivo | Qué es | Para qué entregable |
|---|---|---|
| `Informe-Expoinnova-AndiBite.pdf` | Informe del proyecto (Anexo 04): resumen, canvas, los 9 bloques, ODS, PMV y equipo. 10 páginas | Informe |
| `Informe-Expoinnova-AndiBite.docx` | El mismo informe en Word, por si el grupo quiere editarlo | Informe |
| `Banner-Canvas-AndiBite.png` | Model Business Canvas en el formato del Anexo 02 (1920 × 1080) | Banner digital y video |
| `Banner-Canvas-AndiBite.pdf` | El mismo banner en PDF | Banner digital |
| `md/Informe-Expoinnova-AndiBite.md` | Texto fuente del informe (de aquí salen el PDF y el Word) | — |
| `fuente/` | `banner.html` (el canvas), `portada.html`, `informe.css`, `build.mjs`, `unir.py` | — |

El video de presentación (máximo 2 minutos, en YouTube, sin logo de UPN) lo arma Carlos con `../web-presentacion/PITCH-video.md`.

**Regenerar todo** (desde esta carpeta): `node fuente/build.mjs`. Solo el banner: `node fuente/build.mjs banner`. Si cambias una cifra, cámbiala en el `.md` y en `banner.html`, y vuelve a correr el script.
