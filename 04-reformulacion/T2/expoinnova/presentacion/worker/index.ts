// Worker de la presentación de Expoinnova: entrega los archivos de dist/ guardados en el KV EXPO_ACTIVOS.
import { servirActivo, type KVActivos } from './activos';

export interface Env {
  EXPO_ACTIVOS: KVActivos;
}

export default {
  fetch(req: Request, env: Env): Promise<Response> {
    return servirActivo(env.EXPO_ACTIVOS, new URL(req.url).pathname);
  },
};
