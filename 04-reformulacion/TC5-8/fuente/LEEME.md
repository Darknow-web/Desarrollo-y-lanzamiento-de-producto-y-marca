# Fuente de la presentación TC5-8

`build.js` genera `TC5-8-AndiBite.pptx` con pptxgenjs. Los gráficos son nativos de PowerPoint: clic derecho y luego **Editar datos** para cambiar las cifras.

Para regenerarla:
1. `npm install pptxgenjs react react-dom react-icons sharp`
2. `NODE_PATH=./node_modules node build.js salida.pptx`

El script usa `apply_theme.js` de la skill de PowerPoint.
