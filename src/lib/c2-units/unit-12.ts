
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U12_BLOCK1: Exercise = {
  "id": "c2-u12-b1",
  "type": "vocabulary",
  "title": "Block 1: Scientific Terminology & Concepts",
  "explanation": "Advanced vocabulary for scientific research, methodology, and theoretical physics.",
  "questions": [
    {
      "id": "c2-u12-b1-q1",
      "type": "multiple-choice",
      "question": "What is 'quantum entanglement'?",
      "options": ["A type of hair salon", "A physical phenomenon where particles remain connected regardless of distance", "A scientific argument", "A way of measuring light"],
      "correctAnswer": "A physical phenomenon where particles remain connected regardless of distance",
      "explanation": "Quantum entanglement is a core concept in quantum mechanics.",
      "points": 1
    },
    {
      "id": "c2-u12-b1-q2",
      "type": "fill-blank",
      "question": "The study was based on a ________ sample of the population.",
      "correctAnswer": "representative",
      "explanation": "A representative sample reflects the characteristics of the whole group.",
      "points": 1
    },
    {
      "id": "c2-u12-b1-q3",
      "type": "key-word-transformation",
      "sentence": "They didn't find any proof to support the claim.",
      "keyWord": "SUBSTANTIATE",
      "startOfAnswer": "They failed",
      "correctAnswer": "They failed to substantiate the claim.",
      "explanation": "To substantiate is to provide evidence to support or prove the truth of something.",
      "points": 1
    },
    {
      "id": "c2-u12-b1-q4",
      "type": "multiple-choice",
      "question": "What is an 'anomaly' in data?",
      "options": ["The most common result", "Something that deviates from what is standard, normal, or expected", "A type of graph", "The average value"],
      "correctAnswer": "Something that deviates from what is standard, normal, or expected",
      "explanation": "Anomalies often lead to new discoveries.",
      "points": 1
    },
    {
      "id": "c2-u12-b1-q5",
      "type": "fill-blank",
      "question": "The theoretical physicist proposed a ________ theory of everything.",
      "correctAnswer": "unified",
      "explanation": "A unified theory attempts to explain all physical aspects of the universe.",
      "points": 1
    },
    {
      "id": "c2-u12-b1-q6",
      "type": "key-word-transformation",
      "sentence": "The results of the experiment were exactly what we predicted.",
      "keyWord": "ACCORDANCE",
      "startOfAnswer": "The results were in",
      "correctAnswer": "The results were in accordance with our predictions.",
      "explanation": "'In accordance with' means in agreement with.",
      "points": 1
    },
    {
      "id": "c2-u12-b1-q7",
      "type": "multiple-choice",
      "question": "What does 'heuristic' mean?",
      "options": ["A very strict rule", "A hands-on or practical approach to problem-solving", "A type of laboratory equipment", "A mathematical error"],
      "correctAnswer": "A hands-on or practical approach to problem-solving",
      "explanation": "Heuristics are mental shortcuts or practical methods.",
      "points": 1
    },
    {
      "id": "c2-u12-b1-q8",
      "type": "fill-blank",
      "question": "The data ________ the previous hypothesis, forcing scientists to rethink.",
      "correctAnswer": "refuted",
      "explanation": "To refute is to prove a statement or theory to be wrong or false.",
      "points": 1
    },
    {
      "id": "c2-u12-b1-q9",
      "type": "key-word-transformation",
      "sentence": "They are trying to find out how the universe began.",
      "keyWord": "ORIGINS",
      "startOfAnswer": "They are investigating",
      "correctAnswer": "They are investigating the origins of the universe.",
      "explanation": "Origins as a formal plural for beginning.",
      "points": 1
    },
    {
      "id": "c2-u12-b1-q10",
      "type": "multiple-choice",
      "question": "What is 'Occam's Razor'?",
      "options": ["A sharp tool used in biology", "The idea that the simplest explanation is usually the correct one", "A type of chemical bond", "A famous scientific mistake"],
      "correctAnswer": "The idea that the simplest explanation is usually the correct one",
      "explanation": "Occam's Razor is a principle of parsimony.",
      "points": 1
    }
  ]
};

export const C2_U12_BLOCK2: Exercise = {
  "id": "c2-u12-b2",
  "type": "grammar",
  "title": "Block 2: Passive Reporting Verbs",
  "explanation": "Impersonal passive structures: it is said, he is believed to be, etc.",
  "questions": [
    {
      "id": "c2-u12-b2-q1",
      "type": "multiple-choice",
      "question": "Which is the correct personal passive form of: 'People say he is a genius'?",
      "options": ["It is said he is a genius.", "He is said to be a genius.", "He says he is a genius.", "He is say to be a genius."],
      "correctAnswer": "He is said to be a genius.",
      "explanation": "Subject + passive verb + to-infinitive.",
      "points": 1
    },
    {
      "id": "c2-u12-b2-q2",
      "type": "fill-blank",
      "question": "The suspect is believed ________ (flee) the country already.",
      "correctAnswer": "to have fled",
      "explanation": "Perfect infinitive for an action that happened before the reporting time.",
      "points": 1
    },
    {
      "id": "c2-u12-b2-q3",
      "type": "key-word-transformation",
      "sentence": "They report that the mission was a success.",
      "keyWord": "REPORTED",
      "startOfAnswer": "The mission",
      "correctAnswer": "The mission is reported to have been a success.",
      "explanation": "Personal passive construction.",
      "points": 1
    },
    {
      "id": "c2-u12-b2-q4",
      "type": "multiple-choice",
      "question": "Identify the impersonal passive form.",
      "options": ["She is thought to be rich.", "It is thought that she is rich.", "She thinks she is rich.", "People think she is rich."],
      "correctAnswer": "It is thought that she is rich.",
      "explanation": "It + passive verb + that-clause.",
      "points": 1
    },
    {
      "id": "c2-u12-b2-q5",
      "type": "fill-blank",
      "question": "The ancient city is ________ to have been destroyed by a volcano.",
      "correctAnswer": "thought",
      "explanation": "'Is thought/believed/said' followed by perfect infinitive.",
      "points": 1
    },
    {
      "id": "c2-u12-b2-q6",
      "type": "key-word-transformation",
      "sentence": "Experts estimate that the scroll is 2000 years old.",
      "keyWord": "ESTIMATED",
      "startOfAnswer": "The scroll",
      "correctAnswer": "The scroll is estimated to be 2000 years old.",
      "explanation": "Personal passive with 'be + estimated + to-infinitive'.",
      "points": 1
    },
    {
      "id": "c2-u12-b2-q7",
      "type": "multiple-choice",
      "question": "What is the past form of: 'He is said to be working'?",
      "options": ["He was said to be working.", "He said to have been working.", "He is said to have worked.", "It was said he works."],
      "correctAnswer": "He was said to be working.",
      "explanation": "Shift the main reporting verb to the past.",
      "points": 1
    },
    {
      "id": "c2-u12-b2-q8",
      "type": "fill-blank",
      "question": "It is ________ that a new planet has been discovered.",
      "correctAnswer": "rumoured",
      "explanation": "Common impersonal passive verb.",
      "points": 1
    },
    {
      "id": "c2-u12-b2-q9",
      "type": "key-word-transformation",
      "sentence": "People expect that the economy will grow next year.",
      "keyWord": "EXPECTED",
      "startOfAnswer": "The economy",
      "correctAnswer": "The economy is expected to grow next year.",
      "explanation": "Personal passive for future expectations.",
      "points": 1
    },
    {
      "id": "c2-u12-b2-q10",
      "type": "multiple-choice",
      "question": "Which sentence is grammatically correct?",
      "options": ["He is believed to have been hiding for weeks.", "It is believed him to have been hiding.", "People are believed he is hiding.", "He is believing to have been hiding."],
      "correctAnswer": "He is believed to have been hiding for weeks.",
      "explanation": "Correct use of perfect continuous infinitive after passive reporting verb.",
      "points": 1
    }
  ]
};

export const C2_U12_BLOCK3: Exercise = {
  "id": "c2-u12-b3",
  "type": "vocabulary",
  "title": "Block 3: The Scientific Method & Research",
  "explanation": "Vocabulary related to experiments, variables, and academic integrity.",
  "questions": [
    {
      "id": "c2-u12-b3-q1",
      "type": "multiple-choice",
      "question": "What is a 'double-blind' study?",
      "options": ["A study with two blind participants", "A trial where neither the participants nor the researchers know who is receiving a particular treatment", "A study done at night", "A study with no vision"],
      "correctAnswer": "A trial where neither the participants nor the researchers know who is receiving a particular treatment",
      "explanation": "Double-blind studies reduce bias.",
      "points": 1
    },
    {
      "id": "c2-u12-b3-q2",
      "type": "fill-blank",
      "question": "The scientist was accused of ________ data to support his claims.",
      "correctAnswer": "falsifying",
      "explanation": "Falsifying data is a serious academic crime.",
      "points": 1
    },
    {
      "id": "c2-u12-b3-q3",
      "type": "key-word-transformation",
      "sentence": "The experiment must be done under very controlled conditions.",
      "keyWord": "OUT",
      "startOfAnswer": "The experiment must be",
      "correctAnswer": "The experiment must be carried out under very controlled conditions.",
      "explanation": "'Carry out' is a formal phrasal verb for performing tasks.",
      "points": 1
    },
    {
      "id": "c2-u12-b3-q4",
      "type": "multiple-choice",
      "question": "What is a 'placebo'?",
      "options": ["A very strong drug", "A harmless substance used as a control in experiments", "A type of surgical tool", "A medical emergency"],
      "correctAnswer": "A harmless substance used as a control in experiments",
      "explanation": "The placebo effect is a well-known psychological phenomenon.",
      "points": 1
    },
    {
      "id": "c2-u12-b3-q5",
      "type": "fill-blank",
      "question": "There is a strong ________ between smoking and lung cancer.",
      "correctAnswer": "correlation",
      "explanation": "Correlation is a statistical relationship between two variables.",
      "points": 1
    },
    {
      "id": "c2-u12-b3-q6",
      "type": "key-word-transformation",
      "sentence": "The researchers didn't consider the age of the participants.",
      "keyWord": "ACCOUNT",
      "startOfAnswer": "The researchers failed to",
      "correctAnswer": "The researchers failed to take into account the age of the participants.",
      "explanation": "'Take into account' means to consider.",
      "points": 1
    },
    {
      "id": "c2-u12-b3-q7",
      "type": "multiple-choice",
      "question": "What is an 'independent variable'?",
      "options": ["The variable that is changed or controlled in a scientific experiment", "The variable that is being tested and measured", "A variable that stays the same", "A variable that doesn't exist"],
      "correctAnswer": "The variable that is changed or controlled in a scientific experiment",
      "explanation": "It stands alone and isn't changed by the other variables.",
      "points": 1
    },
    {
      "id": "c2-u12-b3-q8",
      "type": "fill-blank",
      "question": "The results of the study were ________, so more research is needed.",
      "correctAnswer": "inconclusive",
      "explanation": "Inconclusive results do not lead to a firm conclusion.",
      "points": 1
    },
    {
      "id": "c2-u12-b3-q9",
      "type": "key-word-transformation",
      "sentence": "They finally managed to solve the problem after many years.",
      "keyWord": "SOLUTION",
      "startOfAnswer": "They finally",
      "correctAnswer": "They finally hit upon a solution to the problem after many years.",
      "explanation": "'Hit upon' means to discover or think of something by chance.",
      "points": 1
    },
    {
      "id": "c2-u12-b3-q10",
      "type": "multiple-choice",
      "question": "What is 'empirical' research?",
      "options": ["Research based on dreams", "Research based on observed and measured phenomena", "Research based on religious texts", "Research done by emperors"],
      "correctAnswer": "Research based on observed and measured phenomena",
      "explanation": "Empirical evidence is central to the scientific method.",
      "points": 1
    }
  ]
};

export const C2_U12_BLOCK4: Exercise = {
  "id": "c2-u12-b4",
  "type": "grammar",
  "title": "Block 4: Personal vs Impersonal Passive",
  "explanation": "Switching between structures for reporting information.",
  "questions": [
    {
      "id": "c2-u12-b4-q1",
      "type": "key-word-transformation",
      "sentence": "It is thought that the virus originated in birds.",
      "keyWord": "THOUGHT",
      "startOfAnswer": "The virus",
      "correctAnswer": "The virus is thought to have originated in birds.",
      "explanation": "Transforming impersonal to personal passive.",
      "points": 1
    },
    {
      "id": "c2-u12-b4-q2",
      "type": "key-word-transformation",
      "sentence": "People claim that he discovered the secret room.",
      "keyWord": "CLAIMED",
      "startOfAnswer": "He",
      "correctAnswer": "He is claimed to have discovered the secret room.",
      "explanation": "Transforming active to personal passive.",
      "points": 1
    },
    {
      "id": "c2-u12-b4-q3",
      "type": "key-word-transformation",
      "sentence": "It is rumored that they are getting married.",
      "keyWord": "RUMORED",
      "startOfAnswer": "They",
      "correctAnswer": "They are rumored to be getting married.",
      "explanation": "Impersonal to personal passive (present continuous).",
      "points": 1
    },
    {
      "id": "c2-u12-b4-q4",
      "type": "key-word-transformation",
      "sentence": "Experts believe that the painting is a fake.",
      "keyWord": "BELIEVED",
      "startOfAnswer": "The painting",
      "correctAnswer": "The painting is believed to be a fake.",
      "explanation": "Active to personal passive (present).",
      "points": 1
    },
    {
      "id": "c2-u12-b4-q5",
      "type": "key-word-transformation",
      "sentence": "They understood that the situation was critical.",
      "keyWord": "UNDERSTOOD",
      "startOfAnswer": "The situation",
      "correctAnswer": "The situation was understood to be critical.",
      "explanation": "Active past to personal passive past.",
      "points": 1
    },
    {
      "id": "c2-u12-b4-q6",
      "type": "key-word-transformation",
      "sentence": "It is alleged that he stole the jewels.",
      "keyWord": "ALLEGED",
      "startOfAnswer": "He",
      "correctAnswer": "He is alleged to have stolen the jewels.",
      "explanation": "Allegation reported with perfect infinitive.",
      "points": 1
    },
    {
      "id": "c2-u12-b4-q7",
      "type": "key-word-transformation",
      "sentence": "People consider her to be the best in her field.",
      "keyWord": "CONSIDERED",
      "startOfAnswer": "She",
      "correctAnswer": "She is considered to be the best in her field.",
      "explanation": "Active to personal passive.",
      "points": 1
    },
    {
      "id": "c2-u12-b4-q8",
      "type": "key-word-transformation",
      "sentence": "It is expected that the train will be late.",
      "keyWord": "EXPECTED",
      "startOfAnswer": "The train",
      "correctAnswer": "The train is expected to be late.",
      "explanation": "Impersonal to personal passive (future expectation).",
      "points": 1
    },
    {
      "id": "c2-u12-b4-q9",
      "type": "key-word-transformation",
      "sentence": "They report that the building is safe.",
      "keyWord": "REPORTED",
      "startOfAnswer": "The building",
      "correctAnswer": "The building is reported to be safe.",
      "explanation": "Active to personal passive.",
      "points": 1
    },
    {
      "id": "c2-u12-b4-q10",
      "type": "key-word-transformation",
      "sentence": "Scientists assume that life exists on other planets.",
      "keyWord": "ASSUMED",
      "startOfAnswer": "Life",
      "correctAnswer": "Life is assumed to exist on other planets.",
      "explanation": "Active to personal passive.",
      "points": 1
    }
  ]
};

export const C2_U12_BLOCK5: Exercise = {
  "id": "c2-u12-b5",
  "type": "vocabulary",
  "title": "Block 5: Fields of Science",
  "explanation": "Specific vocabulary for different scientific disciplines.",
  "questions": [
    {
      "id": "c2-u12-b5-q1",
      "type": "multiple-choice",
      "question": "What does an 'entomologist' study?",
      "options": ["Words", "Insects", "Rocks", "Birds"],
      "correctAnswer": "Insects",
      "explanation": "Entomology is the study of insects.",
      "points": 1
    },
    {
      "id": "c2-u12-b5-q2",
      "type": "fill-blank",
      "question": "The ________ analyzed the soil samples for traces of minerals.",
      "correctAnswer": "geologist",
      "explanation": "Geologists study the earth's physical structure and substance.",
      "points": 1
    },
    {
      "id": "c2-u12-b5-q3",
      "type": "multiple-choice",
      "question": "What is 'linguistics' the study of?",
      "options": ["Languages", "Maps", "Stars", "Money"],
      "correctAnswer": "Languages",
      "explanation": "Linguistics is the scientific study of language.",
      "points": 1
    },
    {
      "id": "c2-u12-b5-q4",
      "type": "fill-blank",
      "question": "The ________ observed the distant galaxy through a powerful telescope.",
      "correctAnswer": "astronomer",
      "explanation": "Astronomers study celestial objects.",
      "points": 1
    },
    {
      "id": "c2-u12-b5-q5",
      "type": "multiple-choice",
      "question": "What does a 'pathologist' do?",
      "options": ["Builds paths", "Studies diseases and their effects on the body", "Paints pictures", "Cooks food"],
      "correctAnswer": "Studies diseases and their effects on the body",
      "explanation": "Pathology is the study of the causes and effects of diseases.",
      "points": 1
    },
    {
      "id": "c2-u12-b5-q6",
      "type": "fill-blank",
      "question": "The ________ examined the ancient ruins to learn about the civilization.",
      "correctAnswer": "archaeologist",
      "explanation": "Archaeologists study human history through excavation.",
      "points": 1
    },
    {
      "id": "c2-u12-b5-q7",
      "type": "multiple-choice",
      "question": "What is 'climatology'?",
      "options": ["The study of mountains", "The study of climate", "The study of oceans", "The study of people"],
      "correctAnswer": "The study of climate",
      "explanation": "Climatologists study weather patterns over long periods.",
      "points": 1
    },
    {
      "id": "c2-u12-b5-q8",
      "type": "fill-blank",
      "question": "The ________ conducted a survey to understand social behavior.",
      "correctAnswer": "sociologist",
      "explanation": "Sociologists study society and social behavior.",
      "points": 1
    },
    {
      "id": "c2-u12-b5-q9",
      "type": "multiple-choice",
      "question": "What does a 'botanist' study?",
      "options": ["Animals", "Plants", "Robots", "Cars"],
      "correctAnswer": "Plants",
      "explanation": "Botany is the study of plant life.",
      "points": 1
    },
    {
      "id": "c2-u12-b5-q10",
      "type": "fill-blank",
      "question": "The ________ studied the properties of different chemical compounds.",
      "correctAnswer": "chemist",
      "explanation": "Chemists study substances and their interactions.",
      "points": 1
    }
  ]
};

export const C2_U12_BLOCK6: Exercise = {
  "id": "c2-u12-b6",
  "type": "reading",
  "title": "Block 6: The Ethics of Bio-engineering",
  "explanation": "Reading comprehension on a complex scientific ethics text.",
  "questions": [
    {
      "id": "c2-u12-b6-q1",
      "type": "multiple-choice",
      "question": "What is the 'slippery slope' argument in bio-engineering?",
      "options": ["A physical danger in laboratories", "The idea that small ethical concessions will lead to major, unacceptable consequences", "A type of sliding door", "A mathematical formula"],
      "correctAnswer": "The idea that small ethical concessions will lead to major, unacceptable consequences",
      "explanation": "Slippery slope is a common ethical and logical argument.",
      "points": 1
    },
    {
      "id": "c2-u12-b6-q2",
      "type": "fill-blank",
      "question": "The debate over CRISPR technology is ________ with ethical dilemmas.",
      "correctAnswer": "fraught",
      "explanation": "Fraught with means full of (usually something bad).",
      "points": 1
    },
    {
      "id": "c2-u12-b6-q3",
      "type": "multiple-choice",
      "question": "What does 'germline editing' refer to?",
      "options": ["Editing books about germs", "Making genetic changes that can be passed down to future generations", "Cleaning a laboratory", "Designing new medicines"],
      "correctAnswer": "Making genetic changes that can be passed down to future generations",
      "explanation": "Germline editing is particularly controversial because of its hereditary impact.",
      "points": 1
    },
    {
      "id": "c2-u12-b6-q4",
      "type": "fill-blank",
      "question": "Some argue that we should not 'play ________' by altering the human genome.",
      "correctAnswer": "God",
      "explanation": "'Play God' is a common expression for overreaching human power.",
      "points": 1
    },
    {
      "id": "c2-u12-b6-q5",
      "type": "multiple-choice",
      "question": "What is a 'moratorium'?",
      "options": ["A type of cemetery", "A temporary prohibition of an activity", "A scientific reward", "A final decision"],
      "correctAnswer": "A temporary prohibition of an activity",
      "explanation": "Many scientists called for a moratorium on germline editing.",
      "points": 1
    },
    {
      "id": "c2-u12-b6-q6",
      "type": "fill-blank",
      "question": "The ________ of genetic modification could be enormous.",
      "correctAnswer": "ramifications",
      "explanation": "Ramifications are the consequences of an action or event.",
      "points": 1
    },
    {
      "id": "c2-u12-b6-q7",
      "type": "multiple-choice",
      "question": "What is 'bioethics'?",
      "options": ["The study of ethical issues arising from advances in biology and medicine", "The study of recycling", "A type of organic diet", "The history of biology"],
      "correctAnswer": "The study of ethical issues arising from advances in biology and medicine",
      "explanation": "Bioethics guides scientific progress.",
      "points": 1
    },
    {
      "id": "c2-u12-b6-q8",
      "type": "fill-blank",
      "question": "We must ensure that technological progress does not ________ human rights.",
      "correctAnswer": "infringe",
      "explanation": "To infringe is to act so as to limit or undermine something.",
      "points": 1
    },
    {
      "id": "c2-u12-b6-q9",
      "type": "multiple-choice",
      "question": "What does 'transhumanism' advocate?",
      "options": ["Returning to nature", "The use of technology to enhance human physical and intellectual abilities", "Moving to another country", "A new type of religion"],
      "correctAnswer": "The use of technology to enhance human physical and intellectual abilities",
      "explanation": "Transhumanism explores the future of the human species.",
      "points": 1
    },
    {
      "id": "c2-u12-b6-q10",
      "type": "fill-blank",
      "question": "The possibility of creating 'designer babies' raises ________ concerns.",
      "correctAnswer": "profound",
      "explanation": "Profound means very great or intense.",
      "points": 1
    }
  ]
};

export const C2_U12_BLOCK7: Exercise = {
  "id": "c2-u12-b7",
  "type": "vocabulary",
  "title": "Block 7: Scientific Collocations & Idioms",
  "explanation": "Advanced phrases used in academic and scientific contexts.",
  "questions": [
    {
      "id": "c2-u12-b7-q1",
      "type": "multiple-choice",
      "question": "What does it mean to 'break new ground'?",
      "options": ["To dig a hole", "To do something innovative or pioneering", "To destroy a building", "To fail completely"],
      "correctAnswer": "To do something innovative or pioneering",
      "explanation": "Common idiom for discovery.",
      "points": 1
    },
    {
      "id": "c2-u12-b7-q2",
      "type": "fill-blank",
      "question": "The theory has stood the ________ of time.",
      "correctAnswer": "test",
      "explanation": "'Stand the test of time' means to remain popular or valid for a long time.",
      "points": 1
    },
    {
      "id": "c2-u12-b7-q3",
      "type": "multiple-choice",
      "question": "If you are 'back to square one', you...",
      "options": ["Have finished the task", "Have to start again because a previous attempt failed", "Are winning a game", "Are in a square room"],
      "correctAnswer": "Have to start again because a previous attempt failed",
      "explanation": "Idiom for starting over.",
      "points": 1
    },
    {
      "id": "c2-u12-b7-q4",
      "type": "fill-blank",
      "question": "The discovery was a ________ in the dark.",
      "correctAnswer": "shot",
      "explanation": "'A shot in the dark' is a guess that has little chance of being correct.",
      "points": 1
    },
    {
      "id": "c2-u12-b7-q5",
      "type": "multiple-choice",
      "question": "What is a 'blind alley' in research?",
      "options": ["A dark street", "A direction that leads nowhere or is not productive", "A secret laboratory", "A way to win a prize"],
      "correctAnswer": "A direction that leads nowhere or is not productive",
      "explanation": "Idiom for a dead end.",
      "points": 1
    },
    {
      "id": "c2-u12-b7-q6",
      "type": "fill-blank",
      "question": "They are on the ________ of a breakthrough.",
      "correctAnswer": "threshold",
      "explanation": "'On the threshold of' means at the beginning or very close to.",
      "points": 1
    },
    {
      "id": "c2-u12-b7-q7",
      "type": "multiple-choice",
      "question": "If something is 'not rocket science', it is...",
      "options": ["Related to biology", "Easy to understand", "Very complicated", "About space"],
      "correctAnswer": "Easy to understand",
      "explanation": "Common idiom for simplicity.",
      "points": 1
    },
    {
      "id": "c2-u12-b7-q8",
      "type": "fill-blank",
      "question": "The results were ________ expected.",
      "correctAnswer": "as",
      "explanation": "'As expected' is a standard collocation.",
      "points": 1
    },
    {
      "id": "c2-u12-b7-q9",
      "type": "multiple-choice",
      "question": "What does 'to push the envelope' mean?",
      "options": ["To mail a letter", "To approach or extend the limits of what is possible", "To hide a secret", "To buy new stationary"],
      "correctAnswer": "To approach or extend the limits of what is possible",
      "explanation": "Idiom for innovation and risk-taking.",
      "points": 1
    },
    {
      "id": "c2-u12-b7-q10",
      "type": "fill-blank",
      "question": "The data ________ out the original hypothesis.",
      "correctAnswer": "bore",
      "explanation": "'Bear out' (past 'bore out') means to support or confirm.",
      "points": 1
    }
  ]
};

export const C2_U12_BLOCK8: Exercise = {
  "id": "c2-u12-b8",
  "type": "grammar",
  "title": "Block 8: Advanced Passive Reporting with Modals",
  "explanation": "He might be said to be, he should have been believed to...",
  "questions": [
    {
      "id": "c2-u12-b8-q1",
      "type": "multiple-choice",
      "question": "Choose the most complex reporting structure.",
      "options": ["He is said to have been working.", "He could be said to have been working.", "It is said he worked.", "People say he worked."],
      "correctAnswer": "He could be said to have been working.",
      "explanation": "Combines modal 'could', passive, and perfect continuous infinitive.",
      "points": 1
    },
    {
      "id": "c2-u12-b8-q2",
      "type": "fill-blank",
      "question": "The theory might ________ (think) to be revolutionary in the future.",
      "correctAnswer": "be thought",
      "explanation": "Modal + passive + to-infinitive.",
      "points": 1
    },
    {
      "id": "c2-u12-b8-q3",
      "type": "key-word-transformation",
      "sentence": "Perhaps people believe he is the mastermind.",
      "keyWord": "MIGHT",
      "startOfAnswer": "He",
      "correctAnswer": "He might be believed to be the mastermind.",
      "explanation": "Reporting with a modal for uncertainty.",
      "points": 1
    },
    {
      "id": "c2-u12-b8-q4",
      "type": "multiple-choice",
      "question": "What does 'He should have been known to be careful' imply?",
      "options": ["He was careful.", "People didn't know he was careful, but they ought to have known.", "He is known to be careful now.", "He will be known to be careful."],
      "correctAnswer": "People didn't know he was careful, but they ought to have known.",
      "explanation": "Modal 'should' with perfect passive reporting.",
      "points": 1
    },
    {
      "id": "c2-u12-b8-q5",
      "type": "fill-blank",
      "question": "The results can ________ (describe) as disappointing.",
      "correctAnswer": "be described",
      "explanation": "Passive after modal 'can'.",
      "points": 1
    },
    {
      "id": "c2-u12-b8-q6",
      "type": "key-word-transformation",
      "sentence": "I'm sure they considered the risks.",
      "keyWord": "MUST",
      "startOfAnswer": "The risks",
      "correctAnswer": "The risks must have been considered.",
      "explanation": "Modal of deduction in the past passive.",
      "points": 1
    },
    {
      "id": "c2-u12-b8-q7",
      "type": "multiple-choice",
      "question": "Identify the error: 'He is said have been being helpful.'",
      "options": ["'is said'", "'have been being'", "'helpful'", "No error"],
      "correctAnswer": "'have been being'",
      "explanation": "Overly complex and incorrect use of continuous passive infinitive in this context.",
      "points": 1
    },
    {
      "id": "c2-u12-b8-q8",
      "type": "fill-blank",
      "question": "The discovery ________ (say) to have changed everything.",
      "correctAnswer": "is said",
      "explanation": "Standard personal passive reporting.",
      "points": 1
    },
    {
      "id": "c2-u12-b8-q9",
      "type": "key-word-transformation",
      "sentence": "It is necessary that the truth is told.",
      "keyWord": "NEEDS",
      "startOfAnswer": "The truth",
      "correctAnswer": "The truth needs to be told.",
      "explanation": "Passive with 'needs'.",
      "points": 1
    },
    {
      "id": "c2-u12-b8-q10",
      "type": "multiple-choice",
      "question": "What is the meaning of 'He is to be considered a hero'?",
      "options": ["He was a hero.", "He should be treated as a hero.", "He is a hero already.", "He wants to be a hero."],
      "correctAnswer": "He should be treated as a hero.",
      "explanation": "'Is to be + past participle' can express an obligation or instruction.",
      "points": 1
    }
  ]
};

export const C2_U12_BLOCK9: Exercise = {
  "id": "c2-u12-b9",
  "type": "vocabulary",
  "title": "Block 9: Academic Writing & Analysis",
  "explanation": "Vocabulary for writing research papers and analyzing data.",
  "questions": [
    {
      "id": "c2-u12-b9-q1",
      "type": "multiple-choice",
      "question": "What is an 'abstract' in a research paper?",
      "options": ["A type of painting", "A brief summary of the research", "The bibliography", "A secret code"],
      "correctAnswer": "A brief summary of the research",
      "explanation": "Abstracts provide a quick overview of the study.",
      "points": 1
    },
    {
      "id": "c2-u12-b9-q2",
      "type": "fill-blank",
      "question": "The author provides ________ evidence to support his thesis.",
      "correctAnswer": "compelling",
      "explanation": "Compelling evidence is very strong and convincing.",
      "points": 1
    },
    {
      "id": "c2-u12-b9-q3",
      "type": "key-word-transformation",
      "sentence": "The study highlights the importance of early intervention.",
      "keyWord": "EMPHASIS",
      "startOfAnswer": "The study places",
      "correctAnswer": "The study places emphasis on the importance of early intervention.",
      "explanation": "'Place emphasis on' is a formal academic collocation.",
      "points": 1
    },
    {
      "id": "c2-u12-b9-q4",
      "type": "multiple-choice",
      "question": "What does it mean to 'synthesize' information?",
      "options": ["To ignore it", "To combine different ideas or information into a single whole", "To make it more complicated", "To delete it"],
      "correctAnswer": "To combine different ideas or information into a single whole",
      "explanation": "Synthesis is a high-level academic skill.",
      "points": 1
    },
    {
      "id": "c2-u12-b9-q5",
      "type": "fill-blank",
      "question": "The data ________ the hypothesis.",
      "correctAnswer": "invalidates",
      "explanation": "To invalidate is to prove that something is not true or correct.",
      "points": 1
    },
    {
      "id": "c2-u12-b9-q6",
      "type": "key-word-transformation",
      "sentence": "He based his theory on several assumptions.",
      "keyWord": "GROUNDED",
      "startOfAnswer": "His theory was",
      "correctAnswer": "His theory was grounded in several assumptions.",
      "explanation": "'Grounded in' means based on.",
      "points": 1
    },
    {
      "id": "c2-u12-b9-q7",
      "type": "multiple-choice",
      "question": "What is 'peer review'?",
      "options": ["Looking at your friends' work", "Evaluation of scientific or professional work by others working in the same field", "A type of party", "A government inspection"],
      "correctAnswer": "Evaluation of scientific or professional work by others working in the same field",
      "explanation": "Peer review is essential for scientific quality control.",
      "points": 1
    },
    {
      "id": "c2-u12-b9-q8",
      "type": "fill-blank",
      "question": "The results are ________ to different interpretations.",
      "correctAnswer": "open",
      "explanation": "'Open to interpretation' means having more than one possible meaning.",
      "points": 1
    },
    {
      "id": "c2-u12-b9-q9",
      "type": "key-word-transformation",
      "sentence": "The researchers found several inconsistencies in the data.",
      "keyWord": "DISCREPANCIES",
      "startOfAnswer": "The researchers noted",
      "correctAnswer": "The researchers noted several discrepancies in the data.",
      "explanation": "'Discrepancy' is a formal word for inconsistency.",
      "points": 1
    },
    {
      "id": "c2-u12-b9-q10",
      "type": "multiple-choice",
      "question": "What is 'quantitative' data?",
      "options": ["Data that is measured and expressed with numbers", "Data about the quality of something", "Secret data", "Old data"],
      "correctAnswer": "Data that is measured and expressed with numbers",
      "explanation": "Quantitative vs Qualitative is a basic distinction in research.",
      "points": 1
    }
  ]
};

export const C2_U12_BLOCK10: Exercise = {
  "id": "c2-u12-b10",
  "type": "vocabulary",
  "title": "Block 10: Scientific Review",
  "explanation": "Final review of Unit 12 concepts.",
  "questions": [
    {
      "id": "c2-u12-b10-q1",
      "type": "multiple-choice",
      "question": "Which term describes a proposed explanation made on the basis of limited evidence as a starting point for further investigation?",
      "options": ["Theory", "Hypothesis", "Law", "Fact"],
      "correctAnswer": "Hypothesis",
      "explanation": "A hypothesis is a preliminary explanation.",
      "points": 1
    },
    {
      "id": "c2-u12-b10-q2",
      "type": "fill-blank",
      "question": "The discovery had a ________ impact on the field of genetics.",
      "correctAnswer": "transformative",
      "explanation": "Transformative means causing a marked change in someone or something.",
      "points": 1
    },
    {
      "id": "c2-u12-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'nanotechnology'?",
      "options": ["Technology used in giant machines", "The branch of technology that deals with dimensions and tolerances of less than 100 nanometers", "Old technology", "Computer games"],
      "correctAnswer": "The branch of technology that deals with dimensions and tolerances of less than 100 nanometers",
      "explanation": "Nanotechnology works at the molecular level.",
      "points": 1
    },
    {
      "id": "c2-u12-b10-q4",
      "type": "fill-blank",
      "question": "The data was carefully ________ before being published.",
      "correctAnswer": "scrutinized",
      "explanation": "To scrutinize is to examine or inspect closely and thoroughly.",
      "points": 1
    },
    {
      "id": "c2-u12-b10-q5",
      "type": "key-word-transformation",
      "sentence": "People say that the CEO is resigning.",
      "keyWord": "RUMORED",
      "startOfAnswer": "The CEO",
      "correctAnswer": "The CEO is rumored to be resigning.",
      "explanation": "Passive reporting verb transformation.",
      "points": 1
    },
    {
      "id": "c2-u12-b10-q6",
      "type": "multiple-choice",
      "question": "What is 'cognitive' science?",
      "options": ["The study of the mind and its processes", "The study of rocks", "The study of stars", "The study of fish"],
      "correctAnswer": "The study of the mind and its processes",
      "explanation": "Cognitive science is interdisciplinary.",
      "points": 1
    },
    {
      "id": "c2-u12-b10-q7",
      "type": "fill-blank",
      "question": "The ________ of the new drug are still being studied.",
      "correctAnswer": "implications",
      "explanation": "Implications are the possible future effects or results of an action or decision.",
      "points": 1
    },
    {
      "id": "c2-u12-b10-q8",
      "type": "key-word-transformation",
      "sentence": "Experts believe the painting was created in the 17th century.",
      "keyWord": "BELIEVED",
      "startOfAnswer": "The painting",
      "correctAnswer": "The painting is believed to have been created in the 17th century.",
      "explanation": "Passive reporting with perfect infinitive.",
      "points": 1
    },
    {
      "id": "c2-u12-b10-q9",
      "type": "multiple-choice",
      "question": "What does it mean to 'replicate' an experiment?",
      "options": ["To fail it", "To repeat the research study to determine if the basic findings can be applied to other participants and circumstances", "To write about it", "To draw it"],
      "correctAnswer": "To repeat the research study to determine if the basic findings can be applied to other participants and circumstances",
      "explanation": "Replicability is a key requirement for scientific validity.",
      "points": 1
    },
    {
      "id": "c2-u12-b10-q10",
      "type": "fill-blank",
      "question": "The findings are ________ with previous research.",
      "correctAnswer": "consistent",
      "explanation": "Consistent means in agreement or not contradictory.",
      "points": 1
    }
  ]
};

export const C2_UNIT_12 = createC2Unit(
  'c2-u12',
  'Frontiers of Scientific Inquiry',
  [
    C2_U12_BLOCK1, C2_U12_BLOCK2, C2_U12_BLOCK3, C2_U12_BLOCK4, C2_U12_BLOCK5,
    C2_U12_BLOCK6, C2_U12_BLOCK7, C2_U12_BLOCK8, C2_U12_BLOCK9, C2_U12_BLOCK10
  ]
);
