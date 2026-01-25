// ================================================================
// PART 7: MULTIPLE MATCHING (FCE Reading)
// ================================================================

export interface MultipleMatchingText {
  letter: 'A' | 'B' | 'C' | 'D' | 'E';
  title: string;
  author?: string;
  content: string;
}

export interface MultipleMatchingQuestion {
  number: number;
  statement: string;
  correctText: 'A' | 'B' | 'C' | 'D' | 'E';
  explanation: string;
}

export interface MultipleMatchingExercise {
  id: string;
  type: 'multiple-matching';
  title: string;
  instruction: string;
  texts: MultipleMatchingText[];
  questions: MultipleMatchingQuestion[];
  difficulty: 'medium' | 'hard';
  topic: string;
  totalTexts: number;
}

export const MULTIPLE_MATCHING_EXERCISES: MultipleMatchingExercise[] = [
  {
    id: 'b2-mm-1',
    type: 'multiple-matching',
    title: 'Career Advice from Industry Leaders',
    instruction: 'You are going to read career advice from five different professionals. For questions 1-10, choose from the people (A-E). The people may be chosen more than once.',
    difficulty: 'medium',
    topic: 'Work & Career',
    totalTexts: 5,
    texts: [
      {
        letter: 'A',
        title: 'Sarah Chen - Tech Entrepreneur',
        content: `I started my first company straight out of university, and it failed spectacularly within eighteen months. That experience taught me more than any MBA ever could. The key lesson? Don't be afraid of failure—be afraid of not trying. In the tech industry, we celebrate 'failing fast' because it means you're learning and iterating. My advice to young professionals is to take calculated risks early in your career when you have less to lose. Build your network relentlessly—I can't stress this enough. The opportunity that led to my current successful venture came through a casual conversation at a conference. Also, develop skills that complement your technical expertise. I studied computer science, but learning about business strategy, marketing, and finance made me a much more effective founder. Don't specialize so narrowly that you can't see the bigger picture.`
      },
      {
        letter: 'B',
        title: 'Marcus Thompson - Creative Director',
        content: `The creative industries have changed dramatically since I started twenty years ago. What hasn't changed is the importance of building a strong portfolio. Your degree matters less than what you can actually produce. I look at hundreds of applications every year, and the ones that stand out show genuine creativity and problem-solving skills. My path wasn't linear—I worked in advertising, then journalism, then design before finding my niche. Don't expect to have everything figured out immediately. Give yourself permission to explore different areas within your field. That said, once you identify what you're truly passionate about, commit to becoming exceptional at it. The difference between good and great is usually about the extra effort you're willing to put in. Seek feedback constantly, even when it's uncomfortable. The creative professionals who stagnate are usually the ones who become defensive about criticism.`
      },
      {
        letter: 'C',
        title: 'Dr. Amira Patel - Medical Researcher',
        content: `Research is fundamentally about persistence and intellectual humility. You need to be comfortable with uncertainty and with being wrong—repeatedly. Most experiments fail, and that's not just normal, it's essential to the scientific process. I tell junior researchers that their hypothesis matters less than their methodology. Develop rigorous research skills, learn statistical analysis properly, and always be skeptical of your own conclusions. Collaboration has become increasingly important in modern science. The days of the lone genius are largely over. The most significant breakthroughs now happen at the intersection of disciplines. I work with clinicians, data scientists, and molecular biologists regularly. So my advice is to develop strong communication skills and be genuinely curious about fields adjacent to your own. Finally, think carefully about work-life balance. Science can be all-consuming, and burnout is a real problem in academia.`
      },
      {
        letter: 'D',
        title: 'James Rodriguez - Senior Civil Servant',
        content: `Working in government is profoundly different from the private sector, and not everyone thrives in this environment. The pace is often slower because the stakes are higher—we're dealing with public money and policies that affect millions of people. You need patience and the ability to navigate complex bureaucracies. However, the impact you can have is enormous. I've worked on policies that improved educational outcomes for disadvantaged children and environmental regulations that reduced pollution significantly. That sense of public service is deeply rewarding. My advice? Develop strong writing and analytical skills. In government, the ability to write a clear, persuasive briefing document is invaluable. Also, understand that change happens incrementally. If you're someone who needs to see immediate results from your work, this might frustrate you. But if you're motivated by contributing to society and can appreciate long-term outcomes, public service offers unique opportunities.`
      },
      {
        letter: 'E',
        title: 'Lisa Kowalski - Freelance Consultant',
        content: `Freelancing offers incredible freedom, but it requires discipline and business acumen that many people underestimate. You're not just doing your professional work—you're running a business. That means handling invoicing, taxes, marketing, and client relations. I spent my first year as a freelancer working far more hours than I did in corporate employment, earning less money, and stressing constantly about where the next project would come from. It took time to build a stable client base and learn to price my services appropriately. My biggest piece of advice is to start freelancing as a side project while you still have stable employment. Build your reputation and client roster gradually. Also, be ruthless about time management. Without office hours and colleagues, it's easy to either work constantly or procrastinate endlessly. Set clear boundaries for yourself. And definitely maintain a financial cushion—irregular income is one of the biggest challenges of freelance life.`
      }
    ],
    questions: [
      {
        number: 1,
        statement: 'Which person emphasizes the importance of being open to making mistakes?',
        correctText: 'A',
        explanation: 'Sarah Chen talks about not being afraid of failure and celebrating "failing fast" as a learning opportunity.'
      },
      {
        number: 2,
        statement: 'Which person suggests that immediate results might not always be achievable in their field?',
        correctText: 'D',
        explanation: 'James Rodriguez mentions that change happens incrementally in government and that people who need immediate results might be frustrated.'
      },
      {
        number: 3,
        statement: 'Which person highlights the need to develop abilities beyond their main area of expertise?',
        correctText: 'A',
        explanation: 'Sarah Chen studied computer science but emphasizes learning about business, marketing, and finance to be more effective.'
      },
      {
        number: 4,
        statement: 'Which person warns about the financial challenges of their career path?',
        correctText: 'E',
        explanation: 'Lisa Kowalski discusses irregular income as a major challenge and recommends maintaining a financial cushion.'
      },
      {
        number: 5,
        statement: 'Which person believes that the quality of your work matters more than your qualifications?',
        correctText: 'B',
        explanation: 'Marcus Thompson states that "your degree matters less than what you can actually produce" and emphasizes portfolio quality.'
      },
      {
        number: 6,
        statement: 'Which person recommends starting in a particular career path gradually?',
        correctText: 'E',
        explanation: 'Lisa Kowalski advises starting freelancing as a side project while maintaining stable employment.'
      },
      {
        number: 7,
        statement: 'Which person stresses the value of being receptive to constructive criticism?',
        correctText: 'B',
        explanation: 'Marcus Thompson says to "seek feedback constantly" and notes that stagnating professionals become defensive about criticism.'
      },
      {
        number: 8,
        statement: 'Which person mentions the importance of working with people from different specializations?',
        correctText: 'C',
        explanation: 'Dr. Patel discusses working with clinicians, data scientists, and molecular biologists, and the importance of interdisciplinary collaboration.'
      },
      {
        number: 9,
        statement: 'Which person indicates that their work provides a strong sense of purpose?',
        correctText: 'D',
        explanation: 'James Rodriguez talks about the "sense of public service" being deeply rewarding when working on policies that help millions.'
      },
      {
        number: 10,
        statement: 'Which person admits their career path was not straightforward?',
        correctText: 'B',
        explanation: 'Marcus Thompson explicitly states "My path wasn\'t linear" and describes working in advertising, journalism, then design before finding his niche.'
      }
    ]
  },

  {
    id: 'b2-mm-2',
    type: 'multiple-matching',
    title: 'Travel Experiences Around the World',
    instruction: 'You are going to read about travel experiences from five different people. For questions 1-10, choose from the travelers (A-E). The travelers may be chosen more than once.',
    difficulty: 'medium',
    topic: 'Travel & Culture',
    totalTexts: 5,
    texts: [
      {
        letter: 'A',
        title: 'Tom - Backpacking Through Southeast Asia',
        content: `My three months in Southeast Asia completely changed my perspective on travel. I'd always been someone who planned everything meticulously, but this trip taught me the value of spontaneity. Some of my best experiences—staying with a family in rural Vietnam, joining an impromptu beach volleyball tournament in Thailand—happened because I abandoned my itinerary. The region is incredibly affordable, which allowed me to extend my trip by several weeks. However, the tourist trail can feel a bit repetitive. After a while, the hostels, the same faces, the identical experiences start to blur together. My advice? Venture off the beaten path. Take local buses instead of tourist shuttles. Eat where locals eat. I spent a week on a small Indonesian island that wasn't in any guidebook, and it was magical. The language barrier was occasionally frustrating, but people's kindness transcended words. I left feeling humbled by the hospitality I encountered and questioning many assumptions I'd had about my own privileged lifestyle.`
      },
      {
        letter: 'B',
        title: 'Rachel - Solo Female Traveler in Iceland',
        content: `Iceland had been on my bucket list for years, and traveling there solo was both empowering and challenging. The country's natural beauty is absolutely breathtaking—the waterfalls, geysers, and Northern Lights exceeded my expectations. However, Iceland is expensive. Even staying in hostels and cooking my own meals, I went significantly over budget. The weather was also more challenging than I anticipated. I'd planned a hiking trip in October, and several trails were closed due to conditions. That taught me an important lesson about researching seasonal factors more thoroughly. Despite the setbacks, traveling alone forced me out of my comfort zone in the best way. I joined group tours and met fascinating people from around the world. There's something liberating about being completely responsible for your own experience, making every decision yourself. I also felt remarkably safe throughout—Iceland has very low crime rates, and locals were consistently helpful and welcoming to solo travelers.`
      },
      {
        letter: 'C',
        title: 'Jamal - Cultural Immersion in Japan',
        content: `I spent six weeks in Japan taking a language course, and it was the most culturally enriching experience of my life. Living with a host family rather than in a hotel gave me genuine insight into daily Japanese life. I learned about customs and social etiquette that you'd never pick up as a typical tourist. The emphasis on respect, the attention to detail in every aspect of life, the cleanliness—it was eye-opening. Tokyo is fascinating but overwhelming. The crowds, the constant stimulation, the pace of life—it's intense. I preferred my time in Kyoto, where traditional culture is more visible. Cycling through temples and gardens, attending a tea ceremony, watching craftsmen at work—these slower experiences felt more meaningful. One challenge was the perfectionism in my language classes. I'm used to a more relaxed learning environment, and the structured, intensive approach was initially stressful. But my Japanese improved dramatically. I came to appreciate that pushing beyond your comfort zone is where real growth happens. I left with a deep respect for Japanese culture and a commitment to continue my language studies.`
      },
      {
        letter: 'D',
        title: 'Maria - Family Road Trip Across America',
        content: `Driving across the United States with my husband and two children was ambitious, but it created memories we'll treasure forever. We covered over 8,000 kilometers in five weeks, hitting national parks, quirky roadside attractions, and diverse cities. The logistics were complicated—finding accommodation that fit our budget, keeping the kids entertained during long drives, managing different dietary needs. There were definitely moments of stress, and I won't pretend every day was perfect. But seeing the Grand Canyon through my children's eyes, teaching them to spot wildlife in Yellowstone, experiencing the contrast between regions—it gave them an education no classroom could provide. Americans were incredibly friendly, particularly in smaller towns. We were invited to a local baseball game, given restaurant recommendations, helped when we had car trouble. The downside? The trip was exhausting. We probably tried to cover too much ground. In hindsight, I'd spend more time in fewer places. But the variety and scale of American landscapes are truly impressive, and doing it as a family strengthened our bonds in ways I didn't anticipate.`
      },
      {
        letter: 'E',
        title: 'Sophie - Volunteer Work in East Africa',
        content: `I spent three months volunteering at a wildlife conservation project in Tanzania, and it was both rewarding and eye-opening in unexpected ways. I'd idealized the experience beforehand, imagining I'd be making a significant difference. The reality was more complex. Much of the work was physically demanding and repetitive—maintaining fences, collecting data, removing invasive plants. I learned that meaningful conservation is about consistent, unglamorous effort rather than dramatic interventions. Living conditions were basic, which I'd expected, but I underestimated how emotionally challenging it would be. Seeing the effects of poaching and habitat loss firsthand was heartbreaking. I also had to confront uncomfortable questions about voluntourism—was I genuinely helping, or was this partly about making myself feel good? The organization I worked with was ethical and had long-term local staff, which reassured me. The experience taught me humility and gave me a more nuanced understanding of conservation challenges. I left with enormous respect for the Tanzanian staff who dedicate their lives to this work for a fraction of what international volunteers pay to be there.`
      }
    ],
    questions: [
      {
        number: 1,
        statement: 'Which traveler mentions exceeding their planned spending?',
        correctText: 'B',
        explanation: 'Rachel mentions that despite budget measures, she "went significantly over budget" in Iceland.'
      },
      {
        number: 2,
        statement: 'Which traveler felt their experience led them to question aspects of their own lifestyle?',
        correctText: 'A',
        explanation: 'Tom mentions leaving "questioning many assumptions I\'d had about my own privileged lifestyle."'
      },
      {
        number: 3,
        statement: 'Which traveler suggests they might have planned their trip differently in retrospect?',
        correctText: 'D',
        explanation: 'Maria states "In hindsight, I\'d spend more time in fewer places" indicating she would change her approach.'
      },
      {
        number: 4,
        statement: 'Which traveler had to deal with weather-related limitations?',
        correctText: 'B',
        explanation: 'Rachel mentions several hiking trails were closed due to weather conditions in October.'
      },
      {
        number: 5,
        statement: 'Which traveler found certain aspects of their trip emotionally difficult?',
        correctText: 'E',
        explanation: 'Sophie mentions finding it "emotionally challenging" and that seeing poaching effects was "heartbreaking."'
      },
      {
        number: 6,
        statement: 'Which traveler appreciated the opportunity to make their own decisions?',
        correctText: 'B',
        explanation: 'Rachel talks about "something liberating about being completely responsible for your own experience, making every decision yourself."'
      },
      {
        number: 7,
        statement: 'Which traveler found that living with locals provided valuable cultural insights?',
        correctText: 'C',
        explanation: 'Jamal mentions that "Living with a host family gave me genuine insight into daily Japanese life" and customs.'
      },
      {
        number: 8,
        statement: 'Which traveler believes their trip had educational benefits for others?',
        correctText: 'D',
        explanation: 'Maria talks about the trip giving her children "an education no classroom could provide."'
      },
      {
        number: 9,
        statement: 'Which traveler discovered the importance of stepping away from typical tourist areas?',
        correctText: 'A',
        explanation: 'Tom advises "Venture off the beaten path" and describes his best experience on an island "that wasn\'t in any guidebook."'
      },
      {
        number: 10,
        statement: 'Which traveler questioned the true value of their contribution?',
        correctText: 'E',
        explanation: 'Sophie asks herself "was I genuinely helping, or was this partly about making myself feel good?" reflecting on voluntourism.'
      }
    ]
  },

  {
    id: 'b2-mm-3',
    type: 'multiple-matching',
    title: 'Reviews of Cultural Events',
    instruction: 'You are going to read reviews of five different cultural events. For questions 1-10, choose from the reviews (A-E). The reviews may be chosen more than once.',
    difficulty: 'hard',
    topic: 'Arts & Culture',
    totalTexts: 5,
    texts: [
      {
        letter: 'A',
        title: 'Modern Art Exhibition - "Fractured Perspectives"',
        content: `The Contemporary Art Museum's latest exhibition promises to challenge conventional ways of seeing, and it delivers—though perhaps not always intentionally. Featuring works from fifteen emerging artists, "Fractured Perspectives" explores themes of identity and dislocation in the digital age. Some pieces are genuinely thought-provoking. Maya Chen's installation using broken mirrors and LED screens creates a disorienting but fascinating experience that captures how social media fragments our sense of self. However, the exhibition suffers from inconsistency. Several works feel derivative, offering nothing we haven't seen before in contemporary art. The accompanying text panels are often pretentious, using unnecessarily complex language to describe relatively simple concepts—a common problem in contemporary art curation. That said, the interactive elements are well-executed. Visitors can contribute to a collective digital artwork, which evolves throughout the exhibition's run. This participatory aspect makes repeat visits worthwhile. The space itself is beautifully designed, with lighting that enhances rather than overwhelms the artwork. Overall, it's worth visiting for several standout pieces, but temper your expectations—this isn't the revolutionary experience the publicity suggests.`
      },
      {
        letter: 'B',
        title: 'Theatre Production - "A Doll\'s House" Revival',
        content: `The National Theatre's new interpretation of Ibsen's classic relocates the action to contemporary London, and director Sarah Johnson makes this transplant work brilliantly. By setting Nora's story in a modern context—smartphone calls replace telegrams, financial crimes involve cryptocurrency—the production demonstrates how relevant Ibsen's themes remain 140 years later. Emma Watson gives a nuanced performance as Nora, capturing her transformation from seemingly frivolous wife to self-aware woman with remarkable subtlety. The moment when she finally confronts Torvald crackles with tension. The supporting cast is equally strong, though some might find the updated dialogue occasionally jarring when juxtaposed with Ibsen's original language structure. The set design deserves special mention—a minimalist apartment that transforms throughout the play, reflecting Nora's psychological state. Glass walls literally shatter in the final scene, a heavy-handed but undeniably effective metaphor. My only criticism is the pacing in the second act, which drags slightly. But the powerful finale makes up for this. This production proves that classic texts can be refreshed without being diminished, offering both respect for the source material and fresh perspectives for contemporary audiences.`
      },
      {
        letter: 'C',
        title: 'Music Festival - "Harmony in the Park"',
        content: `This year's Harmony in the Park festival showcased an impressive variety of musical genres, though organizational issues prevented it from reaching its full potential. The lineup balanced established headliners with emerging talent—always a tricky mix to get right. The highlight was definitely Saturday evening's performance by the London Philharmonic, who demonstrated that orchestral music can absolutely work in an outdoor festival setting. Their rendition of Shostakovich's Fifth Symphony was breathtaking. However, the sound quality across the weekend was inconsistent. The main stage had excellent acoustics, but the smaller stages suffered from technical problems that disrupted several performances. The indie band I'd specifically come to see had their set cut short due to equipment failure, which was disappointing. Food vendors offered good variety, though prices were predictably steep. The festival atmosphere was generally positive—audiences were enthusiastic and respectful. But the overcrowding became problematic, particularly near the main stage. Security managed this reasonably well, but better crowd control planning is needed for future years. Despite these logistical shortcomings, the musical quality was generally excellent, making this worthwhile for serious music fans who can overlook organizational imperfections.`
      },
      {
        letter: 'D',
        title: 'Film Screening - Documentary "Ocean\'s Edge"',
        content: `"Ocean's Edge," screened at the Environmental Film Festival, is a visually stunning documentary about marine conservation that unfortunately prioritizes aesthetics over substance. Director Paolo Marquez has created something beautiful—the underwater cinematography is genuinely spectacular, with shots that would work perfectly as screensavers. Watching coral reefs and marine life in high-definition is mesmerizing. But the film's environmental message gets lost in its own artistry. The narrative structure is confusing, jumping between different ocean regions without clear connections. We hear from various scientists and activists, but their interviews are frustratingly brief, never allowing ideas to develop fully. The film seems more interested in creating pretty images than engaging with the complex scientific and political challenges of ocean conservation. The musical score, while pleasant, is overwrought and manipulative—it tells us how to feel rather than letting the content speak for itself. There's also a concerning lack of specific information. We're told repeatedly that oceans are in crisis, but the film provides limited data or context about what actions viewers might take. It's the equivalent of environmental concern as wallpaper—nice to look at but ultimately superficial. Nature documentary enthusiasts might enjoy it purely for the visuals, but anyone seeking substantial information about marine conservation should look elsewhere.`
      },
      {
        letter: 'E',
        title: 'Dance Performance - "Migration"',
        content: `Contemporary dance company MotionForward presents "Migration," a powerful piece exploring human displacement and belonging. Choreographer Leila Hassan draws on her own family's refugee experience to create something intensely personal yet universally resonant. The performance begins with slow, hesitant movements—dancers testing the space around them, embodying uncertainty. As the piece progresses, the choreography becomes more urgent and fragmented, reflecting the chaos of forced migration. What's particularly effective is how Hassan uses the entire performance space. Dancers move through the audience, breaking down the traditional separation between performers and spectators. This makes viewers complicit in the narrative, forcing us to literally make room for the dancers—a clever metaphor for how societies respond to refugees. The lighting design brilliantly complements the choreography, with harsh spotlights and shadows creating a sense of surveillance and exposure. My companion found the hour-long performance without interval challenging, and I'll admit contemporary dance requires commitment from its audience. But for those willing to engage, "Migration" offers an emotionally rich experience that lingers long after the final bow. This is dance as storytelling at its finest—you don't need to understand every movement to feel the piece's emotional truth.`
      }
    ],
    questions: [
      {
        number: 1,
        statement: 'Which reviewer criticizes the event for lacking depth in its content?',
        correctText: 'D',
        explanation: 'The documentary review states it "prioritizes aesthetics over substance" and provides "limited data or context."'
      },
      {
        number: 2,
        statement: 'Which reviewer praises how the event made use of its physical environment?',
        correctText: 'E',
        explanation: 'The dance review highlights how Hassan "uses the entire performance space" with dancers moving through the audience.'
      },
      {
        number: 3,
        statement: 'Which reviewer felt that some aspects of the event were unoriginal?',
        correctText: 'A',
        explanation: 'The art exhibition review mentions "Several works feel derivative, offering nothing we haven\'t seen before."'
      },
      {
        number: 4,
        statement: 'Which reviewer experienced disappointment due to technical difficulties?',
        correctText: 'C',
        explanation: 'The music festival review mentions an indie band\'s set being "cut short due to equipment failure."'
      },
      {
        number: 5,
        statement: 'Which reviewer appreciates how a classic work was adapted for modern audiences?',
        correctText: 'B',
        explanation: 'The theatre review praises how the production "demonstrates how relevant Ibsen\'s themes remain" by relocating it to contemporary London.'
      },
      {
        number: 6,
        statement: 'Which reviewer mentions that one aspect of the event could be emotionally manipulative?',
        correctText: 'D',
        explanation: 'The documentary review describes the musical score as "overwrought and manipulative—it tells us how to feel."'
      },
      {
        number: 7,
        statement: 'Which reviewer found that written information provided was unnecessarily complicated?',
        correctText: 'A',
        explanation: 'The art exhibition review criticizes text panels for "using unnecessarily complex language to describe relatively simple concepts."'
      },
      {
        number: 8,
        statement: 'Which reviewer suggests the event successfully balanced different types of content?',
        correctText: 'C',
        explanation: 'The festival review notes the lineup "balanced established headliners with emerging talent—always a tricky mix to get right."'
      },
      {
        number: 9,
        statement: 'Which reviewer indicates that audience members needed to actively participate in the experience?',
        correctText: 'E',
        explanation: 'The dance review mentions "contemporary dance requires commitment from its audience" and discusses how viewers must "engage."'
      },
      {
        number: 10,
        statement: 'Which reviewer notes a problem with the pacing of the event?',
        correctText: 'B',
        explanation: 'The theatre review states "My only criticism is the pacing in the second act, which drags slightly."'
      }
    ]
  },

  {
    id: 'b2-mm-4',
    type: 'multiple-matching',
    title: 'Environmental Initiatives Around the World',
    instruction: 'You are going to read about environmental initiatives from five different locations. For questions 1-10, choose from the initiatives (A-E). The initiatives may be chosen more than once.',
    difficulty: 'medium',
    topic: 'Environment & Sustainability',
    totalTexts: 5,
    texts: [
      {
        letter: 'A',
        title: 'Singapore - Vertical Forests and Green Buildings',
        content: `Singapore has emerged as a global leader in integrating nature into urban architecture. With limited land space, the city-state has pioneered vertical greenery, transforming skyscrapers into living ecosystems. Buildings are covered with plants that provide natural cooling, reducing energy consumption by up to 30% while improving air quality. The most ambitious project is the CapitaSpring tower, which features a 35-meter green oasis halfway up the building, accessible to the public. This isn't just aesthetic—it's a comprehensive strategy to combat the urban heat island effect. Singapore has also implemented strict regulations requiring new developments to replace lost greenery, creating a net-zero impact on vegetation. The government provides substantial subsidies for green building certification, making sustainability financially attractive for developers. Critics argue that such initiatives are only feasible in wealthy nations and don't address consumption patterns. However, Singapore's approach demonstrates that dense urban living and biodiversity aren't mutually exclusive. The city has become 30% greener over the past decade while accommodating population growth—a model that other space-constrained cities are studying closely.`
      },
      {
        letter: 'B',
        title: 'Costa Rica - Reforestation and Rewilding',
        content: `In the 1980s, Costa Rica had one of the highest deforestation rates globally, with only 26% forest cover remaining. Today, over 60% of the country is forested again—a remarkable environmental reversal. This transformation resulted from a comprehensive policy approach combining economic incentives with environmental protection. The government introduced Payments for Ecosystem Services (PES), compensating landowners for maintaining forests rather than clearing them for agriculture. This recognized that forests provide valuable services—carbon storage, watershed protection, biodiversity—that benefit society. Costa Rica also invested heavily in ecotourism, creating economic value from intact ecosystems. Protected areas now generate significant revenue, making conservation economically competitive with extractive industries. The country has pledged to become carbon neutral and is on track to achieve this goal. However, challenges remain. Some reforested areas lack the biodiversity of original forests, and invasive species pose ongoing threats. Additionally, the PES program requires substantial government funding, which may not be sustainable long-term. Despite these concerns, Costa Rica's reforestation success story offers hope that environmental degradation can be reversed when political will, economic incentives, and community engagement align.`
      },
      {
        letter: 'C',
        title: 'Netherlands - Circular Economy Innovation',
        content: `The Netherlands has positioned itself at the forefront of the circular economy movement, which aims to eliminate waste by keeping materials in continuous use. Amsterdam has committed to becoming fully circular by 2050, with interim targets across sectors. The approach focuses on product design, ensuring items can be easily disassembled and materials recovered. Companies are incentivized to adopt "product-as-service" models—leasing rather than selling goods, maintaining responsibility for their entire lifecycle. One successful example is the circular textile initiative, where clothing companies take back old garments, extract fibers, and create new products. Electronics manufacturers are similarly required to design for disassembly and repair rather than planned obsolescence. The government has created innovation hubs where businesses, researchers, and policymakers collaborate on circular solutions. However, implementing circular principles across complex supply chains is challenging. Many materials are technically difficult or expensive to recycle effectively. There's also the "rebound effect"—when efficiency improvements lead to increased consumption, negating environmental benefits. Critics note that true circularity may be impossible without addressing economic growth paradigms. Nevertheless, the Netherlands' systematic approach to material flows represents one of the most comprehensive efforts to redesign industrial systems for sustainability.`
      },
      {
        letter: 'D',
        title: 'Bhutan - Gross National Happiness and Conservation',
        content: `Bhutan has taken a radically different approach to development, prioritizing Gross National Happiness over GDP growth. Environmental conservation is constitutionally mandated—at least 60% of the country must remain forested, and Bhutan is currently one of only three carbon-negative countries globally, absorbing more CO2 than it emits. Tourism is strictly controlled through high daily fees, ensuring low-impact, high-value visitors rather than mass tourism. This generates revenue while protecting cultural and natural heritage. The country banned plastic bags in 1999, decades before many developed nations. Bhutan's approach stems from Buddhist principles emphasizing harmony with nature and community wellbeing over material wealth. However, this model has significant trade-offs. Bhutan remains one of the least developed countries economically, with limited healthcare and education infrastructure in rural areas. Youth unemployment is rising, and many young people migrate abroad seeking opportunities. There's growing tension between traditional values and modern aspirations. Critics question whether Bhutan's model is sustainable as global connectivity increases and younger generations demand different lifestyles. Can a nation resist modernization pressures while maintaining citizen wellbeing? Bhutan's experiment offers important lessons but may not be replicable in nations with different values, histories, and resource constraints.`
      },
      {
        letter: 'E',
        title: 'Denmark - Wind Energy Leadership',
        content: `Denmark generates over 50% of its electricity from wind power, the highest proportion globally, and aims for 100% renewable energy by 2030. This achievement results from decades of consistent policy support, technological innovation, and public investment. When oil crises in the 1970s exposed energy vulnerability, Denmark committed to energy independence through renewables. The government provided research funding, grid infrastructure, and favorable pricing for wind energy, creating a thriving domestic industry. Danish companies like Vestas became global leaders in wind turbine manufacturing. Crucially, Denmark developed offshore wind farms, which generate more consistent power than onshore installations and face less local opposition. The country also invested heavily in grid flexibility—interconnectors with neighboring nations, energy storage, and smart grid technology to manage variable renewable supply. Public support was cultivated through cooperative ownership models, allowing communities to invest in and benefit from local wind projects. However, challenges persist. Renewable energy requires backup capacity for when wind conditions are unfavorable. Denmark relies on interconnections with hydropower-rich Norway and Sweden, a solution not available to all nations. The transition also increased electricity prices significantly. Despite these challenges, Denmark demonstrates that ambitious renewable energy targets are technically and economically viable with sustained political commitment.`
      }
    ],
    questions: [
      {
        number: 1,
        statement: 'Which initiative mentions addressing the problem of limited physical space?',
        correctText: 'A',
        explanation: 'Singapore explicitly mentions "limited land space" and responding to space constraints through vertical greenery.'
      },
      {
        number: 2,
        statement: 'Which initiative describes a complete transformation from environmental degradation?',
        correctText: 'B',
        explanation: 'Costa Rica went from 26% to over 60% forest cover, reversing severe deforestation.'
      },
      {
        number: 3,
        statement: 'Which initiative emphasizes changing product ownership models?',
        correctText: 'C',
        explanation: 'The Netherlands promotes "product-as-service" models where companies lease rather than sell goods.'
      },
      {
        number: 4,
        statement: 'Which initiative is based on philosophical or spiritual principles?',
        correctText: 'D',
        explanation: 'Bhutan\'s approach "stems from Buddhist principles emphasizing harmony with nature."'
      },
      {
        number: 5,
        statement: 'Which initiative originated in response to a specific crisis?',
        correctText: 'E',
        explanation: 'Denmark\'s commitment began when "oil crises in the 1970s exposed energy vulnerability."'
      },
      {
        number: 6,
        statement: 'Which initiative acknowledges that economic growth models may need fundamental change?',
        correctText: 'C',
        explanation: 'The Netherlands section notes that "true circularity may be impossible without addressing economic growth paradigms."'
      },
      {
        number: 7,
        statement: 'Which initiative mentions creating economic value from preserving natural areas?',
        correctText: 'B',
        explanation: 'Costa Rica "invested heavily in ecotourism, creating economic value from intact ecosystems."'
      },
      {
        number: 8,
        statement: 'Which initiative describes community participation in financing the project?',
        correctText: 'E',
        explanation: 'Denmark used "cooperative ownership models, allowing communities to invest in and benefit from local wind projects."'
      },
      {
        number: 9,
        statement: 'Which initiative mentions potential conflicts between traditional and modern values?',
        correctText: 'D',
        explanation: 'Bhutan faces "growing tension between traditional values and modern aspirations" among younger generations.'
      },
      {
        number: 10,
        statement: 'Which initiative warns about unintended consequences of efficiency improvements?',
        correctText: 'C',
        explanation: 'The Netherlands section mentions the "rebound effect—when efficiency improvements lead to increased consumption, negating environmental benefits."'
      }
    ]
  },

  {
    id: 'b2-mm-5',
    type: 'multiple-matching',
    title: 'Technology Innovations Changing Our Lives',
    instruction: 'You are going to read about different technology innovations. For questions 1-10, choose from the innovations (A-E). The innovations may be chosen more than once.',
    difficulty: 'hard',
    topic: 'Technology & Innovation',
    totalTexts: 5,
    texts: [
      {
        letter: 'A',
        title: 'CRISPR Gene Editing',
        content: `CRISPR-Cas9 has revolutionized genetic engineering, providing unprecedented precision in modifying DNA. Unlike previous gene editing techniques that were expensive, time-consuming, and imprecise, CRISPR works like molecular scissors, allowing scientists to cut DNA at specific locations and insert, delete, or replace genetic sequences. The technology's potential applications are staggering. In medicine, CRISPR could eliminate genetic diseases, treat cancer, and combat antibiotic-resistant bacteria. Agricultural applications include creating drought-resistant crops and eliminating plant diseases without traditional genetic modification concerns. The first CRISPR-based therapy for sickle cell disease has shown remarkable success in clinical trials. However, the technology raises profound ethical questions. The ability to edit human embryos creates possibilities for "designer babies," where parents might select traits like intelligence or appearance. Who decides which genetic modifications are acceptable? There are also equity concerns—will these treatments be accessible only to the wealthy, creating genetic divides in society? Technical challenges remain too. Off-target effects, where CRISPR modifies unintended genetic locations, could have unpredictable consequences. Some scientists advocate for a moratorium on certain applications until ethical frameworks are established, while others argue that overregulation will slow life-saving developments. CRISPR represents both extraordinary promise and serious responsibility.`
      },
      {
        letter: 'B',
        title: 'Quantum Computing',
        content: `Quantum computers harness quantum mechanics principles to process information in fundamentally different ways than classical computers. While traditional computers use bits (0 or 1), quantum computers use qubits, which can exist in multiple states simultaneously through superposition. This allows quantum computers to explore numerous possibilities concurrently, offering exponential advantages for specific problems. Applications include drug discovery—simulating molecular interactions that are currently impossible to model—cryptography, financial modeling, and artificial intelligence. Google claimed "quantum supremacy" in 2019, performing a calculation in 200 seconds that would take the world's fastest supercomputer 10,000 years. However, current quantum computers are extremely fragile. Qubits require near absolute-zero temperatures and are highly susceptible to environmental interference, causing "decoherence" that corrupts calculations. Most quantum computers can only maintain quantum states for milliseconds. We're still in the early research phase—comparable to where classical computing was in the 1950s. Practical quantum computers for everyday applications remain decades away. There are also concerns about security implications. Quantum computers could potentially break current encryption methods, threatening everything from banking to national security. This has sparked a race to develop "quantum-resistant" cryptography. The quantum computing revolution may be inevitable, but its timeline and ultimate impact remain highly uncertain.`
      },
      {
        letter: 'C',
        title: 'Neural Interface Technology',
        content: `Brain-computer interfaces (BCIs) directly connect human nervous systems to external devices, enabling thought-based control and potentially expanding human capabilities. Companies like Neuralink are developing implantable devices that could allow paralyzed individuals to control computers, prosthetics, or even regain movement. Early trials have shown paralyzed patients successfully controlling robotic arms and typing using only their thoughts. Medical applications extend beyond mobility. BCIs might treat neurological conditions like Parkinson's disease, epilepsy, and depression by directly modulating brain activity. Some researchers envision BCIs enhancing healthy individuals—uploading information directly to memory, communicating telepathically, or interfacing with artificial intelligence. However, invasive BCIs require brain surgery, carrying inherent risks including infection, scarring, and immune rejection. Non-invasive alternatives exist but lack the precision and bandwidth of implanted devices. There are also profound privacy concerns. Brain data is the most personal information possible. Who owns this data? Could BCIs be hacked, potentially allowing external control or surveillance of thoughts? The idea of "cognitive liberty"—the right to mental self-determination—becomes critical. Some philosophers argue that BCIs could fundamentally alter human identity and consciousness in ways we can't predict. While the technology offers hope for medical conditions, its broader applications raise questions about what it means to be human and where we should draw boundaries on technological augmentation.`
      },
      {
        letter: 'D',
        title: 'Synthetic Biology and Lab-Grown Materials',
        content: `Synthetic biology engineers biological systems to produce materials, chemicals, and products traditionally derived from petroleum, animals, or intensive agriculture. Scientists can now program bacteria, yeast, or algae to manufacture specific compounds, essentially turning living organisms into microscopic factories. Applications are diverse and growing. Lab-grown meat uses animal cells cultured in bioreactors, producing real meat without slaughtering animals. This could reduce greenhouse gas emissions from livestock by up to 96% while addressing animal welfare concerns. Companies are producing leather alternatives from mycelium (mushroom roots), spider silk proteins from fermentation, and even sustainable aviation fuel from engineered microbes. The environmental benefits are substantial. These processes typically require less land, water, and energy than conventional production. They can also create materials with properties impossible to achieve through traditional means. However, scaling synthetic biology from laboratory to industrial production has proven challenging. Production costs remain high, and achieving consistent quality is difficult. There are also regulatory uncertainties—how should lab-grown products be classified and labeled? Some consumers express discomfort with "unnatural" products, though this often reflects unfamiliarity rather than legitimate safety concerns. Environmentalists debate whether synthetic biology represents genuine sustainability or merely maintains consumption patterns with different inputs. Nevertheless, as technology improves and costs decrease, synthetic biology could fundamentally transform how we produce materials, potentially decoupling economic activity from resource extraction.`
      },
      {
        letter: 'E',
        title: 'Decentralized Web and Blockchain Applications',
        content: `Blockchain and related technologies promise to restructure internet architecture, shifting from centralized platforms to distributed networks. Current web infrastructure concentrates power in tech giants who control data, set rules, and extract value. Blockchain enables peer-to-peer transactions without intermediaries, theoretically creating a more democratic internet. Beyond cryptocurrency, applications include decentralized finance (DeFi), where traditional banking services operate without banks; non-fungible tokens (NFTs) for digital ownership; and decentralized autonomous organizations (DAOs) for collective governance. Proponents argue this will democratize access to financial services, give creators more control over their work, and reduce censorship. In developing countries without robust banking infrastructure, blockchain-based systems could provide financial inclusion. Smart contracts—self-executing agreements coded into blockchain—could eliminate intermediaries in many transactions, reducing costs and increasing efficiency. However, the reality has been more problematic. Cryptocurrencies have proven extremely volatile, limiting their practical use. The energy consumption of some blockchain networks is environmentally disastrous—Bitcoin mining alone consumes more electricity than entire nations. Blockchain systems are also slow and expensive compared to centralized alternatives. Most troublingly, the decentralized web has attracted scams, money laundering, and ransomware. The promised democratization often reproduces existing inequalities—early adopters and those with technical knowledge accumulate wealth while others face losses. Whether blockchain represents the future of the internet or an overhyped technology solving problems that don't really exist remains hotly debated.`
      }
    ],
    questions: [
      {
        number: 1,
        statement: 'Which technology specifically mentions risks related to surgical procedures?',
        correctText: 'C',
        explanation: 'Neural interfaces mention that "invasive BCIs require brain surgery, carrying inherent risks including infection, scarring, and immune rejection."'
      },
      {
        number: 2,
        statement: 'Which technology is described as being in very early developmental stages?',
        correctText: 'B',
        explanation: 'Quantum computing is compared to "where classical computing was in the 1950s" and "practical quantum computers remain decades away."'
      },
      {
        number: 3,
        statement: 'Which technology raises concerns about creating social inequality based on access?',
        correctText: 'A',
        explanation: 'CRISPR mentions "equity concerns—will these treatments be accessible only to the wealthy, creating genetic divides in society?"'
      },
      {
        number: 4,
        statement: 'Which technology mentions difficulties in maintaining production consistency?',
        correctText: 'D',
        explanation: 'Synthetic biology notes that "scaling from laboratory to industrial production has proven challenging" and "achieving consistent quality is difficult."'
      },
      {
        number: 5,
        statement: 'Which technology is criticized for its environmental impact?',
        correctText: 'E',
        explanation: 'Blockchain is described as "environmentally disastrous—Bitcoin mining alone consumes more electricity than entire nations."'
      },
      {
        number: 6,
        statement: 'Which technology could potentially threaten current security systems?',
        correctText: 'B',
        explanation: 'Quantum computing "could potentially break current encryption methods, threatening everything from banking to national security."'
      },
      {
        number: 7,
        statement: 'Which technology has already demonstrated success in clinical applications?',
        correctText: 'A',
        explanation: 'CRISPR mentions "The first CRISPR-based therapy for sickle cell disease has shown remarkable success in clinical trials."'
      },
      {
        number: 8,
        statement: 'Which technology raises philosophical questions about human identity?',
        correctText: 'C',
        explanation: 'Neural interfaces raise questions about whether "BCIs could fundamentally alter human identity and consciousness in ways we can\'t predict."'
      },
      {
        number: 9,
        statement: 'Which technology is associated with financial crime and illegal activities?',
        correctText: 'E',
        explanation: 'Blockchain technology mentions it "has attracted scams, money laundering, and ransomware."'
      },
      {
        number: 10,
        statement: 'Which technology could significantly reduce the need for animal farming?',
        correctText: 'D',
        explanation: 'Synthetic biology discusses "Lab-grown meat" that could "reduce greenhouse gas emissions from livestock by up to 96%."'
      }
    ]
  },

  {
    id: 'b2-mm-6',
    type: 'multiple-matching',
    title: 'Health and Wellness Approaches',
    instruction: 'You are going to read about different approaches to health and wellness. For questions 1-10, choose from the approaches (A-E). The approaches may be chosen more than once.',
    difficulty: 'medium',
    topic: 'Health & Wellness',
    totalTexts: 5,
    texts: [
      {
        letter: 'A',
        title: 'Intermittent Fasting',
        content: `Intermittent fasting (IF) involves cycling between periods of eating and fasting, with various protocols like 16:8 (fasting for 16 hours, eating during an 8-hour window) or 5:2 (eating normally five days, restricting calories two days). Proponents claim IF offers benefits beyond simple calorie restriction—improved insulin sensitivity, cellular repair through autophagy, and even longevity. Research shows IF can effectively promote weight loss and improve metabolic markers like blood sugar and cholesterol. The approach appeals to people who find constant calorie counting exhausting, offering a simpler rule to follow. Some practitioners report increased mental clarity and energy during fasting periods. However, IF isn't suitable for everyone. People with histories of eating disorders may find it triggers unhealthy patterns. Athletes requiring consistent energy for training might perform poorly on restricted eating schedules. Common side effects include irritability, difficulty concentrating, and intense hunger, particularly when starting. There's also concern about IF promoting binge eating during eating windows, potentially negating benefits. Much of the research has been conducted on animals, and human studies are still limited. Some nutrition experts argue that IF's benefits come primarily from calorie restriction rather than fasting's unique properties. The sustainability of IF is also questionable—many people find it difficult to maintain long-term, particularly given social eating situations.`
      },
      {
        letter: 'B',
        title: 'Mindfulness and Meditation',
        content: `Mindfulness meditation has transitioned from spiritual practice to mainstream health intervention, now prescribed by doctors and taught in schools and workplaces. The practice involves paying attention to present-moment experiences without judgment, training the mind to observe thoughts and sensations rather than react automatically. Research demonstrates measurable benefits. Regular meditation can reduce stress, anxiety, and depression while improving attention, emotional regulation, and even immune function. Brain imaging studies show meditation literally changes brain structure, increasing gray matter in regions associated with self-awareness and compassion while decreasing it in the amygdala, involved in stress responses. Mindfulness-Based Stress Reduction (MBSR) programs show consistent positive outcomes across diverse populations. The practice is accessible—requiring no equipment, minimal time (even 10 minutes daily shows benefits), and adaptable to various settings. Apps and online resources make learning easier than ever. However, meditation isn't universally positive. Some people experience increased anxiety or uncomfortable emotions when first practicing, as suppressed feelings surface. For individuals with trauma, meditation can sometimes trigger distressing memories or sensations without proper guidance. There's also the problem of "McMindfulness"—commercialization that strips the practice of deeper ethical dimensions, reducing it to a productivity tool rather than a path to genuine wellbeing. Critics argue that promoting individual meditation distracts from addressing systemic causes of stress like overwork and inequality.`
      },
      {
        letter: 'C',
        title: 'High-Intensity Interval Training (HIIT)',
        content: `HIIT involves short bursts of intense exercise alternated with recovery periods, typically lasting 20-30 minutes total. This contrasts with traditional steady-state cardio like jogging. HIIT's popularity stems partly from time efficiency—research shows similar or superior benefits to longer moderate exercise. HIIT improves cardiovascular fitness, increases metabolic rate for hours post-exercise (the "afterburn effect"), and can be adapted to various fitness levels and preferences. Studies demonstrate HIIT effectively improves insulin sensitivity and blood pressure while promoting fat loss while preserving muscle mass. The variety also combats exercise boredom, and HIIT workouts can be done anywhere without equipment. For busy people struggling to fit exercise into schedules, HIIT offers maximum benefit in minimum time. However, HIIT is demanding, requiring genuine high-intensity effort during work intervals—many people don't actually push hard enough to gain benefits. The intensity also carries higher injury risk, particularly for beginners who lack proper form or try advancing too quickly. Recovery between sessions is crucial; doing HIIT too frequently can lead to overtraining, elevated cortisol, and diminished returns. People with certain health conditions, particularly cardiovascular issues, should consult doctors before starting HIIT, as the intensity can be dangerous. There's also debate about HIIT's superiority being overstated by fitness marketing, with some research suggesting moderate exercise provides similar benefits with less stress on the body.`
      },
      {
        letter: 'D',
        title: 'Plant-Based Diets',
        content: `Plant-based eating, ranging from strict veganism to flexible "plant-forward" approaches, has grown exponentially in popularity. Health motivations include reduced risk of heart disease, type 2 diabetes, certain cancers, and obesity—conditions associated with high meat consumption in Western diets. Whole-food plant-based diets emphasize vegetables, fruits, whole grains, legumes, nuts, and seeds while minimizing processed foods and animal products. Evidence supports health benefits when plant-based diets are well-planned. They're typically lower in saturated fat and higher in fiber, vitamins, and antioxidants. Many people report improved energy levels, better digestion, and successful weight management. Environmental and ethical considerations also motivate many adopters. However, poorly planned plant-based diets can lead to nutritional deficiencies, particularly vitamin B12 (only found naturally in animal products), iron, calcium, and omega-3 fatty acids. Vegans typically require supplements to meet all nutritional needs. Plant protein sources generally require more variety to achieve complete amino acid profiles. Social challenges exist too—eating out, family gatherings, and travel can be complicated. Food costs may increase depending on choices, though basic plant foods are generally affordable. There's also substantial individual variation in how people respond. Some thrive on plant-based diets while others experience fatigue, difficulty maintaining weight, or persistent hunger. The key is finding an approach that's nutritionally adequate, sustainable, and enjoyable for each individual rather than following dietary dogma.`
      },
      {
        letter: 'E',
        title: 'Sleep Optimization',
        content: `Sleep science has revealed that quality sleep is fundamental to physical and mental health, yet modern lifestyles systematically undermine it. Sleep optimization involves creating conditions for consistently good sleep—regular schedules, cool dark bedrooms, limiting screen time before bed, avoiding caffeine and alcohol, and managing stress. Research demonstrates that adequate sleep (7-9 hours for most adults) improves memory consolidation, emotional regulation, immune function, and metabolic health while reducing risk for numerous chronic diseases. Sleep deprivation impairs cognitive function comparably to alcohol intoxication and increases risk of accidents, poor decision-making, and mood disorders. Despite sleep's obvious importance, implementation proves challenging. Modern work culture often treats sleep as expendable, glorifying overwork and sleep deprivation as badges of commitment. The 24/7 connectivity enabled by technology makes disconnecting difficult. Many people have internalized the idea that sleeping less demonstrates dedication and productivity, though research clearly refutes this. Sleep disorders like insomnia and sleep apnea require professional treatment but often go undiagnosed. There's also significant individual variation in sleep needs and chronotypes—some people genuinely function better as "night owls" but are forced into schedules that conflict with their biology. While sleep optimization strategies are evidence-based and cost-free, actually prioritizing sleep requires confronting cultural values, work expectations, and personal habits—changes that many find difficult despite understanding sleep's importance.`
      }
    ],
    questions: [
      {
        number: 1,
        statement: 'Which approach mentions potential problems related to social situations?',
        correctText: 'D',
        explanation: 'Plant-based diets note that "eating out, family gatherings, and travel can be complicated."'
      },
      {
        number: 2,
        statement: 'Which approach has been shown to cause physical changes in brain structure?',
        correctText: 'B',
        explanation: 'Mindfulness meditation "literally changes brain structure, increasing gray matter" in certain regions.'
      },
      {
        number: 3,
        statement: 'Which approach requires professional medical evaluation for certain individuals?',
        correctText: 'C',
        explanation: 'HIIT notes "People with certain health conditions should consult doctors before starting HIIT."'
      },
      {
        number: 4,
        statement: 'Which approach is undermined by contemporary work culture?',
        correctText: 'E',
        explanation: 'Sleep optimization mentions "Modern work culture often treats sleep as expendable, glorifying overwork."'
      },
      {
        number: 5,
        statement: 'Which approach may require nutritional supplements to be complete?',
        correctText: 'D',
        explanation: 'Plant-based diets state "Vegans typically require supplements to meet all nutritional needs."'
      },
      {
        number: 6,
        statement: 'Which approach is praised for its time efficiency?',
        correctText: 'C',
        explanation: 'HIIT\'s "popularity stems partly from time efficiency" offering "maximum benefit in minimum time."'
      },
      {
        number: 7,
        statement: 'Which approach may trigger negative psychological responses in some people?',
        correctText: 'B',
        explanation: 'Mindfulness notes "Some people experience increased anxiety" and it can "trigger distressing memories."'
      },
      {
        number: 8,
        statement: 'Which approach might encourage unhealthy eating behaviors in vulnerable individuals?',
        correctText: 'A',
        explanation: 'Intermittent fasting mentions concern about "promoting binge eating" and triggering issues for those with "histories of eating disorders."'
      },
      {
        number: 9,
        statement: 'Which approach is criticized for being commercialized in ways that reduce its deeper value?',
        correctText: 'B',
        explanation: 'Mindfulness mentions "McMindfulness—commercialization that strips the practice of deeper ethical dimensions."'
      },
      {
        number: 10,
        statement: 'Which approach emphasizes that research on humans is still relatively limited?',
        correctText: 'A',
        explanation: 'Intermittent fasting states "Much of the research has been conducted on animals, and human studies are still limited."'
      }
    ]
  }
];

// Summary
export const MULTIPLE_MATCHING_SUMMARY = {
  total: 6,
  implemented: 6,
  questionsPerExercise: 10,
  totalQuestions: 60
};
