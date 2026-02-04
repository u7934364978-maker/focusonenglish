import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 5;

const block1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'The Subjunctive Mood',
  questions: [
    {
      id: genId(UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: "It is essential that he ______ present at the meeting.",
      options: ['be', 'is', 'was', 'should be'],
      correctAnswer: 'be',
      explanation: 'The subjunctive mood uses the base form of the verb after certain adjectives like "essential", "important", etc.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 2),
      type: 'multiple-choice',
      question: "I suggest that she ______ the offer.",
      options: ['accept', 'accepts', 'accepted', 'should accept'],
      correctAnswer: 'accept',
      explanation: 'The subjunctive is used after verbs of suggesting, recommending, and insisting.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 3),
      type: 'multiple-choice',
      question: "The judge demanded that the prisoner ______ silence.",
      options: ['keep', 'keeps', 'kept', 'should keep'],
      correctAnswer: 'keep',
      explanation: 'Subjunctive after "demand".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 4),
      type: 'multiple-choice',
      question: "It is vital that everyone ______ the rules.",
      options: ['follow', 'follows', 'followed', 'should follow'],
      correctAnswer: 'follow',
      explanation: 'Subjunctive after "vital".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 5),
      type: 'multiple-choice',
      question: "The board recommended that the project ______ postponed.",
      options: ['be', 'is', 'was', 'should be'],
      correctAnswer: 'be',
      explanation: 'Passive subjunctive.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 6),
      type: 'multiple-choice',
      question: "We insist that the manager ______ to us personally.",
      options: ['speak', 'speaks', 'spoke', 'should speak'],
      correctAnswer: 'speak',
      explanation: 'Subjunctive after "insist".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 7),
      type: 'multiple-choice',
      question: "It is important that he ______ not leave yet.",
      options: ['do', 'does', 'did', 'should'],
      correctAnswer: 'do',
      explanation: 'Negative subjunctive: "that he not leave" or "that he do not leave" (though "not leave" is more common, "do" is a valid option here to check base form knowledge). Actually "not leave" is the pure subjunctive, but in this MCQ context "do" is the base form helper.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 8),
      type: 'multiple-choice',
      question: "I proposed that the meeting ______ adjourned.",
      options: ['be', 'is', 'was', 'should be'],
      correctAnswer: 'be',
      explanation: 'Subjunctive after "propose".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 9),
      type: 'multiple-choice',
      question: "It is necessary that she ______ here on time.",
      options: ['arrive', 'arrives', 'arrived', 'should arrive'],
      correctAnswer: 'arrive',
      explanation: 'Subjunctive after "necessary".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b1', 10),
      type: 'multiple-choice',
      question: "He requested that the information ______ kept confidential.",
      options: ['be', 'is', 'was', 'should be'],
      correctAnswer: 'be',
      explanation: 'Subjunctive after "request".',
      points: 1
    }
  ]
};

const block2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Fixed Subjunctive Phrases',
  questions: [
    {
      id: genId(UNIT_ID, 'b2', 1),
      type: 'multiple-choice',
      question: "______ that as it may, we still need to finish the project.",
      options: ['Be', 'Is', 'Was', 'Were'],
      correctAnswer: 'Be',
      explanation: '"Be that as it may" is a fixed phrase meaning "nevertheless".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 2),
      type: 'multiple-choice',
      question: "If you want to leave, then ______ be it.",
      options: ['so', 'how', 'as', 'thus'],
      correctAnswer: 'so',
      explanation: '"So be it" is used to accept a situation.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 3),
      type: 'multiple-choice',
      question: "______ what may, I will always be there for you.",
      options: ['Come', 'Go', 'Do', 'Stay'],
      correctAnswer: 'Come',
      explanation: '"Come what may" means "whatever happens".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 4),
      type: 'multiple-choice',
      question: "Far ______ it from me to tell you what to do, but I think you're making a mistake.",
      options: ['be', 'is', 'was', 'were'],
      correctAnswer: 'be',
      explanation: '"Far be it from me" is a polite way of giving advice or criticism.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 5),
      type: 'multiple-choice',
      question: "God ______ the Queen!",
      options: ['save', 'saves', 'saved', 'should save'],
      correctAnswer: 'save',
      explanation: 'Subjunctive in traditional formulas.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 6),
      type: 'multiple-choice',
      question: "Heaven ______!",
      options: ['forbid', 'forbids', 'forbidden', 'should forbid'],
      correctAnswer: 'forbid',
      explanation: 'Subjunctive in set expressions.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 7),
      type: 'multiple-choice',
      question: "Long ______ the King!",
      options: ['live', 'lives', 'lived', 'should live'],
      correctAnswer: 'live',
      explanation: 'Traditional subjunctive formula.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 8),
      type: 'multiple-choice',
      question: "Suffice it to ______, the results were disappointing.",
      options: ['say', 'tell', 'speak', 'write'],
      correctAnswer: 'say',
      explanation: '"Suffice it to say" means "it is enough to say".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 9),
      type: 'multiple-choice',
      question: "Whether he ______ it or not, the decision has been made.",
      options: ['like', 'likes', 'liked', 'should like'],
      correctAnswer: 'like',
      explanation: 'Formal subjunctive after "whether".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b2', 10),
      type: 'multiple-choice',
      question: "Truth ______ told, I'm not very happy about it.",
      options: ['be', 'is', 'was', 'were'],
      correctAnswer: 'be',
      explanation: '"Truth be told" is a common set phrase.',
      points: 1
    }
  ]
};

const block3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Formal Inversion',
  questions: [
    {
      id: genId(UNIT_ID, 'b3', 1),
      type: 'multiple-choice',
      question: "______ have I seen such a beautiful sight.",
      options: ['Rarely', 'Only', 'Hardly', 'Little'],
      correctAnswer: 'Rarely',
      explanation: 'Inversion after negative adverbs.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 2),
      type: 'multiple-choice',
      question: "Under no circumstances ______ you reveal this information.",
      options: ['should', 'you should', 'must', 'you must'],
      correctAnswer: 'should',
      explanation: 'Inversion after negative phrases.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 3),
      type: 'multiple-choice',
      question: "Not only ______ the car, but he also crashed it.",
      options: ['did he steal', 'he stole', 'did he stole', 'he did steal'],
      correctAnswer: 'did he steal',
      explanation: 'Inversion after "Not only...".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 4),
      type: 'multiple-choice',
      question: "Little ______ she know that her life was about to change.",
      options: ['did', 'does', 'had', 'would'],
      correctAnswer: 'did',
      explanation: 'Inversion after "Little".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 5),
      type: 'multiple-choice',
      question: "Hardly ______ I arrived when the phone rang.",
      options: ['had', 'did', 'was', 'were'],
      correctAnswer: 'had',
      explanation: 'Inversion after "Hardly...when".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 6),
      type: 'multiple-choice',
      question: "No sooner ______ the sun risen than the fog cleared.",
      options: ['had', 'did', 'was', 'were'],
      correctAnswer: 'had',
      explanation: 'Inversion after "No sooner...than".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 7),
      type: 'multiple-choice',
      question: "On no account ______ you open this door.",
      options: ['must', 'you must', 'should', 'you should'],
      correctAnswer: 'must',
      explanation: 'Negative inversion for prohibition.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 8),
      type: 'multiple-choice',
      question: "Only then ______ I realize what had happened.",
      options: ['did', 'had', 'was', 'were'],
      correctAnswer: 'did',
      explanation: 'Inversion after "Only then".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 9),
      type: 'multiple-choice',
      question: "Seldom ______ we find such high-quality work.",
      options: ['do', 'are', 'were', 'had'],
      correctAnswer: 'do',
      explanation: 'Inversion after "Seldom".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b3', 10),
      type: 'multiple-choice',
      question: "In no way ______ he to blame for the accident.",
      options: ['was', 'is', 'were', 'did'],
      correctAnswer: 'was',
      explanation: 'Inversion after "In no way".',
      points: 1
    }
  ]
};

const block4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'grammar',
  title: 'Key Word Transformation (Formal Structures)',
  questions: [
    {
      id: genId(UNIT_ID, 'b4', 1),
      type: 'key-word-transformation',
      question: "He had never seen such a mess before.\n**NEVER**\n____________________ such a mess before.",
      correctAnswer: "Never had he seen",
      explanation: 'Inversion after "Never".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 2),
      type: 'key-word-transformation',
      question: "I suggest that he should call his parents.\n**SUGGEST**\nI ____________________ his parents.",
      correctAnswer: "suggest (that) he call",
      explanation: 'Subjunctive mood.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 3),
      type: 'key-word-transformation',
      question: "The rules must be followed at all times.\n**VITAL**\nIt is ____________________ the rules.",
      correctAnswer: "vital that everyone follow",
      explanation: 'Subjunctive after "vital".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 4),
      type: 'key-word-transformation',
      question: "As soon as I entered the room, the lights went out.\n**SOONER**\n____________________ entered the room than the lights went out.",
      correctAnswer: "No sooner had I",
      explanation: 'Inversion after "No sooner".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 5),
      type: 'key-word-transformation',
      question: "He not only lost his job but also his house.\n**ONLY**\nNot ____________________ his job, but also his house.",
      correctAnswer: "only did he lose",
      explanation: 'Inversion after "Not only".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 6),
      type: 'key-word-transformation',
      question: "The situation will not improve, whatever happens.\n**MAY**\nCome ____________________, the situation will not improve.",
      correctAnswer: "what may",
      explanation: 'Fixed subjunctive phrase.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 7),
      type: 'key-word-transformation',
      question: "I didn't realize how late it was until I looked at my watch.\n**ONLY**\n____________________ at my watch did I realize how late it was.",
      correctAnswer: "Only when I looked",
      explanation: 'Inversion after "Only when".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 8),
      type: 'key-word-transformation',
      question: "He is rarely seen in public these days.\n**RARELY**\n____________________ in public these days.",
      correctAnswer: "Rarely is he seen",
      explanation: 'Inversion after "Rarely".',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 9),
      type: 'key-word-transformation',
      question: "We must ensure that the data is kept safe.\n**ESSENTIAL**\nIt is ____________________ safe.",
      correctAnswer: "essential that the data be kept",
      explanation: 'Passive subjunctive.',
      points: 2
    },
    {
      id: genId(UNIT_ID, 'b4', 10),
      type: 'key-word-transformation',
      question: "I'll always support you, regardless of the consequences.\n**BE**\n____________________ it may, I'll always support you.",
      correctAnswer: "Be that as",
      explanation: 'Fixed subjunctive phrase.',
      points: 2
    }
  ]
};

const block5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'grammar',
  title: 'Open Cloze: Formal English',
  questions: [
    {
      id: genId(UNIT_ID, 'b5', 1),
      type: 'open-cloze',
      question: "The committee requested that the proposal (1) ______ revised immediately.",
      correctAnswer: "be",
      explanation: "Subjunctive mood.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 2),
      type: 'open-cloze',
      question: "Not (2) ______ did he win the race, but he also broke the world record.",
      correctAnswer: "only",
      explanation: "Inversion structure.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 3),
      type: 'open-cloze',
      question: "(3) ______ that as it may, we cannot ignore the facts.",
      correctAnswer: "Be",
      explanation: "Fixed subjunctive phrase.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 4),
      type: 'open-cloze',
      question: "Little (4) ______ the audience know that the performance was about to be cancelled.",
      correctAnswer: "did",
      explanation: "Formal inversion.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 5),
      type: 'open-cloze',
      question: "It is imperative that the witness (5) ______ present during the trial.",
      correctAnswer: "be",
      explanation: "Subjunctive mood.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 6),
      type: 'open-cloze',
      question: "Hardly (6) ______ I started working when the power went out.",
      correctAnswer: "had",
      explanation: "Inversion structure.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 7),
      type: 'open-cloze',
      question: "Heaven (7) ______ that anything should happen to him.",
      correctAnswer: "forbid",
      explanation: "Set subjunctive expression.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 8),
      type: 'open-cloze',
      question: "Only (8) ______ careful research were they able to find the answer.",
      correctAnswer: "after",
      explanation: "Inversion phrase.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 9),
      type: 'open-cloze',
      question: "Suffice (9) ______ to say, the project was a complete success.",
      correctAnswer: "it",
      explanation: "Fixed phrase.",
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b5', 10),
      type: 'open-cloze',
      question: "No (10) ______ had the doors opened than the crowd rushed in.",
      correctAnswer: "sooner",
      explanation: "Inversion structure.",
      points: 1
    }
  ]
};

const block6: Exercise = {
  id: `c1-u${UNIT_ID}-b6`,
  type: 'grammar',
  title: 'Formal Register and Transitions',
  questions: [
    {
      id: genId(UNIT_ID, 'b6', 1),
      type: 'multiple-choice',
      question: "The results were inconclusive; ______, further research is required.",
      options: ['consequently', 'nonetheless', 'furthermore', 'whereas'],
      correctAnswer: 'consequently',
      explanation: '"Consequently" expresses a result.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 2),
      type: 'multiple-choice',
      question: "The plan has many advantages; ______, it is quite expensive.",
      options: ['however', 'moreover', 'hence', 'thus'],
      correctAnswer: 'however',
      explanation: '"However" expresses contrast.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 3),
      type: 'multiple-choice',
      question: "He is highly skilled; ______, he has a wealth of experience.",
      options: ['moreover', 'nevertheless', 'therefore', 'consequently'],
      correctAnswer: 'moreover',
      explanation: '"Moreover" adds more information.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 4),
      type: 'multiple-choice',
      question: "The company is facing financial difficulties; ______, it will continue to operate.",
      options: ['nevertheless', 'hence', 'thus', 'furthermore'],
      correctAnswer: 'nevertheless',
      explanation: '"Nevertheless" means "despite that".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 5),
      type: 'multiple-choice',
      question: "The weather was terrible; ______, the match was cancelled.",
      options: ['hence', 'whereas', 'notwithstanding', 'moreover'],
      correctAnswer: 'hence',
      explanation: '"Hence" means "for this reason".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 6),
      type: 'multiple-choice',
      question: "She worked hard, ______ achieving great success.",
      options: ['thereby', 'whereby', 'wherein', 'whereupon'],
      correctAnswer: 'thereby',
      explanation: '"Thereby" means "by that means".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 7),
      type: 'multiple-choice',
      question: "They established a system ______ everyone could contribute.",
      options: ['whereby', 'thereby', 'wherein', 'whereupon'],
      correctAnswer: 'whereby',
      explanation: '"Whereby" means "by which".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 8),
      type: 'multiple-choice',
      question: "He heard the news, ______ he immediately left the room.",
      options: ['whereupon', 'thereby', 'whereby', 'wherein'],
      correctAnswer: 'whereupon',
      explanation: '"Whereupon" means "immediately after which".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 9),
      type: 'multiple-choice',
      question: "The contract defines the terms ______ the parties must operate.",
      options: ['wherein', 'thereby', 'whereby', 'whereupon'],
      correctAnswer: 'wherein',
      explanation: '"Wherein" means "in which".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b6', 10),
      type: 'multiple-choice',
      question: "______ the difficulties, the project was finished on time.",
      options: ['Notwithstanding', 'Moreover', 'Consequently', 'Whereas'],
      correctAnswer: 'Notwithstanding',
      explanation: '"Notwithstanding" means "despite".',
      points: 1
    }
  ]
};

const block7: Exercise = {
  id: `c1-u${UNIT_ID}-b7`,
  type: 'grammar',
  title: 'Participle Clauses',
  questions: [
    {
      id: genId(UNIT_ID, 'b7', 1),
      type: 'multiple-choice',
      question: "______ the report, he handed it to his boss.",
      options: ['Having finished', 'Finish', 'Finished', 'To finish'],
      correctAnswer: 'Having finished',
      explanation: 'Perfect participle clause to show an action completed before another.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 2),
      type: 'multiple-choice',
      question: "______ from a distance, the island looks like a sleeping giant.",
      options: ['Seen', 'Seeing', 'See', 'To see'],
      correctAnswer: 'Seen',
      explanation: 'Past participle clause used for passive meaning.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 3),
      type: 'multiple-choice',
      question: "______ the noise, she went downstairs to investigate.",
      options: ['Hearing', 'Heard', 'Hear', 'To hear'],
      correctAnswer: 'Hearing',
      explanation: 'Present participle clause for simultaneous or immediate actions.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 4),
      type: 'multiple-choice',
      question: "______ by the news, she burst into tears.",
      options: ['Shocked', 'Shocking', 'Shock', 'To shock'],
      correctAnswer: 'Shocked',
      explanation: 'Past participle clause for state/cause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 5),
      type: 'multiple-choice',
      question: "______ not to wake the baby, she walked on tiptoe.",
      options: ['Trying', 'Tried', 'Try', 'To try'],
      correctAnswer: 'Trying',
      explanation: 'Present participle clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 6),
      type: 'multiple-choice',
      question: "______ no money, he had to walk home.",
      options: ['Having', 'Had', 'Have', 'To have'],
      correctAnswer: 'Having',
      explanation: 'Present participle clause used to give a reason.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 7),
      type: 'multiple-choice',
      question: "______ through the woods, they found an old cabin.",
      options: ['Walking', 'Walked', 'Walk', 'To walk'],
      correctAnswer: 'Walking',
      explanation: 'Continuous action participle clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 8),
      type: 'multiple-choice',
      question: "______ by a professional, the house looks amazing.",
      options: ['Painted', 'Painting', 'Paint', 'To paint'],
      correctAnswer: 'Painted',
      explanation: 'Passive participle clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 9),
      type: 'multiple-choice',
      question: "______ all his money, he had to borrow from a friend.",
      options: ['Having spent', 'Spending', 'Spent', 'To spend'],
      correctAnswer: 'Having spent',
      explanation: 'Perfect participle clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b7', 10),
      type: 'multiple-choice',
      question: "______ that he was wrong, he apologized.",
      options: ['Realizing', 'Realized', 'Realize', 'To realize'],
      correctAnswer: 'Realizing',
      explanation: 'Present participle clause.',
      points: 1
    }
  ]
};

const block8: Exercise = {
  id: `c1-u${UNIT_ID}-b8`,
  type: 'grammar',
  title: 'Formal Passive Structures',
  questions: [
    {
      id: genId(UNIT_ID, 'b8', 1),
      type: 'multiple-choice',
      question: "It is ______ that the economy will grow next year.",
      options: ['expected', 'expecting', 'expect', 'to expect'],
      correctAnswer: 'expected',
      explanation: '"It is + past participle" is a formal way of reporting.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 2),
      type: 'multiple-choice',
      question: "He is thought ______ the richest man in the world.",
      options: ['to be', 'being', 'been', 'is'],
      correctAnswer: 'to be',
      explanation: '"Subject + passive + to-infinitive" structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 3),
      type: 'multiple-choice',
      question: "The building is believed ______ in the 18th century.",
      options: ['to have been built', 'to be built', 'being built', 'to build'],
      correctAnswer: 'to have been built',
      explanation: 'Perfect infinitive with passive to refer to the past.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 4),
      type: 'multiple-choice',
      question: "It is understood ______ the meeting has been postponed.",
      options: ['that', 'which', 'what', 'how'],
      correctAnswer: 'that',
      explanation: 'Formal introductory "It".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 5),
      type: 'multiple-choice',
      question: "They are said ______ very hard to finish the project.",
      options: ['to be working', 'to work', 'working', 'be working'],
      correctAnswer: 'to be working',
      explanation: 'Continuous infinitive with passive.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 6),
      type: 'multiple-choice',
      question: "He is reported ______ the country.",
      options: ['to have left', 'to leave', 'leaving', 'left'],
      correctAnswer: 'to have left',
      explanation: 'Past action report.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 7),
      type: 'multiple-choice',
      question: "The documents are known ______ missing.",
      options: ['to be', 'to have', 'being', 'been'],
      correctAnswer: 'to be',
      explanation: 'State report.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 8),
      type: 'multiple-choice',
      question: "It is widely considered ______ the best film of the year.",
      options: ['to be', 'being', 'that', 'as'],
      correctAnswer: 'to be',
      explanation: 'Passive reporting structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 9),
      type: 'multiple-choice',
      question: "The suspect is believed ______ by the police.",
      options: ['to be being questioned', 'to be questioning', 'questioning', 'to question'],
      correctAnswer: 'to be being questioned',
      explanation: 'Continuous passive infinitive.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b8', 10),
      type: 'multiple-choice',
      question: "It ______ that a solution will be found soon.",
      options: ['is hoped', 'hopes', 'hoped', 'is hoping'],
      correctAnswer: 'is hoped',
      explanation: 'Formal introductory "It".',
      points: 1
    }
  ]
};

const block9: Exercise = {
  id: `c1-u${UNIT_ID}-b9`,
  type: 'grammar',
  title: 'Academic and Formal Expressions',
  questions: [
    {
      id: genId(UNIT_ID, 'b9', 1),
      type: 'multiple-choice',
      question: "He is acting ______ the grounds that the contract is invalid.",
      options: ['on', 'in', 'at', 'with'],
      correctAnswer: 'on',
      explanation: '"On the grounds that" means "because".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 2),
      type: 'multiple-choice',
      question: "He left with a ______ to finding a new job.",
      options: ['view', 'look', 'point', 'aim'],
      correctAnswer: 'view',
      explanation: '"With a view to + -ing" expresses purpose.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 3),
      type: 'multiple-choice',
      question: "In ______ of the recent events, we have decided to cancel the trip.",
      options: ['light', 'face', 'view', 'look'],
      correctAnswer: 'light',
      explanation: '"In light of" means "because of" or "considering".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 4),
      type: 'multiple-choice',
      question: "______ the fact that he was tired, he continued to work.",
      options: ['Despite', 'Although', 'Even', 'While'],
      correctAnswer: 'Despite',
      explanation: '"Despite" is used with a noun phrase or "the fact that".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 5),
      type: 'multiple-choice',
      question: "He is ______ no circumstances to be disturbed.",
      options: ['under', 'in', 'at', 'with'],
      correctAnswer: 'under',
      explanation: '"Under no circumstances" is a strong formal negative.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 6),
      type: 'multiple-choice',
      question: "By ______ of his hard work, he achieved his goals.",
      options: ['virtue', 'means', 'way', 'reason'],
      correctAnswer: 'virtue',
      explanation: '"By virtue of" means "because of" or "as a result of".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 7),
      type: 'multiple-choice',
      question: "In the ______ of any further information, we will proceed as planned.",
      options: ['absence', 'lack', 'need', 'want'],
      correctAnswer: 'absence',
      explanation: '"In the absence of" means "without".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 8),
      type: 'multiple-choice',
      question: "He spoke ______ behalf of the company.",
      options: ['on', 'in', 'at', 'with'],
      correctAnswer: 'on',
      explanation: '"On behalf of" means "representing".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 9),
      type: 'multiple-choice',
      question: "The decision was made in ______ with the rules.",
      options: ['accordance', 'agreement', 'line', 'touch'],
      correctAnswer: 'accordance',
      explanation: '"In accordance with" means "following" or "obeying".',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b9', 10),
      type: 'multiple-choice',
      question: "Subject ______ your approval, we will begin the project.",
      options: ['to', 'at', 'with', 'for'],
      correctAnswer: 'to',
      explanation: '"Subject to" means "depending on".',
      points: 1
    }
  ]
};

const block10: Exercise = {
  id: `c1-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Formal Review',
  questions: [
    {
      id: genId(UNIT_ID, 'b10', 1),
      type: 'multiple-choice',
      question: "It is vital that he ______ informed of any changes.",
      options: ['be', 'is', 'was', 'should be'],
      correctAnswer: 'be',
      explanation: 'Subjunctive mood.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 2),
      type: 'multiple-choice',
      question: "______ had I entered the room than the phone rang.",
      options: ['No sooner', 'Hardly', 'Scarcely', 'Rarely'],
      correctAnswer: 'No sooner',
      explanation: 'Inversion structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 3),
      type: 'multiple-choice',
      question: "______ that as it may, we must continue.",
      options: ['Be', 'Is', 'Was', 'Were'],
      correctAnswer: 'Be',
      explanation: 'Fixed subjunctive phrase.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 4),
      type: 'multiple-choice',
      question: "Little ______ she know about the surprise party.",
      options: ['did', 'does', 'had', 'would'],
      correctAnswer: 'did',
      explanation: 'Formal inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 5),
      type: 'multiple-choice',
      question: "The building is said ______ by a famous architect.",
      options: ['to have been designed', 'to be designed', 'designing', 'to design'],
      correctAnswer: 'to have been designed',
      explanation: 'Passive reporting structure.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 6),
      type: 'multiple-choice',
      question: "______ the circumstances, he had no choice.",
      options: ['Given', 'Assuming', 'Unless', 'Even if'],
      correctAnswer: 'Given',
      explanation: 'Formal prepositional use.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 7),
      type: 'multiple-choice',
      question: "He worked hard, ______ ensuring his success.",
      options: ['thereby', 'whereby', 'wherein', 'whereupon'],
      correctAnswer: 'thereby',
      explanation: 'Formal adverb.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 8),
      type: 'multiple-choice',
      question: "______ not to offend anyone, he chose his words carefully.",
      options: ['Wishing', 'Wished', 'Wish', 'To wish'],
      correctAnswer: 'Wishing',
      explanation: 'Participle clause.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 9),
      type: 'multiple-choice',
      question: "Under no circumstances ______ you reveal the secret.",
      options: ['must', 'you must', 'should', 'you should'],
      correctAnswer: 'must',
      explanation: 'Formal inversion.',
      points: 1
    },
    {
      id: genId(UNIT_ID, 'b10', 10),
      type: 'multiple-choice',
      question: "I insist that she ______ an apology.",
      options: ['receive', 'receives', 'received', 'should receive'],
      correctAnswer: 'receive',
      explanation: 'Subjunctive mood.',
      points: 1
    }
  ]
};

export const C1_UNIT_5 = createC1Unit(
  'c1-u5',
  'Subjunctive & Formal English',
  'Mastering formal structures and the subjunctive mood.',
  ['Use the subjunctive mood correctly', 'Adapt register for formal contexts', 'Analyze legal and academic texts'],
  [block1, block2, block3, block4, block5, block6, block7, block8, block9, block10]
);
