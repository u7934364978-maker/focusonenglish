import { CurriculumModule } from '../curriculum-data';
import { ADMIN_A2_FULL_CURRICULUM } from './admin-a2';

export const ADMIN_SECTOR_CURRICULUM: Record<string, CurriculumModule[] | any> = {
  A1: [
    {
      title: "Trimestre 1: La Oficina y Presentaciones (Mes 1-3)",
      topics: [
        "Saludos formales e informales en la oficina",
        "Objetos comunes de oficina y suministros",
        "Información personal y formularios de contacto",
        "El alfabeto y deletreo de nombres/correos"
      ],
      grammar: [
        "Verb 'to be' en presentaciones profesionales",
        "Pronombres personales y posesivos",
        "Artículos (a/an/the) con objetos de oficina"
      ],
      vocabulary: [
        "Desk, Chair, Computer, Telephone, Printer",
        "Pen, Paper, Folder, Stapler, Notebook",
        "Manager, Assistant, Colleague, Receptionist",
        "First name, Surname, Email address, Extension"
      ],
      skills: {
        reading: ["Lectura de tarjetas de visita y etiquetas"],
        writing: ["Completar formularios de registro de visitantes"],
        listening: ["Entender nombres y números de teléfono"],
        speaking: ["Presentarse y saludar a compañeros"]
      },
      weeks: [
        { title: "Semana 1: Saludos y Presentaciones", lessons: 3 },
        { title: "Semana 2: La Hora y Citas", lessons: 3 },
        { title: "Semana 3: Cargos y Roles Profesionales", lessons: 3 },
        { title: "Semana 4: Entrevistas y Datos Personales", lessons: 3 },
        { title: "Semana 5: Emails y Peticiones Formales", lessons: 3 },
        { title: "Semana 6: Reuniones y Calendarios", lessons: 3 },
        { title: "Semana 7: Suministros e Inventario", lessons: 3 },
        { title: "Semana 8: Correspondencia Comercial", lessons: 3 },
        { title: "Semana 9: Comunicación Telefónica", lessons: 3 },
        { title: "Semana 10: Uso de Equipos de Oficina", lessons: 3 },
        { title: "Semana 11: Etiqueta y Protocolo", lessons: 3 },
        { title: "Semana 12: Repaso y Proyecto Trimestral", lessons: 3 }
      ]
    },
    {
      title: "Trimestre 2: Horarios y Tareas Diarias (Mes 4-6)",
      topics: [
        "La hora y horarios de oficina",
        "Días de la semana y meses del año",
        "Actividades administrativas básicas",
        "Localización de departamentos en el edificio"
      ],
      grammar: [
        "Present Simple para rutinas laborales",
        "Preposiciones de tiempo (in, on, at)",
        "Preposiciones de lugar (next to, across from)"
      ],
      vocabulary: [
        "Morning, Afternoon, Evening, Lunch break",
        "To type, To call, To print, To file",
        "Human Resources, Accounting, Marketing, IT",
        "Monday to Friday, Weekend, Deadline"
      ],
      skills: {
        reading: ["Lectura de un calendario de oficina simple"],
        writing: ["Escribir una lista de tareas (to-do list)"],
        listening: ["Entender instrucciones de dirección básicas"],
        speaking: ["Decir la hora y hablar de la jornada diaria"]
      },
      weeks: [
        { title: "Semana 13: Preparación de Entrevistas", lessons: 3 },
        { title: "Semana 14: Preguntas Básicas", lessons: 3 },
        { title: "Semana 15: Vestimenta y Lenguaje Corporal", lessons: 3 },
        { title: "Semana 16: Fortalezas y Debilidades", lessons: 3 },
        { title: "Semana 17: Experiencia Laboral", lessons: 3 },
        { title: "Semana 18: Educación y Formación", lessons: 3 },
        { title: "Semana 19: Perfiles en LinkedIn", lessons: 3 },
        { title: "Semana 20: El Curriculum Vitae", lessons: 3 },
        { title: "Semana 21: Descripción de Puestos", lessons: 3 },
        { title: "Semana 22: Tareas Diarias", lessons: 3 },
        { title: "Semana 23: Responsabilidades", lessons: 3 },
        { title: "Semana 24: Repaso del Trimestre 2", lessons: 3 }
      ]
    },
    {
      title: "Trimestre 3: Comunicación Básica (Mes 7-9)",
      topics: [
        "Habilidades simples (Can/Can't)",
        "Pedir y dar permiso en la oficina",
        "Mensajes cortos y recordatorios",
        "Proyecto Final: Simulación de recepción de un visitante"
      ],
      grammar: [
        "Can / Can't para habilidades y peticiones",
        "Adverbios de frecuencia (always, sometimes, never)",
        "Imperativos para instrucciones simples"
      ],
      vocabulary: [
        "To help, To use, To send, To receive",
        "Message, Note, Reminder, Post-it",
        "Coffee machine, Kitchen, Restroom, Exit",
        "Welcome, Please, Thank you, You're welcome"
      ],
      skills: {
        reading: ["Lectura de notas cortas en la oficina"],
        writing: ["Escribir un mensaje de ausencia corto"],
        listening: ["Identificar tareas en un diálogo simple"],
        speaking: ["Pedir ayuda con equipos de oficina"]
      },
      weeks: [
        { title: "Semana 25: Introducción a Emails", lessons: 3 },
        { title: "Semana 26: Saludos y Despedidas en Emails", lessons: 3 },
        { title: "Semana 27: Solicitudes Cortas", lessons: 3 },
        { title: "Semana 28: Emails de Ausencia", lessons: 3 },
        { title: "Semana 29: Introducción a Reuniones", lessons: 3 },
        { title: "Semana 30: El Orden del Día (Agenda)", lessons: 3 },
        { title: "Semana 31: Estar de Acuerdo/Desacuerdo", lessons: 3 },
        { title: "Semana 32: Participación Simple", lessons: 3 },
        { title: "Semana 33: Etiqueta en Videollamadas", lessons: 3 },
        { title: "Semana 34: Mensajes de Chat (Slack/Teams)", lessons: 3 },
        { title: "Semana 35: Preparación de Proyecto Final", lessons: 3 },
        { title: "Semana 36: Proyecto Final y Repaso", lessons: 3 }
      ]
    }
  ],
  A2: ADMIN_A2_FULL_CURRICULUM,
  B1: [
    {
      title: "Trimestre 1: Correspondencia Profesional (Mes 1-3)",
      topics: [
        "Estructura de correos electrónicos formales",
        "Redacción de cartas de solicitud y respuesta",
        "Gestión de quejas y reclamaciones",
        "Etiqueta profesional en la comunicación escrita"
      ],
      grammar: [
        "Present Perfect vs Past Simple en reportes",
        "Modal verbs for obligation and advice (must, should)",
        "Passive Voice en procesos administrativos"
      ],
      vocabulary: [
        "Dear, Sincerely, Regards, Attachment",
        "Apology, Complaint, Feedback, Inquiry",
        "Policy, Procedure, Guidelines, Compliance",
        "Draft, Review, Approve, Submit"
      ],
      skills: {
        reading: ["Análisis de correspondencia comercial variada"],
        writing: ["Redacción de correos para diferentes propósitos"],
        listening: ["Seguir una discusión sobre políticas de oficina"],
        speaking: ["Expresar opiniones y sugerencias en reuniones"]
      }
    },
    {
      title: "Trimestre 2: Gestión de Proyectos y Equipos (Mes 4-6)",
      topics: [
        "Seguimiento de proyectos y plazos",
        "Coordinación de tareas en equipo",
        "Introducción a presupuestos de oficina",
        "Uso de herramientas de gestión (CRM, ERP)"
      ],
      grammar: [
        "Past Continuous vs Past Simple en incidentes",
        "Conditionals Type 1 & 2 para planificación",
        "Relative Clauses para definir procesos"
      ],
      vocabulary: [
        "Project manager, Milestone, Deadline, Task",
        "Budget, Expense, Resource, Allocation",
        "Update, Progress, Delay, On track",
        "Database, Software, Entry, record"
      ],
      skills: {
        reading: ["Lectura de cronogramas y planes de proyecto"],
        writing: ["Escribir reportes de progreso semanales"],
        listening: ["Entender actualizaciones de estado en reuniones"],
        speaking: ["Presentar el estado de una tarea asignada"]
      }
    },
    {
      title: "Trimestre 3: Recursos Humanos y Reclutamiento (Mes 7-9)",
      topics: [
        "Descripción de puestos de trabajo",
        "Procesos de selección y entrevistas",
        "Beneficios y contratos laborales",
        "Proyecto Final: Simulación de una entrevista de trabajo"
      ],
      grammar: [
        "Used to para hábitos laborales pasados",
        "Gerunds vs Infinitives",
        "Reported Speech básico para mensajes"
      ],
      vocabulary: [
        "Candidate, Interview, Skill, Qualification",
        "Salary, Benefit, Pension, Contract",
        "Hire, Fire, Resign, Promote",
        "Job description, Requirement, Experience"
      ],
      skills: {
        reading: ["Análisis de anuncios de empleo y CVs"],
        writing: ["Escribir una carta de presentación (cover letter)"],
        listening: ["Entender entrevistas y descripciones de perfil"],
        speaking: ["Describir habilidades y experiencias propias"]
      }
    }
  ],
  B2: [
    {
      title: "Trimestre 1: Gestión Administrativa Avanzada (Mes 1-3)",
      topics: [
        "Optimización de procesos de oficina",
        "Gestión de archivos y protección de datos (GDPR)",
        "Redacción de actas de reuniones complejas",
        "Liderazgo en el soporte administrativo"
      ],
      grammar: [
        "Mixed Conditionals para análisis de situaciones",
        "Future Continuous y Future Perfect para metas",
        "Complex Passives en reportes oficiales"
      ],
      vocabulary: [
        "Efficiency, Streamline, Workflow, Bottleneck",
        "Privacy, Confidentiality, Encryption, Breach",
        "Minutes, Action items, Agenda, Quorum",
        "Supervision, Delegation, Accountability"
      ],
      skills: {
        reading: ["Interpretación de regulaciones y leyes de privacidad"],
        writing: ["Redacción de actas detalladas y propuestas de mejora"],
        listening: ["Seguir reuniones de alta dirección"],
        speaking: ["Proponer cambios en los flujos de trabajo"]
      }
    },
    {
      title: "Trimestre 2: Relaciones Públicas y Eventos (Mes 4-6)",
      topics: [
        "Organización de conferencias y viajes corporativos",
        "Comunicación con proveedores y negociación de precios",
        "Gestión de la reputación corporativa",
        "Redacción de comunicados de prensa básicos"
      ],
      grammar: [
        "Modal verbs of deduction (must have, could have)",
        "Inversion for formal emphasis",
        "Wish / If only para lamentos y deseos"
      ],
      vocabulary: [
        "Venue, Catering, Logistics, Itinerary",
        "Supplier, Vendor, Quote, Negotiate",
        "Brand, Public image, Stakeholder, Media",
        "Press release, Announcement, Statement"
      ],
      skills: {
        reading: ["Análisis de contratos de servicios y presupuestos"],
        writing: ["Elaboración de itinerarios detallados y notas de prensa"],
        listening: ["Seguir negociaciones telefónicas complejas"],
        speaking: ["Negociar términos con proveedores externos"]
      }
    },
    {
      title: "Trimestre 3: Estrategia y Ética Empresarial (Mes 7-9)",
      topics: [
        "Cultura corporativa y valores",
        "Ética en la administración pública y privada",
        "Sostenibilidad y Responsabilidad Social (RSC)",
        "Proyecto Final: Creación de un manual de bienvenida corporativo"
      ],
      grammar: [
        "Advanced relative clauses",
        "Participle clauses para resumir información",
        "Subjunctive para recomendaciones formales"
      ],
      vocabulary: [
        "Integrity, Transparency, Code of conduct",
        "Sustainability, Environment, Community, CSR",
        "Vision, Mission, Strategy, Goals",
        "Whistleblowing, Corruption, Compliance"
      ],
      skills: {
        reading: ["Lectura de informes de sostenibilidad y ética"],
        writing: ["Redacción de políticas corporativas"],
        listening: ["Entender discursos sobre visión empresarial"],
        speaking: ["Defender posturas éticas en debates laborales"]
      }
    }
  ],
  C1: [
    {
      title: "Trimestre 1: Gestión Estratégica y Dirección (Mes 1-3)",
      topics: [
        "Planificación estratégica a nivel ejecutivo",
        "Gestión del cambio organizacional",
        "Análisis DAFO/SWOT avanzado",
        "Toma de decisiones bajo presión"
      ],
      grammar: [
        "Mastery of register: De lo informal a lo ejecutivo",
        "Advanced hedging para matizar opiniones",
        "Rhetorical devices para persuasión"
      ],
      vocabulary: [
        "Strategic alignment, Core competencies, SWOT",
        "Change management, Resilience, Adaptation",
        "Stakeholder engagement, Buy-in, Consensus",
        "Mitigation, Contingency plan, Risk assessment"
      ],
      skills: {
        reading: ["Análisis de planes estratégicos de 30+ páginas"],
        writing: ["Redacción de informes ejecutivos y memorandos"],
        listening: ["Seguir conferencias sobre gestión y liderazgo"],
        speaking: ["Liderar presentaciones ante el comité de dirección"]
      }
    },
    {
      title: "Trimestre 2: Gobernanza y Relaciones Institucionales (Mes 4-6)",
      topics: [
        "Estructuras de gobierno corporativo",
        "Relaciones con organismos gubernamentales",
        "Diplomacia corporativa y protocolo internacional",
        "Gestión de crisis de alto nivel"
      ],
      grammar: [
        "Subjunctive en contextos legales y de gobernanza",
        "Causative forms avanzadas",
        "Precision in complex sentence structures"
      ],
      vocabulary: [
        "Board of directors, Trustee, Oversight, Mandate",
        "Lobbying, Regulatory body, Public policy",
        "Etiquette, Protocol, Cross-cultural communication",
        "Crisis management, Damage control, Recovery"
      ],
      skills: {
        reading: ["Lectura de documentos de política pública y estatutos"],
        writing: ["Redacción de comunicaciones institucionales"],
        listening: ["Entender debates políticos y de regulación"],
        speaking: ["Representar a la organización en foros externos"]
      }
    },
    {
      title: "Trimestre 3: Innovación y Liderazgo Global (Mes 7-9)",
      topics: [
        "Liderazgo en entornos multiculturales y globales",
        "Innovación en procesos administrativos (IA y Automatización)",
        "Pensamiento crítico aplicado a la gestión",
        "Proyecto Final: Diseño de una estrategia de expansión global"
      ],
      grammar: [
        "Nuance and subtlety in high-level negotiations",
        "Advanced use of metaphors and idioms in business",
        "Perfecting the narrative in corporate storytelling"
      ],
      vocabulary: [
        "Disruption, Automation, Artificial Intelligence",
        "Global mindset, Cultural intelligence (CQ)",
        "Critical thinking, Problem-solving, Synthesis",
        "Legacy, Visionary, Influence, Impact"
      ],
      skills: {
        reading: ["Análisis de tendencias globales y whitepapers"],
        writing: ["Redacción de artículos de opinión para el sector"],
        listening: ["Seguir 'Town Hall meetings' globales"],
        speaking: ["Liderar la visión estratégica en entornos complejos"]
      }
    }
  ],
  C2: [
    {
      title: "Trimestre 1: Filosofía de Gestión y Alta Estrategia (Mes 1-3)",
      topics: [
        "Teorías avanzadas de gestión y su aplicación",
        "Geopolítica y economía global para ejecutivos",
        "Liderazgo auténtico y autoconocimiento",
        "Análisis de casos de estudio complejos (Harvard style)"
      ],
      grammar: [
        "Flawless integration of complex grammatical structures",
        "Exceptional precision in vocabulary choice",
        "Total control of tone and style for any audience"
      ],
      vocabulary: [
        "Paradigm shift, Epistemology of management",
        "Geopolitical risk, Macroeconomic trends",
        "Authenticity, Emotional intelligence (EQ), Self-awareness",
        "Case study, Synthesis, Evaluation, Critique"
      ],
      skills: {
        reading: ["Lectura crítica de literatura de gestión académica"],
        writing: ["Redacción de tesis y libros blancos (white papers)"],
        listening: ["Comprensión absoluta de cualquier registro o acento"],
        speaking: ["Debatir a nivel de experto sobre cualquier tema del sector"]
      }
    }
  ]
};
