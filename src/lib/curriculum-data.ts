// Currículum completo basado en especificaciones de Cambridge English (CEFR)
// A1 - C2: Grammar, Vocabulary, Topics, Skills
import { A1_PREMIUM_CURRICULUM } from './a1-premium-curriculum';
import { B2_NEG_MODULE_1_LESSONS, B2_NEG_MODULE_2_LESSONS, B2_NEG_MODULE_3_LESSONS } from './course-data-b2-neg';

export interface CurriculumModule {
  title: string;
  topics: string[];
  grammar: string[];
  vocabulary: string[];
  skills: {
    reading: string[];
    writing: string[];
    listening: string[];
    speaking: string[];
  };
  weeks?: any[];
  lessons?: any[];
}

export interface LevelCurriculum {
  level: string;
  cefr: string;
  description: string;
  duration: string;
  modules: CurriculumModule[];
  examFormat?: {
    name: string;
    parts: string[];
    duration: string;
  };
}

export const CURRICULUM_BY_LEVEL: Record<string, LevelCurriculum> = {
  A1: {
    level: "A1",
    cefr: "Principiante",
    description: "Nivel inicial para comunicación básica en situaciones cotidianas",
    duration: "8-10 semanas",
    examFormat: {
      name: "Cambridge A1 Movers / Pre A1 Starters",
      parts: ["Listening", "Reading & Writing", "Speaking"],
      duration: "45-60 minutos"
    },
    modules: [
      {
        title: "Módulo 1: Presentaciones y Vida Cotidiana",
        topics: [
          "Saludos y presentaciones",
          "Información personal (nombre, edad, nacionalidad)",
          "Familia y amigos",
          "Casa y habitaciones",
          "Rutinas diarias",
          "Días de la semana y meses"
        ],
        grammar: [
          "Verb 'to be' (am, is, are)",
          "Personal pronouns (I, you, he, she, it, we, they)",
          "Possessive adjectives (my, your, his, her)",
          "Present Simple (affirmative, negative, questions)",
          "Articles: a, an, the",
          "Singular and plural nouns",
          "Demonstratives: this, that, these, those"
        ],
        vocabulary: [
          "Números 1-100",
          "Colores básicos",
          "Miembros de la familia",
          "Partes de la casa",
          "Muebles básicos",
          "Días y meses",
          "Profesiones comunes"
        ],
        skills: {
          reading: [
            "Comprender textos muy cortos y sencillos",
            "Leer nombres, palabras y frases básicas",
            "Entender mensajes simples (tarjetas, carteles)"
          ],
          writing: [
            "Escribir frases cortas sobre ti mismo",
            "Completar formularios con datos personales",
            "Escribir postales simples"
          ],
          listening: [
            "Entender instrucciones muy básicas",
            "Comprender números, precios y horas",
            "Entender conversaciones lentas y claras"
          ],
          speaking: [
            "Presentarte a ti mismo",
            "Hacer y responder preguntas simples",
            "Usar frases básicas de cortesía",
            "Describir tu familia y casa"
          ]
        }
      },
      {
        title: "Módulo 2: Actividades y Tiempo Libre",
        topics: [
          "Hobbies y actividades de tiempo libre",
          "Deportes básicos",
          "Comida y bebida",
          "Tiendas y compras",
          "El tiempo atmosférico",
          "Animales y mascotas"
        ],
        grammar: [
          "Present Simple con he/she/it (tercera persona)",
          "Frequency adverbs (always, usually, sometimes, never)",
          "Can/can't para habilidades",
          "Question words: what, where, when, who",
          "Prepositions of time: at, on, in",
          "Prepositions of place: in, on, under, next to",
          "There is / There are"
        ],
        vocabulary: [
          "Hobbies y deportes",
          "Comidas y bebidas",
          "Frutas y verduras",
          "Tiendas y lugares públicos",
          "Adjetivos descriptivos básicos",
          "Animales comunes",
          "Clima y tiempo"
        ],
        skills: {
          reading: [
            "Leer y entender menús simples",
            "Comprender horarios y programas",
            "Leer carteles y anuncios básicos"
          ],
          writing: [
            "Escribir listas de compras",
            "Describir tu rutina diaria",
            "Escribir mensajes cortos sobre planes"
          ],
          listening: [
            "Entender descripciones simples",
            "Comprender conversaciones sobre comida y compras",
            "Seguir indicaciones básicas"
          ],
          speaking: [
            "Hablar sobre tus hobbies",
            "Pedir comida en un restaurante",
            "Preguntar y decir la hora",
            "Hablar sobre el tiempo"
          ]
        }
      },
      {
        title: "Módulo 3: Lugares y Viajes",
        topics: [
          "Transporte y viajes",
          "Direcciones y ubicaciones",
          "El colegio o trabajo",
          "Países y nacionalidades",
          "Vacaciones básicas"
        ],
        grammar: [
          "Present Continuous (acción en progreso)",
          "Present Simple vs Present Continuous",
          "Imperative (instrucciones y órdenes)",
          "Let's (sugerencias)",
          "Object pronouns (me, you, him, her, it, us, them)"
        ],
        vocabulary: [
          "Medios de transporte",
          "Lugares en la ciudad",
          "Direcciones (left, right, straight)",
          "Países y nacionalidades",
          "Objetos escolares",
          "Ropa básica"
        ],
        skills: {
          reading: [
            "Leer instrucciones simples",
            "Comprender señales de tráfico básicas",
            "Entender mensajes de texto cortos"
          ],
          writing: [
            "Escribir sobre tus vacaciones",
            "Dar instrucciones simples",
            "Describir lugares"
          ],
          listening: [
            "Entender direcciones básicas",
            "Comprender anuncios públicos simples",
            "Seguir conversaciones sobre viajes"
          ],
          speaking: [
            "Pedir y dar direcciones",
            "Hablar sobre transporte",
            "Describir tu escuela o trabajo",
            "Hacer planes simples"
          ]
        }
      }
    ]
  },
  A1_PREMIUM: A1_PREMIUM_CURRICULUM,
  TRABAJO_A1: {
    level: "A1",
    cefr: "Principiante Pro",
    description: "Inglés inicial enfocado 100% en el entorno laboral y profesional",
    duration: "8-10 semanas",
    modules: [
      {
        title: "Módulo 1: Presentaciones y Números en el Trabajo",
        topics: [
          "Saludos formales e informales",
          "Presentaciones personales y de colegas",
          "Números cardinales y ordinales",
          "Fechas, meses y años",
          "La hora y horarios de oficina"
        ],
        grammar: [
          "Verb 'to be' (presente)",
          "Personal pronouns",
          "Possessive adjectives",
          "Present Simple (conceptos básicos)",
          "Prepositions of time: in, on, at"
        ],
        vocabulary: [
          "Greetings (Hello, Good morning, Nice to meet you)",
          "Job titles (Manager, Assistant, Developer)",
          "Numbers 1-1000",
          "Days of the week and months",
          "Time expressions"
        ],
        skills: {
          reading: [
            "Leer tarjetas de visita",
            "Entender horarios sencillos",
            "Identificar información personal en perfiles"
          ],
          writing: [
            "Escribir una presentación personal corta",
            "Completar formularios con datos personales y fechas",
            "Escribir números y horas correctamente"
          ],
          listening: [
            "Entender presentaciones lentas y claras",
            "Identificar números y fechas en dictados",
            "Comprender saludos básicos"
          ],
          speaking: [
            "Presentarse a sí mismo y a otros",
            "Decir tu profesión y lugar de trabajo",
            "Preguntar y decir la hora y fechas"
          ]
        }
      },
      {
        title: "Módulo 2: El Entorno de Oficina",
        topics: [
          "Objetos de oficina y suministros",
          "Departamentos de la empresa",
          "Ubicación de objetos y lugares",
          "Acciones cotidianas en el trabajo",
          "Equipamiento tecnológico básico"
        ],
        grammar: [
          "Articles: a, an, the",
          "There is / There are",
          "Prepositions of place",
          "Demonstratives (this, that, these, those)",
          "Present Simple (rutinas laborales)"
        ],
        vocabulary: [
          "Office supplies (desk, chair, computer, printer)",
          "Departments (Sales, Marketing, HR, Finance)",
          "Common workplace verbs (work, call, email, send)",
          "Technology basics (screen, keyboard, mouse)"
        ],
        skills: {
          reading: [
            "Identificar señales y etiquetas en la oficina",
            "Leer descripciones cortas de departamentos",
            "Entender inventarios básicos"
          ],
          writing: [
            "Describir tu lugar de trabajo",
            "Hacer listas de materiales necesarios",
            "Escribir frases sobre tu rutina diaria"
          ],
          listening: [
            "Seguir instrucciones espaciales básicas",
            "Entender descripciones de oficinas",
            "Identificar departamentos en una conversación"
          ],
          speaking: [
            "Describir qué hay en tu oficina",
            "Decir en qué departamento trabajas",
            "Pedir objetos de oficina básicos"
          ]
        }
      },
      {
        title: "Módulo 3: Emails y Comunicación Inicial",
        topics: [
          "Estructura básica de un email",
          "Saludos y despedidas en correos",
          "Frases comunes para solicitar información",
          "Confirmación de citas y reuniones",
          "Agradecimientos profesionales"
        ],
        grammar: [
          "Imperative for simple instructions",
          "Question words (What, Where, When, Who, Why)",
          "Can for polite requests",
          "Present Simple (preguntas y negación)",
          "Object pronouns"
        ],
        vocabulary: [
          "Email terminology (subject, attachment, reply)",
          "Professional greetings (Dear, Regards, Best wishes)",
          "Request phrases (Please send, Could you...?)",
          "Action verbs for emails"
        ],
        skills: {
          reading: [
            "Comprender emails muy cortos y directos",
            "Identificar el asunto y la acción requerida",
            "Leer confirmaciones de reuniones"
          ],
          writing: [
            "Escribir un email de presentación básico",
            "Redactar solicitudes de información sencillas",
            "Escribir despedidas adecuadas según el tono"
          ],
          listening: [
            "Entender peticiones simples por teléfono",
            "Identificar el propósito de un mensaje corto",
            "Seguir instrucciones de correo electrónico"
          ],
          speaking: [
            "Hacer peticiones educadas básicas",
            "Confirmar asistencia a una reunión",
            "Agradecer formalmente por una información"
          ]
        }
      }
    ]
  },
  VIAJES_A1: {
    level: "A1",
    cefr: "Viajero Principiante",
    description: "Inglés desde cero diseñado para sobrevivir y disfrutar tus viajes por el mundo",
    duration: "36 semanas (9 meses)",
    modules: [
      {
        title: "Módulo 1: Primeros Pasos y Salida",
        topics: [
          "Alfabeto y deletreo de nombres",
          "Saludos y presentaciones básicas",
          "Números y precios esenciales",
          "Frases de supervivencia",
          "El aeropuerto: Check-in y Seguridad"
        ],
        grammar: [
          "Verb 'to be' (I am, You are)",
          "Personal pronouns",
          "Possessive adjectives (My, Your)",
          "Numbers 1-100",
          "Basic questions (Where, What, How much)"
        ],
        vocabulary: [
          "Greetings (Hello, Good morning, etc.)",
          "Travel objects (Passport, ticket, suitcase)",
          "Airport vocabulary",
          "Polite phrases (Please, Thank you, Excuse me)"
        ],
        weeks: [
          {
            id: "semana01",
            title: "Semana 1: Bienvenida y Primeros Pasos",
            lessons: [
              { id: "lesson1", title: "Getting Started: Introduction to English for Travel" },
              { id: "lesson2", title: "Navigating Airports, Transportation, and Accommodations" },
              { id: "lesson3", title: "Eating Out: Restaurants, Cafés, and Food" }
            ]
          },
          {
            id: "semana02",
            title: "Semana 2: Supervivencia en la Ciudad",
            lessons: [
              { id: "lesson1", title: "Exploring the City: Directions, Shopping, and Emergencies" },
              { id: "lesson2", title: "Review and Practice: Real-Life Travel Scenarios" },
              { id: "lesson3", title: "Health, Wellness, and Pharmacy: Managing Medical Needs Abroad" }
            ]
          }
        ],
        skills: {
          reading: [
            "Leer billetes de avión y tarjetas de embarque",
            "Identificar señales de aeropuerto",
            "Leer nombres y precios básicos"
          ],
          writing: [
            "Deletrear tu nombre y apellido",
            "Completar formularios de inmigración básicos",
            "Escribir números y precios"
          ],
          listening: [
            "Entender saludos y presentaciones lentas",
            "Identificar letras y números en anuncios",
            "Comprender instrucciones de seguridad básicas"
          ],
          speaking: [
            "Saludar y presentarte",
            "Deletrear tu nombre para una reserva",
            "Preguntar precios y direcciones simples"
          ]
        }
      }
    ]
  },
  A2: {
    level: "A2",
    cefr: "Elemental",
    description: "Comunicación en tareas simples y rutinarias con información directa",
    duration: "10-12 semanas",
    examFormat: {
      name: "Cambridge A2 Key (KET)",
      parts: ["Reading & Writing", "Listening", "Speaking"],
      duration: "110 minutos total"
    },
    modules: [
      {
        title: "Módulo 1: Experiencias y Eventos Pasados",
        topics: [
          "Experiencias de vida",
          "Vacaciones y viajes pasados",
          "Eventos importantes",
          "Biografías simples",
          "Celebraciones y festividades"
        ],
        grammar: [
          "Past Simple (regular e irregular)",
          "Was/were",
          "Past Simple: questions and negatives",
          "Time expressions (yesterday, last week, ago)",
          "Conjunctions: and, but, or, because",
          "Adverbs of manner (quickly, slowly, well)"
        ],
        vocabulary: [
          "Verbos irregulares comunes (go-went, see-saw)",
          "Adjetivos de emociones (happy, sad, excited)",
          "Expresiones de tiempo pasado",
          "Actividades de vacaciones",
          "Eventos y celebraciones",
          "Tecnología básica"
        ],
        skills: {
          reading: [
            "Leer emails y cartas personales",
            "Comprender descripciones de eventos",
            "Entender textos narrativos simples"
          ],
          writing: [
            "Escribir sobre experiencias pasadas",
            "Redactar emails informales",
            "Contar una historia simple"
          ],
          listening: [
            "Entender relatos de experiencias",
            "Comprender noticias simples",
            "Seguir conversaciones sobre el pasado"
          ],
          speaking: [
            "Hablar sobre tus vacaciones",
            "Describir eventos pasados",
            "Contar anécdotas simples",
            "Expresar opiniones básicas"
          ]
        }
      },
      {
        title: "Módulo 2: Planes Futuros y Predicciones",
        topics: [
          "Planes y intenciones",
          "Predicciones sobre el futuro",
          "Invitaciones y citas",
          "Sugerencias y ofertas",
          "Tiempo libre y entretenimiento"
        ],
        grammar: [
          "Going to (planes e intenciones)",
          "Will (predicciones y decisiones espontáneas)",
          "Present Continuous para planes futuros",
          "Would like to (deseos)",
          "Should/shouldn't (consejos)",
          "Comparative adjectives (bigger, more interesting)",
          "Superlative adjectives (the biggest, the most interesting)"
        ],
        vocabulary: [
          "Actividades de ocio",
          "Cine, teatro, conciertos",
          "Tecnología y comunicación",
          "Salud y estado físico",
          "Clima y estaciones",
          "Adjetivos comparativos y superlativos"
        ],
        skills: {
          reading: [
            "Leer folletos informativos",
            "Comprender programas de eventos",
            "Entender reseñas simples"
          ],
          writing: [
            "Escribir sobre planes futuros",
            "Redactar invitaciones",
            "Escribir mensajes para hacer planes"
          ],
          listening: [
            "Entender conversaciones sobre planes",
            "Comprender pronósticos del tiempo",
            "Seguir diálogos sobre entretenimiento"
          ],
          speaking: [
            "Hacer y responder a invitaciones",
            "Hablar sobre planes de fin de semana",
            "Dar y pedir consejos",
            "Hacer sugerencias"
          ]
        }
      },
      {
        title: "Módulo 3: Compras, Salud y Servicios",
        topics: [
          "Compras y dinero",
          "Restaurantes y comida",
          "Salud y médicos",
          "Servicios (banco, correos)",
          "Problemas y soluciones"
        ],
        grammar: [
          "Quantifiers (some, any, much, many, a lot of)",
          "Countable and uncountable nouns",
          "How much / How many",
          "Have to / don't have to (obligación)",
          "Modals: must, mustn't (prohibición)",
          "Too / enough",
          "Adverbs of degree (very, really, quite)"
        ],
        vocabulary: [
          "Dinero y precios",
          "Comida y menús",
          "Partes del cuerpo",
          "Enfermedades comunes",
          "Tiendas y servicios",
          "Ropa y accesorios",
          "Problemas cotidianos"
        ],
        skills: {
          reading: [
            "Leer menús de restaurantes",
            "Comprender instrucciones médicas simples",
            "Entender anuncios publicitarios"
          ],
          writing: [
            "Escribir listas y notas",
            "Redactar quejas simples",
            "Completar formularios detallados"
          ],
          listening: [
            "Entender conversaciones en tiendas",
            "Comprender instrucciones de uso",
            "Seguir diálogos sobre salud"
          ],
          speaking: [
            "Hacer compras y preguntar precios",
            "Pedir en un restaurante",
            "Describir síntomas al médico",
            "Resolver problemas cotidianos"
          ]
        }
      }
    ]
  },

  B1: {
    level: "B1",
    cefr: "Intermedio",
    description: "Comprensión y producción en situaciones familiares y temas de interés personal",
    duration: "12-14 semanas",
    examFormat: {
      name: "Cambridge B1 Preliminary (PET)",
      parts: ["Reading", "Writing", "Listening", "Speaking"],
      duration: "140 minutos total"
    },
    modules: [
      {
        title: "Módulo 1: Experiencias, Historias y Narrativas",
        topics: [
          "Experiencias personales detalladas",
          "Narraciones y anécdotas",
          "Biografías y historias de vida",
          "Noticias y eventos actuales",
          "Cultura y costumbres"
        ],
        grammar: [
          "Past Continuous",
          "Past Simple vs Past Continuous",
          "Used to (hábitos pasados)",
          "Present Perfect (experiencias sin tiempo específico)",
          "Present Perfect vs Past Simple",
          "Time expressions (for, since, already, yet, just)",
          "Narrative tenses"
        ],
        vocabulary: [
          "Expresiones de secuencia (first, then, after that, finally)",
          "Adjetivos de personalidad",
          "Verbos de opinión (think, believe, feel)",
          "Conectores narrativos (while, when, as, during)",
          "Expresiones de tiempo",
          "Cultura y tradiciones"
        ],
        skills: {
          reading: [
            "Leer artículos de interés general",
            "Comprender textos narrativos",
            "Entender descripciones detalladas",
            "Identificar ideas principales y detalles"
          ],
          writing: [
            "Escribir historias coherentes",
            "Redactar emails formales e informales",
            "Escribir artículos de opinión simples",
            "Describir experiencias con detalle"
          ],
          listening: [
            "Entender narraciones y anécdotas",
            "Comprender noticias principales",
            "Seguir conversaciones sobre temas familiares",
            "Identificar actitudes y opiniones"
          ],
          speaking: [
            "Contar historias con detalle",
            "Describir experiencias personales",
            "Expresar opiniones con justificación",
            "Mantener una conversación fluida sobre temas conocidos"
          ]
        }
      },
      {
        title: "Módulo 2: Futuro, Planes y Predicciones",
        topics: [
          "Planes de vida (estudios, carrera)",
          "Predicciones y posibilidades",
          "Ambiciones y objetivos",
          "Medio ambiente y sostenibilidad",
          "Tecnología y cambios futuros"
        ],
        grammar: [
          "Future forms (will, going to, Present Continuous)",
          "First Conditional (if + present, will)",
          "Time clauses (when, as soon as, before, after)",
          "May/might/could (posibilidad)",
          "Modal verbs review",
          "Future Perfect (opcional)"
        ],
        vocabulary: [
          "Ambiciones y metas",
          "Educación y carrera profesional",
          "Medio ambiente y ecología",
          "Tecnología moderna",
          "Probabilidad y certeza",
          "Cambios sociales"
        ],
        skills: {
          reading: [
            "Leer artículos sobre tendencias futuras",
            "Comprender predicciones y análisis",
            "Entender textos argumentativos"
          ],
          writing: [
            "Escribir sobre planes futuros",
            "Redactar ensayos de opinión (120-150 palabras)",
            "Escribir cartas formales",
            "Argumentar a favor o en contra"
          ],
          listening: [
            "Entender debates simples",
            "Comprender conferencias básicas",
            "Seguir entrevistas y discusiones"
          ],
          speaking: [
            "Hablar sobre planes y ambiciones",
            "Hacer predicciones con justificación",
            "Especular sobre el futuro",
            "Debatir temas de actualidad"
          ]
        }
      },
      {
        title: "Módulo 3: Consejos, Sugerencias y Experiencias",
        topics: [
          "Dar y pedir consejos",
          "Recomendaciones (libros, películas, viajes)",
          "Problemas y soluciones",
          "Salud y bienestar",
          "Relaciones personales"
        ],
        grammar: [
          "Should, ought to, had better (consejos)",
          "Second Conditional (if + past, would)",
          "Relative clauses (who, which, that, where)",
          "Passive voice (presente y pasado simple)",
          "Reported speech (statements)",
          "Question tags"
        ],
        vocabulary: [
          "Expresiones de consejo y sugerencia",
          "Problemas sociales",
          "Salud mental y física",
          "Relaciones interpersonales",
          "Estilo de vida",
          "Frases idiomáticas comunes",
          "Phrasal verbs básicos (give up, look after, take off)"
        ],
        skills: {
          reading: [
            "Leer reseñas y recomendaciones",
            "Comprender textos instructivos",
            "Entender correspondencia formal"
          ],
          writing: [
            "Escribir reseñas de productos/servicios",
            "Redactar cartas de queja y disculpa",
            "Escribir guías y recomendaciones"
          ],
          listening: [
            "Entender consejos y recomendaciones",
            "Comprender instrucciones complejas",
            "Seguir podcasts sobre temas conocidos"
          ],
          speaking: [
            "Dar y justificar consejos",
            "Hacer recomendaciones",
            "Discutir problemas y proponer soluciones",
            "Expresar preferencias y opiniones fundamentadas"
          ]
        }
      }
    ]
  },

  B2: {
    level: "B2",
    cefr: "Intermedio-Alto",
    description: "Interacción fluida con hablantes nativos y comprensión de textos complejos",
    duration: "14-16 semanas",
    examFormat: {
      name: "Cambridge B2 First (FCE)",
      parts: ["Reading & Use of English", "Writing", "Listening", "Speaking"],
      duration: "209 minutos total"
    },
    modules: [
      {
        title: "Módulo 1: Narrativas Complejas y Análisis",
        topics: [
          "Literatura y crítica",
          "Cine, arte y cultura",
          "Eventos históricos",
          "Biografías detalladas",
          "Análisis de situaciones"
        ],
        grammar: [
          "Perfect tenses review (Present Perfect, Past Perfect)",
          "Past Perfect Continuous",
          "Mixed conditionals",
          "Narrative tenses (all past forms)",
          "Inversion for emphasis (Never have I seen...)",
          "Cleft sentences (What I like is..., It was John who...)"
        ],
        vocabulary: [
          "Expresiones idiomáticas avanzadas",
          "Colocaciones comunes (make an effort, take a chance)",
          "Vocabulario literario",
          "Crítica y análisis",
          "Lenguaje emotivo y descriptivo",
          "Phrasal verbs avanzados (come across, get over, put up with)"
        ],
        skills: {
          reading: [
            "Analizar textos literarios",
            "Comprender artículos especializados",
            "Identificar tono, registro y actitud del autor",
            "Hacer inferencias complejas"
          ],
          writing: [
            "Escribir ensayos argumentativos (180-220 palabras)",
            "Redactar artículos para revistas",
            "Escribir reseñas críticas",
            "Redactar informes formales"
          ],
          listening: [
            "Comprender conferencias y presentaciones",
            "Seguir debates complejos",
            "Entender diferentes acentos y registros",
            "Captar ironía y humor"
          ],
          speaking: [
            "Narrar con detalle y fluidez",
            "Analizar y criticar constructivamente",
            "Usar lenguaje cohesivo avanzado",
            "Mantener conversaciones extensas"
          ]
        }
      },
      {
        title: "Módulo 2: Especulación, Hipótesis y Argumentación",
        topics: [
          "Ciencia y tecnología",
          "Problemas globales",
          "Ética y dilemas morales",
          "Economía y negocios",
          "Política y sociedad"
        ],
        grammar: [
          "Third Conditional (If + Past Perfect, would have)",
          "Mixed conditionals (diferentes combinaciones)",
          "Wish / If only (lamentos)",
          "Modal verbs of deduction (must, might, can't + have done)",
          "Future in the past (was going to, would)",
          "Advanced passive structures"
        ],
        vocabulary: [
          "Vocabulario académico (hypothesis, evidence, analyze)",
          "Economía y administracion",
          "Ciencia y tecnología",
          "Problemas sociales",
          "Política y gobierno",
          "Conectores de causa y efecto (due to, owing to, as a result)"
        ],
        skills: {
          reading: [
            "Comprender textos académicos",
            "Analizar argumentos complejos",
            "Identificar punto de vista y sesgo",
            "Evaluar evidencias"
          ],
          writing: [
            "Escribir ensayos de pros y contras",
            "Redactar propuestas",
            "Escribir informes técnicos",
            "Argumentar con coherencia y cohesión"
          ],
          listening: [
            "Comprender documentales",
            "Seguir entrevistas profesionales",
            "Entender discusiones académicas",
            "Captar matices y sutilezas"
          ],
          speaking: [
            "Especular sobre situaciones hipotéticas",
            "Debatir con argumentos sólidos",
            "Expresar opiniones complejas",
            "Negociar y persuadir"
          ]
        }
      },
      {
        title: "Módulo 3: Comunicación Avanzada y Estilo",
        topics: [
          "Estilo de comunicación",
          "Lenguaje formal e informal",
          "Persuasión y retórica",
          "Presentaciones y discursos",
          "Escritura creativa"
        ],
        grammar: [
          "Reported speech (all forms)",
          "Reporting verbs (suggest, advise, warn, promise)",
          "Subjunctive (I suggest that he be...)",
          "Emphatic structures",
          "Ellipsis and substitution",
          "Advanced relative clauses"
        ],
        vocabulary: [
          "Registro formal vs informal",
          "Expresiones de cortesía avanzadas",
          "Lenguaje persuasivo",
          "Conectores sofisticados (furthermore, nevertheless, albeit)",
          "Vocabulario de negocios",
          "Expresiones metafóricas",
          "Word formation (prefixes, suffixes)"
        ],
        skills: {
          reading: [
            "Adaptar estilo de lectura al texto",
            "Comprender textos de diferentes registros",
            "Apreciar recursos literarios"
          ],
          writing: [
            "Adaptar estilo al propósito y audiencia",
            "Escribir cartas formales complejas",
            "Redactar emails profesionales",
            "Usar variedad de estructuras sintácticas"
          ],
          listening: [
            "Entender diferentes registros",
            "Comprender lenguaje coloquial avanzado",
            "Seguir charlas TED y conferencias",
            "Identificar persuasión y retórica"
          ],
          speaking: [
            "Hacer presentaciones efectivas",
            "Adaptar registro a la situación",
            "Usar lenguaje diplomático",
            "Expresarse con precisión y matiz"
          ]
        }
      }
    ]
  },

  C1: {
    level: "C1",
    cefr: "Avanzado",
    description: "Dominio efectivo del idioma con fluidez, flexibilidad y precisión",
    duration: "16-18 semanas",
    examFormat: {
      name: "Cambridge C1 Advanced (CAE)",
      parts: ["Reading & Use of English", "Writing", "Listening", "Speaking"],
      duration: "235 minutos total"
    },
    modules: [
      {
        title: "Módulo 1: Análisis Crítico y Discurso Complejo",
        topics: [
          "Crítica literaria y artística",
          "Filosofía y ética",
          "Teorías sociales",
          "Psicología y comportamiento",
          "Investigación académica"
        ],
        grammar: [
          "Advanced perfect forms (Perfect Continuous in all tenses)",
          "Distancing (apparently, seemingly, allegedly)",
          "Hedging and vague language",
          "Fronting and inversion for emphasis",
          "Complex passive structures",
          "Nominalization",
          "Advanced cleft sentences"
        ],
        vocabulary: [
          "Vocabulario académico sofisticado",
          "Colocaciones avanzadas (irrefutable evidence, stark contrast)",
          "Expresiones para análisis crítico",
          "Lenguaje abstracto y conceptual",
          "Sinónimos y matices semánticos",
          "Prefijos y sufijos académicos",
          "Phrasal verbs idiomáticos avanzados"
        ],
        skills: {
          reading: [
            "Analizar argumentos sofisticados",
            "Comprender textos académicos densos",
            "Evaluar validez de argumentos",
            "Identificar presuposiciones implícitas",
            "Comprender textos literarios complejos"
          ],
          writing: [
            "Escribir ensayos académicos (220-260 palabras)",
            "Redactar artículos de opinión sofisticados",
            "Escribir propuestas detalladas",
            "Producir informes profesionales complejos",
            "Usar cohesión y coherencia avanzadas"
          ],
          listening: [
            "Comprender conferencias académicas extensas",
            "Seguir debates complejos con múltiples hablantes",
            "Entender podcasts especializados",
            "Captar implicaciones y sutilezas"
          ],
          speaking: [
            "Desarrollar argumentos complejos",
            "Participar en debates académicos",
            "Hacer presentaciones profesionales",
            "Expresar ideas abstractas con precisión"
          ]
        }
      },
      {
        title: "Módulo 2: Expresión Sofisticada y Estilo",
        topics: [
          "Retórica y persuasión avanzada",
          "Escritura creativa",
          "Comunicación profesional de alto nivel",
          "Medios y comunicación",
          "Crítica social y cultural"
        ],
        grammar: [
          "Subjunctive mood (all forms)",
          "Advanced conditionals (mixed and inverted)",
          "Participle clauses (-ing, -ed)",
          "Advanced relative clauses (whom, in which, whereby)",
          "Ellipsis in formal writing",
          "Advanced reported speech structures"
        ],
        vocabulary: [
          "Registro culto y formal",
          "Expresiones idiomáticas sofisticadas",
          "Vocabulario de medios de comunicación",
          "Lenguaje metafórico y figurativo",
          "Colocaciones especializadas",
          "Expresiones latinas en inglés (ad hoc, per se, vice versa)",
          "Word families completas"
        ],
        skills: {
          reading: [
            "Comprender literatura contemporánea",
            "Analizar editoriales y artículos de opinión",
            "Apreciar estilo y recursos retóricos",
            "Leer textos legales y técnicos"
          ],
          writing: [
            "Escribir con estilo personal distintivo",
            "Redactar reseñas críticas extensas",
            "Producir escritura creativa",
            "Adaptar estilo a múltiples propósitos",
            "Usar variedad léxica y sintáctica"
          ],
          listening: [
            "Comprender películas sin subtítulos",
            "Seguir noticias y programas de actualidad",
            "Entender humor sofisticado",
            "Captar referencias culturales"
          ],
          speaking: [
            "Usar lenguaje idiomático con naturalidad",
            "Expresar emociones y matices sutiles",
            "Contar historias de forma cautivadora",
            "Improvisar con fluidez en cualquier contexto"
          ]
        }
      },
      {
        title: "Módulo 3: Dominio Profesional y Especialización",
        topics: [
          "Inglés de negocios avanzado",
          "Presentaciones ejecutivas",
          "Negociación internacional",
          "Escritura técnica y científica",
          "Conferencias y networking profesional"
        ],
        grammar: [
          "Advanced nominalisation",
          "Sophisticated cohesive devices",
          "Complex sentence structures",
          "Formal grammar structures",
          "Advanced modal expressions (be bound to, be liable to)",
          "Emphasis through syntax"
        ],
        vocabulary: [
          "Inglés de negocios especializado",
          "Términos jurídicos y contractuales",
          "Vocabulario financiero avanzado",
          "Terminología de marketing y ventas",
          "Lenguaje de gestión de proyectos",
          "Expresiones para networking",
          "Colocaciones profesionales"
        ],
        skills: {
          reading: [
            "Comprender contratos y documentos legales",
            "Analizar informes financieros",
            "Leer artículos técnicos especializados",
            "Evaluar propuestas de negocio"
          ],
          writing: [
            "Redactar propuestas de negocio",
            "Escribir informes ejecutivos",
            "Producir correspondencia corporativa",
            "Redactar memorandos y minutas",
            "Escribir documentos técnicos"
          ],
          listening: [
            "Comprender reuniones de negocios complejas",
            "Seguir negociaciones",
            "Entender jerga profesional",
            "Captar implicaciones en contexto corporativo"
          ],
          speaking: [
            "Hacer presentaciones ejecutivas",
            "Negociar acuerdos complejos",
            "Liderar reuniones",
            "Hacer networking profesional efectivo",
            "Manejar situaciones profesionales delicadas"
          ]
        }
      }
    ]
  },

  C2: {
    level: "C2",
    cefr: "Maestría",
    description: "Dominio pleno del idioma, equiparable a un hablante nativo culto",
    duration: "18-20 semanas",
    examFormat: {
      name: "Cambridge C2 Proficiency (CPE)",
      parts: ["Reading & Use of English", "Writing", "Listening", "Speaking"],
      duration: "236 minutos total"
    },
    modules: [
      {
        title: "Módulo 1: Excelencia Lingüística y Precisión",
        topics: [
          "Análisis lingüístico avanzado",
          "Teoría literaria",
          "Filosofía del lenguaje",
          "Semántica y pragmática",
          "Sociolingüística"
        ],
        grammar: [
          "All grammatical structures at mastery level",
          "Complex inversion patterns",
          "Sophisticated ellipsis",
          "Advanced subjunctive uses",
          "Archaisms and formal structures",
          "Complex coordination and subordination",
          "Nuanced modal meanings"
        ],
        vocabulary: [
          "Vocabulario culto y literario extenso (10,000+ palabras)",
          "Expresiones arcaicas y formales",
          "Registro académico de alto nivel",
          "Terminología especializada múltiple",
          "Vocabulario técnico avanzado",
          "Expresiones idiomáticas raras",
          "Neologismos y lenguaje contemporáneo",
          "Vocabulario para análisis crítico sofisticado"
        ],
        skills: {
          reading: [
            "Comprender cualquier texto escrito",
            "Analizar textos literarios clásicos y contemporáneos",
            "Leer textos legales, médicos, técnicos sin dificultad",
            "Apreciar matices estilísticos sutiles",
            "Comprender referencias culturales e históricas"
          ],
          writing: [
            "Escribir con elegancia y precisión",
            "Producir textos académicos de nivel investigador",
            "Redactar documentos legales complejos",
            "Escribir literatura creativa de calidad",
            "Adaptar estilo a cualquier contexto con maestría"
          ],
          listening: [
            "Comprender cualquier tipo de discurso oral",
            "Seguir conversaciones a velocidad nativa en cualquier contexto",
            "Entender todos los acentos y dialectos",
            "Captar ironía, sarcasmo y humor sofisticado",
            "Comprender referencias implícitas"
          ],
          speaking: [
            "Expresarte con fluidez de hablante nativo",
            "Usar lenguaje idiomático de forma natural",
            "Argumentar con sofisticación retórica",
            "Participar en debates académicos de alto nivel",
            "Improvisar en cualquier situación"
          ]
        }
      },
      {
        title: "Módulo 2: Maestría Estilística y Retórica",
        topics: [
          "Retórica avanzada",
          "Análisis del discurso",
          "Estilística y pragmática",
          "Comunicación intercultural avanzada",
          "Oratoria y presentaciones de élite"
        ],
        grammar: [
          "Mastery of all stylistic variations",
          "Complex rhetorical structures",
          "Advanced discourse markers",
          "Sophisticated hedging and boosting",
          "Mastery of formality scales",
          "Advanced prosodic features"
        ],
        vocabulary: [
          "Dominio completo de colocaciones",
          "Uso creativo de expresiones idiomáticas",
          "Vocabulario de análisis crítico avanzado",
          "Terminología retórica",
          "Expresiones para matices sutiles (nuance, subtlety, connotation)",
          "Vocabulario de alto registro en todos los campos",
          "Sinónimos precisos para cualquier contexto"
        ],
        skills: {
          reading: [
            "Análisis crítico de cualquier texto",
            "Evaluación de calidad literaria",
            "Comprensión de textos filosóficos densos",
            "Apreciación de recursos estilísticos complejos"
          ],
          writing: [
            "Producir ensayos de nivel publicable",
            "Escribir tesis doctorales",
            "Redactar artículos para revistas académicas",
            "Crear contenido literario original",
            "Dominar múltiples géneros escritos"
          ],
          listening: [
            "Comprender conferencias académicas de cualquier campo",
            "Seguir debates filosóficos complejos",
            "Entender películas, teatro y poesía oral",
            "Captar todos los niveles de significado"
          ],
          speaking: [
            "Dar conferencias magistrales",
            "Participar en debates de alto nivel intelectual",
            "Hacer presentaciones académicas complejas",
            "Expresar ideas abstractas con precisión total"
          ]
        }
      },
      {
        title: "Módulo 3: Especialización Profesional y Cultural",
        topics: [
          "Inglés académico de investigación",
          "Inglés legal avanzado",
          "Inglés médico especializado",
          "Inglés de negocios ejecutivo",
          "Inglés para Tecnología e Inteligencia Artificial",
          "Traducción e interpretación",
          "Literatura inglesa (clásica y contemporánea)"
        ],
        grammar: [
          "Grammatical accuracy at native-speaker level",
          "Mastery of all aspects of syntax",
          "Complete command of formal and informal registers",
          "Understanding of historical grammar variations"
        ],
        vocabulary: [
          "Vocabulario especializado de múltiples campos",
          "Terminología de investigación avanzada",
          "Léxico jurídico completo",
          "Vocabulario médico especializado",
          "Terminología de traducción",
          "Expresiones culturales y literarias",
          "Dominio de false friends y sutilezas semánticas",
          "Vocabulario para contextos interculturales"
        ],
        skills: {
          reading: [
            "Leer textos especializados de cualquier campo",
            "Comprender literatura en inglés antiguo (con apoyo)",
            "Analizar documentos históricos",
            "Evaluar traducciones"
          ],
          writing: [
            "Escribir para publicación académica",
            "Producir traducciones de alta calidad",
            "Redactar documentos técnicos complejos",
            "Escribir crítica literaria profesional"
          ],
          listening: [
            "Comprender programas especializados (derecho, medicina)",
            "Seguir podcasts técnicos",
            "Entender teatro shakespeariano",
            "Captar dialectos regionales"
          ],
          speaking: [
            "Enseñar inglés a nivel universitario",
            "Realizar interpretación consecutiva",
            "Participar en conferencias internacionales",
            "Debatir en cualquier contexto profesional",
            "Expresarte con la sutileza de un hablante nativo"
          ]
        }
      }
    ]
  },
  NEGOCIACIONES_B2: {
    level: "B2",
    cefr: "Intermedio-Alto",
    description: "Inglés para realizar negociaciones prácticas y efectivas",
    duration: "4-6 semanas",
    modules: [
      {
        title: "Módulo 1: La Fase de Preparación",
        topics: [
          "Establecimiento de objetivos",
          "Análisis BATNA",
          "Investigación de la contraparte",
          "Definición de límites (Bottom line)"
        ],
        grammar: [
          "Zero and First Conditional (situaciones reales)",
          "Modal verbs for possibility and deduction (might, could)",
          "Reporting verbs para resumir investigación"
        ],
        vocabulary: [
          "Research and Preparation",
          "Business objectives",
          "Negotiation terminology (BATNA, Bottom line)",
          "Counterparty analysis"
        ],
        skills: {
          reading: ["Analizar perfiles de empresas", "Leer informes de mercado"],
          writing: ["Resumen de objetivos de negociación", "Email de preparación"],
          listening: ["Briefing de equipo previo a negociación", "Análisis de posiciones"],
          speaking: ["Presentar objetivos al equipo", "Discutir estrategias"]
        },
        lessons: B2_NEG_MODULE_1_LESSONS
      },
      {
        title: "Módulo 2: Apertura y Regateo",
        topics: [
          "Presentación de propuestas",
          "El arte de las concesiones",
          "Técnicas de persuasión",
          "Manejo de contraofertas"
        ],
        grammar: [
          "Second Conditional (escenarios hipotéticos)",
          "Passive voice for formal proposals",
          "Cleft sentences for emphasis"
        ],
        vocabulary: [
          "Bargaining and concessions",
          "Leverage and trade-offs",
          "Persuasive language",
          "Counter-offers and conditions"
        ],
        skills: {
          reading: ["Leer propuestas de contrato", "Analizar cláusulas"],
          writing: ["Redactar una propuesta formal", "Responder a una contraoferta"],
          listening: ["Seguir una discusión de precios", "Captar señales de flexibilidad"],
          speaking: ["Hacer una oferta inicial", "Negociar concesiones (trade-offs)"]
        },
        lessons: B2_NEG_MODULE_2_LESSONS
      },
      {
        title: "Módulo 3: Acuerdos y Resolución de Conflictos",
        topics: [
          "Manejo de bloqueos (deadlocks)",
          "Cierre del trato",
          "Resolución de conflictos",
          "Seguimiento post-negociación"
        ],
        grammar: [
          "Third and Mixed Conditionals (analizar lo ocurrido)",
          "Modal verbs in the past (should have, could have)",
          "Advanced linkers for conflict resolution"
        ],
        vocabulary: [
          "Closing the deal",
          "Consensus and win-win outcomes",
          "Conflict resolution (mediation, compromise)",
          "Follow-up terminology"
        ],
        skills: {
          reading: ["Revisar acuerdos finales", "Leer minutas de reuniones"],
          writing: ["Resumen del acuerdo (Minutes of Agreement)", "Email de seguimiento"],
          listening: ["Confirmación de términos finales", "Manejo de objeciones"],
          speaking: ["Resolver un punto de conflicto", "Cerrar la negociación formalmente"]
        },
        lessons: B2_NEG_MODULE_3_LESSONS
      }
    ]
  }
};

// Helper function to get curriculum by level and optional goal
export function getCurriculumByLevel(level: string, goal?: string): LevelCurriculum | null {
  if (goal) {
    const goalLevelKey = `${goal.toUpperCase()}_${level.toUpperCase()}`;
    if (CURRICULUM_BY_LEVEL[goalLevelKey]) {
      return CURRICULUM_BY_LEVEL[goalLevelKey];
    }
  }
  return CURRICULUM_BY_LEVEL[level.toUpperCase()] || null;
}

// Helper function to get all levels
export function getAllLevels(): string[] {
  return Object.keys(CURRICULUM_BY_LEVEL);
}

// Helper function to get curriculum summary
export function getCurriculumSummary(level: string): {
  level: string;
  cefr: string;
  description: string;
  modulesCount: number;
  totalTopics: number;
} | null {
  const curriculum = getCurriculumByLevel(level);
  if (!curriculum) return null;

  const totalTopics = curriculum.modules.reduce(
    (acc, module) => acc + module.topics.length,
    0
  );

  return {
    level: curriculum.level,
    cefr: curriculum.cefr,
    description: curriculum.description,
    modulesCount: curriculum.modules.length,
    totalTopics
  };
}
