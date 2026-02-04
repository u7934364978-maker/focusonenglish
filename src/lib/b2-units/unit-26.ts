import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 26;

// ============================================
// BLOCK 1: GRAMMAR - INVERSION WITH NEGATIVE ADVERBIALS
// ============================================
export const B2_U26_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Inversion: Negative Adverbials',
  grammarPoint: 'Inversion',
  explanation: 'Use inversion (auxiliary + subject) after negative or limiting adverbials (Never, Seldom, Rarely, Little) at the beginning of a sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      '___ I seen such a viral video.',
      '___ does she check her notifications.',
      '___ did he know that the story was fake.',
      '___ have we experienced such rapid change.',
      '___ can you trust everything you read online.',
      '___ had I realized the impact of social media.',
      '___ do we see such honest journalism today.',
      '___ will the company comment on the scandal.',
      '___ have I been so impressed by an app.',
      '___ did she imagine she would become famous.'
    ][i],
    options: [
      ['Never have', 'Never I have', 'Never did'],
      ['Seldom', 'Rarely', 'Never'],
      ['Little', 'Few', 'Small'],
      ['Rarely', 'Never', 'Seldom'],
      ['Under no circumstances', 'Never', 'Rarely'],
      ['Only then', 'Never', 'Rarely'],
      ['Hardly', 'Never', 'Rarely'],
      ['No way', 'Never', 'Rarely'],
      ['Never before', 'Never', 'Rarely'],
      ['Little', 'Few', 'Small']
    ][i],
    correctAnswer: [
      'Never have',
      'Seldom',
      'Little',
      'Rarely',
      'Under no circumstances',
      'Only then',
      'Hardly',
      'No way',
      'Never before',
      'Little'
    ][i],
    explanation: 'Using inversion after emphatic negative adverbials.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - INVERSION WITH NOT ONLY... BUT ALSO
// ============================================
export const B2_U26_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Inversion: Not only... but also',
  grammarPoint: 'Inversion',
  explanation: 'Use inversion after "Not only" when it starts a sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'Not only ___ (be) it a great app, but it is also free.',
      'Not only ___ he ___ (speak) English, but he also speaks Spanish.',
      'Not only ___ they ___ (win) the match, but they also broke a record.',
      'Not only ___ she ___ (write) books, but she also produces movies.',
      'Not only ___ it ___ (rain) all day, but it was also very cold.',
      'Not only ___ the software ___ (be) fast, but it is also reliable.',
      'Not only ___ he ___ (arrive) late, but he also forgot the files.',
      'Not only ___ they ___ (buy) a house, but they also bought a car.',
      'Not only ___ she ___ (be) talented, but she is also hardworking.',
      'Not only ___ we ___ (finish) early, but we also did a great job.'
    ][i],
    correctAnswer: [
      'is',
      'does, speak',
      'did, win',
      'does, write',
      'did, rain',
      'is, (zero)',
      'did, arrive',
      'did, buy',
      'is, (zero)',
      'did, finish'
    ][i],
    explanation: 'Maintaining subject-auxiliary inversion after "Not only".',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - SOCIAL MEDIA & COMMUNICATION
// ============================================
export const B2_U26_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'The Digital World',
  explanation: 'Vocabulary for social media platforms and online interaction.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The post went ___ (viral) in just a few hours.',
      'He has a large ___ (following) on Instagram.',
      'You can ___ (tag) your friends in the photo.',
      'The ___ (algorithm) determines what you see in your feed.',
      'She is a very influential social media ___ (influencer).',
      'I need to update my ___ (profile) picture.',
      'Don\'t forget to ___ (subscribe) to the channel.',
      'The video has millions of ___ (views).',
      'I received a lot of positive ___ (comments).',
      'He decided to ___ (deactivate) his account.'
    ][i],
    correctAnswer: [
      'viral',
      'following',
      'tag',
      'algorithm',
      'influencer',
      'profile',
      'subscribe',
      'views',
      'comments',
      'deactivate'
    ][i],
    explanation: 'Core terms for social media use.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - MEDIA IMPACT & TRENDS
// ============================================
export const B2_U26_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Media and Society',
  explanation: 'Terms for the influence of media on public opinion.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'Social media can create an ___ (echo) chamber.',
      'We must be careful with ___ (misinformation) online.',
      'The story was ___ (trending) all day.',
      'Media ___ (literacy) is an essential skill.',
      'The news had a huge ___ (impact) on the election.',
      'They are trying to ___ (manipulate) public opinion.',
      'The ___ (outreach) of the campaign was impressive.',
      'We live in the ___ (information) age.',
      '___ (Engagement) rates are high on this platform.',
      'The controversy caused a lot of ___ (backlash).'
    ][i],
    options: [
      ['echo', 'sound', 'voice'],
      ['misinformation', 'news', 'data'],
      ['trending', 'moving', 'going'],
      ['literacy', 'reading', 'skill'],
      ['impact', 'effect', 'result'],
      ['manipulate', 'change', 'make'],
      ['outreach', 'reach', 'length'],
      ['information', 'digital', 'tech'],
      ['Engagement', 'Talking', 'Action'],
      ['backlash', 'hit', 'fall']
    ][i],
    correctAnswer: [
      'echo',
      'misinformation',
      'trending',
      'literacy',
      'impact',
      'manipulate',
      'outreach',
      'information',
      'Engagement',
      'backlash'
    ][i],
    explanation: 'Vocabulary for the broader social effects of media.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (MEDIA)
// ============================================
export const B2_U26_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Digital Media',
  explanation: 'Form words related to media and communication.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (POPULAR) of the platform is growing.',
      'We need more ___ (INTERACT) on our posts.',
      'The ___ (COMMUNICATE) was very clear.',
      'He is a very ___ (INFLUENCE) blogger.',
      'The ___ (CREATIVE) of the video was amazing.',
      'We are looking for an ___ (INNOVATE) strategy.',
      'The ___ (ORGANIZE) of the event was handled online.',
      '___ (ADVERTISE) on social media is very effective.',
      'The ___ (REDUCE) in engagement was worrying.',
      'She showed great ___ (INITIATE) in starting the blog.'
    ][i],
    correctAnswer: [
      'popularity',
      'interaction',
      'communication',
      'influential',
      'creativity',
      'innovative',
      'organization',
      'Advertising',
      'reduction',
      'initiative'
    ][i],
    explanation: 'Standard word formation in a media context.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE PSYCHOLOGY OF "LIKES"
// ============================================
export const B2_U26_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Why We Crave Digital Approval',
  explanation: 'Read the article about social media validation and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the "dopamine hit" mentioned in the text?' : 'How can social media affect self-esteem?',
    options: [['A feeling of pleasure from notifications', 'A physical injury', 'A new app', 'A type of food'], ['By encouraging constant comparison', 'By making you smarter', 'By helping you sleep', 'By giving you money']][i % 2],
    correctAnswer: i < 5 ? 'A feeling of pleasure from notifications' : 'By encouraging constant comparison',
    explanation: 'Comprehending psychological aspects of digital use.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - SOCIAL MEDIA TRENDS
// ============================================
export const B2_U26_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: The Future of Social Networking',
  explanation: 'Listen to the expert talk about upcoming trends in social media.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the next big trend according to the speaker?`,
    options: ['Virtual Reality social spaces', 'More text-only apps', 'Disappearing photos', 'Voice-only platforms'],
    correctAnswer: 'Virtual Reality social spaces',
    explanation: 'Listening for predictions and main trends.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - SOCIAL MEDIA POSTS
// ============================================
export const B2_U26_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Crafting Engaging Content',
  explanation: 'Choose the best way to write an engaging social media post.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To grab attention with a question:',
      'To introduce a helpful tip:',
      'To share a personal story:',
      'To use a call to action:',
      'To create a sense of urgency:',
      'To ask for an opinion:',
      'To use hashtags effectively:',
      'To thank your followers:',
      'To announce a giveaway:',
      'To end with a friendly sign-off:'
    ][i],
    options: [
      ['Have you ever wondered why...', 'This is a post.', 'Look at this.'],
      ['Pro tip: Use these shortcuts to...', 'A good idea is...', 'Tip:'],
      ['I wanted to share a quick story about...', 'Once I did this.', 'Story:'],
      ['Click the link in bio to learn more!', 'Go there.', 'Link:'],
      ['Hurry! Only 24 hours left to...', 'Fast.', 'Time:'],
      ['What do you think? Let me know in the comments.', 'Tell me.', 'Opinion?'],
      ['#SocialMedia #Trends #Innovation', '#Post', '#Stuff'],
      ['A huge thank you to everyone for...', 'Thanks.', 'Good job.'],
      ['Enter our giveaway for a chance to win...', 'Free stuff.', 'Win!'],
      ['See you in the next post!', 'Bye.', 'Talk soon.']
    ][i],
    correctAnswer: [
      'Have you ever wondered why...',
      'Pro tip: Use these shortcuts to...',
      'I wanted to share a quick story about...',
      'Click the link in bio to learn more!',
      'Hurry! Only 24 hours left to...',
      'What do you think? Let me know in the comments.',
      '#SocialMedia #Trends #Innovation',
      'A huge thank you to everyone for...',
      'Enter our giveaway for a chance to win...',
      'See you in the next post!'
    ][i],
    explanation: 'Using appropriate tone and structure for digital engagement.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING ONLINE IMPACT
// ============================================
export const B2_U26_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Strong Opinions on Media',
  explanation: 'Identify natural ways to use inversion in speech for emphasis.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally emphasize how rare it is to see good news?`,
    options: ['Rarely do we see such positive stories on the news.', 'I don\'t see good news.', 'Good news is rare.', 'We don\'t see much.'],
    correctAnswer: 'Rarely do we see such positive stories on the news.',
    explanation: 'Using inversion for rhetorical effect in speech.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U26_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 26',
  explanation: 'Consolidation of Inversion and Social Media Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Never ___ (have) I seen anything like it.' : 'Not only ___ (be) it viral, but it\'s also useful.',
    options: i < 5 ? ['have', 'had', 'do'] : ['is', 'was', 'be'],
    correctAnswer: i < 5 ? 'have' : 'is',
    explanation: 'Review of inversion patterns.',
    points: 1
  }))
};

export const B2_UNIT_26 = createB2Unit(
  'b2-u26',
  'The Power of Social Media',
  'Master formal emphasis with inversion while exploring the impact and trends of social media.',
  ['Use inversion after negative and limiting adverbials', 'Use inversion with "Not only... but also" for emphasis', 'Understand key vocabulary for social media and its societal impact'],
  [
    B2_U26_BLOCK1, B2_U26_BLOCK2, B2_U26_BLOCK3, B2_U26_BLOCK4, B2_U26_BLOCK5,
    B2_U26_BLOCK6, B2_U26_BLOCK7, B2_U26_BLOCK8, B2_U26_BLOCK9, B2_U26_BLOCK10
  ]
);
