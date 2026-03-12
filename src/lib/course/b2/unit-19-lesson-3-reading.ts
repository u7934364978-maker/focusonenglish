/**
 * Unidad 19 B2 — Lección 3: Comprensión lectora (Sport)
 * 18 actividades (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last summer|El verano pasado]], [[the Olympic Games|los Juegos Olímpicos]] [[were held|se celebraron]] [[in Paris|en París]], [[and|y]] [[athletes|atletas]] [[from over 200 countries|de más de 200 países]] [[competed|compitieron]] [[for medals|por medallas]]. [[The more you train|Cuanto más entrenas]], [[the fitter you become|más en forma te vuelves]] [[according to|según]] [[sports scientists|científicos del deporte]], [[who|que]] [[have studied|han estudiado]] [[the link between|el vínculo entre]] [[practice|práctica]] [[and|y]] [[performance|rendimiento]]. [[Swimming|La natación]] [[is|es]] [[one of the most popular|uno de los más populares]] [[Olympic sports|deportes olímpicos]], [[and|y]] [[the 100-metre freestyle|los 100 metros libres]] [[is|es]] [[by far the most watched|con diferencia el más visto]] [[event|prueba]] [[on television|en televisión]]. [[Some athletes|Algunos atletas]] [[run|corren]] [[far faster|mucho más rápido]] [[than they did|que antes]] [[a few years ago|hace unos años]], [[thanks to|gracias a]] [[improved training methods|métodos de entrenamiento mejorados]] [[and|y]] [[better equipment|mejor equipo]]. [[Team sports|Los deportes de equipo]] [[like football|como el fútbol]] [[are|son]] [[not as individual|no tan individuales]] [[as|como]] [[athletics|el atletismo]], [[but|pero]] [[teamwork|el trabajo en equipo]] [[is|es]] [[no less important|no menos importante]] [[than|que]] [[individual skill|la habilidad individual]]. [[That was|Esa fue]] [[the best match|el mejor partido]] [[I have ever watched|que he visto jamás]], [[said|dijo]] [[one spectator|un espectador]] [[after|después de]] [[the final|la final]].`;

const INSTRUCTIONS =
  'Lee el texto sobre los Juegos Olímpicos y el deporte. Después responde las preguntas.';

const QUESTIONS = [
  {
    question:
      '[[Where|Dónde]] [[were the Olympic Games held last summer|se celebraron los Juegos Olímpicos el verano pasado]]?',
    options: [
      '[[In Paris|En París]]',
      '[[In Tokyo|En Tokio]]',
      '[[In London|En Londres]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "the Olympic Games were held in Paris".',
  },
  {
    question:
      '[[How many|Cuántos]] [[countries|países]] [[did athletes come from|de cuántos países vinieron los atletas]]?',
    options: [
      '[[Over 200|Más de 200]]',
      '[[About 100|Unos 100]]',
      '[[Exactly 50|Exactamente 50]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se menciona que "athletes from over 200 countries competed".',
  },
  {
    question:
      '[[According to sports scientists|Según los científicos del deporte]], [[what|qué]] [[is the link between training and fitness|es el vínculo entre entrenamiento y forma física]]?',
    options: [
      '[[The more you train, the fitter you become|Cuanto más entrenas, más en forma te vuelves]]',
      '[[Training has no effect|El entrenamiento no tiene efecto]]',
      '[[Less training is better|Menos entrenamiento es mejor]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto indica que "The more you train, the fitter you become according to sports scientists".',
  },
  {
    question:
      '[[What|Qué]] [[is described as "by far the most watched" event|se describe como "con diferencia el más visto"]]?',
    options: [
      '[[The 100-metre freestyle|Los 100 metros libres]]',
      '[[The marathon|El maratón]]',
      '[[Football|El fútbol]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que "the 100-metre freestyle is by far the most watched event on television".',
  },
  {
    question:
      '[[Why|Por qué]] [[do some athletes run far faster than before|algunos atletas corren mucho más rápido que antes]]?',
    options: [
      '[[Thanks to improved training methods and better equipment|Gracias a métodos de entrenamiento mejorados y mejor equipo]]',
      '[[Because they eat less|Porque comen menos]]',
      '[[Because the tracks are shorter|Porque las pistas son más cortas]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice "thanks to improved training methods and better equipment".',
  },
  {
    question:
      '[[According to the text|Según el texto]], [[how|qué]] [[does teamwork compare to individual skill in team sports|se compara el trabajo en equipo con la habilidad individual en deportes de equipo]]?',
    options: [
      '[[Teamwork is no less important than individual skill|El trabajo en equipo no es menos importante que la habilidad individual]]',
      '[[Individual skill is more important|La habilidad individual es más importante]]',
      '[[Teamwork is less important|El trabajo en equipo es menos importante]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que "teamwork is no less important than individual skill".',
  },
  {
    question:
      '[[The text states|El texto afirma]] [[that|que]] [[swimming is one of the most popular Olympic sports|la natación es uno de los deportes olímpicos más populares]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: "Swimming is one of the most popular Olympic sports".',
  },
  {
    question:
      '[[What|Qué]] [[grammar structure|estructura gramatical]] [[is used|se usa]] [[in|en]] "The more you train, the fitter you become"?',
    options: [
      '[[The + comparative... the + comparative (correlation)|The + comparativo... the + comparativo (correlación)]]',
      '[[Superlative|Superlativo]]',
      '[[As... as|As... as]]',
    ],
    correctAnswer: 0,
    explanation:
      'Es el doble comparativo: the more... the fitter = cuanto más... más.',
  },
  {
    question:
      '[[Which grammar structure|Qué estructura gramatical]] [[appears|aparece]] [[in|en]] "far faster than they did"?',
    options: [
      '[[far + comparative (emphasis)|far + comparativo (énfasis)]]',
      '[[superlative + ever|superlativo + ever]]',
      '[[the least + adjective|the least + adjetivo]]',
    ],
    correctAnswer: 0,
    explanation:
      '"Far faster" = mucho más rápido. Far/much enfatizan el comparativo.',
  },
  {
    question:
      '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?',
    options: [
      '[[The Olympics, training, performance and the importance of teamwork in sport|Los Juegos Olímpicos, entrenamiento, rendimiento e importancia del trabajo en equipo]]',
      '[[Paris is the best city|París es la mejor ciudad]]',
      '[[Swimming is the only important sport|La natación es el único deporte importante]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto trata de los Juegos Olímpicos, entrenamiento, rendimiento y trabajo en equipo.',
  },
  {
    question:
      '[[Which phrase|Qué frase]] [[expresses|expresa]] [[superlative with emphasis|superlativo con énfasis]] [[in the text|en el texto]]?',
    options: [
      '[[by far the most watched|con diferencia el más visto]]',
      '[[far faster|mucho más rápido]]',
      '[[the more you train|cuanto más entrenas]]',
    ],
    correctAnswer: 0,
    explanation:
      '"By far the most watched" = con diferencia el más visto (énfasis en el superlativo).',
  },
  {
    question:
      '[[The text implies|El texto implica]] [[that|que]] [[team sports require both teamwork and individual skill|los deportes de equipo requieren tanto trabajo en equipo como habilidad individual]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation:
      'Verdadero: "teamwork is no less important than individual skill".',
  },
  {
    question:
      '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?',
    options: [
      '[[athletes, compete, train, performance, teamwork|athletes, compete, train, performance, teamwork]]',
      '[[food, recipe, ingredients|food, recipe, ingredients]]',
      '[[technology, software, app|technology, software, app]]',
    ],
    correctAnswer: 0,
    explanation:
      'El campo semántico es deporte: athletes, compete, train, performance, teamwork.',
  },
  {
    question:
      '[[What|Qué]] [[did one spectator say|dijo un espectador]]?',
    options: [
      '[[That was the best match I have ever watched|Ese fue el mejor partido que he visto jamás]]',
      '[[The Olympics were boring|Los Juegos Olímpicos fueron aburridos]]',
      '[[Swimming is overrated|La natación está sobrevalorada]]',
    ],
    correctAnswer: 0,
    explanation:
      'El espectador dijo "That was the best match I have ever watched".',
  },
  {
    question:
      '[[According to the text|Según el texto]], [[team sports|los deportes de equipo]] ____ [[individual sports|los deportes individuales]].',
    options: [
      '[[are not as individual as|no son tan individuales como]]',
      '[[are more individual than|son más individuales que]]',
      '[[are the same as|son iguales que]]',
    ],
    correctAnswer: 0,
    explanation:
      'Se dice que "Team sports... are not as individual as athletics".',
  },
  {
    question:
      '[[How|Cómo]] [[does the text describe|describe el texto]] [[the 100-metre freestyle|los 100 metros libres]]?',
    options: [
      '[[By far the most watched event on television|Con diferencia el evento más visto en televisión]]',
      '[[The least popular event|El evento menos popular]]',
      '[[The longest event|El evento más largo]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto dice que "the 100-metre freestyle is by far the most watched event on television".',
  },
  {
    question:
      '[[What|Qué]] [[purpose|propósito]] [[does the text serve|sirve el texto]]?',
    options: [
      '[[To inform about the Olympics and aspects of sport|Informar sobre los Juegos Olímpicos y aspectos del deporte]]',
      '[[To advertise the Olympics|Anunciar los Juegos Olímpicos]]',
      '[[To criticise athletes|Criticar a los atletas]]',
    ],
    correctAnswer: 0,
    explanation:
      'El texto informa sobre los Juegos Olímpicos, entrenamiento, rendimiento y trabajo en equipo.',
  },
  {
    question:
      '[[The phrase|La frase]] [["no less important than"|"no less important than"]] [[means|significa]] ____.',
    options: [
      '[[Equally important (no menos importante que)|Igual de importante (no menos importante que)]]',
      '[[Less important|Menos importante]]',
      '[[More important|Más importante]]',
    ],
    correctAnswer: 0,
    explanation:
      '"No less important than" = no menos importante que = igual de importante.',
  },
];

export const UNIT_19_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u19-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'Sport',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
