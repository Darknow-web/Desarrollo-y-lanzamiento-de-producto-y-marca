#!/bin/bash
# Convierte todos los .md de T2/md a .docx en T2/docx y valida cada uno.
set -e
cd "$(dirname "$0")/.."
mkdir -p docx
for f in md/T2_*.md; do
  b=$(basename "$f" .md)
  NODE_PATH=$(npm root -g) node fuente/md2docx.js "$f" "docx/$b.docx" fuente/logo_small.png >/dev/null
  python3 /root/.claude/skills/synced/e7063657-960e-49c9-b517-23d330438093_cf5848ca-1efc-4397-9a99-7d57339830f9/docx/scripts/office/validate.py "docx/$b.docx" | tail -1 | sed "s#^#$b: #"
done
# Recomprime cada .docx al máximo (menos peso para subir al Drive).
for f in docx/T2_*.docx; do python3 fuente/recomprimir.py "$f"; done
