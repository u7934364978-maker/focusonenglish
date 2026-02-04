import * as fs from 'fs';
import * as path from 'path';

const unitsDir = path.join(process.cwd(), 'src/lib/c2-units');
const unitFiles = fs.readdirSync(unitsDir).filter(f => f.startsWith('unit-') && f.endsWith('.ts'));

let errors = [];
let exerciseIds = new Set();
let questionIds = new Set();
let corruptionCount = 0;

unitFiles.forEach(file => {
  const content = fs.readFileSync(path.join(unitsDir, file), 'utf8');
  
  // Extract all objects that look like questions
  // We look for objects with "id": "c2-u...-q..."
  const questionRegex = /\{[\s\S]*?"id":\s*"(c2-u\d+-b\d+-q\d+)"[\s\S]*?\}/g;
  let match;
  
  while ((match = questionRegex.exec(content)) !== null) {
    const qBody = match[0];
    const qId = match[1];
    
    // Check for Duplicate IDs
    if (questionIds.has(qId)) {
      errors.push(`${file}: Duplicate Question ID ${qId}`);
    }
    questionIds.add(qId);
    
    // Check for missing required fields
    if (!qBody.includes('"explanation":')) errors.push(`${file}: Missing explanation in ${qId}`);
    if (!qBody.includes('"points":')) errors.push(`${file}: Missing points in ${qId}`);
    if (!qBody.includes('"type":')) errors.push(`${file}: Missing type in ${qId}`);
    
    // Detect Corruption: key-word-transformation with options (mismatched type)
    if (qBody.includes('"type": "key-word-transformation"') && qBody.includes('"options":')) {
      errors.push(`${file}: CORRUPTION DETECTED - ${qId} is labeled transformation but has options`);
      corruptionCount++;
    }
    
    // Check multiple-choice consistency
    if (qBody.includes('"type": "multiple-choice"')) {
      const optionsMatch = qBody.match(/"options":\s*\[([\s\S]*?)\]/);
      const correctMatch = qBody.match(/"correctAnswer":\s*"([^"]+)"/);
      
      if (optionsMatch && correctMatch) {
        const optionsStr = optionsMatch[1].trim();
        const correct = correctMatch[1];
        
        if (optionsStr === "" || optionsStr === "[]") {
            errors.push(`${file}: Empty options for multiple-choice ${qId}`);
        } else if (!optionsStr.includes(`"${correct}"`)) {
            errors.push(`${file}: Correct answer "${correct}" not in options for ${qId}`);
        }
      } else if (!optionsMatch) {
        errors.push(`${file}: Missing options for multiple-choice ${qId}`);
      }
    }
    
    // Check for empty question field
    const qTextMatch = qBody.match(/"question":\s*"([^"]*)"/);
    if (qTextMatch && qTextMatch[1].trim() === "") {
        errors.push(`${file}: Empty question text in ${qId}`);
    } else if (!qTextMatch && !qBody.includes('"question":')) {
        errors.push(`${file}: Missing question field in ${qId}`);
    }
  }
});

console.log(`\nAudit completed for ${unitFiles.length} files.`);
if (errors.length > 0) {
  console.log(`Found ${errors.length} issues (${corruptionCount} corruptions).`);
  errors.slice(0, 50).forEach(e => console.log(`- ${e}`));
  if (errors.length > 50) console.log(`... and ${errors.length - 50} more errors.`);
} else {
  console.log("No issues found.");
}
