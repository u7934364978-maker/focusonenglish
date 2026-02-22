# Image Vocabulary Implementation Guide

This document provides instructions for adding images to the A1 course vocabulary exercises.

## Overview

The image vocabulary system supports two types of exercises:
1. **Image Multiple Choice**: Students select the correct answer from image options
2. **Image Labeling**: Students drag labels to specific points on an image

## Directory Structure

Images are organized in `/public/images/a1/` with subdirectories for unit ranges:

```
/public/images/a1/
├── unit1-10/
├── unit11-20/
├── unit21-30/
├── unit31-40/
├── unit41-50/
└── unit51-60/
```

## Image Requirements

### Technical Specifications
- **Format**: WebP (preferred), JPG, or PNG
- **Maximum Size**: 200KB per image
- **Recommended Dimensions**: 
  - Multiple choice options: 400x400px minimum
  - Labeling images: 1200x900px (4:3 aspect ratio)
- **Optimization**: Use tools like imagemagick, sharp, or online compressors

### Image Sourcing

#### Option 1: Free Stock Photos
Recommended sources:
- **Unsplash** (https://unsplash.com) - High-quality, free-to-use images
- **Pexels** (https://pexels.com) - Diverse collection of stock photos
- **Pixabay** (https://pixabay.com) - Wide variety of images

Search terms to use:
- Jobs: "doctor working", "teacher classroom", "chef cooking"
- Furniture: "modern sofa", "wooden table", "desk lamp"
- Animals: "dog portrait", "cat sitting", "rabbit pet"

#### Option 2: AI-Generated Images
For technical or specific vocabulary terms, use:
- **DALL-E 3** (via ChatGPT Plus or API)
- **Midjourney** (via Discord)
- **Stable Diffusion** (open source)

Example prompts:
- "Professional photo of a doctor in a hospital, clean background"
- "Simple illustration of a sofa in a modern living room"
- "High-quality photo of a tabby cat, portrait style"

### Image Optimization

Convert and optimize images using these tools:

#### Using ImageMagick (CLI)
```bash
# Convert to WebP and resize
magick doctor.jpg -resize 400x400^ -gravity center -extent 400x400 -quality 80 doctor.webp

# Batch convert all images in a directory
for img in *.jpg; do
  magick "$img" -resize 400x400^ -gravity center -extent 400x400 -quality 80 "${img%.jpg}.webp"
done
```

#### Using Sharp (Node.js)
```javascript
const sharp = require('sharp');

sharp('input.jpg')
  .resize(400, 400, { fit: 'cover' })
  .webp({ quality: 80 })
  .toFile('output.webp');
```

#### Using Online Tools
- **Squoosh** (https://squoosh.app) - Google's web-based image compressor
- **TinyPNG** (https://tinypng.com) - PNG/JPG compression

## Adding Image Exercises to Units

### Image Multiple Choice Exercise

Add this JSON structure to a unit's `content` array:

```json
{
  "interaction_id": "U9_IMG1",
  "type": "image_multiple_choice",
  "id": "U9_IMG1",
  "prompt": "What profession is shown in this image?",
  "prompt_es": "¿Qué profesión se muestra en esta imagen?",
  "options": [
    {
      "id": "img_opt1",
      "imageUrl": "/images/a1/unit1-10/doctor.jpg",
      "label": "Doctor"
    },
    {
      "id": "img_opt2",
      "imageUrl": "/images/a1/unit1-10/teacher.jpg",
      "label": "Teacher"
    },
    {
      "id": "img_opt3",
      "imageUrl": "/images/a1/unit1-10/chef.jpg",
      "label": "Chef"
    },
    {
      "id": "img_opt4",
      "imageUrl": "/images/a1/unit1-10/engineer.jpg",
      "label": "Engineer"
    }
  ],
  "answerIndex": 0,
  "explanation": "A doctor works in a hospital and helps sick people.",
  "mastery_tag": "vocabulary"
}
```

### Image Labeling Exercise

Add this JSON structure to a unit's `content` array:

```json
{
  "interaction_id": "U22_IMG1",
  "type": "image_labeling",
  "id": "U22_IMG1",
  "title": "Label the Living Room",
  "instructions": "Drag the correct labels to each item in the living room",
  "imageUrl": "/images/a1/unit21-30/living-room.jpg",
  "labels": ["Sofa", "Table", "Lamp", "TV", "Curtains"],
  "labelPoints": [
    {
      "id": "point1",
      "x": 25,
      "y": 60,
      "correctLabel": "Sofa"
    },
    {
      "id": "point2",
      "x": 50,
      "y": 75,
      "correctLabel": "Table"
    },
    {
      "id": "point3",
      "x": 65,
      "y": 50,
      "correctLabel": "Lamp"
    },
    {
      "id": "point4",
      "x": 75,
      "y": 35,
      "correctLabel": "TV"
    },
    {
      "id": "point5",
      "x": 15,
      "y": 20,
      "correctLabel": "Curtains"
    }
  ],
  "explanation": "These are common furniture items found in a living room.",
  "mastery_tag": "vocabulary"
}
```

**Note on Label Point Coordinates:**
- `x` and `y` are percentages (0-100) of the image dimensions
- Use an image editor to identify object positions
- Test in the browser and adjust coordinates as needed

## Adding Images: Step-by-Step

### 1. Identify Target Vocabulary
Review the unit's vocabulary list and identify 5-10 words that would benefit from visual context.

### 2. Source or Generate Images
- Download from free stock photo sites
- Generate with AI tools
- Ensure images clearly represent the vocabulary word

### 3. Optimize Images
```bash
cd public/images/a1/unit1-10/
# Convert to WebP and optimize
for img in *.jpg; do
  magick "$img" -resize 400x400^ -gravity center -extent 400x400 -quality 80 "${img%.jpg}.webp"
  rm "$img"  # Remove original
done
```

### 4. Add to Unit JSON
Use the JSON structures above to add exercises to the appropriate unit file in `src/content/cursos/ingles-a1/unitX.json`.

### 5. Test the Exercises
```bash
npm run dev
# Navigate to http://localhost:5436/debug/premium
# Select the unit and test the image exercises
```

### 6. Validate JSON Structure
```bash
npm run validate-exercises
```

## Example Units with Image Exercises

Current implementation includes:
- **Unit 9 (Jobs & Occupations)**: Image multiple choice for professions
- **Unit 22 (Furniture & Household Items)**: Image labeling for living room
- **Unit 27 (Pets & Animals)**: Image multiple choice for animals

## Bulk Image Processing Script

Create a script `scripts/optimize-images.sh`:

```bash
#!/bin/bash
# Optimize all images in A1 units

for dir in public/images/a1/*/; do
  echo "Processing $dir..."
  cd "$dir"
  
  # Convert JPG/PNG to WebP
  for img in *.{jpg,png,jpeg}; do
    [ -f "$img" ] || continue
    filename="${img%.*}"
    magick "$img" -resize 400x400^ -gravity center -extent 400x400 -quality 80 "$filename.webp"
    echo "  Converted: $img -> $filename.webp"
  done
  
  cd - > /dev/null
done

echo "Image optimization complete!"
```

Make it executable:
```bash
chmod +x scripts/optimize-images.sh
./scripts/optimize-images.sh
```

## Image Naming Conventions

Use descriptive, lowercase filenames with hyphens:
- ✅ `doctor-hospital.webp`
- ✅ `living-room-modern.webp`
- ✅ `cat-sitting.webp`
- ❌ `IMG_1234.jpg`
- ❌ `Doctor Photo.png`

## Performance Considerations

- **Next.js Image Optimization**: The `<Image />` component automatically optimizes images
- **Lazy Loading**: Images are lazy-loaded by default
- **Priority Loading**: First 4 images in multiple choice use `priority` flag
- **Responsive Sizes**: Images adapt to screen size using `sizes` attribute

## Cost Tracking

When using paid services:
- **DALL-E 3**: ~$0.04 per 1024x1024 image (60 images = ~$2.40)
- **ElevenLabs/Google TTS**: Track character usage
- **Unsplash/Pexels**: Free with attribution

Target budget for A1 images: $50-80 for all 300 images if using AI generation.

## Validation Checklist

Before committing:
- [ ] All images are <200KB
- [ ] Images are in WebP format (preferred)
- [ ] File names follow naming conventions
- [ ] Images are in correct directory (unit1-10, unit11-20, etc.)
- [ ] JSON structure validates with `npm run validate-exercises`
- [ ] Exercises tested in browser
- [ ] Label point coordinates are accurate
- [ ] All images have alt text (automatically set from label/title)

## Troubleshooting

### Images Not Loading
- Check file path matches JSON exactly (case-sensitive)
- Verify image exists in `/public/images/a1/`
- Check browser console for 404 errors

### Images Too Large
- Re-optimize with lower quality setting
- Reduce dimensions
- Convert to WebP format

### Label Points Misaligned
- Use browser DevTools to inspect image dimensions
- Adjust x/y percentages based on actual object positions
- Test on different screen sizes

## Future Enhancements

Planned improvements:
1. Automatic image optimization pipeline
2. Image placeholder generation
3. Accessibility: Screen reader descriptions
4. Multi-language label support
5. Image analytics tracking

---

For questions or issues, refer to the main project README or create an issue in the repository.
