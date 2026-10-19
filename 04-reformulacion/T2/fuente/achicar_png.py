# Achica las imágenes PNG grandes dentro de un .pptx (paleta de 64 colores con transparencia), sin cambiar nombres ni tamaño en pantalla.
import sys, zipfile, io, os
from PIL import Image
f = sys.argv[1]; lim = int(sys.argv[2]) if len(sys.argv) > 2 else 3000; tmp = f + '.tmp'
with zipfile.ZipFile(f) as zin, zipfile.ZipFile(tmp, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as zout:
    names = zin.namelist(); names.remove('[Content_Types].xml'); names.insert(0, '[Content_Types].xml')
    for n in names:
        d = zin.read(n)
        if n.startswith('ppt/media/') and n.endswith('.png') and len(d) > lim:
            im = Image.open(io.BytesIO(d)).convert('RGBA')
            q = im.quantize(colors=64, method=Image.Quantize.FASTOCTREE)
            b = io.BytesIO(); q.save(b, 'PNG', optimize=True)
            if b.tell() < len(d): print(n, len(d), '->', b.tell()); d = b.getvalue()
        zout.writestr(n, d)
b = os.path.getsize(f); os.replace(tmp, f); print('png', b, '->', os.path.getsize(f))
