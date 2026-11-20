"""Escenarios de crecimiento sobre la economía unitaria del documento 18 (borrador de cálculo)."""
import sys
F27_BASE=80539; F28_BASE=115121
C27=36173/33238; C28=102691/72336; P27=108345/33238; P28=231281/72336
OTROS27=33238-24140            # kermés, stand y pop-up del plan
OTROS28=[605,1900,1500,900,900,900,700,900,900,900,900,700]  # aproximado: verano, kermeses y módulo
RAMP=[133,200,283,333]; MAD27=430; MAD28=470
FACT={1:0,2:0,3:1,4:1,5:1,6:1,7:0.6,8:1,9:1,10:1,11:1,12:0.5}
def vol_col(altas, mad, year_fact=FACT, start_age=None):
    # altas: dict mes->colegios nuevos; start_age: edades de colegios existentes
    cohorts=list(start_age or [])
    out=[]
    for m in range(1,13):
        for _ in range(altas.get(m,0)): cohorts.append(0)
        if year_fact[m]==0: out.append(0); continue
        v=0
        for i,a in enumerate(cohorts):
            v+= (RAMP[a] if a<len(RAMP) else mad)
            cohorts[i]=a+1
        out.append(round(v*year_fact[m]))
    return out,cohorts
def run(altas27,altas28,extra27=0,extra28=0,col29=(30,36,42),price29=22,asist=1):
    v27,coh=vol_col(altas27,MAD27)
    tot27=sum(v27)+OTROS27
    v28,coh=vol_col(altas28,MAD28,start_age=[max(a,4) for a in coh])
    tot28=sum(v28)+sum(OTROS28)
    n27=sum(altas27.values()); n28=n27+sum(altas28.values())
    F27=F27_BASE+extra27; F28=F28_BASE+extra28
    r27=tot27*C27-F27; r28=tot28*C28-F28-3934
    res=[(2027,n27,tot27,round(tot27*P27),round(r27)),(2028,n28,tot28,round(tot28*P28),round(r28))]
    acc=r27+r28; per=tot28/n28
    for y,col in zip((2029,2030,2031),col29):
        V=col*per*1.0; p=P28*(price29/22); c=C28+0.17+(p-P28)
        ventas=V*p
        asistentes= (1 if col>16 else 0)+(1 if col>32 else 0)
        pers=34200+27360+17784*asistentes+10296*V/72336
        Fx=pers+0.08*ventas+13800+9420*V/72336+3080*V/72336+4500+946
        r=V*c-Fx-(1900 if y==2029 else 0); acc+=r
        res.append((y,col,round(V),round(ventas),round(r)))
    return res,v27,v28,round(acc)
if __name__=='__main__':
    plan={3:6,8:4}
    print('PLAN ACTUAL (aprox):',run(plan,{3:6},col29=(20,24,28)))
    crec={3:8,4:1,5:1,6:1,8:2,9:1}   # 14 colegios a septiembre
    print('CRECIMIENTO 14 a 2027, 24 en 2028:',run(crec,{3:4,4:2,5:2,8:2},extra27=6000,extra28=20784,col29=(30,36,42)))
    print('CRECIMIENTO + S/24 en 2029:',run(crec,{3:4,4:2,5:2,8:2},extra27=6000,extra28=20784,col29=(30,36,42),price29=24))
