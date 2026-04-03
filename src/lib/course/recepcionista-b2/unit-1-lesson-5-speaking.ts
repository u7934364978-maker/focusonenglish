/**
 * Unit 1 — Lección 5: Expresión oral (mismo patrón que curso genérico A1)
 * expectedResponse = texto plano para TTS y evaluación; targetText = [[en|es]] para UI.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Expresión oral: Gestión hotelera';
const INSTRUCTIONS_PHRASE =
  '[[Read the phrase aloud and record your pronunciation.|Lee la frase en voz alta y graba tu pronunciación.]]';
const INSTRUCTIONS_WORD =
  '[[Pronounce this word or phrase correctly.|Pronuncia esta palabra o frase correctamente.]]';

export const UNIT_1_LESSON_5_SPEAKING: Exercise[] = [
  {
    id: 'rec-b2-u1-l5-sp1',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_PHRASE,
      targetText:
        '[[Our|Nuestro]] [[occupancy|ocupación]] [[rate|tasa]] [[has been|ha sido]] [[increased|aumentada]] [[by|en]] [[eight|ocho]] [[percent|por ciento]].',
      expectedResponse: 'Our occupancy rate has been increased by eight percent.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp2',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_PHRASE,
      targetText:
        '[[The|Las]] [[negative|negativas]] [[reviews|reseñas]] [[are being|están siendo]] [[analyzed|analizadas]] [[by|por]] [[the|el]] [[team|equipo]].',
      expectedResponse: 'The negative reviews are being analyzed by the team.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp3',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_PHRASE,
      targetText:
        '[[Brand|Marca]] [[standards|estándares]] [[will be|serán]] [[reviewed|revisados]] [[at|en]] [[the|la]] [[next|próxima]] [[quarterly|trimestral]] [[audit|auditoría]].',
      expectedResponse: 'Brand standards will be reviewed at the next quarterly audit.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp4',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_PHRASE,
      targetText:
        '[[Were we to reduce check-in time, our review scores would improve significantly.|Si redujéramos el tiempo de check-in, nuestras puntuaciones en reseñas mejorarían significativamente.]]',
      expectedResponse:
        'Were we to reduce check-in time, our review scores would improve significantly.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp5',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_PHRASE,
      targetText:
        '[[Performance|El desempeño]] [[against|frente al]] [[benchmark|punto de referencia]] [[will be|será]] [[assessed|evaluado]] [[monthly|cada mes]].',
      expectedResponse: 'Performance against benchmark will be assessed monthly.',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp6',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_WORD,
      targetText: '[[KPI|Indicador clave]]',
      expectedResponse: 'KPI',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp7',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_WORD,
      targetText: '[[occupancy rate|tasa de ocupación]]',
      expectedResponse: 'occupancy rate',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp8',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_WORD,
      targetText: '[[revenue per room|ingresos por habitación]]',
      expectedResponse: 'revenue per room',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp9',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_WORD,
      targetText: '[[online review|reseña online]]',
      expectedResponse: 'online review',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp10',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_WORD,
      targetText: '[[brand standards|estándares de marca]]',
      expectedResponse: 'brand standards',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp11',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_WORD,
      targetText: '[[mystery guest|cliente misterioso]]',
      expectedResponse: 'mystery guest',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp12',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_WORD,
      targetText: '[[audit|auditoría]]',
      expectedResponse: 'audit',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp13',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_WORD,
      targetText: '[[compliance|cumplimiento]]',
      expectedResponse: 'compliance',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp14',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_WORD,
      targetText: '[[performance review|evaluación de desempeño]]',
      expectedResponse: 'performance review',
    },
    topicName: 'Speaking',
  },
  {
    id: 'rec-b2-u1-l5-sp15',
    type: 'pronunciation',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_WORD,
      targetText: '[[benchmark|punto de referencia]]',
      expectedResponse: 'benchmark',
    },
    topicName: 'Speaking',
  },
];
