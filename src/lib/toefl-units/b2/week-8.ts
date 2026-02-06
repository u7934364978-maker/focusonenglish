import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 8;
const LEVEL = 'b2';

// SHARDS 1-2: Determining Intent and Degree of Certainty
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Understanding Speaker Intent: Pragmatics',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'A speaker says, "I wonder if we should..." What is their intent?',
      options: ['To make a suggestion indirectly.', 'To demand an answer.', 'To show they are confused.'],
      correctAnswer: 'To make a suggestion indirectly.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'Which word signals that the speaker is "hedging" (being cautious)?',
      options: ['Apparently', 'Definitely', 'Absolutely'],
      correctAnswer: 'Apparently',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'If a professor says, "Mind you...", they are:',
      options: ['Adding a qualification or a contrasting detail.', 'Asking you to use your brain.', 'Ending the lecture.'],
      correctAnswer: 'Adding a qualification or a contrasting detail.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'What is the intent of the rhetorical question: "Who wouldn\'t want that?"',
      options: ['To emphasize that everyone would want it.', 'To find out who is missing.', 'To start a vote.'],
      correctAnswer: 'To emphasize that everyone would want it.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'Which phrase indicates "reassurance"?',
      options: ['Rest assured that...', 'Be warned that...', 'Take note that...'],
      correctAnswer: 'Rest assured that...',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'What does "to some extent" imply about the speaker\'s certainty?',
      options: ['They agree partially but not completely.', 'They agree 100%.', 'They completely disagree.'],
      correctAnswer: 'They agree partially but not completely.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'If a speaker says, "It goes without saying...", they mean:',
      options: ['The point is obvious or widely accepted.', 'Nobody is allowed to talk.', 'They forgot what to say.'],
      correctAnswer: 'The point is obvious or widely accepted.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'Which word signals "skepticism"?',
      options: ['Allegedly', 'Ideally', 'Precisely'],
      correctAnswer: 'Allegedly',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What is the intent of "I see your point, but..."?',
      options: ['To acknowledge an argument before disagreeing.', 'To end the conversation.', 'To compliment someone.'],
      correctAnswer: 'To acknowledge an argument before disagreeing.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'What does "frankly" indicate about the speaker\'s tone?',
      options: ['They are being honest and direct, often about something unpleasant.', 'They are telling a joke.', 'They are being very polite.'],
      correctAnswer: 'They are being honest and direct, often about something unpleasant.',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Degree of Certainty: Modality',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'Which modal verb shows the highest degree of certainty?',
      options: ['Must', 'Might', 'Could'],
      correctAnswer: 'Must',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'Which phrase shows the lowest degree of certainty?',
      options: ['There is a remote possibility that...', 'It is highly likely that...', 'There is no doubt that...'],
      correctAnswer: 'There is a remote possibility that...',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What does "presumably" mean?',
      options: ['Used to say what you think is the case, though you are not certain.', 'Definitely.', 'Never.'],
      correctAnswer: 'Used to say what you think is the case, though you are not certain.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'If a speaker says "In all likelihood...", they are:',
      options: ['Expressing strong probability.', 'Expressing a tiny chance.', 'Expressing a wish.'],
      correctAnswer: 'Expressing strong probability.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'What is a "tentative" statement?',
      options: ['A statement made without confidence or certainty.', 'A very loud statement.', 'A final decision.'],
      correctAnswer: 'A statement made without confidence or certainty.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'Which word indicates that something is "not proven"?',
      options: ['Speculative', 'Empirical', 'Incontrovertible'],
      correctAnswer: 'Speculative',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What does "virtually certain" mean?',
      options: ['Almost 100% sure.', 'Not sure at all.', 'Happening only in a computer.'],
      correctAnswer: 'Almost 100% sure.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'If a professor says "The jury is still out...", they mean:',
      options: ['A final decision or consensus has not yet been reached.', 'The class is over.', 'The legal system is failing.'],
      correctAnswer: 'A final decision or consensus has not yet been reached.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'Which word signals that a speaker is giving a "rough estimate"?',
      options: ['Roughly', 'Precisely', 'Exactly'],
      correctAnswer: 'Roughly',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'What does "to postulate" mean?',
      options: ['To suggest or assume the existence, fact, or truth of something as a basis for reasoning.', 'To send mail.', 'To arrive late.'],
      correctAnswer: 'To suggest or assume the existence, fact, or truth of something as a basis for reasoning.',
      points: 1
    }
  ]
};

// SHARDS 3-4: Conversations (Campus Admin)
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Conversation: Housing Deposit Dispute',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's3', 1),
      type: 'multiple-choice',
      question: 'Why is the student at the housing office?',
      options: ['They didn\'t receive their full security deposit back.', 'They want to move into a new dorm.', 'They lost their room key.'],
      correctAnswer: 'They didn\'t receive their full security deposit back.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 2),
      type: 'multiple-choice',
      question: 'What reason does the administrator give for the deduction?',
      options: ['Cleaning fees and a "minor" hole in the wall.', 'Late rent payment.', 'Noise complaints.'],
      correctAnswer: 'Cleaning fees and a "minor" hole in the wall.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 3),
      type: 'multiple-choice',
      question: 'How does the student defend themselves?',
      options: ['They claim the hole was there when they moved in and have a "check-in" form.', 'They say they didn\'t do it.', 'They offer to fix it now.'],
      correctAnswer: 'They claim the hole was there when they moved in and have a "check-in" form.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 4),
      type: 'multiple-choice',
      question: 'What does the administrator ask the student to provide?',
      options: ['A copy of the signed inventory/check-in list.', 'A letter from their roommate.', 'Their bank statement.'],
      correctAnswer: 'A copy of the signed inventory/check-in list.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 5),
      type: 'multiple-choice',
      question: 'What is "wear and tear"?',
      options: ['Normal damage that happens over time from regular use.', 'Intentionally breaking something.', 'Clothing items.'],
      correctAnswer: 'Normal damage that happens over time from regular use.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 6),
      type: 'multiple-choice',
      question: 'How does the administrator\'s tone change during the talk?',
      options: ['It becomes more helpful as the student provides proof.', 'It stays angry.', 'They start laughing.'],
      correctAnswer: 'It becomes more helpful as the student provides proof.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 7),
      type: 'multiple-choice',
      question: 'What does "to follow protocol" mean?',
      options: ['To adhere to the established set of rules.', 'To lead a parade.', 'To invent a new language.'],
      correctAnswer: 'To follow protocol.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 8),
      type: 'multiple-choice',
      question: 'What is the outcome of the meeting?',
      options: ['The office will review the student\'s file and likely issue a refund.', 'The student is evicted.', 'The student has to pay more money.'],
      correctAnswer: 'The office will review the student\'s file and likely issue a refund.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 9),
      type: 'multiple-choice',
      question: 'What does "discrepancy" mean?',
      options: ['A lack of compatibility or similarity between two or more facts.', 'A type of fruit.', 'A secret plan.'],
      correctAnswer: 'A lack of compatibility or similarity between two or more facts.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 10),
      type: 'multiple-choice',
      question: 'What is the student\'s primary goal?',
      options: ['To recover their money.', 'To make a new friend.', 'To complain about the heat.'],
      correctAnswer: 'To recover their money.',
      points: 1
    }
  ]
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Conversation: Changing a Meal Plan',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's4', 1),
      type: 'multiple-choice',
      question: 'Why does the student want to change their meal plan?',
      options: ['They are not eating at the cafeteria as much as they expected.', 'The food is bad.', 'The cafeteria is too far away.'],
      correctAnswer: 'They are not eating at the cafeteria as much as they expected.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 2),
      type: 'multiple-choice',
      question: 'What is the student\'s current plan?',
      options: ['The "Unlimited" plan.', 'The "10-meals-a-week" plan.', 'They have no plan.'],
      correctAnswer: 'The "Unlimited" plan.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 3),
      type: 'multiple-choice',
      question: 'What is the "deadline" problem?',
      options: ['The deadline to change plans for this semester was last Friday.', 'The student is too late for lunch.', 'The cafeteria is closing for good.'],
      correctAnswer: 'The deadline to change plans for this semester was last Friday.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 4),
      type: 'multiple-choice',
      question: 'What solution does the clerk suggest?',
      options: ['Applying for a "special exemption" due to a change in their class/work schedule.', 'Eating more food.', 'Giving away their meals.'],
      correctAnswer: 'Applying for a "special exemption" due to a change in their class/work schedule.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 5),
      type: 'multiple-choice',
      question: 'What documentation might the student need?',
      options: ['Their work schedule or a letter from their employer.', 'A medical note.', 'A recipe book.'],
      correctAnswer: 'Their work schedule or a letter from their employer.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 6),
      type: 'multiple-choice',
      question: 'What does "to prorate" mean?',
      options: ['To allocate or distribute something proportionally.', 'To cook something quickly.', 'To cancel something.'],
      correctAnswer: 'To allocate or distribute something proportionally.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 7),
      type: 'multiple-choice',
      question: 'Is there a fee for changing the plan?',
      options: ['Yes, a small administrative processing fee.', 'No, it is free.', 'Yes, it costs $500.'],
      correctAnswer: 'Yes, a small administrative processing fee.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 8),
      type: 'multiple-choice',
      question: 'How does the student feel about the "exemption" process?',
      options: ['They think it is worth a try.', 'They think it is too much work.', 'They are angry.'],
      correctAnswer: 'They think it is worth a try.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 9),
      type: 'multiple-choice',
      question: 'What does "no-brainer" mean?',
      options: ['Something that requires little or no thought because it is so obvious.', 'Someone who is not smart.', 'A difficult exam.'],
      correctAnswer: 'Something that requires little or no thought because it is so obvious.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 10),
      type: 'multiple-choice',
      question: 'What is the clerk\'s primary role?',
      options: ['To provide information on options and procedures.', 'To cook the meals.', 'To drive the student home.'],
      correctAnswer: 'To provide information on options and procedures.',
      points: 1
    }
  ]
};

// SHARDS 5-6: Discussion (Environmental Science - Urban Heat Islands)
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'Discussion: The Urban Heat Island Effect',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's5', 1),
      type: 'multiple-choice',
      question: 'What is an "Urban Heat Island" (UHI)?',
      options: ['An urban area that is significantly warmer than its surrounding rural areas.', 'A tropical island with a city.', 'A city with no heating.'],
      correctAnswer: 'An urban area that is significantly warmer than its surrounding rural areas.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 2),
      type: 'multiple-choice',
      question: 'What is a major cause of the UHI effect?',
      options: ['Surfaces like asphalt and concrete that absorb and retain heat.', 'Too many people breathing.', 'Volcanic activity.'],
      correctAnswer: 'Surfaces like asphalt and concrete that absorb and retain heat.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 3),
      type: 'multiple-choice',
      question: 'What is "Albedo"?',
      options: ['The proportion of light or radiation reflected by a surface.', 'A type of urban bird.', 'The name of a famous architect.'],
      correctAnswer: 'The proportion of light or radiation reflected by a surface.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 4),
      type: 'multiple-choice',
      question: 'How do "low albedo" surfaces affect temperature?',
      options: ['They absorb more solar energy, increasing local temperatures.', 'They reflect heat, cooling the area.', 'They have no effect.'],
      correctAnswer: 'They absorb more solar energy, increasing local temperatures.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 5),
      type: 'multiple-choice',
      question: 'What role does "evapotranspiration" play?',
      options: ['Plants release water vapor, which cools the surrounding air.', 'It makes the air hotter.', 'It causes acid rain.'],
      correctAnswer: 'Plants release water vapor, which cools the surrounding air.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 6),
      type: 'multiple-choice',
      question: 'What is "waste heat"?',
      options: ['Heat generated by human activities like air conditioning and cars.', 'Heat from a garbage fire.', 'Old heat.'],
      correctAnswer: 'Heat generated by human activities like air conditioning and cars.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 7),
      type: 'multiple-choice',
      question: 'How does UHI affect energy consumption?',
      options: ['It increases the demand for cooling (AC) in the summer.', 'It reduces electricity use.', 'It makes light bulbs brighter.'],
      correctAnswer: 'It increases the demand for cooling (AC) in the summer.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 8),
      type: 'multiple-choice',
      question: 'What is a "green roof"?',
      options: ['A roof covered with vegetation to provide insulation and cooling.', 'A roof painted green.', 'A roof made of money.'],
      correctAnswer: 'A roof covered with vegetation to provide insulation and cooling.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 9),
      type: 'multiple-choice',
      question: 'What does "mitigation" mean?',
      options: ['The action of reducing the severity or seriousness of something.', 'Moving to another city.', 'Ignoring a problem.'],
      correctAnswer: 'The action of reducing the severity or seriousness of something.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 10),
      type: 'multiple-choice',
      question: 'What is the professor\'s main message?',
      options: ['Urban planning can significantly reduce the UHI effect.', 'Cities are doomed.', 'Rural areas are getting colder.'],
      correctAnswer: 'Urban planning can significantly reduce the UHI effect.',
      points: 1
    }
  ]
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Discussion: Solutions for UHIs',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's6', 1),
      type: 'multiple-choice',
      question: 'What is a "cool pavement"?',
      options: ['Pavement designed to reflect more solar energy and stay cooler.', 'Pavement with ice on it.', 'Pavement in the shade.'],
      correctAnswer: 'Pavement designed to reflect more solar energy and stay cooler.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 2),
      type: 'multiple-choice',
      question: 'How does planting trees help beyond shade?',
      options: ['Through evapotranspiration and improved air quality.', 'By blocking the wind.', 'By attracting birds.'],
      correctAnswer: 'Through evapotranspiration and improved air quality.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 3),
      type: 'multiple-choice',
      question: 'What is "thermal mass"?',
      options: ['The ability of a material to absorb and store heat energy.', 'How heavy a heater is.', 'A type of scientific calculation.'],
      correctAnswer: 'The ability of a material to absorb and store heat energy.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 4),
      type: 'multiple-choice',
      question: 'What is a "vertical forest"?',
      options: ['A building covered in trees and plants.', 'A forest on a mountain.', 'A very tall tree.'],
      correctAnswer: 'A building covered in trees and plants.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 5),
      type: 'multiple-choice',
      question: 'How does urban design affect airflow?',
      options: ['Wide streets and specific building heights can promote natural cooling breezes.', 'Buildings block all wind.', 'Cities have no air.'],
      correctAnswer: 'Wide streets and specific building heights can promote natural cooling breezes.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 6),
      type: 'multiple-choice',
      question: 'What does "sustainable" mean?',
      options: ['Able to be maintained at a certain rate or level without depleting resources.', 'Very expensive.', 'Quick to build.'],
      correctAnswer: 'Able to be maintained at a certain rate or level without depleting resources.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 7),
      type: 'multiple-choice',
      question: 'What is a "pocket park"?',
      options: ['A small urban park on a single vacant lot or small irregular piece of land.', 'A park you can put in your pocket.', 'A park with no trees.'],
      correctAnswer: 'A small urban park on a single vacant lot or small irregular piece of land.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 8),
      type: 'multiple-choice',
      question: 'What is the main challenge mentioned for these solutions?',
      options: ['Cost and existing infrastructure limitations.', 'People don\'t like plants.', 'There is no water.'],
      correctAnswer: 'Cost and existing infrastructure limitations.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 9),
      type: 'multiple-choice',
      question: 'What does "to implement" mean?',
      options: ['To put a plan or decision into effect.', 'To think about something.', 'To buy something.'],
      correctAnswer: 'To put a plan or decision into effect.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 10),
      type: 'multiple-choice',
      question: 'What is the tone of the student who asks about "cool pavements"?',
      options: ['Curious and interested in the technical aspects.', 'Bored.', 'Argumentative.'],
      correctAnswer: 'Curious and interested in the technical aspects.',
      points: 1
    }
  ]
};

// SHARDS 7-8: Lecture (Biology - Mycorrhizal Networks)
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Lecture: The Wood Wide Web',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's7', 1),
      type: 'multiple-choice',
      question: 'What is a "Mycorrhizal Network"?',
      options: ['An underground network of fungal filaments that connect trees and plants.', 'A group of forest animals.', 'A type of internet.'],
      correctAnswer: 'An underground network of fungal filaments that connect trees and plants.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 2),
      type: 'multiple-choice',
      question: 'What type of relationship is this usually?',
      options: ['Symbiotic (specifically mutualistic).', 'Parasitic.', 'Competitive.'],
      correctAnswer: 'Symbiotic (specifically mutualistic).',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 3),
      type: 'multiple-choice',
      question: 'What do the fungi provide to the trees?',
      options: ['Water and minerals (like phosphorus and nitrogen).', 'Sugar.', 'Oxygen.'],
      correctAnswer: 'Water and minerals (like phosphorus and nitrogen).',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 4),
      type: 'multiple-choice',
      question: 'What do the trees provide to the fungi?',
      options: ['Carbohydrates (sugars) produced through photosynthesis.', 'Water.', 'Soil.'],
      correctAnswer: 'Carbohydrates (sugars) produced through photosynthesis.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 5),
      type: 'multiple-choice',
      question: 'What is a "Mother Tree"?',
      options: ['A large, older tree that acts as a hub in the network, helping seedlings.', 'The first tree ever planted.', 'A tree that gives birth to animals.'],
      correctAnswer: 'A large, older tree that acts as a hub in the network, helping seedlings.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 6),
      type: 'multiple-choice',
      question: 'How do trees "communicate" via the network?',
      options: ['By sending chemical and electrical signals.', 'By whispering.', 'By touching leaves.'],
      correctAnswer: 'By sending chemical and electrical signals.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 7),
      type: 'multiple-choice',
      question: 'What is "allelopathy"?',
      options: ['When a plant releases chemicals to inhibit the growth of others.', 'A type of friendship.', 'A disease.'],
      correctAnswer: 'When a plant releases chemicals to inhibit the growth of others.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 8),
      type: 'multiple-choice',
      question: 'What does "filament" mean?',
      options: ['A slender thread-like object or fiber.', 'A very bright light.', 'A type of rock.'],
      correctAnswer: 'A slender thread-like object or fiber.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 9),
      type: 'multiple-choice',
      question: 'What is the significance of this network for forest resilience?',
      options: ['It allows for resource sharing and collective defense signals.', 'It makes the forest look better.', 'It has no significance.'],
      correctAnswer: 'It allows for resource sharing and collective defense signals.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 10),
      type: 'multiple-choice',
      question: 'What is the professor\'s main point about "competition"?',
      options: ['Forests are more cooperative than we previously thought.', 'Survival of the fittest is the only rule.', 'Trees hate each other.'],
      correctAnswer: 'Forests are more cooperative than we previously thought.',
      points: 1
    }
  ]
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Lecture: Parasitic Fungi',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's8', 1),
      type: 'multiple-choice',
      question: 'What is a "parasitic" relationship?',
      options: ['One organism benefits while the other is harmed.', 'Both benefit.', 'Neither benefits.'],
      correctAnswer: 'One organism benefits while the other is harmed.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 2),
      type: 'multiple-choice',
      question: 'What is a "host"?',
      options: ['The organism that the parasite lives on or in.', 'Someone who has a party.', 'The parasite itself.'],
      correctAnswer: 'The organism that the parasite lives on or in.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 3),
      type: 'multiple-choice',
      question: 'What is an example of a parasitic fungus mentioned?',
      options: ['The "honey fungus" (Armillaria).', 'Mushrooms from the supermarket.', 'Truffles.'],
      correctAnswer: 'The "honey fungus" (Armillaria).',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 4),
      type: 'multiple-choice',
      question: 'How does Armillaria attack trees?',
      options: ['It invades the roots and takes nutrients, eventually killing the tree.', 'It eats the leaves.', 'It causes the tree to fall over instantly.'],
      correctAnswer: 'It invades the roots and takes nutrients, eventually killing the tree.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 5),
      type: 'multiple-choice',
      question: 'What is a "pathogen"?',
      options: ['A bacterium, virus, or other microorganism that can cause disease.', 'A type of soil.', 'A forest path.'],
      correctAnswer: 'A bacterium, virus, or other microorganism that can cause disease.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 6),
      type: 'multiple-choice',
      question: 'What does "exponential" growth mean?',
      options: ['Growth that becomes increasingly rapid.', 'Growth that is very slow.', 'Growth that stops.'],
      correctAnswer: 'Growth that becomes increasingly rapid.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 7),
      type: 'multiple-choice',
      question: 'How can parasitic fungi benefit an ecosystem overall?',
      options: ['By removing weak trees and creating space for new growth.', 'They never benefit the ecosystem.', 'By producing honey.'],
      correctAnswer: 'By removing weak trees and creating space for new growth.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 8),
      type: 'multiple-choice',
      question: 'What is "spore dispersal"?',
      options: ['The process of spreading reproductive units to new locations.', 'Eating spores.', 'Cleaning the forest.'],
      correctAnswer: 'The process of spreading reproductive units to new locations.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 9),
      type: 'multiple-choice',
      question: 'What does "lethal" mean?',
      options: ['Sufficient to cause death.', 'Very small.', 'Colorful.'],
      correctAnswer: 'Sufficient to cause death.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 10),
      type: 'multiple-choice',
      question: 'What is the professor\'s transition at the end?',
      options: ['Moving from parasitic relationships to the role of decomposers.', 'Ending the class.', 'Taking a break.'],
      correctAnswer: 'Moving from parasitic relationships to the role of decomposers.',
      points: 1
    }
  ]
};

// SHARDS 9-10: Lecture (History - The Silk Road)
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'listening',
  title: 'Lecture: The Origin of the Silk Road',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's9', 1),
      type: 'multiple-choice',
      question: 'What was the "Silk Road"?',
      options: ['A network of trade routes connecting the East and West.', 'A road made of silk.', 'A path for explorers only.'],
      correctAnswer: 'A network of trade routes connecting the East and West.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 2),
      type: 'multiple-choice',
      question: 'Which dynasty in China is associated with its opening?',
      options: ['The Han Dynasty.', 'The Ming Dynasty.', 'The Qing Dynasty.'],
      correctAnswer: 'The Han Dynasty.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 3),
      type: 'multiple-choice',
      question: 'Why was silk so valuable?',
      options: ['It was rare, soft, and only produced in China for a long time.', 'It was very heavy.', 'It was used as food.'],
      correctAnswer: 'It was rare, soft, and only produced in China for a long time.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 4),
      type: 'multiple-choice',
      question: 'What was a "caravan"?',
      options: ['A group of people, especially traders or pilgrims, traveling together across a desert.', 'A type of boat.', 'A modern van.'],
      correctAnswer: 'A group of people, especially traders or pilgrims, traveling together across a desert.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 5),
      type: 'multiple-choice',
      question: 'What were "caravanserais"?',
      options: ['Roadside inns where travelers could rest and recover.', 'The leaders of the caravans.', 'A type of silk.'],
      correctAnswer: 'Roadside inns where travelers could rest and recover.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 6),
      type: 'multiple-choice',
      question: 'What other goods were traded besides silk?',
      options: ['Spices, tea, porcelain, and precious metals.', 'Cars and computers.', 'Plastic.'],
      correctAnswer: 'Spices, tea, porcelain, and precious metals.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 7),
      type: 'multiple-choice',
      question: 'What does "merchandise" mean?',
      options: ['Goods to be bought and sold.', 'Money.', 'A shopkeeper.'],
      correctAnswer: 'Goods to be bought and sold.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 8),
      type: 'multiple-choice',
      question: 'What role did "middlemen" play?',
      options: ['They bought goods from one area and sold them to the next, increasing the price.', 'They were in the middle of the road.', 'They were the farmers.'],
      correctAnswer: 'They bought goods from one area and sold them to the next, increasing the price.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 9),
      type: 'multiple-choice',
      question: 'What was the major geographic challenge?',
      options: ['Crossing the Taklamakan Desert and the Pamir Mountains.', 'Crossing the Atlantic.', 'A deep forest.'],
      correctAnswer: 'Crossing the Taklamakan Desert and the Pamir Mountains.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 10),
      type: 'multiple-choice',
      question: 'What is the professor\'s main thesis?',
      options: ['The Silk Road was more than a trade route; it was a path for cultural exchange.', 'The Silk Road was too dangerous.', 'Only silk was traded.'],
      correctAnswer: 'The Silk Road was more than a trade route; it was a path for cultural exchange.',
      points: 1
    }
  ]
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'listening',
  title: 'Lecture: Cultural Exchange on the Silk Road',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's10', 1),
      type: 'multiple-choice',
      question: 'How did religions spread along the Silk Road?',
      options: ['Buddhism, Islam, and Christianity traveled with merchants and monks.', 'Through TV.', 'They didn\'t spread.'],
      correctAnswer: 'Buddhism, Islam, and Christianity traveled with merchants and monks.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 2),
      type: 'multiple-choice',
      question: 'What major technology spread from China to the West?',
      options: ['Paper-making and gunpowder.', 'The steam engine.', 'The telephone.'],
      correctAnswer: 'Paper-making and gunpowder.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 3),
      type: 'multiple-choice',
      question: 'What is "syncretism"?',
      options: ['The merging of different beliefs and cultures.', 'A type of science.', 'A disease spread by trade.'],
      correctAnswer: 'The merging of different beliefs and cultures.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 4),
      type: 'multiple-choice',
      question: 'What negative thing was also spread by the trade routes?',
      options: ['Diseases, such as the Black Death (Bubonic Plague).', 'Bad weather.', 'Laziness.'],
      correctAnswer: 'Diseases, such as the Black Death (Bubonic Plague).',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 5),
      type: 'multiple-choice',
      question: 'What does "interaction" mean?',
      options: ['Reciprocal action or influence.', 'Being alone.', 'Silent waiting.'],
      correctAnswer: 'Reciprocal action or influence.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 6),
      type: 'multiple-choice',
      question: 'How did the Silk Road decline?',
      options: ['The discovery of sea routes to Asia made land trade less profitable.', 'Everyone stopped trading.', 'The silk ran out.'],
      correctAnswer: 'The discovery of sea routes to Asia made land trade less profitable.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 7),
      type: 'multiple-choice',
      question: 'What is "cosmopolitan"?',
      options: ['Familiar with and at ease in many different countries and cultures.', 'Living in the country.', 'A type of drink only.'],
      correctAnswer: 'Familiar with and at ease in many different countries and cultures.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 8),
      type: 'multiple-choice',
      question: 'Which city is mentioned as a major Silk Road hub?',
      options: ['Samarkand.', 'London.', 'New York.'],
      correctAnswer: 'Samarkand.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 9),
      type: 'multiple-choice',
      question: 'What does "legacy" mean?',
      options: ['Something handed down from an ancestor or from the past.', 'A very fast runner.', 'A type of money.'],
      correctAnswer: 'Something handed down from an ancestor or from the past.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 10),
      type: 'multiple-choice',
      question: 'What is the professor\'s concluding thought?',
      options: ['The Silk Road shaped the modern world through its unprecedented level of connectivity.', 'Trade is bad.', 'The Silk Road was a mistake.'],
      correctAnswer: 'The Silk Road shaped the modern world through its unprecedented level of connectivity.',
      points: 1
    }
  ]
};

export const B2_WEEK_8 = createShardedToeflUnit(
  'toefl-b2-w8',
  'Week 8: Listening - Pragmatics & Natural Sciences',
  'Developing pragmatic understanding and exploring topics in natural sciences and history.',
  ['Understand speaker intent and degrees of certainty', 'Analyze complex lectures on biology and the Silk Road', 'Handle academic discussions on urban environmental issues'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
