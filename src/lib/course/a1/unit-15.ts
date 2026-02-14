import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 15: Animals
 */

export const UNIT_15_EXERCISES: Exercise[] = [
  {
    id: 'a1-u15-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      title: 'Mi mascota',
      instructions: '¿Cómo se dice "perro" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I have a pet ________.',
          options: ['dog', 'cat', 'bird'],
          correctAnswer: 0,
          explanation: '"Dog" es perro. Es una de las mascotas más populares.'
        }
      ]
    }
  },
  {
    id: 'a1-u15-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Gato',
          back: 'Cat',
          example: 'The cat is sleeping.',
          pronunciation: '/kæt/',
          explanation: '"Cat" es gato. Son animales independientes y cariñosos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      title: 'Tengo un gato',
      instructions: 'Ordena las palabras para decir "Yo tengo un gato".',
      sentences: [
        {
          id: 's1',
          words: ['cat', 'a', 'have', 'I'],
          correctSentence: 'I have a cat',
          translation: 'Yo tengo un gato.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos "have" para expresar posesión de una mascota.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e4',
    type: 'matching',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      title: 'Mascotas Comunes',
      instructions: 'Une cada animal con su traducción.',
      pairs: [
        { id: 'p1', left: 'Rabbit', right: 'Conejo' },
        { id: 'p2', left: 'Hamster', right: 'Hámster' },
        { id: 'p3', left: 'Bird', right: 'Pájaro' },
        { id: 'p4', left: 'Fish', right: 'Pez' },
        { id: 'p5', left: 'Turtle', right: 'Tortuga' }
      ],
      explanation: 'Estas son mascotas pequeñas que mucha gente tiene en casa.'
    } as any
  },
  {
    id: 'a1-u15-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Bird',
      instructions: 'Di la palabra para "pájaro".',
      questions: [
        {
          id: 'q1',
          text: 'Bird',
          phonetic: '/bɜːd/',
          translation: 'Pájaro',
          explanation: 'La "ir" suena como una "e" larga y sorda.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e6',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      title: 'El mejor amigo',
      instructions: 'Completa con la palabra para "perro".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is barking.',
          correctAnswer: 'dog',
          explanation: '"Barking" es ladrando, la acción típica de un perro.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      title: 'Animales salvajes',
      instructions: '¿Cuál de estos es el "rey de la selva"?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is the king of the jungle.',
          options: ['lion', 'tiger', 'monkey'],
          correctAnswer: 0,
          explanation: '"Lion" es león. Es conocido por ser un gran depredador.'
        }
      ]
    }
  },
  {
    id: 'a1-u15-e8',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      title: 'El elefante es grande',
      instructions: 'Ordena para decir "El elefante es grande".',
      sentences: [
        {
          id: 's1',
          words: ['big', 'is', 'elephant', 'the', 'The'],
          correctSentence: 'The elephant is big',
          translation: 'El elefante es grande.',
          hint: 'Empieza con "The".',
          explanation: 'Usamos adjetivos como "big" para describir animales.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Mono',
          back: 'Monkey',
          example: 'The monkey eats a banana.',
          pronunciation: '/ˈmʌŋ.ki/',
          explanation: '"Monkey" es mono. ¡Cuidado con no pronunciar la "e" final!'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e10',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      title: 'Animales altos',
      instructions: '¿Qué animal tiene el cuello muy largo?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is very tall.',
          options: ['giraffe', 'elephant', 'zebra'],
          correctAnswer: 0,
          explanation: '"Giraffe" es jirafa. Es el animal terrestre más alto.'
        }
      ]
    }
  },
  {
    id: 'a1-u15-e11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'La selva',
      instructions: 'Escribe la palabra para "león".',
      questions: [
        {
          id: 'q1',
          question: 'I saw a ________ in the zoo.',
          correctAnswer: 'lion',
          explanation: '"Lion" se escribe casi igual que en español.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Animales de la Sabana',
      instructions: 'Une cada animal salvaje con su traducción.',
      pairs: [
        { id: 'p1', left: 'Zebra', right: 'Cebra' },
        { id: 'p2', left: 'Hippopotamus', right: 'Hipopótamo' },
        { id: 'p3', left: 'Crocodile', right: 'Cocodrilo' },
        { id: 'p4', left: 'Snake', right: 'Serpiente' },
        { id: 'p5', left: 'Elephant', right: 'Elefante' }
      ],
      explanation: 'Estos son algunos de los animales más famosos de África.'
    } as any
  },
  {
    id: 'a1-u15-e13',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Snake',
      instructions: 'Di la palabra para "serpiente".',
      questions: [
        {
          id: 'q1',
          text: 'Snake',
          phonetic: '/sneɪk/',
          translation: 'Serpiente',
          explanation: 'La "a" suena como "ei" (/eɪ/).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e14',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Las cebras son blancas y negras',
      instructions: 'Ordena para decir "Las cebras son blancas y negras".',
      sentences: [
        {
          id: 's1',
          words: ['black', 'and', 'white', 'are', 'Zebras'],
          correctSentence: 'Zebras are white and black',
          translation: 'Las cebras son blancas y negras.',
          hint: 'Empieza con "Zebras".',
          explanation: 'Usamos "and" para conectar dos colores o adjetivos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Animales marinos',
      instructions: '¿Qué animal vive en el océano?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ lives in the ocean.',
          options: ['whale', 'horse', 'cow'],
          correctAnswer: 0,
          explanation: '"Whale" es ballena. Es un mamífero marino gigante.'
        }
      ]
    }
  },
  {
    id: 'a1-u15-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Delfín',
          back: 'Dolphin',
          example: 'Dolphins are very smart.',
          pronunciation: '/ˈdɒl.fɪn/',
          explanation: '"Dolphin" es delfín. Son conocidos por su inteligencia y amabilidad.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e17',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Mamíferos gigantes',
      instructions: 'Escribe la palabra para "ballena".',
      questions: [
        {
          id: 'q1',
          question: 'The blue ________ is very big.',
          correctAnswer: 'whale',
          explanation: '"Whale" se pronuncia con una "h" muda después de la "w".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e18',
    type: 'matching',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Animales de Granja',
      instructions: 'Une cada animal de granja con su traducción.',
      pairs: [
        { id: 'p1', left: 'Cow', right: 'Vaca' },
        { id: 'p2', left: 'Pig', right: 'Cerdo' },
        { id: 'p3', left: 'Horse', right: 'Caballo' },
        { id: 'p4', left: 'Chicken', right: 'Pollo/Gallina' },
        { id: 'p5', left: 'Sheep', right: 'Oveja' }
      ],
      explanation: 'Estos animales son criados habitualmente por el ser humano.'
    } as any
  },
  {
    id: 'a1-u15-e19',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Leche de vaca',
      instructions: '¿Qué animal nos da leche?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ gives us milk.',
          options: ['cow', 'cat', 'dog'],
          correctAnswer: 0,
          explanation: '"Cow" es vaca. Es un animal de granja muy común.'
        }
      ]
    }
  },
  {
    id: 'a1-u15-e20',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Horse',
      instructions: 'Di la palabra para "caballo".',
      questions: [
        {
          id: 'q1',
          text: 'Horse',
          phonetic: '/hɔːs/',
          translation: 'Caballo',
          explanation: 'La "h" se pronuncia como una aspiración suave.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e21',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'El cerdo es rosa',
      instructions: 'Ordena para decir "El cerdo es rosa".',
      sentences: [
        {
          id: 's1',
          words: ['pink', 'is', 'pig', 'the', 'The'],
          correctSentence: 'The pig is pink',
          translation: 'El cerdo es rosa.',
          hint: 'Empieza con "The".',
          explanation: '"Pig" es cerdo. Asociamos el color rosa a este animal.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e22',
    type: 'flashcard',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Oveja',
          back: 'Sheep',
          example: 'The sheep has white wool.',
          pronunciation: '/ʃiːp/',
          explanation: '"Sheep" es tanto singular como plural (one sheep, two sheep).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'hard',
    content: {
      title: 'Lana de oveja',
      instructions: 'Escribe la palabra para "oveja".',
      questions: [
        {
          id: 'q1',
          question: 'We get wool from ________.',
          answer: 'sheep',
          explanation: '"Sheep" tiene una doble "e" que suena como una "i" larga.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e24',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      title: 'Aves de corral',
      instructions: '¿Cómo se dice "pollo"?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ says cluck.',
          options: ['chicken', 'fish', 'tiger'],
          correctAnswer: 0,
          explanation: '"Chicken" se refiere al pollo o la gallina.'
        }
      ]
    }
  },
  {
    id: 'a1-u15-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'hard',
    content: {
      title: 'Animales del Bosque',
      instructions: 'Une cada animal con su traducción.',
      pairs: [
        { id: 'p1', left: 'Bear', right: 'Oso' },
        { id: 'p2', left: 'Wolf', right: 'Lobo' },
        { id: 'p3', left: 'Fox', right: 'Zorro' },
        { id: 'p4', left: 'Deer', right: 'Ciervo' },
        { id: 'p5', left: 'Squirrel', right: 'Ardilla' }
      ],
      explanation: 'Estos animales viven habitualmente en zonas boscosas o de montaña.'
    } as any
  },
  {
    id: 'a1-u15-e26',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Bear',
      instructions: 'Di la palabra para "oso".',
      questions: [
        {
          id: 'q1',
          text: 'Bear',
          phonetic: '/beər/',
          translation: 'Oso',
          explanation: '¡Cuidado! Se pronuncia igual que "bare" (desnudo), no como "beer" (cerveza).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e27',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'hard',
    content: {
      title: 'El zorro es astuto',
      instructions: 'Ordena para decir "El zorro es muy astuto".',
      sentences: [
        {
          id: 's1',
          words: ['clever', 'very', 'is', 'fox', 'the', 'The'],
          correctSentence: 'The fox is very clever',
          translation: 'El zorro es muy astuto.',
          hint: 'Empieza con "The".',
          explanation: '"Clever" significa inteligente o astuto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e28',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Animales nocturnos',
      instructions: '¿Qué animal vuela de noche?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ flies at night.',
          options: ['bat', 'butterfly', 'bee'],
          correctAnswer: 0,
          explanation: '"Bat" es murciélago. También significa "bate" (de béisbol).'
        }
      ]
    }
  },
  {
    id: 'a1-u15-e29',
    type: 'flashcard',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Ardilla',
          back: 'Squirrel',
          example: 'The squirrel collects nuts.',
          pronunciation: '/ˈskwɪr.əl/',
          explanation: '"Squirrel" es ardilla. Es una palabra con una pronunciación interesante.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e30',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'hard',
    content: {
      title: 'El lobo aúlla',
      instructions: 'Escribe la palabra para "lobo".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is howling.',
          answer: 'wolf',
          explanation: '"Wolf" en plural es "wolves".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Insectos',
      instructions: '¿Cómo se dice "abeja"?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ makes honey.',
          options: ['bee', 'ant', 'spider'],
          correctAnswer: 0,
          explanation: '"Bee" es abeja. Son vitales para el ecosistema.'
        }
      ]
    }
  },
  {
    id: 'a1-u15-e32',
    type: 'matching',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Insectos y Bichos',
      instructions: 'Une cada insecto con su traducción.',
      pairs: [
        { id: 'p1', left: 'Butterfly', right: 'Mariposa' },
        { id: 'p2', left: 'Ant', right: 'Hormiga' },
        { id: 'p3', left: 'Spider', right: 'Araña' },
        { id: 'p4', left: 'Bee', right: 'Abeja' },
        { id: 'p5', left: 'Mosquito', right: 'Mosquito' }
      ],
      explanation: 'Este vocabulario te ayudará a identificar pequeños animales.'
    } as any
  },
  {
    id: 'a1-u15-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Butterfly',
      instructions: 'Di la palabra para "mariposa".',
      questions: [
        {
          id: 'q1',
          text: 'Butterfly',
          phonetic: '/ˈbʌt.ə.flaɪ/',
          translation: 'Mariposa',
          explanation: 'Viene de "butter" (mantequilla) y "fly" (volar/mosca).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e34',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Tengo miedo a las arañas',
      instructions: 'Ordena para decir "Yo tengo miedo a las arañas".',
      sentences: [
        {
          id: 's1',
          words: ['spiders', 'of', 'scared', 'am', 'I'],
          correctSentence: 'I am scared of spiders',
          translation: 'Tengo miedo a las arañas.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos "scared of" para indicar a qué tenemos miedo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e35',
    type: 'flashcard',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Araña',
          back: 'Spider',
          example: 'There is a spider on the wall.',
          pronunciation: '/ˈspaɪ.dər/',
          explanation: '"Spider" tiene ocho patas.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Animales de sangre fría',
      instructions: '¿Cómo se dice "rana"?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is green.',
          options: ['frog', 'cat', 'pig'],
          correctAnswer: 0,
          explanation: '"Frog" es rana. Les gusta el agua y saltar.'
        }
      ]
    }
  },
  {
    id: 'a1-u15-e37',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Hormigas trabajadoras',
      instructions: 'Escribe la palabra para "hormiga".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is very small.',
          answer: 'ant',
          explanation: '"Ant" es una de las palabras más cortas para animales.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e38',
    type: 'matching',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Partes de un Animal',
      instructions: 'Une cada parte del cuerpo con su traducción.',
      pairs: [
        { id: 'p1', left: 'Tail', right: 'Cola' },
        { id: 'p2', left: 'Wings', right: 'Alas' },
        { id: 'p3', left: 'Fur', right: 'Pelaje' },
        { id: 'p4', left: 'Paws', right: 'Patas (de gato/perro)' },
        { id: 'p5', left: 'Beak', right: 'Pico' }
      ],
      explanation: 'Estas palabras te ayudan a describir cómo es un animal.'
    } as any
  },
  {
    id: 'a1-u15-e39',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Tail',
      instructions: 'Di la palabra para "cola".',
      questions: [
        {
          id: 'q1',
          text: 'Tail',
          phonetic: '/teɪl/',
          translation: 'Cola',
          explanation: 'La "ai" suena como "ei" (/eɪ/).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e40',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'hard',
    content: {
      title: 'El pájaro tiene alas',
      instructions: 'Ordena para decir "El pájaro tiene alas".',
      sentences: [
        {
          id: 's1',
          words: ['wings', 'has', 'bird', 'the', 'The'],
          correctSentence: 'The bird has wings',
          translation: 'El pájaro tiene alas.',
          hint: 'Empieza con "The".',
          explanation: 'Usamos "has" para la tercera persona del singular.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e41',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Sonidos de animales',
      instructions: '¿Qué animal ladra (barks)?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ barks.',
          options: ['dog', 'cat', 'lion'],
          correctAnswer: 0,
          explanation: '"Bark" es la onomatopeya del ladrido del perro.'
        }
      ]
    }
  },
  {
    id: 'a1-u15-e42',
    type: 'flashcard',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Ladrar',
          back: 'Bark',
          example: 'Dogs bark at strangers.',
          pronunciation: '/bɑːk/',
          explanation: '"Bark" también significa "corteza de árbol".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e43',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'hard',
    content: {
      title: 'El maullido',
      instructions: 'Escribe el verbo para "maullar".',
      questions: [
        {
          id: 'q1',
          question: 'Cats ________ when they are hungry.',
          correctAnswer: 'meow',
          explanation: '"Meow" es el sonido que hacen los gatos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Acciones de aves',
      instructions: '¿Cómo se dice "cantar" (para un pájaro)?',
      questions: [
        {
          id: 'q1',
          question: 'The bird ________ every morning.',
          options: ['sings', 'barks', 'runs'],
          correctAnswer: 0,
          explanation: '"Sing" es cantar. Los pájaros cantan al amanecer.'
        }
      ]
    }
  },
  {
    id: 'a1-u15-e45',
    type: 'matching',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Más Animales del Mundo',
      instructions: 'Une cada animal con su traducción.',
      pairs: [
        { id: 'p1', left: 'Kangaroo', right: 'Canguro' },
        { id: 'p2', left: 'Penguin', right: 'Pingüino' },
        { id: 'p3', left: 'Panda', right: 'Panda' },
        { id: 'p4', left: 'Polar bear', right: 'Oso polar' },
        { id: 'p5', left: 'Koala', right: 'Coala' }
      ],
      explanation: 'Estos son animales exóticos de diferentes partes del planeta.'
    } as any
  },
  {
    id: 'a1-u15-e46',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Penguin',
      instructions: 'Di la palabra para "pingüino".',
      questions: [
        {
          id: 'q1',
          text: 'Penguin',
          phonetic: '/ˈpeŋ.ɡwɪn/',
          translation: 'Pingüino',
          explanation: 'La acentuación está en la primera sílaba: PEN-guin.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'hard',
    content: {
      title: 'El panda come bambú',
      instructions: 'Ordena para decir "El panda come bambú".',
      sentences: [
        {
          id: 's1',
          words: ['bamboo', 'eats', 'panda', 'the', 'The'],
          correctSentence: 'The panda eats bamboo',
          translation: 'El panda come bambú.',
          hint: 'Empieza con "The".',
          explanation: '"Bamboo" es el alimento principal de los pandas.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'easy',
    content: {
      title: 'Saltar como un canguro',
      instructions: '¿Qué animal salta mucho?',
      questions: [
        {
          id: 'q1',
          question: 'A ________ can jump very high.',
          options: ['kangaroo', 'fish', 'cow'],
          correctAnswer: 0,
          explanation: '"Kangaroo" es el animal más famoso de Australia.'
        }
      ]
    }
  },
  {
    id: 'a1-u15-e49',
    type: 'flashcard',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Mascota',
          back: 'Pet',
          example: 'I love my pet dog.',
          pronunciation: '/pet/',
          explanation: '"Pet" es el término general para cualquier animal doméstico de compañía.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u15-e50',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Animals',
    topicName: 'Pets & Wildlife',
    difficulty: 'hard',
    content: {
      title: 'Tu animal favorito',
      instructions: 'Escribe la palabra para "animal".',
      questions: [
        {
          id: 'q1',
          question: 'What is your favorite ________?',
          correctAnswer: 'animal',
          explanation: '"Animal" se escribe igual en inglés y español.'
        }
      ]
    } as any
  }
];
