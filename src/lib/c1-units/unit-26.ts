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
  explanation: 'Use [[double comparatives|comparativos dobles]] to show [[proportional|proporcional]] change and [[emphatic|enfáticas]] phrases for big [[differences|diferencias]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'fill-blank',
      question: 'The ___ you [[work|trabajas]], the [[better|mejor]] you [[get|te vuelves]].',
      correctAnswer: 'harder',
      explanation: 'The + comparative, the + comparative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'fill-blank',
      question: 'The ___ [[expensive|caro]] it is, the [[higher|más alto]] the [[quality|calidad]].',
      correctAnswer: 'more',
      explanation: 'Proportional comparison with adjectives.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'fill-blank',
      question: 'This [[car|coche]] is [[nowhere|ninguna parte]] ___ as [[fast|rápido]] as the [[other|otro]] one.',
      correctAnswer: 'near',
      explanation: '"Nowhere near as... as" means not at all close.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'fill-blank',
      question: 'The [[film|película]] was ___ like as [[good|buena]] as the [[book|libro]].',
      correctAnswer: 'nothing',
      explanation: '"Nothing like as... as" is an emphatic negative comparison.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'fill-blank',
      question: 'The ___ [[done|hecho]], the [[better|mejor]].',
      correctAnswer: 'sooner',
      explanation: 'Common short double comparative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'fill-blank',
      question: 'He is [[every|cada]] ___ as [[talented|talentoso]] as his [[brother|hermano]].',
      correctAnswer: 'bit',
      explanation: '"Every bit as... as" means exactly as.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'fill-blank',
      question: 'It was ___ [[far|lejos]] the [[most|más]] [[difficult|difícil]] [[test|test]].',
      correctAnswer: 'by',
      explanation: '"By far" + superlative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'fill-blank',
      question: 'The ___ I [[think|pienso]] [[about|sobre]] it, the [[less|menos]] I [[understand|entiendo]].',
      correctAnswer: 'more',
      explanation: 'Double comparative with verbs.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'fill-blank',
      question: 'She is [[slightly|ligeramente]] ___ than me.',
      correctAnswer: 'taller',
      explanation: 'Modifier + comparative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'fill-blank',
      question: 'This is [[considerably|considerablemente]] ___ than that.',
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
  explanation: 'Use [[adverbs|adverbios]] like "significantly", "marginally", and "vastly" to show the [[extent|extensión]] of [[difference|diferencia]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'The [[new|nuevo]] [[model|modelo]] is ___ [[better|mejor]] than the [[old|viejo]] one.',
      options: ['significantly', 'big', 'very'],
      correctAnswer: 'significantly',
      explanation: '"Significantly" is formal for a large difference.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'The [[difference|diferencia]] is ___ [[smaller|más pequeña]].',
      options: ['marginally', 'vastly', 'greatly'],
      correctAnswer: 'marginally',
      explanation: '"Marginally" means a very small amount.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'This [[city|ciudad]] is ___ [[overrated|sobrevalorada]].',
      options: ['vastly', 'little', 'slightly'],
      correctAnswer: 'vastly',
      explanation: '"Vastly" shows a huge degree.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'He is ___ [[more|más]] [[experienced|experimentado]].',
      options: ['infinitely', 'marginally', 'somewhat'],
      correctAnswer: 'infinitely',
      explanation: 'Hyperbolic but formal emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'The [[result|resultado]] was ___ [[different|diferente]].',
      options: ['altogether', 'all', 'quite'],
      correctAnswer: 'altogether',
      explanation: '"Altogether" means completely.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'She is ___ [[shorter|más baja]] than her [[sister|hermana]].',
      options: ['somewhat', 'greatly', 'highly'],
      correctAnswer: 'somewhat',
      explanation: '"Somewhat" means a bit.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'The [[prices|precios]] are ___ [[higher|más altos]] than [[last|pasado]] [[year|año]].',
      options: ['way', 'very', 'much'],
      correctAnswer: 'way',
      explanation: '"Way" is informal but common for large degrees.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'It is ___ [[more|más]] [[difficult|difícil]] than it [[looks|parece]].',
      options: ['considerably', 'marginally', 'slightly'],
      correctAnswer: 'considerably',
      explanation: 'Formal for a large degree.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'The [[gap|brecha]] is ___ [[daily|diariamente]].',
      options: ['widening', 'growing', 'increasing'],
      correctAnswer: 'widening',
      explanation: 'Collocation with "gap".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'The [[two|dos]] [[plans|planes]] are ___.',
      options: ['identical', 'same', 'equal'],
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
  explanation: 'Use [[idioms|modismos]] like "a far cry from", "in a league of their own", and "head and shoulders above" for [[vivid|vívidas]] comparisons.',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'fill-blank',
      question: 'His [[performance|actuación]] was a [[far|lejos]] ___ from his [[last|último]] one.',
      correctAnswer: 'cry',
      explanation: '"A far cry from" means very different from.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'fill-blank',
      question: 'She is [[head|cabeza]] and ___ [[above|encima]] the [[rest|resto]].',
      correctAnswer: 'shoulders',
      explanation: '"Head and shoulders above" means much better than.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'fill-blank',
      question: 'This [[team|equipo]] is in a ___ of their [[own|propia]].',
      correctAnswer: 'league',
      explanation: '"In a league of one\'s own" means uniquely excellent.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'fill-blank',
      question: 'The [[two|dos]] [[problems|problemas]] are as [[different|diferentes]] as ___ and [[day|día]].',
      correctAnswer: 'night',
      explanation: 'Comparing total opposites.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'fill-blank',
      question: 'He is as [[cool|fresco]] as a ___.',
      correctAnswer: 'cucumber',
      explanation: 'Idiom for being very calm.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'fill-blank',
      question: 'It [[cost|costó]] next to ___.',
      correctAnswer: 'nothing',
      explanation: 'Almost free.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'fill-blank',
      question: 'The [[two|dos]] [[cars|coches]] are as [[like|parecidos]] as two ___ in a [[pod|vaina]].',
      correctAnswer: 'peas',
      explanation: 'Exactly alike.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'fill-blank',
      question: 'She is as [[sharp|afilada]] as a ___.',
      correctAnswer: 'needle',
      explanation: 'Very intelligent/observant.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'fill-blank',
      question: 'They are like [[chalk|tiza]] and ___.',
      correctAnswer: 'cheese',
      explanation: 'Completely different.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'fill-blank',
      question: 'He is as [[blind|ciego]] as a ___.',
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
  explanation: '[[Gradable|Graduables]] adjectives use modifiers like "very", while [[ungradable|no graduables]] (extreme) adjectives use "absolutely" or "completely".',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'The [[food|comida]] was ___ [[delicious|deliciosa]].',
      options: ['absolutely', 'very', 'fairly'],
      correctAnswer: 'absolutely',
      explanation: '"Delicious" is ungradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: 'I was ___ [[tired|cansado]].',
      options: ['very', 'absolutely', 'utterly'],
      correctAnswer: 'very',
      explanation: '"Tired" is gradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'The [[view|vista]] was ___ [[breathtaking|asombrosa]].',
      options: ['totally', 'slightly', 'very'],
      correctAnswer: 'totally',
      explanation: '"Breathtaking" is ungradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: 'He was ___ [[lucky|afortunado]].',
      options: ['extremely', 'completely', 'absolutely'],
      correctAnswer: 'extremely',
      explanation: '"Lucky" is gradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'The [[room|habitación]] was ___ [[filthy|asquerosa]].',
      options: ['utterly', 'fairly', 'quite'],
      correctAnswer: 'utterly',
      explanation: '"Filthy" is ungradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: 'It was ___ [[ridiculous|ridículo]].',
      options: ['completely', 'very', 'somewhat'],
      correctAnswer: 'completely',
      explanation: '"Ridiculous" is ungradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'The [[water|agua]] was ___ [[cold|fría]].',
      options: ['freezing', 'very', 'slightly'],
      correctAnswer: 'freezing',
      explanation: 'Modifier + adjective.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: 'I am ___ [[happy|feliz]] [[here|aquí]].',
      options: ['perfectly', 'utterly', 'totally'],
      correctAnswer: 'perfectly',
      explanation: '"Happy" with specific modifier.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'The [[task|tarea]] was ___ [[impossible|imposible]].',
      options: ['virtually', 'fairly', 'very'],
      correctAnswer: 'virtually',
      explanation: '"Virtually" means almost.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: 'She was ___ [[offended|ofendida]].',
      options: ['deeply', 'absolutely', 'utterly'],
      correctAnswer: 'deeply',
      explanation: '"Deeply" with emotional adjectives.',
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
  title: 'Key Word Transformation: Comparison & Degree',
  grammarPoint: 'Mixed Review',
  explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] word.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'fill-blank',
      question: 'If you wait longer, it will be worse. (THE) \n The ___ wait, the worse it will be.',
      correctAnswer: 'longer you',
      explanation: 'Double comparative structure.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'fill-blank',
      question: 'This car is much faster than the old one. (BY) \n This car is ___ the old one.',
      correctAnswer: 'by far faster than',
      explanation: 'Using "by far" for emphasis.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'fill-blank',
      question: 'They are not even close in quality. (NEAR) \n This is ___ as good as that.',
      correctAnswer: 'nowhere near',
      explanation: 'Negative emphatic comparison.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'fill-blank',
      question: 'He is much better than his rivals. (SHOULDERS) \n He is ___ his rivals.',
      correctAnswer: 'head and shoulders above',
      explanation: 'Idiomatic comparison.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'fill-blank',
      question: 'The two things are completely different. (CRY) \n This is a ___ that.',
      correctAnswer: 'far cry from',
      explanation: 'Idiomatic "different".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'fill-blank',
      question: 'It was very cheap. (NEXT) \n It cost ___ nothing.',
      correctAnswer: 'next to',
      explanation: 'Idiomatic "almost".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'fill-blank',
      question: 'She is exactly as tall as me. (BIT) \n She is ___ as me.',
      correctAnswer: 'every bit as tall',
      explanation: 'Emphatic "as... as".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'fill-blank',
      question: 'The price is a little bit higher. (MARGINALLY) \n The price is ___ higher.',
      correctAnswer: 'marginally',
      explanation: 'Formal adverb of degree.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'fill-blank',
      question: 'I have never felt so happy. (HAPPIER) \n Never ___ .',
      correctAnswer: 'have I felt happier',
      explanation: 'Inversion + comparative.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'fill-blank',
      question: 'The book was much better than the film. (NOTHING) \n The film was ___ the book.',
      correctAnswer: 'nothing like as good as',
      explanation: 'Emphatic negative comparison.',
      points: 2
    }
  ]
};

export const unit26: Lesson = createC1Unit(
  'c1-u26',
  'Advanced Comparison & Degree',
  'Mastering nuances in comparing things and expressing the extent of qualities.',
  ['Use double comparatives (the... the...)', 'Apply modifiers like marginally and vastly', 'Use idiomatic comparisons like a far cry from'],
  [
    C1_U26_BLOCK1, C1_U26_BLOCK2, C1_U26_BLOCK3, C1_U26_BLOCK4, C1_U26_BLOCK5
  ]
);
