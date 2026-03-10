/**
 * Unidad 42 B1 — Lección 4: Comprensión auditiva (Adjective + preposition, Feelings & attitudes)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Maria|Maria]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[feelings|sentimientos]]. [[I|Yo]] [[am|estoy]] [[interested in|interesada en]] [[photography|fotografía]]. [[I|Yo]] [[was|estaba]] [[afraid of|tenía miedo de]] [[failing|suspender]] [[the exam|el examen]] [[but|pero]] [[I|yo]] [[succeeded|tuve éxito]]. [[I|Yo]] [[am|estoy]] [[proud of|orgullosa de]] [[myself|mí misma]]. [[My brother|Mi hermano]] [[is|es]] [[good at|bueno en]] [[sport|deporte]] [[and|y]] [[he|él]] [[is|está]] [[famous for|famoso por]] [[his|su]] [[goals|goles]]. [[I|Yo]] [[am|estoy]] [[excited about|emocionada por]] [[the holiday|las vacaciones]]. [[I|Yo]] [[am|estoy]] [[fed up with|harta de]] [[the rain|la lluvia]]. [[I|Yo]] [[am|estoy]] [[keen on|entusiasmada por]] [[travelling|viajar]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Maria interested in|está interesada Maria]]?', options: ['[[music|música]]', '[[photography|fotografía]]', '[[sport|deporte]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[interested in photography|interesada en fotografía]]".' },
  { question: '[[What|De qué]] [[was Maria afraid of|tenía miedo Maria]]?', options: ['[[flying|volar]]', '[[failing the exam|suspender el examen]]', '[[speaking|hablar]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[afraid of failing the exam|tenía miedo de suspender el examen]]".' },
  { question: '[[Did|¿]] [[Maria succeed|Maria tuvo éxito]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[I succeeded|tuve éxito]]".' },
  { question: '[[What|De qué]] [[is Maria proud of|está orgullosa Maria]]?', options: ['[[her brother|su hermano]]', '[[herself|ella misma]]', '[[her teacher|su profesora]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[proud of myself|orgullosa de mí misma]]".' },
  { question: '[[What|En qué]] [[is Maria\'s brother good at|es bueno el hermano de Maria]]?', options: ['[[music|música]]', '[[sport|deporte]]', '[[cooking|cocinar]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[good at sport|bueno en deporte]]".' },
  { question: '[[What|Por qué]] [[is Maria\'s brother famous for|es famoso el hermano]]?', options: ['[[his music|su música]]', '[[his goals|sus goles]]', '[[his cooking|su cocina]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[famous for his goals|famoso por sus goles]]".' },
  { question: '[[What|Por qué]] [[is Maria excited about|está emocionada Maria]]?', options: ['[[the exam|el examen]]', '[[the holiday|las vacaciones]]', '[[the rain|la lluvia]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[excited about the holiday|emocionada por las vacaciones]]".' },
  { question: '[[Maria|Maria]] [[is fed up with|está harta de]] [[the rain|la lluvia]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[fed up with the rain|harta de la lluvia]]".' },
  { question: '[[Maria|Maria]] [[is keen on|está entusiasmada por]] [[travelling|viajar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[keen on travelling|entusiasmada por viajar]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Shopping|Compras]]', '[[Feelings and attitudes|Sentimientos y actitudes]]', '[[Work|Trabajo]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[feelings and attitudes|sentimientos y actitudes]].' },
  { question: '[[Maria|Maria]] [[failed|suspendió]] [[the exam|el examen]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She succeeded|Tuvo éxito]].' },
  { question: '[[The brother|El hermano]] [[plays|juega]] [[sport|deporte]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[good at sport|bueno en deporte]]".' },
  { question: '[[Which adjective + preposition|Qué adjetivo + preposición]] [[means "orgulloso de"|significa orgulloso de]]?', options: ['[[afraid of|miedo de]]', '[[proud of|orgulloso de]]', '[[interested in|interesado en]]'], correctAnswer: 1, explanation: '[[Proud of|Orgulloso de]] [[means orgulloso de|significa orgulloso de]].' },
  { question: '[[Maria|Maria]] [[likes|le gusta]] [[travelling|viajar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[keen on travelling|entusiasmada por viajar]]".' },
  { question: '[[Maria|Maria]] [[is|está]] [[worried about|preocupada por]] [[the holiday|las vacaciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She is excited about|Está emocionada por]] [[the holiday|las vacaciones]].' },
];

export const UNIT_42_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u42-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Feelings & Attitudes',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
