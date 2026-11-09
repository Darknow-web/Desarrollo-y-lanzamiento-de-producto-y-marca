// Worker de la presentación del T3: entrega los archivos de dist/ guardados en el KV T3_ACTIVOS.
import { servirActivo, type KVActivos } from './activos';

export interface Env {
  T3_ACTIVOS: KVActivos;
}

export default {
  fetch(req: Request, env: Env): Promise<Response> {
    return servirActivo(env.T3_ACTIVOS, new URL(req.url).pathname, req.headers.get('Range'));
  },
};
