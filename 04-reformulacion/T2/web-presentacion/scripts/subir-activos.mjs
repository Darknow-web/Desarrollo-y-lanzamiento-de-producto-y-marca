// Sube la carpeta dist/ al KV ACTIVOS (clave = ruta del archivo) con `wrangler kv bulk put`.
// Uso: node scripts/subir-activos.mjs [--local]
import { readdirSync, readFileSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { execSync } from 'node:child_process';

const raiz = new URL('..', import.meta.url).pathname;
const dist = join(raiz, 'dist');
const local = process.argv.includes('--local');

function archivos(dir) {
  return readdirSync(dir).flatMap(n => { const p = join(dir, n); return statSync(p).isDirectory() ? archivos(p) : [p]; });
}
const lista = archivos(dist).filter(p => !p.endsWith('_headers')).map(p => ({
  key: relative(dist, p).split(sep).join('/'),
  value: readFileSync(p).toString('base64'),
  base64: true,
}));
const tmp = join(raiz, '.wrangler', 'tmp'); mkdirSync(tmp, { recursive: true });
const json = join(tmp, 'activos.json');
writeFileSync(json, JSON.stringify(lista));
const total = lista.reduce((a, b) => a + b.value.length, 0);
console.log(`Subiendo ${lista.length} archivos (${(total / 1024 / 1024 * 0.75).toFixed(1)} MB) a ACTIVOS${local ? ' (local)' : ''}...`);
execSync(`npx wrangler kv bulk put "${json}" --binding ACTIVOS ${local ? '--local' : '--remote'}`, { stdio: 'inherit', cwd: raiz });
