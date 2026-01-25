const path = require('path');
const fs = require('fs');

const localCourseService = {
  getProfessionalLesson(sector, level, trimester, weekId) {
    const baseDir = path.join(process.cwd(), 'src/content/cursos/trabajo', sector, level, trimester, weekId);
    
    if (!fs.existsSync(baseDir)) {
      return null;
    }

    const theoryPath = path.join(baseDir, 'theory.json');
    let theoryData = null;
    if (fs.existsSync(theoryPath)) {
      theoryData = JSON.parse(fs.readFileSync(theoryPath, 'utf8'));
    }

    if (!theoryData) return null;

    return {
      theoryContent: this.formatTheoryToMarkdown(theoryData)
    };
  },

  formatTheoryToMarkdown(theoryData) {
    if (!theoryData.sections) return '';
    return theoryData.sections
      .map((s) => `## ${s.title}\n\n${s.content}`)
      .join('\n\n');
  }
};

function stripAnswerKeys(input) {
  const lines = input.split("\n");
  const out = [];
  let inCode = false;
  let hiding = false;
  const isFence = (l) => l.trim().startsWith("```");
  const isHeading = (l) => /^(#{1,6})\s+/.test(l.trim());
  const isAnswerTrigger = (l) => {
    const t = l.trim().toLowerCase();
    return /^(answers?|solutions?|answer\s*key)\b/.test(t);
  };
  for (const line of lines) {
    if (isFence(line)) { inCode = !inCode; out.push(line); continue; }
    if (inCode) { out.push(line); continue; }
    if (!hiding && isAnswerTrigger(line)) { hiding = true; continue; }
    if (hiding) {
      if (isHeading(line)) { hiding = false; out.push(line); }
      continue;
    }
    out.push(line);
  }
  return out.join("\n");
}

function normalizeMarkdown(input) {
  const stripped = stripAnswerKeys(input);
  const lines = stripped.split("\n");
  const out = [];
  let inCode = false;
  let buffer = [];
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

function looksLikeLooseListLine(line) {
  const t = line.trim();
  if (!t) return false;
  if (/^(#{1,6}\s)/.test(t)) return false;
  if (/^[-*+]\s+/.test(t)) return false;
  if (/^\d+\.\s+/.test(t)) return false;
  if (/^>/.test(t)) return false;
  if (/^```/.test(t)) return false;
  if (/^\|/.test(t)) return false;
  if (/^---+$/.test(t)) return false;
  if (!/^[a-zA-Z0-9][a-zA-Z0-9\s'()/\-&.,]*$/.test(t)) return false;
  if (/[.!?]$/.test(t)) return false;
  if (t.length > 40) return false;
  return true;
}

const sector = 'finanzas';
const level = 'b1';
const trimester = 'trimestre1';
const week = 'semana05';

const lesson = localCourseService.getProfessionalLesson(sector, level, trimester, week);
if (lesson) {
  const normalized = normalizeMarkdown(lesson.theoryContent);
  console.log(`Original length: ${lesson.theoryContent.length}`);
  console.log(`Normalized length: ${normalized.length}`);
  console.log("--- First 200 chars of normalized ---");
  console.log(normalized.substring(0, 200));
}
