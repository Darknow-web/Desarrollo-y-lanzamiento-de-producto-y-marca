// Andi: llamita exploradora, ilustrada en SVG (cuerpo redondo, cabeza grande, ojos brillantes).
// Se viste con el look que el niño elige en «Viste a Andi». Si hay una imagen generada en
// public/img/andi/ (lista en data/andi-imagenes.ts), se muestra esa en lugar del SVG.
import { useId } from 'react';
import type { Look, Pieza } from '../data/ninos';
import { IMAGENES_ANDI } from '../data/andi-imagenes';

export type Animo = 'feliz' | 'wow' | 'piensa' | 'duerme';
interface Props {
  look?: Look | 'ninguno';
  animo?: Animo;
  tam?: number;
  className?: string;
  titulo?: string;
  /** @deprecated compatibilidad con el traje por piezas: cualquier pieza se dibuja como look explorador. */
  piezas?: Pieza[];
}

const ALTO = 260 / 240;
const CACAO = '#4A2018', TINTA = '#2B130E', BORDE = '#E4D0B6', LADRILLO = '#BA4036', DORADO = '#E3A33B', OLIVA = '#7C8A3A', KRAFT = '#D9B48F';

function imagenPara(look: string, animo: Animo): string | undefined {
  const quiere = [`${look}-${animo}.png`, `look-${look}.png`, `base-${animo}.png`, 'base-feliz.png'];
  return quiere.find(f => IMAGENES_ANDI.includes(f));
}

export default function Andi({ look, piezas, animo = 'feliz', tam = 160, className = '', titulo = 'Andi, la llamita exploradora' }: Props) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, '');
  const estilo: Look | 'ninguno' = look && look !== 'ninguno' ? look : piezas?.length ? 'explorador' : 'ninguno';
  const img = IMAGENES_ANDI.length ? imagenPara(estilo === 'ninguno' ? 'base' : estilo, animo) : undefined;
  if (img) {
    return <img src={`/img/andi/${img}`} alt={titulo} className={`andi andi-img ${className}`} style={{ width: tam, height: tam * ALTO, objectFit: 'contain' }} draggable={false} />;
  }
  const gLana = `url(#${id}-lana)`, gCara = `url(#${id}-cara)`, gOjo = `url(#${id}-ojo)`;
  const conSombrero = estilo === 'explorador' || estilo === 'chef' || estilo === 'pijama' || estilo === 'fiesta';
  const ojosArriba = animo === 'piensa';
  const dy = ojosArriba ? -4 : 0, dx = ojosArriba ? 3 : 0;
  const rx = animo === 'wow' ? 11.5 : 10, ry = animo === 'wow' ? 13.5 : 12;

  return (
    <svg viewBox="0 0 240 260" width={tam} height={tam * ALTO} className={`andi ${className}`} role="img" aria-label={titulo}>
      <defs>
        <radialGradient id={`${id}-lana`} cx="40%" cy="30%" r="80%"><stop offset="0" stopColor="#FFFEFA" /><stop offset=".7" stopColor="#FBF1E1" /><stop offset="1" stopColor="#EEDAC0" /></radialGradient>
        <radialGradient id={`${id}-cara`} cx="50%" cy="35%" r="70%"><stop offset="0" stopColor="#FBEDDD" /><stop offset="1" stopColor="#F1DCC4" /></radialGradient>
        <radialGradient id={`${id}-ojo`} cx="40%" cy="35%" r="75%"><stop offset="0" stopColor="#4A2A20" /><stop offset="1" stopColor={TINTA} /></radialGradient>
        <clipPath id={`${id}-cuerpo`}><ellipse cx="120" cy="178" rx="64" ry="40" /></clipPath>
        <clipPath id={`${id}-cono`}><path d="M96 52 L120 6 L144 52 Z" /></clipPath>
      </defs>

      {/* sombra */}
      <ellipse cx="120" cy="250" rx="62" ry="8" fill={CACAO} opacity=".1" />

      {/* patas */}
      <g>
        {[84, 106, 134, 156].map((x, i) => (
          <g key={x}>
            <rect x={x - 10} y="196" width="20" height="44" rx="10" fill={i === 0 || i === 3 ? '#F1DFC7' : '#FBF1E1'} stroke={BORDE} strokeWidth="2" />
            <rect x={x - 10} y="229" width="20" height="12" rx="6" fill="#6B3A2A" />
          </g>
        ))}
      </g>

      {/* cuerpo */}
      <ellipse cx="120" cy="178" rx="64" ry="40" fill={gLana} stroke={BORDE} strokeWidth="2.5" />
      {estilo === 'deportista' && (
        <g clipPath={`url(#${id}-cuerpo)`}>
          <rect x="40" y="136" width="160" height="50" fill={OLIVA} />
          <rect x="40" y="160" width="160" height="7" fill="#fff" opacity=".9" />
          <circle cx="120" cy="170" r="9" fill="#fff" /><circle cx="120" cy="170" r="4.5" fill={LADRILLO} />
        </g>
      )}
      {estilo === 'pijama' && (
        <g clipPath={`url(#${id}-cuerpo)`} fill="#A9C9E8" opacity=".9">
          {[[76, 160], [104, 150], [132, 158], [160, 152], [90, 184], [120, 190], [150, 186], [66, 200], [176, 198]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="5" />)}
        </g>
      )}

      {/* orejas */}
      <g>
        <g transform="rotate(-22 78 38)"><ellipse cx="78" cy="38" rx="13" ry="28" fill={gLana} stroke={BORDE} strokeWidth="2.5" /><ellipse cx="78" cy="42" rx="6" ry="18" fill="#F7B9AE" /></g>
        <g transform="rotate(22 162 38)"><ellipse cx="162" cy="38" rx="13" ry="28" fill={gLana} stroke={BORDE} strokeWidth="2.5" /><ellipse cx="162" cy="42" rx="6" ry="18" fill="#F7B9AE" /></g>
      </g>

      {/* cabeza */}
      <circle cx="120" cy="84" r="58" fill={gLana} stroke={BORDE} strokeWidth="2.5" />
      {!conSombrero && (
        <g fill="#FFFEFA" stroke={BORDE} strokeWidth="2">
          <circle cx="104" cy="33" r="12" /><circle cx="136" cy="33" r="12" /><circle cx="120" cy="27" r="14" />
        </g>
      )}

      {/* cara */}
      <ellipse cx="120" cy="112" rx="30" ry="20" fill={gCara} />
      <circle cx="84" cy="106" r="9" fill="#F5A79E" opacity=".7" /><circle cx="156" cy="106" r="9" fill="#F5A79E" opacity=".7" />
      {animo === 'duerme' ? (
        <g stroke={CACAO} strokeWidth="3.5" fill="none" strokeLinecap="round">
          <path d="M88 88 Q99 97 110 88" /><path d="M130 88 Q141 97 152 88" />
          <g fill={CACAO} stroke="none" fontFamily="'Baloo 2', Nunito, sans-serif" fontWeight="800">
            <text x="170" y="56" fontSize="16">z</text><text x="182" y="40" fontSize="22">z</text>
          </g>
        </g>
      ) : (
        <g className="andi-ojos">
          {ojosArriba && <path d="M86 70 Q98 62 110 68" stroke={CACAO} strokeWidth="3.5" fill="none" strokeLinecap="round" />}
          <ellipse cx={99 + dx} cy={86 + dy} rx={rx} ry={ry} fill={gOjo} />
          <ellipse cx={141 + dx} cy={86 + dy} rx={rx} ry={ry} fill={gOjo} />
          <circle cx={103 + dx} cy={81 + dy} r="4" fill="#fff" /><circle cx={145 + dx} cy={81 + dy} r="4" fill="#fff" />
          <circle cx={95 + dx} cy={91 + dy} r="1.8" fill="#fff" opacity=".85" /><circle cx={137 + dx} cy={91 + dy} r="1.8" fill="#fff" opacity=".85" />
        </g>
      )}
      <ellipse cx="114" cy="108" rx="2.6" ry="2" fill={CACAO} /><ellipse cx="126" cy="108" rx="2.6" ry="2" fill={CACAO} />
      {animo === 'feliz' && <path d="M108 117 Q120 131 132 117 Z" fill="#D9594D" stroke={CACAO} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />}
      {animo === 'wow' && <ellipse cx="120" cy="122" rx="7" ry="9" fill="#D9594D" stroke={CACAO} strokeWidth="3" />}
      {animo === 'piensa' && <path d="M111 121 Q116 117 121 121 T131 121" stroke={CACAO} strokeWidth="3" fill="none" strokeLinecap="round" />}
      {animo === 'duerme' && <path d="M113 122 Q120 126 127 122" stroke={CACAO} strokeWidth="3" fill="none" strokeLinecap="round" />}

      {/* looks */}
      {estilo === 'explorador' && (
        <g>
          <path d="M90 140 Q120 152 150 140 L120 172 Z" fill={LADRILLO} /><circle cx="120" cy="143" r="5" fill="#9C3229" />
          <ellipse cx="120" cy="52" rx="66" ry="12" fill={KRAFT} stroke="#B8936B" strokeWidth="2.5" />
          <path d="M78 52 Q80 14 120 12 Q160 14 162 52 Z" fill={KRAFT} stroke="#B8936B" strokeWidth="2.5" />
          <path d="M79 44 Q120 33 161 44 L162 52 Q120 42 78 52 Z" fill={CACAO} />
        </g>
      )}
      {estilo === 'chef' && (
        <g>
          <path d="M90 140 Q120 152 150 140 L120 172 Z" fill={LADRILLO} /><circle cx="120" cy="143" r="5" fill="#9C3229" />
          <g fill="#fff" stroke="#DDD3C6" strokeWidth="2">
            <circle cx="96" cy="30" r="16" /><circle cx="144" cy="30" r="16" /><circle cx="120" cy="22" r="20" />
            <rect x="84" y="38" width="72" height="20" rx="7" />
          </g>
        </g>
      )}
      {estilo === 'astronauta' && (
        <g>
          <ellipse cx="120" cy="148" rx="46" ry="12" fill="#D9DEE6" stroke="#AAB3C2" strokeWidth="3" />
          <circle cx="120" cy="170" r="7" fill={LADRILLO} /><circle cx="120" cy="170" r="3" fill="#fff" />
          <ellipse cx="120" cy="72" rx="80" ry="84" fill="#BFE3F5" opacity=".28" stroke="#fff" strokeWidth="5" />
          <path d="M56 70 Q66 26 110 10" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".85" />
        </g>
      )}
      {estilo === 'deportista' && (
        <g>
          <path d="M66 66 Q120 52 174 66 L174 80 Q120 66 66 80 Z" fill={LADRILLO} />
          <path d="M67 72 Q120 58 173 72" stroke="#fff" strokeWidth="3.5" fill="none" />
        </g>
      )}
      {estilo === 'pijama' && (
        <g>
          <path d="M76 52 Q92 12 130 14 Q170 10 192 30 Q176 26 160 34 Q164 44 164 52 Z" fill="#A9C9E8" stroke="#8FB4DA" strokeWidth="2" />
          <path d="M74 48 Q120 36 166 48 L166 60 Q120 48 74 60 Z" fill="#fff" stroke="#C9DCF0" strokeWidth="2" />
          <circle cx="194" cy="32" r="8" fill="#fff" stroke="#C9DCF0" strokeWidth="2" />
        </g>
      )}
      {estilo === 'fiesta' && (
        <g>
          <path d="M106 140 L120 148 L106 156 Z M134 140 L120 148 L134 156 Z" fill={LADRILLO} /><circle cx="120" cy="148" r="4" fill="#9C3229" />
          <path d="M96 52 L120 6 L144 52 Z" fill={DORADO} />
          <g clipPath={`url(#${id}-cono)`} fill={LADRILLO}>
            <rect x="80" y="14" width="80" height="8" transform="rotate(-20 120 18)" /><rect x="80" y="30" width="80" height="8" transform="rotate(-20 120 34)" /><rect x="80" y="46" width="80" height="8" transform="rotate(-20 120 50)" />
          </g>
          <circle cx="120" cy="8" r="7" fill={LADRILLO} />
          <g>
            <circle cx="42" cy="62" r="4" fill={LADRILLO} /><circle cx="200" cy="72" r="4" fill={OLIVA} /><circle cx="52" cy="124" r="3.5" fill={DORADO} /><circle cx="196" cy="128" r="3.5" fill={LADRILLO} />
            <rect x="30" y="96" width="8" height="4" rx="1" transform="rotate(30 34 98)" fill={OLIVA} /><rect x="206" y="100" width="8" height="4" rx="1" transform="rotate(-30 210 102)" fill={DORADO} />
          </g>
        </g>
      )}
    </svg>
  );
}
