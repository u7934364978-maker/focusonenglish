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

// TIPOS VÁLIDOS RECONOCIDOS POR EL API (de exercise-types.ts)
// Solo estos 12 tipos son aceptados por el generador de ejercicios
export type ExerciseType = 
  | 'multiple-choice'
  | 'fill-blank'
  | 'true-false'
  | 'key-word-transformation'
  | 'word-formation'
  | 'multiple-choice-cloze'
  | 'sentence-building'
  | 'reading-comprehension'
  | 'listening-comprehension'
  | 'speaking-analysis'
  | 'writing-analysis'
  | 'pronunciation-practice';

// Mapeo de categorías a tipos de ejercicios disponibles
// SOLO LOS 12 TIPOS VÁLIDOS QUE EL API RECONOCE
const CATEGORY_EXERCISE_TYPES: Record<ExerciseCategory, ExerciseType[]> = {
  grammar: [
    'multiple-choice',          // ✅ MCQ de gramática
    'fill-blank',               // ✅ Completar espacios
    'sentence-building',        // ✅ Construir oraciones
    'true-false',               // ✅ Verdadero/Falso
    'key-word-transformation',  // ✅ Transformación
    'word-formation',           // ✅ Formación de palabras
    'multiple-choice-cloze',    // ✅ Cloze test
  ],
  vocabulary: [
    'multiple-choice',          // ✅ MCQ de vocabulario
    'word-formation',           // ✅ Formación de palabras
    'fill-blank',               // ✅ Completar con vocabulario
    'true-false',               // ✅ Verdadero/Falso
  ],
  reading: [
    'reading-comprehension',    // ✅ Comprensión lectora
    'multiple-choice',          // ✅ MCQ sobre texto
    'true-false',               // ✅ Verdadero/Falso
    'multiple-choice-cloze',    // ✅ Cloze test de lectura
  ],
  writing: [
    'writing-analysis',         // ✅ Análisis de escritura
    'fill-blank',               // ✅ Completar escritura
    'sentence-building',        // ✅ Construir oraciones
  ],
  listening: [
    'listening-comprehension',  // ✅ Comprensión auditiva
    'multiple-choice',          // ✅ MCQ de listening
    'true-false',               // ✅ Verdadero/Falso
    'fill-blank',               // ✅ Completar al escuchar
  ],
  speaking: [
    'speaking-analysis',        // ✅ Análisis de habla
    'pronunciation-practice',   // ✅ Práctica de pronunciación
  ],
  pronunciation: [
    'pronunciation-practice',   // ✅ Práctica de pronunciación
    'speaking-analysis',        // ✅ Análisis de pronunciación
  ],
  'exam-practice': [
    'key-word-transformation',  // ✅ Transformación
    'word-formation',           // ✅ Formación de palabras
    'multiple-choice-cloze',    // ✅ Cloze test
    'reading-comprehension',    // ✅ Comprensión lectora
    'listening-comprehension',  // ✅ Comprensión auditiva
    'multiple-choice',          // ✅ MCQ general
    'fill-blank',               // ✅ Completar espacios
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
    'multiple-choice': 'Multiple Choice',
    'fill-blank': 'Fill in the Blanks',
    'true-false': 'True or False',
    'key-word-transformation': 'Key Word Transformation',
    'word-formation': 'Word Formation',
    'multiple-choice-cloze': 'Multiple Choice Cloze',
    'sentence-building': 'Sentence Building',
    'reading-comprehension': 'Reading Comprehension',
    'listening-comprehension': 'Listening Comprehension',
    'speaking-analysis': 'Speaking Analysis',
    'writing-analysis': 'Writing Analysis',
    'pronunciation-practice': 'Pronunciation Practice'
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
