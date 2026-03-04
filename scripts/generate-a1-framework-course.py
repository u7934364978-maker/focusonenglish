import json
import os
import random
import argparse
import sys
import re

# ─── CONSTANTS ────────────────────────────────────────────────────────────────

VALID_TYPES = {
    "multiple-choice",
    "fill-blank",
    "sentence-building",
    "true-false",
    "short-writing",
    "flashcard",
    "listening-dictation",
    "pronunciation",
    "reorder-words",
    "reading-comprehension",
}

DEFAULT_OUTPUT_DIR = "src/content/cursos/ingles-a1"
UNITS_COUNT = 60

# ─── HELPERS ──────────────────────────────────────────────────────────────────

def bi(en: str, es: str) -> str:
    return f"[[{en}|{es}]]"

def make_id(unit_id: int, counter: int) -> str:
    return f"A1_U{unit_id}_I{counter}"

def rotate_correct(idx: int, options: list) -> str:
    pos = idx % len(options)
    return options[pos]["id"]


# ─── UNIT DATA ────────────────────────────────────────────────────────────────

UNIT_DATA: dict = {
    1: {
        "title": "Greetings and Personal Information",
        "module": 1,
        "vocab": [
            ("Hello", "Hola"),
            ("Hi", "Hola (informal)"),
            ("Good morning", "Buenos días"),
            ("Good afternoon", "Buenas tardes"),
            ("Good evening", "Buenas noches (saludo)"),
            ("Good night", "Buenas noches (despedida)"),
            ("Goodbye", "Adiós"),
            ("Bye", "Chao"),
            ("Name", "Nombre"),
            ("Surname", "Apellido"),
            ("My", "Mi"),
            ("Your", "Tu"),
            ("Nice to meet you", "Mucho gusto"),
            ("Please", "Por favor"),
            ("Thank you", "Gracias"),
        ],
        "grammar_patterns": [
            ("[[I|Yo]] ______ [[a|un]] [[student|estudiante]].", "am"),
            ("[[You|Tú]] ______ [[my|mi]] [[teacher|profesor]].", "are"),
            ("[[My|Mi]] [[name|nombre]] ______ [[Anna|Anna]].", "is"),
            ("[[I|Yo]] ______ [[from|de]] [[London|Londres]].", "am"),
            ("[[You|Tú]] ______ [[not|no]] [[a|un]] [[doctor|médico]].", "are"),
            ("[[What|Cuál]] ______ [[your|tu]] [[name|nombre]]?", "is"),
            ("[[I|Yo]] ______ [[not|no]] [[a|un]] [[teacher|profesor]].", "am"),
            ("[[Nice|Encantado]] [[to|de]] [[meet|conocerte]] ______.", "you"),
        ],
        "dialogue_lines": [
            "[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Mark|Mark]] [[Davis|Davis]].",
            "[[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]] [[from|de]] [[London|Londres]].",
            "[[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|te]], [[Mark|Mark]]!",
            "[[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|te]] [[too|también]]!",
            "[[What|Cuál]] [[is|es]] [[your|tu]] [[surname|apellido]]?",
            "[[My|Mi]] [[surname|apellido]] [[is|es]] [[Davis|Davis]].",
        ],
        "reading_questions": [
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|el]] [[man's|del hombre]] [[name|nombre]]?",
                "options": [("Mark", "Mark"), ("John", "Juan"), ("Tom", "Tomás")],
                "correct_idx": 0,
            },
            {
                "question_en": "[[Where|De dónde]] [[is|es]] [[Mark|Mark]] [[from|de]]?",
                "options": [("Paris", "París"), ("Madrid", "Madrid"), ("London", "Londres")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[Mark's|de Mark]] [[surname|apellido]]?",
                "options": [("Davis", "Davis"), ("Smith", "Smith"), ("Brown", "Brown")],
                "correct_idx": 0,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[Mark's|de Mark]] [[occupation|ocupación]]?",
                "options": [("teacher", "profesor"), ("student", "estudiante"), ("doctor", "médico")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[How|Cómo]] [[does|hace]] [[Mark|Mark]] [[greet|saludar]]?",
                "options": [("Good night", "Buenas noches"), ("Hello", "Hola"), ("Goodbye", "Adiós")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Qué]] [[phrase|frase]] [[shows|muestra]] [[politeness|cortesía]] [[when|al]] [[meeting|conocer]] [[someone|a alguien]]?",
                "options": [("Goodbye", "Adiós"), ("See you", "Hasta luego"), ("Nice to meet you", "Mucho gusto")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Qué]] [[does|significa]] '[[Hi|Hola]]' [[mean|significa]]?",
                "options": [("Goodbye", "Adiós"), ("Hello (informal)", "Hola (informal)"), ("Good morning", "Buenos días")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Which|Cuál]] [[greeting|saludo]] [[is|es]] [[used|se usa]] [[in|en]] [[the|la]] [[morning|mañana]]?",
                "options": [("Good afternoon", "Buenas tardes"), ("Good night", "Buenas noches"), ("Good morning", "Buenos días")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Qué]] [[word|palabra]] [[means|significa]] '[[Apellido|Surname]]' [[in|en]] [[English|inglés]]?",
                "options": [("Name", "Nombre"), ("Surname", "Apellido"), ("Title", "Título")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Qué]] [[is|es]] [[the|la]] [[response|respuesta]] [[to|a]] '[[Nice|Mucho]] [[to|gusto]] [[meet|conocerte]] [[you|a ti]]'?",
                "options": [("Goodbye", "Adiós"), ("Nice to meet you too", "Igualmente"), ("My name is Mark", "Me llamo Mark")],
                "correct_idx": 1,
            },
        ],
        "learning_outcomes": [
            "Use common greetings and farewells correctly",
            "Introduce yourself and provide basic personal information",
            "Use the verb 'to be' in affirmative forms with I and You",
            "Apply possessive adjectives (my, your) in context",
        ],
    },
    2: {
        "title": "Verb 'to be' and Subject Pronouns",
        "module": 1,
        "vocab": [
            ("He", "Él"),
            ("She", "Ella"),
            ("It", "Ello/Eso"),
            ("We", "Nosotros"),
            ("They", "Ellos/Ellas"),
            ("Country", "País"),
            ("Spain", "España"),
            ("England", "Inglaterra"),
            ("France", "Francia"),
            ("Italy", "Italia"),
            ("German", "Alemán"),
            ("American", "Americano/a"),
            ("Number", "Número"),
            ("One", "Uno"),
            ("Ten", "Diez"),
        ],
        "grammar_patterns": [
            ("[[He|Él]] ______ [[a|un]] [[doctor|médico]].", "is"),
            ("[[She|Ella]] ______ [[from|de]] [[Spain|España]].", "is"),
            ("[[We|Nosotros]] ______ [[students|estudiantes]].", "are"),
            ("[[They|Ellos]] ______ [[from|de]] [[Italy|Italia]].", "are"),
            ("[[It|Eso]] ______ [[a|un]] [[book|libro]].", "is"),
            ("[[He|Él]] ______ [[not|no]] [[American|americano]].", "is"),
            ("[[She|Ella]] ______ [[not|no]] [[a|una]] [[teacher|profesora]].", "is"),
            ("[[We|Nosotros]] ______ [[not|no]] [[from|de]] [[France|Francia]].", "are"),
        ],
        "dialogue_lines": [
            "[[Hi|Hola]]! [[This|Este]] [[is|es]] [[my|mi]] [[friend|amigo]] [[Carlos|Carlos]].",
            "[[He|Él]] [[is|es]] [[from|de]] [[Spain|España]].",
            "[[And|Y]] [[this|esta]] [[is|es]] [[Ana|Ana]]. [[She|Ella]] [[is|es]] [[from|de]] [[Italy|Italia]].",
            "[[We|Nosotros]] [[are|somos]] [[students|estudiantes]] [[at|en]] [[the|la]] [[same|misma]] [[school|escuela]].",
            "[[They|Ellos]] [[are|son]] [[my|mis]] [[classmates|compañeros]].",
        ],
        "reading_questions": [
            {
                "question_en": "[[Where|De dónde]] [[is|es]] [[Carlos|Carlos]] [[from|de]]?",
                "options": [("Italy", "Italia"), ("Spain", "España"), ("France", "Francia")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Where|De dónde]] [[is|es]] [[Ana|Ana]] [[from|de]]?",
                "options": [("Spain", "España"), ("Germany", "Alemania"), ("Italy", "Italia")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Qué]] [[are|son]] [[Carlos|Carlos]] [[and|y]] [[Ana|Ana]]?",
                "options": [("teachers", "profesores"), ("doctors", "médicos"), ("students", "estudiantes")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[Which|Cuál]] [[pronoun|pronombre]] [[do|se usa]] [[we|nosotros]] [[use|usar]] [[for|para]] [[Carlos|Carlos]]?",
                "options": [("She", "Ella"), ("He", "Él"), ("They", "Ellos")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Which|Cuál]] [[pronoun|pronombre]] [[do|se usa]] [[we|nosotros]] [[use|usar]] [[for|para]] [[Ana|Ana]]?",
                "options": [("He", "Él"), ("It", "Eso"), ("She", "Ella")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Cuál]] [[pronoun|pronombre]] [[refers|se refiere]] [[to|a]] [[both|ambos]] [[Carlos|Carlos]] [[and|y]] [[Ana|Ana]]?",
                "options": [("We", "Nosotros"), ("They", "Ellos"), ("It", "Eso")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Where|Dónde]] [[do|estudian]] [[they|ellos]] [[study|estudiar]]?",
                "options": [("at home", "en casa"), ("at the same school", "en la misma escuela"), ("online", "en línea")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Qué]] [[is|es]] [[the|la]] [[relationship|relación]] [[between|entre]] [[Carlos|Carlos]] [[and|y]] [[Ana|Ana]]?",
                "options": [("siblings", "hermanos"), ("classmates", "compañeros"), ("teachers", "profesores")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Which|Cuál]] [[form|forma]] [[of|de]] 'to be' [[goes|va]] [[with|con]] 'She'?",
                "options": [("am", "soy/estoy"), ("are", "eres/estás"), ("is", "es/está")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[Which|Cuál]] [[form|forma]] [[of|de]] 'to be' [[goes|va]] [[with|con]] 'We'?",
                "options": [("is", "es/está"), ("are", "somos/estamos"), ("am", "soy/estoy")],
                "correct_idx": 1,
            },
        ],
        "learning_outcomes": [
            "Use subject pronouns he, she, it, we, they correctly",
            "Conjugate 'to be' (is/are) with all subject pronouns",
            "Describe people and their nationalities",
        ],
    },
    3: {
        "title": "Verb 'to be': Negatives and Questions",
        "module": 1,
        "vocab": [
            ("Happy", "Feliz"),
            ("Sad", "Triste"),
            ("Tired", "Cansado/a"),
            ("Hungry", "Hambriento/a"),
            ("Thirsty", "Sediento/a"),
            ("Angry", "Enfadado/a"),
            ("Sick", "Enfermo/a"),
            ("Fine", "Bien"),
            ("Not", "No"),
            ("Yes", "Sí"),
            ("No", "No"),
            ("Question", "Pregunta"),
            ("Answer", "Respuesta"),
            ("Because", "Porque"),
            ("Very", "Muy"),
        ],
        "grammar_patterns": [
            ("[[I|Yo]] ______ [[not|no]] [[tired|cansado]].", "am"),
            ("[[She|Ella]] ______ [[not|no]] [[happy|feliz]].", "is"),
            ("[[They|Ellos]] ______ [[not|no]] [[hungry|hambrientos]].", "are"),
            ("______ [[you|tú]] [[sick|enfermo]]?", "Are"),
            ("______ [[he|él]] [[sad|triste]]?", "Is"),
            ("[[No|No]], [[I|yo]] ______ [[not|no]] [[angry|enfadado]].", "am"),
            ("[[Yes|Sí]], [[she|ella]] ______ [[fine|bien]].", "is"),
            ("[[We|Nosotros]] ______ [[not|no]] [[thirsty|sedientos]].", "are"),
        ],
        "dialogue_lines": [
            "[[Hi|Hola]] [[Laura|Laura]]! [[How|Cómo]] [[are|estás]] [[you|tú]]?",
            "[[I|Yo]] [[am|estoy]] [[not|no]] [[very|muy]] [[well|bien]]. [[I|Yo]] [[am|estoy]] [[tired|cansada]].",
            "[[Are|Estás]] [[you|tú]] [[sick|enferma]]?",
            "[[No|No]], [[I|yo]] [[am|estoy]] [[not|no]] [[sick|enferma]]. [[Just|Solo]] [[very|muy]] [[tired|cansada]].",
            "[[Is|Está]] [[Tom|Tom]] [[here|aquí]]? [[Is|Está]] [[he|él]] [[happy|feliz]]?",
            "[[No|No]], [[he|él]] [[is|está]] [[not|no]] [[here|aquí]]. [[He|Él]] [[is|está]] [[sad|triste]] [[today|hoy]].",
        ],
        "reading_questions": [
            {
                "question_en": "[[How|Cómo]] [[is|está]] [[Laura|Laura]] [[feeling|sintiéndose]]?",
                "options": [("happy", "feliz"), ("tired", "cansada"), ("angry", "enfadada")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Is|Está]] [[Laura|Laura]] [[sick|enferma]]?",
                "options": [("Yes", "Sí"), ("No", "No"), ("Maybe", "Quizás")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Is|Está]] [[Tom|Tom]] [[present|presente]] [[in|en]] [[the|la]] [[conversation|conversación]]?",
                "options": [("Yes", "Sí"), ("No", "No"), ("We don't know", "No sabemos")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[How|Cómo]] [[is|está]] [[Tom|Tom]] [[feeling|sintiéndose]]?",
                "options": [("happy", "feliz"), ("fine", "bien"), ("sad", "triste")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|la]] [[negative|negativa]] [[of|de]] '[[I|Yo]] [[am|estoy]] [[happy|feliz]]'?",
                "options": [("I am not happy", "No estoy feliz"), ("Am I happy?", "¿Estoy feliz?"), ("I is not happy", "incorrecto")],
                "correct_idx": 0,
            },
            {
                "question_en": "[[Which|Cuál]] [[question|pregunta]] [[asks|pregunta]] [[about|sobre]] [[feelings|sentimientos]]?",
                "options": [("Where are you?", "¿Dónde estás?"), ("How are you?", "¿Cómo estás?"), ("Who are you?", "¿Quién eres?")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|la]] [[short|corta]] [[answer|respuesta]] [[to|a]] '[[Are|Estás]] [[you|tú]] [[tired|cansado]]? — [[Yes|Sí]]'?",
                "options": [("Yes, I is.", "incorrecto"), ("Yes, I am.", "Sí, estoy."), ("Yes, I are.", "incorrecto")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Which|Cuál]] [[word|palabra]] [[means|significa]] '[[Hungry|Hambriento]]'?",
                "options": [("Thirsty", "Sediento"), ("Angry", "Enfadado"), ("Hungry", "Hambriento")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|la]] [[negative|negativa]] [[of|de]] '[[She|Ella]] [[is|es]] [[happy|feliz]]'?",
                "options": [("She isn't happy", "Ella no está feliz"), ("She aren't happy", "incorrecto"), ("She amn't happy", "incorrecto")],
                "correct_idx": 0,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|la]] [[question|pregunta]] [[form|forma]] [[of|de]] '[[They|Ellos]] [[are|están]] [[tired|cansados]]'?",
                "options": [("Is they tired?", "incorrecto"), ("Are they tired?", "¿Están cansados?"), ("Do they tired?", "incorrecto")],
                "correct_idx": 1,
            },
        ],
        "learning_outcomes": [
            "Form negative sentences with 'to be' (am not, isn't, aren't)",
            "Ask and answer Yes/No questions with 'to be'",
            "Describe emotions and states in English",
        ],
    },
    4: {
        "title": "Essential Vocabulary: Numbers and Objects",
        "module": 1,
        "vocab": [
            ("One", "Uno"),
            ("Two", "Dos"),
            ("Three", "Tres"),
            ("Four", "Cuatro"),
            ("Five", "Cinco"),
            ("Pen", "Bolígrafo"),
            ("Book", "Libro"),
            ("Notebook", "Cuaderno"),
            ("Chair", "Silla"),
            ("Table", "Mesa"),
            ("Red", "Rojo"),
            ("Blue", "Azul"),
            ("A", "Un/Una (art. indef. sing. consonante)"),
            ("An", "Un/Una (art. indef. sing. vocal)"),
            ("This", "Este/Esta"),
        ],
        "grammar_patterns": [
            ("[[This|Este]] [[is|es]] ______ [[pen|bolígrafo]].", "a"),
            ("[[This|Esta]] [[is|es]] ______ [[apple|manzana]].", "an"),
            ("[[I|Yo]] [[have|tengo]] ______ [[books|libros]].", "two"),
            ("[[There|Hay]] [[are|están]] ______ [[chairs|sillas]].", "three"),
            ("[[That|Ese]] ______ [[is|es]] [[a|un]] [[red|rojo]] [[pen|bolígrafo]].", "one"),
            ("[[This|Estos]] [[are|son]] [[my|mis]] ______ [[notebooks|cuadernos]].", "three"),
            ("[[She|Ella]] [[has|tiene]] ______ [[book|libro]].", "a"),
            ("[[It|Eso]] [[is|es]] ______ [[orange|naranja]].", "an"),
        ],
        "dialogue_lines": [
            "[[Look|Mira]] [[at|a]] [[this|esto]]! [[What|Qué]] [[is|es]] [[this|esto]]?",
            "[[It|Eso]] [[is|es]] [[a|un]] [[book|libro]]. [[It|Eso]] [[is|es]] [[blue|azul]].",
            "[[How|Cuántos]] [[many|muchos]] [[pens|bolígrafos]] [[do|tienes]] [[you|tú]] [[have|tienes]]?",
            "[[I|Yo]] [[have|tengo]] [[three|tres]] [[pens|bolígrafos]]. [[Two|Dos]] [[are|son]] [[red|rojos]] [[and|y]] [[one|uno]] [[is|es]] [[blue|azul]].",
            "[[What|Qué]] [[about|sobre]] [[notebooks|cuadernos]]?",
            "[[I|Yo]] [[have|tengo]] [[one|un]] [[notebook|cuaderno]]. [[It|Eso]] [[is|es]] [[new|nuevo]].",
        ],
        "reading_questions": [
            {
                "question_en": "[[What|Qué]] [[color|color]] [[is|es]] [[the|el]] [[book|libro]]?",
                "options": [("Red", "Rojo"), ("Blue", "Azul"), ("Green", "Verde")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[How|Cuántos]] [[many|muchos]] [[pens|bolígrafos]] [[does|tiene]] [[the|el]] [[speaker|hablante]] [[have|tiene]]?",
                "options": [("Two", "Dos"), ("Four", "Cuatro"), ("Three", "Tres")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[How|Cuántos]] [[many|muchos]] [[red|rojos]] [[pens|bolígrafos]] [[are|hay]] [[there|hay]]?",
                "options": [("One", "Uno"), ("Two", "Dos"), ("Three", "Tres")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Which|Cuál]] [[article|artículo]] [[goes|va]] [[before|antes de]] 'book'?",
                "options": [("An", "Un/Una (vocal)"), ("A", "Un/Una (consonante)"), ("The", "El/La")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Which|Cuál]] [[article|artículo]] [[goes|va]] [[before|antes de]] 'apple'?",
                "options": [("A", "Un/Una (consonante)"), ("The", "El/La"), ("An", "Un/Una (vocal)")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[How|Cuántos]] [[many|muchos]] [[notebooks|cuadernos]] [[does|tiene]] [[the|el]] [[speaker|hablante]] [[have|tiene]]?",
                "options": [("Three", "Tres"), ("One", "Uno"), ("Two", "Dos")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Qué]] [[is|es]] [[the|el]] [[notebook|cuaderno]] [[like|como]]?",
                "options": [("old", "viejo"), ("blue", "azul"), ("new", "nuevo")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[Which|Cuál]] [[word|palabra]] [[is|es]] [[a|un]] [[classroom|aula]] [[object|objeto]]?",
                "options": [("Happy", "Feliz"), ("Notebook", "Cuaderno"), ("Spain", "España")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|el]] [[plural|plural]] [[of|de]] 'pen'?",
                "options": [("penes", "incorrecto"), ("pens", "bolígrafos"), ("pen's", "incorrecto")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Qué]] [[does|significa]] '[[This|Este]]' [[mean|significa]]?",
                "options": [("That (far)", "Ese (lejos)"), ("This (near)", "Este (cerca)"), ("Those (far pl.)", "Esos (lejos pl.)")],
                "correct_idx": 1,
            },
        ],
        "learning_outcomes": [
            "Use articles a/an correctly before nouns",
            "Name classroom objects and their colors",
            "Use numbers 1–5 in context",
            "Use 'this/that' to point to objects",
        ],
    },
    5: {
        "title": "Simple Present: Everyday Actions",
        "module": 1,
        "vocab": [
            ("Work", "Trabajar"),
            ("Study", "Estudiar"),
            ("Eat", "Comer"),
            ("Drink", "Beber"),
            ("Sleep", "Dormir"),
            ("Play", "Jugar"),
            ("Read", "Leer"),
            ("Write", "Escribir"),
            ("Walk", "Caminar"),
            ("Cook", "Cocinar"),
            ("Every day", "Todos los días"),
            ("Always", "Siempre"),
            ("Sometimes", "A veces"),
            ("Never", "Nunca"),
            ("Morning", "Mañana"),
        ],
        "grammar_patterns": [
            ("[[I|Yo]] ______ [[English|inglés]] [[every day|todos los días]].", "study"),
            ("[[She|Ella]] ______ [[in|en]] [[a|un]] [[hospital|hospital]].", "works"),
            ("[[He|Él]] ______ [[pizza|pizza]] [[for|para]] [[lunch|el almuerzo]].", "eats"),
            ("[[They|Ellos]] ______ [[football|fútbol]] [[on|los]] [[Saturdays|sábados]].", "play"),
            ("[[I|Yo]] ______ [[coffee|café]] [[in|en]] [[the|la]] [[morning|mañana]].", "drink"),
            ("[[She|Ella]] ______ [[eight|ocho]] [[hours|horas]] [[a|por]] [[night|noche]].", "sleeps"),
            ("[[He|Él]] ______ [[a|un]] [[book|libro]] [[every|cada]] [[week|semana]].", "reads"),
            ("[[We|Nosotros]] ______ [[to|a]] [[school|la escuela]] [[every day|todos los días]].", "walk"),
        ],
        "dialogue_lines": [
            "[[What|Qué]] [[do|haces]] [[you|tú]] [[do|haces]] [[every|cada]] [[morning|mañana]]?",
            "[[I|Yo]] [[wake|me despierto]] [[up|arriba]] [[at|a]] [[seven|las siete]]. [[Then|Luego]] [[I|yo]] [[eat|desayuno]] [[breakfast|el desayuno]].",
            "[[Do|Comes]] [[you|tú]] [[eat|comes]] [[eggs|huevos]]?",
            "[[Yes|Sí]], [[I|yo]] [[always|siempre]] [[eat|como]] [[eggs|huevos]] [[and|y]] [[drink|bebo]] [[orange|de naranja]] [[juice|zumo]].",
            "[[Does|Trabaja]] [[your|tu]] [[sister|hermana]] [[work|trabaja]]?",
            "[[Yes|Sí]], [[she|ella]] [[works|trabaja]] [[in|en]] [[a|una]] [[school|escuela]]. [[She|Ella]] [[teaches|enseña]] [[English|inglés]].",
        ],
        "reading_questions": [
            {
                "question_en": "[[What|A qué]] [[time|hora]] [[does|se despierta]] [[the|el]] [[speaker|hablante]] [[wake|despierta]] [[up|arriba]]?",
                "options": [("six", "seis"), ("eight", "ocho"), ("seven", "siete")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Qué]] [[does|desayuna]] [[the|el]] [[speaker|hablante]] [[eat|come]] [[for|de]] [[breakfast|desayuno]]?",
                "options": [("cereal", "cereales"), ("eggs", "huevos"), ("bread", "pan")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Qué]] [[does|bebe]] [[the|el]] [[speaker|hablante]] [[drink|bebe]]?",
                "options": [("milk", "leche"), ("water", "agua"), ("orange juice", "zumo de naranja")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[Where|Dónde]] [[does|trabaja]] [[the|la]] [[speaker's|del hablante]] [[sister|hermana]] [[work|trabaja]]?",
                "options": [("hospital", "hospital"), ("school", "escuela"), ("office", "oficina")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Qué]] [[does|enseña]] [[the|la]] [[sister|hermana]] [[teach|enseña]]?",
                "options": [("Maths", "Matemáticas"), ("Science", "Ciencias"), ("English", "Inglés")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[How often|Con qué frecuencia]] [[does|come]] [[the|el]] [[speaker|hablante]] [[eat|come]] [[eggs|huevos]]?",
                "options": [("sometimes", "a veces"), ("never", "nunca"), ("always", "siempre")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|la]] [[third-person|tercera persona]] [[form|forma]] [[of|de]] 'work'?",
                "options": [("work", "trabajar"), ("works", "trabaja"), ("workes", "incorrecto")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Which|Cuál]] [[verb|verbo]] [[means|significa]] '[[Estudiar|Study]]'?",
                "options": [("sleep", "dormir"), ("study", "estudiar"), ("cook", "cocinar")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|la]] [[3rd|tercera]] [[person|persona]] [[of|de]] 'eat'?",
                "options": [("eats", "come"), ("eat", "comer"), ("eatss", "incorrecto")],
                "correct_idx": 0,
            },
            {
                "question_en": "[[Which|Cuál]] [[verb|verbo]] [[means|significa]] '[[Beber|Drink]]'?",
                "options": [("walk", "caminar"), ("drink", "beber"), ("play", "jugar")],
                "correct_idx": 1,
            },
        ],
        "learning_outcomes": [
            "Use Present Simple affirmative with all pronouns",
            "Apply the 3rd person singular '-s' rule correctly",
            "Describe everyday actions and routines",
        ],
    },
}

UNIT_DATA.update({
    6: {
        "title": "Family Members & Personal Info",
        "module": 1,
        "vocab": [
            ("Mother", "Madre"),
            ("Father", "Padre"),
            ("Brother", "Hermano"),
            ("Sister", "Hermana"),
            ("Son", "Hijo"),
            ("Daughter", "Hija"),
            ("Grandmother", "Abuela"),
            ("Grandfather", "Abuelo"),
            ("Uncle", "Tío"),
            ("Aunt", "Tía"),
            ("His", "Su (de él)"),
            ("Her", "Su (de ella)"),
            ("Our", "Nuestro/a"),
            ("Their", "Su (de ellos)"),
            ("Family", "Familia"),
        ],
        "grammar_patterns": [
            ("[[This|Esta]] [[is|es]] ______ [[mother|madre]].", "my"),
            ("______ [[name|nombre]] [[is|es]] [[Ana|Ana]].", "Her"),
            ("______ [[brother|hermano]] [[is|es]] [[tall|alto]].", "His"),
            ("______ [[family|familia]] [[is|es]] [[big|grande]].", "Our"),
            ("[[They|Ellos]] [[are|son]] ______ [[children|hijos]].", "their"),
            ("[[I|Yo]] [[have|tengo]] [[two|dos]] ______ [[brothers|hermanos]].", "older"),
            ("[[My|Mi]] ______ [[is|es]] [[eighty|ochenta]] [[years|años]] [[old|de edad]].", "grandmother"),
            ("[[Her|Su]] [[father|padre]] ______ [[a|un]] [[doctor|médico]].", "is"),
        ],
        "dialogue_lines": [
            "[[This|Esta]] [[is|es]] [[a|una]] [[photo|foto]] [[of|de]] [[my|mi]] [[family|familia]].",
            "[[That|Ese]] [[is|es]] [[my|mi]] [[father|padre]]. [[His|Su]] [[name|nombre]] [[is|es]] [[Robert|Robert]].",
            "[[And|Y]] [[that|esa]] [[is|es]] [[my|mi]] [[mother|madre]]. [[Her|Su]] [[name|nombre]] [[is|es]] [[Sarah|Sarah]].",
            "[[Do|Tienes]] [[you|tú]] [[have|tienes]] [[brothers|hermanos]] [[or|o]] [[sisters|hermanas]]?",
            "[[Yes|Sí]]! [[I|Yo]] [[have|tengo]] [[one|un]] [[brother|hermano]] [[and|y]] [[two|dos]] [[sisters|hermanas]].",
            "[[Our|Nuestra]] [[family|familia]] [[is|es]] [[very|muy]] [[close|unida]].",
        ],
        "reading_questions": [
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|el]] [[father's|del padre]] [[name|nombre]]?",
                "options": [("Robert", "Robert"), ("Carlos", "Carlos"), ("Mark", "Mark")],
                "correct_idx": 0,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|la]] [[mother's|de la madre]] [[name|nombre]]?",
                "options": [("Anna", "Anna"), ("Sarah", "Sarah"), ("Laura", "Laura")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[How|Cuántos]] [[many|muchos]] [[brothers|hermanos]] [[does|tiene]] [[the|el]] [[speaker|hablante]] [[have|tiene]]?",
                "options": [("Two", "Dos"), ("Three", "Tres"), ("One", "Uno")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[How|Cuántas]] [[many|muchas]] [[sisters|hermanas]] [[does|tiene]] [[the|el]] [[speaker|hablante]] [[have|tiene]]?",
                "options": [("Two", "Dos"), ("One", "Una"), ("Three", "Tres")],
                "correct_idx": 0,
            },
            {
                "question_en": "[[Which|Cuál]] [[possessive|posesivo]] [[means|significa]] '[[Su|His]] (de él)'?",
                "options": [("Her", "Su (de ella)"), ("His", "Su (de él)"), ("Their", "Su (de ellos)")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Which|Cuál]] [[possessive|posesivo]] [[refers|se refiere]] [[to|a]] [[a|una]] [[female|mujer]]?",
                "options": [("His", "Su (de él)"), ("Our", "Nuestro"), ("Her", "Su (de ella)")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Qué]] [[word|palabra]] [[means|significa]] '[[Abuela|Grandmother]]'?",
                "options": [("Aunt", "Tía"), ("Mother", "Madre"), ("Grandmother", "Abuela")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Qué]] [[does|significa]] '[[Our|Nuestro]]' [[mean|significa]]?",
                "options": [("My", "Mi"), ("Your", "Tu"), ("Our", "Nuestro")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Qué]] [[does|tiene]] [[Saxon|sajón]] [[Genitive|genitivo]] '[[s|'s]]' [[show|mostrar]]?",
                "options": [("plural", "plural"), ("possession", "posesión"), ("negation", "negación")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Qué]] [[is|es]] [[the|la]] [[opposite|opuesta]] [[of|de]] '[[Son|Hijo]]'?",
                "options": [("Brother", "Hermano"), ("Father", "Padre"), ("Daughter", "Hija")],
                "correct_idx": 2,
            },
        ],
        "learning_outcomes": [
            "Name family members in English",
            "Use possessive adjectives (his, her, our, their)",
            "Use Saxon Genitive ('s) to express possession",
        ],
    },
    7: {
        "title": "Colors & Physical Descriptions",
        "module": 1,
        "vocab": [
            ("Red", "Rojo"),
            ("Blue", "Azul"),
            ("Green", "Verde"),
            ("Yellow", "Amarillo"),
            ("Black", "Negro"),
            ("White", "Blanco"),
            ("Tall", "Alto/a"),
            ("Short", "Bajo/a"),
            ("Young", "Joven"),
            ("Old", "Mayor/Viejo"),
            ("Long", "Largo/a"),
            ("Dark", "Oscuro/a"),
            ("Eyes", "Ojos"),
            ("Hair", "Pelo"),
            ("Beautiful", "Hermoso/a"),
        ],
        "grammar_patterns": [
            ("[[She|Ella]] [[has|tiene]] ______ [[hair|pelo]].", "long"),
            ("[[He|Él]] [[is|es]] ______ [[and|y]] [[handsome|guapo]].", "tall"),
            ("[[My|Mi]] [[car|coche]] ______ [[red|rojo]].", "is"),
            ("[[They|Ellos]] [[have|tienen]] ______ [[eyes|ojos]].", "blue"),
            ("[[It|Eso]] [[is|es]] ______ [[old|antiguo]] [[building|edificio]].", "an"),
            ("[[She|Ella]] [[is|es]] [[very|muy]] ______ [[for|para]] [[her|su]] [[age|edad]].", "young"),
            ("[[He|Él]] [[has|tiene]] ______ [[short|corto]] [[black|negro]] [[hair|pelo]].", "very"),
            ("[[The|El]] [[sky|cielo]] [[is|es]] ______.", "blue"),
        ],
        "dialogue_lines": [
            "[[Can|Puedes]] [[you|tú]] [[describe|describir]] [[your|tu]] [[best|mejor]] [[friend|amigo]]?",
            "[[Sure|Claro]]! [[She|Ella]] [[is|es]] [[tall|alta]] [[with|con]] [[long|largo]] [[brown|castaño]] [[hair|pelo]].",
            "[[What|De qué]] [[color|color]] [[are|son]] [[her|sus]] [[eyes|ojos]]?",
            "[[Her|Sus]] [[eyes|ojos]] [[are|son]] [[green|verdes]]. [[She|Ella]] [[is|es]] [[very|muy]] [[beautiful|hermosa]].",
            "[[How|Cómo]] [[old|de mayor]] [[is|es]] [[she|ella]]?",
            "[[She|Ella]] [[is|es]] [[young|joven]] — [[only|solo]] [[twenty|veinte]] [[years|años]] [[old|de edad]].",
        ],
        "reading_questions": [
            {
                "question_en": "[[What|Cómo]] [[is|es]] [[the|la]] [[friend's|de la amiga]] [[height|estatura]]?",
                "options": [("short", "baja"), ("medium", "mediana"), ("tall", "alta")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Qué]] [[color|color]] [[is|es]] [[the|la]] [[friend's|de la amiga]] [[hair|pelo]]?",
                "options": [("black", "negro"), ("brown", "castaño"), ("blonde", "rubio")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Qué]] [[color|color]] [[are|son]] [[the|los]] [[friend's|de la amiga]] [[eyes|ojos]]?",
                "options": [("blue", "azules"), ("brown", "marrones"), ("green", "verdes")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[How|Cuántos]] [[old|años]] [[is|tiene]] [[the|la]] [[friend|amiga]]?",
                "options": [("thirty", "treinta"), ("twenty", "veinte"), ("eighteen", "dieciocho")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Where|Dónde]] [[do|van]] [[adjectives|adjetivos]] [[go|van]] [[in|en]] [[English|inglés]]?",
                "options": [("after the noun", "después del sustantivo"), ("before the noun", "antes del sustantivo"), ("at the end", "al final")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Qué]] [[is|es]] [[the|el]] [[opposite|opuesto]] [[of|de]] '[[Tall|Alto]]'?",
                "options": [("Young", "Joven"), ("Old", "Mayor"), ("Short", "Bajo")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[Which|Cuál]] [[word|palabra]] [[describes|describe]] [[hair|pelo]] [[length|longitud]]?",
                "options": [("Tall", "Alto"), ("Long", "Largo"), ("Dark", "Oscuro")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|el]] [[opposite|opuesto]] [[of|de]] '[[Young|Joven]]'?",
                "options": [("Short", "Bajo"), ("Old", "Mayor"), ("White", "Blanco")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Qué]] [[color|color]] [[is|es]] [[the|el]] [[sky|cielo]] [[on|en]] [[a|un]] [[sunny|soleado]] [[day|día]]?",
                "options": [("Green", "Verde"), ("Red", "Rojo"), ("Blue", "Azul")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[Which|Cuál]] [[verb|verbo]] [[is|es]] [[used|se usa]] [[with|con]] [[physical|físicas]] [[features|características]]?",
                "options": [("have/has", "tener"), ("do/does", "hacer"), ("go/goes", "ir")],
                "correct_idx": 0,
            },
        ],
        "learning_outcomes": [
            "Use a wide range of color adjectives",
            "Describe physical appearance using adjectives",
            "Place adjectives correctly before nouns",
        ],
    },
    8: {
        "title": "Numbers 20-100 (Prices & Ages)",
        "module": 1,
        "vocab": [
            ("Twenty", "Veinte"),
            ("Thirty", "Treinta"),
            ("Forty", "Cuarenta"),
            ("Fifty", "Cincuenta"),
            ("Sixty", "Sesenta"),
            ("Seventy", "Setenta"),
            ("Eighty", "Ochenta"),
            ("Ninety", "Noventa"),
            ("One hundred", "Cien"),
            ("Price", "Precio"),
            ("How much", "Cuánto cuesta"),
            ("How old", "Qué edad"),
            ("Dollar", "Dólar"),
            ("Euro", "Euro"),
            ("Coin", "Moneda"),
        ],
        "grammar_patterns": [
            ("[[It|Eso]] [[costs|cuesta]] ______ [[dollars|dólares]].", "fifty"),
            ("[[He|Él]] [[is|es]] ______ [[years|años]] [[old|de edad]].", "thirty"),
            ("[[How|Cuánto]] [[much|cuesta]] ______ [[this|esto]]?", "is"),
            ("[[How|Qué]] ______ [[are|tienes]] [[you|tú]]?", "old"),
            ("[[The|El]] [[book|libro]] ______ [[twenty|veinte]] [[euros|euros]].", "costs"),
            ("[[My|Mi]] [[grandmother|abuela]] [[is|tiene]] ______ [[years|años]] [[old|de edad]].", "eighty"),
            ("[[There|Hay]] [[are|están]] ______ [[students|estudiantes]] [[in|en]] [[the|la]] [[school|escuela]].", "one hundred"),
            ("[[The|El]] [[price|precio]] ______ [[sixty|sesenta]] [[pounds|libras]].", "is"),
        ],
        "dialogue_lines": [
            "[[Excuse|Disculpe]] [[me|me]]! [[How|Cuánto]] [[much|cuesta]] [[is|es]] [[this|esto]]?",
            "[[It|Eso]] [[is|es]] [[forty-five|cuarenta y cinco]] [[euros|euros]].",
            "[[And|Y]] [[how|cuánto]] [[much|cuesta]] [[is|es]] [[that|ese]]?",
            "[[That|Ese]] [[one|uno]] [[is|es]] [[seventy|setenta]] [[euros|euros]].",
            "[[How|Qué]] [[old|edad]] [[is|es]] [[your|tu]] [[grandfather|abuelo]]?",
            "[[He|Él]] [[is|tiene]] [[eighty-two|ochenta y dos]] [[years|años]] [[old|de edad]]. [[He|Él]] [[is|es]] [[very|muy]] [[healthy|sano]].",
        ],
        "reading_questions": [
            {
                "question_en": "[[How|Cuánto]] [[much|cuesta]] [[is|es]] [[the|el]] [[first|primer]] [[item|artículo]]?",
                "options": [("seventy euros", "setenta euros"), ("forty-five euros", "cuarenta y cinco euros"), ("one hundred euros", "cien euros")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[How|Cuánto]] [[much|cuesta]] [[is|es]] [[the|el]] [[second|segundo]] [[item|artículo]]?",
                "options": [("sixty euros", "sesenta euros"), ("eighty euros", "ochenta euros"), ("seventy euros", "setenta euros")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[How|Qué]] [[old|edad]] [[is|es]] [[the|el]] [[grandfather|abuelo]]?",
                "options": [("seventy-two", "setenta y dos"), ("ninety", "noventa"), ("eighty-two", "ochenta y dos")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Cuál]] [[number|número]] [[comes|viene]] [[after|después de]] [[seventy|setenta]]?",
                "options": [("sixty", "sesenta"), ("eighty", "ochenta"), ("ninety", "noventa")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Cuál]] [[question|pregunta]] [[asks|pregunta]] [[about|sobre]] [[age|edad]]?",
                "options": [("How much?", "¿Cuánto cuesta?"), ("How many?", "¿Cuántos?"), ("How old?", "¿Qué edad?")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Cuál]] [[question|pregunta]] [[asks|pregunta]] [[about|sobre]] [[price|precio]]?",
                "options": [("How old?", "¿Qué edad?"), ("How much?", "¿Cuánto cuesta?"), ("How far?", "¿A cuánta distancia?")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[fifty|cincuenta]] [[plus|más]] [[thirty|treinta]]?",
                "options": [("seventy", "setenta"), ("ninety", "noventa"), ("eighty", "ochenta")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Cuál]] [[word|palabra]] [[means|significa]] '[[Precio|Price]]' [[in|en]] [[English|inglés]]?",
                "options": [("Age", "Edad"), ("Price", "Precio"), ("Number", "Número")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[How|Cómo]] [[do|se dice]] [[you|tú]] [[say|dices]] [[100|100]] [[in|en]] [[English|inglés]]?",
                "options": [("Ninety", "Noventa"), ("One hundred", "Cien"), ("Eighty", "Ochenta")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Cuál]] [[currency|moneda]] [[is|es]] [[used|se usa]] [[in|en]] [[the|el]] [[UK|Reino Unido]]?",
                "options": [("Dollar", "Dólar"), ("Euro", "Euro"), ("Pound", "Libra")],
                "correct_idx": 2,
            },
        ],
        "learning_outcomes": [
            "Say and write numbers 20–100",
            "Ask and answer about prices using 'How much is...?'",
            "Ask and answer about ages using 'How old are you?'",
        ],
    },
    9: {
        "title": "Jobs & Occupations",
        "module": 1,
        "vocab": [
            ("Teacher", "Profesor/a"),
            ("Doctor", "Médico/a"),
            ("Engineer", "Ingeniero/a"),
            ("Student", "Estudiante"),
            ("Waiter", "Camarero/a"),
            ("Nurse", "Enfermero/a"),
            ("Police officer", "Policía"),
            ("Chef", "Cocinero/a"),
            ("Pilot", "Piloto"),
            ("Lawyer", "Abogado/a"),
            ("Office", "Oficina"),
            ("Hospital", "Hospital"),
            ("Restaurant", "Restaurante"),
            ("Where", "Dónde"),
            ("Work", "Trabajar"),
        ],
        "grammar_patterns": [
            ("[[I|Yo]] [[am|soy]] ______ [[engineer|ingeniero]].", "an"),
            ("[[She|Ella]] [[is|es]] ______ [[nurse|enfermera]].", "a"),
            ("[[He|Él]] ______ [[in|en]] [[a|un]] [[hospital|hospital]].", "works"),
            ("[[Where|Dónde]] [[do|trabajas]] [[you|tú]] ______?", "work"),
            ("[[They|Ellos]] [[are|son]] ______ [[police officers|policías]].", "very good"),
            ("[[Is|Es]] [[she|ella]] ______ [[lawyer|abogada]]?", "a"),
            ("[[He|Él]] [[is|es]] [[not|no]] ______ [[chef|cocinero]].", "a"),
            ("[[My|Mi]] [[mother|madre]] ______ [[a|una]] [[doctor|médica]].", "is"),
        ],
        "dialogue_lines": [
            "[[What|Qué]] [[do|haces]] [[you|tú]] [[do|haces]] [[for|de]] [[work|trabajo]]?",
            "[[I|Yo]] [[am|soy]] [[a|un]] [[doctor|médico]]. [[I|Yo]] [[work|trabajo]] [[in|en]] [[the|el]] [[city|ciudad]] [[hospital|hospital]].",
            "[[That|Eso]] [[is|es]] [[interesting|interesante]]! [[Does|Tu]] [[your|tu]] [[wife|esposa]] [[work|trabaja]] [[too|también]]?",
            "[[Yes|Sí]], [[she|ella]] [[is|es]] [[a|una]] [[teacher|profesora]]. [[She|Ella]] [[teaches|enseña]] [[at|en]] [[the|la]] [[primary|primaria]] [[school|escuela]].",
            "[[And|Y]] [[what|qué]] [[about|de]] [[your|tus]] [[children|hijos]]?",
            "[[My|Mi]] [[son|hijo]] [[is|es]] [[a|un]] [[student|estudiante]] [[and|y]] [[my|mi]] [[daughter|hija]] [[wants|quiere]] [[to|ser]] [[be|ser]] [[a|una]] [[pilot|piloto]].",
        ],
        "reading_questions": [
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|el]] [[speaker's|del hablante]] [[job|trabajo]]?",
                "options": [("teacher", "profesor"), ("doctor", "médico"), ("engineer", "ingeniero")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Where|Dónde]] [[does|trabaja]] [[the|el]] [[speaker|hablante]] [[work|trabaja]]?",
                "options": [("school", "escuela"), ("office", "oficina"), ("hospital", "hospital")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|la]] [[wife's|de la esposa]] [[job|trabajo]]?",
                "options": [("nurse", "enfermera"), ("teacher", "profesora"), ("lawyer", "abogada")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[Where|Dónde]] [[does|trabaja]] [[the|la]] [[wife|esposa]] [[work|trabaja]]?",
                "options": [("hospital", "hospital"), ("restaurant", "restaurante"), ("school", "escuela")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[the|el]] [[son|hijo]] [[doing|haciendo]]?",
                "options": [("working", "trabajando"), ("studying", "estudiando"), ("traveling", "viajando")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Qué]] [[does|quiere ser]] [[the|la]] [[daughter|hija]] [[want|quiere]] [[to|ser]] [[be|ser]]?",
                "options": [("doctor", "médica"), ("nurse", "enfermera"), ("pilot", "piloto")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[Which|Cuál]] [[article|artículo]] [[goes|va]] [[before|antes de]] 'engineer'?",
                "options": [("a", "un/una (consonante)"), ("an", "un/una (vocal)"), ("the", "el/la")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Qué]] [[word|palabra]] [[means|significa]] '[[Camarero|Waiter]]'?",
                "options": [("Chef", "Cocinero"), ("Driver", "Conductor"), ("Waiter", "Camarero")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[Which|Cuál]] [[job|trabajo]] [[works|trabaja]] [[in|en]] [[a|un]] [[restaurant|restaurante]]?",
                "options": [("Pilot", "Piloto"), ("Waiter", "Camarero"), ("Lawyer", "Abogado")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Cuál]] [[question|pregunta]] [[asks|pregunta]] [[about|sobre]] [[job|trabajo]]?",
                "options": [("How old are you?", "¿Qué edad tienes?"), ("Where are you from?", "¿De dónde eres?"), ("What do you do?", "¿A qué te dedicas?")],
                "correct_idx": 2,
            },
        ],
        "learning_outcomes": [
            "Name common professions in English",
            "Use 'to be' to describe professions",
            "Ask and answer 'What do you do?' and 'Where do you work?'",
        ],
    },
    10: {
        "title": "Module 1 Review & Assessment",
        "module": 1,
        "vocab": [
            ("Review", "Repaso"),
            ("Assessment", "Evaluación"),
            ("Correct", "Correcto/a"),
            ("Wrong", "Incorrecto/a"),
            ("Introduce", "Presentar"),
            ("Describe", "Describir"),
            ("Complete", "Completar"),
            ("Choose", "Elegir"),
            ("Match", "Emparejar"),
            ("Profile", "Perfil"),
            ("Information", "Información"),
            ("Personal", "Personal"),
            ("Language", "Idioma"),
            ("Practice", "Practicar"),
            ("Test", "Prueba"),
        ],
        "grammar_patterns": [
            ("[[I|Yo]] ______ [[a|una]] [[teacher|profesora]] [[from|de]] [[Spain|España]].", "am"),
            ("[[His|Su]] [[name|nombre]] ______ [[Carlos|Carlos]].", "is"),
            ("[[They|Ellos]] ______ [[students|estudiantes]].", "are"),
            ("[[How|Qué]] ______ [[are|tienes]] [[you|tú]]?", "old"),
            ("[[This|Esto]] ______ [[my|mi]] [[family|familia]].", "is"),
            ("[[She|Ella]] ______ [[not|no]] [[from|de]] [[France|Francia]].", "is"),
            ("[[Where|Dónde]] [[do|trabajas]] [[you|tú]] ______?", "work"),
            ("[[I|Yo]] [[have|tengo]] ______ [[sisters|hermanas]].", "two"),
        ],
        "dialogue_lines": [
            "[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Sofia|Sofia]]. [[I|Yo]] [[am|soy]] [[twenty-five|veinticinco]] [[years|años]] [[old|de edad]].",
            "[[I|Yo]] [[am|soy]] [[from|de]] [[Mexico|México]] [[and|y]] [[I|yo]] [[am|soy]] [[a|una]] [[lawyer|abogada]].",
            "[[I|Yo]] [[have|tengo]] [[a|una]] [[big|grande]] [[family|familia]]. [[My|Mi]] [[father|padre]] [[is|es]] [[a|un]] [[doctor|médico]].",
            "[[My|Mi]] [[mother|madre]] [[is|es]] [[a|una]] [[teacher|profesora]] [[and|y]] [[she|ella]] [[has|tiene]] [[brown|castaño]] [[hair|pelo]] [[and|y]] [[green|verdes]] [[eyes|ojos]].",
            "[[My|Mi]] [[brother|hermano]] [[is|es]] [[thirty|treinta]] [[years|años]] [[old|de edad]]. [[He|Él]] [[works|trabaja]] [[in|en]] [[an|un]] [[office|oficina]].",
            "[[I|Yo]] [[am|estoy]] [[very|muy]] [[happy|feliz]] [[to|de]] [[meet|conocerte]] [[you|a ti]]!",
        ],
        "reading_questions": [
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[Sofia's|de Sofia]] [[nationality|nacionalidad]]?",
                "options": [("Spanish", "Española"), ("Mexican", "Mexicana"), ("Italian", "Italiana")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[Sofia's|de Sofia]] [[job|trabajo]]?",
                "options": [("doctor", "médica"), ("teacher", "profesora"), ("lawyer", "abogada")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Sofia|Sofia]]?",
                "options": [("twenty", "veinte"), ("thirty", "treinta"), ("twenty-five", "veinticinco")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Qué]] [[is|es]] [[Sofia's|de Sofia]] [[father's|del padre]] [[job|trabajo]]?",
                "options": [("lawyer", "abogado"), ("doctor", "médico"), ("engineer", "ingeniero")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Cuál]] [[is|es]] [[Sofia's|de Sofia]] [[mother's|de la madre]] [[job|trabajo]]?",
                "options": [("nurse", "enfermera"), ("doctor", "médica"), ("teacher", "profesora")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[What|Qué]] [[color|color]] [[are|son]] [[Sofia's|de Sofia]] [[mother's|de la madre]] [[eyes|ojos]]?",
                "options": [("blue", "azules"), ("green", "verdes"), ("brown", "marrones")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Sofia's|de Sofia]] [[brother|hermano]]?",
                "options": [("twenty", "veinte"), ("forty", "cuarenta"), ("thirty", "treinta")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[Where|Dónde]] [[does|trabaja]] [[Sofia's|de Sofia]] [[brother|hermano]] [[work|trabaja]]?",
                "options": [("hospital", "hospital"), ("office", "oficina"), ("school", "escuela")],
                "correct_idx": 1,
            },
            {
                "question_en": "[[What|Cómo]] [[does|se describe]] [[Sofia|Sofia]] [[describe|describe]] [[her|su]] [[family|familia]]?",
                "options": [("small", "pequeña"), ("medium", "mediana"), ("big", "grande")],
                "correct_idx": 2,
            },
            {
                "question_en": "[[How|Cómo]] [[does|se siente]] [[Sofia|Sofia]] [[feel|siente]] [[about|sobre]] [[meeting|conocer]] [[you|te]]?",
                "options": [("sad", "triste"), ("tired", "cansada"), ("happy", "feliz")],
                "correct_idx": 2,
            },
        ],
        "learning_outcomes": [
            "Review all Module 1 grammar: verb 'to be', pronouns, possessives",
            "Demonstrate vocabulary from units 1–9",
            "Produce a short personal profile in English",
        ],
    },
})


UNIT_DATA.update({   11: {   'dialogue_lines': [   '[[Excuse|Disculpa]] [[me|me]], [[what|qué]] [[time|hora]] [[is|es]] [[it|son]]?',
                                  '[[It|Son]] [[half|y]] [[past|media]] [[eight|las ocho]].',
                                  '[[Oh|Oh]]! [[I|Yo]] [[am|estoy]] [[late|tarde]]! [[My|Mi]] [[class|clase]] '
                                  "[[starts|empieza]] [[at|a]] [[nine|las nueve]] [[o'clock|en punto]].",
                                  "[[Don't|No]] [[worry|te preocupes]]. [[You|Tú]] [[have|tienes]] [[thirty|treinta]] "
                                  '[[minutes|minutos]].',
                                  '[[What|A qué]] [[time|hora]] [[does|termina]] [[your|tu]] [[class|clase]] '
                                  '[[finish|termina]]?'],
            'grammar_patterns': [   ('______ [[time|hora]] [[is|es]] [[it|son]]?', 'What'),
                                    ("[[It|Son]] ______ [[three|las tres]] [[o'clock|en punto]].", 'is'),
                                    ('[[My|Mi]] [[class|clase]] [[starts|empieza]] ______ [[nine|las nueve]].', 'at'),
                                    (   '[[The|La]] [[party|fiesta]] [[is|es]] ______ [[half|y]] [[past|media]] '
                                        '[[seven|las siete]].',
                                        'at'),
                                    ('[[It|Son]] [[quarter|un cuarto]] ______ [[ten|las diez]].', 'past'),
                                    (   '[[I|Yo]] [[wake|me despierto]] [[up|arriba]] ______ [[seven|las siete]] '
                                        "[[o'clock|en punto]].",
                                        'at')],
            'learning_outcomes': [   'Tell and ask for the time in English',
                                     "Use o'clock, half past, quarter past/to",
                                     "Use the preposition 'at' with times"],
            'module': 2,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Quarter past eight', 'Las ocho y cuarto'),
                                                        ('Half past eight', 'Las ocho y media'),
                                                        ("Nine o'clock", 'Las nueve en punto')],
                                         'question_en': '[[What|Cuál]] [[time|hora]] [[is|son]] [[it|son]] [[in|en]] '
                                                        '[[the|la]] [[conversation|conversación]]?'},
                                     {   'correct_idx': 0,
                                         'options': [   ("At nine o'clock", 'A las nueve'),
                                                        ("At eight o'clock", 'A las ocho'),
                                                        ("At ten o'clock", 'A las diez')],
                                         'question_en': '[[What|A qué]] [[time|hora]] [[does|empieza]] [[the|la]] '
                                                        '[[class|clase]] [[start|empieza]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Twenty', 'Veinte'),
                                                        ('Forty', 'Cuarenta'),
                                                        ('Thirty', 'Treinta')],
                                         'question_en': '[[How|Cuántos]] [[many|muchos]] [[minutes|minutos]] '
                                                        '[[does|tiene]] [[the|el]] [[speaker|hablante]] '
                                                        '[[have|tiene]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('Hungry', 'Hambriento'), ('Late', 'Tarde'), ('Tired', 'Cansado')],
                                         'question_en': '[[Why|Por qué]] [[is|está]] [[the|el]] [[speaker|hablante]] '
                                                        '[[worried|preocupado]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Eight and half', 'Incorrecto'),
                                                        ('Half past eight', 'Las ocho y media'),
                                                        ('Eight half', 'Incorrecto')],
                                         'question_en': "[[How|Cómo]] [[do|se dice]] [[you|uno]] [[say|dice]] 'las "
                                                        "ocho y media' [[in|en]] [[English|inglés]]?"},
                                     {   'correct_idx': 2,
                                         'options': [('in', 'en'), ('on', 'en (día)'), ('at', 'a (hora exacta)')],
                                         'question_en': '[[Which|Cuál]] [[preposition|preposición]] [[goes|va]] '
                                                        '[[before|antes de]] [[a|una]] [[time|hora]]?'},
                                     {   'correct_idx': 0,
                                         'options': [   ('Exact hour', 'Hora exacta'),
                                                        ('Half hour', 'Media hora'),
                                                        ('Quarter hour', 'Cuarto de hora')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'o'clock' "
                                                        '[[indicate|indica]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('Late', 'Tarde'), ('Early', 'Temprano'), ('Now', 'Ahora')],
                                         'question_en': '[[Which|Cuál]] [[word|palabra]] [[means|significa]] '
                                                        "'Temprano'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('30 minutes', '30 minutos'),
                                                        ('20 minutes', '20 minutos'),
                                                        ('15 minutes', '15 minutos')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Quarter' [[mean|significa]] "
                                                        '[[when|al]] [[telling|decir]] [[the|la]] [[time|hora]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Where is the time?', '¿Dónde está la hora?'),
                                                        ('What time is it?', '¿Qué hora es?'),
                                                        ('When is it?', '¿Cuándo es?')],
                                         'question_en': '[[How|Cómo]] [[do|preguntas]] [[you|tú]] [[ask|preguntas]] '
                                                        '[[for|por]] [[the|la]] [[time|hora]] [[in|en]] '
                                                        '[[English|inglés]]?'}],
            'title': 'Telling the Time',
            'vocab': [   ("O'clock", 'En punto'),
                         ('Half past', 'Y media'),
                         ('Quarter past', 'Y cuarto'),
                         ('Quarter to', 'Menos cuarto'),
                         ('Minute', 'Minuto'),
                         ('Hour', 'Hora'),
                         ('Morning', 'Mañana (parte del día)'),
                         ('Afternoon', 'Tarde'),
                         ('Evening', 'Noche temprana'),
                         ('Night', 'Noche'),
                         ('Early', 'Temprano'),
                         ('Late', 'Tarde (tardío)'),
                         ('Clock', 'Reloj'),
                         ('Schedule', 'Horario')]},
    12: {   'dialogue_lines': [   '[[What|Qué]] [[day|día]] [[is|es]] [[it|hoy]] [[today|hoy]]?',
                                  '[[It|Es]] [[is|es]] [[Wednesday|miércoles]]. [[We|Nosotros]] [[have|tenemos]] '
                                  '[[a|una]] [[test|prueba]] [[tomorrow|mañana]].',
                                  '[[Do|Trabajas]] [[you|tú]] [[work|trabajas]] [[on|los]] [[Saturdays|sábados]]?',
                                  "[[No|No]], [[I|yo]] [[don't|no]] [[work|trabajo]] [[on|los]] [[weekends|fines de "
                                  'semana]]. [[I|Yo]] [[relax|me relajo]] [[at|en]] [[home|casa]].',
                                  '[[That|Eso]] [[sounds|suena]] [[great|genial]]! [[What|Qué]] [[do|haces]] '
                                  '[[you|tú]] [[do|haces]] [[on|los]] [[Fridays|viernes]]?'],
            'grammar_patterns': [   (   '[[I|Yo]] [[always|siempre]] [[go|voy]] [[to|a]] [[the|el]] [[gym|gimnasio]] '
                                        '______ [[Mondays|lunes]].',
                                        'on'),
                                    (   '______ [[Saturday|sábado]] [[I|yo]] [[relax|me relajo]] [[at|en]] '
                                        '[[home|casa]].',
                                        'On'),
                                    (   '[[She|Ella]] [[works|trabaja]] ______ [[Monday|lunes]] [[to|a]] '
                                        '[[Friday|viernes]].',
                                        'from'),
                                    (   '[[Do|Trabajas]] [[you|tú]] [[work|trabajas]] ______ [[weekends|fines de '
                                        'semana]]?',
                                        'on'),
                                    ('[[Today|Hoy]] ______ [[Wednesday|miércoles]].', 'is'),
                                    ('[[The|La]] [[meeting|reunión]] [[is|es]] ______ [[Thursday|jueves]].', 'on')],
            'learning_outcomes': [   'Name and spell the days of the week',
                                     "Use 'on' with days of the week",
                                     'Talk about weekly plans and habits'],
            'module': 2,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Monday', 'Lunes'),
                                                        ('Wednesday', 'Miércoles'),
                                                        ('Friday', 'Viernes')],
                                         'question_en': '[[What|Qué]] [[day|día]] [[is|es]] [[it|hoy]] [[in|en]] '
                                                        '[[the|la]] [[conversation|conversación]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Today', 'Hoy'),
                                                        ('Tomorrow', 'Mañana'),
                                                        ('On Friday', 'El viernes')],
                                         'question_en': '[[When|Cuándo]] [[is|es]] [[the|la]] [[test|prueba]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('Yes', 'Sí'), ('No', 'No'), ('Sometimes', 'A veces')],
                                         'question_en': '[[Does|Trabaja]] [[the|el]] [[speaker|hablante]] '
                                                        '[[work|trabaja]] [[on|los]] [[Saturdays|sábados]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Works', 'Trabaja'),
                                                        ('Relaxes at home', 'Se relaja en casa'),
                                                        ('Goes to the gym', 'Va al gimnasio')],
                                         'question_en': '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] '
                                                        '[[do|hace]] [[on|los]] [[weekends|fines de semana]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('at', 'a (hora)'), ('in', 'en (mes)'), ('on', 'en (día)')],
                                         'question_en': '[[Which|Cuál]] [[preposition|preposición]] [[goes|va]] '
                                                        '[[before|antes de]] [[days|días] ] [[of|de]] [[the|la]] '
                                                        '[[week|semana]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Tuesday', 'Martes'),
                                                        ('Thursday', 'Jueves'),
                                                        ('Wednesday', 'Miércoles')],
                                         'question_en': '[[How|Cómo]] [[do|se dice]] [[you|tú]] [[say|dices]] '
                                                        "'Miércoles' [[in|en]] [[English|inglés]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Monday to Friday', 'Lunes a viernes'),
                                                        ('Saturday and Sunday', 'Sábado y domingo'),
                                                        ('Any free day', 'Cualquier día libre')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Weekend' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Today', 'Hoy'),
                                                        ('The day before today', 'El día antes de hoy'),
                                                        ('The next day', 'El día siguiente')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Yesterday' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Five', 'Cinco'), ('Six', 'Seis'), ('Seven', 'Siete')],
                                         'question_en': '[[How|Cuántos]] [[many|muchos]] [[days|días]] [[are|hay]] '
                                                        '[[in|en]] [[a|una]] [[week|semana]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Tuesday', 'Martes'),
                                                        ('Thursday', 'Jueves'),
                                                        ('Friday', 'Viernes')],
                                         'question_en': '[[What|Cuál]] [[is|es]] [[the|el]] [[day|día]] '
                                                        '[[after|después de]] [[Wednesday|miércoles]]?'}],
            'title': 'Days of the Week',
            'vocab': [   ('Monday', 'Lunes'),
                         ('Tuesday', 'Martes'),
                         ('Wednesday', 'Miércoles'),
                         ('Thursday', 'Jueves'),
                         ('Friday', 'Viernes'),
                         ('Saturday', 'Sábado'),
                         ('Sunday', 'Domingo'),
                         ('Weekend', 'Fin de semana'),
                         ('Weekday', 'Día de semana'),
                         ('Today', 'Hoy'),
                         ('Tomorrow', 'Mañana (día siguiente)'),
                         ('Yesterday', 'Ayer'),
                         ('Week', 'Semana'),
                         ('Day', 'Día')]},
    13: {   'dialogue_lines': [   '[[Can|Puedes]] [[you|tú]] [[describe|describir]] [[your|tu]] [[daily|diaria]] '
                                  '[[routine|rutina]]?',
                                  '[[Sure|Claro]]! [[First|Primero]], [[I|yo]] [[wake|me despierto]] [[up|arriba]] '
                                  '[[at|a]] [[six|las seis]] [[thirty|y media]].',
                                  '[[Then|Luego]], [[I|yo]] [[take|me doy]] [[a|una]] [[shower|ducha]] [[and|y]] '
                                  '[[get|me]] [[dressed|visto]].',
                                  '[[After|Después de]] [[that|eso]], [[I|yo]] [[have|desayuno]] [[breakfast|el '
                                  'desayuno]] — [[usually|normalmente]] [[toast|tostadas]] [[and|y]] [[coffee|café]].',
                                  '[[Finally|Finalmente]], [[I|yo]] [[go|voy]] [[to|al]] [[work|trabajo]] [[at|a]] '
                                  "[[eight|las ocho]] [[o'clock|en punto]]."],
            'grammar_patterns': [   (   '______, [[I|Yo]] [[wake|me despierto]] [[up|arriba]] [[at|a]] [[seven|las '
                                        'siete]].',
                                        'First'),
                                    ('[[Then|Luego]], ______ [[take|me doy]] [[a|una]] [[shower|ducha]].', 'I'),
                                    (   '[[After|Después de]] [[that|eso]], [[I|Yo]] ______ [[breakfast|el desayuno]].',
                                        'have'),
                                    ('[[I|Yo]] ______ [[to|al]] [[work|trabajo]] [[at|a]] [[nine|las nueve]].', 'go'),
                                    (   '[[Finally|Finalmente]], [[I|yo]] ______ [[to|a]] [[bed|la cama]] [[at|a]] '
                                        '[[eleven|las once]].',
                                        'go'),
                                    (   '[[She|Ella]] ______ [[her|sus]] [[teeth|dientes]] [[every|cada]] '
                                        '[[morning|mañana]].',
                                        'brushes')],
            'learning_outcomes': [   'Describe a daily routine using sequence adverbs',
                                     'Use First, Then, After that, Finally',
                                     'Talk about morning activities in English'],
            'module': 2,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ("Six o'clock", 'Las seis en punto'),
                                                        ('Six thirty', 'Las seis y media'),
                                                        ("Seven o'clock", 'Las siete en punto')],
                                         'question_en': '[[What|A qué]] [[time|hora]] [[does|se despierta]] [[the|el]] '
                                                        '[[speaker|hablante]] [[wake|despierta]] [[up|arriba]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Has breakfast', 'Desayuna'),
                                                        ('Wakes up', 'Se despierta'),
                                                        ('Goes to work', 'Va al trabajo')],
                                         'question_en': '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] '
                                                        '[[do|hace]] [[first|primero]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Has breakfast', 'Desayuna'),
                                                        ('Gets dressed', 'Se viste'),
                                                        ('Takes a shower', 'Se ducha')],
                                         'question_en': '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] '
                                                        '[[after|después de]] [[waking|despertarse]] [[up|arriba]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Eggs and milk', 'Huevos y leche'),
                                                        ('Toast and coffee', 'Tostadas y café'),
                                                        ('Cereal and juice', 'Cereales y zumo')],
                                         'question_en': '[[What|Qué]] [[does|desayuna]] [[the|el]] '
                                                        '[[speaker|hablante]] [[eat|come]] [[for|de]] '
                                                        '[[breakfast|desayuno]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('At seven', 'A las siete'),
                                                        ('At nine', 'A las nueve'),
                                                        ('At eight', 'A las ocho')],
                                         'question_en': '[[What|A qué]] [[time|hora]] [[does|va]] [[the|el]] '
                                                        '[[speaker|hablante]] [[go|va]] [[to|al]] [[work|trabajo]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Then', 'Luego'),
                                                        ('Finally', 'Finalmente'),
                                                        ('First', 'Primero')],
                                         'question_en': '[[Which|Cuál]] [[sequence|secuencia]] [[adverb|adverbio]] '
                                                        "[[means|significa]] 'Primero'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('First', 'Primero'),
                                                        ('Then', 'Luego'),
                                                        ('Finally', 'Finalmente')],
                                         'question_en': '[[Which|Cuál]] [[word|palabra]] [[means|significa]] '
                                                        "'Finalmente'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Go to bed', 'Irse a la cama'),
                                                        ('Get dressed', 'Vestirse'),
                                                        ('Wake up', 'Despertarse')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Wake up' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Before', 'Antes'),
                                                        ('Then', 'Luego (inmediatamente)'),
                                                        ('After that', 'Después de eso')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'After that' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Goes to work', 'Va al trabajo'),
                                                        ('Has breakfast', 'Desayuna'),
                                                        ('Takes a shower', 'Se ducha')],
                                         'question_en': '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] '
                                                        '[[do|hace]] [[after|después de]] [[getting|vestirse]] '
                                                        '[[dressed|vestido]]?'}],
            'title': 'Daily Routine',
            'vocab': [   ('Wake up', 'Despertarse'),
                         ('Brush teeth', 'Cepillarse los dientes'),
                         ('Have breakfast', 'Desayunar'),
                         ('Go to work', 'Ir al trabajo'),
                         ('Have lunch', 'Almorzar'),
                         ('Have dinner', 'Cenar'),
                         ('Go to bed', 'Irse a la cama'),
                         ('Take a shower', 'Ducharse'),
                         ('Get dressed', 'Vestirse'),
                         ('Come home', 'Llegar a casa'),
                         ('First', 'Primero'),
                         ('Then', 'Luego'),
                         ('After that', 'Después de eso'),
                         ('Finally', 'Finalmente')]},
    14: {   'dialogue_lines': [   '[[Do|Ves]] [[you|tú]] [[watch|ves]] [[TV|televisión]] [[in|por]] [[the|la]] '
                                  '[[evening|noche]]?',
                                  '[[Sometimes|A veces]], [[but|pero]] [[I|yo]] [[usually|normalmente]] '
                                  '[[listen|escucho]] [[to|a]] [[music|música]].',
                                  '[[Do|Hacéis]] [[you|vosotros]] [[and|y]] [[your|tu]] [[friends|amigos]] '
                                  '[[exercise|ejercicio]] [[together|juntos]]?',
                                  '[[Yes|Sí]]! [[We|Nosotros]] [[go|vamos]] [[to|al]] [[the|al]] [[gym|gimnasio]] '
                                  '[[three|tres]] [[times|veces]] [[a|a la]] [[week|semana]].',
                                  "[[We|Nosotros]] [[don't|no]] [[call|llamamos]] [[each|a los]] [[other|demás]] — "
                                  '[[we|nosotros]] [[just|simplemente]] [[meet|nos encontramos]] [[there|allí]].'],
            'grammar_patterns': [   (   '[[I|Yo]] ______ [[watch|ver]] [[TV|televisión]] [[on|los]] [[Mondays|lunes]].',
                                        "don't"),
                                    ('[[Do|Haces]] [[you|tú]] ______ [[the|los]] [[dishes|platos]]?', 'do'),
                                    (   '[[We|Nosotros]] ______ [[exercise|hacemos ejercicio]] [[every|cada]] '
                                        '[[day|día]].',
                                        "don't"),
                                    (   '______ [[they|ellos]] [[go|van]] [[shopping|de compras]] [[together|juntos]]?',
                                        'Do'),
                                    (   "[[I|Yo]] [[don't|no]] ______ [[the|la]] [[house|casa]] [[on|los]] "
                                        '[[weekdays|días de semana]].',
                                        'clean'),
                                    (   '[[Do|Escucháis]] [[you|vosotros]] ______ [[to|a]] [[music|música]] '
                                        '[[together|juntos]]?',
                                        'listen')],
            'learning_outcomes': [   "Form Present Simple negatives with don't",
                                     'Ask yes/no questions with Do...?',
                                     'Talk about habits and leisure activities'],
            'module': 2,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Yes, always', 'Sí, siempre'),
                                                        ('Sometimes', 'A veces'),
                                                        ('No, never', 'No, nunca')],
                                         'question_en': '[[Does|Ve]] [[the|el]] [[speaker|hablante]] [[watch|ve]] '
                                                        '[[TV|televisión]] [[every|cada]] [[evening|noche]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Watches TV', 'Ve televisión'),
                                                        ('Listens to music', 'Escucha música'),
                                                        ('Exercises', 'Hace ejercicio')],
                                         'question_en': '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] '
                                                        '[[usually|normalmente]] [[do|hace]] [[in|por]] [[the|la]] '
                                                        '[[evening|noche]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Twice', 'Dos veces'),
                                                        ('Four times', 'Cuatro veces'),
                                                        ('Three times', 'Tres veces')],
                                         'question_en': '[[How|Cuántas]] [[many|muchas]] [[times|veces]] [[do|van]] '
                                                        '[[they|ellos]] [[go|van]] [[to|al]] [[the|al]] '
                                                        '[[gym|gimnasio]] [[per|por]] [[week|semana]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('They call first', 'Primero llaman'),
                                                        ('They meet at the gym', 'Se encuentran en el gimnasio'),
                                                        ('They go together', 'Van juntos desde casa')],
                                         'question_en': '[[How|Cómo]] [[do|se conocen]] [[they|ellos]] [[meet|se '
                                                        'encuentran]]?'},
                                     {   'correct_idx': 0,
                                         'options': [   ("I don't work on Mondays", 'No trabajo los lunes'),
                                                        ("I doesn't work on Mondays", 'Incorrecto'),
                                                        ('I am not work on Mondays', 'Incorrecto')],
                                         'question_en': '[[What|Cuál]] [[is|es]] [[the|la]] [[negative|negativa]] '
                                                        "[[of|de]] 'I work on Mondays'?"},
                                     {   'correct_idx': 0,
                                         'options': [   ('Do + subject + verb?', 'Do + sujeto + verbo?'),
                                                        ('Does + subject + verb?', 'Does + sujeto + verbo?'),
                                                        ('Is + subject + verb?', 'Is + sujeto + verbo?')],
                                         'question_en': '[[How|Cómo]] [[do|formas]] [[you|tú]] [[form|formas]] '
                                                        "[[a|una]] [[question|pregunta]] [[with|con]] 'Do'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Never', 'Nunca'),
                                                        ('Often', 'A menudo'),
                                                        ('Sometimes', 'A veces')],
                                         'question_en': "[[Which|Cuál]] [[word|palabra]] [[means|significa]] 'A "
                                                        "veces'?"},
                                     {   'correct_idx': 0,
                                         'options': [   ('Do not', 'No (negación)'),
                                                        ('Does not', 'No (3ra persona)'),
                                                        ('Did not', 'No (pasado)')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Don't' [[mean|significa]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ("We doesn't exercise", 'Incorrecto'),
                                                        ("We don't exercise", 'Nosotros no hacemos ejercicio'),
                                                        ('We not exercise', 'Incorrecto')],
                                         'question_en': '[[Which|Cuál]] [[sentence|oración]] [[is|es]] '
                                                        '[[correct|correcta]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Go to a shop to look', 'Ir a ver'),
                                                        ('Do housework', 'Hacer tareas'),
                                                        ('Go to buy things', 'Ir de compras')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Go shopping' "
                                                        '[[mean|significa]]?'}],
            'title': 'Present Simple: I, You, We, They',
            'vocab': [   ('Watch TV', 'Ver la televisión'),
                         ('Listen to music', 'Escuchar música'),
                         ('Clean the house', 'Limpiar la casa'),
                         ('Do homework', 'Hacer los deberes'),
                         ('Go shopping', 'Ir de compras'),
                         ('Exercise', 'Hacer ejercicio'),
                         ('Call a friend', 'Llamar a un amigo'),
                         ('Relax', 'Relajarse'),
                         ('Use the computer', 'Usar el ordenador'),
                         ("Don't", 'No (negación)'),
                         ('Do', '¿Hacer...? (pregunta)'),
                         ('Often', 'A menudo'),
                         ('Never', 'Nunca'),
                         ('Every week', 'Cada semana')]},
    15: {   'dialogue_lines': [   '[[Tell|Cuéntame]] [[me|me]] [[about|sobre]] [[your|tu]] [[sister|hermana]]. '
                                  '[[What|Qué]] [[does|hace]] [[she|ella]] [[do|hace]]?',
                                  '[[She|Ella]] [[is|es]] [[a|una]] [[teacher|profesora]]. [[She|Ella]] '
                                  '[[teaches|enseña]] [[science|ciencias]] [[at|en]] [[a|un]] [[high|instituto]] '
                                  '[[school|escuela]].',
                                  '[[Does|Sale]] [[she|ella]] [[leave|sale]] [[early|temprano]] [[in|por]] [[the|la]] '
                                  '[[morning|mañana]]?',
                                  '[[Yes|Sí]], [[she|ella]] [[leaves|sale]] [[at|a]] [[seven|las siete]]. [[She|Ella]] '
                                  "[[doesn't|no]] [[like|le gusta]] [[being|estar]] [[late|tarde]].",
                                  '[[What|Qué]] [[does|hace]] [[she|ella]] [[do|hace]] [[in|por]] [[the|la]] '
                                  '[[afternoon|tarde]]?'],
            'grammar_patterns': [   (   '[[She|Ella]] ______ [[teach|enseñar]] [[on|los]] [[Sundays|domingos]].',
                                        "doesn't"),
                                    ('______ [[he|él]] [[live|vive]] [[near|cerca]] [[here|aquí]]?', 'Does'),
                                    ('[[My|Mi]] [[cat|gato]] ______ [[at|por]] [[night|la noche]].', 'sleeps'),
                                    (   '[[She|Ella]] ______ [[to|al]] [[work|trabajo]] [[by|en]] [[car|coche]].',
                                        'drives'),
                                    (   "[[He|Él]] [[doesn't|no]] ______ [[early|temprano]] [[on|los]] "
                                        '[[weekends|fines de semana]].',
                                        'wake'),
                                    (   '______ [[your|tu]] [[dog|perro]] [[bark|ladra]] [[a|mucho]] [[lot|mucho]]?',
                                        'Does')],
            'learning_outcomes': [   "Form Present Simple negatives with doesn't",
                                     'Ask yes/no questions with Does...?',
                                     'Apply the 3rd person singular spelling rules'],
            'module': 2,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Doctor', 'Médica'),
                                                        ('Teacher', 'Profesora'),
                                                        ('Engineer', 'Ingeniera')],
                                         'question_en': "[[What|Cuál]] [[is|es]] [[the|la]] [[sister's|de la hermana]] "
                                                        '[[job|profesión]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Maths', 'Matemáticas'),
                                                        ('English', 'Inglés'),
                                                        ('Science', 'Ciencias')],
                                         'question_en': '[[What|Qué]] [[subject|asignatura]] [[does|enseña]] '
                                                        '[[the|la]] [[sister|hermana]] [[teach|enseña]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('At six', 'A las seis'),
                                                        ('At eight', 'A las ocho'),
                                                        ('At seven', 'A las siete')],
                                         'question_en': '[[What|A qué]] [[time|hora]] [[does|sale]] [[she|ella]] '
                                                        '[[leave|sale]] [[home|de casa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('Yes', 'Sí'), ('No', 'No'), ('Sometimes', 'A veces')],
                                         'question_en': '[[Does|Le gusta]] [[she|ella]] [[like|le gusta]] '
                                                        '[[being|estar]] [[late|tarde]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ("She don't work", 'Incorrecto'),
                                                        ("She doesn't work", 'Ella no trabaja'),
                                                        ("She isn't work", 'Incorrecto')],
                                         'question_en': '[[What|Cuál]] [[is|es]] [[the|la]] [[negative|negativa]] '
                                                        "[[form|forma]] [[of|de]] 'She works'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Do he...?', 'Incorrecto'),
                                                        ('Does he...?', '¿Él...?'),
                                                        ('Is he...?', '¿Está él...?')],
                                         'question_en': '[[How|Cómo]] [[do|formas]] [[you|tú]] [[form|formas]] '
                                                        "[[a|una]] [[question|pregunta]] [[about|sobre]] 'he/she'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('teachs', 'Incorrecto'),
                                                        ('teachies', 'Incorrecto'),
                                                        ('teaches', 'Enseña')],
                                         'question_en': '[[What|Qué]] [[is|es]] [[the|la]] [[third|tercera]] '
                                                        "[[person|persona]] [[of|de]] 'teach'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Rarely', 'Raramente'),
                                                        ('Usually', 'Normalmente'),
                                                        ('Never', 'Nunca')],
                                         'question_en': '[[Which|Cuál]] [[word|palabra]] [[means|significa]] '
                                                        "'Normalmente'?"},
                                     {   'correct_idx': 1,
                                         'options': [('gos', 'Incorrecto'), ('goes', 'Va'), ('go', 'Van')],
                                         'question_en': '[[What|Cuál]] [[is|es]] [[the|la]] [[third|tercera]] '
                                                        "[[person|persona]] [[of|de]] 'go'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('watchs', 'Incorrecto'),
                                                        ('watchies', 'Incorrecto'),
                                                        ('watches', 'Ve')],
                                         'question_en': '[[What|Qué]] [[is|es]] [[the|la]] [[third|tercera]] '
                                                        "[[person|persona]] [[of|de]] 'watch'?"}],
            'title': 'Present Simple: He, She, It',
            'vocab': [   ('Teach', 'Enseñar'),
                         ('Lives', 'Vive'),
                         ('Studies', 'Estudia'),
                         ('Watches', 'Ve (televisión)'),
                         ('Flies', 'Vuela'),
                         ('Barks', 'Ladra'),
                         ('Drives', 'Conduce'),
                         ("Doesn't", 'No (negación 3ra persona)'),
                         ('Does', '¿Hace...? (pregunta 3ra persona)'),
                         ('Usually', 'Normalmente'),
                         ('Rarely', 'Raramente'),
                         ('Every morning', 'Cada mañana'),
                         ('At night', 'Por la noche'),
                         ('Together', 'Juntos')]},
    16: {   'dialogue_lines': [   '[[Good|Buenos]] [[morning|días]]! [[What|Qué]] [[can|puedo]] [[I|yo]] [[get|traer]] '
                                  '[[you|le]]?',
                                  "[[I'd|Me gustaría]] [[like|me gustaría]] [[a|un]] [[large|grande]] [[coffee|café]] "
                                  '[[and|y]] [[a|un]] [[sandwich|sándwich]], [[please|por favor]].',
                                  '[[Of|Por]] [[course|supuesto]]! [[Anything|Algo]] [[else|más]]?',
                                  '[[Yes|Sí]], [[can|puedo]] [[I|yo]] [[have|tener]] [[a|un]] [[piece|trozo]] '
                                  '[[of|de]] [[cake|tarta]], [[please|por favor]]?',
                                  '[[That|Eso]] [[will|será]] [[be|será]] [[eight|ocho]] [[euros|euros]], [[please|por '
                                  'favor]].'],
            'grammar_patterns': [   (   '[[Can|Puedo]] [[I|yo]] ______ [[a|un]] [[coffee|café]], [[please|por favor]]?',
                                        'have'),
                                    (   '______ [[like|me gustaría]] [[a|un]] [[sandwich|sándwich]], [[please|por '
                                        'favor]].',
                                        "I'd"),
                                    ('[[Could|Podría]] [[I|yo]] ______ [[the|la]] [[menu|carta]]?', 'have'),
                                    (   '[[I|Yo]] ______ [[like|me gustaría]] [[a|un]] [[large|grande]] [[tea|té]].',
                                        'would'),
                                    (   '[[Can|Puede]] [[we|nosotros]] ______ [[the|la]] [[bill|cuenta]], [[please|por '
                                        'favor]]?',
                                        'have'),
                                    (   '[[Two|Dos]] [[coffees|cafés]] ______ [[one|un]] [[orange|naranja]] '
                                        '[[juice|zumo]], [[please|por favor]].',
                                        'and')],
            'learning_outcomes': [   'Order food and drinks in English',
                                     "Use 'Can I have...?' and 'I'd like...'",
                                     'Understand a simple menu and prices'],
            'module': 2,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Tea and biscuits', 'Té y galletas'),
                                                        ('Coffee and sandwich', 'Café y sándwich'),
                                                        ('Juice and cake', 'Zumo y tarta')],
                                         'question_en': '[[What|Qué]] [[does|pide]] [[the|el]] [[customer|cliente]] '
                                                        '[[order|pide]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Small', 'Pequeño'), ('Medium', 'Mediano'), ('Large', 'Grande')],
                                         'question_en': '[[What|Qué]] [[size|tamaño]] [[of|de]] [[coffee|café]] '
                                                        '[[does|pide]] [[the|el]] [[customer|cliente]] '
                                                        '[[want|quiere]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('No', 'No'),
                                                        ('Yes, a piece of cake', 'Sí, un trozo de tarta'),
                                                        ('Yes, another coffee', 'Sí, otro café')],
                                         'question_en': '[[Does|Pide]] [[the|el]] [[customer|cliente]] [[order|pide]] '
                                                        '[[anything|algo]] [[else|más]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Six euros', 'Seis euros'),
                                                        ('Ten euros', 'Diez euros'),
                                                        ('Eight euros', 'Ocho euros')],
                                         'question_en': '[[How|Cuánto]] [[much|cuánto]] [[does|cuesta]] [[the|el]] '
                                                        '[[order|pedido]] [[cost|cuesta]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Give me...', 'Dame...'),
                                                        ('I want...', 'Quiero...'),
                                                        ('Can I have...?', '¿Puedo tomar...?')],
                                         'question_en': '[[How|Cómo]] [[do|pides]] [[you|tú]] '
                                                        '[[politely|educadamente]] [[ask|pides]] [[for|por]] '
                                                        '[[something|algo]] [[in|en]] [[English|inglés]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('I like', 'Me gusta'),
                                                        ('I would like', 'Me gustaría'),
                                                        ("I don't like", 'No me gusta')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'I'd like' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Menu', 'Menú'), ('Bill', 'Cuenta'), ('Waiter', 'Camarero')],
                                         'question_en': '[[Which|Cuál]] [[word|palabra]] [[means|significa]] '
                                                        "'Camarero'?"},
                                     {   'correct_idx': 2,
                                         'options': [('Menu', 'Menú'), ('Table', 'Mesa'), ('Check/Account', 'Cuenta')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Bill' [[mean|significa]] "
                                                        '[[in|en]] [[a|un]] [[restaurant|restaurante]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('No problem', 'Sin problema'),
                                                        ('Certainly/Yes', 'Por supuesto'),
                                                        ('I understand', 'Entiendo')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Of course' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Good afternoon!', '¡Buenas tardes!'),
                                                        ('Good morning!', '¡Buenos días!'),
                                                        ('Good evening!', '¡Buenas noches!')],
                                         'question_en': '[[How|Cómo]] [[does|dice]] [[the|el]] [[waiter|camarero]] '
                                                        '[[greet|saluda]] [[the|al]] [[customer|cliente]]?'}],
            'title': 'At the Cafe',
            'vocab': [   ('Coffee', 'Café'),
                         ('Tea', 'Té'),
                         ('Orange juice', 'Zumo de naranja'),
                         ('Water', 'Agua'),
                         ('Sandwich', 'Sándwich'),
                         ('Cake', 'Tarta'),
                         ('Menu', 'Menú'),
                         ('Waiter', 'Camarero'),
                         ('Bill', 'Cuenta'),
                         ('Order', 'Pedir'),
                         ('Large', 'Grande'),
                         ('Small', 'Pequeño'),
                         ('Please', 'Por favor'),
                         ('Here you are', 'Aquí tiene')]},
    17: {   'dialogue_lines': [   '[[What|Qué]] [[do|sueles comer]] [[you|tú]] [[usually|sueles comer]] [[eat|comer]] '
                                  '[[for|de]] [[breakfast|desayuno]]?',
                                  '[[I|Yo]] [[have|tengo]] [[cereal|cereales]] [[and|y]] [[milk|leche]] [[or|o]] '
                                  '[[toast|tostadas]] [[with|con]] [[butter|mantequilla]].',
                                  '[[Do|Te gusta]] [[you|tú]] [[like|te gusta]] [[eggs|los huevos]]?',
                                  '[[Yes|Sí]]! [[I|Yo]] [[love|me encantan]] [[scrambled|revueltos]] [[eggs|huevos]]. '
                                  '[[What|Qué]] [[about|sueles comer]] [[you|tú]]?',
                                  '[[I|Yo]] [[usually|normalmente]] [[have|tengo]] [[fruit|fruta]] — '
                                  '[[apples|manzanas]] [[or|o]] [[bananas|plátanos]].'],
            'grammar_patterns': [   ('[[I|Yo]] ______ [[eggs|huevos]] [[for|de]] [[breakfast|desayuno]].', 'like'),
                                    (   '[[She|Ella]] ______ [[pasta|pasta]] [[but|pero]] [[loves|le encanta]] '
                                        '[[rice|el arroz]].',
                                        "doesn't like"),
                                    (   '[[We|Nosotros]] ______ [[fish|pescado]] [[every|cada]] [[Friday|viernes]].',
                                        'eat'),
                                    ('[[Do|Te gusta]] [[you|tú]] ______ [[salad|ensalada]]?', 'like'),
                                    (   '[[He|Él]] ______ [[meat|carne]]. [[He|Él]] [[is|es]] '
                                        '[[vegetarian|vegetariano]].',
                                        "doesn't eat"),
                                    ('[[I|Yo]] [[love|me encanta]] ______ [[for|de]] [[dinner|cena]].', 'soup')],
            'learning_outcomes': [   'Name common food items in English',
                                     'Use like/love/hate with nouns',
                                     'Describe eating habits and meal preferences'],
            'module': 2,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Eggs and toast', 'Huevos y tostadas'),
                                                        ('Cereal and milk or toast', 'Cereales y leche o tostadas'),
                                                        ('Fruit and yogurt', 'Fruta y yogur')],
                                         'question_en': '[[What|Qué]] [[does|desayuna]] [[speaker|el hablante]] '
                                                        '[[1|1]] [[usually|normalmente]] [[have|tiene]] [[for|de]] '
                                                        '[[breakfast|desayuno]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Jam', 'Mermelada'),
                                                        ('Butter', 'Mantequilla'),
                                                        ('Cheese', 'Queso')],
                                         'question_en': '[[What|Qué]] [[does|pone]] [[speaker|el hablante]] [[1|1]] '
                                                        '[[put|pone]] [[on|en]] [[toast|las tostadas]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Fried', 'Fritos'),
                                                        ('Boiled', 'Cocidos'),
                                                        ('Scrambled', 'Revueltos')],
                                         'question_en': '[[How|Cómo]] [[does|le gustan]] [[speaker|al hablante]] '
                                                        '[[1|1]] [[like|le gustan]] [[their|sus]] [[eggs|huevos]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Bread and butter', 'Pan y mantequilla'),
                                                        ('Fruit', 'Fruta'),
                                                        ('Cereal', 'Cereales')],
                                         'question_en': '[[What|Qué]] [[does|desayuna]] [[speaker|el hablante]] '
                                                        '[[2|2]] [[have|tiene]] [[for|de]] [[breakfast|desayuno]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Oranges and grapes', 'Naranjas y uvas'),
                                                        ('Apples and bananas', 'Manzanas y plátanos'),
                                                        ('Strawberries and melon', 'Fresas y melón')],
                                         'question_en': '[[Which|Cuál]] [[fruits|frutas]] [[are|se]] '
                                                        '[[mentioned|mencionan]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('I like a little', 'Me gusta un poco'),
                                                        ('I really like', 'Me encanta'),
                                                        ("I don't like", 'No me gusta')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'I love' "
                                                        '[[express|expresa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Fruit', 'Fruta'),
                                                        ('Vegetables', 'Verduras'),
                                                        ('Salad', 'Ensalada')],
                                         'question_en': '[[Which|Cuál]] [[word|palabra]] [[means|significa]] '
                                                        "'Verduras'?"},
                                     {   'correct_idx': 0,
                                         'options': [('Soup', 'Sopa'), ('Chicken', 'Pollo'), ('Fish', 'Pescado')],
                                         'question_en': '[[What|Qué]] [[is|es]] [[a|una]] [[typical|típica]] '
                                                        '[[dinner|cena]] [[food|comida]] [[in|en]] [[the|la]] '
                                                        '[[conversation|conversación]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Butter', 'Mantequilla'), ('Bread', 'Pan'), ('Milk', 'Leche')],
                                         'question_en': "[[Which|Cuál]] [[word|palabra]] [[means|significa]] 'Leche'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('+ to + verb', '+ to + verbo'),
                                                        ('+ noun or gerund', '+ nombre o gerundio'),
                                                        ('+ adjective', '+ adjetivo')],
                                         'question_en': '[[What|Qué]] [[structure|estructura]] [[follows|sigue]] '
                                                        "'like/love/hate'?"}],
            'title': 'Breakfast, Lunch & Dinner',
            'vocab': [   ('Bread', 'Pan'),
                         ('Butter', 'Mantequilla'),
                         ('Eggs', 'Huevos'),
                         ('Milk', 'Leche'),
                         ('Rice', 'Arroz'),
                         ('Pasta', 'Pasta'),
                         ('Chicken', 'Pollo'),
                         ('Salad', 'Ensalada'),
                         ('Soup', 'Sopa'),
                         ('Fruit', 'Fruta'),
                         ('Vegetables', 'Verduras'),
                         ('Meat', 'Carne'),
                         ('Fish', 'Pescado'),
                         ('Cereal', 'Cereales')]},
    18: {   'dialogue_lines': [   '[[What|Cuáles]] [[are|son]] [[your|tus]] [[hobbies|aficiones]]?',
                                  '[[I|Yo]] [[love|me encanta]] [[reading|leer]] [[and|y]] [[painting|pintar]]. '
                                  '[[I|Yo]] [[find|encuentro]] [[them|eso]] [[very|muy]] [[relaxing|relajante]].',
                                  '[[What|Qué]] [[about|hay de]] [[sports|deportes]]? [[Do|Te gusta]] [[you|tú]] '
                                  '[[like|te gusta]] [[swimming|nadar]]?',
                                  '[[Not|No]] [[really|mucho]]. [[I|Yo]] [[prefer|prefiero]] [[dancing|bailar]]. '
                                  '[[Why|Por qué]] [[do|te gusta]] [[you|tú]] [[ask|preguntas]]?',
                                  '[[Because|Porque]] [[I|yo]] [[am|estoy]] [[looking|buscando]] [[for|por]] [[a|un]] '
                                  '[[dance|baile]] [[partner|compañero]]!'],
            'grammar_patterns': [   (   '[[I|Yo]] [[love|me encanta]] ______ [[in|en]] [[the|la]] [[sea|mar]].',
                                        'swimming'),
                                    (   "[[She|Ella]] [[doesn't|no]] [[like|le gusta]] ______. [[It|Es]] [[is|es]] "
                                        '[[too|demasiado]] [[loud|ruidoso]].',
                                        'singing'),
                                    ('[[Why|Por qué]] [[do|te gusta]] [[you|tú]] [[like|te gusta]] ______?', 'dancing'),
                                    (   '[[Because|Porque]] [[it|eso]] [[is|es]] [[fun|divertido]] ______ '
                                        '[[creative|creativo]].',
                                        'and'),
                                    (   '[[I|Yo]] ______ [[like|no me gusta]] [[cooking|cocinar]]. [[I|Yo]] '
                                        '[[find|encuentro]] [[it|eso]] [[relaxing|relajante]].',
                                        "don't"),
                                    ('[[Do|Te gusta]] [[you|tú]] [[enjoy|disfrutas]] ______?', 'reading')],
            'learning_outcomes': [   'Express likes and dislikes using like/love/hate + -ing',
                                     "Ask and answer 'Why?' with 'Because...'",
                                     'Talk about hobbies and interests'],
            'module': 2,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Swimming and cooking', 'Nadar y cocinar'),
                                                        ('Reading and painting', 'Leer y pintar'),
                                                        ('Dancing and singing', 'Bailar y cantar')],
                                         'question_en': "[[What|Cuáles]] [[are|son]] [[the|las]] [[speaker's|del "
                                                        'hablante]] [[hobbies|aficiones]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('They are exciting', 'Son emocionantes'),
                                                        ('They are relaxing', 'Son relajantes'),
                                                        ('They are cheap', 'Son baratas')],
                                         'question_en': '[[Why|Por qué]] [[does|le gustan]] [[the|al]] '
                                                        '[[speaker|hablante]] [[like|le gustan]] [[these|estas]] '
                                                        '[[hobbies|aficiones]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Yes, very much', 'Sí, mucho'),
                                                        ('Not really', 'No mucho'),
                                                        ('No, hates it', 'No, lo odia')],
                                         'question_en': '[[Does|Le gusta]] [[the|al]] [[speaker|hablante]] [[like|le '
                                                        'gusta]] [[swimming|nadar]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Reading', 'Leer'), ('Swimming', 'Nadar'), ('Dancing', 'Bailar')],
                                         'question_en': '[[What|Qué]] [[activity|actividad]] [[does|prefiere]] '
                                                        '[[the|el]] [[speaker|hablante]] [[prefer|prefiere]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('To learn to dance', 'Para aprender a bailar'),
                                                        (   'Looking for a dance partner',
                                                            'Buscando un compañero de baile'),
                                                        ('To start a hobby club', 'Para iniciar un club')],
                                         'question_en': '[[Why|Por qué]] [[is|pregunta]] [[the|el]] [[other|otro]] '
                                                        '[[person|persona]] [[asking|pregunta]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('swiming', 'Incorrecto'),
                                                        ('swimm', 'Incorrecto'),
                                                        ('swimming', 'Nadando')],
                                         'question_en': '[[How|Cómo]] [[do|formas]] [[you|tú]] [[form|formas]] '
                                                        "[[a|una]] [[gerund|gerundio]] [[from|de]] 'swim'?"},
                                     {   'correct_idx': 0,
                                         'options': [   ('+ noun or -ing', '+ nombre o -ing'),
                                                        ('+ to + verb only', '+ to + verbo solo'),
                                                        ('+ adjective', '+ adjetivo')],
                                         'question_en': '[[Which|Cuál]] [[structure|estructura]] [[follows|sigue]] '
                                                        "'like/love/hate'?"},
                                     {   'correct_idx': 2,
                                         'options': [('But', 'Pero'), ('So', 'Entonces'), ('Because', 'Porque')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Because' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Sport', 'Deporte'), ('Game', 'Juego'), ('Hobby', 'Afición')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Afición'?"},
                                     {   'correct_idx': 2,
                                         'options': [('What?', '¿Qué?'), ('How?', '¿Cómo?'), ('Why?', '¿Por qué?')],
                                         'question_en': '[[How|Cómo]] [[do|preguntas]] [[you|tú]] [[ask|preguntas]] '
                                                        '[[why|por qué]] [[in|en]] [[English|inglés]]?'}],
            'title': 'Likes & Dislikes',
            'vocab': [   ('Reading', 'Leer'),
                         ('Cooking', 'Cocinar'),
                         ('Dancing', 'Bailar'),
                         ('Singing', 'Cantar'),
                         ('Drawing', 'Dibujar'),
                         ('Swimming', 'Nadar'),
                         ('Traveling', 'Viajar'),
                         ('Shopping', 'Ir de compras'),
                         ('Painting', 'Pintar'),
                         ('Gaming', 'Jugar a videojuegos'),
                         ('Because', 'Porque'),
                         ('Why', '¿Por qué?'),
                         ('Hobby', 'Afición'),
                         ('Enjoy', 'Disfrutar')]},
    19: {   'dialogue_lines': [   '[[When|Cuándo]] [[is|es]] [[your|tu]] [[birthday|cumpleaños]]?',
                                  '[[My|Mi]] [[birthday|cumpleaños]] [[is|es]] [[on|el]] [[the|el]] '
                                  '[[fifteenth|quince]] [[of|de]] [[August|agosto]].',
                                  "[[That's|Eso es]] [[in|en]] [[summer|verano]]! [[What|Qué]] [[do|haces]] [[you|tú]] "
                                  '[[usually|normalmente]] [[do|haces]]?',
                                  '[[I|Yo]] [[usually|normalmente]] [[have|hago]] [[a|una]] [[party|fiesta]] '
                                  '[[with|con]] [[my|mi]] [[family|familia]] [[and|y]] [[friends|amigos]].',
                                  '[[And|Y]] [[when|cuándo]] [[is|es]] [[Christmas|la Navidad]]?'],
            'grammar_patterns': [   ('[[My|Mi]] [[birthday|cumpleaños]] [[is|es]] ______ [[March|marzo]].', 'in'),
                                    (   '[[Christmas|La Navidad]] [[is|es]] ______ [[the|el]] [[25th|25]] [[of|de]] '
                                        '[[December|diciembre]].',
                                        'on'),
                                    (   '[[The|La]] [[meeting|reunión]] [[is|es]] ______ [[the|el]] [[first|primero]] '
                                        '[[of|de]] [[June|junio]].',
                                        'on'),
                                    ('______ [[is|es]] [[your|tu]] [[birthday|cumpleaños]]?', 'When'),
                                    (   '[[Summer|El verano]] [[is|es]] ______ [[June|junio]], [[July|julio]] '
                                        '[[and|y]] [[August|agosto]].',
                                        'in'),
                                    (   '[[I|Yo]] [[was|nací]] [[born|nació]] ______ [[the|el]] [[10th|10]] [[of|de]] '
                                        '[[May|mayo]].',
                                        'on')],
            'learning_outcomes': [   'Name the twelve months of the year',
                                     "Use 'in' for months and 'on' for specific dates",
                                     'Ask and answer about birthdays and dates'],
            'module': 2,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('August 5th', 'El 5 de agosto'),
                                                        ('August 15th', 'El 15 de agosto'),
                                                        ('August 25th', 'El 25 de agosto')],
                                         'question_en': "[[When|Cuándo]] [[is|es]] [[the|el]] [[speaker's|del "
                                                        'hablante]] [[birthday|cumpleaños]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Spring', 'Primavera'),
                                                        ('Autumn', 'Otoño'),
                                                        ('Summer', 'Verano')],
                                         'question_en': '[[What|En qué]] [[season|estación]] [[is|es]] [[the|el]] '
                                                        '[[birthday|cumpleaños]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Goes on holiday', 'Se va de vacaciones'),
                                                        ('Has a party', 'Hace una fiesta'),
                                                        ('Goes to a restaurant', 'Va a un restaurante')],
                                         'question_en': '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] '
                                                        '[[usually|normalmente]] [[do|hace]] [[on|en]] [[their|su]] '
                                                        '[[birthday|cumpleaños]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('on', 'en (día)'), ('at', 'a (hora)'), ('in', 'en (mes)')],
                                         'question_en': '[[Which|Cuál]] [[preposition|preposición]] [[is|se usa]] '
                                                        '[[used|usa]] [[with|con]] [[months|meses]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('in', 'en (mes)'),
                                                        ('on', 'en (día específico)'),
                                                        ('at', 'a (hora)')],
                                         'question_en': '[[Which|Cuál]] [[preposition|preposición]] [[is|se usa]] '
                                                        '[[used|usa]] [[with|con]] [[specific|específicas]] '
                                                        '[[dates|fechas]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('fifteenths', 'Incorrecto'),
                                                        ('fifteenth', 'Decimoquinto'),
                                                        ('fifteen', 'Quince (cardinal)')],
                                         'question_en': "[[How|Cómo]] [[do|se dice]] [[you|tú]] [[say|dices]] '15' "
                                                        '[[as|como]] [[an|un]] [[ordinal|ordinal]] [[number|número]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('June', 'Junio'),
                                                        ('September', 'Septiembre'),
                                                        ('August', 'Agosto')],
                                         'question_en': '[[Which|Cuál]] [[month|mes]] [[comes|viene]] [[after|después '
                                                        'de]] [[July|julio]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Anniversary', 'Aniversario'),
                                                        ('Holiday', 'Vacaciones'),
                                                        ('Birthday', 'Cumpleaños')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Birthday' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Where is your birthday?', '¿Dónde es tu cumpleaños?'),
                                                        ('When is your birthday?', '¿Cuándo es tu cumpleaños?'),
                                                        ('What is your birthday?', '¿Qué es tu cumpleaños?')],
                                         'question_en': '[[How|Cómo]] [[do|preguntas]] [[you|tú]] [[ask|preguntas]] '
                                                        "[[when|cuándo]] [[someone's|de alguien]] "
                                                        '[[birthday|cumpleaños]] [[is|es]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('November', 'Noviembre'),
                                                        ('October', 'Octubre'),
                                                        ('December', 'Diciembre')],
                                         'question_en': '[[Which|Cuál]] [[is|es]] [[the|el]] [[last|último]] '
                                                        '[[month|mes]] [[of|del]] [[the|el]] [[year|año]]?'}],
            'title': 'Months & Dates',
            'vocab': [   ('January', 'Enero'),
                         ('February', 'Febrero'),
                         ('March', 'Marzo'),
                         ('April', 'Abril'),
                         ('May', 'Mayo'),
                         ('June', 'Junio'),
                         ('July', 'Julio'),
                         ('August', 'Agosto'),
                         ('September', 'Septiembre'),
                         ('October', 'Octubre'),
                         ('November', 'Noviembre'),
                         ('December', 'Diciembre'),
                         ('Birthday', 'Cumpleaños'),
                         ('Anniversary', 'Aniversario')]},
    20: {   'dialogue_lines': [   '[[Tell|Cuéntame]] [[me|me]] [[about|sobre]] [[your|tu]] [[typical|típico]] '
                                  '[[Monday|lunes]].',
                                  '[[I|Yo]] [[wake|me despierto]] [[up|arriba]] [[at|a]] [[seven|las siete]], '
                                  '[[have|desayuno]], [[then|luego]] [[go|voy]] [[to|al]] [[work|trabajo]] [[at|a]] '
                                  '[[eight|las ocho]] [[thirty|y media]].',
                                  '[[Do|Comes]] [[you|tú]] [[eat|comes]] [[lunch|el almuerzo]] [[at|a]] '
                                  '[[work|trabajas]]?',
                                  "[[Yes|Sí]], [[usually|normalmente]] [[at|a]] [[one|la una]] [[o'clock|en punto]]. "
                                  '[[I|Yo]] [[like|me gusta]] [[having|tener]] [[salad|ensalada]] [[or|o]] [[a|un]] '
                                  '[[sandwich|sándwich]].',
                                  '[[And|Y]] [[what|qué]] [[do|haces]] [[you|tú]] [[do|haces]] [[after|después del]] '
                                  '[[work|trabajo]]?'],
            'grammar_patterns': [   (   '[[What|A qué]] ______ [[does|empieza]] [[school|la escuela]] '
                                        '[[start|empieza]]?',
                                        'time'),
                                    ("[[She|Ella]] [[doesn't|no]] ______ [[on|los]] [[Sundays|domingos]].", 'work'),
                                    (   '[[I|Yo]] [[love|me encanta]] ______ [[in|en]] [[the|el]] [[sea|mar]].',
                                        'swimming'),
                                    ('[[My|Mi]] [[birthday|cumpleaños]] [[is|es]] ______ [[July|julio]].', 'in'),
                                    ('______, [[he|él]] [[has|desayuna]] [[breakfast|el desayuno]].', 'First'),
                                    ('[[Do|Te gustan]] [[you|tú]] ______ [[eggs|los huevos]]?', 'like')],
            'learning_outcomes': [   'Review all Module 2 topics: time, days, routines, food, hobbies, dates',
                                     'Combine vocabulary and grammar from units 11–19',
                                     'Produce extended descriptions of daily life'],
            'module': 2,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('At six thirty', 'A las seis y media'),
                                                        ("At seven o'clock", 'A las siete en punto'),
                                                        ('At seven thirty', 'A las siete y media')],
                                         'question_en': '[[What|A qué]] [[time|hora]] [[does|se despierta]] [[the|el]] '
                                                        '[[speaker|hablante]] [[wake|despierta]] [[up|arriba]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ("Eight o'clock", 'Las ocho en punto'),
                                                        ('Eight thirty', 'Las ocho y media'),
                                                        ("Nine o'clock", 'Las nueve en punto')],
                                         'question_en': '[[What|A qué]] [[time|hora]] [[does|va]] [[the|el]] '
                                                        '[[speaker|hablante]] [[go|va]] [[to|al]] [[work|trabajo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ("Twelve o'clock", 'Las doce en punto'),
                                                        ("One o'clock", 'La una en punto'),
                                                        ("Two o'clock", 'Las dos en punto')],
                                         'question_en': '[[What|A qué]] [[time|hora]] [[does|almuerza]] [[the|el]] '
                                                        '[[speaker|hablante]] [[have|tiene]] [[lunch|almuerzo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Rice or pasta', 'Arroz o pasta'),
                                                        ('Salad or sandwich', 'Ensalada o sándwich'),
                                                        ('Soup or bread', 'Sopa o pan')],
                                         'question_en': '[[What|Qué]] [[does|come]] [[the|el]] [[speaker|hablante]] '
                                                        '[[eat|come]] [[for|de]] [[lunch|almuerzo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ("don't + verb", "don't + verbo"),
                                                        ("doesn't + verb", "doesn't + verbo"),
                                                        ("isn't + verb", "isn't + verbo")],
                                         'question_en': '[[Which|Cuál]] [[grammar|gramática]] [[structure|estructura]] '
                                                        '[[is|es]] [[used|usa]] [[for|para]] [[negatives|negativos]] '
                                                        "[[with|con]] 'she/he'?"},
                                     {   'correct_idx': 2,
                                         'options': [('on', 'on'), ('at', 'at'), ('in', 'in')],
                                         'question_en': '[[Which|Cuál]] [[preposition|preposición]] [[goes|va]] '
                                                        '[[with|con]] [[months|meses]] [[in|en]] [[English|inglés]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Then', 'Luego'),
                                                        ('After that', 'Después de eso'),
                                                        ('First', 'Primero')],
                                         'question_en': '[[What|Qué]] [[sequence|secuencia]] [[adverb|adverbio]] '
                                                        '[[comes|viene]] [[first|primero]] [[in|en]] [[a|una]] '
                                                        '[[routine|rutina]]?'},
                                     {   'correct_idx': 0,
                                         'options': [   ('I like + noun/-ing', 'I like + nombre/-ing'),
                                                        ('I is liking + noun', 'Incorrecto'),
                                                        ('I enjoy to + verb', 'I enjoy to + verbo')],
                                         'question_en': '[[How|Cómo]] [[do|dices]] [[you|tú]] [[say|dices]] [[you|tú]] '
                                                        '[[enjoy|disfrutas]] [[something|algo]] [[in|en]] '
                                                        '[[English|inglés]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('eight past half', 'Incorrecto'),
                                                        ('half past eight', 'Las ocho y media'),
                                                        ('eight and half', 'Incorrecto')],
                                         'question_en': "[[What|Cómo]] [[is|se dice]] 'las ocho y media' [[in|en]] "
                                                        '[[English|inglés]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Sunday', 'Domingo'),
                                                        ('Monday', 'Lunes'),
                                                        ('Saturday', 'Sábado')],
                                         'question_en': '[[Which|Cuál]] [[day|día]] [[comes|viene]] [[after|después '
                                                        'de]] [[Friday|viernes]]?'}],
            'title': 'Module 2 Review & Assessment',
            'vocab': [   ('Routine', 'Rutina'),
                         ('Schedule', 'Horario'),
                         ('Habit', 'Hábito'),
                         ('Preference', 'Preferencia'),
                         ('Appointment', 'Cita'),
                         ('Half past', 'Y media'),
                         ('Weekday', 'Día de semana'),
                         ('Frequency', 'Frecuencia'),
                         ('Ordinal number', 'Número ordinal'),
                         ('Sequence', 'Secuencia'),
                         ('Leisure', 'Ocio'),
                         ('Timetable', 'Horario de clases'),
                         ('Date', 'Fecha'),
                         ('Month', 'Mes')]},
    21: {   'dialogue_lines': [   '[[Tell|Cuéntame]] [[me|me]] [[about|sobre]] [[your|tu]] [[house|casa]]. '
                                  '[[What|Qué]] [[rooms|habitaciones]] [[does|tiene]] [[it|ella]] [[have|tiene]]?',
                                  '[[We|Nosotros]] [[have|tenemos]] [[a|un]] [[large|grande]] [[living room|salón]], '
                                  '[[a|una]] [[kitchen|cocina]], [[three|tres]] [[bedrooms|dormitorios]] [[and|y]] '
                                  '[[two|dos]] [[bathrooms|baños]].',
                                  "[[Oh|Oh]], [[that's|eso es]] [[spacious|amplio]]! [[Is|Hay]] [[there|allí]] "
                                  '[[a|un]] [[garden|jardín]]?',
                                  '[[Yes|Sí]]! [[We|Nosotros]] [[have|tenemos]] [[a|un]] [[small|pequeño]] '
                                  '[[garden|jardín]] [[with|con]] [[flowers|flores]] [[and|y]] [[a|un]] [[table|mesa]] '
                                  '[[outside|afuera]].',
                                  '[[My|Mi]] [[favourite|favorita]] [[room|habitación]] [[is|es]] [[the|el]] [[living '
                                  "room|salón]] — [[it's|es]] [[so|tan]] [[bright|luminoso]] [[and|y]] "
                                  '[[cozy|acogedor]]!'],
            'grammar_patterns': [   (   '[[The|La]] [[kitchen|cocina]] [[is|es]] ______ [[and|y]] [[modern|moderna]].',
                                        'bright'),
                                    ('[[We|Nosotros]] [[have|tenemos]] ______ [[bedrooms|dormitorios]].', 'three'),
                                    ('[[The|El]] [[living room|salón]] [[is|es]] [[very|muy]] ______.', 'cozy'),
                                    (   '[[My|Mi]] [[bedroom|dormitorio]] ______ [[a|una]] [[big|gran]] '
                                        '[[balcony|terraza]].',
                                        'has'),
                                    (   '[[The|El]] [[bathroom|baño]] ______ [[small|pequeño]] [[but|pero]] '
                                        '[[clean|limpio]].',
                                        'is'),
                                    (   '[[How|Cuántos]] [[many|muchos]] [[rooms|habitaciones]] ______ [[your|tu]] '
                                        '[[house|casa]] [[have|tiene]]?',
                                        'does')],
            'learning_outcomes': [   'Name the rooms of a house in English',
                                     'Describe rooms using adjectives',
                                     'Use plural nouns correctly in context'],
            'module': 3,
            'reading_questions': [   {   'correct_idx': 2,
                                         'options': [('Two', 'Dos'), ('Four', 'Cuatro'), ('Three', 'Tres')],
                                         'question_en': '[[How|Cuántos]] [[many|muchos]] [[bedrooms|dormitorios]] '
                                                        '[[does|tiene]] [[the|la]] [[house|casa]] [[have|tiene]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('One', 'Uno'), ('Three', 'Tres'), ('Two', 'Dos')],
                                         'question_en': '[[How|Cuántos]] [[many|muchos]] [[bathrooms|baños]] '
                                                        '[[does|tiene]] [[the|la]] [[house|casa]] [[have|tiene]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('No', 'No'),
                                                        ('Yes, a large one', 'Sí, uno grande'),
                                                        ('Yes, a small one', 'Sí, uno pequeño')],
                                         'question_en': '[[Is|Tiene]] [[the|la]] [[house|casa]] [[there|hay]] [[a|un]] '
                                                        '[[garden|jardín]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('A swimming pool', 'Una piscina'),
                                                        ('Flowers and a table', 'Flores y una mesa'),
                                                        ('Trees and grass', 'Árboles y césped')],
                                         'question_en': '[[What|Qué]] [[is|hay]] [[in|en]] [[the|el]] '
                                                        '[[garden|jardín]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('The kitchen', 'La cocina'),
                                                        ('The bedroom', 'El dormitorio'),
                                                        ('The living room', 'El salón')],
                                         'question_en': "[[What|Cuál]] [[is|es]] [[the|la]] [[speaker's|del hablante]] "
                                                        '[[favourite|favorita]] [[room|habitación]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Dark and small', 'Oscuro y pequeño'),
                                                        ('Bright and cozy', 'Luminoso y acogedor'),
                                                        ('Large and modern', 'Grande y moderno')],
                                         'question_en': '[[How|Cómo]] [[is|es]] [[the|el]] [[living room|salón]] '
                                                        '[[described|descrito]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Living room', 'Salón'),
                                                        ('Kitchen', 'Cocina'),
                                                        ('Bedroom', 'Dormitorio')],
                                         'question_en': '[[What|Qué]] [[word|palabra]] [[means|significa]] '
                                                        "'Dormitorio'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Large', 'Grande'),
                                                        ('Cozy/Comfortable', 'Acogedor'),
                                                        ('Bright', 'Luminoso')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Cozy' [[mean|significa]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('A large garden', 'Un jardín grande'),
                                                        ('A small outdoor platform', 'Una plataforma exterior pequeña'),
                                                        ('A type of kitchen', 'Un tipo de cocina')],
                                         'question_en': "[[What|Qué]] [[is|es]] [[a|un]] 'Balcony'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Cozy', 'Acogedor'),
                                                        ('Spacious', 'Amplio'),
                                                        ('Bright', 'Luminoso')],
                                         'question_en': '[[Which|Cuál]] [[adjective|adjetivo]] [[describes|describe]] '
                                                        '[[a|una]] [[room|habitación]] [[with|con]] [[lots|mucha]] '
                                                        '[[of|de]] [[light|luz]]?'}],
            'title': 'Rooms in a House',
            'vocab': [   ('Kitchen', 'Cocina'),
                         ('Living room', 'Salón'),
                         ('Bedroom', 'Dormitorio'),
                         ('Bathroom', 'Baño'),
                         ('Garden', 'Jardín'),
                         ('Hall', 'Pasillo/Recibidor'),
                         ('Dining room', 'Comedor'),
                         ('Garage', 'Garaje'),
                         ('Balcony', 'Balcón'),
                         ('Stairs', 'Escaleras'),
                         ('Bright', 'Luminoso/a'),
                         ('Small', 'Pequeño/a'),
                         ('Cozy', 'Acogedor/a'),
                         ('Spacious', 'Amplio/a')]},
    22: {   'dialogue_lines': [   '[[I|Yo]] [[love|me encanta]] [[your|tu]] [[flat|piso]]! [[Is|Es]] [[that|ese]] '
                                  '[[sofa|sofá]] [[new|nuevo]]?',
                                  '[[Yes|Sí]]! [[I|Yo]] [[bought|compré]] [[it|lo]] [[last|el]] [[month|mes]] '
                                  "[[past|pasado]]. [[It's|Es]] [[very|muy]] [[comfortable|cómodo]].",
                                  '[[And|Y]] [[what|qué]] [[about|sobre]] [[that|esa]] [[lamp|lámpara]]? [[Is|Es]] '
                                  '[[it|es]] [[yours|tuya]]?',
                                  '[[No|No]], [[that|esa]] [[lamp|lámpara]] [[is|es]] [[my|de mi]] '
                                  "[[flatmate's|compañera de piso]].",
                                  '[[The|El]] [[carpet|alfombra]] [[and|y]] [[the|las]] [[curtains|cortinas]] '
                                  '[[are|son]] [[mine|mías]], [[though|sin embargo]]. [[I|Yo]] [[chose|elegí]] '
                                  '[[them|ellos]] [[myself|yo misma]].'],
            'grammar_patterns': [   ('[[That|Ese]] [[sofa|sofá]] [[is|es]] ______.', 'mine'),
                                    ('[[The|La]] [[red|roja]] [[lamp|lámpara]] [[is|es]] ______.', 'yours'),
                                    ('[[Whose|De quién]] [[is|es]] [[this|esta]] ______?', 'chair'),
                                    (   "[[It's|Es]] [[his|su]] [[bed|cama]]. [[The|La]] [[blue|azul]] [[one|una]] "
                                        '[[is|es]] ______.',
                                        'hers'),
                                    (   '[[The|La]] [[wardrobe|armario]] [[in|en]] [[my|mi]] [[bedroom|dormitorio]] '
                                        '______ [[very|muy]] [[old|viejo]].',
                                        'is'),
                                    (   '[[We|Nosotros]] [[have|tenemos]] [[a|una]] [[big|grande]] ______ [[in|en]] '
                                        '[[the|la]] [[kitchen|cocina]].',
                                        'fridge')],
            'learning_outcomes': [   'Name furniture and household items in English',
                                     'Use possessive pronouns: mine, yours, his, hers',
                                     'Describe objects in the home'],
            'module': 3,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ("No, it's old", 'No, es viejo'),
                                                        ("Yes, it's new", 'Sí, es nuevo'),
                                                        ("It's second-hand", 'Es de segunda mano')],
                                         'question_en': '[[Is|Es]] [[the|el]] [[sofa|sofá]] [[new|nuevo]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Last week', 'La semana pasada'),
                                                        ('Last year', 'El año pasado'),
                                                        ('Last month', 'El mes pasado')],
                                         'question_en': '[[When|Cuándo]] [[was|fue]] [[the|el]] [[sofa|sofá]] '
                                                        '[[bought|comprado]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ("The speaker's", 'Del hablante'),
                                                        ("The flatmate's", 'De la compañera de piso'),
                                                        ('It belongs to both', 'Pertenece a ambas')],
                                         'question_en': '[[Whose|De quién]] [[is|es]] [[the|la]] [[lamp|lámpara]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('The sofa and lamp', 'El sofá y la lámpara'),
                                                        ('The carpet and curtains', 'La alfombra y las cortinas'),
                                                        ('The table and chairs', 'La mesa y las sillas')],
                                         'question_en': '[[What|Qué]] [[belongs|pertenece]] [[to|al]] [[the|al]] '
                                                        '[[speaker|hablante]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Yours', 'Tuyo/a'), ('His/Hers', 'Suyo/a'), ('Mine', 'Mío/a')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Mine' [[mean|significa]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Mine', 'Mío/a'),
                                                        ('Yours', 'Tuyo/a'),
                                                        ('Theirs', 'Suyo/a (de ellos)')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Yours' [[mean|significa]]?"},
                                     {   'correct_idx': 1,
                                         'options': [('Chair', 'Silla'), ('Sofa', 'Sofá'), ('Bed', 'Cama')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Sofá'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('A type of bed', 'Un tipo de cama'),
                                                        ('A large cupboard for clothes', 'Un armario grande para ropa'),
                                                        ('A kitchen appliance', 'Un electrodoméstico de cocina')],
                                         'question_en': "[[What|Qué]] [[is|es]] [[a|un]] 'Wardrobe'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Wardrobe', 'Armario'),
                                                        ('Washing machine', 'Lavadora'),
                                                        ('Fridge', 'Nevera')],
                                         'question_en': '[[Which|Cuál]] [[item|artículo]] [[is|se usa]] [[used|usa]] '
                                                        '[[to|para]] [[cool|enfriar]] [[food|los alimentos]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Expensive', 'Caro'),
                                                        ('Comfortable', 'Cómodo'),
                                                        ('Old', 'Viejo')],
                                         'question_en': '[[How|Cómo]] [[is|describe]] [[the|el]] [[speaker|hablante]] '
                                                        '[[the|el]] [[sofa|sofá]]?'}],
            'title': 'Furniture & Household Items',
            'vocab': [   ('Bed', 'Cama'),
                         ('Sofa', 'Sofá'),
                         ('Table', 'Mesa'),
                         ('Chair', 'Silla'),
                         ('Fridge', 'Nevera'),
                         ('Wardrobe', 'Armario'),
                         ('Shelf', 'Estantería'),
                         ('Lamp', 'Lámpara'),
                         ('Mirror', 'Espejo'),
                         ('Carpet', 'Alfombra'),
                         ('Curtains', 'Cortinas'),
                         ('Washing machine', 'Lavadora'),
                         ('Mine', 'Mío/a'),
                         ('Yours', 'Tuyo/a')]},
    23: {   'dialogue_lines': [   '[[Excuse|Disculpe]], [[is|hay]] [[there|allí]] [[a|una]] [[bank|banco]] '
                                  '[[near|cerca]] [[here|aquí]]?',
                                  '[[Yes|Sí]], [[there|hay]] [[is|hay]] [[one|uno]] [[on|en]] [[the|la]] '
                                  "[[main|principal]] [[street|calle]]. [[It's|Está]] [[next|al]] [[to|lado]] "
                                  '[[the|de]] [[supermarket|supermercado]].',
                                  '[[Are|Hay]] [[there|allí]] [[any|algún]] [[ATMs|cajeros]] [[inside|dentro]]?',
                                  '[[Yes|Sí]], [[there|hay]] [[are|hay]] [[two|dos]] [[ATMs|cajeros]] '
                                  '[[inside|dentro]] [[and|y]] [[one|uno]] [[outside|fuera]].',
                                  '[[Is|Hay]] [[there|allí]] [[a|un]] [[café|café]] [[nearby|cerca]]? [[There|Hay]] '
                                  "[[isn't|no]] [[one|uno]] [[on|en]] [[my|mi]] [[street|calle]]."],
            'grammar_patterns': [   ('______ [[a|un]] [[book|libro]] [[on|en]] [[the|la]] [[table|mesa]].', 'There is'),
                                    (   '______ [[three|tres]] [[chairs|sillas]] [[in|en]] [[the|la]] '
                                        '[[room|habitación]].',
                                        'There are'),
                                    (   "[[There|Hay]] [[isn't|no]] ______ [[TV|televisión]] [[in|en]] [[the|el]] "
                                        '[[bedroom|dormitorio]].',
                                        'a'),
                                    (   "[[There|Hay]] [[aren't|no]] ______ [[windows|ventanas]] [[in|en]] [[the|el]] "
                                        '[[bathroom|baño]].',
                                        'any'),
                                    (   '______ [[a|un]] [[garden|jardín]] [[in|en]] [[your|tu]] [[house|casa]]?',
                                        'Is there'),
                                    (   '[[Are|Hay]] [[there|allí]] ______ [[students|estudiantes]] [[in|en]] '
                                        '[[the|la]] [[class|clase]]?',
                                        'any')],
            'learning_outcomes': [   "Use 'there is/are' in affirmative, negative, and questions",
                                     'Use prepositions of place: in, on, under, behind',
                                     'Describe locations of objects'],
            'module': 3,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('No', 'No'),
                                                        ('Yes, on the main street', 'Sí, en la calle principal'),
                                                        ('Yes, far away', 'Sí, lejos')],
                                         'question_en': '[[Is|Hay]] [[there|allí]] [[a|un]] [[bank|banco]] '
                                                        '[[near|cerca]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Next to the park', 'Al lado del parque'),
                                                        ('Next to the supermarket', 'Al lado del supermercado'),
                                                        ('Behind the library', 'Detrás de la biblioteca')],
                                         'question_en': '[[Where|Dónde]] [[is|está]] [[the|el]] [[bank|banco]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('One', 'Uno'), ('Three', 'Tres'), ('Two', 'Dos')],
                                         'question_en': '[[How|Cuántos]] [[many|muchos]] [[ATMs|cajeros]] [[are|hay]] '
                                                        '[[inside|dentro]] [[the|el]] [[bank|banco]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('No', 'No'), ('Yes, one', 'Sí, uno'), ('Yes, two', 'Sí, dos')],
                                         'question_en': '[[Are|Hay]] [[there|allí]] [[any|algún]] [[ATMs|cajero]] '
                                                        '[[outside|fuera]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('There are', 'Hay (plural)'),
                                                        ('There is', 'Hay (singular)'),
                                                        ('There have', 'Incorrecto')],
                                         'question_en': '[[Which|Cuál]] [[is|es]] [[the|la]] [[correct|correcta]] '
                                                        '[[form|forma]] [[for|para]] [[singular|singular]]?'},
                                     {   'correct_idx': 0,
                                         'options': [   ("There isn't a cat", 'No hay un gato'),
                                                        ("There aren't a cat", 'Incorrecto'),
                                                        ('There is no cat', 'Ambas correctas')],
                                         'question_en': '[[What|Qué]] [[is|es]] [[the|la]] [[negative|negativa]] '
                                                        "[[of|de]] 'There is a cat'?"},
                                     {   'correct_idx': 2,
                                         'options': [('Behind', 'Detrás de'), ('On', 'Sobre'), ('Under', 'Debajo de')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Debajo "
                                                        "de'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Is there...?', '¿Hay? (singular)'),
                                                        ('Are there...?', '¿Hay? (plural)'),
                                                        ('Has there...?', 'Incorrecto')],
                                         'question_en': '[[Which|Cuál]] [[question|pregunta]] [[asks|pregunta]] '
                                                        '[[about|sobre]] [[plural|plurales]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('In front of', 'Delante de'),
                                                        ('Between', 'Entre'),
                                                        ('Next to', 'Al lado de')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Next to' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('In front of', 'Delante de'),
                                                        ('Behind', 'Detrás de'),
                                                        ('Between', 'Entre')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Behind' "
                                                        '[[mean|significa]]?'}],
            'title': 'There is / There are',
            'vocab': [   ('There is', 'Hay (sing.)'),
                         ('There are', 'Hay (pl.)'),
                         ("There isn't", 'No hay (sing.)'),
                         ("There aren't", 'No hay (pl.)'),
                         ('Is there', '¿Hay? (sing.)'),
                         ('Are there', '¿Hay? (pl.)'),
                         ('In', 'En (interior)'),
                         ('On', 'En/Sobre (superficie)'),
                         ('Under', 'Debajo de'),
                         ('Behind', 'Detrás de'),
                         ('In front of', 'Delante de'),
                         ('Next to', 'Al lado de'),
                         ('Between', 'Entre'),
                         ('A lot of', 'Muchos/as')]},
    24: {   'dialogue_lines': [   "[[I|Yo]] [[can't|no puedo]] [[find|encontrar]] [[my|mi]] [[keys|llaves]]. "
                                  '[[Can|Puedes]] [[you|tú]] [[help|ayudarme]] [[me|me]]?',
                                  '[[Where|Dónde]] [[did|las dejaste]] [[you|tú]] [[leave|dejaste]] [[them|ellas]] '
                                  '[[last|última]] [[night|noche]]?',
                                  '[[I|Yo]] [[think|creo]] [[they|ellas]] [[are|están]] [[on|en]] [[the|la]] '
                                  '[[table|mesa]] [[next|al]] [[to|lado de]] [[the|la]] [[door|puerta]].',
                                  "[[No|No]], [[they're|están]] [[not|no]] [[there|allí]]. [[Oh|Oh]]! "
                                  "[[They're|Están]] [[between|entre]] [[the|los]] [[sofa|sofá]] [[cushions|cojines]]!",
                                  '[[Thank|Gracias]] [[you|gracias]]! [[I|Yo]] [[always|siempre]] [[lose|pierdo]] '
                                  '[[things|cosas]] [[in|en]] [[front|delante]] [[of|de]] [[my|mis]] [[eyes|ojos]]!'],
            'grammar_patterns': [   (   '[[The|El]] [[post office|correos]] [[is|está]] ______ [[the|el]] '
                                        '[[bank|banco]] [[and|y]] [[the|la]] [[pharmacy|farmacia]].',
                                        'between'),
                                    (   '[[The|La]] [[school|escuela]] [[is|está]] ______ [[the|al]] [[park|parque]].',
                                        'opposite'),
                                    (   '[[The|La]] [[lamp|lámpara]] [[is|está]] ______ [[the|la]] [[table|mesa]].',
                                        'above'),
                                    ('[[The|El]] [[cat|gato]] [[is|está]] ______ [[the|la]] [[sofa|sofá]].', 'next to'),
                                    (   '[[Is|Está]] [[the|la]] [[library|biblioteca]] [[far|lejos]] ______ '
                                        '[[here|aquí]]?',
                                        'from'),
                                    (   '[[The|El]] [[book|libro]] [[is|está]] [[on|en]] [[the|la]] [[floor|el '
                                        'suelo]], ______ [[the|la]] [[table|mesa]].',
                                        'below')],
            'learning_outcomes': [   'Use advanced prepositions of place: next to, between, opposite, above',
                                     'Describe the location of objects and places',
                                     'Combine there is/are with complex prepositions'],
            'module': 3,
            'reading_questions': [   {   'correct_idx': 2,
                                         'options': [('Phone', 'Teléfono'), ('Glasses', 'Gafas'), ('Keys', 'Llaves')],
                                         'question_en': '[[What|Qué]] [[is|está]] [[the|el]] [[speaker|hablante]] '
                                                        '[[looking|buscando]] [[for|buscando]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('On the floor', 'En el suelo'),
                                                        (   'On the table next to the door',
                                                            'En la mesa al lado de la puerta'),
                                                        ('In the pocket', 'En el bolsillo')],
                                         'question_en': '[[Where|Dónde]] [[does|cree]] [[the|el]] [[speaker|hablante]] '
                                                        '[[think|cree]] [[the|las]] [[keys|llaves]] [[are|están]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Under the sofa', 'Debajo del sofá'),
                                                        ('Between the sofa cushions', 'Entre los cojines del sofá'),
                                                        ('Behind the door', 'Detrás de la puerta')],
                                         'question_en': '[[Where|Dónde]] [[are|están]] [[the|las]] [[keys|llaves]] '
                                                        '[[actually|realmente]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Next to', 'Al lado de'),
                                                        ('Between', 'Entre'),
                                                        ('In front of', 'Delante de')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Between' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Far from', 'Lejos de'),
                                                        ('Above', 'Encima de'),
                                                        ('Next to', 'Al lado de')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Next to' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 0,
                                         'options': [   ('Facing', 'Frente a'),
                                                        ('Next to', 'Al lado de'),
                                                        ('Behind', 'Detrás de')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Opposite' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Below', 'Debajo de'),
                                                        ('Above', 'Encima de'),
                                                        ('Near', 'Cerca de')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Above' [[mean|significa]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Far from', 'Lejos de'),
                                                        ('Near', 'Cerca de'),
                                                        ('Opposite', 'Frente a')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Near' [[mean|significa]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Behind', 'Detrás de'),
                                                        ('In front of', 'Delante de'),
                                                        ('Between', 'Entre')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'In front of' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Near', 'Cerca de'),
                                                        ('Far from', 'Lejos de'),
                                                        ('Above', 'Encima de')],
                                         'question_en': '[[Which|Cuál]] [[preposition|preposición]] '
                                                        "[[means|significa]] 'Lejos de'?"}],
            'title': 'Prepositions of Place',
            'vocab': [   ('Next to', 'Al lado de'),
                         ('Between', 'Entre'),
                         ('In front of', 'Delante de'),
                         ('Opposite', 'Frente a'),
                         ('Above', 'Encima de'),
                         ('Below', 'Debajo de'),
                         ('Near', 'Cerca de'),
                         ('Far from', 'Lejos de'),
                         ('Corner', 'Esquina'),
                         ('Wall', 'Pared'),
                         ('Floor', 'Suelo'),
                         ('Right', 'Derecha'),
                         ('Left', 'Izquierda'),
                         ('Centre', 'Centro')]},
    25: {   'dialogue_lines': [   "[[What's|Cómo es]] [[your|tu]] [[neighborhood|barrio]] [[like|como]]?",
                                  "[[It's|Es]] [[really|muy]] [[convenient|conveniente]]! [[There|Hay]] [[is|hay]] "
                                  '[[a|un]] [[supermarket|supermercado]], [[a|una]] [[pharmacy|farmacia]] [[and|y]] '
                                  '[[a|un]] [[park|parque]] [[nearby|cerca]].',
                                  '[[Is|Hay]] [[there|allí]] [[a|un]] [[cinema|cine]]?',
                                  "[[No|No]], [[there|hay]] [[isn't|no hay]] [[a|un]] [[cinema|cine]] [[in|en]] "
                                  "[[my|mi]] [[neighborhood|barrio]], [[but|pero]] [[there's|hay]] [[a|un]] "
                                  '[[great|estupendo]] [[library|biblioteca]] [[where|donde]] [[I|yo]] [[go|voy]] '
                                  '[[often|a menudo]].',
                                  "[[That's|Es]] [[good|bueno]]! [[Is|Está]] [[it|está]] [[far|lejos]] [[from|de]] "
                                  '[[your|tu]] [[house|casa]]?'],
            'grammar_patterns': [   (   '[[There|Hay]] [[is|hay]] ______ [[park|parque]] [[near|cerca de]] [[my|mi]] '
                                        '[[house|casa]].',
                                        'a'),
                                    (   '[[There|Hay]] [[are|hay]] ______ [[restaurants|restaurantes]] [[on|en]] '
                                        '[[this|esta]] [[street|calle]].',
                                        'some'),
                                    ('[[Is|Hay]] [[there|allí]] ______ [[pharmacy|farmacia]] [[nearby|cerca]]?', 'a'),
                                    (   "[[There|Hay]] [[aren't|no]] ______ [[cinemas|cines]] [[in|en]] [[my|mi]] "
                                        '[[neighborhood|barrio]].',
                                        'any'),
                                    (   '[[The|La]] [[library|biblioteca]] [[is|está]] [[on|en]] ______ '
                                        '[[main|principal]] [[street|calle]].',
                                        'the'),
                                    (   '[[I|Yo]] [[go|voy]] [[to|a]] ______ [[park|parque]] [[every|cada]] '
                                        '[[weekend|fin de semana]].',
                                        'the')],
            'learning_outcomes': [   'Name places in a neighborhood',
                                     "Use 'there is/are' with articles (a/the) and quantifiers (some/any)",
                                     'Describe your local area'],
            'module': 3,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Cinema and park', 'Cine y parque'),
                                                        (   'Supermarket, pharmacy and park',
                                                            'Supermercado, farmacia y parque'),
                                                        ('Hospital and school', 'Hospital y escuela')],
                                         'question_en': "[[What|Qué]] [[is|hay]] [[in|en]] [[the|el]] [[speaker's|del "
                                                        'hablante]] [[neighborhood|barrio]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('Yes', 'Sí'), ('No', 'No'), ('There are two', 'Hay dos')],
                                         'question_en': '[[Is|Hay]] [[there|allí]] [[a|un]] [[cinema|cine]] [[in|en]] '
                                                        '[[the|el]] [[neighborhood|barrio]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('To work', 'Para trabajar'),
                                                        ('Often/regularly', 'A menudo'),
                                                        ('Only on weekends', 'Solo los fines de semana')],
                                         'question_en': '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] '
                                                        '[[go|va]] [[to|a]] [[the|la]] [[library|biblioteca]] '
                                                        '[[for|para]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('a', 'un/una'), ('an', 'un/una (vocal)'), ('the', 'el/la')],
                                         'question_en': '[[Which|Cuál]] [[article|artículo]] [[goes|va]] '
                                                        '[[before|antes de]] [[a|un]] [[specific|específico]] '
                                                        '[[known|conocido]] [[place|lugar]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('some', 'algún/algunos'),
                                                        ('any', 'algún/ningún'),
                                                        ('a', 'un/una')],
                                         'question_en': '[[Which|Cuál]] [[word|palabra]] [[is|se usa]] [[used|usa]] '
                                                        '[[in|en]] [[negative|negativas]] [[and|y]] '
                                                        '[[questions|preguntas]] [[with|con]] [[places|lugares]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Restaurant', 'Restaurante'),
                                                        ('Bakery', 'Panadería'),
                                                        ('Pharmacy', 'Farmacia')],
                                         'question_en': '[[What|Qué]] [[word|palabra]] [[means|significa]] '
                                                        "'Panadería'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('A food shop', 'Una tienda de comida'),
                                                        ('A medicine shop', 'Una farmacia'),
                                                        ('A library', 'Una biblioteca')],
                                         'question_en': "[[What|Qué]] [[is|es]] [[a|una]] 'Pharmacy'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Far away', 'Lejos'),
                                                        ('Easy to use/access', 'Conveniente'),
                                                        ('Expensive', 'Caro')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Convenient' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('City centre', 'Centro de la ciudad'),
                                                        ('Local area/barrio', 'Barrio'),
                                                        ('Country', 'País')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Neighborhood' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Next to the park', 'Al lado del parque'),
                                                        ('On the main street', 'En la calle principal'),
                                                        (   "Far from the speaker's house",
                                                            'Lejos de la casa del hablante')],
                                         'question_en': '[[Where|Dónde]] [[is|está]] [[the|la]] '
                                                        '[[library|biblioteca]]?'}],
            'title': 'My Neighborhood',
            'vocab': [   ('Park', 'Parque'),
                         ('Supermarket', 'Supermercado'),
                         ('Cinema', 'Cine'),
                         ('Library', 'Biblioteca'),
                         ('Pharmacy', 'Farmacia'),
                         ('Hospital', 'Hospital'),
                         ('School', 'Escuela'),
                         ('Bank', 'Banco'),
                         ('Post office', 'Correos'),
                         ('Restaurant', 'Restaurante'),
                         ('Bakery', 'Panadería'),
                         ('Bus stop', 'Parada de autobús'),
                         ('Street', 'Calle'),
                         ('Neighborhood', 'Barrio')]},
    26: {   'dialogue_lines': [   '[[Excuse|Disculpe]], [[how|cómo]] [[do|llego]] [[I|yo]] [[get|llego]] [[to|a]] '
                                  '[[the|la]] [[train|tren]] [[station|estación]]?',
                                  '[[Go|Ve]] [[straight|recto]] [[for|por]] [[two|dos]] [[minutes|minutos]], '
                                  '[[then|luego]] [[turn|gira]] [[left|a la izquierda]] [[at|en]] [[the|el]] [[traffic '
                                  'lights|semáforo]].',
                                  '[[Then|Después]], [[take|toma]] [[the|la]] [[second|segunda]] [[street|calle]] '
                                  '[[on|a]] [[the|la]] [[right|derecha]].',
                                  '[[The|La]] [[station|estación]] [[is|está]] [[at|en]] [[the|el]] [[end|final]] '
                                  '[[of|de]] [[that|esa]] [[road|calle]], [[on|a]] [[the|la]] [[left|izquierda]].',
                                  '[[Is|Está]] [[it|está]] [[far|lejos]]? [[Can|Puedo]] [[I|yo]] [[walk|ir]] '
                                  '[[there|allí]]?'],
            'grammar_patterns': [   (   '______ [[straight|recto]] [[for|durante]] [[two|dos]] [[minutes|minutos]].',
                                        'Go'),
                                    (   '______ [[left|a la izquierda]] [[at|en]] [[the|el]] [[traffic '
                                        'lights|semáforo]].',
                                        'Turn'),
                                    (   '[[Take|Toma]] [[the|la]] ______ [[on|a]] [[the|la]] [[right|derecha]].',
                                        'first street'),
                                    (   '[[Go|Ve]] [[past|por delante de]] [[the|el]] ______ [[and|y]] [[then|luego]] '
                                        '[[turn|gira]] [[right|a la derecha]].',
                                        'bank'),
                                    ('[[Is|Está]] [[it|está]] ______ [[from|de]] [[here|aquí]]?', 'far'),
                                    (   '[[The|La]] [[station|estación]] [[is|está]] [[on|a]] [[the|la]] ______ '
                                        '[[at|en]] [[the|el]] [[end|final]] [[of|de]] [[the|la]] [[road|calle]].',
                                        'right')],
            'learning_outcomes': [   'Give and follow directions in English',
                                     'Use imperative form for instructions: turn, go, take',
                                     'Describe routes using prepositions and directional language'],
            'module': 3,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Bus station', 'Estación de autobús'),
                                                        ('Train station', 'Estación de tren'),
                                                        ('Airport', 'Aeropuerto')],
                                         'question_en': '[[What|A qué]] [[transport|transporte]] [[does|quiere]] '
                                                        '[[the|el]] [[speaker|hablante]] [[want|quiere]] [[to|ir]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('One', 'Uno'), ('Three', 'Tres'), ('Two', 'Dos')],
                                         'question_en': '[[How|Cuántos]] [[many|cuántos]] [[minutes|minutos]] '
                                                        '[[does|tiene]] [[the|el]] [[speaker|hablante]] '
                                                        '[[walk|caminar]] [[straight|recto]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('At the crossroads', 'En el cruce'),
                                                        ('At the bridge', 'En el puente'),
                                                        ('At the traffic lights', 'En el semáforo')],
                                         'question_en': '[[Where|Dónde]] [[does|gira]] [[the|el]] [[speaker|hablante]] '
                                                        '[[turn|gira]] [[left|a la izquierda]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('The first', 'La primera'),
                                                        ('The third', 'La tercera'),
                                                        ('The second', 'La segunda')],
                                         'question_en': '[[Which|Cuál]] [[street|calle]] [[does|toma]] [[the|el]] '
                                                        '[[speaker|hablante]] [[take|toma]] [[on|a]] [[the|la]] '
                                                        '[[right|derecha]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('At the start of the road', 'Al principio de la calle'),
                                                        ('In the middle of the road', 'En la mitad de la calle'),
                                                        (   'At the end of the road on the left',
                                                            'Al final de la calle a la izquierda')],
                                         'question_en': '[[Where|Dónde]] [[is|está]] [[the|la]] [[station|estación]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Turn right', 'Girar a la derecha'),
                                                        ('Continue forward without turning', 'Continuar recto'),
                                                        ('Go back', 'Volver atrás')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Go straight' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Go straight', 'Seguir recto'),
                                                        ('Turn right', 'Girar a la derecha'),
                                                        ('Turn left', 'Girar a la izquierda')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Turn left' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Marking speed', 'Marcar velocidad'),
                                                        ('Controlling traffic flow', 'Controlar el flujo de tráfico'),
                                                        ('Giving directions', 'Dar indicaciones')],
                                         'question_en': '[[What|Qué]] [[is|son]] [[traffic lights|los semáforos]] '
                                                        '[[used|usados]] [[for|para]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Before arriving at', 'Antes de llegar a'),
                                                        ('Going by something', 'Pasar por delante de algo'),
                                                        ('Turning at', 'Girando en')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Past' [[mean|significa]] "
                                                        '[[in|en]] [[directions|indicaciones]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Questions', 'Preguntas'),
                                                        ('Past tense', 'Pasado'),
                                                        ('Imperatives', 'Imperativos')],
                                         'question_en': '[[Which|Cuál]] [[grammar|gramática]] [[form|forma]] [[is|se '
                                                        'usa]] [[used|usa]] [[for|para]] [[giving|dar]] '
                                                        '[[directions|indicaciones]]?'}],
            'title': 'Giving Directions',
            'vocab': [   ('Turn left', 'Girar a la izquierda'),
                         ('Turn right', 'Girar a la derecha'),
                         ('Go straight', 'Seguir recto'),
                         ('Past', 'Pasar por delante'),
                         ('At the corner', 'En la esquina'),
                         ('Traffic lights', 'Semáforo'),
                         ('Bridge', 'Puente'),
                         ('Crossroads', 'Cruce'),
                         ('Take the first', 'Tomar la primera'),
                         ('Take the second', 'Tomar la segunda'),
                         ('On the left', 'A la izquierda'),
                         ('On the right', 'A la derecha'),
                         ('Far', 'Lejos'),
                         ('Near', 'Cerca')]},
    27: {   'dialogue_lines': [   '[[Do|Tienes]] [[you|tú]] [[have|tienes]] [[any|alguna]] [[pets|mascotas]]?',
                                  '[[Yes|Sí]]! [[I|Yo]] [[have|tengo]] [[a|un]] [[dog|perro]] [[called|llamado]] '
                                  "[[Buddy|Buddy]]. [[He's|Es]] [[very|muy]] [[friendly|amigable]] [[and|y]] "
                                  '[[loves|le encanta]] [[playing|jugar]].',
                                  '[[What|Qué]] [[breed|raza]] [[is|es]] [[he|él]]?',
                                  "[[He's|Es]] [[a|un]] [[golden|golden]] [[retriever|retriever]]. [[What|Qué]] "
                                  '[[about|sobre]] [[you|tú]]? [[Do|Tienes]] [[you|tú]] [[have|tienes]] [[any|alguna]] '
                                  '[[pets|mascotas]]?',
                                  "[[No|No]], [[I|yo]] [[don't|no]] [[have|tengo]] [[pets|mascotas]], [[but|pero]] "
                                  '[[I|yo]] [[love|me encantan]] [[cats|los gatos]]. [[They|Ellos]] [[are|son]] '
                                  '[[so|tan]] [[cute|monos]]!'],
            'grammar_patterns': [   ('[[My|Mi]] [[dog|perro]] [[is|es]] [[very|muy]] ______.', 'friendly'),
                                    ('[[Lions|Los leones]] [[are|son]] ______ [[animals|animales]].', 'dangerous'),
                                    ('[[Do|Tienes]] [[you|tú]] ______ [[any|alguna]] [[pets|mascota]]?', 'have'),
                                    (   '[[She|Ella]] [[has|tiene]] [[a|un]] [[cute|mono]] ______ [[called|llamado]] '
                                        '[[Max|Max]].',
                                        'rabbit'),
                                    (   '[[My|Mi]] [[cat|gato]] ______ [[a|un]] [[lot|mucho]] [[but|pero]] [[is|es]] '
                                        '[[very|muy]] [[friendly|amigable]].',
                                        'sleeps'),
                                    (   '[[Tigers|Los tigres]] ______ [[in|en]] [[Asia|Asia]] [[and|y]] [[they|ellos]] '
                                        '[[are|son]] [[wild|salvajes]].',
                                        'live')],
            'learning_outcomes': [   'Name common pets and animals in English',
                                     'Use adjectives to describe animals',
                                     'Talk about pets and animal habits'],
            'module': 3,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('A cat', 'Un gato'),
                                                        ('A dog', 'Un perro'),
                                                        ('A rabbit', 'Un conejo')],
                                         'question_en': '[[What|Qué]] [[type|tipo]] [[of|de]] [[pet|mascota]] '
                                                        '[[does|tiene]] [[the|el]] [[speaker|hablante]] '
                                                        '[[have|tiene]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Max', 'Max'), ('Rex', 'Rex'), ('Buddy', 'Buddy')],
                                         'question_en': "[[What|Cuál]] [[is|es]] [[the|el]] [[dog's|del perro]] "
                                                        '[[name|nombre]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Dangerous and wild', 'Peligroso y salvaje'),
                                                        ('Very friendly', 'Muy amigable'),
                                                        ('Quiet and shy', 'Tranquilo y tímido')],
                                         'question_en': '[[How|Cómo]] [[is|es]] [[the|el]] [[dog|perro]] '
                                                        '[[described|descrito]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Labrador', 'Labrador'),
                                                        ('German Shepherd', 'Pastor alemán'),
                                                        ('Golden Retriever', 'Golden Retriever')],
                                         'question_en': '[[What|Cuál]] [[breed|raza]] [[is|es]] [[the|el]] '
                                                        '[[dog|perro]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Yes, a cat', 'Sí, un gato'),
                                                        ('No, but they love cats', 'No, pero le encantan los gatos'),
                                                        ('Yes, a dog too', 'Sí, también un perro')],
                                         'question_en': '[[Does|Tiene]] [[the|el]] [[other|otro]] [[person|persona]] '
                                                        '[[have|tiene]] [[any|alguna]] [[pets|mascotas]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Dangerous', 'Peligroso'),
                                                        ('Wild', 'Salvaje'),
                                                        ('Friendly', 'Amigable')],
                                         'question_en': '[[What|Qué]] [[word|palabra]] [[means|significa]] '
                                                        "'Amigable'?"},
                                     {   'correct_idx': 1,
                                         'options': [('Cute', 'Mono'), ('Wild', 'Salvaje'), ('Friendly', 'Amigable')],
                                         'question_en': '[[Which|Cuál]] [[word|palabra]] [[means|significa]] '
                                                        "'Salvaje'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Dog and cat', 'Perro y gato'),
                                                        ('Rabbit and hamster', 'Conejo y hámster'),
                                                        ('Lion and tiger', 'León y tigre')],
                                         'question_en': '[[Which|Cuáles]] [[of|de]] [[these|estos]] [[are|son]] '
                                                        '[[wild|salvajes]] [[animals|animales]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Big', 'Grande'),
                                                        ('Cute/Sweet-looking', 'Mono'),
                                                        ('Loud', 'Ruidoso')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Cute' [[mean|significa]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Sleeping', 'Dormir'),
                                                        ('Playing', 'Jugar'),
                                                        ('Barking', 'Ladrar')],
                                         'question_en': '[[What|Qué]] [[does|hace]] [[the|el]] [[dog|perro]] [[love|le '
                                                        'encanta]] [[doing|hacer]]?'}],
            'title': 'Pets & Animals',
            'vocab': [   ('Dog', 'Perro'),
                         ('Cat', 'Gato'),
                         ('Bird', 'Pájaro'),
                         ('Fish', 'Pez'),
                         ('Rabbit', 'Conejo'),
                         ('Hamster', 'Hámster'),
                         ('Horse', 'Caballo'),
                         ('Cow', 'Vaca'),
                         ('Lion', 'León'),
                         ('Tiger', 'Tigre'),
                         ('Dangerous', 'Peligroso/a'),
                         ('Friendly', 'Amigable'),
                         ('Cute', 'Mono/a'),
                         ('Wild', 'Salvaje')]},
    28: {   'dialogue_lines': [   '[[Point|Señala]] [[to|a]] [[your|tu]] [[nose|nariz]] — [[now|ahora]] [[your|tu]] '
                                  '[[left|izquierda]] [[ear|oreja]]!',
                                  '[[This|Este]] [[is|es]] [[a|un]] [[fun|divertido]] [[game|juego]]! [[OK|De '
                                  'acuerdo]], [[now|ahora]] [[touch|toca]] [[your|tu]] [[right|derecha]] '
                                  '[[shoulder|hombro]] [[with|con]] [[your|tu]] [[left|izquierda]] [[hand|mano]].',
                                  "[[Wow|Vaya]], [[that's|eso es]] [[tricky|difícil]]! [[How|Cuántos]] "
                                  '[[many|cuántos]] [[fingers|dedos]] [[do|tienes]] [[you|tú]] [[have|tienes]]?',
                                  '[[Ten|Diez]] [[fingers|dedos]] [[and|y]] [[ten|diez]] [[toes|dedos del pie]]! '
                                  '[[Just|Solo]] [[like|como]] [[everybody|todo el mundo]] [[else|demás]].',
                                  '[[Ha|Ja]]! [[And|Y]] [[how|cuántos]] [[many|cuántos]] [[eyes|ojos]] [[do|tienes]] '
                                  '[[you|tú]] [[have|tienes]]?'],
            'grammar_patterns': [   ('[[I|Yo]] [[have|tengo]] ______ [[eyes|ojos]].', 'two'),
                                    ('[[She|Ella]] [[has|tiene]] [[a|un]] [[long|largo]] ______.', 'neck'),
                                    (   '[[We|Nosotros]] [[have|tenemos]] [[ten|diez]] ______ [[on|en]] [[each|cada]] '
                                        '[[hand|mano]].',
                                        'fingers'),
                                    ('[[My|Mi]] ______ [[hurts|duele]] [[today|hoy]].', 'back'),
                                    (   '[[He|Él]] [[broke|rompió]] [[his|su]] ______ [[while|mientras]] '
                                        '[[playing|jugaba]] [[football|fútbol]].',
                                        'leg'),
                                    (   '[[Can|Puedes]] [[you|tú]] [[touch|tocar]] [[your|tu]] [[nose|nariz]] '
                                        '[[with|con]] [[your|tu]] ______?',
                                        'finger')],
            'learning_outcomes': [   'Name the main body parts in English',
                                     'Use have/has got to describe body parts',
                                     'Follow simple body-related instructions in English'],
            'module': 3,
            'reading_questions': [   {   'correct_idx': 2,
                                         'options': [('Ear', 'Oreja'), ('Shoulder', 'Hombro'), ('Nose', 'Nariz')],
                                         'question_en': '[[What|Qué]] [[body|parte]] [[part|del cuerpo]] [[is|es]] '
                                                        '[[the|la]] [[speaker|hablante]] [[asked|pedida]] [[to|a]] '
                                                        '[[point|señalar]] [[first|primero]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('Right', 'Derecha'), ('Left', 'Izquierda'), ('Both', 'Ambas')],
                                         'question_en': '[[Which|Cuál]] [[ear|oreja]] [[is|es]] [[the|el]] '
                                                        '[[speaker|hablante]] [[asked|pedida]] [[to|a]] '
                                                        '[[point|señalar]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Touching nose with tongue', 'Tocar la nariz con la lengua'),
                                                        (   'Touching right shoulder with left hand',
                                                            'Tocar el hombro derecho con la mano izquierda'),
                                                        (   'Touching toes with fingers',
                                                            'Tocar los dedos del pie con los dedos')],
                                         'question_en': '[[What|Qué]] [[is|es]] [[the|la]] [[tricky|difícil]] '
                                                        '[[task|tarea]] [[in|en]] [[the|la]] '
                                                        '[[conversation|conversación]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Eight', 'Ocho'), ('Twelve', 'Doce'), ('Ten', 'Diez')],
                                         'question_en': '[[How|Cuántos]] [[many|cuántos]] [[fingers|dedos]] '
                                                        '[[does|tiene]] [[a|una]] [[person|persona]] [[have|tiene]]?'},
                                     {   'correct_idx': 0,
                                         'options': [('Ten', 'Diez'), ('Eight', 'Ocho'), ('Twelve', 'Doce')],
                                         'question_en': '[[How|Cuántos]] [[many|cuántos]] [[toes|dedos del pie]] '
                                                        '[[does|tiene]] [[a|una]] [[person|persona]] [[have|tiene]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('Eye', 'Ojo'), ('Ear', 'Oreja'), ('Nose', 'Nariz')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Oreja'?"},
                                     {   'correct_idx': 0,
                                         'options': [('Shoulder', 'Hombro'), ('Elbow', 'Codo'), ('Knee', 'Rodilla')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Hombro'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('foots', 'Incorrecto'),
                                                        ('feets', 'Incorrecto'),
                                                        ('feet', 'Pies')],
                                         'question_en': '[[What|Qué]] [[is|es]] [[the|el]] [[plural|plural]] [[of|de]] '
                                                        "'foot'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Front', 'Frente'),
                                                        ('Back/spine area', 'Espalda'),
                                                        ('Neck', 'Cuello')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Back' [[mean|significa]] "
                                                        '[[as|como]] [[a|una]] [[body|parte del]] [[part|cuerpo]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Back', 'Espalda'), ('Chest', 'Pecho'), ('Neck', 'Cuello')],
                                         'question_en': '[[Which|Cuál]] [[body|parte]] [[part|del cuerpo]] [[is|es]] '
                                                        '[[between|entre]] [[the|la]] [[head|cabeza]] [[and|y]] '
                                                        '[[the|los]] [[shoulders|hombros]]?'}],
            'title': 'Body Parts',
            'vocab': [   ('Head', 'Cabeza'),
                         ('Arm', 'Brazo'),
                         ('Leg', 'Pierna'),
                         ('Hand', 'Mano'),
                         ('Foot', 'Pie'),
                         ('Eye', 'Ojo'),
                         ('Ear', 'Oreja'),
                         ('Nose', 'Nariz'),
                         ('Mouth', 'Boca'),
                         ('Neck', 'Cuello'),
                         ('Back', 'Espalda'),
                         ('Shoulder', 'Hombro'),
                         ('Finger', 'Dedo'),
                         ('Toe', 'Dedo del pie')]},
    29: {   'dialogue_lines': [   '[[What|Qué]] [[are|llevas]] [[you|tú]] [[wearing|puesto]] [[to|para]] [[the|la]] '
                                  '[[party|fiesta]] [[tonight|esta noche]]?',
                                  "[[I|Yo]] [[think|creo]] [[I'll|que llevaré]] [[wear|llevaré]] [[my|mi]] "
                                  '[[blue|azul]] [[dress|vestido]] [[and|y]] [[black|negros]] [[boots|botas]].',
                                  '[[That|Eso]] [[sounds|suena]] [[beautiful|bonito]]! [[What|Qué]] [[about|sobre]] '
                                  "[[a|una]] [[jacket|chaqueta]]? [[It's|Hace]] [[cold|frío]] [[tonight|esta noche]].",
                                  "[[Good|Buena]] [[idea|idea]]! [[I'll|Me llevaré]] [[take|llevaré]] [[my|mi]] "
                                  '[[grey|gris]] [[coat|abrigo]] [[too|también]].',
                                  "[[And|Y]] [[don't|no]] [[forget|olvides]] [[a|una]] [[scarf|bufanda]] — [[the|la]] "
                                  "[[forecast|previsión]] [[says|dice]] [[it's|que hará]] [[very|muy]] [[cold|frío]]!"],
            'grammar_patterns': [   (   '[[I|Yo]] [[am|estoy]] ______ [[a|una]] [[blue|azul]] [[dress|vestido]].',
                                        'wearing'),
                                    (   '[[She|Ella]] [[is|está]] ______ [[a|un]] [[red|rojo]] [[coat|abrigo]].',
                                        'wearing'),
                                    ('[[What|Qué]] [[are|llevas]] [[you|tú]] ______?', 'wearing'),
                                    (   "[[He|Él]] [[isn't|no está]] ______ [[a|una]] [[jacket|chaqueta]] "
                                        '[[today|hoy]].',
                                        'wearing'),
                                    (   '[[They|Ellos]] [[are|están]] ______ [[warm|ropa]] [[clothes|de abrigo]] '
                                        "[[because|porque]] [[it's|hace]] [[cold|frío]].",
                                        'wearing'),
                                    (   '[[I|Yo]] [[need|necesito]] [[to|a]] ______ [[my|mi]] [[shoes|zapatos]] '
                                        '[[before|antes de]] [[going|salir]] [[out|salir]].',
                                        'put on')],
            'learning_outcomes': [   'Name clothing items in English',
                                     'Use Present Continuous to describe what people are wearing',
                                     'Describe outfits for different occasions'],
            'module': 3,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('A wedding', 'Una boda'),
                                                        ('A party', 'Una fiesta'),
                                                        ('A dinner', 'Una cena')],
                                         'question_en': '[[What|Qué]] [[event|evento]] [[are|van]] [[they|ellos]] '
                                                        '[[going|van]] [[to|a]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Red dress', 'Vestido rojo'),
                                                        ('Green dress', 'Vestido verde'),
                                                        ('Blue dress', 'Vestido azul')],
                                         'question_en': '[[What|Qué]] [[dress|vestido]] [[is|va a llevar]] [[the|el]] '
                                                        '[[speaker|hablante]] [[going|va a llevar]] [[to|a]] '
                                                        '[[wear|llevar]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('White shoes', 'Zapatos blancos'),
                                                        ('Black boots', 'Botas negras'),
                                                        ('Brown boots', 'Botas marrones')],
                                         'question_en': '[[What|Qué]] [[shoes|calzado]] [[is|va a llevar]] [[the|el]] '
                                                        '[[speaker|hablante]] [[going|va a llevar]] [[to|a]] '
                                                        '[[wear|llevar]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ("It's rainy", 'Está lloviendo'),
                                                        ("It's cold", 'Hace frío'),
                                                        ("It's windy", 'Hace viento')],
                                         'question_en': '[[Why|Por qué]] [[is|hay que llevar]] [[a|una]] '
                                                        '[[jacket|chaqueta]] [[recommended|recomendada]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Hat', 'Sombrero'), ('Gloves', 'Guantes'), ('Scarf', 'Bufanda')],
                                         'question_en': '[[What|Qué]] [[extra|prenda extra]] [[item|extra]] '
                                                        '[[is|también]] [[also|también]] [[suggested|sugerida]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Black', 'Negro'), ('Blue', 'Azul'), ('Grey', 'Gris')],
                                         'question_en': '[[What|Qué]] [[colour|color]] [[coat|abrigo]] [[does|va a '
                                                        'llevar]] [[the|el]] [[speaker|hablante]] [[plan|va a llevar]] '
                                                        '[[to|a]] [[wear|llevar]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Present Simple', 'Presente simple'),
                                                        ('Present Continuous', 'Presente continuo'),
                                                        ('Past Simple', 'Pasado simple')],
                                         'question_en': '[[What|Qué]] [[tense|tiempo]] [[is|se usa]] [[used|usa]] '
                                                        '[[to|para]] [[describe|describir]] [[what|lo que]] '
                                                        '[[someone|alguien]] [[is|está]] [[wearing|llevando]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Skirt', 'Falda'),
                                                        ('Dress', 'Vestido'),
                                                        ('Trousers/Pants', 'Pantalones')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Trousers' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 0,
                                         'options': [('Scarf', 'Bufanda'), ('Hat', 'Sombrero'), ('Coat', 'Abrigo')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Bufanda'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('subject + verb-ing', 'sujeto + verbo-ing'),
                                                        (   'subject + am/is/are + verb-ing',
                                                            'sujeto + am/is/are + verbo-ing'),
                                                        ('subject + do/does + verb', 'sujeto + do/does + verbo')],
                                         'question_en': '[[What|Qué]] [[is|es]] [[the|el]] [[structure|estructura]] '
                                                        '[[of|del]] [[Present|Presente]] [[Continuous|Continuo]]?'}],
            'title': 'Clothes',
            'vocab': [   ('Shirt', 'Camisa'),
                         ('Trousers', 'Pantalones'),
                         ('Dress', 'Vestido'),
                         ('Shoes', 'Zapatos'),
                         ('Hat', 'Sombrero'),
                         ('Jacket', 'Chaqueta'),
                         ('T-shirt', 'Camiseta'),
                         ('Skirt', 'Falda'),
                         ('Coat', 'Abrigo'),
                         ('Boots', 'Botas'),
                         ('Socks', 'Calcetines'),
                         ('Scarf', 'Bufanda'),
                         ('Wearing', 'Llevando puesto'),
                         ('Getting dressed', 'Vistiéndose')]},
    30: {   'dialogue_lines': [   '[[Can|Puedes]] [[you|tú]] [[describe|describir]] [[your|tu]] '
                                  '[[bedroom|dormitorio]]?',
                                  '[[Sure|Claro]]! [[There|Hay]] [[is|hay]] [[a|una]] [[big|grande]] [[bed|cama]], '
                                  '[[a|un]] [[wardrobe|armario]] [[and|y]] [[a|una]] [[lamp|lámpara]] [[on|en]] '
                                  '[[the|la]] [[shelf|estantería]].',
                                  '[[Is|Hay]] [[there|allí]] [[a|un]] [[mirror|espejo]]?',
                                  "[[Yes|Sí]], [[there's|hay]] [[one|uno]] [[above|encima]] [[the|la]] [[wardrobe|el "
                                  'armario]]. [[My|Mi]] [[cat|gato]] [[usually|normalmente]] [[sleeps|duerme]] '
                                  '[[on|en]] [[the|la]] [[bed|cama]]!',
                                  '[[Sounds|Parece]] [[cozy|acogedor]]! [[And|Y]] [[what|qué]] [[are|llevas]] '
                                  '[[you|tú]] [[wearing|puesto]] [[today|hoy]]?'],
            'grammar_patterns': [   (   '[[There|Hay]] ______ [[a|un]] [[park|parque]] [[near|cerca de]] [[my|mi]] '
                                        '[[house|casa]].',
                                        'is'),
                                    ('[[The|El]] [[book|libro]] [[is|está]] ______ [[the|la]] [[table|mesa]].', 'on'),
                                    ('[[What|Qué]] [[are|llevas]] [[you|tú]] ______?', 'wearing'),
                                    (   '[[Does|Tiene]] [[the|la]] [[house|casa]] [[have|tiene]] ______ '
                                        '[[garden|jardín]]?',
                                        'a'),
                                    ('[[Turn|Gira]] ______ [[at|en]] [[the|el]] [[traffic lights|semáforo]].', 'left'),
                                    (   '[[I|Yo]] [[have|tengo]] [[a|un]] [[dog|perro]]. [[He|Él]] [[is|es]] '
                                        '[[very|muy]] ______.',
                                        'friendly')],
            'learning_outcomes': [   'Review all Module 3 topics: rooms, furniture, prepositions, neighborhood, '
                                     'animals, body, clothes',
                                     'Combine there is/are with prepositions and descriptions',
                                     'Produce extended descriptions of home and environment'],
            'module': 3,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Sofa and TV', 'Sofá y televisión'),
                                                        ('Bed, wardrobe and lamp', 'Cama, armario y lámpara'),
                                                        ('Table and chairs', 'Mesa y sillas')],
                                         'question_en': '[[What|Qué]] [[is|hay]] [[is|en]] [[in|en]] [[the|el]] '
                                                        '[[bedroom|dormitorio]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('On the table', 'En la mesa'),
                                                        ('On the shelf', 'En la estantería'),
                                                        ('On the floor', 'En el suelo')],
                                         'question_en': '[[Where|Dónde]] [[is|está]] [[the|la]] [[lamp|lámpara]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('No', 'No'), ('Yes', 'Sí'), ('Not mentioned', 'No mencionado')],
                                         'question_en': '[[Is|Hay]] [[there|allí]] [[a|un]] [[mirror|espejo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Next to the door', 'Al lado de la puerta'),
                                                        ('Above the wardrobe', 'Encima del armario'),
                                                        ('On the wall', 'En la pared')],
                                         'question_en': '[[Where|Dónde]] [[is|está]] [[the|el]] [[mirror|espejo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Plays in the garden', 'Juega en el jardín'),
                                                        ('Sleeps on the bed', 'Duerme en la cama'),
                                                        ('Sits by the window', 'Se sienta junto a la ventana')],
                                         'question_en': '[[What|Qué]] [[does|hace]] [[the|el]] [[cat|gato]] '
                                                        '[[usually|normalmente]] [[do|hace]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Under', 'Debajo de'),
                                                        ('Between', 'Entre'),
                                                        ('Above', 'Encima de')],
                                         'question_en': '[[Which|Cuál]] [[preposition|preposición]] '
                                                        "[[means|significa]] 'Encima de'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Present Simple', 'Presente simple'),
                                                        ('Past Simple', 'Pasado simple'),
                                                        ('Present Continuous', 'Presente continuo')],
                                         'question_en': '[[What|Qué]] [[tense|tiempo]] [[describes|describe]] '
                                                        '[[what|lo que]] [[you|tú]] [[are|estás]] [[wearing|llevando]] '
                                                        '[[now|ahora]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('It is a...', 'Es un/una...'),
                                                        ('There is a...', 'Hay un/una...'),
                                                        ('Here is a...', 'Aquí hay un/una...')],
                                         'question_en': '[[How|Cómo]] [[do|expresas]] [[you|tú]] [[say|dices]] '
                                                        '[[there|que hay]] [[is|hay]] [[a|una]] [[thing|cosa]] '
                                                        '[[in|en]] [[English|inglés]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Present Simple', 'Presente simple'),
                                                        ('There is/are', 'Hay'),
                                                        ('Present Continuous', 'Presente continuo')],
                                         'question_en': '[[What|Qué]] [[grammar|gramática]] [[structure|estructura]] '
                                                        '[[describes|describe]] [[actions|acciones]] '
                                                        '[[happening|sucediendo]] [[right|ahora]] [[now|mismo]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('It is dark', 'Es oscuro'),
                                                        ('It is cozy', 'Es acogedor'),
                                                        ('It is bright', 'Es luminoso')],
                                         'question_en': '[[How|Cómo]] [[do|describes]] [[you|tú]] '
                                                        '[[describe|describes]] [[a|una]] [[room|habitación]] '
                                                        '[[with|con]] [[lots|mucha]] [[of|de]] [[natural|natural]] '
                                                        '[[light|luz]]?'}],
            'title': 'Module 3 Review & Assessment',
            'vocab': [   ('Room', 'Habitación'),
                         ('Furniture', 'Muebles'),
                         ('Direction', 'Dirección'),
                         ('Animal', 'Animal'),
                         ('Body', 'Cuerpo'),
                         ('Clothes', 'Ropa'),
                         ('Preposition', 'Preposición'),
                         ('Description', 'Descripción'),
                         ('Location', 'Ubicación'),
                         ('Position', 'Posición'),
                         ('Comfortable', 'Cómodo/a'),
                         ('Neighbourhood', 'Barrio'),
                         ('There is', 'Hay (singular)'),
                         ('Wearing', 'Llevando puesto')]},
    31: {   'dialogue_lines': [   '[[Can|Puedes]] [[you|tú]] [[swim|nadar]]?',
                                  '[[Yes|Sí]], [[I|yo]] [[can|puedo]] [[swim|nadar]] [[quite|bastante]] [[well|bien]]! '
                                  '[[I|Yo]] [[go|voy]] [[to|a]] [[the|la]] [[pool|piscina]] [[every|cada]] '
                                  '[[week|semana]].',
                                  '[[Wow|Vaya]]! [[Can|Puedes]] [[you|tú]] [[also|también]] [[dive|bucear]]?',
                                  "[[No|No]], [[I|yo]] [[can't|no puedo]] [[dive|bucear]]. [[It's|Es]] "
                                  '[[too|demasiado]] [[scary|aterrador]] [[for|para]] [[me|mí]]! [[What|Qué]] '
                                  '[[about|puedes]] [[you|tú]]? [[Can|Puedes]] [[you|tú]] [[swim|nadar]]?',
                                  '[[I|Yo]] [[can|puedo]] [[swim|nadar]] [[a|un]] [[little|poco]], [[but|pero]] '
                                  "[[I|yo]] [[can't|no puedo]] [[do|hacer]] [[it|eso]] [[very|muy]] [[well|bien]]."],
            'grammar_patterns': [   ('[[I|Yo]] ______ [[swim|nadar]] [[very|muy]] [[well|bien]].', 'can'),
                                    (   "[[She|Ella]] ______ [[drive|conducir]]. [[She|Ella]] [[doesn't|no]] "
                                        '[[have|tiene]] [[a|un]] [[licence|carné]].',
                                        "can't"),
                                    ('______ [[you|tú]] [[speak|hablar]] [[French|francés]]?', 'Can'),
                                    (   '[[We|Nosotros]] ______ [[cook|cocinar]] [[Italian|italiana]] [[food|comida]].',
                                        'can'),
                                    (   '[[He|Él]] [[can|puede]] [[sing|cantar]] [[but|pero]] ______ [[dance|bailar]].',
                                        "can't"),
                                    (   '______ [[they|ellos]] [[climb|escalar]] [[that|esa]] [[mountain|montaña]]?',
                                        'Can')],
            'learning_outcomes': [   "Use 'can' and 'can't' to express abilities",
                                     "Ask yes/no questions with 'Can...?'",
                                     'Describe personal abilities and skills'],
            'module': 4,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('No', 'No'),
                                                        ('Yes, quite well', 'Sí, bastante bien'),
                                                        ('Yes, but not well', 'Sí, pero no muy bien')],
                                         'question_en': '[[Can|Puede]] [[the|el]] [[first|primer]] '
                                                        '[[speaker|hablante]] [[swim|nadar]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Daily', 'Cada día'),
                                                        ('Every week', 'Cada semana'),
                                                        ('Every month', 'Cada mes')],
                                         'question_en': '[[How|Con qué]] [[often|frecuencia]] [[does|va]] [[the|el]] '
                                                        '[[first|primer]] [[speaker|hablante]] [[go|va]] [[to|a]] '
                                                        '[[the|la]] [[pool|piscina]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Yes', 'Sí'),
                                                        ("No, it's too scary", 'No, da demasiado miedo'),
                                                        ('Not mentioned', 'No mencionado')],
                                         'question_en': '[[Can|Puede]] [[the|el]] [[first|primer]] '
                                                        '[[speaker|hablante]] [[dive|bucear]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Yes, very well', 'Sí, muy bien'),
                                                        ('No', 'No'),
                                                        ('A little, but not well', 'Un poco, pero no muy bien')],
                                         'question_en': '[[Can|Puede]] [[the|el]] [[second|segundo]] '
                                                        '[[speaker|hablante]] [[swim|nadar]]?'},
                                     {   'correct_idx': 0,
                                         'options': [   ('I can + verb', 'Yo puedo + verbo'),
                                                        ('I can to + verb', 'Incorrecto'),
                                                        ('I am can + verb', 'Incorrecto')],
                                         'question_en': '[[What|Cuál]] [[is|es]] [[the|la]] [[affirmative|afirmativa]] '
                                                        "[[form|forma]] [[of|de]] 'can'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ("I don't can", 'Incorrecto'),
                                                        ("I can't", 'No puedo'),
                                                        ('I am not can', 'Incorrecto')],
                                         'question_en': '[[What|Cuál]] [[is|es]] [[the|la]] [[negative|negativa]] '
                                                        "[[form|forma]] [[of|de]] 'can'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Do you can...?', 'Incorrecto'),
                                                        ('Can you...?', '¿Puedes...?'),
                                                        ('Are you can...?', 'Incorrecto')],
                                         'question_en': '[[How|Cómo]] [[do|haces]] [[you|tú]] [[ask|haces]] [[a|una]] '
                                                        "[[question|pregunta]] [[with|con]] 'can'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Hobby', 'Afición'),
                                                        ('Ability', 'Habilidad'),
                                                        ('Talent', 'Talento')],
                                         'question_en': '[[What|Qué]] [[word|palabra]] [[means|significa]] '
                                                        "'Habilidad'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Exciting', 'Emocionante'),
                                                        ('Fun', 'Divertido'),
                                                        ('Frightening', 'Aterrador')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Scary' [[mean|significa]]?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('It adds -s', 'Añade -s'),
                                                        ('It adds -ing', 'Añade -ing'),
                                                        ('It stays in base form', 'Se mantiene en forma base')],
                                         'question_en': '[[Which|Cuál]] [[verb|verbo]] [[never|nunca]] '
                                                        "[[changes|cambia]] [[after|después de]] 'can'?"}],
            'title': 'Can for Ability',
            'vocab': [   ('Swim', 'Nadar'),
                         ('Cook', 'Cocinar'),
                         ('Drive', 'Conducir'),
                         ('Speak', 'Hablar'),
                         ('Sing', 'Cantar'),
                         ('Dance', 'Bailar'),
                         ('Draw', 'Dibujar'),
                         ('Run', 'Correr'),
                         ('Climb', 'Escalar'),
                         ('Play the guitar', 'Tocar la guitarra'),
                         ('Can', 'Poder (habilidad)'),
                         ("Can't", 'No poder'),
                         ('Ability', 'Habilidad'),
                         ('Well', 'Bien')]},
    32: {   'dialogue_lines': [   '[[Do|Practicas]] [[you|tú]] [[any|algún]] [[sports|deporte]]?',
                                  '[[Yes|Sí]]! [[I|Yo]] [[play|juego]] [[tennis|al tenis]] [[and|y]] [[go|voy]] '
                                  '[[swimming|a nadar]] [[regularly|regularmente]].',
                                  "[[That's|Es]] [[great|estupendo]]! [[Do|Juegas]] [[you|tú]] [[play|juegas]] "
                                  '[[tennis|al tenis]] [[in|en]] [[a|un]] [[club|club]]?',
                                  '[[Yes|Sí]], [[I|yo]] [[am|soy]] [[a|un]] [[member|miembro]] [[of|del]] [[the|del]] '
                                  '[[local|local]] [[tennis|tenis]] [[club|club]]. [[We|Nosotros]] [[have|tenemos]] '
                                  '[[matches|partidos]] [[on|los]] [[Sundays|domingos]].',
                                  "[[I|Yo]] [[do|hago]] [[yoga|yoga]] [[myself|yo mismo]]. [[It's|Es]] [[so|tan]] "
                                  '[[relaxing|relajante]] [[and|y]] [[good|bueno]] [[for|para]] [[flexibility|la '
                                  'flexibilidad]].'],
            'grammar_patterns': [   ('[[I|Yo]] ______ [[football|fútbol]] [[on|los]] [[Saturdays|sábados]].', 'play'),
                                    (   '[[She|Ella]] ______ [[cycling|ciclismo]] [[every|cada]] [[morning|mañana]].',
                                        'goes'),
                                    (   '[[They|Ellos]] ______ [[yoga|yoga]] [[twice|dos veces]] [[a|a la]] '
                                        '[[week|semana]].',
                                        'do'),
                                    ('[[He|Él]] ______ [[tennis|tenis]] [[very|muy]] [[well|bien]].', 'plays'),
                                    (   '[[Do|Vas]] [[you|tú]] ______ [[skiing|a esquiar]] [[in|en]] '
                                        '[[winter|invierno]]?',
                                        'go'),
                                    (   '[[We|Nosotros]] ______ [[basketball|baloncesto]] [[at|en]] [[school|la '
                                        'escuela]].',
                                        'play')],
            'learning_outcomes': [   'Name sports and hobbies in English',
                                     'Use play/go/do with the correct sport',
                                     'Talk about sports participation and club membership'],
            'module': 4,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Football and swimming', 'Fútbol y natación'),
                                                        ('Tennis and swimming', 'Tenis y natación'),
                                                        ('Tennis and cycling', 'Tenis y ciclismo')],
                                         'question_en': '[[What|Qué]] [[sports|deportes]] [[does|practica]] [[the|el]] '
                                                        '[[speaker|hablante]] [[do|practica]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('No', 'No'), ('Yes', 'Sí'), ('Not mentioned', 'No mencionado')],
                                         'question_en': '[[Is|Es]] [[the|el]] [[speaker|hablante]] [[a|un]] '
                                                        '[[member|miembro]] [[of|de]] [[a|un]] [[tennis|tenis]] '
                                                        '[[club|club]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('On Saturdays', 'Los sábados'),
                                                        ('On Sundays', 'Los domingos'),
                                                        ('On Fridays', 'Los viernes')],
                                         'question_en': '[[When|Cuándo]] [[do|tienen]] [[they|ellos]] [[have|tienen]] '
                                                        '[[matches|partidos]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Swimming', 'Nadar'), ('Cycling', 'Ciclismo'), ('Yoga', 'Yoga')],
                                         'question_en': '[[What|Qué]] [[does|hace]] [[the|el]] [[second|segundo]] '
                                                        '[[speaker|hablante]] [[do|hace]] [[for|para]] '
                                                        '[[exercise|hacer ejercicio]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('go', 'ir a'), ('do', 'hacer'), ('play', 'jugar')],
                                         'question_en': '[[Which|Cuál]] [[verb|verbo]] [[goes|va]] [[with|con]] '
                                                        "'tennis' [[and|y]] 'football'?"},
                                     {   'correct_idx': 1,
                                         'options': [('play', 'jugar'), ('go', 'ir a'), ('do', 'hacer')],
                                         'question_en': '[[Which|Cuál]] [[verb|verbo]] [[goes|va]] [[with|con]] '
                                                        "'swimming' [[and|y]] 'cycling'?"},
                                     {   'correct_idx': 2,
                                         'options': [('play', 'jugar'), ('go', 'ir a'), ('do', 'hacer')],
                                         'question_en': "[[Which|Cuál]] [[verb|verbo]] [[goes|va]] [[with|con]] 'yoga' "
                                                        "[[and|y]] 'martial arts'?"},
                                     {   'correct_idx': 1,
                                         'options': [('Club', 'Club'), ('Match', 'Partido'), ('Team', 'Equipo')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Partido'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Speed', 'Velocidad'),
                                                        ('Relaxation and flexibility', 'Relajación y flexibilidad'),
                                                        ('Strength', 'Fuerza')],
                                         'question_en': '[[What|Qué]] [[benefit|beneficio]] [[is|se menciona]] '
                                                        '[[mentioned|menciona]] [[for|del]] [[yoga|yoga]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Sometimes', 'A veces'),
                                                        ('Rarely', 'Raramente'),
                                                        ('Consistently/Often', 'Regularmente')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Regularly' "
                                                        '[[mean|significa]]?'}],
            'title': 'Sports & Hobbies',
            'vocab': [   ('Football', 'Fútbol'),
                         ('Tennis', 'Tenis'),
                         ('Swimming', 'Natación'),
                         ('Basketball', 'Baloncesto'),
                         ('Cycling', 'Ciclismo'),
                         ('Running', 'Correr'),
                         ('Skiing', 'Esquí'),
                         ('Chess', 'Ajedrez'),
                         ('Yoga', 'Yoga'),
                         ('Volleyball', 'Voleibol'),
                         ('Play', 'Jugar (deportes de equipo/raqueta)'),
                         ('Go', 'Hacer (deportes individuales)'),
                         ('Do', 'Hacer (deportes/artes marciales)'),
                         ('Match', 'Partido')]},
    33: {   'dialogue_lines': [   '[[Do|Haces]] [[you|tú]] [[exercise|ejercicio]] [[regularly|regularmente]]?',
                                  '[[Yes|Sí]], [[I|yo]] [[usually|normalmente]] [[go|voy]] [[running|a correr]] '
                                  '[[three|tres]] [[times|veces]] [[a|a la]] [[week|semana]]. [[But|Pero]] [[I|yo]] '
                                  '[[sometimes|a veces]] [[miss|me salto]] [[a|una]] [[session|sesión]] '
                                  "[[when|cuando]] [[I'm|estoy]] [[busy|ocupado]].",
                                  '[[Do|Comes]] [[you|tú]] [[often|a menudo]] [[eat|comes]] [[fast|rápida]] '
                                  '[[food|comida]]?',
                                  '[[Hardly|Casi]] [[ever|nunca]]! [[I|Yo]] [[rarely|raramente]] [[eat|como]] '
                                  '[[fast|rápida]] [[food|comida]]. [[I|Yo]] [[always|siempre]] [[try|intento]] '
                                  '[[to|de]] [[cook|cocinar]] [[at|en]] [[home|casa]].',
                                  "[[That's|Es]] [[great|estupendo]]! [[I|Yo]] [[never|nunca]] [[have|tengo]] "
                                  '[[time|tiempo]] [[to|para]] [[cook|cocinar]].'],
            'grammar_patterns': [   (   '[[I|Yo]] ______ [[eat|como]] [[breakfast|el desayuno]] [[at|a]] '
                                        '[[home|casa]].',
                                        'always'),
                                    (   '[[She|Ella]] ______ [[goes|va]] [[to|al]] [[the|al]] [[gym|gimnasio]] '
                                        '[[on|los]] [[Mondays|lunes]].',
                                        'usually'),
                                    (   '[[He|Él]] ______ [[watches|ve]] [[TV|televisión]] [[in|por]] [[the|la]] '
                                        '[[morning|mañana]].',
                                        'rarely'),
                                    (   "[[I|Yo]] ______ [[drink|bebo]] [[coffee|café]]. [[I|Yo]] [[don't|no]] "
                                        '[[like|me gusta]] [[it|eso]].',
                                        'never'),
                                    (   '[[Do|Vas]] [[you|tú]] ______ [[go|vas]] [[to|al]] [[the|al]] [[cinema|cine]]?',
                                        'often'),
                                    (   '[[We|Nosotros]] ______ [[have|tenemos]] [[pizza|pizza]] [[on|los]] '
                                        '[[Friday|viernes]] [[nights|noches]].',
                                        'sometimes')],
            'learning_outcomes': [   'Use adverbs of frequency: always, usually, often, sometimes, rarely, never',
                                     'Place adverbs correctly before the main verb',
                                     'Ask and answer questions about how often you do things'],
            'module': 4,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Every day', 'Cada día'),
                                                        ('Three times a week', 'Tres veces a la semana'),
                                                        ('Once a week', 'Una vez a la semana')],
                                         'question_en': '[[How|Con qué]] [[often|frecuencia]] [[does|va]] [[the|el]] '
                                                        '[[speaker|hablante]] [[go|va]] [[running|a correr]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Never', 'Nunca'),
                                                        ('Yes, sometimes when busy', 'Sí, a veces cuando está ocupado'),
                                                        ('Always', 'Siempre')],
                                         'question_en': '[[Does|Come]] [[the|el]] [[speaker|hablante]] [[ever|alguna '
                                                        'vez]] [[miss|se salta]] [[a|una]] [[session|sesión]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Often', 'A menudo'),
                                                        ('Sometimes', 'A veces'),
                                                        ('Hardly ever', 'Casi nunca')],
                                         'question_en': '[[How|Con qué]] [[often|frecuencia]] [[does|come]] [[the|el]] '
                                                        '[[speaker|hablante]] [[eat|come]] [[fast|rápida]] '
                                                        '[[food|comida]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Go to the gym', 'Ir al gimnasio'),
                                                        ('Cook at home', 'Cocinar en casa'),
                                                        ('Eat salad', 'Comer ensalada')],
                                         'question_en': '[[What|Qué]] [[does|siempre intenta hacer]] [[the|el]] '
                                                        '[[speaker|hablante]] [[always|siempre]] [[try|intenta]] '
                                                        '[[to|de]] [[do|hacer]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Exercise', 'Hacer ejercicio'),
                                                        ('Cooking', 'Cocinar'),
                                                        ('Shopping', 'Ir de compras')],
                                         'question_en': '[[Where|Dónde]] [[does|va]] [[the|el]] [[second|segundo]] '
                                                        '[[speaker|hablante]] [[never|nunca]] [[have|tiene]] '
                                                        '[[time|tiempo]] [[for|para]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Before the subject', 'Antes del sujeto'),
                                                        ('Before the main verb', 'Antes del verbo principal'),
                                                        ('At the end of the sentence', 'Al final de la oración')],
                                         'question_en': '[[Where|Dónde]] [[do|van]] [[adverbs|los adverbios]] '
                                                        '[[of|de]] [[frequency|frecuencia]] [[usually|normalmente]] '
                                                        '[[go|van]] [[in|en]] [[a|una]] [[sentence|oración]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Usually', 'Normalmente'),
                                                        ('Often', 'A menudo'),
                                                        ('Always', 'Siempre')],
                                         'question_en': "[[Which|Cuál]] [[adverb|adverbio]] [[means|significa]] '100% "
                                                        "of the time'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Rarely', 'Raramente'),
                                                        ('Hardly ever', 'Casi nunca'),
                                                        ('Never', 'Nunca')],
                                         'question_en': "[[Which|Cuál]] [[adverb|adverbio]] [[means|significa]] '0% of "
                                                        "the time'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Often', 'A menudo'),
                                                        ('Almost never', 'Casi nunca'),
                                                        ('Sometimes', 'A veces')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Hardly ever' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('What often do you...?', 'Incorrecto'),
                                                        ('How much do you...?', '¿Cuánto...?'),
                                                        ('How often do you...?', '¿Con qué frecuencia...?')],
                                         'question_en': '[[How|Cómo]] [[do|preguntas]] [[you|tú]] [[ask|preguntas]] '
                                                        '[[about|sobre]] [[frequency|frecuencia]]?'}],
            'title': 'Adverbs of Frequency',
            'vocab': [   ('Always', 'Siempre'),
                         ('Usually', 'Normalmente'),
                         ('Often', 'A menudo'),
                         ('Sometimes', 'A veces'),
                         ('Rarely', 'Raramente'),
                         ('Never', 'Nunca'),
                         ('Every day', 'Cada día'),
                         ('Once a week', 'Una vez a la semana'),
                         ('Twice a month', 'Dos veces al mes'),
                         ('Hardly ever', 'Casi nunca'),
                         ('Generally', 'En general'),
                         ('Occasionally', 'Ocasionalmente'),
                         ('Frequency', 'Frecuencia'),
                         ('Habit', 'Hábito')]},
    34: {   'dialogue_lines': [   "[[Why|Por qué]] [[don't|no]] [[you|tú]] [[eat|comes]] [[meat|carne]]?",
                                  '[[Because|Porque]] [[I|yo]] [[am|soy]] [[a|un]] [[vegetarian|vegetariano]]. '
                                  '[[I|Yo]] [[love|me encantan]] [[vegetables|las verduras]] [[and|y]] [[fruit|las '
                                  "frutas]], [[but|pero]] [[I|yo]] [[don't|no]] [[eat|como]] [[meat|carne]] [[or|ni]] "
                                  '[[fish|pescado]].',
                                  '[[Do|Te gusta]] [[you|tú]] [[like|te gusta]] [[being|ser]] '
                                  '[[vegetarian|vegetariano]]?',
                                  '[[Yes|Sí]]! [[I|Yo]] [[feel|me siento]] [[healthier|más sano]] [[and|y]] [[I|yo]] '
                                  '[[sleep|duermo]] [[better|mejor]] [[too|también]].',
                                  "[[That's|Es]] [[interesting|interesante]]. [[But|Pero]] [[isn't|no es]] [[it|eso]] "
                                  '[[difficult|difícil]] [[sometimes|a veces]]?'],
            'grammar_patterns': [   (   "[[I|Yo]] [[like|me gusta]] [[coffee|el café]] ______ [[I|yo]] [[don't|no]] "
                                        '[[like|me gusta]] [[tea|el té]].',
                                        'but'),
                                    (   '[[She|Ella]] [[is|es]] [[tired|cansada]] ______ [[she|ella]] '
                                        '[[worked|trabajó]] [[all|todo el]] [[day|día]].',
                                        'because'),
                                    (   '[[He|Él]] [[plays|toca]] [[the|la]] [[guitar|guitarra]] ______ '
                                        '[[sings|canta]] [[in|en]] [[a|una]] [[band|banda]].',
                                        'and'),
                                    (   "[[I|Yo]] [[don't|no]] [[exercise|hago ejercicio]] ______ [[I|yo]] "
                                        '[[am|estoy]] [[very|muy]] [[busy|ocupado]].',
                                        'because'),
                                    (   "[[She|Ella]] [[can|puede]] [[swim|nadar]] ______ [[she|ella]] [[can't|no "
                                        'puede]] [[dive|bucear]].',
                                        'but'),
                                    (   '[[I|Yo]] [[love|me encanta]] [[reading|leer]] ______ [[writing|escribir]] '
                                        '[[stories|historias]].',
                                        'and')],
            'learning_outcomes': [   'Use conjunctions: and, but, because to link ideas',
                                     'Form compound sentences in English',
                                     'Express addition, contrast, and reasons'],
            'module': 4,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Allergic', 'Alérgico'),
                                                        ('Vegetarian', 'Vegetariano'),
                                                        ("Doesn't like the taste", 'No le gusta el sabor')],
                                         'question_en': "[[Why|Por qué]] [[doesn't|no]] [[the|el]] "
                                                        '[[speaker|hablante]] [[eat|come]] [[meat|carne]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Only salad', 'Solo ensalada'),
                                                        ('Vegetables and fruit', 'Verduras y frutas'),
                                                        ('Fish but not meat', 'Pescado pero no carne')],
                                         'question_en': '[[What|Qué]] [[does|come]] [[the|el]] [[speaker|hablante]] '
                                                        '[[eat|come]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Fruit', 'Fruta'),
                                                        ('Vegetables', 'Verduras'),
                                                        ('Fish', 'Pescado')],
                                         'question_en': '[[What|Qué]] [[does|come]] [[the|el]] [[speaker|hablante]] '
                                                        '[[not|no]] [[eat|come]] [[apart from|además de]] '
                                                        '[[meat|carne]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Tired and weak', 'Cansado y débil'),
                                                        ('Healthier and sleeping better', 'Más sano y durmiendo mejor'),
                                                        ('The same', 'Igual')],
                                         'question_en': '[[How|Cómo]] [[does|se siente]] [[the|el]] '
                                                        '[[speaker|hablante]] [[feel|se siente]] [[since|desde que]] '
                                                        '[[being|es]] [[vegetarian|vegetariano]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('But', 'Pero'), ('Because', 'Porque'), ('And', 'Y')],
                                         'question_en': '[[What|Qué]] [[conjunction|conjunción]] [[is|se usa]] '
                                                        '[[used|usa]] [[to|para]] [[add|añadir]] '
                                                        '[[information|información]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('And', 'Y'), ('Because', 'Porque'), ('But', 'Pero')],
                                         'question_en': '[[What|Qué]] [[conjunction|conjunción]] [[expresses|expresa]] '
                                                        '[[contrast|contraste]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('But', 'Pero'), ('Because', 'Porque'), ('And', 'Y')],
                                         'question_en': '[[What|Qué]] [[conjunction|conjunción]] [[gives|da]] '
                                                        '[[a|una]] [[reason|razón]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Because', 'Porque'),
                                                        ('Although/Even though', 'Aunque'),
                                                        ('So', 'Así que')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Although' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('And also', 'Y también'),
                                                        ('However/But', 'Sin embargo'),
                                                        ('Therefore', 'Por lo tanto')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'However' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('A describing word', 'Una palabra descriptiva'),
                                                        ('A linking word', 'Una palabra de enlace'),
                                                        ('An action word', 'Una palabra de acción')],
                                         'question_en': "[[What|Qué]] [[is|es]] [[a|una]] 'Conjunction'?"}],
            'title': "Using 'And', 'But', 'Because'",
            'vocab': [   ('And', 'Y'),
                         ('But', 'Pero'),
                         ('Because', 'Porque'),
                         ('So', 'Entonces/Así que'),
                         ('Also', 'También'),
                         ('However', 'Sin embargo'),
                         ('Too', 'También (al final)'),
                         ('As well', 'También (al final)'),
                         ('Although', 'Aunque'),
                         ('Reason', 'Razón'),
                         ('Result', 'Resultado'),
                         ('Addition', 'Adición'),
                         ('Contrast', 'Contraste'),
                         ('Conjunction', 'Conjunción')]},
    35: {   'dialogue_lines': [   '[[What|Qué]] [[do|haces]] [[you|tú]] [[do|haces]] [[in|en]] [[your|tu]] '
                                  '[[free|libre]] [[time|tiempo]]?',
                                  '[[I|Yo]] [[like|me gusta]] [[to|ir al]] [[go|ir al]] [[cinema|cine]], [[read|leer]] '
                                  '[[books|libros]] [[and|y]] [[meet|quedar con]] [[friends|amigos]].',
                                  '[[Do|Te gusta]] [[you|tú]] [[enjoy|disfrutas]] [[watching|ver]] [[TV|televisión]] '
                                  '[[or|o]] [[playing|jugar a]] [[video|video]] [[games|juegos]]?',
                                  '[[Not|No]] [[really|mucho]]. [[I|Yo]] [[prefer|prefiero]] [[going|dar]] [[for|un]] '
                                  '[[a|un]] [[walk|paseo]] [[or|o]] [[listening|escuchar]] [[to|a]] [[music|música]] '
                                  '[[instead|en su lugar]].',
                                  "[[Sounds|Suena]] [[relaxing|relajante]]! [[What's|Cuál es]] [[your|tu]] "
                                  '[[favourite|actividad favorita]] [[weekend|del fin de semana]] '
                                  '[[activity|actividad]]?'],
            'grammar_patterns': [   (   '[[I|Yo]] [[love|me encanta]] [[to|ir a]] [[go|ir a]] ______ [[for|para]] '
                                        '[[a|un]] [[walk|paseo]] [[in|en]] [[the|el]] [[park|parque]].',
                                        'go'),
                                    (   '[[She|Ella]] ______ [[going|ir al]] [[to|al]] [[the|al]] [[cinema|cine]] '
                                        '[[every|cada]] [[Friday|viernes]].',
                                        'goes'),
                                    (   '[[We|Nosotros]] [[usually|normalmente]] [[go|vamos]] ______ [[on|los]] '
                                        '[[Saturdays|sábados]].',
                                        'shopping'),
                                    (   '[[Do|Sueles]] [[you|tú]] [[usually|normalmente]] ______ [[TV|televisión]] '
                                        '[[in|por]] [[the|la]] [[evening|noche]]?',
                                        'watch'),
                                    (   '[[He|Él]] [[spends|pasa]] [[his|su]] [[free|libre]] [[time|tiempo]] ______ '
                                        '[[music|música]].',
                                        'listening to'),
                                    (   "[[Let's|Vamos a]] ______ [[friends|amigos]] [[this|este]] "
                                        '[[Saturday|sábado]]!',
                                        'meet')],
            'learning_outcomes': [   'Name common free time activities in English',
                                     "Use 'go + -ing' and 'go for a...' expressions",
                                     'Talk about leisure preferences using like/prefer'],
            'module': 4,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('TV and gaming', 'Televisión y videojuegos'),
                                                        (   'Cinema, reading and meeting friends',
                                                            'Cine, leer y quedar con amigos'),
                                                        ('Shopping and travelling', 'Compras y viajes')],
                                         'question_en': '[[What|Qué]] [[activities|actividades]] [[does|hace]] '
                                                        '[[the|el]] [[speaker|hablante]] [[like|le gustan]] [[in|en]] '
                                                        '[[their|su]] [[free|libre]] [[time|tiempo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Yes, loves it', 'Sí, le encanta'),
                                                        ('Not really', 'No mucho'),
                                                        ('Never watches it', 'Nunca la ve')],
                                         'question_en': '[[Does|Le gusta]] [[the|al]] [[speaker|hablante]] [[enjoy|le '
                                                        'gusta]] [[watching|ver]] [[TV|televisión]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Read books', 'Leer libros'),
                                                        (   'Go for a walk or listen to music',
                                                            'Dar un paseo o escuchar música'),
                                                        ('Play sports', 'Practicar deportes')],
                                         'question_en': '[[What|Qué]] [[does|prefiere]] [[the|el]] '
                                                        '[[speaker|hablante]] [[prefer|prefiere]] [[to|a]] '
                                                        '[[do|hacer]] [[instead|en su lugar]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Go shopping', 'Ir de compras'),
                                                        ('Take a walk', 'Dar un paseo'),
                                                        ('Run fast', 'Correr rápido')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Go for a walk' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 0,
                                         'options': [   ('Go shopping', 'Ir de compras'),
                                                        ('Go for a walk', 'Dar un paseo'),
                                                        ('Go to cinema', 'Ir al cine')],
                                         'question_en': "[[Which|Cuál]] [[expression|expresión]] [[uses|usa]] 'Go + "
                                                        "-ing'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Make new friends', 'Hacer nuevos amigos'),
                                                        ('Get together with friends', 'Quedar con amigos'),
                                                        ('Help friends', 'Ayudar a amigos')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Meet friends' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 0,
                                         'options': [   ('Free time', 'Tiempo libre'),
                                                        ('Work time', 'Tiempo de trabajo'),
                                                        ('Break time', 'Hora del descanso')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Tiempo "
                                                        "libre'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Relax', 'Relajarse'),
                                                        ('Enjoy', 'Disfrutar'),
                                                        ('Spend', 'Pasar (tiempo)')],
                                         'question_en': '[[What|Qué]] [[word|palabra]] [[means|significa]] '
                                                        "'Disfrutar'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Gaming', 'Videojuegos'),
                                                        ('Shopping', 'Compras'),
                                                        ('Going for a walk', 'Dar un paseo')],
                                         'question_en': '[[Which|Cuál]] [[activity|actividad]] [[is|se menciona]] '
                                                        '[[mentioned|menciona]] [[as|como]] [[relaxing|relajante]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('As well', 'También'),
                                                        ('In place of', 'En su lugar'),
                                                        ('Because of', 'A causa de')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Instead' "
                                                        '[[mean|significa]]?'}],
            'title': 'Free Time Activities',
            'vocab': [   ('Watch TV', 'Ver televisión'),
                         ('Play video games', 'Jugar a videojuegos'),
                         ('Use social media', 'Usar redes sociales'),
                         ('Go for a walk', 'Dar un paseo'),
                         ('Listen to music', 'Escuchar música'),
                         ('Go to the cinema', 'Ir al cine'),
                         ('Read books', 'Leer libros'),
                         ('Meet friends', 'Quedar con amigos'),
                         ('Go shopping', 'Ir de compras'),
                         ('Travel', 'Viajar'),
                         ('Free time', 'Tiempo libre'),
                         ('Weekend', 'Fin de semana'),
                         ('Relax', 'Relajarse'),
                         ('Enjoy', 'Disfrutar')]},
    36: {   'dialogue_lines': [   '[[Do|Tocas]] [[you|tú]] [[play|tocas]] [[any|algún]] [[instruments|instrumento]]?',
                                  '[[Yes|Sí]]! [[I|Yo]] [[play|toco]] [[the|la]] [[guitar|guitarra]] [[and|y]] '
                                  '[[a|un]] [[little|poco]] [[piano|de piano]].',
                                  "[[That's|Es]] [[amazing|increíble]]! [[How|Cuánto]] [[long|tiempo]] [[have|llevas]] "
                                  '[[you|tú]] [[been|tocando]] [[playing|tocando]] [[the|la]] [[guitar|guitarra]]?',
                                  '[[About|Alrededor de]] [[six|seis]] [[years|años]]. [[I|Yo]] [[am|soy]] [[in|de]] '
                                  '[[a|una]] [[band|banda]] [[with|con]] [[my|mis]] [[friends|amigos]]. '
                                  '[[We|Nosotros]] [[play|tocamos]] [[at|en]] [[local|locales]] [[venues|locales]] '
                                  '[[sometimes|a veces]].',
                                  '[[Wow|Vaya]]! [[I|Yo]] [[always|siempre]] [[wanted|quise]] [[to|aprender a]] '
                                  '[[learn|aprender]] [[the|el]] [[drums|la batería]], [[but|pero]] [[I|yo]] '
                                  '[[never|nunca]] [[had|tuve]] [[the|el]] [[time|tiempo]].'],
            'grammar_patterns': [   ('[[I|Yo]] [[play|toco]] ______ [[piano|piano]].', 'the'),
                                    (   '[[She|Ella]] [[has|lleva]] [[been|tocando]] [[playing|tocando]] ______ '
                                        '[[violin|el violín]] [[for|durante]] [[five|cinco]] [[years|años]].',
                                        'the'),
                                    ('[[Do|Tocas]] [[you|tú]] [[play|tocas]] ______ [[guitar|la guitarra]]?', 'the'),
                                    (   '[[He|Él]] [[wants|quiere]] [[to|aprender a]] [[learn|aprender]] ______ '
                                        '[[drums|la batería]].',
                                        'the'),
                                    (   '[[We|Nosotros]] [[play|tocamos]] [[in|en]] ______ [[band|una banda]] '
                                        '[[together|juntos]].',
                                        'a'),
                                    (   '[[The|La]] [[orchestra|orquesta]] [[plays|toca]] ______ [[concert|un '
                                        'concierto]] [[every|cada]] [[month|mes]].',
                                        'a')],
            'learning_outcomes': [   'Name musical instruments in English',
                                     "Use 'play the + instrument' correctly",
                                     'Talk about musical experience and participation'],
            'module': 4,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Violin and drums', 'Violín y batería'),
                                                        ('Guitar and piano', 'Guitarra y piano'),
                                                        ('Flute and saxophone', 'Flauta y saxofón')],
                                         'question_en': '[[What|Qué]] [[instruments|instrumentos]] [[does|toca]] '
                                                        '[[the|el]] [[speaker|hablante]] [[play|toca]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Three years', 'Tres años'),
                                                        ('Ten years', 'Diez años'),
                                                        ('Six years', 'Seis años')],
                                         'question_en': '[[How|Cuánto]] [[long|tiempo]] [[has|lleva]] [[the|el]] '
                                                        '[[speaker|hablante]] [[been|tocando]] [[playing|tocando]] '
                                                        '[[the|la]] [[guitar|guitarra]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('No', 'No'), ('Yes', 'Sí'), ('Not mentioned', 'No mencionado')],
                                         'question_en': '[[Is|Es]] [[the|el]] [[speaker|hablante]] [[in|de]] [[a|una]] '
                                                        '[[band|banda]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('At school', 'En el colegio'),
                                                        ('At home', 'En casa'),
                                                        ('At local venues', 'En locales')],
                                         'question_en': '[[Where|Dónde]] [[does|actúa]] [[the|la]] [[band|banda]] '
                                                        '[[perform|actúa]] [[sometimes|a veces]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Piano', 'Piano'), ('Violin', 'Violín'), ('Drums', 'Batería')],
                                         'question_en': '[[What|Qué]] [[does|quería aprender]] [[the|el]] '
                                                        '[[second|segundo]] [[speaker|hablante]] [[always|siempre]] '
                                                        '[[want|quería aprender]] [[to|a]] [[learn|aprender]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('a', 'un/una'), ('an', 'un/una (vocal)'), ('the', 'el/la')],
                                         'question_en': '[[Which|Cuál]] [[article|artículo]] [[do|se usa]] [[you|tú]] '
                                                        '[[use|usa]] [[before|antes de]] [[instrument|instrumento]] '
                                                        '[[names|nombres]] [[in|en]] [[English|inglés]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('An orchestra', 'Una orquesta'),
                                                        ('A music group', 'Un grupo musical'),
                                                        ('A concert', 'Un concierto')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Band' [[mean|significa]] "
                                                        '[[in|en]] [[music|música]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Orchestra', 'Orquesta'),
                                                        ('Band', 'Banda'),
                                                        ('Concert', 'Concierto')],
                                         'question_en': '[[What|Qué]] [[word|palabra]] [[means|significa]] '
                                                        "'Concierto'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('A string instrument', 'Un instrumento de cuerda'),
                                                        ('A wind instrument', 'Un instrumento de viento'),
                                                        ('A percussion instrument', 'Un instrumento de percusión')],
                                         'question_en': "[[What|Qué]] [[is|es]] [[a|una]] 'Flute'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Instrument', 'Instrumento'),
                                                        ('Song', 'Canción'),
                                                        ('Place for events', 'Lugar para eventos')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Venue' [[mean|significa]]?"}],
            'title': 'Musical Instruments',
            'vocab': [   ('Piano', 'Piano'),
                         ('Guitar', 'Guitarra'),
                         ('Drums', 'Batería'),
                         ('Violin', 'Violín'),
                         ('Flute', 'Flauta'),
                         ('Trumpet', 'Trompeta'),
                         ('Saxophone', 'Saxofón'),
                         ('Cello', 'Violonchelo'),
                         ('Keyboard', 'Teclado'),
                         ('Ukulele', 'Ukelele'),
                         ('Play the', 'Tocar el/la'),
                         ('Band', 'Banda'),
                         ('Orchestra', 'Orquesta'),
                         ('Concert', 'Concierto')]},
    37: {   'dialogue_lines': [   '[[What|Cuáles]] [[are|son]] [[your|tus]] [[strongest|puntos fuertes]] '
                                  '[[skills|habilidades]]?',
                                  "[[I|Yo]] [[think|creo]] [[I'm|soy]] [[quite|bastante]] [[creative|creativo]] — "
                                  '[[I|yo]] [[love|me encanta]] [[designing|diseñar]] [[things|cosas]].',
                                  '[[And|Y]] [[how|cómo]] [[would|describirías]] [[you|tú]] [[describe|describirías]] '
                                  '[[your|tu]] [[work|trabajo]] [[style|estilo]]?',
                                  "[[I'm|Soy]] [[very|muy]] [[organized|organizado]] [[and|y]] "
                                  '[[hardworking|trabajador]]. [[I|Yo]] [[always|siempre]] [[finish|termino]] '
                                  '[[my|mi]] [[tasks|tareas]] [[on|a]] [[time|tiempo]].',
                                  '[[Those|Esas]] [[are|son]] [[great|excelentes]] [[qualities|cualidades]]! '
                                  '[[Are|Eres]] [[you|tú]] [[also|también]] [[good|bueno]] [[at|en]] '
                                  '[[teamwork|trabajar en equipo]]?'],
            'grammar_patterns': [   ('[[She|Ella]] [[sings|canta]] ______ .', 'very well'),
                                    (   '[[He|Él]] [[plays|toca]] [[chess|ajedrez]] ______ [[for|para]] [[a|un]] '
                                        '[[beginner|principiante]].',
                                        'quite well'),
                                    ("[[I|Yo]] [[can't|no puedo]] [[draw|dibujar]] ______ .", 'at all'),
                                    (   '[[She|Ella]] [[is|es]] [[very|muy]] ______ — [[she|ella]] [[always|siempre]] '
                                        '[[meets|cumple]] [[deadlines|los plazos]].',
                                        'organized'),
                                    (   '[[He|Él]] [[is|es]] [[a|un]] ______ [[programmer|programador]]. [[He|Él]] '
                                        '[[has|tiene]] [[ten|diez]] [[years|años]] [[of|de]] '
                                        '[[experience|experiencia]].',
                                        'talented'),
                                    (   '[[You|Tú]] [[need|necesitas]] [[to|ser]] [[be|ser]] ______ [[to|para]] '
                                        '[[teach|enseñar]] [[children|niños]].',
                                        'patient')],
            'learning_outcomes': [   'Describe skills and personality traits in English',
                                     'Use adverbs of manner: very well, quite well, not at all',
                                     'Talk about strengths and work style'],
            'module': 4,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Very creative', 'Muy creativo'),
                                                        ('Quite creative', 'Bastante creativo'),
                                                        ('Not creative at all', 'Nada creativo')],
                                         'question_en': '[[How|Cómo]] [[does|se describe]] [[the|el]] '
                                                        '[[speaker|hablante]] [[describe|describe]] [[their|su]] '
                                                        '[[creativity|creatividad]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Writing stories', 'Escribir historias'),
                                                        ('Designing things', 'Diseñar cosas'),
                                                        ('Solving problems', 'Resolver problemas')],
                                         'question_en': '[[What|Qué]] [[does|le encanta]] [[the|al]] '
                                                        '[[speaker|hablante]] [[love|le encanta]] [[doing|hacer]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Creative and flexible', 'Creativo y flexible'),
                                                        ('Organized and hardworking', 'Organizado y trabajador'),
                                                        ('Patient and experienced', 'Paciente y experimentado')],
                                         'question_en': '[[How|Cómo]] [[does|describe]] [[the|el]] '
                                                        '[[speaker|hablante]] [[describe|describe]] [[their|su]] '
                                                        '[[work|trabajo]] [[style|estilo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Asks for help', 'Pide ayuda'),
                                                        ('Finishes them on time', 'Las termina a tiempo'),
                                                        ('Does them quickly', 'Las hace rápidamente')],
                                         'question_en': '[[What|Qué]] [[does|significa]] [[the|el]] '
                                                        '[[speaker|hablante]] [[always|siempre]] [[do|hace]] '
                                                        '[[with|con]] [[tasks|las tareas]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('With difficulty', 'Con dificultad'),
                                                        ('To a great degree of skill', 'Con gran habilidad'),
                                                        ('Adequately', 'Adecuadamente')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Very well' "
                                                        '[[express|expresa]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('A little', 'Un poco'),
                                                        ('Quite a lot', 'Bastante'),
                                                        ('Not in any way', 'En absoluto')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Not at all' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Confident', 'Seguro'),
                                                        ('Creative', 'Creativo'),
                                                        ('Patient', 'Paciente')],
                                         'question_en': '[[What|Qué]] [[word|palabra]] [[means|significa]] '
                                                        "'Creativo'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Hardworking', 'Trabajador'),
                                                        ('Talented', 'Con talento'),
                                                        ('Organized', 'Organizado')],
                                         'question_en': '[[What|Qué]] [[word|palabra]] [[means|significa]] '
                                                        "'Organizado'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Fast', 'Rápido'),
                                                        ('Patient', 'Paciente'),
                                                        ('Flexible', 'Flexible')],
                                         'question_en': '[[What|Qué]] [[word|palabra]] [[means|significa]] '
                                                        "'Paciente'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Works fast', 'Trabaja rápido'),
                                                        ('Works a lot with effort', 'Trabaja mucho con esfuerzo'),
                                                        ('Works rarely', 'Trabaja raramente')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Hardworking' "
                                                        '[[mean|significa]]?'}],
            'title': 'Talent & Skills',
            'vocab': [   ('Creative', 'Creativo/a'),
                         ('Hardworking', 'Trabajador/a'),
                         ('Fast', 'Rápido/a'),
                         ('Talented', 'Con talento'),
                         ('Intelligent', 'Inteligente'),
                         ('Patient', 'Paciente'),
                         ('Organized', 'Organizado/a'),
                         ('Confident', 'Seguro/a de sí mismo'),
                         ('Flexible', 'Flexible'),
                         ('Experienced', 'Experimentado/a'),
                         ('Very well', 'Muy bien'),
                         ('Quite well', 'Bastante bien'),
                         ('Not at all', 'En absoluto'),
                         ('Skill', 'Habilidad/Destreza')]},
    38: {   'dialogue_lines': [   '[[Excuse|Disculpe]], [[may|puedo]] [[I|yo]] [[sit|sentarme]] [[here|aquí]]? '
                                  '[[Is|Está]] [[this|este]] [[seat|asiento]] [[free|libre]]?',
                                  '[[Of|Por]] [[course|supuesto]]! [[Please|Por favor]], [[go|pase]] '
                                  '[[ahead|adelante]].',
                                  '[[Thank|Gracias]] [[you|gracias]]. [[Can|Puedo]] [[I|yo]] [[also|también]] '
                                  '[[open|abrir]] [[the|la]] [[window|ventana]]? [[It|Hace]] [[is|hace]] '
                                  '[[a|bastante]] [[bit|bastante]] [[warm|calor]].',
                                  '[[Sure|Claro]], [[no|sin]] [[problem|problema]] [[at|en]] [[all|absoluto]]. [[Do|Te '
                                  'importa]] [[you|tú]] [[mind|te importa]] [[if|si]] [[I|yo]] [[move|me muevo]] '
                                  '[[my|mi]] [[bag|bolsa]] [[first|primero]]?',
                                  '[[Not|En] [[at|absoluto] [[all|no]]! [[Please|Por favor]], [[take|toma]] '
                                  '[[your|tu]] [[time|tiempo]].'],
            'grammar_patterns': [   ('______ [[I|yo]] [[open|abrir]] [[the|la]] [[window|ventana]]?', 'Can'),
                                    ('______ [[I|yo]] [[use|usar]] [[your|tu]] [[phone|teléfono]]?', 'May'),
                                    (   '[[Do|Te importa]] [[you|tú]] [[mind|te importa]] [[if|si]] [[I|yo]] ______ '
                                        '[[here|aquí]]?',
                                        'sit'),
                                    (   '[[Could|Podría]] [[I|yo]] ______ [[the|la]] [[salt|sal]], [[please|por '
                                        'favor]]?',
                                        'have'),
                                    (   '[[Is|Está]] [[it|eso]] [[OK|bien]] [[if|si]] [[I|yo]] ______ [[the|las]] '
                                        '[[lights|luces]] [[on|encendidas]]?',
                                        'turn'),
                                    (   '[[May|Puede]] [[I|yo]] ______ [[a|una]] [[question|pregunta]], [[please|por '
                                        'favor]]?',
                                        'ask')],
            'learning_outcomes': [   'Ask for permission using Can I...? May I...? Could I...?',
                                     'Respond to requests politely',
                                     'Understand the difference between formal and informal permission phrases'],
            'module': 4,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('To open a window', 'Abrir una ventana'),
                                                        ('To sit down', 'Sentarse'),
                                                        ('To use the phone', 'Usar el teléfono')],
                                         'question_en': '[[What|Qué]] [[does|pide]] [[the|el]] [[speaker|hablante]] '
                                                        '[[ask|pide]] [[first|primero]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('No', 'No'), ('Yes', 'Sí'), ('Not sure', 'No está seguro')],
                                         'question_en': '[[Is|Está]] [[the|el]] [[seat|asiento]] [[free|libre]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ("It's cold", 'Hace frío'),
                                                        ("It's too dark", 'Está muy oscuro'),
                                                        ("It's warm", 'Hace calor')],
                                         'question_en': '[[Why|Por qué]] [[does|quiere]] [[the|el]] '
                                                        '[[speaker|hablante]] [[want|quiere]] [[to|abrir]] '
                                                        '[[open|abrir]] [[the|la]] [[window|ventana]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Close the window', 'Cerrar la ventana'),
                                                        ('Move their bag', 'Mover su bolsa'),
                                                        ('Open the door', 'Abrir la puerta')],
                                         'question_en': '[[What|Qué]] [[does|pide]] [[the|el]] [[other|otro]] '
                                                        '[[person|persona]] [[ask|pide]] [[to|de]] [[do|hacer]] '
                                                        '[[first|primero]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Can I', 'Can I'),
                                                        ('They are the same', 'Son iguales'),
                                                        ('May I', 'May I')],
                                         'question_en': "[[Which|Cuál]] [[is|es]] [[more|más]] [[formal|formal]]: 'Can "
                                                        "I' [[or|o]] 'May I'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('No problem', 'Sin problema'),
                                                        ('Yes, certainly', 'Sí, por supuesto'),
                                                        ("I'm not sure", 'No estoy seguro')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Of course' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Asking for information', 'Pidiendo información'),
                                                        (   'Asking for permission politely',
                                                            'Pidiendo permiso educadamente'),
                                                        ('Giving an order', 'Dando una orden')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Do you mind if...?' "
                                                        '[[express|expresa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Maybe', 'Quizás'),
                                                        ('Yes, definitely', 'Sí, definitivamente'),
                                                        ('No way', 'De ninguna manera')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Certainly' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Request', 'Solicitud'),
                                                        ('Polite', 'Educado'),
                                                        ('Permission', 'Permiso')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Permiso'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Hey!', '¡Oye!'),
                                                        ('Excuse me', 'Disculpe'),
                                                        ('Listen!', '¡Escucha!')],
                                         'question_en': '[[What|Qué]] [[phrase|frase]] [[can|se puede]] [[you|tú]] '
                                                        '[[use|usar]] [[to|para]] [[get|llamar]] [[attention|la '
                                                        'atención]] [[politely|educadamente]]?'}],
            'title': 'Asking for Permission',
            'vocab': [   ('Please', 'Por favor'),
                         ('Excuse me', 'Disculpe'),
                         ('Sorry', 'Lo siento'),
                         ('Of course', 'Por supuesto'),
                         ('Certainly', 'Desde luego'),
                         ('Sure', 'Claro'),
                         ('No problem', 'Sin problema'),
                         ('Permission', 'Permiso'),
                         ('Allow', 'Permitir'),
                         ('Polite', 'Educado/a'),
                         ('Formal', 'Formal'),
                         ('Informal', 'Informal'),
                         ('May', 'Poder (formal)'),
                         ('Mind', 'Importar')]},
    39: {   'dialogue_lines': [   '[[What|Qué]] [[are|tienes]] [[you|tú]] [[doing|planes]] [[this|este]] [[weekend|fin '
                                  'de semana]]?',
                                  "[[I'm|Voy a]] [[going|ir de]] [[hiking|senderismo]] [[in|en]] [[the|el]] "
                                  '[[national|nacional]] [[park|parque]] [[with|con]] [[some|unos]] '
                                  '[[friends|amigos]].',
                                  '[[That|Eso]] [[sounds|suena]] [[wonderful|maravilloso]]! [[Have|Has]] [[you|tú]] '
                                  '[[been|estado]] [[there|allí]] [[before|antes]]?',
                                  '[[Yes|Sí]], [[I|yo]] [[went|fui]] [[last|el año]] [[year|pasado]]. [[The|Las]] '
                                  '[[mountain|las montañas]] [[views|vistas de las montañas]] [[are|son]] '
                                  '[[breathtaking|impresionantes]].',
                                  '[[I|Yo]] [[am|estoy]] [[thinking|pensando]] [[of|en]] [[going|ir de]] '
                                  '[[camping|acampada]] [[soon|pronto]]. [[Do|Has]] [[you|tú]] [[have|tienes]] '
                                  '[[any|algún]] [[advice|consejo]]?'],
            'grammar_patterns': [   (   '[[We|Nosotros]] [[are|vamos a]] ______ [[next|el próximo]] [[weekend|fin de '
                                        'semana]].',
                                        'going camping'),
                                    (   '[[I|Yo]] [[am|voy a]] ______ [[in|en]] [[the|el]] [[lake|lago]] '
                                        '[[tomorrow|mañana]].',
                                        'going fishing'),
                                    (   '[[She|Ella]] [[is|va a]] ______ [[in|en]] [[the|las]] [[mountains|montañas]] '
                                        '[[this|este]] [[summer|verano]].',
                                        'going hiking'),
                                    (   '[[Are|Vais]] [[you|vosotros]] ______ [[to|el]] [[the|el]] [[coast|litoral]] '
                                        '[[next|próximas]] [[week|semana]]?',
                                        'going'),
                                    (   '[[He|Él]] [[loves|le encanta]] ______ — [[he|él]] [[goes|va]] [[every|cada]] '
                                        '[[weekend|fin de semana]].',
                                        'cycling'),
                                    (   '[[We|Nosotros]] [[plan|planeamos]] [[to|ir de]] [[go|ir de]] ______ [[in|en]] '
                                        '[[the|la]] [[Alps|los Alpes]].',
                                        'skiing')],
            'learning_outcomes': [   'Name outdoor activities in English',
                                     "Use Present Continuous for future plans: 'I am going...'",
                                     'Describe outdoor experiences and nature'],
            'module': 4,
            'reading_questions': [   {   'correct_idx': 2,
                                         'options': [   ('Camping', 'Acampada'),
                                                        ('Cycling', 'Ciclismo'),
                                                        ('Hiking', 'Senderismo')],
                                         'question_en': '[[What|Qué]] [[is|va a hacer]] [[the|el]] '
                                                        '[[speaker|hablante]] [[doing|va a hacer]] [[this|este]] '
                                                        '[[weekend|fin de semana]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('The forest', 'El bosque'),
                                                        ('The national park', 'El parque nacional'),
                                                        (   'The mountains near the city',
                                                            'Las montañas cerca de la ciudad')],
                                         'question_en': '[[Where|Dónde]] [[is|va]] [[the|el]] [[speaker|hablante]] '
                                                        '[[going|va]] [[for|a]] [[the|la]] [[hike|caminata]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('No', 'No'),
                                                        ('Yes, last year', 'Sí, el año pasado'),
                                                        ('Not mentioned', 'No mencionado')],
                                         'question_en': '[[Has|Ha]] [[the|el]] [[speaker|hablante]] [[been|estado]] '
                                                        '[[there|allí]] [[before|antes]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Beautiful but ordinary', 'Bonitas pero normales'),
                                                        ('Breathtaking', 'Impresionantes'),
                                                        ('Not very good', 'No muy buenas')],
                                         'question_en': '[[How|Cómo]] [[are|se describen]] [[the|las]] '
                                                        '[[views|vistas]] [[described|describen]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Skiing', 'Esquiar'),
                                                        ('Fishing', 'Pescar'),
                                                        ('Camping', 'Acampar')],
                                         'question_en': '[[What|Qué]] [[is|está pensando]] [[the|el]] '
                                                        '[[second|segundo]] [[speaker|hablante]] [[thinking|pensando]] '
                                                        '[[of|en]] [[doing|hacer]] [[soon|pronto]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Past Simple', 'Pasado simple'),
                                                        ('Present Simple', 'Presente simple'),
                                                        (   'Present Continuous (going to)',
                                                            'Presente continuo (going to)')],
                                         'question_en': '[[What|Qué]] [[tense|tiempo]] [[is|se usa]] [[used|usa]] '
                                                        '[[for|para]] [[future|planes futuros]] [[plans|planes '
                                                        'futuros]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Camping', 'Acampada'),
                                                        ('Hiking', 'Senderismo'),
                                                        ('Climbing', 'Escalada')],
                                         'question_en': '[[What|Qué]] [[word|palabra]] [[means|significa]] '
                                                        "'Senderismo'?"},
                                     {   'correct_idx': 2,
                                         'options': [('River', 'Río'), ('Lake', 'Lago'), ('Forest', 'Bosque')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Bosque'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Boring', 'Aburrido'),
                                                        ('Extremely beautiful', 'Extremadamente bello'),
                                                        ('Very dangerous', 'Muy peligroso')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Breathtaking' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Holiday', 'Vacaciones'),
                                                        (   'Exciting or risky experience',
                                                            'Experiencia emocionante o arriesgada'),
                                                        ('Sport', 'Deporte')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Adventure' "
                                                        '[[mean|significa]]?'}],
            'title': 'Outdoor Activities',
            'vocab': [   ('Hiking', 'Senderismo'),
                         ('Camping', 'Acampada'),
                         ('Cycling', 'Ciclismo'),
                         ('Fishing', 'Pesca'),
                         ('Climbing', 'Escalada'),
                         ('Skiing', 'Esquí'),
                         ('Surfing', 'Surf'),
                         ('Kayaking', 'Kayak'),
                         ('Nature', 'Naturaleza'),
                         ('Forest', 'Bosque'),
                         ('River', 'Río'),
                         ('Mountain', 'Montaña'),
                         ('Lake', 'Lago'),
                         ('Adventure', 'Aventura')]},
    40: {   'dialogue_lines': [   "[[Let's|Vamos a]] [[talk|hablar]] [[about|sobre]] [[your|tus]] "
                                  '[[abilities|habilidades]] [[and|e]] [[interests|intereses]].',
                                  '[[Sure|Claro]]! [[I|Yo]] [[can|puedo]] [[play|tocar]] [[the|la]] '
                                  '[[guitar|guitarra]] [[and|y]] [[I|yo]] [[go|voy]] [[hiking|de senderismo]] '
                                  '[[quite|bastante]] [[often|a menudo]].',
                                  '[[How|Con qué]] [[often|frecuencia]] [[do|vas]] [[you|tú]] [[go|vas]] [[hiking|de '
                                  'senderismo]]?',
                                  '[[Usually|Normalmente]] [[once|una vez]] [[or|o]] [[twice|dos veces]] [[a|al]] '
                                  '[[month|mes]], [[but|pero]] [[never|nunca]] [[in|en]] [[winter|invierno]] '
                                  "[[because|porque]] [[it's|hace]] [[too|demasiado]] [[cold|frío]].",
                                  '[[Can|Puedo]] [[I|yo]] [[ask|preguntarte]] — [[what|qué]] [[sport|deporte]] '
                                  '[[do|practicas]] [[you|tú]] [[do|practicas]]?'],
            'grammar_patterns': [   (   "[[I|Yo]] ______ [[swim|nadar]] [[but|pero]] [[I|yo]] [[can't|no puedo]] "
                                        '[[dive|bucear]].',
                                        'can'),
                                    (   '[[She|Ella]] ______ [[plays|toca]] [[the|la]] [[piano|piano]] [[every|cada]] '
                                        '[[day|día]].',
                                        'usually'),
                                    (   '[[I|Yo]] [[love|me encanta]] [[cycling|el ciclismo]] ______ [[it|es]] '
                                        '[[is|es]] [[relaxing|relajante]].',
                                        'because'),
                                    ('[[May|Puedo]] [[I|yo]] ______ [[a|una]] [[question|pregunta]]?', 'ask'),
                                    (   '[[He|Él]] [[is|va a]] ______ [[camping|acampar]] [[this|este]] '
                                        '[[summer|verano]].',
                                        'going'),
                                    (   '[[Do|Practicas]] [[you|tú]] [[play|practicas]] ______ [[or|o]] '
                                        '[[tennis|tenis]]?',
                                        'football')],
            'learning_outcomes': [   'Review Module 4: abilities, sports, frequency, conjunctions, activities, '
                                     'permission',
                                     'Combine can, adverbs of frequency, and conjunctions',
                                     'Produce extended descriptions of abilities and hobbies'],
            'module': 4,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [('Violin', 'Violín'), ('Guitar', 'Guitarra'), ('Piano', 'Piano')],
                                         'question_en': '[[What|Qué]] [[can|puede]] [[the|el]] [[speaker|hablante]] '
                                                        '[[play|tocar]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Camping', 'Acampada'),
                                                        ('Hiking', 'Senderismo'),
                                                        ('Skiing', 'Esquí')],
                                         'question_en': '[[What|Qué]] [[outdoor|actividad al aire libre]] '
                                                        '[[activity|actividad al aire libre]] [[does|practica]] '
                                                        '[[the|el]] [[speaker|hablante]] [[do|practica]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Every week', 'Cada semana'),
                                                        ('Once or twice a month', 'Una o dos veces al mes'),
                                                        ('Every day', 'Cada día')],
                                         'question_en': '[[How|Con qué]] [[often|frecuencia]] [[does|va]] [[the|el]] '
                                                        '[[speaker|hablante]] [[go|va]] [[hiking|de senderismo]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('In summer', 'En verano'),
                                                        ('In spring', 'En primavera'),
                                                        ('In winter', 'En invierno')],
                                         'question_en': '[[When|Cuándo]] [[does|va]] [[the|el]] [[speaker|hablante]] '
                                                        '[[never|nunca]] [[go|va]] [[hiking|de senderismo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Too busy', 'Demasiado ocupado'),
                                                        ('Too cold', 'Demasiado frío'),
                                                        ('No friends to go with', 'Sin amigos con quien ir')],
                                         'question_en': "[[Why|Por qué]] [[doesn't|no]] [[the|el]] "
                                                        '[[speaker|hablante]] [[go|va]] [[in|en]] '
                                                        '[[winter|invierno]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Do', 'Do'), ('Make', 'Make'), ('Can', 'Can')],
                                         'question_en': '[[Which|Cuál]] [[verb|verbo]] [[is|se usa]] [[used|usa]] '
                                                        '[[for|para]] [[ability|habilidad]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('Go', 'Ir a'), ('Play', 'Jugar'), ('Do', 'Hacer')],
                                         'question_en': '[[Which|Cuál]] [[verb|verbo]] [[goes|va]] [[with|con]] '
                                                        "'football'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Very well', 'Muy bien'),
                                                        ('Quite well', 'Bastante bien'),
                                                        ('Not at all', 'En absoluto')],
                                         'question_en': "[[Which|Cuál]] [[adverb|adverbio]] [[means|significa]] 'En "
                                                        "absoluto'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Can I...?', '¿Puedo...?'),
                                                        ('May I...?', '¿Podría...?'),
                                                        ('Do I...?', '¿Hago...?')],
                                         'question_en': '[[How|Cómo]] [[do|pides]] [[you|tú]] [[ask|pides]] '
                                                        '[[formally|formalmente]] [[for|por]] [[permission|permiso]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('And', 'Y'), ('But', 'Pero'), ('Because', 'Porque')],
                                         'question_en': '[[What|Qué]] [[conjunction|conjunción]] [[gives|da]] '
                                                        '[[a|una]] [[reason|razón]]?'}],
            'title': 'Module 4 Review & Assessment',
            'vocab': [   ('Ability', 'Habilidad'),
                         ('Hobby', 'Afición'),
                         ('Sport', 'Deporte'),
                         ('Frequency', 'Frecuencia'),
                         ('Permission', 'Permiso'),
                         ('Outdoor', 'Al aire libre'),
                         ('Skill', 'Destreza'),
                         ('Talent', 'Talento'),
                         ('Interest', 'Interés'),
                         ('Practice', 'Práctica'),
                         ('Competition', 'Competición'),
                         ('Always', 'Siempre'),
                         ('Because', 'Porque'),
                         ('Can', 'Poder')]},
    41: {   'dialogue_lines': [   '[[Good|Buenos]] [[morning|días]]. [[Can|Puedo]] [[I|yo]] [[see|ver]] [[your|su]] '
                                  '[[passport|pasaporte]] [[and|y]] [[ticket|billete]], [[please|por favor]]?',
                                  '[[Here|Aquí]] [[you|tiene]] [[are|tiene]] [[you|tiene]].',
                                  '[[Are|Va a]] [[you|usted]] [[checking|facturar]] [[in|en]] [[any|algún]] '
                                  '[[bags|equipaje]]?',
                                  '[[Yes|Sí]], [[just|solo]] [[one|una]] [[suitcase|maleta]].',
                                  '[[Your|Su]] [[gate|puerta de embarque]] [[is|es]] [[B14|B14]]. [[Boarding|El '
                                  'embarque]] [[begins|comienza]] [[at|a]] [[ten|las diez]] [[thirty|y media]]. '
                                  '[[Have|Buen]] [[a|Buen]] [[good|buen]] [[flight|vuelo]]!'],
            'grammar_patterns': [   (   '[[You|Usted]] ______ [[show|mostrar]] [[your|su]] [[passport|pasaporte]] '
                                        '[[at|en]] [[check-in|facturación]].',
                                        'must'),
                                    (   '[[You|Usted]] ______ [[arrive|llegar]] [[at|en]] [[the|el]] '
                                        '[[airport|aeropuerto]] [[two|dos]] [[hours|horas]] [[early|antes]].',
                                        'should'),
                                    (   '[[Passengers|Los pasajeros]] ______ [[go|pasar]] [[through|por]] '
                                        '[[security|el control de seguridad]].',
                                        'must'),
                                    (   '[[The|El]] [[flight|vuelo]] ______ [[delayed|retrasado]] [[by|por]] '
                                        '[[thirty|treinta]] [[minutes|minutos]].',
                                        'is'),
                                    (   '[[You|Usted]] ______ [[carry|llevar]] [[liquids|líquidos]] [[in|en]] '
                                        '[[your|su]] [[hand|mano]] [[luggage|equipaje]].',
                                        "shouldn't"),
                                    ('[[Where|Dónde]] [[is|está]] ______ [[Gate|la puerta]] [[B12|B12]]?', 'the')],
            'learning_outcomes': [   'Use airport vocabulary in English',
                                     'Use must/should for obligations and recommendations',
                                     'Navigate basic airport interactions'],
            'module': 5,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Boarding pass only', 'Solo el pase de embarque'),
                                                        ('Passport and ticket', 'Pasaporte y billete'),
                                                        ('ID and credit card', 'DNI y tarjeta de crédito')],
                                         'question_en': '[[What|Qué]] [[does|pide]] [[the|el]] [[check-in|auxiliar de '
                                                        'check-in]] [[agent|auxiliar]] [[ask|pide]] [[for|por]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('None', 'Ninguno'),
                                                        ('Two suitcases', 'Dos maletas'),
                                                        ('One suitcase', 'Una maleta')],
                                         'question_en': '[[How|Cuánto]] [[many|cuánto]] [[bags|equipaje]] [[is|va a '
                                                        'facturar]] [[the|el]] [[passenger|pasajero]] '
                                                        '[[checking|facturar]] [[in|en]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('B12', 'B12'), ('B14', 'B14'), ('A14', 'A14')],
                                         'question_en': '[[What|Cuál]] [[gate|puerta]] [[is|es]] [[the|la]] '
                                                        "[[passenger's|del pasajero]] [[gate|puerta]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ("At ten o'clock", 'A las diez en punto'),
                                                        ('At ten thirty', 'A las diez y media'),
                                                        ("At eleven o'clock", 'A las once en punto')],
                                         'question_en': '[[When|Cuándo]] [[does|comienza]] [[boarding|el embarque]] '
                                                        '[[begin|comienza]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('Should', 'Debería'), ('Must', 'Debe'), ('Can', 'Puede')],
                                         'question_en': '[[Which|Cuál]] [[modal|modal]] [[verb|verbo]] '
                                                        '[[expresses|expresa]] [[obligation|obligación]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Strong obligation', 'Obligación fuerte'),
                                                        ('Advice/recommendation', 'Consejo/recomendación'),
                                                        ('Prohibition', 'Prohibición')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Should' "
                                                        '[[express|expresa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('A travel ticket', 'Un billete de viaje'),
                                                        (   'An official travel document',
                                                            'Un documento oficial de viaje'),
                                                        ('A boarding pass', 'Un pase de embarque')],
                                         'question_en': "[[What|Qué]] [[is|es]] [[a|un]] 'Passport'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Ticket', 'Billete'),
                                                        ('Luggage', 'Equipaje'),
                                                        ('Passport', 'Pasaporte')],
                                         'question_en': '[[What|Qué]] [[word|palabra]] [[means|significa]] '
                                                        "'Equipaje'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Arrival', 'Llegada'),
                                                        ('Departure/Leaving', 'Salida'),
                                                        ('Delay', 'Retraso')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Departure' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Arrival process', 'Proceso de llegada'),
                                                        (   'Process of registering for a flight',
                                                            'Proceso de registro para el vuelo'),
                                                        ('Security check', 'Control de seguridad')],
                                         'question_en': "[[What|Qué]] [[is|es]] [[the|el]] 'Check-in'?"}],
            'title': 'At the Airport',
            'vocab': [   ('Passport', 'Pasaporte'),
                         ('Ticket', 'Billete'),
                         ('Check-in', 'Facturación'),
                         ('Gate', 'Puerta de embarque'),
                         ('Boarding', 'Embarque'),
                         ('Flight', 'Vuelo'),
                         ('Departure', 'Salida'),
                         ('Arrival', 'Llegada'),
                         ('Luggage', 'Equipaje'),
                         ('Customs', 'Aduana'),
                         ('Security', 'Control de seguridad'),
                         ('Terminal', 'Terminal'),
                         ('Passenger', 'Pasajero'),
                         ('Delay', 'Retraso')]},
    42: {   'dialogue_lines': [   '[[How|Cómo]] [[do|vas]] [[you|tú]] [[usually|normalmente]] [[travel|viajas]] '
                                  '[[to|al]] [[work|trabajo]]?',
                                  "[[I|Yo]] [[take|tomo]] [[the|el]] [[subway|metro]]. [[It's|Es]] [[much|mucho]] "
                                  '[[faster|más rápido]] [[than|que]] [[the|el]] [[bus|autobús]] [[in|en]] [[the|la]] '
                                  '[[city|ciudad]].',
                                  '[[Do|Tienes]] [[you|tú]] [[have|tienes]] [[a|un]] [[car|coche]]?',
                                  '[[Yes|Sí]], [[but|pero]] [[I|yo]] [[only|solo]] [[use|uso]] [[it|lo]] [[for|para]] '
                                  '[[long|viajes]] [[trips|largos]] [[or|o]] [[at|los]] [[weekends|fines de semana]]. '
                                  '[[Parking|Aparcar]] [[is|es]] [[very|muy]] [[expensive|caro]] [[here|aquí]].',
                                  '[[I|Yo]] [[agree|estoy de acuerdo]]. [[I|Yo]] [[prefer|prefiero]] [[cycling|ir en '
                                  "bicicleta]]. [[It's|Es]] [[free|gratis]] [[and|y]] [[good|bueno]] [[for|para]] "
                                  '[[the|el]] [[environment|medioambiente]].'],
            'grammar_patterns': [   ('[[I|Yo]] [[go|voy]] [[to|al]] [[work|trabajo]] ______ [[bus|el autobús]].', 'by'),
                                    (   '[[She|Ella]] [[takes|toma]] ______ [[subway|el metro]] [[every|cada]] '
                                        '[[day|día]].',
                                        'the'),
                                    (   '[[We|Nosotros]] [[travelled|viajamos]] [[to|a]] [[Paris|París]] ______ '
                                        '[[train|tren]].',
                                        'by'),
                                    (   '[[How|Cómo]] [[do|vas]] [[you|tú]] [[get|vas]] [[to|al]] [[school|colegio]] — '
                                        '______ [[bike|bicicleta]] [[or|o]] [[bus|autobús]]?',
                                        'by'),
                                    (   "[[Let's|Vamos a]] ______ [[a|un]] [[taxi|taxi]] [[to|al]] [[the|el]] "
                                        '[[airport|aeropuerto]].',
                                        'take'),
                                    (   '[[The|El]] [[train|tren]] ______ [[from|desde]] [[platform|el andén]] '
                                        '[[three|tres]].',
                                        'departs')],
            'learning_outcomes': [   'Name types of transport in English',
                                     "Use 'by + transport' to express how you travel",
                                     'Talk about daily commute and transport preferences'],
            'module': 5,
            'reading_questions': [   {   'correct_idx': 2,
                                         'options': [   ('By bus', 'En autobús'),
                                                        ('By car', 'En coche'),
                                                        ('By subway', 'En metro')],
                                         'question_en': '[[How|Cómo]] [[does|va]] [[the|el]] [[first|primer]] '
                                                        '[[speaker|hablante]] [[travel|va]] [[to|al]] '
                                                        '[[work|trabajo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ("It's cheaper", 'Es más barato'),
                                                        ("It's faster", 'Es más rápido'),
                                                        ("It's more comfortable", 'Es más cómodo')],
                                         'question_en': '[[Why|Por qué]] [[is|es]] [[the|el]] [[subway|metro]] '
                                                        '[[preferred|preferido]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('No', 'No'), ('Yes', 'Sí'), ('Not mentioned', 'No mencionado')],
                                         'question_en': '[[Does|Tiene]] [[the|el]] [[first|primer]] '
                                                        '[[speaker|hablante]] [[have|tiene]] [[a|un]] [[car|coche]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Every day', 'Cada día'),
                                                        ('Long trips or weekends', 'Viajes largos o fines de semana'),
                                                        ('Only on Mondays', 'Solo los lunes')],
                                         'question_en': '[[When|Cuándo]] [[does|usa]] [[the|el]] [[speaker|hablante]] '
                                                        '[[use|usa]] [[their|su]] [[car|coche]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Traffic jams', 'Atascos'),
                                                        ('Parking is expensive', 'Aparcar es caro'),
                                                        ('No car park nearby', 'Sin aparcamiento cercano')],
                                         'question_en': "[[Why|Por qué]] [[doesn't|no]] [[the|el]] "
                                                        '[[speaker|hablante]] [[use|usa]] [[the|el]] [[car|coche]] '
                                                        '[[much|mucho]] [[in|en]] [[the|la]] [[city|ciudad]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Walking', 'Caminar'),
                                                        ('Cycling', 'Bicicleta'),
                                                        ('Train', 'Tren')],
                                         'question_en': '[[What|Qué]] [[transport|transporte]] [[does|prefiere]] '
                                                        '[[the|el]] [[second|segundo]] [[speaker|hablante]] '
                                                        '[[prefer|prefiere]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Fast and safe', 'Rápido y seguro'),
                                                        (   'Free and good for environment',
                                                            'Gratis y bueno para el medioambiente'),
                                                        ('Easy and comfortable', 'Fácil y cómodo')],
                                         'question_en': '[[What|Qué]] [[are|son]] [[two|dos]] [[benefits|ventajas]] '
                                                        '[[of|de]] [[cycling|ir en bicicleta]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('in', 'en (interior)'),
                                                        ('on', 'en (superficie)'),
                                                        ('by', 'en (medio de transporte)')],
                                         'question_en': '[[Which|Cuál]] [[preposition|preposición]] [[is|se usa]] '
                                                        '[[used|usa]] [[with|con]] [[transport|transporte]]?'},
                                     {   'correct_idx': 0,
                                         'options': [   ('Underground train', 'Metro (tren subterráneo)'),
                                                        ('Surface train', 'Tren de superficie'),
                                                        ('Bus', 'Autobús')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Subway' [[mean|significa]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('A type of bus', 'Un tipo de autobús'),
                                                        (   'A boat that transports people',
                                                            'Un barco que transporta personas'),
                                                        ('A fast train', 'Un tren rápido')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Ferry' [[mean|significa]]?"}],
            'title': 'Transport',
            'vocab': [   ('Bus', 'Autobús'),
                         ('Train', 'Tren'),
                         ('Plane', 'Avión'),
                         ('Taxi', 'Taxi'),
                         ('Bicycle', 'Bicicleta'),
                         ('Car', 'Coche'),
                         ('Subway', 'Metro'),
                         ('Ferry', 'Ferry'),
                         ('Tram', 'Tranvía'),
                         ('Motorcycle', 'Moto'),
                         ('Station', 'Estación'),
                         ('Stop', 'Parada'),
                         ('Ticket', 'Billete'),
                         ('Schedule', 'Horario')]},
    43: {   'dialogue_lines': [   "[[I'm|Estoy]] [[planning|planeando]] [[a|un]] [[trip|viaje]] [[to|a]] "
                                  '[[Japan|Japón]] [[next|el próximo]] [[year|año]].',
                                  '[[Amazing|Increíble]]! [[How|Cuánto]] [[long|tiempo]] [[do|vas a]] [[you|tú]] '
                                  '[[plan|plan]] [[to|a]] [[stay|quedarte]]?',
                                  '[[About|Alrededor de]] [[two|dos]] [[weeks|semanas]]. [[I|Yo]] [[want|quiero]] '
                                  '[[to|visitar]] [[visit|visitar]] [[Tokyo|Tokio]] [[and|y]] [[Kyoto|Kioto]].',
                                  "[[That's|Es]] [[fantastic|fantástico]]! [[Have|Has]] [[you|tú]] "
                                  '[[booked|reservado]] [[your|tus]] [[flights|vuelos]] [[yet|ya]]?',
                                  "[[Not|Todavía]] [[yet|no]]. [[I'm|Estoy]] [[still|todavía]] "
                                  '[[exploring|explorando]] [[routes|rutas]] [[and|y]] [[comparing|comparando]] '
                                  '[[prices|precios]].'],
            'grammar_patterns': [   (   "[[The|El]] [[train|tren]] ______ [[at|a]] [[nine|las nueve]] [[o'clock|en "
                                        'punto]].',
                                        'arrives'),
                                    (   '[[I|Yo]] [[always|siempre]] ______ [[my|mis]] [[hotels|hoteles]] [[in|con]] '
                                        '[[advance|antelación]].',
                                        'book'),
                                    (   '[[The|El]] [[flight|vuelo]] ______ [[from|desde]] [[Terminal|la Terminal]] '
                                        '[[B|B]].',
                                        'departs'),
                                    (   '[[We|Nosotros]] [[plan|planeamos]] [[to|visitar]] ______ [[Rome|Roma]] '
                                        '[[next|el próximo]] [[summer|verano]].',
                                        'visit'),
                                    (   '[[How|Cuánto]] [[long|tiempo]] [[do|te quedas]] [[you|tú]] ______ [[in|en]] '
                                        '[[each|cada]] [[city|ciudad]]?',
                                        'stay'),
                                    (   '[[I|Yo]] [[love|me encanta]] [[to|explorar]] ______ [[new|nuevas]] '
                                        '[[cities|ciudades]] [[on|a]] [[foot|pie]].',
                                        'explore')],
            'learning_outcomes': [   'Use common travel verbs in English',
                                     'Talk about travel plans and itineraries',
                                     'Use Present Simple for schedules and future plans'],
            'module': 5,
            'reading_questions': [   {   'correct_idx': 2,
                                         'options': [('China', 'China'), ('Korea', 'Corea'), ('Japan', 'Japón')],
                                         'question_en': '[[Where|A dónde]] [[is|va]] [[the|el]] [[speaker|hablante]] '
                                                        '[[planning|planeando ir]] [[to|a]] [[travel|viajar]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('This summer', 'Este verano'),
                                                        ('Next year', 'El próximo año'),
                                                        ('Next month', 'El próximo mes')],
                                         'question_en': '[[When|Cuándo]] [[is|va]] [[the|el]] [[speaker|hablante]] '
                                                        '[[planning|a ir]] [[to|a]] [[go|ir]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('One week', 'Una semana'),
                                                        ('Three weeks', 'Tres semanas'),
                                                        ('Two weeks', 'Dos semanas')],
                                         'question_en': '[[How|Cuánto]] [[long|tiempo]] [[does|quiere]] [[the|el]] '
                                                        '[[speaker|hablante]] [[want|quiere]] [[to|quedarse]] '
                                                        '[[stay|quedarse]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Osaka and Kyoto', 'Osaka y Kioto'),
                                                        ('Tokyo and Kyoto', 'Tokio y Kioto'),
                                                        ('Tokyo and Osaka', 'Tokio y Osaka')],
                                         'question_en': '[[Which|Cuáles]] [[cities|ciudades]] [[does|quiere]] '
                                                        '[[the|el]] [[speaker|hablante]] [[want|quiere]] '
                                                        '[[to|visitar]] [[visit|visitar]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Yes', 'Sí'),
                                                        ('No, not yet', 'No, todavía no'),
                                                        ('Yes, and the hotel too', 'Sí, y también el hotel')],
                                         'question_en': '[[Has|Ha]] [[the|el]] [[speaker|hablante]] '
                                                        '[[booked|reservado]] [[the|los]] [[flights|vuelos]] '
                                                        '[[yet|ya]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Saving money', 'Ahorrando dinero'),
                                                        (   'Exploring routes and comparing prices',
                                                            'Explorando rutas y comparando precios'),
                                                        ('Learning Japanese', 'Aprendiendo japonés')],
                                         'question_en': '[[What|Qué]] [[is|está]] [[the|el]] [[speaker|hablante]] '
                                                        '[[still|todavía]] [[doing|haciendo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Read', 'Leer'),
                                                        ('Reserve/Make a reservation', 'Reservar'),
                                                        ('Pay', 'Pagar')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Book' [[mean|significa]] "
                                                        '[[in|en]] [[travel|viaje]] [[context|contexto]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Arrive', 'Llegar'),
                                                        ('Leave/Depart', 'Partir'),
                                                        ('Stay', 'Quedarse')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Depart' [[mean|significa]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Trip is longer', 'Trip es más largo'),
                                                        (   'Journey is the travel, trip is shorter',
                                                            'Journey es el recorrido, trip es corto'),
                                                        ('They are the same', 'Son lo mismo')],
                                         'question_en': '[[What|Qué]] [[is|es]] [[the|la]] [[difference|diferencia]] '
                                                        "[[between|entre]] 'Trip' [[and|y]] 'Journey'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Stay in one place', 'Quedarse en un lugar'),
                                                        ('Discover new places', 'Descubrir nuevos lugares'),
                                                        ('Book in advance', 'Reservar con antelación')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Explore' "
                                                        '[[mean|significa]]?'}],
            'title': 'Travel Verbs',
            'vocab': [   ('Arrive', 'Llegar'),
                         ('Depart', 'Salir/Partir'),
                         ('Visit', 'Visitar'),
                         ('Stay', 'Quedarse'),
                         ('Explore', 'Explorar'),
                         ('Book', 'Reservar'),
                         ('Pack', 'Empacar/Hacer la maleta'),
                         ('Travel', 'Viajar'),
                         ('Journey', 'Viaje (recorrido)'),
                         ('Trip', 'Viaje (corto)'),
                         ('Destination', 'Destino'),
                         ('Route', 'Ruta'),
                         ('Return', 'Volver'),
                         ('Connect', 'Hacer escala')]},
    44: {   'dialogue_lines': [   "[[What's|Cómo está]] [[the|el]] [[weather|tiempo]] [[like|como]] [[today|hoy]]?",
                                  "[[It's|Está]] [[quite|bastante]] [[cold|frío]] [[and|y]] [[cloudy|nublado]]. "
                                  "[[The|La]] [[forecast|previsión]] [[says|dice]] [[it's|que va a]] [[going|llover]] "
                                  '[[to|a]] [[rain|llover]] [[this|esta]] [[afternoon|tarde]].',
                                  '[[Oh|Oh]] [[no|no]]! [[I|Yo]] [[wanted|quería]] [[to|ir al]] [[go|ir al]] '
                                  '[[park|parque]].',
                                  '[[Maybe|Quizás]] [[go|ve]] [[in|por]] [[the|la]] [[morning|mañana]] [[when|cuando]] '
                                  '[[it|hace]] [[is|hace]] [[still|todavía]] [[sunny|sol]]. [[The|Las]] '
                                  '[[temperatures|temperaturas]] [[are|serán]] [[around|alrededor de]] '
                                  '[[twenty|veinte]] [[degrees|grados]].',
                                  "[[That's|Es]] [[a|una]] [[good|buena]] [[idea|idea]]! [[I'll|Me llevaré]] "
                                  '[[take|llevaré]] [[a|un]] [[light|ligero]] [[jacket|abrigo]] [[just|por si]] '
                                  '[[in|acaso]] [[case|acaso]].'],
            'grammar_patterns': [   ('[[It|Hace]] ______ [[today|hoy]].', 'is sunny'),
                                    (   '[[It|Hace]] [[is|hace]] [[very|mucho]] ______ — [[bring|trae]] [[a|un]] '
                                        '[[jacket|abrigo]]!',
                                        'cold'),
                                    (   "[[What's|Cómo está]] [[the|el]] [[weather|tiempo]] ______ [[in|en]] "
                                        '[[London|Londres]]?',
                                        'like'),
                                    (   '[[It|Está]] [[is|está]] [[going|va a]] [[to|a]] ______ [[tomorrow|mañana]].',
                                        'rain'),
                                    (   '[[The|La]] [[temperature|temperatura]] ______ [[thirty|treinta]] '
                                        '[[degrees|grados]] [[today|hoy]].',
                                        'is'),
                                    (   "[[Don't|No]] [[forget|olvides]] [[your|tu]] ______ — [[it's|va a]] "
                                        '[[going|llover]] [[to|a]] [[rain|llover]].',
                                        'umbrella')],
            'learning_outcomes': [   "Describe the weather using adjectives and 'It is...'",
                                     'Talk about weather forecasts and conditions',
                                     'Suggest activities based on weather'],
            'module': 5,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Hot and sunny', 'Caluroso y soleado'),
                                                        ('Cold and cloudy', 'Frío y nublado'),
                                                        ('Windy and rainy', 'Ventoso y lluvioso')],
                                         'question_en': '[[What|Cómo está]] [[is|está]] [[the|el]] [[weather|tiempo]] '
                                                        '[[like|como]] [[today|hoy]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Sunny', 'Soleado'),
                                                        ('It will snow', 'Va a nevar'),
                                                        ('It will rain', 'Va a llover')],
                                         'question_en': '[[What|Qué]] [[does|dice]] [[the|la]] [[weather|previsión]] '
                                                        '[[forecast|del tiempo]] [[say|dice]] [[about|sobre]] '
                                                        '[[the|la]] [[afternoon|tarde]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Go shopping', 'Ir de compras'),
                                                        ('Go to the park', 'Ir al parque'),
                                                        ('Go to the cinema', 'Ir al cine')],
                                         'question_en': '[[What|Qué]] [[did|quería hacer]] [[the|el]] '
                                                        '[[speaker|hablante]] [[want|quería]] [[to|hacer]] '
                                                        '[[do|hacer]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('In the afternoon', 'Por la tarde'),
                                                        ('In the morning', 'Por la mañana'),
                                                        ('In the evening', 'Por la noche')],
                                         'question_en': '[[When|Cuándo]] [[is|es]] [[it|está]] [[still|todavía]] '
                                                        '[[sunny|soleado]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('About fifteen', 'Alrededor de quince'),
                                                        ('About thirty', 'Alrededor de treinta'),
                                                        ('About twenty degrees', 'Alrededor de veinte grados')],
                                         'question_en': '[[What|Cuántos]] [[are|serán]] [[the|los]] '
                                                        '[[temperatures|grados]] [[in|por]] [[the|la]] '
                                                        '[[morning|mañana]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('An umbrella', 'Un paraguas'),
                                                        ('A light jacket', 'Un abrigo ligero'),
                                                        ('A raincoat', 'Un impermeable')],
                                         'question_en': '[[What|Qué]] [[does|va a llevarse]] [[the|el]] '
                                                        '[[speaker|hablante]] [[take|va a llevar]] [[just|por si]] '
                                                        '[[in|acaso]] [[case|acaso]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Current weather', 'Tiempo actual'),
                                                        ('Weather prediction', 'Previsión del tiempo'),
                                                        ('Temperature reading', 'Lectura de temperatura')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Forecast' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Foggy', 'Neblinoso'),
                                                        ('Stormy', 'Tormentoso'),
                                                        ('Cloudy', 'Nublado')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Nublado'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('The weather is...', 'El tiempo es...'),
                                                        ('It is + weather adjective', 'It is + adjetivo del tiempo'),
                                                        ('Weather + verb', 'El tiempo + verbo')],
                                         'question_en': '[[What|Qué]] [[structure|estructura]] [[is|se usa]] '
                                                        '[[used|usa]] [[for|para]] [[weather|el tiempo]] [[in|en]] '
                                                        '[[English|inglés]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Raincoat', 'Impermeable'),
                                                        ('Umbrella', 'Paraguas'),
                                                        ('Hat', 'Sombrero')],
                                         'question_en': '[[What|Qué]] [[word|palabra]] [[means|significa]] '
                                                        "'Paraguas'?"}],
            'title': 'The Weather',
            'vocab': [   ('Sunny', 'Soleado'),
                         ('Rainy', 'Lluvioso'),
                         ('Cloudy', 'Nublado'),
                         ('Snowy', 'Nevado'),
                         ('Hot', 'Caluroso'),
                         ('Cold', 'Frío'),
                         ('Windy', 'Ventoso'),
                         ('Foggy', 'Neblinoso'),
                         ('Stormy', 'Tormentoso'),
                         ('Temperature', 'Temperatura'),
                         ('Forecast', 'Previsión del tiempo'),
                         ('Degrees', 'Grados'),
                         ('Umbrella', 'Paraguas'),
                         ('Raincoat', 'Impermeable')]},
    45: {   'dialogue_lines': [   "[[What's|Cuál es]] [[your|tu]] [[favourite|estación favorita]] [[season|estación]] "
                                  '[[and|y]] [[why|por qué]]?',
                                  '[[I|Yo]] [[love|me encanta]] [[autumn|el otoño]] [[because|porque]] [[the|los]] '
                                  '[[colours|colores]] [[are|son]] [[so|tan]] [[beautiful|bonitos]] — [[red|rojos]], '
                                  '[[orange|naranjas]] [[and|y]] [[yellow|amarillos]].',
                                  "[[That's|Es]] [[lovely|bonito]]! [[What|Qué]] [[about|de]] [[the|el]] "
                                  '[[weather|tiempo]]?',
                                  "[[It's|Es]] [[usually|normalmente]] [[mild|templado]] — [[not|ni]] "
                                  '[[too|demasiado]] [[hot|caluroso]] [[and|ni]] [[not|demasiado]] [[too|demasiado]] '
                                  '[[cold|frío]]. [[Perfect|Perfecto]] [[for|para]] [[walking|caminar]].',
                                  '[[I|Yo]] [[prefer|prefiero]] [[summer|el verano]] [[myself|personalmente]]. '
                                  '[[I|Yo]] [[love|me encanta]] [[going|ir a]] [[to|ir a]] [[the|la]] [[beach|playa]] '
                                  '[[and|y]] [[the|el]] [[long|largo]] [[evenings|días]].'],
            'grammar_patterns': [   (   '[[I|Yo]] [[love|me encanta]] [[swimming|nadar]] ______ [[summer|el verano]].',
                                        'in'),
                                    (   '[[It|En]] ______ [[autumn|otoño]], [[the|las]] [[leaves|hojas]] [[turn|se '
                                        'ponen]] [[orange|naranjas]] [[and|y]] [[red|rojas]].',
                                        'in'),
                                    (   '[[Spring|La primavera]] [[is|es]] [[my|mi]] [[favourite|favorita]] ______ '
                                        '[[because|porque]] [[of|por]] [[the|las]] [[flowers|flores]].',
                                        'season'),
                                    (   '[[It|Neva]] [[snows|nieva]] [[a|mucho]] [[lot|mucho]] ______ [[winter|el '
                                        'invierno]].',
                                        'in'),
                                    (   '[[What|Cuál]] [[is|es]] [[your|tu]] [[favourite|estación favorita]] ______?',
                                        'season'),
                                    (   '[[The|Las]] [[temperatures|temperaturas]] [[are|son]] [[very|muy]] ______ '
                                        '[[in|en]] [[summer|verano]].',
                                        'high')],
            'learning_outcomes': [   'Name the four seasons in English',
                                     "Use 'in + season' to talk about seasonal activities",
                                     'Describe the characteristics of each season'],
            'module': 5,
            'reading_questions': [   {   'correct_idx': 2,
                                         'options': [   ('Spring', 'Primavera'),
                                                        ('Winter', 'Invierno'),
                                                        ('Autumn', 'Otoño')],
                                         'question_en': '[[What|Cuál]] [[is|es]] [[the|la]] [[first|primera]] '
                                                        "[[speaker's|del hablante]] [[favourite|estación favorita]] "
                                                        '[[season|estación]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Because of the snow', 'Por la nieve'),
                                                        ('Because of the colours', 'Por los colores'),
                                                        ('Because of the warm weather', 'Por el tiempo cálido')],
                                         'question_en': '[[Why|Por qué]] [[does|le gusta]] [[the|al]] '
                                                        '[[speaker|hablante]] [[like|le gusta]] [[this|esta]] '
                                                        '[[season|estación]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Blue, green, purple', 'Azul, verde, morado'),
                                                        ('Red, orange, yellow', 'Rojo, naranja, amarillo'),
                                                        ('Brown, grey, white', 'Marrón, gris, blanco')],
                                         'question_en': '[[What|Qué]] [[colours|colores]] [[are|se mencionan]] '
                                                        '[[mentioned|mencionan]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Hot and sunny', 'Caluroso y soleado'),
                                                        ('Cold and rainy', 'Frío y lluvioso'),
                                                        (   'Mild, not too hot or cold',
                                                            'Templado, ni muy caluroso ni frío')],
                                         'question_en': '[[How|Cómo]] [[is|se describe]] [[the|el]] [[autumn|otoño]] '
                                                        '[[weather|tiempo]] [[described|describe]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Autumn', 'Otoño'),
                                                        ('Spring', 'Primavera'),
                                                        ('Summer', 'Verano')],
                                         'question_en': '[[What|Qué]] [[does|prefiere]] [[the|el]] [[second|segundo]] '
                                                        '[[speaker|hablante]] [[prefer|prefiere]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('No school', 'Sin colegio'),
                                                        (   'Going to the beach and long evenings',
                                                            'Ir a la playa y los días largos'),
                                                        ('Hot weather only', 'Solo el tiempo caluroso')],
                                         'question_en': '[[What|Qué]] [[does|le gusta]] [[the|al]] [[second|segundo]] '
                                                        '[[speaker|hablante]] [[like|le gusta]] [[about|del]] '
                                                        '[[summer|verano]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('on', 'en (día)'), ('at', 'a (hora)'), ('in', 'en (estación)')],
                                         'question_en': '[[Which|Cuál]] [[preposition|preposición]] [[is|se usa]] '
                                                        '[[used|usa]] [[with|con]] [[seasons|estaciones]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Spring', 'Primavera'),
                                                        ('Winter', 'Invierno'),
                                                        ('Autumn', 'Otoño')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Otoño'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('They grow', 'Crecen'),
                                                        ('They turn red/orange', 'Se ponen rojas/naranjas'),
                                                        ('They stay green', 'Se quedan verdes')],
                                         'question_en': '[[What|Qué]] [[happens|ocurre]] [[to|con]] [[leaves|las '
                                                        'hojas]] [[in|en]] [[autumn|otoño]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Cold', 'Frío'), ('Freezing', 'Helador'), ('Warm', 'Cálido')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Cálido'?"}],
            'title': 'Seasons',
            'vocab': [   ('Spring', 'Primavera'),
                         ('Summer', 'Verano'),
                         ('Autumn', 'Otoño'),
                         ('Winter', 'Invierno'),
                         ('Flowers', 'Flores'),
                         ('Leaves', 'Hojas'),
                         ('Snow', 'Nieve'),
                         ('Sunshine', 'Sol'),
                         ('Harvest', 'Cosecha'),
                         ('Trees', 'Árboles'),
                         ('Season', 'Estación'),
                         ('Climate', 'Clima'),
                         ('Warm', 'Cálido'),
                         ('Freezing', 'Helador')]},
    46: {   'dialogue_lines': [   '[[Good|Buenas]] [[evening|tardes]]. [[I|Yo]] [[have|tengo]] [[a|una]] '
                                  '[[reservation|reserva]] [[under|a nombre de]] [[the|el]] [[name|nombre]] '
                                  '[[Johnson|Johnson]].',
                                  '[[Welcome|Bienvenido]], [[Mr|Sr.]] [[Johnson|Johnson]]. [[You|Usted]] '
                                  '[[have|tiene]] [[a|una]] [[double|doble]] [[room|habitación]] [[on|en]] [[the|el]] '
                                  '[[fourth|cuarto]] [[floor|piso]].',
                                  '[[Is|Hay]] [[breakfast|desayuno]] [[included|incluido]]?',
                                  '[[Yes|Sí]], [[breakfast|el desayuno]] [[is|se sirve]] [[served|sirve]] [[from|de]] '
                                  '[[seven|las siete]] [[to|a]] [[ten|las diez]] [[in|en]] [[the|el]] '
                                  '[[morning|mañana]] [[in|en]] [[our|nuestro]] [[restaurant|restaurante]].',
                                  '[[Can|¿Puedo]] [[I|yo]] [[have|tener]] [[two|dos]] [[room|llaves]] [[keys|llaves]], '
                                  '[[please|por favor]]?'],
            'grammar_patterns': [   (   '[[Can|¿Puedo]] [[I|yo]] ______ [[a|una]] [[room|habitación]] [[for|para]] '
                                        '[[two|dos]] [[nights|noches]]?',
                                        'have'),
                                    (   '[[Is|Hay]] [[there|hay]] [[a|una]] [[swimming|piscina]] ______ [[at|en]] '
                                        '[[the|el]] [[hotel|hotel]]?',
                                        'pool'),
                                    (   '[[I|Yo]] [[have|tengo]] [[a|una]] ______ [[for|a]] [[Mr|nombre de]] '
                                        '[[Smith|Smith]].',
                                        'reservation'),
                                    (   '[[What|A qué]] [[time|hora]] [[is|es]] ______  [[served|sirve]] '
                                        '[[breakfast|el desayuno]]?',
                                        'breakfast'),
                                    (   '[[Your|Su]] [[room|habitación]] [[is|está]] [[on|en]] [[the|el]] ______ '
                                        '[[floor|tercer]] [[third|piso]].',
                                        'third'),
                                    (   '[[Could|¿Podría]] [[I|yo]] [[get|conseguir]] [[extra|más]] ______ '
                                        '[[please|por favor]]?',
                                        'towels')],
            'learning_outcomes': [   'Use hotel vocabulary in English',
                                     'Make requests and inquiries at a hotel',
                                     'Understand common hotel interactions'],
            'module': 5,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Mr. Smith', 'Sr. Smith'),
                                                        ('Mr. Johnson', 'Sr. Johnson'),
                                                        ('Mrs. Johnson', 'Sra. Johnson')],
                                         'question_en': '[[How|A nombre de quién]] [[is|está]] [[the|la]] '
                                                        '[[reservation|reserva]] [[made|hecha]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Single room', 'Habitación individual'),
                                                        ('Suite', 'Suite'),
                                                        ('Double room', 'Habitación doble')],
                                         'question_en': '[[What|Qué tipo de]] [[type|tipo de]] [[of|tipo de]] '
                                                        '[[room|habitación]] [[does|tiene]] [[he|él]] [[have|tiene]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Third floor', 'Tercer piso'),
                                                        ('Second floor', 'Segundo piso'),
                                                        ('Fourth floor', 'Cuarto piso')],
                                         'question_en': '[[Which|En qué]] [[floor|piso]] [[is|está]] [[the|la]] '
                                                        '[[room|habitación]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('No, extra charge', 'No, con cargo adicional'),
                                                        ('Yes, included', 'Sí, incluido'),
                                                        ('Only on weekdays', 'Solo entre semana')],
                                         'question_en': '[[Is|Está]] [[breakfast|el desayuno]] [[included|incluido]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('From 8 to 11', 'De 8 a 11'),
                                                        ('From 7 to 10', 'De 7 a 10'),
                                                        ('From 6 to 9', 'De 6 a 9')],
                                         'question_en': '[[When|Cuándo]] [[is|se sirve]] [[breakfast|el desayuno]] '
                                                        '[[served|sirve]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('One', 'Una'), ('Three', 'Tres'), ('Two', 'Dos')],
                                         'question_en': '[[How|Cuántas]] [[many|cuántas]] [[room|llaves]] '
                                                        '[[keys|llaves]] [[does|quiere]] [[the|el]] [[guest|huésped]] '
                                                        '[[want|quiere]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Register on arrival', 'Registrarse a la llegada'),
                                                        ('Leave the hotel', 'Salir del hotel'),
                                                        ('Pay for extras', 'Pagar extras')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Check out' "
                                                        '[[mean|significa]] [[in|en]] [[a|un]] [[hotel|hotel]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Restaurant', 'Restaurante'),
                                                        ('Reception', 'Recepción'),
                                                        ('Reservation', 'Reserva')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Recepción' "
                                                        '[[in|en]] [[English|inglés]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Cleaning the room', 'Limpiar la habitación'),
                                                        (   'Food/items delivered to your room',
                                                            'Comida/artículos entregados en la habitación'),
                                                        ('A type of room', 'Un tipo de habitación')],
                                         'question_en': "[[What|Qué]] [[is|es]] 'Room service'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Check-in', 'Registro'),
                                                        (   'A booking made in advance',
                                                            'Una reserva hecha con antelación'),
                                                        ('A hotel key', 'Una llave de hotel')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Reservation' "
                                                        '[[mean|significa]]?'}],
            'title': 'At the Hotel',
            'vocab': [   ('Reception', 'Recepción'),
                         ('Room service', 'Servicio de habitaciones'),
                         ('Single room', 'Habitación individual'),
                         ('Double room', 'Habitación doble'),
                         ('Key', 'Llave'),
                         ('Check in', 'Registrarse (hotel)'),
                         ('Check out', 'Salir del hotel'),
                         ('Reservation', 'Reserva'),
                         ('Floor', 'Piso'),
                         ('Lift', 'Ascensor'),
                         ('Breakfast', 'Desayuno'),
                         ('Towel', 'Toalla'),
                         ('Pool', 'Piscina'),
                         ('Wi-Fi', 'Wifi')]},
    47: {   'dialogue_lines': [   '[[How|Cómo]] [[was|fueron]] [[your|tus]] [[holidays|vacaciones]]? [[Where|A dónde]] '
                                  '[[did|fuiste]] [[you|tú]] [[go|fuiste]]?',
                                  '[[They|Fueron]] [[were|fueron]] [[amazing|increíbles]]! [[I|Yo]] [[went|fui]] '
                                  '[[to|a]] [[Greece|Grecia]].',
                                  '[[Wow|Vaya]]! [[Was|Fue]] [[the|el]] [[weather|tiempo]] [[good|bueno]]?',
                                  '[[It|Hacía]] [[was|hacía]] [[perfect|perfecto]] — [[hot|caluroso]] [[and|y]] '
                                  '[[sunny|soleado]] [[every|todos los]] [[day|días]]. [[The|Las]] [[beaches|playas]] '
                                  '[[were|eran]] [[beautiful|preciosas]] [[and|y]] [[the|la]] [[local|comida]] '
                                  '[[food|local]] [[was|era]] [[delicious|deliciosa]].',
                                  '[[It|Suena]] [[sounds|suena]] [[like|como]] [[a|unas]] [[perfect|perfectas]] '
                                  '[[holiday|vacaciones]]! [[Did|Compraste]] [[you|tú]] [[buy|compraste]] '
                                  '[[any|algún]] [[souvenirs|recuerdo]]?'],
            'grammar_patterns': [   (   '[[Last|El año pasado]] [[year|el año pasado]], [[I|yo]] ______ [[in|en]] '
                                        '[[Italy|Italia]].',
                                        'was'),
                                    ('[[The|Los]] [[beaches|playas]] ______ [[wonderful|maravillosas]].', 'were'),
                                    (   '[[Was|¿Estuvo]] [[the|el]] [[hotel|hotel]] [[comfortable|cómodo]]? — '
                                        '[[Yes|Sí]], [[it|estuvo]] ______ [[fantastic|fantástico]]!',
                                        'was'),
                                    (   '[[The|Los]] [[people|habitantes]] ______ [[very|muy]] [[friendly|amables]] '
                                        '[[and|y]] [[welcoming|acogedores]].',
                                        'were'),
                                    (   '[[The|La]] [[food|comida]] ______ [[amazing|increíble]] — [[we|comimos]] '
                                        '[[ate|comimos]] [[fresh|mariscos frescos]] [[seafood|mariscos]] '
                                        '[[every|cada]] [[day|día]]!',
                                        'was'),
                                    (   '[[Were|¿Fueron]] [[you|ustedes]] [[happy|contentos]] [[with|con]] [[the|el]] '
                                        '[[trip|viaje]]? — [[Yes|Sí]], [[we|lo]] ______!',
                                        'were')],
            'learning_outcomes': [   "Describe past holidays using 'was/were'",
                                     'Use vocabulary related to holiday destinations and activities',
                                     'Talk about past experiences'],
            'module': 5,
            'reading_questions': [   {   'correct_idx': 2,
                                         'options': [('Spain', 'España'), ('Italy', 'Italia'), ('Greece', 'Grecia')],
                                         'question_en': '[[Where|A dónde]] [[did|fue]] [[the|el]] [[speaker|hablante]] '
                                                        '[[go|fue]] [[for|de]] [[holidays|vacaciones]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Rainy and cold', 'Lluvioso y frío'),
                                                        ('Hot and sunny', 'Caluroso y soleado'),
                                                        ('Cloudy and windy', 'Nublado y ventoso')],
                                         'question_en': '[[How|Cómo]] [[was|fue]] [[the|el]] [[weather|tiempo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Crowded', 'Llenas de gente'),
                                                        ('Beautiful', 'Preciosas'),
                                                        ('Dirty', 'Sucias')],
                                         'question_en': '[[How|Cómo]] [[does|describe]] [[the|el]] '
                                                        '[[speaker|hablante]] [[describe|describe]] [[the|las]] '
                                                        '[[beaches|playas]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Average', 'Regular'),
                                                        ('Not great', 'No muy buena'),
                                                        ('Delicious', 'Deliciosa')],
                                         'question_en': '[[What|Cómo]] [[was|era]] [[the|la]] [[local|comida]] '
                                                        '[[food|local]] [[like|como]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('How much they cost', 'Cuánto costaron'),
                                                        ('If the speaker bought any', 'Si el hablante compró alguno'),
                                                        ('What types they sell', 'Qué tipos venden')],
                                         'question_en': '[[What|Qué]] [[does|pregunta]] [[the|el]] [[friend|amigo]] '
                                                        '[[ask|pregunta]] [[about|sobre]] [[souvenirs|recuerdos]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Present Simple', 'Presente simple'),
                                                        (   "Past Simple of 'to be' (was/were)",
                                                            "Pasado simple de 'to be' (was/were)"),
                                                        ('Present Continuous', 'Presente continuo')],
                                         'question_en': '[[What|Qué]] [[tense|tiempo verbal]] [[is|se usa]] '
                                                        '[[used|usa]] [[for|para]] [[past|el pasado]] [[holidays|de '
                                                        'vacaciones]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Were', 'Eran'), ('Be', 'Ser/Estar'), ('Was', 'Era/Estuvo')],
                                         'question_en': '[[What|Qué]] [[is|es]] [[the|la]] [[past|forma pasada]] '
                                                        "[[form|pasada]] [[of|de]] 'is'?"},
                                     {   'correct_idx': 1,
                                         'options': [('Was', 'Era'), ('Were', 'Eran'), ('Been', 'Sido')],
                                         'question_en': '[[What|Qué]] [[is|es]] [[the|la]] [[past|forma pasada]] '
                                                        "[[form|pasada]] [[of|de]] 'are'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('A type of food', 'Un tipo de comida'),
                                                        (   'A gift or memory from a trip',
                                                            'Un regalo o recuerdo de un viaje'),
                                                        ('A local guide', 'Un guía local')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Souvenir' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Shopping in a city', 'Ir de compras en una ciudad'),
                                                        (   'Visiting tourist attractions',
                                                            'Visitar atracciones turísticas'),
                                                        ('Eating local food', 'Comer comida local')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Sightseeing' "
                                                        '[[mean|significa]]?'}],
            'title': 'Holidays & Vacation',
            'vocab': [   ('Beach', 'Playa'),
                         ('Mountains', 'Montañas'),
                         ('Sightseeing', 'Turismo'),
                         ('Souvenir', 'Recuerdo'),
                         ('Holiday', 'Vacaciones'),
                         ('Relaxation', 'Relajación'),
                         ('Adventure', 'Aventura'),
                         ('Sunscreen', 'Protector solar'),
                         ('Tourist', 'Turista'),
                         ('Scenery', 'Paisaje'),
                         ('Local food', 'Comida local'),
                         ('Museum', 'Museo'),
                         ('Resort', 'Centro turístico'),
                         ('Postcard', 'Postal')]},
    48: {   'dialogue_lines': [   '[[Welcome|Bienvenidos]] [[to|al]] [[the|el]] [[city|ciudad]] [[tour|tour]]! '
                                  '[[Today|Hoy]] [[we|veremos]] [[will|veremos]] [[visit|visitaremos]] [[the|los]] '
                                  '[[most|más]] [[famous|famosos]] [[landmarks|hitos]] [[of|de]] [[the|la]] '
                                  '[[city|ciudad]].',
                                  '[[On|A nuestra]] [[your|vuestra]] [[left|izquierda]], [[you|veréis]] [[can|podéis]] '
                                  '[[see|ver]] [[the|la]] [[oldest|más antigua]] [[cathedral|catedral]] [[in|de]] '
                                  '[[the|la]] [[region|región]], [[built|construida]] [[in|en]] [[the|el]] '
                                  '[[twelfth|siglo XII]] [[century|siglo XII]].',
                                  '[[Can|¿Podemos]] [[we|nosotros]] [[go|entrar]] [[inside|dentro]]?',
                                  '[[Absolutely|Por supuesto]]! [[The|La]] [[entry|entrada]] [[is|es]] '
                                  '[[free|gratuita]] [[and|y]] [[audio|audioguías]] [[guides|audioguías]] '
                                  '[[are|están]] [[available|disponibles]] [[at|en]] [[the|la]] [[entrance|entrada]].',
                                  '[[The|El]] [[museum|museo]] [[next|a nuestro]] [[to|lado]] [[us|nuestro]] '
                                  '[[has|tiene]] [[the|la]] [[largest|mayor]] [[collection|colección]] [[of|de]] '
                                  '[[medieval|arte medieval]] [[art|arte]] [[in|del]] [[the|del]] [[country|país]].'],
            'grammar_patterns': [   (   '[[The|La]] [[Sagrada|Sagrada]] [[Familia|Familia]] [[is|es]] [[the|la]] '
                                        '______ [[church|iglesia]] [[in|de]] [[Barcelona|Barcelona]].',
                                        'most famous'),
                                    (   '[[This|Este]] [[castle|castillo]] [[is|es]] [[the|el]] ______ [[in|de]] '
                                        '[[the|la]] [[country|región]].',
                                        'oldest'),
                                    (   '[[The|El]] [[museum|museo]] [[has|tiene]] [[the|la]] ______ '
                                        '[[collection|colección]] [[in|de]] [[the|el]] [[world|mundo]].',
                                        'largest'),
                                    (   '[[What|Cuál]] [[is|es]] [[the|el]] ______ [[monument|monumento]] [[in|de]] '
                                        '[[this|esta]] [[city|ciudad]]?',
                                        'most famous'),
                                    (   '[[The|La]] [[guided|guiada]] [[tour|visita]] [[is|es]] [[the|la]] ______ '
                                        '[[way|manera]] [[to|de]] [[see|ver]] [[everything|todo]].',
                                        'best'),
                                    (   '[[The|El]] [[Louvre|Louvre]] [[is|es]] [[one|uno]] [[of|de]] [[the|los]] '
                                        '______ [[museums|museos]] [[in|del]] [[the|del]] [[world|mundo]].',
                                        'most visited')],
            'learning_outcomes': [   'Use superlatives to describe tourist attractions',
                                     'Talk about sightseeing and historic places',
                                     'Understand guided tour vocabulary'],
            'module': 5,
            'reading_questions': [   {   'correct_idx': 2,
                                         'options': [   ('Parks and markets', 'Parques y mercados'),
                                                        ('Beaches and hotels', 'Playas y hoteles'),
                                                        (   'Famous landmarks of the city',
                                                            'Los hitos más famosos de la ciudad')],
                                         'question_en': '[[What|Qué]] [[does|verá]] [[the|el]] [[tour|tour]] '
                                                        '[[visit|visitará]] [[today|hoy]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('The oldest castle', 'El castillo más antiguo'),
                                                        ('The oldest cathedral', 'La catedral más antigua'),
                                                        ('The most famous museum', 'El museo más famoso')],
                                         'question_en': '[[What|Qué]] [[is|está]] [[on|a]] [[the|la]] '
                                                        '[[left|izquierda]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('In the tenth century', 'En el siglo X'),
                                                        ('In the fourteenth century', 'En el siglo XIV'),
                                                        ('In the twelfth century', 'En el siglo XII')],
                                         'question_en': '[[When|Cuándo]] [[was|fue]] [[the|la]] [[cathedral|catedral]] '
                                                        '[[built|construida]]?'},
                                     {   'correct_idx': 0,
                                         'options': [   ("Yes, it's free", 'Sí, es gratuita'),
                                                        ('No, it costs €5', 'No, cuesta 5€'),
                                                        ('Not mentioned', 'No mencionado')],
                                         'question_en': '[[Is|La entrada]] [[the|a]] [[entry|la catedral]] [[to|a]] '
                                                        '[[the|la]] [[cathedral|catedral]] [[free|es gratuita]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Maps and books', 'Mapas y libros'),
                                                        ('Audio guides', 'Audioguías'),
                                                        ('A café', 'Una cafetería')],
                                         'question_en': '[[What|Qué]] [[is|hay]] [[available|disponible]] [[at|en]] '
                                                        '[[the|la]] [[entrance|entrada]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('The oldest paintings', 'Las pinturas más antiguas'),
                                                        (   'The largest collection of medieval art',
                                                            'La mayor colección de arte medieval'),
                                                        ('The most expensive exhibits', 'Las exposiciones más caras')],
                                         'question_en': '[[What|Qué]] [[does|tiene]] [[the|el]] [[museum|museo]] '
                                                        '[[have|tiene]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Comparative adjectives', 'Adjetivos comparativos'),
                                                        (   'Superlatives - the most/oldest',
                                                            'Superlativos - el más/el más antiguo'),
                                                        ('Relative clauses', 'Oraciones de relativo')],
                                         'question_en': '[[What|Qué]] [[grammar|gramática]] [[structure|estructura]] '
                                                        '[[is|se usa]] [[used|usa]] [[in|en]] [[this|esta]] '
                                                        '[[unit|unidad]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Add -er to adjective', 'Añadir -er al adjetivo'),
                                                        (   "Use 'more' before adjective",
                                                            "Usar 'more' antes del adjetivo"),
                                                        (   "Use 'the most' or 'the + adjective + est'",
                                                            "Usar 'the most' o 'the + adjetivo + est'")],
                                         'question_en': '[[How|Cómo]] [[do|se forma]] [[you|uno]] [[form|forma]] '
                                                        '[[a|el superlativo]] [[superlative|superlativo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('A type of map', 'Un tipo de mapa'),
                                                        ('A famous or important place', 'Un lugar famoso o importante'),
                                                        ('A historical document', 'Un documento histórico')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Landmark' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('A free ticket', 'Una entrada gratuita'),
                                                        (   'The price to enter a place',
                                                            'El precio para entrar a un lugar'),
                                                        ('A type of guided tour', 'Un tipo de visita guiada')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Entry fee' "
                                                        '[[mean|significa]]?'}],
            'title': 'Sightseeing',
            'vocab': [   ('Museum', 'Museo'),
                         ('Monument', 'Monumento'),
                         ('Statue', 'Estatua'),
                         ('Guided tour', 'Visita guiada'),
                         ('Cathedral', 'Catedral'),
                         ('Castle', 'Castillo'),
                         ('Art gallery', 'Galería de arte'),
                         ('Historic', 'Histórico'),
                         ('Ancient', 'Antiguo'),
                         ('Famous', 'Famoso'),
                         ('Entry fee', 'Precio de entrada'),
                         ('Opening hours', 'Horario de apertura'),
                         ('Audio guide', 'Audioguía'),
                         ('Landmark', 'Hito/Lugar emblemático')]},
    49: {   'dialogue_lines': [   "[[I'm|Estoy]] [[packing|haciendo la maleta]] [[for|para]] [[my|mis]] "
                                  "[[holiday|vacaciones]] [[but|pero]] [[I'm|me]] [[not|estoy]] [[sure|segura]] "
                                  '[[what|qué]] [[to|llevar]] [[bring|llevar]].',
                                  '[[Do|Vas a]] [[you|tú]] [[need|necesitar]] [[a|un]] [[lot|mucho]] [[of|de]] '
                                  '[[clothes|ropa]]? [[Check|Comprueba]] [[the|la]] [[weather|previsión]] '
                                  '[[forecast|del tiempo]] [[first|primero]].',
                                  "[[It's|Va a]] [[going|hacer]] [[to|calor]] [[be|calor]], [[so|así que]] [[I|yo]] "
                                  "[[don't|no necesito]] [[need|necesito]] [[to|llevar]] [[take|llevar]] [[heavy|ropa "
                                  'pesada]] [[clothes|ropa]].',
                                  "[[Don't|No olvides]] [[forget|olvides]] [[your|tus]] [[documents|documentos]] — "
                                  '[[passport|pasaporte]], [[insurance|seguro]] [[and|y]] [[hotel|la confirmación]] '
                                  '[[booking|del hotel]]. [[Those|Esos]] [[are|son]] [[the|los]] [[real|verdaderos]] '
                                  '[[essentials|artículos esenciales]]!',
                                  '[[Good|Buen]] [[point|punto]]! [[And|Y]] [[I|yo]] [[need|necesito]] [[to|llevar]] '
                                  '[[pack|empacar]] [[sunscreen|protector solar]] [[and|y]] [[a|un]] '
                                  '[[phone|cargador]] [[charger|del teléfono]] [[too|también]].'],
            'grammar_patterns': [   (   '[[You|Necesitas]] ______ [[pack|empacar]] [[your|tu]] [[passport|pasaporte]].',
                                        'need to'),
                                    (   '[[You|No necesitas]] ______ [[take|llevar]] [[a|un]] [[heavy|pesado]] '
                                        '[[coat|abrigo]] [[in|en]] [[summer|verano]].',
                                        "don't need to"),
                                    (   '[[Do|Necesitas llevar]] [[you|tú]] ______ [[to|a]] [[bring|traer]] [[a|un]] '
                                        '[[visa|visado]]?',
                                        'need'),
                                    (   '[[I|Yo]] ______ [[remember|recordar]] [[to|recordar]] [[bring|traer]] '
                                        '[[my|mi]] [[charger|cargador]] — [[my|mi]] [[phone|teléfono]] [[is|estará]] '
                                        '[[dead|sin batería]] [[otherwise|si no]].',
                                        'need to'),
                                    (   '[[What|Qué]] ______ [[I|yo]] [[pack|empacar]] [[for|para]] [[a|una]] '
                                        '[[beach|playa]] [[holiday|vacaciones]]?',
                                        'do need to'),
                                    (   '[[You|No necesitas]] ______ [[buy|comprar]] [[water|agua]] — [[the|el]] '
                                        '[[hotel|hotel]] [[provides|proporciona]] [[it|lo]] [[for|para]] '
                                        '[[free|gratis]].',
                                        "don't need to")],
            'learning_outcomes': [   "Use 'need to / don't need to' for necessity",
                                     'Talk about packing and travel essentials',
                                     'Give advice about what to bring on holiday'],
            'module': 5,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Shopping for clothes', 'Comprando ropa'),
                                                        (   'Packing for a holiday',
                                                            'Haciendo la maleta para las vacaciones'),
                                                        ('Organizing the house', 'Organizando la casa')],
                                         'question_en': '[[What|Con qué]] [[is|está]] [[the|el]] [[first|primer]] '
                                                        '[[speaker|hablante]] [[doing|haciendo]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('The airline website', 'La web de la aerolínea'),
                                                        ('The hotel reviews', 'Las reseñas del hotel'),
                                                        ('The weather forecast', 'La previsión del tiempo')],
                                         'question_en': '[[What|Qué]] [[does|sugiere]] [[the|el]] [[friend|amigo]] '
                                                        '[[suggest|sugiere]] [[checking|comprobar]] '
                                                        '[[first|primero]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Cold and rainy', 'Frío y lluvioso'),
                                                        ('Hot', 'Caluroso'),
                                                        ('Windy and cloudy', 'Ventoso y nublado')],
                                         'question_en': '[[What|Qué]] [[type|tipo]] [[of|de]] [[weather|tiempo]] '
                                                        '[[is|habrá]] [[expected|esperado]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Sunscreen', 'Protector solar'),
                                                        ('Documents', 'Documentos'),
                                                        ('Heavy clothes', 'Ropa pesada')],
                                         'question_en': '[[What|Qué]] [[does|no necesita llevarse]] [[the|el]] '
                                                        '[[speaker|hablante]] [[not|no]] [[need|necesita]] '
                                                        '[[to|llevarse]] [[take|llevarse]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('ID and credit card', 'DNI y tarjeta de crédito'),
                                                        (   'Passport, insurance, hotel booking',
                                                            'Pasaporte, seguro, reserva de hotel'),
                                                        ('Visa and flight ticket', 'Visado y billete de vuelo')],
                                         'question_en': '[[What|Qué]] [[documents|documentos]] [[are|se mencionan]] '
                                                        '[[mentioned|mencionan]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Towel and book', 'Toalla y libro'),
                                                        (   'Sunscreen and phone charger',
                                                            'Protector solar y cargador del teléfono'),
                                                        ('Adapter and shampoo', 'Adaptador y champú')],
                                         'question_en': '[[What|Qué]] [[other|otras]] [[two|dos]] [[things|cosas]] '
                                                        '[[does|necesita llevarse]] [[the|el]] [[speaker|hablante]] '
                                                        '[[need|necesita]] [[to|llevarse]] [[pack|empacar]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Possibility', 'Posibilidad'),
                                                        ('Obligation/necessity', 'Obligación/necesidad'),
                                                        ('Permission', 'Permiso')],
                                         'question_en': "[[What|Qué]] [[does|expresa]] 'Need to' [[express|expresa]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ("It's forbidden", 'Está prohibido'),
                                                        ("It's not necessary", 'No es necesario'),
                                                        ("It's recommended", 'Se recomienda')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Don't need to' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Optional items', 'Artículos opcionales'),
                                                        (   'The most important/necessary items',
                                                            'Los artículos más importantes/necesarios'),
                                                        ('Travel accessories', 'Accesorios de viaje')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Essentials' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Backpack', 'Mochila'),
                                                        ('Suitcase', 'Maleta'),
                                                        ('Carry-on', 'Equipaje de mano')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Maleta'?"}],
            'title': 'Packing a Suitcase',
            'vocab': [   ('Suitcase', 'Maleta'),
                         ('Backpack', 'Mochila'),
                         ('Toiletries', 'Artículos de aseo'),
                         ('Toothbrush', 'Cepillo de dientes'),
                         ('Shampoo', 'Champú'),
                         ('Sunscreen', 'Protector solar'),
                         ('Charger', 'Cargador'),
                         ('Documents', 'Documentos'),
                         ('Medication', 'Medicación'),
                         ('Insurance', 'Seguro'),
                         ('Adapter', 'Adaptador'),
                         ('Essentials', 'Artículos esenciales'),
                         ('Carry-on', 'Equipaje de mano'),
                         ('Overweight', 'Con exceso de peso')]},
    50: {   'dialogue_lines': [   "[[Let's|Repasemos]] [[review|repasemos]] [[what|lo que]] [[we've|hemos]] "
                                  '[[learned|aprendido]] [[about|sobre]] [[travel|viajes]] [[and|y]] '
                                  '[[places|lugares]]!',
                                  '[[In|En el]] [[Module|Módulo]] [[5|5]], [[we|aprendimos]] [[learned|aprendimos]] '
                                  '[[about|sobre]] [[airports|aeropuertos]], [[transport|transporte]], '
                                  '[[weather|tiempo]] [[and|y]] [[sightseeing|turismo]].',
                                  '[[We|Usamos]] [[used|usamos]] [[must|must]] [[and|y]] [[should|should]] '
                                  '[[for|para]] [[obligations|obligaciones]] [[and|y]] [[advice|consejos]].',
                                  '[[We|Hablamos]] [[talked|hablamos]] [[about|sobre]] [[past|el pasado]] '
                                  '[[holidays|de vacaciones]] [[using|usando]] [[was|was]] [[and|y]] [[were|were]].',
                                  '[[And|Y]] [[we|practicamos]] [[practised|practicamos]] '
                                  "[[superlatives|superlativos]] [[and|y]] [[need|need]] [[to|to]]/[[don't|don't]] "
                                  '[[need|need]] [[to|to]] [[for|para]] [[packing|hacer la maleta]]!'],
            'grammar_patterns': [   (   '[[You|Debes]] ______ [[carry|llevar]] [[your|tu]] [[passport|pasaporte]] '
                                        '[[at|en]] [[all|todo]] [[times|momento]].',
                                        'must'),
                                    (   '[[I|Yo]] [[travelled|viajé]] ______ [[train|tren]] [[from|desde]] '
                                        '[[Paris|París]] [[to|a]] [[Lyon|Lyon]].',
                                        'by'),
                                    (   '[[It|Hace]] ______ [[rainy|lluvioso]] [[all|toda]] [[week|la semana]] '
                                        '[[last|pasada]].',
                                        'was'),
                                    (   '[[The|La]] [[Eiffel|Torre]] [[Tower|Eiffel]] [[is|es]] [[the|el]] ______ '
                                        '[[monument|monumento]] [[in|de]] [[Paris|París]].',
                                        'most famous'),
                                    (   '[[You|No necesitas]] ______ [[bring|traer]] [[a|un]] [[winter|invierno]] '
                                        "[[coat|abrigo]] — [[it's|hace]] [[very|mucho]] [[warm|calor]].",
                                        "don't need to"),
                                    (   '[[We|Nos]] ______ [[at|en]] [[the|el]] [[hotel|hotel]] [[after|después de]] '
                                        '[[a|un]] [[long|largo]] [[journey|viaje]].',
                                        'arrived')],
            'learning_outcomes': [   'Consolidate all Module 5 vocabulary and grammar',
                                     'Review must/should, was/were, need to, superlatives and transport prepositions',
                                     'Demonstrate comprehensive understanding of travel topics'],
            'module': 5,
            'reading_questions': [   {   'correct_idx': 2,
                                         'options': [   ('Module 4', 'Módulo 4'),
                                                        ('Module 6', 'Módulo 6'),
                                                        ('Module 5', 'Módulo 5')],
                                         'question_en': '[[Which|Qué]] [[module|módulo]] [[does|repasa]] [[this|esta]] '
                                                        '[[unit|unidad]] [[review|repasa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Can/Could', 'Can/Could'),
                                                        ('Must/Should', 'Must/Should'),
                                                        ('Will/Would', 'Will/Would')],
                                         'question_en': '[[What|Qué]] [[modal|modal]] [[verbs|verbos]] [[were|se '
                                                        'aprendieron]] [[learned|aprendieron]] [[for|para]] '
                                                        '[[obligations|obligaciones]] [[and|y]] [[advice|consejos]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Present Perfect', 'Pretérito perfecto'),
                                                        ('Past Simple with was/were', 'Pasado simple con was/were'),
                                                        ('Past Continuous', 'Pasado continuo')],
                                         'question_en': '[[What|Qué]] [[tense|tiempo verbal]] [[was|se usó]] '
                                                        '[[used|usó]] [[to|hablar del]] [[talk|hablar del]] '
                                                        '[[about|hablar del]] [[past|pasado]] [[holidays|de '
                                                        'vacaciones]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('More + adjective', 'More + adjetivo'),
                                                        (   'The most + adjective or the + adjective + est',
                                                            'The most + adjetivo o the + adjetivo + est'),
                                                        ('Very + adjective', 'Very + adjetivo')],
                                         'question_en': '[[What|Qué]] [[structure|estructura]] [[expresses|expresa]] '
                                                        '[[the|el]] [[superlative|superlativo]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('in', 'en'), ('at', 'a'), ('by', 'en (medio de transporte)')],
                                         'question_en': '[[Which|Cuál]] [[preposition|preposición]] [[goes|va]] '
                                                        '[[with|con]] [[transport|transporte]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Preference', 'Preferencia'),
                                                        ('Necessity', 'Necesidad'),
                                                        ('Possibility', 'Posibilidad')],
                                         'question_en': "[[What|Qué]] [[does|expresa]] 'Need to' [[express|expresa]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ("Past of 'have'", "Pasado de 'have'"),
                                                        ("Past of 'is' (singular)", "Pasado de 'is' (singular)"),
                                                        ("Past of 'are'", "Pasado de 'are'")],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Was' [[mean|significa]]?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Weather', 'Tiempo'),
                                                        ('Climate', 'Clima'),
                                                        ('Season', 'Estación')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Estación "
                                                        "del año'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Travel in plane', 'Incorrecto'),
                                                        ('By plane', 'En avión'),
                                                        ('Take plane', 'Incorrecto')],
                                         'question_en': "[[How|Cómo]] [[do|se dice]] [[you|uno]] [[say|dice]] 'Viajar "
                                                        "en avión'?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('At the Airport', 'En el aeropuerto'),
                                                        ('Packing a Suitcase', 'Hacer la maleta'),
                                                        ('Sightseeing', 'Turismo')],
                                         'question_en': '[[What|Qué]] [[topic|tema]] [[was|fue]] [[covered|cubierto]] '
                                                        '[[in|en]] [[Unit|la Unidad]] [[48|48]]?'}],
            'title': 'Module 5 Review — Places & Travel',
            'vocab': [   ('Passport', 'Pasaporte'),
                         ('Transport', 'Transporte'),
                         ('Departure', 'Salida'),
                         ('Weather', 'Tiempo/Clima'),
                         ('Season', 'Estación'),
                         ('Hotel', 'Hotel'),
                         ('Holiday', 'Vacaciones'),
                         ('Sightseeing', 'Turismo'),
                         ('Suitcase', 'Maleta'),
                         ('Must', 'Debe (obligación)'),
                         ('Should', 'Debería (consejo)'),
                         ('Was/Were', 'Era/Estaba/Estuvo'),
                         ('Need to', 'Necesitar hacer'),
                         ('Superlative', 'Superlativo')]},
    51: {   'dialogue_lines': [   '[[Excuse|Perdona]] [[me|me]]. [[Do|Sabes]] [[you|tú]] [[know|sabes]] '
                                  '[[where|dónde]] [[the|están]] [[dairy|los]] [[products|lácteos]] [[are|están]]?',
                                  "[[Yes|Sí]], [[they're|están]] [[in|en]] [[aisle|el pasillo]] [[four|cuatro]], "
                                  '[[next|al lado]] [[to|del]] [[the|el]] [[frozen|congelados]] [[food|congelados]] '
                                  '[[section|sección]].',
                                  '[[Thank|Muchas]] [[you|gracias]]. [[And|Y]] [[where|dónde]] [[can|puedo]] [[I|yo]] '
                                  '[[find|encontrar]] [[organic|los]] [[vegetables|verduras ecológicas]]?',
                                  "[[They're|Están]] [[at|al]] [[the|el]] [[back|fondo]] [[of|de]] [[the|la]] "
                                  '[[store|tienda]], [[near|cerca de]] [[the|la]] [[fresh|la sección de]] '
                                  '[[produce|productos frescos]] [[section|sección]].',
                                  '[[Great|Perfecto]]! [[Oh|Oh]] [[and|y]] [[is|hay]] [[there|hay]] [[a|una]] '
                                  '[[special|oferta especial]] [[offer|especial]] [[on|en]] [[fish|el pescado]] '
                                  '[[today|hoy]]?'],
            'grammar_patterns': [   (   '[[The|Los]] [[tomatoes|tomates]] [[are|están]] [[in|en]] [[aisle|el pasillo]] '
                                        '______ [[three|tres]].',
                                        'number'),
                                    (   '[[How|Cuánto]] [[much|cuesta]] [[is|cuesta]] ______ [[kilo|kilo]] [[of|de]] '
                                        '[[apples|manzanas]]?',
                                        'a'),
                                    (   '[[The|Las]] [[children|fresas]] [[are|están]] [[not|no]] [[on|en]] '
                                        '[[offer|oferta]] [[this|esta]] ______ [[week|semana]].',
                                        'this'),
                                    (   '[[I|Yo]] [[need|necesito]] [[to|comprar]] [[buy|comprar]] [[some|algunas]] '
                                        '______ [[for|para]] [[the|la]] [[salad|ensalada]].',
                                        'vegetables'),
                                    (   '[[Can|¿Puedo]] [[I|yo]] ______ [[a|una]] [[bag|bolsa]], [[please|por favor]]?',
                                        'have'),
                                    (   '[[Do|Tienes]] [[you|tú]] [[have|tienes]] [[a|una]] ______ [[card|tarjeta de '
                                        'fidelidad]] [[loyalty|de fidelidad]]?',
                                        'loyalty')],
            'learning_outcomes': [   'Use supermarket vocabulary in English',
                                     'Ask for directions within a store',
                                     'Use irregular plural forms of common nouns'],
            'module': 6,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Fresh vegetables', 'Verduras frescas'),
                                                        ('The dairy products section', 'La sección de lácteos'),
                                                        ('The checkout', 'La caja')],
                                         'question_en': '[[What|Qué]] [[is|busca]] [[the|el]] [[customer|cliente]] '
                                                        '[[looking|busca]] [[for|primero]] [[first|primero]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Aisle three', 'Pasillo tres'),
                                                        ('Aisle five', 'Pasillo cinco'),
                                                        ('Aisle four', 'Pasillo cuatro')],
                                         'question_en': '[[Which|En qué]] [[aisle|pasillo]] [[are|están]] [[the|los]] '
                                                        '[[dairy|productos lácteos]] [[products|lácteos]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('The fresh produce', 'Los productos frescos'),
                                                        ('The frozen food section', 'La sección de congelados'),
                                                        ('The checkout', 'La caja')],
                                         'question_en': '[[What|Qué]] [[is|está]] [[next|al lado]] [[to|del]] '
                                                        '[[the|el]] [[dairy|section de lácteos]] [[section|sección]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Near the entrance', 'Cerca de la entrada'),
                                                        ('In aisle one', 'En el pasillo uno'),
                                                        ('At the back of the store', 'Al fondo de la tienda')],
                                         'question_en': '[[Where|Dónde]] [[are|están]] [[the|las]] [[organic|verduras '
                                                        'ecológicas]] [[vegetables|verduras]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('If they sell fresh fish', 'Si venden pescado fresco'),
                                                        (   'If there is a special offer on fish',
                                                            'Si hay oferta especial en pescado'),
                                                        ('The price of fish', 'El precio del pescado')],
                                         'question_en': '[[What|Qué]] [[does|pregunta]] [[the|el]] '
                                                        '[[customer|cliente]] [[ask|pregunta]] [[about|sobre]] [[at|el '
                                                        'pescado]] [[the|el]] [[end|final]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('A shopping basket', 'Una cesta de la compra'),
                                                        ('A shopping cart/trolley', 'Un carro de la compra'),
                                                        ('A checkout machine', 'Una caja automática')],
                                         'question_en': "[[What|Qué]] [[is|es]] [[a|un]] 'Trolley'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Frozen food', 'Comida congelada'),
                                                        (   'Naturally grown without chemicals',
                                                            'Cultivado naturalmente sin productos químicos'),
                                                        ('On special offer', 'En oferta especial')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Organic' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('A shelf', 'Un estante'),
                                                        ('A passageway between shelves', 'Un pasillo entre estantes'),
                                                        ('A checkout area', 'Una zona de caja')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Aisle' [[mean|significa]]?"},
                                     {   'correct_idx': 2,
                                         'options': [('Queue', 'Cola'), ('Basket', 'Cesta'), ('Checkout', 'Caja')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Caja' "
                                                        '[[in|en]] [[a|un]] [[supermarket|supermercado]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Regular price', 'Precio normal'),
                                                        ('A special reduced price', 'Un precio especial reducido'),
                                                        ('A new product', 'Un nuevo producto')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Offer' [[mean|significa]] "
                                                        '[[in|en]] [[shopping|compras]]?'}],
            'title': 'At the Supermarket',
            'vocab': [   ('Fruits', 'Frutas'),
                         ('Vegetables', 'Verduras'),
                         ('Meat', 'Carne'),
                         ('Fish', 'Pescado'),
                         ('Aisle', 'Pasillo'),
                         ('Shelf', 'Estante'),
                         ('Basket', 'Cesta'),
                         ('Trolley', 'Carro de la compra'),
                         ('Checkout', 'Caja'),
                         ('Queue', 'Cola'),
                         ('Price', 'Precio'),
                         ('Offer', 'Oferta'),
                         ('Organic', 'Orgánico/Ecológico'),
                         ('Frozen', 'Congelado')]},
    52: {   'dialogue_lines': [   "[[I'm|Estoy]] [[making|haciendo]] [[a|una]] [[cake|tarta]]. [[Do|Tienes]] "
                                  '[[you|tú]] [[have|tienes]] [[any|algo de]] [[flour|harina]] [[and|y]] '
                                  '[[sugar|azúcar]]?',
                                  '[[I|Yo]] [[have|tengo]] [[some|algo de]] [[flour|harina]], [[but|pero]] '
                                  "[[there|no]] [[isn't|hay]] [[much|mucho]] [[sugar|azúcar]] [[left|que quede]].",
                                  '[[How|Cuánta]] [[much|cuánta]] [[do|tienes]] [[you|tú]] [[have|tienes]]?',
                                  '[[About|Unos]] [[200|200]] [[grams|gramos]]. [[How|Cuánta]] [[much|cuánta]] '
                                  '[[do|necesitas]] [[you|tú]] [[need|necesitas]]?',
                                  "[[I|Yo]] [[need|necesito]] [[300|300]] [[grams|gramos]]. [[I'll|Iré]] [[go|iré]] "
                                  '[[to|a]] [[the|la]] [[shop|tienda]] [[to|comprar]] [[buy|comprar]] [[some|algo]] '
                                  '[[more|más]].'],
            'grammar_patterns': [   (   '[[How|Cuánta]] ______ [[water|agua]] [[do|bebes]] [[you|tú]] [[drink|bebes]] '
                                        '[[every|cada]] [[day|día]]?',
                                        'much'),
                                    (   '[[How|Cuántos]] ______ [[eggs|huevos]] [[do|necesitas]] [[you|tú]] '
                                        '[[need|necesitas]]?',
                                        'many'),
                                    (   '[[There|Hay]] [[is|hay]] [[a|mucha]] [[lot|mucha]] [[of|de]] ______ [[in|en]] '
                                        '[[this|esta]] [[soup|sopa]].',
                                        'salt'),
                                    (   "[[I|Yo]] [[don't|no]] [[drink|bebo]] ______ [[coffee|café]] — [[just|solo]] "
                                        '[[one|una]] [[cup|taza]] [[a|al]] [[day|día]].',
                                        'much'),
                                    (   '[[We|Nosotros]] [[need|necesitamos]] [[to|comprar]] [[buy|comprar]] ______ '
                                        '[[bread|pan]] [[and|y]] [[some|algo de]] [[milk|leche]].',
                                        'some'),
                                    (   "[[There|No] [[aren't|hay]] [[many|muchas]] ______ [[left|que queden]] — "
                                        '[[we|deberíamos]] [[should|deberíamos]] [[buy|comprar]] [[more|más]].',
                                        'apples')],
            'learning_outcomes': [   'Distinguish between countable and uncountable nouns',
                                     "Use 'How much/How many' correctly",
                                     "Use 'much/many/a lot of' in context"],
            'module': 6,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('A pizza', 'Una pizza'),
                                                        ('A cake', 'Una tarta'),
                                                        ('A soup', 'Una sopa')],
                                         'question_en': '[[What|Qué]] [[is|está]] [[the|el]] [[first|primer]] '
                                                        '[[speaker|hablante]] [[making|haciendo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('No', 'No'),
                                                        ('Yes, some', 'Sí, algo'),
                                                        ('Yes, a lot', 'Sí, mucha')],
                                         'question_en': '[[Does|Tiene]] [[the|el]] [[friend|amigo]] [[have|tiene]] '
                                                        '[[flour|harina]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Yes, a lot', 'Sí, mucho'),
                                                        ('Yes, just enough', 'Sí, justo suficiente'),
                                                        ('No, not much', 'No, no mucho')],
                                         'question_en': '[[Is|Hay]] [[there|hay]] [[much|mucho]] [[sugar|azúcar]] '
                                                        '[[left|que quede]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('100 grams', '100 gramos'),
                                                        ('About 200 grams', 'Unos 200 gramos'),
                                                        ('300 grams', '300 gramos')],
                                         'question_en': '[[How|Cuánta]] [[much|cuánta]] [[sugar|azúcar]] '
                                                        '[[does|tiene]] [[the|el]] [[friend|amigo]] [[have|tiene]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('200 grams', '200 gramos'),
                                                        ('400 grams', '400 gramos'),
                                                        ('300 grams', '300 gramos')],
                                         'question_en': '[[How|Cuánta]] [[much|cuánta]] [[sugar|azúcar]] '
                                                        '[[does|necesita]] [[the|el]] [[first|primer]] '
                                                        '[[speaker|hablante]] [[need|necesita]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Cancel the recipe', 'Cancelar la receta'),
                                                        (   'Go to the shop to buy more sugar',
                                                            'Ir a la tienda a comprar más azúcar'),
                                                        ('Use less sugar', 'Usar menos azúcar')],
                                         'question_en': '[[What|Qué]] [[will|va a hacer]] [[the|el]] [[first|primer]] '
                                                        '[[speaker|hablante]] [[do|va a hacer]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('How many', 'Cuántos/as'),
                                                        ('How much', 'Cuánto/a'),
                                                        ('How often', 'Con qué frecuencia')],
                                         'question_en': '[[Which|Cuál]] [[question|pregunta]] [[is|se usa]] '
                                                        '[[used|usa]] [[for|para]] [[uncountable|incontables]] '
                                                        '[[nouns|sustantivos]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('How much', 'Cuánto/a'),
                                                        ('How many', 'Cuántos/as'),
                                                        ('How long', 'Cuánto tiempo')],
                                         'question_en': '[[Which|Cuál]] [[question|pregunta]] [[is|se usa]] '
                                                        '[[used|usa]] [[for|para]] [[countable|contables]] '
                                                        '[[nouns|sustantivos]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Countable', 'Contable'),
                                                        ('Both', 'Ambos'),
                                                        ('Uncountable', 'Incontable')],
                                         'question_en': "[[Is|Es]] 'Water' [[countable|contable]] [[or|o]] "
                                                        '[[uncountable|incontable]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Rice', 'Arroz'), ('Milk', 'Leche'), ('Egg', 'Huevo')],
                                         'question_en': '[[Which|Cuál]] [[of|de]] [[these|estas]] [[is|es]] [[a|un]] '
                                                        '[[countable|contable]] [[noun|sustantivo]]?'}],
            'title': 'Countable & Uncountable Nouns',
            'vocab': [   ('Milk', 'Leche'),
                         ('Water', 'Agua'),
                         ('Bread', 'Pan'),
                         ('Rice', 'Arroz'),
                         ('Sugar', 'Azúcar'),
                         ('Coffee', 'Café'),
                         ('Apple', 'Manzana'),
                         ('Egg', 'Huevo'),
                         ('Butter', 'Mantequilla'),
                         ('Cheese', 'Queso'),
                         ('Pasta', 'Pasta'),
                         ('Oil', 'Aceite'),
                         ('Salt', 'Sal'),
                         ('Flour', 'Harina')]},
    53: {   'dialogue_lines': [   "[[I'm|Voy a]] [[going|voy a]] [[to|ir al]] [[make|hacer]] [[a|una]] [[pasta|pasta]] "
                                  '[[dish|plato de pasta]]. [[Do|Tienes]] [[you|tú]] [[have|tienes]] [[any|algo de]] '
                                  '[[olive|aceite de oliva]] [[oil|aceite de oliva]]?',
                                  "[[Yes|Sí]], [[there's|hay]] [[some|algo de]] [[in|en]] [[the|el]] "
                                  "[[cupboard|armario]]. [[But|Pero]] [[I'm|no estoy]] [[not|seguro/a]] "
                                  "[[sure|seguro/a]] [[if|si]] [[there's|hay]] [[enough|suficiente]].",
                                  "[[Let|A]] [[me|ver]]. [[Hmm|Hmm]], [[there|solo]] [[isn't|hay]] [[any|nada]] "
                                  '[[left|que quede]] — [[the|la]] [[bottle|botella]] [[is|está]] [[empty|vacía]]!',
                                  "[[Don't|No]] [[worry|te preocupes]]. [[I'll|Compraré]] [[buy|compraré]] "
                                  '[[some|algo]] [[on|de]] [[my|camino]] [[way|a]] [[home|casa]] [[tonight|esta '
                                  'noche]].',
                                  '[[Thanks|Gracias]]. [[Oh|Oh]], [[do|tienes]] [[you|tú]] [[have|tienes]] [[any|algo '
                                  "de]] [[pasta|pasta]] [[too|también]]? [[I|Yo]] [[can't|no puedo]] "
                                  '[[find|encontrar]] [[any|nada]] [[in|en]] [[the|el]] [[kitchen|kitchen]].'],
            'grammar_patterns': [   (   '[[There|Hay]] [[is|hay]] ______ [[milk|leche]] [[in|en]] [[the|la]] '
                                        '[[fridge|nevera]].',
                                        'some'),
                                    ('[[Is|Hay]] [[there|hay]] ______ [[bread|pan]] [[left|que quede]]?', 'any'),
                                    (   "[[I|Yo]] [[don't|no]] [[have|tengo]] ______ [[eggs|huevos]] [[at|en]] "
                                        '[[home|casa]].',
                                        'any'),
                                    (   '[[Can|¿Puedo]] [[I|yo]] [[have|tener]] ______ [[more|más]] [[coffee|café]], '
                                        '[[please|por favor]]?',
                                        'some'),
                                    (   "[[There|No]] [[aren't|hay]] ______ [[apples|manzanas]] [[in|en]] [[the|la]] "
                                        '[[basket|cesta]].',
                                        'any'),
                                    ('[[Would|¿Quieres]] [[you|tú]] [[like|quieres]] ______ [[tea|té]]?', 'some')],
            'learning_outcomes': [   "Use 'some' and 'any' correctly in different sentence types",
                                     'Name food containers in English',
                                     'Describe quantities and availability'],
            'module': 6,
            'reading_questions': [   {   'correct_idx': 2,
                                         'options': [   ('A soup', 'Una sopa'),
                                                        ('A pizza', 'Una pizza'),
                                                        ('A pasta dish', 'Un plato de pasta')],
                                         'question_en': '[[What|Qué]] [[is|va a hacer]] [[the|el]] '
                                                        '[[speaker|hablante]] [[going|va a hacer]] [[to|a]] '
                                                        '[[make|hacer]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('No, none', 'No, nada'),
                                                        (   'Yes, some but maybe not enough',
                                                            'Sí, algo pero quizás no suficiente'),
                                                        ('Yes, plenty', 'Sí, mucho')],
                                         'question_en': '[[Is|Hay]] [[there|hay]] [[any|algo de]] [[olive|aceite de '
                                                        'oliva]] [[oil|aceite de oliva]] [[in|en]] [[the|el]] '
                                                        '[[cupboard|armario]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Yes, a little', 'Sí, un poco'),
                                                        ('No, the bottle is empty', 'No, la botella está vacía'),
                                                        ('Yes, half a bottle', 'Sí, media botella')],
                                         'question_en': '[[Is|Queda]] [[there|hay]] [[any|algo de]] [[oil|aceite]] '
                                                        '[[left|que quede]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Go to the supermarket tomorrow', 'Ir al supermercado mañana'),
                                                        (   'Buy olive oil on the way home',
                                                            'Comprar aceite de oliva camino a casa'),
                                                        ('Order online', 'Pedir online')],
                                         'question_en': '[[What|Qué]] [[will|va a hacer]] [[the|el]] [[friend|amigo]] '
                                                        '[[do|va a hacer]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Salt and pepper', 'Sal y pimienta'),
                                                        ('Pasta', 'Pasta'),
                                                        ('Tomato sauce', 'Salsa de tomate')],
                                         'question_en': '[[What|Qué]] [[else|más]] [[does|necesita]] [[the|el]] '
                                                        '[[speaker|hablante]] [[need|necesita]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('In questions and negatives', 'En preguntas y negaciones'),
                                                        (   'In affirmatives and offers/requests',
                                                            'En afirmaciones y ofertas/peticiones'),
                                                        ('Only in questions', 'Solo en preguntas')],
                                         'question_en': '[[When|Cuándo]] [[do|usamos]] [[we|cuándo]] [[use|usamos]] '
                                                        "'Some'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('In affirmatives only', 'Solo en afirmaciones'),
                                                        ('In negatives and questions', 'En negaciones y preguntas'),
                                                        ('Only in negatives', 'Solo en negaciones')],
                                         'question_en': '[[When|Cuándo]] [[do|usamos]] [[we|cuándo]] [[use|usamos]] '
                                                        "'Any'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('any', 'any (negativo/interrogativo)'),
                                                        ('some', 'some (afirmativo)'),
                                                        ('much', 'much (cuánto)')],
                                         'question_en': "[[Complete|Completa]]: '[[There|Hay]] [[is|hay]] ______ "
                                                        "[[sugar|azúcar]] [[in|en]] [[the|la]] [[bag|bolsa]].'"},
                                     {   'correct_idx': 2,
                                         'options': [   ('some', 'some (afirmativo)'),
                                                        ('much', 'much (cuánto)'),
                                                        ('any', 'any (interrogativo)')],
                                         'question_en': "[[Complete|Completa]]: '[[Is|Hay]] [[there|hay]] ______ "
                                                        "[[water|agua]] [[left|que quede]]?'"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Full', 'Lleno'),
                                                        ('Enough', 'Suficiente'),
                                                        ('Containing nothing', 'Que no contiene nada')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Empty' [[mean|significa]]?"}],
            'title': 'Some & Any',
            'vocab': [   ('Bottle', 'Botella'),
                         ('Box', 'Caja'),
                         ('Bag', 'Bolsa'),
                         ('Can', 'Lata'),
                         ('Jar', 'Tarro'),
                         ('Carton', 'Cartón'),
                         ('Packet', 'Paquete'),
                         ('Tin', 'Lata (conserva)'),
                         ('Container', 'Envase'),
                         ('Amount', 'Cantidad'),
                         ('Enough', 'Suficiente'),
                         ('Plenty', 'Abundante'),
                         ('Empty', 'Vacío'),
                         ('Full', 'Lleno')]},
    54: {   'dialogue_lines': [   '[[Excuse|Perdona]] [[me|me]], [[how|cuánto]] [[much|cuánto]] [[are|cuestan]] '
                                  '[[the|los]] [[strawberries|fresas]]?',
                                  "[[They're|Cuestan]] [[three|tres]] [[euros|euros]] [[fifty|cincuenta]] [[for|por]] "
                                  '[[a|un]] [[kilo|kilo]].',
                                  '[[And|Y]] [[how|cuántos]] [[many|cuántos]] [[lemons|limones]] [[are|hay]] [[in|en]] '
                                  '[[a|una]] [[bag|bolsa]]?',
                                  '[[There|Hay]] [[are|hay]] [[six|seis]] [[in|en]] [[each|cada]] [[bag|bolsa]].',
                                  "[[Great|Perfecto]]. [[I'll|Me llevaré]] [[take|llevaré]] [[two|dos]] "
                                  '[[kilos|kilos]] [[of|de]] [[strawberries|fresas]] [[and|y]] [[one|una]] '
                                  '[[bag|bolsa]] [[of|de]] [[lemons|limones]] [[please|por favor]].'],
            'grammar_patterns': [   ('[[How|Cuánto]] ______ [[does|cuesta]] [[this|esto]] [[cost|cuesta]]?', 'much'),
                                    (   '[[How|Cuántos]] ______ [[people|personas]] [[are|van a venir]] [[coming|a '
                                        'venir]] [[to|a]] [[the|la]] [[party|fiesta]]?',
                                        'many'),
                                    (   '[[How|Cuánta]] ______ [[sugar|azúcar]] [[do|necesitas]] [[you|tú]] '
                                        '[[need|necesitas]]?',
                                        'much'),
                                    (   '[[How|Cuántos]] ______ [[apples|manzanas]] [[did|compraste]] [[you|tú]] '
                                        '[[buy|compraste]]?',
                                        'many'),
                                    (   '[[The|El]] [[total|total]] ______  [[twelve|doce]] [[euros|euros]] '
                                        '[[fifty|cincuenta]] [[cents|céntimos]].',
                                        'is'),
                                    (   '[[I|Yo]] ______ [[about|unos]] [[fifty|cincuenta]] [[euros|euros]] [[a|a la]] '
                                        '[[week|semana]] [[on|en]] [[food|comida]].',
                                        'spend')],
            'learning_outcomes': [   "Use 'How much/How many' for price and quantity questions",
                                     'Use quantity expressions (kilo, litre, dozen)',
                                     'Have basic market and shopping conversations'],
            'module': 6,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('The lemons', 'Los limones'),
                                                        ('The price of strawberries', 'El precio de las fresas'),
                                                        ('The total bill', 'La cuenta total')],
                                         'question_en': '[[What|Qué]] [[is|pregunta]] [[the|el]] [[customer|cliente]] '
                                                        '[[asking|pregunta]] [[about|sobre]] [[first|primero]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('€2.50 per kilo', '2,50€ por kilo'),
                                                        ('€4 per kilo', '4€ por kilo'),
                                                        ('€3.50 per kilo', '3,50€ por kilo')],
                                         'question_en': '[[How|Cuánto]] [[much|cuánto]] [[do|cuestan]] [[the|las]] '
                                                        '[[strawberries|fresas]] [[cost|cuestan]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('The price', 'El precio'),
                                                        ('How many in a bag', 'Cuántos hay en una bolsa'),
                                                        ('Where they come from', 'De dónde vienen')],
                                         'question_en': '[[What|Qué]] [[does|pregunta]] [[the|el]] '
                                                        '[[customer|cliente]] [[ask|pregunta]] [[about|sobre]] '
                                                        '[[the|los]] [[lemons|limones]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Four', 'Cuatro'), ('Eight', 'Ocho'), ('Six', 'Seis')],
                                         'question_en': '[[How|Cuántos]] [[many|cuántos]] [[lemons|limones]] '
                                                        '[[are|hay]] [[in|en]] [[one|una]] [[bag|bolsa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   (   '1 kilo of strawberries and two bags of lemons',
                                                            '1 kilo de fresas y dos bolsas de limones'),
                                                        (   'Two kilos of strawberries and one bag of lemons',
                                                            'Dos kilos de fresas y una bolsa de limones'),
                                                        ('Just strawberries', 'Solo fresas')],
                                         'question_en': '[[What|Qué]] [[does|compra]] [[the|el]] [[customer|cliente]] '
                                                        '[[buy|compra]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('How many', 'How many (contables)'),
                                                        ('How much', 'How much (incontables)'),
                                                        ('Either', 'Cualquiera')],
                                         'question_en': "[[Use|Usa]] 'How much' [[or|o]] 'How many'?  — '______ "
                                                        "[[coffee|café]] [[do|quieres]] [[you|tú]] [[want|quieres]]?'"},
                                     {   'correct_idx': 1,
                                         'options': [   ('How much', 'How much (incontables)'),
                                                        ('How many', 'How many (contables)'),
                                                        ('Both', 'Ambos')],
                                         'question_en': "[[Use|Usa]] 'How much' [[or|o]] 'How many'? — '______ "
                                                        "[[cups|tazas]] [[do|quieres]] [[you|tú]] [[want|quieres]]?'"},
                                     {   'correct_idx': 1,
                                         'options': [   ('The bill to pay', 'La factura a pagar'),
                                                        ('Proof of purchase', 'Comprobante de compra'),
                                                        ('A discount coupon', 'Un cupón de descuento')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Receipt' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Ten items', 'Diez artículos'),
                                                        ('Twelve items', 'Doce artículos'),
                                                        ('Twenty items', 'Veinte artículos')],
                                         'question_en': "[[What|Qué]] [[is|es]] [[a|una]] 'Dozen'?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Extra charge', 'Cargo adicional'),
                                                        ('A price reduction', 'Una reducción de precio'),
                                                        ('The total price', 'El precio total')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Discount' "
                                                        '[[mean|significa]]?'}],
            'title': 'How Much & How Many',
            'vocab': [   ('Price', 'Precio'),
                         ('Cost', 'Coste'),
                         ('Change', 'Cambio/Vuelta'),
                         ('Receipt', 'Recibo'),
                         ('Discount', 'Descuento'),
                         ('Total', 'Total'),
                         ('Quantity', 'Cantidad'),
                         ('Dozen', 'Docena'),
                         ('Kilo', 'Kilo'),
                         ('Litre', 'Litro'),
                         ('Half', 'Mitad'),
                         ('Quarter', 'Cuarto'),
                         ('Budget', 'Presupuesto'),
                         ('Spend', 'Gastar')]},
    55: {   'dialogue_lines': [   "[[Excuse|Perdona]] [[me|me]], [[I'd|querría]] [[like|querría]] [[to|probarme]] "
                                  '[[try on|probarme]] [[this|este]] [[dress|vestido]]. [[Do|Tienes]] [[you|tú]] '
                                  '[[have|tienes]] [[it|en]] [[in|en]] [[a|una]] [[medium|talla mediana]] '
                                  '[[size|talla]]?',
                                  '[[Yes|Sí]], [[of|por]] [[course|supuesto]]! [[The|El]] [[changing|probador]] '
                                  '[[rooms|probador]] [[are|están]] [[just|justo]] [[over|por]] [[there|allí]].',
                                  "[[Thank|Gracias]]. (tries on dress) [[Hmm|Hmm]], [[it's|es]] [[a|un]] [[bit|poco]] "
                                  '[[too|demasiado]] [[tight|ajustado]] [[around|en]] [[the|la]] [[waist|cintura]]. '
                                  '[[Do|Tienes]] [[you|tú]] [[have|tienes]] [[it|en]] [[in|en]] [[a|una]] '
                                  '[[large|talla grande]]?',
                                  "[[I'm|Lo siento]] [[sorry|siento]], [[but|pero]] [[we|solo]] [[only|solo]] "
                                  '[[have|tenemos]] [[the|la]] [[medium|talla mediana]] [[left|que queda]] [[in|en]] '
                                  '[[that|ese]] [[colour|color]]. [[We|Tenemos]] [[have|tenemos]] [[the|la]] '
                                  '[[large|talla grande]] [[in|en]] [[blue|azul]], [[though|sin embargo]].',
                                  "[[That's|Está]] [[okay|bien]]. [[I'll|Me lo pensaré]] [[think|pensaré]] "
                                  '[[about|en]] [[it|ello]]. [[Are|Hay]] [[there|hay]] [[any|algunas]] '
                                  '[[current|rebajas]] [[sales|rebajas]] [[on|en]] [[at|este]] [[the|momento]] '
                                  '[[moment|momento]]?'],
            'grammar_patterns': [   (   '[[This|Esta]] [[jacket|chaqueta]] [[is|es]] [[too|demasiado]] ______ '
                                        '[[for|para]] [[me|mí]].',
                                        'small'),
                                    (   '[[These|Estos]] [[trousers|pantalones]] [[are|son]] [[not|no]] [[big|lo '
                                        'suficientemente]] ______ [[for|para]] [[me|mí]].',
                                        'enough'),
                                    (   '[[That|Ese]] [[coat|abrigo]] [[is|es]] ______ [[long|largo]] — [[do|tienes]] '
                                        '[[you|tú]] [[have|tienes]] [[it|en]] [[in|en]] [[a|una]] [[shorter|versión '
                                        'más corta]] [[version|versión]]?',
                                        'too'),
                                    (   '[[The|Las]] [[shoes|zapatos]] [[are|son]] [[comfortable|cómodos]] ______ — '
                                        "[[I'll|me los llevaré]] [[take|llevaré]] [[them|los]]!",
                                        'enough'),
                                    (   '[[Can|¿Puedo]] [[I|yo]] ______ [[this|esto]] [[on|aquí]] [[in|en]] [[the|el]] '
                                        '[[changing|probador]] [[room|probador]]?',
                                        'try'),
                                    (   '[[Do|Tienes]] [[you|tú]] [[have|tienes]] [[this|esto]] [[in|en]] [[a|una]] '
                                        '[[larger|talla más grande]] ______?',
                                        'size')],
            'learning_outcomes': [   "Use 'too' and 'enough' with adjectives",
                                     'Describe clothing problems and ask for different sizes',
                                     'Have basic clothing store conversations'],
            'module': 6,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('A skirt', 'Una falda'),
                                                        ('A dress', 'Un vestido'),
                                                        ('A blouse', 'Una blusa')],
                                         'question_en': '[[What|Qué]] [[item|artículo]] [[does|quiere]] [[the|el]] '
                                                        '[[customer|cliente]] [[want|quiere]] [[to|probarse]] '
                                                        '[[try|probarse]] [[on|probarse]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Small', 'Pequeña'), ('Large', 'Grande'), ('Medium', 'Mediana')],
                                         'question_en': '[[What|Qué]] [[size|talla]] [[does|pide]] [[the|el]] '
                                                        '[[customer|cliente]] [[ask|pide]] [[for|por]] '
                                                        '[[first|primero]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Too long', 'Demasiado largo'),
                                                        (   'Too tight around the waist',
                                                            'Demasiado ajustado en la cintura'),
                                                        ('Too expensive', 'Demasiado caro')],
                                         'question_en': '[[What|Cuál]] [[is|es]] [[the|el]] [[problem|problema]] '
                                                        '[[with|con]] [[the|el]] [[dress|vestido]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Yes', 'Sí'),
                                                        ('No, only in blue', 'No, solo en azul'),
                                                        ('Yes, in red too', 'Sí, también en rojo')],
                                         'question_en': '[[Is|Hay]] [[there|hay]] [[a|una]] [[large|talla grande]] '
                                                        '[[size|talla]] [[in|en]] [[the|el]] [[same|mismo]] '
                                                        '[[colour|color]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Delivery options', 'Opciones de entrega'),
                                                        ('Return policy', 'Política de devoluciones'),
                                                        ('Current sales', 'Rebajas actuales')],
                                         'question_en': '[[What|Qué]] [[does|pregunta]] [[the|el]] '
                                                        '[[customer|cliente]] [[ask|pregunta]] [[about|sobre]] '
                                                        '[[at|al]] [[the|final]] [[end|final]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('enough', 'suficientemente'),
                                                        ('too', 'demasiado'),
                                                        ('very', 'muy')],
                                         'question_en': "[[Complete|Completa]]: '[[This|Este]] [[coat|abrigo]] "
                                                        "[[is|es]] ______ [[large|grande]].'"},
                                     {   'correct_idx': 1,
                                         'options': [   ('too', 'demasiado'),
                                                        ('enough', 'suficientemente'),
                                                        ('very', 'muy')],
                                         'question_en': "[[Complete|Completa]]: '[[The|El]] [[coat|abrigo]] [[is|es]] "
                                                        '[[not|no]] [[long|lo suficientemente]] ______ [[for|para]] '
                                                        "[[me|mí]].'"},
                                     {   'correct_idx': 1,
                                         'options': [   ('To buy immediately', 'Comprar inmediatamente'),
                                                        ('To test clothes by wearing', 'Probarse ropa vistiéndosela'),
                                                        ('To return clothes', 'Devolver ropa')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Try on' [[mean|significa]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Very loose', 'Muy holgado'),
                                                        ('Fitting closely, not loose', 'Ajustado, no holgado'),
                                                        ('Too long', 'Demasiado largo')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Tight' [[mean|significa]] "
                                                        '[[for|para]] [[clothing|ropa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Regular price', 'Precio normal'),
                                                        ('Reduced prices/discounts', 'Precios reducidos/descuentos'),
                                                        ('New collection', 'Nueva colección')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Sale' [[mean|significa]] "
                                                        '[[in|en]] [[a|una]] [[shop|tienda]]?'}],
            'title': 'Clothing Store',
            'vocab': [   ('Size', 'Talla'),
                         ('Small', 'Pequeño/Pequeña'),
                         ('Medium', 'Mediano/Mediana'),
                         ('Large', 'Grande'),
                         ('Changing room', 'Probador'),
                         ('Sale', 'Rebajas'),
                         ('Tight', 'Ajustado'),
                         ('Loose', 'Holgado'),
                         ('Fit', 'Quedar bien'),
                         ('Try on', 'Probarse'),
                         ('Return', 'Devolver'),
                         ('Receipt', 'Recibo'),
                         ('Too', 'Demasiado'),
                         ('Enough', 'Suficientemente')]},
    56: {   'dialogue_lines': [   '[[Good|Buenas]] [[evening|tardes]]. [[Do|Tienen]] [[you|ustedes]] [[have|tienen]] '
                                  '[[a|una]] [[reservation|reserva]]?',
                                  '[[Yes|Sí]], [[under|a nombre de]] [[the|el]] [[name|nombre]] [[Garcia|García]] '
                                  '[[for|para]] [[two|dos]] [[people|personas]].',
                                  '[[Follow|Síganme]] [[me|síganme]], [[please|por favor]]. (hands menus) '
                                  '[[Our|Nuestros]] [[specials|platos especiales]] [[today|hoy]] [[are|son]] '
                                  '[[the|el]] [[grilled|salmón a la plancha]] [[salmon|salmón]] [[and|y]] [[the|el]] '
                                  '[[mushroom|risotto de champiñones]] [[risotto|risotto]].',
                                  '[[Could|¿Podrías]] [[I|yo]] [[have|tener]] [[the|el]] [[salmon|salmón]] [[as|como]] '
                                  '[[my|plato principal]] [[main|principal]] [[course|plato]], [[please|por favor]]? '
                                  '[[And|Y]] [[could|podría]] [[we|nosotros]] [[also|también]] [[get|tener]] '
                                  '[[some|algo de]] [[water|agua]] [[for|para]] [[the|la]] [[table|mesa]]?',
                                  '[[Of|Por]] [[course|supuesto]]! [[And|Y]] [[for|para]] [[you|usted]]?'],
            'grammar_patterns': [   (   '[[Could|¿Podrías]] [[I|yo]] ______ [[the|la]] [[menu|carta]], [[please|por '
                                        'favor]]?',
                                        'have'),
                                    (   "[[I'd|Me gustaría]] [[like|gustaría]] ______ [[the|el]] [[grilled|pollo a la "
                                        'plancha]] [[chicken|pollo]] [[for|de]] [[my|plato principal]] '
                                        '[[main|principal]] [[course|plato]].',
                                        'to order'),
                                    (   '[[What|Qué]] [[do|nos]] [[you|usted]] ______ [[as|como]] [[a|plato '
                                        'principal]] [[main|principal]] [[course|plato]]?',
                                        'recommend'),
                                    (   '[[Could|¿Podría]] [[we|nosotros]] [[have|tener]] ______ [[bill|la cuenta]], '
                                        '[[please|por favor]]?',
                                        'the'),
                                    (   '[[Does|Este]] [[this|este]] [[dish|plato]] [[contain|contiene]] ______ '
                                        '[[nuts|frutos secos]]?',
                                        'any'),
                                    (   "[[I'm|Soy]] [[vegetarian|vegetariano/a]] — [[do|tiene]] [[you|usted]] "
                                        '[[have|tiene]] ______ [[vegetarian|opciones vegetarianas]] '
                                        '[[options|opciones]]?',
                                        'any')],
            'learning_outcomes': [   "Order food politely using 'Could I have / I'd like'",
                                     'Navigate a restaurant menu and interaction',
                                     'Use food and restaurant vocabulary correctly'],
            'module': 6,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Gives them the bill', 'Les da la cuenta'),
                                                        (   'Asks if they have a reservation',
                                                            'Pregunta si tienen reserva'),
                                                        (   'Brings the menu immediately',
                                                            'Trae la carta inmediatamente')],
                                         'question_en': '[[What|Qué]] [[does|hace]] [[the|el]] [[waiter|camarero]] '
                                                        '[[do|hace]] [[when|cuando]] [[they|los clientes]] '
                                                        '[[arrive|llegan]]?'},
                                     {   'correct_idx': 0,
                                         'options': [   ('Garcia', 'García'),
                                                        ('Gomez', 'Gómez'),
                                                        ('Rodriguez', 'Rodríguez')],
                                         'question_en': '[[What|A nombre de quién]] [[name|nombre]] [[is|está]] '
                                                        '[[the|la]] [[reservation|reserva]] [[under|a nombre de]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('Four', 'Cuatro'), ('Two', 'Dos'), ('Three', 'Tres')],
                                         'question_en': '[[How|Para cuántas]] [[many|personas]] [[people|personas]] '
                                                        '[[is|es]] [[the|la]] [[reservation|reserva]] [[for|para]]?'},
                                     {   'correct_idx': 0,
                                         'options': [   (   'Grilled salmon and mushroom risotto',
                                                            'Salmón a la plancha y risotto de champiñones'),
                                                        ('Pasta and salad', 'Pasta y ensalada'),
                                                        ('Chicken and soup', 'Pollo y sopa')],
                                         'question_en': '[[What|Cuáles]] [[are|son]] [[the|los]] [[specials|platos '
                                                        'especiales]] [[today|hoy]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('The mushroom risotto', 'El risotto de champiñones'),
                                                        ('Grilled chicken', 'Pollo a la plancha'),
                                                        ('Grilled salmon', 'Salmón a la plancha')],
                                         'question_en': '[[What|Qué]] [[does|pide]] [[the|el]] [[customer|cliente]] '
                                                        '[[order|pide]] [[as|como]] [[main|plato principal]] '
                                                        '[[course|plato]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Bread', 'Pan'),
                                                        ('Water for the table', 'Agua para la mesa'),
                                                        ('A second menu', 'Una segunda carta')],
                                         'question_en': '[[What|Qué]] [[else|más]] [[does|pide]] [[the|el]] '
                                                        '[[customer|cliente]] [[request|pide]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Main course', 'Plato principal'),
                                                        (   'A small dish before the main course',
                                                            'Un plato pequeño antes del plato principal'),
                                                        ('Dessert', 'Postre')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Starter' [[mean|significa]] "
                                                        '[[in|en]] [[a|un]] [[restaurant|restaurante]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Give me...', 'Dame...'),
                                                        ('I want...', 'Quiero...'),
                                                        ('Could I have...?', '¿Podría tener...?')],
                                         'question_en': '[[How|Cómo]] [[do|se pide]] [[you|uno]] '
                                                        '[[politely|educadamente]] [[request|pide]] [[something|algo]] '
                                                        '[[in|en]] [[English|inglés]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('The menu', 'La carta'),
                                                        ('The total payment requested', 'El pago total solicitado'),
                                                        ('A tip for the waiter', 'Una propina para el camarero')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Bill' [[mean|significa]] "
                                                        '[[in|en]] [[a|un]] [[restaurant|restaurante]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Service charge', 'Cargo por servicio'),
                                                        (   'Extra money given for good service',
                                                            'Dinero extra dado por buen servicio'),
                                                        ('The total bill', 'La cuenta total')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Tip' [[mean|significa]]?"}],
            'title': 'At the Restaurant',
            'vocab': [   ('Menu', 'Carta/Menú'),
                         ('Starter', 'Entrante'),
                         ('Main course', 'Plato principal'),
                         ('Dessert', 'Postre'),
                         ('Bill', 'Cuenta'),
                         ('Waiter', 'Camarero'),
                         ('Reservation', 'Reserva'),
                         ('Vegetarian', 'Vegetariano'),
                         ('Allergy', 'Alergia'),
                         ('Tip', 'Propina'),
                         ('Order', 'Pedir/Orden'),
                         ('Recommend', 'Recomendar'),
                         ('Rare', 'Poco hecho'),
                         ('Well done', 'Muy hecho')]},
    57: {   'dialogue_lines': [   "[[I'm|Estoy]] [[making|haciendo]] [[a|una]] [[tomato|salsa de tomate]] "
                                  '[[sauce|salsa]] [[for|para]] [[the|la]] [[pasta|pasta]]. [[Can|Puedes]] [[you|tú]] '
                                  '[[help|ayudarme]] [[me|ayudarme]]?',
                                  '[[Of|Por]] [[course|supuesto]]! [[What|Qué]] [[do|tienes]] [[you|tú]] '
                                  '[[need|necesitas]] [[me|que]] [[to|yo]] [[do|haga]]?',
                                  '[[First|Primero]], [[chop|pica]] [[the|las]] [[onions|cebollas]] [[and|y]] '
                                  '[[garlic|el ajo]] [[finely|finamente]]. [[Then|Después]] [[fry|fríelos]] '
                                  '[[them|los]] [[in|en]] [[olive|aceite de oliva]] [[oil|aceite de oliva]] '
                                  '[[for|durante]] [[two|dos]] [[minutes|minutos]].',
                                  "[[Okay|De acuerdo]], [[I'm|estoy]] [[doing|haciéndolo]] [[that|eso]] [[now|ahora]]. "
                                  '[[What|Y qué]] [[next|pasa]] [[then|después]]?',
                                  '[[Add|Añade]] [[the|los]] [[tomatoes|tomates]] [[and|y]] [[season|sazona]] '
                                  '[[with|con]] [[salt|sal]], [[pepper|pimienta]] [[and|y]] [[basil|albahaca]]. '
                                  '[[Let|Déjalo]] [[it|dejarlo]] [[simmer|a fuego lento]] [[for|durante]] '
                                  '[[fifteen|quince]] [[minutes|minutos]]. [[Delicious|Delicioso]]!'],
            'grammar_patterns': [   (   '______ [[the|el]] [[oven|horno]] [[to|a]] [[180|180]] [[degrees|grados]].',
                                        'Preheat'),
                                    (   '[[First|Primero]], ______ [[the|las]] [[onions|cebollas]] [[into|en]] '
                                        '[[small|trozos pequeños]] [[pieces|trozos]].',
                                        'chop'),
                                    (   '[[Then|Después]], ______ [[the|el]] [[oil|aceite]] [[in|en]] [[a|una]] '
                                        '[[large|grande]] [[pan|sartén]].',
                                        'heat'),
                                    (   '[[After|Después]], ______ [[the|las]] [[vegetables|verduras]] [[and|y]] '
                                        '______ [[for|durante]] [[five|cinco]] [[minutes|minutos]].',
                                        'add, stir'),
                                    (   '[[Finally|Finalmente]], ______ [[with|con]] [[fresh|fresco]] '
                                        '[[herbs|hierbas]] [[and|y]] ______.',
                                        'garnish, serve'),
                                    (   '[[The|La]] [[pasta|pasta]] ______ [[be|estar]] [[ready|lista]] '
                                        "[[when|cuando]] [[it's|está]] [[soft|blanda]] [[but|pero]] [[firm|firme]].",
                                        'should')],
            'learning_outcomes': [   'Use cooking verbs and sequence adverbs in English',
                                     'Follow and give recipe instructions',
                                     'Describe cooking processes step by step'],
            'module': 6,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('A pizza', 'Una pizza'),
                                                        ('Tomato sauce for pasta', 'Salsa de tomate para pasta'),
                                                        ('A salad', 'Una ensalada')],
                                         'question_en': '[[What|Qué]] [[is|está]] [[the|el]] [[first|primer]] '
                                                        '[[speaker|hablante]] [[making|haciendo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Add the tomatoes', 'Añadir los tomates'),
                                                        ('Chop onions and garlic', 'Picar las cebollas y el ajo'),
                                                        ('Season with salt', 'Sazonar con sal')],
                                         'question_en': '[[What|Qué]] [[is|es]] [[the|el]] [[first|primer]] '
                                                        '[[step|paso]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Five minutes', 'Cinco minutos'),
                                                        ('One minute', 'Un minuto'),
                                                        ('Two minutes', 'Dos minutos')],
                                         'question_en': '[[How|Cuánto]] [[long|tiempo]] [[do|se fríen]] [[you|uno]] '
                                                        '[[fry|fríe]] [[the|las]] [[onions|cebollas]] [[and|y]] '
                                                        '[[garlic|el ajo]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('Cream', 'Nata'), ('Tomatoes', 'Tomates'), ('Pasta', 'Pasta')],
                                         'question_en': '[[What|Qué]] [[do|añades]] [[you|uno]] [[add|añade]] [[to|a]] '
                                                        '[[the|la]] [[sauce|salsa]] [[after|después de]] '
                                                        '[[frying|freír]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Cumin and paprika', 'Comino y pimentón'),
                                                        ('Salt, pepper and basil', 'Sal, pimienta y albahaca'),
                                                        ('Oregano and thyme', 'Orégano y tomillo')],
                                         'question_en': '[[What|Con qué]] [[seasonings|condimentos]] [[are|se usa]] '
                                                        '[[used|usan]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Ten minutes', 'Diez minutos'),
                                                        ('Twenty minutes', 'Veinte minutos'),
                                                        ('Fifteen minutes', 'Quince minutos')],
                                         'question_en': '[[How|Cuánto]] [[long|tiempo]] [[does|se deja]] [[the|la]] '
                                                        '[[sauce|salsa]] [[simmer|a fuego lento]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Big, small, medium', 'Grande, pequeño, mediano'),
                                                        (   'First, then, after, finally',
                                                            'Primero, después, más tarde, finalmente'),
                                                        ('Always, sometimes, never', 'Siempre, a veces, nunca')],
                                         'question_en': '[[What|Qué]] [[adverbs|adverbios]] [[are|se usan]] '
                                                        '[[used|usan]] [[for|para]] [[sequence|secuencia]] [[in|en]] '
                                                        '[[recipes|recetas]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Boil at high heat', 'Hervir a alta temperatura'),
                                                        (   'Cook gently at low heat',
                                                            'Cocinar suavemente a baja temperatura'),
                                                        ('Stir constantly', 'Remover constantemente')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Simmer' [[mean|significa]]?"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Cook in oven', 'Cocinar en el horno'),
                                                        ('Cook in water', 'Cocinar en agua'),
                                                        ('Cook in oil', 'Cocinar en aceite')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Fry' [[mean|significa]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   ('To cook first', 'Cocinar primero'),
                                                        ('To heat before use', 'Calentar antes de usar'),
                                                        ('To mix ingredients', 'Mezclar ingredientes')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Preheat' "
                                                        '[[mean|significa]]?'}],
            'title': 'Cooking & Recipes',
            'vocab': [   ('Cut', 'Cortar'),
                         ('Mix', 'Mezclar'),
                         ('Fry', 'Freír'),
                         ('Boil', 'Hervir'),
                         ('Bake', 'Hornear'),
                         ('Chop', 'Picar'),
                         ('Stir', 'Remover'),
                         ('Season', 'Sazonar'),
                         ('Preheat', 'Precalentar'),
                         ('Serve', 'Servir'),
                         ('Oven', 'Horno'),
                         ('Pan', 'Sartén'),
                         ('Pot', 'Olla'),
                         ('Ingredients', 'Ingredientes')]},
    58: {   'dialogue_lines': [   "[[I|Yo]] [[don't|no]] [[feel|me siento]] [[very|muy]] [[well|bien]] [[today|hoy]]. "
                                  '[[I|Yo]] [[have|tengo]] [[a|un]] [[terrible|terrible]] [[headache|dolor de cabeza]] '
                                  '[[and|y]] [[a|dolor de]] [[sore|garganta]] [[throat|garganta]].',
                                  '[[Oh|Oh]] [[no|no]]! [[Do|Tienes]] [[you|tú]] [[have|tienes]] [[a|fiebre]] '
                                  '[[fever|fiebre]] [[as|también]] [[well|también]]?',
                                  '[[Yes|Sí]], [[a|un]] [[small|poco]] [[one|sí]]. [[I|Yo]] [[think|creo que]] '
                                  "[[I'm|me estoy]] [[getting|poniendo]] [[a|un]] [[cold|resfriado]].",
                                  '[[You|Deberías]] [[should|deberías]] [[make|pedir]] [[an|una]] [[appointment|cita]] '
                                  '[[with|con]] [[your|tu]] [[doctor|médico]] [[today|hoy]] [[if|si]] [[possible|es '
                                  'posible]].',
                                  "[[You're|Tienes]] [[right|razón]]. [[I'll|Iré]] [[also|también]] [[stop|pasaré]] "
                                  '[[by|por]] [[the|la]] [[pharmacy|farmacia]] [[and|y]] [[get|compraré]] [[some|algo '
                                  'de]] [[medicine|medicamento]] [[for|para]] [[the|el]] [[headache|dolor de '
                                  'cabeza]].'],
            'grammar_patterns': [   (   '[[You|Deberías]] ______ [[see|ver]] [[a|un]] [[doctor|médico]] [[if|si]] '
                                        '[[you|tienes]] [[have|tienes]] [[a|una]] [[fever|fiebre]] [[of|de]] '
                                        '[[over|más de]] [[38|38]] [[degrees|grados]].',
                                        'should'),
                                    (   '[[You|Deberías]] ______ [[drink|beber]] [[lots|mucha]] [[of|de]] '
                                        '[[water|agua]] [[and|y]] [[rest|descansar]].',
                                        'should'),
                                    (   "[[I|Yo]] [[don't|no]] [[feel|me siento]] [[well|bien]] — [[I|creo que]] "
                                        '[[think|creo que]] [[I|me he]] ______ [[a|resfriado]] [[cold|resfriado]].',
                                        'have'),
                                    (   '[[You|No deberías]] ______ [[go|ir]] [[to|al]] [[work|trabajo]] '
                                        "[[when|cuando]] [[you're|estás]] [[ill|enfermo/a]].",
                                        "shouldn't"),
                                    ('[[What|Cuáles]] [[are|son]] [[your|tus]] ______?', 'symptoms'),
                                    (   '[[The|El]] [[pharmacist|farmacéutico]] ______ [[some|unos]] '
                                        '[[medicine|medicamentos]] [[for|para]] [[your|tu]] [[cough|tos]].',
                                        'recommended')],
            'learning_outcomes': [   'Describe health symptoms in English',
                                     "Use 'should/shouldn't' for health advice",
                                     'Navigate basic health-related conversations'],
            'module': 6,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [   ('Stomachache and cough', 'Dolor de estómago y tos'),
                                                        (   'Headache and sore throat',
                                                            'Dolor de cabeza y dolor de garganta'),
                                                        ('Fever only', 'Solo fiebre')],
                                         'question_en': '[[What|Qué]] [[symptoms|síntomas]] [[does|tiene]] [[the|el]] '
                                                        '[[speaker|hablante]] [[have|tiene]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('No', 'No'),
                                                        ('Yes, a small one', 'Sí, un poco'),
                                                        ('Yes, a high fever', 'Sí, fiebre alta')],
                                         'question_en': '[[Does|Tiene]] [[the|el]] [[speaker|hablante]] [[have|tiene]] '
                                                        '[[a|fiebre]] [[fever|fiebre]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('The flu', 'La gripe'),
                                                        ('A cold', 'Un resfriado'),
                                                        ('Stomachache', 'Dolor de estómago')],
                                         'question_en': '[[What|Qué]] [[does|cree]] [[the|el]] [[speaker|hablante]] '
                                                        "[[think|cree]] [[they're|que]] [[getting|le está dando]]?"},
                                     {   'correct_idx': 1,
                                         'options': [   (   'Take medicine immediately',
                                                            'Tomar medicamento inmediatamente'),
                                                        ("Make a doctor's appointment", 'Pedir cita con el médico'),
                                                        ('Rest at home', 'Descansar en casa')],
                                         'question_en': '[[What|Qué]] [[does|aconseja]] [[the|el]] [[friend|amigo]] '
                                                        '[[suggest|aconseja]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Call the doctor', 'Llamar al médico'),
                                                        ('Stay in bed all day', 'Quedarse en cama todo el día'),
                                                        (   'Stop at the pharmacy for medicine',
                                                            'Pasar por la farmacia a comprar medicamento')],
                                         'question_en': '[[What|Qué]] [[will|va a hacer]] [[the|el]] '
                                                        '[[speaker|hablante]] [[also|también]] [[do|hacer]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Must', 'Debe'), ('Can', 'Puede'), ('Should', 'Debería')],
                                         'question_en': '[[What|Qué]] [[modal|modal]] [[verb|verbo]] [[is|se usa]] '
                                                        '[[used|usa]] [[for|para]] [[advice|consejos]] [[in|en]] '
                                                        '[[this|esta]] [[unit|unidad]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('must', 'debes (obligación)'),
                                                        ('should', 'deberías (consejo)'),
                                                        ('can', 'puedes (posibilidad)')],
                                         'question_en': "[[Complete|Completa]]: '[[You|Deberías]] ______ "
                                                        "[[drink|beber]] [[lots|mucha]] [[of|de]] [[water|agua]].'"},
                                     {   'correct_idx': 1,
                                         'options': [   ('A type of medicine', 'Un tipo de medicamento'),
                                                        (   "A doctor's written instructions for medicine",
                                                            'Las instrucciones escritas del médico para medicamento'),
                                                        ('A pharmacy location', 'Una ubicación de farmacia')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Prescription' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('A cure for illness', 'Una cura para la enfermedad'),
                                                        (   'A sign or indicator of illness',
                                                            'Un signo o indicador de enfermedad'),
                                                        ('A type of medicine', 'Un tipo de medicamento')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Symptom' "
                                                        '[[mean|significa]]?'},
                                     {   'correct_idx': 2,
                                         'options': [('Cold', 'Resfriado'), ('Cough', 'Tos'), ('Fever', 'Fiebre')],
                                         'question_en': "[[What|Qué]] [[word|palabra]] [[means|significa]] 'Fiebre' "
                                                        '[[in|en]] [[English|inglés]]?'}],
            'title': 'Health & Illness',
            'vocab': [   ('Headache', 'Dolor de cabeza'),
                         ('Fever', 'Fiebre'),
                         ('Cold', 'Resfriado'),
                         ('Cough', 'Tos'),
                         ('Sore throat', 'Dolor de garganta'),
                         ('Stomachache', 'Dolor de estómago'),
                         ('Medicine', 'Medicamento'),
                         ('Pharmacy', 'Farmacia'),
                         ('Doctor', 'Médico'),
                         ('Appointment', 'Cita'),
                         ('Prescription', 'Receta médica'),
                         ('Rest', 'Descanso'),
                         ('Ill', 'Enfermo'),
                         ('Symptom', 'Síntoma')]},
    59: {   'dialogue_lines': [   '[[That|Eso]] [[will|serán]] [[be|serán]] [[twenty-five|veinticinco]] '
                                  '[[euros|euros]] [[fifty|cincuenta]] [[cents|céntimos]], [[please|por favor]].',
                                  "[[Here|Aquí]] [[you|tiene]] [[are|tiene]] — [[I'm|voy a]] [[going|pagar]] [[to|en]] "
                                  '[[pay|efectivo]] [[in|efectivo]] [[cash|efectivo]]. [[I|Yo]] [[have|tengo]] '
                                  '[[a|un]] [[fifty|billete de cincuenta]] [[euro|euros]] [[note|billete]].',
                                  '[[Thank|Gracias]]. [[Your|Su]] [[change|cambio/vuelta]] [[is|es]] '
                                  '[[twenty-four|veinticuatro]] [[euros|euros]] [[fifty|cincuenta]] '
                                  '[[cents|céntimos]].',
                                  '[[Actually|En realidad]], [[do|aceptas]] [[you|tú]] [[accept|aceptas]] '
                                  "[[card|tarjeta]]? [[It's|Es]] [[more|más]] [[convenient|cómodo]].",
                                  '[[Yes|Sí]], [[of|por]] [[course|supuesto]]. [[You|Puede]] [[can|puede]] '
                                  '[[pay|pagar]] [[by|con]] [[card|tarjeta]] [[or|o]] [[contactless|pago sin '
                                  'contacto]].'],
            'grammar_patterns': [   (   '[[I|Yo]] [[pay|pago]] ______ [[my|mis]] [[bills|facturas]] [[by|con]] '
                                        '[[credit|tarjeta de crédito]] [[card|tarjeta de crédito]].',
                                        'for'),
                                    (   '[[She|Ella]] [[spends|gasta]] [[a|mucho]] [[lot|mucho]] [[of|en]] '
                                        '[[money|dinero]] ______ [[clothes|ropa]].',
                                        'on'),
                                    (   '[[Do|Aceptas]] [[you|tú]] [[accept|aceptas]] ______ [[card|tarjeta]], '
                                        '[[or|o]] [[is|es]] [[it|solo]] [[cash|efectivo]] [[only|solo]]?',
                                        'credit'),
                                    (   '[[I|Yo]] [[need|necesito]] [[to|sacar]] [[withdraw|sacar]] [[some|algo de]] '
                                        '[[money|dinero]] ______ [[the|el]] [[ATM|cajero automático]].',
                                        'from'),
                                    (   '[[What|Cuál]] [[is|es]] [[the|el]] ______ [[for|para]] [[euros|euros]] '
                                        '[[to|a]] [[dollars|dólares]] [[today|hoy]]?',
                                        'exchange rate'),
                                    (   '[[Can|¿Puedo]] [[I|yo]] [[pay|pagar]] ______ [[contactless|pago sin '
                                        'contacto]]?',
                                        'by')],
            'learning_outcomes': [   'Use money and currency vocabulary',
                                     'Handle payment transactions in English',
                                     "Use prepositions 'pay for / spend on'"],
            'module': 6,
            'reading_questions': [   {   'correct_idx': 1,
                                         'options': [('€20.50', '20,50€'), ('€25.50', '25,50€'), ('€30.50', '30,50€')],
                                         'question_en': '[[How|Cuánto]] [[much|cuánto]] [[does|cuesta]] [[the|la]] '
                                                        '[[purchase|compra]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('By card', 'Con tarjeta'),
                                                        ('In cash', 'En efectivo'),
                                                        ('By contactless', 'Con pago sin contacto')],
                                         'question_en': '[[How|Cómo]] [[does|va a pagar]] [[the|el]] '
                                                        '[[customer|cliente]] [[initially|inicialmente]] [[plan|va a '
                                                        'pagar]] [[to|a]] [[pay|pagar]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('A €20 note', 'Un billete de 20€'),
                                                        ('A €100 note', 'Un billete de 100€'),
                                                        ('A €50 euro note', 'Un billete de 50€')],
                                         'question_en': '[[What|Qué]] [[note|billete]] [[does|tiene]] [[the|el]] '
                                                        '[[customer|cliente]] [[have|tiene]]?'},
                                     {   'correct_idx': 0,
                                         'options': [('€24.50', '24,50€'), ('€14.50', '14,50€'), ('€34.50', '34,50€')],
                                         'question_en': '[[How|Cuánto]] [[much|cuánto]] [[change|cambio]] '
                                                        '[[does|recibe]] [[the|el]] [[customer|cliente]] '
                                                        '[[receive|recibe]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('If they give receipts', 'Si dan recibos'),
                                                        ('If they accept card', 'Si aceptan tarjeta'),
                                                        ('If there is a discount', 'Si hay descuento')],
                                         'question_en': '[[What|Qué]] [[does|pregunta]] [[the|el]] '
                                                        '[[customer|cliente]] [[ask|pregunta]] [[about|sobre]] '
                                                        '[[at|al]] [[the|final]] [[end|final]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Cash only', 'Solo efectivo'),
                                                        ('Card and contactless', 'Tarjeta y pago sin contacto'),
                                                        ('All methods', 'Todos los métodos')],
                                         'question_en': '[[What|Qué]] [[payment|formas de pago]] [[methods|pago]] '
                                                        '[[are|se aceptan]] [[accepted|aceptan]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('To exchange currency', 'Cambiar divisa'),
                                                        (   'Money returned after paying more than the price',
                                                            'Dinero devuelto después de pagar más'),
                                                        ('A discount given', 'Un descuento dado')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Change' [[mean|significa]] "
                                                        '[[in|en]] [[a|un]] [[financial|contexto financiero]] '
                                                        '[[context|contexto]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('for', 'para'), ('on', 'en'), ('at', 'a')],
                                         'question_en': "[[Complete|Completa]]: '[[She|Ella]] [[spends|gasta]] "
                                                        "[[her|sus]] [[savings|ahorros]] ______ [[travel|viajes]].'"},
                                     {   'correct_idx': 0,
                                         'options': [   ('Automated Teller Machine', 'Cajero automático'),
                                                        (   'Account Transfer Method',
                                                            'Método de transferencia de cuenta'),
                                                        (   'Annual Transaction Monitor',
                                                            'Monitor de transacciones anuales')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'ATM' [[stand|son las siglas "
                                                        'de]] [[for|de]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Wallet', 'Cartera'),
                                                        ('Savings', 'Ahorros'),
                                                        ('Cash', 'Efectivo')],
                                         'question_en': '[[What|Qué]] [[word|palabra]] [[means|significa]] '
                                                        "'Ahorros'?"}],
            'title': 'Money & Currency',
            'vocab': [   ('Cash', 'Efectivo'),
                         ('Credit card', 'Tarjeta de crédito'),
                         ('Change', 'Cambio/Vuelta'),
                         ('Receipt', 'Recibo'),
                         ('Coin', 'Moneda'),
                         ('Banknote', 'Billete (de banco)'),
                         ('Currency', 'Divisa/Moneda'),
                         ('Exchange rate', 'Tipo de cambio'),
                         ('ATM', 'Cajero automático'),
                         ('Bank', 'Banco'),
                         ('Payment', 'Pago'),
                         ('Invoice', 'Factura'),
                         ('Wallet', 'Cartera'),
                         ('Savings', 'Ahorros')]},
    60: {   'dialogue_lines': [   "[[Congratulations|Enhorabuena]]! [[You've|Has]] [[completed|completado]] "
                                  '[[Module|el Módulo]] [[6|6]] — [[Shopping|Compras]] [[and|y]] [[Food|Comida]]!',
                                  '[[In|En]] [[this|este]] [[module|módulo]], [[we|aprendiste]] [[learned|aprendiste]] '
                                  '[[to|a]] [[navigate|navegar]] [[supermarkets|supermercados]], '
                                  '[[restaurants|restaurantes]] [[and|y]] [[clothing|tiendas de ropa]] '
                                  '[[stores|tiendas de ropa]].',
                                  '[[You|Practicaste]] [[practised|practicaste]] [[countable|sustantivos contables]] '
                                  '[[and|y]] [[uncountable|incontables]] [[nouns|sustantivos]] [[with|con]] '
                                  '[[some/any|some/any]] [[and|y]] [[how|how]] [[much/many|much/many]].',
                                  '[[We|También]] [[also|también]] [[covered|vimos]] [[health|vocabulario de salud]] '
                                  '[[vocabulary|vocabulario]], [[cooking|cocina]] [[and|y]] [[money|el dinero]] '
                                  '[[and|y]] [[how|cómo]] [[to|manejar]] [[handle|manejar]] '
                                  '[[transactions|transacciones]].',
                                  '[[You|Ahora tienes]] [[now|ahora]] [[have|tienes]] [[the|las]] '
                                  '[[language|herramientas lingüísticas]] [[tools|herramientas]] [[to|para]] '
                                  '[[shop|comprar]], [[eat|comer]] [[out|fuera]] [[and|y]] [[stay|mantenerte]] '
                                  '[[healthy|saludable]] [[in|en]] [[English|inglés]]! [[Well|Muy]] [[done|bien]]!'],
            'grammar_patterns': [   (   "[[There|No]] [[isn't|hay]] ______ [[milk|leche]] [[left|que quede]] — "
                                        '[[can|puedes]] [[you|tú]] [[buy|comprar]] [[some|un poco]] [[more|más]]?',
                                        'any'),
                                    ('[[How|Cuánto]] ______ [[does|cuesta]] [[that|eso]] [[cost|cuesta]]?', 'much'),
                                    (   '[[This|Esta]] [[jacket|chaqueta]] [[is|es]] [[too|demasiado]] ______ '
                                        '[[for|para]] [[the|el]] [[summer|verano]].',
                                        'warm'),
                                    (   '[[You|Deberías]] ______ [[rest|descansar]] [[and|y]] [[drink|beber]] '
                                        '[[plenty|mucha]] [[of|de]] [[water|agua]].',
                                        'should'),
                                    (   '[[I|Yo]] ______ [[a|mucho]] [[lot|mucho]] [[of|en]] [[money|dinero]] ______ '
                                        '[[food|comida]] [[every|cada]] [[week|semana]].',
                                        'spend, on'),
                                    (   '[[Would|¿Desearía]] [[you|usted]] [[like|desearía]] ______ [[more|más]] '
                                        '[[water|agua]]?',
                                        'some')],
            'learning_outcomes': [   'Consolidate all Module 6 vocabulary and grammar',
                                     'Review some/any, how much/many, too/enough, should, pay for/spend on',
                                     'Demonstrate comprehensive understanding of shopping and food topics'],
            'module': 6,
            'reading_questions': [   {   'correct_idx': 2,
                                         'options': [   ('Module 4', 'Módulo 4'),
                                                        ('Module 5', 'Módulo 5'),
                                                        ('Module 6', 'Módulo 6')],
                                         'question_en': '[[Which|Qué]] [[module|módulo]] [[does|cubre]] [[this|esta]] '
                                                        '[[unit|unidad]] [[cover|cubre]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('some', 'some (afirmativo)'),
                                                        ('any', 'any (negativo)'),
                                                        ('much', 'much (cantidad)')],
                                         'question_en': "[[Use|Usa]] 'some' [[or|o]] 'any': '[[I|Yo]] [[don't|no]] "
                                                        "[[have|tengo]] ______ [[apples|manzanas]].'"},
                                     {   'correct_idx': 1,
                                         'options': [   ('How much', 'How much (incontable)'),
                                                        ('How many', 'How many (contable)'),
                                                        ('How often', 'How often (frecuencia)')],
                                         'question_en': "[[Use|Usa]] 'How much' [[or|o]] 'How many': '______ "
                                                        '[[eggs|huevos]] [[do|necesitas]] [[you|tú]] '
                                                        "[[need|necesitas]]?'"},
                                     {   'correct_idx': 1,
                                         'options': [   ('enough', 'suficientemente'),
                                                        ('too', 'demasiado'),
                                                        ('very', 'muy')],
                                         'question_en': "[[Complete|Completa]]: '[[These|Estos]] [[shoes|zapatos]] "
                                                        "[[are|son]] ______ [[tight|apretados]].'"},
                                     {   'correct_idx': 2,
                                         'options': [   ('Must', 'Must (debe)'),
                                                        ('Can', 'Can (puede)'),
                                                        ('Should', 'Should (debería)')],
                                         'question_en': '[[What|Qué]] [[modal|verbo modal]] [[verb|modal]] '
                                                        '[[gives|da]] [[health|consejos de salud]] '
                                                        '[[advice|consejos]]?'},
                                     {   'correct_idx': 1,
                                         'options': [('on', 'en'), ('for', 'por'), ('at', 'a')],
                                         'question_en': "[[Complete|Completa]]: '[[She|Ella]] [[pays|paga]] ______ "
                                                        '[[her|sus]] [[groceries|compras]] [[with|con]] '
                                                        "[[cash|efectivo]].'"},
                                     {   'correct_idx': 2,
                                         'options': [('for', 'para'), ('at', 'a'), ('on', 'en')],
                                         'question_en': "[[Complete|Completa]]: '[[I|Yo]] [[spend|gasto]] [[a|mucho]] "
                                                        "[[lot|mucho]] ______ [[clothes|ropa]].'"},
                                     {   'correct_idx': 1,
                                         'options': [   ('Countable', 'Contable'),
                                                        ('Uncountable', 'Incontable'),
                                                        ('Both', 'Ambos')],
                                         'question_en': "[[Is|Es]] 'Water' [[countable|contable]] [[or|o]] "
                                                        '[[uncountable|incontable]]?'},
                                     {   'correct_idx': 2,
                                         'options': [   ('Give me...', 'Dame...'),
                                                        ('I want...', 'Quiero...'),
                                                        ('Could I have...?', '¿Podría tener...?')],
                                         'question_en': '[[Which|Cuál]] [[structure|estructura]] [[orders|pide]] '
                                                        '[[food|comida]] [[politely|educadamente]] [[in|en]] [[a|un]] '
                                                        '[[restaurant|restaurante]]?'},
                                     {   'correct_idx': 1,
                                         'options': [   ('Total cost', 'Coste total'),
                                                        (   'Money returned after overpaying',
                                                            'Dinero devuelto al pagar de más'),
                                                        ('A discount', 'Un descuento')],
                                         'question_en': "[[What|Qué]] [[does|significa]] 'Change' [[mean|significa]] "
                                                        '[[when|cuando]] [[paying|pagas]] [[for|por]] '
                                                        '[[something|algo]]?'}],
            'title': 'Module 6 Review — Shopping & Food',
            'vocab': [   ('Supermarket', 'Supermercado'),
                         ('Countable', 'Contable'),
                         ('Uncountable', 'Incontable'),
                         ('Some/Any', 'Algo/Ningún'),
                         ('How much/many', 'Cuánto/Cuántos'),
                         ('Clothing store', 'Tienda de ropa'),
                         ('Restaurant', 'Restaurante'),
                         ('Cooking', 'Cocina'),
                         ('Health', 'Salud'),
                         ('Money', 'Dinero'),
                         ('Too/Enough', 'Demasiado/Suficiente'),
                         ('Should', 'Debería'),
                         ('Pay for', 'Pagar por'),
                         ('Spend on', 'Gastar en')]}})


# ─── BLOCK GENERATORS (stub — Phase 1) ────────────────────────────────────────

BLOCK_TITLES = {
    1: "Vocabulary Introduction",
    2: "Vocabulary in Context",
    3: "Grammar — Affirmative",
    4: "Grammar — Negative & Questions",
    5: "Reading Comprehension",
    6: "Production",
}

BLOCK_MASTERY = {
    1: "vocabulary",
    2: "vocabulary",
    3: "grammar",
    4: "grammar",
    5: "reading",
    6: "production",
}

BLOCK_COMPLEXITY = {
    1: 1,
    2: 2,
    3: 2,
    4: 2,
    5: 2,
    6: 3,
}


def _mc(interaction_id, prompt_es, stimulus_en, options, correct_answer, mastery_tag, complexity):
    return {
        "interaction_id": interaction_id,
        "type": "multiple-choice",
        "prompt_es": prompt_es,
        "mastery_tag": mastery_tag,
        "complexity": complexity,
        "stimulus_en": stimulus_en,
        "options": options,
        "correct_answer": correct_answer,
    }


def _fb(interaction_id, prompt_es, stimulus_en, correct_answer, mastery_tag, complexity):
    return {
        "interaction_id": interaction_id,
        "type": "fill-blank",
        "prompt_es": prompt_es,
        "mastery_tag": mastery_tag,
        "complexity": complexity,
        "stimulus_en": stimulus_en,
        "correct_answer": correct_answer,
    }


def _sb(interaction_id, prompt_es, options, correct_answer, mastery_tag, complexity):
    return {
        "interaction_id": interaction_id,
        "type": "sentence-building",
        "prompt_es": prompt_es,
        "mastery_tag": mastery_tag,
        "complexity": complexity,
        "options": options,
        "correct_answer": correct_answer,
    }


def _rc(interaction_id, prompt_es, transcript, question_en, options, correct_answer):
    return {
        "interaction_id": interaction_id,
        "type": "reading-comprehension",
        "prompt_es": prompt_es,
        "mastery_tag": "reading",
        "complexity": 2,
        "transcript": transcript,
        "question_en": question_en,
        "options": options,
        "correct_answer": correct_answer,
    }


def _tf(interaction_id, prompt_es, stimulus_en, correct_answer, mastery_tag, complexity):
    return {
        "interaction_id": interaction_id,
        "type": "true-false",
        "prompt_es": prompt_es,
        "mastery_tag": mastery_tag,
        "complexity": complexity,
        "stimulus_en": stimulus_en,
        "correct_answer": correct_answer,
    }


def _make_opts(pairs):
    return [{"id": f"o{i+1}", "text": bi(en, es)} for i, (en, es) in enumerate(pairs)]


def _make_tiles(words_bilingual):
    return [{"id": f"w{i+1}", "text": bi(en, es)} for i, (en, es) in enumerate(words_bilingual)]


def _correct_id(pairs, idx):
    return f"o{idx + 1}"


# B1: multiple-choice x6, fill-blank x4
def gen_b1(unit_id, data, start_i):
    random.seed(unit_id * 1000 + 1)
    vocab = data["vocab"]
    mastery = BLOCK_MASTERY[1]
    cmpl = BLOCK_COMPLEXITY[1]
    exercises = []
    i = start_i

    for k in range(6):
        v_idx = k % len(vocab)
        en, es = vocab[v_idx]
        distractors = [(vocab[(v_idx + 1) % len(vocab)][1], vocab[(v_idx + 1) % len(vocab)][0]),
                       (vocab[(v_idx + 2) % len(vocab)][1], vocab[(v_idx + 2) % len(vocab)][0])]
        correct_pos = k % 3
        opts_data = list(distractors)
        opts_data.insert(correct_pos, (es, en))
        opts = [{"id": f"o{j+1}", "text": bi(t, src)} for j, (t, src) in enumerate(opts_data)]
        correct_ans = f"o{correct_pos + 1}"
        exercises.append(_mc(
            make_id(unit_id, i),
            bi("Choose", "Elige") + " " + bi("the", "la") + " " + bi("correct", "correcta") + " " + bi("translation", "traducción") + ".",
            bi(en, es),
            opts,
            correct_ans,
            mastery,
            cmpl,
        ))
        i += 1

    for k in range(4):
        v_idx = (k + 6) % len(vocab)
        en, es = vocab[v_idx]
        exercises.append(_fb(
            make_id(unit_id, i),
            bi("Complete", "Completa") + " " + bi("the", "la") + " " + bi("translation", "traducción") + ".",
            bi("______", es),
            en,
            mastery,
            cmpl,
        ))
        i += 1

    return exercises, i


# B2: multiple-choice x4, fill-blank x3, sentence-building x3
def gen_b2(unit_id, data, start_i):
    random.seed(unit_id * 1000 + 2)
    vocab = data["vocab"]
    grammar = data["grammar_patterns"]
    mastery = BLOCK_MASTERY[2]
    cmpl = BLOCK_COMPLEXITY[2]
    exercises = []
    i = start_i

    for k in range(4):
        v_idx = (k + 3) % len(vocab)
        en, es = vocab[v_idx]
        d1 = vocab[(v_idx + 3) % len(vocab)]
        d2 = vocab[(v_idx + 6) % len(vocab)]
        correct_pos = k % 3
        opts_raw = [d1, d2]
        opts_raw.insert(correct_pos, (en, es))
        opts = [{"id": f"o{j+1}", "text": bi(t, s)} for j, (t, s) in enumerate(opts_raw)]
        exercises.append(_mc(
            make_id(unit_id, i),
            bi("Choose", "Elige") + " " + bi("the", "la") + " " + bi("correct", "correcta") + " " + bi("option", "opción") + ".",
            bi(en, es),
            opts,
            f"o{correct_pos + 1}",
            mastery,
            cmpl,
        ))
        i += 1

    for k in range(3):
        pat, ans = grammar[k % len(grammar)]
        exercises.append(_fb(
            make_id(unit_id, i),
            bi("Complete", "Completa") + " " + bi("the", "la") + " " + bi("sentence", "frase") + ".",
            pat,
            ans,
            mastery,
            cmpl,
        ))
        i += 1

    for k in range(3):
        v_idx = (k * 4) % len(vocab)
        en1, es1 = vocab[v_idx]
        en2, es2 = vocab[(v_idx + 1) % len(vocab)]
        en3, es3 = vocab[(v_idx + 2) % len(vocab)]
        tiles = _make_tiles([(en1, es1), (en3, es3), (en2, es2)])
        correct = ["w1", "w3", "w2"]
        exercises.append(_sb(
            make_id(unit_id, i),
            bi("Build", "Construye") + " " + bi("the", "la") + " " + bi("phrase", "frase") + ".",
            tiles,
            correct,
            mastery,
            cmpl,
        ))
        i += 1

    return exercises, i


# B3: fill-blank x4, multiple-choice x4, sentence-building x2
def gen_b3(unit_id, data, start_i):
    random.seed(unit_id * 1000 + 3)
    grammar = data["grammar_patterns"]
    vocab = data["vocab"]
    mastery = BLOCK_MASTERY[3]
    cmpl = BLOCK_COMPLEXITY[3]
    exercises = []
    i = start_i

    for k in range(4):
        pat, ans = grammar[k % len(grammar)]
        exercises.append(_fb(
            make_id(unit_id, i),
            bi("Complete", "Completa") + " " + bi("the", "la") + " " + bi("affirmative", "afirmativa") + " " + bi("sentence", "frase") + ".",
            pat,
            ans,
            mastery,
            cmpl,
        ))
        i += 1

    for k in range(4):
        pat, ans = grammar[(k + 4) % len(grammar)]
        distractors = [grammar[(k + 1) % len(grammar)][1], grammar[(k + 2) % len(grammar)][1]]
        correct_pos = k % 3
        all_ans = list(distractors)
        all_ans.insert(correct_pos, ans)
        all_ans = all_ans[:3]
        opts = [{"id": f"o{j+1}", "text": bi(a, a)} for j, a in enumerate(all_ans)]
        exercises.append(_mc(
            make_id(unit_id, i),
            bi("Choose", "Elige") + " " + bi("the", "la") + " " + bi("correct", "correcta") + " " + bi("word", "palabra") + ".",
            pat,
            opts,
            f"o{correct_pos + 1}",
            mastery,
            cmpl,
        ))
        i += 1

    for k in range(2):
        v_idx = (k * 5) % len(vocab)
        en1, es1 = vocab[v_idx]
        en2, es2 = vocab[(v_idx + 2) % len(vocab)]
        en3, es3 = vocab[(v_idx + 4) % len(vocab)]
        tiles = _make_tiles([(en2, es2), (en1, es1), (en3, es3)])
        exercises.append(_sb(
            make_id(unit_id, i),
            bi("Arrange", "Ordena") + " " + bi("the", "las") + " " + bi("words", "palabras") + ".",
            tiles,
            ["w2", "w1", "w3"],
            mastery,
            cmpl,
        ))
        i += 1

    return exercises, i


# B4: fill-blank x3, multiple-choice x4, sentence-building x3
def gen_b4(unit_id, data, start_i):
    random.seed(unit_id * 1000 + 4)
    grammar = data["grammar_patterns"]
    vocab = data["vocab"]
    mastery = BLOCK_MASTERY[4]
    cmpl = BLOCK_COMPLEXITY[4]
    exercises = []
    i = start_i

    for k in range(3):
        pat, ans = grammar[(k + 2) % len(grammar)]
        exercises.append(_fb(
            make_id(unit_id, i),
            bi("Complete", "Completa") + " " + bi("the", "la") + " " + bi("sentence", "frase") + ".",
            pat,
            ans,
            mastery,
            cmpl,
        ))
        i += 1

    for k in range(4):
        pat, ans = grammar[(k + 3) % len(grammar)]
        distractors = [grammar[(k + 5) % len(grammar)][1], grammar[(k + 6) % len(grammar)][1]]
        correct_pos = k % 3
        all_ans = list(distractors)
        all_ans.insert(correct_pos, ans)
        all_ans = all_ans[:3]
        opts = [{"id": f"o{j+1}", "text": bi(a, a)} for j, a in enumerate(all_ans)]
        exercises.append(_mc(
            make_id(unit_id, i),
            bi("Choose", "Elige") + " " + bi("the", "la") + " " + bi("correct", "correcta") + " " + bi("form", "forma") + ".",
            pat,
            opts,
            f"o{correct_pos + 1}",
            mastery,
            cmpl,
        ))
        i += 1

    for k in range(3):
        v_idx = (k * 3 + 1) % len(vocab)
        en1, es1 = vocab[v_idx]
        en2, es2 = vocab[(v_idx + 1) % len(vocab)]
        en3, es3 = vocab[(v_idx + 3) % len(vocab)]
        en4, es4 = vocab[(v_idx + 5) % len(vocab)]
        tiles = _make_tiles([(en3, es3), (en1, es1), (en4, es4), (en2, es2)])
        exercises.append(_sb(
            make_id(unit_id, i),
            bi("Build", "Construye") + " " + bi("the", "la") + " " + bi("sentence", "frase") + ".",
            tiles,
            ["w2", "w1", "w4", "w3"],
            mastery,
            cmpl,
        ))
        i += 1

    return exercises, i


# B5: reading-comprehension x10
def gen_b5(unit_id, data, start_i):
    dialogue = data["dialogue_lines"]
    questions = data["reading_questions"]
    transcript = " ".join(dialogue)
    exercises = []
    i = start_i

    for k in range(10):
        q = questions[k]
        opts_raw = q["options"]
        correct_idx = q["correct_idx"]
        opts = [{"id": f"o{j+1}", "text": bi(en, es)} for j, (en, es) in enumerate(opts_raw)]
        exercises.append(_rc(
            make_id(unit_id, i),
            bi("Read", "Lee") + " " + bi("the", "el") + " " + bi("text", "texto") + " " + bi("and", "y") + " " + bi("answer", "responde") + ".",
            transcript,
            q["question_en"],
            opts,
            f"o{correct_idx + 1}",
        ))
        i += 1

    return exercises, i


# B6: sentence-building x4, fill-blank x3, true-false x3
def gen_b6(unit_id, data, start_i):
    random.seed(unit_id * 1000 + 6)
    vocab = data["vocab"]
    grammar = data["grammar_patterns"]
    dialogue = data["dialogue_lines"]
    mastery = BLOCK_MASTERY[6]
    cmpl = BLOCK_COMPLEXITY[6]
    exercises = []
    i = start_i

    for k in range(4):
        v_idx = (k * 3) % len(vocab)
        en1, es1 = vocab[v_idx]
        en2, es2 = vocab[(v_idx + 1) % len(vocab)]
        en3, es3 = vocab[(v_idx + 2) % len(vocab)]
        en4, es4 = vocab[(v_idx + 4) % len(vocab)]
        tiles = _make_tiles([(en2, es2), (en4, es4), (en1, es1), (en3, es3)])
        exercises.append(_sb(
            make_id(unit_id, i),
            bi("Build", "Construye") + " " + bi("a", "una") + " " + bi("sentence", "frase") + " " + bi("using", "usando") + " " + bi("these", "estas") + " " + bi("words", "palabras") + ".",
            tiles,
            ["w3", "w1", "w4", "w2"],
            mastery,
            cmpl,
        ))
        i += 1

    for k in range(3):
        pat, ans = grammar[(k + 5) % len(grammar)]
        exercises.append(_fb(
            make_id(unit_id, i),
            bi("Complete", "Completa") + " " + bi("the", "la") + " " + bi("sentence", "frase") + ".",
            pat,
            ans,
            mastery,
            cmpl,
        ))
        i += 1

    tf_statements = [
        (dialogue[0], True),
        (dialogue[1] if len(dialogue) > 1 else dialogue[0], False),
        (dialogue[2] if len(dialogue) > 2 else dialogue[0], True),
    ]
    for k, (stmt, truth) in enumerate(tf_statements):
        exercises.append(_tf(
            make_id(unit_id, i),
            bi("True", "Verdadero") + " " + bi("or", "o") + " " + bi("False", "Falso") + "?",
            stmt,
            truth,
            mastery,
            cmpl,
        ))
        i += 1

    return exercises, i


# ─── BUILD / VALIDATE ─────────────────────────────────────────────────────────

def build_unit(unit_id: int, data: dict) -> dict:
    counter = 1
    blocks = []
    generators = [gen_b1, gen_b2, gen_b3, gen_b4, gen_b5, gen_b6]

    for block_num, gen_fn in enumerate(generators, start=1):
        exercises, counter = gen_fn(unit_id, data, counter)
        assert len(exercises) == 10, (
            f"Unit {unit_id} B{block_num}: expected 10 exercises, got {len(exercises)}"
        )
        blocks.append({
            "block_id": f"B{block_num}",
            "title": BLOCK_TITLES[block_num],
            "content": exercises,
        })

    return {
        "course": {
            "unit_id": f"unit{unit_id}",
            "unit_title": data["title"],
            "level": "A1",
            "total_duration_minutes": 60,
            "language_ui": "es-ES",
            "target_language": "en",
        },
        "learning_outcomes": data.get("learning_outcomes", []),
        "blocks": blocks,
    }


def validate_unit(unit_json: dict, unit_id: int):
    blocks = unit_json["blocks"]

    # invariant 3: exactly 6 blocks with correct block_ids
    block_ids = [b["block_id"] for b in blocks]
    expected_ids = {"B1", "B2", "B3", "B4", "B5", "B6"}
    assert set(block_ids) == expected_ids, (
        f"Unit {unit_id}: block_ids {block_ids} != expected {sorted(expected_ids)}"
    )
    assert len(block_ids) == 6, f"Unit {unit_id}: expected 6 blocks, got {len(block_ids)}"

    # invariant 2: each block has exactly 10 exercises
    for b in blocks:
        assert len(b["content"]) == 10, (
            f"Unit {unit_id} {b['block_id']}: expected 10 exercises, got {len(b['content'])}"
        )

    all_exercises = [ex for b in blocks for ex in b["content"]]

    # invariant 1: total == 60
    assert len(all_exercises) == 60, (
        f"Unit {unit_id}: expected 60 exercises total, got {len(all_exercises)}"
    )

    # invariant 4: all types valid
    for ex in all_exercises:
        assert ex["type"] in VALID_TYPES, (
            f"Unit {unit_id} {ex['interaction_id']}: invalid type '{ex['type']}'"
        )

    # invariant 5: interaction_id pattern and uniqueness
    id_pattern = re.compile(r"^A1_U\d+_I\d+$")
    seen_ids = set()
    for ex in all_exercises:
        iid = ex["interaction_id"]
        assert id_pattern.match(iid), (
            f"Unit {unit_id}: interaction_id '{iid}' does not match pattern"
        )
        assert iid not in seen_ids, f"Unit {unit_id}: duplicate interaction_id '{iid}'"
        seen_ids.add(iid)

    # invariant 6: correct_answer not None
    for ex in all_exercises:
        assert ex.get("correct_answer") is not None, (
            f"Unit {unit_id} {ex['interaction_id']}: correct_answer is None"
        )

    # invariant 7: exercises with options have valid option count
    for ex in all_exercises:
        if ex["type"] in ("multiple-choice", "reading-comprehension", "pronunciation"):
            opts = ex.get("options", [])
            assert len(opts) == 3, (
                f"Unit {unit_id} {ex['interaction_id']}: expected 3 options, got {len(opts)}"
            )
        if ex["type"] in ("sentence-building", "reorder-words"):
            opts = ex.get("options", [])
            assert len(opts) >= 2, (
                f"Unit {unit_id} {ex['interaction_id']}: sentence-building needs >= 2 tiles"
            )


# ─── CLI ──────────────────────────────────────────────────────────────────────

def parse_args():
    parser = argparse.ArgumentParser(
        description="Generate A1 English course JSON files from templates."
    )
    parser.add_argument(
        "--units",
        type=str,
        default=None,
        help="Unit or range to generate, e.g. '5' or '1-10'. Default: all 60.",
    )
    parser.add_argument(
        "--output-dir",
        type=str,
        default=DEFAULT_OUTPUT_DIR,
        help=f"Output directory (default: {DEFAULT_OUTPUT_DIR})",
    )
    return parser.parse_args()


def main():
    args = parse_args()
    output_dir = args.output_dir
    os.makedirs(output_dir, exist_ok=True)

    if args.units is None:
        unit_range = range(1, UNITS_COUNT + 1)
    elif "-" in args.units:
        parts = args.units.split("-")
        unit_range = range(int(parts[0]), int(parts[1]) + 1)
    else:
        n = int(args.units)
        unit_range = range(n, n + 1)

    total = len(unit_range)
    generated = 0
    errors = []

    for unit_id in unit_range:
        if unit_id not in UNIT_DATA:
            errors.append(f"Unit {unit_id}: no data available (UNIT_DATA missing entry)")
            continue
        data = UNIT_DATA[unit_id]
        try:
            unit_json = build_unit(unit_id, data)
            validate_unit(unit_json, unit_id)
            path = os.path.join(output_dir, f"unit{unit_id}.json")
            with open(path, "w", encoding="utf-8") as f:
                json.dump(unit_json, f, ensure_ascii=False, indent=2)
            print(f"Unit {unit_id} ({data['title']}): 60 exercises across 6 blocks \u2713")
            generated += 1
        except AssertionError as e:
            msg = f"Unit {unit_id}: AssertionError — {e}"
            print(f"  ERROR: {msg}", file=sys.stderr)
            errors.append(msg)
        except Exception as e:
            msg = f"Unit {unit_id}: {type(e).__name__} — {e}"
            print(f"  ERROR: {msg}", file=sys.stderr)
            errors.append(msg)

    print(f"\nGenerated: {generated}/{total} units")
    if errors:
        print("Errors:")
        for err in errors:
            print(f"  {err}")
    else:
        print("Errors: none")


if __name__ == "__main__":
    main()
