// Currículum completo basado en especificaciones de Cambridge English (CEFR)
// A1 - C2: Grammar, Vocabulary, Topics, Skills

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
      name: "Certificación Nivel A1",
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

  A2: {
    level: "A2",
    cefr: "Elemental",
    description: "Comunicación en tareas simples y rutinarias con información directa",
    duration: "10-12 semanas",
    examFormat: {
      name: "Certificación Nivel A2",
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
      name: "Certificación Nivel B1",
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
            "Seguir interviews y discusiones"
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
            "Expresar opiniones fundamentadas"
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
      name: "Certificación Nivel B2",
      parts: ["Reading & Use of English", "Writing", "Listening", "Speaking"],
      duration: "209 minutos total"
    },
    modules: [
      {
        title: "Módulo 1: Narrativas Complejas y Análisis",
        topics: [
          "Literatura y crítica",
          "Cine, art y cultura",
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
          "Sociedad contemporánea"
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
            "Persuadir y negociar"
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
      name: "Certificación Nivel C1",
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
          "Comunicación de alto nivel",
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
            "Apreciar estilo y recursos retóricos"
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
        title: "Módulo 3: Dominio del Discurso",
        topics: [
          "Análisis del discurso",
          "Presentaciones extensas",
          "Negociación y persuasión",
          "Escritura técnica y científica",
          "Networking profesional"
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
          "Léxico sofisticado para debate",
          "Conectores de alto nivel",
          "Expresiones para networking",
          "Colocaciones profesionales"
        ],
        skills: {
          reading: [
            "Analizar informes complejos",
            "Leer artículos técnicos especializados",
            "Evaluar propuestas detalladas"
          ],
          writing: [
            "Redactar propuestas complejas",
            "Escribir informes ejecutivos",
            "Producir correspondencia formal sofisticada"
          ],
          listening: [
            "Comprender reuniones y debates complejos",
            "Seguir negociaciones extensas",
            "Entender jerga profesional avanzada"
          ],
          speaking: [
            "Hacer presentaciones de alto impacto",
            "Negociar acuerdos complejos",
            "Liderar discusiones de grupo",
            "Manejar situaciones delicadas con tacto"
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
      name: "Certificación Nivel C2",
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
          "Neologismos y lenguaje contemporáneo",
          "Vocabulario para análisis crítico sofisticado"
        ],
        skills: {
          reading: [
            "Comprender cualquier texto escrito",
            "Analizar textos literarios clásicos y contemporáneos",
            "Apreciar matices estilísticos sutiles",
            "Comprender referencias culturales e históricas"
          ],
          writing: [
            "Escribir con elegancia y precisión",
            "Producir textos académicos de nivel investigador",
            "Escribir literatura creativa de calidad",
            "Adaptar estilo a cualquier contexto con maestría"
          ],
          listening: [
            "Comprender cualquier tipo de discurso oral",
            "Seguir conversaciones a velocidad nativa",
            "Entender todos los acentos y dialectos",
            "Captar ironía, sarcasmo y humor sofisticado"
          ],
          speaking: [
            "Expresarte con fluidez de hablante nativo",
            "Usar lenguaje idiomático de forma natural",
            "Argumentar con sofisticación retórica",
            "Participar en debates de alto nivel"
          ]
        }
      },
      {
        title: "Módulo 2: Maestría Estilística y Retórica",
        topics: [
          "Retórica avanzada",
          "Análisis del discurso",
          "Estilística y pragmática",
          "Comunicación intercultural",
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
            "Crear contenido literario original",
            "Dominar múltiples géneros escritos"
          ],
          listening: [
            "Comprender conferencias académicas",
            "Seguir debates filosóficos complejos",
            "Entender teatro, cine y poesía",
            "Captar todos los niveles de significado"
          ],
          speaking: [
            "Dar charlas magistrales",
            "Participar en debates de alto nivel intelectual",
            "Hacer presentaciones académicas complejas",
            "Expresar ideas abstractas con precisión total"
          ]
        }
      },
      {
        title: "Módulo 3: Dominio Cultural y Profesional",
        topics: [
          "Inglés académico de investigación",
          "Literatura inglesa",
          "Traducción e interpretación",
          "Análisis de medios",
          "Discurso público"
        ],
        grammar: [
          "Grammatical accuracy at native-speaker level",
          "Mastery of all aspects of syntax",
          "Complete command of formal and informal registers",
          "Understanding of historical grammar variations"
        ],
        vocabulary: [
          "Vocabulario especializado",
          "Terminología de investigación",
          "Vocabulario de traducción",
          "Expresiones culturales y literarias",
          "Matices semánticos sutiles"
        ],
        skills: {
          reading: [
            "Leer textos complejos de cualquier campo",
            "Analizar documentos históricos",
            "Evaluar traducciones"
          ],
          writing: [
            "Escribir para publicación",
            "Producir traducciones de calidad",
            "Escribir crítica profesional"
          ],
          listening: [
            "Comprender cualquier programa especializado",
            "Seguir podcasts técnicos",
            "Captar matices en contextos complejos"
          ],
          speaking: [
            "Realizar interpretación",
            "Participar en conferencias",
            "Debatir en cualquier contexto",
            "Expresarte con la sutileza de un nativo"
          ]
        }
      }
    ]
  }
};

// Helper function to get curriculum by level and optional goal
export function getCurriculumByLevel(level: string, goal?: string): LevelCurriculum | null {
  // Goal is now ignored as we only have general curriculum
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
