import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = [
  {
    "id": "a1-u1-e1",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "medium",
    "transcript": "[[Hello|Hola]], [[how|cómo]] [[is|está]] [[it|ello]] [[going|yendo]]?",
    "content": {
      "title": "[[Appropriate|Apropiado]] [[Greetings|Saludos]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[most|más]] [[natural|natural]] [[way|forma]] [[to|de]] [[respond|responder]] [[to|a]] [[a|un]] [[friend|amigo]].",
      "questions": [
        {
          "question": "[[Your|Tu]] [[friend|amigo]] [[says|dice]]: '[[How|Cómo]] [[is|está]] [[it|ello]] [[going|yendo]]?'. [[How|Cómo]] [[do|haces]] [[you|tú]] [[respond|responder]]?",
          "options": [
            "[[It|Ello]] [[is|está]] [[going|yendo]] [[well|bien]], [[thanks|gracias]]!",
            "[[My|Mi]] [[name|nombre]] [[is|es]] [[John|Juan]].",
            "[[Good morning|Buenos días]], [[teacher|profesor]]."
          ],
          "correctAnswer": 0,
          "explanation": "'[[How|Cómo]] [[is|está]] [[it|ello]] [[going|yendo]]?' [[is|es]] [[an|un]] [[informal|informal]] [[greeting|saludo]]. [[The|La]] [[response|respuesta]] [[should|debería]] [[match|coincidir]] [[the|el]] [[tone|tono]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[She|Ella]] [[is|es]] [[the|la]] [[new|nueva]] [[teacher|profesora]] [[from|de]] [[London|Londres]].",
    "content": {
      "title": "[[Subject-Verb|Sujeto-Verbo]] [[Agreement|Concordancia]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[correct|correcta]] [[form|forma]] [[of|de]] [[the|el]] [[verb|verbo]] [[to|a]] [[be|ser/estar]] [[for|para]] [[the|la]] [[third|tercera]] [[person|persona]].",
      "questions": [
        {
          "question": "[[Miss|La Srta.]] [[Taylor|Taylor]] (_____) [[our|nuestra]] [[new|nueva]] [[teacher|profesora]].",
          "options": ["[[am|soy/estoy]]", "[[is|es/está]]", "[[are|eres/estás]]"],
          "correctAnswer": 1,
          "explanation": "[[Use|Usa]] '[[is|es/está]]' [[for|para]] [[singular|singulares]] [[like|como]] '[[she|ella]]', '[[he|él]]', [[or|o]] [[proper|propios]] [[names|nombres]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e3",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[What|Cuál]] [[is|es]] [[your|tu]] [[full|completo]] [[name|nombre]]?",
    "content": {
      "title": "[[Asking|Preguntando]] [[Formal|Formal]] [[Questions|Preguntas]]",
      "instructions": "[[Build|Construye]] [[the|la]] [[question|pregunta]] [[to|para]] [[ask|preguntar]] [[for|por]] [[someone's|de alguien]] [[name|nombre]].",
      "correctSentence": "[[What|Cuál]] [[is|es]] [[your|tu]] [[full|completo]] [[name|nombre]]?",
      "words": ["[[is|es]]", "[[full|completo]]", "[[What|Cuál]]", "[[your|tu]]", "[[name|nombre]]?"]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "hard",
    "transcript": "[[It|Eso]] [[is|es]] [[an|una]] [[interesting|interesante]] [[introduction|presentación]].",
    "content": {
      "title": "[[Complex|Complejos]] [[Articles|Artículos]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[article|artículo]] [[based|basado]] [[on|en]] [[the|el]] [[adjective|adjetivo]].",
      "questions": [
        {
          "question": "[[That|Eso]] [[is|es]] (_____) [[excellent|excelente]] [[surname|apellido]].",
          "options": ["[[a|un/una]]", "[[an|un/una]]", "[[the|el/la]]"],
          "correctAnswer": 1,
          "explanation": "[[Since|Ya que]] '[[excellent|excelente]]' [[starts|empieza]] [[with|con]] [[a|un]] [[vowel|vocal]] [[sound|sonido]], [[we|nosotros]] [[use|usamos]] '[[an|un/una]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e5",
    "type": "matching",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[Match|Empareja]] [[the|las]] [[questions|preguntas]] [[with|con]] [[the|las]] [[answers|respuestas]].",
    "content": {
      "title": "[[Contextual|Contextual]] [[Conversation|Conversación]]",
      "instructions": "[[Match|Empareja]] [[each|cada]] [[question|pregunta]] [[with|con]] [[the|la]] [[most|más]] [[logical|lógica]] [[response|respuesta]].",
      "pairs": [
        { "left": "[[How|Cómo]] [[do|haces]] [[you|tú]] [[spell|deletrear]] [[it|ello]]?", "right": "[[S-M-I-T-H|S-M-I-T-H]]." },
        { "left": "[[Where|De dónde]] [[are|eres]] [[you|tú]] [[from|de]]?", "right": "[[I|Yo]] [[am|soy]] [[from|de]] [[Rome|Roma]]." },
        { "left": "[[What|Qué]] [[is|es]] [[your|tu]] [[job|trabajo]]?", "right": "[[I|Yo]] [[am|soy]] [[a|un]] [[manager|gerente]]." },
        { "left": "[[Are|¿Eres]] [[you|tú]] [[ready|listo]]?", "right": "[[Yes|Sí]], [[I|yo]] [[am|estoy]]." }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Are|¿Son]] [[you|tú]] [[and|y]] [[John|Juan]] [[students|estudiantes]]?",
    "content": {
      "title": "[[Plural|Plural]] [[Subjects|Sujetos]]",
      "instructions": "[[Identify|Identifica]] [[the|el]] [[correct|correcto]] [[verb|verbo]] [[for|para]] [[combined|combinados]] [[subjects|sujetos]].",
      "questions": [
        {
          "question": "[[You|Tú]] [[and|y]] [[Mary|María]] (_____) [[very|muy]] [[nice|amables]].",
          "options": ["[[is|es/está]]", "[[am|soy/estoy]]", "[[are|son/están]]"],
          "correctAnswer": 2,
          "explanation": "'[[You|Tú]] [[and|y]] [[Mary|María]]' [[is|es]] [[equivalent|equivalente]] [[to|a]] '[[you|ustedes]]' ([[plural|plural]]), [[so|así que]] [[we|nosotros]] [[use|usamos]] '[[are|son/están]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e7",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "hard",
    "transcript": "[[Is|¿Es]] [[this|este]] [[your|tu]] [[passport|pasaporte]] [[or|o]] [[my|mi]] [[passport|pasaporte]]?",
    "content": {
      "title": "[[Distinguishing|Distinguiendo]] [[Possessives|Posesivos]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[option|opción]] [[that|que]] [[correctly|correctamente]] [[shows|muestra]] [[possession|posesión]].",
      "questions": [
        {
          "question": "[[This|Este]] [[is|es]] [[my|mi]] [[friend|amigo]]. (_____) [[name|nombre]] [[is|es]] [[Paul|Pablo]].",
          "options": ["[[He|Él]]", "[[His|Su (de él)]]", "[[Your|Tu]]"],
          "correctAnswer": 1,
          "explanation": "[[His|Su]] [[is|es]] [[the|el]] [[possessive|posesivo]] [[for|para]] [[a|un]] [[male|masculino]] [[person|persona]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e8",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[He|Él]] [[is|tiene]] [[thirteen|trece]] [[years|años]] [[old|de edad]].",
    "content": {
      "title": "[[Age|Edad]] [[Structure|Estructura]]",
      "instructions": "[[Identify|Identifica]] [[the|el]] [[error|error]] [[common|común]] [[in|en]] [[talking|hablar]] [[about|sobre]] [[age|edad]].",
      "questions": [
        {
          "question": "[[Which|Cuál]] [[sentence|oración]] [[is|es]] [[correct|correcta]]?",
          "options": [
            "[[I|Yo]] [[have|tengo]] 15 [[years|años]].",
            "[[I|Yo]] [[am|soy/tengo]] 15 [[years|años]] [[old|de edad]].",
            "[[My|Mi]] [[age|edad]] [[is|es]] 15 [[years|años]] [[old|de edad]]."
          ],
          "correctAnswer": 1,
          "explanation": "[[Always|Siempre]] [[use|usa]] '[[be|ser/estar]]' + [[number|número]] + '[[years|años]] [[old|de edad]]'."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e9",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[They|Ellos]] [[are|son]] [[not|no]] [[American|Americanos]], [[they|ellos]] [[are|son]] [[English|Ingleses]].",
    "content": {
      "title": "[[Complex|Compleja]] [[Negative|Negativa]] [[Structure|Estructura]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]] [[for|para]] [[a|una]] [[negative|negativa]] [[sentence|oración]].",
      "correctSentence": "[[They|Ellos]] [[are|son]] [[not|no]] [[American|Americanos]].",
      "words": ["[[American|Americanos]].", "[[are|son]]", "[[not|no]]", "[[They|Ellos]]"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "hard",
    "transcript": "[[It|Es]] [[is|un]] [[pleasure|placer]] [[to|de]] [[meet|conocerte]] [[you|a ti]].",
    "content": {
      "title": "[[Formal|Formal]] [[Introductions|Presentaciones]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[most|más]] [[formal|formal]] [[way|forma]] [[to|de]] [[greet|saludar]] [[someone|a alguien]].",
      "questions": [
        {
          "question": "[[Which|Cuál]] [[is|es]] [[the|la]] [[most|más]] [[formal|formal]]?",
          "options": [
            "[[How|Cómo]] [[is|está]] [[it|ello]] [[going|yendo]]?",
            "[[Hi|Hola]] [[there|ahí]]!",
            "[[It|Es]] [[is|un]] [[pleasure|placer]] [[to|de]] [[meet|conocerte]] [[you|a ti]]."
          ],
          "correctAnswer": 2,
          "explanation": "'[[It|Es]] [[is|un]] [[pleasure|placer]] [[to|de]] [[meet|conocerte]] [[you|a ti]]' [[is|es]] [[high|altamente]] [[formal|formal]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e11",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "hard",
    "transcript": "[[Who|Quién]] [[is|es]] [[the|el]] [[man|hombre]] [[over|allí]] [[there|mismo]]?",
    "content": {
      "title": "[[Question|Pregunta]] [[Word|Palabra]] [[Logic|Lógica]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[question|pregunta]] [[word|palabra]] [[based|basada]] [[on|en]] [[the|el]] [[context|contexto]].",
      "questions": [
        {
          "question": "(_____) [[is|es]] [[that|ese]] [[woman|mujer]]? [[She|Ella]] [[is|es]] [[my|mi]] [[manager|gerente]].",
          "options": ["[[What|Qué]]", "[[Who|Quién]]", "[[Where|Dónde]]"],
          "correctAnswer": 1,
          "explanation": "[[We|Nosotros]] [[use|usamos]] '[[Who|Quién]]' [[because|porque]] [[the|la]] [[answer|respuesta]] [[refers|se refiere]] [[to|a]] [[a|una]] [[person|persona]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e12",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "hard",
    "transcript": "[[Seventeen|Diecisiete]] [[is|es]] [[my|mi]] [[favorite|favorito]] [[number|número]].",
    "content": {
      "title": "[[Number|Número]] [[Spelling|Escritura]]",
      "instructions": "[[Build|Construye]] [[the|la]] [[sentence|oración]] [[with|con]] [[the|el]] [[correct|correcto]] [[number|número]].",
      "correctSentence": "[[Seventeen|Diecisiete]] [[is|es]] [[my|mi]] [[favorite|favorito]] [[number|número]].",
      "words": ["[[is|es]]", "[[Seventeen|Diecisiete]]", "[[number|número]].", "[[favorite|favorito]]", "[[my|mi]]"]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e13",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Alphabet",
    "difficulty": "hard",
    "transcript": "[[Can|¿Puedes]] [[you|tú]] [[repeat|repetir]] [[the|las]] [[last|últimas]] [[three|tres]] [[letters|letras]]?",
    "content": {
      "title": "[[Alphabetical|Alfabético]] [[Order|Orden]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[correct|correcta]] [[sequence|secuencia]].",
      "questions": [
        {
          "question": "[[Which|Cuál]] [[sequence|secuencia]] [[is|es]] [[correct|correcta]]?",
          "options": ["[[X, Y, Z|X, Y, Z]]", "[[L, M, P|L, M, P]]", "[[Q, S, R|Q, S, R]]"],
          "correctAnswer": 0,
          "explanation": "X, Y, Z [[are|son]] [[the|las]] [[final|finales]] [[letters|letras]] [[of|de]] [[the|el]] [[alphabet|alfabeto]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[What|Cuál]] [[is|es]] [[his|su (de él)]] [[email|correo]] [[address|dirección]]?",
    "content": {
      "title": "[[Third-Person|Tercera persona]] [[Possession|Posesión]]",
      "instructions": "[[Select|Selecciona]] [[the|la]] [[word|palabra]] [[correcta|correct]] [[to|para]] [[ask|preguntar]] [[about|sobre]] [[a|un]] [[man|hombre]].",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] (_____) [[phone|teléfono]] [[number|número]]? [[He|Él]] [[is|es]] [[my|mi]] [[doctor|doctor]].",
          "options": ["[[her|su (de ella)]]", "[[his|su (de él)]]", "[[their|su (de ellos)]]"],
          "correctAnswer": 1,
          "explanation": "[[Use|Usa]] '[[his|su]]' [[when|cuando]] [[the|el]] [[possessor|poseedor]] [[is|es]] [[male|masculino]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e15",
    "type": "matching",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "hard",
    "transcript": "[[Match|Empareja]] [[the|los]] [[complex|complejos]] [[numbers|números]].",
    "content": {
      "title": "[[Advanced|Avanzados]] [[Numbers|Números]]",
      "instructions": "[[Match|Empareja]] [[the|el]] [[number|número]] [[with|con]] [[its|su]] [[spelling|escritura]].",
      "pairs": [
        { "left": "[[Fifteen|Quince]]", "right": "15" },
        { "left": "[[Fifty|Cincuenta]]", "right": "50" },
        { "left": "[[Thirteen|Trece]]", "right": "13" },
        { "left": "[[Thirty|Treinta]]", "right": "30" }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Am|¿Soy]] [[I|yo]] [[in|en]] [[the|la]] [[correct|correcta]] [[room|sala]]?",
    "content": {
      "title": "[[Self-Questioning|Auto-Pregunta]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[correct|correcta]] [[question|pregunta]] [[form|forma]] [[for|para]] '[[I|Yo]]'.",
      "questions": [
        {
          "question": "(_____) [[I|yo]] [[late|tarde]] [[for|para]] [[the|la]] [[meeting|reunión]]?",
          "options": ["[[Are|Soy]]", "[[Is|Es]]", "[[Am|Soy]]"],
          "correctAnswer": 2,
          "explanation": "[[Questions|Preguntas]] [[with|con]] '[[I|Yo]]' [[must|deben]] [[start|empezar]] [[with|con]] '[[Am|Soy/Estoy]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e17",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "hard",
    "transcript": "[[It|Es]] [[is|un]] [[very|muy]] [[nice|agradable]] [[morning|mañana]], [[isn't|¿no]] [[it|es]]?",
    "content": {
      "title": "[[Complex|Complejos]] [[Greetings|Saludos]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]] [[for|para]] [[this|este]] [[extended|extendido]] [[greeting|saludo]].",
      "correctSentence": "[[Good|Buenos]] [[morning|días]], [[how|cómo]] [[are|estás]] [[you|tú]]?",
      "words": ["[[you|tú]]?", "[[morning|días]],", "[[are|estás]]", "[[how|cómo]]", "[[Good|Buenos]]"]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[Her|Su (de ella)]] [[surname|apellido]] [[is|es]] [[difficult|difícil]] [[to|de]] [[pronounce|pronunciar]].",
    "content": {
      "title": "[[Possessives|Posesivos]] [[in|en]] [[Action|Acción]]",
      "instructions": "[[Select|Selecciona]] [[the|el]] [[possessive|posesivo]] [[for|para]] [[a|una]] [[female|femenina]] [[manager|gerente]].",
      "questions": [
        {
          "question": "[[That|Esa]] [[is|es]] [[Mrs.|la Sra.]] [[Jones|Jones]]. (_____) [[office|oficina]] [[is|es]] [[here|aquí]].",
          "options": ["[[His|Su (de él)]]", "[[Her|Su (de ella)]]", "[[Their|Su (de ellos)]]"],
          "correctAnswer": 1,
          "explanation": "[[Use|Usa]] '[[Her|Su]]' [[for|para]] [[singular|singular]] [[female|femenino]] [[possession|posesión]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e19",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[We|Nosotros]] [[are|estamos]] [[happy|felices]] [[to|de]] [[be|estar]] [[here|aquí]].",
    "content": {
      "title": "[[State|Estado]] [[and|y]] [[Emotion|Emoción]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|oración]] [[about|sobre]] [[a|un]] [[group|grupo]].",
      "questions": [
        {
          "question": "[[John|Juan]] [[and|y]] [[I|yo]] (_____) [[from|de]] [[the|el]] [[same|mismo]] [[city|ciudad]].",
          "options": ["[[is|es]]", "[[am|soy]]", "[[are|somos]]"],
          "correctAnswer": 2,
          "explanation": "'[[John|Juan]] [[and|y]] [[I|yo]]' [[equals|equivale]] [[to|a]] '[[we|nosotros]]', [[so|así que]] [[we|nosotros]] [[use|usamos]] '[[are|somos/estamos]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[What|Cuál]] [[is|es]] [[their|su (de ellos)]] [[nationality|nacionalidad]]?",
    "content": {
      "title": "[[Group|Grupo]] [[Possession|Posesión]]",
      "instructions": "[[Identify|Identifica]] [[the|el]] [[possessive|posesivo]] [[for|para]] [[a|un]] [[group|grupo]].",
      "questions": [
        {
          "question": "[[Those|Esos]] [[are|son]] [[the|los]] [[students|estudiantes]]. (_____) [[teacher|profesor]] [[is|es]] [[Mr.|el Sr.]] [[Wilson|Wilson]].",
          "options": ["[[His|Su]]", "[[Her|Su]]", "[[Their|Su (de ellos)]]"],
          "correctAnswer": 2,
          "explanation": "[[Use|Usa]] '[[Their|Su]]' [[when|cuando]] [[the|el]] [[possessor|poseedor]] [[is|es]] [[plural|plural]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Are|¿Están]] [[you|tú]] [[ready|listo]] [[for|para]] [[the|la]] [[exam|examen]]?",
    "content": {
      "title": "[[Question|Pregunta]] [[and|y]] [[Negation|Negación]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[negative|negativa]] [[short|corta]] [[answer|respuesta]].",
      "questions": [
        {
          "question": "[[Are|¿Eres]] [[you|tú]] [[from|de]] [[France|Francia]]?",
          "options": [
            "[[No|No]], [[I|yo]] [[not|no]] [[am|soy]].",
            "[[No|No]], [[I|yo]] [[am|soy]] [[not|no]].",
            "[[No|No]], [[I|yo]] [[am|soy]] [[no|no]]."
          ],
          "correctAnswer": 1,
          "explanation": "[[The|La]] [[short|corta]] [[negative|negativa]] [[is|es]] '[[No|No]], [[I|yo]] [[am|soy]] [[not|no]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e22",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Is|¿Es]] [[she|ella]] [[a|una]] [[doctor|doctora]] [[or|o]] [[a|una]] [[nurse|enfermera]]?",
    "content": {
      "title": "[[Distinguishing|Distinguiendo]] [[Professions|Profesiones]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[article|artículo]] [[in|en]] [[a|una]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Is|¿Es]] [[he|él]] (_____) [[engineer|ingeniero]]?",
          "options": ["[[a|un]]", "[[an|un]]", "[[the|el]]"],
          "correctAnswer": 1,
          "explanation": "'[[Engineer|Ingeniero]]' [[starts|empieza]] [[with|con]] [[a|un]] [[vowel|vocal]], [[so|así que]] [[we|nosotros]] [[need|necesitamos]] '[[an|un]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[How|Cómo]] [[do|haces]] [[you|tú]] [[pronounce|pronunciar]] [[your|tu]] [[last|último]] [[name|nombre]]?",
    "content": {
      "title": "[[Advanced|Avanzada]] [[Personal|Personal]] [[Information|Información]]",
      "instructions": "[[Select|Selecciona]] [[the|la]] [[correct|correcta]] [[word|palabra]] [[for|para]] '[[apellido|surname]]'.",
      "questions": [
        {
          "question": "[[In|En]] [[the|el]] [[USA|EE.UU.]], '[[surname|apellido]]' [[is|es]] [[often|a menudo]] [[called|llamado]] (_____).",
          "options": ["[[First|Primer]] [[name|nombre]]", "[[Last|Último]] [[name|nombre]]", "[[Middle|Medio]] [[name|nombre]]"],
          "correctAnswer": 1,
          "explanation": "'[[Last|Último]] [[name|nombre]]' [[and|y]] '[[surname|apellido]]' [[mean|significan]] [[the|lo]] [[same|mismo]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e24",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[Can|¿Puedes]] [[you|tú]] [[give|dar]] [[me|me]] [[your|tu]] [[contact|contacto]] [[details|detalles]]?",
    "content": {
      "title": "[[Requesting|Solicitando]] [[Info|Información]]",
      "instructions": "[[Build|Construye]] [[the|la]] [[question|pregunta]] [[to|para]] [[ask|preguntar]] [[for|por]] [[an|un]] [[email|correo]].",
      "correctSentence": "[[What|Cuál]] [[is|es]] [[your|tu]] [[email|correo]] [[address|dirección]]?",
      "words": ["[[is|es]]", "[[your|tu]]", "[[What|Cuál]]", "[[address|dirección]]", "[[email|correo]]?"]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e25",
    "type": "matching",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[Match|Empareja]] [[the|los]] [[titles|títulos]] [[correctly|correctamente]].",
    "content": {
      "title": "[[Formal|Formal]] [[Titles|Títulos]]",
      "instructions": "[[Match|Empareja]] [[each|cada]] [[title|título]] [[with|con]] [[the|la]] [[correct|correcta]] [[use|uso]].",
      "pairs": [
        { "left": "[[Ms.|Ms.]]", "right": "[[Woman|Mujer]] ([[neutral|neutral]])" },
        { "left": "[[Mrs.|Mrs.]]", "right": "[[Married|Casada]] [[woman|mujer]]" },
        { "left": "[[Mr.|Mr.]]", "right": "[[Any|Cualquier]] [[man|hombre]]" },
        { "left": "[[Miss|Miss]]", "right": "[[Unmarried|No casada]] [[woman|mujer]]" }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Alphabet",
    "difficulty": "hard",
    "transcript": "[[The|La]] [[first|primera]] [[letter|letra]] [[of|de]] [[the|el]] [[alphabet|alfabeto]] [[is|es]] [[A|A]].",
    "content": {
      "title": "[[Vowels|Vocales]] [[and|y]] [[Consonants|Consonantes]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[vowel|vocal]].",
      "questions": [
        {
          "question": "[[Which|Cuál]] [[of|de]] [[these|estos]] [[is|es]] [[a|una]] [[vowel|vocal]]?",
          "options": ["[[B|B]]", "[[E|E]]", "[[F|F]]"],
          "correctAnswer": 1,
          "explanation": "[[The|Las]] [[vowels|vocales]] [[are|son]] A, E, I, O, U."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Alphabet",
    "difficulty": "hard",
    "transcript": "[[Is|¿Es]] '[[Y|Y]]' [[a|una]] [[vowel|vocal]] [[or|o]] [[a|una]] [[consonant|consonante]]?",
    "content": {
      "title": "[[Consonants|Consonantes]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[consonant|consonante]].",
      "questions": [
        {
          "question": "[[Which|Cuál]] [[of|de]] [[these|estos]] [[is|es]] [[a|una]] [[consonant|consonante]]?",
          "options": ["[[A|A]]", "[[I|I]]", "[[G|G]]"],
          "correctAnswer": 2,
          "explanation": "[[G|G]] [[is|es]] [[a|una]] [[consonant|consonante]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e28",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "hard",
    "transcript": "[[Eighteen|Dieciocho]], [[nineteen|diecinueve]], [[twenty|veinte]].",
    "content": {
      "title": "[[Numbers|Números]] [[Sequence|Secuencia]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sequence|secuencia]].",
      "questions": [
        {
          "question": "18, 19, (_____).",
          "options": ["[[Twenty|Veinte]]", "[[Twelve|Doce]]", "[[Two|Dos]]"],
          "correctAnswer": 0,
          "explanation": "[[Twenty|Veinte]] [[comes|viene]] [[after|después]] [[of|de]] [[nineteen|diecinueve]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "hard",
    "transcript": "[[Twenty-five|Veinticinco]], [[thirty|treinta]].",
    "content": {
      "title": "[[Counting|Contando]] [[by|de]] [[Fives|cinco en cinco]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[next|siguiente]] [[number|número]].",
      "questions": [
        {
          "question": "5, 10, 15, 20, (_____).",
          "options": ["[[Twenty-one|Veintiuno]]", "[[Twenty-five|Veinticinco]]", "[[Fifty|Cincuenta]]"],
          "correctAnswer": 1,
          "explanation": "[[Twenty-five|Veinticinco]] [[is|es]] 20 + 5."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e30",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[Are|¿Eres]] [[you|tú]] [[Spanish|Español]] [[or|o]] [[Italian|Italiano]]?",
    "content": {
      "title": "[[Nationalities|Nacionalidades]] [[and|y]] [[Origin|Origen]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[logic|lógica]].",
      "questions": [
        {
          "question": "[[He|Él]] [[is|es]] [[from|de]] [[Japan|Japón]]. [[He|Él]] [[is|es]] (_____).",
          "options": ["[[Japanese|Japonés]]", "[[Japan|Japón]]", "[[China|China]]"],
          "correctAnswer": 0,
          "explanation": "'[[Japanese|Japonés]]' [[is|es]] [[the|la]] [[nationality|nacionalidad]] [[for|para]] [[Japan|Japón]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Are|¿Son]] [[you|tú]] [[and|y]] [[your|tu]] [[family|familia]] [[well|bien]]?",
    "content": {
      "title": "[[Subject-Verb|Sujeto-Verbo]] [[Mix|Mezcla]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[verb|verbo]].",
      "questions": [
        {
          "question": "[[The|Los]] [[students|estudiantes]] (_____) [[in|en]] [[the|la]] [[classroom|clase]].",
          "options": ["[[is|es]]", "[[are|están]]", "[[am|estoy]]"],
          "correctAnswer": 1,
          "explanation": "'[[The|Los]] [[students|estudiantes]]' [[is|es]] [[plural|plural]], [[so|así que]] [[use|usa]] '[[are|son/están]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e32",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[Where|Dónde]] [[is|está]] [[your|tu]] [[office|oficina]] [[located|ubicada]]?",
    "content": {
      "title": "[[Location|Ubicación]] [[Questions|Preguntas]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[best|mejor]] [[response|respuesta]].",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|está]] [[your|tu]] [[office|oficina]]?",
          "options": [
            "[[It|Ella]] [[is|está]] [[in|en]] [[London|Londres]].",
            "[[I|Yo]] [[am|estoy]] [[in|en]] [[London|Londres]].",
            "[[My|Mi]] [[name|nombre]] [[is|es]] [[London|Londres]]."
          ],
          "correctAnswer": 0,
          "explanation": "[[Respond|Responde]] [[about|sobre]] [[the|la]] [[office|oficina]] [[using|usando]] '[[it|ello]]'."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e33",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Who|Quién]] [[is|es]] [[your|tu]] [[favorite|favorito]] [[actor|actor]]?",
    "content": {
      "title": "[[Complex|Compleja]] [[Question|Pregunta]] [[Structure|Estructura]]",
      "instructions": "[[Build|Construye]] [[the|la]] [[question|pregunta]].",
      "correctSentence": "[[Who|Quién]] [[is|es]] [[your|tu]] [[favorite|favorito]] [[actor|actor]]?",
      "words": ["[[is|es]]", "[[Who|Quién]]", "[[actor|actor]]?", "[[favorite|favorito]]", "[[your|tu]]"]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e34",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "hard",
    "transcript": "[[It|Es]] [[is|un]] [[great|gran]] [[day|día]], [[isn't|¿verdad]] [[it|ello]]?",
    "content": {
      "title": "[[Extended|Extendidos]] [[Greetings|Saludos]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[best|mejor]] [[response|respuesta]].",
      "questions": [
        {
          "question": "[[Good|Buenos]] [[morning|días]], [[how|cómo]] [[are|estás]] [[you|tú]] [[today|hoy]]?",
          "options": [
            "[[I|Yo]] [[am|estoy]] [[very|muy]] [[well|bien]], [[thank|gracias]] [[you|a ti]].",
            "[[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]].",
            "[[My|Mi]] [[name|nombre]] [[is|es]] [[John|Juan]]."
          ],
          "correctAnswer": 0,
          "explanation": "[[Respond|Responde]] [[directly|directamente]] [[to|a]] [[the|la]] [[question|pregunta]] '[[how|cómo]] [[are|estás]] [[you|tú]]?'."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "hard",
    "transcript": "[[Zero|Cero]], [[ten|diez]], [[twenty|veinte]], [[thirty|treinta]].",
    "content": {
      "title": "[[Tens|Decenas]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sequence|secuencia]].",
      "questions": [
        {
          "question": "10, 20, 30, (_____).",
          "options": ["[[Four|Cuatro]]", "[[Forty|Cuarenta]]", "[[Fourteen|Catorce]]"],
          "correctAnswer": 1,
          "explanation": "[[Forty|Cuarenta]] [[is|es]] 4 [[times|veces]] 10."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e36",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "hard",
    "transcript": "[[Forty|Cuarenta]], [[fifty|cincuenta]].",
    "content": {
      "title": "[[Tens|Decenas]] (II)",
      "instructions": "[[Choose|Elige]] '[[fifty|cincuenta]]'.",
      "questions": [
        {
          "question": "[[Which|Cuál]] [[is|es]] '[[50|50]]'?",
          "options": ["[[Fifteen|Quince]]", "[[Fifty|Cincuenta]]", "[[Five|Cinco]]"],
          "correctAnswer": 1,
          "explanation": "[[Fifty|Cincuenta]] [[is|es]] [[the|la]] [[number|número]] 50."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Alphabet",
    "difficulty": "hard",
    "transcript": "[[H|H]], [[I|I]], [[J|J]], [[K|K]], [[L|L]].",
    "content": {
      "title": "[[Middle|Medio]] [[Alphabet|Alfabeto]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[letter|letra]] [[that|que]] [[comes|viene]] [[after|después]] [[of|de]] '[[K|K]]'.",
      "questions": [
        {
          "question": "[[Which|Cuál]] [[letter|letra]] [[is|es]] [[after|después]] [[K|K]]?",
          "options": ["[[J|J]]", "[[L|L]]", "[[I|I]]"],
          "correctAnswer": 1,
          "explanation": "H, I, J, K, L."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e38",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Alphabet",
    "difficulty": "hard",
    "transcript": "[[M|M]], [[N|N]], [[O|O]], [[P|P]].",
    "content": {
      "title": "[[Alphabetical|Alfabética]] [[Logic|Lógica]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[letter|letra]] [[missing|faltante]].",
      "questions": [
        {
          "question": "[[M|M]], (_____), [[O|O]], [[P|P]].",
          "options": ["[[N|N]]", "[[L|L]]", "[[Q|Q]]"],
          "correctAnswer": 0,
          "explanation": "[[N|N]] [[is|es]] [[between|entre]] [[M|M]] [[and|y]] [[O|O]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "hard",
    "transcript": "[[It|Ello]] [[is|es]] [[not|no]] [[my|mi]] [[problem|problema]].",
    "content": {
      "title": "[[Possessives|Posesivos]] [[in|en]] [[Context|Contexto]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[possessive|posesivo]].",
      "questions": [
        {
          "question": "[[We|Nosotros]] [[are|estamos]] [[in|en]] (_____) [[classroom|clase]].",
          "options": ["[[our|nuestra]]", "[[their|su]]", "[[my|mi]]"],
          "correctAnswer": 0,
          "explanation": "'[[Our|Nuestra]]' [[is|es]] [[the|el]] [[possessive|posesivo]] [[for|para]] '[[we|nosotros]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e40",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[His|Su]] [[phone|teléfono]] [[number|número]] [[is|es]] [[complicated|complicado]].",
    "content": {
      "title": "[[Building|Construyendo]] [[Possessive|Posesivas]] [[Sentences|Frases]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[My|Mi]] [[phone|teléfono]] [[number|número]] [[is|es]] 555.",
      "words": ["[[is|es]]", "[[My|Mi]]", "[[number|número]]", "555.", "[[phone|teléfono]]"]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Am|¿Soy]] [[I|yo]] [[the|el]] [[only|único]] [[one|uno]] [[here|aquí]]?",
    "content": {
      "title": "[[Singular|Singular]] [[vs|vs]] [[Plural|Plural]] [[Be|Be]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|oración]].",
      "questions": [
        {
          "question": "[[Each|Cada]] [[student|estudiante]] (_____) [[important|importante]].",
          "options": ["[[is|es]]", "[[are|son]]", "[[am|soy]]"],
          "correctAnswer": 0,
          "explanation": "'[[Each|Cada]] [[student|estudiante]]' [[is|es]] [[singular|singular]], [[so|así que]] [[we|nosotros]] [[use|usamos]] '[[is|es/está]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles",
    "difficulty": "hard",
    "transcript": "[[It|Eso]] [[is|es]] [[a|un]] [[unique|único]] [[name|nombre]].",
    "content": {
      "title": "[[Advanced|Avanzados]] [[Articles|Artículos]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[exception|excepción]] [[rule|regla]].",
      "questions": [
        {
          "question": "[[That|Eso]] [[is|es]] (_____) [[university|universidad]].",
          "options": ["[[a|un]]", "[[an|un]]", "[[the|el]]"],
          "correctAnswer": 0,
          "explanation": "[[Although|Aunque]] '[[university|universidad]]' [[starts|empieza]] [[with|con]] '[[u|u]]', [[the|el]] [[sound|sonido]] [[is|es]] '[[y|y]]' ([[consonant|consonante]]), [[so|así que]] [[we|nosotros]] [[use|usamos]] '[[a|un]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Is|¿Está]] [[the|el]] [[manager|gerente]] [[in|en]] [[the|el]] [[meeting|reunión]]?",
    "content": {
      "title": "[[Workplace|Lugar de trabajo]] [[Questions|Preguntas]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[verb|verbo]].",
      "questions": [
        {
          "question": "(_____) [[the|el]] [[new|nuevo]] [[manager|gerente]] [[here|aquí]]?",
          "options": ["[[Are|Está]]", "[[Is|Está]]", "[[Am|Estoy]]"],
          "correctAnswer": 1,
          "explanation": "'[[The|El]] [[manager|gerente]]' [[is|es]] [[he|él]] [[or|o]] [[she|ella]], [[so|así que]] [[the|la]] [[question|pregunta]] [[starts|empieza]] [[with|con]] '[[Is|Está]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[I|Yo]] [[am|soy]] [[English|Inglés]], [[but|pero]] [[she|ella]] [[is|es]] [[American|Americana]].",
    "content": {
      "title": "[[Contrasting|Contrastando]] [[Info|Información]]",
      "instructions": "[[Select|Selecciona]] [[the|la]] [[correct|correcta]] [[combination|combinación]].",
      "questions": [
        {
          "question": "[[I|Yo]] (_____) [[a|un]] [[student|estudiante]], [[and|y]] [[he|él]] (_____) [[a|un]] [[teacher|profesor]].",
          "options": [
            "[[am|soy]] / [[is|es]]",
            "[[is|es]] / [[am|soy]]",
            "[[are|somos]] / [[is|es]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[Match|Combina]] [[the|el]] [[verb|verbo]] [[with|con]] [[each|cada]] [[subject|sujeto]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e45",
    "type": "matching",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Match|Empareja]] [[the|los]] [[negatives|negativos]].",
    "content": {
      "title": "[[Negative|Negativas]] [[Contractions|Contracciones]]",
      "instructions": "[[Match|Empareja]] [[the|la]] [[full|completa]] [[form|forma]] [[with|con]] [[the|la]] [[contraction|contracción]].",
      "pairs": [
        { "left": "[[I|Yo]] [[am|soy]] [[not|no]]", "right": "[[I'm|I'm]] [[not|not]]" },
        { "left": "[[He|Él]] [[is|es]] [[not|no]]", "right": "[[He|He]] [[isn't|isn't]]" },
        { "left": "[[You|Tú]] [[are|eres]] [[not|no]]", "right": "[[You|You]] [[aren't|aren't]]" },
        { "left": "[[They|Ellos]] [[are|son]] [[not|no]]", "right": "[[They|They]] [[aren't|aren't]]" }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e46",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "hard",
    "transcript": "[[How|Cómo]] [[have|has]] [[you|tú]] [[been|estado]]?",
    "content": {
      "title": "[[Advanced|Avanzados]] [[Greetings|Saludos]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[best|mejor]] [[response|respuesta]] [[to|a]] [[this|este]] [[common|común]] [[greeting|saludo]].",
      "questions": [
        {
          "question": "[[How|Cómo]] [[have|has]] [[you|tú]] [[been|estado]]?",
          "options": [
            "[[I|Yo]] [[have|he]] [[been|estado]] [[great|genial]], [[thanks|gracias]]!",
            "[[My|Mi]] [[name|nombre]] [[is|es]] [[Paul|Pablo]].",
            "[[I|Yo]] [[am|estoy]] [[from|de]] [[Spain|España]]."
          ],
          "correctAnswer": 0,
          "explanation": "'[[How|Cómo]] [[have|has]] [[you|tú]] [[been|estado]]?' [[asks|pregunta]] [[about|sobre]] [[the|el]] [[recent|reciente]] [[past|pasado]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e47",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[Excuse|Perdone]] [[me|me]], [[can|¿puede]] [[you|tú]] [[repeat|repetir]] [[your|tu]] [[name|nombre]]?",
    "content": {
      "title": "[[Polite|Educada]] [[Request|Petición]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[ask|preguntar]] [[politely|educadamente]].",
      "correctSentence": "[[Can|¿Puedes]] [[you|tú]] [[repeat|repetir]] [[that|eso]], [[please|por favor]]?",
      "words": ["[[repeat|repetir]]", "[[Can|¿Puedes]]", "[[you|tú]]", "[[please|por favor]]?", "[[that|eso]],"]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e48",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[It|Ello]] [[is|es]] [[a|un]] [[very|muy]] [[unusual|inusual]] [[surname|apellido]].",
    "content": {
      "title": "[[Pronunciation|Pronunciación]] [[and|y]] [[Spelling|Deletreo]]",
      "instructions": "[[Select|Selecciona]] [[the|la]] [[correct|correcta]] [[pregunta|question]] [[to|para]] [[ask|preguntar]] [[about|sobre]] [[spelling|deletreo]].",
      "questions": [
        {
          "question": "[[How|Cómo]] [[do|haces]] [[you|tú]] [[spell|deletrear]] [[your|tu]] [[last|último]] [[name|nombre]]?",
          "options": [
            "[[H-E-R-R-E-R-A|H-E-R-R-E-R-A]]",
            "[[My|Mi]] [[name|nombre]] [[is|es]] [[Herrera|Herrera]].",
            "[[It|Ello]] [[is|es]] [[Herrera|Herrera]]."
          ],
          "correctAnswer": 0,
          "explanation": "[[Spelling|Deletrear]] [[means|significa]] [[saying|decir]] [[the|las]] [[individual|individuales]] [[letters|letras]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "hard",
    "transcript": "[[One|Ciento]] [[hundred|cien]].",
    "content": {
      "title": "[[Large|Grandes]] [[Numbers|Números]]",
      "instructions": "[[Identify|Identifica]] [[the|el]] [[number|número]] '[[100|100]]'.",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es]] '[[100|100]]' [[in|en]] [[English|Inglés]]?",
          "options": ["[[One|Un]] [[thousand|mil]]", "[[One|Un]] [[hundred|cien]]", "[[Ten|Diez]]"],
          "correctAnswer": 1,
          "explanation": "100 [[is|es]] [[one|un]] [[hundred|cien]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "hard",
    "transcript": "[[One|Mil]] [[thousand|mil]].",
    "content": {
      "title": "[[Large|Grandes]] [[Numbers|Números]] (II)",
      "instructions": "[[Identify|Identifica]] [[the|el]] [[number|número]] '[[1000|1000]]'.",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es]] '[[1000|1000]]' [[in|en]] [[English|Inglés]]?",
          "options": ["[[One|Un]] [[hundred|cien]]", "[[One|Un]] [[thousand|mil]]", "[[One|Un]] [[million|millón]]"],
          "correctAnswer": 1,
          "explanation": "1000 [[is|es]] [[one|un]] [[thousand|mil]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "hard",
    "transcript": "[[What|Cuál]] [[is|es]] [[your|tu]] [[favorite|favorita]] [[nationality|nacionalidad]]?",
    "content": {
      "title": "[[Complex|Complejas]] [[Nationalities|Nacionalidades]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[nationality|nacionalidad]] [[for|para]] '[[Brazil|Brasil]]'.",
      "questions": [
        {
          "question": "[[She|Ella]] [[is|es]] [[from|de]] [[Brazil|Brasil]]. [[She|Ella]] [[is|es]] (_____).",
          "options": ["[[Brazilian|Brasileña]]", "[[Brazil|Brasil]]", "[[Spanish|Española]]"],
          "correctAnswer": 0,
          "explanation": "'[[Brazilian|Brasileña]]' [[is|es]] [[the|la]] [[nationality|nacionalidad]] [[for|para]] [[Brazil|Brasil]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Alphabet",
    "difficulty": "hard",
    "transcript": "[[W|W]], [[X|X]], [[Y|Y]], [[Z|Z]].",
    "content": {
      "title": "[[Final|Finales]] [[Letters|Letras]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[letter|letra]] '[[W|W]]'.",
      "questions": [
        {
          "question": "[[Which|Cuál]] [[is|es]] '[[W|W]]'?",
          "options": ["[[Double-U|Doble-U]]", "[[V|V]]", "[[M|M]]"],
          "correctAnswer": 0,
          "explanation": "[[The|La]] [[letter|letra]] '[[W|W]]' [[is|es]] [[pronounced|pronunciada]] '[[double-u|doble-u]]'."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[The|El]] [[weather|tiempo]] [[is|es]] [[wonderful|maravilloso]] [[today|hoy]].",
    "content": {
      "title": "[[Abstract|Abstractos]] [[Subjects|Sujetos]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[verb|verbo]].",
      "questions": [
        {
          "question": "[[The|El]] [[weather|tiempo]] (_____) [[nice|agradable]] [[today|hoy]].",
          "options": ["[[is|es]]", "[[are|son]]", "[[am|soy]]"],
          "correctAnswer": 0,
          "explanation": "'[[The|El]] [[weather|tiempo]]' [[is|es]] [[an|un]] [[uncountable|incontable]] [[singular|singular]] [[subject|sujeto]], [[so|así que]] [[use|usa]] '[[is|es/está]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u1-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Greetings",
    "difficulty": "hard",
    "transcript": "[[I|Yo]] [[hope|espero]] [[you|tú]] [[have|tengas]] [[a|un]] [[great|gran]] [[weekend|fin de semana]].",
    "content": {
      "title": "[[Closing|Cierre]] [[Greetings|Saludos]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[best|mejor]] [[farewell|despedida]] [[for|para]] [[Friday|Viernes]].",
      "questions": [
        {
          "question": "[[It|Es]] [[is|es]] [[Friday|Viernes]] [[afternoon|tarde]]. [[How|Cómo]] [[do|haces]] [[you|tú]] [[say|decir]] [[goodbye|adiós]]?",
          "options": [
            "[[Have|Ten]] [[a|un]] [[nice|buen]] [[weekend|fin de semana]]!",
            "[[Good morning|Buenos días]]!",
            "[[Happy|Feliz]] [[Monday|Lunes]]!"
          ],
          "correctAnswer": 0,
          "explanation": "[[We|Nosotros]] [[wish|deseamos]] [[a|un]] '[[nice|buen]] [[weekend|fin de semana]]' [[at|al]] [[the|el]] [[end|final]] [[of|de]] [[the|la]] [[week|semana]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u1-e55",
    "type": "reading-comprehension",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Welcome|Bienvenido]] [[to|a]] [[the|la]] [[team|equipo]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Sarah|Sara]] [[Miller|Miller]]. [[I|Yo]] [[am|soy]] [[the|la]] [[project|proyecto]] [[manager|gerente]]. [[This|Este]] [[is|es]] [[Mr.|el Sr.]] [[Davis|Davis]], [[our|nuestro]] [[senior|senior]] [[developer|desarrollador]]. [[He|Él]] [[is|es]] [[from|de]] [[Canada|Canadá]]. [[We|Nosotros]] [[are|estamos]] [[happy|felices]] [[to|de]] [[have|tenerte]] [[you|a ti]].",
    "content": {
      "title": "[[Professional|Profesional]] [[Introduction|Presentación]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]] [[carefully|cuidadosamente]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[Sarah's|de Sara]] [[job|trabajo]]?",
          "options": [
            "[[Project|Proyecto]] [[manager|gerente]]",
            "[[Senior|Senior]] [[developer|desarrollador]]",
            "[[Student|Estudiante]]"
          ],
          "correctAnswer": 0,
          "explanation": "[[Sarah|Sara]] [[says|dice]]: '[[I|Yo]] [[am|soy]] [[the|la]] [[project|proyecto]] [[manager|gerente]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e56",
    "type": "reading-comprehension",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Welcome|Bienvenido]] [[to|a]] [[the|la]] [[team|equipo]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Sarah|Sara]] [[Miller|Miller]]. [[I|Yo]] [[am|soy]] [[the|la]] [[project|proyecto]] [[manager|gerente]]. [[This|Este]] [[is|es]] [[Mr.|el Sr.]] [[Davis|Davis]], [[our|nuestro]] [[senior|senior]] [[developer|desarrollador]]. [[He|Él]] [[is|es]] [[from|de]] [[Canada|Canadá]]. [[We|Nosotros]] [[are|estamos]] [[happy|felices]] [[to|de]] [[have|tenerte]] [[you|a ti]].",
    "content": {
      "title": "[[Team|Equipo]] [[Origin|Origen]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[Mr.|el Sr.]] [[Davis|Davis]] [[from|de]]?",
          "options": ["[[USA|EE.UU.]]", "[[Canada|Canadá]]", "[[England|Inglaterra]]"],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[states|afirma]]: '[[He|Él]] [[is|es]] [[from|de]] [[Canada|Canadá]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e57",
    "type": "reading-comprehension",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[My|Mi]] [[office|oficina]] [[is|está]] [[in|en]] [[New|Nueva]] [[York|York]]. [[It|Ella]] [[is|es]] [[a|una]] [[very|muy]] [[big|grande]] [[building|edificio]]. [[My|Mi]] [[colleague|colega]], [[Elena|Elena]], [[is|es]] [[from|de]] [[Spain|España]]. [[She|Ella]] [[is|es]] [[thirty-two|treinta y dos]] [[years|años]] [[old|de edad]]. [[We|Nosotros]] [[are|estamos]] [[at|en]] [[work|el trabajo]] [[now|ahora]].",
    "content": {
      "title": "[[Office|Oficina]] [[Life|Vida]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[How|Cómo]] [[old|vieja]] [[is|es]] [[Elena|Elena]]?",
          "options": ["22", "32", "42"],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: '[[She|Ella]] [[is|es]] [[thirty-two|treinta y dos]] [[years|años]] [[old|de edad]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e58",
    "type": "reading-comprehension",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[My|Mi]] [[office|oficina]] [[is|está]] [[in|en]] [[New|Nueva]] [[York|York]]. [[It|Ella]] [[is|es]] [[a|una]] [[very|muy]] [[big|grande]] [[building|edificio]]. [[My|Mi]] [[colleague|colega]], [[Elena|Elena]], [[is|es]] [[from|de]] [[Spain|España]]. [[She|Ella]] [[is|es]] [[thirty-two|treinta y dos]] [[years|años]] [[old|de edad]]. [[We|Nosotros]] [[are|estamos]] [[at|en]] [[work|el trabajo]] [[now|ahora]].",
    "content": {
      "title": "[[Office|Oficina]] [[Location|Ubicación]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|está]] [[the|la]] [[office|oficina]]?",
          "options": ["[[Madrid|Madrid]]", "[[London|Londres]]", "[[New|Nueva]] [[York|York]]"],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: '[[My|Mi]] [[office|oficina]] [[is|está]] [[in|en]] [[New|Nueva]] [[York|York]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e59",
    "type": "reading-comprehension",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Hello|Hola]]! [[I|Yo]] [[am|soy]] [[Paul|Pablo]]. [[I|Yo]] [[am|soy]] [[a|un]] [[doctor|doctor]] [[at|en]] [[St.|San]] [[Jude|Judas]] [[Hospital|Hospital]]. [[My|Mi]] [[phone|teléfono]] [[number|número]] [[is|es]] 987-654. [[This|Esta]] [[is|es]] [[my|mi]] [[assistant|asistente]], [[Lucia|Lucía]]. [[She|Ella]] [[is|es]] [[from|de]] [[Italy|Italia]]. [[She|Ella]] [[is|es]] [[very|muy]] [[professional|profesional]].",
    "content": {
      "title": "[[Hospital|Hospital]] [[Staff|Personal]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es]] [[Paul's|de Pablo]] [[job|trabajo]]?",
          "options": ["[[Doctor|Doctor]]", "[[Assistant|Asistente]]", "[[Manager|Gerente]]"],
          "correctAnswer": 0,
          "explanation": "[[Paul|Pablo]] [[states|afirma]]: '[[I|Yo]] [[am|soy]] [[a|un]] [[doctor|doctor]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u1-e60",
    "type": "reading-comprehension",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Hello|Hola]]! [[I|Yo]] [[am|soy]] [[Paul|Pablo]]. [[I|Yo]] [[am|soy]] [[a|un]] [[doctor|doctor]] [[at|en]] [[St.|San]] [[Jude|Judas]] [[Hospital|Hospital]]. [[My|Mi]] [[phone|teléfono]] [[number|número]] [[is|es]] 987-654. [[This|Esta]] [[is|es]] [[my|mi]] [[assistant|asistente]], [[Lucia|Lucía]]. [[She|Ella]] [[is|es]] [[from|de]] [[Italy|Italia]]. [[She|Ella]] [[is|es]] [[very|muy]] [[professional|profesional]].",
    "content": {
      "title": "[[Assistant's|De la asistente]] [[Details|Detalles]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[Is|¿Es]] [[Lucia|Lucía]] [[Italian|Italiana]]?",
          "options": ["[[Yes|Sí]], [[she|ella]] [[is|es]]", "[[No|No]], [[she|ella]] [[is|es]] [[not|no]]", "[[She|Ella]] [[is|es]] [[American|Americana]]"],
          "correctAnswer": 0,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: '[[She|Ella]] [[is|es]] [[from|de]] [[Italy|Italia]]'."
        }
      ]
    },
    "topicName": "Reading"
  }
];
