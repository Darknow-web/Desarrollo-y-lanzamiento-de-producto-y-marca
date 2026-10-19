# Reduce las imágenes de la sustentación a JPG livianos en img/deck/ (PIL).
# Uso (desde fuente/ppt):  python3 -I prep_img.py
# - Fotos y empaques: 1200 px de ancho como máximo, calidad 75.
# - Capturas de la app: 600 px de ancho, aplanadas sobre el crema de la diapositiva.
# - Fotos pendientes: guárdalas en img/deck/entrantes/imagen_N.(jpg|png|jpeg|webp);
#   este script las deja en img/deck/imagen_N.jpg. Luego pon esa ruta en IMG[N] del script de diapositivas.
import os, glob, re
from PIL import Image, ImageOps
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, '../../../..'))
OUT = os.path.join(HERE, 'img/deck')
CREMA = (251, 243, 232)

def save(src, dst, maxw, bg=CREMA):
    im = Image.open(src)
    im = ImageOps.exif_transpose(im)
    if im.mode in ('RGBA', 'LA', 'P'):
        im = im.convert('RGBA'); base = Image.new('RGB', im.size, bg); base.paste(im, mask=im.split()[-1]); im = base
    else:
        im = im.convert('RGB')
    if im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    im.save(dst, 'JPEG', quality=75, optimize=True, progressive=True)
    print(os.path.relpath(dst, HERE), im.size, os.path.getsize(dst) // 1024, 'KB')

FIJAS = [
    ('assets/empaque-andibite-mockup.png', 'empaque_mockup.jpg', 1200),
    ('assets/empaque/B1_frente.png', 'empaque_frente.jpg', 900),
]
for src, dst, w in FIJAS:
    save(os.path.join(ROOT, src), os.path.join(OUT, dst), w)
for name in ['05-lote', '08-semaforo', '10-loncheras-plan', '15-inicio', '21-ninos-mapa']:
    save(os.path.join(ROOT, 'app-andi-mision-hierro/capturas', name + '.png'), os.path.join(OUT, 'app_' + name + '.jpg'), 600)
# La pantalla de inicio va sobre fondo café oscuro (diapositiva 10)
save(os.path.join(ROOT, 'app-andi-mision-hierro/capturas/15-inicio.png'), os.path.join(OUT, 'app_15-inicio_oscuro.jpg'), 600, bg=(74, 32, 24))
for f in sorted(glob.glob(os.path.join(OUT, 'entrantes', 'imagen_*'))):
    m = re.match(r'imagen_(\d+)\.(jpe?g|png|webp)$', os.path.basename(f), re.I)
    if m:
        save(f, os.path.join(OUT, 'imagen_%s.jpg' % m.group(1)), 1200)
