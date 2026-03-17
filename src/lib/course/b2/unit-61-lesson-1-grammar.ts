/**
 * Unidad 61 B2 — Lección 1: Gramática (Grammar Boost B2+: Modal Deduction & Advanced Conditionals)
 * 18 ejercicios (B2+: modales de deducción y condicionales avanzados/mixtos)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Grammar|Gramática]]: [[Grammar Boost B2+: Modal Deduction & Advanced Conditionals|Refuerzo B2+: Modales de deducción y condicionales avanzados]]';
const INSTRUCTIONS = 'Completa o elige la opción correcta con modales de deducción y condicionales avanzados.';

export const UNIT_61_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u61-l1-g1',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[She|Ella]] ____ ____ [[at home|en casa]] — [[the lights|las luces]] [[are off|están apagadas]] [[and her car isn\'t there|y su coche no está]].',
          options: [
            '[[can\'t be|no puede estar]]',
            '[[must be|debe estar]]',
            '[[might be|podría estar]]',
          ],
          correctAnswer: 'can\'t be',
          acceptableAnswers: ["can't be"],
          explanation: '[[Can\'t be for negative deduction in the present|Can\'t be para deducción negativa en presente]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[He|Él]] ____ ____ ____ [[the email|el correo]] — [[he replied immediately|respondió inmediatamente]].',
          options: [
            '[[must have read|debe haber leído]]',
            '[[might read|podría leer]]',
            '[[can\'t have read|no puede haber leído]]',
          ],
          correctAnswer: 'must have read',
          acceptableAnswers: ['must have read'],
          explanation: '[[Must have + past participle for past deduction|Must have + participio para deducción en pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g3',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[They|Ellos]] ____ ____ ____ [[the train|el tren]] — [[it\'s still early|todavía es pronto]].',
          options: [
            '[[might catch|podrían coger]]',
            '[[must catch|deben coger]]',
            '[[can\'t catch|no pueden coger]]',
          ],
          correctAnswer: 'might catch',
          acceptableAnswers: ['might catch'],
          explanation: '[[Might for possibility|Might para posibilidad]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g4',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[If you had told me|Si me lo hubieras dicho]] [[earlier|antes]], [[I|yo]] ____ ____ ____ [[you|a ti]].',
          options: [
            '[[would have helped|te habría ayudado]]',
            '[[will help|te ayudaré]]',
            '[[helped|ayudé]]',
          ],
          correctAnswer: 'would have helped',
          acceptableAnswers: ['would have helped'],
          explanation: '[[Third conditional|Tercer condicional: If + past perfect, would have + participle]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[If she studied more|Si ella estudiara más]], [[she|ella]] ____ ____ [[better grades|mejores notas]].',
          options: [
            '[[would get|sacaría]]',
            '[[would have got|habría sacado]]',
            '[[gets|saca]]',
          ],
          correctAnswer: 'would get',
          acceptableAnswers: ['would get'],
          explanation: '[[Second conditional|Segundo condicional: If + past simple, would + infinitive]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g6',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[If he hadn\'t moved abroad|Si él no se hubiera mudado al extranjero]], [[he|él]] ____ ____ ____ [[a different career|una carrera diferente]] [[now|ahora]].',
          options: [
            '[[wouldn\'t have|no habría tenido]]',
            '[[wouldn\'t have had|no habría tenido]]',
            '[[won\'t have|no tendrá]]',
          ],
          correctAnswer: 'wouldn\'t have had',
          acceptableAnswers: ["wouldn't have had"],
          explanation: '[[Mixed conditional result in the present|Condicional mixto con resultado en el presente]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g7',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[They left the office very late|Se fueron de la oficina muy tarde]]. It ____ ____ ____ a busy day.',
          options: [
            '[[must have been|debe haber sido]]',
            '[[might be|podría ser]]',
            '[[can\'t have been|no puede haber sido]]',
          ],
          correctAnswer: 0,
          explanation: '[[Must have for strong deduction about the past|Must have para deducción fuerte sobre el pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g8',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[I can\'t find my keys|No encuentro mis llaves]]. They ____ ____ ____ in the car.',
          options: [
            '[[might have left|podría haber dejado]]',
            '[[might have been left|podrían haber sido dejadas]]',
            '[[might have been|podría haber sido]]',
          ],
          correctAnswer: 1,
          explanation: '[[Passive modal|Modal en pasiva: might have been left]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g9',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[If you\'d listened to my advice|Si hubieras escuchado mi consejo]], you ____ ____ ____ the problem.',
          options: [
            '[[would have avoided|habrías evitado]]',
            '[[will avoid|evitarás]]',
            '[[avoided|evitaste]]',
          ],
          correctAnswer: 0,
          explanation: '[[Third conditional rephrasing|Reexpresión en tercer condicional]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g10',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: 'If I ____ more confident, I ____ ____ my own business.',
          options: [
            '[[were / would start|fuera / empezaría]]',
            '[[was / will start|era / empezaré]]',
            '[[had been / would start|hubiera sido / empezaría]]',
          ],
          correctAnswer: 0,
          explanation: '[[Second conditional with unreal present|Segundo condicional con presente irreal]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[You look tired|Pareces cansado]]. You ____ ____ ____ [[to bed|a la cama]] [[earlier|más temprano]].',
          options: [
            '[[should have gone|deberías haberte ido]]',
            '[[should go|deberías ir]]',
            '[[must have gone|debes haber ido]]',
          ],
          correctAnswer: 'should have gone',
          acceptableAnswers: ['should have gone'],
          explanation: '[[Should have + participle for past advice|Should have + participio para consejo en el pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g12',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[If we hadn\'t missed the flight|Si no hubiéramos perdido el vuelo]], we ____ ____ ____ [[so stressed|tan estresados]] [[now|ahora]].',
          options: [
            '[[wouldn\'t be|no estaríamos]]',
            '[[wouldn\'t have been|no habríamos estado]]',
            '[[aren\'t|no estamos]]',
          ],
          correctAnswer: 'wouldn\'t be',
          acceptableAnswers: ["wouldn't be"],
          explanation: '[[Mixed conditional: past condition, present result|Condicional mixto: condición pasada, resultado presente]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g13',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: 'He ____ ____ the report. It\'s full of mistakes.',
          options: [
            '[[can\'t have checked|no puede haber revisado]]',
            '[[must have checked|debe haber revisado]]',
            '[[might have checked|podría haber revisado]]',
          ],
          correctAnswer: 0,
          explanation: '[[Can\'t have + participle for negative deduction in the past|Can\'t have + participio para deducción negativa en el pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g14',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: 'If I ____ you, I ____ ____ the exam again.',
          options: [
            '[[were / would take|fuera / me presentaría]]',
            '[[am / will take|soy / me presentaré]]',
            '[[had been / would have taken|hubiera sido / me habría presentado]]',
          ],
          correctAnswer: 0,
          explanation: '[[Second conditional with If I were you|Segundo condicional con If I were you]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g15',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[It\'s strange the lights are on|Es raro que las luces estén encendidas]]. They ____ ____ ____ [[the office|la oficina]].',
          options: [
            '[[might still be in|podrían seguir en]]',
            '[[must have been in|deben haber estado en]]',
            '[[can\'t be in|no pueden estar en]]',
          ],
          correctAnswer: 'might still be in',
          acceptableAnswers: ['might still be in'],
          explanation: '[[Might for present possibility|Might para posibilidad en presente]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g16',
    type: 'fill-blank',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question:
            '[[If technology weren\'t so advanced|Si la tecnología no fuera tan avanzada]], many jobs ____ ____ [[much harder|mucho más difíciles]].',
          options: [
            '[[would be|serían]]',
            '[[would have been|habrían sido]]',
            '[[are|son]]',
          ],
          correctAnswer: 'would be',
          acceptableAnswers: ['would be'],
          explanation: '[[Second conditional hypothetical present|Segundo condicional con presente hipotético]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g17',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: 'You ____ ____ ____ him. He moved abroad years ago.',
          options: [
            '[[can\'t have seen|no puedes haberlo visto]]',
            '[[must have seen|debes haberlo visto]]',
            '[[might have seen|podrías haberlo visto]]',
          ],
          correctAnswer: 0,
          explanation: '[[Can\'t have for impossible past events|Can\'t have para eventos imposibles en el pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u61-l1-g18',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'grammar-boost-b2-plus',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: 'If we ____ earlier, we ____ ____ the beginning of the conference.',
          options: [
            '[[had left / wouldn\'t have missed|hubiéramos salido / no nos habríamos perdido]]',
            '[[left / wouldn\'t miss|salimos / no nos perderíamos]]',
            '[[leave / won\'t miss|salimos / no nos perderemos]]',
          ],
          correctAnswer: 0,
          explanation: '[[Third conditional about missed opportunities|Tercer condicional sobre oportunidades perdidas]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];

