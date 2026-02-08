import os
import json
import re
from pathlib import Path

# Configuration
BLOG_DIR = 'src/content/blog'
KEYWORDS_FILE = 'seo-keyword-categorization.json'
TOP_700_FILE = 'top_700_keywords.md'
OUTPUT_REPORT = 'keyword-authority-study.md'

def get_top_700_keywords():
    if not os.path.exists(TOP_700_FILE):
        return []
    with open(TOP_700_FILE, 'r', encoding='utf-8') as f:
        return [line.strip().lower() for line in f if line.strip()]

def get_target_keywords():
    with open(KEYWORDS_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def extract_keywords_from_md(content):
    # Simple regex to extract keywords from YAML frontmatter without PyYAML
    # Looks for 'keywords:' followed by indented list items
    match = re.search(r'keywords:\s*\n((?:\s*-\s*".*?"\s*\n?)+)', content, re.MULTILINE)
    if match:
        keywords_block = match.group(1)
        return [kw.strip(' -"\n') for kw in keywords_block.split('\n') if kw.strip()]
    
    # Try alternative format without quotes
    match = re.search(r'keywords:\s*\n((?:\s*-\s*.*?\s*\n?)+)', content, re.MULTILINE)
    if match:
        keywords_block = match.group(1)
        return [kw.strip(' -"\n') for kw in keywords_block.split('\n') if kw.strip()]
    
    return []

def extract_title_from_md(content):
    match = re.search(r'title:\s*"(.*?)"', content)
    if match:
        return match.group(1)
    match = re.search(r"title:\s*'(.*?)'", content)
    if match:
        return match.group(1)
    return "No Title"

def extract_category_from_md(content):
    match = re.search(r'category:\s*"(.*?)"', content)
    if match:
        return match.group(1)
    match = re.search(r"category:\s*'(.*?)'", content)
    if match:
        return match.group(1)
    return "No Category"

def get_blog_posts():
    posts = []
    blog_path = Path(BLOG_DIR)
    # Search in both blog root and seo subdirectory
    for md_file in list(blog_path.glob('**/*.md')):
        with open(md_file, 'r', encoding='utf-8') as f:
            content = f.read()
            posts.append({
                'path': str(md_file).replace('/Users/lidia/Documents/focusonenglish/focusonenglish/', './'),
                'title': extract_title_from_md(content),
                'keywords': extract_keywords_from_md(content),
                'category': extract_category_from_md(content)
            })
    return posts

def analyze():
    target_data = get_target_keywords()
    top_700 = get_top_700_keywords()
    blog_posts = get_blog_posts()
    
    # Flatten target keywords and normalize (lowercase)
    all_target_keywords = {}
    for cat, keywords in target_data.items():
        for kw in keywords:
            kw_lower = kw.lower().strip()
            if kw_lower not in all_target_keywords:
                all_target_keywords[kw_lower] = {'original': kw, 'category': cat, 'posts': []}

    top_700_coverage = {kw: [] for kw in top_700}

    # Map blog posts to target keywords
    article_keywords_not_in_target = []
    
    for post in blog_posts:
        for kw in post['keywords']:
            kw_lower = kw.lower().strip()
            
            # Check target categorization
            if kw_lower in all_target_keywords:
                if post['path'] not in [p['path'] for p in all_target_keywords[kw_lower]['posts']]:
                    all_target_keywords[kw_lower]['posts'].append(post)
            else:
                article_keywords_not_in_target.append({
                    'keyword': kw,
                    'post': post
                })
            
            # Check top 700
            if kw_lower in top_700_coverage:
                if post['path'] not in [p['path'] for p in top_700_coverage[kw_lower]]:
                    top_700_coverage[kw_lower].append(post)

    # Generate Report
    with open(OUTPUT_REPORT, 'w', encoding='utf-8') as f:
        f.write("# Estudio de Autoridad de Dominio y Keywords\n\n")
        
        f.write("## 1. Análisis de Keywords Top 700\n")
        f.write("Evaluación de la cobertura de las 700 keywords más importantes.\n\n")
        
        top_covered = [kw for kw, posts in top_700_coverage.items() if posts]
        f.write(f"**Keywords Top 700 cubiertas:** {len(top_covered)} / {len(top_700)} ({len(top_covered)/len(top_700)*100:.2f}%)\n\n")
        
        if top_covered:
            f.write("### Keywords Top 700 con artículos:\n")
            for kw in sorted(top_covered):
                f.write(f"- **{kw}**\n")
                for post in top_700_coverage[kw]:
                    f.write(f"  - [{post['title']}]({post['path']})\n")
            f.write("\n")

        f.write("## 2. Keywords Objetivos Cubiertas (Categorización Completa)\n")
        f.write("A continuación se detallan las keywords de la lista maestra que ya tienen contenido asociado.\n\n")
        
        covered_count = 0
        total_targets = len(all_target_keywords)
        
        categories = sorted(target_data.keys())
        for cat in categories:
            cat_keywords = [kw for kw, data in all_target_keywords.items() if data['category'] == cat and data['posts']]
            if cat_keywords:
                f.write(f"### Categoría: {cat.capitalize()}\n")
                for kw_lower in sorted(cat_keywords):
                    data = all_target_keywords[kw_lower]
                    f.write(f"- **{data['original']}**\n")
                    for post in data['posts']:
                        f.write(f"  - [{post['title']}]({post['path']})\n")
                    covered_count += 1
                f.write("\n")

        f.write(f"**Total Keywords Cubiertas:** {covered_count} / {total_targets} ({covered_count/total_targets*100:.2f}%)\n\n")

        f.write("## 3. Content Gaps (Keywords Sin Artículos)\n")
        f.write("Keywords que estamos intentando posicionar pero para las que no tenemos artículos específicos vinculados.\n\n")
        
        uncovered_count = 0
        for cat in categories:
            cat_keywords = [kw for kw, data in all_target_keywords.items() if data['category'] == cat and not data['posts']]
            if cat_keywords:
                f.write(f"### Categoría: {cat.capitalize()}\n")
                for kw_lower in sorted(cat_keywords):
                    data = all_target_keywords[kw_lower]
                    f.write(f"- {data['original']}\n")
                    uncovered_count += 1
                f.write("\n")
        
        f.write(f"**Total Content Gaps:** {uncovered_count}\n\n")

        f.write("## 4. Keywords en Artículos no en Lista Maestra\n")
        f.write("Keywords que se están usando en el blog pero que no forman parte de la estrategia definida en `seo-keyword-categorization.json`.\n\n")
        
        # Group by keyword
        extra_kws = {}
        for item in article_keywords_not_in_target:
            kw = item['keyword']
            if kw not in extra_kws:
                extra_kws[kw] = []
            if item['post']['path'] not in [p['path'] for p in extra_kws[kw]]:
                extra_kws[kw].append(item['post'])
            
        for kw in sorted(extra_kws.keys()):
            f.write(f"- **{kw}**\n")
            for post in extra_kws[kw]:
                f.write(f"  - [{post['title']}]({post['path']})\n")
        
        f.write(f"\n**Total Keywords Extra:** {len(extra_kws)}\n")

    print(f"Reporte generado en {OUTPUT_REPORT}")

if __name__ == "__main__":
    analyze()
