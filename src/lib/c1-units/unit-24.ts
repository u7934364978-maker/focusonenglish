import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 24;

// ============================================
// BLOCK 1: ADVANCED CAUSAL CONNECTORS (10 items)
// ============================================
export const C1_U24_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Causality: Stem from, Result in, & Owing to',
  grammarPoint: 'Causality',
  explanation: 'Advanced English uses [[verbs|verbos]] and [[prepositional phrases|frases preposicionales]] to express [[cause|causa]] and [[effect|efecto]] with [[precision|precisión]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: 'His [[problems|problemas]] ___ (stem) from a [[lack|falta]] of [[confidence|confianza]].',
      correctAnswer: 'stem',
      explanation: '"Stem from" means to [[originate|originarse]] in.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: 'The [[accident|accidente]] [[resulted|resultó]] ___ (in) several [[injuries|heridas]].',
      correctAnswer: 'in',
      explanation: '"Result in" introduces the [[effect|efecto]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: 'The [[flight|vuelo]] was [[delayed|retrasado]] ___ (owing) to [[technical|técnicos]] [[issues|problemas]].',
      correctAnswer: 'owing',
      explanation: '"Owing to" is a formal synonym for [[because of|debido a]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: 'His [[success|éxito]] can be [[attributed|atribuido]] ___ (to) [[hard|duro]] [[work|trabajo]].',
      correctAnswer: 'to',
      explanation: '"Attribute to" connects an effect to its cause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: 'The [[new|nueva]] [[law|ley]] will [[bring|traer]] ___ (about) [[significant|significativos]] [[changes|cambios]].',
      correctAnswer: 'about',
      explanation: '"Bring about" means to [[cause|causar]] something to happen.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: 'The [[rise|subida]] in [[prices|precios]] is ___ (due) to [[inflation|inflación]].',
      correctAnswer: 'due',
      explanation: '"Due to" usually follows the verb "to be".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: 'The [[failure|fracaso]] [[gave|dio]] [[rise|subida]] ___ (to) much [[criticism|crítica]].',
      correctAnswer: 'to',
      explanation: '"Give rise to" is a formal way to say "cause".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: 'We [[cancelled|cancelamos]] on [[account|cuenta]] ___ (of) the [[rain|lluvia]].',
      correctAnswer: 'of',
      explanation: '"On account of" means "because of".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: 'This [[decision|decisión]] will [[lead|llevar]] ___ (to) further [[complications|complicaciones]].',
      correctAnswer: 'to',
      explanation: '"Lead to" points toward the result.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'The [[conflict|conflicto]] [[arose|surgió]] ___ (from) a [[misunderstanding|malentendido]].',
      correctAnswer: 'from',
      explanation: '"Arise from" is synonymous with "stem from".',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: FORMAL RESULT CONNECTORS (10 items)
// ============================================
export const C1_U24_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Result: Consequently, Hence, & Thus',
  grammarPoint: 'Result',
  explanation: 'Formal writing uses specific [[adverbs|adverbios]] to introduce [[logical|lógicas]] [[consequences|consecuencias]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'The [[company|empresa]] is [[bankrupt|insolvente]]. ___, (Consequently) all [[staff|personal]] [[lost|perdió]] their [[jobs|trabajos]].',
      options: ['Consequently', 'However', 'Moreover'],
      correctAnswer: 'Consequently',
      explanation: '"Consequently" shows a direct result.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'He [[missed|perdió]] the [[deadline|fecha límite]]. ___ (Hence), the [[project|proyecto]] was [[delayed|retrasado]].',
      options: ['Hence', 'But', 'Still'],
      correctAnswer: 'Hence',
      explanation: '"Hence" is a formal synonym for "therefore".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'They [[invested|invirtieron]] [[wisely|sabiamente]], ___ (thus) [[ensuring|asegurando]] their [[future|futuro]].',
      options: ['thus', 'otherwise', 'instead'],
      correctAnswer: 'thus',
      explanation: '"Thus" shows how an action [[led|llevó]] to a result.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'The [[prices|precios]] [[rose|subieron]], and ___ (accordingly) [[spending|gasto]] [[fell|cayó]].',
      options: ['accordingly', 'equally', 'similarly'],
      correctAnswer: 'accordingly',
      explanation: '"Accordingly" means in a way that is [[appropriate|apropiado]] to the situation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'He [[failed|falló]] the [[test|test]]. ___, (Therefore) he must [[retake|repetir]] it.',
      options: ['Therefore', 'While', 'Whereas'],
      correctAnswer: 'Therefore',
      explanation: '"Therefore" is the standard formal result connector.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'The [[demand|demanda]] is [[low|baja]]. ___, (As a result) [[production|producción]] has [[stopped|parado]].',
      options: ['As a result', 'In addition', 'By contrast'],
      correctAnswer: 'As a result',
      explanation: 'Clear cause-effect link.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'The [[system|sistema]] was [[flawed|defectuoso]]. ___ (So), it was [[replaced|reemplazado]].',
      options: ['So', 'For', 'Yet'],
      correctAnswer: 'So',
      explanation: '"So" is less formal but very common.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'They [[ignored|ignoraron]] the [[warnings|advertencias]]. ___ (Subsequently), they [[faced|enfrentaron]] [[fines|multas]].',
      options: ['Subsequently', 'Previously', 'Alternately'],
      correctAnswer: 'Subsequently',
      explanation: '"Subsequently" shows a result that happened [[later|después]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'He was [[lazy|perezoso]]. ___ (For this reason), he was [[fired|despedido]].',
      options: ['For this reason', 'In spite of this', 'Even so'],
      correctAnswer: 'For this reason',
      explanation: 'Explicitly linking cause and reason.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'The [[crops|cosechas]] [[failed|fallaron]], ___ (whereby) [[famine|hambre]] [[spread|extendió]].',
      options: ['whereby', 'wherein', 'wherefore'],
      correctAnswer: 'whereby',
      explanation: '"Whereby" links a situation to its [[consequent|consecuente]] [[process|proceso]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: COMPLEX CAUSAL PHRASES (10 items)
// ============================================
export const C1_U24_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Phrases for High-Level Causality',
  grammarPoint: 'Causality',
  explanation: 'Using [[prepositional|preposicionales]] phrases like "in the light of", "for fear of", and "with a view to" to show [[complex|complejas]] causes.',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: '___ (In) the [[light|luz]] of [[new|nueva]] [[evidence|evidencia]], we must [[reconsider|reconsiderar]].',
      correctAnswer: 'In',
      explanation: '"In light of" means [[considering|considerando]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: 'He [[fled|huyó]] for [[fear|miedo]] ___ (of) being [[arrested|arrestado]].',
      correctAnswer: 'of',
      explanation: '"For fear of" introduces a [[negative|negativa]] cause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: 'They [[hired|contrataron]] him with a [[view|vista]] ___ (to) [[expanding|expandir]] the [[business|negocio]].',
      correctAnswer: 'to',
      explanation: '"With a view to" means with the [[intention|intención]] of.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: 'The [[change|cambio]] was [[made|hecho]] in the [[interest|interés]] ___ (of) [[efficiency|eficiencia]].',
      correctAnswer: 'of',
      explanation: '"In the interest of" shows the [[purpose|propósito]]/cause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: 'He [[succeeded|logró]] by [[dint|fuerza]] ___ (of) [[hard|duro]] [[work|trabajo]].',
      correctAnswer: 'of',
      explanation: '"By dint of" is a formal way to say [[by means of|a fuerza de]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: 'The [[match|partido]] was [[off|cancelado]] ___ (due) to [[rain|lluvia]].',
      correctAnswer: 'due',
      explanation: '"Due to" for cause.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: 'In [[consequence|consecuencia]] ___ (of) your [[actions|acciones]], you are [[suspended|suspendido]].',
      correctAnswer: 'of',
      explanation: '"In consequence of" is a formal result phrase.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: '___ (Seeing) as it is [[late|tarde]], let\'s [[stop|parar]].',
      correctAnswer: 'Seeing',
      explanation: '"Seeing as" is a causal connector.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: 'The [[scandal|escándalo]] [[led|llevó]] to his ___ (downfall).',
      correctAnswer: 'downfall',
      explanation: 'Result noun.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: 'The [[policy|política]] was [[implemented|implementada]] [[with|con]] the ___ (aim) of [[reducing|reducir]] [[poverty|pobreza]].',
      correctAnswer: 'aim',
      explanation: '"With the aim of" shows cause/purpose.',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: VERBS OF CAUSATION (10 items)
// ============================================
export const C1_U24_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Verbs of Causation: Trigger, Spark, & Induce',
  grammarPoint: 'Causality',
  explanation: 'Use specific [[verbs|verbos]] to describe [[how|cómo]] a cause [[produces|produce]] an effect.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'The [[news|noticias]] ___ (triggered) a [[wave|ola]] of [[protests|protestas]].',
      options: ['triggered', 'made', 'did'],
      correctAnswer: 'triggered',
      explanation: '"Trigger" means to [[start|iniciar]] a [[sudden|repentina]] reaction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'The [[speech|discurso]] ___ (sparked) a [[debate|debate]].',
      options: ['sparked', 'fired', 'burned'],
      correctAnswer: 'sparked',
      explanation: '"Spark" means to [[ignite|provocar]] an interest or argument.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'The [[drug|droga]] can ___ (induce) [[sleep|sueño]].',
      options: ['induce', 'bring', 'take'],
      correctAnswer: 'induce',
      explanation: '"Induce" means to [[cause|causar]] a [[physical|físico]] or [[mental|mental]] state.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'His [[actions|acciones]] ___ (precipitated) the [[crisis|crisis]].',
      options: ['precipitated', 'fell', 'dropped'],
      correctAnswer: 'precipitated',
      explanation: '"Precipitate" means to cause something to happen [[sooner|más pronto]] than expected.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'The [[storm|tormenta]] ___ (wreaked) [[havoc|estragos]] on the [[city|ciudad]].',
      options: ['wreaked', 'made', 'did'],
      correctAnswer: 'wreaked',
      explanation: '"Wreak havoc" is a common [[collocation|colocación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'Fear ___ (prompted) him to [[lie|mentir]].',
      options: ['prompted', 'asked', 'pushed'],
      correctAnswer: 'prompted',
      explanation: '"Prompt" means to [[encourage|animar]] or cause an action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'The [[policy|política]] ___ (engendered) [[distrust|desconfianza]].',
      options: ['engendered', 'built', 'created'],
      correctAnswer: 'engendered',
      explanation: '"Engender" is a formal way to say [[produce|producir]] or cause (a feeling).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'He ___ (entailed) a [[lot|mucho]] of [[risk|riesgo]].',
      options: ['entailed', 'meant', 'had'],
      correctAnswer: 'entailed',
      explanation: '"Entail" means to [[involve|implicar]] as a necessary consequence.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'The [[event|evento]] ___ (commenced) with a [[speech|discurso]].',
      options: ['commenced', 'caused', 'led'],
      correctAnswer: 'commenced',
      explanation: 'Formal temporal start.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'The [[victory|victoria]] ___ (ensured) their [[promotion|ascenso]].',
      options: ['ensured', 'made', 'gave'],
      correctAnswer: 'ensured',
      explanation: '"Ensure" means to make [[certain|seguro]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U24_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Key Word Transformation: Causality',
  grammarPoint: 'Mixed Review',
  explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] word.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'fill-blank',
      question: 'The accident was caused by the rain. (RESULTED) \n The rain ___ the accident.',
      correctAnswer: 'resulted in',
      explanation: 'Using "result in" for effects.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'fill-blank',
      question: 'His problems started with his childhood. (STEM) \n His problems ___ his childhood.',
      correctAnswer: 'stem from',
      explanation: 'Using "stem from" for origins.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'fill-blank',
      question: 'Because of the delay, we missed the meeting. (ACCOUNT) \n We missed the meeting ___ the delay.',
      correctAnswer: 'on account of',
      explanation: 'Formal causal phrase.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'fill-blank',
      question: 'He worked hard, so he succeeded. (HENCE) \n He worked hard; ___ , his success.',
      correctAnswer: 'hence',
      explanation: 'Formal result connector.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'fill-blank',
      question: 'Considering the facts, we must act. (LIGHT) \n ___ the facts, we must act.',
      correctAnswer: 'In light of',
      explanation: 'Causal context phrase.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'fill-blank',
      question: 'The speech made everyone angry. (RISE) \n The speech ___ much anger.',
      correctAnswer: 'gave rise to',
      explanation: 'Formal "cause" idiom.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'fill-blank',
      question: 'The law was changed to save money. (VIEW) \n The law was changed ___ saving money.',
      correctAnswer: 'with a view to',
      explanation: '"With a view to" + -ing.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'fill-blank',
      question: 'If you do that, you will fail. (LEAD) \n Doing that will ___ failure.',
      correctAnswer: 'lead to',
      explanation: 'Direct causation.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'fill-blank',
      question: 'He didn\'t go because he was scared. (FEAR) \n He didn\'t go ___ being scared.',
      correctAnswer: 'for fear of',
      explanation: 'Causal phrase for negative outcomes.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'fill-blank',
      question: 'The storm caused many problems. (WREAKED) \n The storm ___ on the area.',
      correctAnswer: 'wreaked havoc',
      explanation: 'High-level result collocation.',
      points: 2
    }
  ]
};

export const unit24: Lesson = createC1Unit(
  'c1-u24',
  'Advanced Causality & Result',
  'Exploring formal and precise ways to express cause and effect in academic and professional English.',
  ['Use causal verbs like stem from and result in', 'Apply formal result connectors like hence and thus', 'Use complex causal phrases like in the light of'],
  [
    C1_U24_BLOCK1, C1_U24_BLOCK2, C1_U24_BLOCK3, C1_U24_BLOCK4, C1_U24_BLOCK5
  ]
);
