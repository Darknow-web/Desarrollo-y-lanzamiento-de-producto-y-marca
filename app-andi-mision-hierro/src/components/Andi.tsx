// Andi: llamita exploradora, ilustrada en SVG. Se viste con las piezas que el niño gana jugando.
import type { Pieza } from '../data/ninos';

interface Props { piezas?: Pieza[]; animo?: 'feliz' | 'wow' | 'piensa' | 'duerme'; tam?: number; className?: string; titulo?: string }

export default function Andi({ piezas = [], animo = 'feliz', tam = 160, className = '', titulo = 'Andi, la llamita exploradora' }: Props) {
  const tiene = (p: Pieza) => piezas.includes(p);
  const lana = '#FFF8EE', borde = '#E8D5BE', cacao = '#5A2E22';
  return (
    <svg viewBox="0 0 240 260" width={tam} height={tam * 260 / 240} className={`andi ${className}`} role="img" aria-label={titulo}>
      <defs>
        <clipPath id="andi-poncho"><path d="M68 150 L120 128 L172 150 L166 198 L74 198 Z" /></clipPath>
      </defs>
      <ellipse cx="120" cy="248" rx="70" ry="9" fill="#000" opacity=".08" />
      {tiene('mochila') && (
        <g>
          <rect x="166" y="138" width="40" height="50" rx="10" fill="#B9733A" />
          <rect x="166" y="138" width="40" height="18" rx="8" fill="#8C4F24" />
          <circle cx="186" cy="160" r="3.5" fill="#E9B730" />
        </g>
      )}
      <g className="andi-patas" fill="#F3E4CF">
        {[80, 104, 128, 152].map(x => (
          <g key={x}><rect x={x} y="190" width="18" height="50" rx="9" /><rect x={x} y="228" width="18" height="12" rx="6" fill={cacao} /></g>
        ))}
      </g>
      <ellipse cx="120" cy="172" rx="62" ry="34" fill={lana} stroke={borde} strokeWidth="3" />
      <path d="M70 186 q8 8 16 0 q8 8 16 0 q8 8 16 0 q8 8 16 0 q8 8 16 0 q8 8 16 0" fill="none" stroke={borde} strokeWidth="2.5" strokeLinecap="round" />
      {tiene('poncho') && (
        <g>
          <path d="M68 150 L120 128 L172 150 L166 198 L74 198 Z" fill="#8E5BD8" />
          <g clipPath="url(#andi-poncho)">
            <rect x="60" y="158" width="120" height="7" fill="#E9B730" />
            <rect x="60" y="170" width="120" height="5" fill="#2FA36B" />
            <rect x="60" y="180" width="120" height="7" fill="#FF7A59" />
            <path d="M60 194 l8 -6 l8 6 l8 -6 l8 6 l8 -6 l8 6 l8 -6 l8 6 l8 -6 l8 6 l8 -6 l8 6 l8 -6 l8 6" stroke="#FFF" strokeWidth="3" fill="none" />
          </g>
        </g>
      )}
      {tiene('mochila') && <path d="M100 140 Q140 162 172 150" stroke="#8C4F24" strokeWidth="6" fill="none" strokeLinecap="round" />}
      {tiene('medalla') && (
        <g>
          <path d="M112 142 L120 160 L128 142" fill="#3BA7E0" />
          <circle cx="120" cy="166" r="12" fill="#E9B730" stroke="#B9733A" strokeWidth="3" />
          <path d="M120 158 l2.6 5.4 5.9 .8 -4.3 4.1 1 5.8 -5.2 -2.8 -5.2 2.8 1 -5.8 -4.3 -4.1 5.9 -.8z" fill="#FFF8EE" />
        </g>
      )}
      <rect x="94" y="104" width="52" height="70" rx="26" fill={lana} />
      <ellipse cx="120" cy="90" rx="52" ry="46" fill={lana} stroke={borde} strokeWidth="3" />
      {!tiene('chullo') && (
        <g fill="#FFFDF8">
          <circle cx="104" cy="52" r="13" /><circle cx="136" cy="52" r="13" /><circle cx="120" cy="44" r="15" />
        </g>
      )}
      <g className="andi-orejas">
        <g transform="rotate(-20 84 40)"><ellipse cx="84" cy="40" rx="12" ry="27" fill={lana} stroke={borde} strokeWidth="3" /><ellipse cx="84" cy="42" rx="5.5" ry="17" fill="#F5B4AA" /></g>
        <g transform="rotate(20 156 40)"><ellipse cx="156" cy="40" rx="12" ry="27" fill={lana} stroke={borde} strokeWidth="3" /><ellipse cx="156" cy="42" rx="5.5" ry="17" fill="#F5B4AA" /></g>
      </g>
      {tiene('chullo') && (
        <g>
          <path d="M70 76 Q72 30 120 26 Q168 30 170 76 Z" fill="#D7392B" />
          <path d="M70 76 L170 76 L170 64 L70 64 Z" fill="#E9B730" />
          <path d="M72 70 l7 -6 l7 6 l7 -6 l7 6 l7 -6 l7 6 l7 -6 l7 6 l7 -6 l7 6 l7 -6 l7 6 l7 -6 l7 6" stroke="#FFF" strokeWidth="3" fill="none" />
          <path d="M84 48 h72" stroke="#FFF" strokeWidth="3" strokeDasharray="6 6" />
          <path d="M72 74 L62 110 L86 82 Z" fill="#D7392B" /><path d="M168 74 L178 110 L154 82 Z" fill="#D7392B" />
          <circle cx="62" cy="114" r="6" fill="#E9B730" /><circle cx="178" cy="114" r="6" fill="#E9B730" />
          <circle cx="120" cy="22" r="10" fill="#E9B730" />
        </g>
      )}
      <ellipse cx="120" cy="117" rx="27" ry="19" fill="#F4E3D0" />
      <circle cx="87" cy="108" r="8" fill="#F7A6A0" opacity=".65" /><circle cx="153" cy="108" r="8" fill="#F7A6A0" opacity=".65" />
      {animo === 'duerme' ? (
        <g stroke={cacao} strokeWidth="3.5" fill="none" strokeLinecap="round">
          <path d="M92 92 Q100 98 108 92" /><path d="M132 92 Q140 98 148 92" />
        </g>
      ) : (
        <g className="andi-ojos">
          <ellipse cx="100" cy={animo === 'piensa' ? 86 : 90} rx="8.5" ry="10.5" fill="#2B130E" />
          <ellipse cx="140" cy={animo === 'piensa' ? 86 : 90} rx="8.5" ry="10.5" fill="#2B130E" />
          <circle cx="103" cy={animo === 'piensa' ? 81 : 86} r="3.2" fill="#FFF" /><circle cx="143" cy={animo === 'piensa' ? 81 : 86} r="3.2" fill="#FFF" />
        </g>
      )}
      <ellipse cx="113" cy="110" rx="2.8" ry="2.2" fill={cacao} /><ellipse cx="127" cy="110" rx="2.8" ry="2.2" fill={cacao} />
      {animo === 'feliz' && <path d="M108 119 Q120 132 132 119" stroke={cacao} strokeWidth="3.5" fill="#E65B4F" strokeLinecap="round" strokeLinejoin="round" />}
      {animo === 'wow' && <ellipse cx="120" cy="124" rx="6" ry="7.5" fill="#E65B4F" stroke={cacao} strokeWidth="3" />}
      {animo === 'piensa' && <path d="M112 122 Q121 128 129 121" stroke={cacao} strokeWidth="3.5" fill="none" strokeLinecap="round" />}
      {animo === 'duerme' && <path d="M113 123 Q120 127 127 123" stroke={cacao} strokeWidth="3" fill="none" strokeLinecap="round" />}
    </svg>
  );
}
