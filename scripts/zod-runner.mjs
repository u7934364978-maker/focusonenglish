import { spawnSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Ejecuta validación Zod del envelope de ejercicios (curriculum / renderer).
 * @returns código de salida (0 = ok)
 */
export function runCourseExerciseZodValidation() {
  const cwd = path.join(__dirname, '..');
  const r = spawnSync(
    'npx',
    ['ts-node', 'scripts/validate-course-exercises-zod.ts'],
    {
      cwd,
      stdio: 'inherit',
      shell: true,
      env: { ...process.env },
    },
  );
  return r.status === null ? 1 : r.status;
}
