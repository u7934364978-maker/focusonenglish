import json
import os

KEYWORDS_FILE = '/var/folders/kw/z3z8k8194jj3pkb1rrq91ptc0000gn/T/zencoder/pasted/files/20260204105138-ca0dz6.txt'
OUTPUT_FILE = 'seo-keyword-categorization.json'

CATEGORIES = {
    "trabajo": [
        "trabajo", "entrevista", "linkedin", "reunion", "email", "negociacion", 
        "profesional", "cv", "curriculum", "negocios", "business", "empresa",
        "oficina", "presentacion", "networking", "corporativo", "reunion", 
        "asistente", "secretaria", "comercial", "ventas", "marketing", "finanzas"
    ],
    "viajes": [
        "viaje", "viajar", "aeropuerto", "hotel", "transporte", "frases", 
        "emergencia", "restaurante", "comida", "turista", "vacaciones",
        "aduana", "maleta", "avion", "reserva", "turismo", "vuelo", "pasaporte",
        "hostal", "alojamiento", "museo", "monumento", "ciudad", "mapa", "direccion"
    ],
    "examenes": [
        "examen", "cambridge", "toefl", "ielts", "b1", "b2", "c1", "c2",
        "certificacion", "titulo", "first", "advanced", "aptis", "toeic",
        "selectividad", "ebau", "evau", "del", "pet", "ket", "starters", "movers", "flyers"
    ],
    "metodos": [
        "gratis", "online", "curso", "aprender", "ejercicios", "juegos", 
        "practicar", "basico", "desde cero", "principiantes", "rapido",
        "facil", "vocabulario", "gramatica", "hablar", "escuchar", "pronunciacion",
        "metodo", "app", "aplicacion", "web", "pagina", "sitio", "recurso", "material",
        "video", "audio", "podcast", "leccion", "clase", "enseñar", "estudiar"
    ]
}

def categorize():
    if not os.path.exists(KEYWORDS_FILE):
        print(f"Error: {KEYWORDS_FILE} not found.")
        return

    results = {cat: [] for cat in CATEGORIES}
    results["uncategorized"] = []

    with open(KEYWORDS_FILE, 'r', encoding='utf-8') as f:
        # Skip header
        next(f)
        for line in f:
            keyword = line.strip().lower()
            if not keyword:
                continue
            
            found = False
            for cat, triggers in CATEGORIES.items():
                if any(trigger in keyword for trigger in triggers):
                    results[cat].append(keyword)
                    found = True
                    break
            
            if not found:
                results["uncategorized"].append(keyword)

    # Print summary
    print("SEO Keyword Categorization Summary:")
    for cat, items in results.items():
        print(f"- {cat}: {len(items)} keywords")

    with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print(f"\nResults saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    categorize()
