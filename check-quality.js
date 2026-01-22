const fs = require('fs');

const dataContent = fs.readFileSync('./lib/course-data-b2.ts', 'utf8');
const viewerContent = fs.readFileSync('./components/course/LessonViewer.tsx', 'utf8');

// Extract case statements from LessonViewer
const caseMatches = viewerContent.matchAll(/case\s+'([^']+)':/g);
const implementedTypes = new Set();
for (const match of caseMatches) {
  implementedTypes.add(match[1]);
}

// Extract exercise types from data
const exerciseTypes = new Set();
const typeMatches = dataContent.matchAll(/type:\s*'([^']+)'/g);
for (const match of typeMatches) {
  exerciseTypes.add(match[1]);
}

console.log('=== RENDERER IMPLEMENTATION STATUS ===\n');

const allTypes = new Set([...exerciseTypes, ...implementedTypes]);
const sortedTypes = Array.from(allTypes).sort();

let implementedCount = 0;
let missingCount = 0;

for (const type of sortedTypes) {
  const inData = exerciseTypes.has(type);
  const inRenderer = implementedTypes.has(type);
  
  if (inData && inRenderer) {
    console.log(`✅ ${type} - IMPLEMENTED`);
    implementedCount++;
  } else if (inData && !inRenderer) {
    console.log(`❌ ${type} - MISSING RENDERER`);
    missingCount++;
  } else if (!inData && inRenderer) {
    console.log(`⚠️  ${type} - RENDERER EXISTS BUT NO DATA`);
  }
}

console.log(`\n📊 Summary:`);
console.log(`   Implemented: ${implementedCount}`);
console.log(`   Missing: ${missingCount}`);
console.log(`   Total types in data: ${exerciseTypes.size}`);
console.log(`   Coverage: ${Math.round(implementedCount / exerciseTypes.size * 100)}%`);
