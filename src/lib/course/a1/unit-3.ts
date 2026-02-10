import { Exercise } from '@/lib/exercise-generator';

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
          pronunciation: '/ˈmʌðər/'
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
          hint: 'Usa el posesivo "My".'
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
          explanation: 'La "th" suena como una "d" suave.'
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
        { id: '3', left: 'Familia', right: 'Family' }
      ]
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
      instructions: 'Escribe la palabra que falta para traducir "Tu padre".',
      questions: [
        {
          id: 'q1',
          text: '___ father.',
          correctAnswer: 'Your',
          explanation: '"Your" significa tu o tus.'
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
          pronunciation: '/sʌn/'
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
          hint: 'Usa "My".'
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
          explanation: 'La "o" suena parecida a una "a".'
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
      instructions: 'Une las parejas.',
      pairs: [
        { id: '1', left: 'Hermano', right: 'Brother' },
        { id: '2', left: 'Hermana', right: 'Sister' },
        { id: '3', left: 'Hijo', right: 'Son' }
      ]
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
      instructions: 'Escribe la palabra que falta para traducir "Mi hermana".',
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
          explanation: '"Grandfather" es abuelo.'
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
          pronunciation: '/ˈɡrænmʌðər/'
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
          hint: 'Usa "Your".'
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
          explanation: 'La primera "s" es fuerte.'
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
      title: 'Mis y Tus',
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Mi', right: 'My' },
        { id: '2', left: 'Tu', right: 'Your' },
        { id: '3', left: 'Yo', right: 'I' }
      ]
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
      instructions: 'Escribe la palabra que falta para traducir "Mi abuelo".',
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
          pronunciation: '/ɑːnt/'
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
          hint: 'Usa "My".'
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
          explanation: 'La "th" suena suave.'
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
      instructions: 'Une las parejas.',
      pairs: [
        { id: '1', left: 'Tío', right: 'Uncle' },
        { id: '2', left: 'Tía', right: 'Aunt' },
        { id: '3', left: 'Abuela', right: 'Grandmother' }
      ]
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
      instructions: 'Escribe la palabra que falta para traducir "Tu tía".',
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
          explanation: '"Cousin" sirve para ambos géneros.'
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
          pronunciation: '/ˈhʌzbənd/'
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
          hint: 'Usa "My".'
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
          explanation: 'La "h" se pronuncia como un suspiro.'
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
      instructions: 'Une las parejas.',
      pairs: [
        { id: '1', left: 'Esposa', right: 'Wife' },
        { id: '2', left: 'Esposo', right: 'Husband' },
        { id: '3', left: 'Primo', right: 'Cousin' }
      ]
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
      instructions: 'Escribe la palabra que falta para traducir "Tu esposa".',
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
          explanation: '"Parents" incluye a padre y madre.'
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
          pronunciation: '/hɪz/'
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
          hint: 'Usa "Her" para ella.'
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
          explanation: '"His" se usa para posesión masculina.'
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
          explanation: 'Se pronuncia "pé-rents".'
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
      title: 'Posesivos',
      instructions: 'Une los posesivos con su significado.',
      pairs: [
        { id: '1', left: 'Su (de él)', right: 'His' },
        { id: '2', left: 'Su (de ella)', right: 'Her' },
        { id: '3', left: 'Mi', right: 'My' }
      ]
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
      title: 'Su hermana (de ella)',
      instructions: 'Escribe la palabra que falta para traducir "Su hermana" (de ella).',
      questions: [
        {
          id: 'q1',
          text: '___ sister.',
          correctAnswer: 'Her',
          explanation: '"Her" se usa para posesión femenina.'
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
      title: 'Bebé',
      instructions: '¿Cómo se dice "bebé"?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is small.',
          options: ['baby', 'parent', 'uncle'],
          correctAnswer: 0,
          explanation: '"Baby" es bebé.'
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
          front: 'Niño / Hijos',
          back: 'Child / Children',
          example: 'My children are happy.',
          pronunciation: '/ˈtʃɪldrən/'
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
      title: 'Mis hijos',
      instructions: 'Ordena para traducir "Mis hijos".',
      sentences: [
        {
          id: 's1',
          words: ['children', 'My'],
          correctSentence: 'My children',
          translation: 'Mis hijos.',
          hint: 'Usa el plural "Children".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u3-e46',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Possessives',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Pregunta de posesión',
      instructions: '¿Cómo preguntas "es tu hermano"?',
      questions: [
        {
          id: 'q1',
          question: 'Is he ________ brother?',
          options: ['you', 'your', 'my'],
          correctAnswer: 1,
          explanation: '"Your" es el adjetivo posesivo.'
        }
      ]
    }
  },
  {
    id: 'a1-u3-e47',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Family',
    topicName: 'My Tribe',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Children',
      instructions: 'Di la palabra para "hijos/niños".',
      questions: [
        {
          id: 'q1',
          text: 'Children',
          correctAnswer: 'Children',
          explanation: 'La "ch" suena fuerte.'
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
      title: 'Plurales familiares',
      instructions: 'Une el singular con su plural.',
      pairs: [
        { id: '1', left: 'Child', right: 'Children' },
        { id: '2', left: 'Parent', right: 'Parents' },
        { id: '3', left: 'Cousin', right: 'Cousins' }
      ]
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
      title: 'Tu hijo',
      instructions: 'Escribe la palabra que falta para traducir "Tu hijo".',
      questions: [
        {
          id: 'q1',
          text: 'Your ___.',
          correctAnswer: 'son',
          explanation: '"Son" es hijo.'
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
      title: 'Repaso familiar',
      instructions: '¿Cuál de estos NO es un familiar?',
      questions: [
        {
          id: 'q1',
          question: 'Which one is NOT a relative?',
          options: ['Brother', 'Car', 'Aunt'],
          correctAnswer: 1,
          explanation: '"Car" es coche, no es un familiar.'
        }
      ]
    }
  }
];
