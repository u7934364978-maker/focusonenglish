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
  | 'speaking';

export type ExerciseType = 
  // Grammar
  | 'multiple-choice'
  | 'fill-blank'
  | 'sentence-transformation'
  | 'error-correction'
  // Vocabulary
  | 'vocabulary-matching'
  | 'vocabulary-multiple-choice'
  | 'vocabulary-fill-blank'
  // Reading
  | 'reading-comprehension'
  | 'reading-true-false'
  | 'reading-multiple-choice'
  // Writing
  | 'guided-writing'
  | 'sentence-writing'
  // Listening
  | 'listening-comprehension'
  | 'listening-multiple-choice'
  // Speaking
  | 'pronunciation-practice'
  | 'speaking-prompt';

// Mapeo de categorías a tipos de ejercicios disponibles
const CATEGORY_EXERCISE_TYPES: Record<ExerciseCategory, ExerciseType[]> = {
  grammar: [
    'multiple-choice',
    'fill-blank',
    'sentence-transformation',
    'error-correction'
  ],
  vocabulary: [
    'vocabulary-matching',
    'vocabulary-multiple-choice',
    'vocabulary-fill-blank'
  ],
  reading: [
    'reading-comprehension',
    'reading-true-false',
    'reading-multiple-choice'
  ],
  writing: [
    'guided-writing',
    'sentence-writing'
  ],
  listening: [
    'listening-comprehension',
    'listening-multiple-choice'
  ],
  speaking: [
    'pronunciation-practice',
    'speaking-prompt'
  ]
};

// Todas las categorías disponibles
const ALL_CATEGORIES: ExerciseCategory[] = [
  'grammar',
  'vocabulary',
  'reading',
  'writing',
  'listening',
  'speaking'
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
    speaking: 'Speaking'
  };
  return names[category];
}

/**
 * Obtener nombre legible del tipo de ejercicio
 */
export function getExerciseTypeDisplayName(type: ExerciseType): string {
  const names: Record<ExerciseType, string> = {
    'multiple-choice': 'Multiple Choice',
    'fill-blank': 'Fill in the Blanks',
    'sentence-transformation': 'Sentence Transformation',
    'error-correction': 'Error Correction',
    'vocabulary-matching': 'Vocabulary Matching',
    'vocabulary-multiple-choice': 'Vocabulary Quiz',
    'vocabulary-fill-blank': 'Complete the Sentence',
    'reading-comprehension': 'Reading Comprehension',
    'reading-true-false': 'True or False',
    'reading-multiple-choice': 'Reading Quiz',
    'guided-writing': 'Guided Writing',
    'sentence-writing': 'Write a Sentence',
    'listening-comprehension': 'Listening Comprehension',
    'listening-multiple-choice': 'Listening Quiz',
    'pronunciation-practice': 'Pronunciation Practice',
    'speaking-prompt': 'Speaking Exercise'
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
    speaking: '🗣️'
  };
  return emojis[category];
}
