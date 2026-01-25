import { LevelCurriculum } from './curriculum-data';

export const A1_PREMIUM_CURRICULUM: LevelCurriculum = {
  level: "A1",
  cefr: "Principiante Premium",
  description: "Curso intensivo de 9 meses (36 semanas) diseñado para aprender desde cero con técnicas de aprendizaje digital avanzadas.",
  duration: "9 meses (36 semanas)",
  modules: [
    {
      title: "Mes 1: Fundamentos y Primeros Pasos",
      topics: [
        "Semana 1: Saludos y el alfabeto (Active Recall)",
        "Semana 2: El verbo To Be y pronombres",
        "Semana 3: Números y colores (Gamified)",
        "Semana 4: Repaso y Sopa de letras de vocabulario base"
      ],
      grammar: ["Verb To Be", "Subject Pronouns", "Articles a/an/the"],
      vocabulary: ["Greetings", "Numbers 1-100", "Colors", "Alphabet"],
      skills: {
        reading: ["Textos muy cortos de presentación"],
        writing: ["Escribir nombre y datos personales"],
        listening: ["Entender saludos básicos"],
        speaking: ["Presentarse a sí mismo"]
      }
    },
    {
      title: "Mes 2: Mi Mundo Cercano",
      topics: [
        "Semana 5: Mi familia (Visual Association)",
        "Semana 6: Partes de la casa",
        "Semana 7: Adjetivos posesivos",
        "Semana 8: Crucigrama familiar y repaso de posesión"
      ],
      grammar: ["Possessive Adjectives", "Genitive 's", "Plural nouns"],
      vocabulary: ["Family members", "House rooms", "Furniture", "Adjectives"],
      skills: {
        reading: ["Descripciones cortas de familias"],
        writing: ["Describir su propia casa"],
        listening: ["Identificar miembros de la familia en audio"],
        speaking: ["Hablar de su familia"]
      }
    },
    {
      title: "Mes 3: Rutinas y Tiempo",
      topics: [
        "Semana 9: Rutina diaria (Spaced Repetition)",
        "Semana 10: Días, meses y horas",
        "Semana 11: Presente Simple (I/You/We/They)",
        "Semana 12: Actividades interactivas de tiempo libre"
      ],
      grammar: ["Present Simple", "Prepositions of time (in, on, at)", "Adverbs of frequency"],
      vocabulary: ["Daily actions", "Days/Months", "Hobbies", "Time expressions"],
      skills: {
        reading: ["Horarios y agendas"],
        writing: ["Escribir sobre un día típico"],
        listening: ["Entender horas y citas"],
        speaking: ["Contar su rutina"]
      }
    },
    {
      title: "Mes 4: Comida y Necesidades",
      topics: [
        "Semana 13: En el restaurante (Roleplay digital)",
        "Semana 14: Comida contable e incontable",
        "Semana 15: Ir de compras (Interactive)",
        "Semana 16: Sopa de letras de ingredientes y comidas"
      ],
      grammar: ["There is/There are", "Countable/Uncountable", "Some/Any", "How much/many"],
      vocabulary: ["Food & Drink", "Vegetables", "Fruits", "Shop items"],
      skills: {
        reading: ["Menús y listas de compra"],
        writing: ["Escribir una receta simple"],
        listening: ["Entender pedidos de comida"],
        speaking: ["Pedir comida en un café"]
      }
    },
    {
      title: "Mes 5: Mi Ciudad y Movilidad",
      topics: [
        "Semana 17: Lugares en la ciudad",
        "Semana 18: Dar y pedir direcciones (Active Recall)",
        "Semana 19: Medios de transporte",
        "Semana 20: Crucigrama de la ciudad y navegación"
      ],
      grammar: ["Prepositions of place", "Imperatives", "Can/Can't for possibility"],
      vocabulary: ["Buildings", "Places", "Transport", "Directions"],
      skills: {
        reading: ["Mapas y señales"],
        writing: ["Dar instrucciones de ruta"],
        listening: ["Seguir direcciones en audio"],
        speaking: ["Preguntar por un lugar"]
      }
    },
    {
      title: "Mes 6: Trabajo y Habilidades",
      topics: [
        "Semana 21: Profesiones",
        "Semana 22: Habilidades con 'Can'",
        "Semana 23: Mi lugar de trabajo",
        "Semana 24: Repaso de habilidades y retos gamificados"
      ],
      grammar: ["Can/Can't for ability", "Object Pronouns", "Present Continuous intro"],
      vocabulary: ["Jobs", "Workplaces", "Action verbs", "Abilities"],
      skills: {
        reading: ["Perfiles laborales simples"],
        writing: ["Escribir sobre su trabajo/estudio"],
        listening: ["Entender descripciones de empleos"],
        speaking: ["Hablar de lo que sabe hacer"]
      }
    },
    {
      title: "Mes 7: Salud y Cuerpo",
      topics: [
        "Semana 25: Partes del cuerpo",
        "Semana 26: Salud y enfermedades",
        "Semana 27: Consejos con 'Should'",
        "Semana 28: Sopa de letras médica y bienestar"
      ],
      grammar: ["Should/Shouldn't", "Have to", "Adverbs of manner"],
      vocabulary: ["Body parts", "Health problems", "Medicines", "Feelings"],
      skills: {
        reading: ["Consejos de salud simples"],
        writing: ["Escribir una nota al médico"],
        listening: ["Entender síntomas en audio"],
        speaking: ["Describir cómo se siente"]
      }
    },
    {
      title: "Mes 8: Pasado y Experiencias",
      topics: [
        "Semana 29: El pasado del To Be (Was/Were)",
        "Semana 30: Pasado Simple (verbos regulares)",
        "Semana 31: Mi última vacación",
        "Semana 32: Crucigrama de verbos en pasado"
      ],
      grammar: ["Past Simple To Be", "Past Simple Regular Verbs", "Past time expressions"],
      vocabulary: ["Past verbs", "Travel", "Holiday activities", "Weather"],
      skills: {
        reading: ["Historias cortas en pasado"],
        writing: ["Escribir sobre el fin de semana"],
        listening: ["Entender relatos de viajes"],
        speaking: ["Contar qué hizo ayer"]
      }
    },
    {
      title: "Mes 9: Futuro y Consolidación",
      topics: [
        "Semana 33: Planes con 'Going to'",
        "Semana 34: Predicciones y deseos",
        "Semana 35: Preparación de proyecto final",
        "Semana 36: Examen final y certificación A1"
      ],
      grammar: ["Future with Going to", "Present Continuous for future", "Review of all tenses"],
      vocabulary: ["Future plans", "Ambitions", "Course review vocabulary"],
      skills: {
        reading: ["Textos sobre el futuro"],
        writing: ["Escribir sus metas"],
        listening: ["Entender planes de otros"],
        speaking: ["Hablar de sus próximos pasos"]
      }
    }
  ]
};
