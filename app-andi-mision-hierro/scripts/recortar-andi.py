#!/usr/bin/env python3
"""Recorta las imágenes de Andi generadas con IA sobre fondo verde (#00FF00).

Uso:  python3 -I scripts/recortar-andi.py entrada/ public/img/andi/

- Chroma key verde con tolerancia y bordes suavizados (sin halo verde).
- Recorta al contenido (con un pequeño margen) y centra en un lienzo 240x260 (misma proporción que el SVG).
- Guarda PNG de 120 KB o menos (reduce tamaño y colores hasta lograrlo).
- Nombres de salida: el nombre del archivo de entrada en minúsculas y sin espacios; por ejemplo
  «Base Feliz.png» -> «base-feliz.png», «look-explorador.PNG» -> «look-explorador.png».
Solo necesita Pillow:  pip install pillow
"""
import re
import sys
from io import BytesIO
from pathlib import Path

try:
    from PIL import Image, ImageFilter
except ImportError:  # pragma: no cover
    sys.exit('Falta Pillow. Instálalo con: pip install pillow')

MAX_BYTES = 120 * 1024
TOLERANCIA = 90      # distancia de color al verde puro para considerar «fondo»
SUAVE = 60           # ancho de la transición (más grande = borde más suave)
PROPORCION = 240 / 260
LADO = 1024
EXTENSIONES = {'.png', '.jpg', '.jpeg', '.webp'}


def nombre_salida(p: Path) -> str:
    base = re.sub(r'[^a-z0-9]+', '-', p.stem.lower()).strip('-')
    return f'{base}.png'


def quitar_verde(img: Image.Image) -> Image.Image:
    """Devuelve la imagen RGBA con el fondo verde transparente y los bordes sin tinte verde."""
    img = img.convert('RGB')
    w, h = img.size
    px = img.load()
    alpha = Image.new('L', (w, h), 255)
    ap = alpha.load()
    sal = Image.new('RGB', (w, h))
    sp = sal.load()
    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            # Qué tan «verde puro» es: verde alto y rojo/azul bajos.
            verdor = g - max(r, b)
            if verdor >= TOLERANCIA:
                ap[x, y] = 0
                sp[x, y] = (r, g, b)
            elif verdor > TOLERANCIA - SUAVE:
                a = int(255 * (TOLERANCIA - verdor) / SUAVE)
                ap[x, y] = a
                # despill: baja el verde del borde al promedio de rojo y azul
                g2 = min(g, (r + b) // 2 + 10)
                sp[x, y] = (r, g2, b)
            else:
                ap[x, y] = 255
                sp[x, y] = (r, g, b)
    # Suaviza el canal alfa un poco para que el borde no quede dentado.
    alpha = alpha.filter(ImageFilter.GaussianBlur(0.8))
    sal.putalpha(alpha)
    return sal


def recortar_y_centrar(img: Image.Image, margen: float = 0.04) -> Image.Image:
    bbox = img.getchannel('A').point(lambda a: 255 if a > 8 else 0).getbbox()
    if not bbox:
        return img
    x0, y0, x1, y1 = bbox
    mw, mh = int((x1 - x0) * margen), int((y1 - y0) * margen)
    img = img.crop((max(0, x0 - mw), max(0, y0 - mh), min(img.width, x1 + mw), min(img.height, y1 + mh)))
    # Lienzo con la proporción 240:260 del SVG, el personaje centrado y apoyado abajo.
    w, h = img.size
    if w / h > PROPORCION:
        cw, ch = w, int(w / PROPORCION)
    else:
        cw, ch = int(h * PROPORCION), h
    lienzo = Image.new('RGBA', (cw, ch), (0, 0, 0, 0))
    lienzo.paste(img, ((cw - w) // 2, ch - h), img)
    return lienzo


def guardar_ligero(img: Image.Image, destino: Path) -> int:
    """Guarda como PNG de 120 KB o menos: primero ajusta el tamaño, luego reduce colores."""
    lado = LADO
    while True:
        escala = min(1.0, lado / max(img.size))
        im = img.resize((max(1, int(img.width * escala)), max(1, int(img.height * escala))), Image.LANCZOS) if escala < 1 else img
        for colores in (None, 256, 128, 64):
            buf = BytesIO()
            if colores:
                im.quantize(colors=colores, method=Image.Quantize.FASTOCTREE).save(buf, 'PNG', optimize=True)
            else:
                im.save(buf, 'PNG', optimize=True)
            if buf.tell() <= MAX_BYTES or (lado <= 256 and colores == 64):
                destino.write_bytes(buf.getvalue())
                return buf.tell()
        lado = int(lado * 0.8)


def main() -> None:
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    entrada, salida = Path(sys.argv[1]), Path(sys.argv[2])
    if not entrada.is_dir():
        sys.exit(f'No existe la carpeta {entrada}')
    salida.mkdir(parents=True, exist_ok=True)
    archivos = sorted(p for p in entrada.iterdir() if p.suffix.lower() in EXTENSIONES)
    if not archivos:
        sys.exit(f'No hay imágenes en {entrada}')
    nombres = []
    for p in archivos:
        img = Image.open(p)
        img = recortar_y_centrar(quitar_verde(img))
        destino = salida / nombre_salida(p)
        kb = guardar_ligero(img, destino) / 1024
        nombres.append(destino.name)
        print(f'{p.name} -> {destino} ({kb:.0f} KB, {img.width}x{img.height})')
    print('\nAgrega estos nombres en src/data/andi-imagenes.ts:')
    print('export const IMAGENES_ANDI: string[] = [' + ', '.join(f"'{n}'" for n in nombres) + '];')


if __name__ == '__main__':
    main()
