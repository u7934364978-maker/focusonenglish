import re
import os

def fix_value(value):
    # Remove internal quotes surrounding [[...]]
    # Example: [[The|El]] "[[Roman|Imperio]]" -> [[The|El]] [[Roman|Imperio]]
    new_value = value.replace('"[[', '[[').replace(']]"', ']]')
    # Remove quotes between blocks: [[A|B]]", "[[C|D]] -> [[A|B]] [[C|D]]
    new_value = new_value.replace('", "', ' ')
    # Remove stray quotes that might have been left
    # But be careful not to remove quotes that are part of the text if any
    return new_value

def fix_line(line):
    # Fields that should be single strings but have internal quotes
    fields = ['"transcript"', '"title"', '"instructions"', '"question"', '"correctSentence"']
    
    # Try to find all key-value pairs in the line
    # This regex looks for "key": "value"
    # We use a non-greedy match for the value, but it's tricky because of internal quotes
    # Instead, let's find the start of the value and the real end of the value.
    
    for field in fields:
        if field in line:
            # Find all occurrences of the field in the line
            pattern = re.escape(field) + r':\s*"(.*?)"(?=[,\s\n\}]|$)'
            # Wait, the problem is that (.*?) will stop at the FIRST internal quote.
            # So we need to find the LAST quote before the comma/closing-brace.
            
            # Revised pattern: field name, colon, space, opening quote, 
            # then everything until the LAST quote followed by a comma, brace, or end of line.
            pattern = re.escape(field) + r':\s*"(.*)"(?=[,\s\}]|$)'
            
            def replace_match(match):
                full_value = match.group(1)
                return field + ': "' + fix_value(full_value) + '"'
            
            line = re.sub(pattern, replace_match, line)
            
    return line

def main():
    base_dirs = [
        'src/lib/course/a1',
        'src/lib/course/b1',
        'src/lib/course/b2'
    ]
    
    for base_dir in base_dirs:
        if not os.path.exists(base_dir):
            continue
        for filename in os.listdir(base_dir):
            if filename.endswith('.ts'):
                path = os.path.join(base_dir, filename)
                with open(path, 'r', encoding='utf-8') as f:
                    lines = f.readlines()
                
                new_lines = [fix_line(line) for line in lines]
                
                if new_lines != lines:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.writelines(new_lines)
                    print(f"Updated {path}")

if __name__ == "__main__":
    main()
