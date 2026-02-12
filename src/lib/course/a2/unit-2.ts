import { Exercise } from '@/lib/exercise-generator';

export const UNIT_2_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Family Members (1-10) ---
  {
    id: 'a2-u2-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Parientes / Familiares',
          back: 'Relatives',
          example: 'I have many relatives in Italy.',
          pronunciation: '/ˈrelətɪvz/',
          explanation: '"Relatives" incluye a toda la familia, no solo a los padres.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      title: 'Extended Family',
      instructions: 'Une el miembro de la familia con su traducción.',
      pairs: [
        { id: '1', left: 'Aunt', right: 'Tía' },
        { id: '2', left: 'Uncle', right: 'Tío' },
        { id: '3', left: 'Cousin', right: 'Primo/a' },
        { id: '4', left: 'Nephew', right: 'Sobrino' },
        { id: '5', left: 'Niece', right: 'Sobrina' }
      ],
      explanation: 'Miembros de la familia extendida.'
    } as any
  },
  {
    id: 'a2-u2-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      title: 'Family Relationships',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: "Your mother's sister is your ___.",
          options: ['Aunt', 'Uncle', 'Cousin'],
          correctAnswer: 0,
          explanation: 'La hermana de tu madre es tu tía (aunt).'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      title: 'Grandparents',
      instructions: 'Completa con la palabra adecuada.',
      questions: [
        {
          id: 'q1',
          text: "My father's father is my ___.",
          correctAnswer: 'grandfather',
          explanation: 'El padre de tu padre es tu abuelo (grandfather).'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      title: 'Describing family size',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['have', 'a', 'I', 'big', 'family', '.'],
          correctSentence: 'I have a big family.',
          translation: 'Tengo una familia grande.',
          hint: 'Empieza con el sujeto "I".',
          explanation: 'La estructura es Sujeto + Verbo + Adjetivo + Sustantivo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hermanos (en general)',
          back: 'Siblings',
          example: 'How many siblings do you have?',
          pronunciation: '/ˈsɪblɪŋz/',
          explanation: '"Siblings" se usa para referirse a hermanos y hermanas sin distinguir género.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Siblings',
      instructions: 'Elige el término correcto.',
      questions: [
        {
          id: 'q1',
          question: 'I have two brothers and one sister. I have three ___.',
          options: ['relatives', 'siblings', 'parents'],
          correctAnswer: 1,
          explanation: '"Siblings" engloba a hermanos y hermanas.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Cousin',
      instructions: 'Di "Cousin".',
      questions: [
        {
          id: 'q1',
          text: 'Cousin',
          correctAnswer: 'Cousin',
          explanation: 'La "ou" suena como una "a" corta: /ˈkʌzən/.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e9',
    type: 'matching',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      title: 'In-laws',
      instructions: 'Une los términos de la familia política.',
      pairs: [
        { id: '1', left: 'Mother-in-law', right: 'Suegra' },
        { id: '2', left: 'Father-in-law', right: 'Suegro' },
        { id: '3', left: 'Brother-in-law', right: 'Cuñado' },
        { id: '4', left: 'Sister-in-law', right: 'Cuñada' }
      ],
      explanation: 'La terminación "-in-law" indica familia política.'
    } as any
  },
  {
    id: 'a2-u2-e10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Politics of family',
      instructions: 'Completa con la palabra política correcta.',
      questions: [
        {
          id: 'q1',
          text: "My husband's mother is my ___.",
          correctAnswer: 'mother-in-law',
          explanation: 'La madre de tu esposo es tu suegra (mother-in-law).'
        }
      ]
    }
  },

  // --- SUB-TOPIC 2: Possessive Adjectives & 's (11-20) ---
  {
    id: 'a2-u2-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Su (de él)',
          back: 'His',
          example: 'This is his brother.',
          pronunciation: '/hɪz/',
          explanation: 'Adjetivo posesivo para hombres.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e12',
    type: 'flashcard',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Su (de ella)',
          back: 'Her',
          example: 'This is her sister.',
          pronunciation: '/hɜː/',
          explanation: 'Adjetivo posesivo para mujeres.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      title: 'His vs Her',
      instructions: 'Elige el posesivo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'Mary is here. That is ___ bag.',
          options: ['his', 'her', 'their'],
          correctAnswer: 1,
          explanation: 'Como Mary es mujer, usamos "her".'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Possessive \'s',
      instructions: 'Escribe la forma posesiva correcta.',
      questions: [
        {
          id: 'q1',
          text: "The ___ car is red. (Peter)",
          correctAnswer: "Peter's",
          explanation: "Usamos 's para indicar que el coche pertenece a Peter."
        }
      ]
    }
  },
  {
    id: 'a2-u2-e15',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Building possessives',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['Is', 'this', 'your', "brother's", 'camera', '?'],
          correctSentence: "Is this your brother's camera?",
          translation: '¿Es esta la cámara de tu hermano?',
          hint: 'Empieza con el verbo "Is".',
          explanation: 'En preguntas con "to be", el verbo encabeza la oración.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e16',
    type: 'flashcard',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Nuestro/a',
          back: 'Our',
          example: 'This is our house.',
          pronunciation: '/ˈaʊə/',
          explanation: 'Adjetivo posesivo para "nosotros" (we).'
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e17',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Plural possessives',
      instructions: 'Elige la forma plural correcta.',
      questions: [
        {
          id: 'q1',
          question: 'This is the ___ room. (The two boys share it)',
          options: ["boys'", "boy's", "boys's"],
          correctAnswer: 0,
          explanation: 'Cuando el sustantivo plural termina en "s", solo añadimos el apóstrofe al final.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e18',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Possessives',
      instructions: 'Di "My sister\'s friend".',
      questions: [
        {
          id: 'q1',
          text: "My sister's friend",
          correctAnswer: "My sister's friend",
          explanation: 'La \'s suena como una "s" suave o una "z" dependiendo del sonido anterior.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e19',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Mixed Possessives',
      instructions: 'Completa con el adjetivo posesivo adecuado.',
      questions: [
        {
          id: 'q1',
          text: 'We love ___ parents very much.',
          correctAnswer: 'our',
          explanation: 'Para "we", el posesivo es "our".'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'hard',
    content: {
      title: 'Complex Possessive Sentence',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['Whose', 'is', 'that', 'blue', 'car', '?'],
          correctSentence: 'Whose is that blue car?',
          translation: '¿De quién es ese coche azul?',
          hint: 'Empieza con "Whose".',
          explanation: 'Usamos "Whose" para preguntar por la posesión.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Friends & Relationships (21-30) ---
  {
    id: 'a2-u2-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Mejor amigo/a',
          back: 'Best friend',
          example: 'She is my best friend since childhood.',
          pronunciation: '/best frend/',
          explanation: 'La persona más cercana en tu círculo social.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e22',
    type: 'matching',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      title: 'Relationships',
      instructions: 'Une la relación con su traducción.',
      pairs: [
        { id: '1', left: 'Colleague', right: 'Colega / Compañero de trabajo' },
        { id: '2', left: 'Classmate', right: 'Compañero de clase' },
        { id: '3', left: 'Neighbor', right: 'Vecino/a' },
        { id: '4', left: 'Partner', right: 'Pareja / Socio' }
      ],
      explanation: 'Diferentes tipos de relaciones sociales.'
    } as any
  },
  {
    id: 'a2-u2-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Colleagues vs Friends',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'People you work with are your ___.',
          options: ['classmates', 'colleagues', 'neighbors'],
          correctAnswer: 1,
          explanation: 'Los compañeros de trabajo se llaman "colleagues".'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      title: 'Neighbors',
      instructions: 'Completa con la palabra correcta.',
      questions: [
        {
          id: 'q1',
          text: 'The person who lives next door is my ___.',
          correctAnswer: 'neighbor',
          explanation: 'La persona que vive al lado es tu vecino (neighbor).'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Describing a relationship',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'are', 'colleagues', 'at', 'the', 'office', '.'],
          correctSentence: 'We are colleagues at the office.',
          translation: 'Somos colegas en la oficina.',
          hint: 'Empieza con "We".',
          explanation: 'Estructura básica para definir una relación laboral.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e26',
    type: 'flashcard',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Conocer / Encontrarse',
          back: 'To meet',
          example: 'I want to meet your new friends.',
          pronunciation: '/tuː miːt/',
          explanation: 'Verbo usado para conocer a alguien por primera vez o quedar con alguien.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Meeting people',
      instructions: 'Elige el verbo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'Where did you ___ your boyfriend?',
          options: ['meet', 'know', 'see'],
          correctAnswer: 0,
          explanation: 'Usamos "meet" para el momento en que conoces a alguien por primera vez.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e28',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Colleague',
      instructions: 'Di "Colleague".',
      questions: [
        {
          id: 'q1',
          text: 'Colleague',
          correctAnswer: 'Colleague',
          explanation: 'Se pronuncia /ˈkɒliːɡ/, la "ue" final es muda.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e29',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Relationships: Partner',
      instructions: 'Completa la oración.',
      questions: [
        {
          id: 'q1',
          text: 'She lives with her ___ in a small flat.',
          correctAnswer: 'partner',
          explanation: '"Partner" es un término neutro para referirse a la pareja.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Friends since...',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['They', 'have', 'been', 'friends', 'for', 'years', '.'],
          correctSentence: 'They have been friends for years.',
          translation: 'Ellos han sido amigos por años.',
          hint: 'Empieza con "They".',
          explanation: 'Usamos el presente perfecto para hablar de duraciones de amistad.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Describing People (31-40) ---
  {
    id: 'a2-u2-e31',
    type: 'flashcard',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Parecerse a',
          back: 'To look like',
          example: 'You look like your father.',
          pronunciation: '/tʊ lʊk laɪk/',
          explanation: 'Frase verbal para comparar la apariencia física.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e32',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      title: 'Appearance',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'What does she ___?',
          options: ['look like', 'look', 'likes'],
          correctAnswer: 0,
          explanation: 'Preguntamos por la apariencia física con "What does [person] look like?".'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e33',
    type: 'matching',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Opposite Adjectives',
      instructions: 'Une los adjetivos opuestos.',
      pairs: [
        { id: '1', left: 'Generous', right: 'Mean / Stingy' },
        { id: '2', left: 'Hard-working', right: 'Lazy' },
        { id: '3', left: 'Clever / Smart', right: 'Stupid / Silly' },
        { id: '4', left: 'Funny', right: 'Serious' }
      ],
      explanation: 'Adjetivos de personalidad y sus opuestos.'
    } as any
  },
  {
    id: 'a2-u2-e34',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Personality description',
      instructions: 'Completa con el adjetivo adecuado.',
      questions: [
        {
          id: 'q1',
          text: 'My brother never cleans his room. He is very ___.',
          correctAnswer: 'lazy',
          explanation: 'Alguien que no quiere trabajar o limpiar es perezoso (lazy).'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e35',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Looks like sentence',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['Does', 'he', 'look', 'like', 'his', 'uncle', '?'],
          correctSentence: 'Does he look like his uncle?',
          translation: '¿Se parece a su tío?',
          hint: 'Es una pregunta en presente simple.',
          explanation: 'Usamos "Does" para preguntas en tercera persona singular.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e36',
    type: 'flashcard',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Llevarse bien',
          back: 'To get on well with',
          example: 'I get on well with my sister.',
          pronunciation: '/tʊ ɡet ɒn wel wɪð/',
          explanation: 'Expresión para indicar una buena relación.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Relationships: Phrasal verbs',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Do you ___ well with your parents?',
          options: ['get on', 'go on', 'take on'],
          correctAnswer: 0,
          explanation: '"Get on well" significa llevarse bien.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Description',
      instructions: 'Di "She is very hard-working".',
      questions: [
        {
          id: 'q1',
          text: 'She is very hard-working',
          correctAnswer: 'She is very hard-working',
          explanation: 'Recuerda el guion entre "hard" y "working".'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'hard',
    content: {
      title: 'Personality: Clever',
      instructions: 'Completa con el sinónimo.',
      questions: [
        {
          id: 'q1',
          text: 'She is very ___. She always gets 10 in her exams.',
          correctAnswer: 'clever',
          explanation: '"Clever" o "smart" describen a alguien inteligente.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'hard',
    content: {
      title: 'Complex Description',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['My', 'cousin', 'is', 'generous', 'but', 'a', 'bit', 'shy', '.'],
          correctSentence: 'My cousin is generous but a bit shy.',
          translation: 'Mi primo es generoso pero un poco tímido.',
          hint: 'Usa "but" para contrastar.',
          explanation: '"A bit" significa "un poco".',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u2-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Review: Whose',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ book is this? It is mine.',
          options: ['Who', 'Whose', 'Who is'],
          correctAnswer: 1,
          explanation: '"Whose" pregunta por la posesión de un objeto.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      title: 'Review: Family',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The brother of my mother is my ___.',
          correctAnswer: 'uncle',
          explanation: 'El hermano de tu madre es tu tío (uncle).'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Review: Posessives',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['That', 'is', 'my', "parents'", 'house', '.'],
          correctSentence: "That is my parents' house.",
          translation: 'Esa es la casa de mis padres.',
          hint: 'Plural posesivo.',
          explanation: 'Como "parents" termina en "s", solo ponemos el apóstrofe.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Relatives',
      instructions: 'Di "I have many relatives".',
      questions: [
        {
          id: 'q1',
          text: 'I have many relatives',
          correctAnswer: 'I have many relatives',
          explanation: 'Pronuncia la "v" de "relatives" de forma vibrante.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e45',
    type: 'matching',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'hard',
    content: {
      title: 'Personality Mix',
      instructions: 'Une cada descripción con el adjetivo.',
      pairs: [
        { id: '1', left: 'Someone who likes giving', right: 'Generous' },
        { id: '2', left: 'Someone who works a lot', right: 'Hard-working' },
        { id: '3', left: 'Someone who is smart', right: 'Clever' },
        { id: '4', left: 'Someone who is not nice', right: 'Mean' }
      ],
      explanation: 'Definiciones de adjetivos de personalidad.'
    } as any
  },
  {
    id: 'a2-u2-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'medium',
    content: {
      title: 'Review: Meet',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'Nice to ___ you.',
          options: ['know', 'meet', 'see'],
          correctAnswer: 1,
          explanation: 'Expresión estándar al ser presentado a alguien.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'hard',
    content: {
      title: 'Review: Get on',
      instructions: 'Completa el phrasal verb.',
      questions: [
        {
          id: 'q1',
          text: 'I get ___ well with my colleagues.',
          correctAnswer: 'on',
          explanation: '"Get on well" es llevarse bien.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'hard',
    content: {
      title: 'Whose review',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Whose', 'shoes', 'are', 'these', '?'],
          correctSentence: 'Whose shoes are these?',
          translation: '¿De quién son estos zapatos?',
          hint: 'Zapatos es plural.',
          explanation: 'En plural usamos "Whose [items] are these?".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u2-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Sibling',
      instructions: 'Di "How many siblings do you have?".',
      questions: [
        {
          id: 'q1',
          text: 'How many siblings do you have?',
          correctAnswer: 'How many siblings do you have?',
          explanation: 'Recuerda que "siblings" significa hermanos y hermanas.'
        }
      ]
    }
  },
  {
    id: 'a2-u2-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Family & Friends',
    topicName: 'Family & Friends',
    difficulty: 'easy',
    content: {
      title: 'Final Review',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: 'A person who is your partner in marriage.',
          options: ['Sibling', 'Spouse', 'Cousin'],
          correctAnswer: 1,
          explanation: '"Spouse" es cónyuge (esposo o esposa).'
        }
      ]
    }
  }
];
