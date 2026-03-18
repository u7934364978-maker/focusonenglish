/**
 * C1 Unit 4 — The Natural World
 * Module 4: The Natural World
 * Grammar: Advanced relative clauses and hedging language
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = 'The Natural World';

export const UNIT_4_EXERCISES: Exercise[] = [
  {
    id: 'c1-u4-g1',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'relative-clauses',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Advanced Relative Clauses|Oraciones de relativo avanzadas]]',
      instructions: 'Choose the correct relative pronoun.',
      questions: [
        {
          question: 'The Amazon rainforest, _______ deforestation rates have accelerated alarmingly, is home to millions of species.',
          options: ["[[whose|cuyas]]", '[[which|cuya]]', '[[that|cuya]]'],
          correctAnswer: 0,
          explanation: 'Whose = possessive relative pronoun. "The forest whose deforestation rates..." = its deforestation rates.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u4-g2',
    type: 'fill-blank',
    level: 'C1',
    topic: 'relative-clauses',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Advanced Relative Clauses|Oraciones de relativo avanzadas]]',
      instructions: 'Complete with the correct relative structure.',
      questions: [
        {
          question: 'Climate change, the consequences _______ _______ are becoming increasingly visible, requires urgent global action.',
          options: ['[[of which|de las cuales]]', '[[of that|de eso]]', '[[of whose|de cuyas]]'],
          correctAnswer: 'of which',
          acceptableAnswers: ['of which'],
          explanation: 'Preposition + which = formal relative clause. "The consequences of which" = whose consequences.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u4-g3',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'hedging-language',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Hedging Language|Lenguaje de cobertura]]',
      instructions: 'Choose the most appropriate hedging expression.',
      questions: [
        {
          question: 'Current data _______ suggest that global temperatures could rise by 2°C within this century.',
          options: ['[[would appear to|parecerían]]', '[[definitely|definitivamente]]', '[[obviously|obviamente]]'],
          correctAnswer: 0,
          explanation: '"Would appear to" is a sophisticated hedging phrase that qualifies a claim without overstating certainty.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u4-g4',
    type: 'fill-blank',
    level: 'C1',
    topic: 'hedging-language',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Hedging Language|Lenguaje de cobertura]]',
      instructions: 'Complete the sentence with appropriate hedging language.',
      questions: [
        {
          question: 'The evidence _______ to suggest a direct link between habitat destruction and species extinction.',
          options: ['[[tends|tiende]]', '[[proves|prueba]]', '[[confirms|confirma]]'],
          correctAnswer: 'tends',
          acceptableAnswers: ['tends'],
          explanation: '"Tends to suggest" = hedging expression indicating probability, not certainty.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u4-g5',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'emphasis-structures',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Emphasis Structures|Estructuras de énfasis]]',
      instructions: 'Choose the sentence with the most effective emphasis structure.',
      questions: [
        {
          question: 'Which sentence uses an emphasis structure correctly?',
          options: [
            '[[Such was the scale of the destruction that entire ecosystems collapsed overnight.|Tal fue la escala de la destrucción que ecosistemas enteros colapsaron de la noche a la mañana.]]',
            '[[The scale of destruction was very big and ecosystems collapsed.|La escala de la destrucción era muy grande y los ecosistemas colapsaron.]]',
            '[[Very big was the scale of the destruction that ecosystems collapsed.|Muy grande fue la escala de la destrucción que los ecosistemas colapsaron.]]',
          ],
          correctAnswer: 0,
          explanation: '"Such was the + noun + that..." = emphasis structure for dramatic effect at C1 level.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u4-v1',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'environment-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[The Natural World|El mundo natural]]',
      instructions: 'Choose the correct word.',
      questions: [
        {
          question: 'Protecting the _______ of wetlands is essential — once destroyed, these complex ecological systems are nearly impossible to restore.',
          options: ['[[biodiversity|biodiversidad]]', '[[deforestation|deforestación]]', '[[automation|automatización]]'],
          correctAnswer: 0,
          explanation: 'Biodiversity = the variety of life forms in a particular habitat or ecosystem.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u4-v2',
    type: 'fill-blank',
    level: 'C1',
    topic: 'environment-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[The Natural World|El mundo natural]]',
      instructions: 'Complete the sentence.',
      questions: [
        {
          question: 'The government introduced a _______ strategy to reduce greenhouse gas output and limit temperature rise.',
          options: ['[[mitigation|mitigación]]', '[[adaptation|adaptación]]', '[[restoration|restauración]]'],
          correctAnswer: 'mitigation',
          acceptableAnswers: ['mitigation'],
          explanation: 'Mitigation = action taken to reduce the severity of something, especially climate change.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u4-v3',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'environment-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[The Natural World|El mundo natural]]',
      instructions: 'Choose the best word.',
      questions: [
        {
          question: 'Scientists warn that we may be approaching a _______ beyond which climate change becomes irreversible.',
          options: ['[[tipping point|punto de inflexión]]', '[[turning point|giro decisivo]]', '[[starting point|punto de partida]]'],
          correctAnswer: 0,
          explanation: 'Tipping point = the point at which a series of small changes becomes significant and irreversible.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u4-v4',
    type: 'fill-blank',
    level: 'C1',
    topic: 'environment-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[The Natural World|El mundo natural]]',
      instructions: 'Complete the sentence.',
      questions: [
        {
          question: 'The country committed to achieving _______ _______ by 2050, meaning it will offset all carbon emissions.',
          options: ['[[net zero|cero neto]]', '[[carbon free|libre de carbono]]', '[[zero waste|residuo cero]]'],
          correctAnswer: 'net zero',
          acceptableAnswers: ['net zero'],
          explanation: 'Net zero = the state where greenhouse gas emissions are balanced by removal.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u4-v5',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'environment-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[The Natural World|El mundo natural]]',
      instructions: 'Choose the best word.',
      questions: [
        {
          question: 'The charity focuses on _______ — reintroducing native species and restoring wild landscapes to their natural state.',
          options: ['[[rewilding|rewilding]]', '[[farming|agricultura]]', '[[urbanisation|urbanización]]'],
          correctAnswer: 0,
          explanation: 'Rewilding = the process of protecting and restoring wild areas by reintroducing native species.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u4-r1',
    type: 'reading-comprehension',
    level: 'C1',
    topic: 'environment-reading',
    difficulty: 'hard',
    content: {
      title: '[[Reading|Lectura]]: [[Climate Change|Cambio climático]]',
      instructions: 'Read and answer.',
      questions: [
        {
          question: 'Text: "It would appear that the window for effective climate action is narrowing at a pace that even the most pessimistic models failed to anticipate. Such is the urgency that incremental policy measures may no longer suffice."\n\nThe author\'s message is:',
          options: [
            '[[climate change is progressing slower than expected|el cambio climático avanza más lentamente de lo esperado]]',
            '[[urgent and radical action is needed beyond incremental steps|se necesita una acción urgente y radical más allá de los pasos incrementales]]',
            '[[current policies are sufficient to address climate change|las políticas actuales son suficientes para abordar el cambio climático]]',
          ],
          correctAnswer: 1,
          explanation: '"No longer suffice" and "urgency" convey the need for more radical action.',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'c1-u4-r2',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'environment-reading',
    difficulty: 'hard',
    content: {
      title: '[[Reading|Lectura]]: [[Biodiversity|Biodiversidad]]',
      instructions: 'Choose the correct inference.',
      questions: [
        {
          question: 'Text: "Ecosystems whose biodiversity has been reduced tend to be far more vulnerable to disease, invasive species and climate disruption." What does this imply?',
          options: [
            '[[biodiversity is purely aesthetic|la biodiversidad es puramente estética]]',
            '[[greater biodiversity increases ecosystem resilience|una mayor biodiversidad aumenta la resiliencia del ecosistema]]',
            '[[invasive species benefit from biodiversity|las especies invasoras se benefician de la biodiversidad]]',
          ],
          correctAnswer: 1,
          explanation: '"More vulnerable" when biodiversity is reduced implies that biodiversity provides resilience.',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'c1-u4-l1',
    type: 'listening-comprehension',
    level: 'C1',
    topic: 'environment-listening',
    difficulty: 'hard',
    content: {
      title: '[[Listening|Comprensión auditiva]]: [[Sustainable Living|Vida sostenible]]',
      instructions: 'Listen and choose the correct answer.',
      questions: [
        {
          question: 'A speaker says: "There is reason to believe that individual lifestyle choices, while important, are insufficient without systemic change at the corporate and governmental level." What is the speaker arguing?',
          options: [
            '[[individual action is the only solution|la acción individual es la única solución]]',
            '[[individual action alone is not enough — systemic change is also needed|la acción individual sola no es suficiente; también se necesita un cambio sistémico]]',
            '[[corporations and governments are not responsible for climate change|las corporaciones y los gobiernos no son responsables del cambio climático]]',
          ],
          correctAnswer: 1,
          explanation: '"While important" concedes individual action has value, but "insufficient without" stresses systemic change is necessary.',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'c1-u4-w1',
    type: 'writing',
    level: 'C1',
    topic: 'argumentative-essay',
    difficulty: 'hard',
    content: {
      title: '[[Writing|Escritura]]: [[Argumentative Essay|Ensayo argumentativo]]',
      instructions: 'Choose the best hedging sentence for an academic essay on climate policy.',
      questions: [
        {
          question: 'Which sentence best hedges a claim about the effectiveness of carbon taxes?',
          options: [
            '[[Research consistently demonstrates that carbon taxes are an effective policy tool for reducing greenhouse gas emissions, as evidenced by successful implementations in Nordic countries and Canada, which have achieved measurable reductions without significant economic harm to households or industries.|La investigación demuestra consistentemente que los impuestos al carbono son una herramienta política efectiva para reducir las emisiones de gases de efecto invernadero, como lo evidencian las implementaciones exitosas en los países nórdicos y Canadá.]]',
            '[[The evidence would appear to suggest that carbon pricing mechanisms tend to reduce emissions, albeit with varying degrees of effectiveness across different economic contexts.|La evidencia parecería sugerir que los mecanismos de fijación de precios del carbono tienden a reducir las emisiones, aunque con grados variables de efectividad.]]',
            '[[Carbon taxes seem to work reasonably well in some contexts, and there is reason to think that pricing carbon emissions is a sensible approach in developed economies, although more comprehensive research across a wider range of economic settings would be needed before any firm conclusions could be drawn.|Los impuestos al carbono parecen funcionar razonablemente bien en algunos contextos, y hay razones para pensar que fijar el precio de las emisiones de carbono es un enfoque sensato en las economías desarrolladas, aunque se necesitaría más investigación antes de sacar conclusiones firmes.]]',
          ],
          correctAnswer: 1,
          explanation: 'Option B uses "would appear to suggest", "tend to", and "albeit" — all C1 hedging structures.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'c1-u4-s1',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'speaking-environment',
    difficulty: 'hard',
    content: {
      title: '[[Speaking|Expresión oral]]: [[Discussing Environmental Issues|Debatir sobre el medioambiente]]',
      instructions: 'Choose the most sophisticated way to express concern about the environment.',
      questions: [
        {
          question: 'How would you best express concern about habitat loss in an academic discussion?',
          options: [
            '[[The loss of natural habitats represents one of the most pressing environmental challenges of our era. Current rates of deforestation and land conversion are, by most scientific accounts, unsustainable and are already producing measurable impacts on global biodiversity that will take generations to reverse, if reversal is indeed possible.|La pérdida de hábitats naturales representa uno de los desafíos medioambientales más urgentes de nuestra era. Las tasas actuales de deforestación son, según la mayoría de los relatos científicos, insostenibles y ya están produciendo impactos mensurables en la biodiversidad global.]]',
            '[[What is particularly alarming is the pace at which critical habitats are being lost — a rate that many ecologists consider unprecedented in human history.|Lo que resulta especialmente alarmante es el ritmo al que se están perdiendo los hábitats críticos.]]',
            '[[There is a substantial body of evidence suggesting that habitat destruction is accelerating at an unprecedented rate, with potentially catastrophic consequences for global biodiversity. Many leading ecologists have argued that if current trends continue unchecked, we may be witnessing the early stages of a sixth mass extinction event.|Existe un corpus sustancial de evidencia que sugiere que la destrucción de hábitats se está acelerando a un ritmo sin precedentes, con consecuencias potencialmente catastróficas para la biodiversidad global. Muchos ecólogos destacados han argumentado que si las tendencias actuales continúan, podríamos estar presenciando las primeras etapas de un sexto evento de extinción masiva.]]',
          ],
          correctAnswer: 1,
          explanation: '"What is particularly alarming is..." = cleft sentence for emphasis + sophisticated vocabulary and hedging.',
        },
      ],
    },
    topicName: 'Speaking',
  },
];
