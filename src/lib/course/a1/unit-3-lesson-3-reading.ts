/**
 * Unidad 3 — Lección 3: Comprensión lectora
 * 1 texto + 14 preguntas (8 elección múltiple, 4 verdadero/falso, 2 síntesis)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión lectora';
const READING_TRANSCRIPT = `[[Hi|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Laura|Laura]]. [[Today|Hoy]] [[is|es]] [[Monday|lunes]] [[and|y]] [[I|yo]] [[am|estoy]] [[very|muy]] [[tired|cansada]]. [[I|Yo]] [[worked|trabajé]] [[all|todo]] [[weekend|el fin de semana]]. [[I|Yo]] [[am not|no estoy]] [[happy|feliz]] [[about|con]] [[that|eso]], [[but|pero]] [[it|ello]] [[is|es]] [[OK|bien]].

[[My|Mi]] [[friend|amigo]] [[Tom|Tom]] [[is|está]] [[excited|emocionado]] [[today|hoy]]. [[He|Él]] [[is|está]] [[not|no]] [[tired|cansado]] — [[he|él]] [[slept|durmió]] [[ten|diez]] [[hours|horas]]! [[Is|Está]] [[he|él]] [[hungry|hambriento]]? [[Yes|Sí]], [[he|él]] [[is|está]] — [[he|él]] [[wants|quiere]] [[breakfast|desayunar]].

[[We|Nosotros]] [[are|somos]] [[both|los dos]] [[students|estudiantes]]. [[Are|Estamos]] [[we|nosotros]] [[bored|aburridos]] [[at|en]] [[school|la escuela]]? [[No|No]], [[we|nosotros]] [[are not|no estamos]]. [[We|Nosotros]] [[love|amamos]] [[our|nuestra]] [[class|clase]]!`;

export const UNIT_3_LESSON_3_READING: Exercise[] = [
  {
    id: 'a1-u3-l3-reading-1',
    type: 'reading',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: '[[Read|Lee]] [[the|el]] [[text|texto]] [[below|abajo]]. [[Then|Después]] [[answer|responde]] [[the|las]] [[questions|preguntas]].',
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[her|su]] [[name|nombre]]?',
          options: ['[[Laura|Laura]]', '[[Maria|María]]', '[[Ana|Ana]]', '[[Sofia|Sofía]]'],
          correctAnswer: 0,
          explanation: '[[She|Ella]] [[says|dice]]: "[[My name is Laura|Mi nombre es Laura]]".',
        },
        {
          question: '[[How|Cómo]] [[does|se siente]] [[Laura|Laura]] [[today|hoy]]?',
          options: ['[[happy|feliz]]', '[[excited|emocionada]]', '[[tired|cansada]]', '[[bored|aburrida]]'],
          correctAnswer: 2,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am very tired|Estoy muy cansada]]".',
        },
        {
          question: '[[Why|Por qué]] [[is|está]] [[Laura|Laura]] [[tired|cansada]]?',
          options: [
            '[[Because|Porque]] [[she|ella]] [[was|estuvo]] [[sick|enferma]]',
            '[[Because|Porque]] [[she|ella]] [[worked|trabajó]] [[all|todo]] [[weekend|el fin de semana]]',
            '[[Because|Porque]] [[she|ella]] [[did not|no]] [[sleep|durmió]]',
            '[[Because|Porque]] [[she|ella]] [[is|está]] [[bored|aburrida]]',
          ],
          correctAnswer: 1,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I worked all weekend|Trabajé todo el fin de semana]]".',
        },
        {
          question: '[[How|Cómo]] [[does|se siente]] [[Tom|Tom]] [[today|hoy]]?',
          options: ['[[tired|cansado]]', '[[sad|triste]]', '[[excited|emocionado]]', '[[angry|enfadado]]'],
          correctAnswer: 2,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Tom is excited today|Tom está emocionado hoy]]".',
        },
        {
          question: '[[How many|Cuántas]] [[hours|horas]] [[did|durmió]] [[Tom|Tom]] [[sleep|dormir]]?',
          options: ['[[eight|ocho]]', '[[nine|nueve]]', '[[eleven|once]]', '[[ten|diez]]'],
          correctAnswer: 3,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[he slept ten hours|durmió diez horas]]".',
        },
        {
          question: '[[Is|Está]] [[Tom|Tom]] [[hungry|hambriento]]?',
          options: ['[[No, he isn\'t.|No, no lo está.]]', '[[Yes, he is.|Sí, lo está.]]', '[[He is thirsty.|Tiene sed.]]', '[[He is not hungry or thirsty.|No tiene hambre ni sed.]]'],
          correctAnswer: 1,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Is he hungry? Yes, he is|¿Tiene hambre? Sí, la tiene]]".',
        },
        {
          question: '[[What|Qué]] [[does|quiere]] [[Tom|Tom]] [[want|querer]]?',
          options: ['[[breakfast|desayuno]]', '[[lunch|almuerzo]]', '[[dinner|cena]]', '[[a|un]] [[snack|tentempié]]'],
          correctAnswer: 0,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[he wants breakfast|quiere desayunar]]".',
        },
        {
          question: '[[What|Qué]] [[are|son]] [[Laura|Laura]] [[and|y]] [[Tom|Tom]]?',
          options: ['[[teachers|profesores]]', '[[doctors|médicos]]', '[[students|estudiantes]]', '[[workers|trabajadores]]'],
          correctAnswer: 2,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We are both students|Los dos somos estudiantes]]".',
        },
        // ─── 9–12: Verdadero/Falso ─────────────────────────────────────────
        {
          question: '[[Laura|Laura]] [[is|está]] [[happy|feliz]] [[about|con]] [[working|trabajar]] [[all|todo]] [[weekend|el fin de semana]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[She|Ella]] [[says|dice]] "[[I am not happy about that|No estoy contenta con eso]]".',
        },
        {
          question: '[[Tom|Tom]] [[is|está]] [[tired|cansado]] [[today|hoy]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Tom|Tom]] [[is|está]] [[not|no]] [[tired|cansado]] — [[he|él]] [[is|está]] [[excited|emocionado]].',
        },
        {
          question: '[[Laura|Laura]] [[and|y]] [[Tom|Tom]] [[are|están]] [[bored|aburridos]] [[at|en]] [[school|la escuela]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[The|El]] [[text|texto]] [[says|dice]] "[[we are not bored|no estamos aburridos]]". [[They|Ellos]] [[love|aman]] [[their|su]] [[class|clase]].',
        },
        {
          question: '[[Tom|Tom]] [[slept|durmió]] [[more|más]] [[than|que]] [[Laura|Laura]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Tom|Tom]] [[slept|durmió]] [[ten|diez]] [[hours|horas]]; [[Laura|Laura]] [[worked|trabajó]] [[all|todo]] [[weekend|el fin de semana]] [[so|por lo que]] [[she|ella]] [[did not|no]] [[sleep|durmió]] [[much|mucho]].',
        },
        // ─── 13–14: Síntesis ──────────────────────────────────────────────
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
          options: [
            '[[A|Una]] [[morning|mañana]] [[at|en]] [[school|la escuela]]',
            '[[A|Un]] [[weekend|fin de semana]] [[trip|viaje]]',
            '[[Breakfast|El desayuno]] [[habits|hábitos]]',
            '[[Two|Dos]] [[friends|amigos]] [[describing|describiendo]] [[how|cómo]] [[they|se]] [[feel|sienten]] [[today|hoy]]',
          ],
          correctAnswer: 3,
          explanation: '[[The|El]] [[text|texto]] [[describes|describe]] [[how|cómo]] [[Laura|Laura]] [[and|y]] [[Tom|Tom]] [[feel|se sienten]] [[using|usando]] [[negatives|negaciones]] [[and|y]] [[questions|preguntas]] [[with|con]] [[to be|el verbo to be]].',
        },
        {
          question: '[[How|Cómo]] [[do|se sienten]] [[Laura|Laura]] [[and|y]] [[Tom|Tom]] [[about|con]] [[school|la escuela]]?',
          options: [
            '[[They|Ellos]] [[are|están]] [[both|los dos]] [[bored|aburridos]]',
            '[[They|Ellos]] [[are|están]] [[both|los dos]] [[tired|cansados]]',
            '[[They|Ellos]] [[are|están]] [[not|no]] [[bored|aburridos]] — [[they|ellos]] [[love|aman]] [[their|su]] [[class|clase]]',
            '[[They|Ellos]] [[don\'t|no]] [[like|les gusta]] [[school|la escuela]]',
          ],
          correctAnswer: 2,
          explanation: '[[The|El]] [[text|texto]] [[clearly|claramente]] [[says|dice]] "[[we are not bored. We love our class!|no estamos aburridos. ¡Amamos nuestra clase!]]".',
        },
      ],
    },
    topicName: 'Reading',
  },
];
