const fs = require('fs');

const content = fs.readFileSync('./lib/course-data-b2.ts', 'utf8');

const exerciseTypes = new Map();
const issues = [];

const exerciseMatches = content.matchAll(/{\s*id:\s*'([^']+)',\s*type:\s*'([^']+)'/g);

for (const match of exerciseMatches) {
  const [_, id, type] = match;
  if (!exerciseTypes.has(type)) {
    exerciseTypes.set(type, []);
  }
  exerciseTypes.get(type).push(id);
}

console.log('\n=== EXERCISE TYPES SUMMARY ===\n');
const sortedTypes = Array.from(exerciseTypes.entries()).sort((a, b) => a[0].localeCompare(b[0]));

for (const [type, ids] of sortedTypes) {
  console.log(`${type}: ${ids.length} exercises`);
}

console.log(`\nTotal exercise types: ${exerciseTypes.size}`);
console.log(`Total exercises: ${Array.from(exerciseTypes.values()).reduce((sum, arr) => sum + arr.length, 0)}`);

console.log('\n=== DETAILED BREAKDOWN ===\n');
for (const [type, ids] of sortedTypes) {
  console.log(`\n${type.toUpperCase()} (${ids.length}):`);
  ids.forEach(id => console.log(`  - ${id}`));
}
