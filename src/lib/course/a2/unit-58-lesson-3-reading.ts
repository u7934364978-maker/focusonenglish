/**
 * Unidad 58 — Lección 3: Comprensión lectora (Prepositions of Movement)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Emma|Emma]]. [[I|Yo]] [[love|amo]] [[walking|caminar]] [[and|y]] [[exploring|explorar]] [[new|nuevos]] [[places|lugares]]. [[Last|El]] [[week|semana]] [[I|yo]] [[went|fui]] [[to|a]] [[a|un]] [[beautiful|hermoso]] [[park|parque]] [[in|en]] [[the city|la ciudad]]. [[I|Yo]] [[walked|entré]] [[into|en]] [[the park|el parque]] [[through|a través de]] [[the main gate|la puerta principal]]. [[First|Primero]] [[I|yo]] [[walked|caminé]] [[along|a lo largo de]] [[the river|el río]] [[for|durante]] [[thirty minutes|treinta minutos]]. [[Then|Luego]] [[I|yo]] [[went|subí]] [[up|por]] [[a small hill|una pequeña colina]] [[to|para]] [[see|ver]] [[the view|la vista]]. [[From|Desde]] [[there|allí]] [[I|yo]] [[could|pude]] [[see|ver]] [[people|gente]] [[walking|caminando]] [[around|alrededor de]] [[the lake|el lago]]. [[I|Yo]] [[walked|bajé]] [[down|por]] [[the hill|la colina]] [[and|y]] [[crossed|crucé]] [[across|al otro lado de]] [[the bridge|el puente]]. [[A|Un]] [[dog|perro]] [[ran|corrió]] [[towards|hacia]] [[me|mí]] [[but|pero]] [[I|yo]] [[walked|pasé]] [[past|por delante de]] [[it|él]] [[calmly|tranquilamente]]. [[When|Cuando]] [[I|yo]] [[got|salí]] [[out of|de]] [[the park|el parque]] [[I|yo]] [[felt|me sentí]] [[happy|feliz]] [[and|y]] [[relaxed|relajada]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is|es]] [[Emma\'s|de Emma]] [[name|nombre]]?', options: ['[[Tom|Tom]]', '[[Emma|Emma]]', '[[Sarah|Sarah]]', '[[Lisa|Lisa]]'], correctAnswer: 1, explanation: '[[My name is Emma|Mi nombre es Emma]].' },
  { question: '[[What|Qué]] [[does|hace]] [[Emma|Emma]] [[love|amar]]?', options: ['[[Running|Correr]]', '[[Walking and exploring new places|Caminar y explorar nuevos lugares]]', '[[Swimming|Nadar]]', '[[Cycling|Montar en bicicleta]]'], correctAnswer: 1, explanation: '[[I love walking and exploring new places|Amo caminar y explorar nuevos lugares]].' },
  { question: '[[Where|Dónde]] [[did|entró]] [[Emma|Emma]] [[walk|entrar]] [[into|en]]?', options: ['[[A museum|Un museo]]', '[[A park|Un parque]]', '[[A shop|Una tienda]]', '[[A school|Una escuela]]'], correctAnswer: 1, explanation: '[[I walked into the park|Entré en el parque]].' },
  { question: '[[How|Cómo]] [[did|entró]] [[she|ella]] [[enter|entrar]] [[the park|el parque]]?', options: ['[[Through the main gate|A través de la puerta principal]]', '[[Over the wall|Por encima del muro]]', '[[Under the fence|Debajo de la valla]]', '[[Across the road|Al otro lado de la carretera]]'], correctAnswer: 0, explanation: '[[Through the main gate|A través de la puerta principal]].' },
  { question: '[[What|Qué]] [[did|hizo]] [[she|ella]] [[walk along|caminar a lo largo de]]?', options: ['[[The road|La carretera]]', '[[The river|El río]]', '[[The beach|La playa]]', '[[The mountain|La montaña]]'], correctAnswer: 1, explanation: '[[I walked along the river|Caminé a lo largo del río]].' },
  { question: '[[What|Qué]] [[did|subió]] [[she|ella]] [[go up|subir]]?', options: ['[[The stairs|Las escaleras]]', '[[A small hill|Una pequeña colina]]', '[[A tree|Un árbol]]', '[[A ladder|Una escalera]]'], correctAnswer: 1, explanation: '[[I went up a small hill|Subí por una pequeña colina]].' },
  { question: '[[What|Qué]] [[do|hacen]] [[people|la gente]] [[do|hacer]] [[around|alrededor de]] [[the lake|el lago]]?', options: ['[[Swim|Nadar]]', '[[Walk around|Caminar alrededor]]', '[[Fish|Pescar]]', '[[Boat|Ir en barca]]'], correctAnswer: 1, explanation: '[[People walking around the lake|Gente caminando alrededor del lago]].' },
  { question: '[[What|Qué]] [[did|cruzó]] [[she|ella]] [[cross|cruzar]] [[across|al otro lado de]]?', options: ['[[The road|La carretera]]', '[[The bridge|El puente]]', '[[The river|El río]]', '[[The field|El campo]]'], correctAnswer: 1, explanation: '[[I crossed across the bridge|Crucé al otro lado del puente]].' },
  { question: '[[What|Qué]] [[ran|corrió]] [[towards|hacia]] [[her|ella]]?', options: ['[[A cat|Un gato]]', '[[A dog|Un perro]]', '[[A child|Un niño]]', '[[A bird|Un pájaro]]'], correctAnswer: 1, explanation: '[[A dog ran towards me|Un perro corrió hacia mí]].' },
  { question: '[[How|Cómo]] [[did|se sintió]] [[Emma|Emma]] [[feel|sentir]] [[when|cuando]] [[she|ella]] [[got out of|salió de]] [[the park|el parque]]?', options: ['[[Tired|Cansada]]', '[[Happy and relaxed|Feliz y relajada]]', '[[Angry|Enfadada]]', '[[Sad|Triste]]'], correctAnswer: 1, explanation: '[[I felt happy and relaxed|Me sentí feliz y relajada]].' },
  { question: '[[Emma|Emma]] [[walked|caminó]] [[down|bajó]] [[the hill|la colina]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[I walked down the hill|Bajé por la colina]].' },
  { question: '[[Emma|Emma]] [[walked|pasó]] [[past|por delante de]] [[the dog|el perro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[I walked past it calmly|Pasé por delante de él tranquilamente]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[text|texto]] [[is|es]]?', options: ['[[A walk in the park using prepositions of movement|Un paseo por el parque usando preposiciones de movimiento]]', '[[Dogs in parks|Perros en parques]]', '[[City life|Vida en la ciudad]]', '[[Rivers and bridges|Ríos y puentes]]'], correctAnswer: 0, explanation: '[[The text describes a walk with many movement prepositions|El texto describe un paseo con muchas preposiciones de movimiento]].' },
  { question: '[[Which|Cuál]] [[preposition|preposición]] [[of|de]] [[movement|movimiento]] [[is|se]] [[NOT|NO]] [[mentioned|mencionada]] [[in|en]] [[the|el]] [[text|texto]]?', options: ['[[Into|Hacia dentro de]]', '[[Through|A través de]]', '[[Under|Debajo de]]', '[[Towards|Hacia]]'], correctAnswer: 2, explanation: '[[Under|Debajo de]] [[is not in the text|no está en el texto]].' },
  { question: '[[Emma|Emma]] [[got|salió]] ____ ____ ____ [[the park|el parque]] [[at|al]] [[the end|final]].', options: ['[[out of|de]]', '[[into|en]]', '[[through|a través de]]', '[[across|al otro lado de]]'], correctAnswer: 0, explanation: '[[I got out of the park|Salí del parque]].' },
];

export const UNIT_58_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u58-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Prepositions of Movement',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
