/**
 * Unidad 11 B2 — Lección 1: Gramática (Defining & non-defining relative clauses)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Grammar|Gramática]]: [[Defining & non-defining relative clauses|Defining & non-defining relative clauses]]';
const INSTRUCTIONS = 'Elige el relativo correcto o reescribe la frase usando una oración de relativo.';

export const UNIT_11_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u11-l1-g1',
    type: 'grammar',
    level: 'B2',
    topic: 'Defining & non-defining relative clauses',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Defining vs non-defining relative clauses; who/which/that/where/whose',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            'The festival ____ takes place in our town every August attracts visitors from all over the world.',
          options: ['who', 'which', 'that'],
          correctAnswer: 'that',
          acceptableAnswers: ['that', 'which'],
          explanation:
            'Es una defining relative clause que especifica qué festival; con cosas usamos normalmente "that" o "which" sin comas.',
          points: 2,
        },
        {
          id: 'g1-q2',
          type: 'fill-blank',
          question:
            'My grandmother, ____ stories about the war are fascinating, grew up in a small village.',
          options: ['whose', 'who', 'which'],
          correctAnswer: 'whose',
          acceptableAnswers: ['whose'],
          explanation:
            '"Whose" expresa posesión en oraciones de relativo: son sus historias, no la abuela.',
          points: 2,
        },
        {
          id: 'g1-q3',
          type: 'fill-blank',
          question:
            'The city ____ I was born has changed a lot since my childhood.',
          options: ['where', 'which', 'that'],
          correctAnswer: 'where',
          acceptableAnswers: ['where'],
          explanation:
            'Hablamos de un lugar + verbo "be born", así que usamos "where" (lugar donde).',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u11-l1-g2',
    type: 'grammar',
    level: 'B2',
    topic: 'Defining & non-defining relative clauses',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Decide si la oración de relativo es defining o non-defining.',
      grammarPoint: 'Uso de comas en non-defining relative clauses',
      questions: [
        {
          id: 'g2-q1',
          type: 'multiple-choice',
          question:
            'My brother, who lives in Canada, is coming to visit us next month.',
          options: ['Defining relative clause', 'Non-defining relative clause'],
          correctAnswer: 'Non-defining relative clause',
          explanation:
            'La información "who lives in Canada" va entre comas y es extra; no define qué hermano, solo añade información.',
          points: 2,
        },
        {
          id: 'g2-q2',
          type: 'multiple-choice',
          question:
            'Students who study regularly tend to get better results.',
          options: ['Defining relative clause', 'Non-defining relative clause'],
          correctAnswer: 'Defining relative clause',
          explanation:
            'La cláusula "who study regularly" define qué estudiantes; no lleva comas.',
          points: 2,
        },
        {
          id: 'g2-q3',
          type: 'multiple-choice',
          question:
            'The museum, which was founded in 1920, is one of the oldest in the country.',
          options: ['Defining relative clause', 'Non-defining relative clause'],
          correctAnswer: 'Non-defining relative clause',
          explanation:
            'La información histórica es extra, va entre comas y se usa "which".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u11-l1-g3',
    type: 'grammar',
    level: 'B2',
    topic: 'Defining & non-defining relative clauses',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Une las dos frases en una usando una oración de relativo.',
      grammarPoint: 'Combinación de frases con who/which/that/where',
      questions: [
        {
          id: 'g3-q1',
          type: 'sentence-completion',
          question:
            'We visited a village. The village is famous for its traditional dances.\nUne las frases:',
          correctAnswer:
            'We visited a village which is famous for its traditional dances.',
          acceptableAnswers: [
            'We visited a village that is famous for its traditional dances.',
          ],
          explanation:
            'Usamos "which/that" para cosas. Es una defining relative porque especifica el pueblo.',
          points: 3,
        },
        {
          id: 'g3-q2',
          type: 'sentence-completion',
          question:
            'I met a woman. She organizes local cultural events.\nEmpieza por: "The woman..."',
          correctAnswer:
            'The woman who organizes local cultural events is very friendly.',
          acceptableAnswers: [
            'The woman who organizes local cultural events is really friendly.',
          ],
          explanation:
            '"Who" se usa para personas como sujeto. La cláusula identifica a la mujer.',
          points: 3,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u11-l1-g4',
    type: 'grammar',
    level: 'B2',
    topic: 'Defining & non-defining relative clauses',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Marca la opción en la que NO se puede omitir el relativo.',
      grammarPoint: 'Omisión del relativo en defining clauses (object)',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            'Choose the sentence where the relative pronoun CANNOT be omitted.',
          options: [
            'The book (that) I bought yesterday is about cultural identities.',
            'The singer who wrote this song is from Brazil.',
            'The film (which) we saw last night was based on a true story.',
          ],
          correctAnswer:
            'The singer who wrote this song is from Brazil.',
          explanation:
            'Cuando el relativo es sujeto de la cláusula ("who wrote"), no se puede omitir.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u11-l1-g5',
    type: 'grammar',
    level: 'B2',
    topic: 'Defining & non-defining relative clauses',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con "who", "which", "where" o "whose".',
      grammarPoint: 'Elección del relativo correcto',
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            'The writer ____ novels explore identity and migration won an important prize.',
          options: ['who', 'whose', 'which'],
          correctAnswer: 'whose',
          acceptableAnswers: ['whose'],
          explanation:
            'Hablamos de "novels" que pertenecen al escritor → posesión → "whose".',
          points: 2,
        },
        {
          id: 'g5-q2',
          type: 'fill-blank',
          question:
            'We went back to the city ____ we first met during the Erasmus programme.',
          options: ['where', 'which', 'when'],
          correctAnswer: 'where',
          acceptableAnswers: ['where'],
          explanation:
            'Se refiere al lugar donde nos conocimos → "where".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u11-l1-g6',
    type: 'grammar',
    level: 'B2',
    topic: 'Defining & non-defining relative clauses',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Elige la opción que mantiene el mismo significado que la frase original.',
      grammarPoint: 'Paráfrasis con non-defining relative clauses',
      questions: [
        {
          id: 'g6-q1',
          type: 'multiple-choice',
          question:
            'Barcelona is very popular with tourists. It is the second largest city in Spain.\nWhich sentence is correct?',
          options: [
            'Barcelona, which is the second largest city in Spain, is very popular with tourists.',
            'Barcelona which is the second largest city in Spain is very popular with tourists.',
            'Barcelona, that is the second largest city in Spain, is very popular with tourists.',
          ],
          correctAnswer:
            'Barcelona, which is the second largest city in Spain, is very popular with tourists.',
          explanation:
            'Non-defining con "which" y comas; "that" no se usa en non-defining clauses.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u11-l1-g7',
    type: 'grammar',
    level: 'B2',
    topic: 'Defining & non-defining relative clauses',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Corrige el error en la oración de relativo.',
      grammarPoint: 'Errores típicos con "that / which / who"',
      questions: [
        {
          id: 'g7-q1',
          type: 'error-identification',
          question:
            'Many people that lives in big cities feel disconnected from their traditions.',
          correctAnswer:
            'Many people who live in big cities feel disconnected from their traditions.',
          explanation:
            'Con personas como sujeto usamos "who", y el verbo debe concordar: "people who live".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u11-l1-g8',
    type: 'grammar',
    level: 'B2',
    topic: 'Defining & non-defining relative clauses',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Transforma usando una non-defining relative clause para añadir información extra.',
      grammarPoint: 'Añadir información cultural con non-defining clauses',
      questions: [
        {
          id: 'g8-q1',
          type: 'sentence-completion',
          question:
            'Rewrite the sentence: "The Day of the Dead is celebrated in Mexico. It honours deceased relatives."\nEmpieza por: "The Day of the Dead, ..."',
          correctAnswer:
            'The Day of the Dead, which honours deceased relatives, is celebrated in Mexico.',
          acceptableAnswers: [
            'The Day of the Dead, which honors deceased relatives, is celebrated in Mexico.',
          ],
          explanation:
            'Información extra sobre la fiesta entre comas con "which".',
          points: 3,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
