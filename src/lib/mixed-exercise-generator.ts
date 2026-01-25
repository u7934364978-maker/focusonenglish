// ============================================
// GENERADOR DE EJERCICIOS MIXTOS
// ============================================
// Sistema inteligente que mezcla automáticamente tipologías y disciplinas

import { type CEFRLevel } from './cambridge-curriculum';
import { type ExerciseType, type ExerciseCategory } from './exercise-types';

export interface MixedExerciseConfig {
  level: CEFRLevel;
  count: number; // Cantidad de ejercicios a generar
  ensureVariety?: boolean; // Garantizar variedad de tipos y categorías
}

export interface ExerciseSpec {
  type: ExerciseType;
  category: ExerciseCategory;
  topic: string;
  topicName: string;
  topicKeywords: string[];
  difficulty: 'easy' | 'medium' | 'hard';
}

// ============================================
// MAPEO DE CATEGORÍAS A TIPOS DE EJERCICIO
// ============================================

const CATEGORY_TO_EXERCISE_TYPES: Record<ExerciseCategory, ExerciseType[]> = {
  grammar: ['multiple-choice', 'fill-blank', 'sentence-building', 'key-word-transformation'],
  vocabulary: ['multiple-choice', 'word-formation', 'fill-blank'],
  reading: ['reading-comprehension', 'multiple-choice'],
  writing: ['writing-analysis', 'sentence-building'],
  listening: ['multiple-choice'], // Se puede expandir con listening-comprehension cuando esté disponible
  speaking: ['speaking-analysis', 'pronunciation-practice'],
  pronunciation: ['pronunciation-practice'],
  'exam-practice': ['key-word-transformation', 'multiple-choice-cloze', 'word-formation']
};

// ============================================
// PESOS DE CATEGORÍAS POR NIVEL
// ============================================
// Define qué categorías son más importantes para cada nivel

const CATEGORY_WEIGHTS: Record<CEFRLevel, Record<ExerciseCategory, number>> = {
  A1: {
    grammar: 30,
    vocabulary: 30,
    reading: 15,
    writing: 10,
    listening: 10,
    speaking: 5,
    pronunciation: 0,
    'exam-practice': 0
  },
  A2: {
    grammar: 25,
    vocabulary: 25,
    reading: 20,
    writing: 15,
    listening: 10,
    speaking: 5,
    pronunciation: 0,
    'exam-practice': 0
  },
  B1: {
    grammar: 20,
    vocabulary: 20,
    reading: 20,
    writing: 15,
    listening: 10,
    speaking: 10,
    pronunciation: 5,
    'exam-practice': 0
  },
  B2: {
    grammar: 15,
    vocabulary: 15,
    reading: 20,
    writing: 20,
    listening: 10,
    speaking: 10,
    pronunciation: 5,
    'exam-practice': 5
  },
  C1: {
    grammar: 10,
    vocabulary: 15,
    reading: 20,
    writing: 25,
    listening: 10,
    speaking: 15,
    pronunciation: 0,
    'exam-practice': 5
  },
  C2: {
    grammar: 5,
    vocabulary: 15,
    reading: 20,
    writing: 25,
    listening: 15,
    speaking: 15,
    pronunciation: 0,
    'exam-practice': 5
  }
};

// ============================================
// FUNCIÓN PRINCIPAL: GENERAR ESPECIFICACIONES MIXTAS
// ============================================

/**
 * Genera especificaciones de ejercicios mezclando inteligentemente:
 * - Tipos de ejercicio (multiple-choice, fill-blank, etc.)
 * - Categorías/disciplinas (grammar, vocabulary, reading, etc.)
 * - Topics del currículo de Cambridge
 * 
 * @param config Configuración de generación
 * @returns Array de especificaciones de ejercicios listos para generar
 */
export async function generateMixedExerciseSpecs(
  config: MixedExerciseConfig
): Promise<ExerciseSpec[]> {
  const { level, count, ensureVariety = true } = config;
  
  console.log('🎲 Generating mixed exercise specs:', { level, count, ensureVariety });
  
  // Obtener curriculum del nivel
  const { getCurriculum, getAllTopics } = await import('./cambridge-curriculum');
  const curriculum = getCurriculum(level);
  const allTopics = getAllTopics(level);
  
  if (allTopics.length === 0) {
    throw new Error(`No topics available for level ${level}`);
  }
  
  const specs: ExerciseSpec[] = [];
  const usedCombinations = new Set<string>(); // Para evitar duplicados exactos
  
  // Obtener pesos de categorías para este nivel
  const categoryWeights = CATEGORY_WEIGHTS[level];
  
  // Contador de categorías usadas (para garantizar variedad)
  const categoryCount: Record<string, number> = {};
  const typeCount: Record<string, number> = {};
  
  for (let i = 0; i < count; i++) {
    let spec: ExerciseSpec;
    let attempts = 0;
    const maxAttempts = 50;
    
    do {
      // Seleccionar categoría basándose en pesos
      const category = selectWeightedCategory(categoryWeights, categoryCount, ensureVariety);
      
      // Seleccionar tipo de ejercicio compatible con la categoría
      const exerciseTypes = CATEGORY_TO_EXERCISE_TYPES[category];
      const exerciseType = selectWeightedType(exerciseTypes, typeCount, ensureVariety);
      
      // Seleccionar topic aleatorio de esa categoría
      const categoryTopics = allTopics.filter(t => t.category === category);
      const topic = categoryTopics.length > 0 
        ? categoryTopics[Math.floor(Math.random() * categoryTopics.length)]
        : allTopics[Math.floor(Math.random() * allTopics.length)];
      
      // Determinar dificultad basada en el nivel
      const difficulty = getDifficultyForLevel(level);
      
      spec = {
        type: exerciseType,
        category: category,
        topic: topic.id,
        topicName: topic.name,
        topicKeywords: topic.keywords,
        difficulty
      };
      
      const key = `${spec.type}-${spec.category}-${spec.topic}`;
      
      // Si ensureVariety está activado, evitar duplicados
      if (!ensureVariety || !usedCombinations.has(key) || attempts >= maxAttempts) {
        usedCombinations.add(key);
        categoryCount[category] = (categoryCount[category] || 0) + 1;
        typeCount[exerciseType] = (typeCount[exerciseType] || 0) + 1;
        break;
      }
      
      attempts++;
    } while (attempts < maxAttempts);
    
    specs.push(spec);
  }
  
  console.log('✅ Generated exercise specs:', {
    total: specs.length,
    byCategory: categoryCount,
    byType: typeCount
  });
  
  return specs;
}

/**
 * Selecciona una categoría basándose en pesos, con opción de balanceo
 */
function selectWeightedCategory(
  weights: Record<ExerciseCategory, number>,
  usedCount: Record<string, number>,
  ensureVariety: boolean
): ExerciseCategory {
  // Si ensureVariety está activado, ajustar pesos para favorecer categorías menos usadas
  const adjustedWeights = { ...weights };
  
  if (ensureVariety) {
    Object.keys(adjustedWeights).forEach(category => {
      const timesUsed = usedCount[category] || 0;
      // Reducir peso de categorías ya usadas
      adjustedWeights[category as ExerciseCategory] = Math.max(
        1, 
        adjustedWeights[category as ExerciseCategory] / (timesUsed + 1)
      );
    });
  }
  
  // Calcular total de pesos
  const totalWeight = Object.values(adjustedWeights).reduce((sum, w) => sum + w, 0);
  
  // Selección aleatoria ponderada
  let random = Math.random() * totalWeight;
  
  for (const [category, weight] of Object.entries(adjustedWeights)) {
    random -= weight;
    if (random <= 0) {
      return category as ExerciseCategory;
    }
  }
  
  // Fallback (no debería llegar aquí)
  return 'grammar';
}

/**
 * Selecciona un tipo de ejercicio, con opción de balanceo
 */
function selectWeightedType(
  types: ExerciseType[],
  usedCount: Record<string, number>,
  ensureVariety: boolean
): ExerciseType {
  if (!ensureVariety || types.length === 1) {
    return types[Math.floor(Math.random() * types.length)];
  }
  
  // Favorecer tipos menos usados
  const weightedTypes = types.map(type => ({
    type,
    weight: 1 / ((usedCount[type] || 0) + 1)
  }));
  
  const totalWeight = weightedTypes.reduce((sum, t) => sum + t.weight, 0);
  let random = Math.random() * totalWeight;
  
  for (const { type, weight } of weightedTypes) {
    random -= weight;
    if (random <= 0) {
      return type;
    }
  }
  
  return types[0]; // Fallback
}

/**
 * Determina dificultad apropiada basada en el nivel
 */
function getDifficultyForLevel(level: CEFRLevel): 'easy' | 'medium' | 'hard' {
  const difficultyMap: Record<CEFRLevel, ('easy' | 'medium' | 'hard')[]> = {
    A1: ['easy', 'easy', 'medium'], // Mayoría fácil
    A2: ['easy', 'medium', 'medium'],
    B1: ['medium', 'medium', 'medium'],
    B2: ['medium', 'medium', 'hard'],
    C1: ['medium', 'hard', 'hard'],
    C2: ['hard', 'hard', 'hard'] // Mayoría difícil
  };
  
  const options = difficultyMap[level];
  return options[Math.floor(Math.random() * options.length)];
}

// ============================================
// FUNCIÓN DE AYUDA: DESCRIPCIÓN DE EJERCICIO
// ============================================

/**
 * Genera una descripción legible de un ejercicio
 */
export function describeExerciseSpec(spec: ExerciseSpec): string {
  const typeNames: Record<ExerciseType, string> = {
    'multiple-choice': 'Opción Múltiple',
    'fill-blank': 'Completar Espacios',
    'key-word-transformation': 'Transformación con Palabra Clave',
    'word-formation': 'Formación de Palabras',
    'multiple-choice-cloze': 'Cloze de Opción Múltiple',
    'sentence-building': 'Constructor de Oraciones',
    'reading-comprehension': 'Comprensión Lectora',
    'listening-comprehension': 'Comprensión Auditiva',
    'speaking-analysis': 'Análisis de Expresión Oral',
    'writing-analysis': 'Análisis de Escritura',
    'pronunciation-practice': 'Práctica de Pronunciación',
    'true-false': 'Verdadero/Falso'
  };
  
  const categoryNames: Record<ExerciseCategory, string> = {
    grammar: 'Gramática',
    vocabulary: 'Vocabulario',
    reading: 'Lectura',
    writing: 'Escritura',
    listening: 'Comprensión Auditiva',
    speaking: 'Expresión Oral',
    pronunciation: 'Pronunciación',
    'exam-practice': 'Práctica de Examen'
  };
  
  return `${typeNames[spec.type]} de ${categoryNames[spec.category]}: ${spec.topicName}`;
}
