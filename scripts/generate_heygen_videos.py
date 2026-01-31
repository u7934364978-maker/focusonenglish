import os
import json
import glob
import time
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("HEYGEN_API_KEY")
BASE_URL = "https://api.heygen.com/v2"
UPLOAD_URL = "https://upload.heygen.com/v1/asset"
AVATAR_ID = "Abigail_standing_office_front"

def upload_asset(file_path):
    headers = {
        "X-Api-Key": API_KEY,
    }
    # For images, we need to specify the content type usually or let requests handle it
    files = {
        "file": (os.path.basename(file_path), open(file_path, "rb"), "image/png")
    }
    print(f"⬆️ Uploading asset: {file_path}")
    response = requests.post(UPLOAD_URL, headers=headers, files=files)
    if response.status_code == 200:
        # HeyGen returns asset_id in v1/asset
        return response.json().get("data", {}).get("id")
    else:
        print(f"❌ Upload failed: {response.text}")
        return None

def generate_heygen_video(lesson_data, output_json_path):
    headers = {
        "X-Api-Key": API_KEY,
        "Content-Type": "application/json"
    }
    
    scenes = []
    slides = lesson_data.get('theorySlides', []) or lesson_data.get('sections', [])
    
    for i, slide in enumerate(slides):
        asset_id = upload_asset("public" + slide['imageUrl'])
        if not asset_id: continue
        
        scenes.append({
            "character": {
                "type": "avatar",
                "avatar_id": AVATAR_ID,
                "avatar_style": "normal"
            },
            "background": {
                "type": "image",
                "asset_id": asset_id
            },
            "text": slide.get('content', '')
        })

    payload = {
        "video_inputs": scenes,
        "dimension": {"width": 1920, "height": 1080}
    }

    print("🎬 Submitting video generation request to HeyGen...")
    response = requests.post(f"{BASE_URL}/video/generate", headers=headers, json=payload)
    
    if response.status_code == 200:
        video_id = response.json().get("data", {}).get("video_id")
        print(f"✅ Video submitted! ID: {video_id}")
        return video_id
    else:
        print(f"❌ Generation failed: {response.text}")
        return None

def check_status(video_id):
    headers = {"X-Api-Key": API_KEY}
    while True:
        response = requests.get(f"{BASE_URL}/video/{video_id}", headers=headers)
        status = response.json().get("data", {}).get("status")
        print(f"⏳ Video Status: {status}")
        if status == "completed":
            return response.json().get("data", {}).get("video_url")
        elif status == "failed":
            return None
        time.sleep(30)

if __name__ == "__main__":
    # Procesaremos la Lección 1 como prueba inicial
    lesson1_path = "src/content/cursos/trabajo/administracion/a1/trimestre1/semana01/lesson1.json"
    with open(lesson1_path, 'r') as f:
        data = json.load(f)
    
    video_id = generate_heygen_video(data, lesson1_path)
    if video_id:
        print("💡 You can check the status later or I can wait for it.")
        # Por ahora solo enviamos la solicitud para no bloquear el proceso
