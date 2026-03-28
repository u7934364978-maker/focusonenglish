/**
 * Unidad 1 — Lección 3: Comprensión lectora
 * 15 actividades: 1 texto + 15 preguntas (1 por actividad).
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading comprehension|Comprensión lectora]]';
/** Texto modelo: bloques [[EN|ES]] para inglés natural (evitar troceos que rompen “because it is…”). */
const READING_TRANSCRIPT = `[[Hello!|¡Hola!]] [[My name is María.|Mi nombre es María.]] [[I am twenty-eight years old.|Tengo veintiocho años.]] [[I am from Madrid, Spain.|Soy de Madrid, España.]] [[I am a teacher.|Soy profesora.]] [[I teach English at a small school.|Enseño inglés en una escuela pequeña.]] [[I am happy today because it is my birthday.|Estoy feliz hoy porque es mi cumpleaños.]] [[Nice to meet you!|¡Encantada de conocerte!]]`;

const INSTRUCTIONS =
  '[[Read the text below. Then answer each question.|Lee el texto de abajo. Después responde a cada pregunta.]]';

const QUESTIONS = [
  {
    question: '[[What is her name?|¿Cuál es su nombre?]]',
    options: ['[[Ana|Ana]]', '[[María|María]]', '[[Carmen|Carmen]]', '[[Elena|Elena]]'],
    correctAnswer: 1,
    explanation:
      '[[The text says *My name is María*.|El texto dice *My name is María*.]]',
  },
  {
    question: '[[How old is María?|¿Cuántos años tiene María?]]',
    options: ['[[twenty|veinte]]', '[[twenty-five|veinticinco]]', '[[twenty-eight|veintiocho]]', '[[thirty|treinta]]'],
    correctAnswer: 2,
    explanation:
      '[[She is **twenty-eight years old**.|Tiene **veintiocho años**.]]',
  },
  {
    question: '[[Where is María from?|¿De dónde es María?]]',
    options: ['[[London|Londres]]', '[[Barcelona|Barcelona]]', '[[Madrid|Madrid]]', '[[Mexico City|Ciudad de México]]'],
    correctAnswer: 2,
    explanation:
      '[[She is from **Madrid** (Spain).|Es de **Madrid** (España).]]',
  },
  {
    question: '[[What is her job?|¿Cuál es su trabajo?]]',
    options: [
      '[[student|estudiante]]',
      '[[doctor|médica]]',
      '[[teacher|profesora]]',
      '[[nurse|enfermera]]',
    ],
    correctAnswer: 2,
    explanation: '[[She says *I am a teacher*.|Dice *I am a teacher* (soy profesora).]]',
  },
  {
    question: '[[What does she teach?|¿Qué enseña ella?]]',
    options: ['[[Spanish|Español]]', '[[Math|Matemáticas]]', '[[English|Inglés]]', '[[Science|Ciencias]]'],
    correctAnswer: 2,
    explanation: '[[She teaches **English**.|Enseña **inglés**.]]',
  },
  {
    question: '[[Where does she work?|¿Dónde trabaja ella?]]',
    options: [
      '[[At a big school.|En una escuela grande.]]',
      '[[At a small school.|En una escuela pequeña.]]',
      '[[At home.|En casa.]]',
      '[[In a hospital.|En un hospital.]]',
    ],
    correctAnswer: 1,
    explanation:
      '[[She teaches at a **small** school.|Enseña en una escuela **pequeña**.]]',
  },
  {
    question: '[[Why is María happy today?|¿Por qué está María feliz hoy?]]',
    options: [
      '[[Because she is on holiday.|Porque está de vacaciones.]]',
      '[[Because it is her birthday.|Porque es su cumpleaños.]]',
      '[[Because she has a new job.|Porque tiene un trabajo nuevo.]]',
      '[[Because she is from Madrid.|Porque es de Madrid.]]',
    ],
    correctAnswer: 1,
    explanation:
      '[[She says she is happy **because it is her birthday**.|Dice que está feliz **porque es su cumpleaños**.]]',
  },
  {
    question: '[[What phrase does María use to end the text?|¿Qué frase usa María para terminar el texto?]]',
    options: ['[[Goodbye|Adiós]]', '[[How are you?|¿Cómo estás?]]', '[[Nice to meet you|Encantada de conocerte]]', '[[Thank you|Gracias]]'],
    correctAnswer: 2,
    explanation:
      '[[She ends with *Nice to meet you!*|Termina con *Nice to meet you!*]]',
  },
  {
    question: '[[María is from Barcelona.|María es de Barcelona.]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      '[[False. She is from Madrid, not Barcelona.|Falso. Es de Madrid, no de Barcelona.]]',
  },
  {
    question: '[[María is a student.|María es estudiante.]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      '[[False. She is a teacher, not a student.|Falso. Es profesora, no estudiante.]]',
  },
  {
    question: '[[Today is her birthday.|Hoy es su cumpleaños.]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      '[[True. The text says *it is my birthday*.|Verdadero. El texto dice que es su cumpleaños.]]',
  },
  {
    question: '[[María teaches at a big school.|María enseña en una escuela grande.]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      '[[False. She teaches at a **small** school.|Falso. Enseña en una escuela **pequeña**.]]',
  },
  {
    question: '[[What is the main topic of this text?|¿Cuál es el tema principal del texto?]]',
    options: [
      '[[A day at school.|Un día en el colegio.]]',
      '[[A person introducing herself.|Una persona que se presenta.]]',
      '[[A birthday party.|Una fiesta de cumpleaños.]]',
      '[[A trip to Madrid.|Un viaje a Madrid.]]',
    ],
    correctAnswer: 1,
    explanation:
      '[[María introduces herself: name, age, city, job.|María se presenta: nombre, edad, ciudad, trabajo.]]',
  },
  {
    question: '[[Who wrote this text?|¿Quién escribe este texto?]]',
    options: [
      '[[A friend of María.|Una amiga de María.]]',
      '[[María herself.|María misma.]]',
      '[[A teacher.|Un profesor.]]',
      '[[A student.|Un estudiante.]]',
    ],
    correctAnswer: 1,
    explanation:
      '[[María writes in the first person (*My name is…*, *I am…*).|María escribe en primera persona (*My name is…*, *I am…*).]]',
  },
  {
    question: '[[In what city does María teach?|¿En qué ciudad enseña María?]]',
    options: ['[[Barcelona|Barcelona]]', '[[Madrid|Madrid]]', '[[Valencia|Valencia]]', '[[Seville|Sevilla]]'],
    correctAnswer: 1,
    explanation:
      '[[She lives and works in Madrid.|Vive y trabaja en Madrid.]]',
  },
];

export const UNIT_1_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a1-u1-l3-reading-${i + 1}`,
  type: 'reading',
  level: 'A1',
  topic: 'Personal Info',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
