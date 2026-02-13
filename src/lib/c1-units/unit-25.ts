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
  explanation: '[[It-clefts|Oraciones hendidas con It]] are used to [[focus|enfocar]] on a specific part of a [[sentence|oración]]. Pattern: It + be + [focused item] + relative clause.',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: '___ (It) was John who [[broke|rompió]] the [[window|ventana]].',
      correctAnswer: 'It',
      explanation: 'Basic it-cleft structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: 'It was [[yesterday|ayer]] ___ (that) we [[met|nos conocimos]].',
      correctAnswer: 'that',
      explanation: 'Using "that" or "when" for time focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: 'It is [[money|dinero]] that she ___ (needs) most.',
      correctAnswer: 'needs',
      explanation: 'Focusing on the object.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: 'It was ___ (because) of the [[rain|lluvia]] that the [[match|partido]] was [[cancelled|cancelado]].',
      correctAnswer: 'because',
      explanation: 'Focusing on the reason.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: 'It ___ (is) your [[attitude|actitud]], not your [[talent|talento]], that [[matters|importa]].',
      correctAnswer: 'is',
      explanation: 'Present tense focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: 'It was in [[London|Londres]] ___ (where) the [[event|evento]] took [[place|lugar]].',
      correctAnswer: 'where',
      explanation: 'Focusing on location.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: '___ (It) wasn\'t until [[midnight|medianoche]] that he [[arrived|llegó]].',
      correctAnswer: 'It',
      explanation: 'Negative time focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: 'It is the ___ (lack) of [[resources|recursos]] that [[worries|preocupa]] me.',
      correctAnswer: 'lack',
      explanation: 'Focusing on a noun phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: 'It was with [[great|gran]] ___ (difficulty) that she [[finished|terminó]].',
      correctAnswer: 'difficulty',
      explanation: 'Focusing on manner.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'It is the [[truth|verdad]] that I ___ (seek).',
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
  explanation: '[[Wh-clefts|Oraciones hendidas con Wh]] use a "What" clause as the subject to [[highlight|resaltar]] information.',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'fill-blank',
      question: '___ (What) I [[need|necesito]] is a [[vacation|vacación]].',
      correctAnswer: 'What',
      explanation: 'Basic wh-cleft.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'fill-blank',
      question: 'What she [[did|hizo]] ___ (was) to [[resign|dimitir]].',
      correctAnswer: 'was',
      explanation: 'Focusing on an action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'fill-blank',
      question: 'What [[annoyed|molestó]] me most was his ___ (rudeness).',
      correctAnswer: 'rudeness',
      explanation: 'Focusing on a noun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'fill-blank',
      question: 'What [[happened|pasó]] was ___ (that) the [[car|coche]] [[broke|rompió]] down.',
      correctAnswer: 'that',
      explanation: 'Focusing on a whole event.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'fill-blank',
      question: '___ (All) I want is a [[quiet|tranquila]] [[life|vida]].',
      correctAnswer: 'All',
      explanation: '"All" can replace "What" for stronger emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'fill-blank',
      question: 'The only [[thing|cosa]] I ___ (like) is [[music|música]].',
      correctAnswer: 'like',
      explanation: 'Cleft with "The only thing".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'fill-blank',
      question: 'The [[place|lugar]] ___ (where) I [[live|vivo]] is [[small|pequeño]].',
      correctAnswer: 'where',
      explanation: 'Place focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'fill-blank',
      question: 'The [[reason|razón]] ___ (why) I [[left|me fui]] was the [[noise|ruido]].',
      correctAnswer: 'why',
      explanation: 'Reason focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'fill-blank',
      question: 'What I [[really|realmente]] ___ (enjoy) is [[cooking|cocinar]].',
      correctAnswer: 'enjoy',
      explanation: 'Emphasizing preference.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'fill-blank',
      question: '___ (What) happened next was [[incredible|increíble]].',
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
      question: '___ (Never) have I [[seen|visto]] such [[beauty|belleza]].',
      options: ['Never', 'Rarely', 'Seldom'],
      correctAnswer: 'Never',
      explanation: 'Negative inversion for strong emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: '___ (Rarely) does he [[complain|quejarse]].',
      options: ['Rarely', 'Never', 'Always'],
      correctAnswer: 'Rarely',
      explanation: 'Adverbial inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: '___ (Only) then did I [[realize|darme cuenta]] the [[truth|verdad]].',
      options: ['Only', 'But', 'So'],
      correctAnswer: 'Only',
      explanation: 'Time phrase inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: '___ (Little) did they [[know|saber]] what was [[coming|viniendo]].',
      options: ['Little', 'Few', 'Small'],
      correctAnswer: 'Little',
      explanation: 'Negative adverb inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: '___ (Under) no [[circumstances|circunstancias]] [[should|deberías]] you [[leave|irte]].',
      options: ['Under', 'In', 'By'],
      correctAnswer: 'Under',
      explanation: 'Formal prohibition inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: '___ (Not) only was it [[cold|frío]], but it also [[rained|llovió]].',
      options: ['Not', 'Only', 'No'],
      correctAnswer: 'Not',
      explanation: '"Not only" inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: '___ (Hardly) had I [[arrived|llegado]] [[when|cuando]] the [[phone|teléfono]] [[rang|sonó]].',
      options: ['Hardly', 'Almost', 'Nearly'],
      correctAnswer: 'Hardly',
      explanation: '"Hardly... when" inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: '___ (Such) was the [[force|fuerza]] of the [[wind|viento]] that [[trees|árboles]] [[fell|cayeron]].',
      options: ['Such', 'So', 'Very'],
      correctAnswer: 'Such',
      explanation: '"Such" inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: '___ (So) [[loud|fuerte]] was the [[noise|ruido]] that I [[couldn\'t|no pude]] [[sleep|dormir]].',
      options: ['So', 'Such', 'Very'],
      correctAnswer: 'So',
      explanation: '"So" + adjective inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: '___ (Should) you [[need|necesitar]] [[help|ayuda]], please [[call|llama]].',
      options: ['Should', 'If', 'Unless'],
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
  explanation: 'Use the [[auxiliary|auxiliar]] "do" in [[affirmative|afirmativas]] sentences or [[intensifying|intensificadores]] adverbs to add [[weight|peso]] to your statements.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'fill-blank',
      question: 'I ___ (do) [[believe|creer]] that [[honesty|honestidad]] is [[best|mejor]].',
      correctAnswer: 'do',
      explanation: 'Emphatic "do" in affirmative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'fill-blank',
      question: 'She ___ (did) [[tell|decir]] us [[about|sobre]] it [[yesterday|ayer]].',
      correctAnswer: 'did',
      explanation: 'Past emphatic "do".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'fill-blank',
      question: 'I was [[absolutely|absolutamente]] ___ (devastated) by the [[news|noticias]].',
      correctAnswer: 'devastated',
      explanation: 'Extreme adjective for emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'fill-blank',
      question: 'It was ___ (utterly) [[ridiculous|ridículo]] to [[suggest|sugerir]] that.',
      correctAnswer: 'utterly',
      explanation: 'Strong intensifying adverb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'fill-blank',
      question: 'I ___ (strongly) [[disagree|en desacuerdo]] with your [[proposal|propuesta]].',
      correctAnswer: 'strongly',
      explanation: 'Adverb for emphatic opinion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'fill-blank',
      question: 'Do ___ (sit) [[down|abajo]] and [[relax|relájate]].',
      correctAnswer: 'sit',
      explanation: 'Emphatic imperative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'fill-blank',
      question: 'The [[film|película]] was ___ (downright) [[boring|aburrida]].',
      correctAnswer: 'downright',
      explanation: 'Informal but strong emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'fill-blank',
      question: 'He is [[by|por]] ___ (far) the [[best|mejor]] [[player|jugador]].',
      correctAnswer: 'far',
      explanation: '"By far" for superlative emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'fill-blank',
      question: 'I am ___ (truly) [[sorry|lo siento]] for the [[delay|retraso]].',
      correctAnswer: 'truly',
      explanation: 'Sincere emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'fill-blank',
      question: 'It was ___ (pure) [[luck|suerte]] that we [[survived|sobrevivimos]].',
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
      type: 'fill-blank',
      question: 'I only need some sleep. (ALL) \n ___ I need is some sleep.',
      correctAnswer: 'All',
      explanation: 'Using "All" for emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'fill-blank',
      question: 'John broke the vase. (IT) \n ___ John who broke the vase.',
      correctAnswer: 'It was',
      explanation: 'It-cleft.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'fill-blank',
      question: 'I have never seen such a mess. (NEVER) \n ___ have I seen such a mess.',
      correctAnswer: 'Never',
      explanation: 'Negative inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'fill-blank',
      question: 'He didn\'t realize his mistake until later. (NOT) \n ___ until later did he realize his mistake.',
      correctAnswer: 'Not',
      explanation: 'Negative time phrase inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'fill-blank',
      question: 'I really love chocolate. (WHAT) \n ___ I really love is chocolate.',
      correctAnswer: 'What',
      explanation: 'Wh-cleft.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'fill-blank',
      question: 'You must not enter this room. (ACCOUNT) \n On ___ must you enter this room.',
      correctAnswer: 'no account',
      explanation: 'Negative phrase inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'fill-blank',
      question: 'If you should see him, tell me. (SHOULD) \n ___ you see him, tell me.',
      correctAnswer: 'Should',
      explanation: 'Conditional inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'fill-blank',
      question: 'I like your new car very much. (DO) \n I ___ like your new car.',
      correctAnswer: 'do',
      explanation: 'Emphatic auxiliary.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'fill-blank',
      question: 'She stayed here because of the weather. (REASON) \n The ___ she stayed here was the weather.',
      correctAnswer: 'reason why',
      explanation: 'Cleft with "reason".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'fill-blank',
      question: 'The wind was so strong that the roof blew off. (SUCH) \n ___ was the strength of the wind that the roof blew off.',
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
