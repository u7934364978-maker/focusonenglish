import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 18: Anatomy
 */

export const UNIT_18_EXERCISES: Exercise[] = [
  {
    id: 'a1-u18-e1',
    type: 'matching',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'easy',
    content: {
      title: 'Partes de la Cara',
      instructions: 'Une cada parte de la cara con su traducción al español.',
      pairs: [
        { id: 'p1', left: 'Eye', right: 'Ojo' },
        { id: 'p2', left: 'Nose', right: 'Nariz' },
        { id: 'p3', left: 'Mouth', right: 'Boca' },
        { id: 'p4', left: 'Ear', right: 'Oreja' },
        { id: 'p5', left: 'Hair', right: 'Pelo/Cabello' }
      ],
      explanation: 'Estas son las partes básicas de la cara que usamos para ver, oler, comer y oír.'
    } as any
  },
  {
    id: 'a1-u18-e2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'easy',
    content: {
      title: 'La vista',
      instructions: '¿Qué parte del cuerpo usamos para ver?',
      questions: [
        {
          id: 'q1',
          question: 'I see with my ________.',
          options: ['eyes', 'ears', 'hands'],
          correctAnswer: 0,
          explanation: '"Eyes" son los ojos. Usamos la vista para observar el mundo.'
        }
      ]
    }
  },
  {
    id: 'a1-u18-e3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'easy',
    content: {
      title: 'El olfato',
      instructions: 'Completa con la palabra para "nariz".',
      questions: [
        {
          id: 'q1',
          question: 'I smell with my ________.',
          correctAnswer: 'nose',
          explanation: '"Nose" es nariz. La usamos para respirar y oler.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e4',
    type: 'flashcard',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Boca',
          back: 'Mouth',
          example: 'Open your mouth.',
          pronunciation: '/maʊθ/',
          explanation: '"Mouth" es boca. Fíjate en la pronunciación de la "th" final.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e5',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'easy',
    content: {
      title: 'Tengo dos orejas',
      instructions: 'Ordena las palabras para decir "Yo tengo dos orejas".',
      sentences: [
        {
          id: 's1',
          words: ['ears', 'two', 'have', 'I'],
          correctSentence: 'I have two ears',
          translation: 'Yo tengo dos orejas.',
          hint: 'Empieza con "I".',
          explanation: 'La mayoría de las partes del cuerpo vienen en pares.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e7',
    type: 'matching',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'easy',
    content: {
      title: 'Partes del Cuerpo Superiores',
      instructions: 'Une cada parte con su traducción.',
      pairs: [
        { id: 'p1', left: 'Head', right: 'Cabeza' },
        { id: 'p2', left: 'Shoulder', right: 'Hombro' },
        { id: 'p3', left: 'Arm', right: 'Brazo' },
        { id: 'p4', left: 'Hand', right: 'Mano' },
        { id: 'p5', left: 'Finger', right: 'Dedo (mano)' }
      ],
      explanation: 'Estas son las partes principales de la mitad superior del cuerpo.'
    } as any
  },
  {
    id: 'a1-u18-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'easy',
    content: {
      title: 'La cabeza',
      instructions: '¿Dónde está el pelo?',
      questions: [
        {
          id: 'q1',
          question: 'The hair is on the ________.',
          options: ['head', 'foot', 'hand'],
          correctAnswer: 0,
          explanation: '"Head" es cabeza. El pelo crece en la parte superior de la cabeza.'
        }
      ]
    }
  },
  {
    id: 'a1-u18-e9',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'Las manos',
      instructions: 'Escribe la palabra para "manos".',
      questions: [
        {
          id: 'q1',
          question: 'I wash my ________ before eating.',
          correctAnswer: 'hands',
          explanation: '"Hands" es el plural de "hand" (mano).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e10',
    type: 'flashcard',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Brazo',
          back: 'Arm',
          example: 'My arm is strong.',
          pronunciation: '/ɑːrm/',
          explanation: '"Arm" es brazo. Muy fácil de recordar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'Tengo diez dedos',
      instructions: 'Ordena para decir "Yo tengo diez dedos".',
      sentences: [
        {
          id: 's1',
          words: ['fingers', 'ten', 'have', 'I'],
          correctSentence: 'I have ten fingers',
          translation: 'Yo tengo diez dedos.',
          hint: 'Empieza con "I".',
          explanation: '"Fingers" se refiere específicamente a los dedos de las manos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'Partes del Cuerpo Inferiores',
      instructions: 'Une cada parte con su traducción.',
      pairs: [
        { id: 'p1', left: 'Leg', right: 'Pierna' },
        { id: 'p2', left: 'Knee', right: 'Rodilla' },
        { id: 'p3', left: 'Foot', right: 'Pie' },
        { id: 'p4', left: 'Toe', right: 'Dedo (pie)' },
        { id: 'p5', left: 'Ankle', right: 'Tobillo' }
      ],
      explanation: 'Estas son las partes principales de la mitad inferior del cuerpo.'
    } as any
  },
  {
    id: 'a1-u18-e13',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'Caminar',
      instructions: '¿Qué usamos para caminar?',
      questions: [
        {
          id: 'q1',
          question: 'I walk with my ________.',
          options: ['legs', 'arms', 'ears'],
          correctAnswer: 0,
          explanation: '"Legs" son las piernas. Son esenciales para el movimiento.'
        }
      ]
    }
  },
  {
    id: 'a1-u18-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'El pie',
      instructions: 'Escribe la palabra para "pie".',
      questions: [
        {
          id: 'q1',
          question: 'My left ________ hurts.',
          correctAnswer: 'foot',
          explanation: '"Foot" es pie. El plural es irregular: "feet".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e16',
    type: 'matching',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'El Torso',
      instructions: 'Une cada parte con su traducción.',
      pairs: [
        { id: 'p1', left: 'Back', right: 'Espalda' },
        { id: 'p2', left: 'Chest', right: 'Pecho' },
        { id: 'p3', left: 'Stomach', right: 'Estómago' },
        { id: 'p4', left: 'Neck', right: 'Cuello' },
        { id: 'p5', left: 'Waist', right: 'Cintura' }
      ],
      explanation: 'Partes que componen el tronco de nuestro cuerpo.'
    } as any
  },
  {
    id: 'a1-u18-e17',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'Dolor de estómago',
      instructions: '¿Dónde te duele si has comido mucho?',
      questions: [
        {
          id: 'q1',
          question: 'My ________ hurts after eating.',
          options: ['stomach', 'neck', 'knee'],
          correctAnswer: 0,
          explanation: '"Stomach" es estómago. Es donde procesamos la comida.'
        }
      ]
    }
  },
  {
    id: 'a1-u18-e18',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'El cuello',
      instructions: 'Escribe la palabra para "cuello".',
      questions: [
        {
          id: 'q1',
          question: 'The giraffe has a long ________.',
          correctAnswer: 'neck',
          explanation: '"Neck" es cuello. Conecta la cabeza con el torso.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e19',
    type: 'flashcard',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Espalda',
          back: 'Back',
          example: 'My back is straight.',
          pronunciation: '/bæk/',
          explanation: '"Back" significa espalda. ¡También significa "atrás"!'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e20',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'Manos y pies',
      instructions: 'Ordena para decir "Yo tengo manos y pies".',
      sentences: [
        {
          id: 's1',
          words: ['feet', 'and', 'hands', 'have', 'I'],
          correctSentence: 'I have hands and feet',
          translation: 'Yo tengo manos y pies.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos el plural irregular "feet" (pies).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e21',
    type: 'matching',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'Dentro del Cuerpo',
      instructions: 'Une cada órgano con su traducción.',
      pairs: [
        { id: 'p1', left: 'Heart', right: 'Corazón' },
        { id: 'p2', left: 'Brain', right: 'Cerebro' },
        { id: 'p3', left: 'Blood', right: 'Sangre' },
        { id: 'p4', left: 'Bone', right: 'Hueso' },
        { id: 'p5', left: 'Skin', right: 'Piel' }
      ],
      explanation: 'Elementos internos y externos fundamentales de nuestro organismo.'
    } as any
  },
  {
    id: 'a1-u18-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'El corazón',
      instructions: '¿Qué órgano bombea sangre?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ pumps blood.',
          options: ['heart', 'brain', 'mouth'],
          correctAnswer: 0,
          explanation: '"Heart" es el corazón. Es el motor de nuestro cuerpo.'
        }
      ]
    }
  },
  {
    id: 'a1-u18-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'El cerebro',
      instructions: 'Escribe la palabra para "cerebro".',
      questions: [
        {
          id: 'q1',
          question: 'I use my ________ to think.',
          answer: 'brain',
          explanation: '"Brain" es el cerebro. Con él pensamos y controlamos el cuerpo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'Detalles de la Cara',
      instructions: 'Une cada detalle con su traducción.',
      pairs: [
        { id: 'p1', left: 'Teeth', right: 'Dientes' },
        { id: 'p2', left: 'Tongue', right: 'Lengua' },
        { id: 'p3', left: 'Lip', right: 'Labio' },
        { id: 'p4', left: 'Cheek', right: 'Mejilla' },
        { id: 'p5', left: 'Chin', right: 'Barbilla' }
      ],
      explanation: 'Partes más específicas que encontramos en nuestra cabeza.'
    } as any
  },
  {
    id: 'a1-u18-e26',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'Los dientes',
      instructions: '¿Qué usamos para masticar?',
      questions: [
        {
          id: 'q1',
          question: 'I use my ________ to eat.',
          options: ['teeth', 'nose', 'hair'],
          correctAnswer: 0,
          explanation: '"Teeth" es el plural de "tooth" (diente).'
        }
      ]
    }
  },
  {
    id: 'a1-u18-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'La lengua',
      instructions: 'Escribe la palabra para "lengua".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is inside the mouth.',
          answer: 'tongue',
          explanation: '"Tongue" es lengua. Fíjate que se escribe de forma peculiar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e28',
    type: 'flashcard',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Dientes',
          back: 'Teeth',
          example: 'Brush your teeth.',
          pronunciation: '/tiːθ/',
          explanation: '"Teeth" es el plural. Un solo diente es "tooth".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e29',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'Dientes blancos',
      instructions: 'Ordena para decir "Yo tengo dientes blancos".',
      sentences: [
        {
          id: 's1',
          words: ['teeth', 'white', 'have', 'I'],
          correctSentence: 'I have white teeth',
          translation: 'Yo tengo dientes blancos.',
          hint: 'Empieza con "I".',
          explanation: 'El adjetivo "white" va antes del sustantivo "teeth".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e30',
    type: 'matching',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'Plurales Irregulares',
      instructions: 'Une el singular con su plural irregular.',
      pairs: [
        { id: 'p1', left: 'Foot', right: 'Feet' },
        { id: 'p2', left: 'Tooth', right: 'Teeth' },
        { id: 'p3', left: 'Person', right: 'People' },
        { id: 'p4', left: 'Child', right: 'Children' },
        { id: 'p5', left: 'Man', right: 'Men' }
      ],
      explanation: 'Algunas palabras del cuerpo y personas tienen plurales que no terminan en "s".'
    } as any
  },
  {
    id: 'a1-u18-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'Dedo del pie',
      instructions: '¿Cómo se dice "dedo del pie"?',
      questions: [
        {
          id: 'q1',
          question: 'I have five ________ on each foot.',
          options: ['toes', 'fingers', 'eyes'],
          correctAnswer: 0,
          explanation: '"Toes" son los dedos de los pies. "Fingers" son los de las manos.'
        }
      ]
    }
  },
  {
    id: 'a1-u18-e32',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'Dedo de la mano',
      instructions: 'Escribe la palabra para "dedo" (de la mano).',
      questions: [
        {
          id: 'q1',
          question: 'A hand has five ________.',
          answer: 'fingers',
          explanation: '"Fingers" es el término correcto para las manos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'Sentidos y Órganos',
      instructions: 'Une el sentido con el órgano correspondiente.',
      pairs: [
        { id: 'p1', left: 'Sight', right: 'Eyes' },
        { id: 'p2', left: 'Hearing', right: 'Ears' },
        { id: 'p3', left: 'Smell', right: 'Nose' },
        { id: 'p4', left: 'Taste', right: 'Tongue' },
        { id: 'p5', left: 'Touch', right: 'Skin' }
      ],
      explanation: 'Relación entre nuestros sentidos y las partes del cuerpo.'
    } as any
  },
  {
    id: 'a1-u18-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'La piel',
      instructions: '¿Qué cubre todo nuestro cuerpo?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ covers my body.',
          options: ['skin', 'blood', 'bone'],
          correctAnswer: 0,
          explanation: '"Skin" es la piel. Es el órgano más grande del cuerpo.'
        }
      ]
    }
  },
  {
    id: 'a1-u18-e36',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'Los huesos',
      instructions: 'Escribe la palabra para "hueso".',
      questions: [
        {
          id: 'q1',
          question: 'A dog likes to eat a ________.',
          answer: 'bone',
          explanation: '"Bone" es hueso. Tenemos más de 200 en el cuerpo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Sangre',
          back: 'Blood',
          example: 'Blood is red.',
          pronunciation: '/blʌd/',
          explanation: '"Blood" es sangre. Fíjate que las dos "o" suenan como una "a" corta.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'El cerebro piensa',
      instructions: 'Ordena para decir "El cerebro está en la cabeza".',
      sentences: [
        {
          id: 's1',
          words: ['head', 'the', 'in', 'is', 'brain', 'The'],
          correctSentence: 'The brain is in the head',
          translation: 'El cerebro está en la cabeza.',
          hint: 'Empieza con "The".',
          explanation: 'Indicamos la posición de un órgano interno.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e39',
    type: 'matching',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'Acciones del Cuerpo',
      instructions: 'Une la acción con la parte del cuerpo que la realiza.',
      pairs: [
        { id: 'p1', left: 'Think', right: 'Brain' },
        { id: 'p2', left: 'Breathe', right: 'Nose/Lungs' },
        { id: 'p3', left: 'Eat', right: 'Mouth' },
        { id: 'p4', left: 'Listen', right: 'Ears' },
        { id: 'p5', left: 'Run', right: 'Legs' }
      ],
      explanation: 'Funciones biológicas y físicas asociadas a anatomía.'
    } as any
  },
  {
    id: 'a1-u18-e40',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'Hombros',
      instructions: '¿Dónde están los hombros?',
      questions: [
        {
          id: 'q1',
          question: 'My ________ are below my neck.',
          options: ['shoulders', 'knees', 'feet'],
          correctAnswer: 0,
          explanation: '"Shoulders" son los hombros.'
        }
      ]
    }
  },
  {
    id: 'a1-u18-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'La rodilla',
      instructions: 'Escribe la palabra para "rodilla".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is in the middle of the leg.',
          answer: 'knee',
          explanation: 'La rodilla es la articulación central de la pierna.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e43',
    type: 'matching',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: '¿Cuántos tenemos?',
      instructions: 'Une la parte del cuerpo con su cantidad habitual.',
      pairs: [
        { id: 'p1', left: 'Head', right: 'One' },
        { id: 'p2', left: 'Arms', right: 'Two' },
        { id: 'p3', left: 'Fingers', right: 'Ten' },
        { id: 'p4', left: 'Teeth', right: 'Many' },
        { id: 'p5', left: 'Toes', right: 'Ten' }
      ],
      explanation: 'Repaso de anatomía y números básicos.'
    } as any
  },
  {
    id: 'a1-u18-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'medium',
    content: {
      title: 'Cuerpo entero',
      instructions: '¿Cómo se dice "cuerpo"?',
      questions: [
        {
          id: 'q1',
          question: 'I exercise my ________.',
          options: ['body', 'home', 'car'],
          correctAnswer: 0,
          explanation: '"Body" es cuerpo. Es importante mantenerlo sano.'
        }
      ]
    }
  },
  {
    id: 'a1-u18-e45',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'La cara',
      instructions: 'Escribe la palabra para "cara".',
      questions: [
        {
          id: 'q1',
          question: 'Wash your ________ with water.',
          correctAnswer: 'face',
          explanation: '"Face" es cara. Es nuestra carta de presentación.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e46',
    type: 'flashcard',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Oreja/Oído',
          back: 'Ear',
          example: 'I listen with my ears.',
          pronunciation: '/ɪər/',
          explanation: '"Ear" significa tanto la oreja física como el sentido del oído.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'Cerebro y pensar',
      instructions: 'Ordena para decir "Yo uso mi cerebro para pensar".',
      sentences: [
        {
          id: 's1',
          words: ['think', 'to', 'brain', 'my', 'use', 'I'],
          correctSentence: 'I use my brain to think',
          translation: 'Yo uso mi cerebro para pensar.',
          hint: 'Empieza con "I".',
          explanation: 'Estructura más compleja combinando órgano y función.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e48',
    type: 'matching',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'Repaso General',
      instructions: 'Une cada término con su categoría.',
      pairs: [
        { id: 'p1', left: 'Eye', right: 'Face' },
        { id: 'p2', left: 'Heart', right: 'Organ' },
        { id: 'p3', left: 'Leg', right: 'Limb (Extremidad)' },
        { id: 'p4', left: 'Brain', right: 'Organ' },
        { id: 'p5', left: 'Knee', right: 'Joint (Articulación)' }
      ],
      explanation: 'Clasificación básica de las partes del cuerpo.'
    } as any
  },
  {
    id: 'a1-u18-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'El corazón bombea',
      instructions: 'Completa con la palabra para "corazón".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ beats fast.',
          correctAnswer: 'heart',
          explanation: '"Heart" es corazón. "Beats" se refiere a los latidos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u18-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Anatomy',
    topicName: 'Body Parts',
    difficulty: 'hard',
    content: {
      title: 'Repaso Final',
      instructions: '¿Qué palabra NO es una parte del cuerpo?',
      questions: [
        {
          id: 'q1',
          question: 'Which word is NOT a body part?',
          options: ['table', 'head', 'arm'],
          correctAnswer: 0,
          explanation: '"Table" (mesa) es un mueble, no una parte de nuestra anatomía.'
        }
      ]
    }
  }
];
