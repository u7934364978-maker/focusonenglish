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
  },

  {
    id: 'b2-mcc-7',
    type: 'multiple-choice-cloze',
    title: 'The Economics of Climate Change',
    instruction: 'For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
    difficulty: 'hard',
    topic: 'Economics & Environment',
    wordCount: 300,
    text: `Climate change poses one of the most significant economic challenges of our time. The costs of inaction [GAP 1] far exceed the investments required for mitigation and adaptation. Yet governments and businesses have been slow to [GAP 2] comprehensive action.

Part of the problem [GAP 3] from the disconnect between short-term political cycles and the long-term nature of climate impacts. Politicians face pressure to deliver immediate results, making it difficult to [GAP 4] policies whose benefits won't be fully realized for decades.

The financial sector is beginning to [GAP 5] this risk seriously. Major banks and investment firms are increasingly [GAP 6] climate factors into their decision-making, recognizing that environmental damage will have profound economic consequences. Some are already [GAP 7] assets from fossil fuel companies, though critics argue this is too little, too late.

Carbon pricing mechanisms, such as emissions trading schemes, have [GAP 8] varying degrees of success. While they create economic incentives for reducing emissions, their effectiveness depends heavily on design and implementation. The challenge is finding policies that drive change without causing economic disruption that undermines political support.`,
    gaps: [
      {
        gapNumber: 1,
        options: ['may', 'could', 'might', 'would'],
        correctAnswer: 'may',
        explanation: '"May well" is used to express strong probability/likelihood. It\'s more definite than "might" or "could", and more natural than "would" in this context.',
        lexicalFocus: 'modal verb: may well (strong probability)'
      },
      {
        gapNumber: 2,
        options: ['undertake', 'undergo', 'take', 'make'],
        correctAnswer: 'undertake',
        explanation: '"Undertake action" means to commit to and begin a significant task. "Take action" works but is less formal. "Undergo" means to experience. "Make" doesn\'t fit.',
        lexicalFocus: 'formal verb: undertake vs take'
      },
      {
        gapNumber: 3,
        options: ['stems', 'derives', 'comes', 'arises'],
        correctAnswer: 'stems',
        explanation: '"Stem from" means to originate/have as a source. "Derive from" is similar but less common in this context. "Come from" and "arise from" are less precise.',
        lexicalFocus: 'phrasal verb: stem from (originate)'
      },
      {
        gapNumber: 4,
        options: ['justify', 'defend', 'support', 'back'],
        correctAnswer: 'justify',
        explanation: '"Justify policies" means to provide good reasons for them. "Defend" implies responding to criticism. "Support" and "back" mean to favor but don\'t capture the reasoning aspect.',
        lexicalFocus: 'precise verb: justify vs defend'
      },
      {
        gapNumber: 5,
        options: ['take', 'treat', 'regard', 'consider'],
        correctAnswer: 'take',
        explanation: '"Take something seriously" is a fixed collocation meaning to consider it important. The other options don\'t form this phrase.',
        lexicalFocus: 'fixed phrase: take seriously'
      },
      {
        gapNumber: 6,
        options: ['factoring', 'including', 'incorporating', 'integrating'],
        correctAnswer: 'factoring',
        explanation: '"Factor into" (or "factor in") means to include as a relevant element in calculations/decisions. "Incorporate into" works but "factor" is more specific for decision-making.',
        lexicalFocus: 'phrasal verb: factor into/in'
      },
      {
        gapNumber: 7,
        options: ['divesting', 'withdrawing', 'removing', 'pulling'],
        correctAnswer: 'divesting',
        explanation: '"Divest assets from" is the financial term for selling off investments. "Withdraw" and "pull out" are less formal. "Remove" doesn\'t fit the grammar.',
        lexicalFocus: 'financial vocabulary: divest'
      },
      {
        gapNumber: 8,
        options: ['met', 'achieved', 'reached', 'attained'],
        correctAnswer: 'met',
        explanation: '"Met with success/failure" is a formal expression for experiencing a result. "Achieve" needs direct object. "Reach" and "attain" don\'t fit this construction.',
        lexicalFocus: 'formal expression: meet with (experience)'
      }
    ]
  },

  {
    id: 'b2-mcc-8',
    type: 'multiple-choice-cloze',
    title: 'The Changing Nature of Friendship',
    instruction: 'For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
    difficulty: 'medium',
    topic: 'Society & Relationships',
    wordCount: 290,
    text: `Social media has fundamentally [GAP 1] the landscape of friendship. While these platforms enable us to stay in [GAP 2] with far more people than ever before, critics question whether these connections are truly meaningful.

Research [GAP 3] light on this paradox. Studies show that while people have more online "friends," they report feeling lonelier than previous generations. The issue isn't the technology itself but how we [GAP 4] use of it. Passive scrolling through others' content provides little genuine connection.

What [GAP 5] for strong friendships hasn't changed: regular interaction, mutual support, and shared experiences. However, maintaining these qualities [GAP 6] conscious effort in an era of digital distraction. Many people find themselves [GAP 7] too thin, trying to maintain superficial relationships with hundreds of people rather than nurturing deeper bonds with a smaller circle.

The key may be using technology to enhance rather than replace face-to-face interaction. Video calls, shared photo albums, and group chats can [GAP 8] the gap when physical distance separates friends, but they work best as supplements to, not substitutes for, real-world connection.`,
    gaps: [
      {
        gapNumber: 1,
        options: ['altered', 'changed', 'modified', 'transformed'],
        correctAnswer: 'transformed',
        explanation: '"Transform" implies complete, fundamental change. "Alter" and "change" are less dramatic. "Modified" is too technical. "Transform the landscape" is a powerful collocation.',
        lexicalFocus: 'precise verb: transform vs change'
      },
      {
        gapNumber: 2,
        options: ['touch', 'contact', 'connection', 'communication'],
        correctAnswer: 'touch',
        explanation: '"Stay in touch" is a fixed idiom for maintaining contact. "Keep in contact" works but is less common. "Connection" and "communication" don\'t form this phrase.',
        lexicalFocus: 'idiom: stay in touch'
      },
      {
        gapNumber: 3,
        options: ['sheds', 'throws', 'casts', 'brings'],
        correctAnswer: 'sheds',
        explanation: '"Shed light on" is an idiom meaning to clarify/provide understanding. "Throw light on" is less common. "Cast" and "bring" don\'t form this phrase.',
        lexicalFocus: 'idiom: shed light on'
      },
      {
        gapNumber: 4,
        options: ['make', 'do', 'have', 'take'],
        correctAnswer: 'make',
        explanation: '"Make use of" is a fixed collocation meaning to utilize. We don\'t say "do use of" or "have use of" in this context.',
        lexicalFocus: 'fixed phrase: make use of'
      },
      {
        gapNumber: 5,
        options: ['makes', 'counts', 'matters', 'means'],
        correctAnswer: 'makes',
        explanation: '"What makes for" means what contributes to/creates something. This is a fixed expression. The other options don\'t fit this construction.',
        lexicalFocus: 'expression: what makes for (contributes to)'
      },
      {
        gapNumber: 6,
        options: ['requires', 'demands', 'needs', 'calls'],
        correctAnswer: 'requires',
        explanation: '"Require effort" is the most natural collocation. "Demand" works but is stronger. "Need" is less formal. "Call for" would need "for" after "calls".',
        lexicalFocus: 'collocation: require + effort/attention'
      },
      {
        gapNumber: 7,
        options: ['spread', 'stretched', 'extended', 'expanded'],
        correctAnswer: 'stretched',
        explanation: '"Stretched too thin" is an idiom meaning overextended/trying to do too much. This is a fixed expression. The other options don\'t form this phrase.',
        lexicalFocus: 'idiom: stretched too thin'
      },
      {
        gapNumber: 8,
        options: ['bridge', 'cross', 'span', 'link'],
        correctAnswer: 'bridge',
        explanation: '"Bridge the gap" is an idiom meaning to reduce/overcome differences or distance. "Span" works but is less idiomatic. "Cross" and "link" don\'t fit.',
        lexicalFocus: 'idiom: bridge the gap'
      }
    ]
  },

  {
    id: 'b2-mcc-9',
    type: 'multiple-choice-cloze',
    title: 'The Art of Negotiation',
    instruction: 'For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
    difficulty: 'hard',
    topic: 'Business & Communication',
    wordCount: 295,
    text: `Effective negotiation is a crucial skill in both professional and personal contexts. Contrary to popular belief, good negotiators don't [GAP 1] over opponents through aggressive tactics. Instead, they focus on creating mutually beneficial outcomes that [GAP 2] all parties' interests.

Preparation is [GAP 3] to successful negotiation. Before entering discussions, skilled negotiators thoroughly research the other party's position, identify their own priorities, and [GAP 4] potential areas of compromise. This groundwork enables them to respond flexibly as negotiations unfold.

During negotiations, effective communicators [GAP 5] careful attention to both verbal and non-verbal signals. They ask open-ended questions to understand underlying interests rather than just stated positions. This [GAP 6] often reveals creative solutions that might otherwise [GAP 7] unnoticed.

The best negotiators know when to [GAP 8] their ground and when to show flexibility. Being too rigid risks deadlock, while conceding too quickly can leave value on the table. The art lies in finding the balance that advances your interests while maintaining a productive relationship with the other party.`,
    gaps: [
      {
        gapNumber: 1,
        options: ['win', 'prevail', 'triumph', 'succeed'],
        correctAnswer: 'prevail',
        explanation: '"Prevail over" means to prove superior/gain victory over. "Win over" means to convince. "Triumph" needs "over" in different contexts. "Succeed" doesn\'t take "over".',
        lexicalFocus: 'phrasal verb: prevail over vs win over'
      },
      {
        gapNumber: 2,
        options: ['serve', 'meet', 'satisfy', 'address'],
        correctAnswer: 'serve',
        explanation: '"Serve interests" is the formal collocation for advancing/benefiting interests. "Meet" works with "needs". "Satisfy" and "address" don\'t collocate as naturally with "interests".',
        lexicalFocus: 'collocation: serve + interests/needs'
      },
      {
        gapNumber: 3,
        options: ['key', 'essential', 'vital', 'fundamental'],
        correctAnswer: 'key',
        explanation: '"Key to" means crucially important for. While all options mean important, "key to" is the most natural collocation in this structure.',
        lexicalFocus: 'collocation: key to (crucial for)'
      },
      {
        gapNumber: 4,
        options: ['anticipate', 'predict', 'foresee', 'expect'],
        correctAnswer: 'anticipate',
        explanation: '"Anticipate" means to expect and prepare for. "Predict" is about forecasting. "Foresee" suggests seeing in advance. "Expect" is less formal. "Anticipate" best captures proactive preparation.',
        lexicalFocus: 'precise verb: anticipate vs predict'
      },
      {
        gapNumber: 5,
        options: ['pay', 'give', 'take', 'show'],
        correctAnswer: 'pay',
        explanation: '"Pay attention to" is a fixed collocation. We don\'t say "give attention to" in this structure (though "give attention" alone works). "Take" and "show" don\'t fit.',
        lexicalFocus: 'fixed phrase: pay attention to'
      },
      {
        gapNumber: 6,
        options: ['approach', 'method', 'technique', 'strategy'],
        correctAnswer: 'approach',
        explanation: '"Approach" is the most general term for a way of doing something. "Method" and "technique" are more specific/technical. "Strategy" is broader. Context needs "approach".',
        lexicalFocus: 'precise noun: approach vs method'
      },
      {
        gapNumber: 7,
        options: ['go', 'pass', 'remain', 'stay'],
        correctAnswer: 'go',
        explanation: '"Go unnoticed" is a fixed collocation meaning to not be observed. "Pass unnoticed" also works but is less common. "Remain" and "stay" don\'t fit this construction.',
        lexicalFocus: 'collocation: go unnoticed/undetected'
      },
      {
        gapNumber: 8,
        options: ['hold', 'stand', 'keep', 'maintain'],
        correctAnswer: 'hold',
        explanation: '"Hold your ground" is an idiom meaning to maintain your position despite opposition. "Stand your ground" also works but "hold" is more common in this exact phrase.',
        lexicalFocus: 'idiom: hold/stand your ground'
      }
    ]
  },

  {
    id: 'b2-mcc-10',
    type: 'multiple-choice-cloze',
    title: 'The Impact of Urbanization on Wildlife',
    instruction: 'For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
    difficulty: 'medium',
    topic: 'Environment & Biology',
    wordCount: 295,
    text: `As cities expand, wildlife faces mounting [GAP 1] to survive. Habitat loss, pollution, and human disturbance [GAP 2] significant challenges to urban wildlife populations. However, some species have demonstrated remarkable [GAP 3] in adapting to city life.

Urban environments [GAP 4] unique opportunities alongside threats. Cities provide abundant food sources, from garbage bins to parks and gardens. Buildings offer shelter and nesting sites. Species that successfully [GAP 5] advantage of these resources can thrive, sometimes achieving higher population densities than in natural habitats.

The relationship between humans and urban wildlife is complex. While many people [GAP 6] the presence of birds, squirrels, and other charismatic species, conflicts arise when wildlife causes property damage or poses health risks. Rats, pigeons, and gulls often [GAP 7] the line between tolerated neighbor and pest.

Conservation biologists are increasingly [GAP 8] attention to urban ecology. Understanding how wildlife adapts to cities can inform strategies for creating more wildlife-friendly urban environments. Features like green roofs, wildlife corridors, and preserved green spaces can help cities accommodate both human residents and biodiversity.`,
    gaps: [
      {
        gapNumber: 1,
        options: ['pressure', 'stress', 'strain', 'burden'],
        correctAnswer: 'pressure',
        explanation: '"Mounting pressure" is a collocation meaning increasing force/urgency to do something. "Stress" and "strain" are close but "pressure" is most natural with "mounting".',
        lexicalFocus: 'collocation: mounting pressure/tension'
      },
      {
        gapNumber: 2,
        options: ['pose', 'present', 'create', 'cause'],
        correctAnswer: 'pose',
        explanation: '"Pose challenges" is a fixed collocation. "Present challenges" works but is less common. "Create" and "cause" don\'t collocate naturally with "challenges".',
        lexicalFocus: 'collocation: pose + challenges/threats'
      },
      {
        gapNumber: 3,
        options: ['adaptability', 'flexibility', 'adjustment', 'resilience'],
        correctAnswer: 'adaptability',
        explanation: '"Adaptability" specifically refers to the ability to adjust to new conditions. "Flexibility" is about being open to change. "Adjustment" is an action. "Resilience" is about recovering from difficulties.',
        lexicalFocus: 'precise noun: adaptability vs flexibility'
      },
      {
        gapNumber: 4,
        options: ['present', 'offer', 'provide', 'give'],
        correctAnswer: 'present',
        explanation: '"Present opportunities" is a formal collocation meaning to make available. "Offer" and "provide" work but "present" is more formal/sophisticated. "Give" is too casual.',
        lexicalFocus: 'formal verb: present vs offer'
      },
      {
        gapNumber: 5,
        options: ['take', 'make', 'have', 'get'],
        correctAnswer: 'take',
        explanation: '"Take advantage of" is a fixed phrase meaning to benefit from/exploit an opportunity. The other options don\'t form this collocation.',
        lexicalFocus: 'fixed phrase: take advantage of'
      },
      {
        gapNumber: 6,
        options: ['appreciate', 'value', 'welcome', 'enjoy'],
        correctAnswer: 'appreciate',
        explanation: '"Appreciate" means to recognize the value/importance of something. "Value" and "welcome" work but "appreciate" best captures positive recognition. "Enjoy" is more casual.',
        lexicalFocus: 'precise verb: appreciate vs value'
      },
      {
        gapNumber: 7,
        options: ['cross', 'blur', 'tread', 'walk'],
        correctAnswer: 'blur',
        explanation: '"Blur the line" is an idiom meaning to make the distinction unclear. "Tread the line" means to carefully avoid crossing boundaries. "Cross" and "walk" don\'t fit idiomatically.',
        lexicalFocus: 'idiom: blur the line/boundary'
      },
      {
        gapNumber: 8,
        options: ['paying', 'giving', 'directing', 'focusing'],
        correctAnswer: 'paying',
        explanation: '"Pay attention to" is the standard collocation. While "direct attention to" works, "pay attention" is more natural. "Give" and "focus" don\'t fit this structure.',
        lexicalFocus: 'collocation: pay attention to'
      }
    ]
  },

  {
    id: 'b2-mcc-11',
    type: 'multiple-choice-cloze',
    title: 'The Philosophy of Education',
    instruction: 'For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
    difficulty: 'hard',
    topic: 'Education & Society',
    wordCount: 300,
    text: `What is the purpose of education? This fundamental question continues to [GAP 1] debate among educators, policymakers, and philosophers. Different cultures and historical periods have [GAP 2] varying answers, reflecting broader social values and priorities.

Traditional approaches emphasized knowledge transmission and academic excellence. Students were expected to [GAP 3] established facts and theories, with success measured through standardized testing. This model has come under increasing [GAP 4] for promoting rote memorization over critical thinking.

Progressive educators [GAP 5] that education should develop the whole person—fostering creativity, emotional intelligence, and social skills alongside academic knowledge. They stress learning through experience and discovery rather than passive reception. Critics, however, [GAP 6] this approach of lacking rigor and failing to ensure students master essential content.

The debate has practical implications for policy. Should schools [GAP 7] primarily on preparing students for employment, or should they cultivate informed, engaged citizens? Can they achieve both goals simultaneously? As automation transforms the job market, these questions [GAP 8] new urgency. Skills that seemed essential decades ago may become obsolete, while abilities like adaptability and lifelong learning grow increasingly vital.`,
    gaps: [
      {
        gapNumber: 1,
        options: ['provoke', 'trigger', 'spark', 'stimulate'],
        correctAnswer: 'spark',
        explanation: '"Spark debate" is a natural collocation meaning to initiate discussion. "Provoke" is stronger/more negative. "Trigger" and "stimulate" work but "spark" is most idiomatic.',
        lexicalFocus: 'collocation: spark + debate/interest'
      },
      {
        gapNumber: 2,
        options: ['yielded', 'produced', 'generated', 'provided'],
        correctAnswer: 'yielded',
        explanation: '"Yield answers" is a formal expression meaning to produce/provide answers. "Produce" works but is less sophisticated. "Generate" and "provide" are less natural in this context.',
        lexicalFocus: 'formal verb: yield (produce)'
      },
      {
        gapNumber: 3,
        options: ['absorb', 'acquire', 'learn', 'gain'],
        correctAnswer: 'absorb',
        explanation: '"Absorb" suggests taking in information passively, fitting the criticism being made. "Acquire" and "learn" are active. "Gain" is less natural with "facts".',
        lexicalFocus: 'precise verb: absorb vs acquire'
      },
      {
        gapNumber: 4,
        options: ['fire', 'attack', 'criticism', 'scrutiny'],
        correctAnswer: 'fire',
        explanation: '"Come under fire" is an idiom meaning to be criticized. "Come under attack" works but is more literal. "Criticism" and "scrutiny" don\'t form this collocation.',
        lexicalFocus: 'idiom: come under fire (be criticized)'
      },
      {
        gapNumber: 5,
        options: ['argue', 'claim', 'maintain', 'contend'],
        correctAnswer: 'contend',
        explanation: '"Contend that" is a formal way to state a position in an argument. "Argue" and "maintain" work but "contend" is more academic. "Claim" suggests unproven assertions.',
        lexicalFocus: 'formal verb: contend vs argue'
      },
      {
        gapNumber: 6,
        options: ['accuse', 'charge', 'blame', 'criticize'],
        correctAnswer: 'accuse',
        explanation: '"Accuse something of" means to claim it has a fault. "Charge with" works but needs different grammar. "Blame for" needs "for". "Criticize" doesn\'t take "of".',
        lexicalFocus: 'verb pattern: accuse of vs charge with'
      },
      {
        gapNumber: 7,
        options: ['focus', 'concentrate', 'center', 'emphasize'],
        correctAnswer: 'focus',
        explanation: '"Focus on" is the most natural phrasal verb for directing attention/effort. "Concentrate on" works but is less common. "Center on" means "be mainly about". "Emphasize" is different.',
        lexicalFocus: 'phrasal verb: focus on vs concentrate on'
      },
      {
        gapNumber: 8,
        options: ['assume', 'acquire', 'gain', 'take'],
        correctAnswer: 'assume',
        explanation: '"Assume urgency" means to take on/acquire urgent character. This is a formal expression. "Acquire" and "gain" work but are less sophisticated. "Take" doesn\'t fit.',
        lexicalFocus: 'formal verb: assume (take on quality)'
      }
    ]
  },

  {
    id: 'b2-mcc-12',
    type: 'multiple-choice-cloze',
    title: 'The Evolution of Language',
    instruction: 'For questions 1-8, read the text below and decide which answer (A, B, C or D) best fits each gap.',
    difficulty: 'medium',
    topic: 'Linguistics & Culture',
    wordCount: 290,
    text: `Language is constantly evolving, [GAP 1] to reflect changes in society, technology, and culture. New words emerge while others fall into [GAP 2], and meanings shift over time. This dynamic nature often [GAP 3] concerns among people who view linguistic change as corruption rather than natural evolution.

The internet has dramatically [GAP 4] the pace of language change. Abbreviations like "LOL" and "FOMO" have [GAP 5] from casual online chat into mainstream English. Emojis have created an entirely new dimension of communication, conveying emotion and nuance that text alone sometimes struggles to capture.

Linguists [GAP 6] out that every generation believes language is declining, yet English has survived centuries of change while remaining functional and expressive. Language [GAP 7] doesn't follow prescriptive rules set by authorities but rather emerges organically from how people actually communicate.

The key question isn't whether language change is good or bad—it's inevitable either way. Instead, we should [GAP 8] the balance between preserving clarity and embracing innovation. Language must remain comprehensible across generations while adapting to express new concepts and experiences that arise in an ever-changing world.`,
    gaps: [
      {
        gapNumber: 1,
        options: ['adapting', 'adjusting', 'altering', 'modifying'],
        correctAnswer: 'adapting',
        explanation: '"Adapt to reflect" means to change in response to new circumstances. "Adjust" is close but "adapt" is stronger. "Alter" and "modify" are less natural in this context.',
        lexicalFocus: 'verb: adapt vs adjust'
      },
      {
        gapNumber: 2,
        options: ['disuse', 'obsolescence', 'redundancy', 'abandonment'],
        correctAnswer: 'disuse',
        explanation: '"Fall into disuse" is a fixed phrase meaning to stop being used. "Obsolescence" is the process. "Redundancy" means unnecessary. "Abandonment" is too strong.',
        lexicalFocus: 'fixed phrase: fall into disuse'
      },
      {
        gapNumber: 3,
        options: ['raises', 'arouses', 'provokes', 'stirs'],
        correctAnswer: 'raises',
        explanation: '"Raise concerns" is the standard collocation. "Arouse" works but is less common. "Provoke" is stronger. "Stir" doesn\'t collocate naturally with "concerns".',
        lexicalFocus: 'collocation: raise + concerns/questions'
      },
      {
        gapNumber: 4,
        options: ['accelerated', 'quickened', 'hastened', 'sped'],
        correctAnswer: 'accelerated',
        explanation: '"Accelerate" means to increase speed/rate, perfect for describing pace. "Quicken" is less formal. "Hasten" means to cause something to happen sooner. "Speed" needs "up".',
        lexicalFocus: 'precise verb: accelerate vs speed up'
      },
      {
        gapNumber: 5,
        options: ['transferred', 'moved', 'migrated', 'shifted'],
        correctAnswer: 'migrated',
        explanation: '"Migrate from...into" is used for gradual movement between contexts/systems. "Transfer" is more direct. "Move" is too general. "Shift" doesn\'t fit "from...into" structure.',
        lexicalFocus: 'verb: migrate from...into'
      },
      {
        gapNumber: 6,
        options: ['point', 'make', 'bring', 'set'],
        correctAnswer: 'point',
        explanation: '"Point out" is a phrasal verb meaning to draw attention to a fact. "Make out" means to perceive/understand. "Bring out" means reveal. "Set out" means to explain.',
        lexicalFocus: 'phrasal verb: point out vs make out'
      },
      {
        gapNumber: 7,
        options: ['evolution', 'development', 'progress', 'growth'],
        correctAnswer: 'evolution',
        explanation: '"Evolution" specifically refers to gradual natural development over time. "Development" is similar but less specific. "Progress" implies improvement. "Growth" suggests expansion.',
        lexicalFocus: 'precise noun: evolution vs development'
      },
      {
        gapNumber: 8,
        options: ['strike', 'achieve', 'reach', 'find'],
        correctAnswer: 'strike',
        explanation: '"Strike a balance" is an idiom meaning to find an appropriate middle point between extremes. This is a fixed collocation. The other verbs don\'t form this phrase.',
        lexicalFocus: 'idiom: strike a balance'
      }
    ]
  }
];

// Summary
export const MULTIPLE_CHOICE_CLOZE_SUMMARY = {
  total: 12,
  implemented: 12,
  gapsPerExercise: 8,
  totalGaps: 96,
  lexicalFocusAreas: [
    'Fixed collocations',
    'Phrasal verbs',
    'Idioms and fixed phrases',
    'Subtle lexical distinctions',
    'Verb patterns',
    'Precise vocabulary choice',
    'Discourse markers',
    'Formal vs informal register',
    'Advanced academic vocabulary'
  ]
};
