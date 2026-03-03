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

# Patterns where ALL options must show Spanish (right side)
# "¿Qué significa '...'?" → answer is the Spanish meaning
FORCE_SPANISH_PATTERNS = [
    r'qué significa',
]
FORCE_SPANISH_RE = re.compile('|'.join(FORCE_SPANISH_PATTERNS), re.IGNORECASE)


def has_spanish_chars(s):
    """Return True if s contains definitive Spanish markers."""
    # Accented chars
    if re.search(r'[áéíóúñüÁÉÍÓÚÑÜ]', s):
        return True
    # Spanish gender marker like "Dependiente/a" (slash with no spaces, ≤3 chars after)
    if re.search(r'\w+/\w{1,3}$', s.strip()):
        return True
    return False


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


def force_swap_token(tok):
    """Swap [[A|B]] → [[B|A]] if A ≠ B and A has no confirmed Spanish chars."""
    m = TOKEN_RE.match(tok)
    if not m:
        return tok
    left, right = m.group(1), m.group(2)
    if left == right:
        return tok
    if has_spanish_chars(left):
        return tok  # already showing Spanish
    return f'[[{right}|{left}]]'


def fix_options_str(opts_str, all_question_texts, force_spanish=False):
    def replacer(m):
        full = m.group(0)
        if force_spanish:
            return force_swap_token(full)
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

        is_vocab = VOCAB_RE.search(instruction)
        is_force = FORCE_SPANISH_RE.search(instruction)

        if not is_vocab and not is_force:
            return m.group(0)

        # Collect all question texts in this exercise (normalised to lowercase)
        all_question_texts = set(
            qm.group(1).strip().lower()
            for qm in QBLOCK_RE.finditer(questions_body)
        )

        fixed_body = questions_body
        for qm in QFULL_RE.finditer(questions_body):
            opts_str = qm.group(2)
            new_opts = fix_options_str(opts_str, all_question_texts, force_spanish=bool(is_force))
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
