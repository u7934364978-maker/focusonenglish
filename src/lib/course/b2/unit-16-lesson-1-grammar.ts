/**
 * Unidad 16 B2 — Lección 1: Gramática (Passive: all tenses)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Grammar|Gramática]]: [[Passive (all tenses)|Pasiva (todos los tiempos)]]';
const INSTRUCTIONS =
  'Elige la forma pasiva correcta según el tiempo verbal indicado.';

export const UNIT_16_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u16-l1-g1',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Present simple passive|Pasiva en presente simple]]',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            '[[Millions of emails|Millones de correos]] ____ [[every day|cada día]].',
          options: ['[[are sent|son enviados]]', '[[is sent|es enviado]]', '[[send|enviar]]'],
          correctAnswer: '[[are sent|son enviados]]',
          acceptableAnswers: ['[[are sent|son enviados]]'],
          explanation:
            '[[Present simple passive|Pasiva en presente simple]]: [[be + past participle|be + participio pasado]]. "Emails" es plural → "are sent".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g2',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Past simple passive|Pasiva en pasado simple]]',
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            '[[The first smartphone|El primer smartphone]] ____ [[in 2007|en 2007]].',
          options: ['[[was released|fue lanzado]]', '[[were released|fueron lanzados]]', '[[released|lanzó]]'],
          correctAnswer: '[[was released|fue lanzado]]',
          acceptableAnswers: ['[[was released|fue lanzado]]'],
          explanation:
            '[[Past simple passive|Pasiva en pasado simple]]: was/were + past participle. "Smartphone" es singular → "was released".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g3',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Present continuous passive|Pasiva en presente continuo]]',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            '[[A new app|Una nueva app]] ____ [[by our team|por nuestro equipo]] [[at the moment|en este momento]].',
          options: ['[[is being developed|está siendo desarrollada]]', '[[is developed|es desarrollada]]', '[[develops|desarrolla]]'],
          correctAnswer: '[[is being developed|está siendo desarrollada]]',
          acceptableAnswers: ['[[is being developed|está siendo desarrollada]]'],
          explanation:
            '[[Present continuous passive|Pasiva en presente continuo]]: am/is/are + being + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g4',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Present perfect passive|Pasiva en presente perfecto]]',
      questions: [
        {
          id: 'g4-q1',
          type: 'fill-blank',
          question:
            '[[The software|El software]] ____ [[by thousands of users|por miles de usuarios]] [[since its launch|desde su lanzamiento]].',
          options: ['[[has been downloaded|ha sido descargado]]', '[[have been downloaded|han sido descargados]]', '[[was downloaded|fue descargado]]'],
          correctAnswer: '[[has been downloaded|ha sido descargado]]',
          acceptableAnswers: ['[[has been downloaded|ha sido descargado]]'],
          explanation:
            '[[Present perfect passive|Pasiva en presente perfecto]]: has/have + been + past participle. "Software" es singular → "has been".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g5',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Future passive|Pasiva en futuro]]',
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            '[[The new feature|La nueva función]] ____ [[in the next update|en la próxima actualización]].',
          options: ['[[will be included|será incluida]]', '[[will include|incluirá]]', '[[is included|está incluida]]'],
          correctAnswer: '[[will be included|será incluida]]',
          acceptableAnswers: ['[[will be included|será incluida]]'],
          explanation:
            '[[Future passive|Pasiva en futuro]]: will + be + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g6',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Past perfect passive|Pasiva en pasado perfecto]]',
      questions: [
        {
          id: 'g6-q1',
          type: 'fill-blank',
          question:
            '[[The data|Los datos]] ____ [[before the server crashed|antes de que el servidor fallara]].',
          options: ['[[had been backed up|habían sido respaldados]]', '[[has been backed up|han sido respaldados]]', '[[was backed up|fue respaldado]]'],
          correctAnswer: '[[had been backed up|habían sido respaldados]]',
          acceptableAnswers: ['[[had been backed up|habían sido respaldados]]'],
          explanation:
            '[[Past perfect passive|Pasiva en pasado perfecto]]: had + been + past participle (acción anterior a otra en el pasado).',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g7',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Present simple passive|Pasiva en presente simple]]',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            '[[Personal information|La información personal]] ____ [[securely|de forma segura]] [[on our servers|en nuestros servidores]].',
          options: ['[[is stored|se almacena]]', '[[are stored|se almacenan]]', '[[stores|almacena]]'],
          correctAnswer: '[[is stored|se almacena]]',
          acceptableAnswers: ['[[is stored|se almacena]]'],
          explanation:
            '"Information" es incontable → singular → "is stored".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g8',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Past continuous passive|Pasiva en pasado continuo]]',
      questions: [
        {
          id: 'g8-q1',
          type: 'fill-blank',
          question:
            '[[The website|El sitio web]] ____ [[when we tried to access it yesterday|cuando intentamos acceder ayer]].',
          options: ['[[was being updated|estaba siendo actualizado]]', '[[was updated|fue actualizado]]', '[[is being updated|está siendo actualizado]]'],
          correctAnswer: '[[was being updated|estaba siendo actualizado]]',
          acceptableAnswers: ['[[was being updated|estaba siendo actualizado]]'],
          explanation:
            '[[Past continuous passive|Pasiva en pasado continuo]]: was/were + being + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g9',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Present perfect passive|Pasiva en presente perfecto]]',
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            '[[Many jobs|Muchos empleos]] ____ [[by automation|por la automatización]] [[in recent years|en los últimos años]].',
          options: ['[[have been replaced|han sido reemplazados]]', '[[has been replaced|ha sido reemplazado]]', '[[were replaced|fueron reemplazados]]'],
          correctAnswer: '[[have been replaced|han sido reemplazados]]',
          acceptableAnswers: ['[[have been replaced|han sido reemplazados]]'],
          explanation:
            '"Jobs" es plural → "have been replaced". "In recent years" indica present perfect.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g10',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Future passive with going to|Pasiva en futuro con going to]]',
      questions: [
        {
          id: 'g10-q1',
          type: 'fill-blank',
          question:
            '[[The old system|El sistema antiguo]] ____ [[by a more efficient one|por uno más eficiente]] [[next month|el próximo mes]].',
          options: ['[[is going to be replaced|va a ser reemplazado]]', '[[is going to replace|va a reemplazar]]', '[[will replace|reemplazará]]'],
          correctAnswer: '[[is going to be replaced|va a ser reemplazado]]',
          acceptableAnswers: ['[[is going to be replaced|va a ser reemplazado]]'],
          explanation:
            '[[Future passive|Pasiva en futuro]]: is/are + going to + be + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g11',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Past simple passive|Pasiva en pasado simple]]',
      questions: [
        {
          id: 'g11-q1',
          type: 'fill-blank',
          question:
            '[[The first computer virus|El primer virus informático]] ____ [[in 1986|en 1986]].',
          options: ['[[was created|fue creado]]', '[[was create|incorrecto]]', '[[created|creó]]'],
          correctAnswer: '[[was created|fue creado]]',
          acceptableAnswers: ['[[was created|fue creado]]'],
          explanation:
            '[[Past simple passive|Pasiva en pasado simple]]: was + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g12',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Present simple passive|Pasiva en presente simple]]',
      questions: [
        {
          id: 'g12-q1',
          type: 'fill-blank',
          question:
            '[[Updates|Las actualizaciones]] ____ [[automatically|automáticamente]] [[every night|cada noche]].',
          options: ['[[are installed|se instalan]]', '[[is installed|se instala]]', '[[install|instalan]]'],
          correctAnswer: '[[are installed|se instalan]]',
          acceptableAnswers: ['[[are installed|se instalan]]'],
          explanation:
            '"Updates" es plural → "are installed".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g13',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Present perfect passive|Pasiva en presente perfecto]]',
      questions: [
        {
          id: 'g13-q1',
          type: 'fill-blank',
          question:
            '[[The bug|El error]] ____ [[by our developers|por nuestros desarrolladores]]. [[You can use the app now|Ya puedes usar la app]].',
          options: ['[[has been fixed|ha sido corregido]]', '[[have been fixed|han sido corregidos]]', '[[was fixed|fue corregido]]'],
          correctAnswer: '[[has been fixed|ha sido corregido]]',
          acceptableAnswers: ['[[has been fixed|ha sido corregido]]'],
          explanation:
            '[[Present perfect|Presente perfecto]]: resultado reciente (ya puedes usar la app).',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g14',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Past simple passive|Pasiva en pasado simple]]',
      questions: [
        {
          id: 'g14-q1',
          type: 'fill-blank',
          question:
            '[[The internet|Internet]] ____ [[for military purposes|con fines militares]] [[in the 1960s|en los años 60]].',
          options: ['[[was developed|fue desarrollado]]', '[[was develop|forma incorrecta]]', '[[developed|desarrolló]]'],
          correctAnswer: '[[was developed|fue desarrollado]]',
          acceptableAnswers: ['[[was developed|fue desarrollado]]'],
          explanation:
            '[[Past simple passive|Pasiva en pasado simple]]: was + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g15',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Present continuous passive|Pasiva en presente continuo]]',
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            '[[Your password|Tu contraseña]] ____. [[Please wait a moment|Por favor espera un momento]].',
          options: ['[[is being reset|está siendo restablecida]]', '[[is reset|está restablecida]]', '[[resets|restablece]]'],
          correctAnswer: '[[is being reset|está siendo restablecida]]',
          acceptableAnswers: ['[[is being reset|está siendo restablecida]]'],
          explanation:
            '[[Present continuous passive|Pasiva en presente continuo]]: acción en curso ahora.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g16',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Future passive|Pasiva en futuro]]',
      questions: [
        {
          id: 'g16-q1',
          type: 'fill-blank',
          question:
            '[[The new devices|Los nuevos dispositivos]] ____ [[to customers|a los clientes]] [[by the end of the year|a finales de año]].',
          options: ['[[will be delivered|serán entregados]]', '[[will deliver|entregarán]]', '[[are delivered|son entregados]]'],
          correctAnswer: '[[will be delivered|serán entregados]]',
          acceptableAnswers: ['[[will be delivered|serán entregados]]'],
          explanation:
            '[[Future passive|Pasiva en futuro]]: will + be + past participle.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g17',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Past perfect passive|Pasiva en pasado perfecto]]',
      questions: [
        {
          id: 'g17-q1',
          type: 'fill-blank',
          question:
            '[[The files|Los archivos]] ____ [[by the time we realised the problem|para cuando nos dimos cuenta del problema]].',
          options: ['[[had already been deleted|ya habían sido eliminados]]', '[[have already been deleted|ya han sido eliminados]]', '[[were already deleted|ya fueron eliminados]]'],
          correctAnswer: '[[had already been deleted|ya habían sido eliminados]]',
          acceptableAnswers: ['[[had already been deleted|ya habían sido eliminados]]'],
          explanation:
            '[[Past perfect|Pasado perfecto]]: acción completada antes de "we realised".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u16-l1-g18',
    type: 'grammar',
    level: 'B2',
    topic: 'Passive (all tenses)',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[Resumen: passive en distintos tiempos|Resumen: pasiva en distintos tiempos]]',
      questions: [
        {
          id: 'g18-q1',
          type: 'fill-blank',
          question:
            '[[Artificial intelligence|La inteligencia artificial]] ____ [[in many industries today|en muchas industrias hoy]].',
          options: ['[[is being used|está siendo usada]]', '[[is used|es usada]]', '[[uses|usa]]'],
          correctAnswer: '[[is being used|está siendo usada]]',
          acceptableAnswers: ['[[is being used|está siendo usada]]', '[[is used|es usada]]'],
          explanation:
            'Ambas son correctas: "is used" (hábito) o "is being used" (en curso). "Is being used" enfatiza progreso actual.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
