import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 11;

// ============================================
// BLOCK 1: GRAMMAR - FUTURE CONTINUOUS
// ============================================
export const B2_U11_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Future Continuous',
  grammarPoint: 'Future Continuous',
  explanation: 'Use will be + -ing to talk about actions in progress at a specific time in the future.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'This time tomorrow, I ___ across the Atlantic.',
      'In ten years, most people ___ electric cars.',
      'Will you ___ using the conference room at 10 AM?',
      'Scientists ___ still searching for a cure in 2030.',
      'We ___ living in a completely digital world soon.',
      'At midnight, I ___ probably sleeping.',
      'They ___ working on the new project all next week.',
      'What ___ you be doing this time next year?',
      'The robot ___ performing the surgery tomorrow morning.',
      'I ___ wait for you at the station when you arrive.'
    ][i],
    options: [
      ['will be flying', 'will fly', 'will have flown'],
      ['will be driving', 'will drive', 'will have driven'],
      ['be', 'been', 'have'],
      ['will be', 'will', 'will have'],
      ['will be', 'will', 'will have'],
      ['will be', 'will', 'will have'],
      ['will be', 'will', 'will have'],
      ['will', 'do', 'have'],
      ['will be', 'will', 'will have'],
      ['will be waiting', 'will wait', 'will have waited']
    ][i],
    correctAnswer: [
      'will be flying',
      'will be driving',
      'be',
      'will be',
      'will be',
      'will be',
      'will be',
      'will',
      'will be',
      'will be waiting'
    ][i],
    explanation: 'Focusing on the structure and use of Future Continuous for actions in progress.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - FUTURE PERFECT
// ============================================
export const B2_U11_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Future Perfect',
  grammarPoint: 'Future Perfect',
  explanation: 'Use will have + past participle to talk about actions finished before a certain time in the future.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'By 2050, researchers ___ (find) a solution to the crisis.',
      'I ___ (finish) the report by the time you arrive.',
      'How many books ___ you ___ (read) by the end of the year?',
      'She ___ (save) enough money for the trip by June.',
      'We ___ (complete) the training before the launch.',
      'The company ___ (develop) the new software by next month.',
      'By the time the movie ends, I ___ (eat) all the popcorn.',
      'They ___ (arrive) in Tokyo by 8 PM.',
      '___ you ___ (send) the email before the deadline?',
      'He ___ (not/graduate) by next summer.'
    ][i],
    correctAnswer: [
      'will have found',
      'will have finished',
      'will, have read',
      'will have saved',
      'will have completed',
      'will have developed',
      'will have eaten',
      'will have arrived',
      'Will, have sent',
      'will not have graduated'
    ][i],
    explanation: 'Using Future Perfect to indicate completion before a future point.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - CUTTING-EDGE TECHNOLOGY
// ============================================
export const B2_U11_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Cutting-edge Technology',
  explanation: 'Vocabulary for advanced tech and innovation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'This new gadget is truly ___ (revolutionary).',
      'The AI can process data with incredible ___ (accuracy).',
      'The latest ___ (innovation) in medicine is gene therapy.',
      'We need to ___ (upgrade) our systems regularly.',
      'The software is ___ (user-friendly) and easy to navigate.',
      'This is the most ___ (advanced) model available.',
      'The device is ___ (compatible) with all major platforms.',
      'Internet ___ (connectivity) is essential for this app.',
      'The virtual reality ___ (experience) was mind-blowing.',
      'He is a tech ___ (enthusiast) who loves new gadgets.'
    ][i],
    correctAnswer: [
      'revolutionary',
      'accuracy',
      'innovation',
      'upgrade',
      'user-friendly',
      'advanced',
      'compatible',
      'connectivity',
      'experience',
      'enthusiast'
    ][i],
    explanation: 'Common adjectives and nouns in the tech world.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - SOCIAL IMPACT OF TECH
// ============================================
export const B2_U11_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Social Impact of Technology',
  explanation: 'Terms for the effects of technology on society.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'Social media has changed how we ___ (interact) with each other.',
      'The ___ (digital) divide is a growing concern.',
      'We must protect our personal ___ (privacy) online.',
      'Technology has a huge ___ (impact) on education.',
      'Automation might ___ (replace) some traditional jobs.',
      'The speed of ___ (information) exchange is unprecedented.',
      'Cyberbullying is a serious ___ (issue) today.',
      'Online shopping has ___ (transformed) the retail industry.',
      'The ___ (reliance) on smartphones is increasing.',
      'Technology can ___ (enhance) our productivity.'
    ][i],
    options: [
      ['interact', 'act', 'react'],
      ['digital', 'electric', 'manual'],
      ['privacy', 'secret', 'safety'],
      ['impact', 'effect', 'result'],
      ['replace', 'move', 'take'],
      ['information', 'data', 'news'],
      ['issue', 'problem', 'matter'],
      ['transformed', 'changed', 'made'],
      ['reliance', 'dependence', 'need'],
      ['enhance', 'improve', 'make']
    ][i],
    correctAnswer: [
      'interact',
      'digital',
      'privacy',
      'impact',
      'replace',
      'information',
      'issue',
      'transformed',
      'reliance',
      'enhance'
    ][i],
    explanation: 'Vocabulary related to the societal consequences of technology.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (TECH)
// ============================================
export const B2_U11_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Technological Progress',
  explanation: 'Form words related to technology and change.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (DEVELOP) of AI is moving rapidly.',
      'New technologies are ___ (CONTINUE) improving.',
      'The ___ (EFFICIENT) of the new engine is impressive.',
      'We need to find ___ (IMAGINE) solutions to these problems.',
      'The ___ (POPULAR) of smartphones exploded in the 2010s.',
      'Technology provides many ___ (OPPORTUNE) for learning.',
      'The ___ (NECESSARY) of high-speed internet is clear.',
      'His ___ (ADAPT) to new tools was quick.',
      'The ___ (CREATE) use of software is encouraged.',
      'The ___ (REDUCE) in cost made it accessible to everyone.'
    ][i],
    correctAnswer: [
      'development',
      'continually',
      'efficiency',
      'imaginative',
      'popularity',
      'opportunities',
      'necessity',
      'adaptation',
      'creative',
      'reduction'
    ][i],
    explanation: 'Standard word formation transformations.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE FUTURE OF WORK
// ============================================
export const B2_U11_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Working in the Year 2040',
  explanation: 'Read the predictions about the future workplace and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What will be the main change in the workplace?' : 'How will remote work evolve?',
    options: [['Total automation', 'More meetings', 'Less tech', 'Old tools'], ['It will be the norm', 'It will disappear', 'It will be harder', 'It will stay same']][i % 2],
    correctAnswer: i < 5 ? 'Total automation' : 'It will be the norm',
    explanation: 'Reading for gist and detail in a tech-focused text.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - TECH PODCAST
// ============================================
export const B2_U11_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: The Latest Smartphone Review',
  explanation: 'Listen to the reviewer and identify the pros and cons.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What does the reviewer think about the battery life?`,
    options: ['Impressive', 'Average', 'Poor', 'Disappointing'],
    correctAnswer: 'Impressive',
    explanation: 'Listening for opinion and evaluation.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - TECH REVIEWS
// ============================================
export const B2_U11_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Product Reviews',
  explanation: 'Choose the most appropriate phrase for a tech review.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To start a review:',
      'To describe a feature:',
      'To mention a drawback:',
      'To compare with another model:',
      'To talk about ease of use:',
      'To recommend the product:',
      'To mention the price:',
      'To talk about performance:',
      'To conclude:',
      'To give a rating:'
    ][i],
    options: [
      ['I recently got my hands on...', 'I bought it.', 'Tech is cool.'],
      ['One standout feature is...', 'It has this.', 'Feature:'],
      ['On the downside, the battery...', 'It is bad.', 'Not good:'],
      ['Compared to its predecessor...', 'It is better.', 'Old one:'],
      ['The interface is incredibly intuitive.', 'Easy.', 'Simple:'],
      ['I would highly recommend it to...', 'Buy it.', 'Get it:'],
      ['It is definitely worth the investment.', 'Cheap.', 'Expensive.'],
      ['It handles multitasking with ease.', 'Fast.', 'Good speed:'],
      ['All in all, it is a solid choice.', 'Bye.', 'Final words:'],
      ['I give it four out of five stars.', 'Good.', 'Score:']
    ][i],
    correctAnswer: [
      'I recently got my hands on...',
      'One standout feature is...',
      'On the downside, the battery...',
      'Compared to its predecessor...',
      'The interface is incredibly intuitive.',
      'I would highly recommend it to...',
      'It is definitely worth the investment.',
      'It handles multitasking with ease.',
      'All in all, it is a solid choice.',
      'I give it four out of five stars.'
    ][i],
    explanation: 'Using specific vocabulary and tone for consumer tech reviews.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - PREDICTING THE FUTURE
// ============================================
export const B2_U11_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Certainty and Uncertainty',
  explanation: 'Identify natural ways to express predictions about tech.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally predict something that is almost certain?`,
    options: ['There is no doubt that...', 'Maybe...', 'I think...', 'Possibly...'],
    correctAnswer: 'There is no doubt that...',
    explanation: 'Using degrees of certainty in spoken English.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U11_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 11',
  explanation: 'Consolidation of Future Continuous and Future Perfect.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'By next year, I ___ (finish) my degree.' : 'This time next month, I ___ (travel) in Asia.',
    options: i < 5 ? ['will have finished', 'will finish', 'will be finishing'] : ['will be traveling', 'will travel', 'will have traveled'],
    correctAnswer: i < 5 ? 'will have finished' : 'will be traveling',
    explanation: 'Differentiating between Future Perfect and Future Continuous.',
    points: 1
  }))
};

export const B2_UNIT_11 = createB2Unit(
  'b2-u11',
  'Future Technology',
  'Master future tenses while exploring the world of technology and innovation.',
  ['Use Future Continuous for actions in progress in the future', 'Use Future Perfect for actions completed before a future point', 'Understand vocabulary related to cutting-edge technology and its social impact'],
  [
    B2_U11_BLOCK1, B2_U11_BLOCK2, B2_U11_BLOCK3, B2_U11_BLOCK4, B2_U11_BLOCK5,
    B2_U11_BLOCK6, B2_U11_BLOCK7, B2_U11_BLOCK8, B2_U11_BLOCK9, B2_U11_BLOCK10
  ]
);
