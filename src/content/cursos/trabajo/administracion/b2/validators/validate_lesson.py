#!/usr/bin/env python3
"""
validate_lesson.py
Valida estructura y consistencia de una lección para el pipeline:
- narration_en.txt existe
- slides existen y están numeradas consecutivamente: slide_001.png...
- 1 slide = 1 párrafo (separado por línea en blanco)
- (opcional) modo --strict exige ffmpeg/ffprobe en PATH

Uso:
  python validators/validate_lesson.py --lesson assets/lesson_001 --strict
  python validators/validate_lesson.py --lesson assets/lesson_001 --json
"""

import argparse
import json
import re
import shutil
from pathlib import Path
from typing import Dict, List, Tuple


SLIDE_RE = re.compile(r"^slide_(\d{3})\.(png|jpg|jpeg|webp)$", re.IGNORECASE)


def split_paragraphs(text: str) -> List[str]:
    # Párrafos separados por línea en blanco
    parts = [p.strip() for p in text.strip().split("\n\n") if p.strip()]
    return parts


def find_slides(slides_dir: Path) -> List[Path]:
    if not slides_dir.exists():
        return []
    slides = [p for p in slides_dir.iterdir() if p.is_file() and SLIDE_RE.match(p.name)]
    slides.sort(key=lambda p: int(SLIDE_RE.match(p.name).group(1)))
    return slides


def check_consecutive(slides: List[Path]) -> Tuple[bool, List[int], List[int]]:
    """Return (ok, present_numbers, missing_numbers)."""
    nums = [int(SLIDE_RE.match(p.name).group(1)) for p in slides]
    if not nums:
        return False, [], []
    expected = list(range(nums[0], nums[-1] + 1))
    missing = [n for n in expected if n not in nums]
    ok = len(missing) == 0 and nums[0] == 1  # exigimos que empiece en 001
    return ok, nums, missing


def tool_exists(name: str) -> bool:
    return shutil.which(name) is not None


def validate_lesson(lesson_dir: Path, strict: bool = False) -> Dict:
    errors = []
    warnings = []
    info = {}

    if strict:
        if not tool_exists("ffmpeg"):
            errors.append("ffmpeg no está instalado o no está en PATH (modo --strict).")
        if not tool_exists("ffprobe"):
            errors.append("ffprobe no está instalado o no está en PATH (modo --strict).")

    narration_path = lesson_dir / "narration_en.txt"
    slides_dir = lesson_dir / "slides"

    if not narration_path.exists():
        errors.append(f"Falta narration_en.txt en {narration_path}")
        narration_paragraphs = []
    else:
        text = narration_path.read_text(encoding="utf-8").strip()
        narration_paragraphs = split_paragraphs(text)
        if not narration_paragraphs:
            errors.append("narration_en.txt está vacío o no tiene párrafos válidos.")

    slides = find_slides(slides_dir)
    if not slides:
        errors.append(f"No se encontraron slides en {slides_dir} con patrón slide_###.(png/jpg/webp).")
    else:
        ok_consecutive, present, missing = check_consecutive(slides)
        info["slides_count"] = len(slides)
        info["slides_present_numbers"] = present

        if not ok_consecutive:
            if present and present[0] != 1:
                errors.append(f"La numeración de slides debe empezar en 001. Empieza en {present[0]:03d}.")
            if missing:
                errors.append(f"Faltan slides en la secuencia: {', '.join(f'{m:03d}' for m in missing)}")

    info["paragraphs_count"] = len(narration_paragraphs)

    # Regla 1:1
    if slides and narration_paragraphs:
        if len(slides) != len(narration_paragraphs):
            errors.append(
                f"Desajuste 1:1: hay {len(slides)} slides pero {len(narration_paragraphs)} párrafos en narration_en.txt."
            )

    # Heurísticas de calidad (warnings)
    # Longitud por párrafo (caracteres) para detectar demasiado corto/largo.
    if narration_paragraphs:
        lengths = [len(p) for p in narration_paragraphs]
        info["paragraph_char_lengths"] = lengths

        too_short = [i for i, n in enumerate(lengths, start=1) if n < 40]
        too_long = [i for i, n in enumerate(lengths, start=1) if n > 900]

        if too_short:
            warnings.append(f"Párrafos muy cortos (<40 chars) en slides: {', '.join(map(str, too_short))}.")
        if too_long:
            warnings.append(f"Párrafos muy largos (>900 chars) en slides: {', '.join(map(str, too_long))}.")

    status = "OK" if not errors else "FAILED"
    return {
        "status": status,
        "lesson_dir": str(lesson_dir),
        "info": info,
        "warnings": warnings,
        "errors": errors,
    }


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--lesson", required=True, help="Ruta a assets/{lesson_id} (contiene narration_en.txt y slides/)")
    parser.add_argument("--strict", action="store_true", help="Exige ffmpeg/ffprobe instalados")
    parser.add_argument("--json", action="store_true", help="Salida en JSON (para CI)")
    args = parser.parse_args()

    lesson_dir = Path(args.lesson).resolve()
    result = validate_lesson(lesson_dir, strict=args.strict)

    if args.json:
        print(json.dumps(result, ensure_ascii=False, indent=2))
    else:
        print(f"Lesson: {result['lesson_dir']}")
        print(f"Status: {result['status']}")
        if result["info"]:
            print("Info:")
            for k, v in result["info"].items():
                print(f"  - {k}: {v}")
        if result["warnings"]:
            print("Warnings:")
            for w in result["warnings"]:
                print(f"  - {w}")
        if result["errors"]:
            print("Errors:")
            for e in result["errors"]:
                print(f"  - {e}")

    # exit code útil para CI
    raise SystemExit(0 if result["status"] == "OK" else 1)


if __name__ == "__main__":
    main()
