import fs from 'fs';
import path from 'path';

const baseDir = 'src/content/cursos/trabajo/administracion/a1/trimestre1';
const weeks = fs.readdirSync(baseDir).filter(f => f.startsWith('semana'));

const validTypes = [
  'multiple-choice', 'fill-blank', 'matching', 'reading', 'listening', 
  'writing', 'speaking', 'grammar', 'roleplay', 'sentence-reordering', 
  'sentence-building', 'word-search', 'crossword'
];

let issues = 0;

weeks.forEach(week => {
  const exercisesPath = path.join(baseDir, week, 'exercises.json');
  if (fs.existsSync(exercisesPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(exercisesPath, 'utf8'));
      const items = Array.isArray(data) ? data : (data.items || []);
      
      items.forEach((item, idx) => {
        if (!item.id) {
          console.log(`❌ ${week}: Exercise at index ${idx} missing ID`);
          issues++;
        }
        if (!item.type) {
          console.log(`❌ ${week}: Exercise ${item.id || idx} missing type`);
          issues++;
        } else if (!validTypes.includes(item.type) && item.type !== 'multipleChoice' && item.type !== 'fillBlanks') {
          // We already standardized, but let's check
          console.log(`⚠️ ${week}: Exercise ${item.id} has non-standard type: ${item.type}`);
          issues++;
        }
      });
    } catch (e) {
      console.log(`❌ ${week}: Failed to parse exercises.json: ${e.message}`);
      issues++;
    }
  } else {
    console.log(`❌ ${week}: exercises.json missing`);
    issues++;
  }
  
  const theoryPath = path.join(baseDir, week, 'theory.json');
  if (fs.existsSync(theoryPath)) {
    try {
      const data = JSON.parse(fs.readFileSync(theoryPath, 'utf8'));
      if (!data.title) {
        console.log(`❌ ${week}: theory.json missing title`);
        issues++;
      }
      if (!data.sections || !Array.isArray(data.sections)) {
        console.log(`❌ ${week}: theory.json missing sections`);
        issues++;
      }
    } catch (e) {
      console.log(`❌ ${week}: Failed to parse theory.json: ${e.message}`);
      issues++;
    }
  } else {
    console.log(`❌ ${week}: theory.json missing`);
    issues++;
  }
});

console.log(`\nAudit complete. Found ${issues} issues.`);
if (issues > 0) process.exit(1);
