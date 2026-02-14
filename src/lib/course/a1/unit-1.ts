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
      "title": "[[Common|Comunes]] [[Greetings|Saludos]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|saludo]] [[greeting|correcto]] [[for|para]] [[the|la]] [[morning|mañana]].",
      "questions": [
        {
          "id": "q1",
          "question": "¿Qué dices a las 8:00 AM?",
          "options": [
            {
              "text": "[[Good evening|Buenas noches]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e1-q0-opt0-0a28b30e.mp3"
            },
            {
              "text": "[[Good morning|Buenos días]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e1-q0-opt1-4e442988.mp3"
            },
            {
              "text": "[[Good night|Buenas noches]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e1-q0-opt2-c843a05d.mp3"
            }
          ],
          "correctAnswer": 1,
          "explanation": "\"[[Good morning|Buenos días]]\" se usa desde el amanecer hasta el mediodía."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "[[Translating|Traducción]] [[Hello|de Hola]]",
      "instructions": "¿Cómo se dice \"Hola\" en inglés?",
      "questions": [
        {
          "id": "q1",
          "question": "Hola:",
          "options": [
            {
              "text": "[[Hello|Hola]] / [[Hi|Hola]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e2-item0-example-c5c8fb4d.mp3"
            },
            {
              "text": "[[Goodbye|Adiós]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e8-q0-opt1-6fc42223.mp3"
            },
            {
              "text": "[[Good morning|Buenos días]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e1-q0-opt1-4e442988.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"[[Hello|Hola]]\" es formal y \"[[Hi|Hola]]\" es más informal."
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
      "title": "[[I|Yo]] [[am|soy]]...",
      "instructions": "Ordena las palabras para traducir \"Yo soy Juan\".",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "[[Juan|Juan]].",
            "[[I|Yo]]",
            "[[am|soy]]"
          ],
          "correctSentence": "[[I|Yo]] [[am|soy]] [[Juan|Juan]].",
          "translation": "Yo soy Juan.",
          "hint": "Empieza con el pronombre \"[[I|Yo]]\".",
          "explanation": "En inglés, el pronombre \"[[I|Yo]]\" siempre se escribe en mayúscula y va seguido de \"[[am|soy]]\" para presentaciones.",
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
      "title": "[[Meeting|Conocer]] [[People|gente]]",
      "instructions": "¿Cuál es la respuesta más común a \"[[Nice to meet you|Mucho gusto]]\"?",
      "questions": [
        {
          "id": "q1",
          "question": "Persona A: [[Nice to meet you|Mucho gusto]]. \nPersona B: ___________",
          "options": [
            {
              "text": "[[Nice to meet you too|Mucho gusto también]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e4-q0-opt0-76f54bd4.mp3"
            },
            {
              "text": "[[I am fine|Estoy bien]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e4-q0-opt1-75dc9bbf.mp3"
            },
            {
              "text": "[[Good night|Buenas noches]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e4-q0-opt2-c843a05d.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "Añadir \"[[too|también]]\" al final es la forma estándar de responder \"igualmente\"."
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
      "title": "Pronunciación: [[Hello|Hola]]",
      "instructions": "Di \"[[Hello|Hola]]\" claramente por el micrófono.",
      "questions": [
        {
          "id": "q1",
          "text": "[[Hello|Hola]]",
          "correctAnswer": "Hello",
          "explanation": "La \"[[H|Hache]]\" en inglés suena como un suspiro suave, no es muda como en español.",
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
      "title": "[[Greeting|Saludos]] [[Pairs|Parejas]]",
      "instructions": "[[Match|Une]] [[the|el]] [[Spanish|español]] [[greeting|saludo]] [[with|con]] [[its|su]] [[English|inglés]] [[translation|traducción]].",
      "pairs": [
        {
          "id": "1",
          "left": "Buenos días",
          "right": "[[Good morning|Buenos días]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e6-pair0-right-4e442988.mp3"
        },
        {
          "id": "2",
          "left": "Buenas tardes",
          "right": "[[Good afternoon|Buenas tardes]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e6-pair1-right-b6e12462.mp3"
        },
        {
          "id": "3",
          "left": "Buenas noches (saludo)",
          "right": "[[Good evening|Buenas noches]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e6-pair2-right-0a28b30e.mp3"
        },
        {
          "id": "4",
          "left": "Hola",
          "right": "[[Hello|Hola]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e6-pair3-right-8b1a9953.mp3"
        },
        {
          "id": "5",
          "left": "Adiós",
          "right": "[[Goodbye|Adiós]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e6-pair4-right-6fc42223.mp3"
        }
      ],
      "explanation": "Utilizamos \"[[Good morning|Buenos días]]\" hasta las 12 PM, \"[[Good afternoon|Buenas tardes]]\" hasta las 6 PM y \"[[Good evening|Buenas noches]]\" para saludar por la noche."
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
      "title": "[[Personal|Personal]] [[Introduction|Presentación]]",
      "instructions": "[[Fill|Completa]] [[the|el]] [[gap|espacio]] [[with|con]] [[the|el]] [[correct|correcto]] [[verb|verbo]].",
      "questions": [
        {
          "id": "q1",
          "text": "[[I|Yo]] ___ [[a student|un estudiante]].",
          "correctAnswer": "am",
          "explanation": "El verbo \"[[to be|ser/estar]]\" para el pronombre \"[[I|Yo]]\" siempre es \"[[am|soy/estoy]]\".",
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
      "title": "[[Goodbyes|Despedidas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[way|forma]] [[to|de]] [[say|decir]] [[goodbye|adiós]].",
      "questions": [
        {
          "id": "q1",
          "question": "¿Cuál de estos es una despedida?",
          "options": [
            {
              "text": "[[Welcome|Bienvenido]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e8-q0-opt0-83218ac3.mp3"
            },
            {
              "text": "[[Goodbye|Adiós]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e8-q0-opt1-6fc42223.mp3"
            },
            {
              "text": "[[Hi|Hola]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e8-q0-opt2-c1a5298f.mp3"
            }
          ],
          "correctAnswer": 1,
          "explanation": "\"[[Goodbye|Adiós]]\" es la forma estándar de despedirse."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e9",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "[[What|Cuál]] [[is|es]] [[your|tu]] [[name|nombre]]?",
      "instructions": "[[Put|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[ask|preguntar]] [[the|el]] [[name|nombre]].",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "[[What's|Cual es]]",
            "[[your|tu]]",
            "[[name|nombre]]?"
          ],
          "correctSentence": "[[What's|Cual es]] [[your|tu]] [[name|nombre]]?",
          "translation": "¿Cuál es tu nombre?",
          "hint": "Empieza con \"[[What's|Cual es]]\".",
          "explanation": "\"[[What's|Cual es]]\" es la contracción de \"[[What is|Cual es]]\".",
          "points": 10,
          "audio": "/audio/course/a1/unit-1/a1-u1-e9-item0-example-1a56f2aa.mp3"
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
      "title": "[[Good|Buenas]] [[afternoon|tardes]]",
      "instructions": "Ordena las palabras para traducir \"Buenas tardes\".",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "[[Good|Buenas]]",
            "[[afternoon|tardes]]!"
          ],
          "correctSentence": "[[Good|Buenas]] [[afternoon|tardes]]!",
          "translation": "Buenas tardes.",
          "hint": "El adjetivo \"[[Good|Buenas]]\" va primero.",
          "explanation": "En inglés, el adjetivo descriptivo (como [[Good|Buenas]]) suele preceder al sustantivo ([[afternoon|tardes]]).",
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
      "title": "[[Personal|Personal]] [[Information|Información]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[pronoun|pronombre]] [[for|para]] [[yourself|ti mismo]].",
      "questions": [
        {
          "id": "q1",
          "question": "¿Cómo se dice \"Yo\" en inglés?",
          "options": [
            {
              "text": "[[You|Tú]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e11-q0-opt0-cae8d14e.mp3"
            },
            {
              "text": "[[I|Yo]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e11-q0-opt1-dd753679.mp3"
            },
            {
              "text": "[[He|Él]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e11-q0-opt2-a64cf582.mp3"
            }
          ],
          "correctAnswer": 1,
          "explanation": "El pronombre \"[[I|Yo]]\" siempre debe ir en mayúsculas en inglés."
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
      "title": "Pronunciación: [[I am|Yo soy]]",
      "instructions": "Di \"[[I am|Yo soy]]\" seguido de tu nombre.",
      "questions": [
        {
          "id": "q1",
          "text": "[[I am|Yo soy]]",
          "correctAnswer": "I am",
          "explanation": "Pronuncia la \"[[I|Yo]]\" como \"[[ai|ai]]\" y la \"[[am|soy]]\" cerrando ligeramente los labios al final.",
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
      "title": "[[Name|Nombre]] [[and|y]] [[I|yo]]",
      "instructions": "[[Match|Une]] [[the|las]] [[words|palabras]] [[with|con]] [[their|su]] [[translation|traducción]].",
      "pairs": [
        {
          "id": "1",
          "left": "Nombre",
          "right": "[[Name|Nombre]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e13-pair0-right-49ee3087.mp3"
        },
        {
          "id": "2",
          "left": "Yo",
          "right": "[[I|Yo]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e13-pair1-right-dd753679.mp3"
        },
        {
          "id": "3",
          "left": "Estudiante",
          "right": "[[Student|Estudiante]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e13-pair2-right-f5c0a1c9.mp3"
        },
        {
          "id": "4",
          "left": "Maestro",
          "right": "[[Teacher|Maestro]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e13-pair3-right-8ab7bbdf.mp3"
        },
        {
          "id": "5",
          "left": "Escuela",
          "right": "[[School|Escuela]]",
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
      "title": "[[Fine|Bien]], [[thanks|gracias]]",
      "instructions": "Completa la respuesta a \"¿Cómo estás?\".",
      "questions": [
        {
          "id": "q1",
          "text": "[[I am|Yo estoy]] ___, [[thanks|gracias]].",
          "correctAnswer": "fine",
          "explanation": "\"[[Fine|Bien]]\" es una de las respuestas más comunes para indicar que estás bien.",
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
      "title": "[[Evening|Nocturno]] [[Greeting|Saludo]]",
      "instructions": "[[Which|Cuál]] [[is|es]] [[an|un]] [[evening|nocturno]] [[greeting?|saludo?]]",
      "questions": [
        {
          "id": "q1",
          "question": "Cuando llegas a una fiesta a las 9:00 PM:",
          "options": [
            {
              "text": "[[Good night|Buenas noches (despedida)]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e15-q0-opt0-c843a05d.mp3"
            },
            {
              "text": "[[Good evening|Buenas noches (saludo)]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e15-q0-opt1-0a28b30e.mp3"
            },
            {
              "text": "[[Good morning|Buenos días]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e15-q0-opt2-4e442988.mp3"
            }
          ],
          "correctAnswer": 1,
          "explanation": "\"[[Good evening|Buenas noches]]\" es para saludar por la noche. \"[[Good night|Buenas noches]]\" es solo para despedirse."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e16",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "[[How|Cómo]] [[are|estás]] [[you|tú]]?",
      "instructions": "[[Complete|Completa]] [[the|la]] [[question|pregunta]] [[to|para]] [[know|saber]] [[how|cómo]] [[someone|alguien]] [[is|está]].",
      "questions": [
        {
          "id": "q1",
          "text": "[[How|Cómo]] ___ [[you|tú]]?",
          "correctAnswer": "are",
          "explanation": "La frase \"[[How are you?|¿Cómo estás?]]\" es la forma estándar de preguntar por el bienestar de alguien.",
          "audio": "/audio/course/a1/unit-1/a1-u1-e16-item0-example-493f0812.mp3",
          "fullAudio": "/audio/course/a1/unit-1/a1-u1-e16-item0-example-493f0812.mp3"
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
      "title": "[[My|Mi]] [[name|nombre]] [[is|es]]...",
      "instructions": "Ordena las palabras para traducir \"Mi nombre es Maria\".",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "[[My|Mi]]",
            "[[name|nombre]]",
            "[[is|es]]",
            "[[Maria|Maria]]."
          ],
          "correctSentence": "[[My|Mi]] [[name|nombre]] [[is|es]] [[Maria|Maria]].",
          "translation": "Mi nombre es Maria.",
          "hint": "Empieza con \"[[My name|Mi nombre]]\".",
          "explanation": "Usamos \"[[My name is...|Mi nombre es...]]\" para presentarnos de forma clara.",
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
      "title": "[[Informal|Informal]] [[Goodbye|Despedida]]",
      "instructions": "[[Choose|Elige]] [[an|una]] [[informal|informal]] [[way|forma]] [[to|de]] [[say|decir]] [[goodbye|adiós]].",
      "questions": [
        {
          "id": "q1",
          "question": "Un amigo se va:",
          "options": [
            {
              "text": "[[See you later|Nos vemos luego]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e18-q0-opt0-18bb1b56.mp3"
            },
            {
              "text": "[[Nice to meet you|Mucho gusto]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e18-q0-opt1-7f512576.mp3"
            },
            {
              "text": "[[Good morning|Buenos días]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e18-q0-opt2-4e442988.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"[[See you later|Nos vemos luego]]\" significa \"Nos vemos luego\" y es muy común entre amigos."
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
      "title": "Pronunciación: [[Nice to meet you|Mucho gusto]]",
      "instructions": "Di \"[[Nice to meet you|Mucho gusto]]\".",
      "questions": [
        {
          "id": "q1",
          "text": "[[Nice to meet you|Mucho gusto]]",
          "correctAnswer": "Nice to meet you",
          "explanation": "La frase suena casi como una sola palabra larga: [[nais-tu-mit-chu|nais-tu-mit-chu]].",
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
      "title": "[[Basic|Básicas]] [[Responses|Respuestas]]",
      "instructions": "[[Match|Une]] [[the|la]] [[question|pregunta]] [[with|con]] [[its|su]] [[logical|lógica]] [[response|respuesta]].",
      "pairs": [
        {
          "id": "1",
          "left": "[[How are you?|¿Cómo estás?]]",
          "right": "[[I am fine|Estoy bien]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e20-pair0-right-75dc9bbf.mp3"
        },
        {
          "id": "2",
          "left": "[[What is your name?|¿Cuál es tu nombre?]]",
          "right": "[[My name is John|Mi nombre es John]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e20-pair1-right-9f1ad2ee.mp3"
        },
        {
          "id": "3",
          "left": "[[Goodbye|Adiós]]",
          "right": "[[See you later|Nos vemos luego]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e20-pair2-right-18bb1b56.mp3"
        },
        {
          "id": "4",
          "left": "[[Nice to meet you|Mucho gusto]]",
          "right": "[[Nice to meet you too|Mucho gusto también]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e20-pair3-right-76f54bd4.mp3"
        },
        {
          "id": "5",
          "left": "[[Are you a student?|¿Eres un estudiante?]]",
          "right": "[[Yes, I am|Sí, lo soy]]",
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
      "title": "[[Informal|Informal]] [[Hello|Hola]]",
      "instructions": "¿Cuál es una forma corta e informal de decir \"[[Hello|Hola]]\"?",
      "questions": [
        {
          "id": "q1",
          "question": "Saludo informal entre amigos:",
          "options": [
            {
              "text": "[[Hi|Hola]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e21-q0-opt0-c1a5298f.mp3"
            },
            {
              "text": "[[Good morning|Buenos días]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e21-q0-opt1-4e442988.mp3"
            },
            {
              "text": "[[Good night|Buenas noches]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e21-q0-opt2-c843a05d.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"[[Hi|Hola]]\" es perfectamente aceptable en casi cualquier situación informal."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e22",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "[[Translating|Traducción]] [[Nice to meet you|de Mucho Gusto]]",
      "instructions": "¿Cómo se dice \"Mucho gusto\" o \"Encantado\"?",
      "questions": [
        {
          "id": "q1",
          "question": "Mucho gusto:",
          "options": [
            {
              "text": "[[Nice to meet you|Mucho gusto]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e19-q0-model-7f512576.mp3"
            },
            {
              "text": "[[How are you?|¿Cómo estás?]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e16-item0-example-493f0812.mp3"
            },
            {
              "text": "[[What is your name?|¿Cuál es tu nombre?]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e9-item0-example-1a56f2aa.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "Se usa exclusivamente la primera vez que conoces a alguien."
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
      "title": "[[How|Cómo]] [[are|estás]] [[you|tú]]",
      "instructions": "Ordena las palabras para preguntar \"¿Cómo estás?\".",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "[[How|Cómo]]",
            "[[are|estás]]",
            "[[you|tú]]?"
          ],
          "correctSentence": "[[How|Cómo]] [[are|estás]] [[you|tú]]?",
          "translation": "¿Cómo estás?",
          "hint": "Empieza con la palabra de pregunta \"[[How|Cómo]]\".",
          "explanation": "En las preguntas, el verbo ([[are|estás]]) suele ir antes que el sujeto ([[you|tú]]).",
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
      "title": "[[Common|Comunes]] [[Abbreviations|Abreviaturas]]",
      "instructions": "¿Qué significa \"[[I'm|Yo soy/estoy]]\"?",
      "questions": [
        {
          "id": "q1",
          "question": "\"[[I'm|Yo soy/estoy]]\" es la contracción de:",
          "options": [
            {
              "text": "[[I am|Yo soy/estoy]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e24-q0-opt0-ac1be00f.mp3"
            },
            {
              "text": "[[I have|Yo tengo]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e24-q0-opt1-3f432f3f.mp3"
            },
            {
              "text": "[[I will|Yo haré]]",
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
      "title": "Pronunciación: [[Hi|Hola]]",
      "instructions": "Di \"[[Hi|Hola]]\" claramente.",
      "questions": [
        {
          "id": "q1",
          "text": "[[Hi|Hola]]",
          "correctAnswer": "Hi",
          "explanation": "La \"[[i|i]]\" suena como el diptongo \"[[ai|ai]]\".",
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
      "title": "[[Pronouns|Pronombres]] [[and|y]] [[Verbs|Verbos]]",
      "instructions": "[[Match|Une]] [[the|el]] [[pronoun|pronombre]] [[with|con]] [[the|el]] [[corresponding|correspondiente]] [[verb|verbo]] [[to| ]] [[be|ser]].",
      "pairs": [
        {
          "id": "1",
          "left": "[[I|Yo]]",
          "right": "[[am|soy/estoy]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e26-pair0-right-c04cd38a.mp3"
        },
        {
          "id": "2",
          "left": "[[You|Tú]]",
          "right": "[[are|eres/estás]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e26-pair1-right-4015e9ce.mp3"
        },
        {
          "id": "3",
          "left": "[[He|Él]]",
          "right": "[[is|es/está (él)]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e26-pair2-right-a2a551a6.mp3"
        },
        {
          "id": "4",
          "left": "[[She|Ella]]",
          "right": "[[is|es/está (ella)]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e26-pair3-right-a2a551a6.mp3"
        },
        {
          "id": "5",
          "left": "[[They|Ellos]]",
          "right": "[[are|son/están]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e26-pair4-right-4015e9ce.mp3"
        }
      ],
      "explanation": "El verbo \"[[to be|ser/estar]]\" cambia su forma dependiendo de la persona que realiza la acción."
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
      "title": "[[Morning|Matutino]] [[Greeting|Saludo]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[phrase|frase]] [[to|para]] [[greet|saludar]] [[in|por]] [[the|la]] [[morning|mañana]].",
      "questions": [
        {
          "id": "q1",
          "text": "[[Good|Buenos/as]] ___ , [[teacher|profesor]].",
          "correctAnswer": "morning",
          "explanation": "Utilizamos \"[[morning|mañana]]\" para referirnos a cualquier momento antes del almuerzo.",
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
      "title": "[[Names|Nombres]]",
      "instructions": "[[How|Cómo]] [[do| ]] [[you| ]] [[ask|preguntas]] [[someone's|el de alguien]] [[name?|nombre?]]",
      "questions": [
        {
          "id": "q1",
          "question": "Preguntar el nombre:",
          "options": [
            {
              "text": "[[What's your name?|¿Cuál es tu nombre?]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e28-q0-opt0-4a0804b8.mp3"
            },
            {
              "text": "[[How are you?|¿Cómo estás?]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e28-q0-opt1-04e35eb3.mp3"
            },
            {
              "text": "[[Who am I?|¿Quién soy yo?]]",
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
    "type": "fill-blank",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "[[See|Hasta]] [[you|luego]] [[later| ]]",
      "instructions": "Completa la frase para decir \"Hasta luego\".",
      "questions": [
        {
          "id": "q1",
          "text": "[[See|Ver]] [[you|te]] ___.",
          "correctAnswer": "later",
          "explanation": "\"[[Later|Más tarde]]\" significa luego o más tarde.",
          "audio": "/audio/course/a1/unit-1/a1-u1-e29-item0-front-13849448.mp3",
          "fullAudio": "/audio/course/a1/unit-1/a1-u1-e29-item0-example-1e2e2c8c.mp3"
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
      "title": "[[Good|Buenas]] [[night|noches]]",
      "instructions": "[[Put|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[say|despedirte]] [[good|buenas]] [[night|noches]].",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "[[Good|Buenas]]",
            "[[night|noches]]."
          ],
          "correctSentence": "[[Good|Buenas]] [[night|noches]].",
          "translation": "Buenas noches (despedida).",
          "hint": "Usa \"[[night|noches]]\" para despedirte.",
          "explanation": "Recuerda: \"[[Good evening|Buenas noches (saludo)]]\" para llegar, \"[[Good night|Buenas noches (despedida)]]\" para irse.",
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
      "title": "[[And|¿Y]] [[you?|tú?]]",
      "instructions": "¿Cómo devuelves la pregunta \"¿Cómo estás?\"?",
      "questions": [
        {
          "id": "q1",
          "question": "Persona A: [[How are you?|¿Cómo estás?]] \nPersona B: [[I am fine|Estoy bien]], ________?",
          "options": [
            {
              "text": "[[and you|y tú]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e31-q0-opt0-a96e02a5.mp3"
            },
            {
              "text": "[[who are you|quién eres]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e31-q0-opt1-76a7c626.mp3"
            },
            {
              "text": "[[how is he|cómo está él]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e31-q0-opt2-47324162.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"[[And you?|¿Y tú?]]\" es la forma más corta y natural de devolver la pregunta."
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
      "title": "Pronunciación: [[Goodbye|Adiós]]",
      "instructions": "Di \"[[Goodbye|Adiós]]\" claramente.",
      "questions": [
        {
          "id": "q1",
          "text": "[[Goodbye|Adiós]]",
          "correctAnswer": "Goodbye",
          "explanation": "Asegúrate de marcar bien la \"[[d|de]]\" en medio de la palabra.",
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
      "title": "[[More|Más]] [[Goodbyes|despedidas]]",
      "instructions": "[[Match|Une]] [[the|las]] [[equivalent|equivalentes]] [[goodbyes|despedidas]].",
      "pairs": [
        {
          "id": "1",
          "left": "Adiós",
          "right": "[[Goodbye|Adiós]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e33-pair0-right-6fc42223.mp3"
        },
        {
          "id": "2",
          "left": "Chao",
          "right": "[[Bye|Chao]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e33-pair1-right-b665d826.mp3"
        },
        {
          "id": "3",
          "left": "Nos vemos",
          "right": "[[See you|Nos vemos]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e33-pair2-right-2290e91e.mp3"
        },
        {
          "id": "4",
          "left": "Cuídate",
          "right": "[[Take care|Cuídate]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e33-pair3-right-9f37b892.mp3"
        },
        {
          "id": "5",
          "left": "Buen día",
          "right": "[[Have a nice day|Que tenga un buen día]]",
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
      "title": "[[Short|Corto]] [[Nice to meet you|Mucho gusto]]",
      "instructions": "Completa la respuesta corta a \"[[Nice to meet you|Mucho gusto]]\".",
      "questions": [
        {
          "id": "q1",
          "text": "[[You|Tú]] ___.",
          "correctAnswer": "too",
          "explanation": "\"[[You too|Igualmente]]\" es una forma muy casual de decir \"igualmente\".",
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
      "title": "[[Courtesy|de cortesía]] [[Title|Título]]",
      "instructions": "[[How|Cómo]] [[do| ]] [[you| ]] [[address|te diriges]] [[a|a]] [[male|hombre]] [[teacher?|profesor?]]",
      "questions": [
        {
          "id": "q1",
          "question": "[[Good morning|Buenos días]], ________ [[Smith|Smith]].",
          "options": [
            {
              "text": "[[Mr.|Señor]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e35-q0-opt0-127469a6.mp3"
            },
            {
              "text": "[[Mrs.|Señora]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e35-q0-opt1-773442a1.mp3"
            },
            {
              "text": "[[Ms.|Señora/ita]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e35-q0-opt2-29e32764.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"[[Mr.|Señor]]\" se usa para hombres, independientemente de su estado civil."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e36",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "[[Translating|Traducción]] [[Ms.|de Ms.]]",
      "instructions": "[[What|Cuál]] [[is|es]] [[the|la]] [[most|más]] [[professional|profesional]] [[way|forma]] [[to|de]] [[address|dirigirse]] [[a|a]] [[woman?|mujer?]]",
      "questions": [
        {
          "id": "q1",
          "question": "Señorita / Señora:",
          "options": [
            {
              "text": "[[Ms.|Señora/ita]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e39-q0-model-127469a6.mp3"
            },
            {
              "text": "[[Mr.|Señor]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e35-q0-opt0-127469a6.mp3"
            },
            {
              "text": "[[Teacher|Profesor]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e13-pair3-right-8ab7bbdf.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"[[Ms.|Señora/ita]]\" es la forma más segura y profesional de dirigirse a una mujer."
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
      "title": "[[Nice to meet you|Encantado]]",
      "instructions": "Ordena para decir \"Encantado de conocerte\".",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "[[Nice|Encantado]]",
            "[[to|de]]",
            "[[meet|conocer]]",
            "[[you|te]]."
          ],
          "correctSentence": "[[Nice|Encantado]] [[to|de]] [[meet|conocer]] [[you|te]].",
          "translation": "Encantado de conocerte.",
          "hint": "Empieza con \"[[Nice|Encantado]]\".",
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
      "title": "[[How|Cómo]] [[is|va]] [[it|todo]] [[going?|?]]",
      "instructions": "Elige la forma más natural de preguntar \"¿Cómo va?\".",
      "questions": [
        {
          "id": "q1",
          "question": "Informal check-in:",
          "options": [
            {
              "text": "[[How is it going?|¿Cómo va todo?]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e38-q0-opt0-bedcc50f.mp3"
            },
            {
              "text": "[[What is that?|¿Qué es eso?]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e38-q0-opt1-f7a80857.mp3"
            },
            {
              "text": "[[Where are you?|¿Dónde estás?]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e38-q0-opt2-eccd993f.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"[[How is it going?|¿Cómo va todo?]]\" es una alternativa muy común a \"[[How are you?|¿Cómo estás?]]\"."
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
      "title": "Pronunciación: [[Mr.|Señor]]",
      "instructions": "Di \"[[Mr.|Señor]]\" seguido de un nombre.",
      "questions": [
        {
          "id": "q1",
          "text": "[[Mr.|Señor]]",
          "correctAnswer": "Mr.",
          "explanation": "Se pronuncia como \"[[míster|míster]]\".",
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
      "title": "[[Titles|Títulos]] [[and|y]] [[Names|Nombres]]",
      "instructions": "[[Match|Une]] [[the|el]] [[title|título]] [[with|con]] [[its|su]] [[correct|correcto]] [[use|uso]].",
      "pairs": [
        {
          "id": "1",
          "left": "[[Mr.|Señor]]",
          "right": "[[Man|Hombre]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e40-pair0-right-7a9c3175.mp3"
        },
        {
          "id": "2",
          "left": "[[Mrs.|Señora]]",
          "right": "[[Married woman|Mujer casada]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e40-pair1-right-c5b7ccb4.mp3"
        },
        {
          "id": "3",
          "left": "[[Ms.|Señora/ita]]",
          "right": "[[Woman (general)|Mujer (general)]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e40-pair2-right-bc3cc614.mp3"
        },
        {
          "id": "4",
          "left": "[[First name|Nombre de pila]]",
          "right": "[[Name|Nombre]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e40-pair3-right-4777bbaa.mp3"
        },
        {
          "id": "5",
          "left": "[[Last name|Apellido]]",
          "right": "[[Surname|Apellido]]",
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
      "title": "[[Name|de nombre]] [[Contraction|Contracción]]",
      "instructions": "Escribe la forma corta de \"[[What is|Cual es]]\".",
      "questions": [
        {
          "id": "q1",
          "text": "___ [[your|tu]] [[name|nombre]]?",
          "correctAnswer": "What's",
          "explanation": "La contracción \"[[What's|Cual es]]\" es mucho más frecuente que \"[[What is|Cual es]]\" al hablar.",
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
      "title": "[[Negative|Negativa]] [[Response|Respuesta]]",
      "instructions": "¿Cómo dices que \"no\" eres algo?",
      "questions": [
        {
          "id": "q1",
          "question": "[[I|Yo]] ________ [[a teacher|un profesor]].",
          "options": [
            {
              "text": "[[am not|no soy]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e42-q0-opt0-8f64b007.mp3"
            },
            {
              "text": "[[is not|no es]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e42-q0-opt1-b1b55b5b.mp3"
            },
            {
              "text": "[[are not|no eres/son]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e42-q0-opt2-36fc81cc.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "Para negar con \"[[I am|Yo soy]]\", simplemente añadimos \"[[not|no]]\" después."
        }
      ]
    }
  },
  {
    "id": "a1-u1-e43",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "topicName": "Hello World!",
    "difficulty": "easy",
    "content": {
      "title": "[[Have|Tenga]] [[a|un]] [[nice|buen]] [[day|día]]",
      "instructions": "Ordena para decir \"Tenga un buen día\".",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "[[Have|Tenga]]",
            "[[a|un]]",
            "[[nice|buen]]",
            "[[day|día]]!"
          ],
          "correctSentence": "[[Have|Tenga]] [[a|un]] [[nice|buen]] [[day|día]]!",
          "translation": "¡Tenga un buen día!",
          "hint": "Empieza con \"[[Have|Tenga]]\".",
          "explanation": "Una forma muy amable y común de despedirse de alguien.",
          "points": 10,
          "audio": "/audio/course/a1/unit-1/a1-u1-e43-item0-example-a2a4d885.mp3"
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
      "title": "[[I|Yo]] [[am|soy]] [[not|no]]",
      "instructions": "Ordena para decir \"Yo no soy Juan\".",
      "sentences": [
        {
          "id": "s1",
          "words": [
            "[[I|Yo]]",
            "[[am|soy]]",
            "[[not|no]]",
            "[[Juan|Juan]]."
          ],
          "correctSentence": "[[I|Yo]] [[am|soy]] [[not|no]] [[Juan|Juan]].",
          "translation": "Yo no soy Juan.",
          "hint": "Pon \"[[not|no]]\" después de \"[[am|soy]]\".",
          "explanation": "La estructura negativa es: Sujeto + [[am/is/are|soy/es/son]] + [[not|no]].",
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
      "title": "[[Courtesy|de cortesía]] [[Plural|Plural]]",
      "instructions": "[[How|Cómo]] [[do| ]] [[you| ]] [[greet|saludas]] [[an|una]] [[entire|entera]] [[class?|clase?]]",
      "questions": [
        {
          "id": "q1",
          "question": "[[Hello|Hola]], ________.",
          "options": [
            {
              "text": "[[everyone|todos]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e45-q0-opt0-ed881bac.mp3"
            },
            {
              "text": "[[someone|alguien]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e45-q0-opt1-1f2bf2e0.mp3"
            },
            {
              "text": "[[no one|nadie]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e45-q0-opt2-cb9a070e.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"[[Everyone|Todos]]\" significa \"todos\" y se usa para saludar a un grupo."
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
      "title": "Pronunciación: [[Everyone|Todos]]",
      "instructions": "Di \"[[Hello everyone|Hola a todos]]\".",
      "questions": [
        {
          "id": "q1",
          "text": "[[Hello everyone|Hola a todos]]",
          "correctAnswer": "Hello everyone",
          "explanation": "Marca bien la \"[[v|v]]\" en \"[[everyone|todos]]\".",
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
      "title": "[[Greeting|de saludos]] [[Summary|Resumen]]",
      "instructions": "[[Match|Une]] [[each|cada]] [[greeting|saludo]] [[with|con]] [[its|su]] [[time|momento]] [[of|del]] [[day|día]].",
      "pairs": [
        {
          "id": "1",
          "left": "7 AM",
          "right": "[[Good morning|Buenos días]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e47-pair0-right-4e442988.mp3"
        },
        {
          "id": "2",
          "left": "3 PM",
          "right": "[[Good afternoon|Buenas tardes]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e47-pair1-right-b6e12462.mp3"
        },
        {
          "id": "3",
          "left": "8 PM",
          "right": "[[Good evening|Buenas noches (saludo)]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e47-pair2-right-0a28b30e.mp3"
        },
        {
          "id": "4",
          "left": "11 PM (al irse)",
          "right": "[[Good night|Buenas noches (despedida)]]",
          "audio": "/audio/course/a1/unit-1/a1-u1-e47-pair3-right-c843a05d.mp3"
        },
        {
          "id": "5",
          "left": "A cualquier hora",
          "right": "[[Hello|Hola]]",
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
      "title": "[[Last|Apellido]] [[Name| ]]",
      "instructions": "Escribe la palabra para \"apellido\".",
      "questions": [
        {
          "id": "q1",
          "text": "[[What is|Cual es]] [[your|tu]] ___ [[name|nombre]]?",
          "correctAnswer": "last",
          "explanation": "En inglés se usa \"[[last name|apellido]]\" o \"[[surname|apellido]]\" para el apellido.",
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
      "title": "[[What's|Qué]] [[up?|tal?]]",
      "instructions": "¿Cuál es la forma más informal (estilo Duolingo) de decir \"¿Qué pasa?\"?",
      "questions": [
        {
          "id": "q1",
          "question": "Very informal greeting:",
          "options": [
            {
              "text": "[[What's up?|¿Qué pasa?]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e49-q0-opt0-7f603a8b.mp3"
            },
            {
              "text": "[[How do you do?|¿Cómo le va?]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e49-q0-opt1-b15ff1f5.mp3"
            },
            {
              "text": "[[Good day|Buen día]]",
              "audio": "/audio/course/a1/unit-1/a1-u1-e49-q0-opt2-531a8b25.mp3"
            }
          ],
          "correctAnswer": 0,
          "explanation": "\"[[What's up?|¿Qué pasa?]]\" es extremadamente común entre gente joven y amigos cercanos."
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
      "title": "[[Final|Final]] [[Summary|Resumen]]",
      "instructions": "[[What|Cuál]] [[is|es]] [[the|la]] [[best|mejor]] [[way|forma]] [[to|de]] [[introduce|presentarte]] [[yourself| ]] [[for|por]] [[the|la]] [[first|primera]] [[time|vez]]?",
      "questions": [
        {
          "id": "q1",
          "question": "Conocer a alguien nuevo:",
          "options": [
            {
              "text": "[[Hi|Hola]], [[I am|yo soy]] [[John|John]]. [[Nice to meet you|Mucho gusto]].",
              "audio": "/audio/course/a1/unit-1/a1-u1-e50-q0-opt0-c58006e8.mp3"
            },
            {
              "text": "[[Goodbye|Adiós]] [[John|John]].",
              "audio": "/audio/course/a1/unit-1/a1-u1-e50-q0-opt1-f818f8ae.mp3"
            },
            {
              "text": "[[How are you|Cómo está]] [[teacher|profesor]]?",
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
