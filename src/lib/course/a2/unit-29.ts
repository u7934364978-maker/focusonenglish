import { Exercise } from '@/lib/exercise-generator';

export const UNIT_29_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Literary Genres (1-12) ---
  {
    id: 'a2-u29-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Novela',
          back: 'Novel',
          example: 'I am reading a long novel.',
          pronunciation: '/ˈnɒvəl/',
          explanation: 'Un libro de ficción largo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      title: 'Book Genres',
      instructions: 'Une el género con su traducción.',
      pairs: [
        { id: '1', left: 'Poetry', right: 'Poesía' },
        { id: '2', left: 'Biography', right: 'Biografía' },
        { id: '3', left: 'Mystery', right: 'Misterio' },
        { id: '4', left: 'Fairy tale', right: 'Cuento de hadas' },
        { id: '5', left: 'Science fiction', right: 'Ciencia ficción' }
      ],
      explanation: 'Diferentes tipos de libros.'
    } as any
  },
  {
    id: 'a2-u29-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      title: 'Authors',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The person who writes a book is the ___ .',
          options: ['author', 'reader', 'character'],
          correctAnswer: 0,
          explanation: '"Author" es el autor o escritor.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      title: 'Story parts',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'The main ___ in the story is a brave knight.',
          correctAnswer: 'character',
          explanation: '"Character" es un personaje.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Plot',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'plot', 'of', 'the', 'story', 'is', 'very', 'interesting', '.'],
          correctSentence: 'The plot of the story is very interesting.',
          translation: 'La trama de la historia es muy interesante.',
          hint: 'Usa "plot".',
          explanation: '"Plot" significa trama o argumento.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Capítulo',
          back: 'Chapter',
          example: 'I just finished the first chapter.',
          pronunciation: '/ˈtʃæptə/',
          explanation: 'Una de las partes en que se divide un libro.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Library',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I went to the ___ to borrow some books.',
          options: ['library', 'bookstore', 'school'],
          correctAnswer: 0,
          explanation: '"Library" es biblioteca (donde pides prestado). "Bookstore" es librería (donde compras).'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Novel',
      instructions: 'Di "I am reading a novel".',
      questions: [
        {
          id: 'q1',
          text: 'I am reading a novel',
          correctAnswer: 'I am reading a novel',
          explanation: 'Pronuncia "novel" como /ˈnɒvəl/.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Reviewing',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The book received a very good ___ in the newspaper.',
          correctAnswer: 'review',
          explanation: '"Review" es una reseña o crítica.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Best-seller',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['This', 'book', 'is', 'a', 'global', 'best-seller', '.'],
          correctSentence: 'This book is a global best-seller.',
          translation: 'Este libro es un éxito de ventas mundial.',
          hint: 'Usa "best-seller".',
          explanation: '"Best-seller" se refiere a un libro muy vendido.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e11',
    type: 'matching',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Parts of a Book',
      instructions: 'Une la parte con su definición.',
      pairs: [
        { id: '1', left: 'Cover', right: 'The outside of the book' },
        { id: '2', left: 'Title', right: 'The name of the book' },
        { id: '3', left: 'Page', right: 'One sheet of paper' },
        { id: '4', left: 'Blurb', right: 'Description on the back' }
      ],
      explanation: 'Elementos físicos de un libro.'
    } as any
  },
  {
    id: 'a2-u29-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'hard',
    content: {
      title: 'Non-fiction',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ books are based on real facts.',
          options: ['Non-fiction', 'Fiction', 'Fantasy'],
          correctAnswer: 0,
          explanation: '"Non-fiction" son libros de no ficción (basados en hechos reales).'
        }
      ]
    }
  },

  // --- SUB-TOPIC 2: Narrative Tenses (Past Simple & Continuous) (13-24) ---
  {
    id: 'a2-u29-e13',
    type: 'flashcard',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Había una vez...',
          back: 'Once upon a time...',
          example: 'Once upon a time, there was a king.',
          pronunciation: '/wʌns əˈpɒn ə taɪm/',
          explanation: 'Frase típica para empezar un cuento.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e14',
    type: 'matching',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      title: 'Narrative Tenses Use',
      instructions: 'Une el tiempo con su función.',
      pairs: [
        { id: '1', left: 'Past Simple', right: 'The main events of the story' },
        { id: '2', left: 'Past Continuous', right: 'Background description' },
        { id: '3', left: 'Past Simple (short)', right: 'Interrupting action' }
      ],
      explanation: 'Uso de los tiempos verbales para contar historias.'
    } as any
  },
  {
    id: 'a2-u29-e15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Setting the scene',
      instructions: 'Elige la forma correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The sun ___ and the birds ___ when he woke up.',
          options: ['was shining / were singing', 'shone / sang', 'shines / sing'],
          correctAnswer: 0,
          explanation: 'Usamos Past Continuous para describir el ambiente.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e16',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Interrupting',
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          id: 'q1',
          text: 'While I was reading, the phone ___ (ring).',
          correctAnswer: 'rang',
          explanation: 'La acción que interrumpe va en Past Simple.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e17',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Story event',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'opened', 'the', 'door', 'and', 'entered', '.'],
          correctSentence: 'He opened the door and entered.',
          translation: 'Abrió la puerta y entró.',
          hint: 'Acciones consecutivas.',
          explanation: 'Para acciones una tras otra usamos Past Simple.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e18',
    type: 'flashcard',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Mientras',
          back: 'While',
          example: 'While they were sleeping, someone came.',
          pronunciation: '/waɪl/',
          explanation: 'Introduce acciones largas en pasado continuo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'When vs While',
      instructions: 'Elige la palabra correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I was walking in the park ___ I saw a dragon.',
          options: ['when', 'while', 'during'],
          correctAnswer: 0,
          explanation: 'Usamos "when" antes de una acción corta en pasado simple.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e20',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: While',
      instructions: 'Di "While I was reading".',
      questions: [
        {
          id: 'q1',
          text: 'While I was reading',
          correctAnswer: 'While I was reading',
          explanation: 'Asegúrate de pronunciar la "h" muda en "while": /waɪl/.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e21',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'hard',
    content: {
      title: 'Past Continuous',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'What ___ you ___ (do) when the storm started?',
          correctAnswer: 'were doing',
          explanation: 'Pregunta en pasado continuo.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e22',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Ending a story',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['They', 'lived', 'happily', 'ever', 'after', '.'],
          correctSentence: 'They lived happily ever after.',
          translation: 'Vivieron felices para siempre.',
          hint: 'Frase típica final.',
          explanation: 'Final clásico de los cuentos de hadas.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e23',
    type: 'matching',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Tense practice',
      instructions: 'Une la mitad de la frase.',
      pairs: [
        { id: '1', left: 'I was sleeping', right: 'when I heard a noise' },
        { id: '2', left: 'She opened her eyes', right: 'and saw the sun' },
        { id: '3', left: 'While we were eating', right: 'it started to rain' },
        { id: '4', left: 'The king was sitting', right: 'on his throne' }
      ],
      explanation: 'Combinaciones de pasado simple y continuo.'
    } as any
  },
  {
    id: 'a2-u29-e24',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'hard',
    content: {
      title: 'Correct Tense',
      instructions: '¿Cuál es correcta?',
      questions: [
        {
          id: 'q1',
          question: '___ she ___ (cry) in the end of the story?',
          options: ['Was / crying', 'Did / cry', 'Does / cry'],
          correctAnswer: 1,
          explanation: 'Pregunta sobre un evento final puntual -> Past Simple.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 3: Storytelling Vocabulary (25-36) ---
  {
    id: 'a2-u29-e25',
    type: 'flashcard',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Escenario / Ambientación',
          back: 'Setting',
          example: 'The setting of the novel is London in 1850.',
          pronunciation: '/ˈsetɪŋ/',
          explanation: 'Lugar y tiempo donde ocurre la historia.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e26',
    type: 'matching',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      title: 'Story elements',
      instructions: 'Une el elemento con su traducción.',
      pairs: [
        { id: '1', left: 'Hero', right: 'Héroe' },
        { id: '2', left: 'Villain', right: 'Villano' },
        { id: '3', left: 'Conflict', right: 'Conflicto' },
        { id: '4', left: 'Ending', right: 'Final' },
        { id: '5', left: 'Dialogue', right: 'Diálogo' }
      ],
      explanation: 'Componentes de una narración.'
    } as any
  },
  {
    id: 'a2-u29-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      title: 'Type of story',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'A ___ story is intended to make you laugh.',
          options: ['funny', 'scary', 'sad'],
          correctAnswer: 0,
          explanation: '"Funny" es divertido/gracioso.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      title: 'Narration',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'The author is telling the story from the first person ___ .',
          correctAnswer: 'point of view',
          explanation: '"Point of view" es punto de vista.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e29',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Surprise',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'story', 'has', ' a', 'very', 'surprising', 'end', '.'],
          correctSentence: 'The story has a very surprising end.',
          translation: 'La historia tiene un final muy sorprendente.',
          hint: 'Usa "surprising".',
          explanation: 'Descripción de una característica de la historia.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e30',
    type: 'flashcard',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Resumen',
          back: 'Summary',
          example: 'Can you give me a summary of the book?',
          pronunciation: '/ˈsʌməri/',
          explanation: 'Versión corta de la historia.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e31',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Emotion in books',
      instructions: 'Elige la palabra correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The ending was so ___ that I cried.',
          options: ['moving', 'boring', 'happy'],
          correctAnswer: 0,
          explanation: '"Moving" significa conmovedor o emocionante.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e32',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Character',
      instructions: 'Di "He is my favorite character".',
      questions: [
        {
          id: 'q1',
          text: 'He is my favorite character',
          correctAnswer: 'He is my favorite character',
          explanation: 'La "ch" suena como "k": /ˈkærɪktə/.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e33',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Inspiration',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'This movie is ___ on a true story.',
          correctAnswer: 'based',
          explanation: '"Based on a true story" significa basado en una historia real.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e34',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Reading habit',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'love', 'reading', 'mysteries', 'at', 'night', '.'],
          correctSentence: 'I love reading mysteries at night.',
          translation: 'Me encanta leer misterios por la noche.',
          hint: 'Usa el plural.',
          explanation: 'Gusto personal por un género.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e35',
    type: 'matching',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Story Connectors',
      instructions: 'Une el conector con su uso.',
      pairs: [
        { id: '1', left: 'Suddenly', right: 'For unexpected events' },
        { id: '2', left: 'At first', right: 'For the beginning' },
        { id: '3', left: 'Then / Next', right: 'For the next action' },
        { id: '4', left: 'In the end', right: 'For the result' }
      ],
      explanation: 'Palabras para dar orden a la historia.'
    } as any
  },
  {
    id: 'a2-u29-e36',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'hard',
    content: {
      title: 'Book features',
      instructions: 'Elige la mejor opción.',
      questions: [
        {
          id: 'q1',
          question: 'The book was a ___ ; I couldn’t stop reading.',
          options: ['page-turner', 'boring', 'summary'],
          correctAnswer: 0,
          explanation: '"Page-turner" es un libro muy adictivo.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 4: Famous Stories (37-45) ---
  {
    id: 'a2-u29-e37',
    type: 'flashcard',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Obra maestra',
          back: 'Masterpiece',
          example: 'Don Quixote is a literary masterpiece.',
          pronunciation: '/ˈmɑːstəpiːs/',
          explanation: 'La mejor obra de un autor.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e38',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Shakespeare',
      instructions: 'Elige la palabra correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Shakespeare wrote many famous ___ .',
          options: ['plays', 'playings', 'players'],
          correctAnswer: 0,
          explanation: '"Plays" son las obras de teatro.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Drama',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Romeo and Juliet is a famous ___ .',
          correctAnswer: 'tragedy',
          explanation: '"Tragedy" es tragedia (historia con final triste).'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Harry Potter',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['J.K. Rowling', 'is', 'the', 'author', 'of', 'Harry', 'Potter', '.'],
          correctSentence: 'J.K. Rowling is the author of Harry Potter.',
          translation: 'J.K. Rowling es la autora de Harry Potter.',
          hint: 'Usa "author".',
          explanation: 'Identificación de autoría.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e41',
    type: 'matching',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Famous Characters',
      instructions: 'Une el personaje con su descripción.',
      pairs: [
        { id: '1', left: 'Sherlock Holmes', right: 'A brilliant detective' },
        { id: '2', left: 'Dracula', right: 'A scary vampire' },
        { id: '3', left: 'Cinderella', right: 'A girl with a glass shoe' },
        { id: '4', left: 'Robin Hood', right: 'A hero who stole from the rich' }
      ],
      explanation: 'Personajes literarios icónicos.'
    } as any
  },
  {
    id: 'a2-u29-e42',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Comics',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'A book with drawings and text bubbles is a ___ .',
          options: ['comic book', 'novel', 'biography'],
          correctAnswer: 0,
          explanation: '"Comic book" es un cómic o tebeo.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e43',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Tragedy',
      instructions: 'Di "It is a great tragedy".',
      questions: [
        {
          id: 'q1',
          text: 'It is a great tragedy',
          correctAnswer: 'It is a great tragedy',
          explanation: 'Pronuncia "tragedy" como /ˈtrædʒədi/.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e44',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'hard',
    content: {
      title: 'Fable',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'A story with animals that teaches a lesson is a ___ .',
          correctAnswer: 'fable',
          explanation: '"Fable" es una fábula.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e45',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'hard',
    content: {
      title: 'Literature history',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'novel', 'was', 'published', 'in', 'the', 'nineteenth', 'century', '.'],
          correctSentence: 'The novel was published in the nineteenth century.',
          translation: 'La novela fue publicada en el siglo diecinueve.',
          hint: 'Usa voz pasiva.',
          explanation: '"Was published" es fue publicada.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mixed Practice (46-50) ---
  {
    id: 'a2-u29-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Mixed Review',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ (read) a book when you ___ (call).',
          options: ['was reading / called', 'read / called', 'was reading / were calling'],
          correctAnswer: 0,
          explanation: 'Acción continua interrumpida por una puntual.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Author review',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The ___ of this biography is very famous.',
          correctAnswer: 'author',
          explanation: '"Author" es autor.'
        }
      ]
    }
  },
  {
    id: 'a2-u29-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Connector review',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Suddenly', ',', 'the', 'hero', 'found', ' the', 'secret', 'key', '.'],
          correctSentence: 'Suddenly, the hero found the secret key.',
          translation: 'De repente, el héroe encontró la llave secreta.',
          hint: 'Usa "Suddenly".',
          explanation: 'Uso de adverbio narrativo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u29-e49',
    type: 'matching',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'medium',
    content: {
      title: 'Genre Review',
      instructions: 'Une el libro con su género.',
      pairs: [
        { id: '1', left: 'Harry Potter', right: 'Fantasy' },
        { id: '2', left: 'Sherlock Holmes', right: 'Mystery' },
        { id: '3', left: 'Cinderella', right: 'Fairy tale' },
        { id: '4', left: 'Life of Steve Jobs', right: 'Biography' }
      ],
      explanation: 'Consolidación de géneros literarios.'
    } as any
  },
  {
    id: 'a2-u29-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Literature & Stories',
    topicName: 'Literature & Stories',
    difficulty: 'hard',
    content: {
      title: 'Final Challenge',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ upon a time, there ___ a powerful queen.',
          options: ['Once / was', 'One / was', 'When / were'],
          correctAnswer: 0,
          explanation: 'Inicio clásico de historia.'
        }
      ]
    }
  }
];
