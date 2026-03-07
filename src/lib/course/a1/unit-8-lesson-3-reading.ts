/**
 * Unidad 8 — Lección 3: Comprensión lectora
 * 15 ejercicios (1 pregunta cada uno): 8 MC, 4 V/F, 3 síntesis. Texto sobre compras y precios.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión lectora';
const TOPIC = 'Numbers 20–100 (Prices & Ages)';

const READING_TRANSCRIPT = `[[I|Yo]] [[am|estoy]] [[at|en]] [[the|el]] [[supermarket|supermercado]]. [[I|Yo]] [[need|necesito]] [[twenty|veinte]] [[apples|manzanas]] [[and|y]] [[ten|diez]] [[oranges|naranjas]]. [[The|Las]] [[apples|manzanas]] [[are|cuestan]] [[five|cinco]] [[euros|euros]]. [[The|Las]] [[oranges|naranjas]] [[are|cuestan]] [[three|tres]] [[euros|euros]]. [[I|Yo]] [[also|también]] [[need|necesito]] [[a|una]] [[bottle|botella]] [[of|de]] [[milk|leche]]. [[The|La]] [[milk|leche]] [[is|cuesta]] [[one|un]] [[euro|euro]] [[and|y]] [[fifty|cincuenta]] [[cents|céntimos]]. [[The|El]] [[total|total]] [[is|es]] [[nine|nueve]] [[euros|euros]] [[and|y]] [[fifty|cincuenta]] [[cents|céntimos]]. [[I|Yo]] [[have|tengo]] [[twenty|veinte]] [[euros|euros]]. [[I|Yo]] [[am|estoy]] [[happy|feliz]].`;

const INSTRUCTIONS = 'Lee el texto. Después contesta cada pregunta.';

export const UNIT_8_LESSON_3_READING: Exercise[] = [
  {
    id: 'a1-u8-l3-reading-1',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[How|Cuántas]] [[many|manzanas]] [[apples|manzanas]] [[does|necesita]] [[the|la]] [[person|persona]] [[need|necesitar]]?',
        options: ['[[ten|diez]]', '[[twenty|veinte]]', '[[five|cinco]]'],
        correctAnswer: 1,
        explanation: 'I need twenty apples.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-2',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[How|Cuánto]] [[much|cuestan]] [[are|son]] [[the|las]] [[oranges|naranjas]]?',
        options: ['[[five euros|cinco euros]]', '[[three euros|tres euros]]', '[[one euro|un euro]]'],
        correctAnswer: 1,
        explanation: 'The oranges are three euros.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-3',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[How|Cuánto]] [[much|cuesta]] [[is|es]] [[the|la]] [[milk|leche]]?',
        options: ['[[1.00€|1.00€]]', '[[1.50€|1.50€]]', '[[2.00€|2.00€]]'],
        correctAnswer: 1,
        explanation: 'The milk is one euro and fifty cents.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-4',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Cuál]] [[is|es]] [[the|el]] [[total|total]]?',
        options: ['[[nine euros|nueve euros]]', '[[nine euros fifty|nueve con cincuenta]]', '[[twenty euros|veinte euros]]'],
        correctAnswer: 1,
        explanation: 'The total is nine euros and fifty cents.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-5',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[How|Cuánto]] [[much|dinero]] [[money|dinero]] [[does|tiene]] [[the|la]] [[person|persona]] [[have|tener]]?',
        options: ['[[ten euros|diez euros]]', '[[twenty euros|veinte euros]]', '[[nine fifty|nueve cincuenta]]'],
        correctAnswer: 1,
        explanation: 'I have twenty euros.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-6',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[The|Las]] [[apples|manzanas]] [[cost|cuestan]] [[five|cinco]] [[euros|euros]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'True',
        explanation: 'Verdadero. The apples are five euros.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-7',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[The|La]] [[person|persona]] [[is|está]] [[at|en]] [[the|el]] [[restaurant|restaurante]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'False',
        explanation: 'Falso. I am at the supermarket.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-8',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[The|El]] [[total|total]] [[is|es]] [[more|más]] [[than|que]] [[ten|diez]] [[euros|euros]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'False',
        explanation: 'Falso. The total is 9.50€.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-9',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[The|La]] [[person|persona]] [[has|tiene]] [[enough|suficiente]] [[money|dinero]] [[to|para]] [[pay|pagar]].',
        options: ['[[True|Verdadero]]', '[[False|Falso]]'],
        correctAnswer: 'True',
        explanation: 'Verdadero. Tiene 20€ y el total es 9.50€.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-10',
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
        options: ['[[A|Un]] [[restaurant|restaurante]].', '[[Shopping|Compras]] [[at|en]] [[the|el]] [[supermarket|supermercado]] [[with|con]] [[prices|precios]].', '[[A|Una]] [[family|familia]].'],
        correctAnswer: 1,
        explanation: 'El texto habla de compras en el supermercado y precios.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-11',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[Which|Qué]] [[numbers|números]] [[appear|aparecen]] [[in|en]] [[the|el]] [[text|texto]]?',
        options: ['[[Only|Solo]] [[five|cinco]] [[and|y]] [[three|tres]].', '[[Twenty|Veinte]], [[ten|diez]], [[five|cinco]], [[three|tres]], [[one|uno]], [[fifty|cincuenta]], [[nine|nueve]], [[twenty|veinte]].', '[[One hundred|Cien]].'],
        correctAnswer: 1,
        explanation: 'Aparecen números de precios y cantidades.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-12',
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
        options: ['[[Someone|Alguien]] [[lists|lista]] [[what|lo que]] [[they|necesita]] [[need|necesita]] [[and|y]] [[the|los]] [[prices|precios]]; [[the|el]] [[total|total]] [[is|es]] [[9.50€|9.50€]] [[and|y]] [[they|tiene]] [[have|tiene]] [[20€|20€]].', '[[A|Una]] [[family|familia]] [[eats|come]] [[dinner|cena]].', '[[Someone|Alguien]] [[is|está]] [[at|en]] [[school|el colegio]].'],
        correctAnswer: 0,
        explanation: 'Lista de la compra, precios y total.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-13',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[How|Cuántas]] [[many|naranjas]] [[oranges|naranjas]] [[does|necesita]] [[the|la]] [[person|persona]] [[need|necesitar]]?',
        options: ['[[twenty|veinte]]', '[[ten|diez]]', '[[five|cinco]]'],
        correctAnswer: 1,
        explanation: 'I need ten oranges.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-14',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[What|Qué]] [[does|necesita]] [[the|la]] [[person|persona]] [[need|necesitar]] [[besides|además de]] [[fruit|fruta]]?',
        options: ['[[A|Una]] [[bottle|botella]] [[of|de]] [[milk|leche]].', '[[Bread|Pan]].', '[[Water|Agua]].'],
        correctAnswer: 0,
        explanation: 'I also need a bottle of milk.',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u8-l3-reading-15',
    type: 'reading',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [{
        question: '[[How|Cómo]] [[does|se]] [[the|la]] [[person|persona]] [[feel|siente]] [[at|al]] [[the|el]] [[end|final]]?',
        options: ['[[Sad|Triste]].', '[[Happy|Feliz]].', '[[Tired|Cansada]].'],
        correctAnswer: 1,
        explanation: 'I am happy.',
      }],
    },
    topicName: 'Reading',
  },
];
