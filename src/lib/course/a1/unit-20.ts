import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 20: Prepositions
 */

export const UNIT_20_EXERCISES: Exercise[] = [
  {
    id: 'a1-u20-e1',
    type: 'matching',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'easy',
    content: {
      title: 'Preposiciones Básicas',
      instructions: 'Relaciona la preposición con su significado en español.',
      pairs: [
        { id: 'p1', left: 'In', right: 'En/Dentro de' },
        { id: 'p2', left: 'On', right: 'Sobre/Encima de' },
        { id: 'p3', left: 'Under', right: 'Debajo de' },
        { id: 'p4', left: 'Next to', right: 'Al lado de' },
        { id: 'p5', left: 'Behind', right: 'Detrás de' }
      ],
      explanation: 'Las preposiciones de lugar nos indican dónde se encuentra un objeto en relación a otro.'
    } as any
  },
  {
    id: 'a1-u20-e2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'easy',
    content: {
      title: 'Dentro de la caja',
      instructions: '¿Cómo se dice "en la caja"?',
      questions: [
        {
          id: 'q1',
          question: 'The ball is ________ the box.',
          options: ['in', 'on', 'under'],
          correctAnswer: 0,
          explanation: "Usamos 'in' cuando algo está dentro de un espacio cerrado o delimitado."
        }
      ]
    }
  },
  {
    id: 'a1-u20-e3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'easy',
    content: {
      title: 'Sobre la mesa',
      instructions: 'Completa con la palabra para "encima de" (haciendo contacto).',
      questions: [
        {
          id: 'q1',
          question: 'The book is ________ the table.',
          correctAnswer: 'on',
          explanation: "Usamos 'on' cuando un objeto está sobre una superficie y hay contacto físico."
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e4',
    type: 'flashcard',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Debajo de',
          back: 'Under',
          example: 'The cat is under the chair.',
          pronunciation: '/ˈʌndər/',
          explanation: '"Under" se usa cuando algo está en una posición inferior a otro objeto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e5',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'easy',
    content: {
      title: 'El gato está al lado',
      instructions: 'Ordena las palabras para decir "El gato está al lado del perro".',
      sentences: [
        {
          id: 's1',
          words: ['dog', 'the', 'to', 'next', 'is', 'cat', 'The'],
          correctSentence: 'The cat is next to the dog',
          translation: 'El gato está al lado del perro.',
          explanation: "'Next to' es una preposición compuesta que significa proximidad lateral."
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e6',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Behind',
      instructions: 'Di la palabra para "detrás".',
      questions: [
        {
          id: 'q1',
          text: 'Behind',
          phonetic: '/bɪˈhaɪnd/',
          translation: 'Detrás',
          explanation: 'La "h" se pronuncia como una aspiración suave.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e7',
    type: 'matching',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'easy',
    content: {
      title: 'Ubicaciones Avanzadas',
      instructions: 'Relaciona la ubicación con su traducción.',
      pairs: [
        { id: 'p1', left: 'In front of', right: 'Delante de' },
        { id: 'p2', left: 'Between', right: 'Entre (dos)' },
        { id: 'p3', left: 'Above', right: 'Por encima (sin contacto)' },
        { id: 'p4', left: 'Below', right: 'Por debajo (sin contacto)' },
        { id: 'p5', left: 'Across from', right: 'En frente de / Al otro lado' }
      ],
      explanation: 'Estas preposiciones ayudan a describir posiciones más precisas.'
    } as any
  },
  {
    id: 'a1-u20-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'easy',
    content: {
      title: 'Entre dos cosas',
      instructions: '¿Cómo se dice "entre"?',
      questions: [
        {
          id: 'q1',
          question: 'The pen is ________ the book and the lamp.',
          options: ['between', 'among', 'in'],
          correctAnswer: 0,
          explanation: "Usamos 'between' cuando algo está en medio de dos objetos específicos."
        }
      ]
    }
  },
  {
    id: 'a1-u20-e9',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'Frente a frente',
      instructions: 'Completa con la frase para "delante de".',
      questions: [
        {
          id: 'q1',
          question: 'The car is ________ ________ ________ the house.',
          correctAnswer: 'in front of',
          explanation: "'In front of' indica que algo está situado delante de otra cosa."
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e10',
    type: 'flashcard',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Por encima de (sin contacto)',
          back: 'Above',
          example: 'The mirror is above the sink.',
          pronunciation: '/əˈbʌv/',
          explanation: '"Above" se usa cuando algo está más alto que otra cosa, pero no justo encima tocándolo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'En frente de la tienda',
      instructions: 'Ordena para decir "El banco está en frente de la tienda".',
      sentences: [
        {
          id: 's1',
          words: ['store', 'the', 'from', 'across', 'is', 'bank', 'The'],
          correctSentence: 'The bank is across from the store',
          translation: 'El banco está en frente de la tienda.',
          explanation: "'Across from' se usa cuando dos cosas están cara a cara, normalmente con una calle o pasillo en medio."
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'Objetos de la casa',
      instructions: 'Relaciona el objeto con su traducción.',
      pairs: [
        { id: 'p1', left: 'Sofa', right: 'Sofá' },
        { id: 'p2', left: 'Rug', right: 'Alfombra' },
        { id: 'p3', left: 'Shelf', right: 'Estante' },
        { id: 'p4', left: 'Curtains', right: 'Cortinas' },
        { id: 'p5', left: 'Cushion', right: 'Cojín' }
      ],
      explanation: 'Vocabulario útil para practicar preposiciones de lugar.'
    } as any
  },
  {
    id: 'a1-u20-e13',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'En el sofá',
      instructions: '¿Dónde está el cojín?',
      questions: [
        {
          id: 'q1',
          question: 'The cushion is ________ the sofa.',
          options: ['on', 'under', 'next to'],
          correctAnswer: 0,
          explanation: "Los cojines suelen estar 'on' (sobre) el sofá."
        }
      ]
    }
  },
  {
    id: 'a1-u20-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'Debajo de la alfombra',
      instructions: 'Escribe la palabra para "debajo de".',
      questions: [
        {
          id: 'q1',
          question: 'The key is ________ the rug.',
          correctAnswer: 'under',
          explanation: '"Under" significa que algo está cubierto por otra cosa en una posición inferior.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e15',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Between',
      instructions: 'Di la palabra para "entre".',
      questions: [
        {
          id: 'q1',
          text: 'Between',
          phonetic: '/bɪˈtwiːn/',
          translation: 'Entre',
          explanation: 'La "ee" se pronuncia como una "i" larga.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e16',
    type: 'matching',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'Más objetos del hogar',
      instructions: 'Relaciona los objetos.',
      pairs: [
        { id: 'p1', left: 'Mirror', right: 'Espejo' },
        { id: 'p2', left: 'Picture', right: 'Cuadro/Imagen' },
        { id: 'p3', left: 'Clock', right: 'Reloj de pared' },
        { id: 'p4', left: 'Vase', right: 'Jarrón' },
        { id: 'p5', left: 'Lamp', right: 'Lámpara' }
      ],
      explanation: 'Objetos que solemos colgar o poner en superficies.'
    } as any
  },
  {
    id: 'a1-u20-e17',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'En la pared',
      instructions: '¿Qué preposición usamos para objetos en la pared?',
      questions: [
        {
          id: 'q1',
          question: 'The picture is ________ the wall.',
          options: ['on', 'in', 'at'],
          correctAnswer: 0,
          explanation: "Incluso en superficies verticales como paredes, usamos 'on'."
        }
      ]
    }
  },
  {
    id: 'a1-u20-e18',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'El jarrón y la lámpara',
      instructions: 'Escribe la palabra para "al lado de".',
      questions: [
        {
          id: 'q1',
          question: 'The vase is ________ ________ the lamp.',
          correctAnswer: 'next to',
          explanation: '"Next to" indica cercanía inmediata.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e19',
    type: 'flashcard',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Delante de',
          back: 'In front of',
          example: 'I am in front of the TV.',
          pronunciation: '/ɪn frʌnt ɒv/',
          explanation: 'No confundir con "opposite" (enfrente).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e20',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'hard',
    content: {
      title: 'El espejo arriba',
      instructions: 'Ordena para decir "El espejo está encima del lavabo".',
      sentences: [
        {
          id: 's1',
          words: ['sink', 'the', 'above', 'is', 'mirror', 'The'],
          correctSentence: 'The mirror is above the sink',
          translation: 'El espejo está encima del lavabo.',
          explanation: "Usamos 'above' porque el espejo no suele tocar el lavabo."
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e21',
    type: 'matching',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'La cocina',
      instructions: 'Relaciona los elementos de cocina.',
      pairs: [
        { id: 'p1', left: 'Fridge', right: 'Nevera' },
        { id: 'p2', left: 'Stove', right: 'Cocina/Fogones' },
        { id: 'p3', left: 'Oven', right: 'Horno' },
        { id: 'p4', left: 'Microwave', right: 'Microondas' },
        { id: 'p5', left: 'Dishwasher', right: 'Lavavajillas' }
      ],
      explanation: 'Electrodomésticos comunes de la cocina.'
    } as any
  },
  {
    id: 'a1-u20-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'En la nevera',
      instructions: '¿Dónde está la leche?',
      questions: [
        {
          id: 'q1',
          question: 'The milk is ________ the fridge.',
          options: ['in', 'on', 'at'],
          correctAnswer: 0,
          explanation: "La comida está 'in' (dentro de) la nevera."
        }
      ]
    }
  },
  {
    id: 'a1-u20-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'Encima del microondas',
      instructions: 'Completa con la palabra para "sobre".',
      questions: [
        {
          id: 'q1',
          question: 'The bread is ________ the microwave.',
          correctAnswer: 'on',
          explanation: "Si el pan está tocando el microondas por arriba, usamos 'on'."
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e24',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Fridge',
      instructions: 'Di la palabra para "nevera".',
      questions: [
        {
          id: 'q1',
          text: 'Fridge',
          phonetic: '/frɪdʒ/',
          translation: 'Nevera',
          explanation: 'La "dge" suena como una "y" fuerte o "j" en inglés.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'El dormitorio',
      instructions: 'Relaciona los objetos del dormitorio.',
      pairs: [
        { id: 'p1', left: 'Bed', right: 'Cama' },
        { id: 'p2', left: 'Pillow', right: 'Almohada' },
        { id: 'p3', left: 'Blanket', right: 'Manta' },
        { id: 'p4', left: 'Wardrobe', right: 'Armario' },
        { id: 'p5', left: 'Desk', right: 'Escritorio' }
      ],
      explanation: 'Muebles y objetos del cuarto de dormir.'
    } as any
  },
  {
    id: 'a1-u20-e26',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'En el armario',
      instructions: '¿Dónde está la ropa?',
      questions: [
        {
          id: 'q1',
          question: 'My clothes are ________ the wardrobe.',
          options: ['in', 'on', 'behind'],
          correctAnswer: 0,
          explanation: "La ropa se guarda 'in' (dentro de) el armario."
        }
      ]
    }
  },
  {
    id: 'a1-u20-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'La almohada',
      instructions: '¿Dónde está la almohada?',
      questions: [
        {
          id: 'q1',
          question: 'The pillow is ________ the bed.',
          correctAnswer: 'on',
          explanation: "La almohada está sobre la superficie de la cama."
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e28',
    type: 'flashcard',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Entre',
          back: 'Between',
          example: 'The desk is between the bed and the window.',
          pronunciation: '/bɪˈtwiːn/',
          explanation: 'Se usa para situar algo respecto a otros dos puntos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e29',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'hard',
    content: {
      title: 'Debajo de la cama',
      instructions: 'Ordena para decir "Tus zapatos están debajo de la cama".',
      sentences: [
        {
          id: 's1',
          words: ['bed', 'the', 'under', 'are', 'shoes', 'Your'],
          correctSentence: 'Your shoes are under the bed',
          translation: 'Tus zapatos están debajo de la cama.',
          explanation: '"Under" indica una posición inferior cubierta.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e30',
    type: 'matching',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'Preposiciones de Movimiento',
      instructions: 'Relaciona (aunque son de lugar, a veces se confunden).',
      pairs: [
        { id: 'p1', left: 'To', right: 'A / Hacia' },
        { id: 'p2', left: 'From', right: 'De / Desde' },
        { id: 'p3', left: 'Near', right: 'Cerca de' },
        { id: 'p4', left: 'Far from', right: 'Lejos de' },
        { id: 'p5', left: 'At', right: 'En (punto específico)' }
      ],
      explanation: 'Conceptos de proximidad y origen/destino.'
    } as any
  },
  {
    id: 'a1-u20-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'Cerca de aquí',
      instructions: '¿Cómo se dice "cerca"?',
      questions: [
        {
          id: 'q1',
          question: 'The park is ________ the school.',
          options: ['near', 'next', 'in'],
          correctAnswer: 0,
          explanation: '"Near" significa que algo no está lejos.'
        }
      ]
    }
  },
  {
    id: 'a1-u20-e32',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'Lejos de casa',
      instructions: 'Escribe la frase para "lejos de".',
      questions: [
        {
          id: 'q1',
          question: 'The airport is ________ ________ here.',
          correctAnswer: 'far from',
          explanation: '"Far from" es lo opuesto a "near".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Near',
      instructions: 'Di la palabra para "cerca".',
      questions: [
        {
          id: 'q1',
          text: 'Near',
          phonetic: '/nɪər/',
          translation: 'Cerca',
          explanation: 'Se pronuncia como "níar".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'El salón',
      instructions: 'Relaciona los objetos del salón.',
      pairs: [
        { id: 'p1', left: 'Armchair', right: 'Sillón' },
        { id: 'p2', left: 'Coffee table', right: 'Mesa de centro' },
        { id: 'p3', left: 'TV stand', right: 'Mueble de la TV' },
        { id: 'p4', left: 'Fireplace', right: 'Chimenea' },
        { id: 'p5', left: 'Bookshelf', right: 'Estantería' }
      ],
      explanation: 'Vocabulario del salón o sala de estar.'
    } as any
  },
  {
    id: 'a1-u20-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'Detrás del sofá',
      instructions: '¿Dónde está el gato?',
      questions: [
        {
          id: 'q1',
          question: 'The cat is hiding ________ the sofa.',
          options: ['behind', 'in front of', 'on'],
          correctAnswer: 0,
          explanation: "Si el gato se está escondiendo, probablemente esté 'behind' (detrás)."
        }
      ]
    }
  },
  {
    id: 'a1-u20-e36',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'La mesa de centro',
      instructions: '¿Dónde está la mesa de centro?',
      questions: [
        {
          id: 'q1',
          question: 'The coffee table is ________ ________ ________ the sofa.',
          correctAnswer: 'in front of',
          explanation: "La mesa de centro suele estar delante del sofá."
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Encima de (sin contacto)',
          back: 'Above',
          example: 'The shelf is above the TV.',
          pronunciation: '/əˈbʌv/',
          explanation: 'Indica una posición superior vertical.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'hard',
    content: {
      title: 'Libros en la estantería',
      instructions: 'Ordena para decir "Los libros están en la estantería".',
      sentences: [
        {
          id: 's1',
          words: ['bookshelf', 'the', 'on', 'are', 'books', 'The'],
          correctSentence: 'The books are on the bookshelf',
          translation: 'Los libros están en la estantería.',
          explanation: "Usamos 'on' para cosas colocadas en estantes."
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e39',
    type: 'matching',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'El baño',
      instructions: 'Relaciona los objetos del baño.',
      pairs: [
        { id: 'p1', left: 'Toilet', right: 'Inodoro/Váter' },
        { id: 'p2', left: 'Shower', right: 'Ducha' },
        { id: 'p3', left: 'Bathtub', right: 'Bañera' },
        { id: 'p4', left: 'Sink', right: 'Lavabo' },
        { id: 'p5', left: 'Towel', right: 'Toalla' }
      ],
      explanation: 'Vocabulario básico del cuarto de baño.'
    } as any
  },
  {
    id: 'a1-u20-e40',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'En la ducha',
      instructions: '¿Dónde te duchas?',
      questions: [
        {
          id: 'q1',
          question: 'I am ________ the shower.',
          options: ['in', 'on', 'at'],
          correctAnswer: 0,
          explanation: "Estar dentro de la cabina de la ducha es 'in'."
        }
      ]
    }
  },
  {
    id: 'a1-u20-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'La toalla',
      instructions: '¿Dónde está la toalla?',
      questions: [
        {
          id: 'q1',
          question: 'The towel is ________ the door.',
          correctAnswer: 'behind',
          explanation: "A veces colgamos las toallas detrás de la puerta."
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e42',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Shower',
      instructions: 'Di la palabra para "ducha".',
      questions: [
        {
          id: 'q1',
          text: 'Shower',
          phonetic: '/ˈʃaʊər/',
          translation: 'Ducha',
          explanation: 'La "sh" suena como pidiendo silencio.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e43',
    type: 'matching',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'hard',
    content: {
      title: 'Repaso de Preposiciones',
      instructions: 'Une cada una con su opuesto o relación lógica.',
      pairs: [
        { id: 'p1', left: 'On', right: 'Under' },
        { id: 'p2', left: 'In front of', right: 'Behind' },
        { id: 'p3', left: 'Above', right: 'Below' },
        { id: 'p4', left: 'Near', right: 'Far from' },
        { id: 'p5', left: 'Between', right: 'Entre dos' }
      ],
      explanation: 'Entender los opuestos ayuda a memorizar mejor.'
    } as any
  },
  {
    id: 'a1-u20-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'hard',
    content: {
      title: '¿Dónde está el perro?',
      instructions: 'The dog is ________ the table.',
      questions: [
        {
          id: 'q1',
          question: 'The dog is ________ the table.',
          options: ['under', 'in', 'between'],
          correctAnswer: 0,
          explanation: "Los perros suelen tumbarse debajo ('under') de las mesas."
        }
      ]
    }
  },
  {
    id: 'a1-u20-e45',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'hard',
    content: {
      title: 'Entre la silla y la mesa',
      instructions: 'Escribe la palabra para "entre".',
      questions: [
        {
          id: 'q1',
          question: 'The ball is ________ the chair and the table.',
          correctAnswer: 'between',
          explanation: "Recuerda: 'between' para dos objetos."
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e46',
    type: 'flashcard',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'hard',
    content: {
      items: [
        {
          front: 'Detrás de',
          back: 'Behind',
          example: 'I am behind you.',
          pronunciation: '/bɪˈhaɪnd/',
          explanation: 'Significa en la parte posterior.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'hard',
    content: {
      title: 'El gato en la caja',
      instructions: 'Ordena para decir "El gato está en la caja".',
      sentences: [
        {
          id: 's1',
          words: ['box', 'the', 'in', 'is', 'cat', 'The'],
          correctSentence: 'The cat is in the box',
          translation: 'El gato está en la caja.',
          explanation: "Estructura: Sujeto + is + in + the + lugar."
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'hard',
    content: {
      title: '¿Dónde?',
      instructions: '¿Cómo se pregunta "¿Dónde está...?"?',
      questions: [
        {
          id: 'q1',
          question: '________ is the key?',
          options: ['Where', 'What', 'Who'],
          correctAnswer: 0,
          explanation: "'Where' es la palabra interrogativa para preguntar por el lugar."
        }
      ]
    }
  },
  {
    id: 'a1-u20-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'hard',
    content: {
      title: 'No lo sé',
      instructions: 'Completa: No sé dónde está.',
      questions: [
        {
          id: 'q1',
          question: "I don't know ________ it is.",
          correctAnswer: 'where',
          explanation: "Usamos 'where' para referirnos al lugar."
        }
      ]
    } as any
  },
  {
    id: 'a1-u20-e50',
    type: 'matching',
    level: 'A1',
    topic: 'Prepositions',
    topicName: 'Where is it?',
    difficulty: 'hard',
    content: {
      title: 'Repaso Final de Objetos',
      instructions: 'Relaciona los últimos objetos practicados.',
      pairs: [
        { id: 'p1', left: 'Fridge', right: 'Nevera' },
        { id: 'p2', left: 'Wardrobe', right: 'Armario' },
        { id: 'p3', left: 'Mirror', right: 'Espejo' },
        { id: 'p4', left: 'Sofa', right: 'Sofá' },
        { id: 'p5', left: 'Rug', right: 'Alfombra' }
      ],
      explanation: 'Un último repaso al vocabulario del hogar usado en esta unidad.'
    } as any
  }
];
