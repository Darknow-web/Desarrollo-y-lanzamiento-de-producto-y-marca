from PIL import Image, ImageDraw, ImageFont, ImageFilter
import random, math

DPI=300
def cm(x): return int(round(x/2.54*DPI))
W,H = cm(10.5), cm(13.5)          # sticker 10.5 x 13.5 cm
F='fonts/'
KRAFT=(232,213,183); BROWN=(90,42,26); GUINDA=(139,30,43); CREMA=(247,236,218); MUST=(229,169,58); GREEN=(127,163,90)
def font(name,size): return ImageFont.truetype(F+name,size)
FRED=lambda s: font('FredokaOne.ttf',s); CAV=lambda s: font('Caveat-Bold.ttf',s)
NUN=lambda s: font('Nunito-Regular.ttf',s); NUNB=lambda s: font('Nunito-Bold.ttf',s); NUNX=lambda s: font('Nunito-ExtraBold.ttf',s)

def kraft_bg():
    img=Image.new('RGB',(W,H),KRAFT)
    noise=Image.effect_noise((W,H),18).convert('L')
    noise=noise.filter(ImageFilter.GaussianBlur(0.6))
    tex=Image.new('RGB',(W,H),(0,0,0))
    img=Image.blend(img, Image.merge('RGB',(noise,noise,noise)), 0.10)
    # warm it back
    r,g,b=img.split()
    return Image.merge('RGB',(r.point(lambda v:min(255,v+8)),g.point(lambda v:min(255,v+2)),b.point(lambda v:max(0,v-6))))

def text_center(d,y,txt,f,fill,x=None):
    w=d.textlength(txt,font=f); x=(W-w)/2 if x is None else x
    d.text((x,y),txt,font=f,fill=fill); return w

def rotated_text(base,xy,lines,f,fill,angle,spacing=6):
    tmp=Image.new('RGBA',(900,400),(0,0,0,0)); d=ImageDraw.Draw(tmp)
    y=0
    for ln in lines:
        d.text((10,y),ln,font=f,fill=fill); y+=f.size+spacing
    tmp=tmp.rotate(angle,resample=Image.BICUBIC,expand=True)
    base.paste(tmp,xy,tmp)

def mountain(d,cx,cy,w,h,col=BROWN):
    # two peaks silhouette outline style
    pts=[(cx-w/2,cy+h/2),(cx-w/4,cy-h/2),(cx-w/12,cy-h/8),(cx+w/8,cy-h/2+h*0.15),(cx+w/2,cy+h/2)]
    d.line(pts+[pts[0]],fill=col,width=int(h*0.16),joint='curve')
    d.polygon([(cx-w/4,cy-h/2),(cx-w/4-w*0.09,cy-h/2+h*0.32),(cx-w/4+w*0.11,cy-h/2+h*0.32)],fill=(200,200,200))

def circle(d,cx,cy,r,fill): d.ellipse((cx-r,cy-r,cx+r,cy+r),fill=fill)

def drop(d,cx,cy,r,fill):
    d.polygon([(cx,cy-r*1.3),(cx-r*0.85,cy+r*0.1),(cx+r*0.85,cy+r*0.1)],fill=fill)
    d.ellipse((cx-r*0.85,cy-r*0.55,cx+r*0.85,cy+r*1.0),fill=fill)

def leaf(d,cx,cy,r,fill):
    d.ellipse((cx-r*0.5,cy-r,cx+r*0.5,cy+r),fill=fill)
    d.line((cx,cy-r*0.8,cx,cy+r*0.9),fill=CREMA if fill!=CREMA else BROWN,width=max(2,int(r*0.12)))

def heart(d,cx,cy,r,fill):
    d.ellipse((cx-r,cy-r,cx,cy),fill=fill); d.ellipse((cx,cy-r,cx+r,cy),fill=fill)
    d.polygon([(cx-r,cy-r*0.3),(cx+r,cy-r*0.3),(cx,cy+r)],fill=fill)

def front(name_a='Andi', name_b='Bite', out='frente'):
    img=kraft_bg(); d=ImageDraw.Draw(img)
    # top-left handwritten
    rotated_text(img,(cm(0.2),cm(0.25)),['Lo bueno','también','puede ser','delicioso'],CAV(54),BROWN,9,spacing=-6)
    heart(d,cm(1.35),cm(3.05),14,BROWN)
    # top-right badge
    circle(d,W-cm(1.25),cm(1.25),cm(1.05),GUINDA)
    f=FRED(92); w=d.textlength('6',font=f); d.text((W-cm(1.25)-w/2,cm(0.35)),'6',font=f,fill=CREMA)
    f=NUNB(34); w=d.textlength('mini',font=f); d.text((W-cm(1.25)-w/2,cm(1.45)),'mini',font=f,fill=CREMA)
    w=d.textlength('brownies',font=f); d.text((W-cm(1.25)-w/2,cm(1.75)),'brownies',font=f,fill=CREMA)
    # logo
    mountain(d,W/2,cm(2.35),cm(3.0),cm(0.9))
    f=FRED(215); wa=d.textlength(name_a,font=f); wb=d.textlength(name_b,font=f); x=(W-wa-wb)/2; y=cm(2.55)
    d.text((x,y),name_a,font=f,fill=BROWN); d.text((x+wa,y),name_b,font=f,fill=GUINDA)
    text_center(d,cm(4.75),'Mini Brownie Nutritivo',NUNX(64),BROWN)
    # ribbon
    ry=cm(5.5); rh=cm(0.8); rx=cm(1.4)
    d.rounded_rectangle((rx,ry,W-rx,ry+rh),radius=rh//2,fill=GUINDA)
    d.polygon([(rx-cm(0.35),ry+rh*0.25),(rx+cm(0.45),ry+rh*0.05),(rx+cm(0.45),ry+rh*0.95),(rx-cm(0.35),ry+rh*0.85),(rx-cm(0.05),ry+rh*0.55)],fill=(110,20,32))
    d.polygon([(W-rx+cm(0.35),ry+rh*0.25),(W-rx-cm(0.45),ry+rh*0.05),(W-rx-cm(0.45),ry+rh*0.95),(W-rx+cm(0.35),ry+rh*0.85),(W-rx+cm(0.05),ry+rh*0.55)],fill=(110,20,32))
    f=NUNB(50); w=d.textlength('Sangrecita + Cañihua + Cacao',font=f); d.text(((W-w)/2,ry+(rh-56)/2),'Sangrecita + Cañihua + Cacao',font=f,fill=CREMA)
    # illustration band
    m=Image.open('/home/user/Desarrollo-y-lanzamiento-de-producto-y-marca/assets/empaque-andibite-mockup.png').convert('RGB')
    band=m.crop((160,472,625,722)); bw=W; bh=int(band.height*W/band.width)
    band=band.resize((bw,bh),Image.LANCZOS).filter(ImageFilter.UnsharpMask(2,80,3))
    by=cm(6.45); avail=(H-cm(2.05))-by
    if bh>avail:
        top=int((bh-avail)*0.55); band=band.crop((0,top,bw,top+avail)); bh=avail
    img.paste(band,(0,by))
    # bottom guinda band
    gy=by+bh-4
    d.rectangle((0,gy,W,H),fill=GUINDA)
    # icons
    xs=[cm(1.35),cm(3.55),cm(5.85)]; cy=gy+cm(0.75)
    for i,x in enumerate(xs):
        circle(d,x,cy,cm(0.42),CREMA)
        if i==0: drop(d,x,cy,18,GUINDA)
        elif i==1: circle(d,x,cy,17,GUINDA); circle(d,x,cy,8,CREMA)
        else: mountain(d,x,cy+4,44,26,GUINDA)
    f=NUNB(25); labels=[['Fuente','de hierro'],['Buena fuente','de proteína'],['Con ingredientes','andinos']]
    for x,l in zip(xs,labels):
        for j,ln in enumerate(l):
            w=d.textlength(ln,font=f); d.text((x-w/2,cy+cm(0.55)+j*28),ln,font=f,fill=CREMA)
    d.text((W-cm(2.1),cy-cm(0.05)),'Peso neto',font=NUN(28),fill=CREMA)
    d.text((W-cm(2.1),cy+cm(0.3)),'120 g',font=NUNX(48),fill=CREMA)
    img.save(out+'.png',dpi=(DPI,DPI)); return img

def back(out='reverso'):
    img=kraft_bg(); d=ImageDraw.Draw(img)
    text_center(d,cm(0.5),'De nuestra tierra,',CAV(80),BROWN)
    text_center(d,cm(1.25),'a su lonchera',CAV(80),BROWN)
    heart(d,W/2,cm(2.4),18,BROWN)
    # flourishes
    for sx in (cm(0.9),W-cm(0.9)):
        for k in range(3):
            ang=(-1 if sx<W/2 else 1)
            x0=sx; y0=cm(1.0)+k*cm(0.35)
            d.line((x0,y0,x0+ang*cm(0.35),y0-cm(0.12)),fill=BROWN,width=6)
    para=['Un mini brownie nutritivo, elaborado','con ingredientes peruanos, para que','cada bocado sea una fuente de energía','y sabor.']
    for i,ln in enumerate(para): text_center(d,cm(2.9)+i*46,ln,NUN(36),BROWN)
    # three icons
    xs=[cm(1.75),cm(5.25),cm(8.75)]; cy=cm(5.55); cols=[BROWN,GUINDA,MUST]
    for i,(x,c) in enumerate(zip(xs,cols)):
        circle(d,x,cy,cm(0.62),c)
        if i==0: leaf(d,x,cy,22,CREMA)
        elif i==1: mountain(d,x,cy+4,52,30,CREMA)
        else: heart(d,x,cy+2,20,CREMA)
    for x in (cm(3.5),cm(7.0)): d.line((x,cy-cm(0.6),x,cy+cm(1.3)),fill=(200,180,150),width=3)
    f=NUNB(29); labels=[['Ingredientes','peruanos'],['Nutrición','en cada bocado'],['Hecho','con amor']]
    for x,l in zip(xs,labels):
        for j,ln in enumerate(l):
            w=d.textlength(ln,font=f); d.text((x-w/2,cy+cm(0.75)+j*33),ln,font=f,fill=BROWN)
    # legal / MVP block
    y=cm(7.3)
    lines=[('Ingredientes: cacao, avena, cañihua, sangrecita liofilizada, plátano,',NUN(24)),
           ('huevo, aceite vegetal y panela. Contiene huevo. 6 unidades x 20 g.',NUN(24)),
           ('Elaborado: ____/____/2026   ·   Consumir dentro de 5 días   ·   Hecho en Lima',NUN(24)),
           ('Prototipo de evaluación, no destinado a la venta.   @andybites.pe',NUNB(24))]
    for ln,f in lines: text_center(d,y,ln,f,BROWN); y+=30
    # mountains band from mockup
    m=Image.open('/home/user/Desarrollo-y-lanzamiento-de-producto-y-marca/assets/empaque-andibite-mockup.png').convert('RGB')
    x0,y0,x1,y1=782,600,1258,838
    band=m.crop((x0,y0,x1,y1)); sc=W/band.width; bw=W; bh=int(band.height*sc)
    band=band.resize((bw,bh),Image.LANCZOS)
    band=band.filter(ImageFilter.UnsharpMask(2,70,3))
    maxh=H-cm(8.45)
    if bh>maxh: band=band.crop((0,bh-maxh,bw,bh)); bh=maxh
    by=H-bh; img.paste(band,(0,by))
    d=ImageDraw.Draw(img)
    tx0,ty0,tx1,ty1=W/2-cm(2.6),by+bh-cm(3.0),W/2+cm(2.6),by+bh-cm(0.55)
    d.rounded_rectangle((tx0,ty0,tx1,ty1),radius=45,fill=CREMA,outline=GUINDA,width=6)
    fx,fy,fw,fh=W/2-cm(0.55),ty0+cm(0.3),cm(1.1),cm(0.7)
    d.rounded_rectangle((fx,fy,fx+fw,fy+fh),radius=8,fill=(214,30,40))
    d.rectangle((fx+fw/3,fy,fx+2*fw/3,fy+fh),fill=(255,255,255))
    text_center(d,fy+fh+cm(0.12),'Orgullo peruano',NUNX(46),GUINDA)
    img.save(out+'.png',dpi=(DPI,DPI)); return img

def sheet(stickers,out):
    A4=(cm(21.0),cm(29.7)); sh=Image.new('RGB',A4,'white'); d=ImageDraw.Draw(sh)
    # two copies rotated 90 deg, stacked
    rot=[s.rotate(90,expand=True) for s in stickers]
    sw,shh=rot[0].size; x=(A4[0]-sw)//2; gap=cm(1.0)
    total=len(rot)*shh+(len(rot)-1)*gap; y0=(A4[1]-total)//2
    for i,r in enumerate(rot):
        y=y0+i*(shh+gap); sh.paste(r,(x,y))
        for (px,py) in [(x,y),(x+sw,y),(x,y+shh),(x+sw,y+shh)]:
            d.line((px-60,py,px-15,py),fill='black',width=2); d.line((px+15,py,px+60,py),fill='black',width=2)
            d.line((px,py-60,px,py-15),fill='black',width=2); d.line((px,py+15,px,py+60),fill='black',width=2)
    d.text((cm(1),cm(0.6)),out+'  ·  AndyBites  ·  sticker 10.5 x 13.5 cm  ·  imprimir al 100 % (sin ajustar a página)',font=NUN(30),fill=(120,120,120))
    sh.save(out+'.pdf',resolution=DPI); sh.save(out+'_preview.jpg',quality=70,dpi=(DPI,DPI))

f1=front('Andi','Bite','frente_AndiBite'); f2=front('Andy','Bites','frente_AndyBites'); b=back('reverso')
sheet([f1,f1],'hoja_frente_AndiBite'); sheet([f2,f2],'hoja_frente_AndyBites'); sheet([b,b],'hoja_reverso')
print('ok',W,H)
