import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = [
  {
    "id": "a1-u1-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "Hello. Hi. Good morning. Good afternoon. Good evening. Good night. Goodbye. Bye. Name. Teacher. Student",
    "content": {
      "title": "Vocabulario Clave",
      "instructions": "Aprende las palabras más importantes de la unidad.",
      "items": [
        { "front": "[[Hello|Hola]]", "back": "Hola" },
        { "front": "[[Hi|Hola]]", "back": "Hola (informal)" },
        { "front": "[[Good morning|Buenos días]]", "back": "Buenos días" },
        { "front": "[[Good afternoon|Buenas tardes]]", "back": "Buenas tardes" },
        { "front": "[[Good evening|Buenas noches (saludo)]]", "back": "Buenas noches (saludo)" },
        { "front": "[[Good night|Buenas noches (despedida)]]", "back": "Buenas noches (despedida)" },
        { "front": "[[Goodbye|Adiós]]", "back": "Adiós" },
        { "front": "[[Bye|Adiós]]", "back": "Chao" },
        { "front": "[[Name|Nombre]]", "back": "Nombre" },
        { "front": "[[Teacher|Profesor/profesora]]", "back": "Profesor/a" },
        { "front": "[[Student|Estudiante]]", "back": "Estudiante" }
      ]
    },
    "audioUrl": "audio/a1/unit-1/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "I am a student.",
    "content": {
      "title": "Practica la Gramática",
      "instructions": "Completa la oración con la opción correcta.",
      "questions": [
        {
          "question": "[[I|Yo]] ([[be|ser/estar]]) _______ [[a|un/una]] [[student|estudiante]].",
          "options": ["[[is|es/está]]", "[[are|son/están]]", "[[am|soy/estoy]]"],
          "correctAnswer": 2,
          "explanation": "Con 'I' siempre usamos 'am'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-1/e2.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "You are my teacher.",
    "content": {
      "title": "Practica la Gramática",
      "instructions": "Completa la oración con la opción correcta.",
      "questions": [
        {
          "question": "[[You|Tú/usted]] ([[be|ser/estar]]) _______ [[my|mi/mis]] [[teacher|profesor/profesora]].",
          "options": ["[[are|son/están]]", "[[is|es/está]]", "[[am|soy/estoy]]"],
          "correctAnswer": 0,
          "explanation": "Con 'You' siempre usamos 'are'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-1/e3.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "My name is John.",
    "content": {
      "title": "Practica la Gramática",
      "instructions": "Completa la oración con la opción correcta.",
      "questions": [
        {
          "question": "[[My|Mi/mis]] [[name|nombre]] ([[be|ser/estar]]) _______ [[John|John]].",
          "options": ["[[is|es/está]]", "[[are|son/están]]", "[[am|soy/estoy]]"],
          "correctAnswer": 0,
          "explanation": "'My name' es tercera persona singular (it), por lo que usamos 'is'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-1/e4.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e5",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "What is your name?",
    "content": {
      "title": "Practica la Gramática",
      "instructions": "Completa la oración con la opción correcta.",
      "questions": [
        {
          "question": "[[What|Qué]] ([[be|ser/estar]]) _______ [[your|tu/tus]] [[name|nombre]]?",
          "options": ["[[are|son/están]]", "[[is|es/está]]", "[[am|soy/estoy]]"],
          "correctAnswer": 1,
          "explanation": "Para preguntar el nombre usamos 'is'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-1/e5.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "I am from Spain.",
    "content": {
      "title": "Practica la Gramática",
      "instructions": "Completa la oración con la opción correcta.",
      "questions": [
        {
          "question": "[[I|Yo]] ([[be|ser/estar]]) _______ [[from|de/desde]] [[Spain|España]].",
          "options": ["[[am|soy/estoy]]", "[[is|es/está]]", "[[are|son/están]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'am' para hablar de nuestro origen."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-1/e6.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e7",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "My name is Carlos.",
    "content": {
      "title": "Construcción de Oraciones",
      "instructions": "Ordena las palabras para formar una oración correcta.",
      "correctSentence": "[[My|Mi/mis]] [[name|nombre]] [[is|es/está]] [[Carlos|Carlos]].",
      "words": ["[[Carlos|Carlos]].", "[[is|es/está]]", "[[name|nombre]]", "[[My|Mi/mis]]"],
      "explanation": "El orden básico es Sujeto + Verbo + Complemento."
    },
    "audioUrl": "audio/a1/unit-1/e7.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e8",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "I am a student.",
    "content": {
      "title": "Construcción de Oraciones",
      "instructions": "Ordena las palabras para formar una oración correcta.",
      "correctSentence": "[[I|Yo]] [[am|soy/estoy]] [[a|un/una]] [[student|estudiante]].",
      "words": ["[[student|estudiante]].", "[[a|un/una]]", "[[am|soy/estoy]]", "[[I|Yo]]"],
      "explanation": "Recuerda usar 'a' antes de profesiones en singular."
    },
    "audioUrl": "audio/a1/unit-1/e8.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e9",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "She is my teacher.",
    "content": {
      "title": "Construcción de Oraciones",
      "instructions": "Ordena las palabras para formar una oración correcta.",
      "correctSentence": "[[She|Ella]] [[is|es/está]] [[my|mi/mis]] [[teacher|profesor/profesora]].",
      "words": ["[[She|Ella]]", "[[teacher|profesor/profesora]].", "[[is|es/está]]", "[[my|mi/mis]]"],
      "explanation": "'She' es para ella."
    },
    "audioUrl": "audio/a1/unit-1/e9.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e10",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "Nice to meet you.",
    "content": {
      "title": "Construcción de Oraciones",
      "instructions": "Ordena las palabras para formar una oración correcta.",
      "correctSentence": "[[Nice|Agradable/simpático]] [[to|a/para]] [[meet|conocer/encontrar]] [[you|tú/usted]].",
      "words": ["[[Nice|Agradable/simpático]]", "[[you|tú/usted]].", "[[to|a/para]]", "[[meet|conocer/encontrar]]"],
      "explanation": "Frase común para decir 'Encantado de conocerte'."
    },
    "audioUrl": "audio/a1/unit-1/e10.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e11",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "Good morning, class.",
    "content": {
      "title": "Construcción de Oraciones",
      "instructions": "Ordena las palabras para formar una oración correcta.",
      "correctSentence": "[[Good|Bueno/buena]] [[morning|mañana]], [[class|clase]].",
      "words": ["[[class|clase]].", "[[morning|mañana]],", "[[Good|Bueno/buena]]"],
      "explanation": "Saludo formal por la mañana."
    },
    "audioUrl": "audio/a1/unit-1/e11.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e12",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "How are you today?",
    "content": {
      "title": "Construcción de Oraciones",
      "instructions": "Ordena las palabras para formar una oración correcta.",
      "correctSentence": "[[How|Cómo]] [[are|son/están]] [[you|tú/usted]] [[today|hoy]]?",
      "words": ["[[How|Cómo]]", "[[are|son/están]]", "[[you|tú/usted]]", "[[today|hoy]]?"],
      "explanation": "Pregunta básica sobre el estado de ánimo."
    },
    "audioUrl": "audio/a1/unit-1/e12.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e13",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "I am from London.",
    "content": {
      "title": "Construcción de Oraciones",
      "instructions": "Ordena las palabras para formar una oración correcta.",
      "correctSentence": "[[I|Yo]] [[am|soy/estoy]] [[from|de/desde]] [[London|Londres]].",
      "words": ["[[from|de/desde]]", "[[London|Londres]].", "[[am|soy/estoy]]", "[[I|Yo]]"],
      "explanation": "Estructura para origen: I + am + from + [Ciudad/País]."
    },
    "audioUrl": "audio/a1/unit-1/e13.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e14",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Hello! Introductions",
    "difficulty": "easy",
    "transcript": "He is my best friend.",
    "content": {
      "title": "Construcción de Oraciones",
      "instructions": "Ordena las palabras para formar una oración correcta.",
      "correctSentence": "[[He|Él]] [[is|es/está]] [[my|mi/mis]] [[best|mejor]] [[friend|amigo/amiga]].",
      "words": ["[[my|mi/mis]]", "[[is|es/está]]", "[[friend|amigo/amiga]].", "[[best|mejor]]", "[[He|Él]]"],
      "explanation": "'He' se usa para él."
    },
    "audioUrl": "audio/a1/unit-1/e14.mp3",
    "topicName": "Vocabulary"
  },
  // --- NUEVOS EJERCICIOS (15-60) ---
  {
    "id": "a1-u1-e15",
    "type": "flashcard",
    "level": "A1",
    "topic": "Countries & Nationalities",
    "difficulty": "easy",
    "transcript": "Spain. Spanish. Mexico. Mexican. USA. American. UK. British. France. French. Germany. German.",
    "content": {
      "title": "Países y Nacionalidades",
      "instructions": "Aprende cómo decir de dónde eres.",
      "items": [
        { "front": "[[Spain|España]]", "back": "España" },
        { "front": "[[Spanish|Español/a]]", "back": "Español/a" },
        { "front": "[[Mexico|México]]", "back": "México" },
        { "front": "[[Mexican|Mexicano/a]]", "back": "Mexicano/a" },
        { "front": "[[USA|EE.UU.]]", "back": "Estados Unidos" },
        { "front": "[[American|Americano/a]]", "back": "Estadounidense" }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "easy",
    "transcript": "She is from Mexico.",
    "content": {
      "title": "Práctica de Origen",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[She|Ella]] _______ [[from|de/desde]] [[Mexico|México]].",
          "options": ["[[is|es/está]]", "[[am|soy/estoy]]", "[[are|son/están]]"],
          "correctAnswer": 0,
          "explanation": "She + is."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "easy",
    "transcript": "They are Spanish.",
    "content": {
      "title": "Nacionalidades",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[They|Ellos/ellas]] _______ [[Spanish|Español/a]].",
          "options": ["[[is|es/está]]", "[[are|son/están]]", "[[am|soy/estoy]]"],
          "correctAnswer": 1,
          "explanation": "They + are."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e18",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "easy",
    "transcript": "We are American.",
    "content": {
      "title": "Construcción de Oraciones",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[We|Nosotros/as]] [[are|son/están]] [[American|Americano/a]].",
      "words": ["[[American|Americano/a]].", "[[are|son/están]]", "[[We|Nosotros/as]]"],
      "explanation": "We + are."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e19",
    "type": "flashcard",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "easy",
    "transcript": "Doctor. Nurse. Engineer. Artist. Chef. Waiter.",
    "content": {
      "title": "Profesiones",
      "instructions": "Aprende vocabulario sobre trabajos.",
      "items": [
        { "front": "[[Doctor|Médico/a]]", "back": "Médico/a" },
        { "front": "[[Nurse|Enfermero/a]]", "back": "Enfermero/a" },
        { "front": "[[Engineer|Ingeniero/a]]", "back": "Ingeniero/a" },
        { "front": "[[Chef|Cocinero/a]]", "back": "Cocinero/a" }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "easy",
    "transcript": "He is a doctor.",
    "content": {
      "title": "Profesiones",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[He|Él]] [[is|es/está]] _______ [[doctor|médico/a]].",
          "options": ["[[a|un/una]]", "[[an|un/una]]", "[[the|el/la]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'a' antes de consonante."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "easy",
    "transcript": "She is an engineer.",
    "content": {
      "title": "Profesiones",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[She|Ella]] [[is|es/está]] _______ [[engineer|ingeniero/a]].",
          "options": ["[[a|un/una]]", "[[an|un/una]]", "[[the|el/la]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'an' antes de vocal."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e22",
    "type": "flashcard",
    "level": "A1",
    "topic": "Feelings",
    "difficulty": "easy",
    "transcript": "Happy. Sad. Tired. Hungry. Thirsty. Angry.",
    "content": {
      "title": "Sentimientos",
      "instructions": "Cómo expresar cómo te sientes.",
      "items": [
        { "front": "[[Happy|Feliz]]", "back": "Feliz" },
        { "front": "[[Sad|Triste]]", "back": "Triste" },
        { "front": "[[Tired|Cansado/a]]", "back": "Cansado/a" },
        { "front": "[[Hungry|Hambriento/a]]", "back": "Hambriento/a" }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Feelings",
    "difficulty": "easy",
    "transcript": "I am very happy today.",
    "content": {
      "title": "Sentimientos",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[very|muy]] [[happy|feliz]] [[today|hoy]].",
          "options": ["[[am|soy/estoy]]", "[[is|es/está]]", "[[are|son/están]]"],
          "correctAnswer": 0,
          "explanation": "I + am."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Feelings",
    "difficulty": "easy",
    "transcript": "Are you tired?",
    "content": {
      "title": "Preguntas",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "_______ [[you|tú/usted]] [[tired|cansado/a]]?",
          "options": ["[[Are|Son/están]]", "[[Is|Es/está]]", "[[Am|Soy/estoy]]"],
          "correctAnswer": 0,
          "explanation": "En preguntas, el verbo va primero: Are + you...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e25",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Feelings",
    "difficulty": "easy",
    "transcript": "She is not sad.",
    "content": {
      "title": "Negación",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[She|Ella]] [[is|es/está]] [[not|no]] [[sad|triste]].",
      "words": ["[[sad|triste]].", "[[not|no]]", "[[is|es/está]]", "[[She|Ella]]"],
      "explanation": "Sujeto + be + not + adjetivo."
    },
    "topicName": "Grammar"
  },
  // --- READING COMPREHENSION BLOCK 1 (26-30) ---
  {
    "id": "a1-u1-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hi! My name is Anna. I am from Italy. I am a student. I am 20 years old.",
    "content": {
      "title": "Lectura: Anna",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "[[Where|Dónde]] ([[be|ser/estar]]) _______ [[Anna|Anna]] [[from|de/desde]]?\n\n*\"Hi! My name is Anna. I am from Italy. I am a student.\"*",
          "options": ["[[Spain|España]]", "[[Italy|Italia]]", "[[Mexico|México]]"],
          "correctAnswer": 1,
          "explanation": "Anna dice: 'I am from Italy'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hi! My name is Anna. I am from Italy. I am a student.",
    "content": {
      "title": "Lectura: Anna",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] ([[be|ser/estar]]) _______ [[her|su (de ella)]] [[job|trabajo]]?\n\n*\"Hi! My name is Anna. I am from Italy. I am a student.\"*",
          "options": ["[[Teacher|Profesor/profesora]]", "[[Doctor|Médico/a]]", "[[Student|Estudiante]]"],
          "correctAnswer": 2,
          "explanation": "Anna dice: 'I am a student'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e28",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "This is Peter. He is my teacher. He is British. He is very happy today.",
    "content": {
      "title": "Lectura: Peter",
      "instructions": "Lee y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[nationality|nacionalidad]] ([[be|ser/estar]]) _______ [[Peter|Peter]]?\n\n*\"This is Peter. He is my teacher. He is British.\"*",
          "options": ["[[American|Americano/a]]", "[[British|Británico/a]]", "[[Spanish|Español/a]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice: 'He is British'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "This is Peter. He is my teacher. He is British. He is very happy today.",
    "content": {
      "title": "Lectura: Peter",
      "instructions": "Lee y responde.",
      "questions": [
        {
          "question": "[[How|Cómo]] ([[be|ser/estar]]) _______ [[Peter|Peter]] [[today|hoy]]?\n\n*\"He is very happy today.\"*",
          "options": ["[[Tired|Cansado/a]]", "[[Sad|Triste]]", "[[Happy|Feliz]]"],
          "correctAnswer": 2,
          "explanation": "El texto dice: 'He is very happy today'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e30",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "My best friend is Maria. She is a chef. She is from France. She is 30.",
    "content": {
      "title": "Lectura: Maria",
      "instructions": "Lee y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] [[Maria|Maria]]'s [[job|trabajo]]?\n\n*\"My best friend is Maria. She is a chef. She is from France.\"*",
          "options": ["[[Chef|Cocinero/a]]", "[[Nurse|Enfermero/a]]", "[[Artist|Artista]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'She is a chef'."
        }
      ]
    },
    "topicName": "Reading"
  },
  // --- GRAMMAR REINFORCEMENT (31-40) ---
  {
    "id": "a1-u1-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "It is a big city.",
    "content": {
      "title": "Verbo To Be: It",
      "instructions": "Completa.",
      "questions": [
        {
          "question": "[[It|Eso]] _______ [[a|un/una]] [[big|grande]] [[city|ciudad]].",
          "options": ["[[is|es/está]]", "[[are|son/están]]", "[[am|soy/estoy]]"],
          "correctAnswer": 0,
          "explanation": "It + is."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e32",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Are they from Germany?",
    "content": {
      "title": "Preguntas",
      "instructions": "Completa.",
      "questions": [
        {
          "question": "_______ [[they|ellos/ellas]] [[from|de/desde]] [[Germany|Alemania]]?",
          "options": ["[[Is|Es/está]]", "[[Are|Son/están]]", "[[Am|Soy/estoy]]"],
          "correctAnswer": 1,
          "explanation": "Are + they...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "I am not a teacher.",
    "content": {
      "title": "Negativo",
      "instructions": "Completa.",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[not|no]] [[a|un/una]] [[teacher|profesor/profesora]].",
          "options": ["[[is|es/está]]", "[[am|soy/estoy]]", "[[are|son/están]]"],
          "correctAnswer": 1,
          "explanation": "I + am + not."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e34",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Where are you from?",
    "content": {
      "title": "Preguntas Wh-",
      "instructions": "Ordena.",
      "correctSentence": "[[Where|Dónde]] [[are|son/están]] [[you|tú/usted]] [[from|de/desde]]?",
      "words": ["[[you|tú/usted]]", "[[from|de/desde]]?", "[[are|son/están]]", "[[Where|Dónde]]"],
      "explanation": "Wh-word + be + sujeto + from?"
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e35",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "How old are you?",
    "content": {
      "title": "Preguntar la edad",
      "instructions": "Ordena.",
      "correctSentence": "[[How|Cómo]] [[old|viejo/a]] [[are|son/están]] [[you|tú/usted]]?",
      "words": ["[[are|son/están]]", "[[you|tú/usted]]?", "[[old|viejo/a]]", "[[How|Cómo]]"],
      "explanation": "How + old + be + sujeto?"
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e36",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Is he your brother?",
    "content": {
      "title": "Preguntas de sí/no",
      "instructions": "Elige.",
      "questions": [
        {
          "question": "_______ [[he|él]] [[your|tu/tus]] [[brother|hermano]]?",
          "options": ["[[Are|Son/están]]", "[[Am|Soy/estoy]]", "[[Is|Es/está]]"],
          "correctAnswer": 2,
          "explanation": "Is + he...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "We are not tired.",
    "content": {
      "title": "Negativo",
      "instructions": "Elige.",
      "questions": [
        {
          "question": "[[We|Nosotros/as]] _______ [[not|no]] [[tired|cansado/a]].",
          "options": ["[[is|es/está]]", "[[are|son/están]]", "[[am|soy/estoy]]"],
          "correctAnswer": 1,
          "explanation": "We + are + not."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e38",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "It is not cold today.",
    "content": {
      "title": "Negativo con It",
      "instructions": "Ordena.",
      "correctSentence": "[[It|Eso]] [[is|es/está]] [[not|no]] [[cold|frío]] [[today|hoy]].",
      "words": ["[[cold|frío]]", "[[today|hoy]].", "[[not|no]]", "[[is|es/está]]", "[[It|Eso]]"],
      "explanation": "It + is + not..."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Am I late?",
    "content": {
      "title": "Preguntas con I",
      "instructions": "Elige.",
      "questions": [
        {
          "question": "_______ [[I|Yo]] [[late|tarde]]?",
          "options": ["[[Am|Soy/estoy]]", "[[Is|Es/está]]", "[[Are|Son/están]]"],
          "correctAnswer": 0,
          "explanation": "Am + I...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e40",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Who is that man?",
    "content": {
      "title": "Preguntas Who",
      "instructions": "Ordena.",
      "correctSentence": "[[Who|Quién]] [[is|es/está]] [[that|ese/esa]] [[man|hombre]]?",
      "words": ["[[is|es/está]]", "[[man|hombre]]?", "[[that|ese/esa]]", "[[Who|Quién]]"],
      "explanation": "Who + be + complemento?"
    },
    "topicName": "Grammar"
  },
  // --- READING COMPREHENSION BLOCK 2 (41-50) ---
  {
    "id": "a1-u1-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "My name is David. I am an artist. I am from Germany. I am very busy.",
    "content": {
      "title": "Lectura: David",
      "instructions": "Lee y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] [[David|David]]'s [[job|trabajo]]?\n\n*\"My name is David. I am an artist.\"*",
          "options": ["[[Chef|Cocinero/a]]", "[[Artist|Artista]]", "[[Doctor|Médico/a]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice: 'I am an artist'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "My name is David. I am an artist. I am from Germany. I am very busy.",
    "content": {
      "title": "Lectura: David",
      "instructions": "Lee y responde.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|es/está]] [[David|David]] [[from|de/desde]]?\n\n*\"I am from Germany.\"*",
          "options": ["[[Germany|Alemania]]", "[[France|Francia]]", "[[USA|EE.UU.]]"],
          "correctAnswer": 0,
          "explanation": "David es de Alemania."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hello! We are the Smith family. We are from the UK. We are happy.",
    "content": {
      "title": "Lectura: Familia Smith",
      "instructions": "Lee y responde.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|es/está]] [[the|el/la]] [[Smith|Smith]] [[family|familia]] [[from|de/desde]]?\n\n*\"We are from the UK.\"*",
          "options": ["[[USA|EE.UU.]]", "[[UK|Reino Unido]]", "[[Spain|España]]"],
          "correctAnswer": 1,
          "explanation": "Son del Reino Unido."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hello! We are the Smith family. We are from the UK. We are happy.",
    "content": {
      "title": "Lectura: Familia Smith",
      "instructions": "Lee y responde.",
      "questions": [
        {
          "question": "[[How|Cómo]] [[are|son/están]] [[they|ellos/ellas]]?\n\n*\"We are happy.\"*",
          "options": ["[[Sad|Triste]]", "[[Tired|Cansado/a]]", "[[Happy|Feliz]]"],
          "correctAnswer": 2,
          "explanation": "Dicen que están felices."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e45",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "This is my dog, Max. He is very big and brown. He is hungry.",
    "content": {
      "title": "Lectura: Max",
      "instructions": "Lee y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[color|color]] [[is|es/está]] [[Max|Max]]?\n\n*\"He is very big and brown.\"*",
          "options": ["[[Black|Negro]]", "[[Brown|Marrón]]", "[[White|Blanco]]"],
          "correctAnswer": 1,
          "explanation": "Max es de color marrón (brown)."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e46",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "This is my dog, Max. He is very big and brown. He is hungry.",
    "content": {
      "title": "Lectura: Max",
      "instructions": "Lee y responde.",
      "questions": [
        {
          "question": "[[Is|Es/está]] [[Max|Max]] [[hungry|hambriento/a]]?\n\n*\"He is hungry.\"*",
          "options": ["[[Yes|Sí]]", "[[No|No]]"],
          "correctAnswer": 0,
          "explanation": "El texto confirma que tiene hambre."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "I am Sarah. I am a nurse in a small hospital. I am from Canada.",
    "content": {
      "title": "Lectura: Sarah",
      "instructions": "Lee y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] [[Sarah|Sarah]]'s [[job|trabajo]]?\n\n*\"I am a nurse in a small hospital.\"*",
          "options": ["[[Doctor|Médico/a]]", "[[Nurse|Enfermero/a]]", "[[Teacher|Profesor/profesora]]"],
          "correctAnswer": 1,
          "explanation": "Sarah es enfermera."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e48",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "I am Sarah. I am a nurse in a small hospital. I am from Canada.",
    "content": {
      "title": "Lectura: Sarah",
      "instructions": "Lee y responde.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|es/está]] [[the|el/la]] [[hospital|hospital]]?\n\n*\"I am a nurse in a small hospital.\"*",
          "options": ["[[Big|Grande]]", "[[Small|Pequeño/a]]", "[[Old|Viejo/a]]"],
          "correctAnswer": 1,
          "explanation": "El hospital es pequeño (small)."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "My name is Tom. I am a chef. My kitchen is very hot.",
    "content": {
      "title": "Lectura: Tom",
      "instructions": "Lee y responde.",
      "questions": [
        {
          "question": "[[How|Cómo]] [[is|es/está]] [[the|el/la]] [[kitchen|cocina]]?\n\n*\"My kitchen is very hot.\"*",
          "options": ["[[Cold|Frío]]", "[[Hot|Caliente]]", "[[Big|Grande]]"],
          "correctAnswer": 1,
          "explanation": "La cocina está caliente (hot)."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "My name is Tom. I am a chef. My kitchen is very hot.",
    "content": {
      "title": "Lectura: Tom",
      "instructions": "Lee y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] [[Tom|Tom]]'s [[job|trabajo]]?\n\n*\"My name is Tom. I am a chef.\"*",
          "options": ["[[Chef|Cocinero/a]]", "[[Waiter|Camarero/a]]", "[[Artist|Artista]]"],
          "correctAnswer": 0,
          "explanation": "Tom es chef."
        }
      ]
    },
    "topicName": "Reading"
  },
  // --- FINAL MIXED REVIEW (51-60) ---
  {
    "id": "a1-u1-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "easy",
    "transcript": "Are you a student? Yes, I am.",
    "content": {
      "title": "Repaso: Pregunta y Respuesta",
      "instructions": "Elige la respuesta correcta.",
      "questions": [
        {
          "question": "_______ [[you|tú/usted]] [[a|un/una]] [[student|estudiante]]?",
          "options": ["[[Am|Soy/estoy]]", "[[Is|Es/está]]", "[[Are|Son/están]]"],
          "correctAnswer": 2,
          "explanation": "Are + you...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e52",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Review",
    "difficulty": "easy",
    "transcript": "I am happy to be here.",
    "content": {
      "title": "Repaso: Construcción",
      "instructions": "Ordena.",
      "correctSentence": "[[I|Yo]] [[am|soy/estoy]] [[happy|feliz]] [[to|a/para]] [[be|ser/estar]] [[here|aquí]].",
      "words": ["[[here|aquí]].", "[[be|ser/estar]]", "[[to|a/para]]", "[[happy|feliz]]", "[[am|soy/estoy]]", "[[I|Yo]]"],
      "explanation": "I + am + happy + to be here."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "easy",
    "transcript": "She is not from Spain. She is from Italy.",
    "content": {
      "title": "Repaso: Negativo y Afirmativo",
      "instructions": "Elige.",
      "questions": [
        {
          "question": "[[She|Ella]] _______ [[not|no]] [[from|de/desde]] [[Spain|España]].",
          "options": ["[[is|es/está]]", "[[are|son/están]]", "[[am|soy/estoy]]"],
          "correctAnswer": 0,
          "explanation": "She + is + not."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "easy",
    "transcript": "Is it a good book? Yes, it is.",
    "content": {
      "title": "Repaso: It",
      "instructions": "Completa.",
      "questions": [
        {
          "question": "_______ [[it|eso]] [[a|un/una]] [[good|bueno/buena]] [[book|libro]]?",
          "options": ["[[Are|Son/están]]", "[[Is|Es/está]]", "[[Am|Soy/estoy]]"],
          "correctAnswer": 1,
          "explanation": "Is + it...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e55",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Review",
    "difficulty": "easy",
    "transcript": "They are my parents.",
    "content": {
      "title": "Repaso: Familia",
      "instructions": "Ordena.",
      "correctSentence": "[[They|Ellos/ellas]] [[are|son/están]] [[my|mi/mis]] [[parents|padres]].",
      "words": ["[[parents|padres]].", "[[my|mi/mis]]", "[[are|son/están]]", "[[They|Ellos/ellas]]"],
      "explanation": "They + are + my parents."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "easy",
    "transcript": "How is your mother? She is fine, thanks.",
    "content": {
      "title": "Repaso: Preguntas",
      "instructions": "Elige.",
      "questions": [
        {
          "question": "[[How|Cómo]] _______ [[your|tu/tus]] [[mother|madre]]?",
          "options": ["[[is|es/está]]", "[[are|son/están]]", "[[am|soy/estoy]]"],
          "correctAnswer": 0,
          "explanation": "How + is + mother?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e57",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Review",
    "difficulty": "easy",
    "transcript": "It is a beautiful day.",
    "content": {
      "title": "Repaso: Adjetivos",
      "instructions": "Ordena.",
      "correctSentence": "[[It|Eso]] [[is|es/está]] [[a|un/una]] [[beautiful|hermoso/a]] [[day|día]].",
      "words": ["[[day|día]].", "[[beautiful|hermoso/a]]", "[[a|un/una]]", "[[is|es/está]]", "[[It|Eso]]"],
      "explanation": "It + is + a + adjetivo + sustantivo."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "easy",
    "transcript": "Are you hungry? No, I am not.",
    "content": {
      "title": "Repaso: Sentimientos",
      "instructions": "Elige.",
      "questions": [
        {
          "question": "_______ [[you|tú/usted]] [[hungry|hambriento/a]]?",
          "options": ["[[Are|Son/están]]", "[[Is|Es/está]]", "[[Am|Soy/estoy]]"],
          "correctAnswer": 0,
          "explanation": "Are + you...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e59",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Review",
    "difficulty": "easy",
    "transcript": "We are very tired now.",
    "content": {
      "title": "Repaso: Ahora",
      "instructions": "Ordena.",
      "correctSentence": "[[We|Nosotros/as]] [[are|son/están]] [[very|muy]] [[tired|cansado/a]] [[now|ahora]].",
      "words": ["[[now|ahora]].", "[[tired|cansado/a]]", "[[very|muy]]", "[[are|son/están]]", "[[We|Nosotros/as]]"],
      "explanation": "We + are + very tired + now."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "easy",
    "transcript": "Is she a doctor? No, she is a nurse.",
    "content": {
      "title": "Repaso Final",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[Is|Es/está]] [[she|ella]] [[a|un/una]] [[doctor|médico/a]]?\n\n*\"No, she is a nurse.\"*",
          "options": ["[[Yes, she is.|Sí, ella es.]]", "[[No, she isn't.|No, ella no es.]]"],
          "correctAnswer": 1,
          "explanation": "Si es enfermera, no es médico."
        }
      ]
    },
    "topicName": "Grammar"
  }
];
