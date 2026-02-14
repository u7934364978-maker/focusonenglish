import re

def shorten(file_path):
    with open(file_path, 'r') as f:
        content = f.read()

    # Define new sentences for the long ones
    replacements = {
        # e41
        '[[We|Nuestro]] [[were|guía]] [[told|nos dijo]] [[by| ]] [[our|que]] [[guide|el]] [[that|templo]] [[the|antiguo]] [[ancient|que]] [[temple|estábamos]] [[we|visitando]] [[were|había]] [[visiting|estado]] [[had|oculto]] [[been|bajo]] [[hidden|la]] [[under|vegetación]] [[the|densa]] [[dense|de la]] [[jungle|selva]] [[vegetation|durante]] [[for|más]] [[more|de]] [[than|cinco]] [[five|siglos]]. [[centuries.| ]]': 
        '[[The|El]] [[ancient|antiguo]] [[temple|templo]] [[was|estaba]] [[hidden|oculto]] [[in|en]] [[the|la]] [[dense|densa]] [[jungle|selva]] [[for|por]] [[centuries|siglos]].',
        
        # e42
        '[[If|Si]] [[we|nosotros]] [[had|hubiéramos]] [[known|sabido]] [[that|que]] [[the|el]] [[road|camino]] [[to|al]] [[the|pueblo]] [[remote|remoto]] [[village| ]] [[was|estaba]] [[so|tan]] [[poorly|mal]] [[maintained,|mantenido,]] [[we|nosotros]] [[would|definitivamente]] [[have|habríamos]] [[definitely|alquilado]] [[rented|un]] [[a|vehículo]] [[more|más]] [[powerful|potente]] [[four-wheel-drive|de tracción]] [[vehicle|en las cuatro]] [[for|ruedas]] [[our|para nuestro]] [[journey|viaje]].':
        '[[We|Nosotros]] [[should|deberíamos]] [[have|haber]] [[rented|alquilado]] [[a|un]] [[more|más]] [[powerful|potente]] [[vehicle|vehículo]] [[for|para]] [[this|este]] [[journey|viaje]].',
        
        # e43
        '[[Most|La mayoría]] [[of|de]] [[the|los]] [[travelers|viajeros]] [[who|que]] [[decide|deciden]] [[to| ]] [[visit|visitar]] [[this|este]] [[remote|archipiélago]] [[archipelago|remoto]] [[are|están]] [[attracted|atraídos]] [[by|por]] [[the|la]] [[possibility|posibilidad]] [[of|de]] [[seeing|ver]] [[unique|especies]] [[species|únicas]] [[of|de]] [[birds|aves]] [[that|que]] [[do|no]] [[not|existen]] [[exist|en]] [[anywhere|ningún]] [[else|otro]] [[on|lugar]] [[Earth|de la Tierra]].':
        '[[Travelers|Viajeros]] [[visit|visitan]] [[the|el]] [[remote|remoto]] [[archipelago|archipiélago]] [[to|para]] [[see|ver]] [[unique|únicas]] [[species|especies]] [[of|de]] [[birds|aves]].',
        
        # e44
        '[[Although|Aunque]] [[the|el]] [[journey|viaje]] [[was|fue]] [[quite|bastante]] [[exhausting|agotador]] [[due|debido]] [[to|a]] [[the|el]] [[extreme|calor]] [[heat|extremo]] [[and|y]] [[the|la]] [[lack|falta]] [[of|de]] [[air|aire]] [[conditioning|acondicionado]] [[on|en]] [[the|el]] [[bus,|autobús,]] [[we|todos]] [[were|estábamos]] [[all|extremadamente]] [[extremely|felices]] [[happy|cuando]] [[when|finalmente]] [[we|llegamos]] [[finally|a]] [[reached|la]] [[the|costa]] [[coast.| ]].':
        '[[We|Nosotros]] [[were|estábamos]] [[all|todos]] [[happy|felices]] [[when|cuando]] [[we|finalmente]] [[finally| ]] [[reached|llegamos]] [[the|a la]] [[beautiful|hermosa]] [[coast|costa]].',
        
        # e45
        '[[In|Para]] [[order|poder]] [[to|apreciar]] [[fully|completamente]] [[appreciate|la]] [[the|cultura]] [[local|local,]] [[culture,| ]] [[you|tú]] [[should|deberías]] [[try|intentar]] [[to| ]] [[participate|participar]] [[in|en]] [[at|al]] [[least|menos]] [[one|un]] [[traditional|festival]] [[festival|tradicional]] [[and|y]] [[taste|probar]] [[as|tantos]] [[many|platos]] [[regional|regionales]] [[dishes| ]] [[as|como]] [[possible|sea posible]] [[during|durante]] [[your|tu]] [[stay|estancia]].':
        '[[You|Tú]] [[should|deberías]] [[participate|participar]] [[in|en]] [[a|un]] [[traditional|tradicional]] [[festival|festival]] [[during|durante]] [[your|tu]] [[stay|estancia]].',
        
        # e46
        '[[Before|Antes de]] [[you|que]] [[leave|te vayas]] [[for|a]] [[your|tu]] [[next|próxima]] [[adventure,|aventura,]] [[make|asegúrate]] [[sure|de]] [[you|que]] [[have|hayas]] [[checked|revisado]] [[the|el]] [[weather|pronóstico]] [[forecast|del tiempo]] [[and|y]] [[packed|empacado]] [[all|todo]] [[the|el]] [[necessary|equipo]] [[gear|necesario]] [[for|para]] [[every|cada]] [[possible|posible]] [[climate|condición]] [[condition|climática]] [[you|que]] [[might|puedas]] [[encounter.|encontrar.]]':
        '[[Check|Revisa]] [[the|el]] [[weather|tiempo]] [[and|y]] [[pack|empaca]] [[all|todo]] [[the|el]] [[necessary|equipo]] [[gear|necesario]] [[for|para]] [[your|tu]] [[adventure|aventura]].',
        
        # e47
        '[[The|El]] [[traveler|viajero]] [[realized|se dio cuenta]] [[that|de que]] [[he|él]] [[had|había]] [[forgotten|olvidado]] [[his|su]] [[passport|pasaporte]] [[in|en]] [[the|la]] [[hotel|caja fuerte]] [[safe|del hotel]] [[only|solo]] [[after|después de que]] [[he|él]] [[had|hubiera]] [[arrived|llegado]] [[at|al]] [[the|aeropuerto]] [[airport| ]] [[and|y]] [[was|estuviera]] [[trying|intentando]] [[to| ]] [[check|hacer el]] [[in|registro]] [[for|para]] [[his|su]] [[flight.|vuelo.]]':
        '[[The|El]] [[traveler|viajero]] [[forgot|olvidó]] [[his|su]] [[passport|pasaporte]] [[in|en]] [[the|la]] [[hotel|hotel]] [[safe|caja fuerte]] [[before|antes]] [[the|del]] [[flight|vuelo]].',
        
        # e48
        '[[Despite|A pesar]] [[the|del]] [[fact|hecho]] [[that|de que]] [[we|nosotros]] [[had|habíamos]] [[been|estado]] [[traveling|viajando]] [[for|durante]] [[over|más]] [[twenty-four|de veinticuatro]] [[hours|horas]] [[without|sin]] [[any|ningún]] [[proper|descanso]] [[rest,|adecuado,]] [[the|la]] [[excitement|emoción]] [[of|de]] [[seeing|ver]] [[the|la]] [[Great|Gran]] [[Wall|Muralla]] [[of|de]] [[China|China]] [[for|por]] [[the|la]] [[first|primera]] [[time|vez]] [[kept|nos mantuvo]] [[us| ]] [[going.|activos.]]':
        '[[Seeing|Ver]] [[the|la]] [[Great|Gran]] [[Wall|Muralla]] [[for|por]] [[the|la]] [[first|primera]] [[time|vez]] [[was|fue]] [[very|muy]] [[exciting|emocionante]].'
    }

    # Use a more generic approach to find and replace the whole exercise object or at least the correctSentence and words
    new_content = content
    for old_s, new_s in replacements.items():
        # Find the exercise block containing this correctSentence
        # We need to update both correctSentence and words array
        
        # Extract new words from new_s
        new_words = re.findall(r'\[\[.*?\|.*?\]\]', new_s)
        new_words_json = "[\n            " + ",\n            ".join([f'"{w}"' for w in new_words]) + "\n          ]"
        
        # Find the block
        # This is tricky with regex, let's use a simpler string replace if we can locate the exact line
        escaped_old_s = old_s.replace('[', '\\[').replace(']', '\\]').replace('|', '\\|').replace('.', '\\.').replace(',', '\\,').replace('?', '\\?').replace('(', '\\(').replace(')', '\\)')
        
        pattern = f'"correctSentence": "{escaped_old_s}"'
        if re.search(pattern, new_content):
            # Replace correctSentence
            new_content = re.sub(pattern, f'"correctSentence": "{new_s}"', new_content)
            
            # Now we need to find the "words" array nearby and replace it
            # Let's assume it follows correctSentence
            # We'll search for the next "words": [...] block
            start_pos = new_content.find(f'"correctSentence": "{new_s}"')
            words_start = new_content.find('"words": [', start_pos)
            words_end = new_content.find(']', words_start) + 1
            
            if words_start != -1 and words_end != -1:
                new_content = new_content[:words_start] + f'"words": {new_words_json}' + new_content[words_end:]

    with open(file_path, 'w') as f:
        f.write(new_content)

shorten('src/lib/course/b1/unit-29.ts')
