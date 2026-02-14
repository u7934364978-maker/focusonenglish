import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 28;

// ============================================
// BLOCK 1: ADVERB POSITIONING (10 items)
// ============================================
export const C1_U28_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Focus: Adverb Positioning & Impact',
  grammarPoint: 'Word Order',
 explanation: 'The [[position|posición]] of an [[adverb|adverbio]] can [[change|cambiar]] the [[emphasis|énfasis]] or [[meaning|significado]] of a [[sentence|oración]].',   questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
 question: '___, I [[don\'t|no]] [[know|sé]] what to [[say|decir]].',       options: ['Maybe', 'Honestly', 'Truly'],
      correctAnswer: 'Honestly',
      explanation: 'Sentence adverb at the front for emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
 question: 'He ___ [[opened|abrió]] the [[door|puerta]].',       options: ['slow', 'slowness', 'slowly'],
      correctAnswer: 'slowly',
      explanation: 'Adverb of manner in mid-position.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
 question: 'She was [[clearly|claramente]] ___ by the [[news|noticias]].',       options: ['upset', 'happy', 'calm'],
      correctAnswer: 'upset',
      explanation: 'Adverb of degree/opinion before adjective.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
 question: '___, there has been a [[mistake|error]].',       options: ['Mistake', 'Wrong', 'Clearly'],
      correctAnswer: 'Clearly',
      explanation: 'Comment adverb at the start.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
 question: 'I ___ [[saw|vi]] him for a [[minute|minuto]].',       options: ['just', 'even', 'only'],
      correctAnswer: 'only',
      explanation: '"Only" positioning is crucial for focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
 question: 'He [[works|trabaja]] ___ [[hard|duro]].',       options: ['exceptionally', 'exceptional', 'exception'],
      correctAnswer: 'exceptionally',
      explanation: 'Intensifying adverb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
 question: '___, I [[prefer|prefiero]] the [[other|otro]] one.',       options: ['Real', 'Current', 'Actually'],
      correctAnswer: 'Actually',
      explanation: 'Discourse marker position.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
 question: 'They [[arrived|llegaron]] ___ [[late|tarde]].',       options: ['unexpect', 'hope', 'unexpectedly'],
      correctAnswer: 'unexpectedly',
      explanation: 'Adverb modifying another adverb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
 question: 'I ___ [[expected|esperé]] such a [[result|resultado]].',       options: ['never', 'always', 'rarely'],
      correctAnswer: 'never',
      explanation: 'Frequency adverb position.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
 question: 'He ___ [[prepared|preparó]] the [[report|informe]].',       options: ['careful', 'carefully', 'care'],
      correctAnswer: 'carefully',
      explanation: 'Manner adverb position.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: FRONTING & FOCUS (10 items)
// ============================================
export const C1_U28_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Emphasis: Fronting for Information Focus',
  grammarPoint: 'Word Order',
 explanation: 'Moving the [[complement|complemento]] or [[object|objeto]] to the [[front|frente]] to [[connect|conectar]] with [[previous|previa]] information.',   questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
 question: '___ I can [[believe|creer]].',       options: ['This', 'That', 'The'],
      correctAnswer: 'That',
      explanation: 'Fronting the object for focus.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
 question: '___ the [[room|habitación]] [[walked|caminó]] the [[CEO|director]].',       options: ['To', 'At', 'Into'],
      correctAnswer: 'Into',
      explanation: 'Prepositional fronting with inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
 question: '___ [[scared|asustado]] was he that he [[couldn\'t|no pudo]] [[speak|hablar]].',       options: ['So', 'Such', 'Very'],
      correctAnswer: 'So',
      explanation: '"So + adjective" fronting.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
 question: '___ [[came|vino]] the [[rain|lluvia]].',       options: ['Up', 'Down', 'Off'],
      correctAnswer: 'Down',
      explanation: 'Adverbial particle fronting.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
 question: '___ was her [[surprise|sorpresa]] [[when|cuando]] she saw him.',       options: ['Such', 'Very', 'Great'],
      correctAnswer: 'Great',
      explanation: 'Adjective fronting for rhetorical effect.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
 question: '___ [[goes|va]] our last [[chance|oportunidad]].',       options: ['There', 'Here', 'Where'],
      correctAnswer: 'There',
      explanation: '"There" fronting with inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
 question: '___ had they [[seen|visto]] such [[beauty|belleza]].',       options: ['Seldom', 'Rarely', 'Never'],
      correctAnswer: 'Rarely',
      explanation: 'Negative fronting with inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
 question: '___ in the [[attic|ático]] was a [[map|mapa]].',       options: ['Found', 'Lost', 'Hidden'],
      correctAnswer: 'Hidden',
      explanation: 'Participle fronting.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
 question: '___ the [[table|mesa]] sat a [[laptop|portátil]].',       options: ['On', 'At', 'In'],
      correctAnswer: 'On',
      explanation: 'Place adjunct fronting.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
 question: '___ as he [[might|pudiera]], he [[couldn\'t|no pudo]] [[win|ganar]].',       options: ['Work', 'Try', 'Do'],
      correctAnswer: 'Try',
      explanation: 'Verb fronting for concession.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: GIVEN VS. NEW INFORMATION (10 items)
// ============================================
export const C1_U28_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Word Order: Given vs. New Information',
  grammarPoint: 'Word Order',
 explanation: 'English typically moves [[given|dada]] information to the [[beginning|principio]] and [[new|nueva]] information to the [[end|final]] (End-focus).',   questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
 question: 'The [[award|premio]] was [[given|dado]] ___ the [[student|estudiante]].',       options: ['for', 'to', 'at'],
      correctAnswer: 'to',
      explanation: 'Passive used to keep the recipient at the end (new info).',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
 question: '___ I [[found|encontré]] was a [[key|llave]].',       options: ['Which', 'That', 'What'],
      correctAnswer: 'What',
      explanation: 'Cleft used to place new information at the end.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
 question: 'It was the [[money|dinero]] ___ he [[stole|robó]].',       options: ['that', 'which', 'who'],
      correctAnswer: 'that',
      explanation: 'It-cleft for focus.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
 question: 'The [[reason|razón]] ___ I am [[here|aquí]] is to [[help|ayudar]].',       options: ['because', 'why', 'that'],
      correctAnswer: 'why',
      explanation: 'Focusing on the purpose at the end.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
 question: '___ is the [[document|documento]].',       options: ['Attaching', 'Attached', 'Attach'],
      correctAnswer: 'Attached',
      explanation: 'Fronting for flow.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
 question: 'At the ___ of the [[hill|colina]] [[stood|estaba]] a [[castle|castillo]].',       options: ['peak', 'top', 'high'],
      correctAnswer: 'top',
      explanation: 'Establishing scene (given) then subject (new).',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
 question: 'There ___ one [[problem|problema]].',       options: ['remains', 'stays', 'keeps'],
      correctAnswer: 'remains',
      explanation: 'Existential "there" to introduce new info.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
 question: '___ had I [[finished|terminado]] [[when|cuando]] the [[bell|campana]] [[rang|sonó]].',       options: ['Almost', 'Nearly', 'Hardly'],
      correctAnswer: 'Hardly',
      explanation: 'Focusing on the time sequence.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
 question: 'Only by ___ hard can you [[succeed|lograrlo]].',       options: ['worked', 'working', 'work'],
      correctAnswer: 'working',
      explanation: 'Focusing on the method.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
 question: '___ again will I [[go|ir]] [[there|allí]].',       options: ['Never', 'Rarely', 'Seldom'],
      correctAnswer: 'Never',
      explanation: 'Focusing on the negative frequency.',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: COMPLEX ADJECTIVE ORDER (10 items)
// ============================================
export const C1_U28_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Word Order: Complex Adjectives',
  grammarPoint: 'Adjectives',
  explanation: 'Order: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose.',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
 question: 'A ___ [[house|casa]].',       options: ['old large beautiful', 'beautiful large old', 'large old beautiful'],
      correctAnswer: 'beautiful large old',
      explanation: 'Opinion, Size, Age.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
 question: 'A ___ [[ball|pelota]].',       options: ['red round small', 'round small red', 'small round red'],
      correctAnswer: 'small round red',
      explanation: 'Size, Shape, Color.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
 question: 'An ___ [[statue|estatua]].',       options: ['ancient Greek marble', 'marble Greek ancient', 'Greek ancient marble'],
      correctAnswer: 'ancient Greek marble',
      explanation: 'Age, Origin, Material.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
 question: 'A ___ [[table|mesa]].',       options: ['dining long wooden', 'long wooden dining', 'wooden dining long'],
      correctAnswer: 'long wooden dining',
      explanation: 'Size, Material, Purpose.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
 question: 'A ___ [[watch|reloj]].',       options: ['cheap Japanese plastic', 'cheap plastic Japanese', 'Japanese cheap plastic'],
      correctAnswer: 'cheap Japanese plastic',
      explanation: 'Opinion, Origin, Material.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
 question: '___ [[books|libros]].',       options: ['Some interesting new', 'Some new interesting', 'Interesting some new'],
      correctAnswer: 'Some interesting new',
      explanation: 'Determiner, Opinion, Age.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
 question: 'A ___ [[spider|araña]].',       options: ['large disgusting black', 'black large disgusting', 'disgusting large black'],
      correctAnswer: 'disgusting large black',
      explanation: 'Opinion, Size, Color.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
 question: 'A ___ [[dress|vestido]].',       options: ['blue stunning silk', 'silk blue stunning', 'stunning blue silk'],
      correctAnswer: 'stunning blue silk',
      explanation: 'Opinion, Color, Material.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
 question: 'An ___ [[jacket|chaqueta]].',       options: ['old ugly leather', 'ugly old leather', 'leather old ugly'],
      correctAnswer: 'ugly old leather',
      explanation: 'Opinion, Age, Material.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
 question: 'A ___ [[box|caja]].',       options: ['tiny square metal', 'metal square tiny', 'square metal tiny'],
      correctAnswer: 'tiny square metal',
      explanation: 'Size, Shape, Material.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U28_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Key Word Transformation: Word Order',
  grammarPoint: 'Mixed Review',
 explanation: 'Rewrite the [[sentence|oración]] for better [[focus|enfoque]] or [[impact|impacto]].',   questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'He can\'t believe the news. (BELIEVE) \n The news ___ .',
      options: ['he can\'t believe', 'he believe can\'t', 'believe he can\'t'],
      correctAnswer: 'he can\'t believe',
      explanation: 'Fronting for focus.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'The rain came down heavily. (DOWN) \n ___ the rain.',
      options: ['Came down', 'Down came', 'The rain down'],
      correctAnswer: 'Down came',
      explanation: 'Adverbial fronting.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'She was so angry she couldn\'t speak. (SO) \n ___ she that she couldn\'t speak.',
      options: ['So angry was', 'Was so angry', 'Angry so was'],
      correctAnswer: 'So angry was',
      explanation: 'Adjective fronting with inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'I have never seen such a mess. (NEVER) \n ___ seen such a mess.',
      options: ['Never I have', 'Have I never', 'Never have I'],
      correctAnswer: 'Never have I',
      explanation: 'Negative inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'I am only trying to help. (WHAT) \n ___ is trying to help.',
      options: ['That I am doing', 'What I am doing', 'The thing I do'],
      correctAnswer: 'What I am doing',
      explanation: 'Wh-cleft for focus.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'A tall man walked into the bar. (INTO) \n ___ a tall man.',
      options: ['Into the bar walked', 'In the bar walked', 'Walked into the bar'],
      correctAnswer: 'Into the bar walked',
      explanation: 'Prepositional fronting.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'He works exceptionally hard. (HARD) \n ___ does he work.',
      options: ['Very hard', 'How hard', 'Hardly'],
      correctAnswer: 'How hard',
      explanation: 'Exclamatory/emphatic inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'We can only succeed by working together. (ONLY) \n ___ can we succeed.',
      options: ['Only by working together', 'By working together only', 'Only together working'],
      correctAnswer: 'Only by working together',
      explanation: 'Phrase fronting with inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'I had hardly sat down when the phone rang. (HARDLY) \n ___ when the phone rang.',
      options: ['Hardly I had sat down', 'Had I hardly sat down', 'Hardly had I sat down'],
      correctAnswer: 'Hardly had I sat down',
      explanation: 'Negative time phrase inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'It was his rudeness that bothered me. (WHAT) \n ___ bothered me was his rudeness.',
      options: ['Which', 'That', 'What'],
      correctAnswer: 'What',
      explanation: 'Converting it-cleft to wh-cleft.',
      points: 2
    }
  ]
};

export const unit28: Lesson = createC1Unit(
  'c1-u28',
  'Advanced Word Order & Information Focus',
  'Mastering the flow of information and the impact of word positioning in complex sentences.',
  ['Understand the impact of adverb position', 'Apply fronting and inversion for focus', 'Master the order of multiple adjectives'],
  [
    C1_U28_BLOCK1, C1_U28_BLOCK2, C1_U28_BLOCK3, C1_U28_BLOCK4, C1_U28_BLOCK5
  ]
);
