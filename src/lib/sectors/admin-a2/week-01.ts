import { DetailedAdminWeek } from './types';

export const ADMIN_A2_WEEK_1: DetailedAdminWeek = {
  weekNumber: 1,
  title: "Saludos Profesionales y Protocolos de Entrada",
  roadmap: {
    learning: "Aprenderás a saludar formalmente, dar la bienvenida a visitantes y gestionar el acceso inicial a la oficina.",
    application: "Primer contacto en recepción, registro de visitas y trato cordial corporativo."
  },
  theory: {
    objectives: [
      "Dominar saludos formales e informales en el trabajo",
      "Aprender frases de bienvenida estándar",
      "Entender el protocolo básico de recepción de visitantes"
    ],
    grammar: {
      title: "Present Simple: Verb 'To Be' & Formal Greetings",
      explanation: "Usamos el verbo 'to be' para identificarnos y dar la bienvenida. La cortesía en inglés A2 se apoya en estructuras simples pero precisas.",
      examples: [
        "I am the receptionist.",
        "He is Mr. Henderson, the manager.",
        "You are early for your meeting."
      ],
      miniCheck: {
        id: 'a2-w1-theory-check',
        type: 'multiple-choice',
        question: "How do you say 'Bienvenido a Focus English' formally?",
        options: [
          "Welcome to Focus English",
          "Hello Focus English",
          "You are Focus English"
        ],
        correctAnswer: "Welcome to Focus English",
        explanation: "'Welcome to' es la estructura estándar para dar la bienvenida a un lugar.",
        points: 5
      }
    },
    vocabulary: [
      { term: "Receptionist", translation: "Recepcionista", phonetic: "/rɪˈsɛpʃənɪst/", type: "noun" },
      { term: "Visitor", translation: "Visitante", phonetic: "/ˈvɪzɪtər/", type: "noun" },
      { term: "Appointment", translation: "Cita/Reunión", phonetic: "/əˈpɔɪntmənt/", type: "noun" },
      { term: "Badge", translation: "Credencial/Identificación", phonetic: "/bædʒ/", type: "noun" },
      { term: "To sign in", translation: "Registrarse (entrada)", phonetic: "/tuː saɪn ɪn/", type: "verb" }
    ],
    functionalLanguage: [
      { phrase: "Good morning, how can I help you?", context: "Saludo inicial estándar en recepción." },
      { phrase: "Please take a seat.", context: "Invitar al visitante a esperar." },
      { phrase: "I'll let them know you're here.", context: "Informar de la llegada del visitante." }
    ],
    professionalTip: "In many English-speaking offices, eye contact and a firm smile are as important as the words you use. Always use 'Sir' or 'Madam' if you want to be extra formal, but 'Mr.' or 'Ms.' followed by the surname is the standard.",
    culturalInsight: "In the UK, it is common to offer a visitor a cup of tea or water while they wait. It's part of the professional hospitality.",
    watchOut: [
      { error: "Welcome at Focus English", correction: "Welcome TO Focus English" }
    ]
  },
  exercises: [
    {
      id: 'admin-a2-w1-ex1',
      type: 'vocabulary',
      title: 'The Reception Desk',
      triggerContext: "Un visitante acaba de llegar a la oficina y no sabes quién es.",
      instructions: "Selecciona el término correcto para completar la situación profesional.",
      content: {},
      questions: [
        {
          id: 'a2-w1-ex1-q1',
          type: 'multiple-choice',
          question: "The person who arrives to the office is a...",
          options: ["Manager", "Visitor", "Supplier"],
          correctAnswer: "Visitor",
          explanation: "Cualquier persona externa que llega a la oficina es considerada un 'visitor'.",
          points: 10
        }
      ],
      xpReward: 20
    },
    {
      id: 'admin-a2-w1-ex2',
      type: 'speaking',
      title: 'First Contact',
      triggerContext: "Son las 9:00 AM y entra el primer cliente del día.",
      instructions: "Elige la frase más adecuada para iniciar la conversación profesionalmente.",
      content: {},
      questions: [
        {
          id: 'a2-w1-ex2-q1',
          type: 'multiple-choice',
          question: "Good morning! ____ can I help you?",
          options: ["What", "How", "Who"],
          correctAnswer: "How",
          explanation: "'How can I help you?' es la frase estándar de servicio al cliente.",
          points: 10
        }
      ],
      xpReward: 20
    }
  ]
};
