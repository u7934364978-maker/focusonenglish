// ================================================================
// PART 7: MULTIPLE MATCHING (FCE Reading)
// ================================================================
// Descripción: 10 statements, debe matchear con 4-5 textos (A, B, C, D, E)
// Evalúa: scanning, detail reading, comprehension of multiple texts
// Nota: Algunos statements pueden matchear con el mismo texto
// ================================================================

export interface MultipleMatchingExercise {
  id: string;
  type: 'multiple-matching';
  title: string;
  instruction: string;
  texts: {
    letter: 'A' | 'B' | 'C' | 'D' | 'E';
    title: string;
    author?: string;
    content: string;
  }[];
  questions: {
    number: number;
    statement: string;
    correctText: 'A' | 'B' | 'C' | 'D' | 'E';
    explanation: string;
  }[];
  difficulty: 'medium' | 'hard';
  topic: string;
  totalWords: number;
}

export const MULTIPLE_MATCHING_EXERCISES: MultipleMatchingExercise[] = [
  // Exercise 1
  {
    id: 'b2-mm-1',
    type: 'multiple-matching',
    title: 'Career Advice from Industry Professionals',
    difficulty: 'medium',
    topic: 'Career & Work',
    totalWords: 920,
    instruction: 'You are going to read about four professionals talking about their career paths. For questions 1-10, choose from the people (A-D). The people may be chosen more than once.',
    texts: [
      {
        letter: 'A',
        title: 'Dr. Sarah Chen - Emergency Medicine Physician',
        content: `When I was younger, I thought being a doctor meant knowing all the answers. Medical school certainly reinforced that impression - we were tested constantly on our ability to recall facts and diagnose conditions correctly. However, the reality of emergency medicine has taught me something quite different. The most valuable skill I've developed isn't memorizing treatment protocols, but rather learning to make critical decisions with incomplete information while remaining calm under pressure.

The path to becoming an ER doctor was longer and more challenging than I anticipated. After medical school came years of residency, where 80-hour work weeks were normal. There were moments when I questioned whether the sacrifice was worth it, particularly when I missed family events or important milestones in my children's lives. My advice to anyone considering medicine is to ensure you're passionate not just about the prestige or the salary, but about the actual day-to-day work. The glamorous image of doctors on television bears little resemblance to the reality of charting, insurance paperwork, and having difficult conversations with patients and their families.

What keeps me going, despite the exhaustion and emotional toll, is the profound privilege of helping people during their most vulnerable moments. Last week, I held the hand of an elderly man as he took his final breaths, his family unable to reach the hospital in time due to a snowstorm. These intensely human moments, where medical expertise meets compassion, define why I chose this career. If you can't handle the weight of holding someone's life in your hands, both literally and figuratively, medicine might not be the right path.`
      },
      {
        letter: 'B',
        title: 'James Morrison - Software Engineering Manager',
        content: `The tech industry moves at an incredible pace, and that's precisely what attracted me to it fifteen years ago. I started as a junior developer, spending my days writing code and debugging software. What I didn't realize then was how quickly technology would evolve and how essential continuous learning would become. Today, as a manager, I spend less time coding and more time mentoring younger developers, making architectural decisions, and ensuring our team delivers quality products on schedule.

One of the biggest myths about tech careers is that you need to be a mathematical genius or have started coding as a child. I actually didn't write my first line of code until university, and I struggled initially. What mattered more than natural talent was persistence and curiosity. The developers who succeed aren't necessarily the smartest ones; they're the ones who enjoy problem-solving and don't mind spending hours tracking down elusive bugs.

The work-life balance in tech can be excellent, but it varies dramatically between companies. At my current company, we have flexible hours and the option to work remotely, which has been invaluable for managing family responsibilities. However, I've also worked at startups where the expectation was to be available constantly, responding to messages at all hours. Before accepting any tech position, I now recommend thoroughly researching the company culture and speaking with current employees about their actual experiences, not just what's written on the careers page.`
      },
      {
        letter: 'C',
        title: 'Maria Rodriguez - High School English Teacher',
        content: `Teaching chose me as much as I chose teaching. After working in corporate marketing for five years, I felt unfulfilled despite the good salary. I returned to university to get my teaching credential, and though my family worried about the pay cut, I've never regretted the decision. Teaching is uniquely challenging because success isn't easily measured. You might spend months working with a struggling student, unsure if you're making any difference, only to receive an email years later telling you how much impact you had on their life.

The greatest misconception about teaching is that it's an easy job with great holidays. The reality is far different. I typically arrive at school by 7 AM and rarely leave before 5 PM. Evenings and weekends are spent planning lessons, grading assignments, and responding to parent emails. The summer "break" is often filled with professional development courses and preparing for the upcoming school year. Anyone entering teaching for the schedule is in for a rude awakening.

However, the rewards are incomparable. Watching students who initially hated reading become passionate about literature, or seeing a shy teenager find their voice through creative writing - these moments make every challenge worthwhile. Teaching requires patience, creativity, and the ability to connect with young people, even when they're having a difficult day. It's not a job where you can simply follow a script; every student and every class is different, requiring constant adaptation and innovation. If you need immediate, tangible results to feel satisfied, teaching will frustrate you. But if you can find joy in small victories and trust in the long-term impact of education, it's an incredibly meaningful career.`
      },
      {
        letter: 'D',
        title: 'David Kim - Freelance Graphic Designer',
        content: `The freelance life isn't for everyone, and I learned that the hard way. After five years working for a design agency, I was confident I could make it on my own. The reality of freelancing hit me quickly: irregular income, constant self-promotion, and the challenge of being both creative artist and business manager simultaneously. In agency work, I could focus purely on design while others handled client relationships and invoicing. As a freelancer, I'm responsible for everything from negotiating contracts to chasing late payments.

What surprised me most was how much non-design work is involved in freelancing. I spend nearly as much time on administrative tasks, marketing my services, and maintaining my portfolio website as I do on actual design work. Building a sustainable freelance career requires business skills that aren't typically taught in art school. I've learned about tax planning, contract law, and client psychology - knowledge I never expected to need but which proved essential for survival.

The freedom, however, is intoxicating. I choose my projects, set my own hours, and work from anywhere with an internet connection. Last year, I spent three months in Portugal, working with clients back in the US while enjoying a completely different lifestyle. This flexibility is particularly valuable for people with family responsibilities or health conditions that make traditional office work difficult. My advice to aspiring freelancers is to build up at least six months of living expenses before taking the leap, and to start building your client network while you're still employed. The transition is much smoother when you have some financial cushion and initial projects lined up.`
      }
    ],
    questions: [
      {
        number: 1,
        statement: 'Which person mentions that their career requires making decisions without having complete information?',
        correctText: 'A',
        explanation: 'Dr. Chen mentions "learning to make critical decisions with incomplete information" as a key skill in emergency medicine'
      },
      {
        number: 2,
        statement: 'Which person suggests researching company culture thoroughly before accepting a job offer?',
        correctText: 'B',
        explanation: 'James Morrison recommends "thoroughly researching the company culture and speaking with current employees"'
      },
      {
        number: 3,
        statement: 'Which person changed careers from a better-paying job to pursue something more fulfilling?',
        correctText: 'C',
        explanation: 'Maria Rodriguez left "corporate marketing for five years" despite concerns about "the pay cut"'
      },
      {
        number: 4,
        statement: 'Which person emphasizes that success in their field depends more on determination than natural ability?',
        correctText: 'B',
        explanation: 'James says "What mattered more than natural talent was persistence and curiosity"'
      },
      {
        number: 5,
        statement: 'Which person mentions unexpected administrative responsibilities in their work?',
        correctText: 'D',
        explanation: 'David Kim discusses spending "nearly as much time on administrative tasks" as on design work'
      },
      {
        number: 6,
        statement: 'Which person describes moments of uncertainty about whether their work is having an impact?',
        correctText: 'C',
        explanation: 'Maria mentions "You might spend months working with a struggling student, unsure if you\'re making any difference"'
      },
      {
        number: 7,
        statement: 'Which person discusses the importance of being prepared for the emotional demands of their job?',
        correctText: 'A',
        explanation: 'Dr. Chen warns "If you can\'t handle the weight of holding someone\'s life in your hands...medicine might not be the right path"'
      },
      {
        number: 8,
        statement: 'Which person mentions that public perception of their career differs significantly from reality?',
        correctText: 'C',
        explanation: 'Maria discusses "The greatest misconception about teaching is that it\'s an easy job with great holidays"'
      },
      {
        number: 9,
        statement: 'Which person recommends building financial security before pursuing their type of career?',
        correctText: 'D',
        explanation: 'David advises to "build up at least six months of living expenses before taking the leap"'
      },
      {
        number: 10,
        statement: 'Which person values the geographical flexibility their career provides?',
        correctText: 'D',
        explanation: 'David Kim mentions spending "three months in Portugal, working with clients back in the US"'
      }
    ]
  },

  // Exercise 2
  {
    id: 'b2-mm-2',
    type: 'multiple-matching',
    title: 'Travel Experiences Around the World',
    difficulty: 'medium',
    topic: 'Travel & Culture',
    totalWords: 950,
    instruction: 'You are going to read about five travelers describing their experiences in different countries. For questions 1-10, choose from the travelers (A-E). The travelers may be chosen more than once.',
    texts: [
      {
        letter: 'A',
        title: 'Emma - Backpacking Through Southeast Asia',
        content: `Thailand was my first stop, and Bangkok immediately overwhelmed me with its heat, crowds, and sensory intensity. Coming from a quiet suburb in Canada, the chaos felt both terrifying and exhilarating. I spent three days navigating the city's labyrinthine streets, sampling street food that was simultaneously delicious and slightly worrying from a food safety perspective. The Grand Palace took my breath away, though the crowds of tourists made it difficult to appreciate the intricate architecture fully.

Moving north to Chiang Mai provided a welcome contrast to Bangkok's frenetic energy. I took a cooking class where I learned to make pad thai from scratch, visited elephant sanctuaries (ensuring they were ethical ones that don't offer riding), and spent an evening at the famous night markets. What struck me most was how tourism has transformed these places - for better and worse. While it brings economic opportunities, I couldn't help but wonder about the authenticity of experiences designed primarily for foreign visitors.

The highlight of my trip was definitely the month I spent in a small village in Laos, teaching English to local children. Living with a host family, I experienced daily life far removed from the tourist trail. We rose with the sun, worked in rice paddies, and ate meals together on the floor. The children's enthusiasm for learning, despite having almost no resources, put my own privileged education into perspective. This experience taught me more about resilience and community than any guidebook could convey.`
      },
      {
        letter: 'B',
        title: 'Marcus - Solo Hiking in Patagonia',
        content: `Patagonia had been on my bucket list for years, and finally standing at the base of Torres del Paine, I understood why it's considered one of Earth's most spectacular landscapes. The Argentine and Chilean sides each offer unique perspectives, though the logistics of crossing the border added unexpected complexity to my journey. I spent two weeks hiking the W Circuit, carrying everything I needed on my back and sleeping in refugios along the trail.

The physical demands of multi-day hiking surprised someone like me who considered himself reasonably fit. My legs ached constantly, my shoulders bore painful marks from my backpack straps, and blisters made every step a small exercise in determination. Yet each morning, waking to views of jagged peaks reflected in glacial lakes made the discomfort seem trivial. The weather, notorious for changing rapidly in Patagonia, tested my adaptability - I experienced sunshine, rain, and near-blizzard conditions all in a single day.

What I didn't anticipate was the profound sense of solitude, even on a popular trail. Hours would pass with only my thoughts for company, punctuated by occasional encounters with fellow hikers. This forced disconnection from technology and the constant stream of information was initially uncomfortable but ultimately liberating. I learned that I'm more capable than I believed - physically, mentally, and emotionally. The experience has changed how I approach challenges in my daily life, reminding me that discomfort is temporary but growth is lasting.`
      },
      {
        letter: 'C',
        title: 'Yuki - Cultural Exchange in Morocco',
        content: `Arriving in Marrakech from Tokyo, I was immediately struck by the sensory differences. The call to prayer echoing across the city at dawn, the smell of spices in the souks, the vibrant colors of traditional textiles - everything felt intensely alive in a way that contrasted sharply with the ordered efficiency of Japanese cities. My first attempt at navigating the medina left me hopelessly lost, despite having a map and GPS on my phone.

I stayed in a traditional riad, a beautiful historic house built around a central courtyard. The family who owned it welcomed me warmly, though communication was challenging with my limited French and their limited English. We mostly communicated through gestures, smiles, and shared meals. The mother taught me to make traditional tagine, showing me how to layer flavors and how patience in cooking yields the best results - a lesson I've applied beyond the kitchen.

What fascinated me most was how Moroccan culture balances tradition with modernity. I witnessed this particularly in Fes, where centuries-old tanneries operate using traditional methods alongside the buzz of smartphones and social media. The younger generation navigates between respecting cultural traditions and embracing global influences, something I deeply related to as someone from a culture with similar tensions. This trip challenged my assumptions about what "modern" means and reminded me that development doesn't require abandoning cultural identity.`
      },
      {
        letter: 'D',
        title: 'Sophie - Road Trip Across Iceland',
        content: `Iceland defies easy description. The landscape seems almost alien - vast lava fields, dramatic waterfalls, geothermal areas with bubbling mud pots, and glaciers that are simultaneously beautiful and terrifying reminders of climate change. My partner and I rented a 4x4 and spent two weeks driving the Ring Road, stopping whenever something caught our eye, which was approximately every ten minutes.

The midnight sun during summer meant our sleep schedule became completely irregular. We'd find ourselves hiking at 11 PM in full daylight, or having breakfast at 4 AM because we were already awake. This temporal disorientation was oddly freeing - we followed our energy and curiosity rather than the clock. However, this freedom came with challenges. We underestimated distances between towns and once found ourselves driving for three hours on an empty road without passing a single gas station, watching our fuel gauge with growing anxiety.

The environmental awareness in Iceland impressed me deeply. Despite their small population, Icelanders are serious about protecting their fragile ecosystem. We saw this in strict rules about staying on marked paths, the emphasis on geothermal energy, and locals' willingness to discuss climate change's visible effects on their glaciers. As tourists, we felt both privileged to experience such raw natural beauty and responsible for minimizing our impact. This experience has made me more conscious of my environmental footprint in all my travels.`
      },
      {
        letter: 'E',
        title: 'Ahmed - Family Vacation in Italy',
        content: `Traveling with three children under twelve changes everything about tourism. Our carefully planned itinerary for visiting Italy's cultural highlights quickly gave way to finding playgrounds, gelato shops, and places where the kids could run around without disturbing others. Rome's Colosseum fascinated our oldest, but the younger two were more interested in pigeons in the nearby park. We learned to appreciate this different perspective - seeing famous sites through their eyes of wonder rather than my checklist of "must-see" attractions.

Venice presented unique challenges with its bridges and narrow passages, making our stroller feel like a liability. We got lost in the maze of streets repeatedly, but these unplanned detours led to discovering small neighborhood squares where local children played football and elderly residents sat watching the world go by. These authentic glimpses of daily Venetian life felt more valuable than photographing St. Mark's Square, beautiful as it was.

The agriturismo we stayed at in Tuscany was the trip's highlight. The children loved feeding chickens, watching the owner make cheese, and picking vegetables for dinner. Without constant attractions and entertainment, they invented their own games and spent hours outdoors. This slower pace reminded me that travel with family doesn't have to mean cramming in as many sights as possible. Sometimes the best experiences are the unplanned ones, like our impromptu pasta-making lesson with the farmhouse owner's grandmother, conducted entirely in gestures and laughter despite our language barrier.`
      }
    ],
    questions: [
      {
        number: 1,
        statement: 'Which traveler learned to appreciate a slower pace of tourism?',
        correctText: 'E',
        explanation: 'Ahmed mentions "slower pace reminded me that travel with family doesn\'t have to mean cramming in as many sights as possible"'
      },
      {
        number: 2,
        statement: 'Which traveler describes an experience that made them question the authenticity of tourist activities?',
        correctText: 'A',
        explanation: 'Emma wondered "about the authenticity of experiences designed primarily for foreign visitors"'
      },
      {
        number: 3,
        statement: 'Which traveler mentions gaining a new perspective on environmental issues?',
        correctText: 'D',
        explanation: 'Sophie discusses how "This experience has made me more conscious of my environmental footprint in all my travels"'
      },
      {
        number: 4,
        statement: 'Which traveler found parallels between their own culture and the one they visited?',
        correctText: 'C',
        explanation: 'Yuki mentions "something I deeply related to as someone from a culture with similar tensions"'
      },
      {
        number: 5,
        statement: 'Which traveler describes physical challenges that were ultimately rewarding?',
        correctText: 'B',
        explanation: 'Marcus discusses leg aches and blisters but says "each morning, waking to views...made the discomfort seem trivial"'
      },
      {
        number: 6,
        statement: 'Which traveler had to significantly modify their original travel plans?',
        correctText: 'E',
        explanation: 'Ahmed\'s "carefully planned itinerary...quickly gave way to finding playgrounds, gelato shops"'
      },
      {
        number: 7,
        statement: 'Which traveler experienced unexpected navigational difficulties?',
        correctText: 'C',
        explanation: 'Yuki says "My first attempt at navigating the medina left me hopelessly lost, despite having a map and GPS"'
      },
      {
        number: 8,
        statement: 'Which traveler describes feeling overwhelmed upon first arrival?',
        correctText: 'A',
        explanation: 'Emma says "Bangkok immediately overwhelmed me with its heat, crowds, and sensory intensity"'
      },
      {
        number: 9,
        statement: 'Which traveler found that unplanned moments became the most memorable?',
        correctText: 'E',
        explanation: 'Ahmed mentions "these unplanned detours led to discovering...authentic glimpses of daily Venetian life"'
      },
      {
        number: 10,
        statement: 'Which traveler experienced a sense of isolation that led to personal growth?',
        correctText: 'B',
        explanation: 'Marcus describes "profound sense of solitude" and learning "I\'m more capable than I believed"'
      }
    ]
  },

  // Exercise 3
  {
    id: 'b2-mm-3',
    type: 'multiple-matching',
    title: 'Reviews of Cultural Events',
    difficulty: 'hard',
    topic: 'Arts & Entertainment',
    totalWords: 880,
    instruction: 'You are going to read reviews of four different cultural events. For questions 1-10, choose from the reviews (A-D). The reviews may be chosen more than once.',
    texts: [
      {
        letter: 'A',
        title: 'Film Review: "The Last Horizon"',
        author: 'By Michael Torres',
        content: `Director Sarah Williams' latest film is a visual masterpiece that unfortunately prioritizes style over substance. Shot entirely on location in Iceland, the cinematography is breathtaking - each frame could hang in an art gallery. The opening sequence, following our protagonist across black sand beaches toward an abandoned lighthouse, sets a hauntingly beautiful tone. However, Williams seems so enamored with the landscape that she forgets to develop the characters inhabiting it.

The plot centers on a climate scientist returning to her childhood home to care for her aging father, wrestling with guilt about her long absence and anxiety about climate change's effects on the region she loves. It's a promising premise that sadly never fulfills its potential. The dialogue feels stiff and expository, with characters explaining their feelings rather than revealing them through actions or subtle emotional beats.

The performances attempt to elevate the weak script. Lead actress Jennifer Chang brings depth to a underwritten role, conveying complex emotions through minimal dialogue and carefully measured movements. In less capable hands, this character would have been insufferable, but Chang makes us care about her internal struggles. The supporting cast, unfortunately, isn't given enough to work with, relegated to stock character types - the bitter father, the understanding best friend, the judgmental sibling.

Where the film succeeds is in its meditation on time and change. Williams excels at showing how landscapes transform, drawing parallels between geological processes and human aging. A montage comparing archival footage of glaciers to their current diminished state is genuinely powerful, making the climate crisis feel personal rather than abstract. If only the human story matched the environmental one in emotional impact.`
      },
      {
        letter: 'B',
        title: 'Concert Review: Aurora Symphony Orchestra',
        author: 'By Rachel Kim',
        content: `Last night's performance by the Aurora Symphony Orchestra reminded me why classical music endures. Under guest conductor Martinez's passionate direction, they tackled an ambitious program spanning three centuries, from Bach to contemporary composer Lisa Chen. The acoustics of the newly renovated concert hall complemented the performance beautifully, allowing subtle dynamics and intricate counterpoint to shine through with crystal clarity.

The evening opened with Bach's Brandenburg Concerto No. 3, performed with infectious energy and precise ensemble playing. Martinez brought out the joyful, dance-like quality often lost in overly reverent interpretations. The string section particularly impressed, navigating the complex interweaving lines with both technical precision and musical sensitivity. This was Bach as celebration rather than museum piece.

Following intermission, the orchestra premiered Chen's "Urban Echoes," a bold composition incorporating electronic elements and unconventional instruments. This was risky programming - new music can alienate traditional classical audiences - but the gamble paid off. Chen's piece captures the rhythm and chaos of city life while maintaining sophisticated musical structure. The integration of recorded street sounds felt organic rather than gimmicky, creating a sonic landscape that was simultaneously familiar and alien.

The evening concluded with Beethoven's Fifth Symphony, a work performed so frequently it risks becoming wallpaper. Yet Martinez found fresh perspectives without resorting to gimmicks or historically uninformed tempos. The famous opening motif emerged with renewed urgency, and the final movement's triumphant conclusion felt earned rather than inevitable. A standing ovation was both deserved and enthusiastically given. This is orchestra playing at its finest - technically excellent, emotionally engaged, and intellectually stimulating.`
      },
      {
        letter: 'C',
        title: 'Theater Review: "Voices in the Dark"',
        author: 'By James Patterson',
        content: `Experimental theater often mistakes obscurity for profundity, but "Voices in the Dark" at the Riverside Theater achieves something genuinely innovative while remaining emotionally accessible. Director Anna Kowalski has created a immersive experience that challenges conventional theater boundaries without descending into pretentious nonsense.

The concept is deceptively simple: the entire play occurs in complete darkness. Audience members are guided to seats by theater staff using gentle touches, then spend 90 minutes listening to voices telling interconnected stories. No visual elements exist - no lights, no projections, not even glow-in-the-dark props. Initially disorienting, this forced focus on auditory storytelling creates intimacy impossible in traditional theater.

The writing, by emerging playwright Marcus Johnson, weaves five narratives that gradually reveal unexpected connections. A woman coping with vision loss, a lighthouse keeper in the 1800s, a sound engineer, a child afraid of the dark, and a radio drama actor from the 1940s - their stories echo and reflect each other thematically. Johnson's dialogue is naturalistic yet poetic, avoiding the trap of over-explaining while trusting audiences to make connections.

The sound design deserves special mention. Spatial audio creates three-dimensional soundscapes, making it feel as though actors move around and between audience members, though everyone remains stationary. Subtle acoustic cues - a chair creaking, footsteps approaching, breathing close by - generate visceral emotional responses. This technical achievement serves the story rather than overwhelming it.

This isn't theater for everyone. Some audience members left at interval, perhaps uncomfortable with extended darkness or frustrated by the unconventional format. But for those willing to surrender to the experience, "Voices in the Dark" offers something rare: a production that couldn't exist in any other medium, using theater's unique strengths to create genuine innovation.`
      },
      {
        letter: 'D',
        title: 'Art Exhibition Review: "Digital Realms"',
        author: 'By Sofia Martinez',
        content: `The Metropolitan Gallery's "Digital Realms" exhibition ambitiously attempts to survey digital art's evolution from early computer graphics to contemporary NFT art. The result is uneven - fascinating in parts, frustratingly superficial in others. Curator David Chen clearly understands the technical aspects of digital art but seems uncertain how to translate that knowledge into engaging museum experience.

The exhibition's strongest section covers pioneering digital artists of the 1960s and 70s. Seeing early experiments with computer-generated images provides valuable historical context, showing how artists pushed limited technology's boundaries. Interactive displays allow visitors to experiment with similar software tools, making abstract concepts tangible. This hands-on approach works wonderfully, especially for younger visitors who might not realize how revolutionary these early works were.

Contemporary sections prove more problematic. The NFT art section feels like checking boxes rather than critical curation. Including controversial pieces that sold for millions generates publicity but doesn't help visitors understand why these works command such prices. The exhibition neither celebrates nor critiques NFT art effectively, settling for bland neutrality that serves no one well.

Video game art receives surprisingly thoughtful treatment. Chen argues convincingly that game design represents legitimate artistic practice, showcasing concept art, level design documents, and playable demos that reveal sophisticated aesthetic decisions. This section challenges traditional art hierarchy in productive ways, asking viewers to reconsider what qualifies as art worthy of museum display.

The exhibition ultimately suffers from trying to cover too much ground. A more focused approach - perhaps concentrating on a single aspect of digital art history - would have been more impactful. As it stands, "Digital Realms" feels like an introductory textbook translated into exhibition form: informative but lacking the depth and critical perspective great exhibitions provide. Still, it's worth visiting if only to engage with questions about art, technology, and value that will only grow more urgent.`
      }
    ],
    questions: [
      {
        number: 1,
        statement: 'Which reviewer suggests the event succeeded in making complex ideas accessible?',
        correctText: 'C',
        explanation: 'James says the play "challenges conventional theater boundaries without descending into pretentious nonsense" and is "emotionally accessible"'
      },
      {
        number: 2,
        statement: 'Which reviewer criticizes poor character development despite strong visual elements?',
        correctText: 'A',
        explanation: 'Michael mentions "visual masterpiece that unfortunately prioritizes style over substance" and "weak script"'
      },
      {
        number: 3,
        statement: 'Which reviewer praises the integration of modern and traditional elements?',
        correctText: 'B',
        explanation: 'Rachel discusses the orchestra premiering contemporary work alongside Bach and Beethoven, saying "the gamble paid off"'
      },
      {
        number: 4,
        statement: 'Which reviewer feels the event lacked focus and tried to accomplish too much?',
        correctText: 'D',
        explanation: 'Sofia states "The exhibition ultimately suffers from trying to cover too much ground"'
      },
      {
        number: 5,
        statement: 'Which reviewer highlights an outstanding individual performance within a flawed work?',
        correctText: 'A',
        explanation: 'Michael praises Jennifer Chang who "brings depth to a underwritten role" despite the "weak script"'
      },
      {
        number: 6,
        statement: 'Which reviewer mentions that some attendees left before the event finished?',
        correctText: 'C',
        explanation: 'James notes "Some audience members left at interval, perhaps uncomfortable with extended darkness"'
      },
      {
        number: 7,
        statement: 'Which reviewer suggests the event made a familiar work feel fresh?',
        correctText: 'B',
        explanation: 'Rachel says Martinez "found fresh perspectives" on Beethoven\'s Fifth Symphony, "a work performed so frequently it risks becoming wallpaper"'
      },
      {
        number: 8,
        statement: 'Which reviewer appreciates historical context being provided?',
        correctText: 'D',
        explanation: 'Sofia praises seeing "early experiments with computer-generated images provides valuable historical context"'
      },
      {
        number: 9,
        statement: 'Which reviewer describes an unconventional format that enhanced the experience?',
        correctText: 'C',
        explanation: 'James discusses the complete darkness in the theater creating "intimacy impossible in traditional theater"'
      },
      {
        number: 10,
        statement: 'Which reviewer criticizes a lack of critical perspective in presenting controversial content?',
        correctText: 'D',
        explanation: 'Sofia states the NFT section "neither celebrates nor critiques NFT art effectively, settling for bland neutrality"'
      }
    ]
  },

  // Exercise 4 - Environmental Initiatives
  {
    id: 'b2-mm-4',
    type: 'multiple-matching',
    title: 'Environmental Initiatives in Cities',
    difficulty: 'medium',
    topic: 'Environment & Urban Planning',
    totalWords: 940,
    instruction: 'You are going to read about five cities implementing environmental initiatives. For questions 1-10, choose from the cities (A-E). The cities may be chosen more than once.',
    texts: [
      {
        letter: 'A',
        title: 'Copenhagen, Denmark - Cycling Infrastructure Revolution',
        content: `Copenhagen's transformation into a cycling paradise didn't happen overnight. It took decades of consistent political will, infrastructure investment, and cultural shift. Today, over 62% of residents commute by bicycle daily, even in harsh winter weather. The secret isn't just building bike lanes - it's creating a comprehensive system that makes cycling safer, faster, and more convenient than driving.

The city's cycling infrastructure goes far beyond painted lines on roads. Dedicated cycle superhighways stretch into suburbs, equipped with specialized traffic lights that detect approaching cyclists and adjust timing to keep them moving. Raised bike lanes physically separate cyclists from both pedestrians and cars, reducing conflicts and accidents. Winter maintenance prioritizes cycle paths, often cleared of snow before main roads receive attention.

The environmental impact has been significant. Carbon emissions from transportation have dropped by 40% over the past two decades, air quality has improved measurably, and the city is on track to become carbon neutral by 2025. However, the benefits extend beyond environmental metrics. Residents report higher quality of life, children gain independence earlier by cycling to school, and the city saves millions on healthcare costs due to a more physically active population.

Not everything has been smooth sailing. Expanding bike infrastructure required reducing car parking and road space, creating initial resistance from some residents and businesses. The substantial upfront investment raised questions about priorities and budget allocation. Yet polls consistently show overwhelming public support, and cities worldwide now study Copenhagen's model, demonstrating that sustainable urban transformation is possible with commitment and proper planning.`
      },
      {
        letter: 'B',
        title: 'Singapore - Vertical Gardens and Green Architecture',
        content: `In one of the world's most densely populated cities, Singapore has achieved something remarkable: increasing green space despite ongoing urban development. The solution was thinking vertically. Buildings across the city feature rooftop gardens, vertical walls covered in vegetation, and sky parks that create green spaces hundreds of meters above ground level.

This approach solves multiple problems simultaneously. Vegetation on buildings reduces urban heat island effect, lowering temperatures that can reach uncomfortable levels in tropical climate. Plants filter air pollution, absorb noise, and provide habitat for birds and insects, maintaining biodiversity in an urban environment. The cooling effect of green roofs reduces air conditioning needs, cutting energy consumption significantly.

The government made this possible through innovative policy. New developments must replace any green space they eliminate, with replacement possible through vertical solutions. Tax incentives encourage retrofitting existing buildings with green features. Public housing projects, home to over 80% of residents, incorporate community gardens where residents grow vegetables and herbs, fostering social connections alongside environmental benefits.

Maintenance posed initial challenges. Tropical climate means plants grow rapidly but also face intense heat, heavy rain, and strong winds. Automated irrigation systems, careful plant selection for local conditions, and regular professional maintenance proved essential. The upfront costs remain substantial, though long-term savings on energy and the less quantifiable quality of life improvements justify the investment according to most residents.`
      },
      {
        letter: 'C',
        title: 'Freiburg, Germany - Solar Energy Pioneer',
        content: `Freiburg's commitment to solar energy began in the 1970s following the Chernobyl nuclear disaster, when residents decided their city's energy future should be based on renewables. Today, Freiburg generates more solar electricity per capita than almost any city globally, with solar panels on residential buildings, schools, public facilities, and even the football stadium.

The Vauban district exemplifies this commitment. This car-free neighborhood of 5,000 residents showcases sustainable urban living. Every building generates more energy than it consumes through extensive solar panels, excellent insulation, and efficient design. Residents park in communal garages on the district's edge, with most choosing not to own cars at all due to excellent public transit and cycling infrastructure.

The city's success stems from making solar accessible to everyone, not just wealthy residents. Cooperative investment models allow people to collectively fund solar installations, sharing both costs and electricity generation benefits. Municipal buildings provided early demonstration sites, showing solar viability in German climate where sunshine isn't as abundant as Mediterranean regions.

Education plays a crucial role. The city's environmental education center teaches schoolchildren about renewable energy, creating a new generation deeply conscious of energy consumption and sustainability. Public information campaigns help residents understand how their choices impact energy use. This long-term approach built a culture that views renewable energy as normal rather than exceptional, making sustainable choices the default rather than requiring special effort.`
      },
      {
        letter: 'D',
        title: 'Melbourne, Australia - Water Management Innovation',
        content: `Melbourne's devastating drought from 1997 to 2009 forced the city to completely rethink water management. What emerged was one of the world's most sophisticated urban water systems, combining technology, infrastructure, and behavioral change to ensure water security in an increasingly unpredictable climate.

The city implemented a dual-piped system in new developments, delivering two types of water: high-quality drinking water and recycled water for gardens, toilets, and washing machines. Stormwater capture systems collect and treat rainwater from streets and roofs, converting what was once waste into a valuable resource. These systems recharge aquifers, provide water for parks and sports fields, and create urban wetlands that filter water naturally while providing wildlife habitat.

Residential rainwater tanks became common, encouraged by government rebates and building code changes. These tanks collect roof runoff, reducing stormwater flooding while providing water for gardens during dry periods. The city's parks feature drought-resistant plants that thrive with minimal watering, demonstrating that beautiful landscapes don't require constant irrigation.

The behavioral component proved just as important as infrastructure. Public awareness campaigns taught residents about water conservation, making shorter showers and turning off taps while brushing teeth cultural norms rather than special efforts. Smart meters allow residents to track water consumption in real-time, identifying leaks quickly and encouraging mindful use. The result: per capita water consumption dropped by over 40%, even as the population grew. When the drought finally ended, efficient water use habits persisted, demonstrating that environmental necessity can create lasting positive change.`
      },
      {
        letter: 'E',
        title: 'Portland, USA - Waste Reduction and Composting',
        content: `Portland has achieved an impressive 75% waste diversion rate, meaning three-quarters of waste avoids landfills through recycling, composting, and reuse. This success required comprehensive changes to waste management systems, business practices, and resident behaviors, implemented gradually over three decades.

The city's curbside composting program, launched in 2011, proved transformative. Every household receives three bins: garbage, recycling, and composting. The composting bin accepts food scraps, yard waste, and compostable food packaging. Initially controversial - some residents complained about smell or found sorting confusing - the program's benefits became clear as landfill waste plummeted and finished compost became available for gardening.

Commercial composting requirements extended the program's impact. Restaurants, grocery stores, and businesses must sort organic waste for composting, dramatically reducing commercial trash. The city offers free training and consultation to help businesses implement systems, recognizing that convenience and support matter more than mandates alone. The resulting compost supplies urban farms and community gardens, creating a circular economy where waste becomes resource.

The city addressed packaging at the source through innovative policies. Businesses cannot provide polystyrene foam takeout containers, and plastic bags cost $0.05, encouraging reusable bag use. These measures reduce problematic waste while sending market signals to manufacturers. Some businesses initially resisted, arguing regulations hurt profitability, but many now report that customers appreciate environmental leadership. Portland demonstrates that ambitious waste reduction is achievable when government, businesses, and residents work together toward shared goals, with clear systems making sustainable choices easy rather than requiring exceptional effort.`
      }
    ],
    questions: [
      {
        number: 1,
        statement: 'Which city mentions creating infrastructure specifically for commuting from suburban areas?',
        correctText: 'A',
        explanation: 'Copenhagen describes "cycle superhighways stretch into suburbs"'
      },
      {
        number: 2,
        statement: 'Which city describes using recycled resources to support local food production?',
        correctText: 'E',
        explanation: 'Portland mentions "finished compost became available for gardening" and "supplies urban farms and community gardens"'
      },
      {
        number: 3,
        statement: 'Which city mentions environmental improvements leading to financial savings in healthcare?',
        correctText: 'A',
        explanation: 'Copenhagen states "the city saves millions on healthcare costs due to a more physically active population"'
      },
      {
        number: 4,
        statement: 'Which city required replacing eliminated green space with alternative solutions?',
        correctText: 'B',
        explanation: 'Singapore implemented policy where "developments must replace any green space they eliminate, with replacement possible through vertical solutions"'
      },
      {
        number: 5,
        statement: 'Which city developed a system providing different types of water for different purposes?',
        correctText: 'D',
        explanation: 'Melbourne implemented "dual-piped system...delivering two types of water: high-quality drinking water and recycled water"'
      },
      {
        number: 6,
        statement: 'Which city mentions educational programs targeting younger generations?',
        correctText: 'C',
        explanation: 'Freiburg describes "environmental education center teaches schoolchildren about renewable energy"'
      },
      {
        number: 7,
        statement: 'Which city describes initial resistance from some residents that later changed to support?',
        correctText: 'A',
        explanation: 'Copenhagen mentions "creating initial resistance" but "polls consistently show overwhelming public support"'
      },
      {
        number: 8,
        statement: 'Which city created economic incentives for individual participation in their initiative?',
        correctText: 'C',
        explanation: 'Freiburg describes "Cooperative investment models allow people to collectively fund solar installations, sharing both costs and electricity generation benefits"'
      },
      {
        number: 9,
        statement: 'Which city mentions that crisis situations led to permanent behavioral changes?',
        correctText: 'D',
        explanation: 'Melbourne notes "When the drought finally ended, efficient water use habits persisted"'
      },
      {
        number: 10,
        statement: 'Which city implemented financial penalties to discourage environmentally harmful practices?',
        correctText: 'E',
        explanation: 'Portland mentions "plastic bags cost $0.05, encouraging reusable bag use"'
      }
    ]
  },

  // Exercise 5 - Technology Innovations
  {
    id: 'b2-mm-5',
    type: 'multiple-matching',
    title: 'Technology Innovations Changing Daily Life',
    difficulty: 'hard',
    topic: 'Technology & Innovation',
    totalWords: 900,
    instruction: 'You are going to read about four recent technology innovations. For questions 1-10, choose from the innovations (A-D). The innovations may be chosen more than once.',
    texts: [
      {
        letter: 'A',
        title: 'Smart Home Energy Management Systems',
        content: `Modern smart home energy systems have evolved far beyond simple programmable thermostats. These sophisticated platforms use artificial intelligence to learn household patterns, weather predictions, and electricity pricing variations, optimizing energy consumption without requiring constant user input. The technology promises both environmental benefits and cost savings, though the reality proves more nuanced.

Installation can be straightforward for tech-savvy users but presents challenges for others. The system requires smart meters, compatible appliances, and a reliable internet connection. Initial setup involves connecting numerous devices, each with its own app and interface, creating what critics call "ecosystem fragmentation." Companies are addressing this through unified platforms, but interoperability between different manufacturers' devices remains imperfect.

The learning curve extends beyond technical setup. Users must understand how the system makes decisions to trust it fully. Why did it preheat the house at 5 AM rather than 6 AM? Because it predicted slower heating on a cold morning, accounting for your shower schedule and preferred breakfast time. This predictive logic feels magical when it works perfectly but frustrating when algorithms misinterpret patterns.

Privacy concerns deserve attention. These systems collect detailed data about when you're home, which rooms you use, and what appliances you operate. While companies promise data security, the potential for breaches or misuse exists. Users must balance convenience and savings against comfort with extensive home monitoring. For many, energy bill reductions of 20-30% justify these concerns, while others find the tradeoff unacceptable, preferring simpler solutions that offer more control and less surveillance.`
      },
      {
        letter: 'B',
        title: 'Real-Time Translation Earbuds',
        content: `Language barriers in international travel may become relics of the past thanks to real-time translation earbuds. These remarkable devices listen to foreign speech, translate it instantly, and speak the translation into your ear, creating the illusion of everyone speaking your language. The technology seems straight from science fiction, yet increasingly affordable consumer versions make it accessible to average travelers.

Current limitations prevent perfect translation. The system struggles with heavy accents, rapid speech, and colloquialisms or idioms that don't translate literally. Background noise in busy streets or restaurants degrades accuracy significantly. Languages with similar sounds but different meanings depending on context - tonal languages like Mandarin - pose particular challenges. Users report success rates around 70-80% for common tourist situations but lower for complex conversations.

The social dynamics of using translation earbuds prove interesting. Some conversation partners find them fascinating, eager to try the technology themselves. Others feel insulted, as though you're not making effort to learn their language or culture. The visible technology creates social distance rather than connection, with people speaking to the device rather than to each other. Younger generations seem more accepting, while older individuals often prefer traditional phrase books or gestures.

Despite imperfections, the technology opens possibilities for meaningful cross-cultural exchange. A Japanese businessman reported conducting negotiations in Brazil that would have been impossible without translators. A volunteer teacher used them to communicate with refugee families, though she emphasized also learning basic phrases in their languages. The technology works best when viewed as a supplement to, not replacement for, cultural awareness and language learning efforts. As accuracy improves and devices become less obtrusive, they could genuinely transform how humans communicate across language divides.`
      },
      {
        letter: 'C',
        title: 'Personal Health Monitoring Wearables',
        content: `Advanced wearable devices now monitor heart rate variability, blood oxygen levels, sleep patterns, and stress indicators continuously, promising to transform preventive healthcare. Proponents envision catching health issues before symptoms appear, while skeptics worry about creating unnecessary anxiety and overwhelming medical systems with data of questionable clinical significance.

The devices excel at tracking trends over time. Athletes use them to optimize training and recovery, identifying when they're pushing too hard or not hard enough. People with chronic conditions monitor how activities, diet, and medication affect their health metrics, sharing comprehensive data with doctors rather than relying on memory or sparse clinic measurements. Some users credit these devices with detecting irregular heartbeats or sleep apnea, prompting medical evaluation that might otherwise have been delayed.

However, the flood of health data creates new problems. Users become fixated on metrics, experiencing anxiety when numbers fall outside "optimal" ranges that may not actually indicate problems. The devices often lack context - elevated heart rate might indicate exercise, stress, caffeine, or illness, but the device can't distinguish. Some doctors report patients arriving with printouts of weeks of data, taking valuable appointment time to explain that minor variations are normal.

The psychological impact varies widely. Some people find comfort in quantified health data, feeling more in control of their wellbeing. Others develop obsessive monitoring behaviors, checking devices constantly and making lifestyle changes based on noisy data that may not reflect actual health status. The technology works best when used as one tool among many, combined with regular medical care, body awareness, and common sense. As machine learning improves at interpreting patterns, these devices may fulfill their preventive healthcare promise, but currently, they're most valuable for motivated individuals who understand both the potential and limitations of continuous health monitoring.`
      },
      {
        letter: 'D',
        title: 'Automated Vertical Farming Systems',
        content: `Vertical farms grow crops in stacked layers within controlled indoor environments, using LED lights, precise nutrient delivery, and climate control to maximize yield while minimizing land, water, and pesticide use. These high-tech facilities can operate in urban areas, significantly reducing food transportation distances and enabling fresh produce year-round regardless of outdoor weather or soil quality.

The environmental benefits are compelling. Vertical farms use 95% less water than traditional agriculture through closed-loop systems that recycle every drop. Eliminating weather variables means consistent harvests, reducing food waste from crop failures. The controlled environment requires no pesticides or herbicides, producing cleaner food without chemical runoff damaging surrounding ecosystems. Some systems generate their own renewable energy through solar panels, approaching carbon neutrality.

Economic viability remains challenging. Initial setup costs run into millions of dollars for commercial operations. LED lights and climate control consume significant electricity, meaning farms depend on low energy costs or renewable sources for profitability. The technology works economically for high-value crops like leafy greens and herbs but struggles to compete with field agriculture for staples like wheat or rice. Some startups have failed despite initial enthusiasm, unable to scale successfully or achieve projected efficiency.

The technology's real potential may lie in specific applications rather than replacing traditional farming entirely. Urban restaurants could grow ultra-fresh herbs and microgreens on-site. Cities in harsh climates or areas with contaminated soil could achieve food security impossible through conventional agriculture. Research facilities could conduct plant research without weather variables confounding results. As technology improves and energy becomes cleaner and cheaper, vertical farming could increasingly supplement traditional agriculture, particularly for crops where freshness commands premium prices and transportation costs are high. The agriculture revolution won't happen overnight, but the seeds of change are sprouting in these unlikely urban farms.`
      }
    ],
    questions: [
      {
        number: 1,
        statement: 'Which innovation mentions users becoming overly focused on quantitative data?',
        correctText: 'C',
        explanation: 'Health wearables section mentions "Users become fixated on metrics, experiencing anxiety when numbers fall outside optimal ranges"'
      },
      {
        number: 2,
        statement: 'Which innovation describes difficulty in achieving profitability for widespread adoption?',
        correctText: 'D',
        explanation: 'Vertical farming mentions "Economic viability remains challenging" and "Some startups have failed despite initial enthusiasm"'
      },
      {
        number: 3,
        statement: 'Which innovation mentions problems with coordinating multiple manufacturers\' products?',
        correctText: 'A',
        explanation: 'Smart home systems describe "ecosystem fragmentation" and "interoperability between different manufacturers\' devices remains imperfect"'
      },
      {
        number: 4,
        statement: 'Which innovation may create social awkwardness in some situations?',
        correctText: 'B',
        explanation: 'Translation earbuds section discusses "Some conversation partners feel insulted" and "creates social distance rather than connection"'
      },
      {
        number: 5,
        statement: 'Which innovation specifically mentions benefits for people with ongoing health conditions?',
        correctText: 'C',
        explanation: 'Wearables mention "People with chronic conditions monitor how activities, diet, and medication affect their health metrics"'
      },
      {
        number: 6,
        statement: 'Which innovation describes predictive capabilities based on pattern analysis?',
        correctText: 'A',
        explanation: 'Smart home systems "use artificial intelligence to learn household patterns" and make predictive decisions about heating'
      },
      {
        number: 7,
        statement: 'Which innovation performs less effectively in crowded environments?',
        correctText: 'B',
        explanation: 'Translation earbuds section states "Background noise in busy streets or restaurants degrades accuracy significantly"'
      },
      {
        number: 8,
        statement: 'Which innovation mentions particularly strong performance in specific applications rather than general use?',
        correctText: 'D',
        explanation: 'Vertical farming says "real potential may lie in specific applications rather than replacing traditional farming entirely"'
      },
      {
        number: 9,
        statement: 'Which innovation raises concerns about extensive data collection on personal habits?',
        correctText: 'A',
        explanation: 'Smart home section discusses "detailed data about when you\'re home, which rooms you use" and privacy concerns'
      },
      {
        number: 10,
        statement: 'Which innovation mentions generational differences in acceptance?',
        correctText: 'B',
        explanation: 'Translation earbuds note "Younger generations seem more accepting, while older individuals often prefer traditional phrase books"'
      }
    ]
  },

  // Exercise 6 - Health and Wellness Approaches
  {
    id: 'b2-mm-6',
    type: 'multiple-matching',
    title: 'Approaches to Health and Wellness',
    difficulty: 'medium',
    topic: 'Health & Lifestyle',
    totalWords: 930,
    instruction: 'You are going to read about five people describing their approaches to health and wellness. For questions 1-10, choose from the people (A-E). The people may be chosen more than once.',
    texts: [
      {
        letter: 'A',
        title: 'Lisa - Mindfulness and Meditation Practice',
        content: `I discovered meditation during a particularly stressful period at work three years ago. Initially skeptical - I thought meditation was either religious practice or pseudoscience - I reluctantly downloaded a meditation app after my doctor suggested it for anxiety management. That decision changed my life, though not in the dramatic, instant way I'd imagined.

The early weeks proved frustrating. Sitting still felt impossible, my mind raced constantly, and the whole practice seemed pointless. I almost gave up multiple times. The breakthrough came when I stopped expecting immediate transformation and accepted meditation as a skill requiring patient practice, like learning an instrument. Gradually, I noticed small changes: slightly better sleep, marginally improved focus, less reactive behavior in stressful situations.

Today, I meditate 20 minutes daily, usually in the morning before my family wakes. It's become my mental hygiene routine, as essential as brushing teeth. The benefits extend beyond stress reduction. I'm more present with my children, actually listening rather than thinking about work or scrolling my phone. I notice thought patterns that previously operated unconsciously, giving me space to choose responses rather than react automatically.

The key was finding the right approach. Apps with celebrity voices and cosmic music didn't work for me. Simple, secular instruction focused on breath awareness suited my temperament better. I also learned that perfection isn't the goal - some sessions my mind wanders constantly, and that's okay. The practice is showing up consistently, not achieving some blissful state. Anyone considering meditation should try different styles, be patient with the process, and remember that benefits accumulate gradually rather than appearing overnight.`
      },
      {
        letter: 'B',
        title: 'Marcus - Strength Training and Nutrition',
        content: `At 45, I realized I'd spent two decades letting my physical health deteriorate. Working long hours, eating poorly, barely moving beyond walks to the car - I'd become a stereotype of middle-aged decline. My wake-up call came during a hiking trip with friends where I struggled to keep pace, gasping for breath on modest inclines that others handled easily.

I started with a personal trainer, investing in professional guidance rather than fumbling through YouTube videos. This decision proved crucial. She taught me proper form, preventing injuries common among beginners who lift too heavy too soon. We built a progressive program starting with bodyweight exercises and light weights, gradually increasing intensity as my strength improved. The structure and accountability kept me consistent when motivation flagged.

Nutrition education was equally important. I'd believed various diet myths - that carbs are evil, that eating multiple small meals boosts metabolism, that supplements can substitute for whole foods. My trainer connected me with a registered dietitian who taught evidence-based nutrition, focusing on sufficient protein, adequate vegetables, and appropriate calorie intake for my goals. No magic formulas or restrictive rules, just balanced eating that I could maintain long-term.

The physical changes took months to become noticeable, but I felt better within weeks. Better sleep, more energy, improved mood - these came before visible muscle gain or fat loss. Two years in, I'm stronger than I was at 25, and the process has taught me that consistency matters more than intensity. Three focused gym sessions weekly beats seven half-hearted workouts. Anyone starting should invest in proper instruction, prioritize sustainable habits over dramatic transformations, and understand that real change requires patience and realistic expectations.`
      },
      {
        letter: 'C',
        title: 'Aisha - Holistic Ayurvedic Lifestyle',
        content: `Ayurveda, the traditional Indian medicine system, transformed how I understand health and my body. Western medicine treated my digestive issues with medications that addressed symptoms without solving underlying causes. An Ayurvedic practitioner took a completely different approach, examining my constitution, lifestyle, diet, and daily routines holistically.

The diagnostic process was fascinating. Rather than ordering tests immediately, the practitioner asked detailed questions about my sleep patterns, appetite variations, stress response, and even preferred temperatures. She identified my dominant dosha (mind-body type) and explained how imbalances in my constitution manifested as digestive problems. The personalized treatment plan included dietary modifications, herbal supplements, daily routine adjustments, and specific practices like oil massage and warm water drinking.

Results came gradually but profoundly. My digestion improved within weeks as I implemented dietary recommendations - eating warm, cooked foods rather than raw salads, avoiding incompatible food combinations, and timing meals appropriately. But benefits extended beyond digestive health. I slept better, had more stable energy, and felt generally more balanced. The practice emphasizes prevention and maintenance rather than just treating disease.

Skeptics dismiss Ayurveda as unscientific, lacking randomized controlled trials and rigorous evidence. I understand this criticism, though I note that some Ayurvedic principles align with current nutritional science. For me, the individualized approach and focus on lifestyle factors rather than just medication proved valuable. I don't advocate abandoning modern medicine - I still see my regular doctor for check-ups and acute issues. But incorporating Ayurvedic wisdom for general wellness and prevention has been genuinely beneficial. The key is finding qualified practitioners, maintaining healthy skepticism about miracle claims, and integrating what works for you personally.`
      },
      {
        letter: 'D',
        title: 'Tom - Outdoor Adventure Activities',
        content: `I never understood people who called exercise enjoyable until I discovered rock climbing. Gyms bored me, running felt like punishment, and team sports never appealed. But climbing combined physical challenge with problem-solving, requiring strength, flexibility, balance, and mental focus simultaneously. It didn't feel like exercise - it felt like play.

Indoor climbing gyms provided a welcoming entry point. No experience necessary, equipment available to rent, and routes for all skill levels color-coded for easy navigation. The climbing community proved surprisingly supportive, with experienced climbers offering tips and encouragement to beginners. Within months, I progressed from easy routes to more challenging problems that required strategic thinking about body positioning and movement sequences.

Outdoor climbing introduced new dimensions - exposure to heights, variable rock conditions, and the complexity of safety systems. I joined a climbing club and learned from experienced mentors about risk management, weather assessment, and environmental responsibility. These outdoor adventures connected me with nature in ways I never experienced during casual hiking. Spending entire days focused on a challenging climb, working with partners to solve problems, sharing the summit experience - it fulfilled something deeper than just exercise.

The physical benefits are substantial - improved grip strength, core stability, cardiovascular fitness, and flexibility. But the mental aspects matter just as much. Climbing demands present-moment focus; you can't think about work stress while planning your next move ten meters off the ground. It builds confidence in your physical capabilities and resilience when facing challenges. The key is finding what makes physical activity enjoyable for you personally. Forcing yourself through exercise you hate isn't sustainable. Whether it's dancing, hiking, swimming, or martial arts, discover movement that engages you mentally and emotionally, not just physically.`
      },
      {
        letter: 'E',
        title: 'Sarah - Sleep Optimization and Recovery',
        content: `Society glorifies overwork and sleep deprivation, treating exhaustion as a badge of honor. I bought into this mentality for years, sleeping five hours nightly while working long hours and maintaining an intense exercise schedule. Chronic fatigue, declining performance, and frequent illness finally forced me to recognize that sleep wasn't a luxury - it was a foundation of health as important as diet or exercise.

Transforming my sleep required systematic changes. I established consistent bed and wake times, even on weekends, allowing my circadian rhythm to stabilize. I addressed environmental factors - installing blackout curtains, reducing bedroom temperature, and eliminating electronic devices. The blue light from phones and tablets suppresses melatonin production, making falling asleep difficult, so I implemented a digital sunset, stopping screen use two hours before bed.

The pre-sleep routine matters as much as sleep duration. I wind down with reading, gentle stretching, or relaxation techniques rather than watching stimulating content or working. Caffeine and alcohol, which I previously consumed freely, required strict timing limits - no caffeine after 2 PM, limiting alcohol since it degrades sleep quality despite making you drowsy.

Tracking my sleep with a wearable device provided insights into patterns I couldn't perceive consciously. I learned which activities or foods disrupted my sleep, how exercise timing affected rest quality, and how much sleep I actually needed, which proved more than the seven hours I'd assumed adequate. The results of proper sleep were dramatic: improved mood, better cognitive performance, enhanced athletic recovery, and stronger immune function. Prioritizing sleep felt counterintuitive initially - sleeping more to achieve more - but productivity increased because my waking hours became more effective. My advice is simple: treat sleep as a performance enhancer and health requirement, not a negotiable luxury to sacrifice for other activities.`
      }
    ],
    questions: [
      {
        number: 1,
        statement: 'Which person emphasizes that discovering an enjoyable approach is key to consistency?',
        correctText: 'D',
        explanation: 'Tom states "The key is finding what makes physical activity enjoyable for you personally"'
      },
      {
        number: 2,
        statement: 'Which person mentions that initial difficulties almost led them to quit?',
        correctText: 'A',
        explanation: 'Lisa says "I almost gave up multiple times" during early meditation practice'
      },
      {
        number: 3,
        statement: 'Which person describes using professional expertise to avoid common mistakes?',
        correctText: 'B',
        explanation: 'Marcus mentions his trainer "taught me proper form, preventing injuries common among beginners"'
      },
      {
        number: 4,
        statement: 'Which person advocates combining traditional and modern medical approaches?',
        correctText: 'C',
        explanation: 'Aisha states "I don\'t advocate abandoning modern medicine" while incorporating Ayurvedic wisdom'
      },
      {
        number: 5,
        statement: 'Which person used technology to gain insights into patterns they couldn\'t otherwise notice?',
        correctText: 'E',
        explanation: 'Sarah mentions "Tracking my sleep with a wearable device provided insights into patterns I couldn\'t perceive consciously"'
      },
      {
        number: 6,
        statement: 'Which person describes a holistic diagnostic process that considered multiple lifestyle factors?',
        correctText: 'C',
        explanation: 'Aisha discusses the Ayurvedic practitioner asking "detailed questions about my sleep patterns, appetite variations, stress response"'
      },
      {
        number: 7,
        statement: 'Which person initially held skeptical views about their chosen practice?',
        correctText: 'A',
        explanation: 'Lisa says "Initially skeptical - I thought meditation was either religious practice or pseudoscience"'
      },
      {
        number: 8,
        statement: 'Which person describes their approach providing psychological benefits beyond physical improvements?',
        correctText: 'D',
        explanation: 'Tom mentions "mental aspects matter just as much" and climbing "builds confidence and resilience"'
      },
      {
        number: 9,
        statement: 'Which person had to challenge society\'s common attitude about their health priority?',
        correctText: 'E',
        explanation: 'Sarah discusses how "Society glorifies overwork and sleep deprivation" which she had to overcome'
      },
      {
        number: 10,
        statement: 'Which person emphasizes that visible results took time but internal improvements came earlier?',
        correctText: 'B',
        explanation: 'Marcus states "physical changes took months to become noticeable, but I felt better within weeks"'
      }
    ]
  }
];

export const MULTIPLE_MATCHING_EXERCISES_SUMMARY = {
  total: 6,
  implemented: 6,
  pending: 0,
  totalQuestions: 60, // 10 questions per exercise × 6 exercises
  texts: 26 // Varying 4-5 texts per exercise
};
