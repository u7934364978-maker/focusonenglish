#!/usr/bin/env python3
"""
Fixes [[Spanish|Spanish]] tokens in unit-*.ts files where both sides are
the same Spanish word. Replaces with [[English|Spanish]] using a
comprehensive ES→EN dictionary.
"""
import re
from pathlib import Path

TS_DIR = Path('src/lib/course/a1')

# Spanish → English translation dictionary
# Only words that appear as same-word tokens in the unit files
ES_EN = {
    # Rooms & Furniture
    'Cocina': 'Kitchen',
    'Baño': 'Bathroom',
    'Dormitorio': 'Bedroom',
    'Salón': 'Living room',
    'Sofá': 'Sofa',
    'Acogedor': 'Cosy',
    'Luminoso': 'Bright',
    'Alfombra': 'Carpet',
    'Cajón': 'Drawer',
    'Caja': 'Box',
    'Cubo de basura': 'Bin',
    'Debajo del fregadero': 'Under the sink',
    'Encima del fregadero': 'Above the sink',
    'Detrás del fregadero': 'Behind the sink',

    # Clothes
    'Camisa': 'Shirt',
    'Zapatos': 'Shoes',
    'Falda': 'Skirt',
    'Sombrero': 'Hat',
    'Bañador': 'Swimsuit',
    'Cargador': 'Charger',

    # Body parts
    'Oreja': 'Ear',
    'Mano': 'Hand',
    'Espalda': 'Back',
    'Cara': 'Face',

    # Animals
    'Caballo': 'Horse',
    'León': 'Lion',
    'Conejo': 'Rabbit',
    'Hamster': 'Hamster',

    # Jobs & People
    'Enfermera': 'Nurse',
    'Dependiente/a': 'Shop assistant',
    'Cliente': 'Customer',

    # Transport
    'Autobús': 'Bus',
    'Avión': 'Plane',
    'Barco': 'Ship',
    'Tren': 'Train',
    'Aeropuerto': 'Airport',
    'Equipaje': 'Luggage',
    'Tarjeta de embarque': 'Boarding pass',

    # Activities / Verbs (infinitive)
    'Cocinar': 'Cook',
    'Bailar': 'Dance',
    'Dibujar': 'Draw',
    'Cantar': 'Sing',
    'Nadar': 'Swim',
    'Correr': 'Run',
    'Saltar': 'Jump',
    'Patinar': 'Skate',
    'Esquiar': 'Ski',
    'Pintar': 'Paint',
    'Viajar': 'Travel',
    'Visitar': 'Visit',
    'Ducharse': 'Have a shower',
    'Desayunar': 'Have breakfast',
    'Cenar': 'Have dinner',
    'Barrer el suelo': 'Sweep the floor',
    'Cepillarse los dientes': 'Brush your teeth',
    'Dar un paseo': 'Go for a walk',
    'Tomar el sol': 'Sunbathe',
    'Ver la televisión': 'Watch TV',
    'Ver la tele': 'Watch TV',
    'Ver una peli': 'Watch a film',
    'Escuchar música': 'Listen to music',
    'Dar una razón (¿Por qué?)': 'Giving a reason (Why?)',
    'Contrastar ideas (+/-)': 'Contrasting ideas (+/-)',
    'Añadir información (+)': 'Adding information (+)',

    # Food & Shopping
    'Comida': 'Food',
    'Compras': 'Shopping',
    'Dinero': 'Money',
    'Azúcar': 'Sugar',
    'Carrito': 'Trolley',
    'Cesta': 'Basket',
    'Caja': 'Checkout',
    'Checkout': 'Checkout',
    'En oferta / rebajado': 'On sale / reduced',
    'Cerrado': 'Closed',
    'Cliente': 'Customer',

    # Weather & Seasons
    'Ventoso': 'Windy',
    'Verano': 'Summer',
    'Invierno': 'Winter',
    'Tiempo': 'Weather',
    'Viaje': 'Trip',

    # Adjectives
    'Amable': 'Friendly',
    'Talento': 'Talent',

    # Misc activities
    'Actividad': 'Activity',
    'Escribir a máquina': 'Type',

    # Time expressions (Spanish)
    'Cada día': 'Every day',
    'Una vez por semana': 'Once a week',
    'Dos veces al mes': 'Twice a month',
    'A veces (40-50%)': 'Sometimes (40-50%)',

    # Hospital / Health
    'Hospital': 'Hospital',
}

# Build regex pattern to match [[X|X]] where X is a Spanish word we know
def build_replacements(mapping):
    """Returns list of (pattern, replacement) tuples."""
    replacements = []
    for es, en in mapping.items():
        # Escape special regex chars in es
        escaped = re.escape(es)
        pat = re.compile(r'\[\[' + escaped + r'\|' + escaped + r'\]\]')
        rep = f'[[{en}|{es}]]'
        replacements.append((pat, rep))
    return replacements

REPLACEMENTS = build_replacements(ES_EN)

def fix_file(filepath):
    content = filepath.read_text(encoding='utf-8')
    original = content
    count = 0
    for pat, rep in REPLACEMENTS:
        new_content, n = pat.subn(rep, content)
        if n > 0:
            count += n
            content = new_content
    if count > 0:
        filepath.write_text(content, encoding='utf-8')
    return count

def main():
    print('=== Fixing [[Spanish|Spanish]] tokens in unit-*.ts files ===\n')
    total = 0
    for f in sorted(TS_DIR.glob('unit-*.ts')):
        n = fix_file(f)
        if n > 0:
            print(f'  {f.name}: {n} tokens fixed')
            total += n
    print(f'\nTotal: {total} tokens fixed across all units')

if __name__ == '__main__':
    main()
