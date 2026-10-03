# -*- coding: utf-8 -*-
from PIL import Image, ImageDraw, ImageFont
from pptx import Presentation
from pptx.util import Cm, Pt
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
DPI=300; F='../sticker/fonts/'
KRAFT=(232,205,179); BROWN=(92,48,30); GUINDA=(139,30,43); CREMA=(247,236,218); MUST=(229,169,58); LINE=(205,182,152)
def px(c): return int(round(c/2.54*DPI))
W,H=9.0,13.0   # cm, card size (3:4 aprox., cabe al lado de un video)

PERSONAS=[
 dict(nombre="Claudia Mendoza", tag="La mamá que lee etiquetas", ini="C",
      filas=[("Edad y distrito","38 años · San Borja"),
             ("Ocupación","Abogada corporativa"),
             ("Familia","2 hijos (7 y 4) · colegio bilingüe"),
             ("Ingreso familiar","S/13,500 al mes aprox."),
             ("Su dolor","Hijo con hemoglobina baja, rechaza lo nutritivo"),
             ("Qué busca","Hierro real, sin octógonos, sin refrigeración"),
             ("Dónde compra","Wong y Flora & Fauna · pediatra e Instagram"),
             ("Pagaría","S/24 a 30 el pack de 6")],
      frase="“Todo lo que le hace bien, mi hijo lo escupe.”"),
 dict(nombre="Rodrigo Salazar", tag="El papá que resuelve la mañana", ini="R",
      filas=[("Edad y distrito","42 años · La Molina"),
             ("Ocupación","Gerente de operaciones"),
             ("Familia","2 hijos (9 y 6) · él arma las loncheras"),
             ("Ingreso familiar","S/18,000 al mes aprox."),
             ("Su dolor","Jueves y viernes sin ideas, snacks aplastados"),
             ("Qué busca","Que resuelva la semana y aguante la mochila"),
             ("Dónde compra","Wong y Vivanda por app · Instagram y TikTok"),
             ("Pagaría","S/18 a 24 el pack · prefiere suscripción")],
      frase="“No me vendas salud, véndeme una mañana menos.”"),
]
def fnt(n,s): return ImageFont.truetype(F+n,px(s))
def wrap(d,txt,f,maxw):
    words=txt.split(); lines=[]; cur=''
    for w in words:
        t=(cur+' '+w).strip()
        if d.textlength(t,font=f)<=maxw: cur=t
        else: lines.append(cur); cur=w
    if cur: lines.append(cur)
    return lines

def render_png(p,out):
    img=Image.new('RGB',(px(W),px(H)),KRAFT); d=ImageDraw.Draw(img)
    # header
    hh=2.3; d.rounded_rectangle((0,0,px(W),px(hh)),radius=px(0.35),fill=GUINDA); d.rectangle((0,px(hh-0.5),px(W),px(hh)),fill=GUINDA)
    d.ellipse((px(0.5),px(0.45),px(1.9),px(1.85)),fill=CREMA)
    f=fnt('FredokaOne.ttf',0.8); t=p['ini']; tw=d.textlength(t,font=f); d.text((px(1.2)-tw/2,px(0.62)),t,font=f,fill=GUINDA)
    d.text((px(2.2),px(0.55)),p['nombre'],font=fnt('FredokaOne.ttf',0.62),fill=CREMA)
    d.text((px(2.2),px(1.35)),p['tag'],font=fnt('Caveat-Bold.ttf',0.55),fill=MUST)
    # rows
    y=hh+0.35; fl=fnt('Nunito-ExtraBold.ttf',0.27); fv=fnt('Nunito-Regular.ttf',0.3)
    for lab,val in p['filas']:
        d.text((px(0.5),px(y)),lab.upper(),font=fl,fill=GUINDA)
        lines=wrap(d,val,fv,px(W-1.0)); yy=y+0.38
        for ln in lines: d.text((px(0.5),px(yy)),ln,font=fv,fill=BROWN); yy+=0.4
        y=yy+0.12; d.line((px(0.5),px(y),px(W-0.5),px(y)),fill=LINE,width=2); y+=0.15
    # quote
    fq=fnt('Caveat-Bold.ttf',0.5); lines=wrap(d,p['frase'],fq,px(W-1.0)); qh=0.6*len(lines)+0.5
    d.rounded_rectangle((px(0.4),px(H-qh-0.4),px(W-0.4),px(H-0.4)),radius=px(0.3),fill=(222,190,158))
    yy=H-qh-0.15
    for ln in lines:
        tw=d.textlength(ln,font=fq); d.text(((px(W)-tw)/2,px(yy)),ln,font=fq,fill=BROWN); yy+=0.6
    img.save(out,dpi=(DPI,DPI)); return img

def rgb(c): return RGBColor(*c)
def render_pptx(out):
    prs=Presentation(); prs.slide_width=Cm(W); prs.slide_height=Cm(H)
    for p in PERSONAS:
        s=prs.slides.add_slide(prs.slide_layouts[6])
        def rect(kind,x,y,w,h,c):
            sh=s.shapes.add_shape(kind,Cm(x),Cm(y),Cm(w),Cm(h)); sh.fill.solid(); sh.fill.fore_color.rgb=rgb(c); sh.line.fill.background(); return sh
        def text(t,x,y,w,h,font,size,c,bold=False,align=PP_ALIGN.LEFT):
            tb=s.shapes.add_textbox(Cm(x),Cm(y),Cm(w),Cm(h)); tf=tb.text_frame; tf.word_wrap=True
            tf.margin_left=tf.margin_right=tf.margin_top=tf.margin_bottom=0
            r=tf.paragraphs[0].add_run(); tf.paragraphs[0].alignment=align; r.text=t; r.font.name=font; r.font.size=Pt(size); r.font.color.rgb=rgb(c); r.font.bold=bold; return tb
        rect(MSO_SHAPE.RECTANGLE,0,0,W,H,KRAFT)
        rect(MSO_SHAPE.RECTANGLE,0,0,W,2.3,GUINDA)
        rect(MSO_SHAPE.OVAL,0.5,0.45,1.4,1.4,CREMA)
        text(p['ini'],0.5,0.6,1.4,1.1,'Fredoka One',22,GUINDA,align=PP_ALIGN.CENTER)
        text(p['nombre'],2.2,0.5,6.5,0.9,'Fredoka One',17,CREMA)
        text(p['tag'],2.2,1.3,6.5,0.8,'Caveat',16,MUST,bold=True)
        y=2.65
        for lab,val in p['filas']:
            text(lab.upper(),0.5,y,8,0.4,'Nunito',7.5,GUINDA,bold=True)
            nl=1+len(val)//52
            text(val,0.5,y+0.38,8,0.42*nl,'Nunito',8.5,BROWN)
            y+=0.38+0.42*nl+0.12
            ln=s.shapes.add_connector(1,Cm(0.5),Cm(y),Cm(W-0.5),Cm(y)); ln.line.color.rgb=rgb(LINE); ln.line.width=Pt(0.5); y+=0.15
        rect(MSO_SHAPE.ROUNDED_RECTANGLE,0.4,H-1.9,W-0.8,1.5,(222,190,158))
        text(p['frase'],0.6,H-1.75,W-1.2,1.3,'Caveat',14,BROWN,bold=True,align=PP_ALIGN.CENTER)
    prs.save(out)

for p in PERSONAS: render_png(p,f"ficha_{p['nombre'].split()[0].lower()}.png")
render_pptx('fichas_buyer_persona_editable_canva.pptx'); print('ok')
