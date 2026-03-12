/**
 * Unidad 14 B2 — Lección 1: Gramática (Modal verbs of deduction: must have, might have, can't have)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE =
  '[[Grammar|Gramática]]: [[Modal verbs of deduction|Modal verbs of deduction]]';
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
      grammarPoint: 'must have + past participle = certeza en el pasado',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            'The CEO ____ received the report by now. I sent it to her email an hour ago.',
          options: ['must have', 'might have', "can't have"],
          correctAnswer: 'must have',
          acceptableAnswers: ['must have'],
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
      grammarPoint: "can't have + past participle = imposibilidad en el pasado",
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            'She ____ missed the meeting. I saw her in the conference room at 9 am.',
          options: ["can't have", 'must have', 'might have'],
          correctAnswer: "can't have",
          acceptableAnswers: ["can't have"],
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
      grammarPoint: 'might have + past participle = posibilidad en el pasado',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            'The deal ____ fallen through. They haven\'t responded to our emails for a week.',
          options: ['might have', 'must have', "can't have"],
          correctAnswer: 'might have',
          acceptableAnswers: ['might have', 'may have'],
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
      grammarPoint: 'must have para deducciones lógicas',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            'The company\'s profits have doubled this quarter. They ____ made some excellent investment decisions.',
          options: ['must have', 'might have', "can't have"],
          correctAnswer: 'must have',
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
      grammarPoint: "can't have para imposibilidad",
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            'He ____ forgotten about the presentation. He prepared it for three weeks.',
          options: ["can't have", 'must have', 'might have'],
          correctAnswer: "can't have",
          acceptableAnswers: ["can't have"],
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
      grammarPoint: 'might have para incertidumbre',
      questions: [
        {
          id: 'g6-q1',
          type: 'fill-blank',
          question:
            'The client ____ changed their mind. They were very positive last week.',
          options: ['might have', 'must have', "can't have"],
          correctAnswer: 'might have',
          acceptableAnswers: ['might have', 'may have'],
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
      grammarPoint: 'must have + past participle',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            'Someone ____ left the office door open. All the documents are scattered on the floor.',
          options: ['must have', 'might have', "can't have"],
          correctAnswer: 'must have',
          acceptableAnswers: ['must have'],
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
      grammarPoint: 'may have como alternativa a might have',
      questions: [
        {
          id: 'g8-q1',
          type: 'multiple-choice',
          question:
            'The merger ____ been delayed. We haven\'t received any official confirmation yet.',
          options: ['may have', 'must have', "can't have"],
          correctAnswer: 'may have',
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
      grammarPoint: "can't have + past participle",
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            'They ____ signed the contract yet. The lawyers are still reviewing the terms.',
          options: ["can't have", 'must have', 'might have'],
          correctAnswer: "can't have",
          acceptableAnswers: ["can't have"],
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
      grammarPoint: 'must have para conclusiones lógicas',
      questions: [
        {
          id: 'g10-q1',
          type: 'fill-blank',
          question:
            'The sales team ____ exceeded their targets. They\'re celebrating in the office.',
          options: ['must have', 'might have', "can't have"],
          correctAnswer: 'must have',
          acceptableAnswers: ['must have'],
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
      grammarPoint: 'might have + past participle',
      questions: [
        {
          id: 'g11-q1',
          type: 'multiple-choice',
          question:
            'The budget ____ been approved. I\'m not sure if the board has met yet.',
          options: ['might have', 'must have', "can't have"],
          correctAnswer: 'might have',
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
      grammarPoint: "can't have para deducciones negativas",
      questions: [
        {
          id: 'g12-q1',
          type: 'fill-blank',
          question:
            'She ____ resigned. She\'s the most dedicated employee we have.',
          options: ["can't have", 'must have', 'might have'],
          correctAnswer: "can't have",
          acceptableAnswers: ["can't have"],
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
      grammarPoint: 'must have + past participle',
      questions: [
        {
          id: 'g13-q1',
          type: 'fill-blank',
          question:
            'The competitor ____ launched a new product. Their market share has increased significantly.',
          options: ['must have', 'might have', "can't have"],
          correctAnswer: 'must have',
          acceptableAnswers: ['must have'],
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
      grammarPoint: 'might have para incertidumbre',
      questions: [
        {
          id: 'g14-q1',
          type: 'multiple-choice',
          question:
            'The shipment ____ arrived at the warehouse. The tracking system is down.',
          options: ['might have', 'must have', "can't have"],
          correctAnswer: 'might have',
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
      grammarPoint: "can't have + past participle",
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            'He ____ forgotten the password. He uses it every single day.',
          options: ["can't have", 'must have', 'might have'],
          correctAnswer: "can't have",
          acceptableAnswers: ["can't have"],
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
      grammarPoint: 'must have para deducciones fuertes',
      questions: [
        {
          id: 'g16-q1',
          type: 'fill-blank',
          question:
            'The investors ____ been impressed. They\'ve decided to increase their funding.',
          options: ['must have', 'might have', "can't have"],
          correctAnswer: 'must have',
          acceptableAnswers: ['must have'],
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
      grammarPoint: 'might have + past participle',
      questions: [
        {
          id: 'g17-q1',
          type: 'multiple-choice',
          question:
            'The negotiations ____ broken down. Neither side has made any comment.',
          options: ['might have', 'must have', "can't have"],
          correctAnswer: 'might have',
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
      grammarPoint: 'Resumen: must have / might have / can\'t have',
      questions: [
        {
          id: 'g18-q1',
          type: 'fill-blank',
          question:
            'The new manager ____ made a good impression. Everyone seems much more motivated now.',
          options: ['must have', 'might have', "can't have"],
          correctAnswer: 'must have',
          acceptableAnswers: ['must have'],
          explanation:
            'Certeza: la mejora en la motivación indica que el nuevo manager ha causado buena impresión.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
