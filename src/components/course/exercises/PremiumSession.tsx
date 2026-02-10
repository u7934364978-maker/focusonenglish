"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  CheckCircle2, 
  AlertCircle, 
  Volume2, 
  Play, 
  Star,
  Trophy,
  ArrowRight,
  RotateCcw,
  Lightbulb,
  Sparkles,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { UnitData, PremiumBlock, PremiumContent } from "@/types/premium-course";
import { getSolutionText, isLikelyEnglish, getEncouragingMessage } from "@/lib/premium-utils";
import WordSearchExercise from "../../exercises/WordSearchExercise";
import CrosswordExercise from "../../exercises/CrosswordExercise";

interface Props {
  unitData: UnitData;
  onComplete: () => void;
  onExit: () => void;
  onNextUnit?: () => void;
  onInteractionCorrect?: (interactionId: string) => void;
  onPerformanceUpdate?: (interactionId: string, quality: number) => void;
  onConceptUpdate?: (tags: string[], success: boolean) => void;
  initialIndex?: number;
  continuousMode?: boolean;
  customQueue?: any[];
  userId?: string;
}

const normalizeForComparison = (text: string) => {
  if (!text) return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/['’‘´`]/g, "'") // Normalize quotes
    .replace(/\s+/g, " ")     // Normalize spaces
    .replace(/[.?!,;:\-_(){}\[\]]/g, "") // Remove basic punctuation for comparison
    .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remove accents
};

export default function PremiumCourseSession({ 
  unitData, 
  onComplete, 
  onExit, 
  onNextUnit,
  onInteractionCorrect, 
  onPerformanceUpdate, 
  onConceptUpdate,
  initialIndex = 0, 
  continuousMode = false,
  customQueue, 
  userId 
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [showInteraction, setShowInteraction] = useState(false);
  const [interactionIndex, setInteractionIndex] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean; message: string } | null>(null);
  const [failCount, setFailCount] = useState<Record<string, number>>({});
  const [isRepairing, setIsRepairing] = useState(false);
  const [selectedWords, setSelectedWords] = useState<any[]>([]);
  const [matchingSelections, setMatchingSelections] = useState<{left?: string, right?: string}>({});
  const [matchingPairs, setMatchingPairs] = useState<Record<string, string>>({});
  const [categorizedItems, setCategorizedItems] = useState<Record<string, string>>({});
  const [inputValues, setInputValues] = useState<Record<number, string>>({});
  const [shuffledRight, setShuffledRight] = useState<any[]>([]);
  const [shuffledOptions, setShuffledOptions] = useState<any[]>([]);
  const [selectedCategorizationItem, setSelectedCategorizationItem] = useState<string | null>(null);
  const [showSummary, setShowSummary] = useState(false);
  const [audioCache, setAudioCache] = useState<Record<string, string>>({});
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [activeGapIndex, setActiveGapIndex] = useState(0);
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isExplaining, setIsExplaining] = useState(false);
  
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const prefetchingRef = useRef<Set<string>>(new Set());

  // Flatten and normalize all blocks into a single exercise queue
  const queue = useMemo(() => {
    if (customQueue) return customQueue;
    const normalizeInteraction = (interaction: any): any => {
      if (!interaction) return null;
      
      const normalized = { ...interaction };

      // Standardize correct_answer
      if (!normalized.correct_answer) {
        normalized.correct_answer = normalized.correctAnswer || normalized.answer || normalized.solution || normalized.correct_answer_en || normalized.correct_answer_es || normalized.gap || (Array.isArray(normalized.acceptableAnswers) ? normalized.acceptableAnswers[0] : normalized.acceptableAnswers);
      }

      // Handle cases where correct_answer is an object (like in matching) but type is wrong
      if (typeof normalized.correct_answer === 'object' && !Array.isArray(normalized.correct_answer) && normalized.type !== 'matching') {
        normalized.type = 'matching';
      }

      // Normalize type (handle camelCase from migrations)
      const typeMap: Record<string, string> = {
        'multipleChoice': 'multiple_choice',
        'multiple-choice': 'multiple_choice',
        'speaking-analysis': 'multiple_choice',
        'reading-comprehension': 'multiple_choice',
        'pronunciation-practice': 'audio_player',
        'fillBlanks': 'fill_blanks',
        'fill_blank': 'fill_blanks',
        'fill-blank': 'fill_blanks',
        'fill-blanks': 'fill_blanks',
        'drag-drop': 'reorder_words',
        'sentence-building': 'reorder_words',
        'matching': 'matching',
        'flashcard': 'flashcard',
        'audio-player': 'audio_player',
        'short-answer': 'fill_blanks',
        'fill-blanks-mc': 'fill_blanks'
      };
      if (typeMap[normalized.type]) {
        normalized.type = typeMap[normalized.type];
      }

      // Normalize prompt
      if (normalized.prompt && !normalized.prompt_es) {
        normalized.prompt_es = normalized.prompt;
      }
      if (normalized.instructions && !normalized.prompt_es) {
        normalized.prompt_es = normalized.instructions;
      }
      if (normalized.question && !normalized.prompt_es) {
        normalized.prompt_es = normalized.question;
      }
      if (normalized.title && !normalized.prompt_es) {
        normalized.prompt_es = normalized.title;
      }
      if (normalized.topic && !normalized.prompt_es) {
        normalized.prompt_es = normalized.topic;
      }
      if (!normalized.prompt_es) {
        normalized.prompt_es = "Selecciona la respuesta correcta:";
      }

      // Normalize stimulus
      if (normalized.text && !normalized.stimulus_en) {
        normalized.stimulus_en = normalized.text;
      }
      if (normalized.stimulus_en && !normalized.text) {
        normalized.text = normalized.stimulus_en;
      }
      if (normalized.scenario && !normalized.stimulus_en) {
        normalized.stimulus_en = normalized.scenario;
      }
      if (normalized.sentence && !normalized.stimulus_en) {
        normalized.stimulus_en = normalized.sentence;
      }
      if (normalized.context && !normalized.stimulus_en) {
        normalized.stimulus_en = normalized.context;
      }
      if (normalized.textPassage && !normalized.stimulus_en) {
        normalized.stimulus_en = normalized.textPassage;
      }
      if (normalized.cloze && !normalized.stimulus_en) {
        normalized.stimulus_en = normalized.cloze;
      }
      if (normalized.gappedText && !normalized.stimulus_en) {
        normalized.stimulus_en = normalized.gappedText;
      }
      if (normalized.paragraph && !normalized.stimulus_en) {
        normalized.stimulus_en = normalized.paragraph;
      }
      
      // Handle the case where stimulus is in the prompt but there is a text field
      if (normalized.type === 'fill_blanks' && !normalized.stimulus_en && normalized.prompt_es && normalized.prompt_es.includes('___')) {
        normalized.stimulus_en = normalized.prompt_es;
        normalized.prompt_es = "Completa el espacio:";
      }

      // Normalize options (handle array of strings from migrations)
      if (Array.isArray(normalized.options) && normalized.options.length > 0 && typeof normalized.options[0] === 'string') {
        const ans = normalized.correctAnswer || normalized.answer || normalized.correct_answer || normalized.correct_answer_en;
        const hasLetterAnswer = typeof ans === 'string' && /^[A-E]$/.test(ans);
        normalized.options = normalized.options.map((opt: string, idx: number) => ({
          id: hasLetterAnswer ? String.fromCharCode(65 + idx) : idx.toString(),
          text: opt
        }));
      }

      // Normalize correct_answer for multiple_choice
      if (normalized.answerIndex !== undefined && normalized.type === 'multiple_choice') {
        normalized.correct_answer = normalized.answerIndex.toString();
      }

      // Normalize correct_answer for fill_blanks
      if (normalized.answers && !normalized.correct_answer) {
        normalized.correct_answer = Array.isArray(normalized.answers) ? normalized.answers.join(' / ') : normalized.answers;
      }
      if (normalized.acceptableAnswers && !normalized.correct_answer) {
        normalized.correct_answer = Array.isArray(normalized.acceptableAnswers) ? normalized.acceptableAnswers.join(' / ') : normalized.acceptableAnswers;
      }
      if (normalized.answer && !normalized.correct_answer) {
        normalized.correct_answer = normalized.answer;
      }
      
      // Clean up stimulus_en for fill_blank if it contains the answer in brackets or parentheses
      if (['fill_blanks', 'fill_blank', 'fill-blank', 'fill-blanks-mc', 'transformation'].includes(normalized.type) && normalized.stimulus_en) {
        // Remove bracketed or parenthesized answers even if they don't have underscores yet
        // Patterns: (answer), [answer], ______ (answer), (answer) ______, etc.
        const cleanStimulus = (text: string) => {
          if (!text) return text;
          let cleaned = text;
          
          // 1. Remove parenthesized/bracketed text that matches the correct answer
          if (normalized.correct_answer) {
            const ans = String(normalized.correct_answer).toLowerCase().trim();
            // Escapar caracteres especiales para regex
            const escapedAns = ans.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            // Regex que busca la respuesta entre paréntesis o corchetes, con posibles espacios alrededor
            const ansRegex = new RegExp(`\\s*[\\(\\[]\\s*${escapedAns}\\s*[\\)\\]]\\s*`, 'gi');
            cleaned = cleaned.replace(ansRegex, ' ');
          }

          // 2. Remove common AI patterns like "______ (answer)" or "______ [answer]"
          // EXCEPCIÓN: No eliminar si contiene indicadores pedagógicos
          cleaned = cleaned.replace(/_{2,}\s*[\(\[](?![^\]\)]*(?:positive|negative|past|present|future|verb|noun|adj))[^\]\)]+[\)\]]/gi, '______');
          cleaned = cleaned.replace(/[\(\[](?![^\]\)]*(?:positive|negative|past|present|future|verb|noun|adj))[^\]\)]+[\)\]]\s*_{2,}/gi, '______');
          
          // 3. Strip any parentheses that contain exactly one word which matches any of the answers
          if (normalized.correct_answer) {
            const answers = String(normalized.correct_answer).toLowerCase().split(/[/\s,]+/).filter(Boolean);
            answers.forEach(a => {
              const esc = a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
              const r = new RegExp(`\\s*[\\(\\[]\\s*${esc}\\s*[\\)\\]]\\s*`, 'gi');
              cleaned = cleaned.replace(r, ' ');
            });
          }

          // 4. Remove standalone parenthesized words if they look like answers (1-3 words)
          // Solo si hay guiones bajos cerca, para no romper explicaciones legítimas
          // EXCEPCIÓN: No eliminar si contiene indicadores pedagógicos como "positive", "negative", "past", "present", etc.
          if (cleaned.includes('___') || /_{2,}/.test(cleaned)) {
            cleaned = cleaned.replace(/\s*\((?![^)]*(?:positive|negative|past|present|future|verb|noun|adj))[^)]+\)\s*/gi, ' ')
                             .replace(/\s*\[(?![^\]]*(?:positive|negative|past|present|future|verb|noun|adj))[^\]]+\]\s*/gi, ' ');
          }

          return cleaned.trim().replace(/\s+/g, ' ');
        };

        normalized.stimulus_en = cleanStimulus(normalized.stimulus_en);
        
        if (normalized.prompt_es) {
          normalized.prompt_es = cleanStimulus(normalized.prompt_es);
        }
      }

      // Final check: if stimulus_en and prompt_es are identical, clear prompt_es
      if (normalized.stimulus_en && normalized.prompt_es && 
          normalized.stimulus_en.toLowerCase().trim() === normalized.prompt_es.toLowerCase().trim()) {
        normalized.prompt_es = "Completa el espacio:";
      }

      // Final check: if stimulus_en contains many underscores but no "___", normalize it to "___" for easier processing
      if (normalized.stimulus_en && /_{4,}/.test(normalized.stimulus_en)) {
        normalized.stimulus_en = normalized.stimulus_en.replace(/_{4,}/g, '___');
      }

      // Normalize pairs for matching
      if (Array.isArray(normalized.pairs) && normalized.pairs.length > 0 && normalized.pairs[0].word) {
        normalized.pairs = normalized.pairs.map((p: any) => ({
          id: p.id || Math.random().toString(36).substr(2, 9),
          left: p.word,
          right: p.correctMatch
        }));
      }

      // Normalize reorder_words (drag-drop)
      if (normalized.type === 'reorder_words') {
        if (normalized.words && !normalized.options) {
          normalized.options = normalized.words.map((word: string, idx: number) => ({
            id: idx.toString(),
            text: word
          }));
        }

        if (normalized.correctOrder && Array.isArray(normalized.correctOrder) && normalized.options) {
          // Map correctOrder (array of strings) to option IDs
          // Robust mapping that handles duplicates and case-insensitivity
          const tempOptions = [...normalized.options];
          normalized.correct_answer = normalized.correctOrder.map((word: string) => {
            const index = tempOptions.findIndex((o: any) => 
              normalizeForComparison(o.text) === normalizeForComparison(word)
            );
            if (index !== -1) {
              const foundId = tempOptions[index].id;
              // "Consume" this option so it's not reused for the next identical word in correctOrder
              tempOptions.splice(index, 1);
              return foundId;
            }
            return null;
          }).filter(Boolean);
        }

        if (normalized.correctSentence && !normalized.options) {
          const words = normalized.correctSentence.split(' ');
          normalized.options = words.map((word: string, idx: number) => ({
            id: idx.toString(),
            text: word
          }));
          normalized.correct_answer = (normalized.options || []).map((o: any) => o.id);
        } else if (typeof normalized.correct_answer === 'string' && normalized.options) {
          // If correct_answer is a string but type is reorder_words, try to map it to IDs
          const words = normalized.correct_answer.split(' ');
          normalized.correct_answer = words.map((w: string) => 
            normalized.options.find((o: any) => normalizeForComparison(o.text) === normalizeForComparison(w))?.id
          ).filter(Boolean);
        }
      }

      // Normalize flashcards
      if (normalized.type === 'flashcard' && !normalized.flashcards && normalized.stimulus_en) {
        normalized.flashcards = [{
          front: normalized.stimulus_en,
          back: normalized.correct_answer || normalized.stimulus_es || '',
          pronunciation: normalized.pronunciation
        }];
      }

      return normalized;
    };

    const items: any[] = [];
    unitData.blocks.forEach((block: PremiumBlock) => {
      let blockStimulus: string | null = null;
      block.content.forEach((content: PremiumContent) => {
        // Capture stimulus from items that have it (reading context)
        const currentStimulus = content.stimulus_en || content.text || content.textPassage || content.scenario;
        if (currentStimulus && (content.type === 'reading-comprehension' || (content.concept_tags && content.concept_tags.includes('reading')))) {
          blockStimulus = currentStimulus;
        }

        // Handle multi-question exercises from A2 generation
        // Crosswords and Word Searches should NOT be flattened even if they have 'items' or 'words'
        const shouldNotFlatten = ['crossword', 'word-search', 'word_search'].includes(content.type as string);
        const subQuestions = shouldNotFlatten ? null : (content.questions || content.transformations || content.items || content.sentences || (content.type === 'reading-comprehension' ? content.reading : null));
        
        if (subQuestions && Array.isArray(subQuestions)) {
          // Collect all correct answers to use as a word bank if it's a fill-blank exercise without options
          const isFillBlankBlock = ['fill_blank', 'fill-blank', 'fill_blanks', 'transformation'].includes(content.type as string);
          let blockWordBank: any[] = [];
          if (isFillBlankBlock) {
            const allPossibleAnswers = new Set<string>();
            subQuestions.forEach(q => {
              const answers = q.acceptableAnswers || q.answer || q.answers || q.correct_answer || q.correctAnswer || q.gap;
              if (Array.isArray(answers)) answers.forEach(a => allPossibleAnswers.add(String(a)));
              else if (answers) allPossibleAnswers.add(String(answers));
            });
            blockWordBank = Array.from(allPossibleAnswers).map((text, idx) => ({ id: text, text }));
          }

          subQuestions.forEach((q: any, qIdx: number) => {
            // Ensure we don't lose the main instructions or title, but avoid duplicates
            const rawInstructions = (q.instructions || content.instructions || content.prompt_es || content.topic || content.title || block.title || "").trim();
            const qText = (q.question || q.prompt || q.scenario || q.sentence || "").trim();
            
            // Stronger duplication check
            const clean = (t: string) => t.toLowerCase().replace(/[.:!¡¿?]/g, '').trim();
            const isDuplicate = qText && rawInstructions && 
                              (clean(rawInstructions).includes(clean(qText).substring(0, 20)) ||
                               clean(qText).includes(clean(rawInstructions).substring(0, 20)));

            const flattened = {
              ...content,
              ...q,
              interaction_id: `${content.interaction_id || 'ex'}-q${qIdx}`,
              main_instructions: isDuplicate ? (block.title || "Exercise") : rawInstructions,
              blockTitle: block.title
            };

            // Apply word bank if it's a fill-blank block and current question has no options
            if (isFillBlankBlock && (!flattened.options || flattened.options.length === 0) && blockWordBank.length > 1) {
              flattened.options = blockWordBank;
            }
            
            // Map question-specific fields to standard fields
            if (q.question && !flattened.prompt_es) {
              flattened.prompt_es = q.question;
            }
            if (q.scenario && !flattened.stimulus_en) {
              flattened.stimulus_en = q.scenario;
            }
            if (q.sentence && !flattened.stimulus_en) {
              flattened.stimulus_en = q.sentence;
            }
            if (q.context && !flattened.stimulus_en) {
              flattened.stimulus_en = q.context;
            }
            if (q.question && !flattened.stimulus_en) {
              flattened.stimulus_en = q.question;
            }
            if (content.textPassage && !flattened.stimulus_en) {
              flattened.stimulus_en = content.textPassage;
            }
            if (!flattened.stimulus_en && blockStimulus && (flattened.type === 'true_false' || (flattened.concept_tags && flattened.concept_tags.includes('reading')))) {
              flattened.stimulus_en = blockStimulus;
            }

            // Clean up stimulus for fill-blank exercises
            if (flattened.stimulus_en && isFillBlankBlock) {
              const answer = String(flattened.correct_answer || flattened.gap || q.answer || q.acceptableAnswers?.[0] || "");
              if (answer) {
                const escapedAnswer = answer.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                // Regex to handle " (answer - extra)" -> "(extra)"
                const fullHintRegex = new RegExp(`\\(\\s*${escapedAnswer}\\s*-\\s*([^)]+)\\)`, 'gi');
                const simpleHintRegex = new RegExp(`\\(\\s*${escapedAnswer}\\s*\\)`, 'gi');
                
                if (fullHintRegex.test(flattened.stimulus_en)) {
                  flattened.stimulus_en = flattened.stimulus_en.replace(fullHintRegex, '($1)');
                } else {
                  flattened.stimulus_en = flattened.stimulus_en.replace(simpleHintRegex, '');
                }
              }
              // Also replace multiple underscores with a single standard gap marker
              flattened.stimulus_en = flattened.stimulus_en.replace(/_{2,}/g, '___').replace(/\s{2,}/g, ' ').trim();
            }
            if (Array.isArray(q.options) && typeof q.options[0] === 'string') {
              flattened.options = q.options.map((opt: string, idx: number) => ({
                id: q.type === 'multiple-choice' && opt.includes(') ') ? opt.split(') ')[0] : String.fromCharCode(65 + idx),
                text: opt.includes(') ') ? opt.split(') ')[1] : opt
              }));
            }
            if (q.correctAnswer && !flattened.correct_answer) {
              flattened.correct_answer = q.correctAnswer;
            }
            if (q.answer && !flattened.correct_answer) {
              flattened.correct_answer = q.answer;
            }
            if (q.answers && !flattened.correct_answer) {
              flattened.correct_answer = Array.isArray(q.answers) ? q.answers.join(' / ') : q.answers;
            }
            if (q.solution && !flattened.correct_answer) {
              flattened.correct_answer = q.solution;
            }
            if (q.correct_answer && !flattened.correct_answer) {
              flattened.correct_answer = q.correct_answer;
            }
            if (q.acceptableAnswers && !flattened.correct_answer) {
              flattened.correct_answer = Array.isArray(q.acceptableAnswers) ? q.acceptableAnswers.join(' / ') : q.acceptableAnswers;
            }
            if (q.correct_answer_es && !flattened.correct_answer_es) {
              flattened.correct_answer_es = q.correct_answer_es;
            }
            if (q.explanation && !flattened.feedback_correct_es) {
              flattened.feedback_correct_es = q.explanation;
            }

            // Handle reorder_words fields in sub-questions
            if (q.words && q.correctOrder && !flattened.options) {
              flattened.type = 'reorder_words';
              flattened.options = (q.words || []).map((w: string, idx: number) => ({ id: idx.toString(), text: w }));
              flattened.correct_answer = (Array.isArray(q.correctOrder) ? q.correctOrder : []).map((w: string) => 
                (flattened.options || []).find((o: any) => o.text === w)?.id
              ).filter(Boolean);
            }

            items.push(normalizeInteraction(flattened));
          });
        } 
        else if (content.sentences && Array.isArray(content.sentences) && content.type === 'sentence-building') {
          content.sentences.forEach((s: any, sIdx: number) => {
            items.push(normalizeInteraction({
              ...content,
              ...s,
              type: 'reorder_words',
              interaction_id: `${content.interaction_id || 'ex'}-s${sIdx}`,
              prompt_es: content.instructions || "Ordena la oración:",
              correctSentence: Array.isArray(s.correctOrder) ? s.correctOrder.join(' ') : (s.correctOrder || ""),
              options: (Array.isArray(s.words) ? s.words : []).map((w: string, idx: number) => ({ id: idx.toString(), text: w })),
              blockTitle: block.title
            }));
          });
        }
        else if (content.targetSentences && Array.isArray(content.targetSentences) && content.type === 'pronunciation-practice') {
          content.targetSentences.forEach((s: any, sIdx: number) => {
            items.push(normalizeInteraction({
              ...content,
              ...s,
              type: 'audio_player',
              interaction_id: `${content.interaction_id || 'ex'}-p${sIdx}`,
              prompt_es: s.spanish || s.spanishTranslation || content.instructions || "Escucha y repite:",
              stimulus_en: s.english || s.englishSentence,
              audioUrl: s.audioModelURL || s.audioModelUrl,
              tts_en: s.english || s.englishSentence,
              pronunciationTips: s.pronunciationTips || s.pronunciation_tips,
              phonetic: s.phonetic || s.phoneticTranscription,
              blockTitle: block.title
            }));
          });
        }
        else {
          const finalItem = { ...content, blockTitle: block.title };
          if (!finalItem.stimulus_en && blockStimulus && (finalItem.type === 'true_false' || (finalItem.concept_tags && finalItem.concept_tags.includes('reading')))) {
            finalItem.stimulus_en = blockStimulus;
          }
          items.push(normalizeInteraction(finalItem));
        }
      });
    });
    return items;
  }, [unitData]);

  // Reset interaction state when current item changes
  useEffect(() => {
    setSelectedOption(null);
    setIsCorrect(null);
    setFeedback(null);
    setSelectedWords([]);
    setMatchingPairs({});
    setMatchingSelections({});
    setInputValues({});
    setCategorizedItems({});
    setSelectedCategorizationItem(null);
    setFlashcardIndex(0);
    setIsFlipped(false);
    setShuffledRight([]);
    setShuffledOptions([]);
    setAiExplanation(null);
    setIsExplaining(false);
  }, [currentIndex]);

  const handleRequestAIExplanation = async () => {
    const interaction = isVideoMode ? currentItem.video.interactions[interactionIndex] : currentItem;
    if (!interaction || isExplaining || aiExplanation) return;

    // Obtener ID de forma robusta
    const id = interaction.interaction_id || interaction.id;
    if (!id) {
      console.warn("Cannot request explanation: interaction_id is missing", interaction);
      return;
    }

    setIsExplaining(true);
    try {
      // Enviar solo lo necesario para evitar payloads pesados y asegurar compatibilidad
      const response = await fetch('/api/course/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          interaction: {
            interaction_id: id,
            type: interaction.type,
            prompt_es: interaction.prompt_es || interaction.prompt,
            stimulus_en: interaction.stimulus_en || interaction.text,
            correct_answer: interaction.correct_answer || interaction.correctAnswer
          } 
        }),
      });
      
      const data = await response.json();
      if (data.success) {
        setAiExplanation(data.explanation);
      } else {
        setAiExplanation("Lo siento, no pude generar una explicación en este momento.");
      }
    } catch (error) {
      console.error("AI Explanation Error:", error);
      setAiExplanation("Error de conexión al generar la explicación.");
    } finally {
      setIsExplaining(false);
    }
  };

  const currentItem = queue[currentIndex];
  const progress = (currentIndex / queue.length) * 100;

  // Auto-trigger AI explanation when feedback is shown
  useEffect(() => {
    let mounted = true;

    if (feedback && !aiExplanation && !isExplaining) {
      const interaction = isVideoMode ? currentItem?.video?.interactions?.[interactionIndex] : currentItem;
      if (interaction && !interaction.explanation) {
        // Pequeño delay para asegurar que el feedback esté renderizado
        const timer = setTimeout(() => {
          if (mounted) handleRequestAIExplanation();
        }, 100);
        return () => { 
          mounted = false;
          clearTimeout(timer); 
        };
      }
    }
    return () => { mounted = false; };
  }, [feedback, aiExplanation, isExplaining, currentIndex, interactionIndex, isVideoMode, currentItem]);

  const playAudio = async (url?: string, text?: string) => {
    if (!url && !text) return;
    
    // Stop current audio if playing
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current = null;
    }

    try {
      if (url) {
        try {
          const audio = new Audio(url);
          currentAudioRef.current = audio;
          // No acelerar sonidos de sistema
          if (!url.includes('correct.mp3') && !url.includes('wrong.mp3')) {
            audio.playbackRate = 1.1;
          }
          await audio.play();
          return;
        } catch (error) {
          console.warn('Failed to play static audio, falling back to TTS:', error);
          if (!text) return;
        }
      }
      
      if (text) {
        let audioUrl = audioCache[text];
        
        if (!audioUrl) {
          const response = await fetch('/api/generate-audio', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
          });
          if (!response.ok) throw new Error('Failed to generate audio');
          const blob = await response.blob();
          audioUrl = URL.createObjectURL(blob);
          setAudioCache(prev => ({ ...prev, [text]: audioUrl }));
        }

        const audio = new Audio(audioUrl);
        currentAudioRef.current = audio;
        audio.playbackRate = 1.1; // Aumentar ligeramente la velocidad para sonar más natural
        await audio.play();
      }
    } catch (e) {
      console.error("Audio play failed", e);
    }
  };

  // Pre-fetch audio logic
  useEffect(() => {
    const extractTextsToPreload = (item: any): string[] => {
      const texts: string[] = [];
      if (!item) return texts;

      if (item.stimulus_en) texts.push(item.stimulus_en);
      if (item.prompt_en) texts.push(item.prompt_en);
      if (item.text) texts.push(item.text);
      
      if (item.options) {
        item.options.forEach((opt: any) => {
          if (opt.text && isLikelyEnglish(opt.text)) texts.push(opt.text);
        });
      }

      if (item.pairs) {
        item.pairs.forEach((p: any) => {
          if (p.left && isLikelyEnglish(p.left)) texts.push(p.left);
          if (p.right && isLikelyEnglish(p.right)) texts.push(p.right);
        });
      }

      if (item.profiles) {
        item.profiles.forEach((p: any) => {
          if (p.name && p.description) texts.push(`${p.name}. ${p.description}`);
        });
      }

      if (item.descriptions) {
        item.descriptions.forEach((d: any) => {
          if (d.title && d.content) texts.push(`${d.title}. ${d.content}`);
        });
      }

      if (item.main_text) {
        const fullText = item.main_text.replace(/\[GAP \d+\]/g, '...');
        texts.push(fullText);
      }

      if (item.removed_paragraphs) {
        item.removed_paragraphs.forEach((p: any) => {
          if (p.text) texts.push(p.text);
        });
      }

      const solution = getSolutionText(item);
      if (solution && isLikelyEnglish(solution)) texts.push(solution);

      if (item.type === 'true_false' && item.correct_sentence_en) {
          texts.push(item.correct_sentence_en);
      }

      return [...new Set(texts)].filter(t => t.trim().length > 0);
    };

    const preloadNextAudios = async () => {
      // Preload current and next 2 items
      const itemsToPreload = [
        queue[currentIndex],
        queue[currentIndex + 1],
        queue[currentIndex + 2]
      ].filter(Boolean);

      const allTexts = itemsToPreload.flatMap(extractTextsToPreload);
      const uniqueTexts = [...new Set(allTexts)];

      for (const text of uniqueTexts) {
        if (!audioCache[text] && !prefetchingRef.current.has(text)) {
          prefetchingRef.current.add(text);
          try {
            const response = await fetch('/api/generate-audio', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ text }),
            });
            if (response.ok) {
              const blob = await response.blob();
              const audioUrl = URL.createObjectURL(blob);
              setAudioCache(prev => ({ ...prev, [text]: audioUrl }));
            }
          } catch (e) {
            console.error("Prefetch failed for:", text);
          } finally {
            prefetchingRef.current.delete(text);
          }
        }
      }
    };

    preloadNextAudios();
  }, [currentIndex, queue, audioCache]);

  useEffect(() => {
    if (currentItem?.video) {
      setIsVideoMode(true);
    } else {
      setIsVideoMode(false);
    }

    const interaction = currentItem?.video
      ? currentItem.video.interactions[interactionIndex]
      : currentItem;
      
    if ((interaction?.type === 'matching' || interaction?.type === 'vocabulary-match') && shuffledRight.length === 0) {
      const pairs = (interaction.type === 'vocabulary-match') 
        ? (interaction.content?.pairs || interaction.pairs || [])
        : (interaction.pairs || []);
        
      const rightItems = pairs.map((p: any) => ({ 
        id: p.id, 
        text: (interaction.type === 'vocabulary-match') ? p.correctMatch : p.right 
      }));
      // Fisher-Yates shuffle
      const shuffled = [...rightItems];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffledRight(shuffled);
    }

    if (interaction?.type === 'reorder_words' && shuffledOptions.length === 0) {
      // Fisher-Yates shuffle
      const shuffled = [...(interaction.options || [])];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      setShuffledOptions(shuffled);
    }
  }, [currentItem, interactionIndex, shuffledRight.length, shuffledOptions.length]);

  // Robust normalization for comparison
  const handleNext = () => {
    setSelectedWords([]);
    setShuffledRight([]);
    setShuffledOptions([]);
    setMatchingPairs({});
    setMatchingSelections({});
    setInputValues({});
    setCategorizedItems({});
    setSelectedCategorizationItem(null);
    setFlashcardIndex(0);
    setIsFlipped(false);
    setShowHint(false);
    setActiveGapIndex(0);
    setFeedback(null);
    setSelectedOption(null);
    setIsCorrect(null);
    setAiExplanation(null);
    setIsExplaining(false);

    if (isVideoMode) {
      const video = currentItem.video;
      if (showInteraction) return;

      if (interactionIndex < video.interactions.length) {
        setShowInteraction(true);
      } else if (currentSceneIndex < video.scenes.length - 1) {
        setCurrentSceneIndex(currentSceneIndex + 1);
        setInteractionIndex(0);
      } else {
        if (currentIndex < queue.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setIsVideoMode(false);
          setCurrentSceneIndex(0);
          setInteractionIndex(0);
        } else {
          if (continuousMode) {
            if (onNextUnit) onNextUnit();
            else onComplete();
          } else {
            setShowSummary(true);
          }
        }
      }
    } else {
      if (currentIndex < queue.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        if (continuousMode) {
          if (onNextUnit) onNextUnit();
          else onComplete();
        } else {
          setShowSummary(true);
        }
      }
    }
  };

  const handleCheckAnswer = (optionId: any) => {
    const interaction = isVideoMode ? currentItem.video.interactions[interactionIndex] : currentItem;
    let isAnswerCorrect = false;

    if (interaction.type === 'reorder_words') {
      const normalizeSentence = (text: string) => {
        return normalizeForComparison(text)
          .replace(/\s+/g, '') // Remove ALL spaces for comparison
          .trim();
      };

      const selectedText = (Array.isArray(optionId) ? optionId : []).map(id => 
        (interaction.options || []).find((o: any) => o.id === id)?.text
      ).join('');
      
      const correctText = (Array.isArray(interaction.correct_answer) ? interaction.correct_answer : []).map((id: string) => 
        (interaction.options || []).find((o: any) => o.id === id)?.text
      ).join('');

      isAnswerCorrect = normalizeSentence(selectedText) === normalizeSentence(correctText);
    } else if (['true_false', 'odd_one_out', 'multiple_choice', 'role_play', 'listening_image_mc', 'fill_blanks', 'fill_blank', 'fill-blank', 'reading-comprehension', 'writing-analysis'].includes(interaction.type)) {
      // Robust comparison for boolean and string values
      const normalizedOption = normalizeForComparison(String(optionId));
      
      const q = (interaction.type === 'reading-comprehension' || interaction.type === 'writing-analysis')
        ? ((interaction.options && interaction.options.length > 0) ? interaction : (interaction.content?.questions?.[0] || interaction.content || interaction))
        : interaction;
        
      const normalizedCorrect = normalizeForComparison(String(q.correct_answer || q.correctAnswer || interaction.correct_answer));
      
      if (interaction.type === 'true_false') {
        // Specifically handle True/False which might be stored as strings "true"/"false" or booleans
        const optBool = normalizedOption === 'true';
        const correctBool = normalizedCorrect === 'true';
        isAnswerCorrect = optBool === correctBool;
      } else {
        // Double check: if normalizedOption is an ID (like o1), but normalizedCorrect is also an ID,
        // we might want to also check if the text matches just in case of mapping mismatches
        const optionText = normalizeForComparison(q.options?.find((o: any) => (normalizeForComparison(String(o.id)) === normalizedOption || normalizeForComparison(String(o.text)) === normalizedOption))?.text || String(optionId));
        const correctText = normalizeForComparison(q.options?.find((o: any) => (normalizeForComparison(String(o.id)) === normalizedCorrect || normalizeForComparison(String(o.text)) === normalizedCorrect))?.text || String(normalizedCorrect));
        
        isAnswerCorrect = normalizedOption === normalizedCorrect || optionText === correctText;
      }
    } else if (['matching', 'multiple_matching', 'vocabulary-match'].includes(interaction.type)) {
      const pairs = (interaction.type === 'vocabulary-match')
        ? (interaction.content?.pairs || interaction.pairs || [])
        : (interaction.pairs || []);

      if (pairs.length > 0) {
        isAnswerCorrect = pairs.every((p: any) => {
          const selectedRightId = matchingPairs[p.id];
          if (!selectedRightId) return false;
          
          // If ID matches directly, it's definitely correct
          if (selectedRightId === p.id) return true;
          
          // If ID doesn't match, check if the text of the selected option 
          // matches the expected correct text (handles duplicate values like "a"/"an")
          const expectedText = normalizeForComparison(String((interaction.type === 'vocabulary-match') ? p.correctMatch : p.right));
          const selectedText = normalizeForComparison(String((shuffledRight || []).find((r: any) => r.id === selectedRightId)?.text || ""));
          return selectedText === expectedText;
        });
      } else {
        isAnswerCorrect = Object.entries(interaction.correct_answer || {}).every(([k, v]) => matchingPairs[k] === v);
      }
    } else if (['gapped_text', 'multiple_choice_cloze'].includes(interaction.type)) {
      const allCorrect = Object.entries(interaction.correct_answer || {}).every(([gapId, correctVal]) => {
        const inputVal = normalizeForComparison(String(inputValues[gapId as any] || ""));
        const correctValStr = normalizeForComparison(String(correctVal));
        return inputVal === correctValStr;
      });
      isAnswerCorrect = allCorrect;
    } else if (interaction.type === 'categorization') {
      const allItems = interaction.categories.flatMap((c: any) => c.items);
      const allCategorizedCorrectly = allItems.every((item: any) => {
        const itemId = typeof item === 'string' ? item : item.id;
        const correctCatId = interaction.categories.find((c: any) => 
          c.items.some((i: any) => (typeof i === 'string' ? i : i.id) === itemId)
        )?.id;
        return categorizedItems[itemId] === correctCatId;
      });
      isAnswerCorrect = allCategorizedCorrectly && Object.keys(categorizedItems).length === allItems.length;
    } else if (['transformation', 'fill_blanks', 'fill_blank', 'fill-blank'].includes(interaction.type)) {
      const q = interaction;
      const normalizedOption = normalizeForComparison(String(optionId));
      const correctText = Array.isArray(q.answers) 
        ? q.answers.join(' ') 
        : String(q.correct_answer || q.correctAnswer || q.answer || q.gap || "");
      
      // Support multiple correct answers separated by / or ,
      const possibleAnswers = correctText.split(/[\\/]+/).map((a: string) => normalizeForComparison(a)).filter(Boolean);
      
      // If we have options, we should also check if the text of the selected option matches any of the correct answers
      let optionText = normalizedOption;
      if (q.options && q.options.length > 0) {
        const opt = q.options.find((o: any) => normalizeForComparison(String(o.id)) === normalizedOption);
        if (opt) optionText = normalizeForComparison(String(opt.text));
      }

      isAnswerCorrect = possibleAnswers.length > 0 
        ? (possibleAnswers.includes(normalizedOption) || possibleAnswers.includes(optionText)) 
        : normalizedOption.length > 0;
    } else if (interaction.type === 'writing_task') {
      const input = (optionId as string).trim();
      const minWords = interaction.word_count_min || 100;
      const wordCount = input.split(/\s+/).filter(Boolean).length;
      isAnswerCorrect = wordCount >= minWords;
    } else if (interaction.type === 'speaking_task') {
      isAnswerCorrect = true; // For now, just mark as finished
    } else if (interaction.type === 'short_writing' || interaction.type === 'dictation_guided') {
      const input = (optionId as string).trim().toLowerCase();
      if (interaction.validation_regex) {
        const regex = new RegExp(interaction.validation_regex, 'i');
        isAnswerCorrect = regex.test(input);
      } else if (interaction.correct_answer) {
        // Fallback to strict string comparison if no regex is provided
        const correct = String(interaction.correct_answer).toLowerCase().trim();
        isAnswerCorrect = input === correct;
      } else {
        isAnswerCorrect = input.length > 2;
      }
    } else if (interaction.type === 'word-search' || interaction.type === 'crossword' || interaction.type === 'ai-mission') {
      // These are handled by their own components or are transitions
      isAnswerCorrect = true;
    }

    if (isAnswerCorrect) {
      setIsCorrect(true);
      setSelectedOption(optionId);
      
      let message = interaction.feedback_correct_es || getEncouragingMessage(true, 0);
      if (interaction.type === 'true_false' && String(interaction.correct_answer).toLowerCase() === 'false' && interaction.correct_sentence_en) {
        message = `${message}\n\nLa frase correcta es: "${interaction.correct_sentence_en}"`;
      }
      
      setFeedback({ correct: true, message });
      playAudio('/audio/correct.mp3');

      // Track progress if callback is provided
      if (onInteractionCorrect && interaction.interaction_id) {
        onInteractionCorrect(interaction.interaction_id);
      }

      if (onPerformanceUpdate && interaction.interaction_id) {
        const id = interaction.interaction_id || interaction.mastery_tag;
        const fails = failCount[id] || 0;
        const quality = Math.max(3, 5 - fails);
        onPerformanceUpdate(interaction.interaction_id, quality);
      }

      if (onConceptUpdate && interaction.concept_tags) {
        onConceptUpdate(interaction.concept_tags, true);
      }
    } else {
      setIsCorrect(false);
      setSelectedOption(optionId);
      const id = interaction.interaction_id || interaction.mastery_tag;
      const currentFails = (failCount[id] || 0) + 1;
      setFailCount(prev => ({ ...prev, [id]: currentFails }));

      if (onPerformanceUpdate && interaction.interaction_id) {
        onPerformanceUpdate(interaction.interaction_id, 0); // 0 = fail
      }

      if (onConceptUpdate && interaction.concept_tags) {
        onConceptUpdate(interaction.concept_tags, false);
      }
      
      let message = "";
      if (currentFails >= 3) {
        message = getSolutionText(interaction);
      } else {
        message = interaction.feedback_incorrect_es || getEncouragingMessage(false, currentFails);
        if (interaction.type === 'true_false' && String(interaction.correct_answer).toLowerCase() === 'false' && interaction.correct_sentence_en) {
           message = `${message}\n\nLa frase correcta es: "${interaction.correct_sentence_en}"`;
        }
      }

      setFeedback({ correct: false, message: message });
      playAudio('/audio/wrong.mp3');
    }

    // Auto-request AI explanation if static one is missing
    if (!interaction.explanation) {
      handleRequestAIExplanation();
    }
  };

  const handleFeedbackContinue = () => {
    const interaction = isVideoMode ? currentItem.video.interactions[interactionIndex] : currentItem;
    const id = interaction.interaction_id || interaction.mastery_tag;

    if (!feedback?.correct && isVideoMode && currentItem.video.branching && failCount[id] >= 2) {
      setIsRepairing(true);
      setFeedback(null);
      setAiExplanation(null);
      setIsExplaining(false);
      return;
    }

    if (feedback?.correct || ((failCount[id] || 0) >= 3)) {
      if (isVideoMode) {
        setInteractionIndex(interactionIndex + 1);
        setShowInteraction(false);
        if (interactionIndex + 1 >= currentItem.video.interactions.length && currentSceneIndex >= currentItem.video.scenes.length - 1) {
           handleNext();
        } else {
          setFeedback(null);
          setAiExplanation(null);
          setIsExplaining(false);
        }
      } else {
        handleNext();
      }
    } else {
      // Retry - Reset interaction state to allow repeating
      setMatchingPairs({});
      setMatchingSelections({});
      setSelectedWords([]);
      setCategorizedItems({});
      setInputValues({});
      setFeedback(null);
      setSelectedOption(null);
      setIsCorrect(null);
      setAiExplanation(null);
      setIsExplaining(false);
    }
  };

  if (showSummary) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6 overflow-hidden relative">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{ 
                x: "50%", 
                y: "50%", 
                scale: 0,
                rotate: 0 
              }}
              animate={{ 
                x: `${Math.random() * 100}%`, 
                y: `${Math.random() * 100}%`, 
                scale: [0, 1, 0],
                rotate: 360 
              }}
              transition={{ 
                duration: 2 + Math.random() * 3, 
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              <Sparkles className="text-amber-400 w-6 h-6" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ scale: 0, rotate: -20 }} 
          animate={{ scale: 1, rotate: 0 }} 
          className="w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-amber-200"
        >
          <Trophy className="w-16 h-16 text-amber-600" />
        </motion.div>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-black text-slate-900 mb-4"
        >
          ¡Unidad Completada!
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-slate-600 mb-12"
        >
          Has terminado todas las actividades de esta unidad.
        </motion.p>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col gap-4 w-full max-w-xs z-10"
        >
          <Button 
            onClick={onNextUnit || onComplete} 
            className="h-16 rounded-2xl bg-indigo-600 text-white text-xl font-black shadow-lg hover:bg-indigo-700 border-b-8 border-indigo-800 active:translate-y-1 active:border-b-0 transition-all"
          >
            {onNextUnit ? 'SIGUIENTE UNIDAD' : 'FINALIZAR'}
          </Button>
          <Button variant="outline" onClick={onExit} className="h-16 rounded-2xl border-2 border-slate-200 text-slate-600 text-lg font-bold hover:bg-slate-50">
            VOLVER AL CURSO
          </Button>
        </motion.div>
      </div>
    );
  }

  const isInteractionDisabled = !!feedback;

  const PronunciationButton = ({ text, size = "sm", className = "" }: { text: string, size?: "sm" | "md", className?: string }) => {
    if (!text) return null;
    return (
      <button
        className={`rounded-full text-indigo-600 hover:bg-indigo-50 flex items-center justify-center flex-shrink-0 transition-colors ${size === "sm" ? "w-8 h-8" : "w-10 h-10"} ${className}`}
        onClick={(e) => {
          e.stopPropagation();
          playAudio(undefined, text);
        }}
      >
        <Volume2 className={size === "sm" ? "w-4 h-4" : "w-6 h-6"} />
      </button>
    );
  };

  const renderInteraction = (interaction: any) => {
    if (!interaction) return null;
    
    switch (interaction.type) {
      case 'audio_player':
        return (
          <div className="w-full max-w-2xl mx-auto space-y-8 flex flex-col items-center">
            <div className="bg-indigo-50 p-8 rounded-3xl border-2 border-indigo-100 w-full text-center space-y-6 relative group">
              <PronunciationButton text={interaction.stimulus_en || interaction.text || interaction.tts_en} size="md" className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-2">
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm italic">ESCUCHA Y PRONUNCIA</p>
                <h3 className="text-3xl md:text-4xl font-black text-indigo-900 leading-tight">
                  {interaction.stimulus_en || interaction.text || interaction.tts_en}
                </h3>
              </div>
              
              <div className="p-4 bg-white/50 rounded-2xl border border-indigo-50">
                <p className="text-xl font-medium text-slate-600 italic">
                  &quot;{interaction.prompt_es || interaction.spanish || interaction.instructions}&quot;
                </p>
              </div>

              {interaction.phonetic && (
                <p className="text-2xl font-mono text-indigo-400 font-bold">{interaction.phonetic}</p>
              )}

              {interaction.pronunciationTips && (
                <div className="bg-amber-50 p-6 rounded-2xl border-2 border-amber-100 text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-amber-500" />
                    <span className="font-bold text-amber-800 uppercase text-xs tracking-wider">Consejos de Pronunciación</span>
                  </div>
                  <p className="text-amber-900 font-medium leading-relaxed">
                    {interaction.pronunciationTips}
                  </p>
                </div>
              )}
            </div>
            
            <div className="flex flex-col items-center gap-6 w-full">
              <button
                onClick={() => playAudio(interaction.audioUrl || interaction.audio_url, interaction.stimulus_en || interaction.text || interaction.tts_en)}
                className="bg-indigo-600 text-white px-12 py-6 rounded-[2rem] font-black text-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center gap-4 active:scale-95 border-b-8 border-indigo-800"
              >
                <Volume2 className="w-10 h-10" />
                ESCUCHAR
              </button>
              
              {!feedback && (
                <Button
                  onClick={() => handleCheckAnswer(true)}
                  className="mt-4 bg-green-500 hover:bg-green-600 text-white font-black px-12 py-4 rounded-2xl border-b-4 border-green-700 active:translate-y-1 transition-all"
                >
                  ¡LO HE DICHO BIEN!
                </Button>
              )}
            </div>
          </div>
        );

      case 'reading-comprehension':
        const readingContent = interaction.content || interaction;
        const q = (interaction.options && interaction.options.length > 0) 
          ? interaction 
          : (readingContent.questions?.[0] || readingContent);
        
        const correctReadingAns = interaction.correct_answer || q.correct_answer || q.correctAnswer;

        return (
          <div className="w-full max-w-2xl mx-auto space-y-8">
            <h2 className="text-2xl font-black text-slate-800 text-center">{readingContent.title || interaction.title || "Reading Comprehension"}</h2>
            {readingContent.text && (
               <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-100 mb-8 max-h-[60vh] overflow-y-auto relative group scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                  <PronunciationButton text={readingContent.text} size="md" className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-xl text-slate-700 leading-relaxed whitespace-pre-line text-left">
                    {readingContent.text}
                  </p>
               </div>
            )}
            <div className="bg-indigo-50 p-8 rounded-[2rem] border-2 border-indigo-100 mb-6 relative group">
              <PronunciationButton text={q.question || q.context} size="md" className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="text-2xl font-black text-indigo-900 leading-tight">
                {q.question || q.context}
              </p>
            </div>
            <div className="grid gap-4">
              {q.options?.map((opt: any) => {
                const optText = typeof opt === 'string' ? opt : opt.text;
                const optId = typeof opt === 'string' ? opt : opt.id;
                const isSelected = selectedOption === optId;
                const isCorrectAns = optId === correctReadingAns;
                
                return (
                  <div
                    key={optId}
                    role="button"
                    tabIndex={0}
                    onClick={() => !feedback && setSelectedOption(optId)}
                    className={`w-full p-6 text-left border-2 border-b-4 rounded-3xl font-bold text-xl transition-all flex items-center justify-between group/opt cursor-pointer ${
                      feedback 
                        ? isCorrectAns ? 'border-green-500 bg-green-50 text-green-700' : isSelected ? 'border-red-500 bg-red-50 text-red-700' : 'border-slate-100 bg-white text-slate-300'
                        : isSelected 
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 active:translate-y-1'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 active:translate-y-1'
                    } ${feedback ? 'pointer-events-none' : ''}`}
                  >
                    <span className="flex items-center gap-3">
                      {optText}
                      {isLikelyEnglish(optText) && (
                        <PronunciationButton text={optText} className="opacity-0 group-hover/opt:opacity-100 transition-opacity" />
                      )}
                    </span>
                    {feedback && isCorrectAns && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                  </div>
                );
              })}
            </div>
          </div>
        );

      case 'writing-analysis':
        const analysisContent = interaction.content || interaction;
        const analysisItems = analysisContent.analysis || [];
        const toneOptions = (interaction.options && interaction.options.length > 0)
          ? interaction.options
          : ["Formal", "Informal", "Urgent"].map((t, i) => ({ id: t, text: t }));
        
        return (
          <div className="w-full max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-black text-slate-800 text-center">{interaction.title || "Email Analysis"}</h2>
            
            <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-100 mb-8 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
              <p className="text-xl text-slate-700 leading-relaxed whitespace-pre-line font-serif italic text-left">
                {analysisContent.text}
              </p>
            </div>

            <div className="grid gap-6">
              <h4 className="font-black text-slate-400 uppercase tracking-widest text-sm">Key Segments:</h4>
              {analysisItems.map((item: any, i: number) => (
                <div key={i} className="bg-white p-6 rounded-2xl border-2 border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-bold text-indigo-600 text-lg mb-1">{item.segment}</p>
                    <p className="text-slate-500 font-medium">Type: {item.identification}</p>
                  </div>
                  {feedback && (
                    <div className="bg-green-50 px-4 py-2 rounded-xl border border-green-100 text-green-700 font-bold">
                      {item.correction}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-6 pt-8">
              <h3 className="text-2xl font-black text-slate-800 text-center flex items-center justify-center gap-3">
                <CheckCircle2 className="text-emerald-500" />
                Select the overall tone:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {toneOptions.map((opt: any) => {
                  const optId = opt.id;
                  const optText = opt.text;
                  const isSelected = selectedOption === optId;
                  const correctTone = interaction.correct_answer || analysisContent.correct_answer || analysisContent.correctAnswer;
                  const isCorrectAns = optId === correctTone;
                  
                  return (
                    <button
                      key={optId}
                      onClick={() => !feedback && setSelectedOption(optId)}
                      className={`p-6 border-2 border-b-4 rounded-2xl font-bold text-xl transition-all ${
                        feedback 
                          ? isCorrectAns ? 'bg-green-50 border-green-500 text-green-700' : isSelected ? 'bg-red-50 border-red-500 text-red-700' : 'bg-white border-slate-200 text-slate-300'
                          : isSelected ? 'bg-indigo-50 border-indigo-500 text-indigo-700 scale-105 shadow-md' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      } ${feedback ? 'pointer-events-none' : ''}`}
                    >
                      {optText}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );

      case 'vocabulary-match':
        const vocabContent = interaction.content || interaction;
        const vocabPairs = vocabContent.pairs || [];
        return (
          <div className="w-full max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-black text-slate-800 text-center">{vocabContent.instructions || interaction.prompt_es || "Relaciona las frases"}</h2>
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-4">
                {vocabPairs.map((p: any) => (
                  <div
                    key={`left-${p.id}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      if (!!feedback || !!matchingPairs[p.id]) return;
                      const newSelections = { ...matchingSelections, left: p.id };
                      if (newSelections.right) {
                        setMatchingPairs(prev => ({ ...prev, [newSelections.left!]: newSelections.right! }));
                        setMatchingSelections({});
                      } else setMatchingSelections(newSelections);
                    }}
                    className={`w-full p-5 border-2 border-b-4 rounded-2xl font-bold text-xl transition-all flex items-center justify-between group/left cursor-pointer ${
                      matchingPairs[p.id] ? 'bg-slate-50 border-slate-100 text-slate-300 pointer-events-none' :
                      matchingSelections.left === p.id ? 'bg-indigo-50 border-indigo-500 text-indigo-700 scale-105 shadow-md' :
                      'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    } ${feedback ? 'pointer-events-none' : ''}`}
                  >
                    <span>{p.left || p.word}</span>
                    <PronunciationButton text={p.left || p.word} className="opacity-0 group-hover/left:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {shuffledRight.map((p: any) => (
                  <div
                    key={`right-${p.id}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      if (!!feedback || Object.values(matchingPairs).includes(p.id)) return;
                      const newSelections = { ...matchingSelections, right: p.id };
                      if (newSelections.left) {
                        setMatchingPairs(prev => ({ ...prev, [newSelections.left!]: newSelections.right! }));
                        setMatchingSelections({});
                      } else setMatchingSelections(newSelections);
                    }}
                    className={`w-full p-5 border-2 border-b-4 rounded-2xl font-bold text-xl transition-all cursor-pointer ${
                      Object.values(matchingPairs).includes(p.id) ? 'bg-slate-50 border-slate-100 text-slate-300 pointer-events-none' :
                      matchingSelections.right === p.id ? 'bg-indigo-50 border-indigo-500 text-indigo-700 scale-105 shadow-md' :
                      'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    } ${feedback ? 'pointer-events-none' : ''}`}
                  >
                    {p.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'ai-mission':
        const mission = interaction.content || interaction;
        return (
          <div className="w-full max-w-2xl mx-auto space-y-8 pb-12">
            <div className="text-center space-y-4">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-7xl mb-4"
              >
                {mission.persona?.avatar || '👔'}
              </motion.div>
              <h2 className="text-4xl font-black text-slate-800 tracking-tight">{mission.title}</h2>
              <p className="text-2xl font-bold text-slate-500">{mission.briefing}</p>
            </div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-indigo-600 p-10 rounded-[3rem] text-white shadow-2xl shadow-indigo-200 relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Sparkles className="w-24 h-24" />
               </div>
               <h4 className="font-black text-indigo-200 mb-4 uppercase tracking-widest text-sm">TU OBJETIVO</h4>
               <p className="text-3xl font-black leading-tight italic">
                 &quot;{mission.goal}&quot;
               </p>
            </motion.div>

            <div className="grid gap-4">
               <h4 className="font-black text-slate-400 uppercase tracking-widest text-sm text-center">Debes cumplir con:</h4>
               {mission.successCriteria?.map((c: string, i: number) => (
                 <motion.div 
                   key={i}
                   initial={{ x: -20, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   transition={{ delay: 0.4 + i * 0.1 }}
                   className="flex items-center gap-4 bg-white p-6 rounded-[2rem] border-2 border-slate-100 shadow-sm"
                 >
                   <div className="bg-green-100 p-2 rounded-full">
                     <CheckCircle2 className="w-6 h-6 text-green-600" />
                   </div>
                   <span className="font-bold text-slate-700 text-lg">{c}</span>
                 </motion.div>
               ))}
            </div>
            <div className="p-8 bg-amber-50 rounded-[2rem] border-2 border-amber-100 text-center">
               <p className="text-amber-800 font-bold text-lg">
                 Prepárate para escribir este email. En la vida real, enviarías esto a un cliente o colega.
               </p>
            </div>
          </div>
        );

      case 'flashcard':
        const currentFlashcard = (interaction.flashcards || [])[flashcardIndex];
        if (!currentFlashcard) return null;
        
        return (
          <div className="w-full max-w-xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-black text-slate-800">{interaction.prompt_es}</h2>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">
                Tarjeta {flashcardIndex + 1} de {interaction.flashcards?.length || 0}
              </p>
            </div>

            <div 
              className="relative h-[400px] w-full perspective-1000 cursor-pointer group"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front Side */}
              <motion.div 
                className="absolute inset-0 w-full h-full bg-white rounded-[3rem] shadow-2xl shadow-indigo-100 border-2 border-indigo-50 flex flex-col items-center justify-center p-12 text-center"
                initial={false}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", zIndex: isFlipped ? 0 : 1 }}
              >
                <h3 className="text-5xl font-black text-indigo-600 mb-4">{currentFlashcard.front}</h3>
                {currentFlashcard.pronunciation && (
                  <p className="text-2xl font-mono text-indigo-400">{currentFlashcard.pronunciation}</p>
                )}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio(undefined, currentFlashcard.front);
                  }}
                  className="mt-8 p-6 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-all hover:scale-110 active:scale-95"
                >
                  <Volume2 className="w-8 h-8" />
                </button>
                <div className="absolute bottom-8 text-slate-300 font-bold text-sm flex items-center gap-2 group-hover:text-indigo-400 transition-colors">
                  <RotateCcw className="w-4 h-4" />
                  TOCA PARA VOLTEAR
                </div>
              </motion.div>

              {/* Back Side */}
              <motion.div 
                className="absolute inset-0 w-full h-full bg-indigo-600 rounded-[3rem] shadow-2xl shadow-indigo-200 flex flex-col items-center justify-center p-12 text-center"
                initial={false}
                animate={{ rotateY: isFlipped ? 0 : -180 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", zIndex: isFlipped ? 1 : 0 }}
              >
                <p className="text-indigo-200 font-bold uppercase tracking-widest text-sm mb-4">TRADUCCIÓN</p>
                <h3 className="text-5xl font-black text-white">{currentFlashcard.back}</h3>
              </motion.div>
            </div>

            <div className="flex justify-center gap-4">
              {isFlipped && (
                <Button
                  onClick={() => {
                    if (flashcardIndex < (interaction.flashcards?.length || 0) - 1) {
                      setFlashcardIndex(flashcardIndex + 1);
                      setIsFlipped(false);
                    } else {
                      handleNext();
                    }
                  }}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-black px-12 py-6 h-auto rounded-2xl text-xl border-b-4 border-indigo-800 active:translate-y-1 transition-all"
                >
                  {flashcardIndex < (interaction.flashcards?.length || 0) - 1 ? 'SIGUIENTE TARJETA' : 'TERMINAR REPASO'}
                </Button>
              )}
            </div>
          </div>
        );

      case 'listening_image_mc':
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              {interaction.image_url && (
                <img 
                  src={interaction.image_url} 
                  alt="Context for listening" 
                  className="max-w-full h-auto rounded-lg shadow-md max-h-[300px]"
                />
              )}
              {interaction.audioUrl && (
                <audio controls className="w-full max-w-md">
                  <source src={interaction.audioUrl} type="audio/mpeg" />
                </audio>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              {interaction.options?.map((opt: any) => (
                <div
                  key={opt.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => !isInteractionDisabled && setSelectedOption(opt.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (!isInteractionDisabled) setSelectedOption(opt.id);
                    }
                  }}
                  className={`p-4 rounded-xl border-2 transition-all text-center font-medium flex items-center justify-center gap-2 group/opt cursor-pointer ${
                    selectedOption === opt.id
                      ? isCorrect === true
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : isCorrect === false
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  } ${isInteractionDisabled ? 'pointer-events-none opacity-80' : ''}`}
                >
                  {opt.text}
                  {isLikelyEnglish(opt.text) && (
                    <PronunciationButton text={opt.text} className="opacity-0 group-hover/opt:opacity-100 transition-opacity" />
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'writing_task':
        const wordCount = (inputValues['writing'] || '').trim().split(/\s+/).filter(Boolean).length;
        return (
          <div className="space-y-4">
            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <p className="text-sm font-medium text-amber-800">
                Type: {interaction.writing_type?.toUpperCase()} | 
                Min words: {interaction.word_count_min || 100} | 
                Max words: {interaction.word_count_max || 120}
              </p>
            </div>
            <textarea
              value={inputValues['writing'] || ''}
              onChange={(e) => setInputValues(prev => ({ ...prev, writing: e.target.value }))}
              placeholder={interaction.input_placeholder_es || "Escribe aquí tu respuesta..."}
              disabled={isInteractionDisabled}
              className="w-full min-h-[200px] p-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-y transition-all"
            />
            <div className="flex justify-between items-center text-sm">
              <span className={`${
                wordCount < (interaction.word_count_min || 100) || wordCount > (interaction.word_count_max || 120)
                  ? 'text-red-500'
                  : 'text-green-600'
              } font-medium`}>
                Word count: {wordCount}
              </span>
              {!isInteractionDisabled && (
                <button
                  onClick={() => handleCheckAnswer(inputValues['writing'])}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Submit for Evaluation
                </button>
              )}
            </div>
          </div>
        );

      case 'speaking_task':
        return (
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-6">
              {interaction.image_url && (
                <img 
                  src={interaction.image_url} 
                  alt="Speaking prompt" 
                  className="max-w-full h-auto rounded-lg shadow-lg max-h-[400px]"
                />
              )}
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 w-full">
                <h4 className="font-bold text-blue-800 mb-2">{interaction.speaking_type?.toUpperCase()} TASK</h4>
                <p className="text-lg text-gray-800 leading-relaxed">{interaction.prompt_es}</p>
              </div>
              
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="p-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl w-full text-center">
                  <p className="text-gray-500 italic">Prepara tu respuesta y practica en voz alta.</p>
                  <p className="text-xs text-gray-400 mt-2">(En una versión futura podrás grabar y recibir feedback IA)</p>
                </div>
                
                {!isInteractionDisabled && (
                  <button
                    onClick={() => handleCheckAnswer(true)}
                    className="bg-green-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-colors shadow-md transform hover:scale-105"
                  >
                    I have finished my turn
                  </button>
                )}
              </div>
            </div>
          </div>
        );

      case 'reorder_words':
        const solutionText = getSolutionText(interaction);
        return (
          <div className="w-full max-w-2xl mx-auto space-y-12">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-3xl font-black text-slate-800 text-center">{interaction.prompt_es}</h2>
              <PronunciationButton text={solutionText} size="md" />
            </div>
            <div className="min-h-[140px] border-b-4 border-slate-100 py-6 flex flex-wrap gap-3 items-center justify-center bg-slate-50/50 rounded-3xl px-6">
              {selectedWords.map((word) => (
                <motion.button
                  layoutId={word.id}
                  key={`selected-${word.id}`}
                  onClick={() => setSelectedWords(prev => prev.filter(w => w.id !== word.id))}
                  disabled={!!feedback}
                  className="p-4 px-6 bg-white border-2 border-slate-200 border-b-4 rounded-2xl font-bold text-xl text-slate-700 shadow-sm active:translate-y-0.5"
                >
                  {word.text}
                </motion.button>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 justify-center pt-8">
              {shuffledOptions.map((opt: any) => {
                const isSelected = selectedWords.find(sw => sw.id === opt.id);
                return (
                  <div key={`pool-wrapper-${opt.id}`} className="relative group">
                    <motion.div
                      layoutId={opt.id}
                      key={`pool-${opt.id}`}
                      role="button"
                      tabIndex={0}
                      onClick={() => !feedback && !isSelected && setSelectedWords(prev => [...prev, opt])}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          if (!feedback && !isSelected) setSelectedWords(prev => [...prev, opt]);
                        }
                      }}
                      className={`p-4 px-6 border-2 border-b-4 rounded-2xl font-bold text-xl transition-all cursor-pointer ${
                        isSelected ? 'bg-slate-100 border-transparent text-transparent opacity-30 cursor-default pointer-events-none' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 active:translate-y-0.5 shadow-sm'
                      } ${feedback ? 'pointer-events-none' : ''}`}
                    >
                      {opt.text}
                    </motion.div>
                    {!isSelected && (
                      <PronunciationButton text={opt.text} className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-md border" />
                    )}
                  </div>
                );
              })}
            </div>

            {interaction.translation && (
              <div className="mt-8 p-6 bg-amber-50 rounded-[2rem] border-2 border-amber-100 text-center">
                <p className="text-amber-800 font-bold text-xl italic flex items-center justify-center gap-3">
                  <span className="text-amber-400 font-black">ES:</span>
                  &quot;{interaction.translation}&quot;
                </p>
              </div>
            )}

            {interaction.hint && (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-bold transition-colors"
                >
                  <Lightbulb className={`w-5 h-5 ${showHint ? 'fill-amber-400 text-amber-400' : ''}`} />
                  {showHint ? 'Ocultar pista' : 'Ver pista'}
                </button>
              </div>
            )}

            <AnimatePresence>
              {showHint && interaction.hint && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-100 text-slate-600 italic text-center overflow-hidden"
                >
                  {interaction.hint}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case 'word-search':
        return (
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-black text-slate-800">{interaction.prompt_es}</h2>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm italic">
                {interaction.instructions || "Encuentra todas las palabras ocultas"}
              </p>
            </div>
            {interaction.words ? (
              <WordSearchExercise 
                words={interaction.words} 
                gridSize={interaction.gridSize || 10} 
                clues={interaction.clues}
                onComplete={() => handleCheckAnswer(true)} 
              />
            ) : (
              <div className="p-12 text-center bg-orange-50 rounded-3xl border-2 border-orange-100">
                <p className="text-orange-600 font-bold text-xl mb-4">¡Reto especial!</p>
                <p className="text-slate-600 mb-8">Esta actividad se está preparando. Puedes continuar con la siguiente.</p>
                <Button 
                  onClick={() => handleCheckAnswer(true)}
                  className="bg-orange-600 hover:bg-orange-700 text-white font-black px-12 py-4 rounded-2xl border-b-4 border-orange-800 active:translate-y-1 transition-all"
                >
                  CONTINUAR
                </Button>
              </div>
            )}
          </div>
        );

      case 'crossword':
        return (
          <div className="w-full max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-black text-slate-800">{interaction.prompt_es}</h2>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-sm italic">
                {interaction.instructions || "Completa el crucigrama usando las pistas"}
              </p>
            </div>
            {interaction.items ? (
              <CrosswordExercise 
                items={interaction.items} 
                onComplete={() => handleCheckAnswer(true)} 
              />
            ) : (
              <div className="p-12 text-center bg-blue-50 rounded-3xl border-2 border-blue-100">
                <p className="text-blue-600 font-bold text-xl mb-4">¡Reto especial!</p>
                <p className="text-slate-600 mb-8">Esta actividad se está preparando. Puedes continuar con la siguiente.</p>
                <Button 
                  onClick={() => handleCheckAnswer(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-4 rounded-2xl border-b-4 border-blue-800 active:translate-y-1 transition-all"
                >
                  CONTINUAR
                </Button>
              </div>
            )}
          </div>
        );

      case 'multiple_matching':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700">People/Requirements</h4>
                {interaction.profiles?.map((profile: any) => (
                  <div key={profile.id} className="p-4 bg-white border rounded-lg shadow-sm relative group">
                    <PronunciationButton text={`${profile.name}. ${profile.description}`} className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="font-medium text-blue-600">{profile.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{profile.description}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-700">Options</h4>
                {interaction.descriptions?.map((desc: any) => (
                  <div key={desc.id} className="p-4 bg-white border rounded-lg shadow-sm relative group">
                    <PronunciationButton text={`${desc.title}. ${desc.content}`} className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <p className="font-medium text-green-600">{desc.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{desc.content}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm font-medium text-blue-800 mb-3">Match people with the best option:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interaction.profiles?.map((profile: any) => (
                  <div key={profile.id} className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase text-gray-500">{profile.name}</label>
                    <select
                      value={matchingPairs[profile.id] || ''}
                      onChange={(e) => setMatchingPairs(prev => ({ ...prev, [profile.id]: e.target.value }))}
                      disabled={isInteractionDisabled}
                      className="p-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    >
                      <option value="">Select an option...</option>
                      {interaction.descriptions?.map((desc: any) => (
                        <option key={desc.id} value={desc.id}>{desc.title}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'gapped_text':
      case 'multiple_choice_cloze':
        const parts = (interaction.main_text || "").split(/(\[GAP \d+\])/g);
        const fullTextForTTS = (interaction.main_text || "").replace(/\[GAP \d+\]/g, '...');
        return (
          <div className="space-y-6">
            <div className="p-6 bg-white border rounded-xl leading-relaxed text-gray-800 shadow-sm whitespace-pre-wrap relative group">
              <PronunciationButton text={fullTextForTTS} className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              {parts.map((part: string, idx: number) => {
                const match = part.match(/\[GAP (\d+)\]/);
                if (match) {
                  const gapId = match[1];
                  if (interaction.type === 'gapped_text') {
                    return (
                      <select
                        key={idx}
                        value={inputValues[gapId] || ''}
                        onChange={(e) => setInputValues(prev => ({ ...prev, [gapId]: e.target.value }))}
                        disabled={isInteractionDisabled}
                        className="mx-1 inline-block p-1 h-8 rounded border border-blue-300 bg-blue-50 focus:ring-2 focus:ring-blue-500 outline-none min-w-[60px]"
                      >
                        <option value=""></option>
                        {interaction.removed_paragraphs?.map((opt: any) => (
                          <option key={opt.id} value={opt.id}>{opt.id}</option>
                        ))}
                      </select>
                    );
                  } else {
                    const gapOptions = interaction.gaps?.find((g: any) => g.id === gapId)?.options;
                    return (
                      <select
                        key={idx}
                        value={inputValues[gapId] || ''}
                        onChange={(e) => setInputValues(prev => ({ ...prev, [gapId]: e.target.value }))}
                        disabled={isInteractionDisabled}
                        className="mx-1 inline-block p-1 h-8 rounded border border-blue-300 bg-blue-50 focus:ring-2 focus:ring-blue-500 outline-none min-w-[80px]"
                      >
                        <option value=""></option>
                        {gapOptions?.map((opt: any) => (
                          <option key={opt.id} value={opt.id}>{opt.text}</option>
                        ))}
                      </select>
                    );
                  }
                }
                return <span key={idx}>{part}</span>;
              })}
            </div>

            {interaction.type === 'gapped_text' && (
              <div className="grid grid-cols-1 gap-4 mt-8">
                <h4 className="font-semibold text-gray-700">Removed Sentences/Paragraphs</h4>
                {interaction.removed_paragraphs?.map((opt: any) => (
                  <div key={opt.id} className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex gap-4 relative group">
                    <span className="font-bold text-blue-600 min-w-[20px]">{opt.id}</span>
                    <p className="text-sm text-gray-700 pr-10">{opt.text}</p>
                    <PronunciationButton text={opt.text} className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case 'matching':
        return (
          <div className="w-full max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-black text-slate-800 text-center">{interaction.prompt_es}</h2>
            <div className="grid grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-4">
                {interaction.pairs?.map((p: any) => (
                  <div
                    key={`left-${p.id}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      if (!!feedback || !!matchingPairs[p.id]) return;
                      const newSelections = { ...matchingSelections, left: p.id };
                      if (newSelections.right) {
                        setMatchingPairs(prev => ({ ...prev, [newSelections.left!]: newSelections.right! }));
                        setMatchingSelections({});
                      } else setMatchingSelections(newSelections);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (!!feedback || !!matchingPairs[p.id]) return;
                        const newSelections = { ...matchingSelections, left: p.id };
                        if (newSelections.right) {
                          setMatchingPairs(prev => ({ ...prev, [newSelections.left!]: newSelections.right! }));
                          setMatchingSelections({});
                        } else setMatchingSelections(newSelections);
                      }
                    }}
                    className={`w-full p-5 border-2 border-b-4 rounded-2xl font-bold text-xl transition-all flex items-center justify-between group/left cursor-pointer ${
                      matchingPairs[p.id] ? 'bg-slate-50 border-slate-100 text-slate-300 pointer-events-none' :
                      matchingSelections.left === p.id ? 'bg-indigo-50 border-indigo-500 text-indigo-700 scale-105 shadow-md' :
                      'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    } ${feedback ? 'pointer-events-none' : ''}`}
                  >
                    <span>{p.left}</span>
                    <PronunciationButton text={p.left} className="opacity-0 group-hover/left:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {shuffledRight.map((p: any) => (
                  <div
                    key={`right-${p.id}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      if (!!feedback || Object.values(matchingPairs).includes(p.id)) return;
                      const newSelections = { ...matchingSelections, right: p.id };
                      if (newSelections.left) {
                        setMatchingPairs(prev => ({ ...prev, [newSelections.left!]: newSelections.right! }));
                        setMatchingSelections({});
                      } else setMatchingSelections(newSelections);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (!!feedback || Object.values(matchingPairs).includes(p.id)) return;
                        const newSelections = { ...matchingSelections, right: p.id };
                        if (newSelections.left) {
                          setMatchingPairs(prev => ({ ...prev, [newSelections.left!]: newSelections.right! }));
                          setMatchingSelections({});
                        } else setMatchingSelections(newSelections);
                      }
                    }}
                    className={`w-full p-5 border-2 border-b-4 rounded-2xl font-bold text-xl transition-all cursor-pointer ${
                      Object.values(matchingPairs).includes(p.id) ? 'bg-slate-50 border-slate-100 text-slate-300 pointer-events-none' :
                      matchingSelections.right === p.id ? 'bg-indigo-50 border-indigo-500 text-indigo-700 scale-105 shadow-md' :
                      'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    } ${feedback ? 'pointer-events-none' : ''}`}
                  >
                    {p.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'multiple_choice':
      case 'multiple-choice':
      case 'speaking-analysis':
      case 'odd_one_out':
      case 'role_play':
        return (
          <div className="w-full max-w-2xl mx-auto space-y-8">
            <h2 className="text-2xl font-black text-slate-800 text-center">{interaction.prompt_es}</h2>
            
            {interaction.image_url && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex justify-center mb-8"
              >
                <img 
                  src={interaction.image_url} 
                  alt="Context" 
                  className="max-w-full h-auto rounded-[2rem] shadow-xl border-4 border-white max-h-[300px] object-cover"
                />
              </motion.div>
            )}

            {interaction.stimulus_en && (
               <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-100 text-center mb-8 max-h-[60vh] overflow-y-auto relative group scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                  <PronunciationButton text={interaction.stimulus_en} size="md" className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed whitespace-pre-line text-left">
                    {interaction.stimulus_en}
                  </p>
               </div>
            )}
            <div className="grid gap-4">
              {interaction.options?.map((opt: any) => (
                <div
                  key={opt.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => !feedback && setSelectedOption(opt.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      if (!feedback) setSelectedOption(opt.id);
                    }
                  }}
                  className={`w-full p-6 text-left border-2 border-b-4 rounded-3xl font-bold text-xl transition-all flex items-center justify-between group/opt cursor-pointer ${
                    feedback 
                      ? (() => {
                          const correctText = String(interaction.correct_answer || interaction.correctAnswer || "");
                          const possibleAnswers = correctText.split(/[\\/]+/).map(a => normalizeForComparison(a)).filter(Boolean);
                          const normalizedOptId = normalizeForComparison(String(opt.id));
                          const normalizedOptText = normalizeForComparison(String(opt.text));
                          
                          if (possibleAnswers.includes(normalizedOptId) || possibleAnswers.includes(normalizedOptText)) {
                            return 'border-green-500 bg-green-50 text-green-700';
                          }
                          if (selectedOption === opt.id) {
                            return 'border-red-500 bg-red-50 text-red-700';
                          }
                          return 'border-slate-100 bg-white text-slate-300';
                        })()
                      : selectedOption === opt.id 
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700 active:translate-y-1'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 active:translate-y-1'
                  } ${feedback ? 'pointer-events-none' : ''}`}
                >
                  <span className="flex items-center gap-3">
                    {opt.text}
                    {isLikelyEnglish(opt.text) && (
                      <PronunciationButton text={opt.text} className="opacity-0 group-hover/opt:opacity-100 transition-opacity" />
                    )}
                  </span>
                  {feedback && (() => {
                    const correctText = String(interaction.correct_answer || interaction.correctAnswer || "");
                    const possibleAnswers = correctText.split(/[\\/]+/).map(a => normalizeForComparison(a)).filter(Boolean);
                    const normalizedOptId = normalizeForComparison(String(opt.id));
                    const normalizedOptText = normalizeForComparison(String(opt.text));
                    return possibleAnswers.includes(normalizedOptId) || possibleAnswers.includes(normalizedOptText);
                  })() && <CheckCircle2 className="w-6 h-6" />}
                </div>
              ))}
            </div>
          </div>
        );

      case 'transformation':
      case 'fill_blanks':
      case 'fill_blank':
      case 'fill-blank':
      case 'fill-blanks-mc':
        const hasBlank = /_{2,}/.test(interaction.stimulus_en || '');
        const isSolutionInPrompt = interaction.prompt_es && interaction.correct_answer && 
                                   interaction.prompt_es.toLowerCase().trim() === interaction.correct_answer.toLowerCase().trim();
        
        // Use multiple choice style if options exist, but show the blank in the stimulus
        if (interaction.options && interaction.options.length > 0) {
          const stim = interaction.stimulus_en || "";
          const gaps = (stim.match(/_{2,}/g) || []).length || 1;

          return (
            <div className="w-full max-w-2xl mx-auto space-y-8">
              <h2 className="text-2xl font-black text-slate-800 text-center">{interaction.prompt_es}</h2>
              <div className="bg-slate-50 p-10 rounded-[3rem] border-4 border-slate-200 shadow-inner text-center relative group">
                <PronunciationButton text={interaction.stimulus_en} size="md" className="absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-2xl font-bold text-slate-700 flex flex-wrap justify-center items-center gap-x-4 gap-y-8">
                  {(interaction.stimulus_en || "").split(/_{2,}/).map((part: string, i: number, arr: any[]) => (
                    <React.Fragment key={i}>
                      <span>{part}</span>
                      {i < arr.length - 1 && (
                        <div 
                          role="button"
                          tabIndex={0}
                          onClick={() => !feedback && setActiveGapIndex(i)}
                          className={`relative inline-block min-w-[120px] px-4 py-2 border-b-8 transition-all cursor-pointer ${
                            activeGapIndex === i ? 'border-indigo-500 bg-indigo-50/50' : 'border-slate-300'
                          } ${inputValues[i] ? 'text-indigo-600' : 'text-slate-200'}`}
                        >
                          {inputValues[i] ? (
                            interaction.options.find((o: any) => o.id === inputValues[i])?.text || inputValues[i]
                          ) : (
                            <span>...</span>
                          )}
                        </div>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(interaction.options || []).map((opt: any) => (
                  <div
                    key={opt.id}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      if (!feedback) {
                        setInputValues(prev => ({ ...prev, [activeGapIndex]: opt.id }));
                        // If there are more gaps, auto-advance to the next empty one
                        if (gaps > 1) {
                          const nextEmpty = Array.from({length: gaps}).findIndex((_, idx) => !inputValues[idx] && idx !== activeGapIndex);
                          if (nextEmpty !== -1) setActiveGapIndex(nextEmpty);
                        }
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (!feedback) {
                          setInputValues(prev => ({ ...prev, [activeGapIndex]: opt.id }));
                          if (gaps > 1) {
                            const nextEmpty = Array.from({length: gaps}).findIndex((_, idx) => !inputValues[idx] && idx !== activeGapIndex);
                            if (nextEmpty !== -1) setActiveGapIndex(nextEmpty);
                          }
                        }
                      }
                    }}
                    className={`w-full p-4 text-center border-2 border-b-4 rounded-2xl font-bold text-xl transition-all cursor-pointer ${
                      feedback 
                        ? (() => {
                            const isSelectedInAnyGap = Object.values(inputValues).includes(opt.id);
                            const isSelectedInActiveGap = inputValues[activeGapIndex] === opt.id;
                            
                            const correctText = String(interaction.correct_answer || interaction.correctAnswer || "");
                            const possibleAnswers = correctText.split(/[\\/]+/).map(a => normalizeForComparison(a)).filter(Boolean);
                            const normalizedOptId = normalizeForComparison(String(opt.id));
                            const normalizedOptText = normalizeForComparison(String(opt.text));
                            const isThisOptionCorrect = possibleAnswers.includes(normalizedOptId) || 
                                                       possibleAnswers.includes(normalizedOptText);
                            
                            if (isThisOptionCorrect) return 'border-green-500 bg-green-50 text-green-700';
                            if (isSelectedInActiveGap) return 'border-red-500 bg-red-50 text-red-700';
                            return 'border-slate-100 bg-white text-slate-300';
                          })()
                        : Object.values(inputValues).includes(opt.id)
                          ? inputValues[activeGapIndex] === opt.id
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700 active:translate-y-1'
                            : 'border-indigo-200 bg-indigo-50/30 text-indigo-400'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 active:translate-y-1'
                    } ${feedback ? 'pointer-events-none' : ''}`}
                  >
                    {opt.text}
                  </div>
                ))}
              </div>
            </div>
          );
        }

        return (
          <div className="w-full max-w-2xl mx-auto space-y-8">
            <h2 className="text-2xl font-black text-slate-800 text-center">
              {isSolutionInPrompt ? "Completa el espacio:" : interaction.prompt_es}
            </h2>
            <div className="bg-slate-50 p-10 rounded-[3rem] border-4 border-slate-200 shadow-inner text-center relative group">
               <PronunciationButton text={interaction.stimulus_en} size="md" className="absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition-opacity" />
               {hasBlank ? (
                 <div className="text-2xl font-bold text-slate-700 flex flex-wrap justify-center items-center gap-x-4 gap-y-8">
                   {(interaction.stimulus_en || "").split(/_{2,}/).map((part: string, i: number, arr: any[]) => (
                     <React.Fragment key={i}>
                       <span>{part}</span>
                       {i < arr.length - 1 && (
                         <input 
                           type="text" 
                           autoFocus={i === 0}
                           value={inputValues[i] || ""}
                           disabled={!!feedback}
                           className="w-48 p-2 border-b-8 border-indigo-500 bg-transparent text-center focus:outline-none placeholder:text-slate-200"
                           placeholder="..."
                           onChange={(e) => setInputValues(prev => ({ ...prev, [i]: e.target.value }))}
                           onKeyDown={(e) => { 
                             if (e.key === 'Enter') {
                               const stim = interaction.stimulus_en || "";
                               const gaps = (stim.match(/_{2,}/g) || []).length || 1;
                               const filledCount = Object.values(inputValues).filter(v => v.trim().length > 0).length;
                               if (filledCount >= gaps) {
                                 const answers = [];
                                 for (let j = 0; j < gaps; j++) answers.push(inputValues[j] || "");
                                 handleCheckAnswer(answers.join(' ').trim());
                               }
                             }
                           }}
                         />
                       )}
                     </React.Fragment>
                   ))}
                 </div>
               ) : (
                 <div className="space-y-8">
                    <p className="text-3xl font-bold text-slate-700">{interaction.stimulus_en || interaction.text}</p>
                    <input 
                      type="text" 
                      autoFocus
                      value={inputValues[0] || ""}
                      disabled={!!feedback}
                      className="w-full p-6 text-2xl font-black border-b-8 border-indigo-500 bg-transparent text-center focus:outline-none placeholder:text-slate-200"
                      placeholder="Escribe aquí..."
                      onChange={(e) => setInputValues(prev => ({ ...prev, 0: e.target.value }))}
                      onKeyDown={(e) => { if (e.key === 'Enter' && (inputValues[0]?.trim().length || 0) > 0) handleCheckAnswer(inputValues[0] || ""); }}
                    />
                 </div>
               )}
            </div>
          </div>
        );

      case 'categorization':
        const allItems = interaction.categories.flatMap((cat: any) => cat.items || []);
        const remainingItems = allItems.filter((item: any) => {
          const id = typeof item === 'string' ? item : item.id;
          return !categorizedItems[id];
        });
        
        return (
          <div className="w-full max-w-4xl mx-auto space-y-12">
            <h2 className="text-3xl font-black text-slate-800 text-center">{interaction.prompt_es}</h2>
            <div className="flex flex-wrap gap-4 justify-center p-8 bg-slate-50/50 rounded-3xl border-4 border-dashed border-slate-100 min-h-[120px]">
              {remainingItems.length === 0 ? (
                <p className="text-slate-400 font-black text-xl flex items-center gap-2"><CheckCircle2 /> ¡Todo listo!</p>
              ) : (
                remainingItems.map((item: any, idx: number) => {
                  const id = typeof item === 'string' ? item : item.id;
                  const text = typeof item === 'string' ? item : item.text;
                  return (
                    <div key={`${id}-${idx}`} className="relative group">
                      <div
                        role="button"
                        tabIndex={0}
                        onClick={() => !feedback && setSelectedCategorizationItem(id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            if (!feedback) setSelectedCategorizationItem(id);
                          }
                        }}
                        className={`p-4 px-8 border-2 border-b-4 rounded-2xl font-bold text-2xl transition-all cursor-pointer ${
                          selectedCategorizationItem === id
                            ? 'bg-indigo-600 border-indigo-800 text-white scale-105 shadow-xl'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm'
                        } ${feedback ? 'pointer-events-none opacity-80' : ''}`}
                      >
                        {text}
                      </div>
                      <PronunciationButton text={text} className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-md border" />
                    </div>
                  );
                })
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {interaction.categories.map((cat: any) => (
                <div 
                  key={cat.id}
                  onClick={() => {
                    if (selectedCategorizationItem && !feedback) {
                      setCategorizedItems(prev => ({ ...prev, [selectedCategorizationItem]: cat.id }));
                      setSelectedCategorizationItem(null);
                    }
                  }}
                  className={`p-8 rounded-[2.5rem] border-4 border-b-[12px] transition-all cursor-pointer min-h-[200px] ${
                    selectedCategorizationItem 
                      ? 'border-indigo-200 bg-indigo-50/30 hover:bg-indigo-50' 
                      : 'border-slate-100 bg-white'
                  }`}
                >
                  <h3 className="text-2xl font-black text-slate-400 mb-6 uppercase tracking-widest">{cat.title || cat.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(categorizedItems).filter(([_, catId]) => catId === cat.id).map(([itemId], idx) => {
                      // Find the original item to get its text
                      const originalItem = allItems.find((i: any) => (typeof i === 'string' ? i : i.id) === itemId);
                      const text = typeof originalItem === 'string' ? originalItem : originalItem?.text || itemId;
                      
                      return (
                        <button
                          key={`${itemId}-${idx}`}
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            if (!feedback) setCategorizedItems(prev => { 
                              const next = { ...prev }; 
                              delete next[itemId]; 
                              return next; 
                            }); 
                          }}
                          className="p-3 px-5 bg-slate-900 text-white rounded-2xl font-bold text-lg flex items-center gap-2 hover:bg-red-500 transition-colors"
                        >
                          {text} <X className="w-4 h-4" />
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'true_false':
        return (
          <div className="w-full max-w-xl mx-auto space-y-12">
            <div className="space-y-6 text-center">
              <h2 className="text-2xl font-black text-slate-800 leading-tight">{interaction.prompt_es}</h2>
              {interaction.stimulus_en && (
                <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-100 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent relative group">
                  <PronunciationButton text={interaction.stimulus_en} size="md" className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-2xl font-bold text-slate-700 leading-relaxed">
                    {interaction.stimulus_en}
                  </p>
                </div>
              )}
            </div>

            {/* Show correction if wrong order */}
            {feedback && interaction.correct_answer === false && interaction.correct_order && (
              <div className="bg-indigo-50 p-6 rounded-2xl border-2 border-indigo-100 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
                <p className="text-indigo-400 font-bold text-sm uppercase tracking-widest mb-2">Orden Correcto:</p>
                <p className="text-indigo-900 font-black text-xl italic leading-relaxed">
                  &quot;{interaction.correct_order}&quot;
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-6">
              <button 
                onClick={() => setSelectedOption(true)}
                disabled={!!feedback}
                className={`p-10 border-2 border-b-[10px] rounded-[2rem] font-black text-3xl transition-all flex items-center justify-between px-12 ${
                  feedback ? (interaction.correct_answer === true ? 'bg-green-100 border-green-500 text-green-700' : 'bg-slate-50 border-slate-100 text-slate-200') 
                  : selectedOption === true ? 'bg-indigo-50 border-indigo-500 text-indigo-700 active:translate-y-2'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 active:translate-y-2'
                }`}
              >
                VERDADERO
                {feedback && interaction.correct_answer === true && <CheckCircle2 className="w-10 h-10" />}
              </button>
              <button 
                onClick={() => setSelectedOption(false)}
                disabled={!!feedback}
                className={`p-10 border-2 border-b-[10px] rounded-[2rem] font-black text-3xl transition-all flex items-center justify-between px-12 ${
                  feedback ? (interaction.correct_answer === false ? 'bg-green-100 border-green-500 text-green-700' : 'bg-slate-50 border-slate-100 text-slate-200') 
                  : selectedOption === false ? 'bg-indigo-50 border-indigo-500 text-indigo-700 active:translate-y-2'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 active:translate-y-2'
                }`}
              >
                FALSO
                {feedback && interaction.correct_answer === false && <CheckCircle2 className="w-10 h-10" />}
              </button>
            </div>
          </div>
        );

      case 'short_writing':
      case 'dictation_guided':
        return (
          <div className="w-full max-w-2xl mx-auto space-y-12">
             <div className="space-y-4">
                <h2 className="text-2xl font-black text-slate-800 text-center">{interaction.prompt_es}</h2>
                {interaction.stimulus_es && (
                   <p className="text-center text-indigo-600 font-black text-3xl mb-8">
                     &quot;{interaction.stimulus_es}&quot;
                   </p>
                )}
                {interaction.example && (
                   <p className="text-center text-slate-400 font-bold text-lg italic">
                     Ejemplo: &quot;{interaction.example}&quot;
                   </p>
                )}
             </div>
             <div className="bg-slate-50 p-10 rounded-[3rem] border-4 border-slate-200 shadow-inner">
                <div className="space-y-8 text-center">
                  {interaction.type === 'dictation_guided' && (
                    <div className="flex justify-center">
                      <Button
                        variant="outline"
                        size="lg"
                        className="h-20 w-20 rounded-full border-4 border-indigo-200"
                        onClick={() => playAudio(interaction.audioUrl, interaction.tts_en || interaction.stimulus_en)}
                      >
                        <Volume2 className="w-10 h-10 text-indigo-600" />
                      </Button>
                    </div>
                  )}
                  <input 
                    type="text" 
                    value={inputValues[0] || ""}
                    autoFocus
                    disabled={!!feedback}
                    className="w-full p-6 text-2xl font-black border-b-8 border-indigo-500 bg-transparent text-center focus:outline-none placeholder:text-slate-200"
                    placeholder="Escribe aquí..."
                    onChange={(e) => setInputValues(prev => ({ ...prev, 0: e.target.value }))}
                    onKeyDown={(e) => { 
                      if (e.key === 'Enter' && (inputValues[0]?.trim().length || 0) > 0) {
                        handleCheckAnswer(inputValues[0] || ""); 
                      }
                    }}
                  />
                </div>
             </div>
          </div>
        );

      default:
        return (
          <div className="text-center p-12 bg-slate-50 rounded-[3rem] border-4 border-dashed border-slate-200">
            <h3 className="text-2xl font-black text-slate-400 uppercase tracking-widest">Actividad No Implementada</h3>
            <p className="text-slate-400 mt-2 font-bold">{interaction.type}</p>
          </div>
        );
    }
  };

  const renderVideoScene = (video: any) => {
    if (isRepairing) {
      return (
        <div className="w-full max-w-2xl mx-auto space-y-8 py-12">
           <div className="bg-orange-50 border-4 border-orange-200 p-12 rounded-[3rem] text-center space-y-8 shadow-2xl shadow-orange-100">
              <div className="w-24 h-24 bg-orange-200 rounded-full flex items-center justify-center mx-auto">
                <AlertCircle className="w-12 h-12 text-orange-600" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl font-black text-orange-900 tracking-tight">Repaso rápido</h2>
                <p className="text-2xl font-bold text-orange-700">{video.branching?.repair_scene?.narration_es || "Revisemos esto un momento."}</p>
              </div>
              <div className="text-4xl font-black text-slate-800 p-8 bg-white rounded-3xl shadow-inner border-2 border-orange-100">
                {video.branching?.repair_scene?.visual_description || "Presta atención a los detalles."}
              </div>
              <Button 
                className="bg-orange-500 hover:bg-orange-600 text-white font-black px-12 py-8 rounded-[2rem] w-full text-2xl border-b-8 border-orange-700 active:translate-y-1 transition-all"
                onClick={() => {
                  setIsRepairing(false);
                  const interaction = video.interactions[interactionIndex];
                  if (interaction) {
                    const tag = interaction.mastery_tag;
                    setFailCount({ ...failCount, [tag]: 0 });
                  }
                }}
              >
                ¡LO TENGO!
              </Button>
           </div>
        </div>
      );
    }

    if (showInteraction) {
      return (
        <div className="space-y-12">
          <div className="flex justify-center">
            <div className="bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-2">
              <Star className="w-4 h-4 fill-indigo-700" />
              Desafío Interactivo
            </div>
          </div>
          {renderInteraction(video.interactions[interactionIndex])}
        </div>
      );
    }

    const scene = video.scenes?.[currentSceneIndex];
    if (!scene) {
      return (
        <div className="text-center p-12 bg-slate-50 rounded-[3rem] border-4 border-dashed border-slate-200">
          <h3 className="text-2xl font-black text-slate-400 uppercase tracking-widest">Escena no encontrada</h3>
          <p className="text-slate-400 mt-2 font-bold">La escena {currentSceneIndex + 1} del video no está disponible.</p>
          <Button 
            className="mt-6 bg-indigo-600 text-white font-black px-8 py-4 rounded-xl"
            onClick={() => {
              if (currentSceneIndex < video.scenes?.length - 1) {
                setCurrentSceneIndex(prev => prev + 1);
              } else {
                setShowInteraction(true);
              }
            }}
          >
            SALTAR ESCENA
          </Button>
        </div>
      );
    }
    return (
      <div className="w-full max-w-4xl mx-auto space-y-12 px-4">
        <div className="bg-white border-4 border-slate-100 rounded-[3rem] p-8 md:p-12 flex flex-col items-center gap-10 shadow-2xl shadow-slate-200/50">
           <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 bg-indigo-50 px-6 py-2 rounded-full border border-indigo-100">
                 <Volume2 className="w-6 h-6 text-indigo-500" />
                 <span className="text-indigo-600 font-black text-sm uppercase tracking-widest">Escena {currentSceneIndex + 1} de {video.scenes.length}</span>
              </div>
              <p className="text-indigo-400 font-bold text-lg italic opacity-70">
                {scene.visual_description || scene.narration_es}
              </p>
           </div>
           
           <motion.button 
             onClick={() => { playAudio(scene.audioUrl, scene.tts_en || scene.dialogue_en); }}
             className="w-48 h-48 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center cursor-pointer shadow-2xl shadow-indigo-200 group relative active:scale-95 hover:scale-105 transition-transform"
           >
             <div className="absolute inset-0 bg-indigo-400 rounded-[2.5rem] animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
             <Play className="w-24 h-24 text-white fill-white ml-2 relative z-10" />
           </motion.button>

           <div className="space-y-6 text-center">
              <h3 className="text-slate-800 text-3xl md:text-5xl font-black tracking-tight leading-tight whitespace-pre-line">
                {scene.dialogue_en}
              </h3>
           </div>
        </div>
      </div>
    );
  };

  const renderTransition = (item: any) => {
    // Find section index for "Section X of Y"
    const sectionIndex = unitData.blocks.findIndex(b => b.title === item.title) + 1;
    const totalSections = unitData.blocks.length;

    return (
      <div className="w-full max-w-3xl mx-auto text-center space-y-12 py-12 px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="space-y-10"
        >
          <div className="relative">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 bg-indigo-50 rounded-[3rem] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50"
            />
            <div className="w-32 h-32 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-indigo-200 relative z-10">
              <ArrowRight className="w-16 h-16 text-white" />
            </div>
          </div>

          <div className="space-y-4 relative z-10">
            <h2 className="text-indigo-500 font-black uppercase tracking-[0.4em] text-sm">
              SECCIÓN {sectionIndex} DE {totalSections}
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              {item.title}
            </h3>
            <p className="text-2xl text-slate-400 font-bold max-w-md mx-auto leading-relaxed">
              ¡Increíble progreso! Estás dominando esta unidad paso a paso.
            </p>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={handleNext}
              className="mt-12 bg-indigo-600 hover:bg-indigo-700 text-white font-black px-20 py-10 rounded-[2.5rem] text-3xl border-b-[12px] border-indigo-800 active:translate-y-2 transition-all shadow-2xl shadow-indigo-100"
            >
              CONTINUAR
            </Button>
          </motion.div>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col overflow-y-auto">
      <header className="max-w-5xl mx-auto w-full px-6 py-8 md:py-12 flex items-center gap-6">
        <button onClick={onExit} className="p-3 text-slate-300 hover:text-slate-600 transition-colors">
          <X className="w-8 h-8" />
        </button>
        <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden shadow-inner relative">
          <motion.div 
            className="h-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] relative"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          >
            <motion.div 
              className="absolute inset-0 bg-white/30"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              style={{ width: '30%' }}
            />
          </motion.div>
        </div>
        <div className="bg-orange-100 px-4 py-2 rounded-2xl flex items-center gap-2">
          <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
          <span className="text-orange-700 font-black">Unidad</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center py-4 md:py-8 overflow-y-auto bg-slate-50/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentIndex}-${interactionIndex}-${isRepairing}-${showInteraction}-${currentSceneIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-5xl mx-auto px-6 flex flex-col justify-start md:justify-center min-h-[60vh]"
          >
            {currentItem?.main_instructions && 
             !["Lesson Exercises", "Exercise", "Unit Exercise", "Práctica", "Actividad"].includes(currentItem.main_instructions) && 
             (() => {
                const clean = (t: string) => t.toLowerCase().replace(/[.:!¡¿?]/g, '').trim();
                const instr = clean(currentItem.main_instructions);
                const prompt = clean(currentItem.prompt_es || "");
                return instr !== prompt && !instr.includes(prompt.substring(0, 30)) && !prompt.includes(instr.substring(0, 30));
             })() && (
               <div className="mb-8 bg-white/80 backdrop-blur-sm p-6 rounded-3xl border-2 border-indigo-100 shadow-sm max-w-2xl mx-auto w-full">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-indigo-100 p-2 rounded-xl">
                      <Sparkles className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="text-xs font-black text-indigo-400 uppercase tracking-widest">Instrucciones</span>
                  </div>
                  <p className="text-lg font-bold text-slate-700 leading-tight">
                    {currentItem.main_instructions}
                  </p>
               </div>
            )}
            {currentItem?.type === 'transition' 
              ? renderTransition(currentItem) 
              : (isVideoMode ? renderVideoScene(currentItem.video) : renderInteraction(currentItem))
            }
          </motion.div>
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {feedback && (() => {
          const interaction = isVideoMode ? currentItem.video.interactions[interactionIndex] : currentItem;
          const id = interaction.interaction_id || interaction.mastery_tag;
          return (
            <motion.footer 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className={`fixed bottom-0 left-0 right-0 border-t-[4px] z-50 ${
                feedback.correct ? 'bg-[#d7ffb8] border-[#a5db5e]' : 'bg-[#ffdfe0] border-[#ee9b9e]'
              }`}
            >
              <div className="max-w-4xl mx-auto px-6 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                    feedback.correct ? 'bg-white text-green-500' : 'bg-white text-red-500'
                  }`}>
                    {feedback.correct ? <CheckCircle2 className="w-8 h-8" /> : <AlertCircle className="w-8 h-8" />}
                  </div>
                  <div className="space-y-0.5">
                    <h3 className={`text-xl font-black ${feedback.correct ? 'text-[#4b7e02]' : 'text-[#ea2b2b]'}`}>
                      {feedback.correct ? getEncouragingMessage(true, 0) : ((failCount[id] || 0) >= 3 ? 'La solución es:' : '¡Uy! Casi...')}
                    </h3>
                    <p className={`text-base font-bold whitespace-pre-line ${feedback.correct ? 'text-[#4b7e02]/80' : 'text-[#ea2b2b]/80'}`}>
                      {feedback.message}
                    </p>
                    {interaction.tip_es && !feedback.correct && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-2 flex items-start gap-2 bg-white/50 p-3 rounded-xl border border-[#ee9b9e]/50"
                      >
                        <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-sm font-bold text-slate-700 italic">
                          <span className="text-[#ea2b2b] uppercase text-[10px] tracking-wider block mb-0.5">Tip:</span>
                          {interaction.tip_es}
                        </p>
                      </motion.div>
                    )}
                    {interaction.explanation && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className={`mt-2 flex items-start gap-2 bg-white/50 p-3 rounded-xl border ${
                          feedback.correct ? 'border-[#a5db5e]/50' : 'border-[#ee9b9e]/50'
                        }`}
                      >
                        <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                        <div className="text-sm font-bold text-slate-700">
                          <span className={`${feedback.correct ? 'text-[#4b7e02]' : 'text-[#ea2b2b]'} uppercase text-[10px] tracking-wider block mb-0.5`}>
                            Explicación:
                          </span>
                          <p className="whitespace-pre-line leading-relaxed">{interaction.explanation}</p>
                        </div>
                      </motion.div>
                    )}

                    {/* AI Dynamic Explanation */}
                    {!interaction.explanation && (
                      <div className="mt-2">
                        {aiExplanation ? (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className={`flex items-start gap-2 bg-white/50 p-3 rounded-xl border ${
                              feedback.correct ? 'border-[#a5db5e]/50' : 'border-[#ee9b9e]/50'
                            }`}
                          >
                            <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                            <div className="text-sm font-bold text-slate-700">
                              <span className={`${feedback.correct ? 'text-[#4b7e02]' : 'text-[#ea2b2b]'} uppercase text-[10px] tracking-wider block mb-0.5`}>
                                Explicación IA:
                              </span>
                              <p className="whitespace-pre-line leading-relaxed">{aiExplanation}</p>
                            </div>
                          </motion.div>
                        ) : (
                          <button
                            onClick={handleRequestAIExplanation}
                            disabled={isExplaining}
                            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-black transition-all border-b-2 active:translate-y-0.5 ${
                              feedback.correct 
                                ? 'bg-[#58cc02] text-white border-[#4b7e02] hover:bg-[#46a302]' 
                                : 'bg-[#ff4b4b] text-white border-[#ea2b2b] hover:bg-[#d33131]'
                            } disabled:opacity-50`}
                          >
                            {isExplaining ? (
                              <>
                                <Loader2 className="w-3 h-3 animate-spin" />
                                GENERANDO...
                              </>
                            ) : (
                              <>
                                <Sparkles className="w-3 h-3" />
                                ¿POR QUÉ ES ASÍ? (IA)
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <Button 
                  onClick={handleFeedbackContinue}
                  className={`w-full md:w-auto px-10 py-4 rounded-2xl font-black text-xl border-b-4 active:translate-y-0.5 transition-all ${
                    feedback.correct ? 'bg-[#58cc02] hover:bg-[#46a302] border-[#4b7e02] text-white' : 'bg-[#ff4b4b] hover:bg-[#d33131] border-[#ea2b2b] text-white'
                  }`}
                >
                  CONTINUAR
                </Button>
              </div>
            </motion.footer>
          );
        })()}
      </AnimatePresence>

      <footer className={`p-4 md:p-6 border-t-2 border-slate-100 bg-white ${feedback || currentItem?.type === 'transition' ? 'hidden' : ''}`}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <Button 
            variant="outline" 
            className="text-slate-400 font-black text-lg hover:text-slate-600 px-6 h-12 rounded-xl"
            onClick={onExit}
          >
            SALIR
          </Button>

          {isVideoMode && !showInteraction ? (
            <Button 
              className="bg-indigo-600 hover:bg-indigo-700 border-b-4 border-indigo-800 font-black px-12 h-14 rounded-2xl text-xl text-white shadow-lg active:translate-y-0.5 transition-all"
              onClick={handleNext}
            >
              SIGUIENTE ESCENA
            </Button>
          ) : (
            <Button 
              disabled={(() => {
                const interaction = isVideoMode ? currentItem.video.interactions[interactionIndex] : currentItem;
                if (!interaction) return false;
                if (interaction.type === 'reorder_words') return selectedWords.length === 0;
                if (interaction.type === 'matching' || interaction.type === 'vocabulary-match') {
                  const pairs = (interaction.content?.pairs || interaction.pairs || []);
                  return Object.keys(matchingPairs).length < pairs.length;
                }
                if (['transformation', 'fill_blanks', 'fill_blank', 'fill-blank'].includes(interaction.type)) {
                  const stim = interaction.stimulus_en || "";
                  const gaps = (stim.match(/_{2,}/g) || []).length || 1;
                  const filledCount = Object.values(inputValues).filter(v => v && v.toString().trim().length > 0).length;
                  return filledCount < gaps;
                }
                if (interaction.type === 'categorization') {
                  const items = interaction.categories?.flatMap((cat: any) => cat.items) || [];
                  return Object.keys(categorizedItems).length < items.length;
                }
                if (['short_writing', 'dictation_guided'].includes(interaction.type)) {
                  return !inputValues[0] || inputValues[0].trim().length === 0;
                }
                if (['multiple_choice', 'true_false', 'odd_one_out', 'listening_image_mc', 'reading-comprehension', 'writing-analysis'].includes(interaction.type)) {
                  return selectedOption === null;
                }
                return false;
              })()}
              className="bg-[#58cc02] hover:bg-[#46a302] disabled:bg-slate-100 disabled:text-slate-300 disabled:border-slate-200 border-b-4 border-[#4b7e02] font-black px-12 h-14 rounded-2xl text-xl text-white shadow-lg active:translate-y-0.5 transition-all"
              onClick={() => {
                const interaction = isVideoMode ? currentItem.video.interactions[interactionIndex] : currentItem;
                if (!interaction) return;
                
                if (interaction.type === 'reorder_words') handleCheckAnswer(selectedWords.map(w => w.id));
                else if (['matching', 'multiple_matching', 'vocabulary-match'].includes(interaction.type)) handleCheckAnswer(matchingPairs);
                else if (interaction.type === 'categorization') handleCheckAnswer(Object.keys(categorizedItems));
                else if (['gapped_text', 'multiple_choice_cloze'].includes(interaction.type)) handleCheckAnswer(inputValues);
                else if (['transformation', 'fill_blanks', 'fill_blank', 'fill-blank'].includes(interaction.type)) {
                  const stim = interaction.stimulus_en || "";
                  const gaps = (stim.match(/_{2,}/g) || []).length || 1;
                  const answers = [];
                  
                  if (interaction.options && interaction.options.length > 0) {
                    for (let j = 0; j < gaps; j++) {
                      const optId = inputValues[j];
                      const opt = interaction.options.find((o: any) => o.id === optId);
                      answers.push(opt ? opt.text : (optId || ""));
                    }
                  } else {
                    for (let j = 0; j < gaps; j++) answers.push(inputValues[j] || "");
                  }
                  
                  handleCheckAnswer(answers.join(' ').trim());
                }
                else if (['short_writing', 'dictation_guided', 'writing_task'].includes(interaction.type)) {
                   handleCheckAnswer(inputValues[0] || "");
                }
                else if (['multiple_choice', 'true_false', 'odd_one_out', 'listening_image_mc', 'reading-comprehension', 'writing-analysis'].includes(interaction.type)) {
                  if (selectedOption !== null) handleCheckAnswer(selectedOption);
                }
                else if (interaction.type === 'ai-mission') {
                  handleCheckAnswer('mission-completed');
                }
                else handleNext();
              }}
            >
              {(() => {
                const interaction = isVideoMode ? currentItem.video.interactions[interactionIndex] : currentItem;
                if (!interaction) return 'SIGUIENTE';
                if (interaction.type === 'ai-mission') return 'COMPLETAR MISIÓN';
                return ['reorder_words', 'matching', 'multiple_matching', 'short_writing', 'transformation', 'fill_blanks', 'fill_blank', 'fill-blank', 'categorization', 'dictation_guided', 'multiple_choice', 'true_false', 'odd_one_out', 'listening_image_mc', 'gapped_text', 'multiple_choice_cloze', 'writing_task', 'reading-comprehension', 'writing-analysis', 'vocabulary-match'].includes(interaction.type) ? 'COMPROBAR' : 'SIGUIENTE';
              })()}
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
}
