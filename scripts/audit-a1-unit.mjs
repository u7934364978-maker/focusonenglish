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

async function auditUnit() {
  console.log(`\n🔍 Auditing A1 Unit ${unitNumber}...\n`);
  
  // Dynamic import of the unit (using file URL for ESM)
  const fileUrl = `file://${unitFilePath}`;
  const module = await import(fileUrl);
  const exercises = module[`UNIT_${unitNumber}_EXERCISES`];

  if (!exercises || !Array.isArray(exercises)) {
    console.error(`Error: Could not find UNIT_${unitNumber}_EXERCISES array in ${unitFilePath}`);
    process.exit(1);
  }

  const errors = [];
  const warnings = [];
  const exerciseCount = exercises.length;
  const typesCount = {};
  const seenTexts = new Set();

  if (exerciseCount !== 50) {
    errors.push(`Exercise count is ${exerciseCount}, expected 50.`);
  }

  exercises.forEach((ex, index) => {
    const id = ex.id || `index-${index}`;
    
    // 1. Check ID
    if (!ex.id) errors.push(`[Ex ${index}] Missing ID.`);
    
    // 2. Check Type Variety
    typesCount[ex.type] = (typesCount[ex.type] || 0) + 1;

    // 3. Check for consecutive identical types (max 3)
    if (index >= 3) {
      const last3 = exercises.slice(index - 3, index).map(e => e.type);
      if (last3.every(t => t === ex.type)) {
        warnings.push(`[Ex ${index}] Four consecutive exercises of type "${ex.type}". Consider adding variety.`);
      }
    }

    // 4. Check for duplicates in content
    const contentStr = JSON.stringify(ex.content);
    if (seenTexts.has(contentStr)) {
      errors.push(`[Ex ${index}] Duplicate content detected.`);
    }
    seenTexts.add(contentStr);

    // 5. Basic content validation based on type
    if (ex.type === 'multiple-choice' || ex.type === 'fill-blank' || ex.type === 'speaking-analysis') {
      if (!ex.content.questions || !Array.isArray(ex.content.questions) || ex.content.questions.length === 0) {
        errors.push(`[Ex ${index}] (${ex.type}) Missing questions array.`);
      }
    } else if (ex.type === 'sentence-building') {
      if (!ex.content.sentences || !Array.isArray(ex.content.sentences) || ex.content.sentences.length === 0) {
        errors.push(`[Ex ${index}] (sentence-building) Missing sentences array.`);
      }
    } else if (ex.type === 'matching') {
      if (!ex.content.pairs || !Array.isArray(ex.content.pairs) || ex.content.pairs.length === 0) {
        errors.push(`[Ex ${index}] (matching) Missing pairs array.`);
      }
    } else if (ex.type === 'flashcard') {
      if (!ex.content.front && !ex.content.back && (!ex.content.items || !Array.isArray(ex.content.items))) {
        errors.push(`[Ex ${index}] (flashcard) Missing front/back or items array.`);
      }
    }
  });

  // Report
  console.log(`📊 Statistics:`);
  console.log(`- Total exercises: ${exerciseCount}`);
  console.log(`- Types distribution:`, typesCount);
  
  if (errors.length > 0) {
    console.log(`\n❌ Errors (${errors.length}):`);
    errors.forEach(err => console.log(`  - ${err}`));
  }

  if (warnings.length > 0) {
    console.log(`\n⚠️ Warnings (${warnings.length}):`);
    warnings.forEach(warn => console.log(`  - ${warn}`));
  }

  if (errors.length === 0) {
    console.log(`\n✅ Audit passed successfully!`);
  } else {
    process.exit(1);
  }
}

auditUnit().catch(err => {
  console.error('Audit failed with unexpected error:', err);
  process.exit(1);
});
