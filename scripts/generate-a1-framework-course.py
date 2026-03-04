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
