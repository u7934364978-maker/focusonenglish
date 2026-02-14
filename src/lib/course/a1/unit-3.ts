import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 3: Family
 */

export const UNIT_3_EXERCISES: Exercise[] = [
  {
    id: 'a1-u3-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Mi familia',
      instructions: '¿Cómo se dice "padre" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'He is my ________.',
          options: ['father', 'mother', 'sister'],
          correctAnswer: 0,
          explanation: '"Father" significa padre.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Madre',
          back: 'Mother',
          example: 'My mother is here.',
          pronunciation: '/ˈmʌðər/',
          explanation: '"Mother" es el término formal para madre. Coloquialmente se usa "mom".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Possessives',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Mi madre',
      instructions: 'Ordena las palabras para traducir "Mi madre".',
      sentences: [
        {
          id: 's1',
          words: ['mother', 'My'],
          correctSentence: 'My mother',
          translation: 'Mi madre.',
          hint: 'Usa el posesivo "My".',
          explanation: '"My" es el adjetivo posesivo para la primera persona (mío/mi).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Hermana',
      instructions: '¿Cómo se dice "hermana" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'She is my ________.',
          options: ['brother', 'sister', 'father'],
          correctAnswer: 1,
          explanation: '"Sister" es hermana.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Father',
      instructions: 'Di la palabra para "padre".',
      questions: [
        {
          id: 'q1',
          text: 'Father',
          correctAnswer: 'Father',
          explanation: 'La "th" suena como una "d" muy suave con aire entre los dientes.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e6',
    type: 'matching',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Vocabulario familiar',
      instructions: 'Une el español con el inglés.',
      pairs: [
        { id: '1', left: 'Padre', right: 'Father' },
        { id: '2', left: 'Madre', right: 'Mother' },
        { id: '3', left: 'Hermano', right: 'Brother' },
        { id: '4', left: 'Hermana', right: 'Sister' },
        { id: '5', left: 'Familia', right: 'Family' }
      ],
      explanation: 'Estos son los miembros básicos de la familia nuclear.'
    } as any
  },
  {
    id: 'a1-u3-e7',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Possessives',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Tu padre',
      instructions: 'Escribe la palabra para "Tu" (de posesión).',
      questions: [
        {
          id: 'q1',
          text: '___ father.',
          correctAnswer: 'Your',
          explanation: '"Your" es el adjetivo posesivo para tú/usted.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Hermano',
      instructions: '¿Qué palabra significa "hermano"?',
      questions: [
        {
          id: 'q1',
          question: 'He is my ________.',
          options: ['sister', 'brother', 'mother'],
          correctAnswer: 1,
          explanation: '"Brother" es hermano.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hijo',
          back: 'Son',
          example: 'He is my son.',
          pronunciation: '/sʌn/',
          explanation: '"Son" se pronuncia exactamente igual que "sun" (sol).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e10',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Mi hermano',
      instructions: 'Ordena para traducir "Mi hermano".',
      sentences: [
        {
          id: 's1',
          words: ['brother', 'My'],
          correctSentence: 'My brother',
          translation: 'Mi hermano.',
          hint: 'Usa "My".',
          explanation: 'La estructura Posesivo + Sustantivo es igual que en español.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e11',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Hija',
      instructions: '¿Cómo se dice "hija"?',
      questions: [
        {
          id: 'q1',
          question: 'She is my ________.',
          options: ['daughter', 'son', 'brother'],
          correctAnswer: 0,
          explanation: '"Daughter" es hija.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e12',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Mother',
      instructions: 'Di la palabra para "madre".',
      questions: [
        {
          id: 'q1',
          text: 'Mother',
          correctAnswer: 'Mother',
          explanation: 'La "o" suena como una "a" corta y relajada.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e13',
    type: 'matching',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Hermanos e hijos',
      instructions: 'Une las parejas de palabras.',
      pairs: [
        { id: '1', left: 'Hijo', right: 'Son' },
        { id: '2', left: 'Hija', right: 'Daughter' },
        { id: '3', left: 'Hermano', right: 'Brother' },
        { id: '4', left: 'Hermana', right: 'Sister' },
        { id: '5', left: 'Niños', right: 'Children' }
      ],
      explanation: 'Saber distinguir el género en los miembros de la familia es fundamental.'
    } as any
  },
  {
    id: 'a1-u3-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Mi hermana',
      instructions: 'Escribe la palabra para "hermana".',
      questions: [
        {
          id: 'q1',
          text: 'My ___.',
          correctAnswer: 'sister',
          explanation: '"Sister" es la traducción de hermana.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Abuelo',
      instructions: '¿Cómo se dice "abuelo"?',
      questions: [
        {
          id: 'q1',
          question: 'He is my ________.',
          options: ['grandfather', 'grandmother', 'father'],
          correctAnswer: 0,
          explanation: '"Grandfather" es abuelo. Usamos el prefijo "grand-" para los abuelos.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Abuela',
          back: 'Grandmother',
          example: 'My grandmother is nice.',
          pronunciation: '/ˈɡrænmʌðər/',
          explanation: 'Coloquialmente se suele llamar "Grandma".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e17',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Tu familia',
      instructions: 'Ordena para traducir "Tu familia".',
      sentences: [
        {
          id: 's1',
          words: ['family', 'Your'],
          correctSentence: 'Your family',
          translation: 'Tu familia.',
          hint: 'Usa "Your".',
          explanation: '"Your" se usa tanto para singular como para plural (tu familia / vuestra familia).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e18',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Abuela',
      instructions: '¿Cuál es la traducción de "Abuela"?',
      questions: [
        {
          id: 'q1',
          question: 'She is my ________.',
          options: ['grandfather', 'grandmother', 'mother'],
          correctAnswer: 1,
          explanation: '"Grandmother" es abuela.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e19',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Sister',
      instructions: 'Di la palabra para "hermana".',
      questions: [
        {
          id: 'q1',
          text: 'Sister',
          correctAnswer: 'Sister',
          explanation: 'Recuerda que la "r" final en inglés británico apenas se oye, mientras que en americano es más marcada.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e20',
    type: 'matching',
    level: 'A1',
    topic: 'Possessives',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Posesivos básicos',
      instructions: 'Une el pronombre o posesivo con su significado.',
      pairs: [
        { id: '1', left: 'I', right: 'Yo' },
        { id: '2', left: 'You', right: 'Tú' },
        { id: '3', left: 'My', right: 'Mi' },
        { id: '4', left: 'Your', right: 'Tu' },
        { id: '5', left: 'We', right: 'Nosotros' }
      ],
      explanation: 'Diferenciar entre el sujeto (I/You) y el poseedor (My/Your) es clave.'
    } as any
  },
  {
    id: 'a1-u3-e21',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Mi abuelo',
      instructions: 'Escribe la palabra para "abuelo".',
      questions: [
        {
          id: 'q1',
          text: 'My ___.',
          correctAnswer: 'grandfather',
          explanation: '"Grandfather" es abuelo.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Tío',
      instructions: '¿Cómo se dice "tío"?',
      questions: [
        {
          id: 'q1',
          question: 'He is my ________.',
          options: ['aunt', 'uncle', 'son'],
          correctAnswer: 1,
          explanation: '"Uncle" es tío.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e23',
    type: 'flashcard',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Tía',
          back: 'Aunt',
          example: 'My aunt is from Spain.',
          pronunciation: '/ɑːnt/',
          explanation: 'En algunos dialectos se pronuncia como "ant" (hormiga).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e24',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Mi tía',
      instructions: 'Ordena para traducir "Mi tía".',
      sentences: [
        {
          id: 's1',
          words: ['aunt', 'My'],
          correctSentence: 'My aunt',
          translation: 'Mi tía.',
          hint: 'Usa "My".',
          explanation: 'Mantenemos la misma estructura que para otros familiares.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e25',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Tía',
      instructions: '¿Cómo se dice "tía"?',
      questions: [
        {
          id: 'q1',
          question: 'She is my ________.',
          options: ['uncle', 'aunt', 'sister'],
          correctAnswer: 1,
          explanation: '"Aunt" es tía.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e26',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Brother',
      instructions: 'Di la palabra para "hermano".',
      questions: [
        {
          id: 'q1',
          text: 'Brother',
          correctAnswer: 'Brother',
          explanation: 'La "o" suena como una "a" corta y la "th" es suave.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e27',
    type: 'matching',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Tíos y abuelos',
      instructions: 'Une las parejas de familiares.',
      pairs: [
        { id: '1', left: 'Tío', right: 'Uncle' },
        { id: '2', left: 'Tía', right: 'Aunt' },
        { id: '3', left: 'Abuelo', right: 'Grandfather' },
        { id: '4', left: 'Abuela', right: 'Grandmother' },
        { id: '5', left: 'Primo', right: 'Cousin' }
      ],
      explanation: 'Saber nombrar a la familia extendida es muy útil.'
    } as any
  },
  {
    id: 'a1-u3-e28',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Tu tía',
      instructions: 'Escribe la palabra para "tía".',
      questions: [
        {
          id: 'q1',
          text: 'Your ___.',
          correctAnswer: 'aunt',
          explanation: '"Aunt" es tía.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e29',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Primo/a',
      instructions: '¿Cómo se dice "primo" o "prima"?',
      questions: [
        {
          id: 'q1',
          question: 'They are my ________.',
          options: ['cousins', 'brothers', 'uncles'],
          correctAnswer: 0,
          explanation: '"Cousin" es una palabra neutra, sirve para ambos géneros.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e30',
    type: 'flashcard',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Esposo',
          back: 'Husband',
          example: 'My husband is here.',
          pronunciation: '/ˈhʌzbənd/',
          explanation: 'La "h" es aspirada, no muda.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e31',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Mi esposo',
      instructions: 'Ordena para traducir "Mi esposo".',
      sentences: [
        {
          id: 's1',
          words: ['husband', 'My'],
          correctSentence: 'My husband',
          translation: 'Mi esposo.',
          hint: 'Usa "My".',
          explanation: 'Misma estructura: Posesivo + Sustantivo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e32',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Esposa',
      instructions: '¿Cómo se dice "esposa"?',
      questions: [
        {
          id: 'q1',
          question: 'She is my ________.',
          options: ['wife', 'husband', 'aunt'],
          correctAnswer: 0,
          explanation: '"Wife" es esposa.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Husband',
      instructions: 'Di la palabra para "esposo".',
      questions: [
        {
          id: 'q1',
          text: 'Husband',
          correctAnswer: 'Husband',
          explanation: 'Cuidado con la "u", suena como una "a" corta y seca.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Parejas familiares',
      instructions: 'Une las parejas de palabras.',
      pairs: [
        { id: '1', left: 'Esposa', right: 'Wife' },
        { id: '2', left: 'Esposo', right: 'Husband' },
        { id: '3', left: 'Primo', right: 'Cousin' },
        { id: '4', left: 'Padres', right: 'Parents' },
        { id: '5', left: 'Hijos', right: 'Children' }
      ],
      explanation: '"Parents" y "Children" son términos plurales muy comunes.'
    } as any
  },
  {
    id: 'a1-u3-e35',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Tu esposa',
      instructions: 'Escribe la palabra para "esposa".',
      questions: [
        {
          id: 'q1',
          text: 'Your ___.',
          correctAnswer: 'wife',
          explanation: '"Wife" es esposa.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Padres',
      instructions: '¿Cómo se dice "padres" (en plural)?',
      questions: [
        {
          id: 'q1',
          question: 'They are my ________.',
          options: ['parents', 'fathers', 'mothers'],
          correctAnswer: 0,
          explanation: '"Parents" es el término genérico para padre y madre. "Fathers" significaría varios padres.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Possessives',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Su (de él)',
          back: 'His',
          example: 'His father is tall.',
          pronunciation: '/hɪz/',
          explanation: '"His" se usa exclusivamente cuando el poseedor es un hombre.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Possessives',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Su madre (de ella)',
      instructions: 'Ordena para traducir "Su madre" (de ella).',
      sentences: [
        {
          id: 's1',
          words: ['mother', 'Her'],
          correctSentence: 'Her mother',
          translation: 'Su madre.',
          hint: 'Usa "Her" para ella.',
          explanation: '"Her" se usa exclusivamente cuando la poseedora es una mujer.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e39',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Possessives',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Su hermano (de él)',
      instructions: 'Elige el posesivo correcto para él.',
      questions: [
        {
          id: 'q1',
          question: '________ brother.',
          options: ['His', 'Her', 'Your'],
          correctAnswer: 0,
          explanation: 'Usamos "His" porque nos referimos a algo que le pertenece a él.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e40',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Parents',
      instructions: 'Di la palabra para "padres".',
      questions: [
        {
          id: 'q1',
          text: 'Parents',
          correctAnswer: 'Parents',
          explanation: 'Se pronuncia /ˈpeərənts/. La primera sílaba suena como "pair" (par).'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e41',
    type: 'matching',
    level: 'A1',
    topic: 'Possessives',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Posesivos de tercera persona',
      instructions: 'Une el posesivo con su significado.',
      pairs: [
        { id: '1', left: 'His', right: 'Su (de él)' },
        { id: '2', left: 'Her', right: 'Su (de ella)' },
        { id: '3', left: 'Its', right: 'Su (de una cosa/animal)' },
        { id: '4', left: 'Their', right: 'Su/Sus (de ellos/ellas)' },
        { id: '5', left: 'Our', right: 'Nuestro/a' }
      ],
      explanation: 'En inglés, el posesivo cambia según QUIÉN posee, no según QUÉ se posee.'
    } as any
  },
  {
    id: 'a1-u3-e42',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Possessives',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Su hija (de ella)',
      instructions: 'Escribe el posesivo para "ella".',
      questions: [
        {
          id: 'q1',
          text: '___ daughter.',
          correctAnswer: 'Her',
          explanation: 'Usamos "Her" porque la madre es mujer.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e43',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Hijos (genérico)',
      instructions: '¿Cómo se dice "hijos" en general?',
      questions: [
        {
          id: 'q1',
          question: 'I have three ________.',
          options: ['children', 'sons', 'daughters'],
          correctAnswer: 0,
          explanation: '"Children" es el plural genérico para hijos e hijas.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e44',
    type: 'flashcard',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Bebé',
          back: 'Baby',
          example: 'The baby is sleeping.',
          pronunciation: '/ˈbeɪbi/',
          explanation: 'Plural: babies.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e45',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Nuestro hijo',
      instructions: 'Ordena para traducir "Nuestro hijo".',
      sentences: [
        {
          id: 's1',
          words: ['son', 'Our'],
          correctSentence: 'Our son',
          translation: 'Nuestro hijo.',
          hint: 'Usa "Our".',
          explanation: '"Our" significa nuestro o nuestra.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e46',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Nieto',
      instructions: '¿Cómo se dice "nieto"?',
      questions: [
        {
          id: 'q1',
          question: 'He is my ________.',
          options: ['grandson', 'granddaughter', 'son'],
          correctAnswer: 0,
          explanation: 'Usamos el prefijo "grand-" sobre "son".'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e47',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Possessives',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Their',
      instructions: 'Di la palabra para "su" (de ellos).',
      questions: [
        {
          id: 'q1',
          text: 'Their',
          correctAnswer: 'Their',
          explanation: 'Se pronuncia igual que "there" o "they\'re".'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e48',
    type: 'matching',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Nietos y parientes',
      instructions: 'Une las palabras con su significado.',
      pairs: [
        { id: '1', left: 'Grandson', right: 'Nieto' },
        { id: '2', left: 'Granddaughter', right: 'Nieta' },
        { id: '3', left: 'Relative', right: 'Pariente' },
        { id: '4', left: 'Baby', right: 'Bebé' },
        { id: '5', left: 'Stepfather', right: 'Padrastro' }
      ],
      explanation: 'Ampliar el vocabulario familiar te permite describir mejor tu entorno.'
    } as any
  },
  {
    id: 'a1-u3-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Su nieta (de ellos)',
      instructions: 'Escribe el posesivo para "ellos".',
      questions: [
        {
          id: 'q1',
          text: '___ granddaughter.',
          correctAnswer: 'Their',
          explanation: 'Usamos "Their" para indicar posesión de un grupo.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Resumen familiar',
      instructions: '¿Cuál es el término correcto para "familia"?',
      questions: [
        {
          id: 'q1',
          question: 'I love my ________.',
          options: ['family', 'tribe', 'group'],
          correctAnswer: 0,
          explanation: '"Family" es la palabra estándar para familia.'
        }
      ]
    }
  }
];
