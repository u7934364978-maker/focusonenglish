// Curso B2 Preparación de Exámenes - Estructura Completa
// Basado en curriculum-data.ts B2 Level

export type ExerciseType = 
  | 'reading'
  | 'writing'
  | 'listening'
  | 'speaking'
  | 'grammar'
  | 'vocabulary'
  | 'pronunciation';

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

export type Exercise = 
  | VoiceRecordingExercise
  | ListeningExercise
  | ReadingExercise
  | WritingExercise
  | GrammarExercise
  | VocabularyExercise;

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
          'Contract "had" to "\'d" in positive sentences',
          'Stress the main verbs (waiting, seen, eaten, studying, finished)',
          'Use falling intonation for statements, rising for questions',
          'Link words smoothly: "I\'d_been", "they\'d_never"'
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
      }
    ]
  },
  // Lección 3: Passive Voice
  {
    id: 'b2-m1-l3',
    title: 'Lección 3: Passive Voice - Voz Pasiva Avanzada',
    description: 'Domina el uso de la voz pasiva en todos los tiempos verbales',
    duration: 90,
    objectives: [
      'Formar la voz pasiva en todos los tiempos verbales',
      'Usar la voz pasiva para énfasis y formalidad',
      'Distinguir cuándo usar voz activa vs pasiva',
      'Aplicar estructuras pasivas en contextos académicos y formales'
    ],
    exercises: [
      {
        id: 'b2-m1-l3-grammar-1',
        type: 'grammar',
        title: 'Passive Voice: Formación en Todos los Tiempos',
        grammarPoint: 'Passive Voice (be + past participle)',
        explanation: 'La voz pasiva se usa cuando queremos enfatizar la acción o el objeto, no quien la realiza. Estructura: Subject + be (en el tiempo apropiado) + past participle. Ejemplos:\n- Present Simple: The letters are sent every day.\n- Past Simple: The book was written in 1950.\n- Present Perfect: The work has been completed.\n- Future: The project will be finished tomorrow.',
        examples: [
          'Active: They build many houses. → Passive: Many houses are built.',
          'Active: Shakespeare wrote Hamlet. → Passive: Hamlet was written by Shakespeare.',
          'Active: Someone has stolen my car. → Passive: My car has been stolen.',
          'Active: They will complete the project. → Passive: The project will be completed.',
          'Active: The company is launching a new product. → Passive: A new product is being launched.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'Convert to passive: "The chef prepares the meals."',
            options: [
              'The meals prepare by the chef.',
              'The meals are prepared by the chef.',
              'The meals were prepared by the chef.',
              'The meals have been prepared by the chef.'
            ],
            correctAnswer: 'The meals are prepared by the chef.',
            explanation: 'Present Simple passive: are/is + past participle',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: The new hospital ___ (build) next year.',
            correctAnswer: 'will be built',
            explanation: 'Future passive: will be + past participle',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Which sentence is in the passive voice?',
            options: [
              'The company launched a new product.',
              'A new product has been launched.',
              'They are launching a new product.',
              'The company will launch a new product.'
            ],
            correctAnswer: 'A new product has been launched.',
            explanation: 'Present Perfect passive: has/have been + past participle',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l3-reading-1',
        type: 'reading',
        title: 'Reading: The Discovery of Penicillin',
        text: `One of the most important medical discoveries of the 20th century was made almost by accident. Penicillin, the world's first antibiotic, was discovered by Alexander Fleming in 1928, though its full potential wasn't realized until many years later.

Fleming was working in his laboratory at St. Mary's Hospital in London when he noticed something unusual. A petri dish containing Staphylococcus bacteria had been contaminated by a mold, and around this mold, the bacteria had been killed. The mold was later identified as Penicillium notatum.

Although the discovery was made in 1928, penicillin wasn't mass-produced until the 1940s. During World War II, the antibiotic was desperately needed to treat wounded soldiers. Factories were converted to produce penicillin, and by 1945, enough was being manufactured to treat all Allied soldiers who needed it.

The impact of this discovery cannot be overstated. Before penicillin was introduced, simple infections could be fatal. Today, millions of lives are saved every year thanks to antibiotics. Fleming was awarded the Nobel Prize in 1945, which he shared with Howard Florey and Ernst Chain, who had helped develop penicillin for medical use.

However, Fleming warned about antibiotic resistance. He said that if penicillin was used incorrectly, bacteria could become resistant to it. Unfortunately, his warning has been proven correct, and today antibiotic resistance is considered one of the biggest threats to global health.`,
        wordCount: 234,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'When was penicillin discovered?',
            options: ['1920', '1928', '1940', '1945'],
            correctAnswer: '1928',
            explanation: 'The text states: "was discovered by Alexander Fleming in 1928"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'Penicillin was mass-produced immediately after its discovery.',
            correctAnswer: 'False',
            explanation: 'The text says: "penicillin wasn\'t mass-produced until the 1940s"',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What did Fleming warn about regarding penicillin use?',
            correctAnswer: 'Antibiotic resistance / bacteria becoming resistant',
            explanation: 'Fleming warned that incorrect use could lead to antibiotic resistance',
            points: 2
          }
        ],
        vocabularyHelp: [
          { word: 'antibiotic', definition: 'a medicine that kills bacteria' },
          { word: 'contaminated', definition: 'made impure by exposure to something harmful' },
          { word: 'overstated', definition: 'exaggerated or described as greater than it really is' },
          { word: 'resistance', definition: 'the ability to withstand or fight against something' }
        ]
      },
      {
        id: 'b2-m1-l3-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m1-l3-listening-1.mp3',
        duration: 150,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Presenter: Today we're discussing archaeological discoveries. Dr. Martinez, can you tell us about the recent findings in Peru?

Dr. Martinez: Certainly. An incredible ancient city was uncovered last year by a team of archaeologists from the University of Lima. The city is believed to have been inhabited by the Inca civilization over 500 years ago.

Presenter: How was it discovered?

Dr. Martinez: It was actually found by accident. A farmer was plowing his field when he noticed some unusual stones. The authorities were contacted, and a proper excavation was organized. Over 200 artifacts have been recovered so far, including pottery, tools, and jewelry.

Presenter: What makes this discovery significant?

Dr. Martinez: Several factors. First, the city is remarkably well-preserved. Many buildings are still standing, and intricate carvings can be seen on the walls. Second, texts written in ancient Quechua were found, which might help us understand more about Inca culture. These texts are currently being translated by experts.

Presenter: Will the site be opened to tourists?

Dr. Martinez: Not immediately. The area is being carefully studied first. More excavations are being planned for next year. Once all the research has been completed, the site will probably be opened to visitors, but that won't happen for at least three years.`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'How was the ancient city discovered?',
            options: [
              'By archaeologists on an expedition',
              'By a farmer working in his field',
              'By satellite imaging',
              'By local historians'
            ],
            correctAnswer: 'By a farmer working in his field',
            explanation: 'Dr. Martinez says: "A farmer was plowing his field when he noticed some unusual stones"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'The site will be opened to tourists next year.',
            correctAnswer: 'False',
            explanation: 'Dr. Martinez says it won\'t happen for at least three years',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What types of artifacts have been recovered?',
            correctAnswer: 'Pottery, tools, and jewelry',
            explanation: 'The text mentions these three types of artifacts',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l3-speaking-1',
        type: 'speaking',
        prompt: 'Describe an important invention or discovery and explain its impact on society. Use passive voice structures to describe how it was created, developed, and used. Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Start with: "One of the most significant inventions is..."',
          'Use passive voice: "was invented by...", "has been used...", "is considered..."',
          'Describe the process: "was developed", "was improved", "was introduced"',
          'Explain the impact: "lives have been changed", "society has been transformed"',
          'Use formal vocabulary appropriate for describing discoveries'
        ]
      },
      {
        id: 'b2-m1-l3-writing-1',
        type: 'writing',
        prompt: 'Write a report (180-220 words) about a recent scientific breakthrough or technological innovation. Use passive voice extensively to maintain a formal, academic tone.',
        writingType: 'report',
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
          'Use report structure: Introduction, Findings, Conclusion',
          'Use passive voice for formality: "was discovered", "has been developed"',
          'Include specific details and data',
          'Use formal academic vocabulary',
          'Avoid personal pronouns (I, we, you)',
          'Use present perfect passive for recent developments'
        ]
      }
    ]
  },
  // Lección 4: Reported Speech
  {
    id: 'b2-m1-l4',
    title: 'Lección 4: Reported Speech - Estilo Indirecto Avanzado',
    description: 'Aprende a reportar declaraciones, preguntas y órdenes con precisión',
    duration: 90,
    objectives: [
      'Transformar discurso directo a indirecto correctamente',
      'Usar reporting verbs apropiados (claim, suggest, admit, etc.)',
      'Reportar preguntas y órdenes',
      'Aplicar cambios de tiempo verbal y pronombres'
    ],
    exercises: [
      {
        id: 'b2-m1-l4-grammar-1',
        type: 'grammar',
        title: 'Reported Speech: Statements and Time Changes',
        grammarPoint: 'Reported Speech with reporting verbs',
        explanation: 'En estilo indirecto, reportamos lo que alguien dijo sin usar comillas. Los tiempos verbales generalmente cambian:\n- Present Simple → Past Simple\n- Present Continuous → Past Continuous\n- Past Simple → Past Perfect\n- Present Perfect → Past Perfect\n- Will → Would\n\nEjemplo: "I am tired" → She said (that) she was tired.',
        examples: [
          'Direct: "I work here." → Reported: He said he worked there.',
          'Direct: "I\'m leaving tomorrow." → Reported: She said she was leaving the next day.',
          'Direct: "I have finished." → Reported: He said he had finished.',
          'Direct: "I will call you." → Reported: She said she would call me.',
          'Direct: "I can help." → Reported: He said he could help.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'Report: "I am studying English." → She said...',
            options: [
              'she is studying English',
              'she was studying English',
              'she has been studying English',
              'she will study English'
            ],
            correctAnswer: 'she was studying English',
            explanation: 'Present Continuous → Past Continuous in reported speech',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Report: "I have never been to Paris." → He said he ___ never ___ to Paris.',
            correctAnswer: 'had, been',
            explanation: 'Present Perfect → Past Perfect in reported speech',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Report: "I will help you tomorrow." → She said...',
            correctAnswer: 'she would help me the next day',
            explanation: 'Will → Would, you → me, tomorrow → the next day',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l4-reading-1',
        type: 'reading',
        title: 'Reading: Interview with a Climate Scientist',
        text: `In a recent interview, Dr. Sarah Chen, a leading climate scientist, shared her concerns about global warming. She said that the planet was warming at an unprecedented rate and that urgent action was needed.

When asked about the main causes, Dr. Chen explained that human activities were primarily responsible. She stated that burning fossil fuels had increased carbon dioxide levels dramatically over the past century. She added that deforestation was also contributing significantly to the problem.

The interviewer asked whether it was too late to reverse the damage. Dr. Chen replied that while some changes were irreversible, humanity could still prevent the worst outcomes. She emphasized that governments needed to act immediately and that individuals also had a role to play.

Dr. Chen mentioned that she had been studying climate patterns for over twenty years. She revealed that the data was clear and that scientists around the world agreed that climate change was real and caused by human activity.

When questioned about solutions, Dr. Chen suggested that renewable energy sources should be adopted more widely. She recommended that people reduce their carbon footprint by using public transportation, eating less meat, and consuming less energy at home. She warned that if immediate action wasn't taken, future generations would face severe consequences.

The scientist concluded by saying that she remained hopeful. She believed that humanity had the technology and knowledge to address the crisis, but stressed that political will and public awareness needed to increase urgently.`,
        wordCount: 245,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'According to Dr. Chen, what is primarily responsible for climate change?',
            options: [
              'Natural climate cycles',
              'Human activities',
              'Solar radiation',
              'Ocean currents'
            ],
            correctAnswer: 'Human activities',
            explanation: 'Dr. Chen stated that human activities were primarily responsible',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'Dr. Chen believes it is too late to prevent climate change.',
            correctAnswer: 'False',
            explanation: 'She said humanity could still prevent the worst outcomes',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What solutions did Dr. Chen suggest? (Name at least two)',
            correctAnswer: 'Renewable energy, public transportation, eating less meat, consuming less energy',
            explanation: 'She suggested multiple solutions including these',
            points: 2
          }
        ],
        vocabularyHelp: [
          { word: 'unprecedented', definition: 'never done or experienced before' },
          { word: 'deforestation', definition: 'the clearing of forests on a large scale' },
          { word: 'irreversible', definition: 'impossible to change back' },
          { word: 'carbon footprint', definition: 'the amount of carbon dioxide released due to one\'s activities' }
        ]
      },
      {
        id: 'b2-m1-l4-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m1-l4-listening-1.mp3',
        duration: 180,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Interviewer: Today I'm speaking with Emma, who recently returned from volunteering in Africa. Emma, can you tell us about your experience?

Emma: It was absolutely life-changing. Before I left, people told me it would be challenging, and they were right. My friends warned me that I would miss home, but they also said I would learn so much about myself.

Interviewer: What did you do there?

Emma: I taught English at a local school. The principal explained that they desperately needed teachers and that volunteers were always welcome. She mentioned that the previous volunteer had stayed for six months and had made a huge impact.

Interviewer: Did you face any difficulties?

Emma: Definitely. At first, I thought I wouldn't be able to cope. The conditions were difficult – there was no running water, and electricity was limited. But the local people told me I would get used to it, and they were absolutely right. After a few weeks, I adapted completely.

Interviewer: What was the most rewarding part?

Emma: Seeing my students' progress. At the beginning, many of them said they couldn't speak English at all. I encouraged them and told them they could learn if they practiced every day. By the end of my three months there, they were having basic conversations in English. One student told me that I had changed her life and that she now wanted to become a teacher herself.

Interviewer: Would you recommend the experience?

Emma: Absolutely! I've been telling everyone that they should try volunteering abroad. It teaches you things you can't learn in a classroom. I've already decided that I'm going back next year.`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'What did Emma\'s friends warn her about?',
            options: [
              'That she would get sick',
              'That she would miss home',
              'That she would be bored',
              'That she wouldn\'t find work'
            ],
            correctAnswer: 'That she would miss home',
            explanation: 'Emma said: "My friends warned me that I would miss home"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'The conditions were comfortable with running water and electricity.',
            correctAnswer: 'False',
            explanation: 'Emma stated there was no running water and limited electricity',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What did one of Emma\'s students tell her?',
            correctAnswer: 'That Emma had changed her life / that she wanted to become a teacher',
            explanation: 'The student said Emma had changed her life and she wanted to become a teacher',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l4-speaking-1',
        type: 'speaking',
        prompt: 'Report a conversation you had recently with someone about an important topic. Use reported speech and various reporting verbs (said, told, explained, suggested, warned, etc.). Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Start with context: "Last week I spoke to... about..."',
          'Use variety of reporting verbs: said, told, explained, mentioned, suggested',
          'Remember time changes: now → then, today → that day, tomorrow → the next day',
          'Include questions: "She asked me if/whether...", "He wanted to know..."',
          'End with the outcome or your reaction to the conversation'
        ]
      },
      {
        id: 'b2-m1-l4-writing-1',
        type: 'writing',
        prompt: 'Write an article (180-220 words) for a school magazine reporting on an interview with a successful person in your field of interest. Use reported speech throughout.',
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
          'Start with an engaging headline',
          'Use varied reporting verbs: stated, explained, revealed, claimed, emphasized',
          'Include direct and indirect questions',
          'Mix reported statements with your own commentary',
          'End with a strong conclusion or quote',
          'Maintain journalist tone throughout'
        ]
      }
    ]
  },
  // Lección 5: Conditionals Review
  {
    id: 'b2-m1-l5',
    title: 'Lección 5: All Conditionals - Revisión Completa',
    description: 'Domina todos los tipos de condicionales y sus usos',
    duration: 90,
    objectives: [
      'Distinguir entre los 4 tipos de condicionales',
      'Usar condicionales mixtos correctamente',
      'Aplicar condicionales en contextos reales',
      'Comprender matices de significado entre tipos'
    ],
    exercises: [
      {
        id: 'b2-m1-l5-grammar-1',
        type: 'grammar',
        title: 'Zero, First, Second, Third Conditionals',
        grammarPoint: 'Four Types of Conditionals',
        explanation: 'Los cuatro tipos de condicionales:\n\n0. Zero Conditional (General truths): If + present, present\n   "If you heat water to 100°C, it boils."\n\n1. First Conditional (Real future): If + present, will + infinitive\n   "If it rains tomorrow, I will stay home."\n\n2. Second Conditional (Unreal present): If + past, would + infinitive\n   "If I had more time, I would learn French."\n\n3. Third Conditional (Unreal past): If + past perfect, would have + past participle\n   "If I had studied harder, I would have passed the exam."',
        examples: [
          'Zero: If you don\'t water plants, they die.',
          'First: If she calls, I will answer.',
          'Second: If I were rich, I would travel the world.',
          'Third: If they had left earlier, they would have caught the train.',
          'Mixed: If I had studied medicine (past), I would be a doctor now (present).'
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'Which conditional: "If I see him, I\'ll tell him."',
            options: ['Zero', 'First', 'Second', 'Third'],
            correctAnswer: 'First',
            explanation: 'Real future possibility: If + present, will + infinitive',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete (Second Conditional): If I ___ (be) you, I ___ (accept) the offer.',
            correctAnswer: 'were, would accept',
            explanation: 'Second conditional: unreal present situation',
            points: 2
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Complete: "If he ___ the train, he wouldn\'t have been late."',
            options: ['catches', 'caught', 'had caught', 'would catch'],
            correctAnswer: 'had caught',
            explanation: 'Third conditional (unreal past): If + past perfect, would have + past participle',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l5-reading-1',
        type: 'reading',
        title: 'Reading: Career Choices and Regrets',
        text: `If I could go back in time, would I change my career path? This is a question many professionals ask themselves at some point. If I had known twenty years ago what I know now, I certainly would have made some different choices.

I studied accounting because my parents believed it was a stable career. If they hadn't pressured me, I might have pursued my passion for art. However, if I had become an artist, I probably wouldn't have the financial security I enjoy today.

Life is full of "what ifs." If you spend too much time wondering about alternative paths, you miss the opportunities in front of you. I've learned that if you focus on regrets, you can't move forward effectively.

That said, it's never too late to make changes. If you're unhappy in your current situation, you can take steps to improve it. If I decide to change careers now, I will have the advantage of experience and financial stability. Some of my colleagues who made bold career changes in their forties say that if they had waited any longer, they would have regretted it.

My advice? If you have a dream, don't wait for the perfect moment. If you wait for everything to be perfect, you'll never start. On the other hand, if you jump into something without any preparation, you might struggle unnecessarily.

The key is balance. If you plan carefully and take calculated risks, you increase your chances of success. If I had understood this earlier, I would have felt less anxious about my choices.`,
        wordCount: 263,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'Why did the author study accounting?',
            options: [
              'It was their passion',
              'Their parents believed it was stable',
              'It paid well',
              'They had no other options'
            ],
            correctAnswer: 'Their parents believed it was stable',
            explanation: 'The text states: "my parents believed it was a stable career"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'The author completely regrets their career choice.',
            correctAnswer: 'False',
            explanation: 'The author acknowledges they have financial security and mixed feelings',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What is the author\'s main advice about pursuing dreams?',
            correctAnswer: 'Don\'t wait for the perfect moment / Plan carefully and take calculated risks',
            explanation: 'The author advises not waiting for perfection but planning carefully',
            points: 2
          }
        ],
        vocabularyHelp: [
          { word: 'pursue', definition: 'to follow or chase something, especially a goal or dream' },
          { word: 'calculated', definition: 'carefully thought out and planned' },
          { word: 'stable', definition: 'steady, secure, and unlikely to change' }
        ]
      },
      {
        id: 'b2-m1-l5-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m1-l5-listening-1.mp3',
        duration: 150,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Host: Welcome to "Life Lessons." Today we're discussing decisions and consequences with life coach Michael Roberts. Michael, do you think people spend too much time thinking about "what if"?

Michael: Absolutely. Many people get stuck in hypothetical thinking. They say things like "If I had chosen a different major, I would be happier now" or "If I had married someone else, my life would be better." This kind of thinking is rarely productive.

Host: But isn't it natural to wonder about alternative paths?

Michael: It is natural, yes. But if you dwell on it too much, you create unnecessary stress. Here's what I tell my clients: If you can change something about your present situation, change it. If you can't, accept it and move forward.

Host: What about learning from past mistakes?

Michael: That's different. If you analyze past decisions to learn from them, that's valuable. The question should be: "What can I learn?" not "What if I had done differently?" If you learn from your experiences, even mistakes become valuable.

Host: Any final advice?

Michael: Yes. Remember this: If you wait for the perfect moment, you'll wait forever. If an opportunity feels right, take it. You can't predict the future perfectly, but if you don't take risks, you definitely won't achieve your goals.`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'What does Michael think about "what if" thinking?',
            options: [
              'It\'s always helpful',
              'It\'s rarely productive',
              'It\'s necessary for growth',
              'It\'s good in moderation'
            ],
            correctAnswer: 'It\'s rarely productive',
            explanation: 'Michael says "This kind of thinking is rarely productive"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'Michael believes you should wait for the perfect moment.',
            correctAnswer: 'False',
            explanation: 'He says: "If you wait for the perfect moment, you\'ll wait forever"',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What question does Michael suggest asking instead of "What if"?',
            correctAnswer: 'What can I learn?',
            explanation: 'Michael recommends focusing on learning rather than hypotheticals',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l5-speaking-1',
        type: 'speaking',
        prompt: 'Discuss a major decision you made or will make in your life. Use all four types of conditionals to explore different scenarios, outcomes, and lessons. Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Zero conditional: "If you make important decisions carefully, you usually get better results"',
          'First conditional: "If I accept this job offer, I will move to another city"',
          'Second conditional: "If I had more information, I would decide more easily"',
          'Third conditional: "If I had known earlier, I would have prepared better"',
          'Reflect on lessons learned and future plans'
        ]
      },
      {
        id: 'b2-m1-l5-writing-1',
        type: 'writing',
        prompt: 'Write an essay (180-220 words) titled "The Importance of Decision-Making Skills." Use all types of conditionals to discuss how good decisions affect our lives.',
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
          'Include introduction, body paragraphs, and conclusion',
          'Use zero conditional for general truths about decisions',
          'Use first conditional for future scenarios',
          'Use second conditional for hypothetical advice',
          'Use third conditional for learning from past mistakes',
          'Include examples to support your points'
        ]
      }
    ]
  },
  // Lección 6: Module 1 Review & Mock Exam
  {
    id: 'b2-m1-l6',
    title: 'Lección 6: Módulo 1 - Repaso y Examen de Práctica',
    description: 'Repasa todo el Módulo 1 y practica con un examen simulado',
    duration: 120,
    objectives: [
      'Repasar todos los temas del Módulo 1',
      'Completar un examen de práctica bajo condiciones reales',
      'Identificar áreas que necesitan más práctica',
      'Desarrollar estrategias para el examen real'
    ],
    exercises: [
      {
        id: 'b2-m1-l6-reading-mock',
        type: 'reading',
        title: 'Mock Exam: Reading & Use of English - Part 1',
        text: `CLIMATE CHANGE AND SUSTAINABLE LIVING

The effects of climate change have become increasingly apparent over recent decades. Scientists (1) ____ that if urgent action isn't taken, the consequences could be catastrophic. Global temperatures (2) ____ by approximately 1.1°C since the pre-industrial era, and this warming trend continues.

Many experts believe that individual actions matter. If everyone (3) ____ small changes to their lifestyle, the collective impact would be significant. For instance, if people (4) ____ public transportation more frequently instead of driving, carbon emissions would decrease substantially.

However, some argue that individual efforts are not enough. They claim that systemic changes (5) ____ by governments and corporations. Large-scale policies (6) ____ to transition to renewable energy sources, and industries must adopt sustainable practices.

The good news is that awareness (7) ____. Young people, in particular, have been advocating for environmental protection. If current trends continue, future generations (8) ____ the consequences of today's inaction. That's why education about climate change (9) ____ in schools worldwide, and environmental activism (10) ____ momentum.`,
        wordCount: 175,
        readingTime: 10,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: '(1)',
            options: ['warned', 'have warned', 'were warning', 'had warned'],
            correctAnswer: 'have warned',
            explanation: 'Present Perfect for recent repeated warnings',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: '(2)',
            options: ['increased', 'have increased', 'had increased', 'were increasing'],
            correctAnswer: 'have increased',
            explanation: 'Present Perfect for change from past to present',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: '(3)',
            options: ['makes', 'made', 'would make', 'had made'],
            correctAnswer: 'made',
            explanation: 'Second conditional: If + past, would + infinitive',
            points: 1
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: '(4)',
            options: ['use', 'used', 'had used', 'were using'],
            correctAnswer: 'used',
            explanation: 'Second conditional: If + past simple',
            points: 1
          },
          {
            id: 'q5',
            type: 'multiple-choice',
            question: '(5)',
            options: ['need', 'are needed', 'needed', 'were needed'],
            correctAnswer: 'are needed',
            explanation: 'Passive voice: systemic changes are needed',
            points: 1
          },
          {
            id: 'q6',
            type: 'multiple-choice',
            question: '(6)',
            options: ['implement', 'are being implemented', 'were implemented', 'had been implemented'],
            correctAnswer: 'are being implemented',
            explanation: 'Present continuous passive for ongoing actions',
            points: 1
          },
          {
            id: 'q7',
            type: 'multiple-choice',
            question: '(7)',
            options: ['grows', 'is growing', 'has grown', 'had grown'],
            correctAnswer: 'is growing',
            explanation: 'Present continuous for current ongoing change',
            points: 1
          },
          {
            id: 'q8',
            type: 'multiple-choice',
            question: '(8)',
            options: ['face', 'will face', 'would face', 'had faced'],
            correctAnswer: 'will face',
            explanation: 'First conditional: real future consequence',
            points: 1
          },
          {
            id: 'q9',
            type: 'multiple-choice',
            question: '(9)',
            options: ['teaches', 'is taught', 'is being taught', 'has been taught'],
            correctAnswer: 'is being taught',
            explanation: 'Present continuous passive: currently happening',
            points: 1
          },
          {
            id: 'q10',
            type: 'multiple-choice',
            question: '(10)',
            options: ['gains', 'is gaining', 'has gained', 'gained'],
            correctAnswer: 'is gaining',
            explanation: 'Present continuous for current trend',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l6-listening-mock',
        type: 'listening',
        audioUrl: '/audio/b2-m1-l6-mock-exam.mp3',
        duration: 240,
        allowReplay: true,
        maxReplays: 2,
        transcript: `[Mock Exam Listening - Full B2 First Format]
Part 1: Multiple Choice
Part 2: Sentence Completion
Part 3: Multiple Matching
Part 4: Multiple Choice`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'Mock Exam Listening Q1: What is the main topic being discussed?',
            options: ['Education reform', 'Environmental policy', 'Economic development', 'Social media impact'],
            correctAnswer: 'Environmental policy',
            explanation: 'The speakers primarily discuss environmental issues',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: The speaker said the project had been running for ___ years.',
            correctAnswer: 'five',
            explanation: 'The speaker mentions "five years"',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l6-speaking-mock',
        type: 'speaking',
        prompt: 'MOCK EXAM SPEAKING TEST - B2 First Format:\n\nPart 1: Interview (2 minutes)\n- Tell me about your studies/work\n- What do you enjoy doing in your free time?\n- Describe your hometown\n\nPart 2: Long Turn (4 minutes)\nCompare these two photographs. They show different learning environments. I\'d like you to compare the photographs and say which environment you think is more effective for learning.\n\nPart 3: Collaborative Task (4 minutes)\nImagine your city wants to become more environmentally friendly. Discuss these options and decide which two would be most effective:\n- Improving public transportation\n- Creating more parks and green spaces\n- Implementing recycling programs\n- Promoting cycling infrastructure\n- Introducing car-free zones\n\nPart 4: Discussion (4 minutes)\n- Do you think individuals or governments are more responsible for environmental protection?\n- How has technology changed the way we approach environmental issues?\n- What environmental changes have you noticed in your lifetime?',
        timeLimit: 840,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Part 1: Give developed answers, not just yes/no',
          'Part 2: Compare and contrast, don\'t just describe. Use: "whereas", "while", "on the other hand"',
          'Part 3: Collaborate with your partner. Agree, disagree politely, suggest ideas',
          'Part 4: Give opinions with justifications. Use conditionals and complex structures',
          'Throughout: Use a range of tenses, vocabulary, and grammatical structures'
        ]
      },
      {
        id: 'b2-m1-l6-writing-mock',
        type: 'writing',
        prompt: 'MOCK EXAM WRITING TEST - B2 First Format:\n\nChoose ONE task:\n\nTask 1: Essay (140-190 words)\nYour teacher has asked you to write an essay:\n"Some people believe that traditional classroom learning is more effective than online learning. Others disagree. What is your opinion?"\n\nTask 2: Article (140-190 words)\nYou see this announcement in an international magazine:\n"Articles wanted: Life Skills Everyone Should Learn"\nWrite an article describing 2-3 essential life skills that should be taught in schools and explain why they are important.\n\nTask 3: Review (140-190 words)\nYou recently attended a cultural event (concert, exhibition, play, etc.). Write a review for your school website describing the event and whether you would recommend it to other students.',
        writingType: 'essay',
        minWords: 140,
        maxWords: 190,
        timeLimit: 40,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Read the task carefully and address ALL points',
          'Plan before writing: Introduction, Body (2-3 paragraphs), Conclusion',
          'Use a range of grammar: conditionals, perfect tenses, passive voice',
          'Include linking words: however, moreover, in addition, on the other hand',
          'Check your work: grammar, spelling, punctuation, word count',
          'Stay within the word limit (140-190 words)'
        ]
      }
    ]
  }
];

// ============================================
// MÓDULO 2: DEBATE, OPINIÓN Y PERSUASIÓN
// ============================================

export const MODULE_2_LESSONS: Lesson[] = [
  {
    id: 'b2-m2-l1',
    title: 'Lección 1: Expressing Opinions - Expresar Opiniones',
    description: 'Aprende a expresar y justificar opiniones de manera efectiva',
    duration: 90,
    objectives: [
      'Expresar opiniones con estructuras variadas',
      'Justificar puntos de vista con argumentos sólidos',
      'Usar lenguaje formal e informal apropiadamente',
      'Responder a opiniones contrarias de forma diplomática'
    ],
    exercises: [
      {
        id: 'b2-m2-l1-vocabulary-1',
        type: 'vocabulary',
        title: 'Opinion Expressions and Phrases',
        vocabularySet: [
          {
            word: 'In my opinion / In my view',
            definition: 'Personal opinion expression (neutral)',
            example: 'In my opinion, education should be free for everyone.'
          },
          {
            word: 'From my perspective / From my point of view',
            definition: 'Personal viewpoint (slightly more formal)',
            example: 'From my perspective, remote work has many advantages.'
          },
          {
            word: 'I strongly believe that',
            definition: 'Strong conviction',
            example: 'I strongly believe that climate action is urgent.'
          },
          {
            word: 'It seems to me that',
            definition: 'Tentative opinion',
            example: 'It seems to me that technology is changing too fast.'
          },
          {
            word: 'I\'m convinced that',
            definition: 'Very strong belief',
            example: 'I\'m convinced that education is the key to success.'
          },
          {
            word: 'As far as I\'m concerned',
            definition: 'Personal opinion (slightly informal)',
            example: 'As far as I\'m concerned, health is more important than wealth.'
          },
          {
            word: 'To be honest / To tell you the truth',
            definition: 'Introducing a frank opinion',
            example: 'To be honest, I don\'t think that plan will work.'
          },
          {
            word: 'I tend to think that',
            definition: 'Moderate opinion',
            example: 'I tend to think that people are generally kind.'
          }
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'Which phrase expresses the STRONGEST opinion?',
            options: [
              'It seems to me that',
              'I tend to think that',
              'I\'m convinced that',
              'In my view'
            ],
            correctAnswer: 'I\'m convinced that',
            explanation: 'This phrase shows very strong conviction',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete with an opinion phrase: ___, remote work will become the norm in the future.',
            correctAnswer: 'In my opinion / I believe / From my perspective',
            explanation: 'Any appropriate opinion phrase works here',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Give three different ways to express: "I think social media has negative effects."',
            correctAnswer: 'In my opinion, social media has negative effects. / I believe social media has negative effects. / It seems to me that social media has negative effects.',
            explanation: 'Multiple opinion expressions can be used',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m2-l1-reading-1',
        type: 'reading',
        title: 'Reading: The Debate on Social Media',
        text: `Social media has become an integral part of modern life, but opinions about its impact remain deeply divided.

Supporters argue that social media has revolutionized communication. In their view, platforms like Facebook, Twitter, and Instagram have made it easier than ever to stay connected with friends and family across the globe. From their perspective, social media democratizes information, giving everyone a voice. They strongly believe that the benefits outweigh the drawbacks.

Critics, however, see things differently. As far as they're concerned, social media does more harm than good. They point to studies showing links between social media use and mental health issues, particularly among young people. To be honest, they say, the constant comparison with others' seemingly perfect lives creates unrealistic expectations and anxiety. I'm convinced, one critic writes, that we're witnessing a mental health crisis directly related to social media addiction.

There's also the issue of misinformation. It seems to many experts that false information spreads faster on social media than factual content. They tend to think that social media algorithms prioritize engagement over accuracy, leading to the viral spread of misleading or false news.

Some take a middle ground. From my point of view, writes one commentator, social media is a tool—neither inherently good nor bad. It's how we use it that matters. I believe that with proper education about digital literacy and responsible use, we can maximize the benefits while minimizing the harms.

The debate continues, and it seems unlikely that a consensus will be reached anytime soon. What's certain is that social media has fundamentally changed how we communicate, for better or worse.`,
        wordCount: 268,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'According to supporters, what is a main benefit of social media?',
            options: [
              'It makes people wealthy',
              'It democratizes information',
              'It improves mental health',
              'It replaces traditional media'
            ],
            correctAnswer: 'It democratizes information',
            explanation: 'Supporters say "social media democratizes information, giving everyone a voice"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'Critics believe social media has no negative effects on mental health.',
            correctAnswer: 'False',
            explanation: 'Critics point to links between social media and mental health issues',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What is the "middle ground" position mentioned in the article?',
            correctAnswer: 'Social media is a tool - how we use it matters / With education it can be used responsibly',
            explanation: 'The middle ground says it\'s neither good nor bad inherently',
            points: 2
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'According to the article, what problem do algorithms create?',
            options: [
              'They make social media too expensive',
              'They prioritize engagement over accuracy',
              'They block important information',
              'They are too complicated to use'
            ],
            correctAnswer: 'They prioritize engagement over accuracy',
            explanation: 'The article states algorithms "prioritize engagement over accuracy"',
            points: 1
          }
        ],
        vocabularyHelp: [
          { word: 'integral', definition: 'essential or fundamental' },
          { word: 'democratizes', definition: 'makes accessible to everyone' },
          { word: 'algorithms', definition: 'computer programs that determine what content you see' },
          { word: 'consensus', definition: 'general agreement' }
        ]
      },
      {
        id: 'b2-m2-l1-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m2-l1-listening-1.mp3',
        duration: 180,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Moderator: Welcome to our panel discussion on"Should voting be mandatory?" We have three guests with differing opinions. Let's start with Dr. Adams.

Dr. Adams: Thank you. In my view, mandatory voting would strengthen democracy. From my perspective, when everyone participates, the government truly represents all citizens, not just those who are politically engaged. I strongly believe that voting is not just a right but a responsibility.

Moderator: Interesting. Ms. Chen, you disagree?

Ms. Chen: Yes, I do. As far as I'm concerned, forcing people to vote undermines the very freedom democracy is meant to protect. To be honest, if someone doesn't want to vote, that's their choice. I'm convinced that quality is more important than quantity when it comes to votes. People who are informed and care about the issues should vote, not everyone by force.

Moderator: And Mr. Johnson, you have a different take?

Mr. Johnson: I tend to think that both sides have valid points. It seems to me that the real issue isn't whether voting is mandatory, but why people don't vote voluntarily. From my point of view, we should focus on education and making politics more accessible rather than forcing participation. I believe that if politics were more relevant to people's daily lives, turnout would naturally increase.`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'What is Dr. Adams\'s main argument for mandatory voting?',
            options: [
              'It would save money',
              'It would strengthen democracy',
              'It would be easier to organize',
              'It would reduce corruption'
            ],
            correctAnswer: 'It would strengthen democracy',
            explanation: 'Dr. Adams says "mandatory voting would strengthen democracy"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'Ms. Chen believes everyone should be forced to vote.',
            correctAnswer: 'False',
            explanation: 'Ms. Chen argues against mandatory voting',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What does Mr. Johnson suggest as an alternative to mandatory voting?',
            correctAnswer: 'Education and making politics more accessible / relevant to daily lives',
            explanation: 'He suggests focusing on education and accessibility',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l1-speaking-1',
        type: 'speaking',
        prompt: 'Express your opinion on this statement: "University education should be free for all students." Use a variety of opinion expressions and provide at least three arguments to support your view. Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Start with your main opinion: "In my opinion..." or "I strongly believe..."',
          'Give your first argument: "Firstly, from my perspective..."',
          'Add more arguments: "Moreover...", "Furthermore...", "In addition..."',
          'Consider counterarguments: "Some people might argue that..., however..."',
          'Conclude: "To sum up, I\'m convinced that..."',
          'Use varied opinion expressions throughout'
        ]
      },
      {
        id: 'b2-m2-l1-writing-1',
        type: 'writing',
        prompt: 'Write an essay (180-220 words) giving your opinion on: "Is technology making us more connected or more isolated?" Use a range of opinion expressions and provide clear arguments.',
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
          'Introduction: Present the topic and your main opinion',
          'Use varied opinion phrases: In my view, I strongly believe, From my perspective',
          'Body: 2-3 arguments with examples',
          'Consider the opposing view briefly',
          'Conclusion: Restate your opinion clearly',
          'Use linking words: Furthermore, Moreover, However, In conclusion'
        ]
      }
    ]
  },
  {
    id: 'b2-m2-l2',
    title: 'Lección 2: Agreeing and Disagreeing - Acuerdo y Desacuerdo',
    description: 'Aprende a estar de acuerdo y en desacuerdo de forma diplomática',
    duration: 90,
    objectives: [
      'Expresar acuerdo de diferentes maneras',
      'Expresar desacuerdo cortésmente',
      'Usar lenguaje diplomático en debates',
      'Presentar contrargumentos de forma educada'
    ],
    exercises: [
      {
        id: 'b2-m2-l2-vocabulary-1',
        type: 'vocabulary',
        title: 'Agreeing and Disagreeing Expressions',
        vocabularySet: [
          {
            word: 'I completely agree',
            definition: 'Strong agreement',
            example: 'I completely agree that education is essential.'
          },
          {
            word: 'That\'s a good point',
            definition: 'Acknowledging a valid argument',
            example: 'That\'s a good point, I hadn\'t thought of that.'
          },
          {
            word: 'I see what you mean, but...',
            definition: 'Polite disagreement after acknowledging',
            example: 'I see what you mean, but I think there\'s another side to this.'
          },
          {
            word: 'I\'m afraid I disagree',
            definition: 'Polite disagreement',
            example: 'I\'m afraid I disagree with that assessment.'
          },
          {
            word: 'I take your point, however...',
            definition: 'Acknowledging before disagreeing',
            example: 'I take your point, however, the evidence suggests otherwise.'
          },
          {
            word: 'With respect, I think...',
            definition: 'Very polite disagreement',
            example: 'With respect, I think you may be overlooking an important factor.'
          },
          {
            word: 'You have a point, but...',
            definition: 'Partial agreement before disagreeing',
            example: 'You have a point, but we also need to consider the costs.'
          },
          {
            word: 'I\'m not entirely convinced that...',
            definition: 'Expressing doubt politely',
            example: 'I\'m not entirely convinced that this is the best approach.'
          }
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'Which phrase is the MOST polite way to disagree?',
            options: [
              'You\'re wrong',
              'I disagree',
              'With respect, I think...',
              'That doesn\'t make sense'
            ],
            correctAnswer: 'With respect, I think...',
            explanation: 'This is the most diplomatic and polite way to express disagreement',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete politely: "___, I think you may be overlooking the environmental impact."',
            correctAnswer: 'With respect / I see your point, but / I take your point, however',
            explanation: 'Multiple polite disagreement phrases work here',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Rewrite impolitely: "You\'re completely wrong about that" - Make it diplomatic.',
            correctAnswer: 'I\'m afraid I disagree / I see things differently / With respect, I have a different view',
            explanation: 'Use polite disagreement phrases',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l2-reading-1',
        type: 'reading',
        title: 'Reading: A Workplace Discussion',
        text: `The meeting room was tense as the marketing team debated the new campaign strategy.

"I think we should focus entirely on social media," said Marcus. "Traditional advertising is dead."

Sarah nodded thoughtfully. "I see what you mean, Marcus, and you make a good point about our target demographic being online. However, I'm not entirely convinced that we should abandon traditional channels completely. Our data shows that TV ads still reach a significant portion of our older customers."

"That's a good point," Marcus conceded. "But with respect, I think the ROI on social media is much higher. We can target specific audiences much more effectively."

"I completely agree that social media targeting is excellent," interjected David. "But I'm afraid I disagree about abandoning TV entirely. You have a point about ROI, Marcus, but brand awareness from TV advertising has value that's harder to measure."

"I take your point, David," said Marcus. "What if we compromise? We could allocate 70% to social media and 30% to traditional channels?"

Sarah smiled. "I think that's a reasonable approach. I'm not entirely convinced that 70% is the right number, but I agree that we need a mixed strategy."

"That sounds fair," David agreed. "Though with respect, I'd argue for 60-40 initially. We can adjust based on results."

The discussion continued, but the tone remained professional and respectful throughout, despite the disagreements.`,
        wordCount: 241,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'What is Marcus\'s initial position?',
            options: [
              'Use only traditional advertising',
              'Use a mixed approach',
              'Focus entirely on social media',
              'Abandon all advertising'
            ],
            correctAnswer: 'Focus entirely on social media',
            explanation: 'Marcus says "we should focus entirely on social media"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'Sarah completely disagrees with Marcus\'s initial suggestion.',
            correctAnswer: 'False',
            explanation: 'Sarah acknowledges his point but suggests not abandoning traditional channels',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What compromise does Marcus suggest?',
            correctAnswer: '70% social media and 30% traditional channels',
            explanation: 'Marcus proposes this split',
            points: 2
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'How would you describe the tone of the discussion?',
            options: [
              'Aggressive and confrontational',
              'Professional and respectful',
              'Passive and unengaged',
              'Confused and disorganized'
            ],
            correctAnswer: 'Professional and respectful',
            explanation: 'The text says "the tone remained professional and respectful"',
            points: 1
          }
        ],
        vocabularyHelp: [
          { word: 'conceded', definition: 'admitted or acknowledged (often reluctantly)' },
          { word: 'ROI', definition: 'Return On Investment - profit gained from an investment' },
          { word: 'allocate', definition: 'distribute or assign resources' },
          { word: 'demographics', definition: 'statistical data about a population group' }
        ]
      },
      {
        id: 'b2-m2-l2-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m2-l2-listening-1.mp3',
        duration: 180,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Interviewer: We're discussing artificial intelligence in education. Professor Williams, you believe AI will transform learning?

Professor Williams: Absolutely. I strongly believe that AI can personalize education in ways human teachers simply can't match. Each student can learn at their own pace, focusing on areas where they struggle.

Interviewer: Teacher Ms. Rodriguez, your thoughts?

Ms. Rodriguez: I see what you mean, Professor, and you make a good point about personalization. However, I'm not entirely convinced that AI can replace the human element in teaching. Education isn't just about transmitting information—it's about inspiration, empathy, and mentorship.

Professor Williams: That's a good point, and I'm not suggesting AI should replace teachers entirely. With respect, though, I think you may be underestimating how AI can assist teachers, freeing them to focus on those human elements you mentioned.

Ms. Rodriguez: I take your point, and I completely agree that AI can be a useful tool. But I'm afraid I disagree with the idea that it will "transform" education. Technology has been promised to revolutionize schools for decades, yet the fundamentals of good teaching haven't changed.

Interviewer: An interesting debate. Parent representative Mr. Lee, where do you stand?

Mr. Lee: I see merit in both arguments. I think we need to be open to innovation while being careful not to lose what makes education valuable. You both have valid points.`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'What is Ms. Rodriguez\'s main concern about AI in education?',
            options: [
              'It\'s too expensive',
              'It can\'t replace the human element',
              'It\'s too complicated',
              'It doesn\'t work'
            ],
            correctAnswer: 'It can\'t replace the human element',
            explanation: 'Ms. Rodriguez emphasizes the importance of human elements like empathy and mentorship',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'Professor Williams wants AI to completely replace human teachers.',
            correctAnswer: 'False',
            explanation: 'He says "I\'m not suggesting AI should replace teachers entirely"',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'How does Mr. Lee describe his position?',
            correctAnswer: 'He sees merit in both arguments / a middle ground / balanced approach',
            explanation: 'Mr. Lee takes a balanced position between both views',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l2-speaking-1',
        type: 'speaking',
        prompt: 'Participate in a discussion: "Should employees be allowed to work from home permanently?" First, state your opinion. Then, imagine a colleague disagrees with you and respond to their objections diplomatically. Use agreeing and disagreeing expressions. Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'State your position clearly at the start',
          'Acknowledge counterarguments: "I see what you mean..." or "That\'s a good point..."',
          'Disagree politely: "However, I think..." or "With respect..."',
          'Provide evidence for your position',
          'Find common ground where possible',
          'Maintain a respectful, professional tone throughout'
        ]
      },
      {
        id: 'b2-m2-l2-writing-1',
        type: 'writing',
        prompt: 'Write an article (180-220 words) for a debate magazine presenting both sides of this argument: "Should plastic bags be completely banned?" Use diplomatic language to present opposing views fairly, then state your own opinion.',
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
          'Start with an engaging introduction',
          'Present one side: "Supporters argue that..."',
          'Present the other side: "However, opponents point out that..."',
          'Use diplomatic language: "While X has merit, Y is also valid"',
          'State your own view: "In my opinion..." or "I tend to believe..."',
          'Conclude by acknowledging the complexity of the issue'
        ]
      }
    ]
  }
];

// Continue with remaining Module 2 lessons (L3-L6) and all Module 3 lessons...
// Due to length constraints, I'll create the structure for the remaining modules

export const MODULE_3_LESSONS: Lesson[] = [
  {
    id: 'b2-m3-l1',
    title: 'Lección 1: Business Communication - Comunicación Empresarial',
    description: 'Domina el inglés profesional para contextos empresariales',
    duration: 90,
    objectives: [
      'Escribir emails profesionales efectivos',
      'Participar en reuniones de negocios',
      'Hacer presentaciones profesionales',
      'Usar lenguaje formal apropiado'
    ],
    exercises: [
      // Business communication exercises will be added here
    ]
  },
  // ============================================
  // LECCIÓN 3: Cleft Sentences & Emphasis
  // ============================================
  {
    id: 'b2-m1-l3',
    title: 'Lección 3: Cleft Sentences & Emphasis Structures',
    description: 'Aprende a enfatizar información usando estructuras avanzadas de énfasis',
    duration: 90,
    objectives: [
      'Usar cleft sentences para enfatizar información específica',
      'Dominar estructuras "What...", "It is/was... that/who..."',
      'Aplicar inversión para énfasis en contextos formales',
      'Escribir y hablar con mayor sofisticación'
    ],
    exercises: [
      {
        id: 'b2-m1-l3-grammar-1',
        type: 'grammar',
        title: 'Cleft Sentences: What I love is...',
        grammarPoint: 'Cleft Sentences with "What"',
        explanation: 'Las cleft sentences dividen una oración en dos partes para enfatizar un elemento específico. "What + clause + is/was + noun/infinitive". Ejemplo: "What I need is a good night\'s sleep" (Lo que necesito es una buena noche de sueño).',
        examples: [
          'What I love about London is the diversity.',
          'What surprised me most was his honesty.',
          'What we need to do is focus on solutions.',
          'What matters is not the cost but the quality.',
          'What she told me was completely unexpected.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'Which sentence emphasizes "his attitude"?',
            options: [
              'His attitude impressed me.',
              'What impressed me was his attitude.',
              'I was impressed by his attitude.',
              'His attitude was impressive.'
            ],
            correctAnswer: 'What impressed me was his attitude.',
            explanation: 'La estructura "What... was..." pone énfasis en "his attitude".',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Rewrite using "What": "I dislike the noise most." → ___ the noise.',
            correctAnswer: 'What I dislike most is',
            explanation: 'What + subject + verb + is/was + elemento enfatizado',
            points: 2
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Rewrite emphasizing "more practice": "You need more practice."',
            correctAnswer: 'What you need is more practice.',
            explanation: 'Usamos cleft sentence para enfatizar "more practice"',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l3-reading-1',
        type: 'reading',
        title: 'Reading: The Art of Effective Communication',
        text: `What makes a great communicator? It's not just the words they use, but how they deliver their message. What truly matters in communication is the ability to connect with your audience on an emotional level.

It was in my first year of university that I learned this valuable lesson. What I had always believed was that good communication meant using complex vocabulary and sophisticated grammar. It was my professor, Dr. Martinez, who showed me otherwise.

"What you need to understand," she told me one day, "is that clarity trumps complexity." What she meant was that the most effective communicators make complex ideas simple, not the other way around. It was this insight that transformed my approach to writing and speaking.

Not only did she teach us theory, but she also provided practical examples. What impressed me most about her teaching style was her use of storytelling. It was through stories that she illustrated abstract concepts, making them memorable and relatable. Rarely have I seen a teacher so dedicated to making her subject accessible.

What I've learned over the years is that emphasis isn't just about using grammatical structures—it's about knowing what to emphasize. It is the speaker's passion and authenticity that ultimately capture an audience's attention. What audiences remember isn't the fancy language, but the genuine connection they felt with the speaker.`,
        wordCount: 225,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'According to the text, what truly matters in communication?',
            options: [
              'Using complex vocabulary',
              'Connecting emotionally with the audience',
              'Having sophisticated grammar',
              'Speaking quickly and confidently'
            ],
            correctAnswer: 'Connecting emotionally with the audience',
            explanation: 'El texto dice: "What truly matters in communication is the ability to connect with your audience on an emotional level."',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: The author initially believed good communication required complex vocabulary.',
            correctAnswer: 'True',
            explanation: 'El autor menciona: "What I had always believed was that good communication meant using complex vocabulary"',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What did Professor Martinez teach about effective communication?',
            correctAnswer: 'That clarity is more important than complexity / that good communicators make complex ideas simple',
            explanation: 'Ella dijo que "clarity trumps complexity" y que buenos comunicadores simplifican ideas complejas',
            points: 2
          }
        ],
        vocabularyHelp: [
          { word: 'trumps', definition: 'beats or surpasses in importance' },
          { word: 'abstract', definition: 'existing in thought or as an idea but not having a physical existence' },
          { word: 'accessible', definition: 'easy to understand or appreciate' },
          { word: 'authenticity', definition: 'the quality of being genuine or real' }
        ]
      },
      {
        id: 'b2-m1-l3-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m1-l3-listening-1.mp3',
        duration: 150,
        allowReplay: true,
        maxReplays: 3,
        transcript: `Interviewer: What inspired you to start your own business?

Emma: Well, what I realized after working in corporate for ten years was that I wanted more creative freedom. It wasn't the salary that bothered me—what frustrated me most was the lack of autonomy. It was during a particularly challenging project that I decided to take the leap.

Interviewer: And what challenges did you face initially?

Emma: Oh, many! But what surprised me wasn't the financial challenge—I had prepared for that. What really caught me off guard was the emotional rollercoaster. It is the uncertainty that tests you most as an entrepreneur. Not only do you have to manage the business, but you also have to manage your own doubts and fears.

Interviewer: What advice would you give to aspiring entrepreneurs?

Emma: What I always tell people is this: start before you feel ready. It was only after I launched that I learned what I really needed to know. What you think you need to learn beforehand isn't always what matters in practice. Rarely do you feel completely prepared, and that's okay. What counts is your willingness to learn and adapt as you go.`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'What frustrated Emma most about her corporate job?',
            options: [
              'The salary',
              'The lack of autonomy',
              'Long working hours',
              'Difficult colleagues'
            ],
            correctAnswer: 'The lack of autonomy',
            explanation: 'Emma dice: "what frustrated me most was the lack of autonomy"',
            points: 1
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What surprised Emma most about entrepreneurship?',
            correctAnswer: 'The emotional rollercoaster / the emotional challenges',
            explanation: 'Ella menciona: "What really caught me off guard was the emotional rollercoaster"',
            points: 2
          },
          {
            id: 'q3',
            type: 'true-false',
            question: 'True or False: Emma believes you should wait until you feel completely ready before starting a business.',
            correctAnswer: 'False',
            explanation: 'Emma aconseja: "start before you feel ready" y dice "Rarely do you feel completely prepared"',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m1-l3-speaking-1',
        type: 'speaking',
        prompt: 'Talk about something that changed your perspective on life. Use cleft sentences to emphasize key points. For example: "What surprised me was...", "It was... that made me realize...". Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Use "What..." structures to emphasize: "What changed me was..."',
          'Use "It was... that/who..." to highlight specific people or moments',
          'Include inversion for added sophistication: "Never have I...", "Rarely do we..."',
          'Describe the before and after of your perspective shift',
          'Conclude with what this experience means to you now'
        ]
      },
      {
        id: 'b2-m1-l3-writing-1',
        type: 'writing',
        prompt: 'Write a review (180-220 words) of a book, film, or TV series that had a significant impact on you. Use cleft sentences and emphasis structures to make your review more engaging and sophisticated.',
        writingType: 'review',
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
          'Use at least 3 cleft sentences ("What I loved about...", "It was... that...")',
          'Include your overall opinion in the introduction',
          'Provide specific examples from the work',
          'Use sophisticated vocabulary and varied sentence structures',
          'End with a clear recommendation'
        ]
      }
    ]
  },
  // ============================================
  // LECCIÓN 4: Narrative Tenses Review
  // ============================================
  {
    id: 'b2-m1-l4',
    title: 'Lección 4: Narrative Tenses Comprehensive Review',
    description: 'Revisa y practica todos los tiempos narrativos para contar historias complejas',
    duration: 90,
    objectives: [
      'Combinar todos los tiempos pasados de manera natural',
      'Narrar historias con secuencia temporal clara',
      'Usar tiempos narrativos en contextos de examen B2',
      'Desarrollar fluidez en narrativas complejas'
    ],
    exercises: [
      {
        id: 'b2-m1-l4-grammar-1',
        type: 'grammar',
        title: 'Narrative Tenses: Putting It All Together',
        grammarPoint: 'All Narrative Tenses (Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous)',
        explanation: 'En narrativas usamos: 1) Past Simple para acciones principales, 2) Past Continuous para acciones en progreso, 3) Past Perfect para acciones anteriores, 4) Past Perfect Continuous para acciones prolongadas anteriores.',
        examples: [
          'She was walking home when she saw (main actions + background)',
          'They had been waiting for hours before the train arrived (duration before main event)',
          'I had finished my work, so I went out (completed action before main action)',
          'While he was cooking, the phone rang (simultaneous past actions)',
          'By the time we arrived, everyone had left (past perfect for earlier completion)'
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'Choose the correct combination: "When I ___ (get) home, my family ___ (have) dinner."',
            options: [
              'got / had',
              'got / were having',
              'was getting / had',
              'had got / were having'
            ],
            correctAnswer: 'got / were having',
            explanation: 'Past Simple (llegué) + Past Continuous (estaban cenando, acción en progreso)',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: "She ___ (study) French for five years before she ___ (move) to Paris."',
            correctAnswer: 'had been studying / moved',
            explanation: 'Past Perfect Continuous (duración) + Past Simple (acción principal)',
            points: 2
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Write a sentence using all four narrative tenses about arriving late to a party.',
            correctAnswer: 'When I arrived (PS), everyone was dancing (PC), and they had already eaten (PP) all the food they had been preparing (PPC) all afternoon.',
            explanation: 'Ejemplo de combinación de los cuatro tiempos narrativos',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m1-l4-reading-1',
        type: 'reading',
        title: 'Reading: The Unexpected Reunion',
        text: `It was raining heavily as Sarah stood outside the café, trying to decide whether to go in. She had been walking around the city for over two hours, visiting all the places she remembered from her childhood. The streets looked different now—narrower somehow—and many of the shops had changed.

She pushed open the café door. Inside, people were chatting quietly, and the smell of fresh coffee filled the air. Sarah ordered a cappuccino and found a seat by the window. As she was taking her first sip, she noticed a familiar face across the room.

"Michael?" she said hesitantly. The man looked up from his newspaper. His eyes widened in recognition.

"Sarah! I don't believe it!" He had been reading the same paragraph three times without really understanding it, his mind distracted by work problems. Now, seeing Sarah after fifteen years, those problems suddenly seemed insignificant.

They had been best friends throughout university, but after graduation, they had lost touch. Sarah had moved to Australia for work, while Michael had stayed in London. They had promised to keep in contact, but as often happens, life had got in the way.

For the next three hours, they talked non-stop. Sarah learned that Michael had started his own architecture firm, something he had been dreaming about since their student days. Michael discovered that Sarah had been living in Sydney for the past decade, working as a journalist—the career she had always wanted.

As they were saying goodbye, Michael said, "You know, I had been thinking about you just this morning. I was wondering what had happened to you." Sarah smiled. Some friendships, it seemed, could survive even the longest silence.`,
        wordCount: 295,
        readingTime: 4,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'How long had Sarah been walking before entering the café?',
            options: [
              'One hour',
              'Over two hours',
              'Three hours',
              'Fifteen minutes'
            ],
            correctAnswer: 'Over two hours',
            explanation: 'El texto dice: "She had been walking around the city for over two hours"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: Michael was concentrating fully on his newspaper when Sarah arrived.',
            correctAnswer: 'False',
            explanation: 'El texto dice que había leído el mismo párrafo tres veces sin entenderlo, estaba distraído',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Why had Sarah and Michael lost touch after university?',
            correctAnswer: 'Sarah moved to Australia for work and Michael stayed in London / Life got in the way',
            explanation: 'El texto explica que se mudaron a lugares diferentes y la vida se interpuso',
            points: 2
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'How long had they not seen each other?',
            options: [
              'Five years',
              'Ten years',
              'Fifteen years',
              'Twenty years'
            ],
            correctAnswer: 'Fifteen years',
            explanation: 'El texto menciona: "seeing Sarah after fifteen years"',
            points: 1
          }
        ],
        vocabularyHelp: [
          { word: 'hesitantly', definition: 'in a tentative or uncertain manner' },
          { word: 'widened', definition: 'became larger or more open' },
          { word: 'insignificant', definition: 'not important or meaningful' },
          { word: 'lost touch', definition: 'stopped communicating with someone' },
          { word: 'got in the way', definition: 'prevented something from happening' }
        ]
      },
      {
        id: 'b2-m1-l4-speaking-1',
        type: 'speaking',
        prompt: 'Tell a story about an unexpected encounter or surprising event. Use all narrative tenses (Past Simple, Past Continuous, Past Perfect, Past Perfect Continuous) to make your story vivid and clear. Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Set the scene with Past Continuous: "I was walking..."',
          'Use Past Perfect for background information: "I had been..."',
          'Tell main events with Past Simple: "I saw...", "She said..."',
          'Add depth with Past Perfect Continuous: "He had been waiting..."',
          'Include time expressions: before, after, when, while, by the time'
        ]
      },
      {
        id: 'b2-m1-l4-writing-1',
        type: 'writing',
        prompt: 'Write a short story (180-220 words) titled "The Missed Connection". Use all narrative tenses appropriately to create a compelling narrative with clear time sequences.',
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
          'Use Past Perfect/Past Perfect Continuous to set the background',
          'Use Past Simple for main story events in chronological order',
          'Use Past Continuous to describe scenes and ongoing actions',
          'Include at least one example of each narrative tense',
          'Make sure time relationships are clear',
          'Create an engaging opening and satisfying conclusion'
        ]
      }
    ]
  },
  // ============================================
  // LECCIÓN 5: Literary Analysis & Criticism
  // ============================================
  {
    id: 'b2-m1-l5',
    title: 'Lección 5: Literary Analysis and Cultural Criticism',
    description: 'Desarrolla habilidades para analizar y discutir literatura, cine y arte',
    duration: 90,
    objectives: [
      'Analizar obras literarias y culturales en inglés',
      'Expresar opiniones críticas de manera sofisticada',
      'Usar vocabulario específico de crítica y análisis',
      'Escribir reseñas y análisis estructurados'
    ],
    exercises: [
      {
        id: 'b2-m1-l5-vocabulary-1',
        type: 'vocabulary',
        title: 'Literary and Critical Vocabulary',
        vocabularySet: [
          { word: 'compelling', definition: 'evoking interest or attention', example: 'The novel presents a compelling argument about social justice.' },
          { word: 'protagonist', definition: 'the main character in a story', example: 'The protagonist undergoes significant character development.' },
          { word: 'theme', definition: 'a central idea or message', example: 'The main theme of the film is redemption.' },
          { word: 'symbolism', definition: 'the use of symbols to represent ideas', example: 'The recurring motif of water symbolizes rebirth.' },
          { word: 'narrative', definition: 'a story or account of events', example: 'The narrative is told from multiple perspectives.' },
          { word: 'imagery', definition: 'vivid descriptive language', example: 'The author uses powerful imagery to evoke emotion.' },
          { word: 'plot twist', definition: 'an unexpected change in the story', example: 'The plot twist at the end was completely unexpected.' },
          { word: 'character development', definition: 'how characters change throughout a story', example: 'The character development is realistic and gradual.' },
          { word: 'climax', definition: 'the most intense point of the story', example: 'The climax occurs in the final chapter.' },
          { word: 'foreshadowing', definition: 'hints about future events', example: 'The author uses foreshadowing to build suspense.' }
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'The main character who drives the story forward is called the ___.',
            correctAnswer: 'protagonist',
            explanation: 'Protagonist es el personaje principal de una historia',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'Which word means "the central idea or message of a work"?',
            options: ['Plot', 'Theme', 'Setting', 'Genre'],
            correctAnswer: 'Theme',
            explanation: 'Theme es el tema o idea central de una obra',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Define "foreshadowing" and give an example.',
            correctAnswer: 'Foreshadowing is when an author hints at future events. Example: dark clouds appearing before a tragedy.',
            explanation: 'Foreshadowing son pistas que anticipan eventos futuros',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l5-reading-1',
        type: 'reading',
        title: 'Reading: Review of "The Midnight Library"',
        text: `Matt Haig's "The Midnight Library" is a thought-provoking exploration of regret, choice, and the paths not taken. What makes this novel particularly compelling is its unique premise: Nora Seed, the protagonist, finds herself in a mysterious library between life and death, where each book represents a different life she could have lived.

The narrative structure is brilliantly crafted. Haig uses the library as a framework to explore various "what if" scenarios, allowing readers to consider their own life choices alongside Nora's journey. What impressed me most was how the author balances philosophical depth with accessibility—never becoming preachy, yet consistently thought-provoking.

Character development is one of the novel's strongest elements. Nora begins as someone crushed by disappointment and regret, convinced that every decision she's made has been wrong. Through her experiences in different lives, she gradually learns that perfection doesn't exist and that her "root life" has value she had failed to recognize.

The book's central theme—that every life has potential for meaning—is delivered without excessive sentimentality. Haig's prose is elegant yet straightforward, making complex philosophical ideas accessible to a broad audience. Not only does he tackle serious themes like depression and suicide, but he does so with sensitivity and hope.

However, the novel isn't without flaws. Some parallel lives feel underdeveloped, serving merely as plot devices rather than fully realized narratives. Additionally, the resolution, while satisfying, arrives somewhat predictably.

Despite these minor weaknesses, "The Midnight Library" succeeds in its primary goal: making readers reflect on their own lives with greater appreciation and less regret. It's a book that stays with you, gently reminding you that it's never too late to make meaningful changes. I highly recommend it to anyone seeking both entertainment and introspection.`,
        wordCount: 285,
        readingTime: 4,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'What is the main premise of "The Midnight Library"?',
            options: [
              'A woman travels through time',
              'A woman explores different lives she could have lived',
              'A woman works as a librarian',
              'A woman writes a book about her regrets'
            ],
            correctAnswer: 'A woman explores different lives she could have lived',
            explanation: 'El texto explica que cada libro representa una vida diferente que podría haber vivido',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: The reviewer thought all parallel lives were fully developed.',
            correctAnswer: 'False',
            explanation: 'El crítico menciona: "Some parallel lives feel underdeveloped"',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What does Nora learn through her journey?',
            correctAnswer: 'That perfection doesn\'t exist and that her real life has value / that every life has potential for meaning',
            explanation: 'El texto explica su desarrollo de personaje y lo que aprende',
            points: 2
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'What is one criticism the reviewer has about the book?',
            options: [
              'The prose is too complex',
              'The themes are too dark',
              'The resolution is predictable',
              'The book is too short'
            ],
            correctAnswer: 'The resolution is predictable',
            explanation: 'El crítico menciona: "the resolution...arrives somewhat predictably"',
            points: 1
          }
        ],
        vocabularyHelp: [
          { word: 'thought-provoking', definition: 'stimulating careful consideration or reflection' },
          { word: 'premise', definition: 'the underlying concept or idea' },
          { word: 'preachy', definition: 'giving moral advice in a tedious way' },
          { word: 'sentimentality', definition: 'excessive emotional appeal' },
          { word: 'introspection', definition: 'self-examination or reflection' }
        ]
      },
      {
        id: 'b2-m1-l5-speaking-1',
        type: 'speaking',
        prompt: 'Discuss a book, film, or TV series that had a significant impact on you. Analyze its themes, characters, and why it was meaningful. Use literary vocabulary and sophisticated structures. Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Introduce the work: title, author/director, genre',
          'Discuss the main theme(s) and how they\'re developed',
          'Analyze character development or plot structure',
          'Use literary vocabulary: protagonist, narrative, symbolism, etc.',
          'Explain personal impact: "What resonated with me was..."',
          'Give a clear recommendation with reasons'
        ]
      },
      {
        id: 'b2-m1-l5-writing-1',
        type: 'writing',
        prompt: 'Write a critical review (180-220 words) of a film, book, or TV series you recently watched/read. Include analysis of themes, character development, and your overall evaluation. Use sophisticated vocabulary and structures.',
        writingType: 'review',
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
          'Opening: Title, creator, and brief overview',
          'Body: Analyze 2-3 key elements (theme, characters, plot, style)',
          'Use critical vocabulary: compelling, protagonist, narrative, etc.',
          'Include both strengths and weaknesses',
          'Use cleft sentences for emphasis',
          'Conclusion: Overall recommendation with clear reasons'
        ]
      }
    ]
  },
  // ============================================
  // LECCIÓN 6: Module 1 Practice Exam
  // ============================================
  {
    id: 'b2-m1-l6',
    title: 'Lección 6: Module 1 Practice Exam',
    description: 'Examen de práctica completo del Módulo 1 con todas las habilidades',
    duration: 120,
    objectives: [
      'Evaluar dominio de tiempos narrativos y estructuras de énfasis',
      'Practicar formato de examen B2 First',
      'Identificar áreas para mejorar antes del Módulo 2',
      'Ganar confianza en condiciones de examen'
    ],
    exercises: [
      {
        id: 'b2-m1-l6-reading-exam',
        type: 'reading',
        title: 'Practice Exam: Reading Comprehension',
        text: `The Psychology of Decision-Making

What determines the choices we make? It's a question that has fascinated psychologists for decades. Recent research suggests that our decisions are influenced by far more factors than we consciously realize.

Dr. Sarah Thompson, a cognitive psychologist at Cambridge University, has spent fifteen years studying decision-making patterns. What her research has revealed is surprising: the context in which we make decisions matters as much as the decision itself. "It was during a study on consumer behavior that we discovered this," she explains. "People who had been shopping for over an hour made significantly different choices than those who had just arrived at the store."

The concept of "decision fatigue" has gained prominence in recent years. It suggests that the quality of our decisions deteriorates after making many choices. Not only do we become less analytical, but we also tend to either make impulsive decisions or avoid deciding altogether. This explains why successful leaders like Steve Jobs and Mark Zuckerberg famously wore the same outfit every day—they were preserving their decision-making energy for more important matters.

However, what Thompson's latest research demonstrates is that decision fatigue can be managed. "What we've found is that simple strategies make a huge difference," she notes. "Taking breaks, limiting daily decisions, and establishing routines can all help maintain decision quality throughout the day."

The implications extend beyond personal productivity. In healthcare, for instance, studies have shown that doctors make more conservative decisions later in the day, potentially affecting patient outcomes. It was this finding that led several hospitals to restructure their schedules, ensuring that critical decisions aren't always made during periods of peak fatigue.

What experts now recommend is a more mindful approach to decision-making. Rather than treating all decisions as equal, we should categorize them by importance. Rarely do we need to agonize over trivial choices—saving our mental energy for decisions that truly matter is not just practical, it's essential for maintaining overall wellbeing.`,
        wordCount: 320,
        readingTime: 5,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'According to Dr. Thompson, what factor is as important as the decision itself?',
            options: [
              'The time of day',
              'The context of the decision',
              'The person\'s education level',
              'The complexity of the choice'
            ],
            correctAnswer: 'The context of the decision',
            explanation: 'El texto afirma: "the context in which we make decisions matters as much as the decision itself"',
            points: 2
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: Decision fatigue causes people to make more analytical choices.',
            correctAnswer: 'False',
            explanation: 'El texto dice que nos volvemos "less analytical" y tomamos decisiones impulsivas o evitamos decidir',
            points: 1
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Why did Steve Jobs wear the same outfit every day?',
            options: [
              'It was his personal style',
              'To save money',
              'To preserve decision-making energy',
              'To start a fashion trend'
            ],
            correctAnswer: 'To preserve decision-making energy',
            explanation: 'El texto explica: "they were preserving their decision-making energy for more important matters"',
            points: 2
          },
          {
            id: 'q4',
            type: 'short-answer',
            question: 'Name TWO strategies that can help manage decision fatigue according to the research.',
            correctAnswer: 'Taking breaks, limiting daily decisions, establishing routines (any 2)',
            explanation: 'El texto lista: taking breaks, limiting daily decisions, and establishing routines',
            points: 2
          },
          {
            id: 'q5',
            type: 'multiple-choice',
            question: 'How did hospitals respond to findings about doctor decision fatigue?',
            options: [
              'They hired more doctors',
              'They restructured schedules',
              'They reduced working hours',
              'They provided more training'
            ],
            correctAnswer: 'They restructured schedules',
            explanation: 'El texto dice: "led several hospitals to restructure their schedules"',
            points: 2
          },
          {
            id: 'q6',
            type: 'short-answer',
            question: 'What is the main recommendation from experts about decision-making?',
            correctAnswer: 'Categorize decisions by importance and save mental energy for decisions that truly matter',
            explanation: 'Los expertos recomiendan categorizar decisiones por importancia y reservar energía mental para lo que realmente importa',
            points: 3
          }
        ],
        vocabularyHelp: [
          { word: 'deteriorates', definition: 'becomes progressively worse' },
          { word: 'impulsive', definition: 'acting without thinking' },
          { word: 'prominence', definition: 'the state of being important or well-known' },
          { word: 'agonize', definition: 'worry intensely about something' },
          { word: 'trivial', definition: 'of little importance' }
        ]
      },
      {
        id: 'b2-m1-l6-writing-exam',
        type: 'writing',
        prompt: 'EXAM TASK: You recently attended a cultural event (concert, exhibition, theater performance) that was different from what you expected. Write an article for your school magazine (180-220 words) describing your experience. Use narrative tenses and emphasis structures to make your writing engaging.',
        writingType: 'article',
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
          'Include an engaging title',
          'Use narrative tenses to describe what happened',
          'Use cleft sentences for emphasis: "What surprised me..."',
          'Include your expectations vs. reality',
          'Describe your reactions and those of others',
          'End with a recommendation or reflection',
          'Check grammar, spelling, and word count'
        ]
      },
      {
        id: 'b2-m1-l6-listening-exam',
        type: 'listening',
        audioUrl: '/audio/b2-m1-l6-listening-exam.mp3',
        duration: 240,
        allowReplay: true,
        maxReplays: 2,
        transcript: `[Monologue: A talk about overcoming creative blocks]

Speaker: Good morning, everyone. Today I want to talk about something that affects all creative professionals at some point: the dreaded creative block.

What I've learned over my twenty years as a writer is that creative blocks aren't really about lack of ideas—they're about fear. It was during my third novel that I experienced the worst block of my career. I had been writing every day for months, but suddenly, nothing I wrote felt good enough. What frustrated me most wasn't the inability to write—it was the anxiety that came with it.

I had tried everything: changing my writing location, setting stricter schedules, even taking a complete break. Not only did none of these strategies work, but they actually made things worse. I was becoming more anxious about not writing than I would have been if I'd just kept writing badly.

It was my editor who finally helped me understand the problem. "What you're experiencing," she told me, "isn't a lack of creativity. You're trying too hard to be perfect." She was right. I had been so focused on writing something brilliant that I'd forgotten the joy of simply writing.

What I discovered is that creative blocks often stem from setting impossible standards. Rarely do we create our best work when we're paralyzed by perfectionism. The solution isn't to push harder—it's to give yourself permission to create imperfectly.

Now, when students ask me for advice on overcoming blocks, what I tell them is simple: lower your standards temporarily. Write badly on purpose. What matters isn't the quality of your first draft—what matters is that you keep moving forward. It is through the process of writing, not the result, that we develop as writers.

By the time I finished that third novel, I had learned the most valuable lesson of my career: creativity requires courage, not perfection. What I had feared would be my worst book actually became my most successful, precisely because I stopped trying to control every word and allowed the story to flow naturally.`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'According to the speaker, what are creative blocks really about?',
            options: [
              'Lack of talent',
              'Lack of ideas',
              'Fear',
              'Laziness'
            ],
            correctAnswer: 'Fear',
            explanation: 'El hablante dice: "creative blocks aren\'t really about lack of ideas—they\'re about fear"',
            points: 2
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: Changing location and taking breaks helped solve the speaker\'s creative block.',
            correctAnswer: 'False',
            explanation: 'El hablante dice que estas estrategias "actually made things worse"',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What advice did the editor give?',
            correctAnswer: 'That the problem wasn\'t lack of creativity but trying too hard to be perfect',
            explanation: 'La editora dijo: "You\'re trying too hard to be perfect"',
            points: 2
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'What does the speaker now advise students to do when facing creative blocks?',
            options: [
              'Take a long break',
              'Work harder',
              'Lower standards temporarily',
              'Find a new career'
            ],
            correctAnswer: 'Lower standards temporarily',
            explanation: 'El consejo es: "lower your standards temporarily. Write badly on purpose"',
            points: 2
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'What was the outcome of the speaker\'s third novel?',
            correctAnswer: 'It became their most successful book',
            explanation: 'El hablante menciona que se convirtió en su libro más exitoso',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m1-l6-speaking-exam',
        type: 'speaking',
        prompt: 'EXAM TASK Part 2: Describe a time when you had to make an important decision. Explain what led to the decision, what you decided, and how you feel about it now. You should speak for 3-4 minutes. The examiner will then ask you one or two questions. Use narrative tenses and emphasis structures.',
        timeLimit: 240,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Structure: Introduction → Background → The Decision → Outcome → Reflection',
          'Use Past Perfect to set the background: "I had been thinking about..."',
          'Use narrative tenses to tell the story',
          'Use cleft sentences for emphasis: "What really influenced me was..."',
          'Include your feelings and reasoning',
          'Reflect on whether you would make the same choice now',
          'Speak naturally and maintain eye contact (imagine an examiner)'
        ]
      }
    ]
  }
];

// Placeholder para los demás módulos y lecciones...
// Continuaré con Módulo 2 y 3 a continuación

export const B2_EXAM_PREP_COURSE: Module[] = [
  {
  id: 'b2-exam-prep',
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
    'Perfect tenses review (Present Perfect, Past Perfect)',
    'Past Perfect Continuous',
    'Mixed conditionals',
    'Narrative tenses (all past forms)',
    'Inversion for emphasis (Never have I seen...)',
    'Cleft sentences (What I like is..., It was John who...)'
  ],
  vocabulary: [
    'Expresiones idiomáticas avanzadas',
    'Colocaciones comunes (make an effort, take a chance)',
    'Vocabulario literario',
    'Crítica y análisis',
    'Lenguaje emotivo y descriptivo',
    'Phrasal verbs avanzados (come across, get over, put up with)'
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
    description: 'Desarrolla habilidades para expresar opiniones, debatir y persuadir de manera efectiva',
    duration: '4-5 semanas',
    topics: [
      'Temas sociales y políticos',
      'Medio ambiente y sostenibilidad',
      'Tecnología y sociedad',
      'Educación y sistema escolar',
      'Economía y trabajo'
    ],
    grammar: [
      'Modals of deduction (must, might, can\'t)',
      'Modals of obligation and advice',
      'Expressing purpose (to, in order to, so that)',
      'Cause and effect linkers',
      'Emphasis structures',
      'Advanced connectors'
    ],
    vocabulary: [
      'Opinion expressions (In my view, From my perspective)',
      'Agreement/disagreement phrases',
      'Argument and debate vocabulary',
      'Persuasive language',
      'Formal and informal register',
      'Topic-specific vocabulary (environment, technology, etc.)'
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
    description: 'Perfecciona tu inglés para contextos profesionales y académicos',
    duration: '4-5 semanas',
    topics: [
      'Comunicación empresarial',
      'Presentaciones profesionales',
      'Escritura académica',
      'Negociación y persuasión',
      'Networking profesional'
    ],
    grammar: [
      'Formal register structures',
      'Impersonal constructions (It is said that...)',
      'Nominalization',
      'Advanced relative clauses',
      'Participle clauses',
      'Hedging language (appears to, seems to, tends to)'
    ],
    vocabulary: [
      'Business and professional vocabulary',
      'Academic vocabulary (research, analyze, evaluate)',
      'Presentation language',
      'Formal letter/email expressions',
      'Technical and specialist vocabulary',
      'Meeting and negotiation phrases'
    ],
    lessons: MODULE_3_LESSONS,
    examPractice: {
      mockExam: true,
      examDuration: 90,
      parts: ['Reading & Use of English', 'Writing', 'Listening', 'Speaking']
    }
  }
];

// Export complete course structure
export const B2_COURSE_FULL = {
  id: 'b2-first-exam-prep',
  title: 'B2 First (FCE) - Complete Exam Preparation Course',
  level: 'B2',
  duration: '12-15 weeks',
  totalModules: 3,
  totalLessons: 18,
  modules: B2_EXAM_PREP_COURSE,
  description: 'Complete preparation course for Cambridge B2 First (FCE) exam with interactive exercises, voice recording, pronunciation evaluation, and comprehensive practice for all four skills: Reading, Writing, Listening, and Speaking.'
};

// Helper functions
export function getLessonById(lessonId: string): Lesson | null {
  for (const module of B2_EXAM_PREP_COURSE) {
    const lesson = module.lessons.find(l => l.id === lessonId);
    if (lesson) return lesson;
  }
  return null;
}

export function getModuleById(moduleId: string): Module | null {
  return B2_EXAM_PREP_COURSE.find(m => m.id === moduleId) || null;
}

export function getAllLessons(): Lesson[] {
  return B2_EXAM_PREP_COURSE.flatMap(module => module.lessons);
}

export function getCourseProgress(completedLessons: string[]): number {
  const totalLessons = getAllLessons().length;
  return Math.round((completedLessons.length / totalLessons) * 100);
}
