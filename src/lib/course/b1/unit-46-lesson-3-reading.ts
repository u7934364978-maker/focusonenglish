/**
 * Unidad 46 B1 — Lección 3: Comprensión lectora (Had better, it's time, Advice)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My friend|Mi amigo]] [[Sarah|Sarah]] [[always|siempre]] [[asks|pide]] [[me|me]] [[for|para]] [[advice|consejo]]. [[Last week|La semana pasada]] [[she|ella]] [[told me|me dijo]] [[she|que ella]] [[feels|se siente]] [[tired|cansada]] [[all the time|todo el tiempo]]. [[I|Yo]] [[told her|le dije]] [[she|que ella]] [[had better|más le vale]] [[see|ver]] [[a doctor|un médico]] [[soon|pronto]]. [[She|Ella]] [[agreed|estuvo de acuerdo]] [[and|y]] [[made|hizo]] [[an appointment|una cita]]. [[I|Yo]] [[also|también]] [[think|creo]] [[it\'s time|ya es hora]] [[for|para]] [[her|ella]] [[to|de]] [[take|tomar]] [[a holiday|unas vacaciones]]. [[She|Ella]] [[works|trabaja]] [[too hard|demasiado duro]]. [[It\'s high time|Ya es hora]] [[she|ella]] [[took|se tomara]] [[a break|un descanso]]. [[I|Yo]] [[advised|aconsejé]] [[her|a ella]] [[to|a]] [[relax|relajarse]] [[more|más]] [[and|y]] [[she|ella]] [[said|dijo]] [[she|que ella]] [[would|lo haría]] [[try|intentar]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quién]] [[asks Sarah for advice|suele pedir consejo a Sarah]]?', options: ['[[Sarah|Sarah]]', '[[The friend|El amigo]]', '[[Sarah asks the friend|Sarah pide al amigo]]'], correctAnswer: 2, explanation: '[[The text says|El texto dice]] "[[My friend Sarah always asks me for advice|Sarah siempre me pide consejo]]".' },
  { question: '[[What|Qué]] [[did Sarah feel|sentía Sarah]]?', options: ['[[happy|feliz]]', '[[tired all the time|cansada todo el tiempo]]', '[[excited|emocionada]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[she feels tired all the time|se siente cansada todo el tiempo]]".' },
  { question: '[[What|Qué]] [[advice did the friend give|consejo dio el amigo]]?', options: ['[[to work more|trabajar más]]', '[[to see a doctor|ver a un médico]]', '[[to travel|viajar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[she had better see a doctor|más le vale ver un médico]]".' },
  { question: '[[Did|¿]] [[Sarah make an appointment|Sarah hizo una cita]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[made an appointment|hizo una cita]]".' },
  { question: '[[What|Qué]] [[does the friend think it\'s time for|es hora de qué según el amigo]]?', options: ['[[to work more|trabajar más]]', '[[to take a holiday|tomar unas vacaciones]]', '[[to change job|cambiar de trabajo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[it\'s time for her to take a holiday|ya es hora de que tome unas vacaciones]]".' },
  { question: '[[What|Qué]] [[does the friend think about Sarah\'s work|opina el amigo del trabajo de Sarah]]?', options: ['[[She works too hard|Trabaja demasiado duro]]', '[[She doesn\'t work enough|No trabaja suficiente]]', '[[She has a good balance|Tiene buen equilibrio]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[She works too hard|trabaja demasiado duro]]".' },
  { question: '[[What|Qué]] [[does "it\'s high time" mean|significa "it\'s high time"]]?', options: ['[[It\'s too late|Es demasiado tarde]]', '[[It\'s time|Ya es hora]]', '[[It\'s early|Es temprano]]'], correctAnswer: 1, explanation: '[[It\'s high time|Ya es hora]] [[means it\'s time|significa ya es hora]].' },
  { question: '[[The friend|El amigo]] [[advised Sarah to relax|aconsejó a Sarah relajarse]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[advised her to relax more|aconsejórelajarse más]]".' },
  { question: '[[Sarah|Sarah]] [[said she would try|dijo que lo intentaría]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[she would try|lo haría intentar]]".' },
  { question: '[[What|Cuál]] [[is the main topic|es el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Travel|Viajes]]', '[[Giving advice about health and rest|Dar consejos sobre salud y descanso]]', '[[Work|Trabajo]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[is about|trata sobre]] [[advice and health|consejo y salud]].' },
  { question: '[[Had better|Had better]] [[is used for|se usa para]] [[strong advice|consejo fuerte]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Had better|Had better]] [[expresses strong advice|expresa consejo fuerte]].' },
  { question: '[[It\'s time|It\'s time]] [[can be followed by|puede ir seguido de]] [[to + infinitive|to + infinitivo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[it\'s time for her to take|ya es hora de que tome]]".' },
  { question: '[[Which structure|Qué estructura]] [[means "más te vale"|significa más te vale]]?', options: ['[[it\'s time|ya es hora]]', '[[had better|más vale]]', '[[would rather|preferiría]]'], correctAnswer: 1, explanation: '[[Had better|Más vale]] [[means más te vale|significa más te vale]].' },
  { question: '[[Sarah|Sarah]] [[works too much|trabaja demasiado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[works too hard|trabaja demasiado duro]]".' },
  { question: '[[The text|El texto]] [[uses|usa]] [[had better|had better]] [[and|y]] [[it\'s time|it\'s time]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Both structures|Ambas estructuras]] [[appear in the text|aparecen en el texto]].' },
];

export const UNIT_46_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u46-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Advice',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
