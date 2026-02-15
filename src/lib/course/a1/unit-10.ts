import { Exercise } from '@/lib/exercise-generator';

export const UNIT_10_EXERCISES: Exercise[] = [
  {
    "id": "a1-u10-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "easy",
    "transcript": "Hello. Goodbye. Name. Age. Student. Teacher.",
    "content": {
      "title": "Repaso de Saludos y Datos",
      "instructions": "Repasa el vocabulario básico de la Unidad 1.",
      "items": [
        { "front": "[[Hello|Hola]]", "back": "Hola" },
        { "front": "[[Goodbye|Adiós]]", "back": "Adiós" },
        { "front": "[[Name|Nombre]]", "back": "Nombre" },
        { "front": "[[Age|Edad]]", "back": "Edad" },
        { "front": "[[Student|Estudiante]]", "back": "Estudiante" },
        { "front": "[[Teacher|Profesor/a]]", "back": "Profesor/a" }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be (Units 2 & 3)",
    "difficulty": "easy",
    "transcript": "I am not a doctor. I am a student.",
    "content": {
      "title": "Verbo To Be: Afirmación y Negación",
      "instructions": "Elige la forma correcta del verbo.",
      "questions": [
        {
          "question": "[[I|Yo]] (_____) [[not|no]] [[a|un]] [[doctor|médico]].",
          "options": ["[[am|soy]]", "[[is|es]]", "[[are|eres]]"],
          "correctAnswer": 0,
          "explanation": "Con 'I' usamos 'am'."
        },
        {
          "question": "[[She|Ella]] (_____) [[my|mi]] [[sister|hermana]].",
          "options": ["[[is|es]]", "[[am|soy]]", "[[are|son]]"],
          "correctAnswer": 0,
          "explanation": "Con 'She' usamos 'is'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e2.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers & Objects (Unit 4)",
    "difficulty": "easy",
    "transcript": "There are five pens on the desk.",
    "content": {
      "title": "Números y Objetos",
      "instructions": "¿Cuántos objetos hay?",
      "questions": [
        {
          "question": "[[There|Hay]] [[are|son]] (5) (_____) [[on|en]] [[the|el]] [[desk|escritorio]].",
          "options": ["[[five pens|cinco bolígrafos]]", "[[four pens|cuatro bolígrafos]]", "[[six pens|seis bolígrafos]]"],
          "correctAnswer": 0,
          "explanation": "Five es el número 5."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e3.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e4",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Present Simple Actions (Unit 5)",
    "difficulty": "easy",
    "transcript": "We work in an office.",
    "content": {
      "title": "Acciones Cotidianas",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[We|Nosotros]] [[work|trabajamos]] [[in|en]] [[an|una]] [[office|oficina]].",
      "words": ["[[office|oficina]].", "[[an|una]]", "[[in|en]]", "[[work|trabajamos]]", "[[We|Nosotros]]"],
      "explanation": "Sujeto + Verbo + Lugar."
    },
    "audioUrl": "audio/a1/unit-10/e4.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e5",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members (Unit 6)",
    "difficulty": "easy",
    "transcript": "This is my father. His name is Peter.",
    "content": {
      "title": "Mi Familia",
      "instructions": "Elige la relación correcta.",
      "questions": [
        {
          "question": "[[My|Mi]] [[mother's|de mi madre]] [[husband|esposo]] [[is|es]] [[my|mi]] (_____) .",
          "options": ["[[father|padre]]", "[[brother|hermano]]", "[[uncle|tío]]"],
          "correctAnswer": 0,
          "explanation": "El esposo de mi madre es mi padre."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e5.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Colors & Descriptions (Unit 7)",
    "difficulty": "easy",
    "transcript": "I have a red car.",
    "content": {
      "title": "Colores",
      "instructions": "Elige el adjetivo correcto.",
      "questions": [
        {
          "question": "[[The|El]] [[apple|manzana]] [[is|es]] (_____) .",
          "options": ["[[red|roja]]", "[[blue|azul]]", "[[black|negra]]"],
          "correctAnswer": 0,
          "explanation": "Las manzanas suelen ser rojas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e6.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e7",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 20-100 (Unit 8)",
    "difficulty": "easy",
    "transcript": "He is twenty-five years old.",
    "content": {
      "title": "Números Grandes",
      "instructions": "Identifica el número 25.",
      "questions": [
        {
          "question": "[[He|Él]] [[is|tiene]] (25) (_____) [[years|años]] [[old|de edad]].",
          "options": ["[[twenty-five|veinticinco]]", "[[thirty-five|treinta y cinco]]", "[[fifteen|quince]]"],
          "correctAnswer": 0,
          "explanation": "25 se dice 'twenty-five'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e7.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e8",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Jobs (Unit 9)",
    "difficulty": "easy",
    "transcript": "She is an engineer.",
    "content": {
      "title": "Profesiones",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[She|Ella]] [[is|es]] [[an|una]] [[engineer|ingeniera]].",
      "words": ["[[engineer|ingeniera]].", "[[an|una]]", "[[is|es]]", "[[She|Ella]]"],
      "explanation": "Usamos 'an' antes de vocal."
    },
    "audioUrl": "audio/a1/unit-10/e8.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be Questions (Unit 3)",
    "difficulty": "easy",
    "transcript": "Are you from Mexico? Yes, I am.",
    "content": {
      "title": "Preguntas con To Be",
      "instructions": "Responde la pregunta.",
      "questions": [
        {
          "question": "_______ [[you|tú]] [[from|de]] [[Mexico|México]]?",
          "options": ["[[Are|¿Eres]]", "[[Is|¿Es]]", "[[Am|¿Soy]]"],
          "correctAnswer": 0,
          "explanation": "Para 'you' usamos el auxiliar 'Are'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e9.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e10",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Everyday Actions (Unit 5)",
    "difficulty": "easy",
    "transcript": "They study English every morning.",
    "content": {
      "title": "Rutinas",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[They|Ellos]] [[study|estudian]] [[English|inglés]] [[every|cada]] [[morning|mañana]].",
      "words": ["[[morning|mañana]].", "[[every|cada]]", "[[English|inglés]]", "[[study|estudian]]", "[[They|Ellos]]"],
      "explanation": "Estructura de presente simple para hábitos."
    },
    "audioUrl": "audio/a1/unit-10/e10.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e11",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family & Colors (Units 6 & 7)",
    "difficulty": "medium",
    "transcript": "My sister has blue eyes.",
    "content": {
      "title": "Descripciones Familiares",
      "instructions": "Combina familia y descripción.",
      "questions": [
        {
          "question": "[[My|Mi]] [[sister|hermana]] [[has|tiene]] (_____) [[eyes|ojos]].",
          "options": ["[[blue|azules]]", "[[bigs|grandes (incorrecto)]]", "[[smalls|pequeños (incorrecto)]]"],
          "correctAnswer": 0,
          "explanation": "Los adjetivos no se pluralizan en inglés."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e11.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers (Units 4 & 8)",
    "difficulty": "medium",
    "transcript": "Ten plus thirty is forty.",
    "content": {
      "title": "Matemáticas de Repaso",
      "instructions": "Resuelve la suma.",
      "questions": [
        {
          "question": "[[Ten|Diez]] (10) [[plus|más]] [[thirty|treinta]] (30) [[is|es]] (_____) .",
          "options": ["[[forty|cuarenta]]", "[[fifty|cincuenta]]", "[[twenty|veinte]]"],
          "correctAnswer": 0,
          "explanation": "10 + 30 = 40 (forty)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e12.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e13",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Jobs & Locations (Unit 9)",
    "difficulty": "medium",
    "transcript": "The nurse works in the hospital.",
    "content": {
      "title": "Lugares de Trabajo",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[The|La]] [[nurse|enfermera]] [[works|trabaja]] [[in|en]] [[the|el]] [[hospital|hospital]].",
      "words": ["[[hospital|hospital]].", "[[the|el]]", "[[in|en]]", "[[works|trabaja]]", "[[nurse|enfermera]]", "[[The|La]]"],
      "explanation": "Relacionando trabajo y lugar."
    },
    "audioUrl": "audio/a1/unit-10/e13.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be Negatives (Unit 3)",
    "difficulty": "medium",
    "transcript": "We are not students. We are teachers.",
    "content": {
      "title": "Negación con To Be",
      "instructions": "Completa la negación.",
      "questions": [
        {
          "question": "[[We|Nosotros]] (_____) [[not|no]] [[students|estudiantes]].",
          "options": ["[[are|somos]]", "[[is|es]]", "[[am|soy]]"],
          "correctAnswer": 0,
          "explanation": "Con 'We' usamos 'are'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e14.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e15",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Descriptions (Unit 7)",
    "difficulty": "medium",
    "transcript": "This big house is yellow.",
    "content": {
      "title": "Descripción de Objetos",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[This|Esta]] [[big|grande]] [[house|casa]] [[is|es]] [[yellow|amarilla]].",
      "words": ["[[yellow|amarilla]].", "[[is|es]]", "[[house|casa]]", "[[big|grande]]", "[[This|Esta]]"],
      "explanation": "Adjetivo (big) antes del sustantivo (house)."
    },
    "audioUrl": "audio/a1/unit-10/e15.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Present Simple Actions (Unit 5)",
    "difficulty": "medium",
    "transcript": "Do they play soccer on Sundays?",
    "content": {
      "title": "Preguntas de Rutina",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "[[Do|¿Aux]] [[they|ellos]] (_____) [[soccer|fútbol]] [[on|los]] [[Sundays|domingos]]?",
          "options": ["[[play|juegan]]", "[[work|trabajan]]", "[[read|leen]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'play' para deportes."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e16.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers & Age (Units 4 & 8)",
    "difficulty": "medium",
    "transcript": "My grandfather is eighty years old.",
    "content": {
      "title": "Edad del Abuelo",
      "instructions": "Identifica el número 80.",
      "questions": [
        {
          "question": "[[My|Mi]] [[grandfather|abuelo]] [[is|tiene]] (80) (_____) [[years|años]] [[old|de edad]].",
          "options": ["[[eighty|ochenta]]", "[[eighteen|dieciocho]]", "[[eight|ocho]]"],
          "correctAnswer": 0,
          "explanation": "80 se escribe 'eighty'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e17.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e18",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Jobs (Unit 9)",
    "difficulty": "medium",
    "transcript": "The pilot works at the airport.",
    "content": {
      "title": "El Piloto",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[The|El]] [[pilot|piloto]] [[works|trabaja]] [[at|en]] [[the|el]] [[airport|aeropuerto]].",
      "words": ["[[airport|aeropuerto]].", "[[the|el]]", "[[at|en]]", "[[works|trabaja]]", "[[pilot|piloto]]", "[[The|El]]"],
      "explanation": "Lugar de trabajo del piloto."
    },
    "audioUrl": "audio/a1/unit-10/e18.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e19",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles (Unit 4)",
    "difficulty": "medium",
    "transcript": "I have an orange and a banana.",
    "content": {
      "title": "A vs AN",
      "instructions": "Elige los artículos correctos.",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] (_____) [[orange|naranja]] [[and|y]] (_____) [[banana|plátano]].",
          "options": ["[[an / a|una / un]]", "[[a / an|una / un]]", "[[an / an|una / una]]"],
          "correctAnswer": 0,
          "explanation": "An antes de vocal (orange), a antes de consonante (banana)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e19.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e20",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family (Unit 6)",
    "difficulty": "medium",
    "transcript": "My brother and sister study English.",
    "content": {
      "title": "Hermanos",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My|Mi]] [[brother|hermano]] [[and|y]] [[sister|hermana]] [[study|estudian]] [[English|inglés]].",
      "words": ["[[English|inglés]].", "[[study|estudian]]", "[[sister|hermana]]", "[[and|y]]", "[[brother|hermano]]", "[[My|Mi]]"],
      "explanation": "Sujeto compuesto."
    },
    "audioUrl": "audio/a1/unit-10/e20.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "How do you spell your name?",
    "content": {
      "title": "Deletrear",
      "instructions": "Completa la pregunta típica.",
      "questions": [
        {
          "question": "[[How|Cómo]] [[do|aux]] [[you|tú]] (_____) [[your|tu]] [[name|nombre]]?",
          "options": ["[[spell|deletreas]]", "[[speak|hablas]]", "[[read|lees]]"],
          "correctAnswer": 0,
          "explanation": "Spell significa deletrear."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e21.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e22",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Present Simple Actions",
    "difficulty": "medium",
    "transcript": "I drink water every morning.",
    "content": {
      "title": "Bebidas",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[drink|bebo]] [[water|agua]] [[every|cada]] [[morning|mañana]].",
      "words": ["[[morning|mañana]].", "[[every|cada]]", "[[water|agua]]", "[[drink|bebo]]", "[[I|Yo]]"],
      "explanation": "Rutina de salud."
    },
    "audioUrl": "audio/a1/unit-10/e22.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Colors & Objects",
    "difficulty": "medium",
    "transcript": "The pencil is yellow and black.",
    "content": {
      "title": "Lápiz de colores",
      "instructions": "Describe el objeto.",
      "questions": [
        {
          "question": "[[The|El]] [[pencil|lápiz]] [[is|es]] (_____) [[and|y]] (_____) .",
          "options": ["[[yellow / black|amarillo / negro]]", "[[red / blue|rojo / azul]]", "[[green / white|verde / blanco]]"],
          "correctAnswer": 0,
          "explanation": "Combinando colores."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e23.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e24",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers & Prices",
    "difficulty": "medium",
    "transcript": "The book is ninety dollars.",
    "content": {
      "title": "Precios",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[The|El]] [[book|libro]] [[is|cuesta]] [[ninety|noventa]] [[dollars|dólares]].",
      "words": ["[[dollars|dólares]].", "[[ninety|noventa]]", "[[is|cuesta]]", "[[book|libro]]", "[[The|El]]"],
      "explanation": "Ninety es 90."
    },
    "audioUrl": "audio/a1/unit-10/e24.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Jobs & Actions",
    "difficulty": "medium",
    "transcript": "Do chefs work in a kitchen?",
    "content": {
      "title": "Cocinando",
      "instructions": "Completa la pregunta plural.",
      "questions": [
        {
          "question": "[[Do|¿Aux]] [[chefs|cocineros]] (_____) [[in|en]] [[a|una]] [[kitchen|cocina]]?",
          "options": ["[[work|trabajan]]", "[[study|estudian]]", "[[play|juegan]]"],
          "correctAnswer": 0,
          "explanation": "Los chefs trabajan en la cocina."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e25.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e26",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Descriptions",
    "difficulty": "medium",
    "transcript": "My new computer is very fast.",
    "content": {
      "title": "Mi ordenador",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My|Mi]] [[new|nuevo]] [[computer|ordenador]] [[is|es]] [[very|muy]] [[fast|rápido]].",
      "words": ["[[fast|rápido]].", "[[very|muy]]", "[[is|es]]", "[[computer|ordenador]]", "[[new|nuevo]]", "[[My|Mi]]"],
      "explanation": "Combinando adjetivos."
    },
    "audioUrl": "audio/a1/unit-10/e26.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "medium",
    "transcript": "Sixty, seventy, eighty, ninety.",
    "content": {
      "title": "Serie Numérica",
      "instructions": "¿Qué número falta?",
      "questions": [
        {
          "question": "[[Sixty|Sesenta]], (_____), [[eighty|ochenta]], [[ninety|noventa]].",
          "options": ["[[seventy|setenta]]", "[[fifty|cincuenta]]", "[[one hundred|cien]]"],
          "correctAnswer": 0,
          "explanation": "Después del 60 viene el 70 (seventy)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e27.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e28",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family & Jobs",
    "difficulty": "medium",
    "transcript": "Is your uncle a doctor?",
    "content": {
      "title": "Pregunta Familiar",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is|¿Es]] [[your|tu]] [[uncle|tío]] [[a|un]] [[doctor|médico]]?",
      "words": ["[[doctor|médico]]?", "[[a|un]]", "[[uncle|tío]]", "[[your|tu]]", "[[Is|¿Es]]"],
      "explanation": "Pregunta de profesión a un familiar."
    },
    "audioUrl": "audio/a1/unit-10/e28.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Colors",
    "difficulty": "medium",
    "transcript": "The sky is blue.",
    "content": {
      "title": "El cielo",
      "instructions": "Completa la descripción.",
      "questions": [
        {
          "question": "[[The|El]] [[sky|cielo]] (_____) [[blue|azul]].",
          "options": ["[[is|es]]", "[[are|son]]", "[[am|soy]]"],
          "correctAnswer": 0,
          "explanation": "Sky es singular, usamos 'is'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e29.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e30",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Everyday Actions",
    "difficulty": "medium",
    "transcript": "We sleep at ten o'clock.",
    "content": {
      "title": "Hora de dormir",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[We|Nosotros]] [[sleep|dormimos]] [[at|a las]] [[ten|diez]] [[o'clock|en punto]].",
      "words": ["[[o'clock|en punto]].", "[[ten|diez]]", "[[at|a las]]", "[[sleep|dormimos]]", "[[We|Nosotros]]"],
      "explanation": "Acción habitual con hora."
    },
    "audioUrl": "audio/a1/unit-10/e30.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "I am thirty-two. How old are you?",
    "content": {
      "title": "Pregunta de Edad",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "[[How|Cómo]] (_____) [[are|eres]] [[you|tú]]?",
          "options": ["[[old|viejo]]", "[[much|mucho]]", "[[many|muchos]]"],
          "correctAnswer": 0,
          "explanation": "How old is the standard phrase for age."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e31.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e32",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "medium",
    "transcript": "They are police officers.",
    "content": {
      "title": "Plurales",
      "instructions": "Ordena la oración plural.",
      "correctSentence": "[[They|Ellos]] [[are|son]] [[police|policía]] [[officers|oficiales]].",
      "words": ["[[officers|oficiales]].", "[[police|policía]]", "[[are|son]]", "[[They|Ellos]]"],
      "explanation": "Uso de 'are' y plural en profesiones."
    },
    "audioUrl": "audio/a1/unit-10/e32.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "medium",
    "transcript": "Do they study every morning? No, they don't.",
    "content": {
      "title": "Respuestas Cortas",
      "instructions": "Elige la respuesta correcta.",
      "questions": [
        {
          "question": "[[Do|¿Aux]] [[they|ellos]] [[study|estudian]] [[every|cada]] [[morning|mañana]]?",
          "options": ["[[No, they don't|No]]", "[[No, they aren't|No (incorrecto)]]", "[[No, they not|No (incorrecto)]]"],
          "correctAnswer": 0,
          "explanation": "Usamos el auxiliar 'do' para responder."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e33.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e34",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers & Items",
    "difficulty": "medium",
    "transcript": "I need fifty notebooks.",
    "content": {
      "title": "Pedidos",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[need|necesito]] [[fifty|cincuenta]] [[notebooks|libretas]].",
      "words": ["[[notebooks|libretas]].", "[[fifty|cincuenta]]", "[[need|necesito]]", "[[I|Yo]]"],
      "explanation": "Fifty es 50."
    },
    "audioUrl": "audio/a1/unit-10/e34.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Descriptions",
    "difficulty": "medium",
    "transcript": "Are your eyes brown? Yes, they are.",
    "content": {
      "title": "Ojos marrones",
      "instructions": "Completa la pregunta sobre descripción física.",
      "questions": [
        {
          "question": "_______ [[your|tus]] [[eyes|ojos]] [[brown|marrones]]?",
          "options": ["[[Are|¿Son]]", "[[Is|¿Es]]", "[[Do|¿Hacen]]"],
          "correctAnswer": 0,
          "explanation": "Eyes es plural, usamos 'Are'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e35.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e36",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "medium",
    "transcript": "The teacher writes on the whiteboard.",
    "content": {
      "title": "Acción en Clase",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[The|El]] [[teacher|profesor]] [[writes|escribe]] [[on|en]] [[the|la]] [[whiteboard|pizarra]].",
      "words": ["[[whiteboard|pizarra]].", "[[the|la]]", "[[on|en]]", "[[writes|escribe]]", "[[teacher|profesor]]", "[[The|El]]"],
      "explanation": "Verbo de acción en el aula."
    },
    "audioUrl": "audio/a1/unit-10/e36.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Present Simple Actions",
    "difficulty": "medium",
    "transcript": "We don't study on Saturdays.",
    "content": {
      "title": "Negación de Rutina",
      "instructions": "Completa la negación.",
      "questions": [
        {
          "question": "[[We|Nosotros]] (_____) [[study|estudiamos]] [[on|los]] [[Saturdays|sábados]].",
          "options": ["[[don't|no]]", "[[not|no]]", "[[no|no]]"],
          "correctAnswer": 0,
          "explanation": "Don't es la contracción de 'do not'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e37.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e38",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family",
    "difficulty": "medium",
    "transcript": "My daughter is seven years old.",
    "content": {
      "title": "Mi hija",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My|Mi]] [[daughter|hija]] [[is|tiene]] [[seven|siete]] [[years|años]] [[old|de edad]].",
      "words": ["[[old|de edad]].", "[[years|años]]", "[[seven|siete]]", "[[is|tiene]]", "[[daughter|hija]]", "[[My|Mi]]"],
      "explanation": "Hablando de la edad de un familiar."
    },
    "audioUrl": "audio/a1/unit-10/e38.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "medium",
    "transcript": "What do they eat for breakfast?",
    "content": {
      "title": "Desayuno",
      "instructions": "Completa la pregunta con 'What'.",
      "questions": [
        {
          "question": "[[What|Qué]] [[do|aux]] [[they|ellos]] (_____) [[for|para el]] [[breakfast|desayuno]]?",
          "options": ["[[eat|comen]]", "[[play|juegan]]", "[[sleep|duermen]]"],
          "correctAnswer": 0,
          "explanation": "Eat es el verbo para comida sólida."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e39.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e40",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Descriptions",
    "difficulty": "medium",
    "transcript": "The small car is green.",
    "content": {
      "title": "Coche pequeño",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[The|El]] [[small|pequeño]] [[car|coche]] [[is|es]] [[green|verde]].",
      "words": ["[[green|verde]].", "[[is|es]]", "[[car|coche]]", "[[small|pequeño]]", "[[The|El]]"],
      "explanation": "Tamaño y color."
    },
    "audioUrl": "audio/a1/unit-10/e40.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "What is your father's job? He is a doctor.",
    "content": {
      "title": "Trabajo del Padre",
      "instructions": "Responde a la pregunta de profesión.",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es]] [[your|tu]] [[father's|de tu padre]] [[job|trabajo]]?",
          "options": ["[[He is a doctor|Él es médico]]", "[[He is Peter|Él es Peter]]", "[[He is fine|Él está bien]]"],
          "correctAnswer": 0,
          "explanation": "La pregunta pide el trabajo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e41.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e42",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Present Simple Actions",
    "difficulty": "medium",
    "transcript": "You write stories every night.",
    "content": {
      "title": "Escribiendo historias",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[You|Tú]] [[write|escribes]] [[stories|historias]] [[every|cada]] [[night|noche]].",
      "words": ["[[night|noche]].", "[[every|cada]]", "[[stories|historias]]", "[[write|escribes]]", "[[You|Tú]]"],
      "explanation": "Acción creativa de rutina."
    },
    "audioUrl": "audio/a1/unit-10/e42.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family & Description",
    "difficulty": "medium",
    "transcript": "Is your brother tall or short?",
    "content": {
      "title": "Altura",
      "instructions": "Completa con adjetivos opuestos.",
      "questions": [
        {
          "question": "[[Is|¿Es]] [[your|tu]] [[brother|hermano]] [[tall|alto]] [[or|o]] (_____) ?",
          "options": ["[[short|bajo]]", "[[small|pequeño]]", "[[long|largo]]"],
          "correctAnswer": 0,
          "explanation": "Short es el opuesto de tall para personas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e43.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e44",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers & Items",
    "difficulty": "medium",
    "transcript": "There are one hundred students.",
    "content": {
      "title": "El número 100",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[There|Hay]] [[are|son]] [[one|un]] [[hundred|cien]] [[students|estudiantes]].",
      "words": ["[[students|estudiantes]].", "[[hundred|cien]]", "[[one|un]]", "[[are|son]]", "[[There|Hay]]"],
      "explanation": "One hundred es 100."
    },
    "audioUrl": "audio/a1/unit-10/e44.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e45",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "medium",
    "transcript": "Do they play basketball in the park?",
    "content": {
      "title": "Deportes en el parque",
      "instructions": "Completa la pregunta de lugar.",
      "questions": [
        {
          "question": "[[Do|¿Aux]] [[they|ellos]] [[play|juegan]] [[basketball|baloncesto]] (_____) [[the|el]] [[park|parque]]?",
          "options": ["[[in|en]]", "[[on|en (superficie)]]", "[[at|en (punto)]]"],
          "correctAnswer": 0,
          "explanation": "In the park es la forma estándar."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e45.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e46",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Jobs & Descriptions",
    "difficulty": "medium",
    "transcript": "The famous artist is very creative.",
    "content": {
      "title": "Artista creativo",
      "instructions": "Ordena la oración compleja.",
      "correctSentence": "[[The|El]] [[famous|famoso]] [[artist|artista]] [[is|es]] [[very|muy]] [[creative|creativo]].",
      "words": ["[[creative|creativo]].", "[[very|muy]]", "[[is|es]]", "[[artist|artista]]", "[[famous|famoso]]", "[[The|El]]"],
      "explanation": "Combinando profesión y adjetivos."
    },
    "audioUrl": "audio/a1/unit-10/e46.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "medium",
    "transcript": "I have thirty-three pencils.",
    "content": {
      "title": "Dígitos Compuestos",
      "instructions": "Identifica el número 33.",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] (33) (_____) [[pencils|lápices]].",
          "options": ["[[thirty-three|treinta y tres]]", "[[thirteen|trece]]", "[[three|tres]]"],
          "correctAnswer": 0,
          "explanation": "33 se dice 'thirty-three'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e47.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e48",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be Questions",
    "difficulty": "medium",
    "transcript": "Where are you from?",
    "content": {
      "title": "Origen",
      "instructions": "Ordena la pregunta fundamental.",
      "correctSentence": "[[Where|De dónde]] [[are|eres]] [[you|tú]] [[from|de]]?",
      "words": ["[[from|de]]?", "[[you|tú]]", "[[are|eres]]", "[[Where|De dónde]]"],
      "explanation": "Pregunta de nacionalidad u origen."
    },
    "audioUrl": "audio/a1/unit-10/e48.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles",
    "difficulty": "medium",
    "transcript": "Is she a nurse or an architect?",
    "content": {
      "title": "Profesiones y Artículos",
      "instructions": "Elige la opción con artículos correctos.",
      "questions": [
        {
          "question": "[[Is|¿Es]] [[she|ella]] (_____) [[nurse|enfermera]] [[or|o]] (_____) [[architect|arquitecta]]?",
          "options": ["[[a / an|una / una]]", "[[an / a|una / una]]", "[[a / a|una / una]]"],
          "correctAnswer": 0,
          "explanation": "A antes de consonante (nurse), an antes de vocal (architect)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e49.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e50",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Present Simple Actions",
    "difficulty": "medium",
    "transcript": "We don't drink coffee at night.",
    "content": {
      "title": "Bebidas nocturnas",
      "instructions": "Ordena la negación.",
      "correctSentence": "[[We|Nosotros]] [[don't|no]] [[drink|bebemos]] [[coffee|café]] [[at|por la]] [[night|noche]].",
      "words": ["[[night|noche]].", "[[at|por la]]", "[[coffee|café]]", "[[drink|bebemos]]", "[[don't|no]]", "[[We|Nosotros]]"],
      "explanation": "Hábitos de salud."
    },
    "audioUrl": "audio/a1/unit-10/e50.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "My name is Peter. I am thirty years old. I am an engineer and I work in a big city. I have a small family: my wife and two daughters. My daughters are six and eight years old. We have a green house with a small garden. Every morning, I drink coffee and read the newspaper. I am very happy with my life.",
    "content": {
      "title": "La Vida de Peter",
      "instructions": "Lee sobre Peter y responde.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[Peter's|de Peter]] [[job|trabajo]]?",
          "options": ["[[Engineer|Ingeniero]]", "[[Teacher|Profesor]]", "[[Doctor|Médico]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'I am an engineer'."
        },
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[daughters|hijas]] [[does|hace]] [[he|él]] [[have|tener]]?",
          "options": ["[[Two|Dos]]", "[[Six|Seis]]", "[[Eight|Ocho]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'two daughters'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e51.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "This is our classroom. There are fifteen students and one teacher. We have many books and notebooks. I have a red pen and my friend has a blue pencil. We study English from Monday to Friday. We like our school very much. It is big and white.",
    "content": {
      "title": "Nuestra Clase",
      "instructions": "Lee sobre la clase y responde.",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[students|estudiantes]] [[are|hay]] [[in|en]] [[the|la]] [[room|habitación]]?",
          "options": ["[[Fifteen|Quince]]", "[[Ten|Diez]]", "[[Twenty|Veinte]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'There are fifteen students'."
        },
        {
          "question": "[[What|De qué]] [[color|color]] [[is|es]] [[the|la]] [[school|escuela]]?",
          "options": ["[[White|Blanca]]", "[[Red|Roja]]", "[[Blue|Azul]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'It is big and white'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e52.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "My mother is forty-five years old. She is a nurse and she works in a hospital. She is very tall and has brown hair. She likes to read books at night. She has a red car. My father is a chef. He works in a restaurant. We are a busy family.",
    "content": {
      "title": "Mi Madre",
      "instructions": "Lee sobre la madre y responde.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[her|su]] [[job|trabajo]]?",
          "options": ["[[Nurse|Enfermera]]", "[[Chef|Cocinera]]", "[[Teacher|Profesora]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'She is a nurse'."
        },
        {
          "question": "[[Where|Dónde]] [[does|hace]] [[she|ella]] [[work|trabajar]]?",
          "options": ["[[In a hospital|En un hospital]]", "[[In a restaurant|En un restaurante]]", "[[At home|En casa]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'works in a hospital'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e53.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "Hello, my name is Anna. I am from Italy. I am twenty-two years old. I study art in a small school. I have five colors: red, blue, green, yellow, and black. I draw a big blue bird. My teacher likes my drawing. I love my classes.",
    "content": {
      "title": "El Dibujo de Anna",
      "instructions": "Lee sobre Anna y responde.",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[Anna|Anna]] [[from|de]]?",
          "options": ["[[Italy|Italia]]", "[[Spain|España]]", "[[Mexico|México]]"],
          "correctAnswer": 0,
          "explanation": "Anna dice: 'I am from Italy'."
        },
        {
          "question": "[[What|Qué]] [[does|hace]] [[she|ella]] [[draw|dibujar]]?",
          "options": ["[[A blue bird|Un pájaro azul]]", "[[A red house|Una casa roja]]", "[[A green tree|Un árbol verde]]"],
          "correctAnswer": 0,
          "explanation": "Anna dice: 'I draw a big blue bird'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e54.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "This is my brother, Tom. He is twenty-five. He is a police officer. He works at the police station. He is very strong and tall. He has a black uniform and a fast car. He works every day but not on Sundays. On Sundays, he sleeps a lot.",
    "content": {
      "title": "Mi Hermano Tom",
      "instructions": "Lee sobre Tom y responde.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[Tom's|de Tom]] [[job|trabajo]]?",
          "options": ["[[Police officer|Oficial de policía]]", "[[Driver|Conductor]]", "[[Doctor|Médico]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'He is a police officer'."
        },
        {
          "question": "[[When|Cuándo]] [[does|hace]] [[he|él]] [[sleep|dormir]] [[a|un]] [[lot|poco]]?",
          "options": ["[[On Sundays|Los domingos]]", "[[Every day|Cada día]]", "[[On Mondays|Los lunes]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'On Sundays, he sleeps a lot'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e55.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "We have a big family dinner on Saturdays. My grandmother is seventy years old and she is a very good chef. She makes eighty small cakes for us. My grandfather is seventy-five and he drinks tea. We talk and play games. We don't use our phones. We are very happy.",
    "content": {
      "title": "Cena con los Abuelos",
      "instructions": "Lee sobre la cena y responde.",
      "questions": [
        {
          "question": "[[How|Qué]] [[old|vieja]] [[is|es]] [[the|la]] [[grandmother|abuela]]?",
          "options": ["[[Seventy|Setenta]]", "[[Eighty|Ochenta]]", "[[Seventy-five|Setenta y cinco]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'My grandmother is seventy years old'."
        },
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[cakes|pasteles]] [[does|hace]] [[she|ella]] [[make|hacer]]?",
          "options": ["[[Eighty|Ochenta]]", "[[Seventy|Setenta]]", "[[Seventy-five|Setenta y cinco]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'She makes eighty small cakes'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e56.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e57",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "Look at my desk. I have three blue pens, four pencils, and one big notebook. I also have an eraser and a ruler. My desk is small and brown. I study here every afternoon. Today I study English and math. I have a lot of work.",
    "content": {
      "title": "Mi Escritorio de Estudio",
      "instructions": "Lee sobre el escritorio y responde.",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[pencils|lápices]] [[are|hay]] [[on|en]] [[the|el]] [[desk|escritorio]]?",
          "options": ["[[Four|Cuatro]]", "[[Three|Tres]]", "[[One|Uno]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'four pencils'."
        },
        {
          "question": "[[When|Cuándo]] [[does|hace]] [[the|la]] [[person|persona]] [[study|estudiar]]?",
          "options": ["[[Every afternoon|Cada tarde]]", "[[Every morning|Cada mañana]]", "[[On weekends|Fines de semana]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'I study here every afternoon'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e57.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "There is a new shop in my street. It is very big and red. They have ninety different shirts and fifty pairs of shoes. The shop is open from nine to nine. I work there on Saturdays. I am a salesperson. I help many people every day.",
    "content": {
      "title": "La Nueva Tienda",
      "instructions": "Lee sobre la tienda y responde.",
      "questions": [
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[shirts|camisas]] [[does|hace]] [[the|la]] [[shop|tienda]] [[have|tener]]?",
          "options": ["[[Ninety|Noventa]]", "[[Fifty|Cincuenta]]", "[[Nine|Nueve]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'ninety different shirts'."
        },
        {
          "question": "[[What|Cuál]] [[is|es]] [[the|el]] [[person's|de la persona]] [[job|trabajo]]?",
          "options": ["[[Salesperson|Vendedor]]", "[[Manager|Gerente]]", "[[Teacher|Profesor]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'I am a salesperson'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e58.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "My best friend is Luis. He is from Spain. He is twenty-eight years old. He is a driver. He works in a big office. He drinks tea every morning and eats a sandwich for lunch. He has a black cat. Luis is very nice and happy.",
    "content": {
      "title": "Mi Amigo Luis",
      "instructions": "Lee sobre Luis y responde.",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[Luis|Luis]] [[from|de]]?",
          "options": ["[[Spain|España]]", "[[Italy|Italia]]", "[[Mexico|México]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'He is from Spain'."
        },
        {
          "question": "[[What|Qué]] [[does|hace]] [[he|él]] [[eat|comer]] [[for|para el]] [[lunch|almuerzo]]?",
          "options": ["[[A sandwich|Un sándwich]]", "[[Pizza|Pizza]]", "[[Apple|Manzana]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'eats a sandwich for lunch'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e59.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "Welcome to our farm! We have ten cows and sixty chickens. My father is a farmer and he works very hard. Every morning, we eat eggs and drink milk. We have a big white dog. It is very quiet here. We love our animals and our home.",
    "content": {
      "title": "En la Granja",
      "instructions": "Lee sobre la granja y responde.",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[chickens|pollos]] [[are|hay]] [[on|en]] [[the|la]] [[farm|granja]]?",
          "options": ["[[Sixty|Sesenta]]", "[[Ten|Diez]]", "[[One hundred|Cien]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'sixty chickens'."
        },
        {
          "question": "[[What|Qué]] [[do|aux]] [[they|ellos]] [[drink|beber]] [[every|cada]] [[morning|mañana]]?",
          "options": ["[[Milk|Leche]]", "[[Water|Agua]]", "[[Coffee|Café]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'drink milk'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e60.mp3",
    "topicName": "Reading"
  }
];
