#!/usr/bin/env python3
"""
Expands short reading_phase transcripts to 80-120 words.
Updates the transcript field in-place for each affected unit.
"""
import json
from pathlib import Path

CONTENT_DIR = Path('src/content/cursos/ingles-a1')

# Expanded reading texts (80-120 words, with [[English|Spanish]] tokens)
EXPANDED_TRANSCRIPTS = {
    3: """[[Alex|Alex]]: [[Hi|Hola]], [[Maria|María]]! [[How|Cómo]] [[are|estás]] [[you|tú]]?
[[Maria|María]]: [[I'm|Estoy]] [[fine|bien]], [[thank|gracias]] [[you|a ti]]! [[And|¿Y]] [[you|tú]]?
[[Alex|Alex]]: [[I'm|Estoy]] [[great|genial]], [[thanks|gracias]]! [[This|Este]] [[is|es]] [[my|mi]] [[friend|amigo]] [[Tom|Tom]]. [[He|Él]] [[is|es]] [[from|de]] [[England|Inglaterra]].
[[Tom|Tom]]: [[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Tom|Tom]] [[Brown|Brown]].
[[Maria|María]]: [[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]] [[too|también]], [[Tom|Tom]]! [[Where|Dónde]] [[are|eres]] [[you|tú]] [[from|de]]?
[[Tom|Tom]]: [[I'm|Soy]] [[from|de]] [[London|Londres]]. [[It's|Es]] [[a|una]] [[big|grande]] [[city|ciudad]]. [[Are|Eres]] [[you|tú]] [[from|de]] [[Spain|España]]?
[[Maria|María]]: [[Yes|Sí]], [[I'm|soy]] [[from|de]] [[Madrid|Madrid]]. [[It's|Es]] [[a|una]] [[beautiful|bonita]] [[city|ciudad]] [[too|también]]!""",

    4: """[[This|Esta]] [[is|es]] [[my|mi]] [[classroom|aula]]. [[It|Es]] [[is|una]] [[big|grande]] [[and|y]] [[bright|luminosa]] [[room|habitación]]. [[In|En]] [[the|la]] [[classroom|aula]], [[there|hay]] [[is|hay]] [[a|una]] [[whiteboard|pizarra blanca]] [[and|y]] [[many|muchas]] [[chairs|sillas]]. [[Each|Cada]] [[student|estudiante]] [[has|tiene]] [[a|una]] [[desk|mesa]], [[a|un]] [[notebook|cuaderno]], [[a|un]] [[pen|bolígrafo]] [[and|y]] [[a|una]] [[pencil|lápiz]]. [[My|Mi]] [[teacher|profesora]] [[is|se llama]] [[Miss|señorita]] [[Green|Green]]. [[She|Ella]] [[writes|escribe]] [[on|en]] [[the|la]] [[board|pizarra]] [[with|con]] [[a|un]] [[marker|rotulador]]. [[We|Nosotros]] [[use|usamos]] [[our|nuestros]] [[books|libros]] [[every|todos los]] [[day|días]]. [[I|Yo]] [[love|me encanta]] [[my|mi]] [[English|inglés]] [[class|clase]]!""",

    5: """[[Maria|María]] [[is|es]] [[a|una]] [[student|estudiante]]. [[She|Ella]] [[wakes up|se despierta]] [[at|a las]] [[seven|siete]] [[o'clock|en punto]] [[every|cada]] [[morning|mañana]]. [[She|Ella]] [[has|toma]] [[breakfast|el desayuno]] [[at|a las]] [[half past seven|siete y media]] — [[usually|normalmente]] [[toast|tostadas]] [[and|y]] [[orange juice|zumo de naranja]]. [[She|Ella]] [[goes|va]] [[to|a]] [[university|la universidad]] [[by|en]] [[bus|autobús]]. [[She|Ella]] [[studies|estudia]] [[English|inglés]] [[and|y]] [[History|Historia]]. [[In|Por las]] [[the afternoon|tardes]], [[she|ella]] [[works|trabaja]] [[part-time|a tiempo parcial]] [[in|en]] [[a|una]] [[café|cafetería]]. [[At|A las]] [[eight|ocho]] [[o'clock|en punto]] [[in|por las]] [[the|]] [[evening|noches]], [[she|ella]] [[studies|estudia]] [[at|en]] [[home|casa]] [[and|y]] [[reads|lee]] [[books|libros]]. [[Maria|María]] [[loves|adora]] [[learning|aprender]] [[new|nuevos]] [[things|cosas]]!""",

    6: """[[My|Mi]] [[name|nombre]] [[is|es]] [[Sofia|Sofía]]. [[I|Yo]] [[have|tengo]] [[a|una]] [[big|grande]] [[family|familia]]. [[My|Mi]] [[father's|padre se llama]] [[name|nombre]] [[is|es]] [[Carlos|Carlos]] [[and|y]] [[he|él]] [[is|es]] [[a|un]] [[doctor|médico]]. [[My|Mi]] [[mother's|madre se llama]] [[name|nombre]] [[is|es]] [[Elena|Elena]] [[and|y]] [[she|ella]] [[is|es]] [[a|una]] [[teacher|profesora]]. [[I|Yo]] [[have|tengo]] [[one|un]] [[brother|hermano]] [[and|y]] [[two|dos]] [[sisters|hermanas]]. [[My|Mi]] [[brother|hermano]] [[Luis|Luis]] [[is|es]] [[fifteen|quince]] [[years|años]]. [[He|Él]] [[loves|adora]] [[playing|jugar al]] [[football|fútbol]]. [[My|Mis]] [[sisters|hermanas]] [[are|se llaman]] [[Marta|Marta]] [[and|y]] [[Rosa|Rosa]]. [[They|Ellas]] [[are|son]] [[twins|gemelas]] — [[they|ellas]] [[are|tienen]] [[ten|diez]] [[years|años]] [[old|de edad]]. [[We|Nosotros]] [[live|vivimos]] [[in|en]] [[a|un]] [[big|grande]] [[house|casa]] [[with|con]] [[a|un]] [[garden|jardín]]. [[On|Los]] [[weekends|fines de semana]], [[we|nosotros]] [[always|siempre]] [[have|tenemos]] [[lunch|almuerzo]] [[together|juntos]]!""",

    7: """[[My|Mi]] [[best|mejor]] [[friend|amigo]] [[is|se llama]] [[Carlos|Carlos]]. [[He|Él]] [[is|es]] [[twenty|veinte]] [[years|años]] [[old|de edad]]. [[He|Él]] [[is|es]] [[tall|alto]] [[and|y]] [[slim|delgado]]. [[He|Él]] [[has|tiene]] [[short|corto]] [[dark|oscuro]] [[hair|pelo]] [[and|y]] [[big|grandes]] [[brown|marrones]] [[eyes|ojos]]. [[He|Él]] [[wears|lleva]] [[glasses|gafas]]. [[He|Él]] [[is|es]] [[always|siempre]] [[happy|feliz]] [[and|y]] [[friendly|amable]]. [[Carlos|Carlos]] [[is|es]] [[very|muy]] [[sporty|deportivo]] — [[he|él]] [[plays|juega al]] [[basketball|baloncesto]] [[every|todos los]] [[weekend|fines de semana]]. [[He|Él]] [[also|también]] [[likes|le gusta]] [[listening|escuchar]] [[to|]] [[music|música]] [[and|y]] [[reading|leer]] [[novels|novelas]]. [[His|Su]] [[favourite|favorita]] [[subject|asignatura]] [[is|es]] [[Maths|Matemáticas]]. [[We|Nosotros]] [[study|estudiamos]] [[at|en]] [[the|la]] [[same|misma]] [[university|universidad]] [[and|y]] [[we|nosotros]] [[spend|pasamos]] [[a lot of|mucho]] [[time|tiempo]] [[together|juntos]]!""",

    11: """My name is [[Emma|Emma]]. I am a [[student|estudiante]] at City [[College|colegio universitario]]. My day is very busy. I [[wake up|me despierto]] [[at|a las]] [[half past six|seis y media]] in the morning. My first class [[starts|empieza]] [[at|a las]] nine [[o'clock|en punto]]. At [[quarter past twelve|las doce y cuarto]], I have lunch with my friends in the café. In the afternoon, I have classes [[from|desde]] two [[o'clock|en punto]] [[to|hasta]] [[four o'clock|las cuatro]]. After class, I go to the library. I [[usually|normalmente]] study until [[half past six|las seis y media]]. Then I go home, have dinner at [[eight|las ocho]], and go to bed [[at|a las]] [[eleven o'clock|las once]]. I love my busy student life!""",

    12: """Hello! My name is [[Carlos|Carlos]]. I am a [[student|estudiante]] at the University of Madrid. My week is very organised. [[On|Los]] Mondays, Tuesdays, and Wednesdays, I have classes in the morning. [[On|Los]] Thursdays, I work [[part-time|a tiempo parcial]] at a bookshop from ten to five. [[On|Los]] Fridays, I have a free afternoon. [[At|Los]] weekends, I love [[going out|salir]] with my friends. [[On|Los]] Saturdays, we usually go to the cinema or a café. [[On|Los]] Sundays, I stay home and study for the next week. My favourite day is [[Friday|el viernes]] because I can relax and do what I like!""",

    13: """[[John|John]] wakes up [[at|a las]] [[seven o'clock|las siete]] every day. After waking up, he [[takes|se da]] a [[shower|ducha]] and gets [[dressed|vestido]]. At [[half past seven|las siete y media]], he has [[breakfast|el desayuno]] — usually [[cereal|cereales]] and a cup of [[tea|té]]. He [[leaves|sale de]] home at [[eight|las ocho]] and [[takes|coge]] the bus to work. He [[starts|empieza]] work at [[nine o'clock|las nueve]]. At [[lunchtime|la hora del almuerzo]], he [[eats|come]] a [[sandwich|sándwich]] in the office. He [[finishes|termina]] work at [[five thirty|las cinco y media]]. In the evening, he [[goes|va]] to the gym on Tuesdays and Thursdays. He [[has|cena]] dinner at [[seven|las siete]] and [[goes|se va]] to bed at [[ten thirty|las diez y media]].""",

    14: """[[Maria|María]] and [[Tom|Tom]] are [[language students|estudiantes de idiomas]] at a school in London. They [[study|estudian]] English every day from Monday to Friday. In the mornings, they [[have|tienen]] grammar and reading classes. In the afternoons, they [[practise|practican]] [[speaking|conversación]] with their classmates. They [[don't|no]] [[study|estudian]] at the weekends — they [[go out|salen]] and [[explore|exploran]] the city. Maria [[likes|gusta]] visiting museums and galleries. Tom [[prefers|prefiere]] going to the park and playing football. They both [[love|adoran]] trying new [[food|comida]] at different restaurants. They [[think|creen]] that learning English is very important for their [[future|futuro]] careers!""",

    15: """[[Tom|Tom]] is my best [[friend|amigo]]. He [[lives|vive]] near my [[house|casa]] in Madrid. He [[walks|camina]] to school every day because it is only five minutes away. He [[studies|estudia]] Biology and Chemistry at university. He [[doesn't|no]] like Maths very much, but he [[works|trabaja]] very hard. After school, Tom [[goes|va]] to football training on Tuesdays and Thursdays. He [[plays|juega]] for the local team and they [[train|entrenan]] for two hours. His mother [[works|trabaja]] as a nurse and his father [[teaches|enseña]] at a secondary school. Tom [[wants|quiere]] to be a doctor one day. He [[says|dice]] that helping people is the most important thing in life!""",

    16: """[[Sara|Sara]] and [[Mark|Mark]] are at [[Brown's Café|la Cafetería Brown]] on Saturday morning. Sara [[likes|gusta]] coffee, so she [[orders|pide]] a large [[cappuccino|capuchino]] and a [[slice|trozo]] of [[carrot cake|tarta de zanahoria]]. Mark [[prefers|prefiere]] [[tea|té]], so he [[asks for|pide]] a pot of [[green tea|té verde]] and a [[croissant|croissant]]. The waiter [[brings|trae]] their order and [[says|dice]], "[[Enjoy your meal!|¡Buen provecho!]]". Sara and Mark [[chat|charlan]] about their weekend plans. After an hour, they [[ask|piden]] for the [[bill|cuenta]]. The total is [[twelve|doce]] [[pounds|libras]]. They [[leave|dejan]] a [[tip|propina]] for the friendly waiter and [[decide|deciden]] to come back next week!""",

    17: """[[Emma|Emma]] [[starts|empieza]] her day at 7am. For [[breakfast|el desayuno]], she [[has|toma]] some [[toast|tostadas]] with [[butter|mantequilla]] and a glass of [[orange juice|zumo de naranja]]. She [[doesn't|no]] drink coffee in the morning. At [[lunchtime|la hora del almuerzo]], she usually [[has|come]] a [[salad|ensalada]] or a [[sandwich|sándwich]] at the university café. Sometimes she [[eats|come]] [[soup|sopa]] when it is cold. In the evening, Emma [[cooks|cocina]] dinner for herself. She [[likes|gusta]] making [[pasta|pasta]] dishes or [[grilled chicken|pollo a la plancha]] with [[vegetables|verduras]]. At weekends, she [[goes out|sale]] for brunch with her friends. They love trying different [[restaurants|restaurantes]] in the city!""",
}

def expand_reading(unit_num, new_transcript):
    filepath = CONTENT_DIR / f'unit{unit_num}.json'
    if not filepath.exists():
        print(f'  SKIP: unit{unit_num}.json not found')
        return
    
    with open(filepath) as f:
        data = json.load(f)
    
    updated = False
    for block in data.get('blocks', []):
        for ix in block.get('content', []):
            if ix.get('type') == 'reading_phase':
                old_len = len(ix.get('transcript', '').split())
                ix['transcript'] = new_transcript
                new_len = len(new_transcript.split())
                print(f'  Unit {unit_num}: transcript {old_len}w → {new_len}w')
                updated = True
                break
        if updated:
            break
    
    if not updated:
        print(f'  Unit {unit_num}: no reading_phase found!')
        return
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def main():
    print('=== Expanding reading_phase texts to 80-120 words ===\n')
    for unit_num, transcript in sorted(EXPANDED_TRANSCRIPTS.items()):
        expand_reading(unit_num, transcript)
    print('\nDone!')

if __name__ == '__main__':
    main()
