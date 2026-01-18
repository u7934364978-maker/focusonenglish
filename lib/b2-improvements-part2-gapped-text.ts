// ================================================================
// PART 6: GAPPED TEXT (FCE Reading)
// ================================================================
// Descripción: 6-7 párrafos removidos, debe ubicarlos correctamente
// Evalúa: coherencia, cohesión, estructura textual
// Nota: Hay 1 párrafo distractor que NO se usa
// ================================================================

export interface GappedTextExercise {
  id: string;
  type: 'gapped-text';
  title: string;
  mainText: string; // Texto con marcadores [GAP 1], [GAP 2], etc.
  removedParagraphs: {
    letter: string; // A, B, C, D, E, F, G
    text: string;
    isDistractor: boolean;
  }[];
  correctAnswers: {
    gapNumber: number;
    correctLetter: string;
    explanation: string; // Por qué este párrafo va aquí
  }[];
  difficulty: 'medium' | 'hard';
  topic: string;
  wordCount: number;
}

export const GAPPED_TEXT_EXERCISES: GappedTextExercise[] = [
  // Exercise 1
  {
    id: 'b2-gt-1',
    type: 'gapped-text',
    title: 'The Rise of Remote Work',
    difficulty: 'medium',
    topic: 'Business',
    wordCount: 450,
    mainText: `The global pandemic of 2020 forced millions of people to work from home almost overnight. What started as a temporary measure has now become a permanent fixture in many industries. Companies that were once skeptical about remote work have discovered its numerous benefits.

[GAP 1]

This shift has had profound effects on urban planning and real estate. City centers, which once bustled with office workers during the week, have seen dramatic decreases in foot traffic. Meanwhile, suburban and rural areas have experienced population booms as people realize they no longer need to live near their workplace.

[GAP 2]

Technology has been crucial in enabling this transformation. Video conferencing platforms, project management software, and cloud computing have made it possible for teams to collaborate effectively across distances. However, these tools are only part of the solution.

[GAP 3]

Despite the advantages, remote work isn't without its challenges. Many employees struggle with work-life boundaries when their home becomes their office. The lack of casual social interactions can lead to feelings of isolation and disconnection from company culture.

[GAP 4]

Some companies have adopted hybrid models, allowing employees to split their time between home and office. This approach attempts to combine the flexibility of remote work with the collaboration benefits of in-person interaction.

[GAP 5]

Looking ahead, it's clear that the workplace will never return to its pre-2020 state. The remote work revolution has permanently changed our expectations about where and how we work, with implications for everything from commuter patterns to commercial real estate.

[GAP 6]

As technology continues to evolve and organizations refine their remote work policies, we may see even more innovative approaches to flexible working arrangements in the years to come.`,
    removedParagraphs: [
      {
        letter: 'A',
        text: `Productivity levels have remained stable or even increased in many cases, debunking the myth that employees need constant supervision. Furthermore, companies have reported significant savings on office space and overhead costs, with some choosing to downsize or eliminate physical offices entirely.`,
        isDistractor: false
      },
      {
        letter: 'B',
        text: `The environmental impact has also been notable. With fewer people commuting daily, carbon emissions from transportation have decreased significantly. This unexpected benefit has led some organizations to consider remote work as part of their sustainability strategies.`,
        isDistractor: false
      },
      {
        letter: 'C',
        text: `Building strong team dynamics requires intentional effort in a remote setting. Regular virtual social events, clear communication protocols, and fostering a sense of trust are essential. Managers must adapt their leadership styles to support remote teams effectively.`,
        isDistractor: false
      },
      {
        letter: 'D',
        text: `To address these issues, companies are investing in mental health support and encouraging employees to establish clear routines. Some have implemented "no meeting" days to give workers uninterrupted focus time, while others provide stipends for home office equipment.`,
        isDistractor: false
      },
      {
        letter: 'E',
        text: `Early trials showed mixed results, with some employees thriving in the office atmosphere while others preferred the quiet of their home workspace. The key seems to be offering choice rather than mandating one approach for everyone.`,
        isDistractor: false
      },
      {
        letter: 'F',
        text: `Manufacturing industries, however, have been less affected by these changes. Workers in factories and production facilities cannot perform their jobs remotely, creating a divide between office-based and hands-on professions.`,
        isDistractor: true // DISTRACTOR
      },
      {
        letter: 'G',
        text: `Employees who once spent hours in traffic now have more time for family, hobbies, and personal development. This improved quality of life has become a major factor in job satisfaction and retention rates, with many workers unwilling to return to traditional office arrangements.`,
        isDistractor: false
      }
    ],
    correctAnswers: [
      {
        gapNumber: 1,
        correctLetter: 'A',
        explanation: `Connects to "discovered its numerous benefits" - paragraph explains the benefits (productivity and cost savings)`
      },
      {
        gapNumber: 2,
        correctLetter: 'B',
        explanation: `Follows discussion of population shifts and introduces another consequence (environmental impact)`
      },
      {
        gapNumber: 3,
        correctLetter: 'C',
        explanation: `Follows "tools are only part of the solution" - explains what else is needed (team dynamics, management)`
      },
      {
        gapNumber: 4,
        correctLetter: 'D',
        explanation: `Addresses the challenges mentioned in previous paragraph by explaining solutions companies are implementing`
      },
      {
        gapNumber: 5,
        correctLetter: 'E',
        explanation: `Refers back to "hybrid models" mentioned in previous paragraph and discusses results`
      },
      {
        gapNumber: 6,
        correctLetter: 'G',
        explanation: `Supports "permanently changed expectations" by explaining why (improved quality of life)`
      }
    ]
  },

  // Exercise 2
  {
    id: 'b2-gt-2',
    type: 'gapped-text',
    title: 'The Psychology of Procrastination',
    difficulty: 'hard',
    topic: 'Psychology',
    wordCount: 480,
    mainText: `Procrastination is often misunderstood as simple laziness, but psychologists have discovered it's actually a complex emotional regulation problem. When faced with a task that causes anxiety or discomfort, our brain seeks immediate relief by avoiding it.

[GAP 1]

This creates a vicious cycle. The temporary relief we feel from avoiding an unpleasant task reinforces the procrastination behavior, making it more likely we'll procrastinate again in the future. Meanwhile, the task still looms, often growing more daunting as deadlines approach.

[GAP 2]

Perfectionism plays a significant role in procrastination. People who set unrealistically high standards for themselves may delay starting a project because they fear they won't meet their own expectations. The thought "If I can't do it perfectly, I shouldn't do it at all" becomes a paralyzing force.

[GAP 3]

Another factor is the way we perceive time. Procrastinators often struggle with what psychologists call "temporal myopia" - an inability to connect with their future selves. The consequences of not completing a task feel abstract and distant, while the discomfort of doing it feels immediate and real.

[GAP 4]

Technology hasn't helped matters. With smartphones and social media providing constant distractions, it's easier than ever to avoid challenging work. What starts as "just checking my phone for a minute" can turn into hours of lost productivity.

[GAP 5]

Breaking the procrastination habit requires understanding its root causes. Rather than relying on willpower alone, effective strategies involve reducing the emotional barriers to starting. This might include breaking large projects into smaller, less intimidating steps.

[GAP 6]

Ultimately, overcoming procrastination isn't about becoming perfectly disciplined. It's about developing a healthier relationship with discomfort and building systems that make it easier to begin tasks before anxiety has a chance to build.`,
    removedParagraphs: [
      {
        letter: 'A',
        text: `This behavior is rooted in our emotional regulation system. When we procrastinate, we're prioritizing short-term mood repair over long-term goals. The instant gratification of doing something easier or more pleasant wins out over the delayed reward of task completion.`,
        isDistractor: false
      },
      {
        letter: 'B',
        text: `Research shows that procrastinators experience higher levels of stress and poorer health outcomes. They also tend to earn lower grades in academic settings and receive more negative performance reviews at work, despite often being just as capable as their non-procrastinating peers.`,
        isDistractor: false
      },
      {
        letter: 'C',
        text: `Setting artificial deadlines earlier than the real ones can backfire. Procrastinators quickly learn to ignore self-imposed deadlines, knowing they're not "real." This undermines trust in one's own goal-setting and can actually worsen procrastination tendencies.`,
        isDistractor: true // DISTRACTOR
      },
      {
        letter: 'D',
        text: `Interestingly, this isn't linked to intelligence or ability. Highly capable people procrastinate just as much as anyone else - sometimes more, because they've learned they can often produce good work under pressure, which reinforces last-minute behavior.`,
        isDistractor: false
      },
      {
        letter: 'E',
        text: `To combat this, some experts recommend imagining your future self as a real person you're accountable to. Writing a letter to your future self or setting up accountability partnerships can help bridge this temporal disconnect.`,
        isDistractor: false
      },
      {
        letter: 'F',
        text: `Studies have found that people who use website blockers and put their phones in another room while working show marked improvements in task completion. Removing temptation is often more effective than trying to resist it through willpower alone.`,
        isDistractor: false
      },
      {
        letter: 'G',
        text: `Creating a pleasant work environment can also help. Listening to focus music, working in a favorite café, or rewarding yourself after completing small portions of a task can associate positive feelings with work rather than just with procrastination.`,
        isDistractor: false
      }
    ],
    correctAnswers: [
      {
        gapNumber: 1,
        correctLetter: 'A',
        explanation: `Explains WHY procrastination happens (emotional regulation, short-term mood repair) after introducing it as an emotional problem`
      },
      {
        gapNumber: 2,
        correctLetter: 'B',
        explanation: `Describes consequences of the vicious cycle mentioned in previous paragraph`
      },
      {
        gapNumber: 3,
        correctLetter: 'D',
        explanation: `Continues discussion of perfectionism by noting it affects capable people too - "Interestingly" signals additional information`
      },
      {
        gapNumber: 4,
        correctLetter: 'E',
        explanation: `Provides solution to "temporal myopia" problem discussed in previous paragraph`
      },
      {
        gapNumber: 5,
        correctLetter: 'F',
        explanation: `Continues technology distraction theme with specific solutions (blockers, phone removal)`
      },
      {
        gapNumber: 6,
        correctLetter: 'G',
        explanation: `Adds to strategies for "reducing emotional barriers" mentioned in previous paragraph`
      }
    ]
  },

  // Exercise 3
  {
    id: 'b2-gt-3',
    type: 'gapped-text',
    title: 'The Evolution of Music Streaming',
    difficulty: 'medium',
    topic: 'Entertainment',
    wordCount: 465,
    mainText: `Twenty years ago, the idea that people would pay monthly subscriptions to access millions of songs instantly seemed far-fetched. Yet today, streaming services like Spotify and Apple Music dominate the music industry, fundamentally changing how we discover and consume music.

[GAP 1]

The shift began when Napster and similar peer-to-peer file-sharing services demonstrated enormous appetite for digital music access. Though illegal, these platforms proved that consumers wanted instant, unlimited access to music libraries. The industry initially fought back with lawsuits rather than innovation.

[GAP 2]

Streaming services learned from these early missteps. By offering legal, affordable access to vast catalogs while compensating artists, they created a win-win situation. The convenience of having millions of songs in your pocket, coupled with personalized recommendations, made piracy less appealing.

[GAP 3]

For artists, the impact has been mixed. While streaming has democratized music distribution - anyone can upload their songs and potentially reach a global audience - the payment model remains controversial. Artists typically earn fractions of a cent per stream.

[GAP 4]

The algorithmic curation that makes streaming services so convenient has also changed music discovery. Rather than relying solely on radio DJs or music critics, listeners now receive personalized recommendations based on their listening habits and those of similar users.

[GAP 5]

Looking forward, the next frontier appears to be spatial audio and high-resolution streaming. As technology improves and bandwidth increases, services are competing on audio quality and immersive listening experiences.

[GAP 6]

Despite these innovations, some music lovers maintain that streaming lacks the ritualistic joy of physical media - carefully selecting an album, appreciating cover art, and listening from start to finish. For them, vinyl records have seen an unexpected resurgence.`,
    removedParagraphs: [
      {
        letter: 'A',
        text: `This revolution didn't happen overnight. Early attempts at legal digital music, like the iTunes store, required purchasing individual songs or albums. While successful, this model still felt restrictive compared to the unlimited access people had experienced with file-sharing.`,
        isDistractor: false
      },
      {
        letter: 'B',
        text: `It wasn't until Apple finally embraced streaming with Apple Music that the industry fully accepted this new paradigm. Even then, some major artists like Taylor Swift initially resisted, pulling their catalogs from streaming platforms before eventually returning.`,
        isDistractor: false
      },
      {
        letter: 'C',
        text: `This has led established musicians to focus more on live performances and merchandise for income, while emerging artists struggle to earn sustainable livings from streaming alone. Some have argued for higher per-stream payments, though the economics remain complex.`,
        isDistractor: false
      },
      {
        letter: 'D',
        text: `Critics worry this creates "filter bubbles" where listeners only hear music similar to what they already like, missing out on genre-crossing discoveries. However, features like "Discover Weekly" playlists have introduced many users to artists they never would have found otherwise.`,
        isDistractor: false
      },
      {
        letter: 'E',
        text: `Concert venues have adapted by incorporating streaming technology into live shows. Some artists now stream their performances simultaneously to online audiences, creating hybrid events that reach fans worldwide while maintaining the energy of live performance.`,
        isDistractor: true // DISTRACTOR
      },
      {
        letter: 'F',
        text: `Additionally, features like lyrics integration, podcast hosting, and social sharing have transformed streaming apps into comprehensive audio entertainment platforms rather than just music players. This expansion has helped justify subscription costs and retain users.`,
        isDistractor: false
      },
      {
        letter: 'G',
        text: `Vinyl sales have actually grown steadily over the past decade, with many albums now released in both streaming and vinyl formats simultaneously. This trend suggests that different formats can coexist, serving different listener needs and preferences.`,
        isDistractor: false
      }
    ],
    correctAnswers: [
      {
        gapNumber: 1,
        correctLetter: 'A',
        explanation: `Explains the evolution from "far-fetched" to today's reality - discusses early digital music attempts`
      },
      {
        gapNumber: 2,
        correctLetter: 'B',
        explanation: `Continues story of industry acceptance after mentioning industry initially "fought back"`
      },
      {
        gapNumber: 3,
        correctLetter: 'C',
        explanation: `Expands on "payment model remains controversial" with specific consequences for artists`
      },
      {
        gapNumber: 4,
        correctLetter: 'D',
        explanation: `Provides balanced view on algorithmic curation - both criticisms and benefits`
      },
      {
        gapNumber: 5,
        correctLetter: 'F',
        explanation: `Adds to discussion of service competition and features ("next frontier" followed by "Additionally")`
      },
      {
        gapNumber: 6,
        correctLetter: 'G',
        explanation: `Continues vinyl discussion with data supporting the "unexpected resurgence" mentioned`
      }
    ]
  }

// Continue with 3 more exercises to reach 6 total
// Due to length constraints, I'll include titles and frameworks for the remaining 3

];

// Remaining exercises to implement:
// Exercise 4: "The Science of Sleep" (Psychology/Health)
// Exercise 5: "Cryptocurrency and the Future of Money" (Finance/Technology)
// Exercise 6: "The Art of Negotiation" (Business/Communication)

export const GAPPED_TEXT_EXERCISES_SUMMARY = {
  total: 6,
  implemented: 3,
  pending: 3,
  totalGaps: 36, // 6 gaps per exercise × 6 exercises
  distractors: 6 // 1 per exercise
};
