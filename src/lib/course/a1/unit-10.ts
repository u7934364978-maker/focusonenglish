import { Exercise } from '@/lib/exercise-generator';

export const UNIT_10_EXERCISES: Exercise[] = [
  {
    "id": "a1-u10-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "easy",
    "transcript": "Review. Question. Answer. Test. Correct. Wrong",
    "content": {
      "title": "Vocabulario Clave",
      "instructions": "Aprende las palabras más importantes de la unidad.",
      "items": [
        { "front": "[[Review|Repaso]]", "back": "Repaso" },
        { "front": "[[Question|Pregunta]]", "back": "Pregunta" },
        { "front": "[[Answer|Respuesta]]", "back": "Respuesta" },
        { "front": "[[Test|Prueba]]", "back": "Prueba" },
        { "front": "[[Correct|Correcto]]", "back": "Correcto" },
        { "front": "[[Wrong|Incorrecto]]", "back": "Incorrecto" }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: To Be",
    "difficulty": "easy",
    "transcript": "I am from Spain.",
    "content": {
      "title": "Verbo To Be",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[from|de]] [[Spain|España]].",
          "options": ["[[am|soy]]", "[[is|es]]", "[[are|son]]"],
          "correctAnswer": 0,
          "explanation": "Con 'I' usamos 'am'."
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
    "topic": "Grammar: To Be",
    "difficulty": "easy",
    "transcript": "She is a teacher.",
    "content": {
      "title": "Verbo To Be",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[She|Ella]] _______ [[a|una]] [[teacher|profesora]].",
          "options": ["[[am|soy]]", "[[is|es]]", "[[are|son]]"],
          "correctAnswer": 1,
          "explanation": "Con 'She' usamos 'is'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e3.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: To Be",
    "difficulty": "easy",
    "transcript": "They are students.",
    "content": {
      "title": "Verbo To Be",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[They|Ellos]] _______ [[students|estudiantes]].",
          "options": ["[[am|soy]]", "[[is|es]]", "[[are|son]]"],
          "correctAnswer": 2,
          "explanation": "Con 'They' usamos 'are'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e4.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e5",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Family",
    "difficulty": "easy",
    "transcript": "My mother is happy.",
    "content": {
      "title": "Vocabulario: Familia",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[My|Mi]] [[mother|madre]] _______ [[happy|feliz]].",
          "options": ["[[is|es]]", "[[are|son]]", "[[am|soy]]"],
          "correctAnswer": 0,
          "explanation": "Mother es 'she', por lo que usamos 'is'."
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
    "topic": "Vocabulary: Numbers",
    "difficulty": "easy",
    "transcript": "I have two sisters.",
    "content": {
      "title": "Números y Cantidad",
      "instructions": "Completa con el número correcto.",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] [[two|dos]] (2) _______.",
          "options": ["[[sister|hermana]]", "[[sisters|hermanas]]"],
          "correctAnswer": 1,
          "explanation": "Usamos el plural 'sisters' para el número 2."
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
    "topic": "Grammar: Have/Has",
    "difficulty": "easy",
    "transcript": "He has a blue car.",
    "content": {
      "title": "Have o Has",
      "instructions": "Elige la forma correcta.",
      "questions": [
        {
          "question": "[[He|Él]] _______ [[a|un]] [[blue|azul]] [[car|coche]].",
          "options": ["[[have|tener]]", "[[has|tiene]]"],
          "correctAnswer": 1,
          "explanation": "Con he/she/it usamos 'has'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e7.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e8",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Days",
    "difficulty": "easy",
    "transcript": "Today is Monday.",
    "content": {
      "title": "Días de la Semana",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[Today|Hoy]] [[is|es]] _______.",
          "options": ["[[Monday|Lunes]]", "[[Morning|Mañana]]", "[[Month|Mes]]"],
          "correctAnswer": 0,
          "explanation": "Monday es un día de la semana."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e8.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Present Simple",
    "difficulty": "medium",
    "transcript": "I get up at 7 AM.",
    "content": {
      "title": "Rutina Diaria",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[at|a las]] 7 AM.",
          "options": ["[[get up|levantarse]]", "[[gets up|se levanta]]", "[[getting up|levantándose]]"],
          "correctAnswer": 0,
          "explanation": "Con 'I' no añadimos -s al verbo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e9.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Present Simple",
    "difficulty": "medium",
    "transcript": "She works in an office.",
    "content": {
      "title": "Rutina Diaria",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[She|Ella]] _______ [[in|en]] [[an|una]] [[office|oficina]].",
          "options": ["[[work|trabajar]]", "[[works|trabaja]]", "[[working|trabajando]]"],
          "correctAnswer": 1,
          "explanation": "Con 'She' añadimos -s al verbo en presente simple."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e10.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e11",
    "type": "flashcard",
    "level": "A1",
    "topic": "Vocabulary: Home",
    "difficulty": "easy",
    "transcript": "Kitchen. Living room. Bedroom. Bathroom. Garden. Garage.",
    "content": {
      "title": "La Casa",
      "instructions": "Repasa las partes de la casa.",
      "items": [
        { "front": "[[Kitchen|Cocina]]", "back": "Cocina" },
        { "front": "[[Living room|Salón]]", "back": "Salón" },
        { "front": "[[Bedroom|Dormitorio]]", "back": "Dormitorio" },
        { "front": "[[Bathroom|Baño]]", "back": "Baño" },
        { "front": "[[Garden|Jardín]]", "back": "Jardín" },
        { "front": "[[Garage|Garaje]]", "back": "Garaje" }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e11.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: There is/are",
    "difficulty": "medium",
    "transcript": "There is a sofa in the living room.",
    "content": {
      "title": "There is / There are",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "_______ [[a|un]] [[sofa|sofá]] [[in|en]] [[the|el]] [[living|estar]] [[room|habitación]].",
          "options": ["[[There is|Hay (singular)]]", "[[There are|Hay (plural)]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'There is' para un solo objeto."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e12.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e13",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: There is/are",
    "difficulty": "medium",
    "transcript": "There are two beds in the bedroom.",
    "content": {
      "title": "There is / There are",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "_______ [[two|dos]] [[beds|camas]] [[in|en]] [[the|el]] [[bedroom|dormitorio]].",
          "options": ["[[There is|Hay (singular)]]", "[[There are|Hay (plural)]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'There are' para varios objetos."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e13.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Food",
    "difficulty": "easy",
    "transcript": "I would like an apple, please.",
    "content": {
      "title": "Comida",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] [[would|aux]] [[like|gustaría]] [[an|una]] _______, [[please|por favor]].",
          "options": ["[[apple|manzana]]", "[[bread|pan]]", "[[milk|leche]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'an' antes de 'apple' porque empieza por vocal."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e14.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e15",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Some/Any",
    "difficulty": "medium",
    "transcript": "Do you have any milk?",
    "content": {
      "title": "Some o Any",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[Do|Aux]] [[you|tú]] [[have|tienes]] _______ [[milk|leche]]?",
          "options": ["[[some|algo de]]", "[[any|alguna/algo de]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'any' para preguntas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e15.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Hobbies",
    "difficulty": "easy",
    "transcript": "I love swimming.",
    "content": {
      "title": "Aficiones",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] [[love|amo]] _______.",
          "options": ["[[swim|nadar]]", "[[swimming|nadando/la natación]]", "[[swims|nada]]"],
          "correctAnswer": 1,
          "explanation": "Después de 'love' usamos el verbo con -ing."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e16.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Can",
    "difficulty": "easy",
    "transcript": "Can you play the piano?",
    "content": {
      "title": "Habilidades (Can)",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "_______ [[you|tú]] [[play|tocar]] [[the|el]] [[piano|piano]]?",
          "options": ["[[Do|Aux]]", "[[Can|Puedes]]", "[[Are|Eres]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'Can' para preguntar por habilidades."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e17.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Shopping",
    "difficulty": "easy",
    "transcript": "How much is this shirt?",
    "content": {
      "title": "De Compras",
      "instructions": "Completa la pregunta sobre el precio.",
      "questions": [
        {
          "question": "[[How|Cómo]] _______ [[is|es]] [[this|esta]] [[shirt|camisa]]?",
          "options": ["[[many|muchos]]", "[[much|mucho]]", "[[old|viejo]]"],
          "correctAnswer": 1,
          "explanation": "'How much' se usa para preguntar el precio."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e18.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e19",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Demonstratives",
    "difficulty": "medium",
    "transcript": "These shoes are very expensive.",
    "content": {
      "title": "Demostrativos",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "_______ [[shoes|zapatos]] [[are|son]] [[very|muy]] [[expensive|caros]].",
          "options": ["[[This|Este]]", "[[These|Estos]]"],
          "correctAnswer": 1,
          "explanation": "'These' se usa para plural cerca."
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
    "topic": "Vocabulary: Jobs",
    "difficulty": "easy",
    "transcript": "A dentist fixes teeth.",
    "content": {
      "title": "Profesiones",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[A|Un]] _______ [[fixes|arregla]] [[teeth|dientes]].",
          "options": ["[[doctor|médico]]", "[[dentist|dentista]]", "[[chef|cocinero]]"],
          "correctAnswer": 1,
          "explanation": "Los dentistas se encargan de los dientes."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e20.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e21",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "My name is Peter and I am from London.",
    "content": {
      "title": "Presentaciones",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[My|Mi]] [[name|nombre]] [[is|es]] [[Peter|Peter]] [[and|y]] [[I|yo]] [[am|soy]] [[from|de]] [[London|Londres]].",
      "words": ["[[Peter|Peter]]", "[[am|soy]]", "[[and|y]]", "[[name|nombre]]", "[[from|de]]", "[[is|es]]", "[[I|yo]]", "[[London|Londres]].", "[[My|Mi]]"],
      "explanation": "Estructura básica de presentación."
    },
    "audioUrl": "audio/a1/unit-10/e21.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e22",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "She works in a small restaurant.",
    "content": {
      "title": "Trabajo",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[She|Ella]] [[works|trabaja]] [[in|en]] [[a|un]] [[small|pequeño]] [[restaurant|restaurante]].",
      "words": ["[[restaurant|restaurante]].", "[[small|pequeño]]", "[[works|trabaja]]", "[[in|en]]", "[[She|Ella]]", "[[a|un]]"],
      "explanation": "Sujeto + Verbo + Lugar."
    },
    "audioUrl": "audio/a1/unit-10/e22.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e23",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "Do you like playing football?",
    "content": {
      "title": "Gustos",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[Do|Aux]] [[you|tú]] [[like|gusta]] [[playing|jugar]] [[football|fútbol]]?",
      "words": ["[[playing|jugar]]", "[[football|fútbol]]?", "[[you|tú]]", "[[Do|Aux]]", "[[like|gusta]]"],
      "explanation": "Pregunta con 'Do' y 'like + -ing'."
    },
    "audioUrl": "audio/a1/unit-10/e23.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e24",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "There is some water in the fridge.",
    "content": {
      "title": "Comida",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[There|Hay]] [[is|está]] [[some|algo de]] [[water|agua]] [[in|en]] [[the|la]] [[fridge|nevera]].",
      "words": ["[[in|en]]", "[[water|agua]]", "[[fridge|nevera]].", "[[the|la]]", "[[some|algo de]]", "[[There|Hay]]", "[[is|está]]"],
      "explanation": "Uso de 'some' con sustantivos incontables."
    },
    "audioUrl": "audio/a1/unit-10/e24.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e25",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "This dress is very beautiful.",
    "content": {
      "title": "Ropa",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[This|Este]] [[dress|vestido]] [[is|es]] [[very|muy]] [[beautiful|hermoso]].",
      "words": ["[[beautiful|hermoso]].", "[[dress|vestido]]", "[[is|es]]", "[[This|Este]]", "[[very|muy]]"],
      "explanation": "Demostrativo + Sustantivo + be + Adjetivo."
    },
    "audioUrl": "audio/a1/unit-10/e25.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Colors",
    "difficulty": "easy",
    "transcript": "My car is red.",
    "content": {
      "title": "Colores",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[My|Mi]] [[car|coche]] [[is|es]] _______.",
          "options": ["[[red|rojo]]", "[[read|leer]]", "[[ride|montar]]"],
          "correctAnswer": 0,
          "explanation": "Red es un color."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e26.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Prepositions",
    "difficulty": "medium",
    "transcript": "The book is on the table.",
    "content": {
      "title": "Preposiciones de Lugar",
      "instructions": "Elige la preposición correcta.",
      "questions": [
        {
          "question": "[[The|El]] [[book|libro]] [[is|está]] _______ [[the|la]] [[table|mesa]].",
          "options": ["[[in|dentro]]", "[[on|sobre]]", "[[under|debajo]]"],
          "correctAnswer": 1,
          "explanation": "On significa 'sobre' o 'encima de'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e27.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e28",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Body",
    "difficulty": "easy",
    "transcript": "I have two hands.",
    "content": {
      "title": "Partes del Cuerpo",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] [[two|dos]] _______.",
          "options": ["[[hands|manos]]", "[[heads|cabezas]]", "[[mouths|bocas]]"],
          "correctAnswer": 0,
          "explanation": "Tenemos dos manos."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e28.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Adverbs",
    "difficulty": "medium",
    "transcript": "I always drink coffee in the morning.",
    "content": {
      "title": "Adverbios de Frecuencia",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[drink|bebo]] [[coffee|café]] [[in|en]] [[the|la]] [[morning|mañana]].",
          "options": ["[[always|siempre]]", "[[never|nunca]]", "[[usually|usualmente]]"],
          "correctAnswer": 0,
          "explanation": "Always indica que algo ocurre el 100% de las veces."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e29.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e30",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Weather",
    "difficulty": "easy",
    "transcript": "It is sunny today.",
    "content": {
      "title": "El Clima",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[It|Ello]] [[is|está]] _______ [[today|hoy]].",
          "options": ["[[sunny|soleado]]", "[[sunday|domingo]]", "[[soon|pronto]]"],
          "correctAnswer": 0,
          "explanation": "Sunny describe un día con sol."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e30.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e31",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "What time do you go to bed?",
    "content": {
      "title": "La Hora",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[What|Qué]] [[time|hora]] [[do|aux]] [[you|tú]] [[go|vas]] [[to|a]] [[bed|cama]]?",
      "words": ["[[time|hora]]", "[[go|vas]]", "[[What|Qué]]", "[[you|tú]]", "[[to|a]]", "[[bed|cama]]?", "[[do|aux]]"],
      "explanation": "Pregunta estándar para saber la hora de una actividad."
    },
    "audioUrl": "audio/a1/unit-10/e31.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e32",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "There are some apples on the table.",
    "content": {
      "title": "Comida",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[There|Hay]] [[are|son]] [[some|algunas]] [[apples|manzanas]] [[on|en]] [[the|la]] [[table|mesa]].",
      "words": ["[[apples|manzanas]]", "[[on|en]]", "[[the|la]]", "[[table|mesa]].", "[[are|son]]", "[[There|Hay]]", "[[some|algunas]]"],
      "explanation": "Uso de 'some' en oraciones afirmativas plurales."
    },
    "audioUrl": "audio/a1/unit-10/e32.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e33",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "He doesn't like eating vegetables.",
    "content": {
      "title": "Gustos",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[He|Él]] [[doesn't|no]] [[like|gusta]] [[eating|comer]] [[vegetables|verduras]].",
      "words": ["[[vegetables|verduras]].", "[[eating|comer]]", "[[doesn't|no]]", "[[He|Él]]", "[[like|gusta]]"],
      "explanation": "Negativo en presente simple con 'doesn't'."
    },
    "audioUrl": "audio/a1/unit-10/e33.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e34",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "I can speak English and Spanish.",
    "content": {
      "title": "Habilidades",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[I|Yo]] [[can|puedo]] [[speak|hablar]] [[English|inglés]] [[and|y]] [[Spanish|español]].",
      "words": ["[[English|inglés]]", "[[speak|hablar]]", "[[Spanish|español]].", "[[can|puedo]]", "[[and|y]]", "[[I|Yo]]"],
      "explanation": "Uso de 'can' para habilidades lingüísticas."
    },
    "audioUrl": "audio/a1/unit-10/e34.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e35",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "medium",
    "transcript": "How much are these black shoes?",
    "content": {
      "title": "Precios",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[How|Cómo]] [[much|mucho]] [[are|son]] [[these|estos]] [[black|negros]] [[shoes|zapatos]]?",
      "words": ["[[shoes|zapatos]]?", "[[much|mucho]]", "[[black|negros]]", "[[these|estos]]", "[[are|son]]", "[[How|Cómo]]"],
      "explanation": "Preguntando por el precio de objetos en plural."
    },
    "audioUrl": "audio/a1/unit-10/e35.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e36",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Transportation",
    "difficulty": "easy",
    "transcript": "I go to work by bus.",
    "content": {
      "title": "Transporte",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] [[go|voy]] [[to|a]] [[work|trabajar]] [[by|en]] _______.",
          "options": ["[[bus|autobús]]", "[[box|caja]]", "[[bed|cama]]"],
          "correctAnswer": 0,
          "explanation": "Bus es un medio de transporte común."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e36.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Object Pronouns",
    "difficulty": "medium",
    "transcript": "I love him.",
    "content": {
      "title": "Pronombres de Objeto",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] [[love|amo]] _______ ([[he|él]]).",
          "options": ["[[him|él]]", "[[he|él]]", "[[his|su]]"],
          "correctAnswer": 0,
          "explanation": "Him es el pronombre de objeto para 'he'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e37.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e38",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Places",
    "difficulty": "easy",
    "transcript": "I am in the park.",
    "content": {
      "title": "Lugares",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|estoy]] [[in|en]] [[the|el]] _______.",
          "options": ["[[park|parque]]", "[[pocket|bolsillo]]", "[[paper|papel]]"],
          "correctAnswer": 0,
          "explanation": "El parque es un lugar público."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e38.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Possessive 's",
    "difficulty": "medium",
    "transcript": "This is John's house.",
    "content": {
      "title": "Posesión ('s)",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[This|Esta]] [[is|es]] _______ [[house|casa]].",
          "options": ["[[John's|de John]]", "[[Johns|Johns]]", "[[John|John]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 's para indicar posesión."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e39.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e40",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Time",
    "difficulty": "easy",
    "transcript": "It is ten o'clock.",
    "content": {
      "title": "La Hora",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[It|Son]] [[is|las]] [[ten|diez]] _______.",
          "options": ["[[o'clock|en punto]]", "[[of clock|del reloj]]", "[[on clock|en reloj]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'o'clock' para horas en punto."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e40.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e41",
    "type": "flashcard",
    "level": "A1",
    "topic": "Vocabulary: Adjectives",
    "difficulty": "easy",
    "transcript": "Big. Small. Tall. Short. Happy. Sad. Hot. Cold.",
    "content": {
      "title": "Adjetivos Opuestos",
      "instructions": "Aprende adjetivos comunes.",
      "items": [
        { "front": "[[Big|Grande]]", "back": "Small" },
        { "front": "[[Tall|Alto]]", "back": "Short" },
        { "front": "[[Happy|Feliz]]", "back": "Sad" },
        { "front": "[[Hot|Caliente]]", "back": "Cold" }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e41.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Questions",
    "difficulty": "medium",
    "transcript": "Who is that man?",
    "content": {
      "title": "Palabras de Pregunta (Who)",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "_______ [[is|es]] [[that|ese]] [[man|hombre]]?",
          "options": ["[[Who|Quién]]", "[[What|Qué]]", "[[Where|Dónde]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'Who' para preguntar por personas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e42.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Questions",
    "difficulty": "medium",
    "transcript": "Why are you late?",
    "content": {
      "title": "Palabras de Pregunta (Why)",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "_______ [[are|estás]] [[you|tú]] [[late|tarde]]?",
          "options": ["[[Why|Por qué]]", "[[When|Cuándo]]", "[[How|Cómo]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'Why' para preguntar por razones."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e43.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar: Questions",
    "difficulty": "medium",
    "transcript": "When is your birthday?",
    "content": {
      "title": "Palabras de Pregunta (When)",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "_______ [[is|es]] [[your|tu]] [[birthday|cumpleaños]]?",
          "options": ["[[When|Cuándo]]", "[[Where|Dónde]]", "[[What|Qué]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'When' para preguntar por fechas u horarios."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e44.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e45",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary: Feelings",
    "difficulty": "easy",
    "transcript": "I am very tired.",
    "content": {
      "title": "Sentimientos",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|estoy]] [[very|muy]] _______.",
          "options": ["[[tired|cansado]]", "[[tree|árbol]]", "[[table|mesa]]"],
          "correctAnswer": 0,
          "explanation": "Tired describe cómo se siente alguien después de trabajar mucho."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e45.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e46",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "hard",
    "transcript": "My brother lives in a house near the beach.",
    "content": {
      "title": "Descripción",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[My|Mi]] [[brother|hermano]] [[lives|vive]] [[in|en]] [[a|una]] [[house|casa]] [[near|cerca de]] [[the|la]] [[beach|playa]].",
      "words": ["[[lives|vive]]", "[[beach|playa]].", "[[house|casa]]", "[[the|la]]", "[[near|cerca de]]", "[[brother|hermano]]", "[[in|en]]", "[[a|una]]", "[[My|Mi]]"],
      "explanation": "Estructura compleja con preposición de lugar."
    },
    "audioUrl": "audio/a1/unit-10/e46.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e47",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "hard",
    "transcript": "Do you want to come to my party?",
    "content": {
      "title": "Invitaciones",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[Do|Aux]] [[you|tú]] [[want|quieres]] [[to|a]] [[come|venir]] [[to|a]] [[my|mi]] [[party|fiesta]]?",
      "words": ["[[want|quieres]]", "[[to|a]]", "[[my|mi]]", "[[party|fiesta]]?", "[[come|venir]]", "[[to|a]]", "[[you|tú]]", "[[Do|Aux]]"],
      "explanation": "Invitando a alguien usando 'want to'."
    },
    "audioUrl": "audio/a1/unit-10/e47.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e48",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "hard",
    "transcript": "There isn't any milk in the kitchen.",
    "content": {
      "title": "Negación (Some/Any)",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[There|Hay]] [[isn't|no está]] [[any|nada de]] [[milk|leche]] [[in|en]] [[the|la]] [[kitchen|cocina]].",
      "words": ["[[any|nada de]]", "[[milk|leche]]", "[[isn't|no está]]", "[[kitchen|cocina]].", "[[in|en]]", "[[the|la]]", "[[There|Hay]]"],
      "explanation": "Uso de 'any' en oraciones negativas."
    },
    "audioUrl": "audio/a1/unit-10/e48.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e49",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "hard",
    "transcript": "What does your sister do for a living?",
    "content": {
      "title": "Trabajo",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[What|Qué]] [[does|aux]] [[your|tu]] [[sister|hermana]] [[do|hace]] [[for|para]] [[a|una]] [[living|vida]]?",
      "words": ["[[living|vida]]?", "[[What|Qué]]", "[[do|hace]]", "[[your|tu]]", "[[a|una]]", "[[for|para]]", "[[sister|hermana]]", "[[does|aux]]"],
      "explanation": "Pregunta idiomática para saber la profesión de alguien."
    },
    "audioUrl": "audio/a1/unit-10/e49.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e50",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "hard",
    "transcript": "I usually have breakfast at half past seven.",
    "content": {
      "title": "Rutina",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[I|Yo]] [[usually|usualmente]] [[have|tomo]] [[breakfast|desayuno]] [[at|a las]] [[half|media]] [[past|pasada las]] [[seven|siete]].",
      "words": ["[[seven|siete]].", "[[half|media]]", "[[at|a las]]", "[[usually|usualmente]]", "[[past|pasada las]]", "[[breakfast|desayuno]]", "[[I|Yo]]", "[[have|tomo]]"],
      "explanation": "Uso de adverbios de frecuencia y la hora."
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
    "transcript": "Hello, my name is David. I am twenty-five years old. I am an engineer and I work in a large company. I live in a modern apartment with my brother. In my free time, I like playing the guitar and going to the gym.",
    "content": {
      "title": "Lectura: La Vida de David",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es]] [[David's|de David]] [[job|trabajo]]? *\"Hello, my name is David. I am twenty-five years old. I am an engineer and I work in a large company. I live in a modern apartment with my brother. In my free time, I like playing the guitar and going to the gym.\"*",
          "options": ["[[Teacher|Profesor]]", "[[Engineer|Ingeniero]]", "[[Doctor|Médico]]"],
          "correctAnswer": 1,
          "explanation": "David dice: 'I am an engineer'."
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
    "transcript": "Hello, my name is David. I am twenty-five years old. I am an engineer and I work in a large company. I live in a modern apartment with my brother. In my free time, I like playing the guitar and going to the gym.",
    "content": {
      "title": "Lectura: La Vida de David",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "[[Who|Con quién]] [[does|aux]] [[he|él]] [[live|vive]] [[with|con]]? *\"Hello, my name is David. I am twenty-five years old. I am an engineer and I work in a large company. I live in a modern apartment with my brother. In my free time, I like playing the guitar and going to the gym.\"*",
          "options": ["[[His sister|Su hermana]]", "[[His brother|Su hermano]]", "[[His parents|Sus padres]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice: 'I live in a modern apartment with my brother'."
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
    "transcript": "Hello, my name is David. I am twenty-five years old. I am an engineer and I work in a large company. I live in a modern apartment with my brother. In my free time, I like playing the guitar and going to the gym.",
    "content": {
      "title": "Lectura: La Vida de David",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[does|aux]] [[he|él]] [[like|gusta]] [[doing|haciendo]] [[in|en]] [[his|su]] [[free|libre]] [[time|tiempo]]? *\"Hello, my name is David. I am twenty-five years old. I am an engineer and I work in a large company. I live in a modern apartment with my brother. In my free time, I like playing the guitar and going to the gym.\"*",
          "options": ["[[Cooking|Cocinar]]", "[[Playing the guitar|Tocar la guitarra]]", "[[Watching TV|Ver la tele]]"],
          "correctAnswer": 1,
          "explanation": "David menciona: 'I like playing the guitar'."
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
    "transcript": "Sarah is a chef. She works in a famous Italian restaurant. Every day, she gets up at nine o'clock. She has a big kitchen and three assistants. She loves making pasta and pizza. On Sundays, the restaurant is closed.",
    "content": {
      "title": "Lectura: Sarah la Chef",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[does|aux]] [[Sarah|Sarah]] [[work|trabaja]]? *\"Sarah is a chef. She works in a famous Italian restaurant. Every day, she gets up at nine o'clock. She has a big kitchen and three assistants. She loves making pasta and pizza. On Sundays, the restaurant is closed.\"*",
          "options": ["[[In a school|En una escuela]]", "[[In a restaurant|En un restaurante]]", "[[In a hospital|En un hospital]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice: 'She works in a famous Italian restaurant'."
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
    "transcript": "Sarah is a chef. She works in a famous Italian restaurant. Every day, she gets up at nine o'clock. She has a big kitchen and three assistants. She loves making pasta and pizza. On Sundays, the restaurant is closed.",
    "content": {
      "title": "Lectura: Sarah la Chef",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[time|hora]] [[does|aux]] [[she|ella]] [[get up|levantarse]]? *\"Sarah is a chef. She works in a famous Italian restaurant. Every day, she gets up at nine o'clock. She has a big kitchen and three assistants. She loves making pasta and pizza. On Sundays, the restaurant is closed.\"*",
          "options": ["[[7:00 AM|7:00 AM]]", "[[8:00 AM|8:00 AM]]", "[[9:00 AM|9:00 AM]]"],
          "correctAnswer": 2,
          "explanation": "El texto indica: 'she gets up at nine o'clock'."
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
    "transcript": "Sarah is a chef. She works in a famous Italian restaurant. Every day, she gets up at nine o'clock. She has a big kitchen and three assistants. She loves making pasta and pizza. On Sundays, the restaurant is closed.",
    "content": {
      "title": "Lectura: Sarah la Chef",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "[[Is|Está]] [[the|el]] [[restaurant|restaurante]] [[open|abierto]] [[on|el]] [[Sundays|domingos]]? *\"Sarah is a chef. She works in a famous Italian restaurant. Every day, she gets up at nine o'clock. She has a big kitchen and three assistants. She loves making pasta and pizza. On Sundays, the restaurant is closed.\"*",
          "options": ["[[Yes, it is|Sí, lo está]]", "[[No, it isn't|No, no lo está]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice: 'On Sundays, the restaurant is closed'."
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
    "transcript": "I am at the store. I want to buy some clothes. I see a blue jacket and two white shirts. The jacket is forty dollars. The shirts are fifteen dollars each. I have one hundred dollars in my bag.",
    "content": {
      "title": "Lectura: De Compras",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "[[How|Cuánto]] [[much|mucho]] [[is|cuesta]] [[the|la]] [[jacket|chaqueta]]? *\"I am at the store. I want to buy some clothes. I see a blue jacket and two white shirts. The jacket is forty dollars. The shirts are fifteen dollars each. I have one hundred dollars in my bag.\"*",
          "options": ["[[Fifteen dollars|15 dólares]]", "[[Forty dollars|40 dólares]]", "[[One hundred dollars|100 dólares]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice: 'The jacket is forty dollars'."
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
    "transcript": "I am at the store. I want to buy some clothes. I see a blue jacket and two white shirts. The jacket is forty dollars. The shirts are fifteen dollars each. I have one hundred dollars in my bag.",
    "content": {
      "title": "Lectura: De Compras",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[color|color]] [[are|son]] [[the|las]] [[shirts|camisas]]? *\"I am at the store. I want to buy some clothes. I see a blue jacket and two white shirts. The jacket is forty dollars. The shirts are fifteen dollars each. I have one hundred dollars in my bag.\"*",
          "options": ["[[Blue|Azul]]", "[[White|Blanco]]", "[[Black|Negro]]"],
          "correctAnswer": 1,
          "explanation": "El texto menciona: 'two white shirts'."
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
    "transcript": "I am at the store. I want to buy some clothes. I see a blue jacket and two white shirts. The jacket is forty dollars. The shirts are fifteen dollars each. I have one hundred dollars in my bag.",
    "content": {
      "title": "Lectura: De Compras",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "[[How|Cuánto]] [[much|mucho]] [[money|dinero]] [[do|aux]] [[I|yo]] [[have|tengo]]? *\"I am at the store. I want to buy some clothes. I see a blue jacket and two white shirts. The jacket is forty dollars. The shirts are fifteen dollars each. I have one hundred dollars in my bag.\"*",
          "options": ["[[Fifty dollars|50 dólares]]", "[[One hundred dollars|100 dólares]]", "[[Sixty dollars|60 dólares]]"],
          "correctAnswer": 1,
          "explanation": "El texto indica: 'I have one hundred dollars in my bag'."
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
    "transcript": "My house is big and clean. There are three bedrooms and two bathrooms. The kitchen is modern and has a large fridge. In the garden, there are many beautiful flowers. I love my house very much.",
    "content": {
      "title": "Lectura: Mi Casa",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[bathrooms|baños]] [[are|hay]] [[there|allí]]? *\"My house is big and clean. There are three bedrooms and two bathrooms. The kitchen is modern and has a large fridge. In the garden, there are many beautiful flowers. I love my house very much.\"*",
          "options": ["[[One|Uno]]", "[[Two|Dos]]", "[[Three|Tres]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice: 'There are three bedrooms and two bathrooms'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-10/e60.mp3",
    "topicName": "Reading"
  }
];
