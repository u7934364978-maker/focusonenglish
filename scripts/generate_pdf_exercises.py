import json

exercises = [
    # Lesson a1-m1-l1: Greetings & Introductions
    {
        "id": "a1-m1-l1-pdf-1",
        "lesson_id": "a1-m1-l1",
        "type": "matching",
        "title": "Greetings & Times of Day",
        "content": {
            "title": "Greetings & Times of Day",
            "instructions": "Match the greeting with the correct time of day according to the PDF.",
            "pairs": [
                {"item": "Good morning", "match": "From 6:00 to 12:00"},
                {"item": "Good afternoon", "match": "From 12:00 to 18:00"},
                {"item": "Good evening", "match": "From 18:00 to 24:00"},
                {"item": "Good night", "match": "When going to sleep"}
            ],
            "explanation": "En inglés, usamos diferentes saludos dependiendo de la hora del día. 'Good morning' es para la mañana, 'Good afternoon' para la tarde y 'Good evening' para la noche. 'Good night' se usa solo al despedirse para ir a dormir."
        }
    },
    {
        "id": "a1-m1-l1-pdf-2",
        "lesson_id": "a1-m1-l1",
        "type": "multiple-choice",
        "title": "Formal vs Informal Greetings",
        "content": {
            "title": "Formal vs Informal Greetings",
            "instructions": "Choose the most appropriate greeting for each situation.",
            "questions": [
                {
                    "id": "q1",
                    "question": "How do you say 'Hola' to a friend in an informal way?",
                    "options": ["Hello", "Hi", "Good morning", "Good evening"],
                    "correctAnswer": "Hi",
                    "explanation": "'Hi' es más informal que 'Hello'."
                },
                {
                    "id": "q2",
                    "question": "How do you say 'Adiós' formally?",
                    "options": ["Bye", "See you", "Goodbye", "Hi"],
                    "correctAnswer": "Goodbye",
                    "explanation": "'Goodbye' es la forma estándar y formal de despedirse."
                }
            ]
        }
    },
    {
        "id": "a1-m1-l1-pdf-3",
        "lesson_id": "a1-m1-l1",
        "type": "fill-blank",
        "title": "Self Introductions",
        "content": {
            "title": "Self Introductions",
            "instructions": "Complete the introduction sentences using the correct words from the PDF.",
            "questions": [
                {
                    "id": "q1",
                    "sentence": "My ___ is Pablo.",
                    "answer": "name",
                    "explanation": "Usamos 'My name is' para decir nuestro nombre."
                },
                {
                    "id": "q2",
                    "sentence": "I am 22 ___ old.",
                    "answer": "years",
                    "explanation": "Para decir la edad usamos la estructura 'I am [number] years old'."
                },
                {
                    "id": "q3",
                    "sentence": "I ___ from Spain.",
                    "answer": "am",
                    "explanation": "Usamos el verbo 'to be' (am) para indicar procedencia."
                }
            ]
        }
    },
    # Lesson a1-m1-l2: Pronouns & Articles
    {
        "id": "a1-m1-l2-pdf-1",
        "lesson_id": "a1-m1-l2",
        "type": "multiple-choice",
        "title": "Personal Pronouns",
        "content": {
            "title": "Personal Pronouns",
            "instructions": "Select the correct pronoun to replace the underlined words.",
            "questions": [
                {
                    "id": "q1",
                    "question": "<u>Maria</u> is from Spain.",
                    "options": ["He", "She", "It", "They"],
                    "correctAnswer": "She",
                    "explanation": "Maria es femenino singular, por lo que usamos 'She'."
                },
                {
                    "id": "q2",
                    "question": "<u>Pablo and I</u> are friends.",
                    "options": ["You", "They", "We", "He"],
                    "correctAnswer": "We",
                    "explanation": "Pablo y yo somos 'nosotros', es decir, 'We'."
                }
            ]
        }
    },
    {
        "id": "a1-m1-l2-pdf-2",
        "lesson_id": "a1-m1-l2",
        "type": "fill-blank",
        "title": "Articles A and An",
        "content": {
            "title": "Articles A and An",
            "instructions": "Fill in the blanks with 'a' or 'an'.",
            "questions": [
                {
                    "id": "q1",
                    "sentence": "___ book.",
                    "answer": "a",
                    "explanation": "Usamos 'a' delante de sonidos consonánticos (b)."
                },
                {
                    "id": "q2",
                    "sentence": "___ apple.",
                    "answer": "an",
                    "explanation": "Usamos 'an' delante de sonidos vocálicos (a)."
                },
                {
                    "id": "q3",
                    "sentence": "___ hour.",
                    "answer": "an",
                    "explanation": "En 'hour', la 'h' es muda, por lo que empieza por sonido vocálico."
                },
                {
                    "id": "q4",
                    "sentence": "___ university.",
                    "answer": "a",
                    "explanation": "En 'university', la 'u' suena como /ju:/ (sonido semiconsonántico), por lo que usamos 'a'."
                }
            ]
        }
    },
    {
        "id": "a1-m1-l2-pdf-3",
        "lesson_id": "a1-m1-l2",
        "type": "multiple-choice",
        "title": "Professions and Articles",
        "content": {
            "title": "Professions and Articles",
            "instructions": "Choose the correct sentence according to the rule in the PDF.",
            "questions": [
                {
                    "id": "q1",
                    "question": "How do you say 'Yo soy ingeniero' in English?",
                    "options": ["I am engineer", "I am a engineer", "I am an engineer"],
                    "correctAnswer": "I am an engineer",
                    "explanation": "En inglés, las profesiones siempre llevan artículo (a/an). 'Engineer' empieza por vocal, usamos 'an'."
                }
            ]
        }
    },
    # Lesson a1-m1-l3: Numbers & Nationalities
    {
        "id": "a1-m1-l3-pdf-1",
        "lesson_id": "a1-m1-l3",
        "type": "multiple-choice",
        "title": "Numbers 1-20",
        "content": {
            "title": "Numbers 1-20",
            "instructions": "Choose the correct spelling for the number.",
            "questions": [
                {
                    "id": "q1",
                    "question": "Number 12",
                    "options": ["Twelve", "Twelf", "Twenty", "Ten-two"],
                    "correctAnswer": "Twelve",
                    "explanation": "12 se escribe 'Twelve'."
                },
                {
                    "id": "q2",
                    "question": "Number 15",
                    "options": ["Fiveteen", "Fifteen", "Fifty", "Five"],
                    "correctAnswer": "Fifteen",
                    "explanation": "15 se escribe 'Fifteen'."
                }
            ]
        }
    },
    {
        "id": "a1-m1-l3-pdf-2",
        "lesson_id": "a1-m1-l3",
        "type": "fill-blank",
        "title": "Numbers 20-100",
        "content": {
            "title": "Numbers 20-100",
            "instructions": "Write the number in letters.",
            "questions": [
                {
                    "id": "q1",
                    "sentence": "22 = Twenty-___",
                    "answer": "two",
                    "explanation": "22 es 'Twenty-two'."
                },
                {
                    "id": "q2",
                    "sentence": "50 = ___",
                    "answer": "fifty",
                    "explanation": "50 es 'Fifty'."
                }
            ]
        }
    },
    {
        "id": "a1-m1-l3-pdf-3",
        "lesson_id": "a1-m1-l3",
        "type": "matching",
        "title": "Countries and Nationalities",
        "content": {
            "title": "Countries and Nationalities",
            "instructions": "Match the country with its nationality.",
            "pairs": [
                {"item": "Spain", "match": "Spanish"},
                {"item": "France", "match": "French"},
                {"item": "Germany", "match": "German"},
                {"item": "Italy", "match": "Italian"},
                {"item": "China", "match": "Chinese"}
            ],
            "explanation": "Las nacionalidades en inglés siempre se escriben con mayúscula (Capital letters)."
        }
    },
    {
        "id": "a1-m1-l3-pdf-4",
        "lesson_id": "a1-m1-l3",
        "type": "multiple-choice",
        "title": "Colours Rules",
        "content": {
            "title": "Colours Rules",
            "instructions": "Choose the correct sentence following the grammar rules for colours.",
            "questions": [
                {
                    "id": "q1",
                    "question": "Which sentence is correct?",
                    "options": ["It is my dog black", "It is my black dog", "It is my black dogs"],
                    "correctAnswer": "It is my black dog",
                    "explanation": "En inglés, el adjetivo (color) va DELANTE del sustantivo y es invariable (no cambia en plural)."
                }
            ]
        }
    },
    {
        "id": "a1-m1-l3-pdf-5",
        "lesson_id": "a1-m1-l3",
        "type": "multiple-choice",
        "title": "Asking about Colours",
        "content": {
            "title": "Asking about Colours",
            "instructions": "How do you ask about the colour of something?",
            "questions": [
                {
                    "id": "q1",
                    "question": "What is the correct question for plural objects (e.g., tomatoes)?",
                    "options": ["What colour is it?", "What colour are they?", "What is the colour?"],
                    "correctAnswer": "What colour are they?",
                    "explanation": "Usamos 'are they' para preguntar por el color de varios objetos (plural)."
                }
            ]
        }
    },
    # Lesson a1-m2-l1: Family & Plurals
    {
        "id": "a1-m2-l1-pdf-1",
        "lesson_id": "a1-m2-l1",
        "type": "fill-blank",
        "title": "Regular Plurals",
        "content": {
            "title": "Regular Plurals",
            "instructions": "Write the plural form of these nouns.",
            "questions": [
                {
                    "id": "q1",
                    "sentence": "Bus -> ___",
                    "answer": "buses",
                    "explanation": "Palabras que terminan en -s añaden -es en plural."
                },
                {
                    "id": "q2",
                    "sentence": "Country -> ___",
                    "answer": "countries",
                    "explanation": "Consonante + y -> se cambia por -ies."
                },
                {
                    "id": "q3",
                    "sentence": "Tomato -> ___",
                    "answer": "tomatoes",
                    "explanation": "Consonante + o -> añade -es."
                }
            ]
        }
    },
    {
        "id": "a1-m2-l1-pdf-2",
        "lesson_id": "a1-m2-l1",
        "type": "matching",
        "title": "Irregular Plurals",
        "content": {
            "title": "Irregular Plurals",
            "instructions": "Match the singular with its irregular plural.",
            "pairs": [
                {"item": "Man", "match": "Men"},
                {"item": "Woman", "match": "Women"},
                {"item": "Child", "match": "Children"},
                {"item": "Person", "match": "People"},
                {"item": "Tooth", "match": "Teeth"}
            ],
            "explanation": "Los plurales irregulares no siguen la regla de añadir -s, deben aprenderse de memoria."
        }
    },
    {
        "id": "a1-m2-l1-pdf-3",
        "lesson_id": "a1-m2-l1",
        "type": "multiple-choice",
        "title": "Demonstratives: This, That, These, Those",
        "content": {
            "title": "Demonstratives: This, That, These, Those",
            "instructions": "Choose the correct demonstrative.",
            "questions": [
                {
                    "id": "q1",
                    "question": "___ (singular, near) book is good.",
                    "options": ["This", "That", "These", "Those"],
                    "correctAnswer": "This",
                    "explanation": "Usamos 'This' para algo singular que está cerca."
                },
                {
                    "id": "q2",
                    "question": "___ (plural, far) are my friends.",
                    "options": ["This", "That", "These", "Those"],
                    "correctAnswer": "Those",
                    "explanation": "Usamos 'Those' para algo plural que está lejos."
                }
            ]
        }
    },
    {
        "id": "a1-m2-l1-pdf-4",
        "lesson_id": "a1-m2-l1",
        "type": "matching",
        "title": "Possessive Adjectives",
        "content": {
            "title": "Possessive Adjectives",
            "instructions": "Match the personal pronoun with its possessive adjective.",
            "pairs": [
                {"item": "I", "match": "My"},
                {"item": "You", "match": "Your"},
                {"item": "He", "match": "His"},
                {"item": "She", "match": "Her"},
                {"item": "We", "match": "Our"},
                {"item": "They", "match": "Their"}
            ],
            "explanation": "Los adjetivos posesivos indican a quién pertenece algo."
        }
    },
    # Lesson a1-m2-l2: House & Prepositions
    {
        "id": "a1-m2-l2-pdf-1",
        "lesson_id": "a1-m2-l2",
        "type": "multiple-choice",
        "title": "On vs Above",
        "content": {
            "title": "On vs Above",
            "instructions": "Choose the correct preposition based on the contact rule.",
            "questions": [
                {
                    "id": "q1",
                    "question": "The pencil is ___ the table (making contact).",
                    "options": ["on", "above", "under"],
                    "correctAnswer": "on",
                    "explanation": "'On' indica contacto con la superficie."
                },
                {
                    "id": "q2",
                    "question": "The lamp is ___ the table (hanging from ceiling, no contact).",
                    "options": ["on", "above", "behind"],
                    "correctAnswer": "above",
                    "explanation": "'Above' indica que está por encima pero sin contacto."
                }
            ]
        }
    },
    {
        "id": "a1-m2-l2-pdf-2",
        "lesson_id": "a1-m2-l2",
        "type": "fill-blank",
        "title": "Prepositions of Place",
        "content": {
            "title": "Prepositions of Place",
            "instructions": "Complete with the correct preposition (in, behind, next to, between).",
            "questions": [
                {
                    "id": "q1",
                    "sentence": "The sofa is ___ the door (cerca de).",
                    "answer": "next to",
                    "explanation": "'Next to' significa al lado o cerca de."
                },
                {
                    "id": "q2",
                    "sentence": "The table is ___ the armchair and the sofa.",
                    "answer": "between",
                    "explanation": "Usamos 'between' cuando algo está entre dos objetos."
                }
            ]
        }
    }
]

def escape_sql(s):
    if s is None:
        return "NULL"
    return "$_$" + s + "$_$"

sql = "-- Migration: Add PDF-based A1 exercises\n\nBEGIN;\n\n"

for i, ex in enumerate(exercises):
    sql += f"""INSERT INTO public.course_exercises (id, lesson_id, order_index, type, title, content)
VALUES (
  '{ex['id']}',
  '{ex['lesson_id']}',
  {i + 100}, -- Start from 100 to avoid conflict with existing ones if any
  '{ex['type']}',
  {escape_sql(ex['title'])},
  {escape_sql(json.dumps(ex['content']))}
) ON CONFLICT (id) DO UPDATE SET content = EXCLUDED.content;

"""

sql += "COMMIT;"

with open('supabase/migrations/20260209_add_pdf_exercises.sql', 'w') as f:
    f.write(sql)

print("Generated migration at supabase/migrations/20260209_add_pdf_exercises.sql")
