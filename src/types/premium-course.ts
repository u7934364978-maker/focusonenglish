export interface PremiumOption {
  id: string;
  text: string;
}

export interface PremiumPair {
  id: string;
  left: string;
  right: string;
}

export interface PremiumCategory {
  id: string;
  title?: string;
  name?: string;
  items: string[];
}

export interface PremiumInteraction {
  interaction_id: string;
  type: string;
  prompt_es: string;
  options?: PremiumOption[];
  correct_answer?: string | string[] | boolean | Record<string, string>;
  feedback_correct_es?: string;
  feedback_incorrect_es?: string;
  mastery_tag: string;
  pairs?: PremiumPair[];
  stimulus_en?: string;
  correct_answer_es?: string;
  categories?: PremiumCategory[];
  validation_regex?: string;
  example?: string;
  audioUrl?: string;
  tts_en?: string;
  correct_sentence_en?: string;
  // Cambridge B1 Preliminary Extensions
  main_text?: string; // For gapped_text and cloze
  removed_paragraphs?: Array<{ id: string; text: string; isDistractor?: boolean }>; // For gapped_text
  gaps?: Array<{ gap_id: string; correct_answer: string; options?: PremiumOption[]; explanation?: string }>; // For cloze
  profiles?: Array<{ id: string; name: string; description: string }>; // For multiple_matching (Part 2)
  descriptions?: Array<{ id: string; title: string; content: string }>; // For multiple_matching (Part 2)
  image_url?: string; // For listening Part 1 or Speaking Part 2
  writing_type?: 'email' | 'article' | 'story';
  word_count_min?: number;
  word_count_max?: number;
  input_placeholder_es?: string;
  speaking_type?: 'interview' | 'monologue' | 'discussion';
}

export interface PremiumVideoScene {
  scene_id: string;
  visual_description?: string;
  narration_es?: string;
  dialogue_en: string;
  tts_en?: string;
  on_screen_text?: string;
  audioUrl?: string;
}

export interface PremiumVideo {
  video_id: string;
  objective: string;
  vocabulary: string[];
  scenes: PremiumVideoScene[];
  interactions: PremiumInteraction[];
  branching?: {
    logic: string;
    repair_scene: {
      scene_id: string;
      visual_description: string;
      narration_es: string;
    };
  };
}

export interface PremiumContent {
  interaction_id?: string;
  type?: string;
  video?: PremiumVideo;
  [key: string]: any; // Fallback for various interaction types
}

export interface PremiumBlock {
  block_id: string;
  title: string;
  duration_minutes: number;
  content: PremiumContent[];
}

export interface PremiumCourse {
  unit_id: string;
  unit_title: string;
  level: string;
  total_duration_minutes: number;
  language_ui: string;
  target_language: string;
}

export interface UnitData {
  course: PremiumCourse;
  learning_outcomes?: string[];
  mastery_tags?: string[];
  blocks: PremiumBlock[];
}
