from PIL import Image, ImageDraw
import os

def create_placeholder(text, output_path, color=(70, 130, 180)):
    # Create a 1280x720 image
    img = Image.new('RGB', (1280, 720), color=color)
    d = ImageDraw.Draw(img)
    
    # Simple text drawing
    d.text((100, 300), text, fill=(255, 255, 255))
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path)
    print(f"Created: {output_path}")

base_path = "public/assets/courses/travel-a1/images/"

placeholders = [
    ("Airport Discovery - Interactive Map", "airport_discovery.png", (46, 204, 113)),
    ("The Alphabet - Theory & Vowels", "alphabet_theory.png", (52, 152, 219)),
    ("Greetings Clock - Time Based Salutations", "greetings_clock.png", (241, 196, 15)),
    ("Information Desk - Close up", "info_desk_zoom.png", (155, 89, 182)),
    ("Introduction: I am [Name]", "introduction_lesson.png", (231, 76, 60)),
    ("Cafe Counter - Menu & Ordering", "cafe_counter.png", (230, 126, 34)),
    ("Courtesy Lesson - Please & Thank You", "courtesy_lesson.png", (149, 165, 166))
]

for text, filename, color in placeholders:
    create_placeholder(text, os.path.join(base_path, filename), color)
