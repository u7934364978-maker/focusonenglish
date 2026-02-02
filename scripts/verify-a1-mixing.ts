import fs from 'fs';
import path from 'path';

const COURSE_DIR = 'src/content/cursos/ingles-a1';

function analyzeUnit(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const unit = JSON.parse(content);
  const exercises = unit.blocks.flatMap((b: any) => b.content);
  
  const typeDistribution: Record<string, number> = {};
  const wordFrequency: Record<string, number> = {};
  
  exercises.forEach((ex: any) => {
    // Detect type from structure if not explicitly named 'type' at top level
    // Some formats use 'type' inside a question, or have a specific structure
    let exType = ex.type;
    
    if (!exType && ex.questions && ex.questions.length > 0) {
      exType = ex.questions[0].type || 'multiple-choice';
    }
    
    if (!exType && ex.words) exType = 'sentence-building';

    typeDistribution[exType || 'unknown'] = (typeDistribution[exType || 'unknown'] || 0) + 1;
    
    // Analyze all strings in the object for word frequency
    const textToAnalyze = JSON.stringify(ex).toLowerCase();
    const words = textToAnalyze.match(/\b[a-z]{3,}\b/g) || [];
    words.forEach(word => {
      // Ignore common JSON keys and small words
      if (['type', 'question', 'options', 'correctanswer', 'explanation', 'instructions', 'title', 'interaction_id'].includes(word)) return;
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
  });

  return {
    id: unit.course.unit_id,
    title: unit.course.unit_title,
    total: exercises.length,
    types: typeDistribution,
    topWords: Object.entries(wordFrequency)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
  };
}

function main() {
  console.log('📊 A1 Course Mixing & Variety Audit\n');
  
  const files = fs.readdirSync(COURSE_DIR)
    .filter(f => f.startsWith('unit') && f.endsWith('.json'))
    .sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)![0]);
      const numB = parseInt(b.match(/\d+/)![0]);
      return numA - numB;
    });

  files.forEach(file => {
    try {
      const stats = analyzeUnit(path.join(COURSE_DIR, file));
      console.log(`Unit ${stats.id}: ${stats.title} (${stats.total} exercises)`);
      console.log('  Types:', JSON.stringify(stats.types));
      console.log('  Top Vocab:', stats.topWords.map(([w, c]) => `${w}(${c})`).join(', '));
      console.log('-'.repeat(40));
    } catch (e: any) {
      console.error(`  ❌ Error analyzing ${file}:`, e.message);
    }
  });
}

main();
