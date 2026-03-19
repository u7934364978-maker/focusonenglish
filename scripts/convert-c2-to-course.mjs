/**
 * Converts src/lib/c2-units/unit-N.ts files to src/lib/course/c2/ structure
 * following the same pattern as src/lib/course/b2/ and src/lib/course/c1/
 *
 * Run with: node scripts/convert-c2-to-course.mjs
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SRC_DIR = path.join(ROOT, 'src/lib/c2-units');
const DEST_DIR = path.join(ROOT, 'src/lib/course/c2');

const LESSON_NAMES = [
  { num: 1, key: 'GRAMMAR', label: 'Grammar', file: 'grammar', topicName: 'Grammar' },
  { num: 2, key: 'GRAMMAR_CONTEXT', label: 'Grammar in Context', file: 'grammar-context', topicName: 'Grammar' },
  { num: 3, key: 'READING', label: 'Reading', file: 'reading', topicName: 'Reading' },
  { num: 4, key: 'LISTENING', label: 'Listening', file: 'listening', topicName: 'Listening' },
  { num: 5, key: 'WRITING', label: 'Writing', file: 'writing', topicName: 'Writing' },
  { num: 6, key: 'SPEAKING', label: 'Speaking', file: 'speaking', topicName: 'Speaking' },
];

// Curriculum mapping (unit → title, topic, grammar)
const CURRICULUM = [
  { unit: 1, title: 'The Power of Words', topic: 'language-power', grammar: 'rhetorical-inversion' },
  { unit: 2, title: 'Rhetoric and Persuasion', topic: 'rhetoric', grammar: 'cleft-sentences-advanced' },
  { unit: 3, title: 'Political Discourse', topic: 'political-language', grammar: 'fronting-topicalisation' },
  { unit: 4, title: 'Language and Identity', topic: 'language-identity', grammar: 'register-control' },
  { unit: 5, title: 'Propaganda, Spin and Manipulation', topic: 'media-language', grammar: 'distancing-passive' },
  { unit: 6, title: 'Module 1 Review: Language and Power', topic: 'review', grammar: 'mixed-review-m1' },
  { unit: 7, title: 'What is Literature?', topic: 'literature', grammar: 'narrative-tenses-mastery' },
  { unit: 8, title: 'The Art of the Novel', topic: 'novel', grammar: 'textual-cohesion' },
  { unit: 9, title: 'Poetry and Sound', topic: 'poetry', grammar: 'figurative-language' },
  { unit: 10, title: 'Essay Writing as Art', topic: 'academic-writing', grammar: 'nominalisation-academic' },
  { unit: 11, title: 'Literary Criticism', topic: 'literary-criticism', grammar: 'reporting-verbs-evaluation' },
  { unit: 12, title: 'Module 2 Review: Literature and Writing', topic: 'review', grammar: 'mixed-review-m2' },
  { unit: 13, title: 'The Scientific Method', topic: 'science', grammar: 'passive-complex-academic' },
  { unit: 14, title: 'Technology and Society', topic: 'technology', grammar: 'conditionals-speculative' },
  { unit: 15, title: 'The Philosophy of Knowledge', topic: 'epistemology', grammar: 'hedging-academic' },
  { unit: 16, title: 'Scientific Writing', topic: 'scientific-writing', grammar: 'impersonal-constructions' },
  { unit: 17, title: 'Controversial Science', topic: 'science-ethics', grammar: 'concession-contrast' },
  { unit: 18, title: 'Module 3 Review: Science and Knowledge', topic: 'review', grammar: 'mixed-review-m3' },
  { unit: 19, title: 'Power and the State', topic: 'politics', grammar: 'ellipsis-substitution' },
  { unit: 20, title: 'Justice and the Law', topic: 'law', grammar: 'relative-clauses-advanced' },
  { unit: 21, title: 'Media and Democracy', topic: 'media-democracy', grammar: 'discourse-markers-advanced' },
  { unit: 22, title: 'Human Rights', topic: 'human-rights', grammar: 'complex-inversion' },
  { unit: 23, title: 'Social Movements', topic: 'social-movements', grammar: 'nominalization-social' },
  { unit: 24, title: 'Module 4 Review: Society and Power', topic: 'review', grammar: 'mixed-review-m4' },
  { unit: 25, title: 'What is Art?', topic: 'art-theory', grammar: 'cleft-emphasis' },
  { unit: 26, title: 'Music and Culture', topic: 'music', grammar: 'participle-clauses-advanced' },
  { unit: 27, title: 'Film as Language', topic: 'film', grammar: 'indirect-speech-advanced' },
  { unit: 28, title: 'The Creative Process', topic: 'creativity', grammar: 'subjunctive-formal' },
  { unit: 29, title: 'Art and Ethics', topic: 'art-ethics', grammar: 'mixed-conditionals-advanced' },
  { unit: 30, title: 'Module 5 Review: Arts and Aesthetics', topic: 'review', grammar: 'mixed-review-m5' },
  { unit: 31, title: 'Consciousness and Identity', topic: 'consciousness', grammar: 'complex-noun-phrases' },
  { unit: 32, title: 'Free Will and Determinism', topic: 'free-will', grammar: 'modal-perfect-advanced' },
  { unit: 33, title: 'The Self in Society', topic: 'social-identity', grammar: 'fronting-advanced' },
  { unit: 34, title: 'Memory and Experience', topic: 'memory', grammar: 'concessive-clauses' },
  { unit: 35, title: 'Emotion and Reason', topic: 'emotion-reason', grammar: 'comparative-structures-advanced' },
  { unit: 36, title: 'Module 6 Review: Mind and Philosophy', topic: 'review', grammar: 'mixed-review-m6' },
  { unit: 37, title: 'Economic Systems', topic: 'economics', grammar: 'passive-reporting-advanced' },
  { unit: 38, title: 'Law and Governance', topic: 'governance', grammar: 'complex-conditionals' },
  { unit: 39, title: 'Political Theory', topic: 'political-theory', grammar: 'abstract-nominalization' },
  { unit: 40, title: 'Global Finance', topic: 'finance', grammar: 'inversion-emphasis' },
  { unit: 41, title: 'The Ethics of Power', topic: 'power-ethics', grammar: 'advanced-cohesion' },
  { unit: 42, title: 'Module 7 Review: Economics and Law', topic: 'review', grammar: 'mixed-review-m7' },
  { unit: 43, title: 'Climate Change', topic: 'climate', grammar: 'prediction-structures' },
  { unit: 44, title: 'Globalisation', topic: 'globalisation', grammar: 'adverbial-clauses-advanced' },
  { unit: 45, title: 'Technology and the Future', topic: 'future-tech', grammar: 'future-perfect-advanced' },
  { unit: 46, title: 'Inequality and Development', topic: 'inequality', grammar: 'concession-complex' },
  { unit: 47, title: 'Geopolitics', topic: 'geopolitics', grammar: 'reporting-structures-advanced' },
  { unit: 48, title: 'Module 8 Review: Global Challenges', topic: 'review', grammar: 'mixed-review-m8' },
  { unit: 49, title: 'Intercultural Communication', topic: 'intercultural', grammar: 'register-academic-advanced' },
  { unit: 50, title: 'Language and Culture', topic: 'language-culture', grammar: 'discourse-analysis' },
  { unit: 51, title: 'Migration and Identity', topic: 'migration', grammar: 'complex-passive-advanced' },
  { unit: 52, title: 'Diversity and Inclusion', topic: 'diversity', grammar: 'hedging-concession' },
  { unit: 53, title: 'Cross-Cultural Ethics', topic: 'cross-cultural-ethics', grammar: 'complex-argument-structures' },
  { unit: 54, title: 'Module 9 Review: Intercultural Diversity', topic: 'review', grammar: 'mixed-review-m9' },
  { unit: 55, title: 'C2 Writing Mastery', topic: 'writing-mastery', grammar: 'advanced-writing-structures' },
  { unit: 56, title: 'C2 Speaking Mastery', topic: 'speaking-mastery', grammar: 'advanced-speaking-structures' },
  { unit: 57, title: 'Exam Strategy and Techniques', topic: 'exam-strategy', grammar: 'exam-language' },
  { unit: 58, title: 'Use of English: Advanced Practice', topic: 'use-of-english', grammar: 'use-of-english-c2' },
  { unit: 59, title: 'Integrated Skills Practice', topic: 'integrated-skills', grammar: 'integrated-c2' },
  { unit: 60, title: 'Final Mastery Review', topic: 'mastery-review', grammar: 'mixed-review-final' },
];

function escapeStr(s) {
  return s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

/**
 * Parse a C2 unit file and extract 6 blocks with their questions.
 * Returns an array of 6 blocks: [{ blockTitle, blockType, questions: [...] }]
 */
function parseC2UnitFile(content) {
  const blocks = [];

  // Match each BLOCK export
  const blockRegex = /export const C2_U\d+_BLOCK(\d+): Exercise = ({[\s\S]*?^};)/gm;
  let match;

  while ((match = blockRegex.exec(content)) !== null) {
    const blockNum = parseInt(match[1]);
    const blockBody = match[2];

    // Extract block title
    const titleMatch = blockBody.match(/"title":\s*"([^"]+)"/);
    const blockTitle = titleMatch ? titleMatch[1] : `Block ${blockNum}`;

    // Extract block type
    const typeMatch = blockBody.match(/"type":\s*"([^"]+)"/);
    const blockType = typeMatch ? typeMatch[1] : 'grammar';

    // Extract questions array
    const questionsMatch = blockBody.match(/"questions":\s*\[([\s\S]*?)\]\s*\n\s*}/);
    if (!questionsMatch) {
      blocks.push({ blockNum, blockTitle, blockType, questions: [] });
      continue;
    }

    const questionsText = questionsMatch[1];
    const questions = parseQuestions(questionsText);
    blocks.push({ blockNum, blockTitle, blockType, questions });
  }

  return blocks;
}

function parseQuestions(questionsText) {
  const questions = [];
  // Split by question objects - find each { ... } at the top level
  let depth = 0;
  let start = -1;

  for (let i = 0; i < questionsText.length; i++) {
    if (questionsText[i] === '{') {
      if (depth === 0) start = i;
      depth++;
    } else if (questionsText[i] === '}') {
      depth--;
      if (depth === 0 && start !== -1) {
        const qText = questionsText.slice(start, i + 1);
        const q = parseQuestion(qText);
        if (q) questions.push(q);
        start = -1;
      }
    }
  }
  return questions;
}

function extractStringField(text, field) {
  // Match "field": "value" allowing multiline values with escaped quotes
  const regex = new RegExp(`"${field}":\\s*"((?:[^"\\\\]|\\\\.)*)"`);
  const m = text.match(regex);
  return m ? m[1].replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/\\\\/g, '\\') : null;
}

function extractArrayField(text, field) {
  const regex = new RegExp(`"${field}":\\s*\\[([\\s\\S]*?)\\]`);
  const m = text.match(regex);
  if (!m) return null;
  const items = [];
  const itemRegex = /"((?:[^"\\]|\\.)*)"/g;
  let itemMatch;
  while ((itemMatch = itemRegex.exec(m[1])) !== null) {
    items.push(itemMatch[1].replace(/\\"/g, '"'));
  }
  return items;
}

function extractNumberField(text, field) {
  const regex = new RegExp(`"${field}":\\s*(\\d+)`);
  const m = text.match(regex);
  return m ? parseInt(m[1]) : null;
}

function parseQuestion(qText) {
  const id = extractStringField(qText, 'id');
  const type = extractStringField(qText, 'type');
  const question = extractStringField(qText, 'question');
  const correctAnswer = extractStringField(qText, 'correctAnswer');
  const explanation = extractStringField(qText, 'explanation');
  const keyWord = extractStringField(qText, 'keyWord');
  const sentence = extractStringField(qText, 'sentence');
  const startOfAnswer = extractStringField(qText, 'startOfAnswer');
  const text = extractStringField(qText, 'text');
  const options = extractArrayField(qText, 'options');
  const points = extractNumberField(qText, 'points');

  if (!id) return null;

  return { id, type, question, correctAnswer, explanation, keyWord, sentence, startOfAnswer, text, options, points };
}

function getInstructions(type) {
  const map = {
    'key-word-transformation': 'Complete the second sentence using the key word so that it has a similar meaning to the first sentence. Use between three and eight words.',
    'open-cloze': 'Read the text below and think of the word which best fits each gap.',
    'multiple-choice': 'Choose the best option to complete each sentence.',
    'multiple-choice-cloze': 'Read the text below and decide which word best fits each space.',
    'gapped-text': 'Read the text and fill in the gaps.',
    'reading-comprehension': 'Read the text and answer the questions.',
    'listening-comprehension': 'Listen and answer the questions.',
    'writing-analysis': 'Read the question and choose the best response or approach.',
    'speaking-analysis': 'Read the scenario and choose the most appropriate response.',
    'paraphrasing': 'Rewrite the sentence so that it means the same, beginning with the words given.',
    'sentence-completion': 'Complete the sentences with the appropriate words.',
    'collocation-matching': 'Match the words to form correct collocations.',
  };
  return map[type] || 'Complete the exercise.';
}

function generateLessonFile(unitNum, lessonInfo, block, curriculum) {
  const { num: lessonNum, label, topicName } = lessonInfo;
  const varName = `UNIT_${unitNum}_LESSON_${lessonNum}_${lessonInfo.key}`;
  const topic = curriculum.topic;

  const exercises = block.questions.map((q, idx) => {
    const exId = `c2-u${unitNum}-l${lessonNum}-${idx + 1}`;
    const qType = q.type || 'multiple-choice';
    const instructions = getInstructions(qType);

    const qObj = {
      question: q.question || q.sentence || '',
      correctAnswer: q.correctAnswer || '',
      explanation: q.explanation || '',
      ...(q.options ? { options: q.options } : {}),
      ...(q.keyWord ? { keyWord: q.keyWord } : {}),
      ...(q.startOfAnswer ? { startOfAnswer: q.startOfAnswer } : {}),
      ...(q.sentence ? { sentence: q.sentence } : {}),
    };

    const qLine = JSON.stringify(qObj);

    return `  {
    id: '${exId}',
    type: '${qType}',
    level: 'C2',
    topic: '${topic}',
    topicName: '${topicName}',
    difficulty: 'hard',
    content: {
      title: '${escapeStr(block.blockTitle)}',
      instructions: '${escapeStr(instructions)}',
      questions: [${qLine}],
    },
  }`;
  });

  return `/**
 * Unit ${unitNum} C2 — Lesson ${lessonNum}: ${label} (${curriculum.title})
 * ${block.questions.length} exercises
 */

import { Exercise } from '@/lib/exercise-generator';

export const ${varName}: Exercise[] = [
${exercises.join(',\n')}
];
`;
}

function generateLessonsIndex(unitNum, blocks) {
  const imports = LESSON_NAMES.map((l) => {
    const varName = `UNIT_${unitNum}_LESSON_${l.num}_${l.key}`;
    const file = `./unit-${unitNum}-lesson-${l.num}-${l.file}`;
    return `import { ${varName} } from '${file}';`;
  }).join('\n');

  const lessonsObj = LESSON_NAMES.map((l) => {
    const varName = `UNIT_${unitNum}_LESSON_${l.num}_${l.key}`;
    return `  ${l.file.replace(/-/g, '_')}: ${varName},`;
  }).join('\n');

  const lessonsArr = LESSON_NAMES.map((l) => {
    const varName = `UNIT_${unitNum}_LESSON_${l.num}_${l.key}`;
    return `  ${varName},`;
  }).join('\n');

  return `/**
 * Índice de las 6 lecciones de la Unidad ${unitNum} (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
${imports}

export const UNIT_${unitNum}_LESSONS = {
${lessonsObj}
} as const;

export const UNIT_${unitNum}_ALL_LESSONS: Exercise[][] = [
${lessonsArr}
];

export const UNIT_${unitNum}_ALL_EXERCISES: Exercise[] = UNIT_${unitNum}_ALL_LESSONS.flat();
`;
}

function generateUnitFile(unitNum, curriculum) {
  return `/**
 * C2 Unit ${unitNum} — ${curriculum.title}
 * Module ${Math.ceil(unitNum / 6)}: Grammar: ${curriculum.grammar}
 */

import { UNIT_${unitNum}_ALL_EXERCISES } from './unit-${unitNum}-lessons-index';

export const UNIT_TITLE = '${escapeStr(curriculum.title)}';

export const UNIT_${unitNum}_EXERCISES = UNIT_${unitNum}_ALL_EXERCISES;
`;
}

function generateIndex(totalUnits) {
  const exports = [];
  for (let n = 1; n <= totalUnits; n++) {
    exports.push(`export { UNIT_${n}_EXERCISES, UNIT_TITLE as UNIT_${n}_TITLE } from './unit-${n}';`);
  }
  return `// C2 Course — index of all units\n${exports.join('\n')}\n`;
}

// Main
fs.mkdirSync(DEST_DIR, { recursive: true });

let successCount = 0;
let errorCount = 0;

for (let unitNum = 1; unitNum <= 60; unitNum++) {
  const srcFile = path.join(SRC_DIR, `unit-${unitNum}.ts`);
  if (!fs.existsSync(srcFile)) {
    console.warn(`⚠️  Missing: unit-${unitNum}.ts`);
    errorCount++;
    continue;
  }

  const content = fs.readFileSync(srcFile, 'utf8');
  const blocks = parseC2UnitFile(content);
  const curriculum = CURRICULUM[unitNum - 1];

  if (blocks.length !== 6) {
    console.warn(`⚠️  Unit ${unitNum}: expected 6 blocks, found ${blocks.length}`);
  }

  // Pad to 6 blocks if needed
  while (blocks.length < 6) {
    const n = blocks.length + 1;
    blocks.push({ blockNum: n, blockTitle: `Block ${n}`, blockType: 'grammar', questions: [] });
  }

  // Generate 6 lesson files
  for (let i = 0; i < 6; i++) {
    const lessonInfo = LESSON_NAMES[i];
    const lessonContent = generateLessonFile(unitNum, lessonInfo, blocks[i], curriculum);
    const lessonFile = path.join(DEST_DIR, `unit-${unitNum}-lesson-${lessonInfo.num}-${lessonInfo.file}.ts`);
    fs.writeFileSync(lessonFile, lessonContent, 'utf8');
  }

  // Generate lessons-index
  const indexContent = generateLessonsIndex(unitNum, blocks);
  fs.writeFileSync(path.join(DEST_DIR, `unit-${unitNum}-lessons-index.ts`), indexContent, 'utf8');

  // Generate unit file
  const unitContent = generateUnitFile(unitNum, curriculum);
  fs.writeFileSync(path.join(DEST_DIR, `unit-${unitNum}.ts`), unitContent, 'utf8');

  successCount++;
  if (unitNum % 10 === 0) process.stdout.write(`✓ Units 1–${unitNum} done\n`);
}

// Generate index
fs.writeFileSync(path.join(DEST_DIR, 'index.ts'), generateIndex(60), 'utf8');

console.log(`\n✅ Done: ${successCount} units converted, ${errorCount} errors`);
console.log(`📁 Output: ${DEST_DIR}`);
