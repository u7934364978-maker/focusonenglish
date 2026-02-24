import { Exercise } from '@/lib/exercise-generator';

export const UNIT_19_EXERCISES: Exercise[] = [
  // ==========================================
  // LESSON 1: MONTHS OF THE YEAR (1-15)
  // ==========================================
  {
    "id": "a1-u19-e1",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[There are twelve months in a year|Hay doce meses en un año]].",
    "content": {
      "title": "[[Months of the Year|Meses del año]]",
      "instructions": "[[How many months are in a year?|¿Cuántos meses hay en un año?]]",
      "question": "[[There are (____) months in a year.|Hay (____) meses en un año.]]",
      "options": ["[[twelve|doce]]", "[[ten|diez]]", "[[seven|siete]]"],
      "correctAnswer": 0,
      "explanation": "[[A year has 12 months|Un año tiene 12 meses]]."
    },
    "audioUrl": "audio/a1/unit-19/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[January is the first month|Enero es el primer mes]].",
    "content": {
      "title": "[[The First Month|El primer mes]]",
      "instructions": "[[Identify the first month|Identifica el primer mes]].",
      "question": "[[ (____) is the first month of the year.|(____) es el primer mes del año.]]",
      "options": ["[[January|Enero]]", "[[February|Febrero]]", "[[March|Marzo]]"],
      "correctAnswer": 0,
      "explanation": "[[January starts the year|Enero comienza el año]]."
    },
    "audioUrl": "audio/a1/unit-19/e2.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[December is the last month|Diciembre es el último mes]].",
    "content": {
      "title": "[[The Last Month|El último mes]]",
      "instructions": "[[Identify the last month|Identifica el último mes]].",
      "question": "[[ (____) is the last month of the year.|(____) es el último mes del año.]]",
      "options": ["[[November|Noviembre]]", "[[December|Diciembre]]", "[[October|Octubre]]"],
      "correctAnswer": 1,
      "explanation": "[[December ends the year|Diciembre termina el año]]."
    },
    "audioUrl": "audio/a1/unit-19/e3.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[February has twenty-eight days|Febrero tiene veintiocho días]].",
    "content": {
      "title": "[[Shortest Month|El mes más corto]]",
      "instructions": "[[Identify the month with 28 days|Identifica el mes con 28 días]].",
      "question": "[[ (____) has twenty-eight days.|(____) tiene veintiocho días.]]",
      "options": ["[[February|Febrero]]", "[[April|Abril]]", "[[June|Junio]]"],
      "correctAnswer": 0,
      "explanation": "[[February is the shortest month|Febrero es el mes más corto]]."
    },
    "audioUrl": "audio/a1/unit-19/e4.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e5",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[February comes after January|Febrero viene después de enero]].",
    "content": {
      "title": "[[Month Order|Orden de los meses]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[February comes after January|Febrero viene después de enero]].",
      "words": ["[[January|enero]].", "[[after|después de]]", "[[comes|viene]]", "[[February|Febrero]]"],
      "explanation": "[[Months follow a specific sequence|Los meses siguen una secuencia específica]]."
    },
    "audioUrl": "audio/a1/unit-19/e5.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[July and August are hot months|Julio y agosto son meses calurosos]].",
    "content": {
      "title": "[[Summer Months|Meses de verano]]",
      "instructions": "[[Identify the hot months|Identifica los meses calurosos]].",
      "question": "[[July and (____) are very hot months.|Julio y (____) son meses muy calurosos.]]",
      "options": ["[[August|agosto]]", "[[December|diciembre]]", "[[January|enero]]"],
      "correctAnswer": 0,
      "explanation": "[[July and August are summer in the northern hemisphere|Julio y agosto son verano en el hemisferio norte]]."
    },
    "audioUrl": "audio/a1/unit-19/e6.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e7",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[April showers bring May flowers|Las lluvias de abril traen flores en mayo]].",
    "content": {
      "title": "[[Spring Months|Meses de primavera]]",
      "instructions": "[[Complete the month name|Completa el mes]].",
      "questions": [
        {
          "question": "[[ (____) comes before May.|(____) viene antes de mayo.]]",
          "correctAnswer": "April",
          "explanation": "[[April is the 4th month|Abril es el cuarto mes]]."
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
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[September is the ninth month|Septiembre es el noveno mes]].",
    "content": {
      "title": "[[Ordinal Position|Posición ordinal]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[September is the ninth month|Septiembre es el noveno mes]].",
      "words": ["[[month|mes]].", "[[ninth|noveno]]", "[[the|el]]", "[[is|es]]", "[[September|Septiembre]]"],
      "explanation": "[[September is the 9th month|Septiembre es el mes número 9]]."
    },
    "audioUrl": "audio/a1/unit-19/e8.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[October is in autumn|Octubre es en otoño]].",
    "content": {
      "title": "[[Autumn|Otoño]]",
      "instructions": "[[Identify the season for October|Identifica la estación de octubre]].",
      "question": "[[October is in (____).|Octubre es en (____).]]",
      "options": ["[[autumn|otoño]]", "[[summer|verano]]", "[[spring|primavera]]"],
      "correctAnswer": 0,
      "explanation": "[[In many places, October is fall or autumn|En muchos lugares, octubre es otoño]]."
    },
    "audioUrl": "audio/a1/unit-19/e9.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e10",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[March, April, and May are spring months|Marzo, abril y mayo son meses de primavera]].",
    "content": {
      "title": "[[Spring|Primavera]]",
      "instructions": "[[Complete the month name|Completa el mes]].",
      "questions": [
        {
          "question": "[[ (____) is between February and April.|(____) está entre febrero y abril.]]",
          "correctAnswer": "March",
          "explanation": "[[March is the 3rd month|Marzo es el tercer mes]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e10.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e11",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[June is the sixth month|Junio es el sexto mes]].",
    "content": {
      "title": "[[Mid-Year|Mitad de año]]",
      "instructions": "[[Identify the sixth month|Identifica el sexto mes]].",
      "question": "[[ (____) is the sixth month.|(____) es el sexto mes.]]",
      "options": ["[[June|Junio]]", "[[July|Julio]]", "[[May|Mayo]]"],
      "correctAnswer": 0,
      "explanation": "[[June completes the first half of the year|Junio completa la primera mitad del año]]."
    },
    "audioUrl": "audio/a1/unit-19/e11.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e12",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[November is a cold month|Noviembre es un mes frío]].",
    "content": {
      "title": "[[Cold Weather|Clima frío]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[November is a cold month|Noviembre es un mes frío]].",
      "words": ["[[month|mes]].", "[[cold|frío]]", "[[a|un]]", "[[is|es]]", "[[November|Noviembre]]"],
      "explanation": "[[November is near winter|Noviembre está cerca del invierno]]."
    },
    "audioUrl": "audio/a1/unit-19/e12.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e13",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[May comes before June|Mayo viene antes de junio]].",
    "content": {
      "title": "[[Before/After|Antes/Después]]",
      "instructions": "[[Complete the sequence|Completa la secuencia]].",
      "questions": [
        {
          "question": "[[May comes (____) June.|Mayo viene (____) junio.]]",
          "correctAnswer": "before",
          "explanation": "[[May is the 5th month, June is the 6th|Mayo es el 5º mes, junio el 6º]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e13.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[Which month is number eight? August|¿Qué mes es el número ocho? Agosto]].",
    "content": {
      "title": "[[Month Number|Número de mes]]",
      "instructions": "[[Identify the eighth month|Identifica el octavo mes]].",
      "question": "[[The eighth month is (____).|El octavo mes es (____).]]",
      "options": ["[[August|Agosto]]", "[[September|Septiembre]]", "[[July|Julio]]"],
      "correctAnswer": 0,
      "explanation": "[[August is the 8th month|Agosto es el octavo mes]]."
    },
    "audioUrl": "audio/a1/unit-19/e14.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e15",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Months",
    "difficulty": "easy",
    "transcript": "[[There are four seasons in a year|Hay cuatro estaciones en un año]].",
    "content": {
      "title": "[[Seasons|Estaciones]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[There are four seasons in a year|Hay cuatro estaciones en un año]].",
      "words": ["[[year|año]].", "[[a|un]]", "[[in|en]]", "[[seasons|estaciones]]", "[[four|cuatro]]", "[[are|hay]]", "[[There|Allí/Hay]]"],
      "explanation": "[[Spring, summer, autumn, and winter|Primavera, verano, otoño e invierno]]."
    },
    "audioUrl": "audio/a1/unit-19/e15.mp3",
    "topicName": "Vocabulary"
  },

  // ==========================================
  // LESSON 2: ORDINAL NUMBERS (16-30)
  // ==========================================
  {
    "id": "a1-u19-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[First, second, third|Primero, segundo, tercero]].",
    "content": {
      "title": "[[The First Three|Los tres primeros]]",
      "instructions": "[[Identify the second ordinal|Identifica el segundo ordinal]].",
      "question": "[[What comes after 'first'?|¿Qué viene después de 'first'?]]",
      "options": ["[[second|segundo]]", "[[two|dos]]", "[[third|tercero]]"],
      "correctAnswer": 0,
      "explanation": "[[Ordinal numbers show position|Los números ordinales muestran posición]]."
    },
    "audioUrl": "audio/a1/unit-19/e16.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[March is the third month|Marzo es el tercer mes]].",
    "content": {
      "title": "[[Third|Tercero]]",
      "instructions": "[[Identify the ordinal number|Identifica el número ordinal]].",
      "question": "[[March is the (____) month.|Marzo es el (____) mes.]]",
      "options": ["[[third|tercer]]", "[[three|tres]]", "[[thirtieth|trigésimo]]"],
      "correctAnswer": 0,
      "explanation": "[[Ordinal of 3 is third|El ordinal de 3 es 'third']]."
    },
    "audioUrl": "audio/a1/unit-19/e17.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e18",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[Friday is the fifth day of the week|El viernes es el quinto día de la semana]].",
    "content": {
      "title": "[[Fifth|Quinto]]",
      "instructions": "[[Complete the ordinal number|Completa el ordinal]].",
      "questions": [
        {
          "question": "[[Friday is the (____) day.|El viernes es el (____) día.]]",
          "correctAnswer": "fifth",
          "explanation": "[[Ordinal of 5 is fifth|El ordinal de 5 es 'fifth']]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e18.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e19",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[January is the first month|Enero es el primer mes]].",
    "content": {
      "title": "[[First|Primero]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[January is the first month|Enero es el primer mes]].",
      "words": ["[[month|mes]].", "[[first|primer]]", "[[the|el]]", "[[is|es]]", "[[January|Enero]]"],
      "explanation": "[[Ordinal of 1 is first|El ordinal de 1 es 'first']]."
    },
    "audioUrl": "audio/a1/unit-19/e19.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[December is the twelfth month|Diciembre es el duodécimo mes]].",
    "content": {
      "title": "[[Twelfth|Duodécimo]]",
      "instructions": "[[Choose the correct spelling|Elige la ortografía correcta]].",
      "question": "[[December is the (____) month.|Diciembre es el (____) mes.]]",
      "options": ["[[twelfth|duodécimo]]", "[[twelve|doce]]", "[[twelveth|incorrecto]]"],
      "correctAnswer": 0,
      "explanation": "[[Spelling: twelfth (with 'f')|Ortografía: twelfth (con 'f')]]."
    },
    "audioUrl": "audio/a1/unit-19/e20.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e21",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[Today is the fourth of July|Hoy es el cuatro de julio]].",
    "content": {
      "title": "[[Fourth|Cuarto]]",
      "instructions": "[[Complete the ordinal|Completa el ordinal]].",
      "questions": [
        {
          "question": "[[Today is the (____) of July.|Hoy es el (____) de julio.]]",
          "correctAnswer": "fourth",
          "explanation": "[[Ordinal of 4 is fourth|El ordinal de 4 es 'fourth']]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e21.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e22",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[Monday is the first day|El lunes es el primer día]].",
    "content": {
      "title": "[[Days Ordinals|Días y ordinales]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[Monday is the first day|El lunes es el primer día]].",
      "words": ["[[day|día]].", "[[first|primer]]", "[[the|el]]", "[[is|es]]", "[[Monday|Lunes]]"],
      "explanation": "[[Monday is position one|El lunes es la posición uno]]."
    },
    "audioUrl": "audio/a1/unit-19/e22.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[August is the eighth month|Agosto es el octavo mes]].",
    "content": {
      "title": "[[Eighth|Octavo]]",
      "instructions": "[[Identify the ordinal|Identifica el ordinal]].",
      "question": "[[August is the (____) month.|Agosto es el (____) mes.]]",
      "options": ["[[eighth|octavo]]", "[[eight|ocho]]", "[[eighty|ochenta]]"],
      "correctAnswer": 0,
      "explanation": "[[Ordinal of 8 is eighth|El ordinal de 8 es 'eighth']]."
    },
    "audioUrl": "audio/a1/unit-19/e23.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e24",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[The tenth month is October|El décimo mes es octubre]].",
    "content": {
      "title": "[[Tenth|Décimo]]",
      "instructions": "[[Complete the ordinal|Completa el ordinal]].",
      "questions": [
        {
          "question": "[[The (____) month is October.|El (____) mes es octubre.]]",
          "correctAnswer": "tenth",
          "explanation": "[[Ordinal of 10 is tenth|El ordinal de 10 es 'tenth']]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e24.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e25",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[June is the sixth month|Junio es el sexto mes]].",
    "content": {
      "title": "[[Sixth|Sexto]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[June is the sixth month|Junio es el sexto mes]].",
      "words": ["[[month|mes]].", "[[sixth|sexto]]", "[[the|el]]", "[[is|es]]", "[[June|Junio]]"],
      "explanation": "[[Ordinal of 6 is sixth|El ordinal de 6 es 'sixth']]."
    },
    "audioUrl": "audio/a1/unit-19/e25.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[Which ordinal is 9th? Ninth|¿Qué ordinal es 9º? Noveno]].",
    "content": {
      "title": "[[Ninth|Noveno]]",
      "instructions": "[[Choose the correct ordinal|Elige el ordinal correcto]].",
      "question": "[[9th is (____).|9º es (____).]]",
      "options": ["[[ninth|noveno]]", "[[nine|nueve]]", "[[nineteenth|decimonoveno]]"],
      "correctAnswer": 0,
      "explanation": "[[Ordinal of 9 is ninth|El ordinal de 9 es 'ninth']]."
    },
    "audioUrl": "audio/a1/unit-19/e26.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e27",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[Saturday is the seventh day|El sábado es el séptimo día]].",
    "content": {
      "title": "[[Seventh|Séptimo]]",
      "instructions": "[[Complete the ordinal|Completa el ordinal]].",
      "questions": [
        {
          "question": "[[Saturday is the (____) day.|El sábado es el (____) día.]]",
          "correctAnswer": "seventh",
          "explanation": "[[Ordinal of 7 is seventh|El ordinal de 7 es 'seventh']]."
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
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[Today is February eleventh|Hoy es once de febrero]].",
    "content": {
      "title": "[[Eleventh|Undécimo]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[Today is February eleventh|Hoy es once de febrero]].",
      "words": ["[[eleventh|undécimo]].", "[[February|febrero]]", "[[is|es]]", "[[Today|Hoy]]"],
      "explanation": "[[Ordinal of 11 is eleventh|El ordinal de 11 es 'eleventh']]."
    },
    "audioUrl": "audio/a1/unit-19/e28.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[Twenty-first, twenty-second|Vigésimo primero, vigésimo segundo]].",
    "content": {
      "title": "[[Compound Ordinals|Ordinales compuestos]]",
      "instructions": "[[Identify the ordinal for 21st|Identifica el ordinal de 21º]].",
      "question": "[[21st is (____).|21º es (____).]]",
      "options": ["[[twenty-first|vigésimo primero]]", "[[twenty-one|veintiuno]]", "[[twenty-firstly|incorrecto]]"],
      "correctAnswer": 0,
      "explanation": "[[Use 'first' for compound numbers ending in 1|Usa 'first' para números compuestos que terminan en 1]]."
    },
    "audioUrl": "audio/a1/unit-19/e29.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u19-e30",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Ordinal Numbers",
    "difficulty": "medium",
    "transcript": "[[My brother is in the second grade|Mi hermano está en segundo grado]].",
    "content": {
      "title": "[[Second|Segundo]]",
      "instructions": "[[Complete the ordinal|Completa el ordinal]].",
      "questions": [
        {
          "question": "[[He is in the (____) grade.|Él está en (____) grado.]]",
          "correctAnswer": "second",
          "explanation": "[[Ordinal of 2 is second|El ordinal de 2 es 'second']]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e30.mp3",
    "topicName": "Vocabulary"
  },

  // ==========================================
  // LESSON 3: PREPOSITIONS OF TIME: IN/ON (31-45)
  // ==========================================
  {
    "id": "a1-u19-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[My birthday is in June|Mi cumpleaños es en junio]].",
    "content": {
      "title": "[[Prepositions: Months|Preposiciones: Meses]]",
      "instructions": "[[Choose the correct preposition|Elige la preposición correcta]].",
      "question": "[[My birthday is (____) June.|Mi cumpleaños es (____) junio.]]",
      "options": ["[[in|en]]", "[[on|el]]", "[[at|a]]"],
      "correctAnswer": 0,
      "explanation": "[[Use 'in' with months|Usa 'in' con los meses]]."
    },
    "audioUrl": "audio/a1/unit-19/e31.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e32",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[The party is on June 15th|La fiesta es el 15 de junio]].",
    "content": {
      "title": "[[Prepositions: Dates|Preposiciones: Fechas]]",
      "instructions": "[[Choose the correct preposition|Elige la preposición correcta]].",
      "question": "[[The party is (____) June 15th.|La fiesta es (____) el 15 de junio.]]",
      "options": ["[[on|el]]", "[[in|en]]", "[[at|a]]"],
      "correctAnswer": 0,
      "explanation": "[[Use 'on' with specific dates|Usa 'on' con fechas específicas]]."
    },
    "audioUrl": "audio/a1/unit-19/e32.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e33",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[School starts in September|La escuela comienza en septiembre]].",
    "content": {
      "title": "[[In: Month|In: Mes]]",
      "instructions": "[[Complete the sentence|Completa la frase]].",
      "questions": [
        {
          "question": "[[School starts (____) September.|La escuela comienza (____) septiembre.]]",
          "correctAnswer": "in",
          "explanation": "[[Use 'in' for months without a specific day|Usa 'in' para meses sin un día específico]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e33.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e34",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[Christmas is on December 25th|Navidad es el 25 de diciembre]].",
    "content": {
      "title": "[[On: Specific Date|On: Fecha específica]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[Christmas is on December 25th|Navidad es el 25 de diciembre]].",
      "words": ["[[25th|25]].", "[[December|diciembre]]", "[[on|el]]", "[[is|es]]", "[[Christmas|Navidad]]"],
      "explanation": "[[Month + Day = On|Mes + Día = On]]."
    },
    "audioUrl": "audio/a1/unit-19/e34.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[We travel in August|Viajamos en agosto]].",
    "content": {
      "title": "[[General Time|Tiempo general]]",
      "instructions": "[[Identify the preposition|Identifica la preposición]].",
      "question": "[[We travel (____) August.|Viajamos (____) agosto.]]",
      "options": ["[[in|en]]", "[[on|el]]", "[[at|a]]"],
      "correctAnswer": 0,
      "explanation": "[[Months use 'in'|Los meses usan 'in']]."
    },
    "audioUrl": "audio/a1/unit-19/e35.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e36",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[The meeting is on Monday|La reunión es el lunes]].",
    "content": {
      "title": "[[On: Days|On: Días]]",
      "instructions": "[[Complete the sentence|Completa la frase]].",
      "questions": [
        {
          "question": "[[The meeting is (____) Monday.|La reunión es (____) lunes.]]",
          "correctAnswer": "on",
          "explanation": "[[Use 'on' with days of the week|Usa 'on' con los días de la semana]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e36.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e37",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[The exam is in May|El examen es en mayo]].",
    "content": {
      "title": "[[Exam Date|Fecha de examen]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[The exam is in May|El examen es en mayo]].",
      "words": ["[[May|mayo]].", "[[in|en]]", "[[is|es]]", "[[exam|examen]]", "[[The|El]]"],
      "explanation": "[[Standard sentence with 'in'|Oración estándar con 'in']]."
    },
    "audioUrl": "audio/a1/unit-19/e37.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e38",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[Halloween is on October 31st|Halloween es el 31 de octubre]].",
    "content": {
      "title": "[[Special Dates|Fechas especiales]]",
      "instructions": "[[Identify the preposition for a specific date|Identifica la preposición para una fecha específica]].",
      "question": "[[Halloween is (____) October 31st.|Halloween es (____) el 31 de octubre.]]",
      "options": ["[[on|el]]", "[[in|en]]", "[[at|a]]"],
      "correctAnswer": 0,
      "explanation": "[[Specific calendar dates use 'on'|Las fechas específicas del calendario usan 'on']]."
    },
    "audioUrl": "audio/a1/unit-19/e38.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e39",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[Winter starts in December|El invierno comienza en diciembre]].",
    "content": {
      "title": "[[In: Month 2|In: Mes 2]]",
      "instructions": "[[Complete the sentence|Completa la frase]].",
      "questions": [
        {
          "question": "[[Winter starts (____) December.|El invierno comienza (____) diciembre.]]",
          "correctAnswer": "in",
          "explanation": "[[Months take 'in'|Los meses llevan 'in']]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e39.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e40",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[I have a class on Tuesday|Tengo una clase el martes]].",
    "content": {
      "title": "[[Class Schedule|Horario de clase]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[I have a class on Tuesday|Tengo una clase el martes]].",
      "words": ["[[Tuesday|martes]].", "[[on|el]]", "[[class|clase]]", "[[a|una]]", "[[have|tengo]]", "[[I|Yo]]"],
      "explanation": "[[Days of the week use 'on'|Los días de la semana usan 'on']]."
    },
    "audioUrl": "audio/a1/unit-19/e40.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[My vacation is in July|Mis vacaciones son en julio]].",
    "content": {
      "title": "[[Vacation|Vacaciones]]",
      "instructions": "[[Choose the correct preposition|Elige la preposición correcta]].",
      "question": "[[My vacation is (____) July.|Mis vacaciones son (____) julio.]]",
      "options": ["[[in|en]]", "[[on|el]]", "[[at|a]]"],
      "correctAnswer": 0,
      "explanation": "[[July is a month, so use 'in'|Julio es un mes, así que usa 'in']]."
    },
    "audioUrl": "audio/a1/unit-19/e41.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e42",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[See you on Friday!|Nos vemos el viernes!]]",
    "content": {
      "title": "[[See you|Nos vemos]]",
      "instructions": "[[Complete the phrase|Completa la frase]].",
      "questions": [
        {
          "question": "[[See you (____) Friday!|Nos vemos (____) viernes!]]",
          "correctAnswer": "on",
          "explanation": "[[Use 'on' for days|Usa 'on' para los días]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e42.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e43",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[The concert is on May 1st|El concierto es el 1 de mayo]].",
    "content": {
      "title": "[[Concert Date|Fecha de concierto]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[The concert is on May 1st|El concierto es el 1 de mayo]].",
      "words": ["[[1st|1]].", "[[May|mayo]]", "[[on|el]]", "[[is|es]]", "[[concert|concierto]]", "[[The|El]]"],
      "explanation": "[[Specific date = On|Fecha específica = On]]."
    },
    "audioUrl": "audio/a1/unit-19/e43.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[I was born in 1995|Nací en 1995]].",
    "content": {
      "title": "[[Years|Años]]",
      "instructions": "[[Identify the preposition for years|Identifica la preposición para los años]].",
      "question": "[[I was born (____) 1995.|Nací (____) 1995.]]",
      "options": ["[[in|en]]", "[[on|el]]", "[[at|a]]"],
      "correctAnswer": 0,
      "explanation": "[[Years also use 'in'|Los años también usan 'in']]."
    },
    "audioUrl": "audio/a1/unit-19/e44.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e45",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[The course ends in June|El curso termina en junio]].",
    "content": {
      "title": "[[Ending Date|Fecha de finalización]]",
      "instructions": "[[Complete the sentence|Completa la frase]].",
      "questions": [
        {
          "question": "[[The course ends (____) June.|El curso termina (____) junio.]]",
          "correctAnswer": "in",
          "explanation": "[[Months take 'in'|Los meses llevan 'in']]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e45.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // LESSON 4: ASKING ABOUT DATES (46-60)
  // ==========================================
  {
    "id": "a1-u19-e46",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Asking Dates",
    "difficulty": "hard",
    "transcript": "[[When is your birthday?|¿Cuándo es tu cumpleaños?]]",
    "content": {
      "title": "[[Birthday Question|Pregunta de cumpleaños]]",
      "instructions": "[[Identify the question word|Identifica la palabra de pregunta]].",
      "question": "[[ (____) is your birthday?|¿(____) es tu cumpleaños?]]",
      "options": ["[[When|Cuándo]]", "[[Where|Dónde]]", "[[Who|Quién]]"],
      "correctAnswer": 0,
      "explanation": "[[Use 'When' for dates and time|Usa 'When' para fechas y tiempo]]."
    },
    "audioUrl": "audio/a1/unit-19/e46.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Asking Dates",
    "difficulty": "hard",
    "transcript": "[[What is the date today?|¿Cuál es la fecha de hoy?]]",
    "content": {
      "title": "[[Today's Date|La fecha de hoy]]",
      "instructions": "[[Identify the standard question|Identifica la pregunta estándar]].",
      "question": "[[What is the (____) today?|¿Cuál es la (____) de hoy?]]",
      "options": ["[[date|fecha]]", "[[day|día]]", "[[month|mes]]"],
      "correctAnswer": 0,
      "explanation": "[['Date' refers to the calendar day|'Date' se refiere al día del calendario]]."
    },
    "audioUrl": "audio/a1/unit-19/e47.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e48",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Asking Dates",
    "difficulty": "hard",
    "transcript": "[[When is the meeting?|¿Cuándo es la reunión?]]",
    "content": {
      "title": "[[Meeting Time|Hora de reunión]]",
      "instructions": "[[Complete the question|Completa la pregunta]].",
      "questions": [
        {
          "question": "[[ (____) is the meeting?|¿(____) es la reunión?]]",
          "correctAnswer": "When",
          "explanation": "[[Ask 'When' for events|Pregunta 'When' para eventos]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-19/e48.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e49",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Asking Dates",
    "difficulty": "hard",
    "transcript": "[[It is the first of May|Es el primero de mayo]].",
    "content": {
      "title": "[[Giving the Date|Dando la fecha]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[It is the first of May|Es el primero de mayo]].",
      "words": ["[[May|mayo]].", "[[of|de]]", "[[first|primero]]", "[[the|el]]", "[[is|es]]", "[[It|Eso/Es]]"],
      "explanation": "[[Format: The + ordinal + of + month|Formato: The + ordinal + of + mes]]."
    },
    "audioUrl": "audio/a1/unit-19/e49.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Asking Dates",
    "difficulty": "hard",
    "transcript": "[[What day is it? Monday|¿Qué día es? Lunes]].",
    "content": {
      "title": "[[Day of the Week|Día de la semana]]",
      "instructions": "[[Identify the correct question|Identifica la pregunta correcta]].",
      "question": "[[ (____) day is it?|¿(____) día es?]]",
      "options": ["[[What|Qué]]", "[[When|Cuándo]]", "[[How|Cómo]]"],
      "correctAnswer": 0,
      "explanation": "[[Use 'What day' for Monday, Tuesday, etc.|Usa 'What day' para lunes, martes, etc]]."
    },
    "audioUrl": "audio/a1/unit-19/e50.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u19-e51",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Important Dates|Fechas importantes]]. [[Hi, I am Mark|Hola, soy Mark]]. [[My birthday is in September|Mi cumpleaños es en septiembre]]. [[It is on September 12th|Es el 12 de septiembre]]. [[This year, my party is on a Saturday|Este año, mi fiesta es un sábado]]. [[I love autumn months|Me encantan los meses de otoño]]. [[October and November are beautiful|Octubre y noviembre son hermosos]]. [[My sister's birthday is in December|El cumpleaños de mi hermana es en diciembre]]. [[Her birthday is on December 25th|Su cumpleaños es el 25 de diciembre]]. [[Yes, she is a Christmas baby!|Sí, ¡es una bebé de Navidad!]].",
    "content": {
      "title": "[[Reading: Mark's Calendar|Lectura: El calendario de Mark]]",
      "instructions": "[[Read about Mark's important dates|Lee sobre las fechas importantes de Mark]].",
      "questions": [
        {
          "question": "[[Important Dates|Fechas importantes]]. [[Hi, I am Mark|Hola, soy Mark]]. [[My birthday is in September|Mi cumpleaños es en septiembre]]. [[It is on September 12th|Es el 12 de septiembre]]. [[This year, my party is on a Saturday|Este año, mi fiesta es un sábado]]. [[I love autumn months|Me encantan los meses de otoño]]. [[October and November are beautiful|Octubre y noviembre son hermosos]]. [[My sister's birthday is in December|El cumpleaños de mi hermana es en diciembre]]. [[Her birthday is on December 25th|Su cumpleaños es el 25 de diciembre]]. [[Yes, she is a Christmas baby!|Sí, ¡es una bebé de Navidad!]].",
          "options": ["[[I have read the text|He leído el texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click to continue|Haz clic para continuar]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[When is Mark's birthday? September 12th|¿Cuándo es el cumpleaños de Mark? El 12 de septiembre]].",
    "content": {
      "title": "[[Comprehension: Birthday|Comprensión: Cumpleaños]]",
      "instructions": "[[Identify the date|Identifica la fecha]].",
      "question": "[[Mark's birthday is on (____).|El cumpleaños de Mark es el (____).]]",
      "options": ["[[September 12th|12 de septiembre]]", "[[December 25th|25 de diciembre]]", "[[October 1st|1 de octubre]]"],
      "correctAnswer": 0,
      "explanation": "[[The text says 'It is on September 12th'|El texto dice 'Es el 12 de septiembre']]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[What day is his party this year? Saturday|¿Qué día es su fiesta este año? Sábado]].",
    "content": {
      "title": "[[Comprehension: Party|Comprensión: Fiesta]]",
      "instructions": "[[Identify the day of the week|Identifica el día de la semana]].",
      "question": "[[His party is on a (____).|Su fiesta es un (____).]]",
      "options": ["[[Saturday|sábado]]", "[[Friday|viernes]]", "[[Sunday|domingo]]"],
      "correctAnswer": 0,
      "explanation": "[[The text states 'my party is on a Saturday'|El texto afirma 'mi fiesta es un sábado']]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[When is his sister's birthday? December 25th|¿Cuándo es el cumpleaños de su hermana? El 25 de diciembre]].",
    "content": {
      "title": "[[Comprehension: Sister|Comprensión: Hermana]]",
      "instructions": "[[Identify the sister's birthday|Identifica el cumpleaños de la hermana]].",
      "question": "[[His sister's birthday is on (____).|El cumpleaños de su hermana es el (____).]]",
      "options": ["[[December 25th|25 de diciembre]]", "[[September 12th|12 de septiembre]]", "[[January 1st|1 de enero]]"],
      "correctAnswer": 0,
      "explanation": "[[The text says 'Her birthday is on December 25th'|El texto dice 'Su cumpleaños es el 25 de diciembre']]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[Does Mark like autumn? Yes|¿Le gusta el otoño a Mark? Sí]].",
    "content": {
      "title": "[[Comprehension: Seasons|Comprensión: Estaciones]]",
      "instructions": "[[Identify Mark's preference|Identifica la preferencia de Mark]].",
      "question": "[[Mark loves (____) months.|Mark ama los meses de (____).]]",
      "options": ["[[autumn|otoño]]", "[[summer|verano]]", "[[spring|primavera]]"],
      "correctAnswer": 0,
      "explanation": "[[He says 'I love autumn months'|Él dice 'me encantan los meses de otoño']]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e56",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "hard",
    "transcript": "[[My birthday is in September|Mi cumpleaños es en septiembre]].",
    "content": {
      "title": "[[Preposition Check|Revisión de preposición]]",
      "instructions": "[[Complete the sentence|Completa la frase]].",
      "questions": [
        {
          "question": "[[My birthday is (____) September.|Mi cumpleaños es (____) septiembre.]]",
          "correctAnswer": "in",
          "explanation": "[[Use 'in' for months alone|Usa 'in' para los meses solos]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e57",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "hard",
    "transcript": "[[It is on September 12th|Es el 12 de septiembre]].",
    "content": {
      "title": "[[Preposition Check 2|Revisión de preposición 2]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[It is on September 12th|Es el 12 de septiembre]].",
      "words": ["[[12th|12]].", "[[September|septiembre]]", "[[on|el]]", "[[is|es]]", "[[It|Es]]"],
      "explanation": "[[Use 'on' for specific dates|Usa 'on' para fechas específicas]]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "transcript": "[[What are autumn months? October and November|¿Cuáles son los meses de otoño? Octubre y noviembre]].",
    "content": {
      "title": "[[Autumn Months|Meses de otoño]]",
      "instructions": "[[Identify the autumn months|Identifica los meses de otoño]].",
      "question": "[[ (____) and November are beautiful.|(____) y noviembre son hermosos.]]",
      "options": ["[[October|octubre]]", "[[July|julio]]", "[[April|abril]]"],
      "correctAnswer": 0,
      "explanation": "[[October is an autumn month|Octubre es un mes de otoño]]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e59",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "hard",
    "transcript": "[[My sister's birthday is in December|El cumpleaños de mi hermana es en diciembre]].",
    "content": {
      "title": "[[Possessive 's|Posesivo 's]]",
      "instructions": "[[Complete the possessive form|Completa la forma posesiva]].",
      "questions": [
        {
          "question": "[[My (____) birthday is in December.|El cumpleaños de mi (____) es en diciembre.]]",
          "correctAnswer": "sister's",
          "explanation": "[[Use 's for possession|Usa 's para posesión]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u19-e60",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "hard",
    "transcript": "[[Her birthday is on December 25th|Su cumpleaños es el 25 de diciembre]].",
    "content": {
      "title": "[[Her: Possessive Adjective|Her: Adjetivo posesivo]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[Her birthday is on December 25th|Su cumpleaños es el 25 de diciembre]].",
      "words": ["[[25th|25]].", "[[December|diciembre]]", "[[on|el]]", "[[is|es]]", "[[birthday|cumpleaños]]", "[[Her|Su]]"],
      "explanation": "[[Use 'Her' for a female's possession|Usa 'Her' para la posesión de una mujer]]."
    },
    "topicName": "Reading"
  },

  // ==========================================
  // LESSON 5: LISTENING & PRONUNCIATION (61-75)
  // ==========================================
  {
    "id": "a1-u19-e61",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[My birthday is in October|Mi cumpleaños es en octubre]].",
    "audioUrl": "audio/a1/unit-19/e61.mp3",
    "content": {
      "title": "[[Listening: Birthday|Escucha: Cumpleaños]]",
      "instructions": "[[Listen and identify the month|Escucha e identifica el mes]].",
      "questions": [{
        "id": "q61",
        "type": "multiple-choice",
        "question": "[[When is the person's birthday?|¿Cuándo es el cumpleaños de la persona?]]",
        "options": ["[[October|octubre]]", "[[August|agosto]]", "[[December|diciembre]]"],
        "correctAnswer": "[[October|octubre]]",
        "explanation": "[[The speaker says 'in October'|El hablante dice 'en octubre']]."
      }]
    }
  },
  {
    "id": "a1-u19-e62",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[The meeting is on March 3rd|La reunión es el 3 de marzo]].",
    "audioUrl": "audio/a1/unit-19/e62.mp3",
    "content": {
      "title": "[[Listening: Date|Escucha: Fecha]]",
      "instructions": "[[Listen and identify the day|Escucha e identifica el día]].",
      "questions": [{
        "id": "q62",
        "type": "multiple-choice",
        "question": "[[What is the date of the meeting?|¿Cuál es la fecha de la reunión?]]",
        "options": ["[[March 3rd|3 de marzo]]", "[[March 1st|1 de marzo]]", "[[May 3rd|3 de mayo]]"],
        "correctAnswer": "[[March 3rd|3 de marzo]]",
        "explanation": "[[The speaker says 'March 3rd'|El hablante dice '3 de marzo']]."
      }]
    }
  },
  {
    "id": "a1-u19-e63",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[January is the first month|Enero es el primer mes]].",
    "audioUrl": "audio/a1/unit-19/e63.mp3",
    "content": {
      "title": "[[Listening: First|Escucha: Primero]]",
      "instructions": "[[Listen and identify the month number|Escucha e identifica el número del mes]].",
      "questions": [{
        "id": "q63",
        "type": "multiple-choice",
        "question": "[[Which month is number one?|¿Qué mes es el número uno?]]",
        "options": ["[[January|enero]]", "[[June|junio]]", "[[July|julio]]"],
        "correctAnswer": "[[January|enero]]",
        "explanation": "[[The speaker says 'January is the first'|El hablante dice 'Enero es el primero']]."
      }]
    }
  },
  {
    "id": "a1-u19-e64",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[December is in winter|Diciembre es en invierno]].",
    "audioUrl": "audio/a1/unit-19/e64.mp3",
    "content": {
      "title": "[[Listening: Season|Escucha: Estación]]",
      "instructions": "[[Listen and identify the season|Escucha e identifica la estación]].",
      "questions": [{
        "id": "q64",
        "type": "multiple-choice",
        "question": "[[What season is mentioned?|¿Qué estación se menciona?]]",
        "options": ["[[winter|invierno]]", "[[summer|verano]]", "[[spring|primavera]]"],
        "correctAnswer": "[[winter|invierno]]",
        "explanation": "[[The speaker says 'in winter'|El hablante dice 'en invierno']]."
      }]
    }
  },
  {
    "id": "a1-u19-e65",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[My party is on a Friday|Mi fiesta es un viernes]].",
    "audioUrl": "audio/a1/unit-19/e65.mp3",
    "content": {
      "title": "[[Listening: Day|Escucha: Día]]",
      "instructions": "[[Listen and identify the day|Escucha e identifica el día]].",
      "questions": [{
        "id": "q65",
        "type": "multiple-choice",
        "question": "[[What day is the party?|¿Qué día es la fiesta?]]",
        "options": ["[[Friday|viernes]]", "[[Saturday|sábado]]", "[[Monday|lunes]]"],
        "correctAnswer": "[[Friday|viernes]]",
        "explanation": "[[The speaker says 'on a Friday'|El hablante dice 'un viernes']]."
      }]
    }
  },
  {
    "id": "a1-u19-e66",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[The concert is in May|El concierto es en mayo]].",
    "audioUrl": "audio/a1/unit-19/e66.mp3",
    "content": {
      "title": "[[Listening: Concert|Escucha: Concierto]]",
      "instructions": "[[Listen and identify the month|Escucha e identifica el mes]].",
      "questions": [{
        "id": "q66",
        "type": "multiple-choice",
        "question": "[[When is the concert?|¿Cuándo es el concierto?]]",
        "options": ["[[in May|en mayo]]", "[[in March|en marzo]]", "[[in June|en junio]]"],
        "correctAnswer": "[[in May|en mayo]]",
        "explanation": "[[The speaker says 'in May'|El hablante dice 'en mayo']]."
      }]
    }
  },
  {
    "id": "a1-u19-e67",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[It is the fourth of July|Es el cuatro de julio]].",
    "audioUrl": "audio/a1/unit-19/e67.mp3",
    "content": {
      "title": "[[Listening: holiday|Escucha: Festividad]]",
      "instructions": "[[Listen and identify the date|Escucha e identifica la fecha]].",
      "questions": [{
        "id": "q67",
        "type": "multiple-choice",
        "question": "[[What is the date?|¿Cuál es la fecha?]]",
        "options": ["[[July 4th|4 de julio]]", "[[June 4th|4 de junio]]", "[[July 14th|14 de julio]]"],
        "correctAnswer": "[[July 4th|4 de julio]]",
        "explanation": "[[The speaker says 'the fourth of July'|El hablante dice 'el cuatro de julio']]."
      }]
    }
  },
  {
    "id": "a1-u19-e68",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[August is a hot month|Agosto es un mes caluroso]].",
    "audioUrl": "audio/a1/unit-19/e68.mp3",
    "content": {
      "title": "[[Listening: Hot Month|Escucha: Mes caluroso]]",
      "instructions": "[[Listen and identify the month|Escucha e identifica el mes]].",
      "questions": [{
        "id": "q68",
        "type": "multiple-choice",
        "question": "[[Which month is hot?|¿Qué mes es caluroso?]]",
        "options": ["[[August|agosto]]", "[[April|abril]]", "[[November|noviembre]]"],
        "correctAnswer": "[[August|agosto]]",
        "explanation": "[[The speaker says 'August is a hot month'|El hablante dice 'Agosto es un mes caluroso']]."
      }]
    }
  },
  {
    "id": "a1-u19-e69",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[January|Enero]]",
    "audioUrl": "audio/a1/unit-19/e69.mp3",
    "content": {
      "title": "[[Pronunciation: January|Pronunciación: Enero]]",
      "instructions": "[[Listen and repeat focusing on the first syllable|Escucha y repite enfocándote en la primera sílaba]].",
      "expectedResponse": "January.",
      "evaluationCriteria": [
        "[[Stress on the first syllable 'Jan'|Acentuación en la primera sílaba 'Jan']] ",
        "[[Clear /dʒ/ sound at the beginning|Sonido /dʒ/ claro al inicio]]",
        "[[Reduction of middle syllables|Reducción de las sílabas medias]]"
      ]
    }
  },
  {
    "id": "a1-u19-e70",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[February|Febrero]]",
    "audioUrl": "audio/a1/unit-19/e70.mp3",
    "content": {
      "title": "[[Pronunciation: February|Pronunciación: Febrero]]",
      "instructions": "[[Listen and repeat focusing on the /ru/ sound|Escucha y repite enfocándote en el sonido /ru/]].",
      "expectedResponse": "February.",
      "evaluationCriteria": [
        "[[Stress on the first syllable 'Feb'|Acentuación en la primera sílaba 'Feb']]",
        "[[Correct pronunciation of 'ru' or 'u'|Pronunciación correcta de 'ru' o 'u']]",
        "[[Clear ending /i/|Final claro en /i/]]"
      ]
    }
  },
  {
    "id": "a1-u19-e71",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[First, second, third|Primero, segundo, tercero]]",
    "audioUrl": "audio/a1/unit-19/e71.mp3",
    "content": {
      "title": "[[Pronunciation: Ordinals|Pronunciación: Ordinales]]",
      "instructions": "[[Listen and repeat the first three ordinals|Escucha y repite los tres primeros ordinales]].",
      "expectedResponse": "First, second, third.",
      "evaluationCriteria": [
        "[[Clear 'st' sound in first|'st' claro en first]]",
        "[[Clear 'nd' sound in second|'nd' claro en second]]",
        "[[Correct /θ/ sound in third|Sonido /θ/ correcto en third]]"
      ]
    }
  },
  {
    "id": "a1-u19-e72",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[August|Agosto]]",
    "audioUrl": "audio/a1/unit-19/e72.mp3",
    "content": {
      "title": "[[Pronunciation: August|Pronunciación: Agosto]]",
      "instructions": "[[Listen and repeat focusing on the /ɔː/ sound|Escucha y repite enfocándote en el sonido /ɔː/]].",
      "expectedResponse": "August.",
      "evaluationCriteria": [
        "[[Correct /ɔː/ sound at the beginning|Sonido /ɔː/ correcto al inicio]]",
        "[[Stress on the first syllable|Acentuación en la primera sílaba]]",
        "[[Clear 'st' ending|Final claro en 'st']]"
      ]
    }
  },
  {
    "id": "a1-u19-e73",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[Twelfth|Duodécimo]]",
    "audioUrl": "audio/a1/unit-19/e73.mp3",
    "content": {
      "title": "[[Pronunciation: Twelfth|Pronunciación: Duodécimo]]",
      "instructions": "[[Listen and repeat focusing on the 'fth' sound|Escucha y repite enfocándote en el sonido 'fth']].",
      "expectedResponse": "Twelfth.",
      "evaluationCriteria": [
        "[[Clear /f/ sound before the /θ/|Sonido /f/ claro antes de /θ/]]",
        "[[Correct /θ/ sound at the end|Sonido /θ/ correcto al final]]",
        "[[Single syllable pronunciation|Pronunciación de una sola sílaba]]"
      ]
    }
  },
  {
    "id": "a1-u19-e74",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[In September|En septiembre]]",
    "audioUrl": "audio/a1/unit-19/e74.mp3",
    "content": {
      "title": "[[Pronunciation: In|Pronunciación: In]]",
      "instructions": "[[Listen and repeat focusing on the preposition|Escucha y repite enfocándote en la preposición]].",
      "expectedResponse": "In September.",
      "evaluationCriteria": [
        "[[Clear short /ɪ/ in 'in'|/ɪ/ corta clara en 'in']]",
        "[[Stress on second syllable of September|Acentuación en la segunda sílaba de September]]",
        "[[Smooth transition between words|Transición suave entre palabras]]"
      ]
    }
  },
  {
    "id": "a1-u19-e75",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[On October 31st|El 31 de octubre]]",
    "audioUrl": "audio/a1/unit-19/e75.mp3",
    "content": {
      "title": "[[Pronunciation: On|Pronunciación: On]]",
      "instructions": "[[Listen and repeat focusing on the preposition and ordinal|Escucha y repite enfocándote en la preposición y el ordinal]].",
      "expectedResponse": "On October thirty-first.",
      "evaluationCriteria": [
        "[[Short /ɒ/ sound in 'on'|/ɒ/ corta en 'on']]",
        "[[Stress on second syllable of October|Acentuación en la segunda sílaba de October]]",
        "[[Clear 'st' sound in thirty-first|'st' claro en thirty-first]]"
      ]
    }
  }
];
