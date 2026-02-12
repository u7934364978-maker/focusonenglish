import { Exercise } from '@/lib/exercise-generator';

export const UNIT_11_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Body Parts (1-10) ---
  {
    id: 'a2-u11-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hombro',
          back: 'Shoulder',
          example: 'I have a pain in my left shoulder.',
          pronunciation: '/ˈʃəʊldə/',
          explanation: 'La parte del cuerpo que une el brazo con el tronco.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      title: 'Body Parts',
      instructions: 'Une la parte del cuerpo con su traducción.',
      pairs: [
        { id: '1', left: 'Knee', right: 'Rodilla' },
        { id: '2', left: 'Elbow', right: 'Codo' },
        { id: '3', left: 'Neck', right: 'Cuello' },
        { id: '4', left: 'Back', right: 'Espalda' },
        { id: '5', left: 'Chest', right: 'Pecho' }
      ],
      explanation: 'Partes principales del cuerpo humano.'
    } as any
  },
  {
    id: 'a2-u11-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      title: 'Identify the part',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'You use your ___ to hear.',
          options: ['eyes', 'ears', 'nose'],
          correctAnswer: 1,
          explanation: 'Usamos las orejas (ears) para oír.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      title: 'Body functions',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I use my ___ to walk. (singular)',
          correctAnswer: 'leg',
          explanation: 'Usamos las piernas (legs) para caminar.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Describing body parts',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'human', 'body', 'has', 'two', 'hands', '.'],
          correctSentence: 'The human body has two hands.',
          translation: 'El cuerpo humano tiene dos manos.',
          hint: 'Usa "has".',
          explanation: 'Estructura básica descriptiva.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Dedo del pie',
          back: 'Toe',
          example: 'I hit my big toe against the door.',
          pronunciation: '/təʊ/',
          explanation: '"Finger" es para la mano, "Toe" es para el pie.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Finger vs Toe',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: 'How many toes do you have on each foot?',
          options: ['Five', 'Ten', 'Two'],
          correctAnswer: 0,
          explanation: 'Tenemos cinco dedos (toes) en cada pie.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Knee',
      instructions: 'Di "Knee".',
      questions: [
        {
          id: 'q1',
          text: 'Knee',
          correctAnswer: 'Knee',
          explanation: 'La "k" es muda: se pronuncia /niː/.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'The face',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'You have two eyes and one ___ on your face.',
          correctAnswer: 'nose',
          explanation: 'Tenemos una nariz (nose) en la cara.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Body sentence',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['My', 'hair', 'is', 'longer', 'than', 'yours', '.'],
          correctSentence: 'My hair is longer than yours.',
          translation: 'Mi pelo es más largo que el tuyo.',
          hint: 'Usa comparativo.',
          explanation: 'Comparando partes del cuerpo.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Health Problems & Feelings (11-20) ---
  {
    id: 'a2-u11-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Dolor de cabeza',
          back: 'Headache',
          example: 'I have a terrible headache.',
          pronunciation: '/ˈhedeɪk/',
          explanation: 'El sufijo "-ache" indica dolor continuo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e12',
    type: 'matching',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      title: 'Common Ailments',
      instructions: 'Une el problema con su traducción.',
      pairs: [
        { id: '1', left: 'Stomach ache', right: 'Dolor de estómago' },
        { id: '2', left: 'Backache', right: 'Dolor de espalda' },
        { id: '3', left: 'Toothache', right: 'Dolor de muelas' },
        { id: '4', left: 'Earache', right: 'Dolor de oídos' },
        { id: '5', left: 'Sore throat', right: 'Dolor de garganta' }
      ],
      explanation: 'Problemas de salud comunes.'
    } as any
  },
  {
    id: 'a2-u11-e13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Health issues',
      instructions: 'Elige la opción lógica.',
      questions: [
        {
          id: 'q1',
          question: 'I have a high temperature. I think I have a ___ .',
          options: ['fever', 'cold', 'cough'],
          correctAnswer: 0,
          explanation: 'La temperatura alta indica fiebre (fever).'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'At the doctor',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I have a ___ and I cannot stop sneezing.',
          correctAnswer: 'cold',
          explanation: 'Un resfriado (cold) suele causar estornudos.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e15',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Expressing pain',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['My', 'arm', 'hurts', 'after', 'the', 'accident', '.'],
          correctSentence: 'My arm hurts after the accident.',
          translation: 'Me duele el brazo después del accidente.',
          hint: 'Usa "hurts".',
          explanation: 'El verbo "to hurt" se usa para expresar dolor físico.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e16',
    type: 'flashcard',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Sentirse mal / Enfermo',
          back: 'To feel sick / ill',
          example: 'I feel sick today, I cannot go to work.',
          pronunciation: '/fiːl sɪk/',
          explanation: '"Sick" es más común en EE. UU., "Ill" en el Reino Unido.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e17',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Coughing',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'He is making a loud noise from his throat. He has a ___ .',
          options: ['cough', 'headache', 'pain'],
          correctAnswer: 0,
          explanation: 'Toser es "to cough" (sustantivo: a cough).'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e18',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Headache',
      instructions: 'Di "I have a headache".',
      questions: [
        {
          id: 'q1',
          text: 'I have a headache',
          correctAnswer: 'I have a headache',
          explanation: 'La terminación "-ache" suena como "eik".'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e19',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'hard',
    content: {
      title: 'Pharmacy',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I need to buy some ___ for my pain.',
          correctAnswer: 'medicine',
          explanation: 'Compramos medicina (medicine) para el dolor.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'hard',
    content: {
      title: 'Health state',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'hope', 'you', 'feel', 'better', 'soon', '.'],
          correctSentence: 'I hope you feel better soon.',
          translation: 'Espero que te sientas mejor pronto.',
          hint: 'Frase de cortesía.',
          explanation: 'Expresión estándar para desear mejoría.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Giving Advice (Should / Shouldn't) (21-30) ---
  {
    id: 'a2-u11-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Deberías',
          back: 'Should',
          example: 'You should see a doctor.',
          pronunciation: '/ʃʊd/',
          explanation: 'Usado para dar consejos o sugerencias.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e22',
    type: 'flashcard',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'No deberías',
          back: "Shouldn't",
          example: "You shouldn't eat so much sugar.",
          pronunciation: '/ˈʃʊdənt/',
          explanation: 'Consejo negativo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Giving Advice',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I have a broken leg. What should I do?',
          options: ['You should go to the hospital.', 'You should go to the park.', 'You shouldn\'t do anything.'],
          correctAnswer: 0,
          explanation: 'Con una pierna rota, el consejo lógico es ir al hospital.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Healthy advice',
      instructions: 'Completa con "should" o "shouldn\'t".',
      questions: [
        {
          id: 'q1',
          text: 'You ___ drink more water every day.',
          correctAnswer: 'should',
          explanation: 'Beber agua es un buen hábito, por lo que es un consejo positivo.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Building advice',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['You', 'should', 'stay', 'in', 'bed', 'today', '.'],
          correctSentence: 'You should stay in bed today.',
          translation: 'Deberías quedarte en cama hoy.',
          hint: 'Empieza con "You".',
          explanation: 'Estructura: Sujeto + should + verbo infinitivo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e26',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Should questions',
      instructions: 'Elige la pregunta correcta.',
      questions: [
        {
          id: 'q1',
          question: '¿Cómo pides un consejo?',
          options: ['Should I go?', 'Do I should go?', 'I should go?'],
          correctAnswer: 0,
          explanation: 'Invertimos el orden para preguntas con "should".'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e27',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Should',
      instructions: 'Di "You should rest".',
      questions: [
        {
          id: 'q1',
          text: 'You should rest',
          correctAnswer: 'You should rest',
          explanation: 'La "l" de "should" es muda.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'hard',
    content: {
      title: 'Negative advice',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'You ___ smoke. It is bad for your health.',
          correctAnswer: "shouldn't",
          explanation: 'Fumar es malo, por lo que el consejo es negativo.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e29',
    type: 'matching',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Problem and Advice',
      instructions: 'Une el problema con el consejo adecuado.',
      pairs: [
        { id: '1', left: 'I am tired.', right: 'You should sleep.' },
        { id: '2', left: 'I am hungry.', right: 'You should eat.' },
        { id: '3', left: 'I am cold.', right: 'You should wear a coat.' },
        { id: '4', left: 'I have toothache.', right: 'You should see a dentist.' }
      ],
      explanation: 'Lógica de consejos de salud.'
    } as any
  },
  {
    id: 'a2-u11-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'hard',
    content: {
      title: 'Question for advice',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['What', 'should', 'I', 'wear', 'to', 'the', 'party', '?'],
          correctSentence: 'What should I wear to the party?',
          translation: '¿Qué debería ponerme para la fiesta?',
          hint: 'Empieza con "What".',
          explanation: 'Estructura de pregunta abierta con "should".',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Healthy Lifestyle (31-40) ---
  {
    id: 'a2-u11-e31',
    type: 'flashcard',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Estar en forma',
          back: 'To be fit / To keep fit',
          example: 'I go to the gym to keep fit.',
          pronunciation: '/kiːp fɪt/',
          explanation: 'Mantener una buena condición física.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e32',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Healthy habits',
      instructions: 'Elige el hábito saludable.',
      questions: [
        {
          id: 'q1',
          question: 'Which one is healthy?',
          options: ['Eating fast food', 'Doing exercise', 'Sleeping 2 hours'],
          correctAnswer: 1,
          explanation: 'Hacer ejercicio es un hábito saludable.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e33',
    type: 'matching',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      title: 'Healthy Actions',
      instructions: 'Une el verbo con el hábito.',
      pairs: [
        { id: '1', left: 'Drink', right: 'Water' },
        { id: '2', left: 'Eat', right: 'Vegetables' },
        { id: '3', left: 'Do', right: 'Sport' },
        { id: '4', left: 'Get', right: 'Enough sleep' }
      ],
      explanation: 'Acciones para una vida sana.'
    } as any
  },
  {
    id: 'a2-u11-e34',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Losing weight',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'If you want to lose ___ , you should eat less fat.',
          correctAnswer: 'weight',
          explanation: '"Weight" significa peso.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e35',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Daily exercise',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'should', 'exercise', 'three', 'times', 'a', 'week', '.'],
          correctSentence: 'We should exercise three times a week.',
          translation: 'Deberíamos hacer ejercicio tres veces por semana.',
          hint: 'Usa "should".',
          explanation: 'Recomendación de frecuencia de ejercicio.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e36',
    type: 'flashcard',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Dieta equilibrada',
          back: 'Balanced diet',
          example: 'It is important to have a balanced diet.',
          pronunciation: '/ˈbælənst ˈdaɪət/',
          explanation: 'Comer una variedad de alimentos saludables.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Sleep habits',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'How many hours should you sleep?',
          options: ['Around 8 hours', 'Only 4 hours', 'At least 12 hours'],
          correctAnswer: 0,
          explanation: 'Lo recomendable son unas 8 horas.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Balanced',
      instructions: 'Di "Balanced diet".',
      questions: [
        {
          id: 'q1',
          text: 'Balanced diet',
          correctAnswer: 'Balanced diet',
          explanation: 'Pronuncia la "ed" de "balanced" como una "t" suave.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'hard',
    content: {
      title: 'Giving up habits',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'You should ___ up smoking.',
          correctAnswer: 'give',
          explanation: '"Give up" es un phrasal verb que significa dejar un hábito.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'hard',
    content: {
      title: 'Health importance',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Health', 'is', 'more', 'important', 'than', 'money', '.'],
          correctSentence: 'Health is more important than money.',
          translation: 'La salud es más importante que el dinero.',
          hint: 'Usa comparativo.',
          explanation: 'Uso de "more important than".',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u11-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Review: Body parts',
      instructions: '¿Dónde llevas un sombrero?',
      questions: [
        {
          id: 'q1',
          question: 'Where do you wear a hat?',
          options: ['On your hand', 'On your head', 'On your foot'],
          correctAnswer: 1,
          explanation: 'Llevamos el sombrero en la cabeza (head).'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Review: Ache',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I ate too much. Now I have a stomach ___ .',
          correctAnswer: 'ache',
          explanation: 'Dolor de estómago.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Review: Should',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['You', 'should', 'see', ' a', 'dentist', 'regularly', '.'],
          correctSentence: 'You should see a dentist regularly.',
          translation: 'Deberías ver a un dentista regularmente.',
          hint: 'Usa "should".',
          explanation: 'Consejo de salud dental.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Medicine',
      instructions: 'Di "I need to take my medicine".',
      questions: [
        {
          id: 'q1',
          text: 'I need to take my medicine',
          correctAnswer: 'I need to take my medicine',
          explanation: 'Se pronuncia /ˈmedsən/ o /ˈmedɪsən/.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e45',
    type: 'matching',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Healthy Mix',
      instructions: 'Une cada elemento con su opuesto.',
      pairs: [
        { id: '1', left: 'Healthy', right: 'Unhealthy' },
        { id: '2', left: 'Fit', right: 'Unfit' },
        { id: '3', left: 'Well', right: 'Ill / Sick' },
        { id: '4', left: 'Strong', right: 'Weak' }
      ],
      explanation: 'Adjetivos de estado físico y sus opuestos.'
    } as any
  },
  {
    id: 'a2-u11-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Review: Shouldn\'t',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'If you have a headache, you ___ listen to loud music.',
          options: ['should', "shouldn't", 'must'],
          correctAnswer: 1,
          explanation: 'La música alta empeora el dolor de cabeza.'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'hard',
    content: {
      title: 'Review: Plural parts',
      instructions: 'Completa con el plural de "foot".',
      questions: [
        {
          id: 'q1',
          text: 'Wash your ___ before going to bed.',
          correctAnswer: 'feet',
          explanation: '"Feet" es el plural irregular de "foot".'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'hard',
    content: {
      title: 'Review: Questions',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Where', 'does', 'it', 'hurt', '?'],
          correctSentence: 'Where does it hurt?',
          translation: '¿Dónde le duele?',
          hint: 'Pregunta del médico.',
          explanation: 'Pregunta básica para localizar el dolor.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u11-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Stomach',
      instructions: 'Di "My stomach ache is gone".',
      questions: [
        {
          id: 'q1',
          text: 'My stomach ache is gone',
          correctAnswer: 'My stomach ache is gone',
          explanation: 'La "ch" de "stomach" suena como "k".'
        }
      ]
    }
  },
  {
    id: 'a2-u11-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Health & Body',
    topicName: 'Health & Body',
    difficulty: 'easy',
    content: {
      title: 'Final health check',
      instructions: '¿Qué parte usamos para ver?',
      questions: [
        {
          id: 'q1',
          question: 'We see with our ___ .',
          options: ['mouth', 'eyes', 'hands'],
          correctAnswer: 1,
          explanation: 'Vemos con los ojos (eyes).'
        }
      ]
    }
  }
];
