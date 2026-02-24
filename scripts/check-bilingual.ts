import fs from 'fs';
import path from 'path';

const unitsDir = path.join(process.cwd(), 'src/lib/course/a1');
const files = fs.readdirSync(unitsDir).filter(f => f.startsWith('unit-') && f.endsWith('.ts'));

files.sort((a, b) => {
  const numA = parseInt(a.match(/\d+/)![0]);
  const numB = parseInt(b.match(/\d+/)![0]);
  return numA - numB;
});

const results = [];

for (const file of files) {
  const content = fs.readFileSync(path.join(unitsDir, file), 'utf-8');
  
  // Find all strings in quotes that don't follow the [[...|...]] pattern
  // This is a rough estimation
  const strings = content.match(/"([^"]+)"/g) || [];
  
  let totalStrings = 0;
  let bilingualStrings = 0;
  
  const exerciseMatches = content.match(/"id":\s*"a1-u\d+-e(\d+)"/g) || [];
  const exerciseCount = exerciseMatches.length;

  for (const s of strings) {
    // Skip IDs, types, levels, topics, difficulty, audioUrls, topicNames
    if (s.includes('a1-u') || 
        s.includes('audio/') || 
        ['"A1"', '"easy"', '"medium"', '"hard"', '"multiple-choice"', '"fill-blank"', '"sentence-building"', '"reading"', '"pronunciation"', '"listening-comprehension"', '"matching"', '"drag-drop"', '"Grammar"', '"Vocabulary"', '"Reading"', '"Listening"', '"Pronunciation"'].includes(s)) {
      continue;
    }
    
    // Skip very short strings (likely single words or keys)
    if (s.length < 5) continue;

    totalStrings++;
    if (s.includes('[[') && s.includes('|') && s.includes(']]')) {
      bilingualStrings++;
    }
  }

  const ratio = totalStrings > 0 ? (bilingualStrings / totalStrings) : 1;

  results.push({
    file,
    exerciseCount,
    ratio: ratio.toFixed(2),
    totalStrings,
    bilingualStrings
  });
}

console.table(results);
