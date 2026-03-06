/**
 * Unidad 2 — Lección 3: Comprensión lectora
 * 1 texto + 14 preguntas (8 elección múltiple, 4 verdadero/falso, 2 síntesis)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión lectora';
const READING_TRANSCRIPT = `[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Tom|Tom]]. [[I|Yo]] [[am|soy]] [[from|de]] [[England|Inglaterra]]. [[I|Yo]] [[am|soy]] [[English|inglés]]. [[I|Yo]] [[have|tengo]] [[two|dos]] [[friends|amigos]]. [[My|Mi]] [[friend|amiga]] [[Sofia|Sofía]] [[is|es]] [[from|de]] [[Italy|Italia]]. [[She|Ella]] [[is|es]] [[Italian|italiana]]. [[My|Mi]] [[friend|amigo]] [[Carlos|Carlos]] [[is|es]] [[from|de]] [[Spain|España]]. [[He|Él]] [[is|es]] [[Spanish|español]]. [[We|Nosotros]] [[are|somos]] [[students|estudiantes]]. [[Sofia|Sofía]] [[is|es]] [[twenty|veinte]] [[years|años]] [[old|de edad]]. [[Carlos|Carlos]] [[is|es]] [[twenty-two|veintidós]] [[years|años]] [[old|de edad]]. [[I|Yo]] [[am|tengo]] [[nineteen|diecinueve]] [[years|años]] [[old|de edad]]. [[We|Nosotros]] [[are|somos]] [[happy|felices]] [[to|de]] [[be|ser]] [[friends|amigos]]!`;

export const UNIT_2_LESSON_3_READING: Exercise[] = [
  // ─── Ejercicio único: lectura + 14 preguntas (8 MC, 4 V/F, 2 síntesis) ─────
  {
    id: 'a1-u2-l3-reading-1',
    type: 'reading',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: READING_TRANSCRIPT,
    content: {
      title: LESSON_TITLE,
      instructions: '[[Read|Lee]] [[the|el]] [[text|texto]] [[below|abajo]]. [[Then|Después]] [[answer|responde]] [[the|las]] [[questions|preguntas]].',
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[name|nombre]] [[of|del]] [[narrator|narrador]]?',
          options: ['[[Carlos|Carlos]]', '[[Tom|Tom]]', '[[Sofia|Sofía]]', '[[James|James]]'],
          correctAnswer: 1,
          explanation: '[[He|Él]] [[says|dice]]: "[[My name is Tom|Mi nombre es Tom]]".',
        },
        {
          question: '[[Where|De dónde]] [[is|es]] [[Tom|Tom]] [[from|de]]?',
          options: ['[[Spain|España]]', '[[Italy|Italia]]', '[[France|Francia]]', '[[England|Inglaterra]]'],
          correctAnswer: 3,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I am from England|Soy de Inglaterra]]".',
        },
        {
          question: '[[What|Cuál]] [[is|es]] [[Tom\'s|la]] [[nationality|nacionalidad]] [[of|de]] [[Tom|Tom]]?',
          options: ['[[Spanish|Español]]', '[[Italian|Italiano]]', '[[English|Inglés]]', '[[French|Francés]]'],
          correctAnswer: 2,
          explanation: '[[He|Él]] [[says|dice]] "[[I am English|Soy inglés]]".',
        },
        {
          question: '[[Where|De dónde]] [[is|es]] [[Sofia|Sofía]] [[from|de]]?',
          options: ['[[England|Inglaterra]]', '[[Italy|Italia]]', '[[Spain|España]]', '[[Germany|Alemania]]'],
          correctAnswer: 1,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Sofia is from Italy|Sofía es de Italia]]".',
        },
        {
          question: '[[What|Cuál]] [[is|es]] [[Carlos\'s|la]] [[nationality|nacionalidad]] [[of|de]] [[Carlos|Carlos]]?',
          options: ['[[Italian|Italiano]]', '[[English|Inglés]]', '[[French|Francés]]', '[[Spanish|Español]]'],
          correctAnswer: 3,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[He is Spanish|Él es español]]".',
        },
        {
          question: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Sofia|Sofía]]?',
          options: ['[[nineteen|diecinueve]]', '[[twenty|veinte]]', '[[twenty-one|veintiuno]]', '[[twenty-two|veintidós]]'],
          correctAnswer: 1,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Sofia is twenty years old|Sofía tiene veinte años]]".',
        },
        {
          question: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Tom|Tom]]?',
          options: ['[[seventeen|diecisiete]]', '[[eighteen|dieciocho]]', '[[nineteen|diecinueve]]', '[[twenty|veinte]]'],
          correctAnswer: 2,
          explanation: '[[He|Él]] [[says|dice]] "[[I am nineteen years old|Tengo diecinueve años]]".',
        },
        {
          question: '[[What|Qué]] [[are|son]] [[the|los]] [[three|tres]] [[friends|amigos]]?',
          options: ['[[teachers|profesores]]', '[[doctors|médicos]]', '[[students|estudiantes]]', '[[nurses|enfermeros]]'],
          correctAnswer: 2,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We are students|Somos estudiantes]]".',
        },
        // ─── 9–12: Verdadero/Falso ─────────────────────────────────────────
        {
          question: '[[Tom|Tom]] [[is|es]] [[from|de]] [[Spain|España]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Tom|Tom]] [[is|es]] [[from|de]] [[England|Inglaterra]], [[not|no]] [[Spain|España]].',
        },
        {
          question: '[[Sofia|Sofía]] [[is|es]] [[Italian|italiana]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[She is Italian|Ella es italiana]]".',
        },
        {
          question: '[[Carlos|Carlos]] [[is|es]] [[twenty-two|veintidós]] [[years|años]] [[old|de edad]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[Carlos is twenty-two years old|Carlos tiene veintidós años]]".',
        },
        {
          question: '[[Tom|Tom]] [[has|tiene]] [[three|tres]] [[friends|amigos]] [[in|en]] [[the|el]] [[text|texto]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Tom|Tom]] [[mentions|menciona]] [[two|dos]] [[friends|amigos]]: [[Sofia|Sofía]] [[and|y]] [[Carlos|Carlos]].',
        },
        // ─── 13–14: Síntesis ──────────────────────────────────────────────
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
          options: ['[[A|Una]] [[trip|viaje]] [[around|por]] [[the|el]] [[world|mundo]]', '[[Three|Tres]] [[friends|amigos]] [[from|de]] [[different|diferentes]] [[countries|países]]', '[[A|Un]] [[language|idioma]] [[school|escuela]]', '[[Life|La vida]] [[in|en]] [[England|Inglaterra]]'],
          correctAnswer: 1,
          explanation: '[[The|El]] [[text|texto]] [[presents|presenta]] [[three|tres]] [[friends|amigos]] [[from|de]] [[England|Inglaterra]], [[Italy|Italia]] [[and|y]] [[Spain|España]].',
        },
        {
          question: '[[What|Qué]] [[do|tienen]] [[the|los]] [[three|tres]] [[friends|amigos]] [[in|en]] [[common|común]]?',
          options: ['[[They|Ellos]] [[are|son]] [[from|de]] [[the|el]] [[same|mismo]] [[country|país]]', '[[They|Ellos]] [[are|son]] [[teachers|profesores]]', '[[They|Ellos]] [[are|son]] [[students|estudiantes]]', '[[They|Ellos]] [[are|son]] [[from|de]] [[Italy|Italia]]'],
          correctAnswer: 2,
          explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We are students|Somos estudiantes]]" — [[all|los]] [[three|tres]] [[share|comparten]] [[that|eso]].',
        },
      ],
    },
    topicName: 'Reading',
  },
];
