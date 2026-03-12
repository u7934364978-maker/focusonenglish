/**
 * Unidad 17 B2 — Lección 1: Gramática (Modal passive, have something done)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE =
  '[[Grammar|Gramática]]: [[Modal passive, have something done|Pasiva modal, tener algo hecho]]';
const INSTRUCTIONS =
  'Elige la forma correcta de modal passive (must be done, should have been done) o have something done.';

export const UNIT_17_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u17-l1-g1',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[must be|debe ser]] + [[past participle|participio pasado]] = obligación en presente',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            '[[All samples|Todas las muestras]] ____ [[before|antes de]] [[they can be used|puedan usarse]] [[in the experiment|en el experimento]].',
          options: ['[[must be tested|deben ser probadas]]', '[[must have been tested|deberían haber sido probadas]]', '[[must be testing|deben estar probando]]'],
          correctAnswer: '[[must be tested|deben ser probadas]]',
          acceptableAnswers: ['[[must be tested|deben ser probadas]]'],
          explanation:
            'Obligación: las muestras deben ser probadas antes de usarlas. Modal passive en presente.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g2',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[should have been|debería haber sido]] + [[past participle|participio pasado]] = crítica sobre el pasado',
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            '[[The results|Los resultados]] ____ [[earlier|antes]]. [[We lost valuable time|Perdimos tiempo valioso]] [[because of the delay|por el retraso]].',
          options: [
            '[[should have been published|deberían haberse publicado]]',
            '[[should be published|deberían publicarse]]',
            '[[should have published|deberían haber publicado]]',
          ],
          correctAnswer: '[[should have been published|deberían haberse publicado]]',
          acceptableAnswers: ['[[should have been published|deberían haberse publicado]]'],
          explanation:
            'Crítica sobre el pasado: los resultados debieron publicarse antes.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g3',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[have something done|tener algo hecho]] = hacer que alguien haga algo por ti',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            '[[We|Nosotros]] ____ [[the equipment|el equipo]] [[serviced|revisado]] [[by a specialist|por un especialista]] [[last month|el mes pasado]].',
          options: ['[[had|hicimos]]', '[[have|tenemos]]', '[[got|conseguimos]]'],
          correctAnswer: '[[had|hicimos]]',
          acceptableAnswers: ['[[had|hicimos]]', '[[got|conseguimos]]'],
          explanation:
            'Have something done: "had the equipment serviced" = hicimos que un especialista lo revisara.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g4',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[can be|puede ser]] + [[past participle|participio pasado]] = posibilidad en pasiva',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            '[[The hypothesis|La hipótesis]] ____ [[with further research|con más investigación]].',
          options: [
            '[[can be verified|puede ser verificada]]',
            '[[can verify|puede verificar]]',
            '[[can be verifying|puede estar verificando]]',
          ],
          correctAnswer: '[[can be verified|puede ser verificada]]',
          explanation:
            'Posibilidad pasiva: la hipótesis puede ser verificada con más investigación.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g5',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[have something done|tener algo hecho]] en presente',
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            '[[The lab|El laboratorio]] ____ [[its air filters|sus filtros de aire]] [[replaced|reemplazados]] [[every six months|cada seis meses]].',
          options: ['[[has|hace]]', '[[have|tienen]]', '[[gets|consigue]]'],
          correctAnswer: '[[has|hace]]',
          acceptableAnswers: ['[[has|hace]]', '[[gets|consigue]]'],
          explanation:
            'Have something done: "has its air filters replaced" = hace que le reemplacen los filtros.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g6',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[might have been|podría haber sido]] + [[past participle|participio pasado]] = posibilidad en pasado',
      questions: [
        {
          id: 'g6-q1',
          type: 'fill-blank',
          question:
            '[[The data|Los datos]] ____ [[incorrectly|incorrectamente]]. [[We need to run the analysis again|Necesitamos ejecutar el análisis de nuevo]].',
          options: [
            '[[might have been recorded|podrían haberse registrado]]',
            '[[might be recorded|podrían registrarse]]',
            '[[might have recorded|podrían haber registrado]]',
          ],
          correctAnswer: '[[might have been recorded|podrían haberse registrado]]',
          acceptableAnswers: ['[[might have been recorded|podrían haberse registrado]]'],
          explanation:
            'Posibilidad en pasado: es posible que los datos se hayan registrado mal.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g7',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[ought to have been|debería haber sido]] + [[past participle|participio pasado]]',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            '[[The safety protocols|Los protocolos de seguridad]] ____ [[before the experiment started|antes de que empezara el experimento]].',
          options: [
            '[[ought to have been reviewed|deberían haberse revisado]]',
            '[[ought to be reviewed|deberían revisarse]]',
            '[[ought to have reviewed|deberían haber revisado]]',
          ],
          correctAnswer: '[[ought to have been reviewed|deberían haberse revisado]]',
          acceptableAnswers: ['[[ought to have been reviewed|deberían haberse revisado]]'],
          explanation:
            'Obligación incumplida en el pasado: los protocolos debieron revisarse antes.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g8',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[have something done|tener algo hecho]] (futuro)',
      questions: [
        {
          id: 'g8-q1',
          type: 'multiple-choice',
          question:
            "[[We're going to|Vamos a]] ____ [[the samples|las muestras]] [[analysed|analizadas]] [[at an independent lab|en un laboratorio independiente]].",
          options: [
            '[[have|hacer]]',
            '[[make|hacer que]]',
            '[[let|dejar]]',
          ],
          correctAnswer: '[[have|hacer]]',
          explanation:
            'Have something done: "have the samples analysed" = hacer que analicen las muestras.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g9',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[need to be|necesitan ser]] + [[past participle|participio pasado]]',
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            '[[These chemicals|Estos productos químicos]] ____ [[in a secure container|en un contenedor seguro]].',
          options: [
            '[[need to be stored|necesitan ser almacenados]]',
            '[[need to store|necesitan almacenar]]',
            '[[need being stored|necesitan estar almacenados]]',
          ],
          correctAnswer: '[[need to be stored|necesitan ser almacenados]]',
          acceptableAnswers: ['[[need to be stored|necesitan ser almacenados]]'],
          explanation:
            'Necesidad pasiva: los productos químicos necesitan ser almacenados de forma segura.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g10',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[could have been|podría haber sido]] + [[past participle|participio pasado]]',
      questions: [
        {
          id: 'g10-q1',
          type: 'fill-blank',
          question:
            '[[The breakthrough|El avance]] ____ [[years ago|hace años]] [[if we had had better funding|si hubiéramos tenido mejor financiación]].',
          options: [
            '[[could have been achieved|podría haberse logrado]]',
            '[[could be achieved|podría lograrse]]',
            '[[could have achieved|podría haber logrado]]',
          ],
          correctAnswer: '[[could have been achieved|podría haberse logrado]]',
          acceptableAnswers: ['[[could have been achieved|podría haberse logrado]]'],
          explanation:
            'Posibilidad no realizada en el pasado: el avance podría haberse logrado antes.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g11',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[get something done|conseguir algo hecho]] (alternativa informal)',
      questions: [
        {
          id: 'g11-q1',
          type: 'multiple-choice',
          question:
            "[[I need to|Necesito]] ____ [[my laptop|mi portátil]] [[repaired|reparado]]. [[The battery doesn't hold a charge|La batería no mantiene la carga]].",
          options: [
            '[[get|conseguir]]',
            '[[make|hacer que]]',
            '[[let|dejar]]',
          ],
          correctAnswer: '[[get|conseguir]]',
          explanation:
            '"Get something done" es similar a "have something done": hacer que reparen el portátil.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g12',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[must have been|debió haber sido]] + [[past participle|participio pasado]]',
      questions: [
        {
          id: 'g12-q1',
          type: 'fill-blank',
          question:
            '[[The specimen|La muestra]] ____ [[under controlled conditions|bajo condiciones controladas]]. [[The results are too consistent|Los resultados son demasiado consistentes]].',
          options: [
            '[[must have been preserved|debió haberse preservado]]',
            '[[must be preserved|debe preservarse]]',
            '[[must have preserved|debió haber preservado]]',
          ],
          correctAnswer: '[[must have been preserved|debió haberse preservado]]',
          acceptableAnswers: ['[[must have been preserved|debió haberse preservado]]'],
          explanation:
            'Deducción en pasado: los resultados indican que la muestra debió preservarse correctamente.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g13',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[should be|debería ser]] + [[past participle|participio pasado]]',
      questions: [
        {
          id: 'g13-q1',
          type: 'fill-blank',
          question:
            '[[All findings|Todos los hallazgos]] ____ [[in a peer-reviewed journal|en una revista revisada por pares]].',
          options: [
            '[[should be published|deberían publicarse]]',
            '[[should have been published|deberían haberse publicado]]',
            '[[should publish|deberían publicar]]',
          ],
          correctAnswer: '[[should be published|deberían publicarse]]',
          acceptableAnswers: ['[[should be published|deberían publicarse]]'],
          explanation:
            'Recomendación en presente: los hallazgos deberían publicarse en una revista revisada.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g14',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[have something done|tener algo hecho]] (negativo)',
      questions: [
        {
          id: 'g14-q1',
          type: 'multiple-choice',
          question:
            "[[We haven't|No hemos]] ____ [[the software|el software]] [[updated|actualizado]] [[yet|todavía]]. [[It's still running the old version|Sigue ejecutando la versión antigua]].",
          options: [
            '[[had|hecho]]',
            '[[have|tenemos]]',
            '[[got|conseguido]]',
          ],
          correctAnswer: '[[had|hecho]]',
          explanation:
            'Have something done en presente perfecto negativo: no hemos hecho que actualicen el software.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g15',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[may have been|puede haber sido]] + [[past participle|participio pasado]]',
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            "[[The contamination|La contaminación]] ____ [[during the transfer|durante el traslado]]. [[We're investigating|Estamos investigando]].",
          options: [
            '[[may have been introduced|puede haberse introducido]]',
            '[[may be introduced|puede introducirse]]',
            '[[may have introduced|puede haber introducido]]',
          ],
          correctAnswer: '[[may have been introduced|puede haberse introducido]]',
          acceptableAnswers: ['[[may have been introduced|puede haberse introducido]]'],
          explanation:
            'Posibilidad en pasado: la contaminación pudo haberse introducido durante el traslado.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g16',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[have to be|tienen que ser]] + [[past participle|participio pasado]]',
      questions: [
        {
          id: 'g16-q1',
          type: 'fill-blank',
          question:
            '[[All procedures|Todos los procedimientos]] ____ [[by the ethics committee|por el comité de ética]] [[before we can proceed|antes de poder continuar]].',
          options: [
            '[[have to be approved|tienen que ser aprobados]]',
            '[[have to approve|tienen que aprobar]]',
            '[[have to been approved|tienen que haber sido aprobados]]',
          ],
          correctAnswer: '[[have to be approved|tienen que ser aprobados]]',
          acceptableAnswers: ['[[have to be approved|tienen que ser aprobados]]'],
          explanation:
            'Obligación externa: los procedimientos tienen que ser aprobados por el comité.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g17',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[have something done|tener algo hecho]] (pregunta)',
      questions: [
        {
          id: 'g17-q1',
          type: 'multiple-choice',
          question:
            '[[How often do you|¿Con qué frecuencia]] ____ [[your lab equipment|tu equipo de laboratorio]] [[calibrated|calibrado]]?',
          options: [
            '[[have|haces]]',
            '[[make|haces que]]',
            '[[let|dejas]]',
          ],
          correctAnswer: '[[have|haces]]',
          explanation:
            'Have something done en pregunta: ¿con qué frecuencia haces calibrar el equipo?',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u17-l1-g18',
    type: 'grammar',
    level: 'B2',
    topic: 'Modal passive, have something done',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Resumen: [[modal passive|pasiva modal]] y [[have something done|tener algo hecho]]',
      questions: [
        {
          id: 'g18-q1',
          type: 'fill-blank',
          question:
            '[[The research|La investigación]] ____ [[by next Friday|para el próximo viernes]]. [[The deadline is strict|La fecha límite es estricta]].',
          options: [
            '[[must be completed|debe completarse]]',
            '[[must have been completed|debió haberse completado]]',
            '[[must complete|debe completar]]',
          ],
          correctAnswer: '[[must be completed|debe completarse]]',
          acceptableAnswers: ['[[must be completed|debe completarse]]'],
          explanation:
            'Obligación en presente/futuro: la investigación debe completarse antes del viernes.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
