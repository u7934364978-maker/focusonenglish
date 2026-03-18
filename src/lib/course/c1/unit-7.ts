/**
 * C1 Unit 7 — Health and Mind
 * Module 7: Health and Mind
 * Grammar: Nominal clauses, advanced reporting verbs, concession
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = 'Health and Mind';

export const UNIT_7_EXERCISES: Exercise[] = [
  {
    id: 'c1-u7-g1', type: 'multiple-choice', level: 'C1', topic: 'nominal-clauses', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Nominal Clauses|Oraciones nominales]]', instructions: 'Choose the correct nominal clause structure.',
      questions: [{ question: '_______ chronic stress affects cognitive function is now well-established in neuroscience.', options: ['[[That|Que]]', '[[Which|Lo cual]]', '[[What|Lo que]]'], correctAnswer: 0, explanation: '"That + clause" as subject = nominal clause. "That chronic stress affects... is well-established."' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u7-g2', type: 'fill-blank', level: 'C1', topic: 'reporting-verbs', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Advanced Reporting Verbs|Verbos de reporte avanzados]]', instructions: 'Complete with the correct reporting verb pattern.',
      questions: [{ question: 'The researchers _______ that the new treatment had significantly reduced symptoms in 80% of patients.', options: ['[[demonstrated|demostraron]]', '[[said|dijeron]]', '[[told|contaron]]'], correctAnswer: 'demonstrated', acceptableAnswers: ['demonstrated', 'found', 'concluded', 'reported', 'established'], explanation: '"Demonstrated/found/concluded + that" are appropriate academic reporting verbs.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u7-g3', type: 'multiple-choice', level: 'C1', topic: 'concession', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Concession Structures|Estructuras de concesión]]', instructions: 'Choose the most sophisticated concession structure.',
      questions: [{ question: 'Which sentence uses the most appropriate concession at C1 level?', options: ["[[Although mental health is important, it's often ignored.|Aunque la salud mental es importante, a menudo se ignora.]]", '[[Albeit a significant step forward, the new mental health legislation falls short of addressing systemic underfunding.|Aunque es un paso adelante significativo, la nueva legislación de salud mental no aborda la insuficiencia de financiación sistémica.]]', '[[Mental health is important but people ignore it.|La salud mental es importante pero la gente la ignora.]]'], correctAnswer: 1, explanation: '"Albeit + adjective phrase" = sophisticated concession structure at C1+.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u7-g4', type: 'fill-blank', level: 'C1', topic: 'passive-reporting', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Passive with Reporting Verbs|Pasiva con verbos de reporte]]', instructions: 'Complete with the correct passive reporting structure.',
      questions: [{ question: 'The new vaccine _______ _______ to be highly effective in preliminary trials.', options: ['[[is believed|se cree que es]]', '[[believes|cree que es]]', '[[is believing|está creyendo que es]]'], correctAnswer: 'is believed', acceptableAnswers: ['is believed', 'is reported', 'is thought', 'is claimed'], explanation: '"It is believed/reported/thought + to be" = impersonal passive reporting for academic distancing.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u7-g5', type: 'multiple-choice', level: 'C1', topic: 'nominal-clauses', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Nominal Clauses|Oraciones nominales]]', instructions: 'Choose the correct form.',
      questions: [{ question: '_______ this treatment remains unaffordable for most patients is a serious indictment of the healthcare system.', options: ['[[That|Que]]', '[[How|Cómo]]', '[[Whether|Si]]'], correctAnswer: 0, explanation: '"That + clause" as subject: "That this treatment is unaffordable is a serious indictment..."' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u7-v1', type: 'multiple-choice', level: 'C1', topic: 'health-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Health and Mind|Salud y mente]]', instructions: 'Choose the correct word.',
      questions: [{ question: 'The study found that _______ stress — ongoing pressure over months or years — significantly increases the risk of cardiovascular disease.', options: ['[[chronic|crónico]]', '[[acute|agudo]]', '[[mild|leve]]'], correctAnswer: 0, explanation: 'Chronic = persisting for a long time; contrasts with acute (sudden/severe but short).' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u7-v2', type: 'fill-blank', level: 'C1', topic: 'health-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Health and Mind|Salud y mente]]', instructions: 'Complete the sentence.',
      questions: [{ question: 'The doctor stressed the importance of an _______ approach — treating the whole person, not just the symptoms.', options: ['[[holistic|holístico]]', '[[empirical|empírico]]', '[[clinical|clínico]]'], correctAnswer: 'holistic', acceptableAnswers: ['holistic'], explanation: 'Holistic = treating the whole person (body, mind, lifestyle) rather than isolated symptoms.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u7-v3', type: 'multiple-choice', level: 'C1', topic: 'health-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Health and Mind|Salud y mente]]', instructions: 'Choose the best word.',
      questions: [{ question: 'The mental health _______ surrounding depression continues to prevent many people from seeking help.', options: ['[[stigma|estigma]]', '[[diagnosis|diagnóstico]]', '[[prognosis|pronóstico]]'], correctAnswer: 0, explanation: 'Stigma = a mark of shame associated with a particular quality or circumstance.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u7-v4', type: 'fill-blank', level: 'C1', topic: 'health-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Health and Mind|Salud y mente]]', instructions: 'Complete the sentence.',
      questions: [{ question: 'All treatments were _______ — based on robust clinical trial data rather than anecdotal evidence.', options: ['[[evidence-based|basados en evidencia]]', '[[theoretical|teóricos]]', '[[holistic|holísticos]]'], correctAnswer: 'evidence-based', acceptableAnswers: ['evidence-based'], explanation: 'Evidence-based = based on careful analysis of data and research.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u7-v5', type: 'multiple-choice', level: 'C1', topic: 'health-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Health and Mind|Salud y mente]]', instructions: 'Choose the correct word.',
      questions: [{ question: 'The _______ of the disease refers to the factors and processes that cause it — understanding these is key to developing effective treatments.', options: ['[[aetiology|etiología]]', '[[prognosis|pronóstico]]', '[[morbidity|morbilidad]]'], correctAnswer: 0, explanation: 'Aetiology = the cause or set of causes of a disease or condition.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u7-r1', type: 'reading-comprehension', level: 'C1', topic: 'health-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[Mental Health|Salud mental]]', instructions: 'Read and answer.',
      questions: [{ question: 'Text: "It is widely held that mental health conditions are primarily neurobiological in origin; however, a growing body of research suggests that social determinants — poverty, inequality, isolation — play an equally significant role." What does the text suggest about the causes of mental health conditions?', options: ['[[they are exclusively neurobiological|son exclusivamente neurobiológicos]]', '[[both biological and social factors contribute|tanto los factores biológicos como los sociales contribuyen]]', '[[social factors are more important than biological ones|los factores sociales son más importantes que los biológicos]]'], correctAnswer: 1, explanation: '"Equally significant role" = the text presents both biological and social factors as important.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u7-r2', type: 'multiple-choice', level: 'C1', topic: 'health-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[Cognitive Science|Ciencias cognitivas]]', instructions: 'Choose the correct inference.',
      questions: [{ question: 'Text: "The brain\'s neuroplasticity — its ability to reorganise and form new connections throughout life — challenges longstanding assumptions about fixed intelligence and the limits of recovery from injury." What does this imply?', options: ['[[intelligence and recovery are fixed and unchangeable|la inteligencia y la recuperación son fijas e inmutables]]', '[[the brain can adapt and change throughout life|el cerebro puede adaptarse y cambiar a lo largo de la vida]]', '[[neuroplasticity is a recently disproven theory|la neuroplasticidad es una teoría recientemente refutada]]'], correctAnswer: 1, explanation: '"Reorganise and form new connections throughout life" = the brain is not fixed; it can change.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u7-l1', type: 'listening-comprehension', level: 'C1', topic: 'health-listening', difficulty: 'hard',
    content: { title: '[[Listening|Comprensión auditiva]]: [[Healthcare Systems|Sistemas sanitarios]]', instructions: 'Listen and choose the correct answer.',
      questions: [{ question: 'A health policy expert says: "Notwithstanding recent investment, it is contended by many in the field that mental health services remain chronically underfunded relative to physical healthcare." What is the speaker\'s main point?', options: ['[[mental health funding is adequate|la financiación de salud mental es adecuada]]', '[[despite some investment, mental health services are still insufficiently funded|a pesar de cierta inversión, los servicios de salud mental siguen siendo insuficientemente financiados]]', '[[physical healthcare receives too much funding|la atención de salud física recibe demasiada financiación]]'], correctAnswer: 1, explanation: '"Notwithstanding" (despite) + "chronically underfunded" = concession followed by critical assessment.' }] },
    topicName: 'Listening',
  },
  {
    id: 'c1-u7-w1', type: 'writing', level: 'C1', topic: 'discursive-essay', difficulty: 'hard',
    content: { title: '[[Writing|Escritura]]: [[Discursive Essay|Ensayo discursivo]]', instructions: 'Choose the best concession sentence for a discursive essay on mental health policy.',
      questions: [{ question: 'Which sentence best introduces a concession followed by a counterargument?', options: ['[[Mental health is important but governments don\'t invest enough.|La salud mental es importante pero los gobiernos no invierten suficiente.]]', '[[Whilst it is undeniable that recent years have seen increased public awareness of mental health issues, it would be premature to conclude that stigma has been effectively dismantled.|Si bien es innegable que los últimos años han visto un mayor concienciación pública sobre la salud mental, sería prematuro concluir que el estigma ha sido efectivamente desmantelado.]]', '[[People talk about mental health more now but it\'s still a problem.|La gente habla más sobre salud mental ahora pero todavía es un problema.]]'], correctAnswer: 1, explanation: '"Whilst it is undeniable that... it would be premature to conclude that..." = C1 concession + counterargument structure.' }] },
    topicName: 'Writing',
  },
  {
    id: 'c1-u7-s1', type: 'multiple-choice', level: 'C1', topic: 'speaking-health', difficulty: 'hard',
    content: { title: '[[Speaking|Expresión oral]]: [[Discussing Health Issues|Debatir sobre salud]]', instructions: 'Choose the most sophisticated way to discuss a health topic.',
      questions: [{ question: 'How would you best express your view on the relationship between lifestyle and mental health?', options: ['[[Exercise and diet affect mental health.|El ejercicio y la dieta afectan la salud mental.]]', '[[There is compelling evidence to suggest that lifestyle factors — including physical activity, nutrition, and sleep quality — exert a considerable influence on mental wellbeing, albeit as part of a far more complex biopsychosocial picture.|Hay evidencia convincente que sugiere que los factores del estilo de vida ejercen una influencia considerable en el bienestar mental, aunque como parte de un cuadro biopsicosocial mucho más complejo.]]', '[[Being healthy helps your mind.|Estar sano ayuda a tu mente.]]'], correctAnswer: 1, explanation: '"There is compelling evidence", "albeit as part of", "biopsychosocial" = C1 academic register with hedging and precision.' }] },
    topicName: 'Speaking',
  },
];
