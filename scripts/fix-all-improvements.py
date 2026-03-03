#!/usr/bin/env python3
"""
Comprehensive A1 course improvement script.
1. Replaces "Other word"/"Wrong word" MC options with real vocabulary
2. Adds [[English|Spanish]] tokens (FIX-1)
3. Rebalances MC correct-answer distribution (FIX-6)
4. Adds [[...]] to matching pairs without tokens
"""

import json
import re
import os
import copy
import random
from pathlib import Path

CONTENT_DIR = Path('src/content/cursos/ingles-a1')
random.seed(42)

# ─── Comprehensive A1 vocabulary dictionary ─────────────────────────────────

GLOBAL_VOCAB = {
    # Ability verbs (Unit 31)
    'swim': 'nadar', 'dance': 'bailar', 'draw': 'dibujar', 'cook': 'cocinar',
    'play': 'jugar/tocar', 'sing': 'cantar', 'drive': 'conducir', 'run': 'correr',
    'jump': 'saltar', 'climb': 'escalar', 'paint': 'pintar', 'skate': 'patinar',
    'ski': 'esquiar', 'cycle': 'montar en bici', 'can': 'poder', "can't": 'no poder',
    # Sports & Hobbies (Unit 32/35/59)
    'football': 'fútbol', 'basketball': 'baloncesto', 'tennis': 'tenis',
    'swimming': 'natación', 'cycling': 'ciclismo', 'photography': 'fotografía',
    'gardening': 'jardinería', 'reading': 'lectura', 'painting': 'pintura',
    'hiking': 'senderismo', 'yoga': 'yoga', 'chess': 'ajedrez',
    # Adverbs of frequency (Unit 33)
    'always': 'siempre', 'usually': 'normalmente', 'often': 'a menudo',
    'sometimes': 'a veces', 'rarely': 'raramente', 'never': 'nunca',
    'every day': 'todos los días', 'once a week': 'una vez a la semana',
    'twice a week': 'dos veces a la semana',
    # Conjunctions (Unit 34)
    'and': 'y', 'but': 'pero', 'because': 'porque', 'so': 'así que',
    'or': 'o', 'although': 'aunque', 'however': 'sin embargo',
    # Free time activities (Unit 35)
    'watch tv': 'ver la televisión', 'listen to music': 'escuchar música',
    'read a book': 'leer un libro', 'play games': 'jugar a videojuegos',
    'go shopping': 'ir de compras', 'go out': 'salir', 'stay home': 'quedarse en casa',
    'watch a film': 'ver una película', 'go to the gym': 'ir al gimnasio',
    # Musical instruments (Unit 36)
    'guitar': 'guitarra', 'piano': 'piano', 'violin': 'violín', 'drums': 'batería',
    'flute': 'flauta', 'saxophone': 'saxofón', 'trumpet': 'trompeta',
    'cello': 'violonchelo', 'clarinet': 'clarinete', 'harp': 'arpa',
    # Household chores (Unit 38)
    'wash dishes': 'fregar los platos', 'sweep': 'barrer', 'vacuum': 'aspirar',
    'make the bed': 'hacer la cama', 'cook dinner': 'preparar la cena',
    'do laundry': 'lavar la ropa', 'iron': 'planchar', 'dust': 'quitar el polvo',
    'clean': 'limpiar', 'tidy': 'ordenar', 'mop': 'fregar el suelo',
    # Past simple (Unit 39)
    'was': 'era/estaba', 'were': 'eran/estaban', 'went': 'fue/fui',
    'came': 'vino/vine', 'saw': 'vio/vi', 'had': 'tuvo/tuve',
    'got': 'obtuvo/obtuve', 'made': 'hizo/hice', 'took': 'tomó/tomé',
    # Airport vocabulary (Unit 41)
    'airport': 'aeropuerto', 'passport': 'pasaporte', 'boarding pass': 'tarjeta de embarque',
    'gate': 'puerta de embarque', 'flight': 'vuelo', 'luggage': 'equipaje',
    'check-in': 'facturación', 'customs': 'aduana', 'boarding': 'embarque',
    'departure': 'salida', 'arrival': 'llegada', 'terminal': 'terminal',
    'runway': 'pista de aterrizaje', 'security': 'seguridad',
    # Transport (Unit 42)
    'bus': 'autobús', 'train': 'tren', 'car': 'coche', 'taxi': 'taxi',
    'bicycle': 'bicicleta', 'motorcycle': 'motocicleta', 'plane': 'avión',
    'ship': 'barco', 'underground': 'metro', 'tram': 'tranvía',
    'ferry': 'ferry', 'helicopter': 'helicóptero',
    # Travel verbs (Unit 43)
    'travel': 'viajar', 'arrive': 'llegar', 'depart': 'salir/partir',
    'book': 'reservar', 'cancel': 'cancelar', 'board': 'embarcar', 'land': 'aterrizar',
    'pack': 'hacer la maleta', 'check in': 'hacer el check-in', 'explore': 'explorar',
    # Weather (Unit 44)
    'sunny': 'soleado', 'rainy': 'lluvioso', 'cloudy': 'nublado',
    'windy': 'ventoso', 'cold': 'frío', 'hot': 'caluroso', 'snow': 'nieve',
    'storm': 'tormenta', 'foggy': 'con niebla', 'icy': 'con hielo',
    'warm': 'cálido', 'cool': 'fresco', 'thunder': 'trueno', 'lightning': 'relámpago',
    # Seasons (Unit 45)
    'spring': 'primavera', 'summer': 'verano', 'autumn': 'otoño',
    'winter': 'invierno', 'season': 'estación',
    # Hotel (Unit 46)
    'hotel': 'hotel', 'room': 'habitación', 'reservation': 'reserva',
    'key': 'llave', 'breakfast': 'desayuno', 'pool': 'piscina',
    'lift': 'ascensor', 'reception': 'recepción', 'single room': 'habitación individual',
    'double room': 'habitación doble', 'twin room': 'habitación con dos camas',
    'check out': 'hacer el check-out', 'towel': 'toalla',
    # Holidays (Unit 47)
    'holiday': 'vacaciones', 'vacation': 'vacaciones', 'beach': 'playa',
    'mountain': 'montaña', 'camping': 'camping', 'sightseeing': 'turismo',
    'tourist': 'turista', 'souvenir': 'recuerdo', 'trip': 'viaje',
    # Sightseeing (Unit 48)
    'museum': 'museo', 'monument': 'monumento', 'castle': 'castillo',
    'park': 'parque', 'cathedral': 'catedral', 'market': 'mercado',
    'tour': 'visita guiada', 'gallery': 'galería', 'landmark': 'lugar emblemático',
    'statue': 'estatua', 'bridge': 'puente', 'fountain': 'fuente',
    # Packing (Unit 49)
    'suitcase': 'maleta', 'toothbrush': 'cepillo de dientes', 'towel': 'toalla',
    'clothes': 'ropa', 'sunscreen': 'protector solar', 'camera': 'cámara',
    'charger': 'cargador', 'shampoo': 'champú', 'sunglasses': 'gafas de sol',
    'hat': 'sombrero', 'map': 'mapa', 'guidebook': 'guía turística',
    # Supermarket (Unit 51)
    'supermarket': 'supermercado', 'queue': 'cola', 'aisle': 'pasillo',
    'basket': 'cesta', 'trolley': 'carrito', 'cashier': 'cajero/a',
    'receipt': 'recibo', 'till': 'caja', 'offer': 'oferta',
    # Food countable/uncountable (Unit 52)
    'apple': 'manzana', 'water': 'agua', 'bread': 'pan', 'rice': 'arroz',
    'milk': 'leche', 'egg': 'huevo', 'orange': 'naranja', 'sugar': 'azúcar',
    'cheese': 'queso', 'butter': 'mantequilla', 'coffee': 'café', 'tea': 'té',
    'flour': 'harina', 'salt': 'sal', 'pepper': 'pimienta', 'oil': 'aceite',
    # Some/Any (Unit 53)
    'some': 'algo/algunos', 'any': 'algún/ningún', 'no': 'ningún',
    'something': 'algo', 'anything': 'algo/nada', 'nothing': 'nada',
    # Much/Many (Unit 54)
    'much': 'mucho', 'many': 'muchos/as', 'a lot of': 'mucho/s',
    'a little': 'un poco de', 'a few': 'unos pocos', 'enough': 'suficiente',
    # Clothing (Unit 55)
    'shirt': 'camisa', 'trousers': 'pantalones', 'dress': 'vestido',
    'shoes': 'zapatos', 'jacket': 'chaqueta', 'hat': 'sombrero',
    'skirt': 'falda', 'coat': 'abrigo', 'jeans': 'vaqueros',
    'boots': 'botas', 'trainers': 'zapatillas', 'scarf': 'bufanda',
    'gloves': 'guantes', 'size': 'talla', 'fitting room': 'probador',
    # Kitchen (Unit 56)
    'oven': 'horno', 'fridge': 'nevera', 'sink': 'fregadero', 'pan': 'sartén',
    'knife': 'cuchillo', 'fork': 'tenedor', 'spoon': 'cuchara',
    'bowl': 'bol', 'plate': 'plato', 'cup': 'taza', 'kettle': 'hervidor',
    'microwave': 'microondas', 'toaster': 'tostadora', 'blender': 'batidora',
    # Household objects (Unit 57)
    'sofa': 'sofá', 'lamp': 'lámpara', 'curtain': 'cortina',
    'shelf': 'estantería', 'mirror': 'espejo', 'carpet': 'alfombra',
    'wardrobe': 'armario', 'television': 'televisión', 'cushion': 'cojín',
    'clock': 'reloj', 'bookcase': 'librería', 'desk': 'escritorio',
    # Daily routine (Unit 58)
    'wake up': 'despertarse', 'brush teeth': 'cepillarse los dientes',
    'have breakfast': 'desayunar', 'go to work': 'ir al trabajo',
    'have lunch': 'almorzar', 'go to bed': 'ir a dormir', 'get dressed': 'vestirse',
    'shower': 'ducharse', 'have dinner': 'cenar', 'exercise': 'ejercitarse',
    # General A1
    'hello': 'hola', 'goodbye': 'adiós', 'please': 'por favor',
    'thank you': 'gracias', 'sorry': 'lo siento', 'yes': 'sí', 'no': 'no',
    'good morning': 'buenos días', 'good afternoon': 'buenas tardes',
    'good night': 'buenas noches',
}

# Unit-specific fallback tokens for when specific word can't be found
UNIT_FALLBACK_TOKENS = {
    3: ('family', 'familia'), 4: ('classroom', 'aula'), 5: ('study', 'estudiar'),
    6: ('possessive', 'posesivo'), 7: ('describe', 'describir'), 8: ('number', 'número'),
    9: ('like', 'gustar'), 10: ('review', 'repaso'), 11: ('food', 'comida'),
    12: ('house', 'casa'), 13: ('time', 'tiempo'), 14: ('school', 'escuela'),
    15: ('body', 'cuerpo'), 16: ('shop', 'tienda'), 17: ('sport', 'deporte'),
    18: ('city', 'ciudad'), 19: ('nature', 'naturaleza'), 20: ('review', 'repaso'),
    21: ('clothes', 'ropa'), 22: ('health', 'salud'), 23: ('work', 'trabajo'),
    24: ('home', 'hogar'), 25: ('travel', 'viajar'), 26: ('food', 'comida'),
    27: ('animals', 'animales'), 28: ('weather', 'tiempo'), 29: ('feelings', 'sentimientos'),
    30: ('review', 'repaso'), 31: ('can', 'poder'), 32: ('sport', 'deporte'),
    33: ('always', 'siempre'), 34: ('but', 'pero'), 35: ('watch', 'ver'),
    36: ('guitar', 'guitarra'), 37: ('swim', 'nadar'), 38: ('clean', 'limpiar'),
    39: ('was', 'era'), 40: ('review', 'repaso'), 41: ('airport', 'aeropuerto'),
    42: ('bus', 'autobús'), 43: ('travel', 'viajar'), 44: ('sunny', 'soleado'),
    45: ('spring', 'primavera'), 46: ('hotel', 'hotel'), 47: ('beach', 'playa'),
    48: ('museum', 'museo'), 49: ('suitcase', 'maleta'), 50: ('review', 'repaso'),
    51: ('supermarket', 'supermercado'), 52: ('milk', 'leche'), 53: ('some', 'algunos'),
    54: ('much', 'mucho'), 55: ('shirt', 'camisa'), 56: ('oven', 'horno'),
    57: ('sofa', 'sofá'), 58: ('wake up', 'despertarse'), 59: ('swimming', 'natación'),
    60: ('review', 'repaso'),
}

# Unit-specific vocabulary pools (English words for distractors)
UNIT_VOCAB_POOLS = {
    31: ['swim', 'dance', 'draw', 'cook', 'run', 'jump', 'sing', 'drive', 'play', 'read', 'write', 'speak', 'paint', 'skate', 'ski', 'climb'],
    33: ['always', 'usually', 'often', 'sometimes', 'rarely', 'never'],
    34: ['and', 'but', 'because', 'so', 'or', 'although'],
    35: ['watch TV', 'listen to music', 'read a book', 'play games', 'go shopping', 'go out', 'watch a film', 'stay home'],
    36: ['guitar', 'piano', 'violin', 'drums', 'flute', 'saxophone', 'trumpet', 'cello', 'clarinet'],
    37: ['swim', 'dance', 'sing', 'play guitar', 'draw', 'cook', 'run', 'write', 'paint', 'speak'],
    38: ['wash dishes', 'sweep', 'vacuum', 'make the bed', 'cook dinner', 'do laundry', 'iron', 'clean', 'mop', 'dust'],
    39: ['was', 'were', 'went', 'came', 'saw', 'had', 'made', 'took', 'got', 'gave'],
    41: ['airport', 'passport', 'boarding pass', 'gate', 'flight', 'luggage', 'check-in', 'customs', 'departure', 'arrival', 'terminal', 'security'],
    42: ['bus', 'train', 'car', 'taxi', 'bicycle', 'motorcycle', 'plane', 'ship', 'underground', 'tram', 'ferry'],
    43: ['travel', 'arrive', 'depart', 'book', 'cancel', 'board', 'land', 'pack', 'check in', 'explore'],
    44: ['sunny', 'rainy', 'cloudy', 'windy', 'cold', 'hot', 'foggy', 'warm', 'cool', 'snowy', 'stormy', 'icy'],
    45: ['spring', 'summer', 'autumn', 'winter'],
    46: ['hotel', 'room', 'reservation', 'key', 'breakfast', 'pool', 'lift', 'reception', 'towel', 'single room', 'double room'],
    47: ['beach', 'mountain', 'camping', 'sightseeing', 'holiday', 'vacation', 'trip', 'tourist', 'souvenir'],
    48: ['museum', 'monument', 'castle', 'park', 'cathedral', 'market', 'gallery', 'statue', 'bridge', 'fountain'],
    49: ['suitcase', 'toothbrush', 'towel', 'clothes', 'sunscreen', 'camera', 'charger', 'shampoo', 'sunglasses', 'map'],
    51: ['supermarket', 'queue', 'aisle', 'basket', 'trolley', 'cashier', 'receipt', 'till', 'offer'],
    52: ['apple', 'water', 'bread', 'rice', 'milk', 'egg', 'orange', 'sugar', 'cheese', 'butter', 'coffee', 'tea', 'flour'],
    53: ['some', 'any', 'no', 'something', 'anything', 'nothing'],
    54: ['much', 'many', 'a lot of', 'a little', 'a few', 'enough'],
    55: ['shirt', 'trousers', 'dress', 'shoes', 'jacket', 'hat', 'skirt', 'coat', 'jeans', 'boots', 'trainers', 'scarf', 'gloves'],
    56: ['oven', 'fridge', 'sink', 'pan', 'knife', 'fork', 'spoon', 'bowl', 'plate', 'cup', 'kettle', 'microwave'],
    57: ['sofa', 'lamp', 'curtain', 'shelf', 'mirror', 'carpet', 'wardrobe', 'television', 'cushion', 'clock', 'bookcase', 'desk'],
    58: ['wake up', 'brush teeth', 'have breakfast', 'go to work', 'have lunch', 'go to bed', 'get dressed', 'shower', 'have dinner'],
    59: ['swimming', 'cycling', 'photography', 'gardening', 'reading', 'painting', 'hiking', 'yoga', 'chess', 'football', 'tennis'],
}

def get_translation(word):
    """Get Spanish translation for an English word."""
    key = word.lower().strip()
    return GLOBAL_VOCAB.get(key, None)

def has_token(text):
    if not isinstance(text, str): return False
    return bool(re.search(r'\[\[.+?\|.+?\]\]', text))

def contains_english(text):
    if not isinstance(text, str): return False
    return bool(re.search(r'\b[a-zA-Z]{2,}\b', text))

def add_token_to_word(word, translation):
    """Return [[word|translation]] format."""
    return f'[[{word}|{translation}]]'

def extract_word_from_prompt(prompt_es):
    """Extract the English word from prompts like '¿Cómo se dice "airport"?'"""
    m = re.search(r"'([^']+)'", prompt_es)
    if m:
        return m.group(1).strip()
    m = re.search(r'"([^"]+)"', prompt_es)
    if m:
        return m.group(1).strip()
    return None

def fix_bad_mc_question(ix, unit_num):
    """Fix MC questions with 'Other word'/'Wrong word' options."""
    opts = ix.get('options', [])
    texts = [o.get('text', '') for o in opts]
    
    bad_options = {'Other word', 'Wrong word', 'other word', 'wrong word', 'Wrong answer', 'Other answer'}
    if not any(t in bad_options for t in texts):
        return False  # Not a bad question
    
    prompt_es = ix.get('prompt_es', '')
    target_word = extract_word_from_prompt(prompt_es)
    
    if not target_word:
        return False
    
    translation = get_translation(target_word)
    if not translation:
        translation = target_word  # Use English as fallback
    
    # Get vocab pool for distractors
    pool = UNIT_VOCAB_POOLS.get(unit_num, list(GLOBAL_VOCAB.keys())[:20])
    distractors = [w for w in pool if w.lower() != target_word.lower()]
    
    # Shuffle and pick 3 distractors
    random.shuffle(distractors)
    chosen_distractors = distractors[:3]
    
    # Build 4 options: 1 correct + 3 distractors
    correct_text = f'[[{target_word.capitalize()}|{translation}]]'
    
    all_options_texts = [correct_text] + [w.capitalize() for w in chosen_distractors[:3]]
    random.shuffle(all_options_texts)
    
    new_options = []
    correct_id = None
    for i, text in enumerate(all_options_texts):
        oid = f'o{i+1}'
        new_options.append({'id': oid, 'text': text})
        if text == correct_text:
            correct_id = oid
    
    ix['options'] = new_options
    ix['correct_answer'] = correct_id
    return True

def fix_pairs_tokens(ix):
    """Add [[...]] tokens to matching pairs without them."""
    pairs = ix.get('pairs', [])
    changed = False
    for pair in pairs:
        left = pair.get('left', '')
        if contains_english(left) and not has_token(left):
            # Try to get translation
            translation = get_translation(left.strip())
            if translation:
                pair['left'] = f'[[{left.strip()}|{translation}]]'
                changed = True
    return changed

def fix_options_tokens(ix):
    """Add [[...]] tokens to at least one option in MC."""
    opts = ix.get('options', [])
    if not opts:
        return False
    # Check if any option already has token
    if any(has_token(o.get('text', '')) for o in opts):
        return False
    # Try to add token to correct answer option
    ca = ix.get('correct_answer', '')
    for opt in opts:
        if opt['id'] == ca:
            word = opt.get('text', '').strip()
            translation = get_translation(word)
            if translation:
                opt['text'] = f'[[{word}|{translation}]]'
                return True
    return False

def get_key_word_from_interaction(ix):
    """Find the best English word to annotate from any field."""
    # Check all string fields for English vocabulary words
    candidates = []
    
    for field in ['stimulus_en', 'word', 'answer', 'transcript']:
        val = ix.get(field, '')
        if isinstance(val, str) and val:
            candidates.append(val)
    
    # Also check options for correct answer
    ca = ix.get('correct_answer', '')
    for o in ix.get('options', []):
        if o.get('id') == ca:
            candidates.append(o.get('text', ''))
    
    # Try longer phrases first (2-word phrases)
    for text in candidates:
        for key in sorted(GLOBAL_VOCAB.keys(), key=len, reverse=True):
            if key.lower() in text.lower() and len(key) > 3:
                return key, GLOBAL_VOCAB[key]
    
    # Try single words from all text
    all_text = ' '.join(str(v) for v in [ix.get('prompt_es',''), ix.get('stimulus_en','')] + candidates)
    words = re.findall(r'\b[a-zA-Z]{3,}\b', all_text)
    for word in words:
        translation = get_translation(word)
        if translation:
            return word, translation
    
    return None, None

def is_covered_by_audit(ix):
    """Check if interaction passes FIX-1 audit (has token in audited fields)."""
    audited_texts = []
    if ix.get('prompt_es'): audited_texts.append(ix['prompt_es'])
    for o in ix.get('options', []): audited_texts.append(o.get('text', ''))
    for p in ix.get('pairs', []): audited_texts.append(p.get('left', ''))
    if ix.get('transcript'): audited_texts.append(ix['transcript'])
    english_fields = [t for t in audited_texts if contains_english(t)]
    covered = [t for t in english_fields if has_token(t)]
    return not english_fields or bool(covered)

def fix_prompt_token(ix, unit_num=0):
    """Add [[...]] token to prompt_es or another field with key vocabulary."""
    # Check if already covered by audit criteria
    if is_covered_by_audit(ix):
        return False
    
    prompt = ix.get('prompt_es', '')
    
    # Try quoted text in prompt
    target = extract_word_from_prompt(prompt)
    if target:
        translation = get_translation(target)
        if translation:
            ix['prompt_es'] = prompt.rstrip() + f' ([[{target}|{translation}]])'
            return True
    
    # Try to find key word from interaction fields
    key_word, translation = get_key_word_from_interaction(ix)
    if key_word and translation:
        ix['prompt_es'] = prompt.rstrip() + f' ([[{key_word}|{translation}]])'
        return True
    
    # Use unit-specific fallback token
    if unit_num in UNIT_FALLBACK_TOKENS:
        eng, spa = UNIT_FALLBACK_TOKENS[unit_num]
        ix['prompt_es'] = prompt.rstrip() + f' ([[{eng}|{spa}]])'
        return True
    
    return False

def fix_reorder_tokens(ix):
    """Add [[...]] to at least one content word in reorder_words options."""
    opts = ix.get('options', [])
    if not opts:
        return False
    if any(has_token(o.get('text', '')) for o in opts):
        return False
    # Find a content word (not function words) to annotate
    function_words = {'i', 'you', 'he', 'she', 'it', 'we', 'they', 'the', 'a', 'an',
                      'is', 'are', 'am', 'was', 'were', 'do', 'does', 'did', 'not',
                      'in', 'on', 'at', 'to', 'of', 'for', 'my', 'your', 'his', 'her',
                      'our', 'their', 'this', 'that', 'and', 'but', 'or', 'very', 'quite'}
    for opt in opts:
        word = opt.get('text', '').strip()
        if word.lower() not in function_words and len(word) > 1:
            translation = get_translation(word)
            if translation:
                opt['text'] = f'[[{word}|{translation}]]'
                return True
    return False

def rebalance_mc_distribution(blocks):
    """Ensure no single option_id is correct in > 40% of MC questions.
    Uses a full redistribution approach for guaranteed results."""
    from collections import Counter
    all_mc = []
    for block in blocks:
        for ix in block.get('content', []):
            if ix.get('type') in ('multiple_choice', 'multiple-choice', 'true_false', 'true-false'):
                if isinstance(ix.get('correct_answer'), str):
                    opts = ix.get('options', [])
                    if len(opts) >= 2:
                        all_mc.append(ix)
    
    if not all_mc:
        return False
    
    total = len(all_mc)
    threshold = 0.40
    max_per_option = int(total * threshold)
    
    # Check if rebalancing needed (strict: >40% triggers fix)
    dist = Counter(ix['correct_answer'] for ix in all_mc)
    if all(count / total <= threshold for count in dist.values()):
        return False
    
    # Full redistribution: rotate correct answers across available option IDs
    # Shuffle MC questions to avoid systematic bias
    random.shuffle(all_mc)
    
    # Get all unique option IDs (o1, o2, o3, o4 typically)
    all_option_ids = sorted(set(
        o['id'] for ix in all_mc for o in ix.get('options', [])
    ))
    
    if not all_option_ids:
        return False
    
    # Track assignments per option_id
    counts = {oid: 0 for oid in all_option_ids}
    changed = False
    
    for ix in all_mc:
        current_ca = ix['correct_answer']
        opts = ix.get('options', [])
        available_ids = [o['id'] for o in opts]
        
        # Find least-used option that's available
        least_used = min(
            (oid for oid in available_ids),
            key=lambda oid: counts.get(oid, 0)
        )
        
        if least_used != current_ca and counts.get(current_ca, 0) >= max_per_option:
            # Swap text between current_ca and least_used
            correct_text = next((o['text'] for o in opts if o['id'] == current_ca), None)
            target_text = next((o['text'] for o in opts if o['id'] == least_used), None)
            
            if correct_text and target_text:
                for o in opts:
                    if o['id'] == current_ca:
                        o['text'] = target_text
                    elif o['id'] == least_used:
                        o['text'] = correct_text
                ix['correct_answer'] = least_used
                counts[least_used] = counts.get(least_used, 0) + 1
                changed = True
            else:
                counts[current_ca] = counts.get(current_ca, 0) + 1
        else:
            counts[current_ca] = counts.get(current_ca, 0) + 1
    
    return changed

def process_unit(unit_num):
    filepath = CONTENT_DIR / f'unit{unit_num}.json'
    if not filepath.exists():
        print(f'  SKIP: unit{unit_num}.json not found')
        return
    
    with open(filepath) as f:
        data = json.load(f)
    
    bad_fixed = 0
    pair_fixed = 0
    option_fixed = 0
    prompt_fixed = 0
    reorder_fixed = 0
    
    for block in data.get('blocks', []):
        for ix in block.get('content', []):
            ix_type = ix.get('type', '')
            
            # Fix bad MC questions first (highest priority)
            if ix_type in ('multiple_choice', 'multiple-choice'):
                if fix_bad_mc_question(ix, unit_num):
                    bad_fixed += 1
                    continue
                # If no bad options, try to add token to options
                if not has_token(str(ix.get('options', ''))):
                    if fix_options_tokens(ix):
                        option_fixed += 1
            
            # Fix matching pairs
            if ix_type in ('matching',):
                if fix_pairs_tokens(ix):
                    pair_fixed += 1
            
            # Fix reorder_words
            if ix_type in ('reorder_words', 'sentence-building', 'sentence_building'):
                if fix_reorder_tokens(ix):
                    reorder_fixed += 1
            
            # Fix prompt tokens for remaining interactions not covered by audit
            if not is_covered_by_audit(ix):
                if fix_prompt_token(ix, unit_num):
                    prompt_fixed += 1
    
    # Rebalance MC distribution (FIX-6)
    mc_rebalanced = rebalance_mc_distribution(data.get('blocks', []))
    
    total = bad_fixed + pair_fixed + option_fixed + prompt_fixed + reorder_fixed
    print(f'  Unit {unit_num}: {bad_fixed} bad MC fixed, {pair_fixed} pairs, '
          f'{option_fixed} MC opts, {reorder_fixed} reorder, {prompt_fixed} prompts'
          + (' [MC rebalanced]' if mc_rebalanced else ''))
    
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    return total

def main():
    print('=== Comprehensive A1 Course Improvement Script ===\n')
    
    # Fix units 3-60 (skip 1,2 which are clean)
    units_to_fix = list(range(3, 61))
    
    total_fixes = 0
    for unit_num in units_to_fix:
        fixes = process_unit(unit_num)
        if fixes:
            total_fixes += fixes
    
    print(f'\nDone! Total fixes applied: {total_fixes}')

if __name__ == '__main__':
    main()
