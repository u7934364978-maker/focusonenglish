/**
 * Unidad 13 B2 — Lección 1: Gramática (Modals: must, have to, need to, needn't)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Grammar|Gramática]]: [[Modals (must, have to, need to, needn\'t)|Modales (must, have to, need to, needn\'t)]]';
const INSTRUCTIONS = 'Elige la opción correcta o completa el espacio con el modal adecuado.';

export const UNIT_13_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u13-l1-g1',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[You ____ pay your bills on time if you want to avoid late fees.|Debes ____ pagar tus facturas a tiempo si quieres evitar recargos por demora.]]',
          options: ['[[must|debe]]', '[[needn\'t|no necesitas]]', '[[don\'t have to|no tienes que]]'],
          correctAnswer: '[[must|debe]]',
          acceptableAnswers: ['[[must|debe]]', '[[have to|tener que]]', '[[need to|necesitar]]'],
          explanation:
            'Obligación fuerte: "must" o "have to" para pagar a tiempo.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g2',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[Employees ____ wear a uniform at this bank. It\'s company policy.|Los empleados ____ deben llevar uniforme en este banco. Es política de la empresa.]]',
          options: ['[[must|deben]]', '[[needn\'t|no necesitan]]', '[[don\'t need to|no necesitan]]'],
          correctAnswer: '[[must|deben]]',
          explanation:
            'Obligación externa (norma de la empresa) → "must" o "have to".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g3',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[You ____ worry about the transfer; I\'ve already paid it.|No ____ preocuparte por la transferencia; ya la he pagado.]]',
          options: ['[[needn\'t|no necesitas]]', '[[must|debe]]', '[[have to|tener que]]'],
          correctAnswer: '[[needn\'t|no necesitas]]',
          acceptableAnswers: ['[[needn\'t|no necesitas]]', '[[don\'t need to|no necesitas]]', '[[don\'t have to|no tienes que]]'],
          explanation:
            'Ausencia de necesidad: "needn\'t" o "don\'t need to" cuando ya está hecho.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g4',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[To open a savings account, you ____ provide proof of identity.|Para abrir una cuenta de ahorros, ____ proporcionar prueba de identidad.]]',
          options: ['[[need to|necesitas]]', '[[needn\'t|no necesitas]]', '[[mustn\'t|no debes]]'],
          correctAnswer: '[[need to|necesitas]]',
          explanation:
            'Necesidad: "need to" indica que es necesario para lograr algo.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[We ____ declare any amount under €10,000 at customs.|No ____ declarar ninguna cantidad inferior a 10.000 € en aduanas.]]',
          options: ['[[needn\'t|no necesitamos]]', '[[must|debemos]]', '[[have to|tenemos que]]'],
          correctAnswer: '[[needn\'t|no necesitamos]]',
          acceptableAnswers: ['[[needn\'t|no necesitamos]]', '[[don\'t need to|no necesitamos]]', '[[don\'t have to|no tenemos que]]'],
          explanation:
            'No hay obligación de declarar cantidades menores.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g6',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[Investors ____ do their research before putting money into a new venture.|Los inversores ____ hacer su investigación antes de invertir dinero en un nuevo proyecto.]]',
          options: ['[[must|deben]]', '[[needn\'t|no necesitan]]', '[[don\'t have to|no tienen que]]'],
          correctAnswer: '[[must|deben]]',
          explanation:
            'Consejo fuerte / obligación lógica: "must" o "have to".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g7',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[She ____ work overtime last week because of the audit.|Tuvo que ____ trabajar horas extra la semana pasada por la auditoría.]]',
          options: ['[[had to|tuvo que]]', '[[must|debe]]', '[[need to|necesita]]'],
          correctAnswer: '[[had to|tuvo que]]',
          acceptableAnswers: ['[[had to|tuvo que]]'],
          explanation:
            'Obligación en el pasado: solo "had to" (must no tiene pasado).',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g8',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[You ____ rush. The meeting doesn\'t start until 3 pm.|No ____ apurarte. La reunión no empieza hasta las 15:00.]]',
          options: ['[[needn\'t|no necesitas]]', '[[must|debes]]', '[[have to|tienes que]]'],
          correctAnswer: '[[needn\'t|no necesitas]]',
          explanation:
            'No es necesario apurarse; hay tiempo suficiente.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g9',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[Borrowers ____ repay the loan within 24 months.|Los prestatarios ____ devolver el préstamo en 24 meses.]]',
          options: ['[[must|deben]]', '[[needn\'t|no necesitan]]', '[[don\'t need to|no necesitan]]'],
          correctAnswer: '[[must|deben]]',
          acceptableAnswers: ['[[must|deben]]', '[[have to|tienen que]]', '[[need to|necesitan]]'],
          explanation:
            'Obligación contractual: devolver el préstamo en el plazo acordado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g10',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[If you\'ve already paid, you ____ pay again.|Si ya has pagado, no ____ pagar de nuevo.]]',
          options: ['[[needn\'t|no necesitas]]', '[[must|debes]]', '[[have to|tienes que]]'],
          correctAnswer: '[[needn\'t|no necesitas]]',
          explanation:
            'No hay necesidad de pagar dos veces.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[Taxpayers ____ file their returns by the end of April.|Los contribuyentes ____ presentar sus declaraciones antes de finales de abril.]]',
          options: ['[[must|deben]]', '[[needn\'t|no necesitan]]', '[[don\'t have to|no tienen que]]'],
          correctAnswer: '[[must|deben]]',
          acceptableAnswers: ['[[must|deben]]', '[[have to|tienen que]]', '[[need to|necesitan]]'],
          explanation:
            'Obligación legal: presentar la declaración de impuestos.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g12',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[We ____ book in advance. There are always free tables.|No ____ reservar con antelación. Siempre hay mesas libres.]]',
          options: ['[[needn\'t|no necesitamos]]', '[[must|debemos]]', '[[have to|tenemos que]]'],
          correctAnswer: '[[needn\'t|no necesitamos]]',
          explanation:
            'No es necesario reservar; siempre hay mesas libres.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g13',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[To get a mortgage, you ____ show proof of income.|Para obtener una hipoteca, ____ demostrar prueba de ingresos.]]',
          options: ['[[need to|necesitas]]', '[[needn\'t|no necesitas]]', '[[mustn\'t|no debes]]'],
          correctAnswer: '[[need to|necesitas]]',
          acceptableAnswers: ['[[need to|necesitas]]', '[[must|debes]]', '[[have to|tienes que]]'],
          explanation:
            'Requisito: es necesario demostrar ingresos para una hipoteca.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g14',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[You ____ tell anyone your PIN. Keep it secret.|No ____ decir tu PIN a nadie. Guárdalo en secreto.]]',
          options: ['[[mustn\'t|no debes]]', '[[needn\'t|no necesitas]]', '[[don\'t have to|no tienes que]]'],
          correctAnswer: '[[mustn\'t|no debes]]',
          explanation:
            'Prohibición: "mustn\'t" = no debes, está prohibido.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g15',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[Companies ____ keep accurate financial records by law.|Las empresas ____ mantener registros financieros precisos por ley.]]',
          options: ['[[have to|tienen que]]', '[[needn\'t|no necesitan]]', '[[don\'t need to|no necesitan]]'],
          correctAnswer: '[[have to|tienen que]]',
          acceptableAnswers: ['[[have to|tienen que]]', '[[must|deben]]'],
          explanation:
            'Obligación legal: "have to" es común para normas externas.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g16',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[You ____ bring cash. They accept cards everywhere.|No ____ llevar efectivo. Aceptan tarjetas en todas partes.]]',
          options: ['[[needn\'t|no necesitas]]', '[[must|debes]]', '[[have to|tienes que]]'],
          correctAnswer: '[[needn\'t|no necesitas]]',
          explanation:
            'No es necesario llevar efectivo; aceptan tarjetas.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[Before investing, you ____ understand the risks involved.|Antes de invertir, ____ entender los riesgos.]]',
          options: ['[[need to|necesitas]]', '[[needn\'t|no necesitas]]', '[[mustn\'t|no debes]]'],
          correctAnswer: '[[need to|necesitas]]',
          acceptableAnswers: ['[[need to|necesitas]]', '[[must|debes]]', '[[have to|tienes que]]'],
          explanation:
            'Necesidad de entender los riesgos antes de invertir.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u13-l1-g18',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Modals (must, have to, need to, needn\'t)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[I ____ go to the bank yesterday to sort out my account.|Tuve que ____ ir al banco ayer para arreglar mi cuenta.]]',
          options: ['[[had to|tuve que]]', '[[must|debo]]', '[[need to|necesito]]'],
          correctAnswer: '[[had to|tuve que]]',
          explanation:
            'Obligación en pasado: "had to" (must no tiene forma de pasado).',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
