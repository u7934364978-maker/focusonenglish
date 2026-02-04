
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U20_BLOCK1: Exercise = {
  "id": "c2-u20-b1",
  "type": "vocabulary",
  "title": "Block 1: AI Concepts & Terminology",
  "explanation": "Advanced terms for machine learning, neural networks, and automation.",
  "questions": [
    {
      "id": "c2-u20-b1-q1",
      "type": "multiple-choice",
      "question": "What is meant by the term \"Artificial General Intelligence\" (AGI)?",
      "options": ["A very fast calculator", "AI that can understand, learn, and apply knowledge across a wide range of tasks at a human-like level", "AI that only plays chess", "A type of robot"],
      "correctAnswer": "AI that can understand, learn, and apply knowledge across a wide range of tasks at a human-like level",
      "explanation": "AGI is the hypothetical future of AI.",
      "points": 1
    },
    {
      "id": "c2-u20-b1-q2",
      "type": "fill-blank",
      "question": "The system uses deep ________ to process images.",
      "correctAnswer": "learning",
      "explanation": "Deep learning is a subset of machine learning based on artificial neural networks.",
      "points": 1
    },
    {
      "id": "c2-u20-b1-q3",
      "type": "multiple-choice",
      "question": "What does 'algorithmic bias' mean?",
      "options": ["A very fast algorithm", "Systematic and repeatable errors in a computer system that create unfair outcomes", "A type of computer code", "A helpful feature"],
      "correctAnswer": "Systematic and repeatable errors in a computer system that create unfair outcomes",
      "explanation": "Algorithmic bias often reflects human prejudices in training data.",
      "points": 1
    },
    {
      "id": "c2-u20-b1-q4",
      "type": "fill-blank",
      "question": "The data set must be ________ to ensure accuracy.",
      "correctAnswer": "representative",
      "explanation": "Representative data accurately reflects the population it is intended to model.",
      "points": 1
    },
    {
      "id": "c2-u20-b1-q5",
      "type": "multiple-choice",
      "question": "What is 'natural language processing' (NLP)?",
      "options": ["Talking to plants", "The ability of a computer program to understand human language as it is spoken and written", "A type of microphone", "A fast computer"],
      "correctAnswer": "The ability of a computer program to understand human language as it is spoken and written",
      "explanation": "NLP is used in translation, chatbots, and sentiment analysis.",
      "points": 1
    },
    {
      "id": "c2-u20-b1-q6",
      "type": "fill-blank",
      "question": "The model was ________ on billions of words.",
      "correctAnswer": "trained",
      "explanation": "Training is the process of teaching an AI model using data.",
      "points": 1
    },
    {
      "id": "c2-u20-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'machine ethics'?",
      "options": ["The moral behavior of humans towards machines", "The part of the ethics of AI that is concerned with the moral behavior of artificial moral agents", "A type of robot", "Repairing computers"],
      "correctAnswer": "The part of the ethics of AI that is concerned with the moral behavior of artificial moral agents",
      "explanation": "Machine ethics explores how to program morality into AI.",
      "points": 1
    },
    {
      "id": "c2-u20-b1-q8",
      "type": "fill-blank",
      "question": "We must ensure AI ________ with human values.",
      "correctAnswer": "alignment",
      "explanation": "AI alignment is the problem of ensuring that AI systems act in accordance with human intentions and values.",
      "points": 1
    },
    {
      "id": "c2-u20-b1-q9",
      "type": "multiple-choice",
      "question": "What is a 'black box' in AI?",
      "options": ["A flight recorder", "A system whose internal workings are hidden or not easily understood by humans", "A type of battery", "A very old computer"],
      "correctAnswer": "A system whose internal workings are hidden or not easily understood by humans",
      "explanation": "The 'black box' problem is a major challenge for AI transparency and accountability.",
      "points": 1
    },
    {
      "id": "c2-u20-b1-q10",
      "type": "fill-blank",
      "question": "The ________ of AI is accelerating.",
      "correctAnswer": "proliferation",
      "explanation": "Proliferation means a rapid increase in numbers.",
      "points": 1
    }
  ]
};

export const C2_U20_BLOCK2: Exercise = {
  "id": "c2-u20-b2",
  "type": "grammar",
  "title": "Block 2: Modals for Speculation (Present & Past)",
  "explanation": "Using modals like 'must', 'might', 'could', 'can't' with 'have + past participle' for degrees of certainty about the past.",
  "questions": [
    {
      "id": "c2-u20-b2-q1",
      "type": "multiple-choice",
      "question": "Which sentence expresses 100% certainty about a negative past event?",
      "options": ["He might not have seen it.", "He can't have seen it.", "He shouldn't have seen it.", "He wouldn't have seen it."],
      "correctAnswer": "He can't have seen it.",
      "explanation": "'Can't have' is the negative equivalent of 'must have' for deduction.",
      "points": 1
    },
    {
      "id": "c2-u20-b2-q2",
      "type": "fill-blank",
      "question": "He ________ (must/might) have forgotten the meeting; he's usually very punctual.",
      "correctAnswer": "must",
      "explanation": "Used for a logical deduction based on evidence.",
      "points": 1
    },
    {
      "id": "c2-u20-b2-q3",
      "type": "multiple-choice",
      "question": "What does 'He might well have known' imply?",
      "options": ["He definitely knew", "It is quite likely that he knew", "He didn't know", "He was told"],
      "correctAnswer": "It is quite likely that he knew",
      "explanation": "'Might well' indicates a higher degree of probability than 'might'.",
      "points": 1
    },
    {
      "id": "c2-u20-b2-q4",
      "type": "fill-blank",
      "question": "The data ________ (could/should) have been corrupted during the transfer.",
      "correctAnswer": "could",
      "explanation": "Used for possibility.",
      "points": 1
    },
    {
      "id": "c2-u20-b2-q5",
      "type": "multiple-choice",
      "question": "Which sentence expresses a missed opportunity in the past?",
      "options": ["I must have gone.", "I should have gone.", "I can't have gone.", "I might have gone."],
      "correctAnswer": "I should have gone.",
      "explanation": "'Should have' expresses regret or a recommendation about a past action that didn't happen.",
      "points": 1
    },
    {
      "id": "c2-u20-b2-q6",
      "type": "fill-blank",
      "question": "You ________ (needn't/can't) have bought a gift, but it was very kind of you.",
      "correctAnswer": "needn't",
      "explanation": "'Needn't have' means you did something that wasn't necessary.",
      "points": 1
    },
    {
      "id": "c2-u20-b2-q7",
      "type": "multiple-choice",
      "question": "What is the meaning of 'He may not have finished yet'?",
      "options": ["He finished", "It's possible he hasn't finished", "He is not allowed to finish", "He will never finish"],
      "correctAnswer": "It's possible he hasn't finished",
      "explanation": "'May not have' expresses a negative possibility.",
      "points": 1
    },
    {
      "id": "c2-u20-b2-q8",
      "type": "fill-blank",
      "question": "She ________ (would/must) have been very happy to hear the news.",
      "correctAnswer": "must",
      "explanation": "Deduction about a past state.",
      "points": 1
    },
    {
      "id": "c2-u20-b2-q9",
      "type": "multiple-choice",
      "question": "Identify the error: 'He can have left his keys at home.'",
      "options": ["The verb 'left'", "The modal 'can'", "The preposition 'at'", "There is no error"],
      "correctAnswer": "The modal 'can'",
      "explanation": "'Can have' is not used for possibility/deduction in positive sentences; use 'could have' or 'must have'.",
      "points": 1
    },
    {
      "id": "c2-u20-b2-q10",
      "type": "fill-blank",
      "question": "They ________ (might/must) have arrived by now, but I haven't heard from them.",
      "correctAnswer": "might",
      "explanation": "Used for possibility.",
      "points": 1
    }
  ]
};

export const C2_U20_BLOCK3: Exercise = {
  "id": "c2-u20-b3",
  "type": "vocabulary",
  "title": "Block 3: Ethical Dilemmas in AI",
  "explanation": "Vocabulary for privacy, surveillance, and automated decision-making.",
  "questions": [
    {
      "id": "c2-u20-b3-q1",
      "type": "multiple-choice",
      "question": "What is the 'trolley problem' in AI ethics?",
      "options": ["A problem with a shopping cart", "A thought experiment about how an autonomous vehicle should choose between different harmful outcomes", "A type of traffic jam", "A broken train"],
      "correctAnswer": "A thought experiment about how an autonomous vehicle should choose between different harmful outcomes",
      "explanation": "The trolley problem highlights the difficulty of programming morality into machines.",
      "points": 1
    },
    {
      "id": "c2-u20-b3-q2",
      "type": "fill-blank",
      "question": "AI systems must be ________ to prevent discrimination.",
      "correctAnswer": "unbiased",
      "explanation": "Unbiased means showing no prejudice for or against something; impartial.",
      "points": 1
    },
    {
      "id": "c2-u20-b3-q3",
      "type": "multiple-choice",
      "question": "What is 'mass surveillance'?",
      "options": ["Watching a movie", "The intricate surveillance of an entire or a substantial fraction of a population", "Guarding a building", "A type of TV"],
      "correctAnswer": "The intricate surveillance of an entire or a substantial fraction of a population",
      "explanation": "AI facilitates mass surveillance through facial recognition and data analysis.",
      "points": 1
    },
    {
      "id": "c2-u20-b3-q4",
      "type": "fill-blank",
      "question": "The use of facial recognition is highly ________.",
      "correctAnswer": "controversial",
      "explanation": "Controversial means giving rise or likely to give rise to public disagreement.",
      "points": 1
    },
    {
      "id": "c2-u20-b3-q5",
      "type": "multiple-choice",
      "question": "What does 'accountability' mean in AI?",
      "options": ["Counting money", "The obligation of an individual or organization to account for its activities and accept responsibility for them", "Buying a new computer", "A type of tax"],
      "correctAnswer": "The obligation of an individual or organization to account for its activities and accept responsibility for them",
      "explanation": "Accountability is crucial when AI systems make life-altering decisions.",
      "points": 1
    },
    {
      "id": "c2-u20-b3-q6",
      "type": "fill-blank",
      "question": "We must protect data ________.",
      "correctAnswer": "integrity",
      "explanation": "Data integrity is the maintenance of, and the assurance of the accuracy and consistency of, data over its entire life-cycle.",
      "points": 1
    },
    {
      "id": "c2-u20-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'technological unemployment'?",
      "options": ["Not having a phone", "The loss of jobs caused by technological change", "A broken computer", "Not knowing how to use a computer"],
      "correctAnswer": "The loss of jobs caused by technological change",
      "explanation": "AI automation is a major driver of technological unemployment.",
      "points": 1
    },
    {
      "id": "c2-u20-b3-q8",
      "type": "fill-blank",
      "question": "The algorithm should be ________.",
      "correctAnswer": "transparent",
      "explanation": "Transparency in AI means the ability to see and understand how the system works.",
      "points": 1
    },
    {
      "id": "c2-u20-b3-q9",
      "type": "multiple-choice",
      "question": "What is 'deepfake'?",
      "options": ["A very long sleep", "Synthetic media in which a person in an existing image or video is replaced with someone else's likeness", "A type of camera", "A fast computer"],
      "correctAnswer": "Synthetic media in which a person in an existing image or video is replaced with someone else's likeness",
      "explanation": "Deepfakes pose a major threat to truth and trust.",
      "points": 1
    },
    {
      "id": "c2-u20-b3-q10",
      "type": "fill-blank",
      "question": "The ________ of human rights is paramount.",
      "correctAnswer": "upholding",
      "explanation": "Upholding means to maintain or support (a custom, law, or principle).",
      "points": 1
    }
  ]
};

export const C2_U20_BLOCK4: Exercise = {
  "id": "c2-u20-b4",
  "type": "grammar",
  "title": "Block 4: Modals for Obligation & Necessity",
  "explanation": "Using 'should', 'ought to', 'must', 'need to', and phrases like 'it's high time', 'would rather'.",
  "questions": [
    {
      "id": "c2-u20-b4-q1",
      "type": "fill-blank",
      "question": "Which phrase expresses urgency and is followed by the past simple?",
      "options": ["I think", "It's high time", "I hope", "I would like"],
      "correctAnswer": "It's high time",
      "explanation": "E.g., 'It's high time we regulated AI.'",
      "points": 1
    },
    {
      "id": "c2-u20-b4-q2",
      "type": "fill-blank",
      "question": "We ________ (ought/must) to have considered the ethical implications earlier.",
      "correctAnswer": "ought",
      "explanation": "'Ought to have' expresses a recommendation or duty that was not fulfilled.",
      "points": 1
    },
    {
      "id": "c2-u20-b4-q3",
      "type": "multiple-choice",
      "question": "What does 'I'd rather you didn't do that' mean?",
      "options": ["I want you to do it", "I prefer that you do not do it", "I don't care", "I am happy"],
      "correctAnswer": "I prefer that you do not do it",
      "explanation": "'Would rather' followed by a subject + past simple expresses preference about another person's behavior.",
      "points": 1
    },
    {
      "id": "c2-u20-b4-q4",
      "type": "fill-blank",
      "question": "They ________ (need/must) not have worried; the system was safe.",
      "correctAnswer": "need",
      "explanation": "'Need not have' implies they worried unnecessarily.",
      "points": 1
    },
    {
      "id": "c2-u20-b4-q5",
      "type": "multiple-choice",
      "question": "Which modal expresses strong internal obligation?",
      "options": ["Should", "Must", "Can", "May"],
      "correctAnswer": "Must",
      "explanation": "'I must finish this report today.'",
      "points": 1
    },
    {
      "id": "c2-u20-b4-q6",
      "type": "fill-blank",
      "question": "You ________ (had better/rather) not be late for the ethics board meeting.",
      "correctAnswer": "had better",
      "explanation": "'Had better' is used for strong advice or warnings.",
      "points": 1
    },
    {
      "id": "c2-u20-b4-q7",
      "type": "multiple-choice",
      "question": "What is the difference between 'must have' and 'should have'?",
      "options": ["None", "'Must have' is for deduction, 'should have' is for recommendation/regret", "'Should have' is stronger", "They are opposites"],
      "correctAnswer": "'Must have' is for deduction, 'should have' is for recommendation/regret",
      "explanation": "'He must have arrived' (I'm sure he did) vs 'He should have arrived' (He hasn't, and I expected him to).",
      "points": 1
    },
    {
      "id": "c2-u20-b4-q8",
      "type": "fill-blank",
      "question": "It's ________ (time/high time) for a new approach to AI safety.",
      "correctAnswer": "time",
      "explanation": "Both 'time' and 'high time' work, but 'time' is slightly less emphatic here if followed by 'for'.",
      "points": 1
    },
    {
      "id": "c2-u20-b4-q9",
      "type": "multiple-choice",
      "question": "Which phrase expresses preference for oneself?",
      "options": [
  "I would rather stay",
  "I would rather have stayed",
  "I would rather not stay",
  "I would rather be staying"
],
      "correctAnswer": "I would rather stay",
      "explanation": "'Would rather' is followed by the bare infinitive.",
      "points": 1
    },
    {
      "id": "c2-u20-b4-q10",
      "type": "fill-blank",
      "question": "We ________ (shall/should) strive for a more equitable future.",
      "correctAnswer": "should",
      "explanation": "Recommendation.",
      "points": 1
    }
  ]
};

export const C2_U20_BLOCK5: Exercise = {
  "id": "c2-u20-b5",
  "type": "vocabulary",
  "title": "Block 5: Human-Machine Interaction Idioms",
  "explanation": "Metaphors and expressions using mechanical or digital words.",
  "questions": [
    {
      "id": "c2-u20-b5-q1",
      "type": "multiple-choice",
      "question": "What does 'on the same wavelength' mean?",
      "options": ["Using the same radio", "Thinking in a similar way", "Being in a lab", "Walking at the same speed"],
      "correctAnswer": "Thinking in a similar way",
      "explanation": "Idiom for mutual understanding.",
      "points": 1
    },
    {
      "id": "c2-u20-b5-q2",
      "type": "fill-blank",
      "question": "The computer ________ at the worst possible time.",
      "correctAnswer": "crashed",
      "explanation": "Crash means to fail suddenly and completely.",
      "points": 1
    },
    {
      "id": "c2-u20-b5-q3",
      "type": "multiple-choice",
      "question": "If something 'sets the wheels in motion', it...",
      "options": ["Is a bicycle", "Starts a process", "Is a car", "Is broken"],
      "correctAnswer": "Starts a process",
      "explanation": "Metaphor from mechanics.",
      "points": 1
    },
    {
      "id": "c2-u20-b5-q4",
      "type": "fill-blank",
      "question": "He's really ________ my buttons today.",
      "correctAnswer": "pushing",
      "explanation": "'Push someone's buttons' means to deliberately provoke or annoy them.",
      "points": 1
    },
    {
      "id": "c2-u20-b5-q5",
      "type": "multiple-choice",
      "question": "What does 'to get your wires crossed' mean?",
      "options": ["To fix a lamp", "To have a misunderstanding", "To be an electrician", "To be angry"],
      "correctAnswer": "To have a misunderstanding",
      "explanation": "Idiom for confusion.",
      "points": 1
    },
    {
      "id": "c2-u20-b5-q6",
      "type": "fill-blank",
      "question": "The company is a well-oiled ________.",
      "correctAnswer": "machine",
      "explanation": "A 'well-oiled machine' is an organization that operates smoothly and efficiently.",
      "points": 1
    },
    {
      "id": "c2-u20-b5-q7",
      "type": "multiple-choice",
      "question": "If you 'pull the plug' on something, you...",
      "options": ["Drain a bathtub", "End an activity or project", "Fix a leak", "Start a fire"],
      "correctAnswer": "End an activity or project",
      "explanation": "Idiom for stopping something, often financial support.",
      "points": 1
    },
    {
      "id": "c2-u20-b5-q8",
      "type": "fill-blank",
      "question": "It's not ________ science.",
      "correctAnswer": "rocket",
      "explanation": "'It's not rocket science' means it's not very difficult to understand.",
      "points": 1
    },
    {
      "id": "c2-u20-b5-q9",
      "type": "multiple-choice",
      "question": "What does 'to recharge your batteries' mean?",
      "options": ["To plug in your phone", "To rest and regain energy", "To buy new toys", "To run a race"],
      "correctAnswer": "To rest and regain energy",
      "explanation": "Common idiom for relaxation.",
      "points": 1
    },
    {
      "id": "c2-u20-b5-q10",
      "type": "fill-blank",
      "question": "He's the ________ in the machine.",
      "correctAnswer": "ghost",
      "explanation": "'Ghost in the machine' is a philosophical and sci-fi term for consciousness within a physical or digital system.",
      "points": 1
    }
  ]
};

export const C2_U20_BLOCK6: Exercise = {
  "id": "c2-u20-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Advanced Modals in Context",
  "explanation": "Applying advanced modals to transform sentences while keeping the meaning.",
  "questions": [
    {
      "id": "c2-u20-b6-q1",
      "type": "key-word-transformation",
      "question": "I'm sure they forgot about the meeting. (MUST)\n\nThey __________",
      "sentence": "I'm sure they forgot about the meeting.",
      "keyWord": "MUST",
      "startOfAnswer": "They",
      "correctAnswer": "must have forgotten about the meeting",
      "explanation": "Using 'must have' for certain deduction.",
      "points": 1
    },
    {
      "id": "c2-u20-b6-q2",
      "type": "key-word-transformation",
      "question": "It was a mistake to tell him the truth. (SHOULDN'T)\n\nYou __________",
      "sentence": "It was a mistake to tell him the truth.",
      "keyWord": "SHOULDN'T",
      "startOfAnswer": "You",
      "correctAnswer": "shouldn't have told him the truth",
      "explanation": "'Shouldn't have' for past regret/mistake.",
      "points": 1
    },
    {
      "id": "c2-u20-b6-q3",
      "type": "key-word-transformation",
      "question": "It is necessary for us to update the software now. (HIGH)\n\nIt is __________",
      "sentence": "It is necessary for us to update the software now.",
      "keyWord": "HIGH",
      "startOfAnswer": "It is",
      "correctAnswer": "high time we updated the software",
      "explanation": "'It's high time' + past simple.",
      "points": 1
    },
    {
      "id": "c2-u20-b6-q4",
      "type": "key-word-transformation",
      "question": "I would prefer you to stay home tonight. (RATHER)\n\nI'd __________",
      "sentence": "I would prefer you to stay home tonight.",
      "keyWord": "RATHER",
      "startOfAnswer": "I'd",
      "correctAnswer": "rather you stayed home tonight",
      "explanation": "'Would rather' + subject + past simple.",
      "points": 1
    },
    {
      "id": "c2-u20-b6-q5",
      "type": "key-word-transformation",
      "question": "It's possible that she didn't see the email. (MIGHT)\n\nShe __________",
      "sentence": "It's possible that she didn't see the email.",
      "keyWord": "MIGHT",
      "startOfAnswer": "She",
      "correctAnswer": "might not have seen the email",
      "explanation": "Negative possibility in the past.",
      "points": 1
    },
    {
      "id": "c2-u20-b6-q6",
      "type": "key-word-transformation",
      "question": "I'm certain he wasn't there. (CAN'T)\n\nHe __________",
      "sentence": "I'm certain he wasn't there.",
      "keyWord": "CAN'T",
      "startOfAnswer": "He",
      "correctAnswer": "can't have been there",
      "explanation": "Negative certain deduction.",
      "points": 1
    },
    {
      "id": "c2-u20-b6-q7",
      "type": "key-word-transformation",
      "question": "You did it, but it wasn't necessary. (NEEDN'T)\n\nYou __________",
      "sentence": "You did it, but it wasn't necessary.",
      "keyWord": "NEEDN'T",
      "startOfAnswer": "You",
      "correctAnswer": "needn't have done it",
      "explanation": "Action taken that was not necessary.",
      "points": 1
    },
    {
      "id": "c2-u20-b6-q8",
      "type": "key-word-transformation",
      "question": "It would be a good idea for you to leave now. (BETTER)\n\nYou __________",
      "sentence": "It would be a good idea for you to leave now.",
      "keyWord": "BETTER",
      "startOfAnswer": "You",
      "correctAnswer": "had better leave now",
      "explanation": "'Had better' for strong advice.",
      "points": 1
    },
    {
      "id": "c2-u20-b6-q9",
      "type": "key-word-transformation",
      "question": "He was likely to win the race. (WELL)\n\nHe __________",
      "sentence": "He was likely to win the race.",
      "keyWord": "WELL",
      "startOfAnswer": "He",
      "correctAnswer": "might well have won the race",
      "explanation": "'Might well' for high probability.",
      "points": 1
    },
    {
      "id": "c2-u20-b6-q10",
      "type": "key-word-transformation",
      "question": "It was your duty to call her. (OUGHT)\n\nYou __________",
      "sentence": "It was your duty to call her.",
      "keyWord": "OUGHT",
      "startOfAnswer": "You",
      "correctAnswer": "ought to have called her",
      "explanation": "Unfulfilled obligation.",
      "points": 1
    }
  ]};

export const C2_U20_BLOCK7: Exercise = {
  "id": "c2-u20-b7",
  "type": "vocabulary",
  "title": "Block 7: The Future of Work & Society",
  "explanation": "Vocabulary for the long-term impact of AI on humanity.",
  "questions": [
    {
      "id": "c2-u20-b7-q1",
      "type": "multiple-choice",
      "question": "What is the definition of the term \"post-scarcity\"?",
      "options": ["A time when everyone is poor", "A theoretical economic situation in which most goods can be produced in great abundance with minimal human labor", "A type of tax", "A broken computer"],
      "correctAnswer": "A theoretical economic situation in which most goods can be produced in great abundance with minimal human labor",
      "explanation": "Post-scarcity is a common theme in futurist and AI literature.",
      "points": 1
    },
    {
      "id": "c2-u20-b7-q2",
      "type": "fill-blank",
      "question": "AI could lead to the ________ of many traditional roles.",
      "correctAnswer": "obsolescence",
      "explanation": "Obsolescence is the process of becoming obsolete or outdated.",
      "points": 1
    },
    {
      "id": "c2-u20-b7-q3",
      "type": "multiple-choice",
      "question": "What is 'Universal Basic Income' (UBI)?",
      "options": ["A type of insurance", "A periodic cash payment delivered to all on an individual basis, without means test or work requirement", "A government secret", "A new computer"],
      "correctAnswer": "A periodic cash payment delivered to all on an individual basis, without means test or work requirement",
      "explanation": "UBI is often proposed as a solution to technological unemployment.",
      "points": 1
    },
    {
      "id": "c2-u20-b7-q4",
      "type": "fill-blank",
      "question": "The ________ of AI into society must be handled carefully.",
      "correctAnswer": "integration",
      "explanation": "Integration means the action or process of integrating.",
      "points": 1
    },
    {
      "id": "c2-u20-b7-q5",
      "type": "multiple-choice",
      "question": "What is 'transhumanism'?",
      "options": ["Moving to a new country", "A philosophical movement that advocates for the transformation of the human condition by developing and making widely available sophisticated technologies to greatly enhance human intellect and physiology", "A type of religion", "Building a bridge"],
      "correctAnswer": "A philosophical movement that advocates for the transformation of the human condition by developing and making widely available sophisticated technologies to greatly enhance human intellect and physiology",
      "explanation": "Transhumanism explores the merger of humans and machines.",
      "points": 1
    },
    {
      "id": "c2-u20-b7-q6",
      "type": "fill-blank",
      "question": "The future of AI is ________.",
      "correctAnswer": "unpredictable",
      "explanation": "Unpredictable means not able to be foreseen or known beforehand.",
      "points": 1
    },
    {
      "id": "c2-u20-b7-q7",
      "type": "multiple-choice",
      "question": "What does 'existential risk' mean?",
      "options": ["A risk to your job", "A risk that could cause the extinction of humanity or permanently and drastically curtail its potential", "A type of insurance", "A fast car"],
      "correctAnswer": "A risk that could cause the extinction of humanity or permanently and drastically curtail its potential",
      "explanation": "Many experts warn about existential risks from misaligned AGI.",
      "points": 1
    },
    {
      "id": "c2-u20-b7-q8",
      "type": "fill-blank",
      "question": "We must foster a ________ relationship with AI.",
      "correctAnswer": "symbiotic",
      "explanation": "A symbiotic relationship is one that is beneficial to both parties.",
      "points": 1
    },
    {
      "id": "c2-u20-b7-q9",
      "type": "multiple-choice",
      "question": "What is 'the singularity'?",
      "options": ["A very small dot", "A hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unfathomable changes to human civilization", "A new movie", "A type of battery"],
      "correctAnswer": "A hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unfathomable changes to human civilization",
      "explanation": "The singularity is a central concept in futurism.",
      "points": 1
    },
    {
      "id": "c2-u20-b7-q10",
      "type": "fill-blank",
      "question": "Humanity is at a ________.",
      "correctAnswer": "crossroads",
      "explanation": "Metaphor for a vital decision point.",
      "points": 1
    }
  ]
};

export const C2_U20_BLOCK8: Exercise = {
  "id": "c2-u20-b8",
  "type": "grammar",
  "title": "Block 8: Sophisticated Modal Usage",
  "explanation": "Modal combinations and subtle distinctions (e.g., might just as well, could have been, must be being).",
  "questions": [
    {
      "id": "c2-u20-b8-q1",
      "type": "multiple-choice",
      "question": "What does 'You might just as well come' mean?",
      "options": ["You should definitely come", "There is no reason not to come / It's equally good to come", "You are not allowed to come", "You are too late"],
      "correctAnswer": "There is no reason not to come / It's equally good to come",
      "explanation": "'Might just as well' implies that one alternative is no better than another.",
      "points": 1
    },
    {
      "id": "c2-u20-b8-q2",
      "type": "fill-blank",
      "question": "The experiment ________ (must/should) be being monitored as we speak.",
      "correctAnswer": "must",
      "explanation": "Logical deduction about an ongoing action.",
      "points": 1
    },
    {
      "id": "c2-u20-b8-q3",
      "type": "key-word-transformation",
      "question": "It was possible for the error to have been avoided. (COULD)\n\nThe error __________",
      "sentence": "It was possible for the error to have been avoided.",
      "keyWord": "COULD",
      "startOfAnswer": "The error",
      "correctAnswer": "could have been avoided",
      "explanation": "Passive modal for past possibility.",
      "points": 1
    },
    {
      "id": "c2-u20-b8-q4",
      "type": "multiple-choice",
      "question": "Which of the following phrases conveys a strong sense of certainty regarding one's mistake?",
      "options": ["I was slightly wrong", "I was completely wrong", "I was right", "I am not sure"],
      "correctAnswer": "I was completely wrong",
      "explanation": "Used for emphasis.",
      "points": 1
    },
    {
      "id": "c2-u20-b8-q5",
      "type": "fill-blank",
      "question": "He ________ (may/must) well be the most talented programmer I know.",
      "correctAnswer": "may",
      "explanation": "'May well' expresses high probability.",
      "points": 1
    },
    {
      "id": "c2-u20-b8-q6",
      "type": "key-word-transformation",
      "question": "I'm sure he's working late. (BE)\n\nHe __________",
      "sentence": "I'm sure he's working late.",
      "keyWord": "BE",
      "startOfAnswer": "He",
      "correctAnswer": "must be working late",
      "explanation": "Deduction about a current action.",
      "points": 1
    },
    {
      "id": "c2-u20-b8-q7",
      "type": "multiple-choice",
      "question": "Which of the following phrases correctly uses modal verbs to express a possibility regarding an obligation?",
      "options": ["I should have to go", "I might have to go", "I can have to go", "I must to go"],
      "correctAnswer": "I might have to go",
      "explanation": "Double modal-like structure (might + have to).",
      "points": 1
    },
    {
      "id": "c2-u20-b8-q8",
      "type": "fill-blank",
      "question": "You ________ (can't/couldn't) have known what would happen.",
      "correctAnswer": "couldn't",
      "explanation": "Expresses impossibility about the past.",
      "points": 1
    },
    {
      "id": "c2-u20-b8-q9",
      "type": "multiple-choice",
      "question": "What does 'You might have told me' express?",
      "options": ["A possibility", "Annoyance/Criticism because someone didn't tell you something", "A question", "A happy fact"],
      "correctAnswer": "Annoyance/Criticism because someone didn't tell you something",
      "explanation": "Common use of 'might have' for mild reproach.",
      "points": 1
    },
    {
      "id": "c2-u20-b8-q10",
      "type": "fill-blank",
      "question": "The decision ________ (must/ought) be made with the utmost care.",
      "correctAnswer": "must",
      "explanation": "Necessity.",
      "points": 1
    }
  ]
};

export const C2_U20_BLOCK9: Exercise = {
  "id": "c2-u20-b9",
  "type": "reading",
  "title": "Block 9: AI and the Human Spirit",
  "explanation": "Analyze a text about consciousness and the definition of humanity.",
  "questions": [
    {
      "id": "c2-u20-b9-q1",
      "type": "multiple-choice",
      "question": "What is 'consciousness' in the context of AI?",
      "options": ["Being awake", "The state of being aware of and responsive to one's surroundings; a subject of intense debate in AI", "A type of battery", "A fast computer"],
      "correctAnswer": "The state of being aware of and responsive to one's surroundings; a subject of intense debate in AI",
      "explanation": "Can machines ever be truly conscious?",
      "points": 1
    },
    {
      "id": "c2-u20-b9-q2",
      "type": "fill-blank",
      "question": "AI challenges our ________ of what it means to be human.",
      "correctAnswer": "understanding",
      "explanation": "AI forces us to reconsider human uniqueness.",
      "points": 1
    },
    {
      "id": "c2-u20-b9-q3",
      "type": "multiple-choice",
      "question": "What is 'sentience'?",
      "options": ["Having a lot of money", "The capacity to feel, perceive, or experience subjectively", "A type of robot", "A fast computer"],
      "correctAnswer": "The capacity to feel, perceive, or experience subjectively",
      "explanation": "Sentience is often considered a prerequisite for moral status.",
      "points": 1
    },
    {
      "id": "c2-u20-b9-q4",
      "type": "fill-blank",
      "question": "The ________ of AI could be a turning point for humanity.",
      "correctAnswer": "emergence",
      "explanation": "Emergence is the process of coming into being.",
      "points": 1
    },
    {
      "id": "c2-u20-b9-q5",
      "type": "multiple-choice",
      "question": "What is 'anthropomorphism'?",
      "options": ["A type of monkey", "The attribution of human characteristics or behavior to a god, animal, or object", "A type of robot", "Building a bridge"],
      "correctAnswer": "The attribution of human characteristics or behavior to a god, animal, or object",
      "explanation": "We often anthropomorphize AI, even when it doesn't have human-like qualities.",
      "points": 1
    },
    {
      "id": "c2-u20-b9-q6",
      "type": "fill-blank",
      "question": "We must avoid the ________ of human emotions to machines.",
      "correctAnswer": "projection",
      "explanation": "Projection is the mental process by which people attribute to others what is in their own minds.",
      "points": 1
    },
    {
      "id": "c2-u20-b9-q7",
      "type": "multiple-choice",
      "question": "What is 'the Turing test'?",
      "options": ["A driving test", "A test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human", "A type of battery", "A new computer game"],
      "correctAnswer": "A test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human",
      "explanation": "The Turing test is a classic benchmark for AI.",
      "points": 1
    },
    {
      "id": "c2-u20-b9-q8",
      "type": "fill-blank",
      "question": "The future of AI is ________ intertwined with our own.",
      "correctAnswer": "inextricably",
      "explanation": "Inextricably means in a way that is impossible to disentangle or separate.",
      "points": 1
    },
    {
      "id": "c2-u20-b9-q9",
      "type": "multiple-choice",
      "question": "What is 'AI safety'?",
      "options": ["Locking your computer", "An interdisciplinary field that aims to ensure AI systems are safe for humanity", "A type of firewall", "A fast connection"],
      "correctAnswer": "An interdisciplinary field that aims to ensure AI systems are safe for humanity",
      "explanation": "AI safety is a major research area.",
      "points": 1
    },
    {
      "id": "c2-u20-b9-q10",
      "type": "fill-blank",
      "question": "The ultimate goal is human ________.",
      "correctAnswer": "flourishing",
      "explanation": "Flourishing means to develop rapidly and successfully; thrive.",
      "points": 1
    }
  ]
};

export const C2_U20_BLOCK10: Exercise = {
  "id": "c2-u20-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 20 & Module 2 Review",
  "explanation": "Final review of AI ethics and Module 2 concepts.",
  "questions": [
    {
      "id": "c2-u20-b10-q1",
      "type": "multiple-choice",
      "question": "Which term describes AI that can do any task a human can?",
      "options": ["Narrow AI", "AGI", "Super AI", "Quantum AI"],
      "correctAnswer": "AGI",
      "explanation": "Artificial General Intelligence.",
      "points": 1
    },
    {
      "id": "c2-u20-b10-q2",
      "type": "fill-blank",
      "question": "He ________ (can't/must) have seen the news; he seems very surprised.",
      "correctAnswer": "can't",
      "explanation": "Negative deduction.",
      "points": 1
    },
    {
      "id": "c2-u20-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'algorithmic transparency'?",
      "options": ["A clear computer", "The principle that the logic and processes behind an algorithm should be open and understandable", "A type of tax", "A government secret"],
      "correctAnswer": "The principle that the logic and processes behind an algorithm should be open and understandable",
      "explanation": "Transparency is key to trust and accountability.",
      "points": 1
    },
    {
      "id": "c2-u20-b10-q4",
      "type": "fill-blank",
      "question": "It's high time we ________ (regulate) the AI industry.",
      "correctAnswer": "regulated",
      "explanation": "'It's high time' + past simple.",
      "points": 1
    },
    {
      "id": "c2-u20-b10-q5",
      "type": "key-word-transformation",
      "question": "I'm sure the system was hacked. (MUST)\n\nThe system __________",
      "sentence": "I'm sure the system was hacked.",
      "keyWord": "MUST",
      "startOfAnswer": "The system",
      "correctAnswer": "must have been hacked",
      "explanation": "Deduction about the past.",
      "points": 1
    },
    {
      "id": "c2-u20-b10-q6",
      "type": "multiple-choice",
      "question": "What does the term \"data governance\" refer to?",
      "options": ["A type of police", "The overall management of the availability, usability, integrity and security of data used in an enterprise", "A type of tax", "A new computer game"],
      "correctAnswer": "The overall management of the availability, usability, integrity and security of data used in an enterprise",
      "explanation": "Data governance is essential for responsible AI.",
      "points": 1
    },
    {
      "id": "c2-u20-b10-q7",
      "type": "fill-blank",
      "question": "The future of work is ________.",
      "correctAnswer": "evolving",
      "explanation": "Evolving means developing gradually.",
      "points": 1
    },
    {
      "id": "c2-u20-b10-q8",
      "type": "key-word-transformation",
      "question": "I would prefer you to be more careful. (RATHER)\n\nI'd __________",
      "sentence": "I would prefer you to be more careful.",
      "keyWord": "RATHER",
      "startOfAnswer": "I'd",
      "correctAnswer": "rather you were more careful",
      "explanation": "'Would rather' + subject + past simple.",
      "points": 1
    },
    {
      "id": "c2-u20-b10-q9",
      "type": "multiple-choice",
      "question": "What is 'ethical alignment'?",
      "options": ["Straightening a table", "Ensuring that AI systems' goals and behaviors are consistent with human ethics", "A type of insurance", "Building a bridge"],
      "correctAnswer": "Ensuring that AI systems' goals and behaviors are consistent with human ethics",
      "explanation": "Ethical alignment is a major goal of AI safety.",
      "points": 1
    },
    {
      "id": "c2-u20-b10-q10",
      "type": "fill-blank",
      "question": "AI is a ________ for change.",
      "correctAnswer": "catalyst",
      "explanation": "A catalyst is something that precipitates an event.",
      "points": 1
    }
  ]
};

export const C2_UNIT_20 = createC2Unit(
  'c2-u20',
  'The Ethics of Artificial Intelligence',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U20_BLOCK1, C2_U20_BLOCK2, C2_U20_BLOCK3, C2_U20_BLOCK4, C2_U20_BLOCK5,
    C2_U20_BLOCK6, C2_U20_BLOCK7, C2_U20_BLOCK8, C2_U20_BLOCK9, C2_U20_BLOCK10
  ]
);
