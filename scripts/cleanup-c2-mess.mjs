
import * as fs from 'fs';
import * as path from 'path';

const unitsDir = path.join(process.cwd(), 'src/lib/c2-units');
const unitFiles = fs.readdirSync(unitsDir).filter(f => f.startsWith('unit-') && f.endsWith('.ts'));

unitFiles.forEach(file => {
  const filePath = path.join(unitsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove the incorrectly added question field at the Exercise level
  // It usually looks like: "type": "key-word-transformation",\n      "question": "..."
  // Note the 6 spaces of indentation
  const badFieldRegex = /"type":\s*"key-word-transformation",\s*\n\s{6}"question":\s*"[^"]*",/g;
  
  const newContent = content.replace(badFieldRegex, '"type": "key-word-transformation",');
  
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Cleaned up ${file}`);
  }
});
