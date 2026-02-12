import { Exercise } from '@/lib/exercise-generator';

export const UNIT_18_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Devices & Hardware (1-12) ---
  {
    id: 'a2-u18-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Portátil',
          back: 'Laptop',
          example: 'I take my laptop to the office every day.',
          pronunciation: '/ˈlæptɒp/',
          explanation: 'Un ordenador portátil.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      title: 'Digital Devices',
      instructions: 'Une el dispositivo con su traducción.',
      pairs: [
        { id: '1', left: 'Smartphone', right: 'Teléfono inteligente' },
        { id: '2', left: 'Tablet', right: 'Tableta' },
        { id: '3', left: 'Headphones', right: 'Auriculares' },
        { id: '4', left: 'Keyboard', right: 'Teclado' },
        { id: '5', left: 'Printer', right: 'Impresora' }
      ],
      explanation: 'Vocabulario básico de hardware.'
    } as any
  },
  {
    id: 'a2-u18-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      title: 'Using a Mouse',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'You use a mouse to ___ on icons.',
          options: ['click', 'type', 'print'],
          correctAnswer: 0,
          explanation: '"Click" es la acción que hacemos con el ratón.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      title: 'The Screen',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'The ___ on my phone is broken.',
          correctAnswer: 'screen',
          explanation: '"Screen" es la pantalla.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'New Gadget',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'bought', 'a', 'new', 'pair', 'of', 'headphones', '.'],
          correctSentence: 'I bought a new pair of headphones.',
          translation: 'Compré un nuevo par de auriculares.',
          hint: 'Usa "pair of".',
          explanation: 'Usamos "pair of" con objetos que tienen dos partes, como los auriculares.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Cargador',
          back: 'Charger',
          example: 'Can I borrow your phone charger?',
          pronunciation: '/ˈtʃɑːdʒə/',
          explanation: 'Dispositivo para dar energía a la batería.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Battery Life',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'My tablet is dead. The ___ is at 0%.',
          options: ['battery', 'memory', 'speed'],
          correctAnswer: 0,
          explanation: 'Si el dispositivo no tiene energía es por la batería (battery).'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Laptop',
      instructions: 'Di "I have a laptop".',
      questions: [
        {
          id: 'q1',
          text: 'I have a laptop',
          correctAnswer: 'I have a laptop',
          explanation: 'Pronuncia "laptop" como /ˈlæptɒp/.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'External Storage',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'I saved the file on a USB ___ .',
          correctAnswer: 'stick',
          explanation: '"USB stick" o "pendrive".'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Typing',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'keyboard', 'is', 'not', 'working', '.'],
          correctSentence: 'The keyboard is not working.',
          translation: 'El teclado no funciona.',
          hint: 'Negativo.',
          explanation: 'Presente continuo para una situación actual.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e11',
    type: 'matching',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Parts of a PC',
      instructions: 'Une la pieza con su función.',
      pairs: [
        { id: '1', left: 'Monitor', right: 'Where you see images' },
        { id: '2', left: 'Mouse', right: 'To move the cursor' },
        { id: '3', left: 'Speakers', right: 'To hear sound' },
        { id: '4', left: 'Webcam', right: 'To show your face online' }
      ],
      explanation: 'Componentes de un ordenador.'
    } as any
  },
  {
    id: 'a2-u18-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'hard',
    content: {
      title: 'Hardware',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I need a more powerful ___ to play this game.',
          options: ['processor', 'keyboard', 'charger'],
          correctAnswer: 0,
          explanation: 'El procesador (processor) determina la potencia del equipo.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 2: Software & Internet (13-24) ---
  {
    id: 'a2-u18-e13',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Contraseña',
          back: 'Password',
          example: 'Don’t share your password with anyone.',
          pronunciation: '/ˈpɑːswɜːd/',
          explanation: 'Código secreto para entrar en una cuenta.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e14',
    type: 'matching',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      title: 'Internet Terms',
      instructions: 'Une la palabra con su traducción.',
      pairs: [
        { id: '1', left: 'Website', right: 'Sitio web' },
        { id: '2', left: 'Link', right: 'Enlace' },
        { id: '3', left: 'Download', right: 'Descargar' },
        { id: '4', left: 'Upload', right: 'Subir (archivos)' },
        { id: '5', left: 'Search', right: 'Buscar' }
      ],
      explanation: 'Vocabulario esencial de internet.'
    } as any
  },
  {
    id: 'a2-u18-e15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      title: 'Using Apps',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'You can download the ___ from the Play Store.',
          options: ['app', 'computer', 'screen'],
          correctAnswer: 0,
          explanation: 'Descargamos aplicaciones (apps) en el móvil.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e16',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      title: 'Online presence',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'I have an ___ on this forum.',
          correctAnswer: 'account',
          explanation: '"Account" es una cuenta de usuario.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e17',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Internet speed',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'Wi-Fi', 'is', 'very', 'slow', 'here', '.'],
          correctSentence: 'The Wi-Fi is very slow here.',
          translation: 'El Wi-Fi es muy lento aquí.',
          hint: 'Empieza con "The".',
          explanation: 'Frase común cuando la conexión es mala.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e18',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Navegador',
          back: 'Browser',
          example: 'Chrome is a very popular web browser.',
          pronunciation: '/ˈbraʊzə/',
          explanation: 'Programa para ver sitios web.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Social Media Action',
      instructions: 'Elige la acción.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ a photo on Instagram this morning.',
          options: ['posted', 'searched', 'clicked'],
          correctAnswer: 0,
          explanation: '"Post" es publicar algo en redes sociales.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e20',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Password',
      instructions: 'Di "Enter your password".',
      questions: [
        {
          id: 'q1',
          text: 'Enter your password',
          correctAnswer: 'Enter your password',
          explanation: 'La "a" en password es larga /ɑː/.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e21',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'File management',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Don’t forget to ___ your work before you close the program.',
          correctAnswer: 'save',
          explanation: '"Save" significa guardar.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e22',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'In the office',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Can', 'you', 'send', 'me', 'an', 'email', '?'],
          correctSentence: 'Can you send me an email?',
          translation: '¿Me puedes enviar un email?',
          hint: 'Es una petición.',
          explanation: 'Estructura para pedir algo amablemente.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e23',
    type: 'matching',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Verbs for Technology',
      instructions: 'Une el verbo con su uso.',
      pairs: [
        { id: '1', left: 'Log in', right: 'To enter a website with a password' },
        { id: '2', left: 'Scroll', right: 'To move up or down on a screen' },
        { id: '3', left: 'Tap', right: 'To touch a smartphone screen' },
        { id: '4', left: 'Restart', right: 'To turn off and on again' }
      ],
      explanation: 'Acciones comunes al usar dispositivos.'
    } as any
  },
  {
    id: 'a2-u18-e24',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'hard',
    content: {
      title: 'Cybersecurity',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'A ___ is a software that can damage your computer.',
          options: ['virus', 'browser', 'link'],
          correctAnswer: 0,
          explanation: 'Un virus es software malicioso.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 3: Relative Pronouns (Who, Which, That) (25-36) ---
  {
    id: 'a2-u18-e25',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Who / Which / That (Que)',
          back: 'Relative Pronouns',
          example: 'The man who fixed my PC is nice.',
          pronunciation: '/n/a/',
          explanation: 'Usamos "who" para personas y "which" para cosas. "That" vale para ambos.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e26',
    type: 'matching',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      title: 'Who vs Which',
      instructions: 'Une el pronombre con su uso.',
      pairs: [
        { id: '1', left: 'People', right: 'Who' },
        { id: '2', left: 'Things', right: 'Which' },
        { id: '3', left: 'People and Things', right: 'That' }
      ],
      explanation: 'Regla básica de los pronombres relativos.'
    } as any
  },
  {
    id: 'a2-u18-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Relative Clauses',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I have a phone ___ takes great photos.',
          options: ['which', 'who', 'where'],
          correctAnswer: 0,
          explanation: 'Usamos "which" porque un teléfono es una cosa.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Defining people',
      instructions: 'Completa con who o which.',
      questions: [
        {
          id: 'q1',
          text: 'She is the teacher ___ taught me how to code.',
          correctAnswer: 'who',
          explanation: 'Usamos "who" para personas.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e29',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Combining sentences',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['This', 'is', ' the', 'app', 'that', 'I', 'use', '.'],
          correctSentence: 'This is the app that I use.',
          translation: 'Esta es la app que uso.',
          hint: 'Usa "that".',
          explanation: '"That" es muy común para referirse a cosas en el habla cotidiana.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e30',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'El lugar donde...',
          back: 'Where',
          example: 'This is the shop where I bought my laptop.',
          pronunciation: '/weə/',
          explanation: 'Usamos "where" para referirnos a lugares.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e31',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Relative Pronouns Mix',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'He’s the engineer ___ designed the robot.',
          options: ['who', 'which', 'where'],
          correctAnswer: 0,
          explanation: '"Who" para referirse al ingeniero (persona).'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e32',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Which',
      instructions: 'Di "The computer which I bought".',
      questions: [
        {
          id: 'q1',
          text: 'The computer which I bought',
          correctAnswer: 'The computer which I bought',
          explanation: 'Enfócate en el sonido /w/ de "which".'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e33',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Which or Who?',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The emails ___ you sent were very helpful.',
          correctAnswer: 'which',
          explanation: 'Los emails son cosas, por eso usamos "which" (o "that").'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e34',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Place and Tech',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Is', 'this', ' the', 'website', 'where', 'you', 'found', 'it', '?'],
          correctSentence: 'Is this the website where you found it?',
          translation: '¿Es este el sitio web donde lo encontraste?',
          hint: 'Pregunta.',
          explanation: 'Usamos "where" para referirnos a una ubicación digital.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e35',
    type: 'matching',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Relative Clauses Examples',
      instructions: 'Une las partes para formar frases.',
      pairs: [
        { id: '1', left: 'A mouse is something', right: 'which you move with your hand' },
        { id: '2', left: 'An influencer is someone', right: 'who has many followers' },
        { id: '3', left: 'A lab is a place', right: 'where scientists work' },
        { id: '4', left: 'A blog is a site', right: 'that has articles' }
      ],
      explanation: 'Práctica de pronombres relativos en contexto.'
    } as any
  },
  {
    id: 'a2-u18-e36',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'hard',
    content: {
      title: 'Complex Sentences',
      instructions: 'Elige la opción gramaticalmente correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The people ___ live in that smart house are very rich.',
          options: ['who', 'which', 'where'],
          correctAnswer: 0,
          explanation: '"Who" se refiere a las personas (people).'
        }
      ]
    }
  },

  // --- SUB-TOPIC 4: Using Technology (37-45) ---
  {
    id: 'a2-u18-e37',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Videollamada',
          back: 'Video call',
          example: 'We have a video call at 3 PM.',
          pronunciation: '/ˈvɪdiəʊ kɔːl/',
          explanation: 'Una llamada donde puedes ver a la otra persona.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e38',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Gaming',
      instructions: 'Elige la palabra correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I love playing games on my ___ .',
          options: ['console', 'printer', 'keyboard'],
          correctAnswer: 0,
          explanation: 'Las consolas (consoles) se usan para jugar.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Connectivity',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'You need an internet ___ to watch Netflix.',
          correctAnswer: 'connection',
          explanation: 'Necesitas una conexión (connection) a internet.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Taking photos',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['My', 'phone', 'has', 'a', 'really', 'good', 'camera', '.'],
          correctSentence: 'My phone has a really good camera.',
          translation: 'Mi teléfono tiene una cámara muy buena.',
          hint: 'Usa "really".',
          explanation: 'Descripción de características de hardware.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e41',
    type: 'matching',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Online Actions',
      instructions: 'Une el icono con su acción.',
      pairs: [
        { id: '1', left: 'Bin / Trash', right: 'Delete' },
        { id: '2', left: 'Envelope', right: 'Email' },
        { id: '3', left: 'Magnifying glass', right: 'Search' },
        { id: '4', left: 'Plus sign', right: 'Add' }
      ],
      explanation: 'Símbolos universales en tecnología.'
    } as any
  },
  {
    id: 'a2-u18-e42',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Communication',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ my friends every day on WhatsApp.',
          options: ['message', 'call', 'upload'],
          correctAnswer: 0,
          explanation: '"Message" puede usarse como verbo (enviar un mensaje).'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e43',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Social Media',
      instructions: 'Di "I use social media every day".',
      questions: [
        {
          id: 'q1',
          text: 'I use social media every day',
          correctAnswer: 'I use social media every day',
          explanation: 'Pronuncia "social" como /ˈsəʊʃəl/.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e44',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'hard',
    content: {
      title: 'Updating software',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'You should always ___ your apps to the latest version.',
          correctAnswer: 'update',
          explanation: '"Update" significa actualizar.'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e45',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'hard',
    content: {
      title: 'Gadget problem',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'don’t', 'know', 'how', 'to', 'use', 'this', 'tablet', '.'],
          correctSentence: 'I don’t know how to use this tablet.',
          translation: 'No sé cómo usar esta tableta.',
          hint: 'Usa "how to".',
          explanation: 'Estructura común para expresar falta de conocimiento técnico.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mixed Practice (46-50) ---
  {
    id: 'a2-u18-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Mixed Review',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The man ___ fixed my computer was very professional.',
          options: ['who', 'which', 'where'],
          correctAnswer: 0,
          explanation: '"Who" se refiere al hombre (persona).'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Device practice',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I can’t print anything because the ___ is out of ink.',
          correctAnswer: 'printer',
          explanation: 'La impresora (printer) usa tinta (ink).'
        }
      ]
    }
  },
  {
    id: 'a2-u18-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Relative Clause review',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['This', 'is', 'the', 'file', 'which', 'I', 'deleted', '.'],
          correctSentence: 'This is the file which I deleted.',
          translation: 'Este es el archivo que borré.',
          hint: 'Usa "which".',
          explanation: '"Which" se refiere al archivo (cosa).',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u18-e49',
    type: 'matching',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'medium',
    content: {
      title: 'Tech Review',
      instructions: 'Une el dispositivo con su uso principal.',
      pairs: [
        { id: '1', left: 'E-reader', right: 'Reading books digitaly' },
        { id: '2', left: 'Smartwatch', right: 'Checking notifications on your wrist' },
        { id: '3', left: 'GPS', right: 'Finding directions' },
        { id: '4', left: 'Router', right: 'Connecting to the internet' }
      ],
      explanation: 'Repaso de dispositivos específicos.'
    } as any
  },
  {
    id: 'a2-u18-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Gadgets',
    topicName: 'Technology & Gadgets',
    difficulty: 'hard',
    content: {
      title: 'Final Challenge',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The website ___ I found the information is very reliable.',
          options: ['where', 'who', 'which'],
          correctAnswer: 0,
          explanation: '"Where" se usa para referirse al sitio web como el lugar donde se halló la información.'
        }
      ]
    }
  }
];
