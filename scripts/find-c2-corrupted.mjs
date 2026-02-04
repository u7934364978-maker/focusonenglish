
import * as fs from 'fs';
import * as path from 'path';

const unitsDir = path.join(process.cwd(), 'src/lib/c2-units');
const unitFiles = fs.readdirSync(unitsDir).filter(f => f.startsWith('unit-') && f.endsWith('.ts'));

const corrupted = [];

unitFiles.forEach(file => {
  const filePath = path.join(unitsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const individualQuestionRegex = /\{\s*"id":\s*"c2-u[^"]+?-q[^"]+?"[\s\S]*?\}/g;
  
  let match;
  while ((match = individualQuestionRegex.exec(content)) !== null) {
    const qMatch = match[0];
    const hasOptions = qMatch.includes('"options":');
    const isTransformation = qMatch.includes('"type": "key-word-transformation"');
    
    if (hasOptions && isTransformation) {
      corrupted.push({ file, id: qMatch.match(/"id":\s*"([^"]+)"/)[1] });
    }
  }
});

console.log(JSON.stringify(corrupted, null, 2));
console.log(`Found ${corrupted.length} corrupted questions.`);
