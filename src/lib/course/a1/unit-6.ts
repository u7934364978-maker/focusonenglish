import { Exercise } from '@/lib/exercise-generator';

export const UNIT_6_EXERCISES: Exercise[] = [
  // ==========================================
  // VOCABULARY: BASIC FAMILY (1-10)
  // ==========================================
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
      "question": "[[My mother and my father are my|Mi madre y mi padre son mis]] (____).",
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
    "transcript": "[[I have. They one brother and two sisters are my siblings|Yo tengo un hermano y dos hermanas. Ellos son mis hermanos]].",
    "content": {
      "title": "Hermanos",
      "instructions": "Elige la palabra correcta.",
      "question": "[[I have. They one brother and two sisters are my|Yo tengo un hermano y dos hermanas. Ellos son mis]] (____).",
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
    "transcript": "[[This is my daughter|Esta es mi hija]].",
    "content": {
      "title": "Mi hija",
      "instructions": "Ordena las palabras.",
      "correctSentence": "[[This is my daughter|Esta es mi hija]].",
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
    "transcript": "[[Is he your son|¿Es él tu hijo]]?",
    "content": {
      "title": "Tu hijo",
      "instructions": "Elige el posesivo correcto.",
      "question": "[[Is he|¿Es él]] (_____) [[son|hijo]]?",
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
    "transcript": "[[My grandfather is seventy years old|Mi abuelo tiene setenta años de edad]].",
    "content": {
      "title": "La edad de mi abuelo",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My grandfather is seventy years old|Mi abuelo tiene setenta años de edad]].",
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
    "transcript": "[[My grandmother lives in London|Mi abuela vive en Londres]].",
    "content": {
      "title": "Vivir en Londres",
      "instructions": "Elige la palabra correcta.",
      "question": "[[My in London|Mi]] (_____) [[lives|vive en Londres]].",
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
    "transcript": "[[Are they your parents|¿Son ellos tus padres]]?",
    "content": {
      "title": "Pregunta de familia",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Are they your parents|¿Son ellos tus padres]]?",
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
    "transcript": "[[A son and a daughter are children|Un hijo y una hija son hijos]].",
    "content": {
      "title": "Hijos e hijas",
      "instructions": "Elige la palabra correcta.",
      "question": "[[A son and a daughter are|Un hijo y una hija son]] (____).",
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
    "transcript": "[[My brother is a student|Mi hermano es un estudiante]].",
    "content": {
      "title": "Mi hermano es estudiante",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My brother is a student|Mi hermano es un estudiante]].",
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
    "id": "a1-u6-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Possessive Adjectives",
    "difficulty": "easy",
    "transcript": "[[His uncle is from Italy|Su tío es de Italia]].",
    "content": {
      "title": "Su tío (de él)",
      "instructions": "Elige el posesivo correcto.",
      "question": "(_____) [[uncle is from Italy|tío es de Italia]].",
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
    "transcript": "[[Her aunt is a doctor|Su tía es una doctora]].",
    "content": {
      "title": "Su tía (de ella)",
      "instructions": "Elige el posesivo correcto.",
      "question": "(_____) [[aunt is a doctor|tía es una doctora]].",
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
    "transcript": "[[My cousin is my aunt's son|Mi primo es mi de mi tía hijo]].",
    "content": {
      "title": "Definición de primo",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[My cousin is my aunt's son|Mi primo es mi de mi tía hijo]].",
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
    "transcript": "[[Mark is. His married wife is Anna|Mark está casado. Su esposa es Anna]].",
    "content": {
      "title": "La esposa de Mark",
      "instructions": "Elige el posesivo correcto.",
      "question": "[[Mark is married is|Mark está casado]]. (_____) [[wife Anna|esposa es Anna]].",
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
    "transcript": "[[Do you have any cousins|¿ tú tienes algunos primos]]?",
    "content": {
      "title": "¿Tienes primos?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Do you have any cousins|¿ tú tienes algunos primos]]?",
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
    "transcript": "[[My mother's sister is my aunt|Mi de la madre hermana es mi tía]].",
    "content": {
      "title": "Relaciones",
      "instructions": "Elige la palabra correcta.",
      "question": "[[My mother's sister is my|Mi de la madre hermana es mi]] (____).",
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
    "transcript": "[[My father's brother is my uncle|Mi del padre hermano es mi tío]].",
    "content": {
      "title": "Relaciones",
      "instructions": "Elige la palabra correcta.",
      "question": "[[My father's brother is my|Mi del padre hermano es mi]] (____).",
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
    "transcript": "[[Is her husband a teacher|¿Es su esposo un profesor]]?",
    "content": {
      "title": "¿Su esposo es profesor?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is her husband a teacher|¿Es su esposo un profesor]]?",
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
    "transcript": "[[My sister. She is not single is married|Mi hermana está no soltera. Ella está casada]].",
    "content": {
      "title": "Estado civil",
      "instructions": "Elige el adjetivo opuesto a 'single'.",
      "question": "[[My sister. She is not single is|Mi hermana está no soltera. Ella está]] (____).",
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
    "transcript": "[[This is my brother's car|Este es mi de mi hermano coche]].",
    "content": {
      "title": "Genitivo Sajón",
      "instructions": "Completa con el posesivo adecuado ('s).",
      "questions": [
        {
          "question": "[[This is my brother|Este es mi hermano]](_____) [[car|coche]].",
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
    "transcript": "[[They live with their grandparents|Ellos viven con sus abuelos]].",
    "content": {
      "title": "Posesivo plural",
      "instructions": "Selecciona el posesivo correcto para 'they'.",
      "question": "[[They live with|Ellos viven con]] (_____) [[grandparents|abuelos]].",
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
    "transcript": "[[His siblings are very young|Sus hermanos son muy jóvenes]].",
    "content": {
      "title": "Hermanos jóvenes",
      "instructions": "Ordena la oración.",
      "correctSentence": "[[His siblings are very young|Sus hermanos son muy jóvenes]].",
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
    "transcript": "[[Where is Anna's mother|Dónde está de Anna madre]]?",
    "content": {
      "title": "Pregunta de posesión",
      "instructions": "Elige la forma correcta.",
      "question": "[[Where is|¿Dónde está]] (____)?",
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
    "transcript": "[[My parents' car is blue|Mi de mis padres coche es azul]].",
    "content": {
      "title": "Posesivo plural acabado en 's'",
      "instructions": "Elige la opción correcta para 'los padres de mi'.",
      "question": "[[My is blue|Mi]] (_____) [[car|coche es azul]].",
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
    "transcript": "[[We love our family|Nosotros amamos nuestra familia]].",
    "content": {
      "title": "Nuestro",
      "instructions": "Completa con el posesivo de 'we'.",
      "questions": [
        {
          "question": "[[We love|Nosotros amamos]] (_____) [[family|familia]].",
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
    "transcript": "[[Your wife's sister is his sister-in-law|Su de la esposa de él hermana es su cuñada]].",
    "content": {
      "title": "Cuñada",
      "instructions": "Elige el término para cuñada.",
      "question": "[[The sister of his wife is his|La hermana de su esposa es su]] (____).",
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
    "transcript": "[[Whose is this photo|De quién es este foto]]?",
    "content": {
      "title": "Pregunta de quién",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Whose is this photo|De quién es este foto]]?",
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
    "transcript": "[[It is my father's|Es es de mi padre]].",
    "content": {
      "title": "Respuesta de posesión",
      "instructions": "Selecciona la respuesta correcta a 'Whose is this photo?'.",
      "question": "[[Whose is this photo|De quién es esta foto]]?",
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
    "transcript": "[[He has three cousins|Él tiene tres primos]].",
    "content": {
      "title": "Plural de primo",
      "instructions": "Escribe el plural de 'cousin'.",
      "questions": [
        {
          "question": "[[He has three|Él tiene tres]] (_____).",
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
    "transcript": "[[Are they single or married|¿Están ellos solteros o casados]]?",
    "content": {
      "title": "Pregunta de estado civil",
      "instructions": "Elige la conjunción correcta.",
      "question": "[[Are they single|¿Están ellos solteros]] (_____) [[married|casados]]?",
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
    "transcript": "[[My aunt doesn't have any children|Mi tía no tiene ningún hijos]].",
    "content": {
      "title": "Negación",
      "instructions": "Ordena la frase negativa.",
      "correctSentence": "[[My aunt doesn't have any children|Mi tía no tiene ningún hijos]].",
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
    "transcript": "[[The husband of my sister is my brother-in-law|El esposo de mi hermana es mi cuñado]].",
    "content": {
      "title": "Parentesco",
      "instructions": "Identifica la relación.",
      "question": "[[The husband of my sister is my|El esposo de mi hermana es mi]]...",
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
    "transcript": "[[Where do? My parents live in Spain|Dónde aux]] (_____) [[parents live|padres viven? Mis padres viven en España]].",
    "content": {
      "title": "Tu posesivo",
      "instructions": "Completa con el posesivo de 'you'.",
      "questions": [
        {
          "question": "[[Where do|Dónde aux]] (_____) [[parents live|padres viven]]?",
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
    "transcript": "[[My cousin's name is Leo|Mi de mi primo nombre es Leo]].",
    "content": {
      "title": "Uso de 's",
      "instructions": "Elige la opción gramaticalmente correcta.",
      "question": "[[What is|¿Cuál es]] (____)?",
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
    "transcript": "[[How many nephews do you have|Cuántos muchos sobrinos tienes tú tienes]]?",
    "content": {
      "title": "Pregunta de cantidad",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[How many nephews do you have|Cuántos muchos sobrinos tienes tú tienes]]?",
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
    "transcript": "[[A nephew is a boy|Un sobrino es un niño]].",
    "content": {
      "title": "Género",
      "instructions": "Elige la palabra correcta.",
      "question": "[[A nephew is a|Un sobrino es un]] (____).",
      "options": ["[[boy|niño]]", "[[girl|niña]]", "[[baby|bebé]]"],
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
    "transcript": "[[I have two is one is Jane|Yo tengo dos]] (_____). [[One Mark and|Uno es Mark y otra es Jane]].",
    "content": {
      "title": "Hermanos (mixto)",
      "instructions": "Escribe la palabra para hermanos (en general).",
      "questions": [
        {
          "question": "[[I have two|Yo tengo dos]] (_____).",
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
    "transcript": "[[Is this your house|¿Es este vuestro casa]]?",
    "content": {
      "title": "Vuestro",
      "instructions": "Elige el posesivo para 'you' (plural).",
      "question": "[[Is this|¿Es esta]] (_____) [[house|casa]]?",
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
    "transcript": "[[Their grandmother is very kind|Su abuela es muy amable]].",
    "content": {
      "title": "Descripción",
      "instructions": "Ordena la frase.",
      "correctSentence": "[[Their grandmother is very kind|Su abuela es muy amable]].",
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
    "transcript": "[[It is John and Mary's baby|Es es de John y de Mary bebé]].",
    "content": {
      "title": "Posesión compartida",
      "instructions": "Cuando algo pertenece a dos personas, ¿dónde ponemos el 's?",
      "question": "[[It is|Es es]] (_____) [[baby|bebé]].",
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
    "transcript": "[[My mother is the wife of my father|Mi madre es la esposa de mi padre]].",
    "content": {
      "title": "Relaciones",
      "instructions": "Completa la lógica.",
      "question": "[[My mother is the|Mi madre es la]] (_____) [[of my father|de mi padre]].",
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
    "transcript": "[[She lives with her parents|Ella vive con su padres]].",
    "content": {
      "title": "Su de ella",
      "instructions": "Completa con el posesivo de 'she'.",
      "questions": [
        {
          "question": "[[She lives with|Ella vive con]] (_____) [[parents|padres]].",
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
    "transcript": "[[I am. I married have a wife|Yo soy casado. Yo tengo una esposa]].",
    "content": {
      "title": "Estado civil",
      "instructions": "Elige la palabra lógica.",
      "question": "[[I am. I married have a|Yo soy casado. Yo tengo una]] (____).",
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
    "transcript": "[[Is this your father's watch|¿Es este tu del padre reloj]]?",
    "content": {
      "title": "Pregunta de posesión",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Is this your father's watch|¿Es este tu del padre reloj]]?",
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
    "transcript": "[[He is. He my niece's brother is my nephew|Él es mi de mi sobrina hermano. Él es mi sobrino]].",
    "content": {
      "title": "Parentesco complejo",
      "instructions": "Si es el hermano de tu sobrina, es tu...",
      "question": "[[He is. He the brother of my niece is my|Él es el hermano de mi sobrina. Él es mi]] (____).",
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
    "transcript": "[[The children are in their room|Los niños están en su habitación]].",
    "content": {
      "title": "Su de ellos",
      "instructions": "Completa con el posesivo de 'they'.",
      "questions": [
        {
          "question": "[[The children are in|Los niños están en]] (_____) [[room|habitación]].",
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
    "transcript": "[[A niece is the daughter of your brother or sister|Una sobrina es la hija de tu hermano o hermana]].",
    "content": {
      "title": "Definición",
      "instructions": "Elige la palabra correcta.",
      "question": "[[A niece is the sister|Una sobrina es la]] (_____) [[of your brother or|de tu hermano o hermana]].",
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
    "transcript": "[[Are you cousins|¿Son vosotros primos]]?",
    "content": {
      "title": "¿Sois primos?",
      "instructions": "Ordena la pregunta.",
      "correctSentence": "[[Are you cousins|¿Son vosotros primos]]?",
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
    "transcript": "[[I have many relatives|Yo tengo muchos parientes]].",
    "content": {
      "title": "Parientes",
      "instructions": "Elige la palabra que significa 'miembros de la familia'.",
      "question": "[[I have. They many family members are my|Yo tengo muchos familia miembros. Ellos son mis]] (____).",
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
    "transcript": "[[Hello!|¡Hola!]] [[My name is Peter.|Mi nombre es Peter.]] [[I want to tell you|Quiero contarte]] [[about my family.|sobre mi familia.]] [[My father's name|El nombre de mi padre]] [[is Robert.|es Robert.]] [[He is 55 years old|Él tiene 55 años]] [[and he is an engineer.|y es ingeniero.]] [[My mother's name|El nombre de mi madre]] [[is Sarah.|es Sarah.]] [[She is 52|Ella tiene 52]] [[and she is a nurse.|y es enfermera.]] [[I have two sisters,|Tengo dos hermanas,]] [[Anna and Mary.|Anna y Mary.]] [[Anna is 20|Anna tiene 20]] [[and Mary is 18.|y Mary tiene 18.]] [[They are students.|Ellas son estudiantes.]] [[We have a dog.|Tenemos un perro.]] [[Its name is Rex.|Su nombre es Rex.]] [[We are|Somos]] [[a very happy family.|una familia muy feliz.]]",
    "content": {
      "title": "[[Reading: Peter's Family|Lectura: La Familia de Peter]]",
      "instructions": "[[Read the text carefully|Lee el texto atentamente]].",
      "text": "[[Hello!|¡Hola!]] [[My name is Peter.|Mi nombre es Peter.]] [[I want to tell you|Quiero contarte]] [[about my family.|sobre mi familia.]] [[My father's name|El nombre de mi padre]] [[is Robert.|es Robert.]] [[He is 55 years old|Él tiene 55 años]] [[and he is an engineer.|y es ingeniero.]] [[My mother's name|El nombre de mi madre]] [[is Sarah.|es Sarah.]] [[She is 52|Ella tiene 52]] [[and she is a nurse.|y es enfermera.]] [[I have two sisters,|Tengo dos hermanas,]] [[Anna and Mary.|Anna y Mary.]] [[Anna is 20|Anna tiene 20]] [[and Mary is 18.|y Mary tiene 18.]] [[They are students.|Ellas son estudiantes.]] [[We have a dog.|Tenemos un perro.]] [[Its name is Rex.|Su nombre es Rex.]] [[We are|Somos]] [[a very happy family.|una familia muy feliz.]]",
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
    "transcript": "[[How many sisters|Cuántas hermanas]] [[does Peter have?|tiene Peter?]]",
    "content": {
      "title": "[[Question 1|Pregunta 1]]",
      "instructions": "[[Answer according to the text|Responde según el texto]].",
      "options": ["[[One|Una]]", "[[Three|Tres]]", "[[Two|Dos]]"],
      "correctAnswer": 2,
      "explanation": "[[Peter says:|Peter dice:]] '[[I have two sisters, Anna and Mary|Tengo dos hermanas, Anna y Mary]]'."
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
    "transcript": "[[What is Robert's job?|¿Cuál es el trabajo de Robert?]]",
    "content": {
      "title": "[[Question 2|Pregunta 2]]",
      "instructions": "[[Answer according to the text|Responde según el texto]].",
      "options": ["[[Engineer|Ingeniero]]", "[[Doctor|Médico]]", "[[Teacher|Profesor]]"],
      "correctAnswer": 0,
      "explanation": "[[The text mentions:|El texto menciona:]] '[[he is an engineer|él es ingeniero]]'."
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
    "transcript": "[[What is the dog's name?|¿Cuál es el nombre del perro?]]",
    "content": {
      "title": "[[Question 3|Pregunta 3]]",
      "instructions": "[[Answer according to the text|Responde según el texto]].",
      "options": ["[[Max|Max]]", "[[Felix|Felix]]", "[[Rex|Rex]]"],
      "correctAnswer": 2,
      "explanation": "[[The dog's name is Rex.|El nombre del perro es Rex.]]"
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
    "transcript": "[[Hi,|Hola,]] [[I'm Linda.|soy Linda.]] [[My family is quite big.|Mi familia es bastante grande.]] [[I live with my parents,|Vivo con mis padres,]] [[my two brothers,|mis dos hermanos,]] [[and my grandmother.|y mi abuela.]] [[My parents are both teachers|Mis padres son ambos profesores]] [[at a local school.|en una escuela local.]] [[My older brother, Sam,|Mi hermano mayor, Sam,]] [[is 25|tiene 25 años]] [[and he is a chef.|y es cocinero.]] [[My younger brother, Tom,|Mi hermano menor, Tom,]] [[is 15|tiene 15]] [[and he is a student.|y es estudiante.]] [[My grandmother, Alice,|Mi abuela, Alice,]] [[is 80 years old.|tiene 80 años.]] [[She is very active|Ella es muy activa]] [[and loves gardening.|y ama la jardinería.]] [[We live in a large house|Vivimos en una casa grande]] [[with a beautiful garden.|con un jardín hermoso.]]",
    "content": {
      "title": "[[Reading: Linda's Family|Lectura: La Familia de Linda]]",
      "instructions": "[[Read about Linda's family|Lee sobre la familia de Linda]].",
      "text": "[[Hi,|Hola,]] [[I'm Linda.|soy Linda.]] [[My family is quite big.|Mi familia es bastante grande.]] [[I live with my parents,|Vivo con mis padres,]] [[my two brothers,|mis dos hermanos,]] [[and my grandmother.|y mi abuela.]] [[My parents are both teachers|Mis padres son ambos profesores]] [[at a local school.|en una escuela local.]] [[My older brother, Sam,|Mi hermano mayor, Sam,]] [[is 25|tiene 25 años]] [[and he is a chef.|y es cocinero.]] [[My younger brother, Tom,|Mi hermano menor, Tom,]] [[is 15|tiene 15]] [[and he is a student.|y es estudiante.]] [[My grandmother, Alice,|Mi abuela, Alice,]] [[is 80 years old.|tiene 80 años.]] [[She is very active|Ella es muy activa]] [[and loves gardening.|y ama la jardinería.]] [[We live in a large house|Vivimos en una casa grande]] [[with a beautiful garden.|con un jardín hermoso.]]",
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
    "transcript": "[[Who does Linda live with?|¿Con quién vive Linda?]]",
    "content": {
      "title": "[[Question 1|Pregunta 1]]",
      "instructions": "[[Select the correct answer|Selecciona la respuesta correcta]].",
      "options": ["[[With her parents and brothers|Con sus padres y hermanos]]", "[[With her parents, brothers and grandmother|Con sus padres, hermanos y abuela]]", "[[With her friends|Con sus amigos]]"],
      "correctAnswer": 1,
      "explanation": "[[Linda mentions that she lives|Linda menciona que vive]] [[with her parents, two brothers and her grandmother.|con sus padres, dos hermanos y su abuela.]]"
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
    "transcript": "[[What is Sam's job?|¿Cuál es el trabajo de Sam?]]",
    "content": {
      "title": "[[Question 2|Pregunta 2]]",
      "instructions": "[[Select the correct answer|Selecciona la respuesta correcta]].",
      "options": ["[[He is a teacher|Es profesor]]", "[[He is a student|Es estudiante]]", "[[He is a chef|Es cocinero]]"],
      "correctAnswer": 2,
      "explanation": "[[The text says that Sam is a chef.|El texto dice que Sam es cocinero.]]"
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
    "transcript": "[[How old is Alice?|¿Qué edad tiene Alice?]]",
    "content": {
      "title": "[[Question 3|Pregunta 3]]",
      "instructions": "[[Select the correct answer|Selecciona la respuesta correcta]].",
      "options": ["[[Eighty|Ochenta]]", "[[Seventy|Setenta]]", "[[Sixty|Sesenta]]"],
      "correctAnswer": 0,
      "explanation": "[[The text indicates that Alice is 80 years old.|El texto indica que Alice tiene 80 años.]]"
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
    "transcript": "[[The Miller. Mr. Miller family lives, and, Mia in New York is a. They. Leo. They 12 and, the family. They love lawyer and Mrs. Miller is an artist have one son, Leo one daughter is Mia is 9 also have a. Every cat named Luna Sunday visits the grandparents in the countryside spending time together outdoors|La Miller familia vive en Nueva York. Sr. Miller es un abogado y Sra. Miller es una artista. Ellos tienen un hijo, Leo, y una hija, Mia. Leo tiene 12 y Mia tiene 9. Ellos también tienen un gato llamado Luna. Cada domingo, la familia visita a los abuelos en el campo. Ellos aman pasar tiempo juntos al aire libre]].",
    "content": {
      "title": "[[Reading Miller: The Family|Lectura: La Miller Familia]]",
      "instructions": "[[Read the text|Lee el texto]].",
      "text": "[[The Miller. Mr. Miller family lives, and, Mia in New York is a. They. Leo. They 12 and, the family. They love lawyer and Mrs. Miller is an artist have one son, Leo one daughter is Mia is 9 also have a. Every cat named Luna Sunday visits the grandparents in the countryside spending time together outdoors|La Miller familia vive en Nueva York. Sr. Miller es un abogado y Sra. Miller es una artista. Ellos tienen un hijo, Leo, y una hija, Mia. Leo tiene 12 y Mia tiene 9. Ellos también tienen un gato llamado Luna. Cada domingo, la familia visita a los abuelos en el campo. Ellos aman pasar tiempo juntos al aire libre]].",
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
    "transcript": "[[When do they visit their grandparents|Cuándo aux ellos visitan a sus abuelos]]?",
    "content": {
      "title": "[[Final Question|Final Pregunta]]",
      "instructions": "[[Answer according to the text|Responde según a el texto]].",
      "options": ["[[On Saturdays|Los sábados]]", "[[Every day|Todos los días]]", "[[On Sundays|Los domingos]]"],
      "correctAnswer": 2,
      "explanation": "El texto dice que visitan a los abuelos cada domingo."
    },
    "audioUrl": "audio/a1/unit-6/e60.mp3",
    "topicName": "Reading"
  }
];