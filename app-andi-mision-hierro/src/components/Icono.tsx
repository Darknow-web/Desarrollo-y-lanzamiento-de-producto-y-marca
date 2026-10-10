// Íconos de línea (24 x 24) dibujados para la app.
const P: Record<string, string> = {
  inicio: 'M3 11.5 12 4l9 7.5M5.5 9.5V20h13V9.5M10 20v-5h4v5',
  gota: 'M12 3.5s6 6.4 6 10.6A6 6 0 0 1 6 14.1C6 9.9 12 3.5 12 3.5Z',
  lonchera: 'M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9Zm4 0V7a4 4 0 0 1 8 0v2M4 13h16',
  mas: 'M5 12h.01M12 12h.01M19 12h.01',
  qr: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h2v2h-2zM18 14h2M14 18h2M18 18h2v2',
  camara: 'M4 8h3l2-3h6l2 3h3v11H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
  campana: 'M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Zm4 4h4',
  calendario: 'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4',
  mapa: 'M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  check: 'M5 12.5 10 17 19 7',
  x: 'M6 6l12 12M18 6 6 18',
  derecha: 'M9 5l7 7-7 7',
  atras: 'M15 5l-7 7 7 7',
  sumar: 'M12 5v14M5 12h14',
  restar: 'M5 12h14',
  basura: 'M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13',
  compartir: 'M12 4v11M8 8l4-4 4 4M5 13v6h14v-6',
  whatsapp: 'M4 20l1.3-4A8 8 0 1 1 8.5 19L4 20Zm5-11c0 3.5 2.5 6 6 6l1.2-1.3-2-1-1 .8a4.5 4.5 0 0 1-2.7-2.7l.8-1-1-2L9 9Z',
  corazon: 'M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.2 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z',
  candado: 'M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3',
  estrella: 'M12 3.8l2.5 5.2 5.7.8-4.1 4 1 5.7L12 16.8l-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3.8Z',
  parlante: 'M4 10v4h4l5 4V6L8 10H4Zm12-1a4 4 0 0 1 0 6m2.5-8.5a7.5 7.5 0 0 1 0 11',
  info: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-10v6m0-9.5v.5',
  escudo: 'M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3Zm-3 9 2 2 4-4',
  descarga: 'M12 4v11m-4-4 4 4 4-4M5 19h14',
  reloj: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3 2',
  matraz: 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3M7.5 15h9',
  bolsa: 'M5 8h14l-1 12H6L5 8Zm4 0V6a3 3 0 0 1 6 0v2',
  ninos: 'M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-6 13v-3a6 6 0 0 1 12 0v3M3 13l3-2m15 2-3-2',
  ajustes: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-3a7.4 7.4 0 0 0-.1-1.3l2-1.6-2-3.4-2.4 1a7.5 7.5 0 0 0-2.2-1.3L14.3 3h-4l-.4 2.5a7.5 7.5 0 0 0-2.2 1.3l-2.4-1-2 3.4 2 1.6a7.4 7.4 0 0 0 0 2.6l-2 1.6 2 3.4 2.4-1a7.5 7.5 0 0 0 2.2 1.3l.4 2.5h4l.4-2.5a7.5 7.5 0 0 0 2.2-1.3l2.4 1 2-3.4-2-1.6c.1-.4.1-.9.1-1.3Z',
  editar: 'M4 20h4L19 9l-4-4L4 16v4Zm9-13 4 4',
  copiar: 'M8 8h11v12H8zM5 16V4h11',
  rayo: 'M13 3 5 13h6l-1 8 8-10h-6l1-8Z',
  sol: 'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-15v2m0 16v2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M2 12h2m16 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4',
  grafico: 'M4 20V4m0 16h16M8 16v-4m4 4V8m4 8v-6',
};
export type NombreIcono = keyof typeof P;
export default function Icono({ n, tam = 22, grosor = 2, className = '' }: { n: NombreIcono; tam?: number; grosor?: number; className?: string }) {
  return (
    <svg width={tam} height={tam} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={grosor} strokeLinecap="round" strokeLinejoin="round" className={`icono ${className}`} aria-hidden="true">
      <path d={P[n]} />
    </svg>
  );
}
