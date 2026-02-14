import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 14: Emotions
 */

export const UNIT_14_EXERCISES: Exercise[] = [
  {
    id: 'a1-u14-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      title: 'Estoy feliz',
      instructions: '¿Cómo se dice "feliz" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I am very ________ today!',
          options: ['happy', 'sad', 'angry'],
          correctAnswer: 0,
          explanation: '"Happy" es feliz o alegre. Es una de las primeras emociones que aprendemos.'
        }
      ]
    }
  },
  {
    id: 'a1-u14-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Triste',
          back: 'Sad',
          example: 'She is sad because it is raining.',
          pronunciation: '/sæd/',
          explanation: '"Sad" es el opuesto de "happy".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      title: 'Él está enfadado',
      instructions: 'Ordena las palabras para decir "Él está enfadado".',
      sentences: [
        {
          id: 's1',
          words: ['angry', 'is', 'He'],
          correctSentence: 'He is angry',
          translation: 'Él está enfadado.',
          hint: 'Empieza con "He".',
          explanation: 'En inglés usamos el verbo "to be" para expresar estados emocionales.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e4',
    type: 'matching',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      title: 'Emociones Básicas',
      instructions: 'Une cada emoción con su traducción.',
      pairs: [
        { id: 'p1', left: 'Happy', right: 'Feliz' },
        { id: 'p2', left: 'Sad', right: 'Triste' },
        { id: 'p3', left: 'Angry', right: 'Enfadado/a' },
        { id: 'p4', left: 'Tired', right: 'Cansado/a' },
        { id: 'p5', left: 'Bored', right: 'Aburrido/a' }
      ],
      explanation: 'Estas son las emociones fundamentales que usamos a diario.'
    } as any
  },
  {
    id: 'a1-u14-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Tired',
      instructions: 'Di la palabra para "cansado/a".',
      questions: [
        {
          id: 'q1',
          text: 'Tired',
          phonetic: '/ˈtaɪəd/',
          translation: 'Cansado/a',
          explanation: 'La palabra tiene dos sílabas suaves: TAI-uhd.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e6',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      title: 'Mucho sueño',
      instructions: 'Completa con la palabra para "cansado".',
      questions: [
        {
          id: 'q1',
          question: 'I want to sleep, I am ________.',
          answer: 'tired',
          explanation: 'Usamos "tired" cuando necesitamos descansar o dormir.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      title: 'Sin nada que hacer',
      instructions: '¿Cómo te sientes cuando no hay nada divertido?',
      questions: [
        {
          id: 'q1',
          question: 'The movie is not good. I am ________.',
          options: ['bored', 'excited', 'hungry'],
          correctAnswer: 0,
          explanation: '"Bored" es aburrido. No lo confundas con "boring" (que se usa para describir la cosa que aburre).'
        }
      ]
    }
  },
  {
    id: 'a1-u14-e8',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      title: '¿Estás bien?',
      instructions: 'Ordena para preguntar "¿Estás feliz?".',
      sentences: [
        {
          id: 's1',
          words: ['happy', 'you', 'Are'],
          correctSentence: 'Are you happy',
          translation: '¿Estás feliz?',
          hint: 'Empieza con "Are".',
          explanation: 'Invertimos el sujeto y el verbo para hacer preguntas: "Are you...".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Emocionado / Entusiasmado',
          back: 'Excited',
          example: 'I am excited about the party.',
          pronunciation: '/ɪkˈsaɪ.tɪd/',
          explanation: '¡Cuidado! "Excited" significa emocionado o entusiasmado, no "excitado" en el sentido físico.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e10',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      title: 'Sorpresa',
      instructions: '¿Cómo se dice "sorprendido"?',
      questions: [
        {
          id: 'q1',
          question: 'Wow! I am ________.',
          options: ['surprised', 'angry', 'sad'],
          correctAnswer: 0,
          explanation: '"Surprised" es sorprendido/a.'
        }
      ]
    }
  },
  {
    id: 'a1-u14-e11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Viaje mañana',
      instructions: 'Escribe la palabra para "emocionado".',
      questions: [
        {
          id: 'q1',
          question: 'I have a trip tomorrow, I am ________!',
          answer: 'excited',
          explanation: '"Excited" expresa una alegría intensa por algo que va a pasar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Estados de Ánimo',
      instructions: 'Une cada estado con su traducción.',
      pairs: [
        { id: 'p1', left: 'Excited', right: 'Emocionado/a' },
        { id: 'p2', left: 'Surprised', right: 'Sorprendido/a' },
        { id: 'p3', left: 'Scared', right: 'Asustado/a' },
        { id: 'p4', left: 'Nervous', right: 'Nervioso/a' },
        { id: 'p5', left: 'Calm', right: 'Tranquilo/a' }
      ],
      explanation: 'Estos términos te permiten describir sentimientos más complejos.'
    } as any
  },
  {
    id: 'a1-u14-e13',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Scared',
      instructions: 'Di la palabra para "asustado/a".',
      questions: [
        {
          id: 'q1',
          text: 'Scared',
          phonetic: '/skeəd/',
          translation: 'Asustado/a',
          explanation: 'Rima con palabras como "hair" o "care".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e14',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Tengo miedo',
      instructions: 'Ordena para decir "Yo tengo miedo".',
      sentences: [
        {
          id: 's1',
          words: ['scared', 'am', 'I'],
          correctSentence: 'I am scared',
          translation: 'Tengo miedo.',
          hint: 'Empieza con "I".',
          explanation: 'En inglés no "tenemos" miedo, sino que "estamos" asustados (I am scared).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Examen mañana',
      instructions: '¿Cómo te sientes antes de un examen importante?',
      questions: [
        {
          id: 'q1',
          question: 'I have an exam. I am ________.',
          options: ['nervous', 'bored', 'angry'],
          correctAnswer: 0,
          explanation: '"Nervous" es nervioso/a. Es normal sentirse así ante un reto.'
        }
      ]
    }
  },
  {
    id: 'a1-u14-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Tranquilo / Calma',
          back: 'Calm',
          example: 'The ocean is calm today.',
          pronunciation: '/kɑːm/',
          explanation: 'La "l" es muda en esta palabra.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e17',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Mantén la calma',
      instructions: 'Escribe la palabra para "tranquilo" o "calma".',
      questions: [
        {
          id: 'q1',
          question: 'Please stay ________.',
          answer: 'calm',
          explanation: '"Calm" describe un estado de paz y ausencia de nervios.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e18',
    type: 'matching',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Sentimientos Físicos',
      instructions: 'Une cada sensación con su traducción.',
      pairs: [
        { id: 'p1', left: 'Hungry', right: 'Hambriento/a' },
        { id: 'p2', left: 'Thirsty', right: 'Sediento/a' },
        { id: 'p3', left: 'Hot', right: 'Caluroso/a' },
        { id: 'p4', left: 'Cold', right: 'Friolero/a' },
        { id: 'p5', left: 'Sleepy', right: 'Somnoliento/a' }
      ],
      explanation: 'Estas sensaciones físicas a menudo se expresan igual que las emociones en inglés.'
    } as any
  },
  {
    id: 'a1-u14-e19',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Tengo hambre',
      instructions: '¿Cómo se dice "hambre"?',
      questions: [
        {
          id: 'q1',
          question: 'I want pizza. I am ________.',
          options: ['hungry', 'thirsty', 'angry'],
          correctAnswer: 0,
          explanation: '"Hungry" es tener hambre. ¡Cuidado con no confundirla con "angry" (enfadado)!'
        }
      ]
    }
  },
  {
    id: 'a1-u14-e20',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Thirsty',
      instructions: 'Di la palabra para "tener sed".',
      questions: [
        {
          id: 'q1',
          text: 'Thirsty',
          phonetic: '/ˈθɜː.sti/',
          translation: 'Sediento/a',
          explanation: 'La "th" suena como una "z" española.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e21',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Ella tiene sed',
      instructions: 'Ordena para decir "Ella tiene sed".',
      sentences: [
        {
          id: 's1',
          words: ['thirsty', 'is', 'She'],
          correctSentence: 'She is thirsty',
          translation: 'Ella tiene sed.',
          hint: 'Empieza con "She".',
          explanation: 'Usamos "is" para describir sensaciones físicas en tercera persona.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e22',
    type: 'flashcard',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Confundido',
          back: 'Confused',
          example: 'I am confused by this map.',
          pronunciation: '/kənˈfjuːzd/',
          explanation: '"Confused" se usa cuando algo no está claro.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'hard',
    content: {
      title: 'No entiendo',
      instructions: 'Escribe la palabra para "confundido".',
      questions: [
        {
          id: 'q1',
          question: 'The lesson is difficult. I am ________.',
          answer: 'confused',
          explanation: '"Confused" viene de "confusion".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e24',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      title: 'Muy feliz',
      instructions: '¿Cuál es un sinónimo más fuerte de "happy"?',
      questions: [
        {
          id: 'q1',
          question: 'I am ________ to see you!',
          options: ['glad', 'sad', 'bad'],
          correctAnswer: 0,
          explanation: '"Glad" es una forma común de decir que estás contento por algo específico.'
        }
      ]
    }
  },
  {
    id: 'a1-u14-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'hard',
    content: {
      title: 'Opuestos Emocionales',
      instructions: 'Une cada emoción con su opuesto.',
      pairs: [
        { id: 'p1', left: 'Happy', right: 'Sad' },
        { id: 'p2', left: 'Excited', right: 'Bored' },
        { id: 'p3', left: 'Calm', right: 'Nervous' },
        { id: 'p4', left: 'Interested', right: 'Indifferent' },
        { id: 'p5', left: 'Proud', right: 'Ashamed' }
      ],
      explanation: 'Aprender opuestos te ayuda a organizar el vocabulario en tu mente.'
    } as any
  },
  {
    id: 'a1-u14-e26',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Proud',
      instructions: 'Di la palabra para "orgulloso/a".',
      questions: [
        {
          id: 'q1',
          text: 'Proud',
          phonetic: '/praʊd/',
          translation: 'Orgulloso/a',
          explanation: 'La "ou" suena como "au".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e27',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'hard',
    content: {
      title: 'Estoy orgulloso de ti',
      instructions: 'Ordena para decir "Estoy orgulloso de ti".',
      sentences: [
        {
          id: 's1',
          words: ['you', 'of', 'proud', 'am', 'I'],
          correctSentence: 'I am proud of you',
          translation: 'Estoy orgulloso de ti.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos la preposición "of" después de "proud".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e28',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Vergüenza',
      instructions: '¿Cómo se dice "tímido"?',
      questions: [
        {
          id: 'q1',
          question: 'She doesn\'t talk much. She is ________.',
          options: ['shy', 'loud', 'brave'],
          correctAnswer: 0,
          explanation: '"Shy" es tímido o vergonzoso.'
        }
      ]
    }
  },
  {
    id: 'a1-u14-e29',
    type: 'flashcard',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Valiente',
          back: 'Brave',
          example: 'The firefighter is very brave.',
          pronunciation: '/breɪv/',
          explanation: '"Brave" describe a alguien que no tiene miedo o lo enfrenta.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e30',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'hard',
    content: {
      title: 'Muy valiente',
      instructions: 'Escribe la palabra para "valiente".',
      questions: [
        {
          id: 'q1',
          question: 'He is a ________ soldier.',
          answer: 'brave',
          explanation: '"Brave" rima con "save".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Sentirse mal',
      instructions: '¿Cómo se dice "enfermo"?',
      questions: [
        {
          id: 'q1',
          question: 'I have a fever. I feel ________.',
          options: ['sick', 'great', 'happy'],
          correctAnswer: 0,
          explanation: '"Sick" o "Ill" significa estar enfermo o sentirse mal.'
        }
      ]
    }
  },
  {
    id: 'a1-u14-e32',
    type: 'matching',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Personalidad y Humor',
      instructions: 'Une cada adjetivo con su traducción.',
      pairs: [
        { id: 'p1', left: 'Kind', right: 'Amable' },
        { id: 'p2', left: 'Funny', right: 'Divertido/a (gracioso)' },
        { id: 'p3', left: 'Serious', right: 'Serio/a' },
        { id: 'p4', left: 'Quiet', right: 'Tranquilo/a (silencioso)' },
        { id: 'p5', left: 'Smart', right: 'Inteligente' }
      ],
      explanation: 'Estos adjetivos describen rasgos de carácter estables.'
    } as any
  },
  {
    id: 'a1-u14-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Funny',
      instructions: 'Di la palabra para "gracioso".',
      questions: [
        {
          id: 'q1',
          text: 'Funny',
          phonetic: '/ˈfʌn.i/',
          translation: 'Gracioso',
          explanation: 'La "u" suena como una "a" corta.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e34',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Él es muy amable',
      instructions: 'Ordena para decir "Él es muy amable".',
      sentences: [
        {
          id: 's1',
          words: ['kind', 'very', 'is', 'He'],
          correctSentence: 'He is very kind',
          translation: 'Él es muy amable.',
          hint: 'Empieza con "He".',
          explanation: 'Usamos "very" para intensificar el adjetivo "kind".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e35',
    type: 'flashcard',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Afortunado',
          back: 'Lucky',
          example: 'I am lucky to be here.',
          pronunciation: '/ˈlʌk.i/',
          explanation: '"Lucky" viene de "luck" (suerte).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Tener suerte',
      instructions: '¿Cómo se dice que tienes suerte?',
      questions: [
        {
          id: 'q1',
          question: 'I won the lottery! I am ________.',
          options: ['lucky', 'unlucky', 'sad'],
          correctAnswer: 0,
          explanation: '"Lucky" es tener buena suerte.'
        }
      ]
    }
  },
  {
    id: 'a1-u14-e37',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Persona inteligente',
      instructions: 'Escribe la palabra para "inteligente".',
      questions: [
        {
          id: 'q1',
          question: 'She is a ________ student.',
          answer: 'smart',
          explanation: '"Smart" o "Intelligent" significan inteligente. "Smart" es más común en EE.UU.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e38',
    type: 'matching',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Expresiones de Humor',
      instructions: 'Une cada expresión con su significado.',
      pairs: [
        { id: 'p1', left: 'In a good mood', right: 'De buen humor' },
        { id: 'p2', left: 'In a bad mood', right: 'De mal humor' },
        { id: 'p3', left: 'Cheer up!', right: '¡Anímate!' },
        { id: 'p4', left: 'Calm down', right: 'Cálmate' },
        { id: 'p5', left: 'Don\'t worry', right: 'No te preocupes' }
      ],
      explanation: 'Estas frases son muy útiles en conversaciones diarias sobre sentimientos.'
    } as any
  },
  {
    id: 'a1-u14-e39',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Feel',
      instructions: 'Di la palabra para "sentir".',
      questions: [
        {
          id: 'q1',
          text: 'Feel',
          phonetic: '/fiːl/',
          translation: 'Sentir',
          explanation: 'La doble "e" suena como una "i" larga.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e40',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'hard',
    content: {
      title: '¿Cómo te sientes?',
      instructions: 'Ordena las palabras para preguntar "¿Cómo te sientes?".',
      sentences: [
        {
          id: 's1',
          words: ['feel', 'you', 'do', 'How'],
          correctSentence: 'How do you feel',
          translation: '¿Cómo te sientes?',
          hint: 'Empieza con "How".',
          explanation: 'Usamos "How do you..." para preguntar sobre estados o procesos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e41',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'No te preocupes',
      instructions: '¿Qué significa "Don\'t worry"?',
      questions: [
        {
          id: 'q1',
          question: "Don't worry.",
          options: ['No te preocupes', 'No tengas miedo', 'No estés triste'],
          correctAnswer: 0,
          explanation: 'Es una frase muy común para tranquilizar a alguien.'
        }
      ]
    }
  },
  {
    id: 'a1-u14-e42',
    type: 'flashcard',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Solitario',
          back: 'Lonely',
          example: 'I feel lonely without my friends.',
          pronunciation: '/ˈləʊn.li/',
          explanation: '"Lonely" expresa la tristeza de estar solo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e43',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'hard',
    content: {
      title: 'Sentirse solo',
      instructions: 'Escribe la palabra para "solitario".',
      questions: [
        {
          id: 'q1',
          question: 'The house is empty. I feel ________.',
          answer: 'lonely',
          explanation: '"Lonely" no es lo mismo que "alone" (estar solo sin matiz emocional).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Relajado',
      instructions: '¿Cómo se dice "relajado"?',
      questions: [
        {
          id: 'q1',
          question: 'I am on vacation. I am ________.',
          options: ['relaxed', 'stressed', 'busy'],
          correctAnswer: 0,
          explanation: '"Relaxed" es relajado/a.'
        }
      ]
    }
  },
  {
    id: 'a1-u14-e45',
    type: 'matching',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Más Sentimientos',
      instructions: 'Une cada palabra con su significado.',
      pairs: [
        { id: 'p1', left: 'Relaxed', right: 'Relajado/a' },
        { id: 'p2', left: 'Stressed', right: 'Estresado/a' },
        { id: 'p3', left: 'Busy', right: 'Ocupado/a' },
        { id: 'p4', left: 'Lonely', right: 'Solitario/a' },
        { id: 'p5', left: 'Safe', right: 'Seguro/a (fuera de peligro)' }
      ],
      explanation: 'Estos adjetivos te ayudarán a ser más específico sobre cómo te sientes.'
    } as any
  },
  {
    id: 'a1-u14-e46',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Stressed',
      instructions: 'Di la palabra para "estresado/a".',
      questions: [
        {
          id: 'q1',
          text: 'Stressed',
          phonetic: '/strest/',
          translation: 'Estresado/a',
          explanation: 'Termina en un sonido de "t" corto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'hard',
    content: {
      title: 'Estoy muy ocupado',
      instructions: 'Ordena para decir "Estoy muy ocupado ahora".',
      sentences: [
        {
          id: 's1',
          words: ['now', 'busy', 'very', 'am', 'I'],
          correctSentence: 'I am very busy now',
          translation: 'Estoy muy ocupado ahora.',
          hint: 'Empieza con "I".',
          explanation: '"Busy" describe tener muchas cosas que hacer.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'easy',
    content: {
      title: 'Bien y Mal',
      instructions: '¿Cómo se dice "mal"?',
      questions: [
        {
          id: 'q1',
          question: 'I feel ________.',
          options: ['bad', 'good', 'well'],
          correctAnswer: 0,
          explanation: '"Bad" es mal o malo.'
        }
      ]
    }
  },
  {
    id: 'a1-u14-e49',
    type: 'flashcard',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Seguro (fuera de peligro)',
          back: 'Safe',
          example: 'I feel safe at home.',
          pronunciation: '/seɪf/',
          explanation: '"Safe" indica ausencia de peligro o riesgo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u14-e50',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Emotions',
    topicName: 'How I Feel',
    difficulty: 'hard',
    content: {
      title: 'Siéntete seguro',
      instructions: 'Escribe la palabra para "seguro" (sin peligro).',
      questions: [
        {
          id: 'q1',
          question: 'You are ________ here.',
          answer: 'safe',
          explanation: '"Safe" rima con "face".'
        }
      ]
    } as any
  }
];
