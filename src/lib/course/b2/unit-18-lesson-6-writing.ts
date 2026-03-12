/**
 * Unidad 18 B2 — Lección 6: Expresión escrita (Food and drink)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Writing|Expresión escrita]]';

export const UNIT_18_LESSON_6_WRITING: Exercise[] = [
  {
    id: 'b2-u18-l6-w1',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3–4 frases describiendo una experiencia en un restaurante usando so, such, too y enough.',
      prompt:
        '[[Describe a restaurant experience|Describe una experiencia en un restaurante]]. [[Use so, such, too and enough|Usa tan, tal, demasiado y suficiente]] ([[e.g.|e.g.]] "[[The food was so good that|La comida era tan buena que]]...", "[[The portion was big enough to|La porción era lo bastante grande para]]...").',
      targetLevel: 'B2',
      writingType: 'description',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w2',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con so, such, too o enough.',
      questions: [
        {
          question:
            '[[The pasta|La pasta]] [[was|era]] ____ [[delicious|deliciosa]] [[that|que]] [[I had a second helping|pedí una segunda ración]].',
          options: ['[[so|tan]]', '[[such|tal]]', '[[too|demasiado]]'],
          correctAnswer: '[[so|tan]]',
          acceptableAnswers: ['[[so|tan]]'],
          explanation:
            'So + adjective: "so delicious" = tan delicioso. Se usa "that" para la consecuencia.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w3',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Reescribe la frase usando such: "The meal was very good. We stayed for dessert."',
      prompt:
        '[[Combine into one sentence using|Combina en una frase usando]] "[[such a... that|tan buena... que]]"',
      expressionHint: '[[It was such a good meal that we stayed for dessert|Fue tan buena comida que nos quedamos para el postre]].',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w4',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2 frases: una con "too + adjective" y otra con "adjective + enough".',
      prompt:
        '[[Write two sentences about food using|Escribe dos frases sobre comida usando]]:\n- [[too + adjective|demasiado + adjetivo]] ([[e.g.|e.g.]] [[too salty|demasiado salado]])\n- [[adjective + enough|adjetivo + suficiente]] ([[e.g.|e.g.]] [[sweet enough|lo bastante dulce]])',
      targetLength: '2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w5',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con so, such o too.',
      questions: [
        {
          question:
            '[[The soup|La sopa]] [[was|estaba]] ____ [[hot|caliente]] [[to eat|para comer]]. [[I had to wait for it to cool down|Tuve que esperar a que se enfriara]].',
          options: ['[[too|demasiado]]', '[[so|tan]]', '[[such|tal]]'],
          correctAnswer: '[[too|demasiado]]',
          acceptableAnswers: ['[[too|demasiado]]'],
          explanation:
            'Too + adjective: "too hot" = demasiado caliente. Implica que no se pudo comer.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w6',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve párrafo (3–4 frases) sobre tu restaurante favorito. Incluye al menos una estructura con so, such, too o enough.',
      prompt:
        '[[Describe your favourite restaurant|Describe tu restaurante favorito]]. [[Use vocabulary|Usa vocabulario]]: [[menu|menú]], [[portion|porción]], [[starter|entrante]], [[main course|plato principal]], [[dessert|postre]].',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w7',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa las frases con ideas propias usando so, such, too o enough.',
      prompt:
        "[[Finish these sentences|Completa estas frases]]:\n1. [[The restaurant had so many|El restaurante tenía tantos]]...\n2. [[The coffee was too|El café era demasiado]]...\n3. [[The portion wasn't big enough to|La porción no era lo bastante grande para]]...",
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w8',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Completa con enough, too o so.',
      questions: [
        {
          question:
            "[[The cake|La tarta]] [[wasn't|no era]] [[sweet|dulce]] ____ [[for my taste|para mi gusto]]. [[I prefer more sugar|Prefiero más azúcar]].",
          options: ['[[enough|suficiente]]', '[[too|demasiado]]', '[[so|tan]]'],
          correctAnswer: '[[enough|suficiente]]',
          acceptableAnswers: ['[[enough|suficiente]]'],
          explanation:
            'Adjective + enough: "wasn\'t sweet enough" = no era lo bastante dulce.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w9',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe la introducción de un artículo (40–60 palabras) sobre la dieta mediterránea.',
      prompt:
        '[[Write an introduction to an article about the Mediterranean diet|Escribe la introducción de un artículo sobre la dieta mediterránea]]. [[Use vocabulary|Usa vocabulario]]: [[fresh|fresco]], [[vegetables|verduras]], [[olive oil|aceite de oliva]], [[healthy|saludable]].',
      writingType: 'article',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w10',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases explicando por qué es importante leer el menú antes de pedir.',
      prompt:
        "[[Explain why it's important to read the menu carefully before ordering|Explica por qué es importante leer el menú con cuidado antes de pedir]]. [[Consider|Considera]]: [[allergens|alérgenos]], [[portions|porciones]], [[and prices|y precios]].",
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w11',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con so many o so much.',
      questions: [
        {
          question:
            "[[There were|Había]] ____ [[many choices|muchas opciones]] [[on the menu|en el menú]] [[that|que]] [[I couldn't decide|no pude decidir]].",
          options: ['[[so|tan]]', '[[such|tal]]', '[[too|demasiado]]'],
          correctAnswer: '[[so|tan]]',
          acceptableAnswers: ['[[so|tan]]'],
          explanation:
            'So many + plural: "so many choices" = tantas opciones.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w12',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Transforma la frase usando too: "The coffee was very strong. I couldn\'t drink it without milk."',
      prompt:
        '[[Use|Usa]] "[[too... to|demasiado... para]]"',
      expressionHint: '[[The coffee was too strong to drink without milk|El café era demasiado fuerte para beber sin leche]].',
      targetLength: '1 frase',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w13',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 3 frases: una con so, otra con such y otra con enough.',
      prompt:
        '[[Write three sentences about food or restaurants using|Escribe tres frases sobre comida o restaurantes usando]]:\n- [[so + adjective|tan + adjetivo]] ([[e.g.|e.g.]] [[so delicious|tan delicioso]])\n- [[such a + noun|tal + sustantivo]] ([[e.g.|e.g.]] [[such a good meal|tan buena comida]])\n- [[enough|suficiente]] ([[e.g.|e.g.]] [[big enough to share|lo bastante grande para compartir]])',
      targetLength: '3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w14',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con such a o such an.',
      questions: [
        {
          question:
            '[[It was|Era]] ____ [[expensive restaurant|restaurante caro]] [[that|que]] [[we could only afford to go once a year|solo podíamos permitirnos ir una vez al año]].',
          options: ['[[such an|tan]]', '[[so an|tan un]]', '[[too an|demasiado un]]'],
          correctAnswer: '[[such an|tan]]',
          acceptableAnswers: ['[[such an|tan]]'],
          explanation:
            'Such a/an + adjective + noun: "such an expensive restaurant" = un restaurante tan caro.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w15',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe un breve texto (aprox. 60–80 palabras) sobre las ventajas de cocinar en casa.',
      prompt:
        '[[Explain the advantages of cooking at home|Explica las ventajas de cocinar en casa]]. [[Use vocabulary|Usa vocabulario]]: [[recipe|receta]], [[ingredients|ingredientes]], [[portion|porción]], [[healthy|saludable]].',
      targetLength: '60-80 palabras',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w16',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Escribe 2–3 frases dando consejos a alguien que va a un restaurante por primera vez.',
      prompt:
        '[[Give advice to someone eating at a restaurant for the first time|Da consejos a alguien que come en un restaurante por primera vez]]. [[Use|Usa]]: [[place an order|hacer un pedido]], [[book a table|reservar una mesa]], [[tip|propina]].',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w17',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          question:
            "[[We didn't have|No tuvimos]] ____ [[time|tiempo]] [[to order dessert|para pedir postre]]. [[The restaurant was closing|El restaurante estaba cerrando]].",
          options: ['[[enough|suficiente]]', '[[too|demasiado]]', '[[so|tan]]'],
          correctAnswer: '[[enough|suficiente]]',
          acceptableAnswers: ['[[enough|suficiente]]'],
          explanation:
            'Enough + noun: "enough time" = suficiente tiempo.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'b2-u18-l6-w18',
    type: 'writing',
    level: 'B2',
    topic: 'Food and drink',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions:
        'Redacta la conclusión de un artículo (40–60 palabras) sobre por qué la comida local es mejor que la cadena de restaurantes.',
      prompt:
        '[[Write a short conclusion explaining why local food is better than chain restaurants|Escribe una breve conclusión explicando por qué la comida local es mejor que las cadenas de restaurantes]]. [[Use so, such, too or enough where appropriate|Usa tan, tal, demasiado o suficiente donde sea apropiado]].',
      targetLength: '40-60 palabras',
    },
    topicName: 'Writing',
  },
];
