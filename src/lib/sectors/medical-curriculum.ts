import { CurriculumModule } from '../curriculum-data';

export const MEDICAL_SECTOR_CURRICULUM: Record<string, CurriculumModule[]> = {
  B1: [
    {
      title: "Trimestre 1: Atención al Paciente y Anatomía Básica (Mes 1-3)",
      topics: [
        "Sistemas del cuerpo humano y terminología básica",
        "Interacción inicial con el paciente (Admissions)",
        "Toma de constantes vitales y registro de datos",
        "Síntomas comunes y descripción del dolor"
      ],
      grammar: [
        "Present Simple for habitual medical routines",
        "Present Continuous for current patient status",
        "Modal verbs for mild advice (should, ought to)"
      ],
      vocabulary: [
        "Body parts, Organs, Skeletal system",
        "Blood pressure, Heart rate, Temperature, Pulse",
        "Ache, Pain, Swelling, Fever, Rash"
      ],
      skills: {
        reading: ["Lectura de historias clínicas básicas y notas de enfermería"],
        writing: ["Redacción de notas de ingreso y registros de constantes"],
        listening: ["Comprensión de pacientes describiendo síntomas"],
        speaking: ["Realización de entrevistas de admisión y triage"]
      }
    },
    {
      title: "Trimestre 2: Medicación y Procedimientos Hospitalarios (Mes 4-6)",
      topics: [
        "Administración de medicamentos y dosis",
        "Equipamiento médico y herramientas de diagnóstico",
        "Higiene hospitalaria y prevención de infecciones",
        "Instrucciones post-operatorias y cuidados básicos"
      ],
      grammar: [
        "Imperatives for clinical instructions",
        "Passive Voice for medical procedures",
        "Prepositions of place and movement in hospital settings"
      ],
      vocabulary: [
        "Dosage, Prescription, Antibiotics, Side effects",
        "Stethoscope, Syringe, IV drip, Scalpel",
        "Sterilization, Ward, Clinic, Outpatient"
      ],
      skills: {
        reading: ["Lectura de recetas y manuales de equipamiento médico"],
        writing: ["Redacción de instrucciones de alta simples"],
        listening: ["Seguir instrucciones de doctores en situaciones de planta"],
        speaking: ["Explicación de tratamientos y medicación a pacientes"]
      }
    },
    {
      title: "Trimestre 3: Salud Comunitaria y Emergencias (Mes 7-9)",
      topics: [
        "Atención en situaciones de urgencia y primeros auxilios",
        "Salud pública y prevención de enfermedades",
        "Salud mental y apoyo emocional básico",
        "Proyecto Final: Simulación de caso clínico multidisciplinar"
      ],
      grammar: [
        "First Conditional for medical warnings",
        "Past Simple for medical history reporting",
        "Adverbs of degree for pain level assessment"
      ],
      vocabulary: [
        "Emergency, Trauma, Resuscitation, CPR",
        "Vaccination, Prevention, Epidemic, Lifestyle",
        "Anxiety, Depression, Stress, Support group"
      ],
      skills: {
        reading: ["Lectura de folletos de salud pública y prevención"],
        writing: ["Redacción de reportes de incidentes en urgencias"],
        listening: ["Comprensión de llamadas de emergencia y reportes rápidos"],
        speaking: ["Comunicación efectiva en situaciones críticas"]
      }
    }
  ],
  B2: [
    {
      title: "Trimestre 1: Diagnóstico y Especialidades Médicas (Mes 1-3)",
      topics: [
        "Análisis de pruebas diagnósticas (Rayos X, MRI, Lab)",
        "Especialidades: Cardiología, Oncología, Pediatría",
        "Discusión de casos clínicos complejos (Case Rounds)",
        "Ética médica básica y consentimiento informado"
      ],
      grammar: [
        "Reporting verbs for clinical discussions",
        "Modals of deduction for differential diagnosis",
        "Complex passives for medical research reports"
      ],
      vocabulary: [
        "Diagnosis, Prognosis, Pathology, Biopsy",
        "Chronic, Acute, Relapse, Remission",
        "Ethics, Autonomy, Beneficence, Informed consent"
      ],
      skills: {
        reading: ["Análisis de reportes de laboratorio e imagenología"],
        writing: ["Redacción de historias clínicas detalladas"],
        listening: ["Seguir discusiones de casos entre especialistas"],
        speaking: ["Presentación de casos clínicos en sesiones clínicas"]
      }
    },
    {
      title: "Trimestre 2: Farmacología y Tratamientos Avanzados (Mes 4-6)",
      topics: [
        "Interacciones medicamentosas y farmacocinética",
        "Tratamientos quirúrgicos complejos",
        "Enfermedades raras y crónicas",
        "Medicina basada en la evidencia (EBM)"
      ],
      grammar: [
        "Conditionals Type 2 & 3 for clinical outcome analysis",
        "Future Perfect for prognosis forecasting",
        "Relative clauses for defining complex conditions"
      ],
      vocabulary: [
        "Absorption, Metabolism, Contraindications, Toxicity",
        "Invasive, Non-invasive, Rehabilitation, Palliative",
        "Randomized controlled trials, Meta-analysis, Peer review"
      ],
      skills: {
        reading: ["Lectura de artículos científicos y journals médicos"],
        writing: ["Redacción de protocolos de tratamiento"],
        listening: ["Comprensión de seminarios médicos especializados"],
        speaking: ["Debate sobre opciones de tratamiento basadas en evidencia"]
      }
    },
    {
      title: "Trimestre 3: Salud Pública y Gestión Clínica (Mes 7-9)",
      topics: [
        "Epidemiología y gestión de pandemias",
        "Administración de servicios de salud",
        "Tecnología en salud (Telemedicina, AI)",
        "Proyecto Final: Diseño de un protocolo de salud pública"
      ],
      grammar: [
        "Subjunctive for medical policy recommendations",
        "Connectors of contrast for comparing treatments",
        "Gerunds vs Infinitives in patient instructions"
      ],
      vocabulary: [
        "Prevalence, Incidence, Mortality rate, Herd immunity",
        "Clinical governance, Resource allocation, Quality assurance",
        "Digital health, Electronic health records, Wearables"
      ],
      skills: {
        reading: ["Análisis de políticas de salud gubernamentales"],
        writing: ["Redacción de propuestas de mejora de servicios"],
        listening: ["Entender presentaciones sobre gestión hospitalaria"],
        speaking: ["Negociación de recursos y liderazgo de equipos médicos"]
      }
    }
  ],
  C1: [
    {
      title: "Trimestre 1: Investigación Médica y Bioestadística (Mes 1-3)",
      topics: [
        "Metodología de la investigación clínica",
        "Bioestadística avanzada y análisis de datos",
        "Publicación científica y redacción de papers",
        "Ensayos clínicos y fases de desarrollo"
      ],
      grammar: [
        "Advanced hedging in scientific writing",
        "Inversion for formal academic style",
        "Precision in descriptive grammar for data"
      ],
      vocabulary: [
        "Hypothesis, Variable, Significance level, P-value",
        "Cohort study, Double-blind, Placebo-controlled",
        "Manuscript, Abstract, Peer review, Impact factor"
      ],
      skills: {
        reading: ["Evaluación crítica de literatura médica compleja"],
        writing: ["Redacción de artículos para publicación internacional"],
        listening: ["Seguir ponencias de expertos en congresos mundiales"],
        speaking: ["Defensa de tesis de investigación ante paneles"]
      }
    },
    {
      title: "Trimestre 2: Bioética y Liderazgo Ejecutivo (Mes 4-6)",
      topics: [
        "Dilemas bioéticos complejos y legislación",
        "Dirección médica y liderazgo estratégico",
        "Diplomacia en salud global (WHO, UN)",
        "Gestión de crisis sanitarias a gran escala"
      ],
      grammar: [
        "Subjunctive and hypothetical structures in ethical debate",
        "Rhetorical devices for leadership and persuasion",
        "Causative forms in legal and policy contexts"
      ],
      vocabulary: [
        "Euthanasia, Genetic engineering, Resource scarcity",
        "Strategic vision, Stakeholder management, Change management",
        "Global health security, International health regulations"
      ],
      skills: {
        reading: ["Análisis de tratados internacionales de salud"],
        writing: ["Redacción de dictámenes éticos y políticas globales"],
        listening: ["Comprensión de debates en asambleas internacionales"],
        speaking: ["Liderazgo en negociaciones de política sanitaria"]
      }
    },
    {
      title: "Trimestre 3: Innovación y Medicina del Futuro (Mes 7-9)",
      topics: [
        "Medicina de precisión y genómica",
        "Inteligencia Artificial aplicada a la salud",
        "Sostenibilidad en sistemas de salud",
        "Proyecto Final: Simulación de comité de innovación hospitalaria"
      ],
      grammar: [
        "Mastery of register: Academic vs Executive vs Clinical",
        "Advanced use of nuances and subtlety in complex topics",
        "Integration of all high-level structures in discourse"
      ],
      vocabulary: [
        "Personalized medicine, Gene therapy, CRISPR",
        "Machine learning, Predictive analytics, Robotics",
        "Health economics, Cost-effectiveness, Net zero health"
      ],
      skills: {
        reading: ["Lectura de reportes sobre tendencias futuras en salud"],
        writing: ["Redacción de visiones estratégicas de innovación"],
        listening: ["Seguir lanzamientos de innovaciones biomédicas"],
        speaking: ["Liderazgo de proyectos de transformación digital"]
      }
    }
  ]
};
