import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 22: Shopping
 */

export const UNIT_22_EXERCISES: Exercise[] = [
  {
    id: 'a1-u22-e1',
    type: 'matching',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'easy',
    content: {
      title: 'Vocabulario de Dinero',
      instructions: 'Relaciona cada palabra con su traducción al español.',
      pairs: [
        { id: 'p1', left: 'Money', right: 'Dinero' },
        { id: 'p2', left: 'Price', right: 'Precio' },
        { id: 'p3', left: 'Cost', right: 'Coste/Costar' },
        { id: 'p4', left: 'Cash', right: 'Efectivo' },
        { id: 'p5', left: 'Card', right: 'Tarjeta' }
      ],
      explanation: 'Conceptos básicos para empezar a comprar y vender en inglés.'
    } as any
  },
  {
    id: 'a1-u22-e2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'easy',
    content: {
      title: 'Preguntar el precio',
      instructions: '¿Cómo preguntarías "¿Cuánto cuesta esto?"?',
      questions: [
        {
          id: 'q1',
          question: '________ much is this?',
          options: ['How', 'What', 'Where'],
          correctAnswer: 0,
          explanation: "Usamos 'How much' para preguntar por el precio de algo."
        }
      ]
    }
  },
  {
    id: 'a1-u22-e3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'easy',
    content: {
      title: 'Moneda común',
      instructions: 'Escribe la palabra para "dólar".',
      questions: [
        {
          id: 'q1',
          question: 'It costs one ________.',
          correctAnswer: 'dollar',
          explanation: '"Dollar" es la moneda oficial de Estados Unidos y otros países.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e4',
    type: 'flashcard',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Caro',
          back: 'Expensive',
          example: 'This watch is very expensive.',
          pronunciation: '/ɪkˈspensɪv/',
          explanation: '"Expensive" significa que tiene un precio muy alto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e5',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'easy',
    content: {
      title: 'Quiero comprar esto',
      instructions: 'Ordena las palabras para decir "Yo quiero comprar esto".',
      sentences: [
        {
          id: 's1',
          words: ['this', 'buy', 'want', 'I', 'to'],
          correctSentence: 'I want to buy this',
          translation: 'Yo quiero comprar esto.',
          explanation: 'Usamos "want to" seguido del verbo en infinitivo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e7',
    type: 'matching',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'easy',
    content: {
      title: 'Acciones de Compra',
      instructions: 'Relaciona la acción con su traducción.',
      pairs: [
        { id: 'p1', left: 'Buy', right: 'Comprar' },
        { id: 'p2', left: 'Sell', right: 'Vender' },
        { id: 'p3', left: 'Pay', right: 'Pagar' },
        { id: 'p4', left: 'Shop', right: 'Comprar / Ir de tiendas' },
        { id: 'p5', left: 'Spend', right: 'Gastar' }
      ],
      explanation: 'Verbos fundamentales para realizar transacciones comerciales.'
    } as any
  },
  {
    id: 'a1-u22-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'easy',
    content: {
      title: 'Vender algo',
      instructions: '¿Qué significa "He sells cars"?',
      questions: [
        {
          id: 'q1',
          question: 'He sells cars.',
          options: ['Él vende coches.', 'Él compra coches.', 'Él conduce coches.'],
          correctAnswer: 0,
          explanation: '"Sell" es lo opuesto a "buy".'
        }
      ]
    }
  },
  {
    id: 'a1-u22-e9',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Pagar en efectivo',
      instructions: 'Completa con la palabra para "pagar".',
      questions: [
        {
          id: 'q1',
          question: 'I want to ________ with cash.',
          correctAnswer: 'pay',
          explanation: '"Pay with cash" significa pagar usando dinero físico.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e10',
    type: 'flashcard',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Gastar dinero',
          back: 'Spend money',
          example: 'Don\'t spend too much money.',
          pronunciation: '/spend ˈmʌni/',
          explanation: '"Spend" se usa específicamente para el uso del dinero (o tiempo).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: '¿Cuánto cuestan?',
      instructions: 'Ordena para preguntar el precio de varios objetos.',
      sentences: [
        {
          id: 's1',
          words: ['they', 'much', 'are', 'How'],
          correctSentence: 'How much are they',
          translation: '¿Cuánto cuestan ellos?',
          explanation: 'Usamos "are" cuando el sujeto es plural.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'En la Tienda',
      instructions: 'Relaciona el término con su traducción.',
      pairs: [
        { id: 'p1', left: 'Store / Shop', right: 'Tienda' },
        { id: 'p2', left: 'Customer', right: 'Cliente' },
        { id: 'p3', left: 'Clerk', right: 'Dependiente' },
        { id: 'p4', left: 'Basket', right: 'Cesta' },
        { id: 'p5', left: 'Cart', right: 'Carrito' }
      ],
      explanation: 'Elementos y personas que encuentras al ir de compras.'
    } as any
  },
  {
    id: 'a1-u22-e13',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'El cliente',
      instructions: '¿Quién compra en la tienda?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ buys a shirt.',
          options: ['customer', 'clerk', 'store'],
          correctAnswer: 0,
          explanation: '"Customer" es la persona que consume o compra.'
        }
      ]
    }
  },
  {
    id: 'a1-u22-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'El carrito',
      instructions: 'Completa con la palabra para "carrito".',
      questions: [
        {
          id: 'q1',
          question: 'Put the food in the ________.',
          correctAnswer: 'cart',
          explanation: '"Cart" (o "trolley" en UK) es el carro del supermercado.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e16',
    type: 'matching',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Tipos de Tiendas',
      instructions: 'Relaciona la tienda con lo que vende.',
      pairs: [
        { id: 'p1', left: 'Supermarket', right: 'Supermercado' },
        { id: 'p2', left: 'Bakery', right: 'Panadería' },
        { id: 'p3', left: 'Bookstore', right: 'Librería' },
        { id: 'p4', left: 'Pharmacy', right: 'Farmacia' },
        { id: 'p5', left: 'Clothing store', right: 'Tienda de ropa' }
      ],
      explanation: 'Nombres específicos para diferentes tipos de comercios.'
    } as any
  },
  {
    id: 'a1-u22-e17',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Comprar pan',
      instructions: '¿A dónde vas a comprar pan?',
      questions: [
        {
          id: 'q1',
          question: 'I buy bread at the ________.',
          options: ['bakery', 'bookstore', 'pharmacy'],
          correctAnswer: 0,
          explanation: '"Bakery" es el lugar donde se hornea y vende pan.'
        }
      ]
    }
  },
  {
    id: 'a1-u22-e18',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Medicina',
      instructions: 'Completa con la palabra para "farmacia".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is open.',
          correctAnswer: 'pharmacy',
          explanation: '"Pharmacy" (o "drugstore" en US) es donde compras medicinas.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e19',
    type: 'flashcard',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Librería',
          back: 'Bookstore',
          example: 'I like this bookstore.',
          pronunciation: '/ˈbʊkstɔːr/',
          explanation: 'No confundir con "Library" (biblioteca).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e20',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'hard',
    content: {
      title: 'Tienda de ropa',
      instructions: 'Ordena para decir "Yo estoy en la tienda de ropa".',
      sentences: [
        {
          id: 's1',
          words: ['store', 'clothing', 'the', 'at', 'am', 'I'],
          correctSentence: 'I am at the clothing store',
          translation: 'Yo estoy en la tienda de ropa.',
          explanation: '"At the" se usa para indicar un lugar específico.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e21',
    type: 'matching',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Documentos y Pagos',
      instructions: 'Relaciona el término de pago.',
      pairs: [
        { id: 'p1', left: 'Receipt', right: 'Recibo / Ticket' },
        { id: 'p2', left: 'Change', right: 'Cambio / Vuelta' },
        { id: 'p3', left: 'Bill', right: 'Cuenta / Factura' },
        { id: 'p4', left: 'Wallet', right: 'Cartera' },
        { id: 'p5', left: 'Purse', right: 'Bolso / Monedero' }
      ],
      explanation: 'Elementos finales de una transacción de compra.'
    } as any
  },
  {
    id: 'a1-u22-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'El recibo',
      instructions: '¿Qué te dan después de pagar?',
      questions: [
        {
          id: 'q1',
          question: 'Here is your ________.',
          options: ['receipt', 'wallet', 'change'],
          correctAnswer: 0,
          explanation: '"Receipt" es el papel que demuestra que has pagado.'
        }
      ]
    }
  },
  {
    id: 'a1-u22-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'El cambio',
      instructions: 'Escribe la palabra para "cambio".',
      questions: [
        {
          id: 'q1',
          question: 'Don\'t forget your ________.',
          correctAnswer: 'change',
          explanation: '"Change" es el dinero que te devuelven si pagas con más de lo debido.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Cantidades y Precios',
      instructions: 'Relaciona la cantidad con su descripción.',
      pairs: [
        { id: 'p1', left: 'Five dollars', right: 'Cinco dólares' },
        { id: 'p2', left: 'Ten euros', right: 'Diez euros' },
        { id: 'p3', left: 'Free', right: 'Gratis' },
        { id: 'p4', left: 'Half price', right: 'A mitad de precio' },
        { id: 'p5', left: 'Discount', right: 'Descuento' }
      ],
      explanation: 'Expresiones para entender ofertas y costes.'
    } as any
  },
  {
    id: 'a1-u22-e26',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Cero coste',
      instructions: '¿Qué significa "It is free"?',
      questions: [
        {
          id: 'q1',
          question: 'It is free.',
          options: ['Es gratis.', 'Es barato.', 'Es caro.'],
          correctAnswer: 0,
          explanation: '"Free" significa que no tienes que pagar nada.'
        }
      ]
    }
  },
  {
    id: 'a1-u22-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Diez dólares',
      instructions: 'Completa: Cuesta diez dólares.',
      questions: [
        {
          id: 'q1',
          question: 'It costs ten ________.',
          correctAnswer: 'dollars',
          explanation: 'Recuerda añadir la "s" para el plural de las monedas.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e28',
    type: 'flashcard',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Descuento',
          back: 'Discount',
          example: 'I have a discount code.',
          pronunciation: '/ˈdɪskaʊnt/',
          explanation: 'Un descuento reduce el precio original.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e29',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'hard',
    content: {
      title: '¿Cuánto es todo?',
      instructions: 'Ordena para preguntar el total.',
      sentences: [
        {
          id: 's1',
          words: ['all', 'total', 'the', 'is', 'How', 'much'],
          correctSentence: 'How much is the total',
          translation: '¿Cuánto es el total?',
          explanation: 'Pregunta estándar para saber la suma final.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e30',
    type: 'matching',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Objetos para comprar (Ocio)',
      instructions: 'Relaciona el objeto.',
      pairs: [
        { id: 'p1', left: 'Newspaper', right: 'Periódico' },
        { id: 'p2', left: 'Magazine', right: 'Revista' },
        { id: 'p3', left: 'Toy', right: 'Juguete' },
        { id: 'p4', left: 'Gift / Present', right: 'Regalo' },
        { id: 'p5', left: 'Souvenir', right: 'Recuerdo' }
      ],
      explanation: 'Cosas comunes que compramos aparte de la comida.'
    } as any
  },
  {
    id: 'a1-u22-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Un regalo',
      instructions: '¿Cómo se dice "un regalo para ti"?',
      questions: [
        {
          id: 'q1',
          question: 'This is a ________ for you.',
          options: ['gift', 'toy', 'map'],
          correctAnswer: 0,
          explanation: '"Gift" y "present" son sinónimos.'
        }
      ]
    }
  },
  {
    id: 'a1-u22-e32',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Juguetes',
      instructions: 'Completa: La tienda de juguetes.',
      questions: [
        {
          id: 'q1',
          question: 'The ________ shop is big.',
          correctAnswer: 'toy',
          explanation: '"Toy" es juguete.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Adjetivos de Calidad',
      instructions: 'Relaciona el adjetivo.',
      pairs: [
        { id: 'p1', left: 'New', right: 'Nuevo' },
        { id: 'p2', left: 'Old', right: 'Viejo' },
        { id: 'p3', left: 'Small', right: 'Pequeño' },
        { id: 'p4', left: 'Large', right: 'Grande' },
        { id: 'p5', left: 'Beautiful', right: 'Bello / Hermoso' }
      ],
      explanation: 'Palabras para describir lo que estamos comprando.'
    } as any
  },
  {
    id: 'a1-u22-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Tamaño grande',
      instructions: '¿Cómo se dice "grande" en ropa o tiendas?',
      questions: [
        {
          id: 'q1',
          question: 'I need a ________ size.',
          options: ['large', 'small', 'new'],
          correctAnswer: 0,
          explanation: 'En el contexto de tallas, usamos "large" para grande.'
        }
      ]
    }
  },
  {
    id: 'a1-u22-e36',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Cosas viejas',
      instructions: 'Lo opuesto a "new".',
      questions: [
        {
          id: 'q1',
          question: 'This car is ________.',
          correctAnswer: 'old',
          explanation: '"Old" significa viejo o antiguo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Bello / Hermoso',
          back: 'Beautiful',
          example: 'This dress is beautiful.',
          pronunciation: '/ˈbjuːtɪfl/',
          explanation: 'Un adjetivo positivo para describir algo que te gusta estéticamente.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'hard',
    content: {
      title: 'Una revista nueva',
      instructions: 'Ordena para decir "Yo compro una revista nueva".',
      sentences: [
        {
          id: 's1',
          words: ['magazine', 'new', 'a', 'buy', 'I'],
          correctSentence: 'I buy a new magazine',
          translation: 'Yo compro una revista nueva.',
          explanation: 'Adjetivo "new" antes de "magazine".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e39',
    type: 'matching',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Preguntas del Dependiente',
      instructions: 'Relaciona la frase con su traducción.',
      pairs: [
        { id: 'p1', left: 'Can I help you?', right: '¿Puedo ayudarle?' },
        { id: 'p2', left: 'Anything else?', right: '¿Algo más?' },
        { id: 'p3', left: 'Cash or card?', right: '¿Efectivo o tarjeta?' },
        { id: 'p4', left: 'Enter your PIN', right: 'Introduzca su PIN' },
        { id: 'p5', left: 'Sign here', right: 'Firme aquí' }
      ],
      explanation: 'Frases que escucharás de boca del vendedor.'
    } as any
  },
  {
    id: 'a1-u22-e40',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: 'Método de pago',
      instructions: '¿Cómo te preguntan cómo vas a pagar?',
      questions: [
        {
          id: 'q1',
          question: '________ or card?',
          options: ['Cash', 'Money', 'Price'],
          correctAnswer: 0,
          explanation: '"Cash or card?" es la pregunta más común al pagar.'
        }
      ]
    }
  },
  {
    id: 'a1-u22-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'medium',
    content: {
      title: '¿Algo más?',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          question: 'Anything ________?',
          correctAnswer: 'else',
          explanation: '"Anything else?" sirve para saber si el cliente quiere algo más.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e43',
    type: 'matching',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'hard',
    content: {
      title: 'Repaso de Números y Dinero',
      instructions: 'Relaciona la cantidad escrita con el número.',
      pairs: [
        { id: 'p1', left: 'Two fifty', right: '2.50' },
        { id: 'p2', left: 'Ten twenty', right: '10.20' },
        { id: 'p3', left: 'A hundred', right: '100' },
        { id: 'p4', left: 'Fifty cents', right: '0.50' },
        { id: 'p5', left: 'Nine ninety-nine', right: '9.99' }
      ],
      explanation: 'Formas comunes de decir los precios en voz alta.'
    } as any
  },
  {
    id: 'a1-u22-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'hard',
    content: {
      title: 'Precio alto',
      instructions: 'It is too expensive.',
      questions: [
        {
          id: 'q1',
          question: 'It is too expensive.',
          options: ['Es demasiado caro.', 'Es muy barato.', 'Es gratis.'],
          correctAnswer: 0,
          explanation: '"Too" añade el matiz de "demasiado".'
        }
      ]
    }
  },
  {
    id: 'a1-u22-e45',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'hard',
    content: {
      title: 'Me gusta este precio',
      instructions: 'Este precio es bueno.',
      questions: [
        {
          id: 'q1',
          question: 'This ________ is good.',
          correctAnswer: 'price',
          explanation: '"Price" es precio.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e46',
    type: 'flashcard',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'hard',
    content: {
      items: [
        {
          front: 'Pagar con tarjeta',
          back: 'Pay by card',
          example: 'Can I pay by card?',
          pronunciation: '/peɪ baɪ kɑːrd/',
          explanation: 'Usamos "by" o "with" para las tarjetas.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'hard',
    content: {
      title: 'Precio total',
      instructions: 'Ordena para decir "El precio total es diez dólares".',
      sentences: [
        {
          id: 's1',
          words: ['dollars', 'ten', 'is', 'price', 'total', 'The'],
          correctSentence: 'The total price is ten dollars',
          translation: 'El precio total es diez dólares.',
          explanation: 'Estructura: Sujeto + is + cantidad.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'hard',
    content: {
      title: 'Llevar el dinero',
      instructions: 'I have money in my ________.',
      questions: [
        {
          id: 'q1',
          question: 'I have money in my ________.',
          options: ['wallet', 'ticket', 'receipt'],
          correctAnswer: 0,
          explanation: '"Wallet" es cartera, donde guardas billetes y tarjetas.'
        }
      ]
    }
  },
  {
    id: 'a1-u22-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'hard',
    content: {
      title: 'Cuesta mucho',
      instructions: 'Cuesta demasiado dinero.',
      questions: [
        {
          id: 'q1',
          question: 'It costs too much ________.',
          correctAnswer: 'money',
          explanation: '"Money" es dinero.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u22-e50',
    type: 'matching',
    level: 'A1',
    topic: 'Shopping',
    topicName: 'Shopping Time',
    difficulty: 'hard',
    content: {
      title: 'Repaso Final de Shopping',
      instructions: 'Relaciona los conceptos más importantes.',
      pairs: [
        { id: 'p1', left: 'How much?', right: '¿Cuánto?' },
        { id: 'p2', left: 'Expensive', right: 'Caro' },
        { id: 'p3', left: 'Cheap', right: 'Barato' },
        { id: 'p4', left: 'Discount', right: 'Descuento' },
        { id: 'p5', left: 'Free', right: 'Gratis' }
      ],
      explanation: 'Resumen de las palabras clave para comprar con éxito.'
    } as any
  }
];
