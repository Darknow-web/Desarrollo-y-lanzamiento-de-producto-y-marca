# Andi, Misión Hierro: la app de AndiBite

App web instalable (PWA) que viene con cada envase de AndiBite. Se abre con el QR del envase y corre en **Cloudflare Workers**. El concepto, los costos y el cumplimiento legal están en `../04-reformulacion/09-app-andi-mision-hierro.md`; los colores y las letras salen del manual de marca (`../04-reformulacion/T2/md/T2_12_Manual-de-marca.md`).

- **Modo padres:**
  - escaneas el QR del envase (o pruebas con un envase de muestra) y ves el **hierro medido en laboratorio de tu lote**, el hierro hemo, el azúcar, los octógonos y el informe del laboratorio, sin registrarte;
  - agregas el pack a tu **despensa**: la app calcula cuándo se acaba, te avisa 2 días antes y arma el **pedido por WhatsApp** con el mensaje ya escrito;
  - **semáforo de hierro** de la semana;
  - **plan de loncheras con IA** (premium): cada pack escaneado desbloquea 14 días el plan semanal armado por Claude para el hijo (recetas con hierro paso a paso, fruta con vitamina C, lista de compras); al vencer, "Tu plan se renueva con tu próximo pack". Si el Worker no tiene la clave de IA, se usa el recetario propio de AndiBite;
  - control de **hemoglobina** y **dónde estamos** (stands del plan 2027).
- **Modo niños, "Misión Hierro":** Andi, una llamita exploradora, recorre los Andes con 4 juegos educativos y voz (Arma tu plato fuerte, Memoria andina, ¿Verdad o mito?, Ruta de hábitos). Lo abre el padre con un candado y él fija el tiempo de juego. No tiene compras, ni publicidad, ni premios por comprar (Ley 30021, art. 8).
- **Panel del equipo (`/admin`):** publicar el análisis de laboratorio de cada lote, generar los códigos únicos e imprimir la hoja de QR (o bajar el CSV para la imprenta), ver los escaneos y editar los puntos de venta.

Los datos de la familia se guardan **solo en el teléfono** (Ley 29733). Al servidor solo llega el código escaneado, sin datos personales.

## Ruta para mostrarla (2 minutos)

1. Abre la dirección de la app (o su QR). Toca **Probar con un envase de muestra**.
2. Mira el lote: **1.9 mg de hierro por brownie**, 1.3 mg de hierro hemo, 1.3 g de azúcar, 0 octógonos, laboratorio acreditado por INACAL. Toca **Ver el informe** y vuelve.
3. Toca **Agregar a mi despensa**, acepta el consentimiento y escribe un apodo (por ejemplo, Mati).
4. En la despensa verás cuándo se acaba el pack, el aviso de recompra y el botón **Pedir por WhatsApp** con el pedido escrito.
5. Pasa por **Semáforo** (Registrar, Sangrecita), **Loncheras** (Armar mi semana) e **Inicio**.
6. Toca **Misión Hierro**: mantén presionado el candado 2 segundos y resuelve la suma.

**Códigos de los envases de muestra:**

| Código | Lote |
|---|---|
| `AB-2ANS-GYZ4` | Chispa, pack de 6 |
| `AB-2J7E-4DDY` | Andi, pack de 6 |
| `AB-MF83-HSNE` | Lúcu, pack de 12 |
| `AB-DEMO-2027` | Demo para el jurado: el plan de loncheras con IA está siempre vigente (ver abajo) |

## Probarla en tu computadora

Necesitas Node.js 20 o superior.

```bash
npm install
cp .dev.vars.example .dev.vars   # clave local del panel (ADMIN_TOKEN)
npm run build
npm run preview                  # Worker local con KV local: http://localhost:8787
```

Abre `http://localhost:8787/c/AB-2ANS-GYZ4`. Con `npm run dev` corren a la vez el Worker local (puerto 8787) y Vite (puerto 5173, recarga al guardar).

**Pruebas:**
- `npm test` corre las pruebas de la lógica (códigos, semáforo, loncheras y datos publicados) y de la API del Worker con un KV en memoria.
- `node scripts/capturas.mjs` recorre la experiencia completa con Playwright contra `npm run preview` y guarda las capturas en `capturas/` (celular de 390 px y escritorio). Usa `BASE`, `ADMIN_TOKEN` y, si hace falta, `CHROMIUM` con la ruta del navegador.

## Publicarla en Cloudflare Workers

La app web (carpeta `dist/`) se guarda en Workers KV y la sirve el mismo Worker (`worker/activos.ts`); los datos van en otro KV (`ANDI_KV`).

```bash
npm install
npx wrangler login                                   # o CLOUDFLARE_API_TOKEN en el entorno
npx wrangler kv namespace create ANDI_KV             # pega el id en wrangler.jsonc
npx wrangler kv namespace create ANDI_ASSETS         # pega el id en wrangler.jsonc
npx wrangler secret put ADMIN_TOKEN                  # clave del panel /admin
npm run deploy                                       # build + sube dist/ a KV + wrangler deploy
```

Variables en `wrangler.jsonc`: `WHATSAPP_NUMBER` (pedidos) y `PUBLIC_URL` (va dentro de cada QR). Para cambiar solo los archivos de la app: `npm run build && npm run subir-activos`.

Publicada en: https://andi-app.cingacordova.workers.dev

## Variables y secretos

| Nombre | Dónde | Para qué |
|---|---|---|
| `ANDI_KV` | `wrangler.jsonc` (`kv_namespaces`) | Lotes, códigos, escaneos y puntos de venta |
| `WHATSAPP_NUMBER` | `wrangler.jsonc` (`vars`) | Número para los pedidos (ej.: `51941371376`) |
| `PUBLIC_URL` | `wrangler.jsonc` (`vars`) | Dirección pública que va dentro del QR de cada envase |
| `ADMIN_TOKEN` | Secreto (`wrangler secret put`); en local, `.dev.vars` | Clave del panel `/admin`. Sin ella, el panel queda cerrado |
| `ANTHROPIC_API_KEY` | Secreto (`wrangler secret put`); en local, `.dev.vars` | Clave de la API de Claude para el plan de loncheras con IA. Sin ella, `/api/plan` responde 503 y la app usa su recetario |

## Plan de loncheras con IA

Función premium: **cada vez que la mamá escanea el QR de un pack nuevo, se desbloquean 14 días** del plan semanal de loncheras armado con IA para su hijo. Al vencer, la pantalla dice "Tu plan se renueva con tu próximo pack" y ofrece pedir por WhatsApp; el resto de la app no se bloquea.

**Cómo funciona**

1. `GET /api/c/:code` guarda la fecha del primer escaneo (`escaneadoEl`) y responde `planHasta` (= 14 días después). La app guarda ese acceso en el teléfono (`localStorage`, clave `andi.plan.acceso`: `{ codigo, planHasta }`).
2. En **Loncheras**, la mamá elige edad y qué evitar y toca **Armar mi semana con Andi**. La app llama a `POST /api/plan`:

   ```json
   { "codigo": "AB-2ANS-GYZ4", "nino": { "apodo": "Mati", "edadAnios": 7, "evitar": ["Pescado"], "yaProbo": [] }, "semana": "2026-10-19" }
   ```

   Responde `{ plan, vigenteHasta, enCache }`; `plan` trae `semana`, `nino`, `dias[]` (`dia`, `principal { nombre, ingredientes[], preparacion[] }`, `fruta`, `bebida`, `conAndiBite`, `hierroMg`, `truco`), `listaCompras[] { grupo, items[] }` y `nota`. Errores: `404 codigo_no_encontrado`, `403 plan_vencido` (o `codigo_sin_escanear`), `503 plan_no_disponible` (sin clave), `429 demasiadas_peticiones` (10 por minuto por IP).
3. El Worker genera el plan con el SDK oficial `@anthropic-ai/sdk` (modelo `claude-opus-5-5`, respuesta JSON validada con *structured outputs*, respaldo `fallbacks: "default"`) y lo guarda 30 días en KV (`plan:<codigo>:<semana>:<hash del niño>`): la misma semana y el mismo perfil no vuelven a cobrar. El último plan queda en el teléfono (`andi.plan.ultimo`) para verlo sin conexión.

**Crear la clave y guardarla en Cloudflare**

1. Entra a [console.anthropic.com](https://console.anthropic.com) → **API Keys** → **Create Key** (ponle un nombre como `andi-app`) y copia la clave (`sk-ant-...`). Carga saldo en **Billing** si la cuenta es nueva.
2. Guárdala como secreto del Worker, de una de estas dos formas:
   - En el panel de Cloudflare: **Workers & Pages → andi-app → Settings → Variables and Secrets → Add → tipo Secret**, nombre `ANTHROPIC_API_KEY`, pega la clave y **Deploy**.
   - O desde la terminal: `npx wrangler secret put ANTHROPIC_API_KEY` (pega la clave cuando la pida).
3. En tu computadora, agrega `ANTHROPIC_API_KEY=sk-ant-...` a `.dev.vars` (no se sube a git).

La clave nunca va en el código ni en `wrangler.jsonc`. Si no está, el endpoint responde `503 { "error": "plan_no_disponible" }` y la pantalla de loncheras cae al recetario propio.

**Código demo para el jurado:** `AB-DEMO-2027` está en `data/seed.json`, el Worker lo trata como siempre vigente (14 días desde hoy, sin consumirse ni contar escaneos). Como no lleva dígito de control, el escáner no lo acepta: ábrelo así, `https://andi-app.cingacordova.workers.dev/loncheras?codigo=AB-DEMO-2027`, o pide el plan con `curl`:

```bash
curl -X POST https://andi-app.cingacordova.workers.dev/api/plan -H 'Content-Type: application/json' \
  -d '{"codigo":"AB-DEMO-2027","nino":{"apodo":"Mati","edadAnios":7,"evitar":[]},"semana":"2026-10-19"}'
```

**Costo aproximado por plan:** unos 1,000 tokens de entrada (el prompt del sistema se cachea) y 3,000 a 5,000 tokens de salida con `claude-opus-5-5` (US$4 / US$20 por millón): **US$0.07 a US$0.11 por plan generado**, es decir, unos S/0.30 a S/0.40. Con la caché de 30 días, una familia que arma una semana cuesta un plan por pack; 1,000 packs al mes serían unos US$100. Tarda 30 a 60 segundos: la pantalla muestra "Andi está armando la semana".

## Cómo está hecha

```
worker/      Worker de Cloudflare: API con Hono (index.ts), datos en KV (datos.ts), códigos (codigo.ts) y plan de loncheras con IA (plan.ts)
src/
  parents/   pantallas de padres (inicio, lote, informe, escanear, semáforo, loncheras, despensa, hemoglobina, dónde, más)
  kids/      Misión Hierro: candado para padres, mapa, 4 juegos, celebración y tiempo de juego
  admin/     panel del equipo
  components Andi (personaje en SVG), íconos, componentes base y movimiento (motion)
  data/      alimentos con hierro (CENAN), recetario de loncheras, contenido educativo y precios
  lib/       estado local, códigos, cálculos de hierro, fechas, voz, calendario (.ics), WhatsApp y API
data/seed.json  lotes, códigos y puntos iniciales (se genera con node scripts/seed.mjs)
public/      manifest, service worker (funciona sin conexión), cabeceras (_headers), logo e íconos
```

- **Frente:** React 19, TypeScript y Vite. Letras Nunito y Plus Jakarta Sans (Baloo 2 en el modo niños) incluidas en la app. Animaciones con `motion`.
- **API:** `GET /api/c/:code` (o `/api/codigos/:code`), `/api/lotes/:id`, `/api/puntos`, `/api/config`, `POST /api/plan` (plan de loncheras con IA); panel en `/api/admin/*` con `Authorization: Bearer ADMIN_TOKEN`.
- **Códigos:** `AB-XXXX-XXXX` con dígito de control; detectan errores de tipeo sin consultar al servidor.
- **Escáner:** usa la cámara del navegador; lee el QR con el lector del sistema (Android) o con jsQR (iPhone y el resto). También se puede abrir el QR con la cámara del teléfono, que lleva directo al lote.
- **Sin conexión:** si no hay red, los envases de muestra se abren igual con los datos incluidos en la app.

## Antes de lanzar (pendiente del equipo)

- Crear la base KV y los secretos (`ADMIN_TOKEN`, `ANTHROPIC_API_KEY`) en la cuenta de Cloudflare, y confirmar la dirección pública definitiva antes de imprimir los QR.
- `scripts/seed.mjs` regenera `data/seed.json` e incluye el código demo `AB-DEMO-2027` y los tres stands del plan 2027.
- Cargar en `/admin` el informe del laboratorio de cada lote nuevo.
- Revisar los textos legales con el abogado del contrato de maquila.
- Probar la app con 10 familias, como indica el documento 09.
