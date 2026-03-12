/**
 * Unidad 15 B2 — Lección 1: Gramática (Repaso 11–14: relative clauses, modals, modal deduction)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Grammar|Gramática]]: [[Repaso 11–14|Repaso 11–14]]';
const INSTRUCTIONS =
  'Repaso de oraciones de relativo, modales (must, have to, need to, needn\'t) y modales de deducción (must have, might have, can\'t have).';

export const UNIT_15_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u15-l1-g1',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Relative clauses|Oraciones de relativo]]: [[who|quien]]/[[which|que]]/[[that|que]]/[[where|donde]]',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            '[[The festival ____ takes place every summer attracts thousands of visitors.|El festival ____ que tiene lugar cada verano atrae a miles de visitantes.]]',
          options: ['[[which|que]]', '[[who|quien]]', '[[where|donde]]'],
          correctAnswer: '[[which|que]]',
          acceptableAnswers: ['[[which|que]]', '[[that|que]]'],
          explanation:
            'Con cosas (festival) usamos "which" o "that" en defining relative clauses.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g2',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Modals|Modales]]: [[must|debe]]/[[have to|tener que]]/[[need to|necesitar]]',
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            '[[You ____ pay your bills on time if you want to avoid late fees.|Debes ____ pagar tus facturas a tiempo si quieres evitar recargos por demora.]]',
          options: ['[[must|debe]]', '[[needn\'t|no necesitas]]', '[[don\'t have to|no tienes que]]'],
          correctAnswer: '[[must|debe]]',
          acceptableAnswers: ['[[must|debe]]', '[[have to|tener que]]', '[[need to|necesitar]]'],
          explanation: 'Obligación fuerte: pagar a tiempo.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g3',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Modal verbs of deduction|Modales de deducción]]',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            "[[She ____ missed the meeting. I saw her in the office at 9 am.|Ella ____ no puede haber faltado a la reunión. La vi en la oficina a las 9.]]",
          options: ["[[can't have|no puede haber]]", '[[must have|debe haber]]', '[[might have|podría haber]]'],
          correctAnswer: "[[can't have|no puede haber]]",
          acceptableAnswers: ["[[can't have|no puede haber]]"],
          explanation:
            'Imposibilidad: la vi en la oficina, así que no pudo haber faltado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g4',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Non-defining relative clauses|Oraciones de relativo explicativas]]',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            '[[My brother, ____ lives in Canada, is coming to visit us next month.|Mi hermano, ____ que vive en Canadá, viene a visitarnos el mes que viene.]]',
          options: ['[[who|quien]]', '[[which|que]]', '[[that|que]]'],
          correctAnswer: '[[who|quien]]',
          explanation:
            'Non-defining con personas: "who" entre comas. "That" no se usa en non-defining.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g5',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: "[[needn't|no necesitas]] / [[don't need to|no necesitas]]",
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            "[[You ____ worry about the transfer; I've already paid it.|No ____ preocuparte por la transferencia; ya la he pagado.]]",
          options: ['[[needn\'t|no necesitas]]', '[[must|debe]]', '[[have to|tener que]]'],
          correctAnswer: '[[needn\'t|no necesitas]]',
          acceptableAnswers: ['[[needn\'t|no necesitas]]', '[[don\'t need to|no necesitas]]', '[[don\'t have to|no tienes que]]'],
          explanation: 'Ausencia de necesidad: ya está pagado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g6',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Relative clauses|Oraciones de relativo]]: [[whose|cuyo/cuya]]',
      questions: [
        {
          id: 'g6-q1',
          type: 'fill-blank',
          question:
            '[[The writer ____ novels explore identity won an important prize.|El escritor ____ cuyas novelas exploran la identidad ganó un premio importante.]]',
          options: ['[[whose|cuyo/cuya]]', '[[who|quien]]', '[[which|que]]'],
          correctAnswer: '[[whose|cuyo/cuya]]',
          acceptableAnswers: ['[[whose|cuyo/cuya]]'],
          explanation: '"Whose" expresa posesión: son sus novelas.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g7',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Modal verbs of deduction|Modales de deducción]]: [[must have|debe haber]]',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            '[[The deal ____ been successful. Both companies have announced the partnership.|El acuerdo ____ debe haber sido exitoso. Ambas empresas han anunciado la asociación.]]',
          options: ['[[must have|debe haber]]', '[[might have|podría haber]]', "[[can't have|no puede haber]]"],
          correctAnswer: '[[must have|debe haber]]',
          acceptableAnswers: ['[[must have|debe haber]]'],
          explanation: 'Certeza: el anuncio indica que el acuerdo fue exitoso.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g8',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[had to|tuvo que]] (obligación en pasado)',
      questions: [
        {
          id: 'g8-q1',
          type: 'fill-blank',
          question:
            '[[She ____ work overtime last week because of the audit.|Tuvo que ____ trabajar horas extra la semana pasada por la auditoría.]]',
          options: ['[[had to|tuvo que]]', '[[must|debe]]', '[[need to|necesita]]'],
          correctAnswer: '[[had to|tuvo que]]',
          acceptableAnswers: ['[[had to|tuvo que]]'],
          explanation: 'Obligación en pasado: solo "had to" (must no tiene pasado).',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g9',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Relative clauses|Oraciones de relativo]]: [[where|donde]]',
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            '[[We went back to the city ____ we first met during the Erasmus programme.|Volvimos a la ciudad ____ donde nos conocimos durante el programa Erasmus.]]',
          options: ['[[where|donde]]', '[[which|que]]', '[[when|cuando]]'],
          correctAnswer: '[[where|donde]]',
          acceptableAnswers: ['[[where|donde]]'],
          explanation: 'Lugar donde nos conocimos → "where".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g10',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Reduced relative clauses|Cláusulas de relativo reducidas]]',
      questions: [
        {
          id: 'g10-q1',
          type: 'multiple-choice',
          question:
            '[[The actor ____ in the new series is from my hometown.|El actor ____ que protagoniza la nueva serie es de mi ciudad natal.]]',
          options: ['[[starring|protagonizando]]', '[[who is starring|que protagoniza]]', '[[who starring|incorrecto]]'],
          correctAnswer: '[[starring|protagonizando]]',
          explanation:
            'Forma reducida de "the actor who is starring" → "the actor starring".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g11',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[might have|podría haber]] (posibilidad en pasado)',
      questions: [
        {
          id: 'g11-q1',
          type: 'fill-blank',
          question:
            "[[The client ____ changed their mind. They haven't responded for a week.|El cliente ____ podría haber cambiado de opinión. No han respondido desde hace una semana.]]",
          options: ['[[might have|podría haber]]', '[[must have|debe haber]]', "[[can't have|no puede haber]]"],
          correctAnswer: '[[might have|podría haber]]',
          acceptableAnswers: ['[[might have|podría haber]]', '[[may have|puede haber]]'],
          explanation: 'Posibilidad: no hay certeza.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g12',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: "[[mustn't|no debes]] (prohibición)",
      questions: [
        {
          id: 'g12-q1',
          type: 'fill-blank',
          question:
            '[[You ____ tell anyone your PIN. Keep it secret.|No ____ decir tu PIN a nadie. Guárdalo en secreto.]]',
          options: ['[[mustn\'t|no debes]]', '[[needn\'t|no necesitas]]', '[[don\'t have to|no tienes que]]'],
          correctAnswer: '[[mustn\'t|no debes]]',
          acceptableAnswers: ['[[mustn\'t|no debes]]'],
          explanation: 'Prohibición: "mustn\'t" = no debes.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g13',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Omisión del relativo (object)|Omisión del relativo (objeto)]]',
      questions: [
        {
          id: 'g13-q1',
          type: 'multiple-choice',
          question:
            '[[In which sentence can the relative pronoun be omitted?|¿En qué oración se puede omitir el pronombre relativo?]]',
          options: [
            '[[The film (which) we watched last night was hilarious.|La película (que) vimos anoche fue divertidísima.]]',
            '[[The singer who wrote this song is from Brazil.|El cantante que escribió esta canción es de Brasil.]]',
            '[[The festival which takes place in August is famous.|El festival que tiene lugar en agosto es famoso.]]',
          ],
          correctAnswer: '[[The film (which) we watched last night was hilarious.|La película (que) vimos anoche fue divertidísima.]]',
          explanation:
            'Cuando el relativo es objeto ("which we watched"), se puede omitir.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g14',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[need to|necesitar]] (necesidad)',
      questions: [
        {
          id: 'g14-q1',
          type: 'fill-blank',
          question:
            '[[To open a savings account, you ____ provide proof of identity.|Para abrir una cuenta de ahorros, ____ proporcionar prueba de identidad.]]',
          options: ['[[need to|necesitas]]', '[[needn\'t|no necesitas]]', '[[mustn\'t|no debes]]'],
          correctAnswer: '[[need to|necesitas]]',
          acceptableAnswers: ['[[need to|necesitas]]', '[[must|debes]]', '[[have to|tienes que]]'],
          explanation: 'Necesidad: es necesario para abrir la cuenta.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g15',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: "[[can't have|no puede haber]] (imposibilidad)",
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            '[[He ____ forgotten the presentation. He prepared it for three weeks.|Él ____ no puede haber olvidado la presentación. La preparó durante tres semanas.]]',
          options: ["[[can't have|no puede haber]]", '[[must have|debe haber]]', '[[might have|podría haber]]'],
          correctAnswer: "[[can't have|no puede haber]]",
          acceptableAnswers: ["[[can't have|no puede haber]]"],
          explanation: 'Imposibilidad: lo preparó durante tres semanas.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g16',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Defining vs non-defining|Definitoria vs explicativa]]',
      questions: [
        {
          id: 'g16-q1',
          type: 'multiple-choice',
          question:
            '[[Students who study regularly tend to get better results.|Los estudiantes que estudian regularmente tienden a obtener mejores resultados.]]',
          options: ['[[Defining relative clause|Oración de relativo definitoria]]', '[[Non-defining relative clause|Oración de relativo explicativa]]'],
          correctAnswer: '[[Defining relative clause|Oración de relativo definitoria]]',
          explanation:
            'La cláusula define qué estudiantes; no lleva comas.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g17',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Reduced relative: -ed participle|Relativo reducido: participio -ed]]',
      questions: [
        {
          id: 'g17-q1',
          type: 'fill-blank',
          question:
            '[[The tickets ____ online are cheaper than the ones at the cinema.|Las entradas ____ compradas online son más baratas que las del cine.]]',
          options: ['[[bought|compradas]]', '[[which bought|incorrecto]]', '[[buying|comprando]]'],
          correctAnswer: '[[bought|compradas]]',
          acceptableAnswers: ['[[bought|compradas]]'],
          explanation:
            'Reducción de "tickets which are bought online" → "tickets bought online".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u15-l1-g18',
    type: 'grammar',
    level: 'B2',
    topic: 'Repaso 11–14',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Resumen repaso|Resumen del repaso]]',
      questions: [
        {
          id: 'g18-q1',
          type: 'fill-blank',
          question:
            "[[The investors ____ been impressed. They've decided to increase their funding.|Los inversores ____ deben haberse quedado impresionados. Han decidido aumentar su financiación.]]",
          options: ['[[must have|deben haber]]', '[[might have|podrían haber]]', "[[can't have|no pueden haber]]"],
          correctAnswer: '[[must have|deben haber]]',
          acceptableAnswers: ['[[must have|deben haber]]'],
          explanation:
            'Certeza: aumentar la financiación indica que quedaron impresionados.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
