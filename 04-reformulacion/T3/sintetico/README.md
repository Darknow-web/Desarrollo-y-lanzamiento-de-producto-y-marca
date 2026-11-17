# Focus groups simulados · público A y B (noviembre de 2026)

> **Es una simulación.** 380 perfiles sintéticos de papás, mamás y cuidadores de nivel A y B de Lima, interpretados por un modelo de IA, en 38 grupos de 10 moderados por una investigadora también simulada. Sirve para ordenar hipótesis y afinar la guía de la investigación real. **No es evidencia de mercado y no se puede presentar como focus groups realizados.**

## Qué leer

| Archivo | Qué es |
|---|---|
| `INFORME-investigadora.md` | El informe final: dolores, el lugar del hierro, necesidades, insights, validación del producto y de la marca, precio, narrativa propuesta y qué comprobar con familias reales |
| `RESULTADOS-cuantitativos.md` | Las tablas por nivel (A, B1, B2) y por tipo de perfil |
| `PERFIL-AB-fuentes.md` | La investigación previa del perfil A y B, con fuentes, lo que no se encontró y las proporciones usadas (casi todas son supuestos) |
| `datos/informes-grupo.md` | El informe de cada uno de los 38 grupos |
| `datos/personas.json`, `datos/respuestas.json`, `datos/informes-grupo.json` | Los 380 perfiles, sus respuestas en las dos rondas y los informes en bruto |

## Cómo se hizo

1. Investigación del perfil A y B en fuentes públicas (APEIM, ENDES, Ipsos, Kantar).
2. 380 perfiles generados con azar reproducible a partir de esas proporciones: 91 de nivel A, 106 de B1 y 183 de B2. A cada perfil se le asignaron hechos y circunstancias (hogar, trabajo, colegio, quién arma la lonchera, cómo come el hijo), no opiniones.
3. Dos rondas por grupo: primero hábitos y dolores sin mostrar nada; luego la moderadora resume, repregunta y muestra el producto, el origen del hierro, la marca y el empaque, cinco frases, la app y, al final, el precio (sin decir cuánto cuesta).
4. La moderadora redacta el informe de cada grupo y una investigadora cruza los 38.

`focus-grupos.workflow.js` es el guion que generó los perfiles y condujo los grupos; `analizar.py` junta las tandas y saca las tablas.

## Límites

- Las respuestas salieron muy parejas entre perfiles: importan el orden y las razones, no los porcentajes.
- Parte de lo que sale es eco de lo que se asignó (antecedente de hierro bajo, relación con la sangrecita).
- El sabor no se puede simular: solo lo valida una degustación real.
