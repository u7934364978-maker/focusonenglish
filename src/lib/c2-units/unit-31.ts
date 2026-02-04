
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U31_BLOCK1: Exercise = {
  "id": "c2-u31-b1",
  "type": "vocabulary",
  "title": "Block 1: Leadership Styles & Paradigms",
  "explanation": "Advanced vocabulary for describing different types of leadership (e.g., servant leadership, transformational, autocratic).",
  "questions": [
    {
      "id": "c2-u31-b1-q1",
      "type": "multiple-choice",
      "question": "Which of the following best describes transformational leadership?",
      "options": ["Leading through fear", "A leadership style that inspires and motivates followers to achieve extraordinary outcomes and develop their own leadership capacity", "Leading only when necessary", "Changing jobs frequently"],
      "correctAnswer": "A leadership style that inspires and motivates followers to achieve extraordinary outcomes and develop their own leadership capacity",
      "explanation": "Transformational leaders focus on vision and long-term change.",
      "points": 1
    },
    {
      "id": "c2-u31-b1-q2",
      "type": "fill-blank",
      "question": "________ (serve) leadership is a philosophy in which the main goal of the leader is to serve others.",
      "correctAnswer": "Servant",
      "explanation": "Servant leadership focuses on the growth and well-being of people and communities.",
      "points": 1
    },
    {
      "id": "c2-u31-b1-q3",
      "type": "multiple-choice",
      "question": "What does it mean to be an 'autocratic' leader?",
      "options": ["To drive a car well", "A leader who has absolute power and makes decisions without consulting others", "A leader who is very polite", "A leader who works in a factory"],
      "correctAnswer": "A leader who has absolute power and makes decisions without consulting others",
      "explanation": "Autocratic leadership is characterized by individual control over all decisions.",
      "points": 1
    },
    {
      "id": "c2-u31-b1-q4",
      "type": "fill-blank",
      "question": "The CEO's ________ (vision) leadership steered the company through the crisis.",
      "correctAnswer": "visionary",
      "explanation": "A visionary leader has clear, imaginative, and far-sighted ideas.",
      "points": 1
    },
    {
      "id": "c2-u31-b1-q5",
      "type": "multiple-choice",
      "question": "What is 'laissez-faire' leadership?",
      "options": ["A type of French food", "A policy or attitude of letting things take their own course, without interfering", "Leading with strict rules", "Leading only on weekends"],
      "correctAnswer": "A policy or attitude of letting things take their own course, without interfering",
      "explanation": "Laissez-faire leaders give followers freedom to make their own decisions.",
      "points": 1
    },
    {
      "id": "c2-u31-b1-q6",
      "type": "fill-blank",
      "question": "He is a ________ (charism) leader who attracts many followers.",
      "correctAnswer": "charismatic",
      "explanation": "Charismatic leaders have a compelling charm that inspires devotion.",
      "points": 1
    },
    {
      "id": "c2-u31-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'transactional leadership'?",
      "options": ["Leading through social media", "A leadership style that focuses on supervision, organization, and performance; leaders promote compliance through rewards and punishments", "Leading only in banks", "Trading leaders between companies"],
      "correctAnswer": "A leadership style that focuses on supervision, organization, and performance; leaders promote compliance through rewards and punishments",
      "explanation": "Transactional leadership is based on a system of exchange.",
      "points": 1
    },
    {
      "id": "c2-u31-b1-q8",
      "type": "fill-blank",
      "question": "The ________ (bureau) leader follows rules and procedures precisely.",
      "correctAnswer": "bureaucratic",
      "explanation": "Bureaucratic leadership relies on strict adherence to established protocols.",
      "points": 1
    },
    {
      "id": "c2-u31-b1-q9",
      "type": "multiple-choice",
      "question": "What is 'collaborative leadership'?",
      "options": ["Working alone", "A management practice in which members of a leadership team work together across sectors to make decisions and keep their organization thriving", "Leading through competition", "A religious ceremony"],
      "correctAnswer": "A management practice in which members of a leadership team work together across sectors to make decisions and keep their organization thriving",
      "explanation": "Collaborative leadership breaks down silos within an organization.",
      "points": 1
    },
    {
      "id": "c2-u31-b1-q10",
      "type": "fill-blank",
      "question": "She practiced ________ (participate) leadership, involving her team in every decision.",
      "correctAnswer": "participative",
      "explanation": "Also known as democratic leadership, where the leader shares decision-making with group members.",
      "points": 1
    }
  ]
};

export const C2_U31_BLOCK2: Exercise = {
  "id": "c2-u31-b2",
  "type": "grammar",
  "title": "Block 2: Advanced Reporting Structures",
  "explanation": "Nuanced ways of reporting speech, including verbs followed by 'to' infinitive, '-ing' form, or 'that' clauses with 'should' or subjunctive.",
  "questions": [
    {
      "id": "c2-u31-b2-q1",
      "startOfAnswer": "apologized",
      "type": "key-word-transformation",
      "question": "The manager apologized for being late. (FORMAL)\n\nThe manager __________ for being late.",
      "options": ["The manager said he was sorry.", "The manager apologized for being late.", "The manager said that he be sorry.", "The manager sorry he was."],
      "correctAnswer": "apologized",
      "explanation": "Utilizar 'apologized' muestra un mayor nivel de formalidad que 'said'.",
      "points": 1
    },
    {
      "id": "c2-u31-b2-q2",
      "type": "fill-blank",
      "question": "The board ________ (urge) that the CEO resign immediately.",
      "correctAnswer": "urged",
      "explanation": "Verbs of suggestion/urging can be followed by a 'that' clause with a subjunctive 'resign'.",
      "points": 1
    },
    {
      "id": "c2-u31-b2-q3",
      "type": "key-word-transformation",
      "question": "\ (DENIED)\n\nThe employee ________. __________",
      "sentence": "\"I didn't steal the money,\" said the employee.",
      "keyWord": "DENIED",
      "startOfAnswer": "The employee ________.",
      "correctAnswer": "denied stealing the money",
      "explanation": "'Deny' is followed by the -ing form.",
      "points": 1
    },
    {
      "id": "c2-u31-b2-q4",
      "type": "key-word-transformation",
      "question": "He suggested that we go. (SUGGEST)\n\nHe __________ that we go.",
      "sentence": "He suggested that we go.",
      "keyWord": "SUGGEST",
      "startOfAnswer": "He",
      "correctAnswer": "suggested",
      "explanation": "'Suggest' se sigue de 'that' + cláusula o -ing, pero no con 'to' infinitivo.",
      "points": 1
    },
    {
      "id": "c2-u31-b2-q5",
      "type": "fill-blank",
      "question": "The witnesses ________ (claim) to have seen the incident.",
      "correctAnswer": "claimed",
      "explanation": "'Claim' can be followed by a perfect infinitive to refer to a past action.",
      "points": 1
    },
    {
      "id": "c2-u31-b2-q6",
      "type": "key-word-transformation",
      "question": "\ (ENCOURAGED)\n\nMy friend ________ the job. __________",
      "sentence": "\"You should take the job,\" my friend said to me.",
      "keyWord": "ENCOURAGED",
      "startOfAnswer": "My friend ________ the job.",
      "correctAnswer": "encouraged me to take",
      "explanation": "'Encourage someone to do something'.",
      "points": 1
    },
    {
      "id": "c2-u31-b2-q7",
      "type": "multiple-choice",
      "question": "Which of the following words means to ask a question or express doubt about something?",
      "options": ["State", "Assert", "Query", "Maintain"],
      "correctAnswer": "Query",
      "explanation": "'Query' means to ask a question or express doubt about something.",
      "points": 1
    },
    {
      "id": "c2-u31-b2-q8",
      "type": "fill-blank",
      "question": "The company ________ (threaten) to sue the competitor.",
      "correctAnswer": "threatened",
      "explanation": "'Threaten' is followed by the 'to' infinitive.",
      "points": 1
    },
    {
      "id": "c2-u31-b2-q9",
      "type": "key-word-transformation",
      "question": "\ (WARNED)\n\nThe engineer ________ that button. __________",
      "sentence": "\"Don't touch that button!\" the engineer said to us.",
      "keyWord": "WARNED",
      "startOfAnswer": "The engineer ________ that button.",
      "correctAnswer": "warned us not to touch",
      "explanation": "'Warn someone not to do something'.",
      "points": 1
    },
    {
      "id": "c2-u31-b2-q10",
      "type": "key-word-transformation",
      "question": "I recommend that you stay. (RECOMMEND)\n\nI __________ you stay.",
      "sentence": "I recommend that you stay.",
      "keyWord": "RECOMMEND",
      "startOfAnswer": "I",
      "correctAnswer": "recommend that",
      "explanation": "'Recommend' se sigue de 'that' + cláusula o -ing.",
      "points": 1
    }
  ]
};

export const C2_U31_BLOCK3: Exercise = {
  "id": "c2-u31-b3",
  "type": "vocabulary",
  "title": "Block 3: Ethics & Accountability",
  "explanation": "Terminology for moral principles and responsibility in leadership.",
  "questions": [
    {
      "id": "c2-u31-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'integrity'?",
      "options": ["Being very smart", "The quality of being honest and having strong moral principles", "Working fast", "Being a famous leader"],
      "correctAnswer": "The quality of being honest and having strong moral principles",
      "explanation": "Integrity is a core value in ethical leadership.",
      "points": 1
    },
    {
      "id": "c2-u31-b3-q2",
      "type": "fill-blank",
      "question": "Leaders must be held ________ (account) for their actions.",
      "correctAnswer": "accountable",
      "explanation": "Accountability means being required or expected to justify actions or decisions.",
      "points": 1
    },
    {
      "id": "c2-u31-b3-q3",
      "type": "multiple-choice",
      "question": "What is 'corporate governance'?",
      "options": ["A type of government", "The system of rules, practices, and processes by which a firm is directed and controlled", "Working in a large office", "A religious ceremony"],
      "correctAnswer": "The system of rules, practices, and processes by which a firm is directed and controlled",
      "explanation": "Good governance ensures ethics and transparency.",
      "points": 1
    },
    {
      "id": "c2-u31-b3-q4",
      "type": "fill-blank",
      "question": "The whistle-blower exposed the ________ (corrupt) within the organization.",
      "correctAnswer": "corruption",
      "explanation": "Corruption is dishonest or fraudulent conduct by those in power.",
      "points": 1
    },
    {
      "id": "c2-u31-b3-q5",
      "type": "multiple-choice",
      "question": "What is a 'conflict of interest'?",
      "options": ["A disagreement with a boss", "A situation in which a person is in a position to derive personal benefit from actions or decisions made in their official capacity", "Working for two different companies", "A type of legal contract"],
      "correctAnswer": "A situation in which a person is in a position to derive personal benefit from actions or decisions made in their official capacity",
      "explanation": "Conflicts of interest can compromise ethical leadership.",
      "points": 1
    },
    {
      "id": "c2-u31-b3-q6",
      "type": "fill-blank",
      "question": "She is known for her ________ (unshakable) commitment to ethics.",
      "correctAnswer": "unshakable",
      "explanation": "Unshakable means firm and unwavering.",
      "points": 1
    },
    {
      "id": "c2-u31-b3-q7",
      "type": "multiple-choice",
      "question": "What does it mean to be 'scrupulous'?",
      "options": ["To be very messy", "Diligent, thorough, and extremely attentive to details; having moral integrity", "To be very old", "To be a scientist"],
      "correctAnswer": "Diligent, thorough, and extremely attentive to details; having moral integrity",
      "explanation": "Scrupulous leaders are careful to do what is right.",
      "points": 1
    },
    {
      "id": "c2-u31-b3-q8",
      "type": "fill-blank",
      "question": "The company faced a ________ (moral) dilemma.",
      "correctAnswer": "moral",
      "explanation": "A moral dilemma is a situation in which a difficult choice has to be made between two courses of action.",
      "points": 1
    },
    {
      "id": "c2-u31-b3-q9",
      "type": "multiple-choice",
      "question": "What is 'transparency' in business?",
      "options": ["Windows in the office", "The quality of being open, honest, and straightforward about company operations", "Working in a factory", "A type of insurance"],
      "correctAnswer": "The quality of being open, honest, and straightforward about company operations",
      "explanation": "Transparency builds trust with stakeholders.",
      "points": 1
    },
    {
      "id": "c2-u31-b3-q10",
      "type": "fill-blank",
      "question": "The board decided to ________ (sanction) the manager for unethical behavior.",
      "correctAnswer": "sanction",
      "explanation": "To sanction can mean to give permission or, in this context, to impose a penalty.",
      "points": 1
    }
  ]
};

export const C2_U31_BLOCK4: Exercise = {
  "id": "c2-u31-b4",
  "type": "grammar",
  "title": "Block 4: Passive Reporting Verbs",
  "explanation": "Using structures like 'It is said that...', 'He is believed to be...', and 'There are thought to be...'.",
  "questions": [
    {
      "id": "c2-u31-b4-q1",
      "type": "multiple-choice",
      "question": "Which sentence is correctly transformed into a personal passive?",
      "options": ["People say he is a genius. -> It is said that he is a genius.", "People say he is a genius. -> He is said to be a genius.", "Both A and B", "Neither"],
      "correctAnswer": "Both A and B",
      "explanation": "Both 'It is said that' (impersonal) and 'He is said to be' (personal) are correct passive reporting structures.",
      "points": 1
    },
    {
      "id": "c2-u31-b4-q2",
      "type": "fill-blank",
      "question": "The company is ________ (think) to be facing financial difficulties.",
      "correctAnswer": "thought",
      "explanation": "Passive reporting verb + to-infinitive.",
      "points": 1
    },
    {
      "id": "c2-u31-b4-q3",
      "type": "key-word-transformation",
      "question": "Experts believe that the economy will improve. (BELIEVED)\n\nThe economy _________.\n\nStart of answer __________",
      "sentence": "Experts believe that the economy will improve.",
      "keyWord": "BELIEVED",
      "startOfAnswer": "The economy is believed to",
      "correctAnswer": "is believed to be going to",
      "explanation": "Or 'is believed to improve'. Converting an active belief into a personal passive.",
      "points": 1
    },
    {
      "id": "c2-u31-b4-q4",
      "startOfAnswer": "typically use the reporting structure.",
      "keyWord": "REPORTING",
      "sentence": "Verbs like 'want', 'know', and 'say' can easily use the reporting structure.",
      "type": "key-word-transformation",
      "question": "Verbs like 'want', 'know', and 'say' can easily use the reporting structure. 'Want' does not. (REPORTING)\n\nThe verb 'want' does not typically __________.",
      "options": ["Expect", "Know", "Say", "Want"],
      "correctAnswer": "Want",
      "explanation": "Verbs like 'want' or 'like' do not normally use this reporting structure.",
      "points": 1
    },
    {
      "id": "c2-u31-b4-q5",
      "type": "fill-blank",
      "question": "There are ________ (allege) to have been several cases of fraud.",
      "correctAnswer": "alleged",
      "explanation": "'There are alleged to have been' is a formal way to report unproven claims about multiple things.",
      "points": 1
    },
    {
      "id": "c2-u31-b4-q6",
      "type": "key-word-transformation",
      "question": "People reported that the ship was sinking. (REPORTED)\n\nThe ship ________ sinking. __________",
      "sentence": "People reported that the ship was sinking.",
      "keyWord": "REPORTED",
      "startOfAnswer": "The ship ________ sinking.",
      "correctAnswer": "was reported to be",
      "explanation": "Past passive reporting.",
      "points": 1
    },
    {
      "id": "c2-u31-b4-q7",
      "startOfAnswer": "was completed by the suspect.",
      "keyWord": "COMPLETED",
      "sentence": "People understand that the suspect left.",
      "type": "key-word-transformation",
      "question": "People understand that the suspect left. (COMPLETED)\n\nThe action of the suspect _________. __________",
      "options": ["The suspect understands he left.", "People understand that the suspect left.", "The suspect is going to leave.", "The suspect didn't leave."],
      "correctAnswer": "People understand that the suspect left.",
      "explanation": "Passive reporting of a completed action using the perfect infinitive.",
      "points": 1
    },
    {
      "id": "c2-u31-b4-q8",
      "type": "fill-blank",
      "question": "It is ________ (understand) that the two companies are in merger talks.",
      "correctAnswer": "understood",
      "explanation": "Impersonal passive reporting.",
      "points": 1
    },
    {
      "id": "c2-u31-b4-q9",
      "type": "key-word-transformation",
      "question": "Journalists expect that the president will resign. (EXPECTED)\n\nThe president ________ resign. __________",
      "sentence": "Journalists expect that the president will resign.",
      "keyWord": "EXPECTED",
      "startOfAnswer": "The president ________ resign.",
      "correctAnswer": "is expected to",
      "explanation": "Personal passive with future expectation.",
      "points": 1
    },
    {
      "id": "c2-u31-b4-q10",
      "startOfAnswer": "is said to have gone.",
      "keyWord": "REPORTING",
      "sentence": "He was reported to have gone.",
      "type": "key-word-transformation",
      "question": "He said to have gone. (REPORTING)\n\nIt is said that he ________. __________",
      "options": ["He is said to go.", "He is said to have gone.", "He was said to go.", "He said to have gone."],
      "correctAnswer": "He is said to have gone.",
      "explanation": "Present passive reporting verb + perfect infinitive.",
      "points": 1
    }
  ]
};

export const C2_U31_BLOCK5: Exercise = {
  "id": "c2-u31-b5",
  "type": "vocabulary",
  "title": "Block 5: Organizational Culture & Soft Skills",
  "explanation": "Terms related to the environment created by leaders and the skills they need.",
  "questions": [
    {
      "id": "c2-u31-b5-q1",
      "type": "multiple-choice",
      "question": "What is 'emotional intelligence' (EQ)?",
      "options": ["Being very smart", "The capacity to be aware of, control, and express one's emotions, and to handle interpersonal relationships judiciously and empathetically", "A type of IQ test", "Being a famous actor"],
      "correctAnswer": "The capacity to be aware of, control, and express one's emotions, and to handle interpersonal relationships judiciously and empathetically",
      "explanation": "EQ is vital for modern leadership.",
      "points": 1
    },
    {
      "id": "c2-u31-b5-q2",
      "type": "fill-blank",
      "question": "A ________ (toxic) workplace culture can lead to high employee turnover.",
      "correctAnswer": "toxic",
      "explanation": "Toxic culture refers to an environment plagued by conflict and negativity.",
      "points": 1
    },
    {
      "id": "c2-u31-b5-q3",
      "type": "multiple-choice",
      "question": "What is 'empowerment'?",
      "options": ["Buying power", "The process of becoming stronger and more confident, especially in controlling one's life and claiming one's rights", "Working in a power station", "A religious ceremony"],
      "correctAnswer": "The process of becoming stronger and more confident, especially in controlling one's life and claiming one's rights",
      "explanation": "Leaders empower their teams by giving them autonomy.",
      "points": 1
    },
    {
      "id": "c2-u31-b5-q4",
      "type": "fill-blank",
      "question": "The manager's ________ (empathy) approach helped resolve the dispute.",
      "correctAnswer": "empathetic",
      "explanation": "Empathetic means showing an ability to understand and share the feelings of another.",
      "points": 1
    },
    {
      "id": "c2-u31-b5-q5",
      "startOfAnswer": "Resilience is the capacity",
      "type": "key-word-transformation",
      "question": "What is 'resilience'? (DEFINITION)\n\nResilience is the capacity __________.",
      "options": ["A type of building material", "The capacity to recover quickly from difficulties; toughness", "Living in a large house", "A government secret"],
      "correctAnswer": "to recover quickly from difficulties; toughness",
      "explanation": "Resilient leaders handle setbacks effectively.",
      "points": 1
    },
    {
      "id": "c2-u31-b5-q6",
      "type": "fill-blank",
      "question": "We need to foster a culture of ________ (innovate).",
      "correctAnswer": "innovation",
      "explanation": "Innovation is the action or process of innovating.",
      "points": 1
    },
    {
      "id": "c2-u31-b5-q7",
      "startOfAnswer": "Mentorship is the guidance",
      "type": "key-word-transformation",
      "question": "What is 'mentorship'? (DEFINITION)\n\nMentorship is the guidance __________.",
      "options": ["A type of ship", "The guidance provided by a mentor, especially an experienced person in a company or educational institution", "Working in a mental hospital", "A religious ceremony"],
      "correctAnswer": "provided by a mentor, especially an experienced person in a company or educational institution",
      "explanation": "Mentorship is key for professional development.",
      "points": 1
    },
    {
      "id": "c2-u31-b5-q8",
      "type": "fill-blank",
      "question": "A ________ (collaborate) environment encourages team success.",
      "correctAnswer": "collaborative",
      "explanation": "Collaborative means produced by or involving two or more parties working together.",
      "points": 1
    },
    {
      "id": "c2-u31-b5-q9",
      "startOfAnswer": "Strategic thinking is the ability",
      "type": "key-word-transformation",
      "question": "What is 'strategic thinking'? (DEFINITION)\n\nStrategic thinking is the ability __________.",
      "options": ["Thinking only about today", "The ability to plan for the future with imagination and wisdom", "Thinking about military strategy", "A type of game"],
      "correctAnswer": "to plan for the future with imagination and wisdom",
      "explanation": "Strategic thinking is a hallmark of high-level leadership.",
      "points": 1
    },
    {
      "id": "c2-u31-b5-q10",
      "type": "fill-blank",
      "question": "She has excellent ________ (interperson) skills.",
      "correctAnswer": "interpersonal",
      "explanation": "Interpersonal skills are the behaviors and tactics a person uses to interact with others effectively.",
      "points": 1
    }
  ]
};

export const C2_U31_BLOCK6: Exercise = {
  "id": "c2-u31-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Mixed Reporting Challenges",
  "explanation": "Synthesizing reporting verbs and passive structures in a professional context.",
  "questions": [
    {
      "id": "c2-u31-b6-q1",
      "type": "key-word-transformation",
      "question": "\ (UNDERTOOK)\n\nThe manager ________ the report by Friday. __________",
      "sentence": "\"I will definitely finish the report by Friday,\" the manager said.",
      "keyWord": "UNDERTOOK",
      "startOfAnswer": "The manager ________ the report by Friday.",
      "correctAnswer": "undertook to finish",
      "explanation": "'Undertake' means to promise or agree to do something.",
      "points": 1
    },
    {
      "id": "c2-u31-b6-q2",
      "type": "key-word-transformation",
      "question": "People believe that the CEO is resigning. (BELIEVED)\n\nThe CEO ________. __________",
      "sentence": "People believe that the CEO is resigning.",
      "keyWord": "BELIEVED",
      "startOfAnswer": "The CEO ________.",
      "correctAnswer": "is believed to be resigning",
      "explanation": "Personal passive with continuous infinitive.",
      "points": 1
    },
    {
      "id": "c2-u31-b6-q3",
      "type": "key-word-transformation",
      "question": "\ (INSISTED)\n\nThey ________ for dinner. __________",
      "sentence": "\"You really must stay for dinner,\" they said to him.",
      "keyWord": "INSISTED",
      "startOfAnswer": "They ________ for dinner.",
      "correctAnswer": "insisted on him staying",
      "explanation": "Or 'insisted that he stay'. Reporting a persistent request.",
      "points": 1
    },
    {
      "id": "c2-u31-b6-q4",
      "type": "key-word-transformation",
      "question": "It is thought that the company lost millions last year. (HAVE)\n\nThe company is thought ________ millions last year. __________",
      "sentence": "It is thought that the company lost millions last year.",
      "keyWord": "HAVE",
      "startOfAnswer": "The company is thought ________ millions last year.",
      "correctAnswer": "to have lost",
      "explanation": "Converting impersonal passive to personal passive with perfect infinitive.",
      "points": 1
    },
    {
      "id": "c2-u31-b6-q5",
      "type": "key-word-transformation",
      "question": "\ (APOLOGIZED)\n\nHe ________ the meeting. __________",
      "sentence": "\"I'm sorry I missed the meeting,\" he said.",
      "keyWord": "APOLOGIZED",
      "startOfAnswer": "He ________ the meeting.",
      "correctAnswer": "apologized for missing",
      "explanation": "Reporting an apology.",
      "points": 1
    },
    {
      "id": "c2-u31-b6-q6",
      "type": "key-word-transformation",
      "question": "They say that the new law is very effective. (SAID)\n\nThe new law ________ very effective. __________",
      "sentence": "They say that the new law is very effective.",
      "keyWord": "SAID",
      "startOfAnswer": "The new law ________ very effective.",
      "correctAnswer": "is said to be",
      "explanation": "Standard personal passive.",
      "points": 1
    },
    {
      "id": "c2-u31-b6-q7",
      "type": "key-word-transformation",
      "question": "The board suggested that he should take a sabbatical. (TAKING)\n\nThe board __________ a sabbatical.",
      "sentence": "The board suggested that he should take a sabbatical.",
      "keyWord": "TAKING",
      "startOfAnswer": "The board __________ a sabbatical.",
      "correctAnswer": "suggested his taking",
      "explanation": "Or 'suggested taking'. Reporting a suggestion with an -ing structure.",
      "points": 1
    },
    {
      "id": "c2-u31-b6-q8",
      "type": "key-word-transformation",
      "question": "Experts estimate that the project will take two years. (ESTIMATED)\n\nThe project ________ two years. __________",
      "sentence": "Experts estimate that the project will take two years.",
      "keyWord": "ESTIMATED",
      "startOfAnswer": "The project ________ two years.",
      "correctAnswer": "is estimated to take",
      "explanation": "Personal passive with future reference.",
      "points": 1
    },
    {
      "id": "c2-u31-b6-q9",
      "type": "key-word-transformation",
      "question": "\ (REMINDED)\n\nShe ________ the door. __________",
      "sentence": "\"Don't forget to lock the door,\" she said to me.",
      "keyWord": "REMINDED",
      "startOfAnswer": "She ________ the door.",
      "correctAnswer": "reminded me to lock",
      "explanation": "Reporting a reminder.",
      "points": 1
    },
    {
      "id": "c2-u31-b6-q10",
      "type": "key-word-transformation",
      "question": "People think that the ruins are 2000 years old. (THOUGHT)\n\nThe ruins ________ 2000 years old. __________",
      "sentence": "People think that the ruins are 2000 years old.",
      "keyWord": "THOUGHT",
      "startOfAnswer": "The ruins ________ 2000 years old.",
      "correctAnswer": "are thought to be",
      "explanation": "Personal passive reporting a current state.",
      "points": 1
    }
  ]};

export const C2_U31_BLOCK7: Exercise = {
  "id": "c2-u31-b7",
  "type": "vocabulary",
  "title": "Block 7: Leadership Phrasal Verbs & Idioms",
  "explanation": "Common expressions for leading and managing.",
  "questions": [
    {
      "id": "c2-u31-b7-q1",
      "type": "multiple-choice",
      "question": "What does the phrase \"to call the shots\" mean in a business context?",
      "options": ["To play a sport", "To be the person in charge and make the important decisions", "To fire someone", "To take a photograph"],
      "correctAnswer": "To be the person in charge and make the important decisions",
      "explanation": "Example: 'The CEO calls the shots in this company'.",
      "points": 1
    },
    {
      "id": "c2-u31-b7-q2",
      "type": "fill-blank",
      "question": "He had to ________ (take) over the department after the manager left.",
      "correctAnswer": "take",
      "explanation": "'Take over' means to assume control of something.",
      "points": 1
    },
    {
      "id": "c2-u31-b7-q3",
      "type": "multiple-choice",
      "question": "What does it mean to 'lead from the front'?",
      "options": ["To walk at the front of a line", "To lead by example and take an active role in the work being done", "To be the first person in a race", "To lead only when things are going well"],
      "correctAnswer": "To lead by example and take an active role in the work being done",
      "explanation": "This idiom emphasizes active, hands-on leadership.",
      "points": 1
    },
    {
      "id": "c2-u31-b7-q4",
      "type": "fill-blank",
      "question": "She managed to ________ (bring) about significant changes in the company culture.",
      "correctAnswer": "bring",
      "explanation": "'Bring about' means to cause something to happen.",
      "points": 1
    },
    {
      "id": "c2-u31-b7-q5",
      "type": "multiple-choice",
      "question": "What does 'to be at the helm' mean?",
      "options": ["To be on a ship", "To be in charge of an organization", "To be at the bottom of the hierarchy", "To be a scientist"],
      "correctAnswer": "To be in charge of an organization",
      "explanation": "A nautical metaphor for leadership.",
      "points": 1
    },
    {
      "id": "c2-u31-b7-q6",
      "type": "fill-blank",
      "question": "We need to ________ (iron) out the details of the agreement.",
      "correctAnswer": "iron",
      "explanation": "'Iron out' means to resolve minor problems or details.",
      "points": 1
    },
    {
      "id": "c2-u31-b7-q7",
      "type": "multiple-choice",
      "question": "What does it mean to 'pass the buck'?",
      "options": ["To give someone money", "To shift responsibility to someone else", "To win a game", "To be a leader"],
      "correctAnswer": "To shift responsibility to someone else",
      "explanation": "The opposite of taking accountability.",
      "points": 1
    },
    {
      "id": "c2-u31-b7-q8",
      "startOfAnswer": "step down",
      "type": "key-word-transformation",
      "question": "The manager had to step down after the scandal. (STEP)\n\nHe had __________.",
      "correctAnswer": "step down",
      "explanation": "'Step down' means to resign from a high position.",
      "points": 1
    },
    {
      "id": "c2-u31-b7-q9",
      "type": "multiple-choice",
      "question": "What is 'climbing the corporate ladder'?",
      "options": ["Working in construction", "The process of advancing through the ranks of a company", "Fixing things in an office", "A type of fitness exercise"],
      "correctAnswer": "The process of advancing through the ranks of a company",
      "explanation": "A common metaphor for career advancement.",
      "points": 1
    },
    {
      "id": "c2-u31-b7-q10",
      "startOfAnswer": "strike out",
      "type": "key-word-transformation",
      "question": "He decided to strike out on his own and start a business. (STRIKE)\n\nHe had __________.",
      "correctAnswer": "strike out",
      "explanation": "'Strike out' here means to start doing something new and independent.",
      "points": 1
    }
  ]
};

export const C2_U31_BLOCK8: Exercise = {
  "id": "c2-u31-b8",
  "type": "reading",
  "title": "Block 8: The Ethics of AI in Leadership",
  "explanation": "Analyze a text about how artificial intelligence is changing decision-making and leadership responsibility.",
  "questions": [
    {
      "id": "c2-u31-b8-q1",
      "type": "multiple-choice",
      "question": "What is 'algorithmic bias'?",
      "options": ["A type of mathematical formula", "Systematic and repeatable errors in a computer system that create unfair outcomes", "A fast computer", "A government secret"],
      "correctAnswer": "Systematic and repeatable errors in a computer system that create unfair outcomes",
      "explanation": "Algorithmic bias is a major ethical concern in AI.",
      "points": 1
    },
    {
      "id": "c2-u31-b8-q2",
      "startOfAnswer": "human",
      "type": "key-word-transformation",
      "question": "Leaders must ensure human oversight of AI systems. (HUMAN)\n\nThey must ensure __________.",
      "correctAnswer": "human",
      "explanation": "Human oversight is necessary for ethical AI deployment.",
      "points": 1
    },
    {
      "id": "c2-u31-b8-q3",
      "type": "multiple-choice",
      "question": "What is 'explainable AI' (XAI)?",
      "options": ["AI that can talk", "Artificial intelligence that is developed so that the results of the solution can be understood by humans", "AI that is very simple", "A type of computer screen"],
      "correctAnswer": "Artificial intelligence that is developed so that the results of the solution can be understood by humans",
      "explanation": "XAI is crucial for trust and accountability.",
      "points": 1
    },
    {
      "id": "c2-u31-b8-q4",
      "startOfAnswer": "ethical",
      "type": "key-word-transformation",
      "question": "The use of AI raises ethic concerns about privacy. (ETHIC)\n\nThe use of AI raises __________ concerns about privacy.",
      "correctAnswer": "ethical",
      "explanation": "Ethics is a central theme of this block.",
      "points": 1
    },
    {
      "id": "c2-u31-b8-q5",
      "type": "multiple-choice",
      "question": "What is 'data sovereignty'?",
      "options": ["King of the data", "The idea that data are subject to the laws of the country in which they are located", "A type of database", "A government secret"],
      "correctAnswer": "The idea that data are subject to the laws of the country in which they are located",
      "explanation": "Data sovereignty is a key issue in international business.",
      "points": 1
    },
    {
      "id": "c2-u31-b8-q6",
      "startOfAnswer": "automated",
      "type": "key-word-transformation",
      "question": "We must avoid automated decision-making without review. (AUTOMATE)\n\nWe must avoid __________ decision-making without review.",
      "correctAnswer": "automated",
      "explanation": "Automated means operated by largely automatic equipment.",
      "points": 1
    },
    {
      "id": "c2-u31-b8-q7",
      "type": "multiple-choice",
      "question": "What is a 'black box' algorithm?",
      "options": ["A box painted black", "An algorithm where the internal processes are not visible or understandable to the user", "A very secure computer", "A type of flight recorder"],
      "correctAnswer": "An algorithm where the internal processes are not visible or understandable to the user",
      "explanation": "Black box algorithms present challenges for accountability.",
      "points": 1
    },
    {
      "id": "c2-u31-b8-q8",
      "type": "fill-blank",
      "question": "AI can help leaders with ________ (predict) analytics.",
      "correctAnswer": "predictive",
      "explanation": "Predictive analytics use data to predict future trends.",
      "points": 1
    },
    {
      "id": "c2-u31-b8-q9",
      "type": "multiple-choice",
      "question": "What is 'digital ethics'?",
      "options": ["Counting with fingers", "The study of the moral and ethical consequences of digital technology", "A type of code", "A religious ceremony"],
      "correctAnswer": "The study of the moral and ethical consequences of digital technology",
      "explanation": "Digital ethics is an emerging field of study.",
      "points": 1
    },
    {
      "id": "c2-u31-b8-q10",
      "type": "fill-blank",
      "question": "The board discussed the ________ (implicate) of AI adoption.",
      "correctAnswer": "implications",
      "explanation": "Implications are the conclusion that can be drawn from something although it is not explicitly stated.",
      "points": 1
    }
  ]
};

export const C2_U31_BLOCK9: Exercise = {
  "id": "c2-u31-b9",
  "type": "vocabulary",
  "title": "Block 9: Leadership & Ethics Synthesis",
  "explanation": "Review of the unit's key vocabulary.",
  "questions": [
    {
      "id": "c2-u31-b9-q1",
      "type": "multiple-choice",
      "question": "What is 'transformational leadership'?",
      "options": ["Inspiring motivation", "Fear-based leading", "Job changing", "Quiet leading"],
      "correctAnswer": "Inspiring motivation",
      "explanation": "Core concept from Block 1.",
      "points": 1
    },
    {
      "id": "c2-u31-b9-q2",
      "type": "fill-blank",
      "question": "Being ________ (account) for decisions.",
      "correctAnswer": "accountable",
      "explanation": "Core ethics term.",
      "points": 1
    },
    {
      "id": "c2-u31-b9-q3",
      "type": "multiple-choice",
      "question": "What is 'integrity'?",
      "options": ["Honesty", "Speed", "Wealth", "Intelligence"],
      "correctAnswer": "Honesty",
      "explanation": "Core ethics term.",
      "points": 1
    },
    {
      "id": "c2-u31-b9-q4",
      "type": "fill-blank",
      "question": "To have control over decisions is to ________ (call) the shots.",
      "correctAnswer": "call",
      "explanation": "Leadership idiom.",
      "points": 1
    },
    {
      "id": "c2-u31-b9-q5",
      "type": "multiple-choice",
      "question": "What is 'resilience'?",
      "options": ["Bouncing back", "Being hard", "Being rich", "Being old"],
      "correctAnswer": "Bouncing back",
      "explanation": "Soft skill term.",
      "points": 1
    },
    {
      "id": "c2-u31-b9-q6",
      "type": "fill-blank",
      "question": "A workplace can be described as having a ________ (toxic) culture.",
      "correctAnswer": "toxic",
      "explanation": "Culture term.",
      "points": 1
    },
    {
      "id": "c2-u31-b9-q7",
      "type": "multiple-choice",
      "question": "What is 'mentorship'?",
      "options": ["Guidance", "Ownership", "Leadership", "Friendship"],
      "correctAnswer": "Guidance",
      "explanation": "Development term.",
      "points": 1
    },
    {
      "id": "c2-u31-b9-q8",
      "type": "fill-blank",
      "question": "To lead from the ________.",
      "correctAnswer": "front",
      "explanation": "Leadership idiom.",
      "points": 1
    },
    {
      "id": "c2-u31-b9-q9",
      "type": "fill-blank",
      "question": "What does strategic thinking involve? (PLANNING)\n\nIt involves ________ future action.",
      "options": ["Future planning", "Fast thinking", "Deep thinking", "Calculating"],
      "correctAnswer": "Future planning",
      "explanation": "Hallmark of leadership.",
      "points": 1
    },
    {
      "id": "c2-u31-b9-q10",
      "type": "fill-blank",
      "question": "Leaders must avoid a conflict of ________.",
      "correctAnswer": "interest",
      "explanation": "Core ethics term.",
      "points": 1
    }
  ]
};

export const C2_U31_BLOCK10: Exercise = {
  "id": "c2-u31-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 31 Final Review",
  "explanation": "Final wrap-up of reporting structures and leadership terminology.",
  "questions": [
    {
      "id": "c2-u31-b10-q1",
      "type": "key-word-transformation",
      "question": "He did not admit to committing theft. (DENIED)\n\nHe __________ that he stole.",
      "options": ["He denied to steal.", "He denied stealing.", "He denied of stealing.", "He denied that he stealing."],
      "correctAnswer": "He denied stealing.",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u31-b10-q2",
      "type": "fill-blank",
      "question": "He is said ________ (be) the best leader.",
      "correctAnswer": "to be",
      "explanation": "Personal passive review.",
      "points": 1
    },
    {
      "id": "c2-u31-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'laissez-faire'?",
      "options": ["Non-interfering", "Strict", "Group-based", "Fear-based"],
      "correctAnswer": "Non-interfering",
      "explanation": "Leadership paradigm review.",
      "points": 1
    },
    {
      "id": "c2-u31-b10-q4",
      "type": "fill-blank",
      "question": "The whistle-blower exposed ________ (corrupt).",
      "correctAnswer": "corruption",
      "explanation": "Ethics review.",
      "points": 1
    },
    {
      "id": "c2-u31-b10-q5",
      "type": "key-word-transformation",
      "question": "\ (OFFERED)\n\nShe ________ help me. __________",
      "sentence": "\"I'll help you,\" she said.",
      "keyWord": "OFFERED",
      "startOfAnswer": "She ________ help me.",
      "correctAnswer": "offered to",
      "explanation": "Reporting review.",
      "points": 1
    },
    {
      "id": "c2-u31-b10-q6",
      "type": "multiple-choice",
      "question": "Which of the following skills is most important for maintaining healthy interpersonal relationships and achieving personal success?",
      "options": ["Managing emotions", "High IQ", "Being sensitive", "Being sad"],
      "correctAnswer": "Managing emotions",
      "explanation": "Soft skill review.",
      "points": 1
    },
    {
      "id": "c2-u31-b10-q7",
      "type": "fill-blank",
      "question": "He stepped ________ after the crisis.",
      "correctAnswer": "down",
      "explanation": "Phrasal verb review.",
      "points": 1
    },
    {
      "id": "c2-u31-b10-q8",
      "type": "key-word-transformation",
      "question": "People report that he is hiding. (REPORTED)\n\nHe is __________ hiding.",
      "sentence": "People report that he is hiding.",
      "keyWord": "REPORTED",
      "startOfAnswer": "He is reported to be",
      "correctAnswer": "reported to be",
      "explanation": "Passive reporting review.",
      "points": 1
    },
    {
      "id": "c2-u31-b10-q9",
      "type": "key-word-transformation",
      "question": "Corporate governance refers to the systems and processes by which companies are directed and controlled. (MANAGEMENT)\n\nIt involves the __________ of the company.",
      "options": ["Management rules", "Government jobs", "Stock trading", "Business laws"],
      "correctAnswer": "management rules",
      "explanation": "Las reglas de gestión se refieren a cómo se dirige y controla una empresa, por lo que se relacionan con la gobernanza corporativa.",
      "points": 1
    },
    {
      "id": "c2-u31-b10-q10",
      "startOfAnswer": "iron",
      "type": "fill-blank",
      "question": "In resolving discrepancies, it's essential to __________ (IRON) out the problems.",
      "correctAnswer": "iron",
      "explanation": "Idiom review.",
      "points": 1
    }
  ]
};

export const C2_UNIT_31 = createC2Unit(
  'c2-u31',
  'Leadership Paradigms & Ethics',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U31_BLOCK1, C2_U31_BLOCK2, C2_U31_BLOCK3, C2_U31_BLOCK4, C2_U31_BLOCK5,
    C2_U31_BLOCK6, C2_U31_BLOCK7, C2_U31_BLOCK8, C2_U31_BLOCK9, C2_U31_BLOCK10
  ]
);
