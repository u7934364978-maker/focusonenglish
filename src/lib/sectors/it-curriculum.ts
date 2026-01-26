import { CurriculumModule } from '../curriculum-data';

export const IT_SECTOR_CURRICULUM: Record<string, CurriculumModule[]> = {
  A1: [
    {
      title: "Trimestre 1: Mi Ordenador y lo Básico (Mes 1-3)",
      topics: [
        "Nombres de hardware: Pantalla, ratón, teclado",
        "Colores y números en la oficina",
        "Información personal y registro de usuario",
        "Saludos y cortesía básica en el equipo"
      ],
      grammar: [
        "Verb 'to be' para identificar objetos",
        "Pronombres personales y posesivos",
        "Present Simple para acciones de encendido/apagado"
      ],
      vocabulary: [
        "Monitor, Mouse, Keyboard, Laptop",
        "Printer, Cable, Battery, Screen",
        "One, Two, Three... Hundred",
        "Red, Blue, Black, White"
      ],
      skills: {
        reading: ["Lectura de etiquetas de hardware"],
        writing: ["Completar formularios de perfil de usuario"],
        listening: ["Entender nombres de objetos técnicos"],
        speaking: ["Presentarse y nombrar las partes del ordenador"]
      }
    },
    {
      title: "Trimestre 2: Internet y Software Común (Mes 4-6)",
      topics: [
        "Navegación web y búsqueda básica",
        "Uso de email: Enviar y recibir",
        "Aplicaciones de oficina (Word, Excel) básicas",
        "Preposiciones de lugar en el escritorio"
      ],
      grammar: [
        "There is / There are para archivos y carpetas",
        "Demostrativos (this, that, these, those)",
        "Preposiciones de lugar básicas (on, in, under)"
      ],
      vocabulary: [
        "Browser, Website, Link, Password",
        "Email, Subject, Attachment, Send",
        "File, Folder, Document, Icon",
        "On the desk, In the folder, Under the laptop"
      ],
      skills: {
        reading: ["Lectura de botones y menús simples"],
        writing: ["Escribir un email muy corto de saludo"],
        listening: ["Entender instrucciones de navegación simples"],
        speaking: ["Pedir ayuda para encontrar un archivo"]
      }
    },
    {
      title: "Trimestre 3: Mi Trabajo en IT (Mes 7-9)",
      topics: [
        "Roles en una empresa de tecnología",
        "Acciones diarias: Guardar, borrar, copiar",
        "Habilidades técnicas simples (Can/Can't)",
        "Proyecto Final: Simulación de configuración de cuenta"
      ],
      grammar: [
        "Can / Can't para permisos y habilidades",
        "Adverbios de frecuencia básicos",
        "Present Continuous para tareas actuales"
      ],
      vocabulary: [
        "Developer, Technician, Admin, User",
        "To save, To delete, To copy, To paste",
        "Work, Help, Call, Message",
        "Always, Usually, Never"
      ],
      skills: {
        reading: ["Lectura de mensajes de error muy cortos"],
        writing: ["Redacción de notas de recordatorio de tareas"],
        listening: ["Identificar tareas en una reunión corta"],
        speaking: ["Describir lo que haces en tu puesto de IT"]
      }
    }
  ],
  A2: [
    {
      title: "Trimestre 1: Problemas Técnicos y el Pasado (Mes 1-3)",
      topics: [
        "Reportar fallos de hardware simples",
        "Descripción de reparaciones pasadas",
        "Instalación de software básico",
        "Comparación de dispositivos (móvil vs pc)"
      ],
      grammar: [
        "Past Simple de verbos técnicos comunes",
        "Comparativos y superlativos de hardware",
        "Conectores de secuencia (first, then, after)"
      ],
      vocabulary: [
        "Broken, Slow, Frozen, Fix",
        "Installed, Downloaded, Updated",
        "Fast, Light, Powerful, Small",
        "Yesterday, Last night, Two hours ago"
      ],
      skills: {
        reading: ["Lectura de especificaciones técnicas básicas"],
        writing: ["Redacción de un ticket de soporte corto"],
        listening: ["Entender la descripción de un fallo técnico"],
        speaking: ["Explicar qué problema tuvo el PC ayer"]
      }
    },
    {
      title: "Trimestre 2: Actualizaciones y Futuro (Mes 4-6)",
      topics: [
        "Planes de actualización de sistemas",
        "Nuevas tecnologías en la oficina",
        "Seguridad básica: Contraseñas y virus",
        "Predicciones sobre tecnología simple"
      ],
      grammar: [
        "Future with 'going to' para planes de IT",
        "Will para predicciones tecnológicas",
        "First Conditional para avisos de seguridad"
      ],
      vocabulary: [
        "Upgrade, Replace, New version, Plan",
        "Virus, Firewall, Hacker, Secure",
        "Cloud, Mobile, Wireless, Smart",
        "If you click... it will open..."
      ],
      skills: {
        reading: ["Lectura de avisos de actualización de software"],
        writing: ["Escribir un plan de mejora del equipo personal"],
        listening: ["Entender consejos de seguridad digital"],
        speaking: ["Hablar sobre el móvil que quieres comprar"]
      }
    },
    {
      title: "Trimestre 3: Soporte al Usuario y Guía (Mes 7-9)",
      topics: [
        "Instrucciones paso a paso para usuarios",
        "Uso de herramientas de chat de soporte",
        "Sugerencias de software útil",
        "Proyecto Final: Simulación de soporte técnico nivel 0"
      ],
      grammar: [
        "Imperativos para dar instrucciones",
        "Adverbios de modo (slowly, correctly)",
        "Present Perfect para tareas terminadas"
      ],
      vocabulary: [
        "Help, Guide, Instructions, Step",
        "Chat, Message, Notification, Online",
        "Better, Recommended, Useful, Tool",
        "I have finished, I have sent"
      ],
      skills: {
        reading: ["Lectura de guías 'How-to' simples"],
        writing: ["Redacción de una guía de 3 pasos para un usuario"],
        listening: ["Entender una petición de ayuda simple"],
        speaking: ["Dar instrucciones de reinicio de sistema"]
      }
    }
  ],
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
  ],
  C2: [
    {
      title: "Trimestre 1: Computación Cuántica y Teoría Computacional (Mes 1-3)",
      topics: [
        "Fundamentos de computación cuántica y qubits",
        "Algoritmos cuánticos y criptografía post-cuántica",
        "Teoría de la complejidad computacional avanzada (P vs NP)",
        "Arquitecturas de supercomputación y exaescala"
      ],
      grammar: [
        "Precise use of terminology in theoretical physics and CS",
        "Sophisticated modal structures for scientific hypothesis",
        "Advanced synthesis of abstract computational concepts"
      ],
      vocabulary: [
        "Superposition, Entanglement, Qubit, Decoherence",
        "Shor's algorithm, Grover's algorithm, Post-quantum",
        "Complexity class, Polynomial time, Non-deterministic",
        "Exascale, Interconnect, Parallel processing, FLOPS"
      ],
      skills: {
        reading: ["Análisis crítico de papers de investigación en computación"],
        writing: ["Redacción de propuestas de investigación científica"],
        listening: ["Seguir conferencias técnicas de alto nivel (IEEE/ACM)"],
        speaking: ["Defensa de teorías computacionales ante expertos"]
      }
    },
    {
      title: "Trimestre 2: Seguridad de la IA y Gobernanza Global (Mes 4-6)",
      topics: [
        "Alineación de la IA (AI Alignment) y riesgos existenciales",
        "Marcos regulatorios globales para la IA (EU AI Act, etc.)",
        "Ciberseguridad en la era de la IA generativa",
        "Soberanía tecnológica y geopolítica del silicio"
      ],
      grammar: [
        "Nuanced language for ethical and philosophical debate",
        "Mastery of legal-technical register in international law",
        "Strategic use of hedging in policy recommendations"
      ],
      vocabulary: [
        "Artificial General Intelligence (AGI), Singularity, Alignment",
        "Prompt injection, Adversarial attacks, Deepfakes",
        "Regulatory sandbox, Compliance, Transnational policy",
        "Semiconductor supply chain, Foundry, Geofencing"
      ],
      skills: {
        reading: ["Evaluación de normativas internacionales de tecnología"],
        writing: ["Redacción de políticas de gobernanza de IA corporativa"],
        listening: ["Entender debates en foros mundiales sobre ética digital"],
        speaking: ["Representación técnica en comités de regulación global"]
      }
    },
    {
      title: "Trimestre 3: Liderazgo Visionario y Futuro Humano-Máquina (Mes 7-9)",
      topics: [
        "Interfaces cerebro-computadora (BCI) y transhumanismo",
        "La Singularidad y el futuro del trabajo tecnológico",
        "Filosofía de la tecnología y ética del silicio",
        "Proyecto Final: Manifiesto estratégico para el futuro de la tecnología 2075"
      ],
      grammar: [
        "Integration of philosophical and visionary discourse",
        "Full command of persuasive and leadership language",
        "Absolute precision in high-level strategic drafting"
      ],
      vocabulary: [
        "Neuralink, BCI, Augmented reality, Transhumanism",
        "Automation, Post-scarcity, Universal Basic Income (tech)",
        "Technological determinism, Digital ethics, Existencial risk",
        "Strategic foresight, Roadmap 2075, Legacy"
      ],
      skills: {
        reading: ["Análisis de literatura visionaria y prospectiva técnica"],
        writing: ["Redacción de manifiestos tecnológicos de largo alcance"],
        listening: ["Interpretación de sutilizas en debates de visionarios"],
        speaking: ["Keynote speaker en cumbres tecnológicas globales"]
      }
    }
  ]
};
