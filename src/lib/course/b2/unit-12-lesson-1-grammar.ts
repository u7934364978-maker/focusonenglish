/**
 * Unidad 12 B2 — Lección 1: Gramática (Relative clauses (reducción, omisión))
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Grammar|Gramática]]: [[Reduced relative clauses|Reduced relative clauses]]';
const INSTRUCTIONS =
  'Elige la opción correcta o reescribe la frase usando una cláusula de relativo reducida (participle clause u omisión del relativo).';

export const UNIT_12_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u12-l1-g1',
    type: 'grammar',
    level: 'B2',
    topic: 'Relative clauses (reducción, omisión)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Reduced relative clauses with -ing / -ed participles',
      questions: [
        {
          id: 'g1-q1',
          type: 'multiple-choice',
          question:
            'The actor ____ in the new series is from my hometown.',
          options: [
            'who is starring',
            'starring',
            'who starring',
          ],
          correctAnswer: 'starring',
          explanation:
            'La forma reducida de "the actor who is starring in the new series" es "the actor starring in the new series".',
          points: 2,
        },
        {
          id: 'g1-q2',
          type: 'multiple-choice',
          question:
            'The scenes ____ in the desert were the most spectacular.',
          options: [
            'which were filmed',
            'filmed',
            'filming',
          ],
          correctAnswer: 'filmed',
          explanation:
            'Podemos reducir "the scenes which were filmed in the desert" a "the scenes filmed in the desert".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u12-l1-g2',
    type: 'grammar',
    level: 'B2',
    topic: 'Relative clauses (reducción, omisión)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Reescribe usando una cláusula de relativo reducida.',
      grammarPoint: 'Reducción de "who is / which is" a participio',
      questions: [
        {
          id: 'g2-q1',
          type: 'sentence-completion',
          question:
            'Rewrite: "The documentary which is shown late at night explores social media addiction."\nStart with: "The documentary..."',
          correctAnswer:
            'The documentary shown late at night explores social media addiction.',
          acceptableAnswers: [
            'The documentary, shown late at night, explores social media addiction.',
          ],
          explanation:
            'El relativo "which is" se puede reducir dejando solo el participio "shown".',
          points: 3,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u12-l1-g3',
    type: 'grammar',
    level: 'B2',
    topic: 'Relative clauses (reducción, omisión)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con la forma reducida correcta (-ing / -ed) o la oración completa si no es posible reducir.',
      grammarPoint: 'Cuándo se puede y cuándo no se puede reducir',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            'The fans ____ outside the cinema were waiting for the premiere.',
          options: [
            'who were standing',
            'standing',
            'stood',
          ],
          correctAnswer: 'standing',
          acceptableAnswers: ['standing'],
          explanation:
            'Podemos reducir "fans who were standing" a "fans standing".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u12-l1-g4',
    type: 'grammar',
    level: 'B2',
    topic: 'Relative clauses (reducción, omisión)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción con reducción de relativo correcta.',
      grammarPoint: 'Comparar versión completa vs reducida',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            'Which sentence is correct?',
          options: [
            'The series winning several awards has just been released on streaming platforms.',
            'The series won several awards has just been released on streaming platforms.',
            'The series which winning several awards has just been released on streaming platforms.',
          ],
          correctAnswer:
            'The series winning several awards has just been released on streaming platforms.',
          explanation:
            'La forma reducida es "series winning several awards" (de "which won / which is winning").',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u12-l1-g5',
    type: 'grammar',
    level: 'B2',
    topic: 'Relative clauses (reducción, omisión)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Transforma las oraciones largas en una sola usando cláusulas de relativo reducidas relacionadas con cine / series.',
      grammarPoint: 'Reducción en contexto de entretenimiento',
      questions: [
        {
          id: 'g5-q1',
          type: 'sentence-completion',
          question:
            'The actor is very famous. He appears in the film.\nWrite ONE sentence with a reduced relative clause.',
          correctAnswer:
            'The actor appearing in the film is very famous.',
          acceptableAnswers: [
            'The actor, appearing in the film, is very famous.',
          ],
          explanation:
            '"Who appears in the film" se puede reducir a "appearing in the film".',
          points: 3,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u12-l1-g6',
    type: 'grammar',
    level: 'B2',
    topic: 'Relative clauses (reducción, omisión)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Marca la frase donde NO es posible omitir el relativo.',
      grammarPoint: 'Omisión del relativo solo cuando es objeto',
      questions: [
        {
          id: 'g6-q1',
          type: 'multiple-choice',
          question:
            'In which sentence can the relative pronoun NOT be omitted?',
          options: [
            'The actor who plays the villain is British.',
            'The film (which) we watched last night was hilarious.',
            'The show (that) you recommended was amazing.',
          ],
          correctAnswer:
            'The actor who plays the villain is British.',
          explanation:
            'Aquí "who" es sujeto de la cláusula ("who plays"), por eso no se puede omitir.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u12-l1-g7',
    type: 'grammar',
    level: 'B2',
    topic: 'Relative clauses (reducción, omisión)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa las frases con la versión reducida adecuada.',
      grammarPoint: 'Práctica guiada de reducción',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            'The tickets ____ online are cheaper than the ones at the cinema.',
          options: [
            'bought',
            'which bought',
            'buying',
          ],
          correctAnswer: 'bought',
          acceptableAnswers: ['bought'],
          explanation:
            'Reducción de "tickets which are bought online" → "tickets bought online".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u12-l1-g8',
    type: 'grammar',
    level: 'B2',
    topic: 'Relative clauses (reducción, omisión)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Une las frases sobre series usando cláusulas de relativo reducidas.',
      grammarPoint: 'Reducción con -ing/-ed en contexto de series',
      questions: [
        {
          id: 'g8-q1',
          type: 'sentence-completion',
          question:
            'This is a series. It was filmed in several different countries.\nWrite ONE sentence.',
          correctAnswer:
            'This is a series filmed in several different countries.',
          acceptableAnswers: [
            'This is a series which was filmed in several different countries.',
          ],
          explanation:
            '"which was filmed" puede reducirse a "filmed".',
          points: 3,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
