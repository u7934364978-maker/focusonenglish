import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 10: Clothes
 */

export const UNIT_10_EXERCISES: Exercise[] = [
  {
    id: 'a1-u10-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'easy',
    content: {
      title: 'Llevo una camiseta',
      instructions: '¿Cómo se dice "camiseta" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I am wearing a ________.',
          options: ['T-shirt', 'shirt', 'pants'],
          correctAnswer: 0,
          explanation: '"T-shirt" es camiseta. Se llama así por su forma de "T".'
        }
      ]
    }
  },
  {
    id: 'a1-u10-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Pantalones',
          back: 'Pants / Trousers',
          example: 'I like your blue pants.',
          pronunciation: '/pænts/',
          explanation: 'En EE.UU. se dice "pants" y en el Reino Unido "trousers". Siempre son plurales.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'easy',
    content: {
      title: 'Me gusta tu vestido',
      instructions: 'Ordena las palabras para decir "Me gusta tu vestido".',
      sentences: [
        {
          id: 's1',
          words: ['dress', 'your', 'like', 'I'],
          correctSentence: 'I like your dress',
          translation: 'Me gusta tu vestido.',
          hint: 'Empieza con "I".',
          explanation: '"Dress" es vestido. Usamos "like" para expresar que algo nos gusta.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e4',
    type: 'matching',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'easy',
    content: {
      title: 'Ropa básica',
      instructions: 'Une cada prenda con su traducción.',
      pairs: [
        { id: 'p1', left: 'Shoes', right: 'Zapatos' },
        { id: 'p2', left: 'Socks', right: 'Calcetines' },
        { id: 'p3', left: 'Hat', right: 'Sombrero/Gorra' },
        { id: 'p4', left: 'Coat', right: 'Abrigo' },
        { id: 'p5', left: 'Skirt', right: 'Falda' }
      ],
      explanation: 'Estas son las prendas más comunes que usamos a diario.'
    } as any
  },
  {
    id: 'a1-u10-e6',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'easy',
    content: {
      title: 'Zapatos nuevos',
      instructions: 'Completa la frase con la palabra para "zapatos".',
      questions: [
        {
          id: 'q1',
          question: 'I have new ________.',
          answer: 'shoes',
          explanation: '"Shoes" es zapatos. Al igual que los pantalones, suele usarse en plural.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'easy',
    content: {
      title: 'Llevar puesto',
      instructions: '¿Qué verbo usamos para decir que llevamos puesta una prenda?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ a red hat.',
          options: ['am wearing', 'am having', 'am using'],
          correctAnswer: 0,
          explanation: 'En inglés se usa el verbo "wear" para la ropa, no "use".'
        }
      ]
    }
  },
  {
    id: 'a1-u10-e8',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'easy',
    content: {
      title: 'Ella lleva una falda',
      instructions: 'Ordena para decir "Ella lleva puesta una falda".',
      sentences: [
        {
          id: 's1',
          words: ['skirt', 'a', 'wearing', 'is', 'She'],
          correctSentence: 'She is wearing a skirt',
          translation: 'Ella lleva puesta una falda.',
          hint: 'Empieza con "She".',
          explanation: 'Usamos el presente continuo (is wearing) para describir lo que alguien lleva puesto ahora.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Camisa',
          back: 'Shirt',
          example: 'A white shirt for the office.',
          pronunciation: '/ʃɜːt/',
          explanation: '"Shirt" suele referirse a una camisa de botones, a diferencia de "T-shirt".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e10',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'easy',
    content: {
      title: '¿Qué es un "coat"?',
      instructions: '¿Cuál es la traducción correcta?',
      questions: [
        {
          id: 'q1',
          question: 'It is cold. I need a coat.',
          options: ['Abrigo', 'Camiseta', 'Calcetín'],
          correctAnswer: 0,
          explanation: '"Coat" es un abrigo o chaqueta larga para el frío.'
        }
      ]
    }
  },
  {
    id: 'a1-u10-e11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Calcetines blancos',
      instructions: 'Escribe la palabra para "calcetines".',
      questions: [
        {
          id: 'q1',
          question: 'I need white ________.',
          answer: 'socks',
          explanation: '"Socks" son calcetines. Se pronuncia igual que "Sox".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Colores y Ropa',
      instructions: 'Une la descripción con la prenda.',
      pairs: [
        { id: 'p1', left: 'Blue jeans', right: 'Vaqueros azules' },
        { id: 'p2', left: 'Red tie', right: 'Corbata roja' },
        { id: 'p3', left: 'Black boots', right: 'Botas negras' },
        { id: 'p4', left: 'Yellow scarf', right: 'Bufanda amarilla' },
        { id: 'p5', left: 'White gloves', right: 'Guantes blancos' }
      ],
      explanation: 'En inglés, el color (adjetivo) siempre va delante de la prenda (sustantivo).'
    } as any
  },
  {
    id: 'a1-u10-e14',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Él lleva vaqueros',
      instructions: 'Ordena para decir "Él lleva puestos vaqueros".',
      sentences: [
        {
          id: 's1',
          words: ['jeans', 'wearing', 'is', 'He'],
          correctSentence: 'He is wearing jeans',
          translation: 'Él lleva puestos vaqueros.',
          hint: 'Empieza con "He".',
          explanation: '"Jeans" son vaqueros. Al ser plural, no necesitan el artículo "a".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Ropa de dormir',
      instructions: '¿Cómo se dice "pijama" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I wear my ________ to bed.',
          options: ['pajamas', 'suit', 'uniform'],
          correctAnswer: 0,
          explanation: '"Pajamas" es pijama. También se puede abreviar como "PJs".'
        }
      ]
    }
  },
  {
    id: 'a1-u10-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Cinturón',
          back: 'Belt',
          example: 'I need a brown belt.',
          pronunciation: '/belt/',
          explanation: '"Belt" es cinturón. Es una palabra muy fácil de recordar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e17',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Botas de lluvia',
      instructions: 'Escribe la palabra para "botas".',
      questions: [
        {
          id: 'q1',
          question: 'I wear ________ when it rains.',
          answer: 'boots',
          explanation: '"Boots" son botas. Protegen los pies de la lluvia y el frío.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e18',
    type: 'matching',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Accesorios',
      instructions: 'Une cada accesorio con su nombre.',
      pairs: [
        { id: 'p1', left: 'Watch', right: 'Reloj de pulsera' },
        { id: 'p2', left: 'Glasses', right: 'Gafas' },
        { id: 'p3', left: 'Ring', right: 'Anillo' },
        { id: 'p4', left: 'Bag', right: 'Bolso/Maleta' },
        { id: 'p5', left: 'Umbrella', right: 'Paraguas' }
      ],
      explanation: 'Los accesorios complementan nuestro "outfit" o conjunto de ropa.'
    } as any
  },
  {
    id: 'a1-u10-e19',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: '¿Qué es una "skirt"?',
      instructions: 'Elige la imagen o concepto correcto.',
      questions: [
        {
          id: 'q1',
          question: 'Women often wear a ________.',
          options: ['skirt', 'tie', 'suit'],
          correctAnswer: 0,
          explanation: '"Skirt" es falda. "Tie" es corbata y "suit" es traje.'
        }
      ]
    }
  },
  {
    id: 'a1-u10-e21',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: '¿Dónde están mis zapatos?',
      instructions: 'Ordena las palabras para preguntar "¿Dónde están mis zapatos?".',
      sentences: [
        {
          id: 's1',
          words: ['shoes', 'my', 'are', 'Where'],
          correctSentence: 'Where are my shoes',
          translation: '¿Dónde están mis zapatos?',
          hint: 'Empieza con "Where".',
          explanation: 'Usamos "Where are" porque "shoes" es un sustantivo plural.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e22',
    type: 'flashcard',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Traje',
          back: 'Suit',
          example: 'He wears a suit to work.',
          pronunciation: '/suːt/',
          explanation: '"Suit" es el conjunto de chaqueta y pantalón (o falda) a juego.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'hard',
    content: {
      title: 'Gorra de béisbol',
      instructions: 'Escribe la palabra para "gorra".',
      questions: [
        {
          id: 'q1',
          question: 'I have a baseball ________.',
          answer: 'cap',
          explanation: '"Cap" es una gorra, a diferencia de "hat" que es un sombrero general.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e24',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'easy',
    content: {
      title: 'Bañador',
      instructions: '¿Qué llevas para ir a nadar?',
      questions: [
        {
          id: 'q1',
          question: 'I need a ________ for the pool.',
          options: ['swimsuit', 'jacket', 'tie'],
          correctAnswer: 0,
          explanation: '"Swimsuit" es el traje de baño o bañador.'
        }
      ]
    }
  },
  {
    id: 'a1-u10-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'hard',
    content: {
      title: 'Materiales y Estilos',
      instructions: 'Une el material o estilo con su traducción.',
      pairs: [
        { id: 'p1', left: 'Cotton', right: 'Algodón' },
        { id: 'p2', left: 'Wool', right: 'Lana' },
        { id: 'p3', left: 'Leather', right: 'Cuero' },
        { id: 'p4', left: 'Silk', right: 'Seda' },
        { id: 'p5', left: 'Denim', right: 'Tejido vaquero' }
      ],
      explanation: 'Conocer los materiales te ayuda a entender mejor la calidad de la ropa.'
    } as any
  },
  {
    id: 'a1-u10-e27',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'hard',
    content: {
      title: 'Me pongo la chaqueta',
      instructions: 'Ordena para decir "Me estoy poniendo mi chaqueta".',
      sentences: [
        {
          id: 's1',
          words: ['jacket', 'my', 'on', 'putting', 'am', 'I'],
          correctSentence: 'I am putting on my jacket',
          translation: 'Me estoy poniendo mi chaqueta.',
          hint: 'Empieza con "I".',
          explanation: '"Put on" es el phrasal verb para la acción de vestirse o ponerse algo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e28',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Quitarse la ropa',
      instructions: '¿Cuál es el opuesto de "put on"?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ my shoes at home.',
          options: ['take off', 'put off', 'go off'],
          correctAnswer: 0,
          explanation: '"Take off" es el phrasal verb para quitarse una prenda de ropa.'
        }
      ]
    }
  },
  {
    id: 'a1-u10-e29',
    type: 'flashcard',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Bolsillo',
          back: 'Pocket',
          example: 'My phone is in my pocket.',
          pronunciation: '/ˈpɒk.ɪt/',
          explanation: '"Pocket" es bolsillo. ¡No olvides las llaves!'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e30',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'hard',
    content: {
      title: 'Camisa de seda',
      instructions: 'Escribe la palabra para "seda".',
      questions: [
        {
          id: 'q1',
          question: 'This shirt is made of ________.',
          answer: 'silk',
          explanation: '"Silk" es seda, un material muy suave y elegante.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Tallas de ropa',
      instructions: '¿Qué significa "size" en una tienda?',
      questions: [
        {
          id: 'q1',
          question: 'What ________ are you?',
          options: ['size', 'color', 'price'],
          correctAnswer: 0,
          explanation: '"Size" es la talla. Puede ser Small (S), Medium (M) o Large (L).'
        }
      ]
    }
  },
  {
    id: 'a1-u10-e32',
    type: 'matching',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Tallas en inglés',
      instructions: 'Une la sigla con su significado.',
      pairs: [
        { id: 'p1', left: 'S', right: 'Small (Pequeña)' },
        { id: 'p2', left: 'M', right: 'Medium (Mediana)' },
        { id: 'p3', left: 'L', right: 'Large (Grande)' },
        { id: 'p4', left: 'XL', right: 'Extra Large' },
        { id: 'p5', left: 'XS', right: 'Extra Small' }
      ],
      explanation: 'Estas son las tallas universales que verás en casi todas las etiquetas.'
    } as any
  },
  {
    id: 'a1-u10-e34',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Vaqueros ajustados',
      instructions: 'Ordena para decir "Mis vaqueros son ajustados".',
      sentences: [
        {
          id: 's1',
          words: ['tight', 'are', 'jeans', 'My'],
          correctSentence: 'My jeans are tight',
          translation: 'Mis vaqueros son ajustados.',
          hint: 'Empieza con "My".',
          explanation: '"Tight" significa apretado o ajustado. Lo opuesto es "loose" (holgado).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e35',
    type: 'flashcard',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Cremallera',
          back: 'Zipper',
          example: 'The zipper is broken.',
          pronunciation: '/ˈzɪp.ər/',
          explanation: '"Zipper" es la cremallera. También se puede decir solo "zip".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Ropa holgada',
      instructions: '¿Cómo se dice que la ropa te queda grande o suelta?',
      questions: [
        {
          id: 'q1',
          question: 'This T-shirt is too ________.',
          options: ['loose', 'tight', 'short'],
          correctAnswer: 0,
          explanation: '"Loose" significa que algo te queda holgado o ancho.'
        }
      ]
    }
  },
  {
    id: 'a1-u10-e37',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Uniforme escolar',
      instructions: 'Escribe la palabra para "uniforme".',
      questions: [
        {
          id: 'q1',
          question: 'I wear a school ________.',
          answer: 'uniform',
          explanation: '"Uniform" se escribe igual que en español, pero se pronuncia con una "y" al principio.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e38',
    type: 'matching',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Calzado variado',
      instructions: 'Une cada tipo de calzado con su nombre.',
      pairs: [
        { id: 'p1', left: 'Sneakers', right: 'Zapatillas de deporte' },
        { id: 'p2', left: 'Sandals', right: 'Sandalias' },
        { id: 'p3', left: 'High heels', right: 'Zapatos de tacón' },
        { id: 'p4', left: 'Slippers', right: 'Zapatillas de casa' },
        { id: 'p5', left: 'Flip-flops', right: 'Chanclas' }
      ],
      explanation: 'Saber el nombre exacto del calzado es muy útil para ir de compras.'
    } as any
  },
  {
    id: 'a1-u10-e40',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'hard',
    content: {
      title: 'Me gusta tu estilo',
      instructions: 'Ordena para decir "Me gusta mucho tu estilo de ropa".',
      sentences: [
        {
          id: 's1',
          words: ['style', 'clothing', 'your', 'like', 'really', 'I'],
          correctSentence: 'I really like your clothing style',
          translation: 'Me gusta mucho tu estilo de ropa.',
          hint: 'Empieza con "I".',
          explanation: '"Really like" añade énfasis al gusto. "Clothing" es otra forma de decir ropa.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e41',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Ropa interior',
      instructions: '¿Cómo se llama la ropa que va debajo?',
      questions: [
        {
          id: 'q1',
          question: 'I need to buy some ________.',
          options: ['underwear', 'overcoat', 'sweater'],
          correctAnswer: 0,
          explanation: '"Underwear" es ropa interior. Literalmente, lo que va "debajo de la ropa" (under wear).'
        }
      ]
    }
  },
  {
    id: 'a1-u10-e42',
    type: 'flashcard',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Bufanda de lana',
          back: 'Wool scarf',
          example: 'This wool scarf is warm.',
          pronunciation: '/wʊl skɑːf/',
          explanation: 'La lana (wool) es perfecta para mantener el calor en invierno.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e43',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'hard',
    content: {
      title: 'Probadores',
      instructions: 'Escribe la palabra para "probador".',
      questions: [
        {
          id: 'q1',
          question: 'Where is the ________ room?',
          answer: 'fitting',
          explanation: '"Fitting room" es el probador en una tienda de ropa.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'Comprar ropa',
      instructions: '¿Qué pides para probarte algo?',
      questions: [
        {
          id: 'q1',
          question: 'Can I ________ this on?',
          options: ['try', 'wear', 'put'],
          correctAnswer: 0,
          explanation: '"Try on" significa probarse una prenda antes de comprarla.'
        }
      ]
    }
  },
  {
    id: 'a1-u10-e45',
    type: 'matching',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      title: 'En la tienda',
      instructions: 'Une cada acción con su traducción.',
      pairs: [
        { id: 'p1', left: 'Try on', right: 'Probarse' },
        { id: 'p2', left: 'Buy', right: 'Comprar' },
        { id: 'p3', left: 'Pay', right: 'Pagar' },
        { id: 'p4', left: 'Look for', right: 'Buscar' },
        { id: 'p5', left: 'Change', right: 'Cambiarse/Cambiar' }
      ],
      explanation: 'Estos verbos son esenciales para cualquier jornada de compras.'
    } as any
  },
  {
    id: 'a1-u10-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'hard',
    content: {
      title: '¿Cuánto cuesta?',
      instructions: 'Ordena las palabras para preguntar "¿Cuánto cuesta esta camiseta?".',
      sentences: [
        {
          id: 's1',
          words: ['T-shirt', 'this', 'is', 'much', 'How'],
          correctSentence: 'How much is this T-shirt',
          translation: '¿Cuánto cuesta esta camiseta?',
          hint: 'Empieza con "How".',
          explanation: 'Usamos "How much" para preguntar por el precio de algo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'easy',
    content: {
      title: 'Vaqueros antiguos',
      instructions: '¿Cómo se dice "vaqueros" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I love my old ________.',
          options: ['jeans', 'skirts', 'coats'],
          correctAnswer: 0,
          explanation: '"Jeans" son los vaqueros o mezclilla.'
        }
      ]
    }
  },
  {
    id: 'a1-u10-e49',
    type: 'flashcard',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Espejo',
          back: 'Mirror',
          example: 'Look in the mirror.',
          pronunciation: '/ˈmɪr.ər/',
          explanation: '"Mirror" es espejo. Es vital para ver cómo nos queda la ropa.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u10-e50',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Clothes',
    topicName: 'Outfit of the Day',
    difficulty: 'hard',
    content: {
      title: 'Demasiado caro',
      instructions: 'Escribe la palabra para "caro".',
      questions: [
        {
          id: 'q1',
          question: 'This suit is very ________.',
          answer: 'expensive',
          explanation: '"Expensive" significa caro. Lo opuesto es "cheap" (barato).'
        }
      ]
    } as any
  }
];
