import { Exercise } from './exercise-types';

/**
 * Ejercicios extraídos del PDF Modulo I (Nivel A1)
 * Estructura optimizada para el motor adaptativo y PremiumSession.tsx
 */
export const A1_PDF_EXERCISES: Exercise[] = [
    // --- LECCIÓN 1: GREETINGS ---
    {
        id: "a1-m1-l1-pdf-1",
        type: "matching",
        title: "Greetings & Times of Day",
        prompt_es: "Relaciona el saludo con el momento del día correcto según el PDF.",
        pairs: [
            {id: "p1", word: "Good morning", correctMatch: "From 6:00 to 12:00"},
            {id: "p2", word: "Good afternoon", correctMatch: "From 12:00 to 18:00"},
            {id: "p3", word: "Good evening", correctMatch: "From 18:00 to 24:00"},
            {id: "p4", word: "Good night", correctMatch: "When going to sleep"}
        ],
        explanation: "En inglés, usamos diferentes saludos dependiendo de la hora del día. 'Good morning' (mañana), 'Good afternoon' (tarde), 'Good evening' (noche). 'Good night' es solo para despedirse."
    },
    {
        id: "a1-m1-l1-pdf-2",
        type: "multiple-choice",
        title: "Formal vs Informal Greetings",
        prompt_es: "¿Cómo dices 'Hola' a un amigo de forma informal?",
        stimulus_en: "Informal greeting to a friend:",
        options: [
            {id: "Hello", text: "Hello"},
            {id: "Hi", text: "Hi"},
            {id: "Good morning", text: "Good morning"},
            {id: "Good evening", text: "Good evening"}
        ],
        correct_answer: "Hi",
        explanation: "'Hi' es más informal que 'Hello'."
    },
    {
        id: "a1-m1-l1-pdf-3",
        type: "multiple-choice",
        title: "Formal Goodbyes",
        prompt_es: "¿Cómo dices 'Adiós' de forma formal?",
        stimulus_en: "Formal goodbye:",
        options: [
            {id: "Bye", text: "Bye"},
            {id: "See you", text: "See you"},
            {id: "Goodbye", text: "Goodbye"},
            {id: "Hi", text: "Hi"}
        ],
        correct_answer: "Goodbye",
        explanation: "'Goodbye' es la forma estándar y formal de despedirse."
    },
    {
        id: "a1-m1-l1-pdf-4",
        type: "fill-blanks",
        title: "Self Introductions",
        prompt_es: "Completa la presentación personal.",
        stimulus_en: "My ___ is Pablo.",
        correct_answer: "name",
        explanation: "Usamos 'My name is' para decir nuestro nombre."
    },
    {
        id: "a1-m1-l1-pdf-5",
        type: "fill-blanks",
        title: "Age Introduction",
        prompt_es: "Completa la frase para decir tu edad.",
        stimulus_en: "I am 22 ___ old.",
        correct_answer: "years",
        explanation: "Para decir la edad usamos la estructura 'I am [number] years old'."
    },

    // --- LECCIÓN 2: PRONOUNS & ARTICLES ---
    {
        id: "a1-m1-l2-pdf-1",
        type: "multiple-choice",
        title: "Personal Pronouns: Female",
        prompt_es: "Sustituye 'Maria' por el pronombre correcto.",
        stimulus_en: "Maria is from Spain.",
        options: [
            {id: "He", text: "He"},
            {id: "She", text: "She"},
            {id: "It", text: "It"},
            {id: "They", text: "They"}
        ],
        correct_answer: "She",
        explanation: "Maria es femenino singular, por lo que usamos 'She'."
    },
    {
        id: "a1-m1-l2-pdf-2",
        type: "multiple-choice",
        title: "Personal Pronouns: We",
        prompt_es: "Sustituye 'Pablo and I' por el pronombre correcto.",
        stimulus_en: "Pablo and I are friends.",
        options: [
            {id: "You", text: "You"},
            {id: "They", text: "They"},
            {id: "We", text: "We"},
            {id: "He", text: "He"}
        ],
        correct_answer: "We",
        explanation: "Pablo y yo somos 'nosotros', es decir, 'We'."
    },
    {
        id: "a1-m1-l2-pdf-3",
        type: "fill-blanks",
        title: "Articles: A",
        prompt_es: "Completa con 'a' o 'an'.",
        stimulus_en: "___ book.",
        correct_answer: "a",
        explanation: "Usamos 'a' delante de sonidos consonánticos (b)."
    },
    {
        id: "a1-m1-l2-pdf-4",
        type: "fill-blanks",
        title: "Articles: An (Vowel)",
        prompt_es: "Completa con 'a' o 'an'.",
        stimulus_en: "___ apple.",
        correct_answer: "an",
        explanation: "Usamos 'an' delante de sonidos vocálicos (a)."
    },
    {
        id: "a1-m1-l2-pdf-5",
        type: "fill-blanks",
        title: "Articles: Special cases (H)",
        prompt_es: "Completa con 'a' o 'an'. Recuerda que 'hour' tiene H muda.",
        stimulus_en: "___ hour.",
        correct_answer: "an",
        explanation: "En 'hour', la 'h' es muda, por lo que empieza por sonido vocálico."
    },

    // --- LECCIÓN 3: NUMBERS & COUNTRIES ---
    {
        id: "a1-m1-l3-pdf-1",
        type: "multiple-choice",
        title: "Number 12",
        prompt_es: "¿Cómo se escribe el número 12?",
        options: [
            {id: "Twelve", text: "Twelve"},
            {id: "Twelf", text: "Twelf"},
            {id: "Twenty", text: "Twenty"},
            {id: "Ten-two", text: "Ten-two"}
        ],
        correct_answer: "Twelve",
        explanation: "12 se escribe 'Twelve'."
    },
    {
        id: "a1-m1-l3-pdf-2",
        type: "multiple-choice",
        title: "Number 15",
        prompt_es: "¿Cómo se escribe el número 15?",
        options: [
            {id: "Fiveteen", text: "Fiveteen"},
            {id: "Fifteen", text: "Fifteen"},
            {id: "Fifty", text: "Fifty"},
            {id: "Five", text: "Five"}
        ],
        correct_answer: "Fifteen",
        explanation: "15 se escribe 'Fifteen'."
    },
    {
        id: "a1-m1-l3-pdf-3",
        type: "matching",
        title: "Countries and Nationalities",
        prompt_es: "Relaciona el país con su nacionalidad.",
        pairs: [
            {id: "c1", word: "Spain", correctMatch: "Spanish"},
            {id: "c2", word: "France", correctMatch: "French"},
            {id: "c3", word: "Germany", correctMatch: "German"},
            {id: "c4", word: "Italy", correctMatch: "Italian"},
            {id: "c5", word: "China", correctMatch: "Chinese"}
        ],
        explanation: "Las nacionalidades en inglés siempre se escriben con mayúscula inicial."
    },

    // --- MÓDULO 2: PLURALS & PREPOSITIONS ---
    {
        id: "a1-m2-l1-pdf-1",
        type: "fill-blanks",
        title: "Regular Plurals (-es)",
        prompt_es: "Escribe el plural de 'Bus'.",
        stimulus_en: "Bus -> ___",
        correct_answer: "buses",
        explanation: "Palabras que terminan en -s añaden -es en plural."
    },
    {
        id: "a1-m2-l1-pdf-2",
        type: "fill-blanks",
        title: "Regular Plurals (-ies)",
        prompt_es: "Escribe el plural de 'Country'.",
        stimulus_en: "Country -> ___",
        correct_answer: "countries",
        explanation: "Consonante + y -> se cambia por -ies."
    },
    {
        id: "a1-m2-l1-pdf-3",
        type: "matching",
        title: "Irregular Plurals",
        prompt_es: "Relaciona el singular con su plural irregular.",
        pairs: [
            {id: "i1", word: "Man", correctMatch: "Men"},
            {id: "i2", word: "Woman", correctMatch: "Women"},
            {id: "i3", word: "Child", correctMatch: "Children"},
            {id: "i4", word: "Person", correctMatch: "People"}
        ],
        explanation: "Los plurales irregulares no siguen la regla de añadir -s."
    },
    {
        id: "a1-m2-l2-pdf-1",
        type: "multiple-choice",
        title: "Preposition: On",
        prompt_es: "El lápiz está sobre la mesa (con contacto).",
        stimulus_en: "The pencil is ___ the table.",
        options: [
            {id: "on", text: "on"},
            {id: "above", text: "above"},
            {id: "under", text: "under"}
        ],
        correct_answer: "on",
        explanation: "'On' indica contacto con la superficie."
    },
    {
        id: "a1-m2-l2-pdf-2",
        type: "multiple-choice",
        title: "Preposition: Above",
        prompt_es: "La lámpara está sobre la mesa (sin contacto, colgando).",
        stimulus_en: "The lamp is ___ the table.",
        options: [
            {id: "on", text: "on"},
            {id: "above", text: "above"},
            {id: "behind", text: "behind"}
        ],
        correct_answer: "above",
        explanation: "'Above' indica que está por encima pero sin contacto."
    }
];
