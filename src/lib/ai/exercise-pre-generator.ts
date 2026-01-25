// ============================================
// SISTEMA DE PRE-GENERACIÓN DE EJERCICIOS
// ============================================
// Pre-genera ejercicios populares en background para respuestas instantáneas

import { 
  ExerciseType, 
  DifficultyLevel, 
  CEFRLevel,
  GenerateExerciseRequest
} from '@/lib/exercise-types';
import { getExerciseGenerator, getExerciseCache } from '@/lib/ai/exercise-generator';

// ============================================
// CONFIGURACIÓN DE PRE-GENERACIÓN
// ============================================

// Ejercicios más populares para pre-generar
export const POPULAR_EXERCISES: GenerateExerciseRequest[] = [
  // A1 Level - Beginners
  { exerciseType: 'multiple-choice', topic: 'Present Simple', difficulty: 'easy', level: 'A1', count: 5 },
  { exerciseType: 'fill-blank', topic: 'Basic Vocabulary', difficulty: 'easy', level: 'A1', count: 5 },
  { exerciseType: 'multiple-choice', topic: 'To Be Verb', difficulty: 'easy', level: 'A1', count: 5 },
  
  // A2 Level - Elementary
  { exerciseType: 'multiple-choice', topic: 'Past Simple', difficulty: 'easy', level: 'A2', count: 5 },
  { exerciseType: 'fill-blank', topic: 'Present Continuous', difficulty: 'medium', level: 'A2', count: 5 },
  
  // B1 Level - Intermediate
  { exerciseType: 'multiple-choice', topic: 'Present Perfect', difficulty: 'medium', level: 'B1', count: 5 },
  { exerciseType: 'fill-blank', topic: 'Conditionals', difficulty: 'medium', level: 'B1', count: 5 },
  
  // B2 Level - Upper-Intermediate (más demandado)
  { exerciseType: 'multiple-choice', topic: 'Mixed Conditionals', difficulty: 'medium', level: 'B2', count: 5 },
  { exerciseType: 'fill-blank', topic: 'Advanced Grammar', difficulty: 'hard', level: 'B2', count: 5 },
  { exerciseType: 'key-word-transformation', topic: 'FCE Grammar', difficulty: 'medium', level: 'B2', count: 5 },
  { exerciseType: 'reading-comprehension', topic: 'General Reading', difficulty: 'medium', level: 'B2', count: 3 },
  
  // C1 Level - Advanced
  { exerciseType: 'multiple-choice', topic: 'CAE Grammar', difficulty: 'hard', level: 'C1', count: 3 },
  { exerciseType: 'key-word-transformation', topic: 'CAE Transformations', difficulty: 'hard', level: 'C1', count: 3 },
];

// ============================================
// PRE-GENERADOR
// ============================================

export class ExercisePreGenerator {
  private isRunning: boolean = false;
  private generatedCount: number = 0;
  private targetCount: number = 0;

  /**
   * Inicia la pre-generación de ejercicios populares
   */
  async start(): Promise<void> {
    if (this.isRunning) {
      console.log('⚠️  Pre-generator already running');
      return;
    }

    this.isRunning = true;
    this.generatedCount = 0;
    this.targetCount = POPULAR_EXERCISES.reduce((sum, req) => sum + (req.count || 1), 0);

    console.log(`🚀 Starting exercise pre-generation (target: ${this.targetCount} exercises)`);

    // Pre-generar en background sin bloquear
    this.preGenerateInBackground();
  }

  /**
   * Pre-genera ejercicios en background
   */
  private async preGenerateInBackground(): Promise<void> {
    const cache = getExerciseCache();
    
    for (const request of POPULAR_EXERCISES) {
      try {
        // Verificar si ya hay suficientes en caché
        const existing = cache.get(request, 100);
        
        if (existing.length >= 20) {
          console.log(`⏭️  Skipping ${request.exerciseType}/${request.level}/${request.topic} - already has ${existing.length} cached`);
          this.generatedCount += (request.count || 1);
          continue;
        }

        console.log(`⚙️  Pre-generating ${request.count} ${request.exerciseType} exercises for ${request.level} - ${request.topic}`);
        
        // Obtener generador
        const generator = getExerciseGenerator();
        
        if (!generator) {
          console.log('⚠️  No API key configured, skipping pre-generation');
          break;
        }

        // Generar ejercicios
        const exercises = await generator.generateMultiple(request);
        
        if (exercises.length > 0) {
          // Agregar al pool existente
          const updatedPool = [...existing, ...exercises];
          cache.set(request, updatedPool);
          
          this.generatedCount += exercises.length;
          console.log(`✅ Generated ${exercises.length} exercises. Pool size: ${updatedPool.length}. Progress: ${this.generatedCount}/${this.targetCount}`);
        }

        // Pequeño delay para no sobrecargar la API
        await this.sleep(2000); // 2 segundos entre requests
        
      } catch (error) {
        console.error(`❌ Error pre-generating ${request.exerciseType}/${request.level}:`, error);
      }
    }

    this.isRunning = false;
    console.log(`🎉 Pre-generation completed! Generated ${this.generatedCount} exercises`);
  }

  /**
   * Helper para sleep
   */
  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Verifica si está corriendo
   */
  isActive(): boolean {
    return this.isRunning;
  }

  /**
   * Obtiene el progreso
   */
  getProgress(): { generated: number; target: number; percentage: number } {
    return {
      generated: this.generatedCount,
      target: this.targetCount,
      percentage: this.targetCount > 0 ? Math.round((this.generatedCount / this.targetCount) * 100) : 0
    };
  }
}

// ============================================
// SINGLETON INSTANCE
// ============================================

let preGeneratorInstance: ExercisePreGenerator | null = null;

export function getExercisePreGenerator(): ExercisePreGenerator {
  if (!preGeneratorInstance) {
    preGeneratorInstance = new ExercisePreGenerator();
  }
  return preGeneratorInstance;
}

// ============================================
// AUTO-START EN PRODUCCIÓN
// ============================================

// Si estamos en Node.js (servidor), iniciar pre-generación automáticamente
if (typeof window === 'undefined' && process.env.NODE_ENV === 'production') {
  // Iniciar después de 10 segundos para no interferir con el arranque
  setTimeout(() => {
    const preGen = getExercisePreGenerator();
    preGen.start().catch(err => {
      console.error('Error starting pre-generator:', err);
    });
  }, 10000);
}
