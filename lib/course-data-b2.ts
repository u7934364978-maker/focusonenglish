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
      }
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
  // ============================================
  // MÓDULO 3 - LECCIÓN 3: Academic Presentations
  // ============================================
  {
    id: 'b2-m3-l3',
    title: 'Lección 3: Presentaciones Académicas',
    description: 'Desarrolla habilidades para dar presentaciones profesionales y académicas',
    duration: 90,
    objectives: [
      'Estructurar presentaciones efectivas',
      'Usar lenguaje formal de presentación',
      'Manejar preguntas y discusiones',
      'Presentar datos y gráficos con claridad'
    ],
    exercises: [
      {
        id: 'b2-m3-l3-vocabulary-1',
        type: 'vocabulary',
        title: 'Presentation Language',
        vocabularySet: [
          {
            word: 'to outline',
            definition: 'to give the main features or general idea',
            example: 'Let me outline the key points of my presentation.'
          },
          {
            word: 'to elaborate',
            definition: 'to give more details or information',
            example: 'I\'ll elaborate on this point in the next section.'
          },
          {
            word: 'to highlight',
            definition: 'to emphasize or draw attention to',
            example: 'I\'d like to highlight three important findings.'
          },
          {
            word: 'to conclude',
            definition: 'to finish or summarize',
            example: 'To conclude, the results support our hypothesis.'
          },
          {
            word: 'to address',
            definition: 'to deal with or discuss',
            example: 'Now I\'ll address some common questions.'
          }
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'When you want to emphasize something important, you ___  it.',
            options: ['outline', 'highlight', 'elaborate', 'conclude'],
            correctAnswer: 'highlight',
            explanation: 'Highlight significa enfatizar o resaltar.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l3-speaking-1',
        type: 'speaking',
        prompt: 'Give a 3-minute presentation on a topic of your choice (your studies, work, a hobby, or a current issue). Structure: 1) Introduction (outline your topic), 2) Main points (2-3 key ideas), 3) Conclusion. Use formal presentation language: "Today I\'ll outline...", "Firstly..., Secondly...", "To conclude..."',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Start: "Good morning/afternoon. Today I\'d like to talk about..."',
          'Outline: "I\'ll cover three main points: firstly..., secondly..., finally..."',
          'Transitions: "Moving on to...", "Now I\'d like to..."',
          'Emphasize: "I\'d like to highlight that...", "It\'s important to note..."',
          'Conclude: "To sum up...", "In conclusion..."',
          'Speak clearly and at a moderate pace'
        ]
      }
    ]
  },
  // ============================================
  // MÓDULO 3 - LECCIÓN 4: Phrasal Verbs in Context
  // ============================================
  {
    id: 'b2-m3-l4',
    title: 'Lección 4: Phrasal Verbs en Contexto',
    description: 'Domina los phrasal verbs más importantes para nivel B2 en situaciones reales',
    duration: 90,
    objectives: [
      'Aprender phrasal verbs esenciales para B2',
      'Usar phrasal verbs en contextos apropiados',
      'Distinguir entre phrasal verbs separables e inseparables',
      'Reemplazar verbos simples con phrasal verbs cuando sea natural'
    ],
    exercises: [
      {
        id: 'b2-m3-l4-vocabulary-1',
        type: 'vocabulary',
        title: 'Essential B2 Phrasal Verbs',
        vocabularySet: [
          {
            word: 'put up with',
            definition: 'to tolerate or endure something unpleasant',
            example: 'I can\'t put up with this noise anymore.'
          },
          {
            word: 'come across',
            definition: 'to find or meet by chance',
            example: 'I came across an interesting article yesterday.'
          },
          {
            word: 'get over',
            definition: 'to recover from illness or difficult experience',
            example: 'It took her months to get over the breakup.'
          },
          {
            word: 'carry out',
            definition: 'to perform or conduct (a task, experiment)',
            example: 'They carried out extensive research.'
          },
          {
            word: 'bring up',
            definition: 'to raise or mention a topic',
            example: 'Don\'t bring up politics at dinner.'
          },
          {
            word: 'look into',
            definition: 'to investigate or examine',
            example: 'The police are looking into the matter.'
          },
          {
            word: 'turn down',
            definition: 'to refuse or reject',
            example: 'She turned down the job offer.'
          },
          {
            word: 'set up',
            definition: 'to establish or arrange',
            example: 'He set up his own business last year.'
          }
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'When you tolerate something annoying, you ___ it.',
            options: ['put up with', 'get over', 'bring up', 'turn down'],
            correctAnswer: 'put up with',
            explanation: 'Put up with significa tolerar o soportar.',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: The scientists will ___ ___ experiments next month.',
            correctAnswer: 'carry out',
            explanation: 'Carry out significa realizar o llevar a cabo.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m3-l4-speaking-1',
        type: 'speaking',
        prompt: 'Tell a story about a problem you had to deal with. Use at least 5 different phrasal verbs from this lesson naturally (put up with, come across, get over, look into, set up, etc.). Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Describe the problem situation',
          'Use phrasal verbs naturally: "I had to put up with...", "I came across a solution..."',
          'Explain how you looked into options',
          'Describe the outcome: "I finally got over it...", "We set up a new system..."',
          'Make the story coherent and interesting'
        ]
      }
    ]
  },
  // ============================================
  // MÓDULO 3 - LECCIÓN 5: Collocations & Idiomatic Expressions
  // ============================================
  {
    id: 'b2-m3-l5',
    title: 'Lección 5: Colocaciones y Expresiones Idiomáticas',
    description: 'Aprende combinaciones naturales de palabras y expresiones idiomáticas comunes',
    duration: 90,
    objectives: [
      'Dominar colocaciones esenciales (make, do, have, take, etc.)',
      'Usar expresiones idiomáticas apropiadamente',
      'Sonar más natural y fluido en inglés',
      'Evitar traducciones literales incorrectas'
    ],
    exercises: [
      {
        id: 'b2-m3-l5-vocabulary-1',
        type: 'vocabulary',
        title: 'Common Collocations',
        vocabularySet: [
          {
            word: 'make a decision',
            definition: 'to decide something',
            example: 'We need to make a decision by Friday.'
          },
          {
            word: 'do your best',
            definition: 'to try as hard as you can',
            example: 'Just do your best in the exam.'
          },
          {
            word: 'take a chance',
            definition: 'to take a risk',
            example: 'Sometimes you have to take a chance.'
          },
          {
            word: 'make an effort',
            definition: 'to try hard',
            example: 'He made an effort to improve his English.'
          },
          {
            word: 'have a good time',
            definition: 'to enjoy yourself',
            example: 'Did you have a good time at the party?'
          },
          {
            word: 'break the ice',
            definition: 'to make people feel more relaxed (idiom)',
            example: 'A joke can help break the ice at meetings.'
          },
          {
            word: 'hit the nail on the head',
            definition: 'to be exactly right (idiom)',
            example: 'Your analysis hit the nail on the head.'
          },
          {
            word: 'cost an arm and a leg',
            definition: 'to be very expensive (idiom)',
            example: 'That car must have cost an arm and a leg.'
          }
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'When you decide something, you ___ a decision.',
            options: ['do', 'make', 'take', 'have'],
            correctAnswer: 'make',
            explanation: 'La colocación correcta es "make a decision".',
            points: 1
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Complete: Try to ___ your best in the interview.',
            correctAnswer: 'do',
            explanation: 'La colocación es "do your best".',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l5-writing-1',
        type: 'writing',
        prompt: 'Write an article (180-220 words) titled "Taking Risks: When Should You Take a Chance?". Use at least 6 collocations from this lesson (make a decision, take a chance, make an effort, do your best, etc.) and 2-3 idiomatic expressions naturally.',
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
          'Use collocations naturally, don\'t force them',
          'Include: make a decision, take a chance, make an effort, do your best',
          'Add idioms where appropriate: break the ice, hit the nail on the head',
          'Structure: Introduction → Examples → Personal view → Conclusion',
          'Make it engaging and relatable'
        ]
      }
    ]
  },
  // ============================================
  // MÓDULO 3 - LECCIÓN 6: Module 3 & Final Mock Exam
  // ============================================
  {
    id: 'b2-m3-l6',
    title: 'Lección 6: Examen Final de Práctica',
    description: 'Examen completo que integra todo el contenido del curso B2',
    duration: 180,
    objectives: [
      'Evaluar tu preparación completa para el B2 First',
      'Practicar las 4 habilidades en condiciones reales de examen',
      'Identificar fortalezas y áreas de mejora finales',
      'Ganar confianza total para el examen oficial'
    ],
    exercises: [
      {
        id: 'b2-m3-l6-reading-exam',
        type: 'reading',
        title: 'Final Mock Exam: Reading & Use of English (75 minutes)',
        text: `The Rise of Remote Work

The COVID-19 pandemic accelerated a trend that had been developing for years: remote work. What many companies discovered was that productivity didn't necessarily decline when employees worked from home. In fact, several studies have shown that remote workers can be even more productive than their office-based counterparts.

Nevertheless, remote work isn't without its challenges. Many employees struggle with work-life balance when their home becomes their office. Furthermore, the lack of face-to-face interaction can lead to feelings of isolation. Companies have had to put up with these challenges and look into solutions.

Dr. Sarah Johnson, who has been researching workplace dynamics for over fifteen years, claims that "the future of work will likely be hybrid." She suggests that most companies will adopt a model where employees split their time between home and office. This approach, she argues, might be the best way to balance productivity with employee wellbeing.

Critics, however, warn that not all jobs can be done remotely. Moreover, they point out that younger employees might miss out on valuable mentoring opportunities. It is these concerns that companies need to address as they set up their post-pandemic work models.

To conclude, while remote work has proven its viability, the challenge now is to make a decision about what the future workplace should look like. Companies need to make an effort to create environments—whether physical or virtual—where all employees can do their best work.`,
        wordCount: 248,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'According to the text, what did companies discover during the pandemic?',
            options: [
              'Remote work is impossible',
              'Productivity can remain high with remote work',
              'Everyone prefers working from home',
              'Offices are unnecessary'
            ],
            correctAnswer: 'Productivity can remain high with remote work',
            explanation: 'El texto dice que la productividad no necesariamente disminuye.',
            points: 2
          },
          {
            id: 'q2',
            type: 'short-answer',
            question: 'What does Dr. Johnson predict about the future of work?',
            correctAnswer: 'The future will likely be hybrid / A mix of home and office work',
            explanation: 'Ella sugiere que las empresas adoptarán un modelo híbrido.',
            points: 2
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Identify the phrasal verbs in: "Companies have had to put up with these challenges and look into solutions."',
            options: [
              'put up / look into',
              'put up with / look into',
              'have had / look',
              'put / into'
            ],
            correctAnswer: 'put up with / look into',
            explanation: 'Put up with (tolerar) y look into (investigar) son phrasal verbs.',
            points: 2
          },
          {
            id: 'q4',
            type: 'true-false',
            question: 'True or False: The text suggests remote work is perfect without any problems.',
            correctAnswer: 'False',
            explanation: 'El texto menciona varios desafíos del trabajo remoto.',
            points: 1
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'Find THREE collocations with "make" or "do" in the text.',
            correctAnswer: 'make a decision, make an effort, do their best',
            explanation: 'Estas son las colocaciones estándar en el texto.',
            points: 3
          }
        ]
      },
      {
        id: 'b2-m3-l6-listening-exam',
        type: 'listening',
        audioUrl: '/audio/b2-m3-l6-listening-final.mp3',
        duration: 300,
        allowReplay: true,
        maxReplays: 2,
        transcript: `[Complete B2 First Listening Simulation - 5 minutes]
Part 1: Multiple choice questions about work-life balance
Part 2: Note-taking exercise about a conference presentation
Part 3: Multiple matching about people discussing challenges
Part 4: Extended monologue about future trends`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'Listening Part 1 - Question 1: What is the speaker\'s main concern?',
            options: [
              'Salary',
              'Work-life balance',
              'Career progression',
              'Office location'
            ],
            correctAnswer: 'Work-life balance',
            explanation: 'El speaker enfatiza la importancia del equilibrio.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m3-l6-speaking-exam',
        type: 'speaking',
        prompt: 'FINAL MOCK EXAM SPEAKING (15 minutes total)\n\nPart 1: Interview (2 minutes)\n- Personal questions about work, studies, hobbies\n\nPart 2: Long Turn (4 minutes)\nCompare two photos about "modern technology" or "different ways of communication". Speculate about situations, people\'s feelings, advantages/disadvantages.\n\nPart 3: Collaborative Task (4 minutes)\nDiscuss with a partner: "What makes a good workplace?" Consider: salary, colleagues, work-life balance, career development, location.\n\nPart 4: Discussion (5 minutes)\nExtended discussion about the future of work, technology\'s impact, generational differences in workplace expectations.\n\nUse ALL structures from the course:\n- Narrative tenses\n- Cleft sentences\n- Modal verbs\n- Passive voice\n- Reported speech\n- Linking words\n- Phrasal verbs\n- Collocations',
        timeLimit: 900,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Part 1: Be natural, elaborate on answers',
          'Part 2: Compare, contrast, speculate',
          'Part 3: Collaborate: agree, disagree politely, build on ideas',
          'Part 4: Express sophisticated opinions',
          'Use varied grammar and vocabulary',
          'Maintain fluency and natural interaction'
        ]
      },
      {
        id: 'b2-m3-l6-writing-exam',
        type: 'writing',
        prompt: 'FINAL MOCK EXAM WRITING (80 minutes total)\n\nPart 1: Essay (COMPULSORY - 40 minutes)\n"Some people believe that technology has made our lives easier and more connected. Others argue that it has made us more isolated and dependent. Discuss both views and give your own opinion."\n(140-190 words)\n\nPart 2: Choose ONE (40 minutes):\n\nOption A: Article\n"Write an article for a careers website titled \'The Skills You Need for Future Success\'. Discuss what skills will be most valuable in the changing workplace."\n(140-190 words)\n\nOption B: Report\n"Your company is considering implementing a 4-day work week. Write a report outlining the advantages and disadvantages, and make a recommendation."\n(140-190 words)\n\nOption C: Review\n"Write a review of a book, film, or documentary about technology, innovation, or social change. Evaluate its effectiveness and recommend it (or not) to readers."\n(140-190 words)\n\nUse throughout:\n- Complex grammar (conditionals, passive, clefts)\n- Advanced vocabulary (collocations, phrasal verbs)\n- Sophisticated linking words\n- Formal/semi-formal register as appropriate',
        writingType: 'essay',
        minWords: 140,
        maxWords: 190,
        timeLimit: 80,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Read all options carefully before choosing',
          'Plan both pieces (5-7 minutes each)',
          'Part 1 Essay: Introduction → Both views → Your opinion → Conclusion',
          'Part 2: Match format to task type',
          'Use paragraph breaks clearly',
          'Vary sentence structure and length',
          'Include examples to support points',
          'Check grammar, spelling, word count (10 minutes)',
          'Ensure handwriting is clear (in real exam)'
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
