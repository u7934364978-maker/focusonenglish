#!/usr/bin/env python3
"""
Añade ejercicios de producción libre (short_writing) y reciclaje léxico
a las unidades del curso A1.

Estrategia:
- Producción libre: short_writing exercises en unidades gramaticales clave
- Reciclaje léxico: bloques de repaso en unidades 15, 25 y 30
- Expansión de unidades 21-29 de 51 a ~65 interacciones
"""
import json
import random
from pathlib import Path

CONTENT_DIR = Path('src/content/cursos/ingles-a1')
random.seed(2026)


def make_sw(uid, block_id, idx, prompt_es, example=None, mastery='production', tags=None):
    ex = {'interaction_id': f'A1_U{uid}_{block_id}_SW{idx}',
          'type': 'short_writing', 'prompt_es': prompt_es, 'mastery_tag': mastery,
          'complexity': 3, 'concept_tags': tags or ['production', 'free_writing']}
    if example:
        ex['example_answer'] = example
    return ex


def make_mc(uid, block_id, idx, prompt_es, options, correct_pos, mastery='vocabulary', tags=None):
    opts = [{'id': f'o{i+1}', 'text': t} for i, t in enumerate(options)]
    return {'interaction_id': f'A1_U{uid}_{block_id}_MC{idx}',
            'type': 'multiple_choice', 'prompt_es': prompt_es, 'options': opts,
            'correct_answer': f'o{correct_pos}', 'mastery_tag': mastery,
            'complexity': 2, 'concept_tags': tags or ['vocabulary']}


def make_fill(uid, block_id, idx, prompt_es, stimulus_en, correct_answer, mastery='grammar', tags=None):
    return {'interaction_id': f'A1_U{uid}_{block_id}_FB{idx}',
            'type': 'fill_blanks', 'prompt_es': prompt_es, 'stimulus_en': stimulus_en,
            'correct_answer': correct_answer, 'mastery_tag': mastery,
            'complexity': 2, 'concept_tags': tags or ['grammar']}


def make_match(uid, block_id, idx, prompt_es, pairs, correct_answer, mastery='vocabulary'):
    return {'interaction_id': f'A1_U{uid}_{block_id}_MA{idx}',
            'type': 'matching', 'prompt_es': prompt_es, 'pairs': pairs,
            'correct_answer': correct_answer, 'mastery_tag': mastery,
            'complexity': 2, 'concept_tags': ['vocabulary']}


def make_reorder(uid, block_id, idx, prompt_es, words, correct_order, mastery='syntax'):
    opts = [{'id': f'w{i+1}', 'text': w} for i, w in enumerate(words)]
    correct_answer = [f'w{correct_order[i]+1}' for i in range(len(correct_order))]
    return {'interaction_id': f'A1_U{uid}_{block_id}_RO{idx}',
            'type': 'reorder_words', 'prompt_es': prompt_es, 'options': opts,
            'correct_answer': correct_answer, 'mastery_tag': mastery,
            'complexity': 3, 'concept_tags': ['grammar', 'syntax']}


def make_tf(uid, block_id, idx, prompt_es, stimulus_en, correct_answer, mastery='comprehension', tags=None):
    return {'interaction_id': f'A1_U{uid}_{block_id}_TF{idx}',
            'type': 'true_false', 'prompt_es': prompt_es, 'stimulus_en': stimulus_en,
            'correct_answer': correct_answer, 'mastery_tag': mastery,
            'complexity': 2, 'concept_tags': tags or ['comprehension']}


# ──────────────────────────────────────────────
# Ejercicios de producción libre por unidad
# ──────────────────────────────────────────────

PRODUCTION_BLOCKS = {

    1: {
        'block_id': 'B1_PROD', 'title': 'Block 5: Production – Greetings & Introductions',
        'exercises': [
            make_sw(1, 'B1_PROD', 1,
                    'Escribe 2 oraciones presentándote: tu nombre y de dónde eres. Usa [[I am|soy]] y [[I\'m from|soy de]].',
                    'My name is Ana. I\'m from Madrid.'),
            make_sw(1, 'B1_PROD', 2,
                    'Escribe un breve diálogo de saludo (3 líneas). Usa [[Hello|Hola]], [[How are you?|¿Cómo estás?]] y [[Fine, thanks|Bien, gracias]].',
                    'A: Hello! How are you? B: Fine, thanks. And you? A: I\'m great, thank you!'),
            make_sw(1, 'B1_PROD', 3,
                    'Presenta a un amigo/a imaginario/a: su nombre, edad y país. Usa [[This is|Este/Esta es]], [[He/She is|Él/Ella tiene]] y [[He/She\'s from|Él/Ella es de]].',
                    'This is my friend Carlos. He is twenty years old. He\'s from Spain.'),
            make_mc(1, 'B1_PROD', 4,
                    '¿Cómo responderías a "[[Nice to meet you!|¡Encantado de conocerte!]]"?',
                    ['[[Nice to meet you too!|¡Encantado de conocerte también!]]', '[[Goodbye!|¡Adiós!]]', '[[I am Spanish|Soy español/a]]', '[[My name is Ana|Me llamo Ana]]'],
                    1, 'pragmatics', ['communication', 'greetings']),
            make_fill(1, 'B1_PROD', 5,
                      'Completa: "[[My|Mi]] ___ is Pedro. I ___ from [[Mexico|México]]."',
                      'My ___ is Pedro. I ___ from Mexico.',
                      'name / am', 'grammar', ['verb_to_be', 'introductions']),
        ]
    },

    6: {
        'block_id': 'B6_PROD', 'title': 'Block 6: Production – My Family',
        'exercises': [
            make_sw(6, 'B6_PROD', 1,
                    'Describe tu familia (real o imaginaria). Escribe 3 oraciones usando [[My|Mi]], [[His/Her|Su]] y [[\'s|de (posesivo)]].',
                    'My father\'s name is Carlos. My sister is twelve years old. My mother\'s job is nurse.'),
            make_sw(6, 'B6_PROD', 2,
                    'Escribe una oración para cada miembro: [[father|padre]], [[mother|madre]], [[brother|hermano]], [[sister|hermana]]. Usa el genitivo sajón.',
                    'My father\'s car is red. My mother\'s job is teaching. My brother\'s school is near. My sister\'s friend is Ana.'),
            make_sw(6, 'B6_PROD', 3,
                    'Describe una foto de familia imaginaria usando [[tall|alto/a]], [[young|joven]], [[old|mayor]], [[short|bajo/a]].',
                    'In the photo, my grandfather is tall and old. My little sister is short and young. My parents are in the middle.'),
            make_mc(6, 'B6_PROD', 4,
                    '¿Cuál es la forma correcta del genitivo sajón para "el coche de mi padre"?',
                    ['[[My father\'s car|El coche de mi padre]]', 'My father car', 'The car of father my', 'My fathers car'],
                    1, 'grammar', ['saxon_genitive']),
            make_fill(6, 'B6_PROD', 5,
                      'Completa: "[[This|Este]] is [[Anna|Anna]]. [[She|Ella]] is my sister. [[Anna\'s|De Anna]] [[mother|madre]] is a [[teacher|profesora]]."',
                      'This is Anna. She is my ___. Anna\'s ___ is a teacher.',
                      'sister / mother', 'grammar', ['saxon_genitive', 'family']),
        ]
    },

    14: {
        'block_id': 'B14_PROD', 'title': 'Block 6: Production – Present Simple',
        'exercises': [
            make_sw(14, 'B14_PROD', 1,
                    'Escribe 3 oraciones sobre lo que haces cada día. Usa [[I work|trabajo]], [[I study|estudio]], [[I eat|como]].',
                    'I study English every day. I eat breakfast at seven. I work from nine to five.'),
            make_sw(14, 'B14_PROD', 2,
                    'Describe la rutina de un amigo/a. Usa [[He/She works|Él/Ella trabaja]], [[He/She studies|Él/Ella estudia]], [[He/She plays|Él/Ella juega]].',
                    'My friend Maria works in a hospital. She studies nursing at night. She plays tennis at weekends.'),
            make_sw(14, 'B14_PROD', 3,
                    'Escribe 2 oraciones afirmativas y 2 negativas sobre tus hábitos. Usa [[don\'t|no]] y [[doesn\'t|no (3ª persona)]].',
                    'I drink coffee every morning. I don\'t eat meat. My sister plays guitar. She doesn\'t like sport.'),
            make_mc(14, 'B14_PROD', 4,
                    '¿Cuál es la forma correcta para la 3ª persona de "[[to study|estudiar]]"?',
                    ['[[studies|estudia]]', 'studys', 'study', 'studyes'],
                    1, 'grammar', ['present_simple', 'third_person']),
            make_fill(14, 'B14_PROD', 5,
                      'Completa: "[[Tom|Tom]] ___ (work) in a bank. He ___ (not / like) his job very much."',
                      'Tom ___ in a bank. He ___ his job very much.',
                      'works / doesn\'t like', 'grammar', ['present_simple']),
        ]
    },

    15: {
        'block_id': 'B15_PROD', 'title': 'Block 6: Production – Daily Routine',
        'exercises': [
            make_sw(15, 'B15_PROD', 1,
                    'Describe tu rutina mañanera con al menos 4 acciones. Usa [[wake up|despertarse]], [[have breakfast|desayunar]], [[go to|ir a]], [[start|empezar]].',
                    'I wake up at seven o\'clock. I have breakfast at half past seven. I go to university by bus. My classes start at nine.'),
            make_sw(15, 'B15_PROD', 2,
                    'Escribe sobre lo que NO haces durante la semana. Usa [[I don\'t|no]] y [[He/She doesn\'t|no (3ª persona)]] con [[usually|normalmente]], [[often|a menudo]].',
                    'I don\'t usually watch TV in the morning. My flatmate doesn\'t often cook dinner. We don\'t go out on Sundays.'),
            make_sw(15, 'B15_PROD', 3,
                    'Imagina que eres periodista. Escribe 3 preguntas para una entrevista sobre rutinas. Usa [[Do you...?|¿...?]] y [[Does he/she...?|¿...?]].',
                    'Do you work every day? Does your boss arrive early? Do you usually have lunch at the office?'),
            make_mc(15, 'B15_PROD', 4,
                    '¿Cuál es la pregunta correcta en presente simple para 3ª persona?',
                    ['[[Does she work here?|¿Ella trabaja aquí?]]', 'Do she work here?', 'Is she work here?', 'She does work here?'],
                    1, 'grammar', ['present_simple', 'questions']),
            make_fill(15, 'B15_PROD', 5,
                      'Completa con la forma correcta: "___ (Do/Does) [[your parents|tus padres]] [[live|vivir]] near you? Yes, they ___."',
                      '___ your parents live near you? Yes, they ___.',
                      'Do / do', 'grammar', ['present_simple', 'questions']),
        ]
    },

    18: {
        'block_id': 'B18_PROD', 'title': 'Block 6: Production – There is / There are',
        'exercises': [
            make_sw(18, 'B18_PROD', 1,
                    'Describe tu dormitorio usando [[There is|Hay (singular)]] y [[There are|Hay (plural)]]. Mínimo 4 oraciones.',
                    'There is a bed and a desk in my room. There are two windows. There is a lamp on the desk. There are some books on the shelf.'),
            make_sw(18, 'B18_PROD', 2,
                    'Describe el [[neighbourhood|barrio]] donde vives. Usa [[There is a|Hay un/una]], [[There are some|Hay algunos/as]], [[There isn\'t|No hay]].',
                    'There is a supermarket near my house. There are some cafés in my street. There isn\'t a cinema but there is a theatre.'),
            make_mc(18, 'B18_PROD', 3,
                    '¿Cuál es la forma negativa correcta de "There is a chair"?',
                    ['[[There isn\'t a chair|No hay una silla]]', 'There aren\'t a chair', 'There is not chairs', 'There no is a chair'],
                    1, 'grammar', ['there_is_there_are']),
            make_fill(18, 'B18_PROD', 4,
                      'Completa: "___ [[a supermarket|un supermercado]] near my house but ___ [[any parks|ningún parque]]."',
                      '___ a supermarket near my house but ___ any parks.',
                      'There is / there aren\'t', 'grammar', ['there_is_there_are']),
            make_sw(18, 'B18_PROD', 5,
                    'Escribe 3 preguntas sobre una ciudad usando [[Is there...?|¿Hay...?]] y [[Are there...?|¿Hay...?]].',
                    'Is there a good restaurant near here? Are there any parks in the city centre? Is there a bus stop on this street?'),
        ]
    },

    19: {
        'block_id': 'B19_PROD', 'title': 'Block 6: Production – Can / Can\'t',
        'exercises': [
            make_sw(19, 'B19_PROD', 1,
                    'Escribe 4 oraciones sobre tus habilidades. Usa [[I can|puedo]], [[I can\'t|no puedo]], [[I can\'t swim but I can|no puedo nadar pero sí puedo]].',
                    'I can speak Spanish and English. I can\'t play the guitar. I can drive a car. I can\'t ski but I can ice skate.'),
            make_sw(19, 'B19_PROD', 2,
                    'Escribe sobre las habilidades de un amigo/a. Usa [[He/She can|Él/Ella puede]], [[He/She can\'t|Él/Ella no puede]].',
                    'My friend Carlos can cook very well. He can\'t sing but he can dance. He can speak French and he can play chess.'),
            make_mc(19, 'B19_PROD', 3,
                    '¿Cuál es la pregunta correcta con [[can|poder]]?',
                    ['[[Can you swim?|¿Sabes nadar?]]', 'Do you can swim?', 'You can swim?', 'Can you to swim?'],
                    1, 'grammar', ['modal_can']),
            make_fill(19, 'B19_PROD', 4,
                      'Completa: "[[She|Ella]] ___ (can/can\'t) [[speak|hablar]] [[Chinese|chino]] but she ___ (can/can\'t) [[speak|hablar]] [[Italian|italiano]]."',
                      'She ___ speak Chinese but she ___ speak Italian.',
                      'can\'t / can', 'grammar', ['modal_can']),
            make_sw(19, 'B19_PROD', 5,
                    'Escribe un anuncio corto buscando compañero/a de deporte. Incluye qué [[sports|deportes]] puedes y no puedes practicar.',
                    'Looking for a tennis partner! I can play tennis and I can swim. I can\'t play football but I can run. Contact: 555-1234.'),
        ]
    },
}


# ──────────────────────────────────────────────
# Bloques de reciclaje léxico (para units 21-29)
# ──────────────────────────────────────────────

RECYCLING_DATA = {
    21: {
        'recycle_block': {
            'block_id': 'B21_REC', 'title': 'Block 6: Recycling – Vocabulary from Units 11-20',
            'exercises': [
                make_mc(21, 'B21_REC', 1,
                        '¿Cuál es la hora correcta para "[[quarter past three|las tres y cuarto]]"?',
                        ['3:15', '3:45', '3:30', '3:05'], 1, 'vocabulary', ['time']),
                make_mc(21, 'B21_REC', 2,
                        '¿Qué día sigue al [[Wednesday|miércoles]]?',
                        ['[[Thursday|Jueves]]', '[[Tuesday|Martes]]', '[[Friday|Viernes]]', '[[Monday|Lunes]]'],
                        1, 'vocabulary', ['days']),
                make_fill(21, 'B21_REC', 3,
                          'Completa con la forma correcta: "He ___ (go) to work by [[bus|autobús]] every [[day|día]]."',
                          'He ___ to work by bus every day.',
                          'goes', 'grammar', ['present_simple']),
                make_mc(21, 'B21_REC', 4,
                        '¿Cuál de estos alimentos es una [[vegetable|verdura]]?',
                        ['[[Carrot|Zanahoria]]', '[[Apple|Manzana]]', '[[Steak|Filete]]', '[[Bread|Pan]]'],
                        1, 'vocabulary', ['food']),
                make_mc(21, 'B21_REC', 5,
                        '¿Cuál es la pregunta para pedir el [[price|precio]]?',
                        ['[[How much is it?|¿Cuánto cuesta?]]', 'Where is it?', 'What is it?', 'Who has it?'],
                        1, 'vocabulary', ['shopping']),
                make_sw(21, 'B21_REC', 6,
                        'Escribe 3 oraciones sobre lo que comes y bebes normalmente. Usa [[I eat|como]], [[I drink|bebo]], [[I don\'t eat|no como]].',
                        'I eat rice and vegetables every day. I drink water and orange juice. I don\'t eat meat.'),
                make_sw(21, 'B21_REC', 7,
                        'Describe tu horario escolar o laboral de esta semana. Usa [[On Monday|El lunes]], [[From...to|De...a]], [[At|A las]].',
                        'On Monday I have English class from nine to eleven. On Wednesday I work from two to six. On Friday I finish at four o\'clock.'),
            ]
        },
        'extra_exercises': [
            make_mc(21, 'B21_EX', 1, '¿Cuál es la forma correcta de [[Present Simple|Presente Simple]] para "[[they|ellos]]"?',
                    ['[[They work|Ellos trabajan]]', 'They works', 'They is work', 'They working'],
                    1, 'grammar', ['present_simple']),
            make_mc(21, 'B21_EX', 2, '¿Qué expresión usas para [[giving directions|dar indicaciones]]?',
                    ['[[Turn left|Gira a la izquierda]]', 'Is here', 'Go the left', 'Left you turn'],
                    1, 'vocabulary', ['directions']),
            make_fill(21, 'B21_EX', 3, 'Completa: "[[The bank|El banco]] is ___ [[the|la]] [[corner|esquina]]."',
                      'The bank is ___ the corner.', 'on', 'grammar', ['prepositions']),
            make_mc(21, 'B21_EX', 4, '¿Cuál significa "[[straight ahead|todo recto]]"?',
                    ['[[Go straight ahead|Sigue recto]]', 'Turn left', 'Turn right', 'Go back'],
                    1, 'vocabulary', ['directions']),
            make_reorder(21, 'B21_EX', 5, 'Ordena para pedir [[directions|indicaciones]]:',
                         ['the', 'Where', 'is', 'station?', 'train'],
                         [1, 0, 2, 4, 3], 'syntax'),
            make_mc(21, 'B21_EX', 6, 'Para decir "[[next to|al lado de]]" usas:',
                    ['[[next to|al lado de]]', 'in front', 'behind of', 'near of'],
                    1, 'vocabulary', ['prepositions']),
        ]
    },

    22: {
        'recycle_block': {
            'block_id': 'B22_REC', 'title': 'Block 6: Recycling – Grammar & Vocabulary Review',
            'exercises': [
                make_mc(22, 'B22_REC', 1, '¿Cuál es la forma negativa de "[[I have|tengo]]"?',
                        ['[[I don\'t have|No tengo]]', 'I not have', 'I haven\'t', 'I no have'],
                        1, 'grammar', ['present_simple']),
                make_mc(22, 'B22_REC', 2, '¿Qué usas para hablar de posesión en inglés?',
                        ['[[Have|Tener]]', 'Is', 'Are', 'Do'],
                        1, 'grammar', ['verb_have']),
                make_fill(22, 'B22_REC', 3, 'Completa: "[[Do|¿]] ___ [[you|tú]] [[have|tienes]] [[a car|un coche]]?"',
                          'Do ___ have a car?', 'you', 'grammar', ['verb_have']),
                make_mc(22, 'B22_REC', 4, '¿Cuál es la pregunta correcta para "[[What time is it?|¿Qué hora es?]]"?',
                        ['[[What time is it?|¿Qué hora es?]]', 'How time is?', 'When is the time?', 'What is time?'],
                        1, 'vocabulary', ['time']),
                make_sw(22, 'B22_REC', 5,
                        'Escribe 3 oraciones sobre lo que tienes en tu [[bag|bolsa]] usando [[I have|tengo]] y [[I don\'t have|no tengo]].',
                        'I have a notebook and a pen in my bag. I have my phone. I don\'t have an umbrella.'),
                make_sw(22, 'B22_REC', 6,
                        'Describe tu [[neighbourhood|barrio]] usando [[There is|hay]] y [[There are|hay (plural)]]. 3 oraciones mínimo.',
                        'There is a big supermarket near my house. There are two parks and a cinema. There isn\'t a hospital but there is a clinic.'),
            ]
        },
        'extra_exercises': [
            make_mc(22, 'B22_EX', 1, '¿Cómo se dice "[[second floor|segunda planta]]" en inglés?',
                    ['[[Second floor|Segunda planta]]', 'Two floor', 'Floor second', 'Second ground'],
                    1, 'vocabulary', ['home']),
            make_mc(22, 'B22_EX', 2, '¿Dónde puedes comprar medicamentos?',
                    ['[[Chemist\'s|Farmacia]]', '[[Bakery|Panadería]]', '[[Greengrocer\'s|Frutería]]', '[[Butcher\'s|Carnicería]]'],
                    1, 'vocabulary', ['shops']),
            make_fill(22, 'B22_EX', 3, 'Completa: "The [[living room|salón]] is ___ [[the|el]] [[kitchen|cocina]]."',
                      'The living room is ___ the kitchen.', 'next to', 'grammar', ['prepositions', 'home']),
            make_mc(22, 'B22_EX', 4, '¿Cuál es la palabra para la habitación donde duermes?',
                    ['[[Bedroom|Dormitorio]]', '[[Bathroom|Baño]]', '[[Kitchen|Cocina]]', '[[Living room|Salón]]'],
                    1, 'vocabulary', ['home']),
        ]
    },

    23: {
        'recycle_block': {
            'block_id': 'B23_REC', 'title': 'Block 6: Recycling & Production – Body & Health',
            'exercises': [
                make_mc(23, 'B23_REC', 1, '¿Qué dices cuando tienes [[a headache|dolor de cabeza]]?',
                        ['[[I have a headache|Tengo dolor de cabeza]]', 'My head is hurt', 'I headache have', 'My head hurt'],
                        1, 'vocabulary', ['health']),
                make_mc(23, 'B23_REC', 2, '¿Cuál es la frase correcta para ir al médico?',
                        ['[[I\'d like to see a doctor|Quisiera ver a un médico]]', 'I want doctor see', 'See me doctor please', 'I go doctor'],
                        1, 'vocabulary', ['health']),
                make_fill(23, 'B23_REC', 3, 'Completa: "[[My|Mi]] ___ [[hurts|duele]]. [[I need|Necesito]] some [[medicine|medicina]]."',
                          'My ___ hurts. I need some medicine.', 'stomach', 'vocabulary', ['body', 'health']),
                make_sw(23, 'B23_REC', 4,
                        'Describe cómo te sientes hoy. Usa [[I feel|me siento]], [[I have|tengo]], [[I\'m|estoy]].',
                        'I feel tired today. I have a small headache. I\'m not very well but I\'m better than yesterday.'),
                make_sw(23, 'B23_REC', 5,
                        'Escribe un email corto a tu médico explicando tus síntomas. Usa [[I have|tengo]], [[My...hurts|Me duele]], [[I feel|me siento]].',
                        'Dear Doctor, I am writing because I have a sore throat and a fever. My back hurts and I feel very tired. Can I make an appointment? Thank you.'),
                make_mc(23, 'B23_REC', 6, '¿Cuántos dedos tiene una mano?',
                        ['[[Five|Cinco]]', '[[Four|Cuatro]]', '[[Six|Seis]]', '[[Three|Tres]]'],
                        1, 'vocabulary', ['body']),
            ]
        },
        'extra_exercises': [
            make_mc(23, 'B23_EX', 1, '¿Cuál de estas palabras describe una emoción?',
                    ['[[Happy|Feliz]]', '[[Arm|Brazo]]', '[[Walk|Caminar]]', '[[Medicine|Medicina]]'],
                    1, 'vocabulary', ['emotions']),
            make_mc(23, 'B23_EX', 2, '¿Cómo se pregunta "[[How are you feeling?|¿Cómo te encuentras?]]"?',
                    ['[[How are you feeling?|¿Cómo te encuentras?]]', 'How you feel?', 'What you feel?', 'Are you feel?'],
                    1, 'vocabulary', ['health']),
        ]
    },

    24: {
        'recycle_block': {
            'block_id': 'B24_REC', 'title': 'Block 6: Recycling – Jobs & Workplaces',
            'exercises': [
                make_mc(24, 'B24_REC', 1, '¿Dónde trabaja un [[doctor|médico]]?',
                        ['[[In a hospital|En un hospital]]', 'In a school', 'In a bank', 'In a shop'],
                        1, 'vocabulary', ['jobs']),
                make_mc(24, 'B24_REC', 2, '¿Cuál es la pregunta para preguntar la profesión?',
                        ['[[What do you do?|¿A qué te dedicas?]]', 'What you are?', 'Who you work?', 'What is your do?'],
                        1, 'vocabulary', ['jobs']),
                make_fill(24, 'B24_REC', 3, 'Completa: "[[She|Ella]] is a ___ (nurse/nurses). She ___ (work/works) in a hospital."',
                          'She is a ___. She ___ in a hospital.', 'nurse / works', 'grammar', ['jobs', 'present_simple']),
                make_sw(24, 'B24_REC', 4,
                        'Describe tu trabajo ideal. Usa [[I want to be|quiero ser]], [[I would like to work|me gustaría trabajar]], [[because|porque]].',
                        'I want to be a teacher because I love helping people. I would like to work in a big school. I think it is a very important job.'),
                make_sw(24, 'B24_REC', 5,
                        'Escribe una presentación profesional breve (3-4 oraciones). Usa [[I am|soy]], [[I work|trabajo]], [[I have|tengo]] y [[My job|Mi trabajo]].',
                        'I am Sofia and I am a graphic designer. I work for a small company in Madrid. I have five years of experience. My job is creative and interesting.'),
                make_mc(24, 'B24_REC', 6, '¿Dónde trabaja un [[chef|chef/cocinero]]?',
                        ['[[In a restaurant|En un restaurante]]', 'In a hospital', 'In a school', 'In a library'],
                        1, 'vocabulary', ['jobs']),
            ]
        },
        'extra_exercises': [
            make_mc(24, 'B24_EX', 1, '¿Cuál de estos es un verbo de [[obligation|obligación]]?',
                    ['[[must|deber/tener que]]', 'can', 'should maybe', 'will perhaps'],
                    1, 'grammar', ['modal_must']),
            make_mc(24, 'B24_EX', 2, '¿Cuál es la forma correcta de "[[to have|tener]]" para [[they|ellos]]?',
                    ['[[They have|Ellos tienen]]', 'They has', 'They haves', 'They are have'],
                    1, 'grammar', ['verb_have']),
        ]
    },

    25: {
        'recycle_block': {
            'block_id': 'B25_REC', 'title': 'Block 6: Recycling – Mid-Course Review (Units 1-24)',
            'exercises': [
                make_mc(25, 'B25_REC', 1, '¿Cuál es la respuesta correcta a "[[Where are you from?|¿De dónde eres?]]"?',
                        ['[[I\'m from Spain|Soy de España]]', 'I am Spain', 'I from Spain am', 'Spain I am from'],
                        1, 'vocabulary', ['introductions']),
                make_mc(25, 'B25_REC', 2, '¿Cuál es la 3ª persona singular de "[[to go|ir]]"?',
                        ['[[goes|va]]', 'go', 'gos', 'goess'],
                        1, 'grammar', ['present_simple']),
                make_fill(25, 'B25_REC', 3, 'Completa con [[can|poder]]: "She ___ speak three languages but she ___ drive."',
                          'She ___ speak three languages but she ___ drive.',
                          'can / can\'t', 'grammar', ['modal_can']),
                make_mc(25, 'B25_REC', 4, '¿Cuál es el genitivo sajón correcto?',
                        ['[[Maria\'s book|El libro de María]]', 'Marias book', 'The book of Maria', 'Maria book'],
                        1, 'grammar', ['saxon_genitive']),
                make_mc(25, 'B25_REC', 5, '¿Cómo se dice "[[There aren\'t any parks|No hay ningún parque]]"?',
                        ['[[There aren\'t any parks|No hay ningún parque]]', 'There isn\'t any parks', 'There no are parks', 'There are no park'],
                        1, 'grammar', ['there_is_there_are']),
                make_sw(25, 'B25_REC', 6,
                        'Escribe un párrafo sobre ti mismo/a usando: presentación, familia, rutina diaria y habilidades. Mínimo 6 oraciones.',
                        'My name is Ana and I\'m from Madrid. I live with my family - my parents and my sister. Every morning I wake up at seven and have breakfast. I study English at university. I can speak Spanish and English. I love reading and playing tennis at weekends.'),
                make_sw(25, 'B25_REC', 7,
                        'Escribe una postal desde tu ciudad a un amigo/a extranjero/a. Incluye descripción de la ciudad, actividades y clima.',
                        'Hi Tom! I\'m in Madrid this week. It\'s a big and beautiful city. There are lots of museums and parks. The weather is warm and sunny. The food is delicious! Hope to see you soon. Ana.'),
            ]
        },
        'extra_exercises': [
            make_mc(25, 'B25_EX', 1, '¿Cuál de estas preguntas es correcta en [[Present Simple|Presente Simple]]?',
                    ['[[Do they work here?|¿Trabajan aquí?]]', 'Are they work here?', 'They do work here?', 'Work they here?'],
                    1, 'grammar', ['present_simple', 'questions']),
            make_reorder(25, 'B25_EX', 2, 'Ordena la oración: [[She doesn\'t like|Ella no le gusta]]...',
                         ['not', 'She', 'does', 'coffee', 'like'],
                         [1, 2, 0, 4, 3], 'syntax'),
        ]
    },

    26: {
        'recycle_block': {
            'block_id': 'B26_REC', 'title': 'Block 6: Recycling – Shopping & Money',
            'exercises': [
                make_mc(26, 'B26_REC', 1, '¿Cuánto es [[fifteen plus eight|quince más ocho]]?',
                        ['[[Twenty-three|Veintitrés]]', '[[Twenty-two|Veintidós]]', '[[Twenty-four|Veinticuatro]]', '[[Twenty-one|Veintiuno]]'],
                        1, 'vocabulary', ['numbers']),
                make_fill(26, 'B26_REC', 2, 'Completa: "That\'s ___ [[pounds|libras]] and ___ [[pence|peniques]], [[please|por favor]]."',
                          'That\'s ___ pounds and ___ pence, please.',
                          'five / fifty', 'vocabulary', ['shopping', 'numbers']),
                make_mc(26, 'B26_REC', 3, '¿Cómo preguntas el precio en una tienda?',
                        ['[[How much does it cost?|¿Cuánto cuesta?]]', 'What price is?', 'How many cost?', 'What is money?'],
                        1, 'vocabulary', ['shopping']),
                make_sw(26, 'B26_REC', 4,
                        'Escribe un diálogo en una tienda. Incluye: preguntar el precio, pedir una talla/tamaño y pagar. Usa [[How much|Cuánto]], [[Can I have|¿Me pone?]], [[Here you are|Aquí tiene]].',
                        'A: Can I help you? B: Yes, how much is this jacket? A: It\'s forty-five pounds. B: Can I try it on? A: Of course! B: I\'ll take it. A: Here you are. Goodbye!'),
                make_mc(26, 'B26_REC', 5, '¿Cuál es la respuesta correcta a "[[Can I help you?|¿Le puedo ayudar?]]"?',
                        ['[[Yes, I\'m looking for a shirt|Sí, estoy buscando una camisa]]', 'Yes I want shirt', 'Give me shirt please', 'I shirt look for'],
                        1, 'vocabulary', ['shopping']),
                make_sw(26, 'B26_REC', 6,
                        'Escribe una lista de la compra para una semana. Usa [[I need|necesito]], [[some|algo de]], [[a|un/una]], [[a few|unos pocos]].',
                        'I need some milk and a loaf of bread. I need a few apples and some oranges. I also need a bottle of water and some pasta.'),
            ]
        },
        'extra_exercises': [
            make_mc(26, 'B26_EX', 1, '¿Qué expresión usas para [[trying on clothes|probarse ropa]]?',
                    ['[[Can I try it on?|¿Me lo puedo probar?]]', 'I test this please', 'Can I wear this now?', 'Give me try it'],
                    1, 'vocabulary', ['shopping']),
            make_mc(26, 'B26_EX', 2, '¿Cuál es el color del [[traffic light|semáforo]] cuando debes parar?',
                    ['[[Red|Rojo]]', '[[Green|Verde]]', '[[Yellow|Amarillo]]', '[[Blue|Azul]]'],
                    1, 'vocabulary', ['colours']),
        ]
    },

    27: {
        'recycle_block': {
            'block_id': 'B27_REC', 'title': 'Block 6: Recycling – Transport & Movement',
            'exercises': [
                make_mc(27, 'B27_REC', 1, '¿Qué transporte usas para cruzar el [[English Channel|Canal de la Mancha]]?',
                        ['[[Ferry|Ferry]]', '[[Bus|Autobús]]', '[[Train|Tren]]', '[[Car|Coche]]'],
                        1, 'vocabulary', ['transport']),
                make_fill(27, 'B27_REC', 2, 'Completa: "I [[go|ir]] to work ___ [[bus|autobús]]. She [[goes|ir]] ___ [[car|coche]]."',
                          'I go to work ___ bus. She goes ___ car.', 'by / by', 'grammar', ['transport', 'prepositions']),
                make_mc(27, 'B27_REC', 3, '¿Cuál es la forma correcta para decir que vas en transporte?',
                        ['[[I go by train|Voy en tren]]', 'I go with train', 'I go on train', 'I go in train'],
                        1, 'grammar', ['transport', 'prepositions']),
                make_sw(27, 'B27_REC', 4,
                        'Describe cómo vas al trabajo o a la escuela. Usa [[I go by|voy en]], [[It takes|tarda]], [[It\'s about|son unos]] y [[minutes/hours|minutos/horas]].',
                        'I go to university by bus. The journey takes about thirty minutes. The bus stop is near my house. Sometimes I walk if the weather is good - it\'s about fifteen minutes on foot.'),
                make_mc(27, 'B27_REC', 5, '¿Cómo preguntas dónde comprar un billete?',
                        ['[[Where can I buy a ticket?|¿Dónde puedo comprar un billete?]]', 'Where ticket is?', 'Can where ticket buy?', 'How do I ticket?'],
                        1, 'vocabulary', ['transport']),
                make_sw(27, 'B27_REC', 6,
                        'Escribe sobre un viaje que haces regularmente. Incluye: medio de transporte, duración y lo que ves durante el trayecto.',
                        'Every morning I take the bus to school. The journey takes twenty minutes. I see the park and the market from the window. The bus is usually full on Monday mornings.'),
            ]
        },
        'extra_exercises': [
            make_mc(27, 'B27_EX', 1, '¿Cuál de estos es un [[irregular verb|verbo irregular]] en inglés?',
                    ['[[go → went|ir → fui]]', 'walk → walked', 'play → played', 'work → worked'],
                    1, 'grammar', ['past_simple', 'irregular_verbs']),
            make_mc(27, 'B27_EX', 2, '¿Cómo se dice "[[turn right|gira a la derecha]]"?',
                    ['[[Turn right|Gira a la derecha]]', 'Go right turn', 'Right turning', 'You turn to right'],
                    1, 'vocabulary', ['directions']),
        ]
    },

    28: {
        'recycle_block': {
            'block_id': 'B28_REC', 'title': 'Block 6: Recycling – Past Events',
            'exercises': [
                make_mc(28, 'B28_REC', 1, '¿Cuál es el [[past simple|pasado simple]] de "[[to be|ser/estar]]"?',
                        ['[[was/were|era/estaba - eran/estaban]]', 'is/are', 'be/beed', 'wased/wered'],
                        1, 'grammar', ['past_simple']),
                make_fill(28, 'B28_REC', 2, 'Completa: "[[Yesterday|Ayer]] she ___ (go) to the [[market|mercado]] and ___ (buy) some [[vegetables|verduras]]."',
                          'Yesterday she ___ to the market and ___ some vegetables.',
                          'went / bought', 'grammar', ['past_simple']),
                make_mc(28, 'B28_REC', 3, '¿Cómo se forma la negativa del [[past simple|pasado simple]]?',
                        ['[[didn\'t + verb|didn\'t + verbo]]', 'don\'t + verb', 'not + past verb', 'did not + past verb'],
                        1, 'grammar', ['past_simple']),
                make_sw(28, 'B28_REC', 4,
                        'Escribe sobre lo que hiciste el fin de semana pasado. Usa [[I went|fui]], [[I saw|vi]], [[I ate|comí]], [[I met|quedé con]].',
                        'Last weekend I went to the cinema with my friends. We saw a great film. After the cinema we ate pizza at a restaurant. I met my cousin in the city centre. It was a great day!'),
                make_sw(28, 'B28_REC', 5,
                        'Escribe un correo contando tus vacaciones del año pasado. Usa [[I visited|visité]], [[The weather was|El tiempo estaba]], [[I stayed|me alojé]], [[I loved|me encantó]].',
                        'Hi Maria! Last summer I visited London. The weather was cool but dry. I stayed in a small hotel near the centre. I visited the British Museum and the Tower of London. I loved the city! Love, Ana.'),
                make_mc(28, 'B28_REC', 6, '¿Cuál es la pregunta correcta en [[past simple|pasado simple]]?',
                        ['[[Did you go to the party?|¿Fuiste a la fiesta?]]', 'Did you went?', 'You did go?', 'Went you to party?'],
                        1, 'grammar', ['past_simple', 'questions']),
            ]
        },
        'extra_exercises': [
            make_mc(28, 'B28_EX', 1, '¿Cuál es el [[past simple|pasado simple]] de "[[to see|ver]]"?',
                    ['[[saw|vi/vio]]', 'seen', 'sawed', 'seed'],
                    1, 'grammar', ['past_simple', 'irregular_verbs']),
            make_mc(28, 'B28_EX', 2, '¿Cuál es el [[past simple|pasado simple]] de "[[to eat|comer]]"?',
                    ['[[ate|comí/comió]]', 'eated', 'eaten', 'ated'],
                    1, 'grammar', ['past_simple', 'irregular_verbs']),
        ]
    },

    29: {
        'recycle_block': {
            'block_id': 'B29_REC', 'title': 'Block 6: Recycling – Plans & Future',
            'exercises': [
                make_mc(29, 'B29_REC', 1, '¿Cuál es la forma correcta para hablar de [[plans|planes]] futuros?',
                        ['[[I\'m going to travel|Voy a viajar]]', 'I will go travel', 'I going travel', 'I go to travel future'],
                        1, 'grammar', ['going_to']),
                make_fill(29, 'B29_REC', 2, 'Completa: "She ___ [[going|]] [[to|]] [[study|estudiar]] [[abroad|en el extranjero]] next [[year|año]]."',
                          'She ___ going to study abroad next year.',
                          'is', 'grammar', ['going_to']),
                make_mc(29, 'B29_REC', 3, '¿Cuál es la pregunta correcta con "[[going to|ir a]]"?',
                        ['[[Are you going to visit London?|¿Vas a visitar Londres?]]', 'You are going visit?', 'Do you going to visit?', 'Going you to visit London?'],
                        1, 'grammar', ['going_to', 'questions']),
                make_sw(29, 'B29_REC', 4,
                        'Escribe sobre tus planes para el próximo fin de semana. Usa [[I\'m going to|voy a]], [[We\'re going to|vamos a]], [[I\'m not going to|no voy a]].',
                        'This weekend I\'m going to visit my grandparents. We\'re going to have lunch together. In the afternoon, I\'m going to play football with my friends. I\'m not going to study this Saturday!'),
                make_sw(29, 'B29_REC', 5,
                        'Escribe una lista de propósitos de año nuevo. Usa [[I\'m going to|voy a]], [[I want to|quiero]], [[I\'d like to|me gustaría]].',
                        'I\'m going to exercise three times a week. I want to learn to cook new dishes. I\'d like to travel to Japan. I\'m going to read more books this year.'),
                make_mc(29, 'B29_REC', 6, '¿Cuándo se usa "[[going to|ir a]]" en lugar de [[will|will]]?',
                        ['[[For plans and intentions|Para planes e intenciones]]', 'For predictions only', 'For past events', 'Never'],
                        1, 'grammar', ['going_to']),
            ]
        },
        'extra_exercises': [
            make_mc(29, 'B29_EX', 1, '¿Cuál es la negativa de "[[I\'m going to travel|Voy a viajar]]"?',
                    ['[[I\'m not going to travel|No voy a viajar]]', 'I not going travel', 'I\'m going not travel', 'I don\'t going travel'],
                    1, 'grammar', ['going_to']),
            make_mc(29, 'B29_EX', 2, '¿Cuál expresa un plan futuro?',
                    ['[[She\'s going to study medicine|Va a estudiar medicina]]', 'She study medicine tomorrow', 'She studies medicine next year', 'She will studied medicine'],
                    1, 'grammar', ['going_to']),
        ]
    },
}


def add_production_block(unit_num, block_data):
    filepath = CONTENT_DIR / f'unit{unit_num}.json'
    with open(filepath) as f:
        data = json.load(f)

    total_before = sum(len(b.get('content', [])) for b in data['blocks'])
    new_exercises = block_data['exercises']

    data['blocks'].append({
        'block_id': block_data['block_id'],
        'title': block_data['title'],
        'content': new_exercises,
    })

    total_after = sum(len(b.get('content', [])) for b in data['blocks'])

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f'  Unit {unit_num}: {total_before} → {total_after} ix (+{len(new_exercises)} production exercises)')


def add_recycling_and_extra(unit_num, rdata):
    filepath = CONTENT_DIR / f'unit{unit_num}.json'
    with open(filepath) as f:
        data = json.load(f)

    total_before = sum(len(b.get('content', [])) for b in data['blocks'])

    recycle_block = rdata['recycle_block']
    extra_exs = rdata.get('extra_exercises', [])

    data['blocks'].append({
        'block_id': recycle_block['block_id'],
        'title': recycle_block['title'],
        'content': recycle_block['exercises'],
    })

    if extra_exs:
        extra_block_id = f'B{unit_num}_EX'
        data['blocks'].append({
            'block_id': extra_block_id,
            'title': f'Block 7: Extra Practice – {recycle_block["title"].split("–")[1].strip() if "–" in recycle_block["title"] else "Additional Exercises"}',
            'content': extra_exs,
        })

    total_after = sum(len(b.get('content', [])) for b in data['blocks'])
    added = total_after - total_before

    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f'  Unit {unit_num}: {total_before} → {total_after} ix (+{added})')


def main():
    print('=== Añadiendo ejercicios de producción libre ===\n')
    for unit_num, block_data in sorted(PRODUCTION_BLOCKS.items()):
        add_production_block(unit_num, block_data)

    print('\n=== Añadiendo bloques de reciclaje léxico (Units 21-29) ===\n')
    for unit_num, rdata in sorted(RECYCLING_DATA.items()):
        add_recycling_and_extra(unit_num, rdata)

    print('\nDone!')


if __name__ == '__main__':
    main()
