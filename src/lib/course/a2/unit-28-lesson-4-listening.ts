/**
 * Unidad 28 — Lección 4: Comprensión auditiva (Have to / Don't have to)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[At|En]] [[school|la escuela]], [[students|los estudiantes]] [[have to|tienen que]] [[wear|llevar]] [[uniform|uniforme]]. [[They|Ellos]] [[have to|tienen que]] [[arrive|llegar]] [[on time|a tiempo]]. [[They|Ellos]] [[don\'t have to|no tienen que]] [[bring|traer]] [[lunch|comida]] [[because|porque]] [[the|la]] [[school|escuela]] [[has|tiene]] [[a|una]] [[canteen|cafetería]]. [[Students|Los estudiantes]] [[have to|tienen que]] [[do|hacer]] [[homework|deberes]] [[every day|cada día]]. [[They|Ellos]] [[don\'t have to|no tienen que]] [[pay|pagar]] [[for|por]] [[books|libros]] — [[the|la]] [[school|escuela]] [[gives|da]] [[them|los]] [[free|gratis]]. [[Teachers|Los profesores]] [[have to|tienen que]] [[correct|corregir]] [[exams|exámenes]] [[and|y]] [[help|ayudar]] [[students|estudiantes]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[do|tienen]] [[students|los estudiantes]] [[have to|que]] [[wear|llevar]] [[at|en]] [[school|la escuela]]?',
    options: ['[[casual clothes|ropa casual]]', '[[a uniform|un uniforme]]', '[[sportswear|ropa deportiva]]', '[[anything|cualquier cosa]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[students have to wear uniform|los estudiantes tienen que llevar uniforme]]".',
  },
  {
    question: '[[What|Qué]] [[do|tienen]] [[students|los estudiantes]] [[have to|que]] [[do|hacer]] [[about|con]] [[arrival|llegada]]?',
    options: ['[[arrive late|llegar tarde]]', '[[arrive on time|llegar a tiempo]]', '[[arrive early|llegar temprano]]', '[[stay home|quedarse en casa]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[they have to arrive on time|tienen que llegar a tiempo]]".',
  },
  {
    question: '[[Do|Tienen]] [[students|los estudiantes]] [[have to|que]] [[bring|traer]] [[lunch|comida]]?',
    options: ['[[Yes|Sí]]', '[[No|No]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[they don\'t have to bring lunch because the school has a canteen|no tienen que traer comida porque la escuela tiene cafetería]]".',
  },
  {
    question: '[[What|Qué]] [[do|tienen]] [[students|los estudiantes]] [[have to|que]] [[do|hacer]] [[every day|cada día]]?',
    options: ['[[clean the classroom|limpiar el aula]]', '[[do homework|hacer deberes]]', '[[teach|enseñar]]', '[[cook|cocinar]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[students have to do homework every day|los estudiantes tienen que hacer deberes cada día]]".',
  },
  {
    question: '[[Do|Tienen]] [[students|los estudiantes]] [[have to|que]] [[pay|pagar]] [[for|por]] [[books|libros]]?',
    options: ['[[Yes|Sí]]', '[[No|No]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[they don\'t have to pay for books — the school gives them free|no tienen que pagar por libros — la escuela los da gratis]]".',
  },
  {
    question: '[[What|Qué]] [[do|tienen]] [[teachers|los profesores]] [[have to|que]] [[do|hacer]]?',
    options: ['[[wear uniform|llevar uniforme]]', '[[correct exams and help students|corregir exámenes y ayudar estudiantes]]', '[[bring lunch|traer comida]]', '[[pay for books|pagar por libros]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[teachers have to correct exams and help students|los profesores tienen que corregir exámenes y ayudar estudiantes]]".',
  },
  {
    question: '[[The|El]] [[audio|audio]] [[talks|habla]] [[about|sobre]] [[obligations|obligaciones]] [[at|en]] [[school|la escuela]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[Have to|Have to]] [[and|y]] [[don\'t have to|don\'t have to]] [[at|en]] [[school|la escuela]].',
  },
  {
    question: '[[Students|Los estudiantes]] [[have to|tienen que]] [[pay|pagar]] [[for|por]] [[their|sus]] [[books|libros]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[They|Ellos]] [[don\'t have to|no tienen que]] [[pay|pagar]] — [[school|la escuela]] [[gives|da]] [[them|los]] [[free|gratis]].',
  },
  {
    question: '[[Students|Los estudiantes]] [[have to|tienen que]] [[arrive|llegar]] [[on time|a tiempo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[They have to arrive on time|Tienen que llegar a tiempo]]".',
  },
  {
    question: '[[The|La]] [[school|escuela]] [[has|tiene]] [[a|una]] [[canteen|cafetería]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[That|Por eso]] [[is|es]] [[why|por qué]] [[students|estudiantes]] [[don\'t have to|no tienen que]] [[bring|traer]] [[lunch|comida]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[Past|Eventos]] [[events|pasados]]', '[[Obligations|Obligaciones]] [[and|y]] [[no obligation|sin obligación]] [[at|en]] [[school|la escuela]]', '[[Future|Planes]] [[plans|futuros]]', '[[Weather|Tiempo]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[talks|habla]] [[about|sobre]] [[have to|have to]] [[and|y]] [[don\'t have to|don\'t have to]] [[at|en]] [[school|la escuela]].',
  },
  {
    question: '[[Don\'t have to|No tener que]] [[means|significa]] [[prohibited|prohibido]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[Don\'t have to|Don\'t have to]] = [[no|no]] [[obligation|obligación]], [[optional|opcional]]. [[Mustn\'t|Mustn\'t]] = [[prohibited|prohibido]].',
  },
  {
    question: '[[How many|Cuántas]] [[obligations|obligaciones]] [[does|menciona]] [[the|el]] [[speaker|hablante]] [[mention|mencionar]] [[for|para]] [[students|estudiantes]]?',
    options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
    correctAnswer: 2,
    explanation: '[[Wear uniform|llevar uniforme]], [[arrive on time|llegar a tiempo]], [[do homework|hacer deberes]] = [[3|tres]] [[obligations|obligaciones]].',
  },
  {
    question: '[[Why|Por qué]] [[don\'t|no]] [[students|estudiantes]] [[have to|tienen que]] [[bring|traer]] [[lunch|comida]]?',
    options: ['[[they eat at home|comen en casa]]', '[[the school has a canteen|la escuela tiene cafetería]]', '[[lunch is expensive|la comida es cara]]', '[[they don\'t eat|no comen]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[because the school has a canteen|porque la escuela tiene cafetería]]".',
  },
  {
    question: '[[What|Qué]] [[structure|estructura]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] [[obligations|obligaciones]]?',
    options: ['[[must|must]]', '[[have to|have to]]', '[[should|should]]', '[[can|can]]'],
    correctAnswer: 1,
    explanation: '[[Have to|Have to]] [[and|y]] [[don\'t have to|don\'t have to]] [[for|para]] [[obligations|obligaciones]].',
  },
];

export const UNIT_28_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u28-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: "Have to / Don't have to",
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
