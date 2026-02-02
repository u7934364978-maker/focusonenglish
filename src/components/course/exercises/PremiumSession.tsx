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
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { UnitData, PremiumBlock, PremiumContent } from "@/types/premium-course";
import { getSolutionText, isLikelyEnglish } from "@/lib/premium-utils";

interface Props {
  unitData: UnitData;
  onComplete: () => void;
  onExit: () => void;
  onInteractionCorrect?: (interactionId: string) => void;
}

export default function PremiumCourseSession({ unitData, onComplete, onExit, onInteractionCorrect }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
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
  
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const prefetchingRef = useRef<Set<string>>(new Set());

  // Flatten all blocks into a single exercise queue
  const queue = useMemo(() => {
    const items: any[] = [];
    unitData.blocks.forEach((block: PremiumBlock) => {
      block.content.forEach((content: PremiumContent) => {
        items.push({ ...content, blockTitle: block.title });
      });
    });
    return items;
  }, [unitData]);

  const currentItem = queue[currentIndex];
  const progress = (currentIndex / queue.length) * 100;

  const playAudio = async (url?: string, text?: string) => {
    if (!url && !text) return;
    
    // Stop current audio if playing
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current = null;
    }

    try {
      if (url) {
        const audio = new Audio(url);
        currentAudioRef.current = audio;
        // No acelerar sonidos de sistema
        if (!url.includes('correct.mp3') && !url.includes('wrong.mp3')) {
          audio.playbackRate = 1.1;
        }
        await audio.play();
        return;
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
      
    if (interaction?.type === 'matching' && shuffledRight.length === 0) {
      const rightItems = interaction.pairs.map((p: any) => ({ id: p.id, text: p.right }));
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

  const handleNext = () => {
    setSelectedWords([]);
    setShuffledRight([]);
    setShuffledOptions([]);
    setMatchingPairs({});
    setMatchingSelections({});
    setInputValues({});
    setCategorizedItems({});
    setSelectedCategorizationItem(null);
    setFeedback(null);
    setSelectedOption(null);
    setIsCorrect(null);

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
          setShowSummary(true);
        }
      }
    } else {
      if (currentIndex < queue.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setShowSummary(true);
      }
    }
  };

  const handleCheckAnswer = (optionId: any) => {
    const interaction = isVideoMode ? currentItem.video.interactions[interactionIndex] : currentItem;
    let isAnswerCorrect = false;

    if (interaction.type === 'reorder_words') {
      const selectedText = (optionId as string[]).map(id => 
        interaction.options.find((o: any) => o.id === id)?.text
      ).join(' ');
      const correctText = (interaction.correct_answer as string[]).map((id: string) => 
        interaction.options.find((o: any) => o.id === id)?.text
      ).join(' ');
      isAnswerCorrect = selectedText === correctText;
    } else if (['true_false', 'odd_one_out', 'multiple_choice', 'role_play', 'listening_image_mc'].includes(interaction.type)) {
      // Robust comparison for boolean and string values
      const normalizedOption = typeof optionId === 'string' ? optionId.toLowerCase() : optionId;
      const normalizedCorrect = typeof interaction.correct_answer === 'string' ? interaction.correct_answer.toLowerCase() : interaction.correct_answer;
      
      if (interaction.type === 'true_false') {
        // Specifically handle True/False which might be stored as strings "true"/"false" or booleans
        const optBool = String(optionId).toLowerCase() === 'true';
        const correctBool = String(interaction.correct_answer).toLowerCase() === 'true';
        isAnswerCorrect = optBool === correctBool;
      } else {
        isAnswerCorrect = normalizedOption === normalizedCorrect;
      }
    } else if (['matching', 'multiple_matching'].includes(interaction.type)) {
      isAnswerCorrect = interaction.pairs 
        ? interaction.pairs.every((p: any) => matchingPairs[p.id] === p.id)
        : Object.entries(interaction.correct_answer as Record<string, string>).every(([k, v]) => matchingPairs[k] === v);
    } else if (['gapped_text', 'multiple_choice_cloze'].includes(interaction.type)) {
      const allCorrect = Object.entries(interaction.correct_answer as Record<string, string>).every(([gapId, correctVal]) => {
        return inputValues[gapId as any] === correctVal;
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
    } else if (interaction.type === 'transformation') {
      const input = (optionId as string).trim().toLowerCase();
      const correct = interaction.correct_answer.toLowerCase().trim();
      isAnswerCorrect = input === correct;
    } else if (interaction.type === 'writing_task') {
      const input = (optionId as string).trim();
      const minWords = interaction.word_count_min || 100;
      const wordCount = input.split(/\s+/).filter(Boolean).length;
      isAnswerCorrect = wordCount >= minWords;
    } else if (interaction.type === 'speaking_task') {
      isAnswerCorrect = true; // For now, just mark as finished
    } else if (interaction.type === 'short_writing' || interaction.type === 'dictation_guided') {
      const input = (optionId as string).trim();
      if (interaction.validation_regex) {
        const regex = new RegExp(interaction.validation_regex, 'i');
        isAnswerCorrect = regex.test(input);
      } else {
        isAnswerCorrect = input.length > 2;
      }
    }

    if (isAnswerCorrect) {
      setIsCorrect(true);
      setSelectedOption(optionId);
      
      let message = interaction.feedback_correct_es || "¡Excelente trabajo!";
      if (interaction.type === 'true_false' && String(interaction.correct_answer).toLowerCase() === 'false' && interaction.correct_sentence_en) {
        message = `${message}\n\nLa frase correcta es: "${interaction.correct_sentence_en}"`;
      }
      
      setFeedback({ correct: true, message });
      playAudio('/audio/correct.mp3');

      // Track progress if callback is provided
      if (onInteractionCorrect && interaction.interaction_id) {
        onInteractionCorrect(interaction.interaction_id);
      }
    } else {
      setIsCorrect(false);
      setSelectedOption(optionId);
      const id = interaction.interaction_id || interaction.mastery_tag;
      const currentFails = (failCount[id] || 0) + 1;
      setFailCount(prev => ({ ...prev, [id]: currentFails }));
      
      let message = "";
      if (currentFails >= 3) {
        message = getSolutionText(interaction);
      } else {
        message = interaction.feedback_incorrect_es || "Sigue intentándolo, tú puedes.";
        if (interaction.type === 'true_false' && String(interaction.correct_answer).toLowerCase() === 'false' && interaction.correct_sentence_en) {
           message = `${message}\n\nLa frase correcta es: "${interaction.correct_sentence_en}"`;
        }
      }

      setFeedback({ correct: false, message: message });
      playAudio('/audio/wrong.mp3');
    }
  };

  const handleFeedbackContinue = () => {
    const interaction = isVideoMode ? currentItem.video.interactions[interactionIndex] : currentItem;
    const id = interaction.interaction_id || interaction.mastery_tag;

    if (!feedback?.correct && isVideoMode && currentItem.video.branching && failCount[id] >= 2) {
      setIsRepairing(true);
      setFeedback(null);
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
    }
  };

  if (showSummary) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-32 h-32 bg-amber-100 rounded-full flex items-center justify-center mb-8">
          <Trophy className="w-16 h-16 text-amber-600" />
        </motion.div>
        <h2 className="text-4xl font-black text-slate-900 mb-4">¡Unidad Completada!</h2>
        <p className="text-xl text-slate-600 mb-12">Has terminado todas las actividades de esta unidad.</p>
        <div className="flex flex-col gap-4 w-full max-w-xs">
          <Button onClick={onComplete} className="h-16 rounded-2xl bg-indigo-600 text-white text-xl font-black shadow-lg hover:bg-indigo-700">
            FINALIZAR
          </Button>
          <Button variant="outline" onClick={onExit} className="h-16 rounded-2xl border-2 border-slate-200 text-slate-600 text-lg font-bold">
            VOLVER AL CURSO
          </Button>
        </div>
      </div>
    );
  }

  const isInteractionDisabled = !!feedback;

  const PronunciationButton = ({ text, size = "sm", className = "" }: { text: string, size?: "sm" | "md", className?: string }) => {
    if (!text) return null;
    return (
      <Button
        variant="ghost"
        size="icon"
        className={`${size === "sm" ? "w-8 h-8" : "w-10 h-10"} rounded-full text-indigo-600 hover:bg-indigo-50 flex-shrink-0 ${className}`}
        onClick={(e) => {
          e.stopPropagation();
          playAudio(undefined, text);
        }}
      >
        <Volume2 className={size === "sm" ? "w-4 h-4" : "w-6 h-6"} />
      </Button>
    );
  };

  const renderInteraction = (interaction: any) => {
    if (!interaction) return null;
    
    switch (interaction.type) {
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
                <button
                  key={opt.id}
                  onClick={() => !isInteractionDisabled && setSelectedOption(opt.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-center font-medium flex items-center justify-center gap-2 group/opt ${
                    selectedOption === opt.id
                      ? isCorrect === true
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : isCorrect === false
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                  disabled={isInteractionDisabled}
                >
                  {opt.text}
                  {isLikelyEnglish(opt.text) && (
                    <PronunciationButton text={opt.text} className="opacity-0 group-hover/opt:opacity-100 transition-opacity" />
                  )}
                </button>
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
                    <motion.button
                      layoutId={opt.id}
                      key={`pool-${opt.id}`}
                      onClick={() => setSelectedWords(prev => [...prev, opt])}
                      disabled={!!feedback || !!isSelected}
                      className={`p-4 px-6 border-2 border-b-4 rounded-2xl font-bold text-xl transition-all ${
                        isSelected ? 'bg-slate-100 border-transparent text-transparent opacity-30 cursor-default' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 active:translate-y-0.5 shadow-sm'
                      }`}
                    >
                      {opt.text}
                    </motion.button>
                    {!isSelected && (
                      <PronunciationButton text={opt.text} className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white shadow-md border" />
                    )}
                  </div>
                );
              })}
            </div>
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
        const parts = interaction.main_text.split(/(\[GAP \d+\])/g);
        const fullTextForTTS = interaction.main_text.replace(/\[GAP \d+\]/g, '...');
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
                {interaction.pairs.map((p: any) => (
                  <button
                    key={`left-${p.id}`}
                    onClick={() => {
                      const newSelections = { ...matchingSelections, left: p.id };
                      if (newSelections.right) {
                        setMatchingPairs(prev => ({ ...prev, [newSelections.left!]: newSelections.right! }));
                        setMatchingSelections({});
                      } else setMatchingSelections(newSelections);
                    }}
                    disabled={!!feedback || !!matchingPairs[p.id]}
                    className={`w-full p-5 border-2 border-b-4 rounded-2xl font-bold text-xl transition-all flex items-center justify-between group/left ${
                      matchingPairs[p.id] ? 'bg-slate-50 border-slate-100 text-slate-300' :
                      matchingSelections.left === p.id ? 'bg-indigo-50 border-indigo-500 text-indigo-700 scale-105 shadow-md' :
                      'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span>{p.left}</span>
                    <PronunciationButton text={p.left} className="opacity-0 group-hover/left:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
              <div className="space-y-4">
                {shuffledRight.map((p: any) => (
                  <button
                    key={`right-${p.id}`}
                    onClick={() => {
                      const newSelections = { ...matchingSelections, right: p.id };
                      if (newSelections.left) {
                        setMatchingPairs(prev => ({ ...prev, [newSelections.left!]: newSelections.right! }));
                        setMatchingSelections({});
                      } else setMatchingSelections(newSelections);
                    }}
                    disabled={!!feedback || Object.values(matchingPairs).includes(p.id)}
                    className={`w-full p-5 border-2 border-b-4 rounded-2xl font-bold text-xl transition-all ${
                      Object.values(matchingPairs).includes(p.id) ? 'bg-slate-50 border-slate-100 text-slate-300' :
                      matchingSelections.right === p.id ? 'bg-indigo-50 border-indigo-500 text-indigo-700 scale-105 shadow-md' :
                      'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {p.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'multiple_choice':
      case 'odd_one_out':
      case 'role_play':
        return (
          <div className="w-full max-w-2xl mx-auto space-y-8">
            <h2 className="text-2xl font-black text-slate-800 text-center">{interaction.prompt_es}</h2>
            {interaction.stimulus_en && (
               <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-100 text-center mb-8 max-h-[40vh] overflow-y-auto relative group">
                  <PronunciationButton text={interaction.stimulus_en} size="md" className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-2xl font-bold text-slate-700 leading-relaxed whitespace-pre-line">
                    {interaction.stimulus_en}
                  </p>
               </div>
            )}
            <div className="grid gap-4">
              {interaction.options.map((opt: any) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedOption(opt.id)}
                  disabled={!!feedback}
                  className={`w-full p-6 text-left border-2 border-b-4 rounded-3xl font-bold text-xl transition-all flex items-center justify-between group/opt ${
                    feedback 
                      ? opt.id === interaction.correct_answer ? 'border-green-500 bg-green-50 text-green-700' : 'border-slate-100 bg-white text-slate-300'
                      : selectedOption === opt.id 
                        ? 'border-indigo-500 bg-indigo-50 text-indigo-700 active:translate-y-1'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 active:translate-y-1'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {opt.text}
                    {isLikelyEnglish(opt.text) && (
                      <PronunciationButton text={opt.text} className="opacity-0 group-hover/opt:opacity-100 transition-opacity" />
                    )}
                  </span>
                  {feedback && opt.id === interaction.correct_answer && <CheckCircle2 className="w-6 h-6" />}
                </button>
              ))}
            </div>
          </div>
        );

      case 'transformation':
        const hasBlank = /_{3,}/.test(interaction.stimulus_en || '');
        const isSolutionInPrompt = interaction.prompt_es && interaction.correct_answer && 
                                   interaction.prompt_es.toLowerCase().trim() === interaction.correct_answer.toLowerCase().trim();
        return (
          <div className="w-full max-w-2xl mx-auto space-y-8">
            <h2 className="text-2xl font-black text-slate-800 text-center">
              {isSolutionInPrompt ? "Completa el espacio:" : interaction.prompt_es}
            </h2>
            <div className="bg-slate-50 p-10 rounded-[3rem] border-4 border-slate-200 shadow-inner text-center relative group">
               <PronunciationButton text={interaction.stimulus_en} size="md" className="absolute right-6 top-6 opacity-0 group-hover:opacity-100 transition-opacity" />
               {hasBlank ? (
                 <div className="text-2xl font-bold text-slate-700 flex flex-wrap justify-center items-center gap-x-4 gap-y-8">
                   {interaction.stimulus_en.split(/_{3,}/).map((part: string, i: number, arr: any[]) => (
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
                               const gaps = (stim.match(/_{3,}/g) || []).length || 1;
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
                    <p className="text-3xl font-bold text-slate-700">{interaction.stimulus_en}</p>
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
                      <button
                        onClick={() => setSelectedCategorizationItem(id)}
                        disabled={!!feedback}
                        className={`p-4 px-8 border-2 border-b-4 rounded-2xl font-bold text-2xl transition-all ${
                          selectedCategorizationItem === id
                            ? 'bg-indigo-600 border-indigo-800 text-white scale-105 shadow-xl'
                            : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm'
                        }`}
                      >
                        {text}
                      </button>
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
                <div className="bg-slate-50 p-8 rounded-3xl border-2 border-slate-100 max-h-[40vh] overflow-y-auto relative group">
                  <PronunciationButton text={interaction.stimulus_en} size="md" className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="text-2xl font-bold text-slate-700 leading-relaxed">
                    {interaction.stimulus_en}
                  </p>
                </div>
              )}
            </div>
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

    const scene = video.scenes[currentSceneIndex];
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
           
           <motion.div 
             whileHover={{ scale: 1.05 }}
             whileActive={{ scale: 0.95 }}
             onClick={() => playAudio(scene.audioUrl, scene.tts_en || scene.dialogue_en)}
             className="w-48 h-48 bg-indigo-600 rounded-[2.5rem] flex items-center justify-center cursor-pointer shadow-2xl shadow-indigo-200 group relative"
           >
             <div className="absolute inset-0 bg-indigo-400 rounded-[2.5rem] animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
             <Play className="w-24 h-24 text-white fill-white ml-2 relative z-10" />
           </motion.div>

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
        <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden shadow-inner">
          <motion.div 
            className="h-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <div className="bg-orange-100 px-4 py-2 rounded-2xl flex items-center gap-2">
          <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
          <span className="text-orange-700 font-black">Unidad</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center py-12 md:py-20 overflow-y-auto bg-slate-50/30">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentIndex}-${interactionIndex}-${isRepairing}-${showInteraction}-${currentSceneIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="w-full max-w-5xl mx-auto px-6 flex flex-col justify-start md:justify-center min-h-[60vh]"
          >
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
              className={`fixed bottom-0 left-0 right-0 border-t-[6px] z-50 ${
                feedback.correct ? 'bg-[#d7ffb8] border-[#a5db5e]' : 'bg-[#ffdfe0] border-[#ee9b9e]'
              }`}
            >
              <div className="max-w-4xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-start gap-6">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center shadow-xl ${
                    feedback.correct ? 'bg-white text-green-500' : 'bg-white text-red-500'
                  }`}>
                    {feedback.correct ? <CheckCircle2 className="w-12 h-12" /> : <AlertCircle className="w-12 h-12" />}
                  </div>
                  <div className="space-y-2">
                    <h3 className={`text-3xl font-black ${feedback.correct ? 'text-[#4b7e02]' : 'text-[#ea2b2b]'}`}>
                      {feedback.correct ? '¡Increíble!' : ((failCount[id] || 0) >= 3 ? 'La solución es:' : '¡Uy! Casi...')}
                    </h3>
                    <p className={`text-xl font-bold whitespace-pre-line ${feedback.correct ? 'text-[#4b7e02]/80' : 'text-[#ea2b2b]/80'}`}>
                      {feedback.message}
                    </p>
                  </div>
                </div>
                <Button 
                  onClick={handleFeedbackContinue}
                  className={`w-full md:w-auto px-16 py-8 rounded-[2rem] font-black text-2xl border-b-8 active:translate-y-1 transition-all ${
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

      <footer className={`p-8 md:p-12 border-t-2 border-slate-100 bg-white ${feedback || currentItem?.type === 'transition' ? 'invisible' : ''}`}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-6">
          <Button 
            variant="ghost" 
            className="text-slate-400 font-black text-xl hover:text-slate-600 px-8 h-16 rounded-2xl"
            onClick={onExit}
          >
            SALIR
          </Button>

          {isVideoMode && !showInteraction ? (
            <Button 
              className="bg-indigo-600 hover:bg-indigo-700 border-b-8 border-indigo-800 font-black px-16 h-20 rounded-3xl text-2xl text-white shadow-xl active:translate-y-1 transition-all"
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
                if (interaction.type === 'matching') return Object.keys(matchingPairs).length < (interaction.pairs?.length || 0);
                if (interaction.type === 'transformation') {
                  const stim = interaction.stimulus_en || "";
                  const gaps = stim.match(/_{3,}/g) || [];
                  const exp = gaps.length || 1;
                  const filledCount = Object.values(inputValues).filter(v => v && v.toString().trim().length > 0).length;
                  return filledCount < exp;
                }
                if (interaction.type === 'categorization') {
                  const items = interaction.categories?.flatMap((cat: any) => cat.items) || [];
                  return Object.keys(categorizedItems).length < items.length;
                }
                if (['short_writing', 'dictation_guided'].includes(interaction.type)) {
                  return !inputValues[0] || inputValues[0].trim().length === 0;
                }
                if (['multiple_choice', 'true_false', 'odd_one_out', 'listening_image_mc'].includes(interaction.type)) {
                  return selectedOption === null;
                }
                return false;
              })()}
              className="bg-[#58cc02] hover:bg-[#46a302] disabled:bg-slate-100 disabled:text-slate-300 disabled:border-slate-200 border-b-8 border-[#4b7e02] font-black px-16 h-20 rounded-3xl text-2xl text-white shadow-xl active:translate-y-1 transition-all"
              onClick={() => {
                const interaction = isVideoMode ? currentItem.video.interactions[interactionIndex] : currentItem;
                if (!interaction) return;
                
                if (interaction.type === 'reorder_words') handleCheckAnswer(selectedWords.map(w => w.id));
                else if (interaction.type === 'matching') handleCheckAnswer(matchingPairs);
                else if (interaction.type === 'categorization') handleCheckAnswer(Object.keys(categorizedItems));
                else if (interaction.type === 'transformation') {
                  const stim = interaction.stimulus_en || "";
                  const gaps = stim.match(/_{3,}/g) || [];
                  const exp = gaps.length || 1;
                  const answers = [];
                  for (let j = 0; j < exp; j++) answers.push(inputValues[j] || "");
                  handleCheckAnswer(answers.join(' ').trim());
                }
                else if (['short_writing', 'dictation_guided'].includes(interaction.type)) {
                   handleCheckAnswer(inputValues[0] || "");
                }
                else if (['multiple_choice', 'true_false', 'odd_one_out', 'listening_image_mc'].includes(interaction.type)) {
                  if (selectedOption !== null) handleCheckAnswer(selectedOption);
                }
                else handleNext();
              }}
            >
              {(() => {
                const interaction = isVideoMode ? currentItem.video.interactions[interactionIndex] : currentItem;
                if (!interaction) return 'SIGUIENTE';
                return ['reorder_words', 'matching', 'short_writing', 'transformation', 'categorization', 'dictation_guided', 'multiple_choice', 'true_false', 'odd_one_out', 'listening_image_mc'].includes(interaction.type) ? 'COMPROBAR' : 'SIGUIENTE';
              })()}
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
}
