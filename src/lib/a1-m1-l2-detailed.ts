// A1 Module 1 Unit 2: Origins and Occupations
// Focus: Countries, nationalities, professions, Subject Pronouns (he, she, it, we, they), Verb 'to be' (is, are) affirmative
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
  // Subject Pronouns (1-20)
  { id: 'a1-m1-l2-q1', type: 'multiple-choice', question: '[[Peter is from England. ___ is English.|Peter es de Inglaterra. ___ es inglés.]]', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'], correctAnswer: 'He' },
  { id: 'a1-m1-l2-q2', type: 'multiple-choice', question: '[[Anna is a nurse. ___ is 24 years old.|Anna es enfermera. ___ tiene 24 años.]]', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[We|Nosotros]]'], correctAnswer: 'She' },
  { id: 'a1-m1-l2-q3', type: 'multiple-choice', question: '[[The house is very big. ___ is white.|La casa es muy grande. ___ es blanca.]]', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'], correctAnswer: 'It' },
  { id: 'a1-m1-l2-q4', type: 'multiple-choice', question: '[[My brother and I are students. ___ are in class.|Mi hermano y yo somos estudiantes. ___ estamos en clase.]]', options: ['[[We|Nosotros]]', '[[They|Ellos]]', '[[You|Tú/Ustedes]]', '[[I|Yo]]'], correctAnswer: 'We' },
  { id: 'a1-m1-l2-q5', type: 'multiple-choice', question: '[[Mark and Lisa are married. ___ are from Canada.|Mark y Lisa están casados. ___ son de Canadá.]]', options: ['[[We|Nosotros]]', '[[You|Tú/Ustedes]]', '[[They|Ellos]]', '[[He|Él]]'], correctAnswer: 'They' },
  { id: 'a1-m1-l2-q6', type: 'fill-blank', question: '[[This is my dog. ___ is very friendly.|Este es mi perro. ___ es muy amistoso.]]', correctAnswer: 'It' },
  { id: 'a1-m1-l2-q7', type: 'fill-blank', question: '[[My sister is a pilot. ___ works for an airline.|Mi hermana es piloto. ___ trabaja para una aerolínea.]]', correctAnswer: 'She' },
  { id: 'a1-m1-l2-q8', type: 'true-false', question: '[[We use "They" for a group of things.|Usamos "They" para un grupo de cosas.]]', correctAnswer: 'True' },
  { id: 'a1-m1-l2-q9', type: 'multiple-choice', question: '[[The Eiffel Tower is in Paris. ___ is famous.|La Torre Eiffel está en París. ___ es famosa.]]', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'], correctAnswer: 'It' },
  { id: 'a1-m1-l2-q10', type: 'multiple-choice', question: '[[Sam and David are brothers. ___ are tall.|Sam y David son hermanos. ___ son altos.]]', options: ['[[He|Él]]', '[[They|Ellos]]', '[[We|Nosotros]]', '[[It|Eso/Ello]]'], correctAnswer: 'They' },
  { id: 'a1-m1-l2-q11', type: 'fill-blank', question: '[[My mother is from Italy. ___ is Italian.|Mi madre es de Italia. ___ es italiana.]]', correctAnswer: 'She' },
  { id: 'a1-m1-l2-q12', type: 'true-false', question: '[[We use "He" for a girl.|Usamos "He" para una chica.]]', correctAnswer: 'False' },
  { id: 'a1-m1-l2-q13', type: 'multiple-choice', question: '[[The books are on the table. ___ are new.|Los libros están sobre la mesa. ___ son nuevos.]]', options: ['[[It|Eso/Ello]]', '[[He|Él]]', '[[They|Ellos]]', '[[We|Nosotros]]'], correctAnswer: 'They' },
  { id: 'a1-m1-l2-q14', type: 'fill-blank', question: '[[Juan and I are from Mexico. ___ speak Spanish.|Juan y yo somos de México. ___ hablamos español.]]', correctAnswer: 'We' },
  { id: 'a1-m1-l2-q15', type: 'multiple-choice', question: '[[The car is fast. ___ is a Ferrari.|El coche es rápido. ___ es un Ferrari.]]', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'], correctAnswer: 'It' },
  { id: 'a1-m1-l2-q16', type: 'fill-blank', question: '[[My father is a chef. ___ is at the restaurant.|Mi padre es chef. ___ está en el restaurante.]]', correctAnswer: 'He' },
  { id: 'a1-m1-l2-q17', type: 'multiple-choice', question: '[[The cat is on the sofa. ___ is sleeping.|El gato está en el sofá. ___ está durmiendo.]]', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'], correctAnswer: 'It' },
  { id: 'a1-m1-l2-q18', type: 'true-false', question: '[[We use "We" for a group of people that doesn\'t include us.|Usamos "We" para un grupo de personas que no nos incluye.]]', correctAnswer: 'False' },
  { id: 'a1-m1-l2-q19', type: 'fill-blank', question: '[[Paris and London are cities. ___ are in Europe.|París y Londres son ciudades. ___ están en Europa.]]', correctAnswer: 'They' },
  { id: 'a1-m1-l2-q20', type: 'multiple-choice', question: '[[Mrs. Jones is the manager. ___ is in her office.|La Sra. Jones es la gerente. ___ está en su oficina.]]', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[We|Nosotros]]'], correctAnswer: 'She' },

  // Verb 'to be' (21-40)
  { id: 'a1-m1-l2-q21', type: 'multiple-choice', question: '[[He ___ a teacher.|Él ___ un profesor.]]', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'is' },
  { id: 'a1-m1-l2-q22', type: 'multiple-choice', question: '[[They ___ from Japan.|Ellos ___ de Japón.]]', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l2-q23', type: 'multiple-choice', question: '[[She ___ my sister.|Ella ___ mi hermana.]]', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'is' },
  { id: 'a1-m1-l2-q24', type: 'multiple-choice', question: '[[We ___ happy.|Nosotros ___ felices.]]', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l2-q25', type: 'fill-blank', question: '[[It ___ a beautiful day.|___ un día hermoso.]]', correctAnswer: 'is' },
  { id: 'a1-m1-l2-q26', type: 'fill-blank', question: '[[John and Mary ___ married.|John y Mary ___ casados.]]', correctAnswer: 'are' },
  { id: 'a1-m1-l2-q27', type: 'multiple-choice', question: '[[Contraction for "He is":|Contracción de "He is":]]', options: ["[[He's|Él es]]", "[[He'is|Él'es]]", "[[Hes|Éles]]"], correctAnswer: "He's" },
  { id: 'a1-m1-l2-q28', type: 'multiple-choice', question: '[[Contraction for "They are":|Contracción de "They are":]]', options: ["[[They're|Ellos son]]", "[[Theyr|Ellosson]]", "[[They'ar|Ellos'son]]"], correctAnswer: "They're" },
  { id: 'a1-m1-l2-q29', type: 'true-false', question: '[[We say "We is from China."|Decimos "We is from China."]]', correctAnswer: 'False' },
  { id: 'a1-m1-l2-q30', type: 'fill-blank', question: '[[My cat ___ black and white.|Mi gato ___ blanco y negro.]]', correctAnswer: 'is' },
  { id: 'a1-m1-l2-q31', type: 'multiple-choice', question: '[[The students ___ in the library.|Los estudiantes ___ en la biblioteca.]]', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l2-q32', type: 'fill-blank', question: '[[Paris ___ a city in France.|París ___ una ciudad en Francia.]]', correctAnswer: 'is' },
  { id: 'a1-m1-l2-q33', type: 'multiple-choice', question: '[[My parents ___ 60 years old.|Mis padres ___ tienen 60 años.]]', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l2-q34', type: 'true-false', question: '[["It\'s a cat" is the same as "It is a cat".|"It\'s a cat" es lo mismo que "It is a cat".]]', correctAnswer: 'True' },
  { id: 'a1-m1-l2-q35', type: 'fill-blank', question: '[[The coffee ___ very hot.|El café ___ muy caliente.]]', correctAnswer: 'is' },
  { id: 'a1-m1-l2-q36', type: 'multiple-choice', question: '[[Tom and I ___ friends.|Tom y yo ___ amigos.]]', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l2-q37', type: 'fill-blank', question: '[[She ___ a very good singer.|Ella ___ una muy buena cantante.]]', correctAnswer: 'is' },
  { id: 'a1-m1-l2-q38', type: 'multiple-choice', question: '[[Your keys ___ on the table.|Tus llaves ___ sobre la mesa.]]', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l2-q39', type: 'true-false', question: '[[Contractions are only for formal writing.|Las contracciones son solo para la escritura formal.]]', correctAnswer: 'False' },
  { id: 'a1-m1-l2-q40', type: 'fill-blank', question: '[[The sky ___ blue today.|El cielo ___ azul hoy.]]', correctAnswer: 'is' },

  // Practice & Vocabulary (41-55)
  { id: 'a1-m1-l2-q41', type: 'multiple-choice', question: '[[He is from Mexico. He is ___.|Él es de México. Él es ___.]]', options: ['[[Mexican|Mexicano]]', '[[Mexico|México]]', '[[Mexicans|Mexicanos]]'], correctAnswer: 'Mexican' },
  { id: 'a1-m1-l2-q42', type: 'multiple-choice', question: '[[She is from France. She is ___.|Ella es de Francia. Ella es ___.]]', options: ['[[France|Francia]]', '[[French|Francesa]]', '[[Frenches|Francesas]]'], correctAnswer: 'French' },
  { id: 'a1-m1-l2-q43', type: 'fill-blank', question: '[[They are from Brazil. They are ___.|Ellos son de Brasil. Ellos son ___.]]', correctAnswer: 'Brazilian' },
  { id: 'a1-m1-l2-q44', type: 'multiple-choice', question: '[[I am a ___. I work in a hospital.|Soy un ___. Trabajo en un hospital.]]', options: ['[[Teacher|Profesor]]', '[[Doctor|Doctor]]', '[[Actor|Actor]]'], correctAnswer: 'Doctor' },
  { id: 'a1-m1-l2-q45', type: 'multiple-choice', question: '[[She works in a school. She is a ___.|Ella trabaja en una escuela. Ella es ___.]]', options: ['[[Nurse|Enfermera]]', '[[Teacher|Profesora]]', '[[Pilot|Piloto]]'], correctAnswer: 'Teacher' },
  { id: 'a1-m1-l2-q46', type: 'true-false', question: '[[A "pilot" flies a plane.|Un "piloto" vuela un avión.]]', correctAnswer: 'True' },
  { id: 'a1-m1-l2-q47', type: 'fill-blank', question: '[[He is from the USA. He is ___.|Él es de los Estados Unidos. Él es ___.]]', correctAnswer: 'American' },
  { id: 'a1-m1-l2-q48', type: 'multiple-choice', question: '[[They work in a restaurant. They are ___.|Ellos trabajan en un restaurante. Ellos son ___.]]', options: ['[[Waiters|Camareros]]', '[[Drivers|Conductores]]', '[[Engineers|Ingenieros]]'], correctAnswer: 'Waiters' },
  { id: 'a1-m1-l2-q49', type: 'fill-blank', question: '[[I am from Spain. I am ___.|Soy de España. Soy ___.]]', correctAnswer: 'Spanish' },
  { id: 'a1-m1-l2-q50', type: 'multiple-choice', question: '[[She is a ___. She helps sick people.|Ella es ___. Ella ayuda a personas enfermas.]]', options: ['[[Chef|Chef]]', '[[Nurse|Enfermera]]', '[[Artist|Artista]]'], correctAnswer: 'Nurse' },
  { id: 'a1-m1-l2-q51', type: 'true-false', question: '[[Italy is a nationality.|Italia es una nacionalidad.]]', correctAnswer: 'False' },
  { id: 'a1-m1-l2-q52', type: 'multiple-choice', question: '[[Which is a profession?|¿Cuál es una profesión?]]', options: ['[[Canada|Canadá]]', '[[London|Londres]]', '[[Engineer|Ingeniero]]'], correctAnswer: 'Engineer' },
  { id: 'a1-m1-l2-q53', type: 'fill-blank', question: '[[He is from Japan. He is ___.|Él es de Japón. Él es ___.]]', correctAnswer: 'Japanese' },
  { id: 'a1-m1-l2-q54', type: 'multiple-choice', question: '[[You are from the UK. You are ___.|Tú eres del Reino Unido. Tú eres ___.]]', options: ['[[British|Británico]]', '[[England|Inglaterra]]', '[[UKish|UKish]]'], correctAnswer: 'British' },
  { id: 'a1-m1-l2-q55', type: 'true-false', question: '[[ "Student" is a job/occupation.|"Estudiante" es un trabajo/ocupación.]]', correctAnswer: 'True' },
];

// Reading Exercises (56-60)
const READING_EXERCISES: Exercise[] = [
  {
    id: 'a1-m1-l2-reading-1',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: '[[Meet|Conoce]] [[Mario|a Mario]]. [[He|Él]] [[is|es]] [[from|de]] [[Italy|Italia]]. [[He|Él]] [[is|tiene]] [[21]] [[years old|años]]. [[He|Él]] [[is|es]] [[a|un]] [[student|estudiante]] [[of|de]] [[Architecture|arquitectura]]. [[He|Él]] [[is|es]] [[very|muy]] [[friendly|amable]].',
    audioUrl: 'audio/a1/unit-2/a1-m1-l2-reading-1.mp3',
    content: {
      title: '[[Reading: Mario from Italy|Lectura: Mario de Italia]]',
      instructions: '[[Read and answer.|Lee y responde.]]',
      questions: [{ id: 'a1-m1-l2-q56', type: 'multiple-choice', question: '[[Where is Mario from?|¿De dónde es Mario?]]', options: ['[[Spain|España]]', '[[Italy|Italia]]', '[[Japan|Japón]]'], correctAnswer: 'Italy' }]
    }
  },
  {
    id: 'a1-m1-l2-reading-2',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: '[[Meet|Conoce]] [[Yuki|a Yuki]]. [[She|Ella]] [[is|es]] [[from|de]] [[Japan|Japón]]. [[She|Ella]] [[is|tiene]] [[23]] [[years old|años]]. [[She|Ella]] [[is|es]] [[a|una]] [[student|estudiante]] [[of|de]] [[Medicine|medicina]]. [[She|Ella]] [[is|es]] [[very|muy]] [[intelligent|inteligente]].',
    audioUrl: 'audio/a1/unit-2/a1-m1-l2-reading-2.mp3',
    content: {
      title: '[[Reading: Yuki from Japan|Lectura: Yuki de Japón]]',
      instructions: '[[Read and answer.|Lee y responde.]]',
      questions: [{ id: 'a1-m1-l2-q57', type: 'multiple-choice', question: '[[What is Yuki studying?|¿Qué está estudiando Yuki?]]', options: ['[[Architecture|Arquitectura]]', '[[Medicine|Medicina]]', '[[Business|Negocios]]'], correctAnswer: 'Medicine' }]
    }
  },
  {
    id: 'a1-m1-l2-reading-3',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: '[[Carlos|Carlos]] [[and|y]] [[Elena|Elena]] [[are|son]] [[from|de]] [[Spain|España]]. [[They|Ellos]] [[are|tienen]] [[22]] [[years old|años]]. [[They|Ellos]] [[are|son]] [[students|estudiantes]] [[of|de]] [[Business|negocios]]. [[They|Ellos]] [[are|están]] [[very|muy]] [[happy|felices]] [[here|aquí]].',
    audioUrl: 'audio/a1/unit-2/a1-m1-l2-reading-3.mp3',
    content: {
      title: '[[Reading: Carlos and Elena|Lectura: Carlos y Elena]]',
      instructions: '[[Read and answer.|Lee y responde.]]',
      questions: [{ id: 'a1-m1-l2-q58', type: 'multiple-choice', question: '[[Are Carlos and Elena from Mexico?|¿Son Carlos y Elena de México?]]', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No' }]
    }
  },
  {
    id: 'a1-m1-l2-reading-4',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: '[[Julia|Julia]] [[is|es]] [[from|de]] [[Germany|Alemania]]. [[She|Ella]] [[is|es]] [[a|una]] [[nurse|enfermera]]. [[Her|Su]] [[friend|amigo]] [[Hans|Hans]] [[is|es]] [[a|un]] [[doctor|doctor]]. [[They|Ellos]] [[are|son]] [[from|de]] [[Munich|Múnich]].',
    audioUrl: 'audio/a1/unit-2/a1-m1-l2-reading-4.mp3',
    content: {
      title: '[[Reading: Julia and Hans|Lectura: Julia y Hans]]',
      instructions: '[[Read and answer.|Lee y responde.]]',
      questions: [{ id: 'a1-m1-l2-q59', type: 'multiple-choice', question: '[[What is Hans\'s job?|¿Cuál es el trabajo de Hans?]]', options: ['[[Nurse|Enfermero]]', '[[Doctor|Doctor]]', '[[Teacher|Profesor]]'], correctAnswer: 'Doctor' }]
    }
  },
  {
    id: 'a1-m1-l2-reading-5',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: '[[The|El]] [[International|Internacional]] [[Students|Estudiantes]] [[Club|Club]] [[is|está]] [[open|abierto]] [[every|cada]] [[day|día]]. [[It|Ello]] [[is|es]] [[a|un]] [[great|gran]] [[place|lugar]] [[to|para]] [[meet|conocer]] [[people|gente]] [[from|de]] [[many|muchos]] [[countries|países]].',
    audioUrl: 'audio/a1/unit-2/a1-m1-l2-reading-5.mp3',
    content: {
      title: '[[Reading: The Club|Lectura: El Club]]',
      instructions: '[[Read and answer.|Lee y responde.]]',
      questions: [{ id: 'a1-m1-l2-q60', type: 'true-false', question: '[[The club is open on Sundays.|El club abre los domingos.]]', correctAnswer: 'True' }]
    }
  }
];

// Flatten grammar questions into individual exercises
const INDIVIDUAL_GRAMMAR_EXERCISES = GRAMMAR_QUESTIONS.map(q => createExercise(q.id, q, 'Origins & Occupations', 2));

// LISTENING & PRONUNCIATION LESSON (EXERCISES 61-75)
const LISTENING_AND_PRONUNCIATION: Exercise[] = [
  // Listening Comprehension (61-68)
  {
    id: 'a1-u2-e61',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'He is a doctor. He works in a hospital.',
    audioUrl: 'audio/a1/unit-2/e61.mp3',
    content: {
      title: 'Listening: Professions',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q61',
        type: 'multiple-choice',
        question: 'What is his job?',
        options: ['Teacher', 'Doctor', 'Nurse'],
        correctAnswer: 'Doctor',
        explanation: 'The speaker says: "He is a doctor".'
      }]
    }
  },
  {
    id: 'a1-u2-e62',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'They are from Japan. They are Japanese.',
    audioUrl: 'audio/a1/unit-2/e62.mp3',
    content: {
      title: 'Listening: Origins',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q62',
        type: 'multiple-choice',
        question: 'Where are they from?',
        options: ['China', 'Japan', 'Korea'],
        correctAnswer: 'Japan',
        explanation: 'The speaker says: "They are from Japan".'
      }]
    }
  },
  {
    id: 'a1-u2-e63',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'She is a nurse. She helps people.',
    audioUrl: 'audio/a1/unit-2/e63.mp3',
    content: {
      title: 'Listening: Helping Others',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q63',
        type: 'multiple-choice',
        question: 'What is her job?',
        options: ['Nurse', 'Chef', 'Pilot'],
        correctAnswer: 'Nurse',
        explanation: 'The speaker says: "She is a nurse".'
      }]
    }
  },
  {
    id: 'a1-u2-e64',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'I am from Brazil. My nationality is Brazilian.',
    audioUrl: 'audio/a1/unit-2/e64.mp3',
    content: {
      title: 'Listening: Brazil',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q64',
        type: 'multiple-choice',
        question: 'What is the speaker\'s nationality?',
        options: ['Spanish', 'Mexican', 'Brazilian'],
        correctAnswer: 'Brazilian',
        explanation: 'The speaker says: "My nationality is Brazilian".'
      }]
    }
  },
  {
    id: 'a1-u2-e65',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'We are students. We are in the classroom.',
    audioUrl: 'audio/a1/unit-2/e65.mp3',
    content: {
      title: 'Listening: Students',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q65',
        type: 'multiple-choice',
        question: 'Where are they?',
        options: ['In a restaurant', 'In the classroom', 'In a hospital'],
        correctAnswer: 'In the classroom',
        explanation: 'The speaker says: "We are in the classroom".'
      }]
    }
  },
  {
    id: 'a1-u2-e66',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'He is a pilot. He flies planes.',
    audioUrl: 'audio/a1/unit-2/e66.mp3',
    content: {
      title: 'Listening: Pilots',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q66',
        type: 'multiple-choice',
        question: 'What does he do?',
        options: ['Drives a car', 'Flies a plane', 'Cooks food'],
        correctAnswer: 'Flies a plane',
        explanation: 'A pilot flies planes.'
      }]
    }
  },
  {
    id: 'a1-u2-e67',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'They are from Mexico. They speak Spanish.',
    audioUrl: 'audio/a1/unit-2/e67.mp3',
    content: {
      title: 'Listening: Language',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q67',
        type: 'multiple-choice',
        question: 'What language do they speak?',
        options: ['English', 'Spanish', 'French'],
        correctAnswer: 'Spanish',
        explanation: 'The speaker says: "They speak Spanish".'
      }]
    }
  },
  {
    id: 'a1-u2-e68',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'It is my dog. It is brown and white.',
    audioUrl: 'audio/a1/unit-2/e68.mp3',
    content: {
      title: 'Listening: Pets',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q68',
        type: 'multiple-choice',
        question: 'What color is the dog?',
        options: ['Black', 'Brown and white', 'Grey'],
        correctAnswer: 'Brown and white',
        explanation: 'The speaker says: "It is brown and white".'
      }]
    }
  },
  // Pronunciation Practice (69-75)
  {
    id: 'a1-u2-e69',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'He is a teacher.',
    audioUrl: 'audio/a1/unit-2/e69.mp3',
    content: {
      title: 'Pronunciation: Professions',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'He is a teacher.',
      evaluationCriteria: [
        'Sonido /h/ aspirado en "He"',
        'Vocal corta /ɪ/ en "is"',
        'Acento tónico en "teach" (/ˈtiːtʃər/)'
      ]
    }
  },
  {
    id: 'a1-u2-e70',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'She is Mexican.',
    audioUrl: 'audio/a1/unit-2/e70.mp3',
    content: {
      title: 'Pronunciation: Nationalities',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'She is Mexican.',
      evaluationCriteria: [
        'Sonido /ʃ/ en "She"',
        'Acento tónico en "Mex" (/ˈmeksɪkən/)',
        'Pronunciación clara de la "x" como /ks/'
      ]
    }
  },
  {
    id: 'a1-u2-e71',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'They are from Japan.',
    audioUrl: 'audio/a1/unit-2/e71.mp3',
    content: {
      title: 'Pronunciation: Origins',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'They are from Japan.',
      evaluationCriteria: [
        'Sonido /ð/ en "They"',
        'Pronunciación de "from" con vocal neutra /ə/',
        'Acento tónico en "pan" (/dʒəˈpæn/)'
      ]
    }
  },
  {
    id: 'a1-u2-e72',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'We are happy.',
    audioUrl: 'audio/a1/unit-2/e72.mp3',
    content: {
      title: 'Pronunciation: Emotions',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'We are happy.',
      evaluationCriteria: [
        'Vocal larga /iː/ en "We"',
        'Sonido /h/ aspirado en "happy"',
        'Acento tónico en la primera sílaba de "happy" (/ˈhæpi/)'
      ]
    }
  },
  {
    id: 'a1-u2-e73',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'I am a doctor.',
    audioUrl: 'audio/a1/unit-2/e73.mp3',
    content: {
      title: 'Pronunciation: Professions',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'I am a doctor.',
      evaluationCriteria: [
        'Diptongo /aɪ/ en "I"',
        'Acento tónico en "doc" (/ˈdɒktər/)',
        'Vocal neutra /ə/ al final de "doctor"'
      ]
    }
  },
  {
    id: 'a1-u2-e74',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'It is a big city.',
    audioUrl: 'audio/a1/unit-2/e74.mp3',
    content: {
      title: 'Pronunciation: Places',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'It is a big city.',
      evaluationCriteria: [
        'Vocal corta /ɪ/ en "It" e "is"',
        'Sonido /g/ final en "big"',
        'Acento tónico en "ci" (/ˈsɪti/)'
      ]
    }
  },
  {
    id: 'a1-u2-e75',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'She is my friend.',
    audioUrl: 'audio/a1/unit-2/e75.mp3',
    content: {
      title: 'Pronunciation: Relationships',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'She is my friend.',
      evaluationCriteria: [
        'Sonido /ʃ/ en "She"',
        'Vocal /e/ corta en "friend"',
        'Sonido /d/ final claro'
      ]
    }
  }
];

export const A1_M1_L2_ALL_EXERCISES: Exercise[] = [
  ...INDIVIDUAL_GRAMMAR_EXERCISES,
  ...READING_EXERCISES,
  ...LISTENING_AND_PRONUNCIATION
];
