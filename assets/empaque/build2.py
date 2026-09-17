from PIL import Image, ImageDraw, ImageFont
DPI=300
def cm(x): return int(round(x/2.54*DPI))
X4=Image.open('../sr/mockup_x4.png').convert('RGB')
def crop4(x0,y0,x1,y1): return X4.crop((x0*4,y0*4,x1*4,y1*4))
F='fonts/'; NUN=lambda s: ImageFont.truetype(F+'Nunito-Regular.ttf',s); NUNB=lambda s: ImageFont.truetype(F+'Nunito-Bold.ttf',s)
BROWN=(90,42,26)

def fill_corners(img, top=True):
    """flood-fill the photo background visible at the rounded bag corners with the neighbouring bag colour"""
    w,h=img.size; px=img.load()
    bottom_ref=px[w//2,h-12]; top_ref=px[w//2,40]
    for (x,y) in [(0,h-1),(w-1,h-1),(0,h-40),(w-1,h-40)]:
        ImageDraw.floodfill(img,(x,y),bottom_ref,thresh=45)
    if top:
        for (x,y) in [(0,0),(w-1,0),(0,25),(w-1,25)]:
            ImageDraw.floodfill(img,(x,y),top_ref,thresh=18)
    return img

FRONT=(148,118,628,838); BACK=(790,150,1250,838)

def legal(img, y0, y1, size):
    d=ImageDraw.Draw(img); W=img.width
    lines=['Ingredientes: cacao, avena, cañihua, sangrecita liofilizada, plátano, huevo, aceite vegetal, panela. Contiene huevo.',
           '6 unidades x 20 g  ·  Elaborado: ____/____/2026  ·  Consumir dentro de 5 días  ·  Hecho en Lima',
           'Prototipo de evaluación, no destinado a la venta.']
    f=NUN(size); lh=int(size*1.25); y=y0+((y1-y0)-lh*3)//2
    for ln in lines:
        w=d.textlength(ln,font=f)
        while w>W*0.94: size-=1; f=NUN(size); w=d.textlength(ln,font=f)
        d.text(((W-w)/2,y),ln,font=f,fill=BROWN); y+=lh

def bag1():
    W,H=cm(11.0),cm(15.3)
    fr=fill_corners(crop4(*FRONT)).resize((W,H),Image.LANCZOS); fr.save('b1_frente.png',dpi=(DPI,DPI))
    bk=fill_corners(crop4(*BACK)).resize((W,H),Image.LANCZOS)
    sc=H/(BACK[3]-BACK[1]); legal(bk,int((562-150)*sc),int((598-150)*sc),21); bk.save('b1_reverso.png',dpi=(DPI,DPI))
    return fr,bk

def bag2(win_bottom_cm=5.5):
    W,H=cm(14.2),cm(21.4); ww,wh=cm(13.0),cm(4.0)
    wy1=H-cm(win_bottom_cm); wy0=wy1-wh; wx0=(W-ww)//2
    img=Image.new('RGB',(W,H),(232,213,183))
    # top section (until ribbon bottom, original row 452)
    top=crop4(148,118,628,452); s=W/top.width; top=top.resize((W,int(top.height*s)),Image.LANCZOS); img.paste(top,(0,0)); yt=top.height
    # bottom guinda band with icons (original rows 706-838)
    band=fill_corners(crop4(148,706,628,838),top=False); band=band.resize((W,int(band.height*s)),Image.LANCZOS); yb=H-band.height
    # landscape from the back face (original rows 596-830) stretched to fill between
    land=crop4(790,596,1250,830).resize((W,yb-yt),Image.LANCZOS); img.paste(land,(0,yt)); img.paste(band,(0,yb))
    d=ImageDraw.Draw(img)
    # window: white (no print) + dashed cut line + note
    d.rectangle((wx0,wy0,wx0+ww,wy1),fill='white')
    for x in range(wx0,wx0+ww,24): d.line((x,wy0,min(x+12,wx0+ww),wy0),fill=(120,120,120),width=2); d.line((x,wy1,min(x+12,wx0+ww),wy1),fill=(120,120,120),width=2)
    for y in range(wy0,wy1,24): d.line((wx0,y,wx0,min(y+12,wy1)),fill=(120,120,120),width=2); d.line((wx0+ww,y,wx0+ww,min(y+12,wy1)),fill=(120,120,120),width=2)
    f=NUN(28); t='VENTANA: recortar este rectángulo antes de pegar (13 x 4 cm)'; w=d.textlength(t,font=f); d.text(((W-w)/2,wy0+wh//2-16),t,font=f,fill=(150,150,150))
    img.save('b2_frente.png',dpi=(DPI,DPI))
    bk=fill_corners(crop4(*BACK)).resize((W,H),Image.LANCZOS)
    sc=H/(BACK[3]-BACK[1]); legal(bk,int((562-150)*sc),int((598-150)*sc),27); bk.save('b2_reverso.png',dpi=(DPI,DPI))
    return img,bk

def marks(d,x,y,w,h):
    for (px,py) in [(x,y),(x+w,y),(x,y+h),(x+w,y+h)]:
        d.line((px-70,py,px-15,py),fill='black',width=2); d.line((px+15,py,px+70,py),fill='black',width=2)
        d.line((px,py-70,px,py-15),fill='black',width=2); d.line((px,py+15,px,py+70),fill='black',width=2)

def sheet(items,out,label,rotate):
    A4=(cm(21.0),cm(29.7)); sh=Image.new('RGB',A4,'white'); d=ImageDraw.Draw(sh)
    ims=[i.rotate(90,expand=True) if rotate else i for i in items]
    gap=cm(1.2); total=sum(i.height for i in ims)+gap*(len(ims)-1); y=(A4[1]-total)//2
    for i in ims:
        x=(A4[0]-i.width)//2; sh.paste(i,(x,y)); marks(d,x,y,i.width,i.height); y+=i.height+gap
    d.text((cm(1),cm(0.5)),label+'  ·  imprimir al 100 % (tamaño real, sin ajustar a página)',font=NUN(30),fill=(120,120,120))
    sh.save(out+'.pdf',resolution=DPI); sh.save(out+'.png',dpi=(DPI,DPI))

f1,b1=bag1(); f2,b2=bag2()
sheet([f1,f1],'B1_hoja_frente','Bolsa 1 (11 x 15.3 cm) · FRENTE · 2 por hoja',True)
sheet([b1,b1],'B1_hoja_reverso','Bolsa 1 (11 x 15.3 cm) · REVERSO · 2 por hoja',True)
sheet([f2],'B2_hoja_frente','Bolsa 2 con ventana (14.2 x 21.4 cm) · FRENTE · 1 por hoja',False)
sheet([b2],'B2_hoja_reverso','Bolsa 2 con ventana (14.2 x 21.4 cm) · REVERSO · 1 por hoja',False)
print('ok', f1.size, f2.size)
