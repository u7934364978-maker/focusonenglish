import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React, { createContext, useContext, useMemo, useRef } from "react";

interface VocabularyItem {
  word: string;
  definition: string;
}

const VocabularyContext = createContext<{
  vocabulary: VocabularyItem[];
  isFirstRef: React.MutableRefObject<boolean>;
} | null>(null);

function VocabularyTooltip({ word, definition, children, position = 'top' }: { word: string, definition: string, children: React.ReactNode, position?: 'top' | 'bottom' }) {
  const isBottom = position === 'bottom';
  
  return (
    <span className="group relative inline-block border-b-2 border-dotted border-indigo-500 cursor-help">
      <span className="text-indigo-700 dark:text-indigo-400 font-bold">{children}</span>
      <span className={[
        "absolute left-1/2 -translate-x-1/2 w-48 p-3 bg-slate-900 dark:bg-slate-800 text-white text-xs rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity pointer-events-none z-50 shadow-2xl border border-slate-700",
        isBottom ? "top-full mt-2" : "bottom-full mb-2"
      ].join(" ")}>
        <span className="block font-black text-white mb-1 uppercase tracking-widest">
          Vocabulary: <span className="text-indigo-400">{word}</span>
        </span>
        <span className="block text-slate-300 mt-1 leading-relaxed">
          {definition}
        </span>
        <span className={[
          "absolute left-1/2 -translate-x-1/2 border-8 border-transparent",
          isBottom ? "bottom-full border-b-slate-900 dark:border-b-slate-800" : "top-full border-t-slate-900 dark:border-t-slate-800"
        ].join(" ")}></span>
      </span>
    </span>
  );
}

/**
 * Hook to apply vocabulary tooltips to text nodes.
 * Non-recursive: relies on component overrides to handle nested structures.
 */
function useApplyTooltips() {
  const ctx = useContext(VocabularyContext);
  
  return (children: React.ReactNode): React.ReactNode => {
    if (!ctx || !ctx.vocabulary || ctx.vocabulary.length === 0) return children;

    // Sort vocabulary by length (longest first) to handle overlapping terms (e.g., "online banking" before "banking")
    const sortedVocab = [...ctx.vocabulary].sort((a, b) => b.word.length - a.word.length);

    return React.Children.map(children, (child) => {
      // ONLY process strings or numbers to prevent double tooltips in nested elements
      if (typeof child !== "string" && typeof child !== "number") return child;

      let parts: (string | React.ReactNode)[] = [child.toString()];
      const isFirst = ctx.isFirstRef.current;
      
      let foundAnyMatch = false;

      sortedVocab.forEach((vocab) => {
        const newParts: (string | React.ReactNode)[] = [];
        // Escape special chars and use word boundaries
        const escapedWord = vocab.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(`\\b(${escapedWord})\\b`, "gi");

        parts.forEach((part) => {
          if (typeof part !== "string") {
            newParts.push(part);
            return;
          }

          const splitText = part.split(regex);
          if (splitText.length > 1) {
            splitText.forEach((t, i) => {
              // split with capture group (match) results in [prefix, match, suffix, match, suffix...]
              // but we only want to wrap the parts that EXACTLY match the word
              if (t.toLowerCase() === vocab.word.toLowerCase()) {
                foundAnyMatch = true;
                newParts.push(
                  <VocabularyTooltip 
                    key={`${vocab.word}-${i}-${parts.length}`} 
                    word={vocab.word} 
                    definition={vocab.definition}
                    position={isFirst ? 'bottom' : 'top'}
                  >
                    {t}
                  </VocabularyTooltip>
                );
              } else if (t) {
                newParts.push(t);
              }
            });
          } else {
            newParts.push(part);
          }
        });
        parts = newParts;
      });

      if (foundAnyMatch) {
        ctx.isFirstRef.current = false;
      }

      return <>{parts}</>;
    });
  };
}

function looksLikeLooseListLine(line: string) {
  const t = line.trim();
  if (!t) return false;

  // Don't convert headings, bullets, numbering, quotes, code fences, tables, hr
  if (/^(#{1,6}\s)/.test(t)) return false;
  if (/^[-*+]\s+/.test(t)) return false;
  if (/^\d+\.\s+/.test(t)) return false;
  if (/^>/.test(t)) return false;
  if (/^```/.test(t)) return false;
  if (/^\|/.test(t)) return false;
  if (/^---+$/.test(t)) return false;

  // Short “word/phrase” lines are likely vocab items
  // Accept letters, numbers, spaces, apostrophes, slashes, hyphens, parentheses
  if (!/^[a-zA-Z0-9][a-zA-Z0-9\s'()/\-&.,]*$/.test(t)) return false;

  // Avoid converting full sentences (rough heuristic: if it ends with . ? !)
  if (/[.!?]$/.test(t)) return false;

  // Avoid very long lines (likely normal text)
  if (t.length > 40) return false;

  return true;
}

/**
 * Removes answer keys / solutions blocks from markdown content.
 * Hides from a trigger line until next markdown heading (# ...), or EOF.
 * Does not affect code fences.
 */
function stripAnswerKeys(input: string) {
  const lines = input.split("\n");
  const out: string[] = [];

  let inCode = false;
  let hiding = false;

  const isFence = (l: string) => l.trim().startsWith("```");
  const isHeading = (l: string) => /^(#{1,6})\s+/.test(l.trim());

  // Detect "Answers" even if the same line contains the key:
  // e.g. "Answers: 1) a 2) b"
  // Also covers: "Answer Key", "Solutions", with extra spaces.
  const isAnswerTrigger = (l: string) => {
    const t = l.trim().toLowerCase();
    return /^(answers?|solutions?|answer\s*key)\b/.test(t);
  };

  for (const line of lines) {
    if (isFence(line)) {
      inCode = !inCode;
      out.push(line);
      continue;
    }

    if (inCode) {
      out.push(line);
      continue;
    }

    if (!hiding && isAnswerTrigger(line)) {
      hiding = true;
      continue; // don't include trigger line
    }

    if (hiding) {
      if (isHeading(line)) {
        hiding = false;
        out.push(line);
      }
      continue;
    }

    out.push(line);
  }

  return out.join("\n");
}

function normalizeMarkdown(input: string) {
  const stripped = stripAnswerKeys(input);

  const lines = stripped.split("\n");
  const out: string[] = [];

  let inCode = false;
  let buffer: string[] = [];

  function flushBufferAsList() {
    if (!buffer.length) return;
    for (const b of buffer) out.push(`- ${b.trim()}`);
    buffer = [];
  }

  for (const raw of lines) {
    const line = raw;

    if (line.trim().startsWith("```")) {
      flushBufferAsList();
      inCode = !inCode;
      out.push(line);
      continue;
    }

    if (inCode) {
      out.push(line);
      continue;
    }

    if (!line.trim()) {
      flushBufferAsList();
      out.push(line);
      continue;
    }

    if (looksLikeLooseListLine(line)) {
      buffer.push(line);
      continue;
    }

    flushBufferAsList();
    out.push(line);
  }

  flushBufferAsList();
  return out.join("\n");
}

export default function Markdown({ content, vocabulary }: { content: string, vocabulary?: VocabularyItem[] }) {
  const normalized = normalizeMarkdown(content);
  const isFirstRef = useRef(true);

  // Reset the "at start" marker when content changes
  useMemo(() => {
    isFirstRef.current = true;
  }, [content]);

  const contextValue = useMemo(() => ({
    vocabulary: vocabulary || [],
    isFirstRef
  }), [vocabulary]);

  return (
    <VocabularyContext.Provider value={contextValue}>
      <MarkdownBody content={normalized} />
    </VocabularyContext.Provider>
  );
}

function MarkdownBody({ content }: { content: string }) {
  const components = useMarkdownComponents();

  return (
    <div
      className={[
        "prose max-w-none",
        "prose-slate dark:prose-invert",
        "text-slate-800 dark:text-slate-200",
        "prose-headings:text-slate-900 dark:prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight",
        "prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed",
        "prose-li:text-slate-700 dark:prose-li:text-slate-300",
        "prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-bold",
        "prose-h2:mt-6 prose-h2:mb-3",
        "prose-h3:mt-5 prose-h3:mb-2",
        "prose-hr:my-6 prose-hr:border-slate-200 dark:prose-hr:border-slate-800",
        "prose-ul:pl-5 prose-li:my-1",
        "prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:rounded-2xl",
        "prose-code:text-coral-700 dark:prose-code:text-coral-400",
        "prose-a:text-coral-700 dark:prose-a:text-coral-400 prose-a:font-bold",
      ].join(" ")}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

function useMarkdownComponents() {
  const applyTooltips = useApplyTooltips();

  return useMemo(() => ({
    // Override text-heavy components to apply tooltips
    p({ children }: any) {
      return <p>{applyTooltips(children)}</p>;
    },
    li({ children }: any) {
      return <li>{applyTooltips(children)}</li>;
    },
    strong({ children }: any) {
      return <strong>{applyTooltips(children)}</strong>;
    },
    em({ children }: any) {
      return <em>{applyTooltips(children)}</em>;
    },
    a({ children, ...props }: any) {
      return <a {...props}>{applyTooltips(children)}</a>;
    },

    // Callout visual (para tips en markdown usando "> ...")
    blockquote({ children }: any) {
      return (
        <div className="my-4 rounded-2xl border border-coral-200 dark:border-coral-800 bg-coral-50 dark:bg-coral-950/30 px-4 py-3 text-sm text-slate-800 dark:text-slate-200">
          <div className="font-black text-coral-900 dark:text-coral-400">Tip</div>
          <div className="mt-1">{applyTooltips(children)}</div>
        </div>
      );
    },

    // Separador suave (más “premium” que hr default)
    hr() {
      return <div className="my-6 h-px w-full bg-slate-200 dark:bg-slate-800" />;
    },

    // Tablas: wrapper scroll + estilos de celdas
    table({ children }: any) {
      return (
        <div className="my-4 overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <table className="w-full text-sm">{children}</table>
        </div>
      );
    },
    th({ children }: any) {
      return (
        <th className="bg-slate-50 dark:bg-slate-800/50 px-3 py-2 text-left text-xs font-black text-slate-600 dark:text-slate-400">
          {applyTooltips(children)}
        </th>
      );
    },
    td({ children }: any) {
      return (
        <td className="border-t border-slate-200 dark:border-slate-800 px-3 py-2 align-top text-slate-800 dark:text-slate-300">
          {applyTooltips(children)}
        </td>
      );
    },

    // Checklist: render de checkbox bonito (no interactivo)
    input(props: any) {
      if (props.type === "checkbox") {
        return (
          <span
            aria-hidden="true"
            className={[
              "mt-[2px] inline-flex h-4 w-4 flex-none items-center justify-center rounded border",
              props.checked
                ? "border-amber-500 bg-amber-500"
                : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800",
            ].join(" ")}
          />
        );
      }
      return <input {...props} />;
    },

    // Headings: scroll offset para navegación fluida
    h2({ children }: any) {
      return (
        <h2 className="mt-8 scroll-mt-24 text-xl font-black tracking-tight text-slate-900 dark:text-white">
          {applyTooltips(children)}
        </h2>
      );
    },
    h3({ children }: any) {
      return (
        <h3 className="mt-6 scroll-mt-24 text-lg font-black text-slate-900 dark:text-white">
          {applyTooltips(children)}
        </h3>
      );
    },
  }), [applyTooltips]);
}
