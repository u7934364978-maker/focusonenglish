import json
import re
import os

KEYWORDS_FILE = 'seo-keyword-categorization.json'
OUTPUT_FILE = 'keyword-intent-grouping.md'

INTENT_PATTERNS = {
    'Transactional': [
        r'\bgratis\b', r'\bprecio\b', r'\btasas\b', r'\bcurso\b', r'\bclases\b', 
        r'\bcomprar\b', r'\bregistro\b', r'\boferta\b', r'\bdescargar\b', 
        r'\bpdf\b', r'\bonline\b', r'\bapp\b', r'\baplicacion\b'
    ],
    'Navigational': [
        r'\bbritish council\b', r'\bcambridge\b', r'\baptis\b', r'\btoefl\b', 
        r'\bielts\b', r'\bla mansion del ingles\b', r'\bsabadell\b', 
        r'\bbarcelona\b', r'\bbbc\b', r'\blingualia\b'
    ],
    'Commercial': [
        r'\bmejor\b', r'\bmejores\b', r'\bcomparativa\b', r'\bvs\b', 
        r'\bopiniones\b', r'\branking\b', r'\berramientas\b'
    ],
    'Informational': [
        r'\bcomo\b', r'\bque\b', r'\bcual\b', r'\bdiferencia\b', r'\bguia\b', 
        r'\btrucos\b', r'\bconsejos\b', r'\bejercicios\b', r'\bvocabulario\b', 
        r'\bgramatica\b', r'\bsignificado\b', r'\bpor que\b', r'\bcuando\b',
        r'\bdonde\b', r'\beemplos\b'
    ]
}

def identify_intent(keyword):
    keyword = keyword.lower()
    for intent, patterns in INTENT_PATTERNS.items():
        for pattern in patterns:
            if re.search(pattern, keyword):
                return intent
    return 'Other/Informational'

def group_keywords():
    if not os.path.exists(KEYWORDS_FILE):
        print(f"Error: {KEYWORDS_FILE} not found.")
        return

    with open(KEYWORDS_FILE, 'r', encoding='utf-8') as f:
        data = json.load(f)

    grouped = {
        'Transactional': [],
        'Navigational': [],
        'Commercial': [],
        'Informational': [],
        'Other/Informational': []
    }

    total_keywords = 0
    for category, keywords in data.items():
        for kw in keywords:
            intent = identify_intent(kw)
            grouped[intent].append({
                'keyword': kw,
                'category': category
            })
            total_keywords += 1

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        f.write("# Agrupación de Keywords por Intención de Búsqueda\n\n")
        f.write(f"Total de keywords analizadas: {total_keywords}\n\n")

        for intent in ['Transactional', 'Navigational', 'Commercial', 'Informational', 'Other/Informational']:
            f.write(f"## {intent} ({len(grouped[intent])})\n")
            # Show a representative sample or top items if too many
            # For this study, I will list them all but categorized
            current_category = ""
            for item in sorted(grouped[intent], key=lambda x: x['category']):
                if item['category'] != current_category:
                    current_category = item['category']
                    f.write(f"\n### Categoría: {current_category.capitalize()}\n")
                f.write(f"- {item['keyword']}\n")
            f.write("\n")

    print(f"Agrupación generada en {OUTPUT_FILE}")

if __name__ == "__main__":
    group_keywords()
