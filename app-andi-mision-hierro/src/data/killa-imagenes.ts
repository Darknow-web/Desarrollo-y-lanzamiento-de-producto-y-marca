// Imágenes de Killa generadas con IA y recortadas (ver PROMPTS-andi.md).
// Mientras esta lista esté vacía, <Killa /> dibuja el SVG. Para activar una imagen, agrega aquí su nombre
// exactamente como quedó en public/img/killa/, por ejemplo: 'base-feliz.png', 'look-explorador.png', 'chef-wow.png'.
// Orden de búsqueda en <Killa look animo>: '<look>-<animo>.png' → 'look-<look>.png' → 'base-<animo>.png' → 'base-feliz.png'.
export const IMAGENES_KILLA: string[] = [
  'base-feliz.png', 'base-wow.png', 'base-duerme.png',
  'look-explorador.png', 'look-chef.png', 'look-astronauta.png', 'look-deportista.png', 'look-pijama.png', 'look-fiesta.png',
  'look-chullo.png', 'look-chalina.png', 'look-poncho.png', 'look-sombrero.png',
];
