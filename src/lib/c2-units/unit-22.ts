
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U22_BLOCK1: Exercise = {
  "id": "c2-u22-b1",
  "type": "vocabulary",
  "title": "Block 1: Legal Systems & Jurisprudence",
  "explanation": "Advanced terminology for the law, courts, and legal philosophy.",
  "questions": [
    {
      "id": "c2-u22-b1-q1",
      "type": "multiple-choice",
      "question": "Which term refers to the theory or philosophy that investigates the nature and purpose of laws?",
      "options": ["The study of plants", "The theory or philosophy of law", "A type of court case", "A government department"],
      "correctAnswer": "The theory or philosophy of law",
      "explanation": "Jurisprudence explores the nature and purpose of law.",
      "points": 1
    },
    {
      "id": "c2-u22-b1-q2",
      "type": "fill-blank",
      "question": "The defendant was ________ by a jury of his peers.",
      "correctAnswer": "acquitted",
      "explanation": "To acquit is to free someone from a criminal charge by a verdict of not guilty.",
      "points": 1
    },
    {
      "id": "c2-u22-b1-q3",
      "type": "multiple-choice",
      "question": "What does 'litigation' refer to?",
      "options": ["Writing a book", "The process of taking legal action", "Reading a law", "A type of insurance"],
      "correctAnswer": "The process of taking legal action",
      "explanation": "Litigation is the term for a lawsuit or legal dispute.",
      "points": 1
    },
    {
      "id": "c2-u22-b1-q4",
      "type": "fill-blank",
      "question": "The ________ of the law is often a subject of intense debate.",
      "correctAnswer": "interpretation",
      "explanation": "Legal interpretation determines how a law is applied in specific cases.",
      "points": 1
    },
    {
      "id": "c2-u22-b1-q5",
      "type": "multiple-choice",
      "question": "What is a 'precedent'?",
      "options": ["A type of president", "An earlier event or action that is regarded as an example or guide to be considered in subsequent similar circumstances", "A new law", "A military secret"],
      "correctAnswer": "An earlier event or action that is regarded as an example or guide to be considered in subsequent similar circumstances",
      "explanation": "Legal precedents are essential for consistency in common law systems.",
      "points": 1
    },
    {
      "id": "c2-u22-b1-q6",
      "type": "fill-blank",
      "question": "The judge issued a ________ ordering the company to stop its activities.",
      "correctAnswer": "writ",
      "explanation": "A writ is a form of written command in the name of a court or other legal authority.",
      "points": 1
    },
    {
      "id": "c2-u22-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'due process'?",
      "options": ["Working very fast", "Fair treatment through the normal judicial system, especially as a citizen's entitlement", "A type of tax", "Building a bridge"],
      "correctAnswer": "Fair treatment through the normal judicial system, especially as a citizen's entitlement",
      "explanation": "Due process is a fundamental legal right.",
      "points": 1
    },
    {
      "id": "c2-u22-b1-q8",
      "type": "fill-blank",
      "question": "He was ________ with murder.",
      "correctAnswer": "indicted",
      "explanation": "To indict is to formally accuse of or charge with a serious crime.",
      "points": 1
    },
    {
      "id": "c2-u22-b1-q9",
      "type": "multiple-choice",
      "question": "What is 'tort law' concerned with?",
      "options": ["Eating cakes", "Civil wrongs that cause a claimant to suffer loss or harm, resulting in legal liability for the person who commits the act", "International treaties", "Criminal law"],
      "correctAnswer": "Civil wrongs that cause a claimant to suffer loss or harm, resulting in legal liability for the person who commits the act",
      "explanation": "Tort law covers things like negligence, defamation, and trespass.",
      "points": 1
    },
    {
      "id": "c2-u22-b1-q10",
      "type": "fill-blank",
      "question": "The ________ was held in a high-security courtroom.",
      "correctAnswer": "trial",
      "explanation": "A trial is a formal examination of evidence by a judge, typically before a jury.",
      "points": 1
    }
  ]
};

export const C2_U22_BLOCK2: Exercise = {
  "id": "c2-u22-b2",
  "type": "grammar",
  "title": "Block 2: Participle Clauses",
  "explanation": "Using present (-ing), past (-ed), and perfect (having + past participle) participle clauses to replace relative clauses or adverbial clauses.",
  "questions": [
    {
      "id": "c2-u22-b2-q1",
      "type": "multiple-choice",
      "question": "Which sentence uses a participle clause correctly to express reason?",
      "options": ["Knowing the risks, he decided to proceed anyway.", "Known the risks, he decided to proceed anyway.", "Having know the risks, he decided to proceed anyway.", "To know the risks, he decided to proceed anyway."],
      "correctAnswer": "Knowing the risks, he decided to proceed anyway.",
      "explanation": "'Knowing the risks' replaces 'Because he knew the risks'.",
      "points": 1
    },
    {
      "id": "c2-u22-b2-q2",
      "type": "fill-blank",
      "question": "________ (convince) of his innocence, the lawyer worked day and night.",
      "correctAnswer": "convinced",
      "explanation": "Past participle clause expressing a state or reason.",
      "points": 1
    },
    {
      "id": "c2-u22-b2-q3",
      "type": "key-word-transformation",
      "question": "After he had finished the report, he went home. (FINISHED)\n\nHaving ________, he went home. __________",
      "sentence": "After he had finished the report, he went home.",
      "keyWord": "FINISHED",
      "startOfAnswer": "Having ________, he went home.",
      "correctAnswer": "Having finished the report, he went home.",
      "explanation": "Perfect participle clause to show completion.",
      "points": 1
    },
    {
      "id": "c2-u22-b2-q4",
      "type": "multiple-choice",
      "question": "Which element in the following sentence is incorrectly modified by the participle clause?",
      "options": ["The person (implied)", "The street", "The tree", "None of the above"],
      "correctAnswer": "The tree",
      "explanation": "This is a 'dangling participle' error. The subject of the participle clause should be the same as the subject of the main clause.",
      "points": 1
    },
    {
      "id": "c2-u22-b2-q5",
      "type": "fill-blank",
      "question": "________ (not / want) to offend anyone, she kept her opinions to herself.",
      "correctAnswer": "not wanting",
      "explanation": "Negative present participle clause.",
      "points": 1
    },
    {
      "id": "c2-u22-b2-q6",
      "type": "key-word-transformation",
      "question": "Because it was built in the 18th century, the house is very cold. (BUILT)\n\n________, the house is very cold. __________",
      "sentence": "Because it was built in the 18th century, the house is very cold.",
      "keyWord": "BUILT",
      "startOfAnswer": "________, the house is very cold.",
      "correctAnswer": "Built in the 18th century, the house is very cold.",
      "explanation": "Past participle clause replacing a passive reason clause.",
      "points": 1
    },
    {
      "id": "c2-u22-b2-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences contains a present participle clause indicating concurrent actions?",
      "options": ["Having eaten dinner, he watched TV.", "Whistling a tune, he walked to work.", "Broken by the news, she wept.", "Seen from the air, the city is beautiful."],
      "correctAnswer": "Whistling a tune, he walked to work.",
      "explanation": "Present participle clause for concurrent actions.",
      "points": 1
    },
    {
      "id": "c2-u22-b2-q8",
      "type": "fill-blank",
      "question": "________ (wait) for the bus, I saw an old friend.",
      "correctAnswer": "waiting",
      "explanation": "Present participle clause for an ongoing background action.",
      "points": 1
    },
    {
      "id": "c2-u22-b2-q9",
      "type": "key-word-transformation",
      "question": "If you use it carefully, the machine will last for years. (USED)\n\n________, the machine will last for years. __________",
      "sentence": "If you use it carefully, the machine will last for years.",
      "keyWord": "USED",
      "startOfAnswer": "________, the machine will last for years.",
      "correctAnswer": "Used carefully, the machine will last for years.",
      "explanation": "Past participle clause for condition.",
      "points": 1
    },
    {
      "id": "c2-u22-b2-q10",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly identifies the subject who failed the exam?",
      "options": ["Having failed the exam, the teacher was disappointed.", "Having failed the exam, he was disappointed.", "Failing the exam, the teacher was disappointed.", "Failed the exam, he was disappointed."],
      "correctAnswer": "Having failed the exam, he was disappointed.",
      "explanation": "The subject 'he' must be the one who failed the exam.",
      "points": 1
    }
  ]
};

export const C2_U22_BLOCK3: Exercise = {
  "id": "c2-u22-b3",
  "type": "vocabulary",
  "title": "Block 3: Criminology & Social Control",
  "explanation": "Vocabulary for crime, deviance, and sociological theories of control.",
  "questions": [
    {
      "id": "c2-u22-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'recidivism'?",
      "options": ["Becoming a criminal", "The tendency of a convicted criminal to reoffend", "A type of insurance", "A government secret"],
      "correctAnswer": "The tendency of a convicted criminal to reoffend",
      "explanation": "High recidivism rates suggest that prison systems are not effective in rehabilitation.",
      "points": 1
    },
    {
      "id": "c2-u22-b3-q2",
      "type": "fill-blank",
      "question": "The study of crime is called ________.",
      "correctAnswer": "criminology",
      "explanation": "Criminology explores the causes and consequences of criminal behavior.",
      "points": 1
    },
    {
      "id": "c2-u22-b3-q3",
      "type": "multiple-choice",
      "question": "What does 'deviance' mean in a sociological context?",
      "options": ["Being a genius", "Actions or behaviors that violate social norms", "A type of movie", "Moving to a new house"],
      "correctAnswer": "Actions or behaviors that violate social norms",
      "explanation": "Deviance is relative and varies between cultures and historical periods.",
      "points": 1
    },
    {
      "id": "c2-u22-b3-q4",
      "type": "fill-blank",
      "question": "Social ________ is the process by which society regulates behavior.",
      "correctAnswer": "control",
      "explanation": "Social control includes both formal (laws) and informal (customs) mechanisms.",
      "points": 1
    },
    {
      "id": "c2-u22-b3-q5",
      "type": "multiple-choice",
      "question": "What is 'rehabilitation'?",
      "options": ["Punishment", "The action of restoring someone to health or normal life through training and therapy after imprisonment, addiction, or illness", "Building a house", "Buying new clothes"],
      "correctAnswer": "The action of restoring someone to health or normal life through training and therapy after imprisonment, addiction, or illness",
      "explanation": "Rehabilitation aims to prevent future crime.",
      "points": 1
    },
    {
      "id": "c2-u22-b3-q6",
      "type": "fill-blank",
      "question": "The prison system is often criticized for its ________ nature.",
      "correctAnswer": "punitive",
      "explanation": "Punitive means inflicting or intended as punishment.",
      "points": 1
    },
    {
      "id": "c2-u22-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'deterrence'?",
      "options": ["Encouraging people to do something", "The action of discouraging an action or event through instilling doubt or fear of the consequences", "A type of insurance", "A government secret"],
      "correctAnswer": "The action of discouraging an action or event through instilling doubt or fear of the consequences",
      "explanation": "Deterrence is one of the primary justifications for punishment.",
      "points": 1
    },
    {
      "id": "c2-u22-b3-q8",
      "type": "fill-blank",
      "question": "The death penalty is a form of ________ punishment.",
      "correctAnswer": "capital",
      "explanation": "Capital punishment is the state-sanctioned practice of killing someone as a punishment for a crime.",
      "points": 1
    },
    {
      "id": "c2-u22-b3-q9",
      "type": "multiple-choice",
      "question": "What is 'restorative justice'?",
      "options": ["Fixing a broken car", "A system of criminal justice which focuses on the rehabilitation of offenders through reconciliation with victims and the community at large", "A type of tax", "Rule by the elderly"],
      "correctAnswer": "A system of criminal justice which focuses on the rehabilitation of offenders through reconciliation with victims and the community at large",
      "explanation": "Restorative justice seeks to repair the harm caused by crime.",
      "points": 1
    },
    {
      "id": "c2-u22-b3-q10",
      "startOfAnswer": "surveillance",
      "keyWord": "SURVEILLANCE",
      "type": "fill-blank",
      "question": "The city implemented a ________ program to reduce crime.",
      "correctAnswer": "surveillance",
      "explanation": "Surveillance is the close observation of a person or group.",
      "points": 1
    }
  ]
};

export const C2_U22_BLOCK4: Exercise = {
  "id": "c2-u22-b4",
  "type": "grammar",
  "title": "Block 4: Perfect & Passive Participle Clauses",
  "explanation": "Using complex participle structures for clarity and emphasis.",
  "questions": [
    {
      "id": "c2-u22-b4-q1",
      "type": "multiple-choice",
      "question": "Which sentence uses a perfect passive participle clause?",
      "options": ["Having finished the work, he left.", "Having been told the news, she wept.", "Being told the news, she wept.", "Telling the news, she wept."],
      "correctAnswer": "Having been told the news, she wept.",
      "explanation": "Perfect (having) + Passive (been + past participle).",
      "points": 1
    },
    {
      "id": "c2-u22-b4-q2",
      "type": "fill-blank",
      "question": "________ (give) enough time, he can solve any problem.",
      "correctAnswer": "given",
      "explanation": "Past participle clause for condition (passive sense).",
      "points": 1
    },
    {
      "id": "c2-u22-b4-q3",
      "type": "key-word-transformation",
      "question": "Because they were seen by the police, the thieves ran away. (SEEN)\n\nSeen by the police, __________.",
      "sentence": "Because they were seen by the police, the thieves ran away.",
      "keyWord": "SEEN",
      "startOfAnswer": "Seen by the police, ",
      "correctAnswer": "Seen by the police, the thieves ran away.",
      "explanation": "Past participle clause for reason (passive).",
      "points": 1
    },
    {
      "id": "c2-u22-b4-q4",
      "type": "multiple-choice",
      "question": "What might explain her feelings of discontent?",
      "options": ["She is still waiting", "Because she hadn't heard from him", "She is happy", "She will never hear from him"],
      "correctAnswer": "Because she hadn't heard from him",
      "explanation": "Negative perfect participle clause for reason/time sequence.",
      "points": 1
    },
    {
      "id": "c2-u22-b4-q5",
      "type": "fill-blank",
      "question": "________ (having / be / warn) about the traffic, we left early.",
      "correctAnswer": "Having been warned",
      "explanation": "Perfect passive participle clause.",
      "points": 1
    },
    {
      "id": "c2-u22-b4-q6",
      "type": "key-word-transformation",
      "question": "While she was searching for the keys, she found a letter. (SEARCHING)\n\n________, she found a letter. __________",
      "sentence": "While she was searching for the keys, she found a letter.",
      "keyWord": "SEARCHING",
      "startOfAnswer": "________, she found a letter.",
      "correctAnswer": "Searching for the keys, she found a letter.",
      "explanation": "Present participle clause for concurrent action.",
      "points": 1
    },
    {
      "id": "c2-u22-b4-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly uses a past participle clause to convey a passive sense?",
      "options": ["Left alone, the baby started to cry.", "Leaving alone, the baby started to cry.", "Having left alone, the baby started to cry.", "To leave alone, the baby started to cry."],
      "correctAnswer": "Left alone, the baby started to cry.",
      "explanation": "Past participle clause (passive sense).",
      "points": 1
    },
    {
      "id": "c2-u22-b4-q8",
      "type": "fill-blank",
      "question": "________ (surprise) by the result, he was unable to speak.",
      "correctAnswer": "surprised",
      "explanation": "Past participle clause for reason.",
      "points": 1
    },
    {
      "id": "c2-u22-b4-q9",
      "type": "key-word-transformation",
      "question": "He spent the whole day reading. (READING)\n\nHe spent the whole ________. Reading.",
      "sentence": "He spent the whole day reading.",
      "keyWord": "READING",
      "startOfAnswer": "He spent the whole ",
      "correctAnswer": "He spent the whole day reading.",
      "explanation": "Using a participle after 'spend time'.",
      "points": 1
    },
    {
      "id": "c2-u22-b4-q10",
      "type": "multiple-choice",
      "question": "Which of the following best identifies the grammatical function of the phrase \"weather permitting\" in a sentence?",
      "options": ["A reason", "A condition", "A result", "A contrast"],
      "correctAnswer": "A condition",
      "explanation": "This is a fixed absolute participle construction meaning 'if the weather permits'.",
      "points": 1
    }
  ]
};

export const C2_U22_BLOCK5: Exercise = {
  "id": "c2-u22-b5",
  "type": "vocabulary",
  "title": "Block 5: Legal Idioms & Metaphors",
  "explanation": "Expressions with legal origins (e.g., above board, open and shut).",
  "questions": [
    {
      "id": "c2-u22-b5-q1",
      "type": "multiple-choice",
      "question": "What does 'above board' mean?",
      "options": ["On a boat", "Legitimate, honest, and open", "Hidden", "Very fast"],
      "correctAnswer": "Legitimate, honest, and open",
      "explanation": "An 'above board' deal is one that is perfectly legal and honest.",
      "points": 1
    },
    {
      "id": "c2-u22-b5-q2",
      "type": "fill-blank",
      "question": "The case was ________ and shut.",
      "correctAnswer": "open",
      "explanation": "An 'open and shut' case is one that is very simple and easy to solve.",
      "points": 1
    },
    {
      "id": "c2-u22-b5-q3",
      "type": "multiple-choice",
      "question": "What does it mean to 'lay down the law'?",
      "options": ["To write a book", "To state authoritatively what can and cannot be done", "To go to court", "To break the rules"],
      "correctAnswer": "To state authoritatively what can and cannot be done",
      "explanation": "To 'lay down the law' is to speak firmly and with authority.",
      "points": 1
    },
    {
      "id": "c2-u22-b5-q4",
      "type": "fill-blank",
      "question": "He was caught red-________.",
      "correctAnswer": "handed",
      "explanation": "'Red-handed' means in the act of doing something wrong.",
      "points": 1
    },
    {
      "id": "c2-u22-b5-q5",
      "type": "multiple-choice",
      "question": "What does 'to take the law into your own hands' mean?",
      "options": ["To be a lawyer", "To punish someone for a crime yourself instead of waiting for the police or the legal system to do it", "To carry a law book", "To make new laws"],
      "correctAnswer": "To punish someone for a crime yourself instead of waiting for the police or the legal system to do it",
      "explanation": "Vigilantism is a form of taking the law into one's own hands.",
      "points": 1
    },
    {
      "id": "c2-u22-b5-q6",
      "type": "fill-blank",
      "question": "The evidence was ________.",
      "correctAnswer": "circumstantial",
      "explanation": "Circumstantial evidence is evidence that relies on an inference to connect it to a conclusion of fact.",
      "points": 1
    },
    {
      "id": "c2-u22-b5-q7",
      "type": "multiple-choice",
      "question": "What is a 'miscarriage of justice'?",
      "options": ["A medical problem", "A failure of a court or judicial system to attain the ends of justice", "Losing your keys", "A broken computer"],
      "correctAnswer": "A failure of a court or judicial system to attain the ends of justice",
      "explanation": "A miscarriage of justice often involves the conviction of an innocent person.",
      "points": 1
    },
    {
      "id": "c2-u22-b5-q8",
      "type": "fill-blank",
      "question": "The jury is still ________.",
      "correctAnswer": "out",
      "explanation": "'The jury is still out' means that no decision has been reached yet.",
      "points": 1
    },
    {
      "id": "c2-u22-b5-q9",
      "type": "multiple-choice",
      "question": "What does 'to throw the book' at someone mean?",
      "options": ["To be helpful", "To punish someone as severely as possible", "To read to someone", "To give someone a gift"],
      "correctAnswer": "To punish someone as severely as possible",
      "explanation": "The judge 'threw the book' at the repeat offender.",
      "points": 1
    },
    {
      "id": "c2-u22-b5-q10",
      "type": "fill-blank",
      "question": "It's the ________ of the law.",
      "correctAnswer": "letter",
      "explanation": "The 'letter of the law' is the strict literal interpretation, as opposed to the 'spirit of the law'.",
      "points": 1
    }
  ]
};

export const C2_U22_BLOCK6: Exercise = {
  "id": "c2-u22-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Participle Clause practice",
  "explanation": "Reinforcing participle clauses through transformations.",
  "questions": [
    {
      "id": "c2-u22-b6-q1",
      "type": "key-word-transformation",
      "question": "Because I hadn't been invited, I didn't go to the party. (INVITED)\n\nNot ________, I didn't go to the party. __________",
      "sentence": "Because I hadn't been invited, I didn't go to the party.",
      "keyWord": "INVITED",
      "startOfAnswer": "Not ________, I didn't go to the party.",
      "correctAnswer": "Not having been invited, I didn't go to the party.",
      "explanation": "Negative perfect passive participle clause.",
      "points": 1
    },
    {
      "id": "c2-u22-b6-q2",
      "type": "key-word-transformation",
      "question": "If you compare it with the other one, this is much better. (COMPARED)\n\n________, this is much better. __________",
      "sentence": "If you compare it with the other one, this is much better.",
      "keyWord": "COMPARED",
      "startOfAnswer": "________, this is much better.",
      "correctAnswer": "Compared with the other one, this is much better.",
      "explanation": "Past participle clause for comparison/condition.",
      "points": 1
    },
    {
      "id": "c2-u22-b6-q3",
      "type": "key-word-transformation",
      "question": "While he was working in London, he met his wife. (WORKING)\n\n________, he met his wife. __________",
      "sentence": "While he was working in London, he met his wife.",
      "keyWord": "WORKING",
      "startOfAnswer": "________, he met his wife.",
      "correctAnswer": "Working in London, he met his wife.",
      "explanation": "Present participle clause for time/background.",
      "points": 1
    },
    {
      "id": "c2-u22-b6-q4",
      "type": "key-word-transformation",
      "question": "Because she was terrified, she couldn't move. (TERRIFIED)\n\n________, she couldn't move. __________",
      "sentence": "Because she was terrified, she couldn't move.",
      "keyWord": "TERRIFIED",
      "startOfAnswer": "________, she couldn't move.",
      "correctAnswer": "Terrified, she couldn't move.",
      "explanation": "Past participle clause for reason.",
      "points": 1
    },
    {
      "id": "c2-u22-b6-q5",
      "type": "key-word-transformation",
      "question": "After he had passed his exams, he went on holiday. (PASSED)\n\nHaving ________, he went on holiday. __________",
      "sentence": "After he had passed his exams, he went on holiday.",
      "keyWord": "PASSED",
      "startOfAnswer": "Having ________, he went on holiday.",
      "correctAnswer": "Having passed his exams, he went on holiday.",
      "explanation": "Perfect participle clause.",
      "points": 1
    },
    {
      "id": "c2-u22-b6-q6",
      "type": "key-word-transformation",
      "question": "As I didn't want to wake the baby, I walked on tiptoe. (WANTING)\n\nNot ________, I walked on tiptoe. __________",
      "sentence": "As I didn't want to wake the baby, I walked on tiptoe.",
      "keyWord": "WANTING",
      "startOfAnswer": "Not ________, I walked on tiptoe.",
      "correctAnswer": "Not wanting to wake the baby, I walked on tiptoe.",
      "explanation": "Negative present participle clause for reason.",
      "points": 1
    },
    {
      "id": "c2-u22-b6-q7",
      "type": "key-word-transformation",
      "question": "If it is eaten regularly, it can be harmful. (EATEN)\n\n________, it can be harmful. __________",
      "sentence": "If it is eaten regularly, it can be harmful.",
      "keyWord": "EATEN",
      "startOfAnswer": "________, it can be harmful.",
      "correctAnswer": "Eaten regularly, it can be harmful.",
      "explanation": "Past participle clause for condition (passive).",
      "points": 1
    },
    {
      "id": "c2-u22-b6-q8",
      "type": "key-word-transformation",
      "question": "Since she had lived there for years, she knew the area well. (LIVED)\n\nHaving ________, she knew the area well. __________",
      "sentence": "Since she had lived there for years, she knew the area well.",
      "keyWord": "LIVED",
      "startOfAnswer": "Having ________, she knew the area well.",
      "correctAnswer": "Having lived there for years, she knew the area well.",
      "explanation": "Perfect participle clause for reason/background.",
      "points": 1
    },
    {
      "id": "c2-u22-b6-q9",
      "type": "key-word-transformation",
      "question": "Because it was painted red, it was easy to see. (PAINTED)\n\n________, it was easy to see. __________",
      "sentence": "Because it was painted red, it was easy to see.",
      "keyWord": "PAINTED",
      "startOfAnswer": "________, it was easy to see.",
      "correctAnswer": "Painted red, it was easy to see.",
      "explanation": "Past participle clause for reason (passive).",
      "points": 1
    },
    {
      "id": "c2-u22-b6-q10",
      "type": "key-word-transformation",
      "question": "While I was walking in the park, I found a wallet. (WALKING)\n\n________, I found a wallet. __________",
      "sentence": "While I was walking in the park, I found a wallet.",
      "keyWord": "WALKING",
      "startOfAnswer": "________, I found a wallet.",
      "correctAnswer": "Walking in the park, I found a wallet.",
      "explanation": "Present participle clause for time.",
      "points": 1
    }
  ]};

export const C2_U22_BLOCK7: Exercise = {
  "id": "c2-u22-b7",
  "type": "vocabulary",
  "title": "Block 7: International Law & Human Rights",
  "explanation": "Vocabulary for global justice, extradition, and human rights treaties.",
  "questions": [
    {
      "id": "c2-u22-b7-q1",
      "type": "multiple-choice",
      "question": "What does the term \"extradition\" refer to?",
      "options": ["A type of building", "The action of extraditing a person accused or convicted of a crime", "A religious ceremony", "A military secret"],
      "correctAnswer": "The action of extraditing a person accused or convicted of a crime",
      "explanation": "Extradition is the formal process of one state surrendering an individual to another state.",
      "points": 1
    },
    {
      "id": "c2-u22-b7-q2",
      "type": "fill-blank",
      "question": "The suspect was ________ to face charges in his home country.",
      "correctAnswer": "extradited",
      "explanation": "To extradite is the verb form.",
      "points": 1
    },
    {
      "id": "c2-u22-b7-q3",
      "type": "multiple-choice",
      "question": "What is 'amnesty'?",
      "options": ["A type of tax", "An official pardon for people who have been convicted of political offenses", "A new computer", "A fast car"],
      "correctAnswer": "An official pardon for people who have been convicted of political offenses",
      "explanation": "Amnesty is often granted by governments to groups of people.",
      "points": 1
    },
    {
      "id": "c2-u22-b7-q4",
      "type": "fill-blank",
      "question": "The ________ Court of Justice handles disputes between states.",
      "correctAnswer": "International",
      "explanation": "The ICJ is the principal judicial organ of the UN.",
      "points": 1
    },
    {
      "id": "c2-u22-b7-q5",
      "type": "multiple-choice",
      "question": "What are 'crimes against humanity'?",
      "options": ["Crimes against animals", "Widespread or systematic attacks directed against any civilian population", "Losing your keys", "A broken computer"],
      "correctAnswer": "Widespread or systematic attacks directed against any civilian population",
      "explanation": "These include murder, enslavement, and torture.",
      "points": 1
    },
    {
      "id": "c2-u22-b7-q6",
      "type": "fill-blank",
      "question": "The treaty was ________ by forty countries.",
      "correctAnswer": "ratified",
      "explanation": "To ratify is to sign or give formal consent to a treaty, contract, or agreement.",
      "points": 1
    },
    {
      "id": "c2-u22-b7-q7",
      "type": "multiple-choice",
      "question": "What is 'asylum'?",
      "options": ["A hospital", "The protection granted by a nation to someone who has left their native country as a political refugee", "A type of insurance", "A government secret"],
      "correctAnswer": "The protection granted by a nation to someone who has left their native country as a political refugee",
      "explanation": "Seeking asylum is a right under international law.",
      "points": 1
    },
    {
      "id": "c2-u22-b7-q8",
      "type": "fill-blank",
      "question": "The ________ was found guilty of war crimes.",
      "correctAnswer": "perpetrator",
      "explanation": "A perpetrator is a person who carries out a harmful, illegal, or immoral act.",
      "points": 1
    },
    {
      "id": "c2-u22-b7-q9",
      "type": "multiple-choice",
      "question": "What is 'sanctuary'?",
      "options": ["A type of bird", "A place of refuge or safety", "A large house", "A religious ceremony"],
      "correctAnswer": "A place of refuge or safety",
      "explanation": "Sanctuary cities provide protection to undocumented immigrants.",
      "points": 1
    },
    {
      "id": "c2-u22-b7-q10",
      "type": "fill-blank",
      "question": "The ________ of human rights is essential for global peace.",
      "correctAnswer": "protection",
      "explanation": "Human rights are inherent to all human beings.",
      "points": 1
    }
  ]
};

export const C2_U22_BLOCK8: Exercise = {
  "id": "c2-u22-b8",
  "type": "reading",
  "title": "Block 8: The Philosophy of Punishment",
  "explanation": "Analyze a text about retribution, rehabilitation, and the ethics of incarceration.",
  "questions": [
    {
      "id": "c2-u22-b8-q1",
      "type": "multiple-choice",
      "question": "What is 'retributive justice'?",
      "options": ["Helping people", "A system of criminal justice based on the punishment of offenders rather than on rehabilitation", "A type of tax", "Building a bridge"],
      "correctAnswer": "A system of criminal justice based on the punishment of offenders rather than on rehabilitation",
      "explanation": "Retribution is based on the idea of 'an eye for an eye'.",
      "points": 1
    },
    {
      "id": "c2-u22-b8-q2",
      "type": "fill-blank",
      "question": "The ________ of punishment is a central theme in legal philosophy.",
      "correctAnswer": "justification",
      "explanation": "Justification is the action of showing something to be right or reasonable.",
      "points": 1
    },
    {
      "id": "c2-u22-b8-q3",
      "type": "multiple-choice",
      "question": "What is 'incapacitation'?",
      "options": ["Being sick", "The effect of a sentence in terms of positively preventing the sentenced person from committing future offenses", "A type of insurance", "A government secret"],
      "correctAnswer": "The effect of a sentence in terms of positively preventing the sentenced person from committing future offenses",
      "explanation": "Incarceration is the most common form of incapacitation.",
      "points": 1
    },
    {
      "id": "c2-u22-b8-q4",
      "type": "fill-blank",
      "question": "Prisons are often described as 'universities of ________'.",
      "correctAnswer": "crime",
      "explanation": "This suggests that prisons can actually increase criminal behavior by facilitating networking among offenders.",
      "points": 1
    },
    {
      "id": "c2-u22-b8-q5",
      "type": "multiple-choice",
      "question": "What is the 'panopticon'?",
      "options": ["A type of camera", "A type of institutional building designed by Jeremy Bentham to allow all inmates to be observed by a single watchman without the inmates being able to tell whether they are being watched", "A new computer", "A fast car"],
      "correctAnswer": "A type of institutional building designed by Jeremy Bentham to allow all inmates to be observed by a single watchman without the inmates being able to tell whether they are being watched",
      "explanation": "The panopticon is a powerful metaphor for social control.",
      "points": 1
    },
    {
      "id": "c2-u22-b8-q6",
      "type": "fill-blank",
      "question": "The ________ of offenders into society is a major challenge.",
      "correctAnswer": "reintegration",
      "explanation": "Reintegration is the process of helping someone return to a community.",
      "points": 1
    },
    {
      "id": "c2-u22-b8-q7",
      "type": "multiple-choice",
      "question": "What is 'proportionality' in sentencing?",
      "options": ["Giving everyone the same sentence", "The principle that the severity of the punishment should fit the gravity of the crime", "A type of tax", "A government secret"],
      "correctAnswer": "The principle that the severity of the punishment should fit the gravity of the crime",
      "explanation": "Proportionality is a key principle of justice.",
      "points": 1
    },
    {
      "id": "c2-u22-b8-q8",
      "type": "fill-blank",
      "question": "The ________ of the law is its greatest power.",
      "correctAnswer": "majesty",
      "explanation": "The 'majesty of the law' refers to its impressive and dignified nature.",
      "points": 1
    },
    {
      "id": "c2-u22-b8-q9",
      "type": "multiple-choice",
      "question": "What is 'moral agency'?",
      "options": ["Being a good person", "An individual's ability to make moral judgments based on some notion of right and wrong and to be held accountable for these actions", "A type of insurance", "A government building"],
      "correctAnswer": "An individual's ability to make moral judgments based on some notion of right and wrong and to be held accountable for these actions",
      "explanation": "Moral agency is the basis for legal responsibility.",
      "points": 1
    },
    {
      "id": "c2-u22-b8-q10",
      "type": "fill-blank",
      "question": "Justice should be ________.",
      "correctAnswer": "blind",
      "explanation": "Justice is often depicted as a blindfolded woman, symbolizing impartiality.",
      "points": 1
    }
  ]
};

export const C2_U22_BLOCK9: Exercise = {
  "id": "c2-u22-b9",
  "type": "vocabulary",
  "title": "Block 9: Legal Verbs & Prepositions",
  "explanation": "Common collocations and prepositional phrases in legal English.",
  "questions": [
    {
      "id": "c2-u22-b9-q1",
      "type": "multiple-choice",
      "question": "Which preposition follows 'charge' (when meaning to accuse)?",
      "options": ["Of", "With", "For", "Against"],
      "correctAnswer": "With",
      "explanation": "To charge someone with a crime.",
      "points": 1
    },
    {
      "id": "c2-u22-b9-q2",
      "type": "fill-blank",
      "question": "He was accused ________ theft.",
      "correctAnswer": "of",
      "explanation": "To accuse someone of something.",
      "points": 1
    },
    {
      "id": "c2-u22-b9-q3",
      "type": "multiple-choice",
      "question": "Which verb collocates with 'oath'?",
      "options": ["Say", "Make", "Take", "Do"],
      "correctAnswer": "Take",
      "explanation": "To take an oath (or to be under oath).",
      "points": 1
    },
    {
      "id": "c2-u22-b9-q4",
      "type": "fill-blank",
      "question": "The judge ________ a verdict.",
      "correctAnswer": "reached",
      "explanation": "To reach a verdict.",
      "points": 1
    },
    {
      "id": "c2-u22-b9-q5",
      "type": "multiple-choice",
      "question": "Which preposition follows 'comply'?",
      "options": ["With", "To", "On", "At"],
      "correctAnswer": "With",
      "explanation": "To comply with the law.",
      "points": 1
    },
    {
      "id": "c2-u22-b9-q6",
      "type": "fill-blank",
      "question": "He was ________ on bail.",
      "correctAnswer": "released",
      "explanation": "To be released on bail.",
      "points": 1
    },
    {
      "id": "c2-u22-b9-q7",
      "type": "multiple-choice",
      "question": "Which verb collocates with 'sentence'?",
      "options": ["Give", "Pass", "Say", "Make"],
      "correctAnswer": "Pass",
      "explanation": "The judge passed sentence on the offender.",
      "points": 1
    },
    {
      "id": "c2-u22-b9-q8",
      "type": "fill-blank",
      "question": "The law was ________ last year.",
      "correctAnswer": "enacted",
      "explanation": "To enact a law means to make it official.",
      "points": 1
    },
    {
      "id": "c2-u22-b9-q9",
      "type": "multiple-choice",
      "question": "Which preposition follows 'liable'?",
      "options": ["To", "For", "At", "On"],
      "correctAnswer": "For",
      "explanation": "To be liable for damages.",
      "points": 1
    },
    {
      "id": "c2-u22-b9-q10",
      "type": "fill-blank",
      "question": "The case was ________ to a higher court.",
      "correctAnswer": "appealed",
      "explanation": "To appeal a case.",
      "points": 1
    }
  ]
};

export const C2_U22_BLOCK10: Exercise = {
  "id": "c2-u22-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 22 Review",
  "explanation": "Final review of Law and Participle Clauses.",
  "questions": [
    {
      "id": "c2-u22-b10-q1",
      "type": "multiple-choice",
      "question": "Which term describes a non-criminal wrong?",
      "options": ["Felony", "Misdemeanor", "Tort", "Arson"],
      "correctAnswer": "Tort",
      "explanation": "A tort is a civil wrong.",
      "points": 1
    },
    {
      "id": "c2-u22-b10-q2",
      "type": "fill-blank",
      "question": "________ (see) the police, the crowd dispersed.",
      "correctAnswer": "seeing",
      "explanation": "Present participle clause.",
      "points": 1
    },
    {
      "id": "c2-u22-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'mens rea'?",
      "options": ["A type of car", "Criminal intent (the 'guilty mind')", "A religious ceremony", "A government building"],
      "correctAnswer": "Criminal intent (the 'guilty mind')",
      "explanation": "Mens rea is a key element of most crimes.",
      "points": 1
    },
    {
      "id": "c2-u22-b10-q4",
      "type": "fill-blank",
      "question": "________ (not / have) any money, I stayed home.",
      "correctAnswer": "not having",
      "explanation": "Perfect/Present participle clause for reason.",
      "points": 1
    },
    {
      "id": "c2-u22-b10-q5",
      "type": "key-word-transformation",
      "question": "Because it was damaged, the car was sold cheap. (DAMAGED)\n\n___________ the car was sold cheap.",
      "sentence": "Because it was damaged, the car was sold cheap.",
      "keyWord": "DAMAGED",
      "startOfAnswer": "Damaged, ",
      "correctAnswer": "Damaged, the car was sold cheap.",
      "explanation": "Past participle clause.",
      "points": 1
    },
    {
      "id": "c2-u22-b10-q6",
      "type": "multiple-choice",
      "question": "What is the term used to describe the release of an offender from detention, subject to a period of good behavior under supervision?",
      "options": ["Being in prison", "The release of an offender from detention, subject to a period of good behavior under supervision", "A type of tax", "Building a bridge"],
      "correctAnswer": "The release of an offender from detention, subject to a period of good behavior under supervision",
      "explanation": "Probation is an alternative to incarceration.",
      "points": 1
    },
    {
      "id": "c2-u22-b10-q7",
      "type": "fill-blank",
      "question": "He was found ________ of all charges.",
      "correctAnswer": "innocent",
      "explanation": "Innocent (or not guilty) is the opposite of guilty.",
      "points": 1
    },
    {
      "id": "c2-u22-b10-q8",
      "type": "key-word-transformation",
      "question": "While I was driving, I saw a hawk. (DRIVING)\n\n________, I saw a hawk. __________",
      "sentence": "While I was driving, I saw a hawk.",
      "keyWord": "DRIVING",
      "startOfAnswer": "________, I saw a hawk.",
      "correctAnswer": "Driving, I saw a hawk.",
      "explanation": "Participle clause.",
      "points": 1
    },
    {
      "id": "c2-u22-b10-q9",
      "type": "multiple-choice",
      "question": "What is 'civil disobedience'?",
      "options": ["Being rude", "The refusal to comply with certain laws or to pay taxes and fines, as a peaceful form of political protest", "A military government", "Rule by the elderly"],
      "correctAnswer": "The refusal to comply with certain laws or to pay taxes and fines, as a peaceful form of political protest",
      "explanation": "Civil disobedience is a powerful tool for social change.",
      "points": 1
    },
    {
      "id": "c2-u22-b10-q10",
      "type": "fill-blank",
      "question": "The ________ of the court is final.",
      "correctAnswer": "decision",
      "explanation": "Decision or ruling.",
      "points": 1
    }
  ]
};

export const C2_UNIT_22 = createC2Unit(
  'c2-u22',
  'Law & Ethics',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U22_BLOCK1, C2_U22_BLOCK2, C2_U22_BLOCK3, C2_U22_BLOCK4, C2_U22_BLOCK5,
    C2_U22_BLOCK6, C2_U22_BLOCK7, C2_U22_BLOCK8, C2_U22_BLOCK9, C2_U22_BLOCK10
  ]
);
