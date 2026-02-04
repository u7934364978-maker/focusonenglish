
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U39_BLOCK1: Exercise = {
  "id": "c2-u39-b1",
  "type": "vocabulary",
  "title": "Block 1: Existentialism & Phenomenology",
  "explanation": "Advanced philosophical terms related to existence and experience.",
  "questions": [
    {
      "id": "c2-u39-b1-q1",
      "type": "multiple-choice",
      "question": "Which of the following best defines existentialism?",
      "options": ["The study of exit signs", "A philosophical theory that emphasizes the existence of the individual person as a free and responsible agent", "A type of biology", "The study of essence"],
      "correctAnswer": "A philosophical theory that emphasizes the existence of the individual person as a free and responsible agent",
      "explanation": "Key figures include Sartre and Camus.",
      "points": 1
    },
    {
      "id": "c2-u39-b1-q2",
      "type": "fill-blank",
      "question": "He is experiencing an ________ (exist) crisis.",
      "correctAnswer": "existential",
      "explanation": "An existential crisis is a moment at which an individual questions the very foundations of their life.",
      "points": 1
    },
    {
      "id": "c2-u39-b1-q3",
      "type": "multiple-choice",
      "question": "What is 'phenomenology'?",
      "options": ["The study of phenomena", "The philosophical study of the structures of experience and consciousness", "A type of weather science", "The study of phantoms"],
      "correctAnswer": "The philosophical study of the structures of experience and consciousness",
      "explanation": "Founded by Edmund Husserl.",
      "points": 1
    },
    {
      "id": "c2-u39-b1-q4",
      "type": "fill-blank",
      "question": "We must consider the ________ (subject) nature of reality.",
      "correctAnswer": "subjective",
      "explanation": "Subjective means based on or influenced by personal feelings, tastes, or opinions.",
      "points": 1
    },
    {
      "id": "c2-u39-b1-q5",
      "type": "multiple-choice",
      "question": "What is 'nihilism'?",
      "options": ["The belief that life is meaningless", "A type of political system", "The study of numbers", "Being very nice"],
      "correctAnswer": "The belief that life is meaningless",
      "explanation": "Suggests that religious and moral principles are without foundation.",
      "points": 1
    },
    {
      "id": "c2-u39-b1-q6",
      "type": "fill-blank",
      "question": "Life is inherently ________ (absurd).",
      "correctAnswer": "absurd",
      "explanation": "The Absurd refers to the conflict between humans' search for meaning and the 'silent' universe.",
      "points": 1
    },
    {
      "id": "c2-u39-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'authenticity' in existentialism?",
      "options": ["Being real", "Living in accordance with one's true self and values, despite external pressures", "Being very old", "A type of legal document"],
      "correctAnswer": "Living in accordance with one's true self and values, despite external pressures",
      "explanation": "Sartre called the opposite 'bad faith'.",
      "points": 1
    },
    {
      "id": "c2-u39-b1-q8",
      "type": "fill-blank",
      "question": "He felt a sense of ________ (alien).",
      "correctAnswer": "alienation",
      "explanation": "Alienation is the state or experience of being isolated from a group or an activity to which one should belong or in which one should be involved.",
      "points": 1
    },
    {
      "id": "c2-u39-b1-q9",
      "type": "multiple-choice",
      "question": "What does it mean to be 'finite'?",
      "options": ["To be very thin", "Having limits or bounds", "To be finished", "A type of fish"],
      "correctAnswer": "Having limits or bounds",
      "explanation": "Human existence is often described as finite due to mortality.",
      "points": 1
    },
    {
      "id": "c2-u39-b1-q10",
      "type": "fill-blank",
      "question": "The ________ (transcend) of the self.",
      "correctAnswer": "transcendence",
      "explanation": "Transcendence is existence or experience beyond the normal or physical level.",
      "points": 1
    }
  ]
};

export const C2_U39_BLOCK2: Exercise = {
  "id": "c2-u39-b2",
  "type": "grammar",
  "title": "Block 2: The Subjunctive Mood (Formal)",
  "explanation": "Using the base form of the verb after certain expressions of necessity, requirement, or suggestion (e.g., 'It is vital that he be...', 'I suggest that she go...').",
  "questions": [
    {
      "id": "c2-u39-b2-q1",
      "type": "multiple-choice",
      "question": "Which is the correct subjunctive form?",
      "options": ["It is essential that he leaves", "It is essential that he leave", "It is essential that he leaving", "It is essential that he left"],
      "correctAnswer": "It is essential that he leave",
      "explanation": "The subjunctive uses the base form (no -s for third person).",
      "points": 1
    },
    {
      "id": "c2-u39-b2-q2",
      "type": "fill-blank",
      "question": "I suggest that she ________ (be) informed immediately.",
      "correctAnswer": "be",
      "explanation": "Subjunctive passive: 'be' + past participle.",
      "points": 1
    },
    {
      "id": "c2-u39-b2-q3",
      "type": "key-word-transformation",
      "question": "You must arrive on time. (VITAL)\n\nIt is ________ on time. __________",
      "sentence": "You must arrive on time.",
      "keyWord": "VITAL",
      "startOfAnswer": "It is ________ on time.",
      "correctAnswer": "vital that you arrive",
      "explanation": "Subjunctive structure.",
      "points": 1
    },
    {
      "id": "c2-u39-b2-q4",
      "type": "multiple-choice",
      "question": "Which verb is most appropriate to express a suggestion or advice in the context of advising someone to take action?",
      "options": ["tell", "recommend", "promise", "hope"],
      "correctAnswer": "recommend",
      "explanation": "Example: 'I recommend that he apply'.",
      "points": 1
    },
    {
      "id": "c2-u39-b2-q5",
      "type": "fill-blank",
      "question": "The judge demanded that the prisoner ________ (release).",
      "correctAnswer": "be released",
      "explanation": "Subjunctive passive.",
      "points": 1
    },
    {
      "id": "c2-u39-b2-q6",
      "type": "key-word-transformation",
      "question": "He should take the medicine. (IMPORTANT)\n\nIt is ________ the medicine. __________",
      "sentence": "He should take the medicine.",
      "keyWord": "IMPORTANT",
      "startOfAnswer": "It is ________ the medicine.",
      "correctAnswer": "important that he take",
      "explanation": "Subjunctive 'take' instead of 'takes'.",
      "points": 1
    },
    {
      "id": "c2-u39-b2-q7",
      "type": "multiple-choice",
      "question": "Which of the following options represents the correct structure for forming a negative within a subjunctive context?",
      "options": ["not + base form", "don't + base form", "doesn't + base form", "no + base form"],
      "correctAnswer": "not + base form",
      "explanation": "Example: 'It is important that we not fail'.",
      "points": 1
    },
    {
      "id": "c2-u39-b2-q8",
      "type": "fill-blank",
      "question": "They requested that the meeting ________ (not/be) cancelled.",
      "correctAnswer": "not be",
      "explanation": "Negative subjunctive passive.",
      "points": 1
    },
    {
      "id": "c2-u39-b2-q9",
      "type": "key-word-transformation",
      "question": "She insisted on him going with her. (THAT)\n\nShe insisted ________ with her. __________",
      "sentence": "She insisted on him going with her.",
      "keyWord": "THAT",
      "startOfAnswer": "She insisted ________ with her.",
      "correctAnswer": "that he go",
      "explanation": "'Insist that' takes the subjunctive.",
      "points": 1
    },
    {
      "id": "c2-u39-b2-q10",
      "type": "multiple-choice",
      "question": "Which of the following phrases demonstrates the use of the subjunctive mood in expressing a wish?",
      "options": ["God saves the Queen", "God save the Queen", "God saved the Queen", "God saving the Queen"],
      "correctAnswer": "God save the Queen",
      "explanation": "A fossilized subjunctive form expressing a wish.",
      "points": 1
    }
  ]
};

export const C2_U39_BLOCK3: Exercise = {
  "id": "c2-u39-b3",
  "type": "vocabulary",
  "title": "Block 3: Ethics & Moral Philosophy",
  "explanation": "Terms for discussing right and wrong at an advanced level.",
  "questions": [
    {
      "id": "c2-u39-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'utilitarianism'?",
      "options": ["The study of tools", "The doctrine that actions are right if they are useful or for the benefit of a majority", "A type of architecture", "Being very useful"],
      "correctAnswer": "The doctrine that actions are right if they are useful or for the benefit of a majority",
      "explanation": "Associated with Jeremy Bentham and John Stuart Mill.",
      "points": 1
    },
    {
      "id": "c2-u39-b3-q2",
      "type": "fill-blank",
      "question": "He is a ________ (virtue) man.",
      "correctAnswer": "virtuous",
      "explanation": "Virtuous means having or showing high moral standards.",
      "points": 1
    },
    {
      "id": "c2-u39-b3-q3",
      "type": "multiple-choice",
      "question": "What is 'deontology'?",
      "options": ["The study of teeth", "The study of nature of duty and obligation", "A type of biology", "A religious ceremony"],
      "correctAnswer": "The study of nature of duty and obligation",
      "explanation": "Associated with Immanuel Kant and categorical imperatives.",
      "points": 1
    },
    {
      "id": "c2-u39-b3-q4",
      "type": "fill-blank",
      "question": "We must act according to our ________ (consci).",
      "correctAnswer": "conscience",
      "explanation": "Conscience is a person's moral sense of right and wrong.",
      "points": 1
    },
    {
      "id": "c2-u39-b3-q5",
      "type": "multiple-choice",
      "question": "What is an 'altruist'?",
      "options": ["A person unselfishly concerned for or devoted to the welfare of others", "A person who is very tall", "A type of musician", "A government official"],
      "correctAnswer": "A person unselfishly concerned for or devoted to the welfare of others",
      "explanation": "The opposite of an egoist.",
      "points": 1
    },
    {
      "id": "c2-u39-b3-q6",
      "type": "fill-blank",
      "question": "The ________ (dual) of good and evil.",
      "correctAnswer": "duality",
      "explanation": "Duality is the state of combining two different things.",
      "points": 1
    },
    {
      "id": "c2-u39-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'moral relativism'?",
      "options": ["Relatives who are moral", "The view that moral judgments are true or false only relative to some particular standpoint", "A type of family tree", "Being very judicial"],
      "correctAnswer": "The view that moral judgments are true or false only relative to some particular standpoint",
      "explanation": "Suggests there are no absolute moral truths.",
      "points": 1
    },
    {
      "id": "c2-u39-b3-q8",
      "type": "fill-blank",
      "question": "He faced an ethical ________ (dilem).",
      "correctAnswer": "dilemma",
      "explanation": "A dilemma is a situation in which a difficult choice has to be made between two or more alternatives.",
      "points": 1
    },
    {
      "id": "c2-u39-b3-q9",
      "type": "multiple-choice",
      "question": "What does 'secular' mean?",
      "options": ["Religious", "Not connected with religious or spiritual matters", "A type of clock", "Very old"],
      "correctAnswer": "Not connected with religious or spiritual matters",
      "explanation": "Secular ethics are based on reason rather than religion.",
      "points": 1
    },
    {
      "id": "c2-u39-b3-q10",
      "type": "fill-blank",
      "question": "The ________ (integr) of the character.",
      "correctAnswer": "integrity",
      "explanation": "Integrity is the quality of being honest and having strong moral principles.",
      "points": 1
    }
  ]
};

export const C2_U39_BLOCK4: Exercise = {
  "id": "c2-u39-b4",
  "type": "grammar",
  "title": "Block 4: Subjunctive vs. Modal 'Should'",
  "explanation": "Comparing the use of the subjunctive (formal) with 'should' (less formal/British English) in the same contexts.",
  "questions": [
    {
      "id": "c2-u39-b4-q1",
      "type": "multiple-choice",
      "question": "Which is more common in British English?",
      "options": ["I suggest that he go", "I suggest that he should go", "I suggest that he goes", "I suggest that he went"],
      "correctAnswer": "I suggest that he should go",
      "explanation": "British English often uses 'should' where American English uses the subjunctive.",
      "points": 1
    },
    {
      "id": "c2-u39-b4-q2",
      "type": "fill-blank",
      "question": "It is important that the rule ________ (be/should be) followed.",
      "correctAnswer": "be",
      "explanation": "Both are grammatically correct, but 'be' is the pure subjunctive.",
      "points": 1
    },
    {
      "id": "c2-u39-b4-q3",
      "type": "key-word-transformation",
      "question": "I recommend that you should see a doctor. (SEE)\n\nI recommend that you ________ a doctor. __________",
      "sentence": "I recommend that you should see a doctor.",
      "keyWord": "SEE",
      "startOfAnswer": "I recommend that you ________ a doctor.",
      "correctAnswer": "see",
      "explanation": "Subjunctive form.",
      "points": 1
    },
    {
      "id": "c2-u39-b4-q4",
      "type": "multiple-choice",
      "question": "Is the use of 'remains' in this context grammatically correct?",
      "options": ["Yes", "No, it should be 'remain'", "Yes, but only in informal English", "No, it should be 'to remain'"],
      "correctAnswer": "No, it should be 'remain'",
      "explanation": "'Remains' is indicative; 'remain' is subjunctive.",
      "points": 1
    },
    {
      "id": "c2-u39-b4-q5",
      "type": "fill-blank",
      "question": "They moved that the proposal ________ (accept).",
      "correctAnswer": "be accepted",
      "explanation": "Subjunctive passive after 'move' (propose).",
      "points": 1
    },
    {
      "id": "c2-u39-b4-q6",
      "type": "key-word-transformation",
      "question": "It is necessary for us to be careful. (THAT)\n\nIt is necessary ________ careful. __________",
      "sentence": "It is necessary for us to be careful.",
      "keyWord": "THAT",
      "startOfAnswer": "It is necessary ________ careful.",
      "correctAnswer": "that we be",
      "explanation": "Subjunctive structure.",
      "points": 1
    },
    {
      "id": "c2-u39-b4-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly uses the past subjunctive mood to express a hypothetical situation?",
      "options": ["I hope that he is well", "I wish that I were rich", "I know that he is here", "I think that she is nice"],
      "correctAnswer": "I wish that I were rich",
      "explanation": "'Were' is the past subjunctive (hypothetical).",
      "points": 1
    },
    {
      "id": "c2-u39-b4-q8",
      "type": "fill-blank",
      "question": "Long ________ (live) the King!",
      "correctAnswer": "live",
      "explanation": "Set phrase using the subjunctive.",
      "points": 1
    },
    {
      "id": "c2-u39-b4-q9",
      "type": "key-word-transformation",
      "question": "He suggested that we shouldn't tell her. (NOT)\n\nHe suggested ________ her. __________",
      "sentence": "He suggested that we shouldn't tell her.",
      "keyWord": "NOT",
      "startOfAnswer": "He suggested ________ her.",
      "correctAnswer": "that we not tell",
      "explanation": "Negative subjunctive.",
      "points": 1
    },
    {
      "id": "c2-u39-b4-q10",
      "type": "multiple-choice",
      "question": "Which of the following phrases appropriately conveys a factual statement and requires the use of the indicative mood?",
      "options": ["It is desirable that...", "I propose that...", "It is true that...", "I request that..."],
      "correctAnswer": "It is true that...",
      "explanation": "'It is true that' takes the indicative because it expresses a fact.",
      "points": 1
    }
  ]
};

export const C2_U39_BLOCK5: Exercise = {
  "id": "c2-u39-b5",
  "type": "vocabulary",
  "title": "Block 5: Logic & Epistemology",
  "explanation": "Vocabulary related to reasoning and the theory of knowledge.",
  "questions": [
    {
      "id": "c2-u39-b5-q1",
      "type": "multiple-choice",
      "question": "What is 'epistemology'?",
      "options": ["The study of skin", "The theory of knowledge, especially with regard to its methods, validity, and scope", "A type of math", "Studying letters"],
      "correctAnswer": "The theory of knowledge, especially with regard to its methods, validity, and scope",
      "explanation": "Investigates the distinction between justified belief and opinion.",
      "points": 1
    },
    {
      "id": "c2-u39-b5-q2",
      "type": "fill-blank",
      "question": "He used ________ (deduc) reasoning.",
      "correctAnswer": "deductive",
      "explanation": "Deductive reasoning starts with a general statement and reaches a specific conclusion.",
      "points": 1
    },
    {
      "id": "c2-u39-b5-q3",
      "type": "multiple-choice",
      "question": "What is 'induction'?",
      "options": ["Being introduced", "The process of reaching a general conclusion from specific observations", "A type of electrical stove", "A government secret"],
      "correctAnswer": "The process of reaching a general conclusion from specific observations",
      "explanation": "The basis of many scientific theories.",
      "points": 1
    },
    {
      "id": "c2-u39-b5-q4",
      "type": "fill-blank",
      "question": "The argument is ________ (valid).",
      "correctAnswer": "valid",
      "explanation": "A valid argument is one where the conclusion follows logically from the premises.",
      "points": 1
    },
    {
      "id": "c2-u39-b5-q5",
      "type": "multiple-choice",
      "question": "What is a 'premise'?",
      "options": ["A building", "A previous statement or proposition from which another is inferred or follows as a conclusion", "A type of promise", "Being very first"],
      "correctAnswer": "A previous statement or proposition from which another is inferred or follows as a conclusion",
      "explanation": "Logical arguments consist of premises and a conclusion.",
      "points": 1
    },
    {
      "id": "c2-u39-b5-q6",
      "type": "fill-blank",
      "question": "The ________ (fallacy) of 'begging the question'.",
      "correctAnswer": "fallacy",
      "explanation": "A logical fallacy is an error in reasoning.",
      "points": 1
    },
    {
      "id": "c2-u39-b5-q7",
      "type": "multiple-choice",
      "question": "What is 'empiricism'?",
      "options": ["Working for an empire", "The theory that all knowledge is derived from sense-experience", "Being very smart", "A type of medicine"],
      "correctAnswer": "The theory that all knowledge is derived from sense-experience",
      "explanation": "Locke, Berkeley, and Hume were famous empiricists.",
      "points": 1
    },
    {
      "id": "c2-u39-b5-q8",
      "type": "fill-blank",
      "question": "Rationalism relies on ________ (reason).",
      "correctAnswer": "reason",
      "explanation": "Rationalism is the belief that reason and logic are the primary sources of knowledge.",
      "points": 1
    },
    {
      "id": "c2-u39-b5-q9",
      "type": "multiple-choice",
      "question": "What is 'skepticism'?",
      "options": ["Being very healthy", "A questioning or doubting attitude toward knowledge or belief", "A type of illness", "Being very religious"],
      "correctAnswer": "A questioning or doubting attitude toward knowledge or belief",
      "explanation": "Philosophical skepticism challenges our ability to know anything for certain.",
      "points": 1
    },
    {
      "id": "c2-u39-b5-q10",
      "type": "fill-blank",
      "question": "The ________ (inference) was logical.",
      "correctAnswer": "inference",
      "explanation": "An inference is a conclusion reached on the basis of evidence and reasoning.",
      "points": 1
    }
  ]
};

export const C2_U39_BLOCK6: Exercise = {
  "id": "c2-u39-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Transforming Philosophical Sentences",
  "explanation": "Practice using the subjunctive and advanced vocabulary in context.",
  "questions": [
    {
      "id": "c2-u39-b6-q1",
      "type": "key-word-transformation",
      "question": "I think you should stay here. (RECOMMEND)\n\nI ________ here. __________",
      "sentence": "I think you should stay here.",
      "keyWord": "RECOMMEND",
      "startOfAnswer": "I ________ here.",
      "correctAnswer": "recommend that you stay",
      "explanation": "Subjunctive structure.",
      "points": 1
    },
    {
      "id": "c2-u39-b6-q2",
      "type": "key-word-transformation",
      "question": "Life has no meaning, according to him. (NIHILISTIC)\n\nHe has a ________ life. __________",
      "sentence": "Life has no meaning, according to him.",
      "keyWord": "NIHILISTIC",
      "startOfAnswer": "He has a ________ life.",
      "correctAnswer": "nihilistic view of",
      "explanation": "Using the adjective form.",
      "points": 1
    },
    {
      "id": "c2-u39-b6-q3",
      "type": "key-word-transformation",
      "question": "It is necessary that he understands the rules. (UNDERSTAND)\n\nIt is essential ________ rules. __________",
      "sentence": "It is necessary that he understands the rules.",
      "keyWord": "UNDERSTAND",
      "startOfAnswer": "It is essential ________ rules.",
      "correctAnswer": "that he understand the",
      "explanation": "Subjunctive 'understand'.",
      "points": 1
    },
    {
      "id": "c2-u39-b6-q4",
      "type": "key-word-transformation",
      "question": "The experiment depends on the data being accurate. (ACCURACY)\n\nThe experiment ________ the data. __________",
      "sentence": "The experiment depends on the data being accurate.",
      "keyWord": "ACCURACY",
      "startOfAnswer": "The experiment ________ the data.",
      "correctAnswer": "is contingent on the accuracy of",
      "explanation": "'Contingent on'.",
      "points": 1
    },
    {
      "id": "c2-u39-b6-q5",
      "type": "key-word-transformation",
      "question": "She insisted that he shouldn't leave. (NOT)\n\nShe insisted ________. __________",
      "sentence": "She insisted that he shouldn't leave.",
      "keyWord": "NOT",
      "startOfAnswer": "She insisted ________.",
      "correctAnswer": "that he not leave",
      "explanation": "Negative subjunctive.",
      "points": 1
    },
    {
      "id": "c2-u39-b6-q6",
      "type": "key-word-transformation",
      "question": "We must consider all options. (CONSIDERATION)\n\nAll options must ________. __________",
      "sentence": "We must consider all options.",
      "keyWord": "CONSIDERATION",
      "startOfAnswer": "All options must ________.",
      "correctAnswer": "be taken into consideration",
      "explanation": "Passive with a noun phrase.",
      "points": 1
    },
    {
      "id": "c2-u39-b6-q7",
      "type": "key-word-transformation",
      "question": "He is very unselfish. (ALTRUISTIC)\n\nHe is ________. __________",
      "sentence": "He is very unselfish.",
      "keyWord": "ALTRUISTIC",
      "startOfAnswer": "He is ________.",
      "correctAnswer": "highly altruistic",
      "explanation": "Using a formal adjective.",
      "points": 1
    },
    {
      "id": "c2-u39-b6-q8",
      "type": "key-word-transformation",
      "question": "The judge said the prisoner must be set free. (RELEASED)\n\nThe judge ordered that ________. __________",
      "sentence": "The judge said the prisoner must be set free.",
      "keyWord": "RELEASED",
      "startOfAnswer": "The judge ordered that ________.",
      "correctAnswer": "the prisoner be released",
      "explanation": "Subjunctive passive.",
      "points": 1
    },
    {
      "id": "c2-u39-b6-q9",
      "type": "key-word-transformation",
      "question": "He doubts the validity of the theory. (SKEPTICAL)\n\nHe is ________ theory. __________",
      "sentence": "He doubts the validity of the theory.",
      "keyWord": "SKEPTICAL",
      "startOfAnswer": "He is ________ theory.",
      "correctAnswer": "skeptical of the",
      "explanation": "'Skeptical of'.",
      "points": 1
    },
    {
      "id": "c2-u39-b6-q10",
      "type": "key-word-transformation",
      "question": "It is vital that he arrives before midnight. (ARRIVE)\n\nIt is vital ________ midnight. __________",
      "sentence": "It is vital that he arrives before midnight.",
      "keyWord": "ARRIVE",
      "startOfAnswer": "It is vital ________ midnight.",
      "correctAnswer": "that he arrive before",
      "explanation": "Subjunctive 'arrive'.",
      "points": 1
    }
  ]};

export const C2_U39_BLOCK7: Exercise = {
  "id": "c2-u39-b7",
  "type": "vocabulary",
  "title": "Block 7: Philosophy Idioms",
  "explanation": "Idiomatic expressions used in intellectual and philosophical discussions.",
  "questions": [
    {
      "id": "c2-u39-b7-q1",
      "type": "multiple-choice",
      "question": "What does the phrase \"playing devil's advocate\" commonly refer to?",
      "options": ["To work for the devil", "To take an opposing view to test an argument", "To be very mean", "To support a bad person"],
      "correctAnswer": "To take an opposing view to test an argument",
      "explanation": "Commonly used in debates.",
      "points": 1
    },
    {
      "id": "c2-u39-b7-q2",
      "type": "fill-blank",
      "question": "It's food ________ (thought).",
      "correctAnswer": "for thought",
      "explanation": "'Food for thought' is something that provides mental stimulus.",
      "points": 1
    },
    {
      "id": "c2-u39-b7-q3",
      "type": "multiple-choice",
      "question": "What is 'a grey area'?",
      "options": ["A place with no color", "A situation that is not clear or where there are no clear rules", "A type of brain tissue", "A cloudy day"],
      "correctAnswer": "A situation that is not clear or where there are no clear rules",
      "explanation": "Often occurs in ethical discussions.",
      "points": 1
    },
    {
      "id": "c2-u39-b7-q4",
      "type": "fill-blank",
      "question": "The ________ (ivory) tower of academia.",
      "correctAnswer": "ivory",
      "explanation": "An 'ivory tower' is a state of privileged seclusion from the facts and practicalities of the real world.",
      "points": 1
    },
    {
      "id": "c2-u39-b7-q5",
      "type": "multiple-choice",
      "question": "What does 'to split hairs' mean?",
      "options": ["To go to a barber", "To make unnecessarily fine distinctions", "To be very angry", "To cut something in half"],
      "correctAnswer": "To make unnecessarily fine distinctions",
      "explanation": "Focusing on trivial details.",
      "points": 1
    },
    {
      "id": "c2-u39-b7-q6",
      "type": "fill-blank",
      "question": "It's a ________ (moral) maze.",
      "correctAnswer": "moral",
      "explanation": "A 'moral maze' is a complex ethical situation.",
      "points": 1
    },
    {
      "id": "c2-u39-b7-q7",
      "type": "multiple-choice",
      "question": "What is 'the lesser of two evils'?",
      "options": ["A small bad person", "The better of two bad options", "A type of horror movie", "Being very small"],
      "correctAnswer": "The better of two bad options",
      "explanation": "Example: 'I don't like either candidate, but he's the lesser of two evils'.",
      "points": 1
    },
    {
      "id": "c2-u39-b7-q8",
      "type": "fill-blank",
      "question": "He has his ________ (head) in the clouds.",
      "correctAnswer": "head",
      "explanation": "'Head in the clouds' means being unrealistic or impractical.",
      "points": 1
    },
    {
      "id": "c2-u39-b7-q9",
      "type": "multiple-choice",
      "question": "What does 'to get one's head around something' mean?",
      "options": ["To wear a hat", "To understand something complex", "To be very dizzy", "To look around"],
      "correctAnswer": "To understand something complex",
      "explanation": "Often used for difficult theories.",
      "points": 1
    },
    {
      "id": "c2-u39-b7-q10",
      "type": "fill-blank",
      "question": "A ________ (train) of thought.",
      "correctAnswer": "train",
      "explanation": "A 'train of thought' is a sequence of connected ideas.",
      "points": 1
    }
  ]
};

export const C2_U39_BLOCK8: Exercise = {
  "id": "c2-u39-b8",
  "type": "reading",
  "title": "Block 8: The Social Contract",
  "explanation": "Analyze a text about political philosophy and the origins of society.",
  "questions": [
    {
      "id": "c2-u39-b8-q1",
      "type": "multiple-choice",
      "question": "What is the 'Social Contract' theory?",
      "options": ["A contract for social media", "The idea that individuals have consented to surrender some of their freedoms in exchange for protection of their remaining rights", "A type of marriage", "A legal document for companies"],
      "correctAnswer": "The idea that individuals have consented to surrender some of their freedoms in exchange for protection of their remaining rights",
      "explanation": "Philosophers like Hobbes, Locke, and Rousseau developed this.",
      "points": 1
    },
    {
      "id": "c2-u39-b8-q2",
      "type": "fill-blank",
      "question": "Hobbes described the state of ________ (nature) as 'nasty, brutish, and short'.",
      "correctAnswer": "nature",
      "explanation": "The 'state of nature' is a hypothetical condition of humanity before the state.",
      "points": 1
    },
    {
      "id": "c2-u39-b8-q3",
      "type": "multiple-choice",
      "question": "What is 'sovereignty'?",
      "options": ["Being very rich", "Supreme power or authority", "A type of coin", "Working for a king"],
      "correctAnswer": "Supreme power or authority",
      "explanation": "In a social contract, sovereignty often resides with the state or the people.",
      "points": 1
    },
    {
      "id": "c2-u39-b8-q4",
      "type": "fill-blank",
      "question": "Locke argued for ________ (inalien) rights.",
      "correctAnswer": "inalienable",
      "explanation": "Life, liberty, and property.",
      "points": 1
    },
    {
      "id": "c2-u39-b8-q5",
      "type": "multiple-choice",
      "question": "What is 'the general will' according to Rousseau?",
      "options": ["Everyone's own will", "The will of the people as a whole", "A type of legal document", "Being very willing"],
      "correctAnswer": "The will of the people as a whole",
      "explanation": "Different from the 'will of all' (sum of private interests).",
      "points": 1
    },
    {
      "id": "c2-u39-b8-q6",
      "type": "fill-blank",
      "question": "We must ________ (legitim) the government.",
      "correctAnswer": "legitimize",
      "explanation": "To legitimize is to make legitimate (lawful).",
      "points": 1
    },
    {
      "id": "c2-u39-b8-q7",
      "type": "multiple-choice",
      "question": "What is 'totalitarianism'?",
      "options": ["Total honesty", "A system of government that is centralized and dictatorial and requires complete subservience to the state", "A type of math", "A religious ceremony"],
      "correctAnswer": "A system of government that is centralized and dictatorial and requires complete subservience to the state",
      "explanation": "The extreme opposite of a liberal social contract.",
      "points": 1
    },
    {
      "id": "c2-u39-b8-q8",
      "type": "fill-blank",
      "question": "The ________ (consent) of the governed.",
      "correctAnswer": "consent",
      "explanation": "Consent means permission for something to happen or agreement to do something.",
      "points": 1
    },
    {
      "id": "c2-u39-b8-q9",
      "type": "multiple-choice",
      "question": "What is 'civil society'?",
      "options": ["Being very polite", "The aggregate of non-governmental organizations and institutions that manifest interests and will of citizens", "A type of school", "A secret meeting"],
      "correctAnswer": "The aggregate of non-governmental organizations and institutions that manifest interests and will of citizens",
      "explanation": "Includes families, religious groups, and NGOs.",
      "points": 1
    },
    {
      "id": "c2-u39-b8-q10",
      "type": "fill-blank",
      "question": "Individual ________ (libert) is central.",
      "correctAnswer": "liberty",
      "explanation": "Liberty is the state of being free within society from oppressive restrictions imposed by authority on one's way of life, behavior, or political views.",
      "points": 1
    }
  ]
};

export const C2_U39_BLOCK9: Exercise = {
  "id": "c2-u39-b9",
  "type": "vocabulary",
  "title": "Block 9: Philosophy Synthesis",
  "explanation": "Review of the unit's key vocabulary.",
  "questions": [
    {
      "id": "c2-u39-b9-q1",
      "type": "multiple-choice",
      "question": "What is 'existentialism'?",
      "options": ["Individual existence focus", "Exit focus", "Essence focus", "Biology"],
      "correctAnswer": "Individual existence focus",
      "explanation": "Core concept review.",
      "points": 1
    },
    {
      "id": "c2-u39-b9-q2",
      "type": "fill-blank",
      "question": "Knowledge theory: ________.",
      "correctAnswer": "epistemology",
      "explanation": "Term review.",
      "points": 1
    },
    {
      "id": "c2-u39-b9-q3",
      "type": "multiple-choice",
      "question": "What is 'utilitarianism'?",
      "options": ["Greatest good for most", "Study of tools", "Architecture", "Usefulness"],
      "correctAnswer": "Greatest good for most",
      "explanation": "Ethics review.",
      "points": 1
    },
    {
      "id": "c2-u39-b9-q4",
      "type": "fill-blank",
      "question": "Life is meaningless: ________.",
      "correctAnswer": "nihilism",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u39-b9-q5",
      "type": "multiple-choice",
      "question": "What is 'sovereignty'?",
      "options": ["Supreme authority", "Wealth", "Coin", "King"],
      "correctAnswer": "Supreme authority",
      "explanation": "Political review.",
      "points": 1
    },
    {
      "id": "c2-u39-b9-q6",
      "type": "fill-blank",
      "question": "Food for ________.",
      "correctAnswer": "thought",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u39-b9-q7",
      "type": "multiple-choice",
      "question": "What is 'empirical'?",
      "options": ["Observed", "Theoretical", "Secret", "Imperial"],
      "correctAnswer": "Observed",
      "explanation": "Epistemology review.",
      "points": 1
    },
    {
      "id": "c2-u39-b9-q8",
      "type": "fill-blank",
      "question": "Grey ________ (unclear).",
      "correctAnswer": "area",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u39-b9-q9",
      "type": "multiple-choice",
      "question": "What is 'integrity'?",
      "options": ["Moral principles", "Honesty", "Both", "Neither"],
      "correctAnswer": "Both",
      "explanation": "Ethics review.",
      "points": 1
    },
    {
      "id": "c2-u39-b9-q10",
      "type": "fill-blank",
      "question": "Subjunctive: It is vital he ________ (be).",
      "correctAnswer": "be",
      "explanation": "Grammar review.",
      "points": 1
    }
  ]
};

export const C2_U39_BLOCK10: Exercise = {
  "id": "c2-u39-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 39 Final Review",
  "explanation": "Final wrap-up of the subjunctive and philosophical terminology.",
  "questions": [
    {
      "id": "c2-u39-b10-q1",
      "type": "multiple-choice",
      "question": "Which is correct subjunctive?",
      "options": ["I suggest he goes", "I suggest he go", "I suggest he going", "I suggest he went"],
      "correctAnswer": "I suggest he go",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u39-b10-q2",
      "type": "fill-blank",
      "question": "It is essential that she ________ (not/tell) anyone.",
      "correctAnswer": "not tell",
      "explanation": "Negative subjunctive review.",
      "points": 1
    },
    {
      "id": "c2-u39-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'phenomenology'?",
      "options": ["Study of experience", "Study of phenomena", "Weather", "Phantoms"],
      "correctAnswer": "Study of experience",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u39-b10-q4",
      "type": "fill-blank",
      "question": "Categorical ________ (Kant).",
      "correctAnswer": "imperative",
      "explanation": "Philosophy review.",
      "points": 1
    },
    {
      "id": "c2-u39-b10-q5",
      "type": "key-word-transformation",
      "question": "He insisted on the window being opened. (THAT)\n\nHe insisted ________. __________",
      "sentence": "He insisted on the window being opened.",
      "keyWord": "THAT",
      "startOfAnswer": "He insisted ________.",
      "correctAnswer": "that the window be opened",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u39-b10-q6",
      "type": "multiple-choice",
      "question": "Which of the following concepts best reflects the idea that ethical standards can vary based on context and perspective?",
      "options": ["No absolute truth", "Absolute truth", "Relatives", "Judiciary"],
      "correctAnswer": "No absolute truth",
      "explanation": "Ethics review.",
      "points": 1
    },
    {
      "id": "c2-u39-b10-q7",
      "type": "fill-blank",
      "question": "Split ________ (hairs).",
      "correctAnswer": "hairs",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u39-b10-q8",
      "type": "key-word-transformation",
      "question": "It is vital for him to arrive. (ARRIVE)\n\nIt is vital ________. __________",
      "sentence": "It is vital for him to arrive.",
      "keyWord": "ARRIVE",
      "startOfAnswer": "It is vital ________.",
      "correctAnswer": "that he arrive",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u39-b10-q9",
      "type": "multiple-choice",
      "question": "What is 'deduction'?",
      "options": ["General to specific", "Specific to general", "A type of tax", "Subtraction"],
      "correctAnswer": "General to specific",
      "explanation": "Logic review.",
      "points": 1
    },
    {
      "id": "c2-u39-b10-q10",
      "type": "fill-blank",
      "question": "Devil's ________.",
      "correctAnswer": "advocate",
      "explanation": "Idiom review.",
      "points": 1
    }
  ]
};

export const C2_UNIT_39 = createC2Unit(
  'c2-u39',
  'Philosophy & Modern Thought',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U39_BLOCK1, C2_U39_BLOCK2, C2_U39_BLOCK3, C2_U39_BLOCK4, C2_U39_BLOCK5,
    C2_U39_BLOCK6, C2_U39_BLOCK7, C2_U39_BLOCK8, C2_U39_BLOCK9, C2_U39_BLOCK10
  ]
);
