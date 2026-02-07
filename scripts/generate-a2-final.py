import json
import os
import random
from collections import deque

target_dir = "src/content/cursos/ingles-a2"
os.makedirs(target_dir, exist_ok=True)

try:
    with open('scripts/extracted_items.json', 'r') as f:
        EXTRACTED_ITEMS = json.load(f)
except:
    EXTRACTED_ITEMS = []

CLEANED_ITEMS = []
for item in EXTRACTED_ITEMS:
    es = item.get("es", "")
    en = item.get("en", "")
    if len(es) > 10 and len(en) > 10:
        CLEANED_ITEMS.append((es, en))

VOCAB = {
    "subjects": ["I", "You", "He", "She", "We", "They", "My friend", "The teacher", "John", "Maria", "My brother", "Sarah", "The doctor", "Our neighbors", "The boss", "My sister", "The manager", "A colleague", "The student", "The artist", "The chef", "The pilot", "My cousin", "The police officer", "The scientist", "The driver", "The waiter", "The actress", "The singer", "The player", "The coach", "The nurse", "The lawyer", "The architect", "The baker"],
    "verbs_present": ["eat", "work", "study", "play", "drink", "write", "read", "speak", "cook", "clean", "listen", "watch", "drive", "walk", "buy", "sell", "send", "receive", "create", "design", "build", "fix", "learn", "teach", "travel", "visit", "call", "meet", "help", "organize", "plan", "prepare", "check", "finish", "start", "stop"],
    "verbs_past": ["ate", "worked", "studied", "played", "drank", "wrote", "read", "spoke", "cooked", "cleaned", "listened", "watched", "drove", "walked", "bought", "sold", "sent", "received", "created", "designed", "built", "fixed", "learned", "taught", "traveled", "visited", "called", "met", "helped", "organized", "planned", "prepared", "checked", "finished", "started", "stopped"],
    "verbs_pp": ["eaten", "worked", "studied", "played", "drunk", "written", "read", "spoken", "cooked", "cleaned", "listened", "watched", "driven", "walked", "bought", "sold", "sent", "received", "created", "designed", "built", "fixed", "learned", "taught", "traveled", "visited", "called", "met", "helped", "organized", "planned", "prepared", "checked", "finished", "started", "stopped"],
    "places": ["London", "Paris", "the office", "the supermarket", "the gym", "school", "the cinema", "the park", "the hospital", "the beach", "the library", "the airport", "the station", "the restaurant", "the bank", "the museum", "the garden", "the hotel", "the shop", "the stadium", "the university", "the street", "the country", "the city", "the mountains", "the woods", "the kitchen", "the bedroom", "the balcony", "the garage"],
    "objects": ["an apple", "a book", "coffee", "English", "football", "a letter", "a pizza", "a car", "a sandwich", "a movie", "music", "tennis", "a newspaper", "a report", "an email", "a gift", "a phone", "a laptop", "a bike", "a ticket", "a dog", "a cat", "a house", "a table", "a chair", "a pen", "a bag", "a watch", "a clock", "a camera", "a radio", "a television", "a computer", "a printer", "a window", "a door"],
    "adjectives_ed": ["bored", "excited", "surprised", "interested", "confused", "tired", "amused", "satisfied", "disappointed", "frightened", "annoyed", "worried", "exhausted", "amazed", "relaxed", "depressed", "shocked", "pleased", "exhausted", "thrilled", "inspired", "overwhelmed", "embarrassed", "puzzled"],
    "adjectives_ing": ["boring", "exciting", "surprising", "interesting", "confusing", "tiring", "amusing", "satisfying", "disappointing", "frightening", "annoying", "worrying", "exhausting", "amazing", "relaxing", "depressing", "shocked", "pleasing", "exhausting", "thrilling", "inspiring", "overwhelming", "embarrassing", "puzzling"],
    "frequency": ["always", "usually", "often", "sometimes", "never", "hardly ever", "rarely", "frequently", "seldom", "occasionally", "normally", "constantly", "regularly", "periodically"],
    "connectors": ["whereas", "while", "since", "as a consequence", "fortunately", "unfortunately", "nonetheless", "however", "therefore", "moreover", "besides", "despite", "although", "otherwise", "meanwhile", "furthermore", "consequently", "nevertheless"]
}

THEMATIC_TOPICS = [
    "Travel: Booking a Hotel", "Travel: At the Airport", "Travel: Directions",
    "Work: Job Interviews", "Work: Daily Routine", "Work: Office Equipment",
    "Health: At the Doctor", "Health: Healthy Living", "Food: At a Restaurant",
    "Food: Shopping", "Food: Recipes", "Shopping: Clothes", "Shopping: Prices",
    "Social: Making Plans", "Social: Hobbies", "Social: Describing People",
    "Education: Languages", "Education: University Life", "Environment: Weather",
    "Environment: Nature", "Technology: Computers", "Technology: Social Media",
    "Entertainment: Movies", "Entertainment: Music", "Entertainment: Books",
    "Home: House Tour", "Home: Chores", "Past: My Childhood", "Past: Famous People",
    "Future: Plans", "Future: Predictions", "Transport: Driving", "Transport: Trains",
    "Culture: Holidays", "Culture: Traditions", "Sports: Olympic Games",
    "Sports: Team Sports", "Animals: Wild Animals", "Animals: Pets",
    "Services: Bank", "Services: Post Office", "Phone: Making Calls",
    "Descriptions: Appearance", "Descriptions: Personality", "Daily Life: Weekends",
    "Daily Life: Morning Routine", "Relationships: Family", "Relationships: Friends",
    "Travel: Public Transport", "Work: Salaries", "Food: Fast Food",
    "Social: Parties", "Education: History", "Environment: Pollution",
    "Technology: Gadgets", "Entertainment: Theater", "Home: Furniture",
    "Past: Ancient History", "Future: Space Travel", "Transport: Cycling"
]

GRAMMAR_FOCUS = [
    "Adjectives: Position", "Adjectives -ed vs -ing", "Adjectives vs Adverbs",
    "Adverbs of Frequency", "Connectors", "Comparatives", "Superlatives",
    "Superlatives with 'in'", "Superlatives + Present Perfect", "Enough",
    "Common Mistakes", "Can/Can't", "May/Might", "Whose / Possessives",
    "Present Perfect basics", "Present Perfect with Yet/Already",
    "Past Simple vs Present Perfect", "Genitive Saxon", "Countable/Uncountable",
    "Articles A/An/The"
] * 3

class ExerciseGenerator:
    def __init__(self):
        self.items_pool = list(CLEANED_ITEMS)
        random.shuffle(self.items_pool)
        self.items_deque = deque(self.items_pool)
        self.used_globally = set()
        self.counters = {
            "multiple_choice": 1, "reorder_words": 1, "fill_blanks": 1, 
            "true_false": 1, "matching": 1, "dictation_guided": 1, 
            "odd_one_out": 1, "flashcards": 1, "writing_task": 1, 
            "speaking_task": 1, "multiple_matching": 1, "categorization": 1, 
            "multiple_choice_cloze": 1
        }

    def get_unique_item(self):
        if not self.items_deque:
            self.items_deque = deque(CLEANED_ITEMS)
            random.shuffle(self.items_deque)
        return self.items_deque.popleft()

    def generate_unit(self, unit_index):
        unit_id = f"unit{unit_index + 1}"
        theme = THEMATIC_TOPICS[unit_index % len(THEMATIC_TOPICS)]
        grammar = GRAMMAR_FOCUS[unit_index % len(GRAMMAR_FOCUS)]
        exercises = []
        exercises.append({"type": "audio_player", "prompt_es": f"Introducción a la unidad {unit_index+1}", "tts_en": f"Starting unit {unit_index+1}. Topic: {theme}. Focus: {grammar}.", "mastery_tag": "listening", "interaction_id": f"U{unit_index+1}_I1"})
        for i in range(2, 101):
            ex = self.create_exercise(self.select_type(i), unit_index, f"U{unit_index+1}_I{i}", grammar, theme)
            exercises.append(ex)
        return {"course": {"unit_id": unit_id, "unit_title": f"{grammar} - {theme}", "level": "A2", "total_duration_minutes": 60, "language_ui": "es-ES", "target_language": "en"}, "blocks": [{"block_id": f"U{unit_index+1}_B1", "title": "Unit Practice", "duration_minutes": 60, "content": exercises}]}

    def select_type(self, index):
        types = ["multiple_choice", "reorder_words", "fill_blanks", "true_false", "matching", "dictation_guided", "odd_one_out", "flashcards", "writing_task", "speaking_task", "multiple_matching", "categorization", "multiple_choice_cloze"]
        return types[index % len(types)]

    def create_exercise(self, ex_type, unit_idx, int_id, grammar, theme):
        for _ in range(100):
            if ex_type == "multiple_choice": ex = self.gen_mc(int_id, grammar, theme)
            elif ex_type == "reorder_words": ex = self.gen_reorder(int_id, grammar, theme)
            elif ex_type == "fill_blanks": ex = self.gen_fill(int_id, grammar, theme)
            elif ex_type == "true_false": ex = self.gen_tf(int_id, grammar, theme)
            elif ex_type == "matching": ex = self.gen_matching(int_id, grammar, theme)
            elif ex_type == "dictation_guided": ex = self.gen_dictation(int_id, grammar, theme)
            elif ex_type == "odd_one_out": ex = self.gen_odd(int_id)
            elif ex_type == "flashcards": ex = self.gen_flash(int_id, theme)
            elif ex_type == "writing_task": ex = self.gen_writing(int_id, theme, grammar)
            elif ex_type == "speaking_task": ex = self.gen_speaking(int_id, theme, grammar)
            elif ex_type == "multiple_matching": ex = self.gen_mm(int_id, theme)
            elif ex_type == "categorization": ex = self.gen_cat(int_id, theme)
            elif ex_type == "multiple_choice_cloze": ex = self.gen_mc_cloze(int_id, grammar, theme)
            else: ex = self.gen_mc(int_id, grammar, theme)
            
            # Stricter uniqueness fingerprint including prompts and nested structures
            f = f"{ex.get('type')}|{ex.get('prompt_es')}|{str(ex.get('stimulus_en'))}|{str(ex.get('stimulus_es'))}|{str(ex.get('main_text'))}|{str(ex.get('instruction_en'))}|{str(ex.get('tts_en'))}|{str(ex.get('correct_answer'))}|{str(ex.get('pairs'))}|{str(ex.get('items'))}|{str(ex.get('categories'))}|{str(ex.get('cards'))}|{str(ex.get('gaps'))}"
            if f not in self.used_globally:
                self.used_globally.add(f)
                return ex
        return ex

    def get_sentence(self, grammar, theme):
        s = random.choice(VOCAB["subjects"]); vp = random.choice(VOCAB["verbs_present"]); va = random.choice(VOCAB["verbs_past"]); vpp = random.choice(VOCAB["verbs_pp"]); pl = random.choice(VOCAB["places"]); obj = random.choice(VOCAB["objects"]); obj2 = random.choice([o for o in VOCAB["objects"] if o != obj]); adj_ed = random.choice(VOCAB["adjectives_ed"]); adj_ing = random.choice(VOCAB["adjectives_ing"]); f = random.choice(VOCAB["frequency"]); c = random.choice(VOCAB["connectors"])
        v = random.choice([" - " + str(random.randint(100, 999)), " (today)", " (now)", "!", ".", "...", " - interesting", " - amazing"])
        if "Position" in grammar: adj = random.choice(["beautiful", "expensive", "modern", "wonderful", "small", "large", "new", "old", "nice"])
        elif "ed vs -ing" in grammar: return f"The {theme} was {adj_ing}, so {s} was {adj_ed}{v}.", f"La {theme} fue {adj_ing}, así que {s} estuvo {adj_ed}{v}.", adj_ed, adj_ing
        elif "Frequency" in grammar: return f"{s} {f} {vp} {obj} at {pl}{v}.", f"{s} {f} {vp} {obj} en {pl}{v}.", f, "never"
        elif "Comparatives" in grammar: return f"A {obj} is more useful than a {obj2}{v}.", f"Un {obj} es más útil que un {obj2}{v}.", "more useful", "useful"
        elif "Superlatives" in grammar: return f"This {obj} is the most expensive in {pl}{v}.", f"Este {obj} es el más caro en {pl}{v}.", "the most expensive", "expensive"
        elif "Connectors" in grammar: return f"{s} likes {obj}, {c} {s} prefers {obj2}{v}.", f"A {s} le gusta {obj}, {c} {s} prefiere {obj2}{v}.", c, "but"
        elif "Present Perfect" in grammar: return f"{s} has already {vpp} {obj} in {pl}{v}.", f"{s} ya ha {vpp} {obj} en {pl}{v}.", "already", "yet"
        es, en = self.get_unique_item()
        return en + v, es + v, "Option A", "Option B"

    def gen_mc(self, int_id, grammar, theme):
        en, es, corr, dist = self.get_sentence(grammar, theme)
        opts = [{"id": "o1", "text": corr}, {"id": "o2", "text": dist}, {"id": "o3", "text": f"Other {random.randint(1,9999)}"}]
        random.shuffle(opts)
        ex = {"type": "multiple_choice", "prompt_es": f"Elige {self.counters['multiple_choice']} para {theme}:", "stimulus_en": en, "stimulus_es": es, "options": opts, "correct_answer": next(o["id"] for o in opts if o["text"] == corr), "mastery_tag": "grammar", "interaction_id": int_id}
        self.counters['multiple_choice'] += 1
        return ex

    def gen_reorder(self, int_id, grammar, theme):
        en, es, _, _ = self.get_sentence(grammar, theme)
        words = en.replace(".", "").replace("!", "").replace(",", "").replace("-", "").split()
        opts = [{"id": f"w{j}", "text": w} for j, w in enumerate(words)]
        sh = list(opts); random.shuffle(sh)
        ex = {"type": "reorder_words", "prompt_es": f"Ordena {self.counters['reorder_words']} sobre {theme}:", "options": sh, "correct_answer": [o["id"] for o in opts], "mastery_tag": "syntax", "interaction_id": int_id}
        self.counters['reorder_words'] += 1
        return ex

    def gen_fill(self, int_id, grammar, theme):
        en, es, corr, _ = self.get_sentence(grammar, theme)
        ex = {"type": "fill_blanks", "prompt_es": f"Completa {self.counters['fill_blanks']} ({theme}):", "stimulus_en": en.replace(corr, "___") if corr in en else en + " (___)", "correct_answer": corr, "mastery_tag": "grammar", "interaction_id": int_id}
        self.counters['fill_blanks'] += 1
        return ex

    def gen_tf(self, int_id, grammar, theme):
        en, es, corr, dist = self.get_sentence(grammar, theme)
        is_ok = random.choice([True, False]); d = en if is_ok else en.replace(corr, dist)
        ex = {"type": "true_false", "prompt_es": f"¿Correcto? {self.counters['true_false']} ({theme})", "stimulus_en": d, "stimulus_es": f"Ref: {es}", "correct_answer": is_ok, "mastery_tag": "grammar", "interaction_id": int_id}
        self.counters['true_false'] += 1
        return ex

    def gen_matching(self, int_id, grammar, theme):
        p = []
        for j in range(4):
            en, es, _, _ = self.get_sentence(grammar, theme); p.append({"id": f"p{j}", "left": es, "right": en})
        ex = {"type": "matching", "prompt_es": f"Relaciona {self.counters['matching']} ({theme}):", "pairs": p, "mastery_tag": "vocabulary", "interaction_id": int_id}
        self.counters['matching'] += 1
        return ex

    def gen_dictation(self, int_id, grammar, theme):
        en, es, _, _ = self.get_sentence(grammar, theme)
        ex = {"type": "dictation_guided", "prompt_es": f"Dictado {self.counters['dictation_guided']} ({theme}):", "tts_en": en, "correct_answer": en, "mastery_tag": "listening", "interaction_id": int_id}
        self.counters['dictation_guided'] += 1
        return ex

    def gen_odd(self, int_id):
        c = [["apple", "banana", "pear", "mango", "bike"], ["blue", "red", "green", "pink", "run"], ["car", "bus", "train", "plane", "cat"], ["pizza", "burger", "salad", "soup", "rain"], ["Monday", "Tuesday", "Sunday", "Friday", "June"], ["London", "Tokyo", "Berlin", "Paris", "Slow"], ["Guitar", "Piano", "Flute", "Drums", "Book"], ["Table", "Chair", "Sofa", "Bed", "Pen"], ["Sun", "Moon", "Star", "Planet", "Hot"], ["Happy", "Sad", "Angry", "Calm", "Fast"]]
        ch = random.choice(c); w = ch[:4]; o = ch[4] + str(random.randint(1,9999)); pl = w + [o]; opts = [{"id": f"o{j}", "text": x} for j, x in enumerate(pl)]; random.shuffle(opts)
        ex = {"type": "odd_one_out", "prompt_es": f"Intruso {self.counters['odd_one_out']}:", "options": opts, "correct_answer": next(x["id"] for x in opts if x["text"] == o), "mastery_tag": "vocabulary", "interaction_id": int_id}
        self.counters['odd_one_out'] += 1
        return ex

    def gen_flash(self, int_id, theme):
        en, es, _, _ = self.get_sentence("Review", theme)
        ex = {"type": "flashcards", "prompt_es": f"Flashcard {self.counters['flashcards']} - {theme}:", "cards": [{"id": "c1", "front": es, "back": en}], "mastery_tag": "vocabulary", "interaction_id": int_id}
        self.counters['flashcards'] += 1
        return ex

    def gen_writing(self, int_id, theme, grammar):
        t = [f"Write a note about {theme}.", f"Describe {theme} in 5 words.", f"Why is {theme} important?", f"Your daily routine in {theme}.", f"A small story about {theme}.", f"Explain {grammar} using {theme}.", f"Draft an email regarding {theme}.", f"Compare {theme} with another topic.", f"Review {theme} from last week.", f"List 3 facts about {theme}."]
        ex = {"type": "writing_task", "prompt_es": f"Escribe {self.counters['writing_task']} ({theme}):", "instruction_en": random.choice(t) + f" [Ref: {random.randint(10,99)}]", "mastery_tag": "writing", "interaction_id": int_id}
        self.counters['writing_task'] += 1
        return ex

    def gen_speaking(self, int_id, theme, grammar):
        s = [f"I like {theme}.", f"The {grammar} is here.", f"Look at {theme}.", f"Talk about {theme}.", f"Repeat {theme}.", f"Study {theme} now.", f"Improve {theme}.", f"Focus on {theme}.", f"This is {theme}.", f"Where is {theme}?"]
        ex = {"type": "speaking_task", "prompt_es": f"Habla {self.counters['speaking_task']} ({theme}):", "stimulus_en": random.choice(s) + f" ({random.randint(100,999)})", "mastery_tag": "speaking", "interaction_id": int_id}
        self.counters['speaking_task'] += 1
        return ex

    def gen_mm(self, int_id, theme):
        i = []; m = []
        for j in range(3):
            en, es, _, _ = self.get_sentence("Match", theme); i.append({"id": f"i{j}", "text": es, "match_id": f"m{j}"}); m.append({"id": f"m{j}", "text": en})
        random.shuffle(m)
        ex = {"type": "multiple_matching", "prompt_es": f"Une {self.counters['multiple_matching']} ({theme}):", "stimulus": f"Matching set {random.randint(1,9999)}", "items": i, "matches": m, "correct_answer": {it["id"]: it["match_id"] for it in i}, "mastery_tag": "reading", "interaction_id": int_id}
        self.counters['multiple_matching'] += 1
        return ex

    def gen_cat(self, int_id, theme):
        en1, _, _, _ = self.get_sentence("C", theme); en2, _, _, _ = self.get_sentence("C", theme)
        ex = {"type": "categorization", "prompt_es": f"Clasifica {self.counters['categorization']} ({theme}):", "categories": [{"id": "c1", "title": "Group 1", "items": [{"id": "t1", "text": en1}]}, {"id": "c2", "title": "Group 2", "items": [{"id": "t2", "text": en2}]}], "mastery_tag": "vocabulary", "interaction_id": int_id}
        self.counters['categorization'] += 1
        return ex

    def gen_mc_cloze(self, int_id, grammar, theme):
        s = random.choice(VOCAB["subjects"]); v1 = random.choice(VOCAB["verbs_present"]); v2 = random.choice(VOCAB["verbs_present"]); v1_p = VOCAB["verbs_past"][VOCAB["verbs_present"].index(v1)]; v2_p = VOCAB["verbs_past"][VOCAB["verbs_present"].index(v2)]
        t = f"In {theme} ({random.randint(1,9999)}), {s} [GAP 1] and [GAP 2]."
        ex = {"type": "multiple_choice_cloze", "prompt_es": f"Rellena {self.counters['multiple_choice_cloze']} ({theme}):", "main_text": t, "gaps": [{"id": "1", "options": [{"id": "o1", "text": v1_p}, {"id": "o2", "text": v1}]}, {"id": "2", "options": [{"id": "o1", "text": v2_p}, {"id": "o2", "text": v2}]}], "correct_answer": {"1": "o1", "2": "o1"}, "mastery_tag": "reading", "interaction_id": int_id}
        self.counters['multiple_choice_cloze'] += 1
        return ex

def main():
    gen = ExerciseGenerator()
    for i in range(60):
        u = gen.generate_unit(i)
        with open(os.path.join(target_dir, f"unit{i+1}.json"), 'w') as f: json.dump(u, f, indent=2)
    print(f"Generated 60 units in {target_dir}")

if __name__ == "__main__": main()
