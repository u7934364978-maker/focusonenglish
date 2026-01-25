import { CurriculumModule } from '../curriculum-data';

export const ENGINEERING_SECTOR_CURRICULUM: Record<string, CurriculumModule[]> = {
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
  ]
};
