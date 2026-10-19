# Recomprime un .docx/.pptx con deflate nivel 9, sin cambiar su contenido.
import sys, zipfile, os
f = sys.argv[1]; tmp = f + '.tmp'
with zipfile.ZipFile(f) as zin, zipfile.ZipFile(tmp, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as zout:
    names = zin.namelist()
    if '[Content_Types].xml' in names: names.remove('[Content_Types].xml'); names.insert(0, '[Content_Types].xml')
    for n in names:
        if not n.endswith('/'): zout.writestr(n, zin.read(n))
before = os.path.getsize(f); os.replace(tmp, f); print(os.path.basename(f), before, '->', os.path.getsize(f))
