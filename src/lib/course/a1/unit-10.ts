import { Exercise } from '@/lib/exercise-generator';

export const UNIT_10_EXERCISES: Exercise[] = [
  {
    "id": "a1-u10-e1",
    "type": "flashcard",
    "level": "A1",
    "topic": "Module 1 Review",
    "difficulty": "easy",
    "transcript": "Student. Teacher. Spain. Spanish. Happy. Sad. Pen. Book. Father. Mother. Red. Blue. Doctor. Nurse.",
    "content": {
      "title": "[[Module|Módulo]] 1 [[Review|Repaso]]",
      "instructions": "[[Review|Repasa]] [[the|las]] [[most|más]] [[important|importantes]] [[words|palabras]] [[from|de]] [[Module|Módulo]] 1.",
      "items": [
        { "front": "[[Student|Estudiante]] / [[Teacher|Profesor/a]]", "back": "Estudiante / Profesor" },
        { "front": "[[Country|País]] / [[Nationality|Nacionalidad]]", "back": "País / Nacionalidad" },
        { "front": "[[Happy|Feliz]] / [[Sad|Triste]]", "back": "Feliz / Triste" },
        { "front": "[[Pen|Bolígrafo]] / [[Book|Libro]]", "back": "Bolígrafo / Libro" },
        { "front": "[[Parents|Padres]] / [[Children|Hijos]]", "back": "Padres / Hijos" },
        { "front": "[[Red|Rojo]] / [[Blue|Azul]]", "back": "Rojo / Azul" },
        { "front": "[[Doctor|Médico]] / [[Nurse|Enfermero/a]]", "back": "Médico / Enfermero" }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e2",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Verb To Be",
    "difficulty": "easy",
    "transcript": "I am a student and she is a teacher.",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[combination|combinación]].",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[a|un]] [[student|estudiante]] [[and|y]] [[she|ella]] _______ [[a|un/una]] [[teacher|profesor/a]].",
          "options": ["[[am / are|soy / son]]", "[[am / is|soy / es]]", "[[is / am|es / soy]]"],
          "correctAnswer": 1,
          "explanation": "[[I|Yo]] [[am|soy]], [[She|Ella]] [[is|es]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e3",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "easy",
    "transcript": "Are they from Mexico? No, they are Spanish.",
    "content": {
      "title": "[[Nationalities|Nacionalidades]]",
      "instructions": "[[Complete|Completa]] [[the|el]] [[dialogue|diálogo]].",
      "questions": [
        {
          "question": "_______ [[they|ellos]] [[from|de]] [[Mexico|México]]?",
          "options": ["[[Is|Es]]", "[[Are|Son]]", "[[Am|Soy]]"],
          "correctAnswer": 1,
          "explanation": "[[Are|Son]] [[they|ellos]]...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e4",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Emotions",
    "difficulty": "easy",
    "transcript": "We are very tired today.",
    "content": {
      "title": "[[Emotions|Emociones]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[We|Nosotros]] [[are|estamos]] [[very|muy]] [[tired|cansados]] [[today|hoy]].",
      "words": ["[[today|hoy]].", "[[tired|cansados]]", "[[very|muy]]", "[[are|estamos]]", "[[We|Nosotros]]"],
      "explanation": "[[Subject|Sujeto]] + [[verb|verbo]] + [[adverb|adverbio]] + [[adjective|adjetivo]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e5",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Articles",
    "difficulty": "easy",
    "transcript": "This is an apple and that is a banana.",
    "content": {
      "title": "[[Articles|Artículos]] [[A/An|A/An]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[option|opción]].",
      "questions": [
        {
          "question": "[[This|Esto]] [[is|es]] _______ [[apple|manzana]].",
          "options": ["[[a|una]]", "[[an|una]]", "[[the|la]]"],
          "correctAnswer": 1,
          "explanation": "[[Use|Usa]] '[[an|an]]' [[before|antes de]] [[vowels|vocales]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e6",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive 's",
    "difficulty": "easy",
    "transcript": "Where is Peter's book?",
    "content": {
      "title": "[[Possessive|Posesivo]] 's",
      "instructions": "[[Order|Ordena]] [[the|la]] [[question|pregunta]].",
      "correctSentence": "[[Where|Dónde]] [[is|está]] [[Peter's|de Peter]] [[book|libro]]?",
      "words": ["[[book|libro]]?", "[[Peter's|de Peter]]", "[[is|está]]", "[[Where|Dónde]]"],
      "explanation": "[[Where|Dónde]] + [[is|está]] + [[object|objeto]] [[of|de]] [[Peter|Peter]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e7",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Colors",
    "difficulty": "easy",
    "transcript": "My new car is blue.",
    "content": {
      "title": "[[Colors|Colores]]",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|oración]].",
      "questions": [
        {
          "question": "[[My|Mi]] [[new|nuevo]] [[car|coche]] [[is|es]] _______.",
          "options": ["[[blue|azul]]", "[[happy|feliz]]", "[[Spanish|español]]"],
          "correctAnswer": 0,
          "explanation": "[[Blue|Azul]] [[is|es]] [[a|un]] [[color|color]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e8",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "easy",
    "transcript": "I am thirty years old.",
    "content": {
      "title": "[[Ages|Edades]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[I|Yo]] [[am|tengo]] [[thirty|treinta]] [[years|años]] [[old|de edad]].",
      "words": ["[[old|de edad]].", "[[years|años]]", "[[thirty|treinta]]", "[[am|tengo]]", "[[I|Yo]]"],
      "explanation": "[[In|En]] [[English|inglés]], [[we|nosotros]] [[use|usamos]] '[[to be|ser/estar]]' [[for|para]] [[age|edad]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e9",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "easy",
    "transcript": "He works in a hospital. He is a doctor.",
    "content": {
      "title": "[[Jobs|Trabajos]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[profession|profesión]].",
      "questions": [
        {
          "question": "[[He|Él]] [[works|trabaja]] [[in|en]] [[a|un]] [[hospital|hospital]]. [[He|Él]] [[is|es]] [[a|un]] _______.",
          "options": ["[[teacher|profesor]]", "[[doctor|médico]]", "[[pilot|piloto]]"],
          "correctAnswer": 1,
          "explanation": "[[Doctors|Médicos]] [[work|trabajan]] [[in|en]] [[hospitals|hospitales]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e10",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "easy",
    "transcript": "Whose bag is this? It's mine.",
    "content": {
      "title": "[[Possession|Posesión]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[question|pregunta]] [[word|palabra]].",
      "questions": [
        {
          "question": "_______ [[bag|bolso]] [[is|es]] [[this|este]]?",
          "options": ["[[Who|Quién]]", "[[Whose|De quién]]", "[[What|Qué]]"],
          "correctAnswer": 1,
          "explanation": "[[Whose|De quién]] [[is|es]] [[for|para]] [[possession|posesión]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  // --- READING 1: INTRODUCING A FAMILY (11-14) ---
  {
    "id": "a1-u10-e11",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hello, I am Mark. I am from the USA. This is my wife, Linda. She is a nurse. We have a son, Toby. Toby is six years old.",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|La]] [[Family|Familia]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]].",
      "questions": [
        {
          "question": "[[Hello|Hola]], [[I|Yo]] [[am|soy]] [[Mark|Mark]]. [[I|Yo]] [[am|soy]] [[from|de]] [[the|los]] [[USA|EE.UU]]. [[This|Esta]] [[is|es]] [[my|mi]] [[wife|esposa]], [[Linda|Linda]]. [[She|Ella]] [[is|es]] [[a|una]] [[nurse|enfermera]]. [[We|Nosotros]] [[have|tenemos]] [[a|un]] [[son|hijo]], [[Toby|Toby]]. [[Toby|Toby]] [[is|tiene]] [[six|seis]] [[years|años]] [[old|de edad]].",
          "options": ["[[I|Yo]] [[read|leo]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Text|Texto]] [[only|solamente]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e12",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hello, I am Mark. I am from the USA. This is my wife, Linda. She is a nurse. We have a son, Toby. Toby is six years old.",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|La]] [[Family|Familia]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[Mark|Mark]] [[from|de]]?",
          "options": ["[[Spain|España]]", "[[The USA|EE.UU.]]", "[[The UK|Reino Unido]]"],
          "correctAnswer": 1,
          "explanation": "[[Mark|Mark]] [[says|dice]]: \"[[I|Yo]] [[am|soy]] [[from|de]] [[the|los]] [[USA|EE.UU.]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e13",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hello, I am Mark. I am from the USA. This is my wife, Linda. She is a nurse. We have a son, Toby. Toby is six years old.",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|La]] [[Family|Familia]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es]] [[Linda's|de Linda]] [[job|trabajo]]?",
          "options": ["[[Teacher|Profesora]]", "[[Doctor|Médico]]", "[[Nurse|Enfermera]]"],
          "correctAnswer": 2,
          "explanation": "[[Linda|Linda]] [[is|es]] [[a|una]] [[nurse|enfermera]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e14",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "Hello, I am Mark. I am from the USA. This is my wife, Linda. She is a nurse. We have a son, Toby. Toby is six years old.",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|La]] [[Family|Familia]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Toby|Toby]]?",
          "options": ["[[Six|Seis]]", "[[Seven|Siete]]", "[[Five|Cinco]]"],
          "correctAnswer": 0,
          "explanation": "[[Toby|Toby]] [[is|tiene]] [[six|seis]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e15",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "medium",
    "transcript": "Fifty plus twenty is seventy.",
    "content": {
      "title": "[[Math|Matemáticas]] [[Review|Repaso]]",
      "instructions": "[[Solve|Resuelve]] [[the|la]] [[sum|suma]].",
      "questions": [
        {
          "question": "[[Fifty|Cincuenta]] + [[twenty|veinte]] = _______?",
          "options": ["[[Sixty|Sesenta]]", "[[Seventy|Setenta]]", "[[Eighty|Ochenta]]"],
          "correctAnswer": 1,
          "explanation": "50 + 20 = 70 ([[seventy|setenta]])."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e16",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Descriptions",
    "difficulty": "medium",
    "transcript": "My mother has short grey hair.",
    "content": {
      "title": "[[Descriptions|Descripciones]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[My|Mi]] [[mother|madre]] [[has|tiene]] [[short|corto]] [[grey|gris]] [[hair|pelo]].",
      "words": ["[[hair|pelo]].", "[[grey|gris]]", "[[short|corto]]", "[[has|tiene]]", "[[mother|madre]]", "[[My|Mi]]"],
      "explanation": "[[Adjectives|Adjetivos]] ([[short|corto]], [[grey|gris]]) [[before|antes de]] [[noun|sustantivo]] ([[hair|pelo]])."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e17",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "medium",
    "transcript": "Whose children are they? They are the Smiths' children.",
    "content": {
      "title": "[[Plural|Plural]] [[Possession|Posesión]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]].",
      "questions": [
        {
          "question": "[[They|Ellos]] [[are|son]] [[the|los]] _______ [[children|hijos]].",
          "options": ["[[Smiths|Smiths]]", "[[Smiths'|Smiths]]", "[[Smith's|Smith]]"],
          "correctAnswer": 1,
          "explanation": "[[Plural|Plural]] [[ending|terminando]] [[in|en]] s [[only|solo]] [[needs|necesita]] [['|']]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e18",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "medium",
    "transcript": "Is she bored? No, she is very busy.",
    "content": {
      "title": "[[Emotions|Emociones]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]].",
      "questions": [
        {
          "question": "_______ [[she|ella]] [[bored|aburrida]]?",
          "options": ["[[Are|Son/Están]]", "[[Is|Está]]", "[[Am|Soy]]"],
          "correctAnswer": 1,
          "explanation": "[[Is|Está]] [[she|ella]]...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e19",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "medium",
    "transcript": "The teacher's pen is red.",
    "content": {
      "title": "[[Possessive|Posesivo]] 's",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[The|El]] [[teacher's|del profesor]] [[pen|bolígrafo]] [[is|es]] [[red|rojo]].",
      "words": ["[[red|rojo]].", "[[is|es]]", "[[pen|bolígrafo]]", "[[teacher's|del profesor]]", "[[The|El]]"],
      "explanation": "[[The|El]] [[pen|bolígrafo]] [[of|de]] [[the|el]] [[teacher|profesor]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e20",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "medium",
    "transcript": "What is your job? I am a pilot.",
    "content": {
      "title": "[[Jobs|Trabajos]]",
      "instructions": "[[Complete|Completa]] [[the|el]] [[dialogue|diálogo]].",
      "questions": [
        {
          "question": "[[What|Qué]] _______ [[your|tu]] [[job|trabajo]]?",
          "options": ["[[are|es]]", "[[is|es]]", "[[am|soy]]"],
          "correctAnswer": 1,
          "explanation": "[[What|Qué]] [[is|es]] [[your|tu]] [[job|trabajo]]?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e21",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "medium",
    "transcript": "They are not from France.",
    "content": {
      "title": "[[Negatives|Negativos]]",
      "instructions": "[[Build|Construye]] [[the|la]] [[sentence|oración]].",
      "correctSentence": "[[They|Ellos]] [[are|son]] [[not|no]] [[from|de]] [[France|Francia]].",
      "words": ["[[France|Francia]].", "[[from|de]]", "[[not|no]]", "[[are|son]]", "[[They|Ellos]]"],
      "explanation": "[[Subject|Sujeto]] + [[are|son]] + [[not|no]] + [[from|de]] + [[place|lugar]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e22",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "medium",
    "transcript": "My son is seven and my daughter is ten.",
    "content": {
      "title": "[[Family|Familia]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
      "questions": [
        {
          "question": "[[My|Mi]] _______ [[is|tiene]] [[ten|diez]] [[years|años]] [[old|de edad]].",
          "options": ["[[daughter|hija]]", "[[father|padre]]", "[[husband|esposo]]"],
          "correctAnswer": 0,
          "explanation": "[[Daughter|Hija]] [[is|es]] [[for|para]] [[girls|niñas]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e23",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive",
    "difficulty": "medium",
    "transcript": "Is that your brother's car?",
    "content": {
      "title": "[[Possessive|Posesivo]] 's",
      "instructions": "[[Order|Ordena]] [[the|la]] [[question|pregunta]].",
      "correctSentence": "[[Is|Es]] [[that|aquel]] [[your|tu]] [[brother's|de tu hermano]] [[car|coche]]?",
      "words": ["[[car|coche]]?", "[[brother's|de tu hermano]]", "[[your|tu]]", "[[that|aquel]]", "[[Is|Es]]"],
      "explanation": "[[Is|Es]] + [[that|aquel]] + [[owner|dueño]] [['s|'s]] + [[object|objeto]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e24",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "medium",
    "transcript": "I have an orange and a banana.",
    "content": {
      "title": "[[Articles|Artículos]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[option|opción]].",
      "questions": [
        {
          "question": "[[I|Yo]] [[have|tengo]] _______ [[orange|naranja]].",
          "options": ["[[a|una]]", "[[an|una]]", "[[the|la]]"],
          "correctAnswer": 1,
          "explanation": "[[Use|Usa]] '[[an|an]]' [[before|antes de]] [[orange|naranja]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  // --- READING 2: THE CLASSROOM (25-28) ---
  {
    "id": "a1-u10-e25",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "This is our classroom. There is a big green desk for the teacher. There are twenty small blue desks for the students. We have ten books and five pens.",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|El]] [[Classroom|Aula]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]].",
      "questions": [
        {
          "question": "[[This|Esta]] [[is|es]] [[our|nuestra]] [[classroom|aula]]. [[There|Allí]] [[is|hay]] [[a|un]] [[big|grande]] [[green|verde]] [[desk|escritorio]] [[for|para]] [[the|el]] [[teacher|profesor]]. [[There|Allí]] [[are|hay]] [[twenty|veinte]] [[small|pequeños]] [[blue|azules]] [[desks|escritorios]] [[for|para]] [[the|los]] [[students|estudiantes]]. [[We|Nosotros]] [[have|tenemos]] [[ten|diez]] [[books|libros]] [[and|y]] [[five|cinco]] [[pens|bolígrafos]].",
          "options": ["[[I|Yo]] [[read|leo]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Text|Texto]] [[only|solamente]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e26",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "This is our classroom. There is a big green desk for the teacher. There are twenty small blue desks for the students. We have ten books and five pens.",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|El]] [[Classroom|Aula]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|De qué]] [[color|color]] [[is|es]] [[the|el]] [[teacher's|del profesor]] [[desk|escritorio]]?",
          "options": ["[[Blue|Azul]]", "[[Green|Verde]]", "[[Red|Rojo]]"],
          "correctAnswer": 1,
          "explanation": "[[The|El]] [[desk|escritorio]] [[is|es]] [[green|verde]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e27",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "This is our classroom. There is a big green desk for the teacher. There are twenty small blue desks for the students. We have ten books and five pens.",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|El]] [[Classroom|Aula]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[students'|de alumnos]] [[desks|escritorios]] [[are|hay]] [[there|allí]]?",
          "options": ["[[Ten|Diez]]", "[[Five|Cinco]]", "[[Twenty|Veinte]]"],
          "correctAnswer": 2,
          "explanation": "[[There|Allí]] [[are|hay]] [[twenty|veinte]] [[desks|escritorios]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e28",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "This is our classroom. There is a big green desk for the teacher. There are twenty small blue desks for the students. We have ten books and five pens.",
    "content": {
      "title": "[[Reading|Lectura]]: [[The|El]] [[Classroom|Aula]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cuántos]] [[many|muchos]] [[books|libros]] [[do|aux]] [[they|ellos]] [[have|tienen]]?",
          "options": ["[[Ten|Diez]]", "[[Five|Cinco]]", "[[Twenty|Veinte]]"],
          "correctAnswer": 0,
          "explanation": "[[They|Ellos]] [[have|tienen]] [[ten|diez]] [[books|libros]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e29",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "medium",
    "transcript": "Is your sister happy? Yes, she is very happy.",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
      "questions": [
        {
          "question": "_______ [[your|tu]] [[sister|hermana]] [[happy|feliz]]?",
          "options": ["[[Is|Es]]", "[[Are|Son]]", "[[Am|Soy]]"],
          "correctAnswer": 0,
          "explanation": "[[Is|Está]] [[she|ella]]...?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e30",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessive",
    "difficulty": "medium",
    "transcript": "Whose pens are these? They are my brother's.",
    "content": {
      "title": "[[Whose|De quién]]?",
      "instructions": "[[Order|Ordena]] [[la|the]] [[question|pregunta]].",
      "correctSentence": "[[Whose|De quién]] [[pens|bolígrafos]] [[are|son]] [[these|estos]]?",
      "words": ["[[these|estos]]?", "[[are|son]]", "[[pens|bolígrafos]]", "[[Whose|De quién]]"],
      "explanation": "[[Whose|De quién]] + [[plural|plural]] + [[are|son]] + [[these|estos]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e31",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Numbers",
    "difficulty": "medium",
    "transcript": "Twenty plus eighty is one hundred.",
    "content": {
      "title": "[[Numbers|Números]] [[1-100|1-100]]",
      "instructions": "[[Solve|Resuelve]] [[the|la]] [[sum|suma]].",
      "questions": [
        {
          "question": "[[Twenty|Veinte]] + [[eighty|ochenta]] = _______?",
          "options": ["[[One hundred|Cien]]", "[[Ninety|Noventa]]", "[[Seventy|Setenta]]"],
          "correctAnswer": 0,
          "explanation": "20 + 80 = 100 ([[one hundred|cien]])."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e32",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Jobs",
    "difficulty": "medium",
    "transcript": "My father is a clever engineer.",
    "content": {
      "title": "[[Jobs|Trabajos]] [[and|y]] [[Adjectives|Adjetivos]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[My|Mi]] [[father|padre]] [[is|es]] [[a|un]] [[clever|listo]] [[engineer|ingeniero]].",
      "words": ["[[engineer|ingeniero]].", "[[clever|listo]]", "[[a|un]]", "[[is|es]]", "[[father|padre]]", "[[My|Mi]]"],
      "explanation": "[[Adjective|Adjetivo]] [[before|antes de]] [[noun|sustantivo]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e33",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "medium",
    "transcript": "Is this your car? Yes, it is.",
    "content": {
      "title": "[[Short|Cortas]] [[Answers|Respuestas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[answer|respuesta]].",
      "questions": [
        {
          "question": "[[Is|Es]] [[this|este]] [[your|tu]] [[car|coche]]?",
          "options": ["[[Yes, it is.|Sí, lo es.]]", "[[Yes, I am.|Sí, lo soy.]]", "[[Yes, they are.|Sí, lo son.]]"],
          "correctAnswer": 0,
          "explanation": "[[Use|Usa]] '[[it|lo]]' [[for|para]] [[the|el]] [[car|coche]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e34",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Family",
    "difficulty": "medium",
    "transcript": "She is my brother's daughter.",
    "content": {
      "title": "[[Relationships|Relaciones]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[She|Ella]] [[is|es]] [[my|mi]] [[brother's|de mi hermano]] [[daughter|hija]].",
      "words": ["[[daughter|hija]].", "[[brother's|de mi hermano]]", "[[my|mi]]", "[[is|es]]", "[[She|Ella]]"],
      "explanation": "[[The|La]] [[daughter|hija]] [[of|de]] [[my|mi]] [[brother|hermano]] [[is|es]] [[my|mi]] [[niece|sobrina]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e35",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Prices",
    "difficulty": "medium",
    "transcript": "How much is this book? It is fifteen euros.",
    "content": {
      "title": "[[Prices|Precios]]",
      "instructions": "[[Complete|Completa]] [[the|el]] [[dialogue|diálogo]].",
      "questions": [
        {
          "question": "[[How|Cuánto]] _______ [[is|es]] [[this|este]] [[book|libro]]?",
          "options": ["[[many|muchos]]", "[[much|mucho]]", "[[old|viejo]]"],
          "correctAnswer": 1,
          "explanation": "[[How much|Cuánto]] [[is|es]] [[for|para]] [[prices|precios]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e36",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Nationalities",
    "difficulty": "medium",
    "transcript": "We are from Italy. We are Italian.",
    "content": {
      "title": "[[Nationalities|Nacionalidades]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[nationality|nacionalidad]].",
      "questions": [
        {
          "question": "[[We|Nosotros]] [[are|somos]] [[from|de]] [[Italy|Italia]]. [[We|Nosotros]] [[are|somos]] _______.",
          "options": ["[[Italian|italianos]]", "[[Italy|Italia]]", "[[French|franceses]]"],
          "correctAnswer": 0,
          "explanation": "[[People|Personas]] [[from|de]] [[Italy|Italia]] [[are|son]] [[Italian|italianos]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e37",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Emotions",
    "difficulty": "medium",
    "transcript": "Why are you so sad today?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[Why|Por qué]] [[are|estás]] [[you|tú]] [[so|tan]] [[sad|triste]] [[today|hoy]]?",
      "words": ["[[today|hoy]]?", "[[sad|triste]]", "[[so|tan]]", "[[you|tú]]", "[[are|estás]]", "[[Why|Por qué]]"],
      "explanation": "[[Question|Pregunta]] [[word|palabra]] + [[verb|verbo]] + [[subject|sujeto]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e38",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "medium",
    "transcript": "Is that your mother's bag?",
    "content": {
      "title": "[[Possessive|Posesivo]] 's",
      "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|oración]].",
      "questions": [
        {
          "question": "[[Is|Es]] [[that|aquella]] [[your|tu]] [[mother|madre]] _______ [[bag|bolso]]?",
          "options": ["[['s|'s]]", "[[is|es]]", "[[s|s]]"],
          "correctAnswer": 0,
          "explanation": "[[Mother's|De la madre]] [[bag|bolso]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  // --- READING 3: JOB DESCRIPTIONS (39-42) ---
  {
    "id": "a1-u10-e39",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "I am Carlos. I am a chef in a small Spanish restaurant. My wife, Elena, is a teacher. Elena's school is very big. She is happy at work.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Jobs|Trabajos]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]].",
      "questions": [
        {
          "question": "[[I|Yo]] [[am|soy]] [[Carlos|Carlos]]. [[I|Yo]] [[am|soy]] [[a|un]] [[chef|cocinero]] [[in|en]] [[a|un]] [[small|pequeño]] [[Spanish|español]] [[restaurant|restaurante]]. [[My|Mi]] [[wife|esposa]], [[Elena|Elena]], [[is|es]] [[a|una]] [[teacher|profesora]]. [[Elena's|De Elena]] [[school|escuela]] [[is|es]] [[very|muy]] [[big|grande]]. [[She|Ella]] [[is|está]] [[happy|feliz]] [[at|en]] [[work|el trabajo]].",
          "options": ["[[I|Yo]] [[read|leo]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Text|Texto]] [[only|solamente]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e40",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "I am Carlos. I am a chef in a small Spanish restaurant. My wife, Elena, is a teacher. Elena's school is very big. She is happy at work.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Carlos|Carlos]] [[and|y]] [[Elena|Elena]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es]] [[Carlos's|de Carlos]] [[job|trabajo]]?",
          "options": ["[[Teacher|Profesor]]", "[[Chef|Cocinero]]", "[[Nurse|Enfermero]]"],
          "correctAnswer": 1,
          "explanation": "[[Carlos|Carlos]] [[is|es]] [[a|un]] [[chef|cocinero]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e41",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "I am Carlos. I am a chef in a small Spanish restaurant. My wife, Elena, is a teacher. Elena's school is very big. She is happy at work.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Carlos|Carlos]] [[and|y]] [[Elena|Elena]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cómo]] [[is|es]] [[Elena's|de Elena]] [[school|escuela]]?",
          "options": ["[[Small|Pequeña]]", "[[Old|Vieja]]", "[[Big|Grande]]"],
          "correctAnswer": 2,
          "explanation": "[[The|La]] [[school|escuela]] [[is|es]] [[very|muy]] [[big|grande]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e42",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "I am Carlos. I am a chef in a small Spanish restaurant. My wife, Elena, is a teacher. Elena's school is very big. She is happy at work.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Carlos|Carlos]] [[and|y]] [[Elena|Elena]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Is|Está]] [[Elena|Elena]] [[happy|feliz]]?",
          "options": ["[[Yes, she is.|Sí, lo está.]]", "[[No, she isn't.|No, no lo está.]]", "[[We don't know.|No lo sabemos.]]"],
          "correctAnswer": 0,
          "explanation": "[[The|El]] [[text|texto]] [[says|dice]]: \"[[She|Ella]] [[is|está]] [[happy|feliz]] [[at|en]] [[work|el trabajo]]\"."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e43",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "medium",
    "transcript": "I am not Spanish. I am American.",
    "content": {
      "title": "[[Verb|Verbo]] '[[to be|ser/estar]]'",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[negation|negación]].",
      "questions": [
        {
          "question": "[[I|Yo]] _______ [[not|no]] [[Spanish|español]].",
          "options": ["[[is|es]]", "[[are|eres]]", "[[am|soy]]"],
          "correctAnswer": 2,
          "explanation": "[[I|Yo]] [[am|soy]] [[not|no]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e44",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "medium",
    "transcript": "What is his name?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Order|Ordena]] [[la|the]] [[pregunta|question]].",
      "correctSentence": "[[What|Qué]] [[is|es]] [[his|su]] [[name|nombre]]?",
      "words": ["[[name|nombre]]?", "[[his|su]]", "[[is|es]]", "[[What|Qué]]"],
      "explanation": "[[What|Qué]] + [[is|es]] + [[possessive|posesivo]] + [[noun|sustantivo]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e45",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "medium",
    "transcript": "Is it a long pen? No, it's very short.",
    "content": {
      "title": "[[Adjectives|Adjetivos]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[opposite|opuesto]].",
      "questions": [
        {
          "question": "[[The|El]] [[opposite|opuesto]] [[of|de]] '[[long|largo]]' [[is|es]] _______.",
          "options": ["[[short|corto]]", "[[big|grande]]", "[[blue|azul]]"],
          "correctAnswer": 0,
          "explanation": "[[Short|Corto]] [[is|es]] [[the|el]] [[opposite|opuesto]] [[of|de]] [[long|largo]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e46",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "medium",
    "transcript": "You are my best friend.",
    "content": {
      "title": "[[Possessives|Posesivos]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]].",
      "correctSentence": "[[You|Tú]] [[are|eres]] [[my|mi]] [[best|mejor]] [[friend|amigo/a]].",
      "words": ["[[friend|amigo/a]].", "[[best|mejor]]", "[[my|mi]]", "[[are|eres]]", "[[You|Tú]]"],
      "explanation": "[[You|Tú]] [[are|eres]] [[my|mi]] [[best|mejor]] [[friend|amigo]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e47",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "medium",
    "transcript": "How are you? I am fine, thanks.",
    "content": {
      "title": "[[Greetings|Saludos]]",
      "instructions": "[[Complete|Completa]] [[the|el]] [[dialogue|diálogo]].",
      "questions": [
        {
          "question": "[[How|Cómo]] _______ [[you|tú]]?",
          "options": ["[[am|soy]]", "[[is|es]]", "[[are|estás]]"],
          "correctAnswer": 2,
          "explanation": "[[How|Cómo]] [[are|estás]] [[you|tú]]?"
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e48",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "medium",
    "transcript": "The book is nineteen euros.",
    "content": {
      "title": "[[Prices|Precios]]",
      "instructions": "[[Order|Ordena]] [[the|las]] [[palabras|words]].",
      "correctSentence": "[[The|El]] [[book|libro]] [[is|vale]] [[nineteen|diecinueve]] [[euros|euros]].",
      "words": ["[[euros|euros]].", "[[nineteen|diecinueve]]", "[[is|vale]]", "[[book|libro]]", "[[The|El]]"],
      "explanation": "[[Price|Precio]] [[structure|estructura]]."
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e49",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Grammar",
    "difficulty": "medium",
    "transcript": "Are you a student? Yes, I am.",
    "content": {
      "title": "[[Short|Cortas]] [[Answers|Respuestas]]",
      "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[answer|respuesta]].",
      "questions": [
        {
          "question": "[[Are|¿Eres]] [[you|tú]] [[a|un]] [[student|estudiante]]?",
          "options": ["[[Yes, I am.|Sí, lo soy.]]", "[[Yes, you are.|Sí, lo eres.]]", "[[Yes, it is.|Sí, lo es.]]"],
          "correctAnswer": 0,
          "explanation": "[[Answer|Responde]] [[about|sobre]] [[yourself|ti mismo]]."
        }
      ]
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e50",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "medium",
    "transcript": "My grandfather is seventy years old.",
    "content": {
      "title": "[[Numbers|Números]]",
      "instructions": "[[Choose|Elige]] [[the|el]] [[number|número]].",
      "questions": [
        {
          "question": "[[Seventy|Setenta]] [[is|es]] _______.",
          "options": ["[[70|70]]", "[[17|17]]", "[[60|60]]"],
          "correctAnswer": 0,
          "explanation": "[[Seventy|Setenta]] = 70."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  {
    "id": "a1-u10-e51",
    "type": "sentence-building",
    "level": "A1",
    "topic": "Possessives",
    "difficulty": "medium",
    "transcript": "What is your father's job?",
    "content": {
      "title": "[[Questions|Preguntas]]",
      "instructions": "[[Order|Ordena]] [[la|the]] [[pregunta|question]].",
      "correctSentence": "[[What|Qué]] [[is|es]] [[your|tu]] [[father's|de tu padre]] [[job|trabajo]]?",
      "words": ["[[job|trabajo]]?", "[[father's|de tu padre]]", "[[your|tu]]", "[[is|es]]", "[[What|Qué]]"],
      "explanation": "[[What|Qué]] + [[is|es]] + [[owner|dueño]] [['s|'s]] + [[job|trabajo]]."
    },
    "topicName": "Grammar"
  },
  {
    "id": "a1-u10-e52",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Vocabulary",
    "difficulty": "medium",
    "transcript": "She is from France. She is French.",
    "content": {
      "title": "[[Nationalities|Nacionalidades]]",
      "instructions": "[[Complete|Completa]].",
      "questions": [
        {
          "question": "[[She|Ella]] [[is|es]] [[from|de]] [[France|Francia]]. [[She|Ella]] [[is|es]] _______.",
          "options": ["[[French|francesa]]", "[[France|Francia]]", "[[Spanish|española]]"],
          "correctAnswer": 0,
          "explanation": "[[French|Francesa]] [[is|es]] [[the|la]] [[nationality|nacionalidad]]."
        }
      ]
    },
    "topicName": "Vocabulary"
  },
  // --- READING 4: PHYSICAL DESCRIPTIONS (53-56) ---
  {
    "id": "a1-u10-e53",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "My best friend is Paul. He is very tall and thin. He has big blue eyes and short brown hair. He is very happy today.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Descriptions|Descripciones]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]].",
      "questions": [
        {
          "question": "[[My|Mi]] [[best|mejor]] [[friend|amigo]] [[is|es]] [[Paul|Paul]]. [[He|Él]] [[is|es]] [[very|muy]] [[tall|alto]] [[and|y]] [[thin|delgado]]. [[He|Él]] [[has|tiene]] [[big|grandes]] [[blue|azules]] [[eyes|ojos]] [[and|y]] [[short|corto]] [[brown|marrón]] [[hair|pelo]]. [[He|Él]] [[is|está]] [[very|muy]] [[happy|feliz]] [[today|hoy]].",
          "options": ["[[I|Yo]] [[read|leo]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Text|Texto]] [[only|solamente]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e54",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "My best friend is Paul. He is very tall and thin. He has big blue eyes and short brown hair. He is very happy today.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Paul|Paul]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cómo]] [[is|es]] [[Paul|Paul]]?",
          "options": ["[[Short|Bajo]] [[and|y]] [[fat|gordo]]", "[[Tall|Alto]] [[and|y]] [[thin|delgado]]", "[[Old|Viejo]] [[and|y]] [[tired|cansado]]"],
          "correctAnswer": 1,
          "explanation": "[[Paul|Paul]] [[is|es]] [[tall|alto]] [[and|y]] [[thin|delgado]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e55",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "My best friend is Paul. He is very tall and thin. He has big blue eyes and short brown hair. He is very happy today.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Paul|Paul]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|De qué]] [[color|color]] [[are|son]] [[his|sus]] [[eyes|ojos]]?",
          "options": ["[[Brown|Marrones]]", "[[Green|Verdes]]", "[[Blue|Azules]]"],
          "correctAnswer": 2,
          "explanation": "[[He|Él]] [[has|tiene]] [[blue|azules]] [[eyes|ojos]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e56",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "My best friend is Paul. He is very tall and thin. He has big blue eyes and short brown hair. He is very happy today.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Paul|Paul]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[How|Cómo]] [[is|es]] [[his|su]] [[hair|pelo]]?",
          "options": ["[[Short|Corto]] [[and|y]] [[brown|marrón]]", "[[Long|Largo]] [[and|y]] [[black|negro]]", "[[Short|Corto]] [[and|y]] [[grey|gris]]"],
          "correctAnswer": 0,
          "explanation": "[[He|Él]] [[has|tiene]] [[short|corto]] [[brown|marrón]] [[hair|pelo]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  // --- READING 5: FINAL ASSESSMENT (57-60) ---
  {
    "id": "a1-u10-e57",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "This is Julia. She is Spanish. She is a doctor. Julia's husband, Peter, is from the UK. He is an engineer. They are very happy in Spain.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Final|Final]] [[Assessment|Evaluación]]",
      "instructions": "[[Read|Lee]] [[the|el]] [[text|texto]].",
      "questions": [
        {
          "question": "[[This|Esta]] [[is|es]] [[Julia|Julia]]. [[She|Ella]] [[is|es]] [[Spanish|española]]. [[She|Ella]] [[is|es]] [[a|una]] [[doctor|médica]]. [[Julia's|De Julia]] [[husband|esposo]], [[Peter|Peter]], [[is|es]] [[from|de]] [[the|el]] [[UK|Reino Unido]]. [[He|Él]] [[is|es]] [[an|un]] [[engineer|ingeniero]]. [[They|Ellos]] [[are|están]] [[very|muy]] [[happy|felices]] [[in|en]] [[Spain|España]].",
          "options": ["[[I|Yo]] [[read|leo]] [[the|el]] [[text|texto]]."],
          "correctAnswer": 0,
          "explanation": "[[Text|Texto]] [[only|solamente]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e58",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "This is Julia. She is Spanish. She is a doctor. Julia's husband, Peter, is from the UK. He is an engineer. They are very happy in Spain.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Julia|Julia]] [[and|y]] [[Peter|Peter]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[What|Qué]] [[is|es]] [[Julia's|de Julia]] [[job|trabajo]]?",
          "options": ["[[Doctor|Médica]]", "[[Engineer|Ingeniero]]", "[[Nurse|Enfermera]]"],
          "correctAnswer": 0,
          "explanation": "[[Julia|Julia]] [[is|es]] [[a|una]] [[doctor|médica]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e59",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "This is Julia. She is Spanish. She is a doctor. Julia's husband, Peter, is from the UK. He is an engineer. They are very happy in Spain.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Julia|Julia]] [[and|y]] [[Peter|Peter]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Where|De dónde]] [[is|es]] [[Peter|Peter]] [[from|de]]?",
          "options": ["[[Spain|España]]", "[[The USA|EE.UU.]]", "[[The UK|Reino Unido]]"],
          "correctAnswer": 2,
          "explanation": "[[Peter|Peter]] [[is|es]] [[from|de]] [[the|el]] [[UK|Reino Unido]]."
        }
      ]
    },
    "topicName": "Reading"
  },
  {
    "id": "a1-u10-e60",
    "type": "multiple-choice",
    "level": "A1",
    "topic": "Reading",
    "difficulty": "easy",
    "transcript": "This is Julia. She is Spanish. She is a doctor. Julia's husband, Peter, is from the UK. He is an engineer. They are very happy in Spain.",
    "content": {
      "title": "[[Reading|Lectura]]: [[Julia|Julia]] [[and|y]] [[Peter|Peter]]",
      "instructions": "[[Answer|Responde]] [[the|la]] [[question|pregunta]].",
      "questions": [
        {
          "question": "[[Where|Dónde]] [[are|están]] [[they|ellos]] [[now|ahora]]?",
          "options": ["[[In Spain|En España]]", "[[In the UK|En el Reino Unido]]", "[[In the USA|En los EE.UU.]]"],
          "correctAnswer": 0,
          "explanation": "[[They|Ellos]] [[are|están]] [[in|en]] [[Spain|España]]."
        }
      ]
    },
    "topicName": "Reading"
  }
];
