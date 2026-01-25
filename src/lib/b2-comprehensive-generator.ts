// ============================================
// GENERADOR COMPLETO DE EJERCICIOS B2
// ============================================
// Genera ejercicios cubriendo TODO el syllabus B2 oficial

import { 
  B2_GRAMMAR, 
  B2_TOPICS, 
  B2_FUNCTIONS,
  B2_EXERCISE_TYPES,
  getRandomB2Topic,
  getRandomB2Grammar,
  getRandomB2Function,
  type B2Topic,
  type B2GrammarPoint,
  type B2Function
} from './b2-official-syllabus';

export type ExerciseSkill = 'grammar' | 'vocabulary' | 'reading' | 'writing' | 'listening' | 'speaking';

export interface B2ExerciseConfig {
  skill: ExerciseSkill;
  topic?: B2Topic;
  grammar?: B2GrammarPoint;
  function?: B2Function;
  exerciseType: string;
}

export interface B2GeneratedExercise {
  id: string;
  skill: ExerciseSkill;
  exerciseType: string;
  topic: string;
  topicKeywords: string[];
  grammarFocus?: string;
  functionFocus?: string;
  level: 'B2';
  instructions: string;
  content: any;
  estimatedTime: number;
  createdAt: Date;
}

// ============================================
// TEMPLATES DE PROMPTS ESPECÍFICOS B2
// ============================================

const B2_GRAMMAR_PROMPT_TEMPLATE = `
Generate a B2 level grammar exercise focusing on: {{GRAMMAR_POINT}}

Topic context: {{TOPIC}}
Keywords: {{KEYWORDS}}

Description: {{GRAMMAR_DESCRIPTION}}

Exercise type: {{EXERCISE_TYPE}}

Requirements:
- Use authentic B2 level language
- Context should relate to: {{TOPIC}}
- Include 8-10 questions
- Provide clear explanations for correct answers
- Use examples that demonstrate {{GRAMMAR_POINT}}

Example structures to include:
{{GRAMMAR_EXAMPLES}}

Generate the exercise in JSON format with:
{
  "title": "Clear title",
  "instructions": "Clear instructions in Spanish",
  "questions": [
    {
      "id": "q1",
      "question": "Question text",
      "options": ["option1", "option2", "option3", "option4"], // if multiple-choice
      "correctAnswer": "correct answer",
      "explanation": "Why this is correct"
    }
  ]
}
`;

const B2_VOCABULARY_PROMPT_TEMPLATE = `
Generate a B2 level vocabulary exercise.

Topic: {{TOPIC}}
Keywords to include: {{KEYWORDS}}
Functional language: {{FUNCTION}}

Exercise type: {{EXERCISE_TYPE}}

Requirements:
- Use B2 level vocabulary (upper-intermediate)
- Include collocations, phrasal verbs, and idiomatic expressions
- Context: {{TOPIC}}
- Include 10-12 questions
- Test understanding in context, not just definitions

Functional phrases to incorporate:
{{FUNCTION_PHRASES}}

Generate in JSON format with questions array.
`;

const B2_READING_PROMPT_TEMPLATE = `
Generate a B2 level reading comprehension exercise.

Topic: {{TOPIC}}
Keywords: {{KEYWORDS}}
Communicative function: {{FUNCTION}}

Exercise type: {{EXERCISE_TYPE}}

Requirements:
- Text length: 300-400 words
- Authentic B2 level language
- Topic: {{TOPIC}}
- Include complex sentence structures
- Use of: {{GRAMMAR_POINT}}
- 8-10 comprehension questions
- Mix of question types: multiple-choice, true/false, short answer

The text should:
- Present arguments or different perspectives
- Include opinion and speculation
- Use appropriate linking devices
- Demonstrate {{FUNCTION}}

Generate complete reading passage and questions in JSON format.
`;

const B2_WRITING_PROMPT_TEMPLATE = `
Generate a B2 level writing task.

Topic: {{TOPIC}}
Writing type: {{EXERCISE_TYPE}}
Communicative function: {{FUNCTION}}

Requirements:
- Authentic B2 writing task
- Word count: 140-190 words
- Clear context and purpose
- Topic: {{TOPIC}}
- Should demonstrate: {{FUNCTION}}

Provide:
- Clear task instructions
- Context/situation
- Target reader
- Required elements to include
- Model answer (optional)
- Assessment criteria

Generate in JSON format.
`;

const B2_LISTENING_PROMPT_TEMPLATE = `
Generate a B2 level listening exercise transcript and questions.

Topic: {{TOPIC}}
Keywords: {{KEYWORDS}}
Grammar focus: {{GRAMMAR_POINT}}

Exercise type: {{EXERCISE_TYPE}}

Requirements:
- Transcript: 250-350 words
- Natural spoken English (B2 level)
- Topic: {{TOPIC}}
- Include hesitations, fillers, discourse markers
- Demonstrate: {{GRAMMAR_POINT}}
- 8-10 listening comprehension questions

Types of listening:
- Main idea
- Specific information
- Speaker's opinion/attitude
- Inference

Generate transcript and questions in JSON format.
`;

const B2_SPEAKING_PROMPT_TEMPLATE = `
Generate a B2 level speaking task.

Topic: {{TOPIC}}
Communicative function: {{FUNCTION}}

Exercise type: {{EXERCISE_TYPE}}

Requirements:
- Authentic B2 speaking task
- Topic: {{TOPIC}}
- Demonstrate: {{FUNCTION}}
- Should elicit extended discourse
- Include prompts/questions to guide response

Task types:
- Discussion
- Presentation
- Comparison
- Opinion sharing
- Problem solving

Provide:
- Clear task description
- Visual prompts (if applicable)
- Discussion questions
- Model response phrases
- Assessment criteria

Generate in JSON format.
`;

// ============================================
// GENERADOR PRINCIPAL
// ============================================

export class B2ComprehensiveGenerator {
  /**
   * Genera una configuración aleatoria completa de ejercicio B2
   */
  static generateRandomConfig(): B2ExerciseConfig {
    const skills: ExerciseSkill[] = ['grammar', 'vocabulary', 'reading', 'writing', 'listening', 'speaking'];
    const skill = skills[Math.floor(Math.random() * skills.length)];
    
    const topic = getRandomB2Topic();
    const grammar = getRandomB2Grammar();
    const func = getRandomB2Function();
    
    const availableTypes = B2_EXERCISE_TYPES[skill];
    const exerciseType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
    
    return {
      skill,
      topic,
      grammar,
      function: func,
      exerciseType
    };
  }

  /**
   * Genera un ejercicio B2 completo usando IA
   */
  static async generateExercise(config: B2ExerciseConfig): Promise<B2GeneratedExercise> {
    const prompt = this.buildPrompt(config);
    
    const response = await fetch('/api/generate-exercise', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        exerciseType: config.exerciseType,
        level: 'B2',
        difficulty: 'medium',
        count: 1,
        topic: config.topic?.name || 'general',
        customPrompt: prompt
      })
    });

    if (!response.ok) {
      throw new Error(`Failed to generate exercise: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (!data.success || !data.exercises || data.exercises.length === 0) {
      throw new Error('No exercise generated');
    }

    const generatedContent = data.exercises[0];

    return {
      id: `b2-${config.skill}-${Date.now()}`,
      skill: config.skill,
      exerciseType: config.exerciseType,
      topic: config.topic?.name || 'General',
      topicKeywords: config.topic?.keywords || [],
      grammarFocus: config.grammar?.name,
      functionFocus: config.function?.name,
      level: 'B2',
      instructions: generatedContent.content.instructions || '',
      content: generatedContent.content,
      estimatedTime: this.getEstimatedTime(config.skill, config.exerciseType),
      createdAt: new Date()
    };
  }

  /**
   * Genera múltiples ejercicios B2
   */
  static async generateMultipleExercises(count: number): Promise<B2GeneratedExercise[]> {
    const exercises: B2GeneratedExercise[] = [];
    
    for (let i = 0; i < count; i++) {
      try {
        const config = this.generateRandomConfig();
        const exercise = await this.generateExercise(config);
        exercises.push(exercise);
      } catch (error) {
        console.error(`Error generating exercise ${i + 1}:`, error);
      }
    }
    
    return exercises;
  }

  /**
   * Genera ejercicios por skill específica
   */
  static async generateBySkill(skill: ExerciseSkill, count: number = 1): Promise<B2GeneratedExercise[]> {
    const exercises: B2GeneratedExercise[] = [];
    
    for (let i = 0; i < count; i++) {
      const topic = getRandomB2Topic();
      const grammar = getRandomB2Grammar();
      const func = getRandomB2Function();
      
      const availableTypes = B2_EXERCISE_TYPES[skill];
      const exerciseType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
      
      const config: B2ExerciseConfig = {
        skill,
        topic,
        grammar,
        function: func,
        exerciseType
      };
      
      try {
        const exercise = await this.generateExercise(config);
        exercises.push(exercise);
      } catch (error) {
        console.error(`Error generating ${skill} exercise:`, error);
      }
    }
    
    return exercises;
  }

  /**
   * Genera ejercicios por gramática específica
   */
  static async generateByGrammar(grammarId: string, count: number = 1): Promise<B2GeneratedExercise[]> {
    const grammar = B2_GRAMMAR.find(g => g.id === grammarId);
    if (!grammar) {
      throw new Error(`Grammar point ${grammarId} not found`);
    }

    const exercises: B2GeneratedExercise[] = [];
    
    for (let i = 0; i < count; i++) {
      const topic = getRandomB2Topic();
      const func = getRandomB2Function();
      const exerciseType = 'multiple-choice'; // Or randomize from grammar types
      
      const config: B2ExerciseConfig = {
        skill: 'grammar',
        topic,
        grammar,
        function: func,
        exerciseType
      };
      
      try {
        const exercise = await this.generateExercise(config);
        exercises.push(exercise);
      } catch (error) {
        console.error(`Error generating grammar exercise:`, error);
      }
    }
    
    return exercises;
  }

  /**
   * Genera ejercicios por tema específico
   */
  static async generateByTopic(topicId: string, count: number = 1): Promise<B2GeneratedExercise[]> {
    const topic = B2_TOPICS.find(t => t.id === topicId);
    if (!topic) {
      throw new Error(`Topic ${topicId} not found`);
    }

    const exercises: B2GeneratedExercise[] = [];
    
    for (let i = 0; i < count; i++) {
      const skills: ExerciseSkill[] = ['grammar', 'vocabulary', 'reading', 'writing', 'listening', 'speaking'];
      const skill = skills[Math.floor(Math.random() * skills.length)];
      
      const grammar = getRandomB2Grammar();
      const func = getRandomB2Function();
      
      const availableTypes = B2_EXERCISE_TYPES[skill];
      const exerciseType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
      
      const config: B2ExerciseConfig = {
        skill,
        topic,
        grammar,
        function: func,
        exerciseType
      };
      
      try {
        const exercise = await this.generateExercise(config);
        exercises.push(exercise);
      } catch (error) {
        console.error(`Error generating topic exercise:`, error);
      }
    }
    
    return exercises;
  }

  /**
   * Construye el prompt apropiado según la configuración
   */
  private static buildPrompt(config: B2ExerciseConfig): string {
    let template = '';
    
    switch (config.skill) {
      case 'grammar':
        template = B2_GRAMMAR_PROMPT_TEMPLATE;
        break;
      case 'vocabulary':
        template = B2_VOCABULARY_PROMPT_TEMPLATE;
        break;
      case 'reading':
        template = B2_READING_PROMPT_TEMPLATE;
        break;
      case 'writing':
        template = B2_WRITING_PROMPT_TEMPLATE;
        break;
      case 'listening':
        template = B2_LISTENING_PROMPT_TEMPLATE;
        break;
      case 'speaking':
        template = B2_SPEAKING_PROMPT_TEMPLATE;
        break;
    }

    return template
      .replace(/{{TOPIC}}/g, config.topic?.name || 'General English')
      .replace(/{{KEYWORDS}}/g, config.topic?.keywords.join(', ') || 'general')
      .replace(/{{GRAMMAR_POINT}}/g, config.grammar?.name || 'General grammar')
      .replace(/{{GRAMMAR_DESCRIPTION}}/g, config.grammar?.description || '')
      .replace(/{{GRAMMAR_EXAMPLES}}/g, config.grammar?.examples.join('\n') || '')
      .replace(/{{FUNCTION}}/g, config.function?.name || 'General communication')
      .replace(/{{FUNCTION_PHRASES}}/g, config.function?.examplePhrases.join('\n') || '')
      .replace(/{{EXERCISE_TYPE}}/g, config.exerciseType);
  }

  /**
   * Calcula el tiempo estimado según skill y tipo
   */
  private static getEstimatedTime(skill: ExerciseSkill, exerciseType: string): number {
    const timeMap: Record<ExerciseSkill, number> = {
      grammar: 10,
      vocabulary: 8,
      reading: 15,
      writing: 25,
      listening: 12,
      speaking: 15
    };
    
    return timeMap[skill] || 10;
  }
}

// ============================================
// FUNCIONES DE AYUDA PARA LA UI
// ============================================

export function getSkillDisplayName(skill: ExerciseSkill): string {
  const names: Record<ExerciseSkill, string> = {
    grammar: 'Grammar',
    vocabulary: 'Vocabulary',
    reading: 'Reading',
    writing: 'Writing',
    listening: 'Listening',
    speaking: 'Speaking'
  };
  return names[skill];
}

export function getSkillEmoji(skill: ExerciseSkill): string {
  const emojis: Record<ExerciseSkill, string> = {
    grammar: '📝',
    vocabulary: '📚',
    reading: '📖',
    writing: '✍️',
    listening: '🎧',
    speaking: '🗣️'
  };
  return emojis[skill];
}

export function getAllB2Grammar() {
  return B2_GRAMMAR;
}

export function getAllB2Topics() {
  return B2_TOPICS;
}

export function getAllB2Functions() {
  return B2_FUNCTIONS;
}
