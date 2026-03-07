import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión lectora';
const READING_TRANSCRIPT = `[[María|María]] [[wakes|se despierta]] [[up|—]] [[every|todos]] [[day|los días]] [[at|a]] [[seven|las siete]]. [[She|Ella]] [[gets|se levanta]] [[up|—]] [[and|y]] [[goes|va]] [[to|al]] [[the|—]] [[bathroom|baño]]. [[Then|Luego]], [[she|ella]] [[eats|desayuna]] [[breakfast|el desayuno]] [[in|en]] [[the|—]] [[kitchen|la cocina]]. [[She|Ella]] [[drinks|bebe]] [[a|un]] [[cup|taza]] [[of|de]] [[coffee|café]] [[every|todas las]] [[morning|mañanas]].

[[After|Después]] [[breakfast|del desayuno]], [[María|María]] [[goes|va]] [[to|a]] [[work|trabajar]]. [[She|Ella]] [[works|trabaja]] [[in|en]] [[an|una]] [[office|oficina]] [[in|en]] [[the|el]] [[city|ciudad]]. [[She|Ella]] [[studies|estudia]] [[English|inglés]] [[at|en]] [[lunchtime|la hora del almuerzo]]. [[She|Ella]] [[eats|come]] [[lunch|el almuerzo]] [[with|con]] [[her|sus]] [[colleagues|colegas]].

[[In|Por]] [[the|la]] [[evening|tarde]], [[María|María]] [[comes|vuelve]] [[home|a casa]] [[at|a]] [[six|las seis]]. [[She|Ella]] [[plays|juega]] [[with|con]] [[her|su]] [[dog|perro]] [[and|y]] [[then|luego]] [[she|ella]] [[eats|cena]] [[dinner|la cena]]. [[She|Ella]] [[goes|se va]] [[to|a]] [[sleep|dormir]] [[at|a]] [[ten|las diez]] [[o'clock|en punto]]. [[María|María]] [[loves|adora]] [[her|su]] [[daily|rutina]] [[routine|diaria]].`;

const INST_MC = 'Lee el texto y elige la respuesta correcta.';
const INST_TF = 'Lee el texto. Indica si la afirmación es verdadera o falsa.';
const INST_SYN = 'Lee el texto. Elige la mejor respuesta.';

export const UNIT_5_LESSON_3_READING: Exercise[] = [
  // ─── 1–8: Elección múltiple ────────────────────────────────────────────────
  {
    id: 'a1-u5-l3-reading-1',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What time does María wake up?|¿A qué hora se despierta María?]]',
          options: [
            '[[At six o\'clock|A las seis]]',
            '[[At seven o\'clock|A las siete]]',
            '[[At eight o\'clock|A las ocho]]',
            '[[At nine o\'clock|A las nueve]]',
          ],
          correctAnswer: 1,
          explanation: 'El texto dice "wakes up every day at seven".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u5-l3-reading-2',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What does María drink every morning?|¿Qué bebe María cada mañana?]]',
          options: [
            '[[tea|té]]',
            '[[juice|zumo]]',
            '[[water|agua]]',
            '[[coffee|café]]',
          ],
          correctAnswer: 3,
          explanation: 'El texto dice "she drinks a cup of coffee every morning".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u5-l3-reading-3',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[Where does María work?|¿Dónde trabaja María?]]',
          options: [
            '[[In a hospital|En un hospital]]',
            '[[In a school|En una escuela]]',
            '[[In an office in the city|En una oficina en la ciudad]]',
            '[[At home|En casa]]',
          ],
          correctAnswer: 2,
          explanation: 'El texto dice "she works in an office in the city".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u5-l3-reading-4',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[When does María study English?|¿Cuándo estudia inglés María?]]',
          options: [
            '[[In the morning|Por la mañana]]',
            '[[At lunchtime|En la hora del almuerzo]]',
            '[[In the evening|Por la tarde]]',
            '[[At night|Por la noche]]',
          ],
          correctAnswer: 1,
          explanation: 'El texto dice "she studies English at lunchtime".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u5-l3-reading-5',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[Who does María eat lunch with?|¿Con quién come María el almuerzo?]]',
          options: [
            '[[With her family|Con su familia]]',
            '[[With her friends|Con sus amigos]]',
            '[[Alone|Sola]]',
            '[[With her colleagues|Con sus colegas]]',
          ],
          correctAnswer: 3,
          explanation: 'El texto dice "she eats lunch with her colleagues".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u5-l3-reading-6',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What time does María come home?|¿A qué hora vuelve María a casa?]]',
          options: [
            '[[At four|A las cuatro]]',
            '[[At five|A las cinco]]',
            '[[At six|A las seis]]',
            '[[At seven|A las siete]]',
          ],
          correctAnswer: 2,
          explanation: 'El texto dice "comes home at six".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u5-l3-reading-7',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What does María do in the evening?|¿Qué hace María por la tarde?]]',
          options: [
            '[[She goes to the gym|Va al gimnasio]]',
            '[[She watches TV|Ve la televisión]]',
            '[[She plays with her dog|Juega con su perro]]',
            '[[She reads a book|Lee un libro]]',
          ],
          correctAnswer: 2,
          explanation: 'El texto dice "she plays with her dog".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u5-l3-reading-8',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What time does María go to sleep?|¿A qué hora se va a dormir María?]]',
          options: [
            '[[At nine|A las nueve]]',
            '[[At ten|A las diez]]',
            '[[At eleven|A las once]]',
            '[[At midnight|A medianoche]]',
          ],
          correctAnswer: 1,
          explanation: 'El texto dice "she goes to sleep at ten o\'clock".',
        },
      ],
    },
    topicName: 'Reading',
  },
  // ─── 9–12: Verdadero/Falso ─────────────────────────────────────────────────
  {
    id: 'a1-u5-l3-reading-9',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: '[[María eats breakfast in the kitchen.|María desayuna en la cocina.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: 'Verdadero. El texto dice "she eats breakfast in the kitchen".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u5-l3-reading-10',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: '[[María works at home.|María trabaja en casa.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: 'Falso. Ella trabaja en una oficina en la ciudad.',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u5-l3-reading-11',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: '[[María has a cat.|María tiene un gato.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: 'Falso. El texto dice que ella tiene un perro, no un gato.',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u5-l3-reading-12',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: '[[María loves her daily routine.|María adora su rutina diaria.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: 'Verdadero. El texto dice "María loves her daily routine".',
        },
      ],
    },
    topicName: 'Reading',
  },
  // ─── 13–15: Síntesis ────────────────────────────────────────────────────────
  {
    id: 'a1-u5-l3-reading-13',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_SYN,
      questions: [
        {
          question: '[[What is the main topic of this text?|¿Cuál es el tema principal del texto?]]',
          options: [
            '[[María\'s family|La familia de María]]',
            '[[María\'s daily routine|La rutina diaria de María]]',
            '[[María\'s job|El trabajo de María]]',
            '[[María\'s English class|La clase de inglés de María]]',
          ],
          correctAnswer: 1,
          explanation: 'El texto describe la rutina completa de María desde que se despierta hasta que se va a dormir.',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u5-l3-reading-14',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_SYN,
      questions: [
        {
          question: '[[Which verbs use -s in this text?|¿Qué verbos llevan -s en este texto?]]',
          options: [
            '[[work, eat, drink|work, eat, drink]]',
            '[[wakes, gets, goes|wakes, gets, goes]]',
            '[[wake, get, go|wake, get, go]]',
            '[[working, eating, going|working, eating, going]]',
          ],
          correctAnswer: 1,
          explanation: 'Con "she" (3.ª persona), los verbos añaden -s: wakes, gets, goes, works, studies, eats, drinks, plays, comes.',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u5-l3-reading-15',
    type: 'reading',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_SYN,
      questions: [
        {
          question: '[[Which sentence best summarizes the text?|¿Qué oración resume mejor el texto?]]',
          options: [
            '[[María is a student who studies every day.|María es estudiante y estudia todos los días.]]',
            '[[María works and studies but dislikes her routine.|María trabaja y estudia, pero no le gusta su rutina.]]',
            '[[María follows a regular daily routine from morning to night.|María sigue una rutina diaria regular de la mañana a la noche.]]',
            '[[María wakes up late and goes to bed early.|María se despierta tarde y se va a dormir pronto.]]',
          ],
          correctAnswer: 2,
          explanation: 'El texto describe toda la rutina de María de principio a fin, usando el presente simple en 3.ª persona.',
        },
      ],
    },
    topicName: 'Reading',
  },
];
