// A1 Module 1 Unit 3: Moods and Questions
// Focus: Adjectives of mood, Verb 'to be' negatives, Yes/No questions, and short answers
// Total: 60 Exercises

import { Exercise } from './exercise-types';

// Helper to create a simple exercise from a question
const createExercise = (id: string, q: any, topic: string, unit: number): Exercise => ({
  id,
  type: q.type || 'grammar',
  level: 'A1',
  topicName: topic,
  transcript: q.question,
  audioUrl: `audio/a1/unit-${unit}/${id}.mp3`,
  content: {
    title: topic,
    instructions: q.type === 'fill-blank' ? '[[Write the correct word.|Escribe la palabra correcta.]]' : '[[Choose the correct answer.|Elige la respuesta correcta.]]',
    questions: [q]
  }
});

const GRAMMAR_QUESTIONS = [
  // Verb 'to be' Negatives (1-20)
  { id: 'a1-m1-l3-q1', type: 'multiple-choice', question: '[[I|Yo]] ___ [[sad|triste]]. [[I am|Yo estoy]] [[happy|feliz]]!', options: ['[[am not|no soy/estoy]]', '[[is not|no es/está]]', '[[are not|no eres/estás]]'], correctAnswer: 'am not' },
  { id: 'a1-m1-l3-q2', type: 'multiple-choice', question: '[[He|Él]] ___ [[from|de]] [[France|Francia]]. [[He is|Él es]] [[from|de]] [[Spain|España]].', options: ['[[am not|no soy/estoy]]', "[[isn't|no es/está]]", "[[aren't|no son/están]]"], correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q3', type: 'multiple-choice', question: '[[They|Ellos]] ___ [[at|en la]] [[school|escuela]] [[today|hoy]].', options: ['[[am not|no soy/estoy]]', "[[isn't|no es/está]]", "[[aren't|no son/están]]"], correctAnswer: "aren't" },
  { id: 'a1-m1-l3-q4', type: 'fill-blank', question: '[[She|Ella]] ___ [[my|mi]] [[sister|hermana]]. [[She is|Ella es]] [[my|mi]] [[friend|amiga]].', correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q5', type: 'fill-blank', question: '[[We|Nosotros]] ___ [[from|de]] [[England|Inglaterra]]. [[We are|Nosotros somos]] [[from|de]] [[the|los]] [[USA|EE.UU.]]', correctAnswer: "aren't" },
  { id: 'a1-m1-l3-q6', type: 'multiple-choice', question: '[[Which|¿Qué]] [[contraction|contracción]] [[is|es]] [[correct|correcta]] [[for|para]] "[[It is not|Ello no es]]"?', options: ["[[It isn't|Ello no es]]", "[[It's not|Ello no es]]", "[[Both|Ambos]]"], correctAnswer: 'Both' },
  { id: 'a1-m1-l3-q7', type: 'true-false', question: '[[We|Nosotros]] [[can|podemos]] [[say|decir]] "I aren\'t [[tired|cansado]]."', correctAnswer: 'False' },
  { id: 'a1-m1-l3-q8', type: 'fill-blank', question: '[[You|Tú]] ___ 20 [[years old|años]]. [[You are|Tú tienes]] 25!', correctAnswer: "aren't" },
  { id: 'a1-m1-l3-q9', type: 'multiple-choice', question: '[[The|El]] [[car|coche]] ___ [[new|nuevo]]. [[It is|Es]] [[old|viejo]].', options: ['[[am not|no soy/estoy]]', "[[isn't|no es/está]]", "[[aren't|no son/están]]"], correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q10', type: 'true-false', question: '"They\'re not" [[is|es]] [[a|una]] [[correct|correcta]] [[contraction|contracción]].', correctAnswer: 'True' },
  { id: 'a1-m1-l3-q11', type: 'fill-blank', question: '[[I|Yo]] ___ [[hungry|hambriento/a]].', correctAnswer: "am not" },
  { id: 'a1-m1-l3-q12', type: 'multiple-choice', question: '[[My|Mis]] [[parents|padres]] ___ [[here|aquí]].', options: ['[[am not|no soy/estoy]]', "[[isn't|no es/está]]", "[[aren't|no son/están]]"], correctAnswer: "aren't" },
  { id: 'a1-m1-l3-q13', type: 'fill-blank', question: '[[It|Hace]] ___ [[hot|calor]] [[today|hoy]]. [[It is|Hace]] [[cold|frío]].', correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q14', type: 'multiple-choice', question: '[[Which|¿Cuál]] [[one|una]] [[is|es]] [[correct|correcta]]?', options: ['[[You no are|tú no eres]]', '[[You are not|Tú no eres]]', '[[You am not|tú soy no]]'], correctAnswer: 'You are not' },
  { id: 'a1-m1-l3-q15', type: 'true-false', question: '"He isn\'t" [[means|significa]] [[the|lo]] [[same|mismo]] [[as|que]] "He is not".', correctAnswer: 'True' },
  { id: 'a1-m1-l3-q16', type: 'fill-blank', question: '[[London|Londres]] ___ [[in|en]] [[Italy|Italia]].', correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q17', type: 'multiple-choice', question: '[[We|Nosotros]] ___ [[tired|cansados]].', options: ['[[am not|no soy/estoy]]', "[[isn't|no es/está]]", "[[aren't|no somos/estamos]]"], correctAnswer: "aren't" },
  { id: 'a1-m1-l3-q18', type: 'fill-blank', question: '[[I|Yo]] ___ 10 [[years old|años]]. [[I am|Tengo]] 20!', correctAnswer: "am not" },
  { id: 'a1-m1-l3-q19', type: 'true-false', question: '[[We|Nosotros]] [[use|usamos]] "don\'t" [[with|con]] [[the|el]] [[verb|verbo]] "[[to be|ser/estar]]".', correctAnswer: 'False' },
  { id: 'a1-m1-l3-q20', type: 'multiple-choice', question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]]:', options: ["[[She's not|Ella no está]]", "[[She isn't|Ella no está]]", "[[Both|Ambas]]"], correctAnswer: 'Both' },

  // Yes/No Questions (21-40)
  { id: 'a1-m1-l3-q21', type: 'multiple-choice', question: '___ [[you|tú]] [[from|de]] [[Spain|España]]?', options: ['[[Am|¿Soy?]]', '[[Is|¿Es?]]', '[[Are|¿Eres?]]'], correctAnswer: 'Are' },
  { id: 'a1-m1-l3-q22', type: 'multiple-choice', question: '___ [[he|él]] [[a|un]] [[doctor|médico]]?', options: ['[[Am|¿Soy?]]', '[[Is|¿Es?]]', '[[Are|¿Eres?]]'], correctAnswer: 'Is' },
  { id: 'a1-m1-l3-q23', type: 'fill-blank', question: '___ [[she|ella]] [[your|tu]] [[sister|hermana]]?', correctAnswer: 'Is' },
  { id: 'a1-m1-l3-q24', type: 'multiple-choice', question: '[[Are|¿Están]] [[they|ellos]] [[happy|felices]]? - [[Yes|Sí]], [[they|ellos]] ___.', options: ['[[am|soy]]', '[[is|es]]', '[[are|están]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l3-q25', type: 'multiple-choice', question: '[[Is|¿Hace]] [[it|ello]] [[cold|frío]] [[today|hoy]]? - [[No|No]], [[it|ello]] ___.', options: ['[[am not|no soy]]', "[[isn't|no hace]]", "[[aren't|no son]]"], correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q26', type: 'fill-blank', question: '___ [[you|tú]] [[and|y]] Tom [[friends|amigos]]?', correctAnswer: 'Are' },
  { id: 'a1-m1-l3-q27', type: 'true-false', question: '[[In|En]] [[a|una]] [[question|pregunta]], [[the|el]] [[subject|sujeto]] [[comes|viene]] [[BEFORE|ANTES]] [[the|del]] [[verb|verbo]].', correctAnswer: 'False' },
  { id: 'a1-m1-l3-q28', type: 'multiple-choice', question: '[[Am|¿Llego]] [[I|yo]] [[late|tarde]]? - [[No|No]], [[you|tú]] ___.', options: ['[[am not|no soy]]', "[[aren't|no]]", "[[isn't|no es]]"], correctAnswer: "aren't" },
  { id: 'a1-m1-l3-q29', type: 'fill-blank', question: '___ [[your|tu]] [[name|nombre]] Luis?', correctAnswer: 'Is' },
  { id: 'a1-m1-l3-q30', type: 'true-false', question: '[[Affirmative|Afirmativas]] [[short|cortas]] [[answers|respuestas]] [[like|como]] "Yes, I\'m" [[are|son]] [[correct|correctas]].', correctAnswer: 'False' },
  { id: 'a1-m1-l3-q31', type: 'multiple-choice', question: '___ [[the|los]] [[students|estudiantes]] [[ready|listos]]?', options: ['[[Am|¿Soy?]]', '[[Is|¿Es?]]', '[[Are|¿Están?]]'], correctAnswer: 'Are' },
  { id: 'a1-m1-l3-q32', type: 'fill-blank', question: '[[Is|¿Es]] [[she|ella]] [[from|de]] [[Japan|Japón]]? - [[No|No]], [[she|ella]] ___.', correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q33', type: 'multiple-choice', question: '___ [[I|yo]] [[in|en]] [[room|habitación]] 10?', options: ['[[Am|¿Estoy?]]', '[[Is|¿Está?]]', '[[Are|¿Estás?]]'], correctAnswer: 'Am' },
  { id: 'a1-m1-l3-q34', type: 'true-false', question: '"Are you [[tired|cansado]]?" [[is|es]] [[a|una]] [[correct|correcta]] [[question|pregunta]].', correctAnswer: 'True' },
  { id: 'a1-m1-l3-q35', type: 'fill-blank', question: '___ [[your|tus]] [[parents|padres]] [[at|en]] [[home|casa]]?', correctAnswer: 'Are' },
  { id: 'a1-m1-l3-q36', type: 'multiple-choice', question: '[[Are|¿Tienes]] [[you|tú]] [[hungry|hambre]]? - [[No|No]], ___.', options: ["[[I am|yo soy]]", "[[I'm not|yo no]]", "[[you aren't|tú no eres]]"], correctAnswer: "I'm not" },
  { id: 'a1-m1-l3-q37', type: 'fill-blank', question: '___ [[he|él]] [[your|tu]] [[teacher|profesor]]?', correctAnswer: 'Is' },
  { id: 'a1-m1-l3-q38', type: 'multiple-choice', question: '[[Is|¿Tiene]] Maria 25? - [[Yes|Sí]], ___.', options: ["[[he is|él tiene]]", "[[she is|ella tiene]]", "[[it is|ello tiene]]"], correctAnswer: 'she is' },
  { id: 'a1-m1-l3-q39', type: 'true-false', question: '[[We|Nosotros]] [[can|podemos]] [[say|decir]] "Is you [[from|de]] [[Spain|España]]?".', correctAnswer: 'False' },
  { id: 'a1-m1-l3-q40', type: 'fill-blank', question: '___ [[we|nosotros]] [[ready|listos]]?', correctAnswer: 'Are' },

  // Practice & Vocabulary (41-55)
  { id: 'a1-m1-l3-q41', type: 'multiple-choice', question: '[[I am|Estoy]] ___. [[I want|Quiero]] [[to|a]] [[sleep|dormir]].', options: ['[[Happy|Feliz]]', '[[Tired|Cansado]]', '[[Angry|Enojado]]'], correctAnswer: 'Tired' },
  { id: 'a1-m1-l3-q42', type: 'multiple-choice', question: '[[I am|Tengo]] ___. [[I want|Quiero]] [[a|un]] [[sandwich|sándwich]].', options: ['[[Thirsty|Sediento]]', '[[Hungry|Hambre]]', '[[Bored|Aburrido]]'], correctAnswer: 'Hungry' },
  { id: 'a1-m1-l3-q43', type: 'fill-blank', question: '[[He|Él]] [[is|está]] [[not|no]] [[sad|triste]]. [[He|Él]] [[is|está]] ___.', correctAnswer: 'happy' },
  { id: 'a1-m1-l3-q44', type: 'multiple-choice', question: '[[She|Ella]] [[is|está]] ___. [[She|Ella]] [[has|tiene]] [[a|un]] [[lot|mucho]] [[of|de]] [[work|trabajo]].', options: ['[[Busy|Ocupada]]', '[[Lazy|Perezosa]]', '[[Excited|Emocionada]]'], correctAnswer: 'Busy' },
  { id: 'a1-m1-l3-q45', type: 'multiple-choice', question: '[[They|Ellos]] [[are|están]] ___. [[It is|Es]] [[a|una]] [[surprise|sorpresa]]!', options: ['[[Scared|Asustados]]', '[[Excited|Emocionados]]', '[[Angry|Enojados]]'], correctAnswer: 'Excited' },
  { id: 'a1-m1-l3-q46', type: 'true-false', question: '"Bored" [[means|significa]] [[you|tú]] [[are|estás]] [[having|teniendo]] [[a|mucha]] [[lot|mucho]] [[of|de]] [[fun|diversión]].', correctAnswer: 'False' },
  { id: 'a1-m1-l3-q47', type: 'fill-blank', question: '[[Are|¿Estás]] [[you|tú]] ___? [[No|No]], [[I am|estoy]] [[fine|bien]].', correctAnswer: 'tired' },
  { id: 'a1-m1-l3-q48', type: 'multiple-choice', question: '[[He|Él]] [[is|está]] ___. [[The|El]] [[train|tren]] [[is|está]] [[late|retrasado]].', options: ['[[Happy|Feliz]]', '[[Angry|Enojado]]', '[[Sleepy|Soñoliento]]'], correctAnswer: 'Angry' },
  { id: 'a1-m1-l3-q49', type: 'fill-blank', question: '[[She|Ella]] [[is|tiene]] ___. [[She|Ella]] [[wants|quiere]] [[some|algo de]] [[water|agua]].', correctAnswer: 'thirsty' },
  { id: 'a1-m1-l3-q50', type: 'multiple-choice', question: '[[We|Nosotros]] [[are|estamos]] ___. [[There is|No hay]] [[nothing|nada]] [[to|que]] [[do|hacer]].', options: ['[[Bored|Aburridos]]', '[[Busy|Ocupados]]', '[[Interested|Interesados]]'], correctAnswer: 'Bored' },
  { id: 'a1-m1-l3-q51', type: 'true-false', question: '"Fine" [[and|y]] "Well" [[mean|significan]] [[similar|similares]] [[things|cosas]].', correctAnswer: 'True' },
  { id: 'a1-m1-l3-q52', type: 'multiple-choice', question: '[[Are|¿Están]] [[they|ellos]] ___? [[Yes|Sí]], [[they|ellos]] [[want|quieren]] [[to|a]] [[go|ir]] [[to|a la]] [[bed|cama]].', options: ['[[Hungry|Hambrientos]]', '[[Tired|Cansados]]', '[[Excited|Emocionados]]'], correctAnswer: 'Tired' },
  { id: 'a1-m1-l3-q53', type: 'fill-blank', question: '[[I am|Estoy]] [[not|no]] ___. [[I am|Estoy]] [[happy|feliz]].', correctAnswer: 'sad' },
  { id: 'a1-m1-l3-q54', type: 'multiple-choice', question: '[[Is|¿Está]] [[he|él]] ___? [[Yes|Sí]], [[he|él]] [[is|está]] [[looking|buscando]] [[for|a]] [[his|su]] [[dog|perro]].', options: ['[[Worried|Preocupado]]', '[[Happy|Feliz]]', '[[Bored|Aburrido]]'], correctAnswer: 'Worried' },
  { id: 'a1-m1-l3-q55', type: 'true-false', question: '"Nervous" [[is|es]] [[a|un]] [[feeling|sentimiento]].', correctAnswer: 'True' },
];

// Reading Exercises (56-60)
const READING_EXERCISES: Exercise[] = [
  {
    id: 'a1-m1-l3-reading-1',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: "[[Ben|Ben]]: [[I'm not|No estoy]] [[very|muy]] [[well|bien]]. [[I'm|Estoy]] [[very|muy]] [[tired|cansado]]. [[Emma|Emma]]: [[Are|¿Estás]] [[you|tú]] [[sick|enfermo]]? [[Ben|Ben]]: [[No|No]], [[I'm not|no estoy]] [[sick|enfermo]]. [[But|Pero]] [[I am|estoy]] [[very|muy]] [[busy|ocupado]] [[at|en el]] [[work|trabajo]].",
    audioUrl: 'audio/a1/unit-3/a1-m1-l3-reading-1.mp3',
    content: {
      title: '[[Reading|Lectura]]: [[Ben|Ben]] [[is|está]] [[tired|cansado]]',
      instructions: '[[Read|Lee]] [[and|y]] [[answer|responde]].',
      questions: [{ id: 'a1-m1-l3-q56', type: 'multiple-choice', question: '[[How|¿Cómo]] [[is|está]] Ben?', options: ['[[Sick|Enfermo]]', '[[Tired|Cansado]]', '[[Happy|Feliz]]'], correctAnswer: 'Tired' }]
    }
  },
  {
    id: 'a1-m1-l3-reading-2',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: "[[Ben|Ben]]: [[My|Mi]] [[sister|hermana]] [[is|está]] [[very|muy]] [[happy|feliz]] [[and|y]] [[excited|emocionada]] [[in|en]] [[her|su]] [[new|nuevo]] [[job|trabajo]]. [[But|Pero]] [[my|mis]] [[parents|padres]] [[aren't|no están]] [[happy|felices]] [[today|hoy]] [[because|porque]] [[the|el]] [[train|tren]] [[is|está]] [[late|retrasado]]!",
    audioUrl: 'audio/a1/unit-3/a1-m1-l3-reading-2.mp3',
    content: {
      title: '[[Reading|Lectura]]: [[Family|Familia]] [[Moods|Estados de ánimo]]',
      instructions: '[[Read|Lee]] [[and|y]] [[answer|responde]].',
      questions: [{ id: 'a1-m1-l3-q57', type: 'multiple-choice', question: '[[How|¿Cómo]] [[is|está]] [[Ben\'s|de Ben]] [[sister|hermana]]?', options: ['[[Happy|Feliz]]', '[[Angry|Enojada]]', '[[Tired|Cansada]]'], correctAnswer: 'Happy' }]
    }
  },
  {
    id: 'a1-m1-l3-reading-3',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: "[[Emma|Emma]]: [[Why|¿Por qué]] [[are|están]] [[your|tus]] [[parents|padres]] [[angry|enojados]]? [[Ben|Ben]]: [[Because|Porque]] [[the|el]] [[train|tren]] [[is|está]] [[late|retrasado]]! [[Emma|Emma]]: [[Well|Bueno]], [[I'm|estoy]] [[happy|feliz]] [[because|porque]] [[it is|es]] [[Friday|viernes]]!",
    audioUrl: 'audio/a1/unit-3/a1-m1-l3-reading-3.mp3',
    content: {
      title: '[[Reading|Lectura]]: [[Why|¿Por qué]] [[Angry|Enojados]]?',
      instructions: '[[Read|Lee]] [[and|y]] [[answer|responde]].',
      questions: [{ id: 'a1-m1-l3-q58', type: 'true-false', question: '[[The|Los]] [[parents|padres]] [[are|están]] [[angry|enojados]] [[because|a causa]] [[of|del]] [[the|el]] [[train|tren]].', correctAnswer: 'True' }]
    }
  },
  {
    id: 'a1-m1-l3-reading-4',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: "[[Man|Hombre]]: [[I'm|Estoy]] [[very|muy]] [[happy|feliz]]. [[It's|Es]] [[a|un]] [[beautiful|hermoso]] [[day|día]]. [[I'm|Soy]] [[a|un]] [[tourist|turista]] [[from|de]] [[Australia|Australia]]. [[My|Mi]] [[brother|hermano]] [[is|está]] [[not|no]] [[happy|feliz]]. [[He's|Él tiene]] [[hungry|hambre]]!",
    audioUrl: 'audio/a1/unit-3/a1-m1-l3-reading-4.mp3',
    content: {
      title: '[[Reading|Lectura]]: [[The|El]] [[Tourist|Turista]]',
      instructions: '[[Read|Lee]] [[and|y]] [[answer|responde]].',
      questions: [{ id: 'a1-m1-l3-q59', type: 'multiple-choice', question: '[[Where|¿De dónde]] [[is|es]] [[the|el]] [[man|hombre]] [[from|de]]?', options: ['[[USA|EE.UU.]]', '[[Australia|Australia]]', '[[UK|Reino Unido]]'], correctAnswer: 'Australia' }]
    }
  },
  {
    id: 'a1-m1-l3-reading-5',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: "[[Brother|Hermano]]: [[I am|Tengo]] [[very|mucha]] [[hungry|hambre]]! [[Is there|¿Hay]] [[a|un]] [[restaurant|restaurante]] [[near|cerca]] [[here|de aquí]]? [[Journalist|Periodista]]: [[Yes|Sí]], [[there is|hay]] [[one|uno]] [[in|en]] [[the|el]] [[park|parque]]. [[Is|¿Está]] [[it|ello]] [[open|abierto]]? [[Man|Hombre]]: [[Let|Deja]] [[me|me]] [[see|ver]]... [[yes|sí]], [[it is|está]]!",
    audioUrl: 'audio/a1/unit-3/a1-m1-l3-reading-5.mp3',
    content: {
      title: '[[Reading|Lectura]]: [[Hungry|Hambriento]] [[Brother|Hermano]]',
      instructions: '[[Read|Lee]] [[and|y]] [[answer|responde]].',
      questions: [{ id: 'a1-m1-l3-q60', type: 'true-false', question: '[[The|El]] [[restaurant|restaurante]] [[is|está]] [[closed|cerrado]].', correctAnswer: 'False' }]
    }
  }
];

// Flatten grammar questions into individual exercises
const INDIVIDUAL_GRAMMAR_EXERCISES = GRAMMAR_QUESTIONS.map(q => createExercise(q.id, q, 'Moods & Questions', 3));

// LISTENING & PRONUNCIATION LESSON (EXERCISES 61-75)
const LISTENING_AND_PRONUNCIATION: Exercise[] = [
  // Listening Comprehension (61-68)
  {
    id: 'a1-u3-e61',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'I am not sad. I am very happy today!',
    audioUrl: 'audio/a1/unit-3/e61.mp3',
    content: {
      title: '[[Listening: Moods|Escuchar: Estados de ánimo]]',
      instructions: '[[Listen and select the correct answer.|Escucha y selecciona la respuesta correcta.]]',
      questions: [{
        id: 'q61',
        type: 'multiple-choice',
        question: '[[How does the speaker feel?|¿Cómo se siente el hablante?]]',
        options: ['Sad', 'Happy', 'Angry'],
        correctAnswer: 'Happy',
        explanation: '[["The speaker says: "I am very happy".|El hablante dice: "I am very happy".]]'
      }]
    }
  },
  {
    id: 'a1-u3-e62',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'Are you hungry? Yes, I am.',
    audioUrl: 'audio/a1/unit-3/e62.mp3',
    content: {
      title: '[[Listening: Questions|Escuchar: Preguntas]]',
      instructions: '[[Listen and select the correct answer.|Escucha y selecciona la respuesta correcta.]]',
      questions: [{
        id: 'q62',
        type: 'multiple-choice',
        question: '[[Is the speaker hungry?|¿Tiene hambre el hablante?]]',
        options: ['Yes', 'No', 'Maybe'],
        correctAnswer: 'Yes',
        explanation: '[["The speaker answers: "Yes, I am".|El hablante responde: "Yes, I am".]]'
      }]
    }
  },
  {
    id: 'a1-u3-e63',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'It is not hot today. It is very cold.',
    audioUrl: 'audio/a1/unit-3/e63.mp3',
    content: {
      title: '[[Listening: Weather|Escuchar: Clima]]',
      instructions: '[[Listen and select the correct answer.|Escucha y selecciona la respuesta correcta.]]',
      questions: [{
        id: 'q63',
        type: 'multiple-choice',
        question: '[[How is the weather?|¿Cómo está el clima?]]',
        options: ['Hot', 'Cold', 'Warm'],
        correctAnswer: 'Cold',
        explanation: '[["The speaker says: "It is very cold".|El hablante dice: "It is very cold".]]'
      }]
    }
  },
  {
    id: 'a1-u3-e64',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'He is not a doctor. He is a teacher.',
    audioUrl: 'audio/a1/unit-3/e64.mp3',
    content: {
      title: '[[Listening: Occupations|Escuchar: Ocupaciones]]',
      instructions: '[[Listen and select the correct answer.|Escucha y selecciona la respuesta correcta.]]',
      questions: [{
        id: 'q64',
        type: 'multiple-choice',
        question: '[[What is his job?|¿Cuál es su trabajo?]]',
        options: ['Doctor', 'Teacher', 'Pilot'],
        correctAnswer: 'Teacher',
        explanation: '[["The speaker says: "He is a teacher".|El hablante dice: "He is a teacher".]]'
      }]
    }
  },
  {
    id: 'a1-u3-e65',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'Are they from England? No, they are not.',
    audioUrl: 'audio/a1/unit-3/e65.mp3',
    content: {
      title: '[[Listening: Origins|Escuchar: Orígenes]]',
      instructions: '[[Listen and select the correct answer.|Escucha y selecciona la respuesta correcta.]]',
      questions: [{
        id: 'q65',
        type: 'multiple-choice',
        question: '[[Are they from England?|¿Son de Inglaterra?]]',
        options: ['Yes', 'No', 'They don\'t know'],
        correctAnswer: 'No',
        explanation: '[["The speaker says: "No, they are not".|El hablante dice: "No, they are not".]]'
      }]
    }
  },
  {
    id: 'a1-u3-e66',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'I am very tired. I want to sleep.',
    audioUrl: 'audio/a1/unit-3/e66.mp3',
    content: {
      title: '[[Listening: Feelings|Escuchar: Sentimientos]]',
      instructions: '[[Listen and select the correct answer.|Escucha y selecciona la respuesta correcta.]]',
      questions: [{
        id: 'q66',
        type: 'multiple-choice',
        question: '[[What does the speaker want to do?|¿Qué quiere hacer el hablante?]]',
        options: ['Eat', 'Sleep', 'Work'],
        correctAnswer: 'Sleep',
        explanation: '[["The speaker says: "I want to sleep".|El hablante dice: "I want to sleep".]]'
      }]
    }
  },
  {
    id: 'a1-u3-e67',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'Is she your sister? No, she is my friend.',
    audioUrl: 'audio/a1/unit-3/e67.mp3',
    content: {
      title: '[[Listening: Relationships|Escuchar: Relaciones]]',
      instructions: '[[Listen and select the correct answer.|Escucha y selecciona la respuesta correcta.]]',
      questions: [{
        id: 'q67',
        type: 'multiple-choice',
        question: '[[Who is she?|¿Quién es ella?]]',
        options: ['His sister', 'His friend', 'His mother'],
        correctAnswer: 'His friend',
        explanation: '[["The speaker says: "she is my friend".|El hablante dice: "she is my friend".]]'
      }]
    }
  },
  {
    id: 'a1-u3-e68',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'I am thirsty. I want some water.',
    audioUrl: 'audio/a1/unit-3/e68.mp3',
    content: {
      title: '[[Listening: Needs|Escuchar: Necesidades]]',
      instructions: '[[Listen and select the correct answer.|Escucha y selecciona la respuesta correcta.]]',
      questions: [{
        id: 'q68',
        type: 'multiple-choice',
        question: '[[What does the speaker want?|¿Qué quiere el hablante?]]',
        options: ['Food', 'Water', 'A book'],
        correctAnswer: 'Water',
        explanation: '[["The speaker says: "I want some water".|El hablante dice: "I want some water".]]'
      }]
    }
  },
  // Pronunciation Practice (69-75)
  {
    id: 'a1-u3-e69',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'I am not tired.',
    audioUrl: 'audio/a1/unit-3/e69.mp3',
    content: {
      title: '[[Pronunciation: Negatives|Pronunciación: Negativas]]',
      instructions: '[[Listen to the phrase and repeat it clearly.|Escucha la frase y repítela con claridad.]]',
      expectedResponse: 'I am not tired.',
      evaluationCriteria: [
        'Pronunciación clara de "not"',
        '[[Diphthong /aɪ/ in "I"|Diptongo /aɪ/ en "I"]]',
        'Acento tónico en "tired" (/ˈtaɪərd/)'
      ]
    }
  },
  {
    id: 'a1-u3-e70',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'Are you happy?',
    audioUrl: 'audio/a1/unit-3/e70.mp3',
    content: {
      title: '[[Pronunciation: Questions|Pronunciación: Preguntas]]',
      instructions: '[[Listen to the phrase and repeat it clearly.|Escucha la frase y repítela con claridad.]]',
      expectedResponse: 'Are you happy?',
      evaluationCriteria: [
        '[[Rising intonation at the end of the question|Entonación ascendente al final de la pregunta]]',
        '[[Aspiration of the /h/ sound in "happy"|Sonido /h/ aspirado en "happy"]]',
        '[[Long vowel /ɑːr/ in "Are"|Vocal larga /ɑːr/ en "Are"]]'
      ]
    }
  },
  {
    id: 'a1-u3-e71',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'Yes, I am.',
    audioUrl: 'audio/a1/unit-3/e71.mp3',
    content: {
      title: '[[Pronunciation: Short Answers|Pronunciación: Respuestas cortas]]',
      instructions: '[[Listen to the phrase and repeat it clearly.|Escucha la frase y repítela con claridad.]]',
      expectedResponse: 'Yes, I am.',
      evaluationCriteria: [
        'Sonido /j/ claro en "Yes"',
        'Vocal corta /æ/ en "am"',
        'Pausa breve después de "Yes"'
      ]
    }
  },
  {
    id: 'a1-u3-e72',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'It is not cold.',
    audioUrl: 'audio/a1/unit-3/e72.mp3',
    content: {
      title: '[[Pronunciation: Weather|Pronunciación: Clima]]',
      instructions: '[[Listen to the phrase and repeat it clearly.|Escucha la frase y repítela con claridad.]]',
      expectedResponse: 'It is not cold.',
      evaluationCriteria: [
        '[[Short vowel /ɪ/ in "It" and "is"|Vocal corta /ɪ/ en "It" e "is"]]',
        'Sonido /k/ fuerte en "cold"',
        'Diptongo /əʊ/ en "cold"'
      ]
    }
  },
  {
    id: 'a1-u3-e73',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'She is busy.',
    audioUrl: 'audio/a1/unit-3/e73.mp3',
    content: {
      title: '[[Pronunciation: Feelings|Pronunciación: Sentimientos]]',
      instructions: '[[Listen to the phrase and repeat it clearly.|Escucha la frase y repítela con claridad.]]',
      expectedResponse: 'She is busy.',
      evaluationCriteria: [
        '[[Sound /ʃ/ in "She"|Sonido /ʃ/ en "She"]]',
        'Vocal /ɪ/ en "busy" (/ˈbɪzi/)',
        'Sonido /z/ vibrante en "busy"'
      ]
    }
  },
  {
    id: 'a1-u3-e74',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'We are bored.',
    audioUrl: 'audio/a1/unit-3/e74.mp3',
    content: {
      title: '[[Pronunciation: Feelings|Pronunciación: Sentimientos]]',
      instructions: '[[Listen to the phrase and repeat it clearly.|Escucha la frase y repítela con claridad.]]',
      expectedResponse: 'We are bored.',
      evaluationCriteria: [
        '[[Long vowel /iː/ in "We"|Vocal larga /iː/ en "We"]]',
        'Vocal larga /ɔː/ en "bored" (/bɔːrd/)',
        'Sonido /d/ final suave'
      ]
    }
  },
  {
    id: 'a1-u3-e75',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'Are they angry?',
    audioUrl: 'audio/a1/unit-3/e75.mp3',
    content: {
      title: '[[Pronunciation: Questions|Pronunciación: Preguntas]]',
      instructions: '[[Listen to the phrase and repeat it clearly.|Escucha la frase y repítela con claridad.]]',
      expectedResponse: 'Are they angry?',
      evaluationCriteria: [
        '[[Rising intonation|Entonación ascendente]]',
        '[[Sound /ð/ in "they"|Sonido /ð/ en "they"]]',
        'Acento tónico en "ang" (/ˈæŋɡri/)'
      ]
    }
  }
];

export const A1_M1_L3_ALL_EXERCISES: Exercise[] = [
  ...INDIVIDUAL_GRAMMAR_EXERCISES,
  ...READING_EXERCISES,
  ...LISTENING_AND_PRONUNCIATION
];
