/**
 * Unidad 14 B2 — Lección 1: Gramática (Modal verbs of deduction: must have, might have, can't have)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE =
  '[[Grammar|Gramática]]: [[Modal verbs of deduction|Modales de deducción]]';
const INSTRUCTIONS =
  'Elige el modal de deducción correcto (must have, might have, can\'t have) según el grado de certeza.';

export const UNIT_14_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u14-l1-g1',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[must have + past participle|must have + participio pasado]] = certeza en el pasado',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            '[[The CEO ____ received the report by now. I sent it to her email an hour ago.|La directora ____ debe haber recibido el informe ya. Se lo envié a su correo hace una hora.]]',
          options: [`[[must have|debe haber]]`, `[[might have|podría haber]]`, `[[can't have|no puede haber]]`],
          correctAnswer: `[[must have|debe haber]]`,
          acceptableAnswers: ['[[must have|debe haber]]'],
          explanation:
            'Certeza lógica: envié el informe hace una hora, así que es muy probable que lo haya recibido.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g2',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: "[[can't have + past participle|can't have + participio pasado]] = imposibilidad en el pasado",
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            "[[She ____ missed the meeting. I saw her in the conference room at 9 am.|Ella ____ no puede haber faltado a la reunión. La vi en la sala de conferencias a las 9.]]",
          options: [`[[can't have|no puede haber]]`, `[[must have|debe haber]]`, `[[might have|podría haber]]`],
          correctAnswer: `[[can't have|no puede haber]]`,
          acceptableAnswers: [`[[can't have|no puede haber]]`],
          explanation:
            'Imposibilidad: la vi en la sala de reuniones a las 9, así que no pudo haber faltado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g3',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[might have + past participle|might have + participio pasado]] = posibilidad en el pasado',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            "[[The deal ____ fallen through. They haven't responded to our emails for a week.|El acuerdo ____ podría haberse roto. No han respondido a nuestros correos desde hace una semana.]]",
          options: [`[[might have|podría haber]]`, `[[must have|debe haber]]`, `[[can't have|no puede haber]]`],
          correctAnswer: '[[might have|podría haber]]',
          acceptableAnswers: ['[[might have|podría haber]]', '[[may have|puede haber]]'],
          explanation:
            'Posibilidad: no sabemos con certeza; no responder puede indicar que el trato se ha roto.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g4',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[must have|debe haber]] para deducciones lógicas',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            "[[The company's profits have doubled this quarter. They ____ made some excellent investment decisions.|Los beneficios de la empresa se han duplicado este trimestre. ____ deben haber tomado excelentes decisiones de inversión.]]",
          options: [`[[must have|deben haber]]`, `[[might have|podrían haber]]`, `[[can't have|no pueden haber]]`],
          correctAnswer: '[[must have|deben haber]]',
          explanation:
            'Certeza lógica: si los beneficios se han duplicado, es muy probable que hayan tomado buenas decisiones.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g5',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: `[[can't have|no puede haber]] para imposibilidad`,
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            '[[He ____ forgotten about the presentation. He prepared it for three weeks.|Él ____ no puede haber olvidado la presentación. La preparó durante tres semanas.]]',
          options: [`[[can't have|no puede haber]]`, `[[must have|debe haber]]`, `[[might have|podría haber]]`],
          correctAnswer: `[[can't have|no puede haber]]`,
          acceptableAnswers: [`[[can't have|no puede haber]]`],
          explanation:
            'Imposibilidad: si lo preparó durante tres semanas, es imposible que lo haya olvidado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g6',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[might have|podría haber]] para incertidumbre',
      questions: [
        {
          id: 'g6-q1',
          type: 'fill-blank',
          question:
            '[[The client ____ changed their mind. They were very positive last week.|El cliente ____ podría haber cambiado de opinión. Estaban muy positivos la semana pasada.]]',
          options: [`[[might have|podría haber]]`, `[[must have|debe haber]]`, `[[can't have|no puede haber]]`],
          correctAnswer: '[[might have|podría haber]]',
          acceptableAnswers: ['[[might have|podría haber]]', '[[may have|puede haber]]'],
          explanation:
            'Posibilidad: no sabemos con certeza; el cambio de actitud es una posibilidad.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g7',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[must have + past participle|must have + participio pasado]]',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            '[[Someone ____ left the office door open. All the documents are scattered on the floor.|Alguien ____ debe haber dejado la puerta de la oficina abierta. Todos los documentos están dispersos por el suelo.]]',
          options: [`[[must have|debe haber]]`, `[[might have|podría haber]]`, `[[can't have|no puede haber]]`],
          correctAnswer: `[[must have|debe haber]]`,
          acceptableAnswers: ['[[must have|debe haber]]'],
          explanation:
            'Certeza: los documentos desordenados indican que alguien dejó la puerta abierta.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g8',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[may have|puede haber]] como alternativa a [[might have|podría haber]]',
      questions: [
        {
          id: 'g8-q1',
          type: 'multiple-choice',
          question:
            "[[The merger ____ been delayed. We haven't received any official confirmation yet.|La fusión ____ puede haberse retrasado. No hemos recibido confirmación oficial aún.]]",
          options: [`[[may have|puede haber]]`, `[[must have|debe haber]]`, `[[can't have|no puede haber]]`],
          correctAnswer: '[[may have|puede haber]]',
          explanation:
            'Posibilidad: no hay confirmación, así que es posible que se haya retrasado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g9',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: `[[can't have + past participle|can't have + participio pasado]]`,
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            '[[They ____ signed the contract yet. The lawyers are still reviewing the terms.|Ellos ____ no pueden haber firmado el contrato aún. Los abogados siguen revisando los términos.]]',
          options: [`[[can't have|no pueden haber]]`, `[[must have|deben haber]]`, `[[might have|podrían haber]]`],
          correctAnswer: `[[can't have|no pueden haber]]`,
          acceptableAnswers: [`[[can't have|no pueden haber]]`],
          explanation:
            'Imposibilidad: si los abogados siguen revisando, no pueden haber firmado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g10',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[must have|debe haber]] para conclusiones lógicas',
      questions: [
        {
          id: 'g10-q1',
          type: 'fill-blank',
          question:
            "[[The sales team ____ exceeded their targets. They're celebrating in the office.|El equipo de ventas ____ debe haber superado sus objetivos. Están celebrando en la oficina.]]",
          options: [`[[must have|debe haber]]`, `[[might have|podría haber]]`, `[[can't have|no puede haber]]`],
          correctAnswer: `[[must have|debe haber]]`,
          acceptableAnswers: ['[[must have|debe haber]]'],
          explanation:
            'Certeza: si están celebrando, es lógico que hayan superado los objetivos.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g11',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[might have + past participle|might have + participio pasado]]',
      questions: [
        {
          id: 'g11-q1',
          type: 'multiple-choice',
          question:
            "[[The budget ____ been approved. I'm not sure if the board has met yet.|El presupuesto ____ podría haber sido aprobado. No estoy seguro de si la junta se ha reunido aún.]]",
          options: [`[[might have|podría haber]]`, `[[must have|debe haber]]`, `[[can't have|no puede haber]]`],
          correctAnswer: '[[might have|podría haber]]',
          explanation:
            'Posibilidad: no hay certeza sobre si la junta se ha reunido.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g12',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: "[[can't have|no puede haber]] para deducciones negativas",
      questions: [
        {
          id: 'g12-q1',
          type: 'fill-blank',
          question:
            "[[She ____ resigned. She's the most dedicated employee we have.|Ella ____ no puede haber dimitido. Es la empleada más dedicada que tenemos.]]",
          options: [`[[can't have|no puede haber]]`, `[[must have|debe haber]]`, `[[might have|podría haber]]`],
          correctAnswer: `[[can't have|no puede haber]]`,
          acceptableAnswers: [`[[can't have|no puede haber]]`],
          explanation:
            'Imposibilidad: siendo la empleada más dedicada, es difícil creer que haya dimitido.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g13',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[must have + past participle|must have + participio pasado]]',
      questions: [
        {
          id: 'g13-q1',
          type: 'fill-blank',
          question:
            '[[The competitor ____ launched a new product. Their market share has increased significantly.|El competidor ____ debe haber lanzado un nuevo producto. Su cuota de mercado ha aumentado significativamente.]]',
          options: [`[[must have|debe haber]]`, `[[might have|podría haber]]`, `[[can't have|no puede haber]]`],
          correctAnswer: `[[must have|debe haber]]`,
          acceptableAnswers: ['[[must have|debe haber]]'],
          explanation:
            'Certeza: el aumento de cuota de mercado sugiere que han lanzado algo nuevo.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g14',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[might have|podría haber]] para incertidumbre',
      questions: [
        {
          id: 'g14-q1',
          type: 'multiple-choice',
          question:
            '[[The shipment ____ arrived at the warehouse. The tracking system is down.|El envío ____ podría haber llegado al almacén. El sistema de seguimiento no funciona.]]',
          options: [`[[might have|podría haber]]`, `[[must have|debe haber]]`, `[[can't have|no puede haber]]`],
          correctAnswer: '[[might have|podría haber]]',
          explanation:
            'Posibilidad: no podemos verificar el seguimiento, así que es posible que haya llegado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g15',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: `[[can't have + past participle|can't have + participio pasado]]`,
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            '[[He ____ forgotten the password. He uses it every single day.|Él ____ no puede haber olvidado la contraseña. La usa todos los días.]]',
          options: [`[[can't have|no puede haber]]`, `[[must have|debe haber]]`, `[[might have|podría haber]]`],
          correctAnswer: `[[can't have|no puede haber]]`,
          acceptableAnswers: [`[[can't have|no puede haber]]`],
          explanation:
            'Imposibilidad: si lo usa diariamente, es muy improbable que lo haya olvidado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g16',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[must have|debe haber]] para deducciones fuertes',
      questions: [
        {
          id: 'g16-q1',
          type: 'fill-blank',
          question:
            "[[The investors ____ been impressed. They've decided to increase their funding.|Los inversores ____ deben haberse quedado impresionados. Han decidido aumentar su financiación.]]",
          options: [`[[must have|deben haber]]`, `[[might have|podrían haber]]`, `[[can't have|no pueden haber]]`],
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
  {
    id: 'b2-u14-l1-g17',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[might have + past participle|might have + participio pasado]]',
      questions: [
        {
          id: 'g17-q1',
          type: 'multiple-choice',
          question:
            '[[The negotiations ____ broken down. Neither side has made any comment.|Las negociaciones ____ podrían haberse roto. Ninguna de las partes ha hecho comentarios.]]',
          options: [`[[might have|podrían haber]]`, `[[must have|deben haber]]`, `[[can't have|no pueden haber]]`],
          correctAnswer: '[[might have|podrían haber]]',
          explanation:
            'Posibilidad: la falta de comentarios sugiere que podrían haberse roto.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u14-l1-g18',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal verbs of deduction',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: `[[Resumen|Resumen]]: [[must have|debe haber]] / [[might have|podría haber]] / [[can't have|no puede haber]]`,
      questions: [
        {
          id: 'g18-q1',
          type: 'fill-blank',
          question:
            '[[The new manager ____ made a good impression. Everyone seems much more motivated now.|El nuevo director ____ debe haber causado buena impresión. Todo el mundo parece mucho más motivado ahora.]]',
          options: [`[[must have|debe haber]]`, `[[might have|podría haber]]`, `[[can't have|no puede haber]]`],
          correctAnswer: `[[must have|debe haber]]`,
          acceptableAnswers: ['[[must have|debe haber]]'],
          explanation:
            'Certeza: la mejora en la motivación indica que el nuevo manager ha causado buena impresión.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
