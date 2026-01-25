// ============================================
// EJERCICIO GENERADOR WRAPPER - CAMBRIDGE CURRICULUM
// ============================================
// Conecta el curriculum de Cambridge con el sistema de generación de ejercicios

import { type CEFRLevel } from './cambridge-curriculum';
import { type ExerciseType } from './exercise-types';

export interface Exercise {
  id: string;
  type: ExerciseType;
  level: CEFRLevel;
  topic: string;
  topicName: string;
  content: any;
  createdAt: Date;
  estimatedTime: number;
}

export interface ExerciseConfig {
  level: CEFRLevel;
  category: string;
  topic: string;
  topicName: string;
  topicKeywords: string[];
}

/**
 * Generate exercise from Cambridge curriculum
 */
export async function generateExercise(config: ExerciseConfig): Promise<Exercise> {
  // Map category to exercise type - SOLO USAR TIPOS QUE EL API ACEPTA
  const exerciseTypeMap: Record<string, ExerciseType[]> = {
    grammar: ['multiple-choice', 'fill-blank'],
    vocabulary: ['multiple-choice', 'word-formation'],
    reading: ['reading-comprehension', 'multiple-choice'],
    writing: ['writing-analysis'],
    listening: ['listening-comprehension', 'multiple-choice'],
    speaking: ['speaking-analysis', 'pronunciation-practice']
  };

  const availableTypes = exerciseTypeMap[config.category] || ['multiple-choice'];
  const selectedType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
  
  console.log('🎲 Selected exercise type:', {
    category: config.category,
    availableTypes,
    selectedType,
    level: config.level,
    topic: config.topicName
  });

  // Call the API to generate the exercise
  const response = await fetch('/api/generate-exercise', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      exerciseType: selectedType,
      level: config.level,
      category: config.category,
      difficulty: 'medium', // Default difficulty
      count: 1,
      topic: config.topic,
      topicKeywords: config.topicKeywords,
      customInstructions: `Generate a ${config.level} level ${config.category} exercise about ${config.topicName}. Keywords: ${config.topicKeywords.join(', ')}`
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error('❌ API Error:', {
      status: response.status,
      statusText: response.statusText,
      body: errorText
    });
    
    let error;
    try {
      error = JSON.parse(errorText);
    } catch {
      error = { error: errorText || 'Failed to generate exercise' };
    }
    
    throw new Error(error.error || error.message || `API Error: ${response.status}`);
  }

  const data = await response.json();
  
  console.log('✅ API Response:', {
    success: data.success,
    exercisesCount: data.exercises?.length,
    firstExerciseType: data.exercises?.[0]?.type
  });
  
  // The API returns { success: true, exercises: [...], sessionId: '...' }
  if (!data.success || !data.exercises || data.exercises.length === 0) {
    throw new Error('No exercise generated');
  }

  const generatedExercise = data.exercises[0]; // Get first exercise
  
  return {
    id: generatedExercise.id || `ex-${Date.now()}`,
    type: selectedType,
    level: config.level,
    topic: config.topic,
    topicName: config.topicName,
    content: generatedExercise.content,
    createdAt: new Date(),
    estimatedTime: generatedExercise.estimatedTime || 10
  };
}
