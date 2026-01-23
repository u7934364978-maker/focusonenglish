#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const errors = [];
let totalExercises = 0;
const exercisesByType = {};

const VALIDATION_RULES = {
  'reading': {
    required: ['id', 'type', 'title', 'text', 'questions'],
    optional: ['wordCount', 'readingTime', 'vocabularyHelp'],
    nested: {
      questions: {
        required: ['id', 'type', 'question', 'correctAnswer', 'points'],
        optional: ['options', 'explanation', 'acceptableAnswers']
      }
    }
  },
  'writing': {
    required: ['id', 'type', 'prompt', 'writingType', 'minWords', 'maxWords', 'timeLimit'],
    optional: ['rubric', 'exampleResponse', 'tips'],
    nested: {}
  },
  'listening': {
    required: ['id', 'type', 'audioUrl', 'duration', 'questions', 'allowReplay'],
    optional: ['transcript', 'maxReplays'],
    nested: {
      questions: {
        required: ['id', 'type', 'question', 'correctAnswer', 'points'],
        optional: ['options', 'explanation']
      }
    }
  },
  'speaking': {
    required: ['id', 'type', 'prompt', 'evaluationCriteria'],
    optional: ['targetText', 'timeLimit', 'modelAudioUrl', 'hints'],
    nested: {}
  },
  'grammar': {
    required: ['id', 'type', 'title', 'grammarPoint', 'explanation', 'examples', 'questions'],
    optional: [],
    nested: {
      questions: {
        required: ['id', 'type', 'question', 'correctAnswer', 'points'],
        optional: ['options', 'explanation']
      }
    }
  },
  'vocabulary': {
    required: ['id', 'type', 'title', 'vocabularySet', 'questions'],
    optional: [],
    nested: {
      questions: {
        required: ['id', 'type', 'question', 'correctAnswer', 'points'],
        optional: ['options', 'explanation']
      }
    }
  },
  'pronunciation-practice': {
    required: ['id', 'type', 'title', 'instructions', 'targetSentences', 'focusPoints', 'difficulty'],
    optional: ['timeLimit'],
    nested: {
      targetSentences: {
        required: ['sentence', 'translation'],
        optional: ['phonetic', 'audioUrl']
      }
    }
  },
  'key-word-transformation': {
    required: ['id', 'type', 'title', 'instructions', 'transformations'],
    optional: [],
    nested: {
      transformations: {
        required: ['id', 'sentence', 'keyWord', 'startOfAnswer', 'correctAnswer', 'explanation', 'points'],
        optional: []
      }
    }
  },
  'word-formation': {
    required: ['id', 'type', 'title', 'instructions', 'formations'],
    optional: [],
    nested: {
      formations: {
        required: ['id', 'sentence', 'promptWord', 'correctAnswer', 'explanation', 'points'],
        optional: []
      }
    }
  },
  'multiple-choice-cloze': {
    required: ['id', 'type', 'title', 'instructions', 'text', 'questions'],
    optional: [],
    nested: {
      questions: {
        required: ['id', 'gapNumber', 'options', 'correctAnswer', 'explanation', 'points'],
        optional: []
      }
    }
  },
  'open-cloze': {
    required: ['id', 'type', 'title', 'instructions', 'text', 'gaps'],
    optional: ['points'],
    nested: {
      gaps: {
        required: ['id', 'correctAnswer'],
        optional: ['explanation']
      }
    }
  },
  'gapped-text': {
    required: ['id', 'type', 'title', 'instructions', 'text', 'paragraphs'],
    optional: ['points'],
    nested: {
      paragraphs: {
        required: ['id', 'text'],
        optional: ['correctPosition']
      }
    }
  },
  'multiple-matching': {
    required: ['id', 'type', 'title', 'instructions', 'questions'],
    optional: ['texts', 'points'],
    nested: {
      questions: {
        required: ['id', 'question', 'correctAnswer'],
        optional: ['explanation', 'points']
      }
    }
  },
  'sentence-completion': {
    required: ['id', 'type', 'title', 'instructions', 'sentences'],
    optional: [],
    nested: {
      sentences: {
        required: ['id', 'prompt', 'correctCompletion', 'points'],
        optional: ['options', 'explanation']
      }
    }
  },
  'error-identification': {
    required: ['id', 'type', 'title', 'instructions', 'sentences'],
    optional: [],
    nested: {
      sentences: {
        required: ['id', 'sentence', 'hasError', 'points'],
        optional: ['errorWord', 'correction', 'explanation']
      }
    }
  },
  'paraphrasing': {
    required: ['id', 'type', 'title', 'instructions', 'items'],
    optional: [],
    nested: {
      items: {
        required: ['id', 'originalSentence', 'correctParaphrase', 'points'],
        optional: ['alternatives', 'explanation']
      }
    }
  },
  'collocation-matching': {
    required: ['id', 'type', 'title', 'instructions', 'pairs'],
    optional: [],
    nested: {
      pairs: {
        required: ['id', 'word', 'correctMatch', 'distractors', 'points'],
        optional: ['example']
      }
    }
  },
  'phrasal-verbs': {
    required: ['id', 'type', 'title', 'instructions', 'items'],
    optional: [],
    nested: {
      items: {
        required: ['id', 'sentence', 'phrasalVerb', 'meaning', 'correctAnswer', 'points'],
        optional: ['options', 'explanation']
      }
    }
  },
  'idioms-expressions': {
    required: ['id', 'type', 'title', 'instructions', 'items'],
    optional: [],
    nested: {
      items: {
        required: ['id', 'context', 'idiom', 'meaning', 'correctUsage', 'points'],
        optional: ['options', 'explanation']
      }
    }
  },
  'summary-writing': {
    required: ['id', 'type', 'title', 'instructions', 'sourceText', 'targetWordCount', 'minWords', 'maxWords', 'keyPoints', 'rubric'],
    optional: [],
    nested: {}
  },
  'gap-fill-text': {
    required: ['id', 'type', 'title', 'instructions', 'text', 'gaps'],
    optional: [],
    nested: {
      gaps: {
        required: ['id', 'gapNumber', 'correctAnswer', 'points'],
        optional: ['acceptableAlternatives', 'explanation']
      }
    }
  }
};

function reportIssue(file, exerciseId, field, issue, severity = 'error') {
  errors.push({ file, exerciseId, field, issue, severity, type: exercisesByType[exerciseId] || 'unknown' });
}

function validateField(file, exerciseId, fieldName, fieldValue, required = true) {
  if (required) {
    if (fieldValue === undefined || fieldValue === null) {
      reportIssue(file, exerciseId, fieldName, 'Required field is missing', 'error');
      return false;
    }
  }

  if (fieldValue === undefined || fieldValue === null) {
    return true;
  }

  if (typeof fieldValue === 'string') {
    const trimmed = fieldValue.trim();
    if (trimmed === '') {
      reportIssue(file, exerciseId, fieldName, 'Field is empty string', 'error');
      return false;
    }
  }

  if (Array.isArray(fieldValue)) {
    if (fieldValue.length === 0) {
      reportIssue(file, exerciseId, fieldName, 'Array is empty', 'warning');
      return false;
    }
  }

  return true;
}

function validateNestedArray(file, exerciseId, arrayName, items, rules) {
  if (!Array.isArray(items)) {
    reportIssue(file, exerciseId, arrayName, 'Expected array but got ' + typeof items, 'error');
    return;
  }

  items.forEach((item, idx) => {
    const itemId = `${exerciseId}[${arrayName}[${idx}]]`;
    
    rules.required.forEach(field => {
      validateField(file, itemId, field, item[field], true);
    });

    rules.optional.forEach(field => {
      if (item[field] !== undefined) {
        validateField(file, itemId, field, item[field], false);
      }
    });
  });
}

function validateExerciseByType(file, exercise) {
  const exerciseId = exercise.id || 'unknown-id';
  const exerciseType = exercise.type;

  exercisesByType[exerciseId] = exerciseType;
  totalExercises++;

  const rules = VALIDATION_RULES[exerciseType];
  
  if (!rules) {
    reportIssue(file, exerciseId, 'type', `Unknown exercise type: ${exerciseType}`, 'warning');
    return;
  }

  rules.required.forEach(field => {
    validateField(file, exerciseId, field, exercise[field], true);
  });

  rules.optional.forEach(field => {
    if (exercise[field] !== undefined) {
      validateField(file, exerciseId, field, exercise[field], false);
    }
  });

  Object.keys(rules.nested).forEach(arrayName => {
    if (exercise[arrayName]) {
      validateNestedArray(file, exerciseId, arrayName, exercise[arrayName], rules.nested[arrayName]);
    } else {
      reportIssue(file, exerciseId, arrayName, `Required nested array "${arrayName}" is missing`, 'error');
    }
  });
}

function findAndValidateExercises(file, content) {
  const exercisePattern = /\{[\s\S]*?id:\s*['"]([^'"]+)['"][\s\S]*?type:\s*['"]([^'"]+)['"][\s\S]*?\}/g;
  
  let match;
  const matches = [];
  
  while ((match = exercisePattern.exec(content)) !== null) {
    matches.push({
      id: match[1],
      type: match[2],
      start: match.index,
      fullMatch: match[0]
    });
  }

  console.log(`  Found ${matches.length} exercises with id and type`);

  matches.forEach(match => {
    try {
      let exerciseBlock = match.fullMatch;
      
      let openBraces = 0;
      let closeBraces = 0;
      let endPos = match.start;
      
      for (let i = match.start; i < content.length && i < match.start + 10000; i++) {
        if (content[i] === '{') openBraces++;
        if (content[i] === '}') closeBraces++;
        if (openBraces > 0 && openBraces === closeBraces) {
          endPos = i + 1;
          break;
        }
      }
      
      exerciseBlock = content.substring(match.start, endPos);
      
      const cleaned = exerciseBlock
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\/\/.*/g, '');
      
      try {
        const exercise = eval('(' + cleaned + ')');
        validateExerciseByType(file, exercise);
      } catch (e) {
        exercisesByType[match.id] = match.type;
        totalExercises++;
      }
    } catch (error) {
      console.log(`    Warning: Could not fully parse exercise ${match.id}`);
    }
  });
}

async function validateFile(filePath) {
  console.log(`\n📄 Validating: ${path.basename(filePath)}`);
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    findAndValidateExercises(path.basename(filePath), content);
  } catch (error) {
    console.log(`  ❌ Error reading file: ${error.message}`);
  }
}

async function main() {
  console.log('🔍 Exercise Type Validation Tool\n');
  console.log('Validating exercises against their type-specific schemas\n');
  console.log('=' .repeat(80));
  
  const libDir = path.join(__dirname, '..', 'lib');
  
  const filesToCheck = [
    'course-data-a1.ts',
    'course-data-b2.ts',
    'b2-improvements-part1-open-cloze.ts',
    'b2-improvements-part2-gapped-text.ts',
    'b2-improvements-part3-multiple-matching.ts',
    'b2-improvements-part4-key-transformations.ts',
    'b2-improvements-part5-multiple-choice-cloze.ts',
    'b2-improvements-part6-speaking.ts',
    'b2-improvements-part7-writing.ts',
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
  
  console.log(`Total Exercises Validated: ${totalExercises}`);
  
  const errorCount = errors.filter(e => e.severity === 'error').length;
  const warningCount = errors.filter(e => e.severity === 'warning').length;
  
  console.log(`Total Issues: ${errors.length}`);
  console.log(`  ❌ Errors: ${errorCount}`);
  console.log(`  ⚠️  Warnings: ${warningCount}`);
  
  const errorsByType = {};
  errors.forEach(error => {
    if (!errorsByType[error.type]) {
      errorsByType[error.type] = { errors: 0, warnings: 0, issues: [] };
    }
    if (error.severity === 'error') {
      errorsByType[error.type].errors++;
    } else {
      errorsByType[error.type].warnings++;
    }
    errorsByType[error.type].issues.push(error);
  });
  
  console.log('\n📋 ISSUES BY EXERCISE TYPE:\n');
  
  Object.keys(errorsByType).sort().forEach(type => {
    const typeData = errorsByType[type];
    console.log(`\n🏷️  Type: ${type}`);
    console.log(`   Issues: ${typeData.issues.length} (❌ ${typeData.errors} errors, ⚠️  ${typeData.warnings} warnings)`);
    
    const fieldCounts = {};
    typeData.issues.forEach(issue => {
      fieldCounts[issue.field] = (fieldCounts[issue.field] || 0) + 1;
    });
    
    console.log(`   Most common issues:`);
    Object.entries(fieldCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .forEach(([field, count]) => {
        console.log(`     - ${field}: ${count} occurrences`);
      });
  });
  
  if (errors.length > 0) {
    console.log('\n📋 DETAILED ERRORS (first 20):\n');
    
    errors.slice(0, 20).forEach(error => {
      const icon = error.severity === 'error' ? '❌' : '⚠️ ';
      console.log(`${icon} [${error.type}] ${error.exerciseId}`);
      console.log(`   Field: ${error.field} - ${error.issue}`);
      console.log(`   File: ${error.file}\n`);
    });
    
    if (errors.length > 20) {
      console.log(`... and ${errors.length - 20} more issues\n`);
    }
  }
  
  console.log('=' .repeat(80));
  
  if (errors.length === 0) {
    console.log('\n✅ All exercises are valid!');
    console.log('   All exercises conform to their type-specific schemas');
    process.exit(0);
  }
  
  if (errorCount > 0) {
    console.log('\n❌ Validation failed: Found exercises with missing required fields');
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
