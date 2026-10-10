// Almacenamiento: archivo JSON (por defecto) o Firestore (STORE=firestore).
import { readFile, writeFile, mkdir, rename } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const hoy = () => new Date().toISOString().slice(0, 10);

class FileStore {
  constructor(dir, seedPath) {
    this.dir = dir; this.file = path.join(dir, 'db.json'); this.seedPath = seedPath;
    this.db = null; this.timer = null; this.writing = Promise.resolve();
  }
  async init() {
    await mkdir(this.dir, { recursive: true });
    const src = existsSync(this.file) ? this.file : this.seedPath;
    this.db = JSON.parse(await readFile(src, 'utf8'));
    this.db.lotes ??= {}; this.db.codigos ??= {}; this.db.puntos ??= [];
    if (src === this.seedPath) await this.flush();
  }
  persist() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.flush(), 300);
  }
  async flush() {
    const tmp = this.file + '.tmp';
    this.writing = this.writing.then(async () => {
      await writeFile(tmp, JSON.stringify(this.db, null, 1));
      await rename(tmp, this.file);
    });
    return this.writing;
  }
  async getLote(id) { return this.db.lotes[id] || null; }
  async listLotes() { return Object.values(this.db.lotes); }
  async saveLote(lote) { this.db.lotes[lote.id] = { ...(this.db.lotes[lote.id] || {}), ...lote }; this.persist(); return this.db.lotes[lote.id]; }
  async getCodigo(code) { return this.db.codigos[code] || null; }
  async saveCodigos(lista) { for (const c of lista) this.db.codigos[c.code] = c; this.persist(); }
  async listCodigos(loteId) { return Object.values(this.db.codigos).filter(c => !loteId || c.loteId === loteId); }
  async registrarEscaneo(code) {
    const c = this.db.codigos[code]; if (!c) return;
    const ahora = new Date().toISOString();
    c.escaneos = (c.escaneos || 0) + 1; c.primerEscaneo ??= ahora; c.ultimoEscaneo = ahora;
    const l = this.db.lotes[c.loteId];
    if (l) { l.escaneosPorDia ??= {}; l.escaneosPorDia[hoy()] = (l.escaneosPorDia[hoy()] || 0) + 1; }
    this.persist();
  }
  async getPuntos() { return this.db.puntos; }
  async savePuntos(lista) { this.db.puntos = lista; this.persist(); return lista; }
}

class FirestoreStore {
  async init() {
    const { Firestore, FieldValue } = await import('@google-cloud/firestore');
    this.db = new Firestore(process.env.FIRESTORE_DATABASE ? { databaseId: process.env.FIRESTORE_DATABASE } : {});
    this.FieldValue = FieldValue;
  }
  async getLote(id) { const d = await this.db.collection('lotes').doc(id).get(); return d.exists ? d.data() : null; }
  async listLotes() { return (await this.db.collection('lotes').get()).docs.map(d => d.data()); }
  async saveLote(lote) { await this.db.collection('lotes').doc(lote.id).set(lote, { merge: true }); return this.getLote(lote.id); }
  async getCodigo(code) { const d = await this.db.collection('codigos').doc(code).get(); return d.exists ? d.data() : null; }
  async saveCodigos(lista) {
    for (let i = 0; i < lista.length; i += 400) {
      const batch = this.db.batch();
      for (const c of lista.slice(i, i + 400)) batch.set(this.db.collection('codigos').doc(c.code), c);
      await batch.commit();
    }
  }
  async listCodigos(loteId) {
    const q = loteId ? this.db.collection('codigos').where('loteId', '==', loteId) : this.db.collection('codigos');
    return (await q.get()).docs.map(d => d.data());
  }
  async registrarEscaneo(code) {
    const ref = this.db.collection('codigos').doc(code);
    const snap = await ref.get(); if (!snap.exists) return;
    const ahora = new Date().toISOString();
    await ref.update({ escaneos: this.FieldValue.increment(1), ultimoEscaneo: ahora, ...(snap.data().primerEscaneo ? {} : { primerEscaneo: ahora }) });
    await this.db.collection('lotes').doc(snap.data().loteId).set({ escaneosPorDia: { [hoy()]: this.FieldValue.increment(1) } }, { merge: true });
  }
  async getPuntos() { const d = await this.db.collection('config').doc('puntos').get(); return d.exists ? d.data().lista : []; }
  async savePuntos(lista) { await this.db.collection('config').doc('puntos').set({ lista }); return lista; }
}

export async function crearStore({ tipo, dataDir, seedPath }) {
  const store = tipo === 'firestore' ? new FirestoreStore() : new FileStore(dataDir, seedPath);
  await store.init();
  return store;
}
