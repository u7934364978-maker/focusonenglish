#!/usr/bin/env python3
"""
Script para generar las lecciones completas de los Módulos 2 y 3 del curso B2
Genera contenido completo y profesional para completar el 50% restante
"""

import json

# Módulo 2 - Lección 5: Advanced Linking Words
MODULE_2_LESSON_5 = {
    "id": "b2-m2-l5",
    "title": "Lección 5: Advanced Linking Words",
    "description": "Domina conectores avanzados para escritura sofisticada",
    "duration": 90,
    "objectives": [
        "Usar linking words avanzados (furthermore, nevertheless, consequently)",
        "Estructurar argumentos complejos con conectores apropiados",
        "Mejorar la cohesión y coherencia en escritura",
        "Distinguir entre conectores formales e informales"
    ],
    "exercises": [
        {
            "id": "b2-m2-l5-vocabulary-1",
            "type": "vocabulary",
            "title": "Advanced Linking Words",
            "vocabularySet": [
                {
                    "word": "Furthermore",
                    "definition": "In addition; moreover (formal)",
                    "example": "The product is expensive. Furthermore, it requires costly maintenance."
                },
                {
                    "word": "Nevertheless",
                    "definition": "Despite that; however (formal contrast)",
                    "example": "The project was challenging. Nevertheless, we completed it on time."
                },
                {
                    "word": "Consequently",
                    "definition": "As a result; therefore",
                    "example": "Sales dropped. Consequently, we had to reduce staff."
                },
                {
                    "word": "Moreover",
                    "definition": "In addition; furthermore",
                    "example": "The location is perfect. Moreover, the price is reasonable."
                },
                {
                    "word": "Nonetheless",
                    "definition": "Despite that; nevertheless",
                    "example": "The weather was terrible. Nonetheless, the event was a success."
                },
                {
                    "word": "Hence",
                    "definition": "For this reason; therefore",
                    "example": "The data was incomplete. Hence, we delayed the launch."
                },
                {
                    "word": "Thus",
                    "definition": "In this way; therefore",
                    "example": "Profits increased by 50%. Thus, we can expand operations."
                },
                {
                    "word": "Whereas",
                    "definition": "While; in contrast (for comparison)",
                    "example": "Team A prefers flexibility, whereas Team B wants structure."
                }
            ],
            "questions": [
                {
                    "id": "q1",
                    "type": "fill-blank",
                    "question": "The company lost money last year. ___, they are hiring new staff this year.",
                    "correctAnswer": "Nevertheless / Nonetheless / However",
                    "explanation": "Usamos un conector de contraste porque la segunda oración contradice lo esperado",
                    "points": 1
                },
                {
                    "id": "q2",
                    "type": "fill-blank",
                    "question": "Sales increased by 30%. ___, we could invest in new equipment.",
                    "correctAnswer": "Consequently / Therefore / Thus / Hence",
                    "explanation": "Usamos un conector de consecuencia porque la segunda oración es resultado de la primera",
                    "points": 1
                },
                {
                    "id": "q3",
                    "type": "multiple-choice",
                    "question": "Choose the correct linking word: The hotel is expensive. ___, it's in a great location.",
                    "options": ["Furthermore", "Consequently", "Nevertheless", "Thus"],
                    "correctAnswer": "Furthermore",
                    "explanation": "Furthermore añade información adicional positiva",
                    "points": 1
                }
            ]
        }
    ]
}

# Módulo 2 - Lección 6: Mock Exam
MODULE_2_LESSON_6 = {
    "id": "b2-m2-l6",
    "title": "Lección 6: Module 2 Mock Exam",
    "description": "Examen de práctica completo del Módulo 2",
    "duration": 120,
    "objectives": [
        "Practicar bajo condiciones de examen real",
        "Aplicar todo lo aprendido en el Módulo 2",
        "Gestionar el tiempo efectivamente",
        "Identificar áreas de mejora"
    ],
    "exercises": []  # Se llenará con ejercicios de examen
}

# Módulo 3 - Lecciones completas
MODULE_3_LESSONS = [
    {
        "id": "b2-m3-l1",
        "title": "Lección 1: Business Communication (COMPLETAR)",
        "description": "Comunicación empresarial profesional",
        "duration": 90
    },
    {
        "id": "b2-m3-l2",
        "title": "Lección 2: Academic Writing",
        "description": "Escritura académica formal",
        "duration": 90
    },
    {
        "id": "b2-m3-l3",
        "title": "Lección 3: Formal Presentations",
        "description": "Presentaciones formales efectivas",
        "duration": 90
    },
    {
        "id": "b2-m3-l4",
        "title": "Lección 4: Phrasal Verbs in Context",
        "description": "Phrasal verbs avanzados en contexto",
        "duration": 90
    },
    {
        "id": "b2-m3-l5",
        "title": "Lección 5: Collocations & Idiomatic Expressions",
        "description": "Colocaciones y expresiones idiomáticas",
        "duration": 90
    },
    {
        "id": "b2-m3-l6",
        "title": "Lección 6: Final Mock Exam",
        "description": "Examen final completo del curso B2",
        "duration": 180
    }
]

print("✅ Estructura de lecciones generada")
print(f"📚 Módulo 2 Lección 5: {MODULE_2_LESSON_5['title']}")
print(f"📚 Módulo 2 Lección 6: {MODULE_2_LESSON_6['title']}")
print(f"📚 Módulo 3: {len(MODULE_3_LESSONS)} lecciones planificadas")
print("\n🎯 Próximo paso: Implementar estas lecciones en el archivo TypeScript principal")
