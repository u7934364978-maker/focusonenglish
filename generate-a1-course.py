#!/usr/bin/env python3
"""
Generador automático del Curso A1 completo
Replica la estructura del curso B2 pero adaptado al nivel A1 CEFR
"""

# Estructura de Módulos A1 basada en CEFR A1 oficial
modules_structure = [
    {
        "id": "a1-module-1",
        "number": 1,
        "title": "Módulo 1: Introducción y Presentaciones",
        "description": "Aprende a presentarte, hablar sobre ti mismo y tu familia en situaciones cotidianas básicas",
        "duration": "4-5 semanas",
        "topics": [
            "Saludos y despedidas",
            "Información personal básica",
            "Familia y amigos",
            "Números y fechas",
            "Países y nacionalidades"
        ],
        "grammar": [
            "Verb to be (am/is/are)",
            "Personal pronouns (I, you, he, she, it, we, they)",
            "Possessive adjectives (my, your, his, her, our, their)",
            "Present Simple - positive",
            "Questions with to be",
            "Articles (a/an/the)"
        ],
        "vocabulary": [
            "Saludos básicos",
            "Países y nacionalidades",
            "Números 0-100",
            "Días de la semana",
            "Meses del año",
            "Familia (mother, father, brother, sister)"
        ],
        "lessons": 7
    },
    {
        "id": "a1-module-2",
        "number": 2,
        "title": "Módulo 2: Vida Cotidiana y Rutinas",
        "description": "Descubre cómo hablar sobre tu rutina diaria, trabajo y actividades cotidianas",
        "duration": "4-5 semanas",
        "topics": [
            "Rutinas diarias",
            "Trabajo y profesiones",
            "Tiempo y horarios",
            "Actividades de tiempo libre",
            "Casa y habitaciones"
        ],
        "grammar": [
            "Present Simple - negative and questions",
            "Frequency adverbs (always, usually, sometimes, never)",
            "Prepositions of time (in, on, at)",
            "Time expressions",
            "Can/can't for ability",
            "Object pronouns"
        ],
        "vocabulary": [
            "Profesiones básicas",
            "Verbos de rutina diaria",
            "Expresiones de tiempo",
            "Habitaciones de la casa",
            "Muebles básicos",
            "Actividades de ocio"
        ],
        "lessons": 7
    },
    {
        "id": "a1-module-3",
        "number": 3,
        "title": "Módulo 3: Compras, Comida y Lugares",
        "description": "Aprende a comprar, pedir comida y moverte por la ciudad en inglés",
        "duration": "4-5 semanas",
        "topics": [
            "Comida y bebidas",
            "Compras y tiendas",
            "Restaurantes y cafés",
            "Direcciones y lugares",
            "Transporte público"
        ],
        "grammar": [
            "There is/There are",
            "Some/any/no",
            "Countable and uncountable nouns",
            "How much/How many",
            "Prepositions of place (in, on, under, next to)",
            "Imperatives (turn left, go straight)",
            "Present Continuous"
        ],
        "vocabulary": [
            "Alimentos y bebidas",
            "Tiendas y comercios",
            "Expresiones en restaurantes",
            "Direcciones básicas",
            "Medios de transporte",
            "Colores y adjetivos descriptivos"
        ],
        "lessons": 7
    }
]

# Tipos de ejercicios por lección (15-20 ejercicios cada una)
def generate_lesson_structure(module_num, lesson_num, lesson_title, grammar_focus):
    """Genera la estructura de una lección completa con todos sus ejercicios"""
    lesson_id = f"a1-m{module_num}-l{lesson_num}"
    
    exercises = []
    
    # 1. Grammar exercises (2-3)
    exercises.append({
        "id": f"{lesson_id}-grammar-1",
        "type": "grammar",
        "title": f"{grammar_focus} - Formation and Use"
    })
    exercises.append({
        "id": f"{lesson_id}-grammar-2",
        "type": "grammar",
        "title": f"{grammar_focus} - Practice Exercises"
    })
    
    # 2. Reading exercise (1)
    exercises.append({
        "id": f"{lesson_id}-reading-1",
        "type": "reading",
        "title": f"Reading: {lesson_title}"
    })
    
    # 3. Listening exercise (1)
    exercises.append({
        "id": f"{lesson_id}-listening-1",
        "type": "listening",
        "title": f"Listening: {lesson_title}"
    })
    
    # 4. Speaking exercise (1)
    exercises.append({
        "id": f"{lesson_id}-speaking-1",
        "type": "speaking",
        "title": f"Speaking Practice: {lesson_title}"
    })
    
    # 5. Writing exercise (1)
    exercises.append({
        "id": f"{lesson_id}-writing-1",
        "type": "writing",
        "title": f"Writing: {lesson_title}"
    })
    
    # 6. Pronunciation exercise (1)
    exercises.append({
        "id": f"{lesson_id}-pronunciation-1",
        "type": "pronunciation-practice",
        "title": f"Pronunciation: {grammar_focus}"
    })
    
    # 7. Vocabulary exercises (2)
    exercises.append({
        "id": f"{lesson_id}-vocabulary-1",
        "type": "vocabulary",
        "title": f"Vocabulary: {lesson_title}"
    })
    exercises.append({
        "id": f"{lesson_id}-vocabulary-2",
        "type": "vocabulary",
        "title": f"Vocabulary Practice"
    })
    
    # 8. Additional practice exercises (6-10)
    exercises.extend([
        {
            "id": f"{lesson_id}-fill-blanks-1",
            "type": "fill-in-blanks",
            "title": f"Complete the Sentences - {grammar_focus}"
        },
        {
            "id": f"{lesson_id}-multiple-choice-1",
            "type": "multiple-choice",
            "title": f"Multiple Choice: {grammar_focus}"
        },
        {
            "id": f"{lesson_id}-matching-1",
            "type": "matching",
            "title": f"Match Words and Meanings"
        },
        {
            "id": f"{lesson_id}-sentence-building-1",
            "type": "sentence-building",
            "title": f"Build Sentences - {grammar_focus}"
        },
        {
            "id": f"{lesson_id}-true-false-1",
            "type": "true-false",
            "title": f"True or False: {lesson_title}"
        },
        {
            "id": f"{lesson_id}-dialogue-1",
            "type": "dialogue-practice",
            "title": f"Dialogue Practice: {lesson_title}"
        }
    ])
    
    return {
        "id": lesson_id,
        "title": lesson_title,
        "exercises": exercises
    }

# Lecciones específicas para cada módulo
modules_lessons = {
    1: [
        ("Lección 1: Verb To Be - I am, You are", "Verb to be"),
        ("Lección 2: Personal Pronouns and Possessives", "Personal pronouns"),
        ("Lección 3: Countries and Nationalities", "Questions with to be"),
        ("Lección 4: Numbers and Dates", "Numbers 0-100"),
        ("Lección 5: Family and Friends", "Family vocabulary"),
        ("Lección 6: Mock Exam - Module 1", "Module 1 Review"),
        ("Lección 7: Consolidation and Practice", "All Module 1 topics"),
    ],
    2: [
        ("Lección 1: Daily Routines", "Present Simple"),
        ("Lección 2: Jobs and Professions", "Present Simple questions"),
        ("Lección 3: Time and Schedules", "Time expressions"),
        ("Lección 4: Free Time Activities", "Frequency adverbs"),
        ("Lección 5: Can and Can't for Ability", "Can/Can't"),
        ("Lección 6: Mock Exam - Module 2", "Module 2 Review"),
        ("Lección 7: Consolidation and Practice", "All Module 2 topics"),
    ],
    3: [
        ("Lección 1: Food and Drinks", "Countable/Uncountable"),
        ("Lección 2: Shopping and Stores", "Some/Any"),
        ("Lección 3: At the Restaurant", "Would like"),
        ("Lección 4: Giving Directions", "Prepositions of place"),
        ("Lección 5: Present Continuous", "Present Continuous"),
        ("Lección 6: Mock Exam - Module 3", "Module 3 Review"),
        ("Lección 7: Consolidation and Practice", "All Module 3 topics"),
    ]
}

# Generar el contenido TypeScript
def generate_typescript_content():
    """Genera el contenido completo del archivo TypeScript"""
    
    output = """// Curso A1 Completo - Estructura Basada en CEFR A1 Official
// Replicando la estructura del curso B2 pero adaptado a nivel principiante
// CEFR A1: Usuario Básico - Nivel Breakthrough

export type ExerciseType = 
  | 'reading'
  | 'writing'
  | 'listening'
  | 'speaking'
  | 'grammar'
  | 'vocabulary'
  | 'pronunciation'
  | 'pronunciation-practice'
  | 'fill-in-blanks'
  | 'multiple-choice'
  | 'sentence-building'
  | 'matching'
  | 'true-false'
  | 'dialogue-practice';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank' | 'short-answer' | 'essay';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  acceptableAnswers?: string[];
  explanation?: string;
  points: number;
}

export interface GrammarExercise {
  id: string;
  type: 'grammar';
  title: string;
  grammarPoint: string;
  explanation: string;
  examples: string[];
  questions: Question[];
}

export interface VocabularyExercise {
  id: string;
  type: 'vocabulary';
  title: string;
  vocabularySet: { word: string; definition: string; example: string }[];
  questions: Question[];
}

export interface ReadingExercise {
  id: string;
  type: 'reading';
  title: string;
  text: string;
  wordCount: number;
  readingTime: number;
  questions: Question[];
  vocabularyHelp?: { word: string; definition: string }[];
}

export interface ListeningExercise {
  id: string;
  type: 'listening';
  audioUrl: string;
  transcript?: string;
  duration: number;
  questions: Question[];
  allowReplay: boolean;
  maxReplays?: number;
}

export interface WritingExercise {
  id: string;
  type: 'writing';
  title: string;
  prompt: string;
  wordLimit: { min: number; max: number };
  timeLimit?: number;
  rubric: {
    criteria: string;
    points: number;
    description: string;
  }[];
  tips: string[];
  exampleResponse?: string;
}

export interface SpeakingExercise {
  id: string;
  type: 'speaking' | 'pronunciation';
  prompt: string;
  targetText?: string;
  timeLimit?: number;
  evaluationCriteria: {
    pronunciation: boolean;
    fluency: boolean;
    grammar: boolean;
    vocabulary: boolean;
  };
  modelAudioUrl?: string;
  hints?: string[];
}

export interface PronunciationPracticeExercise {
  id: string;
  type: 'pronunciation-practice';
  title: string;
  targetSentences: {
    text: string;
    audioUrl: string;
    phonetic: string;
  }[];
  focusPoints: string[];
  tips: string[];
}

export type Exercise = 
  | GrammarExercise
  | VocabularyExercise
  | ReadingExercise
  | ListeningExercise
  | WritingExercise
  | SpeakingExercise
  | PronunciationPracticeExercise
  | { id: string; type: ExerciseType; title: string; [key: string]: any };

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  duration?: number;
  exercises: Exercise[];
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  grammar: string[];
  vocabulary: string[];
  lessons: Lesson[];
  examPractice?: {
    mockExam: boolean;
    examDuration: number;
    parts: string[];
  };
}

export interface CourseProgress {
  completedLessons: string[];
  currentLesson: string;
  overallProgress: number;
}

"""
    
    # Generar cada módulo
    for module_data in modules_structure:
        module_num = module_data["number"]
        module_id = module_data["id"]
        
        output += f"\n// ===============================================\n"
        output += f"// {module_data['title']}\n"
        output += f"// ===============================================\n\n"
        
        output += f"export const MODULE_{module_num}_LESSONS: Lesson[] = [\n"
        
        # Generar todas las lecciones del módulo
        for lesson_idx, (lesson_title, grammar_focus) in enumerate(modules_lessons[module_num], 1):
            lesson = generate_lesson_structure(module_num, lesson_idx, lesson_title, grammar_focus)
            
            output += f"  {{\n"
            output += f"    id: '{lesson['id']}',\n"
            output += f"    title: '{lesson['title']}',\n"
            output += f"    description: 'Practice {grammar_focus} with comprehensive exercises',\n"
            output += f"    duration: 90, // minutes\n"
            output += f"    exercises: [\n"
            
            # Agregar ejercicios básicos (solo estructura, contenido se añadirá después)
            for exercise in lesson['exercises']:
                output += f"      {{\n"
                output += f"        id: '{exercise['id']}',\n"
                output += f"        type: '{exercise['type']}',\n"
                output += f"        title: '{exercise['title']}',\n"
                output += f"        // Content will be added in future updates\n"
                output += f"      }} as Exercise,\n"
            
            output += f"    ]\n"
            output += f"  }},\n"
        
        output += f"];\n\n"
    
    # Generar ALL_MODULES
    output += "\n// ===============================================\n"
    output += "// ALL MODULES EXPORT\n"
    output += "// ===============================================\n\n"
    
    output += "export const ALL_MODULES: Module[] = [\n"
    
    for module_data in modules_structure:
        module_num = module_data["number"]
        output += f"  {{\n"
        output += f"    id: '{module_data['id']}',\n"
        output += f"    number: {module_num},\n"
        output += f"    title: '{module_data['title']}',\n"
        output += f"    description: '{module_data['description']}',\n"
        output += f"    duration: '{module_data['duration']}',\n"
        output += f"    topics: {module_data['topics']},\n"
        output += f"    grammar: {module_data['grammar']},\n"
        output += f"    vocabulary: {module_data['vocabulary']},\n"
        output += f"    lessons: MODULE_{module_num}_LESSONS,\n"
        output += f"    examPractice: {{\n"
        output += f"      mockExam: true,\n"
        output += f"      examDuration: 60,\n"
        output += f"      parts: ['Reading & Writing', 'Listening', 'Speaking']\n"
        output += f"    }}\n"
        output += f"  }},\n"
    
    output += "];\n\n"
    
    # Generar A1_FULL_COURSE
    output += "// ===============================================\n"
    output += "// COURSE CONFIGURATION\n"
    output += "// ===============================================\n\n"
    
    output += """export const A1_FULL_COURSE = {
  id: 'a1-beginner-complete',
  title: 'A1 Beginner English Course - Complete Program',
  level: 'A1',
  description: 'Curso completo de inglés para principiantes nivel A1 (CEFR) con ejercicios interactivos, grabación de voz, evaluación de pronunciación y práctica exhaustiva de las 4 habilidades básicas',
  duration: '12-15 semanas',
  totalModules: 3,
  totalLessons: 21,
  cefrLevel: 'A1',
  cefrDescription: 'Can understand and use familiar everyday expressions and very basic phrases aimed at the satisfaction of needs of a concrete type. Can introduce themselves and others and can ask and answer questions about personal details such as where they live, people they know and things they have.',
  skills: ['Reading', 'Writing', 'Listening', 'Speaking'],
  features: [
    'Interactive exercises with instant feedback',
    'Voice recording for speaking practice',
    'Pronunciation evaluation with AI',
    'Authentic listening materials',
    'Guided writing practice',
    'Grammar explanations and practice',
    'Essential vocabulary building',
    'Mock exams for each module',
    'Progress tracking',
    'Mobile-friendly design'
  ],
  targetAudience: 'Complete beginners or false beginners who want to build a solid foundation in English',
  learningOutcomes: [
    'Introduce yourself and greet others',
    'Talk about your family, work, and daily routines',
    'Ask and answer simple questions',
    'Understand basic instructions and information',
    'Write simple sentences and short texts',
    'Order food and ask for directions',
    'Understand basic signs and notices'
  ]
};

const TOTAL_LESSONS = MODULE_1_LESSONS.length + MODULE_2_LESSONS.length + MODULE_3_LESSONS.length;

console.log(`✅ A1 Course Data loaded successfully`);
console.log(`📚 Total Modules: ${ALL_MODULES.length}`);
console.log(`📖 Total Lessons: ${TOTAL_LESSONS}`);
console.log(`🎯 CEFR Level: A1 - Beginner`);
"""
    
    return output

# Ejecutar generación
if __name__ == "__main__":
    print("🚀 Generating A1 Course structure...")
    content = generate_typescript_content()
    
    output_file = "lib/course-data-a1.ts"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(content)
    
    lines = len(content.split("\n"))
    size_kb = len(content) / 1024
    
    print(f"✅ Course structure generated successfully!")
    print(f"📄 File: {output_file}")
    print(f"📏 Lines: {lines:,}")
    print(f"💾 Size: {size_kb:.1f} KB")
    print(f"\n📊 Structure:")
    print(f"   • 3 Modules")
    print(f"   • 7 lessons per module = 21 total lessons")
    print(f"   • ~15 exercises per lesson = ~315 total exercises")
    print(f"\n✨ Next steps:")
    print(f"   1. Review the generated structure")
    print(f"   2. Add detailed content to each exercise")
    print(f"   3. Create audio files for listening exercises")
    print(f"   4. Test all exercises")
