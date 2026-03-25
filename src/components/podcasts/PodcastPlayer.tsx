'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import type { PodcastEpisode } from '@/lib/podcasts/types'
import PodcastTranscript from './PodcastTranscript'
import PodcastVocabulary from './PodcastVocabulary'
import PodcastQuestions from './PodcastQuestions'

interface PodcastPlayerProps {
  episode: PodcastEpisode
  initialProgress: number
}

type Tab = 'transcript' | 'vocabulary'

const SPEEDS = [0.75, 1, 1.25] as const

function formatTime(s: number): string {
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export default function PodcastPlayer({ episode, initialProgress }: PodcastPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(initialProgress)
  const [duration, setDuration] = useState(0)
  const [speed, setSpeed] = useState<0.75 | 1 | 1.25>(1)
  const [tab, setTab] = useState<Tab>('transcript')
  const [completed, setCompleted] = useState(false)
  const lastSavedRef = useRef(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = initialProgress
  }, [initialProgress])

  const saveProgress = useCallback(async (seconds: number, done: boolean) => {
    try {
      await fetch('/api/podcasts/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ episodeId: episode.id, progressSeconds: Math.floor(seconds), completed: done }),
      })
    } catch {
    }
  }, [episode.id])

  const handleTimeUpdate = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    const t = audio.currentTime
    setCurrentTime(t)

    if (t - lastSavedRef.current >= 10) {
      lastSavedRef.current = t
      const pct = duration > 0 ? t / duration : 0
      const done = pct >= 0.8
      if (done && !completed) setCompleted(true)
      saveProgress(t, done)
    }
  }, [duration, completed, saveProgress])

  const handleLoadedMetadata = () => {
    if (audioRef.current) setDuration(audioRef.current.duration)
  }

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const t = Number(e.target.value)
    if (audioRef.current) audioRef.current.currentTime = t
    setCurrentTime(t)
  }

  const cycleSpeed = () => {
    const next = SPEEDS[(SPEEDS.indexOf(speed) + 1) % SPEEDS.length]
    setSpeed(next)
    if (audioRef.current) audioRef.current.playbackRate = next
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div>
      <audio
        ref={audioRef}
        src={episode.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => {
          setIsPlaying(false)
          setCompleted(true)
          saveProgress(duration, true)
        }}
      />

      <div className="bg-white border border-slate-200 rounded-2xl p-5 mb-6">
        <div className="mb-4">
          <h1 className="text-xl font-black text-slate-900">{episode.title}</h1>
          <p className="text-sm text-slate-500 mt-0.5">{episode.description}</p>
        </div>

        <div className="flex items-center gap-4 mb-3">
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-700 text-white flex items-center justify-center transition shrink-0"
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            )}
          </button>

          <div className="flex-1">
            <input
              type="range"
              min={0}
              max={duration || episode.durationMinutes * 60}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-2 accent-slate-900 cursor-pointer"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>{formatTime(currentTime)}</span>
              <span>{duration > 0 ? formatTime(duration) : `${episode.durationMinutes}:00`}</span>
            </div>
          </div>

          <button
            onClick={cycleSpeed}
            className="text-xs font-bold text-slate-600 border border-slate-200 rounded-lg px-2.5 py-1.5 hover:bg-slate-50 transition w-14 text-center"
          >
            {speed}x
          </button>
        </div>

        {progress >= 80 && (
          <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2">
            <span className="font-bold">✓</span> Episodio completado
          </div>
        )}
      </div>

      <div className="flex border-b border-slate-200 mb-5">
        {(['transcript', 'vocabulary'] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2.5 text-sm font-semibold border-b-2 transition ${
              tab === t
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            {t === 'transcript' ? 'Transcripción' : 'Vocabulario'}
          </button>
        ))}
      </div>

      <div className="mb-8">
        {tab === 'transcript' ? (
          <PodcastTranscript turns={episode.transcript} currentTime={currentTime} />
        ) : (
          <PodcastVocabulary items={episode.vocabulary} />
        )}
      </div>

      <div className="border-t border-slate-200 pt-6">
        <h2 className="text-base font-black text-slate-900 mb-4">Preguntas de comprensión</h2>
        <PodcastQuestions questions={episode.comprehensionQuestions} unlocked={completed} />
      </div>
    </div>
  )
}
