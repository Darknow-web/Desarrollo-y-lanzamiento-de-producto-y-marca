"""Une los PDF a medida real por pack y arma hojas A4 con marcas de corte (PyMuPDF)."""
import sys, warnings
warnings.filterwarnings('ignore')
import fitz

OUT, F = sys.argv[1], sys.argv[2]
PT = 72 / 25.4  # puntos por mm
A4 = (210 * PT, 297 * PT)

packs = {
    'Pack 12': [('_g-frente.pdf', 110, 165), ('_g-reverso.pdf', 110, 165)],
    'Pack 6': [('_p-frente.pdf', 90, 135), ('_p-reverso.pdf', 90, 135)],
}

def marcas(page, x, y, w, h, largo=4 * PT, sep=1.5 * PT):
    for (px, py, dx, dy) in [(x, y, -1, -1), (x + w, y, 1, -1), (x, y + h, -1, 1), (x + w, y + h, 1, 1)]:
        page.draw_line((px + dx * sep, py), (px + dx * (sep + largo), py), color=(0.4, 0.4, 0.4), width=0.4)
        page.draw_line((px, py + dy * sep), (px, py + dy * (sep + largo)), color=(0.4, 0.4, 0.4), width=0.4)

for nombre, caras in packs.items():
    # PDF a medida real: frente y reverso.
    real = fitz.open()
    for f, w, h in caras:
        real.insert_pdf(fitz.open(f'{F}/{f}'))
    real.save(f'{OUT}/AndiBite - {nombre} - stickers a medida.pdf')
    # Hoja A4: las dos caras lado a lado si caben (pack 6), o una por hoja (pack 12).
    hoja = fitz.open()
    w, h = caras[0][1] * PT, caras[0][2] * PT
    juntas = 2 * w + 10 * PT < A4[0]
    if juntas:
        pg = hoja.new_page(width=A4[0], height=A4[1])
        x0 = (A4[0] - (2 * w + 10 * PT)) / 2; y0 = (A4[1] - h) / 2
        for i, (f, _, _) in enumerate(caras):
            x = x0 + i * (w + 10 * PT)
            pg.show_pdf_page(fitz.Rect(x, y0, x + w, y0 + h), fitz.open(f'{F}/{f}'), 0)
            marcas(pg, x, y0, w, h)
        pg.insert_text((x0, y0 - 6 * PT), f'AndiBite · {nombre} · frente y reverso · imprimir al 100 % · sticker {caras[0][1]} × {caras[0][2]} mm', fontsize=7, color=(0.4, 0.4, 0.4))
    else:
        for f, _, _ in caras:
            pg = hoja.new_page(width=A4[0], height=A4[1])
            x = (A4[0] - w) / 2; y = (A4[1] - h) / 2
            pg.show_pdf_page(fitz.Rect(x, y, x + w, y + h), fitz.open(f'{F}/{f}'), 0)
            marcas(pg, x, y, w, h)
            pg.insert_text((x, y - 6 * PT), f'AndiBite · {nombre} · {"frente" if "frente" in f else "reverso"} · imprimir al 100 % · sticker {caras[0][1]} × {caras[0][2]} mm', fontsize=7, color=(0.4, 0.4, 0.4))
    hoja.save(f'{OUT}/AndiBite - {nombre} - hoja A4 para imprimir.pdf')
    print('pdf', nombre)
