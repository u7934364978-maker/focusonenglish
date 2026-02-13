import { Exercise, Lesson } from '../exercise-types';
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
  explanation: 'When a [[sentence|oración]] starts with a [[negative|negativo]] or [[restrictive|restrictiva]] expression (like "Never", "Seldom", "Rarely"), the [[subject|sujeto]] and [[auxiliary|auxiliar]] are [[inverted|invertidos]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: '[[Never|Nunca]] ___ I seen such a [[stunning|impresionante]] [[display|despliegue]] of [[talent|talento]].',
      correctAnswer: 'have',
      explanation: 'Use inversion after "Never".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: '[[Seldom|Rara vez]] ___ the [[sun|sol]] [[shine|brilla]] so [[brightly|brillantemente]] in winter.',
      correctAnswer: 'does',
      explanation: 'Use "does" for [[present|presente]] simple inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: '[[Hardly|Apenas]] ___ he [[started|empezado]] his [[speech|discurso]] when the [[lights|luces]] went out.',
      correctAnswer: 'had',
      explanation: 'Use inversion after "Hardly".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: 'Under no [[circumstances|circunstancias]] ___ [[children|niños]] be [[left|dejados]] [[unattended|sin supervisión]].',
      correctAnswer: 'should',
      explanation: 'Inversion after a [[negative|negativa]] [[prepositional|preposicional]] phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: '[[Rarely|Rara vez]] ___ [[politicians|políticos]] [[admit|admiten]] their [[mistakes|errores]].',
      correctAnswer: 'do',
      explanation: 'Inversion for general [[habits|hábitos]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: 'Not until [[much|mucho]] [[later|más tarde]] ___ I [[realize|darme cuenta]] the [[gravity|gravedad]] of the [[situation|situación]].',
      correctAnswer: 'did',
      explanation: 'Inversion occurs in the [[main|principal]] clause after "Not until".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: '[[Little|Poco]] ___ she [[know|saber]] that her [[life|vida]] was about to [[change|cambiar]] [[forever|para siempre]].',
      correctAnswer: 'did',
      explanation: 'Use "did" with "Little" for [[narrative|narrativo]] emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: '[[Only|Solo]] [[after|después de]] [[leaving|irse]] the [[office|oficina]] ___ he [[remember|recordar]] to [[lock|cerrar]] the door.',
      correctAnswer: 'did',
      explanation: 'Inversion after "Only after".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: 'No [[sooner|más pronto]] ___ the [[game|juego]] [[begun|empezado]] than it started to [[rain|llover]].',
      correctAnswer: 'had',
      explanation: 'Use "had" with "No sooner".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'At no [[time|tiempo]] ___ the [[suspect|sospechoso]] [[confess|confesar]] to the [[crime|crimen]].',
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
  explanation: 'Expressions with "Only" (Only if, Only when, Only by) require [[inversion|inversión]] in the [[main|principal]] clause.',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'Only by [[working|trabajando]] [[harder|más duro]] ___ you [[achieve|lograr]] your [[goals|objetivos]].',
      options: ['will', 'you will', 'do you'],
      correctAnswer: 'will',
      explanation: 'Inversion in the main clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'Only when [[everyone|todos]] had [[left|salido]] ___ I [[feel|sentir]] [[safe|seguro]].',
      options: ['did', 'I did', 'have'],
      correctAnswer: 'did',
      explanation: 'Inversion after a [[time|tiempo]] clause starting with "Only when".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'Only if it [[stops|para]] [[snowing|nevar]] ___ we be able to [[travel|viajar]].',
      options: ['will', 'can', 'are'],
      correctAnswer: 'will',
      explanation: 'Conditional inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'Only then ___ I [[understand|entender]] the [[true|verdadero]] [[meaning|significado]] of his [[words|palabras]].',
      options: ['did', 'I', 'was'],
      correctAnswer: 'did',
      explanation: 'Inversion after "Only then".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'Only in [[emergencies|emergencias]] ___ you [[use|usar]] this [[exit|salida]].',
      options: ['should', 'you should', 'must'],
      correctAnswer: 'should',
      explanation: 'Modal inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'Only once ___ I [[met|conocido]] such an [[extraordinary|extraordinaria]] [[person|persona]].',
      options: ['have', 'I have', 'did'],
      correctAnswer: 'have',
      explanation: 'Inversion with present perfect after "Only once".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'Only [[later|más tarde]] ___ the [[police|policía]] [[discover|descubrir]] the [[truth|verdad]].',
      options: ['did', 'was', 'had'],
      correctAnswer: 'did',
      explanation: 'Inversion after "Only later".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'Only by [[investing|invirtiendo]] now ___ the [[company|empresa]] [[survive|sobrevivir]].',
      options: ['can', 'could', 'did'],
      correctAnswer: 'can',
      explanation: 'Modal inversion in the main clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'Only with your [[help|ayuda]] ___ we [[succeed|tener éxito]].',
      options: ['did', 'we did', 'have'],
      correctAnswer: 'did',
      explanation: 'Inversion with "Only with".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'Only [[yesterday|ayer]] ___ I [[hear|oír]] the [[news|noticias]].',
      options: ['did', 'I', 'was'],
      correctAnswer: 'did',
      explanation: 'Inversion for emphasis on [[recent|reciente]] time.',
      points: 1
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
  explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] word, starting with the [[negative|negativa]] expression.',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: 'I have never seen such a beautiful garden. (NEVER) \n ___ such a beautiful garden.',
      correctAnswer: 'Never have I seen',
      explanation: 'Inversion with "Never".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: 'He didn\'t realize his mistake until later. (NOT UNTIL) \n ___ his mistake.',
      correctAnswer: 'Not until later did he realize',
      explanation: 'Inversion with "Not until".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: 'You must not open this box under any circumstances. (UNDER) \n ___ this box.',
      correctAnswer: 'Under no circumstances must you open',
      explanation: 'Inversion with "Under no circumstances".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: 'As soon as he arrived, the power went out. (NO SOONER) \n ___ the power went out.',
      correctAnswer: 'No sooner had he arrived than',
      explanation: 'Inversion with "No sooner... than".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: 'She knew little about the surprises waiting for her. (LITTLE) \n ___ about the surprises waiting for her.',
      correctAnswer: 'Little did she know',
      explanation: 'Inversion with "Little".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: 'We rarely go out these days. (RARELY) \n ___ out these days.',
      correctAnswer: 'Rarely do we go',
      explanation: 'Inversion with "Rarely".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: 'He not only passed but also got the highest mark. (NOT ONLY) \n ___ but he also got the highest mark.',
      correctAnswer: 'Not only did he pass',
      explanation: 'Inversion with "Not only".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: 'I have seldom heard such a moving story. (SELDOM) \n ___ such a moving story.',
      correctAnswer: 'Seldom have I heard',
      explanation: 'Inversion with "Seldom".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: 'You can only enter if you have a permit. (ONLY) \n ___ can you enter.',
      correctAnswer: 'Only if you have a permit',
      explanation: 'Inversion with "Only if".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: 'He had hardly finished speaking when she interrupted. (HARDLY) \n ___ speaking when she interrupted.',
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
  explanation: 'C1 learners should use [[sophisticated|sofisticadas]] negative expressions to [[convey|transmitir]] [[precision|precisión]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'The [[proposal|propuesta]] was ___ [[rejected|rechazada]] by the [[committee|comité]].',
      options: ['flatly', 'no', 'not'],
      correctAnswer: 'flatly',
      explanation: '"Flatly rejected" means rejected [[completely|completamente]] and [[firmly|firmemente]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'There is ___ no [[evidence|evidencia]] to [[support|apoyar]] the [[claim|afirmación]].',
      options: ['virtually', 'almost', 'nearly'],
      correctAnswer: 'virtually',
      explanation: '"Virtually no" means [[almost|casi]] none.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'The [[details|detalles]] are ___ [[confidential|confidenciales]].',
      options: ['strictly', 'very', 'high'],
      correctAnswer: 'strictly',
      explanation: '"Strictly confidential" is a common [[collocation|colocación]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'The [[outcome|resultado]] was ___ [[unpredictable|impredecible]].',
      options: ['utterly', 'quite', 'bit'],
      correctAnswer: 'utterly',
      explanation: '"Utterly" adds strong emphasis to a [[negative|negativa]] quality.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'I ___ [[disagree|en desacuerdo]] with your [[assessment|evaluación]].',
      options: ['strongly', 'hardly', 'not'],
      correctAnswer: 'strongly',
      explanation: '"Strongly disagree" is a [[formal|formal]] way to express [[opposition|oposición]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'The [[rumors|rumores]] are ___ [[unfounded|infundados]].',
      options: ['entirely', 'very', 'some'],
      correctAnswer: 'entirely',
      explanation: '"Entirely unfounded" means they have no [[basis|base]] at all.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'There has been ___ no [[progress|progreso]] [[made|hecho]].',
      options: ['next to', 'not', 'almost'],
      correctAnswer: 'next to',
      explanation: '"Next to no" is an [[idiomatic|idiomática]] way to say [[very little|muy poco]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'He was ___ [[unaware|inconsciente]] of the [[danger|peligro]].',
      options: ['blissfully', 'very', 'well'],
      correctAnswer: 'blissfully',
      explanation: '"Blissfully unaware" means [[happily|felizmente]] not knowing something [[bad|malo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'The [[damage|daño]] is ___ [[irreparable|irreparable]].',
      options: ['largely', 'bit', 'most'],
      correctAnswer: 'largely',
      explanation: '"Largely" means [[mostly|principalmente]] or [[mainly|mayormente]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'It is ___ [[impossible|imposible]] to finish on time.',
      options: ['downright', 'very', 'not'],
      correctAnswer: 'downright',
      explanation: '"Downright" emphasizes the [[extreme|extremo]] nature of the [[impossibility|imposibilidad]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: ERROR CORRECTION - INVERSION (10 items)
// ============================================
export const C1_U10_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Error Correction: Inversion Mastery',
  grammarPoint: 'Inversion',
  explanation: 'Identify the [[incorrect|incorrecto]] usage of inversion in these advanced [[sentences|oraciones]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'Never I have been so surprised.',
      options: ['I have been', 'have I been', 'I had been'],
      correctAnswer: 'have I been',
      explanation: 'Inversion is mandatory after "Never".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'Seldom he goes to the cinema.',
      options: ['he goes', 'does he go', 'he is going'],
      correctAnswer: 'does he go',
      explanation: 'Inversion is required after "Seldom".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'Not until the rain stopped we could go out.',
      options: ['we could go', 'could we go', 'we can go'],
      correctAnswer: 'could we go',
      explanation: 'Inversion occurs in the main clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'Little he knew what would happen.',
      options: ['he knew', 'did he know', 'he knows'],
      correctAnswer: 'did he know',
      explanation: 'Inversion is required after "Little".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'No sooner I had arrived than the phone rang.',
      options: ['I had arrived', 'had I arrived', 'I arrived'],
      correctAnswer: 'had I arrived',
      explanation: 'Inversion after "No sooner".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'Only by studying you can pass.',
      options: ['you can pass', 'can you pass', 'you will pass'],
      correctAnswer: 'can you pass',
      explanation: 'Inversion in the main clause after "Only by".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'Rarely we see such a talent.',
      options: ['we see', 'do we see', 'we have seen'],
      correctAnswer: 'do we see',
      explanation: 'Inversion required after "Rarely".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'At no time the manager was informed.',
      options: ['the manager was', 'was the manager', 'manager was'],
      correctAnswer: 'was the manager',
      explanation: 'Inversion after "At no time".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'Hardly she had entered the room when it exploded.',
      options: ['she had entered', 'had she entered', 'she entered'],
      correctAnswer: 'had she entered',
      explanation: 'Inversion after "Hardly".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'Not only he is smart, but also kind.',
      options: ['he is', 'is he', 'he was'],
      correctAnswer: 'is he',
      explanation: 'Inversion after "Not only".',
      points: 1
    }
  ]
};

export const unit10: Lesson = createC1Unit(
  'c1-u10',
  'Inversion & Negative Adverbials',
  'Mastering the art of emphasis through inversion and sophisticated negative structures.',
  ['Use negative adverbials with correct inversion', 'Apply "Only" structures accurately', 'Identify and correct inversion errors'],
  [
    C1_U10_BLOCK1, C1_U10_BLOCK2, C1_U10_BLOCK3, C1_U10_BLOCK4, C1_U10_BLOCK5
  ]
);
