import os
import subprocess
import json
import glob

def get_audio_duration(audio_path):
    result = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "default=noprint_wrappers=1:nokey=1", audio_path],
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT
    )
    return float(result.stdout)

def create_educational_video(slides_data, audio_base_dir, output_video_path):
    # Create a temporary concat file for FFmpeg
    concat_file = "ffmpeg_concat.txt"
    with open(concat_file, "w") as f:
        for i, slide in enumerate(slides_data):
            img_path = "public" + slide['imageUrl']
            audio_path = os.path.join(audio_base_dir, f"slide_{i}.mp3")
            
            if not os.path.exists(audio_path):
                print(f"⚠️ Audio not found: {audio_path}. Skipping...")
                continue
                
            duration = get_audio_duration(audio_path)
            # Add image to concat list with duration
            f.write(f"file '{os.path.abspath(img_path)}'\n")
            f.write(f"duration {duration}\n")
        
        # FFmpeg requirement: repeat the last file
        if slides_data:
            last_img = "public" + slides_data[-1]['imageUrl']
            f.write(f"file '{os.path.abspath(last_img)}'\n")

    # Combine all audios into one
    combined_audio = "combined_audio.mp3"
    audio_inputs = []
    for i in range(len(slides_data)):
        audio_path = os.path.join(audio_base_dir, f"slide_{i}.mp3")
        if os.path.exists(audio_path):
            audio_inputs.append(f"file '{os.path.abspath(audio_path)}'")
    
    with open("audio_concat.txt", "w") as f:
        f.write("\n".join(audio_inputs))
    
    subprocess.run([
        "ffmpeg", "-y", "-f", "concat", "-safe", "0", "-i", "audio_concat.txt", 
        "-c", "copy", combined_audio
    ])

    # Final Assembly: Slides + Combined Audio
    # Using libx264 for compatibility and professional quality
    subprocess.run([
        "ffmpeg", "-y", 
        "-f", "concat", "-safe", "0", "-i", concat_file,
        "-i", combined_audio,
        "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", "24",
        "-c:a", "aac", "-b:a", "192k",
        "-shortest",
        output_video_path
    ])

    # Cleanup
    for tmp in [concat_file, "audio_concat.txt", combined_audio]:
        if os.path.exists(tmp): os.remove(tmp)
    
    print(f"🎬 Video created: {output_video_path}")

def process_lesson(json_path):
    with open(json_path, 'r') as f:
        data = json.load(f)
    
    lesson_id = os.path.basename(json_path).replace('.json', '')
    audio_dir = f"public/audio/courses/trabajo/administracion/a1/trimestre1/semana01/{lesson_id}"
    video_output = f"public/assets/courses/admin-a1/media/{lesson_id}.mp4"
    
    slides = data.get('theorySlides', [])
    if not slides:
        slides = data.get('sections', [])
        
    if slides:
        create_educational_video(slides, audio_dir, video_output)
        data['videoUrl'] = f"/assets/courses/admin-a1/media/{lesson_id}.mp4"
        
        with open(json_path, 'w') as f:
            json.dump(data, f, indent=2)

if __name__ == "__main__":
    week1_jsons = glob.glob("src/content/cursos/trabajo/administracion/a1/trimestre1/semana01/*.json")
    for jf in week1_jsons:
        if "exercises" in jf or "exam" in jf: continue
        print(f"📺 Generating video for {jf}...")
        process_lesson(jf)
