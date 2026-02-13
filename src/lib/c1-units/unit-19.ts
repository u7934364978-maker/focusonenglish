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
  explanation: 'Mastering [[articles|artículos]] involves knowing when to use the [[definite article|artículo definido]] "the", the [[indefinite|indefinido]] "a/an", or the [[zero article|artículo cero]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: '___ (the) [[life|vida]] of a [[musician|músico]] is often [[difficult|difícil]].',
      correctAnswer: 'The',
      explanation: 'Use "the" when talking about a [[specific|específica]] life or the [[concept|concepto]] of a particular life.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: '___ (zero) [[life|vida]] exists on [[Mars|Marte]].',
      correctAnswer: 'no',
      explanation: 'General [[uncountable|incontable]] nouns often take the [[zero article|artículo cero]] or a [[quantifier|cuantificador]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: 'He was [[elected|elegido]] ___ (zero) [[President|presidente]].',
      correctAnswer: '',
      explanation: 'Articles are often omitted before [[titles|títulos]] expressing a [[unique|único]] [[rank|rango]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: '___ (the) [[rich|ricos]] should [[help|ayudar]] the [[poor|pobres]].',
      correctAnswer: 'The',
      explanation: '"The + adjective" refers to a [[group|grupo]] of people.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: 'I love listening to ___ (the) [[violin|violín]].',
      correctAnswer: 'the',
      explanation: 'Use "the" with [[musical instruments|instrumentos musicales]] in a general sense.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: 'He is in ___ (zero) [[prison|prisión]] for [[theft|robo]].',
      correctAnswer: '',
      explanation: 'Zero article is used when referring to the [[purpose|propósito]] of an institution (prison, school, church).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: 'She went to ___ (the) [[prison|prisión]] to [[visit|visitar]] him.',
      correctAnswer: 'the',
      explanation: 'Use "the" when referring to the [[building|edificio]] itself.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: '___ (the) [[nature|naturaleza]] is beautiful in the [[spring|primavera]].',
      correctAnswer: '',
      explanation: '"Nature" (the environment) usually takes the [[zero article|artículo cero]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: 'We need to [[protect|proteger]] ___ (the) [[environment|medio ambiente]].',
      correctAnswer: 'the',
      explanation: '"The environment" is a specific concept that requires "the".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'He works as ___ (an) [[engineer|ingeniero]].',
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
      type: 'fill-blank',
      question: 'The ___ (discover) of the [[virus|virus]] was a [[turning|punto de]] point.',
      correctAnswer: 'discovery',
      explanation: 'Noun form of "discover".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'fill-blank',
      question: 'His ___ (refuse) to [[comply|cumplir]] [[led|llevó]] to his [[arrest|arresto]].',
      correctAnswer: 'refusal',
      explanation: 'Noun form of "refuse".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'fill-blank',
      question: 'The ___ (unlikely) of the [[event|evento]] [[surprised|sorprendió]] us.',
      correctAnswer: 'unlikelihood',
      explanation: 'Noun form of "unlikely".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'fill-blank',
      question: 'The ___ (grow) of the [[economy|economía]] has [[slowed|ralentizado]].',
      correctAnswer: 'growth',
      explanation: 'Noun form of "grow".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'fill-blank',
      question: 'There is a ___ (short) of [[skilled|cualificados]] [[workers|trabajadores]].',
      correctAnswer: 'shortage',
      explanation: 'Noun form of "short".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'fill-blank',
      question: 'Her ___ (perform) was [[outstanding|sobresaliente]].',
      correctAnswer: 'performance',
      explanation: 'Noun form of "perform".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'fill-blank',
      question: 'The ___ (intend) of the [[law|ley]] is [[clear|clara]].',
      correctAnswer: 'intention',
      explanation: 'Noun form of "intend".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'fill-blank',
      question: '___ (fail) to [[disclose|revelar]] [[information|información]] is an [[offence|delito]].',
      correctAnswer: 'Failure',
      explanation: 'Noun form of "fail".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'fill-blank',
      question: 'The ___ (high) of the [[mountain|montaña]] is [[daunting|desalentadora]].',
      correctAnswer: 'height',
      explanation: 'Noun form of "high".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'fill-blank',
      question: 'His ___ (rely) on [[luck|suerte]] is [[concerning|preocupante]].',
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
  explanation: '[[Geographical names|Nombres geográficos]] and [[proper nouns|nombres propios]] have complex [[rules|reglas]] regarding "the".',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: 'He sailed across ___ (the) [[Atlantic|Atlántico]].',
      options: ['the', 'a', 'zero'],
      correctAnswer: 'the',
      explanation: 'Use "the" with [[oceans|océanos]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'She lives in ___ (the) [[Netherlands|Países Bajos]].',
      options: ['the', 'zero', 'a'],
      correctAnswer: 'the',
      explanation: 'Plural [[country names|nombres de países]] take "the".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'He climbed ___ (zero) [[Mount|Monte]] [[Everest|Everest]].',
      options: ['zero', 'the', 'a'],
      correctAnswer: 'zero',
      explanation: 'Single [[mountains|montañas]] take the zero article.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: '___ (the) [[Andes|Andes]] are in [[South America|Sudamérica]].',
      options: ['The', 'Zero', 'A'],
      correctAnswer: 'The',
      explanation: '[[Mountain ranges|Cordilleras]] take "the".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'They visited ___ (the) [[Louvre|Louvre]].',
      options: ['the', 'zero', 'a'],
      correctAnswer: 'the',
      explanation: '[[Museums|Museos]] and [[galleries|galerías]] take "the".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'We had lunch at ___ (zero) [[Claridge\'s|Claridge\'s]].',
      options: ['zero', 'the', 'a'],
      correctAnswer: 'zero',
      explanation: 'Names ending in -\'s often take the zero article.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: '___ (the) [[United|Estados]] [[States|Unidos]] is a large [[country|país]].',
      options: ['The', 'Zero', 'A'],
      correctAnswer: 'The',
      explanation: 'Countries with "United", "Republic", or "Kingdom" take "the".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: '___ (the) [[Hague|Haya]] is in the Netherlands.',
      options: ['The', 'Zero', 'A'],
      correctAnswer: 'The',
      explanation: 'Some [[cities|ciudades]] require "the" as part of their name.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'He is from ___ (zero) [[South|Sudáfrica]] [[Africa|Sudáfrica]].',
      options: ['zero', 'the', 'a'],
      correctAnswer: 'zero',
      explanation: 'Most countries take the zero article.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'They crossed ___ (the) [[Sahara|Sáhara]].',
      options: ['the', 'zero', 'a'],
      correctAnswer: 'the',
      explanation: '[[Deserts|Desiertos]] take "the".',
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
  explanation: 'Using [[quantifiers|cuantificadores]] like "each", "every", "all", and "none" [[correctly|correctamente]] in complex [[sentences|oraciones]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: '___ (Each) [[student|estudiante]] [[has|tiene]] a unique [[ID|identificación]].',
      options: ['Each', 'All', 'Every'],
      correctAnswer: 'Each',
      explanation: '"Each" emphasizes [[individual|individuales]] members.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: '___ (All) the [[students|estudiantes]] [[have|tienen]] finished.',
      options: ['All', 'Every', 'Each'],
      correctAnswer: 'All',
      explanation: '"All" takes a [[plural|plural]] verb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: '___ (None) of the [[work|trabajo]] has been [[done|hecho]].',
      options: ['None', 'No', 'Neither'],
      correctAnswer: 'None',
      explanation: '"None of" can be followed by an [[uncountable|incontable]] noun.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: '___ (Neither) of my [[parents|padres]] is [[here|aquí]].',
      options: ['Neither', 'None', 'Either'],
      correctAnswer: 'Neither',
      explanation: '"Neither" refers to [[two|dos]] people/things.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'I have ___ (little) [[patience|paciencia]] for this.',
      options: ['little', 'few', 'small'],
      correctAnswer: 'little',
      explanation: '"Little" is used with [[uncountable|incontables]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'There were ___ (few) [[people|personas]] at the [[party|fiesta]].',
      options: ['few', 'little', 'less'],
      correctAnswer: 'few',
      explanation: '"Few" is used with [[countable|contables]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'I had ___ (a little) [[time|tiempo]], so I [[read|leí]].',
      options: ['a little', 'little', 'few'],
      correctAnswer: 'a little',
      explanation: '"A little" means [[some|algo]], while "little" means [[not enough|no suficiente]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: '___ (Every) [[one|uno]] of the [[books|libros]] [[was|fue]] [[signed|firmado]].',
      options: ['Every', 'All', 'Each'],
      correctAnswer: 'Every',
      explanation: '"Every one of" is followed by a [[plural|plural]] noun but takes a [[singular|singular]] verb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'I don\'t have ___ (any) [[money|dinero]].',
      options: ['any', 'some', 'no'],
      correctAnswer: 'any',
      explanation: 'Use "any" in [[negative|negativas]] sentences.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: '___ (Both) [[cities|ciudades]] are beautiful.',
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
      type: 'fill-blank',
      question: 'He didn\'t discover it, which was a shame. (FAILURE) \n His ___ it was a shame.',
      correctAnswer: 'failure to discover',
      explanation: 'Using [[nominalization|nominalización]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'fill-blank',
      question: 'The rich help the poor. (BY) \n The poor ___ the rich.',
      correctAnswer: 'are helped by',
      explanation: 'Passive with "the + adjective".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'fill-blank',
      question: 'He grew up in France. (GROWTH) \n His ___ place in France.',
      correctAnswer: 'growth took',
      explanation: 'Noun form of "grow".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'fill-blank',
      question: 'Everyone finished on time. (ALL) \n ___ the work was finished on time.',
      correctAnswer: 'All of',
      explanation: 'Using a quantifier.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'fill-blank',
      question: 'It is impossible that he survived. (SURVIVAL) \n His ___ is impossible.',
      correctAnswer: 'survival',
      explanation: 'Noun form of "survive".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'fill-blank',
      question: 'He is an engineer. (WORKS) \n He ___ engineer.',
      correctAnswer: 'works as an',
      explanation: 'Article with profession.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'fill-blank',
      question: 'I have no patience. (LITTLE) \n I have ___ patience.',
      correctAnswer: 'very little',
      explanation: 'Using a quantifier for emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'fill-blank',
      question: 'They visited the capital of France. (PARIS) \n They visited ___ .',
      correctAnswer: 'Paris',
      explanation: 'Zero article with city name.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'fill-blank',
      question: 'He intends to leave. (INTENTION) \n He has ___ .',
      correctAnswer: 'the intention to leave',
      explanation: 'Nominalization.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'fill-blank',
      question: 'The environment is in danger. (NATURE) \n ___ is in danger.',
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
