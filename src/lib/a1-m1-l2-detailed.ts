// A1 Module 1 Unit 2: Origins and Occupations
// Focus: Countries, nationalities, professions, Subject Pronouns (he, she, it, we, they), Verb 'to be' (is, are) affirmative
// Total: 60 Exercises

import { Exercise } from './exercise-types';

// Helper to create a simple exercise from a question
const createExercise = (id: string, q: any, topic: string): Exercise => ({
  id,
  type: q.type || 'grammar',
  level: 'A1',
  topicName: topic,
  content: {
    title: topic,
    instructions: q.type === 'fill-blank' ? 'Escribe la palabra correcta.' : 'Elige la respuesta correcta.',
    questions: [q]
  }
});

const GRAMMAR_QUESTIONS = [
  // Subject Pronouns (1-20)
  { id: 'a1-m1-l2-q1', type: 'multiple-choice', question: 'Peter is from England. ___ is English.', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'], correctAnswer: 'He' },
  { id: 'a1-m1-l2-q2', type: 'multiple-choice', question: 'Anna is a nurse. ___ is 24 years old.', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[We|Nosotros]]'], correctAnswer: 'She' },
  { id: 'a1-m1-l2-q3', type: 'multiple-choice', question: 'The house is very big. ___ is white.', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'], correctAnswer: 'It' },
  { id: 'a1-m1-l2-q4', type: 'multiple-choice', question: 'My brother and I are students. ___ are in class.', options: ['[[We|Nosotros]]', '[[They|Ellos]]', '[[You|Tú/Ustedes]]', '[[I|Yo]]'], correctAnswer: 'We' },
  { id: 'a1-m1-l2-q5', type: 'multiple-choice', question: 'Mark and Lisa are married. ___ are from Canada.', options: ['[[We|Nosotros]]', '[[You|Tú/Ustedes]]', '[[They|Ellos]]', '[[He|Él]]'], correctAnswer: 'They' },
  { id: 'a1-m1-l2-q6', type: 'fill-blank', question: 'This is my dog. ___ is very friendly.', correctAnswer: 'It' },
  { id: 'a1-m1-l2-q7', type: 'fill-blank', question: 'My sister is a pilot. ___ works for an airline.', correctAnswer: 'She' },
  { id: 'a1-m1-l2-q8', type: 'true-false', question: 'We use "They" for a group of things.', correctAnswer: 'True' },
  { id: 'a1-m1-l2-q9', type: 'multiple-choice', question: 'The Eiffel Tower is in Paris. ___ is famous.', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'], correctAnswer: 'It' },
  { id: 'a1-m1-l2-q10', type: 'multiple-choice', question: 'Sam and David are brothers. ___ are tall.', options: ['[[He|Él]]', '[[They|Ellos]]', '[[We|Nosotros]]', '[[It|Eso/Ello]]'], correctAnswer: 'They' },
  { id: 'a1-m1-l2-q11', type: 'fill-blank', question: 'My mother is from Italy. ___ is Italian.', correctAnswer: 'She' },
  { id: 'a1-m1-l2-q12', type: 'true-false', question: 'We use "He" for a girl.', correctAnswer: 'False' },
  { id: 'a1-m1-l2-q13', type: 'multiple-choice', question: 'The books are on the table. ___ are new.', options: ['[[It|Eso/Ello]]', '[[He|Él]]', '[[They|Ellos]]', '[[We|Nosotros]]'], correctAnswer: 'They' },
  { id: 'a1-m1-l2-q14', type: 'fill-blank', question: 'Juan and I are from Mexico. ___ speak Spanish.', correctAnswer: 'We' },
  { id: 'a1-m1-l2-q15', type: 'multiple-choice', question: 'The car is fast. ___ is a Ferrari.', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'], correctAnswer: 'It' },
  { id: 'a1-m1-l2-q16', type: 'fill-blank', question: 'My father is a chef. ___ is at the restaurant.', correctAnswer: 'He' },
  { id: 'a1-m1-l2-q17', type: 'multiple-choice', question: 'The cat is on the sofa. ___ is sleeping.', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[They|Ellos]]'], correctAnswer: 'It' },
  { id: 'a1-m1-l2-q18', type: 'true-false', question: 'We use "We" for a group of people that doesn\'t include us.', correctAnswer: 'False' },
  { id: 'a1-m1-l2-q19', type: 'fill-blank', question: 'Paris and London are cities. ___ are in Europe.', correctAnswer: 'They' },
  { id: 'a1-m1-l2-q20', type: 'multiple-choice', question: 'Mrs. Jones is the manager. ___ is in her office.', options: ['[[He|Él]]', '[[She|Ella]]', '[[It|Eso/Ello]]', '[[We|Nosotros]]'], correctAnswer: 'She' },

  // Verb 'to be' (21-40)
  { id: 'a1-m1-l2-q21', type: 'multiple-choice', question: 'He ___ a teacher.', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'is' },
  { id: 'a1-m1-l2-q22', type: 'multiple-choice', question: 'They ___ from Japan.', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l2-q23', type: 'multiple-choice', question: 'She ___ my sister.', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'is' },
  { id: 'a1-m1-l2-q24', type: 'multiple-choice', question: 'We ___ happy.', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l2-q25', type: 'fill-blank', question: 'It ___ a beautiful day.', correctAnswer: 'is' },
  { id: 'a1-m1-l2-q26', type: 'fill-blank', question: 'John and Mary ___ married.', correctAnswer: 'are' },
  { id: 'a1-m1-l2-q27', type: 'multiple-choice', question: 'Contraction for "He is":', options: ["[[He's|Él es]]", "[[He'is|Él'es]]", "[[Hes|Éles]]"], correctAnswer: "He's" },
  { id: 'a1-m1-l2-q28', type: 'multiple-choice', question: 'Contraction for "They are":', options: ["[[They're|Ellos son]]", "[[Theyr|Ellosson]]", "[[They'ar|Ellos'son]]"], correctAnswer: "They're" },
  { id: 'a1-m1-l2-q29', type: 'true-false', question: 'We say "We is from China."', correctAnswer: 'False' },
  { id: 'a1-m1-l2-q30', type: 'fill-blank', question: 'My cat ___ black and white.', correctAnswer: 'is' },
  { id: 'a1-m1-l2-q31', type: 'multiple-choice', question: 'The students ___ in the library.', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l2-q32', type: 'fill-blank', question: 'Paris ___ a city in France.', correctAnswer: 'is' },
  { id: 'a1-m1-l2-q33', type: 'multiple-choice', question: 'My parents ___ 60 years old.', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l2-q34', type: 'true-false', question: '"It\'s a cat" is the same as "It is a cat".', correctAnswer: 'True' },
  { id: 'a1-m1-l2-q35', type: 'fill-blank', question: 'The coffee ___ very hot.', correctAnswer: 'is' },
  { id: 'a1-m1-l2-q36', type: 'multiple-choice', question: 'Tom and I ___ friends.', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l2-q37', type: 'fill-blank', question: 'She ___ a very good singer.', correctAnswer: 'is' },
  { id: 'a1-m1-l2-q38', type: 'multiple-choice', question: 'Your keys ___ on the table.', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l2-q39', type: 'true-false', question: 'Contractions are only for formal writing.', correctAnswer: 'False' },
  { id: 'a1-m1-l2-q40', type: 'fill-blank', question: 'The sky ___ blue today.', correctAnswer: 'is' },

  // Practice & Vocabulary (41-55)
  { id: 'a1-m1-l2-q41', type: 'multiple-choice', question: 'He is from Mexico. He is ___.', options: ['[[Mexican|Mexicano]]', '[[Mexico|México]]', '[[Mexicans|Mexicanos]]'], correctAnswer: 'Mexican' },
  { id: 'a1-m1-l2-q42', type: 'multiple-choice', question: 'She is from France. She is ___.', options: ['[[France|Francia]]', '[[French|Francesa]]', '[[Frenches|Francesas]]'], correctAnswer: 'French' },
  { id: 'a1-m1-l2-q43', type: 'fill-blank', question: 'They are from Brazil. They are ___.', correctAnswer: 'Brazilian' },
  { id: 'a1-m1-l2-q44', type: 'multiple-choice', question: 'I am a ___. I work in a hospital.', options: ['[[Teacher|Profesor]]', '[[Doctor|Doctor]]', '[[Actor|Actor]]'], correctAnswer: 'Doctor' },
  { id: 'a1-m1-l2-q45', type: 'multiple-choice', question: 'She works in a school. She is a ___.', options: ['[[Nurse|Enfermera]]', '[[Teacher|Profesora]]', '[[Pilot|Piloto]]'], correctAnswer: 'Teacher' },
  { id: 'a1-m1-l2-q46', type: 'true-false', question: 'A "pilot" flies a plane.', correctAnswer: 'True' },
  { id: 'a1-m1-l2-q47', type: 'fill-blank', question: 'He is from the USA. He is ___.', correctAnswer: 'American' },
  { id: 'a1-m1-l2-q48', type: 'multiple-choice', question: 'They work in a restaurant. They are ___.', options: ['[[Waiters|Camareros]]', '[[Drivers|Conductores]]', '[[Engineers|Ingenieros]]'], correctAnswer: 'Waiters' },
  { id: 'a1-m1-l2-q49', type: 'fill-blank', question: 'I am from Spain. I am ___.', correctAnswer: 'Spanish' },
  { id: 'a1-m1-l2-q50', type: 'multiple-choice', question: 'She is a ___. She helps sick people.', options: ['[[Chef|Chef]]', '[[Nurse|Enfermera]]', '[[Artist|Artista]]'], correctAnswer: 'Nurse' },
  { id: 'a1-m1-l2-q51', type: 'true-false', question: 'Italy is a nationality.', correctAnswer: 'False' },
  { id: 'a1-m1-l2-q52', type: 'multiple-choice', question: 'Which is a profession?', options: ['[[Canada|Canadá]]', '[[London|Londres]]', '[[Engineer|Ingeniero]]'], correctAnswer: 'Engineer' },
  { id: 'a1-m1-l2-q53', type: 'fill-blank', question: 'He is from Japan. He is ___.', correctAnswer: 'Japanese' },
  { id: 'a1-m1-l2-q54', type: 'multiple-choice', question: 'You are from the UK. You are ___.', options: ['[[British|Británico]]', '[[England|Inglaterra]]', '[[UKish|UKish]]'], correctAnswer: 'British' },
  { id: 'a1-m1-l2-q55', type: 'true-false', question: '"Student" is a job/occupation.', correctAnswer: 'True' },
];

// Reading Exercises (56-60)
const READING_EXERCISES: Exercise[] = [
  {
    id: 'a1-m1-l2-reading-1',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: 'Meet Mario. He is from Italy. He is 21 years old. He is a student of Architecture. He is very friendly.',
    content: {
      title: 'Reading: Mario from Italy',
      instructions: 'Read and answer.',
      questions: [{ id: 'a1-m1-l2-q56', type: 'multiple-choice', question: 'Where is Mario from?', options: ['[[Spain|España]]', '[[Italy|Italia]]', '[[Japan|Japón]]'], correctAnswer: 'Italy' }]
    }
  },
  {
    id: 'a1-m1-l2-reading-2',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: 'Meet Yuki. She is from Japan. She is 23 years old. She is a student of Medicine. She is very intelligent.',
    content: {
      title: 'Reading: Yuki from Japan',
      instructions: 'Read and answer.',
      questions: [{ id: 'a1-m1-l2-q57', type: 'multiple-choice', question: 'What is Yuki studying?', options: ['[[Architecture|Arquitectura]]', '[[Medicine|Medicina]]', '[[Business|Negocios]]'], correctAnswer: 'Medicine' }]
    }
  },
  {
    id: 'a1-m1-l2-reading-3',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: 'Carlos and Elena are from Spain. They are 22 years old. They are students of Business. They are very happy here.',
    content: {
      title: 'Reading: Carlos and Elena',
      instructions: 'Read and answer.',
      questions: [{ id: 'a1-m1-l2-q58', type: 'multiple-choice', question: 'Are Carlos and Elena from Mexico?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No' }]
    }
  },
  {
    id: 'a1-m1-l2-reading-4',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: 'Julia is from Germany. She is a nurse. Her friend Hans is a doctor. They are from Munich.',
    content: {
      title: 'Reading: Julia and Hans',
      instructions: 'Read and answer.',
      questions: [{ id: 'a1-m1-l2-q59', type: 'multiple-choice', question: 'What is Hans\'s job?', options: ['[[Nurse|Enfermero]]', '[[Doctor|Doctor]]', '[[Teacher|Profesor]]'], correctAnswer: 'Doctor' }]
    }
  },
  {
    id: 'a1-m1-l2-reading-5',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: 'The International Students Club is open every day. It is a great place to meet people from many countries.',
    content: {
      title: 'Reading: The Club',
      instructions: 'Read and answer.',
      questions: [{ id: 'a1-m1-l2-q60', type: 'true-false', question: 'The club is open on Sundays.', correctAnswer: 'True' }]
    }
  }
];

// Flatten grammar questions into individual exercises
const INDIVIDUAL_GRAMMAR_EXERCISES = GRAMMAR_QUESTIONS.map(q => createExercise(q.id, q, 'Origins & Occupations'));

export const A1_M1_L2_ALL_EXERCISES: Exercise[] = [
  ...INDIVIDUAL_GRAMMAR_EXERCISES,
  ...READING_EXERCISES
];
