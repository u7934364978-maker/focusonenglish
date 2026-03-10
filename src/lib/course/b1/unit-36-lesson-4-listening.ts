/**
 * Unidad 36 B1 — Lección 4: Comprensión auditiva (So/such, Intensifiers)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Tom|Tom]] [[and|y]] [[I|yo]] [[want|quiero]] [[to tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[trip|viaje]] [[to|a]] [[Japan|Japón]]. [[It was|Era]] [[such an|un]] [[incredible|increíble]] [[experience|experiencia]] [[that|que]] [[I|yo]] [[will never forget|nunca olvidaré]]. [[The|Los]] [[temples|templos]] [[were|eran]] [[so|tan]] [[beautiful|hermosos]] [[that|que]] [[I|yo]] [[took|saqué]] [[so many|tantas]] [[photos|fotos]] [[that|que]] [[my phone|mi teléfono]] [[ran out of|se quedó sin]] [[memory|memoria]]. [[The food|La comida]] [[was|era]] [[really|realmente]] [[delicious|deliciosa]] [[and|y]] [[I|yo]] [[ate|comí]] [[so much|tanto]] [[sushi|sushi]] [[that|que]] [[I|yo]] [[couldn't move|no pude moverme]]. [[The people|La gente]] [[were|eran]] [[extremely|extremadamente]] [[kind|amables]] [[and|y]] [[helpful|serviciales]]. [[It was|Era]] [[such a|un]] [[wonderful|maravilloso]] [[country|país]] [[that|que]] [[I|yo]] [[plan|planeo]] [[to return|volver]] [[next|el próximo]] [[year|año]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did Tom go|fue Tom]]?', options: ['[[China|China]]', '[[Japan|Japón]]', '[[Korea|Corea]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[my trip to Japan|mi viaje a Japón]]".' },
  { question: '[[What|Qué]] [[was the experience like|era la experiencia]]?', options: ['[[boring|aburrida]]', '[[incredible|increíble]]', '[[normal|normal]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[such an incredible experience|una experiencia increíble]]".' },
  { question: '[[What|Qué]] [[were the temples like|eran los templos]]?', options: ['[[ugly|feos]]', '[[so beautiful|tan hermosos]]', '[[small|pequeños]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[The temples were so beautiful|los templos eran tan hermosos]]".' },
  { question: '[[Why|Por qué]] [[did his phone run out of memory|se quedó su teléfono sin memoria]]?', options: ['[[because he made calls|porque hizo llamadas]]', '[[because he took so many photos|porque sacó tantas fotos]]', '[[because he watched videos|porque vio vídeos]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I took so many photos that my phone ran out of memory|saqué tantas fotos que mi teléfono se quedó sin memoria]]".' },
  { question: '[[What|Qué]] [[food did he eat a lot of|comida comió mucho]]?', options: ['[[pizza|pizza]]', '[[sushi|sushi]]', '[[pasta|pasta]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I ate so much sushi|comí tanto sushi]]".' },
  { question: '[[What|Qué]] [[were the people like|eran la gente]]?', options: ['[[rude|maleducados]]', '[[extremely kind and helpful|extremadamente amables y serviciales]]', '[[busy|ocupados]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[The people were extremely kind and helpful|la gente era extremadamente amable y servicial]]".' },
  { question: '[[Will|Va]] [[Tom return|Tom volver]] [[to Japan|a Japón]]?', options: ['[[No|No]]', '[[Yes, next year|Sí, el próximo año]]', '[[Maybe|Quizás]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I plan to return next year|planeo volver el próximo año]]".' },
  { question: '[[Tom|Tom]] [[went|fue]] [[to Japan|a Japón]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[my trip to Japan|mi viaje a Japón]]".' },
  { question: '[[He|Él]] [[took|sacó]] [[few photos|pocas fotos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He took so many photos|Sacó tantas fotos]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[Tom\'s trip to Japan|El viaje de Tom a Japón]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Tom\'s trip to Japan|el viaje de Tom a Japón]].' },
  { question: '[[The food|La comida]] [[was|era]] [[really delicious|realmente deliciosa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[The food was really delicious|la comida era realmente deliciosa]]".' },
  { question: '[[What intensifier|Qué intensificador]] [[describes the people|describe a la gente]]?', options: ['[[slightly|ligeramente]]', '[[extremely|extremadamente]]', '[[a bit|un poco]]'], correctAnswer: 1, explanation: '[[The text uses|El texto usa]] "[[extremely kind|extremadamente amables]]".' },
  { question: '[[He|Él]] [[ate|comió]] [[so much sushi|tanto sushi]] [[that|que]] [[he couldn\'t move|no pudo moverse]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I ate so much sushi that I couldn\'t move|comí tanto sushi que no pude moverme]]".' },
  { question: '[[Japan|Japón]] [[was|era]] [[such a wonderful country|un país tan maravilloso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[such a wonderful country|un país tan maravilloso]]".' },
  { question: '[[The temples|Los templos]] [[were|eran]] [[beautiful|hermosos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[The temples were so beautiful|los templos eran tan hermosos]]".' },
];

export const UNIT_36_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u36-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Intensifiers',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
