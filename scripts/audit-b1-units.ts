
import fs from 'fs';
import path from 'path';

const UNITS = [1, 2, 3, 4, 5];
const BASE_PATH = path.join(process.cwd(), 'src/lib/course/b1');

function auditAndFixUnit(unitId: number) {
  const filePath = path.join(BASE_PATH, `unit-${unitId}.ts`);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Fix missing gaps in multiple-choice/fill-blank
  // This is hard with regex, but we can look for exercises where transcript has a word not in question
  
  // 2. Fix translation syntax issues (e.g. [[word|translation|extra]])
  content = content.replace(/\[\[([^\]|]+)\|([^\]|]+)\|([^\]|]+)\]\]/g, '[[$1|$2]]');

  // 3. Fix sentence-building: ensure all words in 'words' array have [[word|translation]]
  // And that correctSentence matches the normalized words.

  fs.writeFileSync(filePath, content);
  console.log(`✅ Audited and partially fixed Unit ${unitId}`);
}

UNITS.forEach(auditAndFixUnit);
