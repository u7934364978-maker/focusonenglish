
import * as fs from 'fs';
import * as path from 'path';

// This script audits the C2 course units for structural integrity.
// It checks for duplicate IDs, missing fields, and incorrect answer mappings.

const unitsDir = path.join(process.cwd(), 'src/lib/c2-units');
const unitFiles = fs.readdirSync(unitsDir).filter(f => f.startsWith('unit-') && f.endsWith('.ts'));

let errors = [];
let exerciseIds = new Set();
let questionIds = new Set();

unitFiles.forEach(file => {
  const content = fs.readFileSync(path.join(unitsDir, file), 'utf8');
  
  // Basic regex-based extraction
  const exerciseMatches = content.matchAll(/export const (C2_U\d+_BLOCK\d+): Exercise = ({[\s\S]*?});/g);
  
  for (const match of exerciseMatches) {
    const varName = match[1];
    let objText = match[2];
    
    // Attempt to parse the object partially using regex for IDs and types
    const idMatch = objText.match(/"id":\s*"([^"]+)"/);
    
    if (idMatch) {
      const id = idMatch[1];
      if (exerciseIds.has(id)) {
        errors.push(`Duplicate Exercise ID in ${file}: ${id} (${varName})`);
      }
      exerciseIds.add(id);
    } else {
      errors.push(`Missing Exercise ID in ${file} (${varName})`);
    }

    // Check questions
    const questionMatches = objText.matchAll(/"id":\s*"([^"]+)"/g);
    for (const qMatch of questionMatches) {
      const qId = qMatch[1];
      if (qId.startsWith('c2-u') && qId.includes('-q')) {
        if (questionIds.has(qId)) {
          errors.push(`Duplicate Question ID in ${file}: ${qId}`);
        }
        questionIds.add(qId);
      }
    }
    
    // Check for missing fields in questions (improved check)
    const questionsBlock = objText.match(/"questions":\s*\[([\s\S]*?)\]\s*(}|,)/);
    if (questionsBlock) {
      const qs = questionsBlock[1];
      // Match individual question objects
      const individualQs = qs.match(/\{[\s\S]*?\}(?=\s*(,|$))/g) || [];
      
      individualQs.forEach((q, index) => {
        const qIdMatch = q.match(/"id":\s*"([^"]+)"/);
        const qId = qIdMatch ? qIdMatch[1] : `Unknown (Index ${index+1})`;

        if (!q.includes('"explanation":')) errors.push(`Missing explanation in ${file}, ${varName}, ${qId}`);
        if (!q.includes('"points":')) errors.push(`Missing points in ${file}, ${varName}, ${qId}`);
        if (!q.includes('"type":')) errors.push(`Missing type in ${file}, ${varName}, ${qId}`);
        
        // Check for missing question field
        if (!q.includes('"question":')) {
          // It might be okay for dedicated key-word-transformation exercises, 
          // but not when they are part of a Vocabulary/Grammar block
          errors.push(`Missing question field in ${file}, ${varName}, ${qId}`);
        }
        
        // Multiple choice specific check
        if (q.includes('"type": "multiple-choice"')) {
          const optionsMatch = q.match(/"options":\s*\[([\s\S]*?)\]/);
          const correctMatch = q.match(/"correctAnswer":\s*"([^"]+)"/);
          
          if (optionsMatch && correctMatch) {
            const optionsStr = optionsMatch[1];
            const correct = correctMatch[1];
            if (!optionsStr.includes(`"${correct}"`)) {
              errors.push(`Correct answer "${correct}" not in options in ${file}, ${varName}, ${qId}`);
            }
          }
        }
      });
    }
  }
});

if (errors.length > 0) {
  console.log("Validation Errors Found:");
  errors.forEach(e => console.log(`- ${e}`));
  process.exit(1);
} else {
  console.log("No structural errors found in C2 units.");
}
