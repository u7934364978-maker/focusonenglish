// ============================================
// NUEVA ESTRUCTURA DE CURSO B2 - FOCUS ENGLISH
// Optimizada para Ejercicios Infinitos
// ============================================

/**
 * FILOSOFÍA DEL NUEVO DISEÑO:
 * 
 * 1. NO hay límite de ejercicios (infinitos)
 * 2. NO se muestra "X de Y ejercicios"
 * 3. Enfoque en TEMAS y HABILIDADES, no en "completar X ejercicios"
 * 4. Experiencia tipo "learning path" con progreso basado en tiempo/práctica
 * 5. Sistema de dominio por tema (principiante → intermedio → avanzado)
 */

// ============================================
// TIPOS BASE
// ============================================

export type SkillCategory = 
  | 'grammar'
  | 'vocabulary'
  | 'reading'
  | 'writing'
  | 'listening'
  | 'speaking'
  | 'pronunciation'
  | 'exam-practice';

export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced' | 'mastery';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

// ============================================
// TEMA DE APRENDIZAJE (Learning Topic)
// ============================================

export interface LearningTopic {
  id: string;
  title: string;
  titleES: string;
  description: string;
  descriptionES: string;
  category: SkillCategory;
  icon: string;
  
  // Niveles de dominio
  proficiency: {
    current: ProficiencyLevel;
    progressPercentage: number; // 0-100
  };
  
  // Tiempo estimado para dominar
  estimatedHours: number;
  
  // Habilidades que desarrolla
  skills: string[];
  
  // Configuración de ejercicios para este tema
  exerciseConfig: {
    types: ExerciseTypeId[]; // Tipos de ejercicios disponibles
    recommendedDifficulty: DifficultyLevel;
    adaptiveDifficulty: boolean; // Si ajusta automáticamente la dificultad
  };
  
  // Progreso del usuario
  userProgress?: {
    timeSpent: number; // minutos
    sessionsCompleted: number;
    lastPracticed?: Date;
    strengthLevel: number; // 0-100 (qué tan bien domina el tema)
    needsReview: boolean;
  };
}

// ============================================
// MÓDULO DE APRENDIZAJE (Learning Module)
// ============================================

export interface LearningModule {
  id: string;
  number: number;
  title: string;
  titleES: string;
  description: string;
  descriptionES: string;
  
  // Temas que cubre este módulo
  topics: LearningTopic[];
  
  // Objetivos de aprendizaje
  objectives: string[];
  objectivesES: string[];
  
  // Nivel CEFR
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  
  // Progreso general del módulo
  progress: {
    topicsStarted: number;
    topicsMastered: number;
    totalTimeSpent: number; // minutos
    overallStrength: number; // 0-100
  };
  
  // Recomendaciones
  recommended: boolean; // Si es recomendado para el usuario ahora
  prerequisiteModules?: string[]; // IDs de módulos prerrequisito
}

// ============================================
// SESIÓN DE PRÁCTICA (Practice Session)
// ============================================

export interface PracticeSession {
  id: string;
  topicId: string;
  topicTitle: string;
  
  // Configuración de la sesión
  config: {
    difficulty: DifficultyLevel;
    duration: 'quick' | 'standard' | 'extended'; // 5, 15, 30 minutos
    focusArea?: string; // Área específica de enfoque
  };
  
  // NO hay "número total de ejercicios"
  // Los ejercicios se generan bajo demanda
  
  // Estadísticas de la sesión
  stats: {
    startTime: Date;
    endTime?: Date;
    exercisesCompleted: number;
    correctAnswers: number;
    totalAnswers: number;
    timeSpent: number; // minutos
    strengthGained: number; // Puntos de fortaleza ganados
  };
  
  // Resultados y feedback
  results?: {
    overallScore: number; // 0-100
    strengthAreas: string[];
    improvementAreas: string[];
    nextRecommendation: string;
  };
}

// ============================================
// TIPOS DE EJERCICIOS DISPONIBLES
// ============================================

export type ExerciseTypeId = 
  | 'multiple-choice'
  | 'fill-blank'
  | 'key-word-transformation'
  | 'word-formation'
  | 'reading-comprehension'
  | 'sentence-building'
  | 'writing-analysis'
  | 'speaking-analysis'
  | 'pronunciation-practice'
  | 'multiple-choice-cloze';

export interface ExerciseTypeConfig {
  id: ExerciseTypeId;
  name: string;
  nameES: string;
  description: string;
  descriptionES: string;
  category: SkillCategory;
  icon: string;
  estimatedTime: number; // minutos por ejercicio
  difficultyLevels: DifficultyLevel[];
}

// ============================================
// RUTA DE APRENDIZAJE (Learning Path)
// ============================================

export interface LearningPath {
  id: string;
  title: string;
  titleES: string;
  description: string;
  descriptionES: string;
  
  // Módulos en orden recomendado
  modules: LearningModule[];
  
  // Nivel objetivo
  targetLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  
  // Progreso general
  overallProgress: {
    modulesCompleted: number;
    totalModules: number;
    currentModule: string; // ID del módulo actual
    estimatedCompletionDate?: Date;
    totalTimeSpent: number; // horas
  };
}

// ============================================
// RECOMENDACIONES PERSONALIZADAS
// ============================================

export interface PersonalizedRecommendation {
  id: string;
  type: 'topic' | 'review' | 'challenge' | 'exam-prep';
  title: string;
  description: string;
  reason: string; // Por qué se recomienda
  
  // Enlace a la práctica
  actionLink: {
    topicId?: string;
    moduleId?: string;
    difficulty?: DifficultyLevel;
  };
  
  priority: 'high' | 'medium' | 'low';
  estimatedTime: number; // minutos
}

// ============================================
// ESTADÍSTICAS DEL USUARIO
// ============================================

export interface UserStats {
  userId: string;
  
  // Progreso general
  overallProgress: {
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
    percentageToNextLevel: number;
    totalTimeSpent: number; // horas
    streak: number; // días consecutivos
    lastPracticeDate?: Date;
  };
  
  // Por categoría de habilidad
  skillProgress: {
    [key in SkillCategory]: {
      strength: number; // 0-100
      topicsStarted: number;
      topicsMastered: number;
      timeSpent: number; // minutos
    };
  };
  
  // Temas que necesitan revisión
  reviewNeeded: string[]; // IDs de temas
  
  // Logros
  achievements: {
    id: string;
    title: string;
    description: string;
    unlockedAt: Date;
    icon: string;
  }[];
  
  // Recomendaciones personalizadas
  recommendations: PersonalizedRecommendation[];
}

// ============================================
// CURSO COMPLETO
// ============================================

export interface Course {
  id: string;
  title: string;
  titleES: string;
  description: string;
  descriptionES: string;
  
  // Nivel del curso
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  
  // Ruta de aprendizaje
  learningPath: LearningPath;
  
  // Todos los temas disponibles
  allTopics: LearningTopic[];
  
  // Configuración del curso
  config: {
    allowSkipTopics: boolean;
    adaptiveLearning: boolean;
    showStrengthMetrics: boolean;
    enableExamMode: boolean;
  };
}

// ============================================
// DATOS DEL CURSO B2 - NUEVA ESTRUCTURA
// ============================================

export const B2_LEARNING_TOPICS: LearningTopic[] = [
  // GRAMÁTICA
  {
    id: 'grammar-past-perfect',
    title: 'Past Perfect & Past Perfect Continuous',
    titleES: 'Pasado Perfecto y Pasado Perfecto Continuo',
    description: 'Master the use of past perfect tenses for complex time relationships',
    descriptionES: 'Domina el uso de los tiempos perfectos del pasado para relaciones temporales complejas',
    category: 'grammar',
    icon: '📖',
    proficiency: {
      current: 'beginner',
      progressPercentage: 0
    },
    estimatedHours: 3,
    skills: ['Narración', 'Secuencia de eventos', 'Contexto temporal'],
    exerciseConfig: {
      types: ['multiple-choice', 'fill-blank', 'sentence-building'],
      recommendedDifficulty: 'medium',
      adaptiveDifficulty: true
    }
  },
  {
    id: 'grammar-mixed-conditionals',
    title: 'Mixed Conditionals',
    titleES: 'Condicionales Mixtos',
    description: 'Learn to combine different conditional forms for nuanced expressions',
    descriptionES: 'Aprende a combinar diferentes formas condicionales para expresiones matizadas',
    category: 'grammar',
    icon: '🔀',
    proficiency: {
      current: 'beginner',
      progressPercentage: 0
    },
    estimatedHours: 4,
    skills: ['Hipótesis', 'Consecuencias', 'Expresión de posibilidades'],
    exerciseConfig: {
      types: ['multiple-choice', 'fill-blank', 'sentence-building'],
      recommendedDifficulty: 'hard',
      adaptiveDifficulty: true
    }
  },
  {
    id: 'grammar-inversion',
    title: 'Inversion for Emphasis',
    titleES: 'Inversión para Énfasis',
    description: 'Use inversion to create emphasis and formal style',
    descriptionES: 'Usa la inversión para crear énfasis y estilo formal',
    category: 'grammar',
    icon: '🔃',
    proficiency: {
      current: 'beginner',
      progressPercentage: 0
    },
    estimatedHours: 3,
    skills: ['Escritura formal', 'Énfasis', 'Estilo avanzado'],
    exerciseConfig: {
      types: ['multiple-choice', 'sentence-building', 'key-word-transformation'],
      recommendedDifficulty: 'hard',
      adaptiveDifficulty: true
    }
  },
  {
    id: 'grammar-modals-speculation',
    title: 'Modals of Speculation',
    titleES: 'Modales de Especulación',
    description: 'Express degrees of certainty about past, present and future',
    descriptionES: 'Expresa grados de certeza sobre el pasado, presente y futuro',
    category: 'grammar',
    icon: '🤔',
    proficiency: {
      current: 'beginner',
      progressPercentage: 0
    },
    estimatedHours: 3,
    skills: ['Deducción', 'Especulación', 'Certeza y duda'],
    exerciseConfig: {
      types: ['multiple-choice', 'fill-blank', 'sentence-building'],
      recommendedDifficulty: 'medium',
      adaptiveDifficulty: true
    }
  },
  {
    id: 'grammar-passive-advanced',
    title: 'Advanced Passive Structures',
    titleES: 'Estructuras Pasivas Avanzadas',
    description: 'Master complex passive constructions and reporting verbs',
    descriptionES: 'Domina las construcciones pasivas complejas y verbos de reporte',
    category: 'grammar',
    icon: '🔄',
    proficiency: {
      current: 'beginner',
      progressPercentage: 0
    },
    estimatedHours: 4,
    skills: ['Escritura académica', 'Impersonalidad', 'Estilo formal'],
    exerciseConfig: {
      types: ['multiple-choice', 'key-word-transformation', 'sentence-building'],
      recommendedDifficulty: 'medium',
      adaptiveDifficulty: true
    }
  },
  {
    id: 'grammar-reported-speech',
    title: 'Complex Reported Speech',
    titleES: 'Estilo Indirecto Complejo',
    description: 'Report statements, questions and commands accurately',
    descriptionES: 'Reporta declaraciones, preguntas y órdenes con precisión',
    category: 'grammar',
    icon: '💬',
    proficiency: {
      current: 'beginner',
      progressPercentage: 0
    },
    estimatedHours: 3,
    skills: ['Narración', 'Paráfrasis', 'Cambios temporales'],
    exerciseConfig: {
      types: ['multiple-choice', 'key-word-transformation', 'sentence-building'],
      recommendedDifficulty: 'medium',
      adaptiveDifficulty: true
    }
  },

  // VOCABULARIO
  {
    id: 'vocab-work-business',
    title: 'Work & Business Vocabulary',
    titleES: 'Vocabulario de Trabajo y Negocios',
    description: 'Essential vocabulary for professional contexts',
    descriptionES: 'Vocabulario esencial para contextos profesionales',
    category: 'vocabulary',
    icon: '💼',
    proficiency: {
      current: 'beginner',
      progressPercentage: 0
    },
    estimatedHours: 4,
    skills: ['Lenguaje profesional', 'Emails formales', 'Reuniones'],
    exerciseConfig: {
      types: ['multiple-choice', 'word-formation', 'fill-blank'],
      recommendedDifficulty: 'medium',
      adaptiveDifficulty: true
    }
  },
  {
    id: 'vocab-phrasal-verbs',
    title: 'Essential Phrasal Verbs',
    titleES: 'Phrasal Verbs Esenciales',
    description: 'Master the most common phrasal verbs for B2',
    descriptionES: 'Domina los phrasal verbs más comunes para B2',
    category: 'vocabulary',
    icon: '🔤',
    proficiency: {
      current: 'beginner',
      progressPercentage: 0
    },
    estimatedHours: 5,
    skills: ['Expresiones idiomáticas', 'Lenguaje coloquial', 'Fluidez'],
    exerciseConfig: {
      types: ['multiple-choice', 'fill-blank', 'sentence-building'],
      recommendedDifficulty: 'medium',
      adaptiveDifficulty: true
    }
  },
  {
    id: 'vocab-collocations',
    title: 'Common Collocations',
    titleES: 'Colocaciones Comunes',
    description: 'Learn natural word combinations used by native speakers',
    descriptionES: 'Aprende combinaciones naturales de palabras usadas por nativos',
    category: 'vocabulary',
    icon: '🔗',
    proficiency: {
      current: 'beginner',
      progressPercentage: 0
    },
    estimatedHours: 4,
    skills: ['Fluidez natural', 'Expresión idiomática', 'Precisión'],
    exerciseConfig: {
      types: ['multiple-choice', 'multiple-choice-cloze', 'fill-blank'],
      recommendedDifficulty: 'medium',
      adaptiveDifficulty: true
    }
  },

  // PRÁCTICA DE EXAMEN
  {
    id: 'exam-key-word-transformation',
    title: 'Key Word Transformation Practice',
    titleES: 'Práctica de Transformación de Palabras Clave',
    description: 'Practice Cambridge B2 First key word transformation exercises',
    descriptionES: 'Practica ejercicios de transformación estilo Cambridge B2 First',
    category: 'exam-practice',
    icon: '🎯',
    proficiency: {
      current: 'beginner',
      progressPercentage: 0
    },
    estimatedHours: 6,
    skills: ['Paráfrasis', 'Precisión gramatical', 'Flexibilidad lingüística'],
    exerciseConfig: {
      types: ['key-word-transformation'],
      recommendedDifficulty: 'hard',
      adaptiveDifficulty: false // Siempre al nivel del examen
    }
  },
  {
    id: 'exam-word-formation',
    title: 'Word Formation Practice',
    titleES: 'Práctica de Formación de Palabras',
    description: 'Master word formation for Cambridge B2 First exam',
    descriptionES: 'Domina la formación de palabras para el examen Cambridge B2 First',
    category: 'exam-practice',
    icon: '📝',
    proficiency: {
      current: 'beginner',
      progressPercentage: 0
    },
    estimatedHours: 5,
    skills: ['Derivación de palabras', 'Prefijos y sufijos', 'Familias de palabras'],
    exerciseConfig: {
      types: ['word-formation'],
      recommendedDifficulty: 'hard',
      adaptiveDifficulty: false
    }
  },
  {
    id: 'exam-reading-comprehension',
    title: 'Reading Comprehension',
    titleES: 'Comprensión Lectora',
    description: 'Practice reading comprehension at B2 level',
    descriptionES: 'Practica comprensión lectora a nivel B2',
    category: 'reading',
    icon: '📚',
    proficiency: {
      current: 'beginner',
      progressPercentage: 0
    },
    estimatedHours: 8,
    skills: ['Lectura rápida', 'Inferencia', 'Análisis de texto'],
    exerciseConfig: {
      types: ['reading-comprehension', 'multiple-choice-cloze'],
      recommendedDifficulty: 'medium',
      adaptiveDifficulty: true
    }
  }
];

export const B2_MODULE_1: LearningModule = {
  id: 'b2-module-1',
  number: 1,
  title: 'Grammar Fundamentals & Exam Skills',
  titleES: 'Fundamentos de Gramática y Habilidades de Examen',
  description: 'Build a solid foundation in advanced grammar and develop exam techniques',
  descriptionES: 'Construye una base sólida en gramática avanzada y desarrolla técnicas de examen',
  
  topics: B2_LEARNING_TOPICS,
  
  objectives: [
    'Master complex grammatical structures',
    'Develop exam-specific techniques',
    'Build professional vocabulary',
    'Improve reading comprehension skills'
  ],
  objectivesES: [
    'Dominar estructuras gramaticales complejas',
    'Desarrollar técnicas específicas de examen',
    'Construir vocabulario profesional',
    'Mejorar habilidades de comprensión lectora'
  ],
  
  cefrLevel: 'B2',
  
  progress: {
    topicsStarted: 0,
    topicsMastered: 0,
    totalTimeSpent: 0,
    overallStrength: 0
  },
  
  recommended: true,
  prerequisiteModules: []
};

export const B2_LEARNING_PATH: LearningPath = {
  id: 'b2-first-path',
  title: 'Cambridge B2 First (FCE) Preparation',
  titleES: 'Preparación Cambridge B2 First (FCE)',
  description: 'Complete learning path to achieve B2 level and pass Cambridge First exam',
  descriptionES: 'Ruta de aprendizaje completa para alcanzar nivel B2 y aprobar el examen Cambridge First',
  
  modules: [B2_MODULE_1],
  
  targetLevel: 'B2',
  
  overallProgress: {
    modulesCompleted: 0,
    totalModules: 1,
    currentModule: 'b2-module-1',
    totalTimeSpent: 0
  }
};

export const B2_COURSE: Course = {
  id: 'b2-first-course',
  title: 'B2 First (FCE) Exam Preparation',
  titleES: 'Preparación Examen B2 First (FCE)',
  description: 'Comprehensive B2 level course with unlimited practice',
  descriptionES: 'Curso completo de nivel B2 con práctica ilimitada',
  
  level: 'B2',
  
  learningPath: B2_LEARNING_PATH,
  
  allTopics: B2_LEARNING_TOPICS,
  
  config: {
    allowSkipTopics: true,
    adaptiveLearning: true,
    showStrengthMetrics: true,
    enableExamMode: true
  }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getTopicById(topicId: string): LearningTopic | undefined {
  return B2_LEARNING_TOPICS.find(topic => topic.id === topicId);
}

export function getTopicsByCategory(category: SkillCategory): LearningTopic[] {
  return B2_LEARNING_TOPICS.filter(topic => topic.category === category);
}

export function getRecommendedTopics(userStats: UserStats): LearningTopic[] {
  // Lógica para recomendar temas basados en el progreso del usuario
  return B2_LEARNING_TOPICS.filter(topic => {
    const proficiency = topic.proficiency.current;
    return proficiency === 'beginner' || proficiency === 'intermediate';
  });
}

export function calculateModuleProgress(module: LearningModule, userStats: UserStats): number {
  const totalTopics = module.topics.length;
  const masteredTopics = module.topics.filter(topic => {
    const progress = topic.userProgress;
    return progress && progress.strengthLevel >= 80;
  }).length;
  
  return (masteredTopics / totalTopics) * 100;
}
