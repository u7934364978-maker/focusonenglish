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
- All exercise content (questions, answers, options) MUST be in ENGLISH
- All explanations MUST be in SPANISH (to help Spanish-speaking students understand)
- Instructions can be in English
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

export function getExerciseGenerator(): ExerciseGenerator | null {
  const apiKey = process.env.OPENAI_API_KEY || process.env.GEMINI_API_KEY || '';
  
  // Si no hay API key, retornar null para usar fallback exercises
  if (!apiKey) {
    console.warn('⚠️  No AI API key configured. Using fallback exercises.');
    return null;
  }
  
  if (!generatorInstance) {
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

// ============================================
// FALLBACK EXERCISES
// ============================================
// Ejercicios pre-generados para cuando no hay API key

export function getFallbackExercise(request: GenerateExerciseRequest): GeneratedExercise {
  const exerciseConfig = getExerciseTypeConfig(request.exerciseType);
  
  if (!exerciseConfig) {
    throw new Error(`Exercise type ${request.exerciseType} not found`);
  }

  // Seleccionar ejercicio de fallback basado en el tipo
  let content: any;
  
  switch (request.exerciseType) {
    case 'multiple-choice':
      content = getFallbackMultipleChoice(request);
      break;
    case 'fill-blank':
      content = getFallbackFillBlank(request);
      break;
    case 'key-word-transformation':
      content = getFallbackKeyWordTransformation(request);
      break;
    case 'reading-comprehension':
      content = getFallbackReading(request);
      break;
    case 'sentence-building':
      content = getFallbackSentenceBuilding(request);
      break;
    case 'writing-analysis':
      content = getFallbackWritingAnalysis(request);
      break;
    case 'speaking-analysis':
      content = getFallbackSpeakingAnalysis(request);
      break;
    default:
      content = getFallbackMultipleChoice(request); // Default to multiple choice
  }

  return {
    id: `fallback_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    type: request.exerciseType,
    category: exerciseConfig.category,
    topic: request.topic || 'General English',
    difficulty: request.difficulty,
    level: request.level,
    content: content,
    createdAt: new Date(),
    estimatedTime: exerciseConfig.estimatedTime
  };
}

function getFallbackMultipleChoice(request: GenerateExerciseRequest): any {
  return {
    title: `${request.topic || 'English'} Practice - Multiple Choice`,
    instructions: 'Elige la respuesta correcta para cada pregunta.',
    questions: [
      {
        id: 'q1',
        question: 'If I _____ you were coming, I would have prepared something to eat.',
        options: ['knew', 'had known', 'would know', 'know'],
        correctAnswer: 'had known',
        explanation: 'Usamos past perfect (had known) en la condición de un tercer condicional porque la acción no pasada en el pasado. "If I had known" expresa que no sabía en ese momento.'
      },
      {
        id: 'q2',
        question: 'She suggested _____ to the new restaurant downtown.',
        options: ['to go', 'going', 'go', 'that we go'],
        correctAnswer: 'going',
        explanation: '"Suggest" va seguido de un gerundio (going) o "that + subjuntivo". En este caso, "going" es la forma más común y natural.'
      },
      {
        id: 'q3',
        question: 'The project _____ by the end of next month.',
        options: ['will complete', 'will be completed', 'will have completed', 'is completing'],
        correctAnswer: 'will be completed',
        explanation: 'Usamos voz pasiva en futuro simple (will be completed) porque el proyecto es el objeto que recibe la acción, no quien la realiza.'
      },
      {
        id: 'q4',
        question: 'I wish I _____ more time to study for the exam.',
        options: ['have', 'had', 'would have', 'will have'],
        correctAnswer: 'had',
        explanation: 'Después de "I wish" usamos past simple (had) para expresar un deseo sobre el presente. "I wish I had" = Ojalá tuviera (ahora).'
      }
    ]
  };
}

function getFallbackFillBlank(request: GenerateExerciseRequest): any {
  return {
    title: `${request.topic || 'English'} Practice - Complete the Sentences`,
    instructions: 'Completa las oraciones con la forma correcta de las palabras entre paréntesis.',
    questions: [
      { id: 'q1', question: 'By this time next year, I _____ (finish) my degree.', correctAnswer: 'will have finished', explanation: 'Future perfect para una acción que se completará antes de un momento en el futuro.' },
      { id: 'q2', question: 'The meeting _____ (already/start) when I arrived.', correctAnswer: 'had already started', explanation: 'Past perfect porque la acción ocurrió antes de otra acción en el pasado.' },
      { id: 'q3', question: 'I\'m not used to _____ (work) night shifts.', correctAnswer: 'working', explanation: '"Be used to" va seguido de gerundio (working).' },
      { id: 'q4', question: 'She made me _____ (wait) for over an hour.', correctAnswer: 'wait', explanation: '"Make" + persona + infinitivo sin "to" (wait).' },
      { id: 'q5', question: 'The book _____ (write) by a famous author.', correctAnswer: 'was written', explanation: 'Voz pasiva en pasado simple (was written).' },
      { id: 'q6', question: 'If you _____ (study) harder, you would have passed the exam.', correctAnswer: 'had studied', explanation: 'Past perfect en el tercer condicional.' },
      { id: 'q7', question: 'Despite _____ (feel) tired, she continued working.', correctAnswer: 'feeling', explanation: '"Despite" va seguido de gerundio o sustantivo.' },
      { id: 'q8', question: 'The new policy will come _____ effect next month.', correctAnswer: 'into', explanation: 'La colocación correcta es "come into effect".' }
    ]
  };
}

function getFallbackKeyWordTransformation(request: GenerateExerciseRequest): any {
  return {
    title: 'Key Word Transformation Practice',
    instructions: 'Completa la segunda oración usando la palabra clave para que signifique lo mismo que la primera. Debes usar entre 2 y 5 palabras, incluyendo la palabra clave.',
    transformations: [
      {
        id: 't1',
        sentence: 'I last saw John three years ago.',
        keyWord: 'SEEN',
        startOfAnswer: 'I haven\'t',
        correctAnswer: 'I haven\'t seen John',
        explanation: 'Present perfect con "for" o "since" para expresar el tiempo transcurrido desde la última vez.'
      },
      {
        id: 't2',
        sentence: '"Why don\'t we go to the cinema?" she said.',
        keyWord: 'SUGGESTED',
        startOfAnswer: 'She',
        correctAnswer: 'She suggested going',
        explanation: '"Suggest" + gerundio para reportar una sugerencia.'
      },
      {
        id: 't3',
        sentence: 'It\'s possible that they missed the train.',
        keyWord: 'MAY',
        startOfAnswer: 'They',
        correctAnswer: 'They may have missed',
        explanation: '"May have" + past participle para expresar posibilidad en el pasado.'
      },
      {
        id: 't4',
        sentence: 'I regret not studying harder for the exam.',
        keyWord: 'WISH',
        startOfAnswer: 'I',
        correctAnswer: 'I wish I had studied',
        explanation: '"I wish" + past perfect para expresar arrepentimiento sobre el pasado.'
      },
      {
        id: 't5',
        sentence: 'The concert was cancelled because of the bad weather.',
        keyWord: 'DUE',
        startOfAnswer: 'The concert was cancelled',
        correctAnswer: 'The concert was cancelled due to',
        explanation: '"Due to" es una expresión formal que significa "a causa de".'
      }
    ]
  };
}

function getFallbackReading(request: GenerateExerciseRequest): any {
  return {
    title: 'The Future of Remote Work',
    text: `The COVID-19 pandemic has dramatically transformed the way we work, with remote work becoming the new normal for millions of employees worldwide. What started as a temporary measure has evolved into a permanent shift in workplace culture. Companies that were once hesitant about remote work have now embraced it, realizing the benefits of increased flexibility and reduced overhead costs.\n\nHowever, this transition hasn\'t been without its challenges. Many employees struggle with maintaining work-life balance when their home becomes their office. The lack of face-to-face interaction can lead to feelings of isolation and decreased team cohesion. Additionally, not all jobs can be performed remotely, creating a divide between those who can work from home and those who cannot.\n\nDespite these challenges, experts predict that hybrid work models will dominate the future. These models combine the flexibility of remote work with the benefits of in-person collaboration. Companies are investing in technology and redesigning office spaces to support this new way of working. The key to success will be finding the right balance that works for both employers and employees.`,
    wordCount: 178,
    estimatedReadingTime: 2,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'According to the passage, what was the initial cause of the shift to remote work?',
        options: [
          'A) Companies wanting to reduce costs',
          'B) The COVID-19 pandemic',
          'C) Employee demands for flexibility',
          'D) Advances in technology'
        ],
        correctAnswer: 'B',
        explanation: 'El texto dice claramente: "The COVID-19 pandemic has dramatically transformed the way we work".'
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        question: 'What is mentioned as a challenge of remote work?',
        options: [
          'A) Higher costs for companies',
          'B) Increased commute times',
          'C) Difficulty maintaining work-life balance',
          'D) Lack of qualified workers'
        ],
        correctAnswer: 'C',
        explanation: 'El texto menciona: "Many employees struggle with maintaining work-life balance".'
      },
      {
        id: 'q3',
        type: 'multiple-choice',
        question: 'What do experts predict about the future of work?',
        options: [
          'A) Everyone will work remotely',
          'B) Offices will disappear completely',
          'C) Hybrid models will be dominant',
          'D) Remote work will be banned'
        ],
        correctAnswer: 'C',
        explanation: 'El texto dice: "experts predict that hybrid work models will dominate the future".'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'All types of jobs can be performed remotely.',
        correctAnswer: 'FALSE',
        explanation: 'El texto afirma: "not all jobs can be performed remotely".'
      },
      {
        id: 'q5',
        type: 'multiple-choice',
        question: 'What are companies doing to support the new way of working?',
        options: [
          'A) Increasing salaries',
          'B) Investing in technology and redesigning offices',
          'C) Hiring more employees',
          'D) Reducing working hours'
        ],
        correctAnswer: 'B',
        explanation: 'El texto menciona: "Companies are investing in technology and redesigning office spaces".'
      }
    ]
  };
}

function getFallbackSentenceBuilding(request: GenerateExerciseRequest): any {
  return {
    title: 'Sentence Building Practice',
    instructions: 'Ordena las palabras para formar oraciones gramaticalmente correctas.',
    sentences: [
      {
        id: 's1',
        words: ['never', 'I', 'such', 'have', 'seen', 'a', 'beautiful', 'place', '.'],
        correctOrder: ['I', 'have', 'never', 'seen', 'such', 'a', 'beautiful', 'place', '.'],
        translation: 'Nunca he visto un lugar tan hermoso.',
        hint: 'Present perfect con adverbio de frecuencia.',
        points: 2
      },
      {
        id: 's2',
        words: ['studying', 'she', 'when', 'was', 'I', 'arrived', '.'],
        correctOrder: ['she', 'was', 'studying', 'when', 'I', 'arrived', '.'],
        translation: 'Ella estaba estudiando cuando llegué.',
        hint: 'Past continuous + when + past simple.',
        points: 2
      },
      {
        id: 's3',
        words: ['would', 'if', 'I', 'rich', 'were', ',', 'I', 'travel', 'the', 'world', '.'],
        correctOrder: ['if', 'I', 'were', 'rich', ',', 'I', 'would', 'travel', 'the', 'world', '.'],
        translation: 'Si fuera rico, viajaría por el mundo.',
        hint: 'Segundo condicional (irreal en presente).',
        points: 2
      }
    ]
  };
}

function getFallbackWritingAnalysis(request: GenerateExerciseRequest): any {
  return {
    title: 'Writing Analysis: Formal Correspondence',
    instructions: 'Elige la mejor opción para cada situación de escritura.',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        context: 'You are writing a formal email to a potential employer.',
        question: 'Which opening is most appropriate?',
        options: [
          'A) Hey there,',
          'B) Dear Sir/Madam,',
          'C) Hi!',
          'D) To whom it may concern,'
        ],
        correctAnswer: 'B',
        explanation: '"Dear Sir/Madam" es el saludo formal más apropiado cuando conoces la organización pero no el nombre específico del destinatario.',
        points: 2
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        context: 'You need to connect two ideas in an essay.',
        question: 'Which linking phrase shows contrast most effectively?',
        options: [
          'A) Also,',
          'B) Furthermore,',
          'C) However,',
          'D) In addition,'
        ],
        correctAnswer: 'C',
        explanation: '"However" es el conector de contraste más efectivo para escritura formal.',
        points: 2
      }
    ]
  };
}

function getFallbackSpeakingAnalysis(request: GenerateExerciseRequest): any {
  return {
    title: 'Speaking Analysis: Social Situations',
    instructions: 'Elige la opción más apropiada para cada situación de conversación.',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        scenario: 'You want to politely disagree with someone in a business meeting.',
        question: 'Which phrase is most diplomatic?',
        options: [
          'A) You\'re wrong.',
          'B) I see your point, but I have a different perspective.',
          'C) That\'s stupid.',
          'D) No way!'
        ],
        correctAnswer: 'B',
        explanation: '"I see your point, but..." reconoce la opinión del otro antes de presentar tu desacuerdo, siendo diplomático.',
        points: 2
      },
      {
        id: 'q2',
        type: 'multiple-choice',
        scenario: 'Someone thanks you for helping them.',
        question: 'Which response is most natural in British English?',
        options: [
          'A) You\'re welcome.',
          'B) No problem.',
          'C) Don\'t mention it.',
          'D) All of the above'
        ],
        correctAnswer: 'D',
        explanation: 'Todas estas respuestas son naturales y comunes en inglés británico para responder a un agradecimiento.',
        points: 2
      }
    ]
  };
}
