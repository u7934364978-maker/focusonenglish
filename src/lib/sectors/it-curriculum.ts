import { CurriculumModule } from '../curriculum-data';

export const IT_SECTOR_CURRICULUM: Record<string, CurriculumModule[]> = {
  B1: [
    {
      title: "Trimestre 1: Fundamentos de IT y Soporte Técnico (Mes 1-3)",
      topics: [
        "Componentes de hardware y periféricos",
        "Sistemas operativos y software común",
        "Gestión de tickets y soporte al usuario",
        "Configuración básica de redes y conectividad"
      ],
      grammar: [
        "Imperatives for technical instructions",
        "Present Simple for habitual system behaviors",
        "Modal verbs for troubleshooting advice (should, might)"
      ],
      vocabulary: [
        "Motherboard, RAM, CPU, Storage, Display",
        "Operating system, Driver, Application, Firmware",
        "Troubleshoot, Reboot, Install, Update, Patch",
        "Router, Switch, Bandwidth, Latency, IP address"
      ],
      skills: {
        reading: ["Lectura de manuales de usuario y guías de instalación"],
        writing: ["Redacción de respuestas a tickets de soporte y notas técnicas"],
        listening: ["Comprensión de usuarios describiendo problemas técnicos"],
        speaking: ["Guía paso a paso para resolver problemas simples"]
      }
    },
    {
      title: "Trimestre 2: Desarrollo de Software y Metodologías (Mes 4-6)",
      topics: [
        "Ciclo de vida del desarrollo de software (SDLC)",
        "Introducción a lenguajes de programación y sintaxis",
        "Metodologías Ágiles: Scrum y Kanban básicos",
        "Control de versiones (Git) y colaboración"
      ],
      grammar: [
        "Present Continuous for current project status",
        "Past Simple for completed tasks in stand-ups",
        "Connectors of sequence for process description"
      ],
      vocabulary: [
        "Source code, Script, Bug, Debugging, Compile",
        "Framework, Library, API, Documentation",
        "Sprint, Backlog, Daily stand-up, Stakeholder",
        "Repository, Commit, Pull request, Merge, Branch"
      ],
      skills: {
        reading: ["Lectura de requerimientos de software y tickets de Jira"],
        writing: ["Redacción de comentarios en código y descripciones de tareas"],
        listening: ["Seguir discusiones en reuniones de planificación de sprint"],
        speaking: ["Participación en Daily Stand-ups y descripción de progreso"]
      }
    },
    {
      title: "Trimestre 3: Bases de Datos y Seguridad Básica (Mes 7-9)",
      topics: [
        "Conceptos básicos de bases de datos y SQL",
        "Seguridad informática esencial y contraseñas",
        "Copia de seguridad y recuperación de datos",
        "Proyecto Final: Simulación de soporte técnico de nivel 1"
      ],
      grammar: [
        "First Conditional for security warnings",
        "Prepositions of place in system architecture",
        "Comparatives for hardware/software evaluation"
      ],
      vocabulary: [
        "Database, Table, Row, Column, Query",
        "Encryption, Firewall, Malware, Phishing, Antivirus",
        "Backup, Recovery, Disaster recovery, Cloud storage",
        "User account, Permission, Authorization, Authentication"
      ],
      skills: {
        reading: ["Lectura de políticas de seguridad y diagramas de BD"],
        writing: ["Redacción de documentación básica de sistemas"],
        listening: ["Comprensión de alertas y avisos de seguridad"],
        speaking: ["Explicación de procedimientos de seguridad a no técnicos"]
      }
    }
  ],
  B2: [
    {
      title: "Trimestre 1: Arquitectura de Sistemas y Redes Avanzadas (Mes 1-3)",
      topics: [
        "Arquitectura de servidores y centros de datos",
        "Protocolos de red complejos y administración",
        "Virtualización y contenedores (Docker, Kubernetes)",
        "Monitorización de sistemas y rendimiento"
      ],
      grammar: [
        "Complex passives for system configurations",
        "Reporting verbs for performance reports",
        "Modal verbs of deduction for system failures"
      ],
      vocabulary: [
        "Server rack, Blade server, Mainframe, Load balancer",
        "TCP/IP, DNS, DHCP, VPN, SSH, SSL/TLS",
        "Virtual machine, Hypervisor, Container, Image",
        "Throughput, Uptime, Downtime, Scalability"
      ],
      skills: {
        reading: ["Análisis de logs de servidor y reportes de red"],
        writing: ["Redacción de especificaciones de hardware y red"],
        listening: ["Seguir presentaciones sobre arquitectura de sistemas"],
        speaking: ["Presentación de planes de actualización de infraestructura"]
      }
    },
    {
      title: "Trimestre 2: Ingeniería de Software y DevOps (Mes 4-6)",
      topics: [
        "Patrones de diseño de software y arquitectura limpia",
        "Integración continua y despliegue continuo (CI/CD)",
        "Gestión de APIs y microservicios",
        "Pruebas automatizadas y QA avanzado"
      ],
      grammar: [
        "Conditionals Type 2 & 3 for system logic analysis",
        "Future Perfect for project milestone tracking",
        "Advanced relative clauses for complex system definitions"
      ],
      vocabulary: [
        "Design pattern, Singleton, MVC, Microservices",
        "Pipeline, Automation, Deployment, Orchestration",
        "Endpoint, JSON, REST, SOAP, GraphQL",
        "Unit test, Integration test, Regression, Smoke test"
      ],
      skills: {
        reading: ["Lectura de documentación técnica de APIs externas"],
        writing: ["Redacción de manuales técnicos para desarrolladores"],
        listening: ["Seguir debates técnicos sobre elección de tecnologías"],
        speaking: ["Liderazgo en revisiones de código y diseño técnico"]
      }
    },
    {
      title: "Trimestre 3: Ciberseguridad y Gestión de Datos (Mes 7-9)",
      topics: [
        "Análisis de vulnerabilidades y tests de penetración",
        "Gestión de grandes volúmenes de datos (Big Data)",
        "Cumplimiento y privacidad técnica (ISO 27001, SOC2)",
        "Proyecto Final: Diseño de una arquitectura de sistema escalable"
      ],
      grammar: [
        "Subjunctive for technical recommendations",
        "Connectors of contrast for alternative solutions",
        "Advanced use of nuances in technical opinions"
      ],
      vocabulary: [
        "Vulnerability, Exploit, Zero-day, Penetration test",
        "Data warehouse, Data lake, Analytics, ETL",
        "Risk assessment, Mitigation, Audit, Compliance",
        "Encryption at rest, Encryption in transit, Tokenization"
      ],
      skills: {
        reading: ["Análisis de reportes de auditoría de seguridad"],
        writing: ["Redacción de propuestas de seguridad de sistemas"],
        listening: ["Comprensión de conferencias técnicas especializadas"],
        speaking: ["Defensa de decisiones arquitectónicas ante clientes"]
      }
    }
  ],
  C1: [
    {
      title: "Trimestre 1: Inteligencia Artificial y Ciencia de Datos (Mes 1-3)",
      topics: [
        "Fundamentos de Machine Learning y Deep Learning",
        "Procesamiento de Lenguaje Natural (NLP) y Computer Vision",
        "Ética en la IA y sesgos algorítmicos",
        "Estrategia de datos empresarial"
      ],
      grammar: [
        "Advanced hedging in technical research writing",
        "Inversion for formal technical presentations",
        "Precision in descriptive grammar for algorithm logic"
      ],
      vocabulary: [
        "Algorithm, Neural network, Model training, Dataset",
        "Inference, Overfitting, Underfitting, Accuracy",
        "Generative AI, LLM, Prompt engineering",
        "Predictive modeling, Recommendation engine"
      ],
      skills: {
        reading: ["Evaluación crítica de papers de investigación en IA"],
        writing: ["Redacción de propuestas estratégicas de implementación de IA"],
        listening: ["Seguir ponencias de expertos en IA en inglés"],
        speaking: ["Presentación de soluciones de IA a nivel ejecutivo"]
      }
    },
    {
      title: "Trimestre 2: Estrategia Cloud y Transformación Digital (Mes 4-6)",
      topics: [
        "Arquitecturas multi-cloud e híbridas (AWS, Azure, GCP)",
        "Estrategias de migración al cloud y optimización de costes",
        "Liderazgo en transformación digital",
        "Gestión de productos digitales (Product Management)"
      ],
      grammar: [
        "Subjunctive and hypothetical structures in strategy debate",
        "Rhetorical devices for leadership and persuasion in tech",
        "Causative forms in strategic planning contexts"
      ],
      vocabulary: [
        "Serverless, SaaS, PaaS, IaaS, Cloud-native",
        "Lift and shift, Replatforming, Refactoring",
        "Digital maturity, Change management, Agility",
        "Product-market fit, Roadmap, Value proposition"
      ],
      skills: {
        reading: ["Análisis de reportes de analistas de mercado (Gartner, etc.)"],
        writing: ["Redacción de roadmaps de producto y visiones técnicas"],
        listening: ["Comprensión de debates en juntas directivas tecnológicas"],
        speaking: ["Liderazgo en negociaciones con grandes proveedores cloud"]
      }
    },
    {
      title: "Trimestre 3: CTO Leadership e Innovación Tecnológica (Mes 7-9)",
      topics: [
        "El papel del CTO y visión tecnológica estratégica",
        "Innovación abierta y ecosistemas tecnológicos",
        "Gestión de talento y cultura de ingeniería",
        "Proyecto Final: Simulación de una estrategia de innovación para una Tech-Startup"
      ],
      grammar: [
        "Mastery of register: Technical vs Executive vs Commercial",
        "Advanced use of nuances and subtlety in complex tech topics",
        "Integration of all high-level structures in strategic discourse"
      ],
      vocabulary: [
        "Technical debt, Tech stack, Future-proofing",
        "Open source, Developer experience (DevEx), Talent retention",
        "Innovation lab, R&D, Competitive advantage",
        "Exit strategy, Funding rounds, IPO for tech"
      ],
      skills: {
        reading: ["Lectura de reportes sobre tendencias emergentes (Web3, Quantum)"],
        writing: ["Redacción de manifiestos tecnológicos corporativos"],
        listening: ["Seguir 'Tech Talks' de líderes mundiales"],
        speaking: ["Liderazgo en foros internacionales de tecnología"]
      }
    }
  ]
};
