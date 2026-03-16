/**
 * Unidad 52 B2 — Lección 4: Comprensión auditiva (Human Migration & Society)
 * 13 preguntas (B2: transcripción sobre migración y voz pasiva)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Maria|María]] [[and|y]] [[I|yo]] [[work|trabajo]] [[with refugees|con refugiados]]. [[Thousands of people|Miles de personas]] [[are being housed|están siendo alojadas]] [[in temporary shelters|en refugios temporales]] [[right now|ahora mismo]]. [[The documents|Los documentos]] [[were being checked|estaban siendo revisados]] [[when I arrived|cuando llegué]]. [[Integration|La integración]] [[has been improved|ha sido mejorada]] [[by new programmes|por nuevos programas]] [[in recent years|en años recientes]]. [[Society|La sociedad]] [[is affected|es afectada]] [[by migration|por la migración]] [[in many ways|de muchas formas]]. [[New policies|Nuevas políticas]] [[will be introduced|serán introducidas]] [[by the government|por el gobierno]] [[next year|el próximo año]]. [[The camp|El campamento]] [[had been built|había sido construido]] [[before the crisis|antes de la crisis]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Maria, who works with refugees|María, que trabaja con refugiados]]', '[[A government official|Un funcionario del gobierno]]', '[[A refugee|Un refugiado]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Maria and I work with refugees|soy María y trabajo con refugiados]]".' },
  { question: '[[What|Qué]] [[is happening to thousands of people|está pasando con miles de personas]] [[right now|ahora mismo]]?', options: ['[[They are being housed in temporary shelters|Están siendo alojadas en refugios temporales]]', '[[They are being deported|Están siendo deportadas]]', '[[They are being integrated|Están siendo integradas]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[thousands of people are being housed in temporary shelters right now|miles de personas están siendo alojadas en refugios temporales ahora mismo]]".' },
  { question: '[[What|Qué]] [[were the documents|eran los documentos]] [[when she arrived|cuando llegó]]?', options: ['[[Being checked|Siendo revisados]]', '[[Being signed|Siendo firmados]]', '[[Being lost|Siendo perdidos]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[the documents were being checked when I arrived|los documentos estaban siendo revisados cuando llegué]]".' },
  { question: '[[What|Qué]] [[has improved integration|ha mejorado la integración]]?', options: ['[[New programmes in recent years|Nuevos programas en años recientes]]', '[[The government|El gobierno]]', '[[The crisis|La crisis]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[integration has been improved by new programmes in recent years|la integración ha sido mejorada por nuevos programas en años recientes]]".' },
  { question: '[[What|Qué]] [[will be introduced|será introducido]] [[next year|el próximo año]]?', options: ['[[New policies by the government|Nuevas políticas por el gobierno]]', '[[New shelters|Nuevos refugios]]', '[[New documents|Nuevos documentos]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[new policies will be introduced by the government next year|nuevas políticas serán introducidas por el gobierno el próximo año]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[Maria describes migration and society using passive voice|María describe migración y sociedad usando voz pasiva]]', '[[Refugees are not helped|Los refugiados no son ayudados]]', '[[Society is not affected|La sociedad no es afectada]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes|describe]] [[migration scenarios|escenarios de migración]] [[in passive voice|en voz pasiva]].' },
  { question: '[[Which structure|Qué estructura]] [[is used in|se usa en]] "[[are being housed|están siendo alojadas]]"?', options: ['[[Present continuous passive|Pasiva presente continuo]]', '[[Past simple passive|Pasiva pasado simple]]', '[[Future passive|Pasiva futuro]]'], correctAnswer: 0, explanation: '[[Present continuous passive|Pasiva presente continuo]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[refugees|refugiados]], [[integration|integración]], [[shelters|refugios]], [[policies|políticas]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[migration vocabulary|vocabulario de migración]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Maria|sobre María]]?', options: ['[[She works in the migration sector and knows the situation|Trabaja en el sector de migración y conoce la situación]]', '[[She is a refugee|Es refugiada]]', '[[She works for the government|Trabaja para el gobierno]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[works with refugees|trabaja con refugiados]] [[and describes|y describe]] [[the situation|la situación]].' },
  { question: '[[The camp|El campamento]] ____ ____ ____ [[built|construido]] [[before the crisis|antes de la crisis]].', options: ['[[had been|había sido]]', '[[was|fue]]', '[[has been|ha sido]]'], correctAnswer: 0, explanation: '[[Past perfect passive|Pasiva pasado perfecto]].' },
  { question: '[[New policies|Nuevas políticas]] ____ ____ ____ [[introduced|introducidas]] [[by the government|por el gobierno]].', options: ['[[will be|serán]]', '[[are|son]]', '[[were|fueron]]'], correctAnswer: 0, explanation: '[[Future simple passive|Pasiva futuro simple]].' },
  { question: '[[Passive voice|Voz pasiva]] [[is used when|se usa cuando]] ____.', options: ['[[The action is more important than who does it|La acción es más importante que quién la hace]]', '[[We want to emphasise the subject|Queremos enfatizar el sujeto]]'], correctAnswer: 0, explanation: '[[Passive voice|Voz pasiva]] [[focuses on the action|se centra en la acción]].' },
  { question: '[[Integration|La integración]] ____ ____ ____ [[improved|mejorada]] [[by new programmes|por nuevos programas]].', options: ['[[has been|ha sido]]', '[[was|fue]]', '[[is|es]]'], correctAnswer: 0, explanation: '[[Present perfect passive|Pasiva presente perfecto]].' },
];

export const UNIT_52_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u52-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'social-issues',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
