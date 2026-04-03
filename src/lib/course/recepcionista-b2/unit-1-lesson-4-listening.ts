/**
 * Unit 1 — Lección 4: Comprensión auditiva (mismo patrón que curso genérico A1)
 * Un audio (transcripción) + una pregunta por actividad; TTS Cloudflare vía /api/tts.
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Escucha: Gestión hotelera';
const LISTENING_TRANSCRIPT = `This quarter's performance report shows that our occupancy rate has increased by eight percent compared to last year. However, our online review score has dropped from 8.4 to 8.1 on Booking.com. Most negative reviews mention delays at check-in. I would like the reception team to analyze these comments and present a service improvement plan by the end of the month.`;

const INSTRUCTIONS =
  '[[Listen|Escucha]] [[to|a]] [[the|el]] [[audio|audio]] [[below|abajo]]. [[You can|Puedes]] [[read|leer]] [[the|la]] [[transcript|transcripción]] [[after|después]] [[listening|escuchar]]. [[Then|Después]] [[answer|responde]] [[the|la]] [[question|pregunta]].';

const QUESTIONS = [
  {
    question:
      '[[According to the report, what happened to the occupancy rate compared to last year?|Según el informe, ¿qué ocurrió con la tasa de ocupación (occupancy rate) respecto al año pasado?]]',
    options: [
      '[[It increased by eight percent|Aumentó un ocho por ciento]]',
      '[[It decreased by eight percent|Disminuyó un ocho por ciento]]',
      '[[It stayed the same|Se mantuvo igual]]',
      '[[It is not mentioned|No se menciona]]',
    ],
    correctAnswer: 0,
    explanation:
      '[[The speaker says|El hablante dice]] "our occupancy rate has increased by eight percent compared to last year".',
  },
  {
    question:
      '[[Is "occupancy rate" mentioned in the conversation?|¿Se menciona «occupancy rate» en la conversación?]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      '[[Listen carefully|Escucha con atención]] [[to the audio|al audio]] [[for the answer|para la respuesta]].',
  },
  {
    question:
      '[[Which platform is mentioned for guest reviews?|¿Qué plataforma se menciona para las reseñas de huéspedes?]]',
    options: [
      '[[Booking.com|Booking.com]]',
      '[[TripAdvisor|TripAdvisor]]',
      '[[Google Maps|Google Maps]]',
      '[[Expedia|Expedia]]',
    ],
    correctAnswer: 0,
    explanation:
      '[[The speaker mentions|El hablante menciona]] "on Booking.com".',
  },
  {
    question:
      '[[What does "online review" mean in this conversation?|¿Qué significa «online review» en esta conversación?]]',
    options: [
      '[[reseña online|reseña online]]',
      '[[estándares de marca|estándares de marca]]',
      '[[cliente misterioso|cliente misterioso]]',
      '[[auditoría|auditoría]]',
    ],
    correctAnswer: 0,
    explanation: '[[Online review|Reseña online]] [[is the correct meaning|es el significado correcto]].',
  },
  {
    question:
      '[[Is "brand standards" mentioned in the conversation?|¿Se menciona «brand standards» en la conversación?]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      '[[Listen carefully|Escucha con atención]] [[to the audio|al audio]] [[for the answer|para la respuesta]].',
  },
  {
    question:
      '[[What do most negative reviews mention, according to the speaker?|¿Qué mencionan la mayoría de las reseñas negativas, según el hablante?]]',
    options: [
      '[[Delays at check-in|Retrasos en el check-in]]',
      '[[Room size|Tamaño de la habitación]]',
      '[[Breakfast quality|Calidad del desayuno]]',
      '[[Parking|Parking]]',
    ],
    correctAnswer: 0,
    explanation:
      '[[The speaker says|El hablante dice]] "Most negative reviews mention delays at check-in".',
  },
  {
    question:
      '[[What does the speaker want the reception team to do?|¿Qué quiere el hablante que haga el equipo de recepción?]]',
    options: [
      '[[Analyze the comments and present a service improvement plan|Analizar los comentarios y presentar un plan de mejora del servicio]]',
      '[[Close the front desk|Cerrar la recepción]]',
      '[[Ignore the reviews|Ignorar las reseñas]]',
      '[[Reduce room prices|Reducir los precios de las habitaciones]]',
    ],
    correctAnswer: 0,
    explanation:
      '[[The speaker asks|El hablante pide]] the reception team to analyze comments and present a service improvement plan.',
  },
  {
    question:
      '[[Is "compliance" mentioned in the conversation?|¿Se menciona «compliance» en la conversación?]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      '[[Listen carefully|Escucha con atención]] [[to the audio|al audio]] [[for the answer|para la respuesta]].',
  },
  {
    question:
      '[[What happened to the online review score?|¿Qué ocurrió con la puntuación de reseñas online?]]',
    options: [
      '[[It dropped from 8.4 to 8.1|Bajó de 8,4 a 8,1]]',
      '[[It rose from 8.1 to 8.4|Subió de 8,1 a 8,4]]',
      '[[It stayed at 8.4|Se mantuvo en 8,4]]',
      '[[It is not mentioned|No se menciona]]',
    ],
    correctAnswer: 0,
    explanation:
      '[[The speaker says|El hablante dice]] the score dropped from 8.4 to 8.1.',
  },
  {
    question:
      '[[Is "KPI" mentioned in the conversation?|¿Se menciona «KPI» en la conversación?]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      '[[Listen carefully|Escucha con atención]] [[to the audio|al audio]] [[for the answer|para la respuesta]].',
  },
  {
    question:
      '[[Is "check-in" mentioned in the conversation?|¿Se menciona el check-in en la conversación?]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      '[[Negative reviews mention|Las reseñas negativas mencionan]] "delays at check-in".',
  },
  {
    question:
      '[[By when does the speaker want the improvement plan?|¿Para cuándo quiere el hablante el plan de mejora?]]',
    options: [
      '[[By the end of the month|Para fin de mes]]',
      '[[Tomorrow|Mañana]]',
      '[[Next year|El año que viene]]',
      '[[It is not specified|No se especifica]]',
    ],
    correctAnswer: 0,
    explanation:
      '[[The speaker says|El hablante dice]] "by the end of the month".',
  },
  {
    question:
      '[[Is "online review" (or "reviews") mentioned in the conversation?|¿Se menciona «online review» o «reviews» en la conversación?]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      '[[Listen carefully|Escucha con atención]] [[to the audio|al audio]] [[for the answer|para la respuesta]].',
  },
  {
    question:
      '[[Compared to last year, is the hotel performing better in online reviews?|Comparado con el año pasado, ¿el hotel va mejor en reseñas online?]]',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation:
      '[[The review score dropped|La puntuación de reseñas bajó]], [[so performance in reviews is worse|así que el rendimiento en reseñas es peor]].',
  },
];

export const UNIT_1_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `rec-b2-u1-l4-listening-${i + 1}`,
  type: 'listening' as const,
  level: 'B2' as const,
  topic: 'Management',
  difficulty: 'medium' as const,
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
