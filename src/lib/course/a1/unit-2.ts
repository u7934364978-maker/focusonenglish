import { Exercise } from '@/lib/exercise-generator';

export const UNIT_2_EXERCISES: Exercise[] = [
  // ==========================================
  // MODULE 1: COUNTRIES & NATIONALITIES (1-10)
  // ==========================================
  {
    "id": "a1-u2-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Countries & Nationalities",
    "difficulty": "easy",
    "transcript": "[[Spain|España]]. [[Spanish|Español]]. [[England|Inglaterra]]. [[English|Inglés]]. [[The United States|Estados Unidos]]. [[American|Americano]]. [[Mexico|México]]. [[Mexican|Mexicano]]. [[France|Francia]]. [[French|Francés]].",
    "content": {
      "title": "Vocabulario: Países y Nacionalidades",
      "instructions": "Aprende nombres de países y cómo decir la nacionalidad.",
      "items": [
        { "front": "[[Spain|España]]", "back": "Spanish ([[Español|Español]])" },
        { "front": "[[England|Inglaterra]]", "back": "English ([[Inglés|Inglés]])" },
        { "front": "[[The United States|Estados Unidos]]", "back": "American ([[Americano|Americano]])" },
        { "front": "[[Mexico|México]]", "back": "Mexican ([[Mexicano|Mexicano]])" },
        { "front": "[[France|Francia]]", "back": "French ([[Francés|Francés]])" }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "easy",
    "transcript": "[[He|Él]] [[is|es]] [[from|de]] [[Spain|España]].",
    "content": {
      "title": "Pronombre: He",
      "instructions": "Elige el pronombre correcto para un hombre.",
      "questions": [
        {
          "question": "(_____) [[is|es]] [[from|de]] [[Spain|España]].",
          "options": ["[[She|Ella]]", "[[He|Él]]", "[[It|Eso]]"],
          "correctAnswer": 1,
          "explanation": "Usamos 'He' para hombres."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e2.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "easy",
    "transcript": "[[She|Ella]] [[is|es]] [[American|americana]].",
    "content": {
      "title": "Pronombre: She",
      "instructions": "Elige el pronombre correcto para una mujer.",
      "questions": [
        {
          "question": "(_____) [[is|es]] [[American|americana]].",
          "options": ["[[She|Ella]]", "[[They|Ellos]]", "[[We|Nosotros]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'She' para mujeres."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e3.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Affirmative",
    "difficulty": "easy",
    "transcript": "[[We|Nosotros]] [[are|somos]] [[from|de]] [[France|Francia]].",
    "content": {
      "title": "Verbo To Be: Plural",
      "instructions": "Elige la forma correcta del verbo 'to be' para 'We'.",
      "questions": [
        {
          "question": "[[We|Nosotros]] (_____) [[from|de]] [[France|Francia]].",
          "options": ["[[is|es]]", "[[am|soy]]", "[[are|somos]]"],
          "correctAnswer": 2,
          "explanation": "Con 'We' usamos 'are'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e4.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e5",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "easy",
    "transcript": "[[They|Ellos]] [[are|son]] [[Mexican|mexicanos]].",
    "content": {
      "title": "Ellos son mexicanos",
      "instructions": "Ordena las palabras para formar la frase.",
      "correctSentence": "[[They|Ellos]] [[are|son]] [[Mexican|mexicanos]].",
      "words": ["[[Mexican|mexicanos]].", "[[are|son]]", "[[They|Ellos]]"],
      "explanation": "Sujeto (They) + Verbo (are) + Nacionalidad (Mexican)."
    },
    "audioUrl": "audio/a1/unit-2/e5.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "[[Seven|Siete]] [[plus|más]] [[three|tres]] [[is|es]] [[ten|diez]].",
    "content": {
      "title": "Números 1-10",
      "instructions": "¿Cuánto es 7 + 3?",
      "questions": [
        {
          "question": "[[Seven|Siete]] [[plus|más]] [[three|tres]] [[is|es]] (_____) .",
          "options": ["[[nine|nueve]]", "[[eight|ocho]]", "[[ten|diez]]"],
          "correctAnswer": 2,
          "explanation": "7 + 3 = 10 (ten)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e6.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e7",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Affirmative",
    "difficulty": "easy",
    "transcript": "[[It|Eso]] [[is|es]] [[from|de]] [[England|Inglaterra]].",
    "content": {
      "title": "Verbo To Be: It",
      "instructions": "Elige la forma correcta para el pronombre neutro.",
      "questions": [
        {
          "question": "[[It|Eso]] (_____) [[from|de]] [[England|Inglaterra]].",
          "options": ["[[are|es]]", "[[is|es]]", "[[am|soy]]"],
          "correctAnswer": 1,
          "explanation": "Con 'It' usamos 'is'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e7.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e8",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[am|soy]] [[from|de]] [[Mexico|México]].",
    "content": {
      "title": "Soy de México",
      "instructions": "Ordena la frase indicando tu origen.",
      "correctSentence": "[[I|Yo]] [[am|soy]] [[from|de]] [[Mexico|México]].",
      "words": ["[[Mexico|México]].", "[[from|de]]", "[[am|soy]]", "[[I|Yo]]"],
      "explanation": "I + am + from + Country."
    },
    "audioUrl": "audio/a1/unit-2/e8.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "easy",
    "transcript": "[[She|Ella]] [[is|es]] [[French|francesa]].",
    "content": {
      "title": "Nacionalidad: Francesa",
      "instructions": "Elige la nacionalidad correcta para alguien de Francia.",
      "questions": [
        {
          "question": "[[She|Ella]] [[is|es]] [[from|de]] [[France|Francia]]. [[She|Ella]] [[is|es]] (_____) .",
          "options": ["[[French|francesa]]", "[[France|Francia]]", "[[Spanish|española]]"],
          "correctAnswer": 0,
          "explanation": "De Francia (France) eres francés/francesa (French)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e9.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "[[Two|Dos]], [[four|cuatro]], [[six|seis]], [[eight|ocho]].",
    "content": {
      "title": "Series Numéricas",
      "instructions": "¿Qué número sigue en la serie: 2, 4, 6...?",
      "questions": [
        {
          "question": "[[Two|Dos]], [[four|cuatro]], [[six|seis]], (_____) .",
          "options": ["[[seven|siete]]", "[[eight|ocho]]", "[[nine|nueve]]"],
          "correctAnswer": 1,
          "explanation": "La serie va de dos en dos."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e10.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e11",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be: Affirmative",
    "difficulty": "easy",
    "transcript": "[[He|Él]] [[is|es]] [[my|mi]] [[friend|amigo]].",
    "content": {
      "title": "Él es mi amigo",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[He|Él]] [[is|es]] [[my|mi]] [[friend|amigo]].",
      "words": ["[[friend|amigo]].", "[[my|mi]]", "[[is|es]]", "[[He|Él]]"],
      "explanation": "Sujeto + Verbo + Complemento."
    },
    "audioUrl": "audio/a1/unit-2/e11.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "easy",
    "transcript": "[[London|Londres]] [[is|está]] [[in|en]] [[England|Inglaterra]].",
    "content": {
      "title": "Geografía Básica",
      "instructions": "¿Dónde está Londres?",
      "questions": [
        {
          "question": "[[London|Londres]] [[is|está]] [[in|en]] (_____) .",
          "options": ["[[Mexico|México]]", "[[Spain|España]]", "[[England|Inglaterra]]"],
          "correctAnswer": 2,
          "explanation": "London está en England."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e12.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e13",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "easy",
    "transcript": "[[We|Nosotros]] [[are|somos]] [[Spanish|españoles]].",
    "content": {
      "title": "Somos españoles",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[We|Nosotros]] [[are|somos]] [[Spanish|españoles]].",
      "words": ["[[Spanish|españoles]].", "[[are|somos]]", "[[We|Nosotros]]"],
      "explanation": "We + are + nationality."
    },
    "audioUrl": "audio/a1/unit-2/e13.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Affirmative",
    "difficulty": "easy",
    "transcript": "[[You|Tú]] [[are|eres]] [[American|americano]].",
    "content": {
      "title": "Verbo To Be: You",
      "instructions": "Elige la forma correcta para 'You'.",
      "questions": [
        {
          "question": "[[You|Tú]] (_____) [[American|americano]].",
          "options": ["[[are|eres]]", "[[is|es]]", "[[am|soy]]"],
          "correctAnswer": 0,
          "explanation": "Con 'You' siempre usamos 'are'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e14.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e15",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[have|tengo]] [[five|cinco]] [[apples|manzanas]].",
    "content": {
      "title": "Tengo cinco manzanas",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[I|Yo]] [[have|tengo]] [[five|cinco]] [[apples|manzanas]].",
      "words": ["[[apples|manzanas]].", "[[five|cinco]]", "[[have|tengo]]", "[[I|Yo]]"],
      "explanation": "Five es el número 5."
    },
    "audioUrl": "audio/a1/unit-2/e15.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "easy",
    "transcript": "[[They|Ellos]] [[are|son]] [[from|de]] [[France|Francia]].",
    "content": {
      "title": "Pronombre: They",
      "instructions": "Elige el pronombre para un grupo de personas.",
      "questions": [
        {
          "question": "(_____) [[are|son]] [[from|de]] [[France|Francia]].",
          "options": ["[[We|Nosotros]]", "[[He|Él]]", "[[They|Ellos]]"],
          "correctAnswer": 2,
          "explanation": "Usamos 'They' para referirnos a otros en plural."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e16.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e17",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "easy",
    "transcript": "[[She|Ella]] [[is|es]] [[Mexican|mexicana]].",
    "content": {
      "title": "Ella es mexicana",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[She|Ella]] [[is|es]] [[Mexican|mexicana]].",
      "words": ["[[Mexican|mexicana]].", "[[is|es]]", "[[She|Ella]]"],
      "explanation": "She + is + nationality."
    },
    "audioUrl": "audio/a1/unit-2/e17.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "easy",
    "transcript": "[[Nine|Nueve]] [[minus|menos]] [[five|cinco]] [[is|es]] [[four|cuatro]].",
    "content": {
      "title": "Matemáticas Simples",
      "instructions": "¿Cuánto es 9 - 5?",
      "questions": [
        {
          "question": "[[Nine|Nueve]] [[minus|menos]] [[five|cinco]] [[is|es]] (_____) .",
          "options": ["[[four|cuatro]]", "[[three|tres]]", "[[five|cinco]]"],
          "correctAnswer": 0,
          "explanation": "9 - 5 = 4 (four)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e18.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e19",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be: Affirmative",
    "difficulty": "easy",
    "transcript": "[[It|Eso]] [[is|es]] [[a|un]] [[new|nuevo]] [[car|coche]].",
    "content": {
      "title": "Es un coche nuevo",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[It|Eso]] [[is|es]] [[a|un]] [[new|nuevo]] [[car|coche]].",
      "words": ["[[car|coche]].", "[[new|nuevo]]", "[[a|un]]", "[[is|es]]", "[[It|Eso]]"],
      "explanation": "It + is + complement."
    },
    "audioUrl": "audio/a1/unit-2/e19.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "easy",
    "transcript": "[[Is|Está]] [[Paris|París]] [[in|en]] [[France|Francia]]?",
    "content": {
      "title": "París",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "[[Is|Está]] [[Paris|París]] [[in|en]] (_____) ?",
          "options": ["[[France|Francia]]", "[[Spain|España]]", "[[Mexico|México]]"],
          "correctAnswer": 0,
          "explanation": "Paris está en France."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e20.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "medium",
    "transcript": "[[Maria|María]] [[is|es]] [[Spanish|española]]. [[She|Ella]] [[is|es]] [[from|de]] [[Madrid|Madrid]].",
    "content": {
      "title": "Sustituyendo Nombres",
      "instructions": "Elige el pronombre que sustituye a 'Maria'.",
      "questions": [
        {
          "question": "[[Maria|María]] [[is|es]] [[Spanish|española]]. (_____) [[is|es]] [[from|de]] [[Madrid|Madrid]].",
          "options": ["[[He|Él]]", "[[She|Ella]]", "[[They|Ellos]]"],
          "correctAnswer": 1,
          "explanation": "Maria es mujer, usamos 'She'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e21.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e22",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be: Affirmative",
    "difficulty": "medium",
    "transcript": "[[We|Nosotros]] [[are|somos]] [[American|americanos]] [[students|estudiantes]].",
    "content": {
      "title": "Estudiantes americanos",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[We|Nosotros]] [[are|somos]] [[American|americanos]] [[students|estudiantes]].",
      "words": ["[[students|estudiantes]].", "[[American|americanos]]", "[[are|somos]]", "[[We|Nosotros]]"],
      "explanation": "We + are + adjective + noun."
    },
    "audioUrl": "audio/a1/unit-2/e22.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "medium",
    "transcript": "[[John|John]] [[is|es]] [[American|americano]]. [[He|Él]] [[is|es]] [[from|de]] [[New York|Nueva York]].",
    "content": {
      "title": "Origen y Nacionalidad",
      "instructions": "Elige la nacionalidad de alguien de Nueva York.",
      "questions": [
        {
          "question": "[[John|John]] [[is|es]] [[from|de]] [[New York|Nueva York]]. [[He|Él]] [[is|es]] (_____) .",
          "options": ["[[English|inglés]]", "[[American|americano]]", "[[Mexican|mexicano]]"],
          "correctAnswer": 1,
          "explanation": "Nueva York está en EE.UU., John es American."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e23.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e24",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "medium",
    "transcript": "[[There|Hay]] [[are|hay]] [[eight|ocho]] [[books|libros]] [[here|aquí]].",
    "content": {
      "title": "Hay ocho libros",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[There|Hay]] [[are|hay]] [[eight|ocho]] [[books|libros]] [[here|aquí]].",
      "words": ["[[here|aquí]].", "[[books|libros]]", "[[eight|ocho]]", "[[are|hay]]", "[[There|Hay]]"],
      "explanation": "Eight es 8."
    },
    "audioUrl": "audio/a1/unit-2/e24.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "medium",
    "transcript": "[[Tom|Tom]] [[and|y]] [[I|yo]] [[are|estamos]] [[here|aquí]]. [[We|Nosotros]] [[are|estamos]] [[happy|felices]].",
    "content": {
      "title": "Pronombre: We",
      "instructions": "Elige el pronombre que incluye al hablante.",
      "questions": [
        {
          "question": "[[Tom|Tom]] [[and|y]] [[I|yo]] [[are|estamos]] [[here|aquí]]. (_____) [[are|estamos]] [[happy|felices]].",
          "options": ["[[They|Ellos]]", "[[We|Nosotros]]", "[[You|Vosotros]]"],
          "correctAnswer": 1,
          "explanation": "Tom + I = We (Nosotros)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e25.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e26",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "medium",
    "transcript": "[[Is|Está]] [[she|ella]] [[from|de]] [[France|Francia]]?",
    "content": {
      "title": "¿Es ella de Francia?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is|Está]] [[she|ella]] [[from|de]] [[France|Francia]]?",
      "words": ["[[France|Francia]]?", "[[from|de]]", "[[she|ella]]", "[[Is|Está]]"],
      "explanation": "Verbo (Is) + Sujeto (she) + Origen."
    },
    "audioUrl": "audio/a1/unit-2/e26.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Affirmative",
    "difficulty": "medium",
    "transcript": "[[The|El]] [[dog|perro]] [[is|es]] [[black|negro]]. [[It|Eso]] [[is|es]] [[my|mi]] [[dog|perro]].",
    "content": {
      "title": "To Be con Animales",
      "instructions": "Elige la forma correcta para 'The dog'.",
      "questions": [
        {
          "question": "[[The|El]] [[dog|perro]] (_____) [[black|negro]].",
          "options": ["[[are|es]]", "[[am|soy]]", "[[is|es]]"],
          "correctAnswer": 2,
          "explanation": "El perro es singular (it), usamos 'is'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e27.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e28",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "medium",
    "transcript": "[[They|Ellos]] [[are|son]] [[not|no]] [[English|ingleses]].",
    "content": {
      "title": "Ellos no son ingleses",
      "instructions": "Ordena la frase negativa.",
      "correctSentence": "[[They|Ellos]] [[are|son]] [[not|no]] [[English|ingleses]].",
      "words": ["[[English|ingleses]].", "[[not|no]]", "[[are|son]]", "[[They|Ellos]]"],
      "explanation": "Sujeto + are + not + nationality."
    },
    "audioUrl": "audio/a1/unit-2/e28.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[have|tengo]] [[one|un]] [[brother|hermano]] [[and|y]] [[two|dos]] [[sisters|hermanas]].",
    "content": {
      "title": "Contando Hermanos",
      "instructions": "¿Cuántas hermanas tiene?",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] [[one|un]] [[brother|hermano]] [[and|y]] (2) (_____) [[sisters|hermanas]].",
          "options": ["[[three|tres]]", "[[one|una]]", "[[two|dos]]"],
          "correctAnswer": 2,
          "explanation": "2 se dice 'two'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e29.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e30",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be: Affirmative",
    "difficulty": "medium",
    "transcript": "[[You|Tú]] [[and|y]] [[Peter|Peter]] [[are|sois]] [[French|franceses]].",
    "content": {
      "title": "Tú y Peter",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[You|Tú]] [[and|y]] [[Peter|Peter]] [[are|sois]] [[French|franceses]].",
      "words": ["[[French|franceses]].", "[[are|sois]]", "[[Peter|Peter]]", "[[and|y]]", "[[You|Tú]]"],
      "explanation": "You + Peter = You (plural/vosotros), usamos 'are'."
    },
    "audioUrl": "audio/a1/unit-2/e30.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "medium",
    "transcript": "[[Where|De dónde]] [[are|eres]] [[you|tú]] [[from|]]?",
    "content": {
      "title": "¿De dónde eres?",
      "instructions": "Completa la pregunta de origen.",
      "questions": [
        {
          "question": "[[Where|De dónde]] (_____) [[you|tú]] [[from|]]?",
          "options": ["[[is|es]]", "[[are|eres]]", "[[am|soy]]"],
          "correctAnswer": 1,
          "explanation": "Pregunta estándar: Where are you from?"
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e31.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e32",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "medium",
    "transcript": "[[He|Él]] [[is|es]] [[a|un]] [[Mexican|mexicano]] [[man|hombre]].",
    "content": {
      "title": "Hombre mexicano",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[He|Él]] [[is|es]] [[a|un]] [[Mexican|mexicano]] [[man|hombre]].",
      "words": ["[[man|hombre]].", "[[Mexican|mexicano]]", "[[a|un]]", "[[is|es]]", "[[He|Él]]"],
      "explanation": "He + is + a + adjective + noun."
    },
    "audioUrl": "audio/a1/unit-2/e32.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "To Be: Affirmative",
    "difficulty": "medium",
    "transcript": "[[Madrid|Madrid]] [[is|es]] [[a|una]] [[big|grande]] [[city|ciudad]].",
    "content": {
      "title": "Ciudad Grande",
      "instructions": "Elige el verbo correcto para 'Madrid'.",
      "questions": [
        {
          "question": "[[Madrid|Madrid]] (_____) [[a|una]] [[big|grande]] [[city|ciudad]].",
          "options": ["[[are|es]]", "[[is|es]]", "[[am|soy]]"],
          "correctAnswer": 1,
          "explanation": "Madrid es singular (it), usamos 'is'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e33.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e34",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "medium",
    "transcript": "[[She|Ella]] [[is|es]] [[my|mi]] [[mother|madre]].",
    "content": {
      "title": "Ella es mi madre",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[She|Ella]] [[is|es]] [[my|mi]] [[mother|madre]].",
      "words": ["[[mother|madre]].", "[[my|mi]]", "[[is|es]]", "[[She|Ella]]"],
      "explanation": "She + is + complement."
    },
    "audioUrl": "audio/a1/unit-2/e34.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[have|tengo]] [[four|cuatro]] [[blue|azules]] [[pens|bolígrafos]].",
    "content": {
      "title": "Bolis Azules",
      "instructions": "¿Cuántos bolígrafos tiene?",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] (4) (_____) [[blue|azules]] [[pens|bolígrafos]].",
          "options": ["[[five|cinco]]", "[[four|cuatro]]", "[[six|seis]]"],
          "correctAnswer": 1,
          "explanation": "4 se dice 'four'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e35.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e36",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "medium",
    "transcript": "[[Are|Son]] [[they|ellos]] [[from|de]] [[The United States|Estados Unidos]]?",
    "content": {
      "title": "¿Son de EE.UU.?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Are|Son]] [[they|ellos]] [[from|de]] [[The United States|Estados Unidos]]?",
      "words": ["[[States|Unidos]]?", "[[United|Estados]]", "[[The|]]", "[[from|de]]", "[[they|ellos]]", "[[Are|Son]]"],
      "explanation": "Are + they + from + Country?"
    },
    "audioUrl": "audio/a1/unit-2/e36.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "medium",
    "transcript": "[[They|Ellos]] [[are|son]] [[from|de]] [[Spain|España]]. [[They|Ellos]] [[are|son]] [[Spanish|españoles]].",
    "content": {
      "title": "Nacionalidad Plural",
      "instructions": "Elige la nacionalidad correcta para 'they'.",
      "questions": [
        {
          "question": "[[They|Ellos]] [[are|son]] [[from|de]] [[Spain|España]]. [[They|Ellos]] [[are|son]] (_____) .",
          "options": ["[[Spain|España]]", "[[Spanish|españoles]]", "[[English|ingleses]]"],
          "correctAnswer": 1,
          "explanation": "De España son Spanish."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e37.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e38",
    "type": "sentence-building",
    "level": "A1",
    "topic": "To Be: Affirmative",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[am|soy]] [[a|un]] [[new|nuevo]] [[student|estudiante]].",
    "content": {
      "title": "Nuevo estudiante",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[I|Yo]] [[am|soy]] [[a|un]] [[new|nuevo]] [[student|estudiante]].",
      "words": ["[[student|estudiante]].", "[[new|nuevo]]", "[[a|un]]", "[[am|soy]]", "[[I|Yo]]"],
      "explanation": "I + am + a + adjective + noun."
    },
    "audioUrl": "audio/a1/unit-2/e38.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers 1-10",
    "difficulty": "medium",
    "transcript": "[[Three|Tres]], [[six|seis]], [[nine|nueve]].",
    "content": {
      "title": "Series de Tres",
      "instructions": "¿Cuál sigue: 3, 6...?",
      "questions": [
        {
          "question": "[[Three|Tres]], [[six|seis]], (_____) .",
          "options": ["[[nine|nueve]]", "[[seven|siete]]", "[[eight|ocho]]"],
          "correctAnswer": 0,
          "explanation": "La serie va de tres en tres."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e39.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e40",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "medium",
    "transcript": "[[He|Él]] [[and|y]] [[she|ella]] [[are|son]] [[friends|amigos]].",
    "content": {
      "title": "Él y ella",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[He|Él]] [[and|y]] [[she|ella]] [[are|son]] [[friends|amigos]].",
      "words": ["[[friends|amigos]].", "[[are|son]]", "[[she|ella]]", "[[and|y]]", "[[He|Él]]"],
      "explanation": "He + She = They, usamos 'are'."
    },
    "audioUrl": "audio/a1/unit-2/e40.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // MODULE 1: READING COMPREHENSION (41-60)
  // 5 Passages x (1 Text + 3 Questions) = 20 slides
  // ==========================================

  // PASSAGE 1: INTERNATIONAL FRIENDS
  {
    "id": "a1-u2-e41",
    "type": "reading",
    "level": "A1",
    "topic": "Reading Phase",
    "difficulty": "medium",
    "transcript": "[[Hello|Hola]]. [[I|Yo]] [[am|soy]] [[David|David]]. [[I|Yo]] [[am|soy]] [[American|americano]] [[from|de]] [[New York|Nueva York]]. [[This|Este]] [[is|es]] [[my|mi]] [[friend|amigo]] [[Luis|Luis]]. [[He|Él]] [[is|es]] [[Spanish|español]] [[from|de]] [[Madrid|Madrid]]. [[We|Nosotros]] [[are|somos]] [[students|estudiantes]] [[in|en]] [[London|Londres]]. [[We|Nosotros]] [[are|estamos]] [[happy|felices]] [[here|aquí]].",
    "content": {
      "title": "Lectura: Amigos Internacionales",
      "instructions": "Lee sobre David y Luis.",
      "questions": []
    },
    "audioUrl": "audio/a1/unit-2/e41.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[David|David]] [[from|]]?",
          "options": ["[[Madrid|Madrid]]", "[[New York|Nueva York]]", "[[London|Londres]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'American from New York'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e42.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[Luis's|la de Luis]] [[nationality|nacionalidad]]?",
          "options": ["[[Spanish|Español]]", "[[American|Americano]]", "[[English|Inglés]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice 'He is Spanish from Madrid'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e43.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[are|están]] [[David|David]] [[and|y]] [[Luis|Luis]] [[now|ahora]]?",
          "options": ["[[In Madrid|En Madrid]]", "[[In New York|En Nueva York]]", "[[In London|En Londres]]"],
          "correctAnswer": 2,
          "explanation": "El texto dice 'We are students in London'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e44.mp3",
    "topicName": "Reading"
  },

  // PASSAGE 2: THE FRENCH CLASS
  {
    "id": "a1-u2-e45",
    "type": "reading",
    "level": "A1",
    "topic": "Reading Phase",
    "difficulty": "medium",
    "transcript": "[[This|Esta]] [[is|es]] [[our|nuestra]] [[class|clase]]. [[There|Allí]] [[are|hay]] [[ten|diez]] [[students|estudiantes]]. [[Marie|Marie]] [[and|y]] [[Sophie|Sophie]] [[are|son]] [[from|de]] [[France|Francia]]. [[They|Ellas]] [[are|son]] [[French|francesas]]. [[They|Ellas]] [[are|están]] [[very|muy]] [[intelligent|inteligentes]]. [[The|El]] [[teacher|profesor]] [[is|es]] [[Spanish|español]]. [[He|Él]] [[is|es]] [[from|de]] [[Barcelona|Barcelona]].",
    "content": {
      "title": "Lectura: La Clase de Francés",
      "instructions": "Lee sobre los estudiantes y el profesor.",
      "questions": []
    },
    "audioUrl": "audio/a1/unit-2/e45.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e46",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[students|estudiantes]] [[are|hay]] [[in|en]] [[the|la]] [[class|clase]]?",
          "options": ["[[Five|Cinco]]", "[[Ten|Diez]]", "[[Seven|Siete]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'There are ten students'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e46.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Are|Son]] [[Marie|Marie]] [[and|y]] [[Sophie|Sophie]] [[Mexican|mexicanas]]?",
          "options": ["[[Yes, they are.|Sí.]]", "[[No, they are French.|No, son francesas.]]", "[[No, they are American.|No.]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'They are French'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e47.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e48",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[the|el]] [[teacher|profesor]] [[from|]]?",
          "options": ["[[France|Francia]]", "[[London|Londres]]", "[[Barcelona|Barcelona]]"],
          "correctAnswer": 2,
          "explanation": "El texto dice 'He is from Barcelona'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e48.mp3",
    "topicName": "Reading"
  },

  // PASSAGE 3: THE NEW CAR
  {
    "id": "a1-u2-e49",
    "type": "reading",
    "level": "A1",
    "topic": "Reading Phase",
    "difficulty": "medium",
    "transcript": "[[Look|Mira]] [[at|a]] [[the|el]] [[car|coche]]. [[It|Eso]] [[is|es]] [[red|rojo]]. [[It|Eso]] [[is|es]] [[from|de]] [[England|Inglaterra]]. [[It|Eso]] [[is|es]] [[an|un]] [[English|inglés]] [[car|coche]]. [[The|El]] [[owner|dueño]] [[is|es]] [[Peter|Peter]]. [[He|Él]] [[is|es]] [[English|inglés]] [[too|también]]. [[He|Él]] [[is|es]] [[very|muy]] [[happy|feliz]].",
    "content": {
      "title": "Lectura: El Coche Nuevo",
      "instructions": "Lee sobre el coche de Peter.",
      "questions": []
    },
    "audioUrl": "audio/a1/unit-2/e49.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[What|De qué]] [[color|color]] [[is|es]] [[the|el]] [[car|coche]]?",
          "options": ["[[Blue|Azul]]", "[[Red|Rojo]]", "[[Black|Negro]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'It is red'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e50.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Is|Es]] [[the|el]] [[car|coche]] [[from|de]] [[Spain|España]]?",
          "options": ["[[Yes, it is.|Sí.]]", "[[No, it is English.|No, es inglés.]]", "[[No, it is Mexican.|No.]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'It is from England'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e51.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Is|Está]] [[Peter|Peter]] [[happy|feliz]]?",
          "options": ["[[Yes, he is.|Sí, lo está.]]", "[[No, he is sad.|No, está triste.]]", "[[No, he is tired.|No.]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice 'He is very happy'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e52.mp3",
    "topicName": "Reading"
  },

  // PASSAGE 4: MEXICO VACATION
  {
    "id": "a1-u2-e53",
    "type": "reading",
    "level": "A1",
    "topic": "Reading Phase",
    "difficulty": "medium",
    "transcript": "[[We|Nosotros]] [[are|estamos]] [[in|en]] [[Mexico|México]]. [[It|Eso]] [[is|es]] [[a|un]] [[beautiful|hermoso]] [[country|país]]. [[My|Mis]] [[parents|padres]] [[are|están]] [[with|con]] [[me|migo]]. [[They|Ellos]] [[are|están]] [[not|no]] [[Mexican|mexicanos]]. [[They|Ellos]] [[are|son]] [[American|americanos]]. [[There|Allí]] [[are|hay]] [[four|cuatro]] [[people|personas]] [[in|en]] [[my|mi]] [[family|familia]] [[here|aquí]].",
    "content": {
      "title": "Lectura: Vacaciones en México",
      "instructions": "Lee sobre el viaje familiar.",
      "questions": []
    },
    "audioUrl": "audio/a1/unit-2/e53.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[are|están]] [[they|ellos]]?",
          "options": ["[[In Spain|En España]]", "[[In Mexico|En México]]", "[[In France|En Francia]]"],
          "correctAnswer": 1,
          "explanation": "El texto empieza con 'We are in Mexico'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e54.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Are|Son]] [[the|los]] [[parents|padres]] [[Mexican|mexicanos]]?",
          "options": ["[[Yes, they are.|Sí.]]", "[[No, they are American.|No, son americanos.]]", "[[No, they are Spanish.|No.]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'They are not Mexican. They are American'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e55.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[people|personas]] [[are|hay]] [[in|en]] [[the|la]] [[family|familia]] [[here|aquí]]?",
          "options": ["[[Two|Dos]]", "[[Three|Tres]]", "[[Four|Cuatro]]"],
          "correctAnswer": 2,
          "explanation": "El texto dice 'There are four people in my family here'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e56.mp3",
    "topicName": "Reading"
  },

  // PASSAGE 5: NATIONALITIES GAME
  {
    "id": "a1-u2-e57",
    "type": "reading",
    "level": "A1",
    "topic": "Reading Phase",
    "difficulty": "medium",
    "transcript": "[[Look|Mira]]. [[Number|Número]] [[one|uno]] [[is|es]] [[from|de]] [[France|Francia]]. [[Number|Número]] [[two|dos]] [[is|es]] [[from|de]] [[Spain|España]]. [[Number|Número]] [[three|tres]] [[is|es]] [[from|de]] [[The United States|Estados Unidos]]. [[Number|Número]] [[four|cuatro]] [[is|es]] [[from|de]] [[Mexico|México]]. [[They|Ellos]] [[are|son]] [[all|todos]] [[very|muy]] [[different|diferentes]] [[and|y]] [[good|buenos]] [[people|personas]].",
    "content": {
      "title": "Lectura: Juego de Nacionalidades",
      "instructions": "Lee sobre los números y sus países.",
      "questions": []
    },
    "audioUrl": "audio/a1/unit-2/e57.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[number|número]] [[two|dos]] [[from|]]?",
          "options": ["[[France|Francia]]", "[[Spain|España]]", "[[Mexico|México]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice 'Number two is from Spain'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e58.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[the|la]] [[nationality|nacionalidad]] [[of|de]] [[number|número]] [[four|cuatro]]?",
          "options": ["[[French|Francés]]", "[[Spanish|Español]]", "[[Mexican|Mexicano]]"],
          "correctAnswer": 2,
          "explanation": "Number four is from Mexico, so he is Mexican."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e59.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Question",
    "difficulty": "medium",
    "content": {
      "title": "Pregunta de Lectura",
      "instructions": "Responde según el texto.",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[number|número]] [[three|tres]] [[from|]]?",
          "options": ["[[The United States|Estados Unidos]]", "[[England|Inglaterra]]", "[[France|Francia]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice 'Number three is from The United States'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-2/e60.mp3",
    "topicName": "Reading"
  }
];
