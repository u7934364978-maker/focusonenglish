import re

def fix_file(file_path):
    with open(file_path, 'r') as f:
        content = f.read()

    replacements = {
        # A1 Instructions
        '¿Cómo se dice "Hola" en inglés?': '[[How|Cómo]] [[do|se]] [[you|dice]] [[say| ]] "[[Hello|Hola]]" [[in|en]] [[English|inglés]]?',
        'Ordena las palabras para traducir "Yo soy Juan".': '[[Put|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[translate|traducir]] "[[I|Yo]] [[am|soy]] [[Juan|Juan]]".',
        '¿Cuál es la respuesta más común a "[[Nice to meet you|Mucho gusto]]"?': '[[What|Cuál]] [[is|es]] [[the|la]] [[most|más]] [[common|común]] [[response|respuesta]] [[to|a]] "[[Nice to meet you|Mucho gusto]]"?',
        'Di "[[Hello|Hola]]" claramente por el micrófono.': '[[Say|Di]] "[[Hello|Hola]]" [[clearly|claramente]] [[into|por]] [[the|el]] [[microphone|micrófono]].',
        'Ordena las palabras para preguntar el nombre.': '[[Put|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[ask|preguntar]] [[the|el]] [[name|nombre]].',
        'Ordena las palabras para traducir "Buenas tardes".': '[[Put|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[translate|traducir]] "[[Good|Buenas]] [[afternoon|tardes]]".',
        'Di "[[I am|Yo soy]]" seguido de tu nombre.': '[[Say|Di]] "[[I|Yo]] [[am|soy]]" [[followed|seguido]] [[by|de]] [[your|tu]] [[name|nombre]].',
        'Completa la respuesta a "¿Cómo estás?".': '[[Complete|Completa]] [[the|la]] [[response|respuesta]] [[to|a]] "[[How|Cómo]] [[are|estás]] [[you?|?]]".',
        'Ordena las palabras para traducir "Mi nombre es Maria".': '[[Put|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[translate|traducir]] "[[My|Mi]] [[name|nombre]] [[is|es]] [[Maria|Maria]]".',
        'Di "[[Nice to meet you|Mucho gusto]]".': '[[Say|Di]] "[[Nice to meet you|Mucho gusto]]".',
        '¿Cuál es una forma corta e informal de decir "[[Hello|Hola]]"?': '[[What|Cuál]] [[is|es]] [[a|una]] [[short|corta]] [[and|e]] [[informal|informal]] [[way|forma]] [[to|de]] [[say|decir]] "[[Hello|Hola]]"?',
        '¿Cómo se dice "Mucho gusto" o "Encantado"?': '[[How|Cómo]] [[do|se]] [[you|dice]] [[say| ]] "[[Nice to meet you|Mucho gusto]]"?',
        'Ordena las palabras para preguntar "¿Cómo estás?".': '[[Put|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[ask|preguntar]] "[[How|Cómo]] [[are|estás]] [[you?|?]]".',
        '¿Qué significa "[[I\'m|Yo soy/estoy]]"?': '[[What|Qué]] [[does|significa]] "[[I\'m|Yo soy/estoy]]" [[mean?|?]]',
        'Di "[[Hi|Hola]]" claramente.': '[[Say|Di]] "[[Hi|Hola]]" [[clearly|claramente]].',
        'Completa la frase para decir "Hasta luego".': '[[Complete|Completa]] [[the|la]] [[phrase|frase]] [[to|para]] [[say|decir]] "[[See|Hasta]] [[you|luego]] [[later| ]]".',
        '¿Cómo devuelves la pregunta "¿Cómo estás?".': '[[How|Cómo]] [[do| ]] [[you| ]] [[return|devuelves]] [[the|la]] [[question|pregunta]] "[[How|Cómo]] [[are|estás]] [[you?|?]]".',
        'Di "[[Goodbye|Adiós]]" claramente.': '[[Say|Di]] "[[Goodbye|Adiós]]" [[clearly|claramente]].',
        'Completa la respuesta corta a "[[Nice to meet you|Mucho gusto]]".': '[[Complete|Completa]] [[the|la]] [[short|corta]] [[response|respuesta]] [[to|a]] "[[Nice to meet you|Mucho gusto]]".',
        'Ordena para decir "Encantado de conocerte".': '[[Put|Ordena]] [[in| ]] [[order| ]] [[to|para]] [[say|decir]] "[[Nice|Encantado]] [[to|de]] [[meet|conocer]] [[you|te]]".',
        'Elige la forma más natural de preguntar "¿Cómo va?".': '[[Choose|Elige]] [[the|la]] [[most|más]] [[natural|natural]] [[way|forma]] [[to|de]] [[ask|preguntar]] "[[How|Cómo]] [[is|va]] [[it|todo]] [[going?|?]]".',
        'Di "[[Mr.|Señor]]" seguido de un nombre.': '[[Say|Di]] "[[Mr.|Señor]]" [[followed|seguido]] [[by|de]] [[a|un]] [[name|nombre]].',
        'Escribe la forma corta de "[[What is|Cual es]]".': '[[Write|Escribe]] [[the|la]] [[short|corta]] [[form|forma]] [[of|de]] "[[What|Cual]] [[is|es]]".',
        '¿Cómo dices que "no" eres algo?': '[[How|Cómo]] [[do| ]] [[you| ]] [[say|dices]] [[that|que]] [[you| ]] [[are|eres]] [[not|no]] [[something?|algo?]]',
        'Ordena para decir "Tenga un buen día".': '[[Put|Ordena]] [[in| ]] [[order| ]] [[to|para]] [[say|decir]] "[[Have|Tenga]] [[a|un]] [[nice|buen]] [[day|día]]".',
        'Ordena para decir "Yo no soy Juan".': '[[Put|Ordena]] [[in| ]] [[order| ]] [[to|para]] [[say|decir]] "[[I|Yo]] [[am|soy]] [[not|no]] [[Juan|Juan]]".',
        'Di "[[Hello everyone|Hola a todos]]".': '[[Say|Di]] "[[Hello|Hola]] [[everyone|a todos]]".',
        'Escribe la palabra para "apellido".': '[[Write|Escribe]] [[the|la]] [[word|palabra]] [[for|para]] "[[last|apellido]] [[name| ]]".',
        '¿Cuál es la forma más informal (estilo Duolingo) de decir "¿Qué pasa?".': '[[What|Cuál]] [[is|es]] [[the|la]] [[most|más]] [[informal|informal]] [[way|forma]] [[to|de]] [[say|decir]] "[[What\'s|Qué]] [[up?|pasa?]]".',
        
        # B1 Titles
        '"title": "Dinastía"': '"title": "[[Dynasty|Dinastía]]"',
        '"title": "Colonialism"': '"title": "[[Colonialism|Colonialismo]]"',
        '"title": "Colonialismo"': '"title": "[[Colonialism|Colonialismo]]"',
        '"title": "La Piedra Rosetta"': '"title": "[[The|La]] [[Rosetta|Rosetta]] [[Stone|Piedra]]"',
        '"title": "Revolución"': '"title": "[[Revolution|Revolución]]"',
        '"title": "Sistemas de Escritura"': '"title": "[[Writing|de Escritura]] [[Systems|Sistemas]]"',
        '"title": "Museos"': '"title": "[[Museums|Museos]]"',
        '"title": "Fuentes Primarias"': '"title": "[[Primary|Primarias]] [[Sources|Fuentes]]"',
        '"title": "Ingeniería Romana"': '"title": "[[Roman|Romana]] [[Engineering|Ingeniería]]"',
        '"title": "Revolución Francesa"': '"title": "[[French|Francesa]] [[Revolution|Revolución]]"',
        '"title": "Los Aztecas"': '"title": "[[The|Los]] [[Aztecs|Aztecas]]"',
        '"title": "Estudio de la Historia"': '"title": "[[Studying|Estudio]] [[of|de]] [[History|la Historia]]"',
        '"title": "Edad de Piedra"': '"title": "[[Stone|de Piedra]] [[Age|Edad]]"',
        '"title": "Los Vikingos"': '"title": "[[The|Los]] [[Vikings|Vikingos]]"',
        '"title": "Monumentos"': '"title": "[[Monuments|Monumentos]]"',
        '"title": "Construcción de Pirámides"': '"title": "[[Building|Construcción]] [[Pyramids|de Pirámides]]"',
        
        # B1 Instructions
        'Selecciona la palabra para un gobierno gobernado por un rey o reina.': '[[Select|Selecciona]] [[the|la]] [[word|palabra]] [[for|para]] [[monarchy|monarquía]].',
        'Elige la palabra para una sucesión de gobernantes de la misma familia.': '[[Choose|Elige]] [[the|la]] [[word|palabra]] [[for|para]] [[dynasty|dinastía]].',
        'Selecciona la palabra que describe una cualidad o característica definitoria.': '[[Select|Selecciona]] [[the|la]] [[word|palabra]] [[for|para]] [[trait|rasgo]].',
        'Elige la palabra para ejercer poder o influencia sobre algo.': '[[Choose|Elige]] [[the|la]] [[word|palabra]] [[for|para]] [[influence|influencia]].',
        'Elige la palabra para un edificio en el que se almacenan objetos de interés histórico.': '[[Choose|Elige]] [[the|la]] [[word|palabra]] [[for|para]] [[museum|museo]].',
        'Selecciona la palabra para las personas que viajan por el mar.': '[[Select|Selecciona]] [[the|la]] [[word|palabra]] [[for|para]] [[seafarers|marineros]].',
        'Selecciona la palabra para un cambio importante y a menudo violento en el gobierno.': '[[Select|Selecciona]] [[the|la]] [[word|palabra]] [[for|para]] [[revolution|revolución]].',
        'Elige la palabra para edificios o estatuas creadas para conmemorar a una persona o evento.': '[[Choose|Elige]] [[the|la]] [[word|palabra]] [[for|para]] [[monuments|monumentos]].',
        'Elige la palabra para errores o acciones equivocadas.': '[[Choose|Elige]] [[the|la]] [[word|palabra]] [[for|para]] [[mistakes|errores]].',
        'Ordena las palabras para describir los requisitos para construir pirámides.': '[[Put|Ordena]] [[the|las]] [[words|palabras]] [[to|para]] [[describe|describir]] [[requirements|requisitos]].'
    }

    new_content = content
    for old, new in replacements.items():
        if old.startswith('"title":'):
             new_content = new_content.replace(old, new)
        else:
             # Handle instructions with possible escaping in file
             escaped_old = old.replace('"', '\\"')
             new_content = new_content.replace(f'"instructions": "{escaped_old}"', f'"instructions": "{new}"')
             # Also try without escaping just in case
             new_content = new_content.replace(f'"instructions": "{old}"', f'"instructions": "{new}"')

    with open(file_path, 'w') as f:
        f.write(new_content)

fix_file('src/lib/course/a1/unit-1.ts')
fix_file('src/lib/course/b1/unit-30.ts')
