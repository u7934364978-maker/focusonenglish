#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const errors = [];
let totalExercises = 0;

function reportIssue(file, exerciseId, field, issue, severity = 'error') {
  errors.push({ file, exerciseId, field, issue, severity });
}

function checkField(file, exerciseId, fieldName, fieldValue, context) {
  if (!fieldValue || fieldValue.trim() === '') {
    reportIssue(file, exerciseId, fieldName, 'Field is missing or empty', 'error');
    return false;
  }
  
  const trimmed = fieldValue.trim();
  
  if (trimmed.length < 3 && !['id', 'A', 'B', 'C', 'D'].includes(fieldName)) {
    reportIssue(file, exerciseId, fieldName, `Field is too short (${trimmed.length} chars)`, 'warning');
  }
  
  if (trimmed.includes('TODO') || trimmed.includes('TBD') || trimmed.includes('XXX') || trimmed.includes('...')) {
    reportIssue(file, exerciseId, fieldName, 'Contains placeholder text', 'warning');
  }
  
  if (trimmed.match(/\{\{[^}]+\}\}/)) {
    reportIssue(file, exerciseId, fieldName, 'Contains unreplaced template variables', 'error');
  }
  
  return true;
}

function validateExerciseInContent(file, content) {
  const exerciseIdPattern = /["']?id["']?:\s*['"]([^'"]+)['"]/g;
  const exerciseMatches = [...content.matchAll(exerciseIdPattern)];
  
  console.log(`  Found ${exerciseMatches.length} potential exercises with id fields`);
  
  exerciseMatches.forEach(match => {
    const exerciseId = match[1];
    const startPos = match.index;
    
    let endPos = content.indexOf('\n  },', startPos);
    if (endPos === -1) endPos = content.indexOf('\n  }', startPos);
    if (endPos === -1) endPos = content.indexOf('\n},', startPos);
    if (endPos === -1) endPos = startPos + 5000;
    
    const exerciseBlock = content.substring(startPos, endPos + 10);
    
    totalExercises++;
    
    const hasTitle = /["']?title["']?:\s*['"]([^'"]+)['"]/i.test(exerciseBlock);
    const hasInstructions = /["']?instructions["']?:\s*['"]([^'"]+)['"]/i.test(exerciseBlock);
    const hasPrompt = /["']?prompt["']?:\s*['"]([^'"]+)['"]/i.test(exerciseBlock);
    const hasQuestion = /["']?question["']?:\s*['"]([^'"]+)['"]/i.test(exerciseBlock);
    
    if (!hasTitle && !hasInstructions && !hasPrompt && !hasQuestion) {
      reportIssue(
        file,
        exerciseId,
        'statement',
        'Exercise has no statement field (no title, instructions, prompt, or question)',
        'error'
      );
    } else {
      if (hasTitle) {
        const titleMatch = exerciseBlock.match(/["']?title["']?:\s*['"]([^'"]*)['"]/i);
        if (titleMatch) {
          checkField(file, exerciseId, 'title', titleMatch[1], exerciseBlock);
        }
      }
      
      if (hasInstructions) {
        const instrMatch = exerciseBlock.match(/["']?instructions["']?:\s*['"]([^'"]*)['"]/i);
        if (instrMatch) {
          checkField(file, exerciseId, 'instructions', instrMatch[1], exerciseBlock);
        }
      }
      
      if (hasPrompt) {
        const promptMatch = exerciseBlock.match(/["']?prompt["']?:\s*['"]([^'"]*)['"]/i);
        if (promptMatch) {
          checkField(file, exerciseId, 'prompt', promptMatch[1], exerciseBlock);
        }
      }
    }
    
    const questionPattern = /["']?question["']?:\s*['"]([^'"]*)['"]/gi;
    const questions = [...exerciseBlock.matchAll(questionPattern)];
    
    questions.forEach((qMatch, idx) => {
      const questionText = qMatch[1];
      if (!questionText || questionText.trim() === '') {
        reportIssue(
          file,
          `${exerciseId}[question-${idx}]`,
          'question',
          'Question text is empty',
          'error'
        );
      } else {
        checkField(file, `${exerciseId}[question-${idx}]`, 'question', questionText, exerciseBlock);
      }
    });
    
    const sentencePattern = /["']?sentence["']?:\s*['"]([^'"]*)['"]/gi;
    const sentences = [...exerciseBlock.matchAll(sentencePattern)];
    
    sentences.forEach((sMatch, idx) => {
      const sentenceText = sMatch[1];
      if (!sentenceText || sentenceText.trim() === '') {
        reportIssue(
          file,
          `${exerciseId}[sentence-${idx}]`,
          'sentence',
          'Sentence text is empty',
          'error'
        );
      }
    });
  });
}

async function validateFile(filePath) {
  console.log(`\n📄 Validating: ${path.basename(filePath)}`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    const exportMatches = content.match(/export\s+(?:const|let|var)\s+(\w+)/g) || [];
    const exportNames = exportMatches.map(m => m.match(/export\s+(?:const|let|var)\s+(\w+)/)[1]);
    
    if (exportNames.length === 0) {
      console.log('  ⚠️  No exports found in file');
      return;
    }
    
    console.log(`  Found ${exportNames.length} exports`);
    
    validateExerciseInContent(path.basename(filePath), content);
    
  } catch (error) {
    console.log(`  ❌ Error reading file: ${error.message}`);
  }
}

async function main() {
  console.log('🔍 Exercise Validation Tool\n');
  console.log('Checking for missing or empty exercise statements (title, instructions, prompt, question)\n');
  console.log('=' .repeat(80));
  
  const libDir = path.join(__dirname, '..', 'src', 'lib');
  
  const filesToCheck = [
    'course-data-a1.ts',
    'course-data-b2.ts',
    'a1-expansion-content.ts',
    'b2-improvements-part1-open-cloze.ts',
    'b2-improvements-part2-gapped-text.ts',
    'b2-improvements-part3-multiple-matching.ts',
    'b2-improvements-part4-key-transformations.ts',
    'b2-improvements-part5-multiple-choice-cloze.ts',
    'b2-improvements-part6-speaking.ts',
    'b2-improvements-part7-writing.ts',
    'course/b1/unit-1.ts',
    'course/b1/unit-2.ts',
    'course/b1/unit-3.ts',
    'course/b1/unit-4.ts',
    'course/b1/unit-5.ts',
    'course/b1/unit-6.ts',
    'course/b1/unit-7.ts',
    'course/b1/unit-8.ts',
  ];
  
  for (const file of filesToCheck) {
    const filePath = path.join(libDir, file);
    if (fs.existsSync(filePath)) {
      await validateFile(filePath);
    } else {
      console.log(`\n⚠️  File not found: ${file}`);
    }
  }
  
  console.log('\n' + '='.repeat(80));
  console.log('\n📊 VALIDATION SUMMARY\n');
  
  console.log(`Total Exercises Found: ${totalExercises}`);
  
  const errorCount = errors.filter(e => e.severity === 'error').length;
  const warningCount = errors.filter(e => e.severity === 'warning').length;
  
  console.log(`Total Issues: ${errors.length}`);
  console.log(`  ❌ Errors: ${errorCount}`);
  console.log(`  ⚠️  Warnings: ${warningCount}`);
  
  if (errors.length === 0) {
    console.log('\n✅ All exercises are valid!');
    console.log('   All exercises have proper statements (title, instructions, prompt, or question)');
    process.exit(0);
  }
  
  const errorsByFile = {};
  errors.forEach(error => {
    if (!errorsByFile[error.file]) {
      errorsByFile[error.file] = [];
    }
    errorsByFile[error.file].push(error);
  });
  
  console.log('\n📋 DETAILED REPORT:\n');
  
  Object.keys(errorsByFile).sort().forEach(file => {
    const fileErrors = errorsByFile[file];
    const fileErrorCount = fileErrors.filter(e => e.severity === 'error').length;
    const fileWarningCount = fileErrors.filter(e => e.severity === 'warning').length;
    
    console.log(`\n📄 ${file}`);
    console.log(`   Issues: ${fileErrors.length} (❌ ${fileErrorCount} errors, ⚠️  ${fileWarningCount} warnings)`);
    
    const errorsByExercise = {};
    fileErrors.forEach(error => {
      if (!errorsByExercise[error.exerciseId]) {
        errorsByExercise[error.exerciseId] = [];
      }
      errorsByExercise[error.exerciseId].push(error);
    });
    
    const exerciseIds = Object.keys(errorsByExercise).sort();
    const maxDisplay = 10;
    
    exerciseIds.slice(0, maxDisplay).forEach(exerciseId => {
      const exerciseErrors = errorsByExercise[exerciseId];
      console.log(`\n   Exercise: ${exerciseId}`);
      exerciseErrors.forEach(error => {
        const icon = error.severity === 'error' ? '❌' : '⚠️ ';
        console.log(`     ${icon} ${error.field}: ${error.issue}`);
      });
    });
    
    if (exerciseIds.length > maxDisplay) {
      console.log(`\n   ... and ${exerciseIds.length - maxDisplay} more exercises with issues`);
    }
  });
  
  console.log('\n' + '='.repeat(80));
  
  if (errorCount > 0) {
    console.log('\n❌ Validation failed: Found exercises with missing statements or critical errors');
    console.log('   Action required: Fix the errors listed above');
    process.exit(1);
  } else {
    console.log('\n⚠️  Validation completed with warnings only');
    console.log('   Warnings should be reviewed but do not prevent deployment');
    process.exit(0);
  }
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
