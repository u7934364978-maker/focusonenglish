import OpenAI from 'openai';
import { 
  ExerciseType, 
  DifficultyLevel, 
  CEFRLevel,
  GenerateExerciseRequest,
  GeneratedExercise,
  getExerciseTypeConfig,
  EXERCISE_TYPE_CATALOG
} from '@/lib/exercise-types';
import { buildCurriculumPrompt } from '@/lib/ai/curriculum-helper';
import { getExerciseTracker } from '@/lib/ai/exercise-tracker';
import { generateFallbackExercise } from '@/lib/ai/fallback-exercises';

// ============================================
// INTERFAZ DE IA
// ============================================

export interface AIGeneratorConfig {
  provider: 'openai' | 'gemini';
  model: string;
  temperature: number;
  maxTokens: number;
}

// Configuración por defecto - Usando GPT-4o por ser más fiable
const DEFAULT_AI_CONFIG: AIGeneratorConfig = {
  provider: 'openai',
  model: 'gpt-4o', 
  temperature: 0.7,
  maxTokens: 2000 
};

// ============================================
// GENERADOR PRINCIPAL
// ============================================

export class ExerciseGenerator {
  private config: AIGeneratorConfig;
  private apiKey: string;
  private sessionId?: string;
  private userId?: string;
  private openai: OpenAI;

  constructor(apiKey: string, config?: Partial<AIGeneratorConfig>, sessionId?: string, userId?: string) {
    this.apiKey = apiKey;
    this.config = { ...DEFAULT_AI_CONFIG, ...config };
    this.sessionId = sessionId;
    this.userId = userId;
    
    // Inicializar SDK oficial de OpenAI solo si hay API key
    if (this.apiKey || process.env.OPENAI_API_KEY) {
      this.openai = new OpenAI({
        apiKey: this.apiKey || process.env.OPENAI_API_KEY || '',
      });
    } else {
      console.warn('⚠️ OpenAI API key not found. AI features will be disabled.');
      // @ts-ignore - Permitir que sea null si no hay key, los métodos que lo usan fallarán controladamente
      this.openai = null;
    }
  }

  /**
   * Genera un ejercicio usando IA
   */
  async generateExercise(request: GenerateExerciseRequest): Promise<GeneratedExercise> {
    if (!this.openai && this.config.provider === 'openai') {
      throw new Error('OpenAI API key not configured');
    }
    const exerciseConfig = getExerciseTypeConfig(request.exerciseType);
    
    if (!exerciseConfig) {
      throw new Error(`Exercise type ${request.exerciseType} not found`);
    }

    // Construir el prompt basado en la plantilla
    const prompt = this.buildPrompt(exerciseConfig, request);

    // Llamar a la IA para generar el contenido
    const content = await this.callAI(prompt, request.level);

    // Verificar si el ejercicio ya fue usado (anti-repetición)
    const tracker = getExerciseTracker();
    const isUsed = tracker.isExerciseUsed(
      content,
      request.exerciseType,
      request.level,
      this.userId,
      this.sessionId
    );

    // Si ya fue usado, generar uno nuevo (máximo 3 intentos)
    if (isUsed) {
      console.log('🔄 Exercise already used, generating a new one...');
      let attempts = 0;
      let newContent = content;
      
      while (attempts < 3 && tracker.isExerciseUsed(newContent, request.exerciseType, request.level, this.userId, this.sessionId)) {
        newContent = await this.callAI(prompt + '\n\nGenerate a COMPLETELY DIFFERENT exercise with NEW content.', request.level);
        attempts++;
      }
      
      if (attempts >= 3) {
        console.warn('⚠️ Could not generate unique exercise after 3 attempts');
      } else {
        newContent = content; // Fallback to original content if unique one fails
      }
    }

    // Registrar el ejercicio en el tracker
    tracker.trackExercise(
      content,
      request.exerciseType,
      request.level,
      this.userId,
      this.sessionId
    );

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
    let finalTopic = request.topic || 'general English practice';
    
    // Si hay palabras clave del tema, incluirlas para guiar a la IA
    if (request.topicKeywords && request.topicKeywords.length > 0) {
      finalTopic = `${finalTopic} (Focus on: ${request.topicKeywords.join(', ')})`;
    }

    prompt = prompt.replace(/\{\{topic\}\}/g, finalTopic);
    prompt = prompt.replace(/\{\{difficulty\}\}/g, request.difficulty);
    prompt = prompt.replace(/\{\{level\}\}/g, request.level);

    // Agregar contexto de dificultad
    const difficultyContext = exerciseConfig.difficultySettings[request.difficulty];
    prompt = prompt.replace(/\{\{difficultyContext\}\}/g, difficultyContext);

    // NUEVO: Agregar contexto del curriculum
    const curriculumPrompt = buildCurriculumPrompt(
      request.level as any,
      exerciseConfig.category,
      request.exerciseType,
      request.difficulty
    );
    prompt += curriculumPrompt;

    // NUEVO: Agregar información de ejercicios recientes (anti-repetición)
    const tracker = getExerciseTracker();
    const exclusionPrompt = tracker.getExclusionPrompt(
      request.exerciseType,
      request.level,
      this.userId,
      this.sessionId
    );
    prompt += exclusionPrompt;

    // Si hay prompt personalizado, agregarlo
    if (request.customPrompt) {
      prompt += `\n\nAdditional requirements: ${request.customPrompt}`;
    }

    // Agregar instrucciones finales actualizadas
    prompt += `\n\nIMPORTANT: 
- Return ONLY valid JSON, no markdown formatting
- All exercise content (questions, answers, options) MUST be in ENGLISH
- All explanations MUST be in SPANISH (to help Spanish-speaking students understand)
- Instructions can be in English
- Ensure educational value and accuracy
- Make exercises engaging and realistic
- ${request.level === 'A1' ? 'Follow A1 CEFR level standards - VERY BASIC English for absolute beginners' : ''}
- ${request.level === 'A2' ? 'Follow A2 CEFR level standards - Elementary English' : ''}
- ${request.level === 'B1' ? 'Follow B1 CEFR level standards - Intermediate English' : ''}
- ${request.level === 'B2' ? 'Follow B2 First (FCE) Cambridge standards - Upper-Intermediate English' : ''}
- ${request.level === 'C1' ? 'Follow C1 Advanced (CAE) Cambridge standards - Advanced English' : ''}
- ${request.level === 'C2' ? 'Follow C2 Proficiency (CPE) Cambridge standards - Proficient English' : ''}
- USE ONLY the curriculum topics and grammar specified above for ${request.level} level
- Generate UNIQUE content - avoid repetition from recent exercises`;

    return prompt;
  }

  /**
   * Llama a la IA para generar contenido
   */
  private async callAI(prompt: string, level: CEFRLevel = 'B2'): Promise<any> {
    if (this.config.provider === 'openai') {
      return this.callOpenAI(prompt, level);
    } else if (this.config.provider === 'gemini') {
      return this.callGemini(prompt, level);
    } else {
      throw new Error(`Unsupported AI provider: ${this.config.provider}`);
    }
  }

  /**
   * Llama a OpenAI API usando el SDK oficial
   */
  private async callOpenAI(prompt: string, level: CEFRLevel = 'B2'): Promise<any> {
    try {
      const completion = await this.openai.chat.completions.create({
        model: this.config.model,
        messages: [
          {
            role: 'system',
            content: `You are an expert English language teacher specializing in CEFR-aligned exercises. 
You create high-quality, pedagogically sound exercises that follow ${level === 'A1' ? 'A1 (Beginner)' : level === 'A2' ? 'A2 (Elementary)' : level === 'B1' ? 'B1 (Intermediate)' : level === 'B2' ? 'B2 (Upper-Intermediate) - Cambridge FCE' : level === 'C1' ? 'C1 (Advanced) - Cambridge CAE' : 'C2 (Proficient) - Cambridge CPE'} standards.

For ${level} level, you MUST:
- Use ONLY grammar and vocabulary appropriate for ${level} level
- Follow the curriculum topics provided in the prompt
- Create exercises that match the specified difficulty level
- Generate UNIQUE content that hasn't been used before
- Ensure all content is educationally appropriate and accurate`
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: this.config.temperature,
        max_tokens: this.config.maxTokens,
        response_format: { type: 'json_object' }
      });

      const content = completion.choices[0].message.content;

      // Parsear JSON
      if (!content) throw new Error('Empty response from OpenAI');
      return JSON.parse(content);
    } catch (error: any) {
      console.error('Error calling OpenAI:', error);
      throw new Error(`OpenAI error: ${error.message}`);
    }
  }

  /**
   * Llama a Gemini API
   */
  private async callGemini(prompt: string, level: CEFRLevel = 'B2'): Promise<any> {
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

  constructor(maxSize: number = 500) { // Aumentado de 100 a 500
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

export function getExerciseGenerator(sessionId?: string, userId?: string): ExerciseGenerator | null {
  const apiKey = process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY || '';
  
  // Si no hay API key, retornar null para usar fallback exercises
  if (!apiKey) {
    console.warn('⚠️  No AI API key configured. Using fallback exercises.');
    return null;
  }
  
  // Siempre crear una nueva instancia con el sessionId/userId actual
  // Esto permite tracking por sesión
  const provider = process.env.OPENAI_API_KEY ? 'openai' : 'gemini';
  generatorInstance = new ExerciseGenerator(apiKey, { provider }, sessionId, userId);
  
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

// ============================================
// FALLBACK EXERCISES
// ============================================
// Usar el generador de fallbacks unificado

export function getFallbackExercise(request: GenerateExerciseRequest): GeneratedExercise {
  return generateFallbackExercise(
    request.exerciseType,
    request.topic,
    request.difficulty,
    request.level
  );
}
