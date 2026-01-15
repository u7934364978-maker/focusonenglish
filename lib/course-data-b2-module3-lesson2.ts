// ============================================
// MÓDULO 3: COMUNICACIÓN PROFESIONAL Y ACADÉMICA
// LECCIÓN 2: ACADEMIC WRITING - CONTENIDO COMPLETO
// ============================================

export const MODULE_3_LESSON_2 = {
  id: 'b2-m3-l2',
  title: 'Lección 2: Academic Writing - Essays and Research Papers',
  description: 'Domina la escritura académica formal para ensayos y trabajos de investigación',
  duration: 90,
  objectives: [
    'Escribir ensayos académicos con estructura clara y formal',
    'Usar vocabulario académico apropiado y registro formal',
    'Citar fuentes correctamente y evitar el plagio',
    'Construir argumentos lógicos con evidencia',
    'Aplicar convenciones de escritura académica en inglés'
  ],
  exercises: [
    // VOCABULARY EXERCISE
    {
      id: 'b2-m3-l2-vocabulary-1',
      type: 'vocabulary',
      title: 'Academic Writing Vocabulary and Phrases',
      vocabularySet: [
        {
          word: 'According to',
          definition: 'As stated by (used to cite sources)',
          example: 'According to Smith (2020), climate change affects biodiversity.'
        },
        {
          word: 'Research indicates/suggests/shows',
          definition: 'Studies demonstrate (reporting research findings)',
          example: 'Research indicates that bilingualism enhances cognitive abilities.'
        },
        {
          word: 'It can be argued that',
          definition: 'One could make the case that (presenting an argument)',
          example: 'It can be argued that technology has improved education.'
        },
        {
          word: 'Evidence suggests',
          definition: 'Data/information indicates (presenting support)',
          example: 'Evidence suggests a strong correlation between diet and health.'
        },
        {
          word: 'From this perspective',
          definition: 'Looking at it this way (presenting a viewpoint)',
          example: 'From this perspective, economic growth should be prioritized.'
        },
        {
          word: 'To illustrate this point',
          definition: 'To demonstrate this with an example',
          example: 'To illustrate this point, consider the case of Finland\'s education system.'
        },
        {
          word: 'In light of',
          definition: 'Considering; given the circumstances of',
          example: 'In light of recent findings, previous theories must be reconsidered.'
        },
        {
          word: 'It is worth noting that',
          definition: 'It is important to mention/observe that',
          example: 'It is worth noting that correlation does not imply causation.'
        },
        {
          word: 'The implications of this are',
          definition: 'The consequences/significance of this are',
          example: 'The implications of this discovery are far-reaching.'
        },
        {
          word: 'To summarize / In summary',
          definition: 'To briefly restate the main points',
          example: 'In summary, the evidence overwhelmingly supports the hypothesis.'
        }
      ],
      questions: [
        {
          id: 'q1',
          type: 'fill-blank',
          question: '___ recent studies, meditation can reduce stress and anxiety.',
          correctAnswer: 'According to',
          explanation: 'According to se usa para citar fuentes en escritura académica.',
          points: 1
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'Which phrase is most appropriate for introducing supporting evidence in academic writing?',
          options: [
            'I think that',
            'Research indicates that',
            'Maybe',
            'Everybody knows'
          ],
          correctAnswer: 'Research indicates that',
          explanation: 'Research indicates es formal y apropiado para escritura académica.',
          points: 1
        },
        {
          id: 'q3',
          type: 'fill-blank',
          question: '___, the benefits of renewable energy far outweigh the costs.',
          correctAnswer: 'In summary / To summarize / In conclusion',
          explanation: 'Estas frases se usan para concluir y resumir argumentos en escritura académica.',
          points: 1
        }
      ]
    },

    // GRAMMAR EXERCISE - Academic Structures
    {
      id: 'b2-m3-l2-grammar-1',
      type: 'grammar',
      title: 'Academic Grammar Structures',
      grammarPoint: 'Formal structures for academic writing',
      explanation: `En escritura académica, usamos estructuras más formales:

EVITAR (Informal):
• I think... → USAR: It can be argued that... / This essay contends that...
• A lot of → USAR: Numerous / Considerable / Substantial
• Get → USAR: Obtain, receive, acquire, achieve
• Show → USAR: Demonstrate, indicate, reveal, illustrate
• Say → USAR: State, assert, claim, argue, contend

ESTRUCTURAS ACADÉMICAS COMUNES:
• Impersonal constructions: "It is evident that..." (no "We can see that...")
• Passive voice: "The data was analyzed" (no "We analyzed the data")
• Nominalization: "The implementation of the policy" (no "When they implemented...")
• Hedging language: "It appears that..." / "Evidence suggests..." (evita ser demasiado absoluto)
• Citations: "According to Brown (2021)..." / "As Smith argues..."`,
      examples: [
        'INFORMAL: I think education is important. → FORMAL: It can be argued that education plays a crucial role in society.',
        'INFORMAL: Lots of people use smartphones. → FORMAL: A substantial proportion of the population utilizes smartphones.',
        'INFORMAL: This shows that... → FORMAL: This demonstrates/indicates that...',
        'INFORMAL: We did an experiment. → FORMAL: An experiment was conducted.',
        'INFORMAL: Everybody knows that... → FORMAL: It is widely recognized that...',
        'INFORMAL: The problem got worse. → FORMAL: The issue deteriorated / became more severe.',
        'INFORMAL: They found out that... → FORMAL: The researchers discovered that...'
      ],
      questions: [
        {
          id: 'q1',
          type: 'short-answer',
          question: 'Rewrite in academic style: "I think social media is bad for teenagers."',
          correctAnswer: 'It can be argued that social media has detrimental effects on adolescents. / Research suggests that social media negatively impacts teenagers.',
          explanation: 'Eliminamos "I think", usamos vocabulario más formal (detrimental, adolescents), y lo hacemos más objetivo.',
          points: 2
        },
        {
          id: 'q2',
          type: 'short-answer',
          question: 'Rewrite in academic style: "We did a survey and found that lots of students don\'t get enough sleep."',
          correctAnswer: 'A survey was conducted which revealed that a significant proportion of students experience insufficient sleep.',
          explanation: 'Usamos voz pasiva, vocabulario formal (revealed, significant proportion, insufficient), y eliminamos "lots of".',
          points: 2
        },
        {
          id: 'q3',
          type: 'multiple-choice',
          question: 'Which is the most academic/formal version?',
          options: [
            'The study shows that pollution is getting worse.',
            'The research demonstrates that pollution levels are increasing.',
            'They found out pollution is bad.',
            'I think pollution is a big problem.'
          ],
          correctAnswer: 'The research demonstrates that pollution levels are increasing.',
          explanation: 'Usa vocabulario formal (demonstrates, pollution levels, increasing) sin ser personal.',
          points: 1
        },
        {
          id: 'q4',
          type: 'fill-blank',
          question: 'Replace informal words with formal equivalents: "We need to __(get)__ more information about the __(problem)__."',
          correctAnswer: 'obtain/acquire, issue/matter/challenge',
          explanation: 'Get→obtain/acquire, problem→issue/matter son más formales para escritura académica.',
          points: 2
        }
      ]
    },

    // READING EXERCISE - Academic Article
    {
      id: 'b2-m3-l2-reading-1',
      type: 'reading',
      title: 'The Impact of Bilingualism on Cognitive Development',
      text: `Abstract
This paper examines the cognitive benefits of bilingualism, with particular emphasis on executive function and cognitive flexibility. Drawing on recent neuroscientific research, it is argued that bilingual individuals demonstrate enhanced cognitive control compared to their monolingual counterparts.

Introduction
The debate concerning the cognitive effects of bilingualism has generated considerable academic interest in recent decades. While early research suggested that bilingualism might hinder cognitive development, contemporary studies have reached markedly different conclusions. According to Bialystok (2017), bilingual individuals consistently outperform monolinguals on tasks requiring executive control and attention management.

Executive Function and Cognitive Control
Executive function refers to a set of cognitive processes that enable goal-directed behavior, including working memory, cognitive flexibility, and inhibitory control. Research indicates that bilingual speakers must constantly manage two competing linguistic systems, selecting the appropriate language while suppressing the other. This ongoing mental exercise, it is contended, strengthens executive function networks in the brain.

A seminal study by Costa et al. (2009) demonstrated that bilingual participants exhibited superior performance on tasks requiring attentional control. Specifically, they showed enhanced ability to filter irrelevant information and focus on relevant stimuli. Furthermore, neuroimaging studies have revealed structural differences in the brains of bilinguals, particularly in regions associated with executive control.

The Bilingual Advantage Across the Lifespan
It is worth noting that the cognitive benefits of bilingualism appear to persist throughout life. Research by Craik et al. (2010) suggests that bilingualism may delay the onset of dementia symptoms by an average of 4.5 years. This protective effect is attributed to the enhanced cognitive reserve developed through lifelong bilingual language processing.

In light of these findings, some educational policymakers have advocated for early bilingual education programs. However, it should be acknowledged that not all research supports the bilingual advantage hypothesis. Paap and Greenberg (2013) conducted a meta-analysis which failed to find consistent evidence for bilingual cognitive advantages, suggesting that publication bias may have inflated earlier positive results.

Critical Perspectives
From a methodological perspective, several issues complicate the study of bilingual cognition. First, defining bilingualism presents challenges - individuals vary considerably in their proficiency levels, age of acquisition, and frequency of use for each language. Second, comparing bilingual and monolingual populations is inherently problematic, as these groups often differ in socioeconomic status, educational background, and cultural factors.

Moreover, it can be argued that the specific tasks used in laboratory settings may not reflect real-world cognitive demands. The ecological validity of experimental paradigms remains a subject of debate within the field.

Conclusion
To summarize, while substantial evidence suggests that bilingualism confers cognitive advantages, particularly regarding executive function, the picture is more nuanced than initially thought. The implications of this research extend beyond academic interest, potentially informing educational policy and language learning approaches. Nevertheless, further investigation is required to fully understand the mechanisms underlying any bilingual cognitive benefits and to determine under what conditions these advantages manifest most robustly.

Word count: 468`,
      wordCount: 468,
      readingTime: 5,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'According to the article, what have contemporary studies concluded about bilingualism?',
          options: [
            'It hinders cognitive development',
            'It has no effect on cognition',
            'It enhances cognitive control',
            'It only affects language skills'
          ],
          correctAnswer: 'It enhances cognitive control',
          explanation: 'El artículo afirma que "contemporary studies have reached markedly different conclusions" y que los bilingües "demonstrate enhanced cognitive control".',
          points: 1
        },
        {
          id: 'q2',
          type: 'short-answer',
          question: 'According to Craik et al. (2010), how might bilingualism affect dementia?',
          correctAnswer: 'It may delay the onset of dementia symptoms by an average of 4.5 years',
          explanation: 'El texto menciona explícitamente: "bilingualism may delay the onset of dementia symptoms by an average of 4.5 years"',
          points: 2
        },
        {
          id: 'q3',
          type: 'true-false',
          question: 'True or False: All research unanimously supports the bilingual advantage hypothesis.',
          correctAnswer: 'False',
          explanation: 'El artículo menciona el estudio de Paap and Greenberg (2013) que "failed to find consistent evidence for bilingual cognitive advantages"',
          points: 1
        },
        {
          id: 'q4',
          type: 'fill-blank',
          question: 'List at least SIX academic phrases/structures used in this article (e.g., "According to...", "Research indicates...", etc.).',
          correctAnswer: 'According to, Research indicates, it is argued that, it is contended, Research by, It is worth noting that, suggests that, In light of, it should be acknowledged that, From a methodological perspective, it can be argued that, To summarize',
          explanation: 'El artículo usa extensivamente frases académicas formales típicas de papers de investigación.',
          points: 3
        },
        {
          id: 'q5',
          type: 'short-answer',
          question: 'What THREE methodological challenges does the article mention regarding the study of bilingual cognition?',
          correctAnswer: '1) Defining bilingualism (varying proficiency, age of acquisition, frequency), 2) Comparing bilingual and monolingual populations (different socioeconomic status, education, culture), 3) Ecological validity of laboratory tasks',
          explanation: 'La sección "Critical Perspectives" enumera estos tres desafíos metodológicos.',
          points: 3
        },
        {
          id: 'q6',
          type: 'multiple-choice',
          question: 'What writing style is demonstrated in this article?',
          options: [
            'Informal and personal',
            'Journalistic and entertaining',
            'Formal and academic',
            'Persuasive and emotional'
          ],
          correctAnswer: 'Formal and academic',
          explanation: 'El artículo usa estructuras formales, cita investigación, mantiene tono objetivo e impersonal - típico de escritura académica.',
          points: 1
        }
      ],
      vocabularyHelp: [
        { word: 'executive function', definition: 'cognitive processes that control goal-directed behavior' },
        { word: 'inhibitory control', definition: 'ability to suppress irrelevant information or responses' },
        { word: 'seminal', definition: 'highly influential; groundbreaking' },
        { word: 'cognitive reserve', definition: 'brain\'s resilience to damage through developed networks' },
        { word: 'meta-analysis', definition: 'statistical analysis combining results of multiple studies' },
        { word: 'ecological validity', definition: 'extent to which research results apply to real-world settings' },
        { word: 'manifest', definition: 'become apparent or visible; show itself' },
        { word: 'nuanced', definition: 'characterized by subtle distinctions; complex' }
      ]
    },

    // WRITING EXERCISE - Academic Essay
    {
      id: 'b2-m3-l2-writing-1',
      type: 'writing',
      prompt: `Write an academic essay (220-260 words) on ONE of the following topics:

TOPIC A: "The impact of social media on modern communication"
TOPIC B: "Should universities charge tuition fees or be free for all students?"
TOPIC C: "The role of technology in addressing climate change"

Your essay MUST include:
• Clear thesis statement in the introduction
• Academic vocabulary and formal register (avoid I/you, contractions, informal words)
• At least 3 sources cited using "According to..." or similar academic phrases (you may invent reasonable sources, e.g., "Smith (2020)" or "a study by Harvard University (2021)")
• Logical paragraph structure (Introduction, Body paragraphs with topic sentences, Conclusion)
• Passive voice and impersonal constructions where appropriate
• Advanced linking words for coherence
• Evidence and examples to support arguments

Remember: Academic writing is FORMAL, OBJECTIVE, and EVIDENCE-BASED.`,
      writingType: 'essay',
      minWords: 220,
      maxWords: 260,
      timeLimit: 40,
      rubric: {
        content: 25,
        organization: 25,
        grammar: 25,
        vocabulary: 25
      },
      tips: [
        'PLAN: Spend 5 minutes outlining your essay structure',
        'INTRODUCTION: Start with general context, narrow to specific topic, end with clear thesis',
        'BODY PARAGRAPHS: Each starts with topic sentence, followed by evidence/examples, ends with mini-conclusion',
        'Use academic phrases: "Research indicates...", "Evidence suggests...", "According to..."',
        'Cite sources even if fictional: "Johnson (2021) argues that..."',
        'NO contractions: don\'t → do not, can\'t → cannot',
        'NO personal pronouns: I/you/we → use passive or impersonal constructions',
        'NO informal vocabulary: a lot of → substantial/considerable, get → obtain/achieve',
        'Use sophisticated linking: Furthermore, Moreover, Nevertheless, Consequently, In light of',
        'CONCLUSION: Restate thesis, summarize key points, suggest implications or future research',
        'PROOFREAD: Check formality, grammar, vocabulary, citations, structure',
        'WORD COUNT: Aim for 240 words (middle of range)'
      ],
      exampleResponse: `The Impact of Social Media on Modern Communication

The advent of social media platforms has fundamentally transformed interpersonal communication in the 21st century. While these technologies have democratized information sharing and enabled global connectivity, concerns have been raised regarding their impact on the quality of human interaction. This essay examines both the beneficial and detrimental effects of social media on contemporary communication patterns.

Research indicates that social media facilitates unprecedented levels of global connection. According to Pew Research Center (2021), approximately 72% of adults utilize social networking sites, enabling individuals to maintain relationships across geographical boundaries. Furthermore, these platforms have been instrumental in social movements and political mobilization, as demonstrated by their role in the Arab Spring (Howard et al., 2011).

Nevertheless, it can be argued that social media has contributed to a decline in face-to-face interaction quality. A study by Primack et al. (2017) revealed a correlation between high social media usage and increased feelings of social isolation among young adults. Moreover, the brevity and informality of online communication may be diminishing individuals' capacity for sustained, meaningful dialogue.

From a psychological perspective, evidence suggests that excessive social media engagement can negatively impact mental well-being. Research by Hunt et al. (2018) demonstrated that limiting social media use to 30 minutes daily significantly reduced symptoms of depression and loneliness.

In summary, while social media has undeniably expanded communication possibilities, its effects on interaction quality remain ambiguous. Further investigation is required to fully understand the long-term implications of these technologies on human socialization. (243 words)`
    },

    // SPEAKING EXERCISE
    {
      id: 'b2-m3-l2-speaking-1',
      type: 'speaking',
      prompt: `Present a short academic presentation (2-3 minutes) on ONE of these topics:

TOPIC A: "The benefits and challenges of online education"
TOPIC B: "How technology is changing the job market"
TOPIC C: "The importance of learning foreign languages in a globalized world"
TOPIC D: "Sustainable development: balancing economy and environment"

Your presentation should:
• Be structured like an academic talk: Introduction, Main Points (2-3), Conclusion
• Use formal, academic language (avoid very informal expressions)
• Cite at least 2 "sources" (you may invent: "According to a study by...")
• Use passive voice and impersonal constructions
• Include academic vocabulary and linking phrases
• Present balanced arguments (both sides if controversial)
• Sound confident and authoritative

Imagine you're presenting to university professors and students.`,
      timeLimit: 180,
      evaluationCriteria: {
        pronunciation: true,
        fluency: true,
        grammar: true,
        vocabulary: true
      },
      hints: [
        'START: "Good morning/afternoon. Today I will discuss/examine..."',
        'INTRODUCTION: "This presentation will explore... / The aim of this talk is to..."',
        'CITE SOURCES: "According to research by..." / "Studies have shown that..." / "Evidence suggests..."',
        'STRUCTURE: "Firstly/First of all..." "Secondly..." "Finally..."',
        'ADD INFO: "Furthermore..." "Moreover..." "In addition..."',
        'CONTRAST: "However..." "On the other hand..." "Nevertheless..."',
        'CONCLUDE: "In conclusion..." "To summarize..." "It can be concluded that..."',
        'Sound academic but natural - don\'t be too stiff',
        'Use pauses for emphasis',
        'Maintain steady pace - not too fast',
        'End with: "Thank you for your attention. I\'d be happy to answer any questions."'
      ]
    }
  ]
};

console.log('✅ MODULE 3 LESSON 2 CREATED - Academic Writing');
console.log('Total exercises: ' + MODULE_3_LESSON_2.exercises.length);
