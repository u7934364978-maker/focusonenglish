// ============================================
// TIPOS DE EJERCICIOS - SISTEMA DINÁMICO B2
// ============================================
// Sistema de generación infinita de ejercicios con IA

export type ExerciseCategory = 
  | 'grammar'
  | 'vocabulary'
  | 'reading'
  | 'writing'
  | 'listening'
  | 'speaking'
  | 'pronunciation'
  | 'exam-practice';

export type ExerciseType = 
  | 'multiple-choice'
  | 'fill-blank'
  | 'true-false'
  | 'short-answer'
  | 'essay'
  | 'key-word-transformation'
  | 'word-formation'
  | 'multiple-choice-cloze'
  | 'sentence-building'
  | 'reading-comprehension'
  | 'listening-comprehension'
  | 'speaking-prompt'
  | 'writing-prompt'
  | 'pronunciation-practice';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';
export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

// ============================================
// CONFIGURACIÓN DE TIPOS DE EJERCICIOS
// ============================================

export interface ExerciseTypeConfig {
  id: ExerciseType;
  name: string;
  nameES: string;
  category: ExerciseCategory;
  description: string;
  descriptionES: string;
  icon: string;
  estimatedTime: number; // minutos
  aiPromptTemplate: string;
  supportedLevels: CEFRLevel[];
  difficultySettings: {
    easy: string;
    medium: string;
    hard: string;
  };
}

// ============================================
// CATÁLOGO DE TIPOS DE EJERCICIOS DISPONIBLES
// ============================================

export const EXERCISE_TYPE_CATALOG: ExerciseTypeConfig[] = [
  {
    id: 'multiple-choice',
    name: 'Multiple Choice',
    nameES: 'Opción Múltiple',
    category: 'grammar',
    description: 'Choose the correct answer from multiple options',
    descriptionES: 'Elige la respuesta correcta entre varias opciones',
    icon: '✓',
    estimatedTime: 5,
    aiPromptTemplate: `Generate a B2 level multiple choice exercise about {{topic}}.
Difficulty: {{difficulty}}
Include 4 questions with:
- Clear question stem
- 4 answer options (A, B, C, D)
- Only one correct answer
- Detailed explanation for the correct answer
- Distractors that test common mistakes

Format as JSON:
{
  "title": "Exercise title",
  "instructions": "Instructions in Spanish",
  "questions": [
    {
      "id": "q1",
      "question": "Question text",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": "A",
      "explanation": "Why this is correct"
    }
  ]
}`,
    supportedLevels: ['A2', 'B1', 'B2', 'C1'],
    difficultySettings: {
      easy: 'Basic structures with clear context clues',
      medium: 'Standard B2 complexity with subtle differences',
      hard: 'Advanced structures requiring deep understanding'
    }
  },
  {
    id: 'fill-blank',
    name: 'Fill in the Blanks',
    nameES: 'Completar Espacios',
    category: 'grammar',
    description: 'Complete sentences with the correct words',
    descriptionES: 'Completa las oraciones con las palabras correctas',
    icon: '___',
    estimatedTime: 7,
    aiPromptTemplate: `Generate a B2 level fill-in-the-blanks exercise about {{topic}}.
Difficulty: {{difficulty}}
Create 8 sentences with gaps where students must fill in the correct form.
Each gap should test: {{grammarPoint}}

Include:
- Context sentences with meaningful gaps
- Acceptable answers (including variations)
- Clear explanations
- Points per question

Format as JSON with questions array.`,
    supportedLevels: ['A2', 'B1', 'B2', 'C1', 'C2'],
    difficultySettings: {
      easy: 'Single word gaps with obvious context',
      medium: 'Multi-word phrases or verb forms',
      hard: 'Complex transformations or idiomatic expressions'
    }
  },
  {
    id: 'key-word-transformation',
    name: 'Key Word Transformation',
    nameES: 'Transformación con Palabra Clave',
    category: 'exam-practice',
    description: 'Rewrite sentences using a given key word',
    descriptionES: 'Reescribe oraciones usando una palabra clave dada',
    icon: '🔑',
    estimatedTime: 10,
    aiPromptTemplate: `Generate 5 B2 First (FCE) Key Word Transformation exercises.
Focus on: {{topic}}
Difficulty: {{difficulty}}

Each transformation must:
1. Have a sentence to transform
2. Include a KEY WORD in capitals
3. Provide the start of the answer
4. Test specific grammar/vocabulary points
5. Require 2-5 words including the key word

Format as JSON with transformations array including:
- sentence (original)
- keyWord (in capitals)
- startOfAnswer
- correctAnswer
- explanation
- points (2 points each for Cambridge standard)`,
    supportedLevels: ['B2', 'C1'],
    difficultySettings: {
      easy: 'Basic transformations with common structures',
      medium: 'Standard FCE difficulty with multiple possible structures',
      hard: 'Complex transformations testing advanced grammar'
    }
  },
  {
    id: 'word-formation',
    name: 'Word Formation',
    nameES: 'Formación de Palabras',
    category: 'vocabulary',
    description: 'Transform words to fit the context',
    descriptionES: 'Transforma palabras para que encajen en el contexto',
    icon: '📝',
    estimatedTime: 8,
    aiPromptTemplate: `Generate a B2 Word Formation exercise (FCE Part 3 style).
Topic: {{topic}}
Difficulty: {{difficulty}}

Create a text passage (100-150 words) with 8 gaps.
Each gap has a base word that must be transformed (prefix, suffix, negative, etc.).

Include:
- Engaging passage text with (1)___, (2)___, etc.
- 8 base words requiring transformation
- For each gap: correct answer, acceptable variations, transformation type, explanation
- Focus areas (word patterns being tested)

Format as JSON with text and questions array.`,
    supportedLevels: ['B1', 'B2', 'C1'],
    difficultySettings: {
      easy: 'Common suffixes and prefixes',
      medium: 'Mix of derivations and negative forms',
      hard: 'Less common transformations and double prefixes'
    }
  },
  {
    id: 'reading-comprehension',
    name: 'Reading Comprehension',
    nameES: 'Comprensión Lectora',
    category: 'reading',
    description: 'Read a passage and answer questions',
    descriptionES: 'Lee un texto y responde preguntas',
    icon: '📖',
    estimatedTime: 15,
    aiPromptTemplate: `Generate a B2 reading comprehension exercise.
Topic: {{topic}}
Difficulty: {{difficulty}}

Create:
1. An authentic-style passage (250-300 words) about {{topic}}
2. 6-8 comprehension questions testing:
   - Main idea
   - Specific details
   - Inference
   - Vocabulary in context
   - Author's purpose/tone

Include:
- title
- text passage
- wordCount
- estimatedReadingTime (minutes)
- questions array with:
  * multiple-choice questions (4 options)
  * true/false questions
  * short-answer questions
  * Each with explanation

Format as JSON.`,
    supportedLevels: ['A2', 'B1', 'B2', 'C1', 'C2'],
    difficultySettings: {
      easy: 'Clear, straightforward text with explicit information',
      medium: 'Some inference required, mixed question types',
      hard: 'Complex ideas, implicit information, challenging vocabulary'
    }
  },
  {
    id: 'sentence-building',
    name: 'Sentence Building',
    nameES: 'Constructor de Oraciones',
    category: 'grammar',
    description: 'Arrange words to form correct sentences',
    descriptionES: 'Ordena las palabras para formar oraciones correctas',
    icon: '🔨',
    estimatedTime: 6,
    aiPromptTemplate: `Generate 5 sentence building exercises for B2 level.
Focus on: {{topic}}
Difficulty: {{difficulty}}

Each exercise should:
- Provide shuffled words that form one grammatically correct sentence
- Include punctuation marks as separate items
- Test specific grammar structures ({{grammarPoint}})
- Include Spanish translation
- Provide a hint about the structure
- Award 2 points per sentence

Format as JSON with sentences array containing:
- id
- words (shuffled array)
- correctOrder (proper sequence)
- translation (Spanish)
- hint
- points`,
    supportedLevels: ['A2', 'B1', 'B2', 'C1'],
    difficultySettings: {
      easy: 'Short sentences (6-8 words) with clear structure',
      medium: 'Medium sentences (9-12 words) with subordinate clauses',
      hard: 'Long complex sentences (13+ words) with multiple clauses'
    }
  },
  {
    id: 'writing-prompt',
    name: 'Writing Practice',
    nameES: 'Práctica de Escritura',
    category: 'writing',
    description: 'Write essays, articles, emails, or reports',
    descriptionES: 'Escribe ensayos, artículos, correos o informes',
    icon: '✍️',
    estimatedTime: 30,
    aiPromptTemplate: `Generate a B2 writing task.
Type: {{writingType}} (essay/article/email/review/report)
Topic: {{topic}}
Difficulty: {{difficulty}}

Create:
1. Clear, authentic prompt (as in FCE exam)
2. Word count requirements (140-190 words for FCE)
3. Time limit suggestion
4. Assessment rubric criteria:
   - Content (5 points)
   - Organization (5 points)
   - Language/Grammar (5 points)
   - Vocabulary (5 points)
5. Tips for this writing type
6. Optional: example response (150-180 words)

Format as JSON with all fields.`,
    supportedLevels: ['B1', 'B2', 'C1'],
    difficultySettings: {
      easy: 'Personal topics with simple requirements',
      medium: 'Standard FCE topics requiring structured response',
      hard: 'Complex abstract topics requiring nuanced argument'
    }
  },
  {
    id: 'speaking-prompt',
    name: 'Speaking Practice',
    nameES: 'Práctica Oral',
    category: 'speaking',
    description: 'Practice speaking with AI evaluation',
    descriptionES: 'Practica speaking con evaluación de IA',
    icon: '🎤',
    estimatedTime: 5,
    aiPromptTemplate: `Generate a B2 speaking exercise.
Type: {{speakingType}} (monologue/discussion/presentation)
Topic: {{topic}}
Difficulty: {{difficulty}}

Create:
1. Clear prompt or question
2. Time limit (1-2 minutes)
3. Evaluation criteria:
   - Pronunciation
   - Fluency
   - Grammar
   - Vocabulary
   - Task achievement
4. Useful phrases/expressions for this topic
5. 3-5 follow-up questions
6. Tips for strong responses

Format as JSON.`,
    supportedLevels: ['A2', 'B1', 'B2', 'C1', 'C2'],
    difficultySettings: {
      easy: 'Personal experience topics with clear structure',
      medium: 'Opinion/discussion topics requiring reasoning',
      hard: 'Abstract concepts requiring complex argumentation'
    }
  },
  {
    id: 'pronunciation-practice',
    name: 'Pronunciation Practice',
    nameES: 'Práctica de Pronunciación',
    category: 'pronunciation',
    description: 'Practice pronunciation with AI feedback',
    descriptionES: 'Practica pronunciación con feedback de IA',
    icon: '🗣️',
    estimatedTime: 8,
    aiPromptTemplate: `Generate pronunciation practice for B2 level.
Focus: {{pronunciationFocus}} (word stress/sentence stress/intonation/minimal pairs)
Difficulty: {{difficulty}}

Create:
1. Title and clear instructions in Spanish
2. 5-8 target sentences focusing on {{pronunciationFocus}}
3. For each sentence:
   - English sentence
   - Spanish translation
   - Phonetic transcription (IPA) for key words
   - Audio model URL placeholder
   - Specific pronunciation tips
4. Focus points (what to emphasize)
5. Common mistakes to avoid

Format as JSON with targetSentences array.`,
    supportedLevels: ['A1', 'A2', 'B1', 'B2', 'C1'],
    difficultySettings: {
      easy: 'Clear, slow-paced sentences with common sounds',
      medium: 'Natural speed with challenging sound combinations',
      hard: 'Fast-paced with tongue twisters and difficult clusters'
    }
  },
  {
    id: 'multiple-choice-cloze',
    name: 'Multiple Choice Cloze',
    nameES: 'Cloze de Opción Múltiple',
    category: 'exam-practice',
    description: 'Choose correct words to complete a text',
    descriptionES: 'Elige las palabras correctas para completar un texto',
    icon: '📄',
    estimatedTime: 10,
    aiPromptTemplate: `Generate an FCE-style Multiple Choice Cloze (Part 1).
Topic: {{topic}}
Difficulty: {{difficulty}}

Create:
1. Engaging text passage (150-170 words) with 8 gaps
2. Each gap has 4 options testing:
   - Collocations
   - Fixed phrases
   - Idioms
   - Complementation
   - Phrasal verbs
   - Semantic precision

For each gap:
- 4 plausible options
- Clear correct answer
- Explanation of why it's correct
- Why distractors are wrong

Format as JSON with text and questions array.`,
    supportedLevels: ['B2', 'C1'],
    difficultySettings: {
      easy: 'Common collocations and frequent phrases',
      medium: 'Standard FCE difficulty with subtle distinctions',
      hard: 'Low-frequency collocations and advanced phrases'
    }
  }
];

// ============================================
// TEMAS DE GRAMÁTICA B2 (Para generación)
// ============================================

export const B2_GRAMMAR_TOPICS = [
  { id: 'past-perfect', name: 'Past Perfect & Past Perfect Continuous', nameES: 'Pasado Perfecto y Continuo' },
  { id: 'mixed-conditionals', name: 'Mixed Conditionals', nameES: 'Condicionales Mixtos' },
  { id: 'inversion', name: 'Inversion for Emphasis', nameES: 'Inversión para Énfasis' },
  { id: 'cleft-sentences', name: 'Cleft Sentences', nameES: 'Oraciones Escindidas' },
  { id: 'passive-voice', name: 'Advanced Passive Structures', nameES: 'Estructuras Pasivas Avanzadas' },
  { id: 'reported-speech', name: 'Reported Speech', nameES: 'Estilo Indirecto' },
  { id: 'modal-verbs', name: 'Modal Verbs (Deduction, Obligation)', nameES: 'Verbos Modales' },
  { id: 'relative-clauses', name: 'Defining & Non-defining Relative Clauses', nameES: 'Oraciones de Relativo' },
  { id: 'wish-regret', name: 'Wish, If only, Regrets', nameES: 'Deseos y Arrepentimientos' },
  { id: 'participle-clauses', name: 'Participle Clauses', nameES: 'Cláusulas Participiales' },
  { id: 'future-forms', name: 'Future Forms in Context', nameES: 'Formas del Futuro' },
  { id: 'linking-words', name: 'Advanced Linking Words', nameES: 'Conectores Avanzados' }
];

// ============================================
// TEMAS DE VOCABULARIO B2
// ============================================

export const B2_VOCABULARY_TOPICS = [
  { id: 'work-career', name: 'Work & Career', nameES: 'Trabajo y Carrera' },
  { id: 'education', name: 'Education & Learning', nameES: 'Educación y Aprendizaje' },
  { id: 'technology', name: 'Technology & Innovation', nameES: 'Tecnología e Innovación' },
  { id: 'environment', name: 'Environment & Sustainability', nameES: 'Medio Ambiente' },
  { id: 'health', name: 'Health & Wellbeing', nameES: 'Salud y Bienestar' },
  { id: 'travel', name: 'Travel & Tourism', nameES: 'Viajes y Turismo' },
  { id: 'arts-culture', name: 'Arts & Culture', nameES: 'Arte y Cultura' },
  { id: 'society', name: 'Society & Relationships', nameES: 'Sociedad y Relaciones' },
  { id: 'media', name: 'Media & Communication', nameES: 'Medios y Comunicación' },
  { id: 'science', name: 'Science & Research', nameES: 'Ciencia e Investigación' },
  { id: 'phrasal-verbs', name: 'Phrasal Verbs', nameES: 'Verbos Frasales' },
  { id: 'collocations', name: 'Common Collocations', nameES: 'Colocaciones Comunes' },
  { id: 'idioms', name: 'Idioms & Expressions', nameES: 'Modismos y Expresiones' }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getExerciseTypeConfig(type: ExerciseType): ExerciseTypeConfig | undefined {
  return EXERCISE_TYPE_CATALOG.find(config => config.id === type);
}

export function getExercisesByCategory(category: ExerciseCategory): ExerciseTypeConfig[] {
  return EXERCISE_TYPE_CATALOG.filter(config => config.category === category);
}

export function getAllCategories(): ExerciseCategory[] {
  return Array.from(new Set(EXERCISE_TYPE_CATALOG.map(config => config.category)));
}

export interface GenerateExerciseRequest {
  exerciseType: ExerciseType;
  topic?: string;
  difficulty: DifficultyLevel;
  level: CEFRLevel;
  count?: number; // Número de ejercicios a generar
  customPrompt?: string; // Prompt adicional del usuario
}

export interface GeneratedExercise {
  id: string;
  type: ExerciseType;
  category: ExerciseCategory;
  topic: string;
  difficulty: DifficultyLevel;
  level: CEFRLevel;
  content: any; // El contenido varía según el tipo
  createdAt: Date;
  estimatedTime: number;
}
