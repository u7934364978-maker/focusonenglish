import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

export default function Markdown({ content }: { content: string }) {
  const normalized = normalizeMarkdown(content);

  return (
    <div
      className={[
        "prose max-w-none",
        "prose-slate",
        "prose-headings:font-black prose-headings:tracking-tight",
        "prose-h2:mt-6 prose-h2:mb-3",
        "prose-h3:mt-5 prose-h3:mb-2",
        "prose-hr:my-6 prose-hr:border-slate-200",
        "prose-ul:pl-5 prose-li:my-1",
        "prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:rounded-2xl",
        "prose-code:text-violet-700",
        "prose-a:text-violet-700 prose-a:font-bold",
      ].join(" ")}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Callout visual (para tips en markdown usando "> ...")
          blockquote({ children }) {
            return (
              <div className="my-4 rounded-2xl border border-violet-200 bg-violet-50 px-4 py-3 text-sm text-slate-800">
                <div className="font-black text-violet-900">Tip</div>
                <div className="mt-1">{children}</div>
              </div>
            );
          },

          // Separador suave (más “premium” que hr default)
          hr() {
            return <div className="my-6 h-px w-full bg-slate-200" />;
          },

          // Tablas: wrapper scroll + estilos de celdas
          table({ children }) {
            return (
              <div className="my-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                <table className="w-full text-sm">{children}</table>
              </div>
            );
          },
          th({ children }) {
            return (
              <th className="bg-slate-50 px-3 py-2 text-left text-xs font-black text-slate-600">
                {children}
              </th>
            );
          },
          td({ children }) {
            return (
              <td className="border-t border-slate-200 px-3 py-2 align-top text-slate-800">
                {children}
              </td>
            );
          },

          // Checklist: render de checkbox bonito (no interactivo)
          input(props) {
            if (props.type === "checkbox") {
              return (
                <span
                  aria-hidden="true"
                  className={[
                    "mt-[2px] inline-flex h-4 w-4 flex-none items-center justify-center rounded border",
                    props.checked
                      ? "border-emerald-500 bg-emerald-500"
                      : "border-slate-300 bg-white",
                  ].join(" ")}
                />
              );
            }
            return <input {...props} />;
          },

          // Headings: scroll offset para navegación fluida
          h2({ children }) {
            return (
              <h2 className="mt-8 scroll-mt-24 text-xl font-black tracking-tight text-slate-900">
                {children}
              </h2>
            );
          },
          h3({ children }) {
            return (
              <h3 className="mt-6 scroll-mt-24 text-lg font-black text-slate-900">
                {children}
              </h3>
            );
          },
        }}
      >
        {normalized}
      </ReactMarkdown>
    </div>
  );
}
