/**
 * Unidad 53 — Lección 4: Comprensión auditiva (Modals: Should & Shouldn't)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[Sarah|Sarah]]! [[I|Yo]] [[think|creo]] [[you|tú]] [[should|deberías]] [[take|tomar]] [[a|un]] [[break|descanso]]. [[You|Tú]] [[look|te ves]] [[very|muy]] [[tired|cansada]]. [[You|Tú]] [[shouldn't|no deberías]] [[work|trabajar]] [[so|tan]] [[hard|duro]] [[without|sin]] [[resting|descansar]]. [[Maybe|Tal vez]] [[you|tú]] [[should|deberías]] [[go|ir]] [[on|de]] [[holiday|vacaciones]] [[for|por]] [[a|una]] [[week|semana]]. [[You|Tú]] [[should|deberías]] [[also|también]] [[try|intentar]] [[to|a]] [[sleep|dormir]] [[more|más]] [[—|—]] [[eight|ocho]] [[hours|horas]] [[would|sería]] [[be|]] [[ideal|ideal]]. [[And|Y]] [[you|tú]] [[shouldn't|no deberías]] [[check|revisar]] [[your|tu]] [[emails|emails]] [[at|por]] [[night|noche]]. [[Take|Tómate]] [[care|cuidado]] [[of|de]] [[yourself|ti misma]]!`;

const INSTRUCTIONS = 'Escucha el audio. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|A quién]] [[is|está]] [[the|el]] [[speaker|hablante]] [[talking|hablando]]?', options: ['[[John|John]]', '[[Sarah|Sarah]]', '[[Mary|Mary]]', '[[Tom|Tom]]'], correctAnswer: 1, explanation: '[[Hi Sarah|Hola Sarah]].' },
  { question: '[[What|Qué]] [[should|debería]] [[Sarah|Sarah]] [[take|tomar]]?', options: ['[[Medicine|Medicina]]', '[[A break|Un descanso]]', '[[A coffee|Un café]]', '[[A taxi|Un taxi]]'], correctAnswer: 1, explanation: '[[You should take a break|Deberías tomar un descanso]].' },
  { question: '[[How|Cómo]] [[does|se ve]] [[Sarah|Sarah]] [[look|ver]]?', options: ['[[Happy|Feliz]]', '[[Very tired|Muy cansada]]', '[[Excited|Emocionada]]', '[[Angry|Enojada]]'], correctAnswer: 1, explanation: '[[You look very tired|Te ves muy cansada]].' },
  { question: '[[What|Qué]] [[shouldn't|no debería]] [[Sarah|Sarah]] [[do|hacer]]?', options: ['[[Rest|Descansar]]', '[[Work so hard without resting|Trabajar tan duro sin descansar]]', '[[Sleep|Dormir]]', '[[Relax|Relajarse]]'], correctAnswer: 1, explanation: "[[You shouldn't work so hard without resting|No deberías trabajar tan duro sin descansar]]." },
  { question: '[[What|Qué]] [[should|debería]] [[Sarah|Sarah]] [[maybe|tal vez]] [[do|hacer]]?', options: ['[[Work more|Trabajar más]]', '[[Go on holiday for a week|Ir de vacaciones una semana]]', '[[Stay home|Quedarse en casa]]', '[[Quit her job|Dejar su trabajo]]'], correctAnswer: 1, explanation: '[[Maybe you should go on holiday for a week|Tal vez deberías ir de vacaciones una semana]].' },
  { question: '[[How many|Cuántas]] [[hours|horas]] [[should|debería]] [[Sarah|Sarah]] [[sleep|dormir]]?', options: ['[[Five|Cinco]]', '[[Six|Seis]]', '[[Seven|Siete]]', '[[Eight|Ocho]]'], correctAnswer: 3, explanation: '[[Eight hours would be ideal|Ocho horas sería ideal]].' },
  { question: '[[What|Qué]] [[shouldn't|no debería]] [[Sarah|Sarah]] [[do|hacer]] [[at night|por la noche]]?', options: ['[[Sleep|Dormir]]', '[[Check her emails|Revisar sus emails]]', '[[Rest|Descansar]]', '[[Relax|Relajarse]]'], correctAnswer: 1, explanation: "[[You shouldn't check your emails at night|No deberías revisar tus emails por la noche]]." },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[Work advice|Consejos sobre trabajo]]', '[[Advice to rest and take care|Consejos para descansar y cuidarse]]', '[[Travel|Viajes]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[Advice about rest and self-care|Consejos sobre descanso y autocuidado]].' },
  { question: '[[Which|Cuál]] [[modal|modal]] [[is|se]] [[used|usa]]?', options: ['[[Must|Must]]', '[[Should and shouldn\'t|Should y shouldn\'t]]', '[[Can|Can]]', '[[Have to|Have to]]'], correctAnswer: 1, explanation: '[[Should and shouldn\'t|Should y shouldn\'t]] [[for|para]] [[advice|consejos]].' },
  { question: '[[True or False|Verdadero o Falso]]: [[Sarah|Sarah]] [[should|debería]] [[work|trabajar]] [[more|más]] [[hours|horas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: "[[She shouldn't work so hard|No debería trabajar tan duro]]." },
  { question: '[[The|El]] [[speaker|hablante]] [[says|dice]] [[Sarah|Sarah]] ____ ____ ____ ____ ____.', options: ['[[should take care of herself|debería cuidarse]]', '[[should work more|debería trabajar más]]', '[[shouldn\'t rest|no debería descansar]]', '[[shouldn\'t sleep|no debería dormir]]'], correctAnswer: 0, explanation: '[[Take care of yourself|Tómate cuidado de ti misma]].' },
  { question: '[[Sarah|Sarah]] ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[looks tired|se ve cansada]]', '[[looks happy|se ve feliz]]', '[[looks excited|se ve emocionada]]', '[[looks relaxed|se ve relajada]]'], correctAnswer: 0, explanation: '[[You look very tired|Te ves muy cansada]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[gives|da]] ____ ____ ____ ____ ____.', options: ['[[advice about rest|consejos sobre descanso]]', '[[advice about food|consejos sobre comida]]', '[[advice about travel|consejos sobre viajes]]', '[[no advice|ningún consejo]]'], correctAnswer: 0, explanation: '[[Advice about taking a break, holiday, sleep|Consejos sobre descanso, vacaciones, sueño]].' },
  { question: '[[Should|Debería]] [[Sarah|Sarah]] ____ ____ ____ ____ ____ ____ ____?', options: ['[[go on holiday|ir de vacaciones]]', '[[work more|trabajar más]]', '[[check emails at night|revisar emails por la noche]]', '[[never rest|nunca descansar]]'], correctAnswer: 0, explanation: '[[Maybe you should go on holiday|Tal vez deberías ir de vacaciones]].' },
  { question: '[[The|El]] [[tone|tono]] [[of|del]] [[message|mensaje]] [[is|es]]?', options: ['[[Angry|Enojado]]', '[[Caring|Cariñoso/preocupado]]', '[[Boring|Aburrido]]', '[[Formal|Formal]]'], correctAnswer: 1, explanation: '[[The speaker cares about Sarah|El hablante se preocupa por Sarah]].' },
];

export const UNIT_53_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u53-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Modals: Should & Shouldn\'t',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
