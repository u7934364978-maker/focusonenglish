import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 3;

const block1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Present Deduction and Probability',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: "The lights are off and there's no answer at the door. They ______ be out.",
      options: ['must', 'can', 'should', 'would'],
      correctAnswer: 'must',
      explanation: 'We use "must" for strong positive deduction when we are almost certain.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: "That ______ be Sarah at the door. She's in Paris this week.",
      options: ["can't", "mustn't", "shouldn't", "wouldn't"],
      correctAnswer: "can't",
      explanation: 'We use "can\'t" for strong negative deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: "I'm not sure where he is. He ______ be in the library.",
      options: ['might', 'must', 'can', 'should'],
      correctAnswer: 'might',
      explanation: '"Might", "may", and "could" are used for possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: "The evidence is overwhelming; he ______ be the one who leaked the documents.",
      options: ['has to', 'could', 'might', 'would'],
      correctAnswer: 'has to',
      explanation: '"Has to" or "must" are used when the logic points to only one conclusion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: "There ______ be some mistake. I've already paid this bill.",
      options: ['must', 'can', 'should', 'ought'],
      correctAnswer: 'must',
      explanation: '"Must" is used for logical necessity/deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: "He ______ be very rich to afford a car like that.",
      options: ['must', 'may', 'can', 'should'],
      correctAnswer: 'must',
      explanation: 'Logical deduction based on visible evidence.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: "It ______ be easy living in such a remote area during winter.",
      options: ["can't", "mustn't", "couldn't", "shouldn't"],
      correctAnswer: "can't",
      explanation: '"Can\'t" expresses that something is logically impossible.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: "This ______ be the right road, but I'm really not certain.",
      options: ['could', 'must', 'should', 'can'],
      correctAnswer: 'could',
      explanation: '"Could" expresses a weak possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: "You ______ be joking! There's no way that's true.",
      options: ['must', 'may', 'could', 'should'],
      correctAnswer: 'must',
      explanation: 'Idiomatic use of "must" for strong disbelief/deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: "She ______ be at home by now. She left the office an hour ago.",
      options: ['should', 'must', 'can', 'would'],
      correctAnswer: 'should',
      explanation: '"Should" is used for expectation or probability.',
      points: 1
    }
  ]
};

const block2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Past Deduction (Modal Perfects)',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: "I can't find my keys. I ______ them at the office.",
      options: ['must have left', 'can have left', 'should have left', 'would have left'],
      correctAnswer: 'must have left',
      explanation: '"Must have + past participle" is used for strong positive deduction about the past.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: "He didn't come to the party. He ______ about it.",
      options: ['might have forgotten', 'must forget', 'can have forgotten', 'should forget'],
      correctAnswer: 'might have forgotten',
      explanation: '"Might have" expresses a past possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: "She ______ seen him. She was in a different city that day.",
      options: ["can't have", "mustn't have", "shouldn't have", "couldn't"],
      correctAnswer: "can't have",
      explanation: '"Can\'t have" or "couldn\'t have" is used for negative past deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: "The burglar ______ through the window. It was locked from the inside.",
      options: ["couldn't have come", "must have come", "might have come", "should have come"],
      correctAnswer: "couldn't have come",
      explanation: '"Couldn\'t have" expresses that a past event was impossible.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: "You ______ very surprised when you heard the news.",
      options: ['must have been', 'can have been', 'should have been', 'would have been'],
      correctAnswer: 'must have been',
      explanation: 'Logical deduction about a past state.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: "They ______ lost. They've lived here for twenty years.",
      options: ["can't have got", "must have got", "might have got", "should have got"],
      correctAnswer: "can't have got",
      explanation: 'It is logically unlikely/impossible given their experience.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: "I ______ my phone at the restaurant, but I think it's more likely I left it in the taxi.",
      options: ['may have left', 'must have left', 'should have left', 'can have left'],
      correctAnswer: 'may have left',
      explanation: '"May have" expresses possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: "The report ______ by now. I sent it three days ago.",
      options: ['should have arrived', 'must arrive', 'could arrive', 'would arrive'],
      correctAnswer: 'should have arrived',
      explanation: '"Should have" expresses an expectation about the past.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: "The team ______ extremely hard to achieve such results.",
      options: ['must have worked', 'might work', 'can have worked', 'should work'],
      correctAnswer: 'must have worked',
      explanation: 'High certainty about a past action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: "He ______ the email. I've had no response.",
      options: ['might not have seen', 'can not have seen', 'must not see', 'should not have seen'],
      correctAnswer: 'might not have seen',
      explanation: 'Possibility that an action did not occur.',
      points: 1
    }
  ]
};

const block3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Degrees of Certainty and Speculation',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: "It is ______ possible that the meeting will be postponed.",
      options: ['conceivably', 'must', 'surely', 'can'],
      correctAnswer: 'conceivably',
      explanation: '"Conceivably" is an adverb used to express a slight possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: "The economic situation is ______ to improve next year.",
      options: ['bound', 'must', 'should', 'can'],
      correctAnswer: 'bound',
      explanation: '"Bound to" expresses high certainty.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: "There is ______ doubt that the company will face challenges.",
      options: ['little', 'some', 'no', 'any'],
      correctAnswer: 'little',
      explanation: '"Little doubt" expresses high certainty.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: "He is ______ likely to win the election.",
      options: ['highly', 'must', 'can', 'should'],
      correctAnswer: 'highly',
      explanation: '"Highly likely" is a common collocation for probability.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: "She is ______ certain to be promoted.",
      options: ['almost', 'must', 'can', 'should'],
      correctAnswer: 'almost',
      explanation: '"Almost certain" expresses very high probability.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: "It's ______ that he will refuse the offer.",
      options: ['highly probable', 'must', 'can', 'should'],
      correctAnswer: 'highly probable',
      explanation: 'Uses an adjective phrase for probability.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: "They are ______ to have arrived by now.",
      options: ['unlikely', 'can', 'might', 'must'],
      correctAnswer: 'unlikely',
      explanation: '"Unlikely" expresses low probability.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: "There is every ______ that the project will be a success.",
      options: ['likelihood', 'must', 'can', 'should'],
      correctAnswer: 'likelihood',
      explanation: '"There is every likelihood" means it is very probable.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: "He ______ well have been lying about his age.",
      options: ['may', 'must', 'should', 'can'],
      correctAnswer: 'may',
      explanation: '"May well" or "might well" expresses a strong possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: "It ______ have been his sister you saw, as she's the only one with red hair.",
      options: ['could well', 'must', 'should', 'can'],
      correctAnswer: 'could well',
      explanation: '"Could well" emphasizes possibility based on evidence.',
      points: 1
    }
  ]
};

const block4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Key Word Transformation (Modals)',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'key-word-transformation',
      question: "I'm sure he didn't mean to offend you.\n**CAN'T**\nHe ____________________ to offend you.",
      correctAnswer: "can't have meant",
      explanation: '"Can\'t have + past participle" replaces "I\'m sure he didn\'t".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'key-word-transformation',
      question: "It's possible that they missed the train.\n**MAY**\nThey ____________________ the train.",
      correctAnswer: "may have missed",
      explanation: '"May have + past participle" expresses past possibility.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'key-word-transformation',
      question: "It was a mistake to tell him the truth.\n**SHOULDN'T**\nYou ____________________ him the truth.",
      correctAnswer: "shouldn't have told",
      explanation: '"Shouldn\'t have" expresses regret about a past action.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'key-word-transformation',
      question: "I'm certain she is at work.\n**MUST**\nShe ____________________ at work.",
      correctAnswer: "must be",
      explanation: '"Must" expresses certainty in the present.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'key-word-transformation',
      question: "I'm sure the keys are in the kitchen.\n**BOUND**\nThe keys ____________________ in the kitchen.",
      correctAnswer: "are bound to be",
      explanation: '"Bound to be" expresses strong certainty.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'key-word-transformation',
      question: "Perhaps he forgot about the meeting.\n**MIGHT**\nHe ____________________ about the meeting.",
      correctAnswer: "might have forgotten",
      explanation: '"Might have" for past possibility.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'key-word-transformation',
      question: "It's very likely that the price will go up.\n**EVERY**\nThere is ____________________ that the price will go up.",
      correctAnswer: "every likelihood",
      explanation: 'Phrase used to express high probability.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'key-word-transformation',
      question: "I'm sure she didn't see me.\n**HAVE**\nShe ____________________ seen me.",
      correctAnswer: "can't have",
      explanation: 'Negative deduction about the past.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'key-word-transformation',
      question: "It's impossible that he finished the work so quickly.\n**COULDN'T**\nHe ____________________ the work so quickly.",
      correctAnswer: "couldn't have finished",
      explanation: 'Negative past deduction.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'key-word-transformation',
      question: "It's probable that they are still waiting.\n**WELL**\nThey ____________________ still waiting.",
      correctAnswer: "may well be",
      explanation: '"May well be" expresses probability.',
      points: 2
    }
  ]
};

const block5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Open Cloze: Modals in Context',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'open-cloze',
      question: "Given the circumstances, he (1) ______ have been aware of the risks involved.",
      correctAnswer: "must",
      explanation: "Logical deduction in the past context.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'open-cloze',
      question: "She (2) ______ not have intended to cause any harm, but the results were disastrous.",
      correctAnswer: "may",
      explanation: "Possibility (might/may).",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'open-cloze',
      question: "There is (3) ______ doubt that the climate is changing rapidly.",
      correctAnswer: "little",
      explanation: "Expressing certainty.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'open-cloze',
      question: "He is (4) ______ to be the next CEO, considering his track record.",
      correctAnswer: "bound",
      explanation: "High certainty.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'open-cloze',
      question: "The ancient civilization (5) ______ have possessed advanced astronomical knowledge.",
      correctAnswer: "must",
      explanation: "Logical deduction based on evidence.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'open-cloze',
      question: "It (6) ______ well be that the virus has mutated again.",
      correctAnswer: "may",
      explanation: "Strong possibility (may/might).",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'open-cloze',
      question: "You (7) ______ have seen him; he was out of the country at the time.",
      correctAnswer: "couldn't",
      explanation: "Negative past deduction (can't/couldn't).",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'open-cloze',
      question: "The project (8) ______ to be completed by the end of the month if all goes well.",
      correctAnswer: "should",
      explanation: "Expectation.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'open-cloze',
      question: "It is (9) ______ possible that the two events are related.",
      correctAnswer: "entirely",
      explanation: "Adverb of degree.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'open-cloze',
      question: "We (10) ______ as well start the meeting now, as everyone is here.",
      correctAnswer: "might",
      explanation: '"Might as well" is an idiomatic expression.',
      points: 1
    }
  ]
};

const block6: Exercise = {
  id: `c1-u${UNIT_ID}-b6`,
  type: 'grammar',
  title: 'Continuous and Passive Modal Forms',
  questions: [
    {
      id: genId(UNIT_ID, 'b6', 1),
      type: 'multiple-choice',
      question: "They ______ for hours. They look exhausted.",
      options: ['must have been working', 'must work', 'can work', 'should work'],
      correctAnswer: 'must have been working',
      explanation: '"Must have been -ing" is used for deduction about a continuous past action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 2),
      type: 'multiple-choice',
      question: "She ______ a bath when I called. That's why she didn't answer.",
      options: ['must have been having', 'must have', 'can have had', 'should have'],
      correctAnswer: 'must have been having',
      explanation: 'Deduction about what someone was doing at a specific time.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 3),
      type: 'multiple-choice',
      question: "The document ______ by someone in the legal department.",
      options: ['must have been signed', 'must sign', 'can sign', 'should sign'],
      correctAnswer: 'must have been signed',
      explanation: 'Passive modal perfect for deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 4),
      type: 'multiple-choice',
      question: "He ______ about the situation. He seemed genuinely surprised.",
      options: ["can't have been lying", "must have lied", "should have lied", "would lie"],
      correctAnswer: "can't have been lying",
      explanation: 'Negative deduction about a continuous action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 5),
      type: 'multiple-choice',
      question: "The house ______ some years ago.",
      options: ['must have been built', 'must build', 'can have built', 'should build'],
      correctAnswer: 'must have been built',
      explanation: 'Passive past deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 6),
      type: 'multiple-choice',
      question: "You ______ attention to what I was saying.",
      options: ["can't have been paying", "must pay", "should pay", "would pay"],
      correctAnswer: "can't have been paying",
      explanation: 'Negative deduction about past continuous action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 7),
      type: 'multiple-choice',
      question: "The package ______ to the wrong address.",
      options: ['might have been sent', 'might send', 'can send', 'should send'],
      correctAnswer: 'might have been sent',
      explanation: 'Passive past possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 8),
      type: 'multiple-choice',
      question: "They ______ for us at the station right now.",
      options: ['could be waiting', 'must have waited', 'should wait', 'can wait'],
      correctAnswer: 'could be waiting',
      explanation: 'Possibility about a present continuous action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 9),
      type: 'multiple-choice',
      question: "He ______ for this moment his entire life.",
      options: ['must have been preparing', 'must prepare', 'can prepare', 'should prepare'],
      correctAnswer: 'must have been preparing',
      explanation: 'Continuous past deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 10),
      type: 'multiple-choice',
      question: "The safe ______ from the inside.",
      options: ['must have been opened', 'must open', 'can open', 'should open'],
      correctAnswer: 'must have been opened',
      explanation: 'Passive past deduction.',
      points: 1
    }
  ]
};

const block7: Exercise = {
  id: `c1-u${UNIT_ID}-b7`,
  type: 'grammar',
  title: 'Expectation and Future Speculation',
  questions: [
    {
      id: genId(UNIT_ID, 'b7', 1),
      type: 'multiple-choice',
      question: "By this time tomorrow, they ______ in London.",
      options: ['should be', 'must be', 'can be', 'would be'],
      correctAnswer: 'should be',
      explanation: '"Should" is used for future expectations.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 2),
      type: 'multiple-choice',
      question: "If we leave now, we ______ catch the last bus.",
      options: ['might', 'must', 'should', 'would'],
      correctAnswer: 'might',
      explanation: 'Future possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 3),
      type: 'multiple-choice',
      question: "There ______ be some protest if the government goes ahead with the plan.",
      options: ['is likely to', 'must', 'can', 'should'],
      correctAnswer: 'is likely to',
      explanation: '"Is likely to" expresses future probability.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 4),
      type: 'multiple-choice',
      question: "The weather ______ improve later in the day.",
      options: ['should', 'must', 'can', 'would'],
      correctAnswer: 'should',
      explanation: 'Future expectation based on a forecast.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 5),
      type: 'multiple-choice',
      question: "He ______ arrive any minute now.",
      options: ['could', 'must', 'should', 'would'],
      correctAnswer: 'could',
      explanation: 'Imminent possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 6),
      type: 'multiple-choice',
      question: "They ______ be finished by the end of the week.",
      options: ['ought to', 'must', 'can', 'would'],
      correctAnswer: 'ought to',
      explanation: '"Ought to" expresses expectation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 7),
      type: 'multiple-choice',
      question: "Prices ______ to rise in the coming months.",
      options: ['are set', 'must', 'can', 'should'],
      correctAnswer: 'are set',
      explanation: '"Are set to" expresses a planned or highly likely future event.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 8),
      type: 'multiple-choice',
      question: "I ______ be very surprised if they don't win.",
      options: ['would', 'must', 'can', 'should'],
      correctAnswer: 'would',
      explanation: 'Hypothetical future state.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 9),
      type: 'multiple-choice',
      question: "The company ______ well expand its operations into Asia.",
      options: ['might', 'must', 'should', 'can'],
      correctAnswer: 'might',
      explanation: 'Future possibility with "well" for emphasis.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 10),
      type: 'multiple-choice',
      question: "It ______ that we will have to rethink the entire strategy.",
      options: ['may be', 'must be', 'should be', 'can be'],
      correctAnswer: 'may be',
      explanation: 'Speculating about future necessity.',
      points: 1
    }
  ]
};

const block8: Exercise = {
  id: `c1-u${UNIT_ID}-b8`,
  type: 'grammar',
  title: 'Advanced Speculative Phrases',
  questions: [
    {
      id: genId(UNIT_ID, 'b8', 1),
      type: 'multiple-choice',
      question: "In all ______, the project will be delayed.",
      options: ['probability', 'certainty', 'possibility', 'likelihood'],
      correctAnswer: 'probability',
      explanation: '"In all probability" is a formal phrase for high likelihood.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 2),
      type: 'multiple-choice',
      question: "There is no ______ that he was involved in the crime.",
      options: ['denying', 'doubt', 'question', 'chance'],
      correctAnswer: 'denying',
      explanation: '"There is no denying" expresses certainty.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 3),
      type: 'multiple-choice',
      question: "It is ______ to assume that they were unaware of the rules.",
      options: ['reasonable', 'must', 'should', 'can'],
      correctAnswer: 'reasonable',
      explanation: 'Using an adjective to express logical deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 4),
      type: 'multiple-choice',
      question: "On the ______ of it, the plan seems solid.",
      options: ['face', 'surface', 'outside', 'look'],
      correctAnswer: 'face',
      explanation: '"On the face of it" means based on initial appearance.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 5),
      type: 'multiple-choice',
      question: "It is a ______ of time before they find out.",
      options: ['matter', 'question', 'point', 'case'],
      correctAnswer: 'matter',
      explanation: '"A matter of time" expresses certainty about a future event.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 6),
      type: 'multiple-choice',
      question: "There is a distinct ______ that the deal will fall through.",
      options: ['possibility', 'must', 'should', 'can'],
      correctAnswer: 'possibility',
      explanation: '"Distinct possibility" is a common collocation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 7),
      type: 'multiple-choice',
      question: "By all ______, he is the best candidate for the job.",
      options: ['accounts', 'means', 'ways', 'looks'],
      correctAnswer: 'accounts',
      explanation: '"By all accounts" means according to what people say.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 8),
      type: 'multiple-choice',
      question: "It ______ without saying that we need to be careful.",
      options: ['goes', 'comes', 'runs', 'stands'],
      correctAnswer: 'goes',
      explanation: '"It goes without saying" expresses something that is obvious.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 9),
      type: 'multiple-choice',
      question: "He is ______ as the most talented artist of his generation.",
      options: ['regarded', 'seen', 'thought', 'must'],
      correctAnswer: 'regarded',
      explanation: 'Expressing a widely held deduction or opinion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 10),
      type: 'multiple-choice',
      question: "There is ______ any hope of finding survivors.",
      options: ['hardly', 'almost', 'not', 'no'],
      correctAnswer: 'hardly',
      explanation: '"Hardly any" expresses very low probability.',
      points: 1
    }
  ]
};

const block9: Exercise = {
  id: `c1-u${UNIT_ID}-b9`,
  type: 'grammar',
  title: 'Negative Deduction and Impossibility',
  questions: [
    {
      id: genId(UNIT_ID, 'b9', 1),
      type: 'multiple-choice',
      question: "He ______ have known about the party; it was a total secret.",
      options: ["couldn't", "mustn't", "shouldn't", "wouldn't"],
      correctAnswer: "couldn't",
      explanation: '"Couldn\'t have" expresses that something was impossible.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 2),
      type: 'multiple-choice',
      question: "They ______ be at the cinema; the film doesn't start for another hour.",
      options: ["can't", "mustn't", "shouldn't", "wouldn't"],
      correctAnswer: "can't",
      explanation: 'Present negative deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 3),
      type: 'multiple-choice',
      question: "You ______ have seen a ghost! They don't exist.",
      options: ["can't", "mustn't", "shouldn't", "couldn't"],
      correctAnswer: "can't",
      explanation: 'Expressing impossibility of a past event.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 4),
      type: 'multiple-choice',
      question: "The witness ______ have been mistaken about the color of the car.",
      options: ['could well', 'must', 'should', 'can'],
      correctAnswer: 'could well',
      explanation: 'Suggesting a strong possibility of an error.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 5),
      type: 'multiple-choice',
      question: "It ______ be the case that he was acting alone.",
      options: ["can't", "mustn't", "shouldn't", "couldn't"],
      correctAnswer: "can't",
      explanation: 'Negative deduction about a possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 6),
      type: 'multiple-choice',
      question: "They ______ have got my message, otherwise they would have called.",
      options: ["can't", "mustn't", "shouldn't", "wouldn't"],
      correctAnswer: "can't",
      explanation: 'Negative past deduction based on current results.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 7),
      type: 'multiple-choice',
      question: "She ______ be feeling very well if she's staying in bed all day.",
      options: ["can't", "mustn't", "shouldn't", "wouldn't"],
      correctAnswer: "can't",
      explanation: 'Present negative deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 8),
      type: 'multiple-choice',
      question: "It ______ have been easy for him to admit he was wrong.",
      options: ["can't", "mustn't", "shouldn't", "wouldn't"],
      correctAnswer: "can't",
      explanation: 'Past negative deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 9),
      type: 'multiple-choice',
      question: "The news ______ be true; it's just too unbelievable.",
      options: ["can't", "mustn't", "shouldn't", "wouldn't"],
      correctAnswer: "can't",
      explanation: 'Strong disbelief/deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 10),
      type: 'multiple-choice',
      question: "He ______ have been driving the car; he doesn't even have a license.",
      options: ["couldn't", "mustn't", "shouldn't", "wouldn't"],
      correctAnswer: "couldn't",
      explanation: 'Logical impossibility.',
      points: 1
    }
  ]
};

const block10: Exercise = {
  id: `c1-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Modal Review',
  questions: [
    {
      id: genId(UNIT_ID, 'b10', 1),
      type: 'multiple-choice',
      question: "I ______ have told her the secret. Now everyone knows.",
      options: ["shouldn't", "mustn't", "can't", "couldn't"],
      correctAnswer: "shouldn't",
      explanation: 'Expressing regret about a past action.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 2),
      type: 'multiple-choice',
      question: "He ______ be very happy with his new job. He's always smiling.",
      options: ['must', 'can', 'should', 'would'],
      correctAnswer: 'must',
      explanation: 'Positive present deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 3),
      type: 'multiple-choice',
      question: "They ______ have arrived by now, but the flight was delayed.",
      options: ['should', 'must', 'can', 'could'],
      correctAnswer: 'should',
      explanation: 'Past expectation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 4),
      type: 'multiple-choice',
      question: "It ______ have been John you saw. He's in New York.",
      options: ["can't", "mustn't", "shouldn't", "couldn't"],
      correctAnswer: "can't",
      explanation: 'Past negative deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 5),
      type: 'multiple-choice',
      question: "She ______ be working late tonight.",
      options: ['might', 'must', 'can', 'should'],
      correctAnswer: 'might',
      explanation: 'Possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 6),
      type: 'multiple-choice',
      question: "You ______ have been terrified when the earthquake started.",
      options: ['must', 'can', 'should', 'would'],
      correctAnswer: 'must',
      explanation: 'Past logical deduction.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 7),
      type: 'multiple-choice',
      question: "The project ______ have been a success if we had more time.",
      options: ['could', 'must', 'should', 'can'],
      correctAnswer: 'could',
      explanation: 'Hypothetical past possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 8),
      type: 'multiple-choice',
      question: "There ______ be a better way to do this.",
      options: ['must', 'can', 'should', 'would'],
      correctAnswer: 'must',
      explanation: 'Logical necessity.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 9),
      type: 'multiple-choice',
      question: "He ______ have forgotten our appointment.",
      options: ['might', 'must', 'can', 'should'],
      correctAnswer: 'might',
      explanation: 'Past possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 10),
      type: 'multiple-choice',
      question: "They ______ be living in a palace with all that money.",
      options: ['must', 'can', 'should', 'would'],
      correctAnswer: 'must',
      explanation: 'Logical deduction.',
      points: 1
    }
  ]
};

export const C1_UNIT_3 = createC1Unit(
  'c1-u3',
  'Modal Verbs of Deduction',
  'Speculating about the past, present, and future using modals.',
  ['Use "must have", "can\'t have", "might have"', 'Express degrees of certainty', 'Analyze mystery texts'],
  [block1, block2, block3, block4, block5, block6, block7, block8, block9, block10]
);
