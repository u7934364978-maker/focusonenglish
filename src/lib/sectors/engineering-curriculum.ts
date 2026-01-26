import { CurriculumModule } from '../curriculum-data';

export const ENGINEERING_SECTOR_CURRICULUM: Record<string, CurriculumModule[]> = {
  A1: [
    {
      title: "Trimestre 1: Herramientas y Seguridad Básica (Mes 1-3)",
      topics: [
        "Nombres de herramientas: Martillo, destornillador, llave",
        "Colores de seguridad y señales en la planta",
        "Información personal y registro de entrada",
        "Saludos y cortesía básica en el equipo técnico"
      ],
      grammar: [
        "Verb 'to be' para identificar herramientas",
        "Pronombres personales y posesivos",
        "Present Simple para normas de seguridad básicas"
      ],
      vocabulary: [
        "Hammer, Screwdriver, Wrench, Pliers",
        "Helmet, Boots, Gloves, Vest",
        "Red (Stop), Yellow (Caution), Green (Safe)",
        "One, Two, Three... Metre, Kilo"
      ],
      skills: {
        reading: ["Lectura de etiquetas de herramientas"],
        writing: ["Completar un registro de entrada a la obra"],
        listening: ["Entender nombres de herramientas y colores"],
        speaking: ["Presentarse y nombrar equipo de protección básico"]
      }
    },
    {
      title: "Trimestre 2: Partes, Piezas y el Taller (Mes 4-6)",
      topics: [
        "Piezas comunes: Tornillo, tuerca, arandela",
        "Localización en la fábrica y el almacén",
        "Preposiciones de lugar en la caja de herramientas",
        "Números y medidas simples (cm, mm, kg)"
      ],
      grammar: [
        "There is / There are para materiales",
        "Demostrativos (this, that, these, those)",
        "Preposiciones de lugar básicas (on, in, under)"
      ],
      vocabulary: [
        "Screw, Bolt, Nut, Washer",
        "Box, Shelf, Bin, Workshop",
        "Heavy, Light, Long, Short",
        "On the table, In the box, Under the machine"
      ],
      skills: {
        reading: ["Lectura de medidas y códigos de piezas"],
        writing: ["Escribir una lista de materiales corta"],
        listening: ["Entender instrucciones de localización simples"],
        speaking: ["Pedir una pieza o herramienta específica"]
      }
    },
    {
      title: "Trimestre 3: Mi Trabajo en Ingeniería (Mes 7-9)",
      topics: [
        "Roles técnicos: Ingeniero, operario, técnico",
        "Acciones diarias: Medir, cortar, unir",
        "Habilidades simples (Can/Can't)",
        "Proyecto Final: Simulación de revisión de seguridad inicial"
      ],
      grammar: [
        "Can / Can't para permisos y habilidades",
        "Adverbios de frecuencia básicos",
        "Present Continuous para tareas actuales"
      ],
      vocabulary: [
        "Engineer, Technician, Worker, Manager",
        "To measure, To cut, To fix, To check",
        "Work, Help, Safety, Machine",
        "Always, Usually, Never"
      ],
      skills: {
        reading: ["Lectura de avisos de seguridad muy cortos"],
        writing: ["Redacción de una nota de 'máquina fuera de servicio'"],
        listening: ["Identificar tareas en una charla de seguridad"],
        speaking: ["Describir lo que haces en tu puesto de trabajo"]
      }
    }
  ],
  A2: [
    {
      title: "Trimestre 1: Reparaciones y el Pasado (Mes 1-3)",
      topics: [
        "Descripción de fallos mecánicos simples",
        "Reportar reparaciones pasadas",
        "Uso de manuales de montaje básicos",
        "Comparación de materiales (metal vs plástico)"
      ],
      grammar: [
        "Past Simple de verbos técnicos comunes",
        "Comparativos y superlativos de materiales",
        "Conectores de secuencia (first, then, after)"
      ],
      vocabulary: [
        "Broken, Loose, Stuck, Fixed",
        "Measured, Cut, Joined, Checked (past)",
        "Hard, Soft, Strong, Weak",
        "Yesterday, Last shift, This morning"
      ],
      skills: {
        reading: ["Lectura de instrucciones de montaje básicas"],
        writing: ["Redacción de un reporte de avería corto"],
        listening: ["Entender la descripción de un problema mecánico"],
        speaking: ["Explicar qué reparaste ayer"]
      }
    },
    {
      title: "Trimestre 2: Mantenimiento y Planes Futuros (Mes 4-6)",
      topics: [
        "Planes de mantenimiento preventivo",
        "Pedido de nuevas herramientas y recambios",
        "Seguridad avanzada: Bloqueo y etiquetado (LOTO)",
        "Predicciones sobre el estado de la máquina"
      ],
      grammar: [
        "Future with 'going to' para planes técnicos",
        "Will para predicciones y advertencias",
        "First Conditional para avisos de seguridad técnica"
      ],
      vocabulary: [
        "Maintenance, Schedule, Plan, Replace",
        "Order, Tool, Part, Spare",
        "Warning, Danger, Lock, Tag",
        "If the light is red... stop the machine..."
      ],
      skills: {
        reading: ["Lectura de calendarios de mantenimiento"],
        writing: ["Escribir un pedido de herramientas simple"],
        listening: ["Entender avisos de peligro en la planta"],
        speaking: ["Hablar sobre el mantenimiento de la próxima semana"]
      }
    },
    {
      title: "Trimestre 3: Instrucciones Técnicas y Guía (Mes 7-9)",
      topics: [
        "Instrucciones paso a paso para operar máquinas",
        "Uso de listas de comprobación (Checklists)",
        "Sugerencias de mejora de procesos",
        "Proyecto Final: Simulación de formación de seguridad a un novato"
      ],
      grammar: [
        "Imperativos para dar instrucciones técnicas",
        "Adverbios de modo (safely, precisely)",
        "Present Perfect para tareas completadas"
      ],
      vocabulary: [
        "Start, Stop, Press, Turn",
        "Checklist, Verify, OK, Error",
        "Faster, Safer, Better, Recommendation",
        "I have checked, I have finished"
      ],
      skills: {
        reading: ["Lectura de listas de comprobación de seguridad"],
        writing: ["Redacción de una guía de operación de 3 pasos"],
        listening: ["Entender una petición de asistencia técnica"],
        speaking: ["Dar instrucciones de apagado de emergencia"]
      }
    }
  ],
  B1: [
    {
      title: "Trimestre 1: Fundamentos de Ingeniería y Materiales (Mes 1-3)",
      topics: [
        "Propiedades de los materiales y selección",
        "Herramientas y unidades de medida (S.I. vs Imperial)",
        "Seguridad en el taller y en la obra (PPE)",
        "Dibujo técnico básico y simbología"
      ],
      grammar: [
        "Present Simple for physical laws and properties",
        "Imperatives for safety instructions",
        "Comparatives for material selection"
      ],
      vocabulary: [
        "Strength, Hardness, Elasticity, Conductive",
        "Steel, Aluminum, Concrete, Polymers, Composites",
        "Calipers, Micrometer, Torque, Tolerance",
        "Helmet, Goggles, Gloves, Hazard, Risk"
      ],
      skills: {
        reading: ["Lectura de hojas de datos de materiales (MSDS)"],
        writing: ["Redacción de informes de seguridad y listas de materiales"],
        listening: ["Comprensión de instrucciones de taller y mediciones"],
        speaking: ["Descripción de componentes y sus propiedades"]
      }
    },
    {
      title: "Trimestre 2: Procesos de Fabricación y Diseño (Mes 4-6)",
      topics: [
        "Procesos de mecanizado y fabricación",
        "Introducción al CAD/CAM",
        "Mantenimiento preventivo y correctivo",
        "Control de calidad básico"
      ],
      grammar: [
        "Passive Voice for manufacturing processes",
        "Prepositions of position and movement in mechanics",
        "Modals of possibility for troubleshooting (could be, may be)"
      ],
      vocabulary: [
        "Milling, Turning, Welding, Casting, Molding",
        "CAD, Drafting, Prototype, Assembly",
        "Routine maintenance, Breakdown, Spare parts",
        "Defect, Inspection, Tolerance, Specification"
      ],
      skills: {
        reading: ["Lectura de planos técnicos y diagramas de flujo"],
        writing: ["Redacción de registros de mantenimiento"],
        listening: ["Seguir explicaciones sobre procesos de fabricación"],
        speaking: ["Explicación de fallos mecánicos y reparaciones simples"]
      }
    },
    {
      title: "Trimestre 3: Gestión de Proyectos y Sostenibilidad (Mes 7-9)",
      topics: [
        "Fases de un proyecto de ingeniería",
        "Gestión de residuos y medio ambiente",
        "Energías renovables básicas",
        "Proyecto Final: Simulación de inspección técnica"
      ],
      grammar: [
        "Future forms for project scheduling",
        "Connectors of cause and effect in engineering reports",
        "First Conditional for operational warnings"
      ],
      vocabulary: [
        "Gantt chart, Milestone, Deadline, Resources",
        "Recycling, Emissions, Sustainability, Carbon footprint",
        "Solar, Wind, Hydroelectric, Efficiency",
        "Regulation, Standard, Compliance, Certification"
      ],
      skills: {
        reading: ["Lectura de cronogramas de proyecto y normas ambientales"],
        writing: ["Redacción de propuestas de mejora de eficiencia"],
        listening: ["Comprensión de informes de progreso de obra"],
        speaking: ["Presentación de resultados de inspección básicos"]
      }
    }
  ],
  B2: [
    {
      title: "Trimestre 1: Ingeniería Mecánica y Eléctrica Avanzada (Mes 1-3)",
      topics: [
        "Termodinámica y transferencia de calor",
        "Sistemas de control y automatización (PLC)",
        "Circuitos eléctricos y electrónica industrial",
        "Análisis de fallos y Root Cause Analysis (RCA)"
      ],
      grammar: [
        "Complex passives for technical documentation",
        "Reporting verbs for technical analysis",
        "Modal verbs of deduction for system diagnostic"
      ],
      vocabulary: [
        "Conduction, Convection, Radiation, Entropy",
        "Sensors, Actuators, Feedback loop, PLC",
        "Voltage, Current, Resistance, Impedance",
        "Failure mode, Reliability, FMEA, RCA"
      ],
      skills: {
        reading: ["Análisis de manuales técnicos complejos y esquemas"],
        writing: ["Redacción de informes detallados de análisis de fallos"],
        listening: ["Seguir presentaciones técnicas sobre automatización"],
        speaking: ["Presentación de soluciones de ingeniería complejas"]
      }
    },
    {
      title: "Trimestre 2: Diseño Industrial y Simulación (Mes 4-6)",
      topics: [
        "Análisis de elementos finitos (FEA)",
        "Dinámica de fluidos computacional (CFD)",
        "Optimización de diseños y materiales",
        "Normativas internacionales (ISO, ASME, Eurocodes)"
      ],
      grammar: [
        "Conditionals Type 2 & 3 for simulation scenarios",
        "Future Perfect for performance predictions",
        "Advanced relative clauses for defining complex parts"
      ],
      vocabulary: [
        "Stress, Strain, Deformation, Finite element",
        "Turbulence, Laminar flow, Pressure drop, Viscosity",
        "Topology optimization, Weight reduction",
        "Standardization, Regulatory framework, Compliance"
      ],
      skills: {
        reading: ["Lectura de reportes de simulación y estándares técnicos"],
        writing: ["Redacción de especificaciones técnicas de diseño"],
        listening: ["Comprensión de discusiones sobre validación de diseño"],
        speaking: ["Defensa de decisiones técnicas basadas en simulación"]
      }
    },
    {
      title: "Trimestre 3: Dirección de Operaciones e Ingeniería Verde (Mes 7-9)",
      topics: [
        "Gestión de la cadena de suministro (Supply Chain)",
        "Ingeniería circular y ecodiseño",
        "Gestión de la energía y eficiencia industrial",
        "Proyecto Final: Rediseño sostenible de un proceso industrial"
      ],
      grammar: [
        "Subjunctive for strategic recommendations",
        "Connectors of contrast for comparing technical solutions",
        "Advanced use of nuances in technical evaluations"
      ],
      vocabulary: [
        "Procurement, Logistics, Inventory, Just-in-time",
        "Life cycle assessment (LCA), Biodegradability",
        "Audit energy, Renewable integration, Smart grid",
        "Stakeholder management, Risk mitigation, ROI"
      ],
      skills: {
        reading: ["Análisis de reportes de sostenibilidad corporativa"],
        writing: ["Redacción de propuestas de inversión técnica (CAPEX)"],
        listening: ["Comprensión de conferencias sobre ingeniería sostenible"],
        speaking: ["Liderazgo en reuniones de estrategia operacional"]
      }
    }
  ],
  C1: [
    {
      title: "Trimestre 1: Innovación en Ingeniería y R&D (Mes 1-3)",
      topics: [
        "Nanotecnología y materiales avanzados",
        "Robótica avanzada e Inteligencia Artificial aplicada",
        "Gestión de la innovación y patentes",
        "Modelización matemática compleja"
      ],
      grammar: [
        "Advanced hedging in scientific research writing",
        "Inversion for formal technical keynote speeches",
        "Precision in descriptive grammar for complex logic"
      ],
      vocabulary: [
        "Nanomaterials, Graphene, Smart materials",
        "Autonomous systems, Machine learning, Computer vision",
        "Intellectual property, R&D strategy, Disruptive tech",
        "Differential equations, Stochastic modeling"
      ],
      skills: {
        reading: ["Evaluación crítica de papers de ingeniería"],
        writing: ["Redacción de propuestas para proyectos de I+D"],
        listening: ["Seguir ponencias de expertos internacionales"],
        speaking: ["Presentación de innovaciones ante inversores técnicos"]
      }
    },
    {
      title: "Trimestre 2: Liderazgo de Grandes Proyectos e Infraestructuras (Mes 4-6)",
      topics: [
        "Dirección de mega-proyectos internacionales",
        "Ingeniería de sistemas y gestión de la complejidad",
        "Ética en la ingeniería y responsabilidad social",
        "Gestión de crisis y resiliencia en infraestructuras"
      ],
      grammar: [
        "Subjunctive and hypothetical structures in strategy debate",
        "Rhetorical devices for leadership and persuasion",
        "Causative forms in strategic planning contexts"
      ],
      vocabulary: [
        "Megaproject, Stakeholder engagement, EPC contracts",
        "Systems thinking, Interface management, Integration",
        "Professional ethics, Social license to operate",
        "Business continuity, Critical infrastructure, Resilience"
      ],
      skills: {
        reading: ["Análisis de pliegos de condiciones internacionales"],
        writing: ["Redacción de visiones estratégicas de ingeniería"],
        listening: ["Comprensión de debates en foros de infraestructura mundial"],
        speaking: ["Liderazgo en negociaciones técnicas de alto nivel"]
      }
    },
    {
      title: "Trimestre 3: Ingeniería del Futuro y Estrategia Global (Mes 7-9)",
      topics: [
        "Ingeniería espacial y exploración tecnológica",
        "Hidrógeno verde y el futuro de la energía",
        "Sostenibilidad global y cambio climático",
        "Proyecto Final: Diseño de una solución de ingeniería para un reto global"
      ],
      grammar: [
        "Mastery of register: Technical vs Executive vs Political",
        "Advanced use of nuances and subtlety in complex engineering topics",
        "Integration of all high-level structures in strategic discourse"
      ],
      vocabulary: [
        "Aerospace, Satellites, Propulsion systems",
        "Electrolysis, Decarbonization, Energy transition",
        "Climate adaptation, Geoengineering, Net zero",
        "Global leadership, Strategic foresight, Innovation"
      ],
      skills: {
        reading: ["Lectura de reportes sobre tendencias emergentes tecnológicas"],
        writing: ["Redacción de manifiestos técnicos sobre el futuro"],
        listening: ["Seguir lanzamientos de misiones tecnológicas"],
        speaking: ["Liderazgo en foros internacionales de ingeniería"]
      }
    }
  ],
  C2: [
    {
      title: "Trimestre 1: Ingeniería Aeroespacial y Sistemas de Propulsión (Mes 1-3)",
      topics: [
        "Dinámica orbital y mecánica celeste avanzada",
        "Sistemas de propulsión de próxima generación (Iónica, Plasma, Nuclear)",
        "Ingeniería de naves espaciales y sistemas de soporte vital",
        "Materiales para condiciones extremas y radiación espacial"
      ],
      grammar: [
        "Precise use of terminology in aerospace and theoretical physics",
        "Sophisticated modal structures for speculative engineering",
        "Advanced synthesis of complex technical and physical arguments"
      ],
      vocabulary: [
        "Orbital mechanics, Delta-v, Apogee, Perigee",
        "Ion thruster, Specific impulse, Plasma propulsion",
        "Life support, Avionics, Telemetry, Payload",
        "Radiation shielding, Thermal protection, Ablative"
      ],
      skills: {
        reading: ["Análisis crítico de misiones espaciales y papers técnicos"],
        writing: ["Redacción de especificaciones de diseño aeroespacial"],
        listening: ["Seguir telemetría y comunicaciones de misiones en tiempo real"],
        speaking: ["Liderazgo en revisiones de diseño crítico (CDR) de naves"]
      }
    },
    {
      title: "Trimestre 2: Nanotecnología y Fabricación Molecular (Mes 4-6)",
      topics: [
        "Autoensamblaje molecular y nanobots",
        "Materiales con memoria de forma y metamateriales",
        "Ingeniería a escala atómica y microscopía avanzada",
        "Impacto de la nanotecnología en la medicina y la energía"
      ],
      grammar: [
        "Nuanced language for ethical and scientific debate",
        "Mastery of technical register in quantum engineering",
        "Strategic use of hedging in breakthrough research proposals"
      ],
      vocabulary: [
        "Molecular assembly, Nanobot, Self-healing materials",
        "Metamaterials, Negative refractive index, Cloaking",
        "Atomic force microscopy, Scanning tunneling",
        "Quantum dot, Nanotube, Graphene structures"
      ],
      skills: {
        reading: ["Evaluación de papers sobre avances en nanociencia"],
        writing: ["Redacción de protocolos de laboratorio a nanoescala"],
        listening: ["Entender presentaciones técnicas de expertos en nanotecnología"],
        speaking: ["Defensa de proyectos de investigación disruptiva"]
      }
    },
    {
      title: "Trimestre 3: Ingeniería a Escala Planetaria y Ética Global (Mes 7-9)",
      topics: [
        "Geoingeniería y terraformación: Desafíos técnicos",
        "Megaestructuras espaciales (Dyson spheres, Elevadores espaciales)",
        "Ética de la ingeniería en la era del Antropoceno",
        "Proyecto Final: Diseño de una infraestructura para la colonización de Marte"
      ],
      grammar: [
        "Integration of philosophical, ethical and engineering discourse",
        "Full command of persuasive and visionary language",
        "Absolute precision in high-stakes strategic planning"
      ],
      vocabulary: [
        "Geoengineering, Carbon capture, Albedo modification",
        "Space elevator, Dyson sphere, Orbital ring",
        "Sustainability, Planetary boundaries, Anthropocene",
        "Strategic foresight, Megaproject management, Legacy"
      ],
      skills: {
        reading: ["Análisis de literatura sobre el futuro de la ingeniería planetaria"],
        writing: ["Redacción de manifiestos sobre ingeniería y ética global"],
        listening: ["Interpretación de sutilizas en debates de visionarios técnicos"],
        speaking: ["Keynote speaker en cumbres mundiales de ingeniería y futuro"]
      }
    }
  ]
};
