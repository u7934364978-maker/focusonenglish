import { Exercise } from '@/lib/exercise-generator';

export const UNIT_5_EXERCISES: Exercise[] = [
  {
    "id": "a1-u5-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Rooms in the House",
    "difficulty": "easy",
    "transcript": "Living room. Kitchen. Bedroom. Bathroom. Dining room. Garden. Garage. Hall. Attic. Basement.",
    "content": {
      "title": "Vocabulario: Habitaciones",
      "instructions": "Aprende las partes de la casa.",
      "items": [
        { "front": "[[Living room|Salón]]", "back": "Salón" },
        { "front": "[[Kitchen|Cocina]]", "back": "Cocina" },
        { "front": "[[Bedroom|Dormitorio]]", "back": "Dormitorio" },
        { "front": "[[Bathroom|Baño]]", "back": "Baño" },
        { "front": "[[Dining room|Comedor]]", "back": "Comedor" },
        { "front": "[[Garden|Jardín]]", "back": "Jardín" },
        { "front": "[[Garage|Garaje]]", "back": "Garaje" },
        { "front": "[[Hall|Pasillo/Entrada]]", "back": "Pasillo/Entrada" },
        { "front": "[[Attic|Ático]]", "back": "Ático" },
        { "front": "[[Basement|Sótano]]", "back": "Sótano" }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e2",
    "type": "flashcard",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "Sofa. Table. Chair. Bed. Desk. Lamp. Cupboard. Wardrobe. Shelf. Mirror.",
    "content": {
      "title": "Vocabulario: Muebles",
      "instructions": "Aprende los nombres de los muebles comunes.",
      "items": [
        { "front": "[[Sofa|Sofá]]", "back": "Sofá" },
        { "front": "[[Table|Mesa]]", "back": "Mesa" },
        { "front": "[[Chair|Silla]]", "back": "Silla" },
        { "front": "[[Bed|Cama]]", "back": "Cama" },
        { "front": "[[Desk|Escritorio]]", "back": "Escritorio" },
        { "front": "[[Lamp|Lámpara]]", "back": "Lámpara" },
        { "front": "[[Cupboard|Armario de cocina]]", "back": "Armario de cocina" },
        { "front": "[[Wardrobe|Armario de ropa]]", "back": "Armario de ropa" },
        { "front": "[[Shelf|Estantería]]", "back": "Estantería" },
        { "front": "[[Mirror|Espejo]]", "back": "Espejo" }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e2.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "There is / There are",
    "difficulty": "easy",
    "transcript": "There is a sofa in the living room.",
    "content": {
      "title": "Habitaciones: El Salón",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[There|Allí]] (_____) [[a|un]] [[sofa|sofá]] [[in|en]] [[the|el]] [[living|estar]] [[room|habitación]].",
          "options": ["[[is|es/está (singular)]]", "[[are|son/están (plural)]]", "[[am|soy/estoy]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'There is' para un objeto singular (a sofa)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e3.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "There is / There are",
    "difficulty": "easy",
    "transcript": "There are four chairs in the kitchen.",
    "content": {
      "title": "Habitaciones: La Cocina",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[There|Allí]] (_____) [[four|cuatro]] [[chairs|sillas]] [[in|en]] [[the|la]] [[kitchen|cocina]].",
          "options": ["[[is|es/está]]", "[[are|son/están]]", "[[am|soy/estoy]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'There are' para objetos en plural (four chairs)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e4.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e5",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "The lamp is on the table.",
    "content": {
      "title": "Preposiciones: Sobre",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[The|La]] [[lamp|lámpara]] [[is|está]] [[on|sobre]] [[the|la]] [[table|mesa]].",
      "words": ["[[table|mesa]].", "[[is|está]]", "[[The|La]]", "[[on|sobre]]", "[[the|la]]", "[[lamp|lámpara]]"],
      "explanation": "Estructura: Sujeto + Verbo + Preposición + Lugar."
    },
    "audioUrl": "audio/a1/unit-5/e5.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions of Place",
    "difficulty": "easy",
    "transcript": "My cat is under the bed.",
    "content": {
      "title": "Preposiciones: Debajo",
      "instructions": "Elige la preposición correcta.",
      "questions": [
        {
          "question": "[[My|Mi]] [[cat|gato]] [[is|está]] (_____) [[the|la]] [[bed|cama]].",
          "options": ["[[on|sobre]]", "[[under|debajo de]]", "[[between|entre]]"],
          "correctAnswer": 1,
          "explanation": "'Under' significa debajo de."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e6.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e7",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "There isn't a TV in my bedroom.",
    "content": {
      "title": "Forma Negativa",
      "instructions": "Completa la oración negativa.",
      "questions": [
        {
          "question": "[[There|Allí]] (_____) [[a|un]] [[TV|televisor]] [[in|en]] [[my|mi]] [[bedroom|dormitorio]].",
          "options": ["[[is not|no hay]]", "[[are not|no hay (plural)]]", "[[no is|no es]]"],
          "correctAnswer": 0,
          "explanation": "'There is not' (o isn't) es la forma negativa singular."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e7.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e8",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Rooms",
    "difficulty": "easy",
    "transcript": "Is there a garden in your house?",
    "content": {
      "title": "Preguntas",
      "instructions": "Ordena las palabras para preguntar.",
      "correctSentence": "[[Is|Hay]] [[there|allí]] [[a|un]] [[garden|jardín]] [[in|en]] [[your|tu]] [[house|casa]]?",
      "words": ["[[a|un]]", "[[garden|jardín]]", "[[there|allí]]", "[[Is|Hay]]", "[[house|casa]]?", "[[in|en]]", "[[your|tu]]"],
      "explanation": "En preguntas, invertimos el orden: 'Is there...?'"
    },
    "audioUrl": "audio/a1/unit-5/e8.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "easy",
    "transcript": "The keys are in the drawer.",
    "content": {
      "title": "Preposiciones: Dentro",
      "instructions": "Elige la preposición correcta.",
      "questions": [
        {
          "question": "[[The|Las]] [[keys|llaves]] [[are|están]] (_____) [[the|el]] [[drawer|cajón]].",
          "options": ["[[on|sobre]]", "[[in|dentro de]]", "[[next to|al lado de]]"],
          "correctAnswer": 1,
          "explanation": "'In' se usa para algo que está dentro de un espacio."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e9.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e10",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "There are some books on the shelf.",
    "content": {
      "title": "Plural y Estantería",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[There|Hay]] [[are|allí (plural)]] [[some|algunos]] [[books|libros]] [[on|sobre]] [[the|la]] [[shelf|estantería]].",
      "words": ["[[some|algunos]]", "[[on|sobre]]", "[[are|allí (plural)]]", "[[books|libros]]", "[[the|la]]", "[[There|Hay]]", "[[shelf|estantería]]."],
      "explanation": "'There are' con 'some' para plurales afirmativos."
    },
    "audioUrl": "audio/a1/unit-5/e10.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e11",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Rooms",
    "difficulty": "easy",
    "transcript": "Where is the microwave? It's in the kitchen.",
    "content": {
      "title": "Electrodomésticos",
      "instructions": "¿Dónde está el microondas?",
      "questions": [
        {
          "question": "[[The|El]] [[microwave|microondas]] [[is|está]] [[in|en]] [[the|la]] (_____) .",
          "options": ["[[bathroom|baño]]", "[[kitchen|cocina]]", "[[bedroom|dormitorio]]"],
          "correctAnswer": 1,
          "explanation": "El microondas normalmente está en la cocina."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e11.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e12",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Rooms",
    "difficulty": "easy",
    "transcript": "My house is small but comfortable.",
    "content": {
      "title": "Describiendo la Casa",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[My|Mi]] [[house|casa]] [[is|es]] [[small|pequeña]] [[but|pero]] [[comfortable|cómoda]].",
      "words": ["[[comfortable|cómoda]].", "[[is|es]]", "[[small|pequeña]]", "[[My|Mi]]", "[[house|casa]]", "[[but|pero]]"],
      "explanation": "Uso de adjetivos para describir viviendas."
    },
    "audioUrl": "audio/a1/unit-5/e12.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e13",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "I sit on a chair.",
    "content": {
      "title": "Uso de Muebles",
      "instructions": "¿Dónde te sientas?",
      "questions": [
        {
          "question": "[[I|Yo]] [[sit|me siento]] [[on|en]] [[a|una]] (_____) .",
          "options": ["[[chair|silla]]", "[[bed|cama]]", "[[wardrobe|armario]]"],
          "correctAnswer": 0,
          "explanation": "Chair es la palabra para silla."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e13.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "There is / There are",
    "difficulty": "easy",
    "transcript": "Are there any windows in the hall?",
    "content": {
      "title": "Preguntas Plurales",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "(_____) [[there|allí]] [[any|alguna]] [[windows|ventanas]] [[in|en]] [[the|el]] [[hall|pasillo]]?",
          "options": ["[[Is|Hay (singular)]]", "[[Are|Hay (plural)]]", "[[Do|Hacer]]"],
          "correctAnswer": 1,
          "explanation": "'Are there any...?' se usa para preguntas en plural."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e14.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e15",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Rooms",
    "difficulty": "easy",
    "transcript": "The bathroom is next to the bedroom.",
    "content": {
      "title": "Ubicación de Habitaciones",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[The|El]] [[bathroom|baño]] [[is|está]] [[next|al lado]] [[to|de]] [[the|el]] [[bedroom|dormitorio]].",
      "words": ["[[bedroom|dormitorio]].", "[[bathroom|baño]]", "[[to|de]]", "[[next|al lado]]", "[[The|El]]", "[[is|está]]", "[[the|el]]"],
      "explanation": "'Next to' significa al lado de."
    },
    "audioUrl": "audio/a1/unit-5/e15.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "easy",
    "transcript": "The mirror is between the windows.",
    "content": {
      "title": "Preposiciones: Entre",
      "instructions": "Elige la preposición correcta.",
      "questions": [
        {
          "question": "[[The|El]] [[mirror|espejo]] [[is|está]] (_____) [[the|las]] [[windows|ventanas]].",
          "options": ["[[between|entre]]", "[[behind|detrás de]]", "[[under|debajo de]]"],
          "correctAnswer": 0,
          "explanation": "'Between' se usa para indicar algo entre dos cosas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e16.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "I sleep in a big bed.",
    "content": {
      "title": "El Dormitorio",
      "instructions": "¿Dónde duermes?",
      "questions": [
        {
          "question": "[[I|Yo]] [[sleep|duermo]] [[in|en]] [[a|una]] [[big|grande]] (_____) .",
          "options": ["[[desk|escritorio]]", "[[bed|cama]]", "[[table|mesa]]"],
          "correctAnswer": 1,
          "explanation": "Bed es la palabra para cama."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e17.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e18",
    "type": "sentence-building",
    "level": "A1",
    "topic": "There is / There are",
    "difficulty": "easy",
    "transcript": "There is a car in the garage.",
    "content": {
      "title": "El Garaje",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[There|Hay]] [[is|allí (singular)]] [[a|un]] [[car|coche]] [[in|en]] [[the|el]] [[garage|garaje]].",
      "words": ["[[garage|garaje]].", "[[a|un]]", "[[There|Hay]]", "[[in|en]]", "[[is|allí (singular)]]", "[[car|coche]]", "[[the|el]]"],
      "explanation": "Uso de 'There is' para objetos en el garaje."
    },
    "audioUrl": "audio/a1/unit-5/e18.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e19",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "There aren't any chairs in the garden.",
    "content": {
      "title": "Negativo Plural",
      "instructions": "Completa la oración negativa.",
      "questions": [
        {
          "question": "[[There|Allí]] (_____) [[any|ninguna]] [[chairs|sillas]] [[in|en]] [[the|el]] [[garden|jardín]].",
          "options": ["[[is not|no hay]]", "[[aren't|no hay (plural)]]", "[[don't have|no tienen]]"],
          "correctAnswer": 1,
          "explanation": "Aren't (are not) se usa para negaciones en plural."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e19.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e20",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "My clothes are in the wardrobe.",
    "content": {
      "title": "Ropa y Armario",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[My|Mis]] [[clothes|ropas]] [[are|están]] [[in|en]] [[the|el]] [[wardrobe|armario]].",
      "words": ["[[wardrobe|armario]].", "[[are|están]]", "[[clothes|ropas]]", "[[in|en]]", "[[the|el]]", "[[My|Mis]]"],
      "explanation": "'Wardrobe' es el armario específico para la ropa."
    },
    "audioUrl": "audio/a1/unit-5/e20.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Rooms",
    "difficulty": "easy",
    "transcript": "We have dinner in the dining room.",
    "content": {
      "title": "Cenar",
      "instructions": "¿Dónde cenamos?",
      "questions": [
        {
          "question": "[[We|Nosotros]] [[have|tenemos]] [[dinner|cena]] [[in|en]] [[the|el]] (_____) .",
          "options": ["[[dining room|comedor]]", "[[bathroom|baño]]", "[[garage|garaje]]"],
          "correctAnswer": 0,
          "explanation": "Dining room es la habitación para comer/cenar."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e21.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e22",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "easy",
    "transcript": "The dog is behind the sofa.",
    "content": {
      "title": "Preposiciones: Detrás",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[The|El]] [[dog|perro]] [[is|está]] [[behind|detrás de]] [[the|el]] [[sofa|sofá]].",
      "words": ["[[sofa|sofá]].", "[[behind|detrás de]]", "[[dog|perro]]", "[[The|El]]", "[[is|está]]", "[[the|el]]"],
      "explanation": "'Behind' significa detrás de algo."
    },
    "audioUrl": "audio/a1/unit-5/e22.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Rooms",
    "difficulty": "easy",
    "transcript": "Is there a basement in this building?",
    "content": {
      "title": "Sótano",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "(_____) [[there|allí]] [[a|un]] [[basement|sótano]] [[in|en]] [[this|este]] [[building|edificio]]?",
          "options": ["[[Is|Hay]]", "[[Are|Hay (plural)]]", "[[Do|Hacer]]"],
          "correctAnswer": 0,
          "explanation": "Pregunta singular sobre el sótano."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e23.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Adjectives",
    "difficulty": "easy",
    "transcript": "My new apartment is very modern.",
    "content": {
      "title": "Moderno",
      "instructions": "Elige el adjetivo correcto.",
      "questions": [
        {
          "question": "[[My|Mi]] [[new|nuevo]] [[apartment|apartamento]] [[is|es]] [[very|muy]] (_____) .",
          "options": ["[[modern|moderno]]", "[[old|viejo]]", "[[small|pequeño]]"],
          "correctAnswer": 0,
          "explanation": "Modern describe algo nuevo y actual."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e24.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e25",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "There is a beautiful mirror in the hall.",
    "content": {
      "title": "El Pasillo",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[There|Hay]] [[is|allí]] [[a|un]] [[beautiful|hermoso]] [[mirror|espejo]] [[in|en]] [[the|el]] [[hall|pasillo]].",
      "words": ["[[mirror|espejo]]", "[[hall|pasillo]].", "[[beautiful|hermoso]]", "[[is|allí]]", "[[in|en]]", "[[the|el]]", "[[There|Hay]]"],
      "explanation": "Combinación de adjetivos y There is."
    },
    "audioUrl": "audio/a1/unit-5/e25.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "easy",
    "transcript": "The desk is next to the window.",
    "content": {
      "title": "Ubicación del Escritorio",
      "instructions": "Completa con la preposición.",
      "questions": [
        {
          "question": "[[The|El]] [[desk|escritorio]] [[is|está]] (_____) [[the|la]] [[window|ventana]].",
          "options": ["[[on|sobre]]", "[[next to|al lado de]]", "[[under|debajo de]]"],
          "correctAnswer": 1,
          "explanation": "Next to es al lado de."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e26.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "We need a new table.",
    "content": {
      "title": "Necesidades",
      "instructions": "¿Qué necesitamos?",
      "questions": [
        {
          "question": "[[We|Nosotros]] [[need|necesitamos]] [[a|una]] [[new|nueva]] (_____) .",
          "options": ["[[table|mesa]]", "[[garden|jardín]]", "[[garage|garaje]]"],
          "correctAnswer": 0,
          "explanation": "Table es un mueble común necesario en casas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e27.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e28",
    "type": "sentence-building",
    "level": "A1",
    "topic": "There is / There are",
    "difficulty": "easy",
    "transcript": "Are there any flowers in the garden?",
    "content": {
      "title": "Flores en el Jardín",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Are|Hay]] [[there|allí]] [[any|algunas]] [[flowers|flores]] [[in|en]] [[the|el]] [[garden|jardín]]?",
      "words": ["[[flowers|flores]]", "[[garden|jardín]]?", "[[in|en]]", "[[any|algunas]]", "[[there|allí]]", "[[Are|Hay]]", "[[the|el]]"],
      "explanation": "Pregunta plural sobre flores."
    },
    "audioUrl": "audio/a1/unit-5/e28.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Adjectives",
    "difficulty": "easy",
    "transcript": "Our living room is very cozy.",
    "content": {
      "title": "Acogedor",
      "instructions": "Elige el adjetivo 'acogedor'.",
      "questions": [
        {
          "question": "[[Our|Nuestro]] [[living|estar]] [[room|habitación]] [[is|es]] [[very|muy]] (_____) .",
          "options": ["[[cozy|acogedor]]", "[[cold|frío]]", "[[big|grande]]"],
          "correctAnswer": 0,
          "explanation": "Cozy describe un ambiente cálido y agradable."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e29.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e30",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Rooms",
    "difficulty": "easy",
    "transcript": "The kitchen is clean and bright.",
    "content": {
      "title": "Estado de la Cocina",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[The|La]] [[kitchen|cocina]] [[is|está]] [[clean|limpia]] [[and|y]] [[bright|luminosa]].",
      "words": ["[[clean|limpia]]", "[[bright|luminosa]].", "[[is|está]]", "[[kitchen|cocina]]", "[[The|La]]", "[[and|y]]"],
      "explanation": "Uso de adjetivos positivos para la cocina."
    },
    "audioUrl": "audio/a1/unit-5/e30.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e31",
    "type": "flashcard",
    "level": "A1",
    "topic": "Home Adjectives",
    "difficulty": "easy",
    "transcript": "Small. Big. Modern. Old. Comfortable. Cozy. Bright. Dark. Clean. Dirty.",
    "content": {
      "title": "Adjetivos para la Casa",
      "instructions": "Aprende adjetivos para describir lugares.",
      "items": [
        { "front": "[[Small|Pequeño]]", "back": "Pequeño" },
        { "front": "[[Big|Grande]]", "back": "Grande" },
        { "front": "[[Modern|Moderno]]", "back": "Moderno" },
        { "front": "[[Old|Viejo]]", "back": "Viejo" },
        { "front": "[[Comfortable|Cómodo]]", "back": "Cómodo" },
        { "front": "[[Cozy|Acogedor]]", "back": "Acogedor" },
        { "front": "[[Bright|Luminoso]]", "back": "Luminoso" },
        { "front": "[[Dark|Oscuro]]", "back": "Oscuro" },
        { "front": "[[Clean|Limpio]]", "back": "Limpio" },
        { "front": "[[Dirty|Sucio]]", "back": "Sucio" }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e31.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e32",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "There is / There are",
    "difficulty": "easy",
    "transcript": "Is there a lot of light in the bedroom?",
    "content": {
      "title": "Luz en el Cuarto",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "(_____) [[there|allí]] [[a|mucha]] [[lot|cantidad]] [[of|de]] [[light|luz]] [[in|en]] [[the|el]] [[bedroom|dormitorio]]?",
          "options": ["[[Is|Hay]]", "[[Are|Hay (plural)]]", "[[Has|Tiene]]"],
          "correctAnswer": 0,
          "explanation": "Light es incontable en este contexto, usamos 'Is there'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e32.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "easy",
    "transcript": "The book is between the lamp and the clock.",
    "content": {
      "title": "Entre dos objetos",
      "instructions": "Completa con la preposición.",
      "questions": [
        {
          "question": "[[The|El]] [[book|libro]] [[is|está]] (_____) [[the|la]] [[lamp|lámpara]] [[and|y]] [[the|el]] [[clock|reloj]].",
          "options": ["[[under|debajo de]]", "[[between|entre]]", "[[behind|detrás de]]"],
          "correctAnswer": 1,
          "explanation": "Between se usa para algo entre dos puntos o cosas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e33.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e34",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Rooms",
    "difficulty": "easy",
    "transcript": "Our garden is very big and green.",
    "content": {
      "title": "El Jardín",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[Our|Nuestro]] [[garden|jardín]] [[is|es]] [[very|muy]] [[big|grande]] [[and|y]] [[green|verde]].",
      "words": ["[[green|verde]].", "[[is|es]]", "[[big|grande]]", "[[garden|jardín]]", "[[Our|Nuestro]]", "[[very|muy]]", "[[and|y]]"],
      "explanation": "Descripción del jardín con colores y tamaño."
    },
    "audioUrl": "audio/a1/unit-5/e34.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "There is a large cupboard in the kitchen.",
    "content": {
      "title": "Armario de Cocina",
      "instructions": "Elige la palabra para armario de cocina.",
      "questions": [
        {
          "question": "[[There|Allí]] [[is|hay]] [[a|un]] [[large|grande]] (_____) [[in|en]] [[the|la]] [[kitchen|cocina]].",
          "options": ["[[cupboard|armario cocina]]", "[[wardrobe|armario ropa]]", "[[desk|escritorio]]"],
          "correctAnswer": 0,
          "explanation": "Cupboard es para la cocina o despensa."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e35.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e36",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Is there a mirror in the bathroom?",
    "content": {
      "title": "Espejo en el Baño",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "(_____) [[there|allí]] [[a|un]] [[mirror|espejo]] [[in|en]] [[the|el]] [[bathroom|baño]]?",
          "options": ["[[Is|Hay]]", "[[Are|Hay (plural)]]", "[[Do|Hacer]]"],
          "correctAnswer": 0,
          "explanation": "Is there a mirror (singular)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e36.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e37",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Rooms",
    "difficulty": "easy",
    "transcript": "The attic is very dark and old.",
    "content": {
      "title": "El Ático",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[The|El]] [[attic|ático]] [[is|es]] [[very|muy]] [[dark|oscuro]] [[and|y]] [[old|viejo]].",
      "words": ["[[attic|ático]]", "[[dark|oscuro]]", "[[is|es]]", "[[The|El]]", "[[old|viejo]].", "[[and|y]]", "[[very|muy]]"],
      "explanation": "Uso de adjetivos para el ático."
    },
    "audioUrl": "audio/a1/unit-5/e37.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e38",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "easy",
    "transcript": "My shoes are under the chair.",
    "content": {
      "title": "Zapatos",
      "instructions": "¿Dónde están los zapatos?",
      "questions": [
        {
          "question": "[[My|Mis]] [[shoes|zapatos]] [[are|están]] (_____) [[the|la]] [[chair|silla]].",
          "options": ["[[on|sobre]]", "[[under|debajo de]]", "[[in|dentro de]]"],
          "correctAnswer": 1,
          "explanation": "Under es debajo de."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e38.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Rooms",
    "difficulty": "easy",
    "transcript": "We have a big garage for two cars.",
    "content": {
      "title": "Garaje",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[We|Nosotros]] [[have|tenemos]] [[a|un]] [[big|grande]] (_____) [[for|para]] [[two|dos]] [[cars|coches]].",
          "options": ["[[garage|garaje]]", "[[garden|jardín]]", "[[hall|pasillo]]"],
          "correctAnswer": 0,
          "explanation": "Garage es el lugar para los coches."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e39.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e40",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "There is a small desk in the bedroom.",
    "content": {
      "title": "Escritorio Pequeño",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[There|Hay]] [[is|allí]] [[a|un]] [[small|pequeño]] [[desk|escritorio]] [[in|en]] [[the|el]] [[bedroom|dormitorio]].",
      "words": ["[[bedroom|dormitorio]].", "[[small|pequeño]]", "[[is|allí]]", "[[There|Hay]]", "[[desk|escritorio]]", "[[a|un]]", "[[in|en]]", "[[the|el]]"],
      "explanation": "Habitación con escritorio."
    },
    "audioUrl": "audio/a1/unit-5/e40.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "easy",
    "transcript": "Is the cat on the sofa?",
    "content": {
      "title": "Gato en el Sofá",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "[[Is|Está]] [[the|el]] [[cat|gato]] (_____) [[the|el]] [[sofa|sofá]]?",
          "options": ["[[on|sobre]]", "[[between|entre]]", "[[under|debajo de]]"],
          "correctAnswer": 0,
          "explanation": "On es sobre o encima de."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e41.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Rooms",
    "difficulty": "easy",
    "transcript": "The hall is between the kitchen and the living room.",
    "content": {
      "title": "El Pasillo: Ubicación",
      "instructions": "Completa con la preposición.",
      "questions": [
        {
          "question": "[[The|El]] [[hall|pasillo]] [[is|está]] (_____) [[the|la]] [[kitchen|cocina]] [[and|y]] [[the|el]] [[living|estar]] [[room|habitación]].",
          "options": ["[[between|entre]]", "[[next to|al lado de]]", "[[behind|detrás de]]"],
          "correctAnswer": 0,
          "explanation": "Between para posición intermedia."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e42.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e43",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "There are two lamps on my desk.",
    "content": {
      "title": "Lámparas",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[There|Hay]] [[are|allí (plural)]] [[two|dos]] [[lamps|lámparas]] [[on|sobre]] [[my|mi]] [[desk|escritorio]].",
      "words": ["[[lamps|lámparas]]", "[[on|sobre]]", "[[There|Hay]]", "[[desk|escritorio]].", "[[my|mi]]", "[[are|allí (plural)]]", "[[two|dos]]"],
      "explanation": "Plural con There are."
    },
    "audioUrl": "audio/a1/unit-5/e43.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "Where are my socks? They're in the drawer.",
    "content": {
      "title": "Cajón",
      "instructions": "Elige la palabra para 'cajón'.",
      "questions": [
        {
          "question": "[[They're|Están]] [[in|en]] [[the|el]] (_____) .",
          "options": ["[[drawer|cajón]]", "[[shelf|estantería]]", "[[wardrobe|armario]]"],
          "correctAnswer": 0,
          "explanation": "Drawer es cajón."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e44.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e45",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "I need a mirror for the bathroom.",
    "content": {
      "title": "Necesidades del Baño",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[I|Yo]] [[need|necesito]] [[a|un]] (_____) [[for|para]] [[the|el]] [[bathroom|baño]].",
          "options": ["[[mirror|espejo]]", "[[sofa|sofá]]", "[[bed|cama]]"],
          "correctAnswer": 0,
          "explanation": "Mirror es el espejo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e45.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e46",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Adjectives",
    "difficulty": "easy",
    "transcript": "My apartment is very bright and sunny.",
    "content": {
      "title": "Apartamento Luminoso",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[My|Mi]] [[apartment|apartamento]] [[is|es]] [[very|muy]] [[bright|luminoso]] [[and|y]] [[sunny|soleado]].",
      "words": ["[[bright|luminoso]]", "[[sunny|soleado]].", "[[My|Mi]]", "[[apartment|apartamento]]", "[[is|es]]", "[[and|y]]", "[[very|muy]]"],
      "explanation": "Uso de adjetivos positivos."
    },
    "audioUrl": "audio/a1/unit-5/e46.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Rooms",
    "difficulty": "easy",
    "transcript": "The basement is very cold in winter.",
    "content": {
      "title": "Frío en el Sótano",
      "instructions": "Elige la habitación correcta.",
      "questions": [
        {
          "question": "[[The|El]] (_____) [[is|está]] [[very|muy]] [[cold|frío]] [[in|en]] [[winter|invierno]].",
          "options": ["[[basement|sótano]]", "[[attic|ático]]", "[[living room|salón]]"],
          "correctAnswer": 0,
          "explanation": "Basement es el sótano."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e47.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e48",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "easy",
    "transcript": "There is a shelf above the desk.",
    "content": {
      "title": "Encima (sin contacto)",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[There|Hay]] [[is|allí]] [[a|una]] [[shelf|estantería]] [[above|encima de]] [[the|el]] [[desk|escritorio]].",
      "words": ["[[shelf|estantería]]", "[[above|encima de]]", "[[desk|escritorio]].", "[[There|Hay]]", "[[the|el]]", "[[is|allí]]", "[[a|una]]"],
      "explanation": "Above significa por encima (generalmente sin tocar)."
    },
    "audioUrl": "audio/a1/unit-5/e48.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Furniture",
    "difficulty": "easy",
    "transcript": "I like your new sofa.",
    "content": {
      "title": "Sofá Nuevo",
      "instructions": "Completa con el mueble.",
      "questions": [
        {
          "question": "[[I|Me]] [[like|gusta]] [[your|tu]] [[new|nuevo]] (_____) .",
          "options": ["[[sofa|sofá]]", "[[garden|jardín]]", "[[attic|ático]]"],
          "correctAnswer": 0,
          "explanation": "Sofa es el mueble principal del salón."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e49.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Adjectives",
    "difficulty": "easy",
    "transcript": "Is your room clean?",
    "content": {
      "title": "Limpieza",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "[[Is|Está]] [[your|tu]] [[room|habitación]] (_____) ?",
          "options": ["[[clean|limpia]]", "[[bright|brillante]]", "[[comfortable|cómoda]]"],
          "correctAnswer": 0,
          "explanation": "Clean es limpio/a."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e50.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about Maria's apartment.",
    "content": {
      "title": "Lectura: Maria's New Apartment",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "How many bedrooms are there? *\"Maria has a new apartment. It is on the third floor. There are two bedrooms, a small kitchen, and a beautiful living room. The living room is very bright because there are two large windows. There is also a small balcony with some plants. She loves her new home.\"*",
          "options": ["[[One|Uno]]", "[[Two|Dos]]", "[[Three|Tres]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'There are two bedrooms'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e51.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u5-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about Maria's apartment.",
    "content": {
      "title": "Lectura: Maria's New Apartment",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "Is the living room bright? *\"Maria has a new apartment. It is on the third floor. There are two bedrooms, a small kitchen, and a beautiful living room. The living room is very bright because there are two large windows. There is also a small balcony with some plants. She loves her new home.\"*",
          "options": ["[[Yes, it is very bright|Sí, es muy luminosa]]", "[[No, it is dark|No, es oscura]]"],
          "correctAnswer": 0,
          "explanation": "El texto menciona 'The living room is very bright'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e52.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u5-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about Maria's apartment.",
    "content": {
      "title": "Lectura: Maria's New Apartment",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "What is on the balcony? *\"Maria has a new apartment. It is on the third floor. There are two bedrooms, a small kitchen, and a beautiful living room. The living room is very bright because there are two large windows. There is also a small balcony with some plants. She loves her new home.\"*",
          "options": ["[[A chair|Una silla]]", "[[Some plants|Algunas plantas]]", "[[A table|Una mesa]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'a small balcony with some plants'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e53.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u5-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about John's house.",
    "content": {
      "title": "Lectura: John's Big House",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "Where is the car? *\"John lives in a big house with a large garden. There is a garage for his car and a basement for old things. Inside the house, there are four bedrooms and three bathrooms. The kitchen is modern and it has a big table. In the living room, there is a large sofa and a TV on the wall.\"*",
          "options": ["[[In the basement|En el sótano]]", "[[In the garage|En el garaje]]", "[[In the garden|En el jardín]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'There is a garage for his car'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e54.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u5-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about John's house.",
    "content": {
      "title": "Lectura: John's Big House",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "How many bathrooms are there? *\"John lives in a big house with a large garden. There is a garage for his car and a basement for old things. Inside the house, there are four bedrooms and three bathrooms. The kitchen is modern and it has a big table. In the living room, there is a large sofa and a TV on the wall.\"*",
          "options": ["[[Two|Dos]]", "[[Three|Tres]]", "[[Four|Cuatro]]"],
          "correctAnswer": 1,
          "explanation": "El texto indica 'three bathrooms'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e55.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u5-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about John's house.",
    "content": {
      "title": "Lectura: John's Big House",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "Where is the TV? *\"John lives in a big house with a large garden. There is a garage for his car and a basement for old things. Inside the house, there are four bedrooms and three bathrooms. The kitchen is modern and it has a big table. In the living room, there is a large sofa and a TV on the wall.\"*",
          "options": ["[[On the table|Sobre la mesa]]", "[[On the wall|En la pared]]", "[[In the bedroom|En el dormitorio]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'a TV on the wall'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e56.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u5-e57",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a studio apartment.",
    "content": {
      "title": "Lectura: The Studio Apartment",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "Is the apartment big? *\"This is a small studio apartment. There is only one room for the bed, the desk, and the sofa. The kitchen is very small, but it is modern. There is a bathroom next to the main room. It is perfect for one person because it is cozy and cheap.\"*",
          "options": ["[[Yes, it is very big|Sí, es muy grande]]", "[[No, it is small|No, es pequeño]]"],
          "correctAnswer": 1,
          "explanation": "El texto empieza diciendo 'This is a small studio apartment'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e57.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u5-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a studio apartment.",
    "content": {
      "title": "Lectura: The Studio Apartment",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "Who is the apartment perfect for? *\"This is a small studio apartment. There is only one room for the bed, the desk, and the sofa. The kitchen is very small, but it is modern. There is a bathroom next to the main room. It is perfect for one person because it is cozy and cheap.\"*",
          "options": ["[[A large family|Una familia grande]]", "[[One person|Una persona]]", "[[Three friends|Tres amigos]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'It is perfect for one person'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e58.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u5-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a studio apartment.",
    "content": {
      "title": "Lectura: The Studio Apartment",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "Where is the bathroom? *\"This is a small studio apartment. There is only one room for the bed, the desk, and the sofa. The kitchen is very small, but it is modern. There is a bathroom next to the main room. It is perfect for one person because it is cozy and cheap.\"*",
          "options": ["[[In the kitchen|En la cocina]]", "[[Next to the main room|Al lado de la habitación principal]]", "[[In the basement|En el sótano]]"],
          "correctAnswer": 1,
          "explanation": "El texto indica 'There is a bathroom next to the main room'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e59.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u5-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Reading text about a cottage.",
    "content": {
      "title": "Lectura: The Country Cottage",
      "instructions": "Lee el texto y responde.",
      "questions": [
        {
          "question": "Does the cottage have an attic? *\"My grandparents live in a beautiful cottage in the country. It has white walls and a red roof. There are three bedrooms and a cozy living room with a fireplace. Behind the house, there is a big garden with many fruit trees. It also has a small attic for old books and photos. It is a very quiet place.\"*",
          "options": ["[[Yes, it has a small attic|Sí, tiene un pequeño ático]]", "[[No, it doesn't have an attic|No, no tiene ático]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice 'It also has a small attic'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e60.mp3",
    "topicName": "Reading"
  }
];
