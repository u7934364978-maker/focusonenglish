import { Exercise } from '@/lib/exercise-generator';

export const UNIT_12_EXERCISES: Exercise[] = [
  // ==========================================
  // LESSON 1: DAYS OF THE WEEK - BASICS (1-15)
  // ==========================================
  {
    "id": "a1-u12-e1",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Days of the Week",
    "difficulty": "easy",
    "transcript": "[[Today is Monday|Hoy es lunes]].",
    "content": {
      "title": "[[Monday|Lunes]]",
      "instructions": "[[Identify the first day of the week|Identifica el primer día de la semana]].",
      "question": "[[The first day of the work week is|El primer día de la semana laboral es]] (____).",
      "options": ["[[Monday|Lunes]]", "[[Morning|Mañana]]", "[[Month|Mes]]"],
      "correctAnswer": 0,
      "explanation": "[[Monday is 'lunes' in Spanish|Monday es 'lunes' en español]]."
    },
    "audioUrl": "audio/a1/unit-12/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Days of the Week",
    "difficulty": "easy",
    "transcript": "[[Tuesday comes after Monday|El martes viene después del lunes]].",
    "content": {
      "title": "[[Tuesday|Martes]]",
      "instructions": "[[Identify the day|Identifica el día]].",
      "question": "[[Monday, (____), Wednesday.|Lunes, (____), miércoles.]]",
      "options": ["[[Tuesday|Martes]]", "[[Thursday|Jueves]]", "[[Today|Hoy]]"],
      "correctAnswer": 0,
      "explanation": "[[Tuesday is 'martes'|Tuesday es 'martes']]."
    },
    "audioUrl": "audio/a1/unit-12/e2.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Days of the Week",
    "difficulty": "easy",
    "transcript": "[[Wednesday is the middle of the week|El miércoles es la mitad de la semana]].",
    "content": {
      "title": "[[Wednesday|Miércoles]]",
      "instructions": "[[Select the correct day|Selecciona el día correcto]].",
      "question": "[[3rd day of the work week:|3er día de la semana laboral:]] (____).",
      "options": ["[[Monday|Lunes]]", "[[Wednesday|Miércoles]]", "[[Friday|Viernes]]"],
      "correctAnswer": 1,
      "explanation": "[[Wednesday is 'miércoles'|Wednesday es 'miércoles']]."
    },
    "audioUrl": "audio/a1/unit-12/e3.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Days of the Week",
    "difficulty": "easy",
    "transcript": "[[Tomorrow is Thursday|Mañana es jueves]].",
    "content": {
      "title": "[[Thursday|Jueves]]",
      "instructions": "[[Identify the day|Identifica el día]].",
      "question": "[[Wednesday, (____), Friday.|Miércoles, (____), viernes.]]",
      "options": ["[[Tuesday|Martes]]", "[[Thursday|Jueves]]", "[[Saturday|Sábado]]"],
      "correctAnswer": 1,
      "explanation": "[[Thursday is 'jueves'|Thursday es 'jueves']]."
    },
    "audioUrl": "audio/a1/unit-12/e4.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e5",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Days of the Week",
    "difficulty": "easy",
    "transcript": "[[Friday is the last workday|El viernes es el último día laboral]].",
    "content": {
      "title": "[[Friday|Viernes]]",
      "instructions": "[[Select the correct day|Selecciona el día correcto]].",
      "question": "[[The day after Thursday is|El día después del jueves es]] (____).",
      "options": ["[[Tuesday|Martes]]", "[[Friday|Viernes]]", "[[Sunday|Domingo]]"],
      "correctAnswer": 1,
      "explanation": "[[Friday is 'viernes'|Friday es 'viernes']]."
    },
    "audioUrl": "audio/a1/unit-12/e5.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Days of the Week",
    "difficulty": "easy",
    "transcript": "[[Saturday and Sunday are the weekend|Sábado y domingo son el fin de semana]].",
    "content": {
      "title": "[[The Weekend|El Fin de Semana]]",
      "instructions": "[[Identify the weekend days|Identifica los días del fin de semana]].",
      "question": "[[Saturday is part of the|El sábado es parte del]] (____).",
      "options": ["[[weekend|fin de semana]]", "[[weekday|día laboral]]", "[[month|mes]]"],
      "correctAnswer": 0,
      "explanation": "[[The weekend consists of Saturday and Sunday|El fin de semana consiste en sábado y domingo]]."
    },
    "audioUrl": "audio/a1/unit-12/e6.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e7",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Days of the Week",
    "difficulty": "easy",
    "transcript": "[[Sunday is a day of rest|El domingo es un día de descanso]].",
    "content": {
      "title": "[[Sunday|Domingo]]",
      "instructions": "[[Identify the day|Identifica el día]].",
      "question": "[[The last day of the week is|El último día de la semana es]] (____).",
      "options": ["[[Saturday|Sábado]]", "[[Sunday|Domingo]]", "[[Friday|Viernes]]"],
      "correctAnswer": 1,
      "explanation": "[[Sunday is 'domingo'|Sunday es 'domingo']]."
    },
    "audioUrl": "audio/a1/unit-12/e7.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e8",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Time Concepts",
    "difficulty": "easy",
    "transcript": "[[Today is the current day|Hoy es el día actual]].",
    "content": {
      "title": "[[Today|Hoy]]",
      "instructions": "[[Choose the correct term|Elige el término correcto]].",
      "question": "[[The current day is|El día actual es]] (____).",
      "options": ["[[Today|Hoy]]", "[[Tomorrow|Mañana]]", "[[Yesterday|Ayer]]"],
      "correctAnswer": 0,
      "explanation": "[[Today means 'hoy'|Today significa 'hoy']]."
    },
    "audioUrl": "audio/a1/unit-12/e8.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Time Concepts",
    "difficulty": "easy",
    "transcript": "[[Tomorrow is the day after today|Mañana es el día después de hoy]].",
    "content": {
      "title": "[[Tomorrow|Mañana]]",
      "instructions": "[[Identify the concept|Identifica el concepto]].",
      "question": "[[The day after today is|El día después de hoy es]] (____).",
      "options": ["[[Yesterday|Ayer]]", "[[Today|Hoy]]", "[[Tomorrow|Mañana]]"],
      "correctAnswer": 2,
      "explanation": "[[Tomorrow means 'mañana'|Tomorrow significa 'mañana']]."
    },
    "audioUrl": "audio/a1/unit-12/e9.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Time Concepts",
    "difficulty": "easy",
    "transcript": "[[Yesterday was the day before today|Ayer fue el día antes de hoy]].",
    "content": {
      "title": "[[Yesterday|Ayer]]",
      "instructions": "[[Identify the concept|Identifica el concepto]].",
      "question": "[[The day before today was|El día antes de hoy fue]] (____).",
      "options": ["[[Yesterday|Ayer]]", "[[Today|Hoy]]", "[[Tomorrow|Mañana]]"],
      "correctAnswer": 0,
      "explanation": "[[Yesterday means 'ayer'|Yesterday significa 'ayer']]."
    },
    "audioUrl": "audio/a1/unit-12/e10.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e11",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Days of the Week",
    "difficulty": "easy",
    "transcript": "[[What day is it today?|¿Qué día es hoy?]]",
    "content": {
      "title": "[[Question: Day|Pregunta: Día]]",
      "instructions": "[[Complete the question|Completa la pregunta]].",
      "questions": [
        {
          "question": "[[What (____) is it today?|¿Qué (____) es hoy?]]",
          "correctAnswer": "day",
          "explanation": "[[Use 'day' to ask about the date or day of the week|Usa 'day' para preguntar sobre la fecha o el día de la semana]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-12/e11.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e12",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Days of the Week",
    "difficulty": "easy",
    "transcript": "[[Today is Wednesday|Hoy es miércoles]].",
    "content": {
      "title": "[[Sentence: Today|Frase: Hoy]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[Today is Wednesday|Hoy es miércoles]].",
      "words": ["[[Wednesday|miércoles]].", "[[is|es]]", "[[Today|Hoy]]"],
      "explanation": "[[Structure: Subject + is + Day|Estructura: Sujeto + is + Día]]."
    },
    "audioUrl": "audio/a1/unit-12/e12.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e13",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Time Units",
    "difficulty": "easy",
    "transcript": "[[A week has seven days|Una semana tiene siete días]].",
    "content": {
      "title": "[[Week|Semana]]",
      "instructions": "[[Identify the number of days|Identifica el número de días]].",
      "question": "[[One week =|Una semana =]] (____) [[days.|días.]]",
      "options": ["[[five|cinco]]", "[[six|seis]]", "[[seven|siete]]"],
      "correctAnswer": 2,
      "explanation": "[[There are 7 days in a week|Hay 7 días en una semana]]."
    },
    "audioUrl": "audio/a1/unit-12/e13.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e14",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Time Concepts",
    "difficulty": "easy",
    "transcript": "[[Tomorrow is Saturday|Mañana es sábado]].",
    "content": {
      "title": "[[Future Day|Día Futuro]]",
      "instructions": "[[Complete the sentence|Completa la frase]].",
      "questions": [
        {
          "question": "[[If today is Friday, (____) is Saturday.|Si hoy es viernes, (____) es sábado.]]",
          "correctAnswer": "tomorrow",
          "explanation": "[[Saturday follows Friday|El sábado sigue al viernes]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-12/e14.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e15",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Days of the Week",
    "difficulty": "easy",
    "transcript": "[[Monday to Friday are weekdays|Lunes a viernes son días de la semana (laborales)]].",
    "content": {
      "title": "[[Weekdays|Días Laborales]]",
      "instructions": "[[Identify the term|Identifica el término]].",
      "question": "[[Workdays are called|Los días de trabajo se llaman]] (____).",
      "options": ["[[weekdays|días laborales]]", "[[weekends|fines de semana]]", "[[nights|noches]]"],
      "correctAnswer": 0,
      "explanation": "[[Weekdays are the days from Monday to Friday|Weekdays son los días de lunes a viernes]]."
    },
    "audioUrl": "audio/a1/unit-12/e15.mp3",
    "topicName": "Vocabulary"
  },

  // ==========================================
  // LESSON 2: PREPOSITIONS WITH DAYS (16-30)
  // ==========================================
  {
    "id": "a1-u12-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[I work on Monday|Trabajo el lunes]].",
    "content": {
      "title": "[[Preposition: On|Preposición: On]]",
      "instructions": "[[Choose the correct preposition|Elige la preposición correcta]].",
      "question": "[[I work (____) Monday.|Trabajo (____) lunes.]]",
      "options": ["[[in|en]]", "[[at|a las]]", "[[on|el]]"],
      "correctAnswer": 2,
      "explanation": "[[Use 'on' with days of the week|Usa 'on' con los días de la semana]]."
    },
    "audioUrl": "audio/a1/unit-12/e16.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[We have class on Tuesday|Tenemos clase el martes]].",
    "content": {
      "title": "[[On Tuesday|El martes]]",
      "instructions": "[[Select the preposition|Selecciona la preposición]].",
      "question": "[[We have class (____) Tuesday.|Tenemos clase (____) martes.]]",
      "options": ["[[on|el]]", "[[in|en]]", "[[at|a]]"],
      "correctAnswer": 0,
      "explanation": "[[Always use 'on' before a day|Siempre usa 'on' antes de un día]]."
    },
    "audioUrl": "audio/a1/unit-12/e17.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[The museum is closed on Wednesday|El museo está cerrado el miércoles]].",
    "content": {
      "title": "[[On Wednesday|El miércoles]]",
      "instructions": "[[Identify the preposition|Identifica la preposición]].",
      "question": "[[Closed (____) Wednesday.|Cerrado (____) miércoles.]]",
      "options": ["[[on|el]]", "[[under|bajo]]", "[[by|por]]"],
      "correctAnswer": 0,
      "explanation": "[[Prepositions of time: 'on' for days|Preposiciones de tiempo: 'on' para días]]."
    },
    "audioUrl": "audio/a1/unit-12/e18.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e19",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[I study English on Thursday|Estudio inglés el jueves]].",
    "content": {
      "title": "[[Grammar: Days|Gramática: Días]]",
      "instructions": "[[Complete with the preposition|Completa con la preposición]].",
      "questions": [
        {
          "question": "[[I study English (____) Thursday.|Estudio inglés (____) jueves.]]",
          "correctAnswer": "on",
          "explanation": "[[Use 'on' for specific days|Usa 'on' para días específicos]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-12/e19.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[The party is on Friday|La fiesta es el viernes]].",
    "content": {
      "title": "[[On Friday|El viernes]]",
      "instructions": "[[Choose the correct preposition|Elige la preposición correcta]].",
      "question": "[[The party is (____) Friday.|La fiesta es (____) viernes.]]",
      "options": ["[[at|a las]]", "[[on|el]]", "[[to|a]]"],
      "correctAnswer": 1,
      "explanation": "[[Events on specific days use 'on'|Los eventos en días específicos usan 'on']]."
    },
    "audioUrl": "audio/a1/unit-12/e20.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[I go to the gym on Saturdays|Voy al gimnasio los sábados]].",
    "content": {
      "title": "[[Plural Days|Días en Plural]]",
      "instructions": "[[Choose the preposition for repeated days|Elige la preposición para días repetidos]].",
      "question": "[[I go to the gym (____) Saturdays.|Voy al gimnasio (____) los sábados.]]",
      "options": ["[[on|los]]", "[[in|en]]", "[[at|a]]"],
      "correctAnswer": 0,
      "explanation": "[[Use 'on' even with plural days|Usa 'on' incluso con días en plural]]."
    },
    "audioUrl": "audio/a1/unit-12/e21.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e22",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[The store is open on Sundays|La tienda abre los domingos]].",
    "content": {
      "title": "[[On Sundays|Los domingos]]",
      "instructions": "[[Identify the preposition|Identifica la preposición]].",
      "question": "[[Open (____) Sundays.|Abierto (____) domingos.]]",
      "options": ["[[on|los]]", "[[at|a]]", "[[of|de]]"],
      "correctAnswer": 0,
      "explanation": "[[On + Day(s) of the week|On + Día(s) de la semana]]."
    },
    "audioUrl": "audio/a1/unit-12/e22.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e23",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[He works on Monday and Tuesday|Él trabaja el lunes y el martes]].",
    "content": {
      "title": "[[Sentence Building|Construcción de Frases]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[He works on Monday and Tuesday|Él trabaja el lunes y el martes]].",
      "words": ["[[Tuesday|martes]].", "[[and|y]]", "[[Monday|lunes]]", "[[on|el]]", "[[works|trabaja]]", "[[He|Él]]"],
      "explanation": "[[Structure: Subject + Verb + on + Day + and + Day|Estructura: Sujeto + Verbo + on + Día + and + Día]]."
    },
    "audioUrl": "audio/a1/unit-12/e23.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e24",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[My birthday is on Thursday|Mi cumpleaños es el jueves]].",
    "content": {
      "title": "[[Birthday|Cumpleaños]]",
      "instructions": "[[Complete the preposition|Completa la preposición]].",
      "questions": [
        {
          "question": "[[My birthday is (____) Thursday.|Mi cumpleaños es (____) jueves.]]",
          "correctAnswer": "on",
          "explanation": "[[Use 'on' for birthdays on a specific day|Usa 'on' para cumpleaños en un día específico]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-12/e24.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[See you on Friday!|¡Nos vemos el viernes!]]",
    "content": {
      "title": "[[Farewell|Despedida]]",
      "instructions": "[[Identify the preposition|Identifica la preposición]].",
      "question": "[[See you (____) Friday!|Nos vemos (____) viernes!]]",
      "options": ["[[on|el]]", "[[at|a]]", "[[to|a]]"],
      "correctAnswer": 0,
      "explanation": "[[Standard phrase for saying goodbye|Frase estándar para despedirse]]."
    },
    "audioUrl": "audio/a1/unit-12/e25.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Time Phrases",
    "difficulty": "medium",
    "transcript": "[[I go to the park on the weekend|Voy al parque el fin de semana]].",
    "content": {
      "title": "[[The Weekend|El Fin de Semana]]",
      "instructions": "[[Choose the correct preposition|Elige la preposición correcta]].",
      "question": "[[I go to the park (____) the weekend.|Voy al parque (____) el fin de semana.]]",
      "options": ["[[on|el]]", "[[at|en]]", "[[both 'on' and 'at' are correct|tanto 'on' como 'at' son correctos]]"],
      "correctAnswer": 2,
      "explanation": "[[American English uses 'on', British English uses 'at'|El inglés americano usa 'on', el inglés británico usa 'at']]."
    },
    "audioUrl": "audio/a1/unit-12/e26.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e27",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Days of the Week",
    "difficulty": "medium",
    "transcript": "[[Do you work on Saturdays?|¿Trabajas los sábados?]]",
    "content": {
      "title": "[[Question: Work|Pregunta: Trabajo]]",
      "instructions": "[[Complete the question|Completa la pregunta]].",
      "questions": [
        {
          "question": "[[Do you work (____) Saturdays?|¿Trabajas (____) sábados?]]",
          "correctAnswer": "on",
          "explanation": "[[Use 'on' for habits on certain days|Usa 'on' para hábitos en ciertos días]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-12/e27.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e28",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Routine",
    "difficulty": "medium",
    "transcript": "[[We study English on Mondays|Estudiamos inglés los lunes]].",
    "content": {
      "title": "[[Study Routine|Rutina de Estudio]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[We study English on Mondays|Estudiamos inglés los lunes]].",
      "words": ["[[Mondays|lunes]].", "[[on|los]]", "[[English|inglés]]", "[[study|estudiamos]]", "[[We|Nosotros]]"],
      "explanation": "[[Use plural days for repeated events|Usa los días en plural para eventos repetidos]]."
    },
    "audioUrl": "audio/a1/unit-12/e28.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prepositions",
    "difficulty": "medium",
    "transcript": "[[Is the bank open on Saturday?|¿Abre el banco el sábado?]]",
    "content": {
      "title": "[[Bank Opening|Apertura de Banco]]",
      "instructions": "[[Identify the preposition|Identifica la preposición]].",
      "question": "[[Is the bank open (____) Saturday?|¿Está el banco abierto (____) sábado?]]",
      "options": ["[[on|el]]", "[[at|a]]", "[[in|en]]"],
      "correctAnswer": 0,
      "explanation": "[[Questions also use 'on' for days|Las preguntas también usan 'on' para los días]]."
    },
    "audioUrl": "audio/a1/unit-12/e29.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e30",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Days of the Week",
    "difficulty": "medium",
    "transcript": "[[I have a meeting on Tuesday|Tengo una reunión el martes]].",
    "content": {
      "title": "[[Meeting|Reunión]]",
      "instructions": "[[Complete the sentence|Completa la frase]].",
      "questions": [
        {
          "question": "[[I have a meeting (____) Tuesday.|Tengo una reunión (____) martes.]]",
          "correctAnswer": "on",
          "explanation": "[[On + Tuesday|On + Martes]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-12/e30.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // LESSON 3: TIME ADVERBS & EXPRESSIONS (31-45)
  // ==========================================
  {
    "id": "a1-u12-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Time Adverbs",
    "difficulty": "medium",
    "transcript": "[[Always, usually, sometimes, never|Siempre, usualmente, a veces, nunca]].",
    "content": {
      "title": "[[Always|Siempre]]",
      "instructions": "[[Identify the adverb|Identifica el adverbio]].",
      "question": "[[100% of the time =|El 100% del tiempo =]] (____).",
      "options": ["[[Always|Siempre]]", "[[Never|Nunca]]", "[[Sometimes|A veces]]"],
      "correctAnswer": 0,
      "explanation": "[[Always means 100%|Always significa 100%]]."
    },
    "audioUrl": "audio/a1/unit-12/e31.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e32",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Time Adverbs",
    "difficulty": "medium",
    "transcript": "[[I never work on Sunday|Nunca trabajo los domingos]].",
    "content": {
      "title": "[[Never|Nunca]]",
      "instructions": "[[Identify the adverb|Identifica el adverbio]].",
      "question": "[[0% of the time =|El 0% del tiempo =]] (____).",
      "options": ["[[Never|Nunca]]", "[[Usually|Usualmente]]", "[[Always|Siempre]]"],
      "correctAnswer": 0,
      "explanation": "[[Never means 0%|Never significa 0%]]."
    },
    "audioUrl": "audio/a1/unit-12/e32.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Time Expressions",
    "difficulty": "medium",
    "transcript": "[[Every day means from Monday to Sunday|Todos los días significa de lunes a domingo]].",
    "content": {
      "title": "[[Every Day|Todos los Días]]",
      "instructions": "[[Identify the phrase|Identifica la frase]].",
      "question": "[[Monday, Tuesday... Sunday =|Lunes, martes... domingo =]] (____).",
      "options": ["[[Every day|Todos los días]]", "[[Every week|Toda la semana]]", "[[Every month|Cada mes]]"],
      "correctAnswer": 0,
      "explanation": "[[Every day means each day of the week|Every day significa cada día de la semana]]."
    },
    "audioUrl": "audio/a1/unit-12/e33.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e34",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Time Expressions",
    "difficulty": "medium",
    "transcript": "[[I study English every Monday|Estudio inglés cada lunes]].",
    "content": {
      "title": "[[Every Monday|Cada Lunes]]",
      "instructions": "[[Complete the phrase|Completa la frase]].",
      "questions": [
        {
          "question": "[[I study English (____) Monday.|Estudio inglés (____) lunes.]]",
          "correctAnswer": "every",
          "explanation": "[[Use 'every' for things that happen on that day each week|Usa 'every' para cosas que pasan ese día cada semana]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-12/e34.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Time Adverbs",
    "difficulty": "medium",
    "transcript": "[[I usually go to bed at ten PM|Usualmente me voy a la cama a las diez]].",
    "content": {
      "title": "[[Usually|Usualmente]]",
      "instructions": "[[Identify the frequency|Identifica la frecuencia]].",
      "question": "[[Most of the time (approx. 80%) =|La mayoría del tiempo (aprox. 80%) =]] (____).",
      "options": ["[[Usually|Usualmente]]", "[[Never|Nunca]]", "[[Sometimes|A veces]]"],
      "correctAnswer": 0,
      "explanation": "[[Usually means most days|Usually significa la mayoría de los días]]."
    },
    "audioUrl": "audio/a1/unit-12/e35.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e36",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Time Adverbs",
    "difficulty": "medium",
    "transcript": "[[I sometimes eat pizza on Friday|A veces como pizza los viernes]].",
    "content": {
      "title": "[[Sometimes|A veces]]",
      "instructions": "[[Identify the frequency|Identifica la frecuencia]].",
      "question": "[[Some of the time (approx. 50%) =|Parte del tiempo (aprox. 50%) =]] (____).",
      "options": ["[[Always|Siempre]]", "[[Sometimes|A veces]]", "[[Never|Nunca]]"],
      "correctAnswer": 1,
      "explanation": "[[Sometimes means not always, but not never|Sometimes significa ni siempre, ni nunca]]."
    },
    "audioUrl": "audio/a1/unit-12/e36.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e37",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Adverbs",
    "difficulty": "medium",
    "transcript": "[[I always work on Monday|Siempre trabajo el lunes]].",
    "content": {
      "title": "[[Always Working|Siempre Trabajando]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[I always work on Monday|Siempre trabajo el lunes]].",
      "words": ["[[Monday|lunes]].", "[[on|el]]", "[[work|trabajo]]", "[[always|siempre]]", "[[I|Yo]]"],
      "explanation": "[[Structure: Subject + Adverb + Verb + on + Day|Estructura: Sujeto + Adverbio + Verbo + on + Día]]."
    },
    "audioUrl": "audio/a1/unit-12/e37.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e38",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Time Concepts",
    "difficulty": "medium",
    "transcript": "[[Today is Tuesday, so tomorrow is Wednesday|Hoy es martes, así que mañana es miércoles]].",
    "content": {
      "title": "[[Logic: Tomorrow|Lógica: Mañana]]",
      "instructions": "[[Complete the sentence|Completa la frase]].",
      "questions": [
        {
          "question": "[[If today is Tuesday, (____) is Wednesday.|Si hoy es martes, (____) es miércoles.]]",
          "correctAnswer": "tomorrow",
          "explanation": "[[Wednesday is the day after Tuesday|El miércoles es el día después del martes]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-12/e38.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e39",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Time Concepts",
    "difficulty": "medium",
    "transcript": "[[Today is Tuesday, so yesterday was Monday|Hoy es martes, así que ayer fue lunes]].",
    "content": {
      "title": "[[Logic: Yesterday|Lógica: Ayer]]",
      "instructions": "[[Complete the sentence|Completa la frase]].",
      "questions": [
        {
          "question": "[[If today is Tuesday, (____) was Monday.|Si hoy es martes, (____) fue lunes.]]",
          "correctAnswer": "yesterday",
          "explanation": "[[Monday is the day before Tuesday|El lunes es el día antes del martes]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-12/e39.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e40",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Adverbs",
    "difficulty": "medium",
    "transcript": "[[Where do you put 'always'?|¿Dónde pones 'always'?]]",
    "content": {
      "title": "[[Adverb Position|Posición del Adverbio]]",
      "instructions": "[[Choose the correct sentence|Elige la frase correcta]].",
      "question": "[[Which is correct?|¿Cuál es correcta?]]",
      "options": ["[[I always study.|Siempre estudio.]]", "[[I study always.|Estudio siempre. (incorrecto)]]", "[[Always I study.|Siempre estudio. (poco común)]]"],
      "correctAnswer": 0,
      "explanation": "[[Put frequency adverbs before the main verb|Pon los adverbios de frecuencia antes del verbo principal]]."
    },
    "audioUrl": "audio/a1/unit-12/e40.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e41",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Adverbs",
    "difficulty": "medium",
    "transcript": "[[She usually works on Saturday|Ella usualmente trabaja el sábado]].",
    "content": {
      "title": "[[Sentence: Usually|Frase: Usualmente]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[She usually works on Saturday|Ella usualmente trabaja el sábado]].",
      "words": ["[[Saturday|sábado]].", "[[on|el]]", "[[works|trabaja]]", "[[usually|usualmente]]", "[[She|Ella]]"],
      "explanation": "[[Structure: Subject + usually + verb + on + Day|Estructura: Sujeto + usually + verbo + on + Día]]."
    },
    "audioUrl": "audio/a1/unit-12/e41.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u12-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Time Phrases",
    "difficulty": "medium",
    "transcript": "[[On the weekend|El fin de semana]].",
    "content": {
      "title": "[[Weekend Days|Días del Fin de Semana]]",
      "instructions": "[[Identify the days|Identifica los días]].",
      "question": "[[The weekend is|El fin de semana es]] (____).",
      "options": ["[[Saturday and Sunday|sábado y domingo]]", "[[Monday and Tuesday|lunes y martes]]", "[[Friday and Saturday|viernes y sábado]]"],
      "correctAnswer": 0,
      "explanation": "[[The standard weekend is Saturday and Sunday|El fin de semana estándar es sábado y domingo]]."
    },
    "audioUrl": "audio/a1/unit-12/e42.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e43",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Time Concepts",
    "difficulty": "medium",
    "transcript": "[[Every week has seven days|Cada semana tiene siete días]].",
    "content": {
      "title": "[[Every Week|Cada Semana]]",
      "instructions": "[[Complete the sentence|Completa la frase]].",
      "questions": [
        {
          "question": "[[There are seven days in (____) week.|Hay siete días en (____) semana.]]",
          "correctAnswer": "every",
          "explanation": "[[Each and every week has 7 days|Todas y cada una de las semanas tienen 7 días]]."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-12/e43.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Time Phrases",
    "difficulty": "medium",
    "transcript": "[[What is the meaning of 'weekday'?|¿Cuál es el significado de 'weekday'?]]",
    "content": {
      "title": "[[Weekday|Día de la semana]]",
      "instructions": "[[Identify the meaning|Identifica el significado]].",
      "question": "[[A weekday is|Un 'weekday' es]] (____).",
      "options": ["[[Monday, Tuesday, Wednesday, Thursday, or Friday|de lunes a viernes]]", "[[Saturday or Sunday|sábado o domingo]]", "[[Any day|Cualquier día]]"],
      "correctAnswer": 0,
      "explanation": "[[Weekdays are non-weekend days|Weekdays son los días que no son fin de semana]]."
    },
    "audioUrl": "audio/a1/unit-12/e44.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u12-e45",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Adverbs",
    "difficulty": "medium",
    "transcript": "[[I sometimes study on Sunday|A veces estudio el domingo]].",
    "content": {
      "title": "[[Sentence: Sometimes|Frase: A veces]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[I sometimes study on Sunday|A veces estudio el domingo]].",
      "words": ["[[Sunday|domingo]].", "[[on|el]]", "[[study|estudio]]", "[[sometimes|a veces]]", "[[I|Yo]]"],
      "explanation": "[[Structure: Subject + sometimes + verb + on + Day|Estructura: Sujeto + sometimes + verbo + on + Día]]."
    },
    "audioUrl": "audio/a1/unit-12/e45.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // LESSON 4: READING COMPREHENSION (46-60)
  // ==========================================
  {
    "id": "a1-u12-e46",
    "type": "reading",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Maria's Weekly Routine|La Rutina Semanal de Maria]]. [[Maria is a very busy person|Maria es una persona muy ocupada]]. [[From Monday to Friday, she works at a bank|De lunes a viernes, trabaja en un banco]]. [[She always wakes up early on weekdays|Siempre se despierta temprano los días laborales]]. [[On Tuesday and Thursday, she goes to the gym in the evening|Los martes y jueves, va al gimnasio por la tarde]]. [[Maria loves the weekend|Maria ama el fin de semana]]. [[She never works on Saturday or Sunday|Nunca trabaja los sábados ni los domingos]]. [[On Saturday, she usually visits her family|Los sábados, usualmente visita a su familia]]. [[On Sunday, she sometimes goes to the park|Los domingos, a veces va al parque]]. [[Today is Friday, and Maria is happy because tomorrow is the weekend|Hoy es viernes, y Maria está feliz porque mañana es el fin de semana]].",
    "content": {
      "title": "[[Reading: Maria's Routine|Lectura: La rutina de Maria]]",
      "instructions": "[[Read the text about Maria|Lee el texto sobre Maria]].",
      "questions": [
        {
          "question": "[[Maria's Weekly Routine|La Rutina Semanal de Maria]]. [[Maria is a very busy person|Maria es una persona muy ocupada]]. [[From Monday to Friday, she works at a bank|De lunes a viernes, trabaja en un banco]]. [[She always wakes up early on weekdays|Siempre se despierta temprano los días laborales]]. [[On Tuesday and Thursday, she goes to the gym in the evening|Los martes y jueves, va al gimnasio por la tarde]]. [[Maria loves the weekend|Maria ama el fin de semana]]. [[She never works on Saturday or Sunday|Nunca trabaja los sábados ni los domingos]]. [[On Saturday, she usually visits her family|Los sábados, usualmente visita a su familia]]. [[On Sunday, she sometimes goes to the park|Los domingos, a veces va al parque]]. [[Today is Friday, and Maria is happy because tomorrow is the weekend|Hoy es viernes, y Maria está feliz porque mañana es el fin de semana]].",
          "options": ["[[I have read the text|He leído el texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Click to continue|Haz clic para continuar]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[When does Maria work? From Monday to Friday|¿Cuándo trabaja Maria? De lunes a viernes]].",
    "content": {
      "title": "[[Comprehension: Work|Comprensión: Trabajo]]",
      "instructions": "[[Answer based on the text|Responde según el texto]].",
      "question": "[[Maria works from|Maria trabaja de]] (____).",
      "options": ["[[Monday to Friday|lunes a viernes]]", "[[Saturday to Sunday|sábado a domingo]]", "[[Monday to Sunday|lunes a domingo]]"],
      "correctAnswer": 0,
      "explanation": "[[The text says 'From Monday to Friday, she works at a bank'|El texto dice 'De lunes a viernes, trabaja en un banco']]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e48",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[Does Maria wake up late on weekdays? No, she always wakes up early|¿Maria se despierta tarde los días laborales? No, siempre se despierta temprano]].",
    "content": {
      "title": "[[Comprehension: Waking up|Comprensión: Despertarse]]",
      "instructions": "[[Select the correct option|Selecciona la opción correcta]].",
      "question": "[[On weekdays, Maria|En los días laborales, Maria]] (____).",
      "options": ["[[always wakes up early|siempre se despierta temprano]]", "[[usually wakes up late|usualmente se despierta tarde]]", "[[never wakes up|nunca se despierta (incorrecto)]]"],
      "correctAnswer": 0,
      "explanation": "[[The text states: 'She always wakes up early on weekdays'|El texto afirma: 'Siempre se despierta temprano los días laborales']]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[When does she go to the gym? On Tuesday and Thursday|¿Cuándo va al gimnasio? El martes y el jueves]].",
    "content": {
      "title": "[[Comprehension: Gym|Comprensión: Gimnasio]]",
      "instructions": "[[Answer the question|Responde la pregunta]].",
      "question": "[[Maria goes to the gym on|Maria va al gimnasio el]] (____).",
      "options": ["[[Monday and Wednesday|lunes y miércoles]]", "[[Tuesday and Thursday|martes y jueves]]", "[[Saturday and Sunday|sábado y domingo]]"],
      "correctAnswer": 1,
      "explanation": "[[Text: 'On Tuesday and Thursday, she goes to the gym'|Texto: 'Los martes y jueves, va al gimnasio']]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[Does Maria work on the weekend? No, never|¿Trabaja Maria el fin de semana? No, nunca]].",
    "content": {
      "title": "[[Comprehension: Weekend|Comprensión: Fin de Semana]]",
      "instructions": "[[True or False?|¿Verdadero o Falso?]]",
      "question": "[[Maria works on Saturday.|Maria trabaja los sábados.]]",
      "options": ["[[True|Verdadero]]", "[[False|Falso]]"],
      "correctAnswer": 1,
      "explanation": "[[Text: 'She never works on Saturday or Sunday'|Texto: 'Nunca trabaja los sábados ni los domingos']]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[What does Maria usually do on Saturday? She visits her family|¿Qué suele hacer Maria el sábado? Visita a su familia]].",
    "content": {
      "title": "[[Comprehension: Saturday|Comprensión: Sábado]]",
      "instructions": "[[Answer based on the text|Responde según el texto]].",
      "question": "[[On Saturday, she usually|El sábado, ella usualmente]] (____).",
      "options": ["[[goes to the gym|va al gimnasio]]", "[[visits her family|visita a su familia]]", "[[works at the bank|trabaja en el banco]]"],
      "correctAnswer": 1,
      "explanation": "[[Text: 'On Saturday, she usually visits her family'|Texto: 'Los sábados, usualmente visita a su familia']]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[What day is it today? It is Friday|¿Qué día es hoy? Es viernes]].",
    "content": {
      "title": "[[Comprehension: Today|Comprensión: Hoy]]",
      "instructions": "[[Identify the current day in the text|Identifica el día actual en el texto]].",
      "question": "[[In the text, today is|En el texto, hoy es]] (____).",
      "options": ["[[Friday|Viernes]]", "[[Saturday|Sábado]]", "[[Sunday|Domingo]]"],
      "correctAnswer": 0,
      "explanation": "[[The last sentence says 'Today is Friday'|La última frase dice 'Hoy es viernes']]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e53",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[If today is Friday, tomorrow is Saturday|Si hoy es viernes, mañana es sábado]].",
    "content": {
      "title": "[[Comprehension: Tomorrow|Comprensión: Mañana]]",
      "instructions": "[[Complete based on the text|Completa según el texto]].",
      "questions": [
        {
          "question": "[[Today is Friday, and (____) is the weekend.|Hoy es viernes, y (____) es el fin de semana.]]",
          "correctAnswer": "tomorrow",
          "explanation": "[[Tomorrow is Saturday, the start of the weekend|Mañana es sábado, el inicio del fin de semana]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "transcript": "[[What is the meaning of 'every' in the text?|¿Cuál es el significado de 'every' en el texto?]]",
    "content": {
      "title": "[[Vocabulary: Every|Vocabulario: Every]]",
      "instructions": "[[Identify the meaning|Identifica el significado]].",
      "question": "[[Maria's routine is|La rutina de Maria es]] (____) [[weekly.|semanal.]]",
      "options": ["[[Every week|Cada semana]]", "[[Some weeks|Algunas semanas]]", "[[One week|Una semana]]"],
      "correctAnswer": 0,
      "explanation": "[[A weekly routine happens every week|Una rutina semanal sucede cada semana]]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e55",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "hard",
    "transcript": "[[Maria never works on the weekend|Maria nunca trabaja el fin de semana]].",
    "content": {
      "title": "[[Sentence Building|Construcción de Frases]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[Maria never works on the weekend|Maria nunca trabaja el fin de semana]].",
      "words": ["[[weekend|fin de semana]].", "[[the|el]]", "[[on|el]]", "[[works|trabaja]]", "[[never|nunca]]", "[[Maria|Maria]]"],
      "explanation": "[[Structure: Subject + adverb + verb + on + time|Estructura: Sujeto + adverbio + verbo + on + tiempo]]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "hard",
    "transcript": "[[What is the synonym of 'workdays'?|¿Cuál es el sinónimo de 'workdays'?]]",
    "content": {
      "title": "[[Synonyms|Sinónimos]]",
      "instructions": "[[Identify the word from the text|Identifica la palabra del texto]].",
      "question": "[[Synonym of workdays:|Sinónimo de 'workdays':]] (____).",
      "options": ["[[Weekdays|Weekdays]]", "[[Weekends|Weekends]]", "[[Holidays|Holidays]]"],
      "correctAnswer": 0,
      "explanation": "[[The text uses 'weekdays' for Monday-Friday|El texto usa 'weekdays' para lunes-viernes]]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e57",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "hard",
    "transcript": "[[On Sunday, she sometimes goes to the park|El domingo, a veces va al parque]].",
    "content": {
      "title": "[[Frequency Adverbs|Adverbios de Frecuencia]]",
      "instructions": "[[Identify the adverb in the sentence|Identifica el adverbio en la frase]].",
      "questions": [
        {
          "question": "[[On Sunday, she (____) goes to the park.|El domingo, ella (____) va al parque.]]",
          "correctAnswer": "sometimes",
          "explanation": "[[Sometimes is the frequency adverb used in the text|Sometimes es el adverbio de frecuencia usado en el texto]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e58",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "hard",
    "transcript": "[[She usually visits her family on Saturday|Ella usualmente visita a su familia el sábado]].",
    "content": {
      "title": "[[Sentence Building|Construcción de Frases]]",
      "instructions": "[[Order the words|Ordena las palabras]].",
      "correctSentence": "[[She usually visits her family on Saturday|Ella usualmente visita a su familia el sábado]].",
      "words": ["[[Saturday|sábado]].", "[[on|el]]", "[[family|familia]]", "[[her|su]]", "[[visits|visita]]", "[[usually|usualmente]]", "[[She|Ella]]"],
      "explanation": "[[Structure: Subject + adverb + verb + object + on + Day|Estructura: Sujeto + adverbio + verbo + objeto + on + Día]]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[Why is Maria happy today? Because tomorrow is the weekend|¿Por qué está Maria feliz hoy? Porque mañana es el fin de semana]].",
    "content": {
      "title": "[[Comprehension: Feelings|Comprensión: Sentimientos]]",
      "instructions": "[[Answer based on the text|Responde según el texto]].",
      "question": "[[Maria is happy because|Maria está feliz porque]] (____).",
      "options": ["[[she is at work|está en el trabajo]]", "[[tomorrow is the weekend|mañana es el fin de semana]]", "[[it is Monday|es lunes]]"],
      "correctAnswer": 1,
      "explanation": "[[The last sentence explains her happiness|La última frase explica su felicidad]]."
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u12-e60",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Comprehension",
    "difficulty": "hard",
    "transcript": "[[On Tuesday and Thursday, she goes to the gym|El martes y el jueves, va al gimnasio]].",
    "content": {
      "title": "[[Comprehension: Days|Comprensión: Días]]",
      "instructions": "[[Complete the missing day|Completa el día que falta]].",
      "questions": [
        {
          "question": "[[Maria goes to the gym on Tuesday and (____).|Maria va al gimnasio el martes y (____).]]",
          "correctAnswer": "Thursday",
          "explanation": "[[Thursday is the second day mentioned for the gym|Thursday es el segundo día mencionado para el gimnasio]]."
        }
      ]
    },
    "topicName": "Reading"
  },

  // ==========================================
  // LESSON 5: LISTENING & PRONUNCIATION (61-75)
  // ==========================================
  {
    "id": "a1-u12-e61",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[Today is Monday, October fifth|Hoy es lunes, cinco de octubre]].",
    "audioUrl": "audio/a1/unit-12/e61.mp3",
    "content": {
      "title": "[[Listening: Current Day|Escucha: Día Actual]]",
      "instructions": "[[Listen and identify the day|Escucha e identifica el día]].",
      "questions": [{
        "id": "q61",
        "type": "multiple-choice",
        "question": "[[What day is it today?|¿Qué día es hoy?]]",
        "options": ["[[Monday|lunes]]", "[[Tuesday|martes]]", "[[Sunday|domingo]]"],
        "correctAnswer": "[[Monday|lunes]]",
        "explanation": "[[The speaker says 'Today is Monday'|El hablante dice 'Today is Monday']]."
      }]
    }
  },
  {
    "id": "a1-u12-e62",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[The store is closed on Sundays|La tienda está cerrada los domingos]].",
    "audioUrl": "audio/a1/unit-12/e62.mp3",
    "content": {
      "title": "[[Listening: Closing Day|Escucha: Día de Cierre]]",
      "instructions": "[[Listen and identify the day|Escucha e identifica el día]].",
      "questions": [{
        "id": "q62",
        "type": "multiple-choice",
        "question": "[[When is the store closed?|¿Cuándo está cerrada la tienda?]]",
        "options": ["[[on Saturdays|los sábados]]", "[[on Sundays|los domingos]]", "[[on Mondays|los lunes]]"],
        "correctAnswer": "[[on Sundays|los domingos]]",
        "explanation": "[[The speaker says 'on Sundays'|El hablante dice 'on Sundays']]."
      }]
    }
  },
  {
    "id": "a1-u12-e63",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[We have a meeting on Thursday afternoon|Tenemos una reunión el jueves por la tarde]].",
    "audioUrl": "audio/a1/unit-12/e63.mp3",
    "content": {
      "title": "[[Listening: Meeting|Escucha: Reunión]]",
      "instructions": "[[Listen and identify the day|Escucha e identifica el día]].",
      "questions": [{
        "id": "q63",
        "type": "multiple-choice",
        "question": "[[When is the meeting?|¿Cuándo es la reunión?]]",
        "options": ["[[on Tuesday|el martes]]", "[[on Thursday|el jueves]]", "[[on Friday|el viernes]]"],
        "correctAnswer": "[[on Thursday|el jueves]]",
        "explanation": "[[The speaker says 'on Thursday'|El hablante dice 'on Thursday']]."
      }]
    }
  },
  {
    "id": "a1-u12-e64",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[I go to the gym on Mondays and Wednesdays|Voy al gimnasio los lunes y miércoles]].",
    "audioUrl": "audio/a1/unit-12/e64.mp3",
    "content": {
      "title": "[[Listening: Gym Days|Escucha: Días de Gimnasio]]",
      "instructions": "[[Listen and identify the days|Escucha e identifica los días]].",
      "questions": [{
        "id": "q64",
        "type": "multiple-choice",
        "question": "[[Which days does the person go to the gym?|¿Qué días va la persona al gimnasio?]]",
        "options": ["[[Mondays and Wednesdays|lunes y miércoles]]", "[[Tuesdays and Thursdays|martes y jueves]]", "[[Saturdays and Sundays|sábados y domingos]]"],
        "correctAnswer": "[[Mondays and Wednesdays|lunes y miércoles]]",
        "explanation": "[[The speaker says 'Mondays and Wednesdays'|El hablante dice 'Mondays and Wednesdays']]."
      }]
    }
  },
  {
    "id": "a1-u12-e65",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[I always study English on Friday evening|Siempre estudio inglés el viernes por la tarde]].",
    "audioUrl": "audio/a1/unit-12/e65.mp3",
    "content": {
      "title": "[[Listening: Study|Escucha: Estudio]]",
      "instructions": "[[Listen and identify the frequency and day|Escucha e identifica la frecuencia y el día]].",
      "questions": [{
        "id": "q65",
        "type": "multiple-choice",
        "question": "[[How often and when does the person study?|¿Qué tan seguido y cuándo estudia la persona?]]",
        "options": ["[[Always on Friday|siempre los viernes]]", "[[Sometimes on Friday|a veces los viernes]]", "[[Never on Friday|nunca los viernes]]"],
        "correctAnswer": "[[Always on Friday|siempre los viernes]]",
        "explanation": "[[The speaker says 'I always study... on Friday'|El hablante dice 'I always study... on Friday']]."
      }]
    }
  },
  {
    "id": "a1-u12-e66",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[The party is on Saturday night|La fiesta es el sábado por la noche]].",
    "audioUrl": "audio/a1/unit-12/e66.mp3",
    "content": {
      "title": "[[Listening: Event|Escucha: Evento]]",
      "instructions": "[[Listen and identify the day|Escucha e identifica el día]].",
      "questions": [{
        "id": "q66",
        "type": "multiple-choice",
        "question": "[[When is the party?|¿Cuándo es la fiesta?]]",
        "options": ["[[on Friday|el viernes]]", "[[on Saturday|el sábado]]", "[[on Sunday|el domingo]]"],
        "correctAnswer": "[[on Saturday|el sábado]]",
        "explanation": "[[The speaker says 'on Saturday night'|El hablante dice 'on Saturday night']]."
      }]
    }
  },
  {
    "id": "a1-u12-e67",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[See you on Tuesday afternoon!|¡Nos vemos el martes por la tarde!]]",
    "audioUrl": "audio/a1/unit-12/e67.mp3",
    "content": {
      "title": "[[Listening: Farewell|Escucha: Despedida]]",
      "instructions": "[[Listen and identify the day|Escucha e identifica el día]].",
      "questions": [{
        "id": "q67",
        "type": "multiple-choice",
        "question": "[[When will they meet?|¿Cuándo se verán?]]",
        "options": ["[[on Tuesday|el martes]]", "[[on Thursday|el jueves]]", "[[today|hoy]]"],
        "correctAnswer": "[[on Tuesday|el martes]]",
        "explanation": "[[The speaker says 'See you on Tuesday'|El hablante dice 'See you on Tuesday']]."
      }]
    }
  },
  {
    "id": "a1-u12-e68",
    "type": "listening-comprehension",
    "level": "A1",
    "topicName": "Listening",
    "transcript": "[[My favorite day is Wednesday|Mi día favorito es el miércoles]].",
    "audioUrl": "audio/a1/unit-12/e68.mp3",
    "content": {
      "title": "[[Listening: Favorite Day|Escucha: Día Favorito]]",
      "instructions": "[[Listen and identify the day|Escucha e identifica el día]].",
      "questions": [{
        "id": "q68",
        "type": "multiple-choice",
        "question": "[[What is the person's favorite day?|¿Cuál es el día favorito de la persona?]]",
        "options": ["[[Monday|lunes]]", "[[Wednesday|miércoles]]", "[[Friday|viernes]]"],
        "correctAnswer": "[[Wednesday|miércoles]]",
        "explanation": "[[The speaker says 'My favorite day is Wednesday'|El hablante dice 'My favorite day is Wednesday']]."
      }]
    }
  },
  {
    "id": "a1-u12-e69",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[Monday, Tuesday, Wednesday|Lunes, martes, miércoles]].",
    "audioUrl": "audio/a1/unit-12/e69.mp3",
    "content": {
      "title": "[[Pronunciation: Weekdays (1)|Pronunciación: Días Laborales (1)]]",
      "instructions": "[[Listen and repeat the first three days|Escucha y repite los tres primeros días]].",
      "expectedResponse": "Monday, Tuesday, Wednesday",
      "evaluationCriteria": [
        "[[Clear 'n' in Monday|'n' clara en Monday]]",
        "[[Correct 'z' sound in Tuesday|Sonido 'z' correcto en Tuesday]]",
        "[[Silent 'd' in Wednesday|'d' muda en Wednesday]]"
      ]
    }
  },
  {
    "id": "a1-u12-e70",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[Thursday, Friday|Jueves, viernes]].",
    "audioUrl": "audio/a1/unit-12/e70.mp3",
    "content": {
      "title": "[[Pronunciation: Weekdays (2)|Pronunciación: Días Laborales (2)]]",
      "instructions": "[[Listen and repeat focused on the /θ/ sound|Escucha y repite enfocado en el sonido /θ/]].",
      "expectedResponse": "Thursday, Friday",
      "evaluationCriteria": [
        "[[Correct /θ/ sound in Thursday|Sonido /θ/ correcto en Thursday]]",
        "[[Clear 'r' in Thursday|'r' clara en Thursday]]",
        "[[Clear 'f' in Friday|'f' clara en Friday]]"
      ]
    }
  },
  {
    "id": "a1-u12-e71",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[Saturday, Sunday|Sábado, domingo]].",
    "audioUrl": "audio/a1/unit-12/e71.mp3",
    "content": {
      "title": "[[Pronunciation: Weekend|Pronunciación: Fin de Semana]]",
      "instructions": "[[Listen and repeat focusing on word stress|Escucha y repite enfocándote en la acentuación]].",
      "expectedResponse": "Saturday, Sunday",
      "evaluationCriteria": [
        "[[Stress on the first syllable of Saturday|Acento en la primera sílaba de Saturday]]",
        "[[Stress on the first syllable of Sunday|Acento en la primera sílaba de Sunday]]",
        "[[Clear 'ay' sound at the end|Sonido 'ay' claro al final]]"
      ]
    }
  },
  {
    "id": "a1-u12-e72",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[On Monday morning|El lunes por la mañana]].",
    "audioUrl": "audio/a1/unit-12/e72.mp3",
    "content": {
      "title": "[[Pronunciation: Time Phrase|Pronunciación: Frase de Tiempo]]",
      "instructions": "[[Listen and repeat focusing on the preposition|Escucha y repite enfocándote en la preposición]].",
      "expectedResponse": "On Monday morning.",
      "evaluationCriteria": [
        "[[Clear 'on' pronunciation|Pronunciación clara de 'on']]",
        "[[Natural linking between words|Enlace natural entre palabras]]",
        "[[Correct stress on 'Monday'|Acentuación correcta en 'Monday']]"
      ]
    }
  },
  {
    "id": "a1-u12-e73",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[Every single day|Todos y cada uno de los días]].",
    "audioUrl": "audio/a1/unit-12/e73.mp3",
    "content": {
      "title": "[[Pronunciation: Emphasis|Pronunciación: Énfasis]]",
      "instructions": "[[Listen and repeat the emphatic phrase|Escucha y repite la frase enfática]].",
      "expectedResponse": "Every single day.",
      "evaluationCriteria": [
        "[[Correct 'v' sound in Every|Sonido 'v' correcto en Every]]",
        "[[Clear 'ng' in single|'ng' clara en single]]",
        "[[Rhythmic flow|Fluidez rítmica]]"
      ]
    }
  },
  {
    "id": "a1-u12-e74",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[Always, usually, sometimes, never|Siempre, usualmente, a veces, nunca]].",
    "audioUrl": "audio/a1/unit-12/e74.mp3",
    "content": {
      "title": "[[Pronunciation: Adverbs|Pronunciación: Adverbios]]",
      "instructions": "[[Listen and repeat the frequency adverbs|Escucha y repite los adverbios de frecuencia]].",
      "expectedResponse": "Always, usually, sometimes, never.",
      "evaluationCriteria": [
        "[[Stress on the first syllable of Always|Acento en la primera sílaba de Always]]",
        "[[Clear /ʒ/ sound in usually|Sonido /ʒ/ claro en usually]]",
        "[[Stress on the first syllable of never|Acento en la primera sílaba de never]]"
      ]
    }
  },
  {
    "id": "a1-u12-e75",
    "type": "pronunciation",
    "level": "A1",
    "topicName": "Pronunciation",
    "transcript": "[[See you on Friday|Nos vemos el viernes]].",
    "audioUrl": "audio/a1/unit-12/e75.mp3",
    "content": {
      "title": "[[Pronunciation: Farewell|Pronunciación: Despedida]]",
      "instructions": "[[Listen and repeat the farewell|Escucha y repite la despedida]].",
      "expectedResponse": "See you on Friday.",
      "evaluationCriteria": [
        "[[Natural linking in 'See you'|Enlace natural en 'See you']]",
        "[[Clear 'on' before Friday|'on' claro antes de Friday]]",
        "[[Rising intonation for friendly farewell|Entonación ascendente para una despedida amistosa]]"
      ]
    }
  }
];
