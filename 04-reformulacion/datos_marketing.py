# Presupuesto de marketing AndiBite por medio (S/ sin IGV). Columna 0 = prelanzamiento oct-dic 2026; 1..12 = ene..dic 2027
EV=[1,2,4,4,5,4,3,4,4,4,3,2]
def m(prel, meses): return [prel]+meses
CAT=[
 ('PUBLICIDAD',[
   ('Pauta en redes sociales','Facebook e Instagram (Meta)', m(0,[450,450,450,400,450,450,300,350,400,400,450,500])),
   ('Pauta de expectativa','Instagram y TikTok', m(600,[0]*12)),
   ('Video de lanzamiento con niños','Redes y stand', m(300,[0]*12)),
 ]),
 ('VENTAS PERSONALES',[
   ('Vendedor(a) en ferias pagadas','Feria escolar y Día del Niño', m(0,[0,270,0,270]+[0]*8)),
   ('Vendedor(a) en eventos sin costo','Kermeses y cumpleaños', m(0,[90*e for e in EV])),
 ]),
 ('PROMOCIONES',[
   ('Muestras de degustación (600)','Jockey, evento y pediatras', m(0,[1146]+[0]*11)),
   ('Degustaciones extra','Stands A y B', m(0,[50,100,150,150,150,150,250,150,200,150,150,100])),
   ('Material de stand y POP','Stands, ferias y kermeses', m(400,[500,150,100,150,100,100,150,200,100,150,100,100])),
   ('Mamás embajadoras (premio al padre)','Chats de colegio', m(0,[200]*12)),
 ]),
 ('RELACIONES PÚBLICAS',[
   ('Influencers (40 packs)','Mamás de Instagram A y B', m(458,[0]*12)),
   ('Ferias pagadas (stand)','Campaña escolar y Día del Niño', m(0,[0,1800,0,1800]+[0]*8)),
   ('Aporte a eventos sin costo','Kermeses y ferias saludables', m(0,[70*e for e in EV])),
 ]),
]
SERIE=[1758,2506,3290,1540,3610,1700,1540,1380,1540,1540,1540,1380,1220]
if __name__=='__main__':
    tot=[0]*13
    for c,items in CAT:
        st=[sum(x[2][i] for x in items) for i in range(13)]
        print(c,sum(st),st)
        tot=[a+b for a,b in zip(tot,st)]
    print('TOTAL',sum(tot),tot==SERIE,tot)
