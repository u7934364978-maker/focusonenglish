/**
 * Unidad 9 — Lección 3: Comprensión lectora
 * 15 ejercicios (1 pregunta cada uno): 8 MC, 4 V/F, 3 síntesis. Texto sobre profesiones y trabajo.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión lectora';
const TOPIC = 'Jobs & Occupations';

const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Laura|Laura]]. [[I|Yo]] [[am|soy]] [[a|una]] [[teacher|profesora]]. [[I|Yo]] [[work|trabajo]] [[in|en]] [[a|una]] [[school|escuela]] [[in|en]] [[Madrid|Madrid]]. [[My|Mi]] [[brother|hermano]] [[is|es]] [[a|un]] [[engineer|ingeniero]]. [[He|Él]] [[works|trabaja]] [[in|en]] [[an|una]] [[office|oficina]]. [[My|Mi]] [[sister|hermana]] [[is|es]] [[a|una]] [[nurse|enfermera]]. [[She|Ella]] [[works|trabaja]] [[in|en]] [[a|un]] [[hospital|hospital]]. [[My|Mi]] [[father|padre]] [[is|es]] [[a|un]] [[doctor|médico]]. [[He|Él]] [[works|trabaja]] [[in|en]] [[the|el]] [[same|mismo]] [[hospital|hospital]] [[as|que]] [[my|mi]] [[sister|hermana]]. [[We|Nosotros]] [[are|somos]] [[a|una]] [[family|familia]] [[of|de]] [[workers|trabajadores]].`;

const INSTRUCTIONS = 'Lee el texto. Después contesta cada pregunta.';

export const UNIT_9_LESSON_3_READING: Exercise[] = [
  {
    id: 'a1-u9-l3-reading-1',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[is|es]] [[Laura\'s|de Laura]] [[job|trabajo]]?',
        options: ['[[Teacher|Profesora]]', '[[Engineer|Ingeniera]]', '[[Nurse|Enfermera]]'],
        correctAnswer: 0,
        explanation: 'I am a teacher.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-2',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Where|Dónde]] [[does|trabaja]] [[Laura|Laura]] [[work|trabajar]]?',
        options: ['[[In a hospital|En un hospital]]', '[[In a school|En una escuela]]', '[[In an office|En una oficina]]'],
        correctAnswer: 1,
        explanation: 'I work in a school in Madrid.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-3',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[is|es]] [[Laura\'s|de Laura]] [[brother\'s|hermano]] [[job|trabajo]]?',
        options: ['[[Teacher|Profesor]]', '[[Engineer|Ingeniero]]', '[[Doctor|Médico]]'],
        correctAnswer: 1,
        explanation: 'My brother is an engineer.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-4',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Where|Dónde]] [[does|trabaja]] [[the|la]] [[brother|hermano]] [[work|trabajar]]?',
        options: ['[[In a school|En una escuela]]', '[[In an office|En una oficina]]', '[[In a hospital|En un hospital]]'],
        correctAnswer: 1,
        explanation: 'He works in an office.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-5',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[is|es]] [[Laura\'s|de Laura]] [[sister\'s|hermana]] [[job|trabajo]]?',
        options: ['[[Nurse|Enfermera]]', '[[Doctor|Médica]]', '[[Teacher|Profesora]]'],
        correctAnswer: 0,
        explanation: 'My sister is a nurse.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-6',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Laura\'s|La]] [[father|padre]] [[is|es]] [[a|un]] [[doctor|médico]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'True',
        explanation: 'My father is a doctor.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-7',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[The|La]] [[sister|hermana]] [[works|trabaja]] [[in|en]] [[a|una]] [[school|escuela]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'False',
        explanation: 'She works in a hospital.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-8',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[The|El]] [[father|padre]] [[and|y]] [[the|la]] [[sister|hermana]] [[work|trabajan]] [[in|en]] [[the|el]] [[same|mismo]] [[hospital|hospital]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'True',
        explanation: 'He works in the same hospital as my sister.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-9',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Laura|Laura]] [[works|trabaja]] [[in|en]] [[Barcelona|Barcelona]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'False',
        explanation: 'I work in a school in Madrid.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-10',
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
        options: ['[[A|Una]] [[family|familia]] [[and|y]] [[their|sus]] [[jobs|trabajos]].', '[[A|Una]] [[school|escuela]] [[in|en]] [[Madrid|Madrid]].', '[[Hospitals|Hospitales]].'],
        correctAnswer: 0,
        explanation: 'El texto habla de Laura y su familia y sus profesiones.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-11',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Which|Qué]] [[professions|profesiones]] [[are|se]] [[mentioned|mencionan]] [[in|en]] [[the|el]] [[text|texto]]?',
        options: ['[[Only|Solo]] [[teacher|profesor]].', '[[Teacher|Profesor]], [[engineer|ingeniero]], [[nurse|enfermera]], [[doctor|médico]].', '[[Waiter|Camarero]] [[and|y]] [[chef|cocinero]].'],
        correctAnswer: 1,
        explanation: 'Teacher, engineer, nurse, doctor.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-12',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[does|presenta]] [[Laura|Laura]] [[introduce|presenta]] [[in|en]] [[the|el]] [[text|texto]]?',
        options: ['[[Her family and their jobs.|Su familia y sus trabajos.]]', '[[Schools.|Colegios.]]', '[[A hospital.|Un hospital.]]'],
        correctAnswer: 0,
        explanation: 'Laura presenta a su familia y sus profesiones.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-13',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Where|Dónde]] [[does|trabaja]] [[Laura\'s|la]] [[sister|hermana]] [[work|trabajar]]?',
        options: ['[[In a school|En una escuela]]', '[[In a hospital|En un hospital]]', '[[In an office|En una oficina]]'],
        correctAnswer: 1,
        explanation: 'She works in a hospital.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-14',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[does|significa]] "[[a family of workers|una familia de trabajadores]]" [[mean|significar]] [[in|en]] [[the|el]] [[text|texto]]?',
        options: ['[[Everyone|Todos]] [[has|tienen]] [[a|un]] [[job|trabajo]].', '[[No one|Nadie]] [[works|trabaja]].', '[[Only|Solo]] [[one|uno]] [[person|persona]] [[works|trabaja]].'],
        correctAnswer: 0,
        explanation: 'Todos en la familia trabajan.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u9-l3-reading-15',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[How|Cuántas]] [[many|personas]] [[people|personas]] [[in|en]] [[Laura\'s|la]] [[family|familia]] [[have|tienen]] [[a|un]] [[job|trabajo]] [[mentioned|mencionado]]?',
        options: ['[[Two|Dos]]', '[[Three|Tres]]', '[[Four|Cuatro]]'],
        correctAnswer: 2,
        explanation: 'Laura (teacher), brother (engineer), sister (nurse), father (doctor) = 4.',
      }],
    },
    topicName: 'Reading',
  },
];
