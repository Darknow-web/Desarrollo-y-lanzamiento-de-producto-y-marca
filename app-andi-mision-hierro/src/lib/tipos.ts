export type Presentacion = 'unidad' | 'pack6' | 'pack12';
export type Sabor = 'Chispa' | 'Andi' | 'Lúcu';

export interface Nino { id: string; apodo: string; edad: number; avatar: string }
/** Una comida con hierro de un día: la única fuente del hierro diario del niño. */
export interface Registro {
  id: string; ninoId: string; fecha: string; alimentoId: string; nombre: string;
  mg: number; hemo: boolean; conVitC: boolean; loteId?: string;
  /** Pack de la despensa del que se descontó una unidad (para devolverla si se deshace). */
  despensaId?: string;
}
export interface ItemDespensa {
  id: string; presentacion: Presentacion; sabor: Sabor | 'Surtido'; unidades: number; restantes: number;
  porSemana: number; desde: string; codigo?: string; loteId?: string;
}
export interface Hemoglobina { proxima?: string; resultados: { fecha: string; valor: number }[] }
export interface DiaLonchera {
  dia: string; principal: string; fruta: string; bebida: string; hierroMg: number;
  fuenteHierro: string; preparacion: string; andibite?: boolean; hecho?: boolean;
}
export interface PlanLoncheras {
  semana: string; ninoId: string; fuente: 'recetario'; dias: DiaLonchera[]; compras: string[];
  consejo?: string; comprado?: string[];
}
export interface ProgresoNino {
  estrellas: number; jugados: Record<string, number>; habitos: Record<string, string[]>; premiados: Record<string, string>;
}
export interface Ajustes { tiempoJuegoMin: number; voz: boolean; avisos: boolean }

/** Lonchera vacía: por niño, cada día de colegio (YYYY-MM-DD) marcado true si la lonchera volvió vacía. Al marcar se registra un AndiBite ese día. */
export type Reto = Record<string, Record<string, boolean>>;

export interface Estado {
  version: 1;
  consentimiento?: { fecha: string; avisos: boolean };
  /** La bienvenida (3 pantallas) se muestra solo la primera vez. */
  bienvenidaVista?: boolean;
  ninos: Nino[];
  ninoActivo?: string;
  registros: Registro[];
  despensa: ItemDespensa[];
  hemoglobina: Record<string, Hemoglobina>;
  loncheras?: PlanLoncheras;
  progreso: Record<string, ProgresoNino>;
  reto: Reto;
  ajustes: Ajustes;
  codigosVistos: { code: string; loteId: string; fecha: string }[];
}

export interface Lote {
  id: string; sabor: Sabor; fechaProduccion: string; fechaVencimiento: string;
  hierroMgPorUnidad: number; hierroHemoMgPorUnidad?: number; azucarGPorUnidad?: number; pesoUnidadG?: number; octogonos: string[];
  laboratorio?: string; informe?: string; fechaInforme?: string; origenSangrecita?: string;
  registroSanitario?: string; planta?: string; alergenos: string[]; ingredientes?: string;
}
export interface Punto { id: string; nombre: string; lugar: string; distrito: string; desde: string; hasta?: string; horario?: string }
