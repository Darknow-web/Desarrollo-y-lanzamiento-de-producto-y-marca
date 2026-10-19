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

# ---------- Evidencia real (T2/img/evidencia): recorte y esquinas redondeadas ----------
from PIL import ImageDraw
EVI = os.path.join(HERE, '../../img/evidencia')

def rounded(src, dst, box, aspect=None, radius=0.06, bg=CREMA, maxw=1200, top=True):
    im = Image.open(src).convert('RGB').crop(box)
    if aspect:  # recorte central (o desde arriba, para no cortar caras) a la proporción ancho/alto
        w, h = im.size
        if w / h > aspect:
            nw = round(h * aspect); x0 = (w - nw) // 2; im = im.crop((x0, 0, x0 + nw, h))
        else:
            nh = round(w / aspect); y0 = 0 if top else (h - nh) // 2; im = im.crop((0, y0, w, y0 + nh))
    if im.width > maxw:
        im = im.resize((maxw, round(im.height * maxw / im.width)), Image.LANCZOS)
    r = round(min(im.size) * radius)
    mask = Image.new('L', im.size, 0); ImageDraw.Draw(mask).rounded_rectangle((0, 0, im.width - 1, im.height - 1), r, fill=255)
    out = Image.new('RGB', im.size, bg); out.paste(im, mask=mask)
    out.save(dst, 'JPEG', quality=80, optimize=True)
    print(os.path.relpath(dst, HERE), out.size, os.path.getsize(dst) // 1024, 'KB')

# Fotos de la degustación: se quitan los bordes kraft de la lámina de Canva y se dejan en 3:4
for n, box in [(1, (0, 0, 255, 385)), (2, (10, 0, 290, 395)), (3, (10, 0, 212, 362)), (4, (10, 0, 310, 430))]:
    rounded(os.path.join(EVI, 'degustacion-%d.jpg' % n), os.path.join(OUT, 'degustacion_%d.jpg' % n), box, aspect=0.75, radius=0.07)
# Capturas de las entrevistas (sin el borde negro), en 16:10
for n, m in ((1, (6, 6, 6, 6)), (2, (16, 12, 12, 16))):
    w, h = Image.open(os.path.join(EVI, 'entrevista-%d.jpg' % n)).size
    rounded(os.path.join(EVI, 'entrevista-%d.jpg' % n), os.path.join(OUT, 'entrevista_%d.jpg' % n), (m[0], m[1], w - m[2], h - m[3]), aspect=1.6, radius=0.05, top=False)
