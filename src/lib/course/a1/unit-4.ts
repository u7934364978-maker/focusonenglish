import { Exercise } from '@/lib/exercise-generator';

export const UNIT_4_EXERCISES: Exercise[] = [
  {
    "id": "a1-u4-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Ten.",
    "content": {
      "title": "Vocabulario: Números 1-10",
      "instructions": "Aprende los números básicos en inglés.",
      "items": [
        { "front": "[[One|Uno]]", "back": "Uno" },
        { "front": "[[Two|Dos]]", "back": "Dos" },
        { "front": "[[Three|Tres]]", "back": "Tres" },
        { "front": "[[Four|Cuatro]]", "back": "Cuatro" },
        { "front": "[[Five|Cinco]]", "back": "Cinco" },
        { "front": "[[Six|Seis]]", "back": "Seis" },
        { "front": "[[Seven|Siete]]", "back": "Siete" },
        { "front": "[[Eight|Ocho]]", "back": "Ocho" },
        { "front": "[[Nine|Nueve]]", "back": "Nueve" },
        { "front": "[[Ten|Diez]]", "back": "Diez" }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e2",
    "type": "flashcard",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "Pen. Pencil. Book. Notebook. Eraser. Ruler. Sharpener. Desk. Chair. Bag.",
    "content": {
      "title": "Objetos de Clase",
      "instructions": "Aprende el nombre de objetos comunes en el aula.",
      "items": [
        { "front": "[[Pen|Bolígrafo]]", "back": "Bolígrafo" },
        { "front": "[[Pencil|Lápiz]]", "back": "Lápiz" },
        { "front": "[[Book|Libro]]", "back": "Libro" },
        { "front": "[[Notebook|Libreta]]", "back": "Libreta" },
        { "front": "[[Eraser|Goma de borrar]]", "back": "Goma" },
        { "front": "[[Ruler|Regla]]", "back": "Regla" },
        { "front": "[[Desk|Escritorio]]", "back": "Escritorio" },
        { "front": "[[Bag|Mochila/Bolso]]", "back": "Mochila" }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e2.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "easy",
    "transcript": "A book. A pen. An eraser. An orange.",
    "content": {
      "title": "Uso de 'a' y 'an'",
      "instructions": "Elige el artículo correcto.",
      "questions": [
        {
          "question": "_______ [[book|libro]]",
          "options": ["[[a|un]]", "[[an|un]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'a' antes de sonidos de consonante."
        },
        {
          "question": "_______ [[eraser|goma]]",
          "options": ["[[a|una]]", "[[an|una]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'an' antes de sonidos de vocal."
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
    "transcript": "How many books? Three books.",
    "content": {
      "title": "Contando Objetos",
      "instructions": "¿Cuántos libros hay?",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] (3) _______ [[books|libros]].",
          "options": ["[[three|tres]]", "[[two|dos]]", "[[four|cuatro]]"],
          "correctAnswer": 0,
          "explanation": "Three es el número 3."
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
    "transcript": "This is a pencil.",
    "content": {
      "title": "Identificando Objetos",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[This|Esto]] [[is|es]] [[a|un]] [[pencil|lápiz]].",
      "words": ["[[pencil|lápiz]].", "[[is|es]]", "[[a|un]]", "[[This|Esto]]"],
      "explanation": "Estructura básica para identificar un objeto."
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
    "transcript": "It is an apple.",
    "content": {
      "title": "Vocales y Artículos",
      "instructions": "Elige el artículo para 'apple'.",
      "questions": [
        {
          "question": "[[It|Eso]] [[is|es]] (_____) [[apple|manzana]].",
          "options": ["[[an|una]]", "[[a|una]]"],
          "correctAnswer": 0,
          "explanation": "'Apple' empieza con vocal (a), usamos 'an'."
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
    "transcript": "I have seven pencils.",
    "content": {
      "title": "Cantidad",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[have|tengo]] [[seven|siete]] [[pencils|lápices]].",
      "words": ["[[pencils|lápices]].", "[[seven|siete]]", "[[have|tengo]]", "[[I|Yo]]"],
      "explanation": "Seven es el número 7."
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
    "transcript": "Where is my notebook?",
    "content": {
      "title": "Buscando Objetos",
      "instructions": "Elige la palabra para 'libreta'.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|está]] [[my|mi]] (_____) ?",
          "options": ["[[notebook|libreta]]", "[[pen|bolígrafo]]", "[[ruler|regla]]"],
          "correctAnswer": 0,
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
    "transcript": "I need a notebook and an eraser.",
    "content": {
      "title": "Objetos y Artículos",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[need|necesito]] [[a|una]] [[notebook|libreta]] [[and|y]] [[an|una]] [[eraser|goma]].",
      "words": ["[[eraser|goma]].", "[[an|una]]", "[[and|y]]", "[[notebook|libreta]]", "[[a|una]]", "[[need|necesito]]", "[[I|Yo]]"],
      "explanation": "Practicamos a vs an con objetos de clase."
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
    "transcript": "One, two, three, four, five.",
    "content": {
      "title": "Secuencia Numérica",
      "instructions": "¿Qué número sigue?",
      "questions": [
        {
          "question": "[[Four|Cuatro]], (_____).",
          "options": ["[[five|cinco]]", "[[six|seis]]", "[[three|tres]]"],
          "correctAnswer": 0,
          "explanation": "Después del 4 (four) viene el 5 (five)."
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
    "transcript": "The pen is on the desk.",
    "content": {
      "title": "Ubicación Básica",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[The|El]] [[pen|bolígrafo]] [[is|está]] [[on|en]] [[the|el]] [[desk|escritorio]].",
      "words": ["[[desk|escritorio]].", "[[the|el]]", "[[on|en]]", "[[is|está]]", "[[pen|bolígrafo]]", "[[The|El]]"],
      "explanation": "Estructura: El objeto + is + lugar."
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
    "transcript": "I have eight apples.",
    "content": {
      "title": "Contar Frutas",
      "instructions": "Elige el número 8.",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] (_____) [[apples|manzanas]].",
          "options": ["[[eight|ocho]]", "[[nine|nueve]]", "[[seven|siete]]"],
          "correctAnswer": 0,
          "explanation": "Eight es el número 8."
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
    "transcript": "Open your book, please.",
    "content": {
      "title": "Instrucciones de Clase",
      "instructions": "Ordena la orden del profesor.",
      "correctSentence": "[[Open|Abre]] [[your|tu]] [[book|libro]], [[please|por favor]].",
      "words": ["[[please|por favor]].", "[[book|libro]],", "[[your|tu]]", "[[Open|Abre]]"],
      "explanation": "Imperativo simple para instrucciones."
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
    "transcript": "It is a ruler.",
    "content": {
      "title": "Artículos",
      "instructions": "Elige el artículo para 'ruler'.",
      "questions": [
        {
          "question": "[[It|Eso]] [[is|es]] (_____) [[ruler|regla]].",
          "options": ["[[a|una]]", "[[an|una]]"],
          "correctAnswer": 0,
          "explanation": "'Ruler' empieza por consonante, usamos 'a'."
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
    "transcript": "There are ten students.",
    "content": {
      "title": "Hay diez estudiantes",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[There|Hay]] [[are|son]] [[ten|diez]] [[students|estudiantes]].",
      "words": ["[[students|estudiantes]].", "[[ten|diez]]", "[[are|son]]", "[[There|Hay]]"],
      "explanation": "Ten es el número 10."
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
    "transcript": "I sit on a chair.",
    "content": {
      "title": "Muebles de Clase",
      "instructions": "¿Dónde te sientas?",
      "questions": [
        {
          "question": "[[I|Yo]] [[sit|me siento]] [[on|en]] [[a|una]] (_____) .",
          "options": ["[[chair|silla]]", "[[bag|mochila]]", "[[ruler|regla]]"],
          "correctAnswer": 0,
          "explanation": "Chair significa silla."
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
    "transcript": "He has an office.",
    "content": {
      "title": "Artículos y Lugares",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[He|Él]] [[has|tiene]] [[an|una]] [[office|oficina]].",
      "words": ["[[office|oficina]].", "[[an|una]]", "[[has|tiene]]", "[[He|Él]]"],
      "explanation": "Office empieza por vocal, usamos 'an'."
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
    "transcript": "Two plus two is four.",
    "content": {
      "title": "Matemáticas Básicas",
      "instructions": "Resuelve la suma.",
      "questions": [
        {
          "question": "[[Two|Dos]] [[plus|más]] [[two|dos]] [[is|es]] (_____) .",
          "options": ["[[four|cuatro]]", "[[three|tres]]", "[[five|cinco]]"],
          "correctAnswer": 0,
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
    "transcript": "My bag is big.",
    "content": {
      "title": "Descripción",
      "instructions": "Ordena la oración.",
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
    "transcript": "Six, seven, eight, nine, ten.",
    "content": {
      "title": "Secuencias",
      "instructions": "¿Qué número falta?",
      "questions": [
        {
          "question": "[[Six|Seis]], [[seven|siete]], (_____), [[nine|nueve]].",
          "options": ["[[eight|ocho]]", "[[ten|diez]]", "[[five|cinco]]"],
          "correctAnswer": 0,
          "explanation": "El número entre el 7 y el 9 es el 8 (eight)."
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
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "I have one brother.",
    "content": {
      "title": "Números",
      "instructions": "Elige el número 1.",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] (_____) [[brother|hermano]].",
          "options": ["[[one|uno]]", "[[ten|diez]]", "[[two|dos]]"],
          "correctAnswer": 0,
          "explanation": "One es el número 1."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e21.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e22",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "I write with a pencil.",
    "content": {
      "title": "Escribir",
      "instructions": "¿Con qué escribes?",
      "questions": [
        {
          "question": "[[I|Yo]] [[write|escribo]] [[with|con]] [[a|un]] (_____) .",
          "options": ["[[pencil|lápiz]]", "[[desk|escritorio]]", "[[eraser|goma]]"],
          "correctAnswer": 0,
          "explanation": "Pencil es la herramienta para escribir."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e22.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "easy",
    "transcript": "She has an umbrella.",
    "content": {
      "title": "Artículos",
      "instructions": "Elige el artículo correcto.",
      "questions": [
        {
          "question": "[[She|Ella]] [[has|tiene]] (_____) [[umbrella|paraguas]].",
          "options": ["[[an|un]]", "[[a|un]]"],
          "correctAnswer": 0,
          "explanation": "Umbrella empieza por vocal, usamos 'an'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e23.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e24",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "Where is the ruler?",
    "content": {
      "title": "La Regla",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Where|Dónde]] [[is|está]] [[the|la]] [[ruler|regla]]?",
      "words": ["[[ruler|regla]]?", "[[the|la]]", "[[is|está]]", "[[Where|Dónde]]"],
      "explanation": "Pregunta por la ubicación de un objeto."
    },
    "audioUrl": "audio/a1/unit-4/e24.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "Nine minus six is three.",
    "content": {
      "title": "Restas",
      "instructions": "Resuelve la operación.",
      "questions": [
        {
          "question": "[[Nine|Nueve]] [[minus|menos]] [[six|seis]] [[is|es]] (_____) .",
          "options": ["[[three|tres]]", "[[two|dos]]", "[[four|cuatro]]"],
          "correctAnswer": 0,
          "explanation": "9 - 6 = 3 (three)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e25.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e26",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "I have two sharpeners.",
    "content": {
      "title": "Sacapuntas",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[have|tengo]] [[two|dos]] [[sharpeners|sacapuntas]].",
      "words": ["[[sharpeners|sacapuntas]].", "[[two|dos]]", "[[have|tengo]]", "[[I|Yo]]"],
      "explanation": "Sharpeners es el plural de sacapuntas."
    },
    "audioUrl": "audio/a1/unit-4/e26.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "easy",
    "transcript": "He is an architect.",
    "content": {
      "title": "Artículos y Profesiones",
      "instructions": "Elige el artículo correcto.",
      "questions": [
        {
          "question": "[[He|Él]] [[is|es]] (_____) [[architect|arquitecto]].",
          "options": ["[[an|un]]", "[[a|un]]"],
          "correctAnswer": 0,
          "explanation": "Architect empieza por vocal, usamos 'an'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e27.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e28",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "I am nine years old.",
    "content": {
      "title": "Edad",
      "instructions": "Elige el número 9.",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|tengo]] (_____) [[years|años]] [[old|de edad]].",
          "options": ["[[nine|nueve]]", "[[eight|ocho]]", "[[ten|diez]]"],
          "correctAnswer": 0,
          "explanation": "Nine es el número 9."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e28.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e29",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "Is this your bag?",
    "content": {
      "title": "¿Es tu mochila?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is|¿Es]] [[this|esta]] [[your|tu]] [[bag|mochila]]?",
      "words": ["[[bag|mochila]]?", "[[your|tu]]", "[[this|esta]]", "[[Is|¿Es]]"],
      "explanation": "Preguntando por la propiedad de un objeto."
    },
    "audioUrl": "audio/a1/unit-4/e29.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e30",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "Five plus one is six.",
    "content": {
      "title": "Sumas",
      "instructions": "Resuelve.",
      "questions": [
        {
          "question": "[[Five|Cinco]] [[plus|más]] [[one|uno]] [[is|es]] (_____) .",
          "options": ["[[six|seis]]", "[[seven|siete]]", "[[four|cuatro]]"],
          "correctAnswer": 0,
          "explanation": "5 + 1 = 6 (six)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e30.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "The teacher has a whiteboard.",
    "content": {
      "title": "La Pizarra",
      "instructions": "Elige la palabra para 'pizarra'.",
      "questions": [
        {
          "question": "[[The|El]] [[teacher|profesor]] [[has|tiene]] [[a|una]] (_____) .",
          "options": ["[[whiteboard|pizarra]]", "[[chair|silla]]", "[[ruler|regla]]"],
          "correctAnswer": 0,
          "explanation": "Whiteboard es pizarra (normalmente blanca)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e31.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e32",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "easy",
    "transcript": "I have an idea.",
    "content": {
      "title": "Tengo una idea",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[have|tengo]] [[an|una]] [[idea|idea]].",
      "words": ["[[idea|idea]].", "[[an|una]]", "[[have|tengo]]", "[[I|Yo]]"],
      "explanation": "Idea empieza por vocal, usamos 'an'."
    },
    "audioUrl": "audio/a1/unit-4/e32.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "Seven, six, five, four.",
    "content": {
      "title": "Cuenta Atrás",
      "instructions": "¿Qué número falta?",
      "questions": [
        {
          "question": "[[Seven|Siete]], (_____), [[five|cinco]], [[four|cuatro]].",
          "options": ["[[six|seis]]", "[[eight|ocho]]", "[[three|tres]]"],
          "correctAnswer": 0,
          "explanation": "En cuenta regresiva, después del 7 viene el 6 (six)."
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
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "Where are my books?",
    "content": {
      "title": "Libros Perdidos",
      "instructions": "Ordena la pregunta plural.",
      "correctSentence": "[[Where|Dónde]] [[are|están]] [[my|mis]] [[books|libros]]?",
      "words": ["[[books|libros]]?", "[[my|mis]]", "[[are|están]]", "[[Where|Dónde]]"],
      "explanation": "Uso de 'are' para objetos en plural."
    },
    "audioUrl": "audio/a1/unit-4/e34.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "easy",
    "transcript": "It is an orange book.",
    "content": {
      "title": "Adjetivos y Artículos",
      "instructions": "Elige el artículo correcto.",
      "questions": [
        {
          "question": "[[It|Eso]] [[is|es]] (_____) [[orange|naranja]] [[book|libro]].",
          "options": ["[[an|un]]", "[[a|un]]"],
          "correctAnswer": 0,
          "explanation": "'Orange' empieza por vocal, usamos 'an' aunque el sustantivo sea 'book'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e35.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e36",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "There are four chairs.",
    "content": {
      "title": "Sillas",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[There|Hay]] [[are|son]] [[four|cuatro]] [[chairs|sillas]].",
      "words": ["[[chairs|sillas]].", "[[four|cuatro]]", "[[are|son]]", "[[There|Hay]]"],
      "explanation": "Four es el número 4."
    },
    "audioUrl": "audio/a1/unit-4/e36.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "I need a ruler.",
    "content": {
      "title": "Necesidades",
      "instructions": "Elige la palabra para 'regla'.",
      "questions": [
        {
          "question": "[[I|Yo]] [[need|necesito]] [[a|una]] (_____) .",
          "options": ["[[ruler|regla]]", "[[pen|bolígrafo]]", "[[pencil|lápiz]]"],
          "correctAnswer": 0,
          "explanation": "Ruler es regla."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e37.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e38",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "I have zero pencils. I have no pencils.",
    "content": {
      "title": "Cero",
      "instructions": "Elige el número 0.",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] (_____) [[pencils|lápices]].",
          "options": ["[[zero|cero]]", "[[one|uno]]", "[[ten|diez]]"],
          "correctAnswer": 0,
          "explanation": "Zero es el número 0."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e38.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e39",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "easy",
    "transcript": "Is it an old book?",
    "content": {
      "title": "Libro Viejo",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is|¿Es]] [[it|ello]] [[an|un]] [[old|viejo]] [[book|libro]]?",
      "words": ["[[book|libro]]?", "[[old|viejo]]", "[[an|un]]", "[[it|ello]]", "[[Is|¿Es]]"],
      "explanation": "Usamos 'an' porque 'old' empieza por vocal."
    },
    "audioUrl": "audio/a1/unit-4/e39.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e40",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "easy",
    "transcript": "Close your notebook.",
    "content": {
      "title": "Cerrar",
      "instructions": "Completa la orden.",
      "questions": [
        {
          "question": "(_____) [[your|tu]] [[notebook|libreta]].",
          "options": ["[[Close|Cierra]]", "[[Open|Abre]]", "[[Write|Escribe]]"],
          "correctAnswer": 0,
          "explanation": "Close significa cerrar."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e40.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "medium",
    "transcript": "There are five people in the office.",
    "content": {
      "title": "Personas",
      "instructions": "Elige el número correcto.",
      "questions": [
        {
          "question": "[[There|Hay]] [[are|son]] [[five|cinco]] (5) (_____) [[in|en]] [[the|la]] [[office|oficina]].",
          "options": ["[[people|personas]]", "[[peoples|personas (incorrecto)]]", "[[person|persona]]"],
          "correctAnswer": 0,
          "explanation": "People es el plural de person."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e41.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e42",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "medium",
    "transcript": "The teacher is at the whiteboard.",
    "content": {
      "title": "El Profesor",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[The|El]] [[teacher|profesor]] [[is|está]] [[at|en]] [[the|la]] [[whiteboard|pizarra]].",
      "words": ["[[whiteboard|pizarra]].", "[[the|la]]", "[[at|en]]", "[[is|está]]", "[[teacher|profesor]]", "[[The|El]]"],
      "explanation": "Ubicación del profesor en el aula."
    },
    "audioUrl": "audio/a1/unit-4/e42.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "medium",
    "transcript": "I have an expensive pen.",
    "content": {
      "title": "Objetos Caros",
      "instructions": "Elige el artículo correcto.",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] (_____) [[expensive|caro]] [[pen|bolígrafo]].",
          "options": ["[[an|un]]", "[[a|un]]"],
          "correctAnswer": 0,
          "explanation": "Expensive empieza por vocal, usamos 'an'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e43.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "medium",
    "transcript": "How many chairs are in the classroom? Eight chairs.",
    "content": {
      "title": "Preguntas de Cantidad",
      "instructions": "Responde la pregunta.",
      "questions": [
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[chairs|sillas]] [[are|hay]]?",
          "options": ["[[Eight|Ocho]]", "[[Ten|Diez]]", "[[Two|Dos]]"],
          "correctAnswer": 0,
          "explanation": "Eight es 8."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e44.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e45",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "medium",
    "transcript": "Please, take a seat.",
    "content": {
      "title": "Toma Asiento",
      "instructions": "Ordena la invitación.",
      "correctSentence": "[[Please|Por favor]], [[take|toma]] [[a|un]] [[seat|asiento]].",
      "words": ["[[seat|asiento]].", "[[a|un]]", "[[take|toma]]", "[[Please|Por favor]],"],
      "explanation": "Expresión cortés para sentarse."
    },
    "audioUrl": "audio/a1/unit-4/e45.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e46",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "My phone number has a seven.",
    "content": {
      "title": "Dígitos",
      "instructions": "Identifica el número 7.",
      "questions": [
        {
          "question": "[[Number|Número]] (_____) [[is|es]] [[seven|siete]].",
          "options": ["[[7|7]]", "[[6|6]]", "[[8|8]]"],
          "correctAnswer": 0,
          "explanation": "Seven es 7."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e46.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e47",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Articles: a/an",
    "difficulty": "medium",
    "transcript": "Do you need a pencil?",
    "content": {
      "title": "¿Necesitas un lápiz?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Do|Aux]] [[you|tú]] [[need|necesitas]] [[a|un]] [[pencil|lápiz]]?",
      "words": ["[[pencil|lápiz]]?", "[[a|un]]", "[[need|necesitas]]", "[[you|tú]]", "[[Do|Aux]]"],
      "explanation": "Pregunta de necesidad simple."
    },
    "audioUrl": "audio/a1/unit-4/e47.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e48",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "medium",
    "transcript": "I don't have an eraser. Can I borrow one?",
    "content": {
      "title": "Pedir Prestado",
      "instructions": "Completa la negación.",
      "questions": [
        {
          "question": "[[I|Yo]] [[don't|no]] [[have|tengo]] (_____) [[eraser|goma]].",
          "options": ["[[an|una]]", "[[a|una]]", "[[the|la]]"],
          "correctAnswer": 0,
          "explanation": "Eraser empieza por vocal, usamos 'an'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e48.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u4-e49",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "medium",
    "transcript": "There are nine books on the table.",
    "content": {
      "title": "Libros en la Mesa",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[There|Hay]] [[are|allí (plural)]] [[nine|nueve]] [[books|libros]] [[on|en]] [[the|la]] [[table|mesa]].",
      "words": ["[[table|mesa]].", "[[on|en]]", "[[books|libros]]", "[[nine|nueve]]", "[[are|allí (plural)]]", "[[There|Hay]]", "[[the|la]]"],
      "explanation": "Combinando números y objetos."
    },
    "audioUrl": "audio/a1/unit-4/e49.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Classroom Objects",
    "difficulty": "medium",
    "transcript": "Where is the ruler? It is in my bag.",
    "content": {
      "title": "Ubicación",
      "instructions": "Responde la pregunta.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|está]] [[the|la]] [[ruler|regla]]?",
          "options": ["[[It is in my bag|Está en mi mochila]]", "[[It is a pen|Es un bolígrafo]]", "[[I am a student|Soy estudiante]]"],
          "correctAnswer": 0,
          "explanation": "Respuesta lógica sobre la ubicación de un objeto."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e50.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u4-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "Welcome to our classroom. In this room, there are ten desks and ten chairs. My desk is near the window. I have a big bag with three books, two notebooks, and five pens. My teacher has a large whiteboard and a computer on her desk. It is a very nice place to study.",
    "content": {
      "title": "Nuestra Clase",
      "instructions": "Lee el texto y responde las preguntas.",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[desks|escritorios]] [[are|hay]] [[in|en]] [[the|la]] [[room|habitación]]?",
          "options": ["[[Ten|Diez]]", "[[Five|Cinco]]", "[[Three|Tres]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'there are ten desks'."
        },
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[pens|bolígrafos]] [[does|hace]] [[the|la]] [[person|persona]] [[have|tener]]?",
          "options": ["[[Five|Cinco]]", "[[Three|Tres]]", "[[Two|Dos]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'five pens'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e51.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "I am at the store. I need to buy things for school. I want one ruler, four pencils, and six notebooks. I also need an eraser and a new bag. The total price is nine dollars. I am happy with my new things.",
    "content": {
      "title": "Comprando Material",
      "instructions": "Lee sobre las compras y responde.",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[pencils|lápices]] [[does|hace]] [[the|la]] [[person|persona]] [[want|querer]]?",
          "options": ["[[Four|Cuatro]]", "[[Six|Seis]]", "[[One|Uno]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'four pencils'."
        },
        {
          "question": "[[How|Cuánto]] [[much|mucho]] [[is|es]] [[the|el]] [[total|total]] [[price|precio]]?",
          "options": ["[[Nine dollars|Nueve dólares]]", "[[Four dollars|Cuatro dólares]]", "[[Six dollars|Seis dólares]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'nine dollars'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e52.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "My bag is very heavy today. Inside the bag, I have eight books for my classes. I also have an apple for my lunch and an orange for a snack. I have one pen and one pencil. I don't have a notebook because it is at home.",
    "content": {
      "title": "Una Mochila Pesada",
      "instructions": "Lee sobre la mochila y responde.",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[books|libros]] [[are|están]] [[in|en]] [[the|la]] [[bag|mochila]]?",
          "options": ["[[Eight|Ocho]]", "[[One|Uno]]", "[[Zero|Cero]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'I have eight books'."
        },
        {
          "question": "[[Does|Hacer]] [[the|la]] [[person|persona]] [[have|tener]] [[a|una]] [[notebook|libreta]]?",
          "options": ["[[No, it is at home|No, está en casa]]", "[[Yes, one notebook|Sí, una libreta]]", "[[Yes, two notebooks|Sí, dos libretas]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'I don't have a notebook because it is at home'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e53.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "The teacher is in the room. She says: 'Please open your books to page seven. Take a pen and write your name.' There are nine students in the class. Two students don't have a pen, so the teacher gives them an extra one.",
    "content": {
      "title": "Instrucciones del Profesor",
      "instructions": "Lee y responde sobre la clase.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[page|página]] [[is|está]] [[the|la]] [[class|clase]] [[on|en]]?",
          "options": ["[[Seven|Siete]]", "[[Nine|Nueve]]", "[[Two|Dos]]"],
          "correctAnswer": 0,
          "explanation": "El profesor dice: 'page seven'."
        },
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[students|estudiantes]] [[don't|no]] [[have|tienen]] [[a|un]] [[pen|bolígrafo]]?",
          "options": ["[[Two|Dos]]", "[[Nine|Nueve]]", "[[Seven|Siete]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'Two students don't have a pen'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e54.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "I have a small desk in my bedroom. On the desk, there is a lamp, a computer, and a notebook. I also have five pencils in a small box. I use an eraser when I make a mistake. It is a quiet place to work.",
    "content": {
      "title": "Mi Escritorio",
      "instructions": "Lee sobre el escritorio y responde.",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[pencils|lápices]] [[are|hay]] [[on|en]] [[the|el]] [[desk|escritorio]]?",
          "options": ["[[Five|Cinco]]", "[[One|Uno]]", "[[Zero|Cero]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'five pencils'."
        },
        {
          "question": "[[Where|Dónde]] [[is|está]] [[the|el]] [[desk|escritorio]]?",
          "options": ["[[In the bedroom|En el dormitorio]]", "[[In the kitchen|En la cocina]]", "[[In the garden|En el jardín]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'in my bedroom'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e55.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "Today we have an art class. I need a big piece of paper and an orange pencil. My friend has ten colors. We draw a big house with four windows and one door. The teacher likes our drawings. It is a fun class.",
    "content": {
      "title": "Clase de Arte",
      "instructions": "Lee sobre la clase de arte y responde.",
      "questions": [
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[windows|ventanas]] [[does|hace]] [[the|la]] [[house|casa]] [[have|tener]]?",
          "options": ["[[Four|Cuatro]]", "[[Ten|Diez]]", "[[One|Una]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'four windows'."
        },
        {
          "question": "[[What|Qué]] [[color|color]] [[pencil|lápiz]] [[does|hace]] [[the|la]] [[person|persona]] [[need|necesitar]]?",
          "options": ["[[Orange|Naranja]]", "[[Red|Rojo]]", "[[Blue|Azul]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'an orange pencil'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e56.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e57",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "In my office, there are eight people. Each person has a computer and a telephone. I have a comfortable chair and a large desk. I also have a pen and a notebook for my ideas. My office is number five on the first floor.",
    "content": {
      "title": "En la Oficina",
      "instructions": "Lee sobre la oficina y responde.",
      "questions": [
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[people|personas]] [[are|hay]] [[in|en]] [[the|la]] [[office|oficina]]?",
          "options": ["[[Eight|Ocho]]", "[[Five|Cinco]]", "[[One|Una]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'there are eight people'."
        },
        {
          "question": "[[What|Cuál]] [[is|es]] [[the|el]] [[office|oficina]] [[number|número]]?",
          "options": ["[[Five|Cinco]]", "[[Eight|Ocho]]", "[[One|Uno]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'office is number five'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e57.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "I have a list for school. I need two pens, three pencils, and one ruler. I also need an eraser. The total number of things is seven. I have all my things in my bag. I am ready for class tomorrow.",
    "content": {
      "title": "La Lista de Material",
      "instructions": "Lee la lista y responde.",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[pencils|lápices]] [[does|hace]] [[the|la]] [[person|persona]] [[need|necesitar]]?",
          "options": ["[[Three|Tres]]", "[[Two|Dos]]", "[[Seven|Siete]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'three pencils'."
        },
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[things|cosas]] [[are|hay]] [[in|en]] [[total|total]]?",
          "options": ["[[Seven|Siete]]", "[[Three|Tres]]", "[[Two|Dos]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'total number of things is seven'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e58.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "My daughter is six years old. She goes to school every day. She has a pink bag with an eraser and a pencil. She also has a small book for her drawings. She likes her teacher very much. Her teacher's name is Mrs. White.",
    "content": {
      "title": "La Mochila de mi Hija",
      "instructions": "Lee sobre la hija y responde.",
      "questions": [
        {
          "question": "[[How|Qué]] [[old|vieja]] [[is|es]] [[the|la]] [[daughter|hija]]?",
          "options": ["[[Six|Seis]]", "[[Five|Cinco]]", "[[White|Blanca]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'is six years old'."
        },
        {
          "question": "[[What|Qué]] [[color|color]] [[is|es]] [[her|su]] [[bag|mochila]]?",
          "options": ["[[Pink|Rosa]]", "[[White|Blanca]]", "[[Orange|Naranja]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'a pink bag'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e59.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u4-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "Look at this table. There are four books and one notebook. There is also a pen and a pencil. I need an eraser to clean my mistakes. The table is in the library. It is number ten. Many students use this table every day.",
    "content": {
      "title": "En la Biblioteca",
      "instructions": "Lee sobre la mesa de la biblioteca y responde.",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[books|libros]] [[are|hay]] [[on|en]] [[the|la]] [[table|mesa]]?",
          "options": ["[[Four|Cuatro]]", "[[One|Uno]]", "[[Ten|Diez]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'There are four books'."
        },
        {
          "question": "[[What|Cuál]] [[is|es]] [[the|el]] [[table|mesa]] [[number|número]]?",
          "options": ["[[Ten|Diez]]", "[[Four|Cuatro]]", "[[One|Uno]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'table is number ten'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-4/e60.mp3",
    "topicName": "Reading"
  }
];
