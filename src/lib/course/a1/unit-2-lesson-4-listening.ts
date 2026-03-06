/**
 * Unidad 2 — Lección 4: Comprensión auditiva
 * 1 audio (transcripción) + 14 preguntas (8 MC, 4 V/F, 2 síntesis)
 * audioUrl se puede añadir cuando exista el archivo de audio
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión auditiva';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Anna|Ana]]. [[I|Yo]] [[am|soy]] [[from|de]] [[Germany|Alemania]]. [[I|Yo]] [[am|soy]] [[German|alemana]]. [[I|Yo]] [[have|tengo]] [[two|dos]] [[friends|amigos]]. [[My|Mi]] [[friend|amigo]] [[Luca|Luca]] [[is|es]] [[from|de]] [[Italy|Italia]]. [[He|Él]] [[is|es]] [[Italian|italiano]]. [[My|Mi]] [[friend|amiga]] [[Maria|María]] [[is|es]] [[from|de]] [[Spain|España]]. [[She|Ella]] [[is|es]] [[Spanish|española]]. [[We|Nosotros]] [[are|somos]] [[students|estudiantes]]. [[Luca|Luca]] [[is|es]] [[twenty-one|veintiún]] [[years|años]] [[old|de edad]]. [[Maria|María]] [[is|es]] [[nineteen|diecinueve]] [[years|años]] [[old|de edad]]. [[I|Yo]] [[am|tengo]] [[twenty|veinte]] [[years|años]] [[old|de edad]]. [[We|Nosotros]] [[are|somos]] [[happy|felices]] [[to|de]] [[be|ser]] [[friends|amigos]]!`;

export const UNIT_2_LESSON_4_LISTENING: Exercise[] = [
  {
    id: 'a1-u2-l4-listening-1',
    type: 'listening',
    level: 'A1',
    topic: 'Countries and Nationalities',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u2-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: '[[Listen|Escucha]] [[the|el]] [[audio|audio]] [[below|abajo]]. [[You can|Puedes]] [[read|leer]] [[the|la]] [[transcript|transcripción]] [[after|después]] [[listening|escuchar]]. [[Then|Después]] [[answer|responde]] [[the|las]] [[questions|preguntas]].',
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[name|nombre]] [[of|de]] [[the|la]] [[narrator|narradora]]?',
          options: ['[[Maria|María]]', '[[Anna|Ana]]', '[[Luca|Luca]]', '[[Sofia|Sofía]]'],
          correctAnswer: 1,
          explanation: '[[She|Ella]] [[says|dice]]: "[[My name is Anna|Mi nombre es Ana]]".',
        },
        {
          question: '[[Where|De dónde]] [[is|es]] [[Anna|Ana]] [[from|de]]?',
          options: ['[[Spain|España]]', '[[France|Francia]]', '[[Germany|Alemania]]', '[[Italy|Italia]]'],
          correctAnswer: 2,
          explanation: '[[She|Ella]] [[says|dice]] "[[I am from Germany|Soy de Alemania]]".',
        },
        {
          question: '[[What|Cuál]] [[is|es]] [[Anna\'s|la]] [[nationality|nacionalidad]] [[of|de]] [[Anna|Ana]]?',
          options: ['[[Spanish|Española]]', '[[Italian|Italiana]]', '[[French|Francesa]]', '[[German|Alemana]]'],
          correctAnswer: 3,
          explanation: '[[She|Ella]] [[says|dice]] "[[I am German|Soy alemana]]".',
        },
        {
          question: '[[Where|De dónde]] [[is|es]] [[Luca|Luca]] [[from|de]]?',
          options: ['[[Germany|Alemania]]', '[[Spain|España]]', '[[Italy|Italia]]', '[[France|Francia]]'],
          correctAnswer: 2,
          explanation: '[[The|La]] [[transcript|transcripción]] [[says|dice]] "[[Luca is from Italy|Luca es de Italia]]".',
        },
        {
          question: '[[What|Cuál]] [[is|es]] [[Maria\'s|la]] [[nationality|nacionalidad]] [[of|de]] [[Maria|María]]?',
          options: ['[[Italian|Italiana]]', '[[German|Alemana]]', '[[French|Francesa]]', '[[Spanish|Española]]'],
          correctAnswer: 3,
          explanation: '[[The|La]] [[transcript|transcripción]] [[says|dice]] "[[She is Spanish|Ella es española]]".',
        },
        {
          question: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Luca|Luca]]?',
          options: ['[[nineteen|diecinueve]]', '[[twenty|veinte]]', '[[twenty-one|veintiuno]]', '[[twenty-two|veintidós]]'],
          correctAnswer: 2,
          explanation: '[[The|La]] [[transcript|transcripción]] [[says|dice]] "[[Luca is twenty-one years old|Luca tiene veintiún años]]".',
        },
        {
          question: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Anna|Ana]]?',
          options: ['[[eighteen|dieciocho]]', '[[nineteen|diecinueve]]', '[[twenty|veinte]]', '[[twenty-one|veintiuno]]'],
          correctAnswer: 2,
          explanation: '[[She|Ella]] [[says|dice]] "[[I am twenty years old|Tengo veinte años]]".',
        },
        {
          question: '[[What|Qué]] [[are|son]] [[the|los]] [[three|tres]] [[friends|amigos]]?',
          options: ['[[teachers|profesores]]', '[[doctors|médicos]]', '[[students|estudiantes]]', '[[nurses|enfermeros]]'],
          correctAnswer: 2,
          explanation: '[[The|La]] [[transcript|transcripción]] [[says|dice]] "[[We are students|Somos estudiantes]]".',
        },
        {
          question: '[[Anna|Ana]] [[is|es]] [[from|de]] [[Italy|Italia]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Anna|Ana]] [[is|es]] [[from|de]] [[Germany|Alemania]], [[not|no]] [[Italy|Italia]].',
        },
        {
          question: '[[Luca|Luca]] [[is|es]] [[Italian|italiano]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[The|La]] [[transcript|transcripción]] [[says|dice]] "[[He is Italian|Él es italiano]]".',
        },
        {
          question: '[[Maria|María]] [[is|es]] [[nineteen|diecinueve]] [[years|años]] [[old|de edad]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[The|La]] [[transcript|transcripción]] [[says|dice]] "[[Maria is nineteen years old|María tiene diecinueve años]]".',
        },
        {
          question: '[[Anna|Ana]] [[has|tiene]] [[three|tres]] [[friends|amigos]] [[in|en]] [[the|el]] [[audio|audio]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Anna|Ana]] [[mentions|menciona]] [[two|dos]] [[friends|amigos]]: [[Luca|Luca]] [[and|y]] [[Maria|María]].',
        },
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
          options: ['[[A|Un]] [[trip|viaje]] [[around|por]] [[the|el]] [[world|mundo]]', '[[Three|Tres]] [[friends|amigos]] [[from|de]] [[different|diferentes]] [[countries|países]]', '[[A|Una]] [[language|idioma]] [[school|escuela]]', '[[Life|La vida]] [[in|en]] [[Germany|Alemania]]'],
          correctAnswer: 1,
          explanation: '[[The|El]] [[audio|audio]] [[presents|presenta]] [[three|tres]] [[friends|amigos]] [[from|de]] [[Germany|Alemania]], [[Italy|Italia]] [[and|y]] [[Spain|España]].',
        },
        {
          question: '[[What|Qué]] [[do|tienen]] [[the|los]] [[three|tres]] [[friends|amigos]] [[in|en]] [[common|común]]?',
          options: ['[[They|Ellos]] [[are|son]] [[from|de]] [[the|el]] [[same|mismo]] [[country|país]]', '[[They|Ellos]] [[are|son]] [[teachers|profesores]]', '[[They|Ellos]] [[are|son]] [[students|estudiantes]]', '[[They|Ellos]] [[are|son]] [[from|de]] [[Germany|Alemania]]'],
          correctAnswer: 2,
          explanation: '[[The|La]] [[transcript|transcripción]] [[says|dice]] "[[We are students|Somos estudiantes]]" — [[all|los]] [[three|tres]] [[share|comparten]] [[that|eso]].',
        },
      ],
    },
    topicName: 'Listening',
  },
];
