#!/usr/bin/env python3
"""
Fixes 'short_writing' placeholder exercises in unit-*.ts files.
Converts each to a proper multiple-choice exercise with real options.
- Fixes title: "short_writing" → proper display title
- Replaces "[[Option 1|Opción 1]]" / "[[Option 2|Opción 2]]" with real translations
"""
import re
from pathlib import Path

TS_DIR = Path('src/lib/course/a1')

# Map: question text → (correct_answer, distractor1, distractor2, title)
# correctAnswer index stays at 0
QUESTION_MAP = {
    # Unit 31 - Can/abilities
    "Traduce: 'No puedo hablar francés.'": (
        "[[I can't speak French.|No puedo hablar francés.]]",
        "[[I can't speak English.|No puedo hablar inglés.]]",
        "[[I don't speak French.|No hablo francés.]]",
        "[[Translation|Traducción]]"
    ),
    "Escribe la habilidad: 'A monkey can...'": (
        "[[A monkey can climb.|Un mono puede escalar.]]",
        "[[A monkey can fly.|Un mono puede volar.]]",
        "[[A monkey can swim.|Un mono puede nadar.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 33 - Frequency
    "Traduce: 'Dos veces al año.'": (
        "[[Twice a year.|Dos veces al año.]]",
        "[[Once a year.|Una vez al año.]]",
        "[[Three times a year.|Tres veces al año.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 34 - Conjunctions
    "Traduce: 'Estudio inglés porque me gusta.'": (
        "[[I study English because I like it.|Estudio inglés porque me gusta.]]",
        "[[I study English but I don't like it.|Estudio inglés pero no me gusta.]]",
        "[[I study English and it is easy.|Estudio inglés y es fácil.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 35 - Free time
    "Traduce: 'Quedar con amigos.'": (
        "[[Meet friends.|Quedar con amigos.]]",
        "[[Go out alone.|Salir solo.]]",
        "[[Stay at home.|Quedarse en casa.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 36 - Musical instruments
    "Traduce: 'Batería'": (
        "[[Drums|Batería]]",
        "[[Guitar|Guitarra]]",
        "[[Piano|Piano]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'Ella toca la trompeta.'": (
        "[[She plays the trumpet.|Ella toca la trompeta.]]",
        "[[She plays the guitar.|Ella toca la guitarra.]]",
        "[[She plays the piano.|Ella toca el piano.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 37 - Jobs
    "Traduce: 'Cantar'": (
        "[[Sing|Cantar]]",
        "[[Dance|Bailar]]",
        "[[Cook|Cocinar]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: '¿Quién puede hablar inglés?'": (
        "[[Who can speak English?|¿Quién puede hablar inglés?]]",
        "[[Who speaks Spanish?|¿Quién habla español?]]",
        "[[Who can sing?|¿Quién puede cantar?]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 38 - Household chores
    "Traduce: 'Barrer el suelo'": (
        "[[Sweep the floor|Barrer el suelo]]",
        "[[Mop the floor|Fregar el suelo]]",
        "[[Wash the dishes|Fregar los platos]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'Ella no tiene que cocinar'": (
        "[[She doesn't have to cook.|Ella no tiene que cocinar.]]",
        "[[She can't cook.|Ella no puede cocinar.]]",
        "[[She doesn't cook.|Ella no cocina.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 39 - Past simple
    "Traduce: 'Ayer'": (
        "[[Yesterday|Ayer]]",
        "[[Today|Hoy]]",
        "[[Tomorrow|Mañana]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: '¿Dónde estuviste ayer?'": (
        "[[Where were you yesterday?|¿Dónde estuviste ayer?]]",
        "[[Where are you today?|¿Dónde estás hoy?]]",
        "[[Where were you last week?|¿Dónde estuviste la semana pasada?]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 40 - Review (generic "Traduce al inglés:" - these need context)
    # We'll handle these with a unit-specific pass
    "Traduce al inglés:": (
        "[[I can swim.|Puedo nadar.]]",
        "[[I can't dance.|No puedo bailar.]]",
        "[[She can sing.|Ella puede cantar.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 41 - Airport
    "Traduce: 'Tarjeta de embarque'": (
        "[[Boarding pass|Tarjeta de embarque]]",
        "[[Passport|Pasaporte]]",
        "[[Luggage|Equipaje]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: '¿Dónde está mi maleta?'": (
        "[[Where is my suitcase?|¿Dónde está mi maleta?]]",
        "[[Where is my passport?|¿Dónde está mi pasaporte?]]",
        "[[Where is my bag?|¿Dónde está mi bolsa?]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 42 - Transport
    "Traduce: 'Bicicleta'": (
        "[[Bicycle|Bicicleta]]",
        "[[Motorcycle|Motocicleta]]",
        "[[Scooter|Patinete]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'Voy en coche'": (
        "[[I go by car.|Voy en coche.]]",
        "[[I go by bus.|Voy en autobús.]]",
        "[[I go by train.|Voy en tren.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 43 - Travel
    "Traduce: 'Vacaciones'": (
        "[[Holiday|Vacaciones]]",
        "[[Weekend|Fin de semana]]",
        "[[Day off|Día libre]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'Viajo con mis amigos'": (
        "[[I travel with my friends.|Viajo con mis amigos.]]",
        "[[I travel alone.|Viajo solo.]]",
        "[[I travel with my family.|Viajo con mi familia.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 44 - Weather
    "Traduce: 'Hace calor'": (
        "[[It's hot.|Hace calor.]]",
        "[[It's cold.|Hace frío.]]",
        "[[It's warm.|Está templado.]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'Hoy está muy nublado'": (
        "[[It's very cloudy today.|Hoy está muy nublado.]]",
        "[[It's very sunny today.|Hoy hace mucho sol.]]",
        "[[It's very windy today.|Hoy hace mucho viento.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 45 - Seasons
    "Traduce: 'Verano'": (
        "[[Summer|Verano]]",
        "[[Winter|Invierno]]",
        "[[Autumn|Otoño]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'Me gusta la primavera'": (
        "[[I like spring.|Me gusta la primavera.]]",
        "[[I like summer.|Me gusta el verano.]]",
        "[[I like winter.|Me gusta el invierno.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 46 - Hotel
    "Traduce: 'Habitación'": (
        "[[Room|Habitación]]",
        "[[Lobby|Vestíbulo]]",
        "[[Floor|Planta]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: '¿Dónde está el ascensor?'": (
        "[[Where is the lift?|¿Dónde está el ascensor?]]",
        "[[Where is the reception?|¿Dónde está la recepción?]]",
        "[[Where is the restaurant?|¿Dónde está el restaurante?]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 47 - Holidays
    "Traduce: 'Hacer turismo'": (
        "[[Go sightseeing|Hacer turismo]]",
        "[[Go shopping|Ir de compras]]",
        "[[Go camping|Ir de camping]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'Odio hacer turismo'": (
        "[[I hate sightseeing.|Odio hacer turismo.]]",
        "[[I love sightseeing.|Me encanta hacer turismo.]]",
        "[[I like going shopping.|Me gusta ir de compras.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 48 - Sightseeing
    "Traduce: 'Recuerdo / Souvenir'": (
        "[[Souvenir|Recuerdo]]",
        "[[Gift|Regalo]]",
        "[[Map|Mapa]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'Sigue al guía turístico'": (
        "[[Follow the tour guide.|Sigue al guía turístico.]]",
        "[[Find the tour guide.|Encuentra al guía.]]",
        "[[Call the tour guide.|Llama al guía.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 49 - Packing
    "Escribe 'adaptador' en inglés:": (
        "[[Adapter|Adaptador]]",
        "[[Charger|Cargador]]",
        "[[Cable|Cable]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'Estoy haciendo mi maleta'": (
        "[[I'm packing my suitcase.|Estoy haciendo mi maleta.]]",
        "[[I'm unpacking my suitcase.|Estoy deshaciendo mi maleta.]]",
        "[[I'm closing my suitcase.|Estoy cerrando mi maleta.]]",
        "[[Translation|Traducción]]"
    ),
    "Escribe una frase corta diciendo que necesitas tu cargador:": (
        "[[I need my charger.|Necesito mi cargador.]]",
        "[[I have my charger.|Tengo mi cargador.]]",
        "[[I lost my charger.|Perdí mi cargador.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 51 - Supermarket
    "Escribe 'recibo' o 'ticket' en inglés:": (
        "[[Receipt|Recibo]]",
        "[[Bill|Factura]]",
        "[[Invoice|Factura detallada]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: '¿Necesitas una bolsa?'": (
        "[[Do you need a bag?|¿Necesitas una bolsa?]]",
        "[[Do you want a bag?|¿Quieres una bolsa?]]",
        "[[Have you got a bag?|¿Tienes una bolsa?]]",
        "[[Translation|Traducción]]"
    ),
    "Pregunta dónde está la leche:": (
        "[[Where is the milk?|¿Dónde está la leche?]]",
        "[[Where is the bread?|¿Dónde está el pan?]]",
        "[[Where is the butter?|¿Dónde está la mantequilla?]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 52 - Food/countable
    "Traduce: 'Tengo algo de leche'": (
        "[[I have some milk.|Tengo algo de leche.]]",
        "[[I have some water.|Tengo algo de agua.]]",
        "[[I have some juice.|Tengo algo de zumo.]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'Necesito una naranja'": (
        "[[I need an orange.|Necesito una naranja.]]",
        "[[I need an apple.|Necesito una manzana.]]",
        "[[I need a banana.|Necesito un plátano.]]",
        "[[Translation|Traducción]]"
    ),
    "Escribe una frase diciendo que tienes una manzana:": (
        "[[I have an apple.|Tengo una manzana.]]",
        "[[I want an apple.|Quiero una manzana.]]",
        "[[I ate an apple.|Comí una manzana.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 53 - Any/some
    "Traduce: 'No hay ningún huevo'": (
        "[[There aren't any eggs.|No hay ningún huevo.]]",
        "[[There are some eggs.|Hay algunos huevos.]]",
        "[[I don't have eggs.|No tengo huevos.]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'Tengo algunas galletas'": (
        "[[I have some cookies.|Tengo algunas galletas.]]",
        "[[I have any cookies.|Tengo galletas.]]",
        "[[I have many cookies.|Tengo muchas galletas.]]",
        "[[Translation|Traducción]]"
    ),
    "Escribe '¿Tienes algo de sal?' en inglés:": (
        "[[Do you have any salt?|¿Tienes algo de sal?]]",
        "[[Do you want some salt?|¿Quieres algo de sal?]]",
        "[[Have you got salt?|¿Tienes sal?]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 54 - Much/many/a lot of
    "Traduce: 'Tenemos mucha comida'": (
        "[[We have a lot of food.|Tenemos mucha comida.]]",
        "[[We have some food.|Tenemos algo de comida.]]",
        "[[We have any food.|Tenemos comida.]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: '¿Cuánto tiempo tenemos?'": (
        "[[How much time do we have?|¿Cuánto tiempo tenemos?]]",
        "[[How many times do we have?|¿Cuántas veces tenemos?]]",
        "[[What time do we have?|¿Qué hora tenemos?]]",
        "[[Translation|Traducción]]"
    ),
    "Escribe 'Tengo mucha agua' usando 'a lot of':": (
        "[[I have a lot of water.|Tengo mucha agua.]]",
        "[[I have some water.|Tengo algo de agua.]]",
        "[[I have many water.|Tengo mucha agua.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 55 - Shopping
    "Escribe 'talla' en inglés:": (
        "[[Size|Talla]]",
        "[[Colour|Color]]",
        "[[Price|Precio]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: '¿Cuánto cuesta esta camisa?'": (
        "[[How much does this shirt cost?|¿Cuánto cuesta esta camisa?]]",
        "[[How much is this dress?|¿Cuánto cuesta este vestido?]]",
        "[[How much are these shoes?|¿Cuánto cuestan estos zapatos?]]",
        "[[Translation|Traducción]]"
    ),
    "Pregunta si tienen una talla grande (L):": (
        "[[Do you have this in a large?|¿Tienen esto en talla grande?]]",
        "[[Do you have this in a small?|¿Tienen esto en talla pequeña?]]",
        "[[Do you have this in a medium?|¿Tienen esto en talla mediana?]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 56 - Kitchen items
    "Escribe 'encimera' en inglés:": (
        "[[Worktop|Encimera]]",
        "[[Shelf|Estante]]",
        "[[Cupboard|Armario]]",
        "[[Translation|Traducción]]"
    ),
    "Escribe 'estante' en inglés:": (
        "[[Shelf|Estante]]",
        "[[Drawer|Cajón]]",
        "[[Cupboard|Armario]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'El microondas está sobre la encimera'": (
        "[[The microwave is on the worktop.|El microondas está sobre la encimera.]]",
        "[[The microwave is in the cupboard.|El microondas está en el armario.]]",
        "[[The microwave is under the shelf.|El microondas está bajo el estante.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 57 - Irregular plurals
    "Escribe 'espejo' en inglés:": (
        "[[Mirror|Espejo]]",
        "[[Window|Ventana]]",
        "[[Door|Puerta]]",
        "[[Translation|Traducción]]"
    ),
    "Escribe el plural de 'woman':": (
        "[[Women|Mujeres]]",
        "[[Womans|Mujeres (incorrecto)]]",
        "[[Womens|Mujeres (incorrecto)]]",
        "[[Irregular Plurals|Plurales irregulares]]"
    ),
    "Traduce: 'Los niños están felices'": (
        "[[The children are happy.|Los niños están felices.]]",
        "[[The children are sad.|Los niños están tristes.]]",
        "[[The childs are happy.|Los niños están felices. (incorrecto)]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 58 - Daily routine
    "Escribe 'desayunar' en inglés:": (
        "[[Have breakfast|Desayunar]]",
        "[[Have lunch|Almorzar]]",
        "[[Have dinner|Cenar]]",
        "[[Translation|Traducción]]"
    ),
    "Escribe 'cenar' en inglés:": (
        "[[Have dinner|Cenar]]",
        "[[Have lunch|Almorzar]]",
        "[[Have breakfast|Desayunar]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'Nosotros cenamos a las 8 pm'": (
        "[[We have dinner at 8 pm.|Nosotros cenamos a las 8 pm.]]",
        "[[We have lunch at 8 pm.|Nosotros almorzamos a las 8 pm.]]",
        "[[We have breakfast at 8 pm.|Nosotros desayunamos a las 8 pm.]]",
        "[[Translation|Traducción]]"
    ),
    # Unit 59 - Free time activities
    "Escribe 'bailar' en inglés:": (
        "[[Dance|Bailar]]",
        "[[Sing|Cantar]]",
        "[[Cook|Cocinar]]",
        "[[Translation|Traducción]]"
    ),
    "Escribe 'escuchar música' en inglés:": (
        "[[Listen to music|Escuchar música]]",
        "[[Watch TV|Ver la televisión]]",
        "[[Play music|Tocar música]]",
        "[[Translation|Traducción]]"
    ),
    "Traduce: 'Me gusta escuchar música'": (
        "[[I like listening to music.|Me gusta escuchar música.]]",
        "[[I like watching TV.|Me gusta ver la televisión.]]",
        "[[I like dancing.|Me gusta bailar.]]",
        "[[Translation|Traducción]]"
    ),
}

# For units 40, 50, 60 (generic "Traduce al inglés:") - provide unit-specific replacements
UNIT_GENERIC_REPLACEMENTS = {
    40: [
        # Module 4 review: can, hobbies, frequency, conjunctions, free time, music, chores, past
        ("[[I can swim.|Puedo nadar.]]", "[[I can't run.|No puedo correr.]]", "[[She can dance.|Ella puede bailar.]]"),
        ("[[He plays football twice a week.|Juega al fútbol dos veces a la semana.]]", "[[She plays tennis once a week.|Juega al tenis una vez a la semana.]]", "[[They play chess every day.|Juegan al ajedrez todos los días.]]"),
        ("[[I like listening to music.|Me gusta escuchar música.]]", "[[She likes reading books.|Le gusta leer libros.]]", "[[We like going shopping.|Nos gusta ir de compras.]]"),
        ("[[I always tidy my room.|Siempre ordeno mi habitación.]]", "[[She never cooks dinner.|Nunca cocina la cena.]]", "[[He usually watches TV.|Normalmente ve la televisión.]]"),
        ("[[I study English because I like it.|Estudio inglés porque me gusta.]]", "[[She works hard so she is tired.|Trabaja mucho así que está cansada.]]", "[[He is funny but also shy.|Es gracioso pero también tímido.]]"),
        ("[[She plays the guitar.|Toca la guitarra.]]", "[[He plays the piano.|Toca el piano.]]", "[[They play the drums.|Tocan la batería.]]"),
        ("[[He washed the dishes yesterday.|Fregó los platos ayer.]]", "[[She swept the floor last week.|Barrió el suelo la semana pasada.]]", "[[They made the bed this morning.|Hicieron la cama esta mañana.]]"),
        ("[[We went to the cinema last Saturday.|Fuimos al cine el sábado pasado.]]", "[[She visited her family last weekend.|Visitó a su familia el fin de semana pasado.]]", "[[They played football yesterday afternoon.|Jugaron al fútbol ayer por la tarde.]]"),
        ("[[I was at school yesterday.|Estaba en el colegio ayer.]]", "[[She was at work all day.|Estuvo en el trabajo todo el día.]]", "[[They were at home last night.|Estaban en casa anoche.]]"),
        ("[[Did you go to the party?|¿Fuiste a la fiesta?]]", "[[Did she finish her homework?|¿Terminó ella sus deberes?]]", "[[Did they arrive on time?|¿Llegaron a tiempo?]]"),
    ],
    50: [
        # Module 5 review: airport, transport, travel, weather, seasons, hotel, holidays, sightseeing, packing
        ("[[I need a boarding pass.|Necesito una tarjeta de embarque.]]", "[[I need my passport.|Necesito mi pasaporte.]]", "[[I need my luggage.|Necesito mi equipaje.]]"),
        ("[[I go to work by bus.|Voy al trabajo en autobús.]]", "[[She goes to school by bike.|Ella va al colegio en bici.]]", "[[We travel by train.|Viajamos en tren.]]"),
        ("[[I booked a hotel room.|Reservé una habitación de hotel.]]", "[[She cancelled her flight.|Ella canceló su vuelo.]]", "[[We arrived at the airport early.|Llegamos al aeropuerto pronto.]]"),
        ("[[It's very hot in summer.|Hace mucho calor en verano.]]", "[[It snows in winter.|Nieva en invierno.]]", "[[It's warm in spring.|Hace calor en primavera.]]"),
        ("[[I like spring because it's warm.|Me gusta la primavera porque es cálida.]]", "[[He prefers autumn because of the colours.|Prefiere el otoño por los colores.]]", "[[She hates winter because it's cold.|Odia el invierno porque hace frío.]]"),
        ("[[The hotel has a swimming pool.|El hotel tiene piscina.]]", "[[Check-in is at two o'clock.|El check-in es a las dos.]]", "[[Breakfast is included in the price.|El desayuno está incluido en el precio.]]"),
        ("[[We go sightseeing every day.|Hacemos turismo todos los días.]]", "[[They visited three museums.|Visitaron tres museos.]]", "[[She bought some souvenirs.|Compró algunos recuerdos.]]"),
        ("[[I follow the tour guide.|Sigo al guía turístico.]]", "[[He took lots of photos.|Sacó muchas fotos.]]", "[[She read the guidebook.|Leyó la guía turística.]]"),
        ("[[I packed my suitcase last night.|Hice la maleta anoche.]]", "[[She forgot her charger.|Olvidó su cargador.]]", "[[Don't forget your passport.|No olvides tu pasaporte.]]"),
        ("[[Are you going on holiday?|¿Vas de vacaciones?]]", "[[Where are you travelling?|¿Adónde viajas?]]", "[[How long is your trip?|¿Cuánto dura tu viaje?]]"),
    ],
    60: [
        # Final review: all 6 modules
        ("[[My name is Ana. I'm from Spain.|Me llamo Ana. Soy de España.]]", "[[His name is Carlos. He's from Mexico.|Se llama Carlos. Es de México.]]", "[[Her name is Mia. She's from Japan.|Se llama Mia. Es de Japón.]]"),
        ("[[I have two brothers and one sister.|Tengo dos hermanos y una hermana.]]", "[[My mother is a doctor.|Mi madre es médica.]]", "[[My father's name is Juan.|Mi padre se llama Juan.]]"),
        ("[[She works in a hospital.|Trabaja en un hospital.]]", "[[He teaches at a school.|Enseña en un colegio.]]", "[[They work in an office.|Trabajan en una oficina.]]"),
        ("[[I wake up at seven every morning.|Me despierto a las siete cada mañana.]]", "[[She has lunch at half past twelve.|Almuerza a las doce y media.]]", "[[They finish work at five thirty.|Terminan de trabajar a las cinco y media.]]"),
        ("[[Can you swim? Yes, I can.|¿Sabes nadar? Sí, sé.]]", "[[She can't drive a car.|Ella no sabe conducir.]]", "[[He can speak three languages.|Él sabe hablar tres idiomas.]]"),
        ("[[There is a sofa in the living room.|Hay un sofá en el salón.]]", "[[There are two bedrooms upstairs.|Hay dos dormitorios arriba.]]", "[[There isn't a garden.|No hay jardín.]]"),
        ("[[I went to the cinema last Saturday.|Fui al cine el sábado pasado.]]", "[[She visited London two years ago.|Visitó Londres hace dos años.]]", "[[We had a great holiday.|Tuvimos unas vacaciones geniales.]]"),
        ("[[It's going to be sunny tomorrow.|Mañana va a hacer sol.]]", "[[I'm going to travel to Paris next year.|Voy a viajar a París el año que viene.]]", "[[Are you going to study tonight?|¿Vas a estudiar esta noche?]]"),
        ("[[Do you have any milk?|¿Tienes algo de leche?]]", "[[There are a few apples left.|Quedan algunas manzanas.]]", "[[We have a lot of homework.|Tenemos mucha tarea.]]"),
        ("[[How much does it cost?|¿Cuánto cuesta?]]", "[[Can I try this on?|¿Me lo puedo probar?]]", "[[I'll take the blue one.|Me llevo el azul.]]"),
    ],
}


def fix_short_writing_in_file(filepath, unit_num):
    content = filepath.read_text(encoding='utf-8')
    if '"title": "short_writing"' not in content:
        return 0

    # Track which generic replacement to use for this unit
    generic_idx = [0]
    count = [0]

    def replace_exercise(m):
        full_block = m.group(0)

        # Fix title
        full_block = full_block.replace('"title": "short_writing"', '"title": "[[Translation|Traducción]]"')

        # Find the question
        q_match = re.search(r'"question":\s*"([^"]+)"', full_block)
        if not q_match:
            return full_block

        question = q_match.group(1)

        # Determine options from map
        if question in QUESTION_MAP:
            opt0, opt1, opt2, title = QUESTION_MAP[question]
            full_block = full_block.replace('"title": "[[Translation|Traducción]]"',
                                             f'"title": "{title}"')
        elif question == "Traduce al inglés:" and unit_num in UNIT_GENERIC_REPLACEMENTS:
            replacements = UNIT_GENERIC_REPLACEMENTS[unit_num]
            idx = generic_idx[0] % len(replacements)
            opt0, opt1, opt2 = replacements[idx]
            generic_idx[0] += 1
        else:
            # Generic fallback: keep as-is but fix title
            return full_block

        # Build new options block
        new_options = f'''            "[[Option 1|Opción 1]]",
            "[[Option 2|Opción 2]]"'''
        if '"[[Option 1|Opción 1]]"' in full_block:
            new_opts = f'"{opt0}",\n            "{opt1}",\n            "{opt2}"'
            full_block = full_block.replace(
                '"[[Option 1|Opción 1]]",\n            "[[Option 2|Opción 2]]"',
                new_opts
            )
            count[0] += 1

        return full_block

    # Match each exercise block containing short_writing
    # We process line by line to find the boundaries
    new_content = re.sub(
        r'"title":\s*"short_writing".*?"correctAnswer":\s*\d+\s*\}',
        replace_exercise,
        content,
        flags=re.DOTALL
    )

    if new_content != content:
        filepath.write_text(new_content, encoding='utf-8')

    return count[0]


def main():
    print('=== Fixing short_writing placeholder exercises ===\n')
    total = 0
    for f in sorted(TS_DIR.glob('unit-*.ts')):
        m = re.search(r'unit-(\d+)\.ts$', f.name)
        if not m:
            continue
        unit_num = int(m.group(1))
        n = fix_short_writing_in_file(f, unit_num)
        if n > 0:
            print(f'  {f.name}: {n} exercises fixed')
            total += n

    # Also fix titles where options were not placeholder but title was wrong
    title_count = 0
    for f in sorted(TS_DIR.glob('unit-*.ts')):
        content = f.read_text(encoding='utf-8')
        if '"title": "short_writing"' in content:
            new_content = content.replace('"title": "short_writing"',
                                          '"title": "[[Translation|Traducción]]"')
            if new_content != content:
                f.write_text(new_content, encoding='utf-8')
                title_count += content.count('"title": "short_writing"')

    if title_count:
        print(f'  + {title_count} remaining titles fixed')
        total += title_count

    print(f'\nTotal: {total} exercises fixed')


if __name__ == '__main__':
    main()
