import { Exercise } from '@/lib/exercise-generator';

export const UNIT_3_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Daily Actions (1-10) ---
  {
    id: 'a2-u3-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Despertarse',
          back: 'To wake up',
          example: 'I usually wake up at 7 AM.',
          pronunciation: '/weɪk ʌp/',
          explanation: 'El momento en que abres los ojos y dejas de dormir.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      title: 'Wake up vs Get up',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I wake up at 7:00, but I ___ at 7:15.',
          options: ['get up', 'go up', 'stay up'],
          correctAnswer: 0,
          explanation: '"Wake up" es despertar, "Get up" es levantarse físicamente de la cama.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e3',
    type: 'matching',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      title: 'Morning Routine',
      instructions: 'Une la acción con su traducción.',
      pairs: [
        { id: '1', left: 'Have a shower', right: 'Ducharse' },
        { id: '2', left: 'Brush teeth', right: 'Cepillarse los dientes' },
        { id: '3', left: 'Get dressed', right: 'Vestirse' },
        { id: '4', left: 'Comb hair', right: 'Peinarse' }
      ],
      explanation: 'Acciones típicas de la mañana.'
    } as any
  },
  {
    id: 'a2-u3-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      title: 'Breakfast time',
      instructions: 'Completa con el verbo adecuado.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ breakfast at 8:00 AM.',
          correctAnswer: 'have',
          explanation: 'En inglés se usa "have breakfast" (o "eat") para desayunar.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Present Simple routine',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'takes', 'the', 'bus', 'to', 'work', '.'],
          correctSentence: 'He takes the bus to work.',
          translation: 'Él toma el autobús al trabajo.',
          hint: 'Empieza con el sujeto "He".',
          explanation: 'Añadimos "s" al verbo en tercera persona singular (Present Simple).',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Llegar a casa',
          back: 'To get home',
          example: 'I get home at 6 PM.',
          pronunciation: '/ɡet həʊm/',
          explanation: 'Note que no usamos "to" entre "get" y "home".'
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Time expressions',
      instructions: 'Elige la preposición correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I start work ___ 9:00 AM.',
          options: ['at', 'on', 'in'],
          correctAnswer: 0,
          explanation: 'Usamos "at" para horas específicas.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Breakfast',
      instructions: 'Di "Breakfast".',
      questions: [
        {
          id: 'q1',
          text: 'Breakfast',
          correctAnswer: 'Breakfast',
          explanation: 'La segunda sílaba es muy corta: /ˈbrekfəst/.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Evening routine',
      instructions: 'Completa con la forma correcta del verbo.',
      questions: [
        {
          id: 'q1',
          text: 'She ___ TV in the evening. (watch)',
          correctAnswer: 'watches',
          explanation: 'Añadimos "-es" a verbos que terminan en "ch" en tercera persona.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Bedtime',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['What', 'time', 'do', 'you', 'go', 'to', 'bed', '?'],
          correctSentence: 'What time do you go to bed?',
          translation: '¿A qué hora vas a la cama?',
          hint: 'Empieza con "What time".',
          explanation: 'Usamos "do" como auxiliar para preguntas con "you".',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Adverbs of Frequency (11-20) ---
  {
    id: 'a2-u3-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'A menudo',
          back: 'Often',
          example: 'I often go to the gym.',
          pronunciation: '/ˈɒfən/',
          explanation: 'Indica una frecuencia alta. La "t" suele ser muda.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e12',
    type: 'matching',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      title: 'Frequency scale',
      instructions: 'Une el adverbio con su porcentaje aproximado.',
      pairs: [
        { id: '1', left: 'Always', right: '100%' },
        { id: '2', left: 'Usually', right: '80%' },
        { id: '3', left: 'Sometimes', right: '50%' },
        { id: '4', left: 'Hardly ever', right: '10%' },
        { id: '5', left: 'Never', right: '0%' }
      ],
      explanation: 'Orden de frecuencia de mayor a menor.'
    } as any
  },
  {
    id: 'a2-u3-e13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Position of adverbs',
      instructions: 'Elige la oración con el orden correcto.',
      questions: [
        {
          id: 'q1',
          question: '¿Cuál es correcta?',
          options: [
            'I always am late.',
            'I am always late.',
            'Always I am late.'
          ],
          correctAnswer: 1,
          explanation: 'Los adverbios de frecuencia van DESPUÉS del verbo "to be".'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Frequency in routine',
      instructions: 'Completa con el adverbio "usually".',
      questions: [
        {
          id: 'q1',
          text: 'They ___ study in the library.',
          correctAnswer: 'usually',
          explanation: 'Los adverbios de frecuencia van ANTES de los verbos normales.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e15',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'hard',
    content: {
      title: 'Building frequency sentences',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'sometimes', 'go', 'to', 'the', 'cinema', 'on', 'Saturdays', '.'],
          correctSentence: 'We sometimes go to the cinema on Saturdays.',
          translation: 'A veces vamos al cine los sábados.',
          hint: 'El adverbio va después del sujeto.',
          explanation: 'Estructura: Sujeto + Adverbio + Verbo + Complemento.',
          points: 15
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e16',
    type: 'flashcard',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Casi nunca',
          back: 'Hardly ever / Rarely',
          example: 'I hardly ever drink coffee.',
          pronunciation: '/ˈhɑːdli ˈevə/',
          explanation: 'Se usa para acciones que ocurren muy pocas veces.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e17',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'How often',
      instructions: 'Elige la pregunta correcta.',
      questions: [
        {
          id: 'q1',
          question: '¿Cómo preguntas la frecuencia?',
          options: ['How many times?', 'How often?', 'How much?'],
          correctAnswer: 1,
          explanation: '"How often" es la forma estándar de preguntar por la frecuencia.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e18',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Usually',
      instructions: 'Di "Usually".',
      questions: [
        {
          id: 'q1',
          text: 'Usually',
          correctAnswer: 'Usually',
          explanation: 'La "s" suena como un zumbido suave /ʒ/.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e19',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'hard',
    content: {
      title: 'Frequency with to be',
      instructions: 'Completa la oración.',
      questions: [
        {
          id: 'q1',
          text: 'She is ___ happy. (siempre)',
          correctAnswer: 'always',
          explanation: 'El adverbio va después del "is".'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'hard',
    content: {
      title: 'Question with frequency',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['How', 'often', 'do', 'you', 'play', 'football', '?'],
          correctSentence: 'How often do you play football?',
          translation: '¿Con qué frecuencia juegas al fútbol?',
          hint: 'Empieza con "How often".',
          explanation: 'Estructura: How often + do/does + sujeto + verbo.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Household Chores (21-30) ---
  {
    id: 'a2-u3-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hacer la cama',
          back: 'To make the bed',
          example: 'I make my bed every morning.',
          pronunciation: '/meɪk ðə bed/',
          explanation: 'Usamos el verbo "make", no "do", para la cama.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e22',
    type: 'matching',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      title: 'Chores',
      instructions: 'Une la tarea con su traducción.',
      pairs: [
        { id: '1', left: 'Do the laundry', right: 'Lavar la ropa' },
        { id: '2', left: 'Wash the dishes', right: 'Lavar los platos' },
        { id: '3', left: 'Vacuum the floor', right: 'Pasar la aspiradora' },
        { id: '4', left: 'Take out the rubbish', right: 'Sacar la basura' }
      ],
      explanation: 'Tareas comunes del hogar.'
    } as any
  },
  {
    id: 'a2-u3-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Do vs Make for chores',
      instructions: 'Elige el verbo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'I need to ___ the shopping.',
          options: ['do', 'make', 'have'],
          correctAnswer: 0,
          explanation: 'Usamos "do" para "the shopping".'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      title: 'Cleaning the house',
      instructions: 'Completa con el verbo.',
      questions: [
        {
          id: 'q1',
          text: 'My sister ___ the windows on Saturdays.',
          correctAnswer: 'cleans',
          explanation: 'Tercera persona del verbo "clean".'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Chores frequency',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'never', 'do', 'the', 'ironing', '.'],
          correctSentence: 'I never do the ironing.',
          translation: 'Nunca plancho.',
          hint: 'El adverbio va antes del verbo "do".',
          explanation: '"Ironing" es la acción de planchar la ropa.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e26',
    type: 'flashcard',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Cocinar la cena',
          back: 'To cook dinner',
          example: 'My father usually cooks dinner.',
          pronunciation: '/kʊk ˈdɪnə/',
          explanation: 'Acción de preparar la comida de la noche.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Taking out the rubbish',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Could you ___ out the rubbish, please?',
          options: ['take', 'make', 'do'],
          correctAnswer: 0,
          explanation: 'La expresión es "take out the rubbish".'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e28',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Vacuum',
      instructions: 'Di "Vacuum".',
      questions: [
        {
          id: 'q1',
          text: 'Vacuum',
          correctAnswer: 'Vacuum',
          explanation: 'Se pronuncia /ˈvækjuːm/.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e29',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Dusting',
      instructions: 'Completa con el verbo.',
      questions: [
        {
          id: 'q1',
          text: 'He ___ the furniture every week. (dust)',
          correctAnswer: 'dusts',
          explanation: '"Dust" como verbo significa quitar el polvo.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'hard',
    content: {
      title: 'Shared chores',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'always', 'wash', 'the', 'dishes', 'together', '.'],
          correctSentence: 'We always wash the dishes together.',
          translation: 'Siempre lavamos los platos juntos.',
          hint: 'Juntos es "together".',
          explanation: 'Estructura típica de una rutina compartida.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Work/Study Routine (31-40) ---
  {
    id: 'a2-u3-e31',
    type: 'flashcard',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Viajar diariamente al trabajo',
          back: 'To commute',
          example: 'I commute to London every day.',
          pronunciation: '/kəˈmjuːt/',
          explanation: 'Término específico para el viaje entre casa y el trabajo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e32',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'At work',
      instructions: 'Elige la preposición.',
      questions: [
        {
          id: 'q1',
          question: 'I am ___ work right now.',
          options: ['at', 'in', 'on'],
          correctAnswer: 0,
          explanation: 'Estar en el trabajo se dice "at work".'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e33',
    type: 'matching',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      title: 'Work actions',
      instructions: 'Une el verbo con el complemento.',
      pairs: [
        { id: '1', left: 'Check', right: 'Emails' },
        { id: '2', left: 'Attend', right: 'Meetings' },
        { id: '3', left: 'Write', right: 'Reports' },
        { id: '4', left: 'Make', right: 'Phone calls' }
      ],
      explanation: 'Acciones comunes en la oficina.'
    } as any
  },
  {
    id: 'a2-u3-e34',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Break time',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'I usually ___ a coffee break at 11:00.',
          correctAnswer: 'take',
          explanation: 'Podemos usar "take" o "have" para descansos.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e35',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Finish work',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['What', 'time', 'do', 'you', 'finish', 'work', '?'],
          correctSentence: 'What time do you finish work?',
          translation: '¿A qué hora terminas de trabajar?',
          hint: 'Pregunta sobre el final del día.',
          explanation: '"Finish work" no necesita preposición "to".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e36',
    type: 'flashcard',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Horas extras',
          back: 'Overtime',
          example: 'I sometimes work overtime.',
          pronunciation: '/ˈəʊvətaɪm/',
          explanation: 'Trabajar más horas de las habituales.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Shift work',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: 'He works the night ___.',
          options: ['shift', 'time', 'turn'],
          correctAnswer: 0,
          explanation: '"Shift" significa turno de trabajo.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Commute',
      instructions: 'Di "I commute by train".',
      questions: [
        {
          id: 'q1',
          text: 'I commute by train',
          correctAnswer: 'I commute by train',
          explanation: 'La primera "o" de "commute" es una schwa /ə/.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'hard',
    content: {
      title: 'Deadlines',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I have a ___ for this project tomorrow.',
          correctAnswer: 'deadline',
          explanation: '"Deadline" es la fecha límite.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'hard',
    content: {
      title: 'Office routine',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'always', 'check', 'my', 'emails', 'first', 'thing', '.'],
          correctSentence: 'I always check my emails first thing.',
          translation: 'Siempre reviso mis correos a primera hora.',
          hint: 'A primera hora es "first thing".',
          explanation: 'Frase común para describir el inicio del día laboral.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u3-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Review: Prepositions of time',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'I usually relax ___ the weekend.',
          options: ['at', 'on', 'in'],
          correctAnswer: 0,
          explanation: 'En inglés británico se usa "at the weekend" (en americano "on"). Ambos son aceptables pero "at" es común en exámenes.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      title: 'Review: Third person',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'My friend ___ at 6:30.',
          correctAnswer: 'wakes up',
          explanation: 'Añadimos "s" para la tercera persona.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Review: Frequency order',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['She', 'is', 'never', 'late', 'for', 'school', '.'],
          correctSentence: 'She is never late for school.',
          translation: 'Ella nunca llega tarde a la escuela.',
          hint: 'El adverbio va después del verbo "is".',
          explanation: 'Posición correcta del adverbio con el verbo to be.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Chores',
      instructions: 'Di "I have to do the laundry".',
      questions: [
        {
          id: 'q1',
          text: 'I have to do the laundry',
          correctAnswer: 'I have to do the laundry',
          explanation: 'Asegúrate de pronunciar la "au" en "laundry" como una "o" abierta.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e45',
    type: 'matching',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Routine Mix',
      instructions: 'Une la acción con el momento del día.',
      pairs: [
        { id: '1', left: 'Wake up', right: 'In the morning' },
        { id: '2', left: 'Have lunch', right: 'At midday' },
        { id: '3', left: 'Watch TV', right: 'In the evening' },
        { id: '4', left: 'Sleep', right: 'At night' }
      ],
      explanation: 'Organización temporal de la rutina.'
    } as any
  },
  {
    id: 'a2-u3-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Review: How often',
      instructions: 'Elige la respuesta correcta.',
      questions: [
        {
          id: 'q1',
          question: 'How often do you go to the gym?',
          options: ['Twice a week', 'In the gym', 'Yes, I do'],
          correctAnswer: 0,
          explanation: '"Twice a week" responde a una pregunta de frecuencia.'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'hard',
    content: {
      title: 'Review: Adverb position',
      instructions: 'Completa con "hardly ever".',
      questions: [
        {
          id: 'q1',
          text: 'We ___ go out during the week.',
          correctAnswer: 'hardly ever',
          explanation: 'El adverbio va antes del verbo principal "go".'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'hard',
    content: {
      title: 'Review: Routine and frequency',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Do', 'you', 'always', 'have', 'breakfast', 'at', 'home', '?'],
          correctSentence: 'Do you always have breakfast at home?',
          translation: '¿Siempre desayunas en casa?',
          hint: 'Empieza con el auxiliar "Do".',
          explanation: 'El adverbio de frecuencia va entre el sujeto y el verbo principal en preguntas.',
          points: 15
        }
      ]
    } as any
  },
  {
    id: 'a2-u3-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Overtime',
      instructions: 'Di "I never work overtime".',
      questions: [
        {
          id: 'q1',
          text: 'I never work overtime',
          correctAnswer: 'I never work overtime',
          explanation: 'Asegúrate de poner el acento en la primera sílaba de "overtime".'
        }
      ]
    }
  },
  {
    id: 'a2-u3-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Daily Routine',
    topicName: 'Daily Routine',
    difficulty: 'easy',
    content: {
      title: 'Final routine check',
      instructions: 'Elige la palabra que NO pertenece.',
      questions: [
        {
          id: 'q1',
          question: '¿Cuál no es parte de una rutina diaria?',
          options: ['Wake up', 'Travel to Mars', 'Go to work'],
          correctAnswer: 1,
          explanation: '"Travel to Mars" no es una acción cotidiana común.'
        }
      ]
    }
  }
];
