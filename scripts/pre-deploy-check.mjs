#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Running pre-deploy checks...\n');

let hasErrors = false;
const errors = [];
const warnings = [];

const courseDataPath = path.join(__dirname, '../lib/course-data-b2.ts');
const content = fs.readFileSync(courseDataPath, 'utf-8');
const lines = content.split('\n');

console.log('1️⃣ Checking for empty IDs...');
const emptyIdPattern = /id:\s*''\s*,/;
let emptyIdCount = 0;

lines.forEach((line, index) => {
  if (emptyIdPattern.test(line)) {
    emptyIdCount++;
    errors.push({
      file: 'course-data-b2.ts',
      line: index + 1,
      message: 'Empty ID found',
      code: line.trim()
    });
  }
});

if (emptyIdCount > 0) {
  console.log(`   ❌ Found ${emptyIdCount} empty IDs`);
  hasErrors = true;
} else {
  console.log(`   ✅ No empty IDs found`);
}

console.log('\n2️⃣ Checking for duplicate IDs...');
const idPattern = /id:\s*'([^']+)'/g;
const allIds = new Map();
let duplicateCount = 0;

lines.forEach((line, index) => {
  const matches = [...line.matchAll(idPattern)];
  matches.forEach(match => {
    const id = match[1];
    if (id && id !== '') {
      if (allIds.has(id)) {
        duplicateCount++;
        errors.push({
          file: 'course-data-b2.ts',
          line: index + 1,
          message: `Duplicate ID found: "${id}"`,
          code: line.trim(),
          previousOccurrence: allIds.get(id)
        });
      } else {
        allIds.set(id, index + 1);
      }
    }
  });
});

if (duplicateCount > 0) {
  console.log(`   ❌ Found ${duplicateCount} duplicate IDs`);
  hasErrors = true;
} else {
  console.log(`   ✅ No duplicate IDs found`);
}

console.log('\n3️⃣ Checking for malformed IDs...');
const malformedPattern = /id:\s*'(q\d+|gap-\d+|t\d+|f\d+|g\d+)'\s*,/;
let malformedCount = 0;

lines.forEach((line, index) => {
  if (malformedPattern.test(line)) {
    const match = line.match(/id:\s*'([^']+)'/);
    if (match && !line.includes('b2-')) {
      malformedCount++;
      warnings.push({
        file: 'course-data-b2.ts',
        line: index + 1,
        message: `Potentially malformed ID: "${match[1]}" (missing exercise prefix?)`,
        code: line.trim()
      });
    }
  }
});

if (malformedCount > 0) {
  console.log(`   ⚠️  Found ${malformedCount} potentially malformed IDs`);
} else {
  console.log(`   ✅ No malformed IDs found`);
}

console.log('\n4️⃣ Checking for missing required fields...');
const exercisePattern = /{\s*id:\s*'([^']*b2[^']*)'/;
let currentExercise = null;
let missingFieldsCount = 0;

lines.forEach((line, index) => {
  const exerciseMatch = line.match(exercisePattern);
  if (exerciseMatch) {
    currentExercise = {
      id: exerciseMatch[1],
      line: index + 1,
      hasType: false,
      hasQuestions: false
    };
  }
  
  if (currentExercise && line.includes('type:')) {
    currentExercise.hasType = true;
  }
  
  if (currentExercise && (line.includes('questions:') || line.includes('transformations:') || line.includes('formations:'))) {
    currentExercise.hasQuestions = true;
  }
  
  if (currentExercise && line.trim() === '},') {
    if (!currentExercise.hasType) {
      missingFieldsCount++;
      warnings.push({
        file: 'course-data-b2.ts',
        line: currentExercise.line,
        message: `Exercise "${currentExercise.id}" missing "type" field`,
        code: ''
      });
    }
    currentExercise = null;
  }
});

if (missingFieldsCount > 0) {
  console.log(`   ⚠️  Found ${missingFieldsCount} exercises with missing fields`);
} else {
  console.log(`   ✅ All exercises have required fields`);
}

if (errors.length > 0) {
  console.log('\n\n❌ ERRORS FOUND:\n');
  errors.slice(0, 10).forEach((error, i) => {
    console.log(`${i + 1}. ${error.file}:${error.line}`);
    console.log(`   ${error.message}`);
    console.log(`   ${error.code}\n`);
  });
  if (errors.length > 10) {
    console.log(`   ... and ${errors.length - 10} more errors\n`);
  }
}

if (warnings.length > 0) {
  console.log('\n\n⚠️  WARNINGS:\n');
  warnings.slice(0, 5).forEach((warning, i) => {
    console.log(`${i + 1}. ${warning.file}:${warning.line}`);
    console.log(`   ${warning.message}`);
    if (warning.code) console.log(`   ${warning.code}\n`);
  });
  if (warnings.length > 5) {
    console.log(`   ... and ${warnings.length - 5} more warnings\n`);
  }
}

console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.log('❌ PRE-DEPLOY CHECK FAILED');
  console.log('   Fix errors before deploying!');
  console.log('   Run: node scripts/fix-empty-ids.mjs');
  console.log('='.repeat(50) + '\n');
  process.exit(1);
} else {
  console.log('✅ PRE-DEPLOY CHECK PASSED');
  console.log('   Safe to deploy!');
  console.log('='.repeat(50) + '\n');
  process.exit(0);
}
