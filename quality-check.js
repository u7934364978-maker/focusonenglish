const fs = require('fs');
const content = fs.readFileSync('./lib/course-data-b2.ts', 'utf8');

const issues = [];

// Check gap-fill exercises
console.log('\n🔍 Checking GAP-FILL exercises...');
const gapFillMatches = content.matchAll(/{\s*id:\s*'([^']+)',\s*type:\s*'gap-fill'[^}]*?(?=\n\s*}[\s,])/gs);
let gapFillCount = 0;
for (const match of gapFillMatches) {
  gapFillCount++;
  const block = match[0];
  const id = match[1];
  
  if (!block.includes('sentences:') && !block.includes('text:')) {
    issues.push(`❌ ${id}: Missing both 'sentences' and 'text' properties`);
  }
}
console.log(`   Checked ${gapFillCount} gap-fill exercises`);

// Check collocation-matching for distractors
console.log('\n🔍 Checking COLLOCATION-MATCHING for distractors...');
const collMatches = content.matchAll(/{\s*id:\s*'([^']+)',\s*type:\s*'collocation-matching'(.*?)(?=\n\s*},?\s*{)/gs);
let collCount = 0;
let missingDistractors = 0;
for (const match of collMatches) {
  collCount++;
  const id = match[1];
  const block = match[2];
  
  // Check if pairs exist
  if (block.includes('pairs:')) {
    // Check if any pair is missing distractors
    const pairBlocks = block.split(/{\s*word:/g).slice(1);
    for (const pairBlock of pairBlocks) {
      if (!pairBlock.includes('distractors:')) {
        missingDistractors++;
        issues.push(`⚠️  ${id}: Pair missing 'distractors' property`);
        break;
      }
    }
  }
}
console.log(`   Checked ${collCount} collocation-matching exercises`);
console.log(`   Found ${missingDistractors} with missing distractors`);

// Check phrasal-verbs and idioms-expressions for items
console.log('\n🔍 Checking PHRASAL-VERBS for items...');
const pvMatches = content.matchAll(/{\s*id:\s*'([^']+)',\s*type:\s*'phrasal-verbs'(.*?)(?=\n\s*},?\s*{)/gs);
let pvCount = 0;
let missingItems = 0;
for (const match of pvMatches) {
  pvCount++;
  const id = match[1];
  const block = match[2];
  
  if (!block.includes('items:')) {
    missingItems++;
    issues.push(`❌ ${id}: Missing 'items' property`);
  }
}
console.log(`   Checked ${pvCount} phrasal-verbs exercises`);
console.log(`   Found ${missingItems} with missing items`);

console.log('\n🔍 Checking IDIOMS-EXPRESSIONS for items...');
const ieMatches = content.matchAll(/{\s*id:\s*'([^']+)',\s*type:\s*'idioms-expressions'(.*?)(?=\n\s*},?\s*{)/gs);
let ieCount = 0;
let ieMissingItems = 0;
for (const match of ieMatches) {
  ieCount++;
  const id = match[1];
  const block = match[2];
  
  if (!block.includes('items:')) {
    ieMissingItems++;
    issues.push(`❌ ${id}: Missing 'items' property`);
  }
}
console.log(`   Checked ${ieCount} idioms-expressions exercises`);
console.log(`   Found ${ieMissingItems} with missing items`);

// Check sentence-ordering for proper format
console.log('\n🔍 Checking SENTENCE-ORDERING format...');
const soMatches = content.matchAll(/{\s*id:\s*'([^']+)',\s*type:\s*'sentence-ordering'(.*?)(?=\n\s*},?\s*{)/gs);
let soCount = 0;
for (const match of soMatches) {
  soCount++;
  const id = match[1];
  const block = match[2];
  
  // Check if sentences have objects with {id, text, position}
  if (block.includes('sentences:') && block.includes('{ id:') && block.includes('text:') && block.includes('position:')) {
    console.log(`   ✅ ${id}: Has object format with id/text/position`);
  } else if (block.includes('sentences:')) {
    console.log(`   ℹ️  ${id}: String array format`);
  }
}
console.log(`   Checked ${soCount} sentence-ordering exercises`);

console.log('\n' + '='.repeat(50));
console.log(`\n📊 SUMMARY: Found ${issues.length} potential issues\n`);

if (issues.length > 0) {
  console.log('Issues found:');
  issues.forEach(issue => console.log(issue));
} else {
  console.log('✅ No critical issues found!');
}
