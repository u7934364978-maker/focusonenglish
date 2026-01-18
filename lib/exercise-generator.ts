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
  // Map category to exercise type
  const exerciseTypeMap: Record<string, ExerciseType[]> = {
    grammar: ['multiple-choice', 'fill-blank', 'sentence-building', 'true-false'],
    vocabulary: ['multiple-choice', 'word-formation', 'fill-blank'],
    reading: ['reading-comprehension', 'multiple-choice', 'true-false'],
    writing: ['writing-analysis', 'fill-blank', 'sentence-building'],
    listening: ['listening-comprehension', 'multiple-choice'],
    speaking: ['speaking-analysis', 'pronunciation-practice']
  };

  const availableTypes = exerciseTypeMap[config.category] || ['multiple-choice'];
  const selectedType = availableTypes[Math.floor(Math.random() * availableTypes.length)];

  // Call the API to generate the exercise
  const response = await fetch('/api/exercises/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      exerciseType: selectedType,
      level: config.level,
      topic: config.topicName,
      keywords: config.topicKeywords,
      customInstructions: `Generate a ${config.level} level ${config.category} exercise about ${config.topicName}. Keywords: ${config.topicKeywords.join(', ')}`
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to generate exercise');
  }

  const data = await response.json();
  
  return {
    id: data.id || `ex-${Date.now()}`,
    type: selectedType,
    level: config.level,
    topic: config.topic,
    topicName: config.topicName,
    content: data.content,
    createdAt: new Date(),
    estimatedTime: data.estimatedTime || 10
  };
}
