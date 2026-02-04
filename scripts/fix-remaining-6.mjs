import * as fs from 'fs';
import * as path from 'path';

const unitsDir = path.join(process.cwd(), 'src/lib/c2-units');

const toFix = [
  { file: 'unit-18.ts', id: 'c2-u18-b4-q6' },
  { file: 'unit-18.ts', id: 'c2-u18-b4-q9' },
  { file: 'unit-28.ts', id: 'c2-u28-b8-q4' },
  { file: 'unit-28.ts', id: 'c2-u28-b8-q7' },
  { file: 'unit-28.ts', id: 'c2-u28-b8-q10' },
];

toFix.forEach(item => {
  const filePath = path.join(unitsDir, item.file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const qRegex = new RegExp(`\\{\\s*"id":\\s*"${item.id}"[\\s\\S]*?\\}`, 'g');
  
  content = content.replace(qRegex, (match) => {
    // Change to key-word-transformation and clear options
    return match
      .replace(/"type":\s*"multiple-choice"/, '"type": "key-word-transformation"')
      .replace(/"options":\s*\[\s*\]/, '"options": undefined') // Temporarily use undefined to mark for removal
      .replace(/"options":\s*\[\s*\]/, ''); // Or just remove it
  });
  
  // Clean up
  content = content.replace(/"options":\s*undefined,?/g, '');
  
  fs.writeFileSync(filePath, content);
});

console.log("Fixed 5 items.");
