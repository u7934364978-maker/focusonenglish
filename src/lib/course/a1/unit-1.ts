import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = [
  {
    "id": "a1-u1-e1",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Saludos comunes",
      "instructions": "Elige el saludo correcto para la mañana.",
      "questions": [
        {
          "id": "q1",
          "question": "¿Qué dices a las 8:00 AM?",
          "options": [
            {
              "text": "Good evening",
              "audio": "/audio/course/a1/unit-1/a1-u1-e1-q0-opt0-0a28b30e.mp3"
            },
            {
              "text": "Good morning",
              "audio": "/audio/course/a1/unit-1/a1-u1-e1-q0-opt1-4e442988.mp3"
            },
            {
              "text": "Good night",
              "audio": "/audio/course/a1/unit-1/a1-u1-e1-q0-opt2-c843a05d.mp3"
            }
          ],
          "correctAnswer": 1,
          "explanation": "\"Good morning\" se usa desde el amanecer hasta el mediodía."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e2",
    "type": "flashcard",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "items": [
        {
          "front": {
            "text": "Hola",
            "audio": "/audio/course/a1/unit-1/a1-u1-e2-item0-front-f688ae26.mp3"
          },
          "back": "Hello / Hi",
          "example": "Hello, how are you?",
          "pronunciation": "/həˈloʊ/",
          "explanation": "\"Hello\" es formal y \"Hi\" es más informal.",
          "exampleAudio": "/audio/course/a1/unit-1/a1-u1-e2-item0-example-c5c8fb4d.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e3",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Yo soy...",
      "instructions": "Ordena las palabras para traducir \"Yo soy Juan\".",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "Juan",
            "I",
            "am",
            "."
          ],
          "correctSentence": "I am Juan.",
          "translation": "Yo soy Juan.",
          "hint": "Empieza con el pronombre \"I\".",
          "explanation": "En inglés, el pronombre \"I\" siempre se escribe en mayúscula y va seguido de \"am\" para presentaciones.",
          "points": 10,
          "audio": "/audio/course/a1/unit-1/a1-u1-e3-s0-424cf2a2.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Conocer gente",
      "instructions": "¿Cuál es la respuesta más común a \"Nice to meet you\"?",
      "questions": [
        {
          "id": "q1",
          "question": "Persona A: Nice to meet you. \nPersona B: ___________",
          "options": [
            {
              "text": "Nice to meet you too",
              "audio": "/audio/course/a1/unit-1/a1-u1-e4-q0-opt0-76f54bd4.mp3"
            },
            {
              "text": "I am fine",
              "audio": "/audio/course/a1/unit-1/a1-u1-e4-q0-opt1-75dc9bbf.mp3"
            },
            {
              "text": "Good night",
              "audio": "/audio/course/a1/unit-1/a1-u1-e4-q0-opt2-c843a05d.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "Añadir \"too\" al final es la forma estándar de responder \"igualmente\"."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e5",
    "type": "speaking-analysis",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Pronunciación: Hello",
      "instructions": "Di \"Hello\" claramente por el micrófono.",
      "questions": [
        {
          "id": "q1",
          "text": "Hello",
          "correctAnswer": "Hello",
          "explanation": "La \"H\" en inglés suena como un suspiro suave, no es muda como en español.",
          "modelAudio": "/audio/course/a1/unit-1/a1-u1-e5-q0-model-8b1a9953.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e6",
    "type": "matching",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Parejas de saludos",
      "instructions": "Une el saludo en español con su traducción al inglés.",
      "pairs": [
        {
          "id": "1",
          "left": "Buenos días",
          "right": "Good morning",
          "audio": "/audio/course/a1/unit-1/a1-u1-e6-pair0-right-4e442988.mp3"
        },
        {
          "id": "2",
          "left": "Buenas tardes",
          "right": "Good afternoon",
          "audio": "/audio/course/a1/unit-1/a1-u1-e6-pair1-right-b6e12462.mp3"
        },
        {
          "id": "3",
          "left": "Buenas noches (saludo)",
          "right": "Good evening",
          "audio": "/audio/course/a1/unit-1/a1-u1-e6-pair2-right-0a28b30e.mp3"
        },
        {
          "id": "4",
          "left": "Hola",
          "right": "Hello",
          "audio": "/audio/course/a1/unit-1/a1-u1-e6-pair3-right-8b1a9953.mp3"
        },
        {
          "id": "5",
          "left": "Adiós",
          "right": "Goodbye",
          "audio": "/audio/course/a1/unit-1/a1-u1-e6-pair4-right-6fc42223.mp3"
        }
      ],
      "explanation": "Utilizamos \"Good morning\" hasta las 12 PM, \"Good afternoon\" hasta las 6 PM y \"Good evening\" para saludar por la noche."
    }
  },
  {
    "id": "a1-u1-e7",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Presentación personal",
      "instructions": "Completa el espacio con el verbo correcto.",
      "questions": [
        {
          "id": "q1",
          "text": "I ___ a student.",
          "correctAnswer": "am",
          "explanation": "El verbo \"to be\" para el pronombre \"I\" siempre es \"am\".",
          "audio": "/audio/course/a1/unit-1/a1-u1-e7-q0-ans-c04cd38a.mp3",
          "fullAudio": "/audio/course/a1/unit-1/a1-u1-e7-q0-full-2f1f75e8.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e8",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Despedidas",
      "instructions": "Elige la forma correcta de decir adiós.",
      "questions": [
        {
          "id": "q1",
          "question": "¿Cuál de estos es una despedida?",
          "options": [
            {
              "text": "Welcome",
              "audio": "/audio/course/a1/unit-1/a1-u1-e8-q0-opt0-83218ac3.mp3"
            },
            {
              "text": "Goodbye",
              "audio": "/audio/course/a1/unit-1/a1-u1-e8-q0-opt1-6fc42223.mp3"
            },
            {
              "text": "Hi",
              "audio": "/audio/course/a1/unit-1/a1-u1-e8-q0-opt2-c1a5298f.mp3"
            }
          ],
          "correctAnswer": 1,
          "explanation": "\"Goodbye\" es la forma estándar de despedirse."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e9",
    "type": "flashcard",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "items": [
        {
          "front": {
            "text": "¿Cuál es tu nombre?",
            "audio": "/audio/course/a1/unit-1/a1-u1-e9-item0-front-c014fdab.mp3"
          },
          "back": "What's your name?",
          "example": "Hi, what's your name?",
          "pronunciation": "/wɒts jɔː neɪm/",
          "explanation": "\"What's\" es la contracción de \"What is\".",
          "exampleAudio": "/audio/course/a1/unit-1/a1-u1-e9-item0-example-1a56f2aa.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e10",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Buenas tardes",
      "instructions": "Ordena las palabras para traducir \"Buenas tardes\".",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "afternoon",
            "Good",
            "!"
          ],
          "correctSentence": "Good afternoon!",
          "translation": "Buenas tardes.",
          "hint": "El adjetivo \"Good\" va primero.",
          "explanation": "En inglés, el adjetivo descriptivo (como Good) suele preceder al sustantivo (afternoon).",
          "points": 10,
          "audio": "/audio/course/a1/unit-1/a1-u1-e10-s0-afd7cf03.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e11",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Información personal",
      "instructions": "Elige el pronombre correcto para ti mismo.",
      "questions": [
        {
          "id": "q1",
          "question": "¿Cómo se dice \"Yo\" en inglés?",
          "options": [
            {
              "text": "You",
              "audio": "/audio/course/a1/unit-1/a1-u1-e11-q0-opt0-cae8d14e.mp3"
            },
            {
              "text": "I",
              "audio": "/audio/course/a1/unit-1/a1-u1-e11-q0-opt1-dd753679.mp3"
            },
            {
              "text": "He",
              "audio": "/audio/course/a1/unit-1/a1-u1-e11-q0-opt2-a64cf582.mp3"
            }
          ],
          "correctAnswer": 1,
          "explanation": "El pronombre \"I\" (Yo) siempre debe ir en mayúsculas en inglés."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e12",
    "type": "speaking-analysis",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Pronunciación: I am",
      "instructions": "Di \"I am\" seguido de tu nombre.",
      "questions": [
        {
          "id": "q1",
          "text": "I am",
          "correctAnswer": "I am",
          "explanation": "Pronuncia la \"I\" como \"ai\" y la \"am\" cerrando ligeramente los labios al final.",
          "modelAudio": "/audio/course/a1/unit-1/a1-u1-e12-q0-model-ac1be00f.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e13",
    "type": "matching",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Nombre y yo",
      "instructions": "Une las palabras con su traducción.",
      "pairs": [
        {
          "id": "1",
          "left": "Nombre",
          "right": "Name",
          "audio": "/audio/course/a1/unit-1/a1-u1-e13-pair0-right-49ee3087.mp3"
        },
        {
          "id": "2",
          "left": "Yo",
          "right": "I",
          "audio": "/audio/course/a1/unit-1/a1-u1-e13-pair1-right-dd753679.mp3"
        },
        {
          "id": "3",
          "left": "Estudiante",
          "right": "Student",
          "audio": "/audio/course/a1/unit-1/a1-u1-e13-pair2-right-f5c0a1c9.mp3"
        },
        {
          "id": "4",
          "left": "Maestro",
          "right": "Teacher",
          "audio": "/audio/course/a1/unit-1/a1-u1-e13-pair3-right-8ab7bbdf.mp3"
        },
        {
          "id": "5",
          "left": "Escuela",
          "right": "School",
          "audio": "/audio/course/a1/unit-1/a1-u1-e13-pair4-right-955cd869.mp3"
        }
      ],
      "explanation": "Estas son palabras básicas para presentarte en un entorno académico."
    }
  },
  {
    "id": "a1-u1-e14",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Bien, gracias",
      "instructions": "Completa la respuesta a \"¿Cómo estás?\".",
      "questions": [
        {
          "id": "q1",
          "text": "I am ___, thanks.",
          "correctAnswer": "fine",
          "explanation": "\"Fine\" es una de las respuestas más comunes para indicar que estás bien.",
          "audio": "/audio/course/a1/unit-1/a1-u1-e14-q0-ans-fff25994.mp3",
          "fullAudio": "/audio/course/a1/unit-1/a1-u1-e14-q0-full-93bd30ad.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e15",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Saludo nocturno",
      "instructions": "¿Cuál es un saludo por la noche?",
      "questions": [
        {
          "id": "q1",
          "question": "Cuando llegas a una fiesta a las 9:00 PM:",
          "options": [
            {
              "text": "Good night",
              "audio": "/audio/course/a1/unit-1/a1-u1-e15-q0-opt0-c843a05d.mp3"
            },
            {
              "text": "Good evening",
              "audio": "/audio/course/a1/unit-1/a1-u1-e15-q0-opt1-0a28b30e.mp3"
            },
            {
              "text": "Good morning",
              "audio": "/audio/course/a1/unit-1/a1-u1-e15-q0-opt2-4e442988.mp3"
            }
          ],
          "correctAnswer": 1,
          "explanation": "\"Good evening\" es para saludar por la noche. \"Good night\" es solo para despedirse."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e16",
    "type": "flashcard",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "items": [
        {
          "front": {
            "text": "¿Cómo estás?",
            "audio": "/audio/course/a1/unit-1/a1-u1-e16-item0-front-33c7b465.mp3"
          },
          "back": "How are you?",
          "example": "Hello, how are you today?",
          "pronunciation": "/haʊ ɑː juː/",
          "explanation": "Esta es la pregunta estándar para preguntar por el bienestar de alguien.",
          "exampleAudio": "/audio/course/a1/unit-1/a1-u1-e16-item0-example-493f0812.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e17",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Mi nombre es...",
      "instructions": "Ordena las palabras para traducir \"Mi nombre es Maria\".",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "Maria",
            "name",
            "My",
            "is",
            "."
          ],
          "correctSentence": "My name is Maria.",
          "translation": "Mi nombre es Maria.",
          "hint": "Empieza con \"My name\".",
          "explanation": "Usamos \"My name is...\" para presentarnos de forma clara.",
          "points": 10,
          "audio": "/audio/course/a1/unit-1/a1-u1-e17-s0-29283eeb.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Despedida informal",
      "instructions": "Elige una forma informal de decir adiós.",
      "questions": [
        {
          "id": "q1",
          "question": "Un amigo se va:",
          "options": [
            {
              "text": "See you later",
              "audio": "/audio/course/a1/unit-1/a1-u1-e18-q0-opt0-18bb1b56.mp3"
            },
            {
              "text": "Nice to meet you",
              "audio": "/audio/course/a1/unit-1/a1-u1-e18-q0-opt1-7f512576.mp3"
            },
            {
              "text": "Good morning",
              "audio": "/audio/course/a1/unit-1/a1-u1-e18-q0-opt2-4e442988.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"See you later\" significa \"Nos vemos luego\" y es muy común entre amigos."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e19",
    "type": "speaking-analysis",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Pronunciación: Nice to meet you",
      "instructions": "Di \"Nice to meet you\".",
      "questions": [
        {
          "id": "q1",
          "text": "Nice to meet you",
          "correctAnswer": "Nice to meet you",
          "explanation": "La frase suena casi como una sola palabra larga: nais-tu-mit-chu.",
          "modelAudio": "/audio/course/a1/unit-1/a1-u1-e19-q0-model-7f512576.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e20",
    "type": "matching",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Respuestas básicas",
      "instructions": "Une la pregunta con su respuesta lógica.",
      "pairs": [
        {
          "id": "1",
          "left": "How are you?",
          "right": "I am fine",
          "audio": "/audio/course/a1/unit-1/a1-u1-e20-pair0-right-75dc9bbf.mp3"
        },
        {
          "id": "2",
          "left": "What is your name?",
          "right": "My name is John",
          "audio": "/audio/course/a1/unit-1/a1-u1-e20-pair1-right-9f1ad2ee.mp3"
        },
        {
          "id": "3",
          "left": "Goodbye",
          "right": "See you later",
          "audio": "/audio/course/a1/unit-1/a1-u1-e20-pair2-right-18bb1b56.mp3"
        },
        {
          "id": "4",
          "left": "Nice to meet you",
          "right": "Nice to meet you too",
          "audio": "/audio/course/a1/unit-1/a1-u1-e20-pair3-right-76f54bd4.mp3"
        },
        {
          "id": "5",
          "left": "Are you a student?",
          "right": "Yes, I am",
          "audio": "/audio/course/a1/unit-1/a1-u1-e20-pair4-right-8bc0badb.mp3"
        }
      ],
      "explanation": "Emparejar preguntas con respuestas te ayuda a mantener una conversación fluida."
    }
  },
  {
    "id": "a1-u1-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Hola informal",
      "instructions": "¿Cuál es una forma corta e informal de decir \"Hello\"?",
      "questions": [
        {
          "id": "q1",
          "question": "Saludo informal entre amigos:",
          "options": [
            {
              "text": "Hi",
              "audio": "/audio/course/a1/unit-1/a1-u1-e21-q0-opt0-c1a5298f.mp3"
            },
            {
              "text": "Good morning",
              "audio": "/audio/course/a1/unit-1/a1-u1-e21-q0-opt1-4e442988.mp3"
            },
            {
              "text": "Good night",
              "audio": "/audio/course/a1/unit-1/a1-u1-e21-q0-opt2-c843a05d.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"Hi\" es perfectamente aceptable en casi cualquier situación informal."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e22",
    "type": "flashcard",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "items": [
        {
          "front": {
            "text": "Mucho gusto / Encantado",
            "audio": "/audio/course/a1/unit-1/a1-u1-e22-item0-front-13a07960.mp3"
          },
          "back": "Nice to meet you",
          "example": "Nice to meet you, I am Sarah.",
          "pronunciation": "/naɪs tu miːt juː/",
          "explanation": "Se usa exclusivamente la primera vez que conoces a alguien.",
          "exampleAudio": "/audio/course/a1/unit-1/a1-u1-e22-item0-example-0ff11b36.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e23",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Cómo estás",
      "instructions": "Ordena las palabras para preguntar \"¿Cómo estás?\".",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "you",
            "How",
            "are",
            "?"
          ],
          "correctSentence": "How are you?",
          "translation": "¿Cómo estás?",
          "hint": "Empieza con la palabra de pregunta \"How\".",
          "explanation": "En las preguntas, el verbo (are) suele ir antes que el sujeto (you).",
          "points": 10,
          "audio": "/audio/course/a1/unit-1/a1-u1-e23-s0-04e35eb3.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Abreviaturas comunes",
      "instructions": "¿Qué significa \"I'm\"?",
      "questions": [
        {
          "id": "q1",
          "question": "\"I'm\" es la contracción de:",
          "options": [
            {
              "text": "I am",
              "audio": "/audio/course/a1/unit-1/a1-u1-e24-q0-opt0-ac1be00f.mp3"
            },
            {
              "text": "I have",
              "audio": "/audio/course/a1/unit-1/a1-u1-e24-q0-opt1-3f432f3f.mp3"
            },
            {
              "text": "I will",
              "audio": "/audio/course/a1/unit-1/a1-u1-e24-q0-opt2-5bdd41f3.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "Las contracciones son muy comunes en el inglés hablado para ganar fluidez."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e25",
    "type": "speaking-analysis",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Pronunciación: Hi",
      "instructions": "Di \"Hi\" claramente.",
      "questions": [
        {
          "id": "q1",
          "text": "Hi",
          "correctAnswer": "Hi",
          "explanation": "La \"i\" suena como el diptongo \"ai\".",
          "modelAudio": "/audio/course/a1/unit-1/a1-u1-e25-q0-model-c1a5298f.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e26",
    "type": "matching",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Pronombres y Verbos",
      "instructions": "Une el pronombre con el verbo ser correspondiente.",
      "pairs": [
        {
          "id": "1",
          "left": "I",
          "right": "am",
          "audio": "/audio/course/a1/unit-1/a1-u1-e26-pair0-right-c04cd38a.mp3"
        },
        {
          "id": "2",
          "left": "You",
          "right": "are",
          "audio": "/audio/course/a1/unit-1/a1-u1-e26-pair1-right-4015e9ce.mp3"
        },
        {
          "id": "3",
          "left": "He",
          "right": "is",
          "audio": "/audio/course/a1/unit-1/a1-u1-e26-pair2-right-a2a551a6.mp3"
        },
        {
          "id": "4",
          "left": "She",
          "right": "is",
          "audio": "/audio/course/a1/unit-1/a1-u1-e26-pair3-right-a2a551a6.mp3"
        },
        {
          "id": "5",
          "left": "They",
          "right": "are",
          "audio": "/audio/course/a1/unit-1/a1-u1-e26-pair4-right-4015e9ce.mp3"
        }
      ],
      "explanation": "El verbo \"to be\" cambia su forma dependiendo de la persona que realiza la acción."
    }
  },
  {
    "id": "a1-u1-e27",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Saludo matutino",
      "instructions": "Completa la frase para saludar por la mañana.",
      "questions": [
        {
          "id": "q1",
          "text": "Good ___, teacher.",
          "correctAnswer": "morning",
          "explanation": "Utilizamos \"morning\" para referirnos a cualquier momento antes del almuerzo.",
          "audio": "/audio/course/a1/unit-1/a1-u1-e27-q0-ans-c7c3169c.mp3",
          "fullAudio": "/audio/course/a1/unit-1/a1-u1-e27-q0-full-a561ce8a.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e28",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Nombres",
      "instructions": "¿Cómo preguntas el nombre de alguien?",
      "questions": [
        {
          "id": "q1",
          "question": "Preguntar el nombre:",
          "options": [
            {
              "text": "What's your name?",
              "audio": "/audio/course/a1/unit-1/a1-u1-e28-q0-opt0-4a0804b8.mp3"
            },
            {
              "text": "How are you?",
              "audio": "/audio/course/a1/unit-1/a1-u1-e28-q0-opt1-04e35eb3.mp3"
            },
            {
              "text": "Who am I?",
              "audio": "/audio/course/a1/unit-1/a1-u1-e28-q0-opt2-c3a786f6.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "Esta es la pregunta más directa y común para conocer el nombre de alguien."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e29",
    "type": "flashcard",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "items": [
        {
          "front": {
            "text": "Hasta luego",
            "audio": "/audio/course/a1/unit-1/a1-u1-e29-item0-front-13849448.mp3"
          },
          "back": "See you later",
          "example": "Goodbye, see you later!",
          "pronunciation": "/siː juː ˈleɪtə/",
          "explanation": "\"Later\" significa luego o más tarde.",
          "exampleAudio": "/audio/course/a1/unit-1/a1-u1-e29-item0-example-1e2e2c8c.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e30",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Buenas noches",
      "instructions": "Ordena las palabras para despedirte por la noche.",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "night",
            "Good",
            "."
          ],
          "correctSentence": "Good night.",
          "translation": "Buenas noches (despedida).",
          "hint": "Usa \"night\" para despedirte.",
          "explanation": "Recuerda: \"Good evening\" para llegar, \"Good night\" para irse.",
          "points": 10,
          "audio": "/audio/course/a1/unit-1/a1-u1-e30-s0-c71bed73.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "¿Y tú?",
      "instructions": "¿Cómo devuelves la pregunta \"¿Cómo estás?\"?",
      "questions": [
        {
          "id": "q1",
          "question": "Persona A: How are you? \nPersona B: I am fine, ________?",
          "options": [
            {
              "text": "and you",
              "audio": "/audio/course/a1/unit-1/a1-u1-e31-q0-opt0-a96e02a5.mp3"
            },
            {
              "text": "who are you",
              "audio": "/audio/course/a1/unit-1/a1-u1-e31-q0-opt1-76a7c626.mp3"
            },
            {
              "text": "how is he",
              "audio": "/audio/course/a1/unit-1/a1-u1-e31-q0-opt2-47324162.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"And you?\" es la forma más corta y natural de devolver la pregunta."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e32",
    "type": "speaking-analysis",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Pronunciación: Goodbye",
      "instructions": "Di \"Goodbye\" claramente.",
      "questions": [
        {
          "id": "q1",
          "text": "Goodbye",
          "correctAnswer": "Goodbye",
          "explanation": "Asegúrate de marcar bien la \"d\" en medio de la palabra.",
          "modelAudio": "/audio/course/a1/unit-1/a1-u1-e32-q0-model-6fc42223.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e33",
    "type": "matching",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Más despedidas",
      "instructions": "Une las despedidas equivalentes.",
      "pairs": [
        {
          "id": "1",
          "left": "Adiós",
          "right": "Goodbye",
          "audio": "/audio/course/a1/unit-1/a1-u1-e33-pair0-right-6fc42223.mp3"
        },
        {
          "id": "2",
          "left": "Chao",
          "right": "Bye",
          "audio": "/audio/course/a1/unit-1/a1-u1-e33-pair1-right-b665d826.mp3"
        },
        {
          "id": "3",
          "left": "Nos vemos",
          "right": "See you",
          "audio": "/audio/course/a1/unit-1/a1-u1-e33-pair2-right-2290e91e.mp3"
        },
        {
          "id": "4",
          "left": "Cuídate",
          "right": "Take care",
          "audio": "/audio/course/a1/unit-1/a1-u1-e33-pair3-right-9f37b892.mp3"
        },
        {
          "id": "5",
          "left": "Buen día",
          "right": "Have a nice day",
          "audio": "/audio/course/a1/unit-1/a1-u1-e33-pair4-right-f65f2bc6.mp3"
        }
      ],
      "explanation": "Existen muchas formas de despedirse dependiendo del grado de confianza."
    }
  },
  {
    "id": "a1-u1-e34",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Mucho gusto corto",
      "instructions": "Completa la respuesta corta a \"Nice to meet you\".",
      "questions": [
        {
          "id": "q1",
          "text": "You ___.",
          "correctAnswer": "too",
          "explanation": "\"You too\" es una forma muy casual de decir \"igualmente\".",
          "audio": "/audio/course/a1/unit-1/a1-u1-e34-q0-ans-b403d3f0.mp3",
          "fullAudio": "/audio/course/a1/unit-1/a1-u1-e34-q0-full-82778c26.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Título de cortesía",
      "instructions": "¿Cómo te diriges a un profesor hombre?",
      "questions": [
        {
          "id": "q1",
          "question": "Good morning, ________ Smith.",
          "options": [
            {
              "text": "Mr.",
              "audio": "/audio/course/a1/unit-1/a1-u1-e35-q0-opt0-127469a6.mp3"
            },
            {
              "text": "Mrs.",
              "audio": "/audio/course/a1/unit-1/a1-u1-e35-q0-opt1-773442a1.mp3"
            },
            {
              "text": "Ms.",
              "audio": "/audio/course/a1/unit-1/a1-u1-e35-q0-opt2-29e32764.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"Mr.\" se usa para hombres, independientemente de su estado civil."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e36",
    "type": "flashcard",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "items": [
        {
          "front": {
            "text": "Señorita / Señora",
            "audio": "/audio/course/a1/unit-1/a1-u1-e36-item0-front-33f17b7e.mp3"
          },
          "back": "Ms.",
          "example": "Hello, Ms. Johnson.",
          "pronunciation": "/mɪz/",
          "explanation": "\"Ms.\" es la forma más segura y profesional de dirigirse a una mujer.",
          "exampleAudio": "/audio/course/a1/unit-1/a1-u1-e36-item0-example-c5d5cc60.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e37",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Encantado",
      "instructions": "Ordena para decir \"Encantado de conocerte\".",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "meet",
            "to",
            "you",
            "Nice"
          ],
          "correctSentence": "Nice to meet you",
          "translation": "Encantado de conocerte.",
          "hint": "Empieza con \"Nice\".",
          "explanation": "Esta frase es la forma estándar de cortesía al conocer a alguien nuevo.",
          "points": 10,
          "audio": "/audio/course/a1/unit-1/a1-u1-e37-s0-7f512576.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e38",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "¿Cómo va todo?",
      "instructions": "Elige la forma más natural de preguntar \"¿Cómo va?\".",
      "questions": [
        {
          "id": "q1",
          "question": "Informal check-in:",
          "options": [
            {
              "text": "How is it going?",
              "audio": "/audio/course/a1/unit-1/a1-u1-e38-q0-opt0-bedcc50f.mp3"
            },
            {
              "text": "What is that?",
              "audio": "/audio/course/a1/unit-1/a1-u1-e38-q0-opt1-f7a80857.mp3"
            },
            {
              "text": "Where are you?",
              "audio": "/audio/course/a1/unit-1/a1-u1-e38-q0-opt2-eccd993f.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"How is it going?\" es una alternativa muy común a \"How are you?\"."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e39",
    "type": "speaking-analysis",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Pronunciación: Mr.",
      "instructions": "Di \"Mr.\" seguido de un nombre.",
      "questions": [
        {
          "id": "q1",
          "text": "Mr.",
          "correctAnswer": "Mr.",
          "explanation": "Se pronuncia como \"míster\".",
          "modelAudio": "/audio/course/a1/unit-1/a1-u1-e39-q0-model-127469a6.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e40",
    "type": "matching",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Títulos y Nombres",
      "instructions": "Une el título con su uso correcto.",
      "pairs": [
        {
          "id": "1",
          "left": "Mr.",
          "right": "Hombre",
          "audio": "/audio/course/a1/unit-1/a1-u1-e40-pair0-right-7a9c3175.mp3"
        },
        {
          "id": "2",
          "left": "Mrs.",
          "right": "Mujer casada",
          "audio": "/audio/course/a1/unit-1/a1-u1-e40-pair1-right-c5b7ccb4.mp3"
        },
        {
          "id": "3",
          "left": "Ms.",
          "right": "Mujer (general)",
          "audio": "/audio/course/a1/unit-1/a1-u1-e40-pair2-right-bc3cc614.mp3"
        },
        {
          "id": "4",
          "left": "First name",
          "right": "Nombre",
          "audio": "/audio/course/a1/unit-1/a1-u1-e40-pair3-right-4777bbaa.mp3"
        },
        {
          "id": "5",
          "left": "Last name",
          "right": "Apellido",
          "audio": "/audio/course/a1/unit-1/a1-u1-e40-pair4-right-289e1725.mp3"
        }
      ],
      "explanation": "Saber usar los títulos de cortesía es fundamental para la etiqueta en inglés."
    }
  },
  {
    "id": "a1-u1-e41",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Contracción de nombre",
      "instructions": "Escribe la forma corta de \"What is\".",
      "questions": [
        {
          "id": "q1",
          "text": "___ your name?",
          "correctAnswer": "What's",
          "explanation": "La contracción \"What's\" es mucho más frecuente que \"What is\" al hablar.",
          "audio": "/audio/course/a1/unit-1/a1-u1-e41-q0-ans-3fb1cbff.mp3",
          "fullAudio": "/audio/course/a1/unit-1/a1-u1-e41-q0-full-4a0804b8.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Respuesta negativa",
      "instructions": "¿Cómo dices que \"no\" eres algo?",
      "questions": [
        {
          "id": "q1",
          "question": "I ________ a teacher.",
          "options": [
            {
              "text": "am not",
              "audio": "/audio/course/a1/unit-1/a1-u1-e42-q0-opt0-8f64b007.mp3"
            },
            {
              "text": "is not",
              "audio": "/audio/course/a1/unit-1/a1-u1-e42-q0-opt1-b1b55b5b.mp3"
            },
            {
              "text": "are not",
              "audio": "/audio/course/a1/unit-1/a1-u1-e42-q0-opt2-36fc81cc.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "Para negar con \"I am\", simplemente añadimos \"not\" después."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e43",
    "type": "flashcard",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "items": [
        {
          "front": {
            "text": "¡Tenga un buen día!",
            "audio": "/audio/course/a1/unit-1/a1-u1-e43-item0-front-ba572173.mp3"
          },
          "back": "Have a nice day!",
          "example": "Goodbye, have a nice day!",
          "pronunciation": "/hæv ə naɪs deɪ/",
          "explanation": "Una forma muy amable y común de despedirse de alguien.",
          "exampleAudio": "/audio/course/a1/unit-1/a1-u1-e43-item0-example-a2a4d885.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e44",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Yo no soy",
      "instructions": "Ordena para decir \"Yo no soy Juan\".",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "not",
            "Juan",
            "am",
            "I"
          ],
          "correctSentence": "I am not Juan",
          "translation": "Yo no soy Juan.",
          "hint": "Pon \"not\" después de \"am\".",
          "explanation": "La estructura negativa es: Sujeto + am/is/are + not.",
          "points": 10,
          "audio": "/audio/course/a1/unit-1/a1-u1-e44-s0-ecf8f828.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e45",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Plural de cortesía",
      "instructions": "¿Cómo saludas a una clase entera?",
      "questions": [
        {
          "id": "q1",
          "question": "Hello, ________.",
          "options": [
            {
              "text": "everyone",
              "audio": "/audio/course/a1/unit-1/a1-u1-e45-q0-opt0-ed881bac.mp3"
            },
            {
              "text": "someone",
              "audio": "/audio/course/a1/unit-1/a1-u1-e45-q0-opt1-1f2bf2e0.mp3"
            },
            {
              "text": "no one",
              "audio": "/audio/course/a1/unit-1/a1-u1-e45-q0-opt2-cb9a070e.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"Everyone\" significa \"todos\" y se usa para saludar a un grupo."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e46",
    "type": "speaking-analysis",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Pronunciación: Everyone",
      "instructions": "Di \"Hello everyone\".",
      "questions": [
        {
          "id": "q1",
          "text": "Hello everyone",
          "correctAnswer": "Hello everyone",
          "explanation": "Marca bien la \"v\" en \"everyone\".",
          "modelAudio": "/audio/course/a1/unit-1/a1-u1-e46-q0-model-83cb6f70.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e47",
    "type": "matching",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Resumen de saludos",
      "instructions": "Une cada saludo con su momento del día.",
      "pairs": [
        {
          "id": "1",
          "left": "7 AM",
          "right": "Good morning",
          "audio": "/audio/course/a1/unit-1/a1-u1-e47-pair0-right-4e442988.mp3"
        },
        {
          "id": "2",
          "left": "3 PM",
          "right": "Good afternoon",
          "audio": "/audio/course/a1/unit-1/a1-u1-e47-pair1-right-b6e12462.mp3"
        },
        {
          "id": "3",
          "left": "8 PM",
          "right": "Good evening",
          "audio": "/audio/course/a1/unit-1/a1-u1-e47-pair2-right-0a28b30e.mp3"
        },
        {
          "id": "4",
          "left": "11 PM (al irse)",
          "right": "Good night",
          "audio": "/audio/course/a1/unit-1/a1-u1-e47-pair3-right-c843a05d.mp3"
        },
        {
          "id": "5",
          "left": "A cualquier hora",
          "right": "Hello",
          "audio": "/audio/course/a1/unit-1/a1-u1-e47-pair4-right-8b1a9953.mp3"
        }
      ],
      "explanation": "Saber elegir el saludo correcto demuestra que tienes un buen nivel de educación en el idioma."
    }
  },
  {
    "id": "a1-u1-e48",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Apellido",
      "instructions": "Escribe la palabra para \"apellido\".",
      "questions": [
        {
          "id": "q1",
          "text": "What is your ___ name?",
          "correctAnswer": "last",
          "explanation": "En inglés se usa \"last name\" o \"surname\" para el apellido.",
          "audio": "/audio/course/a1/unit-1/a1-u1-e48-q0-ans-98bd1c45.mp3",
          "fullAudio": "/audio/course/a1/unit-1/a1-u1-e48-q0-full-6b679b73.mp3"
        }
      ]
    }
  },
  {
    "id": "a1-u1-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "¿Qué tal?",
      "instructions": "¿Cuál es la forma más informal (estilo Duolingo) de decir \"¿Qué pasa?\"?",
      "questions": [
        {
          "id": "q1",
          "question": "Very informal greeting:",
          "options": [
            {
              "text": "What's up?",
              "audio": "/audio/course/a1/unit-1/a1-u1-e49-q0-opt0-7f603a8b.mp3"
            },
            {
              "text": "How do you do?",
              "audio": "/audio/course/a1/unit-1/a1-u1-e49-q0-opt1-b15ff1f5.mp3"
            },
            {
              "text": "Good day",
              "audio": "/audio/course/a1/unit-1/a1-u1-e49-q0-opt2-531a8b25.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"What's up?\" es extremadamente común entre gente joven y amigos cercanos."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "Resumen final",
      "instructions": "¿Cuál es la mejor forma de presentarte por primera vez?",
      "questions": [
        {
          "id": "q1",
          "question": "Conocer a alguien nuevo:",
          "options": [
            {
              "text": "Hi, I am John. Nice to meet you.",
              "audio": "/audio/course/a1/unit-1/a1-u1-e50-q0-opt0-c58006e8.mp3"
            },
            {
              "text": "Goodbye John.",
              "audio": "/audio/course/a1/unit-1/a1-u1-e50-q0-opt1-f818f8ae.mp3"
            },
            {
              "text": "How are you teacher?",
              "audio": "/audio/course/a1/unit-1/a1-u1-e50-q0-opt2-8361cd61.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "Saludar, decir tu nombre y añadir una frase de cortesía es la estructura perfecta."
        }
      ]
    }
  }
];
