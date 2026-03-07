/**
 * Unidad 3 — Lección 3: Comprensión lectora
 * 15 ejercicios individuales (8 elección múltiple, 4 verdadero/falso, 3 síntesis)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión lectora';
const READING_TRANSCRIPT = `[[Hi|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Laura|Laura]]. [[Today|Hoy]] [[is|es]] [[Monday|lunes]] [[and|y]] [[I|yo]] [[am|estoy]] [[very|muy]] [[tired|cansada]]. [[I|Yo]] [[worked|trabajé]] [[all|todo]] [[weekend|el fin de semana]]. [[I|Yo]] [[am not|no estoy]] [[happy|feliz]] [[about|con]] [[that|eso]], [[but|pero]] [[it|ello]] [[is|es]] [[OK|bien]].

[[My|Mi]] [[friend|amigo]] [[Tom|Tom]] [[is|está]] [[excited|emocionado]] [[today|hoy]]. [[He|Él]] [[is|está]] [[not|no]] [[tired|cansado]] — [[he|él]] [[slept|durmió]] [[ten|diez]] [[hours|horas]]! [[Is|Está]] [[he|él]] [[hungry|hambriento]]? [[Yes|Sí]], [[he|él]] [[is|está]] — [[he|él]] [[wants|quiere]] [[breakfast|desayunar]].

[[We|Nosotros]] [[are|somos]] [[both|los dos]] [[students|estudiantes]]. [[Are|Estamos]] [[we|nosotros]] [[bored|aburridos]] [[at|en]] [[school|la escuela]]? [[No|No]], [[we|nosotros]] [[are not|no estamos]]. [[We|Nosotros]] [[love|amamos]] [[our|nuestra]] [[class|clase]]!`;

const INST_MC = 'Lee el texto y elige la respuesta correcta.';
const INST_TF = 'Lee el texto. Indica si la afirmación es verdadera o falsa.';
const INST_SYN = 'Lee el texto. Elige la mejor respuesta.';

export const UNIT_3_LESSON_3_READING: Exercise[] = [
  // ─── 1–8: Elección múltiple ────────────────────────────────────────────────
  {
    id: 'a1-u3-l3-reading-1',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[her|su]] [[name|nombre]]?',
          options: ['[[Maria|María]]', '[[Ana|Ana]]', '[[Laura|Laura]]', '[[Sofia|Sofía]]'],
          correctAnswer: 2,
          explanation: '[[She|Ella]] [[says|dice]]: "[[My name is Laura|Mi nombre es Laura]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u3-l3-reading-2',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[How|Cómo]] [[does|se siente]] [[Laura|Laura]] [[today|hoy]]?',
          options: ['[[happy|feliz]]', '[[excited|emocionada]]', '[[bored|aburrida]]', '[[tired|cansada]]'],
          correctAnswer: 3,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am very tired|Estoy muy cansada]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u3-l3-reading-3',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[Why|Por qué]] [[is|está]] [[Laura|Laura]] [[tired|cansada]]?',
          options: [
            '[[Because|Porque]] [[she|ella]] [[was|estuvo]] [[sick|enferma]]',
            '[[Because|Porque]] [[she|ella]] [[worked|trabajó]] [[all|todo]] [[weekend|el fin de semana]]',
            '[[Because|Porque]] [[she|ella]] [[did not|no]] [[sleep|durmió]]',
            '[[Because|Porque]] [[she|ella]] [[is|está]] [[bored|aburrida]]',
          ],
          correctAnswer: 1,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I worked all weekend|Trabajé todo el fin de semana]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u3-l3-reading-4',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[How|Cómo]] [[does|se siente]] [[Tom|Tom]] [[today|hoy]]?',
          options: ['[[tired|cansado]]', '[[sad|triste]]', '[[angry|enfadado]]', '[[excited|emocionado]]'],
          correctAnswer: 3,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Tom is excited today|Tom está emocionado hoy]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u3-l3-reading-5',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[How many|Cuántas]] [[hours|horas]] [[did|durmió]] [[Tom|Tom]] [[sleep|dormir]]?',
          options: ['[[eight|ocho]]', '[[nine|nueve]]', '[[ten|diez]]', '[[eleven|once]]'],
          correctAnswer: 2,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[he slept ten hours|durmió diez horas]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u3-l3-reading-6',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[Is|Está]] [[Tom|Tom]] [[hungry|hambriento]]?',
          options: [
            '[[He is thirsty.|Tiene sed.]]',
            '[[No, he isn\'t.|No, no lo está.]]',
            '[[He is not hungry or thirsty.|No tiene hambre ni sed.]]',
            '[[Yes, he is.|Sí, lo está.]]',
          ],
          correctAnswer: 3,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Is he hungry? Yes, he is|¿Tiene hambre? Sí, la tiene]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u3-l3-reading-7',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What|Qué]] [[does|quiere]] [[Tom|Tom]] [[want|querer]]?',
          options: ['[[lunch|almuerzo]]', '[[dinner|cena]]', '[[breakfast|desayuno]]', '[[a|un]] [[snack|tentempié]]'],
          correctAnswer: 2,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[he wants breakfast|quiere desayunar]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u3-l3-reading-8',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What|Qué]] [[are|son]] [[Laura|Laura]] [[and|y]] [[Tom|Tom]]?',
          options: ['[[teachers|profesores]]', '[[workers|trabajadores]]', '[[doctors|médicos]]', '[[students|estudiantes]]'],
          correctAnswer: 3,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We are both students|Los dos somos estudiantes]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  // ─── 9–12: Verdadero/Falso ─────────────────────────────────────────────────
  {
    id: 'a1-u3-l3-reading-9',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: '[[Laura|Laura]] [[is|está]] [[happy|feliz]] [[about|con]] [[working|trabajar]] [[all|todo]] [[weekend|el fin de semana]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[She|Ella]] [[says|dice]] "[[I am not happy about that|No estoy contenta con eso]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u3-l3-reading-10',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: '[[Tom|Tom]] [[is|está]] [[tired|cansado]] [[today|hoy]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Tom|Tom]] [[is|está]] [[not|no]] [[tired|cansado]] — [[he|él]] [[is|está]] [[excited|emocionado]].',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u3-l3-reading-11',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: '[[Laura|Laura]] [[and|y]] [[Tom|Tom]] [[are|están]] [[bored|aburridos]] [[at|en]] [[school|la escuela]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[The|El]] [[text|texto]] [[says|dice]] "[[we are not bored|no estamos aburridos]]". [[They|Ellos]] [[love|aman]] [[their|su]] [[class|clase]].',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u3-l3-reading-12',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: '[[Tom|Tom]] [[slept|durmió]] [[more|más]] [[than|que]] [[Laura|Laura]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Tom|Tom]] [[slept|durmió]] [[ten|diez]] [[hours|horas]]; [[Laura|Laura]] [[worked|trabajó]] [[all|todo]] [[weekend|el fin de semana]].',
        },
      ],
    },
    topicName: 'Reading',
  },
  // ─── 13–15: Síntesis ────────────────────────────────────────────────────────
  {
    id: 'a1-u3-l3-reading-13',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_SYN,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
          options: [
            '[[A|Una]] [[morning|mañana]] [[at|en]] [[school|la escuela]]',
            '[[A|Un]] [[weekend|fin de semana]] [[trip|viaje]]',
            '[[Two|Dos]] [[friends|amigos]] [[describing|describiendo]] [[how|cómo]] [[they|se]] [[feel|sienten]] [[today|hoy]]',
            '[[Breakfast|El desayuno]] [[habits|hábitos]]',
          ],
          correctAnswer: 2,
          explanation: '[[The|El]] [[text|texto]] [[describes|describe]] [[how|cómo]] [[Laura|Laura]] [[and|y]] [[Tom|Tom]] [[feel|se sienten]] [[using|usando]] [[negatives|negaciones]] [[and|y]] [[questions|preguntas]] [[with|con]] [[to be|el verbo to be]].',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u3-l3-reading-14',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_SYN,
      questions: [
        {
          question: '[[How|Cómo]] [[do|se sienten]] [[Laura|Laura]] [[and|y]] [[Tom|Tom]] [[about|con]] [[school|la escuela]]?',
          options: [
            '[[They|Ellos]] [[are|están]] [[both|los dos]] [[bored|aburridos]]',
            '[[They|Ellos]] [[are|están]] [[both|los dos]] [[tired|cansados]]',
            '[[They|Ellos]] [[don\'t|no]] [[like|les gusta]] [[school|la escuela]]',
            '[[They|Ellos]] [[are|están]] [[not|no]] [[bored|aburridos]] — [[they|ellos]] [[love|aman]] [[their|su]] [[class|clase]]',
          ],
          correctAnswer: 3,
          explanation: '[[The|El]] [[text|texto]] [[clearly|claramente]] [[says|dice]] "[[we are not bored. We love our class!|no estamos aburridos. ¡Amamos nuestra clase!]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-u3-l3-reading-15',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: INST_SYN,
      questions: [
        {
          question: '[[Which|Cuál]] [[grammar|gramática]] [[structure|estructura]] [[does|usa]] [[Laura|Laura]] [[use|usar]] [[when|cuando]] [[she|ella]] [[says|dice]] "[[I am not happy about that|No estoy contenta con eso]]"?',
          options: [
            '[[Affirmative|Afirmativa]] [[to be|to be]]',
            '[[Negative|Negativa]] [[to be|to be]]',
            '[[Question|Pregunta]] [[with|con]] [[to be|to be]]',
            '[[Past|Pasado]] [[tense|tiempo]]',
          ],
          correctAnswer: 1,
          explanation: '"[[I am not|No estoy]]" [[is|es]] [[the|la]] [[negative|negativa]] [[form|forma]] [[of|de]] [[to be|to be]] [[with|con]] "[[I|Yo]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
];
