import os
import re

def fix_line(line):
    matches = list(re.finditer(r'"([a-zA-Z0-9_]+)"\s*:\s*', line))
    if not matches:
        return line
        
    new_line = line[:matches[0].start()]
    
    for i in range(len(matches)):
        start_match = matches[i]
        key = start_match.group(1)
        after_colon_pos = start_match.end()
        
        if after_colon_pos < len(line) and line[after_colon_pos] == '"':
            value_start_pos = after_colon_pos + 1
            
            if i < len(matches) - 1:
                next_match = matches[i+1]
                end_search_pos = next_match.start()
                val_end_search_area = line[value_start_pos:end_search_pos]
                comma_match = val_end_search_area.rfind(',')
                if comma_match != -1:
                    value_end_pos = value_start_pos + comma_match
                    after_value = line[value_end_pos:end_search_pos]
                else:
                    value_end_pos = end_search_pos
                    after_value = ""
            else:
                val_end_search_area = line[value_start_pos:]
                end_match = re.search(r'["\s]*([,}\]]?\s*)$', val_end_search_area)
                if end_match:
                    value_end_pos = value_start_pos + end_match.start()
                    after_value = val_end_search_area[end_match.start():]
                else:
                    value_end_pos = len(line)
                    after_value = ""
            
            value_content = line[value_start_pos:value_end_pos]
            cleaned_value = value_content.replace('"', '').strip()
            
            # Decide whether to add a closing quote
            if after_value.strip().startswith('"'):
                new_line += f'"{key}": "{cleaned_value}{after_value}'
            else:
                new_line += f'"{key}": "{cleaned_value}"{after_value}'
        else:
            if i < len(matches) - 1:
                next_match = matches[i+1]
                end_pos = next_match.start()
            else:
                end_pos = len(line)
            
            new_line += line[start_match.start():end_pos]
            
    return new_line

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    for line in lines:
        if '":' in line:
            new_lines.append(fix_line(line))
        else:
            new_lines.append(line)
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

def main():
    base_dir = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/lib/course'
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.ts'):
                process_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
