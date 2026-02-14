import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 25;

// ============================================
// BLOCK 1: IT-CLEFT SENTENCES (10 items)
// ============================================
export const C1_U25_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Focus: It-Cleft Sentences',
  grammarPoint: 'Emphasis',
  explanation: '"[[It-clefts|Oraciones hendidas con It]] are used to [[focus|enfocar]] on a specific part of a [[sentence|oración]]. Pattern: It + be + [focused item] + relative clause.',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: '___ was John who [[broke|rompió]] the [[window|ventana]].',
      options: ['There', 'It', 'What'],
      correctAnswer: 'It',
      explanation: 'Basic it-cleft structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'It was [[yesterday|ayer]] ___ we [[met|nos conocimos]].',
      options: ['when', 'which', 'that'],
      correctAnswer: 'that',
      explanation: 'Using "that" or "when" for time focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'It is [[money|dinero]] that she ___ most.',
      options: ['needs', 'is needing', 'was needing'],
      correctAnswer: 'needs',
      explanation: 'Focusing on the object.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'It was ___ of the [[rain|lluvia]] that the [[match|partido]] was [[cancelled|cancelado]].',
      options: ['why', 'because', 'as'],
      correctAnswer: 'because',
      explanation: 'Focusing on the reason.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'It ___ your [[attitude|actitud]], not your [[talent|talento]], that [[matters|importa]].',
      options: ['was', 'be', 'is'],
      correctAnswer: 'is',
      explanation: 'Present tense focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'It was in [[London|Londres]] ___ the [[event|evento]] took [[place|lugar]].',
      options: ['where', 'that', 'which'],
      correctAnswer: 'where',
      explanation: 'Focusing on location.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: '___ wasn\'t until [[midnight|medianoche]] that he [[arrived|llegó]].',
      options: ['There', 'It', 'He'],
      correctAnswer: 'It',
      explanation: 'Negative time focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: 'It is the ___ of [[resources|recursos]] that [[worries|preocupa]] me.',
      options: ['want', 'need', 'lack'],
      correctAnswer: 'lack',
      explanation: 'Focusing on a noun phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'It was with [[great|gran]] ___ that she [[finished|terminó]].',
      options: ['difficulty', 'difficult', 'difficultly'],
      correctAnswer: 'difficulty',
      explanation: 'Focusing on manner.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'It is the [[truth|verdad]] that I ___.',
      options: ['am seeking', 'seek', 'sought'],
      correctAnswer: 'seek',
      explanation: 'Formal object focus.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: WH-CLEFT SENTENCES (10 items)
// ============================================
export const C1_U25_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Focus: Wh-Cleft Sentences',
  grammarPoint: 'Emphasis',
  explanation: '"[[Wh-clefts|Oraciones hendidas con Wh]] use a "What" clause as the subject to [[highlight|resaltar]] information.',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: '___ I [[need|necesito]] is a [[vacation|vacación]].',
      options: ['That', 'What', 'Which'],
      correctAnswer: 'What',
      explanation: 'Basic wh-cleft.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'What she [[did|hizo]] ___ to [[resign|dimitir]].',
      options: ['did', 'is', 'was'],
      correctAnswer: 'was',
      explanation: 'Focusing on an action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'What [[annoyed|molestó]] me most was his ___.',
      options: ['rudeness', 'rude', 'rudely'],
      correctAnswer: 'rudeness',
      explanation: 'Focusing on a noun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'What [[happened|pasó]] was ___ the [[car|coche]] [[broke|rompió]] down.',
      options: ['why', 'that', 'how'],
      correctAnswer: 'that',
      explanation: 'Focusing on a whole event.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: '___ I want is a [[quiet|tranquila]] [[life|vida]].',
      options: ['What', 'Everything', 'All'],
      correctAnswer: 'All',
      explanation: '"All" can replace "What" for stronger emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'The only [[thing|cosa]] I ___ is [[music|música]].',
      options: ['like', 'am liking', 'was liking'],
      correctAnswer: 'like',
      explanation: 'Cleft with "The only thing".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'The [[place|lugar]] ___ I [[live|vivo]] is [[small|pequeño]].',
      options: ['that', 'where', 'which'],
      correctAnswer: 'where',
      explanation: 'Place focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'The [[reason|razón]] ___ I [[left|me fui]] was the [[noise|ruido]].',
      options: ['that', 'reason', 'why'],
      correctAnswer: 'why',
      explanation: 'Reason focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'What I [[really|realmente]] ___ is [[cooking|cocinar]].',
      options: ['enjoy', 'like', 'want'],
      correctAnswer: 'enjoy',
      explanation: 'Emphasizing preference.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: '___ happened next was [[incredible|increíble]].',
      options: ['That', 'What', 'Which'],
      correctAnswer: 'What',
      explanation: 'Event focus.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: FRONTING & INVERSION (10 items)
// ============================================
export const C1_U25_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Emphasis: Fronting & Negative Inversion',
  grammarPoint: 'Emphasis',
  explanation: 'Moving elements to the [[front|frente]] of the [[sentence|oración]] for [[rhetorical|retórica]] [[impact|impacto]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: '___ have I [[seen|visto]] such [[beauty|belleza]].',
      options: ['Rarely', 'Never', 'Seldom'],
      correctAnswer: 'Never',
      explanation: 'Negative inversion for strong emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: '___ does he [[complain|quejarse]].',
      options: ['Always', 'Never', 'Rarely'],
      correctAnswer: 'Rarely',
      explanation: 'Adverbial inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: '___ then did I [[realize|darme cuenta]] the [[truth|verdad]].',
      options: ['Only', 'But', 'So'],
      correctAnswer: 'Only',
      explanation: 'Time phrase inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: '___ did they [[know|saber]] what was [[coming|viniendo]].',
      options: ['Few', 'Little', 'Small'],
      correctAnswer: 'Little',
      explanation: 'Negative adverb inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: '___ no [[circumstances|circunstancias]] [[should|deberías]] you [[leave|irte]].',
      options: ['In', 'By', 'Under'],
      correctAnswer: 'Under',
      explanation: 'Formal prohibition inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: '___ only was it [[cold|frío]], but it also [[rained|llovió]].',
      options: ['Not', 'Only', 'No'],
      correctAnswer: 'Not',
      explanation: '"Not only" inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: '___ had I [[arrived|llegado]] [[when|cuando]] the [[phone|teléfono]] [[rang|sonó]].',
      options: ['Almost', 'Hardly', 'Nearly'],
      correctAnswer: 'Hardly',
      explanation: '"Hardly... when" inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: '___ was the [[force|fuerza]] of the [[wind|viento]] that [[trees|árboles]] [[fell|cayeron]].',
      options: ['So', 'Very', 'Such'],
      correctAnswer: 'Such',
      explanation: '"Such" inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: '___ [[loud|fuerte]] was the [[noise|ruido]] that I [[couldn\'t|no pude]] [[sleep|dormir]].',
      options: ['So', 'Such', 'Very'],
      correctAnswer: 'So',
      explanation: '"So" + adjective inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: '___ you [[need|necesitar]] [[help|ayuda]], please [[call|llama]].',
      options: ['If', 'Should', 'Unless'],
      correctAnswer: 'Should',
      explanation: 'Formal conditional inversion.',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: EMPHATIC AUXILIARY & ADVERBS (10 items)
// ============================================
export const C1_U25_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Emphasis: Emphatic "Do" & Adverbs',
  grammarPoint: 'Emphasis',
  explanation: 'Use the [[auxiliary|auxiliar]] do" in [[affirmative|afirmativas]] sentences or [[intensifying|intensificadores]] adverbs to add [[weight|peso]] to your statements.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'I ___ [[believe|creer]] that [[honesty|honestidad]] is [[best|mejor]].',
      options: ['really', 'do', 'can'],
      correctAnswer: 'do',
      explanation: 'Emphatic "do" in affirmative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'She ___ [[tell|decir]] us [[about|sobre]] it [[yesterday|ayer]].',
      options: ['has', 'does', 'did'],
      correctAnswer: 'did',
      explanation: 'Past emphatic "do".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'I was [[absolutely|absolutamente]] ___ by the [[news|noticias]].',
      options: ['devastated', 'sad', 'tired'],
      correctAnswer: 'devastated',
      explanation: 'Extreme adjective for emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'It was ___ [[ridiculous|ridículo]] to [[suggest|sugerir]] that.',
      options: ['very', 'utterly', 'quite'],
      correctAnswer: 'utterly',
      explanation: 'Strong intensifying adverb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'I ___ [[disagree|en desacuerdo]] with your [[proposal|propuesta]].',
      options: ['serious', 'firm', 'strongly'],
      correctAnswer: 'strongly',
      explanation: 'Adverb for emphatic opinion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'Do ___ [[down|abajo]] and [[relax|relájate]].',
      options: ['sit', 'sitting', 'sat'],
      correctAnswer: 'sit',
      explanation: 'Emphatic imperative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'The [[film|película]] was ___ [[boring|aburrida]].',
      options: ['very', 'much', 'downright'],
      correctAnswer: 'downright',
      explanation: 'Informal but strong emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'He is [[by|por]] ___ the [[best|mejor]] [[player|jugador]].',
      options: ['long', 'all', 'far'],
      correctAnswer: 'far',
      explanation: '"By far" for superlative emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'I am ___ [[sorry|lo siento]] for the [[delay|retraso]].',
      options: ['truly', 'real', 'much'],
      correctAnswer: 'truly',
      explanation: 'Sincere emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'It was ___ [[luck|suerte]] that we [[survived|sobrevivimos]].',
      options: ['total', 'pure', 'only'],
      correctAnswer: 'pure',
      explanation: 'Emphatic adjective.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U25_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Key Word Transformation: Emphasis',
  grammarPoint: 'Mixed Review',
  explanation: 'Rewrite the [[sentence|oración]] to make it more [[emphatic|enfática]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'I only need some sleep. (ALL) \n ___ I need is some sleep.',
      options: ['What', 'All', 'That'],
      correctAnswer: 'All',
      explanation: 'Using "All" for emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'John broke the vase. (IT) \n ___ John who broke the vase.',
      options: ['He was', 'There was', 'It was'],
      correctAnswer: 'It was',
      explanation: 'It-cleft.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'I have never seen such a mess. (NEVER) \n ___ have I seen such a mess.',
      options: ['Never', 'Rarely', 'Seldom'],
      correctAnswer: 'Never',
      explanation: 'Negative inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'He didn\'t realize his mistake until later. (NOT) \n ___ until later did he realize his mistake.',
      options: ['Only', 'Not', 'But'],
      correctAnswer: 'Not',
      explanation: 'Negative time phrase inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'I really love chocolate. (WHAT) \n ___ I really love is chocolate.',
      options: ['All', 'Everything', 'What'],
      correctAnswer: 'What',
      explanation: 'Wh-cleft.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'You must not enter this room. (ACCOUNT) \n On ___ must you enter this room.',
      options: ['no account', 'any account', 'not account'],
      correctAnswer: 'no account',
      explanation: 'Negative phrase inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'If you should see him, tell me. (SHOULD) \n ___ you see him, tell me.',
      options: ['If', 'Should', 'When'],
      correctAnswer: 'Should',
      explanation: 'Conditional inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'I like your new car very much. (DO) \n I ___ like your new car.',
      options: ['really', 'am', 'do'],
      correctAnswer: 'do',
      explanation: 'Emphatic auxiliary.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'She stayed here because of the weather. (REASON) \n The ___ she stayed here was the weather.',
      options: ['reason why', 'because', 'why'],
      correctAnswer: 'reason why',
      explanation: 'Cleft with "reason".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'The wind was so strong that the roof blew off. (SUCH) \n ___ was the strength of the wind that the roof blew off.',
      options: ['So', 'Such', 'Very'],
      correctAnswer: 'Such',
      explanation: '"Such" inversion.',
      points: 2
    }
  ]
};

export const unit25: Lesson = createC1Unit(
  'c1-u25',
  'Advanced Emphasis & Cleft Sentences',
  'Mastering the art of focus and emphasis to make your English more persuasive and rhetorical.',
  ['Use It-clefts and Wh-clefts for focus', 'Apply negative inversion and fronting', 'Use emphatic auxiliaries and intensifiers'],
  [
    C1_U25_BLOCK1, C1_U25_BLOCK2, C1_U25_BLOCK3, C1_U25_BLOCK4, C1_U25_BLOCK5
  ]
);
