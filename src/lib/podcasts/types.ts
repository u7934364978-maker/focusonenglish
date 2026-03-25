export type PodcastLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
export type PodcastTrack = 'general' | 'professional' | 'travel'
export type PodcastDuration = 2 | 5 | 10 | 20 | 30
export type PodcastVoice = 'orion' | 'luna'

export interface DialogueTurn {
  speaker: 'A' | 'B'
  voice: PodcastVoice
  text: string
}

export interface VocabularyItem {
  word: string
  translation: string
  example: string
}

export interface ComprehensionQuestion {
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface PodcastEpisode {
  id: string
  level: PodcastLevel
  track: PodcastTrack
  durationMinutes: PodcastDuration
  module: 1 | 2 | 3
  title: string
  description: string
  topic: string
  audioUrl: string
  transcript: DialogueTurn[]
  vocabulary: VocabularyItem[]
  comprehensionQuestions: ComprehensionQuestion[]
}

export interface PodcastProgress {
  episodeId: string
  userId: string
  progressSeconds: number
  completed: boolean
  completedAt?: string
}
