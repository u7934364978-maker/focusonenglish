import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 18;

// ============================================
// BLOCK 1: GRADABLE vs NON-GRADABLE (10 items)
// ============================================
export const C1_U18_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Gradable vs Non-gradable Adjectives',
  grammarPoint: 'Adjectives',
  explanation: '"[[Gradable adjectives|Adjetivos graduables]] (e.g., "cold") take modifiers like "very", while "[[non-gradable adjectives|adjetivos no graduables]] (e.g., "freezing") take modifiers like "absolutely".',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'The "[[view|vista]] from the "[[top|cima]] was ___ "[[stunning|impresionante]].',
      options: ['absolutely', 'very', 'fairly'],
      correctAnswer: 'absolutely',
      explanation: '"Stunning" is non-gradable (extreme), so it pairs with "absolutely".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: 'It was a ___ "[[cold|frío]] "[[day|día]].',
      options: ['completely', 'very', 'utterly'],
      correctAnswer: 'very',
      explanation: '"Cold" is gradable, so it takes "very".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: 'The "[[results|resultados]] were ___ "[[ridiculous|ridículos]].',
      options: ['utterly', 'slightly', 'bit'],
      correctAnswer: 'utterly',
      explanation: '"Ridiculous" is non-gradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: 'I am ___ "[[exhausted|exhausto]].',
      options: ['very', 'completely', 'fairly'],
      correctAnswer: 'completely',
      explanation: '"Exhausted" is the non-gradable version of "tired".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: 'The "[[movie|película]] was ___ "[[good|buena]].',
      options: ['quite', 'utterly', 'completely'],
      correctAnswer: 'quite',
      explanation: '"Good" is gradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: 'The "[[food|comida]] was ___ "[[delicious|deliciosa]].',
      options: ['very', 'totally', 'extremely'],
      correctAnswer: 'totally',
      explanation: '"Delicious" is non-gradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: 'He was ___ "[[angry|enojado]].',
      options: ['extremely', 'absolutely', 'utterly'],
      correctAnswer: 'extremely',
      explanation: '"Angry" is gradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: 'It is ___ "[[reasonable|razonable]].',
      options: ['perfectly', 'utterly', 'bit'],
      correctAnswer: 'perfectly',
      explanation: '"Reasonable" often pairs with "perfectly".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: 'The "[[house|casa]] was ___ "[[big|grande]].',
      options: ['absolutely', 'fairly', 'totally'],
      correctAnswer: 'fairly',
      explanation: '"Big" is gradable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: 'That is ___ "[[speculative|especulativo]].',
      options: ['purely', 'very', 'slightly'],
      correctAnswer: 'purely',
      explanation: '"Speculative" is often modified by "purely" at a C1 level.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 2: COMPOUND ADJECTIVES (10 items)
// ============================================
export const C1_U18_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Compound Adjectives & Precision',
  grammarPoint: 'Adjectives',
  explanation: '"[[Compound adjectives|Adjetivos compuestos]] (e.g., "short-sighted", "world-famous") allow for more "[[concise|concisa]] and "[[precise|precisa]] description.',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: 'He is a ___ "[[author|autor]].',
      options: ['well-known', 'good-known', 'better-known'],
      correctAnswer: 'well-known',
      explanation: '"Well-known" is a standard compound adjective.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: 'It was a ___ "[[walk|caminata]].',
      options: ['ten-minutes', 'ten-minute', 'ten-minutely'],
      correctAnswer: 'ten-minute',
      explanation: 'In compound adjectives, nouns are "[[singular|singulares]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: 'She is a ___ "[[worker|trabajadora]].',
      options: ['high-skilled', 'highly-skilled', 'skilled-high'],
      correctAnswer: 'highly-skilled',
      explanation: 'Adverb + past participle structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: 'This is a ___ "[[car|coche]].',
      options: ['brand-new', 'fire-new', 'fresh-new'],
      correctAnswer: 'brand-new',
      explanation: '"Brand-new" means "[[completely|completamente]] new.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: 'He is very ___.',
      options: ['small-tempered', 'short-tempered', 'low-tempered'],
      correctAnswer: 'short-tempered',
      explanation: '"Short-tempered" means "[[getting|ponerse]] "[[angry|enojado]] easily.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: 'It was an ___ "[[experience|experiencia]].',
      options: ['eye-opening', 'eye-opened', 'eye-open'],
      correctAnswer: 'eye-opening',
      explanation: '"Eye-opening" means revealing something "[[surprising|sorprendente]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: 'The "[[meeting|reunión]] was ___.',
      options: ['time-spent', 'time-consuming', 'time-waste'],
      correctAnswer: 'time-consuming',
      explanation: '"Time-consuming" means taking a lot of "[[time|tiempo]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: 'He is a ___ "[[man|hombre]].',
      options: ['middle-aged', 'mid-aged', 'middle-age'],
      correctAnswer: 'middle-aged',
      explanation: 'Using the -ed form for compound adjectives describing states.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: 'It was a ___ "[[performance|actuación]].',
      options: ['record-broken', 'record-breaking', 'record-break'],
      correctAnswer: 'record-breaking',
      explanation: 'Noun + present participle.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: 'They are ___.',
      options: ['world-famous', 'earth-famous', 'globe-famous'],
      correctAnswer: 'world-famous',
      explanation: 'Standard compound for global recognition.',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 3: ADVERBS OF DEGREE & MANNER (10 items)
// ============================================
export const C1_U18_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Adverbs: Subtle Nuances',
  grammarPoint: 'Adverbs',
  explanation: 'Advanced English uses "[[adverbs|adverbios]] like "virtually", "hardly", and "remarkably" to add "[[nuance|matiz]] to "[[verbs|verbos]] and "[[adjectives|adjetivos]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: 'The "[[task|tarea]] is ___ "[[impossible|imposible]].',
      options: ['virtually', 'totally', 'completely'],
      correctAnswer: 'virtually',
      explanation: '"Virtually" means "[[almost|casi]] or "[[nearly|casi]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: 'He ___ "[[spoke|habló]] "[[during|durante]] the "[[interview|entrevista]].',
      options: ['hardly', 'rarely', 'scarcely'],
      correctAnswer: 'hardly',
      explanation: '"Hardly" means "[[almost|casi]] not.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: 'The "[[results|resultados]] were ___ "[[good|buenos]].',
      options: ['remarkably', 'strikingly', 'exceptionally'],
      correctAnswer: 'remarkably',
      explanation: '"Remarkably" shows "[[surprise|sorpresa]] or "[[emphasis|énfasis]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: 'He ___ "[[managed|logró]] to "[[finish|terminar]].',
      options: ['barely', 'narrowly', 'hardly'],
      correctAnswer: 'barely',
      explanation: '"Barely" means "[[only|solo]] just.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: 'I ___ "[[disagree|en desacuerdo]] with that "[[statement|afirmación]].',
      options: ['strongly', 'bitterly', 'entirely'],
      correctAnswer: 'strongly',
      explanation: '"Strongly" collocates with "disagree".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: 'The "[[prices|precios]] have "[[risen|subido]] ___.',
      options: ['sharply', 'highly', 'vastly'],
      correctAnswer: 'sharply',
      explanation: '"Sharply" means "[[quickly|rápidamente]] and by a "[[large|gran]] "[[amount|cantidad]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: 'He is ___ "[[considered|considerado]] the "[[best|mejor]].',
      options: ['widely', 'broadly', 'generally'],
      correctAnswer: 'widely',
      explanation: '"Widely" means by a "[[lot|muchas]] of "[[people|personas]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: 'I am ___ "[[aware|consciente]] of the "[[risks|riesgos]].',
      options: ['fully', 'totally', 'highly'],
      correctAnswer: 'fully',
      explanation: '"Fully" collocates with "aware".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: 'The "[[plan|plan]] was ___ "[[thought|pensado]] "[[out|del todo]].',
      options: ['carefully', 'thoroughly', 'neatly'],
      correctAnswer: 'carefully',
      explanation: '"Carefully" describes the "[[manner|manera]].',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: 'It was ___ "[[unexpected|inesperado]].',
      options: ['totally', 'purely', 'largely'],
      correctAnswer: 'totally',
      explanation: '"Totally" for "[[total|total]] "[[emphasis|énfasis]].',
      points: 2
    }
  ]
};

// ============================================
// BLOCK 4: ATTITUDE ADVERBS (10 items)
// ============================================
export const C1_U18_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Attitude Adverbs: Expressing Opinion',
  grammarPoint: 'Adverbs',
  explanation: '"[[Attitude adverbs|Adverbios de actitud]] (e.g., "regrettably", "presumably") show the "[[speaker\'s|del hablante]] "[[opinion|opinión]] about the whole "[[sentence|oración]].',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'multiple-choice',
      question: '___, the "[[event|evento]] was "[[cancelled|cancelado]].',
      options: ['Regrettably', 'Sadly', 'Unluckily'],
      correctAnswer: 'Regrettably',
      explanation: '"Regrettably" is more formal than "sadly".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'multiple-choice',
      question: '___, they "[[forgot|olvidaron]] the "[[time|hora]].',
      options: ['Probably', 'Presumably', 'Maybe'],
      correctAnswer: 'Presumably',
      explanation: '"Presumably" means "[[based|basado]] on what is "[[likely|probable]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'multiple-choice',
      question: '___, I made a "[[mistake|error]].',
      options: ['Admittedly', 'Truly', 'Honestly'],
      correctAnswer: 'Admittedly',
      explanation: '"Admittedly" is used when "[[conceding|concediendo]] a "[[point|punto]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'multiple-choice',
      question: '___, we "[[met|encontramos]] the "[[same|mismo]] "[[day|día]].',
      options: ['Luckily', 'Coincidentally', 'Happily'],
      correctAnswer: 'Coincidentally',
      explanation: '"Coincidentally" shows it was a "[[coincidence|coincidencia]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'multiple-choice',
      question: '___, she was "[[upset|molesta]].',
      options: ['Understandably', 'Actually', 'Basically'],
      correctAnswer: 'Understandably',
      explanation: '"Understandably" means it is "[[easy|fácil]] to understand why.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'multiple-choice',
      question: '___, no one was "[[hurt|herido]].',
      options: ['Fortunately', 'Luckily', 'Happily'],
      correctAnswer: 'Fortunately',
      explanation: 'Formal version of "luckily".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'multiple-choice',
      question: '___, the "[[door|puerta]] was "[[unlocked|abierta]].',
      options: ['Strangely', 'Curiously', 'Oddly'],
      correctAnswer: 'Curiously',
      explanation: '"Curiously" shows it was "[[interesting|interesante]] or "[[strange|extraño]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'multiple-choice',
      question: '___, they have "[[moved|mudado]] "[[away|lejos]].',
      options: ['Apparently', 'Seemingly', 'Presumably'],
      correctAnswer: 'Apparently',
      explanation: '"Apparently" means "[[based|basado]] on what you have "[[heard|oído]].',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'multiple-choice',
      question: '___, the "[[more|más]] he "[[studied|estudió]], the "[[worse|peor]] he "[[did|hizo]].',
      options: ['Paradoxically', 'Incredibly', 'Amazingly'],
      correctAnswer: 'Paradoxically',
      explanation: '"Paradoxically" shows a "[[contradictory|contradictoria]] situation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'multiple-choice',
      question: '___, the project was a "[[success|éxito]].',
      options: ['Briefly', 'Shortly', 'Quickly'],
      correctAnswer: 'Briefly',
      explanation: '"Briefly" is used to "[[summarize|resumir]].',
      points: 1
    }
  ]
};

// ============================================
// BLOCK 5: ADJECTIVE ORDER (10 items)
// ============================================
export const C1_U18_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Adjective Order & Sophistication',
  grammarPoint: 'Adjectives',
  explanation: 'When using "[[multiple adjectives|múltiples adjetivos]], follow the "[[standard order|orden estándar]]: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose.',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'multiple-choice',
      question: 'She bought a ___ "[[table|mesa]].',
      options: ['beautiful old wooden', 'wooden old beautiful', 'old beautiful wooden'],
      correctAnswer: 'beautiful old wooden',
      explanation: 'Opinion (beautiful) > Age (old) > Material (wooden).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'multiple-choice',
      question: 'It was a ___ "[[car|coche]].',
      options: ['red fast Italian', 'fast red Italian', 'Italian fast red'],
      correctAnswer: 'fast red Italian',
      explanation: 'Opinion (fast) > Color (red) > Origin (Italian).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'multiple-choice',
      question: 'He wore a ___ "[[suit|traje]].',
      options: ['silk black smart', 'smart black silk', 'black smart silk'],
      correctAnswer: 'smart black silk',
      explanation: 'Opinion (smart) > Color (black) > Material (silk).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'multiple-choice',
      question: 'They live in a ___ "[[house|casa]].',
      options: ['large modern glass', 'modern large glass', 'glass large modern'],
      correctAnswer: 'large modern glass',
      explanation: 'Size (large) > Age (modern) > Material (glass).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'multiple-choice',
      question: 'She has ___ "[[hair|pelo]].',
      options: ['curly long brown', 'long curly brown', 'brown long curly'],
      correctAnswer: 'long curly brown',
      explanation: 'Size (long) > Shape (curly) > Color (brown).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'multiple-choice',
      question: 'It was a ___ "[[coin|moneda]].',
      options: ['silver small round', 'small round silver', 'round small silver'],
      correctAnswer: 'small round silver',
      explanation: 'Size (small) > Shape (round) > Material (silver).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'multiple-choice',
      question: 'He bought some ___ "[[shoes|zapatos]].',
      options: ['expensive leather running', 'running leather expensive', 'leather expensive running'],
      correctAnswer: 'expensive leather running',
      explanation: 'Opinion (expensive) > Material (leather) > Purpose (running).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'multiple-choice',
      question: 'It was a ___ "[[vase|jarrón]].',
      options: ['Chinese valuable ancient', 'valuable ancient Chinese', 'ancient Chinese valuable'],
      correctAnswer: 'valuable ancient Chinese',
      explanation: 'Opinion (valuable) > Age (ancient) > Origin (Chinese).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'multiple-choice',
      question: 'She is a ___ "[[person|persona]].',
      options: ['wonderful young American', 'American young wonderful', 'young wonderful American'],
      correctAnswer: 'wonderful young American',
      explanation: 'Opinion (wonderful) > Age (young) > Origin (American).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'multiple-choice',
      question: 'It was a ___ "[[day|día]].',
      options: ['bright sunny spring', 'spring sunny bright', 'sunny bright spring'],
      correctAnswer: 'bright sunny spring',
      explanation: 'Opinion (bright) > Appearance (sunny) > Time/Purpose (spring).',
      points: 1
    }
  ]
};

export const unit18: Lesson = createC1Unit(
  'c1-u18',
  'Advanced Adjectives & Adverbs',
  'Polishing your descriptive skills with gradable/non-gradable distinctions, compound modifiers, and attitude adverbs.',
  ['Distinguish between gradable and non-gradable adjectives', 'Create and use compound adjectives accurately', 'Apply attitude adverbs to express nuance and opinion'],
  [
    C1_U18_BLOCK1, C1_U18_BLOCK2, C1_U18_BLOCK3, C1_U18_BLOCK4, C1_U18_BLOCK5
  ]
);
