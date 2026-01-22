// ================================================================
// PART 4: KEY WORD TRANSFORMATIONS (FCE Use of English)
// ================================================================
// Authentic B2-level transformations testing advanced structures

export interface KeyWordTransformation {
  id: string;
  sentence: string;
  keyWord: string;
  startOfAnswer: string;
  correctAnswer: string;
  acceptableVariations?: string[];
  explanation: string;
  grammaticalStructure: string;
  points: number;
}

export interface KeyWordTransformationExercise {
  id: string;
  type: 'key-word-transformation';
  title: string;
  instructions: string;
  transformations: KeyWordTransformation[];
  difficulty: 'medium' | 'hard';
  focusArea: string;
}

export const KEY_WORD_TRANSFORMATION_EXERCISES: KeyWordTransformationExercise[] = [
  {
    id: 'b2-kt-1',
    type: 'key-word-transformation',
    title: 'Key Word Transformations: Reporting Verbs & Passives',
    difficulty: 'hard',
    focusArea: 'Passive reporting structures',
    instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
    transformations: [
      {
        id: 'kt1-1',
        sentence: 'People say that the minister resigned because of the scandal.',
        keyWord: 'said',
        startOfAnswer: 'The minister',
        correctAnswer: 'is said to have resigned',
        acceptableVariations: ['is said to have'],
        explanation: 'Use passive reporting structure: be said + to have + past participle for past events',
        grammaticalStructure: 'Passive reporting verb (perfect infinitive)',
        points: 2
      },
      {
        id: 'kt1-2',
        sentence: 'They believe the missing painting is in a private collection.',
        keyWord: 'believed',
        startOfAnswer: 'The missing painting',
        correctAnswer: 'is believed to be',
        explanation: 'Use passive reporting structure: be believed + to be for present situations',
        grammaticalStructure: 'Passive reporting verb (simple infinitive)',
        points: 2
      },
      {
        id: 'kt1-3',
        sentence: 'Apparently the company made huge profits last year.',
        keyWord: 'reported',
        startOfAnswer: 'The company',
        correctAnswer: 'is reported to have made',
        acceptableVariations: ['is reported to have'],
        explanation: 'Use passive reporting structure: be reported + to have + past participle',
        grammaticalStructure: 'Passive reporting verb (perfect infinitive)',
        points: 2
      },
      {
        id: 'kt1-4',
        sentence: 'Everyone thinks she will win the award.',
        keyWord: 'expected',
        startOfAnswer: 'She',
        correctAnswer: 'is expected to win',
        explanation: 'Use passive reporting structure: be expected + to + infinitive for future events',
        grammaticalStructure: 'Passive reporting verb (simple infinitive)',
        points: 2
      },
      {
        id: 'kt1-5',
        sentence: 'People claim that this restaurant serves the best pizza in town.',
        keyWord: 'claimed',
        startOfAnswer: 'This restaurant',
        correctAnswer: 'is claimed to serve',
        explanation: 'Use passive reporting structure: be claimed + to + infinitive',
        grammaticalStructure: 'Passive reporting verb (simple infinitive)',
        points: 2
      },
      {
        id: 'kt1-6',
        sentence: 'They think the ancient city was destroyed by an earthquake.',
        keyWord: 'thought',
        startOfAnswer: 'The ancient city',
        correctAnswer: 'is thought to have been',
        acceptableVariations: ['is thought to have'],
        explanation: 'Use passive reporting structure: be thought + to have been + past participle (passive perfect infinitive)',
        grammaticalStructure: 'Passive reporting verb (perfect passive infinitive)',
        points: 2
      }
    ]
  },

  {
    id: 'b2-kt-2',
    type: 'key-word-transformation',
    title: 'Key Word Transformations: Causative Structures',
    difficulty: 'hard',
    focusArea: 'Have/Get something done',
    instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
    transformations: [
      {
        id: 'kt2-1',
        sentence: 'A professional photographer took our wedding photos.',
        keyWord: 'had',
        startOfAnswer: 'We',
        correctAnswer: 'had our wedding photos taken',
        explanation: 'Use causative: have + object + past participle (someone else did it for us)',
        grammaticalStructure: 'Causative have',
        points: 2
      },
      {
        id: 'kt2-2',
        sentence: 'Someone should check your brakes before you drive.',
        keyWord: 'get',
        startOfAnswer: 'You should',
        correctAnswer: 'get your brakes checked',
        explanation: 'Use causative: get + object + past participle (arrange for it to be done)',
        grammaticalStructure: 'Causative get',
        points: 2
      },
      {
        id: 'kt2-3',
        sentence: "The hairdresser cuts my mother's hair every month.",
        keyWord: 'has',
        startOfAnswer: 'My mother',
        correctAnswer: 'has her hair cut',
        explanation: 'Use causative: have + object + past participle (regular service)',
        grammaticalStructure: 'Causative have',
        points: 2
      },
      {
        id: 'kt2-4',
        sentence: 'I persuaded John to help me with the project.',
        keyWord: 'got',
        startOfAnswer: 'I',
        correctAnswer: 'got John to help',
        explanation: 'Use causative: get + person + to infinitive (persuade someone to do something)',
        grammaticalStructure: 'Causative get (active infinitive)',
        points: 2
      },
      {
        id: 'kt2-5',
        sentence: 'Someone stole my phone while I was on the bus.',
        keyWord: 'had',
        startOfAnswer: 'I',
        correctAnswer: 'had my phone stolen',
        explanation: 'Use causative: have + object + past participle (unfortunate event that happened to you)',
        grammaticalStructure: 'Causative have (unfortunate event)',
        points: 2
      },
      {
        id: 'kt2-6',
        sentence: 'The dentist is going to remove my wisdom tooth next week.',
        keyWord: 'having',
        startOfAnswer: "I'm",
        correctAnswer: 'having my wisdom tooth removed',
        acceptableVariations: ['having my wisdom tooth'],
        explanation: 'Use causative: be having + object + past participle (arranged future action)',
        grammaticalStructure: 'Causative have (continuous form)',
        points: 2
      }
    ]
  },

  {
    id: 'b2-kt-3',
    type: 'key-word-transformation',
    title: 'Key Word Transformations: Phrasal Verbs',
    difficulty: 'hard',
    focusArea: 'Advanced phrasal verbs',
    instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
    transformations: [
      {
        id: 'kt3-1',
        sentence: "I can't tolerate his constant complaining any longer.",
        keyWord: 'put',
        startOfAnswer: 'I can',
        correctAnswer: "can't put up with",
        acceptableVariations: ['cannot put up with'],
        explanation: 'Put up with = tolerate (separable phrasal verb)',
        grammaticalStructure: 'Phrasal verb: put up with',
        points: 2
      },
      {
        id: 'kt3-2',
        sentence: 'She invented a brilliant solution to the problem.',
        keyWord: 'came',
        startOfAnswer: 'She',
        correctAnswer: 'came up with a',
        explanation: 'Come up with = invent, think of (idea/solution)',
        grammaticalStructure: 'Phrasal verb: come up with',
        points: 2
      },
      {
        id: 'kt3-3',
        sentence: 'The meeting has been postponed until next month.',
        keyWord: 'off',
        startOfAnswer: 'The meeting has',
        correctAnswer: 'been put off until',
        explanation: 'Put off = postpone, delay',
        grammaticalStructure: 'Phrasal verb: put off (passive)',
        points: 2
      },
      {
        id: 'kt3-4',
        sentence: 'I need to find the meaning of this word.',
        keyWord: 'look',
        startOfAnswer: 'I need',
        correctAnswer: 'to look up this',
        acceptableVariations: ['to look this word up'],
        explanation: 'Look up = search for information (in dictionary, database, etc.)',
        grammaticalStructure: 'Phrasal verb: look up',
        points: 2
      },
      {
        id: 'kt3-5',
        sentence: 'My car stopped working on the way to work.',
        keyWord: 'broke',
        startOfAnswer: 'My car',
        correctAnswer: 'broke down on the',
        explanation: 'Break down = stop working (for machines/vehicles)',
        grammaticalStructure: 'Phrasal verb: break down',
        points: 2
      },
      {
        id: 'kt3-6',
        sentence: 'She resembles her mother in many ways.',
        keyWord: 'takes',
        startOfAnswer: 'She',
        correctAnswer: 'takes after her mother',
        explanation: 'Take after = resemble (a family member)',
        grammaticalStructure: 'Phrasal verb: take after',
        points: 2
      }
    ]
  },

  {
    id: 'b2-kt-4',
    type: 'key-word-transformation',
    title: 'Key Word Transformations: Conditional Structures',
    difficulty: 'hard',
    focusArea: 'Wish, If only, It\'s time, I\'d rather',
    instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
    transformations: [
      {
        id: 'kt4-1',
        sentence: "I regret not studying harder for the exam.",
        keyWord: 'wish',
        startOfAnswer: 'I',
        correctAnswer: 'wish I had studied',
        explanation: 'Use wish + past perfect to express regret about the past',
        grammaticalStructure: 'Wish + past perfect (past regret)',
        points: 2
      },
      {
        id: 'kt4-2',
        sentence: 'The government should take action on climate change immediately.',
        keyWord: 'time',
        startOfAnswer: 'It',
        correctAnswer: "is time the government took",
        acceptableVariations: ["'s time the government took"],
        explanation: 'Use It\'s time + past simple (subjunctive) to express that something should happen now',
        grammaticalStructure: "It's time + past subjunctive",
        points: 2
      },
      {
        id: 'kt4-3',
        sentence: 'I would prefer to stay home tonight rather than go out.',
        keyWord: 'rather',
        startOfAnswer: 'I',
        correctAnswer: 'would rather stay home',
        acceptableVariations: ["'d rather stay home"],
        explanation: "Use would rather + infinitive without 'to' to express preference",
        grammaticalStructure: 'Would rather + bare infinitive',
        points: 2
      },
      {
        id: 'kt4-4',
        sentence: "I'm sorry I didn't listen to your advice.",
        keyWord: 'only',
        startOfAnswer: 'If',
        correctAnswer: 'only I had listened',
        explanation: 'Use If only + past perfect to express strong regret about the past',
        grammaticalStructure: 'If only + past perfect',
        points: 2
      },
      {
        id: 'kt4-5',
        sentence: 'I would prefer you not to tell anyone about this.',
        keyWord: 'rather',
        startOfAnswer: 'I',
        correctAnswer: "would rather you didn't",
        acceptableVariations: ["'d rather you didn't", "would rather you did not"],
        explanation: 'Use would rather + subject + past simple when expressing preference about someone else\'s actions',
        grammaticalStructure: 'Would rather + subject + past simple',
        points: 2
      },
      {
        id: 'kt4-6',
        sentence: "It's unfortunate that we live so far from the beach.",
        keyWord: 'wish',
        startOfAnswer: 'I',
        correctAnswer: "wish we didn't live",
        acceptableVariations: ['wish we did not live'],
        explanation: 'Use wish + past simple to express desire for a different present situation',
        grammaticalStructure: 'Wish + past simple (present wish)',
        points: 2
      }
    ]
  },

  {
    id: 'b2-kt-5',
    type: 'key-word-transformation',
    title: 'Key Word Transformations: Negative Inversion',
    difficulty: 'hard',
    focusArea: 'Inversion after negative adverbials',
    instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
    transformations: [
      {
        id: 'kt5-1',
        sentence: 'I have never seen such a beautiful sunset.',
        keyWord: 'never',
        startOfAnswer: 'Never',
        correctAnswer: 'have I seen such',
        explanation: 'After negative adverbials at the start of a sentence, use inversion (auxiliary + subject)',
        grammaticalStructure: 'Negative inversion: Never + aux + subject',
        points: 2
      },
      {
        id: 'kt5-2',
        sentence: 'She had barely finished her presentation when the fire alarm went off.',
        keyWord: 'had',
        startOfAnswer: 'Barely',
        correctAnswer: 'had she finished her',
        explanation: 'After "barely" at the start, use inversion: barely + had + subject',
        grammaticalStructure: 'Negative inversion: Barely + aux + subject',
        points: 2
      },
      {
        id: 'kt5-3',
        sentence: 'I realized the importance of the decision only later.',
        keyWord: 'only',
        startOfAnswer: 'Only',
        correctAnswer: 'later did I realize',
        explanation: 'After "only + time expression" at the start, use inversion: only + time + did + subject',
        grammaticalStructure: 'Negative inversion: Only + time + aux + subject',
        points: 2
      },
      {
        id: 'kt5-4',
        sentence: 'The company has rarely faced such a serious crisis.',
        keyWord: 'rarely',
        startOfAnswer: 'Rarely',
        correctAnswer: 'has the company faced',
        explanation: 'After "rarely" at the start, use inversion: rarely + has + subject',
        grammaticalStructure: 'Negative inversion: Rarely + aux + subject',
        points: 2
      },
      {
        id: 'kt5-5',
        sentence: 'She not only speaks French fluently but also writes it perfectly.',
        keyWord: 'only',
        startOfAnswer: 'Not only',
        correctAnswer: 'does she speak French',
        explanation: 'After "not only" at the start, use inversion: not only + does + subject + verb',
        grammaticalStructure: 'Negative inversion: Not only + aux + subject',
        points: 2
      },
      {
        id: 'kt5-6',
        sentence: 'He had no sooner arrived home than it started raining.',
        keyWord: 'sooner',
        startOfAnswer: 'No sooner',
        correctAnswer: 'had he arrived home',
        explanation: 'After "no sooner" at the start, use inversion: no sooner + had + subject',
        grammaticalStructure: 'Negative inversion: No sooner + aux + subject',
        points: 2
      }
    ]
  },

  {
    id: 'b2-kt-6',
    type: 'key-word-transformation',
    title: 'Key Word Transformations: Cleft Sentences',
    difficulty: 'hard',
    focusArea: 'It was...that/who, What...is/was',
    instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
    transformations: [
      {
        id: 'kt6-1',
        sentence: 'The noise from the construction site annoyed me most.',
        keyWord: 'what',
        startOfAnswer: 'What',
        correctAnswer: 'annoyed me most was',
        explanation: 'Use cleft sentence: What + subject + verb + is/was to emphasize the subject',
        grammaticalStructure: 'Cleft sentence: What...was',
        points: 2
      },
      {
        id: 'kt6-2',
        sentence: 'Sarah discovered the error, not John.',
        keyWord: 'who',
        startOfAnswer: 'It',
        correctAnswer: 'was Sarah who discovered',
        explanation: 'Use cleft sentence: It was + person + who to emphasize who did the action',
        grammaticalStructure: 'Cleft sentence: It was...who',
        points: 2
      },
      {
        id: 'kt6-3',
        sentence: 'I need a good night\'s sleep more than anything.',
        keyWord: 'what',
        startOfAnswer: 'What',
        correctAnswer: 'I need most is',
        acceptableVariations: ['I need is a'],
        explanation: 'Use cleft sentence: What + subject + verb + is to emphasize what is needed',
        grammaticalStructure: 'Cleft sentence: What...is',
        points: 2
      },
      {
        id: 'kt6-4',
        sentence: 'They held the conference in Berlin last year.',
        keyWord: 'where',
        startOfAnswer: 'It',
        correctAnswer: 'was in Berlin where',
        acceptableVariations: ['was Berlin where they'],
        explanation: 'Use cleft sentence: It was + place + where to emphasize location',
        grammaticalStructure: 'Cleft sentence: It was...where',
        points: 2
      },
      {
        id: 'kt6-5',
        sentence: 'Her dedication to the project impressed everyone.',
        keyWord: 'what',
        startOfAnswer: 'What',
        correctAnswer: 'impressed everyone was her',
        explanation: 'Use cleft sentence: What + verb + object + was to emphasize what caused the impression',
        grammaticalStructure: 'Cleft sentence: What...was',
        points: 2
      },
      {
        id: 'kt6-6',
        sentence: 'The team won the championship in 2019, not 2020.',
        keyWord: 'when',
        startOfAnswer: 'It',
        correctAnswer: 'was in 2019 when',
        acceptableVariations: ['was 2019 when the'],
        explanation: 'Use cleft sentence: It was + time + when to emphasize when something happened',
        grammaticalStructure: 'Cleft sentence: It was...when',
        points: 2
      }
    ]
  },

  {
    id: 'b2-kt-7',
    type: 'key-word-transformation',
    title: 'Key Word Transformations: Mixed Advanced Structures',
    difficulty: 'hard',
    focusArea: 'Mixed B2-level structures',
    instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
    transformations: [
      {
        id: 'kt7-1',
        sentence: 'Despite his injury, he continued playing.',
        keyWord: 'spite',
        startOfAnswer: 'In',
        correctAnswer: 'spite of his injury',
        explanation: 'Use "in spite of + noun" (equivalent to despite + noun)',
        grammaticalStructure: 'In spite of + noun',
        points: 2
      },
      {
        id: 'kt7-2',
        sentence: 'The project was so complex that nobody could complete it.',
        keyWord: 'too',
        startOfAnswer: 'The project',
        correctAnswer: 'was too complex to',
        acceptableVariations: ['was too complex for'],
        explanation: 'Use too + adjective + to infinitive to express excessive degree',
        grammaticalStructure: 'Too...to structure',
        points: 2
      },
      {
        id: 'kt7-3',
        sentence: "Unless we leave now, we'll miss the train.",
        keyWord: 'if',
        startOfAnswer: 'We',
        correctAnswer: "will miss the train if",
        acceptableVariations: ["'ll miss the train if"],
        explanation: 'Unless = if not. Convert to positive conditional',
        grammaticalStructure: 'First conditional (unless → if...not)',
        points: 2
      },
      {
        id: 'kt7-4',
        sentence: 'I suggest that we postpone the meeting until next week.',
        keyWord: 'off',
        startOfAnswer: 'I suggest',
        correctAnswer: 'putting the meeting off',
        acceptableVariations: ['putting off the meeting'],
        explanation: 'Use suggest + gerund form. Put off = postpone',
        grammaticalStructure: 'Suggest + gerund + phrasal verb',
        points: 2
      },
      {
        id: 'kt7-5',
        sentence: 'She managed to finish the report despite being tired.',
        keyWord: 'succeeded',
        startOfAnswer: 'She',
        correctAnswer: 'succeeded in finishing the',
        explanation: 'Succeed in + gerund = manage to + infinitive',
        grammaticalStructure: 'Succeed in + gerund',
        points: 2
      },
      {
        id: 'kt7-6',
        sentence: 'The film was less interesting than I expected.',
        keyWord: 'as',
        startOfAnswer: 'The film',
        correctAnswer: "wasn't as interesting as",
        acceptableVariations: ['was not as interesting as'],
        explanation: 'Use not as...as structure for comparative meaning (less than expected)',
        grammaticalStructure: 'Not as...as (comparative)',
        points: 2
      }
    ]
  },

  {
    id: 'b2-kt-8',
    type: 'key-word-transformation',
    title: 'Key Word Transformations: Modals and Semi-Modals',
    difficulty: 'medium',
    focusArea: 'Modal verbs and their alternatives',
    instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given. Do not change the word given. You must use between two and five words, including the word given.',
    transformations: [
      {
        id: 'kt8-1',
        sentence: "It isn't necessary for you to attend the meeting.",
        keyWord: 'have',
        startOfAnswer: 'You',
        correctAnswer: "don't have to attend",
        acceptableVariations: ['do not have to attend'],
        explanation: "Don't have to = not necessary (lack of obligation)",
        grammaticalStructure: "Don't have to (lack of necessity)",
        points: 2
      },
      {
        id: 'kt8-2',
        sentence: 'I am certain that she forgot about our appointment.',
        keyWord: 'must',
        startOfAnswer: 'She',
        correctAnswer: 'must have forgotten about',
        explanation: 'Must have + past participle = certain deduction about the past',
        grammaticalStructure: 'Must have + past participle (deduction)',
        points: 2
      },
      {
        id: 'kt8-3',
        sentence: 'Perhaps they decided to take a different route.',
        keyWord: 'may',
        startOfAnswer: 'They',
        correctAnswer: 'may have decided to',
        explanation: 'May have + past participle = possibility in the past',
        grammaticalStructure: 'May have + past participle (possibility)',
        points: 2
      },
      {
        id: 'kt8-4',
        sentence: "It would have been better if you'd told me earlier.",
        keyWord: 'should',
        startOfAnswer: 'You',
        correctAnswer: 'should have told me',
        explanation: 'Should have + past participle = criticism of past action (you didn\'t do it)',
        grammaticalStructure: 'Should have + past participle (criticism)',
        points: 2
      },
      {
        id: 'kt8-5',
        sentence: 'Smoking is prohibited in this area.',
        keyWord: 'allowed',
        startOfAnswer: 'You',
        correctAnswer: "aren't allowed to smoke",
        acceptableVariations: ['are not allowed to smoke'],
        explanation: 'Not allowed to = prohibited (passive form showing prohibition)',
        grammaticalStructure: 'Be (not) allowed to (permission/prohibition)',
        points: 2
      },
      {
        id: 'kt8-6',
        sentence: 'The instructions say that we must submit the form by Friday.',
        keyWord: 'required',
        startOfAnswer: 'We',
        correctAnswer: 'are required to submit',
        explanation: 'Be required to = must (formal obligation)',
        grammaticalStructure: 'Be required to (obligation)',
        points: 2
      }
    ]
  }
];

// Summary
export const KEY_WORD_TRANSFORMATION_SUMMARY = {
  total: 8,
  implemented: 8,
  transformationsPerExercise: 6,
  totalTransformations: 48,
  structures: [
    'Passive reporting verbs',
    'Causative have/get',
    'Phrasal verbs',
    'Wish/If only/It\'s time',
    'Negative inversion',
    'Cleft sentences',
    'Mixed advanced structures',
    'Modal verbs and alternatives'
  ]
};
