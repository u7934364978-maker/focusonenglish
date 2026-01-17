// ============================================
// GENERADOR DE EJERCICIOS CON IA
// ============================================
// Sistema para generar ejercicios dinámicamente usando OpenAI/Gemini

import { 
  ExerciseType, 
  DifficultyLevel, 
  CEFRLevel,
  GenerateExerciseRequest,
  GeneratedExercise,
  getExerciseTypeConfig,
  EXERCISE_TYPE_CATALOG
} from '@/lib/exercise-types';

// ============================================
// INTERFAZ DE IA
// ============================================

export interface AIGeneratorConfig {
  provider: 'openai' | 'gemini';
  model: string;
  temperature: number;
  maxTokens: number;
}

// Configuración por defecto
const DEFAULT_AI_CONFIG: AIGeneratorConfig = {
  provider: 'openai',
  model: 'gpt-4-turbo-preview',
  temperature: 0.7,
  maxTokens: 2000
};

// ============================================
// GENERADOR PRINCIPAL
// ============================================

export class ExerciseGenerator {
  private config: AIGeneratorConfig;
  private apiKey: string;

  constructor(apiKey: string, config?: Partial<AIGeneratorConfig>) {
    this.apiKey = apiKey;
    this.config = { ...DEFAULT_AI_CONFIG, ...config };
  }

  /**
   * Genera un ejercicio usando IA
   */
  async generateExercise(request: GenerateExerciseRequest): Promise<GeneratedExercise> {
    const exerciseConfig = getExerciseTypeConfig(request.exerciseType);
    
    if (!exerciseConfig) {
      throw new Error(`Exercise type ${request.exerciseType} not found`);
    }

    // Construir el prompt basado en la plantilla
    const prompt = this.buildPrompt(exerciseConfig, request);

    // Llamar a la IA para generar el contenido
    const content = await this.callAI(prompt);

    // Crear el ejercicio generado
    const exercise: GeneratedExercise = {
      id: this.generateExerciseId(),
      type: request.exerciseType,
      category: exerciseConfig.category,
      topic: request.topic || 'General',
      difficulty: request.difficulty,
      level: request.level,
      content: content,
      createdAt: new Date(),
      estimatedTime: exerciseConfig.estimatedTime
    };

    return exercise;
  }

  /**
   * Genera múltiples ejercicios del mismo tipo
   */
  async generateMultiple(request: GenerateExerciseRequest): Promise<GeneratedExercise[]> {
    const count = request.count || 1;
    const exercises: GeneratedExercise[] = [];

    for (let i = 0; i < count; i++) {
      try {
        const exercise = await this.generateExercise(request);
        exercises.push(exercise);
      } catch (error) {
        console.error(`Error generating exercise ${i + 1}:`, error);
      }
    }

    return exercises;
  }

  /**
   * Construye el prompt para la IA
   */
  private buildPrompt(
    exerciseConfig: any,
    request: GenerateExerciseRequest
  ): string {
    let prompt = exerciseConfig.aiPromptTemplate;

    // Reemplazar placeholders
    prompt = prompt.replace(/\{\{topic\}\}/g, request.topic || 'general English practice');
    prompt = prompt.replace(/\{\{difficulty\}\}/g, request.difficulty);
    prompt = prompt.replace(/\{\{level\}\}/g, request.level);

    // Agregar contexto de dificultad
    const difficultyContext = exerciseConfig.difficultySettings[request.difficulty];
    prompt = prompt.replace(/\{\{difficultyContext\}\}/g, difficultyContext);

    // Si hay prompt personalizado, agregarlo
    if (request.customPrompt) {
      prompt += `\n\nAdditional requirements: ${request.customPrompt}`;
    }

    // Agregar instrucciones finales
    prompt += `\n\nIMPORTANT: 
- Return ONLY valid JSON, no markdown formatting
- All content in Spanish unless specified otherwise
- Ensure educational value and accuracy
- Make exercises engaging and realistic
- Follow Cambridge B2 First (FCE) standards where applicable`;

    return prompt;
  }

  /**
   * Llama a la IA para generar contenido
   */
  private async callAI(prompt: string): Promise<any> {
    if (this.config.provider === 'openai') {
      return this.callOpenAI(prompt);
    } else if (this.config.provider === 'gemini') {
      return this.callGemini(prompt);
    } else {
      throw new Error(`Unsupported AI provider: ${this.config.provider}`);
    }
  }

  /**
   * Llama a OpenAI API
   */
  private async callOpenAI(prompt: string): Promise<any> {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: this.config.model,
        messages: [
          {
            role: 'system',
            content: 'You are an expert English language teacher specializing in B2 level (FCE) exercises. You create high-quality, pedagogically sound exercises that follow Cambridge exam standards.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: this.config.temperature,
        max_tokens: this.config.maxTokens,
        response_format: { type: 'json_object' }
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    // Parsear JSON
    try {
      return JSON.parse(content);
    } catch (error) {
      console.error('Error parsing OpenAI response:', content);
      throw new Error('Failed to parse AI response as JSON');
    }
  }

  /**
   * Llama a Gemini API
   */
  private async callGemini(prompt: string): Promise<any> {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${this.config.model}:generateContent?key=${this.apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: this.config.temperature,
            maxOutputTokens: this.config.maxTokens,
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data = await response.json();
    const content = data.candidates[0].content.parts[0].text;

    // Limpiar markdown si existe
    let cleanContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    // Parsear JSON
    try {
      return JSON.parse(cleanContent);
    } catch (error) {
      console.error('Error parsing Gemini response:', cleanContent);
      throw new Error('Failed to parse AI response as JSON');
    }
  }

  /**
   * Genera un ID único para el ejercicio
   */
  private generateExerciseId(): string {
    return `ex_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

// ============================================
// CACHÉ DE EJERCICIOS
// ============================================

export class ExerciseCache {
  private cache: Map<string, GeneratedExercise>;
  private maxSize: number;

  constructor(maxSize: number = 100) {
    this.cache = new Map();
    this.maxSize = maxSize;
  }

  /**
   * Genera una clave para el caché
   */
  private getCacheKey(request: GenerateExerciseRequest): string {
    return `${request.exerciseType}_${request.topic || 'general'}_${request.difficulty}_${request.level}`;
  }

  /**
   * Obtiene ejercicios del caché
   */
  get(request: GenerateExerciseRequest, count: number = 1): GeneratedExercise[] {
    const key = this.getCacheKey(request);
    const exercises: GeneratedExercise[] = [];
    
    for (let i = 0; i < count; i++) {
      const cacheKey = `${key}_${i}`;
      const cached = this.cache.get(cacheKey);
      if (cached) {
        exercises.push(cached);
      }
    }

    return exercises;
  }

  /**
   * Guarda ejercicios en el caché
   */
  set(request: GenerateExerciseRequest, exercises: GeneratedExercise[]): void {
    const key = this.getCacheKey(request);

    exercises.forEach((exercise, index) => {
      const cacheKey = `${key}_${index}`;
      
      // Si alcanzamos el límite, eliminar el más antiguo
      if (this.cache.size >= this.maxSize) {
        const firstKey = this.cache.keys().next().value;
        this.cache.delete(firstKey);
      }

      this.cache.set(cacheKey, exercise);
    });
  }

  /**
   * Limpia el caché
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Obtiene el tamaño del caché
   */
  size(): number {
    return this.cache.size;
  }
}

// ============================================
// EXPORT DEFAULT GENERATOR
// ============================================

// Singleton instance para uso en la aplicación
let generatorInstance: ExerciseGenerator | null = null;
let cacheInstance: ExerciseCache | null = null;

export function getExerciseGenerator(): ExerciseGenerator {
  if (!generatorInstance) {
    const apiKey = process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY || '';
    const provider = process.env.OPENAI_API_KEY ? 'openai' : 'gemini';
    
    generatorInstance = new ExerciseGenerator(apiKey, { provider });
  }
  return generatorInstance;
}

export function getExerciseCache(): ExerciseCache {
  if (!cacheInstance) {
    cacheInstance = new ExerciseCache();
  }
  return cacheInstance;
}

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================

/**
 * Valida un ejercicio generado
 */
export function validateGeneratedExercise(exercise: any, type: ExerciseType): boolean {
  // Validaciones básicas
  if (!exercise || typeof exercise !== 'object') {
    return false;
  }

  // Validaciones específicas por tipo
  switch (type) {
    case 'multiple-choice':
      return validateMultipleChoice(exercise);
    case 'fill-blank':
      return validateFillBlank(exercise);
    case 'key-word-transformation':
      return validateKeyWordTransformation(exercise);
    case 'reading-comprehension':
      return validateReading(exercise);
    default:
      return true; // Por ahora aceptar otros tipos
  }
}

function validateMultipleChoice(exercise: any): boolean {
  return (
    exercise.questions &&
    Array.isArray(exercise.questions) &&
    exercise.questions.length > 0 &&
    exercise.questions.every((q: any) => 
      q.question &&
      q.options &&
      Array.isArray(q.options) &&
      q.options.length === 4 &&
      q.correctAnswer &&
      q.explanation
    )
  );
}

function validateFillBlank(exercise: any): boolean {
  return (
    exercise.questions &&
    Array.isArray(exercise.questions) &&
    exercise.questions.length > 0 &&
    exercise.questions.every((q: any) => 
      q.question &&
      q.correctAnswer
    )
  );
}

function validateKeyWordTransformation(exercise: any): boolean {
  return (
    exercise.transformations &&
    Array.isArray(exercise.transformations) &&
    exercise.transformations.length > 0 &&
    exercise.transformations.every((t: any) => 
      t.sentence &&
      t.keyWord &&
      t.correctAnswer &&
      t.explanation
    )
  );
}

function validateReading(exercise: any): boolean {
  return (
    exercise.text &&
    exercise.questions &&
    Array.isArray(exercise.questions) &&
    exercise.questions.length > 0
  );
}
