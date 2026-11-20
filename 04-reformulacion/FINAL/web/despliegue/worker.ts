// Worker de la presentación de la feria: entrega los archivos guardados en el KV FERIA_ACTIVOS.
import { servirActivo, type KVActivos } from './activos';
export interface Env { FERIA_ACTIVOS: KVActivos }
export default {
  fetch(req: Request, env: Env): Promise<Response> {
    return servirActivo(env.FERIA_ACTIVOS, new URL(req.url).pathname, req.headers.get('Range'));
  },
};
