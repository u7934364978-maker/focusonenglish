// Curso A1 - Sistema de Generación de Ejercicios con IA
// Los ejercicios se generan dinámicamente basados en categoría, tipo y dificultad

import { A1_MODULE_2_LESSON_3, type Lesson } from './a1-module2-lesson3';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export type ExerciseCategory = 
  | 'all'
  | 'grammar'
  | 'vocabulary'
  | 'reading'
  | 'writing'
  | 'listening'
  | 'speaking'
  | 'pronunciation'
  | 'exam-practice';

// ============================================
// TIPOS DE EJERCICIOS POR CATEGORÍA
// ============================================

export interface ExerciseType {
  id: string;
  name: string;
  description: string;
  category: ExerciseCategory[];
  estimatedDuration: number; // minutos
  icon?: string;
  aiPromptTemplate?: string; // Template para generar con IA
}

// ============================================
// GRAMÁTICA - GRAMMAR EXERCISES
// ============================================

export const GRAMMAR_EXERCISE_TYPES: ExerciseType[] = [
  {
    id: 'multiple-choice',
    name: 'Opción Múltiple',
    description: 'Elige la respuesta correcta entre varias opciones',
    category: ['grammar', 'all'],
    estimatedDuration: 5,
    icon: '✓',
    aiPromptTemplate: 'Generate A1 level multiple choice grammar questions about {{topic}}'
  },
  {
    id: 'fill-in-blanks',
    name: 'Completar Espacios',
    description: 'Completa las oraciones con las palabras correctas',
    category: ['grammar', 'all'],
    estimatedDuration: 7,
    icon: '___',
    aiPromptTemplate: 'Generate A1 level fill-in-the-blank grammar exercises about {{topic}}'
  },
  {
    id: 'word-formation',
    name: 'Formación de Palabras',
    description: 'Transforma palabras según el contexto',
    category: ['grammar', 'vocabulary', 'all'],
    estimatedDuration: 8,
    icon: '📝',
    aiPromptTemplate: 'Generate A1 level word formation exercises focusing on {{topic}}'
  },
  {
    id: 'sentence-building',
    name: 'Constructor de Oraciones',
    description: 'Ordena las palabras para formar oraciones correctas',
    category: ['grammar', 'all'],
    estimatedDuration: 8,
    icon: '🔨',
    aiPromptTemplate: 'Generate A1 level sentence building exercises about {{topic}}'
  },
  {
    id: 'key-word-transformation',
    name: 'Transformación con Palabra Clave',
    description: 'Reescribe oraciones usando una palabra clave dada',
    category: ['grammar', 'all'],
    estimatedDuration: 10,
    icon: '🔑',
    aiPromptTemplate: 'Generate A1 level key word transformation exercises about {{topic}}'
  },
  {
    id: 'multiple-choice-cloze',
    name: 'Cloze de Opción Múltiple',
    description: 'Elige las palabras correctas para completar un texto',
    category: ['grammar', 'reading', 'all'],
    estimatedDuration: 10,
    icon: '📄',
    aiPromptTemplate: 'Generate A1 level multiple choice cloze text about {{topic}}'
  }
];

// ============================================
// VOCABULARIO - VOCABULARY EXERCISES
// ============================================

export const VOCABULARY_EXERCISE_TYPES: ExerciseType[] = [
  {
    id: 'vocabulary-matching',
    name: 'Emparejar Vocabulario',
    description: 'Conecta palabras con sus definiciones o traducciones',
    category: ['vocabulary', 'all'],
    estimatedDuration: 5,
    icon: '🔗',
    aiPromptTemplate: 'Generate A1 level vocabulary matching exercise about {{topic}}'
  },
  {
    id: 'vocabulary-multiple-choice',
    name: 'Vocabulario - Opción Múltiple',
    description: 'Elige el significado correcto de palabras',
    category: ['vocabulary', 'all'],
    estimatedDuration: 5,
    icon: '📚',
    aiPromptTemplate: 'Generate A1 level vocabulary multiple choice questions about {{topic}}'
  },
  {
    id: 'vocabulary-context',
    name: 'Vocabulario en Contexto',
    description: 'Completa oraciones con el vocabulario apropiado',
    category: ['vocabulary', 'all'],
    estimatedDuration: 7,
    icon: '💬',
    aiPromptTemplate: 'Generate A1 level vocabulary in context exercises about {{topic}}'
  },
  {
    id: 'vocabulary-images',
    name: 'Vocabulario con Imágenes',
    description: 'Identifica vocabulario mediante imágenes',
    category: ['vocabulary', 'all'],
    estimatedDuration: 6,
    icon: '🖼️',
    aiPromptTemplate: 'Generate A1 level vocabulary exercise with image descriptions about {{topic}}'
  }
];

// ============================================
// LECTURA - READING EXERCISES
// ============================================

export const READING_EXERCISE_TYPES: ExerciseType[] = [
  {
    id: 'reading-comprehension',
    name: 'Comprensión Lectora',
    description: 'Lee un texto y responde preguntas',
    category: ['reading', 'all'],
    estimatedDuration: 15,
    icon: '📖',
    aiPromptTemplate: 'Generate A1 level reading comprehension text with questions about {{topic}}'
  },
  {
    id: 'reading-true-false',
    name: 'Verdadero o Falso',
    description: 'Decide si las afirmaciones sobre el texto son verdaderas o falsas',
    category: ['reading', 'all'],
    estimatedDuration: 10,
    icon: '✓✗',
    aiPromptTemplate: 'Generate A1 level reading text with true/false statements about {{topic}}'
  },
  {
    id: 'reading-matching',
    name: 'Emparejar Párrafos',
    description: 'Conecta títulos o ideas con párrafos',
    category: ['reading', 'all'],
    estimatedDuration: 12,
    icon: '🔗',
    aiPromptTemplate: 'Generate A1 level reading matching exercise about {{topic}}'
  },
  {
    id: 'reading-order',
    name: 'Ordenar Párrafos',
    description: 'Organiza los párrafos en el orden correcto',
    category: ['reading', 'all'],
    estimatedDuration: 10,
    icon: '📋',
    aiPromptTemplate: 'Generate A1 level paragraph ordering exercise about {{topic}}'
  }
];

// ============================================
// ESCRITURA - WRITING EXERCISES
// ============================================

export const WRITING_EXERCISE_TYPES: ExerciseType[] = [
  {
    id: 'guided-writing',
    name: 'Escritura Guiada',
    description: 'Escribe siguiendo instrucciones específicas',
    category: ['writing', 'all'],
    estimatedDuration: 15,
    icon: '✍️',
    aiPromptTemplate: 'Generate A1 level guided writing exercise about {{topic}}'
  },
  {
    id: 'writing-analysis',
    name: 'Análisis de Escritura',
    description: 'Analiza y elige las mejores opciones de escritura',
    category: ['writing', 'all'],
    estimatedDuration: 10,
    icon: '🔍',
    aiPromptTemplate: 'Generate A1 level writing analysis exercise about {{topic}}'
  },
  {
    id: 'sentence-correction',
    name: 'Corrección de Oraciones',
    description: 'Identifica y corrige errores en oraciones',
    category: ['writing', 'grammar', 'all'],
    estimatedDuration: 8,
    icon: '✏️',
    aiPromptTemplate: 'Generate A1 level sentence correction exercise about {{topic}}'
  },
  {
    id: 'paragraph-writing',
    name: 'Escribir Párrafos',
    description: 'Escribe párrafos cortos sobre temas dados',
    category: ['writing', 'all'],
    estimatedDuration: 20,
    icon: '📝',
    aiPromptTemplate: 'Generate A1 level paragraph writing prompt about {{topic}}'
  }
];

// ============================================
// ESCUCHA - LISTENING EXERCISES
// ============================================

export const LISTENING_EXERCISE_TYPES: ExerciseType[] = [
  {
    id: 'listening-comprehension',
    name: 'Comprensión Auditiva',
    description: 'Escucha y responde preguntas',
    category: ['listening', 'all'],
    estimatedDuration: 12,
    icon: '🎧',
    aiPromptTemplate: 'Generate A1 level listening comprehension exercise about {{topic}}'
  },
  {
    id: 'listening-multiple-choice',
    name: 'Escucha - Opción Múltiple',
    description: 'Escucha y elige la respuesta correcta',
    category: ['listening', 'all'],
    estimatedDuration: 10,
    icon: '🔊',
    aiPromptTemplate: 'Generate A1 level listening multiple choice exercise about {{topic}}'
  },
  {
    id: 'listening-fill-blanks',
    name: 'Dictado - Completar Espacios',
    description: 'Escucha y completa las palabras que faltan',
    category: ['listening', 'all'],
    estimatedDuration: 10,
    icon: '👂',
    aiPromptTemplate: 'Generate A1 level listening fill-in-the-blank exercise about {{topic}}'
  },
  {
    id: 'listening-matching',
    name: 'Emparejar Audio',
    description: 'Conecta audios con imágenes o descripciones',
    category: ['listening', 'all'],
    estimatedDuration: 8,
    icon: '🎵',
    aiPromptTemplate: 'Generate A1 level listening matching exercise about {{topic}}'
  }
];

// ============================================
// HABLA - SPEAKING EXERCISES
// ============================================

export const SPEAKING_EXERCISE_TYPES: ExerciseType[] = [
  {
    id: 'pronunciation-practice',
    name: 'Práctica de Pronunciación',
    description: 'Practica pronunciación con feedback de IA',
    category: ['speaking', 'pronunciation', 'all'],
    estimatedDuration: 8,
    icon: '🗣️',
    aiPromptTemplate: 'Generate A1 level pronunciation practice sentences about {{topic}}'
  },
  {
    id: 'speaking-response',
    name: 'Respuesta Oral',
    description: 'Responde preguntas oralmente',
    category: ['speaking', 'all'],
    estimatedDuration: 10,
    icon: '🎤',
    aiPromptTemplate: 'Generate A1 level speaking response prompts about {{topic}}'
  },
  {
    id: 'oral-expression-analysis',
    name: 'Análisis de Expresión Oral',
    description: 'Analiza y elige las mejores opciones de expresión oral',
    category: ['speaking', 'all'],
    estimatedDuration: 8,
    icon: '💭',
    aiPromptTemplate: 'Generate A1 level oral expression analysis about {{topic}}'
  },
  {
    id: 'dialogue-practice',
    name: 'Práctica de Diálogo',
    description: 'Practica conversaciones simuladas',
    category: ['speaking', 'all'],
    estimatedDuration: 12,
    icon: '💬',
    aiPromptTemplate: 'Generate A1 level dialogue practice exercise about {{topic}}'
  }
];

// ============================================
// PRONUNCIACIÓN - PRONUNCIATION EXERCISES
// ============================================

export const PRONUNCIATION_EXERCISE_TYPES: ExerciseType[] = [
  {
    id: 'pronunciation-minimal-pairs',
    name: 'Pares Mínimos',
    description: 'Practica sonidos similares que cambian el significado',
    category: ['pronunciation', 'all'],
    estimatedDuration: 8,
    icon: '🔊',
    aiPromptTemplate: 'Generate A1 level minimal pairs pronunciation exercise'
  },
  {
    id: 'pronunciation-feedback',
    name: 'Pronunciación con Feedback',
    description: 'Practica pronunciación con evaluación de IA',
    category: ['pronunciation', 'speaking', 'all'],
    estimatedDuration: 8,
    icon: '🎯',
    aiPromptTemplate: 'Generate A1 level pronunciation practice with feedback about {{topic}}'
  },
  {
    id: 'pronunciation-intonation',
    name: 'Práctica de Entonación',
    description: 'Practica la entonación en preguntas y afirmaciones',
    category: ['pronunciation', 'all'],
    estimatedDuration: 10,
    icon: '📈',
    aiPromptTemplate: 'Generate A1 level intonation practice exercise'
  },
  {
    id: 'pronunciation-stress',
    name: 'Acentuación de Palabras',
    description: 'Practica dónde poner el énfasis en las palabras',
    category: ['pronunciation', 'all'],
    estimatedDuration: 8,
    icon: '⚡',
    aiPromptTemplate: 'Generate A1 level word stress practice exercise'
  }
];

// ============================================
// PRÁCTICA DE EXAMEN - EXAM PRACTICE
// ============================================

export const EXAM_PRACTICE_TYPES: ExerciseType[] = [
  {
    id: 'exam-reading-writing',
    name: 'Examen: Reading & Writing',
    description: 'Práctica completa de lectura y escritura',
    category: ['exam-practice', 'all'],
    estimatedDuration: 30,
    icon: '📋',
    aiPromptTemplate: 'Generate A1 level exam practice for reading and writing'
  },
  {
    id: 'exam-listening-speaking',
    name: 'Examen: Listening & Speaking',
    description: 'Práctica completa de escucha y habla',
    category: ['exam-practice', 'all'],
    estimatedDuration: 25,
    icon: '🎧',
    aiPromptTemplate: 'Generate A1 level exam practice for listening and speaking'
  },
  {
    id: 'exam-grammar-vocabulary',
    name: 'Examen: Grammar & Vocabulary',
    description: 'Práctica completa de gramática y vocabulario',
    category: ['exam-practice', 'all'],
    estimatedDuration: 20,
    icon: '📚',
    aiPromptTemplate: 'Generate A1 level exam practice for grammar and vocabulary'
  },
  {
    id: 'exam-full-mock',
    name: 'Examen Completo Simulado',
    description: 'Simulación de examen completo nivel A1',
    category: ['exam-practice', 'all'],
    estimatedDuration: 60,
    icon: '🎓',
    aiPromptTemplate: 'Generate complete A1 level mock exam with all sections'
  }
];

// ============================================
// TODOS LOS TIPOS DE EJERCICIOS
// ============================================

export const ALL_EXERCISE_TYPES: ExerciseType[] = [
  ...GRAMMAR_EXERCISE_TYPES,
  ...VOCABULARY_EXERCISE_TYPES,
  ...READING_EXERCISE_TYPES,
  ...WRITING_EXERCISE_TYPES,
  ...LISTENING_EXERCISE_TYPES,
  ...SPEAKING_EXERCISE_TYPES,
  ...PRONUNCIATION_EXERCISE_TYPES,
  ...EXAM_PRACTICE_TYPES
];

// ============================================
// FUNCIONES HELPER PARA FILTRAR EJERCICIOS
// ============================================

export function getExercisesByCategory(category: ExerciseCategory): ExerciseType[] {
  if (category === 'all') {
    return ALL_EXERCISE_TYPES;
  }
  return ALL_EXERCISE_TYPES.filter(ex => ex.category.includes(category));
}

export function getExerciseById(id: string): ExerciseType | undefined {
  return ALL_EXERCISE_TYPES.find(ex => ex.id === id);
}

export function getExercisesByDuration(maxDuration: number): ExerciseType[] {
  return ALL_EXERCISE_TYPES.filter(ex => ex.estimatedDuration <= maxDuration);
}

// ============================================
// CONFIGURACIÓN DEL CURSO A1
// ============================================

export const A1_COURSE_CONFIG = {
  level: 'A1',
  title: 'Curso de Inglés A1',
  description: 'Práctica ilimitada de ejercicios adaptados a nivel principiante',
  cefrLevel: 'A1',
  categories: [
    { id: 'all', name: 'All', icon: '📚' },
    { id: 'grammar', name: 'Grammar', icon: '📝' },
    { id: 'vocabulary', name: 'Vocabulary', icon: '💬' },
    { id: 'reading', name: 'Reading', icon: '📖' },
    { id: 'writing', name: 'Writing', icon: '✍️' },
    { id: 'listening', name: 'Listening', icon: '🎧' },
    { id: 'speaking', name: 'Speaking', icon: '🗣️' },
    { id: 'pronunciation', name: 'Pronunciation', icon: '🔊' },
    { id: 'exam-practice', name: 'Exam Practice', icon: '🎓' }
  ],
  difficultyLevels: [
    { id: 'easy', name: 'Easy', description: 'Mix of affirmations and negative forms' },
    { id: 'medium', name: 'Medium', description: 'Mix of derivations and negative forms' },
    { id: 'hard', name: 'Hard', description: 'Complex structures and mixed forms' }
  ],
  features: [
    'Exercises generated instantly',
    'Always new and different content',
    'Adapted to your A1 level and preferences',
    'Immediate feedback and detailed explanations'
  ]
};

// ============================================
// TEMAS SUGERIDOS PARA A1 (Opcionales)
// ============================================

export const A1_SUGGESTED_TOPICS = [
  'General topic',
  'Personal information',
  'Family and friends',
  'Daily routines',
  'Food and drink',
  'Shopping',
  'Numbers and time',
  'Places in town',
  'Travel and transport',
  'Weather',
  'Hobbies and free time',
  'Work and jobs',
  'Home and rooms',
  'Clothes',
  'Health',
  'Describing people',
  'Present simple',
  'Past simple',
  'Future with going to',
  'Present continuous'
];

// ============================================
// GRAMÁTICA A1 - CONTENIDO PRINCIPAL
// ============================================

export const A1_GRAMMAR_TOPICS = [
  {
    id: 'verb-to-be',
    name: 'Verb "To Be"',
    subtopics: ['Affirmative', 'Negative', 'Questions', 'Short answers']
  },
  {
    id: 'present-simple',
    name: 'Present Simple',
    subtopics: ['Affirmative', 'Negative', 'Questions', 'Third person -s']
  },
  {
    id: 'present-continuous',
    name: 'Present Continuous',
    subtopics: ['Formation', 'Usage', 'vs Present Simple']
  },
  {
    id: 'past-simple',
    name: 'Past Simple',
    subtopics: ['Regular verbs', 'Irregular verbs', 'Negative', 'Questions']
  },
  {
    id: 'future-going-to',
    name: 'Future with Going To',
    subtopics: ['Plans', 'Predictions', 'Intentions']
  },
  {
    id: 'can-cant',
    name: 'Can/Can\'t',
    subtopics: ['Ability', 'Permission', 'Requests']
  },
  {
    id: 'articles',
    name: 'Articles (a/an/the)',
    subtopics: ['Indefinite articles', 'Definite article', 'No article']
  },
  {
    id: 'pronouns',
    name: 'Pronouns',
    subtopics: ['Subject pronouns', 'Object pronouns', 'Possessive adjectives']
  },
  {
    id: 'there-is-are',
    name: 'There is/There are',
    subtopics: ['Affirmative', 'Negative', 'Questions']
  },
  {
    id: 'prepositions',
    name: 'Prepositions',
    subtopics: ['Time (at/in/on)', 'Place (at/in/on)', 'Movement']
  },
  {
    id: 'question-words',
    name: 'Question Words',
    subtopics: ['What', 'Where', 'When', 'Who', 'Why', 'How']
  },
  {
    id: 'adjectives',
    name: 'Adjectives',
    subtopics: ['Descriptive', 'Possessive', 'Demonstrative', 'Comparatives']
  },
  {
    id: 'adverbs',
    name: 'Adverbs',
    subtopics: ['Frequency', 'Manner', 'Time', 'Place']
  }
];

// ============================================
// VOCABULARIO A1 - CATEGORÍAS PRINCIPALES
// ============================================

export const A1_VOCABULARY_CATEGORIES = [
  { id: 'numbers', name: 'Numbers', items: ['1-100', 'Ordinal numbers', 'Phone numbers'] },
  { id: 'time', name: 'Time', items: ['Clock time', 'Days', 'Months', 'Seasons'] },
  { id: 'family', name: 'Family', items: ['Family members', 'Relationships'] },
  { id: 'jobs', name: 'Jobs', items: ['Professions', 'Workplaces'] },
  { id: 'food', name: 'Food and Drink', items: ['Meals', 'Fruits', 'Vegetables', 'Drinks'] },
  { id: 'places', name: 'Places', items: ['Town', 'Home', 'School', 'Shop'] },
  { id: 'transport', name: 'Transport', items: ['Vehicles', 'Travel vocabulary'] },
  { id: 'clothes', name: 'Clothes', items: ['Clothing items', 'Colors', 'Accessories'] },
  { id: 'body', name: 'Body', items: ['Body parts', 'Feelings', 'Health'] },
  { id: 'hobbies', name: 'Hobbies', items: ['Sports', 'Free time activities'] },
  { id: 'countries', name: 'Countries', items: ['Countries', 'Nationalities', 'Languages'] },
  { id: 'weather', name: 'Weather', items: ['Weather conditions', 'Temperature'] }
];

// ============================================
// LECCIONES ESTRUCTURADAS - MÓDULO 2
// ============================================

export const A1_MODULE_2_LESSONS: Lesson[] = [
  A1_MODULE_2_LESSON_3
];

export default A1_COURSE_CONFIG;
