import fs from 'fs';
import path from 'path';

const A1_DIR = './src/lib/course/a1';

async function auditUnits() {
  const files = fs.readdirSync(A1_DIR).filter(f => f.startsWith('unit-') && f.endsWith('.ts'));
  
  for (const file of files) {
    const unitNumber = file.match(/\d+/)?.[0];
    const filePath = path.join(A1_DIR, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Count "id": "a1-uX-eY"
    const exerciseMatches = content.match(/"id":\s*"a1-u\d+-e(\d+)"/g) || [];
    const ids = exerciseMatches.map(m => {
      const match = m.match(/e(\d+)/);
      return match ? parseInt(match[1]) : 0;
    });
    
    const uniqueIds = Array.from(new Set(ids)).sort((a, b) => a - b);
    const count = uniqueIds.length;
    const maxId = uniqueIds[uniqueIds.length - 1];
    
    // Check Lesson 5
    const hasLesson5 = uniqueIds.some(id => id >= 61 && id <= 75);
    const lesson5Count = uniqueIds.filter(id => id >= 61 && id <= 75).length;
    
    // Check bilingual (very simple check for [[...|...]])
    const bilingualMatches = content.match(/\[\[[^\]]+\|[^\]]+\]\]/g) || [];
    const totalLines = content.split('\n').length;
    const bilingualRatio = bilingualMatches.length / totalLines;
    
    console.log(`${file}: Count=${count}, MaxId=${maxId}, L5=${hasLesson5} (${lesson5Count}/15), BilingualRatio=${bilingualRatio.toFixed(2)}`);
    
    if (uniqueIds[0] !== 1 && uniqueIds.length > 0) {
      console.log(`  MISSING START: Starts at ${uniqueIds[0]}`);
    }
    
    // Check for gaps
    const gaps = [];
    for (let i = uniqueIds[0]; i <= maxId; i++) {
      if (!uniqueIds.includes(i)) {
        gaps.push(i);
      }
    }
    if (gaps.length > 0) {
      console.log(`  GAPS: ${gaps.slice(0, 10).join(', ')}${gaps.length > 10 ? '...' : ''}`);
    }
  }
}

auditUnits();
