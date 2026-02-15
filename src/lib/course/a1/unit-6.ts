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
        { "front": "[[Mother|Madre]]", "back": "Madre" },
        { "front": "[[Father|Padre]]", "back": "Padre" },
        { "front": "[[Parents|Padres]]", "back": "Padres" },
        { "front": "[[Son|Hijo]]", "back": "Hijo" },
        { "front": "[[Daughter|Hija]]", "back": "Hija" },
        { "front": "[[Brother|Hermano]]", "back": "Hermano" },
        { "front": "[[Sister|Hermana]]", "back": "Hermana" },
        { "front": "[[Siblings|Hermanos (en general)]]", "back": "Hermanos (en general)" },
        { "front": "[[Grandfather|Abuelo]]", "back": "Abuelo" },
        { "front": "[[Grandmother|Abuela]]", "back": "Abuela" }
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
      "questions": [
        {
          "question": "[[My|Mi]] [[mother|madre]] [[and|y]] [[my|mi]] [[father|padre]] [[are|son]] [[my|mis]] (_____).",
          "options": ["[[grandparents|abuelos]]", "[[parents|padres]]", "[[siblings|hermanos]]"],
          "correctAnswer": 1,
          "explanation": "'Parents' se refiere específicamente al padre y la madre."
        }
      ]
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
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] [[one|un]] [[brother|hermano]] [[and|y]] [[two|dos]] [[sisters|hermanas]]. [[They|Ellos]] [[are|son]] [[my|mis]] (_____).",
          "options": ["[[parents|padres]]", "[[cousins|primos]]", "[[siblings|hermanos]]"],
          "correctAnswer": 2,
          "explanation": "'Siblings' es la palabra general para referirse a hermanos y hermanas."
        }
      ]
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
      "questions": [
        {
          "question": "[[Is|¿Es]] [[he|él]] (_____) [[son|hijo]]?",
          "options": ["[[you|tú]]", "[[your|tu]]", "[[he|él]]"],
          "correctAnswer": 1,
          "explanation": "'Your' es el adjetivo posesivo para 'tú' (you)."
        }
      ]
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
      "questions": [
        {
          "question": "[[My|Mi]] (_____) [[lives|vive]] [[in|en]] [[London|Londres]].",
          "options": ["[[grandparents|abuelos]]", "[[grandfather|abuelo]]", "[[grandmother|abuela]]"],
          "correctAnswer": 2,
          "explanation": "Como el verbo es 'lives' (singular), necesitamos un sujeto singular femenino: grandmother."
        }
      ]
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
      "questions": [
        {
          "question": "[[A|Un]] [[son|hijo]] [[and|y]] [[a|una]] [[daughter|hija]] [[are|son]] (_____).",
          "options": ["[[children|hijos]]", "[[parents|padres]]", "[[babies|bebés]]"],
          "correctAnswer": 0,
          "explanation": "'Children' se usa para referirse a los hijos de alguien, independientemente de su edad."
        }
      ]
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
        { "front": "[[Uncle|Tío]]", "back": "Tío" },
        { "front": "[[Aunt|Tía]]", "back": "Tía" },
        { "front": "[[Cousin|Primo/a]]", "back": "Primo/a" },
        { "front": "[[Nephew|Sobrino]]", "back": "Sobrino" },
        { "front": "[[Niece|Sobrina]]", "back": "Sobrina" },
        { "front": "[[Husband|Esposo]]", "back": "Esposo" },
        { "front": "[[Wife|Esposa]]", "back": "Esposa" },
        { "front": "[[Father-in-law|Suegro]]", "back": "Suegro" },
        { "front": "[[Mother-in-law|Suegra]]", "back": "Suegra" },
        { "front": "[[Relatives|Parientes]]", "back": "Parientes" }
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
      "questions": [
        {
          "question": "(_____) [[uncle|tío]] [[is|es]] [[from|de]] [[Italy|Italia]].",
          "options": ["[[Her|Su (de ella)]]", "[[He|Él]]", "[[His|Su (de él)]]"],
          "correctAnswer": 2,
          "explanation": "Usamos 'His' cuando el poseedor es masculino."
        }
      ]
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
      "questions": [
        {
          "question": "(_____) [[aunt|tía]] [[is|es]] [[a|una]] [[doctor|doctora]].",
          "options": ["[[Her|Su (de ella)]]", "[[His|Su (de él)]]", "[[She|Ella]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'Her' cuando el poseedor es femenino."
        }
      ]
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
      "questions": [
        {
          "question": "[[Mark|Mark]] [[is|está]] [[married|casado]]. (_____) [[wife|esposa]] [[is|es]] [[Anna|Anna]].",
          "options": ["[[He|Él]]", "[[His|Su (de él)]]", "[[Her|Su (de ella)]]"],
          "correctAnswer": 1,
          "explanation": "Como Mark es un hombre, usamos 'His'."
        }
      ]
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
      "questions": [
        {
          "question": "[[My|Mi]] [[mother's|de mi madre]] [[sister|hermana]] [[is|es]] [[my|mi]] (_____).",
          "options": ["[[uncle|tío]]", "[[niece|sobrina]]", "[[aunt|tía]]"],
          "correctAnswer": 2,
          "explanation": "La hermana de tu madre es tu tía."
        }
      ]
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
      "questions": [
        {
          "question": "[[My|Mi]] [[father's|de mi padre]] [[brother|hermano]] [[is|es]] [[my|mi]] (_____).",
          "options": ["[[uncle|tío]]", "[[nephew|sobrino]]", "[[cousin|primo]]"],
          "correctAnswer": 0,
          "explanation": "El hermano de tu padre es tu tío."
        }
      ]
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
    "transcript": "[[Their|Su]] [[son|hijo]] [[is|es]] [[very|muy]] [[young|joven]].",
    "content": {
      "title": "Su hijo (de ellos)",
      "instructions": "Elige el posesivo correcto.",
      "questions": [
        {
          "question": "(_____) [[son|hijo]] [[is|es]] [[very|muy]] [[young|joven]].",
          "options": ["[[Their|Su (de ellos)]]", "[[They|Ellos]]", "[[There|Allí]]"],
          "correctAnswer": 0,
          "explanation": "'Their' es el posesivo para 'ellos' (they)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e20.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // PERSONAL INFO (21-30)
  // ==========================================
  {
    "id": "a1-u6-e21",
    "type": "flashcard",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "transcript": "[[Name|Nombre]]. [[Surname|Apellido]]. [[Address|Dirección]]. [[Phone|Teléfono]]. [[Email|Correo]]. [[Age|Edad]]. [[Nationality|Nacionalidad]]. [[Job|Trabajo]]. [[Marital status|Estado civil]]. [[Gender|Género]].",
    "content": {
      "title": "Vocabulario: Información Personal",
      "instructions": "Aprende palabras para dar información personal.",
      "items": [
        { "front": "[[Name|Nombre]]", "back": "Nombre" },
        { "front": "[[Surname|Apellido]]", "back": "Apellido" },
        { "front": "[[Address|Dirección]]", "back": "Dirección" },
        { "front": "[[Phone number|Número de teléfono]]", "back": "Número de teléfono" },
        { "front": "[[Email address|Dirección de correo]]", "back": "Dirección de correo" },
        { "front": "[[Age|Edad]]", "back": "Edad" },
        { "front": "[[Nationality|Nacionalidad]]", "back": "Nacionalidad" },
        { "front": "[[Job / Occupation|Trabajo / Ocupación]]", "back": "Trabajo / Ocupación" },
        { "front": "[[Marital status|Estado civil]]", "back": "Estado civil" },
        { "front": "[[Gender|Género]]", "back": "Género" }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e21.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e22",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "transcript": "[[What|Cuál]] [[is|es]] [[your|tu]] [[name|nombre]]?",
    "content": {
      "title": "Preguntar el nombre",
      "instructions": "Elige la respuesta correcta.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[your|tu]] [[name|nombre]]?",
          "options": ["[[I am from Spain|Soy de España]]", "[[My name is John|Mi nombre es John]]", "[[I am 20 years old|Tengo 20 años]]"],
          "correctAnswer": 1,
          "explanation": "Cuando preguntan 'What is your name?', respondemos con nuestro nombre."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e22.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e23",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[surname|apellido]] [[is|es]] [[Smith|Smith]].",
    "content": {
      "title": "El apellido",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My|Mi]] [[surname|apellido]] [[is|es]] [[Smith|Smith]].",
      "words": ["[[Smith|Smith]].", "[[is|es]]", "[[My|Mi]]", "[[surname|apellido]]"],
      "explanation": "'Surname' o 'Last name' significan apellido."
    },
    "audioUrl": "audio/a1/unit-6/e23.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "transcript": "[[How|Cuántos]] [[old|años]] [[are|tienes]] [[you|tú]]?",
    "content": {
      "title": "Preguntar la edad",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[How|¿]] [[old|Cuántos años]] [[are|tienes]] [[you|tú]] [[?|?]]",
          "options": ["[[I am 25 years old|Tengo 25 años]]", "[[I have 25 years old|Tengo 25 años]]", "[[My age is 25 years|Mi edad es 25 años]]"],
          "correctAnswer": 0,
          "explanation": "En inglés, la edad se dice con el verbo 'to be' (I am...)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e24.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e25",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "medium",
    "transcript": "[[What|Cuál]] [[is|es]] [[your|tu]] [[phone|teléfono]] [[number|número]]?",
    "content": {
      "title": "Número de teléfono",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[What|Cuál]] [[is|es]] [[your|tu]] [[phone|teléfono]] [[number|número]]?",
      "words": ["[[number|número]]?", "[[phone|teléfono]]", "[[What|Cuál]]", "[[is|es]]", "[[your|tu]]"],
      "explanation": "Usamos 'What is...' para pedir información específica como un número."
    },
    "audioUrl": "audio/a1/unit-6/e25.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "transcript": "[[Are|¿Estás]] [[you|tú]] [[single|soltero]] [[or|o]] [[married|casado]]?",
    "content": {
      "title": "Estado civil",
      "instructions": "Elige la palabra que falta.",
      "questions": [
        {
          "question": "[[Are|¿Estás]] [[you|tú]] [[single|soltero]] [[or|o]] (_____) [[?|?]]",
          "options": ["[[happy|feliz]]", "[[married|casado]]", "[[student|estudiante]]"],
          "correctAnswer": 1,
          "explanation": "'Married' (casado) es lo opuesto a 'single' (soltero)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e26.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e27",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[am|soy]] [[from|de]] [[Spain|España]].",
    "content": {
      "title": "Nacionalidad",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[am|soy]] [[from|de]] [[Spain|España]].",
      "words": ["[[Spain|España]].", "[[from|de]]", "[[I|Yo]]", "[[am|soy]]"],
      "explanation": "Usamos 'from' para indicar origen o país."
    },
    "audioUrl": "audio/a1/unit-6/e27.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e28",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "transcript": "[[What|Cuál]] [[is|es]] [[his|su]] [[job|trabajo]]?",
    "content": {
      "title": "Su trabajo (de él)",
      "instructions": "Elige el posesivo correcto.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] (_____) [[job|trabajo]] [[?|?]]",
          "options": ["[[he|él]]", "[[him|él]]", "[[his|su]]"],
          "correctAnswer": 2,
          "explanation": "'His' es el posesivo masculino necesario para acompañar al sustantivo 'job'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e28.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e29",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "medium",
    "transcript": "[[Is|¿Es]] [[her|su]] [[address|dirección]] [[in|en]] [[London|Londres]]?",
    "content": {
      "title": "La dirección",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is|¿Es]] [[her|su]] [[address|dirección]] [[in|en]] [[London|Londres]]?",
      "words": ["[[London|Londres]]?", "[[address|dirección]]", "[[Is|¿Es]]", "[[in|en]]", "[[her|su]]"],
      "explanation": "Estructura de pregunta con el verbo to be."
    },
    "audioUrl": "audio/a1/unit-6/e29.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e30",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "transcript": "[[What|Cuál]] [[is|es]] [[her|su]] [[nationality|nacionalidad]]?",
    "content": {
      "title": "Su nacionalidad (de ella)",
      "instructions": "Elige la respuesta correcta.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[her|su]] [[nationality|nacionalidad]]?",
          "options": ["[[She is French|Ella es francesa]]", "[[He is French|Él es francés]]", "[[I am French|Soy francés]]"],
          "correctAnswer": 0,
          "explanation": "Si la pregunta usa 'her' (de ella), la respuesta debe usar 'she' (ella)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e30.mp3",
    "topicName": "Vocabulary"
  },

  // ==========================================
  // GENITIVE 'S & POSSESSION (31-40)
  // ==========================================
  {
    "id": "a1-u6-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Genitive 's",
    "difficulty": "easy",
    "transcript": "[[John's|De John]] [[mother|madre]] [[is|es]] [[kind|amable]].",
    "content": {
      "title": "Genitivo Sajón",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "(_____) [[mother|madre]] [[is|es]] [[kind|amable]].",
          "options": ["[[The mother of John|La madre de John]]", "[[John's|De John]]", "[[Johns'|De John]]"],
          "correctAnswer": 1,
          "explanation": "Usamos el apóstrofo + s ('s) para indicar posesión."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e31.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e32",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Genitive 's",
    "difficulty": "medium",
    "transcript": "[[My|Mi]] [[sister's|de mi hermana]] [[name|nombre]] [[is|es]] [[Maria|Maria]].",
    "content": {
      "title": "El nombre de mi hermana",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My|Mi]] [[sister's|de mi hermana]] [[name|nombre]] [[is|es]] [[Maria|Maria]].",
      "words": ["[[Maria|Maria]].", "[[name|nombre]]", "[[sister's|de mi hermana]]", "[[is|es]]", "[[My|Mi]]"],
      "explanation": "'sister's name' = el nombre de la hermana."
    },
    "audioUrl": "audio/a1/unit-6/e32.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Genitive 's",
    "difficulty": "medium",
    "transcript": "[[Whose|De quién]] [[car|coche]] [[is|es]] [[this|este]]?",
    "content": {
      "title": "Preguntar posesión",
      "instructions": "Elige la palabra que falta.",
      "questions": [
        {
          "question": "(_____) [[car|coche]] [[is|es]] [[this|este]] [[?|?]]",
          "options": ["[[Whose|De quién]]", "[[Who|Quién]]", "[[What|Qué]]"],
          "correctAnswer": 0,
          "explanation": "'Whose' se usa para preguntar de quién es algo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e33.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e34",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Genitive 's",
    "difficulty": "easy",
    "transcript": "[[It|Esto]] [[is|es]] [[my|mi]] [[parents'|de mis padres]] [[house|casa]].",
    "content": {
      "title": "Posesión plural",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[It|Esto]] [[is|es]] [[my|mi]] (_____) [[house|casa]].",
          "options": ["[[parent's|del padre/madre]]", "[[parents's|de los padres]]", "[[parents'|de los padres]]"],
          "correctAnswer": 2,
          "explanation": "En plurales que terminan en -s, solo añadimos el apóstrofo."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e34.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e35",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Genitive 's",
    "difficulty": "medium",
    "transcript": "[[Is|¿Es]] [[this|este]] [[your|tu]] [[brother's|de tu hermano]] [[pen|bolígrafo]]?",
    "content": {
      "title": "¿Es el bolígrafo de tu hermano?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is|¿Es]] [[this|este]] [[your|tu]] [[brother's|de tu hermano]] [[pen|bolígrafo]]?",
      "words": ["[[pen|bolígrafo]]?", "[[brother's|de tu hermano]]", "[[Is|¿Es]]", "[[this|este]]", "[[your|tu]]"],
      "explanation": "Combinamos adjetivo posesivo y genitivo sajón."
    },
    "audioUrl": "audio/a1/unit-6/e35.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e36",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Genitive 's",
    "difficulty": "easy",
    "transcript": "[[Those|Esos]] [[are|son]] [[the|los]] [[children's|de los niños]] [[toys|juguetes]].",
    "content": {
      "title": "Plurales irregulares",
      "instructions": "Elige la forma correcta.",
      "questions": [
        {
          "question": "[[Those|Esos]] [[are|son]] [[the|los]] (_____) [[toys|juguetes]].",
          "options": ["[[childrens'|de los niños]]", "[[children's|de los niños]]", "[[childs|de los niños]]"],
          "correctAnswer": 1,
          "explanation": "Aunque 'children' es plural, no termina en -s, por lo que usamos 's."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e36.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e37",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Genitive 's",
    "difficulty": "medium",
    "transcript": "[[Peter|Peter]] [[is|es]] [[my|mi]] [[cousin's|de mi primo]] [[friend|amigo]].",
    "content": {
      "title": "El amigo de mi primo",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[Peter|Peter]] [[is|es]] [[my|mi]] [[cousin's|de mi primo]] [[friend|amigo]].",
      "words": ["[[friend|amigo]].", "[[cous's|de mi primo]]", "[[is|es]]", "[[Peter|Peter]]", "[[my|mi]]"],
      "explanation": "El poseedor ('cousin') va antes de lo poseído ('friend')."
    },
    "audioUrl": "audio/a1/unit-6/e37.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e38",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Genitive 's",
    "difficulty": "easy",
    "transcript": "[[Where|Dónde]] [[is|está]] [[the|la]] [[teacher's|del profesor]] [[book|libro]]?",
    "content": {
      "title": "El libro del profesor",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[Where|¿Dónde]] [[is|está]] [[the|el]] (_____) [[book|libro]] [[?|?]]",
          "options": ["[[teacher's|del profesor]]", "[[teachers|profesores]]", "[[teacher|profesor]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 's para indicar que el libro pertenece al profesor."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e38.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e39",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Genitive 's",
    "difficulty": "hard",
    "transcript": "[[This|Esta]] [[is|es]] [[my|mi]] [[uncle's|del tío]] [[wife's|de la esposa]] [[car|coche]].",
    "content": {
      "title": "Doble posesión",
      "instructions": "Ordena la oración (el coche de la esposa de mi tío).",
      "correctSentence": "[[This|Esta]] [[is|es]] [[my|mi]] [[uncle's|de mi tío]] [[wife's|de su esposa]] [[car|coche]].",
      "words": ["[[car|coche]].", "[[wife's|de su esposa]]", "[[uncle's|de mi tío]]", "[[is|es]]", "[[This|Esta]]", "[[my|mi]]"],
      "explanation": "Podemos encadenar posesiones en inglés: A's B's C."
    },
    "audioUrl": "audio/a1/unit-6/e39.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e40",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Genitive 's",
    "difficulty": "medium",
    "transcript": "[[Anna|Ana]] [[is|es]] [[Robert's|de Robert]] [[daughter|hija]].",
    "content": {
      "title": "Relaciones familiares",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[Anna|Anna]] [[is|es]] (_____) [[daughter|hija]].",
          "options": ["[[Robert|Robert]]", "[[Roberts|Robert]]", "[[Robert's|de Robert]]"],
          "correctAnswer": 2,
          "explanation": "Anna es la hija de Robert."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e40.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // REVIEW & ADDITIONAL VOCAB (41-50)
  // ==========================================
  {
    "id": "a1-u6-e41",
    "type": "flashcard",
    "level": "A1",
    "topic": "Extended Family",
    "difficulty": "medium",
    "transcript": "[[Stepmother|Madrastra]]. [[Stepfather|Padrastro]]. [[Stepsister|Hermastra]]. [[Stepbrother|Hermanastro]]. [[Godmother|Madrina]]. [[Godfather|Padrino]]. [[Grandson|Nieto]]. [[Granddaughter|Nieta]]. [[Grandparents|Abuelos]]. [[Grandchildren|Nietos]].",
    "content": {
      "title": "Vocabulario: Más Relaciones",
      "instructions": "Aprende otros términos de familia.",
      "items": [
        { "front": "[[Stepmother|Madrastra]]", "back": "Madrastra" },
        { "front": "[[Stepfather|Padrastro]]", "back": "Padrastro" },
        { "front": "[[Stepsister|Hermastra]]", "back": "Hermastra" },
        { "front": "[[Stepbrother|Hermanastro]]", "back": "Hermanastro" },
        { "front": "[[Godmother|Madrina]]", "back": "Madrina" },
        { "front": "[[Godfather|Padrino]]", "back": "Padrino" },
        { "front": "[[Grandson|Nieto]]", "back": "Nieto" },
        { "front": "[[Granddaughter|Nieta]]", "back": "Nieta" },
        { "front": "[[Grandparents|Abuelos]]", "back": "Abuelos" },
        { "front": "[[Grandchildren|Nietos/as]]", "back": "Nietos/as" }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e41.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[mother|madre]] [[and|y]] [[father|padre]] [[are|son]] [[my|mis]] [[parents|padres]].",
    "content": {
      "title": "Repaso: Padres",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[My|Mi]] [[mother|madre]] [[and|y]] [[father|padre]] [[are|son]] [[my|mis]] (_____).",
          "options": ["[[parents|padres]]", "[[siblings|hermanos]]", "[[grandparents|abuelos]]"],
          "correctAnswer": 0,
          "explanation": "'Parents' se refiere a padre y madre."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e42.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e43",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "medium",
    "transcript": "[[What|Cuál]] [[is|es]] [[his|su]] [[email|correo]] [[address|dirección]]?",
    "content": {
      "title": "Repaso: Correo electrónico",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[What|Cuál]] [[is|es]] [[his|su]] [[email|correo]] [[address|dirección]]?",
      "words": ["[[address|dirección]]?", "[[email|correo]]", "[[What|Cuál]]", "[[is|es]]", "[[his|su]]"],
      "explanation": "Usamos 'What is...' para pedir una dirección de correo."
    },
    "audioUrl": "audio/a1/unit-6/e43.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e44",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Genitive 's",
    "difficulty": "medium",
    "transcript": "[[Whose|De quién]] [[book|libro]] [[is|es]] [[this|este]]?",
    "content": {
      "title": "Repaso: Whose",
      "instructions": "Elige la respuesta correcta.",
      "questions": [
        {
          "question": "[[Whose|De quién]] [[book|libro]] [[is|es]] [[this|este]] [[?|?]]",
          "options": ["[[It is John's book|Es el libro de John]]", "[[It is a book|Es un libro]]", "[[Yes, it is|Sí, lo es]]"],
          "correctAnswer": 0,
          "explanation": "A una pregunta con 'Whose' respondemos indicando el poseedor."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e44.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e45",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[I|Yo]] [[have|tengo]] [[three|tres]] [[cousins|primos]].",
    "content": {
      "title": "Tengo tres primos",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[have|tengo]] [[three|tres]] [[cousins|primos]].",
      "words": ["[[cousins|primos]].", "[[have|tengo]]", "[[I|Yo]]", "[[three|tres]]"],
      "explanation": "Estructura: Sujeto + Verbo + Cantidad + Sustantivo."
    },
    "audioUrl": "audio/a1/unit-6/e45.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e46",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Personal Info",
    "difficulty": "easy",
    "transcript": "[[My|Mi]] [[phone|teléfono]] [[number|número]] [[is|es]] [[555-1234|555-1234]].",
    "content": {
      "title": "Mi número",
      "instructions": "Elige la palabra que falta.",
      "questions": [
        {
          "question": "[[My|Mi]] [[phone|teléfono]] (_____) [[is|es]] [[555-1234|555-1234]].",
          "options": ["[[address|dirección]]", "[[number|número]]", "[[surname|apellido]]"],
          "correctAnswer": 1,
          "explanation": "'Phone number' es la expresión correcta para número de teléfono."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e46.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e47",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[She|Ella]] [[is|es]] [[my|mi]] [[brother's|de mi hermano]] [[wife|esposa]].",
    "content": {
      "title": "La esposa de mi hermano",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[She|Ella]] [[is|es]] [[my|mi]] [[brother's|de mi hermano]] [[wife|esposa]].",
      "words": ["[[wife|esposa]].", "[[brother's|de mi hermano]]", "[[is|es]]", "[[She|Ella]]", "[[my|mi]]"],
      "explanation": "La esposa de tu hermano es tu cuñada (sister-in-law)."
    },
    "audioUrl": "audio/a1/unit-6/e47.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e48",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "[[Are|¿Son]] [[they|ellos]] [[your|tus]] [[grandparents|abuelos]]?",
    "content": {
      "title": "Tus abuelos",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[Are|¿Son]] [[they|ellos]] [[your|tus]] (_____)?",
          "options": ["[[grandparents|abuelos]]", "[[parents|padres]]", "[[cousins|primos]]"],
          "correctAnswer": 0,
          "explanation": "'Grandparents' incluye al abuelo y la abuela."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e48.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[She|Ella]] [[is|es]] [[my|mi]] [[granddaughter|nieta]].",
    "content": {
      "title": "Nietos",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[My|Mi]] [[daughter's|de mi hija]] [[daughter|hija]] [[is|es]] [[my|mi]] (_____).",
          "options": ["[[niece|sobrina]]", "[[granddaughter|nieta]]", "[[grandson|nieto]]"],
          "correctAnswer": 1,
          "explanation": "La hija de tu hijo/a es tu nieta (granddaughter)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e49.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e50",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "[[Is|¿Tiene]] [[their|su]] [[daughter|hija]] [[seven|siete]] [[years|años]] [[old|de edad]]?",
    "content": {
      "title": "¿Tiene su hija siete años?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is|¿Tiene]] [[their|su]] [[daughter|hija]] [[seven|siete]] [[years|años]] [[old|de edad]]?",
      "words": ["[[old|de edad]]?", "[[daughter|hija]]", "[[Is|¿Tiene]]", "[[seven|siete]]", "[[their|su]]", "[[years|años]]"],
      "explanation": "Pregunta sobre la edad de un familiar usando posesivos plurales."
    },
    "audioUrl": "audio/a1/unit-6/e50.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // READING COMPREHENSION (51-60)
  // ==========================================
  {
    "id": "a1-u6-e51",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Peter|Peter]]. [[I|Yo]] [[want|quiero]] [[to|a]] [[tell|decir]] [[you|te]] [[about|sobre]] [[my|mi]] [[family|familia]]. [[My|Mi]] [[father's|del padre]] [[name|nombre]] [[is|es]] [[Robert|Robert]]. [[He|Él]] [[is|tiene]] [[55|55]] [[years|años]] [[old|de edad]] [[and|y]] [[he|él]] [[is|es]] [[an|un]] [[engineer|ingeniero]]. [[My|Mi]] [[mother's|de la madre]] [[name|nombre]] [[is|es]] [[Sarah|Sarah]]. [[She|Ella]] [[is|tiene]] [[52|52]] [[and|y]] [[she|ella]] [[is|es]] [[a|una]] [[nurse|enfermera]]. [[I|Yo]] [[have|tengo]] [[two|dos]] [[sisters|hermanas]], [[Anna|Anna]] [[and|y]] [[Mary|Mary]]. [[Anna|Anna]] [[is|tiene]] [[20|20]] [[and|y]] [[Mary|Mary]] [[is|tiene]] [[18|18]]. [[They|Ellas]] [[are|son]] [[students|estudiantes]]. [[We|Nosotros]] [[have|tenemos]] [[a|un]] [[dog|perro]]. [[Its|Su]] [[name|nombre]] [[is|es]] [[Rex|Rex]]. [[We|Nosotros]] [[are|somos]] [[a|una]] [[very|muy]] [[happy|feliz]] [[family|familia]].",
    "content": {
      "title": "Lectura: La Familia de Peter",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[Who|Quién]] [[is|es]] [[the|la]] [[youngest|más joven]] [[person|persona]] [[mentioned|mencionada]] [[in|en]] [[the|la]] [[family|familia]]?",
          "options": ["[[Anna|Anna]]", "[[Peter|Peter]]", "[[Mary|Mary]]"],
          "correctAnswer": 2,
          "explanation": "Mary tiene 18 años, mientras que Anna tiene 20. El texto no menciona la edad de Peter pero Mary es la menor de las hermanas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e51.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Peter|Peter]]. [[I|Yo]] [[want|quiero]] [[to|a]] [[tell|decir]] [[you|te]] [[about|sobre]] [[my|mi]] [[family|familia]]. [[My|Mi]] [[father's|del padre]] [[name|nombre]] [[is|es]] [[Robert|Robert]]. [[He|Él]] [[is|tiene]] [[55|55]] [[years|años]] [[old|de edad]] [[and|y]] [[he|él]] [[is|es]] [[an|un]] [[engineer|ingeniero]]. [[My|Mi]] [[mother's|de la madre]] [[name|nombre]] [[is|es]] [[Sarah|Sarah]]. [[She|Ella]] [[is|tiene]] [[52|52]] [[and|y]] [[she|ella]] [[is|es]] [[a|una]] [[nurse|enfermera]]. [[I|Yo]] [[have|tengo]] [[two|dos]] [[sisters|hermanas]], [[Anna|Anna]] [[and|y]] [[Mary|Mary]]. [[Anna|Anna]] [[is|tiene]] [[20|20]] [[and|y]] [[Mary|Mary]] [[is|tiene]] [[18|18]]. [[They|Ellas]] [[are|son]] [[students|estudiantes]]. [[We|Nosotros]] [[have|tenemos]] [[a|un]] [[dog|perro]]. [[Its|Su]] [[name|nombre]] [[is|es]] [[Rex|Rex]]. [[We|Nosotros]] [[are|somos]] [[a|una]] [[very|muy]] [[happy|feliz]] [[family|familia]].",
    "content": {
      "title": "Lectura: La Familia de Peter",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[the|la]] [[relationship|relación]] [[between|entre]] [[Anna|Anna]] [[and|y]] [[Mary|Mary]]?",
          "options": ["[[They are friends|Son amigas]]", "[[They are sisters|Son hermanas]]", "[[They are mother and daughter|Son madre e hija]]"],
          "correctAnswer": 1,
          "explanation": "Peter dice: 'I have two sisters, Anna and Mary'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e52.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Peter|Peter]]. [[I|Yo]] [[want|quiero]] [[to|a]] [[tell|decir]] [[you|te]] [[about|sobre]] [[my|mi]] [[family|familia]]. [[My|Mi]] [[father's|del padre]] [[name|nombre]] [[is|es]] [[Robert|Robert]]. [[He|Él]] [[is|tiene]] [[55|55]] [[years|años]] [[old|de edad]] [[and|y]] [[he|él]] [[is|es]] [[an|un]] [[engineer|ingeniero]]. [[My|Mi]] [[mother's|de la madre]] [[name|nombre]] [[is|es]] [[Sarah|Sarah]]. [[She|Ella]] [[is|tiene]] [[52|52]] [[and|y]] [[she|ella]] [[is|es]] [[a|una]] [[nurse|enfermera]]. [[I|Yo]] [[have|tengo]] [[two|dos]] [[sisters|hermanas]], [[Anna|Anna]] [[and|y]] [[Mary|Mary]]. [[Anna|Anna]] [[is|tiene]] [[20|20]] [[and|y]] [[Mary|Mary]] [[is|tiene]] [[18|18]]. [[They|Ellas]] [[are|son]] [[students|estudiantes]]. [[We|Nosotros]] [[have|tenemos]] [[a|un]] [[dog|perro]]. [[Its|Su]] [[name|nombre]] [[is|es]] [[Rex|Rex]]. [[We|Nosotros]] [[are|somos]] [[a|una]] [[very|muy]] [[happy|feliz]] [[family|familia]].",
    "content": {
      "title": "Lectura: La Familia de Peter",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[How|Cómo]] [[can|podemos]] [[we|nosotros]] [[describe|describir]] [[Peter's|la familia de Peter]] [[family|familia]]?",
          "options": ["[[They are a small family|Son una familia pequeña]]", "[[They live in a big city|Viven en una gran ciudad]]", "[[They are happy|Son felices]]"],
          "correctAnswer": 2,
          "explanation": "Peter termina diciendo: 'We are a very happy family'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e53.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Peter|Peter]]. [[I|Yo]] [[want|quiero]] [[to|a]] [[tell|decir]] [[you|te]] [[about|sobre]] [[my|mi]] [[family|familia]]. [[My|Mi]] [[father's|del padre]] [[name|nombre]] [[is|es]] [[Robert|Robert]]. [[He|Él]] [[is|tiene]] [[55|55]] [[years|años]] [[old|de edad]] [[and|y]] [[he|él]] [[is|es]] [[an|un]] [[engineer|ingeniero]]. [[My|Mi]] [[mother's|de la madre]] [[name|nombre]] [[is|es]] [[Sarah|Sarah]]. [[She|Ella]] [[is|tiene]] [[52|52]] [[and|y]] [[she|ella]] [[is|es]] [[a|una]] [[nurse|enfermera]]. [[I|Yo]] [[have|tengo]] [[two|dos]] [[sisters|hermanas]], [[Anna|Anna]] [[and|y]] [[Mary|Mary]]. [[Anna|Anna]] [[is|tiene]] [[20|20]] [[and|y]] [[Mary|Mary]] [[is|tiene]] [[18|18]]. [[They|Ellas]] [[are|son]] [[students|estudiantes]]. [[We|Nosotros]] [[have|tenemos]] [[a|un]] [[dog|perro]]. [[Its|Su]] [[name|nombre]] [[is|es]] [[Rex|Rex]]. [[We|Nosotros]] [[are|somos]] [[a|una]] [[very|muy]] [[happy|feliz]] [[family|familia]].",
    "content": {
      "title": "Lectura: La Familia de Peter",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[Which|Cuál]] [[of|de]] [[these|estas]] [[statements|afirmaciones]] [[is|es]] [[true|verdadera]] [[about|sobre]] [[Robert|Robert]]?",
          "options": ["[[He helps sick people in a hospital|Ayuda a personas enfermas (nurse)]]", "[[He works with machines or structures|Trabaja con máquinas o estructuras (engineer)]]", "[[He is a student|Es estudiante]]"],
          "correctAnswer": 1,
          "explanation": "El texto dice que Robert es 'engineer' (ingeniero)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e54.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[Hi|Hola]], [[I'm|yo soy]] [[Linda|Linda]]. [[My|Mi]] [[family|familia]] [[is|es]] [[quite|bastante]] [[big|grande]]. [[I|Yo]] [[live|vivo]] [[with|con]] [[my|mis]] [[parents|padres]], [[my|mis]] [[two|dos]] [[brothers|hermanos]], [[and|y]] [[my|mi]] [[grandmother|abuela]]. [[My|Mis]] [[parents|padres]] [[are|son]] [[both|ambos]] [[teachers|profesores]] [[at|en]] [[a|una]] [[local|local]] [[school|escuela]]. [[My|Mi]] [[older|mayor]] [[brother|hermano]], [[Sam|Sam]], [[is|tiene]] [[25|25]] [[and|y]] [[he|él]] [[is|es]] [[a|un]] [[chef|cocinero]]. [[My|Mi]] [[younger|menor]] [[brother|hermano]], [[Tom|Tom]], [[is|tiene]] [[15|15]] [[and|y]] [[he|él]] [[is|es]] [[a|un]] [[student|estudiante]]. [[My|Mi]] [[grandmother|abuela]], [[Alice|Alice]], [[is|tiene]] [[80|80]] [[years|años]] [[old|de edad]]. [[She|Ella]] [[is|es]] [[very|muy]] [[active|activa]] [[and|y]] [[loves|ama]] [[gardening|la jardinería]]. [[We|Nosotros]] [[live|vivimos]] [[in|en]] [[a|una]] [[large|grande]] [[house|casa]] [[with|con]] [[a|un]] [[beautiful|hermoso]] [[garden|jardín]].",
    "content": {
      "title": "Lectura: La Familia de Linda",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[Alice's|el hobby de Alice]] [[favorite|favorito]] [[activity|actividad]]?",
          "options": ["[[Cooking for the family|Cocinar para la familia]]", "[[Teaching at school|Enseñar en la escuela]]", "[[Taking care of the garden|Cuidar el jardín]]"],
          "correctAnswer": 2,
          "explanation": "El texto dice: 'loves gardening' (le encanta la jardinería)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e55.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[Hi|Hola]], [[I'm|yo soy]] [[Linda|Linda]]. [[My|Mi]] [[family|familia]] [[is|es]] [[quite|bastante]] [[big|grande]]. [[I|Yo]] [[live|vivo]] [[with|con]] [[my|mis]] [[parents|padres]], [[my|mis]] [[two|dos]] [[brothers|hermanos]], [[and|y]] [[my|mi]] [[grandmother|abuela]]. [[My|Mis]] [[parents|padres]] [[are|son]] [[both|ambos]] [[teachers|profesores]] [[at|en]] [[a|una]] [[local|local]] [[school|escuela]]. [[My|Mi]] [[older|mayor]] [[brother|hermano]], [[Sam|Sam]], [[is|tiene]] [[25|25]] [[and|y]] [[he|él]] [[is|es]] [[a|un]] [[chef|cocinero]]. [[My|Mi]] [[younger|menor]] [[brother|hermano]], [[Tom|Tom]], [[is|tiene]] [[15|15]] [[and|y]] [[he|él]] [[is|es]] [[a|un]] [[student|estudiante]]. [[My|Mi]] [[grandmother|abuela]], [[Alice|Alice]], [[is|tiene]] [[80|80]] [[years|años]] [[old|de edad]]. [[She|Ella]] [[is|es]] [[very|muy]] [[active|activa]] [[and|y]] [[loves|ama]] [[gardening|la jardinería]]. [[We|Nosotros]] [[live|vivimos]] [[in|en]] [[a|una]] [[large|grande]] [[house|casa]] [[with|con]] [[a|un]] [[beautiful|hermoso]] [[garden|jardín]].",
    "content": {
      "title": "Lectura: La Familia de Linda",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[generations|generaciones]] [[live|viven]] [[together|juntas]] [[in|en]] [[Linda's|la casa de Linda]] [[house|casa]]?",
          "options": ["[[Two generations|Dos generaciones]]", "[[Three generations|Tres generaciones]]", "[[One generation|Una generación]]"],
          "correctAnswer": 1,
          "explanation": "Viven Linda y sus hermanos (1), sus padres (2) y su abuela (3)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e56.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e57",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[Hi|Hola]], [[I'm|yo soy]] [[Linda|Linda]]. [[My|Mi]] [[family|familia]] [[is|es]] [[quite|bastante]] [[big|grande]]. [[I|Yo]] [[live|vivo]] [[with|con]] [[my|mis]] [[parents|padres]], [[my|mis]] [[two|dos]] [[brothers|hermanos]], [[and|y]] [[my|mi]] [[grandmother|abuela]]. [[My|Mis]] [[parents|padres]] [[are|son]] [[both|ambos]] [[teachers|profesores]] [[at|en]] [[a|una]] [[local|local]] [[school|escuela]]. [[My|Mi]] [[older|mayor]] [[brother|hermano]], [[Sam|Sam]], [[is|tiene]] [[25|25]] [[and|y]] [[he|él]] [[is|es]] [[a|un]] [[chef|cocinero]]. [[My|Mi]] [[younger|menor]] [[brother|hermano]], [[Tom|Tom]], [[is|tiene]] [[15|15]] [[and|y]] [[he|él]] [[is|es]] [[a|un]] [[student|estudiante]]. [[My|Mi]] [[grandmother|abuela]], [[Alice|Alice]], [[is|tiene]] [[80|80]] [[years|años]] [[old|de edad]]. [[She|Ella]] [[is|es]] [[very|muy]] [[active|activa]] [[and|y]] [[loves|ama]] [[gardening|la jardinería]]. [[We|Nosotros]] [[live|vivimos]] [[in|en]] [[a|una]] [[large|grande]] [[house|casa]] [[with|con]] [[a|un]] [[beautiful|hermoso]] [[garden|jardín]].",
    "content": {
      "title": "Lectura: La Familia de Linda",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[do|trabajan]] [[Linda's|los padres de Linda]] [[parents|padres]] [[work|trabajar]]?",
          "options": ["[[At a local school|En una escuela local]]", "[[In a restaurant|En un restaurante]]", "[[In a garden|En un jardín]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'My parents are both teachers at a local school'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e57.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[Hi|Hola]], [[I'm|yo soy]] [[Linda|Linda]]. [[My|Mi]] [[family|familia]] [[is|es]] [[quite|bastante]] [[big|grande]]. [[I|Yo]] [[live|vivo]] [[with|con]] [[my|mis]] [[parents|padres]], [[my|mis]] [[two|dos]] [[brothers|hermanos]], [[and|y]] [[my|mi]] [[grandmother|abuela]]. [[My|Mis]] [[parents|padres]] [[are|son]] [[both|ambos]] [[teachers|profesores]] [[at|en]] [[a|una]] [[local|local]] [[school|escuela]]. [[My|Mi]] [[older|mayor]] [[brother|hermano]], [[Sam|Sam]], [[is|tiene]] [[25|25]] [[and|y]] [[he|él]] [[is|es]] [[a|un]] [[chef|cocinero]]. [[My|Mi]] [[younger|menor]] [[brother|hermano]], [[Tom|Tom]], [[is|tiene]] [[15|15]] [[and|y]] [[he|él]] [[is|es]] [[a|un]] [[student|estudiante]]. [[My|Mi]] [[grandmother|abuela]], [[Alice|Alice]], [[is|tiene]] [[80|80]] [[years|años]] [[old|de edad]]. [[She|Ella]] [[is|es]] [[very|muy]] [[active|activa]] [[and|y]] [[loves|ama]] [[gardening|la jardinería]]. [[We|Nosotros]] [[live|vivimos]] [[in|en]] [[a|una]] [[large|grande]] [[house|casa]] [[with|con]] [[a|un]] [[beautiful|hermoso]] [[garden|jardín]].",
    "content": {
      "title": "Lectura: La Familia de Linda",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[the|la]] [[age|edad]] [[difference|diferencia]] [[between|entre]] [[Sam|Sam]] [[and|y]] [[Tom|Tom]]?",
          "options": ["[[5 years|5 años]]", "[[10 years|10 años]]", "[[15 years|15 años]]"],
          "correctAnswer": 1,
          "explanation": "Sam tiene 25 y Tom tiene 15. La diferencia es de 10 años."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e58.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[The|La]] [[Miller|Miller]] [[family|familia]] [[lives|vive]] [[in|en]] [[New York|Nueva York]]. [[Mr.|Sr.]] [[Miller|Miller]] [[is|es]] [[a|un]] [[lawyer|abogado]] [[and|y]] [[Mrs.|Sra.]] [[Miller|Miller]] [[is|es]] [[an|una]] [[artist|artista]]. [[They|Ellos]] [[have|tienen]] [[one|un]] [[son|hijo]], [[Leo|Leo]], [[and|y]] [[one|una]] [[daughter|hija]], [[Mia|Mia]]. [[Leo|Leo]] [[is|tiene]] [[12|12]] [[and|y]] [[Mia|Mia]] [[is|tiene]] [[9|9]]. [[They|Ellos]] [[also|también]] [[have|tienen]] [[a|un]] [[cat|gato]] [[named|llamado]] [[Luna|Luna]]. [[Every|Cada]] [[Sunday|domingo]], [[the|la]] [[family|familia]] [[visits|visita]] [[the|a los]] [[grandparents|abuelos]] [[in|en]] [[the|el]] [[countryside|campo]]. [[They|Ellos]] [[love|aman]] [[spending|pasar]] [[time|tiempo]] [[together|juntos]] [[outdoors|al aire libre]].",
    "content": {
      "title": "Lectura: La Familia Miller",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[do|viven]] [[the|los]] [[grandparents|abuelos]] [[live|vivir]]?",
          "options": ["[[In New York|En Nueva York]]", "[[In a big house|En una casa grande]]", "[[In the countryside|En el campo]]"],
          "correctAnswer": 2,
          "explanation": "El texto dice: 'the family visits the grandparents in the countryside'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e59.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "[[The|La]] [[Miller|Miller]] [[family|familia]] [[lives|vive]] [[in|en]] [[New York|Nueva York]]. [[Mr.|Sr.]] [[Miller|Miller]] [[is|es]] [[a|un]] [[lawyer|abogado]] [[and|y]] [[Mrs.|Sra.]] [[Miller|Miller]] [[is|es]] [[an|una]] [[artist|artista]]. [[They|Ellos]] [[have|tienen]] [[one|un]] [[son|hijo]], [[Leo|Leo]], [[and|y]] [[one|una]] [[daughter|hija]], [[Mia|Mia]]. [[Leo|Leo]] [[is|tiene]] [[12|12]] [[and|y]] [[Mia|Mia]] [[is|tiene]] [[9|9]]. [[They|Ellos]] [[also|también]] [[have|tienen]] [[a|un]] [[cat|gato]] [[named|llamado]] [[Luna|Luna]]. [[Every|Cada]] [[Sunday|domingo]], [[the|la]] [[family|familia]] [[visits|visita]] [[the|a los]] [[grandparents|abuelos]] [[in|en]] [[the|el]] [[countryside|campo]]. [[They|Ellos]] [[love|aman]] [[spending|pasar]] [[time|tiempo]] [[together|juntos]] [[outdoors|al aire libre]].",
    "content": {
      "title": "Lectura: La Familia Miller",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[does|hace]] [[Mrs. Miller|la Sra. Miller]] [[do|hacer]]?",
          "options": ["[[She is a lawyer|Es abogada]]", "[[She is an artist|Es artista]]", "[[She is a student|Es estudiante]]"],
          "correctAnswer": 1,
          "explanation": "El texto menciona: 'Mrs. Miller is an artist'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e60.mp3",
    "topicName": "Reading"
  }
];
