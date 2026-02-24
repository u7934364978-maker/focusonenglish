// A1 Module 1 Unit 1: Greetings & Goodbyes
// Focus: Basic Greetings, Goodbyes, and the Verb 'To Be' (Am/Is/Are).
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
    instructions: q.type === 'fill-blank' ? 'Escribe la palabra correcta.' : 'Elige la respuesta correcta.',
    questions: [q]
  }
});

const GRAMMAR_QUESTIONS = [
  // Recognition (1-15)
  { id: 'q1', type: 'multiple-choice', question: 'It is 8:00 [[AM|de la mañana]]. You say: "Good ___!"', options: ['morning', 'afternoon', 'evening'], correctAnswer: 'morning', explanation: 'Usamos "Good morning" para saludar desde que amanece hasta el mediodía (12:00 PM).' },
  { id: 'q2', type: 'multiple-choice', question: 'It is 3:00 [[PM|de la tarde]]. You say: "Good ___!"', options: ['morning', 'afternoon', 'evening'], correctAnswer: 'afternoon', explanation: 'Usamos "Good afternoon" desde el mediodía hasta aproximadamente las 6:00 PM.' },
  { id: 'q3', type: 'multiple-choice', question: 'When you go to sleep, you say: "Good ___!"', options: ['morning', 'afternoon', 'night'], correctAnswer: 'night', explanation: '"Good night" no es un saludo de llegada, sino una despedida que se usa antes de ir a dormir o al final de la noche.' },
  { id: 'q4', type: 'true-false', question: '"Hi" is [[more|más]] [[formal|formal]] [[than|que]] "Hello".', correctAnswer: 'False', explanation: '"Hello" es el saludo estándar y más formal. "Hi" es informal y se usa con amigos o conocidos.' },
  { id: 'q5', type: 'multiple-choice', question: 'I ___ a student.', options: ['am', 'is', 'are'], correctAnswer: 'am', explanation: 'El pronombre personal "I" (Yo) siempre va acompañado de la forma verbal "am".' },
  { id: 'q6', type: 'multiple-choice', question: 'You ___ my friend.', options: ['am', 'is', 'are'], correctAnswer: 'are', explanation: 'El pronombre "You" (Tú/Usted/Vosotros) siempre usa la forma verbal "are".' },
  { id: 'q7', type: 'multiple-choice', question: 'He ___ a doctor.', options: ['am', 'is', 'are'], correctAnswer: 'is', explanation: 'Para la tercera persona del singular (He, She, It) utilizamos la forma verbal "is".' },
  { id: 'q8', type: 'multiple-choice', question: 'Which [[word|palabra]] [[matches|coincide]] [[the|la]] [[image|imagen]] [[of|de]] a [[moon|luna]]?', options: ['Sun', 'Morning', 'Night'], correctAnswer: 'Night', explanation: 'La luna es el símbolo característico de la noche ("Night").' },
  { id: 'q9', type: 'fill-blank', question: 'Hello, I ___ Sarah.', correctAnswer: 'am', explanation: 'Para presentarte usando "I", debes usar la forma verbal "am" (Yo soy...).' },
  { id: 'q10', type: 'multiple-choice', question: 'Match "Hola" [[to|al]] English:', options: ['Bye', 'Hello', 'Thanks'], correctAnswer: 'Hello', explanation: '"Hello" es la traducción directa de "Hola". "Bye" significa adiós.' },
  { id: 'q11', type: 'multiple-choice', question: 'She ___ happy.', options: ['am', 'is', 'are'], correctAnswer: 'is', explanation: 'Como "She" es tercera persona del singular, le corresponde la forma "is".' },
  { id: 'q12', type: 'true-false', question: 'We can use "Good morning" at 11:00 [[PM|de la noche]].', correctAnswer: 'False', explanation: 'A las 11:00 PM es de noche, por lo que deberíamos usar "Good evening" (si llegamos) o "Good night" (si nos vamos).' },
  { id: 'q13', type: 'multiple-choice', question: 'It ___ a pen.', options: ['am', 'is', 'are'], correctAnswer: 'is', explanation: 'Para objetos o animales usamos el pronombre "It" con la forma verbal "is".' },
  { id: 'q14', type: 'fill-blank', question: 'How ___ you?', correctAnswer: 'are', explanation: 'En la pregunta "¿Cómo estás?", el pronombre "you" requiere la forma verbal "are".' },
  { id: 'q15', type: 'true-false', question: 'The pronoun "I" is used for other people.', correctAnswer: 'False', explanation: 'El pronombre "I" es la primera persona y se refiere únicamente a uno mismo (Yo).' },
  // Concept Acquisition (16-30)
  { id: 'q16', type: 'multiple-choice', question: 'Select the [[contraction|contracción]] for "I am":', options: ["I'm", "I's", "I're"], correctAnswer: "I'm", explanation: 'En inglés es muy común contraer "I am" como "I\'m" para hablar de forma más natural.' },
  { id: 'q17', type: 'true-false', question: 'The [[contraction|contracción]] for "You are" is "You\'is".', correctAnswer: 'False', explanation: 'La contracción correcta para "You are" es "You\'re". Nunca se usa "is" con "You".' },
  { id: 'q18', type: 'multiple-choice', question: 'Select the [[contraction|contracción]] for "He is":', options: ["He's", "He're", "He'm"], correctAnswer: "He's", explanation: 'Para la tercera persona "He is", la contracción correcta es "He\'s".' },
  { id: 'q19', type: 'true-false', question: 'We [[use|utilizamos]] "She" [[for|para]] a [[man|hombre]].', correctAnswer: 'False', explanation: 'El pronombre "She" se utiliza exclusivamente para mujeres. Para hombres usamos "He".' },
  { id: 'q20', type: 'multiple-choice', question: 'Identify the [[pronoun|pronombre]] for a [[boy|niño]]:', options: ['He', 'She', 'It'], correctAnswer: 'He', explanation: '"He" es el pronombre masculino singular que significa "Él".' },
  { id: 'q21', type: 'true-false', question: 'We [[use|utilizamos]] "It" [[for|para]] a [[person|persona]].', correctAnswer: 'False', explanation: 'El pronombre "It" se reserva para objetos, animales o situaciones, no para personas.' },
  { id: 'q22', type: 'fill-blank', question: "I ___ [[fine|bien]], [[thanks|gracias]].", correctAnswer: "am", explanation: 'Nuevamente, con "I" siempre usamos la forma verbal "am" para expresar estados o identidad.' },
  { id: 'q23', type: 'multiple-choice', question: 'Nice to ___ you.', options: ['see', 'meet', 'look'], correctAnswer: 'meet', explanation: '"Nice to meet you" es la frase hecha que utilizamos cuando conocemos a alguien por primera vez.' },
  { id: 'q24', type: 'true-false', question: 'We [[use|utilizamos]] "It is" [[for|para]] [[animals|animales]] [[and|y]] [[objects|objetos]].', correctAnswer: 'True', explanation: 'Efectivamente, "It" es el pronombre neutro que usamos para todo lo que no sea una persona en singular.' },
  { id: 'q25', type: 'multiple-choice', question: 'Choose the [[correct|correcta]] [[formal|formal]] [[greeting|saludo]]:', options: ['Hi!', 'Hey!', 'Good afternoon.'], correctAnswer: 'Good afternoon.', explanation: '"Good afternoon" es un saludo educado y formal. "Hi" y "Hey" son informales.' },
  { id: 'q26', type: 'true-false', question: 'The [[verb|verbo]] "to be" [[has|tiene]] 5 [[forms|formas]] [[for|para]] "I".', correctAnswer: 'False', explanation: 'El verbo "to be" solo tiene una forma específica para "I", que es "am".' },
  { id: 'q27', type: 'multiple-choice', question: 'What is the [[subject|sujeto]] [[pronoun|pronombre]] [[for|para]] "Yo"?', options: ['You', 'I', 'Me'], correctAnswer: 'I', explanation: '"I" es el pronombre de sujeto. "Me" se usa como objeto (ej: "Look at me").' },
  { id: 'q28', type: 'multiple-choice', question: 'Complete: ___ is my [[teacher|profesor/a]].', options: ['I', 'He', 'You'], correctAnswer: 'He', explanation: 'Como el verbo es "is", necesitamos un pronombre de tercera persona singular como "He". "I" usaría "am" y "You" usaría "are".' },
  { id: 'q29', type: 'true-false', question: 'The [[contraction|contracción]] [[for|para]] "She is" is "She\'s".', correctAnswer: 'True', explanation: 'Correcto. "She is" se contrae uniendo el pronombre con la "s" mediante un apóstrofe.' },
  { id: 'q30', type: 'true-false', question: 'The [[plural|plural]] [[of|de]] "He" is "I".', correctAnswer: 'False', explanation: 'El plural de "He" (Él) es "They" (Ellos). "I" (Yo) es singular.' },
  // Practice (31-50)
  { id: 'q31', type: 'multiple-choice', question: 'Select the [[correct|correcta]] [[sentence|oración]]:', options: ['I am happy.', 'Am I happy.', 'I happy am.'], correctAnswer: 'I am happy.', explanation: 'La estructura afirmativa estándar en inglés es Sujeto + Verbo + Complemento.' },
  { id: 'q32', type: 'multiple-choice', question: 'Select the [[correct|correcta]] [[sentence|oración]]:', options: ['You are tall.', 'Are you tall.', 'You tall are.'], correctAnswer: 'You are tall.', explanation: 'Para el pronombre "You", el verbo correspondiente es "are" en oraciones afirmativas.' },
  { id: 'q33', type: 'fill-blank', question: "___ is a [[cat|gato]].", correctAnswer: "It", explanation: 'Como nos referimos a un animal (un gato), el pronombre de sujeto adecuado es "It".' },
  { id: 'q34', type: 'multiple-choice', question: 'Goodbye, [[see|nos vemos]] you [[later|luego]]!', options: ['me', 'you', 'it'], correctAnswer: 'you', explanation: '"See you later" es la expresión común para despedirse, significando "nos vemos luego".' },
  { id: 'q35', type: 'fill-blank', question: "He ___ [[from|de]] Mexico.", correctAnswer: "is", explanation: 'Con la tercera persona singular masculina (He), el verbo "to be" toma la forma "is".' },
  { id: 'q36', type: 'multiple-choice', question: 'Which [[is|es]] [[correct|correcto]]?', options: ["I'm fine.", "I is fine.", "I are fine."], correctAnswer: "I'm fine.", explanation: '"I\'m" es la contracción de "I am", la única forma válida para la primera persona singular.' },
  { id: 'q37', type: 'fill-blank', question: "___ are welcome.", correctAnswer: "You", explanation: '"You are welcome" es la respuesta estándar a "Thank you" (Gracias).' },
  { id: 'q38', type: 'multiple-choice', question: 'It is 7:00 [[PM|de la noche]]. You arrive. You say:', options: ['Good morning.', 'Good afternoon.', 'Good evening.'], correctAnswer: 'Good evening.', explanation: 'Al llegar a un lugar por la tarde/noche (7:00 PM), saludamos con "Good evening".' },
  { id: 'q39', type: 'multiple-choice', question: 'It is 11:00 [[PM|de la noche]]. You leave. You say:', options: ['Good night.', 'Good evening.', 'Good afternoon.'], correctAnswer: 'Good night.', explanation: '"Good night" se utiliza exclusivamente como despedida cuando es de noche o antes de dormir.' },
  { id: 'q40', type: 'fill-blank', question: "She ___ a [[student|estudiante]].", correctAnswer: "is", explanation: 'Usamos "is" para conectar al sujeto "She" con su ocupación.' },
  { id: 'q41', type: 'multiple-choice', question: 'Order the words: [am / I / Italian / .]', options: ['Italian I am.', 'I Italian am.', 'I am Italian.'], correctAnswer: 'I am Italian.', explanation: 'El orden correcto es Sujeto (I) + Verbo (am) + Adjetivo de nacionalidad (Italian).' },
  { id: 'q42', type: 'multiple-choice', question: 'Order the words: [is / He / cool / .]', options: ['He is cool.', 'Is he cool.', 'Cool he is.'], correctAnswer: 'He is cool.', explanation: 'Seguimos el orden Sujeto (He) + Verbo (is) + Complemento (cool).' },
  { id: 'q43', type: 'fill-blank', question: "___ [[name|nombre]] is John.", correctAnswer: "My", explanation: '"My" es el adjetivo posesivo para indicar que el nombre me pertenece a mí.' },
  { id: 'q44', type: 'multiple-choice', question: 'What is the [[opposite|opuesto]] [[of|de]] "Hello"?', options: ['Hi', 'Goodbye', 'Good morning'], correctAnswer: 'Goodbye', explanation: '"Hello" es un saludo al llegar y "Goodbye" es la despedida al irse.' },
  { id: 'q45', type: 'true-false', question: '"I" is [[always|siempre]] [[capitalized|en mayúsculas]] [[in|en]] English.', correctAnswer: 'True', explanation: 'En inglés, el pronombre de primera persona "I" siempre se escribe en mayúscula.' },
  { id: 'q46', type: 'multiple-choice', question: 'A: "How are you?" B: "___"', options: ['I am fine, thanks.', 'I am John.', 'Good night.'], correctAnswer: 'I am fine, thanks.', explanation: '"I am fine, thanks" es la respuesta educada a la pregunta sobre nuestro estado de ánimo o salud.' },
  { id: 'q47', type: 'multiple-choice', question: 'A: "What is your name?" B: "___"', options: ['I am Maria.', 'I am fine.', 'See you!'], correctAnswer: 'I am Maria.', explanation: 'Respondemos con nuestro nombre cuando nos preguntan "¿Cómo te llamas?".' },
  { id: 'q48', type: 'multiple-choice', question: 'A: "Nice to meet you." B: "___"', options: ['Nice to meet you too.', 'Hello.', 'Good morning.'], correctAnswer: 'Nice to meet you too.', explanation: 'Cuando alguien nos dice que es un placer conocernos, respondemos con "too" (también).' },
  { id: 'q49', type: 'fill-blank', question: "See you [[later|luego]].", correctAnswer: "later", explanation: '"See you later" es la frase completa para despedirse cordialmente.' },
  { id: 'q50', type: 'multiple-choice', question: 'Choose the [[best|mejor]] [[greeting|saludo]] [[for|para]] a [[job|trabajo]] [[interview|entrevista]]:', options: ['Hey!', 'Hello, good morning.', "[[What's up?|¿Qué tal?]]"], correctAnswer: 'Hello, good morning.', explanation: 'En una entrevista de trabajo, un saludo formal y completo es siempre la mejor opción.' },
  // More practice to reach 55
  { id: 'q51', type: 'fill-blank', question: "I ___ a [[student|estudiante]] at Focus English.", correctAnswer: "am", explanation: 'Con el pronombre "I" siempre usamos el verbo "am" para definir quiénes somos.' },
  { id: 'q52', type: 'multiple-choice', question: 'Translate: "Ella es mi amiga."', options: ['She is my friend.', 'He is my friend.', 'It is my friend.'], correctAnswer: 'She is my friend.', explanation: '"She" es ella, "He" es él e "It" es ello. Por tanto, "She is my friend" es la traducción correcta.' },
  { id: 'q53', type: 'multiple-choice', question: 'Translate: "¿Cómo estás?"', options: ['How are you?', 'Who are you?', 'Where are you?'], correctAnswer: 'How are you?', explanation: '"How" significa cómo, "Who" quién y "Where" dónde.' },
  { id: 'q54', type: 'fill-blank', question: "___ are my [[friend|amigo]].", correctAnswer: "You", explanation: 'El verbo "are" nos indica que el sujeto debe ser "You" (Tú).' },
  { id: 'q55', type: 'multiple-choice', question: 'Find the error: "I are happy."', options: ['I are', 'I am', 'I is'], correctAnswer: 'I am', explanation: 'El error es usar "are" con "I". La forma correcta es "I am".' },
];
// Reading Exercises (56-60)
const READING_EXERCISES: Exercise[] = [
  {
    id: 'a1-m1-l1-reading-1',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: '[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Alex|Alex]]. [[I|Yo]] [[am|soy]] [[from|de]] [[London|Londres]]. [[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]]. [[Today|Hoy]] [[is|es]] [[a|un]] [[good|buen]] [[day|día]]. [[I|Yo]] [[am|estoy]] [[happy|feliz]].',
    audioUrl: 'audio/a1/unit-1/a1-m1-l1-reading-1.mp3',
    content: {
      title: 'Reading: Meet Alex',
      instructions: 'Read the text and answer the questions.',
      questions: [
        {
          id: 'q56',
          type: 'multiple-choice',
          question: 'What is [[his|su]] [[name|nombre]]?',
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
    transcript: '[[This|Esta]] [[is|es]] [[my|mi]] [[friend|amiga]], [[Sarah|Sara]]. [[She|Ella]] [[is|es]] [[a|una]] [[teacher|profesora]]. [[She|Ella]] [[is|es]] [[very|muy]] [[nice|agradable]]. [[We|Nosotros]] [[are|estamos]] [[in|en]] [[the|el]] [[classroom|aula]] [[now|ahora]]. [[It|Ello]] [[is|es]] [[9:00]] [[AM|de la mañana]].',
    audioUrl: 'audio/a1/unit-1/a1-m1-l1-reading-2.mp3',
    content: {
      title: 'Reading: My Friend Sarah',
      instructions: 'Read the text and answer the questions.',
      questions: [
        {
          id: 'q58',
          type: 'multiple-choice',
          question: 'What is [[Sarah\'s|de Sara]] [[job|trabajo]]?',
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
          question: 'What [[time|hora]] [[is|es]] [[it|ello]]?',
          options: ['9:00 [[AM|de la mañana]]', '3:00 [[PM|de la tarde]]', '12:00 [[PM|de la tarde]]'],
          correctAnswer: '9:00 [[AM|de la mañana]]',
          explanation: 'The text says "It is 9:00 [[AM|de la mañana]]".'
        }
      ]
    }
  }
];
// Flatten grammar questions into individual exercises
const INDIVIDUAL_GRAMMAR_EXERCISES = GRAMMAR_QUESTIONS.map(q => createExercise(q.id, q, 'Greetings & Verb To Be', 1));
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
    transcript: '[[Good|Buenos]] [[morning|días]]! [[I|Yo]] [[am|soy]] [[Maria|María]]. [[This|Este]] [[is|es]] [[my|mi]] [[dog|perro]], [[Max|Max]]. [[Max|Max]] [[is|es]] [[brown|marrón]]. [[He|Él]] [[is|es]] [[a|un]] [[good|buen]] [[dog|perro]].',
    audioUrl: 'audio/a1/unit-1/a1-m1-l1-reading-3.mp3',
    content: {
      title: 'Reading: Maria and Max',
      instructions: 'Read and answer.',
      questions: [{ id: 'q-r3-1', type: 'multiple-choice', question: 'What [[color|color]] is Max?', options: ['Black', 'Brown', 'White'], correctAnswer: 'Brown' }]
    }
  },
  {
    id: 'a1-m1-l1-reading-4',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: '[[Hi|Hola]], [[I|Yo]] [[am|soy]] [[Tom|Tom]]. [[I|Yo]] [[am|tengo]] [[20]] [[years old|años]]. [[I|Yo]] [[am|soy]] [[from|de]] [[Canada|Canadá]]. [[Nice|Mucho]] [[to|gusto]] [[meet|en conocer]] [[you|a ti]]!',
    audioUrl: 'audio/a1/unit-1/a1-m1-l1-reading-4.mp3',
    content: {
      title: 'Reading: Tom from Canada',
      instructions: 'Read and answer.',
      questions: [{ id: 'q-r4-1', type: 'multiple-choice', question: 'Where is [[Tom|Tomás]] [[from|de]]?', options: ['Canada', 'USA', 'UK'], correctAnswer: 'Canada' }]
    }
  },
  {
    id: 'a1-m1-l1-reading-5',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: '[[It|Ello]] [[is|es]] [[6:00]] [[PM|de la tarde]]. [[Good|Buenas]] [[evening|noches]]! [[We|Nosotros]] [[are|estamos]] [[at|en]] [[the|el]] [[restaurant|restaurante]]. [[The|La]] [[food|comida]] [[is|está]] [[good|buena]]. [[We|Nosotros]] [[are|estamos]] [[happy|felices]].',
    audioUrl: 'audio/a1/unit-1/a1-m1-l1-reading-5.mp3',
    content: {
      title: 'Reading: At the Restaurant',
      instructions: 'Read and answer.',
      questions: [{ id: 'q-r5-1', type: 'multiple-choice', question: 'What [[time|hora]] is [[it|ello]]?', options: ['6:00 [[AM|de la mañana]]', '6:00 [[PM|de la tarde]]', '8:00 [[PM|de la noche]]'], correctAnswer: '6:00 [[PM|de la tarde]]' }]
    }
  }
];

export const A1_M1_L1_ALL_EXERCISES: Exercise[] = [
  ...INDIVIDUAL_GRAMMAR_EXERCISES,
  ...READING_EXERCISES,
  ...ADDITIONAL_READINGS
];
