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
          options: ['Maria', 'Ana', 'Laura', 'Sofia'],
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
          options: ['happy', 'excited', 'bored', 'tired'],
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
            'Because she was sick',
            'Because she worked all weekend',
            'Because she did not sleep',
            'Because she is bored',
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
          options: ['tired', 'sad', 'angry', 'excited'],
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
          options: ['eight', 'nine', 'ten', 'eleven'],
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
            'He is thirsty.',
            'No, he isn\'t.',
            'He is not hungry or thirsty.',
            'Yes, he is.',
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
          options: ['lunch', 'dinner', 'breakfast', 'a snack'],
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
          options: ['teachers', 'workers', 'doctors', 'students'],
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
          question: 'Laura is happy about working all weekend.',
          options: ['True', 'False'],
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
          question: 'Tom is tired today.',
          options: ['True', 'False'],
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
          question: 'Laura and Tom are bored at school.',
          options: ['True', 'False'],
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
          question: 'Tom slept more than Laura.',
          options: ['True', 'False'],
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
            'A morning at school',
            'A weekend trip',
            'Two friends describing how they feel today',
            'Breakfast habits',
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
            'They are both bored',
            'They are both tired',
            'They don\'t like school',
            'They are not bored — they love their class',
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
          question: '[[Which grammar structure does Laura use when she says "I am not happy about that"?|¿Qué estructura gramatical usa Laura cuando dice "I am not happy about that"?]]',
          options: [
            'Affirmative to be',
            'Negative to be',
            'Question with to be',
            'Past tense',
          ],
          correctAnswer: 1,
          explanation: '"I am not" es la forma negativa de to be con "I".',
        },
      ],
    },
    topicName: 'Reading',
  },
];
