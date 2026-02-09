import { Exercise } from './exercise-types';

export const A1_PDF_EXERCISES: Exercise[] = [
    {
        id: "a1-m1-l1-pdf-1",
        type: "matching",
        title: "Greetings & Times of Day",
        instructions: "Match the greeting with the correct time of day according to the PDF.",
        pairs: [
            {item: "Good morning", match: "From 6:00 to 12:00"},
            {item: "Good afternoon", match: "From 12:00 to 18:00"},
            {item: "Good evening", match: "From 18:00 to 24:00"},
            {item: "Good night", match: "When going to sleep"}
        ],
        explanation: "En inglés, usamos diferentes saludos dependiendo de la hora del día. 'Good morning' es para la mañana, 'Good afternoon' para la tarde y 'Good evening' para la noche. 'Good night' se usa solo al despedirse para ir a dormir."
    },
    {
        id: "a1-m1-l1-pdf-2",
        type: "multiple-choice",
        title: "Formal vs Informal Greetings",
        instructions: "Choose the most appropriate greeting for each situation.",
        questions: [
            {
                id: "q1",
                question: "How do you say 'Hola' to a friend in an informal way?",
                options: ["Hello", "Hi", "Good morning", "Good evening"],
                correctAnswer: "Hi",
                explanation: "'Hi' es más informal que 'Hello'."
            },
            {
                id: "q2",
                question: "How do you say 'Adiós' formally?",
                options: ["Bye", "See you", "Goodbye", "Hi"],
                correctAnswer: "Goodbye",
                explanation: "'Goodbye' es la forma estándar y formal de despedirse."
            }
        ]
    },
    {
        id: "a1-m1-l1-pdf-3",
        type: "fill-blank",
        title: "Self Introductions",
        instructions: "Complete the introduction sentences using the correct words from the PDF.",
        questions: [
            {
                id: "q1",
                sentence: "My ___ is Pablo.",
                answer: "name",
                explanation: "Usamos 'My name is' para decir nuestro nombre."
            },
            {
                id: "q2",
                sentence: "I am 22 ___ old.",
                answer: "years",
                explanation: "Para decir la edad usamos la estructura 'I am [number] years old'."
            },
            {
                id: "q3",
                sentence: "I ___ from Spain.",
                answer: "am",
                explanation: "Usamos el verbo 'to be' (am) para indicar procedencia."
            }
        ]
    },
    {
        id: "a1-m1-l2-pdf-1",
        type: "multiple-choice",
        title: "Personal Pronouns",
        instructions: "Select the correct pronoun to replace the underlined words.",
        questions: [
            {
                id: "q1",
                question: "Maria is from Spain.",
                options: ["He", "She", "It", "They"],
                correctAnswer: "She",
                explanation: "Maria es femenino singular, por lo que usamos 'She'."
            },
            {
                id: "q2",
                question: "Pablo and I are friends.",
                options: ["You", "They", "We", "He"],
                correctAnswer: "We",
                explanation: "Pablo y yo somos 'nosotros', es decir, 'We'."
            }
        ]
    },
    {
        id: "a1-m1-l2-pdf-2",
        type: "fill-blank",
        title: "Articles A and An",
        instructions: "Fill in the blanks with 'a' or 'an'.",
        questions: [
            {
                id: "q1",
                sentence: "___ book.",
                answer: "a",
                explanation: "Usamos 'a' delante de sonidos consonánticos (b)."
            },
            {
                id: "q2",
                sentence: "___ apple.",
                answer: "an",
                explanation: "Usamos 'an' delante de sonidos vocálicos (a)."
            },
            {
                id: "q3",
                sentence: "___ hour.",
                answer: "an",
                explanation: "En 'hour', la 'h' es muda, por lo que empieza por sonido vocálico."
            },
            {
                id: "q4",
                sentence: "___ university.",
                answer: "a",
                explanation: "En 'university', la 'u' suena como /ju:/ (sonido semiconsonántico), por lo que usamos 'a'."
            }
        ]
    },
    {
        id: "a1-m1-l3-pdf-1",
        type: "multiple-choice",
        title: "Numbers 1-20",
        instructions: "Choose the correct spelling for the number.",
        questions: [
            {
                id: "q1",
                question: "Number 12",
                options: ["Twelve", "Twelf", "Twenty", "Ten-two"],
                correctAnswer: "Twelve",
                explanation: "12 se escribe 'Twelve'."
            },
            {
                id: "q2",
                question: "Number 15",
                options: ["Fiveteen", "Fifteen", "Fifty", "Five"],
                correctAnswer: "Fifteen",
                explanation: "15 se escribe 'Fifteen'."
            }
        ]
    },
    {
        id: "a1-m1-l3-pdf-3",
        type: "matching",
        title: "Countries and Nationalities",
        instructions: "Match the country with its nationality.",
        pairs: [
            {item: "Spain", match: "Spanish"},
            {item: "France", match: "French"},
            {item: "Germany", match: "German"},
            {item: "Italy", match: "Italian"},
            {item: "China", match: "Chinese"}
        ],
        explanation: "Las nacionalidades en inglés siempre se escriben con mayúscula (Capital letters)."
    },
    {
        id: "a1-m2-l1-pdf-1",
        type: "fill-blank",
        title: "Regular Plurals",
        instructions: "Write the plural form of these nouns.",
        questions: [
            {
                id: "q1",
                sentence: "Bus -> ___",
                answer: "buses",
                explanation: "Palabras que terminan en -s añaden -es en plural."
            },
            {
                id: "q2",
                sentence: "Country -> ___",
                answer: "countries",
                explanation: "Consonante + y -> se cambia por -ies."
            }
        ]
    },
    {
        id: "a1-m2-l1-pdf-2",
        type: "matching",
        title: "Irregular Plurals",
        instructions: "Match the singular with its irregular plural.",
        pairs: [
            {item: "Man", match: "Men"},
            {item: "Woman", match: "Women"},
            {item: "Child", match: "Children"},
            {item: "Person", match: "People"}
        ],
        explanation: "Los plurales irregulares no siguen la regla de añadir -s, deben aprenderse de memoria."
    },
    {
        id: "a1-m2-l2-pdf-1",
        type: "multiple-choice",
        title: "On vs Above",
        instructions: "Choose the correct preposition based on the contact rule.",
        questions: [
            {
                id: "q1",
                question: "The pencil is ___ the table (making contact).",
                options: ["on", "above", "under"],
                correctAnswer: "on",
                explanation: "'On' indica contacto con la superficie."
            },
            {
                id: "q2",
                question: "The lamp is ___ the table (hanging from ceiling, no contact).",
                options: ["on", "above", "behind"],
                correctAnswer: "above",
                explanation: "'Above' indica que está por encima pero sin contacto."
            }
        ]
    }
];
