import * as fs from 'fs';
import * as path from 'path';

const unitsDir = path.join(process.cwd(), 'src/lib/c2-units');
const files = fs.readdirSync(unitsDir).filter(f => f.startsWith('unit-') && f.endsWith('.ts'));

let totalCorrupted = 0;

files.forEach(file => {
  const filePath = path.join(unitsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Regex to find items that have "type": "key-word-transformation" and "options": [...]
  // We use a simplified check: does the string contain both in the same object context?
  // Since they are stringified JSON-like objects in TS, we can try to parse or use a clever regex.
  
  const matches = content.match(/\{[^{}]*?"type":\s*"key-word-transformation"[^{}]*?"options":\s*\[[^{}]*?\}/gs);
  
  if (matches) {
    console.log(`${file}: Found ${matches.length} corrupted items`);
    totalCorrupted += matches.length;
  }
});

console.log(`Total corrupted items found: ${totalCorrupted}`);
