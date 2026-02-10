import json
import os
import random

def fix_placeholders(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".json"):
                path = os.path.join(root, file)
                try:
                    with open(path, "r", encoding="utf-8") as f:
                        data = json.load(f)
                    
                    changed = False
                    
                    # Basic vocab pool for this file
                    vocab_pool = []
                    if "blocks" in data:
                        for block in data["blocks"]:
                            for content in block.get("content", []):
                                if "correct_answer" in content and isinstance(content["correct_answer"], str) and content.get("type") == "multiple_choice":
                                    # Try to find the correct text
                                    correct_id = content["correct_answer"]
                                    for opt in content.get("options", []):
                                        if opt["id"] == correct_id:
                                            vocab_pool.append(opt["text"])
                    
                    if not vocab_pool:
                        vocab_pool = ["Example", "Word", "Test", "Language", "English"]

                    if "blocks" in data:
                        for block in data["blocks"]:
                            for content in block.get("content", []):
                                if "options" in content:
                                    for opt in content["options"]:
                                        if "Wrong" in str(opt.get("text", "")):
                                            new_text = random.choice([v for v in vocab_pool if v not in [o["text"] for o in content["options"]]])
                                            opt["text"] = new_text
                                            changed = True
                    
                    if changed:
                        with open(path, "w", encoding="utf-8") as f:
                            json.dump(data, f, indent=2, ensure_ascii=False)
                        print(f"Fixed placeholders in {path}")
                except Exception as e:
                    print(f"Error processing {path}: {e}")

if __name__ == "__main__":
    fix_placeholders("src/content/cursos")
