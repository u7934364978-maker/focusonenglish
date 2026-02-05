// ===============================================
// MÓDULO 1, LECCIÓN 2: OPENING THE NEGOTIATION
// ===============================================

import { Exercise } from './exercise-types';

// 1-5: INITIAL FOUNDATION (Existing + expanded)
export const B2_NEG_M1_L2_SPEAKING_1: Exercise = {
  id: 'b2-neg-m1-l2-speaking-1',
  type: 'speaking-analysis',
  title: 'Strategic Openings',
  explanation: `The opening sets the tone. It's about rapport, agenda, and positioning.
  1. **Agenda:** What we discuss.
  2. **Rapport:** Building trust.
  3. **Positioning:** Stating your start point.`,
  questions: [
    {
      id: 'b2-neg-m1-l2-s1-q1',
      type: 'multiple-choice',
      question: 'Which phrase is best for proposing an agenda?',
      options: [
        'Tell me what you want now.',
        'I suggest we start by reviewing the timeline, then move to pricing.',
        'We are here to sign the contract immediately.',
        'Why are you so late to this meeting?'
      ],
      correctAnswer: 'I suggest we start by reviewing the timeline, then move to pricing.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_LISTENING_1: Exercise = {
  id: 'b2-neg-m1-l2-listening-1',
  type: 'listening',
  title: 'Analyzing Opening Statements',
  audioUrl: '/audio/negotiations/b2-opening-scenario.mp3',
  transcript: `Negotiator A: Good morning. Thank you for making the time. I've prepared a brief agenda. I suggest we start by reviewing technical specs, then timeline, and finally pricing.`,
  questions: [
    {
      id: 'b2-neg-m1-l2-l1-q1',
      type: 'multiple-choice',
      question: 'What is the speaker\'s primary goal?',
      options: ['To demand a lower price', 'To establish a collaborative atmosphere', 'To complain', 'To end the meeting'],
      correctAnswer: 'To establish a collaborative atmosphere',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_LISTENING_2: Exercise = {
  id: 'b2-neg-m1-l2-listening-2',
  type: 'listening',
  title: 'Handling a Hostile Opening',
  audioUrl: '/audio/negotiations/b2-hostile-opening.mp3',
  transcript: `Counterparty: We need a 20% price cut just to keep talking.
  Negotiator: I hear your concerns. However, I suggest we stick to the agenda – starting with technical requirements.`,
  questions: [
    {
      id: 'b2-neg-m1-l2-l2-q1',
      type: 'multiple-choice',
      question: 'How does the negotiator respond?',
      options: ['Apologizes', 'Ends the meeting', 'Acknowledges and redirects to the agenda', 'Becomes aggressive'],
      correctAnswer: 'Acknowledges and redirects to the agenda',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_SPEAKING_2: Exercise = {
  id: 'b2-neg-m1-l2-speaking-2',
  type: 'speaking',
  title: 'Proposing the Agenda',
  prompt: 'Open the meeting. Thank them and propose an agenda: 1) Technical, 2) Timeline, 3) Budget.',
  expectedResponse: 'Thank you for meeting with us. I suggest we start with the technical review, then move to the timeline, and finally discuss the budget.',
  targetWords: ['suggest', 'timeline', 'budget', 'technical', 'agenda'],
  timeLimit: 60
};

export const B2_NEG_M1_L2_VOCAB_1: Exercise = {
  id: 'b2-neg-m1-l2-vocab-1',
  type: 'vocabulary',
  title: 'Establishing Rapport',
  explanation: `Small talk isn't just "talk". It's building a relationship.
  1. **Rapport:** A close and harmonious relationship.`,
  questions: [
    {
      id: 'v1',
      type: 'multiple-choice',
      question: 'Building "rapport" means...',
      options: ['Saving money', 'Building trust and relationship', 'Winning an argument', 'Writing a report'],
      correctAnswer: 'Building trust and relationship',
      points: 2
    }
  ]
};

// 6-10: VOCABULARY EXPANSION
export const B2_NEG_M1_L2_VOCAB_2: Exercise = {
  id: 'b2-neg-m1-l2-vocab-2',
  type: 'vocabulary',
  title: 'The Agenda Items',
  questions: [
    {
      id: 'v2',
      type: 'multiple-choice',
      question: 'A list of items to be discussed in a meeting is an...',
      options: ['Agenda', 'Archive', 'Account', 'Analysis'],
      correctAnswer: 'Agenda',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_VOCAB_3: Exercise = {
  id: 'b2-neg-m1-l2-vocab-3',
  type: 'vocabulary',
  title: 'Opening Statements',
  questions: [
    {
      id: 'v3',
      type: 'multiple-choice',
      question: 'The first formal speech in a negotiation is the...',
      options: ['Opening statement', 'Closing remark', 'Counter-offer', 'Minutes'],
      correctAnswer: 'Opening statement',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_VOCAB_4: Exercise = {
  id: 'b2-neg-m1-l2-vocab-4',
  type: 'vocabulary',
  title: 'Professional Tone',
  questions: [
    {
      id: 'v4',
      type: 'multiple-choice',
      question: 'A "collaborative" tone implies...',
      options: ['Working together', 'Fighting', 'Ignoring', 'Selling'],
      correctAnswer: 'Working together',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_VOCAB_5: Exercise = {
  id: 'b2-neg-m1-l2-vocab-5',
  type: 'vocabulary',
  title: 'Indirect Language',
  questions: [
    {
      id: 'v5',
      type: 'multiple-choice',
      question: 'Being "diplomatic" means...',
      options: ['Being rude', 'Being tactful and professional', 'Being slow', 'Being expensive'],
      correctAnswer: 'Being tactful and professional',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_VOCAB_6: Exercise = {
  id: 'b2-neg-m1-l2-vocab-6',
  type: 'vocabulary',
  title: 'Protocol and Etiquette',
  questions: [
    {
      id: 'v6',
      type: 'multiple-choice',
      question: 'The official system of rules for behavior is...',
      options: ['Protocol', 'Project', 'Protest', 'Product'],
      correctAnswer: 'Protocol',
      points: 2
    }
  ]
};

// 11-15: GRAMMAR (Polite Requests & Indirect Questions)
export const B2_NEG_M1_L2_GRAMMAR_1: Exercise = {
  id: 'b2-neg-m1-l2-grammar-1',
  type: 'grammar',
  title: 'Indirect Questions',
  explanation: `Indirect questions are more polite in business.
  Direct: *What is your budget?*
  Indirect: *Could you tell me what your budget is?*`,
  questions: [
    {
      id: 'g1',
      type: 'multiple-choice',
      question: 'Which is more polite?',
      options: [
        'When do you want to start?',
        'I was wondering if you could tell me when you want to start.',
        'Tell me the start date.',
        'Why aren\'t you starting?'
      ],
      correctAnswer: 'I was wondering if you could tell me when you want to start.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_GRAMMAR_2: Exercise = {
  id: 'b2-neg-m1-l2-grammar-2',
  type: 'grammar',
  title: 'Polite Modal Verbs',
  explanation: `Use "Could", "Would", and "May" for openings.`,
  questions: [
    {
      id: 'g2',
      type: 'multiple-choice',
      question: '___ we start by reviewing the agenda?',
      options: ['Shall', 'Will', 'Are', 'Do'],
      correctAnswer: 'Shall',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_GRAMMAR_3: Exercise = {
  id: 'b2-neg-m1-l2-grammar-3',
  type: 'grammar',
  title: 'Softening Phrases',
  explanation: `Use "I'm afraid", "To be honest", "Actually".`,
  questions: [
    {
      id: 'g3',
      type: 'multiple-choice',
      question: '___, we can\'t accept that price point today.',
      options: ['Actually', 'Unfortunately', 'Suddenly', 'Quickly'],
      correctAnswer: 'Unfortunately',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_GRAMMAR_4: Exercise = {
  id: 'b2-neg-m1-l2-grammar-4',
  type: 'grammar',
  title: 'The Gerund after "Suggest"',
  questions: [
    {
      id: 'g4',
      type: 'multiple-choice',
      question: 'I suggest ___ (start) with the pricing.',
      options: ['starting', 'to start', 'start', 'started'],
      correctAnswer: 'starting',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_GRAMMAR_5: Exercise = {
  id: 'b2-neg-m1-l2-grammar-5',
  type: 'grammar',
  title: 'Looking Forward to + -ing',
  questions: [
    {
      id: 'g5',
      type: 'multiple-choice',
      question: 'We look forward to ___ (work) with you.',
      options: ['working', 'work', 'worked', 'to work'],
      correctAnswer: 'working',
      points: 2
    }
  ]
};

// 16-20: READING SNIPPETS
export const B2_NEG_M1_L2_READING_1: Exercise = {
  id: 'b2-neg-m1-l2-reading-1',
  type: 'reading',
  title: 'The First Five Minutes',
  text: `The first five minutes of a negotiation often determine the final outcome. Psychologists call this the 'anchoring effect'. If the opening is aggressive, the other side will likely respond with defensiveness. If it is collaborative, they are more likely to share information.`,
  questions: [
    {
      id: 'r1',
      type: 'multiple-choice',
      question: 'What is the "anchoring effect" in this context?',
      options: ['A boat safety feature', 'The way the opening sets the tone', 'A price discount', 'A legal clause'],
      correctAnswer: 'The way the opening sets the tone',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_READING_2: Exercise = {
  id: 'b2-neg-m1-l2-reading-2',
  type: 'reading',
  title: 'Small Talk Strategy',
  text: `Small talk is not a waste of time. It's an opportunity to discover 'hidden interests'. For example, if a negotiator mentions their family's love for travel, they might value flexible delivery schedules over a 2% price cut.`,
  questions: [
    {
      id: 'r2',
      type: 'true-false',
      question: 'Small talk can reveal useful business information.',
      correctAnswer: 'true',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_READING_3: Exercise = {
  id: 'b2-neg-m1-l2-reading-3',
  type: 'reading',
  title: 'Agenda Control',
  text: `The party that sets the agenda often controls the flow of the meeting. By proposing the order of topics, you can ensure that your strongest points are discussed early and that potential 'deal-breakers' are handled when rapport is high.`,
  questions: [
    {
      id: 'r3',
      type: 'multiple-choice',
      question: 'When should "deal-breakers" be discussed according to the text?',
      options: ['First', 'Last', 'When rapport is high', 'Never'],
      correctAnswer: 'When rapport is high',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_READING_4: Exercise = {
  id: 'b2-neg-m1-l2-reading-4',
  type: 'reading',
  title: 'Opening Positioning',
  text: `Some experts suggest making the first offer to set a high 'anchor'. Others suggest waiting for the other side to reveal their hand. At B2 level, the focus is on justifying whatever position you take with objective data.`,
  questions: [
    {
      id: 'r4',
      type: 'multiple-choice',
      question: 'What is the focus at B2 level negotiations?',
      options: ['Shouting', 'Justifying positions with data', 'Crying', 'Giving up'],
      correctAnswer: 'Justifying positions with data',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_READING_5: Exercise = {
  id: 'b2-neg-m1-l2-reading-5',
  type: 'reading',
  title: 'The Role of Empathy',
  text: `Tactical empathy means acknowledging the other person's perspective without necessarily agreeing with it. Phrases like "It sounds like you are concerned about the timeline" show you are listening, which lowers tension.`,
  questions: [
    {
      id: 'r5',
      type: 'multiple-choice',
      question: 'Does tactical empathy require you to agree with the counterparty?',
      options: ['Yes', 'No', 'Sometimes', 'Only if they pay'],
      correctAnswer: 'No',
      points: 2
    }
  ]
};

// 21-25: MULTIPLE CHOICE CLOZE
export const B2_NEG_M1_L2_CLOZE_1: Exercise = {
  id: 'b2-neg-m1-l2-cloze-1',
  type: 'multiple-choice-cloze',
  title: 'Setting the Scene',
  text: `Before we (1)___ into the details, I'd (2)___ to thank you for coming. We (3)___ our partnership very highly.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['dive', 'drive', 'swim', 'walk'],
      correctAnswer: 'dive',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['like', 'love', 'want', 'wish'],
      correctAnswer: 'like',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['value', 'validate', 'view', 'visit'],
      correctAnswer: 'value',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M1_L2_CLOZE_2: Exercise = {
  id: 'b2-neg-m1-l2-cloze-2',
  type: 'multiple-choice-cloze',
  title: 'Agenda Approval',
  text: `Does the (1)___ look acceptable to you? I've (2)___ the main points for (3)___ review.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['agenda', 'agent', 'agency', 'age'],
      correctAnswer: 'agenda',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['outlined', 'outlied', 'outside', 'outdone'],
      correctAnswer: 'outlined',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['your', 'you', 'yours', 'yourselves'],
      correctAnswer: 'your',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M1_L2_CLOZE_3: Exercise = {
  id: 'b2-neg-m1-l2-cloze-3',
  type: 'multiple-choice-cloze',
  title: 'Rapport Building',
  text: `How was your (1)___? I (2)___ it was a bit (3)___ due to the storm.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['flight', 'fly', 'flow', 'flew'],
      correctAnswer: 'flight',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['heard', 'hired', 'herded', 'hard'],
      correctAnswer: 'heard',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['delayed', 'denied', 'delayed', 'decayed'],
      correctAnswer: 'delayed',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M1_L2_CLOZE_4: Exercise = {
  id: 'b2-neg-m1-l2-cloze-4',
  type: 'multiple-choice-cloze',
  title: 'Formal Openings',
  text: `(1)___ we begin, I'd like to introduce our (2)___ manager, who will be (3)___ us today.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['Shall', 'Will', 'Must', 'Can'],
      correctAnswer: 'Shall',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['senior', 'sooner', 'singer', 'senate'],
      correctAnswer: 'senior',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['joining', 'joking', 'jumping', 'judging'],
      correctAnswer: 'joining',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

export const B2_NEG_M1_L2_CLOZE_5: Exercise = {
  id: 'b2-neg-m1-l2-cloze-5',
  type: 'multiple-choice-cloze',
  title: 'Tone and Style',
  text: `It's important to (1)___ a professional (2)___ throughout the (3)___.`,
  questions: [
    {
      id: 'c' + 1,
      gapNumber: 1,
      options: ['maintain', 'mountain', 'mention', 'mission'],
      correctAnswer: 'maintain',
      explanation: 'Select the most appropriate word for gap 1.',
      points: 2
    },
    {
      id: 'c' + 2,
      gapNumber: 2,
      options: ['tone', 'ten', 'tin', 'ton'],
      correctAnswer: 'tone',
      explanation: 'Select the most appropriate word for gap 2.',
      points: 2
    },
    {
      id: 'c' + 3,
      gapNumber: 3,
      options: ['session', 'section', 'season', 'service'],
      correctAnswer: 'session',
      explanation: 'Select the most appropriate word for gap 3.',
      points: 2
    },
  ]
};

// 26-30: KEY WORD TRANSFORMATIONS
export const B2_NEG_M1_L2_TRANS_1: Exercise = {
  id: 'b2-neg-m1-l2-trans-1',
  type: 'key-word-transformation',
  title: 'Polite Request Transformation',
  questions: [
    {
      id: 't1',
      type: 'fill-blank',
      question: 'What is the price? (TELL)\nCould you ___ what the price is?',
      correctAnswer: 'tell me',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_TRANS_2: Exercise = {
  id: 'b2-neg-m1-l2-trans-2',
  type: 'key-word-transformation',
  title: 'Agenda Transformation',
  questions: [
    {
      id: 't2',
      type: 'fill-blank',
      question: 'Let\'s start with the agenda. (SUGGEST)\nI ___ with the agenda.',
      correctAnswer: 'suggest starting',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_TRANS_3: Exercise = {
  id: 'b2-neg-m1-l2-trans-3',
  type: 'key-word-transformation',
  title: 'Rapport Transformation',
  questions: [
    {
      id: 't3',
      type: 'fill-blank',
      question: 'It\'s important to build a good relationship. (RAPPORT)\nBuilding ___ is essential.',
      correctAnswer: 'rapport',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_TRANS_4: Exercise = {
  id: 'b2-neg-m1-l2-trans-4',
  type: 'key-word-transformation',
  title: 'Tone Transformation',
  questions: [
    {
      id: 't4',
      type: 'fill-blank',
      question: 'The meeting was very professional. (TONE)\nThe ___ professional.',
      correctAnswer: 'tone of the meeting was',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_TRANS_5: Exercise = {
  id: 'b2-neg-m1-l2-trans-5',
  type: 'key-word-transformation',
  title: 'Indirect Opening',
  questions: [
    {
      id: 't5',
      type: 'fill-blank',
      question: 'Is it okay to start? (MIND)\nWould ___ starting?',
      correctAnswer: 'you mind',
      points: 2
    }
  ]
};

// 31-35: LISTENING COMPREHENSION (SHORT)
export const B2_NEG_M1_L2_LIST_3: Exercise = {
  id: 'b2-neg-m1-l2-list-3',
  type: 'listening',
  title: 'Cultural Opening',
  transcript: `Negotiator: In our culture, we value a personal connection. How about we grab a coffee before discussing the contract?`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What is the speaker trying to do?',
      options: ['Avoid work', 'Build rapport', 'Lower the price', 'End the meeting'],
      correctAnswer: 'Build rapport',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_LIST_4: Exercise = {
  id: 'b2-neg-m1-l2-list-4',
  type: 'listening',
  title: 'Agenda Feedback',
  transcript: `Client: The agenda looks fine, but I'd like to move the delivery timeline to the top.`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What change does the client want?',
      options: ['New items', 'A different order', 'A shorter meeting', 'A lower price'],
      correctAnswer: 'A different order',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_LIST_5: Exercise = {
  id: 'b2-neg-m1-l2-list-5',
  type: 'listening',
  title: 'Aggressive Counterparty',
  transcript: `Aggressive Rep: Look, let's skip the small talk. What's your best number?`,
  questions: [
    {
      id: 'q',
      type: 'true-false',
      question: 'The speaker wants to build rapport.',
      correctAnswer: 'false',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_LIST_6: Exercise = {
  id: 'b2-neg-m1-l2-list-6',
  type: 'listening',
  title: 'The Intro',
  transcript: `Speaker: I'd like to introduce Sarah, our lead engineer, who will be joining us for the technical part of the session.`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What is Sarah\'s role?',
      options: ['Sales', 'Finance', 'Engineering', 'Marketing'],
      correctAnswer: 'Engineering',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_LIST_7: Exercise = {
  id: 'b2-neg-m1-l2-list-7',
  type: 'listening',
  title: 'Polite Redirect',
  transcript: `Negotiator: That's a valid point, but I was wondering if we could save the pricing discussion for after the technical review?`,
  questions: [
    {
      id: 'q',
      type: 'multiple-choice',
      question: 'What is the negotiator doing?',
      options: ['Accepting the price', 'Deferring a topic', 'Ending the call', 'Shouting'],
      correctAnswer: 'Deferring a topic',
      points: 2
    }
  ]
};

// 36-40: GAPPED TEXT (Sentence logic)
export const B2_NEG_M1_L2_GAP_1: Exercise = {
  id: 'b2-neg-m1-l2-gap-1',
  type: 'grammar',
  title: 'Opening Phrasals',
  questions: [
    {
      id: 'g1',
      type: 'fill-blank',
      question: 'Shall we ___ down to business?',
      correctAnswer: 'get',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_GAP_2: Exercise = {
  id: 'b2-neg-m1-l2-gap-2',
  type: 'grammar',
  title: 'Polite Opening',
  questions: [
    {
      id: 'g2',
      type: 'fill-blank',
      question: 'I would like to ___ by thanking you for your time.',
      correctAnswer: 'start',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_GAP_3: Exercise = {
  id: 'b2-neg-m1-l2-gap-3',
  type: 'grammar',
  title: 'Agenda Fill',
  questions: [
    {
      id: 'g3',
      type: 'fill-blank',
      question: 'I suggest ___ at the delivery schedule first.',
      correctAnswer: 'looking',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_GAP_4: Exercise = {
  id: 'b2-neg-m1-l2-gap-4',
  type: 'grammar',
  title: 'Rapport Fill',
  questions: [
    {
      id: 'g4',
      type: 'fill-blank',
      question: 'It\'s nice to finally meet you in ___ after all these emails.',
      correctAnswer: 'person',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_GAP_5: Exercise = {
  id: 'b2-neg-m1-l2-gap-5',
  type: 'grammar',
  title: 'Tone Fill',
  questions: [
    {
      id: 'g5',
      type: 'fill-blank',
      question: 'We should aim for a ___ win outcome today.',
      correctAnswer: 'win',
      points: 2
    }
  ]
};

// 41-45: SITUATIONAL DISCOVERY
export const B2_NEG_M1_L2_SIT_1: Exercise = {
  id: 'b2-neg-m1-l2-sit-1',
  type: 'vocabulary',
  title: 'Scenario: The Early Bird',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'You arrive 15 minutes early and only the receptionist is there. What do you do?',
      options: [
    'Complain that the boss is late',
    'Politely wait and use the time to review your BATNA',
    'Walk into the main office uninvited',
    'Leave and come back exactly on time'
  ],
      correctAnswer: 'Politely wait and use the time to review your BATNA',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_SIT_2: Exercise = {
  id: 'b2-neg-m1-l2-sit-2',
  type: 'vocabulary',
  title: 'Scenario: Small Talk Silence',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'The small talk has stopped and everyone is looking at you. How do you transition?',
      options: [
    'Say something about the weather again',
    'Say: "Well, shall we get down to business? I\'ve prepared an agenda..."',
    'Start singing',
    'Wait until they speak'
  ],
      correctAnswer: 'Say: "Well, shall we get down to business? I\'ve prepared an agenda..."',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_SIT_3: Exercise = {
  id: 'b2-neg-m1-l2-sit-3',
  type: 'vocabulary',
  title: 'Scenario: Agenda Disagreement',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'They want to discuss price first, but you want to discuss technical specs first. What do you say?',
      options: [
    'No, we discuss tech first.',
    'I understand price is important, but I suggest we clarify the technical requirements first so the price makes more sense.',
    'Fine, whatever you want.',
    'Why are you so obsessed with money?'
  ],
      correctAnswer: 'I understand price is important, but I suggest we clarify the technical requirements first so the price makes more sense.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_SIT_4: Exercise = {
  id: 'b2-neg-m1-l2-sit-4',
  type: 'vocabulary',
  title: 'Scenario: The New Team Member',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'A new person has joined their side. What is your first action?',
      options: [
    'Ignore them',
    'Politely ask for an introduction and their role in the project',
    'Tell them they are not allowed to be here',
    'Ask them for coffee'
  ],
      correctAnswer: 'Politely ask for an introduction and their role in the project',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_SIT_5: Exercise = {
  id: 'b2-neg-m1-l2-sit-5',
  type: 'vocabulary',
  title: 'Scenario: Technical Glitch',
  questions: [
    {
      id: 'q1',
      type: 'multiple-choice',
      question: 'Your presentation screen isn\'t working. How do you handle it?',
      options: [
    'Panic and end the meeting',
    'Blame the IT guy',
    'Apologize calmly and suggest moving to the paper copies while you fix it',
    'Cry'
  ],
      correctAnswer: 'Apologize calmly and suggest moving to the paper copies while you fix it',
      points: 2
    }
  ]
};

// 46-50: FINAL CHALLENGES
export const B2_NEG_M1_L2_SPEAK_3: Exercise = {
  id: 'b2-neg-m1-l2-speak-3',
  type: 'speaking',
  title: 'Building Rapport (Roleplay)',
  prompt: 'You just met the client. Ask about their trip and comment on the nice office.',
  expectedResponse: 'How was your flight? You have a very impressive office here.',
  targetWords: ['flight', 'impressive', 'trip'],
  timeLimit: 60
};

export const B2_NEG_M1_L2_SPEAK_4: Exercise = {
  id: 'b2-neg-m1-l2-speak-4',
  type: 'speaking',
  title: 'Polite Redirection',
  prompt: 'The client is being aggressive about pricing early on. Redirect them to the agenda.',
  expectedResponse: 'I understand your concerns about pricing, but I suggest we stick to the agenda and start with technical requirements.',
  targetWords: ['understand', 'concerns', 'suggest', 'agenda'],
  timeLimit: 60
};

export const B2_NEG_M1_L2_WRITING_2: Exercise = {
  id: 'b2-neg-m1-l2-writing-2',
  type: 'writing-analysis',
  title: 'The Agenda Email',
  questions: [
    {
      id: 'w1',
      type: 'multiple-choice',
      question: 'Select the best way to send an agenda before the meeting.',
      options: [
        'Here is what we will talk about.',
        'Please find attached the proposed agenda for tomorrow\'s session. Let me know if you\'d like to add anything.',
        'Don\'t forget the agenda.',
        'I am in charge of the agenda, here it is.'
      ],
      correctAnswer: 'Please find attached the proposed agenda for tomorrow\'s session. Let me know if you\'d like to add anything.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_WRITING_3: Exercise = {
  id: 'b2-neg-m1-l2-writing-3',
  type: 'writing-analysis',
  title: 'Formal Introductions',
  questions: [
    {
      id: 'w2',
      type: 'multiple-choice',
      question: 'How should you introduce a senior colleague in an email?',
      options: [
        'Sarah is the boss.',
        'I\'d like to introduce Sarah, who is our lead consultant.',
        'Meet Sarah.',
        'This is Sarah, she knows everything.'
      ],
      correctAnswer: 'I\'d like to introduce Sarah, who is our lead consultant.',
      points: 2
    }
  ]
};

export const B2_NEG_M1_L2_SPEAK_5: Exercise = {
  id: 'b2-neg-m1-l2-speak-5',
  type: 'speaking',
  title: 'Opening Pitch',
  prompt: 'Give a 30-second opening statement summarizing your main goal for today.',
  expectedResponse: 'Our primary goal today is to establish a framework for a long-term partnership that benefits both sides.',
  targetWords: ['primary', 'framework', 'partnership', 'benefits'],
  timeLimit: 60
};

// EXPORT ALL 50 EXERCISES
export const B2_NEG_M1_L2_ALL_EXERCISES: Exercise[] = [
  B2_NEG_M1_L2_SPEAKING_1,
  B2_NEG_M1_L2_LISTENING_1,
  B2_NEG_M1_L2_LISTENING_2,
  B2_NEG_M1_L2_SPEAKING_2,
  B2_NEG_M1_L2_VOCAB_1,
  B2_NEG_M1_L2_VOCAB_2,
  B2_NEG_M1_L2_VOCAB_3,
  B2_NEG_M1_L2_VOCAB_4,
  B2_NEG_M1_L2_VOCAB_5,
  B2_NEG_M1_L2_VOCAB_6,
  B2_NEG_M1_L2_GRAMMAR_1,
  B2_NEG_M1_L2_GRAMMAR_2,
  B2_NEG_M1_L2_GRAMMAR_3,
  B2_NEG_M1_L2_GRAMMAR_4,
  B2_NEG_M1_L2_GRAMMAR_5,
  B2_NEG_M1_L2_READING_1,
  B2_NEG_M1_L2_READING_2,
  B2_NEG_M1_L2_READING_3,
  B2_NEG_M1_L2_READING_4,
  B2_NEG_M1_L2_READING_5,
  B2_NEG_M1_L2_CLOZE_1,
  B2_NEG_M1_L2_CLOZE_2,
  B2_NEG_M1_L2_CLOZE_3,
  B2_NEG_M1_L2_CLOZE_4,
  B2_NEG_M1_L2_CLOZE_5,
  B2_NEG_M1_L2_TRANS_1,
  B2_NEG_M1_L2_TRANS_2,
  B2_NEG_M1_L2_TRANS_3,
  B2_NEG_M1_L2_TRANS_4,
  B2_NEG_M1_L2_TRANS_5,
  B2_NEG_M1_L2_LIST_3,
  B2_NEG_M1_L2_LIST_4,
  B2_NEG_M1_L2_LIST_5,
  B2_NEG_M1_L2_LIST_6,
  B2_NEG_M1_L2_LIST_7,
  B2_NEG_M1_L2_GAP_1,
  B2_NEG_M1_L2_GAP_2,
  B2_NEG_M1_L2_GAP_3,
  B2_NEG_M1_L2_GAP_4,
  B2_NEG_M1_L2_GAP_5,
  B2_NEG_M1_L2_SIT_1,
  B2_NEG_M1_L2_SIT_2,
  B2_NEG_M1_L2_SIT_3,
  B2_NEG_M1_L2_SIT_4,
  B2_NEG_M1_L2_SIT_5,
  B2_NEG_M1_L2_SPEAK_3,
  B2_NEG_M1_L2_SPEAK_4,
  B2_NEG_M1_L2_WRITING_2,
  B2_NEG_M1_L2_WRITING_3,
  B2_NEG_M1_L2_SPEAK_5
];
