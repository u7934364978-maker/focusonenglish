import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 5;
const LEVEL = 'b2';

// SHARDS 1-2: Listening Vocabulary & Functional Expressions
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Campus Life: Functional Language',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'In a conversation, what does "I catch your drift" mean?',
      options: ['I understand what you are implying.', 'I disagree with your point.', 'I am lost in the conversation.'],
      correctAnswer: 'I understand what you are implying.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'Which phrase is used to signal a "clarification"?',
      options: ['In other words...', 'Furthermore...', 'On the contrary...'],
      correctAnswer: 'In other words...',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'If a student says "I\'m swamped," what do they mean?',
      options: ['They have too much work.', 'They are feeling sick.', 'They are very happy.'],
      correctAnswer: 'They have too much work.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'What does "to cut corners" imply in an academic context?',
      options: ['Doing something poorly to save time.', 'Taking a shortcut to class.', 'Improving the quality of work.'],
      correctAnswer: 'Doing something poorly to save time.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'Which expression indicates strong agreement?',
      options: ['You can say that again!', 'I suppose so.', 'Tell me about it.'],
      correctAnswer: 'You can say that again!',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'What does "to touch base" mean?',
      options: ['To contact someone briefly.', 'To play a sport.', 'To finish a project.'],
      correctAnswer: 'To contact someone briefly.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'If something is "up in the air," it is:',
      options: ['Undecided.', 'Flying.', 'Obvious.'],
      correctAnswer: 'Undecided.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'What is a "registrar"?',
      options: ['The official responsible for student records.', 'A type of textbook.', 'A medical professional on campus.'],
      correctAnswer: 'The official responsible for student records.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What does "to drop a course" mean?',
      options: ['To stop attending and remove it from your schedule.', 'To fail an exam.', 'To finish a degree.'],
      correctAnswer: 'To stop attending and remove it from your schedule.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'Identify the "filler" word often used in spoken English to indicate hesitation:',
      options: ['Um', 'Therefore', 'Consequently'],
      correctAnswer: 'Um',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Academic Listening: Transition Words',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'Which word signals a "contrast" in a lecture?',
      options: ['Conversely', 'Moreover', 'Similarly'],
      correctAnswer: 'Conversely',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'What does a professor mean when they say "To put it simply..."?',
      options: ['They are about to explain a complex idea easily.', 'They are ending the lecture.', 'They are asking a question.'],
      correctAnswer: 'They are about to explain a complex idea easily.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'Which phrase introduces an "illustration" or example?',
      options: ['Case in point...', 'In summary...', 'As a result...'],
      correctAnswer: 'Case in point...',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'What does "notwithstanding" mean in a formal lecture?',
      options: ['Despite', 'Because of', 'Instead of'],
      correctAnswer: 'Despite',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'If a speaker says "incidentally," they are:',
      options: ['Adding a related but less important point.', 'Stating the main conclusion.', 'Repeating a previous point.'],
      correctAnswer: 'Adding a related but less important point.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'Which word indicates a "logical consequence"?',
      options: ['Hence', 'Albeit', 'Yet'],
      correctAnswer: 'Hence',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What is the function of the phrase "Moving on..."?',
      options: ['To transition to a new topic.', 'To ask students to leave.', 'To emphasize a current point.'],
      correctAnswer: 'To transition to a new topic.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'What does "with respect to" mean?',
      options: ['Regarding or concerning.', 'In a polite way.', 'With high honors.'],
      correctAnswer: 'Regarding or concerning.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'Which word suggests a "possibility"?',
      options: ['Arguably', 'Definitely', 'Certainly'],
      correctAnswer: 'Arguably',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'What does "to summarize" entail?',
      options: ['Briefly stating the main points.', 'Writing a long essay.', 'Giving a detailed example.'],
      correctAnswer: 'Briefly stating the main points.',
      points: 1
    }
  ]
};

// SHARDS 3-4: Short Conversations (Campus Issues)
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Conversation: Missing a Deadline',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's3', 1),
      type: 'multiple-choice',
      question: 'Why does the student go to see the professor?',
      options: ['To request an extension.', 'To complain about a grade.', 'To ask for a textbook.'],
      correctAnswer: 'To request an extension.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 2),
      type: 'multiple-choice',
      question: 'What reason does the student give for the delay?',
      options: ['A family emergency.', 'Technical problems with their laptop.', 'They forgot the date.'],
      correctAnswer: 'Technical problems with their laptop.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 3),
      type: 'multiple-choice',
      question: 'How does the professor initially react?',
      options: ['She is hesitant to grant the request.', 'She is immediately supportive.', 'She is angry.'],
      correctAnswer: 'She is hesitant to grant the request.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 4),
      type: 'multiple-choice',
      question: 'What evidence does the professor ask for?',
      options: ['A receipt from the repair shop.', 'An email from the IT department.', 'A note from a doctor.'],
      correctAnswer: 'A receipt from the repair shop.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 5),
      type: 'multiple-choice',
      question: 'What is the final agreement?',
      options: ['The student can submit it by Friday with a small penalty.', 'The student must submit it today.', 'The student fails the assignment.'],
      correctAnswer: 'The student can submit it by Friday with a small penalty.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 6),
      type: 'multiple-choice',
      question: 'What does the student mean when they say "I\'ve already got most of it done"?',
      options: ['The work is nearly finished.', 'The work is just starting.', 'They haven\'t started yet.'],
      correctAnswer: 'The work is nearly finished.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 7),
      type: 'multiple-choice',
      question: 'What does "penalty" mean in this context?',
      options: ['A reduction in points.', 'A physical punishment.', 'A fine of money.'],
      correctAnswer: 'A reduction in points.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 8),
      type: 'multiple-choice',
      question: 'Why does the professor mention the "syllabus"?',
      options: ['To remind the student of the existing rules.', 'To change the course content.', 'To show off their work.'],
      correctAnswer: 'To remind the student of the existing rules.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 9),
      type: 'multiple-choice',
      question: 'How would you describe the student\'s tone?',
      options: ['Apologetic.', 'Demanding.', 'Indifferent.'],
      correctAnswer: 'Apologetic.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 10),
      type: 'multiple-choice',
      question: 'What will the student likely do next?',
      options: ['Finish the assignment and get a repair receipt.', 'Go home and sleep.', 'Drop the class.'],
      correctAnswer: 'Finish the assignment and get a repair receipt.',
      points: 1
    }
  ]
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Conversation: Dormitory Maintenance',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's4', 1),
      type: 'multiple-choice',
      question: 'What is the student\'s primary problem?',
      options: ['A leaking pipe in the bathroom.', 'A broken window.', 'Noise from the neighbors.'],
      correctAnswer: 'A leaking pipe in the bathroom.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 2),
      type: 'multiple-choice',
      question: 'Why is the student particularly frustrated?',
      options: ['They have reported it twice already.', 'It is ruining their books.', 'The water is cold.'],
      correctAnswer: 'They have reported it twice already.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 3),
      type: 'multiple-choice',
      question: 'What does the housing officer say about the delay?',
      options: ['There is a backlog of requests due to a storm.', 'They lost the student\'s file.', 'The plumber is on vacation.'],
      correctAnswer: 'There is a backlog of requests due to a storm.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 4),
      type: 'multiple-choice',
      question: 'What is the "priority" system based on?',
      options: ['The severity of the issue.', 'Who called first.', 'The student\'s year of study.'],
      correctAnswer: 'The severity of the issue.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 5),
      type: 'multiple-choice',
      question: 'What does the officer offer to do?',
      options: ['Mark the request as "Urgent".', 'Give the student a new room.', 'Fix it themselves.'],
      correctAnswer: 'Mark the request as "Urgent".',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 6),
      type: 'multiple-choice',
      question: 'What does "backlog" mean?',
      options: ['A large amount of unfinished work.', 'A type of wooden log.', 'The back of a building.'],
      correctAnswer: 'A large amount of unfinished work.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 7),
      type: 'multiple-choice',
      question: 'What time does the officer say someone might come?',
      options: ['Between 2 PM and 4 PM.', 'Tomorrow morning.', 'Right now.'],
      correctAnswer: 'Between 2 PM and 4 PM.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 8),
      type: 'multiple-choice',
      question: 'What must the student ensure?',
      options: ['That someone is in the room to let the plumber in.', 'That they have cash to pay.', 'That they clean the bathroom.'],
      correctAnswer: 'That someone is in the room to let the plumber in.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 9),
      type: 'multiple-choice',
      question: 'How does the student feel at the end of the call?',
      options: ['Relieved but cautious.', 'Extremely angry.', 'Completely satisfied.'],
      correctAnswer: 'Relieved but cautious.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 10),
      type: 'multiple-choice',
      question: 'What is the main purpose of this conversation?',
      options: ['To resolve a maintenance issue.', 'To apply for housing.', 'To complain about the cost of tuition.'],
      correctAnswer: 'To resolve a maintenance issue.',
      points: 1
    }
  ]
};

// SHARDS 5-6: Academic Discussions
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'Discussion: Environmental Science',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's5', 1),
      type: 'multiple-choice',
      question: 'What is the main topic of the discussion?',
      options: ['The impact of microplastics on marine life.', 'The history of the fishing industry.', 'New methods for desalination.'],
      correctAnswer: 'The impact of microplastics on marine life.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 2),
      type: 'multiple-choice',
      question: 'What does the professor say about the "bioaccumulation"?',
      options: ['Toxins become more concentrated as they move up the food chain.', 'Plastics dissolve in water over time.', 'Fish learn to avoid eating plastic.'],
      correctAnswer: 'Toxins become more concentrated as they move up the food chain.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 3),
      type: 'multiple-choice',
      question: 'Why does one student mention "clothing"?',
      options: ['To point out that synthetic fibers are a source of microplastics.', 'To ask about a lab coat.', 'To discuss the fashion industry.'],
      correctAnswer: 'To point out that synthetic fibers are a source of microplastics.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 4),
      type: 'multiple-choice',
      question: 'According to the professor, what is a "primary microplastic"?',
      options: ['Small particles intentionally manufactured for products like exfoliants.', 'Fragments from larger plastic items.', 'Plastics found in the deep ocean.'],
      correctAnswer: 'Small particles intentionally manufactured for products like exfoliants.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 5),
      type: 'multiple-choice',
      question: 'What is the professor\'s attitude toward current regulations?',
      options: ['He thinks they are insufficient.', 'He believes they are perfectly effective.', 'He is unaware of any regulations.'],
      correctAnswer: 'He thinks they are insufficient.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 6),
      type: 'multiple-choice',
      question: 'What does "insufficient" mean?',
      options: ['Not enough.', 'Very good.', 'Too much.'],
      correctAnswer: 'Not enough.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 7),
      type: 'multiple-choice',
      question: 'What solution does a student suggest?',
      options: ['Better filtration in washing machines.', 'Banning all plastic use immediately.', 'Stopping all fishing.'],
      correctAnswer: 'Better filtration in washing machines.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 8),
      type: 'multiple-choice',
      question: 'What is the significance of the "gyres"?',
      options: ['They are areas where plastic accumulates in the ocean.', 'They are a type of fish.', 'They are deep-sea trenches.'],
      correctAnswer: 'They are areas where plastic accumulates in the ocean.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 9),
      type: 'multiple-choice',
      question: 'What does the professor imply about the future?',
      options: ['The problem will require global cooperation to solve.', 'It will solve itself.', 'Plastics will eventually disappear.'],
      correctAnswer: 'The problem will require global cooperation to solve.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 10),
      type: 'multiple-choice',
      question: 'What is the purpose of the professor\'s question at the end?',
      options: ['To prompt students to think about economic impacts.', 'To check attendance.', 'To end the class early.'],
      correctAnswer: 'To prompt students to think about economic impacts.',
      points: 1
    }
  ]
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Discussion: Psychology - Cognitive Dissonance',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's6', 1),
      type: 'multiple-choice',
      question: 'How does the professor define "Cognitive Dissonance"?',
      options: ['The mental discomfort of holding two conflicting beliefs.', 'A type of memory loss.', 'The inability to focus on a task.'],
      correctAnswer: 'The mental discomfort of holding two conflicting beliefs.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 2),
      type: 'multiple-choice',
      question: 'What example does the student use to illustrate the concept?',
      options: ['A person who smokes despite knowing it is unhealthy.', 'A student who studies too hard.', 'Someone who forgets their keys.'],
      correctAnswer: 'A person who smokes despite knowing it is unhealthy.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 3),
      type: 'multiple-choice',
      question: 'What are the three ways people typically reduce dissonance?',
      options: ['Changing beliefs, acquiring new info, or reducing importance.', 'Crying, shouting, or sleeping.', 'Buying things, eating, or traveling.'],
      correctAnswer: 'Changing beliefs, acquiring new info, or reducing importance.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 4),
      type: 'multiple-choice',
      question: 'What does "rationalization" mean in this context?',
      options: ['Creating logical excuses to justify one\'s behavior.', 'Using math to solve a problem.', 'Acting based on pure instinct.'],
      correctAnswer: 'Creating logical excuses to justify one\'s behavior.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 5),
      type: 'multiple-choice',
      question: 'What was the outcome of the famous Festinger experiment?',
      options: ['People paid less enjoyed the boring task more.', 'People paid more worked harder.', 'No one finished the task.'],
      correctAnswer: 'People paid less enjoyed the boring task more.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 6),
      type: 'multiple-choice',
      question: 'Why did those paid $1 change their opinion?',
      options: ['To justify why they did something boring for so little money.', 'Because they were afraid of the researcher.', 'Because they were actually interested.'],
      correctAnswer: 'To justify why they did something boring for so little money.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 7),
      type: 'multiple-choice',
      question: 'What does "conflicting" mean?',
      options: ['Clashing or contradictory.', 'Harmonious.', 'Identical.'],
      correctAnswer: 'Clashing or contradictory.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 8),
      type: 'multiple-choice',
      question: 'How does the professor feel about the theory\'s relevance today?',
      options: ['It is still fundamental to social psychology.', 'It is outdated and ignored.', 'It only applies to small groups.'],
      correctAnswer: 'It is still fundamental to social psychology.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 9),
      type: 'multiple-choice',
      question: 'What is the main goal of the human mind according to this theory?',
      options: ['To maintain internal consistency.', 'To be as creative as possible.', 'To remember every detail.'],
      correctAnswer: 'To maintain internal consistency.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 10),
      type: 'multiple-choice',
      question: 'What will the next discussion likely cover?',
      options: ['Self-perception theory.', 'The history of Freud.', 'Neuroscience techniques.'],
      correctAnswer: 'Self-perception theory.',
      points: 1
    }
  ]
};

// SHARDS 7-8: Lecture - Natural Science (Marine Biology)
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Lecture: Hydrothermal Vents',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's7', 1),
      type: 'multiple-choice',
      question: 'Where are hydrothermal vents typically located?',
      options: ['On the deep ocean floor near tectonic plates.', 'In shallow coral reefs.', 'In freshwater lakes.'],
      correctAnswer: 'On the deep ocean floor near tectonic plates.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 2),
      type: 'multiple-choice',
      question: 'What process supports life in these vents, instead of photosynthesis?',
      options: ['Chemosynthesis.', 'Respiration.', 'Decomposition.'],
      correctAnswer: 'Chemosynthesis.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 3),
      type: 'multiple-choice',
      question: 'What is the primary source of energy for vent bacteria?',
      options: ['Hydrogen sulfide.', 'Sunlight.', 'Small fish.'],
      correctAnswer: 'Hydrogen sulfide.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 4),
      type: 'multiple-choice',
      question: 'How do giant tube worms survive without a mouth or stomach?',
      options: ['They have a symbiotic relationship with bacteria.', 'They absorb nutrients through their skin.', 'They eat microscopic algae.'],
      correctAnswer: 'They have a symbiotic relationship with bacteria.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 5),
      type: 'multiple-choice',
      question: 'What does "symbiotic" imply?',
      options: ['A mutually beneficial relationship.', 'A parasitic relationship.', 'A predatory relationship.'],
      correctAnswer: 'A mutually beneficial relationship.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 6),
      type: 'multiple-choice',
      question: 'What is a "Black Smoker"?',
      options: ['A type of vent that ejects dark, mineral-rich water.', 'A species of deep-sea shark.', 'A volcanic eruption.'],
      correctAnswer: 'A type of vent that ejects dark, mineral-rich water.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 7),
      type: 'multiple-choice',
      question: 'Why was the discovery of these vents in 1977 so revolutionary?',
      options: ['It proved that life could exist without sunlight.', 'It confirmed the existence of Atlantis.', 'It helped find sunken treasure.'],
      correctAnswer: 'It proved that life could exist without sunlight.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 8),
      type: 'multiple-choice',
      question: 'What is the temperature of the water inside the vent?',
      options: ['Up to 400 degrees Celsius.', 'Freezing.', 'Room temperature.'],
      correctAnswer: 'Up to 400 degrees Celsius.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 9),
      type: 'multiple-choice',
      question: 'Why doesn\'t the water boil at such high temperatures?',
      options: ['Due to the extreme pressure at those depths.', 'Because it is salt water.', 'Because of the chemicals.'],
      correctAnswer: 'Due to the extreme pressure at those depths.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 10),
      type: 'multiple-choice',
      question: 'What does the professor suggest about the origins of life?',
      options: ['Life might have started in hydrothermal vents.', 'Life definitely started in the forest.', 'Life was brought by meteors.'],
      correctAnswer: 'Life might have started in hydrothermal vents.',
      points: 1
    }
  ]
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Lecture: Marine Biology - Bioluminescence',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's8', 1),
      type: 'multiple-choice',
      question: 'What is "Bioluminescence"?',
      options: ['The production of light by a living organism.', 'The ability of fish to swim fast.', 'A type of underwater volcano.'],
      correctAnswer: 'The production of light by a living organism.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 2),
      type: 'multiple-choice',
      question: 'Which chemical reaction produces this light?',
      options: ['Luciferin reacting with oxygen.', 'Carbon reacting with water.', 'Hydrogen reacting with salt.'],
      correctAnswer: 'Luciferin reacting with oxygen.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 3),
      type: 'multiple-choice',
      question: 'Why do deep-sea creatures use bioluminescence?',
      options: ['To attract prey, communicate, or distract predators.', 'To keep warm.', 'To see their surroundings clearly.'],
      correctAnswer: 'To attract prey, communicate, or distract predators.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 4),
      type: 'multiple-choice',
      question: 'What is "counter-illumination"?',
      options: ['Producing light on the underside to blend with sunlight from above.', 'Flashing light to blind enemies.', 'Using light to signal mates.'],
      correctAnswer: 'Producing light on the underside to blend with sunlight from above.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 5),
      type: 'multiple-choice',
      question: 'Which animal is famous for its glowing "lure"?',
      options: ['The Anglerfish.', 'The Great White Shark.', 'The Blue Whale.'],
      correctAnswer: 'The Anglerfish.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 6),
      type: 'multiple-choice',
      question: 'What is "luciferase"?',
      options: ['An enzyme that catalyzes the light-producing reaction.', 'A type of seaweed.', 'A deep-sea trench.'],
      correctAnswer: 'An enzyme that catalyzes the light-producing reaction.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 7),
      type: 'multiple-choice',
      question: 'What color is most bioluminescent light in the ocean?',
      options: ['Blue or green.', 'Red.', 'Yellow.'],
      correctAnswer: 'Blue or green.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 8),
      type: 'multiple-choice',
      question: 'Why is blue/green light more common?',
      options: ['It travels further through water.', 'It is easier to produce.', 'Creatures like those colors better.'],
      correctAnswer: 'It travels further through water.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 9),
      type: 'multiple-choice',
      question: 'How do "burglar alarm" displays work?',
      options: ['Creatures flash light to attract a larger predator to eat their attacker.', 'They make a loud noise.', 'They change their shape.'],
      correctAnswer: 'Creatures flash light to attract a larger predator to eat their attacker.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 10),
      type: 'multiple-choice',
      question: 'What does "catalyze" mean?',
      options: ['To speed up a chemical reaction.', 'To stop a process.', 'To create heat.'],
      correctAnswer: 'To speed up a chemical reaction.',
      points: 1
    }
  ]
};

// SHARDS 9-10: Lecture - Art History (Impressionism)
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'listening',
  title: 'Lecture: The Rise of Impressionism',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's9', 1),
      type: 'multiple-choice',
      question: 'In which city did Impressionism originate?',
      options: ['Paris.', 'London.', 'New York.'],
      correctAnswer: 'Paris.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 2),
      type: 'multiple-choice',
      question: 'What was the primary goal of Impressionist painters?',
      options: ['To capture the fleeting effects of light and color.', 'To paint historical events accurately.', 'To create perfectly smooth surfaces.'],
      correctAnswer: 'To capture the fleeting effects of light and color.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 3),
      type: 'multiple-choice',
      question: 'What does "en plein air" mean?',
      options: ['Painting outdoors.', 'Painting with many colors.', 'Painting on large canvases.'],
      correctAnswer: 'Painting outdoors.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 4),
      type: 'multiple-choice',
      question: 'Which invention allowed artists to paint more easily outdoors?',
      options: ['The collapsible paint tube.', 'The camera.', 'The steam engine.'],
      correctAnswer: 'The collapsible paint tube.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 5),
      type: 'multiple-choice',
      question: 'How did the public initially react to Impressionism?',
      options: ['With hostility and ridicule.', 'With immediate praise.', 'With complete indifference.'],
      correctAnswer: 'With hostility and ridicule.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 6),
      type: 'multiple-choice',
      question: 'What does "fleeting" mean?',
      options: ['Lasting for a very short time.', 'Moving very fast.', 'Very bright.'],
      correctAnswer: 'Lasting for a very short time.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 7),
      type: 'multiple-choice',
      question: 'Which artist painted "Impression, Sunrise"?',
      options: ['Claude Monet.', 'Pierre-Auguste Renoir.', 'Edgar Degas.'],
      correctAnswer: 'Claude Monet.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 8),
      type: 'multiple-choice',
      question: 'What was characteristic of Impressionist brushstrokes?',
      options: ['Short, thick, and visible.', 'Long, thin, and hidden.', 'Perfectly geometric.'],
      correctAnswer: 'Short, thick, and visible.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 9),
      type: 'multiple-choice',
      question: 'Why did Impressionists avoid using black paint?',
      options: ['They believed shadows were composed of mixed colors.', 'Black paint was too expensive.', 'They were forbidden by the Academy.'],
      correctAnswer: 'They believed shadows were composed of mixed colors.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 10),
      type: 'multiple-choice',
      question: 'What does the professor say about the "Academy"?',
      options: ['It was the conservative institution that controlled the art world.', 'It was a school for Impressionists.', 'It was a type of museum.'],
      correctAnswer: 'It was the conservative institution that controlled the art world.',
      points: 1
    }
  ]
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'listening',
  title: 'Lecture: Japanese Influence on Impressionism',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's10', 1),
      type: 'multiple-choice',
      question: 'What is "Japonisme"?',
      options: ['The influence of Japanese art on Western culture.', 'A type of Japanese food.', 'A style of Japanese architecture.'],
      correctAnswer: 'The influence of Japanese art on Western culture.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 2),
      type: 'multiple-choice',
      question: 'Which specific Japanese art form influenced Impressionists?',
      options: ['Ukiyo-e woodblock prints.', 'Origami.', 'Kabuki theater.'],
      correctAnswer: 'Ukiyo-e woodblock prints.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 3),
      type: 'multiple-choice',
      question: 'What compositional element did they adopt from these prints?',
      options: ['Asymmetrical layouts and unusual angles.', 'Strict symmetry.', 'Centralized focal points.'],
      correctAnswer: 'Asymmetrical layouts and unusual angles.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 4),
      type: 'multiple-choice',
      question: 'What does "asymmetrical" mean?',
      options: ['Not identical on both sides.', 'Perfectly balanced.', 'Very colorful.'],
      correctAnswer: 'Not identical on both sides.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 5),
      type: 'multiple-choice',
      question: 'How did Japanese prints treat "space"?',
      options: ['With flat areas of color and less emphasis on depth.', 'With extreme realistic perspective.', 'By leaving large areas empty.'],
      correctAnswer: 'With flat areas of color and less emphasis on depth.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 6),
      type: 'multiple-choice',
      question: 'Which artist was particularly fond of Japanese fans and bridges?',
      options: ['Claude Monet.', 'Vincent van Gogh.', 'Mary Cassatt.'],
      correctAnswer: 'Claude Monet.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 7),
      type: 'multiple-choice',
      question: 'Why did these prints start arriving in Europe in the 1850s?',
      options: ['Japan opened its ports to international trade.', 'There was a war.', 'They were discovered in a shipwreck.'],
      correctAnswer: 'Japan opened its ports to international trade.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 8),
      type: 'multiple-choice',
      question: 'What is a "motif"?',
      options: ['A recurring theme or pattern in art.', 'A type of paint brush.', 'A frame for a painting.'],
      correctAnswer: 'A recurring theme or pattern in art.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 9),
      type: 'multiple-choice',
      question: 'What does the professor conclude about Impressionism?',
      options: ['It was a bridge between traditional and modern art.', 'It was a complete failure.', 'It had no outside influences.'],
      correctAnswer: 'It was a bridge between traditional and modern art.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 10),
      type: 'multiple-choice',
      question: 'What will be the topic of the next lecture?',
      options: ['Post-Impressionism.', 'The Renaissance.', 'Sculpture techniques.'],
      correctAnswer: 'Post-Impressionism.',
      points: 1
    }
  ]
};

export const B2_WEEK_5 = createShardedToeflUnit(
  'toefl-b2-w5',
  'Week 5: Listening - Campus Life & Academic Discussions',
  'Mastering the listening section with focus on functional language and complex academic discussions.',
  ['Understand functional language and idioms in campus life', 'Analyze complex academic discussions on environmental science and psychology', 'Identify speaker intent and rhetorical devices'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
