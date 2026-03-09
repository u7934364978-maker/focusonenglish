/**
 * Unidad 12 — Lección 3: Comprensión lectora (Present Perfect Ever & Never)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Have|¿Has]] [[you|tú]] [[ever|alguna vez]] [[wondered|pensado]] [[what|qué]] [[your|tus]] [[friends|amigos]] [[have|han]] [[or|o]] [[haven\'t|no han]] [[done|hecho]]? [[I|Yo]] [[asked|pregunté]] [[my|mis]] [[classmates|compañeros]] [[some|algunas]] [[questions|preguntas]]. [[Have you ever flown in a plane?|¿Has volado alguna vez en avión?]] [[Most|La mayoría]] [[of|de]] [[them|ellos]] [[said|dijeron]] [[Yes|Sí]], [[I have|he]]. [[Have you ever eaten sushi?|¿Has comido sushi alguna vez?]] [[Some|Algunos]] [[said|dijeron]] [[Yes|Sí]] [[and|y]] [[some|algunos]] [[said|dijeron]] [[No|No]], [[I haven\'t|no he]]. [[Have you ever been to a concert?|¿Has estado alguna vez en un concierto?]] [[Many|Muchos]] [[said|dijeron]] [[Yes|Sí]]. [[One|Uno]] [[friend|amigo]] [[said|dijo]]: "[[I have never been to a concert|Nunca he estado en un concierto]]. [[I|Yo]] [[would|me gustaría]] [[like|gustaría]] [[to|a]] [[go|ir]] [[one day|algún día]]." [[It|Fue]] [[was|fue]] [[interesting|interesante]] [[to|conocer]] [[learn|aprender]] [[about|sobre]] [[their|sus]] [[experiences|experiencias]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[did|hizo]] [[the|el]] [[writer|escritor]] [[ask|preguntar]] [[his|sus]] [[classmates|compañeros]]?',
    options: ['[[About|Sobre]] [[their|sus]] [[homework|deberes]]', '[[Some|Algunas]] [[questions|preguntas]] [[about|sobre]] [[experiences|experiencias]]', '[[About|Sobre]] [[their|sus]] [[favourite|favoritas]] [[films|películas]]', '[[About|Sobre]] [[the|el]] [[weather|tiempo]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I asked my classmates some questions|Pregunté a mis compañeros algunas preguntas]]".',
  },
  {
    question: '[[What|Qué]] [[was|fue]] [[the|la]] [[first|primera]] [[question|pregunta]]?',
    options: ['[[Have you ever eaten sushi?|¿Has comido sushi alguna vez?]]', '[[Have you ever flown in a plane?|¿Has volado alguna vez en avión?]]', '[[Have you ever been to a concert?|¿Has estado alguna vez en un concierto?]]', '[[Have you ever travelled?|¿Has viajado alguna vez?]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Have you ever flown in a plane?|¿Has volado alguna vez en avión?]]" [[as|como]] [[first|primera]] [[question|pregunta]].',
  },
  {
    question: '[[How|Cómo]] [[did|respondieron]] [[most|la mayoría]] [[respond|responder]] [[to|a]] [[the|la]] [[plane|avión]] [[question|pregunta]]?',
    options: ['[[No|No]], [[I haven\'t|no he]]', '[[Yes|Sí]], [[I have|he]]', '[[Maybe|Quizás]]', '[[I don\'t know|No sé]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Most of them said Yes, I have|La mayoría dijo Sí, he]]".',
  },
  {
    question: '[[What|Qué]] [[about|sobre]] [[sushi|sushi]]? [[Did|¿]] [[everyone|todos]] [[say|dijeron]] [[the|lo]] [[same|mismo]]?',
    options: ['[[Yes|Sí]], [[everyone|todos]] [[said|dijeron]] [[Yes|Sí]]', '[[No|No]], [[some|algunos]] [[said|dijeron]] [[Yes|Sí]] [[and|y]] [[some|algunos]] [[said|dijeron]] [[No|No]]', '[[No one|Nadie]] [[answered|respondió]]', '[[Everyone|Todos]] [[said|dijeron]] [[No|No]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Some said Yes and some said No, I haven\'t|Algunos dijeron Sí y algunos dijeron No, no he]]".',
  },
  {
    question: '[[What|Qué]] [[about|sobre]] [[concerts|conciertos]]?',
    options: ['[[No one|Nadie]] [[had|había]] [[been|estado]] [[to|a]] [[a|un]] [[concert|concierto]]', '[[Many|Muchos]] [[said|dijeron]] [[Yes|Sí]]', '[[Only|Solo]] [[one|uno]] [[person|persona]] [[had|había]] [[been|estado]]', '[[Everyone|Todos]] [[said|dijeron]] [[No|No]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Many said Yes|Muchos dijeron Sí]]".',
  },
  {
    question: '[[What|Qué]] [[did|dijo]] [[one|un]] [[friend|amigo]] [[about|sobre]] [[concerts|conciertos]]?',
    options: ['[[He|Él]] [[has|ha]] [[been|estado]] [[to|a]] [[many|muchos]] [[concerts|conciertos]]', '[[He|Él]] [[has|ha]] [[never|nunca]] [[been|estado]] [[to|a]] [[a|un]] [[concert|concierto]] [[and|y]] [[would|le gustaría]] [[like|gustaría]] [[to|a]] [[go|ir]] [[one day|algún día]]', '[[He|Él]] [[doesn\'t|no]] [[like|le gusta]] [[music|música]]', '[[He|Él]] [[went|fue]] [[last week|la semana pasada]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I have never been to a concert. I would like to go one day|Nunca he estado en un concierto. Me gustaría ir algún día]]".',
  },
  {
    question: '[[How|Cómo]] [[did|estaba]] [[the|el]] [[writer|escritor]] [[feel|sentirse]] [[about|sobre]] [[the|la]] [[activity|actividad]]?',
    options: ['[[Bored|Aburrido]]', '[[Angry|Enfadado]]', '[[Interesting|Interesante]] [[to|conocer]] [[learn|aprender]] [[about|sobre]] [[their|sus]] [[experiences|experiencias]]', '[[Tired|Cansado]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[It was interesting to learn about their experiences|Fue interesante aprender sobre sus experiencias]]".',
  },
  {
    question: '[[Most|La mayoría]] [[classmates|compañeros]] [[have|han]] [[flown|volado]] [[in|en]] [[a|un]] [[plane|avión]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[Most of them said Yes, I have|La mayoría dijo Sí, he]]".',
  },
  {
    question: '[[Everyone|Todos]] [[said|dijeron]] [[Yes|Sí]] [[to|a]] [[the|la]] [[sushi|sushi]] [[question|pregunta]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[Some|Algunos]] [[said|dijeron]] [[Yes|Sí]] [[and|y]] [[some|algunos]] [[said|dijeron]] [[No|No]].',
  },
  {
    question: '[[One|Un]] [[friend|amigo]] [[has|ha]] [[never|nunca]] [[been|estado]] [[to|a]] [[a|un]] [[concert|concierto]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[said|dijo]] "[[I have never been to a concert|Nunca he estado en un concierto]]".',
  },
  {
    question: '[[The|El]] [[writer|escritor]] [[asked|preguntó]] [[about|sobre]] [[homework|deberes]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[asked|preguntó]] [[about|sobre]] [[experiences|experiencias]] ([[flown|volado]], [[sushi|sushi]], [[concert|concierto]]).',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Una]] [[recipe|receta]] [[for|para]] [[sushi|sushi]]', '[[Asking|Preguntar]] [[about|sobre]] [[experiences|experiencias]] [[with|con]] [[Have you ever...?|¿Has... alguna vez?]]', '[[A|Un]] [[concert|concierto]] [[review|reseña]]', '[[Travel|Viajes]] [[tips|consejos]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[asking|preguntar]] [[classmates|compañeros]] [[about|sobre]] [[their|sus]] [[experiences|experiencias]] [[with|con]] [[Have you ever...?|¿Has... alguna vez?]]',
  },
  {
    question: '[[Which|Cuál]] [[question|pregunta]] [[is|es]] [[NOT|NO]] [[in|en]] [[the|el]] [[text|texto]]?',
    options: ['[[Have you ever flown in a plane?|¿Has volado alguna vez en avión?]]', '[[Have you ever eaten sushi?|¿Has comido sushi alguna vez?]]', '[[Have you ever been to a concert?|¿Has estado alguna vez en un concierto?]]', '[[Have you ever been to Japan?|¿Has estado alguna vez en Japón?]]'],
    correctAnswer: 3,
    explanation: '[[The|El]] [[text|texto]] [[doesn\'t|no]] [[mention|menciona]] [[Japan|Japón]].',
  },
  {
    question: '[[What|Qué]] [[does|significa]] "[[I have never been to a concert|Nunca he estado en un concierto]]" [[mean|significar]]?',
    options: ['[[The|La]] [[person|persona]] [[goes|va]] [[to|a]] [[concerts|conciertos]] [[every|cada]] [[week|semana]]', '[[The|La]] [[person|persona]] [[has|ha]] [[not|no]] [[been|estado]] [[to|a]] [[a|un]] [[concert|concierto]] [[in|en]] [[their|su]] [[life|vida]]', '[[The|La]] [[person|persona]] [[doesn\'t|no]] [[like|le gusta]] [[music|música]]', '[[The|La]] [[person|persona]] [[will|irá]] [[go|ir]] [[tomorrow|mañana]]'],
    correctAnswer: 1,
    explanation: '[[Never|Nunca]] = [[not|no]] [[once|ni una vez]] [[in|en]] [[life|vida]].',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[the|el]] [[writer|escritor]] [[asking|preguntando]]?',
    options: ['[[His|Sus]] [[teachers|profesores]]', '[[His|Sus]] [[classmates|compañeros]]', '[[His|Su]] [[family|familia]]', '[[Strangers|Desconocidos]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I asked my classmates|Pregunté a mis compañeros]]".',
  },
];

export const UNIT_12_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u12-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Present Perfect Ever Never',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
