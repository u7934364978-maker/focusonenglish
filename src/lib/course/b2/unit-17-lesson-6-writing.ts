/**
 * Unidad 17 B2 — Lección 6: Expresión escrita (Science)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_17_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u17-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases describiendo un laboratorio o experimento usando modal passive y have something done.',
      prompt:
        '[[Describe a laboratory or experiment|Describe un laboratorio o experimento]]. [[Use modal passive|Usa pasiva modal]] ([[must be tested|deben ser probadas]], [[should be calibrated|debería calibrarse]]) y [[have something done|tener algo hecho]] ([[e.g.|e.g.]] [[have equipment serviced|hacer revisar el equipo]]).',
      targetLevel: 'B2',
      writingType: 'description',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con la forma correcta: must be, should have been o have something done.',
      questions: [
        {
          question:
            '[[All samples|Todas las muestras]] ____ [[tested|probadas]] [[before they can be used in the experiment|antes de poder usarse en el experimento]].',
          options: ['[[must be|deben ser]]', '[[should have been|deberían haberse]]', '[[have been|han sido]]'],
          correctAnswer: '[[must be|deben ser]]',
          acceptableAnswers: ['[[must be|deben ser]]'],
          explanation:
            'Modal passive: las muestras deben ser probadas (obligación en presente).',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Reescribe la frase usando modal passive: "Someone should publish the results."',
      prompt:
        '[[Use|Usa]] "[[should be|debería ser]]" + [[past participle|participio pasado]]',
      expressionHint: '[[The results should be published|Los resultados deberían publicarse]].',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w4',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2 frases criticando algo que debió hacerse en el pasado. Usa should have been + past participle.',
      prompt:
        '[[Write two sentences criticising something that should have been done|Escribe dos frases criticando algo que debería haberse hecho]] ([[e.g.|e.g.]] [[in a lab|en un laboratorio]], [[at work|en el trabajo]], [[in a project|en un proyecto]]).',
      targetLength: '2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con have o had según el tiempo.',
      questions: [
        {
          question:
            '[[We|Nosotros]] ____ [[the equipment|el equipo]] [[serviced|revisado]] [[by a specialist|por un especialista]] [[last month|el mes pasado]].',
          options: ['[[had|hicimos]]', '[[have|tenemos]]', '[[got|conseguimos]]'],
          correctAnswer: '[[had|hicimos]]',
          acceptableAnswers: ['[[had|hicimos]]', '[[got|conseguimos]]'],
          explanation:
            'Have something done en pasado: "had the equipment serviced" = hicimos que lo revisaran.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w6',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve párrafo (3–4 frases) sobre un avance científico. Incluye al menos una pasiva modal.',
      prompt:
        '[[Describe a scientific breakthrough|Describe un avance científico]]. [[Use modal passive|Usa pasiva modal]] ([[must be verified|debe verificarse]], [[can be applied|puede aplicarse]], etc.).',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa las frases con ideas propias usando modal passive o have something done.',
      prompt:
        '[[Finish these sentences|Completa estas frases]]:\n1. [[In a lab, all equipment must be|En un laboratorio, todo el equipo debe ser]]...\n2. [[We had our|Hicimos que nuestro]]...\n3. [[The findings should have been|Los hallazgos deberían haberse]]...',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con should have been o must be.',
      questions: [
        {
          question:
            '[[The results|Los resultados]] ____ [[published earlier|publicados antes]]. [[We lost valuable time|Perdimos tiempo valioso]].',
          options: ['[[should have been|deberían haberse]]', '[[must be|deben ser]]', '[[have been|han sido]]'],
          correctAnswer: '[[should have been|deberían haberse]]',
          acceptableAnswers: ['[[should have been|deberían haberse]]'],
          explanation:
            'Crítica sobre el pasado: los resultados debieron publicarse antes.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la introducción de un artículo (40–60 palabras) sobre la importancia de la calibración en laboratorios.',
      prompt:
        '[[Write an introduction to an article about why calibration is important in laboratories|Escribe la introducción de un artículo sobre por qué la calibración es importante en laboratorios]]. [[Use vocabulary|Usa vocabulario]]: [[equipment|equipo]], [[accurate|preciso]], [[reliable results|resultados fiables]].',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w10',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases explicando por qué la investigación revisada por pares es importante.',
      prompt:
        '[[Explain why peer-reviewed research is essential for scientific progress|Explica por qué la investigación revisada por pares es esencial para el progreso científico]].',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta de have something done.',
      questions: [
        {
          question:
            '[[The lab|El laboratorio]] ____ [[its air filters|sus filtros de aire]] [[replaced|reemplazados]] [[every six months|cada seis meses]].',
          options: ['[[has|hace]]', '[[had|hizo]]', '[[have|tienen]]'],
          correctAnswer: '[[has|hace]]',
          acceptableAnswers: ['[[has|hace]]', '[[gets|consigue]]'],
          explanation:
            'Have something done en presente: el laboratorio hace reemplazar los filtros regularmente.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w12',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Transforma la frase usando have something done: "A specialist will service our equipment."',
      prompt:
        '[[Use|Usa]] "[[We are going to have|Vamos a hacer]]..."',
      expressionHint: '[[We are going to have our equipment serviced by a specialist|Vamos a hacer revisar nuestro equipo por un especialista]].',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w13',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 frases: una con must be, otra con should have been y otra con have something done.',
      prompt:
        '[[Write three sentences about science or laboratories using|Escribe tres frases sobre ciencia o laboratorios usando]]:\n- [[must be|debe ser]] + [[past participle|participio pasado]]\n- [[should have been|debería haber sido]] + [[past participle|participio pasado]]\n- [[have something done|tener algo hecho]]',
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w14',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con might have been o can be.',
      questions: [
        {
          question:
            '[[The data|Los datos]] ____ [[recorded incorrectly|registrados incorrectamente]]. [[We need to check it|Necesitamos comprobarlo]].',
          options: ['[[might have been|podrían haberse]]', '[[can be|pueden ser]]', '[[must be|deben ser]]'],
          correctAnswer: '[[might have been|podrían haberse]]',
          acceptableAnswers: ['[[might have been|podrían haberse]]', '[[may have been|pueden haberse]]'],
          explanation:
            'Posibilidad en pasado: es posible que los datos se hayan registrado mal.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w15',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve texto (aprox. 60–80 palabras) sobre los protocolos de seguridad en un laboratorio.',
      prompt:
        '[[Explain what must be done in a laboratory to ensure safety|Explica qué debe hacerse en un laboratorio para garantizar la seguridad]]. [[Use modal passive and vocabulary|Usa pasiva modal y vocabulario]]: [[samples|muestras]], [[chemicals|productos químicos]], [[equipment|equipo]], [[calibration|calibración]].',
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w16',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases describiendo algo que hayas hecho hacer por alguien (have something done).',
      prompt:
        '[[Describe something you had done by someone else|Describe algo que hayas hecho hacer por alguien]] ([[e.g.|e.g.]] [[had your car repaired|hacer reparar tu coche]], [[had your house painted|hacer pintar tu casa]]). [[Use|Usa]] "[[had|hiciste]]" + [[object|objeto]] + [[past participle|participio pasado]].',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          question:
            '[[The hypothesis|La hipótesis]] ____ [[verified|verificada]] [[with further research|con más investigación]].',
          options: ['[[can be|puede ser]]', '[[can have been|puede haber sido]]', '[[could verify|podría verificar]]'],
          correctAnswer: '[[can be|puede ser]]',
          acceptableAnswers: ['[[can be|puede ser]]'],
          explanation:
            'Modal passive: la hipótesis puede ser verificada (posibilidad en presente).',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u17-l6-w18',
    type: 'writing',
    level: 'B2',
    topic: 'Science',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Redacta la conclusión de un artículo (40–60 palabras) sobre por qué la financiación científica es importante.',
      prompt:
        '[[Write a short conclusion explaining why scientific funding is essential|Escribe una breve conclusión explicando por qué la financiación científica es esencial]]. [[Use modal passive where appropriate|Usa pasiva modal donde sea apropiado]] ([[e.g.|e.g.]] "[[Research must be supported|La investigación debe ser apoyada]]...").',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
];
