/**
 * Unit 1 — Gestión hotelera / Hotel Management (B2)
 * Vocabulary lesson: KPI, occupancy rate, revenue per room, brand standards,
 * mystery guest, audit, compliance, benchmark, performance review, online review
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'rec-b2-u1-l2-v1',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: '[[Hotel Management Vocabulary|Vocabulario de Gestión Hotelera]] — [[Word in Context|Palabra en Contexto]]',
      instructions: '[[Choose|Elige]] [[the word|la palabra]] [[that best completes|que mejor completa]] [[each sentence|cada frase]]. [[All sentences|Todas las frases]] [[are from real hotel situations|son de situaciones reales de hotel]].',
      questions: [
        {
          question: 'The general manager checked the ___ every morning: occupancy was at 87% and revenue per room had increased by 12%.',
          options: ['KPIs', 'benchmarks', 'audits', 'folios'],
          correctAnswer: 0,
          explanation: '[[KPIs|Indicadores Clave de Rendimiento]] (Key Performance Indicators) [[are measurable values|son valores medibles]] [[that show how well|que muestran qué tan bien]] [[a business is achieving its goals|un negocio está logrando sus objetivos]]. [[Occupancy and revenue|La ocupación y los ingresos]] [[are typical KPIs|son KPIs típicos]] [[in hotel management|en la gestión hotelera]].',
        },
        {
          question: 'Our ___ last night was only 62%, which means more than a third of our rooms were empty.',
          options: ['occupancy rate', 'performance review', 'brand standard', 'compliance'],
          correctAnswer: 0,
          explanation: '[[Occupancy rate|Tasa de ocupación]] [[is the percentage|es el porcentaje]] [[of available rooms|de habitaciones disponibles]] [[that are occupied|que están ocupadas]] [[during a given period|durante un período determinado]]. [[62% occupancy|62% de ocupación]] [[means|significa]] [[62 out of every 100 rooms|62 de cada 100 habitaciones]] [[are in use|están en uso]].',
        },
        {
          question: 'A ___ visited the hotel last week, posing as an ordinary guest to evaluate our service without warning.',
          options: ['mystery guest', 'duty manager', 'brand auditor', 'compliance officer'],
          correctAnswer: 0,
          explanation: '[[A mystery guest|Un cliente misterioso]] [[is a trained evaluator|es un evaluador formado]] [[who visits a hotel anonymously|que visita un hotel de forma anónima]] [[to assess service quality|para evaluar la calidad del servicio]]. [[Hotels use this method|Los hoteles utilizan este método]] [[to identify real service gaps|para identificar deficiencias reales en el servicio]].',
        },
        {
          question: 'The chain\'s ___ require that all front desk staff greet every guest within 30 seconds of arrival.',
          options: ['brand standards', 'KPIs', 'benchmarks', 'audits'],
          correctAnswer: 0,
          explanation: '[[Brand standards|Estándares de marca]] [[are the specific rules|son las normas específicas]] [[set by a hotel chain|establecidas por una cadena hotelera]] [[to ensure consistent service quality|para garantizar una calidad de servicio consistente]] [[across all properties|en todas sus propiedades]].',
        },
        {
          question: 'We compared our ___ per room with the industry average to see if our pricing was competitive.',
          options: ['revenue', 'compliance', 'audit', 'benchmark'],
          correctAnswer: 0,
          explanation: '[[Revenue per room|Ingresos por habitación]] (also called RevPAR) [[is a key financial metric|es un indicador financiero clave]] [[that combines|que combina]] [[occupancy rate|tasa de ocupación]] [[and average room rate|y tarifa media por habitación]]. [[It helps managers|Ayuda a los directivos]] [[assess pricing effectiveness|evaluar la eficacia de los precios]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'rec-b2-u1-l2-v2',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: '[[Hotel Management Vocabulary|Vocabulario de Gestión Hotelera]] — [[Match the Definition|Relaciona con la Definición]]',
      instructions: '[[Read each definition|Lee cada definición]] [[and choose|y elige]] [[the correct vocabulary word|la palabra del vocabulario correcta]].',
      questions: [
        {
          question: 'A formal examination of a hotel\'s processes, records and practices to check that everything meets required standards.',
          options: ['audit', 'benchmark', 'performance review', 'compliance'],
          correctAnswer: 0,
          explanation: '[[An audit|Una auditoría]] [[is a systematic review|es una revisión sistemática]] [[of a hotel\'s operations|de las operaciones de un hotel]]. [[It can be internal|Puede ser interna]] (done by staff) [[or external|o externa]] (done by an outside body) [[and checks|y verifica]] [[whether procedures are being followed correctly|si los procedimientos se siguen correctamente]].',
        },
        {
          question: 'A standard point of reference used to measure and compare hotel performance against the industry or competitors.',
          options: ['benchmark', 'KPI', 'online review', 'audit'],
          correctAnswer: 0,
          explanation: '[[A benchmark|Un punto de referencia]] [[is a standard or reference point|es un estándar o punto de referencia]] [[against which|frente al cual]] [[a hotel\'s performance|el rendimiento de un hotel]] [[can be measured|puede medirse]]. [[For example|Por ejemplo]], [[industry average occupancy|la ocupación media del sector]] [[or a competitor\'s RevPAR|o el RevPAR de la competencia]] [[can serve as benchmarks|pueden servir como benchmarks]].',
        },
        {
          question: 'The act of following all rules, regulations and standards required by law or a hotel brand.',
          options: ['compliance', 'audit', 'benchmark', 'performance review'],
          correctAnswer: 0,
          explanation: '[[Compliance|Cumplimiento]] [[means following|significa seguir]] [[all applicable laws, regulations|todas las leyes y normativas aplicables]], [[health and safety standards|normas de salud y seguridad]], [[and brand requirements|y requisitos de la marca]]. [[Non-compliance|El incumplimiento]] [[can lead to fines|puede dar lugar a multas]], [[loss of operating licence|pérdida de licencia de operación]] [[or damage to reputation|o daño a la reputación]].',
        },
        {
          question: 'A regular meeting or evaluation session where an employee\'s work, progress and goals are discussed with their manager.',
          options: ['performance review', 'audit', 'briefing', 'compliance check'],
          correctAnswer: 0,
          explanation: '[[A performance review|Una evaluación de rendimiento]] (also called an appraisal) [[is a formal assessment|es una evaluación formal]] [[of an employee\'s work|del trabajo de un empleado]]. [[In hotels|En los hoteles]], [[receptionists typically have|los recepcionistas suelen tener]] [[a performance review|una evaluación de rendimiento]] [[every 6 or 12 months|cada 6 o 12 meses]].',
        },
        {
          question: 'A guest\'s written opinion about a hotel stay, usually posted on websites like TripAdvisor or Booking.com.',
          options: ['online review', 'mystery guest report', 'audit finding', 'brand standard'],
          correctAnswer: 0,
          explanation: '[[An online review|Una reseña online]] [[is public feedback|es opinión pública]] [[posted by guests|publicada por huéspedes]] [[on review platforms|en plataformas de reseñas]]. [[Online reviews|Las reseñas online]] [[directly affect|afectan directamente]] [[a hotel\'s reputation|la reputación de un hotel]] [[and future bookings|y las reservas futuras]]. [[Hotels monitor and respond to them|Los hoteles las monitorizan y responden]] [[as part of their reputation management|como parte de su gestión de la reputación]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'rec-b2-u1-l2-v3',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: '[[Hotel Management Vocabulary|Vocabulario de Gestión Hotelera]] — [[Complete the Sentence|Completa la Frase]]',
      instructions: '[[Fill in the blank|Rellena el espacio en blanco]] [[with the correct word|con la palabra correcta]] [[from this unit\'s vocabulary|del vocabulario de esta unidad]]: KPI, occupancy rate, revenue per room, brand standards, mystery guest, audit, compliance, benchmark, performance review, online review.',
      questions: [
        {
          question: 'The hotel\'s annual ___ revealed several issues with food safety procedures in the kitchen.',
          correctAnswer: 'audit',
          explanation: '[[An audit|Una auditoría]] [[checks whether|comprueba si]] [[procedures are correctly followed|los procedimientos se siguen correctamente]]. [[Food safety audits|Las auditorías de seguridad alimentaria]] [[are common in hotels|son habituales en los hoteles]] [[and are often required by law|y a menudo son exigidas por ley]].',
        },
        {
          question: 'Our ___ for this quarter is 78%, compared to 72% in the same period last year.',
          correctAnswer: 'occupancy rate',
          explanation: '[[The occupancy rate|La tasa de ocupación]] [[is usually expressed as a percentage|se expresa habitualmente como porcentaje]] [[and compared|y se compara]] [[quarter on quarter|trimestre a trimestre]] [[or year on year|o año a año]] [[to identify trends|para identificar tendencias]].',
        },
        {
          question: 'Each receptionist has a ___ with the front office manager every six months to discuss targets and progress.',
          correctAnswer: 'performance review',
          explanation: '[[Performance reviews|Las evaluaciones de rendimiento]] [[help managers and employees|ayudan a directivos y empleados]] [[to align on goals|a alinear objetivos]] [[and address development needs|y abordar necesidades de desarrollo]]. [[In hospitality|En hostelería]], [[they often include|a menudo incluyen]] [[customer satisfaction scores|puntuaciones de satisfacción del cliente]] [[and KPI results|y resultados de KPIs]].',
        },
        {
          question: 'We use the industry\'s average RevPAR as our ___ to measure whether we are pricing our rooms correctly.',
          correctAnswer: 'benchmark',
          explanation: '[[Benchmarking|El benchmarking]] [[allows hotels|permite a los hoteles]] [[to compare their performance|comparar su rendimiento]] [[against the market average|con la media del mercado]] [[or competitors|o la competencia]] [[to identify strengths and weaknesses|para identificar fortalezas y debilidades]].',
        },
        {
          question: 'A negative ___ on TripAdvisor last week mentioned slow check-in, so we have reviewed our procedures.',
          correctAnswer: 'online review',
          explanation: '[[Online reviews|Las reseñas online]] [[are a primary source|son una fuente principal]] [[of public feedback|de opiniones públicas]] [[and significantly influence|e influyen significativamente]] [[potential guests\'|las decisiones de]] [[booking decisions|reserva de los huéspedes potenciales]]. [[Responding professionally|Responder profesionalmente]] [[to negative reviews|a las reseñas negativas]] [[is a key skill|es una habilidad clave]] [[for hotel managers|para los directivos de hotel]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'rec-b2-u1-l2-v4',
    type: 'true-false',
    level: 'B2',
    topic: 'Management',
    difficulty: 'medium',
    content: {
      title: '[[Hotel Management Vocabulary|Vocabulario de Gestión Hotelera]] — [[Correct Use?|¿Uso Correcto?]]',
      instructions: '[[Decide|Decide]] [[if the vocabulary word|si la palabra del vocabulario]] [[is used correctly|se usa correctamente]] [[in each sentence|en cada frase]]. [[If false|Si es falso]], [[think about why|piensa por qué]] [[and what the correct word should be|y cuál debería ser la palabra correcta]].',
      questions: [
        {
          question: '"The mystery guest gave us a perfect score because our receptionist greeted him warmly and offered an upgrade." — Is "mystery guest" used correctly here?',
          options: ['[[True|Verdadero]] — [[Correct use|Uso correcto]]', '[[False|Falso]] — [[Incorrect use|Uso incorrecto]]'],
          correctAnswer: 'True',
          explanation: '[[Correct|Correcto]]. [[A mystery guest|Un cliente misterioso]] [[evaluates service quality|evalúa la calidad del servicio]] [[by visiting anonymously|visitando de forma anónima]]. [[In this sentence|En esta frase]], [[the mystery guest has completed their visit|el cliente misterioso ha completado su visita]] [[and given a score|y ha dado una puntuación]], [[which is exactly|que es exactamente]] [[what they do|lo que hacen]].',
        },
        {
          question: '"We need to improve our compliance because we only have a 65% occupancy rate this month." — Is "compliance" used correctly here?',
          options: ['[[True|Verdadero]] — [[Correct use|Uso correcto]]', '[[False|Falso]] — [[Incorrect use|Uso incorrecto]]'],
          correctAnswer: 'False',
          explanation: '[[Incorrect|Incorrecto]]. [[Compliance|El cumplimiento]] [[refers to following rules and regulations|se refiere a seguir normas y regulaciones]], [[not to room occupancy|no a la ocupación de habitaciones]]. [[The correct word|La palabra correcta]] [[for this sentence|para esta frase]] [[would be|sería]] "occupancy rate" [[or simply|o simplemente]] "performance". [[Compliance|Cumplimiento]] [[cannot be expressed|no puede expresarse]] [[as a percentage of rooms|como porcentaje de habitaciones]].',
        },
        {
          question: '"Our brand standards require that all staff wear a name badge and address guests by their surname." — Is "brand standards" used correctly here?',
          options: ['[[True|Verdadero]] — [[Correct use|Uso correcto]]', '[[False|Falso]] — [[Incorrect use|Uso incorrecto]]'],
          correctAnswer: 'True',
          explanation: '[[Correct|Correcto]]. [[Brand standards|Los estándares de marca]] [[are exactly the kind of rules|son exactamente el tipo de normas]] [[that dictate|que dictan]] [[specific behaviours and appearance|comportamientos y apariencia específicos]] [[for staff|para el personal]]. [[Name badges and addressing guests|Las insignias con el nombre y dirigirse a los huéspedes]] [[by surname are classic brand standard requirements|por su apellido son requisitos clásicos de los estándares de marca]].',
        },
        {
          question: '"We ran an audit of our online reviews last month and discovered that guests love our breakfast." — Is "audit" used correctly here?',
          options: ['[[True|Verdadero]] — [[Correct use|Uso correcto]]', '[[False|Falso]] — [[Incorrect use|Uso incorrecto]]'],
          correctAnswer: 'True',
          explanation: '[[Correct|Correcto]]. [[While "audit" most often|Aunque "audit" más frecuentemente]] [[refers to a formal financial or compliance check|se refiere a una revisión formal financiera o de cumplimiento]], [[it can also be used|también puede usarse]] [[more broadly|de forma más amplia]] [[to mean a systematic review|para referirse a una revisión sistemática]] [[of any data or process|de cualquier dato o proceso]], [[including online reviews|incluidas las reseñas online]]. [[This is a valid professional usage|Este es un uso profesional válido]].',
        },
        {
          question: '"Our KPI this quarter is to hire three new receptionists for the summer season." — Is "KPI" used correctly here?',
          options: ['[[True|Verdadero]] — [[Correct use|Uso correcto]]', '[[False|Falso]] — [[Incorrect use|Uso incorrecto]]'],
          correctAnswer: 'False',
          explanation: '[[Incorrect|Incorrecto]]. [[A KPI (Key Performance Indicator)|Un KPI (Indicador Clave de Rendimiento)]] [[is a measurable metric|es una métrica medible]] [[used to evaluate performance|usada para evaluar el rendimiento]], [[such as occupancy rate or guest satisfaction score|como la tasa de ocupación o la puntuación de satisfacción del huésped]]. [[Hiring staff|Contratar personal]] [[is a goal or action|es un objetivo o una acción]], [[not a performance indicator|no un indicador de rendimiento]]. [[The correct term|El término correcto]] [[would be|sería]] "goal" or "objective".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
