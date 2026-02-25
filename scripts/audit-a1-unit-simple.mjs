import fs from 'fs';
import path from 'path';

const unitNumber = process.argv.find(arg => arg.startsWith('--unit='))?.split('=')[1];

if (!unitNumber) {
  console.error('Error: Please specify unit number with --unit=X');
  process.exit(1);
}

const unitFilePath = path.join(process.cwd(), `src/lib/course/a1/unit-${unitNumber}.ts`);

if (!fs.existsSync(unitFilePath)) {
  console.error(`Error: File not found: ${unitFilePath}`);
  process.exit(1);
}

function auditUnit() {
  console.log(`\n🔍 Auditing A1 Unit ${unitNumber} (Regex mode)...\n`);
  
  const content = fs.readFileSync(unitFilePath, 'utf8');
  
  // Basic Regex to extract exercises (very simplified but enough for count and basic checks)
  const exercisesMatches = content.match(/\{[\s\S]*?"id":\s*"a1-u\d+-[^"]+"[\s\S]*?\}/g);
  
  if (!exercisesMatches) {
    console.error(`Error: Could not find exercises in ${unitFilePath}`);
    process.exit(1);
  }

  const exerciseCount = exercisesMatches.length;
  console.log(`📊 Statistics:`);
  console.log(`- Total exercises detected: ${exerciseCount}`);

  const errors = [];
  if (exerciseCount < 75) {
    errors.push(`Exercise count is ${exerciseCount}, expected 75 (for units with Lesson 5).`);
  }

  // Check for placeholders
  if (content.includes('[[Option 1|]]')) {
    errors.push(`Placeholders detected: Found "[[Option 1|]]" in the file.`);
  }

  if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(err => console.log(`  - ${err}`));
    process.exit(1);
  } else {
    console.log(`\n✅ Audit passed successfully!`);
  }
}

auditUnit();
