// Curso B2 Preparación de Exámenes - Estructura Completa
// Basado en curriculum-data.ts B2 Level

// Import B2 improvements exercises
import { 
  OPEN_CLOZE_EXERCISES 
} from './b2-improvements-part1-open-cloze';

import { 
  GAPPED_TEXT_EXERCISES 
} from './b2-improvements-part2-gapped-text';

import { 
  MULTIPLE_MATCHING_EXERCISES 
} from './b2-improvements-part3-multiple-matching';

import { 
  KEY_WORD_TRANSFORMATION_EXERCISES 
} from './b2-improvements-part4-key-transformations';

import { 
  MULTIPLE_CHOICE_CLOZE_EXERCISES 
} from './b2-improvements-part5-multiple-choice-cloze';

export type ExerciseType = 
  | 'reading'
  | 'writing'
  | 'listening'
  | 'speaking'
  | 'grammar'
  | 'vocabulary'
  | 'pronunciation'
  | 'pronunciation-practice' // NUEVO: Pronunciación con evaluación real
  | 'key-word-transformation'
  | 'word-formation'
  | 'multiple-choice-cloze'
  | 'open-cloze' // NUEVO: Open Cloze (FCE Part 2)
  | 'gapped-text' // NUEVO: Gapped Text (FCE Part 6)
  | 'multiple-matching' // NUEVO: Multiple Matching (FCE Part 7)
  | 'sentence-completion'
  | 'error-identification'
  | 'paraphrasing'
  | 'collocation-matching'
  | 'phrasal-verbs'
  | 'idioms-expressions'
  | 'summary-writing'
  | 'gap-fill-text'
  | 'sentence-reordering';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface VoiceRecordingExercise {
  id: string;
  type: 'speaking' | 'pronunciation';
  prompt: string;
  targetText?: string; // Para ejercicios de pronunciación
  timeLimit?: number; // segundos
  evaluationCriteria: {
    pronunciation: boolean;
    fluency: boolean;
    grammar: boolean;
    vocabulary: boolean;
  };
  modelAudioUrl?: string; // Audio de ejemplo
  hints?: string[];
}

export interface ListeningExercise {
  id: string;
  type: 'listening';
  audioUrl: string;
  transcript?: string;
  duration: number; // segundos
  questions: Question[];
  allowReplay: boolean;
  maxReplays?: number;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'short-answer' | 'essay';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  acceptableAnswers?: string[]; // Alternative acceptable answers for flexible validation
  explanation?: string;
  points: number;
}

export interface ReadingExercise {
  id: string;
  type: 'reading';
  title: string;
  text: string;
  wordCount: number;
  readingTime: number; // minutos estimados
  questions: Question[];
  vocabularyHelp?: { word: string; definition: string }[];
}

export interface WritingExercise {
  id: string;
  type: 'writing';
  prompt: string;
  writingType: 'essay' | 'article' | 'email' | 'review' | 'report';
  minWords: number;
  maxWords: number;
  timeLimit: number; // minutos
  rubric: {
    content: number;
    organization: number;
    grammar: number;
    vocabulary: number;
  };
  exampleResponse?: string;
  tips?: string[];
}

export interface GrammarExercise {
  id: string;
  type: 'grammar';
  title: string;
  grammarPoint: string;
  explanation: string;
  examples: string[];
  questions: Question[];
}

export interface VocabularyExercise {
  id: string;
  type: 'vocabulary';
  title: string;
  vocabularySet: { word: string; definition: string; example: string }[];
  questions: Question[];
}

// NUEVO: Ejercicio de Práctica de Pronunciación con Evaluación Real
export interface PronunciationPracticeExercise {
  id: string;
  type: 'pronunciation-practice';
  title: string;
  instructions: string;
  targetSentences: {
    sentence: string;
    translation: string; // Traducción para ayudar a comprender
    phonetic?: string; // Transcripción fonética opcional
    audioUrl?: string; // Audio modelo nativo
  }[];
  focusPoints: string[]; // Puntos de pronunciación en los que enfocarse
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit?: number; // Tiempo sugerido en segundos
}

// NUEVOS TIPOS DE EJERCICIOS PARA CAMBRIDGE B2 FIRST (FCE)

export interface KeyWordTransformation {
  id: string;
  sentence: string;
  keyWord: string;
  startOfAnswer: string;
  correctAnswer: string;
  explanation: string;
  points: number;
}

export interface KeyWordTransformationExercise {
  id: string;
  type: 'key-word-transformation';
  title: string;
  instructions: string;
  transformations: KeyWordTransformation[];
}

export interface WordFormation {
  id: string;
  sentence: string;
  promptWord: string;
  correctAnswer: string;
  explanation: string;
  points: number;
}

export interface WordFormationExercise {
  id: string;
  type: 'word-formation';
  title: string;
  instructions: string;
  formations: WordFormation[];
}

export interface ClozeQuestion {
  id: string;
  gapNumber: number;
  options: string[];
  correctAnswer: string;
  explanation: string;
  points: number;
}

export interface MultipleChoiceClozeExercise {
  id: string;
  type: 'multiple-choice-cloze';
  title: string;
  instructions: string;
  text: string; // Texto con marcadores como {{1}}, {{2}}, etc.
  questions: ClozeQuestion[];
}

export interface SentenceCompletionExercise {
  id: string;
  type: 'sentence-completion';
  title: string;
  instructions: string;
  sentences: {
    id: string;
    prompt: string;
    correctCompletion: string;
    options?: string[];
    explanation?: string;
    points: number;
  }[];
}

export interface ErrorIdentificationExercise {
  id: string;
  type: 'error-identification';
  title: string;
  instructions: string;
  sentences: {
    id: string;
    sentence: string;
    hasError: boolean;
    errorWord?: string;
    correction?: string;
    explanation?: string;
    points: number;
  }[];
}

export interface ParaphrasingExercise {
  id: string;
  type: 'paraphrasing';
  title: string;
  instructions: string;
  items: {
    id: string;
    originalSentence: string;
    correctParaphrase: string;
    alternatives?: string[];
    explanation?: string;
    points: number;
  }[];
}

export interface CollocationMatchingExercise {
  id: string;
  type: 'collocation-matching';
  title: string;
  instructions: string;
  pairs: {
    id: string;
    word: string;
    correctMatch: string;
    distractors: string[];
    example?: string;
    points: number;
  }[];
}

export interface PhrasalVerbsExercise {
  id: string;
  type: 'phrasal-verbs';
  title: string;
  instructions: string;
  items: {
    id: string;
    sentence: string;
    phrasalVerb: string;
    meaning: string;
    correctAnswer: string;
    options?: string[];
    explanation?: string;
    points: number;
  }[];
}

export interface IdiomsExpressionsExercise {
  id: string;
  type: 'idioms-expressions';
  title: string;
  instructions: string;
  items: {
    id: string;
    context: string;
    idiom: string;
    meaning: string;
    correctUsage: string;
    options?: string[];
    explanation?: string;
    points: number;
  }[];
}

export interface SummaryWritingExercise {
  id: string;
  type: 'summary-writing';
  title: string;
  instructions: string;
  sourceText: string;
  targetWordCount: number;
  minWords: number;
  maxWords: number;
  keyPoints: string[];
  rubric: {
    content: number;
    conciseness: number;
    accuracy: number;
    grammar: number;
  };
}

export interface GapFillTextExercise {
  id: string;
  type: 'gap-fill-text';
  title: string;
  instructions: string;
  text: string; // Texto con marcadores como {{1}}, {{2}}, etc.
  gaps: {
    id: string;
    gapNumber: number;
    correctAnswer: string;
    acceptableAlternatives?: string[];
    explanation?: string;
    points: number;
  }[];
}

export interface OpenClozeExercise {
  id: string;
  type: 'open-cloze';
  title: string;
  instructions: string;
  text: string; // Texto con marcadores (1)___, (2)___, etc.
  gaps: {
    id: number;
    correctAnswer: string;
    explanation?: string;
  }[];
  points?: number;
}

export interface SentenceReorderingExercise {
  id: string;
  type: 'sentence-reordering';
  title: string;
  instructions: string;
  items: {
    id: string;
    shuffledSentences: string[];
    correctOrder: number[];
    context?: string;
    explanation?: string;
    points: number;
  }[];
}

export type Exercise = 
  | VoiceRecordingExercise
  | ListeningExercise
  | ReadingExercise
  | WritingExercise
  | GrammarExercise
  | VocabularyExercise
  | KeyWordTransformationExercise
  | WordFormationExercise
  | MultipleChoiceClozeExercise
  | PronunciationPracticeExercise
  | SentenceCompletionExercise
  | ErrorIdentificationExercise
  | ParaphrasingExercise
  | CollocationMatchingExercise
  | PhrasalVerbsExercise
  | IdiomsExpressionsExercise
  | SummaryWritingExercise
  | GapFillTextExercise
  | OpenClozeExercise
  | SentenceReorderingExercise;

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: number; // minutos
  objectives: string[];
  exercises: Exercise[];
  completed?: boolean;
  score?: number;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string; // "4-5 semanas"
  topics: string[];
  grammar: string[];
  vocabulary: string[];
  lessons: Lesson[];
  examPractice?: {
    mockExam: boolean;
    examDuration: number;
    parts: string[];
  };
}

export interface CourseProgress {
  userId: string;
  courseId: string;
  level: string;
  currentModule: number;
  currentLesson: string;
  completedLessons: string[];
  scores: { [lessonId: string]: number };
  totalProgress: number; // 0-100
  lastAccessed: Date;
  recordings?: {
    [exerciseId: string]: {
      audioBlob: string;
      score: number;
      feedback: string;
      timestamp: Date;
    };
  };
}

// ============================================
// MÓDULO 1: NARRATIVAS COMPLEJAS Y ANÁLISIS
// ============================================

export const MODULE_1_LESSONS: Lesson[] = [
  {
    id: 'b2-m1-l1',
    title: 'Lección 1: Past Perfect y Past Perfect Continuous',
    description: 'Domina el uso de tiempos perfectos en narrativas complejas',
    duration: 90,
    objectives: [
      'Usar Past Perfect para acciones anteriores a otras en el pasado',
      'Aplicar Past Perfect Continuous para acciones prolongadas en el pasado',
      'Distinguir cuándo usar cada tiempo verbal',
      'Narrar experiencias complejas con precisión temporal'
    ],
    exercises: [
      {
        id: 'b2-m1-l1-grammar-1',
        type: 'grammar',
        title: 'Past Perfect: Formación y Uso',
        grammarPoint: 'Past Perfect (had + past participle)',
        explanation: 'El Past Perfect se usa para indicar que una acción ocurrió antes de otra acción en el pasado. Estructura: Subject + had + past participle.\nEjemplo: "By the time I arrived, they had already left." (Cuando llegué, ellos ya se habían ido)',
        examples: [
          'She had finished her homework before dinner.',
          'They had never seen the ocean until last year.',
          'Had you met him before the conference?',
          'We hadn\'t eaten anything all day, so we were very hungry.',
          'The movie had already started when we got to the cinema.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'By 2010, she ___ in London for five years.',
            correctAnswer: 'had lived',
            explanation: 'Usamos Past Perfect porque la acción (vivir en Londres) comenzó y terminó antes de un punto específico en el pasado (2010).',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'When I called her, she ___ (already/leave) the office.',
            correctAnswer: 'had already left',
            explanation: 'Usamos Past Perfect porque la acción de irse ocurrió antes de que yo llamara.',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Which sentence is correct?',
            options: [
              'After he ate dinner, he had watched TV.',
              'After he had eaten dinner, he watched TV.',
              'After he has eaten dinner, he watched TV.',
              'After he was eating dinner, he watched TV.'
            ],
            correctAnswer: 'After he had eaten dinner, he watched TV.',
            explanation: 'La cena (had eaten) ocurrió primero, luego vio TV (watched). Past Perfect + Past Simple.',
            points: 1
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'Rewrite using Past Perfect: "I lost my keys. Then I found them under the sofa."',
            correctAnswer: 'I had lost my keys, but then I found them under the sofa.',
            explanation: 'Perdí las llaves primero (had lost), luego las encontré (found).',
            points: 2
          },
          {
            id: 'q5',
            type: 'fill-blank',
            question: 'They ___ never ___ such a beautiful place before visiting Iceland.',
            correctAnswer: 'had...seen',
            explanation: 'Experiencia previa al viaje a Islandia requiere Past Perfect.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l1-grammar-2',
        type: 'grammar',
        title: 'Past Perfect Continuous: Acciones Prolongadas',
        grammarPoint: 'Past Perfect Continuous (had been + -ing)',
        explanation: 'Usamos Past Perfect Continuous para enfatizar la duración de una acción que estaba en progreso antes de otra acción en el pasado. Estructura: Subject + had been + verb-ing.\nEjemplo: "I had been working all night, so I was exhausted."',
        examples: [
          'She had been studying for three hours when I arrived.',
          'They had been living in Paris before they moved to Rome.',
          'Had you been waiting long when the bus finally came?',
          'He was tired because he had been running.',
          'We had been trying to contact you all morning.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'She was out of breath because she ___ (run).',
            correctAnswer: 'had been running',
            acceptableAnswers: ['had been running', 'had run'],
            explanation: 'Enfatizamos la duración de la actividad (correr) que causó el resultado (sin aliento).',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'How long ___ (you/wait) when the train arrived?',
            correctAnswer: 'had you been waiting',
            acceptableAnswers: ['had you been waiting', 'had you waited'],
            explanation: 'Pregunta sobre la duración de la espera antes de la llegada del tren.',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Choose the correct question:',
            options: [
              'The children played outside all afternoon.',
              'The children had been playing outside all afternoon when it started to rain.',
              'The children had played outside all afternoon.',
              'Both b and c are correct.'
            ],
            correctAnswer: 'Both b and c are correct.',
            explanation: 'Ambas son correctas. "Had been playing" enfatiza duración; "had played" es más neutral.',
            points: 3
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'Explain the difference: "He had worked" vs "He had been working"',
            correctAnswer: 'Had worked = acción completada. Had been working = énfasis en duración/proceso.',
            acceptableAnswers: [
              'Had worked = acción completada. Had been working = énfasis en duración/proceso.',
              'He had worked: finished action. He had been working: continuous action.',
              'Had worked = acción terminada. Had been working = duración/proceso.',
              'Past Perfect = acción terminada. Past Perfect Continuous = duración/proceso.'
            ],
            explanation: 'Past Perfect = acción terminada. Past Perfect Continuous = duración/proceso.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l1-reading-1',
        type: 'reading',
        title: 'Reading: A Life-Changing Journey',
        text: `Maria had been dreaming of traveling to Japan for years before she finally saved enough money to make the trip. By the time she boarded the plane in Madrid, she had studied Japanese for six months and had read countless books about Japanese culture.

During her first week in Tokyo, Maria realized that nothing could have prepared her for the reality of being immersed in such a different culture. She had been learning the language from textbooks, but understanding native speakers in real conversations was much more challenging than she had anticipated.

One afternoon, Maria got lost in Shibuya. She had been walking for over an hour when she finally decided to ask for directions. A kind elderly woman, who had noticed Maria looking confused, approached her with a warm smile. Although they had difficulty communicating at first, the woman patiently helped Maria find her way back to her hotel.

That evening, Maria reflected on her day. She had experienced something she had been hoping for: a genuine connection with a local person. The language barrier, which she had feared would be insurmountable, had actually led to one of the most memorable moments of her trip. She had learned that sometimes the best experiences come from unexpected challenges.

By the end of her three-week stay, Maria had visited temples, tried countless new foods, and made several friends. More importantly, she had gained confidence in her ability to navigate unfamiliar situations. The trip that she had been planning for so long had exceeded all her expectations and had changed her perspective on life.`,
        wordCount: 267,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'What had Maria done before traveling to Japan?',
            correctAnswer: 'She had studied Japanese for six months',
            acceptableAnswers: [
              'She had studied Japanese for six months',
              'she had studied Japanese for six month and had read countless books about Japanese culture',
              'She had studied Japanese',
              'studied Japanese for six months',
              'She studied Japanese for six months'
            ],
            explanation: 'El texto dice: "she had studied Japanese for six months"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: Maria found it easy to understand native Japanese speakers.',
            correctAnswer: 'False',
            explanation: 'El texto indica que entender hablantes nativos era "much more challenging than she had anticipated"',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Why did the elderly woman approach Maria?',
            options: [
              'Maria had asked her for help',
              'The woman had noticed Maria looking confused',
              'They knew each other from before',
              'Maria was blocking the sidewalk'
            ],
            correctAnswer: 'The woman had noticed Maria looking confused',
            explanation: 'El texto dice: "A kind elderly woman, who had noticed Maria looking confused, approached her"',
            points: 1
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'What did Maria learn from getting lost in Shibuya?',
            correctAnswer: 'She learned that unexpected challenges can lead to the best experiences / genuine connections.',
            explanation: 'El texto menciona que aprendió que "sometimes the best experiences come from unexpected challenges"',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'How did Maria feel about her trip by the end?',
            correctAnswer: 'It exceeded her expectations and changed her perspective on life',
            acceptableAnswers: [
              'It exceeded her expectations and changed her perspective on life',
              'The trip had exceeded all her expectations and had changed her perspective on life',
              'exceeded her expectations and changed her perspective',
              'It exceeded her expectations',
              'changed her perspective on life'
            ],
            explanation: 'El texto concluye: "had exceeded all her expectations and had changed her perspective on life"',
            points: 2
          },
          {
            id: 'q6',
            type: 'short-answer',
            question: 'Identify THREE things Maria had done in the past perfect tense before specific moments in the story.',
            correctAnswer: 'Had been dreaming, had studied, had read / had been learning / had been walking / had been hoping / had been planning',
            explanation: 'Varios ejemplos de Past Perfect y Past Perfect Continuous en el texto.',
            points: 3
          }
        ],
        vocabularyHelp: [
          { word: 'immersed', definition: 'completely involved or surrounded by something' },
          { word: 'anticipated', definition: 'expected or predicted' },
          { word: 'insurmountable', definition: 'too great to be overcome' },
          { word: 'navigate', definition: 'find your way through a difficult situation' },
          { word: 'perspective', definition: 'a particular way of viewing things' }
        ]
      },
      {
        id: 'b2-m1-l1-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m1-l1-listening-1.mp3', // Placeholder
        duration: 180,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Interviewer: So, tell me about your experience working abroad.

Sarah: Well, I had been thinking about working overseas for quite some time before I actually made the decision to apply for jobs in Singapore. I had been working in marketing for my company in London for five years, and I felt like I needed a new challenge.

Interviewer: What made you choose Singapore specifically?

Sarah: To be honest, I had never considered Asia before. But then I attended a conference where I met some colleagues from our Singapore office. They had been working there for a couple of years and couldn't stop talking about how amazing it was. By the time the conference ended, I had already decided that I wanted to explore opportunities there.

Interviewer: And how did you find the transition?

Sarah: It was definitely challenging at first. I had prepared as much as I could – I had read about the culture, learned some basic phrases, and even visited once before moving. But still, nothing could have fully prepared me for the reality of living there. I had been living in London my entire life, so adapting to such a different culture was quite a shock initially.

Interviewer: What was the biggest challenge?

Sarah: Probably the work culture. I had expected some differences, but I hadn't realized how much the business environment would differ from what I was used to. I had been accustomed to a very direct communication style in London, but in Singapore, people tend to be more indirect and diplomatic.

Interviewer: And would you recommend the experience to others?

Sarah: Absolutely! By the end of my two-year contract, I had grown both personally and professionally in ways I never could have if I had stayed in London. I had made lifelong friends, learned about a completely different way of doing business, and gained a much broader perspective on the world.`,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'How long had Sarah been working in London before considering overseas opportunities?',
            correctAnswer: 'Five years',
            explanation: 'Sarah mentions: "I had been working in marketing for my company in London for five years"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: Sarah had always wanted to work in Asia.',
            correctAnswer: 'False',
            explanation: 'She says: "I had never considered Asia before"',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'What inspired Sarah to consider Singapore?',
            options: [
              'A job advertisement',
              'Meeting colleagues from Singapore at a conference',
              'A recommendation from her manager',
              'She had always wanted to work there'
            ],
            correctAnswer: 'Meeting colleagues from Singapore at a conference',
            explanation: 'Sarah explica: "I attended a conference where I met some colleagues from our Singapore office"',
            points: 1
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'What did Sarah find most challenging about working in Singapore?',
            correctAnswer: 'The work culture / different communication style / more indirect and diplomatic communication',
            explanation: 'She specifically mentions the business environment and communication style differences.',
            points: 2
          },
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'How long did Sarah work in Singapore?',
            correctAnswer: 'Two years',
            explanation: 'She mentions "my two-year contract"',
            points: 1
          },
          {
            id: 'q6',
            type: 'true-false',
            question: 'True or False: Sarah regrets her decision to work abroad.',
            correctAnswer: 'False',
            explanation: 'She says "Absolutely!" when asked if she would recommend it, and describes positive growth.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l1-speaking-1',
        type: 'speaking',
        prompt: 'Describe a time when you had prepared for something but it turned out differently than expected. Use Past Perfect and Past Perfect Continuous to explain what you had done before the event and what actually happened. Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        targetWords: ['had been', 'had prepared', 'had studied', 'had organized', 'turned out', 'expected'],
        expectedResponse: 'A personal story using Past Perfect to describe preparation and Past Simple to describe the actual outcome.',
        hints: [
          'Start with background: "I had been preparing for..."',
          'Explain your preparation: "I had studied/practiced/organized..."',
          'Describe what happened: "When the day arrived..."',
          'Reflect on the outcome: "Even though I had planned everything..."',
          'Use time expressions: by the time, before, after, when, while'
        ],
        targetWords: [
          'had been preparing',
          'had studied',
          'had practiced',
          'had organized',
          'had planned',
          'turned out',
          'expected',
          'actually happened',
          'by the time',
          'even though'
        ],
        expectedResponse: 'A 2-3 minute narrative describing a past preparation and unexpected outcome. Should include: (1) Background using Past Perfect Continuous (\"I had been preparing/studying/practicing\"), (2) Specific preparations with Past Perfect (\"I had organized/studied/planned\"), (3) The unexpected outcome with Past Simple (\"What actually happened was...\"), (4) Reflection using Past Perfect (\"Even though I had planned everything...\"), (5) Use of time expressions (by the time, before, after, when, while). Demonstrates understanding of sequence of past events and ability to express preparation vs. reality.'
      },
      {
        id: 'b2-m1-l1-pronunciation-1',
        type: 'pronunciation',
        prompt: 'Practice pronouncing these sentences with correct Past Perfect contractions and rhythm:',
        targetText: `I'd been waiting for hours before she arrived.
They'd never seen anything like it.
We'd already eaten when you called.
She'd been studying all night.
Had you finished your homework?`,
        timeLimit: 120,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: false,
          vocabulary: false
        },
        modelAudioUrl: '/audio/b2-m1-l1-pronunciation-model.mp3',
        hints: [
          'Contract "had" to "d" in positive sentences',
          'Stress the main verbs (waiting, seen, eaten, studying, finished)',
          'Use falling intonation for statements, rising for questions',
          'Link words smoothly: "I d_been", "they d_never"'
        ]
      },
      {
        id: 'b2-m1-l1-writing-1',
        type: 'writing',
        prompt: 'Write a personal narrative (180-220 words) about an important experience in your life. Use Past Perfect and Past Perfect Continuous to provide background information and show the sequence of events clearly.',
        writingType: 'essay',
        minWords: 180,
        maxWords: 220,
        timeLimit: 30,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Start with an engaging opening that sets the scene',
          'Use Past Perfect for background/earlier actions',
          'Use Past Simple for main events',
          'Include specific details and examples',
          'End with reflection or conclusion',
          'Check for variety in sentence structure'
        ],
        exampleResponse: `Moving to university was one of the most transformative experiences of my life. I had been living with my parents in a small town for eighteen years, and I had never really been away from home for more than a few days. Before starting university, I had been feeling both excited and terrified about the change that was coming.

During my first week, everything seemed overwhelming. I had prepared myself mentally, or so I thought, but the reality of being independent was much more challenging than I had anticipated. I had been sharing a bedroom with my sister my entire life, so having my own space felt strange at first.

However, by the end of the first semester, I had adapted remarkably well. I had made close friends, joined two societies, and had even started a part-time job. The person I had been before university seemed like a distant memory. I had grown more confident and independent than I ever thought possible.`
      },
      // KEY WORD TRANSFORMATIONS - FCE Part 4 Practice
      {
        id: 'b2-m1-l1-keytransform-1',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Past Perfect Practice',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt1',
            question: 'She learned Spanish before she moved to Madrid.',
            keyWord: 'had',
            startOfAnswer: 'She',
            correctAnswer: 'had learned Spanish before',
            explanation: 'Use Past Perfect (had learned) to show the action completed before moving.',
            points: 2
          },
          {
            id: 'kt2',
            question: 'It was the first time he visited Japan.',
            keyWord: 'never',
            startOfAnswer: 'He',
            correctAnswer: 'had never visited Japan',
            explanation: 'Past Perfect with "never" to express lack of prior experience.',
            points: 2
          },
          {
            id: 'kt3',
            sentence: 'They lost the match because they didn\'t train enough.',
            keyWord: 'if',
            startOfAnswer: 'They wouldn\'t have lost',
            correctAnswer: 'if they had trained',
            explanation: 'Third conditional: past condition (had trained) with past result (would have lost).',
            points: 2
          },
          {
            id: 'kt4',
            sentence: 'I arrived late because my alarm didn\'t ring.',
            keyWord: 'have',
            startOfAnswer: 'I wouldn\'t',
            correctAnswer: 'have arrived late if',
            explanation: 'Third conditional: different word order, same structure.',
            points: 2
          },
          {
            id: 'kt5',
            question: 'She was tired because she had been working all night.',
            keyWord: 'been',
            startOfAnswer: 'She',
            correctAnswer: 'had been working all',
            explanation: 'Past Perfect Continuous emphasizes duration of the activity.',
            points: 2
          },
          {
            id: 'kt6',
            question: 'We expected the exam to be easier.',
            keyWord: 'than',
            startOfAnswer: 'The exam was more',
            correctAnswer: 'difficult than we had',
            explanation: 'Comparative structure with Past Perfect to express expectation.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l1-keytransform-2',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Mixed Structures',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt7',
            question: 'I regret not studying harder for the test.',
            keyWord: 'wish',
            startOfAnswer: 'I',
            correctAnswer: 'wish I had studied',
            explanation: 'Use "wish + Past Perfect" to express regret about the past.',
            points: 2
          },
          {
            id: 'kt8',
            sentence: 'It wasn\'t necessary for you to buy a gift.',
            keyWord: 'have',
            startOfAnswer: 'You',
            correctAnswer: 'didn\'t have to buy',
            explanation: 'Use "didn\'t have to" to express lack of necessity in the past.',
            points: 2
          },
          {
            id: 'kt9',
            question: 'Perhaps she missed the train.',
            keyWord: 'might',
            startOfAnswer: 'She',
            correctAnswer: 'might have missed the',
            explanation: 'Modal perfect (might have + past participle) for past possibility.',
            points: 2
          },
          {
            id: 'kt10',
            question: 'Someone stole my bike last night.',
            keyWord: 'was',
            startOfAnswer: 'My bike',
            correctAnswer: 'was stolen last night',
            explanation: 'Passive voice: was + past participle.',
            points: 2
          },
          {
            id: 'kt11',
            question: 'They say that she is the best player in the team.',
            keyWord: 'said',
            startOfAnswer: 'She',
            correctAnswer: 'is said to be',
            explanation: 'Impersonal passive: "is said to be" (reporting structure).',
            points: 2
          },
          {
            id: 'kt12',
            sentence: 'I\'m certain he took the money.',
            keyWord: 'must',
            startOfAnswer: 'He',
            correctAnswer: 'must have taken the',
            explanation: 'Modal perfect (must have + past participle) for strong deduction about the past.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l1-wordform-1',
        type: 'word-formation',
        title: 'Word Formation: Life Transitions',
        text: `Making major life changes requires careful (1. CONSIDER)_____ and planning. Many people find the process both (2. EXCITE)_____ and overwhelming. It's important to approach transitions with a positive (3. THINK)_____ rather than dwelling on potential (4. DIFFICULT)_____. Research shows that (5. SUCCESS)_____ adaptation depends largely on mental (6. FLEXIBLE)_____. Those who maintain an (7. OPTIMISM)_____ outlook tend to navigate changes more smoothly. However, it's also (8. ESSENCE)_____ to acknowledge challenges realistically and seek support when needed.`,
        questions: [
          {
            id: 'q1',
            gapNumber: 1,
            baseWord: 'CONSIDER',
            correctAnswer: 'consideration',
            acceptableAnswers: ['consideration'],
            explanation: 'Need noun form: "careful consideration" (the act of thinking carefully about something).',
            wordType: 'noun',
            transformation: 'verb → noun (-ation)',
            points: 1
          },
          {
            id: 'q2',
            gapNumber: 2,
            baseWord: 'EXCITE',
            correctAnswer: 'exciting',
            acceptableAnswers: ['exciting'],
            explanation: 'Need adjective form: "exciting" (causing excitement). Not "excited" because the process causes the feeling.',
            wordType: 'adjective',
            transformation: 'verb → adjective (-ing)',
            points: 1
          },
          {
            id: 'q3',
            gapNumber: 3,
            baseWord: 'THINK',
            correctAnswer: 'mindset',
            acceptableAnswers: ['mindset', 'thinking'],
            explanation: 'Need noun form: "positive mindset/thinking" (way of thinking about things).',
            wordType: 'noun',
            transformation: 'verb → noun (compound/gerund)',
            points: 1
          },
          {
            id: 'q4',
            gapNumber: 4,
            baseWord: 'DIFFICULT',
            correctAnswer: 'difficulties',
            acceptableAnswers: ['difficulties'],
            explanation: 'Need noun plural: "difficulties" (problems or challenges).',
            wordType: 'noun',
            transformation: 'adjective → noun (-y → -ies)',
            points: 1
          },
          {
            id: 'q5',
            gapNumber: 5,
            baseWord: 'SUCCESS',
            correctAnswer: 'successful',
            acceptableAnswers: ['successful'],
            explanation: 'Need adjective form: "successful adaptation" (achieving desired results).',
            wordType: 'adjective',
            transformation: 'noun → adjective (-ful)',
            points: 1
          },
          {
            id: 'q6',
            gapNumber: 6,
            baseWord: 'FLEXIBLE',
            correctAnswer: 'flexibility',
            acceptableAnswers: ['flexibility'],
            explanation: 'Need noun form: "mental flexibility" (the quality of being flexible).',
            wordType: 'noun',
            transformation: 'adjective → noun (-ible → -ility)',
            points: 1
          },
          {
            id: 'q7',
            gapNumber: 7,
            baseWord: 'OPTIMISM',
            correctAnswer: 'optimistic',
            acceptableAnswers: ['optimistic'],
            explanation: 'Need adjective form: "optimistic outlook" (hopeful and positive).',
            wordType: 'adjective',
            transformation: 'noun → adjective (-istic)',
            points: 1
          },
          {
            id: 'q8',
            gapNumber: 8,
            baseWord: 'ESSENCE',
            correctAnswer: 'essential',
            acceptableAnswers: ['essential'],
            explanation: 'Need adjective form: "essential to acknowledge" (absolutely necessary).',
            wordType: 'adjective',
            transformation: 'noun → adjective (-tial)',
            points: 1
          }
        ],
        focusAreas: ['Noun formation', 'Adjective formation', 'Suffix patterns']
      },
      {
        id: 'b2-m1-l1-wordform-2',
        type: 'word-formation',
        title: 'Word Formation: Personal Development',
        text: `Personal growth is a (1. CONTINUE)_____ journey that requires (2. DEDICATE)_____ and self-awareness. Many experts emphasize the (3. IMPORTANT)_____ of setting realistic goals. Rather than pursuing (4. PERFECT)_____, it's more productive to focus on gradual (5. IMPROVE)_____. Developing new skills often involves moments of (6. COMFORT)_____, which is actually a sign of progress. The most (7. INFLUENCE)_____ factor in personal development is often our (8. WILLING)_____ to learn from mistakes and adapt our approach.`,
        questions: [
          {
            id: 'q1',
            gapNumber: 1,
            baseWord: 'CONTINUE',
            correctAnswer: 'continuous',
            acceptableAnswers: ['continuous', 'continuing'],
            explanation: 'Need adjective form: "continuous journey" (happening without interruption).',
            wordType: 'adjective',
            transformation: 'verb → adjective (-ous/-ing)',
            points: 1
          },
          {
            id: 'q2',
            gapNumber: 2,
            baseWord: 'DEDICATE',
            correctAnswer: 'dedication',
            acceptableAnswers: ['dedication'],
            explanation: 'Need noun form: "requires dedication" (the quality of being committed to something).',
            wordType: 'noun',
            transformation: 'verb → noun (-ation)',
            points: 1
          },
          {
            id: 'q3',
            gapNumber: 3,
            baseWord: 'IMPORTANT',
            correctAnswer: 'importance',
            acceptableAnswers: ['importance'],
            explanation: 'Need noun form: "the importance of" (the state of being important).',
            wordType: 'noun',
            transformation: 'adjective → noun (-ance)',
            points: 1
          },
          {
            id: 'q4',
            gapNumber: 4,
            baseWord: 'PERFECT',
            correctAnswer: 'perfection',
            acceptableAnswers: ['perfection'],
            explanation: 'Need noun form: "pursuing perfection" (the state of being perfect).',
            wordType: 'noun',
            transformation: 'adjective → noun (-ion)',
            points: 1
          },
          {
            id: 'q5',
            gapNumber: 5,
            baseWord: 'IMPROVE',
            correctAnswer: 'improvement',
            acceptableAnswers: ['improvement', 'improvements'],
            explanation: 'Need noun form: "focus on improvement" (the act of making or becoming better).',
            wordType: 'noun',
            transformation: 'verb → noun (-ment)',
            points: 1
          },
          {
            id: 'q6',
            gapNumber: 6,
            baseWord: 'COMFORT',
            correctAnswer: 'discomfort',
            acceptableAnswers: ['discomfort'],
            explanation: 'Need negative noun: "moments of discomfort" (absence of comfort). Prefix dis- indicates negation.',
            wordType: 'noun',
            transformation: 'noun → negative noun (dis-)',
            points: 1
          },
          {
            id: 'q7',
            gapNumber: 7,
            baseWord: 'INFLUENCE',
            correctAnswer: 'influential',
            acceptableAnswers: ['influential'],
            explanation: 'Need adjective form: "influential factor" (having great influence).',
            wordType: 'adjective',
            transformation: 'noun → adjective (-tial)',
            points: 1
          },
          {
            id: 'q8',
            gapNumber: 8,
            baseWord: 'WILLING',
            correctAnswer: 'willingness',
            acceptableAnswers: ['willingness'],
            explanation: 'Need noun form: "our willingness to learn" (the quality of being ready to do something).',
            wordType: 'noun',
            transformation: 'adjective → noun (-ness)',
            points: 1
          }
        ],
        focusAreas: ['Noun suffixes', 'Negative prefixes', 'Adjective to noun']
      },
      {
        id: 'b2-m1-l1-sentence-completion-1',
        type: 'sentence-completion',
        title: 'Complete the Sentences with Past Perfect',
        instructions: 'Complete each sentence with the correct form of the verb in brackets using Past Perfect.',
        sentences: [
          {
            id: 'sc1',
            prompt: 'By the time we arrived at the cinema, the movie ___ (already/start).',
            correctCompletion: 'had already started',
            explanation: 'The movie started before we arrived, so we use Past Perfect.',
            points: 1
          },
          {
            id: 'sc2',
            prompt: 'She ___ (never/see) such a beautiful sunset before that evening.',
            correctCompletion: 'had never seen',
            explanation: 'This describes an experience before a past moment, requiring Past Perfect.',
            points: 1
          },
          {
            id: 'sc3',
            prompt: 'They were exhausted because they ___ (work) all night.',
            correctCompletion: 'had been working',
            explanation: 'Past Perfect Continuous emphasizes the duration of the action causing their exhaustion.',
            points: 1
          },
          {
            id: 'sc4',
            prompt: 'I ___ (not/finish) my homework when my friends arrived.',
            correctCompletion: 'had not finished',
            explanation: 'The homework was incomplete before the friends arrived, so we use Past Perfect.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l1-sentence-completion-2',
        type: 'sentence-completion',
        title: 'Past Perfect Continuous Practice',
        instructions: 'Choose the correct option to complete each sentence.',
        sentences: [
          {
            id: 'sc1',
            prompt: 'How long ___ before you finally found your keys?',
            correctCompletion: 'had you been looking',
            options: ['did you look', 'were you looking', 'had you looked', 'had you been looking'],
            explanation: 'We use Past Perfect Continuous to emphasize the duration of the search.',
            points: 1
          },
          {
            id: 'sc2',
            prompt: 'The garden was wet because it ___ all morning.',
            correctCompletion: 'had been raining',
            options: ['rained', 'was raining', 'had rained', 'had been raining'],
            explanation: 'Past Perfect Continuous shows the rain continued for some time before the observation.',
            points: 1
          },
          {
            id: 'sc3',
            prompt: 'We ___ for the bus for over an hour when it finally came.',
            correctCompletion: 'had been waiting',
            options: ['waited', 'were waiting', 'had waited', 'had been waiting'],
            explanation: 'The duration of waiting (over an hour) requires Past Perfect Continuous.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l1-error-identification-1',
        type: 'error-identification',
        title: 'Identify Past Perfect Errors',
        instructions: 'Identify if there is an error in each sentence. If there is, provide the correction.',
        sentences: [
          {
            id: 'ei1',
            question: 'When I got home, I realized I have forgotten my keys at work.',
            hasError: true,
            errorWord: 'have forgotten',
            correction: 'had forgotten',
            explanation: 'We need Past Perfect (had forgotten) because forgetting happened before realizing.',
            points: 1
          },
          {
            id: 'ei2',
            question: 'She had been studying English for three years before she moved to London.',
            hasError: false,
            explanation: 'This sentence is correct. Past Perfect Continuous shows the duration of study before moving.',
            points: 1
          },
          {
            id: 'ei3',
            question: 'They have been waiting for two hours when the concert finally started.',
            hasError: true,
            errorWord: 'have been waiting',
            correction: 'had been waiting',
            explanation: 'We need Past Perfect Continuous (had been waiting) because both actions are in the past.',
            points: 1
          },
          {
            id: 'ei4',
            question: 'By 2015, he had lived in five different countries.',
            hasError: false,
            explanation: 'This sentence is correct. Past Perfect is used for experiences before a past point in time.',
            points: 1
          },
          {
            id: 'ei5',
            sentence: 'I was tired because I didn\'t sleep well the night before.',
            hasError: true,
            errorWord: 'didn\'t sleep',
            correction: 'hadn\'t slept',
            explanation: 'Past Perfect (hadn\'t slept) is better here to show the night before was earlier than being tired.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l1-error-identification-2',
        type: 'error-identification',
        title: 'Advanced Past Perfect Error Detection',
        instructions: 'Find and correct errors in these more complex sentences.',
        sentences: [
          {
            id: 'ei1',
            question: 'After she had ate breakfast, she went to work.',
            hasError: true,
            errorWord: 'had ate',
            correction: 'had eaten',
            explanation: 'The past participle of "eat" is "eaten", not "ate".',
            points: 1
          },
          {
            id: 'ei2',
            question: 'He was angry because his team had been losing three games in a row.',
            hasError: true,
            errorWord: 'had been losing',
            correction: 'had lost',
            explanation: 'We use Past Perfect (had lost) for completed actions, not Past Perfect Continuous here.',
            points: 1
          },
          {
            id: 'ei3',
            question: 'We had been living in that house for ten years when we decided to move.',
            hasError: false,
            explanation: 'Correct. Past Perfect Continuous emphasizes the duration (ten years) before deciding to move.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l1-paraphrasing-1',
        type: 'paraphrasing',
        title: 'Paraphrase Using Past Perfect',
        instructions: 'Rewrite each sentence pair as a single sentence using Past Perfect or Past Perfect Continuous.',
        items: [
          {
            id: 'p1',
            originalSentence: 'First, I studied all the documents. Then, I made my decision.',
            correctParaphrase: 'I had studied all the documents before I made my decision.',
            explanation: 'Combine using Past Perfect for the first action, Past Simple for the second.',
            points: 2
          },
          {
            id: 'p2',
            originalSentence: 'She practiced piano for hours every day. That\'s why she performed so well.',
            correctParaphrase: 'She performed so well because she had been practicing piano for hours every day.',
            explanation: 'Past Perfect Continuous emphasizes the ongoing practice that led to the good performance.',
            points: 2
          },
          {
            id: 'p3',
            originalSentence: 'They arrived at the station at 9:05. The train left at 9:00.',
            correctParaphrase: 'When they arrived at the station, the train had already left.',
            explanation: 'The train leaving (9:00) happened before arrival (9:05), so we use Past Perfect.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l1-collocation-matching-1',
        type: 'collocation-matching',
        title: 'Common Collocations with Past Perfect',
        instructions: 'Match each verb with the correct noun to form common collocations.',
        pairs: [
          {
            id: 'cm1',
            word: 'make',
            correctMatch: 'a decision',
            distractors: ['an effort', 'a choice', 'a mistake'],
            example: 'By the time he arrived, I had already made a decision.',
            points: 1
          },
          {
            id: 'cm2',
            word: 'take',
            correctMatch: 'a break',
            distractors: ['a rest', 'a pause', 'a stop'],
            example: 'She had taken a break before continuing with her work.',
            points: 1
          },
          {
            id: 'cm3',
            word: 'reach',
            correctMatch: 'a conclusion',
            distractors: ['a decision', 'an agreement', 'an understanding'],
            example: 'The scientists had reached a conclusion after years of research.',
            points: 1
          },
          {
            id: 'cm4',
            word: 'lose',
            correctMatch: 'touch',
            distractors: ['contact', 'connection', 'communication'],
            example: 'They had lost touch with each other after moving to different cities.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l1-phrasal-verbs-1',
        type: 'phrasal-verbs',
        title: 'Phrasal Verbs in Past Perfect Context',
        instructions: 'Complete each sentence with the correct phrasal verb in Past Perfect form.',
        items: [
          {
            id: 'pv1',
            question: 'She ___ her coat before leaving the house.',
            phrasalVerb: 'put on',
            meaning: 'to wear or dress in something',
            correctAnswer: 'had put on',
            options: ['had put on', 'had put off', 'had put up', 'had put away'],
            explanation: 'Put on = to wear. She wore her coat before leaving.',
            points: 1
          },
          {
            id: 'pv2',
            question: 'They ___ with a brilliant solution by the time the meeting started.',
            phrasalVerb: 'come up',
            meaning: 'to think of or suggest an idea',
            correctAnswer: 'had come up',
            options: ['had come up', 'had come across', 'had come down', 'had come over'],
            explanation: 'Come up with = to think of an idea or solution.',
            points: 1
          },
          {
            id: 'pv3',
            question: 'He ___ smoking a year before we met him.',
            phrasalVerb: 'give up',
            meaning: 'to stop doing something',
            correctAnswer: 'had given up',
            options: ['had given up', 'had given in', 'had given away', 'had given back'],
            explanation: 'Give up = to stop or quit something, especially a habit.',
            points: 1
          },
          {
            id: 'pv4',
            question: 'I ___ an old friend while shopping when I realized we ___ for years.',
            phrasalVerb: 'run into / lose touch',
            meaning: 'to meet by chance / to stop communicating',
            correctAnswer: 'ran into / had lost touch',
            explanation: 'Run into = meet by chance (Past Simple). Lost touch happened before, so Past Perfect.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l1-gap-fill-text-1',
        type: 'gap-fill-text',
        title: 'Past Perfect Text Completion',
        instructions: 'Complete the text with the correct form of the verbs. Use Past Perfect or Past Perfect Continuous.',
        text: `When Sarah arrived at the party, she quickly realized she {{1}} (make) a mistake. Everyone else {{2}} (dress) formally, but she {{3}} (wear) jeans and a t-shirt. She felt embarrassed because she {{4}} (not/read) the invitation carefully. 

Her friend Tom noticed her discomfort and came over. He explained that the dress code {{5}} (change) at the last minute, and many people {{6}} (not/receive) the update. Sarah felt relieved. She {{7}} (worry) unnecessarily for the past hour. Tom {{8}} (be) such a good friend - he always knew how to make her feel better.`,
        gaps: [
          {
            id: 'g1',
            gapNumber: 1,
            correctAnswer: 'had made',
            explanation: 'Past Perfect because making the mistake happened before realizing it.',
            points: 1
          },
          {
            id: 'g2',
            gapNumber: 2,
            correctAnswer: 'had dressed',
            acceptableAlternatives: ['had been dressing'],
            explanation: 'Past Perfect shows others dressed before Sarah arrived.',
            points: 1
          },
          {
            id: 'g3',
            gapNumber: 3,
            correctAnswer: 'was wearing',
            acceptableAlternatives: ['wore', 'had worn'],
            explanation: 'Past Continuous or Past Simple describes what she was wearing at that moment.',
            points: 1
          },
          {
            id: 'g4',
            gapNumber: 4,
            correctAnswer: 'had not read',
            acceptableAlternatives: ['hadn\'t read'],
            explanation: 'Not reading the invitation happened before feeling embarrassed.',
            points: 1
          },
          {
            id: 'g5',
            gapNumber: 5,
            correctAnswer: 'had changed',
            explanation: 'The dress code changed before the party, so Past Perfect.',
            points: 1
          },
          {
            id: 'g6',
            gapNumber: 6,
            correctAnswer: 'had not received',
            acceptableAlternatives: ['hadn\'t received'],
            explanation: 'Not receiving the update happened before the party.',
            points: 1
          },
          {
            id: 'g7',
            gapNumber: 7,
            correctAnswer: 'had been worrying',
            explanation: 'Past Perfect Continuous emphasizes the duration of worrying (past hour).',
            points: 1
          },
          {
            id: 'g8',
            gapNumber: 8,
            correctAnswer: 'had been',
            acceptableAlternatives: ['had always been'],
            explanation: 'Past Perfect describes Tom\'s consistent quality as a friend.',
            points: 1
          }
        ]
      }
    ]
  },
  {
    id: 'b2-m1-l2',
    title: 'Lección 2: Mixed Conditionals y Inversión',
    description: 'Domina estructuras condicionales complejas y énfasis mediante inversión',
    duration: 90,
    objectives: [
      'Formar y usar mixed conditionals correctamente',
      'Aplicar inversión para énfasis (Never have I seen...)',
      'Distinguir entre diferentes tipos de condicionales',
      'Crear oraciones sofisticadas con inversión'
    ],
    exercises: [
      {
        id: 'b2-m1-l2-grammar-1',
        type: 'grammar',
        title: 'Mixed Conditionals: Past and Present',
        grammarPoint: 'Mixed Conditionals (Third + Second Conditional)',
        explanation: 'Los Mixed Conditionals combinan diferentes tiempos para expresar situaciones donde la condición y el resultado están en momentos diferentes.\n\nType 1: If + Past Perfect, would + infinitive\nExamplo: "If I had studied harder (past), I would have a better job now (present)."\n\nType 2: If + Past Simple, would have + past participle\nExemplo: "If I were rich (present), I would have bought that house (past)."',
        examples: [
          'If she had taken the job, she would be living in Paris now.',
          'If I were taller, I would have been selected for the basketball team.',
          'If they had left earlier, they would be here by now.',
          'If he didn\'t smoke, he wouldn\'t have had that heart attack.',
          'If you had listened to me, you wouldn\'t be in this situation now.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'If I ___ (save) more money, I ___ (buy) a car now.',
            correctAnswer: 'had saved / would buy',
            explanation: 'Past condition (didn\\\'t save) + present result (don\\\'t have car now) = Mixed Conditional Type 1',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'If I were fluent in English, I ___ (get) that job last year.',
            correctAnswer: 'would have got / would have gotten',
            explanation: 'Present unreal condition + past result = Mixed Conditional Type 2',
            points: 2
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Rewrite: I didn\'t study medicine, so I\'m not a doctor now.',
            correctAnswer: 'If I had studied medicine, I would be a doctor now.',
            explanation: 'Past action affects present situation - Mixed Conditional Type 1',
            points: 2
          },
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Which sentence shows a mixed conditional?',
            correctAnswer: 'If I had known, I would be there now.',
            explanation: 'Combina Past Perfect (pasado) con would + infinitive (presente)',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l2-grammar-2',
        type: 'grammar',
        title: 'Inversión para Énfasis',
        grammarPoint: 'Inversion with negative adverbs',
        explanation: 'La inversión se usa para dar énfasis, especialmente con expresiones negativas. El verbo auxiliar va antes del sujeto.\n\nAdverbios negativos: never, seldom, rarely, hardly, scarcely, no sooner, not only, under no circumstances\n\nEstructura: Negative adverb + auxiliary + subject + verb\nEjemplo: "Never have I seen such a beautiful sunset."',
        examples: [
          'Never have I been so embarrassed.',
          'Rarely does she arrive late to meetings.',
          'Not only did he apologize, but he also offered compensation.',
          'Under no circumstances should you open this door.',
          'No sooner had I left than it started raining.',
          'Seldom have we seen such dedication.',
          'Hardly had we arrived when the phone rang.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Rewrite with inversion: "I have never seen such a thing."?',
            correctAnswer: 'Never have I seen such a thing.',
            explanation: 'Negative adverb + auxiliary (have) + subject (I) + verb (seen)',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete with inversion: Rarely ___ (she/go) to the cinema.',
            correctAnswer: 'does she go',
            explanation: 'Rarely + does (auxiliary) + she (subject) + go (verb)',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Rewrite using "Not only": "He speaks French and he also speaks German."',
            correctAnswer: 'Not only does he speak French, but he also speaks German.',
            explanation: 'Not only + does + subject + verb, but also...',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Which is correct?',
            correctAnswer: 'Under no circumstances should you tell anyone.',
            explanation: 'Negative expression + modal (should) + subject + infinitive',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l2-reading-1',
        type: 'reading',
        title: 'Reading: The Road Not Taken - Career Choices',
        text: `Never have career decisions been more complex than they are today. If young people had the same limited options that their grandparents had, choosing a profession would be straightforward. However, the modern job market presents countless possibilities, which can be both liberating and overwhelming.

Take the case of Jennifer, a talented musician who faced a difficult choice five years ago. If she had pursued her passion for music, she would be performing in orchestras now. Instead, she chose to study computer science because it seemed more practical. Not only did she graduate with honors, but she also secured a well-paid job at a tech company. However, rarely does a day go by when she doesn't think about the music career she left behind.

"If I were brave enough back then, I would have followed my heart," Jennifer reflects. "But I was worried about financial security. If I had known how much the music industry would evolve with streaming platforms and online teaching, I might have made a different choice."

Seldom do we get the chance to completely change our career path, yet Jennifer is now taking steps to reconnect with her passion. She has started teaching piano online in the evenings and weekends. "If I had continued with music from the beginning, I would have more experience now," she admits. "But under no circumstances do I regret my journey. My technical skills have actually helped me create innovative music education apps."

Research suggests that Jennifer's experience is not unique. Studies show that if people had perfect foresight, many would make different career choices. Yet, hardly ever do these "what if" scenarios consider the valuable skills and experiences gained along alternative paths.

No sooner had Jennifer launched her music education app than it became popular among aspiring musicians. If she hadn't studied computer science, the app wouldn't exist. Her unique combination of technical and musical skills has created opportunities she never could have imagined. "Not only am I reconnecting with music," she says, "but I'm also using everything I learned in tech. If I could go back, would I change anything? Probably not."`,
        wordCount: 345,
        readingTime: 4,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What career did Jennifer actually pursue?',
            correctAnswer: 'Computer Science',
            explanation: 'El texto indica: "Instead, she chose to study computer science"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: Jennifer regrets not pursuing music initially.',
            correctAnswer: 'False',
            explanation: 'Ella dice: "under no circumstances do I regret my journey"',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'How is Jennifer now combining both her skills?',
            correctAnswer: 'She created a music education app that combines her technical and musical skills.',
            explanation: 'El texto menciona que creó una app de educación musical usando ambas habilidades.',
            points: 2
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'What does the text suggest about career decisions?',
            correctAnswer: 'TrueAlternative paths can lead to valuable unexpected opportunities',
            explanation: 'El tema central es cómo diferentes caminos ofrecen experiencias valiosas.',
            points: 2
          },
          {
            id: 'q5',
            type: 'fill-blank',
            question: 'Find and write THREE examples of inversion from the text.',
            correctAnswer: 'Never have career decisions / Not only did she graduate / rarely does a day go by / Seldom do we get / hardly ever do these scenarios / No sooner had Jennifer launched',
            explanation: 'El texto usa múltiples inversiones para énfasis.',
            points: 3
          }
        ],
        vocabularyHelp: [
          { word: 'liberating', definition: 'giving freedom and opportunities' },
          { word: 'straightforward', definition: 'simple and easy to understand' },
          { word: 'foresight', definition: 'the ability to predict future needs or problems' },
          { word: 'aspiring', definition: 'hoping to achieve something or become someone' },
          { word: 'innovative', definition: 'introducing new ideas or methods' }
        ]
      },
      {
        id: 'b2-m1-l2-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m1-l2-listening-1.mp3',
        duration: 200,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Host: Welcome back to "Life Choices," the podcast where we explore the decisions that shape our lives. Today, I'm joined by Dr. Rebecca Chen, a psychologist who specializes in career counseling. Dr. Chen, thank you for being here.

Dr. Chen: My pleasure. Thank you for having me.

Host: So, Dr. Chen, many of our listeners struggle with career regret. They often think, "If I had chosen differently, I would be happier now." What's your perspective on this?

Dr. Chen: That's a very common feeling, and rarely does anyone go through life without experiencing some form of "what if" thinking. However, not only is this thinking usually unproductive, but it also prevents us from appreciating the unique path we've actually traveled.

Host: Can you give us an example?

Dr. Chen: Absolutely. I once worked with a client - let's call him Mark. If Mark had known at age twenty what he knows now, he would have studied engineering instead of literature. But here's the interesting part: if he hadn't studied literature, he wouldn't have the exceptional communication skills that now make him an outstanding engineering manager. Never have I seen someone communicate complex technical concepts so clearly.

Host: So his "mistake" actually became an advantage?

Dr. Chen: Exactly. And seldom do we recognize this while we're living through it. If Mark could go back, would he change his choice? He says no. Under no circumstances would he trade the journey that led him to where he is now.

Host: What about people who feel genuinely stuck in the wrong career?

Dr. Chen: No sooner do I hear "I'm stuck" than I ask: "What's stopping you from making a change now?" If people were truly honest with themselves, they would realize that rarely is it about ability - it's usually about fear. If they had taken action five years ago, yes, they would be in a different place. But hardly ever is it too late to start.

Host: That's encouraging. What advice would you give to our listeners?

Dr. Chen: Not only should you reflect on past choices, but you should also focus on what you can do today. If you had perfect confidence, what would you try? Start there. And remember: if you don't try, you'll never know. Rarely do we regret the things we attempt; we usually regret the things we never tried.`,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'What is Dr. Chen\\',
            correctAnswer: 'Career counseling',
            explanation: 'El presentador la introduce como "a psychologist who specializes in career counseling"',
            points: 2
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: Mark regrets studying literature.',
            correctAnswer: 'False',
            explanation: 'Dr. Chen dice que Mark respondió que no cambiaría su elección.',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'According to Dr. Chen, what stops most people from changing careers?',
            correctAnswer: 'Fear (not ability)',
            explanation: 'Ella dice: "rarely is it about ability - it\'s usually about fear"',
            points: 2
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'What advantage did Mark gain from studying literature?',
            correctAnswer: 'Exceptional communication skills',
            explanation: 'Su estudio de literatura le dio "exceptional communication skills"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'What does Dr. Chen say we usually regret?',
            correctAnswer: 'TrueThings we never tried',
            explanation: 'Ella concluye: "we usually regret the things we never tried"',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l2-speaking-1',
        type: 'speaking',
        prompt: 'Describe an important decision you made in the past and how your life would be different now if you had chosen differently. Use mixed conditionals and inversion structures. Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Use Mixed Conditional Type 1: "If I had..., I would be/have..."',
          'Include inversion for emphasis: "Never have I...", "Rarely do I..."',
          'Describe the actual outcome vs. the hypothetical one',
          'Reflect on whether you have any regrets',
          'Use expressions like: "Looking back...", "In retrospect...", "With hindsight..."'
        ],
        targetWords: [
          'if I had',
          'would be',
          'would have',
          'never have I',
          'rarely do I',
          'looking back',
          'in retrospect',
          'with hindsight',
          'decision',
          'chosen differently',
          'actual outcome',
          'hypothetical'
        ],
        expectedResponse: 'A 2-3 minute discussion of an important past decision and its hypothetical alternative. Should include: (1) Description of the decision using Past Simple (\"I decided to...\"), (2) Mixed conditionals showing contrast between past action and present result (\"If I had chosen X, I would be/have Y now\"), (3) Inversion structures for emphasis (\"Never have I regretted...\", \"Rarely do I think about...\"), (4) Reflective expressions (\"Looking back\", \"In retrospect\", \"With hindsight\"), (5) Comparison of actual outcome vs. hypothetical scenario. Demonstrates ability to discuss hypothetical past situations and their present consequences.'
      },
      {
        id: 'b2-m1-l2-writing-1',
        type: 'writing',
        prompt: 'Write an article (180-220 words) for a careers website titled "The Value of Unexpected Career Paths". Use mixed conditionals and inversion to make your writing more sophisticated and engaging.',
        writingType: 'article',
        minWords: 180,
        maxWords: 220,
        timeLimit: 30,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Start with an engaging title and opening',
          'Use at least 2 mixed conditionals',
          'Include at least 2 inversion structures',
          'Provide examples or anecdotes',
          'End with a thought-provoking conclusion',
          'Use sophisticated vocabulary and varied sentence structures'
        ],
        exampleResponse: `The Value of Unexpected Career Paths

Never have career journeys been more unpredictable than in today's rapidly changing world. If our grandparents had faced the same variety of options we have now, they would be overwhelmed by the possibilities.

Many professionals find themselves in careers they never initially planned. Take Sarah, who studied biology but now works in data science. If she had known about this field ten years ago, would she have chosen it from the start? Perhaps. But if she hadn't studied biology first, she wouldn't have the unique perspective that makes her exceptional at analyzing medical data.

Not only do unexpected paths bring valuable skills, but they also build resilience. Rarely do straightforward career journeys teach us as much about adaptability as winding ones do. If everyone had followed their first career choice, the workforce would lack the diverse perspectives that drive innovation.

Under no circumstances should we view career changes as failures. If you had stayed in your original field, you might have missed discovering your true calling. Seldom do we recognize the value of our journey while we're still on it, but looking back, those unexpected turns often prove to be the most valuable.`
      },
      // KEY WORD TRANSFORMATIONS - FCE Part 4 Practice
      {
        id: 'b2-m1-l2-keytransform-1',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Conditionals & Inversion',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt1',
            question: 'If I had known about the party, I would have come.',
            keyWord: 'known',
            startOfAnswer: 'Had',
            correctAnswer: 'I known about the',
            explanation: 'Inversion after "had" in third conditional for emphasis.',
            points: 2
          },
          {
            id: 'kt2',
            sentence: 'She doesn\'t speak French, so she can\'t work in Paris.',
            keyWord: 'if',
            startOfAnswer: 'She could work',
            correctAnswer: 'in Paris if she',
            explanation: 'Second conditional: present unreal condition.',
            points: 2
          },
          {
            id: 'kt3',
            sentence: 'I didn\'t bring an umbrella, so I got wet.',
            keyWord: 'brought',
            startOfAnswer: 'If I',
            correctAnswer: 'had brought an umbrella',
            explanation: 'Third conditional: past unreal condition with result.',
            points: 2
          },
          {
            id: 'kt4',
            question: 'He rarely goes to the cinema.',
            keyWord: 'seldom',
            startOfAnswer: 'Seldom',
            correctAnswer: 'does he go to',
            explanation: 'Inversion after negative adverbs (seldom, rarely, never).',
            points: 2
          },
          {
            id: 'kt5',
            question: 'I have never seen such a beautiful sunset.',
            keyWord: 'never',
            startOfAnswer: 'Never',
            correctAnswer: 'have I seen such',
            explanation: 'Inversion after "never" for emphasis.',
            points: 2
          },
          {
            id: 'kt6',
            question: 'If he were taller, he would be a basketball player.',
            keyWord: 'was',
            startOfAnswer: 'If he',
            correctAnswer: 'was taller he would',
            explanation: 'Mixed conditional: present hypothetical condition.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l2-keytransform-2',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Advanced Conditionals',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt7',
            sentence: 'I didn\'t save money, so I can\'t buy a car now.',
            keyWord: 'had',
            startOfAnswer: 'If I',
            correctAnswer: 'had saved money I',
            explanation: 'Mixed conditional: past action affecting present situation.',
            points: 2
          },
          {
            id: 'kt8',
            question: 'She was rich, so she bought that mansion.',
            keyWord: 'been',
            startOfAnswer: 'If she hadn\'t',
            correctAnswer: 'been rich she wouldn\'t',
            explanation: 'Third conditional with negative form.',
            points: 2
          },
          {
            id: 'kt9',
            question: 'Not only did he win the race, but he also broke the record.',
            keyWord: 'only',
            startOfAnswer: 'Not only',
            correctAnswer: 'did he win the',
            explanation: 'Inversion after "not only" for emphasis.',
            points: 2
          },
          {
            id: 'kt10',
            question: 'I had hardly started cooking when the guests arrived.',
            keyWord: 'hardly',
            startOfAnswer: 'Hardly',
            correctAnswer: 'had I started cooking',
            explanation: 'Inversion after "hardly" in past perfect.',
            points: 2
          },
          {
            id: 'kt11',
            sentence: 'Unless you study harder, you won\'t pass the exam.',
            keyWord: 'if',
            startOfAnswer: 'You won\'t pass',
            correctAnswer: 'if you don\'t study',
            explanation: 'Converting "unless" to "if not" in first conditional.',
            points: 2
          },
          {
            id: 'kt12',
            sentence: 'Provided that it doesn\'t rain, we\'ll go to the beach.',
            keyWord: 'long',
            startOfAnswer: 'As',
            correctAnswer: 'long as it doesn\'t',
            explanation: 'Converting "provided that" to "as long as" in conditional.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l2-wordform-1',
        type: 'word-formation',
        title: 'Word Formation: Conditional Thinking',
        text: `The ability to think (1. CONDITION)_____ is crucial for problem-solving. When facing complex decisions, (2. SUCCESS)_____ individuals consider multiple scenarios and their potential outcomes. This type of thinking requires both (3. LOGIC)_____ reasoning and (4. CREATE)_____ imagination. Research suggests that practicing hypothetical scenarios can enhance our (5. DECIDE)_____ skills. Moreover, understanding the (6. RELATE)_____ between actions and consequences helps us make more informed choices. While some people seem (7. NATURE)_____ good at this, it's a skill that can be developed through practice and (8. AWARE)_____.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'CONDITION', correctAnswer: 'conditionally', acceptableAnswers: ['conditionally'], explanation: '"Think conditionally" means considering conditions and possibilities.', wordType: 'adverb', transformation: 'adjective → adverb (-ly)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'SUCCESS', correctAnswer: 'successful', acceptableAnswers: ['successful'], explanation: '"Successful individuals" - those who achieve their goals.', wordType: 'adjective', transformation: 'noun → adjective (-ful)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'LOGIC', correctAnswer: 'logical', acceptableAnswers: ['logical'], explanation: '"Logical reasoning" - based on clear thinking and reason.', wordType: 'adjective', transformation: 'noun → adjective (-al)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'CREATE', correctAnswer: 'creative', acceptableAnswers: ['creative'], explanation: '"Creative imagination" - ability to imagine new ideas.', wordType: 'adjective', transformation: 'verb → adjective (-ive)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'DECIDE', correctAnswer: 'decision-making', acceptableAnswers: ['decision-making', 'decisiveness'], explanation: '"Decision-making skills" - ability to make good decisions.', wordType: 'noun', transformation: 'verb → compound noun', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'RELATE', correctAnswer: 'relationship', acceptableAnswers: ['relationship'], explanation: '"Relationship between" - connection or link between things.', wordType: 'noun', transformation: 'verb → noun (-ship)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'NATURE', correctAnswer: 'naturally', acceptableAnswers: ['naturally'], explanation: '"Naturally good" - having a natural talent or ability.', wordType: 'adverb', transformation: 'noun → adverb (-ally)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'AWARE', correctAnswer: 'awareness', acceptableAnswers: ['awareness'], explanation: '"Through awareness" - state of being conscious and informed.', wordType: 'noun', transformation: 'adjective → noun (-ness)', points: 1 }
        ],
        focusAreas: ['Word formation', 'Prefixes and suffixes', 'Part of speech changes']
      },
      {
        id: 'b2-m1-l2-wordform-2',
        type: 'word-formation',
        title: 'Word Formation: Consequences and Choices',
        text: `Every choice we make has (1. PREDICT)_____ and sometimes (2. EXPECT)_____ consequences. Understanding this principle is fundamental to personal (3. RESPONSIBLE)_____. When we act (4. IMPULSE)_____, we often overlook important factors that should influence our decisions. The (5. WISE)_____ of hindsight teaches us valuable lessons about cause and effect. However, it's (6. POINT)_____ to dwell on past mistakes; instead, we should focus on developing better (7. JUDGE)_____. By learning from our experiences, both positive and negative, we can become more (8. SKILL)_____ decision-makers.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'PREDICT', correctAnswer: 'predictable', acceptableAnswers: ['predictable'], explanation: '"Predictable consequences" - can be foreseen or anticipated.', wordType: 'adjective', transformation: 'verb → adjective (-able)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'EXPECT', correctAnswer: 'unexpected', acceptableAnswers: ['unexpected'], explanation: '"Unexpected consequences" - not anticipated. Negative prefix un-.', wordType: 'adjective', transformation: 'verb → negative adjective (un-)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'RESPONSIBLE', correctAnswer: 'responsibility', acceptableAnswers: ['responsibility'], explanation: '"Personal responsibility" - being accountable for one\'s actions.', wordType: 'noun', transformation: 'adjective → noun (-ity)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'IMPULSE', correctAnswer: 'impulsively', acceptableAnswers: ['impulsively'], explanation: '"Act impulsively" - without thinking carefully first.', wordType: 'adverb', transformation: 'noun → adverb (-ively)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'WISE', correctAnswer: 'wisdom', acceptableAnswers: ['wisdom'], explanation: '"Wisdom of hindsight" - understanding gained from past experience.', wordType: 'noun', transformation: 'adjective → noun (-dom)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'POINT', correctAnswer: 'pointless', acceptableAnswers: ['pointless'], explanation: '"Pointless to dwell" - having no purpose or use.', wordType: 'adjective', transformation: 'noun → negative adjective (-less)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'JUDGE', correctAnswer: 'judgment', acceptableAnswers: ['judgment', 'judgement'], explanation: '"Better judgment" - ability to make sensible decisions.', wordType: 'noun', transformation: 'verb → noun (-ment)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'SKILL', correctAnswer: 'skillful', acceptableAnswers: ['skillful', 'skilful'], explanation: '"Skillful decision-makers" - having and showing skill.', wordType: 'adjective', transformation: 'noun → adjective (-ful)', points: 1 }
        ],
        focusAreas: ['Word formation', 'Negative prefixes', 'Suffix patterns']
      },
      {
        id: 'b2-m1-l2-sentence-1',
        type: 'sentence-completion',
        title: 'Complete Mixed Conditional Sentences',
        instructions: 'Complete the sentences using mixed conditionals.',
        sentences: [
          {
            id: 's1',
            prompt: 'If I had learned to play the piano as a child, I',
            correctCompletion: 'would be a musician now',
            options: ['would be a musician now', 'will be a musician now', 'would have been a musician', 'am a musician now'],
            explanation: 'Past condition (didn\'t learn) + present result (not a musician) = Mixed Conditional Type 1',
            points: 2
          },
          {
            id: 's2',
            prompt: 'If she weren\'t so talented, she',
            correctCompletion: 'wouldn\'t have won the competition',
            options: ['wouldn\'t have won the competition', 'won\'t win the competition', 'wouldn\'t win the competition', 'didn\'t win the competition'],
            explanation: 'Present condition (is talented) + past result (won) = Mixed Conditional Type 2',
            points: 2
          },
          {
            id: 's3',
            prompt: 'If they had invested in that company, they',
            correctCompletion: 'would be millionaires today',
            explanation: 'Past action + present result.',
            points: 2
          },
          {
            id: 's4',
            prompt: 'If I spoke Japanese fluently, I',
            correctCompletion: 'would have taken the job in Tokyo',
            explanation: 'Present ability + past opportunity.',
            points: 2
          },
          {
            id: 's5',
            prompt: 'If he had listened to the warnings, he',
            correctCompletion: 'wouldn\'t be in trouble now',
            explanation: 'Past action + present situation.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l2-sentence-2',
        type: 'sentence-completion',
        title: 'Inversion for Emphasis',
        instructions: 'Rewrite the sentences using inversion for emphasis.',
        sentences: [
          {
            id: 's1',
            prompt: 'I have never seen such a beautiful sunset. → Never',
            correctCompletion: 'have I seen such a beautiful sunset',
            explanation: 'Inversion after negative adverbs: Never + auxiliary + subject + main verb',
            points: 2
          },
          {
            id: 's2',
            prompt: 'She had hardly finished speaking when the phone rang. → Hardly',
            correctCompletion: 'had she finished speaking when the phone rang',
            explanation: 'Hardly + had + subject emphasizes immediacy.',
            points: 2
          },
          {
            id: 's3',
            prompt: 'I have rarely encountered such rudeness. → Rarely',
            correctCompletion: 'have I encountered such rudeness',
            explanation: 'Rarely at the beginning requires inversion.',
            points: 2
          },
          {
            id: 's4',
            prompt: 'We had no sooner arrived than it started to rain. → No sooner',
            correctCompletion: 'had we arrived than it started to rain',
            explanation: 'No sooner + had + subject + past participle.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l2-error-1',
        type: 'error-identification',
        title: 'Mixed Conditional Errors',
        instructions: 'Identify and correct errors in mixed conditional sentences.',
        sentences: [
          {
            id: 'e1',
            question: 'If I would have studied harder, I would be a doctor now.',
            hasError: true,
            errorWord: 'would have studied',
            correction: 'had studied',
            explanation: 'Don\'t use "would" in the if-clause. Use Past Perfect: "If I had studied".',
            points: 2
          },
          {
            id: 'e2',
            question: 'If she had taken the job, she would live in Paris now.',
            hasError: false,
            explanation: 'Correct mixed conditional: past condition + present result.',
            points: 2
          },
          {
            id: 'e3',
            question: 'If I am taller, I would have been selected for the team.',
            hasError: true,
            errorWord: 'am',
            correction: 'were',
            explanation: 'Use "were" for unreal present conditions in mixed conditionals.',
            points: 2
          },
          {
            id: 'e4',
            sentence: 'If they listened to the advice, they wouldn\'t have lost money.',
            hasError: true,
            errorWord: 'listened',
            correction: 'had listened',
            explanation: 'Past condition needs Past Perfect: "had listened".',
            points: 2
          },
          {
            id: 'e5',
            sentence: 'If he weren\'t so lazy, he would have finished the project.',
            hasError: false,
            explanation: 'Correct: present condition + past result.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l2-error-2',
        type: 'error-identification',
        title: 'Inversion Errors',
        instructions: 'Find and correct errors in sentences using inversion.',
        sentences: [
          {
            id: 'e1',
            question: 'Never I have seen such a mess.',
            hasError: true,
            errorWord: 'I have',
            correction: 'have I',
            explanation: 'After "Never", use inversion: Never + auxiliary + subject.',
            points: 2
          },
          {
            id: 'e2',
            question: 'Rarely have we encountered such difficulties.',
            hasError: false,
            explanation: 'Correct inversion after "Rarely".',
            points: 2
          },
          {
            id: 'e3',
            question: 'Under no circumstances you should share your password.',
            hasError: true,
            errorWord: 'you should',
            correction: 'should you',
            explanation: 'Negative expressions require inversion: should you share.',
            points: 2
          },
          {
            id: 'e4',
            question: 'Only then did I realize my mistake.',
            hasError: false,
            explanation: 'Correct inversion after "Only then".',
            points: 2
          },
          {
            id: 'e5',
            question: 'Not only she is talented, but also hardworking.',
            hasError: true,
            errorWord: 'she is',
            correction: 'is she',
            explanation: 'Not only requires inversion: Not only is she talented.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l2-paraphrase-1',
        type: 'paraphrasing',
        title: 'Paraphrase Using Conditionals and Inversion',
        instructions: 'Rewrite the sentences using the structures indicated.',
        items: [
          {
            id: 'p1',
            originalSentence: 'I didn\'t save money, so I can\'t buy a house now.',
            correctParaphrase: 'If I had saved money, I could buy a house now.',
            alternatives: ['Had I saved money, I could buy a house now.'],
            explanation: 'Mixed conditional Type 1: past condition + present result.',
            points: 2
          },
          {
            id: 'p2',
            originalSentence: 'I have never experienced such kindness.',
            correctParaphrase: 'Never have I experienced such kindness.',
            explanation: 'Inversion for emphasis with "Never".',
            points: 2
          },
          {
            id: 'p3',
            originalSentence: 'Because I\'m not fluent in French, I didn\'t get the job in Paris.',
            correctParaphrase: 'If I were fluent in French, I would have got the job in Paris.',
            alternatives: ['Were I fluent in French, I would have got the job in Paris.'],
            explanation: 'Mixed conditional Type 2: present condition + past result.',
            points: 2
          },
          {
            id: 'p4',
            originalSentence: 'We rarely see such dedication.',
            correctParaphrase: 'Rarely do we see such dedication.',
            explanation: 'Inversion after frequency adverb "rarely".',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l2-collocation-1',
        type: 'collocation-matching',
        title: 'Conditional Collocations',
        instructions: 'Match the conditional clauses with common collocations.',
        pairs: [
          {
            id: 'c1',
            word: 'If I had known',
            correctMatch: 'in advance',
            distractors: ['on time', 'at once', 'by chance'],
            example: 'If I had known in advance, I would have prepared better.',
            points: 1
          },
          {
            id: 'c2',
            word: 'If circumstances',
            correctMatch: 'had been different',
            distractors: ['were the same', 'are changing', 'will improve'],
            example: 'If circumstances had been different, I would be living abroad now.',
            points: 1
          },
          {
            id: 'c3',
            word: 'Had I',
            correctMatch: 'realized sooner',
            distractors: ['knew before', 'will understand', 'am thinking'],
            example: 'Had I realized sooner, I could have prevented the problem.',
            points: 1
          },
          {
            id: 'c4',
            word: 'Never in my',
            correctMatch: 'wildest dreams',
            distractors: ['best hopes', 'good thoughts', 'happy moments'],
            example: 'Never in my wildest dreams did I imagine this would happen.',
            points: 1
          },
          {
            id: 'c5',
            word: 'Under no',
            correctMatch: 'circumstances',
            distractors: ['conditions', 'situations', 'reasons'],
            example: 'Under no circumstances should you reveal this information.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l2-phrasal-1',
        type: 'phrasal-verbs',
        title: 'Phrasal Verbs in Conditionals',
        instructions: 'Complete the conditional sentences with the correct phrasal verb form.',
        items: [
          {
            id: 'pv1',
            sentence: 'If I hadn\'t ___ the opportunity, I wouldn\'t be successful now.',
            phrasalVerb: 'take up',
            meaning: 'to accept or begin something',
            correctAnswer: 'taken up',
            options: ['taken up', 'took up', 'taking up', 'takes up'],
            explanation: 'Past Perfect in mixed conditional: "hadn\'t taken up".',
            points: 2
          },
          {
            id: 'pv2',
            question: 'If she ___ with her studies, she would have graduated by now.',
            phrasalVerb: 'keep up',
            meaning: 'to continue at the same level',
            correctAnswer: 'had kept up',
            options: ['had kept up', 'kept up', 'has kept up', 'keeps up'],
            explanation: 'Past Perfect for the condition.',
            points: 2
          },
          {
            id: 'pv3',
            question: 'Had they not ___ on him, he would be in prison now.',
            phrasalVerb: 'go easy',
            meaning: 'to be lenient with someone',
            correctAnswer: 'gone easy',
            explanation: 'Inverted conditional with Past Perfect.',
            points: 2
          },
          {
            id: 'pv4',
            question: 'If you ___ your old friends, you would have more support now.',
            phrasalVerb: 'stick by',
            meaning: 'to remain loyal to',
            correctAnswer: 'had stuck by',
            explanation: 'Past action affecting present situation.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l2-idioms-1',
        type: 'idioms-expressions',
        title: 'Idioms with Conditionals',
        instructions: 'Complete the sentences with the appropriate idiom.',
        items: [
          {
            id: 'i1',
            context: 'If I had known what was coming, I would have...',
            idiom: 'thought twice',
            meaning: 'to carefully consider before doing something',
            correctUsage: 'If I had known what was coming, I would have thought twice about accepting the job.',
            options: ['thought twice', 'second guessed', 'double checked', 'reconsidered it'],
            explanation: '"Think twice" means to carefully reconsider a decision.',
            points: 2
          },
          {
            id: 'i2',
            context: 'Never in a million years...',
            idiom: 'did I expect',
            meaning: 'absolutely never',
            correctUsage: 'Never in a million years did I expect to win the lottery.',
            explanation: 'Emphatic expression meaning something is extremely unlikely.',
            points: 2
          },
          {
            id: 'i3',
            context: 'If I were in your shoes, I would...',
            idiom: 'play it safe',
            meaning: 'to avoid taking risks',
            correctUsage: 'If I were in your shoes, I would play it safe and not invest all my money.',
            options: ['play it safe', 'take chances', 'risk everything', 'go all in'],
            explanation: '"Play it safe" means to avoid risky decisions.',
            points: 2
          },
          {
            id: 'i4',
            context: 'Had I known it would cause so much trouble, I would have...',
            idiom: 'left well alone',
            meaning: 'to not interfere with something',
            correctUsage: 'Had I known it would cause trouble, I would have left well alone.',
            explanation: '"Leave well alone" means to not get involved or interfere.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l2-gapfill-1',
        type: 'gap-fill-text',
        title: 'Mixed Conditionals in Context',
        instructions: 'Complete the text with the correct form of the verbs in brackets.',
        text: `If Sarah {{1}} (study) engineering instead of art, her life {{2}} (be) completely different now. She often wonders what {{3}} (happen) if she {{4}} (make) that choice. Her parents wanted her to be an engineer, and if she {{5}} (listen) to them, she {{6}} (have) a stable job by now. However, she doesn't regret her decision. Never {{7}} (she/feel) more fulfilled than she does in her current career as an artist. If she {{8}} (be) an engineer now, she {{9}} (miss) all the creative opportunities she's had. Only by following her passion {{10}} (she/discover) her true calling.`,
        gaps: [
          {
            id: 'g1',
            gapNumber: 1,
            correctAnswer: 'had studied',
            explanation: 'Past Perfect for unreal past condition.',
            points: 1
          },
          {
            id: 'g2',
            gapNumber: 2,
            correctAnswer: 'would be',
            explanation: 'Present result in mixed conditional.',
            points: 1
          },
          {
            id: 'g3',
            gapNumber: 3,
            correctAnswer: 'would have happened',
            explanation: 'Past result speculation.',
            points: 1
          },
          {
            id: 'g4',
            gapNumber: 4,
            correctAnswer: 'had made',
            explanation: 'Past Perfect in conditional clause.',
            points: 1
          },
          {
            id: 'g5',
            gapNumber: 5,
            correctAnswer: 'had listened',
            explanation: 'Past unreal condition.',
            points: 1
          },
          {
            id: 'g6',
            gapNumber: 6,
            correctAnswer: 'would have',
            explanation: 'Present result: "would have a stable job".',
            points: 1
          },
          {
            id: 'g7',
            gapNumber: 7,
            correctAnswer: 'has she felt',
            explanation: 'Inversion after "Never": has she felt.',
            points: 1
          },
          {
            id: 'g8',
            gapNumber: 8,
            correctAnswer: 'were',
            explanation: 'Present unreal condition uses "were".',
            points: 1
          },
          {
            id: 'g9',
            gapNumber: 9,
            correctAnswer: 'would have missed',
            acceptableAlternatives: ['would miss'],
            explanation: 'Past result of present condition.',
            points: 1
          },
          {
            id: 'g10',
            gapNumber: 10,
            correctAnswer: 'did she discover',
            explanation: 'Inversion after "Only by": did she discover.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l2-reorder-1',
        type: 'sentence-reordering',
        title: 'Reorder Conditional Sentences',
        instructions: 'Put the sentence parts in the correct order to form proper conditional sentences.',
        items: [
          {
            id: 'r1',
            shuffledSentences: [
              'I would be living in New York now',
              'if',
              'I had accepted',
              'the job offer'
            ],
            correctOrder: [1, 3, 2, 0],
            context: 'Create a mixed conditional sentence.',
            explanation: 'If I had accepted the job offer, I would be living in New York now.',
            points: 2
          },
          {
            id: 'r2',
            shuffledSentences: [
              'have I seen',
              'such a spectacular view',
              'Never',
              'in my life'
            ],
            correctOrder: [2, 3, 0, 1],
            explanation: 'Never in my life have I seen such a spectacular view.',
            points: 2
          },
          {
            id: 'r3',
            shuffledSentences: [
              'would she have got',
              'the promotion',
              'If she weren\'t so talented',
              'she'
            ],
            correctOrder: [2, 3, 0, 1],
            explanation: 'If she weren\'t so talented, she would have got the promotion (implies she is talented and did get it).',
            points: 2
          },
          {
            id: 'r4',
            shuffledSentences: [
              'did we realize',
              'the extent of the damage',
              'Only after the inspection'
            ],
            correctOrder: [2, 0, 1],
            explanation: 'Only after the inspection did we realize the extent of the damage.',
            points: 2
          }
        ]
      }
    ]
  },
  // LECCIÓN 3: Cleft Sentences & Emphasis
  {
    id: 'b2-m1-l3',
    title: 'Lección 3: Cleft Sentences y Técnicas de Énfasis',
    description: 'Aprende a usar estructuras enfáticas para mejorar tu escritura y expresión oral',
    duration: 90,
    objectives: [
      'Dominar las estructuras de cleft sentences (It...that/who, What...is)',
      'Usar técnicas de énfasis para hacer tu comunicación más efectiva',
      'Aplicar estas estructuras en contextos formales e informales',
      'Mejorar la sofisticación de tu escritura académica'
    ],
    exercises: [
      {
        id: 'b2-m1-l3-grammar-1',
        type: 'grammar',
        title: 'Cleft Sentences: It + be + that/who',
        grammarPoint: 'It-cleft sentences para énfasis',
        explanation: 'Las cleft sentences dividen una oración en dos partes para enfatizar información específica. Estructura: It + be + elemento enfatizado + that/who + resto de la oración.\nEjemplo: "John bought the car yesterday" → "It was John who bought the car yesterday" (énfasis en quién)',
        examples: [
          'It was in Paris that I met my wife. (énfasis en lugar)',
          'It\'s the price that concerns me most. (énfasis en el precio)',
          'It was Sarah who suggested this restaurant. (énfasis en Sarah)',
          'It wasn\'t until midnight that we finished. (énfasis en tiempo)',
          'It\'s because of you that we succeeded. (énfasis en razón)'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Rewrite with emphasis on "the noise": "The noise woke me up."?',
            correctAnswer: 'It was the noise that woke me up.',
            explanation: 'Usamos "It was...that" para enfatizar el sujeto (the noise).',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: '___ was in 2020 ___ everything changed.',
            correctAnswer: 'It...that',
            explanation: 'It was in 2020 that everything changed - énfasis en el tiempo.',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Transform emphasizing WHO: "My brother recommended this book."',
            correctAnswer: 'It was my brother who recommended this book.',
            explanation: 'Usamos "who" cuando enfatizamos una persona.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l3-grammar-2',
        type: 'grammar',
        title: 'Wh-Cleft Sentences: What...is',
        grammarPoint: 'What-cleft sentences para énfasis',
        explanation: 'Las what-cleft sentences usan "What" al inicio para enfatizar la acción o situación. Estructura: What + subject + verb + be + emphasized element.\nEjemplo: "I need a vacation" → "What I need is a vacation"',
        examples: [
          'What I love about this city is the architecture.',
          'What we need to do is work together.',
          'What surprised me was his reaction.',
          'What bothers me most is the lack of transparency.',
          'What happened next was completely unexpected.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'wh-cleft: "I want honesty." → ___',
            correctAnswer: 'What I want is honesty.',
            explanation: 'What I want is + sustantivo/lo que queremos enfatizar.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: '___ she said was absolutely right.',
            correctAnswer: 'What',
            explanation: 'What she said = lo que ella dijo.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l3-reading-1',
        type: 'reading',
        title: 'Reading: The Power of Focus in a Distracted World',
        text: `In our hyperconnected age, what truly sets successful people apart is not intelligence or talent—it's their ability to focus. What many fail to realize is that multitasking, which we've long celebrated as a valuable skill, is actually counterproductive.

It was Cal Newport, a computer science professor, who popularized the concept of "deep work" in his bestselling book. What Newport argues is that the ability to focus without distraction on cognitively demanding tasks is becoming increasingly rare and, therefore, increasingly valuable. It's not just the quality of work that improves with deep focus—it's the speed at which complex problems can be solved.

What makes this particularly challenging today is the constant barrage of notifications, emails, and messages competing for our attention. It was a study by the University of California that found it takes an average of 23 minutes to fully regain focus after an interruption. What this means for knowledge workers is that every time they check their phone or respond to a non-urgent message, they're paying a significant cognitive cost.

However, it's not technology itself that's the problem—it's how we use it. What successful professionals do differently is create strict boundaries around their focused work time. It was during the pandemic that many workers discovered the benefits of having control over their schedule. What they found was that working from home, when done correctly with dedicated focus blocks, often led to higher productivity than the traditional office environment with its constant interruptions.

So what should we do about this? It's essential that we recognize the value of sustained attention. What we need to develop are habits that protect our cognitive resources. It was the ancient philosophers who understood that attention is our most precious resource—what has changed is merely the scale and sophistication of the distractions we face.`,
        wordCount: 295,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'According to the text, what truly distinguishes successful people?',
            correctAnswer: 'Their ability to focus',
            explanation: 'El texto dice: "what truly sets successful people apart...it\\\'s their ability to focus"',
            points: 2
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: The text suggests multitasking is a valuable skill.',
            correctAnswer: 'False',
            explanation: 'El texto dice que multitasking "is actually counterproductive"',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'How long does it take to regain focus after an interruption, according to the study?',
            correctAnswer: '23 minutes',
            explanation: 'El texto menciona: "it takes an average of 23 minutes to fully regain focus"',
            points: 1
          },
          {
            id: 'q5',
            type: 'fill-blank',
            question: 'What did workers discover during the pandemic?',
            correctAnswer: 'That working from home with focus blocks can be more productive',
            explanation: 'El texto indica que trabajar desde casa "often led to higher productivity"',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'Identify TWO cleft sentences from the text (write them exactly as they appear).',
            correctAnswer: 'It was Cal Newport who... / What many fail to realize is... / What Newport argues is... / It was a study... / etc.',
            explanation: 'El texto contiene múltiples cleft sentences usando "It was...who/that" y "What...is"',
            points: 3
          }
        ],
        vocabularyHelp: [
          { word: 'hyperconnected', definition: 'extremely connected through technology and communication' },
          { word: 'counterproductive', definition: 'having the opposite of the desired effect' },
          { word: 'cognitively', definition: 'relating to mental processes of understanding' },
          { word: 'barrage', definition: 'an overwhelming quantity of something' },
          { word: 'sustained', definition: 'continuing for an extended period without interruption' }
        ]
      },
      {
        id: 'b2-m1-l3-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m1-l3-listening-1.mp3',
        duration: 150,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Interviewer: Today we're talking about productivity techniques with Dr. Emma Richardson. Dr. Richardson, what's your main message about staying focused?

Dr. Richardson: Well, what I want people to understand is that our brains aren't designed for the modern digital environment. It's the constant switching between tasks that drains our mental energy most. What research shows is that every time we shift our attention, we use up cognitive resources.

Interviewer: So it's multitasking that's the problem?

Dr. Richardson: Exactly. What many people don't realize is that multitasking is actually a myth. What we're really doing is task-switching, and it's incredibly inefficient. It was a landmark study from Stanford that proved heavy multitaskers are actually worse at filtering out irrelevant information than people who focus on one thing at a time.

Interviewer: That's fascinating. What can people do to improve their focus?

Dr. Richardson: What I recommend to my clients is something called "time blocking." It's a simple technique where you dedicate specific blocks of time to specific tasks. What makes this effective is that you're not constantly deciding what to work on next—you've already made that decision. It was when I started using this method myself that my productivity doubled.

Interviewer: And what about technology? Should we avoid it entirely?

Dr. Richardson: No, that's not realistic. What we need to do is use technology intentionally. It's not your smartphone that's the problem—it's having notifications turned on all the time. What successful people do is put their devices on "do not disturb" during focus sessions. What surprised me in my research was how much anxiety this initially caused people, but within a week, most felt liberated rather than disconnected.`,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'What does Dr. Richardson say about multitasking?',
            correctAnswer: 'It\\',
            explanation: 'Ella dice: "multitasking is actually a myth...we\\\'re really doing is task-switching, and it\\\'s incredibly inefficient"',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Dr. Richardson recommends using a technique called "___  ___".',
            correctAnswer: 'time blocking',
            explanation: 'Ella menciona: "What I recommend...is something called time blocking"',
            points: 1
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: Dr. Richardson suggests avoiding technology completely.',
            correctAnswer: 'False',
            explanation: 'Ella dice "No, that\'s not realistic" cuando se le pregunta si debemos evitar la tecnología',
            points: 1
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'What happened when Dr. Richardson started using time blocking herself?',
            correctAnswer: 'Her productivity doubled',
            explanation: 'Ella dice: "It was when I started using this method myself that my productivity doubled"',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l3-speaking-1',
        type: 'speaking',
        prompt: 'Talk about what matters most to you in your career or studies. Use cleft sentences (It...that/who and What...is) to emphasize your key points. Speak for 2 minutes.',
        timeLimit: 120,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Start with: "What matters most to me is..."',
          'Use "It was...who/that" to emphasize people or events that influenced you',
          'Include: "What I\'ve learned is..."',
          'Try: "It\'s...that makes the difference"',
          'Examples: "What drives me is...", "It was my teacher who inspired me..."'
        ],
        targetWords: [
          'what matters most',
          'it was...who',
          'it was...that',
          'what I\'ve learned',
          'what drives me',
          'it\'s...that makes the difference',
          'career',
          'studies',
          'emphasize',
          'influenced'
        ],
        expectedResponse: 'A 2-minute discussion about career/study priorities using cleft sentences for emphasis. Should include: (1) Opening with \"What matters most to me is...\" to state priorities, (2) \"It was [person] who...\" to emphasize influential people, (3) \"What I\'ve learned is...\" to share insights, (4) \"It\'s [factor] that makes the difference\" to highlight key elements, (5) Additional cleft structures like \"What drives me is...\" Demonstrates ability to use cleft sentences for emphasis and discuss personal values/goals effectively.'
      },
      {
        id: 'b2-m1-l3-writing-1',
        type: 'writing',
        prompt: 'Write an opinion essay (190-210 words) titled "What Education Needs to Change". Use at least 3 cleft sentences to emphasize your main points.',
        writingType: 'essay',
        minWords: 190,
        maxWords: 210,
        timeLimit: 35,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Use "What...is/are" to introduce main ideas',
          'Use "It is...that/who" to emphasize specific points',
          'Include phrases like: "What needs to change is...", "It\'s...that matters most"',
          'Structure: Introduction → 2-3 main points with emphasis → Conclusion',
          'Make your arguments clear and persuasive'
        ]
      },
      // KEY WORD TRANSFORMATIONS - FCE Part 4 Practice
      {
        id: 'b2-m1-l3-keytransform-1',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Passive Voice',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt1',
            question: 'They are repairing the road.',
            keyWord: 'being',
            startOfAnswer: 'The road',
            correctAnswer: 'is being repaired',
            explanation: 'Present continuous passive: is/are being + past participle.',
            points: 2
          },
          {
            id: 'kt2',
            question: 'Someone must have stolen my wallet.',
            keyWord: 'been',
            startOfAnswer: 'My wallet',
            correctAnswer: 'must have been stolen',
            explanation: 'Modal perfect passive: modal + have been + past participle.',
            points: 2
          },
          {
            id: 'kt3',
            question: 'They say that he is very rich.',
            keyWord: 'said',
            startOfAnswer: 'He',
            correctAnswer: 'is said to be',
            explanation: 'Impersonal passive with reporting verb.',
            points: 2
          },
          {
            id: 'kt4',
            question: 'People believe that the treasure is buried here.',
            keyWord: 'believed',
            startOfAnswer: 'The treasure',
            correctAnswer: 'is believed to be',
            explanation: 'Impersonal passive: the treasure is believed to be.',
            points: 2
          },
          {
            id: 'kt5',
            question: 'They had already finished the project when I arrived.',
            keyWord: 'been',
            startOfAnswer: 'The project',
            correctAnswer: 'had already been finished',
            explanation: 'Past perfect passive: had been + past participle.',
            points: 2
          },
          {
            id: 'kt6',
            question: 'You should clean your room.',
            keyWord: 'cleaned',
            startOfAnswer: 'Your room',
            correctAnswer: 'should be cleaned',
            explanation: 'Modal passive: should be + past participle.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l3-keytransform-2',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Causative & Advanced Passive',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt7',
            question: 'Someone is cutting my hair tomorrow.',
            keyWord: 'having',
            startOfAnswer: 'I am',
            correctAnswer: 'having my hair cut',
            explanation: 'Causative: have + object + past participle.',
            points: 2
          },
          {
            id: 'kt8',
            question: 'A mechanic serviced my car last week.',
            keyWord: 'had',
            startOfAnswer: 'I',
            correctAnswer: 'had my car serviced',
            explanation: 'Causative in past: had + object + past participle.',
            points: 2
          },
          {
            id: 'kt9',
            question: 'The doctor will examine you.',
            keyWord: 'examined',
            startOfAnswer: 'You',
            correctAnswer: 'will be examined by',
            explanation: 'Future passive with agent.',
            points: 2
          },
          {
            id: 'kt10',
            question: 'They are going to demolish the old building.',
            keyWord: 'demolished',
            startOfAnswer: 'The old building',
            correctAnswer: 'is going to be',
            explanation: 'Future with "going to" in passive voice.',
            points: 2
          },
          {
            id: 'kt11',
            question: 'Somebody needs to fix this computer.',
            keyWord: 'needs',
            startOfAnswer: 'This computer',
            correctAnswer: 'needs to be fixed',
            explanation: 'Passive infinitive: needs to be + past participle.',
            points: 2
          },
          {
            id: 'kt12',
            question: 'They made him wait for two hours.',
            keyWord: 'was',
            startOfAnswer: 'He',
            correctAnswer: 'was made to wait',
            explanation: 'Passive causative with "made" requires "to" infinitive.',
            points: 2
          }
        ]
      },

      {
        id: 'b2-m1-l3-wordform-1',
        type: 'word-formation',
        title: 'Word Formation: Environmental Action',
        text: `Climate change represents one of humanity's greatest challenges, requiring immediate and (1. DECIDE)_____ action. The (2. SCIENCE)_____ evidence is overwhelming and (3. DENY)_____. Yet many people remain (4. AWARE)_____ of the urgency or feel (5. POWER)_____ to make a difference. This sense of (6. HELP)_____ often stems from the (7. PERCEIVE)_____ that individual actions are (8. SIGNIFY)_____. However, collective efforts can create meaningful change.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'DECIDE', correctAnswer: 'decisive', acceptableAnswers: ['decisive'], explanation: '"Decisive action" - showing determination and firmness.', wordType: 'adjective', transformation: 'verb → adjective (-ive)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'SCIENCE', correctAnswer: 'scientific', acceptableAnswers: ['scientific'], explanation: '"Scientific evidence" - based on or relating to science.', wordType: 'adjective', transformation: 'noun → adjective (-ific)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'DENY', correctAnswer: 'undeniable', acceptableAnswers: ['undeniable'], explanation: '"Undeniable evidence" - impossible to deny or dispute.', wordType: 'adjective', transformation: 'verb → negative adjective (un- + -able)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'AWARE', correctAnswer: 'unaware', acceptableAnswers: ['unaware'], explanation: '"Remain unaware" - not having knowledge of something.', wordType: 'adjective', transformation: 'adjective → negative (un-)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'POWER', correctAnswer: 'powerless', acceptableAnswers: ['powerless'], explanation: '"Feel powerless" - lacking power or ability to act.', wordType: 'adjective', transformation: 'noun → negative adjective (-less)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'HELP', correctAnswer: 'helplessness', acceptableAnswers: ['helplessness'], explanation: '"Sense of helplessness" - feeling unable to help oneself.', wordType: 'noun', transformation: 'adjective → noun (-ness)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'PERCEIVE', correctAnswer: 'perception', acceptableAnswers: ['perception'], explanation: '"The perception that" - way in which something is understood.', wordType: 'noun', transformation: 'verb → noun (-tion)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'SIGNIFY', correctAnswer: 'insignificant', acceptableAnswers: ['insignificant'], explanation: '"Insignificant actions" - not important. Negative prefix in-.', wordType: 'adjective', transformation: 'verb → negative adjective (in- + -ant)', points: 1 }
        ],
        focusAreas: ['Negative prefixes (un-, in-)', 'Noun formation', 'Adjective suffixes']
      },
      {
        id: 'b2-m1-l3-wordform-2',
        type: 'word-formation',
        title: 'Word Formation: Sustainable Living',
        text: `Adopting a more (1. SUSTAIN)_____ lifestyle doesn't require drastic changes. Simple modifications to daily routines can have a (2. REMARK)_____ impact. For instance, reducing plastic (3. CONSUME)_____ and choosing (4. REUSE)_____ products are practical steps anyone can take. The key is (5. CONSIST)_____ – making these choices habitual rather than occasional. While some (6. ENVIRONMENT)_____ friendly alternatives may seem (7. EXPENSE)_____ initially, they often prove more (8. ECONOMY)_____ in the long run.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'SUSTAIN', correctAnswer: 'sustainable', acceptableAnswers: ['sustainable'], explanation: '"Sustainable lifestyle" - able to continue without damaging the environment.', wordType: 'adjective', transformation: 'verb → adjective (-able)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'REMARK', correctAnswer: 'remarkable', acceptableAnswers: ['remarkable'], explanation: '"Remarkable impact" - worthy of attention, extraordinary.', wordType: 'adjective', transformation: 'verb/noun → adjective (-able)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'CONSUME', correctAnswer: 'consumption', acceptableAnswers: ['consumption'], explanation: '"Plastic consumption" - amount consumed or used.', wordType: 'noun', transformation: 'verb → noun (-tion)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'REUSE', correctAnswer: 'reusable', acceptableAnswers: ['reusable'], explanation: '"Reusable products" - can be used again.', wordType: 'adjective', transformation: 'verb → adjective (-able)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'CONSIST', correctAnswer: 'consistency', acceptableAnswers: ['consistency'], explanation: '"The key is consistency" - quality of always behaving the same way.', wordType: 'noun', transformation: 'adjective → noun (-ency)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'ENVIRONMENT', correctAnswer: 'environmentally', acceptableAnswers: ['environmentally'], explanation: '"Environmentally friendly" - in a way that relates to environment.', wordType: 'adverb', transformation: 'noun → adverb (-ally)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'EXPENSE', correctAnswer: 'expensive', acceptableAnswers: ['expensive'], explanation: '"Seem expensive" - costing a lot of money.', wordType: 'adjective', transformation: 'noun → adjective (-ive)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'ECONOMY', correctAnswer: 'economical', acceptableAnswers: ['economical'], explanation: '"More economical" - giving good value for money.', wordType: 'adjective', transformation: 'noun → adjective (-ical)', points: 1 }
        ],
        focusAreas: ['-able suffix', 'Adverb formation', 'Environmental vocabulary']
      },
      // SENTENCE COMPLETION - Emphasis structures
      {
        id: 'b2-m1-l3-sentcomp-1',
        type: 'sentence-completion',
        title: 'Sentence Completion: Emphasis Structures',
        instructions: 'Complete each sentence using an appropriate emphasis structure (cleft sentence).',
        sentences: [
          {
            id: 'sc1',
            prompt: 'I don\'t like his attitude.',
            correctCompletion: 'What I don\'t like is his attitude',
            options: ['What I don\'t like is his attitude', 'That I don\'t like his attitude', 'It is his attitude I don\'t like', 'His attitude is what I don\'t like'],
            explanation: 'We use "What...is" to emphasize the object.',
            points: 1
          },
          {
            id: 'sc2',
            prompt: 'She needs more practice, not theory.',
            correctCompletion: 'What she needs is more practice, not theory',
            explanation: 'What-cleft emphasizes what is needed.',
            points: 1
          },
          {
            id: 'sc3',
            prompt: 'The manager made the final decision.',
            correctCompletion: 'It was the manager who made the final decision',
            options: ['It was the manager who made', 'It was the manager that made', 'The manager was who made', 'It is the manager who made'],
            explanation: 'It-cleft with "who" emphasizes the person.',
            points: 1
          },
          {
            id: 'sc4',
            prompt: 'I want honesty from you.',
            correctCompletion: 'What I want from you is honesty',
            explanation: 'What-cleft structure emphasizes the desired quality.',
            points: 1
          }
        ]
      },
      // ERROR IDENTIFICATION - Cleft sentences
      {
        id: 'b2-m1-l3-error-1',
        type: 'error-identification',
        title: 'Error Identification: Cleft Sentence Mistakes',
        instructions: 'Identify if each sentence contains an error. If yes, provide the correction.',
        sentences: [
          {
            id: 'e1',
            question: 'What I need it is more time.',
            hasError: true,
            errorWord: 'it',
            correction: 'What I need is more time',
            explanation: 'Remove "it" - redundant pronoun in what-cleft structure.',
            points: 2
          },
          {
            id: 'e2',
            question: 'It was John who he called me yesterday.',
            hasError: true,
            errorWord: 'he',
            correction: 'It was John who called me yesterday',
            explanation: 'Remove "he" - the relative pronoun "who" replaces the subject.',
            points: 2
          },
          {
            id: 'e3',
            question: 'What surprised me most was their generosity.',
            hasError: false,
            explanation: 'Correct what-cleft structure.',
            points: 1
          },
          {
            id: 'e4',
            question: 'It is in Paris where I met my wife.',
            hasError: true,
            errorWord: 'where',
            correction: 'It is in Paris that I met my wife',
            explanation: 'Use "that" not "where" in it-cleft sentences for places.',
            points: 2
          }
        ]
      },
      // PARAPHRASING - Emphasis
      {
        id: 'b2-m1-l3-para-1',
        type: 'paraphrasing',
        title: 'Paraphrasing: Adding Emphasis',
        instructions: 'Rewrite each sentence using a cleft structure to add emphasis.',
        items: [
          {
            id: 'p1',
            originalSentence: 'The constant noise bothers me.',
            correctParaphrase: 'What bothers me is the constant noise',
            alternatives: ['It\'s the constant noise that bothers me'],
            explanation: 'Both what-cleft and it-cleft can emphasize the subject.',
            points: 2
          },
          {
            id: 'p2',
            originalSentence: 'I discovered the error, not Sarah.',
            correctParaphrase: 'It was I who discovered the error, not Sarah',
            alternatives: ['It was me who discovered the error, not Sarah'],
            explanation: 'It-cleft emphasizes who performed the action.',
            points: 2
          },
          {
            id: 'p3',
            originalSentence: 'You should apologize.',
            correctParaphrase: 'What you should do is apologize',
            explanation: 'What-cleft emphasizes the action needed.',
            points: 2
          }
        ]
      },
      // COLLOCATION MATCHING - Focus vocabulary
      {
        id: 'b2-m1-l3-colloc-1',
        type: 'collocation-matching',
        title: 'Collocations: Focus and Attention',
        instructions: 'Match each verb with its correct collocation related to focus and attention.',
        pairs: [
          {
            id: 'col1',
            word: 'pay',
            correctMatch: 'attention',
            distractors: ['focus', 'concentration', 'mind'],
            example: 'You need to pay attention to the details.',
            points: 1
          },
          {
            id: 'col2',
            word: 'lose',
            correctMatch: 'concentration',
            distractors: ['attention', 'focus', 'mind'],
            example: 'I lose concentration after working for two hours straight.',
            points: 1
          },
          {
            id: 'col3',
            word: 'maintain',
            correctMatch: 'focus',
            distractors: ['attention', 'mind', 'concentration'],
            example: 'It\'s difficult to maintain focus in a noisy environment.',
            points: 1
          },
          {
            id: 'col4',
            word: 'have something in',
            correctMatch: 'mind',
            distractors: ['attention', 'focus', 'brain'],
            example: 'Do you have anything particular in mind for dinner?',
            points: 1
          },
          {
            id: 'col5',
            word: 'draw',
            correctMatch: 'attention to',
            distractors: ['focus on', 'mind to', 'concentrate to'],
            example: 'I\'d like to draw attention to this important issue.',
            points: 1
          }
        ]
      },
      // PHRASAL VERBS - Communication & Emphasis
      {
        id: 'b2-m1-l3-phrasal-1',
        type: 'phrasal-verbs',
        title: 'Phrasal Verbs: Communication & Emphasis',
        instructions: 'Choose the correct phrasal verb to complete each sentence.',
        items: [
          {
            id: 'pv1',
            question: 'The speaker _____ the importance of teamwork.',
            phrasalVerb: 'pointed out',
            meaning: 'drew attention to, emphasized',
            correctAnswer: 'pointed out',
            options: ['pointed out', 'pointed at', 'pointed to', 'pointed up'],
            explanation: 'Point out = to draw attention to or mention something important.',
            points: 1
          },
          {
            id: 'pv2',
            sentence: 'I couldn\'t _____ what he was trying to say.',
            phrasalVerb: 'make out',
            meaning: 'understand, decipher',
            correctAnswer: 'make out',
            options: ['make up', 'make out', 'make for', 'make off'],
            explanation: 'Make out = to be able to see, hear, or understand something.',
            points: 1
          },
          {
            id: 'pv3',
            question: 'The argument _____ from a simple misunderstanding.',
            phrasalVerb: 'came about',
            meaning: 'happened, occurred',
            correctAnswer: 'came about',
            options: ['came about', 'came across', 'came around', 'came along'],
            explanation: 'Come about = to happen or start to happen.',
            points: 1
          },
          {
            id: 'pv4',
            question: 'She _____ the proposal during the meeting.',
            phrasalVerb: 'brought up',
            meaning: 'mentioned, raised for discussion',
            correctAnswer: 'brought up',
            options: ['brought up', 'brought about', 'brought out', 'brought in'],
            explanation: 'Bring up = to mention or introduce a topic for discussion.',
            points: 1
          }
        ]
      },
      // IDIOMS - Emphasis & Focus
      {
        id: 'b2-m1-l3-idioms-1',
        type: 'idioms-expressions',
        title: 'Idioms: Emphasis and Focus',
        instructions: 'Complete each sentence with the appropriate idiom.',
        items: [
          {
            id: 'id1',
            context: 'The manager wants to make sure everyone understands the new policy.',
            idiom: 'drive the point home',
            meaning: 'to make something very clear and emphatic',
            correctUsage: 'He really drove the point home during the presentation',
            options: ['drove the point home', 'hit the nail on the head', 'got to the point', 'made his point'],
            explanation: 'Drive the point home = to emphasize something so it\'s clearly understood.',
            points: 1
          },
          {
            id: 'id2',
            context: 'You correctly identified the main issue.',
            idiom: 'hit the nail on the head',
            meaning: 'to be exactly right about something',
            correctUsage: 'You hit the nail on the head with your analysis',
            options: ['hit the nail on the head', 'drove the point home', 'cut to the chase', 'got straight to the point'],
            explanation: 'Hit the nail on the head = to describe exactly what is causing a situation or problem.',
            points: 1
          },
          {
            id: 'id3',
            context: 'Stop talking about irrelevant things and tell me what happened.',
            idiom: 'get to the point',
            meaning: 'to talk about the most important thing',
            correctUsage: 'Please get to the point, we don\'t have much time',
            options: ['get to the point', 'beat around the bush', 'go off on a tangent', 'miss the point'],
            explanation: 'Get to the point = to reach the main or most important part of what you are saying.',
            points: 1
          }
        ]
      },
      // GAP-FILL TEXT - Emphasis structures
      {
        id: 'b2-m1-l3-gapfill-1',
        type: 'gap-fill-text',
        title: 'Gap-Fill: Emphasis in Context',
        instructions: 'Complete the text with appropriate words. Each gap requires only ONE word.',
        text: `In today's competitive job market, {{1}} truly sets successful candidates apart is not just their qualifications but their ability to communicate effectively. {{2}} was a recent survey by top recruiters {{3}} revealed this surprising fact: soft skills are now valued {{4}} highly as technical expertise.

{{5}} many graduates fail to realize is that employers are looking for more than just academic achievements. {{6}} is the ability to work in teams and solve problems creatively {{7}} makes the real difference. {{8}} was during the pandemic that companies discovered the importance of adaptability and digital communication skills.

So {{9}} should job seekers focus on? {{10}} they need to develop is a combination of technical knowledge and interpersonal skills. {{11}} isn't enough to be brilliant in your field—you also need to be able to collaborate and communicate your ideas clearly. {{12}} is this balance that employers are actively seeking in today's candidates.`,
        gaps: [
          { id: 'g1', gapNumber: 1, correctAnswer: 'what', acceptableAlternatives: ['What'], explanation: 'What-cleft structure: "What truly sets...is"', points: 1 },
          { id: 'g2', gapNumber: 2, correctAnswer: 'It', acceptableAlternatives: ['it'], explanation: 'It-cleft structure: "It was...that"', points: 1 },
          { id: 'g3', gapNumber: 3, correctAnswer: 'that', acceptableAlternatives: ['which'], explanation: 'Relative pronoun completing the it-cleft', points: 1 },
          { id: 'g4', gapNumber: 4, correctAnswer: 'as', acceptableAlternatives: [], explanation: 'as...as comparison structure', points: 1 },
          { id: 'g5', gapNumber: 5, correctAnswer: 'What', acceptableAlternatives: ['what'], explanation: 'What-cleft: "What many fail to realize is"', points: 1 },
          { id: 'g6', gapNumber: 6, correctAnswer: 'It', acceptableAlternatives: ['it'], explanation: 'It-cleft emphasizing ability', points: 1 },
          { id: 'g7', gapNumber: 7, correctAnswer: 'that', acceptableAlternatives: ['which'], explanation: 'Completes the it-cleft structure', points: 1 },
          { id: 'g8', gapNumber: 8, correctAnswer: 'It', acceptableAlternatives: ['it'], explanation: 'It-cleft with time reference', points: 1 },
          { id: 'g9', gapNumber: 9, correctAnswer: 'what', acceptableAlternatives: ['What'], explanation: 'Question word in what-structure', points: 1 },
          { id: 'g10', gapNumber: 10, correctAnswer: 'What', acceptableAlternatives: ['what'], explanation: 'What-cleft: "What they need...is"', points: 1 },
          { id: 'g11', gapNumber: 11, correctAnswer: 'It', acceptableAlternatives: ['it'], explanation: 'It + be + not enough construction', points: 1 },
          { id: 'g12', gapNumber: 12, correctAnswer: 'It', acceptableAlternatives: ['it'], explanation: 'Final it-cleft for emphasis', points: 1 }
        ]
      },
      // SENTENCE REORDERING - Emphasis narrative
      {
        id: 'b2-m1-l3-reorder-1',
        type: 'sentence-reordering',
        title: 'Sentence Reordering: Building an Argument',
        instructions: 'Put the sentences in the correct logical order to form a coherent paragraph.',
        items: [
          {
            id: 'sr1',
            shuffledSentences: [
              'It was this realization that changed my approach to learning.',
              'What I discovered was that consistent practice matters more than long study sessions.',
              'I had been studying for hours every day, but my progress was slow.',
              'Now, what I do is practice for just 30 minutes daily, and my skills have improved dramatically.',
              'The problem was that I was exhausting myself and losing motivation.'
            ],
            correctOrder: [2, 4, 1, 0, 3],
            context: 'A student reflecting on their learning strategy',
            explanation: 'Logical flow: problem description → identifying issue → realization → changed approach → current success',
            points: 3
          }
        ]
      },
      // PRONUNCIATION PRACTICE - Emphasis patterns
      {
        id: 'b2-m1-l3-pronun-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Stress in Cleft Sentences',
        instructions: 'Practice pronouncing these cleft sentences with correct stress and intonation. Stressed words are in CAPITALS.',
        targetSentences: [
          {
            question: 'What I NEED is more TIME.',
            translation: 'Lo que necesito es más tiempo.',
            phonetic: '/wɒt aɪ ˈniːd ɪz mɔː ˈtaɪm/',
            audioUrl: '/audio/b2-m1-l3-pronun-1a.mp3'
          },
          {
            question: 'It was MARIA who made the DECISION.',
            translation: 'Fue María quien tomó la decisión.',
            phonetic: '/ɪt wɒz məˈriːə huː meɪd ðə dɪˈsɪʒən/',
            audioUrl: '/audio/b2-m1-l3-pronun-1b.mp3'
          },
          {
            question: 'What SURPRISED me most was their HONESTY.',
            translation: 'Lo que más me sorprendió fue su honestidad.',
            phonetic: '/wɒt səˈpraɪzd miː məʊst wɒz ðeə ˈɒnəsti/',
            audioUrl: '/audio/b2-m1-l3-pronun-1c.mp3'
          }
        ],
        focusPoints: [
          'Stress the emphasized element in cleft sentences',
          'Use rising-falling intonation for emphasis',
          'Clear pause after "what...is" structure'
        ],
        difficulty: 'medium',
        timeLimit: 180
      }
    ]
  },
  // LECCIÓN 4: Narrative Tenses Review
  {
    id: 'b2-m1-l4',
    title: 'Lección 4: Revisión Completa de Tiempos Narrativos',
    description: 'Integra todos los tiempos pasados para crear narrativas sofisticadas',
    duration: 90,
    objectives: [
      'Revisar y contrastar Past Simple, Past Continuous, Past Perfect',
      'Usar múltiples tiempos narrativos en una misma historia',
      'Aplicar marcadores temporales apropiados',
      'Escribir narrativas complejas y cohesivas'
    ],
    exercises: [
      {
        id: 'b2-m1-l4-grammar-1',
        type: 'grammar',
        title: 'Narrative Tenses: Uso Integrado',
        grammarPoint: 'Past Simple + Past Continuous + Past Perfect + Past Perfect Continuous',
        explanation: 'En narrativas complejas combinamos tiempos verbales:\n- Past Simple: acciones principales completadas\n- Past Continuous: acciones en progreso, contexto\n- Past Perfect: acciones anteriores a la narrativa principal\n- Past Perfect Continuous: duración antes de un punto en el pasado',
        examples: [
          'I was walking (continuous) home when I met (simple) an old friend I hadn\'t seen (perfect) for years.',
          'She had been working (perfect continuous) all day, so she was (simple) exhausted when she got (simple) home.',
          'While they were discussing (continuous) the project, the manager arrived (simple) with news that changed everything.',
          'He had already left (perfect) by the time I called (simple).',
          'We had been living (perfect continuous) in Tokyo for three years when the opportunity arose (simple).'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Choose the correct combination: While I ___ TV, the phone ___.',
            correctAnswer: 'was watching / rang',
            explanation: 'Acción en progreso (was watching) interrumpida por acción completada (rang).',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete the question: By the time we ___ (arrive), the movie ___ (already/start).',
            correctAnswer: 'arrived...had already started',
            explanation: 'La película empezó (past perfect) antes de que llegáramos (past simple).',
            points: 2
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Write a sentence using Past Perfect Continuous + Past Simple showing cause and effect.',
            correctAnswer: 'I had been studying all night, so I felt exhausted in the morning. (or similar)',
            explanation: 'La acción prolongada (had been studying) causa el resultado (felt exhausted).',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m1-l4-reading-1',
        type: 'reading',
        title: 'Reading: An Unexpected Discovery',
        text: `Dr. Sarah Chen had been working on her research project for nearly five years when she made the discovery that would change her career forever. It was a typical Tuesday morning in March 2019, and she was analyzing data from her latest experiment when something unusual caught her eye.

For months, she had been following the same protocol, carefully documenting every result. Her colleagues had begun to doubt whether the project would yield anything significant—some had even suggested she should move on to something else. But Sarah had never been one to give up easily. She had invested too much time and energy to abandon the work now.

That morning, as she was reviewing the data on her computer screen, she noticed an anomaly. The numbers weren't matching the expected patterns. At first, she thought it was an error. She had made mistakes before, and she knew how easy it was to misinterpret complex data. But the more she examined the results, the more excited she became. This wasn't an error—it was something genuinely new.

She immediately called her supervisor, Professor Martinez, who had been mentoring her since she joined the lab. He had been at a conference in Berlin but cut his trip short to return and see the data for himself. When he arrived the next day and reviewed her findings, his reaction confirmed what Sarah had suspected: they had stumbled upon something remarkable.

The weeks that followed were intense. Sarah and her team had been working around the clock to verify the results and prepare their findings for publication. They had to be absolutely certain—one mistake could discredit years of work. Finally, six months later, their paper was accepted by one of the most prestigious scientific journals in the world.

Looking back now, Sarah realized that what had seemed like an ordinary day had actually been the turning point of her career. If she hadn't been paying such close attention that morning, if she had dismissed the anomaly as a simple error, the discovery might have been lost forever. It was her persistence and attention to detail that had made all the difference.`,
        wordCount: 352,
        readingTime: 4,
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'How long had Dr. Chen been working on her project when she made the discovery?',
            correctAnswer: 'FalseThree years',
            explanation: 'Falso. El texto dice: "had been working...for nearly five years"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: Sarah\'s colleagues were all supportive of continuing the project.',
            correctAnswer: 'False',
            explanation: 'El texto dice que algunos colegas "had even suggested she should move on to something else"',
            points: 1
          },
          {
            id: 'q1',
            type: 'short-answer',
            question: 'What was Professor Martinez doing when Sarah called him?',
            correctAnswer: 'At a conference in Berlin',
            explanation: 'El texto menciona: "He had been at a conference in Berlin"',
            points: 2
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'How long did it take from the discovery until their paper was accepted?',
            correctAnswer: 'Six months',
            explanation: 'El texto dice: "Finally, six months later, their paper was accepted"',
            points: 1
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'Find and write THREE different past tenses used in the first paragraph.',
            correctAnswer: 'had been working (Past Perfect Continuous), would change (conditional), was (Past Simple), was analyzing (Past Continuous), caught (Past Simple)',
            explanation: 'El primer párrafo contiene múltiples tiempos narrativos.',
            points: 3
          }
        ],
        vocabularyHelp: [
          { word: 'anomaly', definition: 'something that deviates from what is standard or expected' },
          { word: 'protocol', definition: 'a set of rules or procedures to be followed' },
          { word: 'yield', definition: 'produce or provide (a result or benefit)' },
          { word: 'stumbled upon', definition: 'found or discovered by chance' },
          { word: 'discredit', definition: 'harm the good reputation of; cause to be doubted' }
        ]
      },
      {
        id: 'b2-m1-l4-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m1-l4-listening-1.mp3',
        duration: 140,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Host: Welcome back to "Life Stories." Today I'm talking with James Parker, who climbed Mount Everest at the age of 52. James, tell us how this adventure began.

James: Well, it's quite a story. I had been living a pretty ordinary life—working in an office, spending weekends with my family. Then, about five years ago, something happened that changed everything. My best friend, who I had known since childhood, suddenly passed away. He was only 50.

Host: I'm sorry to hear that.

James: Thank you. His death really shook me. He had always talked about all the things he wanted to do—places he wanted to visit, adventures he dreamed of having. But he had been putting them off, waiting for the "right time" that never came. When he died, I realized I was doing exactly the same thing. I had been making excuses for years—I was too busy, too old, too out of shape.

Host: So what did you do?

James: I made a list of everything I had always wanted to do but had been too scared or too comfortable to attempt. Climbing Everest was at the top of that list. I had been fascinated by mountaineering since I was a teenager, but I had never seriously considered actually doing it.

Host: And you just decided to go for it?

James: Not immediately. First, I started training. I joined a gym, hired a personal trainer, and began hiking every weekend. For the first six months, I was struggling. I had never been particularly athletic, and I was carrying about 30 extra pounds. But gradually, I was getting fitter and stronger. After a year, I had lost the weight and completed several challenging climbs in the Alps.

Host: When did you attempt Everest?

James: It was three years after I started training. By then, I had climbed peaks in South America and had been working with an experienced mountain guide for over a year. When I finally stood at the summit of Everest, I was thinking about my friend. I wish he could have been there. But in a way, he was—it was his death that had given me the courage to truly live.`,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What was James doing before he decided to climb Everest?',
            correctAnswer: 'He was living an ordinary office life',
            explanation: 'James menciona: "I had been living a pretty ordinary life—working in an office"',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What event inspired James to change his life?',
            correctAnswer: 'His best friend\'s death / His friend passing away suddenly',
            explanation: 'La muerte de su mejor amigo a los 50 años lo inspiró a cambiar.',
            points: 2
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: James found the first six months of training easy.',
            correctAnswer: 'False',
            explanation: 'James dice: "For the first six months, I was struggling"',
            points: 1
          },
          {
            id: 'q6',
            type: 'true-false',
            question: 'How long after he started training did James attempt Everest?',
            correctAnswer: 'FalseOne year',
            explanation: 'Falso. James menciona: "It was three years after I started training"',
            points: 1
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'What had James been fascinated by since he was a teenager?',
            correctAnswer: 'Mountaineering',
            explanation: 'James dice: "I had been fascinated by mountaineering since I was a teenager"',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l4-speaking-1',
        type: 'speaking',
        prompt: 'Tell a story about a significant moment in your life. Use a variety of past tenses (Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous) to make your narrative vivid and engaging. Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Set the scene with Past Continuous: "I was living in... / It was raining..."',
          'Use Past Perfect for background: "I had been hoping to... / I had never experienced..."',
          'Main events with Past Simple: "Then I decided... / She told me..."',
          'Show duration with Past Perfect Continuous: "I had been waiting for..."',
          'Connect events with time expressions: when, while, before, after, by the time'
        ],
        targetWords: [
          'was living',
          'was raining',
          'had been hoping',
          'had never experienced',
          'decided',
          'told',
          'had been waiting',
          'when',
          'while',
          'before',
          'after',
          'by the time',
          'significant moment',
          'vivid',
          'engaging'
        ],
        expectedResponse: 'A 2-3 minute narrative about a significant life moment using varied past tenses. Should include: (1) Scene-setting with Past Continuous (\"I was living in...\", \"It was raining...\"), (2) Background information with Past Perfect (\"I had been hoping...\", \"I had never experienced...\"), (3) Main events in Past Simple (\"I decided...\", \"She told me...\"), (4) Duration/continuous actions with Past Perfect Continuous (\"I had been waiting for...\"), (5) Time connectors (when, while, before, after, by the time) to link events. Demonstrates mastery of narrative tenses and engaging storytelling.'
      },
      {
        id: 'b2-m1-l4-writing-1',
        type: 'writing',
        prompt: 'Write a narrative (200-220 words) titled "The Day Everything Changed". Use all narrative tenses (Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous) to create a vivid, engaging story.',
        writingType: 'article',
        minWords: 200,
        maxWords: 220,
        timeLimit: 35,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Start with scene-setting using Past Continuous',
          'Include background information with Past Perfect',
          'Use Past Simple for main events in chronological order',
          'Show duration/cause with Past Perfect Continuous',
          'Include time markers: that morning, by then, earlier, when, while',
          'Create a clear narrative arc: setup → event → consequence'
        ]
      },
      // KEY WORD TRANSFORMATIONS - FCE Part 4 Practice
      {
        id: 'b2-m1-l4-keytransform-1',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Cleft Sentences',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt1',
            question: 'I need some rest more than anything.',
            keyWord: 'what',
            startOfAnswer: 'What',
            correctAnswer: 'I need is some',
            explanation: 'Cleft sentence with "what" for emphasis on object.',
            points: 2
          },
          {
            id: 'kt2',
            question: 'She won the competition last year.',
            keyWord: 'was',
            startOfAnswer: 'It',
            correctAnswer: 'was last year that',
            explanation: 'It-cleft to emphasize time (last year).',
            points: 2
          },
          {
            id: 'kt3',
            question: 'The noise bothers me most.',
            keyWord: 'what',
            startOfAnswer: 'What',
            correctAnswer: 'bothers me most is',
            explanation: 'What-cleft to emphasize subject.',
            points: 2
          },
          {
            id: 'kt4',
            question: 'He bought the car in London.',
            keyWord: 'where',
            startOfAnswer: 'It was in',
            correctAnswer: 'London where he bought',
            explanation: 'It-cleft emphasizing place (where).',
            points: 2
          },
          {
            id: 'kt5',
            question: 'I really enjoy listening to music.',
            keyWord: 'what',
            startOfAnswer: 'What',
            correctAnswer: 'I really enjoy is',
            explanation: 'What-cleft emphasizing the activity.',
            points: 2
          },
          {
            id: 'kt6',
            question: 'John told me about the accident.',
            keyWord: 'who',
            startOfAnswer: 'It was',
            correctAnswer: 'John who told me',
            explanation: 'It-cleft emphasizing the person (who).',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l4-keytransform-2',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Emphasis & Focus',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt7',
            question: 'I dislike his arrogance the most.',
            keyWord: 'thing',
            startOfAnswer: 'The',
            correctAnswer: 'thing I dislike most',
            explanation: 'The thing + relative clause for emphasis.',
            points: 2
          },
          {
            id: 'kt8',
            question: 'We need better communication, not more rules.',
            keyWord: 'what',
            startOfAnswer: 'What',
            correctAnswer: 'we need is better',
            explanation: 'What-cleft emphasizing the real need.',
            points: 2
          },
          {
            id: 'kt9',
            question: 'The weather ruined our picnic.',
            keyWord: 'that',
            startOfAnswer: 'It was the',
            correctAnswer: 'weather that ruined our',
            explanation: 'It-cleft emphasizing the cause.',
            points: 2
          },
          {
            id: 'kt10',
            question: 'She loves traveling more than anything else.',
            keyWord: 'thing',
            startOfAnswer: 'The',
            correctAnswer: 'thing she loves most',
            explanation: 'The thing + relative clause structure.',
            points: 2
          },
          {
            id: 'kt11',
            question: 'They finally understood the problem yesterday.',
            keyWord: 'when',
            startOfAnswer: 'It was',
            correctAnswer: 'yesterday when they finally',
            explanation: 'It-cleft with "when" emphasizing time.',
            points: 2
          },
          {
            id: 'kt12',
            question: 'We should focus on quality, not quantity.',
            keyWord: 'what',
            startOfAnswer: 'What',
            correctAnswer: 'we should focus on',
            explanation: 'What-cleft emphasizing the right focus.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l4-wordform-1',
        type: 'word-formation',
        title: 'Word Formation: Narrative Power',
        text: `Storytelling has been central to human (1. COMMUNICATE)_____ since ancient times. What makes narratives so (2. POWER)_____ is their ability to create (3. EMOTION)_____ connections between the teller and audience. A well-crafted story can be more (4. PERSUADE)_____ than mere facts, as it engages both our rational and emotional faculties. The (5. EFFECTIVE)_____ of storytelling in education and leadership is well-documented. Stories make abstract concepts (6. ACCESS)_____ and memorable, facilitating deeper (7. UNDERSTAND)_____. This is why successful communicators (8. VARY)_____ use narratives to convey complex ideas.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'COMMUNICATE', correctAnswer: 'communication', acceptableAnswers: ['communication'], explanation: '"Human communication" - exchange of information and ideas.', wordType: 'noun', transformation: 'verb → noun (-ation)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'POWER', correctAnswer: 'powerful', acceptableAnswers: ['powerful'], explanation: '"So powerful" - having great effect or influence.', wordType: 'adjective', transformation: 'noun → adjective (-ful)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'EMOTION', correctAnswer: 'emotional', acceptableAnswers: ['emotional'], explanation: '"Emotional connections" - relating to emotions and feelings.', wordType: 'adjective', transformation: 'noun → adjective (-al)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'PERSUADE', correctAnswer: 'persuasive', acceptableAnswers: ['persuasive'], explanation: '"More persuasive" - good at convincing people.', wordType: 'adjective', transformation: 'verb → adjective (-ive)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'EFFECTIVE', correctAnswer: 'effectiveness', acceptableAnswers: ['effectiveness'], explanation: '"The effectiveness of" - degree to which something is successful.', wordType: 'noun', transformation: 'adjective → noun (-ness)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'ACCESS', correctAnswer: 'accessible', acceptableAnswers: ['accessible'], explanation: '"Make accessible" - easy to understand or obtain.', wordType: 'adjective', transformation: 'noun → adjective (-ible)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'UNDERSTAND', correctAnswer: 'understanding', acceptableAnswers: ['understanding'], explanation: '"Deeper understanding" - comprehension or grasp of knowledge.', wordType: 'noun', transformation: 'verb → noun (gerund)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'VARY', correctAnswer: 'invariably', acceptableAnswers: ['invariably'], explanation: '"Invariably use" - always, without variation. Negative prefix in-.', wordType: 'adverb', transformation: 'verb → adverb (in- + -ably)', points: 1 }
        ],
        focusAreas: ['Communication vocabulary', '-ful/-ive suffixes', 'Gerunds']
      },
      {
        id: 'b2-m1-l4-wordform-2',
        type: 'word-formation',
        title: 'Word Formation: Memory and Experience',
        text: `Our memories are (1. SURPRISE)_____ unreliable. What we remember as factual events are often (2. CONSTRUCT)_____ influenced by our current beliefs and emotions. This (3. PSYCHOLOGY)_____ phenomenon has important (4. IMPLY)_____ for eyewitness testimony and personal narratives. The (5. ACCURATE)_____ of memory doesn't necessarily make experiences less meaningful, but it does highlight the (6. SUBJECT)_____ nature of human perception. Understanding these (7. LIMIT)_____ helps us approach personal histories with appropriate (8. SKEPTIC)_____ while still valuing their emotional truth.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'SURPRISE', correctAnswer: 'surprisingly', acceptableAnswers: ['surprisingly'], explanation: '"Surprisingly unreliable" - in a way that causes surprise.', wordType: 'adverb', transformation: 'verb → adverb (-ingly)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'CONSTRUCT', correctAnswer: 'reconstructions', acceptableAnswers: ['reconstructions'], explanation: '"Reconstructions influenced" - things rebuilt. Prefix re- means again.', wordType: 'noun', transformation: 'verb → noun (re- + -ion + plural)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'PSYCHOLOGY', correctAnswer: 'psychological', acceptableAnswers: ['psychological'], explanation: '"Psychological phenomenon" - relating to the mind and behavior.', wordType: 'adjective', transformation: 'noun → adjective (-ical)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'IMPLY', correctAnswer: 'implications', acceptableAnswers: ['implications'], explanation: '"Important implications" - possible effects or results.', wordType: 'noun', transformation: 'verb → noun (-ations plural)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'ACCURATE', correctAnswer: 'inaccuracy', acceptableAnswers: ['inaccuracy'], explanation: '"The inaccuracy of memory" - lack of accuracy. Negative prefix in-.', wordType: 'noun', transformation: 'adjective → noun (in- + -acy)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'SUBJECT', correctAnswer: 'subjective', acceptableAnswers: ['subjective'], explanation: '"Subjective nature" - based on personal feelings rather than facts.', wordType: 'adjective', transformation: 'noun → adjective (-ive)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'LIMIT', correctAnswer: 'limitations', acceptableAnswers: ['limitations'], explanation: '"These limitations" - restrictions or weaknesses.', wordType: 'noun', transformation: 'verb → noun (-ations plural)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'SKEPTIC', correctAnswer: 'skepticism', acceptableAnswers: ['skepticism', 'scepticism'], explanation: '"Appropriate skepticism" - attitude of doubting claims.', wordType: 'noun', transformation: 'noun → abstract noun (-ism)', points: 1 }
        ],
        focusAreas: ['Prefix re-', 'Negative prefix in-', 'Abstract nouns']
      },
      // SENTENCE COMPLETION - Narrative tenses
      {
        id: 'b2-m1-l4-sentcomp-1',
        type: 'sentence-completion',
        title: 'Sentence Completion: Narrative Tenses',
        instructions: 'Complete each sentence with the correct narrative tense combination.',
        sentences: [
          {
            id: 'sc1',
            prompt: 'By the time we arrived, the film...',
            correctCompletion: 'had already started',
            options: ['had already started', 'already started', 'was already starting', 'has already started'],
            explanation: 'Past Perfect for action completed before another past action.',
            points: 1
          },
          {
            id: 'sc2',
            prompt: 'She was tired because she...',
            correctCompletion: 'had been working all day',
            options: ['had been working all day', 'was working all day', 'worked all day', 'has been working all day'],
            explanation: 'Past Perfect Continuous shows duration causing the result.',
            points: 1
          },
          {
            id: 'sc3',
            prompt: 'While I was walking home, I...',
            correctCompletion: 'met an old friend',
            options: ['met an old friend', 'was meeting an old friend', 'had met an old friend', 'have met an old friend'],
            explanation: 'Past Simple for completed action interrupting continuous action.',
            points: 1
          },
          {
            id: 'sc4',
            prompt: 'They had never seen snow until...',
            correctCompletion: 'they visited Canada',
            explanation: 'Past Perfect + Past Simple for first-time experience.',
            points: 1
          }
        ]
      },
      // ERROR IDENTIFICATION - Past tenses
      {
        id: 'b2-m1-l4-error-1',
        type: 'error-identification',
        title: 'Error Identification: Past Tense Mistakes',
        instructions: 'Identify and correct the tense errors in each sentence.',
        sentences: [
          {
            id: 'e1',
            question: 'When I arrived, they already left.',
            hasError: true,
            errorWord: 'left',
            correction: 'When I arrived, they had already left',
            explanation: 'Need Past Perfect (had left) for action before another past action.',
            points: 2
          },
          {
            id: 'e2',
            question: 'She had been lived in Paris for three years when she got the job.',
            hasError: true,
            errorWord: 'lived',
            correction: 'She had been living in Paris for three years when she got the job',
            explanation: 'Past Perfect Continuous uses "had been + -ing", not past participle.',
            points: 2
          },
          {
            id: 'e3',
            question: 'While he was reading, the phone rang.',
            hasError: false,
            explanation: 'Correct: Past Continuous interrupted by Past Simple.',
            points: 1
          },
          {
            id: 'e4',
            question: 'I was knowing her for years before we became business partners.',
            hasError: true,
            errorWord: 'was knowing',
            correction: 'I had known her for years before we became business partners',
            explanation: '"Know" is a stative verb; use Past Perfect, not continuous.',
            points: 2
          },
          {
            id: 'e5',
            question: 'They have finished dinner when we called.',
            hasError: true,
            errorWord: 'have finished',
            correction: 'They had finished dinner when we called',
            explanation: 'Use Past Perfect (had finished), not Present Perfect with past context.',
            points: 2
          }
        ]
      },
      // PARAPHRASING - Narrative transformation
      {
        id: 'b2-m1-l4-para-1',
        type: 'paraphrasing',
        title: 'Paraphrasing: Narrative Rewrites',
        instructions: 'Rewrite each pair of sentences as one sentence using appropriate narrative tenses.',
        items: [
          {
            id: 'p1',
            originalSentence: 'First, she finished her homework. Then, she went to bed.',
            correctParaphrase: 'After she had finished her homework, she went to bed',
            alternatives: ['She went to bed after she had finished her homework'],
            explanation: 'Combine with Past Perfect + Past Simple.',
            points: 2
          },
          {
            id: 'p2',
            originalSentence: 'He studied for hours. As a result, he was exhausted.',
            correctParaphrase: 'He was exhausted because he had been studying for hours',
            alternatives: ['Because he had been studying for hours, he was exhausted'],
            explanation: 'Use Past Perfect Continuous to show cause and effect.',
            points: 2
          },
          {
            id: 'p3',
            originalSentence: 'I was driving. Suddenly, I saw an accident.',
            correctParaphrase: 'While I was driving, I saw an accident',
            alternatives: ['I saw an accident while I was driving'],
            explanation: 'Past Continuous + Past Simple for interrupted action.',
            points: 2
          }
        ]
      },
      // COLLOCATION MATCHING - Narrative vocabulary
      {
        id: 'b2-m1-l4-colloc-1',
        type: 'collocation-matching',
        title: 'Collocations: Story and Narrative',
        instructions: 'Match each verb with its correct narrative collocation.',
        pairs: [
          {
            id: 'col1',
            word: 'tell',
            correctMatch: 'a story',
            distractors: ['an experience', 'a memory', 'a situation'],
            example: 'He told a story about his childhood.',
            points: 1
          },
          {
            id: 'col2',
            word: 'recount',
            correctMatch: 'an experience',
            distractors: ['a story', 'a novel', 'a tale'],
            example: 'She recounted her experience of traveling through Asia.',
            points: 1
          },
          {
            id: 'col3',
            word: 'recall',
            correctMatch: 'a memory',
            distractors: ['a story', 'an experience', 'a narrative'],
            example: 'I vividly recall the memory of our first meeting.',
            points: 1
          },
          {
            id: 'col4',
            word: 'describe',
            correctMatch: 'a situation',
            distractors: ['a memory', 'a story', 'a tale'],
            example: 'Can you describe the situation more clearly?',
            points: 1
          },
          {
            id: 'col5',
            word: 'narrate',
            correctMatch: 'events',
            distractors: ['memories', 'situations', 'experiences'],
            example: 'The documentary narrates events from the war.',
            points: 1
          }
        ]
      },
      // PHRASAL VERBS - Time and sequence
      {
        id: 'b2-m1-l4-phrasal-1',
        type: 'phrasal-verbs',
        title: 'Phrasal Verbs: Time and Sequence',
        instructions: 'Choose the correct phrasal verb for each narrative context.',
        items: [
          {
            id: 'pv1',
            question: 'The meeting _____ longer than expected.',
            phrasalVerb: 'went on',
            meaning: 'continued, lasted',
            correctAnswer: 'went on',
            options: ['went on', 'went off', 'went out', 'went through'],
            explanation: 'Go on = to continue or last for a period of time.',
            points: 1
          },
          {
            id: 'pv2',
            question: 'Looking back, I can see how everything _____.',
            phrasalVerb: 'worked out',
            meaning: 'developed, turned out',
            correctAnswer: 'worked out',
            options: ['worked out', 'worked up', 'worked off', 'worked in'],
            explanation: 'Work out = to develop or turn out in a particular way.',
            points: 1
          },
          {
            id: 'pv3',
            question: 'I _____ some old photos while cleaning the attic.',
            phrasalVerb: 'came across',
            meaning: 'found by chance',
            correctAnswer: 'came across',
            options: ['came across', 'came about', 'came along', 'came around'],
            explanation: 'Come across = to find or discover something by chance.',
            points: 1
          },
          {
            id: 'pv4',
            question: 'The tradition has been _____ for generations.',
            phrasalVerb: 'passed down',
            meaning: 'transmitted from one generation to another',
            correctAnswer: 'passed down',
            options: ['passed down', 'passed out', 'passed by', 'passed over'],
            explanation: 'Pass down = to give or teach something to younger generations.',
            points: 1
          }
        ]
      },
      // IDIOMS - Time and memory
      {
        id: 'b2-m1-l4-idioms-1',
        type: 'idioms-expressions',
        title: 'Idioms: Time and Memory',
        instructions: 'Complete each narrative with the appropriate time-related idiom.',
        items: [
          {
            id: 'id1',
            context: 'The event happened so quickly that it\'s difficult to remember.',
            idiom: 'in the blink of an eye',
            meaning: 'very quickly, in an instant',
            correctUsage: 'Everything changed in the blink of an eye',
            options: ['in the blink of an eye', 'once in a blue moon', 'in the nick of time', 'against the clock'],
            explanation: 'In the blink of an eye = extremely quickly.',
            points: 1
          },
          {
            id: 'id2',
            context: 'We barely made it; we arrived just before the deadline.',
            idiom: 'in the nick of time',
            meaning: 'at the last possible moment',
            correctUsage: 'We finished the project in the nick of time',
            options: ['in the nick of time', 'in the blink of an eye', 'time after time', 'from time to time'],
            explanation: 'In the nick of time = just before it\'s too late.',
            points: 1
          },
          {
            id: 'id3',
            context: 'Looking back at that period of my life brings mixed emotions.',
            idiom: 'down memory lane',
            meaning: 'reminiscing about the past',
            correctUsage: 'Taking a trip down memory lane always makes me nostalgic',
            options: ['down memory lane', 'once in a while', 'the good old days', 'better late than never'],
            explanation: 'Down memory lane = an imaginary path through remembered past.',
            points: 1
          }
        ]
      },
      // GAP-FILL TEXT - Past tenses
      {
        id: 'b2-m1-l4-gapfill-1',
        type: 'gap-fill-text',
        title: 'Gap-Fill: A Memorable Journey',
        instructions: 'Complete the narrative with the correct past tense forms. Write only ONE word per gap.',
        text: `Last summer, I decided to visit a place I {{1}} never {{2}} to before—Iceland. I {{3}} {{4}} planning the trip for months when, unexpectedly, my best friend {{5}} she wanted to join me.

We {{6}} in Reykjavik early one morning. The sun {{7}} {{8}} shining since 4 AM—we {{9}} {{10}} about the midnight sun, but experiencing it was completely different. While we {{11}} {{12}} our rental car, we met a local who recommended some hidden spots that tourists rarely visit.

For the next week, we explored incredible landscapes. We {{13}} waterfalls that {{14}} {{15}} flowing for thousands of years, and walked on glaciers that {{16}} {{17}} slowly receding due to climate change. One afternoon, while we {{18}} {{19}} along a remote coastal road, we spotted a pod of whales. It was something I {{20}} {{21}} imagining for years, and now it {{22}} {{23}} happening right before my eyes.`,
        gaps: [
          { id: 'g1', gapNumber: 1, correctAnswer: 'had', explanation: 'Past Perfect: "had never been"', points: 1 },
          { id: 'g2', gapNumber: 2, correctAnswer: 'been', acceptableAlternatives: ['gone', 'traveled', 'travelled'], explanation: 'Past participle completing Past Perfect', points: 1 },
          { id: 'g3', gapNumber: 3, correctAnswer: 'had', explanation: 'Past Perfect Continuous: "had been planning"', points: 1 },
          { id: 'g4', gapNumber: 4, correctAnswer: 'been', explanation: 'Completing Past Perfect Continuous', points: 1 },
          { id: 'g5', gapNumber: 5, correctAnswer: 'said', acceptableAlternatives: ['announced', 'mentioned'], explanation: 'Past Simple for completed action', points: 1 },
          { id: 'g6', gapNumber: 6, correctAnswer: 'arrived', acceptableAlternatives: ['landed'], explanation: 'Past Simple for main narrative action', points: 1 },
          { id: 'g7', gapNumber: 7, correctAnswer: 'had', explanation: 'Past Perfect Continuous: "had been shining"', points: 1 },
          { id: 'g8', gapNumber: 8, correctAnswer: 'been', explanation: 'Completing Past Perfect Continuous', points: 1 },
          { id: 'g9', gapNumber: 9, correctAnswer: 'had', explanation: 'Past Perfect: "had read/heard"', points: 1 },
          { id: 'g10', gapNumber: 10, correctAnswer: 'read', acceptableAlternatives: ['heard', 'known', 'learned', 'learnt'], explanation: 'Past participle', points: 1 },
          { id: 'g11', gapNumber: 11, correctAnswer: 'were', explanation: 'Past Continuous: "were picking up"', points: 1 },
          { id: 'g12', gapNumber: 12, correctAnswer: 'picking', acceptableAlternatives: ['collecting', 'getting'], explanation: 'Present participle for continuous', points: 1 },
          { id: 'g13', gapNumber: 13, correctAnswer: 'saw', acceptableAlternatives: ['visited', 'found'], explanation: 'Past Simple for main action', points: 1 },
          { id: 'g14', gapNumber: 14, correctAnswer: 'had', explanation: 'Past Perfect Continuous: "had been flowing"', points: 1 },
          { id: 'g15', gapNumber: 15, correctAnswer: 'been', explanation: 'Completing Past Perfect Continuous', points: 1 },
          { id: 'g16', gapNumber: 16, correctAnswer: 'were', acceptableAlternatives: ['had'], explanation: 'Past Continuous or Past Perfect Continuous', points: 1 },
          { id: 'g17', gapNumber: 17, correctAnswer: 'slowly', acceptableAlternatives: ['been'], explanation: 'Adverb or continuous helper', points: 1 },
          { id: 'g18', gapNumber: 18, correctAnswer: 'were', explanation: 'Past Continuous: "were driving"', points: 1 },
          { id: 'g19', gapNumber: 19, correctAnswer: 'driving', explanation: 'Present participle', points: 1 },
          { id: 'g20', gapNumber: 20, correctAnswer: 'had', explanation: 'Past Perfect Continuous: "had been imagining"', points: 1 },
          { id: 'g21', gapNumber: 21, correctAnswer: 'been', explanation: 'Completing Past Perfect Continuous', points: 1 },
          { id: 'g22', gapNumber: 22, correctAnswer: 'was', explanation: 'Past Continuous: "was happening"', points: 1 },
          { id: 'g23', gapNumber: 23, correctAnswer: 'actually', acceptableAlternatives: ['really', 'finally'], explanation: 'Adverb for emphasis', points: 1 }
        ]
      },
      // SENTENCE REORDERING - Narrative flow
      {
        id: 'b2-m1-l4-reorder-1',
        type: 'sentence-reordering',
        title: 'Sentence Reordering: Creating Narrative Flow',
        instructions: 'Arrange the sentences in the correct chronological and logical order.',
        items: [
          {
            id: 'sr1',
            shuffledSentences: [
              'By the time the rescue team arrived, we had been waiting for over three hours.',
              'While we were hiking, dark clouds suddenly appeared on the horizon.',
              'We had been planning this mountain trek for weeks.',
              'The storm hit with unexpected intensity, forcing us to seek shelter.',
              'Looking back, I realized we should have checked the weather forecast more carefully.'
            ],
            correctOrder: [2, 1, 3, 0, 4],
            context: 'A mountain hiking experience gone wrong',
            explanation: 'Correct sequence: planning (background) → hiking (setting) → storm (event) → waiting (consequence) → reflection',
            points: 3
          }
        ]
      },
      // SUMMARY WRITING
      {
        id: 'b2-m1-l4-summary-1',
        type: 'summary-writing',
        title: 'Summary Writing: Condensing a Narrative',
        instructions: 'Read the passage and write a summary in 70-90 words. Focus on the main events and outcome.',
        sourceText: `Maria Rodriguez had always dreamed of opening her own bakery. For years, she had been working as a pastry chef in various restaurants, saving every penny she could. By 2019, she had finally accumulated enough capital to make her dream a reality. She found a perfect location in her neighborhood—a small corner shop that had been vacant for months.

However, just as she was about to sign the lease, the COVID-19 pandemic hit. Everything came to a standstill. While others might have given up, Maria adapted. She started baking from her home kitchen and began selling online. Her business grew steadily through word of mouth and social media.

By the end of 2021, when restrictions had eased, Maria not only opened her bakery but expanded it to include a small café. Her persistence during the difficult times had actually allowed her to build a loyal customer base before even opening her physical location. Today, "Maria's Kitchen" is one of the most popular spots in the neighborhood, and she's planning to open a second location.`,
        targetWordCount: 80,
        minWords: 70,
        maxWords: 90,
        keyPoints: [
          'Maria\'s dream of owning a bakery',
          'Pandemic disrupted original plans',
          'Adapted by selling online from home',
          'Built customer base before opening',
          'Successfully opened and now expanding'
        ],
        rubric: {
          content: 40,
          conciseness: 30,
          accuracy: 20,
          grammar: 10
        }
      },

      // PRONUNCIATION PRACTICE
      {
        id: 'b2-m1-l4-pronun-1',
        type: 'pronunciation-practice',
        title: 'Pronunciation: Past Tense Endings',
        instructions: 'Practice pronouncing these past tense forms with correct /t/, /d/, or /ɪd/ endings.',
        targetSentences: [
          {
            question: 'She had WORKED for YEARS before she was PROMOTED.',
            translation: 'Ella había trabajado durante años antes de ser promovida.',
            phonetic: '/ʃiː hæd ˈwɜːkt fɔː ˈjɪəz bɪˈfɔː ʃiː wɒz prəˈməʊtɪd/',
            audioUrl: '/audio/b2-m1-l4-pronun-1a.mp3'
          },
          {
            question: 'They had LIVED in PARIS before they MOVED to ROME.',
            translation: 'Ellos habían vivido en París antes de mudarse a Roma.',
            phonetic: '/ðeɪ hæd ˈlɪvd ɪn ˈpærɪs bɪˈfɔː ðeɪ ˈmuːvd tə ˈrəʊm/',
            audioUrl: '/audio/b2-m1-l4-pronun-1b.mp3'
          },
          {
            question: 'I had WANTED to VISIT for YEARS.',
            translation: 'Había querido visitar durante años.',
            phonetic: '/aɪ hæd ˈwɒntɪd tə ˈvɪzɪt fɔː ˈjɪəz/',
            audioUrl: '/audio/b2-m1-l4-pronun-1c.mp3'
          }
        ],
        focusPoints: [
          '/t/ sound after voiceless consonants (worked, helped)',
          '/d/ sound after voiced consonants and vowels (lived, played)',
          '/ɪd/ sound after /t/ or /d/ (wanted, needed)'
        ],
        difficulty: 'medium',
        timeLimit: 180
      }
    ]
  },
  // ============================================
  // MÓDULO 1 - LECCIÓN 5: Literary Analysis & Criticism
  // ============================================
  {
    id: 'b2-m1-l5',
    title: 'Lección 5: Análisis Literario y Crítica',
    description: 'Desarrolla habilidades de análisis crítico y vocabulario literario avanzado',
    duration: 90,
    objectives: [
      'Analizar textos literarios con profundidad',
      'Usar vocabulario crítico y analítico',
      'Expresar opiniones literarias de forma sofisticada',
      'Escribir reseñas y críticas estructuradas'
    ],
    exercises: [
      {
        id: 'b2-m1-l5-vocabulary-1',
        type: 'vocabulary',
        title: 'Literary Terms and Critical Vocabulary',
        vocabularySet: [
          {
            word: 'protagonist',
            definition: 'the main character in a story',
            example: 'The protagonist faces numerous challenges throughout the novel.'
          },
          {
            word: 'theme',
            definition: 'the central idea or message of a literary work',
            example: 'The theme of isolation runs throughout the entire narrative.'
          },
          {
            word: 'metaphor',
            definition: 'a figure of speech comparing two unlike things',
            example: 'The author uses the metaphor of a journey to represent life.'
          },
          {
            word: 'compelling',
            definition: 'very interesting and able to hold attention',
            example: 'The novel presents a compelling argument about human nature.'
          },
          {
            word: 'nuanced',
            definition: 'characterized by subtle differences or distinctions',
            example: 'Her nuanced portrayal of the character won critical acclaim.'
          }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'The main character in a story is called the ___.',
            correctAnswer: 'protagonist',
            explanation: 'El protagonista es el personaje principal.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l5-speaking-1',
        type: 'speaking',
        prompt: 'Talk about a book, film, or TV series that made a strong impression on you. Analyze what made it compelling: the characters, themes, narrative style, or other elements. Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Introduce the work (title, author/director, genre)',
          'Describe the plot briefly without spoilers',
          'Analyze what made it compelling/effective',
          'Discuss themes or deeper meanings',
          'Use vocabulary: protagonist, theme, compelling, nuanced',
          'Give your personal critique'
        ],
        targetWords: [
          'protagonist',
          'theme',
          'compelling',
          'nuanced',
          'narrative style',
          'characters',
          'made an impression',
          'analyze',
          'effective',
          'deeper meanings',
          'critique'
        ],
        expectedResponse: 'A 2-3 minute analysis of a book, film, or TV series. Should include: (1) Introduction with title, author/director, and genre, (2) Brief plot summary without major spoilers, (3) Analysis of what made it compelling using literary vocabulary (protagonist, theme, nuanced, narrative style), (4) Discussion of deeper meanings or themes, (5) Personal critique and evaluation. Demonstrates ability to analyze cultural works critically and use advanced literary/analytical vocabulary.'
      },
      // KEY WORD TRANSFORMATIONS - FCE Part 4 Practice
      {
        id: 'b2-m1-l5-keytransform-1',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Literary & Critical Language',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt1',
            question: 'The film was so moving that I cried.',
            keyWord: 'such',
            startOfAnswer: 'It was',
            correctAnswer: 'such a moving film',
            explanation: 'Convert "so + adjective" to "such + a + adjective + noun".',
            points: 2
          },
          {
            id: 'kt2',
            question: 'The plot is very complex and hard to follow.',
            keyWord: 'such',
            startOfAnswer: 'The plot is',
            correctAnswer: 'of such complexity that',
            explanation: 'Using "of such + noun" for emphasis.',
            points: 2
          },
          {
            id: 'kt3',
            question: 'The author describes the scene brilliantly.',
            keyWord: 'brilliant',
            startOfAnswer: 'The author\'s',
            correctAnswer: 'description of the scene',
            explanation: 'Convert verb to noun form (describes → description).',
            points: 2
          },
          {
            id: 'kt4',
            question: 'Despite having a simple plot, the novel is engaging.',
            keyWord: 'although',
            startOfAnswer: 'Although',
            correctAnswer: 'the plot is simple',
            explanation: 'Convert prepositional phrase to clause with "although".',
            points: 2
          },
          {
            id: 'kt5',
            question: 'The character development is what impressed me most.',
            keyWord: 'was',
            startOfAnswer: 'What',
            correctAnswer: 'impressed me most was',
            explanation: 'What-cleft for emphasis on subject.',
            points: 2
          },
          {
            id: 'kt6',
            question: 'She is known for her vivid imagery.',
            keyWord: 'known',
            startOfAnswer: 'She',
            correctAnswer: 'is known to use',
            explanation: 'Passive reporting structure with infinitive.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l5-keytransform-2',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Review & Opinion Structures',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt7',
            question: 'In my opinion, this is the best book of the year.',
            keyWord: 'far',
            startOfAnswer: 'This is',
            correctAnswer: 'by far the best',
            explanation: 'Using "by far" to emphasize superlative.',
            points: 2
          },
          {
            id: 'kt8',
            question: 'The performances were so good that the audience stood up.',
            keyWord: 'were',
            startOfAnswer: 'Such',
            correctAnswer: 'were the performances that',
            explanation: 'Inversion with "such" for emphasis.',
            points: 2
          },
          {
            id: 'kt9',
            question: 'I found the ending disappointing.',
            keyWord: 'disappointed',
            startOfAnswer: 'I was',
            correctAnswer: 'disappointed by the ending',
            explanation: 'Convert adjective to passive voice with emotion.',
            points: 2
          },
          {
            id: 'kt10',
            sentence: 'The film didn\'t live up to my expectations.',
            keyWord: 'as',
            startOfAnswer: 'The film wasn\'t',
            correctAnswer: 'as good as I',
            explanation: 'Using comparative structure with "as...as".',
            points: 2
          },
          {
            id: 'kt11',
            sentence: 'It\'s worth reading this book.',
            keyWord: 'worth',
            startOfAnswer: 'This book',
            correctAnswer: 'is worth reading',
            explanation: 'Subject change with "worth + -ing".',
            points: 2
          },
          {
            id: 'kt12',
            question: 'I would recommend this film without hesitation.',
            keyWord: 'hesitate',
            startOfAnswer: 'I wouldn\'t',
            correctAnswer: 'hesitate to recommend this',
            explanation: 'Convert phrase to verb structure.',
            points: 2
          }
        ]
      },

      {
        id: 'b2-m1-l5-wordform-1',
        type: 'word-formation',
        title: 'Word Formation: Literary Analysis',
        text: `Literary criticism requires a combination of (1. SCHOLAR)_____ knowledge and (2. SENSE)_____ interpretation. A good critic must be (3. ANALYZE)_____ yet (4. IMAGINE)_____, able to identify technical elements while appreciating aesthetic qualities. The (5. COMPLEX)_____ of great literature often rewards multiple readings, revealing new layers of meaning. Critics must balance (6. OBJECT)_____ analysis with (7. PERSON)_____ response, acknowledging their own biases while striving for fair (8. ASSESS)_____.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'SCHOLAR', correctAnswer: 'scholarly', acceptableAnswers: ['scholarly'], explanation: '"Scholarly knowledge" - relating to serious academic study.', wordType: 'adjective', transformation: 'noun → adjective (-ly)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'SENSE', correctAnswer: 'sensitive', acceptableAnswers: ['sensitive'], explanation: '"Sensitive interpretation" - showing understanding and awareness.', wordType: 'adjective', transformation: 'noun → adjective (-itive)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'ANALYZE', correctAnswer: 'analytical', acceptableAnswers: ['analytical'], explanation: '"Be analytical" - using logical analysis.', wordType: 'adjective', transformation: 'verb → adjective (-ytical)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'IMAGINE', correctAnswer: 'imaginative', acceptableAnswers: ['imaginative'], explanation: '"Yet imaginative" - showing creativity and original thinking.', wordType: 'adjective', transformation: 'verb → adjective (-ative)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'COMPLEX', correctAnswer: 'complexity', acceptableAnswers: ['complexity'], explanation: '"The complexity of" - state of being complex or intricate.', wordType: 'noun', transformation: 'adjective → noun (-ity)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'OBJECT', correctAnswer: 'objective', acceptableAnswers: ['objective'], explanation: '"Objective analysis" - not influenced by personal feelings.', wordType: 'adjective', transformation: 'noun → adjective (-ive)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'PERSON', correctAnswer: 'personal', acceptableAnswers: ['personal'], explanation: '"Personal response" - relating to individual experience.', wordType: 'adjective', transformation: 'noun → adjective (-al)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'ASSESS', correctAnswer: 'assessment', acceptableAnswers: ['assessment'], explanation: '"Fair assessment" - evaluation or judgment of something.', wordType: 'noun', transformation: 'verb → noun (-ment)', points: 1 }
        ],
        focusAreas: ['Academic adjectives', '-ity suffix', 'Literary vocabulary']
      },
      {
        id: 'b2-m1-l5-wordform-2',
        type: 'word-formation',
        title: 'Word Formation: Artistic Expression',
        text: `Art serves as a powerful medium for (1. EXPRESS)_____ emotions and ideas that resist (2. CONVENTION)_____ language. Artists throughout history have used their work to challenge social norms and inspire (3. REFLECT)_____ on important issues. The (4. INTERPRET)_____ of art is inherently (5. SUBJECT)_____, as each viewer brings their own experiences and perspectives. This (6. AMBIGUOUS)_____ is not a weakness but rather a source of art's enduring power. Great artworks maintain their (7. RELEVANT)_____ across generations precisely because they resist (8. SIMPLE)_____ explanations.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'EXPRESS', correctAnswer: 'expressing', acceptableAnswers: ['expressing'], explanation: '"Medium for expressing" - communicating or showing feelings/ideas.', wordType: 'gerund', transformation: 'verb → gerund (-ing)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'CONVENTION', correctAnswer: 'conventional', acceptableAnswers: ['conventional'], explanation: '"Conventional language" - following traditional patterns.', wordType: 'adjective', transformation: 'noun → adjective (-al)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'REFLECT', correctAnswer: 'reflection', acceptableAnswers: ['reflection'], explanation: '"Inspire reflection" - serious thought or consideration.', wordType: 'noun', transformation: 'verb → noun (-ion)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'INTERPRET', correctAnswer: 'interpretation', acceptableAnswers: ['interpretation'], explanation: '"The interpretation of" - explanation or understanding of meaning.', wordType: 'noun', transformation: 'verb → noun (-ation)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'SUBJECT', correctAnswer: 'subjective', acceptableAnswers: ['subjective'], explanation: '"Inherently subjective" - based on personal opinions.', wordType: 'adjective', transformation: 'noun → adjective (-ive)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'AMBIGUOUS', correctAnswer: 'ambiguity', acceptableAnswers: ['ambiguity'], explanation: '"This ambiguity" - quality of having more than one meaning.', wordType: 'noun', transformation: 'adjective → noun (-ity)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'RELEVANT', correctAnswer: 'relevance', acceptableAnswers: ['relevance'], explanation: '"Maintain relevance" - quality of being connected or appropriate.', wordType: 'noun', transformation: 'adjective → noun (-ance)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'SIMPLE', correctAnswer: 'simplistic', acceptableAnswers: ['simplistic'], explanation: '"Resist simplistic explanations" - overly simple, treating complex things as simple.', wordType: 'adjective', transformation: 'adjective → negative adjective (-istic)', points: 1 }
        ],
        focusAreas: ['Gerunds', 'Art vocabulary', '-ity/-ance suffixes']
      },
      {
        id: 'b2-m1-l5-sentence-completion',
        type: 'sentence-completion',
        title: 'Sentence Completion: Literary Discussion',
        instructions: 'Complete each sentence using appropriate literary or critical vocabulary. Your completion should be grammatically correct and contextually appropriate.',
        sentences: [
          {
            id: 'sc1',
            incompleteSentence: 'The novel\'s protagonist undergoes a significant transformation, evolving from',
            sampleCompletions: [
              'a naive young woman into a confident leader',
              'an innocent child into a cynical adult',
              'a selfish individual into someone who cares deeply about others'
            ],
            評valuationCriteria: 'Should show character development arc with contrasting states',
            points: 3
          },
          {
            id: 'sc2',
            incompleteSentence: 'What makes this poem particularly powerful is',
            sampleCompletions: [
              'its use of vivid imagery to convey deep emotion',
              'the way it captures universal human experiences',
              'the contrast between its simple language and profound meaning'
            ],
            評valuationCriteria: 'Should identify specific literary quality or technique',
            points: 3
          },
          {
            id: 'sc3',
            incompleteSentence: 'The author employs metaphor throughout the text to',
            sampleCompletions: [
              'represent the character\'s internal struggle',
              'symbolize the passage of time and change',
              'illustrate the contrast between appearance and reality'
            ],
            評valuationCriteria: 'Should explain purpose/effect of literary device',
            points: 3
          },
          {
            id: 'sc4',
            incompleteSentence: 'Despite its flaws, the work remains compelling because',
            sampleCompletions: [
              'it addresses timeless themes that resonate with modern readers',
              'the characters are so vividly drawn and relatable',
              'it offers unique insights into human nature'
            ],
            評valuationCriteria: 'Should provide critical evaluation balancing weakness with strength',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m1-l5-error-identification',
        type: 'error-identification',
        title: 'Error Identification: Literary Reviews',
        instructions: 'Each sentence contains ONE grammatical or usage error common in literary criticism. Identify and correct it.',
        sentences: [
          {
            id: 'ei1',
            question: 'The novel explores themes such as identity, belonging, and what does it mean to be human.',
            error: 'what does it mean',
            correction: 'what it means',
            explanation: 'In a list of noun phrases, use "what it means" (noun clause), not question form.',
            category: 'Noun clauses in lists',
            points: 2
          },
          {
            id: 'ei2',
            sentence: 'The character\'s motivations are so complex that is difficult to understand them fully.',
            error: 'that is difficult',
            correction: 'that it is difficult',
            explanation: 'Need subject "it" before "is" in result clauses with "so...that".',
            category: 'Result clauses',
            points: 2
          },
          {
            id: 'ei3',
            question: 'What makes the story unique is the way how the author blends reality with fantasy.',
            error: 'the way how',
            correction: 'the way (that) / how',
            explanation: 'Use either "the way (that)" or "how", never both together.',
            category: 'Relative clauses',
            points: 2
          },
          {
            id: 'ei4',
            question: 'The film adaptation fails capturing the nuanced emotions of the original novel.',
            error: 'fails capturing',
            correction: 'fails to capture',
            explanation: '"Fail" is followed by infinitive with "to", not gerund.',
            category: 'Verb patterns',
            points: 2
          },
          {
            id: 'ei5',
            sentence: 'Had I known how disturbing the ending was, I wouldn\'t read it before bed.',
            error: 'wouldn\'t read',
            correction: 'wouldn\'t have read',
            explanation: 'Third conditional requires "would have + past participle" in main clause.',
            category: 'Conditionals',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l5-paraphrasing',
        type: 'paraphrasing',
        title: 'Paraphrasing: Critical Analysis',
        instructions: 'Rewrite each sentence using different vocabulary and structures while maintaining the same meaning.',
        sentences: [
          {
            id: 'p1',
            original: 'The novel\'s complex narrative structure makes it challenging for casual readers.',
            sampleParaphrases: [
              'Casual readers may find the novel difficult due to its intricate way of telling the story.',
              'The intricate way the story is told presents a challenge to readers seeking light entertainment.',
              'Because of its complicated narrative approach, the book is not easily accessible to all readers.'
            ],
            keyVocabulary: ['complex → intricate/complicated', 'narrative structure → way of telling the story', 'challenging → difficult/not easily accessible'],
            points: 3
          },
          {
            id: 'p2',
            original: 'The author\'s vivid descriptions bring the historical setting to life.',
            sampleParaphrases: [
              'Through detailed imagery, the writer makes the historical period feel real and immediate.',
              'The historical context becomes vividly real thanks to the author\'s descriptive skill.',
              'Readers can almost experience the historical era due to the writer\'s rich portrayals.'
            ],
            keyVocabulary: ['vivid descriptions → detailed imagery/rich portrayals', 'bring to life → make feel real/become vividly real'],
            points: 3
          },
          {
            id: 'p3',
            original: 'What distinguishes this work from others in the genre is its psychological depth.',
            sampleParaphrases: [
              'This work stands out within its genre because of its profound exploration of psychology.',
              'The profound psychological insight sets this piece apart from similar works.',
              'Unlike other works in the same category, this one offers exceptional psychological complexity.'
            ],
            keyVocabulary: ['distinguishes → stands out/sets apart', 'psychological depth → profound exploration of psychology/psychological complexity'],
            points: 3
          }
        ]
      },
      {
        id: 'b2-m1-l5-collocation-matching',
        type: 'collocation-matching',
        title: 'Collocation Matching: Literary & Critical Language',
        instructions: 'Match the verbs with the appropriate nouns to form common collocations used in literary analysis.',
        pairs: [
          { left: 'develop', right: 'a theme', distractor: false },
          { left: 'convey', right: 'meaning', distractor: false },
          { left: 'evoke', right: 'emotions', distractor: false },
          { left: 'explore', right: 'issues', distractor: false },
          { left: 'challenge', right: 'assumptions', distractor: false },
          { left: 'construct', right: 'an argument', distractor: false },
          { left: 'sustain', right: 'interest', distractor: false },
          { left: 'provoke', right: 'thought', distractor: false }
        ],
        distractors: [
          { left: 'do', right: 'a theme' },
          { left: 'give', right: 'emotions' },
          { left: 'make', right: 'assumptions' }
        ],
        points: 8
      },
      {
        id: 'b2-m1-l5-phrasal-verbs',
        type: 'phrasal-verbs',
        title: 'Phrasal Verbs: Literary Discussion',
        instructions: 'Learn and practice these phrasal verbs commonly used when discussing literature and art.',
        verbs: [
          {
            verb: 'come across',
            meaning: 'to find or encounter by chance; to appear or seem',
            examples: [
              'I came across this fascinating poem in an old anthology.',
              'The character comes across as arrogant at first, but later we see his vulnerability.'
            ],
            usage: 'separable/inseparable depending on meaning',
            synonyms: ['encounter', 'find', 'seem']
          },
          {
            verb: 'delve into',
            meaning: 'to examine or explore something deeply',
            examples: [
              'The novel delves into complex psychological territory.',
              'Critics have delved into the symbolism for decades.'
            ],
            usage: 'inseparable',
            synonyms: ['explore deeply', 'investigate thoroughly']
          },
          {
            verb: 'draw on',
            meaning: 'to use something as a source or resource',
            examples: [
              'The author draws on her own experiences growing up in rural Ireland.',
              'The film draws on classical mythology for its narrative structure.'
            ],
            usage: 'inseparable',
            synonyms: ['use', 'utilize', 'make use of']
          },
          {
            verb: 'take in',
            meaning: 'to absorb or understand (information, art, atmosphere)',
            examples: [
              'There\'s so much detail in this painting—it takes time to take it all in.',
              'The audience sat in silence, taking in the powerful performance.'
            ],
            usage: 'separable',
            synonyms: ['absorb', 'comprehend', 'appreciate']
          },
          {
            verb: 'spell out',
            meaning: 'to explain something clearly and in detail',
            examples: [
              'The author never spells out the moral—readers must interpret it themselves.',
              'Unlike some writers, she doesn\'t spell everything out for the reader.'
            ],
            usage: 'separable',
            synonyms: ['explain explicitly', 'state clearly']
          }
        ],
        exercises: [
          {
            id: 'pv1',
            type: 'fill-blank',
            question: 'The critic _____ the historical context to support her interpretation.',
            correctAnswer: 'drew on',
            points: 2
          },
          {
            id: 'pv2',
            type: 'multiple-choice',
            question: 'Choose the correct phrasal verb: The novel _____ themes of loss and redemption.',
            options: ['delves into', 'takes in', 'spells out', 'comes across'],
            correctAnswer: 'delves into',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l5-idioms',
        type: 'idioms-expressions',
        title: 'Idioms & Expressions: Art & Literature',
        instructions: 'Learn these idioms and expressions commonly used in discussing creative works.',
        idioms: [
          {
            idiom: 'a page-turner',
            meaning: 'a book that is so exciting you want to keep reading',
            example: 'Despite its literary merit, the novel is also a real page-turner—I couldn\'t put it down.',
            context: 'informal, positive',
            culturalNote: 'Often used in book reviews to indicate readability'
          },
          {
            idiom: 'read between the lines',
            meaning: 'to understand the hidden or implied meaning',
            example: 'If you read between the lines, you\'ll see the author is actually criticizing modern society.',
            context: 'common in literary analysis',
            culturalNote: 'Suggests deeper interpretation is needed'
          },
          {
            idiom: 'strike a chord (with someone)',
            meaning: 'to cause someone to feel sympathy or enthusiasm',
            example: 'The play\'s themes of isolation really struck a chord with audiences during the pandemic.',
            context: 'formal and informal',
            culturalNote: 'Musical metaphor for emotional resonance'
          },
          {
            idiom: 'food for thought',
            meaning: 'something that makes you think seriously',
            example: 'The documentary doesn\'t provide answers, but it certainly gives you food for thought.',
            context: 'common in reviews and discussions',
            culturalNote: 'Suggests intellectual nourishment'
          },
          {
            idiom: 'ahead of its/his/her time',
            meaning: 'having ideas too advanced or modern for the period',
            example: 'The novel was poorly received when published but is now recognized as ahead of its time.',
            context: 'historical/critical analysis',
            culturalNote: 'Usually positive, suggesting visionary quality'
          },
          {
            idiom: 'art for art\'s sake',
            meaning: 'the belief that art should be valued for its own beauty, not for social or moral purposes',
            example: 'The director clearly believes in art for art\'s sake rather than commercial appeal.',
            context: 'aesthetic philosophy',
            culturalNote: 'From French "l\'art pour l\'art"'
          }
        ],
        exercises: [
          {
            id: 'id1',
            type: 'matching',
            instruction: 'Match each idiom to its meaning',
            pairs: [
              { idiom: 'page-turner', meaning: 'very exciting book' },
              { idiom: 'read between the lines', meaning: 'find hidden meaning' },
              { idiom: 'strike a chord', meaning: 'resonate emotionally' }
            ],
            points: 3
          }
        ]
      },
      {
        id: 'b2-m1-l5-summary-writing',
        type: 'summary-writing',
        title: 'Summary Writing: Book Review',
        originalText: `"The Midnight Library" by Matt Haig is a thought-provoking exploration of regret, choice, and the paths not taken in life. The novel follows Nora Seed, a woman in her thirties who finds herself at a crossroads, overwhelmed by disappointment and the feeling that her life has gone wrong in every possible way.

When Nora attempts to end her life, she finds herself in the Midnight Library—a place between life and death where she can explore all the different lives she might have lived had she made different choices. Each book in the library represents an alternate reality: the life she would have had if she'd become an Olympic swimmer, if she'd married her ex-fiancé, if she'd pursued her band career, or if she'd accepted a job in Australia.

What makes the novel particularly compelling is how it handles the universal human tendency to wonder "what if?" As Nora explores these alternate lives, she discovers that the grass isn't always greener on the other side. The perfect life she imagined often comes with unexpected drawbacks and complications. Through this journey, she begins to appreciate aspects of her "root life"—her original existence—that she had previously dismissed or undervalued.

Haig's writing is accessible yet profound, dealing with heavy themes of depression and existential crisis while maintaining a sense of hope and possibility. The metaphor of the library is beautifully realized, and the philosophical questions the book raises about choice, regret, and the nature of happiness will stay with readers long after they finish.

However, the novel does have some weaknesses. The resolution feels somewhat rushed, and some of the alternate lives Nora explores are more fully developed than others. Additionally, readers looking for a plot-driven narrative might find the repetitive structure—entering and exiting different realities—somewhat monotonous.

Despite these minor flaws, "The Midnight Library" is a moving meditation on what it means to live a good life. It reminds us that our choices matter while also suggesting that there may be no single "right" path. For anyone who has ever felt stuck or wondered about roads not taken, this novel offers both comfort and food for thought.`,
        wordCount: 350,
        summaryTargetWords: 90,
        summaryTargetRange: { min: 80, max: 100 },
        keyPoints: [
          'Protagonist Nora Seed explores alternate lives in the Midnight Library',
          'The novel examines themes of regret, choice, and finding meaning',
          'Nora learns that alternative lives aren\'t necessarily better',
          'Accessible writing tackles serious themes with hope',
          'Some structural weaknesses but overall a moving meditation on life'
        ],
        evaluationCriteria: {
          contentAccuracy: 'Includes main plot and themes',
          conciseness: 'Within 80-100 words',
          paraphrasing: 'Uses own words, not copying phrases',
          coherence: 'Flows logically and smoothly',
          criticalElements: 'Mentions both strengths and weaknesses'
        },
        points: 10
      },
      {
        id: 'b2-m1-l5-gap-fill',
        type: 'gap-fill-text',
        title: 'Gap-Fill: The Evolution of the Novel',
        instructions: 'Complete the text about literary history using appropriate words. Each gap requires ONE word.',
        text: `The novel as we know it today (1)___ through centuries of evolution. What distinguishes the novel from earlier narrative forms (2)___ its length, complexity, and focus on individual character development. It (3)___ in the 18th century that the novel began to emerge as a dominant literary form.

Early novels were often written in the form of letters, (4)___ as "epistolary novels." Works like Samuel Richardson's "Pamela" demonstrated that prose fiction could explore psychological depth and moral questions. What (5)___ these early novels revolutionary was their focus on ordinary people rather than mythological heroes.

The 19th century saw the novel reach new heights. Authors (6)___ as Charles Dickens and George Eliot created vast social panoramas, (7)___ entire communities and their interconnections. It was during this period (8)___ the novel became the primary vehicle for social commentary.

The 20th century brought experimentation. Writers (9)___ been challenging traditional narrative structures, playing with time, perspective, and language itself. What modernist authors like Virginia Woolf and James Joyce (10)___ was transform the novel into a medium for exploring consciousness itself.

Today, the novel continues to evolve, (11)___ on new technologies and global perspectives while maintaining its essential power to illuminate human experience. What remains constant is (12)___ capacity to help us understand ourselves and others more deeply.`,
        gaps: 12,
        answers: [
          { gapNumber: 1, correctAnswer: 'evolved', acceptableAnswers: ['developed', 'emerged', 'evolved'], explanation: 'Past simple showing historical development' },
          { gapNumber: 2, correctAnswer: 'is', acceptableAnswers: ['is'], explanation: 'Present simple for general truth' },
          { gapNumber: 3, correctAnswer: 'was', acceptableAnswers: ['was'], explanation: 'It was...that cleft sentence for emphasis' },
          { gapNumber: 4, correctAnswer: 'known', acceptableAnswers: ['known'], explanation: 'Past participle in passive "known as"' },
          { gapNumber: 5, correctAnswer: 'made', acceptableAnswers: ['made'], explanation: 'Past simple: "made them revolutionary"' },
          { gapNumber: 6, correctAnswer: 'such', acceptableAnswers: ['such'], explanation: '"such as" for giving examples' },
          { gapNumber: 7, correctAnswer: 'depicting', acceptableAnswers: ['depicting', 'showing', 'portraying'], explanation: 'Present participle showing simultaneous action' },
          { gapNumber: 8, correctAnswer: 'that', acceptableAnswers: ['that'], explanation: 'It was...that cleft sentence' },
          { gapNumber: 9, correctAnswer: 'have', acceptableAnswers: ['have'], explanation: 'Present perfect continuous: have been challenging' },
          { gapNumber: 10, correctAnswer: 'did', acceptableAnswers: ['did'], explanation: 'Auxiliary for emphasis: "what they did was transform"' },
          { gapNumber: 11, correctAnswer: 'drawing', acceptableAnswers: ['drawing'], explanation: 'Present participle: drawing on' },
          { gapNumber: 12, correctAnswer: 'its', acceptableAnswers: ['its', 'the'], explanation: 'Possessive referring to the novel\'s capacity' }
        ],
        points: 12
      },
      {
        id: 'b2-m1-l5-sentence-reordering',
        type: 'sentence-reordering',
        title: 'Sentence Reordering: Film Review Structure',
        instructions: 'Arrange these sentences to create a well-structured film review.',
        sentences: [
          { id: 's1', text: 'Despite some pacing issues in the middle act, the film ultimately delivers a powerful message about human resilience.', position: 7 },
          { id: 's2', text: 'The cinematography deserves special mention, with each frame composed like a painting.', position: 5 },
          { id: 's3', text: '"The Last Garden" is a visually stunning meditation on loss and memory that premiered at Cannes this year.', position: 1 },
          { id: 's4', text: 'What makes the film truly remarkable, however, is the lead performance by newcomer Sofia Martinez.', position: 4 },
          { id: 's5', text: 'The story follows an elderly woman returning to her childhood home after decades abroad.', position: 2 },
          { id: 's6', text: 'Through a series of flashbacks, we witness the traumatic events that forced her family to flee.', position: 3 },
          { id: 's7', text: 'For anyone interested in thoughtful, character-driven cinema, this is essential viewing.', position: 8 },
          { id: 's8', text: 'Director Chen Li masterfully blends past and present, creating a dreamlike quality that mirrors the protagonist\'s fragmented memories.', position: 6 }
        ],
        correctOrder: ['s3', 's5', 's6', 's4', 's2', 's8', 's1', 's7'],
        explanation: 'Standard review structure: Introduction with film title → Plot summary → Standout performance → Technical merits → Director\'s achievement → Balanced critique → Recommendation',
        points: 8
      },
      {
        id: 'b2-m1-l5-reading-2',
        type: 'reading',
        title: 'Reading: The Power of Metaphor in Poetry',
        text: `Poetry's ability to compress profound meaning into few words relies heavily on figurative language, particularly metaphor. Unlike similes, which explicitly compare two things using "like" or "as," metaphors assert that one thing is another, creating a more immediate and powerful connection.

Consider Emily Dickinson's famous line: "Hope is the thing with feathers." By identifying hope with a bird, Dickinson doesn't just compare the two—she transforms our understanding of hope itself. What makes this metaphor so effective is how it activates multiple associations simultaneously: birds are fragile yet persistent, they sing even in difficult conditions, and they can soar above earthly troubles.

The best metaphors work on multiple levels. When Shakespeare writes that "all the world's a stage," he's not simply making an observation about life being theatrical. The metaphor extends through the entire passage, with people as "players" who have their "exits and entrances," and life stages as "acts." This sustained metaphor, or conceit, allows Shakespeare to explore the idea comprehensively.

Modern poets continue to find fresh metaphors that make us see familiar things in new ways. Ocean Vuong writes of his mother's hands as "two tarnished knives," immediately conveying both her hardness (sharpened by difficult labor) and her value (silver, even if worn). What distinguishes powerful metaphors from clichéd ones is precisely this freshness—the unexpected connection that illuminates rather than obscures.

However, metaphors can be overused or mixed confusingly. A "sea of troubles" makes sense, but if we then try to "take arms" against it or "build bridges" over it, the metaphor breaks down. Good writers know when to sustain a metaphor and when to let it go.

For readers, developing the ability to recognize and interpret metaphors enriches the reading experience immeasurably. It was the critic I.A. Richards who pointed out that metaphor isn't merely decorative but is fundamental to how we think and understand abstract concepts. Love, time, ideas, emotions—we can hardly discuss these things without metaphor.`,
        wordCount: 340,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'According to the text, what is the main difference between similes and metaphors?',
            correctAnswer: 'Metaphors assert identity rather than comparison',
            explanation: 'El texto dice: "metaphors assert that one thing is another" unlike similes which compare.',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Why is Dickinson\'s "Hope is the thing with feathers" considered effective?',
            correctAnswer: 'It activates multiple associations simultaneously / creates multiple meanings at once',
            explanation: 'El texto explica que activa múltiples asociaciones: fragilidad, persistencia, canto, elevación.',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What term does the text use for an extended, sustained metaphor?',
            correctAnswer: 'Conceit',
            explanation: 'El texto menciona "sustained metaphor, or conceit" al hablar del ejemplo de Shakespeare.',
            points: 2
          },
          {
            id: 'q4',
            type: 'true-false',
            question: 'True or False: The text suggests mixing different metaphors is an effective technique.',
            correctAnswer: 'False',
            explanation: 'El texto advierte que mezclar metáforas confusamente hace que "the metaphor breaks down".',
            points: 1
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'According to I.A. Richards, what role does metaphor play in human thought?',
            correctAnswer: 'It is fundamental to how we think and understand abstract concepts',
            explanation: 'Richards señaló que la metáfora "is fundamental to how we think and understand abstract concepts".',
            points: 2
          },
          {
            id: 'q6',
            type: 'short-answer',
            question: 'Give ONE example of a metaphor from the text and explain what two things are being compared.',
            correctAnswer: 'Hope is the thing with feathers (hope = bird) / All the world\'s a stage (life = theater) / Mother\'s hands as two tarnished knives (hands = knives)',
            explanation: 'El texto proporciona varios ejemplos de metáforas con explicaciones claras.',
            points: 3
          }
        ],
        vocabularyHelp: [
          { word: 'figurative language', definition: 'language that uses figures of speech like metaphor and simile' },
          { word: 'assert', definition: 'to state something confidently and forcefully' },
          { word: 'conceit', definition: 'an extended metaphor with complex logic' },
          { word: 'tarnished', definition: 'dulled or damaged, especially metal that has lost its shine' },
          { word: 'clichéd', definition: 'overused and consequently lacking in freshness or originality' },
          { word: 'immeasurably', definition: 'to a great extent; in a way that cannot be measured' }
        ]
      },
      {
        id: 'b2-m1-l5-writing-2',
        type: 'writing',
        prompt: 'Write a short review (180-200 words) of a book, film, TV series, or play you\'ve experienced recently. Include: 1) Brief summary without spoilers, 2) What you found most compelling, 3) Any weaknesses, 4) Your recommendation. Use at least TWO cleft sentences for emphasis.',
        writingType: 'review',
        minWords: 180,
        maxWords: 200,
        timeLimit: 30,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Start with the title, creator/author, and genre',
          'Use critical vocabulary: compelling, nuanced, portrayal, theme',
          'Balance positive and negative points',
          'Include cleft sentences: "What makes it special is..." or "It was...that impressed me"',
          'End with clear recommendation for target audience'
        ]
      },
      {
        id: 'b2-m1-l5-pronunciation',
        type: 'pronunciation',
        title: 'Pronunciation: Academic & Critical Vocabulary',
        instructions: 'Practice pronouncing these words commonly used in literary and artistic discussion. Pay attention to word stress.',
        words: [
          {
            word: 'protagonist',
            phonetic: '/prəˈtæɡ.ə.nɪst/',
            audioUrl: '/audio/protagonist.mp3',
            stressPattern: 'second syllable: pro-TA-go-nist',
            commonErrors: 'Don\'t stress first syllable',
            example: 'The protagonist faces many challenges.'
          },
          {
            word: 'metaphor',
            phonetic: '/ˈmet.ə.fɔːr/',
            audioUrl: '/audio/metaphor.mp3',
            stressPattern: 'first syllable: ME-ta-phor',
            commonErrors: 'Don\'t say "meta-PHOR"',
            example: 'This is a powerful metaphor for change.'
          },
          {
            word: 'contemporary',
            phonetic: '/kənˈtem.pər.ər.i/',
            audioUrl: '/audio/contemporary.mp3',
            stressPattern: 'second syllable: con-TEM-po-ra-ry',
            commonErrors: 'Don\'t stress first syllable',
            example: 'She writes contemporary fiction.'
          },
          {
            word: 'analysis',
            phonetic: '/əˈnæl.ə.sɪs/',
            audioUrl: '/audio/analysis.mp3',
            stressPattern: 'second syllable: a-NA-ly-sis',
            commonErrors: 'Plural is analyses /əˈnæl.ə.siːz/',
            example: 'This analysis is very thorough.'
          },
          {
            word: 'aesthetic',
            phonetic: '/esˈθet.ɪk/',
            audioUrl: '/audio/aesthetic.mp3',
            stressPattern: 'second syllable: aes-THE-tic',
            commonErrors: 'Can also be /iːsˈθet.ɪk/ in US English',
            example: 'The film has great aesthetic value.'
          },
          {
            word: 'nuanced',
            phonetic: '/ˈnjuː.ɑːnst/',
            audioUrl: '/audio/nuanced.mp3',
            stressPattern: 'first syllable: NU-anced',
            commonErrors: 'Remember to pronounce the final -d',
            example: 'Her performance was subtle and nuanced.'
          },
          {
            word: 'compelling',
            phonetic: '/kəmˈpel.ɪŋ/',
            audioUrl: '/audio/compelling.mp3',
            stressPattern: 'second syllable: com-PEL-ling',
            commonErrors: 'Double L sound',
            example: 'The story is absolutely compelling.'
          }
        ],
        exercises: [
          {
            id: 'pr1',
            type: 'stress-identification',
            question: 'Which syllable is stressed in "protagonist"?',
            options: ['1st', '2nd', '3rd', '4th'],
            correctAnswer: '2nd',
            points: 1
          },
          {
            id: 'pr2',
            type: 'minimal-pairs',
            pairs: [
              { word1: 'analysis', word2: 'analyses', difference: 'Singular vs plural pronunciation' }
            ],
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l5-idioms-expressions-1',
        type: 'idioms-expressions',
        title: 'Critical Analysis Idioms',
        instructions: 'Choose the correct idiom to complete each sentence about critical analysis and evaluation.',
        items: [
          {
            id: 'ie1',
            context: 'The journalist decided to ___ when investigating the politician\'s claims.',
            idiom: 'read between the lines',
            meaning: 'to find hidden or implied meaning',
            correctUsage: 'read between the lines',
            options: ['read between the lines', 'read the riot act', 'read my mind', 'read like a book'],
            explanation: 'Read between the lines = to look for hidden meanings or implications in what someone says or writes.',
            points: 1
          },
          {
            id: 'ie2',
            context: 'Don\'t ___ by its cover - the book may seem simple but has profound insights.',
            idiom: 'judge a book',
            meaning: 'don\'t form opinions based only on appearance',
            correctUsage: 'judge a book',
            options: ['judge a book', 'throw the book', 'close the book', 'hit the books'],
            explanation: 'Judge a book by its cover = to form an opinion based only on outward appearance.',
            points: 1
          },
          {
            id: 'ie3',
            context: 'His argument doesn\'t ___ when you examine the evidence carefully.',
            idiom: 'hold water',
            meaning: 'to be valid or credible under scrutiny',
            correctUsage: 'hold water',
            options: ['hold water', 'hold fire', 'hold court', 'hold the fort'],
            explanation: 'Hold water = to be logical, valid, or able to withstand examination.',
            points: 1
          }
        ]
      }
    ]
  },
  // ============================================
  // MÓDULO 1 - LECCIÓN 6: Module 1 Mock Exam
  // ============================================
  {
    id: 'b2-m1-l6',
    title: 'Lección 6: Examen de Práctica Módulo 1',
    description: 'Examen completo de práctica que integra todo el contenido del Módulo 1',
    duration: 120,
    objectives: [
      'Evaluar tu comprensión del Módulo 1 completo',
      'Practicar bajo condiciones de examen reales',
      'Identificar áreas que necesitan más práctica',
      'Ganar confianza para el examen B2 First'
    ],
    exercises: [
      {
        id: 'b2-m1-l6-reading-exam',
        type: 'reading',
        title: 'Mock Exam: Reading & Use of English',
        text: `The phenomenon of déjà vu has puzzled scientists for decades. What makes this experience so fascinating is that nearly everyone has felt it at some point. It is this universality that has driven researchers to investigate its causes.

For years, scientists had been studying memory and perception, but it wasn't until the advent of modern brain imaging that they could examine déjà vu in real-time. What they discovered was surprising.

Dr. Anne Cleary explains: "What happens is that your brain's recognition system fires before the recall system. You recognize something as familiar, but you can't recall why."`,
        wordCount: 100,
        readingTime: 2,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What is the main topic of the passage?',
            correctAnswer: 'The science of déjà vu',
            explanation: 'El texto habla sobre la investigación científica del fenómeno déjà vu.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l6-speaking-exam',
        type: 'speaking',
        prompt: 'MOCK EXAM SPEAKING SECTION\n\nPart 1: Interview (2 minutes)\nPart 2: Long Turn (3 minutes) - Talk about a memorable experience\nPart 3: Discussion (4 minutes) - Discuss what makes experiences memorable\n\nUse narrative tenses, cleft sentences, and sophisticated vocabulary.',
        timeLimit: 540,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Part 1: Answer naturally and confidently',
          'Part 2: Structure your story chronologically',
          'Use all narrative tenses appropriately',
          'Part 3: Give extended answers with examples'
        ],
        targetWords: [
          'memorable experience',
          'was living',
          'had been',
          'decided to',
          'what made it memorable',
          'it was...that',
          'what I learned',
          'looking back',
          'narrative tenses',
          'cleft sentences',
          'chronologically',
          'extended answers'
        ],
        expectedResponse: 'A 9-minute mock exam speaking section with three parts. Part 1 (2 min): Brief interview answering personal questions naturally and confidently. Part 2 (3 min): Long turn describing a memorable experience using narrative tenses (Past Simple, Continuous, Perfect, Perfect Continuous) in chronological order. Part 3 (4 min): Extended discussion about what makes experiences memorable, using cleft sentences for emphasis (\"What makes an experience memorable is...\", \"It was the people who...\") and giving examples. Demonstrates exam-level speaking proficiency with sophisticated grammar and vocabulary.'
      },
      // KEY WORD TRANSFORMATIONS - FCE Part 4 Practice
      {
        id: 'b2-m1-l6-keytransform-1',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Module 1 Review (Part 1)',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt1',
            question: 'By the time I arrived, they had already left.',
            keyWord: 'left',
            startOfAnswer: 'They had',
            correctAnswer: 'already left by the',
            explanation: 'Past perfect for action completed before another past action.',
            points: 2
          },
          {
            id: 'kt2',
            question: 'If I were you, I would accept the offer.',
            keyWord: 'place',
            startOfAnswer: 'If I were',
            correctAnswer: 'in your place I',
            explanation: 'Alternative expression for "if I were you".',
            points: 2
          },
          {
            id: 'kt3',
            question: 'The company is building a new factory.',
            keyWord: 'being',
            startOfAnswer: 'A new factory',
            correctAnswer: 'is being built by',
            explanation: 'Present continuous passive with agent.',
            points: 2
          },
          {
            id: 'kt4',
            question: 'She succeeded because of her determination.',
            keyWord: 'was',
            startOfAnswer: 'It',
            correctAnswer: 'was her determination that',
            explanation: 'It-cleft emphasizing the cause.',
            points: 2
          },
          {
            id: 'kt5',
            sentence: 'I haven\'t been to Paris for five years.',
            keyWord: 'since',
            startOfAnswer: 'It',
            correctAnswer: 'is five years since',
            explanation: 'Time expression with "it is...since".',
            points: 2
          },
          {
            id: 'kt6',
            question: 'You must hand in your assignment by Friday.',
            keyWord: 'handed',
            startOfAnswer: 'Your assignment',
            correctAnswer: 'must be handed in',
            explanation: 'Modal passive obligation.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l6-keytransform-2',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Module 1 Review (Part 2)',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt7',
            question: 'I regret not learning to play the piano.',
            keyWord: 'wish',
            startOfAnswer: 'I',
            correctAnswer: 'wish I had learned',
            explanation: 'Wish + past perfect for past regret.',
            points: 2
          },
          {
            id: 'kt8',
            question: 'He is certain to win the competition.',
            keyWord: 'will',
            startOfAnswer: 'He',
            correctAnswer: 'will definitely win the',
            explanation: 'Converting certainty expression to future with adverb.',
            points: 2
          },
          {
            id: 'kt9',
            question: 'No sooner had we started the meeting than the fire alarm rang.',
            keyWord: 'hardly',
            startOfAnswer: 'We had',
            correctAnswer: 'hardly started the meeting',
            explanation: 'Converting "no sooner" to "hardly" with same meaning.',
            points: 2
          },
          {
            id: 'kt10',
            question: 'The main problem is lack of funding.',
            keyWord: 'needs',
            startOfAnswer: 'What',
            correctAnswer: 'we need is more',
            explanation: 'What-cleft converting problem to need.',
            points: 2
          },
          {
            id: 'kt11',
            question: 'Someone should have told me about the changes.',
            keyWord: 'been',
            startOfAnswer: 'I should',
            correctAnswer: 'have been told about',
            explanation: 'Modal perfect passive.',
            points: 2
          },
          {
            id: 'kt12',
            question: 'Despite being tired, she finished the project.',
            keyWord: 'though',
            startOfAnswer: 'Even',
            correctAnswer: 'though she was tired',
            explanation: 'Converting prepositional phrase to clause.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l6-wordform-1',
        type: 'word-formation',
        title: 'Word Formation: Learning Strategies',
        text: `Effective learning requires more than just (1. MEMORY)_____ facts; it involves developing deep (2. COMPREHEND)_____ of concepts and their (3. APPLY)_____. Research in educational (4. PSYCHOLOGY)_____ suggests that (5. ACTIVE)_____ engaging with material produces better retention than passive reading. Students who approach learning (6. STRATEGY)_____ and maintain (7. PERSIST)_____ in the face of challenges tend to achieve greater (8. SUCCESS)_____.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'MEMORY', correctAnswer: 'memorizing', acceptableAnswers: ['memorizing', 'memorising'], explanation: '"More than memorizing" - learning by heart.', wordType: 'gerund', transformation: 'noun → verb → gerund (-izing)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'COMPREHEND', correctAnswer: 'comprehension', acceptableAnswers: ['comprehension'], explanation: '"Deep comprehension" - ability to understand fully.', wordType: 'noun', transformation: 'verb → noun (-sion)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'APPLY', correctAnswer: 'applications', acceptableAnswers: ['applications'], explanation: '"Their applications" - practical uses of knowledge.', wordType: 'noun', transformation: 'verb → noun (-ations plural)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'PSYCHOLOGY', correctAnswer: 'psychology', acceptableAnswers: ['psychology'], explanation: '"Educational psychology" - study of how people learn. (No transformation needed)', wordType: 'noun', transformation: 'no change', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'ACTIVE', correctAnswer: 'actively', acceptableAnswers: ['actively'], explanation: '"Actively engaging" - in an active manner, with full participation.', wordType: 'adverb', transformation: 'adjective → adverb (-ly)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'STRATEGY', correctAnswer: 'strategically', acceptableAnswers: ['strategically'], explanation: '"Approach strategically" - in a planned and deliberate way.', wordType: 'adverb', transformation: 'noun → adverb (-ically)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'PERSIST', correctAnswer: 'persistence', acceptableAnswers: ['persistence'], explanation: '"Maintain persistence" - quality of continuing despite difficulties.', wordType: 'noun', transformation: 'verb → noun (-ence)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'SUCCESS', correctAnswer: 'success', acceptableAnswers: ['success'], explanation: '"Achieve success" - favorable outcome. (No transformation needed)', wordType: 'noun', transformation: 'no change', points: 1 }
        ],
        focusAreas: ['Gerunds', 'Educational vocabulary', 'No-change items']
      },
      {
        id: 'b2-m1-l6-wordform-2',
        type: 'word-formation',
        title: 'Word Formation: Module Review',
        text: `Throughout this module, we've explored various aspects of advanced (1. COMMUNICATE)_____. From narrative structures to (2. ARGUE)_____ techniques, each lesson has built upon previous knowledge. The (3. DIVERSE)_____ of topics covered reflects the (4. MULTI)_____ nature of B2-level English. Success at this level requires not just grammatical (5. ACCURATE)_____ but also stylistic (6. FLEXIBLE)_____ and cultural (7. AWARE)_____. As you continue your studies, remember that language (8. PROFICIENT)_____ develops through consistent practice and reflection.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'COMMUNICATE', correctAnswer: 'communication', acceptableAnswers: ['communication'], explanation: '"Advanced communication" - exchange of information and ideas.', wordType: 'noun', transformation: 'verb → noun (-ation)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'ARGUE', correctAnswer: 'argumentative', acceptableAnswers: ['argumentative'], explanation: '"Argumentative techniques" - relating to presenting reasons.', wordType: 'adjective', transformation: 'verb → adjective (-ative)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'DIVERSE', correctAnswer: 'diversity', acceptableAnswers: ['diversity'], explanation: '"The diversity of topics" - variety and range of different things.', wordType: 'noun', transformation: 'adjective → noun (-ity)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'MULTI', correctAnswer: 'multifaceted', acceptableAnswers: ['multifaceted'], explanation: '"Multifaceted nature" - having many aspects. Prefix multi- means many.', wordType: 'adjective', transformation: 'prefix + adjective', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'ACCURATE', correctAnswer: 'accuracy', acceptableAnswers: ['accuracy'], explanation: '"Grammatical accuracy" - quality of being correct and exact.', wordType: 'noun', transformation: 'adjective → noun (-acy)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'FLEXIBLE', correctAnswer: 'flexibility', acceptableAnswers: ['flexibility'], explanation: '"Stylistic flexibility" - ability to adapt one\'s style.', wordType: 'noun', transformation: 'adjective → noun (-ity)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'AWARE', correctAnswer: 'awareness', acceptableAnswers: ['awareness'], explanation: '"Cultural awareness" - knowledge of different cultures.', wordType: 'noun', transformation: 'adjective → noun (-ness)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'PROFICIENT', correctAnswer: 'proficiency', acceptableAnswers: ['proficiency'], explanation: '"Language proficiency" - skill and competence in using a language.', wordType: 'noun', transformation: 'adjective → noun (-ency)', points: 1 }
        ],
        focusAreas: ['Review vocabulary', 'Prefix multi-', 'Summary of transformations']
      },

      {
        id: 'b2-m1-l6-reading-comprehension',
        type: 'reading',
        title: 'Mock Exam: Extended Reading Comprehension',
        text: `The Psychology of Habit Formation

Habits shape our lives far more than we realize. What we think of as conscious decision-making often turns out to be habitual behavior operating on autopilot. Researchers estimate that up to 40% of our daily actions are habits rather than deliberate choices. Understanding how habits form—and how they can be changed—is therefore crucial for anyone seeking to improve their life.

The habit loop, as described by neuroscientist Ann Graybiel, consists of three components: a cue (or trigger), a routine (the behavior itself), and a reward (the benefit you get from the behavior). It was Graybiel's research that revealed how habits become encoded in the basal ganglia, a primitive part of the brain that doesn't distinguish between good and bad habits—it simply automates repeated behaviors to conserve mental energy.

What makes habits so powerful is their ability to operate beneath conscious awareness. When you first learn to drive, for example, every action requires focused attention: checking mirrors, coordinating the pedals, judging distances. The cognitive load is enormous. But after months of practice, these actions become automatic. Your basal ganglia have learned the routine, freeing your conscious mind to think about other things—like having a conversation while driving.

The bad news is that this same mechanism makes breaking bad habits extremely difficult. When you try to quit smoking or stop checking your phone constantly, you're not just fighting willpower—you're fighting deeply ingrained neural pathways that have been strengthened through repetition. Your brain has associated certain cues (stress, boredom) with specific routines (reaching for a cigarette, scrolling through social media) that deliver rewards (relaxation, distraction).

The good news, however, is that you don't need to eliminate the neural pathway. What habit researchers have discovered is that it's far more effective to keep the cue and the reward while changing the routine. If stress triggers your smoking habit, you can substitute a different stress-relief routine—like deep breathing or a brief walk—that provides a similar reward. It's the reward that your brain really wants; the routine is simply the path it has learned to get there.

This insight has profound implications. It suggests that what we need is not superhuman willpower but rather strategic self-awareness. By identifying the cues that trigger our unwanted habits and finding healthier routines that provide similar rewards, we can work with our brain's habit-forming tendencies rather than against them. It was Charles Duhigg, author of "The Power of Habit," who popularized this approach, showing how everyone from individuals to organizations have successfully transformed their habits by understanding and manipulating the habit loop.

Creating new positive habits follows the same principles. The key is to start small and make the new behavior as easy as possible. If you want to exercise regularly, don't commit to an hour at the gym—start with two minutes of stretching. What matters is consistency, not intensity. Once the habit is established, you can gradually increase the duration or difficulty. The crucial thing is to build the neural pathway through repetition until the behavior feels automatic.

Environmental design can also support habit formation. By manipulating cues in your environment, you can make good habits easier and bad habits harder. Want to read more? Place a book on your pillow. Want to eat healthier? Put fruit at eye level in your fridge. These simple changes work because they align with how our brains actually function—responding automatically to environmental triggers.`,
        wordCount: 568,
        readingTime: 5,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'According to the text, approximately what percentage of daily actions are habits?',
            correctAnswer: '40%',
            explanation: 'El texto dice: "up to 40% of our daily actions are habits".',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Name the THREE components of the habit loop.',
            correctAnswer: 'Cue (trigger), routine (behavior), reward',
            explanation: 'Los tres componentes son: cue/trigger, routine/behavior, reward.',
            points: 3
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'Where in the brain are habits encoded according to Ann Graybiel?',
            correctAnswer: 'The basal ganglia',
            explanation: 'El texto menciona: "habits become encoded in the basal ganglia".',
            points: 2
          },
          {
            id: 'q4',
            type: 'true-false',
            question: 'True or False: The basal ganglia can distinguish between good and bad habits.',
            correctAnswer: 'False',
            explanation: 'El texto dice que "doesn\'t distinguish between good and bad habits".',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'According to researchers, what is the most effective way to break a bad habit?',
            correctAnswer: 'TrueKeep the cue and reward but change the routine',
            explanation: 'El texto explica: "keep the cue and the reward while changing the routine".',
            points: 2
          },
          {
            id: 'q6',
            type: 'short-answer',
            question: 'When trying to establish a new positive habit, should you start with high intensity or consistency? Why?',
            correctAnswer: 'Consistency (matters more than intensity to build neural pathways through repetition)',
            explanation: 'El texto dice: "What matters is consistency, not intensity."',
            points: 3
          },
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Who is the author of "The Power of Habit" mentioned in the text?',
            correctAnswer: 'Charles Duhigg',
            explanation: 'El texto menciona: "Charles Duhigg, author of \\\'The Power of Habit\\\'".',
            points: 2
          },
          {
            id: 'q8',
            type: 'short-answer',
            question: 'Give ONE example from the text of how environmental design can support good habits.',
            correctAnswer: 'Place a book on your pillow (to read more) / Put fruit at eye level (to eat healthier)',
            explanation: 'El texto proporciona dos ejemplos concretos de diseño ambiental.',
            points: 2
          }
        ],
        vocabularyHelp: [
          { word: 'autopilot', definition: 'automatic behavior without conscious thought' },
          { word: 'encoded', definition: 'converted and stored in a particular form (here: in the brain)' },
          { word: 'basal ganglia', definition: 'a group of brain structures involved in habit formation' },
          { word: 'cognitive load', definition: 'the amount of mental effort being used' },
          { word: 'ingrained', definition: 'firmly established and difficult to change' },
          { word: 'neural pathways', definition: 'connections between neurons in the brain' }
        ]
      },
      {
        id: 'b2-m1-l6-writing-exam',
        type: 'writing',
        prompt: 'MOCK EXAM WRITING TASK\n\nWrite an essay (220-260 words) responding to this statement:\n\n"Social media has had a negative impact on society."\n\nDiscuss both sides of the argument and give your own opinion. Use cleft sentences for emphasis and appropriate linking words to structure your argument.',
        writingType: 'essay',
        minWords: 220,
        maxWords: 260,
        timeLimit: 40,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Introduction: Paraphrase the question and state both sides exist',
          'Body 1: Arguments FOR negative impact (e.g., addiction, misinformation, comparison culture)',
          'Body 2: Arguments AGAINST / positive aspects (e.g., connection, access to information, social movements)',
          'Conclusion: Your balanced opinion using cleft sentences',
          'Use linking words: However, Moreover, On the other hand, Furthermore',
          'Include at least 2 cleft sentences: "What concerns me most is..." or "It is...that..."'
        ]
      },
      {
        id: 'b2-m1-l6-listening-exam',
        type: 'listening',
        audioUrl: '/audio/b2-m1-l6-listening-exam.mp3',
        duration: 180,
        allowReplay: true,
        maxReplays: 2,
        transcript: `[EXAM CONDITIONS: Students hear this TWICE]

Interviewer: Today I'm speaking with Dr. Marcus Williams, a researcher specializing in workplace productivity. Dr. Williams, what's the biggest mistake people make about productivity?

Dr. Williams: Well, what most people don't realize is that productivity isn't about working more hours—it's about working smarter. I've been studying high performers for over a decade now, and what consistently sets them apart is not that they work harder, but that they work with more intention and focus.

Interviewer: Can you give us an example?

Dr. Williams: Certainly. It was during a study we conducted in 2018 that we discovered something surprising. We found that the most productive employees weren't those who stayed latest at the office. In fact, many of them left right on time. What they had been doing differently was protecting their peak energy hours. They knew when they were mentally sharpest—usually the first two to three hours after arriving—and they guarded that time fiercely for their most important work.

Interviewer: So timing matters more than duration?

Dr. Williams: Exactly. What research shows is that the human brain isn't designed for eight hours of continuous focused work. We operate in cycles—typically 90 to 120 minutes of high focus followed by a need for rest. The problem is that modern work culture ignores these natural rhythms. People push through fatigue, thinking they're being productive, when actually their work quality is declining.

Interviewer: What do you recommend?

Dr. Williams: What I tell people is to align their most challenging tasks with their peak energy periods. If you're sharpest in the morning, don't waste that time checking emails or attending routine meetings. Use it for deep, creative, or analytical work. Save the administrative tasks for your lower-energy periods in the afternoon.

It was implementing this approach that transformed my own productivity. I now block my mornings for research and writing—the work that requires my full cognitive capacity. Meetings and emails get scheduled for the afternoon when I have less mental energy anyway.

Interviewer: What about the modern obsession with multitasking?

Dr. Williams: That's perhaps the biggest productivity myth of all. What neuroscience has demonstrated is that the human brain cannot actually multitask in the way we think it can. What we call multitasking is really rapid task-switching, and every switch comes with a cognitive cost. Studies show it can take 23 minutes to fully regain deep focus after an interruption.

What successful people do instead is practice what I call "single-tasking"—giving full attention to one thing at a time. It might feel slower initially, but the quality of work is dramatically higher, and you actually complete tasks faster because you're not constantly reorienting yourself.`,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'According to Dr. Williams, what sets high performers apart?',
            correctAnswer: 'Working with intention and focus',
            explanation: 'Dr. Williams dice: "what consistently sets them apart is...they work with more intention and focus".',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'In the 2018 study, what was surprising about the most productive employees?',
            correctAnswer: 'They left work on time / They didn\'t stay late / They protected their peak energy hours',
            explanation: 'El estudio descubrió que no se quedaban hasta tarde sino que protegían sus horas de mayor energía.',
            points: 2
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'The human brain operates in focus cycles of typically ___ to ___ minutes.',
            correctAnswer: '90...120',
            explanation: 'Dr. Williams menciona: "90 to 120 minutes of high focus".',
            points: 2
          },
          {
            id: 'q4',
            type: 'true-false',
            question: 'True or False: Dr. Williams recommends checking emails during peak energy hours.',
            correctAnswer: 'False',
            explanation: 'Él recomienda NO desperdiciar las horas pico en emails, sino usarlas para trabajo profundo.',
            points: 1
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'How long can it take to regain deep focus after an interruption?',
            correctAnswer: 'True23 minutes',
            explanation: 'El texto menciona: "it can take 23 minutes to fully regain deep focus".',
            points: 1
          },
          {
            id: 'q6',
            type: 'short-answer',
            question: 'What does Dr. Williams call the practice of giving full attention to one thing at a time?',
            correctAnswer: 'Single-tasking',
            explanation: 'Él lo llama "single-tasking" en oposición al multitasking.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l6-grammar-review',
        type: 'grammar',
        title: 'Grammar Review: Module 1 Comprehensive',
        grammarPoint: 'Passive Voice, Narrative Tenses, Cleft Sentences - Integration',
        explanation: 'This exercise reviews all major grammar points from Module 1. You should demonstrate mastery of:\n- Passive constructions in various tenses\n- Narrative tenses for storytelling\n- Cleft sentences for emphasis\n- Perfect tenses and their uses',
        examples: [
          'The building was being renovated when the fire started. (Passive continuous + Past simple)',
          'It was her dedication that made the difference. (It-cleft)',
          'What surprised me was how quickly he adapted. (What-cleft)',
          'I had been waiting for hours when she finally arrived. (Past perfect continuous + Past simple)',
          'The decision will have been made by tomorrow. (Future perfect passive)'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'The report ___ by the time you arrive tomorrow.',
            correctAnswer: 'will have been finished',
            explanation: 'Future perfect passive for action completed before future time.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Transform for emphasis: "Her courage impressed me most." → What ___',
            correctAnswer: 'impressed me most was her courage',
            explanation: 'What-cleft moving emphasis to subject position.',
            points: 2
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'Choose correct tenses: While I ___ home, I ___ my old teacher.',
            correctAnswer: 'was walking / met',
            explanation: 'Past continuous for background + Past simple for completed action.',
            points: 2
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'Rewrite in passive: "Someone should have warned us."',
            correctAnswer: 'We should have been warned',
            explanation: 'Modal perfect passive structure.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l6-vocabulary-review',
        type: 'vocabulary',
        title: 'Vocabulary Review: Module 1',
        vocabularySet: [
          { word: 'compelling', definition: 'very interesting; able to hold attention', example: 'The documentary presents a compelling argument for action.' },
          { word: 'nuanced', definition: 'characterized by subtle differences', example: 'Her nuanced performance captured the character\'s complexity.' },
          { word: 'ubiquitous', definition: 'present everywhere', example: 'Smartphones have become ubiquitous in modern society.' },
          { word: 'unprecedented', definition: 'never done or known before', example: 'The pandemic created unprecedented challenges.' },
          { word: 'resilience', definition: 'ability to recover quickly from difficulties', example: 'The community showed remarkable resilience after the disaster.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Which word means "present everywhere"?',
            correctAnswer: 'ubiquitous',
            explanation: 'Ubiquitous significa omnipresente, presente en todas partes.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'The team showed great ___ in recovering from their early defeats.',
            correctAnswer: 'resilience',
            explanation: 'Resilience = capacidad de recuperarse de dificultades.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l6-error-correction',
        type: 'error-identification',
        title: 'Error Correction: Module 1 Review',
        instructions: 'Each sentence contains ONE error related to grammar covered in Module 1. Identify and correct it.',
        sentences: [
          {
            id: 'ec1',
            question: 'What I need it is more time to finish the project.',
            error: 'it is',
            correction: 'is',
            explanation: 'In what-cleft sentences, don\'t include "it" after "what I need".',
            category: 'Cleft sentences',
            points: 2
          },
          {
            id: 'ec2',
            question: 'The bridge was building when the earthquake struck.',
            error: 'was building',
            correction: 'was being built',
            explanation: 'Passive continuous: was/were being + past participle.',
            category: 'Passive voice',
            points: 2
          },
          {
            id: 'ec3',
            question: 'She was living in Paris for five years before moving to London.',
            error: 'was living',
            correction: 'had been living / had lived',
            explanation: 'Use past perfect (continuous) for duration before past action.',
            category: 'Narrative tenses',
            points: 2
          },
          {
            id: 'ec4',
            question: 'It was in 2020 when everything changed.',
            error: 'when',
            correction: 'that',
            explanation: 'It-cleft sentences use "that" (or "who" for people), not "when".',
            category: 'Cleft sentences',
            points: 2
          },
          {
            id: 'ec5',
            question: 'The decision should have made earlier.',
            error: 'should have made',
            correction: 'should have been made',
            explanation: 'Modal perfect passive requires "been" before past participle.',
            category: 'Passive voice',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l6-collocation-review',
        type: 'collocation-matching',
        title: 'Collocation Review: Module 1',
        instructions: 'Match verbs with nouns to form collocations reviewed in Module 1.',
        pairs: [
          { left: 'make', right: 'a difference', distractor: false },
          { left: 'take', right: 'responsibility', distractor: false },
          { left: 'draw', right: 'a conclusion', distractor: false },
          { left: 'reach', right: 'an agreement', distractor: false },
          { left: 'raise', right: 'awareness', distractor: false },
          { left: 'pose', right: 'a threat', distractor: false },
          { left: 'yield', right: 'results', distractor: false },
          { left: 'undergo', right: 'transformation', distractor: false }
        ],
        distractors: [
          { left: 'do', right: 'a difference' },
          { left: 'get', right: 'responsibility' },
          { left: 'have', right: 'a conclusion' }
        ],
        points: 8
      },
      {
        id: 'b2-m1-l6-phrasal-verb-review',
        type: 'phrasal-verbs',
        title: 'Phrasal Verbs Review: Module 1',
        instructions: 'Review phrasal verbs from Module 1 lessons.',
        verbs: [
          {
            verb: 'bring about',
            meaning: 'to cause something to happen',
            examples: ['The new policies brought about significant changes.', 'What brought about this decision?'],
            usage: 'separable',
            synonyms: ['cause', 'produce', 'create']
          },
          {
            verb: 'carry out',
            meaning: 'to perform or complete a task',
            examples: ['They carried out extensive research.', 'The plan was carried out successfully.'],
            usage: 'separable',
            synonyms: ['perform', 'execute', 'conduct']
          },
          {
            verb: 'come across',
            meaning: 'to find by chance; to seem',
            examples: ['I came across this article yesterday.', 'She comes across as confident.'],
            usage: 'inseparable',
            synonyms: ['find', 'encounter', 'seem']
          },
          {
            verb: 'point out',
            meaning: 'to draw attention to something',
            examples: ['He pointed out several errors.', 'As she pointed out, we need more time.'],
            usage: 'separable',
            synonyms: ['indicate', 'mention', 'highlight']
          }
        ],
        exercises: [
          {
            id: 'pv1',
            type: 'fill-blank',
            question: 'The researchers _____ a comprehensive study on social behavior.',
            correctAnswer: 'carried out',
            points: 2
          },
          {
            id: 'pv2',
            type: 'fill-blank',
            question: 'The new technology will _____ major changes in how we work.',
            correctAnswer: 'bring about',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l6-exam-strategies',
        type: 'reading',
        title: 'Exam Strategies & Tips',
        text: `Preparing for the B2 First Exam: Key Strategies

Time Management:
- Reading & Use of English: 75 minutes for 7 parts
- Writing: 80 minutes for 2 tasks
- Listening: 40 minutes (including transfer time)
- Speaking: 14 minutes per pair

Use of English Tips:
1. Part 1 (Multiple Choice Cloze): Read the whole text first for context
2. Part 2 (Open Cloze): Think about grammar (articles, prepositions, pronouns) and fixed phrases
3. Part 3 (Word Formation): Consider prefix/suffix patterns and word class needed
4. Part 4 (Key Word Transformations): Keep the meaning exact; count words carefully

Reading Tips:
- Skim the text quickly first to get the general idea
- Read questions before detailed reading
- Underline key words in both questions and text
- Eliminate obviously wrong answers first

Writing Tips:
- Always plan before writing (5 minutes)
- Check word count—too short loses marks
- Use a variety of grammatical structures and vocabulary
- Leave time to proofread (5 minutes)
- For essays: clear introduction, 2-3 body paragraphs, conclusion

Listening Tips:
- Read questions carefully before listening
- Listen for paraphrase—the answer often uses different words than the question
- Don't panic if you miss something; focus on the next question
- Use the second listening to check and complete answers

Speaking Tips:
- Don't memorize speeches—examiners can tell
- It's okay to pause and think
- If you don't understand, ask the examiner to repeat
- Extend your answers with examples and reasons
- In Part 4, listen to your partner and respond naturally`,
        wordCount: 280,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'How long do you have for the Reading & Use of English section?',
            correctAnswer: '75 minutes',
            explanation: 'El texto indica: "75 minutes for 7 parts".',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: In listening, the answer usually uses the same words as the question.',
            correctAnswer: 'False',
            explanation: 'El texto dice: "Listen for paraphrase—the answer often uses different words".',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'How much time should you spend planning your writing task?',
            correctAnswer: '5 minutes',
            explanation: 'El texto recomienda: "Always plan before writing (5 minutes)".',
            points: 1
          }
        ],
        vocabularyHelp: [
          { word: 'skim', definition: 'read quickly to get the general idea' },
          { word: 'paraphrase', definition: 'express the same meaning using different words' },
          { word: 'proofread', definition: 'read through to check for errors' }
        ]
      },

      {
        id: 'b2-m1-l6-sentence-reordering-1',
        type: 'sentence-reordering',
        title: 'Sentence Reordering: Module Summary',
        instructions: 'Put the sentences in the correct order to create a logical paragraph about Module 1 learning objectives.',
        items: [
          {
            id: 'sr1',
            shuffledSentences: [
              'This foundation is essential for success in the B2 First examination.',
              'Module 1 has focused on developing advanced narrative and analytical skills.',
              'By mastering these structures, students can communicate with greater precision and sophistication.',
              'We have covered Past Perfect, conditionals, cleft sentences, and passive voice.'
            ],
            correctOrder: [1, 3, 2, 0],
            explanation: 'The logical order: introduction of topic → specific content → results → conclusion about importance.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l6-phrasal-verbs-1',
        type: 'phrasal-verbs',
        title: 'Module 1 Review: Phrasal Verbs',
        instructions: 'Complete each sentence with the correct phrasal verb from Module 1 vocabulary.',
        items: [
          {
            id: 'pv1',
            question: 'Students who ___ with creative solutions often score higher on writing tasks.',
            phrasalVerb: 'come up',
            meaning: 'to think of or produce an idea',
            correctAnswer: 'come up',
            options: ['come up', 'come across', 'come down', 'come through'],
            explanation: 'Come up with = to think of or suggest an idea or solution.',
            points: 1
          },
          {
            id: 'pv2',
            question: 'Make sure to ___ over your essay before submitting it to catch any errors.',
            phrasalVerb: 'go over',
            meaning: 'to review or check carefully',
            correctAnswer: 'go over',
            options: ['go over', 'go through', 'go on', 'go off'],
            explanation: 'Go over = to review or examine something carefully.',
            points: 1
          },
          {
            id: 'pv3',
            question: 'The teacher ___ the importance of practicing all four language skills regularly.',
            phrasalVerb: 'pointed out',
            meaning: 'to emphasize or draw attention to',
            correctAnswer: 'pointed out',
            options: ['pointed out', 'pointed at', 'pointed to', 'pointed up'],
            explanation: 'Point out = to emphasize or draw attention to something important.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l6-summary-writing-1',
        type: 'summary-writing',
        title: 'Module 1 Summary Writing Task',
        instructions: 'Write a summary of Module 1\'s key grammatical structures and their uses. Include Past Perfect, conditionals, cleft sentences, and passive voice.',
        sourceText: `Module 1 has covered four major grammatical areas essential for B2-level English proficiency. First, we examined Past Perfect and Past Perfect Continuous, which allow us to express complex time relationships in narratives, showing which actions occurred before others in the past. Second, we explored mixed conditionals and inversion, structures that enable sophisticated expression of hypothetical situations and emphasis. Third, we studied cleft sentences (it...that, what...is), which help writers focus attention on specific parts of a sentence for rhetorical effect. Finally, we mastered passive constructions, including various tenses and structures with modals, essential for academic and formal writing where the action is more important than the agent. Throughout the module, we practiced integrating these structures into coherent, natural discourse rather than using them in isolation. The goal was not merely to recognize these forms but to deploy them strategically to enhance clarity, precision, and sophistication in both written and spoken English. By combining these advanced structures with appropriate vocabulary and discourse markers, students can communicate at the B2 level required for university study, professional contexts, and the Cambridge B2 First examination.`,
        targetWordCount: 100,
        minWords: 80,
        maxWords: 120,
        keyPoints: [
          'Past Perfect for time relationships in narratives',
          'Mixed conditionals for hypothetical situations',
          'Cleft sentences for emphasis and focus',
          'Passive voice for formal/academic writing',
          'Integration of structures in natural discourse'
        ],
        rubric: {
          content: 40,
          conciseness: 20,
          accuracy: 30,
          grammar: 10
        }
      }
    ]
  },
  // ============================================
  // LECCIÓN 7: FCE USE OF ENGLISH - PRÁCTICA INTENSIVA
  // ============================================
  {
    id: 'b2-m1-l7',
    title: 'Lección 7: FCE Use of English - Complete Practice',
    description: 'Práctica intensiva de todos los tipos de ejercicios del Use of English del FCE',
    duration: 120,
    objectives: [
      'Dominar Open Cloze (Part 2) con gramática contextual',
      'Completar Gapped Text (Part 6) con párrafos eliminados',
      'Resolver Multiple Matching (Part 7) con textos múltiples',
      'Perfeccionar Key Word Transformations (Part 4)'
    ],
    exercises: [
      // Open Cloze Exercises (12 total)
      ...OPEN_CLOZE_EXERCISES.map((ex, idx) => ({
        ...ex,
        id: `b2-m1-l7-open-cloze-${idx + 1}`,
        title: `Open Cloze: ${ex.title}`,
        type: 'open-cloze' as ExerciseType
      })),
      
      // Gapped Text Exercises (6 total)
      ...GAPPED_TEXT_EXERCISES.map((ex, idx) => ({
        ...ex,
        id: `b2-m1-l7-gapped-text-${idx + 1}`,
        title: `Gapped Text: ${ex.title}`,
        type: 'gapped-text' as ExerciseType
      })),
      
      // Multiple Matching Exercises (6 total)
      ...MULTIPLE_MATCHING_EXERCISES.map((ex, idx) => ({
        ...ex,
        id: `b2-m1-l7-multiple-matching-${idx + 1}`,
        title: `Multiple Matching: ${ex.title}`,
        type: 'multiple-matching' as ExerciseType
      })),
      
      // Key Word Transformation Exercises (10 total)
      ...KEY_WORD_TRANSFORMATION_EXERCISES.map((ex, idx) => ({
        ...ex,
        id: `b2-m1-l7-key-transformation-${idx + 1}`,
        title: `Key Word Transformations: ${ex.title}`,
        type: 'key-word-transformation' as ExerciseType
      }))
    ]
  }
];

// MÓDULO 2: DEBATE, OPINIÓN Y PERSUASIÓN
export const MODULE_2_LESSONS: Lesson[] = [
  {
    id: 'b2-m2-l1',
    title: 'Lección 1: Modales de Especulación y Deducción',
    description: 'Aprende a expresar probabilidad, posibilidad y hacer deducciones',
    duration: 90,
    objectives: [
      'Usar modales para expresar diferentes niveles de certeza',
      'Hacer deducciones sobre el presente y el pasado',
      'Especular sobre situaciones y posibilidades',
      'Distinguir entre must/might/could/can\'t para deducciones'
    ],
    exercises: [
      {
        id: 'b2-m2-l1-grammar-1',
        type: 'grammar',
        title: 'Modales de Probabilidad en Presente',
        grammarPoint: 'must/might/could/can\'t + infinitivo',
        explanation: 'Usamos modales para expresar certeza sobre situaciones presentes:\n- must: casi seguro (95%)\n- might/could/may: posible (50%)\n- can\'t: imposible (0%)\nEstructura: modal + base verb',
        examples: [
          'She must be tired. (Estoy casi seguro)',
          'He might know the answer. (Es posible)',
          'They could be at home. (Es posible)',
          'It can\'t be true! (Es imposible)',
          'You must be joking! (Debes estar bromeando)'
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Choose the correct modal: The lights are on. Someone ___ be home.',
            correctAnswer: 'must',
            explanation: 'Las luces encendidas son evidencia fuerte de que alguien está en casa.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'She\'s not answering. She ___ be in a meeting.',
            correctAnswer: 'might/could/may',
            explanation: 'Expresamos posibilidad, no certeza.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m2-l1-speaking-1',
        type: 'speaking',
        prompt: 'Look at a photo or describe a situation and make deductions using modals. Example: "Looking at this scene, the people must be celebrating something because... They might have just... It could be..." Speak for 2 minutes.',
        timeLimit: 120,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Use "must be" for strong deductions',
          'Use "might/could be" for possibilities',
          'Use "can\'t be" for impossibilities',
          'Give reasons: "because...", "judging by..."',
          'Make multiple deductions about different aspects'
        ],
        targetWords: [
          'must be',
          'might be',
          'could be',
          'can\'t be',
          'because',
          'judging by',
          'celebrating',
          'just',
          'deductions',
          'possibilities',
          'impossibilities'
        ],
        expectedResponse: 'A 2-minute description making deductions about a scene or situation using modal verbs. Should include: (1) Strong deductions with \"must be\" (\"They must be celebrating because...\"), (2) Possibilities with \"might/could be\" (\"They might have just arrived\"), (3) Impossibilities with \"can\'t be\" (\"It can\'t be a normal day\"), (4) Reasons for deductions (\"because...\", \"judging by...\"), (5) Multiple deductions about different aspects (people, setting, situation). Demonstrates understanding of modal verbs for speculation and ability to support deductions with evidence.'
      },

      {
        id: 'b2-m2-l1-grammar-2',
        type: 'grammar',
        title: 'Modales de Deducción sobre el Pasado',
        grammarPoint: 'must/might/could/can\'t + have + past participle',
        explanation: 'Para deducciones sobre el pasado:\n- must have + p.p.: casi seguro que ocurrió\n- might/could/may have + p.p.: posiblemente ocurrió\n- can\'t have + p.p.: imposible que haya ocurrido\nEjemplo: "She must have forgotten" (Debe haberse olvidado)',
        examples: [
          'He must have left early. (Strong deduction - evidencia clara)',
          'They might have missed the train. (Possibility)',
          'She could have been delayed. (Possibility)',
          'It can\'t have been easy. (Impossibility)',
          'You must have been exhausted. (Logical deduction)'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'form: They\\ → ___',
            correctAnswer: 'must have left',
            explanation: 'Deducción fuerte sobre el pasado: must have + past participle.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'I can\'t find my keys. I ___ ___ them at work.',
            correctAnswer: 'must have left/might have left',
            explanation: 'Deducción sobre dónde dejé las llaves.',
            points: 2
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Rewrite using a modal of deduction: "I\'m sure she didn\'t see us."',
            correctAnswer: 'She can\'t have seen us',
            explanation: 'Can\'t have + p.p. para imposibilidad en el pasado.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l1-sentence-completion',
        type: 'sentence-completion',
        title: 'Sentence Completion: Making Deductions',
        instructions: 'Complete each sentence with an appropriate modal of deduction and justification.',
        sentences: [
          {
            id: 'sc1',
            incompleteSentence: 'Looking at the empty streets and closed shops, the town',
            sampleCompletions: [
              'must be experiencing some kind of emergency or lockdown',
              'can\'t be a major tourist destination',
              'might have been affected by a recent event'
            ],
            evaluationCriteria: 'Should use appropriate modal (must/might/can\'t) + logical deduction',
            points: 3
          },
          {
            id: 'sc2',
            incompleteSentence: 'Given her vast experience and qualifications, she',
            sampleCompletions: [
              'must have been offered the promotion',
              'can\'t have been rejected for the position',
              'might have applied for a higher role'
            ],
            evaluationCriteria: 'Modal of deduction about past + reasonable scenario',
            points: 3
          },
          {
            id: 'sc3',
            incompleteSentence: 'The car won\'t start and the battery is dead, so someone',
            sampleCompletions: [
              'must have left the lights on overnight',
              'might have forgotten to turn off the radio',
              'could have used it without telling anyone'
            ],
            evaluationCriteria: 'Past modal deduction explaining the cause',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l1-error-identification',
        type: 'error-identification',
        title: 'Error Identification: Modal Deductions',
        instructions: 'Each sentence contains ONE error with modals of deduction. Find and correct it.',
        sentences: [
          {
            id: 'ei1',
            question: 'She must be very tired yesterday after working 12 hours.',
            error: 'must be...yesterday',
            correction: 'must have been...yesterday',
            explanation: 'For past deductions, use "must have been", not "must be".',
            category: 'Past modals',
            points: 2
          },
          {
            id: 'ei2',
            sentence: 'They can\'t be at home now because I saw them leaving an hour ago.',
            error: 'No error',
            correction: 'Sentence is correct',
            explanation: 'Can\'t be is correct for present impossibility with present evidence.',
            category: 'Trick question - correct sentence',
            points: 2
          },
          {
            id: 'ei3',
            question: 'He might has forgotten about the meeting.',
            error: 'might has',
            correction: 'might have',
            explanation: 'Modal + have (not has) + past participle for past possibility.',
            category: 'Modal structure',
            points: 2
          },
          {
            id: 'ei4',
            question: 'You must have been enjoyed the concert last night.',
            error: 'have been enjoyed',
            correction: 'have enjoyed',
            explanation: 'Must have + past participle (enjoyed), not past participle of "be" + past participle.',
            category: 'Modal perfect structure',
            points: 2
          },
          {
            id: 'ei5',
            sentence: 'It couldn\'t be true what she said about winning the lottery.',
            error: 'couldn\'t be',
            correction: 'can\'t be',
            explanation: 'For present impossibility, use "can\'t be" not "couldn\'t be".',
            category: 'Present vs past modals',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l1-reading-1',
        type: 'reading',
        title: 'Reading: The Mystery of the Mary Celeste',
        text: `One of history's greatest maritime mysteries involves the Mary Celeste, a merchant ship found adrift in the Atlantic Ocean in 1872. The vessel was discovered in perfect condition with its cargo intact, but not a single person was on board. The crew had vanished without a trace.

When the rescue crew boarded the ship, they found the crew's belongings still in their quarters. Half-eaten meals sat on tables, and personal items remained untouched. The ship's lifeboat was missing, which suggested the crew had abandoned ship deliberately. However, there was no obvious reason why they would have done so. The ship wasn't taking on water, there was no fire damage, and the cargo was secure.

Various theories have been proposed over the years. Some experts believe the crew must have panicked about something, possibly fearing an explosion from the alcohol cargo, though there was no evidence of danger. Others think they might have been affected by ergot poisoning from contaminated food, which could have caused hallucinations and irrational behavior.

The captain's log offered few clues. The last entry was routine and gave no indication of problems. Weather records show that conditions had been challenging but not exceptional for the time of year. The crew must have abandoned ship quite suddenly, as they left behind valuable possessions that sailors would normally take.

Some investigators have suggested that the crew might have seen what they thought was land and rowed toward it, only to be lost at sea when they couldn't find their way back. Others believe there could have been a brief but terrifying incident—perhaps a waterspout or minor seismic activity—that made them fear for their lives.

The mystery remains unsolved to this day. The crew can't have simply disappeared into thin air, yet no bodies were ever found. They must have met some fate at sea, but what exactly happened may never be known. What we do know is that the Mary Celeste continues to fascinate historians and maritime enthusiasts more than 150 years after the incident.`,
        wordCount: 340,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'What condition was the Mary Celeste in when found?',
            correctAnswer: 'In perfect condition',
            explanation: 'El texto dice: "The vessel was discovered in perfect condition".',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What evidence suggested the crew left deliberately rather than in an accident?',
            correctAnswer: 'The lifeboat was missing / They took the lifeboat',
            explanation: 'El texto menciona: "The ship\'s lifeboat was missing, which suggested the crew had abandoned ship deliberately".',
            points: 2
          },
          {
            id: 'q5',
            type: 'fill-blank',
            question: 'Which modal does the text use to express what probably happened to the crew?',
            correctAnswer: 'The crew might have panicked',
            explanation: 'El texto usa "must have" y "might have" para especular sobre lo que pasó.',
            points: 2
          },
          {
            id: 'q4',
            type: 'true-false',
            question: 'True or False: The captain\'s log explained why the crew abandoned ship.',
            correctAnswer: 'False',
            explanation: 'El texto dice: "The captain\'s log offered few clues" y "gave no indication of problems".',
            points: 1
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'Find and write ONE sentence from the text that uses "can\'t have" to express impossibility.',
            correctAnswer: 'The crew can\'t have simply disappeared into thin air',
            explanation: 'Esta oración usa can\'t have para expresar que es imposible que simplemente desaparecieran.',
            points: 2
          }
        ],
        vocabularyHelp: [
          { word: 'adrift', definition: 'floating without being controlled; drifting' },
          { word: 'intact', definition: 'complete and not damaged' },
          { word: 'vanished', definition: 'disappeared suddenly and completely' },
          { word: 'waterspout', definition: 'a column of water and spray formed by a whirlwind over the sea' },
          { word: 'seismic activity', definition: 'movements or shaking of the earth\'s surface' }
        ]
      },
      {
        id: 'b2-m2-l1-paraphrasing',
        type: 'paraphrasing',
        title: 'Paraphrasing: Expressing Deductions',
        instructions: 'Rewrite each sentence using a different modal of deduction while keeping the same level of certainty.',
        sentences: [
          {
            id: 'p1',
            original: 'I\'m certain she didn\'t receive my message.',
            sampleParaphrases: [
              'She can\'t have received my message.',
              'She couldn\'t have received my message.',
              'It\'s impossible that she received my message.'
            ],
            keyVocabulary: ['certain = can\'t have', 'didn\'t receive = negative past deduction'],
            points: 3
          },
          {
            id: 'p2',
            original: 'Perhaps they got lost on the way here.',
            sampleParaphrases: [
              'They might have gotten lost on the way here.',
              'They could have gotten lost on the way here.',
              'It\'s possible they got lost on the way here.'
            ],
            keyVocabulary: ['perhaps = might/could have', 'possibility in past'],
            points: 3
          },
          {
            id: 'p3',
            original: 'I\'m sure this is the correct address.',
            sampleParaphrases: [
              'This must be the correct address.',
              'This has to be the correct address.',
              'I\'m certain this is the right address.'
            ],
            keyVocabulary: ['sure = must be', 'strong present deduction'],
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l1-collocation-matching',
        type: 'collocation-matching',
        title: 'Collocation Matching: Deduction & Speculation Verbs',
        instructions: 'Match the verbs with appropriate nouns to form collocations commonly used when making deductions.',
        pairs: [
          { left: 'draw', right: 'a conclusion', distractor: false },
          { left: 'reach', right: 'a verdict', distractor: false },
          { left: 'make', right: 'an assumption', distractor: false },
          { left: 'jump to', right: 'conclusions', distractor: false },
          { left: 'gather', right: 'evidence', distractor: false },
          { left: 'form', right: 'an opinion', distractor: false },
          { left: 'rule out', right: 'possibilities', distractor: false },
          { left: 'weigh up', right: 'options', distractor: false }
        ],
        distractors: [
          { left: 'do', right: 'a conclusion' },
          { left: 'take', right: 'an assumption' },
          { left: 'create', right: 'evidence' }
        ],
        points: 8
      },
      {
        id: 'b2-m2-l1-phrasal-verbs',
        type: 'phrasal-verbs',
        title: 'Phrasal Verbs: Investigation & Deduction',
        instructions: 'Learn phrasal verbs commonly used when investigating, analyzing, and making deductions.',
        verbs: [
          {
            verb: 'figure out',
            meaning: 'to understand or solve something after thinking about it',
            examples: [
              'I can\'t figure out why she left so suddenly.',
              'Scientists are trying to figure out what caused the phenomenon.'
            ],
            usage: 'separable',
            synonyms: ['work out', 'solve', 'understand']
          },
          {
            verb: 'look into',
            meaning: 'to investigate or examine something',
            examples: [
              'The police are looking into the disappearance.',
              'We need to look into all possible explanations.'
            ],
            usage: 'inseparable',
            synonyms: ['investigate', 'examine', 'explore']
          },
          {
            verb: 'piece together',
            meaning: 'to create a complete picture from separate pieces of information',
            examples: [
              'Detectives pieced together the events of that night.',
              'She\'s trying to piece together what happened from witness accounts.'
            ],
            usage: 'separable',
            synonyms: ['reconstruct', 'assemble', 'compile']
          },
          {
            verb: 'narrow down',
            meaning: 'to reduce the number of possibilities',
            examples: [
              'We\'ve narrowed down the suspects to three people.',
              'Can you narrow down the time when this occurred?'
            ],
            usage: 'separable',
            synonyms: ['reduce', 'limit', 'focus']
          },
          {
            verb: 'rule out',
            meaning: 'to decide that something is not possible or cannot happen',
            examples: [
              'Police have ruled out foul play.',
              'We can\'t rule out the possibility of human error.'
            ],
            usage: 'separable',
            synonyms: ['eliminate', 'exclude', 'discount']
          }
        ],
        exercises: [
          {
            id: 'pv1',
            type: 'fill-blank',
            question: 'Investigators are trying to _____ what caused the accident.',
            correctAnswer: 'figure out',
            points: 2
          },
          {
            id: 'q1',
            type: 'true-false',
            question: 'the correct phrasal verb: The committee needs to look into the investigation thoroughly.',
            correctAnswer: 'True',
            explanation: '',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l1-idioms',
        type: 'idioms-expressions',
        title: 'Idioms & Expressions: Certainty & Speculation',
        instructions: 'Learn idioms and expressions used to express different levels of certainty and speculation.',
        idioms: [
          {
            idiom: 'put two and two together',
            meaning: 'to guess or understand something by using the information you have',
            example: 'When I saw them leaving together and heard they\'d resigned, I put two and two together.',
            context: 'informal deduction',
            culturalNote: 'From basic arithmetic (2+2=4), suggesting obvious connections'
          },
          {
            idiom: 'read between the lines',
            meaning: 'to understand the hidden meaning in what someone says or writes',
            example: 'If you read between the lines of his email, he\'s clearly not happy with the decision.',
            context: 'making inferences',
            culturalNote: 'Suggests looking beyond surface meaning'
          },
          {
            idiom: 'beyond (any) doubt',
            meaning: 'completely certain; with no possibility of being wrong',
            example: 'The evidence proves beyond doubt that he was at the scene.',
            context: 'legal/formal certainty',
            culturalNote: 'Often used in legal contexts: "beyond reasonable doubt"'
          },
          {
            idiom: 'take something with a pinch/grain of salt',
            meaning: 'to not completely believe something; to be skeptical',
            example: 'He tends to exaggerate, so take his stories with a pinch of salt.',
            context: 'expressing doubt',
            culturalNote: 'Origins in ancient belief that salt protected against poison'
          },
          {
            idiom: 'anyone\'s guess',
            meaning: 'impossible to know or predict',
            example: 'What will happen next is anyone\'s guess—the situation is completely unpredictable.',
            context: 'complete uncertainty',
            culturalNote: 'Emphasizes that even guessing is difficult'
          },
          {
            idiom: 'the writing is on the wall',
            meaning: 'there are clear signs that something bad will happen',
            example: 'The writing was on the wall for months before the company finally went bankrupt.',
            context: 'predicting negative outcomes',
            culturalNote: 'Biblical origin from Book of Daniel'
          }
        ],
        exercises: [
          {
            id: 'id1',
            type: 'matching',
            instruction: 'Match each idiom to its meaning',
            pairs: [
              { idiom: 'put two and two together', meaning: 'make a deduction from clues' },
              { idiom: 'beyond doubt', meaning: 'completely certain' },
              { idiom: 'anyone\'s guess', meaning: 'impossible to predict' }
            ],
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l1-gap-fill',
        type: 'gap-fill-text',
        title: 'Gap-Fill: Archaeological Discovery',
        instructions: 'Complete the text using appropriate modals of deduction. Each gap requires ONE or TWO words.',
        text: `When archaeologists discovered the ancient tomb in 2019, they immediately knew it (1)___ ___ of great historical significance. The elaborate decorations and expensive materials suggested that the occupant (2)___ ___ ___ a person of high social status, perhaps even royalty.

However, several mysteries remained. The tomb contained no written records, so historians (3)___ ___ certain about the identity of the person buried there. The jewelry found inside (4)___ ___ belonged to a woman, but the skeletal remains were too damaged to confirm this definitively.

What puzzled researchers most was the presence of Mediterranean artifacts. These items (5)___ ___ ___ from at least 500 miles away, indicating extensive trade networks. The occupant (6)___ ___ been a merchant or diplomat with international connections.

The tomb (7)___ ___ ___ sealed around 500 BCE, based on carbon dating of organic materials found inside. Interestingly, there were signs of a hasty burial. The archaeologists believe something unexpected (8)___ ___ happened, forcing the burial party to finish quickly. Perhaps there was a threat of invasion, or maybe a natural disaster (9)___ ___ approaching.

One thing is certain: whoever was buried here (10)___ ___ ___ important enough to merit such an elaborate tomb, even if completed in haste. The mystery (11)___ never be fully solved, but each new discovery helps piece together the story of this ancient civilization.`,
        gaps: 11,
        answers: [
          { gapNumber: 1, correctAnswer: 'must be', acceptableAnswers: ['must be'], explanation: 'Strong deduction about present significance' },
          { gapNumber: 2, correctAnswer: 'must have been', acceptableAnswers: ['must have been'], explanation: 'Strong deduction about past identity' },
          { gapNumber: 3, correctAnswer: 'cannot be', acceptableAnswers: ['cannot be', 'can\'t be'], explanation: 'Impossibility of certainty without records' },
          { gapNumber: 4, correctAnswer: 'might have', acceptableAnswers: ['might have', 'could have', 'may have'], explanation: 'Possibility based on jewelry' },
          { gapNumber: 5, correctAnswer: 'must have come', acceptableAnswers: ['must have come'], explanation: 'Strong deduction about origin' },
          { gapNumber: 6, correctAnswer: 'might have', acceptableAnswers: ['might have', 'could have', 'may have'], explanation: 'Speculation about occupation' },
          { gapNumber: 7, correctAnswer: 'must have been', acceptableAnswers: ['must have been'], explanation: 'Deduction based on carbon dating' },
          { gapNumber: 8, correctAnswer: 'must have', acceptableAnswers: ['must have'], explanation: 'Logical deduction from evidence of haste' },
          { gapNumber: 9, correctAnswer: 'might have been', acceptableAnswers: ['might have been', 'could have been', 'may have been'], explanation: 'Speculation about natural disaster' },
          { gapNumber: 10, correctAnswer: 'must have been', acceptableAnswers: ['must have been'], explanation: 'Strong deduction about importance' },
          { gapNumber: 11, correctAnswer: 'may', acceptableAnswers: ['may', 'might'], explanation: 'Possibility that mystery remains unsolved' }
        ],
        points: 11
      },
      {
        id: 'b2-m2-l1-sentence-reordering',
        type: 'sentence-reordering',
        title: 'Sentence Reordering: Building a Logical Argument',
        instructions: 'Arrange these sentences to create a logical deduction about a situation.',
        sentences: [
          { id: 's1', text: 'Therefore, she must have decided to work from home today instead.', position: 7 },
          { id: 's2', text: 'Sarah\'s car is still in the driveway this morning.', position: 1 },
          { id: 's3', text: 'Additionally, her laptop bag is missing from its usual spot by the door.', position: 4 },
          { id: 's4', text: 'She can\'t be on vacation because I saw her at the office yesterday.', position: 5 },
          { id: 's5', text: 'This suggests she hasn\'t left for the office yet.', position: 2 },
          { id: 's6', text: 'However, she might have taken a taxi or gotten a ride from someone.', position: 3 },
          { id: 's7', text: 'This theory is supported by the fact that she mentioned having an important online meeting this afternoon.', position: 8 },
          { id: 's8', text: 'That rules out the possibility of her being sick or taking an unexpected day off.', position: 6 }
        ],
        correctOrder: ['s2', 's5', 's6', 's3', 's4', 's8', 's1', 's7'],
        explanation: 'Logical deduction structure: Initial observation → First conclusion → Alternative possibility → Supporting evidence → Ruling out alternatives → Final deduction → Supporting detail',
        points: 8
      },
      {
        id: 'b2-m2-l1-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m2-l1-listening-1.mp3',
        duration: 120,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Detective: So, Ms. Johnson, you reported your neighbor's apartment door was open when you came home around 8 PM?

Witness: Yes, that's right. It must have been open for some time because her mail was scattered on the floor.

Detective: And you're certain Ms. Chen wasn't home?

Witness: Well, I knocked several times and got no answer. She must have gone out, but it's strange because she never leaves her door open.

Detective: Could someone have broken in?

Witness: I don't think so. There was no sign of forced entry. She might have just forgotten to close it properly when she left.

Detective: What about her habits? Does she usually go out in the evenings?

Witness: Not really. She typically works from home. She could have had an emergency, I suppose.

Detective: Did you notice anything else unusual?

Witness: Her cat was in the hallway, which was odd. She can't have planned to be away long because she wouldn't have left the cat alone. She might have just run down to the corner shop and the door didn't latch properly.

Detective: That's a reasonable explanation. We'll check the shop's security footage.`,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Why does the witness think the door had been open for some time?',
            correctAnswer: 'The mail was scattered on the floor',
            explanation: 'La testigo dice: "It must have been open for some time because her mail was scattered on the floor".',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What modal does the witness use to express certainty that Ms. Chen wasn\'t home?',
            correctAnswer: 'must have (gone out)',
            explanation: '"She must have gone out" expresa certeza basada en evidencia.',
            points: 2
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: There were signs of a break-in.',
            correctAnswer: 'False',
            explanation: 'La testigo dice: "There was no sign of forced entry".',
            points: 1
          },
          {
            id: 'q7',
            type: 'fill-blank',
            question: 'Why does the witness think Ms. Chen can\\?',
            correctAnswer: 'She wouldn\\',
            explanation: '"She can\\\'t have planned to be away long because she wouldn\\\'t have left the cat alone".',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l1-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Degrees of Certainty',
        vocabularySet: [
          { word: 'definite', definition: 'certain and unlikely to change', example: 'We have definite proof that he was there.' },
          { word: 'probable', definition: 'likely to happen or be true', example: 'It\'s highly probable that she\'ll accept the offer.' },
          { word: 'plausible', definition: 'seeming reasonable or possible', example: 'That\'s a plausible explanation for what happened.' },
          { word: 'conceivable', definition: 'possible to imagine or believe', example: 'It\'s conceivable that they got lost.' },
          { word: 'dubious', definition: 'doubtful; not to be relied upon', example: 'I\'m dubious about the accuracy of these figures.' },
          { word: 'irrefutable', definition: 'impossible to deny or disprove', example: 'The evidence against him is irrefutable.' },
          { word: 'speculative', definition: 'based on guessing rather than knowledge', example: 'These theories are purely speculative.' },
          { word: 'inconclusive', definition: 'not leading to a definite conclusion', example: 'The tests results were inconclusive.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'Which word means "impossible to deny or disprove"?',
            correctAnswer: 'Trueirrefutable',
            explanation: 'Irrefutable significa irrefutable, imposible de negar.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'The witness account seemed ___, but we need more evidence.',
            correctAnswer: 'plausible',
            explanation: 'Plausible = creíble, razonable.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m2-l1-writing-1',
        type: 'writing',
        prompt: 'Write a short detective story or analysis (180-220 words) where you make deductions about a mysterious situation. Use at least 6 different modals of deduction (must/might/could/can\'t + present or perfect forms).',
        writingType: 'article',
        minWords: 180,
        maxWords: 220,
        timeLimit: 30,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Set the scene: describe the mysterious situation',
          'Present evidence: what can be observed?',
          'Make deductions using modals: "must have", "might be", "can\'t have", etc.',
          'Consider multiple possibilities before reaching a conclusion',
          'Use vocabulary of certainty: definite, probable, plausible',
          'Structure: Setup → Evidence → Deductions → Conclusion'
        ]
      },
      {
        id: 'b2-m2-l1-keytransform-1',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Modal Deductions',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt1',
            question: 'I\'m sure she didn\'t understand the instructions.',
            keyWord: 'can\'t',
            startOfAnswer: 'She',
            correctAnswer: 'can\'t have understood the',
            explanation: 'Can\'t have + past participle for strong negative deduction about past.',
            points: 2
          },
          {
            id: 'kt2',
            question: 'Perhaps they forgot about the meeting.',
            keyWord: 'might',
            startOfAnswer: 'They',
            correctAnswer: 'might have forgotten about',
            explanation: 'Might have + past participle for past possibility.',
            points: 2
          },
          {
            id: 'kt3',
            question: 'I\'m certain this is the right answer.',
            keyWord: 'must',
            startOfAnswer: 'This',
            correctAnswer: 'must be the right',
            explanation: 'Must be for strong present deduction.',
            points: 2
          },
          {
            id: 'kt4',
            question: 'It\'s impossible that he knew about this.',
            keyWord: 'have',
            startOfAnswer: 'He can\'t',
            correctAnswer: 'have known about this',
            explanation: 'Can\'t have known = impossibility in past.',
            points: 2
          },
          {
            id: 'kt5',
            question: 'I\'m sure they were surprised by the news.',
            keyWord: 'must',
            startOfAnswer: 'They',
            correctAnswer: 'must have been surprised',
            explanation: 'Must have been for strong past deduction.',
            points: 2
          },
          {
            id: 'kt6',
            question: 'Maybe she is working late tonight.',
            keyWord: 'could',
            startOfAnswer: 'She',
            correctAnswer: 'could be working late',
            explanation: 'Could be + -ing for present possibility.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l1-wordform-1',
        type: 'word-formation',
        title: 'Word Formation: Investigation Vocabulary',
        text: `Criminal investigations require both (1. SCIENCE)_____ analysis and logical (2. DEDUCE)_____. Forensic experts must examine evidence with great (3. CAREFUL)_____ to avoid (4. CONTAMINATE)_____ the crime scene. Their findings can provide (5. VALUE)_____ information that helps detectives establish the (6. PROBABLE)_____ sequence of events. However, even with modern technology, some cases remain (7. SOLVE)_____ due to (8. SUFFICE)_____ evidence.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'SCIENCE', correctAnswer: 'scientific', acceptableAnswers: ['scientific'], explanation: '"Scientific analysis" - relating to science.', wordType: 'adjective', transformation: 'noun → adjective (-ific)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'DEDUCE', correctAnswer: 'deduction', acceptableAnswers: ['deduction', 'deductions'], explanation: '"Logical deduction" - the process of reaching a conclusion through reasoning.', wordType: 'noun', transformation: 'verb → noun (-tion)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'CAREFUL', correctAnswer: 'care', acceptableAnswers: ['care'], explanation: '"With great care" - attention and caution.', wordType: 'noun', transformation: 'adjective → noun (remove -ful)', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'CONTAMINATE', correctAnswer: 'contaminating', acceptableAnswers: ['contaminating'], explanation: '"Avoid contaminating" - prevent from polluting or corrupting.', wordType: 'gerund', transformation: 'verb → gerund (-ing)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'VALUE', correctAnswer: 'valuable', acceptableAnswers: ['valuable'], explanation: '"Valuable information" - very useful or important.', wordType: 'adjective', transformation: 'noun → adjective (-able)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'PROBABLE', correctAnswer: 'probable', acceptableAnswers: ['probable'], explanation: '"Probable sequence" - likely order of events. (No transformation needed)', wordType: 'adjective', transformation: 'no change', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'SOLVE', correctAnswer: 'unsolved', acceptableAnswers: ['unsolved'], explanation: '"Remain unsolved" - not solved, still a mystery.', wordType: 'adjective', transformation: 'verb → negative adjective (un- + past participle)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'SUFFICE', correctAnswer: 'insufficient', acceptableAnswers: ['insufficient'], explanation: '"Insufficient evidence" - not enough.', wordType: 'adjective', transformation: 'verb → negative adjective (in- + -icient)', points: 1 }
        ],
        focusAreas: ['Negative prefixes (un-, in-)', 'Gerunds', 'Scientific vocabulary']
      },
      {
        id: 'b2-m2-l1-pronunciation',
        type: 'pronunciation',
        title: 'Pronunciation: Modal Contractions & Weak Forms',
        instructions: 'Practice pronouncing modal contractions and weak forms used in deductions.',
        words: [
          {
            word: 'must have',
            phonetic: '/məs(t)əv/ or /ˈmʌstəv/',
            audioUrl: '/audio/must-have.mp3',
            stressPattern: 'Weak form: must is unstressed, "have" sounds like /əv/',
            commonErrors: 'Don\'t say "must of" - it\'s "must have" or "must\'ve"',
            example: 'She must have /ˈmʌstəv/ left early.'
          },
          {
            word: 'might have',
            phonetic: '/ˈmaɪtəv/',
            audioUrl: '/audio/might-have.mp3',
            stressPattern: '"Have" weakens to /əv/ sound',
            commonErrors: 'Native speakers often say "mighta" /ˈmaɪtə/',
            example: 'They might have /ˈmaɪtəv/ forgotten.'
          },
          {
            word: 'could have',
            phonetic: '/ˈkʊdəv/',
            audioUrl: '/audio/could-have.mp3',
            stressPattern: '"Have" weakens to /əv/ sound',
            commonErrors: 'Don\'t write "could of" - incorrect spelling',
            example: 'You could have /ˈkʊdəv/ told me.'
          },
          {
            word: 'can\'t have',
            phonetic: '/ˈkɑːntəv/ (UK) or /ˈkæntəv/ (US)',
            audioUrl: '/audio/cant-have.mp3',
            stressPattern: 'Stress on "can\'t", "have" is weak',
            commonErrors: 'Full form would be too formal in speech',
            example: 'She can\'t have /ˈkɑːntəv/ known.'
          },
          {
            word: 'would have',
            phonetic: '/ˈwʊdəv/',
            audioUrl: '/audio/would-have.mp3',
            stressPattern: 'Often contracted to "would\'ve" /ˈwʊdəv/',
            commonErrors: 'Never write "would of"',
            example: 'I would have /ˈwʊdəv/ helped.'
          }
        ],
        exercises: [
          {
            id: 'pr1',
            type: 'pronunciation-practice',
            instruction: 'Practice saying these sentences with natural weak forms',
            sentences: [
              'She must have been working late.',
              'They might have missed the train.',
              'You could have called me.',
              'He can\'t have finished already.'
            ],
            points: 4
          }
        ]
      },
      {
        id: 'b2-m2-l1-integrated-1',
        type: 'reading',
        title: 'Integrated Skills: The Disappearance at Dyatlov Pass',
        text: `In 1959, nine experienced hikers died under mysterious circumstances in the Ural Mountains of Russia. The incident, known as the Dyatlov Pass Incident, remains one of history's most puzzling unsolved mysteries. Investigators found the group's tent cut open from the inside, and the hikers' bodies were discovered scattered across the snowy landscape, some partially clothed despite temperatures of -30°C.

The evidence painted a confusing picture. The hikers must have left their tent in extreme panic—the tent had been slashed from inside, suggesting a desperate escape. However, there was no apparent threat. Investigators could find no evidence of an avalanche, animal attack, or human intruders. The footprints leading away from the tent indicated the group had left calmly at first, walking rather than running.

Several bodies showed strange injuries. Two victims had fractured skulls, and another had broken ribs—injuries that, according to the medical examiner, would have required tremendous force, "equivalent to a car crash." Yet there were no external wounds. One victim's tongue was missing, though this might have been due to natural decomposition.

The investigation reached puzzling conclusions. Officials initially blamed "an unknown compelling force," which only deepened the mystery. Some have speculated that the group might have been caught in a rare meteorological event, such as infrasound-generating winds that could have induced panic. Others believe they could have encountered military testing in the area—the region was known for secret Soviet activities.

Modern theories suggest the hikers may have triggered a small avalanche, fled in terror, and then succumbed to hypothermia. However, this doesn't explain all the evidence. The injuries can't have been caused by hypothermia alone. The missing clothing might have been taken by survivors trying to help their dying companions, but why did they scatter in different directions?

The truth must lie somewhere in the evidence, yet more than 60 years later, we still cannot be certain what happened that night. Each theory has plausible elements, but none accounts for all the facts. The Dyatlov Pass Incident may never be fully explained—a reminder that some mysteries resist even our most careful investigation.`,
        wordCount: 340,
        readingTime: 4,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What does the cut tent suggest about how the hikers left?',
            correctAnswer: 'They left in a state of panic',
            explanation: 'The text states: "The hikers must have left their tent in extreme panic".',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Write the modal phrase the text uses to compare the force of the injuries.',
            correctAnswer: 'equivalent to a car crash',
            explanation: 'The medical examiner described injuries that "would have required tremendous force, equivalent to a car crash".',
            points: 2
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'Complete this deduction from the text: "The injuries ___ ___ been caused by hypothermia alone."',
            correctAnswer: 'can\'t have',
            explanation: 'The text uses "can\'t have" to express impossibility.',
            points: 2
          },
          {
            id: 'q8',
            type: 'fill-blank',
            question: 'According to the text, which theory involves unusual weather conditions?',
            correctAnswer: 'Infrasound-generating winds',
            explanation: 'The text mentions "infrasound-generating winds that could have induced panic" as a meteorological theory.',
            points: 1
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'Why does the author say "some mysteries resist even our most careful investigation"?',
            correctAnswer: 'Because we still cannot be certain what happened / No theory explains all the facts',
            explanation: 'Despite extensive investigation, no single theory accounts for all evidence.',
            points: 2
          },
          {
            id: 'q6',
            type: 'essay',
            question: 'Writing Task: Write your own theory (80-100 words) about what might have happened at Dyatlov Pass. Use at least 4 different modals of deduction (must have, might have, could have, can\'t have). Support your theory with evidence from the text.',
            correctAnswer: '',
            explanation: 'This is an open-ended writing task. Evaluate based on: appropriate use of modals, logical reasoning, reference to textual evidence, and coherence.',
            points: 10
          }
        ],
        vocabularyHelp: [
          { word: 'scattered', definition: 'spread over a wide area in an untidy or irregular way' },
          { word: 'fractured', definition: 'broken or cracked' },
          { word: 'infrasound', definition: 'sound waves with frequencies below the range of human hearing' },
          { word: 'succumbed', definition: 'failed to resist; died from' },
          { word: 'hypothermia', definition: 'dangerous drop in body temperature' }
        ]
      }
    ]
  },
  {
    id: 'b2-m2-l2',
    title: 'Lección 2: Voz Pasiva Avanzada',
    description: 'Domina el uso de la voz pasiva en diferentes tiempos y contextos',
    duration: 90,
    objectives: [
      'Usar voz pasiva en todos los tiempos verbales',
      'Aplicar la pasiva en contextos formales y académicos',
      'Comprender cuándo usar voz activa vs. pasiva',
      'Usar construcciones pasivas especiales (have something done)'
    ],
    exercises: [
      {
        id: 'b2-m2-l2-grammar-1',
        type: 'grammar',
        title: 'Voz Pasiva en Diferentes Tiempos',
        grammarPoint: 'Passive Voice: be + past participle',
        explanation: 'La voz pasiva se forma con el verbo "be" en el tiempo apropiado + participio pasado. Se usa cuando el agente es desconocido, obvio, o no es importante.\nEjemplos:\n- Present: is/are done\n- Past: was/were done\n- Present Perfect: has/have been done\n- Future: will be done',
        examples: [
          'The report is being written. (Present Continuous)',
          'The package was delivered yesterday. (Past Simple)',
          'The results have been published. (Present Perfect)',
          'The meeting will be held tomorrow. (Future)',
          'The building had been renovated before we moved in. (Past Perfect)'
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Transform to passive: "They are building a new hospital."',
            correctAnswer: 'A new hospital is being built.',
            explanation: 'Present Continuous pasivo: is/are being + past participle',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l2-writing-1',
        type: 'writing',
        prompt: 'Write a formal report (180-200 words) describing a process or system in your field of study/work. Use passive voice throughout to maintain a formal, objective tone.',
        writingType: 'report',
        minWords: 180,
        maxWords: 200,
        timeLimit: 30,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Use passive voice for objectivity: "was conducted", "were analyzed"',
          'Include: "It has been found that...", "It was discovered that..."',
          'Avoid personal pronouns (I, we)',
          'Use formal vocabulary',
          'Structure: Introduction → Process description → Conclusion'
        ]
      },

      {
        id: 'b2-m2-l2-grammar-2',
        type: 'grammar',
        title: 'Have/Get Something Done',
        grammarPoint: 'Causative structures: have/get + object + past participle',
        explanation: 'Usamos "have/get something done" para expresar que otra persona hace algo por nosotros (servicio):\n- have + object + past participle (más formal)\n- get + object + past participle (menos formal)\n\nEjemplos:\n- I had my car serviced. (= Alguien revisó mi coche)\n- She\'s getting her house painted. (= Alguien está pintando su casa)',
        examples: [
          'I need to have my eyes tested.',
          'We\'re getting the roof repaired next week.',
          'She had her hair cut yesterday.',
          'Did you get your computer fixed?',
          'They\'re having the garden redesigned.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'I ___ my watch repaired last week.',
            correctAnswer: 'had',
            explanation: 'Past simple para acción completada en el pasado.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'She\'s ___ her nails ___ at the salon.',
            correctAnswer: 'getting/having, done',
            explanation: 'Get/have + object + past participle para servicios.',
            points: 2
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Rewrite: "The mechanic is servicing my car." (use "have")',
            correctAnswer: 'I\'m having my car serviced',
            explanation: 'Present continuous causativo: am/is/are having + object + past participle.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l2-sentence-completion',
        type: 'sentence-completion',
        title: 'Sentence Completion: Passive Constructions',
        instructions: 'Complete each sentence using an appropriate passive construction.',
        sentences: [
          {
            id: 'sc1',
            incompleteSentence: 'The new policy has been',
            sampleCompletions: [
              'implemented across all departments',
              'approved by the board of directors',
              'criticized by many stakeholders'
            ],
            evaluationCriteria: 'Should use present perfect passive + appropriate completion',
            points: 3
          },
          {
            id: 'sc2',
            incompleteSentence: 'The research findings will be',
            sampleCompletions: [
              'published in a leading scientific journal',
              'presented at the international conference',
              'reviewed by independent experts'
            ],
            evaluationCriteria: 'Should use future passive + logical completion',
            points: 3
          },
          {
            id: 'sc3',
            incompleteSentence: 'By the time we arrived, the decision had already been',
            sampleCompletions: [
              'made by the committee',
              'announced to the public',
              'implemented without consultation'
            ],
            evaluationCriteria: 'Should use past perfect passive + reasonable completion',
            points: 3
          },
          {
            id: 'sc4',
            incompleteSentence: 'The bridge is currently being',
            sampleCompletions: [
              'renovated to improve safety',
              'inspected for structural damage',
              'constructed using sustainable materials'
            ],
            evaluationCriteria: 'Should use present continuous passive + logical action',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l2-error-identification',
        type: 'error-identification',
        title: 'Error Identification: Passive Voice Mistakes',
        instructions: 'Each sentence contains ONE error related to passive voice. Find and correct it.',
        sentences: [
          {
            id: 'ei1',
            question: 'The report was been completed yesterday.',
            error: 'was been',
            correction: 'was',
            explanation: 'Use "was completed" (past simple passive), not "was been completed".',
            category: 'Passive structure',
            points: 2
          },
          {
            id: 'ei2',
            question: 'The building is being build by a local company.',
            error: 'build',
            correction: 'built',
            explanation: 'Past participle is "built", not "build".',
            category: 'Irregular past participles',
            points: 2
          },
          {
            id: 'ei3',
            question: 'The letter should be send before Friday.',
            error: 'send',
            correction: 'sent',
            explanation: 'Past participle is "sent", not "send".',
            category: 'Irregular past participles',
            points: 2
          },
          {
            id: 'ei4',
            question: 'I had cut my hair at the salon yesterday.',
            error: 'had cut',
            correction: 'had my hair cut',
            explanation: 'Use causative "had my hair cut" (someone else cut it).',
            category: 'Causative have',
            points: 2
          },
          {
            id: 'ei5',
            question: 'The results have published in the journal.',
            error: 'have published',
            correction: 'have been published',
            explanation: 'Present perfect passive needs "have been" + past participle.',
            category: 'Present perfect passive',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l2-reading-1',
        type: 'reading',
        title: 'Reading: The Restoration of the Sistine Chapel',
        text: `Between 1980 and 1994, one of the most ambitious art restoration projects in history was undertaken: the cleaning of Michelangelo's frescoes in the Sistine Chapel. The project was initiated after centuries of dirt, candle smoke, and previous restoration attempts had darkened the original colors beyond recognition.

The restoration was carried out by a team of expert conservators using cutting-edge technology. First, extensive scientific analysis was conducted to understand the composition of the original paint and the various layers of grime. Small sections were carefully cleaned using special solvents, and the results were documented photographically before proceeding further.

As the cleaning progressed, startling discoveries were made. The vibrant colors that emerged contradicted centuries of art historical interpretation. Where Michelangelo had been praised for his somber, dark palette, it was now revealed that he had actually used bright, vivid colors. The figures that had been shrouded in darkness were transformed into brilliantly colored masterpieces.

The project was not without controversy. Some critics argued that too much cleaning was being done, potentially removing not just dirt but also some of Michelangelo's original work. Others defended the restoration, claiming that for the first time in centuries, the artist's true vision was being uncovered.

Throughout the fourteen-year project, sophisticated scaffolding systems were designed to allow conservators to work at great heights without damaging the frescoes. Every stage of the work was supervised by international experts and documented in minute detail. The project was funded by contributions from various sources, including the Vatican and international patrons.

Today, the restored frescoes are considered one of the greatest achievements in art conservation. Millions of visitors each year are now able to see Michelangelo's work as it was originally intended—vibrant, colorful, and breathtaking in its detail.`,
        wordCount: 300,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'What does "was undertaken" in the first paragraph mean?',
            correctAnswer: 'Was started/begun',
            explanation: '"Was undertaken" means was started or carried out.',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'How many passive voice constructions can you find in paragraph 2? List at least 3.',
            correctAnswer: 'was carried out, was conducted, were cleaned, were documented (any 3)',
            explanation: 'Paragraph 2 contains multiple passive constructions.',
            points: 2
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: Everyone agreed that the restoration was done correctly.',
            correctAnswer: 'False',
            explanation: 'The text states "The project was not without controversy" and mentions critics.',
            points: 1
          },
          {
            id: 'q9',
            type: 'fill-blank',
            question: 'According to the text, what was discovered during the cleaning?',
            correctAnswer: 'Michelangelo used bright, vivid colors',
            explanation: 'The text states "he had actually used bright, vivid colors".',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'Who funded the restoration project?',
            correctAnswer: 'The Vatican and international patrons',
            explanation: 'The text states: "funded by contributions from various sources, including the Vatican and international patrons".',
            points: 2
          }
        ],
        vocabularyHelp: [
          { word: 'frescoes', definition: 'paintings done on wet plaster on a wall or ceiling' },
          { word: 'grime', definition: 'dirt ingrained on the surface of something' },
          { word: 'conservators', definition: 'professionals who restore and preserve artworks' },
          { word: 'somber', definition: 'dark or dull in color or tone' },
          { word: 'shrouded', definition: 'covered or hidden' }
        ]
      },
      {
        id: 'b2-m2-l2-paraphrasing',
        type: 'paraphrasing',
        title: 'Paraphrasing: Active to Passive Conversion',
        instructions: 'Rewrite each sentence in the passive voice while maintaining the same meaning.',
        sentences: [
          {
            id: 'p1',
            original: 'Scientists have discovered a new species of deep-sea fish.',
            sampleParaphrases: [
              'A new species of deep-sea fish has been discovered.',
              'A new species of deep-sea fish has been discovered by scientists.'
            ],
            keyVocabulary: ['present perfect passive', 'by + agent (optional)'],
            points: 3
          },
          {
            id: 'p2',
            original: 'Someone should investigate this matter immediately.',
            sampleParaphrases: [
              'This matter should be investigated immediately.',
              'This matter ought to be investigated immediately.'
            ],
            keyVocabulary: ['modal passive', 'should be + past participle'],
            points: 3
          },
          {
            id: 'p3',
            original: 'They are going to announce the results tomorrow.',
            sampleParaphrases: [
              'The results are going to be announced tomorrow.',
              'The results will be announced tomorrow.'
            ],
            keyVocabulary: ['future passive', 'be going to be + past participle'],
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l2-collocation-matching',
        type: 'collocation-matching',
        title: 'Collocation Matching: Passive Voice Verbs',
        instructions: 'Match the passive verbs with appropriate nouns to form common collocations.',
        pairs: [
          { left: 'be conducted', right: 'research/an investigation', distractor: false },
          { left: 'be published', right: 'a report/an article', distractor: false },
          { left: 'be implemented', right: 'a policy/a plan', distractor: false },
          { left: 'be launched', right: 'a campaign/a product', distractor: false },
          { left: 'be established', right: 'a company/a tradition', distractor: false },
          { left: 'be carried out', right: 'an experiment/a survey', distractor: false },
          { left: 'be issued', right: 'a warning/a statement', distractor: false },
          { left: 'be granted', right: 'permission/a license', distractor: false }
        ],
        distractors: [
          { left: 'be made', right: 'research' },
          { left: 'be done', right: 'a campaign' },
          { left: 'be given', right: 'a policy' }
        ],
        points: 8
      },
      {
        id: 'b2-m2-l2-phrasal-verbs',
        type: 'phrasal-verbs',
        title: 'Phrasal Verbs: Processes & Procedures',
        instructions: 'Learn phrasal verbs commonly used in passive constructions when describing processes.',
        verbs: [
          {
            verb: 'carry out',
            meaning: 'to perform or conduct (research, experiment, task)',
            examples: [
              'The study was carried out over five years.',
              'Tests are being carried out to ensure safety.'
            ],
            usage: 'separable',
            synonyms: ['conduct', 'perform', 'execute']
          },
          {
            verb: 'bring about',
            meaning: 'to cause something to happen',
            examples: [
              'Major changes were brought about by the new legislation.',
              'The revolution was brought about by economic hardship.'
            ],
            usage: 'separable',
            synonyms: ['cause', 'produce', 'generate']
          },
          {
            verb: 'set up',
            meaning: 'to establish or create (organization, system)',
            examples: [
              'The committee was set up to investigate the claims.',
              'A new fund has been set up to support research.'
            ],
            usage: 'separable',
            synonyms: ['establish', 'create', 'found']
          },
          {
            verb: 'take over',
            meaning: 'to assume control or responsibility',
            examples: [
              'The project was taken over by a new manager.',
              'The company has been taken over by a larger corporation.'
            ],
            usage: 'separable',
            synonyms: ['assume control', 'acquire', 'seize']
          },
          {
            verb: 'put forward',
            meaning: 'to propose or suggest (idea, theory)',
            examples: [
              'Several theories have been put forward to explain the phenomenon.',
              'A new proposal was put forward at the meeting.'
            ],
            usage: 'separable',
            synonyms: ['propose', 'suggest', 'present']
          }
        ],
        exercises: [
          {
            id: 'pv1',
            type: 'fill-blank',
            question: 'The research was _____ _____ by a team of international scientists.',
            correctAnswer: 'carried out',
            points: 2
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'the correct phrasal verb: A new theory has been put forward to explain the data.',
            correctAnswer: 'True',
            explanation: '',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l2-idioms',
        type: 'idioms-expressions',
        title: 'Idioms & Expressions: Formal & Academic Language',
        instructions: 'Learn formal expressions commonly used with passive voice in academic writing.',
        idioms: [
          {
            idiom: 'It is widely believed/accepted that...',
            meaning: 'many people believe/accept that something is true',
            example: 'It is widely believed that climate change poses a serious threat.',
            context: 'formal/academic writing',
            culturalNote: 'Impersonal passive structure for objective tone'
          },
          {
            idiom: 'It has been suggested that...',
            meaning: 'someone has proposed the idea that...',
            example: 'It has been suggested that the policy needs revision.',
            context: 'formal reports and papers',
            culturalNote: 'Avoids naming who suggested it'
          },
          {
            idiom: 'It should be noted that...',
            meaning: 'it is important to recognize/remember that...',
            example: 'It should be noted that these are preliminary findings.',
            context: 'academic/formal contexts',
            culturalNote: 'Draws attention to important information'
          },
          {
            idiom: 'It is considered (to be)...',
            meaning: 'it is generally regarded as...',
            example: 'The discovery is considered to be a major breakthrough.',
            context: 'formal evaluation',
            culturalNote: 'Expresses general opinion objectively'
          },
          {
            idiom: 'It has been demonstrated that...',
            meaning: 'research/evidence has shown that...',
            example: 'It has been demonstrated that exercise improves mental health.',
            context: 'scientific writing',
            culturalNote: 'Shows evidence-based conclusion'
          },
          {
            idiom: 'It cannot be denied that...',
            meaning: 'it is impossible to dispute that...',
            example: 'It cannot be denied that the situation has improved.',
            context: 'formal argumentation',
            culturalNote: 'Acknowledges undeniable facts'
          }
        ],
        exercises: [
          {
            id: 'id1',
            type: 'matching',
            instruction: 'Match each expression to its appropriate use',
            pairs: [
              { idiom: 'It has been demonstrated that', meaning: 'presenting research findings' },
              { idiom: 'It is widely believed that', meaning: 'referring to common opinion' },
              { idiom: 'It should be noted that', meaning: 'highlighting important information' }
            ],
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l2-gap-fill',
        type: 'gap-fill-text',
        title: 'Gap-Fill: The Discovery of Penicillin',
        instructions: 'Complete the text using appropriate passive forms. Each gap requires ONE to THREE words.',
        text: `The story of penicillin's discovery is one of the most famous examples of accidental scientific breakthroughs. In 1928, the antibiotic (1)___ ___ by Scottish scientist Alexander Fleming, though the discovery (2)___ ___ ___ by chance rather than systematic research.

Fleming had been studying staphylococcus bacteria when he noticed that a mold contamination had killed the bacteria in one of his petri dishes. This observation (3)___ ___ ___ initially, but Fleming eventually recognized its significance. The mold (4)___ ___ and further experiments (5)___ ___ ___.

However, it took more than a decade before penicillin (6)___ ___ ___ for widespread medical use. The process of mass production (7)___ ___ by Howard Florey and Ernst Boris Chain in the 1940s. Their work (8)___ ___ by the urgent need for antibiotics during World War II.

Thanks to their efforts, penicillin (9)___ ___ available to treat wounded soldiers, saving countless lives. The discovery (10)___ ___ ___ as one of the greatest medical advances of the 20th century, and Fleming, Florey, and Chain (11)___ ___ the Nobel Prize in 1945.

Today, millions of lives continue (12)___ ___ ___ by antibiotics derived from Fleming's accidental discovery.`,
        gaps: 12,
        answers: [
          { gapNumber: 1, correctAnswer: 'was discovered', acceptableAnswers: ['was discovered'], explanation: 'Past simple passive', points: 1 },
          { gapNumber: 2, correctAnswer: 'was made', acceptableAnswers: ['was made'], explanation: '"Made by chance" - passive construction', points: 1 },
          { gapNumber: 3, correctAnswer: 'was almost ignored', acceptableAnswers: ['was almost ignored', 'was nearly ignored'], explanation: 'Past simple passive with adverb', points: 1 },
          { gapNumber: 4, correctAnswer: 'was identified', acceptableAnswers: ['was identified', 'was isolated'], explanation: 'Past simple passive', points: 1 },
          { gapNumber: 5, correctAnswer: 'were carried out', acceptableAnswers: ['were carried out', 'were conducted'], explanation: 'Passive phrasal verb', points: 1 },
          { gapNumber: 6, correctAnswer: 'could be produced', acceptableAnswers: ['could be produced', 'was produced'], explanation: 'Modal passive or past simple passive', points: 1 },
          { gapNumber: 7, correctAnswer: 'was developed', acceptableAnswers: ['was developed', 'was perfected'], explanation: 'Past simple passive', points: 1 },
          { gapNumber: 8, correctAnswer: 'was driven', acceptableAnswers: ['was driven', 'was motivated'], explanation: '"Was driven by" = motivated/caused by', points: 1 },
          { gapNumber: 9, correctAnswer: 'was made', acceptableAnswers: ['was made'], explanation: '"Made available" - passive causative', points: 1 },
          { gapNumber: 10, correctAnswer: 'is now regarded', acceptableAnswers: ['is now regarded', 'is considered'], explanation: 'Present simple passive', points: 1 },
          { gapNumber: 11, correctAnswer: 'were awarded', acceptableAnswers: ['were awarded', 'received'], explanation: 'Past simple passive', points: 1 },
          { gapNumber: 12, correctAnswer: 'to be saved', acceptableAnswers: ['to be saved'], explanation: 'Passive infinitive after "continue"', points: 1 }
        ],
        points: 12
      },
      {
        id: 'b2-m2-l2-sentence-reordering',
        type: 'sentence-reordering',
        title: 'Sentence Reordering: Scientific Process',
        instructions: 'Arrange these sentences to describe a logical scientific process using passive voice.',
        sentences: [
          { id: 's1', text: 'The data was then analyzed using statistical software.', position: 5 },
          { id: 's2', text: 'First, the research question was formulated by the team.', position: 1 },
          { id: 's3', text: 'Finally, the findings were published in a peer-reviewed journal.', position: 8 },
          { id: 's4', text: 'A detailed methodology was designed to test the hypothesis.', position: 2 },
          { id: 's5', text: 'The results were interpreted in the context of existing literature.', position: 6 },
          { id: 's6', text: 'Ethical approval was obtained from the university review board.', position: 3 },
          { id: 's7', text: 'Data collection was carried out over a six-month period.', position: 4 },
          { id: 's8', text: 'The conclusions were reviewed by independent experts before publication.', position: 7 }
        ],
        correctOrder: ['s2', 's4', 's6', 's7', 's1', 's5', 's8', 's3'],
        explanation: 'Scientific research process: formulate question → design methodology → get approval → collect data → analyze → interpret → peer review → publish',
        points: 8
      },
      {
        id: 'b2-m2-l2-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m2-l2-listening-1.mp3',
        duration: 150,
        allowReplay: true,
        maxReplays: 3,
        transcript: `News Anchor: In science news today, a remarkable discovery has been made by researchers at Cambridge University. Dr. Sarah Mitchell joins us to explain. Dr. Mitchell, what exactly has been found?

Dr. Mitchell: Thank you for having me. Well, a new technique has been developed that could revolutionize cancer treatment. The method was discovered somewhat accidentally during unrelated research into cell behavior.

Anchor: How was this discovery made?

Dr. Mitchell: The research team was investigating how certain proteins are produced by cancer cells. During one experiment, an unusual reaction was observed when a particular compound was introduced. Further tests were conducted, and it was found that the compound could effectively target and destroy cancer cells while leaving healthy cells unharmed.

Anchor: That sounds promising. What happens next?

Dr. Mitchell: More trials will be carried out over the next two years. First, the treatment will be tested on animal models, and if successful, human trials will be initiated. However, it should be noted that this is still early-stage research.

Anchor: When might this treatment be made available to patients?

Dr. Mitchell: If everything goes well, the therapy could be approved for clinical use within five to ten years. But it's important that expectations are managed—many promising treatments are abandoned during the trial phase when unexpected problems are encountered.`,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'How was the discovery described?',
            correctAnswer: 'It was made accidentally',
            explanation: 'Dr. Mitchell says "discovered somewhat accidentally during unrelated research".',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What passive phrase does Dr. Mitchell use to describe what happened during the experiment?',
            correctAnswer: 'an unusual reaction was observed',
            explanation: 'She states: "an unusual reaction was observed when a particular compound was introduced".',
            points: 2
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: The treatment is ready for use in hospitals now.',
            correctAnswer: 'False',
            explanation: 'Dr. Mitchell says trials will be carried out over the next two years and approval could take 5-10 years.',
            points: 1
          },
          {
            id: 'q10',
            type: 'fill-blank',
            question: 'What will happen first in the testing process?',
            correctAnswer: 'Animal model tests',
            explanation: 'Dr. Mitchell says: "First, the treatment will be tested on animal models".',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'What phrase does Dr. Mitchell use to introduce an important caveat?',
            correctAnswer: 'it should be noted that',
            explanation: 'She uses the formal passive phrase "it should be noted that this is still early-stage research".',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l2-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Academic & Formal Verbs',
        vocabularySet: [
          { word: 'conduct', definition: 'to carry out or organize (research, survey)', example: 'The study was conducted over three years.' },
          { word: 'implement', definition: 'to put a plan or system into operation', example: 'The new policy will be implemented next month.' },
          { word: 'undertake', definition: 'to begin or commit to (a task, project)', example: 'The research was undertaken by a team of experts.' },
          { word: 'demonstrate', definition: 'to show clearly through evidence', example: 'The experiment demonstrated the effectiveness of the treatment.' },
          { word: 'establish', definition: 'to create, set up, or prove', example: 'The company was established in 1995.' },
          { word: 'initiate', definition: 'to cause something to begin', example: 'The project was initiated last year.' },
          { word: 'constitute', definition: 'to form or make up', example: 'These findings constitute important evidence.' },
          { word: 'derive', definition: 'to obtain from a source', example: 'The data was derived from official records.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'Which word means "to carry out research"?',
            correctAnswer: 'Falseconstitute',
            explanation: 'Falso. Conduct = realizar, llevar a cabo.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'The new system will be _____ across all branches.',
            correctAnswer: 'implemented',
            explanation: 'Implement = poner en práctica.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m2-l2-speaking-1',
        type: 'speaking',
        prompt: 'Describe a process or procedure in your field (or a general process like "how a bill becomes law" or "how scientific research is conducted"). Use passive voice throughout to maintain objectivity. Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Use passive voice: "is conducted", "are analyzed", "was developed"',
          'Include sequence markers: "first", "then", "after that", "finally"',
          'Use formal vocabulary: "undertake", "implement", "establish"',
          'Avoid personal pronouns (I, we, you)',
          'Examples: research process, manufacturing, legislative process, application procedures'
        ],
        targetWords: [
          'is conducted',
          'are analyzed',
          'was developed',
          'first',
          'then',
          'after that',
          'finally',
          'undertake',
          'implement',
          'establish',
          'process',
          'procedure',
          'objectivity'
        ],
        expectedResponse: 'A 2-3 minute description of a process using passive voice for objectivity. Should include: (1) Introduction of the process/procedure, (2) Sequential steps using passive constructions (\"is conducted\", \"are analyzed\", \"was developed\"), (3) Sequence markers (\"first\", \"then\", \"after that\", \"finally\"), (4) Formal vocabulary (\"undertake\", \"implement\", \"establish\"), (5) Avoidance of personal pronouns. Demonstrates mastery of passive voice for formal descriptions and ability to explain complex processes objectively.'
      },
      {
        id: 'b2-m2-l2-keytransform-1',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Passive Voice',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt1',
            question: 'They published the report last week.',
            keyWord: 'was',
            startOfAnswer: 'The report',
            correctAnswer: 'was published last week',
            explanation: 'Past simple passive: was + past participle.',
            points: 2
          },
          {
            id: 'kt2',
            question: 'Someone needs to repair this machine urgently.',
            keyWord: 'needs',
            startOfAnswer: 'This machine',
            correctAnswer: 'needs to be repaired',
            explanation: 'Passive infinitive: needs + to be + past participle.',
            points: 2
          },
          {
            id: 'kt3',
            question: 'A mechanic serviced my car yesterday.',
            keyWord: 'had',
            startOfAnswer: 'I',
            correctAnswer: 'had my car serviced',
            explanation: 'Causative have: had + object + past participle.',
            points: 2
          },
          {
            id: 'kt4',
            question: 'They say that exercise improves health.',
            keyWord: 'said',
            startOfAnswer: 'It',
            correctAnswer: 'is said that exercise',
            explanation: 'Impersonal passive: It is said that...',
            points: 2
          },
          {
            id: 'kt5',
            question: 'People believe that the company will expand.',
            keyWord: 'believed',
            startOfAnswer: 'The company',
            correctAnswer: 'is believed to expand',
            explanation: 'Personal passive: is believed + to-infinitive.',
            points: 2
          },
          {
            id: 'kt6',
            question: 'Workers are building a new bridge.',
            keyWord: 'being',
            startOfAnswer: 'A new bridge',
            correctAnswer: 'is being built by',
            explanation: 'Present continuous passive: is being + past participle.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l2-wordform-1',
        type: 'word-formation',
        title: 'Word Formation: Scientific Research',
        text: `Modern scientific research requires (1. COLLABORATE)_____ among experts from various fields. Projects are often (2. FUND)_____ by government agencies or private (3. INVEST)_____. Before any research can be conducted, (4. APPROVE)_____ must be obtained from ethics committees. The (5. COLLECT)_____ of data is carried out following strict protocols to ensure (6. RELY)_____. Results are subjected to rigorous (7. ANALYZE)_____ before being published. This process ensures the (8. VALID)_____ of scientific findings.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'COLLABORATE', correctAnswer: 'collaboration', acceptableAnswers: ['collaboration'], explanation: '"Requires collaboration" - working together.', wordType: 'noun', transformation: 'verb → noun (-tion)', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'FUND', correctAnswer: 'funded', acceptableAnswers: ['funded'], explanation: '"Are funded" - passive voice, provided with money.', wordType: 'past participle', transformation: 'verb → past participle (-ed)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'INVEST', correctAnswer: 'investors', acceptableAnswers: ['investors'], explanation: '"Private investors" - people who invest money.', wordType: 'noun (plural)', transformation: 'verb → noun (-or) + plural', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'APPROVE', correctAnswer: 'approval', acceptableAnswers: ['approval'], explanation: '"Approval must be obtained" - official permission.', wordType: 'noun', transformation: 'verb → noun (-al)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'COLLECT', correctAnswer: 'collection', acceptableAnswers: ['collection'], explanation: '"The collection of data" - the process of gathering.', wordType: 'noun', transformation: 'verb → noun (-tion)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'RELY', correctAnswer: 'reliability', acceptableAnswers: ['reliability'], explanation: '"Ensure reliability" - quality of being trustworthy.', wordType: 'noun', transformation: 'verb → noun (-ability)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'ANALYZE', correctAnswer: 'analysis', acceptableAnswers: ['analysis'], explanation: '"Subjected to analysis" - detailed examination.', wordType: 'noun', transformation: 'verb → noun (-sis)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'VALID', correctAnswer: 'validity', acceptableAnswers: ['validity'], explanation: '"The validity of findings" - quality of being sound or well-founded.', wordType: 'noun', transformation: 'adjective → noun (-ity)', points: 1 }
        ],
        focusAreas: ['Noun formation', 'Academic vocabulary', 'Passive voice contexts']
      },
      {
        id: 'b2-m2-l2-pronunciation',
        type: 'pronunciation',
        title: 'Pronunciation: Past Participles',
        instructions: 'Practice pronouncing common irregular past participles used in passive voice.',
        words: [
          {
            word: 'conducted',
            phonetic: '/kənˈdʌktɪd/',
            audioUrl: '/audio/conducted.mp3',
            stressPattern: 'Stress on second syllable: con-DUCT-ed',
            commonErrors: 'Don\'t stress first syllable',
            example: 'The research was conducted /kənˈdʌktɪd/ carefully.'
          },
          {
            word: 'established',
            phonetic: '/ɪˈstæblɪʃt/',
            audioUrl: '/audio/established.mp3',
            stressPattern: 'Stress on second syllable: es-TAB-lished',
            commonErrors: 'Note the reduced -ed ending',
            example: 'The company was established /ɪˈstæblɪʃt/ in 1995.'
          },
          {
            word: 'undertaken',
            phonetic: '/ˌʌndəˈteɪkən/',
            audioUrl: '/audio/undertaken.mp3',
            stressPattern: 'Primary stress on third syllable: un-der-TAK-en',
            commonErrors: 'Weak stress on "der"',
            example: 'The project was undertaken /ˌʌndəˈteɪkən/ last year.'
          },
          {
            word: 'implemented',
            phonetic: '/ˈɪmplɪmentɪd/',
            audioUrl: '/audio/implemented.mp3',
            stressPattern: 'Stress on first syllable: IM-ple-ment-ed',
            commonErrors: 'Four syllables, not three',
            example: 'The policy was implemented /ˈɪmplɪmentɪd/ successfully.'
          },
          {
            word: 'demonstrated',
            phonetic: '/ˈdemənstreɪtɪd/',
            audioUrl: '/audio/demonstrated.mp3',
            stressPattern: 'Stress on first syllable: DEM-on-strat-ed',
            commonErrors: 'Middle syllable is weak /mən/',
            example: 'The results were demonstrated /ˈdemənstreɪtɪd/ clearly.'
          }
        ],
        exercises: [
          {
            id: 'pr1',
            type: 'pronunciation-practice',
            instruction: 'Practice these passive sentences with correct stress',
            sentences: [
              'The research was conducted by experts.',
              'The company was established twenty years ago.',
              'The project will be undertaken next month.',
              'The new system was implemented successfully.',
              'The theory has been demonstrated in practice.'
            ],
            points: 5
          }
        ]
      },
      {
        id: 'b2-m2-l2-integrated-1',
        type: 'reading',
        title: 'Integrated Skills: The Panama Canal Construction',
        text: `The construction of the Panama Canal stands as one of humanity's greatest engineering achievements. The canal, which connects the Atlantic and Pacific Oceans, was built between 1904 and 1914, though the idea had been conceived centuries earlier.

The first serious attempt to construct the canal was undertaken by the French in 1881, led by Ferdinand de Lesseps, who had successfully built the Suez Canal. However, the project was plagued by problems. Thousands of workers were killed by tropical diseases such as yellow fever and malaria. Poor planning and inadequate funding meant that the French attempt was eventually abandoned in 1889 after an estimated 22,000 deaths.

The United States took over the project in 1904. Under American leadership, revolutionary approaches were implemented. First, a massive health campaign was launched to control mosquito-borne diseases. Hospitals were built, swamps were drained, and strict sanitation measures were enforced. These efforts were led by Dr. William Gorgas, whose work dramatically reduced death rates.

The engineering challenges were formidable. Mountains had to be excavated, rivers had to be redirected, and an ingenious system of locks had to be designed to raise and lower ships through different water levels. The Gatún Dam was constructed to create an artificial lake, which would form part of the canal route.

Over 75,000 workers were employed during peak construction. The project was managed with military precision, and innovative construction techniques were developed to overcome the terrain challenges. Steam shovels and railways were used to remove millions of tons of earth and rock.

Finally, on August 15, 1914, the canal was officially opened when the cargo ship SS Ancon completed the first official transit. The total cost has been estimated at $375 million—a massive sum at the time. The canal immediately proved its worth, reducing the sea journey from New York to San Francisco by approximately 8,000 miles.

Today, the expanded Panama Canal can accommodate modern mega-ships and remains one of the world's most important maritime routes. The original construction is still regarded as a triumph of human engineering and determination.`,
        wordCount: 350,
        readingTime: 4,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Why did the French attempt fail?',
            correctAnswer: 'Diseases and poor planning',
            explanation: 'The text mentions "thousands of workers were killed by tropical diseases" and "poor planning and inadequate funding".',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Find and write 3 different passive voice constructions from paragraph 3.',
            correctAnswer: 'were implemented, was launched, were built, were drained, were enforced (any 3)',
            explanation: 'Paragraph 3 contains multiple passive constructions describing the American approach.',
            points: 3
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: The French successfully completed the Suez Canal before attempting the Panama Canal.',
            correctAnswer: 'True',
            explanation: 'The text states de Lesseps "had successfully built the Suez Canal".',
            points: 1
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'How was the disease problem solved under American leadership?',
            correctAnswer: 'Health campaign to control mosquitoes, hospitals built, swamps drained, sanitation measures enforced',
            explanation: 'All these measures were implemented to combat disease.',
            points: 2
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'What does "was undertaken" mean in paragraph 2?',
            correctAnswer: 'Was started/begun',
            explanation: '"Was undertaken" means was started or initiated.',
            points: 1
          },
          {
            id: 'q6',
            type: 'essay',
            question: 'Writing Task: Write a paragraph (100-120 words) describing a major construction project or technological achievement using passive voice. Include: what was built, who it was built by, what challenges were overcome, and how it is regarded today.',
            correctAnswer: '',
            explanation: 'Evaluate based on: correct use of passive voice, clear structure, appropriate vocabulary, and logical flow.',
            points: 10
          }
        ],
        vocabularyHelp: [
          { word: 'conceived', definition: 'formed or imagined (an idea)' },
          { word: 'plagued', definition: 'continually troubled by' },
          { word: 'formidable', definition: 'inspiring respect through being impressive or difficult' },
          { word: 'excavated', definition: 'dug out and removed (earth, rock)' },
          { word: 'precision', definition: 'accuracy and exactness' }
        ]
      }
    ]
  },
  // ============================================
  // MÓDULO 2 - LECCIÓN 3: Reported Speech Advanced
  // ============================================
  {
    id: 'b2-m2-l3',
    title: 'Lección 3: Estilo Indirecto Avanzado',
    description: 'Domina el reported speech con reporting verbs y estructuras complejas',
    duration: 90,
    objectives: [
      'Reportar declaraciones, preguntas y órdenes',
      'Usar reporting verbs variados (claim, suggest, recommend, etc.)',
      'Aplicar backshifting de tiempos correctamente',
      'Reportar conversaciones de forma natural y fluida'
    ],
    exercises: [
      {
        id: 'b2-m2-l3-grammar-1',
        type: 'grammar',
        title: 'Reporting Verbs',
        grammarPoint: 'Advanced reporting verbs',
        explanation: 'En lugar de usar siempre "say" o "tell", usamos reporting verbs más específicos:\n- claim (afirmar), suggest (sugerir), recommend (recomendar), admit (admitir), deny (negar), warn (advertir), etc.\nEstructuras:\n- verb + that-clause: He claimed that...\n- verb + infinitive: She offered to help.\n- verb + object + infinitive: He advised me to wait.',
        examples: [
          'She suggested (that) we should leave early.',
          'He denied taking the money.',
          'They recommended visiting the museum.',
          'She admitted (that) she had made a mistake.',
          'He warned me not to go there alone.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: '"I didn\\',
            correctAnswer: 'denied',
            explanation: 'Deny se usa para negar algo.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: '"Why don\'t we go to the cinema?" → She ___ going to the cinema.',
            correctAnswer: 'suggested',
            explanation: 'Suggest se usa para proponer ideas.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m2-l3-speaking-1',
        type: 'speaking',
        prompt: 'Tell me about a conversation you had recently. Report what the other person said using various reporting verbs (suggested, claimed, admitted, warned, recommended, etc.). Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Set the context: When and where was the conversation?',
          'Use varied reporting verbs, not just "said"',
          'Apply correct backshifting of tenses',
          'Report both statements and questions',
          'Make it natural and conversational'
        ],
        targetWords: [
          'suggested',
          'claimed',
          'admitted',
          'warned',
          'recommended',
          'insisted',
          'denied',
          'reported',
          'backshifting',
          'conversation',
          'reporting verbs'
        ],
        expectedResponse: 'A 2-3 minute report of a recent conversation using varied reporting verbs. Should include: (1) Context setting (when/where the conversation took place), (2) Varied reporting verbs beyond \"said\" (suggested, claimed, admitted, warned, recommended, insisted, denied), (3) Correct backshifting of tenses (\"She said she was tired\" from \"I am tired\"), (4) Reporting both statements and questions, (5) Natural, conversational tone. Demonstrates mastery of reported speech and variety in reporting verbs.'
      },

      {
        id: 'b2-m2-l3-grammar-2',
        type: 'grammar',
        title: 'Backshifting Tenses in Reported Speech',
        grammarPoint: 'Tense changes in reported speech',
        explanation: 'Cuando reportamos algo que se dijo en el pasado, los tiempos verbales cambian (backshift):\n- Present Simple → Past Simple\n- Present Continuous → Past Continuous\n- Present Perfect → Past Perfect\n- Past Simple → Past Perfect\n- Will → Would\n- Can → Could\n\nEjemplo: "I am tired" → She said (that) she was tired.',
        examples: [
          '"I work here." → He said he worked there.',
          '"I\'m leaving." → She said she was leaving.',
          '"I have finished." → He said he had finished.',
          '"I saw him yesterday." → She said she had seen him the day before.',
          '"I will call you." → He said he would call me.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: '"I can help you." → She said she ___ help me.',
            correctAnswer: 'could',
            explanation: 'Can cambia a could en reported speech.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: '"I have seen that movie." → He said he ___ ___ that movie.',
            correctAnswer: 'had seen',
            explanation: 'Present Perfect cambia a Past Perfect.',
            points: 2
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Report: "I am studying English." (She said...)',
            correctAnswer: 'She said (that) she was studying English',
            explanation: 'Present Continuous → Past Continuous.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l3-sentence-completion',
        type: 'sentence-completion',
        title: 'Sentence Completion: Reporting Verbs',
        instructions: 'Complete each sentence using an appropriate reporting verb and structure.',
        sentences: [
          {
            id: 'sc1',
            incompleteSentence: 'The doctor warned',
            sampleCompletions: [
              'me not to lift heavy objects',
              'us that the treatment could have side effects',
              'patients about the risks of smoking'
            ],
            evaluationCriteria: 'Should use correct structure after "warn" (warn + object + (not) to infinitive / warn + that clause)',
            points: 3
          },
          {
            id: 'sc2',
            incompleteSentence: 'She admitted',
            sampleCompletions: [
              'that she had made a mistake',
              'to feeling nervous about the presentation',
              'having taken the money'
            ],
            evaluationCriteria: 'Correct structure: admit + that clause / admit + to + -ing / admit + -ing',
            points: 3
          },
          {
            id: 'sc3',
            incompleteSentence: 'The manager suggested',
            sampleCompletions: [
              'that we should postpone the meeting',
              'postponing the meeting until next week',
              'we postpone the meeting'
            ],
            evaluationCriteria: 'Correct structure: suggest + that clause / suggest + -ing',
            points: 3
          },
          {
            id: 'sc4',
            incompleteSentence: 'They recommended',
            sampleCompletions: [
              'that we visit the museum',
              'visiting the museum while in the city',
              'us to book tickets in advance'
            ],
            evaluationCriteria: 'Appropriate structure for "recommend"',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l3-error-identification',
        type: 'error-identification',
        title: 'Error Identification: Reported Speech',
        instructions: 'Each sentence contains ONE error in reported speech. Find and correct it.',
        sentences: [
          {
            id: 'ei1',
            question: 'He said me that he was tired.',
            error: 'said me',
            correction: 'told me',
            explanation: 'Use "told + person", not "said + person". "Said" doesn\'t take an indirect object.',
            category: 'Say vs. Tell',
            points: 2
          },
          {
            id: 'ei2',
            question: 'She suggested to go to the cinema.',
            error: 'suggested to go',
            correction: 'suggested going',
            explanation: 'Suggest + -ing, not suggest + to infinitive.',
            category: 'Reporting verb patterns',
            points: 2
          },
          {
            id: 'ei3',
            question: 'My teacher advised me study harder.',
            error: 'advised me study',
            correction: 'advised me to study',
            explanation: 'Advise + object + to infinitive.',
            category: 'Verb patterns',
            points: 2
          },
          {
            id: 'ei4',
            question: 'He asked me where was I going.',
            error: 'where was I going',
            correction: 'where I was going',
            explanation: 'In reported questions, use statement word order (subject + verb).',
            category: 'Reported questions',
            points: 2
          },
          {
            id: 'ei5',
            question: 'She said that she will call me tomorrow.',
            error: 'will call',
            correction: 'would call',
            explanation: 'Will changes to would in reported speech (backshifting).',
            category: 'Backshifting',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l3-reading-1',
        type: 'reading',
        title: 'Reading: The Interview',
        text: `Maria sat nervously outside the interview room. When her name was called, she walked in and shook hands with the panel. The first interviewer, Mr. Thompson, asked her to tell them about her previous experience. Maria explained that she had worked for three years in marketing and had managed several successful campaigns. She emphasized that she had always enjoyed working in teams.

Ms. Chen, the second interviewer, then inquired whether Maria would be willing to relocate. Maria replied that she would definitely consider it if the opportunity was right. She added that flexibility was important to her career development. She also mentioned that she had discussed the possibility with her family and they were supportive.

The HR manager, Mr. Patel, asked what Maria's greatest weakness was. She admitted that she sometimes struggled with delegating tasks because she wanted everything to be perfect. However, she quickly added that she had been working on this and had made significant progress. She claimed that her attention to detail was actually one of her greatest strengths.

Finally, Ms. Chen wanted to know why Maria was interested in leaving her current position. Maria carefully explained that while she appreciated her current role, she felt she had reached a ceiling in terms of growth. She said that she was looking for new challenges and believed this position would offer exactly that. She emphasized that she wasn't running away from anything but rather running toward new opportunities.

Mr. Thompson concluded the interview by telling Maria that they would contact her within a week. He thanked her for coming and said that they had been impressed by her responses. Maria left feeling cautiously optimistic.`,
        wordCount: 290,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'What reporting verb is used when Maria talks about her experience?',
            correctAnswer: 'explained',
            explanation: 'The text states: "Maria explained that she had worked for three years..."',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Find and write one example of backshifting in the text.',
            correctAnswer: 'had worked / had managed / had been working (any one)',
            explanation: 'Present Perfect in direct speech becomes Past Perfect in reported speech.',
            points: 2
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: Maria refused to consider relocating.',
            correctAnswer: 'False',
            explanation: 'Maria "replied that she would definitely consider it".',
            points: 1
          },
          {
            id: 'q11',
            type: 'fill-blank',
            question: 'Which reporting verb does Maria use to acknowledge a weakness?',
            correctAnswer: 'admitted',
            explanation: 'Text states: "She admitted that she sometimes struggled with delegating".',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'What did Mr. Thompson tell Maria at the end?',
            correctAnswer: 'That they would contact her within a week / They had been impressed by her responses',
            explanation: 'He told her both pieces of information.',
            points: 2
          }
        ],
        vocabularyHelp: [
          { word: 'inquired', definition: 'asked (formal)' },
          { word: 'relocate', definition: 'move to a different place to live and work' },
          { word: 'delegating', definition: 'giving tasks or responsibilities to others' },
          { word: 'ceiling', definition: 'an upper limit' },
          { word: 'cautiously optimistic', definition: 'hopeful but careful not to expect too much' }
        ]
      },
      {
        id: 'b2-m2-l3-paraphrasing',
        type: 'paraphrasing',
        title: 'Paraphrasing: Direct to Reported Speech',
        instructions: 'Convert each direct speech sentence into reported speech using the verb provided.',
        sentences: [
          {
            id: 'p1',
            original: '"I have never been to Japan," she said.',
            sampleParaphrases: [
              'She said (that) she had never been to Japan.',
              'She mentioned (that) she had never been to Japan.',
              'She stated (that) she had never been to Japan.'
            ],
            keyVocabulary: ['backshifting: have been → had been'],
            points: 3
          },
          {
            id: 'p2',
            original: '"Don\'t touch that button!" the technician warned.',
            sampleParaphrases: [
              'The technician warned me not to touch that button.',
              'The technician warned us not to touch that button.'
            ],
            keyVocabulary: ['warn + object + not to infinitive'],
            points: 3
          },
          {
            id: 'p3',
            original: '"Why don\'t we take a break?" John suggested.',
            sampleParaphrases: [
              'John suggested taking a break.',
              'John suggested that we (should) take a break.'
            ],
            keyVocabulary: ['suggest + -ing / suggest + that clause'],
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l3-collocation-matching',
        type: 'collocation-matching',
        title: 'Collocation Matching: Reporting Verbs + Prepositions',
        instructions: 'Match the reporting verbs with their correct prepositions or structures.',
        pairs: [
          { left: 'accuse someone', right: 'of doing something', distractor: false },
          { left: 'apologize', right: 'for doing something', distractor: false },
          { left: 'insist', right: 'on doing something', distractor: false },
          { left: 'congratulate someone', right: 'on doing something', distractor: false },
          { left: 'blame someone', right: 'for something', distractor: false },
          { left: 'warn someone', right: 'about/against something', distractor: false },
          { left: 'remind someone', right: 'to do something', distractor: false },
          { left: 'persuade someone', right: 'to do something', distractor: false }
        ],
        distractors: [
          { left: 'accuse someone', right: 'to do something' },
          { left: 'apologize', right: 'to do something' },
          { left: 'insist', right: 'for doing something' }
        ],
        points: 8
      },
      {
        id: 'b2-m2-l3-phrasal-verbs',
        type: 'phrasal-verbs',
        title: 'Phrasal Verbs: Communication',
        instructions: 'Learn phrasal verbs commonly used in reported speech and communication contexts.',
        verbs: [
          {
            verb: 'bring up',
            meaning: 'to mention or introduce a topic in conversation',
            examples: [
              'He brought up the issue of salary during the meeting.',
              'She brought up an interesting point about the project.'
            ],
            usage: 'separable',
            synonyms: ['mention', 'raise', 'introduce']
          },
          {
            verb: 'point out',
            meaning: 'to direct attention to something; to mention',
            examples: [
              'She pointed out several errors in the report.',
              'He pointed out that we were running late.'
            ],
            usage: 'separable',
            synonyms: ['indicate', 'highlight', 'mention']
          },
          {
            verb: 'get across',
            meaning: 'to successfully communicate an idea',
            examples: [
              'I don\'t think I got my point across clearly.',
              'The speaker got his message across effectively.'
            ],
            usage: 'separable',
            synonyms: ['communicate', 'convey', 'express']
          },
          {
            verb: 'talk someone into',
            meaning: 'to persuade someone to do something',
            examples: [
              'She talked me into joining the club.',
              'They tried to talk him into accepting the offer.'
            ],
            usage: 'inseparable',
            synonyms: ['persuade', 'convince']
          },
          {
            verb: 'let on',
            meaning: 'to reveal information, especially something secret',
            examples: [
              'He didn\'t let on that he knew about the surprise.',
              'She let on that she was planning to quit.'
            ],
            usage: 'inseparable',
            synonyms: ['reveal', 'disclose', 'hint']
          }
        ],
        exercises: [
          {
            id: 'pv1',
            type: 'fill-blank',
            question: 'She _____ _____ that we needed to reconsider our strategy.',
            correctAnswer: 'pointed out',
            points: 2
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Choose the correct phrasal verb: He tried to _____ the issue during dinner.',
            correctAnswer: 'bring up',
            explanation: '',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l3-idioms',
        type: 'idioms-expressions',
        title: 'Idioms & Expressions: Talking & Communicating',
        instructions: 'Learn idioms and expressions related to speech and communication.',
        idioms: [
          {
            idiom: 'beat around the bush',
            meaning: 'to avoid talking directly about something',
            example: 'Stop beating around the bush and tell me what happened.',
            context: 'informal conversation',
            culturalNote: 'Refers to hunting, where bushes were beaten to flush out birds'
          },
          {
            idiom: 'get something off your chest',
            meaning: 'to talk about something that has been worrying you',
            example: 'I needed to get it off my chest, so I told her the truth.',
            context: 'personal problems',
            culturalNote: 'Physical metaphor for emotional relief'
          },
          {
            idiom: 'put your foot in it / in your mouth',
            meaning: 'to say something embarrassing or tactless',
            example: 'I really put my foot in it when I asked about her ex-husband.',
            context: 'social mistakes',
            culturalNote: 'British: "in it" / American: "in your mouth"'
          },
          {
            idiom: 'speak your mind',
            meaning: 'to say exactly what you think',
            example: 'Don\'t be afraid to speak your mind during the meeting.',
            context: 'expressing opinions',
            culturalNote: 'Usually considered positive (honesty)'
          },
          {
            idiom: 'word of mouth',
            meaning: 'information passed from person to person through conversation',
            example: 'The restaurant became popular through word of mouth.',
            context: 'informal advertising',
            culturalNote: 'One of the oldest forms of communication'
          },
          {
            idiom: 'hear it through the grapevine',
            meaning: 'to hear news or gossip indirectly',
            example: 'I heard through the grapevine that they\'re getting married.',
            context: 'rumors and gossip',
            culturalNote: 'From telegraph lines resembling grapevines'
          }
        ],
        exercises: [
          {
            id: 'id1',
            type: 'matching',
            instruction: 'Match each idiom to its meaning',
            pairs: [
              { idiom: 'beat around the bush', meaning: 'avoid the main topic' },
              { idiom: 'get something off your chest', meaning: 'talk about a worry' },
              { idiom: 'speak your mind', meaning: 'say what you really think' }
            ],
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l3-gap-fill',
        type: 'gap-fill-text',
        title: 'Gap-Fill: A Difficult Conversation',
        instructions: 'Complete the text using appropriate reported speech structures. Each gap requires ONE to FOUR words.',
        text: `Last week, I had a difficult conversation with my colleague, James. He (1)___ ___ if we could talk privately, so we went to a quiet meeting room. He began by (2)___ ___ that he hadn't been happy with how I'd handled a recent project. He (3)___ ___ I had made decisions without consulting the team.

I (4)___ ___ having made some mistakes but (5)___ ___ that I had been under a lot of pressure. I (6)___ him that I would be more collaborative in the future. He (7)___ ___ me not to take it personally, saying that he just wanted to improve our working relationship.

James then (8)___ that we should have weekly check-in meetings. I (9)___ ___ it was a good idea and (10)___ ___ setting them up. He (11)___ me that communication was key to good teamwork. I (12)___ ___ ___ him for being honest and bringing up the issue.

By the end of the conversation, I (13)___ much better. James (14)___ ___ he appreciated my willingness to listen. We (15)___ ___ ___ to make our partnership stronger going forward.`,
        gaps: 15,
        answers: [
          { gapNumber: 1, correctAnswer: 'asked me', acceptableAnswers: ['asked me'], explanation: 'Ask + object + if', points: 1 },
          { gapNumber: 2, correctAnswer: 'explaining/saying', acceptableAnswers: ['explaining', 'saying', 'mentioning'], explanation: 'Reporting verb for statements', points: 1 },
          { gapNumber: 3, correctAnswer: 'claimed/said/suggested', acceptableAnswers: ['claimed', 'said', 'suggested', 'felt'], explanation: 'Reporting verb + that clause', points: 1 },
          { gapNumber: 4, correctAnswer: 'admitted to', acceptableAnswers: ['admitted to', 'admitted'], explanation: 'Admit + to + -ing or admit + -ing', points: 1 },
          { gapNumber: 5, correctAnswer: 'explained/pointed out', acceptableAnswers: ['explained', 'pointed out', 'mentioned'], explanation: 'Reporting verb for giving reasons', points: 1 },
          { gapNumber: 6, correctAnswer: 'assured/promised', acceptableAnswers: ['assured', 'promised', 'told'], explanation: 'Promise or assure + that clause', points: 1 },
          { gapNumber: 7, correctAnswer: 'told/asked/urged', acceptableAnswers: ['told', 'asked', 'urged'], explanation: 'Tell/ask/urge + object + not to infinitive', points: 1 },
          { gapNumber: 8, correctAnswer: 'suggested/proposed', acceptableAnswers: ['suggested', 'proposed', 'recommended'], explanation: 'Suggest + that clause', points: 1 },
          { gapNumber: 9, correctAnswer: 'agreed/said', acceptableAnswers: ['agreed', 'said', 'thought'], explanation: 'Expressing agreement', points: 1 },
          { gapNumber: 10, correctAnswer: 'offered to', acceptableAnswers: ['offered to', 'volunteered to'], explanation: 'Offer + to infinitive', points: 1 },
          { gapNumber: 11, correctAnswer: 'reminded/told', acceptableAnswers: ['reminded', 'told'], explanation: 'Remind/tell + object + that clause', points: 1 },
          { gapNumber: 12, correctAnswer: 'thanked him for', acceptableAnswers: ['thanked him for'], explanation: 'Thank + object + for + -ing', points: 1 },
          { gapNumber: 13, correctAnswer: 'felt', acceptableAnswers: ['felt'], explanation: 'Simple past for direct experience', points: 1 },
          { gapNumber: 14, correctAnswer: 'said that', acceptableAnswers: ['said', 'said that', 'mentioned that'], explanation: 'Reporting verb + that clause', points: 1 },
          { gapNumber: 15, correctAnswer: 'both agreed/agreed together', acceptableAnswers: ['both agreed', 'agreed together', 'both promised'], explanation: 'Expressing mutual agreement', points: 1 }
        ],
        points: 15
      },
      {
        id: 'b2-m2-l3-sentence-reordering',
        type: 'sentence-reordering',
        title: 'Sentence Reordering: Reporting a Negotiation',
        instructions: 'Arrange these sentences to create a logical narrative reporting a business negotiation.',
        sentences: [
          { id: 's1', text: 'The supplier then suggested meeting halfway on the price.', position: 5 },
          { id: 's2', text: 'First, our manager explained that we needed better terms.', position: 1 },
          { id: 's3', text: 'Finally, both parties agreed to sign the revised contract.', position: 8 },
          { id: 's4', text: 'He emphasized that our budget was limited this quarter.', position: 2 },
          { id: 's5', text: 'We admitted that we understood their position.', position: 6 },
          { id: 's6', text: 'The supplier initially claimed they couldn\'t reduce the price.', position: 3 },
          { id: 's7', text: 'After further discussion, we proposed a longer-term commitment.', position: 7 },
          { id: 's8', text: 'They warned that their costs had increased significantly.', position: 4 }
        ],
        correctOrder: ['s2', 's4', 's6', 's8', 's1', 's5', 's7', 's3'],
        explanation: 'Logical negotiation sequence: state needs → explain constraints → supplier refuses → supplier explains → compromise suggested → acknowledge → counter-proposal → agreement',
        points: 8
      },
      {
        id: 'b2-m2-l3-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m2-l3-listening-1.mp3',
        duration: 140,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Reporter: I'm here with Dr. Elena Rodriguez, who has just published a groundbreaking study on sleep patterns. Dr. Rodriguez, could you tell us what your research revealed?

Dr. Rodriguez: Certainly. Our study found that people who maintain regular sleep schedules are significantly healthier than those with irregular patterns. We recommended that adults should aim for seven to nine hours of sleep per night and go to bed at the same time each day.

Reporter: What did participants say about implementing these changes?

Dr. Rodriguez: Many admitted that they had been skeptical at first. However, after following the program for just two weeks, most reported feeling much more energetic. Several participants claimed that their productivity at work had improved dramatically. One person told us that she hadn't felt this good in years.

Reporter: Did anyone experience difficulties?

Dr. Rodriguez: Yes, some participants complained that it was hard to maintain the schedule on weekends. They explained that social commitments often interfered. However, we advised them to be as consistent as possible and suggested making gradual adjustments rather than drastic changes.

Reporter: What do you say to people who insist they can function on less sleep?

Dr. Rodriguez: The research clearly shows that this is a misconception. We found that people who claimed they only needed four or five hours actually performed worse on cognitive tests. I would urge everyone to prioritize sleep—your health depends on it.`,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What did the research recommend?',
            correctAnswer: 'Seven to nine hours per night at the same time',
            explanation: 'Dr. Rodriguez says: "We recommended that adults should aim for seven to nine hours...and go to bed at the same time".',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What reporting verb does Dr. Rodriguez use to describe participants\' initial attitude?',
            correctAnswer: 'admitted',
            explanation: '"Many admitted that they had been skeptical".',
            points: 2
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: All participants found it easy to maintain the schedule.',
            correctAnswer: 'False',
            explanation: 'Dr. Rodriguez says "some participants complained that it was hard to maintain the schedule on weekends".',
            points: 1
          },
          {
            id: 'q12',
            type: 'true-false',
            question: 'What did Dr. Rodriguez advise participants who had difficulties?',
            correctAnswer: 'FalseGive up the program',
            explanation: 'Falso. She "suggested making gradual adjustments rather than drastic changes".',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'What verb does Dr. Rodriguez use in her final message to listeners?',
            correctAnswer: 'urge',
            explanation: '"I would urge everyone to prioritize sleep".',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l3-vocabulary-1',
        type: 'vocabulary',
        title: 'Vocabulary: Reporting Verbs',
        vocabularySet: [
          { word: 'claim', definition: 'to say something is true, often without proof', example: 'He claimed that he had never met her before.' },
          { word: 'insist', definition: 'to demand something forcefully', example: 'She insisted that we arrive on time.' },
          { word: 'urge', definition: 'to strongly recommend or advise', example: 'Doctors urge people to eat healthily.' },
          { word: 'boast', definition: 'to talk with excessive pride about something', example: 'He boasted that he was the best player.' },
          { word: 'complain', definition: 'to express dissatisfaction', example: 'They complained that the service was poor.' },
          { word: 'emphasize', definition: 'to stress the importance of something', example: 'She emphasized that punctuality was essential.' },
          { word: 'acknowledge', definition: 'to accept or admit the truth', example: 'He acknowledged that he had been wrong.' },
          { word: 'reassure', definition: 'to comfort someone and remove their doubts', example: 'She reassured me that everything would be fine.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Which verb means "to talk with excessive pride"?',
            correctAnswer: 'boast',
            explanation: 'Boast = presumir, alardear.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'The teacher _____ the importance of regular practice.',
            correctAnswer: 'emphasized',
            explanation: 'Emphasize = enfatizar, recalcar.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m2-l3-writing-1',
        type: 'writing',
        prompt: 'Write a narrative (200-220 words) reporting a conversation or meeting you had. Use at least 8 different reporting verbs (suggested, explained, admitted, warned, recommended, etc.). Focus on using correct reported speech structures and backshifting.',
        writingType: 'article',
        minWords: 200,
        maxWords: 220,
        timeLimit: 35,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Vary your reporting verbs—don\'t repeat "said"',
          'Apply correct backshifting of tenses',
          'Include both statements and questions',
          'Use appropriate time expressions (the day before, the next day)',
          'Structure: Context → Main content of conversation → Outcome',
          'Check verb patterns: suggest + -ing, advise + to infinitive, etc.'
        ]
      },
      {
        id: 'b2-m2-l3-keytransform-1',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Reported Speech',
        instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
        transformations: [
          {
            id: 'kt1',
            question: '"I didn\'t break the window," Tom said.',
            keyWord: 'denied',
            startOfAnswer: 'Tom',
            correctAnswer: 'denied breaking the window',
            explanation: 'Deny + -ing form.',
            points: 2
          },
          {
            id: 'kt2',
            question: '"You should see a doctor," she told me.',
            keyWord: 'advised',
            startOfAnswer: 'She',
            correctAnswer: 'advised me to see',
            explanation: 'Advise + object + to infinitive.',
            points: 2
          },
          {
            id: 'kt3',
            question: '"Let\'s go to the beach," Sarah suggested.',
            keyWord: 'going',
            startOfAnswer: 'Sarah suggested',
            correctAnswer: 'going to the beach',
            explanation: 'Suggest + -ing.',
            points: 2
          },
          {
            id: 'kt4',
            question: '"I\'m sorry I\'m late," he said.',
            keyWord: 'apologized',
            startOfAnswer: 'He',
            correctAnswer: 'apologized for being late',
            explanation: 'Apologize + for + -ing.',
            points: 2
          },
          {
            id: 'kt5',
            question: '"Don\'t forget to lock the door," Mom said to me.',
            keyWord: 'reminded',
            startOfAnswer: 'Mom',
            correctAnswer: 'reminded me to lock',
            explanation: 'Remind + object + to infinitive.',
            points: 2
          },
          {
            id: 'kt6',
            question: '"You stole my idea!" she said to him.',
            keyWord: 'accused',
            startOfAnswer: 'She',
            correctAnswer: 'accused him of stealing',
            explanation: 'Accuse + object + of + -ing.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l3-wordform-1',
        type: 'word-formation',
        title: 'Word Formation: Communication Vocabulary',
        text: `Effective communication requires more than just speaking clearly. It involves (1. ACTIVE)_____ listening to understand others' perspectives. Good communicators show (2. PATIENT)_____ and avoid making (3. ASSUME)_____ about what others mean. They seek (4. CLEAR)_____ when something is (5. CERTAIN)_____. In professional settings, (6. FORMAL)_____ is important, but so is (7. SINCERE)_____. People appreciate (8. HONEST)_____ even when the message is difficult to hear.`,
        questions: [
          { id: 'q1', gapNumber: 1, baseWord: 'ACTIVE', correctAnswer: 'active', acceptableAnswers: ['active', 'actively'], explanation: '"Active listening" - engaged and attentive. Can also use adverb "actively".', wordType: 'adjective/adverb', transformation: 'no change or + -ly', points: 1 },
          { id: 'q2', gapNumber: 2, baseWord: 'PATIENT', correctAnswer: 'patience', acceptableAnswers: ['patience'], explanation: '"Show patience" - the quality of being patient.', wordType: 'noun', transformation: 'adjective → noun (-ence)', points: 1 },
          { id: 'q3', gapNumber: 3, baseWord: 'ASSUME', correctAnswer: 'assumptions', acceptableAnswers: ['assumptions'], explanation: '"Making assumptions" - things believed without proof.', wordType: 'noun (plural)', transformation: 'verb → noun (-tion) + plural', points: 1 },
          { id: 'q4', gapNumber: 4, baseWord: 'CLEAR', correctAnswer: 'clarification', acceptableAnswers: ['clarification', 'clarity'], explanation: '"Seek clarification" - the act of making something clear.', wordType: 'noun', transformation: 'adjective → noun (-ification or -ity)', points: 1 },
          { id: 'q5', gapNumber: 5, baseWord: 'CERTAIN', correctAnswer: 'uncertain', acceptableAnswers: ['uncertain'], explanation: '"Is uncertain" - not clear or definite.', wordType: 'adjective', transformation: 'adjective → negative adjective (un-)', points: 1 },
          { id: 'q6', gapNumber: 6, baseWord: 'FORMAL', correctAnswer: 'formality', acceptableAnswers: ['formality'], explanation: '"Formality is important" - being formal.', wordType: 'noun', transformation: 'adjective → noun (-ity)', points: 1 },
          { id: 'q7', gapNumber: 7, baseWord: 'SINCERE', correctAnswer: 'sincerity', acceptableAnswers: ['sincerity'], explanation: '"Sincerity" - the quality of being genuine and honest.', wordType: 'noun', transformation: 'adjective → noun (-ity)', points: 1 },
          { id: 'q8', gapNumber: 8, baseWord: 'HONEST', correctAnswer: 'honesty', acceptableAnswers: ['honesty'], explanation: '"Honesty" - the quality of being truthful.', wordType: 'noun', transformation: 'adjective → noun (-y)', points: 1 }
        ],
        focusAreas: ['Noun formation', 'Negative prefixes', 'Communication vocabulary']
      },
      {
        id: 'b2-m2-l3-pronunciation',
        type: 'pronunciation',
        title: 'Pronunciation: Reporting Verbs',
        instructions: 'Practice pronouncing common reporting verbs with correct stress.',
        words: [
          {
            word: 'suggest',
            phonetic: '/səˈdʒest/',
            audioUrl: '/audio/suggest.mp3',
            stressPattern: 'Stress on second syllable: sug-GEST',
            commonErrors: 'Don\'t stress first syllable',
            example: 'She suggested /səˈdʒest/ going to the cinema.'
          },
          {
            word: 'recommend',
            phonetic: '/ˌrekəˈmend/',
            audioUrl: '/audio/recommend.mp3',
            stressPattern: 'Primary stress on third syllable: rec-om-MEND',
            commonErrors: 'Note secondary stress on first syllable',
            example: 'They recommended /ˌrekəˈmend/ the restaurant.'
          },
          {
            word: 'emphasize',
            phonetic: '/ˈemfəsaɪz/',
            audioUrl: '/audio/emphasize.mp3',
            stressPattern: 'Stress on first syllable: EM-pha-size',
            commonErrors: 'Middle syllable is weak /fə/',
            example: 'She emphasized /ˈemfəsaɪz/ the importance of teamwork.'
          },
          {
            word: 'apologize',
            phonetic: '/əˈpɒlədʒaɪz/',
            audioUrl: '/audio/apologize.mp3',
            stressPattern: 'Stress on second syllable: a-POL-o-gize',
            commonErrors: 'Don\'t stress first or last syllable',
            example: 'He apologized /əˈpɒlədʒaɪz/ for being late.'
          },
          {
            word: 'acknowledge',
            phonetic: '/əkˈnɒlɪdʒ/',
            audioUrl: '/audio/acknowledge.mp3',
            stressPattern: 'Stress on second syllable: ac-KNOWL-edge',
            commonErrors: 'Silent "k" in "knowl"',
            example: 'She acknowledged /əkˈnɒlɪdʒ/ the mistake.'
          }
        ],
        exercises: [
          {
            id: 'pr1',
            type: 'pronunciation-practice',
            instruction: 'Practice these reported speech sentences with correct stress',
            sentences: [
              'He suggested meeting at six o\'clock.',
              'They recommended visiting the museum.',
              'She emphasized the need for caution.',
              'I apologized for the inconvenience.',
              'He acknowledged that he was wrong.'
            ],
            points: 5
          }
        ]
      },
      {
        id: 'b2-m2-l3-integrated-1',
        type: 'reading',
        title: 'Integrated Skills: The Whistleblower',
        text: `Sarah Chen had been working at TechCorp for five years when she discovered irregularities in the company's financial reports. After several sleepless nights, she decided to report what she had found. She knew the consequences could be severe, but she felt it was the right thing to do.

First, Sarah approached her direct supervisor, Mark, and explained that she had noticed some concerning patterns in the quarterly reports. Mark told her not to worry about it and suggested that she was probably misinterpreting the data. He warned her not to discuss it with anyone else. However, Sarah couldn't ignore what she had seen. She insisted that someone needed to investigate the matter properly.

Feeling unsupported, Sarah contacted the company's ethics hotline. The compliance officer, Janet, listened carefully and asked Sarah to provide detailed documentation. Sarah admitted that she was nervous about potential retaliation but emphasized that she believed the company was at risk. Janet reassured her that the company protected whistleblowers and promised that her identity would remain confidential.

An internal investigation was launched. Several weeks later, the CEO held a company-wide meeting. He announced that irregularities had been found and thanked the person who had reported them, without naming Sarah. He explained that the board had accepted the CFO's resignation and claimed that new procedures would prevent similar issues in the future.

Mark, Sarah's supervisor, never acknowledged his mistake. However, he told her privately that he had been afraid of making waves. He apologized for not supporting her and admitted that he had known something was wrong but had chosen to look the other way. Sarah accepted his apology but suggested that they both needed to learn from the experience.

Looking back, Sarah said she would do the same thing again. She emphasized that integrity was more important than job security and encouraged others to speak up when they witnessed wrongdoing. Her story became an inspiration to many employees at TechCorp and beyond.`,
        wordCount: 340,
        readingTime: 4,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What did Mark suggest when Sarah first approached him?',
            correctAnswer: 'She was probably wrong',
            explanation: 'Mark "suggested that she was probably misinterpreting the data".',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Find and write 3 different reporting verbs used in paragraph 3.',
            correctAnswer: 'listened, asked, admitted, emphasized, reassured, promised (any 3)',
            explanation: 'Multiple reporting verbs are used to describe the conversation with Janet.',
            points: 3
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: The CEO revealed Sarah\'s name during the company meeting.',
            correctAnswer: 'False',
            explanation: 'The text says he "thanked the person...without naming Sarah".',
            points: 1
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'What did Mark admit to Sarah privately?',
            correctAnswer: 'That he had known something was wrong but had chosen to look the other way / He was afraid of making waves',
            explanation: 'Mark admitted both pieces of information.',
            points: 2
          },
          {
            id: 'q5',
            type: 'true-false',
            question: 'What did Sarah emphasize when reflecting on her experience?',
            correctAnswer: 'FalseMoney is most important',
            explanation: 'Falso. Sarah "emphasized that integrity was more important than job security".',
            points: 1
          },
          {
            id: 'q6',
            type: 'essay',
            question: 'Writing Task: Write a paragraph (100-120 words) reporting a difficult conversation or ethical dilemma you faced or witnessed. Use at least 5 different reporting verbs and correct backshifting.',
            correctAnswer: '',
            explanation: 'Evaluate based on: correct use of reporting verbs, appropriate backshifting, varied verb patterns, and coherent narrative.',
            points: 10
          }
        ],
        vocabularyHelp: [
          { word: 'irregularities', definition: 'things that are not normal or correct' },
          { word: 'retaliation', definition: 'revenge or punishment in response to an action' },
          { word: 'whistleblower', definition: 'a person who reports wrongdoing in an organization' },
          { word: 'making waves', definition: 'causing trouble or disruption' },
          { word: 'integrity', definition: 'honesty and moral principles' }
        ]
      }
    ]
  },
  // ============================================
  // MÓDULO 2 - LECCIÓN 4: Linking Words & Discourse Markers
  // ============================================
  {
    id: 'b2-m2-l4',
    title: 'Lección 4: Conectores y Marcadores del Discurso',
    description: 'Mejora la coherencia y cohesión de tu inglés con linking words avanzados',
    duration: 90,
    objectives: [
      'Usar linking words avanzados correctamente',
      'Estructurar argumentos con conectores lógicos',
      'Mejorar la fluidez en speaking y writing',
      'Distinguir entre conectores formales e informales'
    ],
    exercises: [
      {
        id: 'b2-m2-l4-vocabulary-1',
        type: 'vocabulary',
        title: 'Advanced Linking Words',
        vocabularySet: [
          {
            word: 'furthermore',
            definition: 'in addition; moreover (formal)',
            example: 'The plan is expensive. Furthermore, it would take years to implement.'
          },
          {
            word: 'nevertheless',
            definition: 'despite that; however',
            example: 'The weather was terrible. Nevertheless, we enjoyed our trip.'
          },
          {
            word: 'consequently',
            definition: 'as a result; therefore',
            example: 'He didn\'t study. Consequently, he failed the exam.'
          },
          {
            word: 'whereas',
            definition: 'while; in contrast',
            example: 'I prefer tea, whereas my brother prefers coffee.'
          },
          {
            word: 'on the other hand',
            definition: 'used to present a contrasting point',
            example: 'The job pays well. On the other hand, the hours are very long.'
          }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Choose the correct connector: The project was challenging. ___, we completed it on time.',
            correctAnswer: 'Nevertheless',
            explanation: 'Nevertheless introduce una idea contrastante.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m2-l4-writing-1',
        type: 'writing',
        prompt: 'Write an essay (180-220 words): "The advantages and disadvantages of working from home". Use at least 6 different advanced linking words (furthermore, nevertheless, consequently, whereas, on the other hand, moreover, etc.).',
        writingType: 'essay',
        minWords: 180,
        maxWords: 220,
        timeLimit: 35,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Introduction: State the topic',
          'Body paragraph 1: Advantages (with linking words)',
          'Body paragraph 2: Disadvantages (with linking words)',
          'Conclusion: Balanced view',
          'Use: furthermore, nevertheless, moreover, on the other hand, whereas, consequently'
        ]
      },
      {
        id: 'b2-m2-l4-grammar-1',
        type: 'grammar',
        title: 'Linking Words: Addition',
        grammarPoint: 'Adding information: furthermore, moreover, in addition, additionally, besides',
        explanation: 'Estos conectores añaden información o argumentos adicionales:\n- Furthermore/Moreover: Además (formal)\n- In addition/Additionally: Además\n- Besides: Además de esto\n- What\'s more: Lo que es más (informal)\n\nNota: Van al principio de oración seguidos de coma.',
        examples: [
          'The course is expensive. Furthermore, it requires a lot of time.',
          'She speaks French. Moreover, she lived in Paris for five years.',
          'In addition to the salary, they offer excellent benefits.',
          'The hotel is centrally located. Besides, it has great reviews.',
          'He\'s qualified. What\'s more, he has relevant experience.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Choose the most formal connector: The project is over budget. ___, it\\',
            correctAnswer: 'Furthermore',
            explanation: 'Furthermore es el conector más formal para añadir información.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'The apartment is spacious and well-lit. ___ ___, it has a beautiful view.',
            correctAnswer: 'In addition/What\'s more/Moreover/Furthermore',
            explanation: 'Cualquiera de estos conectores añade información positiva.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l4-grammar-2',
        type: 'grammar',
        title: 'Linking Words: Contrast',
        grammarPoint: 'Contrasting ideas: however, nevertheless, on the other hand, whereas, while',
        explanation: 'Conectores para contrastar ideas:\n- However/Nevertheless: Sin embargo (formal)\n- On the other hand: Por otro lado\n- Whereas/While: Mientras que (dentro de oración)\n- In contrast: En contraste\n- Despite/In spite of + noun/gerund',
        examples: [
          'The weather was bad. However, we enjoyed the trip.',
          'The task was difficult. Nevertheless, they completed it.',
          'I enjoy the city, whereas my partner prefers the countryside.',
          'Online shopping is convenient. On the other hand, you can\'t try before buying.',
          'Despite the rain, we went hiking.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Which connector goes INSIDE the sentence?',
            correctAnswer: 'Whereas',
            explanation: 'Whereas se usa dentro de la oración para conectar dos cláusulas.',
            points: 3
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Combine using "despite": "It was raining. We played football."',
            correctAnswer: 'Despite the rain, we played football/We played football despite the rain',
            explanation: 'Despite + noun (the rain).',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l4-grammar-3',
        type: 'grammar',
        title: 'Linking Words: Cause and Effect',
        grammarPoint: 'Expressing cause and result: consequently, therefore, as a result, due to, owing to',
        explanation: 'Conectores de causa y efecto:\n- Consequently/Therefore/Thus: Por lo tanto (formal)\n- As a result: Como resultado\n- Due to/Owing to + noun: Debido a\n- Because of + noun\n- Since/As: Como (al principio)',
        examples: [
          'Sales dropped significantly. Consequently, the company laid off staff.',
          'The evidence was compelling. Therefore, they reached a verdict.',
          'He studied hard. As a result, he passed the exam.',
          'The flight was cancelled due to bad weather.',
          'Since you\'re here, let\'s discuss the project.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: '"Due to" must be followed by:?',
            correctAnswer: 'a noun/noun phrase',
            explanation: 'Due to + noun/noun phrase (Due to the rain, Due to delays)',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Traffic was terrible. ___, I arrived late.',
            correctAnswer: 'Consequently/Therefore/As a result',
            explanation: 'Conectores que expresan resultado.',
            points: 1
          }
        ]
      },

      {
        id: 'b2-m2-l4-sentence-completion',
        type: 'sentence-completion',
        title: 'Sentence Completion: Using Connectors',
        instructions: 'Complete each sentence with an appropriate continuation using linking words.',
        sentences: [
          {
            id: 'sc1',
            incompleteSentence: 'The company\'s profits increased significantly. Furthermore,',
            sampleCompletions: [
              'they expanded into new markets',
              'employee satisfaction reached an all-time high',
              'market share grew by 15%'
            ],
            evaluationCriteria: 'Should add related positive information',
            points: 3
          },
          {
            id: 'sc2',
            incompleteSentence: 'The experiment yielded interesting results. Nevertheless,',
            sampleCompletions: [
              'more research is needed to confirm the findings',
              'several variables remain unexplained',
              'critics questioned the methodology'
            ],
            evaluationCriteria: 'Should contrast with a limitation or problem',
            points: 3
          },
          {
            id: 'sc3',
            incompleteSentence: 'The roads were icy. Consequently,',
            sampleCompletions: [
              'many accidents occurred throughout the city',
              'schools were closed for the day',
              'traffic moved at a crawl'
            ],
            evaluationCriteria: 'Should show result/consequence',
            points: 3
          },
          {
            id: 'sc4',
            incompleteSentence: 'I prefer working independently, whereas',
            sampleCompletions: [
              'my colleague thrives in team environments',
              'some people need constant collaboration',
              'others enjoy group projects'
            ],
            evaluationCriteria: 'Should provide contrasting preference',
            points: 3
          },
          {
            id: 'sc5',
            incompleteSentence: 'Despite the challenges,',
            sampleCompletions: [
              'the team completed the project on time',
              'we managed to achieve our goals',
              'morale remained high throughout'
            ],
            evaluationCriteria: 'Should show success/positive outcome',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l4-error-identification',
        type: 'error-identification',
        title: 'Error Correction: Linking Words',
        instructions: 'Identify and correct the errors in the use of linking words.',
        sentences: [
          {
            id: 'err1',
            question: 'The plan was expensive. Despite, they approved it.',
            error: 'Despite',
            correction: 'Despite this/Nevertheless',
            explanation: 'Despite necesita un noun phrase después. Usa "Despite this" o cambia a "Nevertheless".',
            points: 2
          },
          {
            id: 'err2',
            question: 'Although the weather, we went hiking.',
            error: 'Although the weather',
            correction: 'Despite the weather',
            explanation: 'Although necesita una cláusula completa (Although the weather was bad). Con noun, usa Despite.',
            points: 2
          },
          {
            id: 'err3',
            question: 'He studied hard, however he failed the exam.',
            error: 'hard, however',
            correction: 'hard. However, he/hard; however, he',
            explanation: 'However es un adverbio conjuntivo, necesita punto y coma o punto antes.',
            points: 2
          },
          {
            id: 'err4',
            sentence: 'The project was late due to the team didn\'t communicate well.',
            error: 'due to the team didn\'t',
            correction: 'because the team didn\'t/due to poor communication',
            explanation: 'Due to + noun/noun phrase. Con cláusula completa, usa "because".',
            points: 2
          },
          {
            id: 'err5',
            question: 'She is talented. Moreover that, she works very hard.',
            error: 'Moreover that',
            correction: 'Moreover,/In addition to that,',
            explanation: 'Moreover no va seguido de "that". Usa "Moreover," solo o "In addition to that,"',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l4-reading-1',
        type: 'reading',
        title: 'Reading: The Benefits of Bilingualism',
        text: `Learning a second language offers numerous cognitive benefits. Research has consistently shown that bilingual individuals perform better on tasks requiring attention and problem-solving. Furthermore, they demonstrate enhanced memory and multitasking abilities compared to monolingual peers.

The advantages extend beyond cognitive function. Bilingualism can open doors to career opportunities in an increasingly globalized world. Moreover, it allows people to connect with different cultures and perspectives. On the other hand, learning a second language requires significant time and effort, particularly for adults.

Despite these challenges, the benefits clearly outweigh the costs. Studies indicate that bilingual children show greater mental flexibility and creativity. Additionally, speaking multiple languages may help delay the onset of dementia and other age-related cognitive decline. Consequently, many education systems are introducing foreign language instruction at earlier ages.

Nevertheless, critics argue that early language education can be confusing for young children. They worry that learning two languages simultaneously might slow down language development. However, research has largely debunked this myth. In fact, bilingual children often develop stronger metalinguistic awareness—an understanding of how language works.

In conclusion, while becoming bilingual requires dedication, the cognitive, social, and professional advantages make it a worthwhile pursuit. As our world becomes more interconnected, the ability to communicate across linguistic barriers will only grow in importance.`,
        wordCount: 220,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'According to the text, what is one cognitive benefit of bilingualism?',
            correctAnswer: 'Enhanced memory',
            explanation: 'El texto menciona "enhanced memory" como uno de los beneficios cognitivos.',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Name TWO linking words from the text that add information.',
            correctAnswer: 'Furthermore, Moreover, Additionally, In fact (any two)',
            explanation: 'Estos conectores añaden información adicional.',
            points: 2
          },
          {
            id: 'q6',
            type: 'fill-blank',
            question: 'What concern do critics have about early language education?',
            correctAnswer: 'It might confuse children',
            explanation: 'Los críticos "worry that learning two languages simultaneously might slow down language development".',
            points: 1
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'Complete this sentence from the text: "___ these challenges, the benefits clearly outweigh the costs."',
            correctAnswer: 'Despite',
            explanation: 'Despite + noun phrase para contrastar.',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'According to the text, what is "metalinguistic awareness"?',
            correctAnswer: 'An understanding of how language works',
            explanation: 'El texto define metalinguistic awareness como "an understanding of how language works".',
            points: 2
          }
        ],
        vocabularyHelp: [
          { word: 'cognitive', definition: 'related to thinking and mental processes' },
          { word: 'monolingual', definition: 'speaking only one language' },
          { word: 'onset', definition: 'the beginning or start of something' },
          { word: 'dementia', definition: 'mental decline affecting memory and thinking' },
          { word: 'debunked', definition: 'proved to be false' }
        ]
      },
      {
        id: 'b2-m2-l4-paraphrasing',
        type: 'paraphrasing',
        title: 'Paraphrasing with Linking Words',
        instructions: 'Rewrite each pair of sentences as one sentence using the linking word in parentheses.',
        sentences: [
          {
            id: 'p1',
            original: 'The price was high. We decided to buy it. (nevertheless)',
            paraphrased: 'The price was high. Nevertheless, we decided to buy it.',
            alternatives: [
              'The price was high; nevertheless, we decided to buy it.'
            ],
            points: 3
          },
          {
            id: 'p2',
            original: 'She speaks fluent Spanish. She has never been to Spain. (despite)',
            paraphrased: 'Despite speaking fluent Spanish, she has never been to Spain./She speaks fluent Spanish despite never having been to Spain.',
            alternatives: [
              'Despite the fact that she speaks fluent Spanish, she has never been to Spain.'
            ],
            points: 3
          },
          {
            id: 'p3',
            original: 'The restaurant has excellent food. The service is outstanding. (furthermore)',
            paraphrased: 'The restaurant has excellent food. Furthermore, the service is outstanding.',
            alternatives: [
              'The restaurant has excellent food; furthermore, the service is outstanding.'
            ],
            points: 3
          },
          {
            id: 'p4',
            original: 'It rained heavily. The concert was cancelled. (consequently)',
            paraphrased: 'It rained heavily. Consequently, the concert was cancelled.',
            alternatives: [
              'It rained heavily; consequently, the concert was cancelled.',
              'The concert was cancelled because it rained heavily.'
            ],
            points: 3
          },
          {
            id: 'p5',
            original: 'I prefer tea. My sister prefers coffee. (whereas)',
            paraphrased: 'I prefer tea, whereas my sister prefers coffee.',
            alternatives: [
              'Whereas I prefer tea, my sister prefers coffee.'
            ],
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l4-collocation-matching',
        type: 'collocation-matching',
        title: 'Collocation Matching: Discourse Markers',
        instructions: 'Match the discourse markers with their functions.',
        pairs: [
          {
            left: 'In conclusion',
            right: 'Summarizing main points',
            explanation: 'Usado para concluir y resumir.'
          },
          {
            left: 'For instance',
            right: 'Giving an example',
            explanation: 'Introduce un ejemplo específico.'
          },
          {
            left: 'On the contrary',
            right: 'Contradicting a previous statement',
            explanation: 'Contradice completamente lo dicho antes.'
          },
          {
            left: 'To sum up',
            right: 'Summarizing briefly',
            explanation: 'Resume brevemente los puntos principales.'
          },
          {
            left: 'That is to say',
            right: 'Clarifying/rephrasing',
            explanation: 'Clarifica o reformula la idea anterior.'
          },
          {
            left: 'As a matter of fact',
            right: 'Emphasizing truth',
            explanation: 'Enfatiza que algo es verdadero.'
          },
          {
            left: 'In other words',
            right: 'Rephrasing for clarity',
            explanation: 'Reformula con palabras más simples.'
          },
          {
            left: 'At any rate',
            right: 'Anyway/in any case',
            explanation: 'Significa "de todos modos" o "en cualquier caso".'
          }
        ],
        points: 8
      },
      {
        id: 'b2-m2-l4-phrasal-verbs',
        type: 'vocabulary',
        title: 'Phrasal Verbs: Communication & Discussion',
        vocabularySet: [
          { word: 'bring up', definition: 'mention or introduce a topic', example: 'She brought up an interesting point during the meeting.' },
          { word: 'point out', definition: 'draw attention to something', example: 'He pointed out several errors in the report.' },
          { word: 'sum up', definition: 'summarize briefly', example: 'To sum up, we need to increase our marketing budget.' },
          { word: 'go over', definition: 'review or examine', example: 'Let\'s go over the main points again.' },
          { word: 'get across', definition: 'communicate successfully', example: 'It\'s difficult to get my ideas across in a foreign language.' },
          { word: 'put forward', definition: 'propose or suggest', example: 'They put forward several innovative solutions.' },
          { word: 'talk over', definition: 'discuss thoroughly', example: 'We need to talk over this issue before making a decision.' },
          { word: 'spell out', definition: 'explain in detail', example: 'Could you spell out exactly what you mean?' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'She ___ ___ an important issue that we had overlooked.',
            correctAnswer: 'brought up',
            explanation: 'Bring up = mencionar un tema.',
            points: 2
          },
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Which phrasal verb means "to explain clearly and in detail"?',
            correctAnswer: 'spell out',
            explanation: 'Spell out = explicar detalladamente.',
            points: 2
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'To ___ ___, I think we should postpone the launch.',
            correctAnswer: 'sum up',
            explanation: 'Sum up = resumir.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l4-idioms',
        type: 'vocabulary',
        title: 'Idioms: Discussion & Debate',
        vocabularySet: [
          { word: 'to get to the point', definition: 'to talk about the most important thing', example: 'Stop rambling and get to the point!' },
          { word: 'to see eye to eye', definition: 'to agree with someone', example: 'We don\'t always see eye to eye on politics.' },
          { word: 'to beat around the bush', definition: 'to avoid talking about the main issue', example: 'Don\'t beat around the bush—tell me what happened.' },
          { word: 'to make a long story short', definition: 'to summarize quickly', example: 'To make a long story short, we missed the train.' },
          { word: 'to get something off your chest', definition: 'to tell someone about something that has been worrying you', example: 'I need to get this off my chest—I\'ve been feeling anxious about the presentation.' },
          { word: 'to have a say in something', definition: 'to have the right to give your opinion', example: 'Employees should have a say in company decisions.' },
          { word: 'that\'s beside the point', definition: 'that\'s not relevant to the discussion', example: 'Whether it\'s expensive is beside the point—we need it.' },
          { word: 'to put it mildly', definition: 'to understate something (it\'s actually worse)', example: 'The presentation was disappointing, to put it mildly.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'If someone is "beating around the bush," they are:?',
            correctAnswer: 'avoiding the main issue',
            explanation: 'Beat around the bush = evitar el tema principal.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'We rarely ___ ___ ___ ___ on this topic—we always disagree.',
            correctAnswer: 'see eye to eye',
            explanation: 'See eye to eye = estar de acuerdo.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l4-gap-fill',
        type: 'gap-fill',
        title: 'Gap-fill: Climate Change Debate',
        text: `The debate surrounding climate change has intensified in recent years. Scientists overwhelmingly agree that global temperatures are rising. (1)_____, there is disagreement about the best solutions to address this crisis.

Some argue that renewable energy is the answer. (2)_____, solar and wind power have become increasingly affordable and efficient. (3)_____, they point out that transitioning away from fossil fuels would create millions of new jobs.

(4)_____, critics raise concerns about the reliability of renewable energy. They argue that solar and wind are intermittent sources. (5)_____, they question whether these technologies can meet global energy demands.

(6)_____ these objections, many countries have committed to ambitious climate targets. (7)_____, the European Union aims to achieve carbon neutrality by 2050. (8)_____, individual action alone won't solve the problem—systemic changes are essential.

In conclusion, (9)_____ the challenges are significant, the cost of inaction would be far greater. (10)_____, we must act decisively to protect our planet for future generations.`,
        gaps: [
          { id: 'gap1', correctAnswers: ['However', 'Nevertheless'], explanation: 'Contrasta con el acuerdo sobre temperaturas.' },
          { id: 'gap2', correctAnswers: ['For instance', 'For example'], explanation: 'Introduce un ejemplo.' },
          { id: 'gap3', correctAnswers: ['Furthermore', 'Moreover', 'Additionally', 'In addition'], explanation: 'Añade otro argumento.' },
          { id: 'gap4', correctAnswers: ['However', 'Nevertheless', 'On the other hand'], explanation: 'Introduce la posición contraria.' },
          { id: 'gap5', correctAnswers: ['Furthermore', 'Moreover', 'Additionally'], explanation: 'Añade otra preocupación de los críticos.' },
          { id: 'gap6', correctAnswers: ['Despite', 'Notwithstanding'], explanation: 'Despite + noun phrase.' },
          { id: 'gap7', correctAnswers: ['For instance', 'For example'], explanation: 'Introduce un ejemplo específico.' },
          { id: 'gap8', correctAnswers: ['However', 'Nevertheless', 'Nonetheless'], explanation: 'Contrasta con la acción de países.' },
          { id: 'gap9', correctAnswers: ['although', 'while', 'though'], explanation: 'Although + clause.' },
          { id: 'gap10', correctAnswers: ['Therefore', 'Consequently', 'Thus'], explanation: 'Expresa conclusión lógica.' }
        ],
        instructions: 'Fill in the gaps with appropriate linking words or discourse markers.',
        points: 10
      },
      {
        id: 'b2-m2-l4-sentence-reordering',
        type: 'sentence-reordering',
        title: 'Sentence Reordering: Building an Argument',
        instructions: 'Put the sentences in the correct order to form a coherent paragraph.',
        sentences: [
          { id: 's1', text: 'In conclusion, regular exercise is essential for maintaining both physical and mental health.', order: 8 },
          { id: 's2', text: 'Moreover, it can improve sleep quality and boost energy levels throughout the day.', order: 4 },
          { id: 's3', text: 'On the other hand, finding time to exercise can be challenging for busy professionals.', order: 5 },
          { id: 's4', text: 'Regular exercise offers numerous health benefits that extend far beyond physical fitness.', order: 1 },
          { id: 's5', text: 'For instance, studies show that exercise reduces the risk of heart disease, diabetes, and certain cancers.', order: 2 },
          { id: 's6', text: 'Nevertheless, even short periods of activity—such as a 20-minute walk—can make a significant difference.', order: 6 },
          { id: 's7', text: 'Furthermore, physical activity has been proven to reduce stress and anxiety.', order: 3 },
          { id: 's8', text: 'Therefore, incorporating some form of exercise into your daily routine should be a priority.', order: 7 }
        ],
        points: 8
      },
      {
        id: 'b2-m2-l4-listening',
        type: 'listening',
        title: 'Listening: Interview with a Debate Coach',
        audioUrl: '/audio/b2-m2-l4-debate-coach.mp3',
        duration: 150,
        transcript: `Interviewer: Today we're speaking with Sarah Mitchell, a professional debate coach. Sarah, what's the most important skill in debating?

Sarah: Well, I'd say it's the ability to structure your arguments logically. You need to present your points clearly. Furthermore, you must support each claim with evidence. However, it's not just about what you say—it's also about how you respond to opposing viewpoints.

Interviewer: How should someone respond to a counter-argument?

Sarah: First, acknowledge the other person's point. You might say "That's a valid concern" or "I understand that perspective." Nevertheless, you then need to explain why your position is stronger. For instance, you could point out flaws in their reasoning or provide contradictory evidence.

Interviewer: What about using linking words?

Sarah: They're absolutely crucial. Linking words like "furthermore," "on the other hand," and "consequently" help your audience follow your train of thought. Moreover, they make you sound more credible and persuasive. Without them, your argument can seem disjointed.

Interviewer: Any final advice?

Sarah: Practice! Watch experienced debaters and note how they structure arguments. Additionally, read well-written opinion pieces to see how professionals use linking words. Most importantly, don't be afraid to engage in respectful discussions—that's how you improve.`,
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'According to Sarah, what is the most important skill in debating?',
            correctAnswer: 'TrueStructuring arguments logically',
            explanation: 'Sarah dice: "the ability to structure your arguments logically".',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What should you do FIRST when responding to a counter-argument?',
            correctAnswer: 'Acknowledge the other person\'s point',
            explanation: 'Sarah dice: "First, acknowledge the other person\'s point".',
            points: 2
          },
          {
            id: 'q7',
            type: 'short-answer',
            question: 'Why are linking words important in debates?',
            correctAnswer: 'They help the audience follow your thoughts',
            explanation: 'Sarah menciona que ayudan a "follow your train of thought".',
            points: 2
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'Name TWO linking words Sarah mentions in the interview.',
            correctAnswer: 'furthermore, nevertheless, moreover, on the other hand, consequently (any two)',
            explanation: 'Sarah menciona varios linking words como ejemplos.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l4-vocabulary-2',
        type: 'vocabulary',
        title: 'Academic Discourse Markers',
        vocabularySet: [
          { word: 'arguably', definition: 'it can be argued that (used to present an opinion)', example: 'This is arguably the most important issue of our time.' },
          { word: 'notably', definition: 'especially; in particular', example: 'Several countries, notably Japan and Germany, have aging populations.' },
          { word: 'primarily', definition: 'mainly; chiefly', example: 'The company focuses primarily on software development.' },
          { word: 'namely', definition: 'specifically; that is to say', example: 'Only one person knew the truth, namely the CEO.' },
          { word: 'accordingly', definition: 'therefore; as a result', example: 'The deadline was missed. Accordingly, the project was delayed.' },
          { word: 'likewise', definition: 'in the same way; also', example: 'Germany increased spending. France did likewise.' },
          { word: 'conversely', definition: 'in an opposite way', example: 'Online sales increased. Conversely, retail sales declined.' },
          { word: 'nonetheless', definition: 'nevertheless; despite that', example: 'The task was difficult. Nonetheless, they succeeded.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Which word means "in an opposite way"?',
            correctAnswer: 'conversely',
            explanation: 'Conversely indica lo opuesto.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Several countries, ___ Sweden and Denmark, have excellent social welfare systems.',
            correctAnswer: 'notably',
            explanation: 'Notably = especialmente, en particular.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l4-speaking-1',
        type: 'speaking',
        prompt: 'Present a 2-3 minute argument on ONE of these topics: "Should students be allowed to use smartphones in class?" OR "Is social media doing more harm than good?" Structure your response with clear linking words (at least 6 different ones). Include: introduction, main points, counter-argument, and conclusion.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Introduction: "Today I\'d like to discuss..."',
          'Main points: "Firstly..., Secondly..., Furthermore..."',
          'Counter-argument: "Some people argue that... However..."',
          'Conclusion: "In conclusion..., Therefore..."',
          'Use variety: nevertheless, moreover, on the other hand, consequently, despite this'
        ],
        targetWords: [
          'firstly',
          'secondly',
          'furthermore',
          'however',
          'nevertheless',
          'moreover',
          'on the other hand',
          'consequently',
          'in conclusion',
          'therefore',
          'counter-argument',
          'structured'
        ],
        expectedResponse: 'A 2-3 minute structured argument on smartphones in class OR social media impact. Should include: (1) Introduction (\"Today I\'d like to discuss...\"), (2) Main points with linking words (\"Firstly..., Secondly..., Furthermore...\"), (3) Counter-argument acknowledging opposing views (\"Some people argue that... However...\"), (4) Conclusion (\"In conclusion..., Therefore...\"), (5) At least 6 different linking words (nevertheless, moreover, on the other hand, consequently, despite this). Demonstrates ability to structure formal arguments with cohesive devices.'
      },
      {
        id: 'b2-m2-l4-key-word-transformation',
        type: 'key-word-transformation',
        title: 'Key Word Transformation: Linking Words',
        instructions: 'Complete the second sentence so that it means the same as the first, using the word given. Use 2-5 words including the word given.',
        transformations: [
          {
            id: 't1',
            original: 'The weather was terrible but we enjoyed the trip.',
            keyword: 'DESPITE',
            answer: 'Despite the terrible weather',
            fullSentence: 'Despite the terrible weather, we enjoyed the trip.',
            points: 2
          },
          {
            id: 't2',
            original: 'He didn\'t study, so he failed the exam.',
            keyword: 'CONSEQUENTLY',
            answer: 'didn\'t study. Consequently, he',
            fullSentence: 'He didn\'t study. Consequently, he failed the exam.',
            points: 2
          },
          {
            id: 't3',
            original: 'The job is well-paid. It also offers great benefits.',
            keyword: 'ADDITION',
            answer: 'well-paid. In addition, it',
            fullSentence: 'The job is well-paid. In addition, it offers great benefits.',
            points: 2
          },
          {
            id: 't4',
            original: 'I like classical music but my brother prefers rock.',
            keyword: 'WHEREAS',
            answer: 'classical music, whereas my brother',
            fullSentence: 'I like classical music, whereas my brother prefers rock.',
            points: 2
          },
          {
            id: 't5',
            original: 'The evidence was convincing, so they changed their minds.',
            keyword: 'RESULT',
            answer: 'convincing. As a result, they',
            fullSentence: 'The evidence was convincing. As a result, they changed their minds.',
            points: 2
          },
          {
            id: 't6',
            original: 'She worked hard but she didn\'t get the promotion.',
            keyword: 'NEVERTHELESS',
            answer: 'worked hard. Nevertheless, she',
            fullSentence: 'She worked hard. Nevertheless, she didn\'t get the promotion.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l4-integrated-1',
        type: 'reading',
        title: 'Integrated Skills: The Rise and Fall of Empires',
        text: `Throughout history, empires have risen to great heights only to eventually collapse. Understanding why this pattern repeats can provide valuable insights into contemporary geopolitics. While each empire's story is unique, certain common factors emerge when we examine their trajectories.

Economic prosperity typically fuels imperial expansion. For instance, the Roman Empire's wealth allowed it to maintain a vast military and extensive infrastructure. Similarly, the British Empire's industrial revolution provided the economic foundation for global dominance. Furthermore, technological advantages often played a crucial role—superior weaponry, navigation, or communication systems gave empires decisive edges over competitors.

Nevertheless, success often contained the seeds of decline. As empires expanded, they faced increasing administrative challenges. Moreover, maintaining large territories required enormous resources. Consequently, many empires overextended themselves, stretching their military and economic capabilities too thin. The Mongol Empire, despite its extraordinary initial success, fragmented partly due to the impossibility of effectively governing such vast territories with medieval technology.

On the other hand, internal factors frequently proved equally destructive. Political instability, succession crises, and corruption weakened empires from within. Whereas strong centralized authority characterized imperial rises, factional conflicts and weak leadership often marked their declines. The Ottoman Empire, for example, suffered from a gradual erosion of governmental effectiveness over several centuries.

External pressures also contributed to imperial collapse. Rising powers challenged established empires, leading to costly conflicts. Additionally, subject populations sometimes rebelled against imperial rule, draining resources and undermining legitimacy. The Spanish Empire faced both issues: challenges from other European powers and independence movements in Latin America.

Despite these historical patterns, some argue that modern nation-states are fundamentally different from ancient empires. They point to international institutions, global trade networks, and democratic governance as stabilizing factors. However, others contend that similar dynamics still apply. Economic inequality, political polarization, and overextension in foreign commitments echo historical warning signs.

In conclusion, while technology and political systems have evolved, the fundamental challenges of maintaining power remain remarkably consistent. Arguably, the most important lesson from imperial history is that no dominance lasts forever. Therefore, understanding the causes of imperial decline may help contemporary powers navigate their own challenges more successfully.`,
        wordCount: 360,
        readingTime: 4,
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'According to the text, what typically enables empires to expand?',
            correctAnswer: 'TrueEconomic prosperity',
            explanation: 'El texto afirma: "Economic prosperity typically fuels imperial expansion".',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Name TWO linking words from the text that add information.',
            correctAnswer: 'Furthermore, Moreover, Similarly, Additionally, Also (any two)',
            explanation: 'Estos conectores añaden información relacionada.',
            points: 2
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: '"___ strong centralized authority characterized imperial rises, factional conflicts often marked their declines."',
            correctAnswer: 'Whereas',
            explanation: 'Whereas contrasta dos ideas opuestas.',
            points: 2
          },
          {
            id: 'q13',
            type: 'fill-blank',
            question: 'Why did the Mongol Empire fragment, according to the text?',
            correctAnswer: 'Impossibility of governing vast territories effectively',
            explanation: 'El texto menciona "the impossibility of effectively governing such vast territories".',
            points: 1
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'What two types of challenges did the Spanish Empire face?',
            correctAnswer: 'Challenges from other European powers and independence movements in Latin America',
            explanation: 'El texto menciona ambos desafíos explícitamente.',
            points: 2
          },
          {
            id: 'q6',
            type: 'essay',
            question: 'Writing Task: Do you think modern nations face similar challenges to historical empires? Write 100-120 words explaining your position. Use at least 5 different linking words from this lesson (furthermore, nevertheless, whereas, consequently, on the other hand, etc.).',
            correctAnswer: '',
            explanation: 'Evaluate based on: clear position, logical arguments, appropriate use of linking words, coherence, and grammar.',
            points: 10
          }
        ],
        vocabularyHelp: [
          { word: 'trajectories', definition: 'paths or progressions through time' },
          { word: 'overextended', definition: 'expanded beyond capacity' },
          { word: 'fragmented', definition: 'broke into separate parts' },
          { word: 'erosion', definition: 'gradual decline or wearing away' },
          { word: 'legitimacy', definition: 'right to rule; being valid or acceptable' },
          { word: 'contend', definition: 'argue or claim' }
        ]
      }
    ]
  },
  // ============================================
  // MÓDULO 2 - LECCIÓN 5: Argumentation Techniques
  // ============================================
  {
    id: 'b2-m2-l5',
    title: 'Lección 5: Técnicas de Argumentación',
    description: 'Desarrolla habilidades para presentar y defender argumentos de manera efectiva',
    duration: 90,
    objectives: [
      'Estructurar argumentos lógicos y persuasivos',
      'Presentar evidencia y ejemplos de forma efectiva',
      'Contra-argumentar y refutar opiniones opuestas',
      'Usar técnicas retóricas para persuadir'
    ],
    exercises: [
      {
        id: 'b2-m2-l5-reading-1',
        type: 'reading',
        title: 'Reading: The Case for Universal Basic Income',
        text: `Universal Basic Income (UBI) is a policy proposal that has gained significant attention. Proponents argue that UBI could solve many economic problems. Critics, however, claim it would be economically unsustainable.

Supporters point out that automation is eliminating jobs. Consequently, many workers will need alternative income sources. Furthermore, UBI could reduce poverty and inequality. On the other hand, critics warn that it might discourage work.

Nevertheless, pilot programs have shown promising results. Moreover, UBI could simplify the welfare system. Whereas current programs are complex and bureaucratic, UBI would be straightforward.

In conclusion, while challenges exist, the potential benefits of UBI warrant serious consideration.`,
        wordCount: 108,
        readingTime: 2,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What is the main argument FOR UBI?',
            correctAnswer: 'Automation is eliminating jobs',
            explanation: 'El texto menciona que la automatización está eliminando empleos.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m2-l5-speaking-1',
        type: 'speaking',
        prompt: 'Choose a controversial topic and present your argument. Structure your response: 1) State your position, 2) Give 2-3 reasons with examples, 3) Address a counter-argument, 4) Conclude. Topics: Should university education be free? Should social media be regulated? Is remote work better than office work? Speak for 3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Start: "In my opinion..." or "I strongly believe that..."',
          'Give reasons: "Firstly..., Secondly..., Furthermore..."',
          'Address counter-argument: "Some people argue that..., however..."',
          'Use evidence: "For example..., Studies show that..."',
          'Conclude: "In conclusion..., Therefore..."'
        ],
        targetWords: [
          'in my opinion',
          'I strongly believe',
          'firstly',
          'secondly',
          'furthermore',
          'counter-argument',
          'for example',
          'studies show',
          'in conclusion',
          'therefore',
          'controversial',
          'position'
        ],
        expectedResponse: 'A 3-minute structured argument on a controversial topic (free education, social media regulation, OR remote work). Should include: (1) Clear position statement (\"In my opinion...\", \"I strongly believe that...\"), (2) 2-3 reasons with examples (\"Firstly..., For example...\"), (3) Counter-argument addressed (\"Some people argue that..., however...\"), (4) Evidence (\"Studies show that...\"), (5) Strong conclusion (\"In conclusion..., Therefore...\"). Demonstrates persuasive argumentation with logical structure and supporting evidence.'
      },

      {
        id: 'b2-m2-l5-grammar-1',
        type: 'grammar',
        title: 'Structures for Argumentation',
        grammarPoint: 'Argumentation structures: It is argued that..., One could argue that..., There is evidence to suggest...',
        explanation: 'Estructuras formales para presentar argumentos:\n- It is argued that... / It can be argued that...\n- There is evidence to suggest that...\n- One could argue that... / It could be argued that...\n- Research indicates that...\n- Studies have shown that...\n\nEstas estructuras añaden formalidad y credibilidad.',
        examples: [
          'It is argued that climate change is the greatest threat facing humanity.',
          'There is evidence to suggest that bilingualism improves cognitive function.',
          'One could argue that technology has improved education.',
          'Research indicates that exercise reduces stress.',
          'Studies have shown that reading enhances vocabulary.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Which is the most formal way to present an argument?',
            correctAnswer: 'It is argued that...',
            explanation: '"It is argued that" es la estructura más formal y académica.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: '___ ___ evidence to suggest that early education improves outcomes.',
            correctAnswer: 'There is',
            explanation: 'There is evidence to suggest that... (estructura formal)',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l5-grammar-2',
        type: 'grammar',
        title: 'Conditional Forms for Argumentation',
        grammarPoint: 'If-clauses for presenting hypothetical arguments',
        explanation: 'Condicionales para argumentar:\n- Second conditional (hipotético presente): If governments invested more, poverty would decrease.\n- Third conditional (hipotético pasado): If we had acted sooner, we could have prevented this.\n- Mixed conditional: If we had invested earlier, we would be leaders now.\n\nUsamos condicionales para explorar posibilidades y consecuencias.',
        examples: [
          'If education were free, more people would attend university.',
          'If we banned plastic bags, pollution would decrease.',
          'If companies had regulated AI earlier, we wouldn\'t face these ethical issues now.',
          'If governments invested in renewables, climate change could be slowed.',
          'If we took action today, future generations would benefit.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'If governments ___ more in education, outcomes would improve.',
            correctAnswer: 'invested',
            explanation: 'Second conditional: If + past simple, would + verb',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Write a second conditional sentence arguing for renewable energy.',
            correctAnswer: 'If we invested in renewable energy, we would reduce carbon emissions (or similar)',
            explanation: 'Second conditional para argumento hipotético.',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l5-sentence-completion',
        type: 'sentence-completion',
        title: 'Sentence Completion: Building Arguments',
        instructions: 'Complete each sentence to build a logical argument.',
        sentences: [
          {
            id: 'sc1',
            incompleteSentence: 'It is widely believed that',
            sampleCompletions: [
              'education is the key to economic prosperity',
              'climate change poses an existential threat',
              'technological innovation drives social progress'
            ],
            evaluationCriteria: 'Should express a commonly held belief or argument',
            points: 3
          },
          {
            id: 'sc2',
            incompleteSentence: 'There is compelling evidence to suggest that',
            sampleCompletions: [
              'early childhood education has long-term benefits',
              'exercise improves mental health',
              'diverse teams are more innovative'
            ],
            evaluationCriteria: 'Should present an evidence-based claim',
            points: 3
          },
          {
            id: 'sc3',
            incompleteSentence: 'Critics argue that, however,',
            sampleCompletions: [
              'the costs outweigh the benefits',
              'there are significant practical challenges',
              'the evidence is inconclusive'
            ],
            evaluationCriteria: 'Should present a counter-argument',
            points: 3
          },
          {
            id: 'sc4',
            incompleteSentence: 'If society were to adopt this policy,',
            sampleCompletions: [
              'inequality would likely decrease',
              'we could see significant improvements in public health',
              'the economic benefits would be substantial'
            ],
            evaluationCriteria: 'Should use second conditional to express hypothetical outcome',
            points: 3
          },
          {
            id: 'sc5',
            incompleteSentence: 'Proponents maintain that',
            sampleCompletions: [
              'the long-term benefits justify short-term costs',
              'alternative approaches have proven ineffective',
              'this represents the most viable solution'
            ],
            evaluationCriteria: 'Should express what supporters of an argument claim',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l5-error-identification',
        type: 'error-identification',
        title: 'Error Correction: Argumentation Language',
        instructions: 'Identify and correct errors in argument structures.',
        sentences: [
          {
            id: 'err1',
            question: 'It is argue that renewable energy is essential.',
            error: 'is argue',
            correction: 'is argued',
            explanation: 'Passive voice: It is argued that...',
            points: 2
          },
          {
            id: 'err2',
            question: 'If governments will invest more, poverty would decrease.',
            error: 'will invest',
            correction: 'invested',
            explanation: 'Second conditional: If + past simple, would + verb',
            points: 2
          },
          {
            id: 'err3',
            question: 'There are evidences to suggest that exercise helps.',
            error: 'evidences',
            correction: 'evidence',
            explanation: 'Evidence es un uncountable noun en este contexto.',
            points: 2
          },
          {
            id: 'err4',
            question: 'Studies has shown that reading improves vocabulary.',
            error: 'has',
            correction: 'have',
            explanation: 'Studies (plural) have shown',
            points: 2
          },
          {
            id: 'err5',
            question: 'One could argues that technology benefits education.',
            error: 'argues',
            correction: 'argue',
            explanation: 'Modal + base form: could argue',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l5-reading-2',
        type: 'reading',
        title: 'Reading: The Four-Day Work Week Debate',
        text: `The concept of a four-day work week has gained traction in recent years, with several countries and companies experimenting with shorter working hours. Proponents argue that reducing the work week from five to four days could boost productivity, improve employee well-being, and even benefit the environment. However, critics question whether such a dramatic shift is feasible for all industries.

Supporters point to successful trials in Iceland, where 86% of the working population gained the right to reduce their hours. The results were overwhelmingly positive: workers reported less stress, better work-life balance, and improved health. Furthermore, productivity either remained stable or actually increased in most cases. It is argued that well-rested employees are more focused and efficient during their working hours.

There is also evidence to suggest environmental benefits. With fewer commuting days, carbon emissions could decrease significantly. Moreover, if companies close offices for an extra day, energy consumption would be reduced. One could argue that this policy represents a win-win situation for workers, employers, and the planet.

Nevertheless, critics raise valid concerns. They point out that not all sectors can easily accommodate reduced hours. Healthcare, hospitality, and customer service industries, for instance, require continuous coverage. Additionally, some worry that compressed work schedules might actually increase stress, as employees struggle to complete tasks in fewer days. If we had considered these challenges more carefully from the outset, implementation might have been smoother.

Financial implications also warrant consideration. While some studies suggest no loss in productivity, others indicate that certain businesses might struggle. Small companies, in particular, may lack the resources to reorganize effectively. There is evidence to suggest that transitioning to a four-day week requires careful planning and may not be suitable for every organization.

Despite these challenges, the movement continues to grow. Proponents maintain that with proper planning and flexibility, most obstacles can be overcome. If society were to embrace this shift gradually, allowing industries to adapt at their own pace, the transition could prove successful. The four-day work week debate ultimately reflects broader questions about work-life balance in the 21st century.`,
        wordCount: 340,
        readingTime: 4,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'According to the text, what happened in Iceland\\',
            correctAnswer: '86% of workers gained the right to reduce hours',
            explanation: 'El texto afirma: "86% of the working population gained the right to reduce their hours".',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Name TWO argumentation structures used in the text (e.g., "It is argued that...")',
            correctAnswer: 'It is argued that, There is evidence to suggest, One could argue that (any two)',
            explanation: 'El texto usa varias estructuras formales de argumentación.',
            points: 2
          },
          {
            id: 'q8',
            type: 'fill-blank',
            question: 'Which industries does the text suggest might struggle with a four-day week?',
            correctAnswer: 'Healthcare and hospitality',
            explanation: 'El texto menciona "Healthcare, hospitality, and customer service industries".',
            points: 1
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'Complete from the text: "If we ___ ___ these challenges more carefully from the outset, implementation might have been smoother."',
            correctAnswer: 'had considered',
            explanation: 'Third conditional: If + past perfect, might have + past participle',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'What environmental benefit is mentioned?',
            correctAnswer: 'Reduced carbon emissions / Reduced energy consumption (either acceptable)',
            explanation: 'El texto menciona reducción de emisiones y consumo de energía.',
            points: 2
          }
        ],
        vocabularyHelp: [
          { word: 'gained traction', definition: 'became increasingly popular or accepted' },
          { word: 'feasible', definition: 'possible and practical to achieve' },
          { word: 'accommodate', definition: 'provide for or adapt to' },
          { word: 'compressed', definition: 'squeezed into a smaller space or time' },
          { word: 'warrant', definition: 'justify or deserve' }
        ]
      },
      {
        id: 'b2-m2-l5-vocabulary-1',
        type: 'vocabulary',
        title: 'Argumentation Verbs',
        vocabularySet: [
          { word: 'claim', definition: 'state something is true (without proof)', example: 'Critics claim that the policy is too expensive.' },
          { word: 'contend', definition: 'argue or assert (formal)', example: 'Experts contend that early intervention is crucial.' },
          { word: 'maintain', definition: 'insist something is true', example: 'Supporters maintain that the benefits outweigh the costs.' },
          { word: 'assert', definition: 'state confidently', example: 'The report asserts that climate action is urgent.' },
          { word: 'refute', definition: 'prove an argument wrong', example: 'Research refutes the claim that vaccines are dangerous.' },
          { word: 'concede', definition: 'admit something reluctantly', example: 'Critics concede that some improvements have been made.' },
          { word: 'advocate', definition: 'publicly support or recommend', example: 'Many economists advocate for progressive taxation.' },
          { word: 'dispute', definition: 'question or deny the truth of', example: 'Some scientists dispute these findings.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Which verb means "to prove wrong"?',
            correctAnswer: 'refute',
            explanation: 'Refute = demostrar que algo es falso.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Supporters ___ that the new law will reduce inequality.',
            correctAnswer: 'claim/contend/maintain/assert',
            explanation: 'Cualquiera de estos verbos funciona para expresar una afirmación.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l5-writing-1',
        type: 'writing',
        prompt: 'Write an argumentative essay (200-220 words): "Should governments ban single-use plastics?" Present arguments for and against, then give your opinion. Use:\n- At least 3 argumentation structures (It is argued that..., There is evidence..., etc.)\n- At least 4 linking words\n- At least one conditional sentence\n- Argumentation verbs (claim, maintain, contend, etc.)',
        writingType: 'essay',
        minWords: 200,
        maxWords: 220,
        timeLimit: 35,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Introduction: State the issue and your position',
          'Paragraph 2: Arguments FOR the ban',
          'Paragraph 3: Arguments AGAINST the ban',
          'Conclusion: Summarize and restate your opinion',
          'Use formal language throughout',
          'Include specific examples where possible'
        ]
      },
      {
        id: 'b2-m2-l5-paraphrasing',
        type: 'paraphrasing',
        title: 'Paraphrasing Arguments',
        instructions: 'Paraphrase each argument using formal argumentation structures.',
        sentences: [
          {
            id: 'p1',
            original: 'Many people think that social media is harmful.',
            paraphrased: 'It is widely believed that social media has detrimental effects./Many contend that social media poses significant risks.',
            alternatives: [
              'It is argued that social media causes harm.',
              'There is a growing belief that social media is damaging.'
            ],
            points: 3
          },
          {
            id: 'p2',
            original: 'Research shows that exercise helps mental health.',
            paraphrased: 'Studies have shown that exercise improves mental well-being./There is evidence to suggest that physical activity benefits mental health.',
            alternatives: [
              'Research indicates that exercise enhances psychological wellness.',
              'Evidence demonstrates that physical activity supports mental health.'
            ],
            points: 3
          },
          {
            id: 'p3',
            original: 'Some say renewable energy costs too much.',
            paraphrased: 'Critics claim that renewable energy is prohibitively expensive./It is argued that the cost of renewable energy is unsustainable.',
            alternatives: [
              'Some contend that renewable energy requires excessive investment.',
              'Opponents maintain that renewable energy is economically unfeasible.'
            ],
            points: 3
          },
          {
            id: 'p4',
            original: 'If we don\'t act now, the problem will get worse.',
            paraphrased: 'If we fail to take action immediately, the situation will deteriorate./Unless we act now, the problem will intensify.',
            alternatives: [
              'Should we delay action, conditions will worsen.',
              'In the absence of immediate intervention, the issue will escalate.'
            ],
            points: 3
          },
          {
            id: 'p5',
            original: 'Experts believe education is the solution.',
            paraphrased: 'It is maintained by experts that education represents the solution./Specialists contend that education offers the answer.',
            alternatives: [
              'Authorities assert that education provides the solution.',
              'There is expert consensus that education is key.'
            ],
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l5-collocation-matching',
        type: 'collocation-matching',
        title: 'Collocation Matching: Argumentation Phrases',
        instructions: 'Match the sentence beginnings with appropriate endings.',
        pairs: [
          {
            left: 'It is widely',
            right: 'believed that education reduces poverty',
            explanation: 'Widely believed = ampliamente creído'
          },
          {
            left: 'There is compelling',
            right: 'evidence to support this claim',
            explanation: 'Compelling evidence = evidencia convincente'
          },
          {
            left: 'Critics raise',
            right: 'valid concerns about the cost',
            explanation: 'Raise concerns = plantear preocupaciones'
          },
          {
            left: 'Proponents put',
            right: 'forward several arguments',
            explanation: 'Put forward = presentar (argumentos)'
          },
          {
            left: 'Research has',
            right: 'shed light on this issue',
            explanation: 'Shed light on = arrojar luz sobre'
          },
          {
            left: 'One could',
            right: 'argue that both sides have merit',
            explanation: 'One could argue = se podría argumentar'
          },
          {
            left: 'The evidence',
            right: 'suggests that change is needed',
            explanation: 'Evidence suggests = la evidencia sugiere'
          },
          {
            left: 'This view',
            right: 'warrants careful consideration',
            explanation: 'Warrants consideration = merece consideración'
          }
        ],
        points: 8
      },
      {
        id: 'b2-m2-l5-phrasal-verbs',
        type: 'vocabulary',
        title: 'Phrasal Verbs: Argumentation',
        vocabularySet: [
          { word: 'back up', definition: 'support with evidence', example: 'You need to back up your claims with data.' },
          { word: 'come up with', definition: 'produce or think of (an idea)', example: 'We need to come up with a solution.' },
          { word: 'break down', definition: 'analyze in detail', example: 'Let\'s break down the argument step by step.' },
          { word: 'build on', definition: 'use as a basis for further development', example: 'This research builds on previous studies.' },
          { word: 'shoot down', definition: 'reject or criticize strongly', example: 'The committee shot down every proposal.' },
          { word: 'weigh up', definition: 'carefully consider pros and cons', example: 'We need to weigh up the advantages and disadvantages.' },
          { word: 'stand up', definition: 'remain valid when tested', example: 'The theory doesn\'t stand up to scrutiny.' },
          { word: 'fall apart', definition: 'fail or collapse (argument)', example: 'Her argument fell apart under questioning.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'You should always ___ ___ your arguments with evidence.',
            correctAnswer: 'back up',
            explanation: 'Back up = apoyar con pruebas.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Which phrasal verb means "to carefully consider advantages and disadvantages"?',
            correctAnswer: 'weigh up',
            explanation: 'Weigh up = sopesar, considerar cuidadosamente.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m2-l5-idioms',
        type: 'vocabulary',
        title: 'Idioms: Debates & Arguments',
        vocabularySet: [
          { word: 'play devil\'s advocate', definition: 'argue against something to test the strength of the argument', example: 'Let me play devil\'s advocate—what if this plan fails?' },
          { word: 'take something with a grain of salt', definition: 'not completely believe something', example: 'You should take his claims with a grain of salt.' },
          { word: 'sit on the fence', definition: 'avoid making a decision', example: 'Stop sitting on the fence and choose a side!' },
          { word: 'have a leg to stand on', definition: 'have evidence or support for your position', example: 'Without data, you don\'t have a leg to stand on.' },
          { word: 'make a case for', definition: 'argue in favor of something', example: 'She made a strong case for reform.' },
          { word: 'pick holes in', definition: 'find faults in an argument', example: 'It\'s easy to pick holes in any theory.' },
          { word: 'stand your ground', definition: 'maintain your position despite opposition', example: 'Despite criticism, she stood her ground.' },
          { word: 'win someone over', definition: 'persuade someone to support you', example: 'He eventually won the committee over with his proposal.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'If you "play devil\\',
            correctAnswer: 'Falsesupport the devil',
            explanation: 'Falso. Play devil\\\'s advocate = argumentar en contra para probar la solidez del argumento.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Without evidence, you don\'t ___ ___ ___ ___ ___ ___.',
            correctAnswer: 'have a leg to stand on',
            explanation: 'Have a leg to stand on = tener base para tu argumento.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l5-gap-fill',
        type: 'gap-fill',
        title: 'Gap-fill: The Debate Over Artificial Intelligence',
        text: `Artificial intelligence (AI) has become one of the most debated topics of our time. (1)_____ that AI will revolutionize every aspect of human life. From healthcare to transportation, AI systems are already transforming industries. (2)_____, experts (3)_____ that we must proceed with caution.

There is (4)_____ evidence to suggest that AI offers tremendous benefits. For instance, machine learning algorithms can diagnose diseases more accurately than human doctors. (5)_____, AI-powered systems could solve complex problems like climate modeling. (6)_____ these advantages, society (7)_____ reap enormous rewards.

(8)_____, critics (9)_____ valid concerns. They worry that AI could lead to mass unemployment as machines replace human workers. (10)_____ concerns about bias in AI systems—algorithms trained on flawed data may perpetuate discrimination. If we (11)_____ to address these issues, the consequences could be severe.

The ethical implications (12)_____ careful consideration. (13)_____ argue that AI should be heavily regulated. Others (14)_____ that excessive regulation might stifle innovation. This debate ultimately reflects fundamental questions about the relationship between technology and humanity.`,
        gaps: [
          { id: 'gap1', correctAnswers: ['It is argued', 'Many contend', 'Proponents claim'], explanation: 'Estructura formal de argumento.' },
          { id: 'gap2', correctAnswers: ['However', 'Nevertheless', 'Nonetheless'], explanation: 'Contraste.' },
          { id: 'gap3', correctAnswers: ['maintain', 'argue', 'contend', 'assert'], explanation: 'Verbo de argumentación.' },
          { id: 'gap4', correctAnswers: ['compelling', 'strong', 'substantial'], explanation: 'Adjetivo para "evidence".' },
          { id: 'gap5', correctAnswers: ['Furthermore', 'Moreover', 'Additionally'], explanation: 'Añade información.' },
          { id: 'gap6', correctAnswers: ['Given', 'Considering', 'With'], explanation: 'Preposición/conjunción.' },
          { id: 'gap7', correctAnswers: ['could', 'would', 'might'], explanation: 'Modal para posibilidad.' },
          { id: 'gap8', correctAnswers: ['However', 'Nevertheless', 'On the other hand'], explanation: 'Contraste.' },
          { id: 'gap9', correctAnswers: ['raise', 'voice', 'express'], explanation: 'Verbo para concerns.' },
          { id: 'gap10', correctAnswers: ['There are', 'Additionally there are', 'There are also'], explanation: 'Introduce más preocupaciones.' },
          { id: 'gap11', correctAnswers: ['fail', 'failed'], explanation: 'Fail to address.' },
          { id: 'gap12', correctAnswers: ['warrant', 'deserve', 'require'], explanation: 'Verbo formal.' },
          { id: 'gap13', correctAnswers: ['Some', 'Critics', 'Many'], explanation: 'Sujeto.' },
          { id: 'gap14', correctAnswers: ['contend', 'argue', 'maintain', 'claim'], explanation: 'Verbo de argumentación.' }
        ],
        instructions: 'Fill in the gaps with appropriate words or phrases from the lesson.',
        points: 14
      },
      {
        id: 'b2-m2-l5-sentence-reordering',
        type: 'sentence-reordering',
        title: 'Sentence Reordering: Structuring an Argument',
        instructions: 'Put the sentences in logical order to create a well-structured argument about renewable energy.',
        sentences: [
          { id: 's1', text: 'In conclusion, while challenges exist, the transition to renewable energy is both necessary and achievable.', order: 8 },
          { id: 's2', text: 'Critics, however, raise concerns about the reliability and cost of renewable technologies.', order: 5 },
          { id: 's3', text: 'It is widely argued that renewable energy represents the solution to climate change.', order: 1 },
          { id: 's4', text: 'There is compelling evidence that solar and wind power can meet global energy demands.', order: 2 },
          { id: 's5', text: 'Nevertheless, these objections can be addressed through technological innovation and careful planning.', order: 6 },
          { id: 's6', text: 'Furthermore, studies have shown that renewable energy creates more jobs than fossil fuels.', order: 3 },
          { id: 's7', text: 'If governments were to invest adequately in infrastructure, these concerns would be mitigated.', order: 7 },
          { id: 's8', text: 'Moreover, the environmental benefits of clean energy far outweigh the transition costs.', order: 4 }
        ],
        points: 8
      },
      {
        id: 'b2-m2-l5-listening',
        type: 'listening',
        title: 'Listening: Panel Discussion on Education Reform',
        audioUrl: '/audio/b2-m2-l5-education-debate.mp3',
        duration: 180,
        transcript: `Moderator: Welcome to today's panel on education reform. Dr. Stevens, let's start with you. What's your position?

Dr. Stevens: Thank you. It is my contention that traditional education models are outdated. There is compelling evidence to suggest that personalized learning yields better outcomes. Studies have shown that students learn more effectively when instruction is tailored to their individual needs. Furthermore, technology now makes this approach feasible on a large scale.

Moderator: Professor Martinez, you have concerns about this approach?

Prof. Martinez: Indeed. While I acknowledge the potential benefits, one could argue that we're moving too quickly. If we implement these changes without proper teacher training, the results could be disastrous. Moreover, there's the question of equity—not all students have equal access to technology. Critics rightly point out that this could exacerbate existing inequalities.

Dr. Stevens: Those are valid concerns. However, I would contend that maintaining the status quo is more dangerous. Research indicates that current methods are failing many students. If society were to invest in both technology and teacher training, we could address Professor Martinez's concerns while still making necessary progress.

Prof. Martinez: I don't dispute the need for change. What I'm advocating for is a more measured approach. There is evidence to suggest that hybrid models—combining traditional and innovative methods—might be more effective than wholesale replacement.

Moderator: Interesting points from both sides. Thank you.`,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'What is Dr. Stevens\\',
            correctAnswer: 'Traditional models are outdated',
            explanation: 'Dr. Stevens afirma: "traditional education models are outdated".',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Name TWO argumentation structures used in the discussion.',
            correctAnswer: 'It is my contention that, There is evidence to suggest, One could argue that, Research indicates (any two)',
            explanation: 'Los panelistas usan varias estructuras formales.',
            points: 2
          },
          {
            id: 'q9',
            type: 'fill-blank',
            question: 'What is Professor Martinez\\?',
            correctAnswer: 'Change is happening too quickly without proper preparation',
            explanation: 'Prof. Martinez dice: "one could argue that we\\\'re moving too quickly".',
            points: 1
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'What type of model does Professor Martinez advocate for?',
            correctAnswer: 'Hybrid models/A hybrid model',
            explanation: 'Prof. Martinez menciona "hybrid models" como solución.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l5-vocabulary-2',
        type: 'vocabulary',
        title: 'Hedging Language',
        vocabularySet: [
          { word: 'arguably', definition: 'it can be argued that; possibly', example: 'This is arguably the best solution available.' },
          { word: 'seemingly', definition: 'appearing to be; apparently', example: 'The plan is seemingly effective, but requires more testing.' },
          { word: 'apparently', definition: 'according to what is said; seemingly', example: 'The policy has apparently reduced costs.' },
          { word: 'presumably', definition: 'it is reasonable to suppose', example: 'Presumably, the government will take action.' },
          { word: 'potentially', definition: 'possibly; with the capacity to develop', example: 'This could potentially solve the problem.' },
          { word: 'tend to', definition: 'usually do something', example: 'Studies tend to show positive results.' },
          { word: 'appear to', definition: 'seem to be', example: 'The changes appear to be working.' },
          { word: 'suggest', definition: 'indicate indirectly', example: 'The data suggests improvement is needed.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'Hedging language is used to:',
            correctAnswer: 'TrueMake statements less absolute',
            explanation: 'Hedging hace las afirmaciones menos absolutas y más académicas.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'This is ___ the most important issue facing humanity.',
            correctAnswer: 'arguably/potentially',
            explanation: 'Hedging adverbs suavizan la afirmación.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l5-key-word-transformation',
        type: 'key-word-transformation',
        title: 'Key Word Transformation: Formal Argument Structures',
        instructions: 'Transform the sentences using the word given. Use 2-6 words.',
        transformations: [
          {
            id: 't1',
            original: 'Many people believe education is important.',
            keyword: 'ARGUED',
            answer: 'It is widely argued that',
            fullSentence: 'It is widely argued that education is important.',
            points: 2
          },
          {
            id: 't2',
            original: 'Research shows exercise helps mental health.',
            keyword: 'EVIDENCE',
            answer: 'There is evidence to suggest/that',
            fullSentence: 'There is evidence to suggest that exercise helps mental health.',
            points: 2
          },
          {
            id: 't3',
            original: 'Some say the policy costs too much.',
            keyword: 'CONTEND',
            answer: 'Some contend that the policy',
            fullSentence: 'Some contend that the policy costs too much.',
            points: 2
          },
          {
            id: 't4',
            original: 'If the government invested more, poverty would decrease.',
            keyword: 'WERE',
            answer: 'If the government were to',
            fullSentence: 'If the government were to invest more, poverty would decrease.',
            points: 2
          },
          {
            id: 't5',
            original: 'Experts say that climate action is urgent.',
            keyword: 'MAINTAIN',
            answer: 'Experts maintain that climate action',
            fullSentence: 'Experts maintain that climate action is urgent.',
            points: 2
          },
          {
            id: 't6',
            original: 'Studies show renewable energy creates jobs.',
            keyword: 'SHOWN',
            answer: 'Studies have shown that renewable',
            fullSentence: 'Studies have shown that renewable energy creates jobs.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l5-integrated-1',
        type: 'reading',
        title: 'Integrated Skills: The Ethics of Gene Editing',
        text: `The development of CRISPR gene-editing technology has sparked intense debate about the ethics of modifying human DNA. It is widely argued that this technology could revolutionize medicine, potentially eliminating hereditary diseases. However, critics contend that we are tampering with nature in ways we don't fully understand, with potentially catastrophic consequences.

Proponents maintain that gene editing offers unprecedented opportunities. There is compelling evidence to suggest that CRISPR could cure genetic disorders like sickle cell anemia and cystic fibrosis. Furthermore, it might allow us to enhance human capabilities—improving intelligence, physical strength, or resistance to disease. If society were to embrace this technology responsibly, the benefits could be transformative.

From a medical perspective, the arguments are persuasive. Studies have shown that gene editing can successfully correct genetic mutations in laboratory settings. Moreover, early clinical trials have produced promising results. One could argue that denying patients access to potentially life-saving treatments would be unethical. As Dr. Jennifer Doudna, a CRISPR pioneer, asserts: "We have a moral obligation to use this technology to alleviate suffering."

Nevertheless, significant ethical concerns warrant careful consideration. Critics raise valid objections about "designer babies"—the possibility that wealthy families might use gene editing to give their children advantages, creating genetic inequality. There is evidence to suggest that such enhancements could exacerbate social divisions. Additionally, some worry that mistakes in gene editing might create new health problems or have unforeseen consequences for future generations.

Religious and philosophical objections also feature prominently in the debate. Many argue that humans shouldn't "play God" by altering the fundamental blueprint of life. Others contend that gene editing crosses moral boundaries, fundamentally changing what it means to be human. If we had considered these implications more thoroughly before advancing the technology, perhaps we could have developed better safeguards.

The regulatory landscape remains complex and fragmented. Some countries have banned certain applications of gene editing, while others have adopted more permissive approaches. It is argued that international cooperation is essential—without global standards, rogue scientists might conduct dangerous experiments in jurisdictions with lax regulations.

Despite these challenges, the technology continues to advance rapidly. Supporters claim that with proper oversight and ethical guidelines, gene editing can be used safely and beneficially. They maintain that the potential to eliminate suffering outweighs theoretical risks. Critics, however, argue that some risks—particularly those affecting future generations—are too great to ignore.

In conclusion, the gene editing debate reflects fundamental questions about human progress, ethics, and the limits of scientific intervention. Arguably, this may be one of the most consequential decisions humanity will make. There is evidence to suggest that how we navigate this ethical terrain will profoundly shape our future. Therefore, it is imperative that we engage in thoughtful, inclusive dialogue before irreversible choices are made.`,
        wordCount: 440,
        readingTime: 5,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'According to the text, what does CRISPR potentially allow us to do?',
            correctAnswer: 'Eliminate hereditary diseases and enhance human capabilities',
            explanation: 'El texto menciona ambas posibilidades: curar enfermedades hereditarias y mejorar capacidades.',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Name THREE different argumentation structures used in the text.',
            correctAnswer: 'It is widely argued, There is evidence to suggest, One could argue, It is argued, Arguably (any three)',
            explanation: 'El texto usa numerosas estructuras formales de argumentación.',
            points: 3
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'Complete the conditional from the text: "If society ___ ___ embrace this technology responsibly, the benefits could be transformative."',
            correctAnswer: 'were to',
            explanation: 'Formal conditional: were to + infinitive',
            points: 2
          },
          {
            id: 'q14',
            type: 'fill-blank',
            question: 'What concern do critics have about "designer babies"?',
            correctAnswer: 'They could create genetic inequality',
            explanation: 'El texto menciona que "wealthy families might use gene editing... creating genetic inequality".',
            points: 1
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'According to the text, why is international cooperation important for gene editing?',
            correctAnswer: 'To prevent rogue scientists conducting dangerous experiments in places with lax regulations / To establish global standards',
            explanation: 'El texto explica la necesidad de estándares globales.',
            points: 2
          },
          {
            id: 'q6',
            type: 'essay',
            question: 'Writing Task: Do you think gene editing should be allowed for human enhancement (not just treating diseases)? Write 120-150 words presenting arguments on both sides and your opinion. Use:\n- At least 3 formal argumentation structures\n- At least 4 linking words\n- At least 2 argumentation verbs\n- At least 1 conditional sentence',
            correctAnswer: '',
            explanation: 'Evaluate based on: balanced arguments, use of required structures, clarity of position, coherence, and grammar.',
            points: 15
          }
        ],
        vocabularyHelp: [
          { word: 'hereditary', definition: 'passed from parents to children through genes' },
          { word: 'tampering', definition: 'interfering with something in a harmful way' },
          { word: 'catastrophic', definition: 'extremely harmful; disastrous' },
          { word: 'unprecedented', definition: 'never done or known before' },
          { word: 'alleviate', definition: 'make less severe; reduce' },
          { word: 'exacerbate', definition: 'make worse' },
          { word: 'imperative', definition: 'extremely important; essential' }
        ]
      }
    ]
  },
  // ============================================
  // MÓDULO 2 - LECCIÓN 6: Module 2 Mock Exam
  // ============================================
  {
    id: 'b2-m2-l6',
    title: 'Lección 6: Examen de Práctica Módulo 2',
    description: 'Examen completo que integra debate, opinión y técnicas de persuasión',
    duration: 120,
    objectives: [
      'Evaluar dominio del Módulo 2',
      'Practicar argumentación bajo presión',
      'Demostrar uso de conectores y reported speech',
      'Prepararse para la parte de opinión del B2 First'
    ],
    exercises: [
      {
        id: 'b2-m2-l6-writing-exam',
        type: 'writing',
        prompt: 'MOCK EXAM WRITING: Choose ONE topic:\n\n1) Essay: "Technology has improved our lives in many ways, but it has also created new problems. Discuss both sides and give your opinion." (180-220 words)\n\n2) Article: Write an article titled "Why Critical Thinking Should Be Taught in Schools". Present arguments and counter-arguments. (180-220 words)\n\nRequirements:\n- Use advanced linking words (furthermore, nevertheless, whereas, etc.)\n- Include modal verbs for speculation\n- Use passive voice where appropriate\n- Structure arguments logically',
        writingType: 'essay',
        minWords: 180,
        maxWords: 220,
        timeLimit: 40,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Plan your answer (5 minutes)',
          'Introduction: Present the topic',
          'Body: 2-3 paragraphs with arguments',
          'Use linking words to connect ideas',
          'Include modals: might, could, must, should',
          'Conclusion: Summarize and give opinion',
          'Check grammar and word count (5 minutes)'
        ]
      },
      {
        id: 'b2-m2-l6-speaking-exam',
        type: 'speaking',
        prompt: 'MOCK EXAM SPEAKING SECTION\n\nPart 1: Interview (2 minutes)\nPart 2: Compare and contrast two photos related to: "Ways of learning" or "Modern vs Traditional" (2 minutes)\nPart 3: Discussion (4 minutes) - Discuss: "Is social media doing more harm than good?"\n\nUse:\n- Modal verbs for speculation and opinion\n- Passive voice\n- Reported speech when referencing others\' opinions\n- Advanced linking words\n- Argumentation techniques',
        timeLimit: 480,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Part 1: Be natural and confident',
          'Part 2: Compare, contrast, speculate (might be, could be)',
          'Part 3: Present balanced arguments',
          'Use: "On one hand..., on the other hand..."',
          'Reference studies/reports using reported speech',
          'Conclude with your personal view'
        ],
        targetWords: [
          'might be',
          'could be',
          'must be',
          'on one hand',
          'on the other hand',
          'it is argued',
          'studies show',
          'experts claim',
          'compare',
          'contrast',
          'balanced arguments'
        ],
        expectedResponse: 'An 8-minute mock exam speaking section with three parts. Part 1 (2 min): Natural interview responses. Part 2 (2 min): Photo comparison using speculation (\"might be\", \"could be\", \"must be\") and comparison language (\"On one hand..., on the other hand...\"). Part 3 (4 min): Balanced discussion of social media using reported speech (\"Studies show...\", \"Experts claim...\"), argumentation techniques, and advanced linking words. Demonstrates exam-level speaking with all Module 2 grammar structures integrated.'
      },
      {
        id: 'b2-m2-l6-reading-exam',
        type: 'reading',
        title: 'MOCK EXAM READING: The Changing Nature of Work',
        text: `The Fourth Industrial Revolution is fundamentally transforming the nature of work. Automation, artificial intelligence, and digital technologies are reshaping industries at an unprecedented pace. It is widely argued that these changes present both opportunities and challenges for workers worldwide.

Proponents of technological advancement maintain that automation will create new job categories while eliminating tedious, repetitive tasks. Furthermore, they contend that increased productivity could lead to shorter working hours and improved quality of life. Studies have shown that previous industrial revolutions ultimately created more jobs than they destroyed, despite initial disruption.

Nevertheless, critics raise valid concerns about the transition period. They point out that workers in manufacturing, transportation, and administrative roles face significant displacement risks. Moreover, there is evidence to suggest that the benefits of automation have not been evenly distributed—while corporate profits have soared, wage growth for many workers has stagnated. If society fails to address these inequalities, social tensions could intensify.

The skills required for future employment are also evolving rapidly. Whereas routine technical skills once guaranteed stable employment, today's job market increasingly values creativity, critical thinking, and emotional intelligence—capabilities that are difficult to automate. Consequently, education systems must adapt to prepare students for this changing landscape.

Some experts advocate for a universal basic income as a solution to potential mass unemployment. Others argue that retraining programs and lifelong learning initiatives represent more practical approaches. One could argue that a combination of policies will be necessary to navigate this transition successfully.

Despite the uncertainties, most economists agree that adaptation is essential. Those who embrace continuous learning and develop versatile skill sets will likely thrive in the evolving economy. On the other hand, resistance to change could leave individuals and communities vulnerable to economic disruption.`,
        wordCount: 280,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'According to the text, what do proponents believe about automation?',
            correctAnswer: 'It will create new job categories',
            explanation: 'El texto afirma que los proponentes creen que la automatización "will create new job categories".',
            points: 3
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Name TWO skills that the text says are increasingly valued in today\'s job market.',
            correctAnswer: 'Creativity, critical thinking, emotional intelligence (any two)',
            explanation: 'El texto menciona estas tres capacidades como valoradas.',
            points: 2
          },
          {
            id: 'q10',
            type: 'fill-blank',
            question: 'What criticism do opponents of automation raise?',
            correctAnswer: 'Benefits have not been evenly distributed',
            explanation: 'El texto menciona que "the benefits of automation have not been evenly distributed".',
            points: 2
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: '"___ routine technical skills once guaranteed stable employment, today\'s job market increasingly values creativity."',
            correctAnswer: 'Whereas',
            explanation: 'Whereas contrasta el pasado con el presente.',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'Name TWO solutions mentioned in the text for dealing with employment challenges.',
            correctAnswer: 'Universal basic income, retraining programs, lifelong learning initiatives (any two)',
            explanation: 'El texto menciona estas opciones como posibles soluciones.',
            points: 2
          }
        ],
        vocabularyHelp: [
          { word: 'unprecedented', definition: 'never done or known before' },
          { word: 'tedious', definition: 'too long, slow, or dull; tiresome or monotonous' },
          { word: 'displacement', definition: 'the moving of something from its place or position' },
          { word: 'stagnated', definition: 'ceased to develop; became inactive' },
          { word: 'versatile', definition: 'able to adapt or be adapted to many different functions' }
        ]
      },
      {
        id: 'b2-m2-l6-grammar-exam',
        type: 'grammar',
        title: 'EXAM: Modal Verbs Review',
        grammarPoint: 'All modal uses from Module 2',
        explanation: 'Review all modal verb uses covered in Module 2:\n- Modals of deduction (must/might/could/can\'t have)\n- Modals for opinions and speculation\n- Modals in reported speech',
        examples: [
          'She must have forgotten about the meeting. (past deduction)',
          'It might rain tomorrow. (future possibility)',
          'You should study more. (advice)',
          'He said he would help us. (reported speech)',
          'This can\'t be the right address. (impossibility)'
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Choose the correct modal: The lights are on. Someone ___ be home.',
            correctAnswer: 'must',
            explanation: 'Strong deduction based on evidence.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Report: "I will call you tomorrow." → He said he ___ call me the next day.',
            correctAnswer: 'would',
            explanation: 'Will → would in reported speech.',
            points: 1
          },
          {
            id: 'q11',
            type: 'fill-blank',
            question: 'Past deduction: They\\?',
            correctAnswer: 'must have left',
            explanation: 'Must have + past participle for past deduction.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l6-passive-exam',
        type: 'grammar',
        title: 'EXAM: Passive Voice Review',
        grammarPoint: 'Passive voice in all tenses',
        explanation: 'Review passive voice structures:\n- Present: is/are + past participle\n- Past: was/were + past participle\n- Present Perfect: has/have been + past participle\n- Future: will be + past participle\n- Causative: have/get + object + past participle',
        examples: [
          'The report was published yesterday.',
          'The results have been announced.',
          'The meeting will be held next week.',
          'I had my car serviced.',
          'New technologies are being developed.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'Transform to passive: "They are building a new bridge."',
            correctAnswer: 'FalseA new bridge is building.',
            explanation: 'Falso. Present continuous passive: is/are being + past participle.',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Rewrite using "have something done": "The mechanic serviced my car."',
            correctAnswer: 'I had my car serviced',
            explanation: 'Causative structure: have + object + past participle.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l6-reported-speech-exam',
        type: 'grammar',
        title: 'EXAM: Reported Speech Review',
        grammarPoint: 'Reporting verbs and structures',
        explanation: 'Review reported speech:\n- Say/tell patterns\n- Reporting verbs (claim, suggest, recommend, deny, admit)\n- Backshifting tenses\n- Reporting questions',
        examples: [
          'She said (that) she was tired.',
          'He told me to wait.',
          'They suggested going to the cinema.',
          'She denied taking the money.',
          'He asked where I lived.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: '"I didn\\',
            correctAnswer: 'denied',
            explanation: 'Deny + -ing for negating an accusation.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: '"Why don\'t we go out?" → She ___ going out.',
            correctAnswer: 'suggested',
            explanation: 'Suggest + -ing for proposals.',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Report: "I have seen that movie." → He said he ___ ___ that movie.',
            correctAnswer: 'had seen',
            explanation: 'Present perfect → past perfect in reported speech.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l6-linking-words-exam',
        type: 'grammar',
        title: 'EXAM: Linking Words Review',
        grammarPoint: 'Advanced linking words and discourse markers',
        explanation: 'Review linking words:\n- Addition: furthermore, moreover, in addition\n- Contrast: however, nevertheless, whereas, despite\n- Cause/Effect: consequently, therefore, due to\n- Example: for instance, such as',
        examples: [
          'The plan is expensive. Furthermore, it will take years.',
          'The weather was bad. Nevertheless, we enjoyed it.',
          'Sales dropped. Consequently, staff were laid off.',
          'Despite the rain, we went hiking.',
          'I like tea, whereas she prefers coffee.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Choose: The project was difficult. ___, we completed it.',
            correctAnswer: 'Nevertheless',
            explanation: 'Nevertheless shows contrast between difficulty and completion.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'He didn\'t study. ___, he failed.',
            correctAnswer: 'Consequently/Therefore/As a result',
            explanation: 'Shows cause and effect.',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Combine using "despite": "It was raining. We played football."',
            correctAnswer: 'Despite the rain, we played football',
            explanation: 'Despite + noun phrase.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l6-argumentation-exam',
        type: 'grammar',
        title: 'EXAM: Argumentation Structures Review',
        grammarPoint: 'Formal argumentation language',
        explanation: 'Review argumentation structures:\n- It is argued that...\n- There is evidence to suggest that...\n- One could argue that...\n- Studies have shown that...\n- Proponents/Critics maintain/contend/claim that...',
        examples: [
          'It is argued that education reduces poverty.',
          'There is evidence to suggest that exercise improves health.',
          'Critics contend that the costs are too high.',
          'Studies have shown that bilingualism benefits cognition.',
          'One could argue that both approaches have merit.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'Which is most formal?',
            correctAnswer: 'TrueIt is argued that...',
            explanation: 'Passive impersonal structure is most formal.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: '___ ___ evidence to suggest that climate change is accelerating.',
            correctAnswer: 'There is',
            explanation: 'Formal structure for presenting evidence.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m2-l6-vocabulary-exam',
        type: 'vocabulary',
        title: 'EXAM: Module 2 Vocabulary Review',
        vocabularySet: [
          { word: 'contend', definition: 'argue or assert (formal)', example: 'Experts contend that action is needed.' },
          { word: 'maintain', definition: 'insist something is true', example: 'She maintains her innocence.' },
          { word: 'acknowledge', definition: 'recognize or admit', example: 'He acknowledged his mistake.' },
          { word: 'furthermore', definition: 'in addition; moreover', example: 'The plan is expensive. Furthermore, it\'s risky.' },
          { word: 'nevertheless', definition: 'despite that; however', example: 'It was difficult. Nevertheless, we succeeded.' },
          { word: 'whereas', definition: 'while; in contrast', example: 'I prefer coffee, whereas she likes tea.' },
          { word: 'consequently', definition: 'as a result', example: 'Sales fell. Consequently, staff were cut.' },
          { word: 'allegedly', definition: 'reportedly but not proven', example: 'He allegedly stole the money.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Which linking word shows CONTRAST?',
            correctAnswer: 'nevertheless',
            explanation: 'Nevertheless introduces contrasting information.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Experts ___ that the policy will fail.',
            correctAnswer: 'contend/maintain/argue/claim',
            explanation: 'Argumentation verbs.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m2-l6-error-correction-exam',
        type: 'error-identification',
        title: 'EXAM: Error Correction',
        instructions: 'Find and correct errors in these sentences (Module 2 grammar).',
        sentences: [
          {
            id: 'err1',
            question: 'She must left early because her car isn\'t here.',
            error: 'must left',
            correction: 'must have left',
            explanation: 'Past deduction: must have + past participle.',
            points: 2
          },
          {
            id: 'err2',
            question: 'The report is publish next week.',
            error: 'is publish',
            correction: 'will be published/is being published',
            explanation: 'Passive voice needed: will be/is being + past participle.',
            points: 2
          },
          {
            id: 'err3',
            question: 'He said that he will help us tomorrow.',
            error: 'will',
            correction: 'would',
            explanation: 'Reported speech: will → would.',
            points: 2
          },
          {
            id: 'err4',
            question: 'Although the rain, we went hiking.',
            error: 'Although the rain',
            correction: 'Despite the rain',
            explanation: 'Despite + noun; Although + clause.',
            points: 2
          },
          {
            id: 'err5',
            question: 'It is argue that education is important.',
            error: 'is argue',
            correction: 'is argued',
            explanation: 'Passive voice: is argued.',
            points: 2
          }
        ]
      },

      {
        id: 'b2-m2-l6-key-word-exam',
        type: 'key-word-transformation',
        title: 'EXAM: Key Word Transformation',
        instructions: 'Complete using the word given (2-5 words including the keyword).',
        transformations: [
          {
            id: 't1',
            original: 'I\'m sure she didn\'t see us.',
            keyword: 'HAVE',
            answer: 'can\'t/couldn\'t have seen',
            fullSentence: 'She can\'t have seen us.',
            points: 2
          },
          {
            id: 't2',
            original: '"I will call you," he said.',
            keyword: 'WOULD',
            answer: 'said he would call',
            fullSentence: 'He said he would call me.',
            points: 2
          },
          {
            id: 't3',
            original: 'The weather was bad but we enjoyed it.',
            keyword: 'DESPITE',
            answer: 'Despite the bad weather',
            fullSentence: 'Despite the bad weather, we enjoyed it.',
            points: 2
          },
          {
            id: 't4',
            original: 'Someone is repairing my computer.',
            keyword: 'HAVING',
            answer: 'having my computer repaired',
            fullSentence: 'I\'m having my computer repaired.',
            points: 2
          },
          {
            id: 't5',
            original: 'Many people believe education is vital.',
            keyword: 'ARGUED',
            answer: 'It is widely argued',
            fullSentence: 'It is widely argued that education is vital.',
            points: 2
          },
          {
            id: 't6',
            original: 'He didn\'t study, so he failed.',
            keyword: 'CONSEQUENTLY',
            answer: 'didn\'t study. Consequently, he',
            fullSentence: 'He didn\'t study. Consequently, he failed.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l6-paraphrasing-exam',
        type: 'paraphrasing',
        title: 'EXAM: Paraphrasing',
        instructions: 'Paraphrase using formal structures and linking words.',
        sentences: [
          {
            id: 'p1',
            original: 'The plan is expensive and will take time.',
            paraphrased: 'The plan is expensive. Furthermore, it will require considerable time./Not only is the plan expensive, but it will also take time.',
            alternatives: [
              'The plan is costly. Moreover, implementation will be time-consuming.'
            ],
            points: 3
          },
          {
            id: 'p2',
            original: 'Studies show exercise helps mental health.',
            paraphrased: 'There is evidence to suggest that exercise improves mental well-being./Research indicates that physical activity benefits mental health.',
            alternatives: [
              'Studies have shown that exercise enhances psychological wellness.'
            ],
            points: 3
          },
          {
            id: 'p3',
            original: 'She probably missed the bus.',
            paraphrased: 'She must have missed the bus./She might have missed the bus.',
            alternatives: [
              'It is likely that she missed the bus.'
            ],
            points: 3
          },
          {
            id: 'p4',
            original: '"Why don\'t you try again?" she said to me.',
            paraphrased: 'She suggested that I try again./She suggested trying again.',
            alternatives: [
              'She recommended that I make another attempt.'
            ],
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l6-listening-exam',
        type: 'listening',
        title: 'EXAM: Listening - Debate on Universal Healthcare',
        audioUrl: '/audio/b2-m2-l6-healthcare-debate.mp3',
        duration: 180,
        transcript: `Moderator: Today we're discussing universal healthcare. Dr. Chen, your opening statement?

Dr. Chen: Thank you. It is widely argued that healthcare is a fundamental human right. There is compelling evidence to suggest that universal healthcare systems achieve better health outcomes at lower costs than market-based systems. Furthermore, preventative care becomes more accessible when financial barriers are removed. Consequently, populations in countries with universal healthcare tend to be healthier overall.

Moderator: Mr. Thompson, your response?

Mr. Thompson: While I acknowledge Dr. Chen's points, one could argue that market-based systems drive innovation more effectively. Critics contend that government-run healthcare leads to longer waiting times and reduced quality of care. Moreover, the tax burden required to fund universal healthcare might have been underestimated. If we had implemented such a system, our economy could have suffered significantly.

Dr. Chen: Those concerns have largely been debunked by international comparisons. Nevertheless, I concede that transitioning to universal healthcare requires careful planning. However, the evidence overwhelmingly suggests that the benefits outweigh the challenges.

Moderator: Thank you both for a balanced discussion.`,
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'What is Dr. Chen\\',
            correctAnswer: 'TrueHealthcare is a fundamental human right',
            explanation: 'Dr. Chen afirma: "healthcare is a fundamental human right".',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Name TWO argumentation structures used in the debate.',
            correctAnswer: 'It is widely argued, There is evidence to suggest, One could argue, Critics contend (any two)',
            explanation: 'Ambos participantes usan estructuras formales.',
            points: 2
          },
          {
            id: 'q12',
            type: 'fill-blank',
            question: 'What concern does Mr. Thompson raise?',
            correctAnswer: 'Government-run healthcare may lead to longer waiting times',
            explanation: 'Mr. Thompson menciona que podría llevar a "longer waiting times".',
            points: 2
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'What does Dr. Chen say about Mr. Thompson\'s concerns?',
            correctAnswer: 'They have been debunked by international comparisons',
            explanation: 'Dr. Chen responde que las preocupaciones "have largely been debunked".',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l6-gap-fill-exam',
        type: 'gap-fill',
        title: 'EXAM: Gap-fill - The Digital Divide',
        text: `The digital divide refers to the gap between those who have access to modern technology and those who do not. (1)_____ that this gap is widening in many parts of the world. (2)_____, rural communities often lack the infrastructure necessary for high-speed internet.

There is (3)_____ evidence to suggest that digital access has become essential for economic participation. (4)_____ governments have invested in improving connectivity, progress has been uneven. (5)_____ we fail to address this issue, millions of people will be left behind.

The pandemic (6)_____ the problem even more visible. Students without internet access (7)_____ participate in online learning. (8)_____, workers without digital skills struggled to adapt to remote work. This crisis has (9)_____ that digital literacy is no longer optional—it is a fundamental requirement for modern life.

(10)_____, solving the digital divide will require coordinated efforts from governments, private companies, and communities.`,
        gaps: [
          { id: 'gap1', correctAnswers: ['It is argued', 'Many contend', 'Experts maintain'], explanation: 'Formal argument structure.' },
          { id: 'gap2', correctAnswers: ['For instance', 'For example'], explanation: 'Introducing example.' },
          { id: 'gap3', correctAnswers: ['compelling', 'strong', 'substantial'], explanation: 'Adjective for evidence.' },
          { id: 'gap4', correctAnswers: ['Although', 'While', 'Though'], explanation: 'Contrast with clause.' },
          { id: 'gap5', correctAnswers: ['If', 'Should'], explanation: 'Conditional.' },
          { id: 'gap6', correctAnswers: ['made', 'rendered'], explanation: 'Made something visible.' },
          { id: 'gap7', correctAnswers: ['couldn\'t', 'could not'], explanation: 'Past ability/inability.' },
          { id: 'gap8', correctAnswers: ['Similarly', 'Likewise', 'Furthermore'], explanation: 'Adding related information.' },
          { id: 'gap9', correctAnswers: ['shown', 'demonstrated', 'proven'], explanation: 'Past participle.' },
          { id: 'gap10', correctAnswers: ['Therefore', 'Consequently', 'Thus'], explanation: 'Conclusion/result.' }
        ],
        instructions: 'Fill gaps with appropriate words from Module 2.',
        points: 10
      },
      {
        id: 'b2-m2-l6-sentence-reordering-exam',
        type: 'sentence-reordering',
        title: 'EXAM: Sentence Reordering',
        instructions: 'Put sentences in logical order to form a coherent argument.',
        sentences: [
          { id: 's1', text: 'In conclusion, while social media presents challenges, its benefits for global communication are undeniable.', order: 8 },
          { id: 's2', text: 'It is widely argued that social media has revolutionized how people communicate globally.', order: 1 },
          { id: 's3', text: 'Furthermore, it has enabled marginalized voices to be heard and social movements to gain momentum.', order: 3 },
          { id: 's4', text: 'Nevertheless, critics raise valid concerns about privacy, misinformation, and mental health impacts.', order: 4 },
          { id: 's5', text: 'There is evidence to suggest that platforms facilitate instant connection across vast distances.', order: 2 },
          { id: 's6', text: 'If platforms were to implement stronger content moderation, many of these issues could be mitigated.', order: 6 },
          { id: 's7', text: 'These concerns cannot be dismissed and warrant serious consideration.', order: 5 },
          { id: 's8', text: 'Therefore, a balanced approach that maximizes benefits while minimizing harms is essential.', order: 7 }
        ],
        points: 8
      },
      {
        id: 'b2-m2-l6-pronunciation-exam',
        type: 'pronunciation',
        title: 'EXAM: Pronunciation Review',
        instructions: 'Practice key vocabulary from Module 2.',
        words: [
          {
            word: 'consequently',
            phonetic: '/ˈkɒnsɪkwəntli/',
            audioUrl: '/audio/pronunciation/consequently.mp3',
            stressPattern: 'CON-se-quent-ly'
          },
          {
            word: 'nevertheless',
            phonetic: '/ˌnevəðəˈles/',
            audioUrl: '/audio/pronunciation/nevertheless.mp3',
            stressPattern: 'neverthe-LESS'
          },
          {
            word: 'acknowledge',
            phonetic: '/əkˈnɒlɪdʒ/',
            audioUrl: '/audio/pronunciation/acknowledge.mp3',
            stressPattern: 'ac-KNOWL-edge'
          },
          {
            word: 'demonstrate',
            phonetic: '/ˈdemənstreɪt/',
            audioUrl: '/audio/pronunciation/demonstrate.mp3',
            stressPattern: 'DEM-on-strate'
          }
        ],
        points: 4
      },
      {
        id: 'b2-m2-l6-word-formation-exam',
        type: 'word-formation',
        title: 'EXAM: Word Formation',
        instructions: 'Complete with correct form of the word in capitals.',
        words: [
          {
            id: 'wf1',
            question: 'The ___ of the argument was impressive.',
            baseWord: 'STRONG',
            correctAnswer: 'strength',
            explanation: 'strength (noun)',
            points: 1
          },
          {
            id: 'wf2',
            question: 'There is considerable ___ about the best approach.',
            baseWord: 'DISAGREE',
            correctAnswer: 'disagreement',
            explanation: 'disagreement (noun)',
            points: 1
          },
          {
            id: 'wf3',
            question: 'The policy has proven ___ effective.',
            baseWord: 'REMARKABLE',
            correctAnswer: 'remarkably',
            explanation: 'remarkably (adverb)',
            points: 1
          },
          {
            id: 'wf4',
            question: 'International ___ is essential for solving global problems.',
            baseWord: 'COOPERATE',
            correctAnswer: 'cooperation',
            explanation: 'cooperation (noun)',
            points: 1
          },
          {
            id: 'wf5',
            question: 'The ___ benefits are well documented.',
            baseWord: 'ENVIRONMENT',
            correctAnswer: 'environmental',
            explanation: 'environmental (adjective)',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m2-l6-integrated-exam',
        type: 'reading',
        title: 'EXAM: Integrated Skills - Final Assessment',
        text: `The concept of lifelong learning has gained unprecedented importance in the 21st century. It is widely argued that the rapid pace of technological and social change requires individuals to continuously update their skills and knowledge throughout their careers and lives.

Proponents maintain that lifelong learning brings numerous benefits. There is compelling evidence to suggest that continuous education enhances employment prospects, increases earning potential, and improves overall quality of life. Furthermore, studies have shown that mentally active individuals experience slower cognitive decline as they age. Consequently, governments and organizations worldwide have begun investing heavily in adult education programs.

Nevertheless, significant barriers remain. Critics point out that access to quality learning opportunities is often limited by factors such as cost, time constraints, and geographical location. Moreover, individuals from disadvantaged backgrounds may lack the resources or confidence to pursue further education. If society were to truly embrace lifelong learning as a priority, these systemic inequalities would need to be addressed.

The digital revolution has both helped and hindered progress. On one hand, online learning platforms have democratized access to education, making world-class courses available to anyone with internet access. On the other hand, the same digital divide that affects other areas of society creates barriers for those without technological resources or digital literacy.

Despite these challenges, the evidence overwhelmingly supports the importance of lifelong learning. Whereas traditional education models focused on front-loading knowledge in youth, modern approaches recognize that learning must be continuous and adaptive. One could argue that cultivating a genuine love of learning—rather than simply acquiring specific skills—represents the most sustainable approach to navigating an uncertain future.`,
        wordCount: 270,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'According to the text, why has lifelong learning become important?',
            correctAnswer: 'Because of rapid technological and social change',
            explanation: 'El texto menciona "the rapid pace of technological and social change".',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Name THREE benefits of lifelong learning mentioned in the text.',
            correctAnswer: 'Enhanced employment prospects, increased earning potential, improved quality of life, slower cognitive decline (any three)',
            explanation: 'El texto enumera estos beneficios.',
            points: 3
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: '"___ traditional education focused on front-loading knowledge, modern approaches recognize continuous learning."',
            correctAnswer: 'Whereas',
            explanation: 'Whereas contrasta enfoques tradicionales y modernos.',
            points: 2
          },
          {
            id: 'q15',
            type: 'short-answer',
            question: 'How has the digital revolution affected lifelong learning?',
            correctAnswer: 'Both helped and hindered',
            explanation: 'El texto dice "both helped and hindered progress".',
            points: 3
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'What barriers to lifelong learning does the text mention?',
            correctAnswer: 'Cost, time constraints, geographical location, lack of resources, lack of confidence, digital divide (any three)',
            explanation: 'El texto menciona múltiples barreras.',
            points: 3
          },
          {
            id: 'q6',
            type: 'essay',
            question: 'FINAL WRITING TASK: Do you agree that lifelong learning is essential in the modern world? Write 150-180 words presenting your argument. You MUST use:\n- At least 3 modal verbs\n- At least 4 linking words\n- At least 2 formal argumentation structures\n- At least 1 conditional sentence\n- Passive voice (at least once)',
            correctAnswer: '',
            explanation: 'Evaluate comprehensively on all Module 2 criteria: argumentation, linking words, modals, passive voice, reported speech awareness, formal register.',
            points: 20
          }
        ],
        vocabularyHelp: [
          { word: 'unprecedented', definition: 'never done or known before' },
          { word: 'cognitive decline', definition: 'gradual loss of mental abilities' },
          { word: 'democratized', definition: 'made accessible to everyone' },
          { word: 'front-loading', definition: 'concentrating at the beginning' },
          { word: 'sustainable', definition: 'able to be maintained long-term' }
        ]
      },
      {
        id: 'b2-m2-l6-speaking-final',
        type: 'speaking',
        prompt: 'FINAL SPEAKING EXAM: Choose ONE topic and prepare a 3-4 minute presentation:\n\n1) "The most important skill for future success"\n2) "Should all education be free?"\n3) "The role of technology in modern society"\n\nYour presentation MUST include:\n- Clear introduction, body, and conclusion\n- At least 5 different linking words\n- At least 3 modal verbs (speculation/opinion)\n- At least 2 formal argumentation structures\n- Arguments both FOR and AGAINST\n- Your personal opinion with justification\n- Passive voice usage\n- Reference to studies/evidence (can use reported speech)',
        timeLimit: 240,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Introduction: State topic and position clearly',
          'Use: "It is widely argued that...", "There is evidence to suggest..."',
          'Present both sides: "On one hand... On the other hand..."',
          'Link ideas: furthermore, nevertheless, consequently, whereas',
          'Modals: might, could, should, must',
          'Conclusion: "In conclusion...", "Therefore..."',
          'Speak clearly and at moderate pace',
          'Use formal academic register throughout'
        ],
        targetWords: [
          'it is widely argued',
          'there is evidence',
          'on one hand',
          'on the other hand',
          'furthermore',
          'nevertheless',
          'consequently',
          'whereas',
          'might',
          'could',
          'should',
          'must',
          'in conclusion',
          'therefore'
        ],
        expectedResponse: 'A 3-4 minute formal presentation on ONE topic (future skills, free education, OR technology role). Must include ALL requirements: (1) Clear introduction, body, conclusion, (2) At least 5 linking words (furthermore, nevertheless, consequently, whereas, etc.), (3) At least 3 modal verbs (might, could, should, must), (4) At least 2 formal argumentation structures (\"It is widely argued...\", \"There is evidence...\"), (5) Arguments for AND against, (6) Personal opinion with justification, (7) Passive voice, (8) Reported speech for evidence. Demonstrates mastery of all Module 2 skills in formal academic presentation.'
      }
    ]
  }
];

// MÓDULO 3: COMUNICACIÓN PROFESIONAL Y ACADÉMICA
export const MODULE_3_LESSONS: Lesson[] = [
  {
    id: 'b2-m3-l1',
    title: 'Lección 1: Escritura Formal y Estructuras Complejas',
    description: 'Domina las estructuras de escritura formal para contextos profesionales y académicos',
    duration: 90,
    objectives: [
      'Usar estructuras formales apropiadas',
      'Aplicar el registro formal consistentemente',
      'Organizar ideas con conectores sofisticados',
      'Escribir emails y cartas formales efectivas'
    ],
    exercises: [
      {
        id: 'b2-m3-l1-writing-1',
        type: 'writing',
        prompt: 'Write a formal email (170-190 words) to a company requesting information about an internship program. Use formal language, appropriate structure, and sophisticated linking words.',
        writingType: 'email',
        minWords: 170,
        maxWords: 190,
        timeLimit: 30,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Opening: "Dear Sir/Madam," or use their name if known',
          'State purpose: "I am writing to enquire about..."',
          'Use formal vocabulary: "regarding", "furthermore", "I would be grateful if..."',
          'Closing: "I look forward to hearing from you." + "Yours sincerely/faithfully"',
          'Avoid contractions and informal language'
        ]
      },
      {
        id: 'b2-m3-l1-speaking-1',
        type: 'speaking',
        prompt: 'Give a formal presentation (2 minutes) about your field of study or work. Use formal register, clear organization, and appropriate signposting language.',
        timeLimit: 120,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Opening: "Today I\'d like to discuss...", "My presentation focuses on..."',
          'Signposting: "Firstly...", "Moving on to...", "In conclusion..."',
          'Use formal vocabulary and complete sentences',
          'Avoid filler words (like, you know, etc.)',
          'End with: "Thank you for your attention. Are there any questions?"'
        ],
        targetWords: [
          'today I\'d like to discuss',
          'my presentation focuses on',
          'firstly',
          'moving on to',
          'in conclusion',
          'formal vocabulary',
          'signposting',
          'thank you for your attention'
        ],
        expectedResponse: 'A 2-minute formal presentation about field of study/work. Should include: (1) Formal opening ("Today I\'d like to discuss..."), (2) Clear signposting ("Firstly...", "Moving on to..."), (3) Formal vocabulary and complete sentences, (4) Avoidance of filler words, (5) Professional closing ("Thank you for your attention. Are there any questions?"). Demonstrates formal register and presentation skills.'
      },

      {
        id: 'b2-m3-l1-vocabulary-1',
        type: 'vocabulary',
        title: 'Formal & Academic Vocabulary',
        vocabularySet: [
          {
            word: 'subsequently',
            definition: 'happening after something else (formal)',
            example: 'The company expanded rapidly. Subsequently, it opened offices worldwide.'
          },
          {
            word: 'commence',
            definition: 'to begin (formal)',
            example: 'The meeting will commence at 9 AM sharp.'
          },
          {
            word: 'regarding',
            definition: 'concerning; about',
            example: 'I am writing regarding your recent inquiry.'
          },
          {
            word: 'endeavor',
            definition: 'to try hard to do something',
            example: 'We shall endeavor to meet your expectations.'
          },
          {
            word: 'ascertain',
            definition: 'to find out or make sure of something',
            example: 'Please ascertain whether the documents are accurate.'
          },
          {
            word: 'requisite',
            definition: 'necessary; required',
            example: 'All requisite documentation must be submitted by Friday.'
          },
          {
            word: 'facilitate',
            definition: 'to make something easier',
            example: 'This software will facilitate communication between teams.'
          },
          {
            word: 'implement',
            definition: 'to put a plan or system into operation',
            example: 'The company plans to implement new policies next quarter.'
          }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Choose the most formal synonym for "find out": We need to ___ the cause of the problem.',
            correctAnswer: 'ascertain',
            explanation: 'Ascertain is the most formal term for finding out information.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete with a formal word: The conference will ___ at 2 PM.',
            correctAnswer: 'commence',
            explanation: 'Commence is the formal equivalent of "begin" or "start".',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l1-grammar-1',
        type: 'grammar',
        title: 'Formal Inversion Structures',
        grammarPoint: 'Inversion for emphasis in formal English: Negative adverbials',
        explanation: 'En inglés formal, especialmente escrito, invertimos sujeto y verbo auxiliar después de adverbios negativos al inicio de oración:\n\n- Never/Rarely/Seldom + auxiliary + subject + verb\n- Not only... but also (inversión en la primera parte)\n- Under no circumstances + auxiliary + subject\n- Only when/after + auxiliary + subject\n- Little did + subject + know\n- No sooner... than / Hardly... when\n\nEsto añade énfasis y formalidad.',
        examples: [
          'Never have I seen such dedication. (= I have never seen such dedication)',
          'Rarely does he make mistakes. (= He rarely makes mistakes)',
          'Not only did she win the award, but she also broke the record.',
          'Under no circumstances should you share this information.',
          'Only when we analyzed the data did we understand the problem.',
          'Little did they know what awaited them.',
          'No sooner had we arrived than the meeting started.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Rewrite with inversion: "We had never encountered such a challenge." → "Never ___ such a challenge."',
            correctAnswer: 'had we encountered',
            explanation: 'Never + auxiliary (had) + subject (we) + past participle.',
            points: 3
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Rewrite formally: "The company not only increased profits but also expanded globally."',
            correctAnswer: 'Not only did the company increase profits, but it also expanded globally',
            explanation: 'Not only + auxiliary + subject + verb para la primera parte.',
            points: 2
          },
          {
            id: 'q13',
            type: 'fill-blank',
            question: '"Rarely ___ such impressive results."',
            correctAnswer: 'do we see',
            explanation: 'Rarely + do/does/did + subject + base verb.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l1-grammar-2',
        type: 'grammar',
        title: 'Nominalization in Formal Writing',
        grammarPoint: 'Converting verbs to nouns for formal academic style',
        explanation: 'La nominalización convierte verbos en sustantivos, creando un estilo más formal y académico:\n\n- Verb → Noun:\n  * decide → decision\n  * develop → development\n  * analyze → analysis\n  * discover → discovery\n  * fail → failure\n  * succeed → success\n\nEn lugar de: "When we analyzed the data, we discovered..."\nFormal: "Analysis of the data led to the discovery of..."',
        examples: [
          'Informal: We decided to implement new policies.\nFormal: The decision to implement new policies was made.',
          'Informal: The economy grew significantly.\nFormal: Significant economic growth occurred.',
          'Informal: Scientists discovered a new species.\nFormal: The discovery of a new species was announced.',
          'Informal: They failed to meet the deadline.\nFormal: The failure to meet the deadline caused delays.',
          'Informal: Researchers investigated the phenomenon.\nFormal: Investigation of the phenomenon revealed...'
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'What is the noun form of "analyze"?',
            correctAnswer: 'analysis',
            explanation: 'Analysis is the noun form of analyze.',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Rewrite formally using nominalization: "When we developed the software, we improved efficiency."',
            correctAnswer: 'The development of the software led to improved efficiency/Development of the software resulted in efficiency improvements',
            explanation: 'Use "development" (noun) instead of "developed" (verb).',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l1-reading-1',
        type: 'reading',
        title: 'Reading: Effective Business Communication',
        text: `Effective business communication constitutes a fundamental prerequisite for organizational success. Research has consistently demonstrated that companies with superior communication practices exhibit higher employee satisfaction, increased productivity, and enhanced profitability. Nevertheless, many organizations continue to struggle with communication challenges that impede their performance.

One primary obstacle involves the failure to establish clear communication protocols. In the absence of standardized procedures, messages frequently become distorted, deadlines are missed, and conflicts arise. Organizations that implement comprehensive communication guidelines, however, tend to experience fewer misunderstandings and greater operational efficiency.

The advent of digital technology has simultaneously facilitated and complicated workplace communication. While email, messaging platforms, and video conferencing enable instantaneous global collaboration, they have also generated new challenges. The informality characteristic of digital communication sometimes undermines professionalism. Moreover, the sheer volume of messages can overwhelm employees, reducing rather than enhancing productivity.

Cultural considerations represent another critical dimension of business communication. In an increasingly globalized economy, professionals regularly interact with colleagues from diverse backgrounds. What constitutes appropriate communication in one culture may be perceived as rude or inappropriate in another. For instance, direct feedback valued in some Western cultures might be considered excessively blunt in many Asian contexts. Cultural intelligence—the ability to function effectively across cultures—has become an essential competency.

Effective listening constitutes an often-overlooked component of communication excellence. Many individuals focus primarily on articulating their own ideas while failing to genuinely comprehend others' perspectives. Active listening involves not merely hearing words but understanding underlying meanings, emotions, and intentions. This requires full attention, thoughtful questions, and the suspension of premature judgment.

Organizations that prioritize communication training consistently outperform their competitors. Such training should encompass written and verbal skills, cross-cultural awareness, active listening techniques, and appropriate use of technology. Investment in communication development yields substantial returns through reduced conflicts, accelerated decision-making, and strengthened relationships.

In conclusion, communication excellence demands ongoing attention and systematic development. Organizations must establish clear protocols, leverage technology judiciously, cultivate cultural intelligence, and develop active listening capabilities throughout their workforce.`,
        wordCount: 320,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'According to the text, companies with superior communication practices:?',
            correctAnswer: 'Exhibit higher employee satisfaction',
            explanation: 'The text states that such companies "exhibit higher employee satisfaction, increased productivity, and enhanced profitability".',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What does "cultural intelligence" mean according to the text?',
            correctAnswer: 'The ability to function effectively across cultures',
            explanation: 'Explicitly defined in the text.',
            points: 2
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'Digital technology has only benefited workplace communication.',
            options: ['True', 'False'],
            correctAnswer: 'False',
            explanation: 'The text states technology has "simultaneously facilitated and complicated" communication.',
            points: 1
          },
          {
            id: 'q16',
            type: 'true-false',
            question: 'What is identified as an often-overlooked component of communication?',
            correctAnswer: 'TrueEffective listening',
            explanation: 'The text explicitly states "Effective listening constitutes an often-overlooked component".',
            points: 2
          },
          {
            id: 'q5',
            type: 'fill-blank',
            question: '"In the absence of standardized procedures, messages frequently become _____."',
            correctAnswer: 'distorted',
            explanation: 'Direct quote from the text.',
            points: 1
          }
        ],
        vocabularyHelp: [
          { word: 'prerequisite', definition: 'something required as a prior condition' },
          { word: 'impede', definition: 'to delay or prevent by obstructing' },
          { word: 'advent', definition: 'the arrival or coming of something important' },
          { word: 'undermine', definition: 'to weaken or damage gradually' },
          { word: 'articulating', definition: 'expressing clearly in words' }
        ]
      },
      {
        id: 'b2-m3-l1-writing-2',
        type: 'writing',
        prompt: 'Write a formal letter of complaint (200-220 words) to a company about a defective product you purchased. Include: 1) Details of the purchase, 2) Description of the problem, 3) Impact it has had, 4) What action you expect. Use formal register and appropriate structures (inversion, nominalization where suitable).',
        writingType: 'email',
        minWords: 200,
        maxWords: 220,
        timeLimit: 35,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Opening: "Dear Sir/Madam," or use specific name if available',
          'First paragraph: State purpose (I am writing to express my dissatisfaction...)',
          'Body: Details of purchase, problem description, impact',
          'Final paragraph: Action required (I would appreciate... / I expect...)',
          'Formal structures: "Never have I experienced...", "The failure of the product..."',
          'Closing: "I look forward to your prompt response. Yours faithfully/sincerely"'
        ]
      },
      {
        id: 'b2-m3-l1-error-identification-1',
        type: 'error-identification',
        title: 'Identify Errors in Formal Writing',
        sentences: [
          {
            id: 'e1',
            sentence: "I'm writing to ask about the job you advertised.",
            error: "I'm (contraction)",
            correction: "I am writing to enquire about the position you advertised.",
            explanation: 'Avoid contractions in formal writing. Use "I am" instead of "I\'m" and "enquire" is more formal than "ask".',
            points: 2
          },
          {
            id: 'e2',
            question: 'We hardly had finished when the problems started.',
            error: 'we hardly had finished',
            correction: 'Hardly had we finished when the problems started.',
            explanation: 'After negative adverbials like "hardly", use inversion: Hardly + auxiliary + subject.',
            points: 2
          },
          {
            id: 'e3',
            question: 'The analyze of the data showed interesting results.',
            error: 'analyze',
            correction: 'The analysis of the data showed interesting results.',
            explanation: '"Analyze" is a verb. The noun form is "analysis".',
            points: 2
          },
          {
            id: 'e4',
            question: 'Thanks for your email. I got it yesterday.',
            error: 'Thanks for your email. I got it yesterday.',
            correction: 'Thank you for your email. I received it yesterday.',
            explanation: 'Too informal. Use "Thank you" (not "Thanks") and "received" (not "got") in formal writing.',
            points: 2
          },
          {
            id: 'e5',
            question: 'Not only the prices increased but also the quality decreased.',
            error: 'Not only the prices increased',
            correction: 'Not only did the prices increase, but the quality also decreased.',
            explanation: 'After "Not only", use inversion: Not only + auxiliary + subject + verb.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l1-sentence-completion-1',
        type: 'sentence-completion',
        title: 'Complete Sentences with Formal Structures',
        sentences: [
          {
            id: 's1',
            prompt: 'I am writing to _____ about the conference scheduled for next month.',
            correctAnswer: 'enquire/inquire',
            alternatives: ['ask for information'],
            explanation: 'Use "enquire/inquire" in formal writing instead of "ask about".',
            points: 2
          },
          {
            id: 's2',
            prompt: 'Under no circumstances _____ this information be disclosed.',
            correctAnswer: 'should',
            alternatives: ['must'],
            explanation: 'Inversion after negative adverbial: Under no circumstances + should/must + subject + base verb.',
            points: 2
          },
          {
            id: 's3',
            prompt: 'I would be _____ if you could provide further details.',
            correctAnswer: 'grateful',
            alternatives: ['appreciative', 'thankful'],
            explanation: '"I would be grateful if..." is a formal way to make polite requests.',
            points: 1
          },
          {
            id: 's4',
            prompt: 'The _____ to implement these changes was made last quarter.',
            correctAnswer: 'decision',
            alternatives: [],
            explanation: 'Nominalization: Use "decision" (noun) for formal style.',
            points: 2
          },
          {
            id: 's5',
            prompt: 'Rarely _____ such excellent service in this industry.',
            correctAnswer: 'do we encounter/have we seen',
            alternatives: ['does one find', 'have I experienced'],
            explanation: 'Inversion with "rarely": Rarely + auxiliary + subject + verb.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l1-paraphrasing-1',
        type: 'paraphrasing',
        title: 'Transform Informal to Formal Register',
        sentences: [
          {
            id: 'p1',
            original: "We've never seen this problem before.",
            correctAnswer: 'Never have we encountered this issue previously/This issue has never been encountered before',
            alternatives: ['Never before have we observed this problem', 'This problem has not been previously identified'],
            explanation: 'Use inversion (Never have we...) or passive voice for formality.',
            points: 3
          },
          {
            id: 'p2',
            original: 'Can you tell me when the meeting starts?',
            correctAnswer: 'I would be grateful if you could inform me when the meeting commences/Could you please advise when the meeting is scheduled to commence',
            alternatives: ['I would appreciate information regarding the meeting start time', 'Please inform me of the meeting commencement time'],
            explanation: 'Use "commence" instead of "starts", formal request structures.',
            points: 2
          },
          {
            id: 'p3',
            original: 'Thanks for getting back to me so quickly.',
            correctAnswer: 'Thank you for your prompt response/I appreciate your swift reply',
            alternatives: ['I am grateful for your timely response'],
            explanation: 'Use "Thank you" (not Thanks), "prompt/swift/timely" instead of "quickly".',
            points: 2
          },
          {
            id: 'p4',
            original: "Sorry, but I can't come to the meeting.",
            correctAnswer: 'I regret to inform you that I am unable to attend the meeting/Unfortunately, I cannot attend the meeting',
            alternatives: ['I apologize, but I will be unable to attend'],
            explanation: 'Use formal apology structures: "I regret to inform you", "I am unable to".',
            points: 2
          },
          {
            id: 'p5',
            original: 'We looked at the problem and found a solution.',
            correctAnswer: 'Analysis of the problem led to the identification of a solution/Investigation of the issue resulted in a solution being found',
            alternatives: ['Upon examining the problem, we identified a solution', 'Our examination of the issue revealed a solution'],
            explanation: 'Use nominalization: "analysis" instead of "looked at", passive structures.',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m3-l1-collocation-matching-1',
        type: 'collocation-matching',
        title: 'Formal Collocations',
        pairs: [
          { left: 'express', right: 'dissatisfaction', explanation: 'Common formal phrase for complaints' },
          { left: 'lodge', right: 'a complaint', explanation: 'Formal way to make a complaint' },
          { left: 'reach', right: 'a decision', explanation: 'To arrive at a decision formally' },
          { left: 'conduct', right: 'research', explanation: 'To carry out research (formal)' },
          { left: 'implement', right: 'policies', explanation: 'To put policies into effect' },
          { left: 'submit', right: 'a proposal', explanation: 'To formally present a proposal' },
          { left: 'address', right: 'concerns', explanation: 'To deal with worries or issues' },
          { left: 'ascertain', right: 'the facts', explanation: 'To determine or find out facts' }
        ],
        distractors: ['a problem', 'happiness', 'an idea', 'quickly'],
        points: 8
      },
      {
        id: 'b2-m3-l1-key-word-transformation-1',
        type: 'key-word-transformation',
        title: 'Key Word Transformations: Formal Structures',
        transformations: [
          {
            id: 't1',
            original: "I have never attended such an impressive presentation.",
            keyword: 'NEVER',
            correctAnswer: 'Never have I attended such an impressive presentation',
            alternatives: [],
            explanation: 'Inversion with never: Never + have + subject + past participle.',
            points: 2
          },
          {
            id: 't2',
            original: 'When they analyzed the situation, they understood the problem.',
            keyword: 'ANALYSIS',
            correctAnswer: 'Analysis of the situation led to understanding of the problem/The analysis of the situation enabled them to understand the problem',
            alternatives: ['Their analysis of the situation resulted in understanding the problem'],
            explanation: 'Use nominalization: "analysis" instead of "analyzed".',
            points: 3
          },
          {
            id: 't3',
            original: "We don't allow smoking anywhere in the building.",
            keyword: 'CIRCUMSTANCES',
            correctAnswer: 'Under no circumstances is smoking allowed in the building/Under no circumstances do we allow smoking in the building',
            alternatives: [],
            explanation: 'Formal negative structure with inversion.',
            points: 3
          },
          {
            id: 't4',
            original: 'She not only passed the exam but also received the highest grade.',
            keyword: 'ONLY',
            correctAnswer: 'Not only did she pass the exam, but she also received the highest grade',
            alternatives: [],
            explanation: 'Inversion after "Not only": Not only + did + subject + verb.',
            points: 2
          },
          {
            id: 't5',
            original: "I'd like you to tell me when you'll be available.",
            keyword: 'GRATEFUL',
            correctAnswer: 'I would be grateful if you could inform me when you will be available',
            alternatives: ['I would be grateful if you would advise me of your availability'],
            explanation: 'Formal request structure: "I would be grateful if..."',
            points: 2
          },
          {
            id: 't6',
            original: 'As soon as we arrived, the meeting began.',
            keyword: 'SOONER',
            correctAnswer: 'No sooner had we arrived than the meeting began',
            alternatives: [],
            explanation: 'Formal structure: No sooner + had + subject + past participle + than.',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m3-l1-word-formation-1',
        type: 'word-formation',
        title: 'Word Formation: Formal Nouns',
        words: [
          { base: 'decide', answer: 'decision', context: 'The _____ to relocate was made after careful consideration.', points: 1 },
          { base: 'develop', answer: 'development', context: 'The _____ of new technologies requires substantial investment.', points: 1 },
          { base: 'analyze', answer: 'analysis', context: 'Our _____ of the data revealed significant trends.', points: 1 },
          { base: 'fail', answer: 'failure', context: 'The _____ to meet deadlines resulted in financial losses.', points: 1 },
          { base: 'succeed', answer: 'success', context: 'The _____ of the project exceeded all expectations.', points: 1 },
          { base: 'discover', answer: 'discovery', context: 'The _____ of new evidence changed the investigation.', points: 1 },
          { base: 'implement', answer: 'implementation', context: 'The _____ of these policies will commence next month.', points: 1 },
          { base: 'communicate', answer: 'communication', context: 'Effective _____ is essential for organizational success.', points: 1 }
        ]
      },
      {
        id: 'b2-m3-l1-gap-fill-1',
        type: 'gap-fill-text',
        title: 'Gap-Fill: Formal Business Letter',
        text: `Dear Mr. Thompson,

I am writing to (1)_____ my dissatisfaction with the service I received at your hotel during my recent stay. (2)_____ the circumstances should such poor standards be acceptable.

The room I was allocated was not the one I had specifically (3)_____. Furthermore, the facilities were in a deplorable (4)_____. Never (5)_____ I encountered such inadequate housekeeping in a supposedly five-star establishment.

I attempted to (6)_____ these concerns with the front desk, however, the staff showed little inclination to (7)_____ the situation. The (8)_____ to provide satisfactory service has compelled me to seek a full refund.

I (9)_____ be grateful if you could (10)_____ this matter urgently and respond within five business days.

Yours sincerely,
Jennifer Martin`,
        answers: [
          { gap: 1, correctAnswer: 'express', alternatives: ['convey', 'communicate'], points: 1 },
          { gap: 2, correctAnswer: 'Under no', alternatives: ['In no'], points: 1 },
          { gap: 3, correctAnswer: 'requested', alternatives: ['reserved', 'booked'], points: 1 },
          { gap: 4, correctAnswer: 'condition', alternatives: ['state'], points: 1 },
          { gap: 5, correctAnswer: 'have', alternatives: [], points: 1 },
          { gap: 6, correctAnswer: 'address', alternatives: ['raise', 'discuss'], points: 1 },
          { gap: 7, correctAnswer: 'rectify', alternatives: ['resolve', 'remedy'], points: 1 },
          { gap: 8, correctAnswer: 'failure', alternatives: ['inability'], points: 1 },
          { gap: 9, correctAnswer: 'would', alternatives: ['should'], points: 1 },
          { gap: 10, correctAnswer: 'address', alternatives: ['investigate', 'resolve'], points: 1 }
        ],
        hints: [
          'Use formal vocabulary throughout',
          'Include inversion structures where appropriate',
          'Maintain consistent formal register'
        ]
      },
      {
        id: 'b2-m3-l1-sentence-reordering-1',
        type: 'sentence-reordering',
        title: 'Organize a Formal Business Proposal',
        sentences: [
          { id: 's1', text: 'I am writing to propose a strategic partnership between our organizations.', order: 1 },
          { id: 's2', text: 'This collaboration would enable both companies to expand into new markets while sharing resources and expertise.', order: 2 },
          { id: 's3', text: 'Our preliminary analysis suggests that joint operations could reduce costs by approximately 25%.', order: 3 },
          { id: 's4', text: 'Furthermore, the pooling of our technological capabilities would accelerate product development significantly.', order: 4 },
          { id: 's5', text: 'Implementation of this partnership would commence with a pilot project in the European market.', order: 5 },
          { id: 's6', text: 'Subsequently, pending successful outcomes, we would extend operations to Asia-Pacific regions.', order: 6 },
          { id: 's7', text: 'I would be grateful if we could arrange a meeting to discuss this proposal in detail.', order: 7 },
          { id: 's8', text: 'I look forward to your response and the possibility of a mutually beneficial collaboration.', order: 8 }
        ],
        points: 8
      },
      {
        id: 'b2-m3-l1-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m3-l1-listening-1.mp3',
        transcript: 'Good morning, colleagues. Today I would like to present our quarterly financial results and outline our strategic objectives for the upcoming period. The third quarter has proven exceptionally successful, with revenue increasing by 18% compared to the same period last year. This growth can be attributed primarily to our expansion into emerging markets and the successful launch of our new product line. Operating costs have remained stable, resulting in improved profit margins. Nevertheless, several challenges require our attention. Supply chain disruptions continue to impact delivery schedules, and we must address these issues urgently. Furthermore, increased competition in our core markets necessitates enhanced innovation efforts. Moving forward, our priorities include: streamlining operations, investing in research and development, and strengthening customer relationships. I would now be pleased to address any questions you may have regarding these results or our strategic direction.',
        duration: 90,
        allowReplay: true,
        maxReplays: 2,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'What was the revenue increase compared to last year?',
            correctAnswer: '18%',
            explanation: 'The speaker states "revenue increasing by 18%".',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Name TWO reasons given for the revenue growth.',
            correctAnswer: 'Expansion into emerging markets, successful launch of new product line (any two)',
            explanation: 'Both factors are explicitly mentioned.',
            points: 2
          },
          {
            id: 'q14',
            type: 'fill-blank',
            question: 'What challenge is mentioned regarding supply chain?',
            correctAnswer: 'Disruptions affecting delivery',
            explanation: 'The speaker mentions "Supply chain disruptions continue to impact delivery schedules".',
            points: 2
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: '"Increased competition necessitates enhanced _____ efforts."',
            correctAnswer: 'innovation',
            explanation: 'Direct quote from the listening.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l1-pronunciation-1',
        type: 'pronunciation',
        title: 'Pronunciation: Formal Vocabulary',
        words: [
          { word: 'ascertain', phonetic: '/ˌæsəˈteɪn/', audioUrl: '/audio/pronunciation/ascertain.mp3' },
          { word: 'subsequently', phonetic: '/ˈsʌbsɪkwəntli/', audioUrl: '/audio/pronunciation/subsequently.mp3' },
          { word: 'endeavor', phonetic: '/ɪnˈdevə(r)/', audioUrl: '/audio/pronunciation/endeavor.mp3' },
          { word: 'facilitate', phonetic: '/fəˈsɪlɪteɪt/', audioUrl: '/audio/pronunciation/facilitate.mp3' },
          { word: 'requisite', phonetic: '/ˈrekwɪzɪt/', audioUrl: '/audio/pronunciation/requisite.mp3' },
          { word: 'implementation', phonetic: '/ˌɪmplɪmenˈteɪʃn/', audioUrl: '/audio/pronunciation/implementation.mp3' }
        ],
        instructions: 'Listen to each word and repeat it clearly. Pay attention to stress patterns in multi-syllable words.',
        targetText: 'The implementation of requisite procedures will facilitate our endeavor to ascertain the facts. Subsequently, we shall proceed accordingly.'
      },
      {
        id: 'b2-m3-l1-speaking-2',
        type: 'speaking',
        prompt: 'Prepare and deliver a formal 3-minute speech on ONE topic: 1) "The importance of professional development in the modern workplace" OR 2) "Challenges facing international business today". Use formal register, inversion structures for emphasis (Never have we..., Rarely does...), and nominalization. Structure: Introduction, 3 main points, conclusion.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Opening: "Ladies and gentlemen, today I shall address..."',
          'Use formal vocabulary: "facilitate", "implement", "ascertain"',
          'Include inversion: "Never before have we faced...", "Rarely does one encounter..."',
          'Use nominalization: "The implementation of...", "Development of skills..."',
          'Signposting: "Firstly...", "Subsequently...", "In conclusion..."',
          'Closing: "Thank you for your attention. I welcome any questions."'
        ],
        targetWords: [
          'ladies and gentlemen',
          'I shall address',
          'facilitate',
          'implement',
          'ascertain',
          'never before have we',
          'rarely does one',
          'the implementation of',
          'development of',
          'firstly',
          'subsequently',
          'nominalization',
          'inversion'
        ],
        expectedResponse: 'A 3-minute formal speech on professional development OR international business challenges. Must include: (1) Formal opening ("Ladies and gentlemen..."), (2) Formal vocabulary (facilitate, implement, ascertain), (3) Inversion for emphasis ("Never before have we...", "Rarely does one..."), (4) Nominalization ("The implementation of..."), (5) 3 main points with signposting ("Firstly...", "Subsequently..."), (6) Conclusion, (7) Professional closing. Demonstrates advanced formal register with sophisticated grammatical structures.'
      },
      {
        id: 'b2-m3-l1-integrated-reading-1',
        type: 'reading',
        title: 'Integrated Reading & Writing: Corporate Social Responsibility',
        text: `Corporate Social Responsibility (CSR) has evolved from a peripheral concern to a central component of business strategy. This transformation reflects fundamental shifts in stakeholder expectations, regulatory frameworks, and market dynamics. Companies now recognize that sustainable practices constitute not merely ethical imperatives but also competitive advantages.

The concept of CSR encompasses a broad spectrum of activities. These range from environmental stewardship and ethical labor practices to community engagement and transparent governance. Progressive organizations integrate these principles throughout their operations rather than treating them as isolated initiatives. This holistic approach yields multiple benefits: enhanced brand reputation, improved employee morale, risk mitigation, and increased customer loyalty.

Research demonstrates compelling correlations between CSR commitment and financial performance. A comprehensive meta-analysis of 250 studies revealed that companies with robust CSR programs consistently outperform industry benchmarks. However, authenticity remains crucial. Consumers have grown increasingly sophisticated at detecting "greenwashing"—superficial CSR efforts designed primarily for public relations rather than genuine impact.

Implementation challenges persist despite growing CSR awareness. Small and medium enterprises often lack resources to establish comprehensive programs. Moreover, measuring CSR impact presents methodological difficulties. Unlike financial metrics, social and environmental outcomes resist straightforward quantification. Organizations struggle to develop meaningful key performance indicators that capture their multifaceted contributions to society.

The regulatory landscape continues evolving. Numerous jurisdictions have introduced mandatory CSR reporting requirements, compelling companies to disclose their social and environmental impacts. The European Union's Corporate Sustainability Reporting Directive represents a particularly significant development, requiring detailed sustainability disclosures from thousands of companies. This regulatory trend toward transparency seems irreversible.

Technology offers promising solutions to CSR challenges. Blockchain enables supply chain transparency, allowing companies to verify ethical sourcing claims. Artificial intelligence facilitates environmental monitoring and resource optimization. Data analytics permits more sophisticated impact measurement. These technological tools help organizations translate CSR commitments into demonstrable outcomes.

Looking forward, CSR will likely become even more integral to business models. Climate change pressures, social inequality concerns, and stakeholder activism show no signs of diminishing. Companies that embrace CSR as fundamental to their identity, rather than as peripheral obligation, will be best positioned for long-term success. The question is no longer whether businesses should engage in CSR, but rather how effectively they can integrate these principles into every aspect of their operations.`,
        wordCount: 380,
        readingTime: 4,
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'According to the text, CSR has transformed from:',
            correctAnswer: 'TrueA peripheral concern to a central business strategy component',
            explanation: 'Directly stated in the first sentence.',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What does "greenwashing" mean according to the text?',
            correctAnswer: 'Superficial CSR efforts designed primarily for public relations rather than genuine impact',
            explanation: 'Explicitly defined in paragraph 3.',
            points: 2
          },
          {
            id: 'q15',
            type: 'fill-blank',
            question: 'What challenge does the text mention regarding CSR measurement?',
            correctAnswer: 'Social and environmental outcomes resist straightforward quantification',
            explanation: 'Stated in paragraph 4.',
            points: 2
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: '"_____ enables supply chain transparency, allowing companies to verify ethical sourcing claims."',
            correctAnswer: 'Blockchain',
            explanation: 'Mentioned in paragraph 6.',
            points: 1
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'Name TWO benefits of integrating CSR throughout operations mentioned in the text.',
            correctAnswer: 'Enhanced brand reputation, improved employee morale, risk mitigation, increased customer loyalty (any two)',
            explanation: 'Listed in paragraph 2.',
            points: 2
          },
          {
            id: 'q6',
            type: 'essay',
            question: 'Write a formal essay (150-180 words): "Should CSR reporting be mandatory for all companies?" Use formal structures from this lesson including inversion, nominalization, and formal vocabulary. Include arguments for and against, then state your position.',
            correctAnswer: '',
            explanation: 'Assessment based on: use of formal structures (inversion, nominalization), formal vocabulary, coherent argumentation, appropriate register, grammar accuracy.',
            points: 10
          }
        ],
        vocabularyHelp: [
          { word: 'peripheral', definition: 'relating to or situated on the edge; marginal' },
          { word: 'imperative', definition: 'of vital importance; crucial' },
          { word: 'stewardship', definition: 'the job of supervising or taking care of something' },
          { word: 'holistic', definition: 'characterized by the treatment of the whole rather than parts' },
          { word: 'compelling', definition: 'evoking interest or attention; convincing' },
          { word: 'irreversible', definition: 'not able to be undone or altered' }
        ]
      }
    ]
  },
  {
    id: 'b2-m3-l2',
    title: 'Lección 2: Phrasal Verbs y Expresiones Idiomáticas',
    description: 'Amplía tu vocabulario con phrasal verbs comunes y expresiones idiomáticas',
    duration: 90,
    objectives: [
      'Dominar phrasal verbs esenciales del nivel B2',
      'Comprender expresiones idiomáticas en contexto',
      'Distinguir entre phrasal verbs separables e inseparables',
      'Usar expresiones coloquiales apropiadamente'
    ],
    exercises: [
      {
        id: 'b2-m3-l2-vocabulary-1',
        type: 'vocabulary',
        title: 'Phrasal Verbs Esenciales B2',
        vocabularySet: [
          {
            word: 'put up with',
            definition: 'tolerate something unpleasant',
            example: 'I can\'t put up with this noise anymore!'
          },
          {
            word: 'come across',
            definition: 'find by chance',
            example: 'I came across an interesting article yesterday.'
          },
          {
            word: 'get over',
            definition: 'recover from something',
            example: 'It took him months to get over the breakup.'
          },
          {
            word: 'look forward to',
            definition: 'anticipate with pleasure',
            example: 'I\'m looking forward to seeing you next week.'
          },
          {
            word: 'turn down',
            definition: 'refuse or reject',
            example: 'She turned down the job offer.'
          }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Choose the correct phrasal verb: I ___ my old school photos while cleaning the attic.',
            correctAnswer: 'came across',
            explanation: '"Come across" significa encontrar algo por casualidad.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l2-speaking-1',
        type: 'speaking',
        prompt: 'Describe a challenging situation you faced and how you dealt with it. Use at least 5 phrasal verbs from this lesson. Speak for 2 minutes.',
        timeLimit: 120,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Use: "I had to put up with...", "I came across a solution..."',
          'Include: "get over", "deal with", "work out"',
          'Natural integration: don\'t force phrasal verbs',
          'Tell a coherent story',
          'Explain the outcome'
        ],
        targetWords: [
          'put up with',
          'came across',
          'get over',
          'deal with',
          'work out',
          'challenging situation',
          'faced',
          'phrasal verbs',
          'coherent story',
          'outcome'
        ],
        expectedResponse: 'A 2-minute narrative about a challenging situation using at least 5 phrasal verbs. Should include: (1) Description of the challenge, (2) Natural use of phrasal verbs ("put up with", "came across", "get over", "deal with", "work out"), (3) Coherent story structure (beginning, middle, end), (4) Explanation of how you dealt with it, (5) Clear outcome/resolution. Demonstrates ability to use phrasal verbs naturally in narrative context.'
      },
      {
        id: 'b2-m3-l2-vocabulary-2',
        type: 'vocabulary',
        title: 'Work & Business Phrasal Verbs',
        vocabularySet: [
          {
            word: 'carry out',
            definition: 'to perform or complete a task',
            example: 'We need to carry out a thorough investigation.'
          },
          {
            word: 'take on',
            definition: 'to accept responsibility or work',
            example: 'She decided to take on the new project.'
          },
          {
            word: 'set up',
            definition: 'to establish or start something',
            example: 'They set up a new business last year.'
          },
          {
            word: 'figure out',
            definition: 'to understand or solve',
            example: 'I finally figured out how to use the software.'
          },
          {
            word: 'call off',
            definition: 'to cancel',
            example: 'They had to call off the meeting due to bad weather.'
          },
          {
            word: 'step down',
            definition: 'to resign from a position',
            example: 'The CEO stepped down after 20 years.'
          },
          {
            word: 'go ahead',
            definition: 'to proceed; to start',
            example: 'The board gave us permission to go ahead with the plan.'
          },
          {
            word: 'bring up',
            definition: 'to mention or introduce a topic',
            example: 'She brought up an important issue at the meeting.'
          }
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'The manager decided to ___ the project due to budget constraints.',
            correctAnswer: 'call off',
            explanation: '"Call off" means to cancel.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'We need to ___ ___ a comprehensive market analysis.',
            correctAnswer: 'carry out',
            explanation: '"Carry out" means to perform or complete a task.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l2-vocabulary-3',
        type: 'idioms-expressions',
        title: 'Common English Idioms',
        expressions: [
          {
            idiom: 'break the ice',
            meaning: 'to initiate conversation in a social setting',
            example: 'He told a joke to break the ice at the meeting.',
            category: 'social'
          },
          {
            idiom: 'hit the nail on the head',
            meaning: 'to be exactly right about something',
            example: 'Your analysis hit the nail on the head—that\'s exactly the problem.',
            category: 'accuracy'
          },
          {
            idiom: 'once in a blue moon',
            meaning: 'very rarely',
            example: 'I only eat fast food once in a blue moon.',
            category: 'frequency'
          },
          {
            idiom: 'get cold feet',
            meaning: 'to become nervous about something you planned to do',
            example: 'She got cold feet and canceled the presentation.',
            category: 'emotion'
          },
          {
            idiom: 'cost an arm and a leg',
            meaning: 'to be very expensive',
            example: 'That car must have cost an arm and a leg!',
            category: 'money'
          },
          {
            idiom: 'the ball is in your court',
            meaning: 'it\'s your turn to take action',
            example: 'I\'ve made my proposal. The ball is in your court now.',
            category: 'responsibility'
          },
          {
            idiom: 'let the cat out of the bag',
            meaning: 'to reveal a secret',
            example: 'Don\'t let the cat out of the bag about the surprise party.',
            category: 'secrecy'
          },
          {
            idiom: 'under the weather',
            meaning: 'feeling ill',
            example: 'I\'m feeling a bit under the weather today.',
            category: 'health'
          }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What does "hit the nail on the head" mean?',
            correctAnswer: 'To be exactly right',
            explanation: 'This idiom means to be precisely correct.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete the idiom: "That new phone costs an ___ and a ___."',
            correctAnswer: 'arm, leg',
            explanation: '"Cost an arm and a leg" means very expensive.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l2-grammar-1',
        type: 'grammar',
        title: 'Separable vs Inseparable Phrasal Verbs',
        grammarPoint: 'Understanding which phrasal verbs can be separated and which cannot',
        explanation: 'SEPARABLE phrasal verbs: El objeto puede ir entre el verbo y la partícula O después:\n- Turn off the TV / Turn the TV off ✓\n- Con pronombres, DEBE ir en medio: Turn it off ✓ (NOT: Turn off it ✗)\n\nINSEPARABLE phrasal verbs: El objeto siempre va después:\n- Look after the children ✓ (NOT: Look the children after ✗)\n- Look after them ✓ (NOT: Look them after ✗)\n\nCommon SEPARABLE: turn on/off, pick up, put on, take off, give up, fill in, work out\nCommon INSEPARABLE: look after, look for, come across, get over, run into, deal with, look forward to',
        examples: [
          'SEPARABLE: Please turn off the lights. / Please turn the lights off. / Turn them off.',
          'SEPARABLE: She gave up smoking. / She gave smoking up. / She gave it up.',
          'INSEPARABLE: I look after my sister. / I look after her. (NOT: I look her after)',
          'INSEPARABLE: We came across an old friend. / We came across him. (NOT: We came him across)',
          'THREE-WORD phrasal verbs are ALWAYS inseparable: I look forward to seeing you.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Which is correct?',
            correctAnswer: 'Look after the children',
            explanation: '"Look after" is inseparable—object goes after the complete phrasal verb.',
            points: 3
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Replace with pronoun: "Please turn off the TV."?',
            correctAnswer: 'Turn it off',
            explanation: 'Separable phrasal verbs + pronoun = pronoun goes in the middle.',
            points: 2
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Is "put up with" separable or inseparable?',
            correctAnswer: 'inseparable',
            explanation: 'Three-word phrasal verbs are always inseparable.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l2-reading-1',
        type: 'reading',
        title: 'Reading: Breaking Into the Job Market',
        text: `When Sarah graduated from university, she was eager to set up her career in marketing. However, breaking into the competitive job market turned out to be more challenging than she had anticipated. Month after month, she applied for positions, only to be turned down repeatedly. She began to wonder if she should give up her dreams and settle for something less ambitious.

One day, while looking through job postings online, she came across an advertisement for an internship at a prestigious advertising agency. Although the position was unpaid, Sarah decided to go ahead and apply. To her surprise, she was called in for an interview. During the meeting, she brought up her portfolio and discussed several campaigns she had worked on during her studies. The interviewer was impressed and offered her the internship on the spot.

The first few months were demanding. Sarah had to put up with long hours and sometimes tedious tasks. However, she was determined to make the most of the opportunity. She took on additional responsibilities whenever possible and went out of her way to help colleagues. Her hard work eventually paid off. When a junior position opened up, the company offered it to Sarah without hesitation.

Looking back, Sarah realizes that the initial rejections, while difficult to get over, taught her resilience. She learned that success often comes to those who don't let obstacles stand in their way. Now, five years later, she has moved up the corporate ladder and often mentors new graduates, encouraging them to keep trying even when things look bleak.`,
        wordCount: 260,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'What does "set up" mean in the context "set up her career"?',
            correctAnswer: 'TrueEstablish',
            explanation: '"Set up" means to establish or start.',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'How did Sarah find the internship opportunity?',
            correctAnswer: 'She came across it online/while looking through job postings',
            explanation: 'The text states she "came across an advertisement" while looking online.',
            points: 2
          },
          {
            id: 'q16',
            type: 'short-answer',
            question: 'What does "put up with" mean in this context?',
            correctAnswer: 'Tolerate',
            explanation: '"Put up with" means to tolerate something unpleasant.',
            points: 2
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'Sarah had to ___ ___ long hours and tedious tasks.',
            correctAnswer: 'put up with',
            explanation: 'From the text: "put up with long hours".',
            points: 1
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'What did Sarah learn from the initial rejections?',
            correctAnswer: 'Resilience/That success comes to those who don\'t let obstacles stand in their way',
            explanation: 'Stated in the final paragraph.',
            points: 2
          }
        ],
        vocabularyHelp: [
          { word: 'bleak', definition: 'not hopeful or encouraging' },
          { word: 'tedious', definition: 'boring and repetitive' },
          { word: 'resilience', definition: 'the ability to recover from difficulties' }
        ]
      },
      {
        id: 'b2-m3-l2-writing-1',
        type: 'writing',
        prompt: 'Write a story (200-220 words) about overcoming a challenge. Use at least 8 different phrasal verbs naturally in your narrative. Underline or highlight the phrasal verbs you use. Tell a coherent story with: beginning (situation), middle (challenge and actions), end (resolution).',
        writingType: 'essay',
        minWords: 200,
        maxWords: 220,
        timeLimit: 30,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Use phrasal verbs naturally—don\'t force them',
          'Common phrasal verbs: come across, deal with, figure out, give up, get over, carry out, turn down, take on',
          'Vary your phrasal verbs',
          'Make sure the story flows naturally',
          'Check that phrasal verbs are used correctly (separable/inseparable)'
        ]
      },

      {
        id: 'b2-m3-l2-error-identification-1',
        type: 'error-identification',
        title: 'Common Phrasal Verb Errors',
        sentences: [
          {
            id: 'e1',
            sentence: 'Please look the children after while I\'m out.',
            error: 'look the children after',
            correction: 'Please look after the children while I\'m out.',
            explanation: '"Look after" is inseparable—the object goes after the complete phrasal verb.',
            points: 2
          },
          {
            id: 'e2',
            question: 'I need to give smoking up for my health.',
            error: 'give smoking up',
            correction: 'I need to give up smoking for my health.',
            explanation: 'While "give up" is separable, it sounds more natural with the object after when it\'s a gerund.',
            points: 2
          },
          {
            id: 'e3',
            question: 'She came him across at the conference.',
            error: 'came him across',
            correction: 'She came across him at the conference.',
            explanation: '"Come across" is inseparable—pronouns go after the complete phrasal verb.',
            points: 2
          },
          {
            id: 'e4',
            sentence: 'I\'m looking forward to meet you.',
            error: 'to meet',
            correction: 'I\'m looking forward to meeting you.',
            explanation: '"Look forward to" is followed by a gerund (-ing form), not infinitive.',
            points: 2
          },
          {
            id: 'e5',
            question: 'They had to call the meeting off it.',
            error: 'call the meeting off it',
            correction: 'They had to call the meeting off / call it off.',
            explanation: 'Don\'t use both the noun and pronoun. Use either "call the meeting off" or "call it off".',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l2-sentence-completion-1',
        type: 'sentence-completion',
        title: 'Complete with Appropriate Phrasal Verbs',
        sentences: [
          {
            id: 's1',
            prompt: 'I _____ an old friend at the supermarket yesterday.',
            correctAnswer: 'ran into/came across',
            alternatives: ['bumped into'],
            explanation: '"Run into" / "come across" / "bump into" all mean to meet by chance.',
            points: 2
          },
          {
            id: 's2',
            prompt: 'We need to _____ a solution to this problem quickly.',
            correctAnswer: 'figure out/work out',
            alternatives: [],
            explanation: '"Figure out" / "work out" mean to find or develop a solution.',
            points: 2
          },
          {
            id: 's3',
            prompt: 'The concert was _____ due to bad weather.',
            correctAnswer: 'called off',
            alternatives: ['canceled'],
            explanation: '"Called off" means canceled.',
            points: 1
          },
          {
            id: 's4',
            prompt: 'I can\'t _____ his constant complaining anymore.',
            correctAnswer: 'put up with',
            alternatives: ['stand', 'tolerate'],
            explanation: '"Put up with" means to tolerate something unpleasant.',
            points: 2
          },
          {
            id: 's5',
            prompt: 'It took her months to _____ the disappointment.',
            correctAnswer: 'get over',
            alternatives: ['recover from'],
            explanation: '"Get over" means to recover from an emotional setback.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l2-paraphrasing-1',
        type: 'paraphrasing',
        title: 'Replace Formal Verbs with Phrasal Verbs',
        sentences: [
          {
            id: 'p1',
            original: 'They postponed the meeting until next week.',
            correctAnswer: 'They put off the meeting until next week',
            alternatives: [],
            explanation: '"Put off" = postpone (phrasal verb alternative).',
            points: 2
          },
          {
            id: 'p2',
            original: 'She resembles her mother.',
            correctAnswer: 'She takes after her mother',
            alternatives: [],
            explanation: '"Take after" = resemble (family members).',
            points: 2
          },
          {
            id: 'p3',
            original: 'I encountered an old colleague at the airport.',
            correctAnswer: 'I ran into an old colleague at the airport/I came across an old colleague at the airport',
            alternatives: ['I bumped into an old colleague at the airport'],
            explanation: '"Run into" / "come across" = encounter by chance.',
            points: 2
          },
          {
            id: 'p4',
            original: 'We need to investigate this matter thoroughly.',
            correctAnswer: 'We need to look into this matter thoroughly',
            alternatives: [],
            explanation: '"Look into" = investigate.',
            points: 2
          },
          {
            id: 'p5',
            original: 'He invented an excuse for being late.',
            correctAnswer: 'He made up an excuse for being late',
            alternatives: [],
            explanation: '"Make up" = invent (a story/excuse).',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l2-collocation-matching-1',
        type: 'collocation-matching',
        title: 'Match Phrasal Verbs with Objects',
        pairs: [
          { left: 'call off', right: 'a meeting', explanation: 'To cancel a meeting' },
          { left: 'take on', right: 'responsibility', explanation: 'To accept responsibility' },
          { left: 'carry out', right: 'research', explanation: 'To conduct research' },
          { left: 'bring up', right: 'a topic', explanation: 'To mention a topic' },
          { left: 'put forward', right: 'a proposal', explanation: 'To suggest a proposal' },
          { left: 'look into', right: 'a problem', explanation: 'To investigate a problem' },
          { left: 'set up', right: 'a business', explanation: 'To establish a business' },
          { left: 'work out', right: 'a solution', explanation: 'To find a solution' }
        ],
        distractors: ['a question', 'an answer', 'quickly', 'tomorrow'],
        points: 8
      },
      {
        id: 'b2-m3-l2-gap-fill-1',
        type: 'gap-fill-text',
        title: 'Gap-Fill: A Day in the Office',
        text: `Yesterday was a hectic day at work. I had to (1)_____ early to prepare for an important presentation. When I arrived, I discovered that my colleague had (2)_____ sick, so I had to (3)_____ her responsibilities as well as my own.

During the morning meeting, my boss (4)_____ several issues that needed immediate attention. We spent hours trying to (5)_____ solutions to the problems. Just when we thought we had everything under control, a client (6)_____ to inform us they wanted to (7)_____ the project deadline.

I spent the rest of the day (8)_____ the necessary changes and trying to (9)_____ with the additional pressure. By the time I left the office, I was exhausted. However, I felt satisfied that we had managed to (10)_____ all the challenges successfully.`,
        answers: [
          { gap: 1, correctAnswer: 'get up', alternatives: ['wake up'], points: 1 },
          { gap: 2, correctAnswer: 'called in', alternatives: ['phoned in'], points: 1 },
          { gap: 3, correctAnswer: 'take on', alternatives: [], points: 1 },
          { gap: 4, correctAnswer: 'brought up', alternatives: ['raised'], points: 1 },
          { gap: 5, correctAnswer: 'work out', alternatives: ['figure out'], points: 1 },
          { gap: 6, correctAnswer: 'called up', alternatives: ['phoned', 'rang up'], points: 1 },
          { gap: 7, correctAnswer: 'bring forward', alternatives: ['move up'], points: 1 },
          { gap: 8, correctAnswer: 'carrying out', alternatives: ['making'], points: 1 },
          { gap: 9, correctAnswer: 'cope', alternatives: ['deal'], points: 1 },
          { gap: 10, correctAnswer: 'deal with', alternatives: ['handle', 'cope with'], points: 1 }
        ],
        hints: [
          'Think about phrasal verbs related to work and daily routines',
          'Consider the context of each gap carefully',
          'Some gaps may have more than one possible answer'
        ]
      },
      {
        id: 'b2-m3-l2-sentence-reordering-1',
        type: 'sentence-reordering',
        title: 'Reorder Story: A Difficult Decision',
        sentences: [
          { id: 's1', text: 'After university, Tom was offered a well-paid job at a prestigious company.', order: 1 },
          { id: 's2', text: 'However, he had always dreamed of setting up his own business.', order: 2 },
          { id: 's3', text: 'He spent weeks trying to figure out what to do.', order: 3 },
          { id: 's4', text: 'Eventually, he turned down the job offer and decided to go ahead with his entrepreneurial plans.', order: 4 },
          { id: 's5', text: 'The first year was tough—he had to put up with financial uncertainty and long hours.', order: 5 },
          { id: 's6', text: 'Several times, he almost gave up and looked for traditional employment.', order: 6 },
          { id: 's7', text: 'But gradually, the business took off and became profitable.', order: 7 },
          { id: 's8', text: 'Looking back, Tom is glad he didn\'t let fear stand in his way.', order: 8 }
        ],
        points: 8
      },
      {
        id: 'b2-m3-l2-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m3-l2-listening-1.mp3',
        transcript: 'Interviewer: So, Rachel, tell us about your journey to becoming a successful entrepreneur. Rachel: Well, it certainly wasn\'t easy. When I first set up my company five years ago, I had to deal with countless challenges. I came across so many obstacles—from securing funding to building a team. At first, several investors turned down my proposals. I remember feeling like giving up more than once. But I kept going. I figured out what I needed to improve and worked on my pitch. Eventually, I ran into an investor at a networking event who believed in my vision. That chance encounter changed everything. We went ahead with the launch, and although the first year was difficult—I had to put up with long hours and financial stress—the business gradually took off. Now we\'re expanding internationally. My advice to aspiring entrepreneurs is simple: don\'t let setbacks get you down. Learn from rejections, keep working on your ideas, and never give up on your dreams.',
        duration: 120,
        allowReplay: true,
        maxReplays: 2,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'How long ago did Rachel set up her company?',
            correctAnswer: 'Five years ago',
            explanation: 'Rachel says "When I first set up my company five years ago".',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'How did Rachel meet the investor who helped her?',
            correctAnswer: 'She ran into/came across them at a networking event/By chance at a networking event',
            explanation: 'Rachel mentions running into an investor at a networking event.',
            points: 2
          },
          {
            id: 'q17',
            type: 'true-false',
            question: 'What happened when Rachel first approached investors?',
            correctAnswer: 'TrueSeveral turned down her proposals',
            explanation: 'Rachel states "several investors turned down my proposals".',
            points: 2
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'Complete Rachel\'s advice: "Don\'t let setbacks ___ you ___."',
            correctAnswer: 'get, down',
            explanation: 'Rachel advises not to let setbacks "get you down".',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l2-key-word-transformation-1',
        type: 'key-word-transformation',
        title: 'Transform Using Phrasal Verbs',
        transformations: [
          {
            id: 't1',
            original: 'They canceled the event due to low ticket sales.',
            keyword: 'OFF',
            correctAnswer: 'They called off the event due to low ticket sales/They called the event off due to low ticket sales',
            alternatives: [],
            explanation: '"Call off" = cancel.',
            points: 2
          },
          {
            id: 't2',
            original: 'I need to tolerate his bad behavior at work.',
            keyword: 'PUT',
            correctAnswer: 'I need to put up with his bad behavior at work',
            alternatives: [],
            explanation: '"Put up with" = tolerate.',
            points: 2
          },
          {
            id: 't3',
            original: 'She discovered the truth by accident.',
            keyword: 'CAME',
            correctAnswer: 'She came across the truth by accident',
            alternatives: [],
            explanation: '"Come across" = discover by chance.',
            points: 2
          },
          {
            id: 't4',
            original: 'We must investigate this complaint immediately.',
            keyword: 'LOOK',
            correctAnswer: 'We must look into this complaint immediately',
            alternatives: [],
            explanation: '"Look into" = investigate.',
            points: 2
          },
          {
            id: 't5',
            original: 'He abandoned his plan to study abroad.',
            keyword: 'GAVE',
            correctAnswer: 'He gave up his plan to study abroad',
            alternatives: [],
            explanation: '"Give up" = abandon.',
            points: 2
          },
          {
            id: 't6',
            original: 'They established a new office in Singapore last year.',
            keyword: 'SET',
            correctAnswer: 'They set up a new office in Singapore last year',
            alternatives: [],
            explanation: '"Set up" = establish.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l2-pronunciation-1',
        type: 'pronunciation',
        title: 'Pronunciation: Phrasal Verb Stress',
        words: [
          { word: 'turn DOWN', phonetic: '/tɜːn ˈdaʊn/', audioUrl: '/audio/pronunciation/turn-down.mp3' },
          { word: 'come aCROSS', phonetic: '/kʌm əˈkrɒs/', audioUrl: '/audio/pronunciation/come-across.mp3' },
          { word: 'set UP', phonetic: '/set ˈʌp/', audioUrl: '/audio/pronunciation/set-up.mp3' },
          { word: 'figure OUT', phonetic: '/ˈfɪɡə(r) ˈaʊt/', audioUrl: '/audio/pronunciation/figure-out.mp3' },
          { word: 'put up WITH', phonetic: '/pʊt ʌp ˈwɪð/', audioUrl: '/audio/pronunciation/put-up-with.mp3' },
          { word: 'look AFTER', phonetic: '/lʊk ˈɑːftə(r)/', audioUrl: '/audio/pronunciation/look-after.mp3' }
        ],
        instructions: 'In phrasal verbs, the stress usually falls on the particle (the second word), not the main verb. Listen and repeat, emphasizing the stressed syllable.',
        targetText: 'I came across an old friend while setting up my new office. We figured out a time to meet up and catch up on old times.'
      },
      {
        id: 'b2-m3-l2-speaking-2',
        type: 'speaking',
        prompt: 'Describe a time when you had to deal with a difficult person or situation. Speak for 2-3 minutes. Use at least 6 phrasal verbs: put up with, deal with, figure out, get over, work out, come across, give up, take on. Make sure to use them naturally in context.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Structure: Describe situation → Explain challenge → Actions taken → Result',
          'Use phrasal verbs naturally—don\'t list them',
          'Examples: "I had to put up with...", "I tried to figure out...", "I didn\'t give up..."',
          'Speak clearly and at a natural pace',
          'Use stress correctly on phrasal verbs (stress the particle)'
        ],
        targetWords: [
          'put up with',
          'deal with',
          'figure out',
          'get over',
          'work out',
          'come across',
          'give up',
          'take on',
          'difficult person',
          'situation',
          'challenge',
          'natural pace'
        ],
        expectedResponse: 'A 2-3 minute narrative about dealing with a difficult person/situation using at least 6 phrasal verbs naturally. Should include: (1) Clear structure (situation → challenge → actions → result), (2) Natural integration of phrasal verbs (put up with, deal with, figure out, get over, work out, come across, give up, take on), (3) Clear and natural speaking pace, (4) Correct stress on phrasal verbs (stress the particle), (5) Complete narrative arc. Demonstrates advanced phrasal verb usage in professional/personal contexts.'
      },
      {
        id: 'b2-m3-l2-vocabulary-4',
        type: 'phrasal-verbs',
        title: 'Relationships & Social Phrasal Verbs',
        phrasalVerbs: [
          {
            verb: 'get along/on (with)',
            meaning: 'to have a good relationship',
            example: 'I get along well with my colleagues.',
            separable: false
          },
          {
            verb: 'fall out (with)',
            meaning: 'to have an argument and stop being friends',
            example: 'They fell out over money and haven\'t spoken since.',
            separable: false
          },
          {
            verb: 'make up',
            meaning: 'to become friends again after an argument',
            example: 'They had a fight but made up the next day.',
            separable: true
          },
          {
            verb: 'grow up',
            meaning: 'to become an adult',
            example: 'I grew up in a small town.',
            separable: false
          },
          {
            verb: 'bring up',
            meaning: 'to raise/care for a child',
            example: 'She was brought up by her grandparents.',
            separable: true
          },
          {
            verb: 'ask out',
            meaning: 'to invite on a date',
            example: 'He finally asked her out to dinner.',
            separable: true
          },
          {
            verb: 'split up',
            meaning: 'to end a relationship',
            example: 'They split up after five years together.',
            separable: false
          },
          {
            verb: 'count on',
            meaning: 'to rely on or trust someone',
            example: 'You can always count on me for help.',
            separable: false
          }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Choose the correct phrasal verb: I can ___ you to keep this secret.',
            correctAnswer: 'count on',
            explanation: '"Count on" means to rely on or trust someone.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'They had an argument but quickly ___ ___.',
            correctAnswer: 'made up',
            explanation: '"Made up" means became friends again after an argument.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l2-integrated-reading-1',
        type: 'reading',
        title: 'Integrated Reading: The Power of Persistence',
        text: `Throughout history, countless successful individuals have one trait in common: they refused to give up when faced with obstacles. Whether in business, science, or the arts, those who persevere through challenges often end up achieving remarkable success.

Consider Thomas Edison, who came across failure thousands of times before perfecting the light bulb. When asked about his repeated setbacks, he famously stated that he hadn't failed—he had simply figured out thousands of ways that didn't work. Instead of letting disappointment get him down, Edison looked upon each failed attempt as a learning opportunity. He carried out systematic experiments, took on new approaches, and eventually worked out a solution that revolutionized the world.

Similarly, J.K. Rowling faced numerous rejections before her Harry Potter series took off. Multiple publishers turned down her manuscript, telling her that children's books wouldn't sell. She had to put up with financial difficulties, personal challenges, and professional disappointment. However, Rowling didn't call off her writing efforts. She kept working on her craft, brought up her daughter alone while writing, and maintained faith in her story. When a publisher finally agreed to take on her book, it became a global phenomenon.

In the business world, Steve Jobs was famously forced out of Apple, the company he had set up years earlier. Many would have given up after such a devastating setback. Instead, Jobs went ahead and founded new companies, including Pixar. He looked into emerging technologies, dealt with new challenges, and continued innovating. When Apple brought him back years later, he transformed the company into one of the world's most valuable businesses.

These examples illustrate a crucial principle: success rarely comes to those who give up at the first sign of difficulty. The ability to put up with temporary setbacks, figure out solutions to problems, and carry on despite obstacles often separates those who achieve their goals from those who don't. When you come across challenges in your own life, remember that persistence and resilience can help you work through even the most difficult situations.

Research backs up this observation. Studies show that persistence—often called "grit"—predicts success more accurately than talent or intelligence alone. People who take on challenges, deal with setbacks constructively, and refuse to give up tend to go further in their careers and personal lives. The question isn't whether you'll face obstacles, but rather how you'll respond when difficulties come up.`,
        wordCount: 390,
        readingTime: 4,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'According to the text, what did Edison say about his repeated failures?',
            correctAnswer: 'He said he hadn\'t failed but had figured out thousands of ways that didn\'t work/He viewed them as learning opportunities',
            explanation: 'Stated in paragraph 2.',
            points: 2
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'What happened to J.K. Rowling\\?',
            correctAnswer: 'Multiple publishers turned it down',
            explanation: 'The text states "Multiple publishers turned down her manuscript".',
            points: 2
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'Steve Jobs was forced out of Apple, the company he had ___ ___ years earlier.',
            correctAnswer: 'set up',
            explanation: 'Direct quote from the text.',
            points: 1
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'According to research mentioned in the text, what predicts success more than talent or intelligence?',
            correctAnswer: 'Persistence/Grit',
            explanation: 'Stated in the final paragraph.',
            points: 2
          },
          {
            id: 'q6',
            type: 'short-answer',
            question: 'What is the main message of this text?',
            correctAnswer: 'Success requires persistence through obstacles',
            explanation: 'This is the central theme throughout the text.',
            points: 3
          },
          {
            id: 'q6',
            type: 'essay',
            question: 'Write a paragraph (120-150 words) about a time when persistence helped you or someone you know overcome a challenge. Use at least 5 phrasal verbs from this lesson naturally in your writing.',
            correctAnswer: '',
            explanation: 'Assessment based on: natural use of phrasal verbs, coherent narrative, grammatical accuracy, appropriate length.',
            points: 10
          }
        ],
        vocabularyHelp: [
          { word: 'persevere', definition: 'to continue trying despite difficulties' },
          { word: 'devastating', definition: 'highly destructive or damaging' },
          { word: 'resilience', definition: 'the ability to recover from setbacks' },
          { word: 'grit', definition: 'courage and determination; persistence' }
        ]
      }
    ]
  },
  // LECCIÓN 3: Academic Presentations & Public Speaking
  {
    id: 'b2-m3-l3',
    title: 'Lección 3: Presentaciones Académicas y Hablar en Público',
    description: 'Desarrolla habilidades para presentaciones efectivas en contextos académicos y profesionales',
    duration: 90,
    objectives: [
      'Estructurar presentaciones claras y convincentes',
      'Usar lenguaje de presentación profesional',
      'Manejar preguntas y respuestas efectivamente',
      'Proyectar confianza al hablar en público'
    ],
    exercises: [
      {
        id: 'b2-m3-l3-vocabulary-1',
        type: 'vocabulary',
        title: 'Presentation Language & Phrases',
        vocabularySet: [
          { word: 'introduce', definition: 'begin by presenting a topic', example: 'Let me introduce the main topic of today\'s presentation.' },
          { word: 'outline', definition: 'give a general description', example: 'I\'d like to outline the key points we\'ll cover.' },
          { word: 'highlight', definition: 'emphasize important points', example: 'I\'d like to highlight three critical findings.' },
          { word: 'elaborate', definition: 'explain in more detail', example: 'Allow me to elaborate on that point.' },
          { word: 'transition', definition: 'move from one topic to another', example: 'Now I\'ll transition to the next section.' },
          { word: 'summarize', definition: 'give a brief statement of main points', example: 'To summarize, we\'ve discussed three key areas.' },
          { word: 'conclude', definition: 'bring to an end', example: 'I\'d like to conclude by emphasizing the importance of...' },
          { word: 'engage', definition: 'attract and keep attention', example: 'Interactive elements help engage the audience.' },
          { word: 'clarify', definition: 'make clear or easier to understand', example: 'Let me clarify what I mean by that.' },
          { word: 'emphasize', definition: 'stress the importance of something', example: 'I want to emphasize that this is crucial.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Which phrase is best for beginning a presentation?',
            correctAnswer: 'Let me introduce...',
            explanation: '"Introduce" se usa al inicio para presentar el tema',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: '"I\'d like to ___ three main points before we continue."',
            correctAnswer: 'highlight',
            explanation: '"Highlight" se usa para enfatizar puntos importantes',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What word means "to explain in more detail"?',
            correctAnswer: 'elaborate',
            explanation: '"Elaborate" significa explicar con más detalle',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l3-reading-1',
        type: 'reading',
        title: 'Reading: Mastering Public Speaking',
        text: `Public speaking consistently ranks as one of people's greatest fears, often above even death itself. However, this fear can be conquered with proper preparation and practice. What many people don't realize is that even the most confident speakers experience nervousness—they've simply learned to manage it effectively.

The foundation of any successful presentation lies in thorough preparation. This doesn't just mean knowing your content; it involves understanding your audience, anticipating questions, and practicing your delivery multiple times. Research shows that speakers who rehearse their presentations at least five times perform significantly better than those who don't.

Structure is equally crucial. A well-organized presentation follows a clear pattern: introduction, body, and conclusion. The introduction should grab attention immediately—perhaps with a surprising statistic, a thought-provoking question, or a relevant anecdote. The body should present ideas logically, using transitions to guide your audience smoothly from one point to the next. The conclusion should reinforce key messages and leave a lasting impression.

Body language plays a vital role in effective presentations. Maintaining eye contact establishes connection and credibility. Standing confidently, using purposeful gestures, and moving naturally around the space helps engage your audience. Avoid common mistakes such as crossing your arms, fidgeting, or reading directly from slides.

Voice modulation is another powerful tool. Varying your pace, volume, and tone keeps the audience engaged. Speaking too quickly suggests nervousness, while speaking too slowly can bore listeners. Strategic pauses can emphasize important points and give your audience time to absorb information.

Managing nervousness is essential. Deep breathing exercises before speaking can calm your nerves. Arriving early allows you to familiarize yourself with the space and test any equipment. Remember that slight nervousness can actually enhance performance by keeping you alert and energized.

Finally, embrace questions as opportunities rather than threats. If you don't know an answer, it's perfectly acceptable to say so and offer to follow up later. This demonstrates honesty and professionalism. The most effective presenters view questions as chances to clarify, elaborate, and connect more deeply with their audience.`,
        wordCount: 342,
        readingTime: 4,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'According to the text, what is the foundation of a successful presentation?',
            correctAnswer: 'Thorough preparation',
            explanation: 'El texto dice: "The foundation of any successful presentation lies in thorough preparation"',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'How many times should speakers rehearse according to research?',
            correctAnswer: 'At least five times / Five times',
            explanation: 'El texto menciona: "speakers who rehearse their presentations at least five times"',
            points: 1
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: Even confident speakers experience nervousness.',
            correctAnswer: 'True',
            explanation: 'El texto dice: "even the most confident speakers experience nervousness"',
            points: 1
          },
          {
            id: 'q17',
            type: 'fill-blank',
            question: 'What should you do if you don\\?',
            correctAnswer: 'Say you don\\',
            explanation: 'El texto recomienda: "it\\\'s perfectly acceptable to say so and offer to follow up later"',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'Name THREE elements of effective body language mentioned in the text.',
            correctAnswer: 'Eye contact, standing confidently, purposeful gestures, natural movement',
            explanation: 'El texto menciona varios elementos de lenguaje corporal efectivo',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m3-l3-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m3-l3-listening-1.mp3',
        duration: 200,
        allowReplay: true,
        maxReplays: 3,
        transcript: `[TED Talk-style presentation]

Good morning everyone. Today, I want to talk to you about something that affects millions of people worldwide: the fear of public speaking. Let me start by asking you a question: How many of you feel nervous when speaking in front of a group? If you raised your hand—or wanted to—you're not alone.

Now, I'd like to outline what I'll cover today. First, I'll discuss why public speaking terrifies so many people. Then, I'll share three practical techniques that have helped me overcome this fear. Finally, I'll demonstrate how you can apply these techniques immediately.

So, why are we so afraid? The answer lies in evolution. Our brains are wired to fear social rejection. Thousands of years ago, being cast out from your tribe meant death. Today, we no longer face that danger, but our brains haven't caught up. When we stand in front of a group, our primitive brain interprets it as a survival threat.

Let me elaborate on this point. When you feel nervous before speaking, what's really happening? Your body releases adrenaline, your heart races, your palms sweat. This is your fight-or-flight response kicking in. But here's the interesting part: these physical sensations are identical to those you experience when you're excited. The difference is purely mental.

Which brings me to my first technique: reframing. Instead of telling yourself "I'm nervous," try saying "I'm excited." Research from Harvard Business School shows that this simple mental shift can significantly improve performance. Your body is already prepared for action—you're just changing the narrative.

Now I'll transition to the second technique: breathing. When we're anxious, we tend to take shallow breaths, which actually increases anxiety. Try this with me now: breathe in for four counts, hold for four, breathe out for six. This activates your parasympathetic nervous system, calming you down.

The third and final technique is practice, but not the way you might think. Many people practice in their heads or in front of a mirror. That's not enough. You need to practice in conditions as similar to the real thing as possible. Practice standing up, speaking out loud, even record yourself. Your brain needs to rehearse the actual experience.

To summarize the key points: understand that fear is natural and evolutionary, reframe nervousness as excitement, use breathing techniques to calm yourself, and practice in realistic conditions.

Before I conclude, I want to emphasize one thing: every skilled speaker you admire was once terrified too. The difference is they pushed through that fear. And you can too.

Thank you for your attention. I'd be happy to take any questions.`,
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'How many main techniques does the speaker share?',
            correctAnswer: 'FalseTwo',
            explanation: 'Falso. El speaker dice: "I\\\'ll share three practical techniques"',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'According to the speaker, why are humans afraid of public speaking?',
            correctAnswer: 'Evolution / fear of social rejection / our brains are wired to fear being cast out',
            explanation: 'El speaker explica: "Our brains are wired to fear social rejection...being cast out from your tribe meant death"',
            points: 2
          },
          {
            id: 'q18',
            type: 'short-answer',
            question: 'What is the first technique mentioned?',
            correctAnswer: 'Reframing nervousness as excitement',
            explanation: 'El primer técnica es: "reframing...try saying \\\'I\\\'m excited\\\'"',
            points: 2
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'What breathing pattern does the speaker recommend?',
            correctAnswer: 'Breathe in for 4 counts, hold for 4, breathe out for 6',
            explanation: 'El speaker dice: "breathe in for four counts, hold for four, breathe out for six"',
            points: 2
          },
          {
            id: 'q5',
            type: 'true-false',
            question: 'True or False: The speaker says practicing in your head is enough.',
            correctAnswer: 'False',
            explanation: 'El speaker dice: "practice in your head...That\'s not enough"',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l3-speaking-1',
        type: 'speaking',
        prompt: 'Give a 2-minute presentation on a topic you\'re passionate about. Use presentation language: introduce your topic, outline your points, use transitions, and conclude effectively. Imagine you\'re speaking to a professional audience.',
        timeLimit: 120,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Start: "Good morning/afternoon. Today I\'d like to talk about..."',
          'Outline: "I\'ll cover three main points..."',
          'Transitions: "Moving on to...", "Now I\'ll turn to..."',
          'Emphasize: "I want to highlight...", "It\'s important to note..."',
          'Conclude: "To summarize...", "In conclusion..."'
        ],
        targetWords: [
          'good morning',
          'I\'d like to talk about',
          'I\'ll cover three main points',
          'moving on to',
          'now I\'ll turn to',
          'I want to highlight',
          'it\'s important to note',
          'to summarize',
          'in conclusion',
          'presentation language',
          'transitions'
        ],
        expectedResponse: 'A 2-minute professional presentation on a passionate topic. Should include: (1) Formal opening ("Good morning/afternoon. Today I\'d like to talk about..."), (2) Clear outline ("I\'ll cover three main points..."), (3) Smooth transitions ("Moving on to...", "Now I\'ll turn to..."), (4) Emphasis markers ("I want to highlight...", "It\'s important to note..."), (5) Strong conclusion ("To summarize...", "In conclusion..."). Demonstrates professional presentation skills with appropriate register and structure.'
      },
      {
        id: 'b2-m3-l3-writing-1',
        type: 'writing',
        prompt: 'Write a report (180-220 words) on "Effective Communication in the Workplace". Include an introduction, 2-3 main points with examples, and a conclusion with recommendations.',
        writingType: 'report',
        minWords: 180,
        maxWords: 220,
        timeLimit: 35,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Use headings: Introduction, Findings, Conclusion',
          'Be objective and formal',
          'Include specific examples',
          'Make clear recommendations',
          'Use passive voice where appropriate'
        ]
      },

      {
        id: 'b2-m3-l3-vocabulary-2',
        type: 'vocabulary',
        title: 'Presentation Signposting Language',
        vocabularySet: [
          { word: 'firstly / secondly / finally', definition: 'sequencing markers', example: 'Firstly, I\'ll discuss the methodology. Secondly, I\'ll present the findings.' },
          { word: 'moving on to', definition: 'transition phrase', example: 'Moving on to the next section, let\'s examine the data.' },
          { word: 'turning to', definition: 'topic transition', example: 'Turning to the financial implications, we can see...' },
          { word: 'as I mentioned earlier', definition: 'reference back', example: 'As I mentioned earlier, this is a critical factor.' },
          { word: 'let me draw your attention to', definition: 'focus audience', example: 'Let me draw your attention to this graph.' },
          { word: 'it\'s worth noting that', definition: 'emphasis phrase', example: 'It\'s worth noting that results varied across regions.' },
          { word: 'in other words', definition: 'rephrasing', example: 'The project failed, in other words, we need a new approach.' },
          { word: 'to put it another way', definition: 'clarification', example: 'To put it another way, we\'re looking at a 30% increase.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'Which phrase is best for transitioning to a new topic?',
            correctAnswer: 'FalseFinally',
            explanation: 'Falso. "Moving on to" indicates a transition to a new topic.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: '"___, I\'d like to thank everyone for their participation."',
            correctAnswer: 'Finally',
            explanation: '"Finally" is used for the last point or conclusion.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l3-vocabulary-3',
        type: 'vocabulary',
        title: 'Academic Discussion Phrases',
        vocabularySet: [
          { word: 'raise a point', definition: 'bring up an issue for discussion', example: 'I\'d like to raise a point about the methodology.' },
          { word: 'address a concern', definition: 'respond to a worry or problem', example: 'Let me address the concern you mentioned.' },
          { word: 'build on', definition: 'expand or develop an idea', example: 'I\'d like to build on what Sarah just said.' },
          { word: 'challenge the assumption', definition: 'question a belief', example: 'I want to challenge the assumption that this is cost-effective.' },
          { word: 'draw a conclusion', definition: 'make a final judgment', example: 'Based on the evidence, we can draw the conclusion that...' },
          { word: 'shed light on', definition: 'clarify or explain', example: 'This research sheds light on consumer behavior.' },
          { word: 'take into account', definition: 'consider', example: 'We must take into account regional differences.' },
          { word: 'warrant further investigation', definition: 'require more study', example: 'These findings warrant further investigation.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'What phrase means "to question a belief"?',
            correctAnswer: 'challenge the assumption',
            explanation: '"Challenge the assumption" means to question an underlying belief.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l3-grammar-1',
        type: 'grammar',
        title: 'Hedging Language in Academic Presentations',
        explanation: `Hedging language makes statements less direct and more tentative, which is important in academic contexts where you want to avoid overgeneralizing. Common hedging techniques include:

**Modal verbs:** may, might, could, would
- "This could suggest that..." (instead of "This proves that...")
- "The data might indicate..." (instead of "The data shows...")

**Verbs of uncertainty:** seem, appear, tend to, suggest
- "The results seem to support..." 
- "Evidence suggests that..."

**Adverbs:** possibly, probably, perhaps, likely
- "This is probably the most effective approach."
- "Perhaps we should consider alternative methods."

**Phrases:** it is possible that, it appears that, there is evidence to suggest
- "It is possible that factors we haven't considered are at play."
- "There is evidence to suggest a correlation."

**Quantifiers:** some, many, most (instead of all)
- "Many studies support this view" (instead of "All studies...")`,
        examples: [
          { correct: 'The data suggests a correlation between the two variables.', incorrect: 'The data proves a correlation.', rule: 'Use "suggests" instead of "proves" to be more tentative.' },
          { correct: 'This approach may be more effective in certain contexts.', incorrect: 'This approach is definitely more effective.', rule: 'Use modal verbs like "may" to hedge claims.' },
          { correct: 'Most participants reported positive outcomes.', incorrect: 'All participants reported positive outcomes.', rule: 'Use "most" instead of "all" to avoid overgeneralizing.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Which sentence uses appropriate hedging language?',
            correctAnswer: 'This study suggests that exercise may help reduce depression.',
            explanation: 'This option uses hedging with "suggests" and "may" to avoid overgeneralization.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete with a hedging phrase: "The results ___ indicate a positive trend."',
            correctAnswer: 'seem to',
            acceptableAnswers: ['appear to', 'tend to', 'might', 'may', 'could'],
            explanation: 'Hedging phrases like "seem to", "appear to", or modals make the statement more tentative.',
            points: 2
          },
          {
            id: 'q19',
            type: 'true-false',
            question: 'Which word is a hedging adverb?',
            correctAnswer: 'Falsedefinitely',
            explanation: 'Falso. "Probably" expresses uncertainty, while the others express certainty.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l3-error-identification-1',
        type: 'error-identification',
        title: 'Common Presentation Errors',
        sentences: [
          {
            question: 'Good morning. Today I want to talk you about climate change.',
            error: 'talk you',
            correction: 'talk to you',
            explanation: 'The correct phrase is "talk to you" (not "talk you").',
            points: 1
          },
          {
            question: 'Let me to introduce our new product line.',
            error: 'to introduce',
            correction: 'introduce',
            explanation: 'After "let me", use the base form without "to".',
            points: 1
          },
          {
            question: 'Firstable, I\'d like to outline the main objectives.',
            error: 'Firstable',
            correction: 'Firstly / First of all',
            explanation: '"Firstable" is not a word. Use "Firstly" or "First of all".',
            points: 1
          },
          {
            question: 'This data shows that customers prefers our product.',
            error: 'prefers',
            correction: 'prefer',
            explanation: 'The subject is "customers" (plural), so use "prefer" not "prefers".',
            points: 1
          },
          {
            question: 'I want to emphasize about the importance of teamwork.',
            error: 'emphasize about',
            correction: 'emphasize',
            explanation: '"Emphasize" is not followed by "about". Say "emphasize the importance".',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l3-sentence-completion-1',
        type: 'sentence-completion',
        title: 'Complete the Presentation Phrases',
        sentences: [
          {
            question: 'Let me ___ your attention to this important statistic.',
            correctAnswer: 'draw',
            acceptableAnswers: ['direct', 'bring'],
            explanation: '"Draw your attention" is the standard phrase.',
            points: 1
          },
          {
            question: 'I\'d like to ___ on the point Sarah made earlier.',
            correctAnswer: 'build',
            acceptableAnswers: ['expand', 'elaborate'],
            explanation: '"Build on" means to develop or expand an idea further.',
            points: 1
          },
          {
            question: 'This finding ___ light on consumer preferences.',
            correctAnswer: 'sheds',
            acceptableAnswers: ['throws', 'casts'],
            explanation: '"Sheds light on" means to clarify or explain something.',
            points: 1
          },
          {
            question: 'The data ___ to suggest a positive correlation.',
            correctAnswer: 'seems',
            acceptableAnswers: ['appears', 'tends'],
            explanation: 'Hedging language: "seems to suggest" is more tentative than "proves".',
            points: 1
          },
          {
            question: 'Before I ___, let me summarize the key points.',
            correctAnswer: 'conclude',
            acceptableAnswers: ['finish', 'end'],
            explanation: '"Before I conclude" is a formal closing phrase.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l3-paraphrasing-1',
        type: 'paraphrasing',
        title: 'Paraphrase Academic Language',
        pairs: [
          {
            original: 'The research indicates a significant correlation.',
            paraphrase: 'The study shows a strong relationship.',
            explanation: 'Simplifying academic language while maintaining meaning.',
            points: 2
          },
          {
            original: 'This methodology warrants further investigation.',
            paraphrase: 'This method needs more research.',
            explanation: 'Converting formal academic language to simpler terms.',
            points: 2
          },
          {
            original: 'The findings shed light on consumer behavior.',
            paraphrase: 'The results explain how consumers behave.',
            explanation: 'Replacing idiomatic phrase with direct explanation.',
            points: 2
          },
          {
            original: 'We must take into account regional variations.',
            paraphrase: 'We must consider regional differences.',
            explanation: 'Simplifying phrasal expression.',
            points: 2
          },
          {
            original: 'Let me elaborate on this particular aspect.',
            paraphrase: 'Let me explain this point in more detail.',
            explanation: 'Making academic language more accessible.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l3-collocation-matching-1',
        type: 'collocation-matching',
        title: 'Academic & Presentation Collocations',
        pairs: [
          { left: 'conduct', right: 'research', explanation: '"Conduct research" is the standard academic collocation.' },
          { left: 'draw', right: 'conclusions', explanation: '"Draw conclusions" means to make final judgments based on evidence.' },
          { left: 'raise', right: 'a point', explanation: '"Raise a point" means to bring up an issue for discussion.' },
          { left: 'address', right: 'concerns', explanation: '"Address concerns" means to respond to worries or problems.' },
          { left: 'shed light', right: 'on a topic', explanation: '"Shed light on" means to clarify or explain something.' },
          { left: 'challenge', right: 'assumptions', explanation: '"Challenge assumptions" means to question underlying beliefs.' },
          { left: 'warrant', right: 'investigation', explanation: '"Warrant investigation" means to require or deserve further study.' },
          { left: 'take into', right: 'account', explanation: '"Take into account" means to consider or include in decision-making.' }
        ],
        points: 8
      },
      {
        id: 'b2-m3-l3-key-word-transformations-1',
        type: 'key-word-transformations',
        title: 'Key Word Transformations: Presentation Language',
        transformations: [
          {
            original: 'I want to discuss the financial implications.',
            keyword: 'TURN',
            transformed: 'I want to TURN TO the financial implications.',
            explanation: '"Turn to" is a presentation phrase for introducing a new topic.',
            points: 2
          },
          {
            original: 'The results prove there is a correlation.',
            keyword: 'SUGGEST',
            transformed: 'The results SUGGEST there is a correlation.',
            explanation: 'Using hedging language to be more tentative.',
            points: 2
          },
          {
            original: 'Let me say that again in a different way.',
            keyword: 'PUT',
            transformed: 'Let me PUT that another way.',
            explanation: '"Put it another way" means to rephrase or clarify.',
            points: 2
          },
          {
            original: 'We should consider regional differences.',
            keyword: 'ACCOUNT',
            transformed: 'We should take regional differences into ACCOUNT.',
            explanation: '"Take into account" means to consider.',
            points: 2
          },
          {
            original: 'This research explains consumer behavior.',
            keyword: 'LIGHT',
            transformed: 'This research sheds LIGHT on consumer behavior.',
            explanation: '"Shed light on" means to explain or clarify.',
            points: 2
          },
          {
            original: 'Finally, I want to emphasize this point.',
            keyword: 'CONCLUDE',
            transformed: 'Before I CONCLUDE, I want to emphasize this point.',
            explanation: '"Before I conclude" is a formal closing phrase.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l3-word-formation-1',
        type: 'word-formation',
        title: 'Word Formation: Academic Nouns',
        sentences: [
          {
            question: 'The ___ (INVESTIGATE) revealed surprising results.',
            correctAnswer: 'investigation',
            baseWord: 'INVESTIGATE',
            explanation: 'Noun form: investigate → investigation',
            points: 1
          },
          {
            question: 'We need to conduct a thorough ___ (ANALYZE) of the data.',
            correctAnswer: 'analysis',
            baseWord: 'ANALYZE',
            explanation: 'Noun form: analyze → analysis (irregular)',
            points: 1
          },
          {
            question: 'The ___ (PRESENT) was well-structured and engaging.',
            correctAnswer: 'presentation',
            baseWord: 'PRESENT',
            explanation: 'Noun form: present → presentation',
            points: 1
          },
          {
            question: 'Student ___ (PARTICIPATE) is essential for learning.',
            correctAnswer: 'participation',
            baseWord: 'PARTICIPATE',
            explanation: 'Noun form: participate → participation',
            points: 1
          },
          {
            question: 'The study has several ___ (LIMIT) that should be acknowledged.',
            correctAnswer: 'limitations',
            baseWord: 'LIMIT',
            explanation: 'Noun form (plural): limit → limitations',
            points: 1
          },
          {
            question: 'Her ___ (EXPLAIN) was clear and concise.',
            correctAnswer: 'explanation',
            baseWord: 'EXPLAIN',
            explanation: 'Noun form: explain → explanation',
            points: 1
          },
          {
            question: 'The research shows a strong ___ (CORRELATE) between the variables.',
            correctAnswer: 'correlation',
            baseWord: 'CORRELATE',
            explanation: 'Noun form: correlate → correlation',
            points: 1
          },
          {
            question: 'We reached the ___ (CONCLUDE) that more research is needed.',
            correctAnswer: 'conclusion',
            baseWord: 'CONCLUDE',
            explanation: 'Noun form: conclude → conclusion',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l3-gap-fill-1',
        type: 'gap-fill',
        title: 'Gap-Fill: Conference Presentation',
        text: `Good afternoon, everyone. Thank you for joining this session. Today, I'd like to (1)___ the findings of our recent study on workplace productivity. 

(2)___ I'll outline three main areas we investigated. Firstly, we examined the impact of flexible working hours. Secondly, we analyzed the effects of workspace design. Finally, we explored the role of team dynamics in overall productivity.

(3)___ on to our first finding, the data (4)___ to suggest that flexible hours significantly improve employee satisfaction. It's (5)___ noting that productivity increased by an average of 15% when employees had control over their schedules.

Now, let me (6)___ your attention to this graph, which shows the correlation between workspace design and creativity. As you can see, open-plan offices (7)___ both advantages and disadvantages. While they facilitate collaboration, they can also create distractions.

(8)___ I conclude, I want to (9)___ that these findings (10)___ further investigation. We need to take into account individual differences and industry-specific factors. Thank you for your attention. I'd be happy to address any questions.`,
        answers: [
          { number: 1, answer: 'present', acceptableAnswers: ['share', 'discuss'] },
          { number: 2, answer: 'Firstly', acceptableAnswers: ['First'] },
          { number: 3, answer: 'Moving', acceptableAnswers: ['Turning'] },
          { number: 4, answer: 'seems', acceptableAnswers: ['appears', 'tends'] },
          { number: 5, answer: 'worth', acceptableAnswers: [] },
          { number: 6, answer: 'draw', acceptableAnswers: ['direct'] },
          { number: 7, answer: 'offer', acceptableAnswers: ['present', 'have'] },
          { number: 8, answer: 'Before', acceptableAnswers: [] },
          { number: 9, answer: 'emphasize', acceptableAnswers: ['stress', 'highlight'] },
          { number: 10, answer: 'warrant', acceptableAnswers: ['require', 'need'] }
        ],
        points: 10
      },
      {
        id: 'b2-m3-l3-sentence-reordering-1',
        type: 'sentence-reordering',
        title: 'Organize a Presentation Outline',
        sentences: [
          { id: 1, text: 'Good morning, everyone. Thank you for being here today.', position: 1 },
          { id: 2, text: 'I\'d like to outline what I\'ll cover in the next 20 minutes.', position: 2 },
          { id: 3, text: 'Firstly, I\'ll discuss the current market situation.', position: 3 },
          { id: 4, text: 'Secondly, I\'ll present our proposed solution.', position: 4 },
          { id: 5, text: 'Finally, I\'ll explain the expected benefits and timeline.', position: 5 },
          { id: 6, text: 'Moving on to the market analysis, we can see three key trends.', position: 6 },
          { id: 7, text: 'To summarize, our solution addresses all major pain points.', position: 7 },
          { id: 8, text: 'Before I conclude, I want to emphasize the urgency of this project.', position: 8 }
        ],
        instruction: 'Arrange these sentences to create a logical presentation structure.',
        points: 8
      },
      {
        id: 'b2-m3-l3-pronunciation-1',
        type: 'pronunciation',
        title: 'Word Stress in Academic Vocabulary',
        words: [
          { word: 'presentation', phonetic: '/ˌprez.ənˈteɪ.ʃən/', stressPattern: 'ter-TAY-shun', syllables: 4, stressedSyllable: 3 },
          { word: 'academic', phonetic: '/ˌæk.əˈdem.ɪk/', stressPattern: 'a-ca-DEM-ic', syllables: 4, stressedSyllable: 3 },
          { word: 'analysis', phonetic: '/əˈnæl.ɪ.sɪs/', stressPattern: 'a-NAL-y-sis', syllables: 4, stressedSyllable: 2 },
          { word: 'correlation', phonetic: '/ˌkɒr.əˈleɪ.ʃən/', stressPattern: 'cor-re-LAY-shun', syllables: 4, stressedSyllable: 3 },
          { word: 'methodology', phonetic: '/ˌmeθ.əˈdɒl.ə.dʒi/', stressPattern: 'meth-o-DOL-o-gy', syllables: 5, stressedSyllable: 3 },
          { word: 'elaborate', phonetic: '/ɪˈlæb.ər.ət/', stressPattern: 'e-LAB-or-ate', syllables: 4, stressedSyllable: 2 }
        ],
        instructions: 'Listen and repeat, paying attention to which syllable is stressed.'
      },
      {
        id: 'b2-m3-l3-speaking-2',
        type: 'speaking',
        prompt: 'Practice answering presentation questions. Choose one of these questions and speak for 1 minute: 1) "Could you elaborate on your methodology?" 2) "How does this apply to small businesses?" 3) "What are the limitations of your study?"',
        timeLimit: 60,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Start: "That\'s an excellent question..."',
          'Use hedging: "I would suggest...", "It seems that..."',
          'Give examples: "For instance...", "To illustrate..."',
          'Be honest: "That\'s an area that warrants further research..."',
          'Check understanding: "Does that answer your question?"'
        ],
        targetWords: [
          'excellent question',
          'I would suggest',
          'it seems that',
          'for instance',
          'to illustrate',
          'warrants further research',
          'does that answer',
          'hedging language',
          'methodology',
          'limitations',
          'elaborate'
        ],
        expectedResponse: 'A 1-minute answer to a presentation question using professional Q&A techniques. Should include: (1) Acknowledgment (\"That\'s an excellent question...\"), (2) Hedging language (\"I would suggest...\", \"It seems that...\"), (3) Concrete examples (\"For instance...\", \"To illustrate...\"), (4) Honest acknowledgment of limitations if asked (\"That\'s an area that warrants further research...\"), (5) Check for understanding (\"Does that answer your question?\"). Demonstrates professional Q&A skills with appropriate hedging and examples.'
      },
      {
        id: 'b2-m3-l3-integrated-reading-1',
        type: 'reading',
        title: 'Integrated Reading & Writing: TED Talk Analysis',
        text: `The art of delivering a memorable presentation has evolved significantly in recent years, largely due to the influence of TED Talks. These short, powerful presentations have revolutionized how we think about public speaking, emphasizing storytelling, emotional connection, and visual simplicity over traditional lecture formats.

What makes TED Talks so effective? Research suggests several key factors. First, successful TED speakers typically follow a clear narrative arc. They don't just present information; they tell stories that resonate emotionally with audiences. As presentation expert Nancy Duarte observes, the most memorable talks take listeners on a journey from "what is" to "what could be."

Second, TED speakers use visual aids sparingly and strategically. Rather than slides crammed with bullet points, they favor striking images that complement rather than duplicate their words. This approach aligns with cognitive research showing that people process visual and verbal information through different channels. When these channels are overloaded with redundant information, learning suffers.

Third, great presenters employ what psychologists call "the power of three." They organize content around three main points because this number is optimal for audience retention. Studies show that people can comfortably remember three to five pieces of information, but three seems to be the sweet spot for creating a sense of completeness without overwhelming listeners.

Voice modulation and strategic pauses also play crucial roles. Varying pace, volume, and tone keeps audiences engaged, while well-placed pauses give listeners time to absorb important points. Some of the most powerful moments in presentations occur not when speakers are talking, but when they deliberately stop speaking.

Perhaps most importantly, effective presenters demonstrate vulnerability and authenticity. They share personal failures, admit uncertainties, and acknowledge limitations. This hedging language and honest self-assessment actually increases credibility rather than diminishing it. When Brené Brown discusses her research on vulnerability, she doesn't claim to have all the answers—and that's precisely why millions trust her insights.

The implications for business and academic presentations are clear. Whether you're pitching to investors, presenting research findings, or teaching students, the principles remain the same: tell stories, simplify visuals, organize around three main points, vary your delivery, and be authentic. As Brown herself emphasizes, "Connection is why we're here. It's what gives purpose and meaning to our lives."`,
        wordCount: 370,
        readingTime: 4,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'According to the text, what do successful TED speakers focus on?',
            correctAnswer: 'Telling stories that resonate emotionally',
            explanation: 'The text states: "They don\\\'t just present information; they tell stories that resonate emotionally".',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Why should visual aids NOT duplicate spoken words, according to cognitive research?',
            correctAnswer: 'People process visual and verbal information through different channels; redundant information overloads these channels and reduces learning',
            explanation: 'Explained in paragraph 3.',
            points: 2
          },
          {
            id: 'q20',
            type: 'fill-blank',
            question: 'What is "the power of three"?',
            correctAnswer: 'Organizing content around three main points',
            explanation: 'The text explains: "They organize content around three main points".',
            points: 2
          },
          {
            id: 'q4',
            type: 'true-false',
            question: 'True or False: Showing vulnerability decreases a presenter\'s credibility.',
            correctAnswer: 'False',
            explanation: 'The text states: "This...honest self-assessment actually increases credibility rather than diminishing it".',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'List THREE techniques mentioned for effective presentation delivery.',
            correctAnswer: 'Voice modulation, strategic pauses, varying pace/volume/tone, demonstrating vulnerability/authenticity, using visuals sparingly',
            explanation: 'Multiple techniques are discussed in paragraphs 4-5.',
            points: 2
          },
          {
            id: 'q6',
            type: 'writing',
            writingPrompt: 'Write a short essay (120-150 words) explaining which TED Talk principle you find most useful and why. Support your answer with examples from your own experience or observations.',
            rubric: {
              content: 30,
              organization: 30,
              grammar: 20,
              vocabulary: 20
            },
            minWords: 120,
            maxWords: 150,
            explanation: 'This integrated task assesses your ability to synthesize information from the reading and express your own ideas.',
            points: 10
          }
        ]
      }
    ]
  },
  
  // LECCIÓN 4: Advanced Collocations & Idiomatic Expressions
  {
    id: 'b2-m3-l4',
    title: 'Lección 4: Colocaciones e Expresiones Idiomáticas Avanzadas',
    description: 'Domina colocaciones naturales y expresiones idiomáticas para sonar más fluido',
    duration: 90,
    objectives: [
      'Reconocer y usar colocaciones comunes',
      'Aplicar expresiones idiomáticas apropiadamente',
      'Evitar errores típicos de colocación',
      'Ampliar vocabulario productivo'
    ],
    exercises: [
      {
        id: 'b2-m3-l4-vocabulary-1',
        type: 'vocabulary',
        title: 'Common Collocations',
        vocabularySet: [
          { word: 'make a decision', definition: 'decide something', example: 'We need to make a decision about the project.' },
          { word: 'do business', definition: 'conduct commercial activities', example: 'We do business with companies worldwide.' },
          { word: 'take responsibility', definition: 'accept being in charge of something', example: 'Leaders must take responsibility for their mistakes.' },
          { word: 'reach an agreement', definition: 'come to a mutual understanding', example: 'After hours of negotiation, they reached an agreement.' },
          { word: 'face challenges', definition: 'deal with difficult situations', example: 'Every company faces challenges in the market.' },
          { word: 'gain experience', definition: 'acquire knowledge through practice', example: 'Internships help students gain experience.' },
          { word: 'achieve goals', definition: 'successfully accomplish objectives', example: 'With hard work, you can achieve your goals.' },
          { word: 'raise awareness', definition: 'increase people\'s knowledge about something', example: 'The campaign aims to raise awareness about climate change.' },
          { word: 'draw conclusions', definition: 'make judgments based on information', example: 'From the data, we can draw several conclusions.' },
          { word: 'meet expectations', definition: 'fulfill what was anticipated', example: 'The product failed to meet customers\' expectations.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'Which is correct?',
            correctAnswer: 'Both b and c',
            explanation: '"Make a decision" (AmE/BrE) y "take a decision" (BrE) son correctas',
            points: 3
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'We need to ___ an agreement before Friday.',
            correctAnswer: 'reach',
            explanation: 'La colocación correcta es "reach an agreement"',
            points: 1
          },
          {
            id: 'q21',
            type: 'fill-blank',
            question: 'Which is INCORRECT?',
            correctAnswer: 'win experience',
            explanation: '"Win experience" no es una colocación natural en inglés',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l4-vocabulary-2',
        type: 'vocabulary',
        title: 'Idiomatic Expressions',
        vocabularySet: [
          { word: 'break the ice', definition: 'make people feel more comfortable', example: 'He told a joke to break the ice at the meeting.' },
          { word: 'hit the nail on the head', definition: 'be exactly right about something', example: 'You hit the nail on the head with that analysis.' },
          { word: 'go the extra mile', definition: 'make an extra effort', example: 'She always goes the extra mile for her clients.' },
          { word: 'on the same page', definition: 'in agreement, having same understanding', example: 'Let\'s make sure we\'re all on the same page before we proceed.' },
          { word: 'think outside the box', definition: 'think creatively', example: 'We need to think outside the box to solve this problem.' },
          { word: 'cut corners', definition: 'do something badly to save time/money', example: 'Don\'t cut corners on quality to meet the deadline.' },
          { word: 'get the ball rolling', definition: 'start something', example: 'Let\'s get the ball rolling on this project.' },
          { word: 'in the same boat', definition: 'in the same difficult situation', example: 'We\'re all in the same boat regarding the deadline.' },
          { word: 'back to square one', definition: 'start over from the beginning', example: 'The plan failed, so we\'re back to square one.' },
          { word: 'call it a day', definition: 'stop working for the day', example: 'It\'s 6pm. Let\'s call it a day.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'What does "break the ice" mean?',
            correctAnswer: 'Make people feel more comfortable',
            explanation: '"Break the ice" significa hacer que la gente se sienta más cómoda',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: '"Your suggestion is perfect. You really ___ on the head!"',
            correctAnswer: 'hit the nail',
            explanation: '"Hit the nail on the head" significa ser exactamente correcto',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'If someone "goes the extra mile," what do they do?',
            correctAnswer: 'Make an extra effort / do more than required',
            explanation: '"Go the extra mile" significa hacer un esfuerzo adicional',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l4-reading-1',
        type: 'reading',
        title: 'Reading: Succeeding in Business',
        text: `In today's competitive business environment, it's not enough to simply do your job—you need to go the extra mile to stand out. Companies are looking for employees who can think outside the box and bring fresh ideas to the table.

When I first started my career, I made a crucial mistake: I tried to cut corners to finish projects quickly. I thought meeting deadlines was all that mattered. My manager soon set me straight. "Quality is paramount," she said, hitting the nail on the head. "If you deliver substandard work, you'll damage your reputation and we'll be back to square one."

That conversation was a wake-up call. I realized that taking responsibility for excellence meant investing the time necessary, even if it required working extra hours. I learned to reach agreements with team members early in projects to ensure we were all on the same page. This collaborative approach helped us avoid misunderstandings later.

One project particularly taught me the value of facing challenges head-on. We encountered a technical problem that could have derailed everything. Rather than panic, we decided to get the ball rolling on finding solutions. We broke the ice with the client by being transparent about the issue and presenting multiple options. This honesty built trust.

The experience helped me gain valuable insights about business relationships. I learned that when facing difficulties, we're all in the same boat—clients, colleagues, and partners alike. Being open about challenges, rather than hiding them, actually strengthens relationships.

As my career progressed, I made decisions based on long-term thinking rather than short-term gains. I focused on achieving goals that aligned with our company's values. This approach paid off: I raised my profile within the organization and eventually drew the conclusion that integrity and hard work truly do meet expectations—and often exceed them.

Now, years later, I try to share these lessons with younger colleagues. Success in business isn't about being the smartest person in the room; it's about building relationships, maintaining standards, and always being willing to learn. When you face setbacks, don't get discouraged. Every challenge is an opportunity to demonstrate your resilience. And remember: there's never a good reason to compromise on quality or ethics, no matter how tempting it might be to save time.`,
        wordCount: 380,
        readingTime: 5,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What mistake did the author make early in their career?',
            correctAnswer: 'Cutting corners to finish quickly',
            explanation: 'El autor dice: "I tried to cut corners to finish projects quickly"',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What idiom means "being exactly right about something"?',
            correctAnswer: 'Hit the nail on the head / hitting the nail on the head',
            explanation: 'El texto usa: "hitting the nail on the head"',
            points: 1
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: The author hid problems from clients.',
            correctAnswer: 'False',
            explanation: 'El autor dice que fueron "transparent about the issue"',
            points: 1
          },
          {
            id: 'q18',
            type: 'true-false',
            question: 'According to the text, what builds trust with clients?',
            correctAnswer: 'TrueBeing transparent about issues',
            explanation: 'El texto dice: "This honesty built trust"',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'List THREE idioms or collocations used in the text.',
            correctAnswer: 'go the extra mile, think outside the box, cut corners, hit the nail on the head, back to square one, on the same page, get the ball rolling, break the ice, in the same boat, etc.',
            explanation: 'Hay múltiples expresiones idiomáticas en el texto',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m3-l4-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m3-l4-listening-1.mp3',
        duration: 180,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Podcast: Business English in Practice

Host: Welcome back to Business English in Practice. Today we're discussing common mistakes non-native speakers make with collocations and idioms. Joining me is language expert Dr. Patricia Lee. Patricia, what's the most common mistake you see?

Dr. Lee: Thanks for having me. The most common mistake is directly translating from your native language. For example, many Spanish speakers say "make a photo" instead of "take a photo." Or they might say "tell a presentation" instead of "give a presentation." These are understandable errors, but they can make your English sound unnatural.

Host: Can you elaborate on why collocations matter so much?

Dr. Lee: Absolutely. Native speakers don't think about collocations—they just know them instinctively. When you use the wrong collocation, it doesn't necessarily prevent understanding, but it does mark you as a non-native speaker. If you want to take your English to the next level, mastering collocations is essential.

Host: What about idioms? Should learners focus on them?

Dr. Lee: Here's my advice: learn idioms, but use them carefully. Some idioms are very common in business—like "get the ball rolling" or "on the same page"—and using these naturally can really make you sound more fluent. However, don't try to force too many idioms into your speech. It's better to use a few correctly than to overuse them and sound awkward.

Host: Can you give us an example of a commonly misused idiom?

Dr. Lee: Sure. "Break the ice" is often misused. Some learners use it to mean "start a project," but it specifically means to make people feel more comfortable in a social situation, especially when they first meet. You might break the ice at a party by introducing yourself, but you wouldn't break the ice on a construction project—you'd get the ball rolling instead.

Host: That's a great distinction. What resources do you recommend for learning collocations?

Dr. Lee: Read extensively in English, especially authentic materials like news articles, business reports, or professional blogs. When you encounter a new collocation, write it down with an example sentence. Don't just learn individual words—learn them in context with their natural partners. There are also excellent collocation dictionaries online that can help.

Host: Finally, what's your top tip for improving fluency with collocations and idioms?

Dr. Lee: Practice, practice, practice! Use them in your writing and speaking. Don't be afraid to make mistakes—that's how we learn. And pay attention to feedback. If a native speaker uses a different phrase than you would, ask yourself why. Understanding these patterns will help you internalize collocations more quickly.

Host: Wonderful advice. Thanks so much, Patricia.

Dr. Lee: My pleasure!`,
        questions: [
          {
            id: 'q1',
            type: 'short-answer',
            question: 'What common mistake do Spanish speakers make according to Dr. Lee?',
            correctAnswer: 'Saying "make a photo" instead of "take a photo"',
            explanation: 'Dr. Lee menciona: "many Spanish speakers say \\\'make a photo\\\' instead of \\\'take a photo\\\'"',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'According to Dr. Lee, what is essential for taking your English to the next level?',
            correctAnswer: 'Mastering collocations',
            explanation: 'Dr. Lee dice: "mastering collocations is essential"',
            points: 1
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: Dr. Lee recommends using as many idioms as possible.',
            correctAnswer: 'False',
            explanation: 'Dr. Lee advierte: "don\'t try to force too many idioms into your speech"',
            points: 1
          },
          {
            id: 'q19',
            type: 'fill-blank',
            question: 'What does "break the ice" specifically mean?',
            correctAnswer: 'Make people feel more comfortable socially',
            explanation: 'Dr. Lee explica: "it specifically means to make people feel more comfortable in a social situation"',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'What is Dr. Lee\'s top tip for improving fluency?',
            correctAnswer: 'Practice / practice and don\'t be afraid to make mistakes',
            explanation: 'Su consejo final es: "Practice, practice, practice! ...Don\'t be afraid to make mistakes"',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l4-speaking-1',
        type: 'speaking',
        prompt: 'Describe a professional or academic challenge you faced. Use at least 5 collocations and 3 idiomatic expressions naturally in your response. Speak for 2 minutes.',
        timeLimit: 120,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Collocations: make a decision, face challenges, reach an agreement, take responsibility, gain experience',
          'Idioms: break the ice, on the same page, think outside the box, get the ball rolling, go the extra mile',
          'Use them naturally—don\'t force them',
          'Tell a coherent story',
          'Explain the outcome'
        ],
        targetWords: [
          'make a decision',
          'face challenges',
          'reach an agreement',
          'take responsibility',
          'gain experience',
          'break the ice',
          'on the same page',
          'think outside the box',
          'get the ball rolling',
          'go the extra mile',
          'collocations',
          'idiomatic expressions'
        ],
        expectedResponse: 'A 2-minute narrative about a professional/academic challenge using at least 5 collocations and 3 idioms naturally. Should include: (1) Description of challenge, (2) Natural use of collocations (make a decision, face challenges, reach an agreement, take responsibility, gain experience), (3) Natural integration of 3+ idioms (break the ice, on the same page, think outside the box, get the ball rolling, go the extra mile), (4) Coherent story structure, (5) Clear outcome. Demonstrates advanced vocabulary with natural collocation and idiom use.'
      },
      {
        id: 'b2-m3-l4-writing-1',
        type: 'writing',
        prompt: 'Write an article (180-220 words) titled "Keys to Professional Success". Use at least 8 collocations and 4 idioms from this lesson naturally throughout your article.',
        writingType: 'article',
        minWords: 180,
        maxWords: 220,
        timeLimit: 35,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Integrate collocations and idioms naturally',
          'Don\'t force them—use where appropriate',
          'Focus on clear, coherent advice',
          'Include specific examples',
          'Maintain a professional but accessible tone'
        ]
      },
      {
        id: 'b2-m3-l4-vocabulary-3',
        type: 'vocabulary',
        title: 'Verb + Noun Collocations',
        vocabularySet: [
          { word: 'launch a product', definition: 'introduce a new product to market', example: 'The company will launch a product next month.' },
          { word: 'run a business', definition: 'manage and operate a business', example: 'She runs a successful online business.' },
          { word: 'meet a deadline', definition: 'finish something by a required time', example: 'We need to work overtime to meet the deadline.' },
          { word: 'submit a report', definition: 'formally hand in a report', example: 'Please submit your report by Friday.' },
          { word: 'attend a meeting', definition: 'be present at a meeting', example: 'All managers must attend the meeting.' },
          { word: 'close a deal', definition: 'finalize an agreement', example: 'The sales team closed a major deal yesterday.' },
          { word: 'boost sales', definition: 'increase the number of sales', example: 'The marketing campaign helped boost sales by 30%.' },
          { word: 'conduct research', definition: 'carry out systematic investigation', example: 'Universities conduct research on various topics.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'Which collocation is correct?',
            correctAnswer: 'Falsedo a business',
            explanation: 'Falso. "Run a business" es la colocación estándar para gestionar un negocio.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'The sales team managed to ___ the deal after weeks of negotiation.',
            correctAnswer: 'close',
            explanation: '"Close a deal" significa finalizar un acuerdo.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l4-vocabulary-4',
        type: 'vocabulary',
        title: 'Adjective + Noun Collocations',
        vocabularySet: [
          { word: 'strong candidate', definition: 'highly qualified applicant', example: 'She is a strong candidate for the position.' },
          { word: 'tight deadline', definition: 'deadline with little time to complete', example: 'We\'re working under a tight deadline.' },
          { word: 'keen interest', definition: 'enthusiastic interest', example: 'He has a keen interest in environmental issues.' },
          { word: 'heavy workload', definition: 'large amount of work', example: 'The team is struggling with a heavy workload.' },
          { word: 'viable option', definition: 'practical, workable alternative', example: 'Remote work is a viable option for many companies.' },
          { word: 'fierce competition', definition: 'very strong competition', example: 'There is fierce competition in the smartphone market.' },
          { word: 'solid foundation', definition: 'strong, reliable basis', example: 'Education provides a solid foundation for success.' },
          { word: 'smooth transition', definition: 'easy, problem-free change', example: 'The merger resulted in a smooth transition.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Which adjective collocates with "deadline"?',
            correctAnswer: 'tight',
            explanation: '"Tight deadline" significa un plazo con poco tiempo disponible.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l4-grammar-1',
        type: 'grammar',
        title: 'Collocation Patterns: Make, Do, Have, Take',
        explanation: `Understanding which verb to use with which noun is essential for natural English. Here are common patterns:

**MAKE** - Used for creating, producing, or choices:
- make a decision, make a choice, make a mistake, make progress, make an effort, make money, make a profit, make a difference, make sense, make sure

**DO** - Used for actions, activities, and work:
- do business, do research, do homework, do your best, do a favor, do damage, do harm, do good, do an experiment, do the shopping

**HAVE** - Used for experiences, eating/drinking, and activities:
- have a meeting, have a conversation, have an idea, have difficulty, have experience, have lunch, have a break, have a good time, have a chance

**TAKE** - Used for actions that require effort or time:
- take responsibility, take action, take a break, take a chance, take notes, take time, take a course, take a photo, take a decision (BrE)

Note: Some expressions can use different verbs with slight meaning changes. For example:
- "make a decision" (AmE/BrE) vs. "take a decision" (mainly BrE)
- Both are correct but "make a decision" is more universal`,
        examples: [
          { correct: 'We need to make a decision soon.', incorrect: 'We need to do a decision soon.', rule: 'Use "make" for decisions and choices.' },
          { correct: 'Let\'s do business together.', incorrect: 'Let\'s make business together.', rule: 'Use "do" for business activities.' },
          { correct: 'Can you take a photo of us?', incorrect: 'Can you make a photo of us?', rule: 'Use "take" for photos (not "make" as in some languages).' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'We need to ___ research before launching the product.',
            correctAnswer: 'do',
            explanation: '"Do research" is the correct collocation.',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'The new policy will ___ a big difference.',
            correctAnswer: 'make',
            explanation: '"Make a difference" es la colocación correcta.',
            points: 2
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'Leaders must ___ responsibility for their decisions.',
            correctAnswer: 'take',
            explanation: '"Take responsibility" es la colocación estándar.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l4-error-identification-1',
        type: 'error-identification',
        title: 'Common Collocation Errors',
        sentences: [
          {
            question: 'We need to make business with international partners.',
            error: 'make business',
            correction: 'do business',
            explanation: 'Correct: "do business" (not "make business").',
            points: 1
          },
          {
            question: 'Can you make me a photo with my phone?',
            error: 'make me a photo',
            correction: 'take a photo of me',
            explanation: 'English uses "take a photo" (not "make a photo").',
            points: 1
          },
          {
            question: 'She achieved a big mistake during the presentation.',
            error: 'achieved a big mistake',
            correction: 'made a big mistake',
            explanation: 'Correct: "make a mistake" (not "achieve a mistake").',
            points: 1
          },
          {
            question: 'The manager gave a decision after considering all options.',
            error: 'gave a decision',
            correction: 'made a decision',
            explanation: 'Correct: "make a decision" (not "give a decision").',
            points: 1
          },
          {
            question: 'We must win experience before applying for senior positions.',
            error: 'win experience',
            correction: 'gain experience',
            explanation: 'Correct: "gain experience" (not "win experience").',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l4-sentence-completion-1',
        type: 'sentence-completion',
        title: 'Complete with Collocations',
        sentences: [
          {
            question: 'The company plans to ___ a new product line next quarter.',
            correctAnswer: 'launch',
            acceptableAnswers: ['introduce', 'release'],
            explanation: '"Launch a product" es la colocación más natural.',
            points: 1
          },
          {
            question: 'We need creative thinkers who can ___ outside the box.',
            correctAnswer: 'think',
            explanation: '"Think outside the box" significa pensar creativamente.',
            points: 1
          },
          {
            question: 'The project requires us to work under a very ___ deadline.',
            correctAnswer: 'tight',
            acceptableAnswers: ['strict'],
            explanation: '"Tight deadline" significa un plazo con poco tiempo.',
            points: 1
          },
          {
            question: 'Let\'s ___ the ball rolling on this initiative.',
            correctAnswer: 'get',
            explanation: '"Get the ball rolling" significa comenzar algo.',
            points: 1
          },
          {
            question: 'She always ___ the extra mile for her clients.',
            correctAnswer: 'goes',
            explanation: '"Go the extra mile" significa hacer un esfuerzo adicional.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l4-paraphrasing-1',
        type: 'paraphrasing',
        title: 'Paraphrase Using Idioms',
        pairs: [
          {
            original: 'We need to start this project immediately.',
            paraphrase: 'We need to get the ball rolling on this project.',
            explanation: 'Using the idiom "get the ball rolling" for "start".',
            points: 2
          },
          {
            original: 'She did more than required to help the customer.',
            paraphrase: 'She went the extra mile to help the customer.',
            explanation: 'The idiom "go the extra mile" means doing more than expected.',
            points: 2
          },
          {
            original: 'We need to make sure everyone has the same understanding.',
            paraphrase: 'We need to make sure everyone is on the same page.',
            explanation: '"On the same page" means having the same understanding.',
            points: 2
          },
          {
            original: 'We have to start over from the beginning.',
            paraphrase: 'We\'re back to square one.',
            explanation: '"Back to square one" means starting over.',
            points: 2
          },
          {
            original: 'Your analysis is exactly correct.',
            paraphrase: 'You hit the nail on the head with your analysis.',
            explanation: '"Hit the nail on the head" means being exactly right.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l4-collocation-matching-1',
        type: 'collocation-matching',
        title: 'Match Verb + Noun Collocations',
        pairs: [
          { left: 'make', right: 'a decision', explanation: '"Make a decision" es una colocación estándar.' },
          { left: 'do', right: 'research', explanation: '"Do research" es correcto (no "make research").' },
          { left: 'take', right: 'responsibility', explanation: '"Take responsibility" significa aceptar la responsabilidad.' },
          { left: 'meet', right: 'a deadline', explanation: '"Meet a deadline" significa cumplir con un plazo.' },
          { left: 'reach', right: 'an agreement', explanation: '"Reach an agreement" significa llegar a un acuerdo.' },
          { left: 'gain', right: 'experience', explanation: '"Gain experience" significa adquirir experiencia.' },
          { left: 'face', right: 'challenges', explanation: '"Face challenges" significa enfrentar desafíos.' },
          { left: 'launch', right: 'a product', explanation: '"Launch a product" significa lanzar un producto al mercado.' }
        ],
        points: 8
      },
      {
        id: 'b2-m3-l4-key-word-transformations-1',
        type: 'key-word-transformations',
        title: 'Key Word Transformations: Idioms & Collocations',
        transformations: [
          {
            original: 'We need to begin this project today.',
            keyword: 'BALL',
            transformed: 'We need to get the BALL rolling on this project today.',
            explanation: '"Get the ball rolling" significa comenzar algo.',
            points: 2
          },
          {
            original: 'Don\'t compromise quality to save time.',
            keyword: 'CORNERS',
            transformed: 'Don\'t cut CORNERS on quality to save time.',
            explanation: '"Cut corners" significa hacer algo mal para ahorrar tiempo/dinero.',
            points: 2
          },
          {
            original: 'Your suggestion is exactly right.',
            keyword: 'NAIL',
            transformed: 'You hit the NAIL on the head with your suggestion.',
            explanation: '"Hit the nail on the head" significa acertar exactamente.',
            points: 2
          },
          {
            original: 'We must all have the same understanding before proceeding.',
            keyword: 'PAGE',
            transformed: 'We must all be on the same PAGE before proceeding.',
            explanation: '"On the same page" significa tener el mismo entendimiento.',
            points: 2
          },
          {
            original: 'She always does more than required.',
            keyword: 'MILE',
            transformed: 'She always goes the extra MILE.',
            explanation: '"Go the extra mile" significa hacer un esfuerzo adicional.',
            points: 2
          },
          {
            original: 'We have to start from the beginning again.',
            keyword: 'SQUARE',
            transformed: 'We\'re back to SQUARE one.',
            explanation: '"Back to square one" significa volver a empezar.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l4-word-formation-1',
        type: 'word-formation',
        title: 'Word Formation: Business Nouns',
        sentences: [
          {
            question: 'The ___ (COMPETE) in the market is becoming fiercer.',
            correctAnswer: 'competition',
            baseWord: 'COMPETE',
            explanation: 'Noun form: compete → competition',
            points: 1
          },
          {
            question: 'Successful ___ (NEGOTIATE) requires patience and skill.',
            correctAnswer: 'negotiation',
            baseWord: 'NEGOTIATE',
            explanation: 'Noun form: negotiate → negotiation',
            points: 1
          },
          {
            sentence: 'The company\'s latest product ___ (INTRODUCE) was very successful.',
            correctAnswer: 'introduction',
            baseWord: 'INTRODUCE',
            explanation: 'Noun form: introduce → introduction',
            points: 1
          },
          {
            question: 'Customer ___ (SATISFY) is our top priority.',
            correctAnswer: 'satisfaction',
            baseWord: 'SATISFY',
            explanation: 'Noun form: satisfy → satisfaction',
            points: 1
          },
          {
            question: 'The ___ (COLLABORATE) between the two teams was excellent.',
            correctAnswer: 'collaboration',
            baseWord: 'COLLABORATE',
            explanation: 'Noun form: collaborate → collaboration',
            points: 1
          },
          {
            question: 'We need to improve our ___ (COMMUNICATE) with clients.',
            correctAnswer: 'communication',
            baseWord: 'COMMUNICATE',
            explanation: 'Noun form: communicate → communication',
            points: 1
          },
          {
            question: 'The ___ (EXPAND) of the business required significant investment.',
            correctAnswer: 'expansion',
            baseWord: 'EXPAND',
            explanation: 'Noun form: expand → expansion',
            points: 1
          },
          {
            question: 'His ___ (ACHIEVE) in sales are impressive.',
            correctAnswer: 'achievements',
            baseWord: 'ACHIEVE',
            explanation: 'Noun form (plural): achieve → achievements',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l4-gap-fill-1',
        type: 'gap-fill',
        title: 'Gap-Fill: Business Meeting',
        text: `Good morning, everyone. Let's get the (1)___ rolling. As you know, we need to (2)___ a decision about the product launch strategy. I know we're working under a (3)___ deadline, but we can't (4)___ corners on quality.

Last week, we (5)___ research with our target customers, and the results were fascinating. There's (6)___ competition in this market, but I believe we have a (7)___ candidate for success if we (8)___ outside the box.

Sarah, you really (9)___ the nail on the head when you suggested focusing on sustainability. That's what sets us apart. We need to (10)___ awareness about our eco-friendly approach and make sure all stakeholders are on the same (11)___.

To (12)___ our goals, everyone needs to go the (13)___ mile. Let's (14)___ an agreement on the timeline today, and then we can (15)___ the product next quarter. Are there any questions?`,
        answers: [
          { number: 1, answer: 'ball', acceptableAnswers: [] },
          { number: 2, answer: 'make', acceptableAnswers: ['take'] },
          { number: 3, answer: 'tight', acceptableAnswers: [] },
          { number: 4, answer: 'cut', acceptableAnswers: [] },
          { number: 5, answer: 'conducted', acceptableAnswers: ['did'] },
          { number: 6, answer: 'fierce', acceptableAnswers: ['strong', 'heavy'] },
          { number: 7, answer: 'strong', acceptableAnswers: ['good', 'solid'] },
          { number: 8, answer: 'think', acceptableAnswers: [] },
          { number: 9, answer: 'hit', acceptableAnswers: [] },
          { number: 10, answer: 'raise', acceptableAnswers: ['boost', 'increase'] },
          { number: 11, answer: 'page', acceptableAnswers: [] },
          { number: 12, answer: 'achieve', acceptableAnswers: ['reach', 'meet'] },
          { number: 13, answer: 'extra', acceptableAnswers: [] },
          { number: 14, answer: 'reach', acceptableAnswers: [] },
          { number: 15, answer: 'launch', acceptableAnswers: ['introduce', 'release'] }
        ],
        points: 15
      },
      {
        id: 'b2-m3-l4-pronunciation-1',
        type: 'pronunciation',
        title: 'Word Stress in Business Collocations',
        words: [
          { word: 'collaboration', phonetic: '/kəˌlæb.əˈreɪ.ʃən/', stressPattern: 'col-LAB-or-AY-shun', syllables: 5, stressedSyllable: 4 },
          { word: 'negotiation', phonetic: '/nɪˌɡəʊ.ʃiˈeɪ.ʃən/', stressPattern: 'ne-GO-ti-AY-shun', syllables: 5, stressedSyllable: 4 },
          { word: 'competition', phonetic: '/ˌkɒm.pəˈtɪʃ.ən/', stressPattern: 'com-pe-TI-shun', syllables: 4, stressedSyllable: 3 },
          { word: 'responsibility', phonetic: '/rɪˌspɒn.səˈbɪl.ə.ti/', stressPattern: 're-spon-si-BIL-i-ty', syllables: 6, stressedSyllable: 4 },
          { word: 'achievement', phonetic: '/əˈtʃiːv.mənt/', stressPattern: 'a-CHEEVE-ment', syllables: 3, stressedSyllable: 2 },
          { word: 'satisfaction', phonetic: '/ˌsæt.ɪsˈfæk.ʃən/', stressPattern: 'sat-is-FAC-shun', syllables: 4, stressedSyllable: 3 }
        ],
        instructions: 'Listen and repeat, paying attention to which syllable receives primary stress.'
      },
      {
        id: 'b2-m3-l4-sentence-reordering-1',
        type: 'sentence-reordering',
        title: 'Organize a Business Proposal',
        sentences: [
          { id: 1, text: 'I\'d like to propose a new marketing strategy for our product.', position: 1 },
          { id: 2, text: 'First, we need to conduct thorough market research to understand our target audience.', position: 2 },
          { id: 3, text: 'This research will help us identify gaps in the competition.', position: 3 },
          { id: 4, text: 'Next, we should think outside the box and develop creative campaigns.', position: 4 },
          { id: 5, text: 'We\'ll need to work under tight deadlines, but we can\'t cut corners on quality.', position: 5 },
          { id: 6, text: 'Everyone will need to go the extra mile to make this successful.', position: 6 },
          { id: 7, text: 'If we all take responsibility and stay on the same page, we can achieve our goals.', position: 7 },
          { id: 8, text: 'Let\'s get the ball rolling by meeting next week to finalize the plan.', position: 8 }
        ],
        instruction: 'Arrange these sentences to create a logical business proposal.',
        points: 8
      },
      {
        id: 'b2-m3-l4-speaking-2',
        type: 'speaking',
        prompt: 'Give advice to someone starting their first job. Use at least 5 business collocations and 3 idioms naturally. Speak for 90 seconds.',
        timeLimit: 90,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Collocations: gain experience, face challenges, make mistakes, take responsibility, meet expectations',
          'Idioms: think outside the box, go the extra mile, on the same page, break the ice',
          'Give specific, practical advice',
          'Use personal examples if possible',
          'Be encouraging and supportive in tone'
        ],
        targetWords: [
          'gain experience',
          'face challenges',
          'make mistakes',
          'take responsibility',
          'meet expectations',
          'think outside the box',
          'go the extra mile',
          'on the same page',
          'break the ice',
          'practical advice',
          'first job'
        ],
        expectedResponse: 'A 90-second advice piece for someone starting their first job using 5+ business collocations and 3+ idioms naturally. Should include: (1) Practical, specific advice, (2) Business collocations (gain experience, face challenges, make mistakes, take responsibility, meet expectations), (3) Natural idiom use (think outside the box, go the extra mile, on the same page, break the ice), (4) Personal examples if applicable, (5) Encouraging, supportive tone. Demonstrates ability to give professional advice using advanced business vocabulary naturally.'
      },
      {
        id: 'b2-m3-l4-integrated-reading-1',
        type: 'reading',
        title: 'Integrated Reading & Writing: Mastering Business English',
        text: `One of the most challenging aspects of learning Business English is mastering collocations—those natural word combinations that native speakers use instinctively but non-native speakers often struggle with. You can have excellent grammar and a large vocabulary, but if you say "do a mistake" instead of "make a mistake," you immediately mark yourself as a non-native speaker.

Why do collocations matter so much in business contexts? The answer lies in credibility and efficiency. When you use natural collocations, you sound more professional and confident. Conversely, incorrect collocations can distract your listeners and undermine your message, even if your ideas are excellent. In negotiations, presentations, or client meetings, this perception matters enormously.

Consider the difference between these sentences: "We need to do research on customer preferences" versus "We need to conduct research on customer preferences." Both convey the same basic meaning, but "conduct research" is the standard academic and business collocation. Using "do research" isn't wrong—native speakers use it in casual conversation—but "conduct" signals formality and professionalism.

The same principle applies to idioms. Business English contains many idiomatic expressions that add color and impact to communication. Phrases like "think outside the box," "get the ball rolling," and "on the same page" are so common in business contexts that avoiding them entirely can make your English sound overly formal or robotic. However, the key is using them appropriately and not forcing them into every sentence.

Research suggests that the best way to learn collocations is through extensive reading and listening in authentic contexts. When you encounter a new collocation, notice the pattern. Does this verb typically go with this noun? Is this adjective commonly paired with this noun? Creating your own collocation notebook—organized by verb, noun, or theme—can help you internalize these patterns.

Practice is equally essential. Don't be afraid to use new collocations and idioms in speaking and writing. Yes, you might make mistakes initially, but that's how learning happens. Native speakers will often correct you naturally in conversation, providing valuable feedback. Pay attention to how they phrase things differently from you.

Finally, be patient with yourself. Native speakers have been absorbing these patterns since childhood. You're learning them consciously as an adult, which requires time and repeated exposure. However, the investment pays dividends. Once you master common business collocations and idioms, you'll find that your English becomes not just more accurate, but more fluent and natural-sounding. You'll spend less mental energy searching for the right word combinations and more energy focusing on your message and your audience—which is exactly where your attention should be in any business communication.`,
        wordCount: 420,
        readingTime: 5,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'According to the text, why do collocations matter in business?',
            correctAnswer: 'They affect credibility and efficiency',
            explanation: 'The text states: "The answer lies in credibility and efficiency".',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What is the difference between "do research" and "conduct research"?',
            correctAnswer: '"Conduct research" is more formal and professional; "do research" is more casual',
            explanation: 'Explained in paragraph 3.',
            points: 2
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: The text recommends avoiding all idioms in business English.',
            correctAnswer: 'False',
            explanation: 'The text says avoiding them "can make your English sound overly formal or robotic".',
            points: 2
          },
          {
            id: 'q20',
            type: 'short-answer',
            question: 'What does the text recommend for learning collocations?',
            correctAnswer: 'Extensive reading and listening in authentic contexts',
            explanation: 'Stated in paragraph 5: "the best way to learn collocations is through extensive reading and listening".',
            points: 3
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'According to the text, what should you do when you make collocation mistakes?',
            correctAnswer: 'Don\'t be afraid to make mistakes; that\'s how learning happens / Pay attention to corrections',
            explanation: 'The text encourages making mistakes as part of learning.',
            points: 2
          },
          {
            id: 'q6',
            type: 'writing',
            writingPrompt: 'Write a paragraph (100-130 words) describing your own experience learning collocations and idioms in English. What challenges have you faced? What strategies have helped you? Use at least 4 collocations or idioms from this lesson.',
            rubric: {
              content: 30,
              organization: 25,
              grammar: 20,
              vocabulary: 25
            },
            minWords: 100,
            maxWords: 130,
            explanation: 'This integrated task assesses your ability to reflect on the reading and apply vocabulary from the lesson.',
            points: 10
          }
        ]
      }
    ]
  },
  
  // LECCIÓN 5: Business Communication & Negotiation
  {
    id: 'b2-m3-l5',
    title: 'Lección 5: Comunicación Empresarial y Negociación',
    description: 'Desarrolla habilidades para comunicar efectivamente en entornos empresariales',
    duration: 90,
    objectives: [
      'Usar lenguaje diplomático en negociaciones',
      'Expresar desacuerdo de forma profesional',
      'Hacer propuestas y contraargumentos efectivos',
      'Redactar comunicaciones empresariales claras'
    ],
    exercises: [
      {
        id: 'b2-m3-l5-vocabulary-1',
        type: 'vocabulary',
        title: 'Diplomatic & Negotiation Language',
        vocabularySet: [
          { word: 'I see your point, but...', definition: 'acknowledge someone\'s view before disagreeing', example: 'I see your point, but I think we should consider other options.' },
          { word: 'I\'m afraid...', definition: 'polite way to deliver bad news', example: 'I\'m afraid we can\'t meet that deadline.' },
          { word: 'Would it be possible to...?', definition: 'polite request or suggestion', example: 'Would it be possible to extend the deadline by one week?' },
          { word: 'I\'d like to propose...', definition: 'formal way to make a suggestion', example: 'I\'d like to propose an alternative solution.' },
          { word: 'If I understand correctly...', definition: 'check understanding politely', example: 'If I understand correctly, you\'re suggesting we delay the launch?' },
          { word: 'That\'s a fair point', definition: 'acknowledge validity of someone\'s argument', example: 'That\'s a fair point. Let me consider it.' },
          { word: 'Could we explore...?', definition: 'suggest considering an option', example: 'Could we explore other pricing models?' },
          { word: 'I appreciate your concern, however...', definition: 'acknowledge concern before presenting different view', example: 'I appreciate your concern, however, I believe the benefits outweigh the risks.' },
          { word: 'Let\'s find a middle ground', definition: 'suggest compromise', example: 'We have different views. Let\'s find a middle ground.' },
          { word: 'Would you be willing to...?', definition: 'polite way to ask for concession', example: 'Would you be willing to reduce the price by 10%?' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Which is the MOST diplomatic way to disagree?',
            correctAnswer: 'I see your point, but...',
            explanation: 'Esta frase reconoce la opinión del otro antes de expresar desacuerdo',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete the polite request: "___ possible to have the report by Friday?"',
            correctAnswer: 'Would it be',
            explanation: '"Would it be possible to..." es una forma cortés de hacer peticiones',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What phrase means "suggest a compromise"?',
            correctAnswer: 'Find a middle ground / Let\'s find a middle ground',
            explanation: '"Find a middle ground" significa encontrar un compromiso',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l5-reading-1',
        type: 'reading',
        title: 'Reading: Negotiation Email Exchange',
        text: `Email 1 - From: Sarah Chen, Buyer
To: Mark Thompson, Supplier
Subject: Re: Pricing Proposal

Dear Mark,

Thank you for your detailed proposal. I appreciate the time and effort you've put into this.

If I understand correctly, you're proposing a 5% increase in unit prices, citing rising material costs. I see your point, and I recognize that input costs have indeed risen across the industry. However, I'm afraid this increase presents challenges for our budget.

Would it be possible to explore alternative solutions? For instance, could we discuss extending our contract term in exchange for maintaining current prices? Alternatively, if we increase our order volume by 20%, would you be willing to reconsider the price increase?

I'd like to propose a meeting next week to discuss this further. I'm confident we can find a middle ground that works for both parties.

Looking forward to your response.

Best regards,
Sarah

Email 2 - From: Mark Thompson
To: Sarah Chen
Subject: Re: Pricing Proposal

Dear Sarah,

Thank you for your prompt response. I appreciate your perspective on this matter.

You make a fair point about budget constraints. I'd certainly like to find a solution that maintains our strong business relationship.

Regarding your suggestions, I've discussed them with my team. While I'm afraid we cannot maintain current prices without adjustment, I'd like to propose a compromise. If you commit to a 20% volume increase as mentioned, we could reduce the price increase from 5% to 2.5%. Additionally, we could offer more flexible payment terms—extending from 30 to 45 days.

Could we explore this option? I believe it addresses both our concerns: you get more manageable pricing, and we secure larger volumes to offset our costs.

I'm available for a meeting next Tuesday or Thursday. Would either of those days work for you?

Best regards,
Mark

Email 3 - From: Sarah Chen
To: Mark Thompson
Subject: Re: Pricing Proposal

Dear Mark,

Thank you for being so accommodating. Your counter-proposal is very reasonable.

I've reviewed the terms with my finance team. A 2.5% increase with extended payment terms would be acceptable, provided we can confirm the 20% volume commitment. That's a fair point about needing volume to justify lower margins.

However, could we include a clause that allows us to review pricing again in 12 months rather than 18? Given market volatility, this would provide both parties with more flexibility.

If you're willing to consider this adjustment, I believe we have a deal.

Tuesday afternoon works perfectly for me. Shall we say 2 PM at your office?

Best regards,
Sarah`,
        wordCount: 420,
        readingTime: 5,
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'What is Mark\\',
            correctAnswer: 'True5% price increase',
            explanation: 'Sarah menciona en el primer email: "you\\\'re proposing a 5% increase"',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What compromise does Mark propose?',
            correctAnswer: '2.5% increase with 20% volume increase and extended payment terms',
            explanation: 'Mark propone: "reduce the price increase from 5% to 2.5%...20% volume increase...extending from 30 to 45 days"',
            points: 2
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: Sarah immediately accepts Mark\'s first proposal.',
            correctAnswer: 'False',
            explanation: 'Sarah primero expresa preocupación y propone alternativas antes de aceptar',
            points: 1
          },
          {
            id: 'q21',
            type: 'short-answer',
            question: 'What additional clause does Sarah request?',
            correctAnswer: 'Price review in 12 months instead of 18',
            explanation: 'Sarah pide: "review pricing again in 12 months rather than 18"',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'List THREE diplomatic phrases used in these emails.',
            correctAnswer: 'I see your point, I\'m afraid, Would it be possible, I appreciate, That\'s a fair point, Could we explore, If I understand correctly, etc.',
            explanation: 'Los emails usan múltiples expresiones diplomáticas',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m3-l5-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m3-l5-listening-1.mp3',
        duration: 220,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Business Negotiation Meeting

James (Project Manager): Thank you all for joining today's meeting. As you know, we need to finalize the budget for the new marketing campaign. Let's start with the main points of contention. Emma, would you like to present the creative team's position?

Emma (Creative Director): Certainly. We believe the campaign needs a budget of $500,000 to be effective. This includes video production, social media advertising, and influencer partnerships. If I understand correctly, finance is proposing we reduce this to $350,000. However, I'm afraid that with such a reduction, we simply cannot deliver the quality and reach we need.

Michael (Finance Director): I appreciate your concern, Emma, and I recognize the creative team's expertise. However, we need to be realistic about our financial constraints. Let me explain our position. We have other priorities this quarter, including technology upgrades and expanding our sales team. Would it be possible to achieve your goals with a phased approach? Perhaps we start with $350,000 for the initial phase and evaluate results before committing additional funds?

Emma: I see your point, Michael, but the issue is that marketing campaigns need momentum. A phased approach might actually cost us more in the long run because we'd lose the compounding effect of a concentrated effort.

James: These are both valid concerns. Could we explore a middle ground? Emma, what if we prioritize the channels that give us the best return on investment? Which elements of your plan are absolutely essential, and which could we potentially postpone?

Emma: That's a fair point. Well, video production is critical—that's where we build brand awareness. We could potentially reduce the influencer budget by selecting fewer, more targeted partnerships. That might save us... maybe $75,000?

Michael: I'd like to propose something. What if we approved $400,000? That's a $50,000 increase from our initial position. In return, would you be willing to provide weekly performance reports so we can track ROI closely?

Emma: That's closer to what we need. However, weekly reports might be excessive and would take time away from execution. Could we compromise on bi-weekly reports for the first month, then monthly thereafter once we've established that the campaign is performing?

Michael: I appreciate your willingness to be flexible. Bi-weekly initially makes sense. But I'd like to add one condition: if after the first month the metrics aren't meeting targets, we need to review whether to continue at that budget level.

Emma: I can agree to that, provided we define those targets clearly upfront so there's no ambiguity.

James: This sounds like we're making progress. So, to summarize: $400,000 budget, bi-weekly reports for the first month then monthly, and clearly defined performance targets with a review point at one month. Does that work for everyone?

Emma: Yes, I can work with that.

Michael: Agreed. Let's document these terms and move forward.

James: Excellent. Thank you both for being so collaborative. This is a good example of finding solutions that address everyone's needs.`,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What is Emma\\?',
            correctAnswer: '$500,000',
            explanation: 'Emma dice: "We believe the campaign needs a budget of $500,000"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'What is Michael\\',
            correctAnswer: 'False$350',
            explanation: 'Falso. Emma menciona: "finance is proposing we reduce this to $350,000"',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What final budget do they agree on?',
            correctAnswer: '$400,000',
            explanation: 'Michael propone y acuerdan: "$400,000"',
            points: 1
          },
          {
            id: 'q22',
            type: 'fill-blank',
            question: 'What reporting schedule do they agree on?',
            correctAnswer: 'Bi-weekly for first month, then monthly',
            explanation: 'Emma propone y acuerdan: "Bi-weekly initially...then monthly thereafter"',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'What condition does Michael add to the agreement?',
            correctAnswer: 'Review budget if metrics aren\'t meeting targets after first month',
            explanation: 'Michael dice: "if after the first month the metrics aren\'t meeting targets, we need to review"',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l5-speaking-1',
        type: 'speaking',
        prompt: 'You are negotiating with a supplier who wants to increase prices. Use diplomatic language to: 1) acknowledge their concerns, 2) explain your constraints, 3) propose an alternative solution, 4) suggest a compromise. Speak for 2 minutes.',
        timeLimit: 120,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Start: "I appreciate/understand your position..."',
          'Explain: "However, I\'m afraid..."',
          'Propose: "Would it be possible to...?" or "I\'d like to propose..."',
          'Compromise: "Could we find a middle ground...?"',
          'Use diplomatic phrases throughout'
        ],
        targetWords: [
          'I appreciate',
          'I understand your position',
          'however',
          'I\'m afraid',
          'would it be possible',
          'I\'d like to propose',
          'could we find',
          'middle ground',
          'diplomatic language',
          'negotiate',
          'compromise',
          'alternative solution'
        ],
        expectedResponse: 'A 2-minute negotiation dialogue with a supplier using diplomatic language. Should include: (1) Acknowledgment of supplier concerns ("I appreciate/understand your position..."), (2) Explanation of your constraints ("However, I\'m afraid..."), (3) Alternative solution proposal ("Would it be possible to...?", "I\'d like to propose..."), (4) Compromise suggestion ("Could we find a middle ground...?"), (5) Diplomatic tone throughout. Demonstrates professional negotiation skills with tactful, solution-oriented language.'
      },
      {
        id: 'b2-m3-l5-writing-1',
        type: 'writing',
        prompt: 'Write a formal email (180-220 words) to a business partner explaining why you cannot accept their proposal, but offering an alternative solution. Use diplomatic language throughout.',
        writingType: 'email',
        minWords: 180,
        maxWords: 220,
        timeLimit: 35,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Start with appreciation',
          'Acknowledge their viewpoint',
          'Explain your constraints diplomatically',
          'Offer concrete alternatives',
          'End positively, suggesting next steps',
          'Maintain professional, respectful tone throughout'
        ]
      },

      {
        id: 'b2-m3-l5-vocabulary-2',
        type: 'vocabulary',
        title: 'Negotiation Phrases & Tactics',
        vocabularySet: [
          { word: 'make concessions', definition: 'agree to give up something in negotiation', example: 'Both parties will need to make concessions to reach an agreement.' },
          { word: 'leverage', definition: 'power to influence a situation', example: 'Our large order gives us leverage in price negotiations.' },
          { word: 'bottom line', definition: 'the minimum acceptable terms', example: 'Our bottom line is a 10% discount—we can\'t accept less.' },
          { word: 'walk away', definition: 'end negotiations without agreement', example: 'If they won\'t budge on price, we may need to walk away.' },
          { word: 'win-win situation', definition: 'outcome beneficial to all parties', example: 'Let\'s find a win-win situation where everyone benefits.' },
          { word: 'bargaining chip', definition: 'something used to gain advantage in negotiation', example: 'Our exclusive technology is a strong bargaining chip.' },
          { word: 'common ground', definition: 'shared interests or positions', example: 'Let\'s focus on areas where we have common ground.' },
          { word: 'standoff', definition: 'deadlock where neither side will compromise', example: 'We\'ve reached a standoff on delivery terms.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'What does "bottom line" mean in negotiations?',
            correctAnswer: 'TrueThe minimum acceptable terms',
            explanation: '"Bottom line" significa los términos mínimos aceptables en una negociación',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Both sides will need to make ___ to reach a deal.',
            correctAnswer: 'concessions',
            explanation: '"Make concessions" significa ceder en algo durante la negociación',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What do you call a situation where both parties benefit?',
            correctAnswer: 'A win-win situation / win-win',
            explanation: '"Win-win situation" es cuando ambas partes se benefician',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l5-vocabulary-3',
        type: 'vocabulary',
        title: 'Meeting Language',
        vocabularySet: [
          { word: 'call to order', definition: 'formally begin a meeting', example: 'Let\'s call this meeting to order.' },
          { word: 'move on to', definition: 'proceed to the next topic', example: 'Let\'s move on to the budget discussion.' },
          { word: 'take the floor', definition: 'begin speaking at a meeting', example: 'I\'d like to take the floor to address this issue.' },
          { word: 'table a discussion', definition: 'postpone a topic (US: propose for discussion)', example: 'Let\'s table this discussion until next week.' },
          { word: 'reach a consensus', definition: 'achieve general agreement', example: 'We need to reach a consensus before we proceed.' },
          { word: 'action items', definition: 'tasks to be completed after the meeting', example: 'Let\'s review the action items before we finish.' },
          { word: 'take minutes', definition: 'record what is said in a meeting', example: 'Sarah will take minutes today.' },
          { word: 'adjourn', definition: 'formally end a meeting', example: 'If there\'s no other business, we\'ll adjourn.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What does it mean to "take the floor"?',
            correctAnswer: 'Begin speaking at a meeting',
            explanation: '"Take the floor" significa tomar la palabra en una reunión',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Let\'s ___ this meeting to order.',
            correctAnswer: 'call',
            explanation: '"Call to order" es la expresión para iniciar formalmente una reunión',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What are tasks to be completed after a meeting called?',
            correctAnswer: 'Action items',
            explanation: '"Action items" son las tareas a completar después de una reunión',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l5-grammar-1',
        type: 'grammar',
        title: 'Expressing Disagreement Politely',
        explanation: `In professional contexts, disagreeing politely is crucial for maintaining relationships. Here are key strategies:

**1. Acknowledge First, Then Disagree**
- "I see your point, but/however..."
- "That's a fair point, although..."
- "I understand what you're saying, yet..."

**2. Use Softening Language**
- Modal verbs: "might", "could", "may"
  ✗ "That is wrong"
  ✓ "That might not be entirely accurate"

**3. Use Tentative Language**
- "I tend to think that..."
- "It seems to me that..."
- "I'm inclined to believe..."

**4. Ask Questions Rather Than State**
- ✗ "Your analysis is incorrect"
- ✓ "Have you considered alternative interpretations?"

**5. Use "I'm afraid" for Bad News**
- "I'm afraid I can't agree with that"
- "I'm afraid we have different views on this"

**6. Offer Alternatives**
- "I see it differently. What if we..."
- "I'd like to propose an alternative approach"

**Example Dialogue:**
A: "We should launch next month."
B: ✗ "No, that's a terrible idea."
B: ✓ "I see your point about timing. However, I'm concerned that we might not be ready. Could we explore launching in two months instead?"`,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Which is the MOST polite way to disagree?',
            correctAnswer: 'I see your point, however...',
            explanation: 'Esta frase reconoce primero el punto de vista antes de expresar desacuerdo',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Rewrite politely: "Your data is wrong." Start with: "I\'m afraid..."',
            correctAnswer: 'I\'m afraid there might be some issues with the data / I\'m afraid the data might not be accurate',
            explanation: 'Usar "I\'m afraid" y lenguaje suavizado hace el desacuerdo más cortés',
            points: 2
          },
          {
            id: 'q22',
            type: 'short-answer',
            question: 'Which modal verb is best for softening disagreement?',
            correctAnswer: 'might',
            explanation: '"Might" es tentativo y suaviza el desacuerdo de manera cortés',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l5-error-identification-1',
        type: 'error-identification',
        title: 'Common Business Communication Errors',
        sentences: [
          {
            question: 'I am not agree with your proposal.',
            error: 'am not agree',
            correction: 'do not agree / don\'t agree',
            explanation: '"Agree" es un verbo regular que necesita auxiliar "do/does" para negación'
          },
          {
            question: 'Would you mind to review the contract?',
            error: 'to review',
            correction: 'reviewing',
            explanation: '"Mind" se sigue de gerundio (-ing), no infinitivo'
          },
          {
            question: 'I am looking forward to hear from you.',
            error: 'to hear',
            correction: 'to hearing / hearing',
            explanation: '"Look forward to" se sigue de gerundio porque "to" es preposición, no infinitivo'
          },
          {
            question: 'We need discuss this matter urgently.',
            error: 'need discuss',
            correction: 'need to discuss',
            explanation: '"Need" como verbo principal requiere "to" antes del infinitivo'
          },
          {
            question: 'I suggest to postpone the meeting.',
            error: 'to postpone',
            correction: 'postponing / that we postpone',
            explanation: '"Suggest" se sigue de gerundio o "that + clause", no infinitivo directo'
          }
        ],
        instructions: 'Identify and correct the errors in these business communication sentences.',
        points: 2
      },
      {
        id: 'b2-m3-l5-gap-fill-1',
        type: 'gap-fill',
        title: 'Complete Diplomatic Phrases',
        sentences: [
          {
            question: 'I ___ your concern about the timeline, however, I believe we can manage it.',
            correctAnswer: 'appreciate',
            acceptableAnswers: ['understand', 'recognize', 'acknowledge'],
            explanation: 'Estas palabras muestran reconocimiento de la preocupación del otro',
            points: 1
          },
          {
            question: 'Would it be ___ to extend the deadline by one week?',
            correctAnswer: 'possible',
            explanation: '"Would it be possible to..." es una forma cortés de hacer peticiones',
            points: 1
          },
          {
            sentence: 'I\'m ___ we can\'t accept those terms.',
            correctAnswer: 'afraid',
            explanation: '"I\'m afraid" suaviza las malas noticias de manera cortés',
            points: 1
          },
          {
            sentence: 'Let\'s try to find a ___ ground on this issue.',
            correctAnswer: 'middle',
            acceptableAnswers: ['common'],
            explanation: '"Middle ground" o "common ground" significan área de acuerdo',
            points: 1
          },
          {
            question: 'Would you be ___ to consider our alternative proposal?',
            correctAnswer: 'willing',
            acceptableAnswers: ['prepared', 'open'],
            explanation: '"Willing to" es una forma cortés de preguntar si alguien consideraría algo',
            points: 1
          }
        ],
        instructions: 'Complete each sentence with the appropriate word to make it diplomatic and professional.'
      },
      {
        id: 'b2-m3-l5-paraphrase-1',
        type: 'paraphrase',
        title: 'Paraphrase with Diplomatic Language',
        sentences: [
          {
            original: 'You\'re wrong about the figures.',
            paraphrase: 'I\'m afraid there might be some discrepancies in the figures.',
            explanation: 'Usar "I\'m afraid" y lenguaje tentativo es más diplomático'
          },
          {
            original: 'We can\'t do that.',
            paraphrase: 'I\'m afraid that might not be feasible / Would it be possible to explore alternatives?',
            explanation: 'Explicar imposibilidad con lenguaje suave y ofrecer alternativas'
          },
          {
            original: 'Your idea is bad.',
            paraphrase: 'I see your point, however, I have some concerns about that approach.',
            explanation: 'Reconocer primero, luego expresar preocupaciones en lugar de juicios'
          },
          {
            original: 'Give us a better price.',
            paraphrase: 'Would you be willing to reconsider the pricing? / Could we discuss more competitive pricing?',
            explanation: 'Usar preguntas corteses en lugar de demandas directas'
          },
          {
            original: 'That won\'t work.',
            paraphrase: 'I\'m concerned that approach might present some challenges.',
            explanation: 'Expresar preocupación en lugar de rechazo directo'
          }
        ],
        instructions: 'Compare the direct statements with their diplomatic equivalents. Notice how professional language softens the message.',
        points: 2
      },
      {
        id: 'b2-m3-l5-matching-1',
        type: 'matching',
        title: 'Business Communication Collocations',
        pairs: [
          { left: 'reach an', right: 'agreement', explanation: '"Reach an agreement" = llegar a un acuerdo' },
          { left: 'make a', right: 'proposal', explanation: '"Make a proposal" = hacer una propuesta' },
          { left: 'raise a', right: 'concern', explanation: '"Raise a concern" = plantear una preocupación' },
          { left: 'address an', right: 'issue', explanation: '"Address an issue" = abordar un problema' },
          { left: 'clarify a', right: 'point', explanation: '"Clarify a point" = aclarar un punto' },
          { left: 'express', right: 'reservations', explanation: '"Express reservations" = expresar dudas/reservas' },
          { left: 'seek', right: 'consensus', explanation: '"Seek consensus" = buscar consenso' },
          { left: 'take into', right: 'account', explanation: '"Take into account" = tener en cuenta' }
        ],
        instructions: 'Match the verbs/phrases on the left with their correct collocations on the right.',
        points: 1
      },
      {
        id: 'b2-m3-l5-transformations-1',
        type: 'key-word-transformation',
        title: 'Key Word Transformations - Business Communication',
        instructions: 'Complete the second sentence so it has a similar meaning to the first, using the word given. Use between 2-5 words.',
        questions: [
          {
            firstSentence: 'I suggest we postpone the meeting.',
            keyWord: 'PROPOSE',
            secondSentence: 'I _______ the meeting.',
            correctAnswer: 'propose postponing / propose that we postpone',
            acceptableAnswers: ['propose we postpone'],
            explanation: '"Propose" puede ir seguido de gerundio o "that + clause"',
            points: 2
          },
          {
            firstSentence: 'Thank you for your feedback on our proposal.',
            keyWord: 'APPRECIATE',
            secondSentence: 'I _______ on our proposal.',
            correctAnswer: 'appreciate your feedback',
            explanation: '"Appreciate" significa agradecer o valorar algo',
            points: 2
          },
          {
            firstSentence: 'Can you consider our alternative offer?',
            keyWord: 'WILLING',
            secondSentence: 'Would _______ our alternative offer?',
            correctAnswer: 'you be willing to consider',
            explanation: '"Would you be willing to" es una forma muy cortés de pedir',
            points: 2
          },
          {
            firstSentence: 'Does waiting until Monday bother you?',
            keyWord: 'MIND',
            secondSentence: 'Would _______ until Monday?',
            correctAnswer: 'you mind waiting',
            explanation: '"Would you mind + -ing" es una pregunta cortés',
            points: 2
          },
          {
            firstSentence: 'We should find a compromise.',
            keyWord: 'GROUND',
            secondSentence: 'We should find _______ .',
            correctAnswer: 'a middle ground / some common ground',
            explanation: '"Middle ground" o "common ground" significan compromiso/acuerdo',
            points: 2
          },
          {
            firstSentence: 'Unfortunately, we cannot accept those terms.',
            keyWord: 'AFRAID',
            secondSentence: '_______ accept those terms.',
            correctAnswer: 'I\'m afraid we cannot / I\'m afraid we can\'t',
            explanation: '"I\'m afraid" suaviza las malas noticias',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l5-word-formation-1',
        type: 'word-formation',
        title: 'Word Formation: Business Communication Nouns',
        instructions: 'Form nouns from the words in brackets to complete the sentences.',
        questions: [
          {
            question: 'The ___ (NEGOTIATE) lasted for three hours before we reached a deal.',
            correctAnswer: 'negotiation',
            explanation: 'negotiate → negotiation (sustantivo)',
            points: 1
          },
          {
            question: 'We need more ___ (CLEAR) on the contract terms.',
            correctAnswer: 'clarity',
            acceptableAnswers: ['clarification'],
            explanation: 'clear → clarity / clarify → clarification',
            points: 1
          },
          {
            question: 'The ___ (PROPOSE) was well-received by the board.',
            correctAnswer: 'proposal',
            explanation: 'propose → proposal',
            points: 1
          },
          {
            question: 'Your ___ (FLEXIBLE) on pricing is much appreciated.',
            correctAnswer: 'flexibility',
            explanation: 'flexible → flexibility',
            points: 1
          },
          {
            question: 'We value your ___ (COMMIT) to quality.',
            correctAnswer: 'commitment',
            explanation: 'commit → commitment',
            points: 1
          },
          {
            question: 'The ___ (COMMUNICATE) breakdown led to misunderstandings.',
            correctAnswer: 'communication',
            explanation: 'communicate → communication',
            points: 1
          },
          {
            question: 'Both parties showed ___ (WILLING) to compromise.',
            correctAnswer: 'willingness',
            explanation: 'willing → willingness',
            points: 1
          },
          {
            question: 'The ___ (RESOLVE) of the conflict took several meetings.',
            correctAnswer: 'resolution',
            explanation: 'resolve → resolution',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l5-extended-gap-fill-1',
        type: 'extended-gap-fill',
        title: 'Gap-Fill: Contract Negotiation',
        text: 'Good morning, everyone. Thank you for joining today\'s negotiation session. I (1)___ your willingness to meet on such short notice. As we all know, we need to (2)___ an agreement on the new supplier contract by the end of this week. Let me (3)___ the key points that remain unresolved. First, there\'s the question of pricing. I (4)___ your concerns about the proposed price increase, however, we need to (5)___ into account the rising costs of raw materials. Would it be (6)___ to explore a tiered pricing structure instead? This could provide more (7)___ for both parties. Second, regarding delivery schedules, I (8)___ we can\'t commit to the 48-hour delivery you\'re requesting. Our current capacity won\'t allow it. However, I\'d like to (9)___ a compromise: we could guarantee 72-hour delivery, with the option to expedite for an additional fee. I believe this is a fair (10)___ that addresses both our operational constraints and your need for timely delivery. Finally, on payment terms, I see your (11)___ about cash flow, but extending to 90 days would create significant challenges for us. Could we find a (12)___ ground at 60 days? If you\'re (13)___ to commit to a higher order volume, we might be able to offer more favorable payment terms. I\'m (14)___ that if we can\'t reach consensus on these three points today, we may need to (15)___ this discussion to next week, which would delay the entire project. So let\'s work together to find solutions that work for everyone. What are your thoughts?',
        gaps: [
          { id: 1, correctAnswer: 'appreciate', acceptableAnswers: ['value', 'welcome'], explanation: 'Expresión de gratitud formal' },
          { id: 2, correctAnswer: 'reach', explanation: '"Reach an agreement" es la colocación correcta' },
          { id: 3, correctAnswer: 'outline', acceptableAnswers: ['summarize', 'review'], explanation: 'Presentar los puntos principales' },
          { id: 4, correctAnswer: 'understand', acceptableAnswers: ['appreciate', 'recognize', 'acknowledge'], explanation: 'Reconocer las preocupaciones del otro' },
          { id: 5, correctAnswer: 'take', explanation: '"Take into account" significa considerar' },
          { id: 6, correctAnswer: 'possible', explanation: '"Would it be possible" es una petición cortés' },
          { id: 7, correctAnswer: 'flexibility', explanation: 'Sustantivo que describe adaptabilidad' },
          { id: 8, correctAnswer: 'afraid', explanation: '"I\'m afraid" suaviza las malas noticias' },
          { id: 9, correctAnswer: 'propose', acceptableAnswers: ['suggest', 'offer'], explanation: 'Hacer una propuesta formal' },
          { id: 10, correctAnswer: 'solution', acceptableAnswers: ['compromise', 'proposal'], explanation: 'Una solución que satisface ambas partes' },
          { id: 11, correctAnswer: 'point', acceptableAnswers: ['concern', 'position'], explanation: '"See your point" reconoce el argumento' },
          { id: 12, correctAnswer: 'middle', acceptableAnswers: ['common'], explanation: '"Middle ground" = punto medio de compromiso' },
          { id: 13, correctAnswer: 'willing', acceptableAnswers: ['prepared'], explanation: '"Willing to" = dispuesto a' },
          { id: 14, correctAnswer: 'concerned', acceptableAnswers: ['worried', 'afraid'], explanation: 'Expresar preocupación profesionalmente' },
          { id: 15, correctAnswer: 'table', acceptableAnswers: ['postpone', 'defer'], explanation: '"Table a discussion" = posponer' }
        ],
        instructions: 'Complete the negotiation dialogue with appropriate business communication vocabulary.',
        points: 15
      },
      {
        id: 'b2-m3-l5-sentence-ordering-1',
        type: 'sentence-ordering',
        title: 'Organize a Professional Email',
        sentences: [
          'I am writing to discuss the recent proposal you submitted regarding the partnership agreement.',
          'Thank you for taking the time to meet with us last week.',
          'However, I do have some concerns about the timeline you\'ve proposed.',
          'I appreciate the effort you\'ve put into this comprehensive proposal.',
          'Would it be possible to schedule a call next week to discuss this further?',
          'I\'m confident that if we can address these points, we\'ll have a solid foundation for moving forward.',
          'Would you be willing to consider extending the implementation period from 6 to 9 months?',
          'I look forward to hearing from you soon.'
        ],
        correctOrder: [1, 0, 3, 2, 6, 4, 5, 7],
        explanation: 'Un email profesional debe seguir: saludo/referencia → propósito → reconocimiento positivo → expresar preocupaciones → proponer soluciones → sugerir próximos pasos → cierre optimista → despedida',
        instructions: 'Arrange the sentences to create a well-structured professional email.',
        points: 8
      },
      {
        id: 'b2-m3-l5-pronunciation-1',
        type: 'pronunciation',
        title: 'Word Stress in Business Communication',
        words: [
          {
            word: 'negotiation',
            ipa: '/nɪˌɡəʊ.ʃiˈeɪ.ʃən/',
            stressPattern: 'ne-go-ti-A-tion',
            audioUrl: '/audio/negotiation.mp3',
            tips: 'Stress on 4th syllable "-A-"'
          },
          {
            word: 'compromise',
            ipa: '/ˈkɒm.prə.maɪz/',
            stressPattern: 'COM-pro-mise',
            audioUrl: '/audio/compromise.mp3',
            tips: 'Stress on 1st syllable "COM-"'
          },
          {
            word: 'diplomatic',
            ipa: '/ˌdɪp.ləˈmæt.ɪk/',
            stressPattern: 'dip-lo-MAT-ic',
            audioUrl: '/audio/diplomatic.mp3',
            tips: 'Stress on 3rd syllable "-MAT-"'
          },
          {
            word: 'proposal',
            ipa: '/prəˈpəʊ.zəl/',
            stressPattern: 'pro-PO-sal',
            audioUrl: '/audio/proposal.mp3',
            tips: 'Stress on 2nd syllable "-PO-"'
          },
          {
            word: 'collaborate',
            ipa: '/kəˈlæb.ə.reɪt/',
            stressPattern: 'co-LAB-o-rate',
            audioUrl: '/audio/collaborate.mp3',
            tips: 'Stress on 2nd syllable "-LAB-"'
          },
          {
            word: 'flexibility',
            ipa: '/ˌflek.sɪˈbɪl.ə.ti/',
            stressPattern: 'flex-i-BIL-i-ty',
            audioUrl: '/audio/flexibility.mp3',
            tips: 'Stress on 3rd syllable "-BIL-"'
          }
        ],
        instructions: 'Practice the correct stress patterns in these business communication terms.',
        practiceType: 'stress-identification'
      },
      {
        id: 'b2-m3-l5-speaking-2',
        type: 'speaking',
        prompt: 'Your team has proposed a new project, but your manager has serious objections about the budget and timeline. Handle the objections diplomatically by: 1) acknowledging their concerns, 2) explaining your reasoning, 3) offering compromises, 4) seeking common ground. Speak for 90 seconds.',
        timeLimit: 90,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Acknowledge: "I completely understand your concerns about..."',
          'Explain: "The reason we proposed this timeline is..."',
          'Compromise: "Would you be willing to consider..." / "What if we..."',
          'Seek agreement: "Could we find a middle ground..." / "I believe we can..."',
          'Use diplomatic phrases throughout'
        ],
        targetWords: [
          'I completely understand',
          'your concerns about',
          'the reason we proposed',
          'would you be willing to',
          'what if we',
          'could we find',
          'middle ground',
          'I believe we can',
          'diplomatic phrases',
          'handle objections',
          'compromises',
          'common ground'
        ],
        expectedResponse: 'A 90-second response handling manager objections to a project proposal using diplomatic language. Should include: (1) Acknowledgment of concerns ("I completely understand your concerns about..."), (2) Clear reasoning ("The reason we proposed this timeline is..."), (3) Compromise offers ("Would you be willing to consider...", "What if we..."), (4) Seeking agreement ("Could we find a middle ground...", "I believe we can..."), (5) Diplomatic tone throughout. Demonstrates ability to handle professional objections tactfully while maintaining project advocacy.'
      },
      {
        id: 'b2-m3-l5-integrated-1',
        type: 'integrated-reading-writing',
        title: 'Integrated Task: Effective Negotiation Strategies',
        readingText: `The Art of Successful Business Negotiation

Negotiation is a fundamental skill in business, yet many professionals approach it with anxiety or aggression rather than strategic thinking. Understanding the psychology and tactics of effective negotiation can transform challenging discussions into mutually beneficial agreements.

**Preparation is Paramount**
The most successful negotiators invest significant time in preparation before entering discussions. This means researching the other party's needs, constraints, and alternatives. Understanding your BATNA (Best Alternative To a Negotiated Agreement) gives you confidence and clarity about when to walk away. Equally important is understanding the other party's BATNA, which reveals their leverage and pressure points.

**Build Rapport First**
Rushing into numbers and terms is a common mistake. Effective negotiators spend time building rapport and establishing trust. This might involve small talk, finding common ground, or sharing a meal. When people feel comfortable and respected, they're more likely to be flexible and creative in finding solutions. Research shows that negotiators who invest time in relationship-building achieve 12% better outcomes on average.

**Focus on Interests, Not Positions**
A position is what someone says they want; an interest is why they want it. For example, a supplier might demand a 20% price increase (position), but their real interest might be covering rising costs and maintaining profitability. By focusing on underlying interests, negotiators can find creative solutions that satisfy both parties' true needs. Perhaps a longer contract term or larger order volume could address the supplier's profitability concerns without a dramatic price increase.

**Use Objective Criteria**
Emotion-driven negotiations rarely end well. Successful negotiators anchor discussions in objective criteria: market rates, industry standards, precedents, or expert opinions. When disagreements arise, referring to external standards depersonalizes the conflict. Instead of "You're asking too much," you can say, "Based on industry benchmarks, the typical rate for this service is..."

**Make Strategic Concessions**
Concessions are inevitable in negotiation, but how you make them matters enormously. Never make the first concession too quickly or easily—it signals weakness and sets a precedent. When you do concede something, always request something in return, even if it's small. This maintains balance and prevents the other party from viewing concessions as entitlements. Also, make concessions progressively smaller: if your first concession is 10%, the next should be 5%, then 2%, signaling you're approaching your limit.

**Master the Pause**
Silence is one of the most powerful tools in negotiation. When presented with an offer or objection, resist the urge to respond immediately. A pause demonstrates thoughtful consideration and often prompts the other party to fill the silence with additional information or concessions. Many negotiators have watched in amazement as their counterpart, uncomfortable with silence, talks themselves into a better deal for them.

**Know When to Walk Away**
Not every negotiation should end in agreement. If the terms don't meet your minimum requirements or the other party is negotiating in bad faith, walking away preserves your resources for better opportunities. However, always leave the door open for future discussions. Today's impossible negotiation might become tomorrow's great deal if circumstances change.

**The Win-Win Mindset**
While competitive negotiation has its place, collaborative approaches typically create more value. Instead of viewing negotiation as a fixed pie to be divided, skilled negotiators look for ways to expand the pie through creative problem-solving. This requires genuine curiosity about the other party's needs and a willingness to share information. Studies consistently show that integrative, win-win negotiations produce higher satisfaction and stronger long-term business relationships than purely competitive approaches.

Effective negotiation isn't about domination or manipulation—it's about strategic communication, preparation, and creating value. By developing these skills, professionals can transform potential conflicts into opportunities for mutually beneficial partnerships.`,
        wordCount: 610,
        readingTime: 7,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What does BATNA stand for?',
            correctAnswer: 'Best Alternative To a Negotiated Agreement',
            explanation: 'El texto define BATNA como "Best Alternative To a Negotiated Agreement"',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'According to research mentioned, how much better are outcomes when negotiators build rapport?',
            correctAnswer: '12% better',
            explanation: 'El texto dice: "negotiators who invest time in relationship-building achieve 12% better outcomes"',
            points: 2
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What is the difference between a "position" and an "interest" in negotiation?',
            correctAnswer: 'A position is what someone says they want, an interest is why they want it',
            explanation: 'El texto explica: "A position is what someone says they want; an interest is why they want it"',
            points: 2
          },
          {
            id: 'q4',
            type: 'true-false',
            question: 'True or False: You should make your first concession quickly to show goodwill.',
            correctAnswer: 'False',
            explanation: 'El texto dice: "Never make the first concession too quickly or easily—it signals weakness"',
            points: 1
          },
          {
            id: 'q7',
            type: 'fill-blank',
            question: 'Why is silence described as powerful in negotiation?',
            correctAnswer: 'It often prompts the other party to provide more information',
            explanation: 'El texto explica: "often prompts the other party to fill the silence with additional information or concessions"',
            points: 1
          },
          {
            id: 'q6',
            type: 'essay',
            question: 'Based on the article, write a short paragraph (120-150 words) describing the three most important strategies for successful negotiation and explain why you think they are important.',
            rubric: {
              content: 40,
              organization: 20,
              grammar: 20,
              vocabulary: 20
            },
            minWords: 120,
            maxWords: 150,
            points: 10
          }
        ]
      }
    ]
  },
  
  // LECCIÓN 6: Module 3 & Final Mock Exam
  {
    id: 'b2-m3-l6',
    title: 'Lección 6: Examen Final Completo - B2 First (FCE)',
    description: 'Examen de práctica completo simulando el examen B2 First real',
    duration: 210,
    objectives: [
      'Practicar las 4 habilidades en formato de examen real',
      'Gestionar tiempo efectivamente en cada sección',
      'Evaluar preparación completa para el B2 First',
      'Identificar últimas áreas de mejora'
    ],
    exercises: [
      {
        id: 'b2-m3-l6-reading-1',
        type: 'reading',
        title: 'Final Mock Exam - Reading & Use of English',
        text: `The Rise of Remote Work: A Global Transformation

The COVID-19 pandemic accelerated a trend that had been gradually developing for years: remote work. What began as an emergency measure has evolved into a fundamental shift in how we think about employment and workplace culture. According to recent studies, approximately 16% of companies globally are now fully remote, while hybrid models have become the norm for many others.

This transformation brings both opportunities and challenges. On one hand, remote work offers employees unprecedented flexibility. Workers can design their schedules around personal commitments, eliminate commuting time, and even relocate to more affordable areas without changing jobs. Companies benefit from access to global talent pools, reduced office costs, and often report increased productivity from employees working in environments they've optimized for themselves.

However, the shift isn't without drawbacks. Many workers report feeling isolated and struggling to maintain work-life boundaries when their home doubles as their office. Team cohesion can suffer when colleagues never meet face-to-face, and spontaneous collaboration—the kind that happens around the office water cooler—becomes more difficult to facilitate. Additionally, not all jobs can be performed remotely, creating a divide between those who have flexible work options and those who don't.

Organizations are responding by developing new strategies for remote team management. Regular video check-ins, virtual social events, and collaboration tools like Slack and Microsoft Teams have become essential. Some companies have adopted "asynchronous" communication, where employees can respond to messages on their own schedule rather than expecting immediate replies. This approach respects different time zones and work styles but requires clear documentation and communication protocols.

The future likely lies in hybrid models that combine remote flexibility with periodic in-person collaboration. Many experts predict that offices won't disappear but will transform into spaces for meetings, team-building, and collaborative projects rather than individual work. This evolution requires companies to rethink everything from real estate strategies to performance evaluation methods.

For employees, succeeding in this new landscape means developing different skills. Self-motivation, time management, and written communication become more critical when you're not in a traditional office setting. The ability to collaborate effectively across digital platforms is now as important as any technical skill.

The remote work revolution represents more than just a change in where we work—it's a fundamental reconsideration of what work means in our lives. As technology continues to evolve and social attitudes shift, we're likely to see further innovations in how we structure our professional lives. The challenge for both organizations and individuals is to adapt thoughtfully, preserving the benefits of flexibility while maintaining human connection and organizational culture.`,
        wordCount: 425,
        readingTime: 5,
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'What percentage of companies are now fully remote according to the text?',
            correctAnswer: 'False6%',
            explanation: 'Falso. El texto dice: "approximately 16% of companies globally are now fully remote"',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'Name TWO benefits of remote work for employees mentioned in the text.',
            correctAnswer: 'Flexibility, eliminate commuting, relocate to affordable areas, design own schedule, optimized environment',
            explanation: 'El texto menciona múltiples beneficios para empleados',
            points: 2
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: All workers feel positive about remote work.',
            correctAnswer: 'False',
            explanation: 'El texto menciona problemas: "Many workers report feeling isolated"',
            points: 1
          },
          {
            id: 'q23',
            type: 'short-answer',
            question: 'What does "asynchronous communication" mean according to the text?',
            correctAnswer: 'Responding on own schedule',
            explanation: 'El texto explica: "employees can respond to messages on their own schedule"',
            points: 3
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'According to experts, what will offices become in the future?',
            correctAnswer: 'Spaces for meetings, team-building, and collaborative projects rather than individual work',
            explanation: 'El texto predice: "offices will...transform into spaces for meetings, team-building, and collaborative projects"',
            points: 2
          },
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Which skills are mentioned as critical for remote work success?',
            correctAnswer: 'Self-motivation and time management',
            explanation: 'El texto menciona: "Self-motivation, time management, and written communication"',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l6-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m3-l6-listening-final.mp3',
        duration: 300,
        allowReplay: true,
        maxReplays: 2,
        transcript: `Final Mock Listening Exam - Full Interview

[This would be a complete 5-minute interview covering multiple topics from the course, testing all listening skills comprehensively]

Interviewer: Welcome to "Future of Education." Today I'm speaking with Dr. Rachel Martinez, who's been researching innovative teaching methods. Dr. Martinez, what changes are you seeing in education?

Dr. Martinez: Thank you for having me. The most significant shift we're witnessing is personalized learning. Traditional education operated on a one-size-fits-all model, but we now understand that students learn at different paces and through different modalities. Technology is enabling us to customize educational experiences in ways that were impossible before.

[Interview continues with comprehensive content covering education, technology, challenges, solutions, and future predictions...]`,
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'What is the most significant shift in education according to Dr. Martinez?',
            correctAnswer: 'TruePersonalized learning',
            explanation: 'Dr. Martinez dice: "The most significant shift...is personalized learning"',
            points: 1
          }
          // Additional comprehensive questions would continue...
        ]
      },
      {
        id: 'b2-m3-l6-speaking-1',
        type: 'speaking',
        prompt: 'FINAL SPEAKING EXAM - Part 1: Personal Questions (1 min), Part 2: Long Turn - Describe a photo/situation (2 mins), Part 3: Discussion - Express and justify opinions on a topic (3-4 mins). Total: 6-7 minutes.',
        timeLimit: 420,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Part 1: Answer naturally about yourself',
          'Part 2: Describe in detail, speculate, give opinions',
          'Part 3: Express opinions, agree/disagree diplomatically, provide examples',
          'Use full range of B2 grammar structures',
          'Demonstrate wide vocabulary and idioms'
        ],
        targetWords: [
          'personal questions',
          'describe in detail',
          'speculate',
          'give opinions',
          'express opinions',
          'agree/disagree diplomatically',
          'provide examples',
          'B2 grammar structures',
          'wide vocabulary',
          'idioms',
          'long turn',
          'discussion'
        ],
        expectedResponse: 'A 6-7 minute comprehensive final speaking exam with three parts. Part 1 (1 min): Natural answers to personal questions showing ability to talk about self, experiences, and opinions. Part 2 (2 min): Detailed photo/situation description with speculation (\"This might be...\", \"It appears that...\") and opinions. Part 3 (3-4 min): Extended discussion expressing and justifying opinions, agreeing/disagreeing diplomatically, providing concrete examples. Must demonstrate: (1) Full range of B2 grammar (conditionals, passive, reported speech, relative clauses, etc.), (2) Wide vocabulary including collocations and idioms, (3) Natural fluency and pronunciation, (4) Ability to sustain extended discourse. Demonstrates complete B2 speaking proficiency across all skills from Module 3.'
      },
      {
        id: 'b2-m3-l6-writing-1',
        type: 'writing',
        prompt: 'FINAL WRITING EXAM - Choose ONE: 1) Write an essay (220-260 words) discussing advantages and disadvantages of social media, OR 2) Write a formal letter (220-260 words) applying for a scholarship program. Use appropriate register, clear organization, and complex grammar.',
        writingType: 'essay',
        minWords: 220,
        maxWords: 260,
        timeLimit: 45,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Plan before writing (5 mins)',
          'Clear introduction with thesis',
          'Well-developed body paragraphs',
          'Use linking words effectively',
          'Strong conclusion',
          'Demonstrate full range of B2 structures',
          'Check grammar and spelling (5 mins)'
        ]
      },

      {
        id: 'b2-m3-l6-open-cloze-1',
        type: 'open-cloze',
        title: 'Mock Exam - Open Cloze (Part 2)',
        text: `The concept of work-life balance has evolved significantly (1)_____ recent decades. What was once viewed (2)_____ a simple matter of not working too many hours has become a complex discussion about mental health, productivity, and personal fulfillment. Many employees now prioritize flexibility and autonomy (3)_____ traditional markers of success like salary or job title. This shift has forced companies to rethink (4)_____ policies and culture. Remote work, flexible hours, and unlimited vacation policies have moved (5)_____ being perks to expectations, especially among younger workers. However, achieving genuine balance remains challenging. The boundaries between work and personal life have become increasingly blurred, particularly (6)_____ those who work from home. Technology, while enabling flexibility, also means we're never truly disconnected (7)_____ work. The key to success may lie not in achieving perfect balance—which may be impossible—but in finding an arrangement (8)_____ works for individual circumstances and values.`,
        gaps: [
          { id: 1, correctAnswer: 'in', explanation: '"In recent decades" es la preposición correcta con períodos de tiempo' },
          { id: 2, correctAnswer: 'as', explanation: '"Viewed as" significa considerado como' },
          { id: 3, correctAnswer: 'over', explanation: '"Prioritize X over Y" significa preferir X sobre Y' },
          { id: 4, correctAnswer: 'their', explanation: 'Pronombre posesivo refiriéndose a "companies"' },
          { id: 5, correctAnswer: 'from', explanation: '"Move from X to Y" indica transición' },
          { id: 6, correctAnswer: 'for', explanation: '"Particularly for" introduce un grupo específico' },
          { id: 7, correctAnswer: 'from', explanation: '"Disconnected from" es la preposición correcta' },
          { id: 8, correctAnswer: 'that / which', explanation: 'Pronombre relativo introduciendo cláusula descriptiva' }
        ],
        instructions: 'Fill each gap with ONE word only.',
        points: 8
      },
      {
        id: 'b2-m3-l6-word-formation-2',
        type: 'word-formation',
        title: 'Mock Exam - Word Formation (Part 3)',
        instructions: 'Use the word given in capitals to form a word that fits in the gap.',
        questions: [
          {
            question: 'The company\'s ___ (DECIDE) to expand internationally proved highly successful.',
            correctAnswer: 'decision',
            explanation: 'decide → decision',
            points: 1
          },
          {
            question: 'Her ___ (KNOW) of three languages made her an ideal candidate.',
            correctAnswer: 'knowledge',
            explanation: 'know → knowledge',
            points: 1
          },
          {
            question: 'The ___ (ENVIRONMENT) impact of plastic waste is becoming increasingly serious.',
            correctAnswer: 'environmental',
            explanation: 'environment → environmental (adjetivo)',
            points: 1
          },
          {
            question: 'Scientists have made a ___ (REMARK) discovery in cancer research.',
            correctAnswer: 'remarkable',
            explanation: 'remark → remarkable (adjetivo)',
            points: 1
          },
          {
            question: 'The ___ (INTRODUCE) of new technology revolutionized the industry.',
            correctAnswer: 'introduction',
            explanation: 'introduce → introduction',
            points: 1
          },
          {
            question: 'He spoke ___ (PASSION) about the need for educational reform.',
            correctAnswer: 'passionately',
            explanation: 'passion → passionately (adverbio)',
            points: 1
          },
          {
            question: 'The museum\'s collection is ___ (TRUE) impressive.',
            correctAnswer: 'truly',
            explanation: 'true → truly (adverbio)',
            points: 1
          },
          {
            question: 'Regular exercise can ___ (STRENGTH) your immune system.',
            correctAnswer: 'strengthen',
            explanation: 'strength → strengthen (verbo)',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l6-transformations-1',
        type: 'key-word-transformation',
        title: 'Mock Exam - Key Word Transformations (Part 4)',
        instructions: 'Complete the second sentence so it has a similar meaning to the first, using the word given. Use between 2-5 words.',
        questions: [
          {
            firstSentence: 'They made me wait for two hours.',
            keyWord: 'KEPT',
            secondSentence: 'I _______ for two hours.',
            correctAnswer: 'was kept waiting',
            explanation: 'Estructura pasiva con "keep + -ing"',
            points: 2
          },
          {
            firstSentence: 'It wasn\'t necessary for you to bring a gift.',
            keyWord: 'HAVE',
            secondSentence: 'You _______ a gift.',
            correctAnswer: 'didn\'t have to bring / needn\'t have brought',
            explanation: 'Expresar falta de necesidad en pasado',
            points: 2
          },
          {
            firstSentence: 'Sarah said, "I will help you tomorrow."',
            keyWord: 'PROMISED',
            secondSentence: 'Sarah _______ the next day.',
            correctAnswer: 'promised to help me',
            explanation: 'Reported speech con "promise"',
            points: 2
          },
          {
            firstSentence: 'The concert was cancelled due to bad weather.',
            keyWord: 'CALLED',
            secondSentence: 'They _______ due to bad weather.',
            correctAnswer: 'called off the concert / called the concert off',
            explanation: '"Call off" es el phrasal verb para cancelar',
            points: 2
          },
          {
            firstSentence: 'I haven\'t seen John for three months.',
            keyWord: 'LAST',
            secondSentence: 'The _______ three months ago.',
            correctAnswer: 'last time I saw John was',
            explanation: 'Reformular usando "the last time"',
            points: 2
          },
          {
            firstSentence: 'Despite studying hard, he failed the exam.',
            keyWord: 'ALTHOUGH',
            secondSentence: '_______ he failed the exam.',
            correctAnswer: 'Although he studied hard',
            explanation: 'Convertir "despite + -ing" a "although + clause"',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l6-reading-2',
        type: 'reading',
        title: 'Mock Exam - Multiple Matching Reading',
        text: `Four People Talk About Career Changes

**Anna (Marketing Manager → Teacher)**
When I left my corporate marketing job to become a primary school teacher, everyone thought I was crazy. I had a prestigious position, excellent salary, and clear career progression. But I felt empty. Every presentation, every campaign felt meaningless. Now, watching children's faces light up when they understand something new gives me a sense of purpose I never experienced in marketing. Yes, I earn significantly less, but I've never been happier. The work is exhausting, don't get me wrong, but it's fulfilling exhaustion rather than soul-draining stress.

**Marcus (Lawyer → Chef)**
After fifteen years practicing corporate law, I was successful but miserable. The long hours, the aggressive competitive environment, the constant pressure—it was destroying me. I'd always loved cooking; it was my escape from stress. Eventually, I took the plunge and enrolled in culinary school. My family was shocked, and my income took a massive hit initially. Now I run a small restaurant. The hours are still long, possibly longer than before, but the satisfaction of creating something with my hands, of making people happy with food I've prepared—there's no comparison to shuffling papers and arguing cases.

**Sophie (Engineer → Photographer)**
Engineering provided stability and financial security for twelve years, but it never sparked passion in me. Photography was my hobby, my creative outlet. When a photograph I took went viral and led to several commissions, I saw an opportunity. The transition wasn't easy—freelance photography is unpredictable, and there were months when I barely made rent. But gradually, I built a client base. What I love most is the variety. One day I'm shooting a wedding, the next a corporate event, then perhaps nature photography for a magazine. Every day is different, which my predictable engineering job never offered.

**David (Financial Analyst → Yoga Instructor)**
Numbers were my life for twenty years. I was good at financial analysis, worked for top firms, earned well. But I was also anxious, overweight, and unhappy. I discovered yoga during a particularly stressful period, and it transformed me. Not overnight—that's a myth—but gradually, systematically. Eventually, I trained as an instructor. The pay is a fraction of what I earned before, and I had to drastically simplify my lifestyle. But my health has improved dramatically, I sleep better, and I've found a community of like-minded people. I help others find the peace I found, and that's worth more than any paycheck.`,
        wordCount: 410,
        readingTime: 5,
        questions: [
          {
            id: 'q1',
            type: 'matching',
            question: 'Who mentions that their new career involves physical creation?',
            correctAnswer: 'Marcus',
            explanation: 'Marcus menciona "creating something with my hands"',
            points: 1
          },
          {
            id: 'q2',
            type: 'matching',
            question: 'Who had the longest career before changing?',
            correctAnswer: 'David',
            explanation: 'David trabajó 20 años, más que los otros',
            points: 1
          },
          {
            id: 'q3',
            type: 'matching',
            question: 'Who emphasizes variety in their new job?',
            correctAnswer: 'Sophie',
            explanation: 'Sophie dice: "What I love most is the variety...Every day is different"',
            points: 1
          },
          {
            id: 'q4',
            type: 'matching',
            question: 'Who experienced financial difficulties during the transition?',
            correctAnswer: 'Sophie',
            explanation: 'Sophie menciona: "there were months when I barely made rent"',
            points: 1
          },
          {
            id: 'q5',
            type: 'matching',
            question: 'Who mentions a sense of purpose they lacked before?',
            correctAnswer: 'Anna',
            explanation: 'Anna dice: "gives me a sense of purpose I never experienced in marketing"',
            points: 1
          },
          {
            id: 'q6',
            type: 'matching',
            question: 'Who still works long hours but is more satisfied?',
            correctAnswer: 'Marcus',
            explanation: 'Marcus: "The hours are still long, possibly longer than before, but the satisfaction..."',
            points: 1
          },
          {
            id: 'q7',
            type: 'matching',
            question: 'Who mentions improved health as a benefit?',
            correctAnswer: 'David',
            explanation: 'David: "my health has improved dramatically, I sleep better"',
            points: 1
          },
          {
            id: 'q8',
            type: 'matching',
            question: 'Who turned a hobby into a profession?',
            correctAnswer: 'Sophie',
            explanation: 'Sophie: "Photography was my hobby...I saw an opportunity"',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l6-vocabulary-1',
        type: 'vocabulary',
        title: 'Review: Advanced Academic Vocabulary',
        vocabularySet: [
          { word: 'comprehensive', definition: 'complete and including everything necessary', example: 'We need a comprehensive review of all policies.' },
          { word: 'facilitate', definition: 'make an action or process easier', example: 'Technology can facilitate communication between teams.' },
          { word: 'substantial', definition: 'of considerable importance, size, or worth', example: 'The company made substantial investments in research.' },
          { word: 'demonstrate', definition: 'clearly show the existence or truth of something', example: 'The study demonstrates the benefits of regular exercise.' },
          { word: 'implement', definition: 'put a decision or plan into effect', example: 'We need to implement these changes immediately.' },
          { word: 'significant', definition: 'sufficiently great or important to be worthy of attention', example: 'There has been a significant improvement in results.' },
          { word: 'analyze', definition: 'examine in detail to discover meaning', example: 'We must analyze the data carefully before drawing conclusions.' },
          { word: 'contemporary', definition: 'belonging to or occurring in the present', example: 'Contemporary art challenges traditional boundaries.' },
          { word: 'subsequent', definition: 'coming after something in time', example: 'The initial meeting and subsequent discussions were productive.' },
          { word: 'preliminary', definition: 'denoting an action or event preceding something more important', example: 'These are just preliminary findings; more research is needed.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What does "facilitate" mean?',
            correctAnswer: 'Make easier',
            explanation: '"Facilitate" significa hacer más fácil o facilitar',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'The results show a ___ improvement in performance.',
            correctAnswer: 'significant',
            acceptableAnswers: ['substantial'],
            explanation: '"Significant" o "substantial" describen mejoras importantes',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What word means "belonging to the present time"?',
            correctAnswer: 'contemporary',
            explanation: '"Contemporary" significa contemporáneo o actual',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l6-vocabulary-2',
        type: 'vocabulary',
        title: 'Review: Business Collocations',
        vocabularySet: [
          { word: 'meet a deadline', definition: 'complete work by a specified time', example: 'We need to work overtime to meet the deadline.' },
          { word: 'launch a product', definition: 'introduce a new product to the market', example: 'The company will launch its new product next month.' },
          { word: 'close a deal', definition: 'successfully complete a business agreement', example: 'After weeks of negotiation, we finally closed the deal.' },
          { word: 'boost sales', definition: 'increase the number of products sold', example: 'The marketing campaign helped boost sales by 30%.' },
          { word: 'cut costs', definition: 'reduce expenses', example: 'The company needs to cut costs to remain profitable.' },
          { word: 'meet expectations', definition: 'achieve what was hoped for or anticipated', example: 'The product failed to meet customer expectations.' },
          { word: 'face competition', definition: 'deal with rival companies', example: 'Small businesses face fierce competition from large corporations.' },
          { word: 'secure funding', definition: 'obtain financial backing', example: 'The startup secured funding from several investors.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'true-false',
            question: 'Which verb goes with "deadline"?',
            correctAnswer: 'Truemeet',
            explanation: 'La colocación correcta es "meet a deadline"',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'We need to ___ costs to increase profits.',
            correctAnswer: 'cut',
            acceptableAnswers: ['reduce'],
            explanation: '"Cut costs" es la colocación más común, aunque "reduce" también es aceptable',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What collocation means "successfully complete a business agreement"?',
            correctAnswer: 'close a deal',
            explanation: '"Close a deal" significa cerrar un trato',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l6-vocabulary-3',
        type: 'vocabulary',
        title: 'Review: Phrasal Verbs - Business Context',
        vocabularySet: [
          { word: 'carry out', definition: 'perform or conduct', example: 'We need to carry out a thorough investigation.' },
          { word: 'set up', definition: 'establish or create', example: 'She set up her own business last year.' },
          { word: 'take on', definition: 'accept responsibility or hire', example: 'The company is taking on new employees.' },
          { word: 'come up with', definition: 'think of or produce an idea', example: 'We need to come up with a solution quickly.' },
          { word: 'look into', definition: 'investigate', example: 'I\'ll look into the problem and get back to you.' },
          { word: 'turn down', definition: 'reject or refuse', example: 'She turned down the job offer.' },
          { word: 'put off', definition: 'postpone', example: 'We had to put off the meeting until next week.' },
          { word: 'bring up', definition: 'mention or introduce a topic', example: 'He brought up some important issues during the meeting.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What does "carry out" mean?',
            correctAnswer: 'Perform',
            explanation: '"Carry out" significa realizar o llevar a cabo',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'We need to ___ ___ a creative solution.',
            correctAnswer: 'come up with',
            explanation: '"Come up with" significa idear o proponer',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What phrasal verb means "postpone"?',
            correctAnswer: 'put off',
            explanation: '"Put off" significa posponer',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l6-grammar-1',
        type: 'grammar',
        title: 'Review: Mixed Grammar - B2 Level',
        explanation: `This exercise tests your knowledge of key B2 grammar structures:

**Conditionals:**
- Mixed conditionals combine different time frames
- Example: "If I had studied harder (past), I would be a doctor now (present)"

**Passive Voice:**
- Focus on action rather than doer
- Example: "The building was designed by a famous architect"

**Reported Speech:**
- Backshift tenses when reporting
- Example: "She said she was tired" (original: "I am tired")

**Perfect Tenses:**
- Present Perfect: actions with present relevance
- Past Perfect: actions before other past actions

**Modal Verbs:**
- Speculation: must/might/could/can't have done
- Deduction about past: "He must have forgotten"`,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'If I _____ about the meeting, I would have attended.',
            correctAnswer: 'had known',
            explanation: 'Third conditional requiere "had + past participle" en la condición',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'The report _____ by the end of the week.',
            correctAnswer: 'will be completed',
            explanation: 'Voz pasiva futura: will be + past participle',
            points: 2
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'She told me that she _____ to London the previous year.',
            correctAnswer: 'had gone',
            explanation: 'Reported speech con backshift: simple past → past perfect',
            points: 1
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'He _____ have left already. His coat is gone.',
            correctAnswer: 'must',
            explanation: '"Must have" expresa deducción fuerte sobre el pasado',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l6-error-identification-2',
        type: 'error-identification',
        title: 'Common B2 Errors - Final Review',
        sentences: [
          {
            question: 'I have been knowing him for five years.',
            error: 'have been knowing',
            correction: 'have known',
            explanation: '"Know" es un stative verb que no se usa en continuous'
          },
          {
            question: 'Despite of the rain, we went for a walk.',
            error: 'Despite of',
            correction: 'Despite / In spite of',
            explanation: '"Despite" no va seguido de "of"; usa "despite" o "in spite of"'
          },
          {
            question: 'She suggested me to apply for the job.',
            error: 'suggested me to apply',
            correction: 'suggested that I apply / suggested I apply / suggested applying',
            explanation: '"Suggest" no va seguido de objeto + infinitivo'
          },
          {
            question: 'The movie was very bored.',
            error: 'bored',
            correction: 'boring',
            explanation: 'La película es "boring" (aburrida); las personas están "bored"'
          },
          {
            question: 'He asked me where was the station.',
            error: 'where was the station',
            correction: 'where the station was',
            explanation: 'En preguntas indirectas, el orden es sujeto + verbo'
          }
        ],
        instructions: 'Identify and correct the errors - typical B2 exam mistakes.',
        points: 2
      },
      {
        id: 'b2-m3-l6-gap-fill-2',
        type: 'gap-fill',
        title: 'Gap-Fill: Climate Change Action',
        sentences: [
          {
            question: 'Scientists have been warning ___ climate change for decades.',
            correctAnswer: 'about',
            explanation: '"Warn about" es la preposición correcta',
            points: 1
          },
          {
            question: 'Governments need to take ___ action to reduce emissions.',
            correctAnswer: 'immediate',
            acceptableAnswers: ['urgent', 'swift', 'prompt'],
            explanation: 'Adjetivos que expresan urgencia',
            points: 1
          },
          {
            question: 'Renewable energy is ___ increasingly affordable.',
            correctAnswer: 'becoming',
            acceptableAnswers: ['getting'],
            explanation: '"Become/get" para describir cambio de estado',
            points: 1
          },
          {
            question: 'Many species are ___ risk of extinction.',
            correctAnswer: 'at',
            explanation: '"At risk" es la expresión fija',
            points: 1
          },
          {
            question: 'We must reduce our carbon ___ significantly.',
            correctAnswer: 'footprint',
            acceptableAnswers: ['emissions'],
            explanation: '"Carbon footprint" o "carbon emissions" son colocaciones correctas',
            points: 1
          }
        ],
        instructions: 'Complete each sentence with ONE appropriate word.'
      },
      {
        id: 'b2-m3-l6-sentence-ordering-2',
        type: 'sentence-ordering',
        title: 'Organize an Essay Paragraph',
        sentences: [
          'However, this approach has both advantages and disadvantages.',
          'Firstly, online learning offers unprecedented flexibility.',
          'In conclusion, while online education has drawbacks, its benefits are substantial.',
          'Online education has become increasingly popular in recent years.',
          'On the other hand, it can lead to feelings of isolation.',
          'Students can study at their own pace and from any location.',
          'Furthermore, many students miss the face-to-face interaction with teachers.',
          'Additionally, it reduces costs associated with commuting and accommodation.'
        ],
        correctOrder: [3, 0, 1, 5, 7, 4, 6, 2],
        explanation: 'Un párrafo de ensayo bien estructurado: introducción → reconocer ambos lados → ventajas con conectores → desventajas con conectores → conclusión balanceada',
        instructions: 'Arrange the sentences to create a well-structured essay paragraph.',
        points: 8
      },
      {
        id: 'b2-m3-l6-pronunciation-2',
        type: 'pronunciation',
        title: 'Exam-Critical Pronunciation',
        words: [
          {
            word: 'although',
            ipa: '/ɔːlˈðəʊ/',
            stressPattern: 'al-THO',
            audioUrl: '/audio/although.mp3',
            tips: 'Stress on 2nd syllable; "th" sound /ð/'
          },
          {
            word: 'thorough',
            ipa: '/ˈθʌr.ə/',
            stressPattern: 'THOR-ough',
            audioUrl: '/audio/thorough.mp3',
            tips: 'Stress on 1st syllable; different "th" sound /θ/'
          },
          {
            word: 'particularly',
            ipa: '/pəˈtɪk.jə.lə.li/',
            stressPattern: 'par-TIC-u-lar-ly',
            audioUrl: '/audio/particularly.mp3',
            tips: 'Stress on 2nd syllable "-TIC-"'
          },
          {
            word: 'characteristic',
            ipa: '/ˌkær.ək.təˈrɪs.tɪk/',
            stressPattern: 'char-ac-ter-IS-tic',
            audioUrl: '/audio/characteristic.mp3',
            tips: 'Stress on 4th syllable "-IS-"'
          },
          {
            word: 'pronunciation',
            ipa: '/prəˌnʌn.siˈeɪ.ʃən/',
            stressPattern: 'pro-nun-ci-A-tion',
            audioUrl: '/audio/pronunciation.mp3',
            tips: 'Stress on 4th syllable; note spelling vs. "pronounce"'
          },
          {
            word: 'necessary',
            ipa: '/ˈnes.ə.ser.i/',
            stressPattern: 'NEC-es-sar-y',
            audioUrl: '/audio/necessary.mp3',
            tips: 'Stress on 1st syllable; one "c", double "s"'
          }
        ],
        instructions: 'Practice these commonly mispronounced words for the speaking exam.',
        practiceType: 'stress-identification'
      },
      {
        id: 'b2-m3-l6-integrated-2',
        type: 'integrated-reading-writing',
        title: 'Final Integrated Task: The Future of Work',
        readingText: `The workplace of 2030 will bear little resemblance to today's offices. This transformation isn't merely about where we work—though remote and hybrid models will certainly dominate—but about fundamental changes in how we conceive of work itself.

**The Rise of the Gig Economy**
Traditional employment with a single employer for decades is becoming increasingly rare. Instead, portfolio careers are emerging as the norm. Professionals increasingly combine multiple part-time roles, freelance projects, and entrepreneurial ventures. This shift offers autonomy and variety but demands new skills: self-marketing, financial management, and constant adaptation.

**Automation and Human Skills**
Contrary to dystopian predictions, automation won't eliminate human work; it will transform it. Routine tasks will indeed be automated, but this will free humans to focus on skills that machines can't replicate: creativity, emotional intelligence, complex problem-solving, and ethical judgment. The most valuable workers will be those who can collaborate effectively with AI systems while bringing uniquely human capabilities to bear.

**Continuous Learning Imperative**
The concept of "learning for 25 years, working for 40" is obsolete. In 2030, learning and working will be inseparable. Professionals will need to constantly update their skills, often while maintaining full-time employment. Employers increasingly recognize this, with many now offering learning sabbaticals and integrated training programs. The ability to learn quickly and adapt to new tools and methodologies will be as important as any specific technical skill.

**Mental Health and Well-being**
The pandemic normalized conversations about mental health in professional contexts. By 2030, workplace wellness programs will be standard, not perks. Companies recognize that burned-out employees are neither productive nor innovative. Expect four-day work weeks to become common, along with mandatory vacation policies and mental health days.

**Purpose-Driven Work**
Younger generations increasingly demand work that aligns with their values. They're willing to accept lower salaries for roles that contribute to social good or environmental sustainability. This is forcing companies to articulate clear missions beyond profit and to demonstrate genuine commitment to social responsibility.

The transition won't be smooth. Issues of inequality loom large: not everyone has equal access to remote work opportunities or continuous learning resources. Regulatory frameworks lag behind technological capabilities, creating uncertainty. Yet the direction is clear: work is becoming more flexible, more human-centered, and more integrated with life's other dimensions. Those who adapt to these changes will thrive; those who resist will struggle.`,
        wordCount: 410,
        readingTime: 5,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'What does "portfolio careers" refer to?',
            correctAnswer: 'Combining multiple different roles',
            explanation: 'El texto explica: "combine multiple part-time roles, freelance projects, and entrepreneurial ventures"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: Automation will eliminate most human jobs.',
            correctAnswer: 'False',
            explanation: 'El texto dice: "automation won\'t eliminate human work; it will transform it"',
            points: 1
          },
          {
            id: 'q23',
            type: 'true-false',
            question: 'According to the text, what will be the most valuable skill?',
            correctAnswer: 'TrueAbility to learn quickly and adapt',
            explanation: 'El texto afirma: "The ability to learn quickly and adapt...will be as important as any specific technical skill"',
            points: 1
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'What workplace benefit is expected to become common by 2030?',
            correctAnswer: 'Four-day work weeks / mental health days / mandatory vacation',
            explanation: 'El texto menciona varios beneficios que se volverán comunes',
            points: 2
          },
          {
            id: 'q8',
            type: 'short-answer',
            question: 'What issue does the text mention as problematic?',
            correctAnswer: 'Inequality of access to opportunities',
            explanation: 'El texto menciona: "Issues of inequality loom large: not everyone has equal access"',
            points: 2
          },
          {
            id: 'q6',
            type: 'essay',
            question: 'Based on the article, write an essay (220-260 words) discussing whether the changes described will improve or worsen working conditions. Support your opinion with examples from the text and your own experience.',
            rubric: {
              content: 25,
              organization: 25,
              grammar: 25,
              vocabulary: 25
            },
            minWords: 220,
            maxWords: 260,
            points: 15
          }
        ]
      },
      {
        id: 'b2-m3-l6-final-assessment',
        type: 'grammar',
        title: 'Final Comprehensive Assessment',
        explanation: `Congratulations on reaching the final exercise of the B2 First preparation course!

This assessment covers all major grammar areas from the complete course:

**Module 1: Narrative & Complex Structures**
- Perfect tenses and narrative tenses
- Inversion and cleft sentences
- Mixed conditionals

**Module 2: Opinion & Speculation**
- Modal verbs for deduction
- Advanced passive structures
- Reported speech

**Module 3: Professional Communication**
- Formal structures
- Diplomatic language
- Complex sentence patterns

Take your time with each question. This is your opportunity to demonstrate everything you've learned throughout the course.

**Good luck!**`,
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'By this time next year, I _____ my degree.',
            correctAnswer: 'will have finished',
            explanation: 'Future Perfect para acción que estará completada en un punto futuro',
            points: 2
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'Rarely I have seen such a beautiful sunset.',
            correctAnswer: 'False',
            explanation: 'Falso. Inversión después de adverbios negativos en posición inicial',
            points: 2
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'He _____ have arrived by now. The train was due at 3pm.',
            correctAnswer: 'should',
            explanation: '"Should have" expresa expectativa basada en información',
            points: 2
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'If I _____ harder at school, I _____ be in a better job now.',
            correctAnswer: 'had studied / would',
            explanation: 'Mixed conditional: past condition, present result',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'What I need right now _____ a long vacation.',
            correctAnswer: 'is',
            explanation: 'Cleft question: "what" clause toma verbo singular',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m3-l6-collocation-matching-1',
        type: 'collocation-matching',
        title: 'Final Review: Professional Collocations',
        instructions: 'Match each verb with the correct noun to form professional collocations from Module 3.',
        pairs: [
          {
            id: 'cm1',
            word: 'conduct',
            correctMatch: 'research',
            distractors: ['a study', 'an investigation', 'an experiment'],
            example: 'The university conducted extensive research on climate change.',
            points: 1
          },
          {
            id: 'cm2',
            word: 'submit',
            correctMatch: 'a proposal',
            distractors: ['a plan', 'a suggestion', 'an idea'],
            example: 'Please submit your proposal by Friday.',
            points: 1
          },
          {
            id: 'cm3',
            word: 'meet',
            correctMatch: 'a deadline',
            distractors: ['a target', 'a goal', 'a time'],
            example: 'We need to work overtime to meet the deadline.',
            points: 1
          },
          {
            id: 'cm4',
            word: 'deliver',
            correctMatch: 'a presentation',
            distractors: ['a speech', 'a talk', 'a lecture'],
            example: 'She will deliver the presentation at 3pm.',
            points: 1
          },
          {
            id: 'cm5',
            word: 'implement',
            correctMatch: 'a strategy',
            distractors: ['a plan', 'a policy', 'a system'],
            example: 'The company implemented a new marketing strategy.',
            points: 1
          }
        ]
      }
    ]
  }
];

// CURSO COMPLETO B2
export const ALL_MODULES: Module[] = [
  {
    id: 'b2-module-1',
    number: 1,
    title: 'Módulo 1: Narrativas Complejas y Análisis',
    description: 'Domina estructuras narrativas avanzadas, tiempos perfectos y técnicas de énfasis para el nivel B2 First (FCE)',
    duration: '4-5 semanas',
    topics: [
      'Literatura y crítica',
      'Cine, arte y cultura',
      'Eventos históricos',
      'Biografías detalladas',
      'Análisis de situaciones'
    ],
    grammar: [
      'Perfect tenses review',
      'Past Perfect Continuous',
      'Mixed conditionals',
      'Narrative tenses',
      'Inversion for emphasis',
      'Cleft sentences'
    ],
    vocabulary: [
      'Expresiones idiomáticas avanzadas',
      'Colocaciones comunes',
      'Vocabulario literario',
      'Crítica y análisis',
      'Phrasal verbs avanzados'
    ],
    lessons: MODULE_1_LESSONS,
    examPractice: {
      mockExam: true,
      examDuration: 90,
      parts: ['Reading & Use of English', 'Writing', 'Listening', 'Speaking']
    }
  },
  {
    id: 'b2-module-2',
    number: 2,
    title: 'Módulo 2: Debate, Opinión y Persuasión',
    description: 'Desarrolla habilidades para expresar opiniones, hacer deducciones y construir argumentos persuasivos',
    duration: '4-5 semanas',
    topics: [
      'Problemas sociales',
      'Medio ambiente',
      'Tecnología y sociedad',
      'Ética y valores',
      'Debate y argumentación'
    ],
    grammar: [
      'Modal verbs para especulación',
      'Voz pasiva avanzada',
      'Reported speech avanzado',
      'Linking words sofisticados',
      'Estructuras de énfasis'
    ],
    vocabulary: [
      'Vocabulario de debate',
      'Expresiones de opinión',
      'Lenguaje persuasivo',
      'Conectores lógicos',
      'Vocabulario académico'
    ],
    lessons: MODULE_2_LESSONS,
    examPractice: {
      mockExam: true,
      examDuration: 90,
      parts: ['Reading & Use of English', 'Writing', 'Listening', 'Speaking']
    }
  },
  {
    id: 'b2-module-3',
    number: 3,
    title: 'Módulo 3: Comunicación Profesional y Académica',
    description: 'Perfecciona tu inglés para contextos profesionales, académicos y exámenes oficiales',
    duration: '4-5 semanas',
    topics: [
      'Negocios y profesiones',
      'Comunicación formal',
      'Presentaciones académicas',
      'Escritura profesional',
      'Preparación de exámenes'
    ],
    grammar: [
      'Estructuras formales complejas',
      'Registro formal vs informal',
      'Subjuntivo y estructuras condicionales',
      'Nominalization',
      'Cohesión textual avanzada'
    ],
    vocabulary: [
      'Vocabulario profesional',
      'Phrasal verbs en contexto',
      'Colocaciones y expresiones',
      'Vocabulario de examen',
      'Lenguaje idiomático'
    ],
    lessons: MODULE_3_LESSONS,
    examPractice: {
      mockExam: true,
      examDuration: 210,
      parts: ['Reading & Use of English', 'Writing', 'Listening', 'Speaking']
    }
  }
];

// Calcular total de lecciones una vez
const TOTAL_LESSONS = MODULE_1_LESSONS.length + MODULE_2_LESSONS.length + MODULE_3_LESSONS.length;

export const B2_FULL_COURSE = {
  id: 'b2-exam-prep-complete',
  title: 'B2 First (FCE) Exam Preparation - Complete Course',
  level: 'B2',
  description: 'Curso completo de preparación para el examen B2 First (FCE) de Cambridge con ejercicios interactivos, grabación de voz, evaluación de pronunciación y práctica exhaustiva de las 4 habilidades',
  duration: '12-15 semanas',
  totalModules: 3,
  totalLessons: TOTAL_LESSONS,
  modules: ALL_MODULES,
  features: [
    'Ejercicios interactivos de Reading, Writing, Listening y Speaking',
    'Sistema de grabación de voz con evaluación automática',
    'Feedback de pronunciación en tiempo real',
    'Seguimiento de progreso detallado',
    'Simulacros de examen completos',
    'Basado en especificaciones oficiales de Cambridge',
    'Acceso 24/7 a todos los materiales'
  ]
};

// Export for backward compatibility
export const B2_EXAM_PREP_COURSE: Module = ALL_MODULES[0];

// Export individual modules for easier testing
// These must be defined AFTER all modules are declared to avoid circular reference
export const MODULE_1_B2 = ALL_MODULES[0];
export const MODULE_2_B2 = ALL_MODULES[1];
export const MODULE_3_B2 = ALL_MODULES[2];
