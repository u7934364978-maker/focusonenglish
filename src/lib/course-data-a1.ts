// Curso A1 Completo - Estructura Basada en CEFR A1 Official
// Replicando la estructura del curso B2 pero adaptado a nivel principiante
// CEFR A1: Usuario Básico - Nivel Breakthrough


// Import detailed exercises
import { A1_M1_L1_ALL_EXERCISES } from './a1-m1-l1-detailed';
import { A1_M1_L2_ALL_EXERCISES } from './a1-m1-l2-detailed';
import { A1_M1_L3_ALL_EXERCISES } from './a1-m1-l3-detailed';
import { A1_M1_L4_ALL_EXERCISES } from './a1-m1-l4-detailed';
import { A1_M1_L5_ALL_EXERCISES } from './a1-m1-l5-detailed';
import { A1_M1_L6_ALL_EXERCISES } from './a1-m1-l6-detailed';
import { A1_M1_L7_ALL_EXERCISES } from './a1-m1-l7-detailed';
import { A1_M2_L1_ALL_EXERCISES } from './a1-m2-l1-detailed';
import { A1_M2_L2_ALL_EXERCISES } from './a1-m2-l2-detailed';
import { A1_M2_L3_ALL_EXERCISES } from './a1-m2-l3-detailed';
import { A1_M3_L1_ALL_EXERCISES } from './a1-m3-l1-detailed';
import { 
  A1_EXP_ADJECTIVES, 
  A1_EXP_ADVERBS, 
  A1_EXP_CONNECTORS, 
  A1_EXP_COMMON_MISTAKES, 
  A1_EXP_POSSESSION, 
  A1_EXP_CAPITALS, 
  A1_EXP_DATES, 
  A1_EXP_TRANSPORT, 
  A1_EXP_PLACE 
} from './a1-expansion-content';

import type { 
  Exercise, 
  Lesson, 
  Module, 
} from './exercise-types';

// ===============================================
// Módulo 1: Fundamentos y Primeros Pasos (Mes 1)
// ===============================================

export const MODULE_1_LESSONS: Lesson[] = [
  {
    id: 'a1-m1-l1',
    title: 'Lección 1: Saludos y el Alfabeto',
    description: 'Learn basic greetings and the English alphabet with active recall techniques',
    duration: 90,
    objectives: ['Learn basic greetings', 'Master the English alphabet'],
    exercises: A1_M1_L7_ALL_EXERCISES as Exercise[]
  },
  {
    id: 'a1-m1-l2',
    title: 'Lección 2: El Verbo To Be y Pronombres',
    description: 'Master the verb "to be" and subject pronouns in present simple',
    duration: 90,
    objectives: ['Master the verb "to be"', 'Learn subject pronouns'],
    exercises: [...(A1_M1_L1_ALL_EXERCISES as Exercise[]), ...(A1_M1_L2_ALL_EXERCISES as Exercise[])]
  },
  {
    id: 'a1-m1-l3',
    title: 'Lección 3: Números y Colores',
    description: 'Learn cardinal numbers and common colors with gamified exercises',
    duration: 90,
    objectives: ['Learn cardinal numbers', 'Master common colors'],
    exercises: A1_M1_L4_ALL_EXERCISES as Exercise[]
  },
  {
    id: 'a1-m1-l4',
    title: 'Lección 4: Repaso y Evaluación Mes 1',
    description: 'Review all topics from Month 1 and take the first monthly evaluation',
    duration: 90,
    objectives: ['Review Month 1 topics', 'Complete monthly evaluation'],
    exercises: [...(A1_M1_L6_ALL_EXERCISES as Exercise[]), ...A1_EXP_COMMON_MISTAKES]
  },
];


// ===============================================
// Módulo 2: Mi Mundo Cercano (Mes 2)
// ===============================================

export const MODULE_2_LESSONS: Lesson[] = [
  {
    id: 'a1-m2-l1',
    title: 'Lección 1: Mi Familia',
    description: 'Learn vocabulary about family members and relationships',
    duration: 90,
    objectives: ['Learn family vocabulary', 'Describe relationships'],
    exercises: [...(A1_M1_L5_ALL_EXERCISES as Exercise[]), ...A1_EXP_ADJECTIVES]
  },
  {
    id: 'a1-m2-l2',
    title: 'Lección 2: La Casa y Muebles',
    description: 'Explore parts of the house and common furniture',
    duration: 90,
    objectives: ['Learn house parts', 'Identify common furniture'],
    exercises: A1_M2_L3_ALL_EXERCISES as Exercise[]
  },
  {
    id: 'a1-m2-l3',
    title: 'Lección 3: Posesión - Adjetivos Posesivos y Genitivo Sajón',
    description: 'Learn how to express possession in English',
    duration: 90,
    objectives: ['Master possessive adjectives', 'Use genitive case'],
    exercises: [...(A1_M2_L2_ALL_EXERCISES as Exercise[]), ...A1_EXP_POSSESSION]
  },
  {
    id: 'a1-m2-l4',
    title: 'Lección 4: Repaso y Evaluación Mes 2',
    description: 'Review Month 2 topics and evaluation',
    duration: 90,
    objectives: ['Review Month 2 topics', 'Complete monthly evaluation'],
    exercises: [...(A1_M1_L7_ALL_EXERCISES as Exercise[]), ...A1_EXP_COMMON_MISTAKES]
  }
];
// ===============================================
// Módulo 3: Rutinas y Tiempo (Mes 3)
// ===============================================

export const MODULE_3_LESSONS: Lesson[] = [
  {
    id: 'a1-m3-l1',
    title: 'Lección 1: Rutina Diaria y Presente Simple',
    description: 'Learn to describe your daily activities using present simple',
    duration: 90,
    objectives: ['Describe daily routine', 'Use present simple'],
    exercises: [...(A1_M2_L1_ALL_EXERCISES as Exercise[]), ...A1_EXP_ADVERBS, ...A1_EXP_CONNECTORS]
  },
  {
    id: 'a1-m3-l2',
    title: 'Lección 2: Tiempo - Horas, Días y Meses',
    description: 'Learn how to tell the time and talk about calendar dates',
    duration: 90,
    objectives: ['Tell the time', 'Learn calendar vocabulary'],
    exercises: [...(A1_M1_L3_ALL_EXERCISES as Exercise[]), ...A1_EXP_CAPITALS, ...A1_EXP_DATES]
  },
  {
    id: 'a1-m3-l3',
    title: 'Lección 3: Profesiones y Trabajo',
    description: 'Vocabulary about jobs and describing what people do',
    duration: 90,
    objectives: ['Learn job vocabulary', 'Describe professional activities'],
    exercises: A1_M2_L2_ALL_EXERCISES as Exercise[]
  },
  {
    id: 'a1-m3-l4',
    title: 'Lección 4: Repaso y Evaluación Mes 3',
    description: 'Review Month 3 topics and evaluation',
    duration: 90,
    objectives: ['Review Month 3 topics', 'Complete monthly evaluation'],
    exercises: A1_M1_L7_ALL_EXERCISES as Exercise[]
  }
];

// ===============================================
// Módulo 4: Comida y Necesidades (Mes 4)
// ===============================================
export const MODULE_4_LESSONS: Lesson[] = [
  {
    id: 'a1-m4-l1',
    title: 'Lección 1: En el Restaurante',
    description: 'Vocabulary for food, drink and ordering at a restaurant',
    duration: 90,
    objectives: ['Learn food vocabulary', 'Order at a restaurant'],
    exercises: []
  },
  {
    id: 'a1-m4-l4',
    title: 'Lección 4: Repaso Mes 4',
    description: 'Month 4 Review',
    duration: 90,
    objectives: ['Review Month 4 topics'],
    exercises: []
  }
];

// ===============================================
// Módulo 5: Mi Ciudad y Movilidad (Mes 5)
// ===============================================
export const MODULE_5_LESSONS: Lesson[] = [
  {
    id: 'a1-m5-l1',
    title: 'Lección 1: Lugares en la Ciudad',
    description: 'Vocabulary for city locations and giving directions',
    duration: 90,
    objectives: ['Learn city vocabulary', 'Give directions'],
    exercises: [...A1_EXP_TRANSPORT, ...A1_EXP_PLACE]
  }
];

// ===============================================
// Módulo 6: Trabajo y Habilidades (Mes 6)
// ===============================================
export const MODULE_6_LESSONS: Lesson[] = [
  {
    id: 'a1-m6-l1',
    title: 'Lección 1: Habilidades con "Can"',
    description: 'Using "can" to talk about what you can and cannot do',
    duration: 90,
    objectives: ['Use "can" for abilities'],
    exercises: []
  }
];

// ===============================================
// Módulo 7: Salud y Cuerpo (Mes 7)
// ===============================================
export const MODULE_7_LESSONS: Lesson[] = [
  {
    id: 'a1-m7-l1',
    title: 'Lección 1: Partes del Cuerpo y Salud',
    description: 'Vocabulary for body parts and simple health problems',
    duration: 90,
    objectives: ['Learn body parts', 'Describe health problems'],
    exercises: []
  }
];

// ===============================================
// Módulo 8: Pasado y Experiencias (Mes 8)
// ===============================================
export const MODULE_8_LESSONS: Lesson[] = [
  {
    id: 'a1-m8-l1',
    title: 'Lección 1: El Pasado del To Be',
    description: 'Using "was" and "were" to talk about the past',
    duration: 90,
    objectives: ['Use "was" and "were"'],
    exercises: []
  }
];

// ===============================================
// Módulo 9: Futuro y Consolidación (Mes 9)
// ===============================================
export const MODULE_9_LESSONS: Lesson[] = [
  {
    id: 'a1-m9-l1',
    title: 'Lección 1: Planes con "Going to"',
    description: 'Talking about future plans and intentions',
    duration: 90,
    objectives: ['Use "going to" for plans'],
    exercises: []
  },
  {
    id: 'a1-m9-l4',
    title: 'Lección 4: Examen Final A1',
    description: 'Final evaluation for CEFR A1 level',
    duration: 120,
    objectives: ['Complete final evaluation'],
    exercises: []
  }
];
export const ALL_MODULES: Module[] = [
  {
    id: 'a1-module-1',
    number: 1,
    title: 'Mes 1: Fundamentos y Primeros Pasos',
    description: 'Aprende los cimientos del inglés: saludos, el alfabeto, números y el verbo To Be.',
    duration: '4 semanas',
    topics: ['Saludos', 'Alfabeto', 'To Be', 'Pronombres', 'Números', 'Colores'],
    grammar: ['Verb to be', 'Subject pronouns', 'Articles a/an/the'],
    vocabulary: ['Greetings', 'Alphabet', 'Numbers 1-100', 'Colors'],
    lessons: MODULE_1_LESSONS,
    examPractice: { mockExam: true, examDuration: 60, parts: ['Reading', 'Writing', 'Listening', 'Speaking'] }
  },
  {
    id: 'a1-module-2',
    number: 2,
    title: 'Mes 2: Mi Mundo Cercano',
    description: 'Habla sobre tu familia, tu casa y las cosas que posees.',
    duration: '4 semanas',
    topics: ['Familia', 'Casa', 'Muebles', 'Posesión'],
    grammar: ['Possessive Adjectives', "Genitive 's", 'Plural nouns'],
    vocabulary: ['Family members', 'House rooms', 'Furniture', 'Adjectives'],
    lessons: MODULE_2_LESSONS,
    examPractice: { mockExam: true, examDuration: 60, parts: ['Reading', 'Writing', 'Listening', 'Speaking'] }
  },
  {
    id: 'a1-module-3',
    number: 3,
    title: 'Mes 3: Rutinas y Tiempo',
    description: 'Aprende a describir tu día a día, el tiempo y tu trabajo.',
    duration: '4 semanas',
    topics: ['Rutina diaria', 'Horas', 'Días y Meses', 'Trabajo'],
    grammar: ['Present Simple', 'Prepositions of time', 'Adverbs of frequency'],
    vocabulary: ['Daily actions', 'Time expressions', 'Jobs', 'Hobbies'],
    lessons: MODULE_3_LESSONS,
    examPractice: { mockExam: true, examDuration: 60, parts: ['Reading', 'Writing', 'Listening', 'Speaking'] }
  },
  {
    id: 'a1-module-4',
    number: 4,
    title: 'Mes 4: Comida y Necesidades',
    description: 'Desenvuélvete en un restaurante y aprende a hacer la compra.',
    duration: '4 semanas',
    topics: ['Comida', 'Bebida', 'Restaurantes', 'Compras'],
    grammar: ['There is/There are', 'Countable/Uncountable', 'Some/Any', 'How much/many'],
    vocabulary: ['Food & Drink', 'Vegetables', 'Fruits', 'Shop items'],
    lessons: MODULE_4_LESSONS
  },
  {
    id: 'a1-module-5',
    number: 5,
    title: 'Mes 5: Mi Ciudad y Movilidad',
    description: 'Explora la ciudad, pide direcciones y usa el transporte.',
    duration: '4 semanas',
    topics: ['Ciudad', 'Direcciones', 'Transporte'],
    grammar: ['Prepositions of place', 'Imperatives', "Can/Can't for possibility"],
    vocabulary: ['Buildings', 'Places', 'Transport', 'Directions'],
    lessons: MODULE_5_LESSONS
  },
  {
    id: 'a1-module-6',
    number: 6,
    title: 'Mes 6: Trabajo y Habilidades',
    description: 'Habla sobre tus habilidades profesionales y tu lugar de trabajo.',
    duration: '4 semanas',
    topics: ['Habilidades', 'Trabajo', 'Oficina'],
    grammar: ["Can/Can't for ability", 'Object Pronouns', 'Present Continuous intro'],
    vocabulary: ['Jobs', 'Workplaces', 'Action verbs', 'Abilities'],
    lessons: MODULE_6_LESSONS
  },
  {
    id: 'a1-module-7',
    number: 7,
    title: 'Mes 7: Salud y Cuerpo',
    description: 'Describe síntomas, partes del cuerpo y da consejos de salud.',
    duration: '4 semanas',
    topics: ['Cuerpo humano', 'Salud', 'Síntomas'],
    grammar: ["Should/Shouldn't", 'Have to', 'Adverbs of manner'],
    vocabulary: ['Body parts', 'Health problems', 'Medicines', 'Feelings'],
    lessons: MODULE_7_LESSONS
  },
  {
    id: 'a1-module-8',
    number: 8,
    title: 'Mes 8: Pasado y Experiencias',
    description: 'Cuenta historias sobre el pasado y tus últimas vacaciones.',
    duration: '4 semanas',
    topics: ['Pasado', 'Vacaciones', 'Eventos'],
    grammar: ['Past Simple To Be', 'Past Simple Regular Verbs', 'Past time expressions'],
    vocabulary: ['Past verbs', 'Travel', 'Holiday activities', 'Weather'],
    lessons: MODULE_8_LESSONS
  },
  {
    id: 'a1-module-9',
    number: 9,
    title: 'Mes 9: Futuro y Consolidación',
    description: 'Haz planes para el futuro y repasa todo el nivel A1.',
    duration: '4 semanas',
    topics: ['Planes', 'Futuro', 'Repaso Final'],
    grammar: ['Future with Going to', 'Present Continuous for future', 'Review of all tenses'],
    vocabulary: ['Future plans', 'Ambitions', 'Course review vocabulary'],
    lessons: MODULE_9_LESSONS
  }
];

// ===============================================
// COURSE CONFIGURATION
// ===============================================

export const A1_FULL_COURSE = {
  id: 'a1-beginner-complete',
  title: 'Curso de Inglés A1 - Programa Completo de 9 Meses',
  level: 'A1',
  description: 'Curso intensivo de 36 semanas diseñado para aprender desde cero hasta un nivel A1 sólido, siguiendo el currículo oficial de Cambridge y el MCER.',
  duration: '9 meses (36 semanas)',
  totalModules: 9,
  totalLessons: 36,
  cefrLevel: 'A1',
  cefrDescription: 'Puede comprender y utilizar expresiones cotidianas de uso muy frecuente así como frases sencillas destinadas a satisfacer necesidades de tipo inmediato.',
  skills: ['Reading', 'Writing', 'Listening', 'Speaking'],
  features: [
    'Aprendizaje visual e intuitivo',
    'Técnicas de Active Recall y Spaced Repetition',
    'Reconocimiento de voz avanzado',
    'Evaluación continua por módulos',
    'Certificación de nivel A1 al finalizar'
  ],
  targetAudience: 'Principiantes absolutos o personas que quieran consolidar sus bases en inglés.',
  learningOutcomes: [
    'Presentarse y saludar a otros',
    'Hablar sobre la familia, el trabajo y las rutinas diarias',
    'Hacer la compra y pedir en un restaurante',
    'Dar y seguir direcciones en la ciudad',
    'Contar experiencias pasadas y hacer planes futuros'
  ]
};

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
  }
];
