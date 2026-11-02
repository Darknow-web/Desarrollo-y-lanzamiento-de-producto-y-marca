# Expoinnova 2026-2 · entregables de AndiBite

Carrera Administración y Marketing (categoría 3, ADN UPN) → metodología **Model Business Canvas**.

| Archivo | Qué es | Para qué entregable |
|---|---|---|
| `AndiBite - Informe del proyecto.pdf` | Informe del proyecto (Anexo 04): resumen, canvas, los 9 bloques, ODS, PMV y equipo. 10 páginas | Informe |
| `AndiBite - Informe del proyecto.docx` | El mismo informe en Word, por si el grupo quiere editarlo | Informe |
| `AndiBite - Banner Canvas.png` | Model Business Canvas en el formato del Anexo 02 (1920 × 1080) | Banner digital y video |
| `AndiBite - Banner Canvas.pdf` | El mismo banner en PDF | Banner digital |
| `md/Informe-Expoinnova-AndiBite.md` | Texto fuente del informe (de aquí salen el PDF y el Word) | — |
| `fuente/` | `banner.html` (el canvas), `portada.html`, `informe.css`, `build.mjs`, `unir.py` | — |

El video de presentación (máximo 2 minutos, en YouTube, sin logo de UPN) lo arma Carlos con `../web-presentacion/PITCH-video.md`.

**El enlace del video de YouTube** se escribe en `fuente/video_url.txt` (una sola línea) y aparece en la portada y en el resumen del informe. El formulario de la feria pide que los archivos lleven el nombre de la idea de negocio: por eso se llaman «AndiBite - …», y pesan menos de 1 MB (el límite es 10 MB).

**Regenerar todo** (desde esta carpeta): `node fuente/build.mjs`. Solo el banner: `node fuente/build.mjs banner`. Si cambias una cifra, cámbiala en el `.md` y en `banner.html`, y vuelve a correr el script.
