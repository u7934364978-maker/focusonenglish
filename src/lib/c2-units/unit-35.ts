
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U35_BLOCK1: Exercise = {
  "id": "c2-u35-b1",
  "type": "vocabulary",
  "title": "Block 1: Personal Finance & Investment",
  "explanation": "Advanced terms for managing wealth and understanding financial markets.",
  "questions": [
    {
      "id": "c2-u35-b1-q1",
      "type": "multiple-choice",
      "question": "What is the term used in finance to refer to a useful or valuable thing or person?",
      "options": ["Something you owe", "A useful or valuable thing or person", "A type of tax", "A bank manager"],
      "correctAnswer": "A useful or valuable thing or person",
      "explanation": "In finance, an asset is a resource with economic value.",
      "points": 1
    },
    {
      "id": "c2-u35-b1-q2",
      "type": "fill-blank",
      "question": "A ________ (liabil) is something a person or company owes.",
      "correctAnswer": "liability",
      "explanation": "Liabilities are the opposite of assets.",
      "points": 1
    },
    {
      "id": "c2-u35-b1-q3",
      "type": "multiple-choice",
      "question": "What is 'compound interest'?",
      "options": ["Interest paid only on the principal", "Interest calculated on the principal and also on the accumulated interest of previous periods", "A type of mortgage", "A religious ceremony"],
      "correctAnswer": "Interest calculated on the principal and also on the accumulated interest of previous periods",
      "explanation": "Compound interest allows wealth to grow exponentially over time.",
      "points": 1
    },
    {
      "id": "c2-u35-b1-q4",
      "type": "fill-blank",
      "question": "We must ________ (diverse) our investment portfolio.",
      "correctAnswer": "diversify",
      "explanation": "Diversification reduces risk by spreading investments across different assets.",
      "points": 1
    },
    {
      "id": "c2-u35-b1-q5",
      "type": "multiple-choice",
      "question": "What is 'liquidity' in finance?",
      "options": ["A type of drink", "The ease with which an asset can be converted into ready cash without affecting its market price", "A measure of rain", "Being very wealthy"],
      "correctAnswer": "The ease with which an asset can be converted into ready cash without affecting its market price",
      "explanation": "Cash is the most liquid asset.",
      "points": 1
    },
    {
      "id": "c2-u35-b1-q6",
      "type": "fill-blank",
      "question": "The ________ (inflation) rate is rising.",
      "correctAnswer": "inflation",
      "explanation": "Inflation is the rate at which the general level of prices for goods and services is rising.",
      "points": 1
    },
    {
      "id": "c2-u35-b1-q7",
      "type": "multiple-choice",
      "question": "What is a 'bear market'?",
      "options": ["A market where bears are sold", "A market in which prices are falling, encouraging selling", "A very strong market", "A type of forest"],
      "correctAnswer": "A market in which prices are falling, encouraging selling",
      "explanation": "The opposite is a 'bull market'.",
      "points": 1
    },
    {
      "id": "c2-u35-b1-q8",
      "type": "fill-blank",
      "question": "Her net ________ (worth) is over a million.",
      "correctAnswer": "worth",
      "explanation": "Net worth is the value of all assets minus all liabilities.",
      "points": 1
    },
    {
      "id": "c2-u35-b1-q9",
      "type": "multiple-choice",
      "question": "What is 'capital gains' tax?",
      "options": ["A tax on your salary", "A tax on the profit from the sale of property or an investment", "A tax on capital cities", "A type of sales tax"],
      "correctAnswer": "A tax on the profit from the sale of property or an investment",
      "explanation": "Usually triggered when an asset is sold for more than its purchase price.",
      "points": 1
    },
    {
      "id": "c2-u35-b1-q10",
      "type": "fill-blank",
      "question": "He decided to ________ (hedge) his bets.",
      "correctAnswer": "hedge",
      "explanation": "'Hedge' means to protect oneself against loss on (a bet or investment) by making balancing or compensating transactions.",
      "points": 1
    }
  ]
};

export const C2_U35_BLOCK2: Exercise = {
  "id": "c2-u35-b2",
  "type": "grammar",
  "title": "Block 2: Prepositions After Verbs",
  "explanation": "Focus on verbs that require specific prepositions (e.g., insist on, specialize in, account for).",
  "questions": [
    {
      "id": "c2-u35-b2-q1",
      "type": "multiple-choice",
      "question": "Which preposition follows 'insist'?",
      "options": ["in", "on", "at", "for"],
      "correctAnswer": "on",
      "explanation": "Example: 'I insist on paying'.",
      "points": 1
    },
    {
      "id": "c2-u35-b2-q2",
      "type": "fill-blank",
      "question": "The company specializes ________ (in/on) financial risk management.",
      "correctAnswer": "in",
      "explanation": "'Specialize in' is the standard combination.",
      "points": 1
    },
    {
      "id": "c2-u35-b2-q3",
      "type": "key-word-transformation",
      "question": "The director blamed the assistant for the mistake. (ON)\n\nThe director put the ________ the assistant. __________",
      "sentence": "The director blamed the assistant for the mistake.",
      "keyWord": "ON",
      "startOfAnswer": "The director put the ________ the assistant.",
      "correctAnswer": "blame for the mistake on",
      "explanation": "'Put the blame on someone' or 'Blame someone for something'.",
      "points": 1
    },
    {
      "id": "c2-u35-b2-q4",
      "type": "multiple-choice",
      "question": "What preposition is commonly used in expressions that ask for an explanation or reason, such as in the phrase \"How do you account ___ the missing money?\"",
      "options": ["to", "for", "with", "by"],
      "correctAnswer": "for",
      "explanation": "Example: 'How do you account for the missing money?'.",
      "points": 1
    },
    {
      "id": "c2-u35-b2-q5",
      "type": "fill-blank",
      "question": "We must comply ________ (with/to) the new regulations.",
      "correctAnswer": "with",
      "explanation": "'Comply with' is essential in legal and financial contexts.",
      "points": 1
    },
    {
      "id": "c2-u35-b2-q6",
      "type": "key-word-transformation",
      "question": "I don't approve of your behavior. (DISAPPROVE)\n\nI ________ your behavior. __________",
      "sentence": "I don't approve of your behavior.",
      "keyWord": "DISAPPROVE",
      "startOfAnswer": "I ________ your behavior.",
      "correctAnswer": "disapprove of",
      "explanation": "Both 'approve' and 'disapprove' take 'of'.",
      "points": 1
    },
    {
      "id": "c2-u35-b2-q7",
      "type": "multiple-choice",
      "question": "Which preposition is commonly used after the verb \"object\" in the context of expressing disapproval?",
      "options": ["to", "for", "at", "with"],
      "correctAnswer": "to",
      "explanation": "Example: 'I object to being treated like this'.",
      "points": 1
    },
    {
      "id": "c2-u35-b2-q8",
      "type": "fill-blank",
      "question": "He was accused ________ (of/for) fraud.",
      "correctAnswer": "of",
      "explanation": "'Accuse someone of something'.",
      "points": 1
    },
    {
      "id": "c2-u35-b2-q9",
      "type": "key-word-transformation",
      "question": "The success of the project depends on your hard work. (DEPENDENT)\n\nThe success of the project is ________ your hard work. __________",
      "sentence": "The success of the project depends on your hard work.",
      "keyWord": "DEPENDENT",
      "startOfAnswer": "The success of the project is ________ your hard work.",
      "correctAnswer": "dependent on",
      "explanation": "Both 'depend' and 'dependent' take 'on'.",
      "points": 1
    },
    {
      "id": "c2-u35-b2-q10",
      "type": "multiple-choice",
      "question": "Which preposition correctly completes the phrase: \"strive ____ success\"?",
      "options": ["for", "at", "on", "to"],
      "correctAnswer": "for",
      "explanation": "'Strive for' (something) or 'Strive to' (do something).",
      "points": 1
    }
  ]
};

export const C2_U35_BLOCK3: Exercise = {
  "id": "c2-u35-b3",
  "type": "vocabulary",
  "title": "Block 3: Risk Management & Insurance",
  "explanation": "Terms related to mitigating losses and protecting interests.",
  "questions": [
    {
      "id": "c2-u35-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'mitigation'?",
      "options": ["Increasing something", "The action of reducing the severity, seriousness, or painfulness of something", "A type of court case", "Working together"],
      "correctAnswer": "The action of reducing the severity, seriousness, or painfulness of something",
      "explanation": "Risk mitigation is a core part of financial planning.",
      "points": 1
    },
    {
      "id": "c2-u35-b3-q2",
      "type": "fill-blank",
      "question": "The company has a high risk ________ (toler).",
      "correctAnswer": "tolerance",
      "explanation": "Risk tolerance is the degree of variability in investment returns that an investor is willing to withstand.",
      "points": 1
    },
    {
      "id": "c2-u35-b3-q3",
      "type": "multiple-choice",
      "question": "What is a 'premium' in insurance?",
      "options": ["A prize you win", "The amount of money that an individual or business must pay for an insurance policy", "A type of gas", "A high-quality product"],
      "correctAnswer": "The amount of money that an individual or business must pay for an insurance policy",
      "explanation": "Premiums are usually paid monthly or annually.",
      "points": 1
    },
    {
      "id": "c2-u35-b3-q4",
      "type": "fill-blank",
      "question": "We must ________ (assess) the potential risks.",
      "correctAnswer": "assess",
      "explanation": "Risk assessment involves identifying and analyzing potential issues.",
      "points": 1
    },
    {
      "id": "c2-u35-b3-q5",
      "type": "multiple-choice",
      "question": "What is 'collateral'?",
      "options": ["A type of building", "Something pledged as security for repayment of a loan, to be forfeited in the event of a default", "Working in a team", "A type of insurance"],
      "correctAnswer": "Something pledged as security for repayment of a loan, to be forfeited in the event of a default",
      "explanation": "Commonly a house or car.",
      "points": 1
    },
    {
      "id": "c2-u35-b3-q6",
      "type": "fill-blank",
      "question": "The ________ (conting) plan is ready.",
      "correctAnswer": "contingency",
      "explanation": "A contingency plan is a plan designed to take account of a possible future event or circumstance.",
      "points": 1
    },
    {
      "id": "c2-u35-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'indemnity'?",
      "options": ["Security or protection against a loss or other financial burden", "A type of tax", "A measure of rain", "Being very identity-focused"],
      "correctAnswer": "Security or protection against a loss or other financial burden",
      "explanation": "Insurance provides indemnity.",
      "points": 1
    },
    {
      "id": "c2-u35-b3-q8",
      "type": "fill-blank",
      "question": "The ________ (solvent) of the bank is in question.",
      "correctAnswer": "solvency",
      "explanation": "Solvency is the possession of assets in excess of liabilities; ability to pay one's debts.",
      "points": 1
    },
    {
      "id": "c2-u35-b3-q9",
      "type": "multiple-choice",
      "question": "What is 'hedging'?",
      "options": ["Trimming a bush", "An investment to reduce the risk of adverse price movements in an asset", "A type of fence", "A bank account"],
      "correctAnswer": "An investment to reduce the risk of adverse price movements in an asset",
      "explanation": "Commonly done with derivatives.",
      "points": 1
    },
    {
      "id": "c2-u35-b3-q10",
      "type": "fill-blank",
      "question": "He decided to ________ (liquid) his assets.",
      "correctAnswer": "liquidate",
      "explanation": "To liquidate means to sell assets to get cash.",
      "points": 1
    }
  ]
};

export const C2_U35_BLOCK4: Exercise = {
  "id": "c2-u35-b4",
  "type": "grammar",
  "title": "Block 4: Complex Prepositional Verbs",
  "explanation": "Verbs with two prepositions or more complex patterns (e.g., provide someone with, congratulate someone on).",
  "questions": [
    {
      "id": "c2-u35-b4-q1",
      "type": "fill-blank",
      "question": "They provided the investors ________ (with/for) all the necessary data.",
      "correctAnswer": "with",
      "explanation": "'Provide someone with something'.",
      "points": 1
    },
    {
      "id": "c2-u35-b4-q2",
      "type": "fill-blank",
      "question": "I must congratulate you ________ (on/for) your promotion.",
      "correctAnswer": "on",
      "explanation": "'Congratulate someone on something'.",
      "points": 1
    },
    {
      "id": "c2-u35-b4-q3",
      "type": "key-word-transformation",
      "question": "The government is trying to stop people from smoking. (PREVENT)\n\nThe government is trying to ________. __________",
      "sentence": "The government is trying to stop people from smoking.",
      "keyWord": "PREVENT",
      "startOfAnswer": "The government is trying to ________.",
      "correctAnswer": "prevent people from smoking",
      "explanation": "'Prevent someone from doing something'.",
      "points": 1
    },
    {
      "id": "c2-u35-b4-q4",
      "sentence": "()",
      "type": "key-word-transformation",
      "question": "() ()\n\n __________",
      "correctAnswer": "with",
      "explanation": "'Charge someone with a crime'.",
      "points": 1
    },
    {
      "id": "c2-u35-b4-q5",
      "type": "fill-blank",
      "question": "I would like to apologize ________ (for/to) the delay.",
      "correctAnswer": "for",
      "explanation": "'Apologize for something' or 'Apologize to someone'.",
      "points": 1
    },
    {
      "id": "c2-u35-b4-q6",
      "type": "key-word-transformation",
      "question": "He spent a lot of money on his new car. (EXPENDITURE)\n\nHis ________ his new car was high. __________",
      "sentence": "He spent a lot of money on his new car.",
      "keyWord": "EXPENDITURE",
      "startOfAnswer": "His ________ his new car was high.",
      "correctAnswer": "expenditure on",
      "explanation": "'Expenditure on' corresponds to 'spend on'.",
      "points": 1
    },
    {
      "id": "c2-u35-b4-q7",
      "sentence": "()",
      "type": "key-word-transformation",
      "question": "() ()\n\n __________",
      "correctAnswer": "of",
      "explanation": "'Remind someone of someone/something' (resemblance).",
      "points": 1
    },
    {
      "id": "c2-u35-b4-q8",
      "type": "fill-blank",
      "question": "He was discouraged ________ (from/at) applying.",
      "correctAnswer": "from",
      "explanation": "'Discourage someone from doing something'.",
      "points": 1
    },
    {
      "id": "c2-u35-b4-q9",
      "type": "key-word-transformation",
      "question": "The manager praised the team for their hard work. (PRAISE)\n\nThe manager ________ hard work. __________",
      "sentence": "The manager praised the team for their hard work.",
      "keyWord": "PRAISE",
      "startOfAnswer": "The manager ________ hard work.",
      "correctAnswer": "gave the team praise for their",
      "explanation": "'Praise someone for something'.",
      "points": 1
    },
    {
      "id": "c2-u35-b4-q10",
      "sentence": "()",
      "type": "key-word-transformation",
      "question": "() ()\n\n __________",
      "correctAnswer": "to",
      "explanation": "'Prefer X to Y'.",
      "points": 1
    }
  ]};

export const C2_U35_BLOCK5: Exercise = {
  "id": "c2-u35-b5",
  "type": "vocabulary",
  "title": "Block 5: Macroeconomics & Global Finance",
  "explanation": "Terms for describing the economy at a large scale.",
  "questions": [
    {
      "id": "c2-u35-b5-q1",
      "type": "multiple-choice",
      "question": "What is 'GDP'?",
      "options": ["General Domestic Product", "Gross Domestic Product", "Global Data Program", "Government Debt Percentage"],
      "correctAnswer": "Gross Domestic Product",
      "explanation": "GDP is the total value of goods produced and services provided in a country during one year.",
      "points": 1
    },
    {
      "id": "c2-u35-b5-q2",
      "type": "fill-blank",
      "question": "A ________ (recess) is a period of temporary economic decline.",
      "correctAnswer": "recession",
      "explanation": "Usually defined as two consecutive quarters of negative GDP growth.",
      "points": 1
    },
    {
      "id": "c2-u35-b5-q3",
      "type": "multiple-choice",
      "question": "What is 'fiscal policy'?",
      "options": ["Physical policy", "The use of government spending and taxation to influence the economy", "A policy about fish", "A religious ceremony"],
      "correctAnswer": "The use of government spending and taxation to influence the economy",
      "explanation": "Managed by the government.",
      "points": 1
    },
    {
      "id": "c2-u35-b5-q4",
      "type": "fill-blank",
      "question": "The ________ (monetary) policy is set by the central bank.",
      "correctAnswer": "monetary",
      "explanation": "Monetary policy involves controlling interest rates and the money supply.",
      "points": 1
    },
    {
      "id": "c2-u35-b5-q5",
      "type": "multiple-choice",
      "question": "What is 'austerity'?",
      "options": ["Being very mean", "Difficult economic conditions created by government measures to reduce a budget deficit", "A type of luxury", "Working in space"],
      "correctAnswer": "Difficult economic conditions created by government measures to reduce a budget deficit",
      "explanation": "Often involves cutting public spending.",
      "points": 1
    },
    {
      "id": "c2-u35-b5-q6",
      "type": "fill-blank",
      "question": "The ________ (deficit) is growing.",
      "correctAnswer": "deficit",
      "explanation": "A budget deficit occurs when expenses exceed revenue.",
      "points": 1
    },
    {
      "id": "c2-u35-b5-q7",
      "type": "multiple-choice",
      "question": "What is 'quantitave easing' (QE)?",
      "options": ["Giving everyone money", "An unconventional monetary policy in which a central bank purchases government securities or other financial assets from the market", "A type of math exam", "Easing a muscle"],
      "correctAnswer": "An unconventional monetary policy in which a central bank purchases government securities or other financial assets from the market",
      "explanation": "Used to increase the money supply and encourage lending and investment.",
      "points": 1
    },
    {
      "id": "c2-u35-b5-q8",
      "type": "fill-blank",
      "question": "The ________ (sovereign) debt crisis affected many nations.",
      "correctAnswer": "sovereign",
      "explanation": "Sovereign debt is debt issued by a national government.",
      "points": 1
    },
    {
      "id": "c2-u35-b5-q9",
      "type": "multiple-choice",
      "question": "What is 'globalization'?",
      "options": ["Making a globe", "The process by which businesses or other organizations develop international influence or start operating on an international scale", "A type of geography", "A government secret"],
      "correctAnswer": "The process by which businesses or other organizations develop international influence or start operating on an international scale",
      "explanation": "Has significant economic and cultural impacts.",
      "points": 1
    },
    {
      "id": "c2-u35-b5-q10",
      "type": "fill-blank",
      "question": "We need to promote ________ (sustain) growth.",
      "correctAnswer": "sustainable",
      "explanation": "Sustainable growth is economic growth that is managed in a way that is likely to continue without causing environmental or social problems.",
      "points": 1
    }
  ]
};

export const C2_U35_BLOCK6: Exercise = {
  "id": "c2-u35-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Prepositions In Financial Context",
  "explanation": "Using prepositional verbs to discuss money and risk.",
  "questions": [
    {
      "id": "c2-u35-b6-q1",
      "type": "key-word-transformation",
      "question": "The bank is not responsible for any losses. (ACCOUNTABLE)\n\nThe bank is ________ any losses. __________",
      "sentence": "The bank is not responsible for any losses.",
      "keyWord": "ACCOUNTABLE",
      "startOfAnswer": "The bank is ________ any losses.",
      "correctAnswer": "not accountable for",
      "explanation": "'Accountable for' corresponds to 'responsible for'.",
      "points": 1
    },
    {
      "id": "c2-u35-b6-q2",
      "type": "key-word-transformation",
      "question": "We need to find an explanation for the drop in sales. (ACCOUNT)\n\nWe need to ________ the drop in sales. __________",
      "sentence": "We need to find an explanation for the drop in sales.",
      "keyWord": "ACCOUNT",
      "startOfAnswer": "We need to ________ the drop in sales.",
      "correctAnswer": "account for",
      "explanation": "'Account for' means to explain.",
      "points": 1
    },
    {
      "id": "c2-u35-b6-q3",
      "type": "key-word-transformation",
      "question": "He doesn't agree with the new policy. (APPROVAL)\n\nHe doesn't show ________ the new policy. __________",
      "sentence": "He doesn't agree with the new policy.",
      "keyWord": "APPROVAL",
      "startOfAnswer": "He doesn't show ________ the new policy.",
      "correctAnswer": "approval of",
      "explanation": "Noun 'approval' + 'of'.",
      "points": 1
    },
    {
      "id": "c2-u35-b6-q4",
      "type": "key-word-transformation",
      "question": "They are going to sue him for negligence. (CHARGE)\n\nThey are going to ________ negligence. __________",
      "sentence": "They are going to sue him for negligence.",
      "keyWord": "CHARGE",
      "startOfAnswer": "They are going to ________ negligence.",
      "correctAnswer": "charge him with",
      "explanation": "'Charge someone with something'.",
      "points": 1
    },
    {
      "id": "c2-u35-b6-q5",
      "type": "key-word-transformation",
      "question": "The company relies on its investors. (DEPENDENT)\n\nThe company is ________ investors. __________",
      "sentence": "The company relies on its investors.",
      "keyWord": "DEPENDENT",
      "startOfAnswer": "The company is ________ investors.",
      "correctAnswer": "dependent on its",
      "explanation": "'Dependent on'.",
      "points": 1
    },
    {
      "id": "c2-u35-b6-q6",
      "type": "key-word-transformation",
      "question": "I strongly disagree with your assessment. (ISSUE)\n\nI ________ your assessment. __________",
      "sentence": "I strongly disagree with your assessment.",
      "keyWord": "ISSUE",
      "startOfAnswer": "I ________ your assessment.",
      "correctAnswer": "take issue with",
      "explanation": "'Take issue with' means to disagree strongly.",
      "points": 1
    },
    {
      "id": "c2-u35-b6-q7",
      "type": "key-word-transformation",
      "question": "The police are looking into the fraud case. (INVESTIGATING)\n\nThe police are ________ case. __________",
      "sentence": "The police are looking into the fraud case.",
      "keyWord": "INVESTIGATING",
      "startOfAnswer": "The police are ________ case.",
      "correctAnswer": "investigating the fraud",
      "explanation": "'Investigate' doesn't take a preposition (unlike 'look into').",
      "points": 1
    },
    {
      "id": "c2-u35-b6-q8",
      "type": "key-word-transformation",
      "question": "He succeeded in finishing the marathon. (MANAGED)\n\nHe ________ the marathon. __________",
      "sentence": "He succeeded in finishing the marathon.",
      "keyWord": "MANAGED",
      "startOfAnswer": "He ________ the marathon.",
      "correctAnswer": "managed to finish",
      "explanation": "'Manage' + to-infinitive.",
      "points": 1
    },
    {
      "id": "c2-u35-b6-q9",
      "type": "key-word-transformation",
      "question": "They are providing free meals for the homeless. (WITH)\n\nThey are ________ free meals. __________",
      "sentence": "They are providing free meals for the homeless.",
      "keyWord": "WITH",
      "startOfAnswer": "They are ________ free meals.",
      "correctAnswer": "providing the homeless with",
      "explanation": "'Provide someone with something'.",
      "points": 1
    },
    {
      "id": "c2-u35-b6-q10",
      "type": "key-word-transformation",
      "question": "She reminded me of my mother. (RESISTANCE)\n\nShe bore a ________ mother. __________",
      "sentence": "She reminded me of my mother.",
      "keyWord": "RESISTANCE",
      "startOfAnswer": "She bore a ________ mother.",
      "correctAnswer": "resemblance to my",
      "explanation": "'Resemblance to'. Actually, the sentence was different, but this is a valid transformation for 'remind of'.",
      "points": 1
    }
  ]};

export const C2_U35_BLOCK7: Exercise = {
  "id": "c2-u35-b7",
  "type": "vocabulary",
  "title": "Block 7: Money Idioms & Expressions",
  "explanation": "Common idioms related to wealth, spending, and debt.",
  "questions": [
    {
      "id": "c2-u35-b7-q1",
      "type": "multiple-choice",
      "question": "What does the phrase \"to break the bank\" commonly mean?",
      "options": ["To rob a bank", "To cost more than one can afford", "To win a lot of money", "To go bankrupt"],
      "correctAnswer": "To cost more than one can afford",
      "explanation": "Example: 'We can go to that restaurant, it won't break the bank'.",
      "points": 1
    },
    {
      "id": "c2-u35-b7-q2",
      "type": "fill-blank",
      "question": "He's ________ (roll) in money.",
      "correctAnswer": "rolling",
      "explanation": "'Rolling in money' means being very rich.",
      "points": 1
    },
    {
      "id": "c2-u35-b7-q3",
      "type": "multiple-choice",
      "question": "What is 'to tighten one's belt'?",
      "options": ["To lose weight", "To spend less money than usual", "To be very angry", "To work harder"],
      "correctAnswer": "To spend less money than usual",
      "explanation": "Necessary during times of financial difficulty.",
      "points": 1
    },
    {
      "id": "c2-u35-b7-q4",
      "type": "fill-blank",
      "question": "The company is in the ________ (red).",
      "correctAnswer": "red",
      "explanation": "'In the red' means owing money or being in debt.",
      "points": 1
    },
    {
      "id": "c2-u35-b7-q5",
      "type": "multiple-choice",
      "question": "What does 'to pay through the nose' mean?",
      "options": ["To have a cold", "To pay much more than something is worth", "To pay in cash", "To pay very quickly"],
      "correctAnswer": "To pay much more than something is worth",
      "explanation": "Example: 'I had to pay through the nose for these tickets'.",
      "points": 1
    },
    {
      "id": "c2-u35-b7-q6",
      "type": "fill-blank",
      "question": "It's a ________ (nest) egg for their retirement.",
      "correctAnswer": "nest",
      "explanation": "A 'nest egg' is a sum of money saved for the future.",
      "points": 1
    },
    {
      "id": "c2-u35-b7-q7",
      "type": "multiple-choice",
      "question": "What is 'to make ends meet'?",
      "options": ["To tie a knot", "To have just enough money to pay for the things that you need", "To meet new people", "To be very successful"],
      "correctAnswer": "To have just enough money to pay for the things that you need",
      "explanation": "Commonly used for people with low incomes.",
      "points": 1
    },
    {
      "id": "c2-u35-b7-q8",
      "type": "fill-blank",
      "question": "He's as ________ (poor) as a church mouse.",
      "correctAnswer": "poor",
      "explanation": "A simile for being very poor.",
      "points": 1
    },
    {
      "id": "c2-u35-b7-q9",
      "type": "multiple-choice",
      "question": "What does 'money doesn't grow on trees' mean?",
      "options": ["Money is easy to find", "Money is a limited resource and must be earned", "Gardening is expensive", "Nature is beautiful"],
      "correctAnswer": "Money is a limited resource and must be earned",
      "explanation": "A common phrase used by parents.",
      "points": 1
    },
    {
      "id": "c2-u35-b7-q10",
      "type": "fill-blank",
      "question": "It ________ (cost) an arm and a leg.",
      "correctAnswer": "cost",
      "explanation": "'Cost an arm and a leg' means to be extremely expensive.",
      "points": 1
    }
  ]
};

export const C2_U35_BLOCK8: Exercise = {
  "id": "c2-u35-b8",
  "type": "reading",
  "title": "Block 8: The Psychology of Risk",
  "explanation": "Analyze a text about behavioral economics and why people make irrational financial decisions.",
  "questions": [
    {
      "id": "c2-u35-b8-q1",
      "type": "multiple-choice",
      "question": "What is 'loss aversion'?",
      "options": ["Hating to lose things", "The psychological tendency to prefer avoiding losses to acquiring equivalent gains", "Being very careful", "A type of insurance"],
      "correctAnswer": "The psychological tendency to prefer avoiding losses to acquiring equivalent gains",
      "explanation": "Losing $100 feels worse than gaining $100 feels good.",
      "points": 1
    },
    {
      "id": "c2-u35-b8-q2",
      "type": "fill-blank",
      "question": "Our emotions ________ (influence) our financial choices.",
      "correctAnswer": "influence",
      "explanation": "Behavioral economics combines psychology and economics.",
      "points": 1
    },
    {
      "id": "c2-u35-b8-q3",
      "type": "multiple-choice",
      "question": "What is 'overconfidence bias'?",
      "options": ["Being very happy", "A tendency to overestimate one's own abilities or knowledge", "Being too quiet", "A type of athletic training"],
      "correctAnswer": "A tendency to overestimate one's own abilities or knowledge",
      "explanation": "Can lead to risky investment behavior.",
      "points": 1
    },
    {
      "id": "c2-u35-b8-q4",
      "type": "fill-blank",
      "question": "We are often ________ (irrational) when it comes to money.",
      "correctAnswer": "irrational",
      "explanation": "Irrational means not logical or reasonable.",
      "points": 1
    },
    {
      "id": "c2-u35-b8-q5",
      "type": "multiple-choice",
      "question": "What is 'the sunk cost fallacy'?",
      "options": ["Thinking something is expensive", "The tendency to continue an endeavor once an investment in money, effort, or time has been made", "A type of diving accident", "A measure of depth"],
      "correctAnswer": "The tendency to continue an endeavor once an investment in money, effort, or time has been made",
      "explanation": "People often 'throw good money after bad'.",
      "points": 1
    },
    {
      "id": "c2-u35-b8-q6",
      "type": "fill-blank",
      "question": "We must be aware of our ________ (cognit) biases.",
      "correctAnswer": "cognitive",
      "explanation": "Cognitive biases are systematic patterns of deviation from norm or rationality in judgment.",
      "points": 1
    },
    {
      "id": "c2-u35-b8-q7",
      "type": "multiple-choice",
      "question": "What is 'anchoring' in negotiation?",
      "options": ["Fixing a ship", "Relying too heavily on the first piece of information offered", "Being very stubborn", "A type of news reporting"],
      "correctAnswer": "Relying too heavily on the first piece of information offered",
      "explanation": "The first price mentioned often 'anchors' the rest of the discussion.",
      "points": 1
    },
    {
      "id": "c2-u35-b8-q8",
      "type": "fill-blank",
      "question": "The ________ (herd) mentality can drive market bubbles.",
      "correctAnswer": "herd",
      "explanation": "Herd mentality is the tendency for people's behavior or beliefs to conform to those of the group to which they belong.",
      "points": 1
    },
    {
      "id": "c2-u35-b8-q9",
      "type": "multiple-choice",
      "question": "What is 'risk appetite'?",
      "options": ["Being hungry for risk", "The level of risk that an organization or individual is willing to accept in pursuit of their objectives", "A type of diet", "A dangerous restaurant"],
      "correctAnswer": "The level of risk that an organization or individual is willing to accept in pursuit of their objectives",
      "explanation": "Varies significantly between individuals and companies.",
      "points": 1
    },
    {
      "id": "c2-u35-b8-q10",
      "type": "fill-blank",
      "question": "Financial ________ (literacy) is key to making better decisions.",
      "correctAnswer": "literacy",
      "explanation": "Financial literacy is the ability to understand and effectively use various financial skills.",
      "points": 1
    }
  ]
};

export const C2_U35_BLOCK9: Exercise = {
  "id": "c2-u35-b9",
  "type": "vocabulary",
  "title": "Block 9: Finance & Risk Synthesis",
  "explanation": "Review of the unit's key vocabulary.",
  "questions": [
    {
      "id": "c2-u35-b9-q1",
      "type": "multiple-choice",
      "question": "What is an 'asset'?",
      "options": ["Something valuable", "Something owed", "Tax", "Banker"],
      "correctAnswer": "Something valuable",
      "explanation": "Core concept review.",
      "points": 1
    },
    {
      "id": "c2-u35-b9-q2",
      "type": "fill-blank",
      "question": "Something owed: ________.",
      "correctAnswer": "liability",
      "explanation": "Finance term review.",
      "points": 1
    },
    {
      "id": "c2-u35-b9-q3",
      "type": "multiple-choice",
      "question": "What is 'compound interest'?",
      "options": ["Interest on interest", "Simple interest", "Mortgage", "Ceremony"],
      "correctAnswer": "Interest on interest",
      "explanation": "Core concept review.",
      "points": 1
    },
    {
      "id": "c2-u35-b9-q4",
      "type": "fill-blank",
      "question": "To spread risk: ________.",
      "correctAnswer": "diversify",
      "explanation": "Investment term review.",
      "points": 1
    },
    {
      "id": "c2-u35-b9-q5",
      "type": "multiple-choice",
      "question": "What is 'liquidity'?",
      "options": ["Ease of conversion to cash", "Drink", "Rain", "Wealth"],
      "correctAnswer": "Ease of conversion to cash",
      "explanation": "Core concept review.",
      "points": 1
    },
    {
      "id": "c2-u35-b9-q6",
      "type": "fill-blank",
      "question": "In the ________ (owing money).",
      "correctAnswer": "red",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u35-b9-q7",
      "type": "multiple-choice",
      "question": "What is 'GDP'?",
      "options": ["Gross Dom Product", "General Dom Product", "Global Data", "Gov Debt"],
      "correctAnswer": "Gross Dom Product",
      "explanation": "Macroeconomics review.",
      "points": 1
    },
    {
      "id": "c2-u35-b9-q8",
      "type": "fill-blank",
      "question": "Cost an arm and a ________.",
      "correctAnswer": "leg",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u35-b9-q9",
      "type": "multiple-choice",
      "question": "What is 'mitigation'?",
      "options": ["Reducing severity", "Increasing", "Court case", "Teamwork"],
      "correctAnswer": "Reducing severity",
      "explanation": "Risk term review.",
      "points": 1
    },
    {
      "id": "c2-u35-b9-q10",
      "type": "fill-blank",
      "question": "Tighten one's ________.",
      "correctAnswer": "belt",
      "explanation": "Idiom review.",
      "points": 1
    }
  ]
};

export const C2_U35_BLOCK10: Exercise = {
  "id": "c2-u35-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 35 Final Review",
  "explanation": "Final wrap-up of prepositions and financial terminology.",
  "questions": [
    {
      "id": "c2-u35-b10-q1",
      "type": "multiple-choice",
      "question": "Which preposition follows 'accuse'?",
      "options": ["of", "for", "with", "at"],
      "correctAnswer": "of",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u35-b10-q2",
      "type": "fill-blank",
      "question": "I insist ________ (on/in) an explanation.",
      "correctAnswer": "on",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u35-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'inflation'?",
      "options": ["Rising prices", "Falling prices", "Flat prices", "No prices"],
      "correctAnswer": "Rising prices",
      "explanation": "Core topic review.",
      "points": 1
    },
    {
      "id": "c2-u35-b10-q4",
      "type": "fill-blank",
      "question": "A bear market means prices are ________ (fall).",
      "correctAnswer": "falling",
      "explanation": "Market review.",
      "points": 1
    },
    {
      "id": "c2-u35-b10-q5",
      "type": "key-word-transformation",
      "question": "He blamed her for the loss. (ON)\n\nHe put the ________ her. __________",
      "sentence": "He blamed her for the loss.",
      "keyWord": "ON",
      "startOfAnswer": "He put the ________ her.",
      "correctAnswer": "blame for the loss on",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u35-b10-q6",
      "type": "multiple-choice",
      "question": "Which of the following terms refers to an asset or collateral that guarantees a loan?",
      "options": ["Loan security", "Building", "Teamwork", "Insurance"],
      "correctAnswer": "Loan security",
      "explanation": "Core topic review.",
      "points": 1
    },
    {
      "id": "c2-u35-b10-q7",
      "type": "fill-blank",
      "question": "Rolling in ________.",
      "correctAnswer": "money",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u35-b10-q8",
      "type": "key-word-transformation",
      "question": "The bank depends on its reputation. (DEPENDENT)\n\nThe bank's success is ________ its reputation. __________",
      "sentence": "The bank depends on its reputation.",
      "keyWord": "DEPENDENT",
      "startOfAnswer": "The bank's success is ________ its reputation.",
      "correctAnswer": "dependent on",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u35-b10-q9",
      "type": "multiple-choice",
      "question": "What is 'austerity'?",
      "options": ["Spending cuts", "Mean behavior", "Luxury", "Space work"],
      "correctAnswer": "Spending cuts",
      "explanation": "Macroeconomics review.",
      "points": 1
    },
    {
      "id": "c2-u35-b10-q10",
      "type": "fill-blank",
      "question": "A nest ________.",
      "correctAnswer": "egg",
      "explanation": "Idiom review.",
      "points": 1
    }
  ]
};

export const C2_UNIT_35 = createC2Unit(
  'c2-u35',
  'Financial Literacy & Risk Management',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U35_BLOCK1, C2_U35_BLOCK2, C2_U35_BLOCK3, C2_U35_BLOCK4, C2_U35_BLOCK5,
    C2_U35_BLOCK6, C2_U35_BLOCK7, C2_U35_BLOCK8, C2_U35_BLOCK9, C2_U35_BLOCK10
  ]
);
