import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = [
  {
    "id": "a1-u1-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Greetings & Personal Info",
    "difficulty": "easy",
    "transcript": "[[Hello|Hola]]. [[Hi|Hola]]. [[Good morning|Buenos días]]. [[Good afternoon|Buenas tardes]]. [[Good evening|Buenas noches]]. [[Goodbye|Adiós]]. [[Bye|Adiós]]. [[Name|Nombre]]. [[Surname|Apellido]]. [[I am|Yo soy/estoy]]. [[You are|Tú eres/estás]]. [[My|Mi]]. [[Your|Tu]].",
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
    "transcript": "[[I|Yo]] [[am|soy]] [[John|John]].",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]] [[for|para]] [[the|la]] [[sentence|frase]].",
      "options": ["[[is|es/está]]", "[[are|son/están]]", "[[am|soy/estoy]]"],
      "correctAnswer": 2,
      "explanation": "[[With|Con]] '[[I|Yo]]' [[always|siempre]] [[use|usa]] '[[am|soy/estoy]]'."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "transcript": "[[You|Tú]] [[are|eres]] [[a|un]] [[student|estudiante]].",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[form|forma]] [[of|de]] '[[to be|ser/estar]]' [[for|para]] '[[you|tú]]'.",
      "options": ["[[is|es/está]]", "[[are|son/están]]", "[[am|soy/estoy]]"],
      "correctAnswer": 1,
      "explanation": "[[With|Con]] '[[You|Tú/Usted]]' [[always|siempre]] [[use|usa]] '[[are|son/están]]'."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[name|nombre]] [[is|es]] [[Peter|Peter]].",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|oración]] [[about|sobre]] [[yourself|ti mismo]].",
      "options": ["[[You|Tú/Usted]]", "[[Your|Tu/Su]]", "[[My|Mi]]"],
      "correctAnswer": 2,
      "explanation": "[[Use|Usa]] '[[My|Mi]]' [[for|para]] [[possession|posesión]] [[related|relacionada]] [[to|a]] '[[I|Yo]]'."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e5",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "transcript": "[[What|Qué]] [[is|es]] [[your|tu]] [[surname|apellido]]?",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[option|opción]] [[to|para]] [[ask|preguntar]] [[a|a un]] [[friend|amigo]].",
      "options": ["[[your|tu/su]]", "[[you|tú/usted]]", "[[I|yo]]"],
      "correctAnswer": 0,
      "explanation": "[[Use|Usa]] '[[your|tu/su]]' [[to|para]] [[ask|preguntar]] [[someone|a alguien]] [[about|sobre]] [[their|su]] [[info|información]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e6",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "transcript": "[[Good|Buenos]] [[morning|días]], [[teacher|profesor/a]].",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Put|Pon]] [[the|las]] [[words|palabras]] [[in|en]] [[order|orden]] [[to|para]] [[greet|saludar]] [[the|al]] [[teacher|profesor]].",
      "correctSentence": "[[Good|Buen/Buenos]] [[morning|mañana]], [[teacher|profesor/a]].",
      "words": ["[[teacher|profesor/a]].", "[[morning|mañana]],", "[[Good|Buen/Buenos]]"],
      "explanation": "'[[Good|Buenos]] [[morning|días]]' [[is|es]] [[a|un]] [[formal|formal]] [[greeting|saludo]] [[until|hasta]] [[noon|el mediodía]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e7",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[am|estoy]] [[happy|feliz]].",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|oración]] [[expressing|expresando]] [[a|un]] [[feeling|sentimiento]].",
      "options": ["[[are|son/están]]", "[[am|soy/estoy]]", "[[is|es/está]]"],
      "correctAnswer": 1,
      "explanation": "[[I|Yo]] [[am|soy/estoy]] [[is|es]] [[the|la]] [[correct|correcta]] [[combination|combinación]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e8",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "difficulty": "easy",
    "transcript": "[[Nice|Agradable]] [[to|a]] [[meet|conocer]] [[you|tú]].",
    "content": {
      "title": "[[Introductions|Presentaciones]]",
      "instructions": "[[Build|Construye]] [[the|la]] [[phrase|frase]] [[used|usada]] [[after|después de]] [[meeting|conocer]] [[someone|a alguien]].",
      "correctSentence": "[[Nice|Agradable]] [[to|a/para]] [[meet|conocer]] [[you|tú/usted]].",
      "words": ["[[you|tú/usted]].", "[[meet|conocer]]", "[[to|a/para]]", "[[Nice|Agradable]]"],
      "explanation": "[[This|Esta]] [[phrase|frase]] [[means|significa]] '[[Encantado|Encantado]] [[de|de]] [[conocerte|conocerte]]'."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "transcript": "[[Goodbye|Adiós]], [[Mary|Mary]].",
    "content": {
      "title": "[[Farewells|Despedidas]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[farewell|adiós]] [[when|cuando]] [[leaving|te vas]].",
      "options": ["[[Goodbye|Adiós]]", "[[Hello|Hola]]", "[[Hi|Hola]]"],
      "correctAnswer": 0,
      "explanation": "[[Goodbye|Adiós]] [[is|es]] [[used|usado]] [[specifically|específicamente]] [[for|para]] [[departing|partir]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "transcript": "[[Are|Eres]] [[you|tú]] [[a|un]] [[teacher|profesor]]?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[question|pregunta]] [[about|sobre]] [[a|una]] [[profession|profesión]].",
      "options": ["[[Is|Es/está]]", "[[Am|Soy/estoy]]", "[[Are|Eres/estás]]"],
      "correctAnswer": 2,
      "explanation": "[[In|En]] [[questions|preguntas]] [[with|con]] '[[you|tú]]', [[the|el]] [[verb|verbo]] '[[are|eres/estás]]' [[goes|va]] [[first|primero]]."
    },
    "topicName": "Grammar"
  },
  // --- READING 1: ALEX (11) ---
  {
    "id": "a1-u1-e11",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Alex|Alex]]. [[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]]. [[My|Mi]] [[surname|apellido]] [[is|es]] [[Brown|Brown]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|La]] [[Introduction|Presentación]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]] [[and|y]] [[answer|responde]] [[the|las]] [[questions|preguntas]].",
      "text": "Hello! My name is Alex. I am a student. My surname is Brown.",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] [[his|su]] [[name|nombre]]?",
          "options": ["[[Peter|Peter]]", "[[Alex|Alex]]", "[[Brown|Brown]]"],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[My|Mi]] [[name|nombre]] [[is|es]] [[Alex|Alex]]\"."
        },
        {
          "question": "[[Is|Es/está]] [[Alex|Alex]] [[a|un/una]] [[teacher|profesor/a]]?",
          "options": ["[[Yes|Sí]]", "[[No|No]]"],
          "correctAnswer": 1,
          "explanation": "[[Alex|Alex]] [[says|dice]] [[he|él]] [[is|es]] [[a|un]] [[student|estudiante]]."
        },
        {
          "question": "[[What|Qué]] [[is|es/está]] [[his|su]] [[surname|apellido]]?",
          "options": ["[[Brown|Brown]]", "[[Smith|Smith]]", "[[Clark|Clark]]"],
          "correctAnswer": 0,
          "explanation": "[[His|Su]] [[surname|apellido]] [[is|es]] [[Brown|Brown]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  // --- NEW EXERCISES (12-14) to replace merged Alex questions ---
  {
    "id": "a1-u1-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "transcript": "[[Good|Buenas]] [[evening|noches]].",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Identify|Identifica]] [[the|el]] [[correct|correcto]] [[greeting|saludo]] [[for|para]] [[the|la]] [[night|noche]].",
      "options": ["[[Good|Buenas]] [[morning|días]]", "[[Good|Buenas]] [[afternoon|tardes]]", "[[Good|Buenas]] [[evening|noches]]"],
      "correctAnswer": 2,
      "explanation": "[[Good|Buenas]] [[evening|noches]] [[is|es]] [[the|el]] [[greeting|saludo]] [[at|por]] [[night|la noche]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e13",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[Are|¿Estás]] [[you|tú]] [[fine|bien]]?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[logical|lógica]] [[response|respuesta]] [[to|a]] '[[How|Cómo]] [[are|estás]] [[you|tú]]?'.",
      "options": ["[[I|Yo]] [[am|estoy]] [[fine|bien]]", "[[I|Yo]] [[am|soy]] [[John|John]]", "[[My|Mi]] [[name|nombre]] [[is|es]] [[Alex|Alex]]"],
      "correctAnswer": 0,
      "explanation": "[[When|Cuando]] [[someone|alguien]] [[asks|pregunta]] [[how|cómo]] [[you|tú]] [[are|estás]], [[you|tú]] [[respond|respondes]] [[with|con]] [[your|tu]] [[state|estado]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e14",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "difficulty": "easy",
    "transcript": "[[What|Cuál]] [[is|es]] [[your|tu]] [[name|nombre]]?",
    "content": {
      "title": "[[Asking|Preguntando]] [[Info|Información]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[ask|preguntar]] [[a|un]] [[name|nombre]].",
      "correctSentence": "[[What|Qué]] [[is|es/está]] [[your|tu/su]] [[name|nombre]]?",
      "words": ["[[name|nombre]]?", "[[your|tu/su]]", "[[is|es/está]]", "[[What|Qué]]"],
      "explanation": "[[This|Esta]] [[is|es]] [[the|la]] [[standard|estándar]] [[way|forma]] [[to|de]] [[ask|preguntar]] [[someone's|de alguien]] [[name|nombre]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e15",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[Am|¿Soy]] [[I|yo]] [[your|tu]] [[teacher|profesor]]?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]] [[to|para]] [[ask|preguntar]] [[about|sobre]] [[oneself|uno mismo]].",
      "options": ["[[Are|Eres/estás]]", "[[Is|Es/está]]", "[[Am|Soy/estoy]]"],
      "correctAnswer": 2,
      "explanation": "[[Use|Usa]] '[[Am|Soy/estoy]]' [[with|con]] '[[I|Yo]]' [[in|en]] [[questions|preguntas]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e16",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessives",
    "difficulty": "easy",
    "transcript": "[[Is|¿Es]] [[this|este]] [[your|tu]] [[name|nombre]]?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Put|Pon]] [[in|en]] [[order|orden]] [[to|para]] [[verify|verificar]] [[a|un]] [[name|nombre]].",
      "correctSentence": "[[Is|Es/está]] [[this|esto/esta]] [[your|tu/su]] [[name|nombre]]?",
      "words": ["[[name|nombre]]?", "[[your|tu/su]]", "[[this|esto/esta]]", "[[Is|Es/está]]"],
      "explanation": "[[The|El]] [[verb|verbo]] '[[to be|ser]]' [[starts|empieza]] [[the|la]] [[question|pregunta]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "[[Good|Buenas]] [[afternoon|tardes]], [[students|estudiantes]].",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[greeting|saludo]] [[for|para]] [[the|la]] [[afternoon|tarde]] (1:00 [[PM|PM]]).",
      "options": ["[[Morning|Mañana]]", "[[Afternoon|Tarde]]", "[[Night|Noche]]"],
      "correctAnswer": 1,
      "explanation": "[[Afternoon|Tarde]] [[is|es]] [[between|entre]] [[noon|el mediodía]] [[and|y]] [[sunset|el atardecer]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[You|Tú]] [[are|eres]] [[my|mi]] [[friend|amigo]].",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|oración]] [[expressing|expresando]] [[friendship|amistad]].",
      "options": ["[[my|mi]]", "[[I|yo]]", "[[you|tú/usted]]"],
      "correctAnswer": 0,
      "explanation": "[[Use|Usa]] '[[my|mi]]' [[before|antes de]] [[a|un]] [[noun|sustantivo]] [[like|como]] '[[friend|amigo]]'."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e19",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[surname|apellido]] [[is|es]] [[Garcia|Garcia]].",
    "content": {
      "title": "[[Introductions|Presentaciones]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[say|decir]] [[your|tu]] [[last name|apellido]].",
      "correctSentence": "[[My|Mi]] [[surname|apellido]] [[is|es/está]] [[Garcia|Garcia]].",
      "words": ["[[Garcia|Garcia]].", "[[is|es/está]]", "[[surname|apellido]]", "[[My|Mi]]"],
      "explanation": "[[Surname|Apellido]] [[is|es]] [[your|tu]] [[last|último]] [[name|nombre]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[Are|¿Estás]] [[you|tú]] [[ready|listo]]?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]] [[to|para]] [[form|formar]] [[the|la]] [[question|pregunta]].",
      "options": ["[[Is|Es/está]]", "[[Are|Eres/estás]]", "[[Am|Soy/estoy]]"],
      "correctAnswer": 1,
      "explanation": "[[With|Con]] '[[you|tú]]', [[always|siempre]] [[use|usa]] '[[Are|Eres/Estás]]'."
    },
    "topicName": "Grammar"
  },
  // --- READING 2: SARAH (21) ---
  {
    "id": "a1-u1-e21",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "[[Hi|Hola]]. [[I|Yo]] [[am|soy]] [[Sarah|Sarah]]. [[I|Yo]] [[am|soy]] [[from|de]] [[London|Londres]]. [[My|Mi]] [[surname|apellido]] [[is|es]] [[Miller|Miller]]. [[You|Tú]] [[are|eres]] [[Peter|Peter]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[Sarah|Sarah]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]] [[and|y]] [[answer|responde]] [[the|las]] [[questions|preguntas]].",
      "text": "Hi. I am Sarah. I am from London. My surname is Miller. You are Peter.",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es/está]] [[Sarah|Sarah]] [[from|de]]?",
          "options": ["[[Madrid|Madrid]]", "[[London|Londres]]", "[[Paris|París]]"],
          "correctAnswer": 1,
          "explanation": "[[Sarah|Sarah]] [[says|dice]]: \"[[I|Yo]] [[am|soy]] [[from|de]] [[London|Londres]]\"."
        },
        {
          "question": "[[What|Qué]] [[is|es/está]] [[her|su]] [[surname|apellido]]?",
          "options": ["[[Miller|Miller]]", "[[Sarah|Sarah]]", "[[London|Londres]]"],
          "correctAnswer": 0,
          "explanation": "[[Her|Su]] [[surname|apellido]] [[is|es]] [[Miller|Miller]]."
        },
        {
          "question": "[[Who|Quién]] [[is|es]] [[Peter|Peter]]?",
          "options": ["[[The|La]] [[teacher|profesora]]", "[[The|El]] [[other|otro]] [[person|persona]]", "[[Sarah's|de Sarah]] [[brother|hermano]]"],
          "correctAnswer": 1,
          "explanation": "[[Sarah|Sarah]] [[is|está]] [[talking|hablando]] [[to|a]] [[Peter|Peter]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  // --- NEW EXERCISES (22-24) to replace merged Sarah questions ---
  {
    "id": "a1-u1-e22",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[surname|apellido]].",
    "content": {
      "title": "[[Vocabulary|Vocabulario]]",
      "instructions": "[[What|Qué]] [[is|es]] [[the|el]] [[meaning|significado]] [[of|de]] '[[surname|apellido]]'?",
      "options": ["[[First|Primer]] [[name|nombre]]", "[[Last|Último]] [[name|nombre]]", "[[Middle|Segundo]] [[name|nombre]]"],
      "correctAnswer": 1,
      "explanation": "[[Surname|Apellido]] [[is|es]] [[your|tu]] [[family|de familia]] [[name|nombre]] ([[last|último]] [[name|nombre]])."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[It|Eso]] [[is|es]] [[a|un]] [[pen|bolígrafo]].",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]] [[for|para]] '[[it|eso]]'.",
      "options": ["[[am|soy/estoy]]", "[[are|eres/estás]]", "[[is|es/está]]"],
      "correctAnswer": 2,
      "explanation": "[[With|Con]] '[[it|eso]]' ([[third|tercera]] [[person|persona]]), [[always|siempre]] [[use|usa]] '[[is|es/está]]'."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e24",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "transcript": "[[See|Ver]] [[you|tú]] [[later|más tarde]].",
    "content": {
      "title": "[[Farewells|Despedidas]]",
      "instructions": "[[Order|Ordena]] [[to|para]] [[say|decir]] '[[Hasta|Hasta]] [[luego|luego]]'.",
      "correctSentence": "[[See|Ver]] [[you|tú/usted]] [[later|más tarde]].",
      "words": ["[[later|más tarde]].", "[[you|tú/usted]]", "[[See|Ver]]"],
      "explanation": "[[This|Esta]] [[phrase|frase]] [[is|es]] [[very|muy]] [[common|común]] [[when|cuando]] [[saying|diciendo]] [[goodbye|adiós]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessives",
    "difficulty": "easy",
    "transcript": "[[Is|¿Es]] [[this|este]] [[your|tu]] [[pen|bolígrafo]]?",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[possessive|posesivo]] [[correctamente|correctly]].",
      "options": ["[[your|tu]]", "[[you|tú]]", "[[I|yo]]"],
      "correctAnswer": 0,
      "explanation": "[[Use|Usa]] '[[your|tu]]' [[to|para]] [[indicate|indicar]] [[possession|posesión]] [[of|de]] [[the|la]] [[other|otra]] [[person|persona]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e26",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "transcript": "[[Good|Buenas]] [[night|noches]], [[mom|mamá]].",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[say|decir]] [[good|buenas]] [[night|noches]] [[before|antes de]] [[sleeping|dormir]].",
      "correctSentence": "[[Good|Buen/Buenas]] [[night|noche]], [[mom|mamá]].",
      "words": ["[[mom|mamá]].", "[[night|noche]],", "[[Good|Buen/Buenas]]"],
      "explanation": "[[Good|Buenas]] [[night|noches]] [[is|es]] [[for|para]] [[going|irse]] [[to|a]] [[bed|la cama]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "transcript": "[[They|Ellos]] [[are|son]] [[teachers|profesores]].",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Choose|Elige]] [[the|la]] [[plural|plural]] [[form|forma]].",
      "options": ["[[is|es]]", "[[are|son]]", "[[am|soy]]"],
      "correctAnswer": 1,
      "explanation": "[[With|Con]] '[[they|ellos]]', [[use|usa]] '[[are|son]]'."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e28",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "transcript": "[[How|Cómo]] [[are|estás]] [[you|tú]]?",
    "content": {
      "title": "[[Dialogues|Diálogos]]",
      "instructions": "[[Put|Pon]] [[in|en]] [[order|orden]] [[to|para]] [[ask|preguntar]] [[someone|a alguien]] [[how|cómo]] [[they|ellos]] [[are|están]].",
      "correctSentence": "[[How|Cómo]] [[are|eres/estás]] [[you|tú/usted]]?",
      "words": ["[[you|tú/usted]]?", "[[are|eres/estás]]", "[[How|Cómo]]"],
      "explanation": "[[Standard|Estándar]] [[way|forma]] [[to|de]] [[ask|preguntar]] '[[¿Cómo|¿Cómo]] [[estás?|estás?]]'."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[He|Él]] [[is|es]] [[a|un]] [[doctor|doctor]].",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|oración]] [[about|sobre]] [[a|un]] [[man|hombre]].",
      "options": ["[[is|es]]", "[[am|soy]]", "[[are|son]]"],
      "correctAnswer": 0,
      "explanation": "[[He|Él]] [[takes|lleva]] '[[is|es]]'."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e30",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessives",
    "difficulty": "easy",
    "transcript": "[[This|Este]] [[is|es]] [[my|mi]] [[friend|amigo]].",
    "content": {
      "title": "[[Introductions|Presentaciones]]",
      "instructions": "[[Order|Ordena]] [[to|para]] [[introduce|presentar]] [[your|tu]] [[friend|amigo]].",
      "correctSentence": "[[This|Esto/Esta]] [[is|es/está]] [[my|mi]] [[friend|amigo/a]].",
      "words": ["[[friend|amigo/a]].", "[[my|mi]]", "[[is|es/está]]", "[[This|Esto/Esta]]"],
      "explanation": "[[Use|Usa]] '[[This|Esto]] [[is|es]]...' [[to|para]] [[introduce|presentar]] [[people|personas]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[Is|¿Es]] [[she|ella]] [[a|una]] [[nurse|enfermera]]?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[question|pregunta]] [[about|sobre]] [[a|una]] [[woman|mujer]].",
      "options": ["[[Am|Soy]]", "[[Are|Eres]]", "[[Is|Es]]"],
      "correctAnswer": 2,
      "explanation": "[[She|Ella]] [[takes|lleva]] '[[Is|Es]]' [[in|en]] [[questions|preguntas]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e32",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[am|estoy]] [[fine|bien]], [[thanks|gracias]].",
    "content": {
      "title": "[[Dialogues|Diálogos]]",
      "instructions": "[[Put|Pon]] [[in|en]] [[order|orden]] [[to|para]] [[respond|responder]] [[politely|educadamente]].",
      "correctSentence": "[[I|Yo]] [[am|soy/estoy]] [[fine|bien/fino]], [[thanks|gracias]].",
      "words": ["[[thanks|gracias]].", "[[fine|bien/fino]],", "[[am|soy/estoy]]", "[[I|Yo]]"],
      "explanation": "[[A|Una]] [[standard|estándar]] [[reply|respuesta]] [[to|a]] '[[How|Cómo]] [[are|estás]] [[you?|tú?]]'."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[We|Nosotros]] [[are|estamos]] [[ready|listos]].",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Choose|Elige]] [[the|la]] [[form|forma]] [[for|para]] '[[we|nosotros]]'.",
      "options": ["[[am|estoy]]", "[[is|está]]", "[[are|estamos]]"],
      "correctAnswer": 2,
      "explanation": "[[With|Con]] '[[we|nosotros]]', [[always|siempre]] [[use|usa]] '[[are|estamos]]'."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e34",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "difficulty": "easy",
    "transcript": "[[Nice|Encantado]] [[to|de]] [[see|verte]] [[you|tú]].",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Build|Construye]] [[the|la]] [[phrase|frase]] [[for|para]] [[seeing|ver]] [[someone|a alguien]] [[again|otra vez]].",
      "correctSentence": "[[Nice|Agradable]] [[to|a/para]] [[see|ver]] [[you|tú/usted]].",
      "words": ["[[you|tú/usted]].", "[[see|ver]]", "[[to|a/para]]", "[[Nice|Agradable]]"],
      "explanation": "'[[Nice|Encantado]] [[to|de]] [[see|verte]] [[you|tú]]' [[is|es]] [[for|para]] [[friends|amigos]] [[you|que tú]] [[already|ya]] [[know|conoces]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[What|Cuál]] [[is|es]] [[his|su]] [[name|nombre]]?",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Ask|Pregunta]] [[about|sobre]] [[a|un]] [[man's|de hombre]] [[name|nombre]].",
      "options": ["[[his|su (de él)]]", "[[her|su (de ella)]]", "[[your|tu]]"],
      "correctAnswer": 0,
      "explanation": "[[Use|Usa]] '[[his|su]]' [[for|para]] [[males|hombres]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e36",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[Are|¿Eres]] [[you|tú]] [[a|un]] [[nurse|enfermero]]?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[question|pregunta]].",
      "options": ["[[Is|Es/está]]", "[[Are|Eres/estás]]", "[[Am|Soy/estoy]]"],
      "correctAnswer": 1,
      "explanation": "[[Are|Eres]] [[you|tú]]...?"
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessives",
    "difficulty": "easy",
    "transcript": "[[What|Cuál]] [[is|es]] [[my|mi]] [[surname|apellido]]?",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
      "options": ["[[my|mi]]", "[[I|yo]]", "[[you|tú/usted]]"],
      "correctAnswer": 0,
      "explanation": "[[My|Mi]] [[surname|apellido]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e38",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Introductions",
    "difficulty": "easy",
    "transcript": "[[Hello|Hola]], [[I|yo]] [[am|soy]] [[Maria|Maria]].",
    "content": {
      "title": "[[Introductions|Presentaciones]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[Hello|Hola]], [[I|Yo]] [[am|soy/estoy]] [[Maria|Maria]].",
      "words": ["[[Maria|Maria]].", "[[am|soy/estoy]]", "[[I|Yo]]", "[[Hello|Hola]],"],
      "explanation": "[[Hello|Hola]], [[I|Yo]] [[am|soy]] [[Maria|Maria]]."
    },
    "topicName": "Vocabulary"
  },
  // --- READING 3: TOM (39) ---
  {
    "id": "a1-u1-e39",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[Tom|Tom]]. [[You|Tú]] [[are|eres]] [[my|mi]] [[teacher|profesor]]. [[My|Mi]] [[surname|apellido]] [[is|es]] [[Clark|Clark]]. [[I|Yo]] [[am|soy]] [[a|un]] [[new|nuevo]] [[student|estudiante]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[A|Un]] [[New|Nuevo]] [[Student|Estudiante]]",
      "instructions": "[[Read|Lee]] [[el|the]] [[texto|text]] [[y|and]] [[contesta|answer]] [[las|the]] [[preguntas|questions]].",
      "text": "Hi! I am Tom. You are my teacher. My surname is Clark. I am a new student.",
      "questions": [
        {
          "question": "[[Who|Quién]] [[is|es]] [[Tom|Tom]]?",
          "options": ["[[Teacher|Profesor/a]]", "[[Student|Estudiante]]", "[[Doctor|Médico/a]]"],
          "correctAnswer": 1,
          "explanation": "[[Tom|Tom]] [[says|dice]] [[he|él]] [[is|es]] [[a|un]] [[new|nuevo]] [[student|estudiante]]."
        },
        {
          "question": "[[What|Qué]] [[is|es/está]] [[his|su]] [[surname|apellido]]?",
          "options": ["[[Clark|Clark]]", "[[Tom|Tom]]", "[[Smith|Smith]]"],
          "correctAnswer": 0,
          "explanation": "[[His|Su]] [[surname|apellido]] [[is|es]] [[Clark|Clark]]."
        },
        {
          "question": "[[Who|Quién]] [[is|es]] [[the|el]] [[teacher|profesor]]?",
          "options": ["[[Tom|Tom]]", "[[Clark|Clark]]", "[[You|Tú/Usted]]"],
          "correctAnswer": 2,
          "explanation": "[[Tom|Tom]] [[says|dice]]: \"[[You|Tú]] [[are|eres]] [[my|mi]] [[teacher|profesor/a]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  // --- NEW EXERCISES (40-42) to replace merged Tom questions ---
  {
    "id": "a1-u1-e40",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[surname|apellido]].",
    "content": {
      "title": "[[Vocabulary|Vocabulario]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[translation|traducción]] [[for|para]] '[[surname|apellido]]'.",
      "options": ["[[Name|Nombre]]", "[[Surname|Apellido]]", "[[Title|Título]]"],
      "correctAnswer": 1,
      "explanation": "[[Surname|Apellido]] [[is|es]] [[your|tu]] [[last|último]] [[name|nombre]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[She|Ella]] [[is|es]] [[Anna|Anna]].",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
      "options": ["[[is|es]]", "[[am|soy]]", "[[are|son]]"],
      "correctAnswer": 0,
      "explanation": "[[She|Ella]] [[takes|lleva]] '[[is|es]]'."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e42",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "transcript": "[[Good|Buenas]] [[afternoon|tardes]].",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Order|Ordena]] [[to|para]] [[say|decir]] [[good|buenas]] [[afternoon|tardes]].",
      "correctSentence": "[[Good|Buen/Buenas]] [[afternoon|tarde]].",
      "words": ["[[afternoon|tarde]].", "[[Good|Buen/Buenas]]"],
      "explanation": "[[Used|Usado]] [[after|después]] [[12:00|las 12:00]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[Is|¿Es]] [[your|tu]] [[surname|apellido]] [[Wilson|Wilson]]?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
      "options": ["[[you|tú/usted]]", "[[your|tu/su]]", "[[I|yo]]"],
      "correctAnswer": 1,
      "explanation": "[[Your|Tu]] [[surname|apellido]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e44",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[am|soy]] [[from|de]] [[Madrid|Madrid]].",
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
    "transcript": "[[Hi|Hola]], [[I|yo]] [[am|estoy]] [[fine|bien]].",
    "content": {
      "title": "[[Dialogues|Diálogos]]",
      "instructions": "[[Complete|Completa]] [[the|el]] [[dialogue|diálogo]].",
      "options": ["[[am|soy/estoy]]", "[[are|eres/estás]]", "[[is|es/está]]"],
      "correctAnswer": 0,
      "explanation": "[[I|Yo]] [[am|estoy]] [[fine|bien]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e46",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessives",
    "difficulty": "easy",
    "transcript": "[[Your|Tu]] [[student|estudiante]] [[is|es]] [[clever|listo]].",
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
    "transcript": "[[Are|¿Eres]] [[you|tú]] [[my|mi]] [[teacher|profesor]]?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[question|pregunta]].",
      "options": ["[[Is|Es/está]]", "[[Am|Soy/estoy]]", "[[Are|Eres/estás]]"],
      "correctAnswer": 2,
      "explanation": "[[Are|Eres]] [[you|tú]]...?"
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e48",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "[[Goodbye|Adiós]], [[have|que tengas]] [[a|un]] [[nice|buen]] [[day|día]].",
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
    "transcript": "[[I|Yo]] [[am|soy]] [[not|no]] [[John|John]].",
    "content": {
      "title": "[[Negatives|Negativos]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|oración]].",
      "options": ["[[am|soy/estoy]]", "[[are|eres/estás]]", "[[is|es/está]]"],
      "correctAnswer": 0,
      "explanation": "[[I|Yo]] [[am|soy]] [[not|no]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e50",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessives",
    "difficulty": "easy",
    "transcript": "[[Your|Tu]] [[name|nombre]] [[is|es]] [[Peter|Peter]].",
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
    "transcript": "[[Are|¿Eres]] [[you|tú]] [[from|de]] [[Spain|España]]?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[question|pregunta]].",
      "options": ["[[Am|Soy/estoy]]", "[[Is|Es/está]]", "[[Are|Eres/estás]]"],
      "correctAnswer": 2,
      "explanation": "[[Are|Eres]] [[you|tú]] [[from|de]]...?"
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "[[Good|Buenos]] [[morning|días]], [[class|clase]].",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[greeting|saludo]].",
      "options": ["[[Morning|Días]]", "[[Night|Noches]]", "[[Afternoon|Tardes]]"],
      "correctAnswer": 0,
      "explanation": "[[Good|Buenos]] [[morning|días]] [[is|es]] [[used|usado]] [[until|hasta]] [[noon|el mediodía]]."
    },
    "topicName": "Vocabulary"
  },
  // --- READING 4: ANNA (53) ---
  {
    "id": "a1-u1-e53",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "[[Hello|Hola]] [[class|clase]]! [[I|Yo]] [[am|soy]] [[your|vuestra]] [[teacher|profesora]]. [[My|Mi]] [[name|nombre]] [[is|es]] [[Anna|Anna]] [[Smith|Smith]]. [[You|Vosotros]] [[are|sois]] [[my|mis]] [[students|estudiantes]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|La]] [[Teacher|Profesora]]",
      "instructions": "[[Read|Lee]] [[el|the]] [[texto|text]] [[y|and]] [[responde|answer]] [[las|the]] [[preguntas|questions]].",
      "text": "Hello class! I am your teacher. My name is Anna Smith. You are my students.",
      "questions": [
        {
          "question": "[[Who|Quién]] [[is|es]] [[Anna|Anna]] [[Smith|Smith]]?",
          "options": ["[[Student|Estudiante]]", "[[Teacher|Profesora]]", "[[Doctor|Médico/a]]"],
          "correctAnswer": 1,
          "explanation": "[[Anna|Anna]] [[says|dice]]: \"[[I|Yo]] [[am|soy]] [[your|vuestra]] [[teacher|profesora]]\"."
        },
        {
          "question": "[[What|Qué]] [[is|es/está]] [[her|su]] [[name|nombre]]?",
          "options": ["[[Anna|Anna]]", "[[Smith|Smith]]", "[[Miller|Miller]]"],
          "correctAnswer": 0,
          "explanation": "[[Her|Su]] [[name|nombre]] [[is|es]] [[Anna|Anna]]."
        },
        {
          "question": "[[Who|Quiénes]] [[are|son]] [[the|los]] [[students|estudiantes]]?",
          "options": ["[[Anna|Anna]]", "[[Smith|Smith]]", "[[You|Vosotros/Ustedes]]"],
          "correctAnswer": 2,
          "explanation": "[[Anna|Anna]] [[says|dice]]: \"[[You|Ustedes]] [[are|son]] [[my|mis]] [[students|estudiantes]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  // --- NEW EXERCISES (54-56) to replace merged Anna questions ---
  {
    "id": "a1-u1-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[What|Cuál]] [[is|es]] [[her|su]] [[name|nombre]]?",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Ask|Pregunta]] [[about|sobre]] [[a|una]] [[woman's|de mujer]] [[name|nombre]].",
      "options": ["[[his|su (de él)]]", "[[her|su (de ella)]]", "[[your|tu]]"],
      "correctAnswer": 1,
      "explanation": "[[Use|Usa]] '[[her|su]]' [[for|para]] [[females|mujeres]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "[[Bye|Adiós]].",
    "content": {
      "title": "[[Farewells|Despedidas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[meaning|significado]] [[of|de]] '[[bye|adiós]]'.",
      "options": ["[[Hello|Hola]]", "[[Goodbye|Adiós]]", "[[Morning|Días]]"],
      "correctAnswer": 1,
      "explanation": "[[Bye|Adiós]] [[is|es]] [[short|corto]] [[for|para]] [[Goodbye|Adiós]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e56",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[She|Ella]] [[is|es]] [[my|mi]] [[teacher|profesora]].",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[She|Ella]] [[is|es/está]] [[my|mi]] [[teacher|profesor/a]].",
      "words": ["[[teacher|profesor/a]].", "[[my|mi]]", "[[is|es/está]]", "[[She|Ella]]"],
      "explanation": "[[She|Ella]] [[takes|lleva]] '[[is|es]]'."
    },
    "topicName": "Grammar"
  },
  // --- READING 5: MR. WHITE (57) ---
  {
    "id": "a1-u1-e57",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "[[Good morning|Buenos días]]. [[I|Yo]] [[am|soy]] [[Mr.|Sr.]] [[White|White]]. [[My|Mi]] [[name|nombre]] [[is|es]] [[Peter|Peter]]. [[You|Tú]] [[are|eres]] [[my|mi]] [[new|nuevo]] [[student|estudiante]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[Formal|Formal]] [[Introduction|Presentación]]",
      "instructions": "[[Read|Lee]] [[y|and]] [[contesta|answer]].",
      "text": "Good morning. I am Mr. White. My name is Peter. You are my new student.",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es/está]] [[his|su]] [[last name|apellido]]?",
          "options": ["[[Peter|Peter]]", "[[White|White]]", "[[Student|Estudiante]]"],
          "correctAnswer": 1,
          "explanation": "[[His|Su]] [[last name|apellido]] [[is|es]] [[White|White]] ([[Mr.|Sr.]] [[White|White]])."
        },
        {
          "question": "[[What|Qué]] [[is|es/está]] [[his|su]] [[first name|nombre de pila]]?",
          "options": ["[[Peter|Peter]]", "[[White|White]]", "[[New|Nuevo]]"],
          "correctAnswer": 0,
          "explanation": "[[His|Su]] [[first name|nombre de pila]] [[is|es]] [[Peter|Peter]]."
        },
        {
          "question": "[[Who|Quién]] [[is|es]] [[the|el]] [[teacher|profesor]]?",
          "options": ["[[Peter|Peter]]", "[[Mr. White|Sr. White]]", "[[The student|El estudiante]]"],
          "correctAnswer": 1,
          "explanation": "[[Mr.|Sr.]] [[White|White]] [[is|es]] [[the|el]] [[speaker|hablante]] [[who|que]] [[is|es]] [[the|el]] [[teacher|profesor]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  // --- NEW EXERCISES (58-60) to replace merged Mr. White questions ---
  {
    "id": "a1-u1-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "easy",
    "transcript": "[[Nice|Encantado]] [[to|de]] [[meet|conocerte]].",
    "content": {
      "title": "[[Introductions|Presentaciones]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[meaning|significado]] [[of|de]] '[[meet|conocer]]'.",
      "options": ["[[Greeting|Saludar]]", "[[Knowing|Conocer]] [[for|por]] [[the|la]] [[first|primera]] [[time|vez]]", "[[Saying|Decir]] [[goodbye|adiós]]"],
      "correctAnswer": 1,
      "explanation": "[[Meet|Conocer]] [[means|significa]] [[getting|obtener]] [[to|a]] [[know|conocer]] [[someone|a alguien]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "[[We|Nosotros]] [[are|estamos]] [[here|aquí]].",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Choose|Elige]] [[the|la]] [[form|forma]] [[for|para]] '[[we|nosotros]]'.",
      "options": ["[[am|estoy]]", "[[is|está]]", "[[are|estamos]]"],
      "correctAnswer": 2,
      "explanation": "[[We|Nosotros]] [[are|estamos]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e60",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "easy",
    "transcript": "[[Good|Buen]] [[morning|día]], [[Sarah|Sarah]].",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[Good|Buen/Buenos]] [[morning|mañana]], [[Sarah|Sarah]].",
      "words": ["[[Sarah|Sarah]].", "[[morning|mañana]],", "[[Good|Buen/Buenos]]"],
      "explanation": "[[Greeting|Saludo]] [[for|para]] [[the|el]] [[morning|mañana]]."
    },
    "topicName": "Vocabulary"
  }
];
