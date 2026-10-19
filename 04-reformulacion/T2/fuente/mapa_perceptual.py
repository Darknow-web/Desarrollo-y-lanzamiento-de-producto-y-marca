"""Mapa perceptual de AndiBite (T2 #10 Posicionamiento).

Genera 04-reformulacion/T2/img/mapa-perceptual.jpg (1000 x 700 px, JPG calidad 80).

Ejes:
- X: precio por 20 g en soles con IGV (datos de md/T2_02_Benchmark.md, 19-oct-2026).
- Y: evidencia nutricional verificable, escala 1 a 5 (rubrica del #10, seccion 6).

Para actualizar: cambia la lista MARCAS y vuelve a correr
    python3 04-reformulacion/T2/fuente/mapa_perceptual.py
"""

from pathlib import Path

import matplotlib

matplotlib.use("Agg")
import matplotlib.pyplot as plt  # noqa: E402
from matplotlib import font_manager  # noqa: E402
from matplotlib.lines import Line2D  # noqa: E402

# ---------- Rutas ----------
AQUI = Path(__file__).resolve().parent
SALIDA = AQUI.parent / "img" / "mapa-perceptual.jpg"

# ---------- Colores de marca ----------
MARRON = "#4A2018"
ROJO = "#BA4036"
CREMA = "#F7ECDA"
TEXTO = "#3B1A14"
LINEA = "#C9A98A"  # marron claro para lineas divisorias (mezcla de marron y crema)

# ---------- Fuente: Calibri si existe; si no, DejaVu Sans ----------
disponibles = {f.name for f in font_manager.fontManager.ttflist}
FUENTE = "Calibri" if "Calibri" in disponibles else "DejaVu Sans"
plt.rcParams["font.family"] = "sans-serif"
plt.rcParams["font.sans-serif"] = [FUENTE]

# ---------- Lineas divisorias ----------
CORTE_X = 3.00  # S/ por 20 g: masivo frente a premium o funcional
CORTE_Y = 3     # evidencia: 3 o menos = sin nutriente funcional con cifra

# ---------- Datos (T2_02, 19-oct-2026) ----------
# tipo: "nucleo" (mismo nucleo que el #2), "referencia" o "supuesto" (peso por confirmar)
# rango: (min, max) de precio por 20 g cuando hay varias presentaciones
# dx, dy: desplazamiento de la etiqueta en puntos; ha: alineacion horizontal
MARCAS = [
    dict(nombre="Nutri H", x=3.20, y=4, tipo="nucleo", dx=10, dy=8, ha="left"),
    dict(nombre="Fika", x=4.00, y=3, tipo="nucleo", dx=-10, dy=9, ha="right"),
    dict(nombre="Mamalama", x=4.10, y=2, tipo="nucleo", dx=10, dy=-20, ha="left"),
    dict(nombre="Bimbo Nutra Bien", x=1.67, y=2, tipo="nucleo", dx=10, dy=8, ha="left"),
    dict(nombre="Forticao (x40 a x12)*", x=(3.50 + 4.17) / 2, y=2, rango=(3.50, 4.17),
         tipo="supuesto", dx=-30, dy=14, ha="center"),
    dict(nombre="La Purita*", x=2.11, y=3, tipo="supuesto", dx=10, dy=9, ha="left"),
    dict(nombre="Siete Dragones (ref.)", x=3.01, y=2, tipo="referencia", dx=-8, dy=-20, ha="right"),
    dict(nombre="Little Bites (ref.)", x=1.68, y=1, tipo="referencia", dx=10, dy=8, ha="left"),
]

ANDIBITE = dict(x=4.48, rango=(4.16, 4.65), hoy=4, meta=5)


def dibujar():
    fig, ax = plt.subplots(figsize=(10, 7), dpi=100)
    fig.patch.set_facecolor(CREMA)
    ax.set_facecolor("#FFFFFF")
    fig.subplots_adjust(left=0.085, right=0.955, top=0.90, bottom=0.19)

    ax.set_xlim(1.2, 5.0)
    ax.set_ylim(0.5, 5.6)
    ax.set_yticks([1, 2, 3, 4, 5])
    ax.set_xticks([1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0])
    ax.set_xticklabels([f"S/{v:.2f}" for v in ax.get_xticks()])
    for lado in ax.spines.values():
        lado.set_color(LINEA)
    ax.tick_params(colors=TEXTO, labelsize=11, length=0, pad=6)

    # Lineas divisorias
    ax.axvline(CORTE_X, color=LINEA, lw=1.4, ls="--", zorder=1)
    ax.axhline(CORTE_Y, color=LINEA, lw=1.4, ls="--", zorder=1)

    # Nombres de los cuadrantes
    estilo_q = dict(fontsize=12, color=MARRON, fontweight="bold", alpha=0.75, zorder=2)
    ax.text(1.27, 5.42, "Precio bajo con prueba: vacío", ha="left", va="center", **estilo_q)
    ax.text(4.93, 5.42, "Premium con prueba", ha="right", va="center", **estilo_q)
    ax.text(1.27, 0.66, "Masivo", ha="left", va="center", **estilo_q)
    ax.text(4.93, 0.66, "Premium sin prueba", ha="right", va="center", **estilo_q)

    # Competidores
    for m in MARCAS:
        if "rango" in m:
            ax.plot(m["rango"], [m["y"], m["y"]], color=MARRON, lw=7, alpha=0.22,
                    solid_capstyle="round", zorder=3)
        if m["tipo"] == "nucleo":
            ax.scatter(m["x"], m["y"], s=170, color=MARRON, zorder=5)
        elif m["tipo"] == "supuesto":
            ax.scatter(m["x"], m["y"], s=170, facecolor="#FFFFFF", edgecolor=MARRON,
                       linewidth=2, linestyle=(0, (2, 1.5)), zorder=5)
        else:  # referencia
            ax.scatter(m["x"], m["y"], s=110, color=MARRON, alpha=0.45, zorder=5)
        ax.annotate(m["nombre"], (m["x"], m["y"]), xytext=(m["dx"], m["dy"]),
                    textcoords="offset points", ha=m["ha"], va="center",
                    fontsize=12, color=TEXTO, zorder=6)

    # AndiBite: rango de precio, hoy (4) y meta (5) con flecha punteada
    a = ANDIBITE
    ax.plot(a["rango"], [a["hoy"], a["hoy"]], color=ROJO, lw=7, alpha=0.20,
            solid_capstyle="round", zorder=3)
    ax.annotate("", xy=(a["x"], a["meta"] - 0.13), xytext=(a["x"], a["hoy"] + 0.13),
                arrowprops=dict(arrowstyle="-|>", color=ROJO, lw=2, ls=(0, (2, 2)),
                                mutation_scale=18), zorder=4)
    ax.scatter(a["x"], a["hoy"], s=260, color=ROJO, zorder=6)
    ax.scatter(a["x"], a["meta"], s=260, facecolor="#FFFFFF", edgecolor=ROJO,
               linewidth=2.5, zorder=6)
    ax.annotate("AndiBite hoy", (a["x"], a["hoy"]), xytext=(-62, -1),
                textcoords="offset points", ha="right", va="center",
                fontsize=13, fontweight="bold", color=ROJO, zorder=7)
    ax.annotate("AndiBite meta\n(informe de laboratorio)", (a["x"], a["meta"]),
                xytext=(-14, -2), textcoords="offset points", ha="right", va="center",
                fontsize=13, fontweight="bold", color=ROJO, linespacing=1.1, zorder=7)
    ax.annotate("S/4.16 a S/4.65", (a["x"], a["hoy"]), xytext=(0, -22),
                textcoords="offset points", ha="center", va="center",
                fontsize=10.5, color=ROJO, zorder=7)

    # Ejes y titulo
    ax.set_xlabel("Precio por 20 g (S/ con IGV)", fontsize=13, color=TEXTO, labelpad=8)
    ax.set_ylabel("Evidencia nutricional verificable (1 a 5)", fontsize=13, color=TEXTO,
                  labelpad=8)
    fig.text(0.5, 0.955, "Mapa perceptual: AndiBite frente a la competencia",
             ha="center", va="center", fontsize=18, fontweight="bold", color=TEXTO)

    # Leyenda debajo del grafico
    leyenda = [
        Line2D([], [], marker="o", ls="", markersize=11, color=ROJO, label="AndiBite hoy"),
        Line2D([], [], marker="o", ls="", markersize=11, markerfacecolor="#FFFFFF",
               markeredgecolor=ROJO, markeredgewidth=2, label="AndiBite meta"),
        Line2D([], [], marker="o", ls="", markersize=11, color=MARRON, label="Competidor"),
        Line2D([], [], marker="o", ls="", markersize=11, markerfacecolor="#FFFFFF",
               markeredgecolor=MARRON, markeredgewidth=2, label="Peso por confirmar*"),
        Line2D([], [], marker="o", ls="", markersize=9, color=MARRON, alpha=0.45,
               label="Referencia"),
        Line2D([], [], lw=7, color=MARRON, alpha=0.22, label="Rango de precio"),
    ]
    fig.legend(handles=leyenda, loc="center", bbox_to_anchor=(0.5, 0.083), ncol=6,
               frameon=False, fontsize=10, labelcolor=TEXTO, handletextpad=0.3,
               columnspacing=1.0)

    fig.text(0.5, 0.03,
             "Fuente: precios de T2_02 (tiendas oficiales, 19-oct-2026); escala de evidencia del #10. "
             "En la línea 3 = evidencia media (abajo).\n* Peso supuesto [POR CONFIRMAR]: "
             "Forticao, 10 g por chocolatito (Andina, 2016); La Purita, 20 g por brownie "
             "(no publica el peso).",
             ha="center", va="center", fontsize=9, color=TEXTO, linespacing=1.3)

    SALIDA.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(SALIDA, format="jpg", dpi=90, facecolor=CREMA,
                pil_kwargs={"quality": 62, "optimize": True})  # liviano para subir al Drive
    plt.close(fig)
    print(f"Guardado: {SALIDA} (fuente: {FUENTE})")


if __name__ == "__main__":
    dibujar()
