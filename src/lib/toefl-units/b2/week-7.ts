import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 7;
const LEVEL = 'b2';

// SHARDS 1-2: Identifying Lecture Organization
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Lecture Structures: Transitions',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'A professor says, "First, let\'s look at X, then Y, and finally Z." What is the organizational pattern?',
      options: ['Chronological/Sequential.', 'Comparison and Contrast.', 'Cause and Effect.'],
      correctAnswer: 'Chronological/Sequential.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'Which phrase signals a "Comparison"?',
      options: ['By the same token...', 'As a result...', 'For instance...'],
      correctAnswer: 'By the same token...',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'If a speaker says "This leads to...", they are signaling:',
      options: ['A causal relationship.', 'A summary.', 'A definition.'],
      correctAnswer: 'A causal relationship.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'Which word indicates a "classification" structure?',
      options: ['Categories', 'However', 'Therefore'],
      correctAnswer: 'Categories',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'What is the function of the phrase "In contrast to..."?',
      options: ['To show differences between two things.', 'To show similarities.', 'To provide an example.'],
      correctAnswer: 'To show differences between two things.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'A professor says, "To solve this, we must..." What is the structure?',
      options: ['Problem and Solution.', 'Biography.', 'Narrative.'],
      correctAnswer: 'Problem and Solution.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'Which phrase introduces a "summary of steps"?',
      options: ['To recap the process...', 'To change the subject...', 'To argue that...'],
      correctAnswer: 'To recap the process...',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'What does "subsequently" mean in a sequence?',
      options: ['Afterward.', 'Beforehand.', 'Simultaneously.'],
      correctAnswer: 'Afterward.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'If a speaker says "It boils down to...", they are:',
      options: ['Simplifying or summarizing the main point.', 'Cooking.', 'Asking a question.'],
      correctAnswer: 'Simplifying or summarizing the main point.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'Which word signals "additional information"?',
      options: ['Furthermore', 'Conversely', 'Nevertheless'],
      correctAnswer: 'Furthermore',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Identifying Relationships between Ideas',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'What is the relationship between "Pollen" and "Allergies" in a typical lecture?',
      options: ['Cause and Effect.', 'Comparison.', 'Definition.'],
      correctAnswer: 'Cause and Effect.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'If a professor mentions a "case study," what is the purpose?',
      options: ['To provide a concrete example of a theory.', 'To prove the professor is right.', 'To waste time.'],
      correctAnswer: 'To provide a concrete example of a theory.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What does "correlate" mean?',
      options: ['To have a mutual relationship or connection.', 'To fight with someone.', 'To forget something.'],
      correctAnswer: 'To have a mutual relationship or connection.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'Which phrase indicates a "concession" (admitting a different point)?',
      options: ['Admittedly...', 'Precisely...', 'Unquestionably...'],
      correctAnswer: 'Admittedly...',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'What is the function of "Nevertheless"?',
      options: ['To show contrast after a previous point.', 'To show agreement.', 'To list a first point.'],
      correctAnswer: 'To show contrast after a previous point.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'What does "to substantiate" mean?',
      options: ['To provide evidence to support a claim.', 'To remove something.', 'To speak very quickly.'],
      correctAnswer: 'To provide evidence to support a claim.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'Which word introduces a "hypothetical" situation?',
      options: ['Suppose', 'Specifically', 'Strictly'],
      correctAnswer: 'Suppose',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'What is a "counter-argument"?',
      options: ['An argument opposed to your thesis.', 'A desk for arguing.', 'A type of math problem.'],
      correctAnswer: 'An argument opposed to your thesis.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'What does "henceforth" mean?',
      options: ['From this time on.', 'A long time ago.', 'In another place.'],
      correctAnswer: 'From this time on.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'If a professor says "That brings us to...", they are:',
      options: ['Transitioning to the next logical point.', 'Ending the lecture.', 'Greeting a student.'],
      correctAnswer: 'Transitioning to the next logical point.',
      points: 1
    }
  ]
};

// SHARDS 3-4: Conversations (Campus Work-Study)
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Conversation: Work-Study Interview',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's3', 1),
      type: 'multiple-choice',
      question: 'What position is the student applying for?',
      options: ['Administrative assistant at the library.', 'Tour guide for the university.', 'Research assistant for Biology.'],
      correctAnswer: 'Administrative assistant at the library.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 2),
      type: 'multiple-choice',
      question: 'What experience does the student mention?',
      options: ['Working in their high school library.', 'Managing a restaurant.', 'Playing in a band.'],
      correctAnswer: 'Working in their high school library.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 3),
      type: 'multiple-choice',
      question: 'What is the main requirement for the job regarding scheduling?',
      options: ['The student must be available on weekends.', 'The student must work 20 hours a week.', 'The student must work early mornings.'],
      correctAnswer: 'The student must be available on weekends.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 4),
      type: 'multiple-choice',
      question: 'What does the interviewer mean by "a high volume of inquiries"?',
      options: ['Many people asking questions.', 'Loud noises.', 'A large book.'],
      correctAnswer: 'Many people asking questions.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 5),
      type: 'multiple-choice',
      question: 'What software does the student say they are proficient in?',
      options: ['Database management systems.', 'Video editing software.', 'Accounting tools.'],
      correctAnswer: 'Database management systems.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 6),
      type: 'multiple-choice',
      question: 'What is the "catch" mentioned about the pay?',
      options: ['It is a work-study position, so there is a cap on earnings.', 'It is unpaid for the first month.', 'The pay is only in store credit.'],
      correctAnswer: 'It is a work-study position, so there is a cap on earnings.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 7),
      type: 'multiple-choice',
      question: 'What does "to have a knack for" something mean?',
      options: ['To have a natural skill or talent.', 'To be afraid of something.', 'To be allergic to something.'],
      correctAnswer: 'To have a natural skill or talent.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 8),
      type: 'multiple-choice',
      question: 'When will the interviewer notify the student?',
      options: ['By Wednesday afternoon.', 'Immediately.', 'In two weeks.'],
      correctAnswer: 'By Wednesday afternoon.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 9),
      type: 'multiple-choice',
      question: 'How does the student react to the weekend requirement?',
      options: ['They are fine with it as they have no classes then.', 'They are very upset.', 'They ask for more money.'],
      correctAnswer: 'They are fine with it as they have no classes then.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 10),
      type: 'multiple-choice',
      question: 'What is the primary goal of this conversation?',
      options: ['To evaluate a job candidate.', 'To check out a book.', 'To complain about library noise.'],
      correctAnswer: 'To evaluate a job candidate.',
      points: 1
    }
  ]
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Conversation: Shift Swap at the Cafeteria',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's4', 1),
      type: 'multiple-choice',
      question: 'Why does the student need to swap their shift?',
      options: ['To attend an extra review session for an exam.', 'To go to a concert.', 'Because they are sick.'],
      correctAnswer: 'To attend an extra review session for an exam.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 2),
      type: 'multiple-choice',
      question: 'What shift is the student currently scheduled for?',
      options: ['Tuesday evening.', 'Monday morning.', 'Friday night.'],
      correctAnswer: 'Tuesday evening.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 3),
      type: 'multiple-choice',
      question: 'Who are they asking for help?',
      options: ['A colleague named Alex.', 'Their manager.', 'A professor.'],
      correctAnswer: 'A colleague named Alex.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 4),
      type: 'multiple-choice',
      question: 'What is Alex\'s initial response?',
      options: ['He is unsure because he has a lot of homework.', 'He agrees immediately.', 'He says no.'],
      correctAnswer: 'He is unsure because he has a lot of homework.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 5),
      type: 'multiple-choice',
      question: 'What trade does the student offer?',
      options: ['Working Alex\'s Saturday morning shift.', 'Paying Alex $20.', 'Doing Alex\'s homework.'],
      correctAnswer: 'Working Alex\'s Saturday morning shift.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 6),
      type: 'multiple-choice',
      question: 'Why is Saturday morning a "tough" shift?',
      options: ['It is very early and Alex likes to sleep in.', 'It is the busiest time.', 'The cafeteria is closed.'],
      correctAnswer: 'It is very early and Alex likes to sleep in.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 7),
      type: 'multiple-choice',
      question: 'What does Alex eventually decide?',
      options: ['He accepts the trade.', 'He refuses.', 'He asks the manager.'],
      correctAnswer: 'He accepts the trade.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 8),
      type: 'multiple-choice',
      question: 'What is the next step they must take?',
      options: ['Fill out a shift-change form for the manager.', 'Just show up at the new times.', 'Nothing.'],
      correctAnswer: 'Fill out a shift-change form for the manager.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 9),
      type: 'multiple-choice',
      question: 'What does "to owe someone a favor" mean?',
      options: ['To be in a position where you should do something helpful for someone in return.', 'To owe someone money.', 'To be angry at someone.'],
      correctAnswer: 'To be in a position where you should do something helpful for someone in return.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 10),
      type: 'multiple-choice',
      question: 'What is the student\'s mood at the end of the conversation?',
      options: ['Relieved.', 'Anxious.', 'Indifferent.'],
      correctAnswer: 'Relieved.',
      points: 1
    }
  ]
};

// SHARDS 5-6: Discussion (Anthropology - The Bering Land Bridge)
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'Discussion: Migration to the Americas',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's5', 1),
      type: 'multiple-choice',
      question: 'What was the "Bering Land Bridge"?',
      options: ['A strip of land that connected Siberia and Alaska during the Ice Age.', 'A wooden bridge built by early humans.', 'A type of boat.'],
      correctAnswer: 'A strip of land that connected Siberia and Alaska during the Ice Age.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 2),
      type: 'multiple-choice',
      question: 'What caused the land bridge to appear?',
      options: ['Sea levels dropped as water was frozen in glaciers.', 'Earthquakes raised the land.', 'Tectonic plates collided.'],
      correctAnswer: 'Sea levels dropped as water was frozen in glaciers.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 3),
      type: 'multiple-choice',
      question: 'Why did early humans likely cross this bridge?',
      options: ['Following large herds of animals like mammoths.', 'Looking for gold.', 'Escaping a volcano.'],
      correctAnswer: 'Following large herds of animals like mammoths.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 4),
      type: 'multiple-choice',
      question: 'What is the "Coastal Migration Theory"?',
      options: ['The idea that people traveled by boat along the Pacific coast.', 'The idea that people lived on the beach.', 'The idea that people swam across the ocean.'],
      correctAnswer: 'The idea that people traveled by boat along the Pacific coast.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 5),
      type: 'multiple-choice',
      question: 'What does "archeological evidence" include?',
      options: ['Physical remains of human activity like tools and fire pits.', 'Stories told by grandparents.', 'Dreams.'],
      correctAnswer: 'Physical remains of human activity like tools and fire pits.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 6),
      type: 'multiple-choice',
      question: 'Which site is mentioned as challenging the "Clovis First" model?',
      options: ['Monte Verde in Chile.', 'The Pyramids of Giza.', 'Stonehenge.'],
      correctAnswer: 'Monte Verde in Chile.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 7),
      type: 'multiple-choice',
      question: 'What is "carbon dating"?',
      options: ['A method for determining the age of organic materials.', 'A type of romantic meeting.', 'A way to count stars.'],
      correctAnswer: 'A method for determining the age of organic materials.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 8),
      type: 'multiple-choice',
      question: 'How did the climate change affect the bridge?',
      options: ['Warming temperatures melted glaciers, causing sea levels to rise and submerge it.', 'It became a desert.', 'It was destroyed by an earthquake.'],
      correctAnswer: 'Warming temperatures melted glaciers, causing sea levels to rise and submerge it.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 9),
      type: 'multiple-choice',
      question: 'What does "indigenous" mean?',
      options: ['Originating or occurring naturally in a particular place.', 'Moving to a new country.', 'Very rich.'],
      correctAnswer: 'Originating or occurring naturally in a particular place.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 10),
      type: 'multiple-choice',
      question: 'What is the professor\'s main point about the theories?',
      options: ['They are constantly evolving as new evidence is found.', 'They are all wrong.', 'One theory is 100% proven.'],
      correctAnswer: 'They are constantly evolving as new evidence is found.',
      points: 1
    }
  ]
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Discussion: Megafauna Extinction',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's6', 1),
      type: 'multiple-choice',
      question: 'What is "Megafauna"?',
      options: ['Large animals, such as mammoths and giant sloths.', 'Small insects.', 'Microscopic bacteria.'],
      correctAnswer: 'Large animals, such as mammoths and giant sloths.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 2),
      type: 'multiple-choice',
      question: 'What are the two main theories for their extinction?',
      options: ['Overhunting by humans and climate change.', 'Asteroid impact and volcanic eruptions.', 'Alien intervention and disease.'],
      correctAnswer: 'Overhunting by humans and climate change.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 3),
      type: 'multiple-choice',
      question: 'What does the "Overkill Hypothesis" suggest?',
      options: ['Human hunters were responsible for the rapid decline of large mammals.', 'The animals killed each other.', 'The sun was too hot.'],
      correctAnswer: 'Human hunters were responsible for the rapid decline of large mammals.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 4),
      type: 'multiple-choice',
      question: 'How does climate change support the extinction theory?',
      options: ['Shifts in vegetation and habitat made it hard for large animals to survive.', 'It made the animals too lazy.', 'It caused a global flood.'],
      correctAnswer: 'Shifts in vegetation and habitat made it hard for large animals to survive.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 5),
      type: 'multiple-choice',
      question: 'What is a "keystone species"?',
      options: ['A species on which other species in an ecosystem largely depend.', 'A species that lives in caves.', 'A very fast species.'],
      correctAnswer: 'A species on which other species in an ecosystem largely depend.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 6),
      type: 'multiple-choice',
      question: 'What does "simultaneous" mean?',
      options: ['Happening at the same time.', 'Happening one after another.', 'Very slowly.'],
      correctAnswer: 'Happening at the same time.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 7),
      type: 'multiple-choice',
      question: 'What role did "spear points" play in the evidence?',
      options: ['They show that humans had the technology to hunt large game.', 'They were used as jewelry.', 'They were a type of currency.'],
      correctAnswer: 'They show that humans had the technology to hunt large game.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 8),
      type: 'multiple-choice',
      question: 'What is a "Pleistocene" Epoch?',
      options: ['The time period often called the Ice Age.', 'The current year.', 'The future.'],
      correctAnswer: 'The time period often called the Ice Age.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 9),
      type: 'multiple-choice',
      question: 'What does the professor imply about the "truth"?',
      options: ['It is likely a combination of both hunting and climate factors.', 'It will never be known.', 'Hunting was the only cause.'],
      correctAnswer: 'It is likely a combination of both hunting and climate factors.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 10),
      type: 'multiple-choice',
      question: 'What is the purpose of this discussion?',
      options: ['To analyze the causes of a mass extinction event.', 'To learn how to hunt mammoths.', 'To discuss modern zoos.'],
      correctAnswer: 'To analyze the causes of a mass extinction event.',
      points: 1
    }
  ]
};

// SHARDS 7-8: Lecture (Computer Science - AI)
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Lecture: The Turing Test',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's7', 1),
      type: 'multiple-choice',
      question: 'Who proposed the "Turing Test"?',
      options: ['Alan Turing.', 'Isaac Newton.', 'Steve Jobs.'],
      correctAnswer: 'Alan Turing.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 2),
      type: 'multiple-choice',
      question: 'What is the goal of the test?',
      options: ['To see if a machine can exhibit intelligent behavior equivalent to a human.', 'To see how fast a computer can calculate.', 'To test the durability of hardware.'],
      correctAnswer: 'To see if a machine can exhibit intelligent behavior equivalent to a human.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 3),
      type: 'multiple-choice',
      question: 'What does the "Imitation Game" involve?',
      options: ['A human judge trying to distinguish between a machine and a human based on text.', 'Acting like a famous person.', 'Solving puzzles.'],
      correctAnswer: 'A human judge trying to distinguish between a machine and a human based on text.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 4),
      type: 'multiple-choice',
      question: 'What is a major criticism of the Turing Test?',
      options: ['It measures behavior, not actual consciousness or understanding.', 'It is too easy for computers.', 'It requires too much electricity.'],
      correctAnswer: 'It measures behavior, not actual consciousness or understanding.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 5),
      type: 'multiple-choice',
      question: 'What is the "Chinese Room" argument?',
      options: ['A thought experiment suggesting that following rules is not the same as understanding.', 'A type of restaurant.', 'A historical event.'],
      correctAnswer: 'A thought experiment suggesting that following rules is not the same as understanding.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 6),
      type: 'multiple-choice',
      question: 'Who developed the Chinese Room argument?',
      options: ['John Searle.', 'Albert Einstein.', 'Bill Gates.'],
      correctAnswer: 'John Searle.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 7),
      type: 'multiple-choice',
      question: 'What does "consciousness" mean?',
      options: ['The state of being aware of and responsive to one\'s surroundings.', 'Being asleep.', 'Being very smart.'],
      correctAnswer: 'The state of being aware of and responsive to one\'s surroundings.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 8),
      type: 'multiple-choice',
      question: 'How do modern Large Language Models (LLMs) relate to the test?',
      options: ['They are becoming increasingly capable of passing it.', 'They are completely unable to use language.', 'They don\'t exist.'],
      correctAnswer: 'They are becoming increasingly capable of passing it.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 9),
      type: 'multiple-choice',
      question: 'What is "Narrow AI"?',
      options: ['AI designed to perform a specific task.', 'A computer with a small screen.', 'AI that is not very smart.'],
      correctAnswer: 'AI designed to perform a specific task.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 10),
      type: 'multiple-choice',
      question: 'What is the professor\'s main question for the students?',
      options: ['Does passing the test mean a machine is actually "thinking"?', 'Can you build a computer?', 'What is your favorite robot?'],
      correctAnswer: 'Does passing the test mean a machine is actually "thinking"?',
      points: 1
    }
  ]
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Lecture: Neural Networks',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's8', 1),
      type: 'multiple-choice',
      question: 'What are "Neural Networks" inspired by?',
      options: ['The structure and function of the human brain.', 'The internet.', 'A map of the city.'],
      correctAnswer: 'The structure and function of the human brain.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 2),
      type: 'multiple-choice',
      question: 'What is an "Artificial Neuron"?',
      options: ['A mathematical function that processes input signals.', 'A small robot.', 'A type of wire.'],
      correctAnswer: 'A mathematical function that processes input signals.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 3),
      type: 'multiple-choice',
      question: 'What are the three typical "layers" in a neural network?',
      options: ['Input, Hidden, and Output.', 'Top, Middle, and Bottom.', 'Fast, Slow, and Medium.'],
      correctAnswer: 'Input, Hidden, and Output.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 4),
      type: 'multiple-choice',
      question: 'What does "training" a network involve?',
      options: ['Adjusting weights based on error to improve accuracy.', 'Giving it a gym membership.', 'Teaching it to speak.'],
      correctAnswer: 'Adjusting weights based on error to improve accuracy.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 5),
      type: 'multiple-choice',
      question: 'What is "Deep Learning"?',
      options: ['Neural networks with many hidden layers.', 'Learning while swimming.', 'Reading a book very carefully.'],
      correctAnswer: 'Neural networks with many hidden layers.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 6),
      type: 'multiple-choice',
      question: 'What does "algorithm" mean?',
      options: ['A set of rules or steps to be followed in calculations or problem-solving.', 'A type of musical instrument.', 'A species of plant.'],
      correctAnswer: 'A set of rules or steps to be followed in calculations or problem-solving.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 7),
      type: 'multiple-choice',
      question: 'What is a "weight" in a neural network?',
      options: ['A parameter that determines the strength of the connection between neurons.', 'How heavy the computer is.', 'The importance of the student.'],
      correctAnswer: 'A parameter that determines the strength of the connection between neurons.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 8),
      type: 'multiple-choice',
      question: 'What is a common application of neural networks?',
      options: ['Image and speech recognition.', 'Cooking pasta.', 'Building furniture.'],
      correctAnswer: 'Image and speech recognition.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 9),
      type: 'multiple-choice',
      question: 'What does "black box" refer to in AI?',
      options: ['The difficulty in understanding how a complex network reached a decision.', 'A flight recorder.', 'A type of computer case.'],
      correctAnswer: 'The difficulty in understanding how a complex network reached a decision.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 10),
      type: 'multiple-choice',
      question: 'What is the professor\'s tone regarding the potential of AI?',
      options: ['Cautiously optimistic.', 'Extremely fearful.', 'Completely dismissive.'],
      correctAnswer: 'Cautiously optimistic.',
      points: 1
    }
  ]
};

// SHARDS 9-10: Lecture (Geology - Plate Tectonics)
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'listening',
  title: 'Lecture: The Theory of Plate Tectonics',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's9', 1),
      type: 'multiple-choice',
      question: 'What does the theory of "Plate Tectonics" state?',
      options: ['The Earth\'s outer shell is divided into several plates that glide over the mantle.', 'The Earth is perfectly solid.', 'The continents are floating on water.'],
      correctAnswer: 'The Earth\'s outer shell is divided into several plates that glide over the mantle.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 2),
      type: 'multiple-choice',
      question: 'What is the "Lithosphere"?',
      options: ['The rigid outer part of the Earth, consisting of the crust and upper mantle.', 'The center of the Earth.', 'The atmosphere.'],
      correctAnswer: 'The rigid outer part of the Earth, consisting of the crust and upper mantle.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 3),
      type: 'multiple-choice',
      question: 'What happens at a "Divergent" boundary?',
      options: ['Plates move away from each other.', 'Plates crash into each other.', 'Plates slide past each other.'],
      correctAnswer: 'Plates move away from each other.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 4),
      type: 'multiple-choice',
      question: 'What happens at a "Convergent" boundary?',
      options: ['Plates move toward each other.', 'Plates move away.', 'Nothing happens.'],
      correctAnswer: 'Plates move toward each other.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 5),
      type: 'multiple-choice',
      question: 'What is a "Transform" boundary?',
      options: ['Where plates slide horizontally past one another.', 'Where plates melt.', 'Where new land is created.'],
      correctAnswer: 'Where plates slide horizontally past one another.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 6),
      type: 'multiple-choice',
      question: 'Who first proposed the idea of "Continental Drift"?',
      options: ['Alfred Wegener.', 'Charles Darwin.', 'Isaac Newton.'],
      correctAnswer: 'Alfred Wegener.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 7),
      type: 'multiple-choice',
      question: 'What was "Pangaea"?',
      options: ['A supercontinent that existed millions of years ago.', 'A type of prehistoric plant.', 'The name of a tectonic plate.'],
      correctAnswer: 'A supercontinent that existed millions of years ago.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 8),
      type: 'multiple-choice',
      question: 'What drives the movement of the plates?',
      options: ['Convection currents in the mantle.', 'The wind.', 'The Moon\'s gravity.'],
      correctAnswer: 'Convection currents in the mantle.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 9),
      type: 'multiple-choice',
      question: 'What does "subduction" involve?',
      options: ['One plate sliding under another into the mantle.', 'Two plates merging.', 'A plate breaking in half.'],
      correctAnswer: 'One plate sliding under another into the mantle.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 10),
      type: 'multiple-choice',
      question: 'What is the professor\'s main goal in this lecture?',
      options: ['To explain the fundamental mechanisms of the Earth\'s dynamic surface.', 'To find oil.', 'To predict the next earthquake.'],
      correctAnswer: 'To explain the fundamental mechanisms of the Earth\'s dynamic surface.',
      points: 1
    }
  ]
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'listening',
  title: 'Lecture: Earthquakes and Seismic Waves',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's10', 1),
      type: 'multiple-choice',
      question: 'What causes an earthquake?',
      options: ['Sudden release of energy in the Earth\'s crust that creates seismic waves.', 'Thunder.', 'Heavy rain.'],
      correctAnswer: 'Sudden release of energy in the Earth\'s crust that creates seismic waves.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 2),
      type: 'multiple-choice',
      question: 'What is the "Focus" (or Hypocenter) of an earthquake?',
      options: ['The point within the Earth where the rupture starts.', 'The point directly above on the surface.', 'The lens of a camera.'],
      correctAnswer: 'The point within the Earth where the rupture starts.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 3),
      type: 'multiple-choice',
      question: 'What is the "Epicenter"?',
      options: ['The point on the surface directly above the focus.', 'The middle of the ocean.', 'The strongest part of the wave.'],
      correctAnswer: 'The point on the surface directly above the focus.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 4),
      type: 'multiple-choice',
      question: 'What are "P-waves" (Primary waves)?',
      options: ['Fastest waves that compress and expand the ground.', 'Slow waves that shake the ground.', 'Waves that only travel through water.'],
      correctAnswer: 'Fastest waves that compress and expand the ground.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 5),
      type: 'multiple-choice',
      question: 'What are "S-waves" (Secondary waves)?',
      options: ['Waves that move the ground up and down or side to side and only travel through solids.', 'Light waves.', 'Sound waves.'],
      correctAnswer: 'Waves that move the ground up and down or side to side and only travel through solids.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 6),
      type: 'multiple-choice',
      question: 'What does "seismograph" measure?',
      options: ['The magnitude and duration of seismic waves.', 'The temperature of the ground.', 'The depth of the ocean.'],
      correctAnswer: 'The magnitude and duration of seismic waves.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 7),
      type: 'multiple-choice',
      question: 'What is the "Richter Scale" used for?',
      options: ['Measuring the magnitude (energy released) of an earthquake.', 'Measuring the damage.', 'Measuring the speed of waves.'],
      correctAnswer: 'Measuring the magnitude (energy released) of an earthquake.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 8),
      type: 'multiple-choice',
      question: 'What does "magnitude" mean?',
      options: ['The size or extent of something.', 'A type of rock.', 'The color of the sky.'],
      correctAnswer: 'The size or extent of something.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 9),
      type: 'multiple-choice',
      question: 'Why do S-waves disappear when reaching the outer core?',
      options: ['Because the outer core is liquid and S-waves cannot travel through liquids.', 'Because it is too hot.', 'Because they get tired.'],
      correctAnswer: 'Because the outer core is liquid and S-waves cannot travel through liquids.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 10),
      type: 'multiple-choice',
      question: 'What is the significance of the "Shadow Zone"?',
      options: ['It helps scientists map the internal structure of the Earth.', 'It is where ghosts live.', 'It is a place with no sun.'],
      correctAnswer: 'It helps scientists map the internal structure of the Earth.',
      points: 1
    }
  ]
};

export const B2_WEEK_7 = createShardedToeflUnit(
  'toefl-b2-w7',
  'Week 7: Listening - Science & History Deep Dive',
  'Exploring complex topics in science and history through academic discussions and lectures.',
  ['Analyze historical migration and megafauna extinction theories', 'Understand advanced concepts in AI and plate tectonics', 'Identify relationships between ideas in long-form lectures'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
