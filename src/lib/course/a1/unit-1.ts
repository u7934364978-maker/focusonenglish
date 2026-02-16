import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = [
  // SECTION 1: GREETINGS & FAREWELLS (Vocabulary)
  {
    "id": "a1-u1-e1",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[greeting|saludo]] [[for|para]] [[the|la]] [[morning|mañana]].",
      "questions": [
        {
          "question": "8:00 AM",
          "options": [
            "[[Good morning|Buenos días]]",
            "[[Good evening|Buenas noches (tarde)]]",
            "[[Goodbye|Adiós]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[Good morning|Buenos días]]' [[until|hasta]] [[the|el]] [[midday|mediodía]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Farewells",
    "difficulty": "easy",
    "content": {
      "title": "[[Farewells|Despedidas]]",
      "instructions": "[[Which|Cuál]] [[word|palabra]] [[is|es]] [[a|una]] [[farewell|despedida]]?",
      "questions": [
        {
          "question": "[[When|Cuando]] [[you|tú]] [[leave|te vas]]...",
          "options": [
            "[[Hello|Hola]]",
            "[[Hi|Hola (informal)]]",
            "[[Goodbye|Adiós]]"
          ],
          "correctAnswer": 2,
          "explanation": "'[[Goodbye|Adiós]]' [[is|es]] [[used|usado]] [[to|para]] [[leave|irse]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },

  // SECTION 2: PERSONAL INFORMATION (Vocabulary & Grammar)
  {
    "id": "a1-u1-e3",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "content": {
      "title": "[[Introducing|Presentándome]] [[Myself|a mí mismo]]",
      "instructions": "[[Complete|Completa]] [[with|con]] '[[am|soy]]' [[or|o]] '[[are|eres]]'.",
      "questions": [
        {
          "question": "[[I|Yo]] ____ [[John|Juan]].",
          "correctAnswer": "am",
          "explanation": "[[With|Con]] '[[I|Yo]]', [[we|nosotros]] [[use|usamos]] '[[am|soy/estoy]]'."
        },
        {
          "question": "[[You|Tú]] ____ [[my|mi]] [[friend|amigo]].",
          "correctAnswer": "are",
          "explanation": "[[With|Con]] '[[You|Tú]]', [[we|nosotros]] [[use|usamos]] '[[are|eres/estás]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "medium",
    "content": {
      "title": "[[My|Mi]] [[and|y]] [[Your|Tu]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[possessive|posesivo]].",
      "questions": [
        {
          "question": "[[Hello|Hola]], (_____) [[name|nombre]] [[is|es]] [[Alice|Alicia]].",
          "options": [
            "[[My|Mi]]",
            "[[Your|Tu]]",
            "[[I|Yo]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[My|Mi]]' [[to|para]] [[show|mostrar]] [[possession|posesión]] [[of|de]] [[the|el]] [[speaker|hablante]]."
        }
      ]
    },
    "topicName": "Grammar"
  },

  // SECTION 3: SENTENCE BUILDING
  {
    "id": "a1-u1-e5",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "content": {
      "title": "[[Asking|Preguntando]] [[Names|Nombres]]",
      "instructions": "[[Build|Construye]] [[the|la]] [[question|pregunta]].",
      "correctSentence": "[[What|Cuál]] [[is|es]] [[your|tu]] [[name|nombre]]?",
      "words": ["[[is|es]]", "[[What|Cuál]]", "[[your|tu]]", "[[name|nombre]]?"]
    },
    "topicName": "Grammar"
  },

  // SECTION 4: READING COMPREHENSION (Two-phase)
  {
    "id": "a1-u1-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "A: [[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Tom|Tom]]. [[What|Cuál]] [[is|es]] [[your|tu]] [[name|nombre]]?\nB: [[Hi|Hola]], [[Tom|Tom]]! [[I|Yo]] [[am|soy]] [[Sarah|Sara]]. [[Nice|Encantada]] [[to|de]] [[meet|conocerte]] [[you|a ti]].\nA: [[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]], [[too|también]].",
    "content": {
      "title": "[[First|Primer]] [[Meeting|Encuentro]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[dialogue|diálogo]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[the|el]] [[woman's|de la mujer]] [[name|nombre]]?",
          "options": [
            "[[Tom|Tom]]",
            "[[Sarah|Sara]]",
            "[[Alice|Alicia]]"
          ],
          "correctAnswer": 1,
          "explanation": "[[In|En]] [[the|el]] [[dialogue|diálogo]], [[she|ella]] [[says|dice]]: '[[I|Yo]] [[am|soy]] [[Sarah|Sara]]'."
        },
        {
          "question": "[[Is|¿Es]] [[this|este]] [[a|un]] [[greeting|saludo]] [[or|o]] [[a|una]] [[farewell|despedida]]?",
          "options": [
            "[[Greeting|Saludo]]",
            "[[Farewell|Despedida]]",
            "[[Both|Ambos]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[The|El]] [[dialogue|diálogo]] [[starts|empieza]] [[with|con]] '[[Hello|Hola]]' [[and|y]] '[[Hi|Hola]]'."
        }
      ]
    },
    "topicName": "Reading"
  },

  // SECTION 5: MATCHING
  {
    "id": "a1-u1-e7",
    "type": "matching",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "medium",
    "content": {
      "title": "[[Match|Empareja]] [[the|los]] [[Greetings|Saludos]]",
      "instructions": "[[Match|Empareja]] [[the|el]] [[English|Inglés]] [[with|con]] [[the|el]] [[Spanish|Español]].",
      "pairs": [
        { "left": "[[Good morning|Buenos días]]", "right": "[[Buenos días|Good morning]]" },
        { "left": "[[Good afternoon|Buenas tardes]]", "right": "[[Buenas tardes|Good afternoon]]" },
        { "left": "[[Good evening|Buenas noches (tarde)|Good evening]]", "right": "[[Buenas noches (tarde)|Good evening]]" },
        { "left": "[[Good night|Buenas noches (despedida)|Good night]]", "right": "[[Buenas noches (despedida)|Good night]]" }
      ]
    },
    "topicName": "Vocabulary"
  }
];
