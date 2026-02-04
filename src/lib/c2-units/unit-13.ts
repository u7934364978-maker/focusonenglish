
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U13_BLOCK1: Exercise = {
  "id": "c2-u13-b1",
  "type": "vocabulary",
  "title": "Block 1: AI & Robotics Terminology",
  "explanation": "Advanced vocabulary for artificial intelligence, machine learning, and automation.",
  "questions": [
    {
      "id": "c2-u13-b1-q1",
      "type": "multiple-choice",
      "question": "What is 'Artificial General Intelligence' (AGI)?",
      "options": ["AI that can play chess", "AI that has the capacity to understand or learn any intellectual task that a human being can", "A type of robot arm", "A computer virus"],
      "correctAnswer": "AI that has the capacity to understand or learn any intellectual task that a human being can",
      "explanation": "AGI represents the hypothetical 'strong' AI.",
      "points": 1
    },
    {
      "id": "c2-u13-b1-q2",
      "type": "fill-blank",
      "question": "The algorithm was trained on a massive ________ of data.",
      "correctAnswer": "dataset",
      "explanation": "Datasets are used to train machine learning models.",
      "points": 1
    },
    {
      "id": "c2-u13-b1-q3",
      "type": "key-word-transformation",
      "sentence": "The robot's movements were very smooth and natural.",
      "keyWord": "FLUIDITY",
      "startOfAnswer": "The robot moved with",
      "correctAnswer": "The robot moved with remarkable fluidity.",
      "explanation": "Fluidity refers to smooth, graceful movement.",
      "points": 1
    },
    {
      "id": "c2-u13-b1-q4",
      "type": "multiple-choice",
      "question": "What does 'natural language processing' (NLP) enable computers to do?",
      "options": ["Perform complex math", "Understand and generate human language", "See objects in 3D", "Move autonomously"],
      "correctAnswer": "Understand and generate human language",
      "explanation": "NLP is used in chatbots and translation tools.",
      "points": 1
    },
    {
      "id": "c2-u13-b1-q5",
      "type": "fill-blank",
      "question": "Many fear that AI will ________ human workers in certain industries.",
      "correctAnswer": "supplant",
      "explanation": "To supplant is to supersede and replace.",
      "points": 1
    },
    {
      "id": "c2-u13-b1-q6",
      "type": "key-word-transformation",
      "sentence": "The AI correctly identified the pattern in the data.",
      "keyWord": "DISCERNED",
      "startOfAnswer": "The AI",
      "correctAnswer": "The AI discerned the pattern in the data.",
      "explanation": "To discern is to perceive or recognize something.",
      "points": 1
    },
    {
      "id": "c2-u13-b1-q7",
      "type": "multiple-choice",
      "question": "What is a 'neural network'?",
      "options": ["A type of internet cable", "A computer system modeled on the human brain and nervous system", "A robot's internal battery", "A social network for scientists"],
      "correctAnswer": "A computer system modeled on the human brain and nervous system",
      "explanation": "Neural networks are foundational to modern AI.",
      "points": 1
    },
    {
      "id": "c2-u13-b1-q8",
      "type": "fill-blank",
      "question": "The software is designed to ________ to the user's preferences over time.",
      "correctAnswer": "adapt",
      "explanation": "Adaptability is a key feature of intelligent systems.",
      "points": 1
    },
    {
      "id": "c2-u13-b1-q9",
      "type": "key-word-transformation",
      "sentence": "The new technology will change our lives forever.",
      "keyWord": "IRREVERSIBLY",
      "startOfAnswer": "The new technology will",
      "correctAnswer": "The new technology will irreversibly change our lives.",
      "explanation": "Irreversibly means in a way that cannot be undone.",
      "points": 1
    },
    {
      "id": "c2-u13-b1-q10",
      "type": "multiple-choice",
      "question": "What is 'machine learning'?",
      "options": ["Teaching robots to clean", "The use and development of computer systems that are able to learn and adapt without following explicit instructions", "Building faster computers", "A type of video game"],
      "correctAnswer": "The use and development of computer systems that are able to learn and adapt without following explicit instructions",
      "explanation": "Machine learning uses algorithms and statistical models.",
      "points": 1
    }
  ]
};

export const C2_U13_BLOCK2: Exercise = {
  "id": "c2-u13-b2",
  "type": "grammar",
  "title": "Block 2: Speculation & Deduction (Present/Future)",
  "explanation": "Using modals like must, can't, might, could to express degrees of certainty.",
  "questions": [
    {
      "id": "c2-u13-b2-q1",
      "type": "multiple-choice",
      "question": "Which sentence expresses almost total certainty that something is true?",
      "options": ["He might be at home.", "He could be at home.", "He must be at home.", "He may be at home."],
      "correctAnswer": "He must be at home.",
      "explanation": "'Must' indicates strong deduction based on evidence.",
      "points": 1
    },
    {
      "id": "c2-u13-b2-q2",
      "type": "fill-blank",
      "question": "It's 10 PM. She ________ (be) sleeping already.",
      "correctAnswer": "must be",
      "explanation": "Deduction about a present state.",
      "points": 1
    },
    {
      "id": "c2-u13-b2-q3",
      "type": "key-word-transformation",
      "sentence": "I'm sure that isn't the real reason.",
      "keyWord": "CAN'T",
      "startOfAnswer": "That",
      "correctAnswer": "That can't be the real reason.",
      "explanation": "'Can't' is used for negative deduction.",
      "points": 1
    },
    {
      "id": "c2-u13-b2-q4",
      "type": "multiple-choice",
      "question": "Which modal implies a slight possibility?",
      "options": ["He will be there.", "He might be there.", "He must be there.", "He is there."],
      "correctAnswer": "He might be there.",
      "explanation": "'Might', 'may', and 'could' express varying degrees of possibility.",
      "points": 1
    },
    {
      "id": "c2-u13-b2-q5",
      "type": "fill-blank",
      "question": "Don't touch that wire; it ________ (be) live.",
      "correctAnswer": "could be",
      "explanation": "Possibility of danger.",
      "points": 1
    },
    {
      "id": "c2-u13-b2-q6",
      "type": "key-word-transformation",
      "sentence": "It is certain that AI will become even more powerful.",
      "keyWord": "BOUND",
      "startOfAnswer": "AI",
      "correctAnswer": "AI is bound to become even more powerful.",
      "explanation": "'Bound to' expresses certainty about the future.",
      "points": 1
    },
    {
      "id": "c2-u13-b2-q7",
      "type": "multiple-choice",
      "question": "What does 'It could well be true' mean?",
      "options": ["It is definitely true.", "It is probably true.", "It is impossible.", "It was true in the past."],
      "correctAnswer": "It is probably true.",
      "explanation": "'Could well' suggests a strong possibility.",
      "points": 1
    },
    {
      "id": "c2-u13-b2-q8",
      "type": "fill-blank",
      "question": "He's not answering. He ________ (be) in a meeting.",
      "correctAnswer": "might be",
      "explanation": "Present speculation.",
      "points": 1
    },
    {
      "id": "c2-u13-b2-q9",
      "type": "key-word-transformation",
      "sentence": "I'm sure he is expecting our call.",
      "keyWord": "MUST",
      "startOfAnswer": "He",
      "correctAnswer": "He must be expecting our call.",
      "explanation": "Deduction about a continuous state.",
      "points": 1
    },
    {
      "id": "c2-u13-b2-q10",
      "type": "multiple-choice",
      "question": "Which sentence is used to express a theoretical possibility?",
      "options": ["It can be very cold in winter here.", "It must be cold now.", "It will be cold tomorrow.", "It might have been cold."],
      "correctAnswer": "It can be very cold in winter here.",
      "explanation": "'Can' is used for theoretical or general possibility.",
      "points": 1
    }
  ]
};

export const C2_U13_BLOCK3: Exercise = {
  "id": "c2-u13-b3",
  "type": "reading",
  "title": "Block 3: The Technological Singularity",
  "explanation": "Analyze a text about the point where AI exceeds human intelligence.",
  "questions": [
    {
      "id": "c2-u13-b3-q1",
      "type": "multiple-choice",
      "question": "What is the 'Technological Singularity'?",
      "options": ["The invention of the internet", "A hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unfathomable changes to human civilization", "A new type of solar power", "The first robot to pass the Turing test"],
      "correctAnswer": "A hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unfathomable changes to human civilization",
      "explanation": "The singularity is a major topic in future studies.",
      "points": 1
    },
    {
      "id": "c2-u13-b3-q2",
      "type": "fill-blank",
      "question": "The ________ of superintelligent AI could happen sooner than expected.",
      "correctAnswer": "advent",
      "explanation": "Advent means the arrival of a notable person, thing, or event.",
      "points": 1
    },
    {
      "id": "c2-u13-b3-q3",
      "type": "multiple-choice",
      "question": "What is the primary concern associated with 'superintelligence' according to the text?",
      "options": ["It will be too expensive", "It might not share human values and could pursue goals detrimental to humanity", "It will consume too much electricity", "It will be boring"],
      "correctAnswer": "It might not share human values and could pursue goals detrimental to humanity",
      "explanation": "The 'alignment problem' is central to AI safety.",
      "points": 1
    },
    {
      "id": "c2-u13-b3-q4",
      "type": "fill-blank",
      "question": "We must ensure that AI goals are ________ with human values.",
      "correctAnswer": "aligned",
      "explanation": "Alignment is the process of making AI beneficial for humans.",
      "points": 1
    },
    {
      "id": "c2-u13-b3-q5",
      "type": "multiple-choice",
      "question": "What does 'exponential growth' imply in the context of technology?",
      "options": ["Growth that is slow and steady", "Growth that becomes increasingly rapid", "Growth that goes backwards", "Growth that only happens in cities"],
      "correctAnswer": "Growth that becomes increasingly rapid",
      "explanation": "Exponential growth is often contrasted with linear growth.",
      "points": 1
    },
    {
      "id": "c2-u13-b3-q6",
      "type": "fill-blank",
      "question": "Computing power has been growing ________ for decades.",
      "correctAnswer": "exponentially",
      "explanation": "Adverbial form of exponential.",
      "points": 1
    },
    {
      "id": "c2-u13-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'Moore's Law'?",
      "options": ["A law about robot ethics", "The observation that the number of transistors on a microchip doubles about every two years", "A tax on computers", "A rule for internet safety"],
      "correctAnswer": "The observation that the number of transistors on a microchip doubles about every two years",
      "explanation": "Moore's Law has driven the computer revolution.",
      "points": 1
    },
    {
      "id": "c2-u13-b3-q8",
      "type": "fill-blank",
      "question": "The ________ of computer hardware has been staggering.",
      "correctAnswer": "proliferation",
      "explanation": "Proliferation means rapid increase in numbers.",
      "points": 1
    },
    {
      "id": "c2-u13-b3-q9",
      "type": "multiple-choice",
      "question": "What does 'unfathomable' mean?",
      "options": ["Very deep water", "Incapable of being fully explored or understood", "Easy to see", "Very fast"],
      "correctAnswer": "Incapable of being fully explored or understood",
      "explanation": "Commonly used for the vast changes predicted after the singularity.",
      "points": 1
    },
    {
      "id": "c2-u13-b3-q10",
      "type": "fill-blank",
      "question": "The future of humanity remains ________.",
      "correctAnswer": "enigmatic",
      "explanation": "Enigmatic means mysterious or difficult to interpret.",
      "points": 1
    }
  ]
};

export const C2_U13_BLOCK4: Exercise = {
  "id": "c2-u13-b4",
  "type": "grammar",
  "title": "Block 4: Speculation & Deduction (Past)",
  "explanation": "Must have, couldn't have, might have, should have + past participle.",
  "questions": [
    {
      "id": "c2-u13-b4-q1",
      "type": "multiple-choice",
      "question": "Which sentence expresses a deduction that something was definitely NOT true?",
      "options": ["He might have forgotten.", "He must have forgotten.", "He couldn't have forgotten.", "He should have forgotten."],
      "correctAnswer": "He couldn't have forgotten.",
      "explanation": "'Couldn't have' is the past of 'can't' for negative deduction.",
      "points": 1
    },
    {
      "id": "c2-u13-b4-q2",
      "type": "fill-blank",
      "question": "The lights were on. They ________ (forget) to turn them off.",
      "correctAnswer": "must have forgotten",
      "explanation": "Past deduction based on present evidence.",
      "points": 1
    },
    {
      "id": "c2-u13-b4-q3",
      "type": "key-word-transformation",
      "sentence": "It's possible that the email was sent to the wrong person.",
      "keyWord": "MIGHT",
      "startOfAnswer": "The email",
      "correctAnswer": "The email might have been sent to the wrong person.",
      "explanation": "Past possibility.",
      "points": 1
    },
    {
      "id": "c2-u13-b4-q4",
      "type": "multiple-choice",
      "question": "Identify the 'unfulfilled expectation' structure.",
      "options": ["He must have called.", "He should have called.", "He might have called.", "He could have called."],
      "correctAnswer": "He should have called.",
      "explanation": "'Should have' implies it was expected but didn't happen.",
      "points": 1
    },
    {
      "id": "c2-u13-b4-q5",
      "type": "fill-blank",
      "question": "He ________ (win) the race, but he tripped near the end.",
      "correctAnswer": "could have won",
      "explanation": "'Could have' for a past ability or possibility that wasn't realized.",
      "points": 1
    },
    {
      "id": "c2-u13-b4-q6",
      "type": "key-word-transformation",
      "sentence": "I'm sure she didn't see me.",
      "keyWord": "CAN'T",
      "startOfAnswer": "She",
      "correctAnswer": "She can't have seen me.",
      "explanation": "Negative past deduction.",
      "points": 1
    },
    {
      "id": "c2-u13-b4-q7",
      "type": "multiple-choice",
      "question": "What does 'I needn't have worried' mean?",
      "options": ["I worried and it was necessary.", "I worried but it turned out to be unnecessary.", "I didn't worry.", "I should worry now."],
      "correctAnswer": "I worried but it turned out to be unnecessary.",
      "explanation": "Contrast with 'didn't need to' (which often implies the action didn't happen).",
      "points": 1
    },
    {
      "id": "c2-u13-b4-q8",
      "type": "fill-blank",
      "question": "If you had told me, I ________ (help) you.",
      "correctAnswer": "would have helped",
      "explanation": "Third conditional result clause (hypothetical past).",
      "points": 1
    },
    {
      "id": "c2-u13-b4-q9",
      "type": "key-word-transformation",
      "sentence": "It was wrong of you to lie.",
      "keyWord": "SHOULD",
      "startOfAnswer": "You",
      "correctAnswer": "You should not have lied.",
      "explanation": "Expressing regret or criticism about the past.",
      "points": 1
    },
    {
      "id": "c2-u13-b4-q10",
      "type": "multiple-choice",
      "question": "Which sentence expresses a past possibility that didn't happen?",
      "options": ["He may have arrived.", "He might have arrived.", "He could have been killed.", "He must have arrived."],
      "correctAnswer": "He could have been killed.",
      "explanation": "'Could have' is frequently used for 'narrow escapes'.",
      "points": 1
    }
  ]
};

export const C2_U13_BLOCK5: Exercise = {
  "id": "c2-u13-b5",
  "type": "vocabulary",
  "title": "Block 5: Technology & Society",
  "explanation": "Vocabulary for the impact of technology on privacy, work, and ethics.",
  "questions": [
    {
      "id": "c2-u13-b5-q1",
      "type": "multiple-choice",
      "question": "What is the 'digital divide'?",
      "options": ["A type of computer screen", "The gulf between those who have ready access to computers and the internet, and those who do not", "A math problem", "A new social network"],
      "correctAnswer": "The gulf between those who have ready access to computers and the internet, and those who do not",
      "explanation": "The digital divide is a major socio-economic issue.",
      "points": 1
    },
    {
      "id": "c2-u13-b5-q2",
      "type": "fill-blank",
      "question": "We must be ________ of the privacy implications of new technology.",
      "correctAnswer": "mindful",
      "explanation": "To be mindful is to be conscious or aware of something.",
      "points": 1
    },
    {
      "id": "c2-u13-b5-q3",
      "type": "key-word-transformation",
      "sentence": "Social media has a huge influence on public opinion.",
      "keyWord": "EXERTS",
      "startOfAnswer": "Social media",
      "correctAnswer": "Social media exerts a huge influence on public opinion.",
      "explanation": "'Exert influence' is a common formal collocation.",
      "points": 1
    },
    {
      "id": "c2-u13-b5-q4",
      "type": "multiple-choice",
      "question": "What is 'algorithmic bias'?",
      "options": ["A math error", "Systematic and repeatable errors in a computer system that create unfair outcomes", "A fast computer", "A type of robot"],
      "correctAnswer": "Systematic and repeatable errors in a computer system that create unfair outcomes",
      "explanation": "Bias in AI can reinforce existing social inequalities.",
      "points": 1
    },
    {
      "id": "c2-u13-b5-q5",
      "type": "fill-blank",
      "question": "The use of facial recognition technology is highly ________.",
      "correctAnswer": "controversial",
      "explanation": "Controversial means causing public disagreement.",
      "points": 1
    },
    {
      "id": "c2-u13-b5-q6",
      "type": "key-word-transformation",
      "sentence": "The company is at the forefront of AI research.",
      "keyWord": "CUTTING",
      "startOfAnswer": "The company is on the",
      "correctAnswer": "The company is on the cutting edge of AI research.",
      "explanation": "'Cutting edge' means the most advanced stage of development.",
      "points": 1
    },
    {
      "id": "c2-u13-b5-q7",
      "type": "multiple-choice",
      "question": "What is 'data mining'?",
      "options": ["Digging for computers", "The practice of examining large databases in order to generate new information", "Storing data in a cave", "Deleting old files"],
      "correctAnswer": "The practice of examining large databases in order to generate new information",
      "explanation": "Data mining is used for marketing and research.",
      "points": 1
    },
    {
      "id": "c2-u13-b5-q8",
      "type": "fill-blank",
      "question": "Automation will ________ many routine tasks.",
      "correctAnswer": "obviate",
      "explanation": "To obviate is to remove (a need or difficulty).",
      "points": 1
    },
    {
      "id": "c2-u13-b5-q9",
      "type": "key-word-transformation",
      "sentence": "They finally implemented the new security protocols.",
      "keyWord": "EFFECT",
      "startOfAnswer": "They finally put the new security protocols",
      "correctAnswer": "They finally put the new security protocols into effect.",
      "explanation": "'Put into effect' means to implement.",
      "points": 1
    },
    {
      "id": "c2-u13-b5-q10",
      "type": "multiple-choice",
      "question": "What does 'disruptive technology' do?",
      "options": ["It breaks down often", "It significantly alters the way that consumers, industries, or businesses operate", "It makes a lot of noise", "It is very expensive"],
      "correctAnswer": "It significantly alters the way that consumers, industries, or businesses operate",
      "explanation": "Examples include the internet and smartphones.",
      "points": 1
    }
  ]
};

export const C2_U13_BLOCK6: Exercise = {
  "id": "c2-u13-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Advanced Speculation Transformations",
  "explanation": "Combining modals and advanced vocabulary.",
  "questions": [
    {
      "id": "c2-u13-b6-q1",
      "type": "key-word-transformation",
      "sentence": "It's highly likely that the project was a failure.",
      "keyWord": "MUST",
      "startOfAnswer": "The project",
      "correctAnswer": "The project must have been a failure.",
      "explanation": "Past deduction.",
      "points": 1
    },
    {
      "id": "c2-u13-b6-q2",
      "type": "key-word-transformation",
      "sentence": "I'm sure he didn't mean to offend you.",
      "keyWord": "CAN'T",
      "startOfAnswer": "He",
      "correctAnswer": "He can't have meant to offend you.",
      "explanation": "Negative past deduction.",
      "points": 1
    },
    {
      "id": "c2-u13-b6-q3",
      "type": "key-word-transformation",
      "sentence": "Perhaps they were delayed by the traffic.",
      "keyWord": "MIGHT",
      "startOfAnswer": "They",
      "correctAnswer": "They might have been delayed by the traffic.",
      "explanation": "Past possibility.",
      "points": 1
    },
    {
      "id": "c2-u13-b6-q4",
      "type": "key-word-transformation",
      "sentence": "It was a mistake not to backup the data.",
      "keyWord": "SHOULD",
      "startOfAnswer": "The data",
      "correctAnswer": "The data should have been backed up.",
      "explanation": "Criticism/regret about a past omission.",
      "points": 1
    },
    {
      "id": "c2-u13-b6-q5",
      "type": "key-word-transformation",
      "sentence": "I'm certain that the system is down.",
      "keyWord": "BOUND",
      "startOfAnswer": "The system",
      "correctAnswer": "The system is bound to be down.",
      "explanation": "Certainty (present/future).",
      "points": 1
    },
    {
      "id": "c2-u13-b6-q6",
      "type": "key-word-transformation",
      "sentence": "It is possible that he is lying.",
      "keyWord": "COULD",
      "startOfAnswer": "He",
      "correctAnswer": "He could be lying.",
      "explanation": "Present possibility.",
      "points": 1
    },
    {
      "id": "c2-u13-b6-q7",
      "type": "key-word-transformation",
      "sentence": "I'm sure she's not at home.",
      "keyWord": "CAN'T",
      "startOfAnswer": "She",
      "correctAnswer": "She can't be at home.",
      "explanation": "Negative present deduction.",
      "points": 1
    },
    {
      "id": "c2-u13-b6-q8",
      "type": "key-word-transformation",
      "sentence": "There's a chance the flight will be canceled.",
      "keyWord": "WELL",
      "startOfAnswer": "The flight",
      "correctAnswer": "The flight could well be canceled.",
      "explanation": "Probability with 'could well'.",
      "points": 1
    },
    {
      "id": "c2-u13-b6-q9",
      "type": "key-word-transformation",
      "sentence": "It wasn't necessary for you to bring a gift.",
      "keyWord": "NEEDN'T",
      "startOfAnswer": "You",
      "correctAnswer": "You needn't have brought a gift.",
      "explanation": "Unnecessary past action.",
      "points": 1
    },
    {
      "id": "c2-u13-b6-q10",
      "type": "key-word-transformation",
      "sentence": "It's possible that they forgot the meeting.",
      "keyWord": "MAY",
      "startOfAnswer": "They",
      "correctAnswer": "They may have forgotten the meeting.",
      "explanation": "Past possibility.",
      "points": 1
    }
  ]
};

export const C2_U13_BLOCK7: Exercise = {
  "id": "c2-u13-b7",
  "type": "vocabulary",
  "title": "Block 7: Technology Idioms & Metaphors",
  "explanation": "Common expressions derived from or related to technology.",
  "questions": [
    {
      "id": "c2-u13-b7-q1",
      "type": "multiple-choice",
      "question": "What does it mean to be 'on the same wavelength'?",
      "options": ["To listen to the same radio station", "To think in a similar way and understand each other well", "To use the same computer", "To be in the same room"],
      "correctAnswer": "To think in a similar way and understand each other well",
      "explanation": "Idiom for mutual understanding.",
      "points": 1
    },
    {
      "id": "c2-u13-b7-q2",
      "type": "fill-blank",
      "question": "The news spread like ________ on social media.",
      "correctAnswer": "wildfire",
      "explanation": "'Spread like wildfire' means to spread very quickly.",
      "points": 1
    },
    {
      "id": "c2-u13-b7-q3",
      "type": "multiple-choice",
      "question": "If you 'pull the plug' on a project, you...",
      "options": ["Finish it successfully", "Stop it from continuing", "Buy new equipment for it", "Connect it to the power"],
      "correctAnswer": "Stop it from continuing",
      "explanation": "Idiom for termination.",
      "points": 1
    },
    {
      "id": "c2-u13-b7-q4",
      "type": "fill-blank",
      "question": "I need to ________ my batteries after a long week.",
      "correctAnswer": "recharge",
      "explanation": "'Recharge your batteries' means to rest and recover energy.",
      "points": 1
    },
    {
      "id": "c2-u13-b7-q5",
      "type": "multiple-choice",
      "question": "What does 'to get your wires crossed' mean?",
      "options": ["To fix a computer", "To have a misunderstanding", "To be angry", "To be very fast"],
      "correctAnswer": "To have a misunderstanding",
      "explanation": "Idiom for confusion.",
      "points": 1
    },
    {
      "id": "c2-u13-b7-q6",
      "type": "fill-blank",
      "question": "The new law is a ________ in the machine of bureaucracy.",
      "correctAnswer": "cog",
      "explanation": "'A cog in the machine' refers to a person or thing that is a small part of a large organization.",
      "points": 1
    },
    {
      "id": "c2-u13-b7-q7",
      "type": "multiple-choice",
      "question": "If you are 'light years ahead', you are...",
      "options": ["Travelling in space", "Much more advanced than others", "Very old", "Visible from far away"],
      "correctAnswer": "Much more advanced than others",
      "explanation": "Idiom for superiority.",
      "points": 1
    },
    {
      "id": "c2-u13-b7-q8",
      "type": "fill-blank",
      "question": "It's not ________ science; anyone can do it.",
      "correctAnswer": "rocket",
      "explanation": "'Not rocket science' means it's not complicated.",
      "points": 1
    },
    {
      "id": "c2-u13-b7-q9",
      "type": "multiple-choice",
      "question": "What does 'to push someone's buttons' mean?",
      "options": ["To help them", "To deliberately annoy or provoke them", "To call them", "To play with them"],
      "correctAnswer": "To deliberately annoy or provoke them",
      "explanation": "Idiom for provocation.",
      "points": 1
    },
    {
      "id": "c2-u13-b7-q10",
      "type": "fill-blank",
      "question": "The invention was a ________ in the pan.",
      "correctAnswer": "flash",
      "explanation": "'A flash in the pan' is something that is successful for a short time but has no lasting effect.",
      "points": 1
    }
  ]
};

export const C2_U13_BLOCK8: Exercise = {
  "id": "c2-u13-b8",
  "type": "grammar",
  "title": "Block 8: Degrees of Certainty with Adverbs",
  "explanation": "Using adverbs like presumably, conceivably, arguably, undoubtedly.",
  "questions": [
    {
      "id": "c2-u13-b8-q1",
      "type": "multiple-choice",
      "question": "Which adverb expresses the highest degree of certainty?",
      "options": ["Possibly", "Presumably", "Undoubtedly", "Conceivably"],
      "correctAnswer": "Undoubtedly",
      "explanation": "Undoubtedly means without a doubt.",
      "points": 1
    },
    {
      "id": "c2-u13-b8-q2",
      "type": "fill-blank",
      "question": "________, they will be arriving late due to the strike.",
      "correctAnswer": "Presumably",
      "explanation": "Presumably means used to convey that what is asserted is very likely though not known for certain.",
      "points": 1
    },
    {
      "id": "c2-u13-b8-q3",
      "type": "key-word-transformation",
      "sentence": "It is possible to imagine a world without poverty.",
      "keyWord": "CONCEIVABLY",
      "startOfAnswer": "We could",
      "correctAnswer": "We could conceivably live in a world without poverty.",
      "explanation": "Conceivably means in a way that can be imagined.",
      "points": 1
    },
    {
      "id": "c2-u13-b8-q4",
      "type": "multiple-choice",
      "question": "What does 'Arguably' mean in a sentence?",
      "options": ["I am angry", "It can be argued or asserted (often used to qualify a superlative)", "It is a lie", "It is very quiet"],
      "correctAnswer": "It can be argued or asserted (often used to qualify a superlative)",
      "explanation": "Commonly used for opinions that are likely true but debatable.",
      "points": 1
    },
    {
      "id": "c2-u13-b8-q5",
      "type": "fill-blank",
      "question": "This is ________ the best film of the year.",
      "correctAnswer": "arguably",
      "explanation": "Qualifying a strong opinion.",
      "points": 1
    },
    {
      "id": "c2-u13-b8-q6",
      "type": "key-word-transformation",
      "sentence": "It is certain that he is the best candidate.",
      "keyWord": "BEYOND",
      "startOfAnswer": "He is",
      "correctAnswer": "He is beyond doubt the best candidate.",
      "explanation": "'Beyond doubt' means certain.",
      "points": 1
    },
    {
      "id": "c2-u13-b8-q7",
      "type": "multiple-choice",
      "question": "What is the meaning of 'Feasibly'?",
      "options": ["Easily", "In a way that is possible and likely to be achieved", "Very fast", "In a strange way"],
      "correctAnswer": "In a way that is possible and likely to be achieved",
      "explanation": "Related to feasibility.",
      "points": 1
    },
    {
      "id": "c2-u13-b8-q8",
      "type": "fill-blank",
      "question": "We could ________ finish the project by Friday if we work late.",
      "correctAnswer": "feasibly",
      "explanation": "Expressing practical possibility.",
      "points": 1
    },
    {
      "id": "c2-u13-b8-q9",
      "type": "key-word-transformation",
      "sentence": "I suppose they have already left.",
      "keyWord": "SUPPOSEDLY",
      "startOfAnswer": "They have",
      "correctAnswer": "They have supposedly already left.",
      "explanation": "Supposedly means according to what is generally assumed or believed.",
      "points": 1
    },
    {
      "id": "c2-u13-b8-q10",
      "type": "multiple-choice",
      "question": "Identify the adverb that suggests a lack of evidence: 'He is ________ a billionaire.'",
      "options": ["Undoubtedly", "Arguably", "Allegedly", "Feasibly"],
      "correctAnswer": "Allegedly",
      "explanation": "Allegedly means used to convey that something is claimed to be the case or have taken place, although there is no proof.",
      "points": 1
    }
  ]
};

export const C2_U13_BLOCK9: Exercise = {
  "id": "c2-u13-b9",
  "type": "vocabulary",
  "title": "Block 9: Hardware & Software",
  "explanation": "Specific terms for computing and engineering.",
  "questions": [
    {
      "id": "c2-u13-b9-q1",
      "type": "multiple-choice",
      "question": "What is 'firmware'?",
      "options": ["Soft blankets", "Permanent software programmed into a read-only memory", "A type of insurance", "A legal document"],
      "correctAnswer": "Permanent software programmed into a read-only memory",
      "explanation": "Firmware is essential for hardware operation.",
      "points": 1
    },
    {
      "id": "c2-u13-b9-q2",
      "type": "fill-blank",
      "question": "The system is ________ with older versions of the software.",
      "correctAnswer": "backwards-compatible",
      "explanation": "Backwards-compatible means able to be used with an older version of a product.",
      "points": 1
    },
    {
      "id": "c2-u13-b9-q3",
      "type": "key-word-transformation",
      "sentence": "The computer crashed because the processor was too hot.",
      "keyWord": "OVERHEATED",
      "startOfAnswer": "The processor",
      "correctAnswer": "The processor overheated, causing the computer to crash.",
      "explanation": "Overheating is a common hardware issue.",
      "points": 1
    },
    {
      "id": "c2-u13-b9-q4",
      "type": "multiple-choice",
      "question": "What is a 'benchmark' in computing?",
      "options": ["A place to sit", "A standard or point of reference against which things may be compared or assessed", "A type of mark on a screen", "A computer repair shop"],
      "correctAnswer": "A standard or point of reference against which things may be compared or assessed",
      "explanation": "Benchmarks are used to measure performance.",
      "points": 1
    },
    {
      "id": "c2-u13-b9-q5",
      "type": "fill-blank",
      "question": "You need to ________ your drivers to the latest version.",
      "correctAnswer": "update",
      "explanation": "Updating drivers ensures hardware stability.",
      "points": 1
    },
    {
      "id": "c2-u13-b9-q6",
      "type": "key-word-transformation",
      "sentence": "The network is very slow today.",
      "keyWord": "CONGESTED",
      "startOfAnswer": "The network is",
      "correctAnswer": "The network is heavily congested today.",
      "explanation": "Congestion refers to high traffic on a network.",
      "points": 1
    },
    {
      "id": "c2-u13-b9-q7",
      "type": "multiple-choice",
      "question": "What does it mean to 'debug' a program?",
      "options": ["To add bugs", "To identify and remove errors from computer hardware or software", "To sell it", "To use it outside"],
      "correctAnswer": "To identify and remove errors from computer hardware or software",
      "explanation": "Debugging is a core programming task.",
      "points": 1
    },
    {
      "id": "c2-u13-b9-q8",
      "type": "fill-blank",
      "question": "The ________ of the new device is very user-friendly.",
      "correctAnswer": "interface",
      "explanation": "Interface is the point of interaction between user and machine.",
      "points": 1
    },
    {
      "id": "c2-u13-b9-q9",
      "type": "key-word-transformation",
      "sentence": "He modified the software to suit his needs.",
      "keyWord": "CUSTOMIZED",
      "startOfAnswer": "He",
      "correctAnswer": "He customized the software to suit his needs.",
      "explanation": "To customize is to modify according to individual requirements.",
      "points": 1
    },
    {
      "id": "c2-u13-b9-q10",
      "type": "multiple-choice",
      "question": "What is 'latency' in networking?",
      "options": ["The speed of light", "The delay before a transfer of data begins following an instruction for its transfer", "The price of the internet", "The number of users"],
      "correctAnswer": "The delay before a transfer of data begins following an instruction for its transfer",
      "explanation": "Low latency is important for online gaming and real-time apps.",
      "points": 1
    }
  ]
};

export const C2_U13_BLOCK10: Exercise = {
  "id": "c2-u13-b10",
  "type": "vocabulary",
  "title": "Block 10: AI & Robotics Review",
  "explanation": "Final review of Unit 13 concepts.",
  "questions": [
    {
      "id": "c2-u13-b10-q1",
      "type": "multiple-choice",
      "question": "Which term describes a machine capable of carrying out a complex series of actions automatically, especially one programmable by a computer?",
      "options": ["Appliance", "Robot", "Tool", "Widget"],
      "correctAnswer": "Robot",
      "explanation": "Robots are central to automation.",
      "points": 1
    },
    {
      "id": "c2-u13-b10-q2",
      "type": "fill-blank",
      "question": "The ________ of AI has transformed the tech landscape.",
      "correctAnswer": "emergence",
      "explanation": "Emergence refers to the process of coming into being.",
      "points": 1
    },
    {
      "id": "c2-u13-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'ubiquitous' computing?",
      "options": ["Computing only in schools", "Computing that appears everywhere and anywhere", "Computing that is very expensive", "Computing for fish"],
      "correctAnswer": "Computing that appears everywhere and anywhere",
      "explanation": "Ubiquitous means present, appearing, or found everywhere.",
      "points": 1
    },
    {
      "id": "c2-u13-b10-q4",
      "type": "fill-blank",
      "question": "Ethical ________ are paramount when developing autonomous systems.",
      "correctAnswer": "considerations",
      "explanation": "Considerations are things that must be thought about.",
      "points": 1
    },
    {
      "id": "c2-u13-b10-q5",
      "type": "key-word-transformation",
      "sentence": "I'm sure he didn't do it on purpose.",
      "keyWord": "MUST",
      "startOfAnswer": "It",
      "correctAnswer": "It must have been an accident.",
      "explanation": "Deduction using a synonym.",
      "points": 1
    },
    {
      "id": "c2-u13-b10-q6",
      "type": "multiple-choice",
      "question": "What is 'big data'?",
      "options": ["Large physical books", "Extremely large data sets that may be analyzed computationally to reveal patterns, trends, and associations", "Data that is very heavy", "A big computer screen"],
      "correctAnswer": "Extremely large data sets that may be analyzed computationally to reveal patterns, trends, and associations",
      "explanation": "Big data is a foundation for modern AI.",
      "points": 1
    },
    {
      "id": "c2-u13-b10-q7",
      "type": "fill-blank",
      "question": "The robot's sensors provide ________ feedback.",
      "correctAnswer": "real-time",
      "explanation": "Real-time means provided immediately as something happens.",
      "points": 1
    },
    {
      "id": "c2-u13-b10-q8",
      "type": "key-word-transformation",
      "sentence": "It is certainly not going to rain.",
      "keyWord": "UNLIKELY",
      "startOfAnswer": "It is",
      "correctAnswer": "It is highly unlikely to rain.",
      "explanation": "'Highly unlikely' for strong negative probability.",
      "points": 1
    },
    {
      "id": "c2-u13-b10-q9",
      "type": "multiple-choice",
      "question": "What is 'open source' software?",
      "options": ["Software that is very expensive", "Software for which the original source code is made freely available and may be redistributed and modified", "Software that is broken", "Software only for scientists"],
      "correctAnswer": "Software for which the original source code is made freely available and may be redistributed and modified",
      "explanation": "Open source encourages collaboration.",
      "points": 1
    },
    {
      "id": "c2-u13-b10-q10",
      "type": "fill-blank",
      "question": "The ________ of the new algorithm is very high.",
      "correctAnswer": "efficiency",
      "explanation": "Efficiency is a measure of how well a system performs.",
      "points": 1
    }
  ]
};

export const C2_UNIT_13 = createC2Unit(
  'c2-u13',
  'The Future of AI & Robotics',
  [
    C2_U13_BLOCK1, C2_U13_BLOCK2, C2_U13_BLOCK3, C2_U13_BLOCK4, C2_U13_BLOCK5,
    C2_U13_BLOCK6, C2_U13_BLOCK7, C2_U13_BLOCK8, C2_U13_BLOCK9, C2_U13_BLOCK10
  ]
);
