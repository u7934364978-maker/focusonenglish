from PIL import Image, ImageDraw, ImageFont, ImageOps, ImageFilter
import os
import textwrap
import json
import glob

# Configuration
WIDTH = 1920
HEIGHT = 1080
BG_COLOR = (249, 250, 251)  # Ultra-light gray (Slate 50)
PRIMARY_COLOR = (30, 64, 175)  # Professional Indigo/Blue
ACCENT_COLOR = (59, 130, 246)  # Bright Blue for highlights
TEXT_COLOR = (15, 23, 42)  # Slate 900
SECONDARY_TEXT = (71, 85, 105) # Slate 600

# Paths
FONT_BOLD = "scripts/Roboto-Bold.ttf"
FONT_REGULAR = "scripts/Roboto-Bold.ttf" # Placeholder for regular

def draw_rounded_rectangle(draw, coords, radius, fill, outline=None, width=1):
    x1, y1, x2, y2 = coords
    draw.pieslice([x1, y1, x1 + radius * 2, y1 + radius * 2], 180, 270, fill=fill, outline=outline, width=width)
    draw.pieslice([x2 - radius * 2, y1, x2, y1 + radius * 2], 270, 360, fill=fill, outline=outline, width=width)
    draw.pieslice([x1, y2 - radius * 2, x1 + radius * 2, y2], 90, 180, fill=fill, outline=outline, width=width)
    draw.pieslice([x2 - radius * 2, y2 - radius * 2, x2, y2], 0, 90, fill=fill, outline=outline, width=width)
    draw.rectangle([x1 + radius, y1, x2 - radius, y2], fill=fill, outline=outline, width=width)
    draw.rectangle([x1, y1 + radius, x2, y2 - radius], fill=fill, outline=outline, width=width)

def generate_educational_slide(title, content, output_path):
    # Create base image
    img = Image.new('RGB', (WIDTH, HEIGHT), color=BG_COLOR)
    draw = ImageDraw.Draw(img)
    
    # Decorative elements: Left bar
    draw.rectangle([0, 0, 40, HEIGHT], fill=PRIMARY_COLOR)
    
    # Load fonts
    try:
        title_font = ImageFont.truetype(FONT_BOLD, 90)
        content_font = ImageFont.truetype(FONT_BOLD, 55)
        tag_font = ImageFont.truetype(FONT_BOLD, 30)
    except:
        title_font = ImageFont.load_default()
        content_font = ImageFont.load_default()
        tag_font = ImageFont.load_default()

    # Title Section
    margin_x = 120
    draw.text((margin_x, 100), title, font=title_font, fill=PRIMARY_COLOR)
    
    # Highlight bar under title
    draw.rectangle([margin_x, 210, margin_x + 300, 220], fill=ACCENT_COLOR)
    
    # Content Card (Full Width centered)
    card_margin = 100
    card_x1 = margin_x
    card_y1 = 280
    card_x2 = WIDTH - 100
    card_y2 = HEIGHT - 150
    
    # Shadow for card
    draw_rounded_rectangle(draw, [card_x1 + 10, card_y1 + 10, card_x2 + 10, card_y2 + 10], 30, fill=(226, 232, 240))
    # Main Card
    draw_rounded_rectangle(draw, [card_x1, card_y1, card_x2, card_y2], 30, fill=(255, 255, 255))
    
    # Content Text
    content_y = card_y1 + 60
    wrapped_lines = []
    for paragraph in content.split('\n'):
        if paragraph.strip():
            # Use wider wrap for full screen
            lines = textwrap.wrap(paragraph, width=65)
            wrapped_lines.extend(lines)
            wrapped_lines.append("") # space
            
    for line in wrapped_lines:
        if content_y + 70 > card_y2 - 40:
            break
        
        # Check for bullets
        is_bullet = line.strip().startswith("-") or line.strip().startswith("*") or (len(line) > 2 and line[1] == ".")
        fill_color = TEXT_COLOR if not is_bullet else PRIMARY_COLOR
        current_x = margin_x + 60 + (40 if is_bullet else 0)
        
        draw.text((current_x, content_y), line, font=content_font, fill=fill_color)
        content_y += 75

    # Branding & Footer
    draw.text((WIDTH - 400, HEIGHT - 80), "ADMINISTRACIÓN A1 • SEMANA 1", font=tag_font, fill=SECONDARY_TEXT)
    draw.text((margin_x, HEIGHT - 80), "FOCUS ENGLISH LEARNING SYSTEM", font=tag_font, fill=SECONDARY_TEXT)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path)
    print(f"✅ Educational Slide generated: {output_path}")

def process_course_json(json_path, output_dir_base):
    with open(json_path, 'r') as f:
        data = json.load(f)
    
    lesson_name = os.path.basename(json_path).replace('.json', '')
    slides = data.get('theorySlides', [])
    if not slides:
        slides = data.get('sections', [])
    
    for i, slide in enumerate(slides):
        title = slide.get('title', 'No Title')
        content = slide.get('content', 'No Content')
        output_path = os.path.join(output_dir_base, f"{lesson_name}_slide_{i}.png")
        generate_educational_slide(title, content, output_path)
        slide['imageUrl'] = f"/assets/courses/admin-a1/media/{lesson_name}_slide_{i}.png"

    with open(json_path, 'w') as f:
        json.dump(data, f, indent=2)

if __name__ == "__main__":
    week1_path = "src/content/cursos/trabajo/administracion/a1/trimestre1/semana01/"
    output_media = "public/assets/courses/admin-a1/media/"
    
    json_files = glob.glob(os.path.join(week1_path, "*.json"))
    for jf in json_files:
        if "exercises.json" in jf or "exam.json" in jf:
            continue
        print(f"🚀 Processing {jf}...")
        process_course_json(jf, output_media)
