'use client';

import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Generate TOC from headings
    const headings = document.querySelectorAll('.article-content h2, .article-content h3');
    const items: TocItem[] = [];

    headings.forEach((heading, index) => {
      const id = heading.id || `heading-${index}`;
      if (!heading.id) {
        heading.id = id;
      }

      items.push({
        id,
        text: heading.textContent || '',
        level: heading.tagName === 'H2' ? 2 : 3,
      });
    });

    setToc(items);

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  if (toc.length === 0) {
    return null;
  }

  return (
    <nav className="toc hidden xl:block" aria-label="Tabla de contenidos">
      <h3>📚 Contenido</h3>
      <ul>
        {toc.map((item) => (
          <li key={item.id} style={{ marginLeft: item.level === 3 ? '16px' : '0' }}>
            <a
              href={`#${item.id}`}
              className={activeId === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
