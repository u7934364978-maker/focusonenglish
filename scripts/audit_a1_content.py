import json
import os

COURSE_DIR = "src/content/cursos/ingles-a1"

def audit():
    errors_found = 0
    total_exercises = 0
    for i in range(1, 61):
        file_path = os.path.join(COURSE_DIR, f"unit{i}.json")
        if not os.path.exists(file_path):
            continue
        
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
            for block in data.get('blocks', []):
                for exercise in block.get('content', []):
                    total_exercises += 1
                    stimulus = exercise.get('stimulus_en', '')
                    answer = str(exercise.get('correct_answer', '')).lower()
                    
                    if not stimulus or not answer:
                        continue
                        
                    # Verificar si la respuesta (o parte de ella) está entre paréntesis en el estímulo
                    if '(' in stimulus and ')' in stimulus:
                        content_in_parens = stimulus[stimulus.find('(')+1 : stimulus.find(')')].lower()
                        if answer == content_in_parens or answer in content_in_parens.split('/'):
                            print(f"ERROR en Unidad {i}, ID {exercise.get('interaction_id')}:")
                            print(f"  Estímulo: {stimulus}")
                            print(f"  Respuesta: {answer}")
                            errors_found += 1
    
    print(f"\nAUDITORÍA FINALIZADA")
    print(f"Ejercicios revisados: {total_exercises}")
    print(f"Errores encontrados: {errors_found}")
    return errors_found

if __name__ == '__main__':
    audit()
