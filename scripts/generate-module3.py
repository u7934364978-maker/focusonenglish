import json
import os

BASE = "src/content/cursos/ingles-a1"

def write_unit(num, data):
    path = os.path.join(BASE, f"unit{num}.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Written unit{num}.json ({os.path.getsize(path)} bytes)")

# ─────────────────────────────────────────────────────────────────────────────
# UNIT 21: Rooms in a House
# ─────────────────────────────────────────────────────────────────────────────
unit21 = {
  "course": {
    "language_ui": "es-ES",
    "target_language": "en",
    "level": "A1",
    "unit_id": "U21",
    "unit_title": "Rooms in a House",
    "total_duration_minutes": 120
  },
  "learning_outcomes": [
    "Identify and name the main rooms of a house in English",
    "Use 'There is' and 'There are' to describe a home",
    "Use adjectives (bright, small, cozy) to describe rooms",
    "Understand basic prepositions of place (in, on, at)"
  ],
  "blocks": [
    {
      "block_id": "B1",
      "title": "Vocabulary: Main Rooms",
      "content": [
        {
          "interaction_id": "U21_I1",
          "type": "matching",
          "prompt_es": "Une cada habitación con su traducción:",
          "pairs": [
            {"id": "p1", "left": "[[Living room|Salón]]", "right": "Dormitorio"},
            {"id": "p2", "left": "[[Bedroom|Dormitorio]]", "right": "Cocina"},
            {"id": "p3", "left": "[[Kitchen|Cocina]]", "right": "Baño"},
            {"id": "p4", "left": "[[Bathroom|Baño]]", "right": "Salón"}
          ],
          "correct_answer": {"p1": "p4", "p2": "p1", "p3": "p2", "p4": "p3"},
          "mastery_tag": "vocabulary", "complexity": 1
        },
        {
          "interaction_id": "U21_I2",
          "type": "multiple_choice",
          "prompt_es": "¿Cómo se dice '[[kitchen|cocina]]' en español?",
          "options": [
            {"id": "o1", "text": "Salón"},
            {"id": "o2", "text": "Cocina"},
            {"id": "o3", "text": "Dormitorio"}
          ],
          "correct_answer": "o2",
          "mastery_tag": "vocabulary", "complexity": 1
        },
        {
          "interaction_id": "U21_I3",
          "type": "multiple_choice",
          "prompt_es": "¿En qué habitación duermes ([[sleep|duermes]])?",
          "options": [
            {"id": "o1", "text": "[[In the kitchen|En la cocina]]"},
            {"id": "o2", "text": "[[In the bathroom|En el baño]]"},
            {"id": "o3", "text": "[[In the bedroom|En el dormitorio]]"}
          ],
          "correct_answer": "o3",
          "mastery_tag": "vocabulary", "complexity": 1
        },
        {
          "interaction_id": "U21_I4",
          "type": "multiple_choice",
          "prompt_es": "¿Dónde [[cook|cocinas]]?",
          "options": [
            {"id": "o1", "text": "[[In the kitchen|En la cocina]]"},
            {"id": "o2", "text": "[[In the bedroom|En el dormitorio]]"},
            {"id": "o3", "text": "[[In the living room|En el salón]]"}
          ],
          "correct_answer": "o1",
          "mastery_tag": "vocabulary", "complexity": 1
        },
        {
          "interaction_id": "U21_I5",
          "type": "matching",
          "prompt_es": "Une más habitaciones:",
          "pairs": [
            {"id": "p1", "left": "[[Garden|Jardín]]", "right": "Ático"},
            {"id": "p2", "left": "[[Attic|Ático]]", "right": "Garaje"},
            {"id": "p3", "left": "[[Garage|Garaje]]", "right": "Recibidor"},
            {"id": "p4", "left": "[[Hall|Recibidor]]", "right": "Jardín"}
          ],
          "correct_answer": {"p1": "p4", "p2": "p1", "p3": "p2", "p4": "p3"},
          "mastery_tag": "vocabulary", "complexity": 1
        },
        {
          "interaction_id": "U21_I6",
          "type": "fill_blanks",
          "prompt_es": "Completa: 'I [[watch|veo]] TV in the ___.' (salón)",
          "correct_answer": "living room",
          "mastery_tag": "vocabulary", "complexity": 2
        },
        {
          "interaction_id": "U21_I7",
          "type": "multiple_choice",
          "prompt_es": "¿Cómo se dice '[[dining room|comedor]]'?",
          "options": [
            {"id": "o1", "text": "[[Dining room|Comedor]]"},
            {"id": "o2", "text": "[[Bedroom|Dormitorio]]"},
            {"id": "o3", "text": "[[Bathroom|Baño]]"}
          ],
          "correct_answer": "o1",
          "mastery_tag": "vocabulary", "complexity": 1
        },
        {
          "interaction_id": "U21_I8",
          "type": "fill_blanks",
          "prompt_es": "Completa: 'I [[brush|me lavo]] my [[teeth|dientes]] in the ___.' (baño)",
          "correct_answer": "bathroom",
          "mastery_tag": "vocabulary", "complexity": 2
        },
        {
          "interaction_id": "U21_I9",
          "type": "multiple_choice",
          "prompt_es": "¿Qué habitación tiene una [[bed|cama]]?",
          "options": [
            {"id": "o1", "text": "[[Kitchen|Cocina]]"},
            {"id": "o2", "text": "[[Bedroom|Dormitorio]]"},
            {"id": "o3", "text": "[[Garage|Garaje]]"}
          ],
          "correct_answer": "o2",
          "mastery_tag": "vocabulary", "complexity": 1
        },
        {
          "interaction_id": "U21_I10",
          "type": "sentence_building",
          "prompt_es": "Forma la frase: 'La cocina es pequeña.'",
          "words": [
            {"id": "w1", "text": "[[The|La]]"},
            {"id": "w2", "text": "[[kitchen|cocina]]"},
            {"id": "w3", "text": "[[is|es]]"},
            {"id": "w4", "text": "[[small|pequeña]]"}
          ],
          "correct_answer": ["w1", "w2", "w3", "w4"],
          "mastery_tag": "vocabulary", "complexity": 2
        }
      ]
    },
    {
      "block_id": "B2",
      "title": "Grammar: There is / There are",
      "content": [
        {
          "interaction_id": "U21_I11",
          "type": "multiple_choice",
          "prompt_es": "¿Cómo se dice 'Hay un salón'?",
          "options": [
            {"id": "o1", "text": "[[There are a living room|Hay unos salones]]"},
            {"id": "o2", "text": "[[There is a living room|Hay un salón]]"},
            {"id": "o3", "text": "[[Is there living room|Existe salón]]"}
          ],
          "correct_answer": "o2",
          "mastery_tag": "grammar", "complexity": 1
        },
        {
          "interaction_id": "U21_I12",
          "type": "multiple_choice",
          "prompt_es": "Elige la forma correcta: 'Hay tres dormitorios.'",
          "options": [
            {"id": "o1", "text": "[[There is three bedrooms|Hay tres dormitorios (incorrecto)]]"},
            {"id": "o2", "text": "[[There have three bedrooms|Hay tres dormitorios (incorrecto)]]"},
            {"id": "o3", "text": "[[There are three bedrooms|Hay tres dormitorios]]"}
          ],
          "correct_answer": "o3",
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I13",
          "type": "fill_blanks",
          "prompt_es": "Completa: '___ a big [[kitchen|cocina]] in my [[house|casa]].'",
          "correct_answer": "There is",
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I14",
          "type": "fill_blanks",
          "prompt_es": "Completa: '___ four [[rooms|habitaciones]] in the [[flat|piso]].'",
          "correct_answer": "There are",
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I15",
          "type": "multiple_choice",
          "prompt_es": "¿Cómo preguntas '¿Hay un jardín?'",
          "options": [
            {"id": "o1", "text": "[[Is there a garden?|¿Hay un jardín?]]"},
            {"id": "o2", "text": "[[Are there a garden?|¿Hay un jardín? (incorrecto)]]"},
            {"id": "o3", "text": "[[There is garden?|¿Hay jardín? (incorrecto)]]"}
          ],
          "correct_answer": "o1",
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I16",
          "type": "multiple_choice",
          "prompt_es": "¿Cómo respondes afirmativamente a '[[Is there a bathroom?|¿Hay un baño?]]'",
          "options": [
            {"id": "o1", "text": "[[Yes, there are|Sí, hay (plural — incorrecto)]]"},
            {"id": "o2", "text": "[[Yes, there is|Sí, lo hay]]"},
            {"id": "o3", "text": "[[Yes, it is|Sí, es (incorrecto)]]"}
          ],
          "correct_answer": "o2",
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I17",
          "type": "fill_blanks",
          "prompt_es": "Completa: '[[Are|Hay]] there [[any|algún]] [[chairs|sillas]] in the [[kitchen|cocina]]?' — 'No, there ___.'",
          "correct_answer": "aren't",
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I18",
          "type": "sentence_building",
          "prompt_es": "Forma la frase: 'Hay dos baños en mi casa.'",
          "words": [
            {"id": "w1", "text": "[[There|Hay]]"},
            {"id": "w2", "text": "[[are|hay (pl)]]"},
            {"id": "w3", "text": "[[two|dos]]"},
            {"id": "w4", "text": "[[bathrooms|baños]]"},
            {"id": "w5", "text": "[[in|en]]"},
            {"id": "w6", "text": "[[my|mi]]"},
            {"id": "w7", "text": "[[house|casa]]"}
          ],
          "correct_answer": ["w1", "w2", "w3", "w4", "w5", "w6", "w7"],
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I19",
          "type": "multiple_choice",
          "prompt_es": "¿Cuál es la negativa de '[[There is a garage|Hay un garaje]]'?",
          "options": [
            {"id": "o1", "text": "[[There isn't a garage|No hay un garaje]]"},
            {"id": "o2", "text": "[[There aren't a garage|No hay un garaje (incorrecto)]]"},
            {"id": "o3", "text": "[[There no is a garage|No hay garaje (incorrecto)]]"}
          ],
          "correct_answer": "o1",
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I20",
          "type": "multiple_choice",
          "prompt_es": "Elige: '[[Are|Hay]] there [[any|algún]] [[windows|ventanas]] in the [[bedroom|dormitorio]]?'",
          "options": [
            {"id": "o1", "text": "[[Yes, there is|Sí, hay (singular — incorrecto)]]"},
            {"id": "o2", "text": "[[No, there aren't|No, no las hay]]"},
            {"id": "o3", "text": "[[No, there isn't|No, no hay (singular — incorrecto)]]"}
          ],
          "correct_answer": "o2",
          "mastery_tag": "grammar", "complexity": 3
        }
      ]
    },
    {
      "block_id": "B3",
      "title": "Adjectives for Rooms",
      "content": [
        {
          "interaction_id": "U21_I21",
          "type": "matching",
          "prompt_es": "Une cada adjetivo con su traducción:",
          "pairs": [
            {"id": "p1", "left": "[[Bright|Luminoso]]", "right": "Acogedor"},
            {"id": "p2", "left": "[[Cozy|Acogedor]]", "right": "Luminoso"},
            {"id": "p3", "left": "[[Small|Pequeño]]", "right": "Espacioso"},
            {"id": "p4", "left": "[[Spacious|Espacioso]]", "right": "Pequeño"}
          ],
          "correct_answer": {"p1": "p2", "p2": "p1", "p3": "p4", "p4": "p3"},
          "mastery_tag": "vocabulary", "complexity": 1
        },
        {
          "interaction_id": "U21_I22",
          "type": "multiple_choice",
          "prompt_es": "¿Qué significa '[[cozy|acogedor]]'?",
          "options": [
            {"id": "o1", "text": "Grande"},
            {"id": "o2", "text": "Acogedor"},
            {"id": "o3", "text": "Ruidoso"}
          ],
          "correct_answer": "o2",
          "mastery_tag": "vocabulary", "complexity": 1
        },
        {
          "interaction_id": "U21_I23",
          "type": "multiple_choice",
          "prompt_es": "¿Cuál es la traducción de 'La habitación es luminosa'?",
          "options": [
            {"id": "o1", "text": "[[The room is dark|La habitación está oscura]]"},
            {"id": "o2", "text": "[[The room is noisy|La habitación es ruidosa]]"},
            {"id": "o3", "text": "[[The room is bright|La habitación es luminosa]]"}
          ],
          "correct_answer": "o3",
          "mastery_tag": "vocabulary", "complexity": 2
        },
        {
          "interaction_id": "U21_I24",
          "type": "fill_blanks",
          "prompt_es": "Completa: 'My [[bedroom|dormitorio]] is very ___.' (acogedora → acogedor)",
          "correct_answer": "cozy",
          "mastery_tag": "vocabulary", "complexity": 2
        },
        {
          "interaction_id": "U21_I25",
          "type": "multiple_choice",
          "prompt_es": "¿Cómo describes un salón con mucha luz natural?",
          "options": [
            {"id": "o1", "text": "[[The living room is dark|El salón está oscuro]]"},
            {"id": "o2", "text": "[[The living room is bright|El salón es luminoso]]"},
            {"id": "o3", "text": "[[The living room is small|El salón es pequeño]]"}
          ],
          "correct_answer": "o2",
          "mastery_tag": "vocabulary", "complexity": 2
        },
        {
          "interaction_id": "U21_I26",
          "type": "sentence_building",
          "prompt_es": "Forma la frase: 'El baño es pequeño pero acogedor.'",
          "words": [
            {"id": "w1", "text": "[[The|El]]"},
            {"id": "w2", "text": "[[bathroom|baño]]"},
            {"id": "w3", "text": "[[is|es]]"},
            {"id": "w4", "text": "[[small|pequeño]]"},
            {"id": "w5", "text": "[[but|pero]]"},
            {"id": "w6", "text": "[[cozy|acogedor]]"}
          ],
          "correct_answer": ["w1", "w2", "w3", "w4", "w5", "w6"],
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I27",
          "type": "multiple_choice",
          "prompt_es": "¿Cuál de estas frases es correcta en inglés?",
          "options": [
            {"id": "o1", "text": "[[A bright room is the kitchen|Una habitación luminosa es la cocina]]"},
            {"id": "o2", "text": "[[The kitchen is bright room|La cocina es habitación luminosa (incorrecto)]]"},
            {"id": "o3", "text": "[[The kitchen is a bright room|La cocina es una habitación luminosa]]"}
          ],
          "correct_answer": "o3",
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I28",
          "type": "matching",
          "prompt_es": "Une cada habitación con el adjetivo más apropiado:",
          "pairs": [
            {"id": "p1", "left": "[[Living room|Salón]]", "right": "Pequeño"},
            {"id": "p2", "left": "[[Bedroom|Dormitorio]]", "right": "Luminoso"},
            {"id": "p3", "left": "[[Bathroom|Baño]]", "right": "Acogedor"},
            {"id": "p4", "left": "[[Kitchen|Cocina]]", "right": "Espacioso"}
          ],
          "correct_answer": {"p1": "p4", "p2": "p3", "p3": "p1", "p4": "p2"},
          "mastery_tag": "vocabulary", "complexity": 2
        },
        {
          "interaction_id": "U21_I29",
          "type": "fill_blanks",
          "prompt_es": "Completa: 'Our [[garden|jardín]] is very ___.' (espacioso)",
          "correct_answer": "spacious",
          "mastery_tag": "vocabulary", "complexity": 2
        },
        {
          "interaction_id": "U21_I30",
          "type": "multiple_choice",
          "prompt_es": "¿Qué adjetivo usarías para una habitación grande?",
          "options": [
            {"id": "o1", "text": "[[Cozy|Acogedor]]"},
            {"id": "o2", "text": "[[Small|Pequeño]]"},
            {"id": "o3", "text": "[[Spacious|Espacioso]]"}
          ],
          "correct_answer": "o3",
          "mastery_tag": "vocabulary", "complexity": 1
        }
      ]
    },
    {
      "block_id": "B4",
      "title": "Prepositions: in, on, at",
      "content": [
        {
          "interaction_id": "U21_I31",
          "type": "multiple_choice",
          "prompt_es": "Usamos '[[in|en]]' para habitaciones. ¿Cuál es correcta?",
          "options": [
            {"id": "o1", "text": "[[She is on the kitchen|Ella está en la cocina (incorrecto)]]"},
            {"id": "o2", "text": "[[She is at the kitchen|Ella está en la cocina (incorrecto)]]"},
            {"id": "o3", "text": "[[She is in the kitchen|Ella está en la cocina]]"}
          ],
          "correct_answer": "o3",
          "mastery_tag": "grammar", "complexity": 1
        },
        {
          "interaction_id": "U21_I32",
          "type": "fill_blanks",
          "prompt_es": "Completa: 'The [[cat|gato]] is ___ the [[sofa|sofá]].' (encima de)",
          "correct_answer": "on",
          "mastery_tag": "grammar", "complexity": 1
        },
        {
          "interaction_id": "U21_I33",
          "type": "multiple_choice",
          "prompt_es": "¿Qué preposición usamos para 'at home' (en casa)?",
          "options": [
            {"id": "o1", "text": "[[in|en (habitación)]]"},
            {"id": "o2", "text": "[[at|en (lugar general)]]"},
            {"id": "o3", "text": "[[on|encima]]"}
          ],
          "correct_answer": "o2",
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I34",
          "type": "fill_blanks",
          "prompt_es": "Completa: 'My [[dog|perro]] sleeps ___ the [[bedroom|dormitorio]].' (en)",
          "correct_answer": "in",
          "mastery_tag": "grammar", "complexity": 1
        },
        {
          "interaction_id": "U21_I35",
          "type": "multiple_choice",
          "prompt_es": "¿Cuál es correcta: 'El libro está encima de la mesa'?",
          "options": [
            {"id": "o1", "text": "[[The book is at the table|El libro está en la mesa (incorrecto)]]"},
            {"id": "o2", "text": "[[The book is on the table|El libro está encima de la mesa]]"},
            {"id": "o3", "text": "[[The book is in the table|El libro está dentro de la mesa (incorrecto)]]"}
          ],
          "correct_answer": "o2",
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I36",
          "type": "matching",
          "prompt_es": "Une cada preposición con su uso correcto:",
          "pairs": [
            {"id": "p1", "left": "[[in|en]]", "right": "encima de la mesa"},
            {"id": "p2", "left": "[[on|sobre]]", "right": "en casa (general)"},
            {"id": "p3", "left": "[[at|en (lugar)]]", "right": "dentro de la habitación"}
          ],
          "correct_answer": {"p1": "p3", "p2": "p1", "p3": "p2"},
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I37",
          "type": "fill_blanks",
          "prompt_es": "Completa: 'They are ___ home right now.' (en casa)",
          "correct_answer": "at",
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I38",
          "type": "multiple_choice",
          "prompt_es": "¿Cuál de estas frases es correcta?",
          "options": [
            {"id": "o1", "text": "[[I am in school|Estoy en el colegio]]"},
            {"id": "o2", "text": "[[I am at school|Estoy en el colegio]]"},
            {"id": "o3", "text": "[[Both are correct|Las dos son correctas]]"}
          ],
          "correct_answer": "o3",
          "mastery_tag": "grammar", "complexity": 3
        },
        {
          "interaction_id": "U21_I39",
          "type": "sentence_building",
          "prompt_es": "Forma: 'El gato está encima de la cama.'",
          "words": [
            {"id": "w1", "text": "[[The|El]]"},
            {"id": "w2", "text": "[[cat|gato]]"},
            {"id": "w3", "text": "[[is|está]]"},
            {"id": "w4", "text": "[[on|encima de]]"},
            {"id": "w5", "text": "[[the|la]]"},
            {"id": "w6", "text": "[[bed|cama]]"}
          ],
          "correct_answer": ["w1", "w2", "w3", "w4", "w5", "w6"],
          "mastery_tag": "grammar", "complexity": 2
        },
        {
          "interaction_id": "U21_I40",
          "type": "multiple_choice",
          "prompt_es": "¿Qué preposición falta? 'The children are playing ___ the garden.'",
          "options": [
            {"id": "o1", "text": "[[at|en (lugar)]]"},
            {"id": "o2", "text": "[[on|encima]]"},
            {"id": "o3", "text": "[[in|en]]"}
          ],
          "correct_answer": "o3",
          "mastery_tag": "grammar", "complexity": 2
        }
      ]
    },
    {
      "block_id": "B5",
      "title": "Reading: My House",
      "content": [
        {
          "interaction_id": "U21_READ1",
          "type": "reading_phase",
          "prompt_es": "[[Read|Lee]] [[the|el]] [[text|texto]] [[carefully|con atención]].",
          "transcript": "[[My|Mi]] [[name|nombre]] is [[Clara|Clara]]. [[I|Yo]] [[live|vivo]] in a [[flat|piso]] in [[Madrid|Madrid]]. [[My|Mi]] [[flat|piso]] [[is|tiene]] [[four|cuatro]] [[rooms|habitaciones]]: a [[living room|salón]], a [[kitchen|cocina]], a [[bedroom|dormitorio]] and a [[bathroom|baño]]. [[There is|Hay]] also a small [[balcony|balcón]]. [[My|Mi]] [[favourite|favorita]] [[room|habitación]] is the [[living room|salón]] because it is [[bright|luminosa]] and [[cozy|acogedora]]. [[There is|Hay]] a big [[sofa|sofá]] and a [[television|televisión]] in the [[living room|salón]]. [[In|En]] [[my|mi]] [[bedroom|dormitorio]], [[there is|hay]] a [[comfortable|cómoda]] [[bed|cama]] and a [[wardrobe|armario]]. [[I|Yo]] [[love|me encanta]] [[my|mi]] [[home|hogar]]!",
          "mastery_tag": "reading", "complexity": 1
        },
        {
          "interaction_id": "U21_I41",
          "type": "multiple_choice",
          "prompt_es": "Según el texto, ¿en qué ciudad vive Clara?",
          "options": [
            {"id": "o1", "text": "[[Barcelona|Barcelona]]"},
            {"id": "o2", "text": "[[Sevilla|Sevilla]]"},
            {"id": "o3", "text": "[[Madrid|Madrid]]"}
          ],
          "correct_answer": "o3",
          "mastery_tag": "reading", "complexity": 1
        },
        {
          "interaction_id": "U21_I42",
          "type": "multiple_choice",
          "prompt_es": "¿Cuántas habitaciones tiene el piso de Clara?",
          "options": [
            {"id": "o1", "text": "[[Three|Tres]]"},
            {"id": "o2", "text": "[[Four|Cuatro]]"},
            {"id": "o3", "text": "[[Five|Cinco]]"}
          ],
          "correct_answer": "o2",
          "mastery_tag": "reading", "complexity": 1
        },
        {
          "interaction_id": "U21_I43",
          "type": "multiple_choice",
          "prompt_es": "¿Cuál es la habitación favorita de Clara?",
          "options": [
            {"id": "o1", "text": "[[The bedroom|El dormitorio]]"},
            {"id": "o2", "text": "[[The kitchen|La cocina]]"},
            {"id": "o3", "text": "[[The living room|El salón]]"}
          ],
          "correct_answer": "o3",
          "mastery_tag": "reading", "complexity": 1
        },
        {
          "interaction_id": "U21_I44",
          "type": "multiple_choice",
          "prompt_es": "¿Por qué le gusta el salón a Clara?",
          "options": [
            {"id": "o1", "text": "Porque tiene una televisión grande"},
            {"id": "o2", "text": "Porque es luminoso y acogedor"},
            {"id": "o3", "text": "Porque tiene un balcón"}
          ],
          "correct_answer": "o2",
          "mastery_tag": "reading", "complexity": 2
        },
        {
          "interaction_id": "U21_I45",
          "type": "multiple_choice",
          "prompt_es": "¿Qué hay en el dormitorio de Clara?",
          "options": [
            {"id": "o1", "text": "Una cama y un armario"},
            {"id": "o2", "text": "Un sofá y una televisión"},
            {"id": "o3", "text": "Una mesa y sillas"}
          ],
          "correct_answer": "o1",
          "mastery_tag": "reading", "complexity": 2
        },
        {
          "interaction_id": "U21_I46",
          "type": "fill_blanks",
          "prompt_es": "Según el texto, '[[In|En]] my [[bedroom|dormitorio]], there is a comfortable ___.' (cama)",
          "correct_answer": "bed",
          "mastery_tag": "reading", "complexity": 2
        },
        {
          "interaction_id": "U21_I47",
          "type": "multiple_choice",
          "prompt_es": "¿Qué tipo de vivienda tiene Clara?",
          "options": [
            {"id": "o1", "text": "[[A house|Una casa]]"},
            {"id": "o2", "text": "[[A flat|Un piso]]"},
            {"id": "o3", "text": "[[A cottage|Una cabaña]]"}
          ],
          "correct_answer": "o2",
          "mastery_tag": "reading", "complexity": 1
        },
        {
          "interaction_id": "U21_I48",
          "type": "sentence_building",
          "prompt_es": "Forma: '¿Hay un balcón en tu piso?'",
          "words": [
            {"id": "w1", "text": "[[Is|Hay]]"},
            {"id": "w2", "text": "[[there|hay (interrogativo)]]"},
            {"id": "w3", "text": "[[a|un]]"},
            {"id": "w4", "text": "[[balcony|balcón]]"},
            {"id": "w5", "text": "[[in|en]]"},
            {"id": "w6", "text": "[[your|tu]]"},
            {"id": "w7", "text": "[[flat|piso]]"}
          ],
          "correct_answer": ["w1", "w2", "w3", "w4", "w5", "w6", "w7"],
          "mastery_tag": "reading", "complexity": 3
        },
        {
          "interaction_id": "U21_I49",
          "type": "multiple_choice",
          "prompt_es": "¿Qué hay en el salón de Clara?",
          "options": [
            {"id": "o1", "text": "Una cama y un armario"},
            {"id": "o2", "text": "Un sofá grande y una televisión"},
            {"id": "o3", "text": "Una nevera y una mesa"}
          ],
          "correct_answer": "o2",
          "mastery_tag": "reading", "complexity": 2
        },
        {
          "interaction_id": "U21_I50",
          "type": "fill_blanks",
          "prompt_es": "Completa según el texto: 'My favourite room is the ___ because it is bright and cozy.'",
          "correct_answer": "living room",
          "mastery_tag": "reading", "complexity": 2
        }
      ]
    }
  ]
}

write_unit(21, unit21)
print("Unit 21 done.")
