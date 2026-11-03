// Andi: el niño del envase de AndiBite (7 años, chullo rojo con grecas, trenzas, chompa roja).
// Es quien habla en Misión Hierro y el protagonista de las historietas. Killa es su llamita.
// Si hay una imagen ilustrada en public/img/andi/ (lista en data/andi-imagenes.ts), se muestra esa; si no, el SVG.
import { useId } from 'react';
import { IMAGENES_ANDI } from '../data/andi-imagenes';

export type Animo = 'feliz' | 'wow' | 'piensa' | 'duerme';
interface Props {
  animo?: Animo;
  tam?: number;
  className?: string;
  titulo?: string;
}

const ALTO = 260 / 240;
const PIEL = '#F2C9A6', PIEL_SOMBRA = '#E4B48E', PELO = '#2B1A14', CACAO = '#4A2018', LADRILLO = '#BA4036', VINO = '#8A1C2B', DORADO = '#E3A33B', OLIVA = '#7C8A3A', CREMA = '#FBF3E8';

export default function AndiNino({ animo = 'feliz', tam = 160, className = '', titulo = 'Andi' }: Props) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');
  const img = IMAGENES_ANDI.find(f => f === `${animo}.png`) || IMAGENES_ANDI.find(f => f === 'feliz.png');
  if (img) {
    return <img src={`/img/andi/${img}`} alt={titulo} className={`andi andi-img ${className}`} style={{ width: tam, height: tam * ALTO, objectFit: 'contain' }} draggable={false} />;
  }
  const dx = animo === 'piensa' ? 4 : 0;
  return (
    <svg viewBox="0 0 240 260" width={tam} height={tam * ALTO} className={`andi andi-nino ${className}`} role="img" aria-label={titulo}>
      <defs>
        <radialGradient id={`${id}-piel`} cx="45%" cy="35%" r="70%"><stop offset="0" stopColor="#F7D6B8" /><stop offset="1" stopColor={PIEL} /></radialGradient>
        <clipPath id={`${id}-cuerpo`}><path d="M62 258 L66 196 Q70 162 120 160 Q170 162 174 196 L178 258 Z" /></clipPath>
      </defs>

      {/* sombra */}
      <ellipse cx="120" cy="252" rx="60" ry="7" fill={CACAO} opacity=".1" />

      {/* trenzas */}
      <g stroke={PELO} strokeWidth="14" strokeLinecap="round" fill="none">
        <path d="M74 118 Q62 150 70 180" /><path d="M166 118 Q178 150 170 180" />
      </g>
      <g fill={LADRILLO}><circle cx="70" cy="184" r="7" /><circle cx="170" cy="184" r="7" /></g>

      {/* cuerpo: chompa roja con borde dorado */}
      <path d="M62 258 L66 196 Q70 162 120 160 Q170 162 174 196 L178 258 Z" fill={LADRILLO} />
      <g clipPath={`url(#${id}-cuerpo)`}>
        <rect x="56" y="208" width="130" height="8" fill={DORADO} />
        <rect x="56" y="222" width="130" height="4" fill={DORADO} opacity=".7" />
        <path d="M100 160 Q120 176 140 160 L140 170 Q120 186 100 170 Z" fill={VINO} />
      </g>
      {/* manos */}
      <circle cx="70" cy="226" r="11" fill={PIEL} /><circle cx="170" cy="226" r="11" fill={PIEL} />

      {/* cabeza */}
      <circle cx="120" cy="108" r="54" fill={`url(#${id}-piel)`} />
      <ellipse cx="68" cy="112" rx="8" ry="10" fill={PIEL_SOMBRA} /><ellipse cx="172" cy="112" rx="8" ry="10" fill={PIEL_SOMBRA} />
      {/* flequillo */}
      <path d="M70 100 Q80 72 120 70 Q160 72 170 100 Q150 86 128 92 Q118 82 108 92 Q88 86 70 100 Z" fill={PELO} />

      {/* chullo */}
      <path d="M64 92 Q68 40 120 36 Q172 40 176 92 Z" fill={LADRILLO} />
      <path d="M66 86 Q120 70 174 86 L176 100 Q120 84 64 100 Z" fill={VINO} />
      <g fill={DORADO}>
        {[80, 96, 112, 128, 144, 160].map(x => <path key={x} d={`M${x - 5} 94 L${x} 86 L${x + 5} 94 Z`} />)}
        {[88, 104, 120, 136, 152].map(x => <rect key={x} x={x - 2} y="97" width="4" height="4" />)}
      </g>
      <circle cx="120" cy="36" r="8" fill={DORADO} /><circle cx="120" cy="36" r="4" fill={CREMA} />
      {/* orejeras con borlas */}
      <path d="M64 96 Q56 120 66 136 Q78 132 82 112 Z" fill={LADRILLO} /><path d="M176 96 Q184 120 174 136 Q162 132 158 112 Z" fill={LADRILLO} />
      <path d="M66 136 L62 152" stroke={DORADO} strokeWidth="3" strokeLinecap="round" /><path d="M174 136 L178 152" stroke={DORADO} strokeWidth="3" strokeLinecap="round" />
      <circle cx="61" cy="156" r="5" fill={OLIVA} /><circle cx="179" cy="156" r="5" fill={OLIVA} />

      {/* mejillas */}
      <circle cx="90" cy="124" r="9" fill="#F0A090" opacity=".65" /><circle cx="150" cy="124" r="9" fill="#F0A090" opacity=".65" />

      {/* ojos */}
      {animo === 'feliz' && (
        <g stroke={PELO} strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M92 114 Q100 104 108 114" /><path d="M132 114 Q140 104 148 114" />
        </g>
      )}
      {animo === 'duerme' && (
        <g stroke={PELO} strokeWidth="4" fill="none" strokeLinecap="round">
          <path d="M92 110 Q100 118 108 110" /><path d="M132 110 Q140 118 148 110" />
          <g fill={CACAO} fontFamily="'Baloo 2', Nunito, sans-serif" fontWeight="800"><text x="178" y="72" fontSize="16">z</text><text x="190" y="56" fontSize="22">z</text></g>
        </g>
      )}
      {(animo === 'wow' || animo === 'piensa') && (
        <g>
          <ellipse cx={100 + dx} cy="112" rx={animo === 'wow' ? 9 : 7.5} ry={animo === 'wow' ? 11 : 9} fill={PELO} />
          <ellipse cx={140 + dx} cy="112" rx={animo === 'wow' ? 9 : 7.5} ry={animo === 'wow' ? 11 : 9} fill={PELO} />
          <circle cx={103 + dx} cy="108" r="3.5" fill="#fff" /><circle cx={143 + dx} cy="108" r="3.5" fill="#fff" />
          {animo === 'piensa' && <path d="M90 98 Q100 92 110 98" stroke={PELO} strokeWidth="3.5" fill="none" strokeLinecap="round" />}
        </g>
      )}

      {/* nariz y boca */}
      <path d="M117 126 Q120 132 123 126" stroke={PIEL_SOMBRA} strokeWidth="3" fill="none" strokeLinecap="round" />
      {animo === 'feliz' && <path d="M104 138 Q120 156 136 138 Z" fill="#D9594D" stroke={CACAO} strokeWidth="3" strokeLinejoin="round" />}
      {animo === 'wow' && <ellipse cx="120" cy="142" rx="8" ry="10" fill="#D9594D" stroke={CACAO} strokeWidth="3" />}
      {animo === 'piensa' && <path d="M110 142 Q116 138 122 142 T134 142" stroke={CACAO} strokeWidth="3" fill="none" strokeLinecap="round" />}
      {animo === 'duerme' && <path d="M112 142 Q120 147 128 142" stroke={CACAO} strokeWidth="3" fill="none" strokeLinecap="round" />}
    </svg>
  );
}
