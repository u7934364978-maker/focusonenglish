import json
import re

with open('src/lib/course/b1/unit-30.ts', 'r') as f:
    content = f.read()

# Find the array of exercises
match = re.search(r'export const UNIT_30_EXERCISES: Exercise\[\] = (\[.*\]);', content, re.DOTALL)
if not match:
    print("Could not find UNIT_30_EXERCISES array")
    exit(1)

exercises_json = match.group(1)
# The JSON might have trailing commas or other JS-isms, but let's try to parse it if it was pure JSON or clean it
# Actually, since it's a .ts file, it might not be valid JSON.
# I'll use a more surgical approach with regex since I can't easily parse JS objects here.

def translate_title(title):
    translations = {
        "El Imperio Romano": "[[The|El]] [[Roman|Imperio]] [[Empire|Romano]]",
        "Antiguo Egipto": "[[Ancient|Antiguo]] [[Egypt|Egipto]]",
        "Arqueología": "[[Archaeology|Arqueología]]",
        "La Gran Muralla": "[[The|La]] [[Great|Gran]] [[Wall|Muralla]]",
        "Antigua Grecia": "[[Ancient|Antigua]] [[Greece|Grecia]]",
        "El Renacimiento": "[[The|El]] [[Renaissance|Renacimiento]]",
        "Jeroglíficos": "[[Hieroglyphics|Jeroglíficos]]",
        "Los Mayas": "[[The|Los]] [[Mayas|Mayas]]",
        "Revolución Industrial": "[[Industrial|Revolución]] [[Revolution|Industrial]]",
        "Momias": "[[Mummies|Momias]]",
        "Descubrimiento del Fuego": "[[Discovery|Descubrimiento]] [[of|del]] [[Fire|Fuego]]",
        "Caballeros": "[[Knights|Caballeros]]",
        "La Ruta de la Seda": "[[The|La]] [[Silk|Ruta]] [[Road|de la Seda]]",
        "Dinastías": "[[Dynasties|Dinastías]]",
        "La Edad de Piedra": "[[The|La]] [[Stone|Edad]] [[Age|de Piedra]]",
        "Vikingos": "[[Vikings|Vikingos]]",
        "La Revolución Francesa": "[[The|La]] [[French|Francesa]] [[Revolution|Revolución]]",
        "Pirámides": "[[Pyramids|Pirámides]]",
        "Gladiadores": "[[Gladiators|Gladiadores]]",
        "La imprenta": "[[The|La]] [[Printing|imprenta]] [[Press| ]]",
        "Aztecas": "[[Aztecs|Aztecas]]",
        "Grandes Exploradores": "[[Great|Grandes]] [[Explorers|Exploradores]]",
        "Castillos": "[[Castles|Castillos]]",
        "Imperio Otomano": "[[Ottoman|Otomano]] [[Empire|Imperio]]",
        "La Gran Depresión": "[[The|La]] [[Great|Gran]] [[Depression|Depresión]]",
        "Civilización": "[[Civilization|Civilización]]",
        "Historia": "[[History|Historia]]",
        "Legado": "[[Legacy|Legado]]",
        "Patrimonio": "[[Heritage|Patrimonio]]",
        "Evolución": "[[Evolution|Evolución]]",
        "La Carta Magna": "[[The|La]] [[Magna|Carta]] [[Carta|Magna]]",
        "Samuráis": "[[Samurai|Samuráis]]",
        "Alejandro Magno": "[[Alexander|Alejandro]] [[the|el]] [[Great|Magno]]",
        "Incas": "[[Incas|Incas]]",
        "La Peste Negra": "[[The|La]] [[Black|Peste]] [[Death|Negra]]",
        "Exploración": "[[Exploration|Exploration]]",
        "Código de Hammurabi": "[[Code|Código]] [[of|de]] [[Hammurabi|Hammurabi]]",
        "El Imperio Otomano": "[[The|El]] [[Ottoman|Imperio]] [[Empire|Otomano]]",
        "Imperio Persa": "[[Persian|Persa]] [[Empire|Imperio]]",
        "La Imprenta": "[[The|La]] [[Printing|Imprenta]] [[Press| ]]",
        "La Ilustración": "[[The|La]] [[Enlightenment|Ilustración]]",
        "El Partenón": "[[The|El]] [[Parthenon|Partenón]]",
        "Juegos Gladiatorios": "[[Gladiatorial|Gladiatorios]] [[Games|Juegos]]",
        "Edad de Bronce": "[[Bronze|Bronce]] [[Age|Edad]]",
        "Tribus Nómadas": "[[Nomadic|Nómadas]] [[Tribes|Tribus]]",
        "Juegos Olímpicos Antiguos": "[[Ancient|Antiguos]] [[Olympic|Olímpicos]] [[Games|Juegos]]",
        "Defensa de Castillos": "[[Castle|Castillos]] [[Defense|Defensa]]",
        "Revolución Científica": "[[Scientific|Científica]] [[Revolution|Revolución]]",
        "Navegación Antigua": "[[Ancient|Antigua]] [[Navigation|Navegación]]",
        "Rutas Comerciales": "[[Trade|Comerciales]] [[Routes|Rutas]]"
    }
    return translations.get(title, title)

def translate_instructions(instr, type):
    if "Elige la palabra correcta" in instr:
        return "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]] [[to|para]] [[complete|completar]] [[the|la]] [[sentence|oración]]."
    if "Selecciona el adjetivo" in instr:
        return "[[Select|Selecciona]] [[the|el]] [[adjective|adjetivo]] [[that|que]] [[describes|describe]] [[the|la]] [[situation|situación]]."
    if "Elige la palabra para objetos" in instr:
        return "[[Choose|Elige]] [[the|la]] [[word|palabra]] [[for|para]] [[objects|objetos]]."
    if "Elige el verbo que significa" in instr:
        return "[[Choose|Elige]] [[the|el]] [[verb|verbo]] [[that|que]] [[means|significa]]..."
    if "Selecciona el sistema político" in instr:
        return "[[Select|Selecciona]] [[the|el]] [[political|político]] [[system|sistema]]."
    if "Selecciona la palabra que describe un tiempo de progreso" in instr:
        return "[[Select|Selecciona]] [[the|la]] [[word|palabra]] [[that|que]] [[describes|describe]] [[a|un]] [[time|tiempo]] [[of|de]] [[progress|progreso]]."
    if "Elige la expresión para un momento significativo" in instr:
        return "[[Choose|Elige]] [[the|la]] [[expression|expresión]] [[for|para]] [[a|un]] [[significant|significativo]] [[moment|momento]]."
    if "Ordena la oración" in instr:
        return "[[Put|Ordena]] [[the|la]] [[sentence|oración]] [[in|en]] [[order|orden]]."
    if "Selecciona la forma correcta" in instr:
        return "[[Select|Selecciona]] [[the|la]] [[correct|correcta]] [[form|forma]]."
    if "Selecciona el verbo" in instr:
        return "[[Select|Selecciona]] [[the|el]] [[verb|verbo]]."
    if "Elige la palabra para las reglas" in instr:
        return "[[Choose|Elige]] [[the|la]] [[word|palabra]] [[for|para]] [[the|las]] [[rules|reglas]]."
    if "Elige la palabra para edificios grandes" in instr:
        return "[[Choose|Elige]] [[the|la]] [[word|palabra]] [[for|para]] [[large|grandes]] [[buildings|edificios]]."
    if "Elige la palabra para la clase social" in instr:
        return "[[Choose|Elige]] [[the|la]] [[word|palabra]] [[for|para]] [[the|la]] [[social|social]] [[class|clase]]."
    if "Elige el adverbio" in instr:
        return "[[Choose|Elige]] [[the|el]] [[adverb|adverbio]]."
    
    return instr

# Simplified regex replacement for title and instructions
new_content = content
for span_title, eng_title in {
    "El Imperio Romano": "[[The|El]] [[Roman|Imperio]] [[Empire|Romano]]",
    "Antiguo Egipto": "[[Ancient|Antiguo]] [[Egypt|Egipto]]",
    "Arqueología": "[[Archaeology|Arqueología]]",
    "La Gran Muralla": "[[The|La]] [[Great|Gran]] [[Wall|Muralla]]",
    "Antigua Grecia": "[[Ancient|Antigua]] [[Greece|Grecia]]",
    "El Renacimiento": "[[The|El]] [[Renaissance|Renacimiento]]",
    "Jeroglíficos": "[[Hieroglyphics|Jeroglíficos]]",
    "Los Mayas": "[[The|Los]] [[Mayas|Mayas]]",
    "Revolución Industrial": "[[Industrial|Revolución]] [[Revolution|Industrial]]",
    "Momias": "[[Mummies|Momias]]",
    "Descubrimiento del Fuego": "[[Discovery|Descubrimiento]] [[of|del]] [[Fire|Fuego]]",
    "Caballeros": "[[Knights|Caballeros]]",
    "La Ruta de la Seda": "[[The|La]] [[Silk|Ruta]] [[Road|de la Seda]]",
    "Dinastías": "[[Dynasties|Dinastías]]",
    "La Edad de Piedra": "[[The|La]] [[Stone|Edad]] [[Age|de Piedra]]",
    "Vikingos": "[[Vikings|Vikingos]]",
    "La Revolución Francesa": "[[The|La]] [[French|Francesa]] [[Revolution|Revolución]]",
    "Pirámides": "[[Pyramids|Pirámides]]",
    "Gladiadores": "[[Gladiators|Gladiadores]]",
    "La imprenta": "[[The|La]] [[Printing|imprenta]] [[Press| ]]",
    "Aztecas": "[[Aztecs|Aztecas]]",
    "Grandes Exploradores": "[[Great|Grandes]] [[Explorers|Exploradores]]",
    "Castillos": "[[Castles|Castillos]]",
    "Imperio Otomano": "[[Ottoman|Otomano]] [[Empire|Imperio]]",
    "La Gran Depresión": "[[The|La]] [[Great|Gran]] [[Depression|Depresión]]",
    "Civilización": "[[Civilization|Civilización]]",
    "Historia": "[[History|Historia]]",
    "Legado": "[[Legacy|Legado]]",
    "Patrimonio": "[[Heritage|Patrimonio]]",
    "Evolución": "[[Evolution|Evolución]]",
    "La Carta Magna": "[[The|La]] [[Magna|Carta]] [[Carta|Magna]]",
    "Samuráis": "[[Samurai|Samuráis]]",
    "Alejandro Magno": "[[Alexander|Alejandro]] [[the|el]] [[Great|Magno]]",
    "Incas": "[[Incas|Incas]]",
    "La Peste Negra": "[[The|La]] [[Black|Peste]] [[Death|Negra]]",
    "Exploración": "[[Exploration|Exploration]]",
    "Código de Hammurabi": "[[Code|Código]] [[of|de]] Hammurabi",
    "El Imperio Otomano": "[[The|El]] [[Ottoman|Imperio]] [[Empire|Otomano]]",
    "Imperio Persa": "[[Persian|Persa]] [[Empire|Imperio]]",
    "La Imprenta": "[[The|La]] [[Printing|Imprenta]] [[Press| ]]",
    "La Ilustración": "[[The|La]] [[Enlightenment|Ilustración]]",
    "El Partenón": "[[The|El]] [[Parthenon|Partenón]]",
    "Juegos Gladiatorios": "[[Gladiatorial|Gladiatorios]] [[Games|Juegos]]",
    "Edad de Bronce": "[[Bronze|Bronce]] [[Age|Edad]]",
    "Tribus Nómadas": "[[Nomadic|Nómadas]] [[Tribes|Tribus]]",
    "Juegos Olímpicos Antiguos": "[[Ancient|Antiguos]] [[Olympic|Olímpicos]] [[Games|Juegos]]",
    "Defensa de Castillos": "[[Castle|Castillos]] [[Defense|Defensa]]",
    "Revolución Científica": "[[Scientific|Científica]] [[Revolution|Revolución]]",
    "Navegación Antigua": "[[Ancient|Antigua]] [[Navigation|Navegación]]",
    "Rutas Comerciales": "[[Trade|Comerciales]] [[Routes|Rutas]]"
}.items():
    new_content = new_content.replace(f'"title": "{span_title}"', f'"title": "{eng_title}"')

new_content = re.sub(r'"instructions": "Elige la palabra correcta.*?"', r'"instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[word|palabra]] [[to|para]] [[complete|completar]] [[the|la]] [[sentence|oración]]."', new_content)
new_content = re.sub(r'"instructions": "Selecciona el adjetivo.*?"', r'"instructions": "[[Select|Selecciona]] [[the|el]] [[adjective|adjetivo]] [[that|que]] [[describes|describe]] [[the|la]] [[situation|situación]]."', new_content)
new_content = re.sub(r'"instructions": "Elige la palabra para objetos.*?"', r'"instructions": "[[Choose|Elige]] [[the|la]] [[word|palabra]] [[for|para]] [[objects|objetos]]."', new_content)
new_content = re.sub(r'"instructions": "Elige el verbo que significa.*?"', r'"instructions": "[[Choose|Elige]] [[the|el]] [[verb|verbo]] [[that|que]] [[means|significa]] [[something|algo]]."', new_content)
new_content = re.sub(r'"instructions": "Selecciona el sistema político.*?"', r'"instructions": "[[Select|Selecciona]] [[the|el]] [[political|político]] [[system|sistema]]."', new_content)
new_content = re.sub(r'"instructions": "Ordena la oración.*?"', r'"instructions": "[[Put|Ordena]] [[the|la]] [[sentence|oración]] [[in|en]] [[order|orden]]."', new_content)
new_content = re.sub(r'"instructions": "Selecciona el verbo.*?"', r'"instructions": "[[Select|Selecciona]] [[the|el]] [[verb|verbo]]."', new_content)
new_content = re.sub(r'"instructions": "Elige la palabra para las reglas.*?"', r'"instructions": "[[Choose|Elige]] [[the|la]] [[word|palabra]] [[for|para]] [[the|las]] [[rules|reglas]]."', new_content)
new_content = re.sub(r'"instructions": "Elige la palabra para edificios grandes.*?"', r'"instructions": "[[Choose|Elige]] [[the|la]] [[word|palabra]] [[for|para]] [[large|grandes]] [[buildings|edificios]]."', new_content)
new_content = re.sub(r'"instructions": "Elige la palabra para la clase social.*?"', r'"instructions": "[[Choose|Elige]] [[the|la]] [[word|palabra]] [[for|para]] [[the|la]] [[social|social]] [[class|clase]]."', new_content)
new_content = re.sub(r'"instructions": "Elige el adverbio.*?"', r'"instructions": "[[Choose|Elige]] [[the|el]] [[adverb|adverbio]]."', new_content)

with open('src/lib/course/b1/unit-30.ts', 'w') as f:
    f.write(new_content)
