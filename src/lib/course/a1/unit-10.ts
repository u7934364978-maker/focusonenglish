import { Exercise } from '@/lib/exercise-generator';

export const UNIT_10_EXERCISES: Exercise[] = [
  // ==========================================
  // VOCABULARY REVIEW: MODULE 1 (1-10)
  // ==========================================
  {
    "id": "a1-u10-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "[[Student|Estudiante]]. [[Teacher|Profesor]]. [[Spain|España]]. [[Happy|Feliz]]. [[Sad|Triste]]. [[Brother|Hermano]]. [[Sister|Hermana]]. [[Red|Rojo]]. [[Blue|Azul]]. [[Doctor|Médico]].",
    "content": {
      "title": "Repaso de Vocabulario",
      "instructions": "Repasa palabras clave de las unidades 1 a 9.",
      "items": [
        { "front": "[[Student|Estudiante]]", "back": "Student" },
        { "front": "[[Teacher|Profesor/a]]", "back": "Teacher" },
        { "front": "[[Spain|España]]", "back": "Spain" },
        { "front": "[[Happy|Feliz]]", "back": "Happy" },
        { "front": "[[Sad|Triste]]", "back": "Sad" },
        { "front": "[[Brother|Hermano]]", "back": "Brother" },
        { "front": "[[Sister|Hermana]]", "back": "Sister" },
        { "front": "[[Red|Rojo]]", "back": "Red" },
        { "front": "[[Blue|Azul]]", "back": "Blue" },
        { "front": "[[Doctor|Médico]]", "back": "Doctor" }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "medium",
    "transcript": "[[She|Ella]] [[is|es]] [[from|de]] [[France|Francia]]. [[She|Ella]] [[is|es]] [[French|francesa]].",
    "content": {
      "title": "Nacionalidades",
      "instructions": "Elige la nacionalidad correcta.",
      "options": ["[[France|Francia]]", "[[French|francesa]]", "[[Spanish|española]]"],
      "correctAnswer": 1,
      "explanation": "French es la nacionalidad de Francia."
    },
    "audioUrl": "audio/a1/unit-10/e2.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Emotions",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[am|estoy]] [[tired|cansado]]. [[I|Yo]] [[need|necesito]] [[sleep|dormir]].",
    "content": {
      "title": "Emociones",
      "instructions": "Selecciona el estado emocional lógico.",
      "options": ["[[happy|feliz]]", "[[tired|cansado]]", "[[angry|enfadado]]"],
      "correctAnswer": 1,
      "explanation": "Si necesitas dormir, estás cansado (tired)."
    },
    "audioUrl": "audio/a1/unit-10/e3.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[mother's|de mi madre]] [[sister|hermana]] [[is|es]] [[my|mi]] [[aunt|tía]].",
    "content": {
      "title": "Familia",
      "instructions": "Identifica al pariente.",
      "options": ["[[uncle|tío]]", "[[aunt|tía]]", "[[cousin|prima]]"],
      "correctAnswer": 1,
      "explanation": "Aunt es la hermana de tu madre o padre."
    },
    "audioUrl": "audio/a1/unit-10/e4.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e5",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "medium",
    "transcript": "[[Where|Dónde]] [[is|está]] [[my|mi]] [[pen|bolígrafo]]? [[It|Está]] [[is|está]] [[on|sobre]] [[the|la]] [[table|mesa]].",
    "content": {
      "title": "Objetos",
      "instructions": "Elige el objeto de escritura.",
      "options": ["[[chair|silla]]", "[[table|mesa]]", "[[pen|bolígrafo]]"],
      "correctAnswer": 2,
      "explanation": "Pen es un bolígrafo."
    },
    "audioUrl": "audio/a1/unit-10/e5.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e6",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "medium",
    "transcript": "[[There|Hay]] [[are|hay]] [[thirty-five|treinta y cinco]] [[students|estudiantes]] [[here|aquí]].",
    "content": {
      "title": "Números",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[There|Hay]] [[are|hay]] [[thirty-five|treinta y cinco]] [[students|estudiantes]] [[here|aquí]].",
      "words": ["[[here|aquí]].", "[[students|estudiantes]]", "[[thirty-five|treinta y cinco]]", "[[are|hay]]", "[[There|Hay]]"],
      "explanation": "There are + Número + Sustantivo."
    },
    "audioUrl": "audio/a1/unit-10/e6.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e7",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Colors",
    "difficulty": "medium",
    "transcript": "[[The|El]] [[sky|cielo]] [[is|es]] [[blue|azul]] [[today|hoy]].",
    "content": {
      "title": "Colores",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[The|El]] [[sky|cielo]] [[is|es]] [[blue|azul]] [[today|hoy]].",
      "words": ["[[today|hoy]].", "[[blue|azul]]", "[[is|es]]", "[[sky|cielo]]", "[[The|El]]"],
      "explanation": "Sujeto + Verbo + Adjetivo."
    },
    "audioUrl": "audio/a1/unit-10/e7.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e8",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "medium",
    "transcript": "[[A|Un]] [[nurse|enfermero]] [[works|trabaja]] [[in|en]] [[a|un]] [[hospital|hospital]].",
    "content": {
      "title": "Trabajos",
      "instructions": "Selecciona la profesión médica.",
      "options": ["[[pilot|piloto]]", "[[nurse|enfermero]]", "[[waiter|camarero]]"],
      "correctAnswer": 1,
      "explanation": "La enfermería es una profesión de hospital."
    },
    "audioUrl": "audio/a1/unit-10/e8.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[father's|de mi padre]] [[father|padre]] [[is|es]] [[my|mi]] [[grandfather|abuelo]].",
    "content": {
      "title": "Relaciones",
      "instructions": "Elige el pariente correcto.",
      "options": ["[[grandfather|abuelo]]", "[[brother|hermano]]", "[[son|hijo]]"],
      "correctAnswer": 0,
      "explanation": "El abuelo es el padre de tu padre."
    },
    "audioUrl": "audio/a1/unit-10/e9.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "medium",
    "transcript": "[[Rome|Roma]] [[is|está]] [[in|en]] [[Italy|Italia]].",
    "content": {
      "title": "Países",
      "instructions": "Identifica el país.",
      "options": ["[[Germany|Alemania]]", "[[Italy|Italia]]", "[[Japan|Japón]]"],
      "correctAnswer": 1,
      "explanation": "Roma es la capital de Italia."
    },
    "audioUrl": "audio/a1/unit-10/e10.mp3",
    "topicName": "Vocabulary"
  },

  // ==========================================
  // GRAMMAR REVIEW: MODULE 1 (11-20)
  // ==========================================
  {
    "id": "a1-u10-e11",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "transcript": "[[Are|¿Estás]] [[you|tú]] [[ready|listo]]? [[Yes|Sí]], [[I|yo]] [[am|estoy]].",
    "content": {
      "title": "Verbo To Be",
      "instructions": "Elige la respuesta corta correcta.",
      "options": ["[[Yes, I'm|sí, soy]]", "[[Yes, I is|sí, es]]", "[[Yes, I am|sí, lo estoy]]"],
      "correctAnswer": 2,
      "explanation": "En respuestas cortas afirmativas, no se usa contracción."
    },
    "audioUrl": "audio/a1/unit-10/e11.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles",
    "difficulty": "medium",
    "transcript": "[[This|Esta]] [[is|es]] [[an|una]] [[orange|naranja]].",
    "content": {
      "title": "Artículos",
      "instructions": "Selecciona el artículo correcto.",
      "options": ["[[a|una]]", "[[an|una]]", "[[the|la]]"],
      "correctAnswer": 1,
      "explanation": "Usamos 'an' porque 'orange' empieza por vocal."
    },
    "audioUrl": "audio/a1/unit-10/e12.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e13",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "transcript": "[[They|Ellos]] [[are|son]] [[not|no]] [[English|ingleses]].",
    "content": {
      "title": "Negación",
      "instructions": "Completa con el verbo to be en plural.",
      "questions": [
        {
          "question": "[[They|Ellos]] (_____) [[not|no]] [[English|ingleses]].",
          "correctAnswer": "are",
          "explanation": "They utiliza 'are'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e13.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e14",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "[[What|Cuál]] [[is|es]] [[your|el de tu]] [[sister's|hermana]] [[job|trabajo]]?",
    "content": {
      "title": "Posesivo",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[What|Cuál]] [[is|es]] [[your|el de tu]] [[sister's|hermana]] [[job|trabajo]]?",
      "words": ["[[job|trabajo]]?", "[[sister's|hermana]]", "[[your|el de tu]]", "[[is|es]]", "[[What|Cuál]]"],
      "explanation": "What is + Posesivo + Sustantivo."
    },
    "audioUrl": "audio/a1/unit-10/e14.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e15",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Whose?",
    "difficulty": "medium",
    "transcript": "[[Whose|De quién]] [[car|coche]] [[is|es]] [[it|esto]]? [[It|Es]] [[is|es]] [[the|del]] [[doctor's|médico]].",
    "content": {
      "title": "Preguntas de posesión",
      "instructions": "Elige la palabra interrogativa.",
      "options": ["[[Who|Quién]]", "[[Which|Cuál]]", "[[Whose|De quién]]"],
      "correctAnswer": 2,
      "explanation": "Whose se usa para preguntar por el dueño."
    },
    "audioUrl": "audio/a1/unit-10/e15.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Plurals",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[have|tengo]] [[two|dos]] [[watches|relojes]].",
    "content": {
      "title": "Plurales",
      "instructions": "Elige la forma plural correcta.",
      "options": ["[[watchs|incorrecta]]", "[[watches|relojes]]", "[[watch|reloj]]"],
      "correctAnswer": 1,
      "explanation": "Las palabras terminadas en 'ch' añaden 'es' para el plural."
    },
    "audioUrl": "audio/a1/unit-10/e16.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e17",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Demonstratives",
    "difficulty": "medium",
    "transcript": "[[These|Estos]] [[books|libros]] [[are|son]] [[very|muy]] [[old|viejos]].",
    "content": {
      "title": "Demostrativos",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[These|Estos]] [[books|libros]] [[are|son]] [[very|muy]] [[old|viejos]].",
      "words": ["[[old|viejos]].", "[[very|muy]]", "[[are|son]]", "[[books|libros]]", "[[These|Estos]]"],
      "explanation": "These (plural cercano) + Sustantivo plural + are."
    },
    "audioUrl": "audio/a1/unit-10/e17.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Questions",
    "difficulty": "medium",
    "transcript": "[[How|Cómo]] [[are|estás]] [[you|tú]]? [[I|Yo]] [[am|estoy]] [[fine|bien]], [[thanks|gracias]].",
    "content": {
      "title": "Preguntas básicas",
      "instructions": "Elige la pregunta correcta para el estado de ánimo.",
      "options": ["[[Who are you|¿quién eres?]]", "[[How are you|¿cómo estás?]]", "[[Where are you|¿dónde estás?]]"],
      "correctAnswer": 1,
      "explanation": "How are you? es la pregunta estándar de saludo."
    },
    "audioUrl": "audio/a1/unit-10/e18.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e19",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "medium",
    "transcript": "[[Is|¿Es]] [[she|ella]] [[married|casada]]? [[No|No]], [[she|ella]] [[isn't|no lo es]].",
    "content": {
      "title": "Pregunta cerrada",
      "instructions": "Completa la pregunta con el verbo to be.",
      "questions": [
        {
          "question": "(_____) [[she|ella]] [[married|casada]]?",
          "correctAnswer": "Is",
          "explanation": "Is para la tercera persona singular."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e19.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Adjectives",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[car|coche]] [[is|es]] [[red|rojo]]. [[It|Es]] [[is|es]] [[a|un]] [[red|rojo]] [[car|coche]].",
    "content": {
      "title": "Orden de adjetivos",
      "instructions": "Elige la posición correcta del adjetivo.",
      "options": ["[[car red|incorrecta]]", "[[red car|coche rojo]]", "[[a red|incorrecta]]"],
      "correctAnswer": 1,
      "explanation": "En inglés, el adjetivo siempre va antes del sustantivo."
    },
    "audioUrl": "audio/a1/unit-10/e20.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // GENERAL REVIEW & PRACTICE (21-50)
  // ==========================================
  {
    "id": "a1-u10-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[Where|De dónde]] [[is|es]] [[he|él]] [[from|de]]? [[He|Él]] [[is|es]] [[from|de]] [[London|Londres]].",
    "content": {
      "title": "Repaso: Origen",
      "instructions": "Elige la respuesta correcta.",
      "options": ["[[He is from London|Es de Londres]]", "[[He am from London|incorrecta]]", "[[He is London|incorrecta]]"],
      "correctAnswer": 0,
      "explanation": "Sujeto + is + from + Lugar."
    },
    "audioUrl": "audio/a1/unit-10/e21.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e22",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[am|tengo]] [[not|no]] [[twenty|veinte]] [[years|años]] [[old|de edad]].",
    "content": {
      "title": "Repaso: Edad negativa",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[I|Yo]] [[am|tengo]] [[not|no]] [[twenty|veinte]] [[years|años]] [[old|de edad]].",
      "words": ["[[old|de edad]].", "[[years|años]]", "[[twenty|veinte]]", "[[not|no]]", "[[am|tengo]]", "[[I|Yo]]"],
      "explanation": "I + am + not + Edad."
    },
    "audioUrl": "audio/a1/unit-10/e22.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[Who|Quién]] [[is|es]] [[that|aquél]] [[man|hombre]]? [[He|Él]] [[is|es]] [[my|mi]] [[boss|jefe]].",
    "content": {
      "title": "Repaso: Personas",
      "instructions": "Elige la palabra interrogativa.",
      "options": ["[[What|Qué]]", "[[Who|Quién]]", "[[Where|Dónde]]"],
      "correctAnswer": 1,
      "explanation": "Who se usa para personas."
    },
    "audioUrl": "audio/a1/unit-10/e23.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e24",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[The|La]] [[apple|manzana]] [[is|es]] [[green|verde]].",
    "content": {
      "title": "Repaso: Colores",
      "instructions": "Escribe el color verde.",
      "questions": [
        {
          "question": "[[The|La]] [[apple|manzana]] [[is|es]] (_____).",
          "correctAnswer": "green",
          "explanation": "Green es verde."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e24.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[Is|¿Hay]] [[there|hay]] [[a|un]] [[book|libro]] [[on|sobre]] [[the|la]] [[chair|silla]]?",
    "content": {
      "title": "Repaso: Existencia",
      "instructions": "Elige el orden correcto de la pregunta.",
      "options": ["[[There is|afirmación]]", "[[Is there|pregunta]]", "[[Are there|plural]]"],
      "correctAnswer": 1,
      "explanation": "Para preguntar si hay algo (singular), usamos 'Is there'."
    },
    "audioUrl": "audio/a1/unit-10/e25.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e26",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[sister|hermana]] [[is|es]] [[a|una]] [[very|muy]] [[good|buena]] [[student|estudiante]].",
    "content": {
      "title": "Repaso: Adjetivos",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[My|Mi]] [[sister|hermana]] [[is|es]] [[a|una]] [[very|muy]] [[good|buena]] [[student|estudiante]].",
      "words": ["[[student|estudiante]].", "[[good|buena]]", "[[very|muy]]", "[[a|una]]", "[[is|es]]", "[[sister|hermana]]", "[[My|Mi]]"],
      "explanation": "Sujeto + is + a + adverbio + adjetivo + sustantivo."
    },
    "audioUrl": "audio/a1/unit-10/e26.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[How|Cómo]] [[do|se]] [[you|tú]] [[spell|deletreas]] [[your|tu]] [[name|nombre]]?",
    "content": {
      "title": "Repaso: Alfabeto",
      "instructions": "Elige el verbo para deletrear.",
      "options": ["[[write|escribir]]", "[[spell|deletrear]]", "[[read|leer]]"],
      "correctAnswer": 1,
      "explanation": "Spell es el verbo que usamos para preguntar por las letras de una palabra."
    },
    "audioUrl": "audio/a1/unit-10/e27.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e28",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[They|Ellos]] [[are|están]] [[very|muy]] [[happy|felices]] [[today|hoy]].",
    "content": {
      "title": "Repaso: Sentimientos",
      "instructions": "Completa con el verbo to be plural.",
      "questions": [
        {
          "question": "[[They|Ellos]] (_____) [[very|muy]] [[happy|felices]] [[today|hoy]].",
          "correctAnswer": "are",
          "explanation": "They are."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e28.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[Whose|De quién]] [[is|es]] [[this|este]] [[blue|azul]] [[pen|bolígrafo]]? [[It's|Es]] [[the|del]] [[teacher|profesor]](_____) [[pen|bolígrafo]].",
    "content": {
      "title": "Repaso: Posesivo",
      "instructions": "Elige la forma posesiva correcta.",
      "options": ["[[teachers|plural]]", "[[teacher's|del profesor]]", "[[teacher is|incorrecta]]"],
      "correctAnswer": 1,
      "explanation": "Usamos 's para indicar posesión singular."
    },
    "audioUrl": "audio/a1/unit-10/e29.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e30",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[Those|Aquellos]] [[are|son]] [[my|mis]] [[parents|padres]].",
    "content": {
      "title": "Repaso: Demostrativos lejanos",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[Those|Aquellos]] [[are|son]] [[my|mis]] [[parents|padres]].",
      "words": ["[[parents|padres]].", "[[my|mis]]", "[[are|son]]", "[[Those|Aquellos]]"],
      "explanation": "Those (plural lejano) + are."
    },
    "audioUrl": "audio/a1/unit-10/e30.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[am|soy]] [[an|un]] [[engineer|ingeniero]].",
    "content": {
      "title": "Repaso: Profesiones",
      "instructions": "Elige el artículo correcto.",
      "options": ["[[a|un]]", "[[an|un]]", "[[the|el]]"],
      "correctAnswer": 1,
      "explanation": "Engineer empieza por vocal."
    },
    "audioUrl": "audio/a1/unit-10/e31.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e32",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[What|Cuál]] [[is|es]] [[your|tu]] [[phone|teléfono]] [[number|número]]?",
    "content": {
      "title": "Repaso: Información personal",
      "instructions": "Elige la palabra interrogativa.",
      "options": ["[[How|Cómo]]", "[[What|Cuál]]", "[[Who|Quién]]"],
      "correctAnswer": 1,
      "explanation": "Usamos What para preguntar por el número de teléfono."
    },
    "audioUrl": "audio/a1/unit-10/e32.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e33",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[She|Ella]] [[has|tiene]] [[long|largo]] [[blonde|rubio]] [[hair|pelo]].",
    "content": {
      "title": "Repaso: Descripciones",
      "instructions": "Escribe el color rubio.",
      "questions": [
        {
          "question": "[[She|Ella]] [[has|tiene]] [[long|largo]] (_____) [[hair|pelo]].",
          "correctAnswer": "blonde",
          "explanation": "Blonde es rubio."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e33.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e34",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[Is|¿Es]] [[he|él]] [[a|un]] [[police|policía]] [[officer|oficial]]?",
    "content": {
      "title": "Repaso: Preguntas de trabajo",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is|¿Es]] [[he|él]] [[a|un]] [[police|policía]] [[officer|oficial]]?",
      "words": ["[[officer|oficial]]?", "[[police|policía]]", "[[a|un]]", "[[he|él]]", "[[Is|¿Es]]"],
      "explanation": "Verbo + Sujeto + Profesión."
    },
    "audioUrl": "audio/a1/unit-10/e34.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[mother|madre]] [[is|es]] [[fifty-two|cincuenta y dos]] [[years|años]] [[old|de edad]].",
    "content": {
      "title": "Repaso: Números y edad",
      "instructions": "Elige el número correcto.",
      "options": ["[[forty-two|42]]", "[[fifty-two|52]]", "[[sixty-two|62]]"],
      "correctAnswer": 1,
      "explanation": "Fifty-two es 52."
    },
    "audioUrl": "audio/a1/unit-10/e35.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e36",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[We|Nosotros]] [[are|somos]] [[from|de]] [[England|Inglaterra]]. [[We|Nosotros]] [[are|somos]] [[British|británicos]].",
    "content": {
      "title": "Repaso: Nacionalidades",
      "instructions": "Selecciona la nacionalidad.",
      "options": ["[[English|inglés]]", "[[British|británico]]", "[[American|americano]]"],
      "correctAnswer": 1,
      "explanation": "British es la nacionalidad general del Reino Unido/Inglaterra."
    },
    "audioUrl": "audio/a1/unit-10/e36.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e37",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[The|El]] [[cat|gato]] [[is|está]] [[under|debajo de]] [[the|la]] [[chair|silla]].",
    "content": {
      "title": "Repaso: Preposiciones",
      "instructions": "Escribe la preposición 'debajo de'.",
      "questions": [
        {
          "question": "[[The|El]] [[cat|gato]] [[is|está]] (_____) [[the|la]] [[chair|silla]].",
          "correctAnswer": "under",
          "explanation": "Under significa debajo de."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e37.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e38",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[This|Esta]] [[is|es]] [[not|no]] [[my|mi]] [[room|habitación]].",
    "content": {
      "title": "Repaso: Negativo",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[This|Esta]] [[is|es]] [[not|no]] [[my|mi]] [[room|habitación]].",
      "words": ["[[room|habitación]].", "[[my|mi]]", "[[not|no]]", "[[is|es]]", "[[This|Esta]]"],
      "explanation": "Demostrativo + is + not + posesivo + sustantivo."
    },
    "audioUrl": "audio/a1/unit-10/e38.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[Are|¿Están]] [[they|ellos]] [[sad|tristes]]? [[No|No]], [[they|ellos]] [[aren't|no lo están]].",
    "content": {
      "title": "Repaso: Respuestas cortas",
      "instructions": "Elige la respuesta negativa corta.",
      "options": ["[[No, they no|incorrecta]]", "[[No, they are not|correcto]]", "[[No, they aren't|correcto (más común)]]"],
      "correctAnswer": 2,
      "explanation": "Aren't es la contracción estándar de 'are not'."
    },
    "audioUrl": "audio/a1/unit-10/e39.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e40",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[have|tengo]] [[a|un]] [[brother|hermano]]. [[His|Su]] [[name|nombre]] [[is|es]] [[Paul|Paul]].",
    "content": {
      "title": "Repaso: Adjetivos posesivos",
      "instructions": "Elige el adjetivo posesivo masculino.",
      "options": ["[[Her|Su (de ella)]]", "[[His|Su (de él)]]", "[[Your|Tu]]"],
      "correctAnswer": 1,
      "explanation": "His se usa cuando el poseedor es masculino (el hermano)."
    },
    "audioUrl": "audio/a1/unit-10/e40.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e41",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[She|Ella]] [[has|tiene]] [[a|una]] [[sister|hermana]]. [[Her|Su]] [[name|nombre]] [[is|es]] [[Mary|Mary]].",
    "content": {
      "title": "Repaso: Posesivos",
      "instructions": "Escribe el posesivo para ella.",
      "questions": [
        {
          "question": "(_____) [[name|nombre]] [[is|es]] [[Mary|Mary]].",
          "correctAnswer": "Her",
          "explanation": "Her es el posesivo de ella."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e41.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[Where|Dónde]] [[is|está]] [[the|la]] [[box|caja]]? [[It|Está]] [[is|está]] [[behind|detrás de]] [[the|la]] [[door|puerta]].",
    "content": {
      "title": "Repaso: Preposiciones",
      "instructions": "Elige la preposición de lugar.",
      "options": ["[[behind|detrás de]]", "[[between|entre]]", "[[in|en]]"],
      "correctAnswer": 0,
      "explanation": "Behind significa detrás de."
    },
    "audioUrl": "audio/a1/unit-10/e42.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e43",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[Are|¿Son]] [[you|ustedes]] [[good|buenos]] [[friends|amigos]]?",
    "content": {
      "title": "Repaso: Plurales",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Are|¿Son]] [[you|ustedes]] [[good|buenos]] [[friends|amigos]]?",
      "words": ["[[friends|amigos]]?", "[[good|buenos]]", "[[you|ustedes]]", "[[Are|¿Son]]"],
      "explanation": "Are + you + adjetivo + sustantivo plural."
    },
    "audioUrl": "audio/a1/unit-10/e43.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[The|El]] [[price|precio]] [[is|es]] [[forty|cuarenta]] [[euros|euros]].",
    "content": {
      "title": "Repaso: Números y precios",
      "instructions": "Elige el número correcto.",
      "options": ["[[fourteen|14]]", "[[forty|40]]", "[[four|4]]"],
      "correctAnswer": 1,
      "explanation": "Forty es 40."
    },
    "audioUrl": "audio/a1/unit-10/e44.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e45",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[am|estoy]] [[very|muy]] (_____). [[I|Yo]] [[want|quiero]] [[water|agua]].",
    "content": {
      "title": "Repaso: Estados",
      "instructions": "Escribe la palabra para sediento.",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|estoy]] [[very|muy]] (_____).",
          "correctAnswer": "thirsty",
          "explanation": "Thirsty significa sediento."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e45.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e46",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[grandfather|abuelo]] [[is|tiene]] [[seventy-eight|setenta y ocho]] [[years|años]] [[old|de edad]].",
    "content": {
      "title": "Repaso: Números complejos",
      "instructions": "Elige el número correcto.",
      "options": ["[[sixty-eight|68]]", "[[seventy-eight|78]]", "[[eighty-seven|87]]"],
      "correctAnswer": 1,
      "explanation": "Seventy-eight es 78."
    },
    "audioUrl": "audio/a1/unit-10/e46.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e47",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[Is|¿Está]] [[the|el]] [[cat|gato]] [[under|debajo de]] [[the|la]] [[table|mesa]]?",
    "content": {
      "title": "Repaso: Preguntas de lugar",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is|¿Está]] [[the|el]] [[cat|gato]] [[under|debajo de]] [[the|la]] [[table|mesa]]?",
      "words": ["[[table|mesa]]?", "[[the|la]]", "[[under|debajo de]]", "[[cat|gato]]", "[[Is|¿Está]]"],
      "explanation": "Is + Sujeto + Preposición + Lugar."
    },
    "audioUrl": "audio/a1/unit-10/e47.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e48",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[What|Cuál]] [[is|es]] [[his|su]] [[nationality|nacionalidad]]? [[He|Él]] [[is|es]] [[German|alemán]].",
    "content": {
      "title": "Repaso: Nacionalidades",
      "instructions": "Elige la nacionalidad.",
      "options": ["[[Germany|Alemania]]", "[[German|alemán]]", "[[Germans|alemanes]]"],
      "correctAnswer": 1,
      "explanation": "German es el adjetivo de nacionalidad singular."
    },
    "audioUrl": "audio/a1/unit-10/e48.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[Those|Aquellas]] [[are|son]] [[my|mis]] [[new|nuevas]] [[shoes|zapatos]].",
    "content": {
      "title": "Repaso: Demostrativos",
      "instructions": "Elige el demostrativo plural lejano.",
      "options": ["[[These|estos]]", "[[That|aquello (singular)]]", "[[Those|aquellos]]"],
      "correctAnswer": 2,
      "explanation": "Those se usa para plurales lejanos."
    },
    "audioUrl": "audio/a1/unit-10/e49.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e50",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Review",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[cousin|primo]] [[is|es]] [[a|un]] [[police|policía]] [[officer|oficial]].",
    "content": {
      "title": "Repaso: Profesiones",
      "instructions": "Completa con el artículo indefinido.",
      "questions": [
        {
          "question": "[[My|Mi]] [[cousin|primo]] [[is|es]] (_____) [[police|policía]] [[officer|oficial]].",
          "correctAnswer": "a",
          "explanation": "Police empieza por consonante."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e50.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // READING COMPREHENSION (51-60)
  // Standard two-phase structure: Text slide then Question slides
  // ==========================================

  // TEXT 1: MEETING THE NEIGHBORS
  {
    "id": "a1-u10-e51",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Hello|Hola]]. [[We|Nosotros]] [[are|somos]] [[the|los]] [[Millers|Miller]]. [[We|Nosotros]] [[are|somos]] [[your|vuestros]] [[new|nuevos]] [[neighbors|vecinos]]. [[My|Mi]] [[name|nombre]] [[is|es]] [[George|George]]. [[I|Yo]] [[am|soy]] [[an|un]] [[engineer|ingeniero]]. [[This|Esta]] [[is|es]] [[my|mi]] [[wife|esposa]], [[Sarah|Sarah]]. [[She|Ella]] [[is|es]] [[a|una]] [[nurse|enfermera]]. [[We|Nosotros]] [[are|somos]] [[from|de]] [[Canada|Canadá]]. [[We|Nosotros]] [[have|tenemos]] [[two|dos]] [[children|hijos]], [[a|un]] [[son|hijo]] [[and|y]] [[a|una]] [[daughter|hija]]. [[Their|Sus]] [[names|nombres]] [[are|son]] [[Ben|Ben]] [[and|y]] [[Lucy|Lucy]]. [[Ben|Ben]] [[is|tiene]] [[ten|diez]] [[and|y]] [[Lucy|Lucy]] [[is|tiene]] [[eight|ocho]]. [[We|Nosotros]] [[are|estamos]] [[very|muy]] [[happy|felices]] [[to|de]] [[be|estar]] [[here|aquí]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|Los]] [[New|Nuevos]] [[Neighbors|Vecinos]]",
      "instructions": "[[Read|Lee]] [[about|sobre]] [[the|la]] [[Miller|Miller]] [[family|familia]].",
      "questions": [
        {
          "question": "[[Hello|Hola]]. [[We|Nosotros]] [[are|somos]] [[the|los]] [[Millers|Miller]]. [[We|Nosotros]] [[are|somos]] [[your|vuestros]] [[new|nuevos]] [[neighbors|vecinos]]. [[My|Mi]] [[name|nombre]] [[is|es]] [[George|George]]. [[I|Yo]] [[am|soy]] [[an|un]] [[engineer|ingeniero]]. [[This|Esta]] [[is|es]] [[my|mi]] [[wife|esposa]], [[Sarah|Sarah]]. [[She|Ella]] [[is|es]] [[a|una]] [[nurse|enfermera]]. [[We|Nosotros]] [[are|somos]] [[from|de]] [[Canada|Canadá]]. [[We|Nosotros]] [[have|tenemos]] [[two|dos]] [[children|hijos]], [[a|un]] [[son|hijo]] [[and|y]] [[a|una]] [[daughter|hija]]. [[Their|Sus]] [[names|nombres]] [[are|son]] [[Ben|Ben]] [[and|y]] [[Lucy|Lucy]]. [[Ben|Ben]] [[is|tiene]] [[ten|diez]] [[and|y]] [[Lucy|Lucy]] [[is|tiene]] [[eight|ocho]]. [[We|Nosotros]] [[are|estamos]] [[very|muy]] [[happy|felices]] [[to|de]] [[be|estar]] [[here|aquí]].",
          "options": ["[[I|Yo]] [[have|he]] [[read|leído]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click|Haz clic]] [[to|para]] [[continue|continuar]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[Where|De dónde]] [[is|es]] [[the|la]] [[Miller|Miller]] [[family|familia]] [[from|de]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Origin|Origen]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[the|la]] [[Miller|Miller]] [[family|familia]] [[from|de]]?",
          "options": ["[[The USA|EE.UU.]]", "[[England|Inglaterra]]", "[[Canada|Canadá]]"],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[We|Nosotros]] [[are|somos]] [[from|de]] [[Canada|Canadá]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[What|Cuál]] [[is|es]] [[George's|de George]] [[job|trabajo]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Profession|Profesión]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[George's|de George]] [[job|trabajo]]?",
          "options": ["[[He is an engineer|Es ingeniero]]", "[[He is a doctor|Es médico]]", "[[He is a nurse|Es enfermero]]"],
          "correctAnswer": 0,
          "explanation": "[[George|George]] [[says|dice]]: \"[[I|Yo]] [[am|soy]] [[an|un]] [[engineer|ingeniero]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Lucy|Lucy]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Age|Edad]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Lucy|Lucy]]?",
          "options": ["[[Ten|Diez]]", "[[Two|Dos]]", "[[Eight|Ocho]]"],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[Lucy|Lucy]] [[is|tiene]] [[eight|ocho]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },

  // TEXT 2: THE SCHOOL DAY
  {
    "id": "a1-u10-e55",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Today|Hoy]] [[is|es]] [[Monday|lunes]]. [[The|La]] [[school|escuela]] [[is|está]] [[very|muy]] [[busy|concurrida]]. [[There|Hay]] [[are|hay]] [[forty-two|cuarenta y dos]] [[classrooms|aulas]] [[in|en]] [[this|este]] [[building|edificio]]. [[The|El]] [[principal's|del director]] [[office|oficina]] [[is|está]] [[on|en]] [[the|el]] [[second|segundo]] [[floor|piso]]. [[Mr.|Sr.]] [[White|White]] [[is|es]] [[the|el]] [[principal|director]]. [[He|Él]] [[is|es]] [[sixty-four|sesenta y cuatro]] [[years|años]] [[old|de edad]]. [[All|Todos]] [[the|los]] [[teachers|profesores]] [[are|están]] [[in|en]] [[their|sus]] [[rooms|habitaciones]]. [[The|Los]] [[students|estudiantes]] [[are|están]] [[happy|felices]] [[to|de]] [[learn|aprender]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|El]] [[School|Escolar]] [[Day|Día]]",
      "instructions": "[[Read|Lee]] [[about|sobre]] [[the|la]] [[school|escuela]].",
      "questions": [
        {
          "question": "[[Today|Hoy]] [[is|es]] [[Monday|lunes]]. [[The|La]] [[school|escuela]] [[is|está]] [[very|muy]] [[busy|concurrida]]. [[There|Hay]] [[are|hay]] [[forty-two|cuarenta y dos]] [[classrooms|aulas]] [[in|en]] [[this|este]] [[building|edificio]]. [[The|El]] [[principal's|del director]] [[office|oficina]] [[is|está]] [[on|en]] [[the|el]] [[second|segundo]] [[floor|piso]]. [[Mr.|Sr.]] [[White|White]] [[is|es]] [[the|el]] [[principal|director]]. [[He|Él]] [[is|es]] [[sixty-four|sesenta y cuatro]] [[years|años]] [[old|de edad]]. [[All|Todos]] [[the|los]] [[teachers|profesores]] [[are|están]] [[in|en]] [[their|sus]] [[rooms|habitaciones]]. [[The|Los]] [[students|estudiantes]] [[are|están]] [[happy|felices]] [[to|de]] [[learn|aprender]].",
          "options": ["[[I|Yo]] [[have|he]] [[read|leído]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click|Haz clic]] [[to|para]] [[continue|continuar]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[How|Cuántas]] [[many|muchas]] [[classrooms|aulas]] [[are|hay]] [[there|allí]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Classrooms|Aulas]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[classrooms|aulas]] [[are|hay]] [[there|allí]]?",
          "options": ["[[Twenty-four|24]]", "[[Sixty-four|64]]", "[[Forty-two|42]]"],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[There|Hay]] [[are|hay]] [[forty-two|cuarenta y dos]] [[classrooms|aulas]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e57",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[Where|Dónde]] [[is|está]] [[the|la]] [[principal's|del director]] [[office|oficina]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Location|Ubicación]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|está]] [[the|la]] [[principal's|del director]] [[office|oficina]]?",
          "options": ["[[Second floor|Segundo piso]]", "[[First floor|Primer piso]]", "[[Third floor|Tercer piso]]"],
          "correctAnswer": 0,
          "explanation": "[[The|El]] [[text|texto]] [[mentions|menciona]]: \"[[on|en]] [[the|el]] [[second|segundo]] [[floor|piso]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[How|Qué edad]] [[old|tiene]] [[is|tiene]] [[Mr.|Sr.]] [[White|White]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Principal's|del director]] [[Age|Edad]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Qué edad]] [[old|tiene]] [[is|tiene]] [[Mr.|Sr.]] [[White|White]]?",
          "options": ["[[Sixty|60]]", "[[Forty-two|42]]", "[[Sixty-four|64]]"],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[He|Él]] [[is|es]] [[sixty-four|sesenta y cuatro]] [[years|años]] [[old|de edad]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },

  // TEXT 3: A NEW FRIEND
  {
    "id": "a1-u10-e59",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[My|Mi]] [[new|nuevo]] [[friend|amigo]] [[is|es]] [[Japanese|japonés]]. [[His|Su]] [[name|nombre]] [[is|es]] [[Kenji|Kenji]]. [[Kenji|Kenji]] [[is|es]] [[very|muy]] [[tall|alto]] [[and|y]] [[thin|delgado]]. [[He|Él]] [[is|tiene]] [[thirty-one|treinta y uno]] [[years|años]] [[old|de edad]]. [[He|Él]] [[is|es]] [[a|un]] [[police|policía]] [[officer|oficial]] [[in|en]] [[Tokyo|Tokio]]. [[His|Su]] [[favorite|favorito]] [[color|color]] [[is|es]] [[yellow|amarillo]]. [[We|Nosotros]] [[are|estamos]] [[very|muy]] [[good|buenos]] [[friends|amigos]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[A|Un]] [[New|Nuevo]] [[Friend|Amigo]]",
      "instructions": "[[Read|Lee]] [[about|sobre]] [[Kenji|Kenji]].",
      "questions": [
        {
          "question": "[[My|Mi]] [[new|nuevo]] [[friend|amigo]] [[is|es]] [[Japanese|japonés]]. [[His|Su]] [[name|nombre]] [[is|es]] [[Kenji|Kenji]]. [[Kenji|Kenji]] [[is|es]] [[very|muy]] [[tall|alto]] [[and|y]] [[thin|delgado]]. [[He|Él]] [[is|tiene]] [[thirty-one|treinta y uno]] [[years|años]] [[old|de edad]]. [[He|Él]] [[is|es]] [[a|un]] [[police|policía]] [[officer|oficial]] [[in|en]] [[Tokyo|Tokio]]. [[His|Su]] [[favorite|favorito]] [[color|color]] [[is|es]] [[yellow|amarillo]]. [[We|Nosotros]] [[are|estamos]] [[very|muy]] [[good|buenos]] [[friends|amigos]].",
          "options": ["[[I|Yo]] [[have|he]] [[read|leído]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click|Haz clic]] [[to|para]] [[continue|continuar]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[What|Cuál]] [[is|es]] [[Kenji's|de Kenji]] [[favorite|favorito]] [[color|color]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Favorite|Favorito]] [[Color|Color]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[Kenji's|de Kenji]] [[favorite|favorito]] [[color|color]]?",
          "options": ["[[Blue|Azul]]", "[[Green|Verde]]", "[[Yellow|Amarillo]]"],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[His|Su]] [[favorite|favorito]] [[color|color]] [[is|es]] [[yellow|amarillo]]\"."
        }
      ]
    },
    "topicName": "Reading"
  }
];