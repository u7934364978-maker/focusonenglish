import { Exercise } from '@/lib/exercise-generator';

export const UNIT_19_EXERCISES: Exercise[] = [
  {
    "id": "a1-u19-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "easy",
    "transcript": "Doctor. Nurse. Teacher. Student. Engineer. Waiter. Waitress. Driver. Police officer. Shop assistant.",
    "content": {
      "title": "Vocabulario: Profesiones",
      "instructions": "Aprende los nombres de diferentes profesiones.",
      "items": [
        { "front": "[[Doctor|Médico]]", "back": "Doctor / Médico" },
        { "front": "[[Nurse|Enfermero]]", "back": "Enfermero/a" },
        { "front": "[[Teacher|Profesor]]", "back": "Profesor/a" },
        { "front": "[[Student|Estudiante]]", "back": "Estudiante" },
        { "front": "[[Engineer|Ingeniero]]", "back": "Ingeniero/a" },
        { "front": "[[Waiter|Camarero]]", "back": "Camarero (hombre)" },
        { "front": "[[Waitress|Camarera]]", "back": "Camarera (mujer)" },
        { "front": "[[Driver|Conductor]]", "back": "Conductor/a" },
        { "front": "[[Police officer|Policía]]", "back": "Oficial de policía" },
        { "front": "[[Shop assistant|Dependiente]]", "back": "Dependiente/a" }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e2",
    "type": "flashcard",
    "level": "A1",
    "topic": "Workplaces",
    "difficulty": "easy",
    "transcript": "Hospital. School. Office. Restaurant. Shop. Factory. Bank. Garage. Hotel. Studio.",
    "content": {
      "title": "Vocabulario: Lugares de Trabajo",
      "instructions": "Aprende dónde trabajan diferentes personas.",
      "items": [
        { "front": "[[Hospital|Hospital]]", "back": "Hospital" },
        { "front": "[[School|Escuela]]", "back": "Escuela / Colegio" },
        { "front": "[[Office|Oficina]]", "back": "Oficina" },
        { "front": "[[Restaurant|Restaurante]]", "back": "Restaurante" },
        { "front": "[[Shop|Tienda]]", "back": "Tienda" },
        { "front": "[[Factory|Fábrica]]", "back": "Fábrica" },
        { "front": "[[Bank|Banco]]", "back": "Banco" },
        { "front": "[[Garage|Taller]]", "back": "Taller / Garaje" },
        { "front": "[[Hotel|Hotel]]", "back": "Hotel" },
        { "front": "[[Studio|Estudio]]", "back": "Estudio" }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e2.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Asking about Jobs",
    "difficulty": "easy",
    "transcript": "What do you do?",
    "content": {
      "title": "Preguntar la Profesión",
      "instructions": "Elige la pregunta correcta para saber a qué se dedica alguien.",
      "questions": [
        {
          "question": "_______ [[do|do]] [[you|tú]] [[do|hacer]]?",
          "options": ["[[What|Qué]]", "[[Where|Dónde]]", "[[Who|Quién]]"],
          "correctAnswer": 0,
          "explanation": "'What do you do?' es la pregunta estándar para preguntar por el trabajo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e3.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Workplace",
    "difficulty": "easy",
    "transcript": "Where do you work?",
    "content": {
      "title": "Preguntar el Lugar",
      "instructions": "Completa la pregunta sobre el lugar de trabajo.",
      "questions": [
        {
          "question": "_______ [[do|do]] [[you|tú]] [[work|trabajar]]?",
          "options": ["[[Where|Dónde]]", "[[What|Qué]]", "[[When|Cuándo]]"],
          "correctAnswer": 0,
          "explanation": "'Where do you work?' sirve para preguntar por la ubicación del empleo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e4.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e5",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Routine",
    "difficulty": "easy",
    "transcript": "I work in a big office.",
    "content": {
      "title": "Describir el Trabajo",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[work|trabajo]] [[in|en]] [[a|una]] [[big|grande]] [[office|oficina]].",
      "words": ["[[I|Yo]]", "[[work|trabajo]]", "[[in|en]]", "[[a|una]]", "[[big|grande]]", "[[office|oficina]]."],
      "explanation": "Estructura básica: Sujeto + Verbo + Lugar."
    },
    "audioUrl": "audio/a1/unit-19/e5.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Third Person",
    "difficulty": "medium",
    "transcript": "He works in a hospital.",
    "content": {
      "title": "Tercera Persona",
      "instructions": "Elige la forma correcta del verbo.",
      "questions": [
        {
          "question": "[[He|Él]] _______ [[in|en]] [[a|un]] [[hospital|hospital]].",
          "options": ["[[works|trabaja]]", "[[work|trabaja]]", "[[working|trabajando]]"],
          "correctAnswer": 0,
          "explanation": "Añadimos -s al verbo en tercera persona singular (He/She/It)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e6.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e7",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "easy",
    "transcript": "A doctor helps sick people.",
    "content": {
      "title": "Funciones",
      "instructions": "Elige la profesión correcta.",
      "questions": [
        {
          "question": "[[A|Un]] _______ [[helps|ayuda]] [[sick|enfermas]] [[people|personas]].",
          "options": ["[[doctor|médico]]", "[[driver|conductor]]", "[[waiter|camarero]]"],
          "correctAnswer": 0,
          "explanation": "Los médicos ayudan a las personas enfermas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e7.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e8",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Questions",
    "difficulty": "medium",
    "transcript": "Does she work in a school?",
    "content": {
      "title": "Pregunta: Tercera Persona",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Does|Does]] [[she|ella]] [[work|trabajar]] [[in|en]] [[a|una]] [[school|escuela]]?",
      "words": ["[[Does|Does]]", "[[she|ella]]", "[[work|trabajar]]", "[[in|en]]", "[[a|una]]", "[[school|escuela]]?"],
      "explanation": "Usamos 'Does' para preguntas con 'she'."
    },
    "audioUrl": "audio/a1/unit-19/e8.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Negative",
    "difficulty": "medium",
    "transcript": "I don't work on Saturdays.",
    "content": {
      "title": "Negación",
      "instructions": "Elige la forma negativa.",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[work|trabajar]] [[on|en]] [[Saturdays|sábados]].",
          "options": ["[[don't|no]]", "[[doesn't|no]]", "[[not|no]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'don't' para negaciones con 'I'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e9.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Work",
    "difficulty": "easy",
    "transcript": "A waiter works in a restaurant.",
    "content": {
      "title": "¿Dónde trabaja?",
      "instructions": "Completa con el lugar de trabajo.",
      "questions": [
        {
          "question": "[[A|Un]] [[waiter|camarero]] [[works|trabaja]] [[in|en]] [[a|un]] _______.",
          "options": ["[[restaurant|restaurante]]", "[[bank|banco]]", "[[garage|taller]]"],
          "correctAnswer": 0,
          "explanation": "Los camareros trabajan en restaurantes."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e10.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e11",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "medium",
    "transcript": "My father is a taxi driver.",
    "content": {
      "title": "Mi Padre",
      "instructions": "Ordena la oración sobre el trabajo de tu padre.",
      "correctSentence": "[[My|Mi]] [[father|padre]] [[is|es]] [[a|un]] [[taxi|taxi]] [[driver|conductor]].",
      "words": ["[[My|Mi]]", "[[father|padre]]", "[[is|es]]", "[[a|un]]", "[[taxi|taxi]]", "[[driver|conductor]]."],
      "explanation": "Estructura para decir la profesión de alguien."
    },
    "audioUrl": "audio/a1/unit-19/e11.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Actions",
    "difficulty": "medium",
    "transcript": "I use a computer at work.",
    "content": {
      "title": "Herramientas",
      "instructions": "Elige el objeto.",
      "questions": [
        {
          "question": "[[I|Yo]] [[use|uso]] [[a|un]] _______ [[at|en]] [[work|trabajo]].",
          "options": ["[[computer|ordenador]]", "[[bicycle|bicicleta]]", "[[bed|cama]]"],
          "correctAnswer": 0,
          "explanation": "Muchas personas usan ordenadores en el trabajo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e12.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e13",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "This is Peter. He is 35 years old. Peter is an engineer. He works in a large factory in Manchester. He goes to work by car. Every day, he has meetings and talks to many people. He loves his job because it is interesting.",
    "content": {
      "title": "Lectura: El Trabajo de Peter",
      "instructions": "Lee el texto y responde.\n\n*\"This is Peter. He is 35 years old. Peter is an engineer. He works in a large factory in Manchester. He goes to work by car. Every day, he has meetings and talks to many people. He loves his job because it is interesting.\"*",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es]] [[Peter's|de Peter]] [[job|trabajo]]?",
          "options": ["[[Engineer|Ingeniero]]", "[[Doctor|Médico]]", "[[Teacher|Profesor]]"],
          "correctAnswer": 0,
          "explanation": "Peter es ingeniero."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e13.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "This is Peter. He is 35 years old. Peter is an engineer. He works in a large factory in Manchester. He goes to work by car. Every day, he has meetings and talks to many people. He loves his job because it is interesting.",
    "content": {
      "title": "Lectura: El Trabajo de Peter",
      "instructions": "Lee el texto y responde.\n\n*\"This is Peter. He is 35 years old. Peter is an engineer. He works in a large factory in Manchester. He goes to work by car. Every day, he has meetings and talks to many people. He loves his job because it is interesting.\"*",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[does|does]] [[he|él]] [[work|trabajar]]?",
          "options": ["[[In a factory|En una fábrica]]", "[[In a school|En una escuela]]", "[[In a hospital|En un hospital]]"],
          "correctAnswer": 0,
          "explanation": "Peter trabaja en una fábrica."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e14.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e15",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "This is Peter. He is 35 years old. Peter is an engineer. He works in a large factory in Manchester. He goes to work by car. Every day, he has meetings and talks to many people. He loves his job because it is interesting.",
    "content": {
      "title": "Lectura: El Trabajo de Peter",
      "instructions": "Lee el texto y responde.\n\n*\"This is Peter. He is 35 years old. Peter is an engineer. He works in a large factory in Manchester. He goes to work by car. Every day, he has meetings and talks to many people. He loves his job because it is interesting.\"*",
      "questions": [
        {
          "question": "[[How|Cómo]] [[does|does]] [[he|él]] [[go|ir]] [[to|a]] [[work|trabajo]]?",
          "options": ["[[By car|En coche]]", "[[By train|En tren]]", "[[On foot|A pie]]"],
          "correctAnswer": 0,
          "explanation": "Peter va al trabajo en coche."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e15.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e16",
    "type": "flashcard",
    "level": "A1",
    "topic": "Work Activities",
    "difficulty": "medium",
    "transcript": "Answer emails. Have a meeting. Talk to customers. Make phone calls. Clean the floor. Cook food. Drive a bus. Sell products. Fix cars. Teach students.",
    "content": {
      "title": "Vocabulario: Tareas del Trabajo",
      "instructions": "Aprende acciones comunes en el trabajo.",
      "items": [
        { "front": "[[Answer emails|Responder emails]]", "back": "Responder correos electrónicos" },
        { "front": "[[Have a meeting|Tener una reunión]]", "back": "Tener una reunión" },
        { "front": "[[Talk to customers|Hablar con clientes]]", "back": "Hablar con clientes" },
        { "front": "[[Make phone calls|Hacer llamadas]]", "back": "Hacer llamadas telefónicas" },
        { "front": "[[Clean the floor|Limpiar el suelo]]", "back": "Limpiar el suelo" },
        { "front": "[[Cook food|Cocinar comida]]", "back": "Cocinar comida" },
        { "front": "[[Drive a bus|Conducir un bus]]", "back": "Conducir un autobús" },
        { "front": "[[Sell products|Vender productos]]", "back": "Vender productos" },
        { "front": "[[Fix cars|Arreglar coches]]", "back": "Arreglar coches / mecánicas" },
        { "front": "[[Teach students|Enseñar alumnos]]", "back": "Enseñar a estudiantes" }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e16.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Work Activities",
    "difficulty": "medium",
    "transcript": "I have a meeting at 10 AM.",
    "content": {
      "title": "Reunión",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[a|una]] [[meeting|reunión]] [[at|a las]] [[10|10]] [[AM|AM]].",
          "options": ["[[have|tengo]]", "[[do|hago]]", "[[make|hago]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'have a meeting' para decir que tenemos una reunión."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e17.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e18",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Work",
    "difficulty": "medium",
    "transcript": "She answers emails all morning.",
    "content": {
      "title": "Responder Correos",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[She|Ella]] [[answers|responde]] [[emails|emails]] [[all|toda]] [[morning|mañana]].",
      "words": ["[[She|Ella]]", "[[answers|responde]]", "[[emails|emails]]", "[[all|toda]]", "[[morning|mañana]]."],
      "explanation": "Verbo en tercera persona: 'answers'."
    },
    "audioUrl": "audio/a1/unit-19/e18.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e19",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Negative",
    "difficulty": "medium",
    "transcript": "He doesn't like his job.",
    "content": {
      "title": "No le gusta",
      "instructions": "Elige la forma negativa correcta.",
      "questions": [
        {
          "question": "[[He|Él]] _______ [[like|gustar]] [[his|su]] [[job|trabajo]].",
          "options": ["[[doesn't|no]]", "[[don't|no]]", "[[not|no]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'doesn't' para negaciones con 'he'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e19.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Workplace",
    "difficulty": "easy",
    "transcript": "A teacher works in a school.",
    "content": {
      "title": "La Escuela",
      "instructions": "Completa con el lugar correcto.",
      "questions": [
        {
          "question": "[[A|Un]] [[teacher|profesor]] [[works|trabaja]] [[in|en]] [[a|una]] _______.",
          "options": ["[[school|escuela]]", "[[office|oficina]]", "[[bank|banco]]"],
          "correctAnswer": 0,
          "explanation": "Los profesores trabajan en escuelas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e20.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e21",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Questions",
    "difficulty": "medium",
    "transcript": "Do you talk to customers?",
    "content": {
      "title": "Hablar con Clientes",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Do|Do]] [[you|tú]] [[talk|hablar]] [[to|a]] [[customers|clientes]]?",
      "words": ["[[Do|Do]]", "[[you|tú]]", "[[talk|hablar]]", "[[to|a]]", "[[customers|clientes]]?"],
      "explanation": "Pregunta de rutina laboral."
    },
    "audioUrl": "audio/a1/unit-19/e21.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e22",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "easy",
    "transcript": "An artist works in a studio.",
    "content": {
      "title": "El Estudio",
      "instructions": "Elige el lugar de trabajo.",
      "questions": [
        {
          "question": "[[An|Un]] [[artist|artista]] [[works|trabaja]] [[in|en]] [[a|un]] _______.",
          "options": ["[[studio|estudio]]", "[[garage|taller]]", "[[shop|tienda]]"],
          "correctAnswer": 0,
          "explanation": "Los artistas suelen trabajar en estudios (studios)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e22.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "Maria is a nurse. She works at Night City Hospital. She works from 8 PM to 6 AM. She is very busy. Maria helps the doctors and talks to the patients. She doesn't like working at night, but she likes her colleagues. They are very friendly.",
    "content": {
      "title": "Lectura: La Enfermera Maria",
      "instructions": "Lee el texto y responde.\n\n*\"Maria is a nurse. She works at Night City Hospital. She works from 8 PM to 6 AM. She is very busy. Maria helps the doctors and talks to the patients. She doesn't like working at night, but she likes her colleagues. They are very friendly.\"*",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[does|does]] [[Maria|Maria]] [[work|trabajar]]?",
          "options": ["[[In a hospital|En un hospital]]", "[[In a school|En una escuela]]", "[[In a shop|En una tienda]]"],
          "correctAnswer": 0,
          "explanation": "Maria trabaja en un hospital."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e23.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "Maria is a nurse. She works at Night City Hospital. She works from 8 PM to 6 AM. She is very busy. Maria helps the doctors and talks to the patients. She doesn't like working at night, but she likes her colleagues. They are very friendly.",
    "content": {
      "title": "Lectura: La Enfermera Maria",
      "instructions": "Lee el texto y responde.\n\n*\"Maria is a nurse. She works at Night City Hospital. She works from 8 PM to 6 AM. She is very busy. Maria helps the doctors and talks to the patients. She doesn't like working at night, but she likes her colleagues. They are very friendly.\"*",
      "questions": [
        {
          "question": "[[What|Qué]] [[time|hora]] [[does|does]] [[she|ella]] [[start|empezar]] [[work|trabajo]]?",
          "options": ["[[8 PM|8 PM]]", "[[6 AM|6 AM]]", "[[10 PM|10 PM]]"],
          "correctAnswer": 0,
          "explanation": "Maria empieza a trabajar a las 8 PM."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e24.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "Maria is a nurse. She works at Night City Hospital. She works from 8 PM to 6 AM. She is very busy. Maria helps the doctors and talks to the patients. She doesn't like working at night, but she likes her colleagues. They are very friendly.",
    "content": {
      "title": "Lectura: La Enfermera Maria",
      "instructions": "Lee el texto y responde.\n\n*\"Maria is a nurse. She works at Night City Hospital. She works from 8 PM to 6 AM. She is very busy. Maria helps the doctors and talks to the patients. She doesn't like working at night, but she likes her colleagues. They are very friendly.\"*",
      "questions": [
        {
          "question": "[[Does|Does]] [[she|ella]] [[like|gustar]] [[her|sus]] [[colleagues|compañeros]]?",
          "options": ["[[Yes, she does|Sí]]", "[[No, she doesn't|No]]", "[[She doesn't have colleagues|No tiene]]"],
          "correctAnswer": 0,
          "explanation": "A Maria le gustan sus compañeros porque son amigables."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e25.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "easy",
    "transcript": "A driver drives a taxi.",
    "content": {
      "title": "Conductor",
      "instructions": "Completa con el verbo correcto.",
      "questions": [
        {
          "question": "[[A|Un]] [[driver|conductor]] _______ [[a|un]] [[taxi|taxi]].",
          "options": ["[[drives|conduce]]", "[[flies|vuela]]", "[[teaches|enseña]]"],
          "correctAnswer": 0,
          "explanation": "Los conductores conducen (drive)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e26.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Actions",
    "difficulty": "medium",
    "transcript": "I make phone calls every morning.",
    "content": {
      "title": "Llamadas",
      "instructions": "Elige el verbo adecuado.",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[phone|teléfono]] [[calls|llamadas]] [[every|cada]] [[morning|mañana]].",
          "options": ["[[make|hago]]", "[[do|hago]]", "[[have|tengo]]"],
          "correctAnswer": 0,
          "explanation": "Decimos 'make phone calls'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e27.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e28",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Work",
    "difficulty": "medium",
    "transcript": "They sell clothes in a shop.",
    "content": {
      "title": "Ventas",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[They|Ellos]] [[sell|venden]] [[clothes|ropa]] [[in|en]] [[a|una]] [[shop|tienda]].",
      "words": ["[[They|Ellos]]", "[[sell|venden]]", "[[clothes|ropa]]", "[[in|en]]", "[[a|una]]", "[[shop|tienda]]."],
      "explanation": "Estructura Sujeto + Verbo + Objeto + Lugar."
    },
    "audioUrl": "audio/a1/unit-19/e28.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Questions",
    "difficulty": "medium",
    "transcript": "Does your brother work in a bank?",
    "content": {
      "title": "Tu Hermano",
      "instructions": "Completa con el auxiliar.",
      "questions": [
        {
          "question": "_______ [[your|tu]] [[brother|hermano]] [[work|trabajar]] [[in|en]] [[a|un]] [[bank|banco]]?",
          "options": ["[[Does|Does]]", "[[Do|Do]]", "[[Is|Is]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'Does' porque 'your brother' es tercera persona singular (he)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e29.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e30",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Negative",
    "difficulty": "medium",
    "transcript": "She doesn't answer the phone.",
    "content": {
      "title": "No Contesta",
      "instructions": "Elige la forma negativa.",
      "questions": [
        {
          "question": "[[She|Ella]] _______ [[answer|contestar]] [[the|el]] [[phone|teléfono]].",
          "options": ["[[doesn't|no]]", "[[don't|no]]", "[[not|no]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'doesn't' para 'she'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e30.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e31",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Work Routine",
    "difficulty": "medium",
    "transcript": "We have lunch at one o'clock.",
    "content": {
      "title": "Almuerzo",
      "instructions": "Ordena la oración sobre la rutina.",
      "correctSentence": "[[We|Nosotros]] [[have|tenemos]] [[lunch|comida]] [[at|a]] [[one|una]] [[o'clock|en punto]].",
      "words": ["[[We|Nosotros]]", "[[have|tenemos]]", "[[lunch|comida]]", "[[at|a]]", "[[one|una]]", "[[o'clock|en punto]]."],
      "explanation": "Decimos 'have lunch' para almorzar."
    },
    "audioUrl": "audio/a1/unit-19/e31.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e32",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "easy",
    "transcript": "A police officer wears a uniform.",
    "content": {
      "title": "Uniforme",
      "instructions": "Elige el objeto.",
      "questions": [
        {
          "question": "[[A|Un]] [[police|policía]] [[officer|oficial]] [[wears|lleva]] [[a|un]] _______.",
          "options": ["[[uniform|uniforme]]", "[[hat|sombrero]]", "[[car|coche]]"],
          "correctAnswer": 0,
          "explanation": "Los policías suelen llevar uniforme."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e32.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "Tom is a shop assistant. He works in a small clothes shop. He works from Tuesday to Saturday. He helps customers and sells shirts and pants. On Sundays and Mondays, he is at home. He likes his job because he likes fashion.",
    "content": {
      "title": "Lectura: Tom el Dependiente",
      "instructions": "Lee el texto y responde.\n\n*\"Tom is a shop assistant. He works in a small clothes shop. He works from Tuesday to Saturday. He helps customers and sells shirts and pants. On Sundays and Mondays, he is at home. He likes his job because he likes fashion.\"*",
      "questions": [
        {
          "question": "[[What|Qué]] [[does|does]] [[Tom|Tom]] [[sell|vender]]?",
          "options": ["[[Clothes|Ropa]]", "[[Food|Comida]]", "[[Cars|Coches]]"],
          "correctAnswer": 0,
          "explanation": "Tom vende ropa (camisas y pantalones)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e33.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e34",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "Tom is a shop assistant. He works in a small clothes shop. He works from Tuesday to Saturday. He helps customers and sells shirts and pants. On Sundays and Mondays, he is at home. He likes his job because he likes fashion.",
    "content": {
      "title": "Lectura: Tom el Dependiente",
      "instructions": "Lee el texto y responde.\n\n*\"Tom is a shop assistant. He works in a small clothes shop. He works from Tuesday to Saturday. He helps customers and sells shirts and pants. On Sundays and Mondays, he is at home. He likes his job because he likes fashion.\"*",
      "questions": [
        {
          "question": "[[When|Cuándo]] [[is|está]] [[he|él]] [[at|en]] [[home|casa]]?",
          "options": ["[[Sundays and Mondays|Domingos y lunes]]", "[[Tuesdays|Martes]]", "[[Saturdays|Sábados]]"],
          "correctAnswer": 0,
          "explanation": "Tom está en casa los domingos y lunes."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e34.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "Tom is a shop assistant. He works in a small clothes shop. He works from Tuesday to Saturday. He helps customers and sells shirts and pants. On Sundays and Mondays, he is at home. He likes his job because he likes fashion.",
    "content": {
      "title": "Lectura: Tom el Dependiente",
      "instructions": "Lee el texto y responde.\n\n*\"Tom is a shop assistant. He works in a small clothes shop. He works from Tuesday to Saturday. He helps customers and sells shirts and pants. On Sundays and Mondays, he is at home. He likes his job because he likes fashion.\"*",
      "questions": [
        {
          "question": "[[Why|Por qué]] [[does|does]] [[he|él]] [[like|gustar]] [[his|su]] [[job|trabajo]]?",
          "options": ["[[He likes fashion|Le gusta la moda]]", "[[He likes the money|Le gusta el dinero]]", "[[He likes his boss|Le gusta su jefe]]"],
          "correctAnswer": 0,
          "explanation": "Le gusta el trabajo porque le gusta la moda (fashion)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e35.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e36",
    "type": "flashcard",
    "level": "A1",
    "topic": "Work Conditions",
    "difficulty": "medium",
    "transcript": "Part-time job. Full-time job. Salary. Boss. Manager. Colleague. Team. Break. Vacation. Overtime.",
    "content": {
      "title": "Vocabulario: Condiciones de Trabajo",
      "instructions": "Aprende términos sobre la situación laboral.",
      "items": [
        { "front": "[[Part-time job|Trabajo a tiempo parcial]]", "back": "Trabajo a media jornada / tiempo parcial" },
        { "front": "[[Full-time job|Trabajo a tiempo completo]]", "back": "Trabajo a jornada completa" },
        { "front": "[[Salary|Salario]]", "back": "Salario / Sueldo" },
        { "front": "[[Boss|Jefe]]", "back": "Jefe/a" },
        { "front": "[[Manager|Gerente]]", "back": "Gerente / Manager" },
        { "front": "[[Colleague|Compañero]]", "back": "Compañero/a de trabajo" },
        { "front": "[[Team|Equipo]]", "back": "Equipo" },
        { "front": "[[Break|Descanso]]", "back": "Descanso / Pausa" },
        { "front": "[[Vacation|Vacaciones]]", "back": "Vacaciones" },
        { "front": "[[Overtime|Horas extra]]", "back": "Horas extraordinarias" }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e36.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Conditions",
    "difficulty": "medium",
    "transcript": "I have a full-time job.",
    "content": {
      "title": "Jornada Completa",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] [[a|un]] _______ [[job|trabajo]].",
          "options": ["[[full-time|tiempo completo]]", "[[break|descanso]]", "[[salary|salario]]"],
          "correctAnswer": 0,
          "explanation": "'Full-time job' es un trabajo a jornada completa."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e37.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e38",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Colleagues",
    "difficulty": "easy",
    "transcript": "My colleagues are very nice.",
    "content": {
      "title": "Compañeros",
      "instructions": "Elige la palabra para compañeros.",
      "questions": [
        {
          "question": "[[My|Mis]] _______ [[are|son]] [[very|muy]] [[nice|majos]].",
          "options": ["[[colleagues|compañeros]]", "[[bosses|jefes]]", "[[managers|gerentes]]"],
          "correctAnswer": 0,
          "explanation": "'Colleagues' son las personas con las que trabajas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e38.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e39",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Routine",
    "difficulty": "medium",
    "transcript": "I take a break at 11 o'clock.",
    "content": {
      "title": "Tomar un Descanso",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[take|tomo]] [[a|un]] [[break|descanso]] [[at|a las]] [[11|11]] [[o'clock|en punto]].",
      "words": ["[[I|Yo]]", "[[take|tomo]]", "[[a|un]]", "[[break|descanso]]", "[[at|a las]]", "[[11|11]]", "[[o'clock|en punto]]."],
      "explanation": "Usamos 'take a break' para decir descansar."
    },
    "audioUrl": "audio/a1/unit-19/e39.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e40",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Third Person",
    "difficulty": "medium",
    "transcript": "My manager speaks English and Spanish.",
    "content": {
      "title": "Idiomas",
      "instructions": "Completa con el verbo en tercera persona.",
      "questions": [
        {
          "question": "[[My|Mi]] [[manager|gerente]] _______ [[English|inglés]] [[and|y]] [[Spanish|español]].",
          "options": ["[[speaks|habla]]", "[[speak|habla]]", "[[speaking|hablando]]"],
          "correctAnswer": 0,
          "explanation": "'My manager' es tercera persona singular (he/she), por eso 'speaks'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e40.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Questions",
    "difficulty": "easy",
    "transcript": "Do you like your boss?",
    "content": {
      "title": "El Jefe",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "_______ [[you|tú]] [[like|gustar]] [[your|tu]] [[boss|jefe]]?",
          "options": ["[[Do|Do]]", "[[Does|Does]]", "[[Are|Are]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'Do' para 'you'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e41.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e42",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Work",
    "difficulty": "medium",
    "transcript": "I don't have a job right now.",
    "content": {
      "title": "Sin Trabajo",
      "instructions": "Ordena la oración negativa.",
      "correctSentence": "[[I|Yo]] [[don't|no]] [[have|tengo]] [[a|un]] [[job|trabajo]] [[right|ahora]] [[now|mismo]].",
      "words": ["[[I|Yo]]", "[[don't|no]]", "[[have|tengo]]", "[[a|un]]", "[[job|trabajo]]", "[[right|ahora]]", "[[now|mismo]]."],
      "explanation": "Estructura negativa para 'I'."
    },
    "audioUrl": "audio/a1/unit-19/e42.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "Anna and Mark work in the same office. Anna is a manager and Mark is a designer. They work in a creative team. Anna answers many emails and has meetings every day. Mark works on his computer and creates beautiful images. They have a coffee break at 10:30.",
    "content": {
      "title": "Lectura: Anna y Mark",
      "instructions": "Lee el texto y responde.\n\n*\"Anna and Mark work in the same office. Anna is a manager and Mark is a designer. They work in a creative team. Anna answers many emails and has meetings every day. Mark works on his computer and creates beautiful images. They have a coffee break at 10:30.\"*",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es]] [[Mark's|de Mark]] [[job|trabajo]]?",
          "options": ["[[Designer|Diseñador]]", "[[Manager|Gerente]]", "[[Doctor|Médico]]"],
          "correctAnswer": 0,
          "explanation": "Mark es diseñador."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e43.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "Anna and Mark work in the same office. Anna is a manager and Mark is a designer. They work in a creative team. Anna answers many emails and has meetings every day. Mark works on his computer and creates beautiful images. They have a coffee break at 10:30.",
    "content": {
      "title": "Lectura: Anna y Mark",
      "instructions": "Lee el texto y responde.\n\n*\"Anna and Mark work in the same office. Anna is a manager and Mark is a designer. They work in a creative team. Anna answers many emails and has meetings every day. Mark works on his computer and creates beautiful images. They have a coffee break at 10:30.\"*",
      "questions": [
        {
          "question": "[[What|Qué]] [[does|does]] [[Anna|Anna]] [[do|hacer]]?",
          "options": ["[[Emails and meetings|Emails y reuniones]]", "[[Creates images|Crea imágenes]]", "[[Drives a taxi|Conduce un taxi]]"],
          "correctAnswer": 0,
          "explanation": "Anna responde correos y tiene reuniones."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e44.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e45",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "Anna and Mark work in the same office. Anna is a manager and Mark is a designer. They work in a creative team. Anna answers many emails and has meetings every day. Mark works on his computer and creates beautiful images. They have a coffee break at 10:30.",
    "content": {
      "title": "Lectura: Anna y Mark",
      "instructions": "Lee el texto y responde.\n\n*\"Anna and Mark work in the same office. Anna is a manager and Mark is a designer. They work in a creative team. Anna answers many emails and has meetings every day. Mark works on his computer and creates beautiful images. They have a coffee break at 10:30.\"*",
      "questions": [
        {
          "question": "[[When|Cuándo]] [[is|es]] [[their|su]] [[coffee|café]] [[break|descanso]]?",
          "options": ["[[10:30|10:30]]", "[[12:00|12:00]]", "[[9:00|9:00]]"],
          "correctAnswer": 0,
          "explanation": "Su descanso para el café es a las 10:30."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e45.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e46",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Actions",
    "difficulty": "easy",
    "transcript": "I cook food in a kitchen.",
    "content": {
      "title": "Cocinar",
      "instructions": "Elige el verbo.",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[food|comida]] [[in|en]] [[a|una]] [[kitchen|cocina]].",
          "options": ["[[cook|cocino]]", "[[drive|conduzco]]", "[[sell|vendo]]"],
          "correctAnswer": 0,
          "explanation": "Cocinamos (cook) en la cocina."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e46.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Actions",
    "difficulty": "medium",
    "transcript": "She teaches English at university.",
    "content": {
      "title": "Enseñar",
      "instructions": "Completa con el verbo correcto.",
      "questions": [
        {
          "question": "[[She|Ella]] _______ [[English|inglés]] [[at|en la]] [[university|universidad]].",
          "options": ["[[teaches|enseña]]", "[[teaches|enseña]]", "[[studying|estudiando]]"],
          "correctAnswer": 0,
          "explanation": "'She teaches' (ella enseña) - añadimos -es a verbos que acaban en ch."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e47.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e48",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Work",
    "difficulty": "medium",
    "transcript": "They work in a bank from 9 to 5.",
    "content": {
      "title": "Horario Bancario",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[They|Ellos]] [[work|trabajan]] [[in|en]] [[a|un]] [[bank|banco]] [[from|de]] [[9|9]] [[to|a]] [[5|5]].",
      "words": ["[[They|Ellos]]", "[[work|trabajan]]", "[[in|en]]", "[[a|un]]", "[[bank|banco]]", "[[from|de]]", "[[9|9]]", "[[to|a]]", "[[5|5]]."],
      "explanation": "Decimos 'from (time) to (time)' para horarios."
    },
    "audioUrl": "audio/a1/unit-19/e48.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Salary",
    "difficulty": "medium",
    "transcript": "Do you have a good salary?",
    "content": {
      "title": "El Sueldo",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "[[Do|Do]] [[you|tú]] [[have|tener]] [[a|un]] [[good|buen]] _______?",
          "options": ["[[salary|salario]]", "[[break|descanso]]", "[[team|equipo]]"],
          "correctAnswer": 0,
          "explanation": "'Salary' es el sueldo que recibes por tu trabajo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e49.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Negative",
    "difficulty": "easy",
    "transcript": "We don't work at the weekend.",
    "content": {
      "title": "Fines de Semana",
      "instructions": "Elige la forma negativa.",
      "questions": [
        {
          "question": "[[We|Nosotros]] _______ [[work|trabajar]] [[at|en]] [[the|el]] [[weekend|fin de semana]].",
          "options": ["[[don't|no]]", "[[doesn't|no]]", "[[not|no]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'don't' para 'we'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e50.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e51",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Job Search",
    "difficulty": "medium",
    "transcript": "I am looking for a new job.",
    "content": {
      "title": "Buscar Trabajo",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[am|estoy]] [[looking|buscando]] [[for|por]] [[a|un]] [[new|nuevo]] [[job|trabajo]].",
      "words": ["[[I|Yo]]", "[[am|estoy]]", "[[looking|buscando]]", "[[for|por]]", "[[a|un]]", "[[new|nuevo]]", "[[job|trabajo]]."],
      "explanation": "'Look for' significa buscar."
    },
    "audioUrl": "audio/a1/unit-19/e51.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "medium",
    "transcript": "An engineer fixes machines.",
    "content": {
      "title": "Ingeniero",
      "instructions": "Elige el verbo correcto.",
      "questions": [
        {
          "question": "[[An|Un]] [[engineer|ingeniero]] _______ [[machines|máquinas]].",
          "options": ["[[fixes|arregla]]", "[[sells|vende]]", "[[drives|conduce]]"],
          "correctAnswer": 0,
          "explanation": "Los ingenieros arreglan o diseñan máquinas (fixes)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e52.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "Meet Carlos. He is from Mexico but he lives in London. Carlos is a chef. He works in a famous Mexican restaurant. He works in the evenings from 4 PM to midnight. He makes delicious tacos and enchiladas. He works in a busy kitchen with five other chefs. He is tired after work, but he is happy.",
    "content": {
      "title": "Lectura: Carlos el Chef",
      "instructions": "Lee el texto y responde.\n\n*\"Meet Carlos. He is from Mexico but he lives in London. Carlos is a chef. He works in a famous Mexican restaurant. He works in the evenings from 4 PM to midnight. He makes delicious tacos and enchiladas. He works in a busy kitchen with five other chefs. He is tired after work, but he is happy.\"*",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es]] [[Carlos's|de Carlos]] [[job|trabajo]]?",
          "options": ["[[Chef|Chef]]", "[[Waiter|Camarero]]", "[[Driver|Conductor]]"],
          "correctAnswer": 0,
          "explanation": "Carlos es chef."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e53.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "Meet Carlos. He is from Mexico but he lives in London. Carlos is a chef. He works in a famous Mexican restaurant. He works in the evenings from 4 PM to midnight. He makes delicious tacos and enchiladas. He works in a busy kitchen with five other chefs. He is tired after work, but he is happy.",
    "content": {
      "title": "Lectura: Carlos el Chef",
      "instructions": "Lee el texto y responde.\n\n*\"Meet Carlos. He is from Mexico but he lives in London. Carlos is a chef. He works in a famous Mexican restaurant. He works in the evenings from 4 PM to midnight. He makes delicious tacos and enchiladas. He works in a busy kitchen with five other chefs. He is tired after work, but he is happy.\"*",
      "questions": [
        {
          "question": "[[When|Cuándo]] [[does|does]] [[he|él]] [[work|trabajar]]?",
          "options": ["[[In the evenings|Por las tardes/noches]]", "[[In the mornings|Por las mañanas]]", "[[All day|Todo el día]]"],
          "correctAnswer": 0,
          "explanation": "Carlos trabaja por las tardes/noches (evenings)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e54.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "transcript": "Meet Carlos. He is from Mexico but he lives in London. Carlos is a chef. He works in a famous Mexican restaurant. He works in the evenings from 4 PM to midnight. He makes delicious tacos and enchiladas. He works in a busy kitchen with five other chefs. He is tired after work, but he is happy.",
    "content": {
      "title": "Lectura: Carlos el Chef",
      "instructions": "Lee el texto y responde.\n\n*\"Meet Carlos. He is from Mexico but he lives in London. Carlos is a chef. He works in a famous Mexican restaurant. He works in the evenings from 4 PM to midnight. He makes delicious tacos and enchiladas. He works in a busy kitchen with five other chefs. He is tired after work, but he is happy.\"*",
      "questions": [
        {
          "question": "[[How|Cómo]] [[does|does]] [[he|él]] [[feel|sentirse]] [[after|después de]] [[work|trabajo]]?",
          "options": ["[[Tired|Cansado]]", "[[Bored|Aburrido]]", "[[Sad|Triste]]"],
          "correctAnswer": 0,
          "explanation": "Carlos se siente cansado (tired) después del trabajo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e55.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vacation",
    "difficulty": "easy",
    "transcript": "I am on vacation this week.",
    "content": {
      "title": "Vacaciones",
      "instructions": "Completa con la palabra correcta.",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|estoy]] [[on|en]] _______ [[this|esta]] [[week|semana]].",
          "options": ["[[vacation|vacaciones]]", "[[salary|salario]]", "[[meeting|reunión]]"],
          "correctAnswer": 0,
          "explanation": "Decimos 'on vacation' para estar de vacaciones."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e56.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e57",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Team",
    "difficulty": "easy",
    "transcript": "We work in a great team.",
    "content": {
      "title": "El Equipo",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[We|Nosotros]] [[work|trabajamos]] [[in|en]] [[a|un]] [[great|gran]] _______.",
          "options": ["[[team|equipo]]", "[[boss|jefe]]", "[[break|descanso]]"],
          "correctAnswer": 0,
          "explanation": "Un 'team' es un grupo de personas que trabajan juntas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e57.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e58",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Routine",
    "difficulty": "medium",
    "transcript": "My sister works in a bank in Madrid.",
    "content": {
      "title": "Mi Hermana",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My|Mi]] [[sister|hermana]] [[works|trabaja]] [[in|en]] [[a|un]] [[bank|banco]] [[in|en]] [[Madrid|Madrid]].",
      "words": ["[[My|Mi]]", "[[sister|hermana]]", "[[works|trabaja]]", "[[in|en]]", "[[a|un]]", "[[bank|banco]]", "[[in|en]]", "[[Madrid|Madrid]]."],
      "explanation": "Recuerda la -s en 'works' para tercera persona (she)."
    },
    "audioUrl": "audio/a1/unit-19/e58.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Office",
    "difficulty": "easy",
    "transcript": "Is there a meeting room?",
    "content": {
      "title": "Sala de Reuniones",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "_______ [[there|hay]] [[a|una]] [[meeting|reunión]] [[room|sala]]?",
          "options": ["[[Is|Hay]]", "[[Are|Hay]]", "[[Do|Hacer]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'Is there' para preguntar por la existencia de algo en singular."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e59.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e60",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Work",
    "difficulty": "medium",
    "transcript": "Do you want to work here?",
    "content": {
      "title": "¿Quieres trabajar?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Do|Do]] [[you|tú]] [[want|querer]] [[to|a]] [[work|trabajar]] [[here|aquí]]?",
      "words": ["[[Do|Do]]", "[[you|tú]]", "[[want|querer]]", "[[to|a]]", "[[work|trabajar]]", "[[here|aquí]]?"],
      "explanation": "Preguntar por el deseo de trabajar en un lugar."
    },
    "audioUrl": "audio/a1/unit-19/e60.mp3",
    "topicName": "Grammar"
  }
];
