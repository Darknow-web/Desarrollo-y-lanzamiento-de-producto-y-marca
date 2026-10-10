# Andi, Misión Hierro — la app de AndiBite

App web instalable (PWA) que viene con cada envase de AndiBite. El concepto, los costos y el cumplimiento legal están en `../04-reformulacion/09-app-andi-mision-hierro.md`.

- **Modo padres:** escaneas el QR del envase y ves el **hierro medido en laboratorio de tu lote**. Además tienes:
  - el semáforo de hierro de la semana;
  - el plan de loncheras, con IA de Gemini o con nuestro recetario;
  - el control de hemoglobina;
  - la despensa, con aviso de recompra y pedido por WhatsApp;
  - los stands y ferias donde estamos.
- **Modo niños, "Misión Hierro":** Andi, una llamita exploradora, recorre los Andes con 4 juegos educativos y voz:
  - Arma tu plato fuerte;
  - Memoria andina;
  - ¿Verdad o mito?;
  - Ruta de hábitos.

  El modo lo abre el padre con un candado y él fija el tiempo de juego. No tiene compras, ni publicidad, ni premios por comprar (Ley 30021, art. 8).
- **Panel del equipo (`/admin`):** sirve para:
  - publicar el análisis de laboratorio de cada lote;
  - generar los códigos únicos e imprimir la hoja de QR (o bajar el CSV para la imprenta);
  - ver cuántos envases se escanean;
  - editar los puntos de venta.

Los datos de la familia se guardan **solo en el teléfono** (Ley 29733). Al servidor solo llega el código escaneado, sin datos personales.

## Probarla en tu computadora

Necesitas Node.js 20 o superior.

```bash
npm install
npm run dev          # app en http://localhost:5173 y API en http://localhost:8080
```

Para la versión final, igual a la que se publica:

```bash
npm run build
ADMIN_TOKEN=una-clave-larga npm start     # http://localhost:8080
```

**Códigos de demostración** (lotes marcados como DEMO):

| Código | Lote |
|---|---|
| `AB-2ANS-GYZ4` | Chispa, pack de 6 |
| `AB-2J7E-4DDY` | Andi, pack de 6 |
| `AB-MF83-HSNE` | Lúcu, pack de 12 |

Ábrelos en `http://localhost:8080/c/AB-2ANS-GYZ4` o escríbelos en *Escanear*.

Para entrar al modo niños: mantén presionado el candado 2 segundos y resuelve la suma.

**Pruebas:**
- `npm test` corre las pruebas de la lógica: códigos, semáforo y loncheras.
- `node scripts/capturas.mjs` recorre todas las pantallas y guarda capturas (requiere Playwright).

## Publicarla en Google Cloud Run

1. Instala la [CLI de Google Cloud](https://cloud.google.com/sdk/docs/install) e inicia sesión:
   ```bash
   gcloud auth login
   gcloud config set project TU-PROYECTO
   ```
2. Activa los servicios y crea la base de datos (una sola vez). Santiago es la región más cercana a Lima.
   ```bash
   gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com firestore.googleapis.com secretmanager.googleapis.com
   gcloud firestore databases create --location=southamerica-west1
   ```
3. Guarda las claves como secretos:
   ```bash
   printf 'una-clave-larga-y-secreta' | gcloud secrets create andi-admin-token --data-file=-
   printf 'TU_CLAVE_DE_GEMINI' | gcloud secrets create andi-gemini-key --data-file=-   # opcional
   ```
   La clave de Gemini se obtiene en [Google AI Studio](https://aistudio.google.com/apikey).
4. Publica desde esta carpeta. Cloud Run construye el `Dockerfile` solo:
   ```bash
   gcloud run deploy andi-mision-hierro --source . --region southamerica-west1 --allow-unauthenticated \
     --set-env-vars STORE=firestore,WHATSAPP_NUMBER=51XXXXXXXXX,PUBLIC_URL=https://TU-DOMINIO \
     --set-secrets ADMIN_TOKEN=andi-admin-token:latest,GEMINI_API_KEY=andi-gemini-key:latest \
     --min-instances 0 --max-instances 3 --memory 512Mi
   ```
5. Da permiso a la cuenta de servicio de Cloud Run para usar Firestore y leer los secretos. Los roles son `roles/datastore.user` y `roles/secretmanager.secretAccessor`, y la cuenta por defecto es `NUMERO-compute@developer.gserviceaccount.com`.
6. (Opcional) Conecta tu dominio con `gcloud run domain-mappings create`, o desde la consola, y actualiza `PUBLIC_URL`. **Esa URL es la que va dentro de cada QR**, así que defínela antes de imprimir etiquetas.

La primera vez que arranca con Firestore vacío, la app carga los lotes y puntos de demostración de `data/seed.json`. Luego el equipo los reemplaza desde `/admin`.

**Sobre Google AI Studio:** AI Studio entrega la clave de Gemini que usa el plan de loncheras. Sus apps también se publican en Cloud Run, así que esta guía llega al mismo destino. El código está listo para Cloud Run: no hace falta adaptarlo.

**Costo esperado:** Cloud Run escala a cero cuando nadie la usa. Con el tráfico del año 1 (unos 10,000 escaneos: el 30 % de los envases), el servidor, Firestore y Gemini quedan dentro o cerca de los niveles gratuitos. El plan financiero reserva S/250 al mes que incluyen el mantenimiento.

## Variables de entorno

| Variable | Para qué |
|---|---|
| `PUBLIC_URL` | Dirección pública, que va dentro del QR de cada envase |
| `ADMIN_TOKEN` | Clave del panel `/admin`. Sin ella, el panel queda cerrado |
| `WHATSAPP_NUMBER` | Número para pedidos (ej.: `51987654321`) |
| `GEMINI_API_KEY`, `GEMINI_MODEL` | Plan de loncheras con IA (opcional; por defecto `gemini-2.5-flash`) |
| `STORE` | `file` (archivo JSON, para pruebas) o `firestore` (producción) |
| `DATA_DIR`, `FIRESTORE_DATABASE` | Carpeta del archivo JSON, o base de Firestore si no es la predeterminada |

Hay un ejemplo en `.env.example`.

## Cómo está hecha

```
src/
  parents/   pantallas de padres (inicio, lote, escanear, hierro, loncheras, despensa, hemoglobina, dónde, más)
  kids/      Misión Hierro: puerta para padres, mapa, 4 juegos, celebración y tiempo de juego
  admin/     panel del equipo
  components Andi (personaje en SVG), íconos y componentes base
  data/      alimentos con hierro (CENAN), recetario, contenido educativo y precios
  lib/       estado local, códigos, cálculos de hierro, fechas, voz, calendario (.ics) y API
server/      Express: API de códigos y lotes, Gemini y almacenamiento (archivo o Firestore)
public/      manifest, service worker (funciona sin conexión) e íconos
```

- **Frente:** React 19, TypeScript y Vite, con fuentes incluidas (no depende de servicios externos).
- **Servidor:** Node.js con Express. La clave de Gemini nunca llega al teléfono.
- **Códigos:** `AB-XXXX-XXXX` con dígito de control; detectan errores de tipeo sin consultar al servidor.
- **Escáner:** usa la cámara donde el navegador lo permite (Android/Chrome). En iPhone se abre el QR con la cámara del teléfono, que lleva directo al lote.
- **Recordatorios:** se agregan al calendario del teléfono (`.ics`) y se avisan al abrir la app.

## Antes de lanzar (pendiente del equipo)

- Reemplazar los lotes DEMO por el informe real del laboratorio de cada lote.
- Poner el número de WhatsApp real y el registro sanitario.
- Revisar los textos legales con el abogado del contrato de maquila.
- Probar la app con 10 familias, como indica el documento 09.
