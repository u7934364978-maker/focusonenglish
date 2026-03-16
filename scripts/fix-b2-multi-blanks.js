/* Script rápido para normalizar huecos "____ ____ ____" a un solo "____"
 * en los ejercicios del curso B2.
 *
 * Regla:
 * - Si hay varios "____" seguidos separados solo por espacios, se colapsan a uno.
 * - Casos como "____. ____. ____." (frases distintas) se respetan.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const B2_DIR = path.join(ROOT, 'src', 'lib', 'course', 'b2');

/** Devuelve todos los .ts bajo un directorio (recursivo). */
function getAllTsFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...getAllTsFiles(fullPath));
    } else if (entry.isFile() && fullPath.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}

/** Normaliza secuencias de múltiples "____" seguidos. */
function normalizeBlanks(source) {
  // Colapsa "____ ____ ____", "____   ____   ____", etc. en un solo "____"
  // y también otras variantes largas de guiones bajos.
  return source.replace(/_+(_|\s)+/g, '____');
}

function main() {
  const files = getAllTsFiles(B2_DIR);
  let changedCount = 0;

  for (const file of files) {
    const original = fs.readFileSync(file, 'utf8');
    const updated = normalizeBlanks(original);
    if (updated !== original) {
      fs.writeFileSync(file, updated, 'utf8');
      changedCount++;
      console.log(`Normalizado: ${path.relative(ROOT, file)}`);
    }
  }

  console.log(`\nArchivos modificados: ${changedCount}`);
}

main();

