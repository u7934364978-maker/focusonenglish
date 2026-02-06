import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 6;
const LEVEL = 'b2';

// SHARDS 1-2: Functional Listening (Pragmatics & Inference)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Listening: Understanding Intent',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'A speaker says, "I suppose I could try that." What is their attitude?',
      options: ['Slightly hesitant but willing.', 'Extremely enthusiastic.', 'Firmly refusing.'],
      correctAnswer: 'Slightly hesitant but willing.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'What is the speaker\'s purpose when they say, "Wait, let me rephrase that"?',
      options: ['To correct a previous statement.', 'To end the conversation.', 'To ask for help.'],
      correctAnswer: 'To correct a previous statement.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'If a professor says, "Is that clear?", what are they doing?',
      options: ['Checking for student understanding.', 'Cleaning the blackboard.', 'Dismissing the class.'],
      correctAnswer: 'Checking for student understanding.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'A student says, "I didn\'t see that coming!" This indicates:',
      options: ['Surprise.', 'Boredom.', 'Anger.'],
      correctAnswer: 'Surprise.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'What does the phrase "Don\'t get me wrong" usually precede?',
      options: ['A clarification to prevent a misunderstanding.', 'A direct insult.', 'A joke.'],
      correctAnswer: 'A clarification to prevent a misunderstanding.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'If a speaker says, "That makes two of us," what does it mean?',
      options: ['They agree with the other person.', 'They are counting people.', 'They are confused.'],
      correctAnswer: 'They agree with the other person.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'What is the intent of saying "It\'s about time!"?',
      options: ['To express that something should have happened sooner.', 'To ask for the current time.', 'To praise someone\'s speed.'],
      correctAnswer: 'To express that something should have happened sooner.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'A professor says, "In a nutshell..." What follows?',
      options: ['A brief summary.', 'A long story.', 'A list of ingredients.'],
      correctAnswer: 'A brief summary.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What does "I\'m all ears" mean?',
      options: ['I am listening very carefully.', 'I have a medical condition.', 'I am confused.'],
      correctAnswer: 'I am listening very carefully.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'If someone says "That\'s a tall order," the task is:',
      options: ['Very difficult.', 'Very easy.', 'Related to height.'],
      correctAnswer: 'Very difficult.',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Listening: Rhetorical Devices',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'Why might a professor use a "rhetorical question"?',
      options: ['To make a point or emphasize a topic.', 'Because they forgot the answer.', 'To test the students\' knowledge immediately.'],
      correctAnswer: 'To make a point or emphasize a topic.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'What is the function of "hyperbole" in a lecture?',
      options: ['To exaggerate for emphasis.', 'To provide exact data.', 'To speak very quietly.'],
      correctAnswer: 'To exaggerate for emphasis.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'If a speaker uses "sarcasm," they are:',
      options: ['Saying the opposite of what they mean to mock or convey irony.', 'Being extremely polite.', 'Giving a formal speech.'],
      correctAnswer: 'Saying the opposite of what they mean to mock or convey irony.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'What does "understatement" involve?',
      options: ['Making something seem less important than it is.', 'Explaining something very clearly.', 'Whispering.'],
      correctAnswer: 'Making something seem less important than it is.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'Which phrase signals an "analogy"?',
      options: ['It is much like...', 'On the other hand...', 'To conclude...'],
      correctAnswer: 'It is much like...',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'What is the purpose of "anecdotes" in a lecture?',
      options: ['To illustrate a point with a short, interesting story.', 'To provide statistical evidence.', 'To list the references.'],
      correctAnswer: 'To illustrate a point with a short, interesting story.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What does "to backtrack" mean in a speech?',
      options: ['To return to a previous point to clarify or correct it.', 'To walk backwards.', 'To speed up the speaking rate.'],
      correctAnswer: 'To return to a previous point to clarify or correct it.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'What is "jargon"?',
      options: ['Specialized language used by a particular profession or group.', 'A type of fast food.', 'A rhythmic way of speaking.'],
      correctAnswer: 'Specialized language used by a particular profession or group.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'Why would a speaker use "repetition"?',
      options: ['To reinforce a key concept.', 'Because they are bored.', 'To fill up time.'],
      correctAnswer: 'To reinforce a key concept.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'What does "to dig deeper" mean?',
      options: ['To investigate or discuss a topic in more detail.', 'To work in a garden.', 'To speak with a lower voice.'],
      correctAnswer: 'To investigate or discuss a topic in more detail.',
      points: 1
    }
  ]
};

// SHARDS 3-4: Conversations (Academic Advising)
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Conversation: Academic Advisor - Internship Help',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's3', 1),
      type: 'multiple-choice',
      question: 'What is the student\'s main concern?',
      options: ['Finding an internship for the summer.', 'Changing their major.', 'Registering for classes.'],
      correctAnswer: 'Finding an internship for the summer.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 2),
      type: 'multiple-choice',
      question: 'What field is the student interested in?',
      options: ['Digital marketing.', 'Mechanical engineering.', 'Ancient history.'],
      correctAnswer: 'Digital marketing.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 3),
      type: 'multiple-choice',
      question: 'What does the advisor suggest as a first step?',
      options: ['Visiting the Career Services office.', 'Calling local companies directly.', 'Searching on social media.'],
      correctAnswer: 'Visiting the Career Services office.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 4),
      type: 'multiple-choice',
      question: 'What is the "portal" the advisor mentions?',
      options: ['An online database of internship listings.', 'A physical gate on campus.', 'A type of science fiction movie.'],
      correctAnswer: 'An online database of internship listings.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 5),
      type: 'multiple-choice',
      question: 'Why is the student worried about their resume?',
      options: ['They feel they don\'t have enough experience.', 'They lost the file.', 'It is too long.'],
      correctAnswer: 'They feel they don\'t have enough experience.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 6),
      type: 'multiple-choice',
      question: 'How does the advisor reassure the student?',
      options: ['By explaining that entry-level internships value coursework and projects.', 'By offering to write the resume for them.', 'By saying it doesn\'t matter.'],
      correctAnswer: 'By explaining that entry-level internships value coursework and projects.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 7),
      type: 'multiple-choice',
      question: 'What does "coursework" refer to?',
      options: ['The subjects and assignments completed in school.', 'Work done on a golf course.', 'A type of outdoor exercise.'],
      correctAnswer: 'The subjects and assignments completed in school.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 8),
      type: 'multiple-choice',
      question: 'What deadline does the advisor mention?',
      options: ['Applications for many top firms close in two weeks.', 'The end of the semester.', 'Tomorrow.'],
      correctAnswer: 'Applications for many top firms close in two weeks.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 9),
      type: 'multiple-choice',
      question: 'What does the student agree to do?',
      options: ['Make an appointment with a career counselor.', 'Drop out of school.', 'Wait until next year.'],
      correctAnswer: 'Make an appointment with a career counselor.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 10),
      type: 'multiple-choice',
      question: 'What is the advisor\'s tone?',
      options: ['Encouraging and professional.', 'Impatient and rude.', 'Confused.'],
      correctAnswer: 'Encouraging and professional.',
      points: 1
    }
  ]
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Conversation: Study Group Dispute',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's4', 1),
      type: 'multiple-choice',
      question: 'What is the main conflict in the study group?',
      options: ['One member is not contributing enough work.', 'They cannot agree on a meeting time.', 'They lost their notes.'],
      correctAnswer: 'One member is not contributing enough work.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 2),
      type: 'multiple-choice',
      question: 'Which member is being criticized?',
      options: ['Mark.', 'Sarah.', 'The narrator.'],
      correctAnswer: 'Mark.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 3),
      type: 'multiple-choice',
      question: 'What excuse did Mark give for missing the last meeting?',
      options: ['He had a shift at work.', 'He was sick.', 'He forgot.'],
      correctAnswer: 'He had a shift at work.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 4),
      type: 'multiple-choice',
      question: 'Why is Sarah particularly upset?',
      options: ['She had to do Mark\'s part of the presentation.', 'Mark stole her book.', 'The meeting was at her house.'],
      correctAnswer: 'She had to do Mark\'s part of the presentation.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 5),
      type: 'multiple-choice',
      question: 'What does "to pull one\'s weight" mean?',
      options: ['To do one\'s fair share of work.', 'To exercise at the gym.', 'To gain weight.'],
      correctAnswer: 'To do one\'s fair share of work.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 6),
      type: 'multiple-choice',
      question: 'What solution does the narrator suggest?',
      options: ['Talking to Mark directly before involving the professor.', 'Kicking Mark out immediately.', 'Doing all the work themselves.'],
      correctAnswer: 'Talking to Mark directly before involving the professor.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 7),
      type: 'multiple-choice',
      question: 'What is the "ultimate" consequence if he doesn\'t improve?',
      options: ['They will inform the professor of his lack of participation.', 'He will fail the course.', 'They will move to a different group.'],
      correctAnswer: 'They will inform the professor of his lack of participation.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 8),
      type: 'multiple-choice',
      question: 'What does "confrontational" mean?',
      options: ['Tending to deal with situations in an aggressive or direct way.', 'Peaceful and quiet.', 'Very helpful.'],
      correctAnswer: 'Tending to deal with situations in an aggressive or direct way.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 9),
      type: 'multiple-choice',
      question: 'How does Sarah feel about the narrator\'s suggestion?',
      options: ['She agrees but remains skeptical.', 'She refuses completely.', 'She thinks it is a brilliant idea.'],
      correctAnswer: 'She agrees but remains skeptical.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 10),
      type: 'multiple-choice',
      question: 'What is the goal of the conversation?',
      options: ['To manage a team conflict.', 'To study for an exam.', 'To plan a party.'],
      correctAnswer: 'To manage a team conflict.',
      points: 1
    }
  ]
};

// SHARDS 5-6: Discussion (Sociology - Urban Planning)
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'Discussion: The 15-Minute City',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's5', 1),
      type: 'multiple-choice',
      question: 'What is the core concept of a "15-Minute City"?',
      options: ['Most daily necessities can be reached within a 15-minute walk or bike ride.', 'A city that only takes 15 minutes to drive across.', 'A city where everyone works 15 hours a week.'],
      correctAnswer: 'Most daily necessities can be reached within a 15-minute walk or bike ride.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 2),
      type: 'multiple-choice',
      question: 'Who is the urbanist credited with popularizing this idea?',
      options: ['Carlos Moreno.', 'Jane Jacobs.', 'Le Corbusier.'],
      correctAnswer: 'Carlos Moreno.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 3),
      type: 'multiple-choice',
      question: 'What is one major environmental benefit mentioned?',
      options: ['Reduced carbon emissions from cars.', 'More space for factories.', 'Increased noise pollution.'],
      correctAnswer: 'Reduced carbon emissions from cars.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 4),
      type: 'multiple-choice',
      question: 'How does the professor suggest this impacts "social cohesion"?',
      options: ['It fosters stronger local communities.', 'It isolates people from the rest of the world.', 'It has no impact.'],
      correctAnswer: 'It fosters stronger local communities.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 5),
      type: 'multiple-choice',
      question: 'What is one "critique" or challenge discussed?',
      options: ['Potential for gentrification or socioeconomic exclusion.', 'The city would be too quiet.', 'Cars would become extinct.'],
      correctAnswer: 'Potential for gentrification or socioeconomic exclusion.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 6),
      type: 'multiple-choice',
      question: 'What does "gentrification" mean?',
      options: ['The process of improving a neighborhood so that it conforms to middle-class taste.', 'Building more parks.', 'Cleaning the streets.'],
      correctAnswer: 'The process of improving a neighborhood so that it conforms to middle-class taste.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 7),
      type: 'multiple-choice',
      question: 'Which city is frequently cited as a model for this concept?',
      options: ['Paris.', 'Los Angeles.', 'Tokyo.'],
      correctAnswer: 'Paris.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 8),
      type: 'multiple-choice',
      question: 'What does "mixed-use development" entail?',
      options: ['Buildings that combine residential, commercial, and cultural uses.', 'Using only one type of building material.', 'Building only skyscrapers.'],
      correctAnswer: 'Buildings that combine residential, commercial, and cultural uses.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 9),
      type: 'multiple-choice',
      question: 'How does the professor view the future of urban planning?',
      options: ['Optimistically, believing human-centric design is becoming a priority.', 'Pessimistically, believing cars will always dominate.', 'Indifferently.'],
      correctAnswer: 'Optimistically, believing human-centric design is becoming a priority.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 10),
      type: 'multiple-choice',
      question: 'What is the purpose of the discussion?',
      options: ['To analyze a modern urban planning theory.', 'To plan a trip to Paris.', 'To design a new car.'],
      correctAnswer: 'To analyze a modern urban planning theory.',
      points: 1
    }
  ]
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Discussion: Urbanization - The Heat Island Effect',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's6', 1),
      type: 'multiple-choice',
      question: 'What is the "Urban Heat Island Effect"?',
      options: ['Cities being significantly warmer than surrounding rural areas.', 'An island with many volcanoes.', 'Global warming in general.'],
      correctAnswer: 'Cities being significantly warmer than surrounding rural areas.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 2),
      type: 'multiple-choice',
      question: 'What is a primary cause of this effect?',
      options: ['Materials like concrete and asphalt absorbing heat.', 'Too many people living close together.', 'The use of air conditioning.'],
      correctAnswer: 'Materials like concrete and asphalt absorbing heat.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 3),
      type: 'multiple-choice',
      question: 'What role does "vegetation" play in mitigation?',
      options: ['Plants provide shade and cool the air through evapotranspiration.', 'Plants make the city hotter by trapping heat.', 'Vegetation has no effect.'],
      correctAnswer: 'Plants provide shade and cool the air through evapotranspiration.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 4),
      type: 'multiple-choice',
      question: 'What does "mitigation" mean?',
      options: ['Reducing the severity or impact of something.', 'Increasing the speed.', 'Ignoring a problem.'],
      correctAnswer: 'Reducing the severity or impact of something.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 5),
      type: 'multiple-choice',
      question: 'How does this effect impact energy consumption?',
      options: ['It increases the demand for cooling (AC), leading to higher energy use.', 'It reduces energy use because it is warmer.', 'It has no impact.'],
      correctAnswer: 'It increases the demand for cooling (AC), leading to higher energy use.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 6),
      type: 'multiple-choice',
      question: 'What is a "cool roof"?',
      options: ['A roof designed to reflect more sunlight and absorb less heat.', 'A roof with a swimming pool.', 'A roof made of ice.'],
      correctAnswer: 'A roof designed to reflect more sunlight and absorb less heat.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 7),
      type: 'multiple-choice',
      question: 'Why is the effect more pronounced at night?',
      options: ['Buildings and roads slowly release the heat they absorbed during the day.', 'The sun is stronger at night.', 'There is more traffic at night.'],
      correctAnswer: 'Buildings and roads slowly release the heat they absorbed during the day.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 8),
      type: 'multiple-choice',
      question: 'What does "impermeable" mean?',
      options: ['Not allowing fluid to pass through.', 'Very soft.', 'Easily broken.'],
      correctAnswer: 'Not allowing fluid to pass through.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 9),
      type: 'multiple-choice',
      question: 'According to a student, how does this affect public health?',
      options: ['It increases the risk of heat-related illnesses and respiratory issues.', 'It makes people happier.', 'It has no health effects.'],
      correctAnswer: 'It increases the risk of heat-related illnesses and respiratory issues.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 10),
      type: 'multiple-choice',
      question: 'What is the professor\'s concluding recommendation?',
      options: ['Integrating "green" and "blue" infrastructure into city design.', 'Moving everyone to the countryside.', 'Banning concrete.'],
      correctAnswer: 'Integrating "green" and "blue" infrastructure into city design.',
      points: 1
    }
  ]
};

// SHARDS 7-8: Lecture (Astronomy - Exoplanets)
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Lecture: Finding Exoplanets',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's7', 1),
      type: 'multiple-choice',
      question: 'What is an "Exoplanet"?',
      options: ['A planet that orbits a star outside our solar system.', 'A planet that has exploded.', 'A small moon.'],
      correctAnswer: 'A planet that orbits a star outside our solar system.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 2),
      type: 'multiple-choice',
      question: 'What is the "Transit Method" for finding exoplanets?',
      options: ['Measuring the slight dimming of a star as a planet passes in front of it.', 'Looking through a very large telescope directly.', 'Listening for radio signals.'],
      correctAnswer: 'Measuring the slight dimming of a star as a planet passes in front of it.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 3),
      type: 'multiple-choice',
      question: 'What does the "Radial Velocity" method measure?',
      options: ['The "wobble" of a star caused by the gravitational pull of an orbiting planet.', 'The speed of light.', 'The temperature of the planet.'],
      correctAnswer: 'The "wobble" of a star caused by the gravitational pull of an orbiting planet.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 4),
      type: 'multiple-choice',
      question: 'What is the "Goldilocks Zone"?',
      options: ['The habitable zone where liquid water can exist on a planet\'s surface.', 'A zone with many asteroids.', 'A zone where only bears live.'],
      correctAnswer: 'The habitable zone where liquid water can exist on a planet\'s surface.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 5),
      type: 'multiple-choice',
      question: 'Which space telescope has been most successful in finding exoplanets?',
      options: ['Kepler.', 'Hubble.', 'Voyager.'],
      correctAnswer: 'Kepler.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 6),
      type: 'multiple-choice',
      question: 'What is a "Hot Jupiter"?',
      options: ['A gas giant that orbits very close to its host star.', 'A planet made of fire.', 'A very small, hot moon.'],
      correctAnswer: 'A gas giant that orbits very close to its host star.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 7),
      type: 'multiple-choice',
      question: 'What does "habitable" mean?',
      options: ['Suitable or good enough to live in.', 'Very small.', 'Extremely dangerous.'],
      correctAnswer: 'Suitable or good enough to live in.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 8),
      type: 'multiple-choice',
      question: 'Why is "Direct Imaging" difficult?',
      options: ['The glare of the host star overwhelms the faint light of the planet.', 'Planets are invisible.', 'Telescopes aren\'t strong enough.'],
      correctAnswer: 'The glare of the host star overwhelms the faint light of the planet.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 9),
      type: 'multiple-choice',
      question: 'What chemical signatures are astronomers looking for in exoplanet atmospheres?',
      options: ['Oxygen, methane, and water vapor.', 'Gold and silver.', 'Plastic.'],
      correctAnswer: 'Oxygen, methane, and water vapor.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 10),
      type: 'multiple-choice',
      question: 'What is the professor\'s primary goal in this lecture?',
      options: ['To explain the techniques used to detect planets beyond our solar system.', 'To prove that aliens exist.', 'To sell telescopes.'],
      correctAnswer: 'To explain the techniques used to detect planets beyond our solar system.',
      points: 1
    }
  ]
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Lecture: Protoplanetary Disks',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's8', 1),
      type: 'multiple-choice',
      question: 'What is a "Protoplanetary Disk"?',
      options: ['A rotating disk of dense gas and dust surrounding a young star.', 'A flat planet.', 'A type of galaxy.'],
      correctAnswer: 'A rotating disk of dense gas and dust surrounding a young star.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 2),
      type: 'multiple-choice',
      question: 'What process leads to the formation of planets within these disks?',
      options: ['Accretion.', 'Evaporation.', 'Explosion.'],
      correctAnswer: 'Accretion.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 3),
      type: 'multiple-choice',
      question: 'What does "accretion" involve?',
      options: ['Small particles colliding and sticking together to form larger bodies.', 'Breaking apart into smaller pieces.', 'Changing from gas to liquid.'],
      correctAnswer: 'Small particles colliding and sticking together to form larger bodies.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 4),
      type: 'multiple-choice',
      question: 'What is a "Planetesimal"?',
      options: ['A small body that could grow into a planet.', 'A very small star.', 'A moon.'],
      correctAnswer: 'A small body that could grow into a planet.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 5),
      type: 'multiple-choice',
      question: 'Why are rocky planets usually found closer to the star?',
      options: ['The heat prevents lighter gases from condensing close to the star.', 'They are heavier and fall inward.', 'They are formed first.'],
      correctAnswer: 'The heat prevents lighter gases from condensing close to the star.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 6),
      type: 'multiple-choice',
      question: 'What is the "Frost Line"?',
      options: ['The distance from a star beyond which ice can form.', 'A line on a map.', 'The edge of the galaxy.'],
      correctAnswer: 'The distance from a star beyond which ice can form.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 7),
      type: 'multiple-choice',
      question: 'What does "condense" mean?',
      options: ['Change from gas to liquid or solid.', 'Expand in size.', 'Explode.'],
      correctAnswer: 'Change from gas to liquid or solid.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 8),
      type: 'multiple-choice',
      question: 'How long does the planet formation process typically take?',
      options: ['Millions of years.', 'Hundreds of years.', 'Billions of years.'],
      correctAnswer: 'Millions of years.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 9),
      type: 'multiple-choice',
      question: 'What clears the remaining gas and dust from the disk?',
      options: ['Radiation and stellar winds from the young star.', 'Gravity from the planets.', 'It just disappears.'],
      correctAnswer: 'Radiation and stellar winds from the young star.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 10),
      type: 'multiple-choice',
      question: 'What is the main takeaway regarding the solar system?',
      options: ['Our solar system formed from a similar disk-like structure.', 'Our solar system is unique and different.', 'The theory is completely unproven.'],
      correctAnswer: 'Our solar system formed from a similar disk-like structure.',
      points: 1
    }
  ]
};

// SHARDS 9-10: Lecture (Economics - History of Money)
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'listening',
  title: 'Lecture: The Evolution of Money',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's9', 1),
      type: 'multiple-choice',
      question: 'What was the primary method of exchange before money?',
      options: ['Barter.', 'Credit cards.', 'Socialism.'],
      correctAnswer: 'Barter.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 2),
      type: 'multiple-choice',
      question: 'What is a major disadvantage of a barter system?',
      options: ['The "double coincidence of wants" requirement.', 'It is too fast.', 'It requires no trust.'],
      correctAnswer: 'The "double coincidence of wants" requirement.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 3),
      type: 'multiple-choice',
      question: 'What is "Commodity Money"?',
      options: ['Items that have intrinsic value and are used as money (e.g., salt, gold).', 'Money made of paper.', 'Digital currency.'],
      correctAnswer: 'Items that have intrinsic value and are used as money (e.g., salt, gold).',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 4),
      type: 'multiple-choice',
      question: 'What does "intrinsic value" mean?',
      options: ['Value in and of itself.', 'Value assigned by a king.', 'No value at all.'],
      correctAnswer: 'Value in and of itself.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 5),
      type: 'multiple-choice',
      question: 'Where were the first known coins minted?',
      options: ['Lydia (modern-day Turkey).', 'China.', 'Rome.'],
      correctAnswer: 'Lydia (modern-day Turkey).',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 6),
      type: 'multiple-choice',
      question: 'What is "Fiat Money"?',
      options: ['Currency that has value because a government decrees it so.', 'Money backed by gold.', 'Money made of silver.'],
      correctAnswer: 'Currency that has value because a government decrees it so.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 7),
      type: 'multiple-choice',
      question: 'Which country developed the first paper money?',
      options: ['China.', 'Italy.', 'Spain.'],
      correctAnswer: 'China.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 8),
      type: 'multiple-choice',
      question: 'What is the function of money as a "Unit of Account"?',
      options: ['It provides a common measure for the value of goods and services.', 'It can be used to buy things.', 'It can be saved for the future.'],
      correctAnswer: 'It provides a common measure for the value of goods and services.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 9),
      type: 'multiple-choice',
      question: 'What does "durability" mean in relation to money?',
      options: ['The ability to withstand wear and tear.', 'The ability to be easily carried.', 'The ability to be divided.'],
      correctAnswer: 'The ability to withstand wear and tear.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 10),
      type: 'multiple-choice',
      question: 'What is the professor\'s main point about money?',
      options: ['Money is a social construct based on trust and utility.', 'Money is the root of all evil.', 'Gold is the only true money.'],
      correctAnswer: 'Money is a social construct based on trust and utility.',
      points: 1
    }
  ]
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'listening',
  title: 'Lecture: The Gold Standard vs. Fiat Currency',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's10', 1),
      type: 'multiple-choice',
      question: 'What was the "Gold Standard"?',
      options: ['A monetary system where currency value is directly linked to gold.', 'A standard for making jewelry.', 'A gold mine.'],
      correctAnswer: 'A monetary system where currency value is directly linked to gold.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 2),
      type: 'multiple-choice',
      question: 'What was an advantage of the Gold Standard?',
      options: ['It provided price stability and prevented high inflation.', 'It allowed for unlimited printing of money.', 'It made gold free for everyone.'],
      correctAnswer: 'It provided price stability and prevented high inflation.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 3),
      type: 'multiple-choice',
      question: 'What was a major disadvantage?',
      options: ['The money supply was limited by the amount of gold available.', 'It was too easy to manage.', 'It caused too much growth.'],
      correctAnswer: 'The money supply was limited by the amount of gold available.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 4),
      type: 'multiple-choice',
      question: 'What does "convertibility" mean?',
      options: ['The ability to exchange paper money for a fixed amount of gold.', 'The ability to change your mind.', 'The ability to drive a car.'],
      correctAnswer: 'The ability to exchange paper money for a fixed amount of gold.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 5),
      type: 'multiple-choice',
      question: 'When did most countries move away from the Gold Standard?',
      options: ['During and after the Great Depression.', 'In the 1800s.', 'Last year.'],
      correctAnswer: 'During and after the Great Depression.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 6),
      type: 'multiple-choice',
      question: 'What is "inflation"?',
      options: ['A general increase in prices and fall in the purchasing value of money.', 'A decrease in prices.', 'Filling a balloon with air.'],
      correctAnswer: 'A general increase in prices and fall in the purchasing value of money.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 7),
      type: 'multiple-choice',
      question: 'How does a central bank control the money supply in a fiat system?',
      options: ['Through monetary policy, such as adjusting interest rates.', 'By digging for more gold.', 'They don\'t control it.'],
      correctAnswer: 'Through monetary policy, such as adjusting interest rates.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 8),
      type: 'multiple-choice',
      question: 'What does "decree" mean?',
      options: ['An official order issued by a legal authority.', 'A small degree.', 'A type of tree.'],
      correctAnswer: 'An official order issued by a legal authority.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 9),
      type: 'multiple-choice',
      question: 'What is a "Store of Value"?',
      options: ['An asset that maintains its value over time.', 'A grocery store.', 'A safe.'],
      correctAnswer: 'An asset that maintains its value over time.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 10),
      type: 'multiple-choice',
      question: 'What does the professor imply about cryptocurrencies?',
      options: ['They represent a new, digital phase in the evolution of money.', 'They are a passing fad.', 'They are better than gold.'],
      correctAnswer: 'They represent a new, digital phase in the evolution of money.',
      points: 1
    }
  ]
};

export const B2_WEEK_6 = createShardedToeflUnit(
  'toefl-b2-w6',
  'Week 6: Listening - Advanced Lectures & Rhetoric',
  'Analyzing advanced lectures on astronomy and economics with focus on rhetorical devices.',
  ['Identify rhetorical devices and speaker intent in lectures', 'Analyze complex information in astronomy and economics contexts', 'Understand the development of ideas in academic discourse'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
