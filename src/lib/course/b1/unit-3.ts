import { Exercise } from '@/lib/exercise-generator';

export const UNIT_3_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Professional Roles & Environments (1-10) ---
  {
    id: 'b1-u3-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Self-employed',
          back: 'Autónomo / Trabajador por cuenta propia',
          example: 'After years of working for others, he decided to become self-employed.',
          pronunciation: '/ˌself.ɪmˈplɔɪd/',
          explanation: 'Working for yourself rather than for an employer.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e2',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Company Structure',
      instructions: 'Choose the correct department.',
      questions: [
        {
          id: 'q1',
          question: 'The ___ department is responsible for hiring new employees.',
          options: ['Human Resources', 'Sales', 'Accounting', 'IT'],
          correctAnswer: 'Human Resources',
          explanation: 'HR (Human Resources) manages recruitment and employee relations.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e3',
    type: 'matching',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Workplace Collocations',
      instructions: 'Match the verb with the noun.',
      pairs: [
        { id: '1', left: 'Earn', right: 'a salary' },
        { id: '2', left: 'Work', right: 'overtime' },
        { id: '3', left: 'Meet', right: 'a deadline' },
        { id: '4', left: 'Run', right: 'a business' }
      ]
    } as any
  },
  {
    id: 'b1-u3-e4',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Present Simple for Routine',
      instructions: 'Fill in the correct form.',
      questions: [
        {
          id: 'q1',
          text: 'She ___ (manage) a team of ten people in her current role.',
          correctAnswer: 'manages',
          explanation: 'Present Simple for permanent responsibilities.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e5',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Job Search',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'am', 'looking', 'forward', 'to', 'starting', 'my', 'new', 'job', '.'],
          correctSentence: 'I am looking forward to starting my new job.',
          translation: 'Tengo muchas ganas de empezar mi nuevo trabajo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e6',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Reliable',
          back: 'Fiable / Digno de confianza',
          example: 'A good employee should be reliable and punctual.',
          pronunciation: '/rɪˈlaɪ.ə.bəl/',
          explanation: 'Someone you can trust to work well or behave as expected.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e7',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Working Hours',
      instructions: 'Choose the best description.',
      questions: [
        {
          id: 'q1',
          question: 'If you work 40 hours a week, you have a ___ job.',
          options: ['full-time', 'part-time', 'freelance', 'temporary'],
          correctAnswer: 'full-time',
          explanation: 'Full-time work usually means 35-40 hours per week.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e8',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Temporary Project',
      instructions: 'Complete with Present Continuous.',
      questions: [
        {
          id: 'q1',
          text: 'Currently, we ___ (develop) a new marketing strategy.',
          correctAnswer: 'are developing',
          explanation: 'Present Continuous for projects in progress.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e9',
    type: 'matching',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Professional Skills',
      instructions: 'Match the skill with its description.',
      pairs: [
        { id: '1', left: 'Leadership', right: 'Guiding a group of people' },
        { id: '2', left: 'Teamwork', right: 'Working well with others' },
        { id: '3', left: 'Problem-solving', right: 'Finding solutions to difficulties' },
        { id: '4', left: 'Time management', right: 'Organizing your schedule effectively' }
      ]
    } as any
  },
  {
    id: 'b1-u3-e10',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Introducing Yourself',
      instructions: 'Say this sentence clearly.',
      questions: [
        {
          id: 'q1',
          text: 'I am responsible for managing client relationships and coordinating projects.',
          correctAnswer: 'I am responsible for managing client relationships and coordinating projects',
          explanation: 'Enfatiza "responsible" /rɪˈspɒn.sə.bəl/ y "managing" /ˈmæn.ɪ.dʒɪŋ/.'
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Experience & Qualifications (11-20) ---
  {
    id: 'b1-u3-e11',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Background',
          back: 'Trayectoria / Antecedentes',
          example: 'She has a strong background in software engineering.',
          pronunciation: '/ˈbæk.ɡraʊnd/',
          explanation: 'The type of experience, training, and education that a person has.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e12',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Present Perfect vs Past Simple',
      instructions: 'Choose the correct tense.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ for three different companies since I graduated.',
          options: ['have worked', 'worked', 'am working', 'work'],
          correctAnswer: 'have worked',
          explanation: 'Present Perfect for actions that started in the past and continue to the present.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e13',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Past Achievement',
      instructions: 'Complete with Past Simple.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (complete) my Master\'s degree in 2021.',
          correctAnswer: 'completed',
          explanation: 'Past Simple for finished actions at a specific time.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e14',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Duration of Experience',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['How', 'long', 'have', 'you', 'been', 'with', 'the', 'company', '?'],
          correctSentence: 'How long have you been with the company?',
          translation: '¿Cuánto tiempo llevas en la empresa?',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e15',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Job Requirements',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'Fluency in English is a key ___ for this position.',
          options: ['requirement', 'request', 'reward', 'report'],
          correctAnswer: 'requirement',
          explanation: 'A requirement is something that is needed or wanted.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e16',
    type: 'matching',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Education & Training',
      instructions: 'Match the term with its meaning.',
      pairs: [
        { id: '1', left: 'Degree', right: 'A qualification from university' },
        { id: '2', left: 'Apprenticeship', right: 'Learning a trade while working' },
        { id: '3', left: 'Internship', right: 'Work experience for students' },
        { id: '4', left: 'Workshop', right: 'A brief intensive training session' }
      ]
    } as any
  },
  {
    id: 'b1-u3-e17',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Present Perfect Continuous',
      instructions: 'Fill in with the correct form.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (study) German lately to improve my career prospects.',
          correctAnswer: 'have been studying',
          explanation: 'Present Perfect Continuous for recent ongoing actions.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e18',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'CV Terms',
      instructions: 'Fill in the missing word.',
      questions: [
        {
          id: 'q1',
          text: 'Your ___ (referencias) are available upon request.',
          correctAnswer: 'references',
          explanation: '"References" are people who can talk about your work ability.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e19',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Discussing Experience',
      instructions: 'Say this clearly.',
      questions: [
        {
          id: 'q1',
          text: 'I have gained extensive experience in project management over the last five years.',
          correctAnswer: 'I have gained extensive experience in project management over the last five years',
          explanation: 'Pronuncia "extensive" /ɪkˈsten.sɪv/ y "management" /ˈmæn.ɪdʒ.mənt/.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e20',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Future Goal',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'hope', 'to', 'get', 'a', 'promotion', 'by', 'the', 'end', 'of', 'the', 'year', '.'],
          correctSentence: 'I hope to get a promotion by the end of the year.',
          translation: 'Espero conseguir un ascenso para finales de año.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Common Professional Phrasal Verbs (21-30) ---
  {
    id: 'b1-u3-e21',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To take on',
          back: 'Asumir (responsabilidad / trabajo)',
          example: 'I decided to take on extra responsibilities to grow in the company.',
          pronunciation: '/tuː teɪk ɒn/',
          explanation: 'To accept a particular job or responsibility.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e22',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Meeting Phrasal Verb',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'We need to ___ the meeting because the manager is ill.',
          options: ['put off', 'put on', 'put in', 'put out'],
          correctAnswer: 'put off',
          explanation: '"Put off" means to postpone something to a later time.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e23',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Dealing with issues',
      instructions: 'Complete with the correct preposition.',
      questions: [
        {
          id: 'q1',
          text: 'I have to deal ___ (con) several difficult clients every day.',
          correctAnswer: 'with',
          explanation: '"Deal with" means to handle or take action about something.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e24',
    type: 'matching',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Work Phrasals Matching',
      instructions: 'Match the phrasal verb with its meaning.',
      pairs: [
        { id: '1', left: 'Fill in for', right: 'Temporarily replace someone' },
        { id: '2', left: 'Get ahead', right: 'Be successful in your career' },
        { id: '3', left: 'Look into', right: 'Investigate or research' },
        { id: '4', left: 'Carry out', right: 'Perform a task or research' }
      ]
    } as any
  },
  {
    id: 'b1-u3-e25',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'New Project',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Are', 'you', 'going', 'to', 'take', 'on', 'this', 'new', 'challenge', '?'],
          correctSentence: 'Are you going to take on this new challenge?',
          translation: '¿Vas a asumir este nuevo desafío?',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e26',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To catch up',
          back: 'Ponerse al día',
          example: 'I need to catch up on my emails after the holiday.',
          pronunciation: '/tuː kætʃ ʌp/',
          explanation: 'To reach the same quality or standard as someone or something else.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e27',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Completing a Task',
      instructions: 'Select the best phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'It took him all afternoon to ___ the report.',
          options: ['finish off', 'finish up', 'finish out', 'finish in'],
          correctAnswer: 'finish off',
          explanation: '"Finish off" means to complete the last part of something.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e28',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'hard',
    content: {
      title: 'Quitting',
      instructions: 'Fill in the blank.',
      questions: [
        {
          id: 'q1',
          text: 'She decided to ___ (dejar/abandonar) her job to travel.',
          correctAnswer: 'give up',
          explanation: 'In this context, "give up" means to stop doing a regular activity.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e29',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Asking for Help',
      instructions: 'Say this sentence.',
      questions: [
        {
          id: 'q1',
          text: 'Could you please fill in for me during the meeting tomorrow?',
          correctAnswer: 'Could you please fill in for me during the meeting tomorrow',
          explanation: 'Enfatiza "fill in for me".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e30',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Efficiency',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'need', 'to', 'find', 'ways', 'to', 'cut', 'down', 'on', 'costs', '.'],
          correctSentence: 'We need to find ways to cut down on costs.',
          translation: 'Necesitamos encontrar formas de reducir costes.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Business Idioms & Expressions (31-40) ---
  {
    id: 'b1-u3-e31',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'hard',
    content: {
      items: [
        {
          front: 'To think outside the box',
          back: 'Pensar de forma creativa / innovadora',
          example: 'We need to think outside the box to solve this unique problem.',
          pronunciation: '/tuː θɪŋk ˌaʊtˈsaɪd ðə bɒks/',
          explanation: 'To think imaginatively using new ideas instead of traditional methods.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e32',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'A Busy Day',
      instructions: 'Choose the correct idiom.',
      questions: [
        {
          id: 'q1',
          question: 'I have a lot of work today. My ___ is full.',
          options: ['plate', 'cup', 'desk', 'box'],
          correctAnswer: 'plate',
          explanation: '"My plate is full" means having a lot of things to do or deal with.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e33',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Understanding',
      instructions: 'Complete the idiom.',
      questions: [
        {
          id: 'q1',
          text: 'I\'m glad we are on the same ___ (página/sintonía) regarding the budget.',
          correctAnswer: 'page',
          explanation: '"On the same page" means having the same understanding or agreement.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e34',
    type: 'matching',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'hard',
    content: {
      title: 'Business Idioms Matching',
      instructions: 'Match the idiom with its meaning.',
      pairs: [
        { id: '1', left: 'Call it a day', right: 'Stop working for the rest of the day' },
        { id: '2', left: 'Get the ball rolling', right: 'Start a process or project' },
        { id: '3', left: 'In the loop', right: 'Informed about what is happening' },
        { id: '4', left: 'Back to the drawing board', right: 'Start over because a previous attempt failed' }
      ]
    } as any
  },
  {
    id: 'b1-u3-e35',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'hard',
    content: {
      title: 'Innovation',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Let\'s', 'try', 'to', 'think', 'outside', 'the', 'box', 'for', 'this', 'campaign', '.'],
          correctSentence: 'Let\'s try to think outside the box for this campaign.',
          translation: 'Intentemos pensar de forma creativa para esta campaña.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e36',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'hard',
    content: {
      items: [
        {
          front: 'Win-win situation',
          back: 'Situación en la que todos ganan',
          example: 'This partnership is a win-win situation for both companies.',
          pronunciation: '/ˌwɪnˈwɪn ˌsɪtʃ.uˈeɪ.ʃən/',
          explanation: 'A situation or result that is good for everyone who is involved.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e37',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Keeping Informed',
      instructions: 'Choose the best expression.',
      questions: [
        {
          id: 'q1',
          question: 'Please keep me ___ about any changes to the schedule.',
          options: ['in the loop', 'on the loop', 'at the loop', 'with the loop'],
          correctAnswer: 'in the loop',
          explanation: '"In the loop" means part of a group that is kept informed.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e38',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'hard',
    content: {
      title: 'Starting a project',
      instructions: 'Complete the expression.',
      questions: [
        {
          id: 'q1',
          text: 'We need to get the ball ___ (rodando) as soon as possible.',
          correctAnswer: 'rolling',
          explanation: '"Get the ball rolling" means to start something happening.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e39',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Ending the work day',
      instructions: 'Say this clearly.',
      questions: [
        {
          id: 'q1',
          text: 'It\'s already 6 PM, let\'s call it a day and continue tomorrow.',
          correctAnswer: 'It\'s already 6 PM, let\'s call it a day and continue tomorrow',
          explanation: 'Enfatiza "call it a day".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e40',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Agreement',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'think', 'we', 'are', 'all', 'on', 'the', 'same', 'page', 'now', '.'],
          correctSentence: 'I think we are all on the same page now.',
          translation: 'Creo que ahora todos estamos en la misma sintonía.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Professional Communication & Soft Skills (41-50) ---
  {
    id: 'b1-u3-e41',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Empathetic',
          back: 'Empático',
          example: 'Good leaders are empathetic and listen to their team.',
          pronunciation: '/ˌem.pəˈθet.ɪk/',
          explanation: 'Having the ability to imagine how someone else feels.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e42',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Communication Style',
      instructions: 'Choose the best adjective.',
      questions: [
        {
          id: 'q1',
          question: 'It is important to be ___ when giving feedback.',
          options: ['constructive', 'destructive', 'confusing', 'aggressive'],
          correctAnswer: 'constructive',
          explanation: '"Constructive" means intended to help or improve.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e43',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Public Speaking',
      instructions: 'Fill in the missing word.',
      questions: [
        {
          id: 'q1',
          text: 'I need to prepare my ___ (presentación) for the board meeting.',
          correctAnswer: 'presentation',
          explanation: 'A talk giving information about something.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e44',
    type: 'matching',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Soft Skills Matching',
      instructions: 'Match the soft skill with its description.',
      pairs: [
        { id: '1', left: 'Active listening', right: 'Paying full attention to the speaker' },
        { id: '2', left: 'Adaptability', right: 'Adjusting to new conditions easily' },
        { id: '3', left: 'Negotiation', right: 'Reaching an agreement through discussion' },
        { id: '4', left: 'Conflict resolution', right: 'Finding a peaceful solution to a disagreement' }
      ]
    } as any
  },
  {
    id: 'b1-u3-e45',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Giving Feedback',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'should', 'provide', 'constructive', 'feedback', 'to', 'our', 'colleagues', '.'],
          correctSentence: 'We should provide constructive feedback to our colleagues.',
          translation: 'Deberíamos proporcionar retroalimentación constructiva a nuestros colegas.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e46',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Collaboration',
      instructions: 'Choose the correct verb.',
      questions: [
        {
          id: 'q1',
          question: 'The two departments need to ___ more closely.',
          options: ['collaborate', 'compete', 'collect', 'compare'],
          correctAnswer: 'collaborate',
          explanation: '"Collaborate" means to work with another person or group to achieve something.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e47',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Professional Growth',
      instructions: 'Fill in the blank.',
      questions: [
        {
          id: 'q1',
          text: 'I am always looking for opportunities to ___ (mejorar) my skills.',
          correctAnswer: 'improve',
          explanation: '"Improve" means to make something better.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e48',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Proactive',
          back: 'Proactivo',
          example: 'A proactive approach helps prevent problems before they arise.',
          pronunciation: '/prəʊˈæk.tɪv/',
          explanation: 'Taking action by causing change and not only reacting to events.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e49',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Expressing Empathy',
      instructions: 'Say this with a kind tone.',
      questions: [
        {
          id: 'q1',
          text: 'I understand your concerns and I am here to help you find a solution.',
          correctAnswer: 'I understand your concerns and I am here to help you find a solution',
          explanation: 'Pronuncia "concerns" /kənˈsɜːnz/ claramente.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e50',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'hard',
    content: {
      title: 'Self-Improvement',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Continuous', 'learning', 'is', 'essential', 'for', 'career', 'success', '.'],
          correctSentence: 'Continuous learning is essential for career success.',
          translation: 'El aprendizaje continuo es esencial para el éxito profesional.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 6: Career Development & Ambitions (51-60) ---
  {
    id: 'b1-u3-e51',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Promotion',
          back: 'Ascenso',
          example: 'She received a promotion after leading a successful project.',
          pronunciation: '/prəˈməʊ.ʃən/',
          explanation: 'The act of raising someone to a higher or more important position or rank.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e52',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Career Path',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'He is very ___ and wants to become a CEO within ten years.',
          options: ['ambitious', 'lazy', 'content', 'indifferent'],
          correctAnswer: 'ambitious',
          explanation: '"Ambitious" means having a strong desire for success or achievement.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e53',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Salary Increase',
      instructions: 'Fill in the blank.',
      questions: [
        {
          id: 'q1',
          text: 'The company offered him a ___ (aumento) to stay.',
          correctAnswer: 'pay rise',
          explanation: 'A "pay rise" (UK) or "pay raise" (US) is an increase in salary.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e54',
    type: 'matching',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Career Milestones',
      instructions: 'Match the milestone with its description.',
      pairs: [
        { id: '1', left: 'Step down', right: 'Leave an important job' },
        { id: '2', left: 'Take over', right: 'Take control of something' },
        { id: '3', left: 'Settle in', right: 'Become comfortable in a new job' },
        { id: '4', left: 'Move up', right: 'Get a better position' }
      ]
    } as any
  },
  {
    id: 'b1-u3-e55',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Future Ambition',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'hope', 'I', 'will', 'have', 'started', 'my', 'own', 'company', 'by', 'next', 'year', '.'],
          correctSentence: 'I hope I will have started my own company by next year.',
          translation: 'Espero haber empezado mi propia empresa para el año que viene.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e56',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Networking',
      instructions: 'Choose the best verb.',
      questions: [
        {
          id: 'q1',
          question: 'It is useful to ___ with professionals in your field.',
          options: ['network', 'neglect', 'notice', 'negotiate'],
          correctAnswer: 'network',
          explanation: '"Network" means to meet people who might be useful to know in your job.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e57',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Job Security',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          text: 'Public sector jobs often provide more job ___ (seguridad) than startups.',
          correctAnswer: 'security',
          explanation: 'Job security is the probability that an individual will keep their job.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e58',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Incentive',
          back: 'Incentivo',
          example: 'Performance bonuses are a great incentive for employees.',
          pronunciation: '/ɪnˈsen.tɪv/',
          explanation: 'Something that encourages a person to do something.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e59',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Ambition Statement',
      instructions: 'Say this with confidence.',
      questions: [
        {
          id: 'q1',
          text: 'I am highly motivated to take on more leadership responsibilities.',
          correctAnswer: 'I am highly motivated to take on more leadership responsibilities',
          explanation: 'Enfatiza "highly motivated".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e60',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Career Goal',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['What', 'are', 'your', 'long-term', 'career', 'goals', '?'],
          correctSentence: 'What are your long-term career goals?',
          translation: '¿Cuáles son tus objetivos profesionales a largo plazo?',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 7: Workplace Communication (61-70) ---
  {
    id: 'b1-u3-e61',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Memo',
          back: 'Memorándum / Nota interna',
          example: 'The director sent a memo about the new office hours.',
          pronunciation: '/ˈmem.əʊ/',
          explanation: 'A short written message used in business to inform people about something.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e62',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'The Agenda',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'We have many things to discuss on today\'s ___.',
          options: ['agenda', 'schedule', 'timetable', 'diary'],
          correctAnswer: 'agenda',
          explanation: 'An agenda is a list of items to be discussed at a meeting.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e63',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Minute-taking',
      instructions: 'Fill in the blank.',
      questions: [
        {
          id: 'q1',
          text: 'Could you please take the ___ (acta) of the meeting?',
          correctAnswer: 'minutes',
          explanation: 'The minutes are the official written record of a meeting.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e64',
    type: 'matching',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Meeting Roles',
      instructions: 'Match the role with its description.',
      pairs: [
        { id: '1', left: 'Chairperson', right: 'The person in charge of the meeting' },
        { id: '2', left: 'Participant', right: 'Someone who takes part in the meeting' },
        { id: '3', left: 'Presenter', right: 'The person giving a talk or presentation' },
        { id: '4', left: 'Attendee', right: 'Someone who is present at the meeting' }
      ]
    } as any
  },
  {
    id: 'b1-u3-e65',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Polite Request',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Would', 'you', 'mind', 'sending', 'me', ' the', 'latest', 'report', '?'],
          correctSentence: 'Would you mind sending me the latest report?',
          translation: '¿Te importaría enviarme el último informe?',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e66',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Reported Speech Introduction',
      instructions: 'Choose the correct verb.',
      questions: [
        {
          id: 'q1',
          question: 'He ___ that the project would be delayed.',
          options: ['said', 'told', 'asked', 'spoke'],
          correctAnswer: 'said',
          explanation: 'We use "said" when we don\'t mention the person being spoken to.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e67',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Indirect Question',
      instructions: 'Complete the question.',
      questions: [
        {
          id: 'q1',
          text: 'I was wondering ___ (si) you could help me with this.',
          correctAnswer: 'if',
          explanation: '"If" or "whether" is used to introduce indirect yes/no questions.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e68',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Clarify',
          back: 'Aclarar',
          example: 'Could you please clarify what you mean by that?',
          pronunciation: '/ˈklær.ɪ.faɪ/',
          explanation: 'To make something clearer or easier to understand.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e69',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Summarizing',
      instructions: 'Say this clearly.',
      questions: [
        {
          id: 'q1',
          text: 'To sum up, we have agreed on the main points of the contract.',
          correctAnswer: 'To sum up, we have agreed on the main points of the contract',
          explanation: 'Enfatiza "To sum up".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e70',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Meeting Conclusion',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Let\'s', 'wrap', 'up', 'the', 'meeting', 'for', 'today', '.'],
          correctSentence: 'Let\'s wrap up the meeting for today.',
          translation: 'Vamos a dar por terminada la reunión de hoy.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 8: Modern Work Trends (71-80) ---
  {
    id: 'b1-u3-e71',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Remote work',
          back: 'Teletrabajo / Trabajo en remoto',
          example: 'Many companies now offer remote work options.',
          pronunciation: '/rɪˈməʊt wɜːk/',
          explanation: 'Working from home or another location rather than an office.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e72',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Hybrid Model',
      instructions: 'Choose the best definition.',
      questions: [
        {
          id: 'q1',
          question: 'A hybrid work model means you work ___',
          options: [
            'partly in the office and partly at home',
            'only from home',
            'only in the office',
            'for two different companies'
          ],
          correctAnswer: 'partly in the office and partly at home',
          explanation: 'Hybrid work combines in-office and remote work.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e73',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Work-Life Balance',
      instructions: 'Fill in the blank.',
      questions: [
        {
          id: 'q1',
          text: 'Flexible hours help employees maintain a better work-life ___ (equilibrio).',
          correctAnswer: 'balance',
          explanation: '"Work-life balance" is the division of time between work and family/leisure.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e74',
    type: 'matching',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Modern Work Terms',
      instructions: 'Match the term with its description.',
      pairs: [
        { id: '1', left: 'Hot-desking', right: 'Not having a fixed desk in the office' },
        { id: '2', left: 'Gig economy', right: 'Labour market with short-term contracts' },
        { id: '3', left: 'Digital nomad', right: 'Someone who works remotely while traveling' },
        { id: '4', left: 'Burnout', right: 'State of emotional and physical exhaustion' }
      ]
    } as any
  },
  {
    id: 'b1-u3-e75',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Discussing Flexibility',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Working', 'from', 'home', 'allows', 'me', 'to', 'be', 'more', 'productive', '.'],
          correctSentence: 'Working from home allows me to be more productive.',
          translation: 'Trabajar desde casa me permite ser más productivo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e76',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Digital Tools',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'We use video conferencing tools to ___ with our remote team.',
          options: ['collaborate', 'calculate', 'celebrate', 'circulate'],
          correctAnswer: 'collaborate',
          explanation: 'Collaboration tools are essential for remote teams.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e77',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'The Future of Work',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          text: 'Automation is changing many ___ (industrias) across the world.',
          correctAnswer: 'industries',
          explanation: '"Industries" refers to sectors of economic activity.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e78',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Upskilling',
          back: 'Perfeccionamiento / Mejora de habilidades',
          example: 'Upskilling is necessary to stay competitive in the job market.',
          pronunciation: '/ˌʌpˈskɪl.ɪŋ/',
          explanation: 'The process of learning new skills or of teaching workers new skills.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e79',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Remote Collaboration',
      instructions: 'Say this clearly.',
      questions: [
        {
          id: 'q1',
          text: 'Even though we work remotely, we stay connected through daily video calls.',
          correctAnswer: 'Even though we work remotely, we stay connected through daily video calls',
          explanation: 'Enfatiza "stay connected".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e80',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Work Culture',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Our', 'company', 'values', 'diversity', 'and', 'inclusion', 'in', 'the', 'workplace', '.'],
          correctSentence: 'Our company values diversity and inclusion in the workplace.',
          translation: 'Nuestra empresa valora la diversidad y la inclusión en el lugar de trabajo.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 9: Advanced Grammar in Context (81-90) ---
  {
    id: 'b1-u3-e81',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      items: [
        {
          front: 'First Conditional for business',
          back: 'Primer condicional (negocios)',
          example: 'If we meet the deadline, we will get the bonus.',
          pronunciation: '/ɪf wiː miːt ðə ˈded.laɪn/',
          explanation: 'Used to talk about possible future situations and their results.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e82',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Future Possibility',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'If the client ___ the proposal, we will start next week.',
          options: ['accepts', 'will accept', 'accepted', 'accept'],
          correctAnswer: 'accepts',
          explanation: 'In the "if" clause of a first conditional, we use the Present Simple.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e83',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Second Conditional - Advice',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          text: 'If I ___ (ser) you, I would ask for a pay rise.',
          correctAnswer: 'were',
          explanation: 'We use "If I were you" to give advice (Second Conditional).'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e84',
    type: 'matching',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Conditional Matching',
      instructions: 'Match the beginning and end of the sentences.',
      pairs: [
        { id: '1', left: 'If we don\'t hurry', right: 'we will miss the meeting' },
        { id: '2', left: 'If I had more time', right: 'I would help you' },
        { id: '3', left: 'Unless it rains', right: 'we will have the event outside' },
        { id: '4', left: 'As soon as he arrives', right: 'we will start' }
      ]
    } as any
  },
  {
    id: 'b1-u3-e85',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Negotiation Conditional',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'will', 'sign', 'the', 'contract', 'if', 'you', 'lower', 'the', 'price', '.'],
          correctSentence: 'We will sign the contract if you lower the price.',
          translation: 'Firmaremos el contrato si bajas el precio.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e86',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Modal Verbs of Obligation',
      instructions: 'Choose the correct modal.',
      questions: [
        {
          id: 'q1',
          question: 'You ___ wear a suit, but you should look professional.',
          options: ['don\'t have to', 'mustn\'t', 'shouldn\'t', 'can\'t'],
          correctAnswer: 'don\'t have to',
          explanation: '"Don\'t have to" indicates a lack of obligation.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e87',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Passive Voice in Business',
      instructions: 'Fill in the blank with the passive form.',
      questions: [
        {
          id: 'q1',
          text: 'The new policy ___ (anunciar) yesterday by the CEO.',
          correctAnswer: 'was announced',
          explanation: 'Passive Voice: was/were + past participle.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e88',
    type: 'flashcard',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      items: [
        {
          front: 'Passive Voice (Present)',
          back: 'Voz Pasiva (Presente)',
          example: 'English is spoken in offices all over the world.',
          pronunciation: '/ˈɪŋ.ɡlɪʃ ɪz ˈspəʊ.kən/',
          explanation: 'Used when the action is more important than the person doing it.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e89',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Formal Advice',
      instructions: 'Say this clearly.',
      questions: [
        {
          id: 'q1',
          text: 'If I were in your position, I would focus on improving my technical skills.',
          correctAnswer: 'If I were in your position, I would focus on improving my technical skills',
          explanation: 'Pronuncia "technical" /ˈtek.nɪ.kəl/ con precisión.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e90',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Meeting Obligation',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Employees', 'must', 'attend', 'the', 'safety', 'training', 'session', '.'],
          correctSentence: 'Employees must attend the safety training session.',
          translation: 'Los empleados deben asistir a la sesión de capacitación en seguridad.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 10: Final Review & Production (91-100) ---
  {
    id: 'b1-u3-e91',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'hard',
    content: {
      title: 'Review: Collocations',
      instructions: 'Choose the correct verb.',
      questions: [
        {
          id: 'q1',
          question: 'We need to ___ a decision before the end of the day.',
          options: ['make', 'do', 'take', 'get'],
          correctAnswer: 'make',
          explanation: 'We always "make a decision".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e92',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Review: Mixed Tenses',
      instructions: 'Complete with the correct form.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (work) here for ten years and I still love it.',
          correctAnswer: 'have worked',
          explanation: 'Present Perfect for actions that started in the past and continue.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e93',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'hard',
    content: {
      title: 'Professional Intro',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'look', 'forward', 'to', 'hearing', 'from', 'you', 'soon', '.'],
          correctSentence: 'I look forward to hearing from you soon.',
          translation: 'Espero tener noticias suyas pronto.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e94',
    type: 'matching',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'hard',
    content: {
      title: 'Phrasal Verb Review',
      instructions: 'Match the phrasal verb with its meaning.',
      pairs: [
        { id: '1', left: 'Call off', right: 'Cancel a meeting' },
        { id: '2', left: 'Set up', right: 'Arrange or organize' },
        { id: '3', left: 'Hand in', right: 'Submit a report or resignation' },
        { id: '4', left: 'Go over', right: 'Review details' }
      ]
    } as any
  },
  {
    id: 'b1-u3-e95',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Meeting Request',
      instructions: 'Say this clearly.',
      questions: [
        {
          id: 'q1',
          text: 'Would it be possible to schedule a brief call to discuss the proposal?',
          correctAnswer: 'Would it be possible to schedule a brief call to discuss the proposal',
          explanation: 'Pronuncia "schedule" /ˈʃedʒ.uːl/ o /ˈskedʒ.uːl/.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e96',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Conditional Review',
      instructions: 'Complete with the correct form.',
      questions: [
        {
          id: 'q1',
          text: 'If we ___ (investir) more in marketing, we would get more clients.',
          correctAnswer: 'invested',
          explanation: 'Second Conditional (If + Past Simple, would + verb).'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e97',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Efficiency Review',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'need', 'to', 'improve', 'our', 'workflow', 'to', 'save', 'time', '.'],
          correctSentence: 'We need to improve our workflow to save time.',
          translation: 'Necesitamos mejorar nuestro flujo de trabajo para ahorrar tiempo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e98',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Vocabulary',
    difficulty: 'hard',
    content: {
      title: 'Professional Etiquette',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'Being ___ is crucial for maintaining a professional image.',
          options: ['punctual', 'late', 'silent', 'absent'],
          correctAnswer: 'punctual',
          explanation: '"Punctual" means arriving or doing something at the expected or correct time.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e99',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Production',
    difficulty: 'hard',
    content: {
      title: 'Final Pitch',
      instructions: 'Read this clearly and with enthusiasm.',
      questions: [
        {
          id: 'q1',
          text: 'Our team has worked incredibly hard to deliver this project on time and within budget.',
          correctAnswer: 'Our team has worked incredibly hard to deliver this project on time and within budget',
          explanation: 'Enfatiza "incredibly hard" y "within budget".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e100',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Production',
    difficulty: 'hard',
    content: {
      title: 'Unit Completion',
      instructions: 'Read the final reflection.',
      questions: [
        {
          id: 'q1',
          text: 'Continuous professional development is the key to a fulfilling and successful career.',
          correctAnswer: 'Continuous professional development is the key to a fulfilling and successful career',
          explanation: 'Enfatiza "fulfilling" /fʊlˈfɪl.ɪŋ/ y "successful" /səkˈses.fəl/.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e101',
    type: 'interactive-dialogue',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Listening & Interaction',
    difficulty: 'medium',
    content: {
      title: 'The Job Interview',
      instructions: 'Listen to a job interview for a Project Manager position. Pay attention to the candidate\'s experience.',
      audioUrl: '/audio/b1/unit3/dialogue1.mp3',
      transcript: [
        { speaker: 'Interviewer', text: 'Good morning, Alex. Thank you for coming in today. To start, could you tell me a bit about your professional background?', start: 0, end: 8 },
        { speaker: 'Alex', text: 'Good morning. Certainly. I\'ve been working in project management for over six years. My last role was at a tech startup where I managed a team of ten developers.', start: 9, end: 20 },
        { speaker: 'Interviewer', text: 'That sounds impressive. What would you say is your greatest strength as a manager?', start: 21, end: 26 },
        { speaker: 'Alex', text: 'I think my greatest strength is communication. I believe that keeping everyone on the same page is crucial for meeting deadlines.', start: 27, end: 35 },
        { speaker: 'Interviewer', text: 'I agree. And how do you handle high-pressure situations or tight deadlines?', start: 36, end: 41 },
        { speaker: 'Alex', text: 'I try to stay calm and focus on prioritizing tasks. I usually break down large projects into smaller, manageable steps.', start: 42, end: 50 },
        { speaker: 'Interviewer', text: 'What about your experience with remote teams? Many of our employees work from home.', start: 51, end: 57 },
        { speaker: 'Alex', text: 'I\'m very used to that. In my previous job, half of the team was based in different time zones. We used various digital tools to stay connected.', start: 58, end: 68 },
        { speaker: 'Interviewer', text: 'Excellent. Finally, where do you see yourself in five years?', start: 69, end: 73 },
        { speaker: 'Alex', text: 'I hope to be in a senior leadership role, helping to shape the company\'s long-term strategy.', start: 74, end: 81 }
      ],
      questions: [
        {
          id: 'q1',
          time: 20,
          question: 'How long has Alex been working in project management?',
          options: ['Three years', 'Six years', 'Ten years', 'Five years'],
          correctAnswer: 1,
          explanation: 'Alex says: "I\'ve been working in project management for over six years."'
        },
        {
          id: 'q2',
          time: 35,
          question: 'What does Alex consider his greatest strength?',
          options: ['Technical skills', 'Budgeting', 'Communication', 'Creativity'],
          correctAnswer: 2,
          explanation: 'Alex mentions: "I think my greatest strength is communication."'
        },
        {
          id: 'q3',
          time: 50,
          question: 'How does Alex handle high-pressure situations?',
          options: ['By working overtime', 'By asking for help', 'By prioritizing tasks and breaking them down', 'By ignoring the pressure'],
          correctAnswer: 2,
          explanation: 'Alex explains: "I try to stay calm and focus on prioritizing tasks. I usually break down large projects into smaller, manageable steps."'
        },
        {
          id: 'q4',
          time: 68,
          question: 'Does Alex have experience with remote teams?',
          options: ['No, he prefers office work', 'Yes, half of his previous team was remote', 'Only with local teams', 'He is currently learning about it'],
          correctAnswer: 1,
          explanation: 'He says: "In my previous job, half of the team was based in different time zones."'
        }
      ]
    } as any
  },
  {
    id: 'b1-u3-e102',
    type: 'interactive-dialogue',
    level: 'B1',
    topic: 'Work & Professional Life',
    topicName: 'Listening & Interaction',
    difficulty: 'hard',
    content: {
      title: 'A Project Update Meeting',
      instructions: 'Listen to a weekly team meeting where two colleagues discuss the progress of a new marketing campaign.',
      audioUrl: '/audio/b1/unit3/dialogue2.mp3',
      transcript: [
        { speaker: 'Emma', text: 'Hi David, do you have a minute to go over the marketing campaign for the new product launch?', start: 0, end: 6 },
        { speaker: 'David', text: 'Sure, Emma. I was just reviewing the latest analytics. We\'re seeing a lot of engagement on social media.', start: 7, end: 14 },
        { speaker: 'Emma', text: 'That\'s great news. But what about the email campaign? Have we started sending those out yet?', start: 15, end: 21 },
        { speaker: 'David', text: 'Actually, we had to call off the first batch because of a technical error in the links.', start: 22, end: 28 },
        { speaker: 'Emma', text: 'Oh no, that\'s a setback. Is it fixed now?', start: 29, end: 32 },
        { speaker: 'David', text: 'Yes, the IT department set up a new tracking system this morning. We should be back on track by tomorrow.', start: 33, end: 40 },
        { speaker: 'Emma', text: 'Good. We really need to meet our target by the end of the month. The stakeholders are watching closely.', start: 41, end: 48 },
        { speaker: 'David', text: 'I understand. I\'m also planning to hand in the final report on Friday. It will include all the projections.', start: 49, end: 57 },
        { speaker: 'Emma', text: 'Perfect. Let\'s touch base again on Thursday afternoon to make sure everything is ready.', start: 58, end: 64 },
        { speaker: 'David', text: 'Sounds like a plan. I\'ll send you an invitation for the meeting now.', start: 65, end: 70 }
      ],
      questions: [
        {
          id: 'q1',
          time: 14,
          question: 'Where is the campaign seeing a lot of engagement?',
          options: ['On TV', 'In newspapers', 'On social media', 'Via email'],
          correctAnswer: 2,
          explanation: 'David says: "We\'re seeing a lot of engagement on social media."'
        },
        {
          id: 'q2',
          time: 28,
          question: 'Why was the first batch of emails cancelled?',
          options: ['The content was wrong', 'There was a technical error in the links', 'The manager didn\'t like it', 'They ran out of budget'],
          correctAnswer: 1,
          explanation: 'David explains: "we had to call off the first batch because of a technical error in the links."'
        },
        {
          id: 'q3',
          time: 40,
          question: 'What did the IT department do this morning?',
          options: ['Fixed the servers', 'Set up a new tracking system', 'Hired new staff', 'Created new links'],
          correctAnswer: 1,
          explanation: 'David says: "the IT department set up a new tracking system this morning."'
        },
        {
          id: 'q4',
          time: 57,
          question: 'When is David planning to submit the final report?',
          options: ['Today', 'Tomorrow', 'On Friday', 'Next Monday'],
          correctAnswer: 2,
          explanation: 'He says: "I\'m also planning to hand in the final report on Friday."'
        }
      ]
    } as any
  }
];

