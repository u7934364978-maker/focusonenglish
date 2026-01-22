const fs = require('fs');

console.log('\n' + '='.repeat(70));
console.log('📊 COMPREHENSIVE EXERCISE QUALITY AUDIT REPORT');
console.log('='.repeat(70) + '\n');

const content = fs.readFileSync('./lib/course-data-b2.ts', 'utf8');
const viewerContent = fs.readFileSync('./components/course/LessonViewer.tsx', 'utf8');

// Count exercises by type
const typeCount = new Map();
const typeMatches = content.matchAll(/type:\s*'([^']+)'/g);
for (const match of typeMatches) {
  const type = match[1];
  typeCount.set(type, (typeCount.get(type) || 0) + 1);
}

// Get implemented cases
const implemented = new Set();
const caseMatches = viewerContent.matchAll(/case\s+'([^']+)':/g);
for (const match of caseMatches) {
  implemented.add(match[1]);
}

console.log('📈 EXERCISE TYPE COVERAGE\n');

const exerciseTypes = Array.from(typeCount.keys()).sort();
const standalone = [];
const embedded = ['essay', 'fill-blank', 'multiple-choice', 'short-answer', 'true-false', 'stress-identification', 'minimal-pairs'];

for (const type of exerciseTypes) {
  const count = typeCount.get(type);
  const hasRenderer = implemented.has(type) || embedded.includes(type);
  const status = hasRenderer ? '✅' : '❌';
  const note = embedded.includes(type) ? ' (embedded question type)' : '';
  
  console.log(`${status} ${type.padEnd(30)} ${String(count).padStart(4)} exercises${note}`);
  
  if (!embedded.includes(type)) {
    standalone.push({ type, count, hasRenderer });
  }
}

console.log(`\n${'─'.repeat(70)}`);
console.log(`📊 Total: ${exerciseTypes.length} types, ${Array.from(typeCount.values()).reduce((a,b) => a+b, 0)} exercises`);

const implementedStandalone = standalone.filter(t => t.hasRenderer).length;
console.log(`✅ Standalone types implemented: ${implementedStandalone}/${standalone.length} (${Math.round(implementedStandalone/standalone.length*100)}%)`);

console.log('\n' + '='.repeat(70));
console.log('🔍 DATA QUALITY CHECKS\n');

// Check gap-fill formats
const gapFillIssues = [];
const gapFillMatches = content.matchAll(/{\s*id:\s*'([^']+)',\s*type:\s*'(gap-fill|extended-gap-fill|open-cloze)'(.*?)(?=\n\s*},?\s*\{)/gs);
let gapFillTotal = 0;
for (const match of gapFillMatches) {
  gapFillTotal++;
  const id = match[1];
  const block = match[3];
  if (!block.includes('sentences:') && !block.includes('text:')) {
    gapFillIssues.push(id);
  }
}

console.log(`Gap-fill exercises: ${gapFillTotal}`);
console.log(`  ✅ With proper format: ${gapFillTotal - gapFillIssues.length}`);
if (gapFillIssues.length > 0) {
  console.log(`  ❌ Missing text/sentences: ${gapFillIssues.length}`);
  gapFillIssues.forEach(id => console.log(`     - ${id}`));
}

// Check phrasal-verbs and idioms formats
const pvNestedCount = (content.match(/type:\s*'phrasal-verbs'[^}]*exercises:/g) || []).length;
const pvItemsCount = (content.match(/type:\s*'phrasal-verbs'[^}]*items:/g) || []).length;
const pvTotal = typeCount.get('phrasal-verbs') || 0;

console.log(`\nPhrasal-verbs exercises: ${pvTotal}`);
console.log(`  ✅ Standard format (items): ${pvItemsCount}`);
console.log(`  ✅ Nested format (verbs + exercises): ${pvNestedCount}`);
console.log(`  ℹ️  Other: ${pvTotal - pvItemsCount - pvNestedCount}`);

const ieNestedCount = (content.match(/type:\s*'idioms-expressions'[^}]*exercises:/g) || []).length;
const ieItemsCount = (content.match(/type:\s*'idioms-expressions'[^}]*items:/g) || []).length;
const ieTotal = typeCount.get('idioms-expressions') || 0;

console.log(`\nIdioms-expressions exercises: ${ieTotal}`);
console.log(`  ✅ Standard format (items): ${ieItemsCount}`);
console.log(`  ✅ Nested format (idioms + exercises): ${ieNestedCount}`);
console.log(`  ℹ️  Other: ${ieTotal - ieItemsCount - ieNestedCount}`);

console.log('\n' + '='.repeat(70));
console.log('🎯 KEY STATISTICS\n');

const lessons = (content.match(/\bid:\s*'b2-m\d+-l\d+',/g) || []).length;
const modules = new Set([...content.matchAll(/b2-(m\d+)-l\d+/g)].map(m => m[1])).size;

console.log(`📚 Curriculum Structure:`);
console.log(`   Modules: ${modules}`);
console.log(`   Lessons: ${lessons}`);
console.log(`   Total exercises: ${Array.from(typeCount.values()).reduce((a,b) => a+b, 0)}`);
console.log(`   Avg per lesson: ${Math.round(Array.from(typeCount.values()).reduce((a,b) => a+b, 0) / lessons)}`);

console.log(`\n🏆 Quality Score: ${Math.round(implementedStandalone/standalone.length*100)}% renderer coverage`);

console.log('\n' + '='.repeat(70) + '\n');
