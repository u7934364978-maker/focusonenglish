// ============================================
// GENERADOR DE EJERCICIOS COMPLETAMENTE ALEATORIO
// ============================================

import { CEFRLevel, getRandomTopicForLevel } from './topics-data';

export type ExerciseCategory = 
  | 'grammar'
  | 'vocabulary'
  | 'reading'
  | 'writing'
  | 'listening'
  | 'speaking'
  | 'pronunciation'
  | 'exam-practice';

export type ExerciseType = 
  // Grammar (6 tipos)
  | 'multiple-choice'
  | 'fill-in-blanks'
  | 'word-formation'
  | 'sentence-building'
  | 'key-word-transformation'
  | 'multiple-choice-cloze'
  // Vocabulary (4 tipos)
  | 'vocabulary-matching'
  | 'vocabulary-multiple-choice'
  | 'vocabulary-context'
  | 'vocabulary-images'
  // Reading (4 tipos)
  | 'reading-comprehension'
  | 'reading-true-false'
  | 'reading-matching'
  | 'reading-ordering'
  // Writing (4 tipos)
  | 'guided-writing'
  | 'writing-analysis'
  | 'sentence-correction'
  | 'paragraph-writing'
  // Listening (4 tipos)
  | 'listening-comprehension'
  | 'listening-multiple-choice'
  | 'listening-dictation'
  | 'listening-matching'
  // Speaking (4 tipos)
  | 'pronunciation-practice'
  | 'oral-response'
  | 'expression-analysis'
  | 'dialogue-practice'
  // Pronunciation (4 tipos)
  | 'minimal-pairs'
  | 'pronunciation-feedback'
  | 'intonation-practice'
  | 'word-stress'
  // Exam Practice (4 tipos)
  | 'reading-writing-exam'
  | 'listening-speaking-exam'
  | 'grammar-vocabulary-exam'
  | 'full-mock-exam';

// Mapeo de categorías a tipos de ejercicios disponibles
const CATEGORY_EXERCISE_TYPES: Record<ExerciseCategory, ExerciseType[]> = {
  grammar: [
    'multiple-choice',
    'fill-in-blanks',
    'word-formation',
    'sentence-building',
    'key-word-transformation',
    'multiple-choice-cloze'
  ],
  vocabulary: [
    'vocabulary-matching',
    'vocabulary-multiple-choice',
    'vocabulary-context',
    'vocabulary-images'
  ],
  reading: [
    'reading-comprehension',
    'reading-true-false',
    'reading-matching',
    'reading-ordering'
  ],
  writing: [
    'guided-writing',
    'writing-analysis',
    'sentence-correction',
    'paragraph-writing'
  ],
  listening: [
    'listening-comprehension',
    'listening-multiple-choice',
    'listening-dictation',
    'listening-matching'
  ],
  speaking: [
    'pronunciation-practice',
    'oral-response',
    'expression-analysis',
    'dialogue-practice'
  ],
  pronunciation: [
    'minimal-pairs',
    'pronunciation-feedback',
    'intonation-practice',
    'word-stress'
  ],
  'exam-practice': [
    'reading-writing-exam',
    'listening-speaking-exam',
    'grammar-vocabulary-exam',
    'full-mock-exam'
  ]
};

// Todas las categorías disponibles
const ALL_CATEGORIES: ExerciseCategory[] = [
  'grammar',
  'vocabulary',
  'reading',
  'writing',
  'listening',
  'speaking',
  'pronunciation',
  'exam-practice'
];

export interface RandomExerciseConfig {
  level: CEFRLevel;
  category: ExerciseCategory;
  exerciseType: ExerciseType;
  topic: string;
  topicName: string;
  topicKeywords: string[];
}

/**
 * Genera una configuración de ejercicio completamente aleatoria
 */
export function generateRandomExerciseConfig(level: CEFRLevel): RandomExerciseConfig {
  // 1. Elegir categoría aleatoria
  const category = getRandomCategory();
  
  // 2. Elegir tipo de ejercicio aleatorio de esa categoría
  const exerciseType = getRandomExerciseType(category);
  
  // 3. Elegir tema aleatorio para el nivel
  const topic = getRandomTopicForLevel(level);
  
  return {
    level,
    category,
    exerciseType,
    topic: topic.id,
    topicName: topic.name,
    topicKeywords: topic.keywords
  };
}

/**
 * Obtener categoría aleatoria
 */
function getRandomCategory(): ExerciseCategory {
  const randomIndex = Math.floor(Math.random() * ALL_CATEGORIES.length);
  return ALL_CATEGORIES[randomIndex];
}

/**
 * Obtener tipo de ejercicio aleatorio de una categoría
 */
function getRandomExerciseType(category: ExerciseCategory): ExerciseType {
  const types = CATEGORY_EXERCISE_TYPES[category];
  const randomIndex = Math.floor(Math.random() * types.length);
  return types[randomIndex];
}

/**
 * Obtener nombre legible de la categoría
 */
export function getCategoryDisplayName(category: ExerciseCategory): string {
  const names: Record<ExerciseCategory, string> = {
    grammar: 'Grammar',
    vocabulary: 'Vocabulary',
    reading: 'Reading',
    writing: 'Writing',
    listening: 'Listening',
    speaking: 'Speaking',
    pronunciation: 'Pronunciation',
    'exam-practice': 'Exam Practice'
  };
  return names[category];
}

/**
 * Obtener nombre legible del tipo de ejercicio
 */
export function getExerciseTypeDisplayName(type: ExerciseType): string {
  const names: Record<ExerciseType, string> = {
    // Grammar
    'multiple-choice': 'Multiple Choice',
    'fill-in-blanks': 'Fill in the Blanks',
    'word-formation': 'Word Formation',
    'sentence-building': 'Sentence Building',
    'key-word-transformation': 'Key Word Transformation',
    'multiple-choice-cloze': 'Multiple Choice Cloze',
    // Vocabulary
    'vocabulary-matching': 'Vocabulary Matching',
    'vocabulary-multiple-choice': 'Vocabulary Quiz',
    'vocabulary-context': 'Vocabulary in Context',
    'vocabulary-images': 'Vocabulary with Images',
    // Reading
    'reading-comprehension': 'Reading Comprehension',
    'reading-true-false': 'True or False',
    'reading-matching': 'Matching Paragraphs',
    'reading-ordering': 'Paragraph Ordering',
    // Writing
    'guided-writing': 'Guided Writing',
    'writing-analysis': 'Writing Analysis',
    'sentence-correction': 'Sentence Correction',
    'paragraph-writing': 'Paragraph Writing',
    // Listening
    'listening-comprehension': 'Listening Comprehension',
    'listening-multiple-choice': 'Listening Quiz',
    'listening-dictation': 'Dictation',
    'listening-matching': 'Audio Matching',
    // Speaking
    'pronunciation-practice': 'Pronunciation Practice',
    'oral-response': 'Oral Response',
    'expression-analysis': 'Expression Analysis',
    'dialogue-practice': 'Dialogue Practice',
    // Pronunciation
    'minimal-pairs': 'Minimal Pairs',
    'pronunciation-feedback': 'Pronunciation Feedback',
    'intonation-practice': 'Intonation Practice',
    'word-stress': 'Word Stress',
    // Exam Practice
    'reading-writing-exam': 'Reading & Writing Exam',
    'listening-speaking-exam': 'Listening & Speaking Exam',
    'grammar-vocabulary-exam': 'Grammar & Vocabulary Exam',
    'full-mock-exam': 'Full Mock Exam'
  };
  return names[type] || type;
}

/**
 * Obtener emoji de la categoría
 */
export function getCategoryEmoji(category: ExerciseCategory): string {
  const emojis: Record<ExerciseCategory, string> = {
    grammar: '📝',
    vocabulary: '📚',
    reading: '📖',
    writing: '✍️',
    listening: '🎧',
    speaking: '🗣️',
    pronunciation: '🔊',
    'exam-practice': '🎓'
  };
  return emojis[category];
}
