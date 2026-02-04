import json
import os
from collections import defaultdict

def audit_duplicates():
    base_path = 'src/content/cursos/ingles-a1/'
    all_exercises = []
    duplicates_by_content = defaultdict(list)
    
    print(f"🔍 Starting audit for duplicates in {base_path}...")
    
    for i in range(1, 61):
        file_path = os.path.join(base_path, f'unit{i}.json')
        if not os.path.exists(file_path):
            continue
            
        with open(file_path, 'r', encoding='utf-8') as f:
            try:
                data = json.load(f)
                exercises = data.get('exercises', [])
                for idx, ex in enumerate(exercises):
                    # Create a signature for the exercise to detect duplicates
                    # We use stimulus, prompt and answer
                    sig = (
                        ex.get('type', ''),
                        ex.get('stimulus_en', ''),
                        ex.get('prompt_es', ''),
                        str(ex.get('correct_answer', '')),
                        str(ex.get('correct_order', ''))
                    )
                    
                    duplicates_by_content[sig].append({
                        'unit': i,
                        'index': idx,
                        'id': ex.get('id', 'N/A')
                    })
            except Exception as e:
                print(f"Error reading unit{i}.json: {e}")

    total_duplicates = 0
    duplicate_groups = 0
    
    for sig, occurrences in duplicates_by_content.items():
        if len(occurrences) > 1:
            duplicate_groups += 1
            total_duplicates += (len(occurrences) - 1)
            # print(f"Duplicate found: {sig[1]} | {sig[3]} | Units: {[o['unit'] for o in occurrences]}")

    print("\n" + "="*50)
    print(f"📊 DUPLICATE AUDIT SUMMARY")
    print(f"Total Duplicate Groups: {duplicate_groups}")
    print(f"Total Extra Copies to replace: {total_duplicates}")
    print("="*50)

    if total_duplicates > 0:
        # Save a report for fixing
        with open('scripts/duplicate_report.json', 'w', encoding='utf-8') as f:
            # Convert tuple keys to strings for JSON
            report = {str(k): v for k, v in duplicates_by_content.items() if len(v) > 1}
            json.dump(report, f, indent=2, ensure_ascii=False)
        print(f"Report saved to scripts/duplicate_report.json")
    else:
        print("✅ No duplicates found! Excellent variety.")

if __name__ == "__main__":
    audit_duplicates()
