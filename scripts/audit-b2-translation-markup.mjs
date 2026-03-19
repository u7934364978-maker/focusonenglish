#!/usr/bin/env node
/**
 * Audit rápido de markup de traducción en B2.
 *
 * Busca líneas que parezcan contener inglés (palabras típicas) en campos:
 *  - question
 *  - prompt
 *  - targetText
 *  - expectedResponse
 *  - transcript
 *
 * y que NO estén dentro del formato [[English|Spanish]].
 *
 * Uso:
 *  node scripts/audit-b2-translation-markup.mjs --from 61 --to 70
 */

import fs from 'fs';
import path from 'path';
import process from 'process';

const args = process.argv.slice(2);
const getArg = (name, fallback) => {
  const idx = args.indexOf(name);
  if (idx === -1) return fallback;
  const v = args[idx + 1];
  return v ?? fallback;
};

const fromUnit = Number(getArg('--from', '61'));
const toUnit = Number(getArg('--to', '70'));

const rootDir = path.join(process.cwd(), 'src/lib/course/b2');

const englishHints = new RegExp(
  [
    '\\bthe\\b',
    '\\band\\b',
    '\\bby\\b',
    '\\btime\\b',
    '\\byou\\b',
    '\\byour\\b',
    '\\bwe\\b',
    '\\bthey\\b',
    '\\bhe\\b',
    '\\bshe\\b',
    '\\bit\\b',
    '\\bmust\\b',
    '\\bshould\\b',
    '\\bcould\\b',
    '\\bwould\\b',
    '\\bmay\\b',
    '\\bmight\\b',
    '\\bunless\\b',
    '\\bbring\\b',
    '\\barrived\\b',
    '\\blesson\\b',
    '\\bprices\\b',
    '\\bpractice\\b',
    '\\bconfidence\\b',
    '\\bseatbelt\\b',
    '\\bexpected\\b',
    '\\bresponse\\b',
    '\\bsaid\\b',
    '\\bfinish\\b',
    '\\bconfidence\\b',
  ].join('|'),
  'i'
);

const trackedKeys = ['question', 'prompt', 'targetText', 'expectedResponse', 'transcript'];

function extractStringLiteral(line, key) {
  // Captura valores en '...', "..." o `...` en la misma línea.
  // Limitación: si el valor es multilinea (backticks), este auditor puede no capturarlo entero.
  const patterns = [
    new RegExp(`${key}:\\s*'((?:\\\\'|[^'])*)'`),
    new RegExp(`${key}:\\s*"((?:\\\\\"|[^"])*)"`),
  ];

  for (const re of patterns) {
    const m = line.match(re);
    if (m?.[1] !== undefined) return m[1];
  }
  return null;
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else out.push(p);
  }
  return out;
}

const allFiles = walk(rootDir).filter((p) => p.endsWith('.ts'));

const unitFiles = allFiles.filter((p) => {
  const m = path.basename(p).match(/^unit-(\d+)(?:-|\.ts$)/);
  if (!m) return false;
  const n = Number(m[1]);
  return Number.isFinite(n) && n >= fromUnit && n <= toUnit;
});

const report = [];

for (const file of unitFiles) {
  const rel = path.relative(process.cwd(), file);
  const content = fs.readFileSync(file, 'utf-8');
  const lines = content.split('\n');

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    for (const key of trackedKeys) {
      if (!line.includes(`${key}:`)) continue;

      const value = extractStringLiteral(line, key);
      if (!value) continue;

      // Si el valor ya tiene markup, no lo reportamos.
      if (value.includes('[[')) continue;

      // Si el valor parece inglés por palabras clave, lo reportamos.
      if (englishHints.test(value)) {
        report.push({
          file: rel,
          line: i + 1,
          key,
          snippet: line.trim().slice(0, 220),
        });
      }
    }
  }
}

report.sort((a, b) => (a.file + ':' + a.line).localeCompare(b.file + ':' + b.line));

if (report.length === 0) {
  console.log(`OK: No se detectaron líneas sospechosas de inglés sin [[English|Spanish]] en unidades ${fromUnit}-${toUnit}.`);
  process.exit(0);
}

console.log(`# Audit de traducción B2 (sin [[English|Spanish]])`);
console.log(`Unidades: ${fromUnit}..${toUnit}`);
console.log('');

for (const r of report) {
  console.log(`- ${r.file}:${r.line} (${r.key})`);
  console.log(`  ${r.snippet}${r.snippet.length >= 220 ? '…' : ''}`);
}

