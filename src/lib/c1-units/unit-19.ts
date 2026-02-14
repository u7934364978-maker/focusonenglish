import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 19;

// ============================================
// BLOCK 1: ZERO ARTICLE vs DEFINITE (10 items)
// ============================================
export const C1_U19_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Advanced Use of Articles',
  grammarPoint: 'Articles',
  explanation: 'Mastering [[articles|artículos]] involves knowing when to use the [[definite article|artículo definido]] the", the [[indefinite|indefinido]] a/an", or the [[zero article|artículo cero]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: '___ [[life|vida]] of a [[musician|músico]] is often [[difficult|difícil]].',
      options: ['The', 'A', 'Zero'],
      correctAnswer: 'The',
      explanation: 'Use "the" when talking about a [[specific|específica]] life or the [[concept|concepto]] of a particular life.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: '___ [[life|vida]] exists on [[Mars|Marte]].',
      options: ['no', 'any', 'some'],
      correctAnswer: 'no',
      explanation: 'General [[uncountable|incontable]] nouns often take the [[zero article|artículo cero]] or a [[quantifier|cuantificador]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'He was [[elected|elegido]] ___ [[President|presidente]].',
      options: ['zero article', 'the', 'a'],
      correctAnswer: 'zero article',
      explanation: 'Articles are often omitted before [[titles|títulos]] expressing a [[unique|único]] [[rank|rango]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: '___ [[rich|ricos]] should [[help|ayudar]] the [[poor|pobres]].',
      options: ['The', 'A', 'Those'],
      correctAnswer: 'The',
      explanation: '"The + adjective" refers to a [[group|grupo]] of people.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'I love listening to ___ [[violin|violín]].',
      options: ['the', 'a', 'zero'],
      correctAnswer: 'the',
      explanation: 'Use "the" with [[musical instruments|instrumentos musicales]] in a general sense.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'He is in ___ [[prison|prisión]] for [[theft|robo]].',
      options: ['zero article', 'the', 'a'],
      correctAnswer: 'zero article',
      explanation: 'Zero article is used when referring to the [[purpose|propósito]] of an institution (prison, school, church).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'She went to ___ [[prison|prisión]] to [[visit|visitar]] him.',
      options: ['the', 'a', 'zero'],
      correctAnswer: 'the',
      explanation: 'Use "the" when referring to the [[building|edificio]] itself.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: '___ [[nature|naturaleza]] is beautiful in the [[spring|primavera]].',
      options: ['zero article', 'The', 'A'],
      correctAnswer: 'zero article',
      explanation: '"Nature" (the environment) usually takes the [[zero article|artículo cero]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'We need to [[protect|proteger]] ___ [[environment|medio ambiente]].',
      options: ['the', 'a', 'zero'],
      correctAnswer: 'the',
      explanation: '"The environment" is a specific concept that requires "the".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'He works as ___ [[engineer|ingeniero]].',
      options: ['an', 'the', 'zero'],
      correctAnswer: 'an',
      explanation: 'Use "a/an" with [[professions|profesiones]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: NOUN PHRASES & NOMINALIZATION (10 items)
// ============================================
export const C1_U19_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Complex Noun Phrases & Nominalization',
  grammarPoint: 'Noun Phrases',
  explanation: 'C1 writers use [[nominalization|nominalización]] (turning [[verbs/adjectives|verbos/adjetivos]] into [[nouns|sustantivos]]) to make their writing more [[formal|formal]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'The ___ of the [[virus|virus]] was a [[turning|punto de]] point.',
      options: ['discovery', 'discover', 'discovering'],
      correctAnswer: 'discovery',
      explanation: 'Noun form of "discover".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'His ___ to [[comply|cumplir]] [[led|llevó]] to his [[arrest|arresto]].',
      options: ['refusing', 'refusal', 'refuse'],
      correctAnswer: 'refusal',
      explanation: 'Noun form of "refuse".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'The ___ of the [[event|evento]] [[surprised|sorprendió]] us.',
      options: ['unlikely', 'unlikeliness', 'unlikelihood'],
      correctAnswer: 'unlikelihood',
      explanation: 'Noun form of "unlikely".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'The ___ of the [[economy|economía]] has [[slowed|ralentizado]].',
      options: ['growth', 'grow', 'growing'],
      correctAnswer: 'growth',
      explanation: 'Noun form of "grow".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'There is a ___ of [[skilled|cualificados]] [[workers|trabajadores]].',
      options: ['shortness', 'shortage', 'short'],
      correctAnswer: 'shortage',
      explanation: 'Noun form of "short".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'Her ___ was [[outstanding|sobresaliente]].',
      options: ['perform', 'performance', 'performing'],
      correctAnswer: 'performance',
      explanation: 'Noun form of "perform".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'The ___ of the [[law|ley]] is [[clear|clara]].',
      options: ['intention', 'intend', 'intending'],
      correctAnswer: 'intention',
      explanation: 'Noun form of "intend".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: '___ to [[disclose|revelar]] [[information|información]] is an [[offence|delito]].',
      options: ['Fail', 'Failure', 'Failing'],
      correctAnswer: 'Failure',
      explanation: 'Noun form of "fail".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'The ___ of the [[mountain|montaña]] is [[daunting|desalentadora]].',
      options: ['height', 'high', 'highness'],
      correctAnswer: 'height',
      explanation: 'Noun form of "high".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'His ___ on [[luck|suerte]] is [[concerning|preocupante]].',
      options: ['reliance', 'rely', 'relying'],
      correctAnswer: 'reliance',
      explanation: 'Noun form of "rely".',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: SPECIFIC ARTICLES & GEOGRAPHY (10 items)
// ============================================
export const C1_U19_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Articles with Proper Nouns & Geography',
  grammarPoint: 'Articles',
  explanation: '"[[Geographical names|Nombres geográficos]] and [[proper nouns|nombres propios]] have complex [[rules|reglas]] regarding "the".',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: 'He sailed across ___ [[Atlantic|Atlántico]].',
      options: ['the', 'a', 'zero'],
      correctAnswer: 'the',
      explanation: 'Use "the" with [[oceans|océanos]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'She lives in ___ [[Netherlands|Países Bajos]].',
      options: ['zero', 'the', 'a'],
      correctAnswer: 'the',
      explanation: 'Plural [[country names|nombres de países]] take "the".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'He climbed ___ [[Mount|Monte]] [[Everest|Everest]].',
      options: ['zero', 'the', 'a'],
      correctAnswer: 'zero',
      explanation: 'Single [[mountains|montañas]] take the zero article.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: '___ [[Andes|Andes]] are in [[South America|Sudamérica]].',
      options: ['The', 'Zero', 'A'],
      correctAnswer: 'The',
      explanation: '"[[Mountain ranges|Cordilleras]] take "the".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'They visited ___ [[Louvre|Louvre]].',
      options: ['zero', 'the', 'a'],
      correctAnswer: 'the',
      explanation: '"[[Museums|Museos]] and [[galleries|galerías]] take "the".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'We had lunch at ___ [[Claridge\'s|Claridge\'s]].',
      options: ['zero', 'the', 'a'],
      correctAnswer: 'zero',
      explanation: 'Names ending in -\'s often take the zero article.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: '___ [[United|Estados]] [[States|Unidos]] is a large [[country|país]].',
      options: ['The', 'Zero', 'A'],
      correctAnswer: 'The',
      explanation: 'Countries with "United", "Republic", or "Kingdom" take "the".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: '___ [[Hague|Haya]] is in the Netherlands.',
      options: ['The', 'Zero', 'A'],
      correctAnswer: 'The',
      explanation: 'Some [[cities|ciudades]] require "the" as part of their name.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'He is from ___ [[South|Sudáfrica]] [[Africa|Sudáfrica]].',
      options: ['zero', 'the', 'a'],
      correctAnswer: 'zero',
      explanation: 'Most countries take the zero article.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'They crossed ___ [[Sahara|Sáhara]].',
      options: ['the', 'zero', 'a'],
      correctAnswer: 'the',
      explanation: '"[[Deserts|Desiertos]] take "the".',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 4: QUANTIFIERS & NOUN PHRASES (10 items)
// ============================================
export const C1_U19_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Quantifiers in Complex Noun Phrases',
  grammarPoint: 'Quantifiers',
  explanation: 'Using [[quantifiers|cuantificadores]] like "each", "every", "all", and "none" "[[correctly|correctamente]] in complex [[sentences|oraciones]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: '___ [[student|estudiante]] [[has|tiene]] a unique [[ID|identificación]].',
      options: ['Each', 'Every', 'All'],
      correctAnswer: 'Each',
      explanation: '"Each" emphasizes [[individual|individuales]] members.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: '___ the [[students|estudiantes]] [[have|tienen]] finished.',
      options: ['All', 'Every', 'Each'],
      correctAnswer: 'All',
      explanation: '"All" takes a [[plural|plural]] verb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: '___ of the [[work|trabajo]] has been [[done|hecho]].',
      options: ['None', 'No', 'Neither'],
      correctAnswer: 'None',
      explanation: '"None of" can be followed by an [[uncountable|incontable]] noun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: '___ of my [[parents|padres]] is [[here|aquí]].',
      options: ['Either', 'Neither', 'None'],
      correctAnswer: 'Neither',
      explanation: '"Neither" refers to [[two|dos]] people/things.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'I have ___ [[patience|paciencia]] for this.',
      options: ['little', 'few', 'small'],
      correctAnswer: 'little',
      explanation: '"Little" is used with [[uncountable|incontables]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'There were ___ [[people|personas]] at the [[party|fiesta]].',
      options: ['few', 'little', 'less'],
      correctAnswer: 'few',
      explanation: '"Few" is used with [[countable|contables]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'I had ___ [[time|tiempo]], so I [[read|leí]].',
      options: ['a little', 'little', 'few'],
      correctAnswer: 'a little',
      explanation: '"A little" means [[some|algo]], while "little" means [[not enough|no suficiente]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: '___ [[one|uno]] of the [[books|libros]] [[was|fue]] [[signed|firmado]].',
      options: ['Every', 'All', 'Each'],
      correctAnswer: 'Every',
      explanation: '"Every one of" is followed by a [[plural|plural]] noun but takes a [[singular|singular]] verb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'I don\'t have ___ [[money|dinero]].',
      options: ['any', 'some', 'no'],
      correctAnswer: 'any',
      explanation: 'Use "any" in [[negative|negativas]] sentences.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: '___ [[cities|ciudades]] are beautiful.',
      options: ['Both', 'Either', 'Neither'],
      correctAnswer: 'Both',
      explanation: '"Both" refers to two and takes a [[plural|plural]] verb.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U19_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Key Word Transformation: Nouns & Articles',
  grammarPoint: 'Mixed Review',
  explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] word.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'He didn\'t discover it, which was a shame. (FAILURE) \n His ___ it was a shame.',
      options: ['failure to discover', 'failing to discovery', 'failure of discovering'],
      correctAnswer: 'failure to discover',
      explanation: 'Using [[nominalization|nominalización]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'The rich help the poor. (BY) \n The poor ___ the rich.',
      options: ['are helped by', 'are helping by', 'helped by'],
      correctAnswer: 'are helped by',
      explanation: 'Passive with "the + adjective".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'He grew up in France. (GROWTH) \n His ___ place in France.',
      options: ['growth took', 'growing took', 'grown-up took'],
      correctAnswer: 'growth took',
      explanation: 'Noun form of "grow".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'Everyone finished on time. (ALL) \n ___ the work was finished on time.',
      options: ['All of', 'Whole of', 'None of'],
      correctAnswer: 'All of',
      explanation: 'Using a quantifier.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'It is impossible that he survived. (SURVIVAL) \n His ___ is impossible.',
      options: ['survival', 'surviving', 'survive'],
      correctAnswer: 'survival',
      explanation: 'Noun form of "survive".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'He is an engineer. (WORKS) \n He ___ engineer.',
      options: ['works as an', 'works as the', 'work like an'],
      correctAnswer: 'works as an',
      explanation: 'Article with profession.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'I have no patience. (LITTLE) \n I have ___ patience.',
      options: ['very little', 'some little', 'few'],
      correctAnswer: 'very little',
      explanation: 'Using a quantifier for emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'They visited the capital of France. (PARIS) \n They visited ___ .',
      options: ['Paris', 'the Paris', 'a Paris'],
      correctAnswer: 'Paris',
      explanation: 'Zero article with city name.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'He intends to leave. (INTENTION) \n He has ___ .',
      options: ['the intention to leave', 'intention to leave', 'the intend to leave'],
      correctAnswer: 'the intention to leave',
      explanation: 'Nominalization.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'The environment is in danger. (NATURE) \n ___ is in danger.',
      options: ['Nature', 'The nature', 'A nature'],
      correctAnswer: 'Nature',
      explanation: 'Zero article with "nature".',
      points: 2
    }
  ]
};

export const unit19: Lesson = createC1Unit(
  'c1-u19',
  'Advanced Articles & Noun Phrases',
  'Mastering the subtleties of articles, noun phrases, and formal nominalization.',
  ['Use articles correctly with abstract and geographical nouns', 'Apply nominalization to increase formality', 'Use quantifiers accurately in complex noun phrases'],
  [
    C1_U19_BLOCK1, C1_U19_BLOCK2, C1_U19_BLOCK3, C1_U19_BLOCK4, C1_U19_BLOCK5
  ]
);
