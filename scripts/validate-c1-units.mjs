#!/usr/bin/env node
/**
 * Comprueba cada `src/lib/course/c1/unit-*.ts`:
 * - **Modelo estándar:** 18 ejercicios (g/v/r/l/w/s × 3).
 * - **Modelo ampliado (p. ej. unidad 1):** 108 ejercicios (× 18 por lección).
 * Ver constantes en `c1-curriculum.ts`.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const C1_DIR = path.join(__dirname, '../src/lib/course/c1');

const LEGACY_PER_UNIT = 18;
const LEGACY_PER_SLOT = 3;
const FULL_PER_UNIT = 108;
const FULL_PER_SLOT = 18;

function requiredIds(unitNum, perSlot) {
  const u = unitNum;
  const ids = [];
  for (const letter of ['g', 'v', 'r', 'l', 'w', 's']) {
    for (let i = 1; i <= perSlot; i++) ids.push(`c1-u${u}-${letter}${i}`);
  }
  return ids;
}

function main() {
  const files = fs
    .readdirSync(C1_DIR)
    .filter((f) => /^unit-\d+\.ts$/.test(f))
    .sort((a, b) => parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10));

  let errors = 0;
  for (const file of files) {
    const unitNum = parseInt(file.match(/unit-(\d+)/)[1], 10);
    const text = fs.readFileSync(path.join(C1_DIR, file), 'utf8');
    const found = [...text.matchAll(/\bid:\s*['"](c1-u\d+-[gvrwls]\d+)['"]/gi)].map((m) => m[1]);
    const unique = [...new Set(found)];

    let perSlot;
    let expectedCount;
    if (found.length === FULL_PER_UNIT) {
      perSlot = FULL_PER_SLOT;
      expectedCount = FULL_PER_UNIT;
    } else if (found.length === LEGACY_PER_UNIT) {
      perSlot = LEGACY_PER_SLOT;
      expectedCount = LEGACY_PER_UNIT;
    } else {
      console.error(
        `[${file}] Se esperaban ${LEGACY_PER_UNIT} o ${FULL_PER_UNIT} ítems c1-…, encontrados: ${found.length}`
      );
      errors++;
      continue;
    }

    if (found.length !== expectedCount) {
      console.error(`[${file}] Conteo inesperado: ${found.length}`);
      errors++;
      continue;
    }

    const expected = new Set(requiredIds(unitNum, perSlot));
    const got = new Set(unique);
    const missing = [...expected].filter((id) => !got.has(id));
    const extra = [...got].filter((id) => !expected.has(id));
    if (missing.length || extra.length) {
      console.error(`[${file}] IDs incorrectos. Falta: ${missing.join(', ') || '—'} | Sobran: ${extra.join(', ') || '—'}`);
      errors++;
    }
  }

  if (errors) {
    console.error(`\nFallo: ${errors} unidad(es).`);
    process.exit(1);
  }
  console.log(
    `OK: ${files.length} unidades C1 (18 ítems/unidad salvo unidades ampliadas a 108: 18 por lección).`
  );
}

main();
