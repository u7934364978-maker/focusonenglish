
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U44_BLOCK1: Exercise = {
  "id": "c2-u44-b1",
  "type": "vocabulary",
  "title": "Block 1: Epistemology & Metaphysics",
  "explanation": "Advanced terms for discussing the theory of knowledge and the nature of being.",
  "questions": [
    {
      "id": "c2-u44-b1-q1",
      "type": "multiple-choice",
      "question": "What is the definition of epistemology?",
      "options": ["The study of skin", "The branch of philosophy that deals with knowledge, especially its methods and validity", "The study of insects", "A type of biology"],
      "correctAnswer": "The branch of philosophy that deals with knowledge, especially its methods and validity",
      "explanation": "Investigates what distinguishes justified belief from opinion.",
      "points": 1
    },
    {
      "id": "c2-u44-b1-q2",
      "type": "fill-blank",
      "question": "The ________ (metaphysics) question of whether the physical world is real.",
      "correctAnswer": "metaphysical",
      "explanation": "Metaphysical relates to the branch of philosophy that deals with the first principles of things.",
      "points": 1
    },
    {
      "id": "c2-u44-b1-q3",
      "type": "multiple-choice",
      "question": "What is 'ontology'?",
      "options": ["The study of birds", "The branch of metaphysics dealing with the nature of being", "The study of cancer", "A type of grammar"],
      "correctAnswer": "The branch of metaphysics dealing with the nature of being",
      "explanation": "Deals with categories of being and their relations.",
      "points": 1
    },
    {
      "id": "c2-u44-b1-q4",
      "type": "fill-blank",
      "question": "He holds an ________ (idealist) view of reality.",
      "correctAnswer": "idealistic",
      "explanation": "In philosophy, idealism is the group of metaphysical views which assert that 'reality' is in some way indistinguishable or inseparable from human perception.",
      "points": 1
    },
    {
      "id": "c2-u44-b1-q5",
      "type": "multiple-choice",
      "question": "What is 'solipsism'?",
      "options": ["Being very lonely", "The view or theory that the self is all that can be known to exist", "A type of solar energy", "Studying the sun"],
      "correctAnswer": "The view or theory that the self is all that can be known to exist",
      "explanation": "An extreme form of skepticism.",
      "points": 1
    },
    {
      "id": "c2-u44-b1-q6",
      "type": "fill-blank",
      "question": "The ________ (empirical) evidence supports the theory.",
      "correctAnswer": "empirical",
      "explanation": "Empirical means based on, concerned with, or verifiable by observation or experience.",
      "points": 1
    },
    {
      "id": "c2-u44-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'rationalism'?",
      "options": ["Being very efficient", "The theory that reason rather than experience is the foundation of certainty in knowledge", "A type of math", "A religious ceremony"],
      "correctAnswer": "The theory that reason rather than experience is the foundation of certainty in knowledge",
      "explanation": "Opposite of empiricism.",
      "points": 1
    },
    {
      "id": "c2-u44-b1-q8",
      "type": "fill-blank",
      "question": "A ________ (paradigm) shift in our understanding of the universe.",
      "correctAnswer": "paradigm",
      "explanation": "A fundamental change in approach or underlying assumptions.",
      "points": 1
    },
    {
      "id": "c2-u44-b1-q9",
      "type": "multiple-choice",
      "question": "What is 'cogito ergo sum'?",
      "options": ["I think, therefore I am", "To be or not to be", "Carpe diem", "The end justifies the means"],
      "correctAnswer": "I think, therefore I am",
      "explanation": "Descartes' fundamental proposition.",
      "points": 1
    },
    {
      "id": "c2-u44-b1-q10",
      "type": "fill-blank",
      "question": "The ________ (subject) of the experience.",
      "correctAnswer": "subjectivity",
      "explanation": "Subjectivity is the quality of being based on or influenced by personal feelings, tastes, or opinions.",
      "points": 1
    }
  ]
};

export const C2_U44_BLOCK2: Exercise = {
  "id": "c2-u44-b2",
  "type": "grammar",
  "title": "Block 2: Advanced Speculation & Remote Possibility",
  "explanation": "Using 'could conceivably', 'might just', 'may well', 'should by rights', etc.",
  "questions": [
    {
      "id": "c2-u44-b2-q1",
      "type": "multiple-choice",
      "question": "Which expression suggests a very strong possibility?",
      "options": ["Could conceivably", "May well", "Might just", "Might possibly"],
      "correctAnswer": "May well",
      "explanation": "Example: 'It may well be true' implies it's quite likely.",
      "points": 1
    },
    {
      "id": "c2-u44-b2-q2",
      "type": "fill-blank",
      "question": "It ________ (conceive) could be that we are living in a simulation.",
      "correctAnswer": "could conceivably",
      "explanation": "Expresses a remote but possible scenario.",
      "points": 1
    },
    {
      "id": "c2-u44-b2-q3",
      "type": "key-word-transformation",
      "question": "It is possible that he forgot. (MIGHT)\n\nHe ________ forgotten. __________",
      "sentence": "It is possible that he forgot.",
      "keyWord": "MIGHT",
      "startOfAnswer": "He ________ forgotten.",
      "correctAnswer": "might conceivably have",
      "explanation": "Speculating about the past with remote possibility.",
      "points": 1
    },
    {
      "id": "c2-u44-b2-q4",
      "type": "multiple-choice",
      "question": "What phrase is commonly used to describe a situation that indicates what is expected to happen if circumstances were equitable or typical?",
      "options": ["Must do it correctly", "Used to say what should happen if things were fair or normal", "A legal obligation", "Being very right"],
      "correctAnswer": "Used to say what should happen if things were fair or normal",
      "explanation": "Example: 'She should by rights be the winner'.",
      "points": 1
    },
    {
      "id": "c2-u44-b2-q5",
      "type": "fill-blank",
      "question": "The experiment ________ (well) fail if we are not careful.",
      "correctAnswer": "may well",
      "explanation": "Strong possibility.",
      "points": 1
    },
    {
      "id": "c2-u44-b2-q6",
      "type": "key-word-transformation",
      "question": "I'm sure he has already arrived. (MUST)\n\nHe ________ arrived by now. __________",
      "sentence": "I'm sure he has already arrived.",
      "keyWord": "MUST",
      "startOfAnswer": "He ________ arrived by now.",
      "correctAnswer": "must surely have",
      "explanation": "Using an intensifier with a modal for strong deduction.",
      "points": 1
    },
    {
      "id": "c2-u44-b2-q7",
      "type": "multiple-choice",
      "question": "Which modal verb best expresses a high degree of certainty about a past action or event that is inferred based on evidence?",
      "options": ["Must have", "Could have", "Should have", "Might have"],
      "correctAnswer": "Must have",
      "explanation": "Example: 'He must have left early'.",
      "points": 1
    },
    {
      "id": "c2-u44-b2-q8",
      "type": "fill-blank",
      "question": "You ________ (just) be right, though I doubt it.",
      "correctAnswer": "might just",
      "explanation": "Very remote possibility.",
      "points": 1
    },
    {
      "id": "c2-u44-b2-q9",
      "type": "key-word-transformation",
      "question": "I'm almost certain she didn't see me. (CAN'T)\n\nShe ________ seen me. __________",
      "sentence": "I'm almost certain she didn't see me.",
      "keyWord": "CAN'T",
      "startOfAnswer": "She ________ seen me.",
      "correctAnswer": "can't possibly have",
      "explanation": "Strong negative deduction with 'possibly' for emphasis.",
      "points": 1
    },
    {
      "id": "c2-u44-b2-q10",
      "type": "multiple-choice",
      "question": "Which phrase is most appropriate for conveying uncertainty in formal academic writing?",
      "options": ["It is definitely", "It appears to be (cautious statement)", "It will be", "It was"],
      "correctAnswer": "It appears to be (cautious statement)",
      "explanation": "Common in formal academic writing.",
      "points": 1
    }
  ]
};

export const C2_U44_BLOCK3: Exercise = {
  "id": "c2-u44-b3",
  "type": "vocabulary",
  "title": "Block 3: Perception & Cognitive Biases",
  "explanation": "Vocabulary for discussing how we perceive and misinterpret reality.",
  "questions": [
    {
      "id": "c2-u44-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'sensory perception'?",
      "options": ["Being very sensitive", "The process by which we receive and interpret information from the senses", "A type of biology", "A secret feeling"],
      "correctAnswer": "The process by which we receive and interpret information from the senses",
      "explanation": "Includes sight, sound, touch, taste, and smell.",
      "points": 1
    },
    {
      "id": "c2-u44-b3-q2",
      "type": "fill-blank",
      "question": "An ________ (optics) illusion.",
      "correctAnswer": "optical",
      "explanation": "An optical illusion is something that deceives the eye by appearing to be other than it is.",
      "points": 1
    },
    {
      "id": "c2-u44-b3-q3",
      "type": "multiple-choice",
      "question": "What is 'cognitive bias'?",
      "options": ["Being very smart", "A systematic error in thinking that affects decisions and judgments", "A type of computer code", "A personal preference"],
      "correctAnswer": "A systematic error in thinking that affects decisions and judgments",
      "explanation": "Examples include confirmation bias and the halo effect.",
      "points": 1
    },
    {
      "id": "c2-u44-b3-q4",
      "type": "fill-blank",
      "question": "The ________ (hallucinate) was vivid.",
      "correctAnswer": "hallucination",
      "explanation": "A hallucination is an experience involving the apparent perception of something not present.",
      "points": 1
    },
    {
      "id": "c2-u44-b3-q5",
      "type": "multiple-choice",
      "question": "What does 'subliminal' mean?",
      "options": ["Below the threshold of conscious perception", "Very high", "A type of lime", "Moving very fast"],
      "correctAnswer": "Below the threshold of conscious perception",
      "explanation": "Often used for 'subliminal advertising'.",
      "points": 1
    },
    {
      "id": "c2-u44-b3-q6",
      "type": "fill-blank",
      "question": "Our senses are ________ (fallible).",
      "correctAnswer": "fallible",
      "explanation": "Fallible means capable of making mistakes or being erroneous.",
      "points": 1
    },
    {
      "id": "c2-u44-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'synesthesia'?",
      "options": ["A type of anesthesia", "A condition in which one sense is perceived as if by one or more additional senses", "Being very synchronized", "A medical experiment"],
      "correctAnswer": "A condition in which one sense is perceived as if by one or more additional senses",
      "explanation": "Example: seeing sounds or tasting colors.",
      "points": 1
    },
    {
      "id": "c2-u44-b3-q8",
      "type": "fill-blank",
      "question": "The ________ (acuity) of his hearing.",
      "correctAnswer": "acuity",
      "explanation": "Acuity is sharpness or keenness of thought, vision, or hearing.",
      "points": 1
    },
    {
      "id": "c2-u44-b3-q9",
      "type": "multiple-choice",
      "question": "What is 'phenomenal' in a philosophical sense?",
      "options": ["Very good", "Relating to the appearances of things relative to our senses", "A type of science", "Moving quickly"],
      "correctAnswer": "Relating to the appearances of things relative to our senses",
      "explanation": "Contrasts with 'noumenal' (the thing in itself).",
      "points": 1
    },
    {
      "id": "c2-u44-b3-q10",
      "type": "fill-blank",
      "question": "A ________ (perception) shift.",
      "correctAnswer": "perceptual",
      "explanation": "Relating to the ability to interpret or become aware of something through the senses.",
      "points": 1
    }
  ]
};

export const C2_U44_BLOCK4: Exercise = {
  "id": "c2-u44-b4",
  "type": "grammar",
  "title": "Block 4: Strong Deduction & Extension",
  "explanation": "Mastering 'must', 'can't', and 'should' with various intensifiers and in complex clauses.",
  "questions": [
    {
      "id": "c2-u44-b4-q1",
      "type": "multiple-choice",
      "question": "Which expresses the highest certainty?",
      "options": ["He must have known", "He may have known", "He might have known", "He could have known"],
      "correctAnswer": "He must have known",
      "explanation": "Logical necessity.",
      "points": 1
    },
    {
      "id": "c2-u44-b4-q2",
      "type": "fill-blank",
      "question": "It ________ (not/can) be him; he's in Paris.",
      "correctAnswer": "can't",
      "explanation": "Negative logical necessity.",
      "points": 1
    },
    {
      "id": "c2-u44-b4-q3",
      "type": "key-word-transformation",
      "question": "I'm sure it was a mistake. (BEEN)\n\nIt ________ a mistake. __________",
      "sentence": "I'm sure it was a mistake.",
      "keyWord": "BEEN",
      "startOfAnswer": "It ________ a mistake.",
      "correctAnswer": "must have been",
      "explanation": "Strong deduction about the past.",
      "points": 1
    },
    {
      "id": "c2-u44-b4-q4",
      "type": "multiple-choice",
      "question": "Which statement best conveys the idea of a logical expectation about someone's presence based on available information?",
      "options": ["She is definitely there", "She is probably there (expectancy)", "She will be there", "She was there"],
      "correctAnswer": "She is probably there (expectancy)",
      "explanation": "'Should' for logical expectation.",
      "points": 1
    },
    {
      "id": "c2-u44-b4-q5",
      "type": "fill-blank",
      "question": "There ________ (be) some misunderstanding.",
      "correctAnswer": "must be",
      "explanation": "Deduction about the present.",
      "points": 1
    },
    {
      "id": "c2-u44-b4-q6",
      "type": "key-word-transformation",
      "question": "It is impossible that he told the truth. (CAN'T)\n\nHe ________ the truth. __________",
      "sentence": "It is impossible that he told the truth.",
      "keyWord": "CAN'T",
      "startOfAnswer": "He ________ the truth.",
      "correctAnswer": "can't have told",
      "explanation": "Negative past deduction.",
      "points": 1
    },
    {
      "id": "c2-u44-b4-q7",
      "type": "multiple-choice",
      "question": "Which adverb is most appropriately used to indicate a high degree of certainty in the statement 'He must ___ be exhausted'?",
      "options": ["surely", "possibly", "maybe", "perhaps"],
      "correctAnswer": "surely",
      "explanation": "Example: 'He must surely be exhausted'.",
      "points": 1
    },
    {
      "id": "c2-u44-b4-q8",
      "type": "fill-blank",
      "question": "If he left at 8, he ________ (should) be here by now.",
      "correctAnswer": "should",
      "explanation": "Expectation.",
      "points": 1
    },
    {
      "id": "c2-u44-b4-q9",
      "type": "key-word-transformation",
      "question": "I'm certain she didn't mean to hurt you. (HAVE)\n\nShe ________ meant to hurt you. __________",
      "sentence": "I'm certain she didn't mean to hurt you.",
      "keyWord": "HAVE",
      "startOfAnswer": "She ________ meant to hurt you.",
      "correctAnswer": "can't have",
      "explanation": "Negative past deduction.",
      "points": 1
    },
    {
      "id": "c2-u44-b4-q10",
      "type": "multiple-choice",
      "question": "Which of the following modal verbs can be used to speculate about past events?",
      "options": ["may have", "might have", "Both", "None"],
      "correctAnswer": "Both",
      "explanation": "Though 'might have' is more common in speech.",
      "points": 1
    }
  ]
};

export const C2_U44_BLOCK5: Exercise = {
  "id": "c2-u44-b5",
  "type": "vocabulary",
  "title": "Block 5: Perception Idioms",
  "explanation": "Idiomatic expressions related to seeing, hearing, and understanding.",
  "questions": [
    {
      "id": "c2-u44-b5-q1",
      "type": "multiple-choice",
      "question": "What does 'to see the light' mean?",
      "options": ["To turn on a lamp", "To finally understand or realize something", "To go to heaven", "To see a bright flash"],
      "correctAnswer": "To finally understand or realize something",
      "explanation": "Often implies a change of mind.",
      "points": 1
    },
    {
      "id": "c2-u44-b5-q2",
      "type": "fill-blank",
      "question": "It ________ (rings) a bell.",
      "correctAnswer": "rings",
      "explanation": "Means something sounds familiar but you can't remember the details.",
      "points": 1
    },
    {
      "id": "c2-u44-b5-q3",
      "type": "multiple-choice",
      "question": "What does 'to see eye to eye' mean?",
      "options": ["To look closely", "To agree with someone", "To be very angry", "To be tall"],
      "correctAnswer": "To agree with someone",
      "explanation": "Example: 'We don't always see eye to eye on politics'.",
      "points": 1
    },
    {
      "id": "c2-u44-b5-q4",
      "type": "fill-blank",
      "question": "To ________ (read) between the lines.",
      "correctAnswer": "read",
      "explanation": "Means to look for a hidden meaning.",
      "points": 1
    },
    {
      "id": "c2-u44-b5-q5",
      "type": "multiple-choice",
      "question": "What does 'to get the picture' mean?",
      "options": ["To take a photo", "To understand a situation", "To buy a painting", "To be very happy"],
      "correctAnswer": "To understand a situation",
      "explanation": "Often used after an explanation.",
      "points": 1
    },
    {
      "id": "c2-u44-b5-q6",
      "type": "fill-blank",
      "question": "A ________ (gut) feeling.",
      "correctAnswer": "gut",
      "explanation": "An intuition or instinctive feeling.",
      "points": 1
    },
    {
      "id": "c2-u44-b5-q7",
      "type": "multiple-choice",
      "question": "What does 'to be in the dark' mean?",
      "options": ["To be in a room with no light", "To be unaware of something", "To be a ghost", "To be very sad"],
      "correctAnswer": "To be unaware of something",
      "explanation": "The opposite of 'to be in the know'.",
      "points": 1
    },
    {
      "id": "c2-u44-b5-q8",
      "type": "fill-blank",
      "question": "To keep an ________ (eye) on something.",
      "correctAnswer": "eye",
      "explanation": "To watch or monitor something carefully.",
      "points": 1
    },
    {
      "id": "c2-u44-b5-q9",
      "type": "multiple-choice",
      "question": "What is 'a sight for sore eyes'?",
      "options": ["A very ugly person", "A person or thing that is very pleasing to see", "A medical condition", "Looking at the sun"],
      "correctAnswer": "A person or thing that is very pleasing to see",
      "explanation": "Often said when seeing a friend after a long time.",
      "points": 1
    },
    {
      "id": "c2-u44-b5-q10",
      "type": "fill-blank",
      "question": "A ________ (fleeting) glimpse.",
      "correctAnswer": "fleeting",
      "explanation": "A very brief look.",
      "points": 1
    }
  ]
};

export const C2_U44_BLOCK6: Exercise = {
  "id": "c2-u44-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Transforming Speculative Sentences",
  "explanation": "Practice advanced modals and perception vocabulary.",
  "questions": [
    {
      "id": "c2-u44-b6-q1",
      "type": "key-word-transformation",
      "question": "It is quite likely that he is lying. (WELL)\n\nHe ________ lying. __________",
      "sentence": "It is quite likely that he is lying.",
      "keyWord": "WELL",
      "startOfAnswer": "He ________ lying.",
      "correctAnswer": "may well be",
      "explanation": "Strong possibility.",
      "points": 1
    },
    {
      "id": "c2-u44-b6-q2",
      "type": "key-word-transformation",
      "question": "I'm sure he didn't see the sign. (HAVE)\n\nHe ________ the sign. __________",
      "sentence": "I'm sure he didn't see the sign.",
      "keyWord": "HAVE",
      "startOfAnswer": "He ________ the sign.",
      "correctAnswer": "can't have seen",
      "explanation": "Negative past deduction.",
      "points": 1
    },
    {
      "id": "c2-u44-b6-q3",
      "type": "key-word-transformation",
      "question": "It is just possible that the theory is correct. (MIGHT)\n\nThe theory ________ correct. __________",
      "sentence": "It is just possible that the theory is correct.",
      "keyWord": "MIGHT",
      "startOfAnswer": "The theory ________ correct.",
      "correctAnswer": "might just be",
      "explanation": "Remote possibility.",
      "points": 1
    },
    {
      "id": "c2-u44-b6-q4",
      "type": "key-word-transformation",
      "question": "I'm certain it was his fault. (BEEN)\n\nIt ________ his fault. __________",
      "sentence": "I'm certain it was his fault.",
      "keyWord": "BEEN",
      "startOfAnswer": "It ________ his fault.",
      "correctAnswer": "must have been",
      "explanation": "Strong deduction.",
      "points": 1
    },
    {
      "id": "c2-u44-b6-q5",
      "type": "key-word-transformation",
      "question": "She should be here by now if the flight was on time. (RIGHTS)\n\nShe ________ be here by now. __________",
      "sentence": "She should be here by now if the flight was on time.",
      "keyWord": "RIGHTS",
      "startOfAnswer": "She ________ be here by now.",
      "correctAnswer": "should by rights",
      "explanation": "Logical expectation.",
      "points": 1
    },
    {
      "id": "c2-u44-b6-q6",
      "type": "key-word-transformation",
      "question": "It is conceivable that they missed the train. (COULD)\n\nThey ________ missed the train. __________",
      "sentence": "It is conceivable that they missed the train.",
      "keyWord": "COULD",
      "startOfAnswer": "They ________ missed the train.",
      "correctAnswer": "could conceivably have",
      "explanation": "Remote past possibility.",
      "points": 1
    },
    {
      "id": "c2-u44-b6-q7",
      "type": "key-word-transformation",
      "question": "I'm almost sure he is telling the truth. (SURELY)\n\nHe ________ the truth. __________",
      "sentence": "I'm almost sure he is telling the truth.",
      "keyWord": "SURELY",
      "startOfAnswer": "He ________ the truth.",
      "correctAnswer": "must surely be telling",
      "explanation": "Intensified deduction.",
      "points": 1
    },
    {
      "id": "c2-u44-b6-q8",
      "type": "key-word-transformation",
      "question": "It appears that he is correct. (SEEM)\n\nHe ________ to be correct. __________",
      "sentence": "It appears that he is correct.",
      "keyWord": "SEEM",
      "startOfAnswer": "He ________ to be correct.",
      "correctAnswer": "would seem",
      "explanation": "Cautious modal use.",
      "points": 1
    },
    {
      "id": "c2-u44-b6-q9",
      "type": "key-word-transformation",
      "question": "I'm sure she didn't realize what was happening. (AWARE)\n\nShe ________ what was happening. __________",
      "sentence": "I'm sure she didn't realize what was happening.",
      "keyWord": "AWARE",
      "startOfAnswer": "She ________ what was happening.",
      "correctAnswer": "can't have been aware of",
      "explanation": "Negative past deduction with vocabulary.",
      "points": 1
    },
    {
      "id": "c2-u44-b6-q10",
      "type": "key-word-transformation",
      "question": "It is possible that the plan will succeed. (MAY)\n\nThe plan ________ succeed. __________",
      "sentence": "It is possible that the plan will succeed.",
      "keyWord": "MAY",
      "startOfAnswer": "The plan ________ succeed.",
      "correctAnswer": "may conceivably",
      "explanation": "Expression of possibility.",
      "points": 1
    }
  ]};

export const C2_U44_BLOCK7: Exercise = {
  "id": "c2-u44-b7",
  "type": "vocabulary",
  "title": "Block 7: Perception Vocabulary Synthesis",
  "explanation": "Reviewing key terms from the unit.",
  "questions": [
    {
      "id": "c2-u44-b7-q1",
      "type": "multiple-choice",
      "question": "Which term describes a perspective or judgment that is influenced by subjective impressions rather than objective facts?",
      "options": ["Based on facts", "Based on personal feelings", "Relating to the subject of a sentence", "A type of biology"],
      "correctAnswer": "Based on personal feelings",
      "explanation": "Opposite of objectivity.",
      "points": 1
    },
    {
      "id": "c2-u44-b7-q2",
      "type": "fill-blank",
      "question": "A ________ (noumenon) is the thing in itself.",
      "correctAnswer": "noumenon",
      "explanation": "Kant's term for reality independent of our perception.",
      "points": 1
    },
    {
      "id": "c2-u44-b7-q3",
      "type": "multiple-choice",
      "question": "What is 'empirical' evidence?",
      "options": ["Theoretical", "Based on observation", "Secret", "Imperial"],
      "correctAnswer": "Based on observation",
      "explanation": "Fundamental to science.",
      "points": 1
    },
    {
      "id": "c2-u44-b7-q4",
      "type": "fill-blank",
      "question": "An ________ (acuity) of vision.",
      "correctAnswer": "acuity",
      "explanation": "Sharpness.",
      "points": 1
    },
    {
      "id": "c2-u44-b7-q5",
      "type": "multiple-choice",
      "question": "What is 'solipsism'?",
      "options": ["Only self exists", "Everything is real", "No one exists", "God exists"],
      "correctAnswer": "Only self exists",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u44-b7-q6",
      "type": "fill-blank",
      "question": "The ________ (fallible) of memory.",
      "correctAnswer": "fallibility",
      "explanation": "The tendency to make mistakes.",
      "points": 1
    },
    {
      "id": "c2-u44-b7-q7",
      "type": "multiple-choice",
      "question": "What is 'synesthesia'?",
      "options": ["Mixing senses", "Losing senses", "Sharpening senses", "Studying senses"],
      "correctAnswer": "Mixing senses",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u44-b7-q8",
      "type": "fill-blank",
      "question": "A ________ (sublim) message.",
      "correctAnswer": "subliminal",
      "explanation": "Below consciousness.",
      "points": 1
    },
    {
      "id": "c2-u44-b7-q9",
      "type": "multiple-choice",
      "question": "What is 'ontology'?",
      "options": ["Study of being", "Study of birds", "Study of teeth", "Study of time"],
      "correctAnswer": "Study of being",
      "explanation": "Metaphysical branch.",
      "points": 1
    },
    {
      "id": "c2-u44-b7-q10",
      "type": "fill-blank",
      "question": "Paradigm ________ (shift).",
      "correctAnswer": "shift",
      "explanation": "Major change in understanding.",
      "points": 1
    }
  ]
};

export const C2_U44_BLOCK8: Exercise = {
  "id": "c2-u44-b8",
  "type": "reading",
  "title": "Block 8: Are we living in a Simulation?",
  "explanation": "Analyze a text about the Simulation Hypothesis and its implications.",
  "questions": [
    {
      "id": "c2-u44-b8-q1",
      "type": "multiple-choice",
      "question": "What is the Simulation Hypothesis?",
      "options": ["A type of video game", "The proposal that all of reality is an artificial simulation", "The idea that we simulate weather", "Being very fake"],
      "correctAnswer": "The proposal that all of reality is an artificial simulation",
      "explanation": "Popularized by Nick Bostrom.",
      "points": 1
    },
    {
      "id": "c2-u44-b8-q2",
      "type": "fill-blank",
      "question": "If true, it would ________ (radical) change our view of physics.",
      "correctAnswer": "radically",
      "explanation": "Radically means in a thorough or fundamental way.",
      "points": 1
    },
    {
      "id": "c2-u44-b8-q3",
      "type": "multiple-choice",
      "question": "What does 'post-human' mean in this context?",
      "options": ["After humans are extinct", "Future beings with capabilities far beyond those of current humans", "People who hate humans", "A type of biology"],
      "correctAnswer": "Future beings with capabilities far beyond those of current humans",
      "explanation": "They might have the power to run simulations of their ancestors.",
      "points": 1
    },
    {
      "id": "c2-u44-b8-q4",
      "type": "fill-blank",
      "question": "The ________ (computation) power required is immense.",
      "correctAnswer": "computational",
      "explanation": "Relating to or using computers.",
      "points": 1
    },
    {
      "id": "c2-u44-b8-q5",
      "type": "multiple-choice",
      "question": "What is 'falsifiability' in science?",
      "options": ["Being very false", "The ability for a theory to be proven wrong by evidence", "A type of lie", "Studying myths"],
      "correctAnswer": "The ability for a theory to be proven wrong by evidence",
      "explanation": "Popper argued that a theory must be falsifiable to be scientific.",
      "points": 1
    },
    {
      "id": "c2-u44-b8-q6",
      "type": "fill-blank",
      "question": "We must ________ (scrutiny) the arguments for this hypothesis.",
      "correctAnswer": "scrutinize",
      "explanation": "To scrutinize is to examine closely.",
      "points": 1
    },
    {
      "id": "c2-u44-b8-q7",
      "type": "multiple-choice",
      "question": "What is 'skeptical'?",
      "options": ["Very sure", "Not easily convinced; having doubts", "Very healthy", "Very fast"],
      "correctAnswer": "Not easily convinced; having doubts",
      "explanation": "Common attitude toward simulation theory.",
      "points": 1
    },
    {
      "id": "c2-u44-b8-q8",
      "type": "fill-blank",
      "question": "The ________ (implied) are staggering.",
      "correctAnswer": "implications",
      "explanation": "Implications are the conclusion that can be drawn from something although it is not explicitly stated.",
      "points": 1
    },
    {
      "id": "c2-u44-b8-q9",
      "type": "multiple-choice",
      "question": "What is 'non-physicalism'?",
      "options": ["Hating exercise", "The view that reality is not purely material", "A type of medicine", "Being very weak"],
      "correctAnswer": "The view that reality is not purely material",
      "explanation": "Consistent with idealism or simulation theory.",
      "points": 1
    },
    {
      "id": "c2-u44-b8-q10",
      "type": "fill-blank",
      "question": "Our ________ (perceive) of reality.",
      "correctAnswer": "perception",
      "explanation": "The way in which something is regarded, understood, or interpreted.",
      "points": 1
    }
  ]
};

export const C2_U44_BLOCK9: Exercise = {
  "id": "c2-u44-b9",
  "type": "vocabulary",
  "title": "Block 9: Reality & Deduction Review",
  "explanation": "Reviewing vocabulary and grammar from the unit.",
  "questions": [
    {
      "id": "c2-u44-b9-q1",
      "type": "multiple-choice",
      "question": "What is 'epistemology'?",
      "options": ["Theory of knowledge", "Nature of being", "Sound", "Meaning"],
      "correctAnswer": "Theory of knowledge",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u44-b9-q2",
      "type": "fill-blank",
      "question": "Deduction: He ________ (must/surely) have known.",
      "correctAnswer": "must surely",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u44-b9-q3",
      "type": "multiple-choice",
      "question": "What is 'solipsism'?",
      "options": ["Only self exists", "Everything is real", "No reality", "Sun study"],
      "correctAnswer": "Only self exists",
      "explanation": "Term review.",
      "points": 1
    },
    {
      "id": "c2-u44-b9-q4",
      "type": "fill-blank",
      "question": "It ________ (conceive) could be true.",
      "correctAnswer": "could conceivably",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u44-b9-q5",
      "type": "multiple-choice",
      "question": "What is 'empirical'?",
      "options": ["Observation-based", "Theory-based", "Secret", "Imperial"],
      "correctAnswer": "Observation-based",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u44-b9-q6",
      "type": "fill-blank",
      "question": "Rings a ________.",
      "correctAnswer": "bell",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u44-b9-q7",
      "type": "multiple-choice",
      "question": "What is 'acuity'?",
      "options": ["Sharpness", "Bluntness", "Wealth", "Power"],
      "correctAnswer": "Sharpness",
      "explanation": "Term review.",
      "points": 1
    },
    {
      "id": "c2-u44-b9-q8",
      "type": "fill-blank",
      "question": "It ________ (may/well) rain.",
      "correctAnswer": "may well",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u44-b9-q9",
      "type": "multiple-choice",
      "question": "What is 'synesthesia'?",
      "options": ["Mixing senses", "Losing senses", "Hearing", "Vision"],
      "correctAnswer": "Mixing senses",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u44-b9-q10",
      "type": "fill-blank",
      "question": "Gut ________.",
      "correctAnswer": "feeling",
      "explanation": "Idiom review.",
      "points": 1
    }
  ]
};

export const C2_U44_BLOCK10: Exercise = {
  "id": "c2-u44-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 44 Final Review",
  "explanation": "Final wrap-up of reality, perception, and advanced modals.",
  "questions": [
    {
      "id": "c2-u44-b10-q1",
      "type": "multiple-choice",
      "question": "Which is correct remote possibility?",
      "options": ["He may well be there", "He could conceivably be there", "He must be there", "He is there"],
      "correctAnswer": "He could conceivably be there",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u44-b10-q2",
      "type": "fill-blank",
      "question": "She ________ (should) by rights be here.",
      "correctAnswer": "should",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u44-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'ontology'?",
      "options": ["Study of being", "Knowledge", "Time", "Logic"],
      "correctAnswer": "Study of being",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u44-b10-q4",
      "type": "fill-blank",
      "question": "See eye to ________.",
      "correctAnswer": "eye",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u44-b10-q5",
      "type": "key-word-transformation",
      "question": "I'm sure he didn't mean it. (CAN'T)\n\nHe ________ meant it. __________",
      "sentence": "I'm sure he didn't mean it.",
      "keyWord": "CAN'T",
      "startOfAnswer": "He ________ meant it.",
      "correctAnswer": "can't have",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u44-b10-q6",
      "type": "multiple-choice",
      "question": "Which term relates to how something can be perceived through sensory experiences?",
      "options": ["Appearance to senses", "Very good", "Biology", "History"],
      "correctAnswer": "Appearance to senses",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u44-b10-q7",
      "type": "fill-blank",
      "question": "In the ________ (unaware).",
      "correctAnswer": "dark",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u44-b10-q8",
      "type": "key-word-transformation",
      "question": "I'm almost certain it was a mistake. (SURELY)\n\nIt ________ a mistake. __________",
      "sentence": "I'm almost certain it was a mistake.",
      "keyWord": "SURELY",
      "startOfAnswer": "It ________ a mistake.",
      "correctAnswer": "must surely have been",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u44-b10-q9",
      "type": "multiple-choice",
      "question": "What is 'fallible'?",
      "options": ["Capable of error", "Incapable of error", "Strong", "Weak"],
      "correctAnswer": "Capable of error",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u44-b10-q10",
      "type": "fill-blank",
      "question": "Cogito ________ sum.",
      "correctAnswer": "ergo",
      "explanation": "Philosophy review.",
      "points": 1
    }
  ]
};

export const C2_UNIT_44 = createC2Unit(
  'c2-u44',
  'The Nature of Reality & Perception',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U44_BLOCK1, C2_U44_BLOCK2, C2_U44_BLOCK3, C2_U44_BLOCK4, C2_U44_BLOCK5,
    C2_U44_BLOCK6, C2_U44_BLOCK7, C2_U44_BLOCK8, C2_U44_BLOCK9, C2_U44_BLOCK10
  ]
);
