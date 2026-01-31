import os
import sys
import json
import subprocess
import requests
import glob
from pathlib import Path
from typing import List, Dict, Any
from pydantic import BaseModel, Field
from dotenv import load_dotenv

# Load environment variables from .env.local
load_dotenv(dotenv_path=Path(__file__).parent.parent.parent.parent.parent.parent.parent / '.env.local')

ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")
ELEVENLABS_VOICE_ID = "21m00Tcm4TlvDq8ikWAM"  # Rachel

class VideoConfig(BaseModel):
    resolution: str = "1280x720"
    fps: int = 30
    leading_silence_ms: int = 150
    trailing_silence_ms: int = 150

class Job(BaseModel):
    lesson_id: str
    narration_text_path: str
    slides_glob: str
    output_dir: str
    video: VideoConfig = VideoConfig()

def get_audio_duration(file_path: str) -> float:
    cmd = [
        "ffprobe", 
        "-v", "error", 
        "-show_entries", "format=duration", 
        "-of", "default=noprint_wrappers=1:nokey=1", 
        file_path
    ]
    result = subprocess.run(cmd, capture_output=True, text=True)
    return float(result.stdout.strip())

def generate_tts(text: str, output_path: str):
    if os.path.exists(output_path):
        print(f"  ⏩ Audio already exists: {output_path}")
        return

    print(f"  🎤 Generating TTS for: {text[:50]}...")
    url = f"https://api.elevenlabs.io/v1/text-to-speech/{ELEVENLABS_VOICE_ID}"
    headers = {
        "Accept": "audio/mpeg",
        "Content-Type": "application/json",
        "xi-api-key": ELEVENLABS_API_KEY
    }
    data = {
        "text": text,
        "model_id": "eleven_multilingual_v2",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.75
        }
    }
    
    response = requests.post(url, json=data, headers=headers)
    if response.status_code != 200:
        raise Exception(f"ElevenLabs API error: {response.status_code} - {response.text}")
    
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, "wb") as f:
        f.write(response.content)

def run_pipeline(job_path: str):
    with open(job_path, 'r') as f:
        data = json.load(f)
    
    jobs = []
    if isinstance(data, list):
        jobs = [Job(**item) for item in data]
    else:
        jobs = [Job(**data)]
    
    for job in jobs:
        process_job(job)

def process_job(job: Job):
    narration_path = Path(job.narration_text_path)
    output_base = Path(job.output_dir)
    per_slide_audio_dir = output_base / "per_slide_audio"
    
    if not narration_path.exists():
        print(f"❌ Narration file not found: {narration_path}")
        return

    # 1. Read narration
    with open(narration_path, 'r') as f:
        paragraphs = [p.strip() for p in f.read().split('\n\n') if p.strip()]
    
    # 2. Get slides
    slides = sorted(glob.glob(job.slides_glob))
    
    if len(paragraphs) != len(slides):
        print(f"❌ Mismatch: {len(paragraphs)} paragraphs vs {len(slides)} slides")
        # For development with empty placeholders, we might want to continue or stop
        # return 

    print(f"🚀 Processing {len(paragraphs)} slides for {job.lesson_id}")
    
    slide_durations = []
    audio_files = []

    for i, (para, slide) in enumerate(zip(paragraphs, slides)):
        slide_num = str(i+1).zfill(3)
        audio_path = str(per_slide_audio_dir / f"slide_{slide_num}.mp3")
        
        # Generate TTS
        try:
            generate_tts(para, audio_path)
        except Exception as e:
            print(f"❌ Error generating TTS: {e}")
            continue
            
        # Get duration
        duration = get_audio_duration(audio_path)
        slide_durations.append(duration)
        audio_files.append(audio_path)
        print(f"  ✅ Slide {slide_num}: {duration:.2f}s")

    # 3. Generate Video using FFmpeg
    # Create a concat file for audio
    concat_audio_path = output_base / "audio_concat.txt"
    with open(concat_audio_path, 'w') as f:
        for af in audio_files:
            f.write(f"file '{os.path.abspath(af)}'\n")
            
    full_audio_path = output_base / "narration_full.mp3"
    subprocess.run([
        "ffmpeg", "-y", "-f", "concat", "-safe", "0", 
        "-i", str(concat_audio_path), "-c", "copy", str(full_audio_path)
    ], capture_output=True)

    # Create a complex filter for video
    # We want to show each slide for its corresponding audio duration
    filter_complex = ""
    for i in range(len(slides)):
        filter_complex += f"[{i}:v]trim=duration={slide_durations[i]},setpts=PTS-STARTPTS[v{i}];"
    
    v_labels = "".join([f"[v{i}]" for i in range(len(slides))])
    filter_complex += f"{v_labels}concat=n={len(slides)}:v=1:a=0[outv]"
    
    # Use only the last part of lesson_id for filename if it contains slashes
    video_filename = job.lesson_id.split("/")[-1]
    output_video_path = output_base / f"{video_filename}.mp4"
    
    cmd = ["ffmpeg", "-y"]
    for s in slides:
        cmd.extend(["-loop", "1", "-t", str(max(slide_durations)), "-i", s])
    
    cmd.extend([
        "-i", str(full_audio_path),
        "-filter_complex", filter_complex,
        "-map", "[outv]", "-map", f"{len(slides)}:a",
        "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", str(job.video.fps),
        "-s", job.video.resolution, "-shortest",
        str(output_video_path)
    ])
    
    print(f"🎬 Rendering video: {output_video_path}...")
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"❌ FFmpeg error:\n{result.stderr}")
    else:
        print(f"✨ Video generated successfully!")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python generate_synced_video.py <job_json_path>")
    else:
        run_pipeline(sys.argv[1])
