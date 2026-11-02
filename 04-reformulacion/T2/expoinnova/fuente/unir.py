# Une el informe (A4) con la página apaisada del banner después de la página 2 y numera todas las páginas.
import sys, fitz
main, banner, out = sys.argv[1:4]
a = fitz.open(main); b = fitz.open(banner)
doc = fitz.open()
doc.insert_pdf(a, from_page=0, to_page=1)
doc.insert_pdf(b)
doc.insert_pdf(a, from_page=2, to_page=a.page_count - 1)
for i, page in enumerate(doc):
    if i == 0:
        continue  # la portada no lleva pie
    w, h = page.rect.width, page.rect.height
    y = h - 24
    page.insert_text((51, y), "AndiBite · Expoinnova 2026-2 · Grupo 2", fontsize=7.5, fontname="helv", color=(0.42, 0.23, 0.16))
    num = str(i + 1)
    tw = fitz.get_text_length(num, fontname="helv", fontsize=7.5)
    page.insert_text((w - 51 - tw, y), num, fontsize=7.5, fontname="helv", color=(0.42, 0.23, 0.16))
doc.save(out, garbage=3, deflate=True)
print("paginas:", doc.page_count)
