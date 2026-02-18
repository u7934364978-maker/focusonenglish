import { Exercise } from '@/lib/exercise-generator';

export const UNIT_4_EXERCISES: Exercise[] = [
  // ==========================================
  // MODULE 1: NUMBERS & OBJECTS (1-10)
  // ==========================================
  {
    "id": "a1-u4-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "easy",
    "transcript": "[[A|Un]] [[book|libro]]. [[An|Una]] [[eraser|goma]].",
    "content": {
      "title": "Uso de 'a' y 'an'",
      "instructions": "Elige el artículo correcto según el sonido inicial.",
      "questions": [
        {
          "question": "_______ [[book|libro]]",
          "options": ["[[an|un]]", "[[a|un]]"],
          "correctAnswer": 1,
          "explanation": "Book empieza con consonante, usamos 'a'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e3.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[have|tengo]] [[three|tres]] [[books|libros]].",
    "content": {
      "title": "Contando Objetos",
      "instructions": "Elige el número correcto para (3).",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] (3) _______ [[books|libros]].",
          "options": ["[[two|dos]]", "[[three|tres]]", "[[four|cuatro]]"],
          "correctAnswer": 1,
          "explanation": "3 se dice 'three' en inglés."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e4.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e5",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "[[This|Esto]] [[is|es]] [[a|un]] [[pencil|lápiz]].",
    "content": {
      "title": "Identificando Objetos",
      "instructions": "Ordena las palabras para identificar el objeto.",
      "correctSentence": "[[This|Esto]] [[is|es]] [[a|un]] [[pencil|lápiz]].",
      "words": ["[[pencil|lápiz]].", "[[is|es]]", "[[a|un]]", "[[This|Esto]]"],
      "explanation": "This + is + a/an + noun."
    },
    "audioUrl": "audio/a1/unit-4/e5.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "easy",
    "transcript": "[[It|Eso]] [[is|es]] [[an|una]] [[orange|naranja]].",
    "content": {
      "title": "Vocales y Artículos",
      "instructions": "Elige el artículo para una palabra que empieza por vocal.",
      "questions": [
        {
          "question": "[[It|Eso]] [[is|es]] (_____) [[orange|naranja]].",
          "options": ["[[an|una]]", "[[a|una]]"],
          "correctAnswer": 0,
          "explanation": "'Orange' empieza por vocal, usamos 'an'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e6.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e7",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[have|tengo]] [[seven|siete]] [[pencils|lápices]].",
    "content": {
      "title": "Cantidad",
      "instructions": "Ordena la oración para indicar que tienes 7 lápices.",
      "correctSentence": "[[I|Yo]] [[have|tengo]] [[seven|siete]] [[pencils|lápices]].",
      "words": ["[[pencils|lápices]].", "[[seven|siete]]", "[[have|tengo]]", "[[I|Yo]]"],
      "explanation": "Seven corresponde al número 7."
    },
    "audioUrl": "audio/a1/unit-4/e7.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e8",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "[[Where|Dónde]] [[is|está]] [[my|mi]] [[notebook|libreta]]?",
    "content": {
      "title": "Buscando Objetos",
      "instructions": "Elige la palabra correcta para 'libreta'.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|está]] [[my|mi]] (_____) ?",
          "options": ["[[pen|bolígrafo]]", "[[ruler|regla]]", "[[notebook|libreta]]"],
          "correctAnswer": 2,
          "explanation": "Notebook significa libreta o cuaderno."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e8.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e9",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[need|necesito]] [[a|una]] [[notebook|libreta]] [[and|y]] [[an|una]] [[eraser|goma]].",
    "content": {
      "title": "Objetos y Artículos",
      "instructions": "Ordena la oración usando 'a' y 'an' correctamente.",
      "correctSentence": "[[I|Yo]] [[need|necesito]] [[a|una]] [[notebook|libreta]] [[and|y]] [[an|una]] [[eraser|goma]].",
      "words": ["[[eraser|goma]].", "[[an|una]]", "[[and|y]]", "[[notebook|libreta]]", "[[a|una]]", "[[need|necesito]]", "[[I|Yo]]"],
      "explanation": "A + notebook (consonante), An + eraser (vocal)."
    },
    "audioUrl": "audio/a1/unit-4/e9.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "[[One|Uno]], [[two|dos]], [[three|tres]], [[four|cuatro]], [[five|cinco]].",
    "content": {
      "title": "Secuencia Numérica",
      "instructions": "¿Qué número sigue al cuatro (4)?",
      "questions": [
        {
          "question": "[[Four|Cuatro]], (_____).",
          "options": ["[[five|cinco]]", "[[six|seis]]", "[[three|tres]]"],
          "correctAnswer": 0,
          "explanation": "La secuencia es 4, 5."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e10.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e11",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "[[The|El]] [[pen|bolígrafo]] [[is|está]] [[on|en]] [[the|el]] [[desk|escritorio]].",
    "content": {
      "title": "Ubicación Básica",
      "instructions": "Ordena las palabras para situar el objeto.",
      "correctSentence": "[[The|El]] [[pen|bolígrafo]] [[is|está]] [[on|en]] [[the|el]] [[desk|escritorio]].",
      "words": ["[[desk|escritorio]].", "[[the|el]]", "[[on|en]]", "[[is|está]]", "[[pen|bolígrafo]]", "[[The|El]]"],
      "explanation": "Estructura: The + object + is + on + the + place."
    },
    "audioUrl": "audio/a1/unit-4/e11.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[have|tengo]] [[eight|ocho]] [[apples|manzanas]].",
    "content": {
      "title": "Contar Frutas",
      "instructions": "Identifica el número 8 en letras.",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] (8) (_____) [[apples|manzanas]].",
          "options": ["[[nine|nueve]]", "[[eight|ocho]]", "[[seven|siete]]"],
          "correctAnswer": 1,
          "explanation": "8 se dice 'eight'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e12.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e13",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "[[Open|Abre]] [[your|tu]] [[book|libro]], [[please|por favor]].",
    "content": {
      "title": "Instrucciones de Clase",
      "instructions": "Ordena la instrucción del profesor.",
      "correctSentence": "[[Open|Abre]] [[your|tu]] [[book|libro]], [[please|por favor]].",
      "words": ["[[please|por favor]].", "[[book|libro]],", "[[your|tu]]", "[[Open|Abre]]"],
      "explanation": "Usamos el imperativo para instrucciones."
    },
    "audioUrl": "audio/a1/unit-4/e13.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "easy",
    "transcript": "[[It|Eso]] [[is|es]] [[a|una]] [[ruler|regla]].",
    "content": {
      "title": "Artículos",
      "instructions": "Elige el artículo para 'ruler'.",
      "questions": [
        {
          "question": "[[It|Eso]] [[is|es]] (_____) [[ruler|regla]].",
          "options": ["[[an|una]]", "[[a|una]]"],
          "correctAnswer": 1,
          "explanation": "'Ruler' empieza con consonante, usamos 'a'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e14.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e15",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "[[There|Hay]] [[are|son]] [[ten|diez]] [[students|estudiantes]].",
    "content": {
      "title": "Hay diez estudiantes",
      "instructions": "Ordena la frase indicando la cantidad (10).",
      "correctSentence": "[[There|Hay]] [[are|son]] [[ten|diez]] [[students|estudiantes]].",
      "words": ["[[students|estudiantes]].", "[[ten|diez]]", "[[are|son]]", "[[There|Hay]]"],
      "explanation": "Ten es 10."
    },
    "audioUrl": "audio/a1/unit-4/e15.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[sit|me siento]] [[on|en]] [[a|una]] [[chair|silla]].",
    "content": {
      "title": "Muebles de Clase",
      "instructions": "Elige el objeto donde te sientas.",
      "questions": [
        {
          "question": "[[I|Yo]] [[sit|me siento]] [[on|en]] [[a|una]] (_____) .",
          "options": ["[[chair|silla]]", "[[bag|mochila]]", "[[ruler|regla]]"],
          "correctAnswer": 0,
          "explanation": "Chair es silla."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e16.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e17",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "easy",
    "transcript": "[[He|Él]] [[has|tiene]] [[an|una]] [[office|oficina]].",
    "content": {
      "title": "Artículos y Lugares",
      "instructions": "Ordena la oración usando el artículo para 'office'.",
      "correctSentence": "[[He|Él]] [[has|tiene]] [[an|una]] [[office|oficina]].",
      "words": ["[[office|oficina]].", "[[an|una]]", "[[has|tiene]]", "[[He|Él]]"],
      "explanation": "'An' antes de vocal."
    },
    "audioUrl": "audio/a1/unit-4/e17.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "[[Two|Dos]] [[plus|más]] [[two|dos]] [[is|es]] [[four|cuatro]].",
    "content": {
      "title": "Matemáticas Básicas",
      "instructions": "Resuelve la suma (2 + 2).",
      "questions": [
        {
          "question": "[[Two|Dos]] [[plus|más]] [[two|dos]] [[is|es]] (_____) .",
          "options": ["[[three|tres]]", "[[five|cinco]]", "[[four|cuatro]]"],
          "correctAnswer": 2,
          "explanation": "2 + 2 = 4 (four)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e18.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e19",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[bag|mochila]] [[is|es]] [[big|grande]].",
    "content": {
      "title": "Descripción",
      "instructions": "Ordena la frase para describir tu mochila.",
      "correctSentence": "[[My|Mi]] [[bag|mochila]] [[is|es]] [[big|grande]].",
      "words": ["[[big|grande]].", "[[is|es]]", "[[bag|mochila]]", "[[My|Mi]]"],
      "explanation": "Bag significa mochila."
    },
    "audioUrl": "audio/a1/unit-4/e19.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "[[Six|Seis]], [[seven|siete]], [[eight|ocho]], [[nine|nueve]], [[ten|diez]].",
    "content": {
      "title": "La decena",
      "instructions": "¿Qué número sigue al nueve (9)?",
      "questions": [
        {
          "question": "[[Nine|Nueve]], (_____) .",
          "options": ["[[ten|diez]]", "[[eight|ocho]]", "[[one|uno]]"],
          "correctAnswer": 0,
          "explanation": "Después del 9 viene el 10 (ten)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e20.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "medium",
    "transcript": "[[The|El]] [[eraser|borrador]] [[is|es]] [[white|blanco]].",
    "content": {
      "title": "Borrador Blanco",
      "instructions": "Elige la palabra correcta para 'borrador'.",
      "questions": [
        {
          "question": "[[The|El]] (_____) [[is|es]] [[white|blanco]].",
          "options": ["[[eraser|borrador]]", "[[pencil|lápiz]]", "[[desk|escritorio]]"],
          "correctAnswer": 0,
          "explanation": "Eraser significa borrador o goma."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e21.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e22",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[have|tengo]] [[a|un]] [[blue|azul]] [[notebook|cuaderno]].",
    "content": {
      "title": "Adjetivo y Artículo",
      "instructions": "Ordena la frase: el adjetivo va antes del nombre.",
      "correctSentence": "[[I|Yo]] [[have|tengo]] [[a|un]] [[blue|azul]] [[notebook|cuaderno]].",
      "words": ["[[notebook|cuaderno]].", "[[blue|azul]]", "[[a|un]]", "[[have|tengo]]", "[[I|Yo]]"],
      "explanation": "A + blue + notebook. El artículo depende del sonido de 'blue'."
    },
    "audioUrl": "audio/a1/unit-4/e22.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "medium",
    "transcript": "[[There|Hay]] [[are|son]] [[six|seis]] [[chairs|sillas]] [[in|en]] [[the|la]] [[room|habitación]].",
    "content": {
      "title": "Sillas en el aula",
      "instructions": "Identifica el número 6.",
      "questions": [
        {
          "question": "[[There|Hay]] [[are|son]] (6) (_____) [[chairs|sillas]] [[in|en]] [[the|la]] [[room|habitación]].",
          "options": ["[[seven|siete]]", "[[six|seis]]", "[[five|cinco]]"],
          "correctAnswer": 1,
          "explanation": "6 se dice 'six'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e23.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e24",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "medium",
    "transcript": "[[Where|Dónde]] [[is|está]] [[the|la]] [[red|roja]] [[pen|bolígrafo]]?",
    "content": {
      "title": "Buscando el Boli",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Where|Dónde]] [[is|está]] [[the|la]] [[red|roja]] [[pen|bolígrafo]]?",
      "words": ["[[pen|bolígrafo]]?", "[[red|roja]]", "[[the|la]]", "[[is|está]]", "[[Where|Dónde]]"],
      "explanation": "Where + is + the + adjective + noun?"
    },
    "audioUrl": "audio/a1/unit-4/e24.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "medium",
    "transcript": "[[She|Ella]] [[has|tiene]] [[an|una]] [[orange|naranja]] [[pencil|lápiz]].",
    "content": {
      "title": "Color y Artículo",
      "instructions": "Elige el artículo según el sonido de 'orange'.",
      "questions": [
        {
          "question": "[[She|Ella]] [[has|tiene]] (_____) [[orange|naranja]] [[pencil|lápiz]].",
          "options": ["[[an|un]]", "[[a|un]]"],
          "correctAnswer": 0,
          "explanation": "'Orange' empieza con vocal, usamos 'an'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e25.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e26",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "medium",
    "transcript": "[[He|Él]] [[buys|compra]] [[nine|nueve]] [[books|libros]].",
    "content": {
      "title": "Nueve libros",
      "instructions": "Ordena la frase indicando la cantidad (9).",
      "correctSentence": "[[He|Él]] [[buys|compra]] [[nine|nueve]] [[books|libros]].",
      "words": ["[[books|libros]].", "[[nine|nueve]]", "[[buys|compra]]", "[[He|Él]]"],
      "explanation": "Nine es 9."
    },
    "audioUrl": "audio/a1/unit-4/e26.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "medium",
    "transcript": "[[The|La]] [[ruler|regla]] [[is|es]] [[ten|diez]] [[centimeters|centímetros]].",
    "content": {
      "title": "La Regla",
      "instructions": "Elige la palabra para 'regla'.",
      "questions": [
        {
          "question": "[[The|La]] (_____) [[is|es]] [[ten|diez]] [[centimeters|centímetros]].",
          "options": ["[[eraser|goma]]", "[[desk|escritorio]]", "[[ruler|regla]]"],
          "correctAnswer": 2,
          "explanation": "Ruler significa regla."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e27.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e28",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[need|necesito]] [[an|un]] [[old|viejo]] [[notebook|cuaderno]].",
    "content": {
      "title": "Libreta Vieja",
      "instructions": "Ordena usando el artículo para 'old'.",
      "correctSentence": "[[I|Yo]] [[need|necesito]] [[an|un]] [[old|viejo]] [[notebook|cuaderno]].",
      "words": ["[[notebook|cuaderno]].", "[[old|viejo]]", "[[an|un]]", "[[need|necesito]]", "[[I|Yo]]"],
      "explanation": "'Old' empieza con vocal, usamos 'an'."
    },
    "audioUrl": "audio/a1/unit-4/e28.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "medium",
    "transcript": "[[Five|Cinco]] [[and|y]] [[five|cinco]] [[is|es]] [[ten|diez]].",
    "content": {
      "title": "Suma de cincos",
      "instructions": "Resuelve la operación (5 + 5).",
      "questions": [
        {
          "question": "[[Five|Cinco]] [[and|y]] [[five|cinco]] [[is|es]] (_____) .",
          "options": ["[[ten|diez]]", "[[nine|nueve]]", "[[one|uno]]"],
          "correctAnswer": 0,
          "explanation": "5 + 5 = 10 (ten)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e29.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e30",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[teacher|profesor]] [[has|tiene]] [[a|un]] [[big|grande]] [[desk|escritorio]].",
    "content": {
      "title": "Escritorio del Profe",
      "instructions": "Ordena la descripción.",
      "correctSentence": "[[My|Mi]] [[teacher|profesor]] [[has|tiene]] [[a|un]] [[big|grande]] [[desk|escritorio]].",
      "words": ["[[desk|escritorio]].", "[[big|grande]]", "[[a|un]]", "[[has|tiene]]", "[[teacher|profesor]]", "[[My|Mi]]"],
      "explanation": "Adjective + noun."
    },
    "audioUrl": "audio/a1/unit-4/e30.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "medium",
    "transcript": "[[He|Él]] [[buys|compra]] [[a|un]] [[new|nuevo]] [[car|coche]].",
    "content": {
      "title": "Coche Nuevo",
      "instructions": "Elige el artículo para 'new'.",
      "questions": [
        {
          "question": "[[He|Él]] [[buys|compra]] (_____) [[new|nuevo]] [[car|coche]].",
          "options": ["[[a|un]]", "[[an|un]]"],
          "correctAnswer": 0,
          "explanation": "'New' empieza con consonante, usamos 'a'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e31.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e32",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[read|leo]] [[four|cuatro]] [[pages|páginas]] [[today|hoy]].",
    "content": {
      "title": "Leyendo páginas",
      "instructions": "Ordena la frase indicando la cantidad (4).",
      "correctSentence": "[[I|Yo]] [[read|leo]] [[four|cuatro]] [[pages|páginas]] [[today|hoy]].",
      "words": ["[[today|hoy]].", "[[pages|páginas]]", "[[four|cuatro]]", "[[read|leo]]", "[[I|Yo]]"],
      "explanation": "Four es 4."
    },
    "audioUrl": "audio/a1/unit-4/e32.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "medium",
    "transcript": "[[The|La]] [[backpack|mochila]] [[is|es]] [[on|en]] [[the|la]] [[chair|silla]].",
    "content": {
      "title": "Mochila y Silla",
      "instructions": "Elige la palabra para 'mochila'.",
      "questions": [
        {
          "question": "[[The|La]] (_____) [[is|es]] [[on|en]] [[the|la]] [[chair|silla]].",
          "options": ["[[pencil|lápiz]]", "[[backpack|mochila]]", "[[eraser|goma]]"],
          "correctAnswer": 1,
          "explanation": "Backpack es otra forma de decir bag (mochila)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e33.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e34",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "medium",
    "transcript": "[[We|Nosotros]] [[see|vemos]] [[an|un]] [[airplane|avión]].",
    "content": {
      "title": "Avión y Artículo",
      "instructions": "Ordena usando el artículo para 'airplane'.",
      "correctSentence": "[[We|Nosotros]] [[see|vemos]] [[an|un]] [[airplane|avión]].",
      "words": ["[[airplane|avión]].", "[[an|un]]", "[[see|vemos]]", "[[We|Nosotros]]"],
      "explanation": "'Airplane' empieza con vocal, usamos 'an'."
    },
    "audioUrl": "audio/a1/unit-4/e34.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "medium",
    "transcript": "[[There|Hay]] [[are|son]] [[one|un]], [[two|dos]], [[three|tres]] [[apples|manzanas]].",
    "content": {
      "title": "Conteo",
      "instructions": "¿Cuántas manzanas hay si tienes 1, 2 y 3?",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] (_____) [[apples|manzanas]].",
          "options": ["[[two|dos]]", "[[four|cuatro]]", "[[three|tres]]"],
          "correctAnswer": 2,
          "explanation": "El conteo termina en tres (three)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e35.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e36",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "medium",
    "transcript": "[[Take|Toma]] [[a|un]] [[pencil|lápiz]], [[please|por favor]].",
    "content": {
      "title": "Toma un lápiz",
      "instructions": "Ordena la instrucción.",
      "correctSentence": "[[Take|Toma]] [[a|un]] [[pencil|lápiz]], [[please|por favor]].",
      "words": ["[[please|por favor]].", "[[pencil|lápiz]],", "[[a|un]]", "[[Take|Toma]]"],
      "explanation": "Instrucción simple."
    },
    "audioUrl": "audio/a1/unit-4/e36.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "medium",
    "transcript": "[[It|Eso]] [[is|es]] [[an|una]] [[excellent|excelente]] [[ruler|regla]].",
    "content": {
      "title": "Excelente Regla",
      "instructions": "Elige el artículo según el sonido de 'excellent'.",
      "questions": [
        {
          "question": "[[It|Eso]] [[is|es]] (_____) [[excellent|excelente]] [[ruler|regla]].",
          "options": ["[[an|una]]", "[[a|una]]"],
          "correctAnswer": 0,
          "explanation": "'Excellent' empieza con vocal, usamos 'an'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e37.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e38",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "medium",
    "transcript": "[[She|Ella]] [[has|tiene]] [[five|cinco]] [[red|rojos]] [[books|libros]].",
    "content": {
      "title": "Cinco libros rojos",
      "instructions": "Ordena: cantidad + adjetivo + nombre.",
      "correctSentence": "[[She|Ella]] [[has|tiene]] [[five|cinco]] [[red|rojos]] [[books|libros]].",
      "words": ["[[books|libros]].", "[[red|rojos]]", "[[five|cinco]]", "[[has|tiene]]", "[[She|Ella]]"],
      "explanation": "Orden correcto: Five (número) + red (color) + books (nombre)."
    },
    "audioUrl": "audio/a1/unit-4/e38.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[write|escribo]] [[with|con]] [[the|el]] [[pencil|lápiz]].",
    "content": {
      "title": "Escribir",
      "instructions": "Elige el objeto con el que escribes (no boli).",
      "questions": [
        {
          "question": "[[I|Yo]] [[write|escribo]] [[with|con]] [[the|el]] (_____) .",
          "options": ["[[ruler|regla]]", "[[pencil|lápiz]]", "[[eraser|goma]]"],
          "correctAnswer": 1,
          "explanation": "Pencil significa lápiz."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e39.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e40",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "medium",
    "transcript": "[[They|Ellos]] [[have|tienen]] [[a|una]] [[small|pequeña]] [[bag|mochila]].",
    "content": {
      "title": "Mochila pequeña",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[They|Ellos]] [[have|tienen]] [[a|una]] [[small|pequeña]] [[bag|mochila]].",
      "words": ["[[bag|mochila]].", "[[small|pequeña]]", "[[a|una]]", "[[have|tienen]]", "[[They|Ellos]]"],
      "explanation": "'Small' empieza con consonante, usamos 'a'."
    },
    "audioUrl": "audio/a1/unit-4/e40.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // MODULE 1: READING COMPREHENSION (41-60)
  // 5 Passages x (1 Text + 3 Questions) = 20 slides
  // ==========================================

  // PASSAGE 1: OUR CLASSROOM
  {
    "id": "a1-u4-e41",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Welcome|Bienvenido]] [[to|a]] [[our|nuestra]] [[classroom|clase]]. [[In|En]] [[this|esta]] [[room|habitación]], [[there|allí]] [[are|hay]] [[ten|diez]] [[desks|escritorios]] [[and|y]] [[ten|diez]] [[chairs|sillas]]. [[My|Mi]] [[desk|escritorio]] [[is|está]] [[near|cerca de]] [[the|la]] [[window|ventana]]. [[I|Yo]] [[have|tengo]] [[a|una]] [[big|grande]] [[bag|mochila]] [[with|con]] [[three|tres]] [[books|libros]], [[two|dos]] [[notebooks|libretas]], [[and|y]] [[five|cinco]] [[pens|bolígrafos]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[Our|Nuestra]] [[Classroom|Clase]]",
      "instructions": "[[Read|Lee]] [[about|sobre]] [[the|el]] [[classroom|aula]] [[and|y]] [[supplies|materiales]].",
      "questions": [
        {
          "question": "[[Welcome|Bienvenido]] [[to|a]] [[our|nuestra]] [[classroom|clase]]. [[In|En]] [[this|esta]] [[room|habitación]], [[there|allí]] [[are|hay]] [[ten|diez]] [[desks|escritorios]] [[and|y]] [[ten|diez]] [[chairs|sillas]]. [[My|Mi]] [[desk|escritorio]] [[is|está]] [[near|cerca de]] [[the|la]] [[window|ventana]]. [[I|Yo]] [[have|tengo]] [[a|una]] [[big|grande]] [[bag|mochila]] [[with|con]] [[three|tres]] [[books|libros]], [[two|dos]] [[notebooks|libretas]], [[and|y]] [[five|cinco]] [[pens|bolígrafos]].",
          "options": ["[[I|Yo]] [[have|he]] [[read|leído]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click|Haz clic]] [[to|para]] [[continue|continuar]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[How|Cuántos]] [[many|muchos]] [[desks|escritorios]] [[are|hay]] [[in|en]] [[the|el]] [[room|habitación]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Desks|Escritorios]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[desks|escritorios]] [[are|hay]] [[in|en]] [[the|el]] [[room|habitación]]?",
          "options": ["[[Five|Cinco]]", "[[Ten|Diez]]", "[[Three|Tres]]"],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[there|hay]] [[are|son]] [[ten|diez]] [[desks|escritorios]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[How|Cuántos]] [[many|muchos]] [[pens|bolígrafos]] [[does|hace]] [[the|la]] [[person|persona]] [[have|tener]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Supplies|Materiales]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[pens|bolígrafos]] [[does|hace]] [[the|la]] [[person|persona]] [[have|tener]]?",
          "options": ["[[Five|Cinco]]", "[[Two|Dos]]", "[[Three|Tres]]"],
          "correctAnswer": 0,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[five|cinco]] [[pens|bolígrafos]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[Where|Dónde]] [[is|está]] [[the|el]] [[desk|escritorio]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Location|Ubicación]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|está]] [[the|el]] [[desk|escritorio]]?",
          "options": ["[[Near the window|Cerca de la ventana]]", "[[Near the door|Cerca de la puerta]]", "[[Near the chair|Cerca de la silla]]"],
          "correctAnswer": 0,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[desk|escritorio]] [[is|está]] [[near|cerca de]] [[the|la]] [[window|ventana]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },

  // PASSAGE 2: AT THE STORE
  {
    "id": "a1-u4-e45",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[I|Yo]] [[am|estoy]] [[at|en]] [[the|la]] [[store|tienda]]. [[I|Yo]] [[need|necesito]] [[to|a]] [[buy|comprar]] [[things|cosas]] [[for|para]] [[school|la escuela]]. [[I|Yo]] [[want|quiero]] [[one|una]] [[ruler|regla]], [[four|cuatro]] [[pencils|lápices]], [[and|y]] [[six|seis]] [[notebooks|libretas]]. [[I|Yo]] [[also|también]] [[need|necesito]] [[an|una]] [[eraser|goma]] [[and|y]] [[a|una]] [[new|nueva]] [[bag|mochila]]. [[The|El]] [[total|total]] [[price|precio]] [[is|es]] [[nine|nueve]] [[dollars|dólares]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[At|En]] [[the|la]] [[Store|Tienda]]",
      "instructions": "[[Read|Lee]] [[about|sobre]] [[buying|comprar]] [[supplies|materiales]].",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|estoy]] [[at|en]] [[the|la]] [[store|tienda]]. [[I|Yo]] [[need|necesito]] [[to|a]] [[buy|comprar]] [[things|cosas]] [[for|para]] [[school|la escuela]]. [[I|Yo]] [[want|quiero]] [[one|una]] [[ruler|regla]], [[four|cuatro]] [[pencils|lápices]], [[and|y]] [[six|seis]] [[notebooks|libretas]]. [[I|Yo]] [[also|también]] [[need|necesito]] [[an|una]] [[eraser|goma]] [[and|y]] [[a|una]] [[new|nueva]] [[bag|mochila]]. [[The|El]] [[total|total]] [[price|precio]] [[is|es]] [[nine|nueve]] [[dollars|dólares]].",
          "options": ["[[I|Yo]] [[have|he]] [[read|leído]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click|Haz clic]] [[to|para]] [[continue|continuar]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e46",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[How|Cuántos]] [[many|muchos]] [[pencils|lápices]] [[does|hace]] [[the|la]] [[person|persona]] [[want|querer]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Pencils|Lápices]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[pencils|lápices]] [[does|hace]] [[the|la]] [[person|persona]] [[want|querer]]?",
          "options": ["[[Six|Seis]]", "[[One|Uno]]", "[[Four|Cuatro]]"],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[four|cuatro]] [[pencils|lápices]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[How|Cuántas]] [[many|muchas]] [[notebooks|libretas]] [[does|hace]] [[the|la]] [[person|persona]] [[buy|comprar]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Notebooks|Libretas]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[notebooks|libretas]] [[does|hace]] [[the|la]] [[person|persona]] [[buy|comprar]]?",
          "options": ["[[Six|Seis]]", "[[Four|Cuatro]]", "[[Nine|Nueve]]"],
          "correctAnswer": 0,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[six|seis]] [[notebooks|libretas]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e48",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[What|Cuál]] [[is|es]] [[the|el]] [[total|total]] [[price|precio]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Price|Precio]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[the|el]] [[total|total]] [[price|precio]]?",
          "options": ["[[Six dollars|Seis dólares]]", "[[Nine dollars|Nueve dólares]]", "[[Four dollars|Cuatro dólares]]"],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[nine|nueve]] [[dollars|dólares]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },

  // PASSAGE 3: THE ART CLASS
  {
    "id": "a1-u4-e49",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Today|Hoy]] [[we|nosotros]] [[have|tenemos]] [[an|una]] [[art|arte]] [[class|clase]]. [[I|Yo]] [[need|necesito]] [[a|un]] [[big|grande]] [[piece|trozo]] [[of|de]] [[paper|papel]] [[and|y]] [[an|un]] [[orange|naranja]] [[pencil|lápiz]]. [[My|Mi]] [[friend|amigo]] [[has|tiene]] [[ten|diez]] [[colors|colores]]. [[We|Nosotros]] [[draw|dibujamos]] [[a|una]] [[big|grande]] [[house|casa]] [[with|con]] [[four|cuatro]] [[windows|ventanas]] [[and|y]] [[one|una]] [[door|puerta]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[Art|Clase de]] [[Class|Arte]]",
      "instructions": "[[Read|Lee]] [[about|sobre]] [[the|la]] [[drawing|de dibujo]] [[class|clase]].",
      "questions": [
        {
          "question": "[[Today|Hoy]] [[we|nosotros]] [[have|tenemos]] [[an|una]] [[art|arte]] [[class|clase]]. [[I|Yo]] [[need|necesito]] [[a|un]] [[big|grande]] [[piece|trozo]] [[of|de]] [[paper|papel]] [[and|y]] [[an|un]] [[orange|naranja]] [[pencil|lápiz]]. [[My|Mi]] [[friend|amigo]] [[has|tiene]] [[ten|diez]] [[colors|colores]]. [[We|Nosotros]] [[draw|dibujamos]] [[a|una]] [[big|grande]] [[house|casa]] [[with|con]] [[four|cuatro]] [[windows|ventanas]] [[and|y]] [[one|una]] [[door|puerta]].",
          "options": ["[[I|Yo]] [[have|he]] [[read|leído]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click|Haz clic]] [[to|para]] [[continue|continuar]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[What|Qué]] [[color|color]] [[pencil|lápiz]] [[does|hace]] [[the|la]] [[person|persona]] [[need|necesitar]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Color|Color]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[color|color]] [[pencil|lápiz]] [[does|hace]] [[the|la]] [[person|persona]] [[need|necesitar]]?",
          "options": ["[[Orange|Naranja]]", "[[Red|Rojo]]", "[[Blue|Azul]]"],
          "correctAnswer": 0,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[an|un]] [[orange|naranja]] [[pencil|lápiz]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[How|Cuántas]] [[many|muchas]] [[windows|ventanas]] [[does|hace]] [[the|la]] [[house|casa]] [[have|tener]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[The|La]] [[House|Casa]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[windows|ventanas]] [[does|hace]] [[the|la]] [[house|casa]] [[have|tener]]?",
          "options": ["[[One|Una]]", "[[Four|Cuatro]]", "[[Ten|Diez]]"],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[four|cuatro]] [[windows|ventanas]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[How|Cuántos]] [[many|muchos]] [[colors|colores]] [[does|hace]] [[the|la]] [[friend|amigo]] [[have|tener]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Friend|Amigo]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[colors|colores]] [[does|hace]] [[the|la]] [[friend|amigo]] [[have|tener]]?",
          "options": ["[[Four|Cuatro]]", "[[One|Uno]]", "[[Ten|Diez]]"],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[friend|amigo]] [[has|tiene]] [[ten|diez]] [[colors|colores]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },

  // PASSAGE 4: THE TEACHER'S INSTRUCTIONS
  {
    "id": "a1-u4-e53",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[The|La]] [[teacher|profesora]] [[is|está]] [[in|en]] [[the|la]] [[room|habitación]]. [[She|Ella]] [[says|dice]]: '[[Please|Por favor]] [[open|abrid]] [[your|vuestros]] [[books|libros]] [[to|a]] [[page|página]] [[seven|siete]]. [[Take|Tomad]] [[a|un]] [[pen|bolígrafo]] [[and|y]] [[write|escribid]] [[your|vuestro]] [[name|nombre]].' [[There|Allí]] [[are|hay]] [[nine|nueve]] [[students|estudiantes]] [[in|en]] [[the|la]] [[class|clase]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[Teacher's|de la Profesora]] [[Instructions|Instrucciones]]",
      "instructions": "[[Read|Lee]] [[what|lo que]] [[the|la]] [[teacher|profesora]] [[says|dice]].",
      "questions": [
        {
          "question": "[[The|La]] [[teacher|profesora]] [[is|está]] [[in|en]] [[the|la]] [[room|habitación]]. [[She|Ella]] [[says|dice]]: '[[Please|Por favor]] [[open|abrid]] [[your|vuestros]] [[books|libros]] [[to|a]] [[page|página]] [[seven|siete]]. [[Take|Tomad]] [[a|un]] [[pen|bolígrafo]] [[and|y]] [[write|escribid]] [[your|vuestro]] [[name|nombre]].' [[There|Allí]] [[are|hay]] [[nine|nueve]] [[students|estudiantes]] [[in|en]] [[the|la]] [[class|clase]].",
          "options": ["[[I|Yo]] [[have|he]] [[read|leído]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click|Haz clic]] [[to|para]] [[continue|continuar]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[What|Cuál]] [[page|página]] [[is|está]] [[the|la]] [[class|clase]] [[on|en]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Page|Página]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Cuál]] [[page|página]] [[is|está]] [[the|la]] [[class|clase]] [[on|en]]?",
          "options": ["[[Seven|Siete]]", "[[Nine|Nueve]]", "[[Two|Dos]]"],
          "correctAnswer": 0,
          "explanation": "[[The|La]] [[teacher|profesora]] [[says|dice]]: \"[[page|página]] [[seven|siete]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[How|Cuántos]] [[many|muchos]] [[students|estudiantes]] [[are|hay]] [[in|en]] [[the|la]] [[class|clase]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Students|Estudiantes]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[students|estudiantes]] [[are|hay]] [[in|en]] [[the|la]] [[class|clase]]?",
          "options": ["[[Seven|Siete]]", "[[Ten|Diez]]", "[[Nine|Nueve]]"],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[nine|nueve]] [[students|estudiantes]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[What|Qué]] [[do|aux]] [[the|los]] [[students|estudiantes]] [[need|necesitan]] [[to|para]] [[write|escribir]] [[their|su]] [[name|nombre]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Action|Acción]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[do|aux]] [[the|los]] [[students|estudiantes]] [[need|necesitan]] [[to|para]] [[write|escribir]] [[their|su]] [[name|nombre]]?",
          "options": ["[[A ruler|Una regla]]", "[[An eraser|Una goma]]", "[[A pen|Un bolígrafo]]"],
          "correctAnswer": 2,
          "explanation": "[[The|La]] [[teacher|profesora]] [[says|dice]]: \"[[Take|Tomad]] [[a|un]] [[pen|bolígrafo]] [[and|y]] [[write|escribid]] [[your|vuestro]] [[name|nombre]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },

  // PASSAGE 5: THE LIBRARY TABLE
  {
    "id": "a1-u4-e57",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Look|Mira]] [[at|a]] [[this|esta]] [[table|mesa]]. [[There|Allí]] [[are|hay]] [[four|cuatro]] [[books|libros]] [[and|y]] [[one|una]] [[notebook|libreta]]. [[There|Allí]] [[is|hay]] [[also|también]] [[a|un]] [[pen|bolígrafo]] [[and|y]] [[a|un]] [[pencil|lápiz]]. [[I|Yo]] [[need|necesito]] [[an|una]] [[eraser|goma]] [[to|para]] [[clean|limpiar]] [[my|mis]] [[mistakes|errores]]. [[The|La]] [[table|mesa]] [[is|está]] [[in|en]] [[the|la]] [[library|biblioteca]]. [[It|Eso]] [[is|es]] [[number|número]] [[ten|diez]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[In|En]] [[the|la]] [[Library|Biblioteca]]",
      "instructions": "[[Read|Lee]] [[about|sobre]] [[the|la]] [[library|de la biblioteca]] [[table|mesa]].",
      "questions": [
        {
          "question": "[[Look|Mira]] [[at|a]] [[this|esta]] [[table|mesa]]. [[There|Allí]] [[are|hay]] [[four|cuatro]] [[books|libros]] [[and|y]] [[one|una]] [[notebook|libreta]]. [[There|Allí]] [[is|hay]] [[also|también]] [[a|un]] [[pen|bolígrafo]] [[and|y]] [[a|un]] [[pencil|lápiz]]. [[I|Yo]] [[need|necesito]] [[an|una]] [[eraser|goma]] [[to|para]] [[clean|limpiar]] [[my|mis]] [[mistakes|errores]]. [[The|La]] [[table|mesa]] [[is|está]] [[in|en]] [[the|la]] [[library|biblioteca]]. [[It|Eso]] [[is|es]] [[number|número]] [[ten|diez]].",
          "options": ["[[I|Yo]] [[have|he]] [[read|leído]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click|Haz clic]] [[to|para]] [[continue|continuar]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[How|Cuántos]] [[many|muchos]] [[books|libros]] [[are|hay]] [[on|en]] [[the|la]] [[table|mesa]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Books|Libros]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[books|libros]] [[are|hay]] [[on|en]] [[the|la]] [[table|mesa]]?",
          "options": ["[[Four|Cuatro]]", "[[One|Uno]]", "[[Ten|Diez]]"],
          "correctAnswer": 0,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[four|cuatro]] [[books|libros]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[What|Cuál]] [[is|es]] [[the|el]] [[table|mesa]] [[number|número]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Table|Mesa]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[the|el]] [[table|mesa]] [[number|número]]?",
          "options": ["[[Four|Cuatro]]", "[[Ten|Diez]]", "[[One|Uno]]"],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[table|mesa]] [[is|está]] [[number|número]] [[ten|diez]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[Where|Dónde]] [[is|está]] [[the|la]] [[table|mesa]]?",
    "content": {
      "title": "[[Comprehension|Comprensión]]: [[Library|Biblioteca]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|está]] [[the|la]] [[table|mesa]]?",
          "options": ["[[In the classroom|En la clase]]", "[[In the store|En la tienda]]", "[[In the library|En la biblioteca]]"],
          "correctAnswer": 2,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[The|La]] [[table|mesa]] [[is|está]] [[in|en]] [[the|la]] [[library|biblioteca]]\"."
        }
      ]
    },
    "topicName": "Reading"
  }
];
