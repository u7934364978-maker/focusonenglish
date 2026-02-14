import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 10;

// ============================================
// BLOCK 1: NEGATIVE ADVERBIALS & INVERSION (10 items)
// ============================================
export const C1_U10_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Inversion with Negative Adverbials',
  grammarPoint: 'Inversion',
 explanation: 'When a [[sentence|oración]] starts with a [[negative|negativo]] or [[restrictive|restrictiva]] expression (like Never Seldom Rarely), the [[subject|sujeto]] and [[auxiliary|auxiliar]] are [[inverted|invertidos]].',   questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
 question: '[[Never|Nunca]] ___ I seen such a [[stunning|impresionante]] [[display|despliegue]] of [[talent|talento]].',       options: ['did', 'was', 'have'],
      correctAnswer: 'have',
      explanation: 'Use inversion after "Never".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
 question: '[[Seldom|Rara vez]] ___ the [[sun|sol]] [[shine|brilla]] so [[brightly|brillantemente]] in winter.',       options: ['do', 'does', 'is'],
      correctAnswer: 'does',
 explanation: 'Use does for [[present|presente]] simple inversion.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
 question: '[[Hardly|Apenas]] ___ he [[started|empezado]] his [[speech|discurso]] when the [[lights|luces]] went out.',       options: ['had', 'did', 'was'],
      correctAnswer: 'had',
      explanation: 'Use inversion after "Hardly".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
 question: 'Under no [[circumstances|circunstancias]] ___ [[children|niños]] be [[left|dejados]] [[unattended|sin supervisión]].',       options: ['must', 'should', 'do'],
      correctAnswer: 'should',
 explanation: 'Inversion after a [[negative|negativa]] [[prepositional|preposicional]] phrase.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
 question: '[[Rarely|Rara vez]] ___ [[politicians|políticos]] [[admit|admiten]] their [[mistakes|errores]].',       options: ['do', 'does', 'are'],
      correctAnswer: 'do',
 explanation: 'Inversion for general [[habits|hábitos]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
 question: 'Not until [[much|mucho]] [[later|más tarde]] ___ I [[realize|darme cuenta]] the [[gravity|gravedad]] of the [[situation|situación]].',       options: ['was', 'did', 'have'],
      correctAnswer: 'did',
 explanation: 'Inversion occurs in the [[main|principal]] clause after Not until.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
 question: '[[Little|Poco]] ___ she [[know|saber]] that her [[life|vida]] was about to [[change|cambiar]] [[forever|para siempre]].',       options: ['does', 'had', 'did'],
      correctAnswer: 'did',
 explanation: 'Use did with Little for [[narrative|narrativo]] emphasis.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
 question: '[[Only|Solo]] [[after|después de]] [[leaving|irse]] the [[office|oficina]] ___ he [[remember|recordar]] to [[lock|cerrar]] the door.',       options: ['does', 'had', 'did'],
      correctAnswer: 'did',
      explanation: 'Inversion after "Only after".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
 question: 'No [[sooner|más pronto]] ___ the [[game|juego]] [[begun|empezado]] than it started to [[rain|llover]].',       options: ['did', 'was', 'had'],
      correctAnswer: 'had',
      explanation: 'Use "had" with "No sooner".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
 question: 'At no [[time|tiempo]] ___ the [[suspect|sospechoso]] [[confess|confesar]] to the [[crime|crimen]].',       options: ['was', 'had', 'did'],
      correctAnswer: 'did',
      explanation: 'Inversion after "At no time".',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: INVERSION WITH "ONLY" (10 items)
// ============================================
export const C1_U10_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Inversion with "Only"',
  grammarPoint: 'Inversion',
 explanation: 'Expressions with Only (Only if, Only when, Only by) require [[inversion|inversión]] in the [[main|principal]] clause.',   questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
 question: 'Only by [[working|trabajando]] [[harder|más duro]] ___ you [[achieve|lograr]] your [[goals|objetivos]].',       options: ['you will', 'will', 'do you'],
      correctAnswer: 'will',
      explanation: 'Inversion in the main clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
 question: 'Only when [[everyone|todos]] had [[left|salido]] ___ I [[feel|sentir]] [[safe|seguro]].',       options: ['was', 'have', 'did'],
      correctAnswer: 'did',
 explanation: 'Inversion after a [[time|tiempo]] clause starting with Only when.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
 question: 'Only if it [[stops|para]] [[snowing|nevar]] ___ we be able to [[travel|viajar]].',       options: ['will', 'can', 'are'],
      correctAnswer: 'will',
      explanation: 'Conditional inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
 question: 'Only then ___ I [[understand|entender]] the [[true|verdadero]] [[meaning|significado]] of his [[words|palabras]].',       options: ['I', 'was', 'did'],
      correctAnswer: 'did',
      explanation: 'Inversion after "Only then".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
 question: 'Only in [[emergencies|emergencias]] ___ you [[use|usar]] this [[exit|salida]].',       options: ['you should', 'should', 'must'],
      correctAnswer: 'should',
      explanation: 'Modal inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
 question: 'Only once ___ I [[met|conocido]] such an [[extraordinary|extraordinaria]] [[person|persona]].',       options: ['did', 'I have', 'have'],
      correctAnswer: 'have',
      explanation: 'Inversion with present perfect after "Only once".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
 question: 'Only [[later|más tarde]] ___ the [[police|policía]] [[discover|descubrir]] the [[truth|verdad]].',       options: ['was', 'did', 'had'],
      correctAnswer: 'did',
      explanation: 'Inversion after "Only later".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
 question: 'Only by [[investing|invirtiendo]] now ___ the [[company|empresa]] [[survive|sobrevivir]].',       options: ['can', 'could', 'did'],
      correctAnswer: 'can',
      explanation: 'Modal inversion in the main clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
 question: 'Only with your [[help|ayuda]] ___ we [[succeed|tener éxito]].',       options: ['we did', 'have', 'did'],
      correctAnswer: 'did',
      explanation: 'Inversion with "Only with".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
 question: 'Only [[yesterday|ayer]] ___ I [[hear|oír]] the [[news|noticias]].',       options: ['I', 'did', 'was'],
      correctAnswer: 'did',
 explanation: 'Inversion for emphasis on [[recent|reciente]] time.',       points: 1
    }
  ]
};

// ============================================
// BLOCK 3: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U10_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Key Word Transformation: Inversion',
  grammarPoint: 'Inversion',
 explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] word, starting with the [[negative|negativa]] expression.',   questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: 'I have never seen such a beautiful garden. (NEVER) \n ___ such a beautiful garden.',
      options: ['Never I have seen', 'Never have I seen', 'Never saw I'],
      correctAnswer: 'Never have I seen',
      explanation: 'Inversion with "Never".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'He didn\'t realize his mistake until later. (NOT UNTIL) \n ___ his mistake.',
      options: ['Not until later he realized', 'Until later did he not realize', 'Not until later did he realize'],
      correctAnswer: 'Not until later did he realize',
      explanation: 'Inversion with "Not until".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'You must not open this box under any circumstances. (UNDER) \n ___ this box.',
      options: ['Under no circumstances must you open', 'Under no circumstances you must open', 'Under any circumstances must you not open'],
      correctAnswer: 'Under no circumstances must you open',
      explanation: 'Inversion with "Under no circumstances".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: 'As soon as he arrived, the power went out. (NO SOONER) \n ___ the power went out.',
      options: ['No sooner he arrived than', 'No sooner did he arrive when', 'No sooner had he arrived than'],
      correctAnswer: 'No sooner had he arrived than',
      explanation: 'Inversion with "No sooner... than".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'She knew little about the surprises waiting for her. (LITTLE) \n ___ about the surprises waiting for her.',
      options: ['Little she knew', 'Little did she know', 'Little knew she'],
      correctAnswer: 'Little did she know',
      explanation: 'Inversion with "Little".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'We rarely go out these days. (RARELY) \n ___ out these days.',
      options: ['Rarely do we go', 'Rarely we go', 'Rarely go we'],
      correctAnswer: 'Rarely do we go',
      explanation: 'Inversion with "Rarely".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: 'He not only passed but also got the highest mark. (NOT ONLY) \n ___ but he also got the highest mark.',
      options: ['Not only he passed', 'Did he not only pass', 'Not only did he pass'],
      correctAnswer: 'Not only did he pass',
      explanation: 'Inversion with "Not only".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: 'I have seldom heard such a moving story. (SELDOM) \n ___ such a moving story.',
      options: ['Seldom I have heard', 'Seldom heard I', 'Seldom have I heard'],
      correctAnswer: 'Seldom have I heard',
      explanation: 'Inversion with "Seldom".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'You can only enter if you have a permit. (ONLY) \n ___ can you enter.',
      options: ['Only you have a permit', 'Only if you have a permit', 'If only you have a permit'],
      correctAnswer: 'Only if you have a permit',
      explanation: 'Inversion with "Only if".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'He had hardly finished speaking when she interrupted. (HARDLY) \n ___ speaking when she interrupted.',
      options: ['Hardly had he finished', 'Hardly he had finished', 'Hardly finished he'],
      correctAnswer: 'Hardly had he finished',
      explanation: 'Inversion with "Hardly".',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: FORMAL NEGATIVES (10 items)
// ============================================
export const C1_U10_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Formal Negative Expressions',
  grammarPoint: 'Vocabulary',
 explanation: 'C1 learners should use [[sophisticated|sofisticadas]] negative expressions to [[convey|transmitir]] [[precision|precisión]].',   questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
 question: 'The [[proposal|propuesta]] was ___ [[rejected|rechazada]] by the [[committee|comité]].',       options: ['no', 'flatly', 'not'],
      correctAnswer: 'flatly',
 explanation: 'Flatly rejected means rejected [[completely|completamente]] and [[firmly|firmemente]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
 question: 'There is ___ no [[evidence|evidencia]] to [[support|apoyar]] the [[claim|afirmación]].',       options: ['almost', 'nearly', 'virtually'],
      correctAnswer: 'virtually',
 explanation: 'Virtually no means [[almost|casi]] none.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
 question: 'The [[details|detalles]] are ___ [[confidential|confidenciales]].',       options: ['very', 'strictly', 'high'],
      correctAnswer: 'strictly',
 explanation: 'Strictly confidential is a common [[collocation|colocación]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
 question: 'The [[outcome|resultado]] was ___ [[unpredictable|impredecible]].',       options: ['utterly', 'quite', 'bit'],
      correctAnswer: 'utterly',
 explanation: 'Utterly adds strong emphasis to a [[negative|negativa]] quality.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
 question: 'I ___ [[disagree|en desacuerdo]] with your [[assessment|evaluación]].',       options: ['hardly', 'not', 'strongly'],
      correctAnswer: 'strongly',
 explanation: 'Strongly disagree is a [[formal|formal]] way to express [[opposition|oposición]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
 question: 'The [[rumors|rumores]] are ___ [[unfounded|infundados]].',       options: ['very', 'entirely', 'some'],
      correctAnswer: 'entirely',
 explanation: 'Entirely unfounded means they have no [[basis|base]] at all.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
 question: 'There has been ___ no [[progress|progreso]] [[made|hecho]].',       options: ['next to', 'not', 'almost'],
      correctAnswer: 'next to',
 explanation: 'Next to no is an [[idiomatic|idiomática]] way to say [[very little|muy poco]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
 question: 'He was ___ [[unaware|inconsciente]] of the [[danger|peligro]].',       options: ['blissfully', 'very', 'well'],
      correctAnswer: 'blissfully',
 explanation: 'Blissfully unaware means [[happily|felizmente]] not knowing something [[bad|malo]].',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
 question: 'The [[damage|daño]] is ___ [[irreparable|irreparable]].',       options: ['largely', 'little', 'partly'],
      correctAnswer: 'largely',
 explanation: 'Largely can be used to emphasize the [[extent|extensión]] of a negative state.',       points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
 question: 'She ___ [[refused|rechazó]] to [[compromise|comprometerse]].',       options: ['fast', 'hardly', 'steadfastly'],
      correctAnswer: 'steadfastly',
 explanation: 'Steadfastly refused means refused with great [[determination|determinación]].',       points: 1
    }
  ]
};

// ============================================
// BLOCK 5: MIXED PRACTICE (10 items)
// ============================================
export const C1_U10_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Unit 10 Review',
  grammarPoint: 'Mixed Inversion & Negatives',
 explanation: 'Final check of Unit 10 [[concepts|conceptos]].',   questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
 question: '___ had the [[show|espectáculo]] [[ended|terminado]] than the [[audience|audiencia]] [[cheered|vitoreó]].',       options: ['Hardly', 'Scarcely', 'No sooner'],
      correctAnswer: 'No sooner',
      explanation: 'No sooner goes with "than".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
 question: 'The [[claim|reclamación]] was ___ [[denied|negada]].',       options: ['not', 'no', 'flatly'],
      correctAnswer: 'flatly',
      explanation: 'Formal emphatic denial.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
 question: '[[Rarely|Rara vez]] ___ we seen such [[chaos|caos]].',       options: ['have', 'did', 'was'],
      correctAnswer: 'have',
      explanation: 'Inversion with present perfect.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
 question: 'Only [[later|más tarde]] ___ he [[realize|darme cuenta]] his mistake.',       options: ['he', 'was', 'did'],
      correctAnswer: 'did',
      explanation: 'Inversion after "Only later".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
 question: 'There is ___ no [[hope|esperanza]] left.',       options: ['almost', 'not', 'virtually'],
      correctAnswer: 'virtually',
      explanation: 'Emphasizing the near-absence of something.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
 question: '[[Hardly|Apenas]] ___ he [[left|ido]] when it [[rained|llovió]].',       options: ['had', 'did', 'was'],
      correctAnswer: 'had',
      explanation: 'Hardly goes with "when".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
 question: 'Under no [[circumstances|circunstancias]] ___ you [[go|ir]].',       options: ['must', 'do', 'should'],
      correctAnswer: 'must',
      explanation: 'Strong prohibition with inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
 question: 'She was ___ [[ignorant|ignorante]] of the [[facts|hechos]].',       options: ['quite', 'fairly', 'totally'],
      correctAnswer: 'totally',
      explanation: 'Strong emphasis on a state.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
 question: '[[Little|Poco]] ___ they [[know|saber]] the [[truth|verdad]].',       options: ['does', 'have', 'did'],
      correctAnswer: 'did',
      explanation: 'Narrative inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
 question: 'Only by [[trying|intentando]] ___ you [[learn|aprender]].',       options: ['will', 'do', 'can'],
      correctAnswer: 'will',
      explanation: 'Inversion in the main clause.',
      points: 1
    }
  ]
};

export const unit10 = createC1Unit(
  'c1-u10',
  'Inversion & Negative Emphasis',
  'Master the art of inversion and sophisticated negative expressions for formal and dramatic effect.',
  ['Apply inversion after negative and restrictive adverbials', 'Use inversion with "Only" expressions', 'Incorporate formal negative vocabulary and collocations'],
  [
    C1_U10_BLOCK1, C1_U10_BLOCK2, C1_U10_BLOCK3, C1_U10_BLOCK4, C1_U10_BLOCK5
  ]
);
