// Sube la presentación (index.html, estilos, scripts, imágenes y letras) al KV FERIA_ACTIVOS.
// Uso (desde FINAL/web/despliegue): node subir.mjs
import { readdirSync, readFileSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { execSync } from 'node:child_process';
const aqui = new URL('.', import.meta.url).pathname;
const web = join(aqui, '..');
const incluir = ['index.html', 'style.css', 'app.js', 'config.js', 'vendor', 'img', 'fonts'];
const archivos = d => statSync(d).isDirectory() ? readdirSync(d).flatMap(n => archivos(join(d, n))) : [d];
const lista = incluir.flatMap(n => archivos(join(web, n))).map(p => ({ key: relative(web, p).split(sep).join('/'), value: readFileSync(p).toString('base64'), base64: true }));
const tmp = join(aqui, '.wrangler', 'tmp'); mkdirSync(tmp, { recursive: true });
const json = join(tmp, 'activos.json'); writeFileSync(json, JSON.stringify(lista));
console.log(`Subiendo ${lista.length} archivos...`);
execSync(`npx -y wrangler@4 kv bulk put "${json}" --binding FERIA_ACTIVOS --remote`, { stdio: 'inherit', cwd: aqui });
