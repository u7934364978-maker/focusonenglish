# README-DEV — Media Pipeline (Curso B2 Administración/Operaciones)

Guía para developers: generación automática de **audio (TTS)** y **vídeo MP4** (slides + narración) para lecciones del curso online.
Instrucciones de la plataforma en español; narración y producción del alumno en inglés.

Base curricular (temáticas B2 business típicas): https://help.off2class.com/lessons/business-english [Source](https://help.off2class.com/lessons/business-english)

---

## Índice
- [Visión general](#visión-general)
- [Estructura del repositorio](#estructura-del-repositorio)
- [Convenciones de contenido (crítico)](#convenciones-de-contenido-crítico)
- [Requisitos del sistema](#requisitos-del-sistema)
- [Variables de entorno](#variables-de-entorno)
- [Quickstart (generar 1 vídeo)](#quickstart-generar-1-vídeo)
- [Jobs JSON (contrato)](#jobs-json-contrato)
- [Validador de lecciones](#validador-de-lecciones)
- [CI recomendado (GitHub Actions)](#ci-recomendado-github-actions)
- [Troubleshooting](#troubleshooting)
- [Seguridad y buenas prácticas](#seguridad-y-buenas-prácticas)

---

## Visión general

### Qué genera el pipeline
Para cada lección (`lesson_id`) el pipeline produce:
- `outputs/{lesson_id}/per_slide_audio/slide_###.mp3` (audio por slide)
- `outputs/{lesson_id}/narration_full.mp3` (audio total concatenado)
- `outputs/{lesson_id}/{lesson_id}.mp4` (vídeo final sincronizado)

### Cómo sincroniza (modo PRO)
**Regla 1: 1 slide = 1 párrafo del guion**.
- `assets/{lesson_id}/narration_en.txt` debe contener N párrafos.
- `assets/{lesson_id}/slides/slide_001.png ... slide_NNN.png` deben ser N slides.
- El pipeline genera TTS por párrafo, mide duración real con `ffprobe` y asigna esa duración al slide correspondiente.

---

## Estructura del repositorio

Sugerencia mínima:

repo/
- pipeline/
  - generate_synced_video.py
- validators/
  - validate_lesson.py
- jobs/
  - lesson_001.json
- assets/
  - lesson_001/
    - narration_en.txt
    - slides/
      - slide_001.png
      - slide_002.png
- outputs/   (generado)
- requirements.txt
- .env.example

---

## Convenciones de contenido (crítico)

### 1) Slides
- Nombre: `slide_001.png`, `slide_002.png`, ...
- Numeración consecutiva (sin saltos).
- Recomendado: misma resolución/aspect ratio (p.ej. 1280x720 o 1920x1080).

### 2) Guion narrado (inglés)
Archivo: `narration_en.txt`

- Separar párrafos con **una línea en blanco**.
- Cada párrafo corresponde a un slide.
- Debe cumplirse siempre: `#párrafos == #slides`.

Ejemplo (2 slides):
Paragraph 1 text...

[blank line]

Paragraph 2 text...

### 3) Duración recomendada
- Ideal por slide: 20–60 segundos de narración.
- Evitar “wall of text”: mejor dividir en más slides.

---

## Requisitos del sistema

### Linux (recomendado)
- Python 3.10+
- `ffmpeg` (incluye `ffprobe`)

Ubuntu/Debian:
```bash
sudo apt-get update && sudo apt-get install -y ffmpeg
```

Dependencias Python

requirements.txt mínimo:

pydantic>=2.6
python-dotenv>=1.0
requests>=2.31

Variables de entorno

Crear .env (no commitear):

AZURE_SPEECH_KEY="..."
AZURE_SPEECH_REGION="westeurope"

Plantilla .env.example:

AZURE_SPEECH_KEY=""
AZURE_SPEECH_REGION="westeurope"

Quickstart (generar 1 vídeo)

    Instalar dependencias:

pip install -r requirements.txt

    Validar contenido:

python validators/validate_lesson.py --lesson assets/lesson_001 --strict

    Generar vídeo (job JSON):

python pipeline/generate_synced_video.py --job jobs/lesson_001.json

Salida:

    outputs/lesson_001/lesson_001.mp4

Jobs JSON (contrato)

Ejemplo jobs/lesson_001.json:

{
  "lesson_id": "lesson_001",
  "narration_text_path": "assets/lesson_001/narration_en.txt",
  "slides_glob": "assets/lesson_001/slides/slide_*.png",
  "output_dir": "outputs/lesson_001",
  "azure": { "voice_name": "en-US-JennyNeural" },
  "video": {
    "resolution": "1280x720",
    "fps": 30,
    "leading_silence_ms": 120,
    "trailing_silence_ms": 120
  }
}

Notas:

    leading_silence_ms y trailing_silence_ms suavizan cortes entre slides.
    resolution se usa para pad/scale en ffmpeg.

Validador de lecciones

El validador comprueba:

    existencia de narration_en.txt
    existencia de slides/slide_*.png
    numeración consecutiva de slides
    regla 1:1 (párrafos == slides)
    (opcional) valida que ffmpeg/ffprobe existan si se pide

Uso:

python validators/validate_lesson.py --lesson assets/lesson_001 --strict
python validators/validate_lesson.py --lesson assets/lesson_001 --json

CI recomendado (GitHub Actions)

Recomendación:

    Ejecutar validador en PRs para evitar subir lecciones rotas.
    No ejecutéis render de vídeo en CI (caro/lento); solo validar contenido.

Ejemplo workflow:

    checkout
    setup-python
    pip install -r requirements.txt
    run validator sobre assets/**

Troubleshooting
Error: mismatch párrafos/slides

    Solución: ajustar narration_en.txt para tener exactamente un párrafo por slide.

Error: ffmpeg not found

    Instalar ffmpeg o añadirlo al PATH del contenedor/servidor.

Error: Azure 401/403

    Revisar variables de entorno y región.

Calidad de voz

    Cambiar voice_name en el job JSON (p.ej. otras voces neuronales en-US/en-GB).

Seguridad y buenas prácticas

    No commitear .env ni claves en GitHub.
    Validar rutas para evitar path traversal si el job llega desde API.
    Limitar número máximo de slides por lección (p. ej. 60) para evitar abuso.
    Guardar logs por job en outputs/{lesson_id}/job.log si se orquesta en servidor.
