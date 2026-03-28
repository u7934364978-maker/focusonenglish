/**
 * Valida objetos ejercicio extraídos de TS del curriculum contra `courseExerciseSchema`.
 * Uso: npx ts-node scripts/validate-course-exercises-zod.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { parseCourseExercise } from '../src/lib/validation/course-exercise-schema';
import { sanitizeForCourseExerciseEnvelope } from '../src/lib/validation/course-exercise-api';

const root = path.join(__dirname, '..');

function listTsFilesRecursive(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const out: string[] = [];
  for (const name of fs.readdirSync(dir)) {
    if (name.endsWith('.test.ts')) continue;
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) out.push(...listTsFilesRecursive(p));
    else if (name.endsWith('.ts')) out.push(p);
  }
  return out;
}

function extractExerciseObjectsFromSource(fileContent: string): unknown[] {
  const exercisePattern =
    /\{[\s\S]*?id:\s*['"]([^'"]+)['"][\s\S]*?type:\s*['"]([^'"]+)['"][\s\S]*?\}/g;
  const matches: { start: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = exercisePattern.exec(fileContent)) !== null) {
    matches.push({ start: m.index });
  }

  const objects: unknown[] = [];
  for (const match of matches) {
    try {
      let openBraces = 0;
      let closeBraces = 0;
      let endPos = match.start;
      const max = Math.min(fileContent.length, match.start + 50000);
      for (let i = match.start; i < max; i++) {
        if (fileContent[i] === '{') openBraces++;
        if (fileContent[i] === '}') closeBraces++;
        if (openBraces > 0 && openBraces === closeBraces) {
          endPos = i + 1;
          break;
        }
      }
      const exerciseBlock = fileContent.substring(match.start, endPos);
      const cleaned = exerciseBlock
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\/\/.*/g, '');
      // eslint-disable-next-line no-eval
      const exercise = eval('(' + cleaned + ')');
      objects.push(exercise);
    } catch {
      // bloque no evaluable (TS, spread, etc.)
    }
  }
  return objects;
}

function main() {
  console.log('🔍 Zod: courseExerciseSchema sobre curriculum TS\n');
  console.log('='.repeat(72));

  const dirs = [path.join(root, 'src', 'lib', 'course')];
  const extraFiles = [
    'src/lib/course-data-a1.ts',
    'src/lib/course-data-b2.ts',
    'src/lib/a1-expansion-content.ts',
    'src/lib/b2-improvements-part1-open-cloze.ts',
    'src/lib/b2-improvements-part2-gapped-text.ts',
    'src/lib/b2-improvements-part3-multiple-matching.ts',
    'src/lib/b2-improvements-part4-key-transformations.ts',
    'src/lib/b2-improvements-part5-multiple-choice-cloze.ts',
    'src/lib/b2-improvements-part6-speaking.ts',
    'src/lib/b2-improvements-part7-writing.ts',
  ];

  const files = new Set<string>();
  for (const d of dirs) {
    for (const f of listTsFilesRecursive(d)) {
      files.add(f);
    }
  }
  for (const rel of extraFiles) {
    const abs = path.join(root, rel);
    if (fs.existsSync(abs)) files.add(abs);
  }

  let totalObjects = 0;
  let zodFailures = 0;
  const failureSamples: string[] = [];

  for (const filePath of [...files].sort()) {
    const rel = path.relative(root, filePath);
    const content = fs.readFileSync(filePath, 'utf-8');
    const objs = extractExerciseObjectsFromSource(content);
    if (objs.length === 0) continue;

    console.log(`\n📄 ${rel} (${objs.length} bloques con id+type)`);
    for (const raw of objs) {
      totalObjects++;
      const s = sanitizeForCourseExerciseEnvelope(raw);
      const r = parseCourseExercise(s);
      if (!r.success) {
        zodFailures++;
        const id = typeof (raw as { id?: string })?.id === 'string' ? (raw as { id: string }).id : '?';
        const msg = r.error.issues.map((i) => i.message).join('; ');
        if (failureSamples.length < 40) {
          failureSamples.push(`  - ${rel} [${id}]: ${msg}`);
        }
        console.log(`   ❌ ${id}: ${msg}`);
      }
    }
  }

  console.log('\n' + '='.repeat(72));
  console.log(`\n📊 Resumen Zod: ${totalObjects} bloques evaluados, ${zodFailures} no pasan el envelope`);
  if (failureSamples.length > 0 && zodFailures > failureSamples.length) {
    console.log(`\n(primeros ${failureSamples.length} errores listados arriba por archivo)`);
  }

  if (zodFailures > 0) {
    console.log('\n❌ Falló validate-course-exercises-zod.ts');
    process.exit(1);
  }
  console.log('\n✅ Todos los bloques pasan courseExerciseSchema (tras sanitize)');
  process.exit(0);
}

main();
