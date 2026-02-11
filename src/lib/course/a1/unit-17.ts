import { Exercise } from '@/lib/exercise-generator';

export const UNIT_17_EXERCISES: Exercise[] = [
  {
    id: 'a1-u17-e1',
    type: 'matching',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'easy',
    content: {
      title: 'Dispositivos Básicos',
      instructions: 'Une cada dispositivo con su traducción al español.',
      pairs: [
        { id: 'p1', left: 'Computer', right: 'Ordenador/Computadora' },
        { id: 'p2', left: 'Phone', right: 'Teléfono' },
        { id: 'p3', left: 'Tablet', right: 'Tableta' },
        { id: 'p4', left: 'Screen', right: 'Pantalla' },
        { id: 'p5', left: 'Keyboard', right: 'Teclado' }
      ],
      explanation: 'Estos son los dispositivos tecnológicos más comunes que usamos a diario.'
    } as any
  },
  {
    id: 'a1-u17-e2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'easy',
    content: {
      title: 'Uso del ordenador',
      instructions: '¿Cómo se dice "ratón" (de ordenador) en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I use a ________ to click on icons.',
          options: ['mouse', 'cat', 'rat'],
          correctAnswer: 0,
          explanation: '"Mouse" significa ratón, tanto el animal como el periférico del ordenador.'
        }
      ]
    }
  },
  {
    id: 'a1-u17-e3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'easy',
    content: {
      title: 'Mi dispositivo',
      instructions: 'Completa con la palabra para "teléfono".',
      questions: [
        {
          id: 'q1',
          question: 'My ________ is in my pocket.',
          answer: 'phone',
          explanation: '"Phone" es la forma corta de "telephone".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e4',
    type: 'flashcard',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Internet',
          back: 'Internet',
          example: 'I use the internet every day.',
          pronunciation: '/ˈɪn.tə.net/',
          explanation: '"Internet" se escribe igual en inglés y español.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e5',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'easy',
    content: {
      title: 'Tengo un ordenador',
      instructions: 'Ordena las palabras para decir "Yo tengo un ordenador".',
      sentences: [
        {
          id: 's1',
          words: ['computer', 'a', 'have', 'I'],
          correctSentence: 'I have a computer',
          translation: 'Yo tengo un ordenador.',
          hint: 'Empieza con "I".',
          explanation: 'Estructura básica de posesión con objetos tecnológicos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e6',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Laptop',
      instructions: 'Di la palabra para "ordenador portátil".',
      questions: [
        {
          id: 'q1',
          text: 'Laptop',
          phonetic: '/ˈlæp.tɒp/',
          translation: 'Portátil',
          explanation: 'Viene de "lap" (regazo) y "top" (encima).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e7',
    type: 'matching',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'easy',
    content: {
      title: 'Acciones Digitales',
      instructions: 'Une cada acción con su traducción.',
      pairs: [
        { id: 'p1', left: 'Click', right: 'Hacer clic' },
        { id: 'p2', left: 'Type', right: 'Escribir (teclado)' },
        { id: 'p3', left: 'Search', right: 'Buscar' },
        { id: 'p4', left: 'Send', right: 'Enviar' },
        { id: 'p5', left: 'Open', right: 'Abrir' }
      ],
      explanation: 'Verbos básicos para interactuar con la tecnología.'
    } as any
  },
  {
    id: 'a1-u17-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'easy',
    content: {
      title: 'Correo electrónico',
      instructions: '¿Cómo se dice "enviar un email"?',
      questions: [
        {
          id: 'q1',
          question: 'I need to ________ an email.',
          options: ['send', 'eat', 'sleep'],
          correctAnswer: 0,
          explanation: '"Send" es el verbo enviar.'
        }
      ]
    }
  },
  {
    id: 'a1-u17-e9',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Portátil',
      instructions: 'Escribe la palabra para "ordenador portátil".',
      questions: [
        {
          id: 'q1',
          question: 'I work on my ________.',
          answer: 'laptop',
          explanation: '"Laptop" es el término específico para ordenadores que puedes llevar contigo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e10',
    type: 'flashcard',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Contraseña',
          back: 'Password',
          example: 'My password is secret.',
          pronunciation: '/ˈpɑːs.wɜːd/',
          explanation: '"Password" es fundamental para la seguridad digital.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Escribir un email',
      instructions: 'Ordena para decir "Yo escribo un email".',
      sentences: [
        {
          id: 's1',
          words: ['email', 'an', 'write', 'I'],
          correctSentence: 'I write an email',
          translation: 'Yo escribo un email.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos "an" antes de email porque empieza por vocal.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Componentes de Hardware',
      instructions: 'Une cada componente con su traducción.',
      pairs: [
        { id: 'p1', left: 'Printer', right: 'Impresora' },
        { id: 'p2', left: 'Headphones', right: 'Auriculares' },
        { id: 'p3', left: 'Speaker', right: 'Altavoz' },
        { id: 'p4', left: 'Camera', right: 'Cámara' },
        { id: 'p5', left: 'Microphone', right: 'Micrófono' }
      ],
      explanation: 'Accesorios comunes que conectamos a nuestros dispositivos.'
    } as any
  },
  {
    id: 'a1-u17-e13',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Escuchar música',
      instructions: '¿Qué usas para escuchar música en privado?',
      questions: [
        {
          id: 'q1',
          question: 'I use ________ to listen to music.',
          options: ['headphones', 'keyboard', 'printer'],
          correctAnswer: 0,
          explanation: '"Headphones" son auriculares. Siempre es plural.'
        }
      ]
    }
  },
  {
    id: 'a1-u17-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'La seguridad',
      instructions: 'Escribe la palabra para "contraseña".',
      questions: [
        {
          id: 'q1',
          question: 'Enter your ________ here.',
          answer: 'password',
          explanation: 'Casi todos los servicios online requieren un "password".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e15',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Internet',
      instructions: 'Di la palabra "internet".',
      questions: [
        {
          id: 'q1',
          text: 'Internet',
          phonetic: '/ˈɪn.tə.net/',
          translation: 'Internet',
          explanation: 'La primera sílaba es la más fuerte: "IN-ter-net".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e16',
    type: 'matching',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Software y Web',
      instructions: 'Une cada término con su traducción.',
      pairs: [
        { id: 'p1', left: 'Website', right: 'Sitio web' },
        { id: 'p2', left: 'App', right: 'Aplicación' },
        { id: 'p3', left: 'Link', right: 'Enlace' },
        { id: 'p4', left: 'File', right: 'Archivo' },
        { id: 'p5', left: 'Folder', right: 'Carpeta' }
      ],
      explanation: 'Términos comunes relacionados con el uso de internet y programas.'
    } as any
  },
  {
    id: 'a1-u17-e17',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Fotos',
      instructions: '¿Qué dispositivo toma fotos?',
      questions: [
        {
          id: 'q1',
          question: 'I use a ________ to take photos.',
          options: ['camera', 'mouse', 'screen'],
          correctAnswer: 0,
          explanation: '"Camera" es cámara. Hoy en día la mayoría están en los teléfonos.'
        }
      ]
    }
  },
  {
    id: 'a1-u17-e18',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Sitio web',
      instructions: 'Escribe la palabra para "sitio web".',
      questions: [
        {
          id: 'q1',
          question: 'This is a great ________.',
          answer: 'website',
          explanation: '"Website" se refiere a un sitio completo en internet.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e19',
    type: 'flashcard',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Descargar',
          back: 'Download',
          example: 'I download the app.',
          pronunciation: '/ˌdaʊn.ˈloʊd/',
          explanation: '"Download" es bajar archivos de la red.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e20',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Buscar en internet',
      instructions: 'Ordena para decir "Yo busco información".',
      sentences: [
        {
          id: 's1',
          words: ['information', 'for', 'search', 'I'],
          correctSentence: 'I search for information',
          translation: 'Yo busco información.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos "search for" para indicar lo que estamos buscando.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e21',
    type: 'matching',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Conectividad',
      instructions: 'Une cada término de conexión con su traducción.',
      pairs: [
        { id: 'p1', left: 'Wi-Fi', right: 'Red inalámbrica' },
        { id: 'p2', left: 'Online', right: 'En línea' },
        { id: 'p3', left: 'Offline', right: 'Desconectado' },
        { id: 'p4', left: 'Login', right: 'Iniciar sesión' },
        { id: 'p5', left: 'Logout', right: 'Cerrar sesión' }
      ],
      explanation: 'Términos relacionados con el estado de nuestra conexión y cuentas.'
    } as any
  },
  {
    id: 'a1-u17-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Sin internet',
      instructions: '¿Cómo se dice cuando no estás conectado?',
      questions: [
        {
          id: 'q1',
          question: 'I am not connected. I am ________.',
          options: ['offline', 'online', 'busy'],
          correctAnswer: 0,
          explanation: '"Offline" significa estar fuera de línea o desconectado.'
        }
      ]
    }
  },
  {
    id: 'a1-u17-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'La red Wi-Fi',
      instructions: 'Escribe la palabra para "Wi-Fi".',
      questions: [
        {
          id: 'q1',
          question: 'What is the ________ password?',
          answer: 'Wi-Fi',
          explanation: 'Wi-Fi es un término universal para redes inalámbricas.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e24',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Password',
      instructions: 'Di la palabra para "contraseña".',
      questions: [
        {
          id: 'q1',
          text: 'Password',
          phonetic: '/ˈpɑːs.wɜːd/',
          translation: 'Contraseña',
          explanation: 'Asegúrate de pronunciar la "w" claramente.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Comunicación Digital',
      instructions: 'Une cada medio con su traducción.',
      pairs: [
        { id: 'p1', left: 'Message', right: 'Mensaje' },
        { id: 'p2', left: 'Call', right: 'Llamada' },
        { id: 'p3', left: 'Chat', right: 'Charla/Conversación' },
        { id: 'p4', left: 'Video', right: 'Vídeo' },
        { id: 'p5', left: 'Profile', right: 'Perfil' }
      ],
      explanation: 'Formas en las que nos comunicamos usando tecnología.'
    } as any
  },
  {
    id: 'a1-u17-e26',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Llamar',
      instructions: '¿Cómo se dice "hacer una llamada"?',
      questions: [
        {
          id: 'q1',
          question: 'I want to ________ my friend.',
          options: ['call', 'write', 'read'],
          correctAnswer: 0,
          explanation: '"Call" se usa tanto para llamadas de voz como de vídeo.'
        }
      ]
    }
  },
  {
    id: 'a1-u17-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Mensaje de texto',
      instructions: 'Escribe la palabra para "mensaje".',
      questions: [
        {
          id: 'q1',
          question: 'I received a ________.',
          answer: 'message',
          explanation: '"Message" puede ser de texto, voz o email.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e28',
    type: 'flashcard',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Cargar (Batería)',
          back: 'Charge',
          example: 'I need to charge my phone.',
          pronunciation: '/tʃɑːrdʒ/',
          explanation: '"Charge" es alimentar la batería de un dispositivo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e29',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Batería baja',
      instructions: 'Ordena para decir "Yo necesito cargar mi teléfono".',
      sentences: [
        {
          id: 's1',
          words: ['phone', 'my', 'charge', 'to', 'need', 'I'],
          correctSentence: 'I need to charge my phone',
          translation: 'Yo necesito cargar mi teléfono.',
          hint: 'Empieza con "I".',
          explanation: 'Estructura con verbo infinitivo (to charge).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e30',
    type: 'matching',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Estados de Energía',
      instructions: 'Une cada término con su traducción.',
      pairs: [
        { id: 'p1', left: 'Battery', right: 'Batería' },
        { id: 'p2', left: 'Charger', right: 'Cargador' },
        { id: 'p3', left: 'On', right: 'Encendido' },
        { id: 'p4', left: 'Off', right: 'Apagado' },
        { id: 'p5', left: 'Power', right: 'Energía/Encendido' }
      ],
      explanation: 'Términos relacionados con el funcionamiento eléctrico de los gadgets.'
    } as any
  },
  {
    id: 'a1-u17-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Apagar',
      instructions: '¿Cómo se dice "apagar" un dispositivo?',
      questions: [
        {
          id: 'q1',
          question: 'Turn the computer ________.',
          options: ['off', 'on', 'up'],
          correctAnswer: 0,
          explanation: '"Turn off" es apagar. "Off" indica que no hay corriente o actividad.'
        }
      ]
    }
  },
  {
    id: 'a1-u17-e32',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'El cargador',
      instructions: 'Escribe la palabra para "cargador".',
      questions: [
        {
          id: 'q1',
          question: 'Where is my ________?',
          answer: 'charger',
          explanation: '"Charger" es el objeto que usamos para "charge".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Pronunciación: Keyboard',
      instructions: 'Di la palabra para "teclado".',
      questions: [
        {
          id: 'q1',
          text: 'Keyboard',
          phonetic: '/ˈkiː.bɔːd/',
          translation: 'Teclado',
          explanation: '"Key" (tecla/llave) + "board" (tabla).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Redes Sociales',
      instructions: 'Une cada término con su traducción.',
      pairs: [
        { id: 'p1', left: 'Follow', right: 'Seguir' },
        { id: 'p2', left: 'Like', right: 'Me gusta' },
        { id: 'p3', left: 'Share', right: 'Compartir' },
        { id: 'p4', left: 'Comment', right: 'Comentar' },
        { id: 'p5', left: 'Post', right: 'Publicar' }
      ],
      explanation: 'Acciones típicas en redes sociales como Instagram o Facebook.'
    } as any
  },
  {
    id: 'a1-u17-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Compartir',
      instructions: '¿Cómo se dice "compartir una foto"?',
      questions: [
        {
          id: 'q1',
          question: 'I want to ________ this photo.',
          options: ['share', 'hide', 'delete'],
          correctAnswer: 0,
          explanation: '"Share" es compartir con otros.'
        }
      ]
    }
  },
  {
    id: 'a1-u17-e36',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Publicación',
      instructions: 'Escribe la palabra para "publicar".',
      questions: [
        {
          id: 'q1',
          question: 'I will ________ a new photo today.',
          answer: 'post',
          explanation: '"Post" se usa tanto como verbo como sustantivo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Borrar',
          back: 'Delete',
          example: 'I delete the old file.',
          pronunciation: '/dɪ.ˈliːt/',
          explanation: '"Delete" es eliminar algo permanentemente.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'No me gusta',
      instructions: 'Ordena para decir "A mí no me gusta este post".',
      sentences: [
        {
          id: 's1',
          words: ['post', 'this', 'like', "don't", 'I'],
          correctSentence: "I don't like this post",
          translation: 'A mí no me gusta este post.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos "don\'t" para negar en presente.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e39',
    type: 'matching',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Archivos Comunes',
      instructions: 'Une cada tipo de archivo con su traducción.',
      pairs: [
        { id: 'p1', left: 'Image', right: 'Imagen' },
        { id: 'p2', left: 'Video', right: 'Vídeo' },
        { id: 'p3', left: 'Music', right: 'Música' },
        { id: 'p4', left: 'Document', right: 'Documento' },
        { id: 'p5', left: 'Game', right: 'Juego' }
      ],
      explanation: 'Diferentes contenidos que guardamos en nuestros dispositivos.'
    } as any
  },
  {
    id: 'a1-u17-e40',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Jugar',
      instructions: '¿Cómo se dice "jugar a un videojuego"?',
      questions: [
        {
          id: 'q1',
          question: 'I like to ________ video games.',
          options: ['play', 'eat', 'cook'],
          correctAnswer: 0,
          explanation: '"Play" es el verbo jugar.'
        }
      ]
    }
  },
  {
    id: 'a1-u17-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Ver un vídeo',
      instructions: 'Escribe la palabra para "ver".',
      questions: [
        {
          id: 'q1',
          question: 'I want to ________ a video.',
          answer: 'watch',
          explanation: 'Usamos "watch" para vídeos, películas o TV.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e42',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Pronunciación: Message',
      instructions: 'Di la palabra para "mensaje".',
      questions: [
        {
          id: 'q1',
          text: 'Message',
          phonetic: '/ˈmes.ɪdʒ/',
          translation: 'Mensaje',
          explanation: 'La "g" suena como una "j" suave inglesa.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e43',
    type: 'matching',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Problemas Técnicos',
      instructions: 'Une cada problema con su traducción.',
      pairs: [
        { id: 'p1', left: 'Broken', right: 'Roto/Estropeado' },
        { id: 'p2', left: 'Slow', right: 'Lento' },
        { id: 'p3', left: 'Error', right: 'Error' },
        { id: 'p4', left: 'Full', right: 'Lleno (Memoria)' },
        { id: 'p5', left: 'Lost', right: 'Perdido' }
      ],
      explanation: 'Palabras para describir cuando algo no va bien con nuestra tecnología.'
    } as any
  },
  {
    id: 'a1-u17-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      title: 'Internet lento',
      instructions: '¿Cómo se dice "lento"?',
      questions: [
        {
          id: 'q1',
          question: 'The internet is very ________.',
          options: ['slow', 'fast', 'happy'],
          correctAnswer: 0,
          explanation: '"Slow" es lento. Lo contrario es "fast".'
        }
      ]
    }
  },
  {
    id: 'a1-u17-e45',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Pantalla rota',
      instructions: 'Escribe la palabra para "roto".',
      questions: [
        {
          id: 'q1',
          question: 'My screen is ________.',
          answer: 'broken',
          explanation: '"Broken" se usa para objetos físicos dañados.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e46',
    type: 'flashcard',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Rápido',
          back: 'Fast',
          example: 'This computer is very fast.',
          pronunciation: '/fɑːst/',
          explanation: '"Fast" es rápido.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'No funciona',
      instructions: 'Ordena para decir "No funciona".',
      sentences: [
        {
          id: 's1',
          words: ['work', "doesn't", 'It'],
          correctSentence: "It doesn't work",
          translation: 'No funciona.',
          hint: 'Empieza con "It".',
          explanation: 'Usamos "work" para referirnos al funcionamiento de máquinas.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e48',
    type: 'matching',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Repaso de Dispositivos',
      instructions: 'Une el dispositivo con su uso principal.',
      pairs: [
        { id: 'p1', left: 'Camera', right: 'Photos' },
        { id: 'p2', left: 'Printer', right: 'Paper' },
        { id: 'p3', left: 'Headphones', right: 'Music' },
        { id: 'p4', left: 'Screen', right: 'Video' },
        { id: 'p5', left: 'Keyboard', right: 'Type' }
      ],
      explanation: 'Relacionamos el hardware con su función.'
    } as any
  },
  {
    id: 'a1-u17-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Ayuda técnica',
      instructions: 'Completa para pedir ayuda.',
      questions: [
        {
          id: 'q1',
          question: 'I need ________ with my computer.',
          answer: 'help',
          explanation: '"Help" es ayuda.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u17-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Technology',
    topicName: 'Tech Savvy',
    difficulty: 'hard',
    content: {
      title: 'Resumen Final',
      instructions: '¿Cuál es un dispositivo táctil?',
      questions: [
        {
          id: 'q1',
          question: 'A ________ has a touch screen.',
          options: ['tablet', 'printer', 'mouse'],
          correctAnswer: 0,
          explanation: '"Tablet" es un dispositivo que se usa con los dedos.'
        }
      ]
    }
  }
];
