import { Exercise } from '@/lib/exercise-generator';

export const UNIT_5_EXERCISES: Exercise[] = [
  {
    "id": "a1-u5-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "Eat. Drink. Sleep. Work. Study. Play. Read. Write.",
    "content": {
      "title": "Verbos Cotidianos",
      "instructions": "Aprende verbos de acciones diarias.",
      "items": [
        { "front": "[[Eat|Comer]]", "back": "Comer" },
        { "front": "[[Drink|Beber]]", "back": "Beber" },
        { "front": "[[Sleep|Dormir]]", "back": "Dormir" },
        { "front": "[[Work|Trabajar]]", "back": "Trabajar" },
        { "front": "[[Study|Estudiar]]", "back": "Estudiar" },
        { "front": "[[Play|Jugar]]", "back": "Jugar" },
        { "front": "[[Read|Leer]]", "back": "Leer" },
        { "front": "[[Write|Escribir]]", "back": "Escribir" }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "I work every day.",
    "content": {
      "title": "Yo trabajo",
      "instructions": "Completa la oración.",
      "questions": [
        {
          "question": "[[I|Yo]] (_____) [[every|cada]] [[day|día]].",
          "options": ["[[work|trabajo]]", "[[works|trabaja]]"],
          "correctAnswer": 0,
          "explanation": "Con 'I' usamos el verbo en su forma base."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e2.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e3",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "We eat pizza.",
    "content": {
      "title": "Comemos pizza",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[We|Nosotros]] [[eat|comemos]] [[pizza|pizza]].",
      "words": ["[[pizza|pizza]].", "[[eat|comemos]]", "[[We|Nosotros]]"],
      "explanation": "Sujeto + Verbo + Complemento."
    },
    "audioUrl": "audio/a1/unit-5/e3.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e4",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "They drink water.",
    "content": {
      "title": "Beber agua",
      "instructions": "Elige el verbo correcto.",
      "questions": [
        {
          "question": "[[They|Ellos]] (_____) [[water|agua]].",
          "options": ["[[drink|beben]]", "[[eat|comen]]", "[[sleep|duermen]]"],
          "correctAnswer": 0,
          "explanation": "Drink es el verbo para líquidos."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e4.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e5",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "I sleep at night.",
    "content": {
      "title": "Duermo de noche",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[sleep|duermo]] [[at|por la]] [[night|noche]].",
      "words": ["[[night|noche]].", "[[at|por la]]", "[[sleep|duermo]]", "[[I|Yo]]"],
      "explanation": "Acción habitual."
    },
    "audioUrl": "audio/a1/unit-5/e5.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "You study English.",
    "content": {
      "title": "Estudiar Inglés",
      "instructions": "Elige el verbo para 'estudiar'.",
      "questions": [
        {
          "question": "[[You|Tú]] (_____) [[English|inglés]].",
          "options": ["[[study|estudias]]", "[[play|juegas]]", "[[read|lees]]"],
          "correctAnswer": 0,
          "explanation": "Study significa estudiar."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e6.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e7",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "They play soccer.",
    "content": {
      "title": "Juegan al fútbol",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[They|Ellos]] [[play|juegan]] [[soccer|fútbol]].",
      "words": ["[[soccer|fútbol]].", "[[play|juegan]]", "[[They|Ellos]]"],
      "explanation": "Play se usa para deportes y juegos."
    },
    "audioUrl": "audio/a1/unit-5/e7.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e8",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "We read books.",
    "content": {
      "title": "Leer libros",
      "instructions": "Elige el verbo correcto.",
      "questions": [
        {
          "question": "[[We|Nosotros]] (_____) [[books|libros]].",
          "options": ["[[read|leemos]]", "[[write|escribimos]]", "[[drink|bebemos]]"],
          "correctAnswer": 0,
          "explanation": "Read significa leer."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e8.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e9",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "I write a letter.",
    "content": {
      "title": "Escribo una carta",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[write|escribo]] [[a|una]] [[letter|carta]].",
      "words": ["[[letter|carta]].", "[[a|una]]", "[[write|escribo]]", "[[I|Yo]]"],
      "explanation": "Write significa escribir."
    },
    "audioUrl": "audio/a1/unit-5/e9.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "Do you drink coffee?",
    "content": {
      "title": "Beber café",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "[[Do|¿Aux]] [[you|tú]] (_____) [[coffee|café]]?",
          "options": ["[[drink|bebes]]", "[[eat|comes]]"],
          "correctAnswer": 0,
          "explanation": "Coffee es una bebida, usamos 'drink'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e10.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e11",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "You study every morning.",
    "content": {
      "title": "Estudias cada mañana",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[You|Tú]] [[study|estudias]] [[every|cada]] [[morning|mañana]].",
      "words": ["[[morning|mañana]].", "[[every|cada]]", "[[study|estudias]]", "[[You|Tú]]"],
      "explanation": "Hablando de rutinas."
    },
    "audioUrl": "audio/a1/unit-5/e11.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "I play video games.",
    "content": {
      "title": "Videojuegos",
      "instructions": "Elige el verbo correcto.",
      "questions": [
        {
          "question": "[[I|Yo]] (_____) [[video|video]] [[games|juegos]].",
          "options": ["[[play|juego]]", "[[work|trabajo]]", "[[read|leo]]"],
          "correctAnswer": 0,
          "explanation": "Play se usa para juegos."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e12.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e13",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "We work in an office.",
    "content": {
      "title": "Trabajamos en una oficina",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[We|Nosotros]] [[work|trabajamos]] [[in|en]] [[an|una]] [[office|oficina]].",
      "words": ["[[office|oficina]].", "[[an|una]]", "[[in|en]]", "[[work|trabajamos]]", "[[We|Nosotros]]"],
      "explanation": "Lugar de trabajo."
    },
    "audioUrl": "audio/a1/unit-5/e13.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "They eat breakfast at eight.",
    "content": {
      "title": "Desayuno",
      "instructions": "Elige el verbo para 'comer'.",
      "questions": [
        {
          "question": "[[They|Ellos]] (_____) [[breakfast|desayuno]] [[at|a las]] [[eight|ocho]].",
          "options": ["[[eat|comen]]", "[[sleep|duermen]]", "[[play|juegan]]"],
          "correctAnswer": 0,
          "explanation": "Eat breakfast significa desayunar."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e14.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e15",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "I drink tea.",
    "content": {
      "title": "Bebo té",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[drink|bebo]] [[tea|té]].",
      "words": ["[[tea|té]].", "[[drink|bebo]]", "[[I|Yo]]"],
      "explanation": "Acción simple."
    },
    "audioUrl": "audio/a1/unit-5/e15.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "You read the newspaper.",
    "content": {
      "title": "Periódico",
      "instructions": "¿Qué haces con el periódico?",
      "questions": [
        {
          "question": "[[You|Tú]] (_____) [[the|el]] [[newspaper|periódico]].",
          "options": ["[[read|lees]]", "[[drink|bebes]]", "[[sleep|duermes]]"],
          "correctAnswer": 0,
          "explanation": "Read es leer."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e16.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e17",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "We study together.",
    "content": {
      "title": "Estudiamos juntos",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[We|Nosotros]] [[study|estudiamos]] [[together|juntos]].",
      "words": ["[[together|juntos]].", "[[study|estudiamos]]", "[[We|Nosotros]]"],
      "explanation": "Together significa juntos."
    },
    "audioUrl": "audio/a1/unit-5/e17.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "I work from home.",
    "content": {
      "title": "Trabajo desde casa",
      "instructions": "Completa con el verbo.",
      "questions": [
        {
          "question": "[[I|Yo]] (_____) [[from|desde]] [[home|casa]].",
          "options": ["[[work|trabajo]]", "[[play|juego]]"],
          "correctAnswer": 0,
          "explanation": "Work from home es trabajar desde casa."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e18.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e19",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "They sleep eight hours.",
    "content": {
      "title": "Duermen ocho horas",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[They|Ellos]] [[sleep|duermen]] [[eight|ocho]] [[hours|horas]].",
      "words": ["[[hours|horas]].", "[[eight|ocho]]", "[[sleep|duermen]]", "[[They|Ellos]]"],
      "explanation": "Sleep es dormir."
    },
    "audioUrl": "audio/a1/unit-5/e19.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "Do we play basketball?",
    "content": {
      "title": "Baloncesto",
      "instructions": "Elige el verbo para deportes.",
      "questions": [
        {
          "question": "[[Do|¿Aux]] [[we|nosotros]] (_____) [[basketball|baloncesto]]?",
          "options": ["[[play|jugamos]]", "[[read|leemos]]", "[[drink|bebemos]]"],
          "correctAnswer": 0,
          "explanation": "Play se usa para deportes."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e20.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e21",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "You eat a sandwich.",
    "content": {
      "title": "Sujeto y Verbo",
      "instructions": "Elige el verbo correcto para 'You'.",
      "questions": [
        {
          "question": "[[You|Tú]] (_____) [[a|un]] [[sandwich|sándwich]].",
          "options": ["[[eat|comes]]", "[[eats|come]]"],
          "correctAnswer": 0,
          "explanation": "Con 'You' no añadimos 's' al verbo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e21.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e22",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "I write in my notebook.",
    "content": {
      "title": "Escribir",
      "instructions": "Elige el verbo.",
      "questions": [
        {
          "question": "[[I|Yo]] (_____) [[in|en]] [[my|mi]] [[notebook|libreta]].",
          "options": ["[[write|escribo]]", "[[drink|bebo]]", "[[sleep|duermo]]"],
          "correctAnswer": 0,
          "explanation": "Write es escribir."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e22.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e23",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "We drink orange juice.",
    "content": {
      "title": "Zumo de naranja",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[We|Nosotros]] [[drink|bebemos]] [[orange|naranja]] [[juice|zumo]].",
      "words": ["[[juice|zumo]].", "[[orange|naranja]]", "[[drink|bebemos]]", "[[We|Nosotros]]"],
      "explanation": "Drink es beber."
    },
    "audioUrl": "audio/a1/unit-5/e23.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "Do they work on Saturdays?",
    "content": {
      "title": "Sábados",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "[[Do|¿Aux]] [[they|ellos]] (_____) [[on|los]] [[Saturdays|sábados]]?",
          "options": ["[[work|trabajan]]", "[[play|juegan]]"],
          "correctAnswer": 0,
          "explanation": "Pregunta sobre trabajo habitual."
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
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "I study every day.",
    "content": {
      "title": "Estudio a diario",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[study|estudio]] [[every|cada]] [[day|día]].",
      "words": ["[[day|día]].", "[[every|cada]]", "[[study|estudio]]", "[[I|Yo]]"],
      "explanation": "Estructura de rutina."
    },
    "audioUrl": "audio/a1/unit-5/e25.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "We play music.",
    "content": {
      "title": "Música",
      "instructions": "¿Qué haces con la música?",
      "questions": [
        {
          "question": "[[We|Nosotros]] (_____) [[music|música]].",
          "options": ["[[play|tocamos/reproducimos]]", "[[eat|comemos]]", "[[work|trabajamos]]"],
          "correctAnswer": 0,
          "explanation": "Play se usa para instrumentos o reproducir música."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e26.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e27",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "They read a magazine.",
    "content": {
      "title": "Revista",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[They|Ellos]] [[read|leen]] [[a|una]] [[magazine|revista]].",
      "words": ["[[magazine|revista]].", "[[a|una]]", "[[read|leen]]", "[[They|Ellos]]"],
      "explanation": "Read es leer."
    },
    "audioUrl": "audio/a1/unit-5/e27.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e28",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "I drink milk.",
    "content": {
      "title": "Leche",
      "instructions": "Elige el verbo.",
      "questions": [
        {
          "question": "[[I|Yo]] (_____) [[milk|leche]].",
          "options": ["[[drink|bebo]]", "[[eat|como]]", "[[play|juego]]"],
          "correctAnswer": 0,
          "explanation": "Milk es un líquido."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e28.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e29",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "easy",
    "transcript": "You work very hard.",
    "content": {
      "title": "Trabajas mucho",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[You|Tú]] [[work|trabajas]] [[very|muy]] [[hard|duro]].",
      "words": ["[[hard|duro]].", "[[very|muy]]", "[[work|trabajas]]", "[[You|Tú]]"],
      "explanation": "Hard significa duro o mucho en este contexto."
    },
    "audioUrl": "audio/a1/unit-5/e29.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e30",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "easy",
    "transcript": "We sleep in a big bed.",
    "content": {
      "title": "Cama grande",
      "instructions": "¿Qué haces en la cama?",
      "questions": [
        {
          "question": "[[We|Nosotros]] (_____) [[in|en]] [[a|una]] [[big|grande]] [[bed|cama]].",
          "options": ["[[sleep|dormimos]]", "[[work|trabajamos]]", "[[eat|comemos]]"],
          "correctAnswer": 0,
          "explanation": "Sleep es la acción para la cama."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e30.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Simple Present: Negatives",
    "difficulty": "medium",
    "transcript": "I do not eat meat. I don't eat meat.",
    "content": {
      "title": "Negación",
      "instructions": "Elige la forma negativa.",
      "questions": [
        {
          "question": "[[I|Yo]] (_____) [[eat|como]] [[meat|carne]].",
          "options": ["[[don't|no]]", "[[not|no]]", "[[no|no]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'don't' para negar verbos en presente simple."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e31.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e32",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: Negatives",
    "difficulty": "medium",
    "transcript": "We do not drink soda.",
    "content": {
      "title": "No bebemos refrescos",
      "instructions": "Ordena la oración negativa.",
      "correctSentence": "[[We|Nosotros]] [[do|aux]] [[not|no]] [[drink|bebemos]] [[soda|refresco]].",
      "words": ["[[soda|refresco]].", "[[drink|bebemos]]", "[[not|no]]", "[[do|aux]]", "[[We|Nosotros]]"],
      "explanation": "Estructura: Sujeto + do not + verbo."
    },
    "audioUrl": "audio/a1/unit-5/e32.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Simple Present: Negatives",
    "difficulty": "medium",
    "transcript": "They do not play tennis.",
    "content": {
      "title": "Ellos no juegan",
      "instructions": "Completa la negación.",
      "questions": [
        {
          "question": "[[They|Ellos]] [[don't|no]] (_____) [[tennis|tenis]].",
          "options": ["[[play|juegan]]", "[[plays|juega]]"],
          "correctAnswer": 0,
          "explanation": "Después de 'don't', el verbo va en forma base."
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
    "topic": "Simple Present: Negatives",
    "difficulty": "medium",
    "transcript": "You do not work on Sundays.",
    "content": {
      "title": "No trabajas los domingos",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[You|Tú]] [[do|aux]] [[not|no]] [[work|trabajas]] [[on|los]] [[Sundays|domingos]].",
      "words": ["[[Sundays|domingos]].", "[[on|los]]", "[[work|trabajas]]", "[[not|no]]", "[[do|aux]]", "[[You|Tú]]"],
      "explanation": "Negando una rutina."
    },
    "audioUrl": "audio/a1/unit-5/e34.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Simple Present: Questions",
    "difficulty": "medium",
    "transcript": "Do you study here?",
    "content": {
      "title": "Preguntas",
      "instructions": "Elige el auxiliar correcto.",
      "questions": [
        {
          "question": "(_____) [[you|tú]] [[study|estudias]] [[here|aquí]]?",
          "options": ["[[Do|¿Aux]]", "[[Does|¿Aux]]", "[[Are|¿Eres/Estás]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'Do' para preguntar con 'you'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e35.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e36",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: Questions",
    "difficulty": "medium",
    "transcript": "Do we have class today?",
    "content": {
      "title": "¿Tenemos clase hoy?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Do|¿Aux]] [[we|nosotros]] [[have|tenemos]] [[class|clase]] [[today|hoy]]?",
      "words": ["[[today|hoy]]?", "[[class|clase]]", "[[have|tenemos]]", "[[we|nosotros]]", "[[Do|¿Aux]]"],
      "explanation": "Estructura: Do + sujeto + verbo + ?"
    },
    "audioUrl": "audio/a1/unit-5/e36.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Simple Present: Questions",
    "difficulty": "medium",
    "transcript": "Do they eat lunch at school?",
    "content": {
      "title": "Almuerzo",
      "instructions": "Completa la pregunta.",
      "questions": [
        {
          "question": "[[Do|¿Aux]] [[they|ellos]] (_____) [[lunch|almuerzo]] [[at|en]] [[school|la escuela]]?",
          "options": ["[[eat|comen]]", "[[drink|beben]]", "[[sleep|duermen]]"],
          "correctAnswer": 0,
          "explanation": "Eat lunch significa almorzar."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e37.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e38",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: Questions",
    "difficulty": "medium",
    "transcript": "What do you drink?",
    "content": {
      "title": "¿Qué bebes?",
      "instructions": "Ordena la pregunta con 'What'.",
      "correctSentence": "[[What|Qué]] [[do|aux]] [[you|tú]] [[drink|bebes]]?",
      "words": ["[[drink|bebes]]?", "[[you|tú]]", "[[do|aux]]", "[[What|Qué]]"],
      "explanation": "Pregunta de información."
    },
    "audioUrl": "audio/a1/unit-5/e38.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Simple Present: Questions",
    "difficulty": "medium",
    "transcript": "Where do they work?",
    "content": {
      "title": "¿Dónde trabajan?",
      "instructions": "Elige la palabra de pregunta.",
      "questions": [
        {
          "question": "(_____) [[do|aux]] [[they|ellos]] [[work|trabajan]]?",
          "options": ["[[Where|Dónde]]", "[[What|Qué]]", "[[How|Cómo]]"],
          "correctAnswer": 0,
          "explanation": "Where pregunta por un lugar."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e39.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e40",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "medium",
    "transcript": "I read books every night.",
    "content": {
      "title": "Lectura nocturna",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[read|leo]] [[books|libros]] [[every|cada]] [[night|noche]].",
      "words": ["[[night|noche]].", "[[every|cada]]", "[[books|libros]]", "[[read|leo]]", "[[I|Yo]]"],
      "explanation": "Combinando verbo y frecuencia."
    },
    "audioUrl": "audio/a1/unit-5/e40.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "medium",
    "transcript": "We write emails at work.",
    "content": {
      "title": "Correos electrónicos",
      "instructions": "¿Qué haces con los emails?",
      "questions": [
        {
          "question": "[[We|Nosotros]] (_____) [[emails|correos]] [[at|en el]] [[work|trabajo]].",
          "options": ["[[write|escribimos]]", "[[read|leemos]]", "[[both are correct|ambos son correctos]]"],
          "correctAnswer": 2,
          "explanation": "Podemos escribir y leer correos electrónicos."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e41.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e42",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "medium",
    "transcript": "They study in the library.",
    "content": {
      "title": "En la biblioteca",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[They|Ellos]] [[study|estudian]] [[in|en]] [[the|la]] [[library|biblioteca]].",
      "words": ["[[library|biblioteca]].", "[[the|la]]", "[[in|en]]", "[[study|estudian]]", "[[They|Ellos]]"],
      "explanation": "Lugar de estudio."
    },
    "audioUrl": "audio/a1/unit-5/e42.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "medium",
    "transcript": "I play the guitar.",
    "content": {
      "title": "Instrumentos",
      "instructions": "Elige el verbo correcto.",
      "questions": [
        {
          "question": "[[I|Yo]] (_____) [[the|la]] [[guitar|guitarra]].",
          "options": ["[[play|toco]]", "[[work|trabajo]]", "[[read|leo]]"],
          "correctAnswer": 0,
          "explanation": "Play se usa para instrumentos musicales."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e43.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e44",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: Negatives",
    "difficulty": "medium",
    "transcript": "You do not play video games.",
    "content": {
      "title": "No juegas",
      "instructions": "Ordena la negación.",
      "correctSentence": "[[You|Tú]] [[do|aux]] [[not|no]] [[play|juegas]] [[video|video]] [[games|juegos]].",
      "words": ["[[games|juegos]].", "[[video|video]]", "[[play|juegas]]", "[[not|no]]", "[[do|aux]]", "[[You|Tú]]"],
      "explanation": "Negando un pasatiempo."
    },
    "audioUrl": "audio/a1/unit-5/e44.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e45",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "medium",
    "transcript": "We drink water after exercise.",
    "content": {
      "title": "Después de ejercicio",
      "instructions": "Elige el verbo.",
      "questions": [
        {
          "question": "[[We|Nosotros]] (_____) [[water|agua]] [[after|después de]] [[exercise|ejercicio]].",
          "options": ["[[drink|bebemos]]", "[[eat|comemos]]", "[[sleep|dormimos]]"],
          "correctAnswer": 0,
          "explanation": "Drink es beber."
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
    "topic": "Simple Present: Questions",
    "difficulty": "medium",
    "transcript": "Do you eat fruit?",
    "content": {
      "title": "¿Comes fruta?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Do|¿Aux]] [[you|tú]] [[eat|comes]] [[fruit|fruta]]?",
      "words": ["[[fruit|fruta]]?", "[[eat|comes]]", "[[you|tú]]", "[[Do|¿Aux]]"],
      "explanation": "Pregunta simple sobre dieta."
    },
    "audioUrl": "audio/a1/unit-5/e46.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Simple Present: Negatives",
    "difficulty": "medium",
    "transcript": "I don't study at night.",
    "content": {
      "title": "Estudio nocturno",
      "instructions": "Completa la oración negativa.",
      "questions": [
        {
          "question": "[[I|Yo]] [[don't|no]] (_____) [[at|por la]] [[night|noche]].",
          "options": ["[[study|estudio]]", "[[studies|estudia]]"],
          "correctAnswer": 0,
          "explanation": "Con 'don't' usamos la forma base 'study'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e47.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e48",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Everyday Verbs",
    "difficulty": "medium",
    "transcript": "They work in a restaurant.",
    "content": {
      "title": "Restaurante",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[They|Ellos]] [[work|trabajan]] [[in|en]] [[a|un]] [[restaurant|restaurante]].",
      "words": ["[[restaurant|restaurante]].", "[[a|un]]", "[[in|en]]", "[[work|trabajan]]", "[[They|Ellos]]"],
      "explanation": "Lugar de trabajo."
    },
    "audioUrl": "audio/a1/unit-5/e48.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u5-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Simple Present: Questions",
    "difficulty": "medium",
    "transcript": "Do you work here?",
    "content": {
      "title": "¿Trabajas aquí?",
      "instructions": "Elige la respuesta corta correcta.",
      "questions": [
        {
          "question": "[[Do|¿Aux]] [[you|tú]] [[work|trabajas]] [[here|aquí]]?",
          "options": ["[[Yes, I do|Sí]]", "[[Yes, I work|Sí (incorrecto)]]", "[[Yes, I am|Sí (incorrecto)]]"],
          "correctAnswer": 0,
          "explanation": "Usamos el auxiliar 'do' en respuestas cortas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e49.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e50",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Simple Present: I/You/We/They",
    "difficulty": "medium",
    "transcript": "I read the newspaper in the morning.",
    "content": {
      "title": "Rutina de lectura",
      "instructions": "Ordena la oración larga.",
      "correctSentence": "[[I|Yo]] [[read|leo]] [[the|el]] [[newspaper|periódico]] [[in|en]] [[the|la]] [[morning|mañana]].",
      "words": ["[[morning|mañana]].", "[[the|la]]", "[[in|en]]", "[[newspaper|periódico]]", "[[read|leo]]", "[[I|Yo]]"],
      "explanation": "Combinando varios elementos."
    },
    "audioUrl": "audio/a1/unit-5/e50.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u5-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "Hello! I am Mark. I work in an office every day. I start at nine and finish at five. I eat lunch with my friends at one. We drink coffee and talk. After work, I go home and eat dinner. I sleep eight hours every night. I am very busy but happy.",
    "content": {
      "title": "La Rutina de Mark",
      "instructions": "Lee sobre Mark y responde.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[does|hace]] [[Mark|Mark]] [[work|trabajar]]?",
          "options": ["[[In an office|En una oficina]]", "[[In a school|En una escuela]]", "[[In a restaurant|En un restaurante]]"],
          "correctAnswer": 0,
          "explanation": "Mark dice: 'I work in an office'."
        },
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[hours|horas]] [[does|hace]] [[he|él]] [[sleep|dormir]]?",
          "options": ["[[Eight hours|Ocho horas]]", "[[Six hours|Seis horas]]", "[[Ten hours|Diez horas]]"],
          "correctAnswer": 0,
          "explanation": "Él dice: 'I sleep eight hours'."
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
    "difficulty": "medium",
    "transcript": "We are students. We study English at a language school. We have classes from Monday to Friday. We read books and write in our notebooks. We also play games to practice. We don't study on weekends. On Saturdays, we play soccer in the park.",
    "content": {
      "title": "Vida de Estudiante",
      "instructions": "Lee sobre los estudiantes y responde.",
      "questions": [
        {
          "question": "[[When|Cuándo]] [[do|aux]] [[they|ellos]] [[study|estudiar]]?",
          "options": ["[[Monday to Friday|Lunes a viernes]]", "[[On weekends|Fines de semana]]", "[[Every day|Cada día]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'from Monday to Friday'."
        },
        {
          "question": "[[What|Qué]] [[do|aux]] [[they|ellos]] [[do|hacer]] [[on|los]] [[Saturdays|sábados]]?",
          "options": ["[[Play soccer|Jugar al fútbol]]", "[[Study English|Estudiar inglés]]", "[[Read books|Leer libros]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'On Saturdays, we play soccer'."
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
    "difficulty": "medium",
    "transcript": "They live in a big city. They work in a bank. They drink tea in the morning and coffee in the afternoon. They eat dinner at seven. They don't watch television at night. They read the newspaper or books. They sleep at eleven.",
    "content": {
      "title": "Vida en la Ciudad",
      "instructions": "Lee sobre ellos y responde.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[do|aux]] [[they|ellos]] [[work|trabajar]]?",
          "options": ["[[In a bank|En un banco]]", "[[In a shop|En una tienda]]", "[[In an office|En una oficina]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'They work in a bank'."
        },
        {
          "question": "[[What|Qué]] [[do|aux]] [[they|ellos]] [[drink|beber]] [[in|en]] [[the|la]] [[morning|mañana]]?",
          "options": ["[[Tea|Té]]", "[[Coffee|Café]]", "[[Water|Agua]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'drink tea in the morning'."
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
    "difficulty": "medium",
    "transcript": "My name is Sarah. I am a teacher. I work at a primary school. I don't work on Wednesdays. On Wednesdays, I stay at home. I read many books and write stories. I also play the piano. I eat a big lunch and drink a lot of water. I love my free time.",
    "content": {
      "title": "El día libre de Sarah",
      "instructions": "Lee sobre Sarah y responde.",
      "questions": [
        {
          "question": "[[Does|Hacer]] [[Sarah|Sarah]] [[work|trabajar]] [[on|los]] [[Wednesdays|miércoles]]?",
          "options": ["[[No, she doesn't|No]]", "[[Yes, she does|Sí]]", "[[She works at home|Trabaja en casa]]"],
          "correctAnswer": 0,
          "explanation": "Sarah dice: 'I don't work on Wednesdays'."
        },
        {
          "question": "[[What|Qué]] [[instrument|instrumento]] [[does|hace]] [[she|ella]] [[play|tocar]]?",
          "options": ["[[The piano|El piano]]", "[[The guitar|La guitarra]]", "[[The drums|La batería]]"],
          "correctAnswer": 0,
          "explanation": "Sarah dice: 'I also play the piano'."
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
    "difficulty": "medium",
    "transcript": "Do you like sports? My friends and I play basketball every Thursday. We meet at the sports center at six. We play for two hours. After the game, we drink juice and talk about our day. We don't play if it rains. We are very active.",
    "content": {
      "title": "Baloncesto los Jueves",
      "instructions": "Lee y responde sobre el deporte.",
      "questions": [
        {
          "question": "[[When|Cuándo]] [[do|aux]] [[they|ellos]] [[play|jugar]] [[basketball|baloncesto]]?",
          "options": ["[[Every Thursday|Cada jueves]]", "[[Every Tuesday|Cada martes]]", "[[On weekends|Fines de semana]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'every Thursday'."
        },
        {
          "question": "[[What|Qué]] [[do|aux]] [[they|ellos]] [[drink|beber]] [[after|después de]] [[the|el]] [[game|juego]]?",
          "options": ["[[Juice|Zumo]]", "[[Water|Agua]]", "[[Coffee|Café]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'we drink juice'."
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
    "difficulty": "medium",
    "transcript": "I have a big family. We eat dinner together every night. My parents talk about their work. My brothers and I talk about school. We don't use our phones at the table. We drink water or juice. After dinner, we read or play games. It is a nice time.",
    "content": {
      "title": "Cena Familiar",
      "instructions": "Lee sobre la cena y responde.",
      "questions": [
        {
          "question": "[[Do|Hacer]] [[they|ellos]] [[use|usar]] [[phones|teléfonos]] [[at|en]] [[the|la]] [[table|mesa]]?",
          "options": ["[[No, they don't|No]]", "[[Yes, they do|Sí]]", "[[Only the parents|Solo los padres]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'We don't use our phones at the table'."
        },
        {
          "question": "[[What|Qué]] [[do|aux]] [[they|ellos]] [[do|hacer]] [[after|después de]] [[dinner|la cena]]?",
          "options": ["[[Read or play games|Leer o jugar]]", "[[Sleep|Dormir]]", "[[Work|Trabajar]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'we read or play games'."
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
    "difficulty": "medium",
    "transcript": "John and Mary work in a restaurant. They start work at four in the afternoon and finish at midnight. They eat a small meal at six. They drink a lot of water because they walk a lot. They don't work on Mondays. On Mondays, they sleep all day.",
    "content": {
      "title": "Trabajando en un Restaurante",
      "instructions": "Lee sobre John y Mary y responde.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[do|aux]] [[they|ellos]] [[work|trabajar]]?",
          "options": ["[[In a restaurant|En un restaurante]]", "[[In a bank|En un banco]]", "[[In a school|En una escuela]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'work in a restaurant'."
        },
        {
          "question": "[[What|Qué]] [[do|aux]] [[they|ellos]] [[do|hacer]] [[on|los]] [[Mondays|lunes]]?",
          "options": ["[[Sleep all day|Dormir todo el día]]", "[[Work all day|Trabajar todo el día]]", "[[Eat a lot|Comer mucho]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'On Mondays, they sleep all day'."
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
    "difficulty": "medium",
    "transcript": "Do you study a language? I study French and Italian. I have a French class on Tuesdays and an Italian class on Fridays. I read books in both languages. I don't write very well, but I understand a lot. I also listen to music in French. It is very interesting.",
    "content": {
      "title": "Estudiando Idiomas",
      "instructions": "Lee sobre los idiomas y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[languages|idiomas]] [[does|hace]] [[the|la]] [[person|persona]] [[study|estudiar]]?",
          "options": ["[[French and Italian|Francés e italiano]]", "[[French and English|Francés e inglés]]", "[[Spanish and Italian|Español e italiano]]"],
          "correctAnswer": 0,
          "explanation": "Dice: 'I study French and Italian'."
        },
        {
          "question": "[[When|Cuándo]] [[is|es]] [[the|la]] [[Italian|italiano]] [[class|clase]]?",
          "options": ["[[On Fridays|Los viernes]]", "[[On Tuesdays|Los martes]]", "[[On Mondays|Los lunes]]"],
          "correctAnswer": 0,
          "explanation": "Dice: 'Italian class on Fridays'."
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
    "difficulty": "medium",
    "transcript": "My friends and I go to the gym three times a week. We work out for one hour. We drink a lot of water. We don't eat junk food before the gym. We eat fruit or a salad. We feel very good after we exercise. We sleep very well at night.",
    "content": {
      "title": "En el Gimnasio",
      "instructions": "Lee sobre el gimnasio y responde.",
      "questions": [
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[times|veces]] [[a|a la]] [[week|semana]] [[do|aux]] [[they|ellos]] [[go|ir]] [[to|al]] [[the|el]] [[gym|gimnasio]]?",
          "options": ["[[Three times|Tres veces]]", "[[Two times|Dos veces]]", "[[Every day|Cada día]]"],
          "correctAnswer": 0,
          "explanation": "Dice: 'three times a week'."
        },
        {
          "question": "[[What|Qué]] [[do|aux]] [[they|ellos]] [[eat|comer]] [[before|antes de]] [[the|el]] [[gym|gimnasio]]?",
          "options": ["[[Fruit or salad|Fruta o ensalada]]", "[[Junk food|Comida basura]]", "[[Pizza|Pizza]]"],
          "correctAnswer": 0,
          "explanation": "Dice: 'We eat fruit or a salad'."
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
    "difficulty": "medium",
    "transcript": "I love my weekends. I don't work and I don't study. I sleep until ten. I drink coffee and read a book in the garden. In the afternoon, I play with my dog. We walk in the park. At night, I eat dinner with my family. It is a perfect weekend.",
    "content": {
      "title": "Un Fin de Semana Perfecto",
      "instructions": "Lee sobre el fin de semana y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[time|hora]] [[does|hace]] [[the|la]] [[person|persona]] [[sleep|dormir]] [[until|hasta]]?",
          "options": ["[[Ten|Diez]]", "[[Eight|Ocho]]", "[[Seven|Siete]]"],
          "correctAnswer": 0,
          "explanation": "Dice: 'I sleep until ten'."
        },
        {
          "question": "[[Where|Dónde]] [[does|hace]] [[the|la]] [[person|persona]] [[read|leer]] [[a|un]] [[book|libro]]?",
          "options": ["[[In the garden|En el jardín]]", "[[In the park|En el parque]]", "[[In the office|En la oficina]]"],
          "correctAnswer": 0,
          "explanation": "Dice: 'read a book in the garden'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-5/e60.mp3",
    "topicName": "Reading"
  }
];
