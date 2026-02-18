// A1 Module 1 Unit 1: Greetings & Goodbyes
// Focus: Basic Greetings, Goodbyes, and the Verb 'To Be' (Am/Is/Are).
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
  // Recognition (1-15)
  { id: 'q1', type: 'multiple-choice', question: 'It is 8:00 AM. You say: "Good ___!"', options: ['morning', 'afternoon', 'evening'], correctAnswer: 'morning' },
  { id: 'q2', type: 'multiple-choice', question: 'It is 3:00 PM. You say: "Good ___!"', options: ['morning', 'afternoon', 'evening'], correctAnswer: 'afternoon' },
  { id: 'q3', type: 'multiple-choice', question: 'When you go to sleep, you say: "Good ___!"', options: ['morning', 'afternoon', 'night'], correctAnswer: 'night' },
  { id: 'q4', type: 'true-false', question: '"Hi" is more formal than "Hello".', correctAnswer: 'False' },
  { id: 'q5', type: 'multiple-choice', question: 'I ___ a student.', options: ['am', 'is', 'are'], correctAnswer: 'am' },
  { id: 'q6', type: 'multiple-choice', question: 'You ___ my friend.', options: ['am', 'is', 'are'], correctAnswer: 'are' },
  { id: 'q7', type: 'multiple-choice', question: 'He ___ a doctor.', options: ['am', 'is', 'are'], correctAnswer: 'is' },
  { id: 'q8', type: 'multiple-choice', question: 'Which word matches the image of a moon?', options: ['Sun', 'Morning', 'Night'], correctAnswer: 'Night' },
  { id: 'q9', type: 'fill-blank', question: 'Hello, I ___ Sarah.', correctAnswer: 'am' },
  { id: 'q10', type: 'multiple-choice', question: 'Match "Hola" to English:', options: ['Bye', 'Hello', 'Thanks'], correctAnswer: 'Hello' },
  { id: 'q11', type: 'multiple-choice', question: 'She ___ happy.', options: ['am', 'is', 'are'], correctAnswer: 'is' },
  { id: 'q12', type: 'true-false', question: 'We can use "Good morning" at 11:00 PM.', correctAnswer: 'False' },
  { id: 'q13', type: 'multiple-choice', question: 'It ___ a pen.', options: ['am', 'is', 'are'], correctAnswer: 'is' },
  { id: 'q14', type: 'fill-blank', question: 'How ___ you?', correctAnswer: 'are' },
  { id: 'q15', type: 'true-false', question: 'The pronoun "I" is used for other people.', correctAnswer: 'False' },

  // Concept Acquisition (16-30)
  { id: 'q16', type: 'multiple-choice', question: 'Select the contraction for "I am":', options: ["I'm", "I's", "I're"], correctAnswer: "I'm" },
  { id: 'q17', type: 'true-false', question: 'The contraction for "You are" is "You\'is".', correctAnswer: 'False' },
  { id: 'q18', type: 'multiple-choice', question: 'Select the contraction for "He is":', options: ["He's", "He're", "He'm"], correctAnswer: "He's" },
  { id: 'q19', type: 'true-false', question: 'We use "She" for a man.', correctAnswer: 'False' },
  { id: 'q20', type: 'multiple-choice', question: 'Identify the pronoun for a boy:', options: ['He', 'She', 'It'], correctAnswer: 'He' },
  { id: 'q21', type: 'true-false', question: 'We use "It" for a person.', correctAnswer: 'False' },
  { id: 'q22', type: 'fill-blank', question: "I ___ fine, thanks.", correctAnswer: "am" },
  { id: 'q23', type: 'multiple-choice', question: 'Nice to ___ you.', options: ['see', 'meet', 'look'], correctAnswer: 'meet' },
  { id: 'q24', type: 'true-false', question: 'We use "It is" for animals and objects.', correctAnswer: 'True' },
  { id: 'q25', type: 'multiple-choice', question: 'Choose the correct formal greeting:', options: ['Hi!', 'Hey!', 'Good afternoon.'], correctAnswer: 'Good afternoon.' },
  { id: 'q26', type: 'true-false', question: 'The verb "to be" has 5 forms for "I".', correctAnswer: 'False' },
  { id: 'q27', type: 'multiple-choice', question: 'What is the subject pronoun for "Yo"?', options: ['You', 'I', 'Me'], correctAnswer: 'I' },
  { id: 'q28', type: 'multiple-choice', question: 'Complete: ___ is my teacher.', options: ['I', 'He', 'You'], correctAnswer: 'He' },
  { id: 'q29', type: 'true-false', question: 'The contraction for "She is" is "She\'s".', correctAnswer: 'True' },
  { id: 'q30', type: 'true-false', question: 'The plural of "He" is "I".', correctAnswer: 'False' },

  // Practice (31-50)
  { id: 'q31', type: 'multiple-choice', question: 'Select the correct sentence:', options: ['I am happy.', 'Am I happy.', 'I happy am.'], correctAnswer: 'I am happy.' },
  { id: 'q32', type: 'multiple-choice', question: 'Select the correct sentence:', options: ['You are tall.', 'Are you tall.', 'You tall are.'], correctAnswer: 'You are tall.' },
  { id: 'q33', type: 'fill-blank', question: "___ is a cat.", correctAnswer: "It" },
  { id: 'q34', type: 'multiple-choice', question: 'Goodbye, see ___ later!', options: ['me', 'you', 'it'], correctAnswer: 'you' },
  { id: 'q35', type: 'fill-blank', question: "He ___ from Mexico.", correctAnswer: "is" },
  { id: 'q36', type: 'multiple-choice', question: 'Which is correct?', options: ["I'm fine.", "I is fine.", "I are fine."], correctAnswer: "I'm fine." },
  { id: 'q37', type: 'fill-blank', question: "___ are welcome.", correctAnswer: "You" },
  { id: 'q38', type: 'multiple-choice', question: 'It is 7:00 PM. You arrive. You say:', options: ['Good morning.', 'Good afternoon.', 'Good evening.'], correctAnswer: 'Good evening.' },
  { id: 'q39', type: 'multiple-choice', question: 'It is 11:00 PM. You leave. You say:', options: ['Good night.', 'Good evening.', 'Good afternoon.'], correctAnswer: 'Good night.' },
  { id: 'q40', type: 'fill-blank', question: "She ___ a student.", correctAnswer: "is" },
  { id: 'q41', type: 'multiple-choice', question: 'Order the words: [am / I / Italian / .]', options: ['Italian I am.', 'I Italian am.', 'I am Italian.'], correctAnswer: 'I am Italian.' },
  { id: 'q42', type: 'multiple-choice', question: 'Order the words: [is / He / cool / .]', options: ['He is cool.', 'Is he cool.', 'Cool he is.'], correctAnswer: 'He is cool.' },
  { id: 'q43', type: 'fill-blank', question: "___ name is John.", correctAnswer: "My" },
  { id: 'q44', type: 'multiple-choice', question: 'What is the opposite of "Hello"?', options: ['Hi', 'Goodbye', 'Good morning'], correctAnswer: 'Goodbye' },
  { id: 'q45', type: 'true-false', question: '"I" is always capitalized in English.', correctAnswer: 'True' },
  { id: 'q46', type: 'multiple-choice', question: 'A: "How are you?" B: "___"', options: ['I am fine, thanks.', 'I am John.', 'Good night.'], correctAnswer: 'I am fine, thanks.' },
  { id: 'q47', type: 'multiple-choice', question: 'A: "What is your name?" B: "___"', options: ['I am Maria.', 'I am fine.', 'See you!'], correctAnswer: 'I am Maria.' },
  { id: 'q48', type: 'multiple-choice', question: 'A: "Nice to meet you." B: "___"', options: ['Nice to meet you too.', 'Hello.', 'Good morning.'], correctAnswer: 'Nice to meet you too.' },
  { id: 'q49', type: 'fill-blank', question: "See you ___.", correctAnswer: "later" },
  { id: 'q50', type: 'multiple-choice', question: 'Choose the best greeting for a job interview:', options: ['Hey!', 'Hello, good morning.', 'Sup?'], correctAnswer: 'Hello, good morning.' },

  // More practice to reach 55
  { id: 'q51', type: 'fill-blank', question: "I ___ a student at Focus English.", correctAnswer: "am" },
  { id: 'q52', type: 'multiple-choice', question: 'Translate: "Ella es mi amiga."', options: ['She is my friend.', 'He is my friend.', 'It is my friend.'], correctAnswer: 'She is my friend.' },
  { id: 'q53', type: 'multiple-choice', question: 'Translate: "¿Cómo estás?"', options: ['How are you?', 'Who are you?', 'Where are you?'], correctAnswer: 'How are you?' },
  { id: 'q54', type: 'fill-blank', question: "___ are my friend.", correctAnswer: "You" },
  { id: 'q55', type: 'multiple-choice', question: 'Find the error: "I are happy."', options: ['I are', 'I am', 'I is'], correctAnswer: 'I am' },
];

// Reading Exercises (56-60)
const READING_EXERCISES: Exercise[] = [
  {
    id: 'a1-m1-l1-reading-1',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: 'Hello! My name is Alex. I am from London. I am a student. Today is a good day. I am happy.',
    content: {
      title: 'Reading: Meet Alex',
      instructions: 'Read the text and answer the questions.',
      questions: [
        {
          id: 'q56',
          type: 'multiple-choice',
          question: 'What is his name?',
          options: ['Alex', 'John', 'London'],
          correctAnswer: 'Alex',
          explanation: 'The text says "My name is Alex".'
        },
        {
          id: 'q57',
          type: 'multiple-choice',
          question: 'Where is he from?',
          options: ['Spain', 'London', 'New York'],
          correctAnswer: 'London',
          explanation: 'The text says "I am from London".'
        }
      ]
    }
  },
  {
    id: 'a1-m1-l1-reading-2',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: 'This is my friend, Sarah. She is a teacher. She is very nice. We are in the classroom now. It is 9:00 AM.',
    content: {
      title: 'Reading: My Friend Sarah',
      instructions: 'Read the text and answer the questions.',
      questions: [
        {
          id: 'q58',
          type: 'multiple-choice',
          question: 'What is Sarah\'s job?',
          options: ['Student', 'Teacher', 'Doctor'],
          correctAnswer: 'Teacher',
          explanation: 'The text says "She is a teacher".'
        },
        {
          id: 'q59',
          type: 'multiple-choice',
          question: 'Where are they?',
          options: ['At home', 'In the classroom', 'At the park'],
          correctAnswer: 'In the classroom',
          explanation: 'The text says "We are in the classroom".'
        },
        {
          id: 'q60',
          type: 'multiple-choice',
          question: 'What time is it?',
          options: ['9:00 AM', '3:00 PM', '12:00 PM'],
          correctAnswer: '9:00 AM',
          explanation: 'The text says "It is 9:00 AM".'
        }
      ]
    }
  }
];

// Flatten grammar questions into individual exercises
const INDIVIDUAL_GRAMMAR_EXERCISES = GRAMMAR_QUESTIONS.map(q => createExercise(q.id, q, 'Greetings & Verb To Be'));

// Combine to get exactly 60 exercises in the main array if possible, 
// but since readings have multiple questions, we can adjust.
// The user expects "Ejercicio X de 60". 
// To get 60 items in the array, we have 55 grammar + 5 reading exercises.
// I'll add 3 more reading exercises to reach 60 items in the array.

const ADDITIONAL_READINGS: Exercise[] = [
  {
    id: 'a1-m1-l1-reading-3',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: 'Good morning! I am Maria. This is my dog, Max. Max is brown. He is a good dog.',
    content: {
      title: 'Reading: Maria and Max',
      instructions: 'Read and answer.',
      questions: [{ id: 'q-r3-1', type: 'multiple-choice', question: 'What color is Max?', options: ['Black', 'Brown', 'White'], correctAnswer: 'Brown' }]
    }
  },
  {
    id: 'a1-m1-l1-reading-4',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: 'Hi, I am Tom. I am 20 years old. I am from Canada. Nice to meet you!',
    content: {
      title: 'Reading: Tom from Canada',
      instructions: 'Read and answer.',
      questions: [{ id: 'q-r4-1', type: 'multiple-choice', question: 'Where is Tom from?', options: ['Canada', 'USA', 'UK'], correctAnswer: 'Canada' }]
    }
  },
  {
    id: 'a1-m1-l1-reading-5',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: 'It is 6:00 PM. Good evening! We are at the restaurant. The food is good. We are happy.',
    content: {
      title: 'Reading: At the Restaurant',
      instructions: 'Read and answer.',
      questions: [{ id: 'q-r5-1', type: 'multiple-choice', question: 'What time is it?', options: ['6:00 AM', '6:00 PM', '8:00 PM'], correctAnswer: '6:00 PM' }]
    }
  }
];

export const A1_M1_L1_ALL_EXERCISES: Exercise[] = [
  ...INDIVIDUAL_GRAMMAR_EXERCISES,
  ...READING_EXERCISES,
  ...ADDITIONAL_READINGS
];
