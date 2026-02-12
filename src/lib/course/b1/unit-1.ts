import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = [
  // --- FLASHCARDS: Identity & Life Stages (1-10) ---
  {
    id: 'b1-u1-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Identity',
          back: 'Identidad',
          example: 'Music is an important part of my identity.',
          pronunciation: '/aɪˈden.tɪ.ti/',
          explanation: 'Who a person is, or the qualities of a person or group that make them different from others.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e2',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Milestone',
          back: 'Hito / Momento clave',
          example: 'Graduating from university was a major milestone in my life.',
          pronunciation: '/ˈmaɪl.stəʊn/',
          explanation: 'Un evento muy importante en el desarrollo o historia de algo o alguien.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e3',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To settle down',
          back: 'Establecerse',
          example: 'They decided to settle down in a small town after years of traveling.',
          pronunciation: '/tuː ˈset.əl daʊn/',
          explanation: 'Empezar a vivir una vida tranquila en un lugar fijo, a menudo casándose.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e4',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Upbringing',
          back: 'Crianza',
          example: 'Her strict upbringing influenced her professional discipline.',
          pronunciation: '/ˈʌpˌbrɪŋ.ɪŋ/',
          explanation: 'La forma en que alguien fue educado y cuidado durante su infancia.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e5',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To look up to someone',
          back: 'Admirar a alguien',
          example: 'I have always looked up to my older sister.',
          pronunciation: '/tuː lʊk ʌp tuː/',
          explanation: 'Sentir un gran respeto y admiración por una persona.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e6',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Current',
          back: 'Actual',
          example: 'What is your current role at the company?',
          pronunciation: '/ˈkʌr.ənt/',
          explanation: 'Ojo: no significa "común". Significa lo que está ocurriendo ahora.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e7',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To be used to',
          back: 'Estar acostumbrado a',
          example: 'I am used to working in multicultural environments.',
          pronunciation: '/tuː biː juːzd tuː/',
          explanation: 'Indica que algo ya no es nuevo o extraño para ti.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e8',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Values',
          back: 'Valores',
          example: 'Integrity and honesty are core values in this organization.',
          pronunciation: '/ˈvæl.juːz/',
          explanation: 'Principios o estándares de comportamiento que uno considera importantes.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e9',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Achievement',
          back: 'Logro / Éxito',
          example: 'Winning the award was her greatest achievement.',
          pronunciation: '/əˈtʃiːv.mənt/',
          explanation: 'Algo muy bueno y difícil que has logrado con esfuerzo.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e10',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To stay in touch',
          back: 'Mantener el contacto',
          example: 'We promised to stay in touch after the summer camp ended.',
          pronunciation: '/tuː steɪ ɪn tʌtʃ/',
          explanation: 'Mantener la comunicación con alguien a pesar de la distancia o el tiempo.'
        }
      ]
    } as any
  },

  // --- MULTIPLE CHOICE: Grammar Focus (11-20) ---
  {
    id: 'b1-u1-e11',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Action vs. State',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ what you mean, but I don\'t agree.',
          options: ['see', 'am see', 'sees', 'am seeing'],
          correctAnswer: 0,
          explanation: '"See" es un state verb cuando significa "entender", por lo que no suele ir en -ing.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e12',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Current Trends',
      instructions: 'Select the best option for a changing situation.',
      questions: [
        {
          id: 'q1',
          question: 'The number of people working from home ___ every year.',
          options: ['is increase', 'is increasing', 'increases', 'increase'],
          correctAnswer: 1,
          explanation: 'Usamos el Present Continuous para tendencias y situaciones que están cambiando.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e13',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Habits vs. Temporary Actions',
      instructions: 'Choose the correct tense.',
      questions: [
        {
          id: 'q1',
          question: 'I usually drive to work, but this week I ___ the train.',
          options: ['take', 'am taking', 'takes', 'am take'],
          correctAnswer: 1,
          explanation: 'Present Simple para el hábito ("usually drive") y Continuous para lo temporal ("this week").'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e14',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'State Verbs: Think',
      instructions: 'Choose based on the meaning.',
      questions: [
        {
          id: 'q1',
          question: 'Wait a minute, I ___ about what you said.',
          options: ['thinks', 'am thinking', 'think', 'am think'],
          correctAnswer: 1,
          explanation: 'Cuando "think" se refiere al proceso mental activo, podemos usar -ing.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e15',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'State Verbs: Opinion',
      instructions: 'Choose based on the meaning.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ that this is the best solution for us.',
          options: ['am think', 'think', 'thinks', 'am thinking'],
          correctAnswer: 1,
          explanation: 'Cuando "think" significa "tener una opinión", es un state verb (no -ing).'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e16',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Frequency Adverbs',
      instructions: 'Identify the correct position.',
      questions: [
        {
          id: 'q1',
          question: 'Which sentence is grammatically correct?',
          options: ['Always I am meeting new people in my job.', 'I am always meeting new people in my job.', 'I always am meeting new people in my job.', 'I am meeting always new people in my job.'],
          correctAnswer: 1,
          explanation: 'El adverbio va después del verbo "to be". El Present Continuous con "always" a veces indica una frecuencia sorprendente o molesta.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e17',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'State Verbs: Have',
      instructions: 'Choose based on the meaning.',
      questions: [
        {
          id: 'q1',
          question: 'Shh! She ___ a very important phone call right now.',
          options: ['has', 'is having', 'have', 'is have'],
          correctAnswer: 1,
          explanation: '"Have" puede ir en -ing cuando forma parte de una expresión de acción (have a call, have lunch).'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e18',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'State Verbs: Possession',
      instructions: 'Choose based on the meaning.',
      questions: [
        {
          id: 'q1',
          question: 'They ___ a beautiful house in the countryside.',
          options: ['are have', 'has', 'are having', 'have'],
          correctAnswer: 3,
          explanation: 'Cuando "have" significa posesión, es un state verb (no -ing).'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e19',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Future Arrangements',
      instructions: 'Present Continuous for the future.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ my mentor tomorrow at 10 AM.',
          options: ['meets', 'am meeting', 'meet', 'am meet'],
          correctAnswer: 1,
          explanation: 'Usamos el Present Continuous para planes fijos y citas en el futuro.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e20',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'General Truths',
      instructions: 'Present Simple for permanent states.',
      questions: [
        {
          id: 'q1',
          question: 'My family ___ from a small village in the north.',
          options: ['come', 'is coming', 'are coming', 'comes'],
          correctAnswer: 3,
          explanation: 'Usamos el Present Simple para estados permanentes u orígenes.'
        }
      ]
    } as any
  },

  // --- MATCHING: Vocabulary & Definitions (21-27) ---
  {
    id: 'b1-u1-e21',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Life Events',
      instructions: 'Match the phrase with its definition.',
      pairs: [
        { id: '1', left: 'To graduate', right: 'To successfully complete a course of study' },
        { id: '2', left: 'To get promoted', right: 'To be given a more important job' },
        { id: '3', left: 'To take up', right: 'To start a new hobby or activity' },
        { id: '4', left: 'To grow up', right: 'To spend your childhood in a place' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e22',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Character Traits',
      instructions: 'Match the adjective with its description.',
      pairs: [
        { id: '1', left: 'Ambitious', right: 'Determined to be successful' },
        { id: '2', left: 'Reliable', right: 'Can be trusted to do something well' },
        { id: '3', left: 'Outgoing', right: 'Friendly and energetic with others' },
        { id: '4', left: 'Sensible', right: 'Acting with good judgment' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e23',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Work Collocations',
      instructions: 'Match the verb with the noun.',
      pairs: [
        { id: '1', left: 'Pursue', right: 'A career' },
        { id: '2', left: 'Earn', right: 'A living' },
        { id: '3', left: 'Meet', right: 'A deadline' },
        { id: '4', left: 'Gain', right: 'Experience' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e24',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Identity Terms',
      instructions: 'Match the English term with its Spanish equivalent.',
      pairs: [
        { id: '1', left: 'Role model', right: 'Modelo a seguir' },
        { id: '2', left: 'Self-esteem', right: 'Autoestima' },
        { id: '3', left: 'Belonging', right: 'Pertenencia' },
        { id: '4', left: 'Heritage', right: 'Herencia / Legado' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e25',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Phrasal Verbs (Relationships)',
      instructions: 'Match the verb with its meaning.',
      pairs: [
        { id: '1', left: 'Get on with', right: 'Have a good relationship' },
        { id: '2', left: 'Look back on', right: 'Think about the past' },
        { id: '3', left: 'Fall out with', right: 'Argue and stop being friends' },
        { id: '4', left: 'Keep in touch', right: 'Maintain contact' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e26',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Time Expressions',
      instructions: 'Match the phrase with its use.',
      pairs: [
        { id: '1', left: 'Currently', right: 'For actions happening now' },
        { id: '2', left: 'These days', right: 'For modern trends' },
        { id: '3', left: 'On Tuesdays', right: 'For habitual routines' },
        { id: '4', left: 'At the moment', right: 'Right now' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e27',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Synonyms',
      instructions: 'Match the words with similar meanings.',
      pairs: [
        { id: '1', left: 'Vivid', right: 'Clear and detailed' },
        { id: '2', left: 'Tough', right: 'Difficult' },
        { id: '3', left: 'Essential', right: 'Extremely important' },
        { id: '4', left: 'Significant', right: 'Meaningful' }
      ]
    } as any
  },

  // --- FILL-BLANK: Contextual Grammar (28-37) ---
  {
    id: 'b1-u1-e28',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Describing Your Life',
      instructions: 'Fill in the correct form: Present Simple or Continuous.',
      questions: [
        {
          id: 'q1',
          text: 'At the moment, I ___ in London while I finish my studies. (live)',
          correctAnswer: 2,
          explanation: 'Situación temporal: Continuous.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e29',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'State Verbs Check',
      instructions: 'Complete with the correct form of the verb in brackets.',
      questions: [
        {
          id: 'q1',
          text: 'Do you ___ why identity is so important? (understand)',
          correctAnswer: 2,
          explanation: '"Understand" es un state verb.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e30',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Work Routine',
      instructions: 'Fill in the blank with the negative form.',
      questions: [
        {
          id: 'q1',
          text: 'My manager ___ usually attend the morning meetings. (not)',
          correctAnswer: 2t",
          explanation: 'Present Simple negativo para hábitos (3ª persona).'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e31',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Changing Habits',
      instructions: 'Complete the sentence with the correct form.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ to learn a new language this year. (try)',
          correctAnswer: 2,
          explanation: 'Proceso en curso durante un periodo de tiempo.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e32',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Belonging',
      instructions: 'Complete with the correct form.',
      questions: [
        {
          id: 'q1',
          text: 'This old photograph ___ to my grandmother. (belong)',
          correctAnswer: 2,
          explanation: '"Belong" indica posesión/estado: Present Simple.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e33',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'State Verbs: Want',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ to travel more in the future. (want)',
          correctAnswer: 2,
          explanation: '"Want" es un state verb (deseo).'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e34',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'State Verbs: Seem',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          text: 'You ___ a bit tired today. Is everything okay? (seem)',
          correctAnswer: 2,
          explanation: '"Seem" es un state verb (apariencia).'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e35',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Modern Trends',
      instructions: 'Complete with the verb "get".',
      questions: [
        {
          id: 'q1',
          text: 'The weather ___ colder and colder. (get)',
          correctAnswer: 2,
          explanation: 'Situación en cambio progresivo: Continuous.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e36',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Preferences',
      instructions: 'Complete with the correct form.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ coffee to tea in the morning. (prefer)',
          correctAnswer: 2,
          explanation: '"Prefer" es un state verb (gusto).'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e37',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Sense Verbs',
      instructions: 'Complete with the correct form.',
      questions: [
        {
          id: 'q1',
          text: 'This soup ___ delicious! What is the secret? (taste)',
          correctAnswer: 2,
          explanation: 'Cuando describe una cualidad, "taste" es un state verb.'
        }
      ]
    } as any
  },

  // --- SENTENCE BUILDING: Syntax & Order (38-45) ---
  {
    id: 'b1-u1-e38',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Identity Question',
      instructions: 'Order the words to form a question.',
      sentences: [
        {
          id: 's1',
          words: ['do', 'How', 'yourself', 'define', 'you', '?'],
          correctSentence: 'How do you define yourself?',
          translation: '¿Cómo te defines a ti mismo?',
          points: 5
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e39',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Current Project',
      instructions: 'Order the words to describe a current action.',
      sentences: [
        {
          id: 's1',
          words: ['working', 'I', 'am', 'on', 'a', 'big', 'project', '.'],
          correctSentence: 'I am working on a big project.',
          translation: 'Estoy trabajando en un proyecto grande.',
          points: 5
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e40',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Habitual Action',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['They', 'often', 'go', 'to', 'the', 'gym', 'together', '.'],
          correctSentence: 'They often go to the gym together.',
          translation: 'Ellos a menudo van al gimnasio juntos.',
          points: 5
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e41',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'State Verb Sentence',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['believe', 'I', 'that', 'honesty', 'is', 'essential', '.'],
          correctSentence: 'I believe that honesty is essential.',
          translation: 'Creo que la honestidad es esencial.',
          points: 5
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e42',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Frequency and To Be',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['She', 'is', 'always', 'available', 'to', 'help', '.'],
          correctSentence: 'She is always available to help.',
          translation: 'Ella siempre está disponible para ayudar.',
          points: 5
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e43',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Temporary Situation',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'staying', 'are', 'with', 'friends', 'this', 'week', '.'],
          correctSentence: 'We are staying with friends this week.',
          translation: 'Nos estamos quedando con amigos esta semana.',
          points: 5
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e44',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Changing Situation',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['English', 'skills', 'My', 'getting', 'are', 'better', '.'],
          correctSentence: 'My English skills are getting better.',
          translation: 'Mis habilidades de inglés están mejorando.',
          points: 5
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e45',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Future Arrangement',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['am', 'I', 'dinner', 'having', 'with', 'Mark', 'tonight', '.'],
          correctSentence: 'I am having dinner with Mark tonight.',
          translation: 'Voy a cenar con Mark esta noche.',
          points: 5
        }
      ]
    } as any
  },

  // --- SPEAKING ANALYSIS: Pronunciation & Fluency (46-50) ---
  {
    id: 'b1-u1-e46',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Achievement',
      instructions: 'Say the word "Achievement" clearly.',
      questions: [
        {
          id: 'q1',
          text: 'Achievement',
          correctAnswer: 2,
          explanation: 'Presta atención a la /tʃ/ central y a la /v/ final.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e47',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Background',
      instructions: 'Say the word "Background".',
      questions: [
        {
          id: 'q1',
          text: 'Background',
          correctAnswer: 2,
          explanation: 'La vocal de "back" es abierta /æ/, y "ground" termina en /nd/.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e48',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Short Intro',
      instructions: 'Read this sentence out loud.',
      questions: [
        {
          id: 'q1',
          text: 'I am currently working on my personal brand.',
          correctAnswer: 2,
          explanation: 'Mantén el ritmo y une "working on".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e49',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Milestone',
      instructions: 'Say the word "Milestone".',
      questions: [
        {
          id: 'q1',
          text: 'Milestone',
          correctAnswer: 2,
          explanation: 'Dos sílabas claras: /ˈmaɪl.stəʊn/.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e50',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Habit Description',
      instructions: 'Read this sentence out loud.',
      questions: [
        {
          id: 'q1',
          text: 'I usually wake up early to exercise.',
          correctAnswer: 2,
          explanation: 'Pronuncia bien "usually" /ˈjuː.ʒu.ə.li/.'
        }
      ]
    } as any
  },

  // --- FLASHCARDS: Advanced Vocabulary (51-60) ---
  {
    id: 'b1-u1-e51',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To end up',
          back: 'Terminar / Acabar (en una situación)',
          example: 'I always dreamed of living in Japan, and now I do!',
          pronunciation: '/tuː end ʌp/',
          explanation: 'Llegar a una situación o lugar que no habías planeado originalmente.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e52',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To turn out',
          back: 'Resultar / Resultar ser',
          example: 'The interview turned out to be much easier than I expected.',
          pronunciation: '/tuː tɜːn aʊt/',
          explanation: 'Tener un resultado final, especialmente uno inesperado.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e53',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Turning point',
          back: 'Punto de inflexión',
          example: 'Meeting my mentor was a major turning point in my career.',
          pronunciation: '/ˈtɜː.nɪŋ pɔɪnt/',
          explanation: 'Un momento en el que ocurre un cambio muy importante en una situación.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e54',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To make up one\'s mind',
          back: 'Decidirse',
          example: 'I haven\'t made up my mind about the job offer yet.',
          pronunciation: '/tuː meɪk ʌp wʌnz maɪnd/',
          explanation: 'Llegar a una decisión final después de pensarlo.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e55',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To look forward to',
          back: 'Tener ganas de / Esperar con ansia',
          example: 'I am looking forward to starting my new project.',
          pronunciation: '/tuː lʊk ˈfɔː.wəd tuː/',
          explanation: 'Sentirse emocionado por algo que va a ocurrir en el futuro.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e56',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Outcome',
          back: 'Resultado',
          example: 'We are still waiting for the final outcome of the meeting.',
          pronunciation: '/ˈaʊt.kʌm/',
          explanation: 'El resultado o efecto de una acción o evento.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e57',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To face a challenge',
          back: 'Enfrentar un desafío',
          example: 'She had to face many challenges before becoming successful.',
          pronunciation: '/tuː feɪs ə ˈtʃæl.ɪndʒ/',
          explanation: 'Afrontar una situación difícil que requiere esfuerzo.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e58',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To take a chance',
          back: 'Arriesgarse',
          example: 'You have to take a chance if you want to change your life.',
          pronunciation: '/tuː teɪk ə tʃɑːns/',
          explanation: 'Hacer algo a pesar de que el resultado sea incierto o arriesgado.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e59',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'In the long run',
          back: 'A largo plazo',
          example: 'Working hard now will benefit you in the long run.',
          pronunciation: '/ɪn ðə lɒŋ rʌn/',
          explanation: 'En un periodo de tiempo lejano en el futuro.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e60',
    type: 'flashcard',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To bear in mind',
          back: 'Tener en cuenta',
          example: 'Please bear in mind that the deadline is tomorrow.',
          pronunciation: '/tuː beər ɪn maɪnd/',
          explanation: 'Recordar o considerar algo importante al tomar una decisión.'
        }
      ]
    } as any
  },

  // --- MULTIPLE CHOICE: Advanced Grammar (61-70) ---
  {
    id: 'b1-u1-e61',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'State Verbs in Action',
      instructions: 'Choose the correct form based on the context.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ a great time at the conference this week.',
          options: ['am have', 'has', 'am having', 'have'],
          correctAnswer: 2,
          explanation: 'Aquí "have" indica una experiencia temporal, por lo que usamos -ing.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e62',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Sensory Verbs',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'The chef ___ the sauce to see if it needs more salt.',
          options: ['is taste', 'taste', 'is tasting', 'tastes'],
          correctAnswer: 2,
          explanation: 'Aquí es una acción física y voluntaria, por lo que usamos el continuous.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e63',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Frequency and Stative Verbs',
      instructions: 'Identify the correct sentence.',
      questions: [
        {
          id: 'q1',
          question: 'Which one is correct?',
          options: ['I knowing him for years.', 'I am knowing him for years.', 'I know him for years.', 'I have known him for years.'],
          correctAnswer: 3,
          explanation: 'Para estados que empezaron en el pasado y continúan, usamos el Present Perfect Simple, no el Continuous.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e64',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Nuance: Feel',
      instructions: 'Choose the best option.',
      questions: [
        {
          id: 'q1',
          question: 'How ___ today? You look much better.',
          options: ['feel you', 'Both are correct', 'are you feeling', 'do you feel'],
          correctAnswer: 1,
          explanation: 'Con "feel" y "ache", el Present Simple y Continuous se pueden usar indistintamente para estados de salud.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e65',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Annoying Habits',
      instructions: 'Choose the structure for annoyance.',
      questions: [
        {
          id: 'q1',
          question: 'My brother ___ his things everywhere! It\'s so annoying.',
          options: ['is always leaving', 'leaves always', 'always is leaving', 'always leaves'],
          correctAnswer: 0,
          explanation: 'Present Continuous con "always" para hábitos que nos resultan sorprendentes o molestos.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e66',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Mental States',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ what you mean, but I don\'t agree with your logic.',
          options: ['understand', 'understands', 'am understanding', 'am understand'],
          correctAnswer: 0,
          explanation: '"Understand" es puramente mental y no admite -ing.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e67',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Current Projects vs Habits',
      instructions: 'Choose the correct combination.',
      questions: [
        {
          id: 'q1',
          question: 'Normally I ___ at 9:00, but today I ___ until 11:00.',
          options: ['am starting / am working', 'start / work', 'am starting / work', 'start / am working'],
          correctAnswer: 3,
          explanation: 'Hábito (Simple) vs Acción temporal hoy (Continuous).'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e68',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Changing States',
      instructions: 'Select the correct progress verb.',
      questions: [
        {
          id: 'q1',
          question: 'The world economy ___ very fast lately.',
          options: ['is changing', 'changes', 'change', 'is change'],
          correctAnswer: 0,
          explanation: 'Usamos el continuous para procesos de cambio en curso.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e69',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'States with "Be"',
      instructions: 'Choose based on permanent vs temporary behavior.',
      questions: [
        {
          id: 'q1',
          question: 'Stop it! You ___ very selfish right now.',
          options: ['are', 'be', 'are being', 'is being'],
          correctAnswer: 2,
          explanation: '"Are being" indica que la persona se está comportando así solo en este momento, no que sea su personalidad.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e70',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Future Arrangements',
      instructions: 'Identify the fixed plan.',
      questions: [
        {
          id: 'q1',
          question: 'What ___ this evening? Would you like to go out?',
          options: ['do you do', 'you doing', 'are you doing', 'does you do'],
          correctAnswer: 2,
          explanation: 'Preguntamos por planes futuros cercanos usando Present Continuous.'
        }
      ]
    } as any
  },

  // --- MATCHING: Collocations & Idioms (71-80) ---
  {
    id: 'b1-u1-e71',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Life Phrasals',
      instructions: 'Match the phrasal verb with its context.',
      pairs: [
        { id: '1', left: 'Pick up', right: 'A new skill easily' },
        { id: '2', left: 'Get by', right: 'With enough money to live' },
        { id: '3', left: 'Look into', right: 'Investigate an opportunity' },
        { id: '4', left: 'Set up', right: 'Start a new business' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e72',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Success Idioms',
      instructions: 'Match the idiom with its meaning.',
      pairs: [
        { id: '1', left: 'A piece of cake', right: 'Something very easy' },
        { id: '2', left: 'In the spotlight', right: 'Receiving a lot of attention' },
        { id: '3', left: 'Call it a day', right: 'Stop working for now' },
        { id: '4', left: 'Under the weather', right: 'Feeling slightly ill' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e73',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Professional Nouns',
      instructions: 'Match the word with its synonym.',
      pairs: [
        { id: '1', left: 'Vocation', right: 'Calling' },
        { id: '2', left: 'Expertise', right: 'Skill' },
        { id: '3', left: 'Resilience', right: 'Durability' },
        { id: '4', left: 'Initiative', right: 'Resourcefulness' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e74',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Identity Adjectives',
      instructions: 'Match the opposite meanings.',
      pairs: [
        { id: '1', left: 'Authentic', right: 'Fake' },
        { id: '2', left: 'Humble', right: 'Arrogant' },
        { id: '3', left: 'Optimistic', right: 'Pessimistic' },
        { id: '4', left: 'Generous', right: 'Stingy' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e75',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Time & Frequency',
      instructions: 'Match the expression with its meaning.',
      pairs: [
        { id: '1', left: 'Once in a blue moon', right: 'Very rarely' },
        { id: '2', left: 'Round the clock', right: '24 hours a day' },
        { id: '3', left: 'From time to time', right: 'Occasionally' },
        { id: '4', left: 'Sooner or later', right: 'Eventually' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e76',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Career Paths',
      instructions: 'Match the verb with its noun.',
      pairs: [
        { id: '1', left: 'Climb', right: 'The ladder' },
        { id: '2', left: 'Reach', right: 'A goal' },
        { id: '3', left: 'Face', right: 'Rejection' },
        { id: '4', left: 'Overcome', right: 'An obstacle' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e77',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Character Descriptions',
      instructions: 'Match the description with the adjective.',
      pairs: [
        { id: '1', left: 'Knows what they want', right: 'Goal-oriented' },
        { id: '2', left: 'Always tells the truth', right: 'Trustworthy' },
        { id: '3', left: 'Has new ideas', right: 'Innovative' },
        { id: '4', left: 'Works well with others', right: 'Cooperative' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e78',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Spanish to English',
      instructions: 'Match the translation.',
      pairs: [
        { id: '1', left: 'A pesar de', right: 'Despite' },
        { id: '2', left: 'Por otro lado', right: 'On the other hand' },
        { id: '3', left: 'En cambio', right: 'Instead' },
        { id: '4', left: 'Debido a', right: 'Due to' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e79',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Mental Verbs',
      instructions: 'Match synonyms.',
      pairs: [
        { id: '1', left: 'Recall', right: 'Remember' },
        { id: '2', left: 'Suppose', right: 'Assume' },
        { id: '3', left: 'Realize', right: 'Understand' },
        { id: '4', left: 'Recognize', right: 'Identify' }
      ]
    } as any
  },
  {
    id: 'b1-u1-e80',
    type: 'matching',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Life stages Phrasals',
      instructions: 'Match meanings.',
      pairs: [
        { id: '1', left: 'Move in', right: 'Start living in a new house' },
        { id: '2', left: 'Pass away', right: 'To die' },
        { id: '3', left: 'Bring up', right: 'Raise a child' },
        { id: '4', left: 'Go through', right: 'Experience a difficult time' }
      ]
    } as any
  },

  // --- FILL-BLANK: Story-based Grammar (81-90) ---
  {
    id: 'b1-u1-e81',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'The Freelancer\'s Life',
      instructions: 'Complete with the correct form of the verbs in brackets.',
      questions: [
        {
          id: 'q1',
          text: 'I usually ___ (work) as a designer, but lately I ___ (work) on a book.',
          correctAnswer: 'work / am working',
          explanation: 'Hábito permanente vs proyecto temporal reciente.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e82',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Believing in yourself',
      instructions: 'Fill in the correct form of the verb in brackets.',
      questions: [
        {
          id: 'q1',
          text: 'She ___ (believe) that she is ready for the promotion.',
          correctAnswer: 'believes',
          explanation: 'Mental state verb: no continuous.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e83',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Developing a brand',
      instructions: 'Complete with the correct form of the verb in brackets.',
      questions: [
        {
          id: 'q1',
          text: 'My business ___ (grow) very fast this month.',
          correctAnswer: 'is growing',
          explanation: 'Proceso de cambio o desarrollo en curso.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e84',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Meeting plans',
      instructions: 'Complete the arrangement.',
      questions: [
        {
          id: 'q1',
          text: 'We ___ (meet) the new client tomorrow morning.',
          correctAnswer: 'are meeting',
          explanation: 'Cita programada en el futuro.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e85',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Stative vs Dynamic',
      instructions: 'Complete with the correct form of "think".',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (think) of quitting my job. What do you ___ (think) about it?',
          correctAnswer: 'am thinking / think',
          explanation: 'Proceso de considerar vs Tener una opinión.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e86',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Annoying behavior',
      instructions: 'Use the correct structure for a repeated annoyance.',
      questions: [
        {
          id: 'q1',
          text: 'He ___ (always / take) my phone without asking!',
          correctAnswer: 'is always taking',
          explanation: 'Hábito molesto con Present Continuous.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e87',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Possession',
      instructions: 'Fill in with the correct form of the verb "own".',
      questions: [
        {
          id: 'q1',
          text: 'They ___ (own) a large company in Germany.',
          correctAnswer: 'own',
          explanation: 'Posesión es un estado: Present Simple.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e88',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Temporary Travel',
      instructions: 'Fill in the correct form of the verb in brackets.',
      questions: [
        {
          id: 'q1',
          text: 'She ___ (stay) at a hotel until she finds an apartment.',
          correctAnswer: 'is staying',
          explanation: 'Situación temporal.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e89',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'State: Appear',
      instructions: 'Fill in the blank with the correct form.',
      questions: [
        {
          id: 'q1',
          text: 'The situation ___ (appear) to be under control.',
          correctAnswer: 'appears',
          explanation: '"Appear" como "parecer" es un state verb.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e90',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'The Chef\'s Action',
      instructions: 'Complete the sentence with "smell" in the correct form.',
      questions: [
        {
          id: 'q1',
          text: 'Why ___ (be) the waiter ___ (smell) the wine?',
          correctAnswer: 'is / smelling',
          explanation: 'Acción voluntaria de oler: Present Continuous.'
        }
      ]
    } as any
  },

  // --- SENTENCE BUILDING: Complex Structures (91-97) ---
  {
    id: 'b1-u1-e91',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Contrastive Sentence',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Although', 'I', 'love', 'traveling', 'staying', 'I', 'prefer', 'home', '.'],
          correctSentence: 'Although I love traveling, I prefer staying home.',
          translation: 'Aunque amo viajar, prefiero quedarme en casa.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e92',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Developing Skills',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['becoming', 'Her', 'are', 'English', 'more', 'skills', 'fluent', '.'],
          correctSentence: 'Her English skills are becoming more fluent.',
          translation: 'Sus habilidades de inglés se están volviendo más fluidas.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e93',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Future Arrangement Question',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Are', 'you', 'next', 'joining', 'us', 'for', 'lunch', 'week', '?'],
          correctSentence: 'Are you joining us for lunch next week?',
          translation: '¿Te unirás a nosotros para almorzar la próxima semana?',
          points: 8
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e94',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Opinion and Reason',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'think', 'because', 'he', 'is', 'a', 'it', 'works', 'hard', 'genius', '.'],
          correctSentence: 'I think it works because he is a hard genius.',
          translation: 'Creo que funciona porque él es un genio trabajador.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e95',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Annoying Habit Order',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['is', 'He', 'forgetting', 'always', 'to', 'the', 'door', 'lock', '.'],
          correctSentence: 'He is always forgetting to lock the door.',
          translation: 'Él siempre se está olvidando de cerrar la puerta.',
          points: 8
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e96',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Stative Question',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Do', 'you', 'feel', 'like', 'you', 'belong', 'here', '?'],
          correctSentence: 'Do you feel like you belong here?',
          translation: '¿Sientes que perteneces aquí?',
          points: 8
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e97',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'State vs Dynamic Question',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Why', 'is', 'tasting', 'the', 'she', 'right', 'soup', 'now', '?'],
          correctSentence: 'Why is she tasting the soup right now?',
          translation: '¿Por qué está ella probando la sopa justo ahora?',
          points: 10
        }
      ]
    } as any
  },

  // --- SPEAKING ANALYSIS: Fluency (98-100) ---
  {
    id: 'b1-u1-e98',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Production',
    difficulty: 'hard',
    content: {
      title: 'Self-Introduction',
      instructions: 'Record yourself saying this fluently.',
      questions: [
        {
          id: 'q1',
          text: 'I am looking forward to exploring new career opportunities.',
          correctAnswer: 'I am looking forward to exploring new career opportunities',
          explanation: 'Conecta "looking forward to" y pronuncia "opportunities" /ˌɒp.əˈtjuː.nə.tiz/.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e99',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Production',
    difficulty: 'hard',
    content: {
      title: 'Expressing Opinion',
      instructions: 'Say this sentence with natural intonation.',
      questions: [
        {
          id: 'q1',
          text: 'I believe that persistence is the key to success in the long run.',
          correctAnswer: 'I believe that persistence is the key to success in the long run',
          explanation: 'Enfatiza "persistence" y "long run".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u1-e100',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Life Stories',
    topicName: 'Production',
    difficulty: 'hard',
    content: {
      title: 'Final Summary',
      instructions: 'Read out loud to finish the unit.',
      questions: [
        {
          id: 'q1',
          text: 'Everyone has a unique story that defines who they are today.',
          correctAnswer: 'Everyone has a unique story that defines who they are today',
          explanation: 'Fluidez y claridad en "unique" /juːˈniːk/.'
        }
      ]
    } as any
  },
];
