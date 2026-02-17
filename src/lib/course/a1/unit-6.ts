import { Exercise } from '@/lib/exercise-generator';

export const UNIT_6_EXERCISES: Exercise[] = [
  // ==========================================
  // VOCABULARY: BASIC FAMILY (1-10)
  // ==========================================
  {
    "id": "a1-u6-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[Mother|Madre]]. [[Father|Padre]]. [[Parents|Padres]]. [[Son|Hijo]]. [[Daughter|Hija]]. [[Brother|Hermano]]. [[Sister|Hermana]]. [[Siblings|Hermanos]]. [[Grandfather|Abuelo]]. [[Grandmother|Abuela]].",
    "content": {
      "title": "Vocabulario: La Familia (Básico)",
      "instructions": "Aprende los miembros básicos de la familia.",
      "items": [
        { "front": "[[Mother|Madre]]", "back": "Mother" },
        { "front": "[[Father|Padre]]", "back": "Father" },
        { "front": "[[Parents|Padres]]", "back": "Parents" },
        { "front": "[[Son|Hijo]]", "back": "Son" },
        { "front": "[[Daughter|Hija]]", "back": "Daughter" },
        { "front": "[[Brother|Hermano]]", "back": "Brother" },
        { "front": "[[Sister|Hermana]]", "back": "Sister" },
        { "front": "[[Siblings|Hermanos]]", "back": "Siblings" },
        { "front": "[[Grandfather|Abuelo]]", "back": "Grandfather" },
        { "front": "[[Grandmother|Abuela]]", "back": "Grandmother" }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e1.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[mother|madre]] [[and|y]] [[my|mi]] [[father|padre]] [[are|son]] [[my|mis]] [[parents|padres]].",
    "content": {
      "title": "Los Padres",
      "instructions": "Elige la palabra correcta.",
      "question": "[[My|Mi]] [[mother|madre]] [[and|y]] [[my|mi]] [[father|padre]] [[are|son]] [[my|mis]] (____).",
      "options": ["[[grandparents|abuelos]]", "[[parents|padres]]", "[[siblings|hermanos]]"],
      "correctAnswer": 1,
      "explanation": "'Parents' se refiere específicamente al padre y la madre."
    },
    "audioUrl": "audio/a1/unit-6/e2.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[have|tengo]] [[one|un]] [[brother|hermano]] [[and|y]] [[two|dos]] [[sisters|hermanas]]. [[They|Ellos]] [[are|son]] [[my|mis]] [[siblings|hermanos]].",
    "content": {
      "title": "Hermanos",
      "instructions": "Elige la palabra correcta.",
      "question": "[[I|Yo]] [[have|tengo]] [[one|un]] [[brother|hermano]] [[and|y]] [[two|dos]] [[sisters|hermanas]]. [[They|Ellos]] [[are|son]] [[my|mis]] (____).",
      "options": ["[[parents|padres]]", "[[cousins|primos]]", "[[siblings|hermanos]]"],
      "correctAnswer": 2,
      "explanation": "'Siblings' es la palabra general para referirse a hermanos y hermanas."
    },
    "audioUrl": "audio/a1/unit-6/e3.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e4",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "transcript": "[[This|Esta]] [[is|es]] [[my|mi]] [[daughter|hija]].",
    "content": {
      "title": "Mi hija",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[This|Esta]] [[is|es]] [[my|mi]] [[daughter|hija]].",
      "words": ["[[daughter|hija]].", "[[is|es]]", "[[This|Esta]]", "[[my|mi]]"],
      "explanation": "Usamos 'This is my...' para presentar a alguien cercano."
    },
    "audioUrl": "audio/a1/unit-6/e4.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e5",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[Is|¿Es]] [[he|él]] [[your|tu]] [[son|hijo]]?",
    "content": {
      "title": "Tu hijo",
      "instructions": "Elige el posesivo correcto.",
      "question": "[[Is|¿Es]] [[he|él]] (_____) [[son|hijo]]?",
      "options": ["[[you|tú]]", "[[your|tu]]", "[[he|él]]"],
      "correctAnswer": 1,
      "explanation": "'Your' es el adjetivo posesivo para 'tú' (you)."
    },
    "audioUrl": "audio/a1/unit-6/e5.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e6",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[grandfather|abuelo]] [[is|tiene]] [[seventy|setenta]] [[years|años]] [[old|de edad]].",
    "content": {
      "title": "La edad de mi abuelo",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My|Mi]] [[grandfather|abuelo]] [[is|tiene]] [[seventy|setenta]] [[years|años]] [[old|de edad]].",
      "words": ["[[old|de edad]].", "[[is|tiene]]", "[[seventy|setenta]]", "[[grandfather|abuelo]]", "[[My|Mi]]", "[[years|años]]"],
      "explanation": "Recuerda que en inglés la edad se dice con el verbo 'to be'."
    },
    "audioUrl": "audio/a1/unit-6/e6.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e7",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[grandmother|abuela]] [[lives|vive]] [[in|en]] [[London|Londres]].",
    "content": {
      "title": "Vivir en Londres",
      "instructions": "Elige la palabra correcta.",
      "question": "[[My|Mi]] (_____) [[lives|vive]] [[in|en]] [[London|Londres]].",
      "options": ["[[grandparents|abuelos]]", "[[grandfather|abuelo]]", "[[grandmother|abuela]]"],
      "correctAnswer": 2,
      "explanation": "Como el verbo es 'lives' (singular), necesitamos un sujeto singular femenino: grandmother."
    },
    "audioUrl": "audio/a1/unit-6/e7.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e8",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "transcript": "[[Are|¿Son]] [[they|ellos]] [[your|tus]] [[parents|padres]]?",
    "content": {
      "title": "Pregunta de familia",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Are|¿Son]] [[they|ellos]] [[your|tus]] [[parents|padres]]?",
      "words": ["[[parents|padres]]?", "[[your|tus]]", "[[Are|¿Son]]", "[[they|ellos]]"],
      "explanation": "En las preguntas, el verbo 'Are' va antes del sujeto 'they'."
    },
    "audioUrl": "audio/a1/unit-6/e8.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[A|Un]] [[son|hijo]] [[and|y]] [[a|una]] [[daughter|hija]] [[are|son]] [[children|hijos]].",
    "content": {
      "title": "Hijos e hijas",
      "instructions": "Elige la palabra correcta.",
      "question": "[[A|Un]] [[son|hijo]] [[and|y]] [[a|una]] [[daughter|hija]] [[are|son]] (____).",
      "options": ["[[children|hijos]]", "[[parents|padres]]", "[[babies|bebés]]"],
      "correctAnswer": 0,
      "explanation": "'Children' se usa para referirse a los hijos de alguien, independientemente de su edad."
    },
    "audioUrl": "audio/a1/unit-6/e9.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e10",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[brother|hermano]] [[is|es]] [[a|un]] [[student|estudiante]].",
    "content": {
      "title": "Mi hermano es estudiante",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My|Mi]] [[brother|hermano]] [[is|es]] [[a|un]] [[student|estudiante]].",
      "words": ["[[student|estudiante]].", "[[brother|hermano]]", "[[is|es]]", "[[My|Mi]]", "[[a|un]]"],
      "explanation": "Estructura: Sujeto + Verbo + Complemento."
    },
    "audioUrl": "audio/a1/unit-6/e10.mp3",
    "topicName": "Vocabulary"
  },

  // ==========================================
  // EXTENDED FAMILY & HIS/HER (11-20)
  // ==========================================
  {
    "id": "a1-u6-e11",
    "type": "flashcard",
    "level": "A1",
    "topic": "Extended Family",
    "difficulty": "easy",
    "transcript": "[[Uncle|Tío]]. [[Aunt|Tía]]. [[Cousin|Primo]]. [[Nephew|Sobrino]]. [[Niece|Sobrina]]. [[Husband|Esposo]]. [[Wife|Esposa]]. [[Father-in-law|Suegro]]. [[Mother-in-law|Suegra]]. [[Relatives|Parientes]].",
    "content": {
      "title": "Vocabulario: Familia Extendida",
      "instructions": "Aprende otros parientes comunes.",
      "items": [
        { "front": "[[Uncle|Tío]]", "back": "Uncle" },
        { "front": "[[Aunt|Tía]]", "back": "Aunt" },
        { "front": "[[Cousin|Primo/a]]", "back": "Cousin" },
        { "front": "[[Nephew|Sobrino]]", "back": "Nephew" },
        { "front": "[[Niece|Sobrina]]", "back": "Niece" },
        { "front": "[[Husband|Esposo]]", "back": "Husband" },
        { "front": "[[Wife|Esposa]]", "back": "Wife" },
        { "front": "[[Father-in-law|Suegro]]", "back": "Father-in-law" },
        { "front": "[[Mother-in-law|Suegra]]", "back": "Mother-in-law" },
        { "front": "[[Relatives|Parientes]]", "back": "Relatives" }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e11.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "transcript": "[[His|Su]] [[uncle|tío]] [[is|es]] [[from|de]] [[Italy|Italia]].",
    "content": {
      "title": "Su tío (de él)",
      "instructions": "Elige el posesivo correcto.",
      "question": "(_____) [[uncle|tío]] [[is|es]] [[from|de]] [[Italy|Italia]].",
      "options": ["[[Her|Su (de ella)]]", "[[He|Él]]", "[[His|Su (de él)]]"],
      "correctAnswer": 2,
      "explanation": "Usamos 'His' cuando el poseedor es masculino."
    },
    "audioUrl": "audio/a1/unit-6/e12.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e13",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "transcript": "[[Her|Su]] [[aunt|tía]] [[is|es]] [[a|una]] [[doctor|doctora]].",
    "content": {
      "title": "Su tía (de ella)",
      "instructions": "Elige el posesivo correcto.",
      "question": "(_____) [[aunt|tía]] [[is|es]] [[a|una]] [[doctor|doctora]].",
      "options": ["[[Her|Su (de ella)]]", "[[His|Su (de él)]]", "[[She|Ella]]"],
      "correctAnswer": 0,
      "explanation": "Usamos 'Her' cuando el poseedor es femenino."
    },
    "audioUrl": "audio/a1/unit-6/e13.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e14",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Extended Family",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[cousin|primo]] [[is|es]] [[my|mi]] [[aunt's|de mi tía]] [[son|hijo]].",
    "content": {
      "title": "Definición de primo",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My|Mi]] [[cousin|primo]] [[is|es]] [[my|mi]] [[aunt's|de mi tía]] [[son|hijo]].",
      "words": ["[[son|hijo]].", "[[aunt's|de mi tía]]", "[[is|es]]", "[[cousin|primo]]", "[[My|Mi]]", "[[my|mi]]"],
      "explanation": "El genitivo sajón 's indica posesión: aunt's son = el hijo de la tía."
    },
    "audioUrl": "audio/a1/unit-6/e14.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e15",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[Mark|Mark]] [[is|está]] [[married|casado]]. [[His|Su]] [[wife|esposa]] [[is|es]] [[Anna|Anna]].",
    "content": {
      "title": "La esposa de Mark",
      "instructions": "Elige el posesivo correcto.",
      "question": "[[Mark|Mark]] [[is|está]] [[married|casado]]. (_____) [[wife|esposa]] [[is|es]] [[Anna|Anna]].",
      "options": ["[[He|Él]]", "[[His|Su (de él)]]", "[[Her|Su (de ella)]]"],
      "correctAnswer": 1,
      "explanation": "Como Mark es un hombre, usamos 'His'."
    },
    "audioUrl": "audio/a1/unit-6/e15.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e16",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Extended Family",
    "difficulty": "easy",
    "transcript": "[[Do|¿]] [[you|tú]] [[have|tienes]] [[any|algunos]] [[cousins|primos]]?",
    "content": {
      "title": "¿Tienes primos?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Do|¿]] [[you|tú]] [[have|tienes]] [[any|algunos]] [[cousins|primos]]?",
      "words": ["[[cousins|primos]]?", "[[have|tienes]]", "[[Do|¿]]", "[[any|algunos]]", "[[you|tú]]"],
      "explanation": "Usamos 'any' en preguntas sobre cantidad no específica."
    },
    "audioUrl": "audio/a1/unit-6/e16.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[mother's|de la madre]] [[sister|hermana]] [[is|es]] [[my|mi]] [[aunt|tía]].",
    "content": {
      "title": "Relaciones",
      "instructions": "Elige la palabra correcta.",
      "question": "[[My|Mi]] [[mother's|de la madre]] [[sister|hermana]] [[is|es]] [[my|mi]]...",
      "options": ["[[uncle|tío]]", "[[niece|sobrina]]", "[[aunt|tía]]"],
      "correctAnswer": 2,
      "explanation": "La hermana de tu madre es tu tía."
    },
    "audioUrl": "audio/a1/unit-6/e17.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[father's|del padre]] [[brother|hermano]] [[is|es]] [[my|mi]] [[uncle|tío]].",
    "content": {
      "title": "Relaciones",
      "instructions": "Elige la palabra correcta.",
      "question": "[[My|Mi]] [[father's|del padre]] [[brother|hermano]] [[is|es]] [[my|mi]]...",
      "options": ["[[uncle|tío]]", "[[nephew|sobrino]]", "[[cousin|primo]]"],
      "correctAnswer": 0,
      "explanation": "El hermano de tu padre es tu tío."
    },
    "audioUrl": "audio/a1/unit-6/e18.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e19",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "transcript": "[[Is|¿Es]] [[her|su]] [[husband|esposo]] [[a|un]] [[teacher|profesor]]?",
    "content": {
      "title": "¿Su esposo es profesor?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is|¿Es]] [[her|su]] [[husband|esposo]] [[a|un]] [[teacher|profesor]]?",
      "words": ["[[teacher|profesor]]?", "[[husband|esposo]]", "[[Is|¿Es]]", "[[her|su]]", "[[a|un]]"],
      "explanation": "Estructura interrogativa: Verbo to be + Sujeto + Complemento."
    },
    "audioUrl": "audio/a1/unit-6/e19.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[sister|hermana]] [[is|está]] [[not|no]] [[single|soltera]]. [[She|Ella]] [[is|está]] [[married|casada]].",
    "content": {
      "title": "Estado civil",
      "instructions": "Elige el adjetivo opuesto a 'single'.",
      "options": ["[[single|soltera]]", "[[married|casada]]", "[[happy|feliz]]"],
      "correctAnswer": 1,
      "explanation": "'Married' significa casado/a."
    },
    "audioUrl": "audio/a1/unit-6/e20.mp3",
    "topicName": "Vocabulary"
  },

  // ==========================================
  // PRACTICE & REVIEW (21-50)
  // ==========================================
  {
    "id": "a1-u6-e21",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "[[This|Este]] [[is|es]] [[my|mi]] [[brother's|de mi hermano]] [[car|coche]].",
    "content": {
      "title": "Genitivo Sajón",
      "instructions": "Completa con el posesivo adecuado ('s).",
      "questions": [
        {
          "question": "[[This|Este]] [[is|es]] [[my|mi]] [[brother|hermano]](_____) [[car|coche]].",
          "correctAnswer": "'s",
          "explanation": "Usamos 's para indicar que el coche pertenece al hermano."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e21.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e22",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "medium",
    "transcript": "[[They|Ellos]] [[live|viven]] [[with|con]] [[their|sus]] [[grandparents|abuelos]].",
    "content": {
      "title": "Posesivo plural",
      "instructions": "Selecciona el posesivo correcto para 'they'.",
      "question": "[[They|Ellos]] [[live|viven]] [[with|con]] (_____) [[grandparents|abuelos]].",
      "options": ["[[them|ellos]]", "[[their|sus]]", "[[they|ellos]]"],
      "correctAnswer": 1,
      "explanation": "'Their' es el adjetivo posesivo de 'they'."
    },
    "audioUrl": "audio/a1/unit-6/e22.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e23",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[His|Sus]] [[siblings|hermanos]] [[are|son]] [[very|muy]] [[young|jóvenes]].",
    "content": {
      "title": "Hermanos jóvenes",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[His|Sus]] [[siblings|hermanos]] [[are|son]] [[very|muy]] [[young|jóvenes]].",
      "words": ["[[young|jóvenes]].", "[[are|son]]", "[[siblings|hermanos]]", "[[very|muy]]", "[[His|Sus]]"],
      "explanation": "Estructura: Posesivo + Sujeto + Verbo + Adjetivo."
    },
    "audioUrl": "audio/a1/unit-6/e23.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "[[Where|Dónde]] [[is|está]] [[Anna's|de Anna]] [[mother|madre]]?",
    "content": {
      "title": "Pregunta de posesión",
      "instructions": "Elige la forma correcta.",
      "question": "[[Where|¿Dónde]] [[is|está]] (____)?",
      "options": ["[[Anna mother|madre Anna]]", "[[Anna's mother|la madre de Anna]]", "[[The Anna mother|la madre Anna]]"],
      "correctAnswer": 1,
      "explanation": "Nombre + 's + Sustantivo."
    },
    "audioUrl": "audio/a1/unit-6/e24.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[parents'|de mis padres]] [[car|coche]] [[is|es]] [[blue|azul]].",
    "content": {
      "title": "Posesivo plural acabado en 's'",
      "instructions": "Elige la opción correcta para 'los padres de mi'.",
      "question": "[[My|Mi]] (_____) [[car|coche]] [[is|es]] [[blue|azul]].",
      "options": ["[[parent's|de un padre]]", "[[parents'|de los padres]]", "[[parents's|de los padres]]"],
      "correctAnswer": 1,
      "explanation": "Cuando un plural acaba en 's', solo añadimos el apóstrofe."
    },
    "audioUrl": "audio/a1/unit-6/e25.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e26",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "medium",
    "transcript": "[[We|Nosotros]] [[love|amamos]] [[our|nuestra]] [[family|familia]].",
    "content": {
      "title": "Nuestro",
      "instructions": "Completa con el posesivo de 'we'.",
      "questions": [
        {
          "question": "[[We|Nosotros]] [[love|amamos]] (_____) [[family|familia]].",
          "correctAnswer": "our",
          "explanation": "'Our' es el posesivo de 'we'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e26.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[Your|Su]] [[wife's|de la esposa de él]] [[sister|hermana]] [[is|es]] [[his|su]] [[sister-in-law|cuñada]].",
    "content": {
      "title": "Cuñada",
      "instructions": "Elige el término para cuñada.",
      "question": "[[The|La]] [[sister|hermana]] [[of|de]] [[his|su]] [[wife|esposa]] [[is|es]] [[his|su]] (____).",
      "options": ["[[sister-in-law|cuñada]]", "[[daughter-in-law|nuera]]", "[[mother-in-law|suegra]]"],
      "correctAnswer": 0,
      "explanation": "Sister-in-law es cuñada."
    },
    "audioUrl": "audio/a1/unit-6/e27.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e28",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[Whose|De quién]] [[is|es]] [[this|este]] [[photo|foto]]?",
    "content": {
      "title": "Pregunta de quién",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Whose|De quién]] [[is|es]] [[this|este]] [[photo|foto]]?",
      "words": ["[[photo|foto]]?", "[[this|este]]", "[[is|es]]", "[[Whose|De quién]]"],
      "explanation": "Whose se usa para preguntar de quién es algo."
    },
    "audioUrl": "audio/a1/unit-6/e28.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[It|Es]] [[is|es]] [[my|de mi]] [[father's|padre]].",
    "content": {
      "title": "Respuesta de posesión",
      "instructions": "Selecciona la respuesta correcta a 'Whose is this photo?'.",
      "question": "[[Whose|De quién]] [[is|es]] [[this|esta]] [[photo|foto]]?",
      "options": ["[[It is my father|Es mi padre]]", "[[It is my father's|Es de mi padre]]", "[[It is father|Es padre]]"],
      "correctAnswer": 1,
      "explanation": "Usamos el genitivo sajón para indicar pertenencia."
    },
    "audioUrl": "audio/a1/unit-6/e29.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e30",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[He|Él]] [[has|tiene]] [[three|tres]] [[cousins|primos]].",
    "content": {
      "title": "Plural de primo",
      "instructions": "Escribe el plural de 'cousin'.",
      "questions": [
        {
          "question": "[[He|Él]] [[has|tiene]] [[three|tres]] (_____).",
          "correctAnswer": "cousins",
          "explanation": "Añadimos 's' para formar el plural."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e30.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[Are|¿Están]] [[they|ellos]] [[single|solteros]] [[or|o]] [[married|casados]]?",
    "content": {
      "title": "Pregunta de estado civil",
      "instructions": "Elige la conjunción correcta.",
      "question": "[[Are|¿Están]] [[they|ellos]] [[single|solteros]] (_____) [[married|casados]]?",
      "options": ["[[and|y]]", "[[but|pero]]", "[[or|o]]"],
      "correctAnswer": 2,
      "explanation": "Usamos 'or' para ofrecer alternativas."
    },
    "audioUrl": "audio/a1/unit-6/e31.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e32",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[aunt|tía]] [[doesn't|no]] [[have|tiene]] [[any|ningún]] [[children|hijos]].",
    "content": {
      "title": "Negación",
      "instructions": "Ordena la frase negativa.",
      "correctSentence": "[[My|Mi]] [[aunt|tía]] [[doesn't|no]] [[have|tiene]] [[any|ningún]] [[children|hijos]].",
      "words": ["[[children|hijos]].", "[[any|ningún]]", "[[have|tiene]]", "[[doesn't|no]]", "[[aunt|tía]]", "[[My|Mi]]"],
      "explanation": "Doesn't have any + plural."
    },
    "audioUrl": "audio/a1/unit-6/e32.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[The|El]] [[husband|esposo]] [[of|de]] [[my|mi]] [[sister|hermana]] [[is|es]] [[my|mi]] [[brother-in-law|cuñado]].",
    "content": {
      "title": "Parentesco",
      "instructions": "Identifica la relación.",
      "question": "[[The|El]] [[husband|esposo]] [[of|de]] [[my|mi]] [[sister|hermana]] [[is|es]] [[my|mi]]...",
      "options": ["[[nephew|sobrino]]", "[[brother-in-law|cuñado]]", "[[step-brother|hermanastro]]"],
      "correctAnswer": 1,
      "explanation": "El esposo de tu hermana es tu cuñado."
    },
    "audioUrl": "audio/a1/unit-6/e33.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e34",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "medium",
    "transcript": "[[Where|Dónde]] [[do|aux]] (_____) [[parents|padres]] [[live|viven]]? [[My|Mis]] [[parents|padres]] [[live|viven]] [[in|en]] [[Spain|España]].",
    "content": {
      "title": "Tu posesivo",
      "instructions": "Completa con el posesivo de 'you'.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[do|aux]] (_____) [[parents|padres]] [[live|viven]]?",
          "correctAnswer": "your",
          "explanation": "'Your' es tu/tus."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e34.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[cousin's|de mi primo]] [[name|nombre]] [[is|es]] [[Leo|Leo]].",
    "content": {
      "title": "Uso de 's",
      "instructions": "Elige la opción gramaticalmente correcta.",
      "question": "[[What|¿Cuál]] [[is|es]] (____)?",
      "options": ["[[My cousin name|nombre mi primo]]", "[[My cousin's name|el nombre de mi primo]]", "[[The name my cousin|el nombre mi primo]]"],
      "correctAnswer": 1,
      "explanation": "Estructura del genitivo sajón."
    },
    "audioUrl": "audio/a1/unit-6/e35.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e36",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[How|Cuántos]] [[many|muchos]] [[nephews|sobrinos]] [[do|tienes]] [[you|tú]] [[have|tienes]]?",
    "content": {
      "title": "Pregunta de cantidad",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[How|Cuántos]] [[many|muchos]] [[nephews|sobrinos]] [[do|tienes]] [[you|tú]] [[have|tienes]]?",
      "words": ["[[have|tienes]]?", "[[you|tú]]", "[[do|aux]]", "[[nephews|sobrinos]]", "[[many|muchos]]", "[[How|Cuántos]]"],
      "explanation": "How many + plural + do + sujeto + have?"
    },
    "audioUrl": "audio/a1/unit-6/e36.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[A|Un]] [[nephew|sobrino]] [[is|es]] [[a|un]] [[boy|niño]].",
    "content": {
      "title": "Género",
      "instructions": "Elige la opción correcta.",
      "question": "[[A|Un]] [[nephew|sobrino]] [[is|es]] [[a|un]] (____).",
      "options": ["[[nephew / boy|sobrino / niño]]", "[[niece / boy|sobrina / niño]]", "[[nephew / girl|sobrino / niña]]"],
      "correctAnswer": 0,
      "explanation": "Nephew es masculino, niece es femenino."
    },
    "audioUrl": "audio/a1/unit-6/e37.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e38",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[have|tengo]] [[two|dos]] (_____). [[One|Uno]] [[is|es]] [[Mark|Mark]] [[and|y]] [[one|otra]] [[is|es]] [[Jane|Jane]].",
    "content": {
      "title": "Hermanos (mixto)",
      "instructions": "Escribe la palabra para hermanos (en general).",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] [[two|dos]] (_____).",
          "correctAnswer": "siblings",
          "explanation": "Siblings engloba a hermanos y hermanas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e38.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "medium",
    "transcript": "[[Is|¿Es]] [[this|este]] [[your|vuestro]] [[house|casa]]?",
    "content": {
      "title": "Vuestro",
      "instructions": "Elige el posesivo para 'you' (plural).",
      "question": "[[Is|¿Es]] [[this|esta]] (_____) [[house|casa]]?",
      "options": ["[[yours|vuestro]]", "[[your|vuestro]]", "[[our|nuestro]]"],
      "correctAnswer": 1,
      "explanation": "'Your' se usa tanto para singular (tu) como para plural (vuestro)."
    },
    "audioUrl": "audio/a1/unit-6/e39.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e40",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[Their|Su]] [[grandmother|abuela]] [[is|es]] [[very|muy]] [[kind|amable]].",
    "content": {
      "title": "Descripción",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[Their|Su]] [[grandmother|abuela]] [[is|es]] [[very|muy]] [[kind|amable]].",
      "words": ["[[kind|amable]].", "[[very|muy]]", "[[is|es]]", "[[grandmother|abuela]]", "[[Their|Su]]"],
      "explanation": "Posesivo + Sujeto + Verbo + Adjetivo."
    },
    "audioUrl": "audio/a1/unit-6/e40.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "[[It|Es]] [[is|es]] [[John|de John]] [[and|y]] [[Mary's|de Mary]] [[baby|bebé]].",
    "content": {
      "title": "Posesión compartida",
      "instructions": "Cuando algo pertenece a dos personas, ¿dónde ponemos el 's?",
      "question": "[[It|Es]] [[is|es]] (_____) [[baby|bebé]].",
      "options": ["[[John's and Mary's|de John y de Mary]]", "[[John and Mary's|de John y Mary]]", "[[John's and Mary|de John y Mary]]"],
      "correctAnswer": 1,
      "explanation": "Para posesión compartida, el 's va solo en el último nombre."
    },
    "audioUrl": "audio/a1/unit-6/e41.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[mother|madre]] [[is|es]] [[the|la]] [[wife|esposa]] [[of|de]] [[my|mi]] [[father|padre]].",
    "content": {
      "title": "Relaciones",
      "instructions": "Completa la lógica.",
      "question": "[[My|Mi]] [[mother|madre]] [[is|es]] [[the|la]] (_____) [[of|de]] [[my|mi]] [[father|padre]].",
      "options": ["[[sister|hermana]]", "[[wife|esposa]]", "[[aunt|tía]]"],
      "correctAnswer": 1,
      "explanation": "La madre es la esposa del padre."
    },
    "audioUrl": "audio/a1/unit-6/e42.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e43",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "medium",
    "transcript": "[[She|Ella]] [[lives|vive]] [[with|con]] [[her|su]] [[parents|padres]].",
    "content": {
      "title": "Su de ella",
      "instructions": "Completa con el posesivo de 'she'.",
      "questions": [
        {
          "question": "[[She|Ella]] [[lives|vive]] [[with|con]] (_____) [[parents|padres]].",
          "correctAnswer": "her",
          "explanation": "'Her' es el posesivo femenino."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e43.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[am|soy]] [[married|casado]]. [[I|Yo]] [[have|tengo]] [[a|una]] [[wife|esposa]].",
    "content": {
      "title": "Estado civil",
      "instructions": "Elige la palabra lógica.",
      "question": "[[I|Yo]] [[am|soy]] [[married|casado]]. [[I|Yo]] [[have|tengo]] [[a|una]] (____).",
      "options": ["[[sister|hermana]]", "[[wife|esposa]]", "[[mother|madre]]"],
      "correctAnswer": 1,
      "explanation": "Si un hombre está casado, tiene una esposa."
    },
    "audioUrl": "audio/a1/unit-6/e44.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e45",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "[[Is|¿Es]] [[this|este]] [[your|tu]] [[father's|del padre]] [[watch|reloj]]?",
    "content": {
      "title": "Pregunta de posesión",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is|¿Es]] [[this|este]] [[your|tu]] [[father's|del padre]] [[watch|reloj]]?",
      "words": ["[[watch|reloj]]?", "[[father's|del padre]]", "[[your|tu]]", "[[this|este]]", "[[Is|¿Es]]"],
      "explanation": "Verbo + Sujeto + Posesivo + Objeto."
    },
    "audioUrl": "audio/a1/unit-6/e45.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e46",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[He|Él]] [[is|es]] [[my|mi]] [[niece's|de mi sobrina]] [[brother|hermano]]. [[He|Él]] [[is|es]] [[my|mi]] [[nephew|sobrino]].",
    "content": {
      "title": "Parentesco complejo",
      "instructions": "Si es el hermano de tu sobrina, es tu...",
      "question": "[[He|Él]] [[is|es]] [[the|el]] [[brother|hermano]] [[of|de]] [[my|mi]] [[niece|sobrina]]. [[He|Él]] [[is|es]] [[my|mi]] (____).",
      "options": ["[[cousin|primo]]", "[[nephew|sobrino]]", "[[son|hijo]]"],
      "correctAnswer": 1,
      "explanation": "Los hijos de tus hermanos son tus sobrinos."
    },
    "audioUrl": "audio/a1/unit-6/e46.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e47",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "medium",
    "transcript": "[[The|Los]] [[children|niños]] [[are|están]] [[in|en]] [[their|su]] [[room|habitación]].",
    "content": {
      "title": "Su de ellos",
      "instructions": "Completa con el posesivo de 'they'.",
      "questions": [
        {
          "question": "[[The|Los]] [[children|niños]] [[are|están]] [[in|en]] (_____) [[room|habitación]].",
          "correctAnswer": "their",
          "explanation": "'Their' se usa para referirse a la posesión de ellos/ellas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e47.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e48",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[A|Una]] [[niece|sobrina]] [[is|es]] [[the|la]] [[daughter|hija]] [[of|de]] [[your|tu]] [[brother|hermano]] [[or|o]] [[sister|hermana]].",
    "content": {
      "title": "Definición",
      "instructions": "Elige la palabra correcta.",
      "question": "[[A|Una]] [[niece|sobrina]] [[is|es]] [[the|la]] (_____) [[of|de]] [[your|tu]] [[brother|hermano]] [[or|o]] [[sister|hermana]].",
      "options": ["[[son|hijo]]", "[[daughter|hija]]", "[[mother|madre]]"],
      "correctAnswer": 1,
      "explanation": "Niece es la sobrina (femenino)."
    },
    "audioUrl": "audio/a1/unit-6/e48.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e49",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[Are|¿Son]] [[you|vosotros]] [[cousins|primos]]?",
    "content": {
      "title": "¿Sois primos?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Are|¿Son]] [[you|vosotros]] [[cousins|primos]]?",
      "words": ["[[cousins|primos]]?", "[[you|vosotros]]", "[[Are|¿Son]]"],
      "explanation": "Verbo + Sujeto + Sustantivo plural."
    },
    "audioUrl": "audio/a1/unit-6/e49.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[I|Yo]] [[have|tengo]] [[many|muchos]] [[relatives|parientes]].",
    "content": {
      "title": "Parientes",
      "instructions": "Elige la palabra que significa 'miembros de la familia'.",
      "question": "[[I|Yo]] [[have|tengo]] [[many|muchos]] [[family|familia]] [[members|miembros]]. [[They|Ellos]] [[are|son]] [[my|mis]] (____).",
      "options": ["[[friends|amigos]]", "[[relatives|parientes]]", "[[neighbors|vecinos]]"],
      "correctAnswer": 1,
      "explanation": "'Relatives' es el término general para los parientes."
    },
    "audioUrl": "audio/a1/unit-6/e50.mp3",
    "topicName": "Vocabulary"
  },

  // ==========================================
  // READING COMPREHENSION (51-60)
  // Two-phase structure: Text slide + 3 Question slides
  // ==========================================

  // TEXT 1: PETER'S FAMILY
  {
    "id": "a1-u6-e51",
    "type": "reading",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Peter|Peter]]. [[I|Yo]] [[want|quiero]] [[to|a]] [[tell|decir]] [[you|te]] [[about|sobre]] [[my|mi]] [[family|familia]]. [[My|Mi]] [[father's|del padre]] [[name|nombre]] [[is|es]] [[Robert|Robert]]. [[He|Él]] [[is|tiene]] [[55|55]] [[years|años]] [[old|de edad]] [[and|y]] [[he|él]] [[is|es]] [[an|un]] [[engineer|ingeniero]]. [[My|Mi]] [[mother's|de la madre]] [[name|nombre]] [[is|es]] [[Sarah|Sarah]]. [[She|Ella]] [[is|tiene]] [[52|52]] [[and|y]] [[she|ella]] [[is|es]] [[a|una]] [[nurse|enfermera]]. [[I|Yo]] [[have|tengo]] [[two|dos]] [[sisters|hermanas]], [[Anna|Anna]] [[and|y]] [[Mary|Mary]]. [[Anna|Anna]] [[is|tiene]] [[20|20]] [[and|y]] [[Mary|Mary]] [[is|tiene]] [[18|18]]. [[They|Ellas]] [[are|son]] [[students|estudiantes]]. [[We|Nosotros]] [[have|tenemos]] [[a|un]] [[dog|perro]]. [[Its|Su]] [[name|nombre]] [[is|es]] [[Rex|Rex]]. [[We|Nosotros]] [[are|somos]] [[a|una]] [[very|muy]] [[happy|feliz]] [[family|familia]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[Peter's|de Peter]] [[Family|Familia]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]] [[carefully|atentamente]].",
      "text": "[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Peter|Peter]]. [[I|Yo]] [[want|quiero]] [[to|a]] [[tell|decir]] [[you|te]] [[about|sobre]] [[my|mi]] [[family|familia]]. [[My|Mi]] [[father's|del padre]] [[name|nombre]] [[is|es]] [[Robert|Robert]]. [[He|Él]] [[is|tiene]] [[55|55]] [[years|años]] [[old|de edad]] [[and|y]] [[he|él]] [[is|es]] [[an|un]] [[engineer|ingeniero]]. [[My|Mi]] [[mother's|de la madre]] [[name|nombre]] [[is|es]] [[Sarah|Sarah]]. [[She|Ella]] [[is|tiene]] [[52|52]] [[and|y]] [[she|ella]] [[is|es]] [[a|una]] [[nurse|enfermera]]. [[I|Yo]] [[have|tengo]] [[two|dos]] [[sisters|hermanas]], [[Anna|Anna]] [[and|y]] [[Mary|Mary]]. [[Anna|Anna]] [[is|tiene]] [[20|20]] [[and|y]] [[Mary|Mary]] [[is|tiene]] [[18|18]]. [[They|Ellas]] [[are|son]] [[students|estudiantes]]. [[We|Nosotros]] [[have|tenemos]] [[a|un]] [[dog|perro]]. [[Its|Su]] [[name|nombre]] [[is|es]] [[Rex|Rex]]. [[We|Nosotros]] [[are|somos]] [[a|una]] [[very|muy]] [[happy|feliz]] [[family|familia]].",
      "questions": []
    },
    "audioUrl": "audio/a1/unit-6/e51.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[How|Cuántas]] [[many|muchas]] [[sisters|hermanas]] [[does|tiene]] [[Peter|Peter]] [[have|tener]]?",
    "content": {
      "title": "[[Question|Pregunta]] 1",
      "instructions": "[[Answer|Responde]] [[according|según]] [[to|a]] [[the|el]] [[text|texto]].",
      "options": ["[[One|Una]]", "[[Three|Tres]]", "[[Two|Dos]]"],
      "correctAnswer": 2,
      "explanation": "Peter dice: 'I have two sisters, Anna and Mary'."
    },
    "audioUrl": "audio/a1/unit-6/e52.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[What|Cuál]] [[is|es]] [[Robert's|de Robert]] [[job|trabajo]]?",
    "content": {
      "title": "[[Question|Pregunta]] 2",
      "instructions": "[[Answer|Responde]] [[according|según]] [[to|a]] [[the|el]] [[text|texto]].",
      "options": ["[[Engineer|Ingeniero]]", "[[Doctor|Médico]]", "[[Teacher|Profesor]]"],
      "correctAnswer": 0,
      "explanation": "El texto menciona: 'he is an engineer'."
    },
    "audioUrl": "audio/a1/unit-6/e53.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[What|Cómo]] [[is|se llama]] [[the|el]] [[dog's|del perro]] [[name|nombre]]?",
    "content": {
      "title": "[[Question|Pregunta]] 3",
      "instructions": "[[Answer|Responde]] [[according|según]] [[to|a]] [[the|el]] [[text|texto]].",
      "options": ["[[Max|Max]]", "[[Felix|Felix]]", "[[Rex|Rex]]"],
      "correctAnswer": 2,
      "explanation": "El perro se llama Rex."
    },
    "audioUrl": "audio/a1/unit-6/e54.mp3",
    "topicName": "Reading"
  },

  // TEXT 2: LINDA'S FAMILY
  {
    "id": "a1-u6-e55",
    "type": "reading",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[Hi|Hola]], [[I'm|yo soy]] [[Linda|Linda]]. [[My|Mi]] [[family|familia]] [[is|es]] [[quite|bastante]] [[big|grande]]. [[I|Yo]] [[live|vivo]] [[with|con]] [[my|mis]] [[parents|padres]], [[my|mis]] [[two|dos]] [[brothers|hermanos]], [[and|y]] [[my|mi]] [[grandmother|abuela]]. [[My|Mis]] [[parents|padres]] [[are|son]] [[both|ambos]] [[teachers|profesores]] [[at|en]] [[a|una]] [[local|local]] [[school|escuela]]. [[My|Mi]] [[older|mayor]] [[brother|hermano]], [[Sam|Sam]], [[is|tiene]] [[25|25]] [[and|y]] [[he|él]] [[is|es]] [[a|un]] [[chef|cocinero]]. [[My|Mi]] [[younger|menor]] [[brother|hermano]], [[Tom|Tom]], [[is|tiene]] [[15|15]] [[and|y]] [[he|él]] [[is|es]] [[a|un]] [[student|estudiante]]. [[My|Mi]] [[grandmother|abuela]], [[Alice|Alice]], [[is|tiene]] [[80|80]] [[years|años]] [[old|de edad]]. [[She|Ella]] [[is|es]] [[very|muy]] [[active|activa]] [[and|y]] [[loves|ama]] [[gardening|la jardinería]]. [[We|Nosotros]] [[live|vivimos]] [[in|en]] [[a|una]] [[large|grande]] [[house|casa]] [[with|con]] [[a|un]] [[beautiful|hermoso]] [[garden|jardín]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[Linda's|de Linda]] [[Family|Familia]]",
      "instructions": "[[Read|Lee]] [[about|sobre]] [[Linda's|de Linda]] [[family|familia]].",
      "text": "[[Hi|Hola]], [[I'm|yo soy]] [[Linda|Linda]]. [[My|Mi]] [[family|familia]] [[is|es]] [[quite|bastante]] [[big|grande]]. [[I|Yo]] [[live|vivo]] [[with|con]] [[my|mis]] [[parents|padres]], [[my|mis]] [[two|dos]] [[brothers|hermanos]], [[and|y]] [[my|mi]] [[grandmother|abuela]]. [[My|Mis]] [[parents|padres]] [[are|son]] [[both|ambos]] [[teachers|profesores]] [[at|en]] [[a|una]] [[local|local]] [[school|escuela]]. [[My|Mi]] [[older|mayor]] [[brother|hermano]], [[Sam|Sam]], [[is|tiene]] [[25|25]] [[and|y]] [[he|él]] [[is|es]] [[a|un]] [[chef|cocinero]]. [[My|Mi]] [[younger|menor]] [[brother|hermano]], [[Tom|Tom]], [[is|tiene]] [[15|15]] [[and|y]] [[he|él]] [[is|es]] [[a|un]] [[student|estudiante]]. [[My|Mi]] [[grandmother|abuela]], [[Alice|Alice]], [[is|tiene]] [[80|80]] [[years|años]] [[old|de edad]]. [[She|Ella]] [[is|es]] [[very|muy]] [[active|activa]] [[and|y]] [[loves|ama]] [[gardening|la jardinería]]. [[We|Nosotros]] [[live|vivimos]] [[in|en]] [[a|una]] [[large|grande]] [[house|casa]] [[with|con]] [[a|un]] [[beautiful|hermoso]] [[garden|jardín]].",
      "questions": []
    },
    "audioUrl": "audio/a1/unit-6/e55.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[Who|Con quién]] [[does|vive]] [[Linda|Linda]] [[live|vivir]] [[with|con]]?",
    "content": {
      "title": "[[Question|Pregunta]] 1",
      "instructions": "[[Select|Selecciona]] [[the|la]] [[correct|correcta]] [[answer|respuesta]].",
      "options": ["[[With her parents and brothers|Con sus padres y hermanos]]", "[[With her parents, brothers and grandmother|Con sus padres, hermanos y abuela]]", "[[With her friends|Con sus amigos]]"],
      "correctAnswer": 1,
      "explanation": "Linda menciona que vive con sus padres, dos hermanos y su abuela."
    },
    "audioUrl": "audio/a1/unit-6/e56.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e57",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[What|Cuál]] [[is|es]] [[Sam's|el trabajo de Sam]] [[job|trabajo]]?",
    "content": {
      "title": "[[Question|Pregunta]] 2",
      "instructions": "[[Select|Selecciona]] [[the|la]] [[correct|correcta]] [[answer|respuesta]].",
      "options": ["[[He is a teacher|Es profesor]]", "[[He is a student|Es estudiante]]", "[[He is a chef|Es cocinero]]"],
      "correctAnswer": 2,
      "explanation": "El texto dice que Sam es chef."
    },
    "audioUrl": "audio/a1/unit-6/e57.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[How|Qué edad]] [[old|tiene]] [[is|tiene]] [[Alice|Alice]]?",
    "content": {
      "title": "[[Question|Pregunta]] 3",
      "instructions": "[[Select|Selecciona]] [[the|la]] [[correct|correcta]] [[answer|respuesta]].",
      "options": ["[[Eighty|Ochenta]]", "[[Seventy|Setenta]]", "[[Sixty|Sesenta]]"],
      "correctAnswer": 0,
      "explanation": "El texto indica que Alice tiene 80 años."
    },
    "audioUrl": "audio/a1/unit-6/e58.mp3",
    "topicName": "Reading"
  },

  // TEXT 3: THE MILLER FAMILY
  {
    "id": "a1-u6-e59",
    "type": "reading",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[The|La]] [[Miller|Miller]] [[family|familia]] [[lives|vive]] [[in|en]] [[New York|Nueva York]]. [[Mr.|Sr.]] [[Miller|Miller]] [[is|es]] [[a|un]] [[lawyer|abogado]] [[and|y]] [[Mrs.|Sra.]] [[Miller|Miller]] [[is|es]] [[an|una]] [[artist|artista]]. [[They|Ellos]] [[have|tienen]] [[one|un]] [[son|hijo]], [[Leo|Leo]], [[and|y]] [[one|una]] [[daughter|hija]], [[Mia|Mia]]. [[Leo|Leo]] [[is|tiene]] [[12|12]] [[and|y]] [[Mia|Mia]] [[is|tiene]] [[9|9]]. [[They|Ellos]] [[also|también]] [[have|tienen]] [[a|un]] [[cat|gato]] [[named|llamado]] [[Luna|Luna]]. [[Every|Cada]] [[Sunday|domingo]], [[the|la]] [[family|familia]] [[visits|visita]] [[the|a los]] [[grandparents|abuelos]] [[in|en]] [[the|el]] [[countryside|campo]]. [[They|Ellos]] [[love|aman]] [[spending|pasar]] [[time|tiempo]] [[together|juntos]] [[outdoors|al aire libre]].",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|La]] [[Miller|Miller]] [[Family|Familia]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]].",
      "text": "[[The|La]] [[Miller|Miller]] [[family|familia]] [[lives|vive]] [[in|en]] [[New York|Nueva York]]. [[Mr.|Sr.]] [[Miller|Miller]] [[is|es]] [[a|un]] [[lawyer|abogado]] [[and|y]] [[Mrs.|Sra.]] [[Miller|Miller]] [[is|es]] [[an|una]] [[artist|artista]]. [[They|Ellos]] [[have|tienen]] [[one|un]] [[son|hijo]], [[Leo|Leo]], [[and|y]] [[one|una]] [[daughter|hija]], [[Mia|Mia]]. [[Leo|Leo]] [[is|tiene]] [[12|12]] [[and|y]] [[Mia|Mia]] [[is|tiene]] [[9|9]]. [[They|Ellos]] [[also|también]] [[have|tienen]] [[a|un]] [[cat|gato]] [[named|llamado]] [[Luna|Luna]]. [[Every|Cada]] [[Sunday|domingo]], [[the|la]] [[family|familia]] [[visits|visita]] [[the|a los]] [[grandparents|abuelos]] [[in|en]] [[the|el]] [[countryside|campo]]. [[They|Ellos]] [[love|aman]] [[spending|pasar]] [[time|tiempo]] [[together|juntos]] [[outdoors|al aire libre]].",
      "questions": []
    },
    "audioUrl": "audio/a1/unit-6/e59.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "transcript": "[[When|Cuándo]] [[do|aux]] [[they|ellos]] [[visit|visitan]] [[their|a sus]] [[grandparents|abuelos]]?",
    "content": {
      "title": "[[Final|Final]] [[Question|Pregunta]]",
      "instructions": "[[Answer|Responde]] [[according|según]] [[to|a]] [[the|el]] [[text|texto]].",
      "options": ["[[On Saturdays|Los sábados]]", "[[Every day|Todos los días]]", "[[On Sundays|Los domingos]]"],
      "correctAnswer": 2,
      "explanation": "El texto dice que visitan a los abuelos cada domingo."
    },
    "audioUrl": "audio/a1/unit-6/e60.mp3",
    "topicName": "Reading"
  }
];