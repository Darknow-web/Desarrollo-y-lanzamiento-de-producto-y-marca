# Quita imágenes repetidas dentro de un .pptx: deja una sola copia y apunta las relaciones a ella.
import sys, zipfile, hashlib, os, re
f = sys.argv[1]; tmp = f + '.tmp'
zin = zipfile.ZipFile(f); seen, alias = {}, {}
for n in zin.namelist():
    if n.startswith('ppt/media/'):
        h = hashlib.md5(zin.read(n)).hexdigest()
        if h in seen: alias[n.split('/')[-1]] = seen[h].split('/')[-1]
        else: seen[h] = n
with zipfile.ZipFile(tmp, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as zout:
    names = zin.namelist(); names.remove('[Content_Types].xml'); names.insert(0, '[Content_Types].xml')
    for n in names:
        if n.endswith('/') or n.split('/')[-1] in alias and n.startswith('ppt/media/'): continue
        d = zin.read(n)
        if n.endswith('.rels'):
            s = d.decode('utf8')
            for a, b in alias.items(): s = s.replace('../media/' + a + '"', '../media/' + b + '"')
            d = s.encode('utf8')
        zout.writestr(n, d)
zin.close(); b = os.path.getsize(f); os.replace(tmp, f); print('dedup', len(alias), b, '->', os.path.getsize(f))
