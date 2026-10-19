// Worker de la presentación: solo entrega los archivos de dist/ guardados en el KV ACTIVOS.
import { servirActivo, type KVActivos } from './activos';

export interface Env {
  ACTIVOS: KVActivos;
}

export default {
  fetch(req: Request, env: Env): Promise<Response> {
    return servirActivo(env.ACTIVOS, new URL(req.url).pathname);
  },
};
