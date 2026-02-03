# Database of 100 thematic units for A1 Fun Course
import random

THEMES_DATA = [
    ("Survival", ["Zombie Apocalypse", "Desert Island", "Lost in the City", "Ordering Pizza", "Space Survival", "Jungle Camp", "Arctic Freeze", "Desert Trek", "Volcano Escape", "Deep Sea Mission"]),
    ("Pop Culture", ["Superhero Training", "Viral Videos", "Video Games", "TikTok Trends", "Movie Magic", "Robot Friends", "Social Media Star", "Cyberpunk Future", "Anime World", "Rock Star"]),
    ("Mysteries", ["Haunted House", "Loch Ness Monster", "Secret Codes", "Magic School", "Treasure Map", "Aliens", "Invisible Man", "Time Travel", "Egyptian Tomb", "Detective Case"]),
    ("Life & Humour", ["School Excuses", "Talking Pets", "Gym Fails", "Coffee Time", "Bad Hair Day", "Birthday Disaster", "Laundry Chaos", "Awkward Dates", "Cooking Nightmare", "Lazy Sunday"]),
    ("Adventure", ["Safari", "Cave Quest", "Mars Colony", "Pirate Ship", "Sky Diving", "Mount Everest", "Amazon River", "Grand Canyon", "Lost Temple", "Time Machine"]),
    ("Future", ["Flying Cars", "Robot Butlers", "Moon Vacation", "Mind Reading", "Eternal Life", "Cyber Pets", "Hologram Mall", "Teleportation", "Zero Gravity", "Smart Cities"]),
    ("Nature", ["Talking Trees", "Bird Language", "Ocean Secrets", "Rainforest Rhythms", "Mountain Echoes", "Ice Kingdom", "Flower Power", "Animal Spies", "Giant Insects", "Hidden Caves"]),
    ("Daily Fun", ["Extreme Shopping", "Pizza Party", "Toy Factory", "Candyland", "Funny Zoo", "Balloon Trip", "Magic Circus", "Ice Cream World", "Dance Battle", "Sleepover"]),
    ("Work & Play", ["Doctor for a Day", "Pilot Training", "Chef Challenge", "Astronaut School", "Artist Studio", "Music Festival", "Soccer Finals", "Olympic Games", "Tech Guru", "Fashion Show"]),
    ("Abstract & Fun", ["Color Explosion", "Number Quest", "Alphabet Adventure", "Opposite Land", "Shape Shifters", "Time Warp", "Feeling Fun", "Body Rock", "Family Tales", "Grand Finale"])
]

def get_unit_theme(unit_id):
    block_idx = (unit_id - 1) // 10
    block_name, themes = THEMES_DATA[min(block_idx, 9)]
    theme = themes[(unit_id - 1) % len(themes)]
    return block_name, theme

# Expand to 60 units
THEMATIC_UNITS = {}
for i in range(1, 61):
    block, theme = get_unit_theme(i)
    THEMATIC_UNITS[i] = {
        "title": theme,
        "block": block,
        "vocab": [f"word_{i}_{j}" for j in range(6)], # Will be replaced by LLM logic or richer static data
        "grammar": "A1 Core"
    }

BASIC_VOCAB = {
    "animals": [("dog", "perro"), ("cat", "gato"), ("lion", "león"), ("elephant", "elefante"), ("monkey", "mono"), ("shark", "tiburón"), ("dragon", "dragón")],
    "food": [("pizza", "pizza"), ("burger", "hamburguesa"), ("apple", "manzana"), ("ice cream", "helado"), ("chocolate", "chocolate"), ("banana", "plátano")],
    "actions": [("run", "correr"), ("fly", "volar"), ("dance", "bailar"), ("sing", "cantar"), ("jump", "saltar"), ("fight", "luchar")],
    "emojis": {
        "I love pizza": "🍕❤️",
        "The dog is big": "🐕🐘",
        "It is raining": "🌧️☂️",
        "I am happy": "😊✨",
        "Time for school": "⏰🎒",
        "Cat in the house": "🐈🏠",
        "Alien on Mars": "👽🚀",
        "Super hero power": "🦸✨",
        "Zombie attack": "🧟🔥"
    }
}
