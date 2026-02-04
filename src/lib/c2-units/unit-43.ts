
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U43_BLOCK1: Exercise = {
  "id": "c2-u43-b1",
  "type": "vocabulary",
  "title": "Block 1: Modern Ethical Dilemmas",
  "explanation": "Vocabulary for discussing complex moral issues in the 21st century.",
  "questions": [
    {
      "id": "c2-u43-b1-q1",
      "type": "multiple-choice",
      "question": "Which of the following best describes a discipline that encompasses discussions around cloning and gene editing?",
      "options": ["The study of life", "The ethics of medical and biological research", "A type of biology", "Being very healthy"],
      "correctAnswer": "The ethics of medical and biological research",
      "explanation": "Includes topics like cloning and gene editing.",
      "points": 1
    },
    {
      "id": "c2-u43-b1-q2",
      "type": "fill-blank",
      "question": "The use of AI raises significant ________ (ethical) concerns.",
      "correctAnswer": "ethical",
      "explanation": "Ethical means relating to moral principles.",
      "points": 1
    },
    {
      "id": "c2-u43-b1-q3",
      "type": "multiple-choice",
      "question": "What is 'whistleblowing'?",
      "options": ["Playing a whistle", "Reporting illegal or unethical behavior within an organization", "Working for a government", "A type of music"],
      "correctAnswer": "Reporting illegal or unethical behavior within an organization",
      "explanation": "Whistleblowers often face professional risks.",
      "points": 1
    },
    {
      "id": "c2-u43-b1-q4",
      "type": "fill-blank",
      "question": "We must ensure ________ (account) in government.",
      "correctAnswer": "accountability",
      "explanation": "Accountability is the fact or condition of being accountable; responsibility.",
      "points": 1
    },
    {
      "id": "c2-u43-b1-q5",
      "type": "multiple-choice",
      "question": "What does 'nepotism' mean?",
      "options": ["Being very religious", "The practice among those with power or influence of favoring relatives or friends", "A type of philosophy", "Working in a museum"],
      "correctAnswer": "The practice among those with power or influence of favoring relatives or friends",
      "explanation": "Often seen in business and politics.",
      "points": 1
    },
    {
      "id": "c2-u43-b1-q6",
      "type": "fill-blank",
      "question": "A ________ (conscience) objection.",
      "correctAnswer": "conscientious",
      "explanation": "A refusal to do something on moral or religious grounds.",
      "points": 1
    },
    {
      "id": "c2-u43-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'surveillance capitalism'?",
      "options": ["Selling cameras", "The monetization of data acquired through surveillance of people's lives", "A type of bank", "A government program"],
      "correctAnswer": "The monetization of data acquired through surveillance of people's lives",
      "explanation": "A term coined by Shoshana Zuboff.",
      "points": 1
    },
    {
      "id": "c2-u43-b1-q8",
      "type": "fill-blank",
      "question": "The ________ (integr) of the judicial system.",
      "correctAnswer": "integrity",
      "explanation": "Integrity is the quality of being honest and having strong moral principles.",
      "points": 1
    },
    {
      "id": "c2-u43-b1-q9",
      "type": "multiple-choice",
      "question": "What is 'exploitation'?",
      "options": ["Explaining things", "The action or fact of treating someone unfairly in order to benefit from their work", "Exploring a place", "A type of science"],
      "correctAnswer": "The action or fact of treating someone unfairly in order to benefit from their work",
      "explanation": "Often discussed in the context of labor rights.",
      "points": 1
    },
    {
      "id": "c2-u43-b1-q10",
      "type": "fill-blank",
      "question": "An ________ (equivocal) answer.",
      "correctAnswer": "equivocal",
      "explanation": "Equivocal means open to more than one interpretation; ambiguous.",
      "points": 1
    }
  ]
};

export const C2_U43_BLOCK2: Exercise = {
  "id": "c2-u43-b2",
  "type": "grammar",
  "title": "Block 2: Advanced Concession (Albeit, Notwithstanding)",
  "explanation": "Using 'albeit' (even though) and 'notwithstanding' (despite) in formal contexts.",
  "questions": [
    {
      "id": "c2-u43-b2-q1",
      "type": "multiple-choice",
      "question": "Where is 'albeit' usually placed?",
      "options": ["At the beginning of a sentence", "Before an adjective or adverbial phrase", "At the end of a sentence", "Before a verb"],
      "correctAnswer": "Before an adjective or adverbial phrase",
      "explanation": "Example: 'He was helpful, albeit somewhat slow'.",
      "points": 1
    },
    {
      "id": "c2-u43-b2-q2",
      "type": "fill-blank",
      "question": "________ (notwithstand) the weather, we decided to go out.",
      "correctAnswer": "Notwithstanding",
      "explanation": "Notwithstanding can be used at the beginning or after the noun.",
      "points": 1
    },
    {
      "id": "c2-u43-b2-q3",
      "type": "key-word-transformation",
      "question": "Despite the high cost, it was worth it. (NOTWITHSTANDING)\n\nThe high cost ________, it was worth it. __________",
      "sentence": "Despite the high cost, it was worth it.",
      "keyWord": "NOTWITHSTANDING",
      "startOfAnswer": "The high cost ________, it was worth it.",
      "correctAnswer": "notwithstanding",
      "explanation": "Post-positive use of 'notwithstanding'.",
      "points": 1
    },
    {
      "id": "c2-u43-b2-q4",
      "type": "multiple-choice",
      "question": "Which of the following sentences uses \"albeit\" correctly?",
      "options": ["Albeit he was tired, he finished", "He finished the job, albeit with difficulty", "I went home albeit it was late", "He is albeit a nice man"],
      "correctAnswer": "He finished the job, albeit with difficulty",
      "explanation": "'Albeit' is usually followed by a phrase, not a clause with a subject and verb.",
      "points": 1
    },
    {
      "id": "c2-u43-b2-q5",
      "type": "fill-blank",
      "question": "The evidence, ________ (notwithstand), was not conclusive.",
      "correctAnswer": "notwithstanding",
      "explanation": "Used as a preposition or adverb.",
      "points": 1
    },
    {
      "id": "c2-u43-b2-q6",
      "type": "key-word-transformation",
      "question": "She was happy although she was poor. (ALBEIT)\n\nShe was happy, ________. __________",
      "sentence": "She was happy although she was poor.",
      "keyWord": "ALBEIT",
      "startOfAnswer": "She was happy, ________.",
      "correctAnswer": "albeit poor",
      "explanation": "Concise concession.",
      "points": 1
    },
    {
      "id": "c2-u43-b2-q7",
      "type": "multiple-choice",
      "question": "Which of the following words is used to introduce a clause that presents a contrasting idea, particularly in a formal context?",
      "options": ["Although", "Despite", "Because", "Moreover"],
      "correctAnswer": "Despite",
      "explanation": "Both are formal prepositions of concession.",
      "points": 1
    },
    {
      "id": "c2-u43-b2-q8",
      "type": "fill-blank",
      "question": "It was a victory, ________ (albeit) a small one.",
      "correctAnswer": "albeit",
      "explanation": "Classic use of 'albeit'.",
      "points": 1
    },
    {
      "id": "c2-u43-b2-q9",
      "type": "key-word-transformation",
      "question": "He continued to work even though he was sick. (NOTWITHSTANDING)\n\n________, he continued to work. __________",
      "sentence": "He continued to work even though he was sick.",
      "keyWord": "NOTWITHSTANDING",
      "startOfAnswer": "________, he continued to work.",
      "correctAnswer": "His sickness notwithstanding",
      "explanation": "Using a noun phrase.",
      "points": 1
    },
    {
      "id": "c2-u43-b2-q10",
      "type": "multiple-choice",
      "question": "Is it acceptable to use \"although\" as a conjunction at the beginning of a sentence in formal writing?",
      "options": ["Yes", "No", "Only in poetry", "Only in American English"],
      "correctAnswer": "No",
      "explanation": "It's a conjunction that usually introduces a subordinate phrase.",
      "points": 1
    }
  ]
};

export const C2_U43_BLOCK3: Exercise = {
  "id": "c2-u43-b3",
  "type": "vocabulary",
  "title": "Block 3: Corporate Ethics & Accountability",
  "explanation": "Terms for discussing the moral responsibilities of organizations.",
  "questions": [
    {
      "id": "c2-u43-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'Corporate Social Responsibility' (CSR)?",
      "options": ["Making a profit", "A business model that helps a company be socially accountable to itself, its stakeholders, and the public", "Paying taxes", "A type of marketing"],
      "correctAnswer": "A business model that helps a company be socially accountable to itself, its stakeholders, and the public",
      "explanation": "Involves environmental and social goals.",
      "points": 1
    },
    {
      "id": "c2-u43-b3-q2",
      "type": "fill-blank",
      "question": "A ________ (stake) is anyone with an interest in a company.",
      "correctAnswer": "stakeholder",
      "explanation": "Includes employees, customers, and the community.",
      "points": 1
    },
    {
      "id": "c2-u43-b3-q3",
      "type": "multiple-choice",
      "question": "What is 'greenwashing'?",
      "options": ["Cleaning plants", "The process of conveying a false impression or providing misleading information about how a company's products are environmentally sound", "A type of recycling", "Buying green clothes"],
      "correctAnswer": "The process of conveying a false impression or providing misleading information about how a company's products are environmentally sound",
      "explanation": "A deceptive marketing practice.",
      "points": 1
    },
    {
      "id": "c2-u43-b3-q4",
      "type": "fill-blank",
      "question": "The ________ (transpar) of the supply chain.",
      "correctAnswer": "transparency",
      "explanation": "Transparency allows consumers to see how products are made.",
      "points": 1
    },
    {
      "id": "c2-u43-b3-q5",
      "type": "multiple-choice",
      "question": "What is 'insider trading'?",
      "options": ["Trading inside a building", "The illegal practice of trading on the stock exchange to one's own advantage through having access to confidential information", "Working in a store", "A legal investment strategy"],
      "correctAnswer": "The illegal practice of trading on the stock exchange to one's own advantage through having access to confidential information",
      "explanation": "A major financial crime.",
      "points": 1
    },
    {
      "id": "c2-u43-b3-q6",
      "type": "fill-blank",
      "question": "Ethical ________ (invest).",
      "correctAnswer": "investment",
      "explanation": "Choosing to invest only in companies that meet moral standards.",
      "points": 1
    },
    {
      "id": "c2-u43-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'the triple bottom line'?",
      "options": ["Three lines of code", "A framework that incorporates three dimensions of performance: social, environmental, and financial", "A type of bank statement", "Winning three games"],
      "correctAnswer": "A framework that incorporates three dimensions of performance: social, environmental, and financial",
      "explanation": "Often summarized as 'people, planet, profit'.",
      "points": 1
    },
    {
      "id": "c2-u43-b3-q8",
      "type": "fill-blank",
      "question": "He was accused of ________ (corrupt).",
      "correctAnswer": "corruption",
      "explanation": "Dishonest or fraudulent conduct by those in power.",
      "points": 1
    },
    {
      "id": "c2-u43-b3-q9",
      "type": "multiple-choice",
      "question": "What is 'fiduciary duty'?",
      "options": ["A duty to one's family", "A legal obligation of one party to act in the best interest of another", "Working for a government", "Being very faithful"],
      "correctAnswer": "A legal obligation of one party to act in the best interest of another",
      "explanation": "Commonly used for company directors and financial advisors.",
      "points": 1
    },
    {
      "id": "c2-u43-b3-q10",
      "type": "fill-blank",
      "question": "A ________ (code) of ethics.",
      "correctAnswer": "code",
      "explanation": "A document outlining the moral standards of an organization.",
      "points": 1
    }
  ]
};

export const C2_U43_BLOCK4: Exercise = {
  "id": "c2-u43-b4",
  "type": "grammar",
  "title": "Block 4: Contrastive Structures (Much as, Even so)",
  "explanation": "Using 'Much as' (although I like/want), 'Even so' (nevertheless), 'Be that as it may', etc.",
  "questions": [
    {
      "id": "c2-u43-b4-q1",
      "type": "multiple-choice",
      "question": "What does 'Much as' usually express?",
      "options": ["Quantity", "Contrast with a strong feeling or desire", "Reason", "Addition"],
      "correctAnswer": "Contrast with a strong feeling or desire",
      "explanation": "Example: 'Much as I'd like to help, I can't'.",
      "points": 1
    },
    {
      "id": "c2-u43-b4-q2",
      "type": "fill-blank",
      "question": "The data is flawed. ________ (even), we must proceed.",
      "correctAnswer": "Even so",
      "explanation": "'Even so' is a transition phrase similar to 'nevertheless'.",
      "points": 1
    },
    {
      "id": "c2-u43-b4-q3",
      "type": "key-word-transformation",
      "question": "I understand your point, but I still disagree. (MAY)\n\nBe that ________, I still disagree. __________",
      "sentence": "I understand your point, but I still disagree.",
      "keyWord": "MAY",
      "startOfAnswer": "Be that ________, I still disagree.",
      "correctAnswer": "as it may",
      "explanation": "'Be that as it may' is a formal way to say 'nevertheless'.",
      "points": 1
    },
    {
      "id": "c2-u43-b4-q4",
      "type": "multiple-choice",
      "question": "Which of the following options correctly completes the sentence: \"________, he failed\"?",
      "options": ["Much as he tried, he failed", "Much that he tried, he failed", "Much so he tried, he failed", "Much if he tried, he failed"],
      "correctAnswer": "Much as he tried, he failed",
      "explanation": "Standard structure.",
      "points": 1
    },
    {
      "id": "c2-u43-b4-q5",
      "type": "fill-blank",
      "question": "________ (grant) that he is talented, he is still unreliable.",
      "correctAnswer": "Granted",
      "explanation": "'Granted' (or 'Granting') introduces a concession.",
      "points": 1
    },
    {
      "id": "c2-u43-b4-q6",
      "type": "key-word-transformation",
      "question": "Although I admire his work, I don't like him personally. (MUCH)\n\n________ his work, I don't like him personally. __________",
      "sentence": "Although I admire his work, I don't like him personally.",
      "keyWord": "MUCH",
      "startOfAnswer": "________ his work, I don't like him personally.",
      "correctAnswer": "Much as I admire",
      "explanation": "Using 'Much as' for concession.",
      "points": 1
    },
    {
      "id": "c2-u43-b4-q7",
      "type": "multiple-choice",
      "question": "Which part of a sentence typically contains a contrasting idea or conclusion?",
      "options": ["Beginning", "Middle", "End", "None"],
      "correctAnswer": "End",
      "explanation": "Example: 'It's expensive. I'm going to buy it, though'.",
      "points": 1
    },
    {
      "id": "c2-u43-b4-q8",
      "type": "fill-blank",
      "question": "The risk is high. ________ (neverthe), we must act.",
      "correctAnswer": "Nevertheless",
      "explanation": "Formal contrast.",
      "points": 1
    },
    {
      "id": "c2-u43-b4-q9",
      "type": "key-word-transformation",
      "question": "It doesn't matter what you say, I won't change my mind. (WHATEVER)\n\n________, I won't change my mind. __________",
      "sentence": "It doesn't matter what you say, I won't change my mind.",
      "keyWord": "WHATEVER",
      "startOfAnswer": "________, I won't change my mind.",
      "correctAnswer": "Whatever you say",
      "explanation": "Concession clause.",
      "points": 1
    },
    {
      "id": "c2-u43-b4-q10",
      "type": "multiple-choice",
      "question": "Which of the following phrases is used to suggest that despite a negative aspect, the overall sentiment remains positive?",
      "options": ["Furthermore", "All the same", "Besides", "Hence"],
      "correctAnswer": "All the same",
      "explanation": "Example: 'He's a bit rude, but I like him all the same'.",
      "points": 1
    }
  ]
};

export const C2_U43_BLOCK5: Exercise = {
  "id": "c2-u43-b5",
  "type": "vocabulary",
  "title": "Block 5: Ethical Idioms & Phrases",
  "explanation": "Mastering figurative language related to morality and right/wrong.",
  "questions": [
    {
      "id": "c2-u43-b5-q1",
      "type": "multiple-choice",
      "question": "What does 'to take the high road' mean?",
      "options": ["To drive on a highway", "To behave in a moral or ethical way, especially when others are not", "To be very fast", "To travel a long distance"],
      "correctAnswer": "To behave in a moral or ethical way, especially when others are not",
      "explanation": "Often used in politics.",
      "points": 1
    },
    {
      "id": "c2-u43-b5-q2",
      "type": "fill-blank",
      "question": "It's a matter of ________ (princip).",
      "correctAnswer": "principle",
      "explanation": "A 'matter of principle' is something you do because you believe it is right.",
      "points": 1
    },
    {
      "id": "c2-u43-b5-q3",
      "type": "multiple-choice",
      "question": "What is 'a slippery slope'?",
      "options": ["A wet hill", "A course of action that seems likely to lead from one bad event to another", "A type of winter sport", "A successful strategy"],
      "correctAnswer": "A course of action that seems likely to lead from one bad event to another",
      "explanation": "Often used in ethical arguments.",
      "points": 1
    },
    {
      "id": "c2-u43-b5-q4",
      "type": "fill-blank",
      "question": "He has a clean ________ (bill) of health.",
      "correctAnswer": "bill",
      "explanation": "Used metaphorically to mean someone is cleared of wrongdoing.",
      "points": 1
    },
    {
      "id": "c2-u43-b5-q5",
      "type": "multiple-choice",
      "question": "What does 'to turn a blind eye' mean?",
      "options": ["To be blind", "To pretend not to notice something bad", "To look closely", "To be very angry"],
      "correctAnswer": "To pretend not to notice something bad",
      "explanation": "Ignoring unethical behavior.",
      "points": 1
    },
    {
      "id": "c2-u43-b5-q6",
      "type": "fill-blank",
      "question": "A ________ (grey) area.",
      "correctAnswer": "grey",
      "explanation": "An area where the rules are not clear.",
      "points": 1
    },
    {
      "id": "c2-u43-b5-q7",
      "type": "multiple-choice",
      "question": "What is 'the lesser of two evils'?",
      "options": ["A small bad thing", "The better of two bad options", "A type of movie", "Being very small"],
      "correctAnswer": "The better of two bad options",
      "explanation": "Common ethical dilemma.",
      "points": 1
    },
    {
      "id": "c2-u43-b5-q8",
      "type": "fill-blank",
      "question": "Wash your ________ (hands) of something.",
      "correctAnswer": "hands",
      "explanation": "To refuse to be responsible for or involved with something.",
      "points": 1
    },
    {
      "id": "c2-u43-b5-q9",
      "type": "multiple-choice",
      "question": "What does 'to practice what you preach' mean?",
      "options": ["To be a priest", "To do the things that you tell other people to do", "To talk a lot", "To go to church"],
      "correctAnswer": "To do the things that you tell other people to do",
      "explanation": "Avoiding hypocrisy.",
      "points": 1
    },
    {
      "id": "c2-u43-b5-q10",
      "type": "fill-blank",
      "question": "A skeleton in the ________ (closet).",
      "correctAnswer": "closet",
      "explanation": "A shocking or embarrassing secret from the past.",
      "points": 1
    }
  ]
};

export const C2_U43_BLOCK6: Exercise = {
  "id": "c2-u43-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Transforming Ethical Sentences",
  "explanation": "Practice using concession and contrast in context.",
  "questions": [
    {
      "id": "c2-u43-b6-q1",
      "type": "key-word-transformation",
      "question": "Despite his talent, he is very lazy. (ALBEIT)\n\nHe is talented, ________. __________",
      "sentence": "Despite his talent, he is very lazy.",
      "keyWord": "ALBEIT",
      "startOfAnswer": "He is talented, ________.",
      "correctAnswer": "albeit lazy",
      "explanation": "Concise concession.",
      "points": 1
    },
    {
      "id": "c2-u43-b6-q2",
      "type": "key-word-transformation",
      "question": "Although I love chocolate, I shouldn't eat it. (MUCH)\n\n________ chocolate, I shouldn't eat it. __________",
      "sentence": "Although I love chocolate, I shouldn't eat it.",
      "keyWord": "MUCH",
      "startOfAnswer": "________ chocolate, I shouldn't eat it.",
      "correctAnswer": "Much as I love",
      "explanation": "Using 'Much as'.",
      "points": 1
    },
    {
      "id": "c2-u43-b6-q3",
      "type": "key-word-transformation",
      "question": "He is very rich, but he is also very mean. (BE)\n\nHe is very rich; ________, he is also very mean. __________",
      "sentence": "He is very rich, but he is also very mean.",
      "keyWord": "BE",
      "startOfAnswer": "He is very rich; ________, he is also very mean.",
      "correctAnswer": "be that as it may",
      "explanation": "Formal contrast.",
      "points": 1
    },
    {
      "id": "c2-u43-b6-q4",
      "type": "key-word-transformation",
      "question": "Despite the rain, the match went ahead. (NOTWITHSTANDING)\n\nThe rain ________, the match went ahead. __________",
      "sentence": "Despite the rain, the match went ahead.",
      "keyWord": "NOTWITHSTANDING",
      "startOfAnswer": "The rain ________, the match went ahead.",
      "correctAnswer": "notwithstanding",
      "explanation": "Post-positive preposition.",
      "points": 1
    },
    {
      "id": "c2-u43-b6-q5",
      "type": "key-word-transformation",
      "question": "I admit he's smart, but he's not a genius. (GRANTED)\n\n________ he's smart, he's not a genius. __________",
      "sentence": "I admit he's smart, but he's not a genius.",
      "keyWord": "GRANTED",
      "startOfAnswer": "________ he's smart, he's not a genius.",
      "correctAnswer": "Granted",
      "explanation": "Concession marker.",
      "points": 1
    },
    {
      "id": "c2-u43-b6-q6",
      "type": "key-word-transformation",
      "question": "Even though it was expensive, it was worth it. (EVEN)\n\nIt was expensive. ________, it was worth it. __________",
      "sentence": "Even though it was expensive, it was worth it.",
      "keyWord": "EVEN",
      "startOfAnswer": "It was expensive. ________, it was worth it.",
      "correctAnswer": "Even so",
      "explanation": "Sentence transition.",
      "points": 1
    },
    {
      "id": "c2-u43-b6-q7",
      "type": "key-word-transformation",
      "question": "He is a good man although he has some flaws. (ALBEIT)\n\nHe is a good man, ________. __________",
      "sentence": "He is a good man although he has some flaws.",
      "keyWord": "ALBEIT",
      "startOfAnswer": "He is a good man, ________.",
      "correctAnswer": "albeit flawed",
      "explanation": "Using the adjective form.",
      "points": 1
    },
    {
      "id": "c2-u43-b6-q8",
      "type": "key-word-transformation",
      "question": "I'd like to help you, but I'm too busy. (MUCH)\n\n________ to help you, I'm too busy. __________",
      "sentence": "I'd like to help you, but I'm too busy.",
      "keyWord": "MUCH",
      "startOfAnswer": "________ to help you, I'm too busy.",
      "correctAnswer": "Much as I'd like",
      "explanation": "Contrasting desire.",
      "points": 1
    },
    {
      "id": "c2-u43-b6-q9",
      "type": "key-word-transformation",
      "question": "Despite her efforts, she failed. (NOTWITHSTANDING)\n\n________, she failed. __________",
      "sentence": "Despite her efforts, she failed.",
      "keyWord": "NOTWITHSTANDING",
      "startOfAnswer": "________, she failed.",
      "correctAnswer": "Her efforts notwithstanding",
      "explanation": "Post-positive use.",
      "points": 1
    },
    {
      "id": "c2-u43-b6-q10",
      "type": "key-word-transformation",
      "question": "It is true that he lied, but he apologized. (GRANTED)\n\n________ that he lied, he apologized. __________",
      "sentence": "It is true that he lied, but he apologized.",
      "keyWord": "GRANTED",
      "startOfAnswer": "________ that he lied, he apologized.",
      "correctAnswer": "Granted",
      "explanation": "Concession marker.",
      "points": 1
    }
  ]};

export const C2_U43_BLOCK7: Exercise = {
  "id": "c2-u43-b7",
  "type": "vocabulary",
  "title": "Block 7: Ethical Vocabulary Synthesis",
  "explanation": "Reviewing key terms from the unit.",
  "questions": [
    {
      "id": "c2-u43-b7-q1",
      "type": "multiple-choice",
      "question": "Which term best describes a quality characterized by unselfish concern for others?",
      "options": ["Unselfish concern for others", "Selfish", "A type of musician", "A government official"],
      "correctAnswer": "Unselfish concern for others",
      "explanation": "Opposite of egoist.",
      "points": 1
    },
    {
      "id": "c2-u43-b7-q2",
      "type": "fill-blank",
      "question": "A ________ (virtue) life.",
      "correctAnswer": "virtuous",
      "explanation": "Having high moral standards.",
      "points": 1
    },
    {
      "id": "c2-u43-b7-q3",
      "type": "multiple-choice",
      "question": "What is 'benevolence'?",
      "options": ["Being very violent", "Kindness", "Wealth", "Power"],
      "correctAnswer": "Kindness",
      "explanation": "Meaning well.",
      "points": 1
    },
    {
      "id": "c2-u43-b7-q4",
      "type": "fill-blank",
      "question": "He has high ________ (moral).",
      "correctAnswer": "morals",
      "explanation": "Principles of right and wrong.",
      "points": 1
    },
    {
      "id": "c2-u43-b7-q5",
      "type": "multiple-choice",
      "question": "What is 'rectitude'?",
      "options": ["Being correct", "Morally correct behavior or thinking; righteousness", "A type of geometry", "Setting things right"],
      "correctAnswer": "Morally correct behavior or thinking; righteousness",
      "explanation": "Formal term.",
      "points": 1
    },
    {
      "id": "c2-u43-b7-q6",
      "type": "fill-blank",
      "question": "A ________ (lapse) in judgment.",
      "correctAnswer": "lapse",
      "explanation": "A temporary failure of concentration, memory, or judgment.",
      "points": 1
    },
    {
      "id": "c2-u43-b7-q7",
      "type": "multiple-choice",
      "question": "What is 'culpability'?",
      "options": ["Being capable", "Responsibility for a fault or wrong; blame", "A type of sculpture", "Being very fast"],
      "correctAnswer": "Responsibility for a fault or wrong; blame",
      "explanation": "Legal and ethical term.",
      "points": 1
    },
    {
      "id": "c2-u43-b7-q8",
      "type": "fill-blank",
      "question": "An ________ (unscrup) businessman.",
      "correctAnswer": "unscrupulous",
      "explanation": "Having or showing no moral principles; not honest or fair.",
      "points": 1
    },
    {
      "id": "c2-u43-b7-q9",
      "type": "multiple-choice",
      "question": "What is 'probity'?",
      "options": ["A type of probe", "The quality of having strong moral principles; honesty and decency", "Probability", "A type of medicine"],
      "correctAnswer": "The quality of having strong moral principles; honesty and decency",
      "explanation": "Formal term.",
      "points": 1
    },
    {
      "id": "c2-u43-b7-q10",
      "type": "fill-blank",
      "question": "Moral ________ (rect).",
      "correctAnswer": "rectitude",
      "explanation": "Righteousness.",
      "points": 1
    }
  ]
};

export const C2_U43_BLOCK8: Exercise = {
  "id": "c2-u43-b8",
  "type": "reading",
  "title": "Block 8: The Ethics of Artificial Intelligence",
  "explanation": "Analyze a text about algorithmic bias and machine ethics.",
  "questions": [
    {
      "id": "c2-u43-b8-q1",
      "type": "multiple-choice",
      "question": "What is 'algorithmic bias'?",
      "options": ["Computers being faster than humans", "Systematic and repeatable errors in a computer system that create unfair outcomes", "A type of programming language", "Computers being too smart"],
      "correctAnswer": "Systematic and repeatable errors in a computer system that create unfair outcomes",
      "explanation": "Often reflects human biases in training data.",
      "points": 1
    },
    {
      "id": "c2-u43-b8-q2",
      "type": "fill-blank",
      "question": "AI systems must be ________ (explain).",
      "correctAnswer": "explainable",
      "explanation": "The 'black box' problem in AI refers to the lack of explainability.",
      "points": 1
    },
    {
      "id": "c2-u43-b8-q3",
      "type": "multiple-choice",
      "question": "What is 'human-in-the-loop'?",
      "options": ["A person wearing a hula hoop", "A model that requires human interaction in the decision-making process", "A type of exercise", "A circular building"],
      "correctAnswer": "A model that requires human interaction in the decision-making process",
      "explanation": "Often proposed as a safety measure for AI.",
      "points": 1
    },
    {
      "id": "c2-u43-b8-q4",
      "type": "fill-blank",
      "question": "The ________ (autonomy) of the machine.",
      "correctAnswer": "autonomy",
      "explanation": "Autonomy is the capacity to make an informed, uncoerced decision.",
      "points": 1
    },
    {
      "id": "c2-u43-b8-q5",
      "type": "multiple-choice",
      "question": "What is the 'trolley problem' in AI?",
      "options": ["A problem with a shopping cart", "A thought experiment about ethical choices for autonomous vehicles", "A type of mechanical failure", "A city traffic issue"],
      "correctAnswer": "A thought experiment about ethical choices for autonomous vehicles",
      "explanation": "Who should a self-driving car save in a crash?",
      "points": 1
    },
    {
      "id": "c2-u43-b8-q6",
      "type": "fill-blank",
      "question": "We must avoid ________ (anthropomorph) machines.",
      "correctAnswer": "anthropomorphizing",
      "explanation": "Attributing human characteristics to machines.",
      "points": 1
    },
    {
      "id": "c2-u43-b8-q7",
      "type": "multiple-choice",
      "question": "What is 'data sovereignty'?",
      "options": ["A data king", "The idea that data is subject to the laws of the country in which it is located", "Buying data", "Protecting data"],
      "correctAnswer": "The idea that data is subject to the laws of the country in which it is located",
      "explanation": "A major issue in global tech ethics.",
      "points": 1
    },
    {
      "id": "c2-u43-b8-q8",
      "type": "fill-blank",
      "question": "The ________ (scrutiny) of AI algorithms.",
      "correctAnswer": "scrutiny",
      "explanation": "Critical observation or examination.",
      "points": 1
    },
    {
      "id": "c2-u43-b8-q9",
      "type": "multiple-choice",
      "question": "What is 'transhumanism'?",
      "options": ["Being very human", "The belief that humans should use technology to enhance their mental and physical abilities", "A type of biology", "Hating technology"],
      "correctAnswer": "The belief that humans should use technology to enhance their mental and physical abilities",
      "explanation": "Includes life extension and cybernetics.",
      "points": 1
    },
    {
      "id": "c2-u43-b8-q10",
      "type": "fill-blank",
      "question": "Linguistic ________ (bias).",
      "correctAnswer": "bias",
      "explanation": "Bias in how language is used or interpreted.",
      "points": 1
    }
  ]
};

export const C2_U43_BLOCK9: Exercise = {
  "id": "c2-u43-b9",
  "type": "vocabulary",
  "title": "Block 9: Ethics & Contrast Review",
  "explanation": "Reviewing vocabulary and grammar from the unit.",
  "questions": [
    {
      "id": "c2-u43-b9-q1",
      "type": "multiple-choice",
      "question": "What is 'whistleblowing'?",
      "options": ["Reporting misconduct", "Playing music", "Working hard", "Sleeping"],
      "correctAnswer": "Reporting misconduct",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u43-b9-q2",
      "type": "fill-blank",
      "question": "He was smart, ________ (albeit) rude.",
      "correctAnswer": "albeit",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u43-b9-q3",
      "type": "multiple-choice",
      "question": "What is 'nepotism'?",
      "options": ["Favoring relatives", "Favoring strangers", "Religion", "Power"],
      "correctAnswer": "Favoring relatives",
      "explanation": "Term review.",
      "points": 1
    },
    {
      "id": "c2-u43-b9-q4",
      "type": "fill-blank",
      "question": "Much ________ I love cake, I shouldn't eat it.",
      "correctAnswer": "as",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u43-b9-q5",
      "type": "multiple-choice",
      "question": "What is 'greenwashing'?",
      "options": ["Misleading environmental claims", "Cleaning", "Recycling", "Marketing"],
      "correctAnswer": "Misleading environmental claims",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u43-b9-q6",
      "type": "fill-blank",
      "question": "Be that as it ________.",
      "correctAnswer": "may",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u43-b9-q7",
      "type": "multiple-choice",
      "question": "What is 'integrity'?",
      "options": ["Moral principles", "Wealth", "Power", "History"],
      "correctAnswer": "Moral principles",
      "explanation": "Term review.",
      "points": 1
    },
    {
      "id": "c2-u43-b9-q8",
      "type": "fill-blank",
      "question": "The high cost ________ (notwithstand).",
      "correctAnswer": "notwithstanding",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u43-b9-q9",
      "type": "multiple-choice",
      "question": "What is 'accountability'?",
      "options": ["Responsibility", "Math", "Power", "Science"],
      "correctAnswer": "Responsibility",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u43-b9-q10",
      "type": "fill-blank",
      "question": "Slippery ________.",
      "correctAnswer": "slope",
      "explanation": "Idiom review.",
      "points": 1
    }
  ]
};

export const C2_U43_BLOCK10: Exercise = {
  "id": "c2-u43-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 43 Final Review",
  "explanation": "Final wrap-up of ethics and concession/contrast.",
  "questions": [
    {
      "id": "c2-u43-b10-q1",
      "type": "multiple-choice",
      "question": "Which is correct concession?",
      "options": ["Albeit he was poor", "He was happy, albeit poor", "Albeit with poor he was happy", "Poor he was albeit happy"],
      "correctAnswer": "He was happy, albeit poor",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u43-b10-q2",
      "type": "fill-blank",
      "question": "________ (notwithstand) his age, he is very fit.",
      "correctAnswer": "Notwithstanding",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u43-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'insider trading'?",
      "options": ["Illegal trading on confidential info", "Trading inside", "Buying stocks", "Selling cars"],
      "correctAnswer": "Illegal trading on confidential info",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u43-b10-q4",
      "type": "fill-blank",
      "question": "Turn a blind ________.",
      "correctAnswer": "eye",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u43-b10-q5",
      "type": "key-word-transformation",
      "question": "I like him, but I don't trust him. (MUCH)\n\n________ him, I don't trust him. __________",
      "sentence": "I like him, but I don't trust him.",
      "keyWord": "MUCH",
      "startOfAnswer": "________ him, I don't trust him.",
      "correctAnswer": "Much as I like",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u43-b10-q6",
      "type": "multiple-choice",
      "question": "Which area of study encompasses the moral principles and guidelines that govern the practice of medicine?",
      "options": ["Medical ethics", "Biology", "Life", "Power"],
      "correctAnswer": "Medical ethics",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u43-b10-q7",
      "type": "fill-blank",
      "question": "Matter of ________.",
      "correctAnswer": "principle",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u43-b10-q8",
      "type": "key-word-transformation",
      "question": "Even though it was raining, we went out. (SO)\n\nIt was raining. ________, we went out. __________",
      "sentence": "Even though it was raining, we went out.",
      "keyWord": "SO",
      "startOfAnswer": "It was raining. ________, we went out.",
      "correctAnswer": "Even so",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u43-b10-q9",
      "type": "multiple-choice",
      "question": "What is 'culpability'?",
      "options": ["Blame", "Ability", "Wealth", "Power"],
      "correctAnswer": "Blame",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u43-b10-q10",
      "type": "fill-blank",
      "question": "Practice what you ________.",
      "correctAnswer": "preach",
      "explanation": "Idiom review.",
      "points": 1
    }
  ]
};

export const C2_UNIT_43 = createC2Unit(
  'c2-u43',
  'Ethics in the 21st Century',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U43_BLOCK1, C2_U43_BLOCK2, C2_U43_BLOCK3, C2_U43_BLOCK4, C2_U43_BLOCK5,
    C2_U43_BLOCK6, C2_U43_BLOCK7, C2_U43_BLOCK8, C2_U43_BLOCK9, C2_U43_BLOCK10
  ]
);
