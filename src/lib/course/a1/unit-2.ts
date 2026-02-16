import { Exercise } from '@/lib/exercise-generator';

export const UNIT_2_EXERCISES: Exercise[] = [
  // ==========================================
  // INTRODUCTION: THE MEETING (1-5)
  // ==========================================
  {
    "id": "a1-u2-e1",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Dialogue Analysis",
    "difficulty": "hard",
    "transcript": "A: [[Hello|Hola]], [[I|yo]] [[am|soy]] [[John|John]]. [[Are|¿Eres]] [[you|tú]] [[from|de]] [[Spain|España]]?\nB: [[No|No]], [[I|yo]] [[am|soy]] [[not|no]]. [[I|Yo]] [[am|soy]] [[from|de]] [[Mexico|México]]. [[I|Yo]] [[am|soy]] [[Mexican|mexicano]].",
    "content": {
      "title": "[[A|Un]] [[New|Nuevo]] [[Meeting|Encuentro]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[dialogue|diálogo]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[Is|¿Es]] [[John|John]] [[talking|hablando]] [[to|con]] [[someone|alguien]] [[from|de]] [[Spain|España]]?",
          "options": [
            "[[Yes|Sí]], [[the|la]] [[person|persona]] [[is|es]] [[Spanish|española]].",
            "[[No|No]], [[the|la]] [[person|persona]] [[is|es]] [[from|de]] [[Mexico|México]].",
            "[[We|Nosotros]] [[don't|no]] [[know|sabemos]]."
          ],
          "correctAnswer": 1,
          "explanation": "[[Person|La persona]] B [[says|dice]]: '[[I|Yo]] [[am|soy]] [[from|de]] [[Mexico|México]]'. [[So|Por lo tanto]], [[they|ellos/ella]] [[are|son]] [[not|no]] [[Spanish|españoles]]."
        }
      ]
    },
    "topicName": "Comprehension"
  },
  {
    "id": "a1-u2-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[I|Yo]] [[am|soy]] [[from|de]] [[London|Londres]], [[but|pero]] [[my|mis]] [[parents|padres]] [[are|son]] [[from|de]] [[France|Francia]].",
    "content": {
      "title": "[[Origins|Orígenes]] [[Mixed|Mixtos]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[option|opción]] [[for|para]] [[the|los]] [[parents|padres]].",
      "questions": [
        {
          "question": "[[The|Los]] [[parents|padres]] [[are|son]]...",
          "options": [
            "[[English|Ingleses]]",
            "[[French|Franceses]]",
            "[[American|Americanos]]"
          ],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[parents|padres]] [[are|son]] [[from|de]] [[France|Francia]]', [[so|así que]] [[they|ellos]] [[are|son]] [[French|franceses]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "hard",
    "transcript": "[[She|Ella]] [[is|es]] [[Italian|italiana]]. [[She|Ella]] [[is|es]] [[not|no]] [[from|de]] [[Germany|Alemania]].",
    "content": {
      "title": "[[Negative|Negativo]] [[and|y]] [[Affirmative|Afirmativo]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[logic|lógica]].",
      "questions": [
        {
          "question": "[[If|Si]] [[she|ella]] [[is|es]] [[Italian|italiana]], [[she|ella]] [[is|es]] [[from|de]]...",
          "options": [
            "[[Germany|Alemania]]",
            "[[Italy|Italia]]",
            "[[France|Francia]]"
          ],
          "correctAnswer": 1,
          "explanation": "[[Italian|Italiano/a]] [[is|es]] [[the|la]] [[nationality|nacionalidad]] [[for|para]] [[Italy|Italia]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e4",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "content": {
      "title": "[[Introducing|Presentando]] [[Friends|Amigos]]",
      "instructions": "[[Complete|Completa]] [[with|con]] '[[am|soy]]', '[[is|es]]' [[or|o]] '[[are|son]]'.",
      "questions": [
        {
          "question": "[[My|Mi]] [[friend|amigo]] [[David|David]] ____ [[from|de]] [[England|Inglaterra]].",
          "correctAnswer": "is",
          "explanation": "[[David|David]] [[is|es]] '[[he|él]]', [[so|así que]] [[we|nosotros]] [[use|usamos]] '[[is|es]]'."
        },
        {
          "question": "[[We|Nosotros]] ____ [[students|estudiantes]] [[in|en]] [[Madrid|Madrid]].",
          "correctAnswer": "are",
          "explanation": "[[With|Con]] '[[we|nosotros]]', [[the|el]] [[verb|verbo]] [[is|es]] '[[are|somos]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e5",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "hard",
    "transcript": "[[Maria|Maria]] [[and|y]] [[Elena|Elena]] [[are|están]] [[at|en]] [[home|casa]]. [[They|Ellas]] [[are|son]] [[sisters|hermanas]].",
    "content": {
      "title": "[[Replacing|Reemplazando]] [[Names|Nombres]]",
      "instructions": "[[Replace|Reemplaza]] '[[Maria and Elena|Maria y Elena]]' [[with|con]] [[the|el]] [[correct|correcto]] [[pronoun|pronombre]].",
      "questions": [
        {
          "question": "____ [[are|son]] [[sisters|hermanas]].",
          "options": ["[[We|Nosotros]]", "[[They|Ellas]]", "[[She|Ella]]"],
          "correctAnswer": 1,
          "explanation": "'[[Maria and Elena|Maria y Elena]]' [[is|es]] [[third|tercera]] [[person|persona]] [[plural|plural]], [[so|así que]] [[we|nosotros]] [[use|usamos]] '[[They|Ellas]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },

  // ==========================================
  // GRAMMAR: VERB TO BE NEGATIVE (6-15)
  // ==========================================
  {
    "id": "a1-u2-e6",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be: Negative",
    "difficulty": "hard",
    "transcript": "[[It|Eso]] [[is|es]] [[not|no]] [[a|un]] [[car|coche]]. [[It|Eso]] [[is|es]] [[a|una]] [[bike|bicicleta]].",
    "content": {
      "title": "[[Negative|Negativo]] [[Identification|Identificación]]",
      "instructions": "[[Select|Selecciona]] [[the|la]] [[correct|correcta]] [[negative|negativa]] [[form|forma]].",
      "questions": [
        {
          "question": "[[The|El]] [[object|objeto]] ____ [[a|un]] [[car|coche]].",
          "options": ["[[am|soy]] [[not|no]]", "[[is|es]] [[not|no]]", "[[are|son]] [[not|no]]"],
          "correctAnswer": 1,
          "explanation": "'[[The object|El objeto]]' [[is|es]] '[[it|eso]]', [[so|así que]] [[the|el]] [[negative|negativo]] [[is|es]] '[[is not|no es]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e7",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be: Negative",
    "difficulty": "hard",
    "content": {
      "title": "[[False|Falsas]] [[Identities|Identidades]]",
      "instructions": "[[Complete|Completa]] [[with|con]] '[[is not|no es]]' [[or|o]] '[[are not|no son]]'.",
      "questions": [
        {
          "question": "[[I|Yo]] ____ [[from|de]] [[France|Francia]]. ([[I|Yo]] [[am|soy]] [[Spanish|español]])",
          "correctAnswer": "am not",
          "explanation": "[[With|Con]] '[[I|Yo]]', [[we|nosotros]] [[use|usamos]] '[[am not|no soy]]'."
        },
        {
          "question": "[[They|Ellos]] ____ [[German|alemanes]]. ([[They|Ellos]] [[are|son]] [[Italian|italianos]])",
          "correctAnswer": "are not",
          "explanation": "[[With|Con]] '[[They|Ellos]]', [[we|nosotros]] [[use|usamos]] '[[are not|no son]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e8",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Are|¿Eres]] [[you|tú]] [[a|un]] [[student|estudiante]]?\n[[No|No]], [[I|yo]] [[am|soy]] [[a|un]] [[teacher|profesor]].",
    "content": {
      "title": "[[Short|Corta]] [[Conversation|Conversación]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[role|rol]].",
      "questions": [
        {
          "question": "[[The|La]] [[person|persona]] ____ [[a|un]] [[student|estudiante]].",
          "options": ["[[is|es]]", "[[is not|no es]]", "[[am|soy]]"],
          "correctAnswer": 1,
          "explanation": "[[The|La]] [[person|persona]] [[says|dice]] '[[No|No]], [[I|yo]] [[am|soy]] [[a|un]] [[teacher|profesor]]', [[so|así que]] [[they|ellos]] [[are not|no son]] [[a|un]] [[student|estudiante]]."
        }
      ]
    },
    "topicName": "Comprehension"
  },
  {
    "id": "a1-u2-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "hard",
    "transcript": "[[Toyota|Toyota]] [[is|es]] [[a|una]] [[Japanese|japonesa]] [[company|compañía]]. [[It|Ella]] [[is|es]] [[not|no]] [[American|americana]].",
    "content": {
      "title": "[[Company|Compañía]] [[Origins|Orígenes]]",
      "instructions": "[[Where|De dónde]] [[is|es]] [[the|la]] [[company|compañía]]?",
      "questions": [
        {
          "question": "[[The|La]] [[company|compañía]] [[is|es]]...",
          "options": ["[[American|Americana]]", "[[Japanese|Japonesa]]", "[[Mexican|Mexicana]]"],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[It|Ella]] [[is|es]] [[a|una]] [[Japanese|japonesa]] [[company|compañía]]'."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e10",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "content": {
      "title": "[[Personal|Personal]] [[Details|Detalles]]",
      "instructions": "[[Fill|Rellena]] [[the|los]] [[blanks|huecos]].",
      "questions": [
        {
          "question": "[[My|Mi]] [[name|nombre]] ____ [[Carlos|Carlos]].",
          "correctAnswer": "is",
          "explanation": "'[[My name|Mi nombre]]' [[is|es]] '[[it|eso]]', [[so|así que]] [[use|usa]] '[[is|es]]'."
        },
        {
          "question": "[[I|Yo]] ____ [[from|de]] [[Mexico|México]].",
          "correctAnswer": "am",
          "explanation": "[[With|Con]] '[[I|Yo]]', [[use|usa]] '[[am|soy]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },

  // ==========================================
  // QUESTIONS & SHORT ANSWERS (11-20)
  // ==========================================
  {
    "id": "a1-u2-e11",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Questions",
    "difficulty": "hard",
    "transcript": "[[Are|¿Son]] [[they|ellos]] [[English|ingleses]]?\n[[Yes|Sí]], [[they|ellos]] [[are|son]].",
    "content": {
      "title": "[[Short|Corta]] [[Answer|Respuesta]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[short|corta]] [[answer|respuesta]].",
      "questions": [
        {
          "question": "[[Are|¿Son]] [[Paul|Paul]] [[and|y]] [[Sarah|Sarah]] [[English|ingleses]]?",
          "options": ["[[Yes|Sí]], [[he|él]] [[is|es]].", "[[Yes|Sí]], [[they|ellos]] [[are|son]].", "[[Yes|Sí]], [[we|nosotros]] [[are|somos]]."],
          "correctAnswer": 1,
          "explanation": "[[For|Para]] '[[Paul and Sarah|Paul y Sarah]]', [[we|nosotros]] [[use|usamos]] '[[they|ellos]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Questions",
    "difficulty": "hard",
    "transcript": "[[Is|¿Es]] [[London|Londres]] [[in|en]] [[France|Francia]]?\n[[No|No]], [[it|eso]] [[isn't|no lo es]]. [[It|Eso]] [[is|es]] [[in|en]] [[England|Inglaterra]].",
    "content": {
      "title": "[[Negative|Negativa]] [[Short|Corta]] [[Answer|Respuesta]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[logic|lógica]].",
      "questions": [
        {
          "question": "[[Is|¿Es]] [[London|Londres]] [[in|en]] [[France|Francia]]?",
          "options": ["[[Yes|Sí]], [[it|eso]] [[is|es]].", "[[No|No]], [[it|eso]] [[isn't|no lo es]].", "[[No|No]], [[it|eso]] [[am|soy]] [[not|no]]."],
          "correctAnswer": 1,
          "explanation": "[[London|Londres]] [[is|es]] [[an|un]] [[object|objeto/lugar]], [[so|así que]] [[we|nosotros]] [[use|usamos]] '[[it|eso]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e13",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Questions",
    "difficulty": "hard",
    "content": {
      "title": "[[Forming|Formando]] [[Questions|Preguntas]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "____ [[you|tú]] [[from|de]] [[Japan|Japón]]?",
          "correctAnswer": "Are",
          "explanation": "[[For|Para]] [[questions|preguntas]] [[with|con]] '[[you|tú]]', [[start|empieza]] [[with|con]] '[[Are|Eres]]'."
        },
        {
          "question": "____ [[she|ella]] [[Mexican|mexicana]]?",
          "correctAnswer": "Is",
          "explanation": "[[For|Para]] [[questions|preguntas]] [[with|con]] '[[she|ella]]', [[start|empieza]] [[with|con]] '[[Is|Es]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Am|¿Soy]] [[I|yo]] [[late|tarde]]?\n[[No|No]], [[you|tú]] [[are|estás]] [[on|a]] [[time|tiempo]].",
    "content": {
      "title": "[[Late|Tarde]] [[or|o]] [[Early|Pronto]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Is|¿Está]] [[the|la]] [[person|persona]] [[late|tarde]]?",
          "options": ["[[Yes|Sí]], [[they|ellos]] [[are|están]].", "[[No|No]], [[they|ellos]] [[are|están]] [[on|a]] [[time|tiempo]].", "[[I|Yo]] [[don't|no]] [[know|sé]]."],
          "correctAnswer": 1,
          "explanation": "'[[On time|A tiempo]]' [[means|significa]] [[not|no]] [[late|tarde]]."
        }
      ]
    },
    "topicName": "Comprehension"
  },
  {
    "id": "a1-u2-e15",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "hard",
    "transcript": "[[Is|¿Es]] [[the|la]] [[Ferrari|Ferrari]] [[German|alemana]]?\n[[No|No]], [[it|ella]] [[is|es]] [[Italian|italiana]].",
    "content": {
      "title": "[[Car|Coche]] [[Brands|Marcas]]",
      "instructions": "[[Identify|Identifica]] [[the|el]] [[origin|origen]].",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[Ferrari|Ferrari]]?",
          "options": ["[[Germany|Alemania]]", "[[Italy|Italia]]", "[[England|Inglaterra]]"],
          "correctAnswer": 1,
          "explanation": "[[Ferrari|Ferrari]] [[is|es]] [[Italian|italiana]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },

  // ==========================================
  // ADJECTIVES VS NOUNS (21-30)
  // ==========================================
  {
    "id": "a1-u2-e16",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "hard",
    "transcript": "[[He|Él]] [[is|es]] [[Mexican|mexicano]]. [[He|Él]] [[is|es]] [[from|de]] [[Mexico|México]].",
    "content": {
      "title": "[[Adjective|Adjetivo]] [[vs|vs]] [[Noun|Nombre]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|soy]] ____.",
          "options": ["[[Spain|España]]", "[[Spanish|Español]]", "[[The Spain|La España]]"],
          "correctAnswer": 1,
          "explanation": "[[After|Después]] [[of|de]] '[[am|soy]]', [[we|nosotros]] [[use|usamos]] [[the|la]] [[nationality|nacionalidad]] (adjetivo)."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Countries",
    "difficulty": "hard",
    "transcript": "[[She|Ella]] [[is|es]] [[from|de]] [[England|Inglaterra]]. [[She|Ella]] [[is|es]] [[English|inglesa]].",
    "content": {
      "title": "[[Origins|Orígenes]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
      "questions": [
        {
          "question": "[[She|Ella]] [[is|es]] [[from|de]] ____.",
          "options": ["[[English|Inglés]]", "[[England|Inglaterra]]", "[[The English|El inglés]]"],
          "correctAnswer": 1,
          "explanation": "[[After|Después]] [[of|de]] '[[from|de]]', [[we|nosotros]] [[use|usamos]] [[the|el]] [[country|país]] (nombre)."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e18",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "hard",
    "content": {
      "title": "[[Grammar|Gramática]] [[Check|Control]]",
      "instructions": "[[Fill|Rellena]] [[with|con]] [[the|el]] [[country|país]] [[or|o]] [[the|la]] [[nationality|nacionalidad]].",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|soy]] [[from|de]] ____. ([[Spain|España]])",
          "correctAnswer": "Spain",
          "explanation": "[[Use|Usa]] [[the|el]] [[country|país]] [[after|después]] [[of|de]] '[[from|de]]'."
        },
        {
          "question": "[[I|Yo]] [[am|soy]] ____. ([[Spanish|Español]])",
          "correctAnswer": "Spanish",
          "explanation": "[[Use|Usa]] [[the|la]] [[nationality|nacionalidad]] [[without|sin]] '[[from|de]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e19",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[My|Mi]] [[mobile|móvil]] [[is|es]] [[from|de]] [[Japan|Japón]]. [[It|Él]] [[is|es]] [[Japanese|japonés]].",
    "content": {
      "title": "[[Object|Objeto]] [[Origin|Origen]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[verb|verbo]] [[and|y]] [[origin|origen]].",
      "questions": [
        {
          "question": "[[The|El]] [[mobile|móvil]] ____ [[Japanese|japonés]].",
          "options": ["[[are|son]]", "[[is|es]]", "[[am|soy]]"],
          "correctAnswer": 1,
          "explanation": "[[Mobile|Móvil]] [[is|es]] [[an|un]] [[object|objeto]] (it), [[so|así que]] [[it|él]] [[is|es]] '[[is|es]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "hard",
    "transcript": "[[The|La]] [[baguette|baguette]] [[is|es]] [[French|francesa]].",
    "content": {
      "title": "[[Food|Comida]] [[Origins|Orígenes]]",
      "instructions": "[[Select|Selecciona]] [[the|el]] [[country|país]].",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[the|la]] [[baguette|baguette]]?",
          "options": ["[[Italy|Italia]]", "[[France|Francia]]", "[[England|Inglaterra]]"],
          "correctAnswer": 1,
          "explanation": "[[The|La]] [[baguette|baguette]] [[is|es]] [[French|francesa]], [[from|de]] [[France|Francia]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },

  // ==========================================
  // SENTENCE SCRAMBLE (31-40)
  // ==========================================
  {
    "id": "a1-u2-e21",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "content": {
      "title": "[[Build|Construye]] [[the|la]] [[Sentence|Frase]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]] [[correctly|correctamente]].",
      "words": ["[[is|es]]", "[[She|Ella]]", "[[not|no]]", "[[from|de]]", "[[Mexico|México]]", "."],
      "correctOrder": ["She", "is", "not", "from", "Mexico", "."],
      "explanation": "[[Subject|Sujeto]] (She) + [[Verb|Verbo]] (is) + [[Negative|Negativo]] (not) + [[Origin|Origen]] (from Mexico)."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e22",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Questions",
    "difficulty": "hard",
    "content": {
      "title": "[[Build|Construye]] [[the|la]] [[Question|Pregunta]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]] [[for|para]] [[a|una]] [[question|pregunta]].",
      "words": ["[[you|tú]]", "[[from|de]]", "[[Are|Eres]]", "[[Italy|Italia]]", "?"],
      "correctOrder": ["Are", "you", "from", "Italy", "?"],
      "explanation": "[[In|En]] [[questions|preguntas]], [[the|el]] [[verb|verbo]] (Are) [[comes|viene]] [[before|antes]] [[the|del]] [[subject|sujeto]] (you)."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e23",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[We|Nosotros]] [[are|somos]] [[from|de]] [[Germany|Alemania]], [[but|pero]] [[they|ellos]] [[are|son]] [[from|de]] [[France|Francia]].",
    "content": {
      "title": "[[Contrast|Contraste]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[nationality|nacionalidad]] [[of|de]] '[[they|ellos]]'.",
      "questions": [
        {
          "question": "[[They|Ellos]] [[are|son]]...",
          "options": ["[[German|Alemanes]]", "[[French|Franceses]]", "[[American|Americanos]]"],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[they|ellos]] [[are|son]] [[from|de]] [[France|Francia]]'."
        }
      ]
    },
    "topicName": "Comprehension"
  },
  {
    "id": "a1-u2-e24",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "content": {
      "title": "[[Short|Cortos]] [[Dialogues|Diálogos]]",
      "instructions": "[[Complete|Completa]] [[the|el]] [[dialogue|diálogo]].",
      "questions": [
        {
          "question": "A: [[Is|¿Es]] [[he|él]] [[from|de]] [[Japan|Japón]]? B: [[No|No]], [[he|él]] ____ [[not|no]].",
          "correctAnswer": "is",
          "explanation": "[[Short|Corta]] [[negative|negativa]] [[answer|respuesta]] [[uses|usa]] '[[is not|no es]]' (isn't)."
        },
        {
          "question": "A: ____ [[they|ellos]] [[American|americanos]]? B: [[Yes|Sí]], [[they|ellos]] [[are|lo son]].",
          "correctAnswer": "Are",
          "explanation": "[[Start|Empieza]] [[the|la]] [[question|pregunta]] [[with|con]] '[[Are|Son]]' [[for|para]] '[[they|ellos]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "hard",
    "transcript": "[[I|Yo]] [[am|soy]] [[English|inglés]]. [[I|Yo]] [[speak|hablo]] [[English|inglés]].",
    "content": {
      "title": "[[Language|Idioma]] [[and|y]] [[Nationality|Nacionalidad]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[word|palabra]] [[correct|correcta]].",
      "questions": [
        {
          "question": "[[The|La]] [[nationality|nacionalidad]] [[of|de]] [[England|Inglaterra]] [[is|es]]...",
          "options": ["[[English|Inglés]]", "[[England|Inglaterra]]", "[[London|Londres]]"],
          "correctAnswer": 0,
          "explanation": "[[English|Inglés]] [[is|es]] [[both|tanto]] [[the|el]] [[language|idioma]] [[as|como]] [[the|la]] [[nationality|nacionalidad]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },

  // ==========================================
  // READING COMPREHENSION (41-50)
  // ==========================================
  {
    "id": "a1-u2-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Meet|Conoce]] [[Ana|Ana]]. [[Ana|Ana]] [[is|es]] [[from|de]] [[Spain|España]]. [[She|Ella]] [[is|es]] [[20|20]] [[years|años]] [[old|de edad]]. [[She|Ella]] [[is|es]] [[a|una]] [[student|estudiante]] [[in|en]] [[Madrid|Madrid]]. [[Her|Su]] [[friend|amigo]] [[is|es]] [[David|David]]. [[David|David]] [[is|es]] [[from|de]] [[England|Inglaterra]].",
    "content": {
      "title": "[[Ana's|Ana]] [[Profile|Perfil]]",
      "instructions": "[[Read|Lee]] [[and|y]] [[answer|responde]].",
      "questions": [
        {
          "question": "[[Is|¿Es]] [[David|David]] [[Spanish|español]]?",
          "options": ["[[Yes|Sí]], [[he|él]] [[is|es]].", "[[No|No]], [[he|él]] [[is|es]] [[English|inglés]].", "[[We|Nosotros]] [[don't|no]] [[know|sabemos]]."],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[David|David]] [[is|es]] [[from|de]] [[England|Inglaterra]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Ana|Ana]] [[and|y]] [[David|David]] [[are|están]] [[in|en]] [[Madrid|Madrid]]. [[They|Ellos]] [[are|son]] [[friends|amigos]]. [[They|Ellos]] [[are|son]] [[not|no]] [[sisters|hermanos]].",
    "content": {
      "title": "[[Ana's|Ana]] [[Profile|Perfil]]",
      "instructions": "[[Is|¿Es]] [[the|la]] [[sentence|frase]] [[True|Verdadera]] [[or|o]] [[False|Falsa]]?",
      "questions": [
        {
          "question": "[[Ana|Ana]] [[and|y]] [[David|David]] [[are|son]] [[Spanish|españoles]].",
          "options": ["[[True|Verdadera]]", "[[False|Falsa]]"],
          "correctAnswer": 1,
          "explanation": "[[Only|Solo]] [[Ana|Ana]] [[is|es]] [[Spanish|española]]. [[David|David]] [[is|es]] [[English|inglés]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e28",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Madrid|Madrid]] [[is|es]] [[a|una]] [[city|ciudad]] [[in|en]] [[Spain|España]]. [[It|Ella]] [[is|es]] [[big|grande]].",
    "content": {
      "title": "[[Ana's|Ana]] [[Profile|Perfil]]",
      "instructions": "[[What|Qué]] [[is|es]] '[[it|ella]]'?",
      "questions": [
        {
          "question": "[[In|En]] [[the|la]] [[sentence|frase]] '[[It|Ella]] [[is|es]] [[big|grande]]', '[[It|Ella]]' [[is|es]]...",
          "options": ["[[Ana|Ana]]", "[[Madrid|Madrid]]", "[[Spain|España]]"],
          "correctAnswer": 1,
          "explanation": "'[[It|Eso/Ella]]' [[replaces|reemplaza]] '[[Madrid|Madrid]]' [[in|en]] [[this|este]] [[context|contexto]]."
        }
      ]
    },
    "topicName": "Reading"
  },

  // ==========================================
  // REVIEW MIX (51-60)
  // ==========================================
  {
    "id": "a1-u2-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar Mix",
    "difficulty": "hard",
    "transcript": "[[Where|¿De dónde]] [[are|son]] [[you|tú]] [[from|de]]?\n[[I|Yo]] ____ [[from|de]] [[France|Francia]].",
    "content": {
      "title": "[[Dialogue|Diálogo]] [[Review|Repaso]]",
      "instructions": "[[Complete|Completa]] [[the|el]] [[verb|verbo]].",
      "questions": [
        {
          "question": "[[Select|Selecciona]] [[the|el]] [[verb|verbo]] [[correct|correcto]].",
          "options": ["[[is|es]]", "[[am|soy]]", "[[are|eres]]"],
          "correctAnswer": 1,
          "explanation": "[[I|Yo]] [[always|siempre]] [[takes|lleva]] '[[am|soy]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e30",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary Mix",
    "difficulty": "hard",
    "transcript": "[[The|La]] [[Eiffel|Eiffel]] [[Tower|Torre]] [[is|está]] [[in|en]] [[Paris|París]].",
    "content": {
      "title": "[[Landmarks|Lugares]] [[Famous|Famosos]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[nationality|nacionalidad]].",
      "questions": [
        {
          "question": "[[The|La]] [[Eiffel|Eiffel]] [[Tower|Torre]] [[is|es]]...",
          "options": ["[[Italian|Italiana]]", "[[French|Francesa]]", "[[German|Alemana]]"],
          "correctAnswer": 1,
          "explanation": "[[Paris|París]] [[is|está]] [[in|en]] [[France|Francia]], [[so|así que]] [[the|la]] [[tower|torre]] [[is|es]] [[French|francesa]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "hard",
    "transcript": "[[The|El]] [[dog|perro]] [[and|y]] [[the|el]] [[cat|gato]] [[are|están]] [[happy|felices]].",
    "content": {
      "title": "[[Pronouns|Pronombres]] [[Plural|Plural]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[pronoun|pronombre]].",
      "questions": [
        {
          "question": "____ [[are|están]] [[happy|felices]].",
          "options": ["[[It|Eso]]", "[[They|Ellos]]", "[[We|Nosotros]]"],
          "correctAnswer": 1,
          "explanation": "[[Two|Dos]] [[animals|animales]] [[are|son]] '[[They|Ellos]]' (plural)."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e32",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Are|¿Están]] [[you|vosotros]] [[ready|listos]]?\n[[Yes|Sí]], [[we|nosotros]] [[are|estamos]].",
    "content": {
      "title": "[[Short|Cortas]] [[Answers|Respuestas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[response|respuesta]] [[correct|correcta]].",
      "questions": [
        {
          "question": "[[Are|¿Están]] [[you|vosotros]] [[ready|listos]]?",
          "options": ["[[Yes|Sí]], [[I|yo]] [[am|estoy]].", "[[Yes|Sí]], [[we|nosotros]] [[are|estamos]].", "[[Yes|Sí]], [[they|ellos]] [[are|están]]."],
          "correctAnswer": 1,
          "explanation": "[[When|Cuando]] [[someone|alguien]] [[asks|pregunta]] '[[you|vosotros]]', [[you|tú]] [[answer|respondes]] '[[we|nosotros]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "hard",
    "transcript": "[[He|Él]] [[is|es]] [[from|de]] [[Berlin|Berlín]].",
    "content": {
      "title": "[[City|Ciudad]] [[Origins|Orígenes]]",
      "instructions": "[[What|Cuál]] [[is|es]] [[his|su]] [[nationality|nacionalidad]]?",
      "questions": [
        {
          "question": "[[He|Él]] [[is|es]]...",
          "options": ["[[French|Francés]]", "[[German|Alemán]]", "[[Italian|Italiano]]"],
          "correctAnswer": 1,
          "explanation": "[[Berlin|Berlín]] [[is|está]] [[in|en]] [[Germany|Alemania]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e34",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[I|Yo]] [[am|soy]] [[not|no]] [[Mexican|mexicano]]. [[I|Yo]] ____ [[Spanish|español]].",
    "content": {
      "title": "[[Affirmative|Afirmativo]] [[vs|vs]] [[Negative|Negativo]]",
      "instructions": "[[Complete|Completa]] [[the|el]] [[sentence|frase]].",
      "questions": [
        {
          "question": "[[I|Yo]] ____ [[Spanish|español]].",
          "options": ["[[am|soy]]", "[[is|es]]", "[[are|eres]]"],
          "correctAnswer": 0,
          "explanation": "[[I|Yo]] [[am|soy]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar Mix",
    "difficulty": "hard",
    "transcript": "[[Is|¿Está]] [[the|la]] [[pizza|pizza]] [[good|buena]]?\n[[Yes|Sí]], [[it|ella]] [[is|está]] [[delicious|deliciosa]]!",
    "content": {
      "title": "[[Opinions|Opiniones]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[pronoun|pronombre]].",
      "questions": [
        {
          "question": "____ [[is|está]] [[delicious|deliciosa]].",
          "options": ["[[She|Ella]]", "[[It|Ella (cosa)]]", "[[He|Él]]"],
          "correctAnswer": 1,
          "explanation": "[[Pizza|Pizza]] [[is|es]] [[an|un]] [[object/food|objeto/comida]], [[so|así que]] [[use|usa]] '[[It|Ella]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e36",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "content": {
      "title": "[[Short|Corta]] [[Question|Pregunta]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "____ [[it|eso]] [[from|de]] [[France|Francia]]?",
          "correctAnswer": "Is",
          "explanation": "[[For|Para]] '[[it|eso]]', [[use|usa]] '[[Is|Es]]'."
        },
        {
          "question": "____ [[you|tú]] [[ready|listo]]?",
          "correctAnswer": "Are",
          "explanation": "[[For|Para]] '[[you|tú]]', [[use|usa]] '[[Are|Estás]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e37",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "hard",
    "transcript": "[[They|Ellos]] [[are|son]] [[American|americanos]]. [[They|Ellos]] [[are|son]] [[from|de]] [[New|Nueva]] [[York|York]].",
    "content": {
      "title": "[[US|EEUU]] [[Origins|Orígenes]]",
      "instructions": "[[What|Cuál]] [[is|es]] [[their|su]] [[country|país]]?",
      "questions": [
        {
          "question": "[[They|Ellos]] [[are|son]] [[from|de]]...",
          "options": ["[[The United States|Estados Unidos]]", "[[England|Inglaterra]]", "[[Mexico|México]]"],
          "correctAnswer": 0,
          "explanation": "[[American|Americano]] [[means|significa]] [[from|de]] [[the|los]] [[United States|Estados Unidos]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e38",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Am|¿Soy]] [[I|yo]] [[your|tu]] [[friend|amigo]]?\n[[Yes|Sí]], [[you|tú]] [[are|eres]].",
    "content": {
      "title": "[[Friendship|Amistad]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[response|respuesta]] [[correct|correcta]].",
      "questions": [
        {
          "question": "[[Am|¿Soy]] [[I|yo]] [[your|tu]] [[friend|amigo]]?",
          "options": ["[[Yes|Sí]], [[you|tú]] [[are|eres]].", "[[Yes|Sí]], [[I|yo]] [[am|soy]].", "[[Yes|Sí]], [[he|él]] [[is|es]]."],
          "correctAnswer": 0,
          "explanation": "[[When|Cuando]] [[I|yo]] [[ask|pregunto]], [[you|tú]] [[answer|respondes]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "hard",
    "transcript": "[[You|Tú]] [[and|y]] [[I|yo]] [[are|somos]] [[here|aquí]].",
    "content": {
      "title": "[[Pronouns|Pronombres]] [[Group|Grupo]]",
      "instructions": "[[Replace|Reemplaza]] [[the|el]] [[subject|sujeto]].",
      "questions": [
        {
          "question": "____ [[are|estamos]] [[here|aquí]].",
          "options": ["[[They|Ellos]]", "[[We|Nosotros]]", "[[You|Vosotros]]"],
          "correctAnswer": 1,
          "explanation": "'[[You and I|Tú y yo]]' [[is|es]] '[[We|Nosotros]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e40",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Is|¿Es]] [[she|ella]] [[French|francesa]]?\n[[No|No]], [[she|ella]] [[is|es]] [[Italian|italiana]].",
    "content": {
      "title": "[[Final|Final]] [[Check|Control]]",
      "instructions": "[[Is|¿Es]] [[she|ella]] [[from|de]] [[France|Francia]]?",
      "questions": [
        {
          "question": "[[Is|¿Es]] [[she|ella]] [[from|de]] [[France|Francia]]?",
          "options": ["[[Yes|Sí]].", "[[No|No]]."],
          "correctAnswer": 1,
          "explanation": "[[She|Ella]] [[is|es]] [[Italian|italiana]], [[so|así que]] [[she|ella]] [[is not|no es]] [[from|de]] [[France|Francia]]."
        }
      ]
    },
    "topicName": "Grammar"
  },

  // ==========================================
  // MORE READING AND CONTEXTUAL GRAMMAR (41-50)
  // ==========================================
  {
    "id": "a1-u2-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "hard",
    "transcript": "[[Meet|Conoce]] [[Tom|Tom]]. [[He|Él]] [[is|es]] [[from|de]] [[London|Londres]]. [[He|Él]] [[is|es]] [[English|inglés]]. [[He|Él]] [[is|es]] [[30|30]] [[years|años]] [[old|de edad]]. [[He|Él]] [[is|es]] [[a|un]] [[doctor|médico]].",
    "content": {
      "title": "[[Tom's|Tom]] [[Profile|Perfil]]",
      "instructions": "[[Identify|Identifica]] [[Tom's|Tom]] [[job|trabajo]].",
      "questions": [
        {
          "question": "[[Is|¿Es]] [[Tom|Tom]] [[a|un]] [[student|estudiante]]?",
          "options": ["[[Yes|Sí]], [[he|él]] [[is|es]].", "[[No|No]], [[he|él]] [[is|es]] [[a|un]] [[doctor|médico]]."],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[He|Él]] [[is|es]] [[a|un]] [[doctor|médico]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Tom|Tom]] [[is|está]] [[at|en]] [[the|el]] [[hospital|hospital]]. [[He|Él]] [[is|está]] [[busy|ocupado]].",
    "content": {
      "title": "[[Tom's|Tom]] [[Profile|Perfil]]",
      "instructions": "[[Is|¿Está]] [[Tom|Tom]] [[happy|feliz]] [[or|o]] [[busy|ocupado]]?",
      "questions": [
        {
          "question": "[[Tom|Tom]] [[is|está]]...",
          "options": ["[[Happy|Feliz]]", "[[Busy|Ocupado]]", "[[Sad|Triste]]"],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[He|Él]] [[is|está]] [[busy|ocupado]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "hard",
    "transcript": "[[Tom|Tom]] [[is|es]] [[from|de]] [[London|Londres]]. [[London|Londres]] [[is|está]] [[in|en]] [[England|Inglaterra]].",
    "content": {
      "title": "[[Tom's|Tom]] [[Profile|Perfil]]",
      "instructions": "[[Select|Selecciona]] [[the|el]] [[country|país]].",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[Tom|Tom]]?",
          "options": ["[[France|Francia]]", "[[England|Inglaterra]]", "[[Germany|Alemania]]"],
          "correctAnswer": 1,
          "explanation": "[[Tom|Tom]] [[is|es]] [[from|de]] [[London|Londres]], [[England|Inglaterra]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e44",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "content": {
      "title": "[[Tom's|Tom]] [[Story|Historia]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[story|historia]] [[with|con]] '[[is|es/está]]' [[or|o]] '[[is not|no es/está]]'.",
      "questions": [
        {
          "question": "[[Tom|Tom]] ____ [[from|de]] [[Spain|España]].",
          "correctAnswer": "is not",
          "explanation": "[[Tom|Tom]] [[is|es]] [[from|de]] [[England|Inglaterra]]."
        },
        {
          "question": "[[He|Él]] ____ [[English|inglés]].",
          "correctAnswer": "is",
          "explanation": "[[He|Él]] [[is|es]] [[from|de]] [[London|Londres]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e45",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "hard",
    "transcript": "[[Tom|Tom]] [[and|y]] [[Ana|Ana]] [[are|son]] [[friends|amigos]]. [[They|Ellos]] [[are|están]] [[in|en]] [[the|el]] [[park|parque]].",
    "content": {
      "title": "[[Tom and Ana|Tom y Ana]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[pronoun|pronombre]] [[correct|correcto]].",
      "questions": [
        {
          "question": "____ [[are|están]] [[in|en]] [[the|el]] [[park|parque]].",
          "options": ["[[We|Nosotros]]", "[[They|Ellos]]", "[[He|Él]]"],
          "correctAnswer": 1,
          "explanation": "'[[Tom and Ana|Tom y Ana]]' [[is|es]] '[[They|Ellos]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e46",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Is|¿Está]] [[the|el]] [[park|parque]] [[big|grande]]?\n[[Yes|Sí]], [[it|él]] [[is|es]].",
    "content": {
      "title": "[[In|En]] [[the|el]] [[Park|Parque]]",
      "instructions": "[[Is|¿Es]] [[the|el]] [[park|parque]] [[small|pequeño]]?",
      "questions": [
        {
          "question": "[[Is|¿Es]] [[the|el]] [[park|parque]] [[small|pequeño]]?",
          "options": ["[[Yes|Sí]].", "[[No|No]], [[it|él]] [[is|es]] [[big|grande]]."],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[It|Él]] [[is|es]] [[big|grande]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Questions",
    "difficulty": "hard",
    "transcript": "[[Are|¿Están]] [[they|ellos]] [[happy|felices]]?\n[[Yes|Sí]], [[they|ellos]] [[are|están]].",
    "content": {
      "title": "[[In|En]] [[the|el]] [[Park|Parque]]",
      "instructions": "[[What|Cuál]] [[is|es]] [[the|la]] [[correct|correcta]] [[question|pregunta]]?",
      "questions": [
        {
          "question": "____ [[they|ellos]] [[happy|felices]]?",
          "options": ["[[Is|Es]]", "[[Are|Están]]", "[[Am|Soy]]"],
          "correctAnswer": 1,
          "explanation": "[[For|Para]] '[[they|ellos]]', [[use|usa]] '[[Are|Están]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e48",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[I|Yo]] [[am|estoy]] [[with|con]] [[Tom|Tom]]. [[We|Nosotros]] [[are|estamos]] [[in|en]] [[Madrid|Madrid]].",
    "content": {
      "title": "[[Ana's|Ana]] [[Story|Historia]]",
      "instructions": "[[Where|Dónde]] [[is|está]] [[Ana|Ana]]?",
      "questions": [
        {
          "question": "[[Ana|Ana]] [[is|está]] [[in|en]]...",
          "options": ["[[London|Londres]]", "[[Madrid|Madrid]]", "[[Paris|París]]"],
          "correctAnswer": 1,
          "explanation": "[[She|Ella]] [[says|dice]] '[[We|Nosotros]] [[are|estamos]] [[in|en]] [[Madrid|Madrid]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[David|David]] [[is|está]] [[not|no]] [[in|en]] [[Madrid|Madrid]]. [[He|Él]] [[is|está]] [[in|en]] [[Barcelona|Barcelona]].",
    "content": {
      "title": "[[David's|David]] [[Location|Ubicación]]",
      "instructions": "[[Select|Selecciona]] [[the|la]] [[correct|correcta]] [[sentence|frase]].",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[is|está]] [[David|David]]?",
          "options": [
            "[[He|Él]] [[is|está]] [[in|en]] [[Madrid|Madrid]].",
            "[[He|Él]] [[is|está]] [[in|en]] [[Barcelona|Barcelona]].",
            "[[He|Él]] [[is|está]] [[at|en]] [[home|casa]]."
          ],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]] '[[He|Él]] [[is|está]] [[in|en]] [[Barcelona|Barcelona]]'."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u2-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Questions",
    "difficulty": "hard",
    "transcript": "[[Is|¿Está]] [[David|David]] [[with|con]] [[Ana|Ana]]?\n[[No|No]], [[he|él]] [[isn't|no lo está]].",
    "content": {
      "title": "[[Friendship|Amistad]]",
      "instructions": "[[Is|¿Está]] [[David|David]] [[with|con]] [[Ana|Ana]]?",
      "questions": [
        {
          "question": "[[Is|¿Está]] [[David|David]] [[with|con]] [[Ana|Ana]]?",
          "options": ["[[Yes|Sí]], [[he|él]] [[is|está]].", "[[No|No]], [[he|él]] [[isn't|no lo está]]."],
          "correctAnswer": 1,
          "explanation": "[[Ana|Ana]] [[is|está]] [[in|en]] [[Madrid|Madrid]] [[and|y]] [[David|David]] [[is|está]] [[in|en]] [[Barcelona|Barcelona]]."
        }
      ]
    },
    "topicName": "Comprehension"
  },

  // ==========================================
  // ADVANCED SCRAMBLES AND CUMULATIVE REVIEW (51-60)
  // ==========================================
  {
    "id": "a1-u2-e51",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "content": {
      "title": "[[Build|Construye]] [[the|la]] [[Sentence|Frase]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "words": ["[[parents|padres]]", "[[My|Mis]]", "[[are|son]]", "[[not|no]]", "[[from|de]]", "[[Italy|Italia]]", "."],
      "correctOrder": ["My", "parents", "are", "not", "from", "Italy", "."],
      "explanation": "[[Subject|Sujeto]] (My parents) + [[Verb|Verbo]] (are) + [[Negative|Negativo]] (not) + [[Origin|Origen]] (from Italy)."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e52",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Questions",
    "difficulty": "hard",
    "content": {
      "title": "[[Build|Construye]] [[the|la]] [[Question|Pregunta]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "words": ["[[from|de]]", "[[Is|¿Es]]", "[[your|tu]]", "[[teacher|profesor]]", "[[England|Inglaterra]]", "?"],
      "correctOrder": ["Is", "your", "teacher", "from", "England", "?"],
      "explanation": "[[Verb|Verbo]] (Is) + [[Subject|Sujeto]] (your teacher) + [[Origin|Origen]] (from England)?"
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[I|Yo]] [[am|soy]] [[Spanish|español]], [[but|pero]] [[you|tú]] [[are|eres]] [[Mexican|mexicano]].",
    "content": {
      "title": "[[Nationalities|Nacionalidades]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[comparison|comparación]].",
      "questions": [
        {
          "question": "[[You|Tú]] ____ [[Mexican|mexicano]].",
          "options": ["[[is|es]]", "[[are|eres]]", "[[am|soy]]"],
          "correctAnswer": 1,
          "explanation": "[[With|Con]] '[[you|tú]]', [[the|el]] [[verb|verbo]] [[is|es]] '[[are|eres]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "hard",
    "transcript": "[[The|El]] [[sushi|sushi]] [[is|es]] [[Japanese|japonés]]. [[The|El]] [[taco|taco]] [[is|es]] [[Mexican|mexicano]].",
    "content": {
      "title": "[[Food|Comida]] [[Review|Repaso]]",
      "instructions": "[[Which|Cuál]] [[is|es]] [[Japanese|japonés]]?",
      "questions": [
        {
          "question": "[[Select|Selecciona]] [[the|el]] [[correct|correcto]].",
          "options": ["[[The taco|El taco]]", "[[The sushi|El sushi]]", "[[The pizza|La pizza]]"],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[sushi|sushi]] [[is|es]] [[Japanese|japonés]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Are|¿Estás]] [[you|tú]] [[from|de]] [[France|Francia]]?\n[[No|No]], [[I|yo]] [[am|soy]] [[from|de]] [[Italy|Italia]].",
    "content": {
      "title": "[[Conversation|Conversación]] [[Mix|Mezcla]]",
      "instructions": "[[Identify|Identifica]] [[the|la]] [[nationality|nacionalidad]].",
      "questions": [
        {
          "question": "[[The|La]] [[person|persona]] [[is|es]]...",
          "options": ["[[French|Francesa]]", "[[Italian|Italiana]]", "[[English|Inglesa]]"],
          "correctAnswer": 1,
          "explanation": "[[The|La]] [[person|persona]] [[is|es]] [[from|de]] [[Italy|Italia]], [[so|así que]] [[she|ella]] [[is|es]] [[Italian|italiana]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e56",
    "type": "fill-blank",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "content": {
      "title": "[[Short|Cortas]] [[Forms|Formas]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "____ [[your|tus]] [[friends|amigos]] [[German|alemanes]]?",
          "correctAnswer": "Are",
          "explanation": "[[Friends|Amigos]] [[is|es]] [[plural|plural]] (they), [[so|así que]] [[use|usa]] '[[Are|Son]]'."
        },
        {
          "question": "____ [[this|esto]] [[a|un]] [[new|nuevo]] [[mobile|móvil]]?",
          "correctAnswer": "Is",
          "explanation": "[[This|Esto]] [[is|es]] [[singular|singular]] (it), [[so|así que]] [[use|usa]] '[[Is|Es]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e57",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Subject Pronouns",
    "difficulty": "hard",
    "transcript": "[[The|La]] [[woman|mujer]] [[is|es]] [[French|francesa]].",
    "content": {
      "title": "[[Pronoun|Pronombre]] [[Final|Final]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[pronoun|pronombre]].",
      "questions": [
        {
          "question": "____ [[is|es]] [[French|francesa]].",
          "options": ["[[He|Él]]", "[[She|Ella]]", "[[It|Eso]]"],
          "correctAnswer": 1,
          "explanation": "'[[The woman|La mujer]]' [[is|es]] '[[She|Ella]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "hard",
    "transcript": "[[Is|¿Es]] [[the|la]] [[car|coche]] [[red|rojo]]?\n[[No|No]], [[it|él]] ____ [[not|no]].",
    "content": {
      "title": "[[Car|Coche]] [[Color|Color]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[short|corta]] [[answer|respuesta]].",
      "questions": [
        {
          "question": "[[Select|Selecciona]] [[the|el]] [[verb|verbo]].",
          "options": ["[[am|soy]]", "[[is|es]]", "[[are|eres]]"],
          "correctAnswer": 1,
          "explanation": "[[For|Para]] '[[it|él]]', [[use|usa]] '[[is|es]]'."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u2-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "hard",
    "transcript": "[[Mercedes|Mercedes]] [[is|es]] [[a|una]] [[German|alemana]] [[brand|marca]].",
    "content": {
      "title": "[[Brands|Marcas]] [[Review|Repaso]]",
      "instructions": "[[Identify|Identifica]] [[the|el]] [[country|país]].",
      "questions": [
        {
          "question": "[[Mercedes|Mercedes]] [[is|es]] [[from|de]]...",
          "options": ["[[Italy|Italia]]", "[[Germany|Alemania]]", "[[France|Francia]]"],
          "correctAnswer": 1,
          "explanation": "[[Mercedes|Mercedes]] [[is|es]] [[German|alemana]] (from Germany)."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u2-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Cumulative",
    "difficulty": "hard",
    "transcript": "[[Are|¿Somos]] [[we|nosotros]] [[ready|listos]] [[for|para]] [[Unit|Unidad]] [[3|3]]?\n[[Yes|Sí]], [[we|nosotros]] [[are|estamos]]!",
    "content": {
      "title": "[[Final|Final]] [[Victory|Victoria]]",
      "instructions": "[[Are|¿Estamos]] [[we|nosotros]] [[ready|listos]]?",
      "questions": [
        {
          "question": "[[Are|¿Estamos]] [[we|nosotros]] [[ready|listos]]?",
          "options": ["[[Yes|Sí]]!", "[[No|No]]."],
          "correctAnswer": 0,
          "explanation": "[[You|Tú]] [[are|estás]] [[ready|listo]] [[for|para]] [[the|el]] [[next|siguiente]] [[level|nivel]]!"
        }
      ]
    },
    "topicName": "Grammar"
  }
];

