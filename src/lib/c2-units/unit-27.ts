
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U27_BLOCK1: Exercise = {
  "id": "c2-u27-b1",
  "type": "vocabulary",
  "title": "Block 1: Religion & Spirituality",
  "explanation": "Advanced terminology for religious beliefs and practices (e.g., secularism, orthodoxy, dogma).",
  "questions": [
    {
      "id": "c2-u27-b1-q1",
      "type": "multiple-choice",
      "question": "What term describes the principle of separation of the state from religious institutions?",
      "options": ["The belief in many gods", "The principle of separation of the state from religious institutions", "A type of religious music", "Working in a church"],
      "correctAnswer": "The principle of separation of the state from religious institutions",
      "explanation": "Secularism is a key feature of many modern democracies.",
      "points": 1
    },
    {
      "id": "c2-u27-b1-q2",
      "type": "fill-blank",
      "question": "The ________ (ortho) view is the generally accepted theory, doctrine, or practice.",
      "correctAnswer": "orthodox",
      "explanation": "Orthodoxy contrasts with heterodoxy or heresy.",
      "points": 1
    },
    {
      "id": "c2-u27-b1-q3",
      "type": "multiple-choice",
      "question": "What is 'dogma'?",
      "options": ["A type of dog", "A principle or set of principles laid down by an authority as incontrovertibly true", "A new law", "A religious song"],
      "correctAnswer": "A principle or set of principles laid down by an authority as incontrovertibly true",
      "explanation": "Dogma is often used in a religious or ideological context.",
      "points": 1
    },
    {
      "id": "c2-u27-b1-q4",
      "type": "fill-blank",
      "question": "A ________ is a person who does not believe in the existence of a god or gods.",
      "correctAnswer": "atheist",
      "explanation": "Atheism is the absence of belief in deities.",
      "points": 1
    },
    {
      "id": "c2-u27-b1-q5",
      "type": "multiple-choice",
      "question": "What is an 'agnostic'?",
      "options": ["A person who believes in many gods", "A person who believes that nothing is known or can be known of the existence or nature of God", "A type of medicine", "A religious leader"],
      "correctAnswer": "A person who believes that nothing is known or can be known of the existence or nature of God",
      "explanation": "Agnosticism focuses on the limits of human knowledge.",
      "points": 1
    },
    {
      "id": "c2-u27-b1-q6",
      "type": "fill-blank",
      "question": "The ________ (sacred) texts of a religion are its most important writings.",
      "correctAnswer": "sacred",
      "explanation": "Sacred means connected with God or dedicated to a religious purpose.",
      "points": 1
    },
    {
      "id": "c2-u27-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'mysticism'?",
      "options": ["The study of magic", "Belief that union with or absorption into the Deity or the absolute, or the spiritual apprehension of knowledge inaccessible to the intellect, may be attained through contemplation and self-surrender", "A type of science fiction", "A government secret"],
      "correctAnswer": "Belief that union with or absorption into the Deity or the absolute, or the spiritual apprehension of knowledge inaccessible to the intellect, may be attained through contemplation and self-surrender",
      "explanation": "Mysticism is found in almost all major world religions.",
      "points": 1
    },
    {
      "id": "c2-u27-b1-q8",
      "type": "fill-blank",
      "question": "The priest delivered a powerful ________.",
      "correctAnswer": "sermon",
      "explanation": "A sermon is a talk on a religious or moral subject.",
      "points": 1
    },
    {
      "id": "c2-u27-b1-q9",
      "type": "multiple-choice",
      "question": "What is 'ecumenism'?",
      "options": ["The study of the economy", "The principle or aim of promoting unity among the world's Christian Churches", "A type of environment", "A religious dance"],
      "correctAnswer": "The principle or aim of promoting unity among the world's Christian Churches",
      "explanation": "Ecumenism seeks to bridge gaps between different denominations.",
      "points": 1
    },
    {
      "id": "c2-u27-b1-q10",
      "type": "fill-blank",
      "question": "The ________ (pilgrim) to Mecca is known as the Hajj.",
      "correctAnswer": "pilgrimage",
      "explanation": "A pilgrimage is a journey to a sacred place.",
      "points": 1
    }
  ]
};

export const C2_U27_BLOCK2: Exercise = {
  "id": "c2-u27-b2",
  "type": "grammar",
  "title": "Block 2: Advanced Modal Speculation",
  "explanation": "Using modals like 'must', 'could', 'might', and 'can't' with perfect and continuous infinitives for complex deductions.",
  "questions": [
    {
      "id": "c2-u27-b2-q1",
      "type": "multiple-choice",
      "question": "Which sentence expresses a strong deduction about the past?",
      "options": ["He must have been there.", "He might have been there.", "He could have been there.", "He should have been there."],
      "correctAnswer": "He must have been there.",
      "explanation": "Must have + past participle = strong certainty about the past.",
      "points": 1
    },
    {
      "id": "c2-u27-b2-q2",
      "startOfAnswer": "can't have",
      "type": "key-word-transformation",
      "question": "They couldn't have seen us, it was too dark. (SEE)\n\nThey _________ us.",
      "correctAnswer": "can't have seen",
      "explanation": "Negative deduction about the past.",
      "points": 1
    },
    {
      "id": "c2-u27-b2-q3",
      "type": "multiple-choice",
      "question": "What does 'may well' imply?",
      "options": ["A slight possibility", "A strong possibility", "A certainty", "An impossibility"],
      "correctAnswer": "A strong possibility",
      "explanation": "'May well' is a more formal and stronger version of 'may'.",
      "points": 1
    },
    {
      "id": "c2-u27-b2-q4",
      "startOfAnswer": "might be",
      "type": "key-word-transformation",
      "question": "He might wait for us at the station now. (WAIT)\n\nHe ________.",
      "correctAnswer": "might be waiting",
      "explanation": "Modal continuous for present speculation.",
      "points": 1
    },
    {
      "id": "c2-u27-b2-q5",
      "type": "multiple-choice",
      "question": "Which modal is used for a logical impossibility?",
      "options": ["Mustn't", "Can't", "Couldn't", "Both Can't and Couldn't"],
      "correctAnswer": "Both Can't and Couldn't",
      "explanation": "'Can't' (present) and 'couldn't' (past) express that something is impossible according to the evidence.",
      "points": 1
    },
    {
      "id": "c2-u27-b2-q6",
      "startOfAnswer": "should have",
      "type": "key-word-transformation",
      "question": "She should arrive by now, unless there was a delay. (ARRIVE)\n\nShe ________.",
      "correctAnswer": "should have arrived",
      "explanation": "Expressing expectation about the past.",
      "points": 1
    },
    {
      "id": "c2-u27-b2-q7",
      "type": "multiple-choice",
      "question": "What is the difference between 'might have' and 'might have been -ing'?",
      "options": ["They are identical.", "One is past simple, the other is past continuous.", "One is a fact, the other is a guess.", "None of the above"],
      "correctAnswer": "One is past simple, the other is past continuous.",
      "explanation": "'Might have been -ing' focuses on the duration or progress of the hypothetical action.",
      "points": 1
    },
    {
      "id": "c2-u27-b2-q8",
      "startOfAnswer": "could have been",
      "type": "key-word-transformation",
      "question": "The manuscript could write by a monk. (WRITE)\n\nThe manuscript ________.",
      "correctAnswer": "could have been written",
      "explanation": "Modal passive for past speculation.",
      "points": 1
    },
    {
      "id": "c2-u27-b2-q9",
      "type": "multiple-choice",
      "question": "Choose the most certain deduction: 'The keys aren't here.'",
      "options": ["I might have left them in the car.", "I could have left them in the car.", "I must have left them in the car.", "I should have left them in the car."],
      "correctAnswer": "I must have left them in the car.",
      "explanation": "'Must have' indicates the highest level of certainty among these options.",
      "points": 1
    },
    {
      "id": "c2-u27-b2-q10",
      "startOfAnswer": "can't have",
      "type": "key-word-transformation",
      "question": "It is not him you saw; he's in America. (BE)\n\nIt ________.",
      "correctAnswer": "can't have been",
      "explanation": "Negative certainty about the past.",
      "points": 1
    }
  ]
};

export const C2_U27_BLOCK3: Exercise = {
  "id": "c2-u27-b3",
  "type": "vocabulary",
  "title": "Block 3: New Age & Modern Beliefs",
  "explanation": "Terminology for contemporary spiritual trends.",
  "questions": [
    {
      "id": "c2-u27-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'mindfulness'?",
      "options": ["Having a full mind", "A mental state achieved by focusing one's awareness on the present moment, while calmly acknowledging and accepting one's feelings, thoughts, and bodily sensations", "Remembering everything", "A type of physical exercise"],
      "correctAnswer": "A mental state achieved by focusing one's awareness on the present moment, while calmly acknowledging and accepting one's feelings, thoughts, and bodily sensations",
      "explanation": "Mindfulness is a central practice in modern secular spirituality.",
      "points": 1
    },
    {
      "id": "c2-u27-b3-q2",
      "type": "fill-blank",
      "question": "Many people identify as ________ but not religious.",
      "correctAnswer": "spiritual",
      "explanation": "Being 'spiritual but not religious' (SBNR) is a common modern identity.",
      "points": 1
    },
    {
      "id": "c2-u27-b3-q3",
      "type": "multiple-choice",
      "question": "What does 'holistic' mean in a spiritual context?",
      "options": ["Full of holes", "Characterized by the belief that the parts of something are intimately interconnected and explicable only by reference to the whole", "Believing in the holy spirit", "A type of religious art"],
      "correctAnswer": "Characterized by the belief that the parts of something are intimately interconnected and explicable only by reference to the whole",
      "explanation": "Holistic approaches often combine physical, mental, and spiritual health.",
      "points": 1
    },
    {
      "id": "c2-u27-b3-q4",
      "type": "fill-blank",
      "question": "The concept of ________ refers to the sum of a person's actions in this and previous states of existence.",
      "correctAnswer": "karma",
      "explanation": "Karma is a key concept in Hinduism, Buddhism, and modern spirituality.",
      "points": 1
    },
    {
      "id": "c2-u27-b3-q5",
      "type": "multiple-choice",
      "question": "What is 'reincarnation'?",
      "options": ["Being very meat-oriented", "The rebirth of a soul in a new body", "A type of religious parade", "A government secret"],
      "correctAnswer": "The rebirth of a soul in a new body",
      "explanation": "Reincarnation is a core belief in many Eastern religions.",
      "points": 1
    },
    {
      "id": "c2-u27-b3-q6",
      "type": "fill-blank",
      "question": "A ________ is a person who has attained enlightenment.",
      "correctAnswer": "buddha",
      "explanation": "A buddha (or 'enlightened one') is a person who has achieved Nirvana.",
      "points": 1
    },
    {
      "id": "c2-u27-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'pantheism'?",
      "options": ["The belief in no gods", "The belief that the universe (or nature as the totality of everything) is identical with divinity, or that everything composes an all-encompassing, immanent god", "The study of kitchen pans", "A religious ceremony"],
      "correctAnswer": "The belief that the universe (or nature as the totality of everything) is identical with divinity, or that everything composes an all-encompassing, immanent god",
      "explanation": "Pantheism sees God in everything.",
      "points": 1
    },
    {
      "id": "c2-u27-b3-q8",
      "type": "fill-blank",
      "question": "Yoga is often practiced for its ________ benefits.",
      "correctAnswer": "therapeutic",
      "explanation": "Therapeutic means relating to the healing of disease.",
      "points": 1
    },
    {
      "id": "c2-u27-b3-q9",
      "type": "multiple-choice",
      "question": "What is 'syncretism'?",
      "options": ["A type of sink", "The amalgamation or attempted amalgamation of different religions, cultures, or schools of thought", "Working together in time", "A religious dance"],
      "correctAnswer": "The amalgamation or attempted amalgamation of different religions, cultures, or schools of thought",
      "explanation": "Syncretism is common in history and modern spirituality.",
      "points": 1
    },
    {
      "id": "c2-u27-b3-q10",
      "type": "fill-blank",
      "question": "The ________ (divine) nature of the universe.",
      "correctAnswer": "divine",
      "explanation": "Divine means of, from, or like God or a god.",
      "points": 1
    }
  ]
};

export const C2_U27_BLOCK4: Exercise = {
  "id": "c2-u27-b4",
  "type": "grammar",
  "title": "Block 4: Emphasis with 'It' and 'What'",
  "explanation": "Revisiting cleft sentences for spiritual and philosophical discourse.",
  "questions": [
    {
      "id": "c2-u27-b4-q1",
      "type": "key-word-transformation",
      "question": "'I am looking for inner peace.' (INNER)\n\nWhat I am looking for __________.",
      "options": ["What I am looking for is inner peace.", "It is inner peace that I am looking for.", "Inner peace is what I am looking for.", "All of the above"],
      "correctAnswer": "All of the above",
      "explanation": "Clefting and pseudo-clefting can both be used for emphasis.",
      "points": 1
    },
    {
      "id": "c2-u27-b4-q2",
      "type": "fill-blank",
      "question": "It was ________ (only) after the retreat that he felt better.",
      "correctAnswer": "only",
      "explanation": "Using 'only' for focus in an it-cleft.",
      "points": 1
    },
    {
      "id": "c2-u27-b4-q3",
      "type": "key-word-transformation",
      "question": "He values truth most of all. (WHAT)\n\n________ is truth. __________",
      "sentence": "He values truth most of all.",
      "keyWord": "WHAT",
      "startOfAnswer": "________ is truth.",
      "correctAnswer": "What he values most of all",
      "explanation": "What-cleft focus.",
      "points": 1
    },
    {
      "id": "c2-u27-b4-q4",
      "type": "key-word-transformation",
      "question": "What impressed me the most? (SILENCE)\n\nIt was __________ that impressed me.",
      "options": ["It was the silence that impressed me.", "The silence was it that impressed me.", "What impressed me was it the silence.", "It impressed me the silence."],
      "correctAnswer": "It was the silence that impressed me.",
      "explanation": "Standard it-cleft structure.",
      "points": 1
    },
    {
      "id": "c2-u27-b4-q5",
      "type": "fill-blank",
      "question": "What ________ (happen) was that I lost my way.",
      "correctAnswer": "happened",
      "explanation": "Pseudo-cleft focusing on an event.",
      "points": 1
    },
    {
      "id": "c2-u27-b4-q6",
      "type": "key-word-transformation",
      "question": "I only want a simple life. (ALL)\n\n________ is a simple life. __________",
      "sentence": "I only want a simple life.",
      "keyWord": "ALL",
      "startOfAnswer": "________ is a simple life.",
      "correctAnswer": "All I want",
      "explanation": "'All' as a focus marker.",
      "points": 1
    },
    {
      "id": "c2-u27-b4-q7",
      "type": "key-word-transformation",
      "question": "I came to visit you. (REASON)\n\nThe __________ I came was to see you.",
      "options": ["The reason I came was to see you.", "What I came for was to see you.", "It was to see you that I came.", "All of the above"],
      "correctAnswer": "All of the above",
      "explanation": "Various structures can be used to focus on different elements of a sentence.",
      "points": 1
    },
    {
      "id": "c2-u27-b4-q8",
      "type": "fill-blank",
      "question": "It ________ (be) in 1950 that the church was built.",
      "correctAnswer": "was",
      "explanation": "Focus on time.",
      "points": 1
    },
    {
      "id": "c2-u27-b4-q9",
      "type": "key-word-transformation",
      "question": "I like the energy of the temple. (THING)\n\nThe ________ the energy. __________",
      "sentence": "I like the energy of the temple.",
      "keyWord": "THING",
      "startOfAnswer": "The ________ the energy.",
      "correctAnswer": "thing that I like is",
      "explanation": "'The thing that' focus.",
      "points": 1
    },
    {
      "id": "c2-u27-b4-q10",
      "type": "multiple-choice",
      "question": "What is the primary purpose of using what-clefts in English sentences?",
      "options": ["To make the sentence longer", "To introduce a new topic or emphasize a specific point", "To avoid using verbs", "To be more poetic"],
      "correctAnswer": "To introduce a new topic or emphasize a specific point",
      "explanation": "What-clefts are powerful tools for managing discourse flow.",
      "points": 1
    }
  ]
};

export const C2_U27_BLOCK5: Exercise = {
  "id": "c2-u27-b5",
  "type": "vocabulary",
  "title": "Block 5: Secularism & Humanism",
  "explanation": "Vocabulary for non-religious worldviews.",
  "questions": [
    {
      "id": "c2-u27-b5-q1",
      "type": "multiple-choice",
      "question": "What is 'humanism'?",
      "options": ["The study of humans", "A rationalist outlook or system of thought attaching prime importance to human rather than divine or supernatural matters", "Working for a charity", "Being very kind"],
      "correctAnswer": "A rationalist outlook or system of thought attaching prime importance to human rather than divine or supernatural matters",
      "explanation": "Humanism focuses on human reason, ethics, and social justice.",
      "points": 1
    },
    {
      "id": "c2-u27-b5-q2",
      "type": "fill-blank",
      "question": "The ________ (enlighten) was an intellectual movement in the 17th and 18th centuries that emphasized reason over tradition.",
      "correctAnswer": "Enlightenment",
      "explanation": "The Enlightenment laid the foundations for modern secularism.",
      "points": 1
    },
    {
      "id": "c2-u27-b5-q3",
      "type": "multiple-choice",
      "question": "What is 'rationalism'?",
      "options": ["A type of logic", "The belief that opinions and actions should be based on reason and knowledge rather than on religious belief or emotional response", "Being very cold", "A type of architecture"],
      "correctAnswer": "The belief that opinions and actions should be based on reason and knowledge rather than on religious belief or emotional response",
      "explanation": "Rationalism is a core principle of humanism.",
      "points": 1
    },
    {
      "id": "c2-u27-b5-q4",
      "type": "fill-blank",
      "question": "A ________ is a person who rejects all religious and moral principles, often in the belief that life is meaningless.",
      "correctAnswer": "nihilist",
      "explanation": "Nihilism is a more extreme form of secularism.",
      "points": 1
    },
    {
      "id": "c2-u27-b5-q5",
      "type": "multiple-choice",
      "question": "What does 'disenchantment' mean in a sociological sense?",
      "options": ["Losing a magical spell", "The cultural rationalization and devaluation of religion in modern society", "Being very sad", "A type of insurance"],
      "correctAnswer": "The cultural rationalization and devaluation of religion in modern society",
      "explanation": "Max Weber famously wrote about the 'disenchantment of the world'.",
      "points": 1
    },
    {
      "id": "c2-u27-b5-q6",
      "type": "fill-blank",
      "question": "The ________ (profane) is the opposite of the sacred.",
      "correctAnswer": "profane",
      "explanation": "Profane means secular rather than religious.",
      "points": 1
    },
    {
      "id": "c2-u27-b5-q7",
      "type": "multiple-choice",
      "question": "What is 'pluralism'?",
      "options": ["Being more than one person", "A condition or system in which two or more states, groups, principles, sources of authority, etc., coexist", "The study of grammar", "A government secret"],
      "correctAnswer": "A condition or system in which two or more states, groups, principles, sources of authority, etc., coexist",
      "explanation": "Pluralism is essential for secular societies.",
      "points": 1
    },
    {
      "id": "c2-u27-b5-q8",
      "type": "fill-blank",
      "question": "They are advocating for a more ________ society.",
      "correctAnswer": "egalitarian",
      "explanation": "Egalitarian means relating to or believing in the principle that all people are equal.",
      "points": 1
    },
    {
      "id": "c2-u27-b5-q9",
      "type": "multiple-choice",
      "question": "What is 'skepticism'?",
      "options": ["Believing everything", "A skeptical attitude; doubt as to the truth of something", "A type of medicine", "A government secret"],
      "correctAnswer": "A skeptical attitude; doubt as to the truth of something",
      "explanation": "Skepticism is a key tool for critical thinking.",
      "points": 1
    },
    {
      "id": "c2-u27-b5-q10",
      "type": "fill-blank",
      "question": "The quest for ________ (know) is fundamental to humanism.",
      "correctAnswer": "knowledge",
      "explanation": "Knowledge is acquired through reason and experience.",
      "points": 1
    }
  ]
};

export const C2_U27_BLOCK6: Exercise = {
  "id": "c2-u27-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Deduction & Speculation in Practice",
  "explanation": "Transforming sentences to use modal verbs for deduction.",
  "questions": [
    {
      "id": "c2-u27-b6-q1",
      "type": "key-word-transformation",
      "question": "I'm sure he has forgotten the meeting. (MUST)\n\nHe ________ the meeting. __________",
      "sentence": "I'm sure he has forgotten the meeting.",
      "keyWord": "MUST",
      "startOfAnswer": "He ________ the meeting.",
      "correctAnswer": "must have forgotten",
      "explanation": "Strong deduction about the past.",
      "points": 1
    },
    {
      "id": "c2-u27-b6-q2",
      "type": "key-word-transformation",
      "question": "It's possible that they are still sleeping. (MIGHT)\n\nThey ________. __________",
      "sentence": "It's possible that they are still sleeping.",
      "keyWord": "MIGHT",
      "startOfAnswer": "They ________.",
      "correctAnswer": "might still be sleeping",
      "explanation": "Continuous modal for present speculation.",
      "points": 1
    },
    {
      "id": "c2-u27-b6-q3",
      "type": "key-word-transformation",
      "question": "I'm sure that isn't the truth. (CAN'T)\n\nThat ________ the truth. __________",
      "sentence": "I'm sure that isn't the truth.",
      "keyWord": "CAN'T",
      "startOfAnswer": "That ________ the truth.",
      "correctAnswer": "can't be",
      "explanation": "Negative certainty about the present.",
      "points": 1
    },
    {
      "id": "c2-u27-b6-q4",
      "type": "key-word-transformation",
      "question": "Perhaps he was working late. (MAY)\n\nHe ________ have been working late. __________",
      "sentence": "Perhaps he was working late.",
      "keyWord": "MAY",
      "startOfAnswer": "He ________ have been working late.",
      "correctAnswer": "may have been working",
      "explanation": "Speculation about a past continuous action.",
      "points": 1
    },
    {
      "id": "c2-u27-b6-q5",
      "type": "key-word-transformation",
      "question": "I'm sure they weren't invited. (COULDN'T)\n\nThey ________. __________",
      "sentence": "I'm sure they weren't invited.",
      "keyWord": "COULDN'T",
      "startOfAnswer": "They ________.",
      "correctAnswer": "couldn't have been invited",
      "explanation": "Negative deduction about the past (passive).",
      "points": 1
    },
    {
      "id": "c2-u27-b6-q6",
      "type": "key-word-transformation",
      "question": "I expect the letter has arrived by now. (SHOULD)\n\nThe letter ________ by now. __________",
      "sentence": "I expect the letter has arrived by now.",
      "keyWord": "SHOULD",
      "startOfAnswer": "The letter ________ by now.",
      "correctAnswer": "should have arrived",
      "explanation": "Expectation about the past.",
      "points": 1
    },
    {
      "id": "c2-u27-b6-q7",
      "type": "key-word-transformation",
      "question": "It's very likely that she will win. (WELL)\n\nShe ________ win. __________",
      "sentence": "It's very likely that she will win.",
      "keyWord": "WELL",
      "startOfAnswer": "She ________ win.",
      "correctAnswer": "may well",
      "explanation": "Strong possibility.",
      "points": 1
    },
    {
      "id": "c2-u27-b6-q8",
      "type": "key-word-transformation",
      "question": "I'm sure he didn't mean to hurt you. (CAN'T)\n\nHe ________ to hurt you. __________",
      "sentence": "I'm sure he didn't mean to hurt you.",
      "keyWord": "CAN'T",
      "startOfAnswer": "He ________ to hurt you.",
      "correctAnswer": "can't have meant",
      "explanation": "Negative deduction about past intention.",
      "points": 1
    },
    {
      "id": "c2-u27-b6-q9",
      "type": "key-word-transformation",
      "question": "Perhaps they didn't see the sign. (MIGHT)\n\nThey ________ the sign. __________",
      "sentence": "Perhaps they didn't see the sign.",
      "keyWord": "MIGHT",
      "startOfAnswer": "They ________ the sign.",
      "correctAnswer": "might not have seen",
      "explanation": "Past speculation.",
      "points": 1
    },
    {
      "id": "c2-u27-b6-q10",
      "type": "key-word-transformation",
      "question": "It's certain that he is lying. (BOUND)\n\nHe is ________. __________",
      "sentence": "It's certain that he is lying.",
      "keyWord": "BOUND",
      "startOfAnswer": "He is ________.",
      "correctAnswer": "bound to be lying",
      "explanation": "Using 'bound to' for certainty.",
      "points": 1
    }
  ]};

export const C2_U27_BLOCK7: Exercise = {
  "id": "c2-u27-b7",
  "type": "vocabulary",
  "title": "Block 7: Rituals & Symbols",
  "explanation": "Vocabulary for religious and spiritual ceremonies.",
  "questions": [
    {
      "id": "c2-u27-b7-q1",
      "type": "multiple-choice",
      "question": "What is the definition of the term \"ritual\"?",
      "options": ["A type of habit", "A religious or solemn ceremony consisting of a series of actions performed according to a prescribed order", "A loud noise", "A government secret"],
      "correctAnswer": "A religious or solemn ceremony consisting of a series of actions performed according to a prescribed order",
      "explanation": "Rituals provide structure and meaning to spiritual life.",
      "points": 1
    },
    {
      "id": "c2-u27-b7-q2",
      "type": "fill-blank",
      "question": "The ________ (sacrament) of baptism is important in Christianity.",
      "correctAnswer": "sacrament",
      "explanation": "A sacrament is a religious ceremony or act that is regarded as an outward and visible sign of inward and spiritual divine grace.",
      "points": 1
    },
    {
      "id": "c2-u27-b7-q3",
      "type": "multiple-choice",
      "question": "What is 'incense'?",
      "options": ["Being very angry", "A gum, spice, or other substance that is burned for the sweet smell it produces", "A type of tax", "A religious song"],
      "correctAnswer": "A gum, spice, or other substance that is burned for the sweet smell it produces",
      "explanation": "Incense is used in many religious rituals.",
      "points": 1
    },
    {
      "id": "c2-u27-b7-q4",
      "type": "fill-blank",
      "question": "The ________ (altar) is the table or platform used as the focus for a religious ritual.",
      "correctAnswer": "altar",
      "explanation": "The altar is often the most sacred place in a temple or church.",
      "points": 1
    },
    {
      "id": "c2-u27-b7-q5",
      "type": "multiple-choice",
      "question": "What is 'communion'?",
      "options": ["Speaking to someone", "The service of Christian worship at which bread and wine are consecrated and shared", "Living in a commune", "A type of insurance"],
      "correctAnswer": "The service of Christian worship at which bread and wine are consecrated and shared",
      "explanation": "Also known as the Eucharist or the Lord's Supper.",
      "points": 1
    },
    {
      "id": "c2-u27-b7-q6",
      "type": "key-word-transformation",
      "question": "The monk spent his life in ________ (SOLITUDE).\n\nStart of answer __________",
      "correctAnswer": "solitude",
      "explanation": "El término 'solitude' se refiere a un estado de estar solo, sin compañía.",
      "points": 1
    },
    {
      "id": "c2-u27-b7-q7",
      "type": "multiple-choice",
      "question": "What is a 'shrine'?",
      "options": ["A bright light", "A place regarded as holy because of its associations with a divinity or a sacred person or relic", "A type of clothing", "A government secret"],
      "correctAnswer": "A place regarded as holy because of its associations with a divinity or a sacred person or relic",
      "explanation": "Shrines attract pilgrims and worshippers.",
      "points": 1
    },
    {
      "id": "c2-u27-b7-q8",
      "type": "fill-blank",
      "question": "The ________ (liturgy) is the customary public worship performed by a religious group.",
      "correctAnswer": "liturgy",
      "explanation": "Liturgy includes the structure and words of a service.",
      "points": 1
    },
    {
      "id": "c2-u27-b7-q9",
      "type": "multiple-choice",
      "question": "What does 'to consecrate' mean?",
      "options": ["To think carefully", "To make or declare (something, typically a church) sacred", "To build a bridge", "To shout"],
      "correctAnswer": "To make or declare (something, typically a church) sacred",
      "explanation": "Consecration is a formal religious act.",
      "points": 1
    },
    {
      "id": "c2-u27-b7-q10",
      "type": "fill-blank",
      "question": "The cross is a ________ of Christianity.",
      "correctAnswer": "symbol",
      "explanation": "Symbols represent abstract ideas or beliefs.",
      "points": 1
    }
  ]
};

export const C2_U27_BLOCK8: Exercise = {
  "id": "c2-u27-b8",
  "type": "grammar",
  "title": "Block 8: Sophisticated Modal Alternatives",
  "explanation": "Using phrases like 'it's bound to', 'there's no way', and 'it's highly likely' to express degrees of certainty.",
  "questions": [
    {
      "id": "c2-u27-b8-q1",
      "type": "multiple-choice",
      "question": "Which phrase expresses the highest degree of certainty?",
      "options": ["It's possible.", "It's likely.", "It's bound to happen.", "It might happen."],
      "correctAnswer": "It's bound to happen.",
      "explanation": "'Bound to' implies inevitability.",
      "points": 1
    },
    {
      "id": "c2-u27-b8-q2",
      "type": "fill-blank",
      "question": "There's ________ (way) that he could have known.",
      "correctAnswer": "no way",
      "explanation": "Expressing impossibility.",
      "points": 1
    },
    {
      "id": "c2-u27-b8-q3",
      "type": "key-word-transformation",
      "question": "It is certain that the project will succeed. (FAIL)\n\nThe project ________ not __________.",
      "sentence": "It is certain that the project will succeed.",
      "keyWord": "FAIL",
      "startOfAnswer": "The project cannot",
      "correctAnswer": "fail",
      "explanation": "Expressing certainty through negation.",
      "points": 1
    },
    {
      "id": "c2-u27-b8-q4",
      "type": "multiple-choice",
      "question": "Which of the following statements best reflects the meaning of the phrase \"He's very likely to win\" in the context of betting?",
      "options": ["He's likely to lose.", "He's very likely to win.", "He's weird.", "He's wearing a tie."],
      "correctAnswer": "He's very likely to win.",
      "explanation": "A term from betting used to express strong probability.",
      "points": 1
    },
    {
      "id": "c2-u27-b8-q5",
      "type": "fill-blank",
      "question": "It's ________ (highly) that the meeting will be cancelled.",
      "correctAnswer": "highly likely",
      "explanation": "Strong probability.",
      "points": 1
    },
    {
      "id": "c2-u27-b8-q6",
      "type": "key-word-transformation",
      "question": "I'm sure he is at home. (PROBABILITY)\n\nIn ________, he is at home.",
      "sentence": "I'm sure he is at home.",
      "keyWord": "PROBABILITY",
      "startOfAnswer": "all probability",
      "correctAnswer": "he is at home",
      "explanation": "Formal expression of high probability.",
      "points": 1
    },
    {
      "id": "c2-u27-b8-q7",
      "type": "multiple-choice",
      "question": "Which of the following phrases indicates a low probability of something happening?",
      "options": ["There's a faint chance.", "It's bound to.", "It's a dead certainty.", "No way."],
      "correctAnswer": "There's a faint chance.",
      "explanation": "'Faint' or 'slight' chance implies low probability.",
      "points": 1
    },
    {
      "id": "c2-u27-b8-q8",
      "type": "fill-blank",
      "question": "The ________ (likelihood) of success is slim.",
      "correctAnswer": "likelihood",
      "explanation": "Likelihood is the state or fact of something's being likely; probability.",
      "points": 1
    },
    {
      "id": "c2-u27-b8-q9",
      "type": "key-word-transformation",
      "question": "I'm sure they didn't see us. (CANNOT)\n\nThey ________ us. __________",
      "sentence": "I'm sure they didn't see us.",
      "keyWord": "CANNOT",
      "startOfAnswer": "They ________ us.",
      "correctAnswer": "cannot have seen",
      "explanation": "Negative certainty about the past.",
      "points": 1
    },
    {
      "id": "c2-u27-b8-q10",
      "type": "multiple-choice",
      "question": "What is the term used to describe the cognitive bias where individuals form beliefs and make decisions based on what is pleasing to imagine, rather than on evidence, rationality, or reality?",
      "options": ["Thinking about wishes", "The formation of beliefs and making decisions according to what might be pleasing to imagine instead of by appealing to evidence, rationality, or reality", "Being very positive", "A religious ceremony"],
      "correctAnswer": "The formation of beliefs and making decisions according to what might be pleasing to imagine instead of by appealing to evidence, rationality, or reality",
      "explanation": "Wishful thinking is a common cognitive bias.",
      "points": 1
    }
  ]
};

export const C2_U27_BLOCK9: Exercise = {
  "id": "c2-u27-b9",
  "type": "reading",
  "title": "Block 9: The Future of Faith",
  "explanation": "Analyze a text about the changing religious landscape in the 21st century.",
  "questions": [
    {
      "id": "c2-u27-b9-q1",
      "type": "multiple-choice",
      "question": "What is 'secularization'?",
      "options": ["Becoming more religious", "The action or process of converting something from religious to secular possession or use", "A type of tax", "Building a bridge"],
      "correctAnswer": "The action or process of converting something from religious to secular possession or use",
      "explanation": "The secularization thesis suggests that religion declines as societies modernize.",
      "points": 1
    },
    {
      "id": "c2-u27-b9-q2",
      "type": "fill-blank",
      "question": "There is a ________ (revive) of interest in traditional spiritual practices.",
      "correctAnswer": "revival",
      "explanation": "Revival means an improvement in the condition or strength of something.",
      "points": 1
    },
    {
      "id": "c2-u27-b9-q3",
      "type": "multiple-choice",
      "question": "What is 'fundamentalism'?",
      "options": ["A type of building", "A form of a religion, especially Islam or Protestant Christianity, that upholds belief in the strict, literal interpretation of scripture", "A new law", "A religious song"],
      "correctAnswer": "A form of a religion, especially Islam or Protestant Christianity, that upholds belief in the strict, literal interpretation of scripture",
      "explanation": "Fundamentalism is often a reaction against modernism.",
      "points": 1
    },
    {
      "id": "c2-u27-b9-q4",
      "type": "fill-blank",
      "question": "The ________ (global) of religion is a complex phenomenon.",
      "correctAnswer": "globalization",
      "explanation": "Globalization affects how religions spread and interact.",
      "points": 1
    },
    {
      "id": "c2-u27-b9-q5",
      "type": "multiple-choice",
      "question": "What is 'interfaith dialogue'?",
      "options": ["Dialogue within a family", "Cooperative, constructive, and positive interaction between people of different religious traditions and/or spiritual or humanistic beliefs", "A type of internet speed", "A government secret"],
      "correctAnswer": "Cooperative, constructive, and positive interaction between people of different religious traditions and/or spiritual or humanistic beliefs",
      "explanation": "Interfaith dialogue aims to promote understanding and peace.",
      "points": 1
    },
    {
      "id": "c2-u27-b9-q6",
      "type": "fill-blank",
      "question": "Religion remains a ________ (power) force in the world today.",
      "correctAnswer": "powerful",
      "explanation": "Despite secularization, religion continues to influence politics and culture.",
      "points": 1
    },
    {
      "id": "c2-u27-b9-q7",
      "type": "multiple-choice",
      "question": "What does 'non-denominational' mean?",
      "options": ["Having no money", "Not restricted to or associated with any particular religious denomination", "A type of tax", "Working in a school"],
      "correctAnswer": "Not restricted to or associated with any particular religious denomination",
      "explanation": "Non-denominational churches are growing in many countries.",
      "points": 1
    },
    {
      "id": "c2-u27-b9-q8",
      "type": "fill-blank",
      "question": "The ________ (perceive) of religion is changing.",
      "correctAnswer": "perception",
      "explanation": "Perception is the way in which something is regarded, understood, or interpreted.",
      "points": 1
    },
    {
      "id": "c2-u27-b9-q9",
      "type": "multiple-choice",
      "question": "What is 'spirituality' in the 21st century?",
      "options": ["Just going to church", "A broad concept with room for many perspectives; in general, it includes a sense of connection to something bigger than ourselves", "A type of science", "A government secret"],
      "correctAnswer": "A broad concept with room for many perspectives; in general, it includes a sense of connection to something bigger than ourselves",
      "explanation": "Modern spirituality is often individualized and eclectic.",
      "points": 1
    },
    {
      "id": "c2-u27-b9-q10",
      "type": "fill-blank",
      "question": "Faith is a ________ (subject) experience.",
      "correctAnswer": "subjective",
      "explanation": "Subjective means based on or influenced by personal feelings, tastes, or opinions.",
      "points": 1
    }
  ]
};

export const C2_U27_BLOCK10: Exercise = {
  "id": "c2-u27-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 27 Review",
  "explanation": "Final review of Spirituality and Modern Belief terminology.",
  "questions": [
    {
      "id": "c2-u27-b10-q1",
      "type": "multiple-choice",
      "question": "What is 'secularism'?",
      "options": ["State religion", "Separation of state and religion", "A type of bird", "A quiet sound"],
      "correctAnswer": "Separation of state and religion",
      "explanation": "Core vocabulary from Block 1.",
      "points": 1
    },
    {
      "id": "c2-u27-b10-q2",
      "type": "fill-blank",
      "question": "He ________ (must/forget) about the time.",
      "correctAnswer": "must have forgotten",
      "explanation": "Modal deduction.",
      "points": 1
    },
    {
      "id": "c2-u27-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'mindfulness'?",
      "options": ["Present moment awareness", "Remembering facts", "A type of food", "Online gaming"],
      "correctAnswer": "Present moment awareness",
      "explanation": "Modern spiritual term.",
      "points": 1
    },
    {
      "id": "c2-u27-b10-q4",
      "type": "fill-blank",
      "question": "What ________ (happen) was a miracle.",
      "correctAnswer": "happened",
      "explanation": "What-cleft.",
      "points": 1
    },
    {
      "id": "c2-u27-b10-q5",
      "type": "key-word-transformation",
      "question": "I'm sure it wasn't him. (CAN'T)\n\nIt ________ him. __________",
      "sentence": "I'm sure it wasn't him.",
      "keyWord": "CAN'T",
      "startOfAnswer": "It ________ him.",
      "correctAnswer": "can't have been",
      "explanation": "Modal deduction.",
      "points": 1
    },
    {
      "id": "c2-u27-b10-q6",
      "type": "multiple-choice",
      "question": "Which of the following options is commonly associated with foundational truths in religious contexts?",
      "options": ["A dog", "Incontrovertible principles", "A new book", "A fast car"],
      "correctAnswer": "Incontrovertible principles",
      "explanation": "Religious term.",
      "points": 1
    },
    {
      "id": "c2-u27-b10-q7",
      "type": "fill-blank",
      "question": "He's ________ (bound) to win.",
      "correctAnswer": "bound",
      "explanation": "Expressing certainty.",
      "points": 1
    },
    {
      "id": "c2-u27-b10-q8",
      "type": "key-word-transformation",
      "question": "I only wanted to help. (ALL)\n\n________ was help. __________",
      "sentence": "I only wanted to help.",
      "keyWord": "ALL",
      "startOfAnswer": "________ was help.",
      "correctAnswer": "All I wanted",
      "explanation": "Emphasis.",
      "points": 1
    },
    {
      "id": "c2-u27-b10-q9",
      "type": "multiple-choice",
      "question": "What is 'reincarnation'?",
      "options": ["Rebirth", "Death", "A type of tax", "A government secret"],
      "correctAnswer": "Rebirth",
      "explanation": "Spiritual term.",
      "points": 1
    },
    {
      "id": "c2-u27-b10-q10",
      "type": "fill-blank",
      "question": "The power of ________ is huge.",
      "correctAnswer": "belief",
      "explanation": "Core topic of the unit.",
      "points": 1
    }
  ]
};

export const C2_UNIT_27 = createC2Unit(
  'c2-u27',
  'Spirituality & Modern Belief',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U27_BLOCK1, C2_U27_BLOCK2, C2_U27_BLOCK3, C2_U27_BLOCK4, C2_U27_BLOCK5,
    C2_U27_BLOCK6, C2_U27_BLOCK7, C2_U27_BLOCK8, C2_U27_BLOCK9, C2_U27_BLOCK10
  ]
);
