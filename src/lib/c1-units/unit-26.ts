import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 26;

// ============================================
// BLOCK 1: ADVANCED COMPARATIVE STRUCTURES (10 items)
// ============================================
export const C1_U26_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Comparison: The... the... & Nowhere near',
  grammarPoint: 'Comparison',
 explanation: 'Use [[double comparatives|comparativos dobles]] to show [[proportional|proporcional]] change and [[emphatic|enfáticas]] phrases for big [[differences|diferencias]].',   questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
 question: 'The ___ you [[work|trabajas]], the [[better|mejor]] you [[get|te vuelves]].',       options: ['more', 'harder', 'fastest'],
      correctAnswer: 'harder',
      explanation: 'The + comparative, the + comparative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
 question: 'The ___ [[expensive|caro]] it is, the [[higher|más alto]] the [[quality|calidad]].',       options: ['less', 'higher', 'more'],
      correctAnswer: 'more',
      explanation: 'Proportional comparison with adjectives.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
 question: 'This [[car|coche]] is [[nowhere|ninguna parte]] ___ as [[fast|rápido]] as the [[other|otro]] one.',       options: ['near', 'close', 'far'],
      correctAnswer: 'near',
      explanation: '"Nowhere near as... as" means not at all close.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
 question: 'The [[film|película]] was ___ like as [[good|buena]] as the [[book|libro]].',       options: ['none', 'nothing', 'no'],
      correctAnswer: 'nothing',
      explanation: '"Nothing like as... as" is an emphatic negative comparison.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
 question: 'The ___ [[done|hecho]], the [[better|mejor]].',       options: ['earlier', 'better', 'sooner'],
      correctAnswer: 'sooner',
      explanation: 'Common short double comparative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
 question: 'He is [[every|cada]] ___ as [[talented|talentoso]] as his [[brother|hermano]].',       options: ['bit', 'part', 'way'],
      correctAnswer: 'bit',
      explanation: '"Every bit as... as" means exactly as.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
 question: 'It was ___ [[far|lejos]] the [[most|más]] [[difficult|difícil]] [[test|test]].',       options: ['for', 'with', 'by'],
      correctAnswer: 'by',
      explanation: '"By far" + superlative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
 question: 'The ___ I [[think|pienso]] [[about|sobre]] it, the [[less|menos]] I [[understand|entiendo]].',       options: ['more', 'better', 'more'],
      correctAnswer: 'more',
      explanation: 'Double comparative with verbs.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
 question: 'She is [[slightly|ligeramente]] ___ than me.',       options: ['taller', 'tall', 'tallest'],
      correctAnswer: 'taller',
      explanation: 'Modifier + comparative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
 question: 'This is [[considerably|considerablemente]] ___ than that.',       options: ['cheap', 'cheaper', 'cheapest'],
      correctAnswer: 'cheaper',
      explanation: 'Adverb of degree + comparative.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: MODIFIERS OF COMPARISON (10 items)
// ============================================
export const C1_U26_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Degree: Modifiers for Comparatives',
  grammarPoint: 'Degree',
 explanation: 'Use [[adverbs|adverbios]] like significantly marginally", and vastly to show the [[extent|extensión]] of [[difference|diferencia]].',   questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
 question: 'The [[new|nuevo]] [[model|modelo]] is ___ [[better|mejor]] than the [[old|viejo]] one.',       options: ['very', 'significantly', 'big'],
      correctAnswer: 'significantly',
      explanation: '"Significantly" is formal for a large difference.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
 question: 'The [[difference|diferencia]] is ___ [[smaller|más pequeña]].',       options: ['vastly', 'greatly', 'marginally'],
      correctAnswer: 'marginally',
      explanation: '"Marginally" means a very small amount.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
 question: 'This [[city|ciudad]] is ___ [[overrated|sobrevalorada]].',       options: ['vastly', 'little', 'slightly'],
      correctAnswer: 'vastly',
      explanation: '"Vastly" shows a huge degree.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
 question: 'He is ___ [[more|más]] [[experienced|experimentado]].',       options: ['somewhat', 'infinitely', 'marginally'],
      correctAnswer: 'infinitely',
      explanation: 'Hyperbolic but formal emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
 question: 'The [[result|resultado]] was ___ [[different|diferente]].',       options: ['all', 'quite', 'altogether'],
      correctAnswer: 'altogether',
      explanation: '"Altogether" means completely.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
 question: 'She is ___ [[shorter|más baja]] than her [[sister|hermana]].',       options: ['somewhat', 'greatly', 'highly'],
      correctAnswer: 'somewhat',
      explanation: '"Somewhat" means a bit.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
 question: 'The [[prices|precios]] are ___ [[higher|más altos]] than [[last|pasado]] [[year|año]].',       options: ['very', 'way', 'much'],
      correctAnswer: 'way',
      explanation: '"Way" is informal but common for large degrees.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
 question: 'It is ___ [[more|más]] [[difficult|difícil]] than it [[looks|parece]].',       options: ['marginally', 'slightly', 'considerably'],
      correctAnswer: 'considerably',
      explanation: 'Formal for a large degree.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
 question: 'The [[gap|brecha]] is ___ [[daily|diariamente]].',       options: ['widening', 'growing', 'increasing'],
      correctAnswer: 'widening',
      explanation: 'Collocation with "gap".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
 question: 'The [[two|dos]] [[plans|planes]] are ___.',       options: ['same', 'identical', 'equal'],
      correctAnswer: 'identical',
      explanation: 'No degree, they are the same.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: IDIOMS OF COMPARISON (10 items)
// ============================================
export const C1_U26_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Comparison: Idiomatic Expressions',
  grammarPoint: 'Idioms',
 explanation: 'Use [[idioms|modismos]] like a far cry from in a league of their own", and head and shoulders above for [[vivid|vívidas]] comparisons.',   questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
 question: 'His [[performance|actuación]] was a [[far|lejos]] ___ from his [[last|último]] one.',       options: ['shout', 'cry', 'call'],
      correctAnswer: 'cry',
      explanation: '"A far cry from" means very different from.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
 question: 'She is [[head|cabeza]] and ___ [[above|encima]] the [[rest|resto]].',       options: ['knees', 'feet', 'shoulders'],
      correctAnswer: 'shoulders',
      explanation: '"Head and shoulders above" means much better than.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
 question: 'This [[team|equipo]] is in a ___ of their [[own|propia]].',       options: ['league', 'class', 'group'],
      correctAnswer: 'league',
      explanation: '"In a league of one\'s own" means uniquely excellent.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
 question: 'The [[two|dos]] [[problems|problemas]] are as [[different|diferentes]] as ___ and [[day|día]].',       options: ['dark', 'night', 'evening'],
      correctAnswer: 'night',
      explanation: 'Comparing total opposites.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
 question: 'He is as [[cool|fresco]] as a ___.',       options: ['tomato', 'pepper', 'cucumber'],
      correctAnswer: 'cucumber',
      explanation: 'Idiom for being very calm.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
 question: 'It [[cost|costó]] next to ___.',       options: ['nothing', 'zero', 'free'],
      correctAnswer: 'nothing',
      explanation: 'Almost free.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
 question: 'The [[two|dos]] [[cars|coches]] are as [[like|parecidos]] as two ___ in a [[pod|vaina]].',       options: ['beans', 'peas', 'seeds'],
      correctAnswer: 'peas',
      explanation: 'Exactly alike.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
 question: 'She is as [[sharp|afilada]] as a ___.',       options: ['knife', 'pencil', 'needle'],
      correctAnswer: 'needle',
      explanation: 'Very intelligent/observant.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
 question: 'They are like [[chalk|tiza]] and ___.',       options: ['cheese', 'bread', 'milk'],
      correctAnswer: 'cheese',
      explanation: 'Completely different.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
 question: 'He is as [[blind|ciego]] as a ___.',       options: ['mole', 'bat', 'owl'],
      correctAnswer: 'bat',
      explanation: 'Common comparison for poor vision.',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: GRADABLE & UNGRADABLE ADJECTIVES (10 items)
// ============================================
export const C1_U26_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Degree: Gradable vs. Ungradable Adjectives',
  grammarPoint: 'Adjectives',
 explanation: '[[Gradable|Graduables]] adjectives use modifiers like very", while [[ungradable|no graduables]] (extreme) adjectives use absolutely or completely.',   questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
 question: 'The [[food|comida]] was ___ [[delicious|deliciosa]].',       options: ['very', 'absolutely', 'fairly'],
      correctAnswer: 'absolutely',
      explanation: '"Delicious" is ungradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
 question: 'I was ___ [[tired|cansado]].',       options: ['absolutely', 'utterly', 'very'],
      correctAnswer: 'very',
      explanation: '"Tired" is gradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
 question: 'The [[view|vista]] was ___ [[breathtaking|asombrosa]].',       options: ['totally', 'slightly', 'very'],
      correctAnswer: 'totally',
      explanation: '"Breathtaking" is ungradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
 question: 'He was ___ [[lucky|afortunado]].',       options: ['completely', 'extremely', 'absolutely'],
      correctAnswer: 'extremely',
      explanation: '"Lucky" is gradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
 question: 'The [[room|habitación]] was ___ [[filthy|asquerosa]].',       options: ['fairly', 'quite', 'utterly'],
      correctAnswer: 'utterly',
      explanation: '"Filthy" is ungradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
 question: 'It was ___ [[ridiculous|ridículo]].',       options: ['completely', 'very', 'somewhat'],
      correctAnswer: 'completely',
      explanation: '"Ridiculous" is ungradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
 question: 'The [[water|agua]] was ___ [[cold|fría]].',       options: ['very', 'freezing', 'slightly'],
      correctAnswer: 'freezing',
      explanation: 'Modifier + adjective.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
 question: 'I am ___ [[happy|feliz]] [[here|aquí]].',       options: ['utterly', 'totally', 'perfectly'],
      correctAnswer: 'perfectly',
      explanation: '"Happy" with specific modifier.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
 question: 'The [[task|tarea]] was ___ [[impossible|imposible]].',       options: ['completely', 'very', 'extremely'],
      correctAnswer: 'completely',
      explanation: '"Impossible" is ungradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
 question: 'She was ___ [[furious|furiosa]].',       options: ['very', 'absolutely', 'slightly'],
      correctAnswer: 'absolutely',
      explanation: '"Furious" is ungradable.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U26_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Key Word Transformation: Comparison',
  grammarPoint: 'Mixed Review',
 explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] [[word|palabra]] so that it has a [[similar|similar]] meaning.',   questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'The car is not nearly as fast as the bike. (NOWHERE) \n The car is ___ as fast as the bike.',
      options: ['nowhere near', 'not near', 'nothing near'],
      correctAnswer: 'nowhere near',
      explanation: 'Using "nowhere near" for emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'If you wait longer, it will be worse. (THE) \n The ___ you wait, the worse it will be.',
      options: ['more', 'better', 'longer'],
      correctAnswer: 'longer',
      explanation: 'Double comparative.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'He is much taller than his father. (BY) \n He is ___ his father.',
      options: ['by far taller than', 'far taller by', 'taller by far'],
      correctAnswer: 'by far taller than',
      explanation: '"By far" with comparative.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'They are exactly the same. (BIT) \n They are every ___ as each other.',
      options: ['way', 'bit', 'part'],
      correctAnswer: 'bit',
      explanation: '"Every bit as... as".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'The film was very different from the book. (CRY) \n The film was a ___ from the book.',
      options: ['far way', 'long distance', 'far cry'],
      correctAnswer: 'far cry',
      explanation: 'Idiom for big difference.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'I have never been so happy. (NEVER) \n ___ have I been so happy.',
      options: ['Never', 'Rarely', 'Seldom'],
      correctAnswer: 'Never',
      explanation: 'Negative inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'It was much more expensive than I thought. (CONSIDERABLY) \n It was ___ than I thought.',
      options: ['expensive considerably', 'considerably more expensive', 'more considerably expensive'],
      correctAnswer: 'considerably more expensive',
      explanation: 'Formal modifier.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'He is the best player in the team. (HEAD) \n He is ___ the rest of the team.',
      options: ['above shoulders and head', 'shoulders and head above', 'head and shoulders above'],
      correctAnswer: 'head and shoulders above',
      explanation: 'Idiom for superiority.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'As you get older, you get wiser. (THE) \n The ___ you get, the wiser you become.',
      options: ['older', 'more old', 'better'],
      correctAnswer: 'older',
      explanation: 'Double comparative.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'The food was absolutely terrible. (UTTERLY) \n The food was ___ awful.',
      options: ['very', 'utterly', 'completely'],
      correctAnswer: 'utterly',
      explanation: 'Extreme modifier.',
      points: 2
    }
  ]
};

export const unit26: Lesson = createC1Unit(
  'c1-u26',
  'Advanced Comparison & Degree',
  'Exploring complex ways to compare ideas, people, and things with precision and style.',
  ['Use double comparatives (The... the...)', 'Apply emphatic modifiers and idioms', 'Master gradable vs. ungradable adjectives'],
  [
    C1_U26_BLOCK1, C1_U26_BLOCK2, C1_U26_BLOCK3, C1_U26_BLOCK4, C1_U26_BLOCK5
  ]
);
