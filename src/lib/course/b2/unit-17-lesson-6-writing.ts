/**
 * Unidad 17 B2 — Lección 6: Expresión escrita (Science)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_17_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u17-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases describiendo un laboratorio o experimento usando modal passive y have something done.',
      prompt:
        'Describe a laboratory or experiment. Use modal passive (must be tested, should be calibrated) and have something done (e.g. have equipment serviced).',
      targetLevel: 'B2',
      writingType: 'description',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con la forma correcta: must be, should have been o have something done.',
      questions: [
        {
          question:
            'All samples ____ tested before they can be used in the experiment.',
          options: ['must be', 'should have been', 'have been'],
          correctAnswer: 'must be',
          acceptableAnswers: ['must be'],
          explanation:
            'Modal passive: las muestras deben ser probadas (obligación en presente).',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Reescribe la frase usando modal passive: "Someone should publish the results."',
      prompt:
        'Use "should be" + past participle',
      expressionHint: 'The results should be published.',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w4',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2 frases criticando algo que debió hacerse en el pasado. Usa should have been + past participle.',
      prompt:
        'Write two sentences criticising something that should have been done (e.g. in a lab, at work, in a project).',
      targetLength: '2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con have o had según el tiempo.',
      questions: [
        {
          question:
            'We ____ the equipment serviced by a specialist last month.',
          options: ['had', 'have', 'got'],
          correctAnswer: 'had',
          acceptableAnswers: ['had', 'got'],
          explanation:
            'Have something done en pasado: "had the equipment serviced" = hicimos que lo revisaran.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w6',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve párrafo (3–4 frases) sobre un avance científico. Incluye al menos una pasiva modal.',
      prompt:
        'Describe a scientific breakthrough. Use modal passive (must be verified, can be applied, etc.).',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa las frases con ideas propias usando modal passive o have something done.',
      prompt:
        'Finish these sentences:\n1. In a lab, all equipment must be...\n2. We had our...\n3. The findings should have been...',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con should have been o must be.',
      questions: [
        {
          question:
            'The results ____ published earlier. We lost valuable time.',
          options: ['should have been', 'must be', 'have been'],
          correctAnswer: 'should have been',
          acceptableAnswers: ['should have been'],
          explanation:
            'Crítica sobre el pasado: los resultados debieron publicarse antes.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la introducción de un artículo (40–60 palabras) sobre la importancia de la calibración en laboratorios.',
      prompt:
        'Write an introduction to an article about why calibration is important in laboratories. Use vocabulary: equipment, accurate, reliable results.',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w10',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases explicando por qué la investigación revisada por pares es importante.',
      prompt:
        'Explain why peer-reviewed research is essential for scientific progress.',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta de have something done.',
      questions: [
        {
          question:
            'The lab ____ its air filters replaced every six months.',
          options: ['has', 'had', 'have'],
          correctAnswer: 'has',
          acceptableAnswers: ['has', 'gets'],
          explanation:
            'Have something done en presente: el laboratorio hace reemplazar los filtros regularmente.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w12',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Transforma la frase usando have something done: "A specialist will service our equipment."',
      prompt:
        'Use "We are going to have..."',
      expressionHint: 'We are going to have our equipment serviced by a specialist.',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w13',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 frases: una con must be, otra con should have been y otra con have something done.',
      prompt:
        'Write three sentences about science or laboratories using:\n- must be + past participle\n- should have been + past participle\n- have something done',
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w14',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con might have been o can be.',
      questions: [
        {
          question:
            'The data ____ recorded incorrectly. We need to check it.',
          options: ['might have been', 'can be', 'must be'],
          correctAnswer: 'might have been',
          acceptableAnswers: ['might have been', 'may have been'],
          explanation:
            'Posibilidad en pasado: es posible que los datos se hayan registrado mal.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w15',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve texto (aprox. 60–80 palabras) sobre los protocolos de seguridad en un laboratorio.',
      prompt:
        'Explain what must be done in a laboratory to ensure safety. Use modal passive and vocabulary: samples, chemicals, equipment, calibration.',
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w16',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases describiendo algo que hayas hecho hacer por alguien (have something done).',
      prompt:
        'Describe something you had done by someone else (e.g. had your car repaired, had your house painted). Use "had" + object + past participle.',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          question:
            'The hypothesis ____ verified with further research.',
          options: ['can be', 'can have been', 'could verify'],
          correctAnswer: 'can be',
          acceptableAnswers: ['can be'],
          explanation:
            'Modal passive: la hipótesis puede ser verificada (posibilidad en presente).',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w18',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Redacta la conclusión de un artículo (40–60 palabras) sobre por qué la financiación científica es importante.',
      prompt:
        'Write a short conclusion explaining why scientific funding is essential. Use modal passive where appropriate (e.g. "Research must be supported...").',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
];
