from PIL import Image, ImageDraw
import os

def create_favicon(output_path):
    # Create a 32x32 image
    img = Image.new('RGB', (32, 32), color=(255, 99, 71)) # Tomato color for Focus English
    d = ImageDraw.Draw(img)
    # Draw a simple 'F'
    d.text((10, 5), "F", fill=(255, 255, 255))
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path)
    print(f"Created: {output_path}")

create_favicon("public/favicon.ico")
