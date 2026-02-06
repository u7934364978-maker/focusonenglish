import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 35;
const LEVEL = 'b1';

// SHARDS 1-2: Speaking Templates & Transitions
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Speaking: Opinion Phrases',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'Which phrase is best for starting an opinion?',
      'How do you introduce your first reason?',
      'Which word can be used instead of "also"?',
      'What is a good way to give an example?',
      'How do you introduce a second reason?',
      'Which phrase is used to conclude a response?',
      'If you need to stall for time, you can say:',
      'To clarify a point, you might say:',
      'To express a strong opinion, use:',
      'When you disagree with an idea, you can say:'
    ][i],
    options: [
      ['In my view, ...', 'I want to say ...', 'The book says ...'],
      ['Firstly, ...', 'One, ...', 'Start, ...'],
      ['Furthermore, ...', 'And, ...', 'Again, ...'],
      ['For instance, ...', 'Like, ...', 'Think of ...'],
      ['Moreover, ...', 'Next, ...', 'Two, ...'],
      ['To sum up, ...', 'End, ...', 'The final ...'],
      ['That\'s a good question. Let me think ...', 'Wait ...', 'Um ...'],
      ['In other words, ...', 'I mean ...', 'Actually ...'],
      ['I firmly believe that ...', 'I think maybe ...', 'I guess ...'],
      ['I take a different view ...', 'You are wrong ...', 'No ...']
    ][i],
    correctAnswer: [
      'In my view, ...', 'Firstly, ...', 'Furthermore, ...',
      'For instance, ...', 'Moreover, ...', 'To sum up, ...',
      'That\'s a good question. Let me think ...', 'In other words, ...',
      'I firmly believe that ...', 'I take a different view ...'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Speaking: Integrated Task Transitions',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'How do you start a summary of a reading passage?',
      'How do you introduce the speaker\'s opinion?',
      'If the speaker disagrees with the reading, use:',
      'To link the reading and the listening, you can say:',
      'How do you mention a specific detail from the lecture?',
      'To express a contrast, use:',
      'If the speaker supports the reading, use:',
      'How do you introduce the main topic of both?',
      'To summarize the final point of the lecture, say:',
      'Which word introduces a result?'
    ][i],
    options: [
      ['The passage states that ...', 'I read that ...', 'It is about ...'],
      ['The professor argues that ...', 'He says ...', 'The man thinks ...'],
      ['However, the speaker contends that ...', 'But he says no ...', 'Actually ...'],
      ['In addition to the passage, the lecturer mentions ...', 'The reading and the talk ...', 'They both say ...'],
      ['According to the lecturer, ...', 'He said ...', 'For example ...'],
      ['On the other hand, ...', 'Also, ...', 'Plus, ...'],
      ['The lecturer provides evidence that supports ...', 'He likes the idea ...', 'He agrees ...'],
      ['Both the reading and the lecture discuss ...', 'They talk about ...', 'It is about ...'],
      ['Finally, the professor concludes by saying ...', 'Lastly, ...', 'The end is ...'],
      ['Consequently, ...', 'Because, ...', 'So ...']
    ][i],
    correctAnswer: [
      'The passage states that ...', 'The professor argues that ...',
      'However, the speaker contends that ...',
      'In addition to the passage, the lecturer mentions ...',
      'According to the lecturer, ...', 'On the other hand, ...',
      'The lecturer provides evidence that supports ...',
      'Both the reading and the lecture discuss ...',
      'Finally, the professor concludes by saying ...', 'Consequently, ...'
    ][i],
    points: 1
  }))
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'vocabulary',
  title: 'Writing: Academic Discussion Phrases',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'How do you acknowledge another student\'s point?',
      'To build on another student\'s idea, say:',
      'To present a contrasting view to a classmate, use:',
      'Which phrase introduces your main argument?',
      'How do you provide supporting evidence?',
      'To emphasize a point, you can say:',
      'Which word introduces a concession?',
      'How do you conclude your post?',
      'To show a cause-and-effect relationship, use:',
      'What is a more formal word for "think"?'
    ][i],
    options: [
      ['I agree with [Name] that ...', 'He is right ...', 'I like his idea ...'],
      ['Building on [Name]\'s point, I would add ...', 'Also, he said ...', 'I want to say more ...'],
      ['While I understand [Name]\'s perspective, I believe ...', 'He is wrong ...', 'But I think ...'],
      ['I strongly believe that ...', 'My idea is ...', 'I want to talk about ...'],
      ['This is evident from ...', 'I know this because ...', 'Here is a reason ...'],
      ['It is worth noting that ...', 'Look at this ...', 'This is big ...'],
      ['Admittedly, ...', 'Yes, but ...', 'Maybe ...'],
      ['Overall, I think that ...', 'The end ...', 'I am done ...'],
      ['As a result, ...', 'Because ...', 'Then ...'],
      ['Maintain', 'Say', 'Tell']
    ][i],
    correctAnswer: [
      'I agree with [Name] that ...', 'Building on [Name]\'s point, I would add ...',
      'While I understand [Name]\'s perspective, I believe ...',
      'I strongly believe that ...', 'This is evident from ...',
      'It is worth noting that ...', 'Admittedly, ...', 'Overall, I think that ...',
      'As a result, ...', 'Maintain'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'vocabulary',
  title: 'Writing: Integrated Task Connectors',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the goal of the Integrated Writing task?',
      'How should you organize your essay?',
      'Which word introduces a similarity?',
      'Which word introduces a difference?',
      'How do you state the lecture\'s main point?',
      'How do you refer to the reading passage?',
      'To show that the lecture contradicts the reading, use:',
      'To show that the lecture clarifies the reading, use:',
      'Should you include your personal opinion?',
      'How do you describe a specific example from the lecture?'
    ][i],
    options: [
      ['To summarize how the lecture relates to the reading', 'To write a story', 'To give your opinion'],
      ['By comparing points from both sources', 'By writing about only one source', 'In one long paragraph'],
      ['Similarly, ...', 'But, ...', 'First, ...'],
      ['In contrast, ...', 'Also, ...', 'Next, ...'],
      ['The lecturer\'s main argument is that ...', 'He says ...', 'The lecture is about ...'],
      ['The article claims that ...', 'The book says ...', 'I read that ...'],
      ['The lecture casts doubt on ...', 'The lecture is different ...', 'He says no ...'],
      ['The lecturer further explains ...', 'He makes it easy ...', 'He says yes ...'],
      ['No, only summarize the sources', 'Yes, at the end', 'Yes, in every paragraph'],
      ['For example, the professor mentions ...', 'He said one thing ...', 'There is a story ...']
    ][i],
    correctAnswer: [
      'To summarize how the lecture relates to the reading',
      'By comparing points from both sources', 'Similarly, ...',
      'In contrast, ...', 'The lecturer\'s main argument is that ...',
      'The article claims that ...', 'The lecture casts doubt on ...',
      'The lecturer further explains ...', 'No, only summarize the sources',
      'For example, the professor mentions ...'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'grammar',
  title: 'Grammar Review: Advanced Structures',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'Not only ____ he arrive late, but he also forgot his notes.',
      'Never ____ I seen such a beautiful sight.',
      'Hardly ____ they started eating when the phone rang.',
      'Only then ____ I realize my mistake.',
      'No sooner ____ she left than it started to rain.',
      'Under no circumstances ____ you open that door.',
      'Little ____ they know about the surprise.',
      'Rarely ____ she go to the cinema.',
      'Seldom ____ we see such talent.',
      'Scarcely ____ he finished speaking when everyone cheered.'
    ][i],
    options: [
      ['did', 'does', 'is'],
      ['have', 'had', 'has'],
      ['had', 'have', 'did'],
      ['did', 'do', 'was'],
      ['had', 'has', 'did'],
      ['should', 'shall', 'are'],
      ['did', 'do', 'had'],
      ['does', 'did', 'is'],
      ['do', 'did', 'does'],
      ['had', 'has', 'did']
    ][i],
    correctAnswer: [
      'did', 'have', 'had', 'did', 'had', 'should', 'did', 'does', 'do', 'had'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Speaking & Writing Simulation I',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'In a Speaking task, what should you do if you make a mistake?',
      'How long is the preparation time for the first Speaking task?',
      'How long do you have to speak in the first task?',
      'In the Integrated Writing task, how many words should you write approximately?',
      'What is the time limit for the Integrated Writing task?',
      'In the Academic Discussion task, what is the minimum word count usually recommended?',
      'What is the time limit for the Academic Discussion task?',
      'What is the most important part of the Speaking response?',
      'How do you show variety in your writing?',
      'Should you copy sentences exactly from the reading?'
    ][i],
    options: [
      ['Correct yourself quickly and continue', 'Stop speaking', 'Start from the beginning'],
      ['15 seconds', '30 seconds', '45 seconds'],
      ['45 seconds', '60 seconds', '30 seconds'],
      ['150-225 words', '100 words', '300 words'],
      ['20 minutes', '30 minutes', '10 minutes'],
      ['100 words', '50 words', '200 words'],
      ['10 minutes', '20 minutes', '5 minutes'],
      ['Clarity and organization', 'Speaking very fast', 'Using very long words'],
      ['By using synonyms and different sentence structures', 'By using the same word many times', 'By writing one long sentence'],
      ['No, always paraphrase', 'Yes', 'Only if they are short']
    ][i],
    correctAnswer: [
      'Correct yourself quickly and continue', '15 seconds', '45 seconds',
      '150-225 words', '20 minutes', '100 words', '10 minutes',
      'Clarity and organization',
      'By using synonyms and different sentence structures',
      'No, always paraphrase'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Academic Synonyms I',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a synonym for "improve"?',
      'A synonym for "decrease" is:',
      'What is a synonym for "important"?',
      'A synonym for "explain" is:',
      'What is a synonym for "change"?',
      'A synonym for "difficult" is:',
      'What is a synonym for "show"?',
      'A synonym for "start" is:',
      'What is a synonym for "stop"?',
      'A synonym for "help" is:'
    ][i],
    options: [
      ['Enhance', 'Lower', 'Keep'],
      ['Diminish', 'Increase', 'Maintain'],
      ['Crucial', 'Minor', 'Small'],
      ['Elucidate', 'Hide', 'Ignore'],
      ['Modify', 'Stay', 'Keep'],
      ['Arduous', 'Easy', 'Simple'],
      ['Demonstrate', 'Conceal', 'Wait'],
      ['Commence', 'End', 'Stop'],
      ['Terminate', 'Begin', 'Go'],
      ['Assist', 'Hinder', 'Block']
    ][i],
    correctAnswer: [
      'Enhance', 'Diminish', 'Crucial', 'Elucidate', 'Modify',
      'Arduous', 'Demonstrate', 'Commence', 'Terminate', 'Assist'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Academic Synonyms II',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a synonym for "many"?',
      'A synonym for "fast" is:',
      'What is a synonym for "wrong"?',
      'A synonym for "right" is:',
      'What is a synonym for "clear"?',
      'A synonym for "problem" is:',
      'What is a synonym for "goal"?',
      'A synonym for "result" is:',
      'What is a synonym for "reason"?',
      'A synonym for "idea" is:'
    ][i],
    options: [
      ['Numerous', 'Few', 'Little'],
      ['Rapid', 'Slow', 'Gradual'],
      ['Erroneous', 'Correct', 'Valid'],
      ['Accurate', 'False', 'Wrong'],
      ['Evident', 'Vague', 'Obscure'],
      ['Issue', 'Solution', 'Benefit'],
      ['Objective', 'Past', 'Story'],
      ['Outcome', 'Start', 'Source'],
      ['Rationale', 'Result', 'Effect'],
      ['Concept', 'Fact', 'Truth']
    ][i],
    correctAnswer: [
      'Numerous', 'Rapid', 'Erroneous', 'Accurate', 'Evident',
      'Issue', 'Objective', 'Outcome', 'Rationale', 'Concept'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Advanced Lexis: Logic & Argument',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What does "corroborate" mean?',
      'The word "contradict" means:',
      'What is a "counterargument"?',
      'The term "valid" means:',
      'What does "refute" mean?',
      'The word "consistent" means:',
      'What is a "fallacy"?',
      'The term "persuasive" means:',
      'What does "coherent" mean?',
      'The word "assertion" means:'
    ][i],
    options: [
      ['Confirm or give support to', 'Ignore', 'Disagree'],
      ['Be in conflict with', 'Agree with', 'Support'],
      ['An argument put forward to oppose an idea', 'The first argument', 'A funny story'],
      ['Having a sound basis in logic or fact', 'Wrong', 'Funny'],
      ['Prove a statement to be wrong or false', 'Support', 'Believe'],
      ['In agreement', 'Changing all the time', 'Random'],
      ['A failure in reasoning which renders an argument invalid', 'A great idea', 'A true fact'],
      ['Good at persuading someone to do or believe something', 'Boring', 'Weak'],
      ['Logical and consistent', 'Confusing', 'Broken'],
      ['A confident and forceful statement of fact or belief', 'A question', 'A doubt']
    ][i],
    correctAnswer: [
      'Confirm or give support to', 'Be in conflict with',
      'An argument put forward to oppose an idea',
      'Having a sound basis in logic or fact', 'Prove a statement to be wrong or false',
      'In agreement', 'A failure in reasoning which renders an argument invalid',
      'Good at persuading someone to do or believe something',
      'Logical and consistent', 'A confident and forceful statement of fact or belief'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Advanced Lexis: Degree & Intensity',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'Which word means "very big"?',
      'Which word means "very small"?',
      'Which word means "very important"?',
      'Which word means "happening slowly"?',
      'Which word means "happening quickly"?',
      'Which word means "happening often"?',
      'Which word means "hardly ever"?',
      'Which word means "completely"?',
      'Which word means "partly"?',
      'Which word means "exactly"?'
    ][i],
    options: [
      ['Immense', 'Minute', 'Sparse'],
      ['Minute', 'Vast', 'Enormous'],
      ['Paramount', 'Trivial', 'Minor'],
      ['Gradual', 'Sudden', 'Abrupt'],
      ['Abrupt', 'Slow', 'Steady'],
      ['Frequent', 'Occasional', 'Rare'],
      ['Seldom', 'Often', 'Always'],
      ['Entirely', 'Somewhat', 'Slightly'],
      ['Partially', 'Fully', 'Totally'],
      ['Precisely', 'Roughly', 'Nearly']
    ][i],
    correctAnswer: [
      'Immense', 'Minute', 'Paramount', 'Gradual', 'Abrupt',
      'Frequent', 'Seldom', 'Entirely', 'Partially', 'Precisely'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_35 = createShardedToeflUnit(
  'toefl-b1-w35',
  'Week 35: Final Review II (Speaking & Writing Focus)',
  'Consolidate your speaking and writing skills for the exam.',
  ['Master speaking templates and transitions', 'Refine writing structures and connectors', 'Practice with exam-style speaking and writing simulations'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
