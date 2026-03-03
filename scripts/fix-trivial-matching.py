#!/usr/bin/env python3
"""
Fixes vocabulary matching exercises where options mix English and Spanish.

For exercises with instructions like "Une..." or "Traduce..." where the
questions are English words/phrases, ALL options should show Spanish
translations. Swaps [[English|Spanish]] → [[Spanish|English]] across the
entire exercise block.

Strategy per question block inside a vocabulary exercise:
1. Collect all option left-sides (what gets rendered).
2. If the left-side of an option matches ANY question text in the exercise
   (i.e. the distractor literally shows the English question word), swap it.
3. Additionally swap any [[A|B]] where B has Spanish accent chars and A does not.
"""
import re
from pathlib import Path

TS_DIR = Path('src/lib/course/a1')

TOKEN_RE = re.compile(r'\[\[([^\]|]+)\|([^\]|]+)\]\]')

VOCAB_INSTRUCTION_PATTERNS = [
    r'une los',
    r'une las',
    r'une el',
    r'empareja',
    r'relaciona',
    r'traduce',
    r'escribe .+ en inglés',
    r'cómo se dice',
    r'pregunta .+en inglés',
]
VOCAB_RE = re.compile('|'.join(VOCAB_INSTRUCTION_PATTERNS), re.IGNORECASE)


def has_spanish_chars(s):
    return bool(re.search(r'[áéíóúñüÁÉÍÓÚÑÜ/]', s))


def should_swap(tok, all_question_texts):
    """Return True if [[A|B]] should become [[B|A]]."""
    m = TOKEN_RE.match(tok)
    if not m:
        return False
    left, right = m.group(1), m.group(2)
    if left == right:
        return False  # same word both sides – already neutral

    # If left already shows Spanish chars → already correct, don't swap
    if has_spanish_chars(left):
        return False

    # Rule 1: right has Spanish chars → left is English → swap
    if has_spanish_chars(right):
        return True

    # Rule 2: left side literally matches a question text in the same exercise
    # (means we're showing the English question word as an option – wrong)
    if left.strip().lower() in all_question_texts:
        return True

    return False


def fix_options_str(opts_str, all_question_texts):
    def replacer(m):
        full = m.group(0)
        if should_swap(full, all_question_texts):
            return f'[[{m.group(2)}|{m.group(1)}]]'
        return full
    return TOKEN_RE.sub(replacer, opts_str)


def fix_file(filepath):
    content = filepath.read_text(encoding='utf-8')
    count = 0

    EXERCISE_RE = re.compile(
        r'("instructions":\s*"([^"]+)"[^[]*"questions":\s*\[)(.*?)(\]\s*\})',
        re.DOTALL
    )

    QBLOCK_RE = re.compile(
        r'"question":\s*"([^"]+)"',
        re.DOTALL
    )

    QFULL_RE = re.compile(
        r'("question":\s*"[^"]+"\s*,\s*"options":\s*\[)(.*?)(\]\s*,\s*"correctAnswer":\s*\d+)',
        re.DOTALL
    )

    def fix_exercise(m):
        nonlocal count
        header = m.group(1)
        instruction = m.group(2)
        questions_body = m.group(3)
        footer = m.group(4)

        if not VOCAB_RE.search(instruction):
            return m.group(0)

        # Collect all question texts in this exercise (normalised to lowercase)
        all_question_texts = set(
            qm.group(1).strip().lower()
            for qm in QBLOCK_RE.finditer(questions_body)
        )

        fixed_body = questions_body
        for qm in QFULL_RE.finditer(questions_body):
            opts_str = qm.group(2)
            new_opts = fix_options_str(opts_str, all_question_texts)
            if new_opts != opts_str:
                count += 1
                fixed_body = fixed_body.replace(
                    qm.group(1) + opts_str + qm.group(3),
                    qm.group(1) + new_opts + qm.group(3),
                    1
                )

        return header + fixed_body + footer

    new_content = EXERCISE_RE.sub(fix_exercise, content)

    if new_content != content:
        filepath.write_text(new_content, encoding='utf-8')

    return count


def main():
    print('=== Fixing vocabulary matching exercises (English→Spanish) ===\n')
    total = 0
    for f in sorted(TS_DIR.glob('unit-*.ts')):
        n = fix_file(f)
        if n > 0:
            print(f'  {f.name}: {n} question blocks fixed')
            total += n
    print(f'\nTotal: {total} question blocks fixed')


if __name__ == '__main__':
    main()
