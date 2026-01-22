// ================================================================
// PART 1: MULTIPLE CHOICE CLOZE (FCE Use of English)
// ================================================================
// Testing subtle collocations, fixed phrases, and lexical precision

export interface MultipleChoiceClozeGap {
  gapNumber: number;
  options: string[];
  correctAnswer: string;
  explanation: string;
  lexicalFocus: string; // e.g., "collocation", "phrasal verb", "idiom", "fixed phrase"
}

export interface MultipleChoiceClozeExercise {
  id: string;
  type: 'multiple-choice-cloze';
  title: string;
  instruction: string;
  text: string; // Text with [GAP X] markers
  gaps: MultipleChoiceClozeGap[];
  difficulty: 'medium' | 'hard';
  topic: string;
  wordCount: number;
}

export const MULTIPLE_CHOICE_CLOZE_EXERCISES: MultipleChoiceClozeExercise[] = [
  {
    id: 'b2-mcc-1',
    type: 'multiple-choice-cloze',
    title: 'The Rise of Remote Work',
    instruction: 'For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
    difficulty: 'medium',
    topic: 'Work & Technology',
    wordCount: 280,
    text: `The COVID-19 pandemic brought about a dramatic [GAP 1] in working patterns, with millions of employees suddenly finding themselves working from home. What was initially seen as a temporary [GAP 2] has now become a permanent feature of many industries.

Companies have had to [GAP 3] to this new reality, investing heavily in technology and rethinking their approach to management. While some businesses were quick to [GAP 4] the change, others struggled to maintain productivity and team cohesion.

Research suggests that remote work offers significant [GAP 5], including reduced commuting time and greater flexibility. However, it also [GAP 6] challenges, particularly regarding work-life balance and mental health. Many employees report feeling [GAP 7] from their colleagues and struggling to disconnect from work.

As we move forward, most experts predict a hybrid model will [GAP 8] over, combining the best aspects of office and remote work while addressing the limitations of each approach.`,
    gaps: [
      {
        gapNumber: 1,
        options: ['shift', 'movement', 'change', 'alteration'],
        correctAnswer: 'shift',
        explanation: '"Shift" is the most natural collocation with "dramatic" when referring to changes in patterns or trends. "Dramatic shift" is a fixed collocation.',
        lexicalFocus: 'collocation with "dramatic"'
      },
      {
        gapNumber: 2,
        options: ['measure', 'solution', 'arrangement', 'plan'],
        correctAnswer: 'measure',
        explanation: '"Temporary measure" is a fixed collocation meaning a short-term solution. The other options don\'t collocate naturally with "temporary" in this context.',
        lexicalFocus: 'collocation with "temporary"'
      },
      {
        gapNumber: 3,
        options: ['adapt', 'adopt', 'adjust', 'accommodate'],
        correctAnswer: 'adapt',
        explanation: '"Adapt to" means to change oneself to fit new circumstances. "Adopt" means to take on/accept something new. "Adjust" works but "adapt" is stronger and more commonly used with "reality".',
        lexicalFocus: 'verb + to (adapt/adjust distinction)'
      },
      {
        gapNumber: 4,
        options: ['embrace', 'accept', 'welcome', 'receive'],
        correctAnswer: 'embrace',
        explanation: '"Embrace change" is a strong collocation meaning to accept enthusiastically. While "welcome" works, "embrace" is more powerful and idiomatic in this context.',
        lexicalFocus: 'collocation with "change"'
      },
      {
        gapNumber: 5,
        options: ['benefits', 'profits', 'advantages', 'gains'],
        correctAnswer: 'benefits',
        explanation: '"Offers significant benefits" is the standard collocation. "Advantages" could work but "benefits" is more natural. "Profits" and "gains" are financial terms.',
        lexicalFocus: 'collocation with "offer/significant"'
      },
      {
        gapNumber: 6,
        options: ['poses', 'presents', 'makes', 'creates'],
        correctAnswer: 'poses',
        explanation: '"Poses challenges" is a fixed collocation. "Presents challenges" also works but "poses" is more idiomatic and formal.',
        lexicalFocus: 'collocation with "challenges"'
      },
      {
        gapNumber: 7,
        options: ['isolated', 'separated', 'distant', 'remote'],
        correctAnswer: 'isolated',
        explanation: '"Feel isolated" is the natural collocation for describing loneliness/disconnection. "Remote" has the wrong meaning here. "Distant" and "separated" are less natural.',
        lexicalFocus: 'collocation with "feel" (emotional state)'
      },
      {
        gapNumber: 8,
        options: ['take', 'win', 'get', 'come'],
        correctAnswer: 'take',
        explanation: '"Take over" means to become dominant/prevalent. This is the correct phrasal verb for this context. The other options don\'t form appropriate phrasal verbs here.',
        lexicalFocus: 'phrasal verb: take over'
      }
    ]
  },

  {
    id: 'b2-mcc-2',
    type: 'multiple-choice-cloze',
    title: 'The Psychology of Decision Making',
    instruction: 'For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
    difficulty: 'hard',
    topic: 'Psychology & Behavior',
    wordCount: 290,
    text: `Making decisions is a fundamental part of human experience, yet we often [GAP 1] poor choices despite our best intentions. Psychologists have [GAP 2] considerable research to understanding why this happens.

One major factor is cognitive bias—systematic patterns of deviation from rational judgment. For example, confirmation bias [GAP 3] us to seek information that supports our existing beliefs while ignoring contradictory evidence. This can [GAP 4] to seriously flawed decision-making.

Another challenge is decision fatigue. As we make more choices throughout the day, our mental resources become [GAP 5], making later decisions harder. This is why important figures often [GAP 6] their wardrobe choices—to preserve mental energy for more significant decisions.

Emotions also [GAP 7] a crucial role. While we like to think we make decisions rationally, emotional factors often [GAP 8] our judgment. Understanding these psychological mechanisms can help us make better choices by recognizing when our thinking might be compromised.`,
    gaps: [
      {
        gapNumber: 1,
        options: ['do', 'make', 'take', 'have'],
        correctAnswer: 'make',
        explanation: '"Make choices/decisions" is a fixed collocation. We "make" decisions, not "do" or "take" them.',
        lexicalFocus: 'collocation: make + choices/decisions'
      },
      {
        gapNumber: 2,
        options: ['devoted', 'dedicated', 'committed', 'applied'],
        correctAnswer: 'devoted',
        explanation: '"Devote research to" is the correct collocation. "Dedicate" works but less commonly with "research". "Commit" and "apply" don\'t fit naturally.',
        lexicalFocus: 'collocation with "research"'
      },
      {
        gapNumber: 3,
        options: ['makes', 'leads', 'causes', 'forces'],
        correctAnswer: 'leads',
        explanation: '"Lead someone to do something" means to cause someone to act in a certain way. "Cause" doesn\'t take a direct object + infinitive. "Make" and "force" are too strong.',
        lexicalFocus: 'verb pattern: lead + object + to infinitive'
      },
      {
        gapNumber: 4,
        options: ['result', 'lead', 'bring', 'cause'],
        correctAnswer: 'lead',
        explanation: '"Lead to" is a phrasal verb meaning "result in/cause". "Result in" needs "in", "bring about" needs "about", and "cause" doesn\'t take "to".',
        lexicalFocus: 'phrasal verb: lead to'
      },
      {
        gapNumber: 5,
        options: ['depleted', 'exhausted', 'finished', 'consumed'],
        correctAnswer: 'depleted',
        explanation: '"Depleted" (used up gradually) is the precise term for resources running out. "Exhausted" works but is more physical. "Finished" and "consumed" are less formal.',
        lexicalFocus: 'precise vocabulary: depleted vs exhausted'
      },
      {
        gapNumber: 6,
        options: ['reduce', 'limit', 'minimize', 'decrease'],
        correctAnswer: 'limit',
        explanation: '"Limit choices" is the most natural collocation meaning to restrict options. "Reduce" and "decrease" focus on quantity. "Minimize" suggests reducing to minimum.',
        lexicalFocus: 'collocation with "choices"'
      },
      {
        gapNumber: 7,
        options: ['play', 'take', 'make', 'have'],
        correctAnswer: 'play',
        explanation: '"Play a role" is a fixed idiom meaning to be important/influential. This is the only correct option.',
        lexicalFocus: 'fixed phrase: play a role'
      },
      {
        gapNumber: 8,
        options: ['cloud', 'blur', 'shade', 'darken'],
        correctAnswer: 'cloud',
        explanation: '"Cloud judgment" is an idiomatic expression meaning to impair clear thinking. "Blur" doesn\'t collocate with "judgment". The others are literal meanings.',
        lexicalFocus: 'idiom: cloud judgment'
      }
    ]
  },

  {
    id: 'b2-mcc-3',
    type: 'multiple-choice-cloze',
    title: 'The Future of Sustainable Fashion',
    instruction: 'For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
    difficulty: 'medium',
    topic: 'Environment & Fashion',
    wordCount: 285,
    text: `The fashion industry is under increasing [GAP 1] to address its environmental impact. Fast fashion, in particular, has come under [GAP 2] for its role in pollution and waste.

In response, many brands are now [GAP 3] sustainable practices, from using organic materials to implementing recycling programs. However, critics [GAP 4] that these efforts are often superficial—a phenomenon known as "greenwashing."

The concept of a circular economy is [GAP 5] ground in fashion. Rather than the traditional linear model of make-use-dispose, circular fashion [GAP 6] on designing clothes that can be repaired, reused, or recycled. Some companies are experimenting with rental services and [GAP 7] programs where customers can return old items for credit.

While these initiatives are promising, [GAP 8] change will require not just industry innovation but also shifts in consumer behavior. The question remains whether people are willing to pay more for sustainable clothing or change their shopping habits.`,
    gaps: [
      {
        gapNumber: 1,
        options: ['pressure', 'stress', 'force', 'push'],
        correctAnswer: 'pressure',
        explanation: '"Under pressure" is a fixed expression meaning experiencing demands/stress to do something. The other options don\'t form this collocation.',
        lexicalFocus: 'fixed phrase: under pressure'
      },
      {
        gapNumber: 2,
        options: ['fire', 'attack', 'criticism', 'blame'],
        correctAnswer: 'fire',
        explanation: '"Come under fire" is an idiom meaning to be criticized. "Come under attack" works but is more literal. "Criticism" and "blame" don\'t form this collocation.',
        lexicalFocus: 'idiom: come under fire'
      },
      {
        gapNumber: 3,
        options: ['adopting', 'adapting', 'accepting', 'taking'],
        correctAnswer: 'adopting',
        explanation: '"Adopt practices" means to start using them. "Adapt" means to modify. "Accept" and "take" don\'t collocate naturally with "practices".',
        lexicalFocus: 'collocation: adopt + practices/methods'
      },
      {
        gapNumber: 4,
        options: ['argue', 'claim', 'say', 'state'],
        correctAnswer: 'argue',
        explanation: '"Argue that" is used when presenting a reasoned opinion, especially when disagreeing. "Claim" suggests unproven assertion. "Say" and "state" are too neutral.',
        lexicalFocus: 'verb for presenting arguments/opinions'
      },
      {
        gapNumber: 5,
        options: ['gaining', 'winning', 'earning', 'making'],
        correctAnswer: 'gaining',
        explanation: '"Gain ground" is an idiom meaning to make progress/become more popular. This is a fixed collocation. The other verbs don\'t form this phrase.',
        lexicalFocus: 'idiom: gain ground'
      },
      {
        gapNumber: 6,
        options: ['focuses', 'concentrates', 'centers', 'bases'],
        correctAnswer: 'focuses',
        explanation: '"Focus on" is the standard collocation for directing attention/effort. "Concentrate on" works but is less common. "Center on" means "be mainly about". "Base on" has different meaning.',
        lexicalFocus: 'phrasal verb: focus on vs concentrate on'
      },
      {
        gapNumber: 7,
        options: ['trade-in', 'swap', 'exchange', 'return'],
        correctAnswer: 'trade-in',
        explanation: '"Trade-in program" is the specific term for returning old items for credit toward new purchases. The other options don\'t form this compound noun.',
        lexicalFocus: 'compound noun: trade-in program'
      },
      {
        gapNumber: 8,
        options: ['genuine', 'real', 'actual', 'true'],
        correctAnswer: 'genuine',
        explanation: '"Genuine change" emphasizes authenticity/not superficial. "Real" works but is less formal. "Actual" means "existing in fact". "True" doesn\'t collocate naturally here.',
        lexicalFocus: 'precise adjective: genuine vs real'
      }
    ]
  },

  {
    id: 'b2-mcc-4',
    type: 'multiple-choice-cloze',
    title: 'The Science of Sleep',
    instruction: 'For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
    difficulty: 'hard',
    topic: 'Health & Science',
    wordCount: 295,
    text: `Sleep is essential for physical and mental health, yet many people [GAP 1] to get adequate rest. Scientists have made significant [GAP 2] in understanding why sleep is so important and what happens when we don't get enough.

During sleep, the brain [GAP 3] out critical maintenance tasks, including consolidating memories and clearing toxic waste products. [GAP 4] of sleep disrupts these processes, leading to impaired cognitive function, weakened immunity, and increased risk of chronic diseases.

The modern lifestyle poses numerous [GAP 5] to good sleep. Artificial light from screens [GAP 6] with our circadian rhythms, while stress and irregular schedules further [GAP 7] the problem. Many people resort to sleeping pills, but these often [GAP 8] more harm than good, addressing symptoms without tackling underlying issues.

Sleep experts recommend maintaining consistent sleep schedules, creating dark bedrooms, and avoiding caffeine and screens before bed. These simple changes can significantly improve sleep quality.`,
    gaps: [
      {
        gapNumber: 1,
        options: ['fail', 'miss', 'lose', 'lack'],
        correctAnswer: 'fail',
        explanation: '"Fail to do something" means not succeed in doing it. "Miss" doesn\'t take infinitive. "Lose" and "lack" don\'t fit the grammar pattern needed.',
        lexicalFocus: 'verb pattern: fail + to infinitive'
      },
      {
        gapNumber: 2,
        options: ['strides', 'steps', 'progress', 'advances'],
        correctAnswer: 'strides',
        explanation: '"Make significant strides" is an idiom meaning make important progress. "Make progress" and "make advances" work but "strides" is more emphatic and idiomatic.',
        lexicalFocus: 'idiom: make strides/progress'
      },
      {
        gapNumber: 3,
        options: ['carries', 'takes', 'makes', 'does'],
        correctAnswer: 'carries',
        explanation: '"Carry out" is a phrasal verb meaning to perform/complete tasks. "Take out", "make out", and "do out" don\'t have the right meaning here.',
        lexicalFocus: 'phrasal verb: carry out'
      },
      {
        gapNumber: 4,
        options: ['Lack', 'Absence', 'Loss', 'Want'],
        correctAnswer: 'Lack',
        explanation: '"Lack of" means not having enough of something. "Absence of" means complete non-existence. "Loss" implies had before. "Want of" is archaic.',
        lexicalFocus: 'noun: lack vs absence'
      },
      {
        gapNumber: 5,
        options: ['threats', 'dangers', 'risks', 'hazards'],
        correctAnswer: 'threats',
        explanation: '"Pose threats to" is the natural collocation. "Dangers" and "hazards" don\'t collocate well with "pose". "Risks" works but "threats" is more emphatic.',
        lexicalFocus: 'collocation: pose + threats/risks'
      },
      {
        gapNumber: 6,
        options: ['interferes', 'interrupts', 'disturbs', 'disrupts'],
        correctAnswer: 'interferes',
        explanation: '"Interfere with" means to prevent something from working properly. "Interrupt" means stop temporarily. "Disturb" and "disrupt" are close but "interfere" is most precise for biological processes.',
        lexicalFocus: 'phrasal verb: interfere with vs disrupt'
      },
      {
        gapNumber: 7,
        options: ['compound', 'multiply', 'increase', 'worsen'],
        correctAnswer: 'compound',
        explanation: '"Compound the problem" is an idiomatic expression meaning to make it worse by adding more difficulties. "Worsen" works but "compound" is more sophisticated and precise.',
        lexicalFocus: 'idiom: compound the problem'
      },
      {
        gapNumber: 8,
        options: ['do', 'make', 'cause', 'create'],
        correctAnswer: 'do',
        explanation: '"Do harm" and "do good" are fixed collocations. We don\'t say "make harm" or "cause harm" in this construction with "more...than".',
        lexicalFocus: 'fixed phrase: do harm/good'
      }
    ]
  },

  {
    id: 'b2-mcc-5',
    type: 'multiple-choice-cloze',
    title: 'The Power of Habit',
    instruction: 'For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
    difficulty: 'medium',
    topic: 'Psychology & Self-Improvement',
    wordCount: 290,
    text: `Habits [GAP 1] a fundamental role in shaping our daily lives. Research suggests that up to 40% of our actions are driven by habit rather than conscious decision-making, which [GAP 2] why changing behavior can be so challenging.

The habit loop consists of three components: a cue, a routine, and a reward. Understanding this [GAP 3] is key to both breaking bad habits and forming new ones. The cue triggers the behavior, the routine is the behavior itself, and the reward [GAP 4] the habit by providing satisfaction.

Many people [GAP 5] resolutions to change their habits, particularly at New Year, but most fail within weeks. The problem often [GAP 6] in trying to change too much too quickly. Experts recommend starting small and focusing on one habit at a time.

Environmental design can also help. By [GAP 7] up your environment to make good habits easy and bad habits difficult, you can tip the [GAP 8] in your favor. For example, placing healthy snacks at eye level while hiding junk food makes better choices more automatic.`,
    gaps: [
      {
        gapNumber: 1,
        options: ['play', 'take', 'make', 'have'],
        correctAnswer: 'play',
        explanation: '"Play a role" is a fixed idiom meaning to be important/influential. This is the standard collocation.',
        lexicalFocus: 'fixed phrase: play a role'
      },
      {
        gapNumber: 2,
        options: ['explains', 'shows', 'tells', 'demonstrates'],
        correctAnswer: 'explains',
        explanation: '"Explain why" means to give reasons for something. "Show why" is less natural. "Tell why" is informal. "Demonstrate" doesn\'t typically take "why" clause.',
        lexicalFocus: 'verb + why clause'
      },
      {
        gapNumber: 3,
        options: ['framework', 'structure', 'system', 'pattern'],
        correctAnswer: 'framework',
        explanation: '"Framework" is the most appropriate term for a conceptual structure/model for understanding something. "Structure" and "system" are close but "framework" is more precise for concepts.',
        lexicalFocus: 'precise noun: framework vs structure'
      },
      {
        gapNumber: 4,
        options: ['reinforces', 'strengthens', 'supports', 'backs'],
        correctAnswer: 'reinforces',
        explanation: '"Reinforce" is the technical term in psychology for strengthening behavior through rewards. "Strengthen" is close but "reinforce" is the precise professional term.',
        lexicalFocus: 'technical vocabulary: reinforce (psychology)'
      },
      {
        gapNumber: 5,
        options: ['make', 'take', 'set', 'create'],
        correctAnswer: 'make',
        explanation: '"Make resolutions" is a fixed collocation. We "make" resolutions and promises, not "take" or "create" them.',
        lexicalFocus: 'collocation: make + resolutions/promises'
      },
      {
        gapNumber: 6,
        options: ['lies', 'exists', 'sits', 'stands'],
        correctAnswer: 'lies',
        explanation: '"The problem lies in" is an idiom meaning the issue/cause is located in something. "Exists in" and "sits in" don\'t form this construction. "Stands" is wrong.',
        lexicalFocus: 'idiom: the problem lies in'
      },
      {
        gapNumber: 7,
        options: ['setting', 'making', 'putting', 'laying'],
        correctAnswer: 'setting',
        explanation: '"Set up" is a phrasal verb meaning to arrange/organize. "Make up", "put up", and "lay up" have different meanings and don\'t fit here.',
        lexicalFocus: 'phrasal verb: set up (arrange)'
      },
      {
        gapNumber: 8,
        options: ['scales', 'balance', 'odds', 'chances'],
        correctAnswer: 'scales',
        explanation: '"Tip the scales" is an idiom meaning to change the balance in favor of one side. "Tip the balance" also works but "scales" is more idiomatic.',
        lexicalFocus: 'idiom: tip the scales/balance'
      }
    ]
  },

  {
    id: 'b2-mcc-6',
    type: 'multiple-choice-cloze',
    title: 'Artificial Intelligence and Creativity',
    instruction: 'For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
    difficulty: 'hard',
    topic: 'Technology & Arts',
    wordCount: 295,
    text: `Can machines be creative? This question has [GAP 1] fierce debate as artificial intelligence systems increasingly [GAP 2] out tasks once considered uniquely human, including writing poetry, composing music, and creating visual art.

Traditionalists [GAP 3] that true creativity requires consciousness and emotional experience—qualities machines lack. They argue that AI simply [GAP 4] patterns from training data without genuine understanding or originality.

However, proponents [GAP 5] out that human creativity also builds on existing ideas and patterns. The [GAP 6] between human and AI creativity may be less clear than it first appears. Some AI-generated artwork has even [GAP 7] prestigious competitions, fooling judges who believed they were evaluating human work.

[GAP 8] the philosophical debates, AI creative tools are already being widely adopted. Rather than replacing human artists, these technologies may augment human creativity, handling technical tasks while humans focus on conceptual and emotional elements. The future likely involves collaboration between human and machine intelligence.`,
    gaps: [
      {
        gapNumber: 1,
        options: ['sparked', 'lit', 'ignited', 'fired'],
        correctAnswer: 'sparked',
        explanation: '"Spark debate" is a collocation meaning to initiate discussion. "Ignite" works but "spark" is more natural with "debate". "Lit" and "fired" don\'t fit.',
        lexicalFocus: 'collocation: spark + debate/controversy'
      },
      {
        gapNumber: 2,
        options: ['carry', 'bring', 'make', 'take'],
        correctAnswer: 'carry',
        explanation: '"Carry out" means to perform/complete tasks. "Bring out", "make out", and "take out" have different meanings.',
        lexicalFocus: 'phrasal verb: carry out tasks'
      },
      {
        gapNumber: 3,
        options: ['maintain', 'claim', 'argue', 'hold'],
        correctAnswer: 'maintain',
        explanation: '"Maintain that" means to firmly state an opinion, especially when others disagree. "Argue" works but "maintain" is more formal. "Claim" suggests unproven. "Hold" needs different structure.',
        lexicalFocus: 'verb for stating opinions: maintain vs argue'
      },
      {
        gapNumber: 4,
        options: ['recognizes', 'identifies', 'finds', 'detects'],
        correctAnswer: 'recognizes',
        explanation: '"Recognize patterns" is the standard collocation in cognitive science. "Identify" works but "recognize" is more natural. "Find" and "detect" are less precise.',
        lexicalFocus: 'collocation: recognize + patterns'
      },
      {
        gapNumber: 5,
        options: ['point', 'make', 'bring', 'carry'],
        correctAnswer: 'point',
        explanation: '"Point out" is a phrasal verb meaning to draw attention to something. "Make out" means to perceive/understand. "Bring out" means reveal. "Carry out" means perform.',
        lexicalFocus: 'phrasal verb: point out (indicate)'
      },
      {
        gapNumber: 6,
        options: ['distinction', 'difference', 'division', 'separation'],
        correctAnswer: 'distinction',
        explanation: '"Distinction between" is used for identifying differences, especially subtle ones. "Difference" works but "distinction" is more formal/precise. "Division" and "separation" are physical.',
        lexicalFocus: 'precise noun: distinction vs difference'
      },
      {
        gapNumber: 7,
        options: ['won', 'gained', 'earned', 'achieved'],
        correctAnswer: 'won',
        explanation: '"Win competitions" is the standard collocation. "Gain" and "earn" don\'t collocate with competitions. "Achieve" needs "success in" or similar.',
        lexicalFocus: 'collocation: win + competitions/prizes'
      },
      {
        gapNumber: 8,
        options: ['Regardless', 'Despite', 'Besides', 'Beyond'],
        correctAnswer: 'Regardless',
        explanation: '"Regardless of" means without being affected by. "Despite" works but "regardless" emphasizes continuing anyway. "Besides" means in addition. "Beyond" means surpassing.',
        lexicalFocus: 'discourse marker: regardless of vs despite'
      }
    ]
  }
];

// Summary
export const MULTIPLE_CHOICE_CLOZE_SUMMARY = {
  total: 6,
  implemented: 6,
  gapsPerExercise: 8,
  totalGaps: 48,
  lexicalFocusAreas: [
    'Fixed collocations',
    'Phrasal verbs',
    'Idioms and fixed phrases',
    'Subtle lexical distinctions',
    'Verb patterns',
    'Precise vocabulary choice',
    'Discourse markers'
  ]
};
