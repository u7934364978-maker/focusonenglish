/**
 * Unidad 1 — Lección 4: Comprensión auditiva
 * 15 actividades: 1 audio (transcripción) + 15 preguntas (1 por actividad).
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening comprehension|Comprensión auditiva]]';
/** Transcripción alineada con el audio/TTS: frases completas en [[EN|ES]]. */
const LISTENING_TRANSCRIPT = `[[Hi!|¡Hola!]] [[My name is Carlos.|Mi nombre es Carlos.]] [[I am from Barcelona, Spain.|Soy de Barcelona, España.]] [[I am twenty-five years old.|Tengo veinticinco años.]] [[I am a student.|Soy estudiante.]] [[I study at the university.|Estudio en la universidad.]] [[I am happy to be here.|Estoy feliz de estar aquí.]] [[Nice to meet you!|¡Encantado de conocerte!]]`;

const INSTRUCTIONS =
  '[[Listen to the audio below. You can read the transcript after listening. Then answer each question.|Escucha el audio de abajo. Puedes leer la transcripción después. Luego responde a cada pregunta.]]';

const QUESTIONS = [
  {
    question: '[[What is his name?|¿Cuál es su nombre?]]',
    options: ['[[Pedro|Pedro]]', '[[Carlos|Carlos]]', '[[Pablo|Pablo]]', '[[Antonio|Antonio]]'],
    correctAnswer: 1,
    explanation: '[[He says *My name is Carlos*.|Dice *My name is Carlos*.]]',
  },
  {
    question: '[[Where is Carlos from?|¿De dónde es Carlos?]]',
    options: ['[[Madrid|Madrid]]', '[[Valencia|Valencia]]', '[[Barcelona|Barcelona]]', '[[Seville|Sevilla]]'],
    correctAnswer: 2,
    explanation: '[[He is from **Barcelona**, Spain.|Es de **Barcelona**, España.]]',
  },
  {
    question: '[[How old is Carlos?|¿Cuántos años tiene Carlos?]]',
    options: ['[[twenty|veinte]]', '[[twenty-three|veintitrés]]', '[[twenty-five|veinticinco]]', '[[thirty|treinta]]'],
    correctAnswer: 2,
    explanation: '[[He is **twenty-five** years old.|Tiene **veinticinco** años.]]',
  },
  {
    question: '[[What is Carlos? (job / role)|¿Qué es Carlos? (trabajo / rol)]]',
    options: [
      '[[teacher|profesor]]',
      '[[doctor|médico]]',
      '[[student|estudiante]]',
      '[[engineer|ingeniero]]',
    ],
    correctAnswer: 2,
    explanation: '[[He says *I am a student*.|Dice *I am a student* (soy estudiante).]]',
  },
  {
    question: '[[Where does he study?|¿Dónde estudia?]]',
    options: [
      '[[At school.|En el colegio.]]',
      '[[At the university.|En la universidad.]]',
      '[[At home.|En casa.]]',
      '[[In a library.|En una biblioteca.]]',
    ],
    correctAnswer: 1,
    explanation: '[[He studies **at the university**.|**Estudia en la universidad**.]]',
  },
  {
    question: '[[How does Carlos feel?|¿Cómo se siente Carlos?]]',
    options: ['[[tired|cansado]]', '[[sad|triste]]', '[[happy|feliz]]', '[[angry|enfadado]]'],
    correctAnswer: 2,
    explanation: '[[He says *I am happy to be here*.|Dice *I am happy to be here*.]]',
  },
  {
    question: '[[What country does he mention?|¿Qué país menciona?]]',
    options: ['[[Italy|Italia]]', '[[France|Francia]]', '[[Spain|España]]', '[[Portugal|Portugal]]'],
    correctAnswer: 2,
    explanation: '[[He mentions **Spain** (*Barcelona, Spain*).|**España** (*Barcelona, Spain*).]]',
  },
  {
    question: '[[What phrase does Carlos use at the end?|¿Qué frase usa Carlos al final?]]',
    options: [
      '[[Goodbye|Adiós]]',
      '[[Thank you|Gracias]]',
      '[[Nice to meet you|Encantado de conocerte]]',
      '[[How are you?|¿Cómo estás?]]',
    ],
    correctAnswer: 2,
    explanation: '[[He ends with *Nice to meet you!*|Termina con *Nice to meet you!*]]',
  },
  {
    question: '[[Carlos is from Madrid.|Carlos es de Madrid.]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      '[[False. He is from Barcelona, not Madrid.|Falso. Es de Barcelona, no de Madrid.]]',
  },
  {
    question: '[[Carlos is a teacher.|Carlos es profesor.]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False. He is a student.|Falso. Es estudiante.]]',
  },
  {
    question: '[[Carlos studies at the university.|Carlos estudia en la universidad.]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True. He says *I study at the university*.|Verdadero. Dice *I study at the university*.]]',
  },
  {
    question: '[[Carlos is thirty years old.|Carlos tiene treinta años.]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False. He is twenty-five.|Falso. Tiene veinticinco años.]]',
  },
  {
    question: '[[What is the main topic of this audio?|¿Cuál es el tema principal del audio?]]',
    options: [
      '[[A class at university.|Una clase en la universidad.]]',
      '[[A person introducing himself.|Una persona que se presenta.]]',
      '[[A trip to Barcelona.|Un viaje a Barcelona.]]',
      '[[A job interview.|Una entrevista de trabajo.]]',
    ],
    correctAnswer: 1,
    explanation:
      '[[Carlos introduces himself: name, age, city, studies.|Carlos se presenta: nombre, edad, ciudad, estudios.]]',
  },
  {
    question: '[[Who is speaking in the audio?|¿Quién habla en el audio?]]',
    options: [
      '[[A teacher.|Un profesor.]]',
      '[[Carlos himself.|Carlos mismo.]]',
      '[[A friend of Carlos.|Un amigo de Carlos.]]',
      '[[A student from another country.|Un estudiante de otro país.]]',
    ],
    correctAnswer: 1,
    explanation:
      '[[Carlos speaks in the first person (*My name is…*, *I am…*).|Carlos habla en primera persona.]]',
  },
  {
    question: '[[Does Carlos say he is happy?|¿Dice Carlos que está feliz?]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True. He says *I am happy to be here*.|Verdadero. Dice *I am happy to be here*.]]',
  },
];

export const UNIT_1_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a1-u1-l4-listening-${i + 1}`,
  type: 'listening',
  level: 'A1',
  topic: 'Personal Info',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
