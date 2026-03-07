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
          question: '[[What is her name?|¿Cuál es su nombre?]]',
          options: ['[[Maria|María]]', '[[Ana|Ana]]', '[[Laura|Laura]]', '[[Sofia|Sofía]]'],
          correctAnswer: 2,
          explanation: 'Ella dice: "My name is Laura".',
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
          question: '[[How does Laura feel today?|¿Cómo se siente Laura hoy?]]',
          options: [
            '[[happy|feliz]]',
            '[[excited|emocionada]]',
            '[[bored|aburrida]]',
            '[[tired|cansada]]',
          ],
          correctAnswer: 3,
          explanation: 'El texto dice "I am very tired".',
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
          question: '[[Why is Laura tired?|¿Por qué está Laura cansada?]]',
          options: [
            '[[Because she was sick|Porque estuvo enferma]]',
            '[[Because she worked all weekend|Porque trabajó todo el fin de semana]]',
            '[[Because she did not sleep|Porque no durmió]]',
            '[[Because she is bored|Porque está aburrida]]',
          ],
          correctAnswer: 1,
          explanation: 'El texto dice "I worked all weekend".',
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
          question: '[[How does Tom feel today?|¿Cómo se siente Tom hoy?]]',
          options: [
            '[[tired|cansado]]',
            '[[sad|triste]]',
            '[[angry|enfadado]]',
            '[[excited|emocionado]]',
          ],
          correctAnswer: 3,
          explanation: 'El texto dice "Tom is excited today".',
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
          question: '[[How many hours did Tom sleep?|¿Cuántas horas durmió Tom?]]',
          options: [
            '[[eight|ocho]]',
            '[[nine|nueve]]',
            '[[ten|diez]]',
            '[[eleven|once]]',
          ],
          correctAnswer: 2,
          explanation: 'El texto dice "he slept ten hours".',
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
          question: '[[Is Tom hungry?|¿Tiene hambre Tom?]]',
          options: [
            '[[He is thirsty.|Tiene sed.]]',
            '[[No, he isn\'t.|No, no tiene hambre.]]',
            '[[He is not hungry or thirsty.|No tiene hambre ni sed.]]',
            '[[Yes, he is.|Sí, tiene hambre.]]',
          ],
          correctAnswer: 3,
          explanation: 'El texto dice "Is he hungry? Yes, he is".',
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
          question: '[[What does Tom want?|¿Qué quiere Tom?]]',
          options: [
            '[[lunch|almuerzo]]',
            '[[dinner|cena]]',
            '[[breakfast|desayuno]]',
            '[[a snack|un tentempié]]',
          ],
          correctAnswer: 2,
          explanation: 'El texto dice "he wants breakfast".',
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
          question: '[[What are Laura and Tom?|¿Qué son Laura y Tom?]]',
          options: [
            '[[teachers|profesores]]',
            '[[workers|trabajadores]]',
            '[[doctors|médicos]]',
            '[[students|estudiantes]]',
          ],
          correctAnswer: 3,
          explanation: 'El texto dice "We are both students".',
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
          question: '[[Laura is happy about working all weekend.|Laura está feliz de haber trabajado todo el fin de semana.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: 'Falso. Ella dice "I am not happy about that".',
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
          question: '[[Tom is tired today.|Tom está cansado hoy.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: 'Falso. Tom no está cansado — está emocionado.',
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
          question: '[[Laura and Tom are bored at school.|Laura y Tom están aburridos en la escuela.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: 'Falso. El texto dice "we are not bored. We love our class!".',
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
          question: '[[Tom slept more than Laura.|Tom durmió más que Laura.]]',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: 'Verdadero. Tom durmió diez horas; Laura trabajó todo el fin de semana.',
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
          question: '[[What is the main topic of this text?|¿Cuál es el tema principal de este texto?]]',
          options: [
            '[[A morning at school|Una mañana en la escuela]]',
            '[[A weekend trip|Un viaje de fin de semana]]',
            '[[Two friends describing how they feel today|Dos amigos describiendo cómo se sienten hoy]]',
            '[[Breakfast habits|Hábitos de desayuno]]',
          ],
          correctAnswer: 2,
          explanation: 'El texto describe cómo Laura y Tom se sienten usando negaciones y preguntas con el verbo to be.',
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
          question: '[[How do Laura and Tom feel about school?|¿Cómo se sienten Laura y Tom respecto a la escuela?]]',
          options: [
            '[[They are both bored|Los dos están aburridos]]',
            '[[They are both tired|Los dos están cansados]]',
            '[[They don\'t like school|No les gusta la escuela]]',
            '[[They are not bored — they love their class|No están aburridos — aman su clase]]',
          ],
          correctAnswer: 3,
          explanation: 'El texto dice claramente "we are not bored. We love our class!".',
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
          question: '[[What structure is "I am not happy about that"?|¿Qué estructura es "I am not happy about that"?]]',
          options: [
            '[[Affirmative to be|To be afirmativo]]',
            '[[Negative to be|To be negativo]]',
            '[[Question with to be|Pregunta con to be]]',
            '[[Past tense|Tiempo pasado]]',
          ],
          correctAnswer: 1,
          explanation: '"I am not" es la forma negativa de to be con "I".',
        },
      ],
    },
    topicName: 'Reading',
  },
];
