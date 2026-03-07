/**
 * Unidad 7 — Lección 3: Comprensión lectora
 * 15 ejercicios (1 pregunta cada uno): 8 MC, 4 V/F, 3 síntesis. Texto sobre descripción física de una amiga.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión lectora';
const TOPIC = 'Colors & Physical Descriptions';

const READING_TRANSCRIPT = `[[Can|Puedes]] [[you|tú]] [[describe|describir]] [[your|tu]] [[best|mejor]] [[friend|amigo]]? [[Sure|Claro]]! [[She|Ella]] [[is|es]] [[tall|alta]] [[with|con]] [[long|largo]] [[brown|castaño]] [[hair|pelo]]. [[What|De qué]] [[color|color]] [[are|son]] [[her|sus]] [[eyes|ojos]]? [[Her|Sus]] [[eyes|ojos]] [[are|son]] [[green|verdes]]. [[She|Ella]] [[is|es]] [[very|muy]] [[beautiful|hermosa]]. [[How|Cuántos]] [[old|años]] [[is|tiene]] [[she|ella]]? [[She|Ella]] [[is|es]] [[young|joven]] — [[only|solo]] [[twenty|veinte]] [[years|años]] [[old|de edad]].`;

const INSTRUCTIONS = 'Lee el texto. Después contesta cada pregunta.';

export const UNIT_7_LESSON_3_READING: Exercise[] = [
  {
    id: 'a1-u7-l3-reading-1',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Cuál]] [[is|es]] [[the|la]] [[friend\'s|de la amiga]] [[height|estatura]]?',
        options: ['[[short|baja]]', '[[medium|mediana]]', '[[tall|alta]]'],
        correctAnswer: 2,
        explanation: 'She is tall.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-2',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[color|color]] [[is|es]] [[the|el]] [[friend\'s|de la amiga]] [[hair|pelo]]?',
        options: ['[[black|negro]]', '[[brown|castaño]]', '[[blonde|rubio]]'],
        correctAnswer: 1,
        explanation: 'Long brown hair.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-3',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[color|color]] [[are|son]] [[the|los]] [[friend\'s|de la amiga]] [[eyes|ojos]]?',
        options: ['[[blue|azules]]', '[[brown|marrones]]', '[[green|verdes]]'],
        correctAnswer: 2,
        explanation: 'Her eyes are green.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-4',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[the|la]] [[friend|amiga]]?',
        options: ['[[thirty|treinta]]', '[[twenty|veinte]]', '[[eighteen|dieciocho]]'],
        correctAnswer: 1,
        explanation: 'She is only twenty years old.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-5',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Is|Es]] [[the|el]] [[hair|pelo]] [[long|largo]] [[or|o]] [[short|corto]]?',
        options: ['[[short|corto]]', '[[long|largo]]', '[[medium|mediano]]'],
        correctAnswer: 1,
        explanation: 'She has long brown hair.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-6',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[The|La]] [[person|persona]] [[described|descrita]] [[is|es]] [[a|una]] [[man|hombre]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'False',
        explanation: 'Falso. Se usa "she" — es una mujer.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-7',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[She|Ella]] [[has|tiene]] [[green|verdes]] [[eyes|ojos]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'True',
        explanation: 'Verdadero. Her eyes are green.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-8',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[She|Ella]] [[is|es]] [[forty|cuarenta]] [[years|años]] [[old|de edad]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'False',
        explanation: 'Falso. She is twenty years old.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-9',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[The|El]] [[text|texto]] [[describes|describe]] [[a|una]] [[person|persona]] [[with|con]] [[physical|físicos]] [[details|detalles]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'True',
        explanation: 'Verdadero. Altura, pelo, ojos, edad.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-10',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[text|texto]]?',
        options: ['[[A|Una]] [[school|escuela]].', '[[A|Una]] [[description|descripción]] [[of|de]] [[a|una]] [[friend|amiga]].', '[[A|Un]] [[doctor|médico]].', '[[Football|Fútbol]].'],
        correctAnswer: 1,
        explanation: 'El texto describe a la mejor amiga.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-11',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Which|Qué]] [[words|palabras]] [[describe|describen]] [[hair|pelo]] [[in|en]] [[the|el]] [[text|texto]]?',
        options: ['[[tall|alto]] [[and|y]] [[short|bajo]]', '[[long|largo]] [[and|y]] [[brown|castaño]]', '[[green|verde]] [[and|y]] [[blue|azul]]'],
        correctAnswer: 1,
        explanation: 'Long brown hair.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-12',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Best|Mejor]] [[summary|resumen]] [[of|del]] [[text|texto]]?',
        options: ['[[A|Una]] [[doctor|médica]] [[in|en]] [[Madrid|Madrid]].', '[[Someone|Alguien]] [[describes|describe]] [[a|una]] [[tall|alta]] [[friend|amiga]] [[with|con]] [[brown|castaño]] [[hair|pelo]] [[and|y]] [[green|verdes]] [[eyes|ojos]].', '[[A|Una]] [[family|familia]] [[in|en]] [[Valencia|Valencia]].'],
        correctAnswer: 1,
        explanation: 'Descripción física: alta, pelo castaño largo, ojos verdes, joven.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-13',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[verb|verbo]] [[do|se]] [[we|usa]] [[use|usamos]] [[for|para]] [[hair|pelo]] [[and|y]] [[eyes|ojos]]?',
        options: ['[[is|es]]', '[[have|tener]]', '[[go|ir]]'],
        correctAnswer: 1,
        explanation: 'She has long hair. Her eyes are green (are para descripción).',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-14',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[The|La]] [[friend|amiga]] [[is|es]] [[described|descrita]] [[as|como]] ____.',
        options: ['[[old|mayor]]', '[[young|joven]]', '[[short|baja]]'],
        correctAnswer: 1,
        explanation: 'She is young — only twenty years old.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u7-l3-reading-15',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Which|Cuál]] [[adjective|adjetivo]] [[is|es]] [[NOT|NO]] [[in|en]] [[the|el]] [[text|texto]]?',
        options: ['[[tall|alto]]', '[[beautiful|hermosa]]', '[[short|bajo]]'],
        correctAnswer: 2,
        explanation: 'Short no aparece. Sí: tall, long, brown, green, beautiful, young.',
      }],
    },
    topicName: 'Reading',
  },
];
