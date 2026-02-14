import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 21;

// ============================================
// BLOCK 1: MIXED CONDITIONALS (10 items)
// ============================================
export const C1_U21_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Mixed Conditionals: Linking Past & Present',
  grammarPoint: 'Conditionals',
  explanation: '"[[Mixed conditionals|Condicionales mixtos]] combine different [[time|tiempos]] frames (e.g., a [[past|pasada]] action with a [[present|presente]] result).',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'If I ___ the [[flight|vuelo]], I [[would|estaría]] be [[home|casa]] now.',
      options: ['had not missed', 'did not miss', 'have not missed'],
      correctAnswer: 'had not missed',
      explanation: 'Past action (Type 3) with a present result (Type 2).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'If he ___ more [[reliable|fiable]], they [[would|habrían]] have [[hired|contratado]] him [[last|el pasado]] [[year|año]].',
      options: ['had been', 'were', 'is'],
      correctAnswer: 'were',
      explanation: 'General characteristic (Type 2) with a past result (Type 3).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'I ___ [[rich|rico]] today if I [[had|hubiera]] [[invested|invertido]] in [[Bitcoin|Bitcoin]] [[early|temprano]].',
      options: ['will be', 'would have been', 'would be'],
      correctAnswer: 'would be',
      explanation: 'Present result of a past condition.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'If we ___ our [[map|mapa]], we [[would|estaríamos]] not be [[lost|perdidos]] now.',
      options: ['had not lost', 'didn\'t lose', 'haven\'t lost'],
      correctAnswer: 'had not lost',
      explanation: 'Past action affecting the present state.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'She ___ at the [[meeting|reunión]] now if she [[had|hubiera]] been [[informed|informada]].',
      options: ['would be', 'is', 'would have been'],
      correctAnswer: 'would be',
      explanation: 'Present result of a past event.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'If I ___ [[French|francés]], I [[would|habría]] have [[translated|traducido]] that [[letter|carta]] for you.',
      options: ['speak', 'had spoken', 'spoke'],
      correctAnswer: 'spoke',
      explanation: 'General ability (Type 2) affecting a past situation (Type 3).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'If they ___ harder in [[college|universidad]], they [[would|tendrían]] have [[better|mejores]] [[jobs|trabajos]] now.',
      options: ['had studied', 'studied', 'were studying'],
      correctAnswer: 'had studied',
      explanation: 'Past action with present consequences.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: 'I ___ that [[house|casa]] last [[week|semana]] if I [[were|fuera]] [[wealthy|rico]].',
      options: ['bought', 'would have bought', 'would buy'],
      correctAnswer: 'would have bought',
      explanation: 'Past action prevented by a general state.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'If you ___ so [[lazy|perezoso]], you [[would|habrías]] have [[finished|terminado]] by now.',
      options: ['hadn\'t been', 'aren\'t', 'were not'],
      correctAnswer: 'were not',
      explanation: 'General trait affecting a specific task completion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'If the [[car|coche]] ___, we [[would|estaríamos]] be there by [[now|ahora]].',
      options: ['didn\'t break down', 'hadn\'t broken down', 'doesn\'t break down'],
      correctAnswer: 'hadn\'t broken down',
      explanation: 'Past event with present impact.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: INVERTED CONDITIONALS (10 items)
// ============================================
export const C1_U21_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Formal Inversion in Conditionals',
  grammarPoint: 'Conditionals',
  explanation: 'In formal English, "if" can be omitted by [[inverting|invirtiendo]] the [[subject|sujeto]] and [[auxiliary|auxiliar]] (e.g., "Had I known" instead of "If I had known").',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: '___ I [[known|sabido]] [[about|sobre]] the [[delay|retraso]], I would have [[called|llamado]].',
      options: ['Had', 'Should', 'Were'],
      correctAnswer: 'Had',
      explanation: 'Inversion in Third Conditional.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: '___ I [[in|en]] your [[shoes|zapatos]], I would [[accept|aceptar]] the [[offer|oferta]].',
      options: ['Had', 'Were', 'Should'],
      correctAnswer: 'Were',
      explanation: 'Inversion in Second Conditional.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: '___ you [[need|necesitar]] [[any|cualquier]] [[assistance|asistencia]], please [[contact|contacte]] us.',
      options: ['Were', 'Had', 'Should'],
      correctAnswer: 'Should',
      explanation: 'Inversion in First Conditional (formal).',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: '___ it [[not|no]] [[been|sido]] for your [[help|ayuda]], I would have [[failed|fallado]].',
      options: ['Had', 'Were', 'Should'],
      correctAnswer: 'Had',
      explanation: '"Had it not been for" is a formal fixed phrase.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: '___ the [[government|gobierno]] to [[raise|subir]] [[taxes|impuestos]], there would be [[protests|protestas]].',
      options: ['Should', 'Had', 'Were'],
      correctAnswer: 'Were',
      explanation: 'Inversion with "to-infinitive" for future possibility.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: '___ the [[prices|precios]] [[rise|subir]], [[demand|demanda]] will [[fall|caer]].',
      options: ['Had', 'Were', 'Should'],
      correctAnswer: 'Should',
      explanation: 'Formal future condition.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: '___ they [[listened|escuchado]] to me, they would be [[safe|a salvo]] [[now|ahora]].',
      options: ['Had', 'Should', 'Were'],
      correctAnswer: 'Had',
      explanation: 'Inverted mixed conditional.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: '___ he to [[resign|renunciar]], it would be a [[disaster|desastre]].',
      options: ['Had', 'Were', 'Should'],
      correctAnswer: 'Were',
      explanation: 'Inverted second conditional.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: '___ I [[not|no]] [[seen|visto]] it with my own [[eyes|ojos]], I [[would|habría]] never have [[believed|creído]] it.',
      options: ['Were', 'Should', 'Had'],
      correctAnswer: 'Had',
      explanation: 'Emphasis in negative past condition.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: '___ there be any [[further|más]] [[questions|preguntas]], let me [[know|saber]].',
      options: ['Should', 'Had', 'Were'],
      correctAnswer: 'Should',
      explanation: 'Polite formal condition.',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 3: ALTERNATIVES TO "IF" (10 items)
// ============================================
export const C1_U21_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Advanced Conditional Conjunctions',
  grammarPoint: 'Conditionals',
  explanation: 'Words like "unless", "provided that", "as long as", and "supposing" can [[replace|reemplazar]] if" to add specific [[nuance|matiz]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: 'We will [[go|ir]] ___ it [[rains|llueve]].',
      options: ['unless', 'provided', 'as long as'],
      correctAnswer: 'unless',
      explanation: '"Unless" means "if not".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: '___ you [[won|ganaras]] the [[lottery|lotería]], what would you [[do|hacer]]?',
      options: ['Unless', 'Supposing', 'As long as'],
      correctAnswer: 'Supposing',
      explanation: '"Supposing" is used for [[imaginary|imaginarias]] situations.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'You can [[stay|quedarte]] ___ you are [[quiet|silencioso]].',
      options: ['unless', 'supposing', 'as long as'],
      correctAnswer: 'as long as',
      explanation: '"As long as" means "on condition that".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: '___ that [[everyone|todos]] [[agrees|están de acuerdo]], we will [[start|empezar]].',
      options: ['Unless', 'Provided', 'Supposing'],
      correctAnswer: 'Provided',
      explanation: '"Provided that" is a formal synonym for "only if".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: '___ that there [[were|hubiera]] no [[money|dinero]]; how would we [[live|vivir]]?',
      options: ['Imagine', 'Provided', 'Unless'],
      correctAnswer: 'Imagine',
      explanation: '"Imagine" is used for [[hypothetical|hipotéticas]] scenarios.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'I will [[help|ayudar]] you ___ that you [[pay|pagues]] me [[back|de vuelta]].',
      options: ['unless', 'on condition', 'supposing'],
      correctAnswer: 'on condition',
      explanation: 'Explicit condition.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: 'Take an [[umbrella|paraguas]] ___ it [[rains|llueve]].',
      options: ['supposing', 'unless', 'in case'],
      correctAnswer: 'in case',
      explanation: '"In case" expresses [[precaution|precaución]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: '___ for your [[advice|consejo]], I would have [[made|cometido]] a [[mistake|error]].',
      options: ['But', 'Unless', 'Provided'],
      correctAnswer: 'But',
      explanation: '"But for" means "if it hadn\'t been for".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'We will [[succeed|tener éxito]], ___ the [[right|correcta]] [[tools|herramientas]].',
      options: ['unless', 'given', 'supposing'],
      correctAnswer: 'given',
      explanation: '"Given" means [[assuming|asumiendo]] or [[considering|considerando]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: '___ if he [[begs|ruega]], I won\'t [[change|cambiar]] my [[mind|opinión]].',
      options: ['Supposing', 'Even', 'Provided'],
      correctAnswer: 'Even',
      explanation: '"Even if" emphasizes that the [[condition|condición]] doesn\'t [[matter|importar]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 4: WISH & IF ONLY (10 items)
// ============================================
export const C1_U21_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Expressing Regret & Desire: Wish & If Only',
  grammarPoint: 'Conditionals',
  explanation: 'Use "wish" and "if only" to express [[regret|arrepentimiento]] about the [[past|pasado]] or a [[desire|deseo]] for a [[different|diferente]] [[present|presente]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: 'I [[wish|desearía]] I ___ the [[answer|respuesta]] [[now|ahora]].',
      options: ['know', 'knew', 'had known'],
      correctAnswer: 'knew',
      explanation: '"Wish + Past Simple" for a present desire.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: '"[[If only|Ojalá]] I ___ so [[much|mucho]] [[last|la pasada]] [[night|noche]]!',
      options: ['did not eat', 'had not eaten', 'haven\'t eaten'],
      correctAnswer: 'had not eaten',
      explanation: '"If only + Past Perfect" for a past regret.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: 'I [[wish|desearía]] you ___ [[making|haciendo]] that [[noise|ruido]]!',
      options: ['stopped', 'would stop', 'had stopped'],
      correctAnswer: 'would stop',
      explanation: '"Wish + would" for a [[complaint|queja]] or desire for [[change|cambio]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: '"[[If only|Ojalá]] we ___ on a [[beach|playa]] right now!',
      options: ['are', 'were', 'had been'],
      correctAnswer: 'were',
      explanation: 'Hypothetical present.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: 'I [[wish|desearía]] I ___ [[help|ayudar]] you, but I [[can\'t|no puedo]].',
      options: ['could', 'can', 'would'],
      correctAnswer: 'could',
      explanation: 'Desire for a different ability.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: '"[[If only|Ojalá]] he ___ us the [[truth|verdad]] [[earlier|antes]].',
      options: ['told', 'had told', 'tells'],
      correctAnswer: 'had told',
      explanation: 'Past regret.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: 'I [[wish|desearía]] I ___ more [[free|libre]] [[time|tiempo]].',
      options: ['have', 'had', 'would have'],
      correctAnswer: 'had',
      explanation: 'Present desire.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: '"[[If only|Ojalá]] I ___ my [[keys|llaves]]!',
      options: ['don\'t lose', 'had not lost', 'didn\'t lose'],
      correctAnswer: 'had not lost',
      explanation: 'Past regret.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: 'I [[wish|desearía]] they [[would|lo harían]] [[not|no]] [[smoke|fumar]] [[here|aquí]].',
      options: ['didn\'t smoke', 'would not smoke', 'hadn\'t smoked'],
      correctAnswer: 'would not smoke',
      explanation: 'Complaint about a habit.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: '"[[If only|Ojalá]] I ___ [[harder|más]] when I was [[young|joven]].',
      options: ['had studied', 'studied', 'studied harder'],
      correctAnswer: 'had studied',
      explanation: 'Past regret.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: KEY WORD TRANSFORMATION (10 items)
// ============================================
export const C1_U21_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Key Word Transformation: Conditionals',
  grammarPoint: 'Mixed Review',
  explanation: 'Rewrite the [[sentence|oración]] using the [[given|dada]] word.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'If you need help, let me know. (SHOULD) \n ___ help, let me know.',
      options: ['If you should', 'Should you need', 'Should you'],
      correctAnswer: 'Should you need',
      explanation: 'Formal inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'I didn\'t see you, so I didn\'t wave. (HAD) \n ___ seen you, I would have waved.',
      options: ['If I had', 'Had I', 'Had I have'],
      correctAnswer: 'Had I',
      explanation: 'Formal past inversion.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'If it hadn\'t been for the rain, we would have gone. (BUT) \n ___ the rain, we would have gone.',
      options: ['But for', 'Except for', 'Without'],
      correctAnswer: 'But for',
      explanation: 'Alternative to "if it hadn\'t been for".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'I am sorry I didn\'t go. (WISH) \n I ___ gone.',
      options: ['wish I had', 'wish I would', 'wish I'],
      correctAnswer: 'wish I had',
      explanation: 'Expressing regret.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'He is poor because he lost his job. (IF) \n He wouldn\'t be poor if he ___ his job.',
      options: ['didn\'t lose', 'hasn\'t lost', 'had not lost'],
      correctAnswer: 'had not lost',
      explanation: 'Mixed conditional.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'You can go if you finish your work. (LONG) \n You can go as ___ you finish your work.',
      options: ['soon as', 'long as', 'far as'],
      correctAnswer: 'long as',
      explanation: 'Condition conjunction.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'If you don\'t hurry, you will be late. (UNLESS) \n ___ you hurry, you will be late.',
      options: ['If', 'Until', 'Unless'],
      correctAnswer: 'Unless',
      explanation: 'Negative condition.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'It\'s a shame she isn\'t here. (ONLY) \n If ___ here!',
      options: ['only she is', 'only she were', 'only she was being'],
      correctAnswer: 'only she were',
      explanation: 'Expressing a wish.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'What would you do if you were me? (SHOES) \n If you were ___ , what would you do?',
      options: ['in my boots', 'in my shoes', 'on my shoes'],
      correctAnswer: 'in my shoes',
      explanation: 'Idiomatic conditional expression.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'He will help only if you ask. (PROVIDED) \n He will help ___ you ask.',
      options: ['provided that', 'providing with', 'providing if'],
      correctAnswer: 'provided that',
      explanation: 'Formal condition.',
      points: 2
    }
  ]
};

export const unit21: Lesson = createC1Unit(
  'c1-u21',
  'Hypothetical Situations & Advanced Conditionals',
  'Mastering mixed conditionals, formal inversions, and sophisticated alternatives to "if".',
  ['Apply mixed conditionals correctly', 'Use formal inversions like Had I known', 'Express regret and desire using wish and if only'],
  [
    C1_U21_BLOCK1, C1_U21_BLOCK2, C1_U21_BLOCK3, C1_U21_BLOCK4, C1_U21_BLOCK5
  ]
);
