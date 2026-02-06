# PRD: Programmatic Phrases Hub (Frases en Inglés)

## 1. Goal
Maximize Domain Authority (DA) and organic traffic by ranking for 400+ keywords related to "English phrases" (frases en inglés). 

## 2. Target Keywords
- **Core**: "frases en ingles" (Vol 4400, Diff 52)
- **Top Categories**: 
    - Amor (amor, san valentin)
    - Instagram/Social Media (instagram, fotos, ig, aesthetic)
    - Motivación (motivadoras, inspiradoras, positivas)
    - Viajes (viajar, viajeros, vacaciones)
    - Gramática (pasivas, condicionales, comparativas)
    - Formats (cortas, bonitas, tatuajes, canciones)

## 3. Proposed Solution: The "Master Hub of Phrases"
A programmatic SEO structure located at `/frases-en-ingles/`.

### 3.1 Architecture
- **Index Page (`/frases-en-ingles`)**: A portal organized by categories, optimized for the head keyword.
- **Category Pages (`/frases-en-ingles/[slug]`)**: Dynamic pages rendering specific phrase lists based on the slug (e.g., `/frases-en-ingles/amor`).
- **Data Source**: A structured JSON or Supabase table containing:
    - `phrase`: The English text.
    - `translation`: Spanish translation.
    - `categories`: Array of tags (e.g., `["amor", "cortas", "bonitas"]`).
    - `context`: Usage tips (optional).
    - `audio_url`: URL to generated audio (using existing audio pipeline).

### 3.2 Key Features for SEO Authority
- **Audio Integration**: Each phrase has a "Play" button. High-quality TTS (Text-to-Speech) increases dwell time.
- **Copy to Clipboard**: Quick "Copy" button for Instagram/Social media phrases.
- **Rich Snippets (Schema.org)**: 
    - `ItemList` for the phrases.
    - `FAQPage` for category-specific questions.
    - `Speakable` specification for the audio content.
- **Internal Linking**: 
    - Sidebar or Footer links to "Related Categories".
    - Links to related blog posts and courses.
- **Mobile First**: Optimized for quick browsing (the majority of "frases para instagram" traffic is mobile).

## 4. Technical Constraints
- Must follow the existing Next.js 15 App Router architecture.
- Must leverage existing SEO patterns (metadata, sitemap).
- Content should be easy to update without redeploying (Supabase is preferred for the phrases data).

## 5. Success Metrics
- Position < 10 for "frases en ingles" within 3 months.
- Increased organic traffic by 20%+.
- High average time on page (> 2 mins).
