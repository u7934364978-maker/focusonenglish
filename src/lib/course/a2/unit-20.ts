import { Exercise } from '@/lib/exercise-generator';

export const UNIT_20_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Feelings & Emotions (1-12) ---
  {
    id: 'a2-u20-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Emocionado',
          back: 'Excited',
          example: 'I am so excited about the trip!',
          pronunciation: '/ɪkˈsaɪtɪd/',
          explanation: 'Sentirse muy feliz por algo que va a pasar.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      title: 'Emotions',
      instructions: 'Une la emoción con su traducción.',
      pairs: [
        { id: '1', left: 'Angry', right: 'Enfadado' },
        { id: '2', left: 'Bored', right: 'Aburrido' },
        { id: '3', left: 'Surprised', right: 'Sorprendido' },
        { id: '4', left: 'Scared', right: 'Asustado' },
        { id: '5', left: 'Proud', right: 'Orgulloso' }
      ],
      explanation: 'Vocabulario básico de sentimientos.'
    } as any
  },
  {
    id: 'a2-u20-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      title: 'How do you feel?',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I have nothing to do. I am very ___ .',
          options: ['bored', 'busy', 'happy'],
          correctAnswer: 0,
          explanation: 'Si no tienes nada que hacer, estás aburrido (bored).'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      title: 'Success',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'My parents are very ___ of my good grades.',
          correctAnswer: 'proud',
          explanation: '"Proud" significa orgulloso.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Mood today',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Why', 'are', 'you', 'so', 'angry', 'today', '?'],
          correctSentence: 'Why are you so angry today?',
          translation: '¿Por qué estás tan enfadado hoy?',
          hint: 'Pregunta.',
          explanation: 'Estructura de pregunta con el verbo "to be".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Preocupado',
          back: 'Worried',
          example: 'She is worried about her exam.',
          pronunciation: '/ˈwʌrid/',
          explanation: 'Sentirse ansioso por un problema.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Feelings',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'He was ___ because his team lost the game.',
          options: ['upset', 'excited', 'glad'],
          correctAnswer: 0,
          explanation: '"Upset" significa disgustado o molesto.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Excited',
      instructions: 'Di "I am so excited".',
      questions: [
        {
          id: 'q1',
          text: 'I am so excited',
          correctAnswer: 'I am so excited',
          explanation: 'Pronuncia la "x" como /ks/: /ɪkˈsaɪtɪd/.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Confusion',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'I don’t understand this map. I am ___ .',
          correctAnswer: 'confused',
          explanation: '"Confused" significa confundido.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Future feeling',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'hope', 'you', 'feel', 'better', 'soon', '.'],
          correctSentence: 'I hope you feel better soon.',
          translation: 'Espero que te sientas mejor pronto.',
          hint: 'Usa "hope".',
          explanation: 'Expresando buenos deseos.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e11',
    type: 'matching',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Synonyms',
      instructions: 'Une las palabras con significados similares.',
      pairs: [
        { id: '1', left: 'Happy', right: 'Glad' },
        { id: '2', left: 'Sad', right: 'Upset' },
        { id: '3', left: 'Scared', right: 'Afraid' },
        { id: '4', left: 'Angry', right: 'Mad' }
      ],
      explanation: 'Sinónimos comunes de emociones.'
    } as any
  },
  {
    id: 'a2-u20-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'hard',
    content: {
      title: 'Feelings: -ed vs -ing',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The movie was very ___ . I was so ___ .',
          options: ['boring / bored', 'bored / boring', 'bore / bored'],
          correctAnswer: 0,
          explanation: 'Usamos -ing para la causa (movie) y -ed para el sentimiento (I).'
        }
      ]
    }
  },

  // --- SUB-TOPIC 2: Expressing Opinions (13-24) ---
  {
    id: 'a2-u20-e13',
    type: 'flashcard',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'En mi opinión',
          back: 'In my opinion',
          example: 'In my opinion, this book is great.',
          pronunciation: '/ɪn maɪ əˈpɪnjən/',
          explanation: 'Forma común de empezar a expresar lo que piensas.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e14',
    type: 'matching',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      title: 'Agreeing & Disagreeing',
      instructions: 'Une la frase con su traducción.',
      pairs: [
        { id: '1', left: 'I agree', right: 'Estoy de acuerdo' },
        { id: '2', left: 'I disagree', right: 'No estoy de acuerdo' },
        { id: '3', left: 'I think so', right: 'Eso creo' },
        { id: '4', left: 'Maybe', right: 'Tal vez / Quizás' },
        { id: '5', left: 'You are right', right: 'Tienes razón' }
      ],
      explanation: 'Frases para debatir y opinar.'
    } as any
  },
  {
    id: 'a2-u20-e15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      title: 'Giving an opinion',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ that learning English is important.',
          options: ['think', 'want', 'agree'],
          correctAnswer: 0,
          explanation: 'Usamos "I think that..." para dar una opinión.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e16',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      title: 'Agreement',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'I totally ___ with you.',
          correctAnswer: 'agree',
          explanation: '"Agree" es el verbo estar de acuerdo.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e17',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'My view',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['What', 'do', 'you', 'think', 'about', 'it', '?'],
          correctSentence: 'What do you think about it?',
          translation: '¿Qué piensas de ello?',
          hint: 'Empieza con "What".',
          explanation: 'Preguntando por la opinión de otra persona.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e18',
    type: 'flashcard',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Creer',
          back: 'Believe',
          example: 'I believe that we can win.',
          pronunciation: '/bɪˈliːv/',
          explanation: 'Tener una opinión fuerte o creencia.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Stronger opinion',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I strongly ___ that we should protect nature.',
          options: ['believe', 'hope', 'agree'],
          correctAnswer: 0,
          explanation: '"Believe" se usa para opiniones más profundas.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e20',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Opinion',
      instructions: 'Di "In my opinion".',
      questions: [
        {
          id: 'q1',
          text: 'In my opinion',
          correctAnswer: 'In my opinion',
          explanation: 'La acentuación está en la segunda sílaba: /əˈpɪnjən/.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e21',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Asking for advice',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: '___ is your opinion on this matter?',
          correctAnswer: 'What',
          explanation: 'Usamos "What" para preguntar por una opinión.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e22',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Polite disagreement',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'am', 'afraid', 'I', 'don’t', 'agree', '.'],
          correctSentence: 'I am afraid I don’t agree.',
          translation: 'Me temo que no estoy de acuerdo.',
          hint: 'Usa "afraid".',
          explanation: 'Usamos "I am afraid..." para suavizar una opinión negativa o desacuerdo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e23',
    type: 'matching',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Opinion Phrases',
      instructions: 'Une las partes.',
      pairs: [
        { id: '1', left: 'I don’t', right: 'think so' },
        { id: '2', left: 'That is', right: 'true' },
        { id: '3', left: 'To be', right: 'honest' },
        { id: '4', left: 'As far as', right: 'I know' }
      ],
      explanation: 'Expresiones comunes al hablar.'
    } as any
  },
  {
    id: 'a2-u20-e24',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'hard',
    content: {
      title: 'Agreement Grammar',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ with you about the new law.',
          options: ['agree', 'am agree', 'agrees'],
          correctAnswer: 0,
          explanation: '¡Cuidado! "Agree" es un verbo, no se usa con "am" (I agree, NO I am agree).'
        }
      ]
    }
  },

  // --- SUB-TOPIC 3: Too and Enough (25-36) ---
  {
    id: 'a2-u20-e25',
    type: 'flashcard',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Demasiado',
          back: 'Too',
          example: 'It is too hot today.',
          pronunciation: '/tuː/',
          explanation: 'Usamos "too" antes de un adjetivo para indicar exceso.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e26',
    type: 'matching',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      title: 'Too vs Enough',
      instructions: 'Une la frase con su traducción.',
      pairs: [
        { id: '1', left: 'Too big', right: 'Demasiado grande' },
        { id: '2', left: 'Big enough', right: 'Suficientemente grande' },
        { id: '3', left: 'Too expensive', right: 'Demasiado caro' },
        { id: '4', left: 'Cheap enough', right: 'Suficientemente barato' }
      ],
      explanation: 'Posición de "too" (antes) y "enough" (después) del adjetivo.'
    } as any
  },
  {
    id: 'a2-u20-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Using Enough',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I am not ___ to reach the top shelf.',
          options: ['tall enough', 'enough tall', 'too tall'],
          correctAnswer: 0,
          explanation: '"Enough" va después del adjetivo.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Using Too',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'This tea is ___ hot to drink.',
          correctAnswer: 'too',
          explanation: 'Usamos "too" para un exceso que impide algo.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e29',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Buying clothes',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['These', 'shoes', 'are', 'not', 'big', 'enough', '.'],
          correctSentence: 'These shoes are not big enough.',
          translation: 'Estos zapatos no son lo suficientemente grandes.',
          hint: 'Usa "enough".',
          explanation: 'Negativo + adjetivo + enough.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e30',
    type: 'flashcard',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Suficiente (con nombres)',
          back: 'Enough',
          example: 'I have enough money.',
          pronunciation: '/ɪˈnʌf/',
          explanation: 'Con sustantivos, "enough" va DELANTE.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e31',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Too many vs Too much',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'There are ___ people in this room.',
          options: ['too many', 'too much', 'enough too'],
          correctAnswer: 0,
          explanation: 'Usamos "too many" con sustantivos contables (people).'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e32',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Enough',
      instructions: 'Di "That is enough".',
      questions: [
        {
          id: 'q1',
          text: 'That is enough',
          correctAnswer: 'That is enough',
          explanation: 'El final "gh" suena como /f/: /ɪˈnʌf/.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e33',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Excessive',
      instructions: 'Completa con too much o too many.',
      questions: [
        {
          id: 'q1',
          text: 'I drank ___ coffee and now I can’t sleep.',
          correctAnswer: 'too much',
          explanation: 'Coffee es incontable, usamos "too much".'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e34',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Not possible',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['It', 'is', 'too', 'late', 'to', 'go', 'out', '.'],
          correctSentence: 'It is too late to go out.',
          translation: 'Es demasiado tarde para salir.',
          hint: 'Usa "too".',
          explanation: 'Estructura "too + adjetivo + to + infinitivo".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e35',
    type: 'matching',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Enough combinations',
      instructions: 'Une las partes.',
      pairs: [
        { id: '1', left: 'Good', right: 'enough' },
        { id: '2', left: 'Enough', right: 'time' },
        { id: '3', left: 'Old', right: 'enough' },
        { id: '4', left: 'Enough', right: 'water' }
      ],
      explanation: 'Recuerda: Adjetivo + enough / Enough + Nombre.'
    } as any
  },
  {
    id: 'a2-u20-e36',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'hard',
    content: {
      title: 'Too vs Enough Review',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'We don’t have ___ to buy a new car.',
          options: ['enough money', 'money enough', 'too money'],
          correctAnswer: 0,
          explanation: '"Enough" va delante del nombre.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 4: Describing Moods (37-45) ---
  {
    id: 'a2-u20-e37',
    type: 'flashcard',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Relajado',
          back: 'Relaxed',
          example: 'I feel very relaxed after my yoga class.',
          pronunciation: '/rɪˈlækst/',
          explanation: 'Sentirse tranquilo y sin estrés.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e38',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Stressed',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I have too much work! I am so ___ .',
          options: ['stressed', 'relaxed', 'glad'],
          correctAnswer: 0,
          explanation: '"Stressed" es estar estresado.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Loneliness',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'He feels ___ when his friends are not there.',
          correctAnswer: 'lonely',
          explanation: '"Lonely" significa solitario o sentirse solo.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Changes in mood',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Music', 'always', 'makes', 'me', 'feel', 'happy', '.'],
          correctSentence: 'Music always makes me feel happy.',
          translation: 'La música siempre me hace sentir feliz.',
          hint: 'Usa "makes".',
          explanation: 'Estructura "make + someone + feel + adjetivo".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e41',
    type: 'matching',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Emotional states',
      instructions: 'Une el estado con su descripción.',
      pairs: [
        { id: '1', left: 'Calm', right: 'Not nervous or excited' },
        { id: '2', left: 'Cheerful', right: 'Very happy and positive' },
        { id: '3', left: 'Nervous', right: 'Worried about something' },
        { id: '4', left: 'Miserable', right: 'Very unhappy' }
      ],
      explanation: 'Vocabulario avanzado de estados de ánimo.'
    } as any
  },
  {
    id: 'a2-u20-e42',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Empathy',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I am so ___ to hear that you got the job!',
          options: ['glad', 'sorry', 'nervous'],
          correctAnswer: 0,
          explanation: '"Glad" es sinónimo de feliz/contento.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e43',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Worried',
      instructions: 'Di "Don\'t be worried".',
      questions: [
        {
          id: 'q1',
          text: "Don't be worried",
          correctAnswer: "Don't be worried",
          explanation: 'Pronuncia "worried" como /ˈwʌrid/.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e44',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'hard',
    content: {
      title: 'Negative feelings',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'She was very ___ because she forgot her keys.',
          correctAnswer: 'annoyed',
          explanation: '"Annoyed" significa molesto o irritado.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e45',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'hard',
    content: {
      title: 'Talking about feelings',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['It', 'is', 'good', 'to', 'talk', 'about', 'your', 'feelings', '.'],
          correctSentence: 'It is good to talk about your feelings.',
          translation: 'Es bueno hablar de tus sentimientos.',
          hint: 'Empieza con "It".',
          explanation: 'Consejo general usando estructura impersonal.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mixed Practice (46-50) ---
  {
    id: 'a2-u20-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Mixed Review',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'In my ___ , this is the best solution.',
          options: ['opinion', 'think', 'believe'],
          correctAnswer: 0,
          explanation: '"In my opinion" es la frase fija.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Too practice',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I can’t hear you. The music is ___ loud.',
          correctAnswer: 'too',
          explanation: '"Too" indica exceso.'
        }
      ]
    }
  },
  {
    id: 'a2-u20-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Enough review',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Is', 'it', 'warm', 'enough', 'to', 'go', 'outside', '?'],
          correctSentence: 'Is it warm enough to go outside?',
          translation: '¿Hace suficiente calor para salir?',
          hint: 'Pregunta.',
          explanation: 'Adjetivo + enough + to + infinitivo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u20-e49',
    type: 'matching',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'medium',
    content: {
      title: 'Emotions Review',
      instructions: 'Une el sentimiento con su causa.',
      pairs: [
        { id: '1', left: 'Embarrassed', right: 'You made a mistake in public' },
        { id: '2', left: 'Relieved', right: 'A problem has finished' },
        { id: '3', left: 'Confused', right: 'You don’t understand' },
        { id: '4', left: 'Excited', right: 'Something good will happen' }
      ],
      explanation: 'Repaso de contextos emocionales.'
    } as any
  },
  {
    id: 'a2-u20-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Feelings & Opinions',
    topicName: 'Feelings & Opinions',
    difficulty: 'hard',
    content: {
      title: 'Final Challenge',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ agree that it is ___ cold to swim.',
          options: ['totally / too', 'am / enough', 'believe / too much'],
          correctAnswer: 0,
          explanation: 'Combinación de acuerdo y exceso.'
        }
      ]
    }
  }
];
