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
    "transcript": "Mother. Father. Parents. Son. Daughter. Brother. Sister. Siblings. Grandfather. Grandmother.",
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
    "transcript": "My mother and my father are my parents.",
    "content": {
      "title": "Los Padres",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[My|Mi]] [[mother|madre]] [[and|y]] [[my|mi]] [[father|padre]] [[are|son]] [[my|mis]] (_____).",
          "options": ["[[parents|padres]]", "[[siblings|hermanos]]", "[[grandparents|abuelos]]"],
          "correctAnswer": 0,
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
    "transcript": "I have one brother and two sisters. They are my siblings.",
    "content": {
      "title": "Hermanos",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] [[one|un]] [[brother|hermano]] [[and|y]] [[two|dos]] [[sisters|hermanas]]. [[They|Ellos]] [[are|son]] [[my|mis]] (_____).",
          "options": ["[[siblings|hermanos]]", "[[parents|padres]]", "[[cousins|primos]]"],
          "correctAnswer": 0,
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
    "transcript": "This is my daughter.",
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
    "transcript": "Is he your son?",
    "content": {
      "title": "Tu hijo",
      "instructions": "Elige el posesivo correcto.",
      "questions": [
        {
          "question": "[[Is|¿Es]] [[he|él]] (_____) [[son|hijo]]?",
          "options": ["[[your|tu]]", "[[you|tú]]", "[[he|él]]"],
          "correctAnswer": 0,
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
    "transcript": "My grandfather is seventy years old.",
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
    "transcript": "My grandmother lives in London.",
    "content": {
      "title": "Vivir en Londres",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[My|Mi]] (_____) [[lives|vive]] [[in|en]] [[London|Londres]].",
          "options": ["[[grandmother|abuela]]", "[[grandparents|abuelos]]", "[[grandfather|abuelo]]"],
          "correctAnswer": 0,
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
    "transcript": "Are they your parents?",
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
    "transcript": "A son and a daughter are children.",
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
    "transcript": "My brother is a student.",
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
    "transcript": "Uncle. Aunt. Cousin. Nephew. Niece. Husband. Wife. Father-in-law. Mother-in-law. Relatives.",
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
    "transcript": "His uncle is from Italy.",
    "content": {
      "title": "Su tío (de él)",
      "instructions": "Elige el posesivo correcto.",
      "questions": [
        {
          "question": "(_____) [[uncle|tío]] [[is|es]] [[from|de]] [[Italy|Italia]].",
          "options": ["[[His|Su (de él)]]", "[[Her|Su (de ella)]]", "[[He|Él]]"],
          "correctAnswer": 0,
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
    "transcript": "Her aunt is a doctor.",
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
    "transcript": "My cousin is my aunt's son.",
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
    "transcript": "Mark is married. His wife is Anna.",
    "content": {
      "title": "La esposa de Mark",
      "instructions": "Elige el posesivo correcto.",
      "questions": [
        {
          "question": "[[Mark|Mark]] [[is|está]] [[married|casado]]. (_____) [[wife|esposa]] [[is|es]] [[Anna|Anna]].",
          "options": ["[[His|Su (de él)]]", "[[Her|Su (de ella)]]", "[[He|Él]]"],
          "correctAnswer": 0,
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
    "transcript": "Do you have any cousins?",
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
    "transcript": "My mother's sister is my aunt.",
    "content": {
      "title": "Relaciones",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[My|Mi]] [[mother's|de mi madre]] [[sister|hermana]] [[is|es]] [[my|mi]] (_____).",
          "options": ["[[aunt|tía]]", "[[uncle|tío]]", "[[niece|sobrina]]"],
          "correctAnswer": 0,
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
    "transcript": "My father's brother is my uncle.",
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
    "transcript": "Is her husband a teacher?",
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
    "topic": "Extended Family",
    "difficulty": "easy",
    "transcript": "My sister's daughter is my niece.",
    "content": {
      "title": "Sobrina",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[My|Mi]] [[sister's|de mi hermana]] [[daughter|hija]] [[is|es]] [[my|mi]] (_____).",
          "options": ["[[niece|sobrina]]", "[[nephew|sobrino]]", "[[cousin|prima]]"],
          "correctAnswer": 0,
          "explanation": "La hija de tu hermano o hermana es tu sobrina (niece)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e20.mp3",
    "topicName": "Vocabulary"
  },

  // ==========================================
  // STATUS & PLURALS (21-30)
  // ==========================================
  {
    "id": "a1-u6-e21",
    "type": "flashcard",
    "level": "A1",
    "topic": "Marital Status",
    "difficulty": "easy",
    "transcript": "Single. Married. Divorced. Widowed. Engaged. Relationship.",
    "content": {
      "title": "Estado Civil",
      "instructions": "Aprende vocabulario sobre relaciones.",
      "items": [
        { "front": "[[Single|Soltero/a]]", "back": "Soltero/a" },
        { "front": "[[Married|Casado/a]]", "back": "Casado/a" },
        { "front": "[[Divorced|Divorciado/a]]", "back": "Divorciado/a" },
        { "front": "[[Widowed|Viudo/a]]", "back": "Viudo/a" },
        { "front": "[[Engaged|Comprometido/a]]", "back": "Comprometido/a" },
        { "front": "[[In a relationship|En una relación]]", "back": "En una relación" }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e21.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e22",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Marital Status",
    "difficulty": "easy",
    "transcript": "I am not married. I am single.",
    "content": {
      "title": "Estoy soltero",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|soy]] [[not|no]] [[married|casado]]. [[I|Yo]] [[am|estoy]] (_____).",
          "options": ["[[single|soltero]]", "[[divorced|divorciado]]", "[[alone|solo]]"],
          "correctAnswer": 0,
          "explanation": "Si no estás casado, estás soltero (single)."
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
    "topic": "Marital Status",
    "difficulty": "easy",
    "transcript": "Is your brother single?",
    "content": {
      "title": "¿Tu hermano es soltero?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is|¿Es]] [[your|tu]] [[brother|hermano]] [[single|soltero]]?",
      "words": ["[[single|soltero]]?", "[[brother|hermano]]", "[[Is|¿Es]]", "[[your|tu]]"],
      "explanation": "Estructura de pregunta simple."
    },
    "audioUrl": "audio/a1/unit-6/e23.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "My grandparents have five grandchildren.",
    "content": {
      "title": "Nietos",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[My|Mis]] [[grandparents|abuelos]] [[have|tienen]] [[five|cinco]] (_____).",
          "options": ["[[grandchildren|nietos]]", "[[grandson|nieto]]", "[[granddaughter|nieta]]"],
          "correctAnswer": 0,
          "explanation": "'Grandchildren' es el plural para nietos y nietas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e24.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e25",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "Are they in a relationship?",
    "content": {
      "title": "¿Están en una relación?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Are|¿Están]] [[they|ellos]] [[in|en]] [[a|una]] [[relationship|relación]]?",
      "words": ["[[relationship|relación]]?", "[[in|en]]", "[[Are|¿Están]]", "[[they|ellos]]", "[[a|una]]"],
      "explanation": "Frase común para preguntar por el estado sentimental."
    },
    "audioUrl": "audio/a1/unit-6/e25.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "We have two sons and one daughter. We have three children.",
    "content": {
      "title": "Total de hijos",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[We|Nosotros]] [[have|tenemos]] [[two|dos]] [[sons|hijos]] [[and|y]] [[one|una]] [[daughter|hija]]. [[We|Nosotros]] [[have|tenemos]] [[three|tres]] (_____).",
          "options": ["[[children|hijos]]", "[[boys|niños]]", "[[parents|padres]]"],
          "correctAnswer": 0,
          "explanation": "'Children' engloba a hijos e hijas."
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
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "I am an only child.",
    "content": {
      "title": "Hijo único",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[I|Yo]] [[am|soy]] [[an|un]] [[only|único]] [[child|hijo]].",
      "words": ["[[child|hijo]].", "[[only|único]]", "[[am|soy]]", "[[I|Yo]]", "[[an|un]]"],
      "explanation": "'Only child' es la expresión correcta para alguien sin hermanos."
    },
    "audioUrl": "audio/a1/unit-6/e27.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e28",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Marital Status",
    "difficulty": "easy",
    "transcript": "They are engaged. The wedding is in June.",
    "content": {
      "title": "Comprometidos",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[They|Ellos]] [[are|están]] (_____). [[The|La]] [[wedding|boda]] [[is|es]] [[in|en]] [[June|Junio]].",
          "options": ["[[engaged|comprometidos]]", "[[married|casados]]", "[[single|solteros]]"],
          "correctAnswer": 0,
          "explanation": "Si la boda es pronto, están comprometidos (engaged)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e28.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e29",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "My parents are from Spain.",
    "content": {
      "title": "Mis padres son de España",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My|Mis]] [[parents|padres]] [[are|son]] [[from|de]] [[Spain|España]].",
      "words": ["[[Spain|España]].", "[[are|son]]", "[[parents|padres]]", "[[from|de]]", "[[My|Mis]]"],
      "explanation": "Sujeto plural + are."
    },
    "audioUrl": "audio/a1/unit-6/e29.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e30",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "easy",
    "transcript": "My siblings are very tall.",
    "content": {
      "title": "Mis hermanos son altos",
      "instructions": "Elige el verbo correcto.",
      "questions": [
        {
          "question": "[[My|Mis]] [[siblings|hermanos]] (_____) [[very|muy]] [[tall|altos]].",
          "options": ["[[are|son]]", "[[is|es]]", "[[am|soy]]"],
          "correctAnswer": 0,
          "explanation": "'Siblings' es plural, por lo que usamos 'are'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e30.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // POSSESSIVE 'S (31-40)
  // ==========================================
  {
    "id": "a1-u6-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "Peter's car is blue.",
    "content": {
      "title": "El coche de Peter",
      "instructions": "Elige la forma correcta.",
      "questions": [
        {
          "question": "(_____) [[car|coche]] [[is|es]] [[blue|azul]].",
          "options": ["[[Peter's|De Peter]]", "[[Peter|Peter]]", "[[Peters|Peters]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 's para indicar que el coche pertenece a Peter."
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
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "What is your father's name?",
    "content": {
      "title": "¿Cómo se llama tu padre?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[What|Cuál]] [[is|es]] [[your|tu]] [[father's|de tu padre]] [[name|nombre]]?",
      "words": ["[[name|nombre]]?", "[[is|es]]", "[[father's|de tu padre]]", "[[What|Cuál]]", "[[your|tu]]"],
      "explanation": "Pregunta común usando el genitivo sajón."
    },
    "audioUrl": "audio/a1/unit-6/e32.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "My sister's house is big.",
    "content": {
      "title": "La casa de mi hermana",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[My|Mi]] (_____) [[house|casa]] [[is|es]] [[big|grande]].",
          "options": ["[[sister's|de mi hermana]]", "[[sisters|hermanas]]", "[[sister|hermana]]"],
          "correctAnswer": 0,
          "explanation": "Necesitamos indicar posesión: sister's = de la hermana."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e33.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e34",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "The teacher's book is on the table.",
    "content": {
      "title": "El libro del profesor",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[The|El]] [[teacher's|del profesor]] [[book|libro]] [[is|está]] [[on|en]] [[the|la]] [[table|mesa]].",
      "words": ["[[table|mesa]].", "[[book|libro]]", "[[is|está]]", "[[teacher's|del profesor]]", "[[on|en]]", "[[The|El]]", "[[the|la]]"],
      "explanation": "Recuerda: Posesor + 's + Objeto poseído."
    },
    "audioUrl": "audio/a1/unit-6/e34.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "That is my parents' room.",
    "content": {
      "title": "La habitación de mis padres",
      "instructions": "Elige la forma plural correcta.",
      "questions": [
        {
          "question": "[[That|Esa]] [[is|es]] [[my|mi]] (_____) [[room|habitación]].",
          "options": ["[[parents'|de mis padres]]", "[[parents's|de mis padres]]", "[[parent's|de mi padre/madre]]"],
          "correctAnswer": 0,
          "explanation": "Para plurales que terminan en -s, solo añadimos el apóstrofo al final: parents'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e35.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e36",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "Who is Mary's brother?",
    "content": {
      "title": "¿Quién es el hermano de Mary?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Who|Quién]] [[is|es]] [[Mary's|de Mary]] [[brother|hermano]]?",
      "words": ["[[brother|hermano]]?", "[[is|es]]", "[[Mary's|de Mary]]", "[[Who|Quién]]"],
      "explanation": "Pregunta sobre identidad familiar."
    },
    "audioUrl": "audio/a1/unit-6/e36.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "The cat's name is Fluffy.",
    "content": {
      "title": "El nombre del gato",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[The|El]] (_____) [[name|nombre]] [[is|es]] [[Fluffy|Fluffy]].",
          "options": ["[[cat's|del gato]]", "[[cats|gatos]]", "[[cat|gato]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 's también para animales."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e37.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e38",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "My son's teacher is very kind.",
    "content": {
      "title": "La profesora de mi hijo",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My|El]] [[son's|de mi hijo]] [[teacher|profesor]] [[is|es]] [[very|muy]] [[kind|amable]].",
      "words": ["[[kind|amable]].", "[[teacher|profesor]]", "[[is|es]]", "[[son's|de mi hijo]]", "[[very|muy]]", "[[My|El]]"],
      "explanation": "El posesivo recae sobre 'son'."
    },
    "audioUrl": "audio/a1/unit-6/e38.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "Are those John's keys?",
    "content": {
      "title": "¿Son las llaves de John?",
      "instructions": "Elige la opción correcta.",
      "questions": [
        {
          "question": "[[Are|¿Son]] [[those|esas]] (_____) [[keys|llaves]]?",
          "options": ["[[John's|de John]]", "[[Johns|Johns]]", "[[John|John]]"],
          "correctAnswer": 0,
          "explanation": "Posesor (John) + 's + Objeto (keys)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e39.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e40",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "medium",
    "transcript": "Anna's mother is a nurse.",
    "content": {
      "title": "La madre de Anna",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[Anna's|De Anna]] [[mother|madre]] [[is|es]] [[a|una]] [[nurse|enfermera]].",
      "words": ["[[nurse|enfermera]].", "[[mother|madre]]", "[[is|es]]", "[[Anna's|De Anna]]", "[[a|una]]"],
      "explanation": "Anna's mother = la madre de Anna."
    },
    "audioUrl": "audio/a1/unit-6/e40.mp3",
    "topicName": "Grammar"
  },

  // ==========================================
  // OUR/THEIR & COMPLEX RELATIONS (41-50)
  // ==========================================
  {
    "id": "a1-u6-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "transcript": "We love our grandparents.",
    "content": {
      "title": "Nuestros abuelos",
      "instructions": "Elige el posesivo correcto.",
      "questions": [
        {
          "question": "[[We|Nosotros]] [[love|amamos]] (_____) [[grandparents|abuelos]].",
          "options": ["[[our|nuestros]]", "[[their|sus]]", "[[your|vuestros]]"],
          "correctAnswer": 0,
          "explanation": "'Our' es el posesivo para 'we' (nosotros)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e41.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e42",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "transcript": "Their children are at school.",
    "content": {
      "title": "Sus hijos están en la escuela",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[Their|Sus]] [[children|hijos]] [[are|están]] [[at|en la]] [[school|escuela]].",
      "words": ["[[school|escuela]].", "[[children|hijos]]", "[[are|están]]", "[[Their|Sus]]", "[[at|en la]]"],
      "explanation": "'Their' se usa cuando los dueños son 'ellos' (they)."
    },
    "audioUrl": "audio/a1/unit-6/e42.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "My husband's mother is my mother-in-law.",
    "content": {
      "title": "La suegra",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[My|Mi]] [[husband's|de mi esposo]] [[mother|madre]] [[is|es]] [[my|mi]] (_____).",
          "options": ["[[mother-in-law|suegra]]", "[[stepmother|madrastra]]", "[[aunt|tía]]"],
          "correctAnswer": 0,
          "explanation": "La madre de tu esposo/a es tu suegra (mother-in-law)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e43.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e44",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Extended Family",
    "difficulty": "medium",
    "transcript": "Is that your father-in-law?",
    "content": {
      "title": "¿Es ese tu suegro?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is|¿Es]] [[that|ese]] [[your|tu]] [[father-in-law|suegro]]?",
      "words": ["[[father-in-law|suegro]]?", "[[your|tu]]", "[[Is|¿Es]]", "[[that|ese]]"],
      "explanation": "Pregunta sobre un pariente político."
    },
    "audioUrl": "audio/a1/unit-6/e44.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e45",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "transcript": "The dog is eating its food.",
    "content": {
      "title": "Su comida (del perro)",
      "instructions": "Elige el posesivo correcto.",
      "questions": [
        {
          "question": "[[The|El]] [[dog|perro]] [[is|está]] [[eating|comiendo]] (_____) [[food|comida]].",
          "options": ["[[its|su]]", "[[his|su]]", "[[her|su]]"],
          "correctAnswer": 0,
          "explanation": "Usamos 'its' para posesión de animales o cosas."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e45.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e46",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "My relatives live in the United States.",
    "content": {
      "title": "Mis parientes",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My|Mis]] [[relatives|parientes]] [[live|viven]] [[in|en]] [[the|los]] [[United|Estados]] [[States|Unidos]].",
      "words": ["[[States|Unidos]].", "[[live|viven]]", "[[relatives|parientes]]", "[[in|en]]", "[[My|Mis]]", "[[the|los]]", "[[United|Estados]]"],
      "explanation": "'Relatives' es el término general para todos los miembros de la familia."
    },
    "audioUrl": "audio/a1/unit-6/e46.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "Your brother's son is your nephew.",
    "content": {
      "title": "Sobrino",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[Your|Tu]] [[brother's|de tu hermano]] [[son|hijo]] [[is|es]] [[your|tu]] (_____).",
          "options": ["[[nephew|sobrino]]", "[[niece|sobrina]]", "[[cousin|primo]]"],
          "correctAnswer": 0,
          "explanation": "El hijo de un hermano/a es el sobrino (nephew)."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e47.mp3",
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u6-e48",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "transcript": "Our house is small but nice.",
    "content": {
      "title": "Nuestra casa",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[Our|Nuestra]] [[house|casa]] [[is|es]] [[small|pequeña]] [[but|pero]] [[nice|agradable]].",
      "words": ["[[nice|agradable]].", "[[house|casa]]", "[[is|es]]", "[[small|pequeña]]", "[[but|pero]]", "[[Our|Nuestra]]"],
      "explanation": "Uso del posesivo 'our' (nuestra)."
    },
    "audioUrl": "audio/a1/unit-6/e48.mp3",
    "topicName": "Grammar"
  },
  {
    "id": "a1-u6-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Family Members",
    "difficulty": "medium",
    "transcript": "The daughter of my daughter is my granddaughter.",
    "content": {
      "title": "La nieta",
      "instructions": "Elige la palabra correcta.",
      "questions": [
        {
          "question": "[[The|La]] [[daughter|hija]] [[of|de]] [[my|mi]] [[daughter|hija]] [[is|es]] [[my|mi]] (_____).",
          "options": ["[[granddaughter|nieta]]", "[[grandson|nieto]]", "[[niece|sobrina]]"],
          "correctAnswer": 0,
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
    "transcript": "Is their daughter seven years old?",
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
    "transcript": "Hello! My name is Peter. I want to tell you about my family. My father's name is Robert. He is 55 years old and he is an engineer. My mother's name is Sarah. She is 52 and she is a nurse. I have two sisters, Anna and Mary. Anna is 20 and Mary is 18. They are students. We have a dog. Its name is Rex. We are a very happy family.",
    "content": {
      "title": "Lectura: La Familia de Peter",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[the|la]] [[relationship|relación]] [[between|entre]] [[Anna|Anna]] [[and|y]] [[Mary|Mary]]?",
          "options": ["[[They are sisters|Son hermanas]]", "[[They are mother and daughter|Son madre e hija]]", "[[They are friends|Son amigas]]"],
          "correctAnswer": 0,
          "explanation": "Peter dice: 'I have two sisters, Anna and Mary'."
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
    "transcript": "Hello! My name is Peter. I want to tell you about my family. My father's name is Robert. He is 55 years old and he is an engineer. My mother's name is Sarah. She is 52 and she is a nurse. I have two sisters, Anna and Mary. Anna is 20 and Mary is 18. They are students. We have a dog. Its name is Rex. We are a very happy family.",
    "content": {
      "title": "Lectura: La Familia de Peter",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[Which|Cuál]] [[of|de]] [[these|estas]] [[statements|afirmaciones]] [[is|es]] [[true|verdadera]] [[about|sobre]] [[Robert|Robert]]?",
          "options": ["[[He works with machines or structures|Trabaja con máquinas o estructuras (engineer)]]", "[[He helps sick people in a hospital|Ayuda a personas enfermas (nurse)]]", "[[He is a student|Es estudiante]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice que Robert es 'engineer' (ingeniero)."
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
    "transcript": "Hello! My name is Peter. I want to tell you about my family. My father's name is Robert. He is 55 years old and he is an engineer. My mother's name is Sarah. She is 52 and she is a nurse. I have two sisters, Anna and Mary. Anna is 20 and Mary is 18. They are students. We have a dog. Its name is Rex. We are a very happy family.",
    "content": {
      "title": "Lectura: La Familia de Peter",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[Who|Quién]] [[is|es]] [[the|la]] [[youngest|más joven]] [[person|persona]] [[mentioned|mencionada]] [[in|en]] [[the|la]] [[family|familia]]?",
          "options": ["[[Mary|Mary]]", "[[Anna|Anna]]", "[[Peter|Peter]]"],
          "correctAnswer": 0,
          "explanation": "Mary tiene 18 años, mientras que Anna tiene 20. El texto no menciona la edad de Peter pero Mary es la menor de las hermanas."
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
    "transcript": "Hello! My name is Peter. I want to tell you about my family. My father's name is Robert. He is 55 years old and he is an engineer. My mother's name is Sarah. She is 52 and she is a nurse. I have two sisters, Anna and Mary. Anna is 20 and Mary is 18. They are students. We have a dog. Its name is Rex. We are a very happy family.",
    "content": {
      "title": "Lectura: La Familia de Peter",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[How|Cómo]] [[can|podemos]] [[we|nosotros]] [[describe|describir]] [[Peter's|la familia de Peter]] [[family|familia]]?",
          "options": ["[[They are happy|Son felices]]", "[[They are a small family|Son una familia pequeña]]", "[[They live in a big city|Viven en una gran ciudad]]"],
          "correctAnswer": 0,
          "explanation": "Peter termina diciendo: 'We are a very happy family'."
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
    "transcript": "Hi, I'm Linda. My family is quite big. I live with my parents, my two brothers, and my grandmother. My parents are both teachers at a local school. My older brother, Sam, is 25 and he is a chef. My younger brother, Tom, is 15 and he is a student. My grandmother, Alice, is 80 years old. She is very active and loves gardening. We live in a large house with a beautiful garden.",
    "content": {
      "title": "Lectura: La Familia de Linda",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[How|Cuántas]] [[many|muchas]] [[generations|generaciones]] [[live|viven]] [[together|juntas]] [[in|en]] [[Linda's|la casa de Linda]] [[house|casa]]?",
          "options": ["[[Three generations|Tres generaciones]]", "[[Two generations|Dos generaciones]]", "[[One generation|Una generación]]"],
          "correctAnswer": 0,
          "explanation": "Viven Linda y sus hermanos (1), sus padres (2) y su abuela (3)."
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
    "transcript": "Hi, I'm Linda. My family is quite big. I live with my parents, my two brothers, and my grandmother. My parents are both teachers at a local school. My older brother, Sam, is 25 and he is a chef. My younger brother, Tom, is 15 and he is a student. My grandmother, Alice, is 80 years old. She is very active and loves gardening. We live in a large house with a beautiful garden.",
    "content": {
      "title": "Lectura: La Familia de Linda",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[Alice's|el hobby de Alice]] [[favorite|favorito]] [[activity|actividad]]?",
          "options": ["[[Taking care of the garden|Cuidar el jardín]]", "[[Cooking for the family|Cocinar para la familia]]", "[[Teaching at school|Enseñar en la escuela]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'loves gardening' (le encanta la jardinería)."
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
    "transcript": "Hi, I'm Linda. My family is quite big. I live with my parents, my two brothers, and my grandmother. My parents are both teachers at a local school. My older brother, Sam, is 25 and he is a chef. My younger brother, Tom, is 15 and he is a student. My grandmother, Alice, is 80 years old. She is very active and loves gardening. We live in a large house with a beautiful garden.",
    "content": {
      "title": "Lectura: La Familia de Linda",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[What|Cuál]] [[is|es]] [[the|la]] [[age|edad]] [[difference|diferencia]] [[between|entre]] [[Sam|Sam]] [[and|y]] [[Tom|Tom]]?",
          "options": ["[[10 years|10 años]]", "[[5 years|5 años]]", "[[15 years|15 años]]"],
          "correctAnswer": 0,
          "explanation": "Sam tiene 25 y Tom tiene 15. La diferencia es de 10 años."
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
    "transcript": "Hi, I'm Linda. My family is quite big. I live with my parents, my two brothers, and my grandmother. My parents are both teachers at a local school. My older brother, Sam, is 25 and he is a chef. My younger brother, Tom, is 15 and he is a student. My grandmother, Alice, is 80 years old. She is very active and loves gardening. We live in a large house with a beautiful garden.",
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
    "audioUrl": "audio/a1/unit-6/e58.mp3",
    "topicName": "Reading"
  },
  {
    "id": "a1-u6-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "medium",
    "transcript": "The Miller family lives in New York. Mr. Miller is a lawyer and Mrs. Miller is an artist. They have one son, Leo, and one daughter, Mia. Leo is 12 and Mia is 9. They also have a cat named Luna. Every Sunday, the family visits the grandparents in the countryside. They love spending time together outdoors.",
    "content": {
      "title": "Lectura: La Familia Miller",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[What|Qué]] [[does|hace]] [[Mrs. Miller|la Sra. Miller]] [[do|hacer]]?",
          "options": ["[[She is an artist|Es artista]]", "[[She is a lawyer|Es abogada]]", "[[She is a student|Es estudiante]]"],
          "correctAnswer": 0,
          "explanation": "El texto menciona: 'Mrs. Miller is an artist'."
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
    "transcript": "The Miller family lives in New York. Mr. Miller is a lawyer and Mrs. Miller is an artist. They have one son, Leo, and one daughter, Mia. Leo is 12 and Mia is 9. They also have a cat named Luna. Every Sunday, the family visits the grandparents in the countryside. They love spending time together outdoors.",
    "content": {
      "title": "Lectura: La Familia Miller",
      "instructions": "Lee el texto atentamente en la pantalla anterior y responde.",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[do|viven]] [[the|los]] [[grandparents|abuelos]] [[live|vivir]]?",
          "options": ["[[In the countryside|En el campo]]", "[[In New York|En Nueva York]]", "[[In a big house|En una casa grande]]"],
          "correctAnswer": 0,
          "explanation": "El texto dice: 'the family visits the grandparents in the countryside'."
        }
      ]
    },
    "audioUrl": "audio/a1/unit-6/e60.mp3",
    "topicName": "Reading"
  }
];
