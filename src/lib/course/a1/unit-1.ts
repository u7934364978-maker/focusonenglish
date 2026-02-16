import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = [
  {
    "id": "a1-u1-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Greetings & Personal Info",
    "difficulty": "easy",
    "transcript": "Hello. Hi. Good morning. Good afternoon. Good evening. Goodbye. Bye. Name. Surname. I am. You are. My. Your.",
    "content": {
      "title": "[[Vocabulary|Vocabulario]] [[and|y]] [[Grammar|Gramática]]",
      "instructions": "[[Learn|Aprende]] [[the|las]] [[basics|bases]] [[of|de]] [[introductions|presentaciones]].",
      "items": [
        { "front": "[[Hello|Hola]] / [[Hi|Hola]]", "back": "Hola" },
        { "front": "[[Good morning|Buenos días]]", "back": "Buenos días" },
        { "front": "[[Goodbye|Adiós]] / [[Bye|Adiós]]", "back": "Adiós" },
        { "front": "[[Name|Nombre]] / [[Surname|Apellido]]", "back": "Nombre / Apellido" },
        { "front": "[[I am|Yo soy/estoy]] / [[You are|Tú eres/estás]]", "back": "Yo soy / Tú eres" },
        { "front": "[[My|Mi]] / [[Your|Tu]]", "back": "Mi / Tu" }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "transcript": "I am John.",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]].",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[John|John]].",
          "options": ["[[am|soy/estoy]]", "[[is|es/está]]", "[[are|son/están]]"],
          "correctAnswer": 0,
          "explanation": "[[With|Con]] '[[I|Yo]]' [[always|siempre]] [[use|usa]] '[[am|soy/estoy]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "transcript": "You are a student.",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]].",
      "questions": [
        {
          "question": "[[You|Tú/Usted]] _______ [[a|un/una]] [[student|estudiante]].",
          "options": ["[[is|es/está]]", "[[are|son/están]]", "[[am|soy/estoy]]"],
          "correctAnswer": 1,
          "explanation": "[[With|Con]] '[[You|Tú/Usted]]' [[always|siempre]] [[use|usa]] '[[are|son/están]]'."
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
    "difficulty": "easy",
    "transcript": "My name is Peter.",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|oración]].",
      "questions": [
        {
          "question": "_______ [[name|nombre]] [[is|es/está]] [[Peter|Peter]].",
          "options": ["[[You|Tú/Usted]]", "[[Your|Tu/Su]]", "[[My|Mi]]"],
          "correctAnswer": 2,
          "explanation": "[[Use|Usa]] '[[My|Mi]]' [[for|para]] [[possession|posesión]] ([[my|mi]] [[name|nombre]])."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e5",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "transcript": "What is your surname?",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[option|opción]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] _______ [[surname|apellido]]?",
          "options": ["[[your|tu/su]]", "[[you|tú/usted]]", "[[I|yo]]"],
          "correctAnswer": 0,
          "explanation": "[[Use|Usa]] '[[your|tu/su]]' [[to|para]] [[ask|preguntar]] [[someone|a alguien]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e6",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "transcript": "Good morning, teacher.",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Put|Pon]] [[the|las]] [[words|palabras]] [[in|en]] [[order|orden]].",
      "correctSentence": "[[Good|Buen/Buenos]] [[morning|mañana]], [[teacher|profesor/a]].",
      "words": ["[[teacher|profesor/a]].", "[[morning|mañana]],", "[[Good|Buen/Buenos]]"],
      "explanation": "'[[Good|Buenos]] [[morning|días]]' [[is|es]] [[a|un]] [[formal|formal]] [[greeting|saludo]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e7",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "transcript": "I am happy.",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|oración]].",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[happy|feliz]].",
          "options": ["[[are|son/están]]", "[[am|soy/estoy]]", "[[is|es/está]]"],
          "correctAnswer": 1,
          "explanation": "[[I|Yo]] [[am|soy/estoy]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e8",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "difficulty": "easy",
    "transcript": "Nice to meet you.",
    "content": {
      "title": "[[Introductions|Presentaciones]]",
      "instructions": "[[Build|Construye]] [[the|la]] [[phrase|frase]].",
      "correctSentence": "[[Nice|Agradable]] [[to|a/para]] [[meet|conocer]] [[you|tú/usted]].",
      "words": ["[[you|tú/usted]].", "[[meet|conocer]]", "[[to|a/para]]", "[[Nice|Agradable]]"],
      "explanation": "[[A|Una]] [[common|común]] [[phrase|frase]] [[to|para]] [[say|decir]] '[[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]]'."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "transcript": "Goodbye, Mary.",
    "content": {
      "title": "[[Farewells|Despedidas]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[farewell|adiós]].",
      "questions": [
        {
          "question": "_______, [[Mary|Mary]].",
          "options": ["[[Goodbye|Adiós]]", "[[Hello|Hola]]", "[[Hi|Hola]]"],
          "correctAnswer": 0,
          "explanation": "[[Goodbye|Adiós]] [[is|es]] [[for|para]] [[leaving|irse]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "transcript": "Are you a teacher?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "_______ [[you|tú/usted]] [[a|un/una]] [[teacher|profesor/a]]?",
          "options": ["[[Is|Es/está]]", "[[Am|Soy/estoy]]", "[[Are|Eres/estás]]"],
          "correctAnswer": 2,
          "explanation": "[[In|En]] [[questions|preguntas]], [[the|el]] [[verb|verbo]] [[comes|viene]] [[first|primero]]: [[Are|Eres]] [[you|tú]]...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  // --- READING 1: THE INTRODUCTION (11-14) ---
  {
    "id": "a1-u1-e11",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Alex|Alex]]. [[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]]. [[My|Mi]] [[surname|apellido]] [[is|es]] [[Brown|Brown]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|La]] [[Introduction|Presentación]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]] [[and|y]] [[prepare|prepárate]] [[for|para]] [[the|las]] [[questions|preguntas]].",
      "text": "Hello! My name is Alex. I am a student. My surname is Brown.",
      "questions": []
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "[[What|Qué]] [[is|es]] [[his|su]] [[name|nombre]]?",
    "content": {
      "title": "[[Reading|Lectura]]: [[Alex|Alex]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]] [[based|basado]] [[on|en]] [[the|el]] [[text|texto]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] [[his|su]] [[name|nombre]]?",
          "options": ["[[Alex|Alex]]", "[[Brown|Brown]]", "[[Peter|Peter]]"],
          "correctAnswer": 0,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[My|Mi]] [[name|nombre]] [[is|es]] [[Alex|Alex]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e13",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "[[Is|Es]] [[Alex|Alex]] [[a|un]] [[teacher|profesor]]?",
    "content": {
      "title": "[[Reading|Lectura]]: [[Alex|Alex]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Is|Es/está]] [[Alex|Alex]] [[a|un/una]] [[teacher|profesor/a]]?",
          "options": ["[[Yes|Sí]]", "[[No|No]]"],
          "correctAnswer": 1,
          "explanation": "[[Alex|Alex]] [[is|es]] [[a|un]] [[student|estudiante]], [[not|no]] [[a|un]] [[teacher|profesor]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "[[What|Qué]] [[is|es]] [[his|su]] [[surname|apellido]]?",
    "content": {
      "title": "[[Reading|Lectura]]: [[Alex|Alex]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] [[his|su]] [[surname|apellido]]?",
          "options": ["[[Student|Estudiante]]", "[[Brown|Brown]]", "[[Smith|Smith]]"],
          "correctAnswer": 1,
          "explanation": "[[His|Su]] [[surname|apellido]] [[is|es]] [[Brown|Brown]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e15",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Am I your teacher?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]].",
      "questions": [
        {
          "question": "_______ [[I|Yo]] [[your|tu/su]] [[teacher|profesor/a]]?",
          "options": ["[[Are|Eres/estás]]", "[[Is|Es/está]]", "[[Am|Soy/estoy]]"],
          "correctAnswer": 2,
          "explanation": "[[Am|Soy]] [[I|yo]]...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e16",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessives",
    "difficulty": "easy",
    "transcript": "Is this your name?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Put|Pon]] [[in|en]] [[order|orden]].",
      "correctSentence": "[[Is|Es/está]] [[this|esto/esta]] [[your|tu/su]] [[name|nombre]]?",
      "words": ["[[name|nombre]]?", "[[your|tu/su]]", "[[this|esto/esta]]", "[[Is|Es/está]]"],
      "explanation": "[[Verb|Verbo]] + [[Subject|Sujeto]] + [[Complement|Complemento]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Good afternoon, students.",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[greeting|saludo]].",
      "questions": [
        {
          "question": "[[Good|Buen/Buenos]] _______, [[students|estudiantes]].",
          "options": ["[[Morning|Mañana]]", "[[Afternoon|Tarde]]", "[[Night|Noche]]"],
          "correctAnswer": 1,
          "explanation": "[[Good|Buenas]] [[afternoon|tardes]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "You are my friend.",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|oración]].",
      "questions": [
        {
          "question": "[[You|Tú/Usted]] [[are|eres/estás]] _______ [[friend|amigo/a]].",
          "options": ["[[my|mi]]", "[[I|yo]]", "[[you|tú/usted]]"],
          "correctAnswer": 0,
          "explanation": "[[My|Mi]] [[friend|amigo/a]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e19",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "difficulty": "easy",
    "transcript": "My surname is Garcia.",
    "content": {
      "title": "[[Introductions|Presentaciones]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[My|Mi]] [[surname|apellido]] [[is|es/está]] [[Garcia|Garcia]].",
      "words": ["[[Garcia|Garcia]].", "[[is|es/está]]", "[[surname|apellido]]", "[[My|Mi]]"],
      "explanation": "[[Sujeto|Subject]] + [[is|es]] + [[Garcia|Garcia]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Are you ready?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
      "questions": [
        {
          "question": "_______ [[you|tú/usted]] [[ready|listo/a]]?",
          "options": ["[[Is|Es/está]]", "[[Are|Eres/estás]]", "[[Am|Soy/estoy]]"],
          "correctAnswer": 1,
          "explanation": "[[Are|Estás]] [[you|tú]] [[ready|listo/a]]?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Hi! How are you?",
    "content": {
      "title": "[[Dialogues|Diálogos]]",
      "instructions": "[[Complete|Completa]] [[the|el]] [[dialogue|diálogo]].",
      "questions": [
        {
          "question": "[[Hi|Hola]]! [[How|Cómo]] _______ [[you|tú/usted]]?",
          "options": ["[[is|es/está]]", "[[am|soy/estoy]]", "[[are|eres/estás]]"],
          "correctAnswer": 2,
          "explanation": "[[How|Cómo]] [[are|estás]] [[you|tú]]?"
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e22",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "I am not a teacher.",
    "content": {
      "title": "[[Negatives|Negativos]]",
      "instructions": "[[Build|Construye]] [[the|la]] [[sentence|oración]].",
      "correctSentence": "[[I|Yo]] [[am|soy/estoy]] [[not|no]] [[a|un/una]] [[teacher|profesor/a]].",
      "words": ["[[teacher|profesor/a]].", "[[not|no]]", "[[a|un/una]]", "[[am|soy/estoy]]", "[[I|Yo]]"],
      "explanation": "[[Subject|Sujeto]] + [[am|soy]] + [[not|no]] + [[complement|complemento]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "See you later. Bye!",
    "content": {
      "title": "[[Farewells|Despedidas]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[response|respuesta]].",
      "questions": [
        {
          "question": "[[See|Ver]] [[you|tú/usted]] [[later|más tarde]]. _______!",
          "options": ["[[Bye|Adiós]]", "[[Hello|Hola]]", "[[Good morning|Buenos días]]"],
          "correctAnswer": 0,
          "explanation": "[[Bye|Adiós]] [[matches|encaja]] [[with|con]] '[[See|Ver]] [[you|tú]] [[later|más tarde]]'."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Your name is very nice.",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
      "questions": [
        {
          "question": "_______ [[name|nombre]] [[is|es/está]] [[very|muy]] [[nice|agradable]].",
          "options": ["[[My|Mi]]", "[[You|Tú/Usted]]", "[[Your|Tu/Su]]"],
          "correctAnswer": 2,
          "explanation": "[[Your|Tu]] [[name|nombre]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  // --- READING 2: SARAH'S PROFILE (25-28) ---
  {
    "id": "a1-u1-e25",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[am|soy]] [[Sarah|Sarah]]. [[I|Yo]] [[am|soy]] [[from|de]] [[London|Londres]]. [[My|Mi]] [[surname|apellido]] [[is|es]] [[Miller|Miller]]. [[You|Tú]] [[are|eres]] [[my|mi]] [[new|nuevo]] [[friend|amigo]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[Sarah|Sarah]]'s [[Profile|Perfil]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]] [[and|y]] [[prepare|prepárate]] [[for|para]] [[the|las]] [[questions|preguntas]].",
      "text": "I am Sarah. I am from London. My surname is Miller. You are my new friend.",
      "questions": []
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "[[Where|De dónde]] [[is|es]] [[Sarah|Sarah]] [[from|de]]?",
    "content": {
      "title": "[[Reading|Lectura]]: [[Sarah|Sarah]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[Sarah|Sarah]] [[from|de]]?",
          "options": ["[[London|Londres]]", "[[Miller|Miller]]", "[[New York|Nueva York]]"],
          "correctAnswer": 0,
          "explanation": "[[She|Ella]] [[is|es]] [[from|de]] [[London|Londres]]."
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
    "transcript": "[[What|Qué]] [[is|es]] [[her|su]] [[surname|apellido]]?",
    "content": {
      "title": "[[Reading|Lectura]]: [[Sarah|Sarah]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] [[her|su]] [[surname|apellido]]?",
          "options": ["[[Sarah|Sarah]]", "[[Miller|Miller]]", "[[Brown|Brown]]"],
          "correctAnswer": 1,
          "explanation": "[[Her|Su]] [[surname|apellido]] [[is|es]] [[Miller|Miller]]."
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
    "transcript": "[[Who|Quién]] [[is|es]] [[the|el]] [[new|nuevo]] [[friend|amigo]]?",
    "content": {
      "title": "[[Reading|Lectura]]: [[Sarah|Sarah]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Who|Quién]] [[is|es]] [[the|el]] [[new|nuevo]] [[friend|amigo/a]]?",
          "options": ["[[Sarah|Sarah]]", "[[London|Londres]]", "[[You|Tú/Usted]]"],
          "correctAnswer": 2,
          "explanation": "[[She|Ella]] [[says|dice]]: \"[[You|Tú]] [[are|eres]] [[my|mi]] [[new|nuevo]] [[friend|amigo/a]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Am I late?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]].",
      "questions": [
        {
          "question": "_______ [[I|Yo]] [[late|tarde]]?",
          "options": ["[[Is|Es/está]]", "[[Am|Llego/estoy]]", "[[Are|Estás]]"],
          "correctAnswer": 1,
          "explanation": "[[Am|Estoy]] [[I|yo]]...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e30",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Good evening, Mr. Jones.",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Put|Pon]] [[in|en]] [[order|orden]].",
      "correctSentence": "[[Good|Buenas]] [[evening|noches]], [[Mr.|Sr.]] [[Jones|Jones]].",
      "words": ["[[Jones|Jones]].", "[[Mr.|Sr.]]", "[[evening|noches]],", "[[Good|Buenas]]"],
      "explanation": "[[Good|Buenas]] [[evening|noches]] [[is|es]] [[a|un]] [[greeting|saludo]] [[for|para]] [[the|la]] [[evening|noche]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "You are from New York.",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
      "questions": [
        {
          "question": "[[You|Tú/Usted]] _______ [[from|de]] [[New York|Nueva York]].",
          "options": ["[[are|eres/estás]]", "[[is|es/está]]", "[[am|soy/estoy]]"],
          "correctAnswer": 0,
          "explanation": "[[You|Tú]] [[are|eres]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e32",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessives",
    "difficulty": "easy",
    "transcript": "My teacher is great.",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[My|Mi]] [[teacher|profesor/a]] [[is|es/está]] [[great|genial]].",
      "words": ["[[great|genial]].", "[[is|es/está]]", "[[teacher|profesor/a]]", "[[My|Mi]]"],
      "explanation": "[[My|Mi]] [[teacher|profesor/a]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Is your name John?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
      "questions": [
        {
          "question": "[[Is|Es/está]] _______ [[name|nombre]] [[John|John]]?",
          "options": ["[[you|tú/usted]]", "[[my|mi]]", "[[your|tu/su]]"],
          "correctAnswer": 2,
          "explanation": "[[Your|Tu]] [[name|nombre]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e34",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Goodbye, see you tomorrow.",
    "content": {
      "title": "[[Farewells|Despedidas]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[phrase|frase]].",
      "questions": [
        {
          "question": "[[Goodbye|Adiós]], [[see|ver]] [[you|tú/usted]] _______.",
          "options": ["[[tomorrow|mañana]]", "[[morning|mañana]]", "[[afternoon|tarde]]"],
          "correctAnswer": 0,
          "explanation": "[[See|Ver]] [[you|tú]] [[tomorrow|mañana]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e35",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "I am a student here.",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[I|Yo]] [[am|soy/estoy]] [[a|un/una]] [[student|estudiante]] [[here|aquí]].",
      "words": ["[[here|aquí]].", "[[student|estudiante]]", "[[a|un/una]]", "[[am|soy/estoy]]", "[[I|Yo]]"],
      "explanation": "[[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e36",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Are you a nurse?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]].",
      "questions": [
        {
          "question": "_______ [[you|tú/usted]] [[a|un/una]] [[nurse|enfermero/a]]?",
          "options": ["[[Is|Es/está]]", "[[Are|Eres/estás]]", "[[Am|Soy/estoy]]"],
          "correctAnswer": 1,
          "explanation": "[[Are|Eres]] [[you|tú]]...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessives",
    "difficulty": "easy",
    "transcript": "What is my surname?",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] _______ [[surname|apellido]]?",
          "options": ["[[my|mi]]", "[[I|yo]]", "[[you|tú/usted]]"],
          "correctAnswer": 0,
          "explanation": "[[My|Mi]] [[surname|apellido]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e38",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "difficulty": "easy",
    "transcript": "Hello, I am Maria.",
    "content": {
      "title": "[[Introductions|Presentaciones]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[Hello|Hola]], [[I|Yo]] [[am|soy/estoy]] [[Maria|Maria]].",
      "words": ["[[Maria|Maria]].", "[[am|soy/estoy]]", "[[I|Yo]]", "[[Hello|Hola]],"],
      "explanation": "[[Hello|Hola]], [[I|Yo]] [[am|soy]] [[Maria|Maria]]."
    },
    "topicName": "Vocabulary"
  },
  // --- READING 3: A NEW STUDENT (39-42) ---
  {
    "id": "a1-u1-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hi! I am Tom. You are my teacher. My surname is Clark. I am a new student.",
    "content": {
      "title": "[[Reading|Lectura]]: [[A|Un]] [[New|Nuevo]] [[Student|Estudiante]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]].",
      "questions": [
        {
          "question": "[[Hi|Hola]]! [[I|Yo]] [[am|soy/estoy]] [[Tom|Tom]]. [[You|Tú/Usted]] [[are|eres/estás]] [[my|mi]] [[teacher|profesor/a]]. [[My|Mi]] [[surname|apellido]] [[is|es/está]] [[Clark|Clark]]. [[I|Yo]] [[am|soy/estoy]] [[a|un/una]] [[new|nuevo]] [[student|estudiante]].",
          "options": ["[[I|Yo]] [[read|leo]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Text|Texto]] [[only|solamente]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e40",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hi! I am Tom. You are my teacher. My surname is Clark. I am a new student.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Tom|Tom]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Who|Quién]] [[is|es]] [[Tom|Tom]]?",
          "options": ["[[Teacher|Profesor/a]]", "[[Student|Estudiante]]", "[[Surname|Apellido]]"],
          "correctAnswer": 1,
          "explanation": "[[Tom|Tom]] [[is|es]] [[a|un]] [[student|estudiante]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hi! I am Tom. You are my teacher. My surname is Clark. I am a new student.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Tom|Tom]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] [[his|su]] [[surname|apellido]]?",
          "options": ["[[Clark|Clark]]", "[[Tom|Tom]]", "[[Student|Estudiante]]"],
          "correctAnswer": 0,
          "explanation": "[[His|Su]] [[surname|apellido]] [[is|es]] [[Clark|Clark]]."
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
    "transcript": "Hi! I am Tom. You are my teacher. My surname is Clark. I am a new student.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Tom|Tom]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Who|Quién]] [[is|es]] [[the|el]] [[teacher|profesor/a]]?",
          "options": ["[[Tom|Tom]]", "[[Clark|Clark]]", "[[You|Tú/Usted]]"],
          "correctAnswer": 2,
          "explanation": "[[Tom|Tom]] [[says|dice]]: \"[[You|Tú]] [[are|eres]] [[my|mi]] [[teacher|profesor/a]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Is your surname Wilson?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
      "questions": [
        {
          "question": "[[Is|Es/está]] _______ [[surname|apellido]] [[Wilson|Wilson]]?",
          "options": ["[[you|tú/usted]]", "[[your|tu/su]]", "[[I|yo]]"],
          "correctAnswer": 1,
          "explanation": "[[Your|Tu]] [[surname|apellido]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e44",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "I am from Madrid.",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Put|Pon]] [[in|en]] [[order|orden]].",
      "correctSentence": "[[I|Yo]] [[am|soy/estoy]] [[from|de]] [[Madrid|Madrid]].",
      "words": ["[[Madrid|Madrid]].", "[[from|de]]", "[[am|soy/estoy]]", "[[I|Yo]]"],
      "explanation": "[[I|Yo]] [[am|soy]] [[from|de]] [[Madrid|Madrid]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e45",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Hi, I am fine.",
    "content": {
      "title": "[[Dialogues|Diálogos]]",
      "instructions": "[[Complete|Completa]] [[the|el]] [[dialogue|diálogo]].",
      "questions": [
        {
          "question": "[[Hi|Hola]], [[I|Yo]] _______ [[fine|bien]].",
          "options": ["[[am|soy/estoy]]", "[[are|eres/estás]]", "[[is|es/está]]"],
          "correctAnswer": 0,
          "explanation": "[[I|Yo]] [[am|estoy]] [[fine|bien]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e46",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessives",
    "difficulty": "easy",
    "transcript": "Your student is clever.",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[Your|Tu/Su]] [[student|estudiante]] [[is|es/está]] [[clever|listo/a]].",
      "words": ["[[clever|listo/a]].", "[[is|es/está]]", "[[student|estudiante]]", "[[Your|Tu/Su]]"],
      "explanation": "[[Your|Tu]] [[student|estudiante]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Are you my teacher?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "_______ [[you|tú/usted]] [[my|mi]] [[teacher|profesor/a]]?",
          "options": ["[[Is|Es/está]]", "[[Am|Soy/estoy]]", "[[Are|Eres/estás]]"],
          "correctAnswer": 2,
          "explanation": "[[Are|Eres]] [[you|tú]]...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e48",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Goodbye, have a nice day.",
    "content": {
      "title": "[[Farewells|Despedidas]]",
      "instructions": "[[Build|Construye]] [[the|la]] [[phrase|frase]].",
      "correctSentence": "[[Goodbye|Adiós]], [[have|ten/tenga]] [[a|un/una]] [[nice|buen/agradable]] [[day|día]].",
      "words": ["[[day|día]].", "[[nice|buen/agradable]]", "[[a|un/una]]", "[[have|ten/tenga]]", "[[Goodbye|Adiós]],"],
      "explanation": "[[A|Una]] [[polite|educada]] [[way|forma]] [[to|de]] [[say|decir]] [[goodbye|adiós]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "I am not John.",
    "content": {
      "title": "[[Negatives|Negativos]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|oración]].",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[not|no]] [[John|John]].",
          "options": ["[[am|soy/estoy]]", "[[are|eres/estás]]", "[[is|es/está]]"],
          "correctAnswer": 0,
          "explanation": "[[I|Yo]] [[am|soy]] [[not|no]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e50",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessives",
    "difficulty": "easy",
    "transcript": "Your name is Peter.",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[Your|Tu/Su]] [[name|nombre]] [[is|es/está]] [[Peter|Peter]].",
      "words": ["[[Peter|Peter]].", "[[is|es/está]]", "[[name|nombre]]", "[[Your|Tu/Su]]"],
      "explanation": "[[Your|Tu]] [[name|nombre]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Are you from Spain?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "_______ [[you|tú/usted]] [[from|de]] [[Spain|España]]?",
          "options": ["[[Am|Soy/estoy]]", "[[Is|Es/está]]", "[[Are|Eres/estás]]"],
          "correctAnswer": 2,
          "explanation": "[[Are|Eres]] [[you|tú]] [[from|de]]...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "Good morning, class.",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[greeting|saludo]].",
      "questions": [
        {
          "question": "[[Good|Buenos]] _______, [[class|clase]].",
          "options": ["[[Morning|Días]]", "[[Night|Noches]]", "[[Afternoon|Tardes]]"],
          "correctAnswer": 0,
          "explanation": "[[Good|Buenos]] [[morning|días]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  // --- READING 4: THE TEACHER (53-56) ---
  {
    "id": "a1-u1-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hello class! I am your teacher. My name is Anna Smith. You are my students.",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|La]] [[Teacher|Profesora]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]].",
      "questions": [
        {
          "question": "[[Hello|Hola]] [[class|clase]]! [[I|Yo]] [[am|soy/estoy]] [[your|su]] [[teacher|profesora]]. [[My|Mi]] [[name|nombre]] [[is|es/está]] [[Anna|Anna]] [[Smith|Smith]]. [[You|Ustedes]] [[are|son/están]] [[my|mis]] [[students|estudiantes]].",
          "options": ["[[I|Yo]] [[read|leo]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Text|Texto]] [[only|solamente]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hello class! I am your teacher. My name is Anna Smith. You are my students.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Anna|Anna]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Who|Quién]] [[is|es]] [[Anna|Anna]] [[Smith|Smith]]?",
          "options": ["[[Student|Estudiante]]", "[[Teacher|Profesora]]", "[[Class|Clase]]"],
          "correctAnswer": 1,
          "explanation": "[[Anna|Anna]] [[is|es]] [[the|la]] [[teacher|profesora]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hello class! I am your teacher. My name is Anna Smith. You are my students.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Anna|Anna]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] [[her|su]] [[name|nombre]]?",
          "options": ["[[Anna|Anna]]", "[[Smith|Smith]]", "[[Teacher|Profesora]]"],
          "correctAnswer": 0,
          "explanation": "[[Her|Su]] [[name|nombre]] [[is|es]] [[Anna|Anna]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hello class! I am your teacher. My name is Anna Smith. You are my students.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Anna|Anna]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Who|Quiénes]] [[are|son]] [[the|los]] [[students|estudiantes]]?",
          "options": ["[[Anna|Anna]]", "[[Smith|Smith]]", "[[You|Ustedes]]"],
          "correctAnswer": 2,
          "explanation": "[[She|Ella]] [[says|dice]]: \"[[You|Ustedes]] [[are|son]] [[my|mis]] [[students|estudiantes]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  // --- READING 5: FORMAL INTRODUCTION (57-60) ---
  {
    "id": "a1-u1-e57",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Good morning. I am Mr. White. My name is Peter. You are my new student.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Formal|Formal]] [[Introduction|Presentación]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]].",
      "questions": [
        {
          "question": "[[Good morning|Buenos días]]. [[I|Yo]] [[am|soy/estoy]] [[Mr.|Sr.]] [[White|White]]. [[My|Mi]] [[name|nombre]] [[is|es/está]] [[Peter|Peter]]. [[You|Tú/Usted]] [[are|eres/estás]] [[my|mi]] [[new|nuevo]] [[student|estudiante]].",
          "options": ["[[I|Yo]] [[read|leo]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Text|Texto]] [[only|solamente]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Good morning. I am Mr. White. My name is Peter. You are my new student.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Mr. White|Sr. White]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] [[his|su]] [[surname|apellido]]?",
          "options": ["[[Peter|Peter]]", "[[White|White]]", "[[Student|Estudiante]]"],
          "correctAnswer": 1,
          "explanation": "[[His|Su]] [[surname|apellido]] [[is|es]] [[White|White]] ([[Mr.|Sr.]] [[White|White]])."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Good morning. I am Mr. White. My name is Peter. You are my new student.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Mr. White|Sr. White]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] [[his|su]] [[name|nombre]]?",
          "options": ["[[Peter|Peter]]", "[[White|White]]", "[[New|Nuevo]]"],
          "correctAnswer": 0,
          "explanation": "[[His|Su]] [[name|nombre]] [[is|es]] [[Peter|Peter]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Good morning. I am Mr. White. My name is Peter. You are my new student.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Mr. White|Sr. White]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Who|Quién]] [[is|es]] [[the|el]] [[new|nuevo]] [[student|estudiante]]?",
          "options": ["[[Peter|Peter]]", "[[Mr. White|Sr. White]]", "[[You|Tú/Usted]]"],
          "correctAnswer": 2,
          "explanation": "[[He|Él]] [[says|dice]]: \"[[You|Tú]] [[are|eres]] [[my|mi]] [[new|nuevo]] [[student|estudiante]]\"."
        }
      ]
    },
    "topicName": "Reading"
  }
];
