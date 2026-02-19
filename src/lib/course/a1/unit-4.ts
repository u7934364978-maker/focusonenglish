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
    "transcript": "[[A book. An eraser|Un libro. Una goma]].",
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
    "transcript": "[[I have three books|Yo tengo tres libros]].",
    "content": {
      "title": "Contando Objetos",
      "instructions": "Elige el número correcto para (3).",
      "questions": [
        {
          "question": "[[I have|Yo tengo]] (3) _______ [[books|libros]].",
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
    "transcript": "[[This is a pencil|Esto es un lápiz]].",
    "content": {
      "title": "Identificando Objetos",
      "instructions": "Ordena las palabras para identificar el objeto.",
      "correctSentence": "[[This is a pencil|Esto es un lápiz]].",
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
    "transcript": "[[It is an orange|Eso es una naranja]].",
    "content": {
      "title": "Vocales y Artículos",
      "instructions": "Elige el artículo para una palabra que empieza por vocal.",
      "questions": [
        {
          "question": "[[It is|Eso es]] (_____) [[orange|naranja]].",
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
    "transcript": "[[I have seven pencils|Yo tengo siete lápices]].",
    "content": {
      "title": "Cantidad",
      "instructions": "Ordena la oración para indicar que tienes 7 lápices.",
      "correctSentence": "[[I have seven pencils|Yo tengo siete lápices]].",
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
    "transcript": "[[Where is my notebook|Dónde está mi libreta]]?",
    "content": {
      "title": "Buscando Objetos",
      "instructions": "Elige la palabra correcta para 'libreta'.",
      "questions": [
        {
          "question": "[[Where is my|Dónde está mi]] (_____) ?",
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
    "transcript": "[[I need a notebook and an eraser|Yo necesito una libreta y una goma]].",
    "content": {
      "title": "Objetos y Artículos",
      "instructions": "Ordena la oración usando 'a' y 'an' correctamente.",
      "correctSentence": "[[I need a notebook and an eraser|Yo necesito una libreta y una goma]].",
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
    "transcript": "[[One, two, three, four, five|Uno, dos, tres, cuatro, cinco]].",
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
    "transcript": "[[The pen is on the desk|El bolígrafo está en el escritorio]].",
    "content": {
      "title": "Ubicación Básica",
      "instructions": "Ordena las palabras para situar el objeto.",
      "correctSentence": "[[The pen is on the desk|El bolígrafo está en el escritorio]].",
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
    "transcript": "[[I have eight apples|Yo tengo ocho manzanas]].",
    "content": {
      "title": "Contar Frutas",
      "instructions": "Identifica el número 8 en letras.",
      "questions": [
        {
          "question": "[[I have|Yo tengo]] (8) (_____) [[apples|manzanas]].",
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
    "transcript": "[[Open your, please book|Abre tu libro, por favor]].",
    "content": {
      "title": "Instrucciones de Clase",
      "instructions": "Ordena la instrucción del profesor.",
      "correctSentence": "[[Open your, please book|Abre tu libro, por favor]].",
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
    "transcript": "[[It is a ruler|Eso es una regla]].",
    "content": {
      "title": "Artículos",
      "instructions": "Elige el artículo para 'ruler'.",
      "questions": [
        {
          "question": "[[It is|Eso es]] (_____) [[ruler|regla]].",
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
    "transcript": "[[There are ten students|Hay son diez estudiantes]].",
    "content": {
      "title": "Hay diez estudiantes",
      "instructions": "Ordena la frase indicando la cantidad (10).",
      "correctSentence": "[[There are ten students|Hay son diez estudiantes]].",
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
    "transcript": "[[I sit on a chair|Yo me siento en una silla]].",
    "content": {
      "title": "Muebles de Clase",
      "instructions": "Elige el objeto donde te sientas.",
      "questions": [
        {
          "question": "[[I sit on a|Yo me siento en una]] (_____) .",
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
    "transcript": "[[He has an office|Él tiene una oficina]].",
    "content": {
      "title": "Artículos y Lugares",
      "instructions": "Ordena la oración usando el artículo para 'office'.",
      "correctSentence": "[[He has an office|Él tiene una oficina]].",
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
    "transcript": "[[Two plus two is four|Dos más dos es cuatro]].",
    "content": {
      "title": "Matemáticas Básicas",
      "instructions": "Resuelve la suma (2 + 2).",
      "questions": [
        {
          "question": "[[Two plus two is|Dos más dos es]] (_____) .",
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
    "transcript": "[[My bag is big|Mi mochila es grande]].",
    "content": {
      "title": "Descripción",
      "instructions": "Ordena la frase para describir tu mochila.",
      "correctSentence": "[[My bag is big|Mi mochila es grande]].",
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
    "transcript": "[[Six, seven, eight, nine, ten|Seis, siete, ocho, nueve, diez]].",
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
    "transcript": "[[The eraser is white|El borrador es blanco]].",
    "content": {
      "title": "Borrador Blanco",
      "instructions": "Elige la palabra correcta para 'borrador'.",
      "questions": [
        {
          "question": "[[The white|El]] (_____) [[is|es blanco]].",
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
    "transcript": "[[I have a blue notebook|Yo tengo un azul cuaderno]].",
    "content": {
      "title": "Adjetivo y Artículo",
      "instructions": "Ordena la frase: el adjetivo va antes del nombre.",
      "correctSentence": "[[I have a blue notebook|Yo tengo un azul cuaderno]].",
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
    "transcript": "[[There are six chairs in the room|Hay son seis sillas en la habitación]].",
    "content": {
      "title": "Sillas en el aula",
      "instructions": "Identifica el número 6.",
      "questions": [
        {
          "question": "[[There are the room|Hay son]] (6) (_____) [[chairs in|sillas en la habitación]].",
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
    "transcript": "[[Where is the red pen|Dónde está la roja bolígrafo]]?",
    "content": {
      "title": "Buscando el Boli",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Where is the red pen|Dónde está la roja bolígrafo]]?",
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
    "transcript": "[[She has an orange pencil|Ella tiene una naranja lápiz]].",
    "content": {
      "title": "Color y Artículo",
      "instructions": "Elige el artículo según el sonido de 'orange'.",
      "questions": [
        {
          "question": "[[She has|Ella tiene]] (_____) [[orange pencil|naranja lápiz]].",
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
    "transcript": "[[He buys nine books|Él compra nueve libros]].",
    "content": {
      "title": "Nueve libros",
      "instructions": "Ordena la frase indicando la cantidad (9).",
      "correctSentence": "[[He buys nine books|Él compra nueve libros]].",
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
    "transcript": "[[The ruler is ten centimeters|La regla es diez centímetros]].",
    "content": {
      "title": "La Regla",
      "instructions": "Elige la palabra para 'regla'.",
      "questions": [
        {
          "question": "[[The ten centimeters|La]] (_____) [[is|es diez centímetros]].",
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
    "transcript": "[[I need an old notebook|Yo necesito un viejo cuaderno]].",
    "content": {
      "title": "Libreta Vieja",
      "instructions": "Ordena usando el artículo para 'old'.",
      "correctSentence": "[[I need an old notebook|Yo necesito un viejo cuaderno]].",
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
    "transcript": "[[Five and five is ten|Cinco y cinco es diez]].",
    "content": {
      "title": "Suma de cincos",
      "instructions": "Resuelve la operación (5 + 5).",
      "questions": [
        {
          "question": "[[Five and five is|Cinco y cinco es]] (_____) .",
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
    "transcript": "[[My teacher has a big desk|Mi profesor tiene un grande escritorio]].",
    "content": {
      "title": "Escritorio del Profe",
      "instructions": "Ordena la descripción.",
      "correctSentence": "[[My teacher has a big desk|Mi profesor tiene un grande escritorio]].",
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
    "transcript": "[[He buys a new car|Él compra un nuevo coche]].",
    "content": {
      "title": "Coche Nuevo",
      "instructions": "Elige el artículo para 'new'.",
      "questions": [
        {
          "question": "[[He buys|Él compra]] (_____) [[new car|nuevo coche]].",
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
    "transcript": "[[I read four pages today|Yo leo cuatro páginas hoy]].",
    "content": {
      "title": "Leyendo páginas",
      "instructions": "Ordena la frase indicando la cantidad (4).",
      "correctSentence": "[[I read four pages today|Yo leo cuatro páginas hoy]].",
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
    "transcript": "[[The backpack is on the chair|La mochila es en la silla]].",
    "content": {
      "title": "Mochila y Silla",
      "instructions": "Elige la palabra para 'mochila'.",
      "questions": [
        {
          "question": "[[The on the chair|La]] (_____) [[is|es en la silla]].",
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
    "transcript": "[[We see an airplane|Nosotros vemos un avión]].",
    "content": {
      "title": "Avión y Artículo",
      "instructions": "Ordena usando el artículo para 'airplane'.",
      "correctSentence": "[[We see an airplane|Nosotros vemos un avión]].",
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
    "transcript": "[[There are, two one apples, three|Hay son un, dos, tres manzanas]].",
    "content": {
      "title": "Conteo",
      "instructions": "¿Cuántas manzanas hay si tienes 1, 2 y 3?",
      "questions": [
        {
          "question": "[[I have|Yo tengo]] (_____) [[apples|manzanas]].",
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
    "transcript": "[[Take a, please pencil|Toma un lápiz, por favor]].",
    "content": {
      "title": "Toma un lápiz",
      "instructions": "Ordena la instrucción.",
      "correctSentence": "[[Take a, please pencil|Toma un lápiz, por favor]].",
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
    "transcript": "[[It is an excellent ruler|Eso es una excelente regla]].",
    "content": {
      "title": "Excelente Regla",
      "instructions": "Elige el artículo según el sonido de 'excellent'.",
      "questions": [
        {
          "question": "[[It is|Eso es]] (_____) [[excellent ruler|excelente regla]].",
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
    "transcript": "[[She has five red books|Ella tiene cinco rojos libros]].",
    "content": {
      "title": "Cinco libros rojos",
      "instructions": "Ordena: cantidad + adjetivo + nombre.",
      "correctSentence": "[[She has five red books|Ella tiene cinco rojos libros]].",
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
    "transcript": "[[I write with the pencil|Yo escribo con el lápiz]].",
    "content": {
      "title": "Escribir",
      "instructions": "Elige el objeto con el que escribes (no boli).",
      "questions": [
        {
          "question": "[[I write with the|Yo escribo con el]] (_____) .",
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
    "transcript": "[[They have a small bag|Ellos tienen una pequeña mochila]].",
    "content": {
      "title": "Mochila pequeña",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[They have a small bag|Ellos tienen una pequeña mochila]].",
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
    "transcript": "[[Welcome to|Bienvenido a]] [[our classroom|nuestra clase]]. [[In this room|En esta habitación]] [[there are|hay]] [[ten desks|diez escritorios]] [[and|y]] [[ten chairs|diez sillas]]. [[My desk|Mi escritorio]] [[is near|está cerca de]] [[the window|la ventana]]. [[I have|Yo tengo]] [[a big bag|una mochila grande]] [[with|con]] [[three books|tres libros]], [[two notebooks|dos libretas]], [[and|y]] [[five pens|cinco bolígrafos]].",
    "content": {
      "title": "[[Reading: Our Classroom|Lectura: Nuestra Clase]]",
      "instructions": "[[Read about the classroom and supplies|Lee sobre el aula y materiales]].",
      "questions": [
        {
          "question": "[[Welcome to|Bienvenido a]] [[our classroom|nuestra clase]]. [[In this room|En esta habitación]] [[there are|hay]] [[ten desks|diez escritorios]] [[and|y]] [[ten chairs|diez sillas]]. [[My desk|Mi escritorio]] [[is near|está cerca de]] [[the window|la ventana]]. [[I have|Yo tengo]] [[a big bag|una mochila grande]] [[with|con]] [[three books|tres libros]], [[two notebooks|dos libretas]], [[and|y]] [[five pens|cinco bolígrafos]].",
          "options": ["[[I have read the text|He leído el texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click to continue|Haz clic para continuar]]."
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
    "transcript": "[[How many|Cuántos]] [[desks|escritorios]] [[are in the room|hay en la habitación]]?",
    "content": {
      "title": "[[Comprehension: Desks|Comprensión: Escritorios]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[How many|Cuántos]] [[desks|escritorios]] [[are in the room|hay en la habitación]]?",
          "options": ["[[Five|Cinco]]", "[[Ten|Diez]]", "[[Three|Tres]]"],
          "correctAnswer": 1,
          "explanation": "[[The text says|El texto dice]]: \"[[there are ten desks|hay diez escritorios]]\"."
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
    "transcript": "[[How many|Cuántos]] [[pens|bolígrafos]] [[does the person have|tiene la persona]]?",
    "content": {
      "title": "[[Comprehension: Supplies|Comprensión: Materiales]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[How many|Cuántos]] [[pens|bolígrafos]] [[does the person have|tiene la persona]]?",
          "options": ["[[Five|Cinco]]", "[[Two|Dos]]", "[[Three|Tres]]"],
          "correctAnswer": 0,
          "explanation": "[[The text says|El texto dice]]: \"[[five pens|cinco bolígrafos]]\"."
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
    "transcript": "[[Where|Dónde]] [[is|está]] [[the desk|el escritorio]]?",
    "content": {
      "title": "[[Comprehension: Location|Comprensión: Ubicación]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|está]] [[the desk|el escritorio]]?",
          "options": ["[[Near the window|Cerca de la ventana]]", "[[Near the door|Cerca de la puerta]]", "[[Near the chair|Cerca de la silla]]"],
          "correctAnswer": 0,
          "explanation": "[[The text says|El texto dice]]: \"[[the desk is near the window|el escritorio está cerca de la ventana]]\"."
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
    "transcript": "[[I am|Yo estoy]] [[at the store|en la tienda]]. [[I need|Yo necesito]] [[to buy|comprar]] [[things|cosas]] [[for school|para la escuela]]. [[I want|Yo quiero]] [[one ruler|una regla]], [[four pencils|cuatro lápices]], [[and|y]] [[six notebooks|seis libretas]]. [[I also|Yo también]] [[need|necesito]] [[an eraser|una goma]] [[and|y]] [[a new bag|una nueva mochila]]. [[The total price|El total precio]] [[is|es]] [[nine dollars|nueve dólares]].",
    "content": {
      "title": "[[Reading: At the Store|Lectura: En la Tienda]]",
      "instructions": "[[Read about buying supplies|Lee sobre comprar materiales]].",
      "questions": [
        {
          "question": "[[I am|Yo estoy]] [[at the store|en la tienda]]. [[I need|Yo necesito]] [[to buy|comprar]] [[things|cosas]] [[for school|para la escuela]]. [[I want|Yo quiero]] [[one ruler|una regla]], [[four pencils|cuatro lápices]], [[and|y]] [[six notebooks|seis libretas]]. [[I also|Yo también]] [[need|necesito]] [[an eraser|una goma]] [[and|y]] [[a new bag|una nueva mochila]]. [[The total price|El total precio]] [[is|es]] [[nine dollars|nueve dólares]].",
          "options": ["[[I have read the text|He leído el texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click to continue|Haz clic para continuar]]."
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
    "transcript": "[[How many|Cuántos]] [[pencils|lápices]] [[does the person want|quiere la persona]]?",
    "content": {
      "title": "[[Comprehension: Pencils|Comprensión: Lápices]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[How many|Cuántos]] [[pencils|lápices]] [[does the person want|quiere la persona]]?",
          "options": ["[[Six|Seis]]", "[[One|Uno]]", "[[Four|Cuatro]]"],
          "correctAnswer": 2,
          "explanation": "[[The text says|El texto dice]]: \"[[four pencils|cuatro lápices]]\"."
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
    "transcript": "[[How many|Cuántas]] [[notebooks|libretas]] [[does the person buy|compra la persona]]?",
    "content": {
      "title": "[[Comprehension: Notebooks|Comprensión: Libretas]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[How many|Cuántas]] [[notebooks|libretas]] [[does the person buy|compra la persona]]?",
          "options": ["[[Six|Seis]]", "[[Four|Cuatro]]", "[[Nine|Nueve]]"],
          "correctAnswer": 0,
          "explanation": "[[The text says|El texto dice]]: \"[[six notebooks|seis libretas]]\"."
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
    "transcript": "[[What|Cuál]] [[is|es]] [[the total price|el precio total]]?",
    "content": {
      "title": "[[Comprehension: Price|Comprensión: Precio]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[the total price|el precio total]]?",
          "options": ["[[Six dollars|Seis dólares]]", "[[Nine dollars|Nueve dólares]]", "[[Four dollars|Cuatro dólares]]"],
          "correctAnswer": 1,
          "explanation": "[[The text says|El texto dice]]: \"[[nine dollars|nueve dólares]]\"."
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
    "transcript": "[[Today|Hoy]] [[we have|tenemos]] [[an art class|una clase de arte]]. [[I need|Yo necesito]] [[a big piece of paper|un trozo de papel grande]] [[and|y]] [[an orange pencil|un lápiz naranja]]. [[My friend|Mi amigo]] [[has|tiene]] [[ten colors|diez colores]]. [[We draw|Dibujamos]] [[a big house|una casa grande]] [[with|con]] [[four windows|cuatro ventanas]] [[and|y]] [[one door|una puerta]].",
    "content": {
      "title": "[[Reading: Art Class|Lectura: Clase de Arte]]",
      "instructions": "[[Read about the drawing class|Lee sobre la clase de dibujo]].",
      "questions": [
        {
          "question": "[[Today|Hoy]] [[we have|tenemos]] [[an art class|una clase de arte]]. [[I need|Yo necesito]] [[a big piece of paper|un trozo de papel grande]] [[and|y]] [[an orange pencil|un lápiz naranja]]. [[My friend|Mi amigo]] [[has|tiene]] [[ten colors|diez colores]]. [[We draw|Dibujamos]] [[a big house|una casa grande]] [[with|con]] [[four windows|cuatro ventanas]] [[and|y]] [[one door|una puerta]].",
          "options": ["[[I have read the text|He leído el texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click to continue|Haz clic para continuar]]."
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
    "transcript": "[[What color pencil|Qué color de lápiz]] [[does the person need|necesita la persona]]?",
    "content": {
      "title": "[[Comprehension: Color|Comprensión: Color]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[What color pencil|Qué color de lápiz]] [[does the person need|necesita la persona]]?",
          "options": ["[[Orange|Naranja]]", "[[Red|Rojo]]", "[[Blue|Azul]]"],
          "correctAnswer": 0,
          "explanation": "[[The text says|El texto dice]]: \"[[an orange pencil|un lápiz naranja]]\"."
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
    "transcript": "[[How many|Cuántas]] [[windows|ventanas]] [[does the house have|tiene la casa]]?",
    "content": {
      "title": "[[Comprehension: The House|Comprensión: La Casa]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[How many|Cuántas]] [[windows|ventanas]] [[does the house have|tiene la casa]]?",
          "options": ["[[One|Una]]", "[[Four|Cuatro]]", "[[Ten|Diez]]"],
          "correctAnswer": 1,
          "explanation": "[[The text says|El texto dice]]: \"[[four windows|cuatro ventanas]]\"."
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
    "transcript": "[[How many|Cuántos]] [[colors|colores]] [[does the friend have|tiene el amigo]]?",
    "content": {
      "title": "[[Comprehension: Friend|Comprensión: Amigo]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[How many|Cuántos]] [[colors|colores]] [[does the friend have|tiene el amigo]]?",
          "options": ["[[Four|Cuatro]]", "[[One|Uno]]", "[[Ten|Diez]]"],
          "correctAnswer": 2,
          "explanation": "[[The text says|El texto dice]]: \"[[the friend has ten colors|el amigo tiene diez colores]]\"."
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
    "transcript": "[[The teacher|La profesora]] [[is|está]] [[in the room|en la habitación]]. [[She says|Ella dice]]: '[[Please open|Por favor abrid]] [[your books|vuestros libros]] [[to page seven|a la página siete]]. [[Take a pen|Tomad un bolígrafo]] [[and write|y escribid]] [[your name|vuestro nombre]].' [[There are|Hay]] [[nine students|nueve estudiantes]] [[in the class|en la clase]].",
    "content": {
      "title": "[[Reading: Teacher's Instructions|Lectura: Instrucciones de la Profesora]]",
      "instructions": "[[Read what the teacher says|Lee lo que la profesora dice]].",
      "questions": [
        {
          "question": "[[The teacher|La profesora]] [[is|está]] [[in the room|en la habitación]]. [[She says|Ella dice]]: '[[Please open|Por favor abrid]] [[your books|vuestros libros]] [[to page seven|a la página siete]]. [[Take a pen|Tomad un bolígrafo]] [[and write|y escribid]] [[your name|vuestro nombre]].' [[There are|Hay]] [[nine students|nueve estudiantes]] [[in the class|en la clase]].",
          "options": ["[[I have read the text|He leído el texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click to continue|Haz clic para continuar]]."
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
    "transcript": "[[What page|Qué página]] [[is the class on|está la clase]]?",
    "content": {
      "title": "[[Comprehension: Page|Comprensión: Página]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[What page|Qué página]] [[is the class on|está la clase]]?",
          "options": ["[[Seven|Siete]]", "[[Nine|Nueve]]", "[[Two|Dos]]"],
          "correctAnswer": 0,
          "explanation": "[[The teacher says|La profesora dice]]: \"[[page seven|página siete]]\"."
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
    "transcript": "[[How many|Cuántos]] [[students|estudiantes]] [[are in the class|hay en la clase]]?",
    "content": {
      "title": "[[Comprehension: Students|Comprensión: Estudiantes]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[How many|Cuántos]] [[students|estudiantes]] [[are in the class|hay en la clase]]?",
          "options": ["[[Seven|Siete]]", "[[Ten|Diez]]", "[[Nine|Nueve]]"],
          "correctAnswer": 2,
          "explanation": "[[The text says|El texto dice]]: \"[[nine students|nueve estudiantes]]\"."
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
    "transcript": "[[What|Qué]] [[do the students need|necesitan los estudiantes]] [[to write their name|para escribir su nombre]]?",
    "content": {
      "title": "[[Comprehension: Supplies|Comprensión: Materiales]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[do the students need|necesitan los estudiantes]] [[to write their name|para escribir su nombre]]?",
          "options": ["[[A ruler|Una regla]]", "[[An eraser|Una goma]]", "[[A pen|Un bolígrafo]]"],
          "correctAnswer": 2,
          "explanation": "[[The teacher says|La profesora dice]]: \"[[Take a pen|Tomad un bolígrafo]]\"."
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
    "transcript": "[[Look at|Mira a]] [[this table|esta mesa]]. [[There are|Hay]] [[four books|cuatro libros]] [[and|y]] [[one notebook|una libreta]]. [[There is|Hay]] [[also|también]] [[a pen|un bolígrafo]] [[and|y]] [[a pencil|un lápiz]]. [[I need|Yo necesito]] [[an eraser|una goma]] [[to clean|para borrar]] [[my mistakes|mis errores]]. [[The table|La mesa]] [[is in|está en]] [[the library|la biblioteca]]. [[It is|Es]] [[number ten|la número diez]].",
    "content": {
      "title": "[[Reading: In the Library|Lectura: En la Biblioteca]]",
      "instructions": "[[Read about the library table|Lee sobre la mesa de la biblioteca]].",
      "questions": [
        {
          "question": "[[Look at|Mira a]] [[this table|esta mesa]]. [[There are|Hay]] [[four books|cuatro libros]] [[and|y]] [[one notebook|una libreta]]. [[There is|Hay]] [[also|también]] [[a pen|un bolígrafo]] [[and|y]] [[a pencil|un lápiz]]. [[I need|Yo necesito]] [[an eraser|una goma]] [[to clean|para borrar]] [[my mistakes|mis errores]]. [[The table|La mesa]] [[is in|está en]] [[the library|la biblioteca]]. [[It is|Es]] [[number ten|la número diez]].",
          "options": ["[[I have read the text|He leído el texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click to continue|Haz clic para continuar]]."
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
    "transcript": "[[How many|Cuántos]] [[books|libros]] [[are on the table|hay en la mesa]]?",
    "content": {
      "title": "[[Comprehension: Books|Comprensión: Libros]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[How many|Cuántos]] [[books|libros]] [[are on the table|hay en la mesa]]?",
          "options": ["[[Four|Cuatro]]", "[[One|Uno]]", "[[Ten|Diez]]"],
          "correctAnswer": 0,
          "explanation": "[[The text says|El texto dice]]: \"[[four books|cuatro libros]]\"."
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
    "transcript": "[[What|Cuál]] [[is|es]] [[the table number|el número de la mesa]]?",
    "content": {
      "title": "[[Comprehension: Table|Comprensión: Mesa]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[the table number|el número de la mesa]]?",
          "options": ["[[Four|Cuatro]]", "[[Ten|Diez]]", "[[One|Uno]]"],
          "correctAnswer": 1,
          "explanation": "[[The text says|El texto dice]]: \"[[number ten|número diez]]\"."
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
    "transcript": "[[Where|Dónde]] [[is|está]] [[the table|la mesa]]?",
    "content": {
      "title": "[[Comprehension: Library|Comprensión: Biblioteca]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|está]] [[the table|la mesa]]?",
          "options": ["[[In the library|En la biblioteca]]", "[[In the classroom|En el aula]]", "[[At the store|En la tienda]]"],
          "correctAnswer": 0,
          "explanation": "[[The text says|El texto dice]]: \"[[in the library|en la biblioteca]]\"."
        }
      ]
    },
    "topicName": "Reading"
  }
];
