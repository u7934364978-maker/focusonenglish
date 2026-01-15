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
          'Contract "had" to "'d" in positive sentences',
          'Stress the main verbs (waiting, seen, eaten, studying, finished)',
          'Use falling intonation for statements, rising for questions',
          'Link words smoothly: "I'd_been", "they'd_never"'
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
  }
];

// Placeholder para los demás módulos y lecciones...
// Continuaré con más lecciones en el siguiente archivo

export const B2_EXAM_PREP_COURSE: Module = {
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
};
