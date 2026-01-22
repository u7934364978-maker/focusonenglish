const fs = require('fs');
const content = fs.readFileSync('./lib/course-data-b2.ts', 'utf8');

console.log('\n=== Checking NESTED EXERCISES pattern ===\n');

// Find phrasal-verbs with exercises array
const pvWithExercises = [];
const pvMatches = content.matchAll(/{\s*id:\s*'([^']+)',\s*type:\s*'phrasal-verbs'(.*?)(?=\n\s*},?\s*\{[\s\n]*id:)/gs);

for (const match of pvMatches) {
  const id = match[1];
  const block = match[2];
  
  if (block.includes('exercises:')) {
    pvWithExercises.push(id);
    console.log(`✅ ${id}: Has nested exercises array`);
  } else if (block.includes('items:')) {
    console.log(`📋 ${id}: Uses items array (standard format)`);
  } else {
    console.log(`⚠️  ${id}: No exercises or items found`);
  }
}

console.log(`\nTotal phrasal-verbs with nested exercises: ${pvWithExercises.length}`);

// Find idioms-expressions with exercises array
console.log('\n=== Checking IDIOMS-EXPRESSIONS pattern ===\n');
const ieWithExercises = [];
const ieMatches = content.matchAll(/{\s*id:\s*'([^']+)',\s*type:\s*'idioms-expressions'(.*?)(?=\n\s*},?\s*\{[\s\n]*id:)/gs);

for (const match of ieMatches) {
  const id = match[1];
  const block = match[2];
  
  if (block.includes('exercises:')) {
    ieWithExercises.push(id);
    console.log(`✅ ${id}: Has nested exercises array`);
  } else if (block.includes('items:')) {
    console.log(`📋 ${id}: Uses items array (standard format)`);
  } else {
    console.log(`⚠️  ${id}: No exercises or items found`);
  }
}

console.log(`\nTotal idioms-expressions with nested exercises: ${ieWithExercises.length}`);
