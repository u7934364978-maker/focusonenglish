import json
import os
import glob

COURSE_DIR = "/Users/lidia/Documents/focusonenglish/src/content/cursos/ingles-a1"

def audit():
    files = glob.glob(os.path.join(COURSE_DIR, "*.json"))
    total_issues = 0
    total_exercises = 0
    
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            unit_id = data["course"]["unit_id"]
            exercises = data["blocks"][0]["content"]
            total_exercises += len(exercises)
            
            seen_prompts = set()
            
            for ex in exercises:
                ex_key = json.dumps(ex, sort_keys=True)
                seen_prompts.add(ex_key)
                
                # Check for "spoiler" answers in prompt_es
                prompt = ex.get("prompt_es", "").lower()
                correct = str(ex.get("correct_answer", "")).lower()
                
                if ex["type"] == "short_writing":
                    stimulus = ex.get("stimulus_es", "").lower()
                    if correct in prompt:
                         print(f"Issue in {unit_id}: {prompt} -> {correct}")
                         total_issues += 1
                
                if ex["type"] == "transformation":
                    stimulus = ex.get("stimulus_en", "").lower()
                    if correct in stimulus.replace("________", ""):
                        print(f"Issue in {unit_id}: {stimulus} -> {correct}")
                        total_issues += 1

    print(f"Audit completed.")
    print(f"Total Exercises: {total_exercises}")
    print(f"Potential Issues Found: {total_issues}")

if __name__ == "__main__":
    audit()
