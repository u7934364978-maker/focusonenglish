from PIL import Image, ImageDraw
import os

def create_graphic_avatar(mouth_open=False, output_path="avatar.png"):
    size = (600, 600)
    # Transparent background
    img = Image.new('RGBA', size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Colors
    skin_color = (255, 224, 189)
    hair_color = (60, 40, 30)
    shirt_color = (30, 64, 175) # Professional Blue
    
    # Draw Body (Shirt)
    draw.ellipse([100, 400, 500, 800], fill=shirt_color)
    
    # Draw Face
    draw.ellipse([150, 50, 450, 400], fill=skin_color)
    
    # Draw Hair
    draw.chord([140, 40, 460, 300], 180, 0, fill=hair_color)
    
    # Draw Eyes
    draw.ellipse([230, 180, 260, 210], fill=(40, 40, 40))
    draw.ellipse([340, 180, 370, 210], fill=(40, 40, 40))
    
    # Draw Mouth
    if mouth_open:
        # Open mouth (oval)
        draw.ellipse([270, 280, 330, 330], fill=(150, 50, 50))
    else:
        # Closed mouth (line)
        draw.line([270, 305, 330, 305], fill=(150, 50, 50), width=5)
        
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path)
    print(f"✅ Avatar generated: {output_path}")

if __name__ == "__main__":
    base_path = "public/assets/courses/admin-a1/media/"
    create_graphic_avatar(mouth_open=False, output_path=base_path + "avatar_closed.png")
    create_graphic_avatar(mouth_open=True, output_path=base_path + "avatar_open.png")
