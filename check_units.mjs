import * as fs from 'fs';
import * as path from 'path';

const indexPath = 'src/lib/c2-units/index.ts';
const content = fs.readFileSync(indexPath, 'utf-8');

const importRegex = /import \{ (C2_UNIT_\d+) \} from '\.\/(unit-\d+)'/g;
let match;
const imports = [];

while ((match = importRegex.exec(content)) !== null) {
  imports.push({ name: match[1], file: match[2] + '.ts' });
}

for (const imp of imports) {
  const filePath = path.join('src/lib/c2-units', imp.file);
  if (!fs.existsSync(filePath)) {
    console.log(`File missing: ${filePath}`);
    continue;
  }
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  if (!fileContent.includes(`export const ${imp.name}`)) {
    console.log(`Export missing in ${filePath}: expected ${imp.name}`);
  }
}
