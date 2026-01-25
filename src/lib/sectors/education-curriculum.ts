import { CurriculumModule } from '../curriculum-data';

export const EDUCATION_SECTOR_CURRICULUM: Record<string, CurriculumModule[]> = {
  B1: [
    {
      title: "Trimestre 1: Gestión del Aula y Comunicación Básica (Mes 1-3)",
      topics: [
        "Instrucciones de aula y lenguaje funcional",
        "Gestión del comportamiento y reglas básicas",
        "Comunicación con padres y tutores",
        "Rutinas diarias en el centro educativo"
      ],
      grammar: [
        "Imperatives for classroom instructions",
        "Modal verbs for rules and advice (must, should)",
        "Present Simple for school routines"
      ],
      vocabulary: [
        "Classroom, Blackboard, Desk, Stationery",
        "Behavior, Discipline, Rule, Punishment, Reward",
        "Parent, Tutor, Meeting, Report, Feedback",
        "Break time, Assembly, Timetable, Attendance"
      ],
      skills: {
        reading: ["Lectura de circulares escolares y normas del centro"],
        writing: ["Redacción de notas cortas para padres e informes simples"],
        listening: ["Comprensión de alumnos y colegas en entornos escolares"],
        speaking: ["Dar instrucciones claras y manejar situaciones de aula"]
      }
    },
    {
      title: "Trimestre 2: Planificación y Metodologías Básicas (Mes 4-6)",
      topics: [
        "Planificación de lecciones (Lesson Planning)",
        "Materiales didácticos y recursos visuales",
        "Técnicas de enseñanza básica (PPP, TBL)",
        "Evaluación inicial y seguimiento del alumno"
      ],
      grammar: [
        "Future forms for lesson goals (students will be able to...)",
        "Connectors of sequence for lesson stages",
        "Present Continuous for current student progress"
      ],
      vocabulary: [
        "Lesson plan, Objective, Outcome, Activity",
        "Resource, Flashcard, Worksheet, Textbook",
        "Methodology, Approach, Practice, Production",
        "Assessment, Quiz, Progress, Grade, Mark"
      ],
      skills: {
        reading: ["Lectura de libros de texto y guías del profesor"],
        writing: ["Redacción de planes de lección y hojas de trabajo"],
        listening: ["Seguir explicaciones sobre métodos pedagógicos"],
        speaking: ["Explicación de conceptos simples a los alumnos"]
      }
    },
    {
      title: "Trimestre 3: Necesidades Especiales y Apoyo (Mes 7-9)",
      topics: [
        "Introducción a las Necesidades Educativas Especiales (NEE)",
        "Apoyo emocional y bienestar del alumno",
        "Actividades extracurriculares y excursiones",
        "Proyecto Final: Diseño de una unidad didáctica de una semana"
      ],
      grammar: [
        "First Conditional for school policies and safety",
        "Relative clauses for defining student needs",
        "Adverbs of frequency for student behavior monitoring"
      ],
      vocabulary: [
        "Special needs, ADHD, Dyslexia, Inclusion",
        "Wellbeing, Bullying, Counseling, Mental health",
        "Trip, Field trip, Consent form, Safety",
        "Unit, Module, Curriculum, Learning goal"
      ],
      skills: {
        reading: ["Lectura de reportes psicopedagógicos básicos"],
        writing: ["Redacción de planes de apoyo individualizados simples"],
        listening: ["Comprensión de briefings de excursiones y seguridad"],
        speaking: ["Presentación de la unidad didáctica a colegas"]
      }
    }
  ],
  B2: [
    {
      title: "Trimestre 1: Teorías del Aprendizaje y Psicología (Mes 1-3)",
      topics: [
        "Psicología educativa: Piaget, Vygotsky y el constructivismo",
        "Estilos de aprendizaje y diferenciación en el aula",
        "Motivación del alumno y dinámicas de grupo",
        "Evaluación formativa y sumativa avanzada"
      ],
      grammar: [
        "Reporting verbs for pedagogical discussion",
        "Complex passives for formal educational reports",
        "Modal verbs of deduction for learning difficulties"
      ],
      vocabulary: [
        "Constructivism, Scaffolding, ZPD, Cognitive",
        "Visual, Auditory, Kinaesthetic, Differentiation",
        "Intrinsic/Extrinsic motivation, Group dynamics",
        "Formative, Summative, Rubric, Criterion"
      ],
      skills: {
        reading: ["Análisis de artículos pedagógicos y reportes de progreso"],
        writing: ["Redacción de informes detallados sobre el alumno"],
        listening: ["Seguir seminarios sobre psicología educativa"],
        speaking: ["Presentación de estrategias de diferenciación en claustros"]
      }
    },
    {
      title: "Trimestre 2: EdTech e Innovación en el Aula (Mes 4-6)",
      topics: [
        "Tecnología educativa (LMS, Gamificación, Apps)",
        "Blended learning y el aula invertida (Flipped Classroom)",
        "Seguridad digital y ciudadanía para alumnos",
        "Diseño de materiales multimedia interactivos"
      ],
      grammar: [
        "Conditionals Type 2 & 3 for pedagogical scenarios",
        "Future Perfect for learning milestone tracking",
        "Advanced relative clauses for complex educational definitions"
      ],
      vocabulary: [
        "LMS, Google Classroom, Moodle, Gamification",
        "Flipped classroom, Synchronous/Asynchronous",
        "Cyberbullying, Digital footprint, E-safety",
        "Multimedia, Interactive, Webinar, Podcast"
      ],
      skills: {
        reading: ["Lectura de manuales de software educativo"],
        writing: ["Redacción de guías de uso de tecnología para alumnos"],
        listening: ["Comprensión de debates sobre el uso de móviles en el aula"],
        speaking: ["Liderazgo en talleres de formación docente (EdTech)"]
      }
    },
    {
      title: "Trimestre 3: Desarrollo Profesional y Calidad (Mes 7-9)",
      topics: [
        "Observación de clases y feedback constructivo",
        "Desarrollo profesional continuo (CPD) y formación",
        "Aseguramiento de la calidad y estándares educativos",
        "Proyecto Final: Proyecto de innovación educativa para el centro"
      ],
      grammar: [
        "Subjunctive for formal pedagogical recommendations",
        "Connectors of contrast for comparing teaching styles",
        "Advanced use of nuances in professional evaluations"
      ],
      vocabulary: [
        "Peer observation, Self-reflection, Feedback",
        "CPD, Workshop, In-service training, Mentoring",
        "Quality assurance, Accreditation, Inspection, OFSTED",
        "Innovation, Best practice, Benchmarking, Impact"
      ],
      skills: {
        reading: ["Análisis de reportes de inspección y calidad"],
        writing: ["Redacción de propuestas de mejora del currículum"],
        listening: ["Comprensión de conferencias de expertos educativos"],
        speaking: ["Liderazgo en reuniones de claustro y coordinación"]
      }
    }
  ],
  C1: [
    {
      title: "Trimestre 1: Liderazgo Educativo y Dirección (Mes 1-3)",
      topics: [
        "Dirección estratégica de centros educativos",
        "Gestión de equipos docentes y liderazgo",
        "Políticas educativas nacionales e internacionales",
        "Economía de la educación y presupuestos"
      ],
      grammar: [
        "Advanced hedging in academic and policy writing",
        "Inversion for formal executive keynote speeches",
        "Precision in descriptive grammar for educational data"
      ],
      vocabulary: [
        "Headteacher, Principal, Governing body, Trustee",
        "Leadership, Management, Staff retention, Recruitment",
        "Policy, Legislation, Reform, Globalization",
        "Funding, Budget, Grant, Resource allocation"
      ],
      skills: {
        reading: ["Evaluación crítica de planes estratégicos escolares"],
        writing: ["Redacción de visiones estratégicas para el centro"],
        listening: ["Seguir ponencias de líderes de política educativa"],
        speaking: ["Presentación de planes de desarrollo ante patronatos"]
      }
    },
    {
      title: "Trimestre 2: Diseño de Currículum e Investigación (Mes 4-6)",
      topics: [
        "Diseño curricular basado en competencias",
        "Investigación-acción en el aula (Action Research)",
        "Educación superior y estándares académicos",
        "Inclusión y equidad a nivel institucional"
      ],
      grammar: [
        "Subjunctive and hypothetical structures in policy debate",
        "Rhetorical devices for leadership and persuasion",
        "Causative forms in strategic planning contexts"
      ],
      vocabulary: [
        "Curriculum design, Syllabus, Competency-based",
        "Action research, Methodology, Qualitative/Quantitative",
        "Higher education, University, Tenure, Academic integrity",
        "Inclusion, Diversity, Equity, Social justice"
      ],
      skills: {
        reading: ["Análisis de reportes sobre investigación educativa"],
        writing: ["Redacción de papers académicos y propuestas de reforma"],
        listening: ["Comprensión de debates en juntas directivas universitarias"],
        speaking: ["Liderazgo en foros internacionales de educación"]
      }
    },
    {
      title: "Trimestre 3: El Futuro de la Educación y Estrategia (Mes 7-9)",
      topics: [
        "Tendencias futuras: IA, VR y el aula del mañana",
        "Educación global y ciudadanía intercultural",
        "Liderazgo en tiempos de cambio y crisis",
        "Proyecto Final: Diseño de un modelo educativo para el siglo XXI"
      ],
      grammar: [
        "Mastery of register: Academic vs Executive vs Clinical",
        "Advanced use of nuances and subtlety in complex topics",
        "Integration of all high-level structures in discourse"
      ],
      vocabulary: [
        "AI in education, Virtual reality, Metaverse, Lifelong learning",
        "Global citizenship, Intercultural, UNESCO, UN goals",
        "Change management, Resilience, Crisis leadership",
        "Legacy, Strategic foresight, Innovation, Vision"
      ],
      skills: {
        reading: ["Lectura de reportes sobre tendencias emergentes (PISA, etc.)"],
        writing: ["Redacción de manifiestos educativos sobre el futuro"],
        listening: ["Seguir lanzamientos de innovaciones pedagógicas"],
        speaking: ["Liderazgo en foros internacionales de educación"]
      }
    }
  ]
};
