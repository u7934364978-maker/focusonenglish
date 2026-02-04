import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 4;

const block1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Mixed Conditionals',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: "If I ______ the job, I would be working in London now.",
      options: ['had got', 'got', 'would get', 'have got'],
      correctAnswer: 'had got',
      explanation: 'Mixed conditional (Type 3 + Type 2): Past action/condition with a present result.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: "If she ______ so shy, she would have spoken to him at the party.",
      options: ["wasn't", 'had not been', 'is not', 'would not be'],
      correctAnswer: "wasn't",
      explanation: 'Mixed conditional (Type 2 + Type 3): Present state/characteristic with a past result.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: "If they ______ earlier, they wouldn't be stuck in traffic now.",
      options: ['had left', 'left', 'would leave', 'have left'],
      correctAnswer: 'had left',
      explanation: 'Mixed conditional: Past action with present consequence.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: "I ______ richer now if I hadn't spent all my money on that car.",
      options: ['would be', 'would have been', 'will be', 'am'],
      correctAnswer: 'would be',
      explanation: 'Mixed conditional: Past action with present consequence.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: "If you ______ my advice, you wouldn't be in this mess.",
      options: ['had taken', 'took', 'would take', 'have taken'],
      correctAnswer: 'had taken',
      explanation: 'Past action with present result.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: "If I ______ more time, I would have finished the report yesterday.",
      options: ['had', 'had had', 'have', 'would have'],
      correctAnswer: 'had',
      explanation: 'Present state (having time) affecting a past outcome.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: "She ______ a famous actress now if she hadn't given up her career.",
      options: ['might be', 'might have been', 'could have been', 'will be'],
      correctAnswer: 'might be',
      explanation: 'Past action with present possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: "If we ______ the map, we wouldn't be lost now.",
      options: ['had brought', 'brought', 'would bring', 'have brought'],
      correctAnswer: 'had brought',
      explanation: 'Past action with present result.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: "If he ______ a better player, he would have scored that goal.",
      options: ['were', 'had been', 'is', 'would be'],
      correctAnswer: 'were',
      explanation: 'Present ability/state affecting a past event.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: "We ______ on holiday now if we hadn't missed our flight.",
      options: ['would be', 'would have been', 'will be', 'are'],
      correctAnswer: 'would be',
      explanation: 'Past event with present consequence.',
      points: 1
    }
  ]
};

const block2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Inversion in Conditionals',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: "______ I known about the meeting, I would have attended.",
      options: ['Had', 'Were', 'Should', 'Did'],
      correctAnswer: 'Had',
      explanation: 'Inversion in Type 3 conditional: "Had I known" = "If I had known".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: "______ you need any further assistance, please do not hesitate to contact us.",
      options: ['Should', 'Were', 'Had', 'Would'],
      correctAnswer: 'Should',
      explanation: 'Inversion in Type 1 conditional: "Should you need" = "If you should need".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: "______ I to win the lottery, I would travel the world.",
      options: ['Were', 'Should', 'Had', 'If'],
      correctAnswer: 'Were',
      explanation: 'Inversion in Type 2 conditional: "Were I to win" = "If I won".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: "______ it not for his help, I would have failed.",
      options: ['Were', 'Had', 'Should', 'If'],
      correctAnswer: 'Were',
      explanation: 'Formal structure: "Were it not for" = "If it weren\'t for".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: "______ the weather to improve, we might go for a walk.",
      options: ['Were', 'Should', 'Had', 'Would'],
      correctAnswer: 'Were',
      explanation: 'Formal Type 2 inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: "______ you have any questions, feel free to ask.",
      options: ['Should', 'Were', 'Had', 'Would'],
      correctAnswer: 'Should',
      explanation: 'Formal Type 1 inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: "______ they have realized the danger, they wouldn't have gone there.",
      options: ['Had', 'Were', 'Should', 'If'],
      correctAnswer: 'Had',
      explanation: 'Type 3 inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: "______ I in your position, I would accept the offer.",
      options: ['Were', 'Should', 'Had', 'If'],
      correctAnswer: 'Were',
      explanation: 'Type 2 inversion with "be".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: "______ it have rained, the match would have been cancelled.",
      options: ['Had', 'Should', 'Were', 'Did'],
      correctAnswer: 'Had',
      explanation: 'Type 3 inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: "______ you decide to join us, let us know by Friday.",
      options: ['Should', 'Were', 'Had', 'Would'],
      correctAnswer: 'Should',
      explanation: 'Formal Type 1 inversion.',
      points: 1
    }
  ]
};

const block3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Conditional Linkers and Phrases',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: "I will go ______ you come with me.",
      options: ['provided', 'unless', 'but for', 'even if'],
      correctAnswer: 'provided',
      explanation: '"Provided (that)" or "providing (that)" means "on condition that".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: "______ for his help, I would have failed.",
      options: ['But', 'Unless', 'Provided', 'Supposing'],
      correctAnswer: 'But',
      explanation: '"But for" means "if it hadn\'t been for".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: "______ he doesn't arrive soon, we'll have to leave without him.",
      options: ['Assuming', 'Unless', 'Even if', 'Whether'],
      correctAnswer: 'Assuming',
      explanation: '"Assuming (that)" is used to suggest a condition.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: "You can borrow my car ______ you drive carefully.",
      options: ['as long as', 'unless', 'even if', 'whether'],
      correctAnswer: 'as long as',
      explanation: '"As long as" expresses a condition.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: "I'm going to the beach ______ it rains.",
      options: ['even if', 'provided', 'as long as', 'on condition that'],
      correctAnswer: 'even if',
      explanation: '"Even if" expresses that the result will be the same regardless of the condition.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: "______ you were offered the job, would you take it?",
      options: ['Supposing', 'Unless', 'Provided', 'Even if'],
      correctAnswer: 'Supposing',
      explanation: '"Supposing" is used to ask about an imaginary situation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: "I'll be there at 8:00 ______ I'm delayed by traffic.",
      options: ['unless', 'provided', 'as long as', 'assuming'],
      correctAnswer: 'unless',
      explanation: '"Unless" means "if...not".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: "______ that the funding is approved, the project will begin in June.",
      options: ['Given', 'Unless', 'Supposing', 'Even if'],
      correctAnswer: 'Given',
      explanation: '"Given that" expresses a condition based on a known fact.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: "He would have won ______ for a small mistake near the end.",
      options: ['were it not', 'unless', 'provided', 'even if'],
      correctAnswer: 'were it not',
      explanation: 'Formal structure: "Were it not for".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: "______ you are ready, we can start the meeting.",
      options: ['Now that', 'Unless', 'Supposing', 'Even if'],
      correctAnswer: 'Now that',
      explanation: '"Now that" implies a condition that has been fulfilled.',
      points: 1
    }
  ]
};

const block4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Key Word Transformation (Conditionals)',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'key-word-transformation',
      question: "If you hadn't helped me, I would have failed.\n**BUT**\n____________________ help, I would have failed.",
      correctAnswer: "But for your",
      explanation: '"But for" is used to express "if it hadn\'t been for".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'key-word-transformation',
      question: "I didn't know you were coming, so I didn't cook anything.\n**HAD**\n____________________ you were coming, I would have cooked something.",
      correctAnswer: "Had I known",
      explanation: 'Inversion in Type 3 conditional.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'key-word-transformation',
      question: "I'll go to the party only if you come too.\n**LONG**\nI'll go to the party ____________________ you come too.",
      correctAnswer: "as long as",
      explanation: '"As long as" expresses the condition.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'key-word-transformation',
      question: "If she doesn't work harder, she'll fail the exam.\n**UNLESS**\n____________________ harder, she'll fail the exam.",
      correctAnswer: "Unless she works",
      explanation: '"Unless" replaces "if...not".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'key-word-transformation',
      question: "It was only because of the rain that we stayed home.\n**NOT**\nIf it ____________________ the rain, we would have gone out.",
      correctAnswer: "had not been for",
      explanation: 'Type 3 conditional construction.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'key-word-transformation',
      question: "I'm sure he would have helped if you had asked him.\n**PROVIDED**\nHe would have helped ____________________ him.",
      correctAnswer: "provided you had asked",
      explanation: '"Provided" expresses the condition.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'key-word-transformation',
      question: "If you need any help, please let me know.\n**SHOULD**\n____________________ any help, please let me know.",
      correctAnswer: "Should you need",
      explanation: 'Inversion in Type 1 conditional.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'key-word-transformation',
      question: "He didn't study, so he isn't a doctor now.\n**IF**\n____________________, he would be a doctor now.",
      correctAnswer: "If he had studied",
      explanation: 'Mixed conditional: Past action with present result.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'key-word-transformation',
      question: "I would travel more if I had more money.\n**WERE**\n____________________ more money, I would travel more.",
      correctAnswer: "Were I to have",
      explanation: 'Inversion in Type 2 conditional.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'key-word-transformation',
      question: "You can stay here only if you keep quiet.\n**CONDITION**\nYou can stay here ____________________ you keep quiet.",
      correctAnswer: "on condition that",
      explanation: 'Phrase for expressing a condition.',
      points: 2
    }
  ]
};

const block5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Open Cloze: Conditionals in Context',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'open-cloze',
      question: "(1) ______ for the quick thinking of the pilot, the accident would have been much worse.",
      correctAnswer: "But",
      explanation: '"But for" structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'open-cloze',
      question: "Should you (2) ______ to change your mind, please let us know as soon as possible.",
      correctAnswer: "decide",
      explanation: 'Inverted Type 1 conditional.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'open-cloze',
      question: "If she (3) ______ not been so determined, she would never have achieved her goals.",
      correctAnswer: "had",
      explanation: 'Type 3 conditional.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'open-cloze',
      question: "You can borrow the book provided (4) ______ you return it by next week.",
      correctAnswer: "that",
      explanation: '"Provided that" linker.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'open-cloze',
      question: "Were I (5) ______ your position, I would think twice before signing that contract.",
      correctAnswer: "in",
      explanation: 'Type 2 inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'open-cloze',
      question: "Supposing (6) ______ everyone refused to pay, what would happen then?",
      correctAnswer: "that",
      explanation: '"Supposing that" linker.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'open-cloze',
      question: "If only he (7) ______ listened to my advice! Everything would be different now.",
      correctAnswer: "had",
      explanation: 'Regret about the past.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'open-cloze',
      question: "I'm going to the concert (8) ______ if it's sold out; I'll find a way to get a ticket.",
      correctAnswer: "even",
      explanation: '"Even if" linker.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'open-cloze',
      question: "Had (9) ______ not been for the rain, we would have had a picnic.",
      correctAnswer: "it",
      explanation: 'Inverted Type 3 conditional structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'open-cloze',
      question: "He (10) ______ be a rich man today if he had invested in that company years ago.",
      correctAnswer: "would",
      explanation: 'Mixed conditional result.',
      points: 1
    }
  ]
};

const block6: Exercise = {
  id: `c1-u${UNIT_ID}-b6`,
  type: 'grammar',
  title: 'Wishes and Regrets',
  questions: [
    {
      id: genId(UNIT_ID, 'b6', 1),
      type: 'multiple-choice',
      question: "I wish I ______ more attention in class when I was at school.",
      options: ['had paid', 'paid', 'would pay', 'have paid'],
      correctAnswer: 'had paid',
      explanation: '"Wish + past perfect" is used for regrets about the past.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 2),
      type: 'multiple-choice',
      question: "If only I ______ taller! I could reach the top shelf.",
      options: ['were', 'had been', 'am', 'would be'],
      correctAnswer: 'were',
      explanation: '"If only + past simple" is used for wishes about the present.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 3),
      type: 'multiple-choice',
      question: "I wish you ______ making that noise! It's really annoying.",
      options: ['would stop', 'stopped', 'had stopped', 'will stop'],
      correctAnswer: 'would stop',
      explanation: '"Wish + would" is used to express annoyance or a desire for someone to change their behavior.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 4),
      type: 'multiple-choice',
      question: "I'd rather you ______ anyone about this.",
      options: ["didn't tell", "hadn't told", "won't tell", "don't tell"],
      correctAnswer: "didn't tell",
      explanation: '"Would rather + past simple" is used for preferences about other people\'s actions in the present/future.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 5),
      type: 'multiple-choice',
      question: "It's time we ______.",
      options: ['left', 'leave', 'had left', 'would leave'],
      correctAnswer: 'left',
      explanation: '"It\'s time + past simple" expresses that something should be done now.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 6),
      type: 'multiple-choice',
      question: "If only she ______ me the truth yesterday.",
      options: ['had told', 'told', 'would tell', 'has told'],
      correctAnswer: 'had told',
      explanation: 'Past regret.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 7),
      type: 'multiple-choice',
      question: "I wish I ______ go to the party tonight.",
      options: ['could', 'would', 'can', 'had'],
      correctAnswer: 'could',
      explanation: 'Wish about a present/future ability.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 8),
      type: 'multiple-choice',
      question: "I'd sooner you ______ by train.",
      options: ['traveled', 'travel', 'had traveled', 'would travel'],
      correctAnswer: 'traveled',
      explanation: '"Would sooner" functions like "would rather".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 9),
      type: 'multiple-choice',
      question: "It's high time you ______ a job.",
      options: ['found', 'find', 'had found', 'would find'],
      correctAnswer: 'found',
      explanation: '"It\'s high time" emphasizes that an action is overdue.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 10),
      type: 'multiple-choice',
      question: "I wish it ______ raining.",
      options: ['would stop', 'stopped', 'had stopped', 'will stop'],
      correctAnswer: 'would stop',
      explanation: 'Desire for a change in a current situation.',
      points: 1
    }
  ]
};

const block7: Exercise = {
  id: `c1-u${UNIT_ID}-b7`,
  type: 'grammar',
  title: 'Future and Real Conditionals',
  questions: [
    {
      id: genId(UNIT_ID, 'b7', 1),
      type: 'multiple-choice',
      question: "If you ______ to see him, tell him I'm looking for him.",
      options: ['should happen', 'happened', 'will happen', 'would happen'],
      correctAnswer: 'should happen',
      explanation: '"If you should (happen to)" expresses a less likely future possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 2),
      type: 'multiple-choice',
      question: "If you ______ wait a moment, I'll see if he's available.",
      options: ['would', 'will', 'should', 'could'],
      correctAnswer: 'would',
      explanation: '"If you would" is a polite way of making a request.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 3),
      type: 'multiple-choice',
      question: "If we ______ to finish on time, we'll need more staff.",
      options: ['are', 'will be', 'would be', 'were'],
      correctAnswer: 'are',
      explanation: '"If + are/is to" expresses a requirement for a future outcome.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 4),
      type: 'multiple-choice',
      question: "If you ______ leave now, you'll miss the end of the show.",
      options: ['must', 'will', 'would', 'should'],
      correctAnswer: 'must',
      explanation: 'Expressing necessity within a conditional.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 5),
      type: 'multiple-choice',
      question: "If I ______ help you, I would, but I'm too busy.",
      options: ['could', 'can', 'would', 'should'],
      correctAnswer: 'could',
      explanation: 'Hypothetical present ability.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 6),
      type: 'multiple-choice',
      question: "If you ______ be so kind as to help me, I'd appreciate it.",
      options: ['would', 'will', 'should', 'could'],
      correctAnswer: 'would',
      explanation: 'Polite formal request.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 7),
      type: 'multiple-choice',
      question: "If you ______ to succeed, you must work hard.",
      options: ['are', 'will be', 'would be', 'were'],
      correctAnswer: 'are',
      explanation: '"If you are to succeed" means "If you want to succeed".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 8),
      type: 'multiple-choice',
      question: "If you ______ see her, give her my regards.",
      options: ['should', 'will', 'would', 'could'],
      correctAnswer: 'should',
      explanation: 'Less certain future condition.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 9),
      type: 'multiple-choice',
      question: "I'll help you ______ you need it.",
      options: ['if', 'whether', 'unless', 'even if'],
      correctAnswer: 'if',
      explanation: 'Standard Type 1 conditional.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 10),
      type: 'multiple-choice',
      question: "If the plane ______ on time, we'll be there by midnight.",
      options: ['is', 'will be', 'would be', 'was'],
      correctAnswer: 'is',
      explanation: 'Type 1 conditional.',
      points: 1
    }
  ]
};

const block8: Exercise = {
  id: `c1-u${UNIT_ID}-b8`,
  type: 'grammar',
  title: 'Conditionals in Formal and Academic English',
  questions: [
    {
      id: genId(UNIT_ID, 'b8', 1),
      type: 'multiple-choice',
      question: "______ that the data is accurate, we can proceed with the analysis.",
      options: ['Assuming', 'Provided', 'Unless', 'Even if'],
      correctAnswer: 'Assuming',
      explanation: '"Assuming that" is used in formal contexts.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 2),
      type: 'multiple-choice',
      question: "He left early ______ he should be late for the meeting.",
      options: ['lest', 'unless', 'even if', 'whether'],
      correctAnswer: 'lest',
      explanation: '"Lest" means "for fear that" or "to avoid the risk of".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 3),
      type: 'multiple-choice',
      question: "______ for the funding, the research would not have been possible.",
      options: ['Were it not', 'Unless', 'Even if', 'Assuming'],
      correctAnswer: 'Were it not',
      explanation: 'Formal conditional structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 4),
      type: 'multiple-choice',
      question: "______ the results be negative, the experiment will be repeated.",
      options: ['Should', 'Were', 'Had', 'If'],
      correctAnswer: 'Should',
      explanation: 'Formal inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 5),
      type: 'multiple-choice',
      question: "The project will continue ______ of the outcome.",
      options: ['regardless', 'provided', 'unless', 'even if'],
      correctAnswer: 'regardless',
      explanation: '"Regardless of" expresses that the condition does not matter.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 6),
      type: 'multiple-choice',
      question: "______ circumstances permit, we will meet again next year.",
      options: ['Should', 'Were', 'Had', 'Unless'],
      correctAnswer: 'Should',
      explanation: 'Formal conditional inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 7),
      type: 'multiple-choice',
      question: "The agreement is binding ______ that all parties sign.",
      options: ['on condition', 'unless', 'even if', 'assuming'],
      correctAnswer: 'on condition',
      explanation: '"On condition that" is formal.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 8),
      type: 'multiple-choice',
      question: "______ to the contrary, the meeting will go ahead as planned.",
      options: ['Unless', 'Provided', 'Even if', 'Assuming'],
      correctAnswer: 'Unless',
      explanation: '"Unless" with an adjective phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 9),
      type: 'multiple-choice',
      question: "He worked hard ______ he fail the exam.",
      options: ['lest', 'unless', 'even if', 'assuming'],
      correctAnswer: 'lest',
      explanation: 'Formal use of "lest".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 10),
      type: 'multiple-choice',
      question: "______ the current trends continue, the population will double by 2050.",
      options: ['Should', 'Were', 'Had', 'Unless'],
      correctAnswer: 'Should',
      explanation: 'Formal speculation.',
      points: 1
    }
  ]
};

const block9: Exercise = {
  id: `c1-u${UNIT_ID}-b9`,
  type: 'grammar',
  title: 'Negative Conditionals',
  questions: [
    {
      id: genId(UNIT_ID, 'b9', 1),
      type: 'multiple-choice',
      question: "Don't touch that ______ I tell you to.",
      options: ['unless', 'if', 'even if', 'provided'],
      correctAnswer: 'unless',
      explanation: '"Unless" means "if...not".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 2),
      type: 'multiple-choice',
      question: "We'll have to cancel the match, ______ it stops raining.",
      options: ['unless', 'if', 'even if', 'provided'],
      correctAnswer: 'unless',
      explanation: '"Unless" expresses the negative condition.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 3),
      type: 'multiple-choice',
      question: "I'll go to the party ______ I'm invited.",
      options: ['even if', 'unless', 'if', 'provided'],
      correctAnswer: 'even if',
      explanation: 'Meaning it doesn\'t matter if I\'m invited or not (though logically "if" or "unless" would change the meaning, "even if" fits the negative/concessive sense here).',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 4),
      type: 'multiple-choice',
      question: "You must finish your homework, ______ you won't be allowed to go out.",
      options: ['otherwise', 'unless', 'if', 'provided'],
      correctAnswer: 'otherwise',
      explanation: '"Otherwise" expresses the consequence of not fulfilling the condition.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 5),
      type: 'multiple-choice',
      question: "I won't tell you the secret ______ you promise not to tell anyone else.",
      options: ['unless', 'if', 'even if', 'provided'],
      correctAnswer: 'unless',
      explanation: 'Negative condition.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 6),
      type: 'multiple-choice',
      question: "Hurry up, ______ we'll be late.",
      options: ['or else', 'unless', 'if', 'provided'],
      correctAnswer: 'or else',
      explanation: '"Or else" is used for warnings.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 7),
      type: 'multiple-choice',
      question: "I'm not going ______ you go too.",
      options: ['unless', 'if', 'even if', 'provided'],
      correctAnswer: 'unless',
      explanation: '"Unless" replaces "if...not".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 8),
      type: 'multiple-choice',
      question: "He would have fallen ______ his friend had caught him.",
      options: ['unless', 'if', 'even if', 'provided'],
      correctAnswer: 'unless',
      explanation: '"Unless" (if...not) fits the past hypothetical.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 9),
      type: 'multiple-choice',
      question: "You can't come in ______ you have a ticket.",
      options: ['unless', 'if', 'even if', 'provided'],
      correctAnswer: 'unless',
      explanation: 'Negative condition.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 10),
      type: 'multiple-choice',
      question: "He never speaks ______ he is spoken to.",
      options: ['unless', 'if', 'even if', 'provided'],
      correctAnswer: 'unless',
      explanation: '"Unless" is common with passive structures.',
      points: 1
    }
  ]
};

const block10: Exercise = {
  id: `c1-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Conditional Review',
  questions: [
    {
      id: genId(UNIT_ID, 'b10', 1),
      type: 'multiple-choice',
      question: "If I ______ more carefully, I wouldn't have made so many mistakes.",
      options: ['had worked', 'worked', 'would work', 'have worked'],
      correctAnswer: 'had worked',
      explanation: 'Type 3 conditional.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 2),
      type: 'multiple-choice',
      question: "______ I to tell you the truth, you wouldn't believe me.",
      options: ['Were', 'Should', 'Had', 'If'],
      correctAnswer: 'Were',
      explanation: 'Type 2 inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 3),
      type: 'multiple-choice',
      question: "I'll help you with your homework ______ you help me with the dishes.",
      options: ['as long as', 'unless', 'even if', 'whether'],
      correctAnswer: 'as long as',
      explanation: 'Condition linker.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 4),
      type: 'multiple-choice',
      question: "If she ______ here now, she would know what to do.",
      options: ['were', 'had been', 'is', 'would be'],
      correctAnswer: 'were',
      explanation: 'Type 2 conditional.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 5),
      type: 'multiple-choice',
      question: "______ it not been for the rain, we would have gone for a walk.",
      options: ['Had', 'Were', 'Should', 'If'],
      correctAnswer: 'Had',
      explanation: 'Type 3 inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 6),
      type: 'multiple-choice',
      question: "I wish I ______ more time to spend with my family.",
      options: ['had', 'have', 'would have', 'had had'],
      correctAnswer: 'had',
      explanation: 'Wish about the present.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 7),
      type: 'multiple-choice',
      question: "If you ______ any help, just ask.",
      options: ['should need', 'will need', 'would need', 'need'],
      correctAnswer: 'should need',
      explanation: 'Future possibility.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 8),
      type: 'multiple-choice',
      question: "He ______ richer now if he had saved his money.",
      options: ['would be', 'would have been', 'will be', 'is'],
      correctAnswer: 'would be',
      explanation: 'Mixed conditional.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 9),
      type: 'multiple-choice',
      question: "______ for his help, I would have been in trouble.",
      options: ['But', 'Unless', 'Provided', 'Supposing'],
      correctAnswer: 'But',
      explanation: '"But for" structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 10),
      type: 'multiple-choice',
      question: "You can borrow my car ______ you bring it back by tomorrow.",
      options: ['provided', 'unless', 'even if', 'whether'],
      correctAnswer: 'provided',
      explanation: 'Condition linker.',
      points: 1
    }
  ]
};

export const C1_UNIT_4 = createC1Unit(
  'c1-u4',
  'Advanced Conditionals',
  'Mastering complex conditional structures and hypothetical situations.',
  ['Use mixed conditionals correctly', 'Implement inversion for formal emphasis', 'Differentiate between various conditional linkers'],
  [block1, block2, block3, block4, block5, block6, block7, block8, block9, block10]
);
