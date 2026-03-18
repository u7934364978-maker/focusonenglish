/**
 * C1 Unit 9 — Media and Information
 * Module 9: Media and Information
 * Grammar: Distancing language, impersonal constructions, advanced cleft sentences
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = 'Media and Information';

export const UNIT_9_EXERCISES: Exercise[] = [
  {
    id: 'c1-u9-g1', type: 'multiple-choice', level: 'C1', topic: 'distancing-language', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Distancing Language|Lenguaje de distanciamiento]]', instructions: 'Choose the best distancing expression.',
      questions: [{ question: 'The story _______ been fabricated by a partisan media outlet.', options: ['[[is alleged to have|se alega que ha sido]]', '[[is said having|se dice teniendo]]', '[[allegedly has|supuestamente ha]]'], correctAnswer: 0, explanation: '"Is alleged to have + pp" = impersonal passive distancing for unverified claims.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u9-g2', type: 'fill-blank', level: 'C1', topic: 'impersonal-constructions', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Impersonal Constructions|Construcciones impersonales]]', instructions: 'Complete with the correct impersonal construction.',
      questions: [{ question: '_______ _______ _______ be a direct correlation between social media use and anxiety levels in teenagers.', options: ['[[There is thought to|Se cree que hay]]', '[[It is thinking there|Se piensa que hay]]', '[[There are believed|Se cree que son]]'], correctAnswer: 'There is thought to', acceptableAnswers: ['There is thought to', 'There is believed to', 'There is said to'], explanation: '"There is thought/believed/said to be..." = impersonal construction for unverified claims.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u9-g3', type: 'multiple-choice', level: 'C1', topic: 'advanced-cleft', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Advanced Cleft Sentences|Oraciones escindidas avanzadas]]', instructions: 'Choose the best cleft sentence.',
      questions: [{ question: 'Which cleft sentence most effectively emphasises the danger of misinformation?', options: ['[[What is particularly troubling is the speed at which false information spreads on social media.|Lo que resulta especialmente preocupante es la velocidad a la que se difunde información falsa en las redes sociales.]]', '[[False information on social media is particularly troubling because it spreads fast.|La información falsa en las redes sociales es especialmente preocupante porque se difunde rápidamente.]]', '[[Social media makes false information spread very fast and this is troubling.|Las redes sociales hacen que la información falsa se difunda muy rápido y esto es preocupante.]]'], correctAnswer: 0, explanation: '"What is particularly troubling is..." = cleft sentence (what-clause) that foregrounds the key concern.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u9-g4', type: 'fill-blank', level: 'C1', topic: 'comparing-contrasting', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Comparing and Contrasting|Comparar y contrastar]]', instructions: 'Complete with the best comparing structure.',
      questions: [{ question: '_______ _______ print journalism, digital media reaches audiences far more rapidly — though often with less editorial oversight.', options: ['[[Compared to|En comparación con]]', '[[Instead of|En lugar de]]', '[[As well as|Además de]]'], correctAnswer: 'Compared to', acceptableAnswers: ['Compared to', 'In contrast to', 'Unlike', 'Relative to'], explanation: '"Compared to" = standard formal comparative structure in academic writing.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u9-g5', type: 'multiple-choice', level: 'C1', topic: 'distancing-language', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Distancing Language|Lenguaje de distanciamiento]]', instructions: 'Choose the most appropriate distancing word.',
      questions: [{ question: 'The leaked documents _______ show evidence of large-scale financial fraud.', options: ['[[purportedly|supuestamente]]', '[[definitely|definitivamente]]', '[[clearly|claramente]]'], correctAnswer: 0, explanation: '"Purportedly" = distancing adverb meaning "supposedly" — used when claims are unverified.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u9-v1', type: 'multiple-choice', level: 'C1', topic: 'media-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Media and Information|Medios e información]]', instructions: 'Choose the correct word.',
      questions: [{ question: 'The deliberate spread of false information to deceive the public is known as _______, not to be confused with misinformation, which is spread without malicious intent.', options: ['[[disinformation|desinformación]]', '[[propaganda|propaganda]]', '[[censorship|censura]]'], correctAnswer: 0, explanation: 'Disinformation = deliberately false information; misinformation = false but spread without malicious intent.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u9-v2', type: 'fill-blank', level: 'C1', topic: 'media-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Media and Information|Medios e información]]', instructions: 'Complete the sentence.',
      questions: [{ question: 'Social media algorithms create _______ _______ where users are only exposed to content that reinforces their existing beliefs.', options: ['[[echo chambers|cámaras de eco]]', '[[filter bubbles|burbujas de filtro]]', '[[news feeds|feeds de noticias]]'], correctAnswer: 'echo chambers', acceptableAnswers: ['echo chambers', 'filter bubbles'], explanation: 'Echo chambers / filter bubbles = environments where a person only encounters opinions matching their own.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u9-v3', type: 'multiple-choice', level: 'C1', topic: 'media-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Media and Information|Medios e información]]', instructions: 'Choose the best word.',
      questions: [{ question: 'An _______ press — free from government interference — is widely regarded as a cornerstone of democracy.', options: ['[[impartial|imparcial]]', '[[engaged|comprometida]]', '[[embedded|integrada]]'], correctAnswer: 0, explanation: 'Impartial = treating all rivals equally; not biased. Essential quality of a free press.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u9-v4', type: 'fill-blank', level: 'C1', topic: 'media-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Media and Information|Medios e información]]', instructions: 'Complete the sentence.',
      questions: [{ question: 'Developing strong _______ _______ skills — the ability to critically evaluate sources and identify bias — is increasingly essential in the digital age.', options: ['[[media literacy|alfabetización mediática]]', '[[digital marketing|marketing digital]]', '[[content creation|creación de contenido]]'], correctAnswer: 'media literacy', acceptableAnswers: ['media literacy'], explanation: 'Media literacy = the ability to access, analyse and evaluate media content critically.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u9-v5', type: 'multiple-choice', level: 'C1', topic: 'media-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Media and Information|Medios e información]]', instructions: 'Choose the correct word.',
      questions: [{ question: 'The newspaper\'s reputation rested on its commitment to _______ _______ — its journalists were free to report the facts without editorial interference.', options: ['[[editorial independence|independencia editorial]]', '[[media literacy|alfabetización mediática]]', '[[click-through rates|tasas de clics]]'], correctAnswer: 0, explanation: 'Editorial independence = the freedom of journalists to report without external pressure or interference.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u9-r1', type: 'reading-comprehension', level: 'C1', topic: 'media-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[Fake News|Noticias falsas]]', instructions: 'Read and answer.',
      questions: [{ question: 'Text: "What is particularly troubling is not merely the existence of disinformation but the speed at which it propagates — reaching millions before any correction can be issued. Allegedly fabricated stories have been shown to spread six times faster than factual ones on major platforms." What is the author\'s main concern?', options: ['[[the amount of false news created|la cantidad de noticias falsas creadas]]', '[[the speed of disinformation spread relative to corrections|la velocidad de difusión de la desinformación en relación con las correcciones]]', '[[the difficulty of creating corrections|la dificultad de crear correcciones]]'], correctAnswer: 1, explanation: '"Reaching millions before any correction" and the speed statistic both focus on the spread speed problem.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u9-r2', type: 'multiple-choice', level: 'C1', topic: 'media-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[Freedom of Expression|Libertad de expresión]]', instructions: 'Choose the correct inference.',
      questions: [{ question: 'Text: "There is reason to believe that unchecked freedom of expression online — however desirable in principle — may, in practice, create conditions in which hate speech and disinformation flourish unchallenged." What does the author imply?', options: ['[[absolute freedom of expression is always beneficial|la libertad de expresión absoluta siempre es beneficiosa]]', '[[some regulation of online speech may be necessary despite the value of free expression|alguna regulación del discurso en línea puede ser necesaria a pesar del valor de la libre expresión]]', '[[freedom of expression should be abolished online|la libertad de expresión debería abolirse en línea]]'], correctAnswer: 1, explanation: '"However desirable in principle" concedes the value of free speech while "in practice" signals real-world complications.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u9-l1', type: 'listening-comprehension', level: 'C1', topic: 'media-listening', difficulty: 'hard',
    content: { title: '[[Listening|Comprensión auditiva]]: [[Journalism Ethics|Ética periodística]]', instructions: 'Listen and choose the correct answer.',
      questions: [{ question: 'A journalist says: "Rarely has the press faced such intense scrutiny over its methods. What is particularly significant is not merely the question of what journalists report, but how — and in whose interests — they frame their stories." What is the speaker\'s focus?', options: ['[[the content of news stories|el contenido de las noticias]]', '[[the framing and perspective behind news reporting|el encuadre y la perspectiva detrás de las noticias]]', '[[the financial pressures on journalism|las presiones financieras sobre el periodismo]]'], correctAnswer: 1, explanation: '"How they frame their stories" = focus on narrative framing and journalistic perspective.' }] },
    topicName: 'Listening',
  },
  {
    id: 'c1-u9-w1', type: 'writing', level: 'C1', topic: 'opinion-article', difficulty: 'hard',
    content: { title: '[[Writing|Escritura]]: [[Opinion Article — Media|Artículo de opinión — Medios]]', instructions: 'Choose the best opening for an opinion article on social media and democracy.',
      questions: [{ question: 'Which sentence best opens an opinion article on the threat of social media to democracy?', options: ['[[Social media has transformed the political landscape in ways that neither its architects nor its early adopters could have anticipated, simultaneously creating new spaces for civic engagement and providing fertile ground for the proliferation of disinformation, ideological polarisation and well-funded authoritarian influence operations.|Las redes sociales han transformado el panorama político de maneras que ni sus arquitectos ni sus primeros usuarios podían haber anticipado, creando simultáneamente nuevos espacios para el compromiso cívico y proporcionando terreno fértil para la proliferación de la desinformación y la polarización ideológica.]]', '[[Rarely has a technology spread so rapidly — and been so little understood — as social media, whose capacity to both unite and fracture democratic societies remains deeply contested.|Rara vez una tecnología se ha extendido tan rápidamente — y ha sido tan poco comprendida — como las redes sociales, cuya capacidad para unir y fracturar las sociedades democráticas sigue siendo profundamente controvertida.]]', '[[The relationship between social media and democratic governance has emerged as one of the defining political questions of our digital age. Platforms originally designed for social connection have become contested arenas in which influence operations, algorithmic amplification of extremism and the erosion of shared epistemic foundations play out in real time.|La relación entre las redes sociales y la gobernanza democrática ha emergido como una de las preguntas políticas definitorias de nuestra era digital. Las plataformas diseñadas originalmente para la conexión social se han convertido en arenas disputadas en las que se desarrollan operaciones de influencia y la erosión de los fundamentos epistémicos compartidos.]]'], correctAnswer: 1, explanation: '"Rarely has..." = inversion for emphasis; "deeply contested" = academic hedging; sophisticated sentence structure.' }] },
    topicName: 'Writing',
  },
  {
    id: 'c1-u9-s1', type: 'multiple-choice', level: 'C1', topic: 'speaking-media', difficulty: 'hard',
    content: { title: '[[Speaking|Expresión oral]]: [[Debating Media Issues|Debatir sobre los medios]]', instructions: 'Choose the most appropriate C1 expression to question someone\'s source.',
      questions: [{ question: 'Your debate partner cites a statistic. You want to question the reliability of the source. Which is most appropriate?', options: ['[[Before we draw any firm conclusions from that figure, it might be worth pausing to examine the source in greater detail. Could you clarify whether this study was peer-reviewed, and whether the sample was sufficiently representative to support such a broad generalisation about the population as a whole?|Antes de sacar conclusiones firmes de esa cifra, podría valer la pena pausar para examinar la fuente con mayor detalle. ¿Podría aclarar si este estudio fue revisado por pares y si la muestra era suficientemente representativa para apoyar tan amplia generalización?]]', '[[I would be inclined to question the rigour of that particular study — could you speak to the methodology used?|Me inclinaría a cuestionar el rigor de ese estudio en particular; ¿podría hablar sobre la metodología empleada?]]', '[[With respect, I think we should treat that statistic with a degree of caution, as the reliability of secondary sources in this field can vary considerably depending on the context. Do you happen to know whether the findings have been independently replicated by other research groups working in comparable settings?|Con respeto, creo que deberíamos tratar esa estadística con cierta cautela, ya que la fiabilidad de las fuentes secundarias en este campo puede variar considerablemente. ¿Sabe usted si los hallazgos han sido replicados de forma independiente por otros grupos de investigación?]]'], correctAnswer: 1, explanation: '"I would be inclined to question..." = tentative challenge; "could you speak to the methodology" = sophisticated request for evidence.' }] },
    topicName: 'Speaking',
  },
];
