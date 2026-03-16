/**
 * Unidad 56 B2 — Lección 3: Comprensión lectora (Digital Rights & Online Ethics)
 * 13 preguntas (B2: texto sobre derechos digitales, oraciones de relativo)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Data that companies collect|Los datos que las empresas recogen]] [[should be protected|deberían estar protegidos]]. [[The platform, which was launched last year|La plataforma, que fue lanzada el año pasado]], [[has millions of users|tiene millones de usuarios]]. [[Users whose consent was not obtained|Los usuarios cuyo consentimiento no fue obtenido]] [[can file complaints|pueden presentar quejas]]. [[The reason why we need encryption|La razón por la que necesitamos encriptación]] [[is clear|es clara]]. [[The website where users share their data|La web donde los usuarios comparten sus datos]] [[must be secure|debe ser segura]]. [[Anyone who breaches the rules|Cualquiera que infrinja las reglas]] [[will be banned|será baneado]]. [[Cybersecurity, on which we depend|La ciberseguridad, de la que dependemos]], [[is essential|es esencial]].`;

const INSTRUCTIONS = 'Lee el texto sobre derechos digitales. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[should be protected|debería estar protegido]]?', options: ['[[Data that companies collect|Los datos que las empresas recogen]]', '[[The platform|La plataforma]]', '[[Users|Los usuarios]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Data that companies collect should be protected]]".' },
  { question: '[[When|Cuándo]] [[was the platform launched|fue lanzada la plataforma]]?', options: ['[[Last year|El año pasado]]', '[[Last month|El mes pasado]]', '[[Years ago|Hace años]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[The platform, which was launched last year]]".' },
  { question: '[[What|Qué]] [[can users do|pueden hacer los usuarios]] [[if consent was not obtained|si el consentimiento no fue obtenido]]?', options: ['[[File complaints|Presentar quejas]]', '[[Share data|Compartir datos]]', '[[Use the platform|Usar la plataforma]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Users whose consent was not obtained can file complaints]]".' },
  { question: '[[What|Qué]] [[is the reason|es la razón]] [[why we need encryption|por la que necesitamos encriptación]]?', options: ['[[It is clear (implied: to protect data)|Es clara (implícito: proteger datos)]]', '[[We do not need it|No la necesitamos]]', '[[Users want it|Los usuarios la quieren]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[The reason why we need encryption is clear]]".' },
  { question: '[[What|Qué]] [[must the website be|debe ser la web]]?', options: ['[[Secure|Segura]]', '[[Popular|Popular]]', '[[Free|Gratuita]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[The website where users share their data must be secure]]".' },
  { question: '[[What|Qué]] [[happens to anyone who breaches the rules|pasa con cualquiera que infrinja las reglas]]?', options: ['[[They will be banned|Será baneado]]', '[[They get a warning|Recibe una advertencia]]', '[[Nothing|Nada]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[Anyone who breaches the rules will be banned]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Digital rights, privacy, consent and relative clauses|Derechos digitales, privacidad, consentimiento y oraciones de relativo]]', '[[Platforms are bad|Las plataformas son malas]]', '[[Encryption is optional|La encriptación es opcional]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[covers digital rights using relative clauses|cubre derechos digitales usando oraciones de relativo]].' },
  { question: '[[Which pronoun|Qué pronombre]] [[is used in "Data that companies collect"|se usa en "Data that companies collect"]]?', options: ['[[That (defining)|That (especificativa)]]', '[[Which (non-defining)|Which (no especificativa)]]', '[[Who|Who]]'], correctAnswer: 0, explanation: '[[That for defining relative clause|That para oración especificativa]].' },
  { question: '[[Which pronoun|Qué pronombre]] [[is used in "The platform, which was launched"|se usa en "The platform, which was launched"]]?', options: ['[[Which (non-defining)|Which (no especificativa)]]', '[[That|That]]', '[[Who|Who]]'], correctAnswer: 0, explanation: '[[Which for non-defining (with comma)|Which para no especificativa]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[data|datos]], [[consent|consentimiento]], [[encryption|encriptación]], [[cybersecurity|ciberseguridad]]', '[[education|educación]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[digital vocabulary|vocabulario digital]].' },
  { question: '[[The platform|La plataforma]] ____ ____ ____ [[last year|el año pasado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 0, explanation: '[[True|Verdadero]]. [[The text says it was launched last year|El texto dice que fue lanzada el año pasado]].' },
  { question: '[[Users|Los usuarios]] ____ ____ ____ ____ [[can file complaints|pueden presentar quejas]].', options: ['[[whose consent was not obtained|cuyo consentimiento no fue obtenido]]', '[[who consent|que consienten]]'], correctAnswer: 0, explanation: '[[Whose for possession|Whose para posesión]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about digital rights|sobre los derechos digitales]]?', options: ['[[They involve consent, security and accountability|Implican consentimiento, seguridad y responsabilidad]]', '[[They are not important|No son importantes]]', '[[Platforms always protect users|Las plataformas siempre protegen a los usuarios]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[emphasises consent and security|enfatiza consentimiento y seguridad]].' },
];

export const UNIT_56_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u56-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'technology-society',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
