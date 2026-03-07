/**
 * Unidad 6 — Lección 3: Comprensión lectora
 * 15 ejercicios (1 pregunta cada uno): 8 MC, 4 V/F, 3 síntesis. Texto sobre Carlos y su familia.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión lectora';
const TOPIC = 'Family & Possessives';

const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Carlos|Carlos]]. [[I|Yo]] [[have|tengo]] [[a|una]] [[big|gran]] [[family|familia]]. [[My|Mi]] [[mother|madre]] [[is|es]] [[Linda|Linda]]. [[She|Ella]] [[works|trabaja]] [[in|en]] [[a|un]] [[school|colegio]]. [[My|Mi]] [[father|padre]] [[is|es]] [[Juan|Juan]]. [[He|Él]] [[is|es]] [[a|un]] [[doctor|médico]]. [[My|Mi]] [[sister|hermana]] [[Ana|Ana]] [[is|es]] [[twenty|veinte]] [[years|años]] [[old|de edad]]. [[She|Ella]] [[studies|estudia]] [[at|en]] [[the|la]] [[university|universidad]]. [[My|Mi]] [[brother|hermano]] [[Pablo|Pablo]] [[is|es]] [[fifteen|quince]]. [[He|Él]] [[plays|juega]] [[football|fútbol]]. [[Our|Nuestra]] [[grandmother|abuela]] [[lives|vive]] [[in|en]] [[Valencia|Valencia]]. [[Our|Nuestro]] [[grandfather|abuelo]] [[is|está]] [[in|en]] [[Madrid|Madrid]]. [[We|Nosotros]] [[love|amamos]] [[our|nuestra]] [[family|familia]].`;

const INSTRUCTIONS = 'Lee el texto. Después contesta cada pregunta.';

export const UNIT_6_LESSON_3_READING: Exercise[] = [
  {
    id: 'a1-u6-l3-reading-1',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Cuál]] [[is|es]] [[his|su]] [[name|nombre]]?',
        options: ['[[Carlos|Carlos]]', '[[Juan|Juan]]', '[[Pablo|Pablo]]', '[[Ana|Ana]]'],
        correctAnswer: 0,
        explanation: 'El texto dice: My name is Carlos.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-2',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Cuál]] [[is|es]] [[his|su]] [[mother\'s|de su madre]] [[name|nombre]]?',
        options: ['[[Ana|Ana]]', '[[Linda|Linda]]', '[[Maria|María]]', '[[Elena|Elena]]'],
        correctAnswer: 1,
        explanation: 'My mother is Linda.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-3',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[does|hace]] [[his|su]] [[mother|madre]] [[do|hacer]]?',
        options: ['[[She|Ella]] [[is|es]] [[a|una]] [[doctor|médica]].', '[[She|Ella]] [[works|trabaja]] [[in|en]] [[a|un]] [[school|colegio]].', '[[She|Ella]] [[studies|estudia]].', '[[She|Ella]] [[plays|juega]] [[football|fútbol]].'],
        correctAnswer: 1,
        explanation: 'She works in a school.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-4',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[is|es]] [[his|su]] [[father|padre]]?',
        options: ['[[teacher|profesor]]', '[[doctor|médico]]', '[[student|estudiante]]', '[[driver|conductor]]'],
        correctAnswer: 1,
        explanation: 'My father is Juan. He is a doctor.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-5',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Ana|Ana]]?',
        options: ['[[fifteen|quince]]', '[[twenty|veinte]]', '[[twenty-five|veinticinco]]', '[[thirty|treinta]]'],
        correctAnswer: 1,
        explanation: 'My sister Ana is twenty years old.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-6',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[does|hace]] [[Pablo|Pablo]] [[play|jugar]]?',
        options: ['[[basketball|baloncesto]]', '[[football|fútbol]]', '[[tennis|tenis]]', '[[volleyball|voleibol]]'],
        correctAnswer: 1,
        explanation: 'My brother Pablo plays football.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-7',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Where|Dónde]] [[does|vive]] [[his|su]] [[grandmother|abuela]] [[live|vivir]]?',
        options: ['[[Madrid|Madrid]]', '[[Barcelona|Barcelona]]', '[[Valencia|Valencia]]', '[[Seville|Sevilla]]'],
        correctAnswer: 2,
        explanation: 'Our grandmother lives in Valencia.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-8',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Where|Dónde]] [[is|está]] [[his|su]] [[grandfather|abuelo]]?',
        options: ['[[Valencia|Valencia]]', '[[Barcelona|Barcelona]]', '[[Madrid|Madrid]]', '[[Seville|Sevilla]]'],
        correctAnswer: 2,
        explanation: 'Our grandfather is in Madrid.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-9',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Carlos|Carlos]] [[has|tiene]] [[a|una]] [[small|pequeña]] [[family|familia]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'False',
        explanation: 'Falso. Él dice: I have a big family.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-10',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[His|Su]] [[father|padre]] [[is|es]] [[a|un]] [[doctor|médico]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'True',
        explanation: 'Verdadero. He is a doctor.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-11',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Ana|Ana]] [[is|es]] [[his|su]] [[brother|hermano]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'False',
        explanation: 'Falso. Ana is his sister.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-12',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Their|Su]] [[grandmother|abuela]] [[lives|vive]] [[in|en]] [[Valencia|Valencia]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'True',
        explanation: 'Verdadero. Our grandmother lives in Valencia.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-13',
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
        options: ['[[A|Una]] [[school|escuela]].', '[[Carlos|Carlos]] and [[his|su]] [[family|familia]].', '[[A|Un]] [[doctor|médico]].', '[[Football|Fútbol]].'],
        correctAnswer: 1,
        explanation: 'El texto habla de Carlos y su familia.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-14',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Which|Qué]] [[possessives|posesivos]] [[are|aparecen]] [[in|en]] [[the|el]] [[text|texto]]?',
        options: ['[[Only|Solo]] "[[my|mi]]".', '[[My|Mi]], [[our|nuestro]], [[his|su]].', '[[Your|Tu]] and [[their|su]].', '[[No|Ningún]] [[possessives|posesivos]].'],
        correctAnswer: 1,
        explanation: 'Aparecen my, our y his.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u6-l3-reading-15',
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
        options: ['[[A|Un]] [[doctor|médico]] [[in|en]] [[Madrid|Madrid]].', '[[Carlos|Carlos]] [[introduces|presenta]] [[his|su]] [[family|familia]].', '[[A|Una]] [[family|familia]] [[in|en]] [[Valencia|Valencia]].', '[[School|Escuela]] and [[university|universidad]].'],
        correctAnswer: 1,
        explanation: 'Carlos presenta a su familia: madre, padre, hermana, hermano, abuelos.',
      }],
    },
    topicName: 'Reading',
  },
];
