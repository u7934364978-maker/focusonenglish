// Curso B2 Preparación de Exámenes - Estructura Completa
// Basado en curriculum-data.ts B2 Level

export type ExerciseType = 
  | 'reading'
  | 'writing'
  | 'listening'
  | 'speaking'
  | 'grammar'
  | 'vocabulary'
  | 'pronunciation'
  | 'key-word-transformation'
  | 'word-formation'
  | 'multiple-choice-cloze';

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

export type Exercise = 
  | VoiceRecordingExercise
  | ListeningExercise
  | ReadingExercise
  | WritingExercise
  | GrammarExercise
  | VocabularyExercise
  | KeyWordTransformationExercise
  | WordFormationExercise
  | MultipleChoiceClozeExercise;

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
            type: 'multiple-choice',
            question: 'Choose the correct form: By 2010, she ___ in London for five years.',
            options: ['lived', 'has lived', 'had lived', 'had been living'],
            correctAnswer: 'had lived',
            explanation: 'Usamos Past Perfect porque la acción (vivir en Londres) comenzó y terminó antes de un punto específico en el pasado (2010).',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: When I called her, she ___ (already/leave) the office.',
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
              'After he was eating dinner, he watched TV.',
              'After he has eaten dinner, he watched TV.'
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
            type: 'multiple-choice',
            question: 'They ___ never ___ such a beautiful place before visiting Iceland.',
            options: ['have...seen', 'had...seen', 'did...see', 'were...seeing'],
            correctAnswer: 'had...seen',
            explanation: 'Experiencia previa al viaje a Islandia requiere Past Perfect.',
            points: 1
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
            type: 'multiple-choice',
            question: 'She was out of breath because she ___.',
            options: ['ran', 'was running', 'had run', 'had been running'],
            correctAnswer: 'had been running',
            explanation: 'Enfatizamos la duración de la actividad (correr) que causó el resultado (sin aliento).',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: How long ___ (you/wait) when the train arrived?',
            correctAnswer: 'had you been waiting',
            explanation: 'Pregunta sobre la duración de la espera antes de la llegada del tren.',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Choose the correct sentence:',
            options: [
              'They had been played tennis for two hours.',
              'They had been playing tennis for two hours.',
              'They had played tennis for two hours.',
              'Both b and c are correct.'
            ],
            correctAnswer: 'Both b and c are correct.',
            explanation: 'Ambas son correctas. "Had been playing" enfatiza duración; "had played" es más neutral.',
            points: 2
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'Explain the difference: "He had worked" vs "He had been working"',
            correctAnswer: 'Had worked = acción completada. Had been working = énfasis en duración/proceso.',
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
            type: 'multiple-choice',
            question: 'What had Maria done before traveling to Japan?',
            options: [
              'She had lived there before',
              'She had studied Japanese for six months',
              'She had visited other Asian countries',
              'She had worked as a teacher'
            ],
            correctAnswer: 'She had studied Japanese for six months',
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
              'The woman wanted to practice English',
              'The woman noticed Maria looked confused',
              'They were old friends'
            ],
            correctAnswer: 'The woman noticed Maria looked confused',
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
            type: 'multiple-choice',
            question: 'How did Maria feel about her trip by the end?',
            options: [
              'Disappointed because of the language barrier',
              'It exceeded her expectations and changed her perspective',
              'She regretted not staying longer',
              'She wished she had prepared better'
            ],
            correctAnswer: 'It exceeded her expectations and changed her perspective',
            explanation: 'El texto concluye: "had exceeded all her expectations and had changed her perspective on life"',
            points: 1
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
            type: 'multiple-choice',
            question: 'How long had Sarah been working in London before considering overseas opportunities?',
            options: ['Two years', 'Three years', 'Five years', 'Seven years'],
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
              'Meeting colleagues at a conference',
              'Reading travel blogs',
              'A recommendation from her boss'
            ],
            correctAnswer: 'Meeting colleagues at a conference',
            explanation: 'She met colleagues from Singapore office at a conference who talked about how amazing it was.',
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
            id: 'q5',
            type: 'multiple-choice',
            question: 'How long did Sarah work in Singapore?',
            options: ['One year', 'Two years', 'Three years', 'Five years'],
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
        hints: [
          'Start with background: "I had been preparing for..."',
          'Explain your preparation: "I had studied/practiced/organized..."',
          'Describe what happened: "When the day arrived..."',
          'Reflect on the outcome: "Even though I had planned everything..."',
          'Use time expressions: by the time, before, after, when, while'
        ]
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
            sentence: 'She learned Spanish before she moved to Madrid.',
            keyWord: 'had',
            startOfAnswer: 'She',
            correctAnswer: 'had learned Spanish before',
            explanation: 'Use Past Perfect (had learned) to show the action completed before moving.',
            points: 2
          },
          {
            id: 'kt2',
            sentence: 'It was the first time he visited Japan.',
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
            sentence: 'She was tired because she had been working all night.',
            keyWord: 'been',
            startOfAnswer: 'She',
            correctAnswer: 'had been working all',
            explanation: 'Past Perfect Continuous emphasizes duration of the activity.',
            points: 2
          },
          {
            id: 'kt6',
            sentence: 'We expected the exam to be easier.',
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
            sentence: 'I regret not studying harder for the test.',
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
            sentence: 'Perhaps she missed the train.',
            keyWord: 'might',
            startOfAnswer: 'She',
            correctAnswer: 'might have missed the',
            explanation: 'Modal perfect (might have + past participle) for past possibility.',
            points: 2
          },
          {
            id: 'kt10',
            sentence: 'Someone stole my bike last night.',
            keyWord: 'was',
            startOfAnswer: 'My bike',
            correctAnswer: 'was stolen last night',
            explanation: 'Passive voice: was + past participle.',
            points: 2
          },
          {
            id: 'kt11',
            sentence: 'They say that she is the best player in the team.',
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
      // MULTIPLE CHOICE CLOZE - FCE Part 1 Practice
      {
        id: 'b2-m1-l1-cloze-1',
        type: 'multiple-choice-cloze',
        title: 'Multiple Choice Cloze: Life Changes and Experiences',
        instructions: 'Read the text below and decide which answer (A, B, C or D) best fits each gap.',
        text: `Making the Decision to Study Abroad

When Sarah first {{1}} the idea of studying abroad, she wasn't sure it was the right choice for her. She had always been close to her family and the {{2}} of leaving them for a whole year seemed overwhelming. However, her friends kept {{3}} her that it would be an incredible opportunity.

After much consideration, Sarah decided to {{4}} for a scholarship program in Spain. She spent months preparing her application and was thrilled when she finally {{5}} the news that she had been accepted. Despite her excitement, she couldn't {{6}} feeling nervous about the challenges ahead.

The first few weeks in Madrid were difficult. Sarah had been {{7}} Spanish for years, but understanding native speakers in real conversations was much harder than she had expected. {{8}}, she gradually adapted and soon found herself making friends and enjoying her new life.`,
        questions: [
          {
            id: 'q1',
            gapNumber: 1,
            options: ['considered', 'regarded', 'believed', 'supposed'],
            correctAnswer: 'considered',
            explanation: '"Consider" is the correct verb for thinking about an idea or possibility. "Regard" needs a different structure, "believed" and "supposed" don\'t fit the context.',
            points: 1
          },
          {
            id: 'q2',
            gapNumber: 2,
            options: ['thought', 'idea', 'opinion', 'view'],
            correctAnswer: 'idea',
            explanation: '"The idea of leaving" is the correct collocation. "Thought of leaving" would need a different structure, and "opinion/view" don\'t fit the meaning.',
            points: 1
          },
          {
            id: 'q3',
            gapNumber: 3,
            options: ['saying', 'telling', 'speaking', 'talking'],
            correctAnswer: 'telling',
            explanation: '"Tell someone that..." is the correct structure. "Say" needs "to her", "speak" and "talk" require different constructions.',
            points: 1
          },
          {
            id: 'q4',
            gapNumber: 4,
            options: ['apply', 'request', 'demand', 'ask'],
            correctAnswer: 'apply',
            explanation: '"Apply for" is the correct phrasal verb for scholarship applications. "Request", "demand", and "ask" use different prepositions or structures.',
            points: 1
          },
          {
            id: 'q5',
            gapNumber: 5,
            options: ['accepted', 'received', 'took', 'got'],
            correctAnswer: 'received',
            explanation: '"Receive news" is the standard collocation. While "got" is possible, "received" is more formal and appropriate here.',
            points: 1
          },
          {
            id: 'q6',
            gapNumber: 6,
            options: ['help', 'avoid', 'prevent', 'stop'],
            correctAnswer: 'help',
            explanation: '"Can\'t help feeling" means unable to stop feeling. "Avoid", "prevent", and "stop" require different grammatical structures.',
            points: 1
          },
          {
            id: 'q7',
            gapNumber: 7,
            options: ['learning', 'studying', 'teaching', 'training'],
            correctAnswer: 'studying',
            explanation: 'We "study" a language (academic context). "Learn" would need present perfect continuous, "teaching/training" have different meanings.',
            points: 1
          },
          {
            id: 'q8',
            gapNumber: 8,
            options: ['Although', 'However', 'Despite', 'In spite'],
            correctAnswer: 'However',
            explanation: '"However" is correct as a sentence connector with comma. "Although/Despite/In spite" need different structures (clause or noun phrase).',
            points: 1
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
            type: 'multiple-choice',
            question: 'If I ___ (save) more money, I ___ (buy) a car now.',
            options: [
              'saved / would buy',
              'had saved / would buy',
              'had saved / will buy',
              'save / would have bought'
            ],
            correctAnswer: 'had saved / would buy',
            explanation: 'Past condition (didn\'t save) + present result (don\'t have car now) = Mixed Conditional Type 1',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: If I were fluent in English, I ___ (get) that job last year.',
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
            id: 'q4',
            type: 'multiple-choice',
            question: 'Which sentence shows a mixed conditional?',
            options: [
              'If I had known, I would have told you.',
              'If I knew, I would tell you.',
              'If I had known, I would be there now.',
              'If I know, I will tell you.'
            ],
            correctAnswer: 'If I had known, I would be there now.',
            explanation: 'Combina Past Perfect (pasado) con would + infinitive (presente)',
            points: 1
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
            type: 'multiple-choice',
            question: 'Rewrite with inversion: "I have never seen such a thing."',
            options: [
              'Never I have seen such a thing.',
              'Never have I seen such a thing.',
              'Never have seen I such a thing.',
              'I never have seen such a thing.'
            ],
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
            id: 'q4',
            type: 'multiple-choice',
            question: 'Which is correct?',
            options: [
              'Under no circumstances you should tell anyone.',
              'Under no circumstances should you tell anyone.',
              'Under no circumstances you shouldn\'t tell anyone.',
              'Under no circumstances do you should tell anyone.'
            ],
            correctAnswer: 'Under no circumstances should you tell anyone.',
            explanation: 'Negative expression + modal (should) + subject + infinitive',
            points: 1
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
            type: 'multiple-choice',
            question: 'What career did Jennifer actually pursue?',
            options: ['Music', 'Computer Science', 'Teaching', 'App Development'],
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
            id: 'q4',
            type: 'multiple-choice',
            question: 'What does the text suggest about career decisions?',
            options: [
              'People should always follow their passion',
              'Alternative paths can lead to valuable unexpected opportunities',
              'Technical careers are always better than artistic ones',
              'Most people regret their career choices'
            ],
            correctAnswer: 'Alternative paths can lead to valuable unexpected opportunities',
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
            type: 'multiple-choice',
            question: 'What is Dr. Chen\'s specialization?',
            options: ['Career counseling', 'Family therapy', 'Educational psychology', 'Sports psychology'],
            correctAnswer: 'Career counseling',
            explanation: 'El presentador la introduce como "a psychologist who specializes in career counseling"',
            points: 1
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
            type: 'multiple-choice',
            question: 'What advantage did Mark gain from studying literature?',
            options: [
              'Better salary',
              'More job opportunities',
              'Exceptional communication skills',
              'Technical knowledge'
            ],
            correctAnswer: 'Exceptional communication skills',
            explanation: 'Su estudio de literatura le dio "exceptional communication skills"',
            points: 1
          },
          {
            id: 'q5',
            type: 'multiple-choice',
            question: 'What does Dr. Chen say we usually regret?',
            options: [
              'Things we tried',
              'Things we never tried',
              'Career choices',
              'Education decisions'
            ],
            correctAnswer: 'Things we never tried',
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
        ]
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
            sentence: 'If I had known about the party, I would have come.',
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
            sentence: 'He rarely goes to the cinema.',
            keyWord: 'seldom',
            startOfAnswer: 'Seldom',
            correctAnswer: 'does he go to',
            explanation: 'Inversion after negative adverbs (seldom, rarely, never).',
            points: 2
          },
          {
            id: 'kt5',
            sentence: 'I have never seen such a beautiful sunset.',
            keyWord: 'never',
            startOfAnswer: 'Never',
            correctAnswer: 'have I seen such',
            explanation: 'Inversion after "never" for emphasis.',
            points: 2
          },
          {
            id: 'kt6',
            sentence: 'If he were taller, he would be a basketball player.',
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
            sentence: 'She was rich, so she bought that mansion.',
            keyWord: 'been',
            startOfAnswer: 'If she hadn\'t',
            correctAnswer: 'been rich she wouldn\'t',
            explanation: 'Third conditional with negative form.',
            points: 2
          },
          {
            id: 'kt9',
            sentence: 'Not only did he win the race, but he also broke the record.',
            keyWord: 'only',
            startOfAnswer: 'Not only',
            correctAnswer: 'did he win the',
            explanation: 'Inversion after "not only" for emphasis.',
            points: 2
          },
          {
            id: 'kt10',
            sentence: 'I had hardly started cooking when the guests arrived.',
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
            type: 'multiple-choice',
            question: 'Rewrite with emphasis on "the noise": "The noise woke me up."',
            options: [
              'It was the noise woke me up.',
              'It was the noise that woke me up.',
              'That was the noise woke me up.',
              'It is the noise who woke me up.'
            ],
            correctAnswer: 'It was the noise that woke me up.',
            explanation: 'Usamos "It was...that" para enfatizar el sujeto (the noise).',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: ___ was in 2020 ___ everything changed.',
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
            type: 'multiple-choice',
            question: 'Choose the correct wh-cleft: "I want honesty."',
            options: [
              'What I want is honesty.',
              'That I want is honesty.',
              'Which I want is honesty.',
              'What I want it is honesty.'
            ],
            correctAnswer: 'What I want is honesty.',
            explanation: 'What I want is + sustantivo/lo que queremos enfatizar.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: ___ she said was absolutely right.',
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
            type: 'multiple-choice',
            question: 'According to the text, what truly distinguishes successful people?',
            options: [
              'Their intelligence',
              'Their ability to focus',
              'Their multitasking skills',
              'Their education'
            ],
            correctAnswer: 'Their ability to focus',
            explanation: 'El texto dice: "what truly sets successful people apart...it\'s their ability to focus"',
            points: 1
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
            id: 'q4',
            type: 'multiple-choice',
            question: 'What did workers discover during the pandemic?',
            options: [
              'That offices are more productive',
              'That working from home with focus blocks can be more productive',
              'That technology is the main problem',
              'That multitasking works better at home'
            ],
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
            type: 'multiple-choice',
            question: 'What does Dr. Richardson say about multitasking?',
            options: [
              'It\'s a valuable skill to develop',
              'It\'s actually task-switching and inefficient',
              'It works well for some people',
              'It improves with practice'
            ],
            correctAnswer: 'It\'s actually task-switching and inefficient',
            explanation: 'Ella dice: "multitasking is actually a myth...we\'re really doing is task-switching, and it\'s incredibly inefficient"',
            points: 1
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
        ]
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
            sentence: 'They are repairing the road.',
            keyWord: 'being',
            startOfAnswer: 'The road',
            correctAnswer: 'is being repaired',
            explanation: 'Present continuous passive: is/are being + past participle.',
            points: 2
          },
          {
            id: 'kt2',
            sentence: 'Someone must have stolen my wallet.',
            keyWord: 'been',
            startOfAnswer: 'My wallet',
            correctAnswer: 'must have been stolen',
            explanation: 'Modal perfect passive: modal + have been + past participle.',
            points: 2
          },
          {
            id: 'kt3',
            sentence: 'They say that he is very rich.',
            keyWord: 'said',
            startOfAnswer: 'He',
            correctAnswer: 'is said to be',
            explanation: 'Impersonal passive with reporting verb.',
            points: 2
          },
          {
            id: 'kt4',
            sentence: 'People believe that the treasure is buried here.',
            keyWord: 'believed',
            startOfAnswer: 'The treasure',
            correctAnswer: 'is believed to be',
            explanation: 'Impersonal passive: the treasure is believed to be.',
            points: 2
          },
          {
            id: 'kt5',
            sentence: 'They had already finished the project when I arrived.',
            keyWord: 'been',
            startOfAnswer: 'The project',
            correctAnswer: 'had already been finished',
            explanation: 'Past perfect passive: had been + past participle.',
            points: 2
          },
          {
            id: 'kt6',
            sentence: 'You should clean your room.',
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
            sentence: 'Someone is cutting my hair tomorrow.',
            keyWord: 'having',
            startOfAnswer: 'I am',
            correctAnswer: 'having my hair cut',
            explanation: 'Causative: have + object + past participle.',
            points: 2
          },
          {
            id: 'kt8',
            sentence: 'A mechanic serviced my car last week.',
            keyWord: 'had',
            startOfAnswer: 'I',
            correctAnswer: 'had my car serviced',
            explanation: 'Causative in past: had + object + past participle.',
            points: 2
          },
          {
            id: 'kt9',
            sentence: 'The doctor will examine you.',
            keyWord: 'examined',
            startOfAnswer: 'You',
            correctAnswer: 'will be examined by',
            explanation: 'Future passive with agent.',
            points: 2
          },
          {
            id: 'kt10',
            sentence: 'They are going to demolish the old building.',
            keyWord: 'demolished',
            startOfAnswer: 'The old building',
            correctAnswer: 'is going to be',
            explanation: 'Future with "going to" in passive voice.',
            points: 2
          },
          {
            id: 'kt11',
            sentence: 'Somebody needs to fix this computer.',
            keyWord: 'needs',
            startOfAnswer: 'This computer',
            correctAnswer: 'needs to be fixed',
            explanation: 'Passive infinitive: needs to be + past participle.',
            points: 2
          },
          {
            id: 'kt12',
            sentence: 'They made him wait for two hours.',
            keyWord: 'was',
            startOfAnswer: 'He',
            correctAnswer: 'was made to wait',
            explanation: 'Passive causative with "made" requires "to" infinitive.',
            points: 2
          }
        ]
      },
      // MULTIPLE CHOICE CLOZE - FCE Part 1 Practice
      {
        id: 'b2-m1-l3-cloze-1',
        type: 'multiple-choice-cloze',
        title: 'Multiple Choice Cloze: Environmental Action',
        instructions: 'Read the text below and decide which answer (A, B, C or D) best fits each gap.',
        text: `Taking Action on Climate Change

Climate change has become one of the most {{1}} issues facing humanity today. Scientists have been warning us for decades about the {{2}} consequences of global warming, yet progress in reducing emissions has been disappointingly slow. Many people feel overwhelmed by the {{3}} of the problem and wonder what difference individual actions can possibly make.

{{4}}, experts insist that every small action counts. Simple changes like reducing energy consumption, using public transport, and choosing sustainable products can {{5}} a significant impact when adopted by millions of people. The key is to {{6}} these habits part of our daily routine rather than seeing them as occasional efforts.

Governments and businesses also have a crucial {{7}} to play. New policies are being {{8}} to encourage renewable energy and discourage wasteful practices. While challenges remain, there are encouraging signs that society is finally taking this crisis seriously.`,
        questions: [
          {
            id: 'q1',
            gapNumber: 1,
            options: ['urgent', 'immediate', 'instant', 'prompt'],
            correctAnswer: 'urgent',
            explanation: '"Urgent issue" is the standard collocation for important problems requiring immediate attention. "Immediate/instant/prompt" don\'t collocate naturally with "issue".',
            points: 1
          },
          {
            id: 'q2',
            gapNumber: 2,
            options: ['possible', 'potential', 'probable', 'likely'],
            correctAnswer: 'potential',
            explanation: '"Potential consequences" is the correct collocation for possible future effects. "Possible consequences" is less common, "probable/likely" need different structures.',
            points: 1
          },
          {
            id: 'q3',
            gapNumber: 3,
            options: ['scale', 'size', 'amount', 'extent'],
            correctAnswer: 'scale',
            explanation: '"The scale of the problem" refers to its magnitude. "Size" is for physical objects, "amount" for quantities, "extent" needs different context.',
            points: 1
          },
          {
            id: 'q4',
            gapNumber: 4,
            options: ['Nevertheless', 'Moreover', 'Therefore', 'Otherwise'],
            correctAnswer: 'Nevertheless',
            explanation: '"Nevertheless" (despite this) contrasts with the previous negative statement. "Moreover" adds information, "Therefore" shows result, "Otherwise" means "if not".',
            points: 1
          },
          {
            id: 'q5',
            gapNumber: 5,
            options: ['make', 'do', 'have', 'take'],
            correctAnswer: 'make',
            explanation: '"Make an impact" is the correct collocation. "Have an impact" is possible but less common in this structure, "do/take" don\'t collocate with "impact".',
            points: 1
          },
          {
            id: 'q6',
            gapNumber: 6,
            options: ['make', 'do', 'have', 'keep'],
            correctAnswer: 'make',
            explanation: '"Make something part of" means to incorporate. "Do", "have", and "keep" don\'t fit this particular structure.',
            points: 1
          },
          {
            id: 'q7',
            gapNumber: 7,
            options: ['role', 'part', 'function', 'duty'],
            correctAnswer: 'role',
            explanation: '"Play a role" is the standard idiom for having a responsibility or function. "Play a part" is also possible, but "role" is more common. "Function/duty" don\'t collocate with "play".',
            points: 1
          },
          {
            id: 'q8',
            gapNumber: 8,
            options: ['introduced', 'presented', 'shown', 'displayed'],
            correctAnswer: 'introduced',
            explanation: 'Policies are "introduced" (brought into use). "Presented" means shown formally, "shown/displayed" are for visual presentation.',
            points: 1
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
            type: 'multiple-choice',
            question: 'Choose the correct combination: While I ___ TV, the phone ___.',
            options: [
              'watched / rang',
              'was watching / rang',
              'had watched / was ringing',
              'was watching / was ringing'
            ],
            correctAnswer: 'was watching / rang',
            explanation: 'Acción en progreso (was watching) interrumpida por acción completada (rang).',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete the sentence: By the time we ___ (arrive), the movie ___ (already/start).',
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
            type: 'multiple-choice',
            question: 'How long had Dr. Chen been working on her project when she made the discovery?',
            options: ['Three years', 'Nearly five years', 'Six months', 'Ten years'],
            correctAnswer: 'Nearly five years',
            explanation: 'El texto dice: "had been working...for nearly five years"',
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
            id: 'q3',
            type: 'multiple-choice',
            question: 'What was Professor Martinez doing when Sarah called him?',
            options: [
              'Working in the lab',
              'At home',
              'At a conference in Berlin',
              'Teaching a class'
            ],
            correctAnswer: 'At a conference in Berlin',
            explanation: 'El texto menciona: "He had been at a conference in Berlin"',
            points: 1
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
            type: 'multiple-choice',
            question: 'What was James doing before he decided to climb Everest?',
            options: [
              'He was already an experienced climber',
              'He was living an ordinary office life',
              'He was a personal trainer',
              'He was traveling the world'
            ],
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
            id: 'q4',
            type: 'multiple-choice',
            question: 'How long after he started training did James attempt Everest?',
            options: ['One year', 'Two years', 'Three years', 'Five years'],
            correctAnswer: 'Three years',
            explanation: 'James menciona: "It was three years after I started training"',
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
        ]
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
            sentence: 'I need some rest more than anything.',
            keyWord: 'what',
            startOfAnswer: 'What',
            correctAnswer: 'I need is some',
            explanation: 'Cleft sentence with "what" for emphasis on object.',
            points: 2
          },
          {
            id: 'kt2',
            sentence: 'She won the competition last year.',
            keyWord: 'was',
            startOfAnswer: 'It',
            correctAnswer: 'was last year that',
            explanation: 'It-cleft to emphasize time (last year).',
            points: 2
          },
          {
            id: 'kt3',
            sentence: 'The noise bothers me most.',
            keyWord: 'what',
            startOfAnswer: 'What',
            correctAnswer: 'bothers me most is',
            explanation: 'What-cleft to emphasize subject.',
            points: 2
          },
          {
            id: 'kt4',
            sentence: 'He bought the car in London.',
            keyWord: 'where',
            startOfAnswer: 'It was in',
            correctAnswer: 'London where he bought',
            explanation: 'It-cleft emphasizing place (where).',
            points: 2
          },
          {
            id: 'kt5',
            sentence: 'I really enjoy listening to music.',
            keyWord: 'what',
            startOfAnswer: 'What',
            correctAnswer: 'I really enjoy is',
            explanation: 'What-cleft emphasizing the activity.',
            points: 2
          },
          {
            id: 'kt6',
            sentence: 'John told me about the accident.',
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
            sentence: 'I dislike his arrogance the most.',
            keyWord: 'thing',
            startOfAnswer: 'The',
            correctAnswer: 'thing I dislike most',
            explanation: 'The thing + relative clause for emphasis.',
            points: 2
          },
          {
            id: 'kt8',
            sentence: 'We need better communication, not more rules.',
            keyWord: 'what',
            startOfAnswer: 'What',
            correctAnswer: 'we need is better',
            explanation: 'What-cleft emphasizing the real need.',
            points: 2
          },
          {
            id: 'kt9',
            sentence: 'The weather ruined our picnic.',
            keyWord: 'that',
            startOfAnswer: 'It was the',
            correctAnswer: 'weather that ruined our',
            explanation: 'It-cleft emphasizing the cause.',
            points: 2
          },
          {
            id: 'kt10',
            sentence: 'She loves traveling more than anything else.',
            keyWord: 'thing',
            startOfAnswer: 'The',
            correctAnswer: 'thing she loves most',
            explanation: 'The thing + relative clause structure.',
            points: 2
          },
          {
            id: 'kt11',
            sentence: 'They finally understood the problem yesterday.',
            keyWord: 'when',
            startOfAnswer: 'It was',
            correctAnswer: 'yesterday when they finally',
            explanation: 'It-cleft with "when" emphasizing time.',
            points: 2
          },
          {
            id: 'kt12',
            sentence: 'We should focus on quality, not quantity.',
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
            type: 'multiple-choice',
            question: 'The main character in a story is called the ___.',
            options: ['antagonist', 'protagonist', 'narrator', 'author'],
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
        ]
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
            sentence: 'The film was so moving that I cried.',
            keyWord: 'such',
            startOfAnswer: 'It was',
            correctAnswer: 'such a moving film',
            explanation: 'Convert "so + adjective" to "such + a + adjective + noun".',
            points: 2
          },
          {
            id: 'kt2',
            sentence: 'The plot is very complex and hard to follow.',
            keyWord: 'such',
            startOfAnswer: 'The plot is',
            correctAnswer: 'of such complexity that',
            explanation: 'Using "of such + noun" for emphasis.',
            points: 2
          },
          {
            id: 'kt3',
            sentence: 'The author describes the scene brilliantly.',
            keyWord: 'brilliant',
            startOfAnswer: 'The author\'s',
            correctAnswer: 'description of the scene',
            explanation: 'Convert verb to noun form (describes → description).',
            points: 2
          },
          {
            id: 'kt4',
            sentence: 'Despite having a simple plot, the novel is engaging.',
            keyWord: 'although',
            startOfAnswer: 'Although',
            correctAnswer: 'the plot is simple',
            explanation: 'Convert prepositional phrase to clause with "although".',
            points: 2
          },
          {
            id: 'kt5',
            sentence: 'The character development is what impressed me most.',
            keyWord: 'was',
            startOfAnswer: 'What',
            correctAnswer: 'impressed me most was',
            explanation: 'What-cleft for emphasis on subject.',
            points: 2
          },
          {
            id: 'kt6',
            sentence: 'She is known for her vivid imagery.',
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
            sentence: 'In my opinion, this is the best book of the year.',
            keyWord: 'far',
            startOfAnswer: 'This is',
            correctAnswer: 'by far the best',
            explanation: 'Using "by far" to emphasize superlative.',
            points: 2
          },
          {
            id: 'kt8',
            sentence: 'The performances were so good that the audience stood up.',
            keyWord: 'were',
            startOfAnswer: 'Such',
            correctAnswer: 'were the performances that',
            explanation: 'Inversion with "such" for emphasis.',
            points: 2
          },
          {
            id: 'kt9',
            sentence: 'I found the ending disappointing.',
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
            sentence: 'I would recommend this film without hesitation.',
            keyWord: 'hesitate',
            startOfAnswer: 'I wouldn\'t',
            correctAnswer: 'hesitate to recommend this',
            explanation: 'Convert phrase to verb structure.',
            points: 2
          }
        ]
      },
      // MULTIPLE CHOICE CLOZE - FCE Part 1 Practice
      {
        id: 'b2-m1-l5-cloze-1',
        type: 'multiple-choice-cloze',
        title: 'Multiple Choice Cloze: The Power of Reading',
        instructions: 'Read the text below and decide which answer (A, B, C or D) best fits each gap.',
        text: `Why Reading Fiction Matters

In an age dominated by digital media and short-form content, reading novels might seem like an old-fashioned {{1}}. However, neuroscientists have discovered that reading fiction offers unique benefits that other forms of entertainment cannot {{2}}. When we immerse ourselves in a well-written story, our brains create detailed mental simulations of the characters and events.

Research has {{3}} that regular readers of fiction tend to have greater empathy and better social skills than non-readers. This is because following complex narratives {{4}} us to understand different perspectives and imagine ourselves in others' situations. The more we read, the better we become at {{5}} the emotions and motivations of real people in our lives.

Critics might {{6}} that watching films or series could provide similar benefits. While visual media certainly has value, reading requires more active mental {{7}} as we construct the imagery ourselves. Moreover, books allow us to {{8}} into characters' thoughts in ways that films rarely achieve.`,
        questions: [
          {
            id: 'q1',
            gapNumber: 1,
            options: ['activity', 'action', 'practice', 'hobby'],
            correctAnswer: 'activity',
            explanation: '"Activity" is the most neutral and appropriate word for reading as a general pursuit. "Action" implies physical movement, "practice" suggests skill development, "hobby" is too informal here.',
            points: 1
          },
          {
            id: 'q2',
            gapNumber: 2,
            options: ['match', 'equal', 'compare', 'compete'],
            correctAnswer: 'match',
            explanation: '"Cannot match" means cannot equal or be as good as. "Equal" could work but "match" is more natural here, "compare" means examine differences, "compete" implies rivalry.',
            points: 1
          },
          {
            id: 'q3',
            gapNumber: 3,
            options: ['shown', 'displayed', 'exhibited', 'demonstrated'],
            correctAnswer: 'shown',
            explanation: '"Research has shown" is the standard collocation for presenting findings. "Demonstrated" is possible but less common, "displayed/exhibited" are for physical things.',
            points: 1
          },
          {
            id: 'q4',
            gapNumber: 4,
            options: ['requires', 'demands', 'needs', 'asks'],
            correctAnswer: 'requires',
            explanation: '"Require someone to do" is the correct structure for necessitating an action. "Demand" is too strong, "need" doesn\'t take "to" naturally, "ask" means request.',
            points: 1
          },
          {
            id: 'q5',
            gapNumber: 5,
            options: ['recognizing', 'knowing', 'understanding', 'realizing'],
            correctAnswer: 'understanding',
            explanation: '"Become better at understanding" emphasizes deep comprehension. "Recognizing" is identifying, "knowing" is having knowledge, "realizing" is becoming aware.',
            points: 1
          },
          {
            id: 'q6',
            gapNumber: 6,
            options: ['argue', 'discuss', 'debate', 'dispute'],
            correctAnswer: 'argue',
            explanation: '"Argue that" introduces an opposing viewpoint. "Discuss" doesn\'t take "that", "debate" is for formal arguments, "dispute" means disagree with existing claims.',
            points: 1
          },
          {
            id: 'q7',
            gapNumber: 7,
            options: ['engagement', 'commitment', 'involvement', 'participation'],
            correctAnswer: 'engagement',
            explanation: '"Mental engagement" refers to active cognitive involvement. "Commitment" implies dedication over time, "involvement" is less specific, "participation" suggests group activity.',
            points: 1
          },
          {
            id: 'q8',
            gapNumber: 8,
            options: ['get', 'go', 'reach', 'access'],
            correctAnswer: 'access',
            explanation: '"Access characters\' thoughts" means gain entry to. "Get into" would need "into", "go" doesn\'t fit, "reach" implies physical arrival.',
            points: 1
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
            type: 'multiple-choice',
            question: 'What is the main topic of the passage?',
            options: [
              'Memory disorders',
              'The science of déjà vu',
              'Brain imaging techniques',
              'Dr. Cleary\'s career'
            ],
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
        ]
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
            sentence: 'By the time I arrived, they had already left.',
            keyWord: 'left',
            startOfAnswer: 'They had',
            correctAnswer: 'already left by the',
            explanation: 'Past perfect for action completed before another past action.',
            points: 2
          },
          {
            id: 'kt2',
            sentence: 'If I were you, I would accept the offer.',
            keyWord: 'place',
            startOfAnswer: 'If I were',
            correctAnswer: 'in your place I',
            explanation: 'Alternative expression for "if I were you".',
            points: 2
          },
          {
            id: 'kt3',
            sentence: 'The company is building a new factory.',
            keyWord: 'being',
            startOfAnswer: 'A new factory',
            correctAnswer: 'is being built by',
            explanation: 'Present continuous passive with agent.',
            points: 2
          },
          {
            id: 'kt4',
            sentence: 'She succeeded because of her determination.',
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
            sentence: 'You must hand in your assignment by Friday.',
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
            sentence: 'I regret not learning to play the piano.',
            keyWord: 'wish',
            startOfAnswer: 'I',
            correctAnswer: 'wish I had learned',
            explanation: 'Wish + past perfect for past regret.',
            points: 2
          },
          {
            id: 'kt8',
            sentence: 'He is certain to win the competition.',
            keyWord: 'will',
            startOfAnswer: 'He',
            correctAnswer: 'will definitely win the',
            explanation: 'Converting certainty expression to future with adverb.',
            points: 2
          },
          {
            id: 'kt9',
            sentence: 'No sooner had we started the meeting than the fire alarm rang.',
            keyWord: 'hardly',
            startOfAnswer: 'We had',
            correctAnswer: 'hardly started the meeting',
            explanation: 'Converting "no sooner" to "hardly" with same meaning.',
            points: 2
          },
          {
            id: 'kt10',
            sentence: 'The main problem is lack of funding.',
            keyWord: 'needs',
            startOfAnswer: 'What',
            correctAnswer: 'we need is more',
            explanation: 'What-cleft converting problem to need.',
            points: 2
          },
          {
            id: 'kt11',
            sentence: 'Someone should have told me about the changes.',
            keyWord: 'been',
            startOfAnswer: 'I should',
            correctAnswer: 'have been told about',
            explanation: 'Modal perfect passive.',
            points: 2
          },
          {
            id: 'kt12',
            sentence: 'Despite being tired, she finished the project.',
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
      }
    ]
  }
];

// Export individual modules for easier testing
export const MODULE_1_B2 = ALL_MODULES[0];
export const MODULE_2_B2 = ALL_MODULES[1];
export const MODULE_3_B2 = ALL_MODULES[2];

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
            type: 'multiple-choice',
            question: 'Choose the correct modal: The lights are on. Someone ___ be home.',
            options: ['must', 'can\'t', 'might not', 'mustn\'t'],
            correctAnswer: 'must',
            explanation: 'Las luces encendidas son evidencia fuerte de que alguien está en casa.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: She\'s not answering. She ___ be in a meeting.',
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
        ]
      },
      {
        id: 'b2-m2-l1-cloze-1',
        type: 'multiple-choice-cloze',
        title: 'Multiple Choice Cloze: Making Deductions',
        text: `Detective work requires careful observation and logical thinking. When examining a crime scene, investigators (1)_____ draw conclusions based on the evidence they find. They (2)_____ be completely certain at first, but as they gather more information, patterns begin to emerge. For example, if there are muddy footprints leading to a window, it (3)_____ that someone entered through that route. However, investigators (4)_____ rule out other possibilities too quickly. What appears obvious (5)_____ be misleading. A skilled detective knows that circumstances (6)_____ always be what they seem. That's why they (7)_____ consider multiple scenarios before reaching a final conclusion. In many cases, the smallest detail (8)_____ the key to solving the entire mystery.`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '1. _____',
            options: ['ought', 'must', 'should', 'would'],
            correctAnswer: 'must',
            explanation: '"Must" is used for strong logical deductions based on evidence.',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: '2. _____',
            options: ['mightn\'t', 'shouldn\'t', 'couldn\'t', 'mustn\'t'],
            correctAnswer: 'mightn\'t',
            explanation: '"Mightn\'t" (might not) expresses uncertainty, which fits the context of initial investigation.',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: '3. _____',
            options: ['proposes', 'suggests', 'offers', 'recommends'],
            correctAnswer: 'suggests',
            explanation: '"Suggests" is the correct verb for indicating evidence pointing to a conclusion.',
            points: 1
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: '4. _____',
            options: ['mustn\'t', 'needn\'t', 'wouldn\'t', 'mightn\'t'],
            correctAnswer: 'mustn\'t',
            explanation: '"Mustn\'t" means "must not" and expresses prohibition/strong advice not to do something.',
            points: 1
          },
          {
            id: 'q5',
            type: 'multiple-choice',
            question: '5. _____',
            options: ['must', 'should', 'may', 'ought'],
            correctAnswer: 'may',
            explanation: '"May" expresses possibility, fitting the context that obvious things can be misleading.',
            points: 1
          },
          {
            id: 'q6',
            type: 'multiple-choice',
            question: '6. _____',
            options: ['can\'t', 'mustn\'t', 'shouldn\'t', 'wouldn\'t'],
            correctAnswer: 'can\'t',
            explanation: '"Can\'t always be" means "are not always" - expressing impossibility of things always being as they seem.',
            points: 1
          },
          {
            id: 'q7',
            type: 'multiple-choice',
            question: '7. _____',
            options: ['have', 'need', 'must', 'ought'],
            correctAnswer: 'must',
            explanation: '"Must" expresses strong necessity/obligation.',
            points: 1
          },
          {
            id: 'q8',
            type: 'multiple-choice',
            question: '8. _____',
            options: ['can prove', 'must prove', 'should prove', 'would prove'],
            correctAnswer: 'can prove',
            explanation: '"Can prove" expresses possibility/potential, fitting the context about details being potentially key.',
            points: 1
          }
        ],
        focusAreas: ['Modals of deduction', 'Modal verbs', 'Context clues']
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
            type: 'multiple-choice',
            question: 'Transform to passive: "They are building a new hospital."',
            options: [
              'A new hospital is building.',
              'A new hospital is been built.',
              'A new hospital is being built.',
              'A new hospital has been built.'
            ],
            correctAnswer: 'A new hospital is being built.',
            explanation: 'Present Continuous pasivo: is/are being + past participle',
            points: 1
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
      // MULTIPLE CHOICE CLOZE - FCE Part 1 Practice
      {
        id: 'b2-m2-l1-cloze-1',
        type: 'multiple-choice-cloze',
        title: 'Multiple Choice Cloze: The Rise of Remote Work',
        instructions: 'Read the text below and decide which answer (A, B, C or D) best fits each gap.',
        text: `The Remote Work Revolution

The COVID-19 pandemic {{1}} brought about one of the most dramatic shifts in work culture in recent history. Millions of employees who had never considered working from home suddenly found themselves {{2}} to adapt to remote work virtually overnight. While many initially struggled with the transition, others quickly {{3}} to appreciate the benefits of this new arrangement.

For employers, the shift required significant {{4}} in technology and management practices. Companies had to {{5}} in video conferencing software, project management tools, and cybersecurity measures. However, many have since realized that remote work can actually {{6}} productivity while reducing overhead costs.

As we move forward, experts predict that hybrid models will become the {{7}}. Rather than returning to traditional office-based work, most organizations are likely to {{8}} flexible arrangements that allow employees to split their time between home and office. This represents a fundamental change in how we think about the workplace.`,
        questions: [
          {
            id: 'q1',
            gapNumber: 1,
            options: ['suddenly', 'immediately', 'quickly', 'rapidly'],
            correctAnswer: 'suddenly',
            explanation: '"Suddenly brought about" emphasizes the unexpected nature of the change. "Immediately/quickly/rapidly" suggest speed but not unexpectedness.',
            points: 1
          },
          {
            id: 'q2',
            gapNumber: 2,
            options: ['made', 'obliged', 'forced', 'required'],
            correctAnswer: 'forced',
            explanation: '"Forced to adapt" implies no choice in the matter. "Obliged/required" are less strong, "made" needs different structure (made + bare infinitive).',
            points: 1
          },
          {
            id: 'q3',
            gapNumber: 3,
            options: ['came', 'got', 'went', 'became'],
            correctAnswer: 'came',
            explanation: '"Came to appreciate" means gradually began to appreciate. "Got" would need "to appreciate" but is informal, "went/became" don\'t fit this structure.',
            points: 1
          },
          {
            id: 'q4',
            gapNumber: 4,
            options: ['investment', 'spending', 'payment', 'expense'],
            correctAnswer: 'investment',
            explanation: '"Require investment in" refers to putting resources into development. "Spending" is less formal, "payment" is for transactions, "expense" is for costs incurred.',
            points: 1
          },
          {
            id: 'q5',
            gapNumber: 5,
            options: ['invest', 'spend', 'put', 'place'],
            correctAnswer: 'invest',
            explanation: '"Invest in" means allocate money for future returns. "Spend on" is possible but less strategic, "put/place" need different prepositions.',
            points: 1
          },
          {
            id: 'q6',
            gapNumber: 6,
            options: ['increase', 'raise', 'grow', 'rise'],
            correctAnswer: 'increase',
            explanation: '"Increase productivity" is transitive (takes an object). "Raise" needs specific contexts, "grow" is intransitive, "rise" is intransitive.',
            points: 1
          },
          {
            id: 'q7',
            gapNumber: 7,
            options: ['rule', 'norm', 'standard', 'usual'],
            correctAnswer: 'norm',
            explanation: '"Become the norm" means become the standard or typical situation. "Rule" is for regulations, "standard" needs different article, "usual" is an adjective.',
            points: 1
          },
          {
            id: 'q8',
            gapNumber: 8,
            options: ['adopt', 'adapt', 'accept', 'approve'],
            correctAnswer: 'adopt',
            explanation: '"Adopt arrangements" means officially implement them. "Adapt" means modify, "accept" means agree with, "approve" means give permission.',
            points: 1
          }
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
            type: 'multiple-choice',
            question: '"I didn\'t steal the money." → He ___ stealing the money.',
            options: ['denied', 'admitted', 'suggested', 'claimed'],
            correctAnswer: 'denied',
            explanation: 'Deny se usa para negar algo.',
            points: 1
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
        ]
      },
      {
        id: 'b2-m2-l3-cloze-1',
        type: 'multiple-choice-cloze',
        title: 'Multiple Choice Cloze: Communication in the Digital Age',
        text: `Recent studies have shown that digital communication is transforming the way people interact. Researchers (1)_____ that while technology offers unprecedented connectivity, it also presents unique challenges. Many experts (2)_____ concern about the decline in face-to-face conversations, particularly among younger generations. They (3)_____ that excessive screen time might be affecting social skills development. However, (4)_____ all agree that technology is inherently harmful. Some researchers (5)_____ out that digital tools can actually enhance communication when used appropriately. The key, they argue, (6)_____ in finding the right balance. Parents often (7)_____ their children to limit device usage, yet many struggle to (8)_____ a good example themselves. This inconsistency, psychologists warn, could undermine the message they're trying to convey.`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '1. _____',
            options: ['claim', 'demand', 'insist', 'require'],
            correctAnswer: 'claim',
            explanation: '"Claim" is used for reporting statements without "that" being mandatory, fitting reported speech context.',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: '2. _____',
            options: ['express', 'tell', 'say', 'speak'],
            correctAnswer: 'express',
            explanation: '"Express" collocates with "concern" to mean communicating worry or anxiety.',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: '3. _____',
            options: ['worry', 'afraid', 'concerned', 'anxious'],
            correctAnswer: 'worry',
            explanation: '"Worry" is the only option that can be followed by "that" clause in this context.',
            points: 1
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: '4. _____',
            options: ['not', 'no', 'none', 'neither'],
            correctAnswer: 'not',
            explanation: '"Not all" is the correct negative form meaning "some but not all".',
            points: 1
          },
          {
            id: 'q5',
            type: 'multiple-choice',
            question: '5. _____',
            options: ['point', 'make', 'take', 'put'],
            correctAnswer: 'point',
            explanation: '"Point out" is a phrasal verb meaning to highlight or draw attention to something.',
            points: 1
          },
          {
            id: 'q6',
            type: 'multiple-choice',
            question: '6. _____',
            options: ['lies', 'lays', 'puts', 'places'],
            correctAnswer: 'lies',
            explanation: '"The key lies in" is the correct collocation meaning "the solution is found in".',
            points: 1
          },
          {
            id: 'q7',
            type: 'multiple-choice',
            question: '7. _____',
            options: ['advise', 'suggest', 'recommend', 'propose'],
            correctAnswer: 'advise',
            explanation: '"Advise + person + to infinitive" is the correct pattern.',
            points: 1
          },
          {
            id: 'q8',
            type: 'multiple-choice',
            question: '8. _____',
            options: ['set', 'make', 'do', 'give'],
            correctAnswer: 'set',
            explanation: '"Set an example" is the correct collocation meaning to behave as a model for others.',
            points: 1
          }
        ],
        focusAreas: ['Reporting verbs', 'Collocations', 'Phrasal verbs']
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
            type: 'multiple-choice',
            question: 'Choose the correct connector: The project was challenging. ___, we completed it on time.',
            options: ['Consequently', 'Nevertheless', 'Furthermore', 'Whereas'],
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
            type: 'multiple-choice',
            question: 'What is the main argument FOR UBI?',
            options: [
              'It will increase taxes',
              'Automation is eliminating jobs',
              'It has been tried before',
              'Everyone wants it'
            ],
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
        ]
      },
      {
        id: 'b2-m2-l5-cloze-1',
        type: 'multiple-choice-cloze',
        title: 'Multiple Choice Cloze: The Power of Persuasion',
        text: `Throughout history, the ability to persuade others has been a crucial skill. Ancient philosophers (1)_____ the art of rhetoric, developing techniques that remain relevant today. Successful persuasion (2)_____ not just on logical arguments, but also on emotional appeal and credibility. Modern research has (3)_____ light on why some messages are more persuasive than others. Scientists have discovered that people are more (4)_____ to be convinced when information is presented in certain ways. For instance, arguments that (5)_____ both sides of an issue tend to be more effective than one-sided presentations. (6)_____, the messenger matters as much as the message itself. We're naturally inclined to trust people who (7)_____ expertise or share our values. Understanding these principles can help us both craft more convincing arguments and (8)_____ guard against manipulation.`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '1. _____',
            options: ['mastered', 'commanded', 'controlled', 'dominated'],
            correctAnswer: 'mastered',
            explanation: '"Mastered" means to become highly skilled at something, fitting the context of learning rhetoric.',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: '2. _____',
            options: ['bases', 'relies', 'depends', 'rests'],
            correctAnswer: 'relies',
            explanation: '"Relies on" is the correct collocation meaning to depend on something.',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: '3. _____',
            options: ['thrown', 'cast', 'shed', 'made'],
            correctAnswer: 'shed',
            explanation: '"Shed light on" is an idiom meaning to provide clarification or reveal information.',
            points: 1
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: '4. _____',
            options: ['possible', 'probable', 'likely', 'potential'],
            correctAnswer: 'likely',
            explanation: '"Likely to be" expresses probability and is the correct structure.',
            points: 1
          },
          {
            id: 'q5',
            type: 'multiple-choice',
            question: '5. _____',
            options: ['acknowledge', 'accept', 'recognize', 'admit'],
            correctAnswer: 'acknowledge',
            explanation: '"Acknowledge" means to recognize or accept as valid, fitting the context of presenting both sides.',
            points: 1
          },
          {
            id: 'q6',
            type: 'multiple-choice',
            question: '6. _____',
            options: ['Therefore', 'However', 'Moreover', 'Nevertheless'],
            correctAnswer: 'Moreover',
            explanation: '"Moreover" adds additional information, fitting the context of adding another important point.',
            points: 1
          },
          {
            id: 'q7',
            type: 'multiple-choice',
            question: '7. _____',
            options: ['demonstrate', 'show', 'display', 'exhibit'],
            correctAnswer: 'demonstrate',
            explanation: '"Demonstrate expertise" is the most formal and appropriate collocation in academic context.',
            points: 1
          },
          {
            id: 'q8',
            type: 'multiple-choice',
            question: '8. _____',
            options: ['more', 'better', 'well', 'good'],
            correctAnswer: 'better',
            explanation: '"Better guard" means more effectively protect, parallel to "more convincing" earlier.',
            points: 1
          }
        ],
        focusAreas: ['Academic vocabulary', 'Collocations', 'Linking words']
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
        ]
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
        ]
      },
      {
        id: 'b2-m3-l1-cloze-1',
        type: 'multiple-choice-cloze',
        title: 'Multiple Choice Cloze: Professional Email Etiquette',
        text: `In today's business world, email remains a primary form of professional communication. However, many people (1)_____ to follow basic email etiquette, which can damage their professional reputation. The first rule is to always (2)_____ a clear, descriptive subject line that accurately reflects the content of your message. When addressing recipients, it's important to (3)_____ the appropriate level of formality. While "Hi" might be acceptable for colleagues you know well, more formal greetings are (4)_____ when writing to senior management or external clients. The body of the email should be concise and well-organized, (5)_____ the main point early. Many professionals (6)_____ the mistake of writing lengthy emails that bury important information. Before sending, always (7)_____ your message for spelling and grammar errors. Finally, remember that tone can be difficult to (8)_____ in written communication, so choose your words carefully to avoid misunderstandings.`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '1. _____',
            options: ['fail', 'miss', 'lose', 'lack'],
            correctAnswer: 'fail',
            explanation: '"Fail to" means not succeed in doing something, the correct pattern for this context.',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: '2. _____',
            options: ['include', 'contain', 'comprise', 'consist'],
            correctAnswer: 'include',
            explanation: '"Include" is the most natural verb for adding something as a component.',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: '3. _____',
            options: ['employ', 'apply', 'use', 'utilize'],
            correctAnswer: 'use',
            explanation: '"Use" is the most straightforward and appropriate verb in this business context.',
            points: 1
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: '4. _____',
            options: ['required', 'demanded', 'necessary', 'compulsory'],
            correctAnswer: 'required',
            explanation: '"Required" means needed or expected in the context of professional standards.',
            points: 1
          },
          {
            id: 'q5',
            type: 'multiple-choice',
            question: '5. _____',
            options: ['stating', 'saying', 'telling', 'speaking'],
            correctAnswer: 'stating',
            explanation: '"Stating" means expressing something clearly and formally, fitting the professional context.',
            points: 1
          },
          {
            id: 'q6',
            type: 'multiple-choice',
            question: '6. _____',
            options: ['do', 'make', 'take', 'have'],
            correctAnswer: 'make',
            explanation: '"Make a/the mistake" is the correct collocation.',
            points: 1
          },
          {
            id: 'q7',
            type: 'multiple-choice',
            question: '7. _____',
            options: ['proofread', 'review', 'check', 'revise'],
            correctAnswer: 'proofread',
            explanation: '"Proofread" specifically means to check for spelling and grammar errors.',
            points: 1
          },
          {
            id: 'q8',
            type: 'multiple-choice',
            question: '8. _____',
            options: ['convey', 'express', 'communicate', 'transmit'],
            correctAnswer: 'convey',
            explanation: '"Convey" means to communicate or make known, especially tone or feelings.',
            points: 1
          }
        ],
        focusAreas: ['Business vocabulary', 'Collocations', 'Formal writing']
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
            type: 'multiple-choice',
            question: 'Choose the correct phrasal verb: I ___ my old school photos while cleaning the attic.',
            options: ['came across', 'got over', 'put up with', 'turned down'],
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
            type: 'multiple-choice',
            question: 'Which phrase is best for beginning a presentation?',
            options: [
              'Let me conclude...',
              'Let me introduce...',
              'To summarize...',
              'In addition...'
            ],
            correctAnswer: 'Let me introduce...',
            explanation: '"Introduce" se usa al inicio para presentar el tema',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: "I\'d like to ___ three main points before we continue."',
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
            type: 'multiple-choice',
            question: 'According to the text, what is the foundation of a successful presentation?',
            options: [
              'Speaking loudly',
              'Thorough preparation',
              'Expensive equipment',
              'A large audience'
            ],
            correctAnswer: 'Thorough preparation',
            explanation: 'El texto dice: "The foundation of any successful presentation lies in thorough preparation"',
            points: 1
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
            id: 'q4',
            type: 'multiple-choice',
            question: 'What should you do if you don\'t know the answer to a question?',
            options: [
              'Make up an answer',
              'Ignore the question',
              'Say you don\'t know and offer to follow up',
              'Change the subject'
            ],
            correctAnswer: 'Say you don\'t know and offer to follow up',
            explanation: 'El texto recomienda: "it\'s perfectly acceptable to say so and offer to follow up later"',
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
            type: 'multiple-choice',
            question: 'How many main techniques does the speaker share?',
            options: ['Two', 'Three', 'Four', 'Five'],
            correctAnswer: 'Three',
            explanation: 'El speaker dice: "I\'ll share three practical techniques"',
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
            id: 'q3',
            type: 'multiple-choice',
            question: 'What is the first technique mentioned?',
            options: [
              'Breathing exercises',
              'Reframing nervousness as excitement',
              'Practicing out loud',
              'Drinking water'
            ],
            correctAnswer: 'Reframing nervousness as excitement',
            explanation: 'El primer técnica es: "reframing...try saying \'I\'m excited\'"',
            points: 1
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
        ]
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
        id: 'b2-m3-l3-cloze-1',
        type: 'multiple-choice-cloze',
        title: 'Multiple Choice Cloze: Academic Research and Writing',
        text: `Academic writing requires precision, clarity, and rigorous attention to detail. When (1)_____ research, scholars must carefully evaluate sources to ensure they are reliable and relevant. The research process typically begins with formulating a clear hypothesis or research question. Researchers then (2)_____ a comprehensive literature review to understand what has already been published on the topic. This step is crucial because it helps identify (3)_____ in current knowledge and establishes the context for new research. Data collection methods must be carefully chosen and (4)_____ implemented to ensure valid results. Once data has been gathered, it must be systematically analyzed and interpreted. Research findings should be presented objectively, (5)_____ personal biases or opinions. When drawing conclusions, it's important to acknowledge any (6)_____ of the study. Finally, researchers must properly (7)_____ all sources to give credit to previous work and allow readers to verify information. Failing to do so can result in accusations of plagiarism, which can seriously (8)_____ an academic's reputation and career.`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '1. _____',
            options: ['conducting', 'making', 'doing', 'performing'],
            correctAnswer: 'conducting',
            explanation: '"Conducting research" is the standard academic collocation.',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: '2. _____',
            options: ['conduct', 'make', 'do', 'perform'],
            correctAnswer: 'conduct',
            explanation: '"Conduct a literature review" is the correct academic phrase.',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: '3. _____',
            options: ['gaps', 'holes', 'spaces', 'lacks'],
            correctAnswer: 'gaps',
            explanation: '"Gaps in knowledge" is the standard academic expression for missing areas of research.',
            points: 1
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: '4. _____',
            options: ['strictly', 'rigorously', 'strongly', 'firmly'],
            correctAnswer: 'rigorously',
            explanation: '"Rigorously implemented" means executed with extreme thoroughness and care.',
            points: 1
          },
          {
            id: 'q5',
            type: 'multiple-choice',
            question: '5. _____',
            options: ['avoiding', 'preventing', 'escaping', 'evading'],
            correctAnswer: 'avoiding',
            explanation: '"Avoiding" is the most straightforward and appropriate word for staying away from something.',
            points: 1
          },
          {
            id: 'q6',
            type: 'multiple-choice',
            question: '6. _____',
            options: ['limitations', 'restrictions', 'constraints', 'boundaries'],
            correctAnswer: 'limitations',
            explanation: '"Limitations of a study" is the standard academic term for acknowledging weaknesses.',
            points: 1
          },
          {
            id: 'q7',
            type: 'multiple-choice',
            question: '7. _____',
            options: ['cite', 'quote', 'reference', 'mention'],
            correctAnswer: 'cite',
            explanation: '"Cite sources" is the correct academic term for providing references.',
            points: 1
          },
          {
            id: 'q8',
            type: 'multiple-choice',
            question: '8. _____',
            options: ['damage', 'harm', 'hurt', 'injure'],
            correctAnswer: 'damage',
            explanation: '"Damage reputation" is the correct collocation for harming one\'s professional standing.',
            points: 1
          }
        ],
        focusAreas: ['Academic collocations', 'Research vocabulary', 'Formal register']
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
            type: 'multiple-choice',
            question: 'Which is correct?',
            options: [
              'do a decision',
              'make a decision',
              'take a decision (British)',
              'Both b and c'
            ],
            correctAnswer: 'Both b and c',
            explanation: '"Make a decision" (AmE/BrE) y "take a decision" (BrE) son correctas',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: We need to ___ an agreement before Friday.',
            correctAnswer: 'reach',
            explanation: 'La colocación correcta es "reach an agreement"',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Which is INCORRECT?',
            options: [
              'gain experience',
              'obtain experience',
              'get experience',
              'win experience'
            ],
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
            type: 'multiple-choice',
            question: 'What does "break the ice" mean?',
            options: [
              'Destroy something',
              'Make people feel more comfortable',
              'Stop a meeting',
              'Start working'
            ],
            correctAnswer: 'Make people feel more comfortable',
            explanation: '"Break the ice" significa hacer que la gente se sienta más cómoda',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: "Your suggestion is perfect. You really ___ on the head!"',
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
            type: 'multiple-choice',
            question: 'What mistake did the author make early in their career?',
            options: [
              'Working too slowly',
              'Cutting corners to finish quickly',
              'Not collaborating with others',
              'Missing deadlines'
            ],
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
            id: 'q4',
            type: 'multiple-choice',
            question: 'According to the text, what builds trust with clients?',
            options: [
              'Always agreeing with them',
              'Being transparent about issues',
              'Offering discounts',
              'Working faster'
            ],
            correctAnswer: 'Being transparent about issues',
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
            type: 'multiple-choice',
            question: 'What common mistake do Spanish speakers make according to Dr. Lee?',
            options: [
              'Using wrong verb tenses',
              'Saying "make a photo" instead of "take a photo"',
              'Mispronouncing words',
              'Using too many idioms'
            ],
            correctAnswer: 'Saying "make a photo" instead of "take a photo"',
            explanation: 'Dr. Lee menciona: "many Spanish speakers say \'make a photo\' instead of \'take a photo\'"',
            points: 1
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
            id: 'q4',
            type: 'multiple-choice',
            question: 'What does "break the ice" specifically mean?',
            options: [
              'Start a project',
              'End a meeting',
              'Make people feel more comfortable socially',
              'Begin negotiations'
            ],
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
        ]
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
            type: 'multiple-choice',
            question: 'Which is the MOST diplomatic way to disagree?',
            options: [
              'You\'re wrong.',
              'I don\'t agree.',
              'I see your point, but...',
              'That\'s not true.'
            ],
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
            type: 'multiple-choice',
            question: 'What is Mark\'s initial proposal?',
            options: [
              '2.5% price increase',
              '5% price increase',
              '10% price increase',
              'No price increase'
            ],
            correctAnswer: '5% price increase',
            explanation: 'Sarah menciona en el primer email: "you\'re proposing a 5% increase"',
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
            id: 'q4',
            type: 'multiple-choice',
            question: 'What additional clause does Sarah request?',
            options: [
              'Free shipping',
              'Price review in 12 months instead of 18',
              'Return policy',
              'Exclusive agreement'
            ],
            correctAnswer: 'Price review in 12 months instead of 18',
            explanation: 'Sarah pide: "review pricing again in 12 months rather than 18"',
            points: 1
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
            type: 'multiple-choice',
            question: 'What is Emma\'s initial budget request?',
            options: ['$350,000', '$400,000', '$450,000', '$500,000'],
            correctAnswer: '$500,000',
            explanation: 'Emma dice: "We believe the campaign needs a budget of $500,000"',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'What is Michael\'s initial budget proposal?',
            options: ['$350,000', '$400,000', '$450,000', '$500,000'],
            correctAnswer: '$350,000',
            explanation: 'Emma menciona: "finance is proposing we reduce this to $350,000"',
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
            id: 'q4',
            type: 'multiple-choice',
            question: 'What reporting schedule do they agree on?',
            options: [
              'Weekly throughout',
              'Monthly throughout',
              'Bi-weekly for first month, then monthly',
              'No reporting required'
            ],
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
        ]
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
        id: 'b2-m3-l5-cloze-1',
        type: 'multiple-choice-cloze',
        title: 'Multiple Choice Cloze: Workplace Communication Challenges',
        text: `Effective communication in the workplace is essential for success, yet many organizations (1)_____ to create an environment where open dialogue can flourish. One common obstacle is the fear of speaking up, particularly when it (2)_____ to challenging established practices or questioning decisions made by senior management. Employees may worry about the potential (3)_____ of being perceived as difficult or negative. To address this issue, leaders must actively (4)_____ a culture where constructive criticism is welcomed and valued. This involves not only (5)_____ that employees can express concerns, but also demonstrating through actions that their input will be taken seriously. Regular feedback sessions and anonymous suggestion systems can help (6)_____ down communication barriers. However, it's equally important to establish clear guidelines about appropriate communication channels and professional conduct. When disagreements (7)_____, they should be handled promptly and respectfully, with a focus on finding solutions rather than assigning blame. By creating an atmosphere of mutual respect and trust, organizations can ensure that communication (8)_____ as a tool for improvement rather than a source of conflict.`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '1. _____',
            options: ['struggle', 'fight', 'battle', 'compete'],
            correctAnswer: 'struggle',
            explanation: '"Struggle to" means find it difficult to do something, fitting the context of workplace challenges.',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: '2. _____',
            options: ['comes', 'goes', 'gets', 'turns'],
            correctAnswer: 'comes',
            explanation: '"When it comes to" is an idiom meaning regarding or concerning a particular matter.',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: '3. _____',
            options: ['consequences', 'results', 'outcomes', 'effects'],
            correctAnswer: 'consequences',
            explanation: '"Consequences" suggests negative results, fitting the context of workplace fears.',
            points: 1
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: '4. _____',
            options: ['foster', 'grow', 'develop', 'raise'],
            correctAnswer: 'foster',
            explanation: '"Foster a culture" means to encourage and promote the development of something.',
            points: 1
          },
          {
            id: 'q5',
            type: 'multiple-choice',
            question: '5. _____',
            options: ['ensuring', 'assuring', 'securing', 'guaranteeing'],
            correctAnswer: 'ensuring',
            explanation: '"Ensuring" means making certain that something happens, the most appropriate choice.',
            points: 1
          },
          {
            id: 'q6',
            type: 'multiple-choice',
            question: '6. _____',
            options: ['break', 'tear', 'pull', 'knock'],
            correctAnswer: 'break',
            explanation: '"Break down barriers" is the correct phrasal verb meaning to remove obstacles.',
            points: 1
          },
          {
            id: 'q7',
            type: 'multiple-choice',
            question: '7. _____',
            options: ['arise', 'raise', 'rise', 'occur'],
            correctAnswer: 'arise',
            explanation: '"Arise" means to come into being or appear, appropriate for disagreements emerging.',
            points: 1
          },
          {
            id: 'q8',
            type: 'multiple-choice',
            question: '8. _____',
            options: ['serves', 'works', 'acts', 'operates'],
            correctAnswer: 'serves',
            explanation: '"Serves as" means functions as or acts in the role of something.',
            points: 1
          }
        ],
        focusAreas: ['Business phrasal verbs', 'Workplace collocations', 'Professional communication']
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
            type: 'multiple-choice',
            question: 'What percentage of companies are now fully remote according to the text?',
            options: ['6%', '16%', '26%', '36%'],
            correctAnswer: '16%',
            explanation: 'El texto dice: "approximately 16% of companies globally are now fully remote"',
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
            id: 'q4',
            type: 'multiple-choice',
            question: 'What does "asynchronous communication" mean according to the text?',
            options: [
              'Immediate replies required',
              'Video calls only',
              'Responding on own schedule',
              'Face-to-face meetings'
            ],
            correctAnswer: 'Responding on own schedule',
            explanation: 'El texto explica: "employees can respond to messages on their own schedule"',
            points: 2
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
            id: 'q6',
            type: 'multiple-choice',
            question: 'Which skills are mentioned as critical for remote work success?',
            options: [
              'Programming and design',
              'Self-motivation and time management',
              'Sales and marketing',
              'Physical strength and endurance'
            ],
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
            type: 'multiple-choice',
            question: 'What is the most significant shift in education according to Dr. Martinez?',
            options: [
              'Online classes',
              'Personalized learning',
              'Standardized testing',
              'Larger class sizes'
            ],
            correctAnswer: 'Personalized learning',
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
        ]
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

export const B2_EXAM_PREP_COURSE: Module = ALL_MODULES[0];

export const B2_FULL_COURSE = {
  id: 'b2-exam-prep-complete',
  title: 'B2 First (FCE) Exam Preparation - Complete Course',
  level: 'B2',
  description: 'Curso completo de preparación para el examen B2 First (FCE) de Cambridge con ejercicios interactivos, grabación de voz, evaluación de pronunciación y práctica exhaustiva de las 4 habilidades',
  duration: '12-15 semanas',
  totalModules: 3,
  totalLessons: MODULE_1_LESSONS.length + MODULE_2_LESSONS.length + MODULE_3_LESSONS.length,
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
